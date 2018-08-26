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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dH"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dH"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dH(this,d,e,f,true,[],a1).prototype
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
var dart=[["","",,H,{"^":"",oj:{"^":"b;a"}}],["","",,J,{"^":"",
K:function(a){return void 0},
dO:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cL:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dM==null){H.mS()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.ch("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$d6()]
if(v!=null)return v
v=H.mZ(a)
if(v!=null)return v
if(typeof a=="function")return C.P
y=Object.getPrototypeOf(a)
if(y==null)return C.z
if(y===Object.prototype)return C.z
if(typeof w=="function"){Object.defineProperty(w,$.$get$d6(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
t:{"^":"b;",
v:function(a,b){return a===b},
gS:function(a){return H.bP(a)},
j:["eK",function(a){return"Instance of '"+H.bi(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
i6:{"^":"t;",
j:function(a){return String(a)},
gS:function(a){return a?519018:218159},
$isaj:1},
ep:{"^":"t;",
v:function(a,b){return null==b},
j:function(a){return"null"},
gS:function(a){return 0},
$isJ:1},
d7:{"^":"t;",
gS:function(a){return 0},
j:["eL",function(a){return String(a)}]},
iP:{"^":"d7;"},
ci:{"^":"d7;"},
cc:{"^":"d7;",
j:function(a){var z=a[$.$get$e9()]
if(z==null)return this.eL(a)
return"JavaScript function for "+H.l(J.ac(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isd3:1},
bd:{"^":"t;$ti",
h:function(a,b){H.A(b,H.x(a,0))
if(!!a.fixed$length)H.r(P.B("add"))
a.push(b)},
ii:function(a,b){if(!!a.fixed$length)H.r(P.B("removeAt"))
if(b<0||b>=a.length)throw H.a(P.cd(b,null,null))
return a.splice(b,1)[0]},
G:function(a,b){var z
if(!!a.fixed$length)H.r(P.B("remove"))
for(z=0;z<a.length;++z)if(J.F(a[z],b)){a.splice(z,1)
return!0}return!1},
ci:function(a,b){var z,y
H.w(b,"$isi",[H.x(a,0)],"$asi")
if(!!a.fixed$length)H.r(P.B("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.E)(b),++y)a.push(b[y])},
M:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.x(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.b8(a))}},
a0:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.l(z,y,H.l(a[y]))
return z.join(b)},
hR:function(a,b,c,d){var z,y,x
H.A(b,d)
H.f(c,{func:1,ret:d,args:[d,H.x(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.b8(a))}return y},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
bX:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a2(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a2(c,b,a.length,"end",null))
if(b===c)return H.h([],[H.x(a,0)])
return H.h(a.slice(b,c),[H.x(a,0)])},
gaF:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.i4())},
aC:function(a,b,c,d){var z
H.A(d,H.x(a,0))
if(!!a.immutable$list)H.r(P.B("fill range"))
P.aU(b,c,a.length,null,null,null)
for(z=b;z.K(0,c);z=z.E(0,1))a[z]=d},
ba:function(a,b){var z
for(z=0;z<a.length;++z)if(J.F(a[z],b))return!0
return!1},
j:function(a){return P.d4(a,"[","]")},
ga3:function(a){return new J.az(a,a.length,0,[H.x(a,0)])},
gS:function(a){return H.bP(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.r(P.B("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cn(b,"newLength",null))
if(b<0)throw H.a(P.a2(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aQ(a,b))
if(b>=a.length||b<0)throw H.a(H.aQ(a,b))
return a[b]},
l:function(a,b,c){H.D(b)
H.A(c,H.x(a,0))
if(!!a.immutable$list)H.r(P.B("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aQ(a,b))
if(b>=a.length||b<0)throw H.a(H.aQ(a,b))
a[b]=c},
$isi:1,
$isc:1,
q:{
i5:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cn(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a2(a,0,4294967295,"length",null))
return J.em(new Array(a),b)},
em:function(a,b){return J.bJ(H.h(a,[b]))},
bJ:function(a){H.c3(a)
a.fixed$length=Array
return a},
oh:[function(a,b){return J.hg(H.h6(a,"$isal"),H.h6(b,"$isal"))},"$2","mo",8,0,51]}},
oi:{"^":"bd;$ti"},
az:{"^":"b;a,b,c,0d,$ti",
gP:function(a){return this.d},
H:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.E(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
ca:{"^":"t;",
aV:function(a,b){var z
H.h5(b)
if(typeof b!=="number")throw H.a(H.a6(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gbM(b)
if(this.gbM(a)===z)return 0
if(this.gbM(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbM:function(a){return a===0?1/a<0:a<0},
iv:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.B(""+a+".toInt()"))},
cE:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.B(""+a+".floor()"))},
ai:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.B(""+a+".round()"))},
ez:function(a,b){var z
if(b>20)throw H.a(P.a2(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gbM(a))return"-"+z
return z},
bk:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a2(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.Z(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.r(P.B("Unexpected toString result: "+z))
x=J.av(y)
z=x.i(y,1)
w=+x.i(y,3)
if(x.i(y,2)!=null){z+=x.i(y,2)
w-=x.i(y,2).length}return z+C.b.k("0",w)},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gS:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.a(H.a6(b))
return a*b},
bo:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
eM:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dA(a,b)},
a5:function(a,b){return(a|0)===a?a/b|0:this.dA(a,b)},
dA:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.B("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
aT:function(a,b){var z
if(a>0)z=this.dw(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
h6:function(a,b){if(b<0)throw H.a(H.a6(b))
return this.dw(a,b)},
dw:function(a,b){return b>31?0:a>>>b},
K:function(a,b){if(typeof b!=="number")throw H.a(H.a6(b))
return a<b},
aj:function(a,b){if(typeof b!=="number")throw H.a(H.a6(b))
return a>b},
$isal:1,
$asal:function(){return[P.V]},
$isu:1,
$isV:1},
eo:{"^":"ca;",$ism:1},
en:{"^":"ca;"},
cb:{"^":"t;",
Z:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aQ(a,b))
if(b<0)throw H.a(H.aQ(a,b))
if(b>=a.length)H.r(H.aQ(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(b>=a.length)throw H.a(H.aQ(a,b))
return a.charCodeAt(b)},
E:function(a,b){H.O(b)
if(typeof b!=="string")throw H.a(P.cn(b,null,null))
return a+b},
b4:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.a6(b))
c=P.aU(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.a6(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
ad:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.a6(c))
if(typeof c!=="number")return c.K()
if(c<0||c>a.length)throw H.a(P.a2(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
ac:function(a,b){return this.ad(a,b,0)},
A:function(a,b,c){H.D(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.a6(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.K()
if(b<0)throw H.a(P.cd(b,null,null))
if(b>c)throw H.a(P.cd(b,null,null))
if(c>a.length)throw H.a(P.cd(c,null,null))
return a.substring(b,c)},
aI:function(a,b){return this.A(a,b,null)},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.E)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
i6:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
ah:function(a,b){return this.i6(a,b," ")},
eh:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a2(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
eg:function(a,b){return this.eh(a,b,0)},
hF:function(a,b,c){if(c>a.length)throw H.a(P.a2(c,0,a.length,null,null))
return H.nk(a,b,c)},
aV:function(a,b){var z
H.O(b)
if(typeof b!=="string")throw H.a(H.a6(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
j:function(a){return a},
gS:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gm:function(a){return a.length},
$isal:1,
$asal:function(){return[P.k]},
$iseA:1,
$isk:1}}],["","",,H,{"^":"",
cM:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
i4:function(){return new P.jt("No element")},
jr:function(a,b,c){var z
H.w(a,"$isc",[c],"$asc")
H.f(b,{func:1,ret:P.m,args:[c,c]})
z=J.ao(a)
if(typeof z!=="number")return z.L()
H.cf(a,0,z-1,b,c)},
cf:function(a,b,c,d,e){H.w(a,"$isc",[e],"$asc")
H.f(d,{func:1,ret:P.m,args:[e,e]})
if(c-b<=32)H.jq(a,b,c,d,e)
else H.jp(a,b,c,d,e)},
jq:function(a,b,c,d,e){var z,y,x,w,v
H.w(a,"$isc",[e],"$asc")
H.f(d,{func:1,ret:P.m,args:[e,e]})
for(z=b+1,y=J.av(a);z<=c;++z){x=y.i(a,z)
w=z
while(!0){if(!(w>b&&J.aE(d.$2(y.i(a,w-1),x),0)))break
v=w-1
y.l(a,w,y.i(a,v))
w=v}y.l(a,w,x)}},
jp:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.w(a,"$isc",[a2],"$asc")
H.f(a1,{func:1,ret:P.m,args:[a2,a2]})
z=C.d.a5(a0-b+1,6)
y=b+z
x=a0-z
w=C.d.a5(b+a0,2)
v=w-z
u=w+z
t=J.av(a)
s=t.i(a,y)
r=t.i(a,v)
q=t.i(a,w)
p=t.i(a,u)
o=t.i(a,x)
if(J.aE(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.aE(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.aE(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.aE(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.aE(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.aE(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.aE(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.aE(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.aE(a1.$2(p,o),0)){n=o
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
if(typeof i!=="number")return i.K()
if(i<0){if(k!==m){t.l(a,k,t.i(a,m))
t.l(a,m,j)}++m}else for(;!0;){i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.aj()
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
if(typeof e!=="number")return e.K()
if(e<0){if(k!==m){t.l(a,k,t.i(a,m))
t.l(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.aj()
if(d>0)for(;!0;){i=a1.$2(t.i(a,l),p)
if(typeof i!=="number")return i.aj()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.K()
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
if(typeof i!=="number")return i.K()
h=l-1
if(i<0){t.l(a,k,t.i(a,m))
g=m+1
t.l(a,m,t.i(a,l))
t.l(a,l,j)
m=g}else{t.l(a,k,t.i(a,l))
t.l(a,l,j)}l=h
break}}H.cf(a,m,l,a1,a2)}else H.cf(a,m,l,a1,a2)},
hw:{"^":"k0;a",
gm:function(a){return this.a.length},
i:function(a,b){return C.b.Z(this.a,b)},
$ascE:function(){return[P.m]},
$asz:function(){return[P.m]},
$asi:function(){return[P.m]},
$asc:function(){return[P.m]}},
hO:{"^":"i;"},
im:{"^":"b;a,b,c,0d,$ti",
gP:function(a){return this.d},
H:function(){var z,y,x,w
z=this.a
y=J.av(z)
x=y.gm(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.b8(z))
w=this.c
if(typeof x!=="number")return H.o(x)
if(w>=x){this.d=null
return!1}this.d=y.J(z,w);++this.c
return!0}},
iv:{"^":"i;a,b,$ti",
ga3:function(a){return new H.iw(J.bE(this.a),this.b,this.$ti)},
gm:function(a){return J.ao(this.a)},
J:function(a,b){return this.b.$1(J.cS(this.a,b))},
$asi:function(a,b){return[b]}},
iw:{"^":"d5;0a,b,c,$ti",
H:function(){var z=this.b
if(z.H()){this.a=this.c.$1(z.gP(z))
return!0}this.a=null
return!1},
gP:function(a){return this.a},
$asd5:function(a,b){return[b]}},
kv:{"^":"i;a,b,$ti",
ga3:function(a){return new H.kw(J.bE(this.a),this.b,this.$ti)}},
kw:{"^":"d5;a,b,$ti",
H:function(){var z,y
for(z=this.a,y=this.b;z.H();)if(y.$1(z.gP(z)))return!0
return!1},
gP:function(a){var z=this.a
return z.gP(z)}},
cu:{"^":"b;$ti"},
cE:{"^":"b;$ti",
l:function(a,b,c){H.D(b)
H.A(c,H.aD(this,"cE",0))
throw H.a(P.B("Cannot modify an unmodifiable list"))},
aC:function(a,b,c,d){H.A(d,H.aD(this,"cE",0))
throw H.a(P.B("Cannot modify an unmodifiable list"))}},
k0:{"^":"cx+cE;"}}],["","",,H,{"^":"",
hB:function(){throw H.a(P.B("Cannot modify unmodifiable Map"))},
mN:function(a){return init.types[H.D(a)]},
h1:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.K(a).$isG},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ac(a)
if(typeof z!=="string")throw H.a(H.a6(a))
return z},
bP:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iZ:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.e(z,3)
y=H.O(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a2(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.I(w,u)|32)>x)return}return parseInt(a,b)},
bi:function(a){var z,y,x,w,v,u,t,s,r
z=J.K(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.H||!!J.K(a).$isci){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.I(w,0)===36)w=C.b.aI(w,1)
r=H.dN(H.c3(H.b5(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
iR:function(){if(!!self.location)return self.location.href
return},
eD:function(a){var z,y,x,w,v
H.c3(a)
z=J.ao(a)
if(typeof z!=="number")return z.eH()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
j_:function(a){var z,y,x,w
z=H.h([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.E)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.a6(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.d.aT(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.a6(w))}return H.eD(z)},
eE:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.a6(x))
if(x<0)throw H.a(H.a6(x))
if(x>65535)return H.j_(a)}return H.eD(a)},
j0:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.eH()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cA:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.d.aT(z,10))>>>0,56320|z&1023)}}throw H.a(P.a2(a,0,1114111,null,null))},
ai:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iY:function(a){return a.b?H.ai(a).getUTCFullYear()+0:H.ai(a).getFullYear()+0},
iW:function(a){return a.b?H.ai(a).getUTCMonth()+1:H.ai(a).getMonth()+1},
iS:function(a){return a.b?H.ai(a).getUTCDate()+0:H.ai(a).getDate()+0},
iT:function(a){return a.b?H.ai(a).getUTCHours()+0:H.ai(a).getHours()+0},
iV:function(a){return a.b?H.ai(a).getUTCMinutes()+0:H.ai(a).getMinutes()+0},
iX:function(a){return a.b?H.ai(a).getUTCSeconds()+0:H.ai(a).getSeconds()+0},
iU:function(a){return a.b?H.ai(a).getUTCMilliseconds()+0:H.ai(a).getMilliseconds()+0},
o:function(a){throw H.a(H.a6(a))},
e:function(a,b){if(a==null)J.ao(a)
throw H.a(H.aQ(a,b))},
aQ:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aR(!0,b,"index",null)
z=H.D(J.ao(a))
if(!(b<0)){if(typeof z!=="number")return H.o(z)
y=b>=z}else y=!0
if(y)return P.U(b,a,"index",null,z)
return P.cd(b,"index",null)},
mJ:function(a,b,c){if(a>c)return new P.cB(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cB(a,c,!0,b,"end","Invalid value")
return new P.aR(!0,b,"end",null)},
a6:function(a){return new P.aR(!0,a,null,null)},
my:function(a){if(typeof a!=="number")throw H.a(H.a6(a))
return a},
a:function(a){var z
if(a==null)a=new P.ez()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.ha})
z.name=""}else z.toString=H.ha
return z},
ha:function(){return J.ac(this.dartException)},
r:function(a){throw H.a(a)},
E:function(a){throw H.a(P.b8(a))},
ay:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.no(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.aT(x,16)&8191)===10)switch(w){case 438:return z.$1(H.d8(H.l(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.ey(H.l(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eR()
u=$.$get$eS()
t=$.$get$eT()
s=$.$get$eU()
r=$.$get$eY()
q=$.$get$eZ()
p=$.$get$eW()
$.$get$eV()
o=$.$get$f0()
n=$.$get$f_()
m=v.ag(y)
if(m!=null)return z.$1(H.d8(H.O(y),m))
else{m=u.ag(y)
if(m!=null){m.method="call"
return z.$1(H.d8(H.O(y),m))}else{m=t.ag(y)
if(m==null){m=s.ag(y)
if(m==null){m=r.ag(y)
if(m==null){m=q.ag(y)
if(m==null){m=p.ag(y)
if(m==null){m=s.ag(y)
if(m==null){m=o.ag(y)
if(m==null){m=n.ag(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.ey(H.O(y),m))}}return z.$1(new H.k_(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eJ()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aR(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eJ()
return a},
bC:function(a){var z
if(a==null)return new H.fv(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fv(a)},
mM:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.l(0,a[y],a[x])}return b},
mU:function(a,b,c,d,e,f){H.d(a,"$isd3")
switch(H.D(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.v("Unsupported number of arguments for wrapped closure"))},
bA:function(a,b){var z
H.D(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mU)
a.$identity=z
return z},
hv:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.K(d).$isc){z.$reflectionInfo=d
x=H.j5(z).r}else x=d
w=e?Object.create(new H.ju().constructor.prototype):Object.create(new H.cV(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aF
if(typeof u!=="number")return u.E()
$.aF=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.e5(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.mN,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.e0:H.cW
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.e5(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hs:function(a,b,c,d){var z=H.cW
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
e5:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hu(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hs(y,!w,z,b)
if(y===0){w=$.aF
if(typeof w!=="number")return w.E()
$.aF=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bF
if(v==null){v=H.co("self")
$.bF=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aF
if(typeof w!=="number")return w.E()
$.aF=w+1
t+=w
w="return function("+t+"){return this."
v=$.bF
if(v==null){v=H.co("self")
$.bF=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
ht:function(a,b,c,d){var z,y
z=H.cW
y=H.e0
switch(b?-1:a){case 0:throw H.a(H.jf("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hu:function(a,b){var z,y,x,w,v,u,t,s
z=$.bF
if(z==null){z=H.co("self")
$.bF=z}y=$.e_
if(y==null){y=H.co("receiver")
$.e_=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.ht(w,!u,x,b)
if(w===1){z="return function(){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+");"
y=$.aF
if(typeof y!=="number")return y.E()
$.aF=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+", "+s+");"
y=$.aF
if(typeof y!=="number")return y.E()
$.aF=y+1
return new Function(z+y+"}")()},
dH:function(a,b,c,d,e,f,g){var z,y
z=J.bJ(H.c3(b))
H.D(c)
y=!!J.K(d).$isc?J.bJ(d):d
return H.hv(a,z,c,y,!!e,f,g)},
O:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aB(a,"String"))},
mK:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aB(a,"double"))},
h5:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aB(a,"num"))},
fS:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aB(a,"bool"))},
D:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aB(a,"int"))},
dR:function(a,b){throw H.a(H.aB(a,H.O(b).substring(3)))},
nb:function(a,b){var z=J.av(b)
throw H.a(H.hr(a,z.A(b,3,z.gm(b))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.K(a)[b])return a
H.dR(a,b)},
j:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.K(a)[b]
else z=!0
if(z)return a
H.nb(a,b)},
h6:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.K(a)[b])return a
H.dR(a,b)},
c3:function(a){if(a==null)return a
if(!!J.K(a).$isc)return a
throw H.a(H.aB(a,"List"))},
h3:function(a,b){if(a==null)return a
if(!!J.K(a).$isc)return a
if(J.K(a)[b])return a
H.dR(a,b)},
fW:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.D(z)]
else return a.$S()}return},
cj:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fW(J.K(a))
if(z==null)return!1
y=H.h0(z,null,b,null)
return y},
f:function(a,b){var z,y
if(a==null)return a
if($.dD)return a
$.dD=!0
try{if(H.cj(a,b))return a
z=H.cm(b)
y=H.aB(a,z)
throw H.a(y)}finally{$.dD=!1}},
dK:function(a,b){if(a!=null&&!H.dG(a,b))H.r(H.aB(a,H.cm(b)))
return a},
fN:function(a){var z
if(a instanceof H.n){z=H.fW(J.K(a))
if(z!=null)return H.cm(z)
return"Closure"}return H.bi(a)},
nl:function(a){throw H.a(new P.hG(H.O(a)))},
fZ:function(a){return init.getIsolateTag(a)},
h:function(a,b){a.$ti=b
return a},
b5:function(a){if(a==null)return
return a.$ti},
pp:function(a,b,c){return H.bD(a["$as"+H.l(c)],H.b5(b))},
b4:function(a,b,c,d){var z
H.O(c)
H.D(d)
z=H.bD(a["$as"+H.l(c)],H.b5(b))
return z==null?null:z[d]},
aD:function(a,b,c){var z
H.O(b)
H.D(c)
z=H.bD(a["$as"+H.l(b)],H.b5(a))
return z==null?null:z[c]},
x:function(a,b){var z
H.D(b)
z=H.b5(a)
return z==null?null:z[b]},
cm:function(a){var z=H.b6(a,null)
return z},
b6:function(a,b){var z,y
H.w(b,"$isc",[P.k],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dN(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.D(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.e(b,y)
return H.l(b[y])}if('func' in a)return H.mn(a,b)
if('futureOr' in a)return"FutureOr<"+H.b6("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mn:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.k]
H.w(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.h([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.e(b,r)
t=C.b.E(t,b[r])
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
for(z=H.mL(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.O(z[l])
n=n+m+H.b6(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dN:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isc",[P.k],"$asc")
if(a==null)return""
z=new P.as("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b6(u,c)}v="<"+z.j(0)+">"
return v},
bD:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bz:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.b5(a)
y=J.K(a)
if(y[b]==null)return!1
return H.fQ(H.bD(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.O(b)
H.c3(c)
H.O(d)
if(a==null)return a
z=H.bz(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dN(c,0,null)
throw H.a(H.aB(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fQ:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aw(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aw(a[y],b,c[y],d))return!1
return!0},
pn:function(a,b,c){return a.apply(b,H.bD(J.K(b)["$as"+H.l(c)],H.b5(b)))},
h2:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="J"||a===-1||a===-2||H.h2(z)}return!1},
dG:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="J"||b===-1||b===-2||H.h2(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dG(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cj(a,b)}y=J.K(a).constructor
x=H.b5(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.aw(y,null,b,null)
return z},
A:function(a,b){if(a!=null&&!H.dG(a,b))throw H.a(H.aB(a,H.cm(b)))
return a},
aw:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aw(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="J")return!0
if('func' in c)return H.h0(a,b,c,d)
if('func' in a)return c.builtin$cls==="d3"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aw("type" in a?a.type:null,b,x,d)
else if(H.aw(a,b,x,d))return!0
else{if(!('$is'+"bH" in y.prototype))return!1
w=y.prototype["$as"+"bH"]
v=H.bD(w,z?a.slice(1):null)
return H.aw(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cm(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fQ(H.bD(r,z),b,u,d)},
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
return H.n9(m,b,l,d)},
n9:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aw(c[w],d,a[w],b))return!1}return!0},
po:function(a,b,c){Object.defineProperty(a,H.O(b),{value:c,enumerable:false,writable:true,configurable:true})},
mZ:function(a){var z,y,x,w,v,u
z=H.O($.h_.$1(a))
y=$.cK[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cN[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.O($.fP.$2(a,z))
if(z!=null){y=$.cK[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cN[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cO(x)
$.cK[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cN[z]=x
return x}if(v==="-"){u=H.cO(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.h7(a,x)
if(v==="*")throw H.a(P.ch(z))
if(init.leafTags[z]===true){u=H.cO(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.h7(a,x)},
h7:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dO(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cO:function(a){return J.dO(a,!1,null,!!a.$isG)},
n8:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cO(z)
else return J.dO(z,c,null,null)},
mS:function(){if(!0===$.dM)return
$.dM=!0
H.mT()},
mT:function(){var z,y,x,w,v,u,t,s
$.cK=Object.create(null)
$.cN=Object.create(null)
H.mO()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.h8.$1(v)
if(u!=null){t=H.n8(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mO:function(){var z,y,x,w,v,u,t
z=C.M()
z=H.by(C.J,H.by(C.O,H.by(C.u,H.by(C.u,H.by(C.N,H.by(C.K,H.by(C.L(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.h_=new H.mP(v)
$.fP=new H.mQ(u)
$.h8=new H.mR(t)},
by:function(a,b){return a(b)||b},
nk:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hA:{"^":"b;$ti",
j:function(a){return P.da(this)},
l:function(a,b,c){H.A(b,H.x(this,0))
H.A(c,H.x(this,1))
return H.hB()},
$isL:1},
hC:{"^":"hA;a,b,c,$ti",
gm:function(a){return this.a},
cr:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.cr(0,b))return
return this.dj(b)},
dj:function(a){return this.b[H.O(a)]},
M:function(a,b){var z,y,x,w,v
z=H.x(this,1)
H.f(b,{func:1,ret:-1,args:[H.x(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.A(this.dj(v),z))}}},
j4:{"^":"b;a,b,c,d,e,f,r,0x",q:{
j5:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bJ(z)
y=z[0]
x=z[1]
return new H.j4(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jM:{"^":"b;a,b,c,d,e,f",
ag:function(a){var z,y,x
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
aN:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.h([],[P.k])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jM(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cD:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eX:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iM:{"^":"a7;a,b",
j:function(a){var z=this.b
if(z==null)return"NullError: "+H.l(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
ey:function(a,b){return new H.iM(a,b==null?null:b.method)}}},
i9:{"^":"a7;a,b,c",
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
return new H.i9(a,y,z?null:b.receiver)}}},
k_:{"^":"a7;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
no:{"^":"n:19;a",
$1:function(a){if(!!J.K(a).$isa7)if(a.$thrownJsError==null)a.$thrownJsError=this.a
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
j:function(a){return"Closure '"+H.bi(this).trim()+"'"},
geE:function(){return this},
$isd3:1,
geE:function(){return this}},
eN:{"^":"n;"},
ju:{"^":"eN;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cV:{"^":"eN;a,b,c,d",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cV))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gS:function(a){var z,y
z=this.c
if(z==null)y=H.bP(this.a)
else y=typeof z!=="object"?J.b7(z):H.bP(z)
return(y^H.bP(this.b))>>>0},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bi(z)+"'")},
q:{
cW:function(a){return a.a},
e0:function(a){return a.c},
co:function(a){var z,y,x,w,v
z=new H.cV("self","target","receiver","name")
y=J.bJ(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jN:{"^":"a7;a",
j:function(a){return this.a},
q:{
aB:function(a,b){return new H.jN("TypeError: "+H.l(P.ct(a))+": type '"+H.fN(a)+"' is not a subtype of type '"+b+"'")}}},
hq:{"^":"a7;a",
j:function(a){return this.a},
q:{
hr:function(a,b){return new H.hq("CastError: "+H.l(P.ct(a))+": type '"+H.fN(a)+"' is not a subtype of type '"+b+"'")}}},
je:{"^":"a7;a",
j:function(a){return"RuntimeError: "+H.l(this.a)},
q:{
jf:function(a){return new H.je(a)}}},
cw:{"^":"is;a,0b,0c,0d,0e,0f,r,$ti",
gm:function(a){return this.a},
gaE:function(a){return new H.ie(this,[H.x(this,0)])},
cr:function(a,b){var z=this.b
if(z==null)return!1
return this.f2(z,b)},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bq(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bq(w,b)
x=y==null?null:y.b
return x}else return this.hW(b)},
hW:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.dl(z,this.ej(a))
x=this.ek(y,a)
if(x<0)return
return y[x].b},
l:function(a,b,c){var z,y
H.A(b,H.x(this,0))
H.A(c,H.x(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.c8()
this.b=z}this.d8(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c8()
this.c=y}this.d8(y,b,c)}else this.hX(b,c)},
hX:function(a,b){var z,y,x,w
H.A(a,H.x(this,0))
H.A(b,H.x(this,1))
z=this.d
if(z==null){z=this.c8()
this.d=z}y=this.ej(a)
x=this.dl(z,y)
if(x==null)this.cf(z,y,[this.c9(a,b)])
else{w=this.ek(x,a)
if(w>=0)x[w].b=b
else x.push(this.c9(a,b))}},
M:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.b8(this))
z=z.c}},
d8:function(a,b,c){var z
H.A(b,H.x(this,0))
H.A(c,H.x(this,1))
z=this.bq(a,b)
if(z==null)this.cf(a,b,this.c9(b,c))
else z.b=c},
fc:function(){this.r=this.r+1&67108863},
c9:function(a,b){var z,y
z=new H.id(H.A(a,H.x(this,0)),H.A(b,H.x(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fc()
return z},
ej:function(a){return J.b7(a)&0x3ffffff},
ek:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.F(a[y].a,b))return y
return-1},
j:function(a){return P.da(this)},
bq:function(a,b){return a[b]},
dl:function(a,b){return a[b]},
cf:function(a,b,c){a[b]=c},
f5:function(a,b){delete a[b]},
f2:function(a,b){return this.bq(a,b)!=null},
c8:function(){var z=Object.create(null)
this.cf(z,"<non-identifier-key>",z)
this.f5(z,"<non-identifier-key>")
return z},
$ises:1},
id:{"^":"b;a,b,0c,0d"},
ie:{"^":"hO;a,$ti",
gm:function(a){return this.a.a},
ga3:function(a){var z,y
z=this.a
y=new H.ig(z,z.r,this.$ti)
y.c=z.e
return y}},
ig:{"^":"b;a,b,0c,0d,$ti",
gP:function(a){return this.d},
H:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b8(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
mP:{"^":"n:19;a",
$1:function(a){return this.a(a)}},
mQ:{"^":"n:30;a",
$2:function(a,b){return this.a(a,b)}},
mR:{"^":"n:47;a",
$1:function(a){return this.a(H.O(a))}},
i7:{"^":"b;a,b,0c,0d",
j:function(a){return"RegExp/"+this.a+"/"},
$iseA:1,
$isj6:1,
q:{
i8:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.a0("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mL:function(a){return J.em(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
na:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bw:function(a){return a},
iI:function(a){return new Int8Array(a)},
aP:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aQ(b,a))},
mh:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.mJ(a,b,c))
return b},
ex:{"^":"t;",$isex:1,"%":"ArrayBuffer"},
df:{"^":"t;",$isdf:1,$isjO:1,"%":"DataView;ArrayBufferView;de|fp|fq|iJ|fr|fs|b3"},
de:{"^":"df;",
gm:function(a){return a.length},
$isG:1,
$asG:I.dJ},
iJ:{"^":"fq;",
i:function(a,b){H.aP(b,a,a.length)
return a[b]},
l:function(a,b,c){H.D(b)
H.mK(c)
H.aP(b,a,a.length)
a[b]=c},
$ascu:function(){return[P.u]},
$asz:function(){return[P.u]},
$isi:1,
$asi:function(){return[P.u]},
$isc:1,
$asc:function(){return[P.u]},
"%":"Float32Array|Float64Array"},
b3:{"^":"fs;",
l:function(a,b,c){H.D(b)
H.D(c)
H.aP(b,a,a.length)
a[b]=c},
$ascu:function(){return[P.m]},
$asz:function(){return[P.m]},
$isi:1,
$asi:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]}},
ou:{"^":"b3;",
i:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"Int16Array"},
ov:{"^":"b3;",
i:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"Int32Array"},
ow:{"^":"b3;",
i:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"Int8Array"},
ox:{"^":"b3;",
i:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
oy:{"^":"b3;",
i:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
oz:{"^":"b3;",
gm:function(a){return a.length},
i:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
dg:{"^":"b3;",
gm:function(a){return a.length},
i:function(a,b){H.aP(b,a,a.length)
return a[b]},
bX:function(a,b,c){return new Uint8Array(a.subarray(b,H.mh(b,c,a.length)))},
$isdg:1,
$isT:1,
"%":";Uint8Array"},
fp:{"^":"de+z;"},
fq:{"^":"fp+cu;"},
fr:{"^":"de+z;"},
fs:{"^":"fr+cu;"}}],["","",,P,{"^":"",
ky:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mv()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bA(new P.kA(z),1)).observe(y,{childList:true})
return new P.kz(z,y,x)}else if(self.setImmediate!=null)return P.mw()
return P.mx()},
pc:[function(a){self.scheduleImmediate(H.bA(new P.kB(H.f(a,{func:1,ret:-1})),0))},"$1","mv",4,0,11],
pd:[function(a){self.setImmediate(H.bA(new P.kC(H.f(a,{func:1,ret:-1})),0))},"$1","mw",4,0,11],
pe:[function(a){H.f(a,{func:1,ret:-1})
P.lB(0,a)},"$1","mx",4,0,11],
eP:function(a,b){var z
H.f(b,{func:1,ret:-1,args:[P.bp]})
z=C.d.a5(a.a,1000)
return P.lC(z<0?0:z,b)},
mr:function(a,b){if(H.cj(a,{func:1,args:[P.b,P.aA]}))return b.ih(a,null,P.b,P.aA)
if(H.cj(a,{func:1,args:[P.b]}))return H.f(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cn(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mq:function(){var z,y
for(;z=$.bx,z!=null;){$.c1=null
y=z.b
$.bx=y
if(y==null)$.c0=null
z.a.$0()}},
pm:[function(){$.dE=!0
try{P.mq()}finally{$.c1=null
$.dE=!1
if($.bx!=null)$.$get$dx().$1(P.fR())}},"$0","fR",0,0,3],
fM:function(a){var z=new P.fi(H.f(a,{func:1,ret:-1}))
if($.bx==null){$.c0=z
$.bx=z
if(!$.dE)$.$get$dx().$1(P.fR())}else{$.c0.b=z
$.c0=z}},
mu:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
z=$.bx
if(z==null){P.fM(a)
$.c1=$.c0
return}y=new P.fi(a)
x=$.c1
if(x==null){y.b=z
$.c1=y
$.bx=y}else{y.b=x.b
x.b=y
$.c1=y
if(y.b==null)$.c0=y}},
nc:function(a){var z,y
z={func:1,ret:-1}
H.f(a,z)
y=$.X
if(C.j===y){P.cJ(null,null,C.j,a)
return}y.toString
P.cJ(null,null,y,H.f(y.dI(a),z))},
jK:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bp]}
H.f(b,z)
y=$.X
if(y===C.j){y.toString
return P.eP(a,b)}x=y.dJ(b,P.bp)
$.X.toString
return P.eP(a,H.f(x,z))},
cI:function(a,b,c,d,e){var z={}
z.a=d
P.mu(new P.ms(z,e))},
fI:function(a,b,c,d,e){var z,y
H.f(d,{func:1,ret:e})
y=$.X
if(y===c)return d.$0()
$.X=c
z=y
try{y=d.$0()
return y}finally{$.X=z}},
fJ:function(a,b,c,d,e,f,g){var z,y
H.f(d,{func:1,ret:f,args:[g]})
H.A(e,g)
y=$.X
if(y===c)return d.$1(e)
$.X=c
z=y
try{y=d.$1(e)
return y}finally{$.X=z}},
mt:function(a,b,c,d,e,f,g,h,i){var z,y
H.f(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
y=$.X
if(y===c)return d.$2(e,f)
$.X=c
z=y
try{y=d.$2(e,f)
return y}finally{$.X=z}},
cJ:function(a,b,c,d){var z
H.f(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.dI(d):c.hC(d,-1)
P.fM(d)},
kA:{"^":"n:16;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kz:{"^":"n:46;a,b,c",
$1:function(a){var z,y
this.a.a=H.f(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kB:{"^":"n:0;a",
$0:function(){this.a.$0()}},
kC:{"^":"n:0;a",
$0:function(){this.a.$0()}},
fy:{"^":"b;a,0b,c",
eT:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bA(new P.lE(this,b),0),a)
else throw H.a(P.B("`setTimeout()` not found."))},
eU:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bA(new P.lD(this,a,Date.now(),b),0),a)
else throw H.a(P.B("Periodic timer."))},
$isbp:1,
q:{
lB:function(a,b){var z=new P.fy(!0,0)
z.eT(a,b)
return z},
lC:function(a,b){var z=new P.fy(!1,0)
z.eU(a,b)
return z}}},
lE:{"^":"n:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lD:{"^":"n:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.d.eM(w,x)}z.c=y
this.d.$1(z)}},
bv:{"^":"b;0a,b,c,d,e,$ti",
i0:function(a){if(this.c!==6)return!0
return this.b.b.cS(H.f(this.d,{func:1,ret:P.aj,args:[P.b]}),a.a,P.aj,P.b)},
hU:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.x(this,1)}
w=this.b.b
if(H.cj(z,{func:1,args:[P.b,P.aA]}))return H.dK(w.ip(z,a.a,a.b,null,y,P.aA),x)
else return H.dK(w.cS(H.f(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
b_:{"^":"b;dz:a<,b,0fW:c<,$ti",
ey:function(a,b,c){var z,y,x,w
z=H.x(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.X
if(y!==C.j){y.toString
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.mr(b,y)}H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.b_(0,$.X,[c])
w=b==null?1:3
this.d9(new P.bv(x,w,a,b,[z,c]))
return x},
iu:function(a,b){return this.ey(a,null,b)},
d9:function(a){var z,y
z=this.a
if(z<=1){a.a=H.d(this.c,"$isbv")
this.c=a}else{if(z===2){y=H.d(this.c,"$isb_")
z=y.a
if(z<4){y.d9(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cJ(null,null,z,H.f(new P.kR(this,a),{func:1,ret:-1}))}},
ds:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.d(this.c,"$isbv")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.d(this.c,"$isb_")
y=u.a
if(y<4){u.ds(a)
return}this.a=y
this.c=u.c}z.a=this.bs(a)
y=this.b
y.toString
P.cJ(null,null,y,H.f(new P.kW(z,this),{func:1,ret:-1}))}},
cb:function(){var z=H.d(this.c,"$isbv")
this.c=null
return this.bs(z)},
bs:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
de:function(a){var z,y,x,w
z=H.x(this,0)
H.dK(a,{futureOr:1,type:z})
y=this.$ti
x=H.bz(a,"$isbH",y,"$asbH")
if(x){z=H.bz(a,"$isb_",y,null)
if(z)P.fl(a,this)
else P.kS(a,this)}else{w=this.cb()
H.A(a,z)
this.a=4
this.c=a
P.bW(this,w)}},
c0:[function(a,b){var z
H.d(b,"$isaA")
z=this.cb()
this.a=8
this.c=new P.ap(a,b)
P.bW(this,z)},function(a){return this.c0(a,null)},"iy","$2","$1","gf0",4,2,38],
$isbH:1,
q:{
kS:function(a,b){var z,y,x
b.a=1
try{a.ey(new P.kT(b),new P.kU(b),null)}catch(x){z=H.ay(x)
y=H.bC(x)
P.nc(new P.kV(b,z,y))}},
fl:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.d(a.c,"$isb_")
if(z>=4){y=b.cb()
b.a=a.a
b.c=a.c
P.bW(b,y)}else{y=H.d(b.c,"$isbv")
b.a=2
b.c=a
a.ds(y)}},
bW:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.d(y.c,"$isap")
y=y.b
u=v.a
t=v.b
y.toString
P.cI(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
if(p){H.d(r,"$isap")
y=y.b
u=r.a
t=r.b
y.toString
P.cI(null,null,y,u,t)
return}o=$.X
if(o==null?q!=null:o!==q)$.X=q
else o=null
y=b.c
if(y===8)new P.kZ(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kY(x,b,r).$0()}else if((y&2)!==0)new P.kX(z,x,b).$0()
if(o!=null)$.X=o
y=x.b
if(!!J.K(y).$isbH){if(y.a>=4){n=H.d(t.c,"$isbv")
t.c=null
b=t.bs(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fl(y,t)
return}}m=b.b
n=H.d(m.c,"$isbv")
m.c=null
b=m.bs(n)
y=x.a
u=x.b
if(!y){H.A(u,H.x(m,0))
m.a=4
m.c=u}else{H.d(u,"$isap")
m.a=8
m.c=u}z.a=m
y=m}}}},
kR:{"^":"n:0;a,b",
$0:function(){P.bW(this.a,this.b)}},
kW:{"^":"n:0;a,b",
$0:function(){P.bW(this.b,this.a.a)}},
kT:{"^":"n:16;a",
$1:function(a){var z=this.a
z.a=0
z.de(a)}},
kU:{"^":"n:41;a",
$2:function(a,b){this.a.c0(a,H.d(b,"$isaA"))},
$1:function(a){return this.$2(a,null)}},
kV:{"^":"n:0;a,b,c",
$0:function(){this.a.c0(this.b,this.c)}},
kZ:{"^":"n:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.ex(H.f(w.d,{func:1}),null)}catch(v){y=H.ay(v)
x=H.bC(v)
if(this.d){w=H.d(this.a.a.c,"$isap").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.d(this.a.a.c,"$isap")
else u.b=new P.ap(y,x)
u.a=!0
return}if(!!J.K(z).$isbH){if(z instanceof P.b_&&z.gdz()>=4){if(z.gdz()===8){w=this.b
w.b=H.d(z.gfW(),"$isap")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.iu(new P.l_(t),null)
w.a=!1}}},
l_:{"^":"n:53;a",
$1:function(a){return this.a}},
kY:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.x(x,0)
v=H.A(this.c,w)
u=H.x(x,1)
this.a.b=x.b.b.cS(H.f(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ay(t)
y=H.bC(t)
x=this.a
x.b=new P.ap(z,y)
x.a=!0}}},
kX:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.d(this.a.a.c,"$isap")
w=this.c
if(w.i0(z)&&w.e!=null){v=this.b
v.b=w.hU(z)
v.a=!1}}catch(u){y=H.ay(u)
x=H.bC(u)
w=H.d(this.a.a.c,"$isap")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ap(y,x)
s.a=!0}}},
fi:{"^":"b;a,0b"},
dl:{"^":"b;$ti",
gm:function(a){var z,y
z={}
y=new P.b_(0,$.X,[P.m])
z.a=0
this.hZ(new P.jx(z,this),!0,new P.jy(z,y),y.gf0())
return y}},
jx:{"^":"n;a,b",
$1:function(a){H.A(a,H.aD(this.b,"dl",0));++this.a.a},
$S:function(){return{func:1,ret:P.J,args:[H.aD(this.b,"dl",0)]}}},
jy:{"^":"n:0;a,b",
$0:function(){this.b.de(this.a.a)}},
eK:{"^":"b;$ti"},
jw:{"^":"b;"},
bp:{"^":"b;"},
ap:{"^":"b;a,b",
j:function(a){return H.l(this.a)},
$isa7:1},
m5:{"^":"b;",$ispb:1},
ms:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.ez()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.j(0)
throw x}},
lj:{"^":"m5;",
iq:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
try{if(C.j===$.X){a.$0()
return}P.fI(null,null,this,a,-1)}catch(x){z=H.ay(x)
y=H.bC(x)
P.cI(null,null,this,z,H.d(y,"$isaA"))}},
ir:function(a,b,c){var z,y,x
H.f(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.j===$.X){a.$1(b)
return}P.fJ(null,null,this,a,b,-1,c)}catch(x){z=H.ay(x)
y=H.bC(x)
P.cI(null,null,this,z,H.d(y,"$isaA"))}},
hC:function(a,b){return new P.ll(this,H.f(a,{func:1,ret:b}),b)},
dI:function(a){return new P.lk(this,H.f(a,{func:1,ret:-1}))},
dJ:function(a,b){return new P.lm(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
ex:function(a,b){H.f(a,{func:1,ret:b})
if($.X===C.j)return a.$0()
return P.fI(null,null,this,a,b)},
cS:function(a,b,c,d){H.f(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.X===C.j)return a.$1(b)
return P.fJ(null,null,this,a,b,c,d)},
ip:function(a,b,c,d,e,f){H.f(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.X===C.j)return a.$2(b,c)
return P.mt(null,null,this,a,b,c,d,e,f)},
ih:function(a,b,c,d){return H.f(a,{func:1,ret:b,args:[c,d]})}},
ll:{"^":"n;a,b,c",
$0:function(){return this.a.ex(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
lk:{"^":"n:3;a,b",
$0:function(){return this.a.iq(this.b)}},
lm:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.ir(this.b,H.A(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
ih:function(a,b,c,d,e){return new H.cw(0,0,[d,e])},
ii:function(a,b,c){H.c3(a)
return H.w(H.mM(a,new H.cw(0,0,[b,c])),"$ises",[b,c],"$ases")},
et:function(a,b){return new H.cw(0,0,[a,b])},
il:function(a,b,c,d){return new P.l5(0,0,[d])},
i3:function(a,b,c){var z,y
if(P.dF(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$c2()
C.a.h(y,a)
try{P.mp(a,z)}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=P.eL(b,H.h3(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
d4:function(a,b,c){var z,y,x
if(P.dF(a))return b+"..."+c
z=new P.as(b)
y=$.$get$c2()
C.a.h(y,a)
try{x=z
x.a=P.eL(x.gaO(),a,", ")}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=z
y.a=y.gaO()+c
y=z.gaO()
return y.charCodeAt(0)==0?y:y},
dF:function(a){var z,y
for(z=0;y=$.$get$c2(),z<y.length;++z)if(a===y[z])return!0
return!1},
mp:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga3(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.H())return
w=H.l(z.gP(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.H()){if(x<=5)return
if(0>=b.length)return H.e(b,-1)
v=b.pop()
if(0>=b.length)return H.e(b,-1)
u=b.pop()}else{t=z.gP(z);++x
if(!z.H()){if(x<=4){C.a.h(b,H.l(t))
return}v=H.l(t)
if(0>=b.length)return H.e(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gP(z);++x
for(;z.H();t=s,s=r){r=z.gP(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.e(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.l(t)
v=H.l(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
ij:function(a,b,c){var z=P.ih(null,null,null,b,c)
a.M(0,new P.ik(z,b,c))
return z},
da:function(a){var z,y,x
z={}
if(P.dF(a))return"{...}"
y=new P.as("")
try{C.a.h($.$get$c2(),a)
x=y
x.a=x.gaO()+"{"
z.a=!0
J.dU(a,new P.it(z,y))
z=y
z.a=z.gaO()+"}"}finally{z=$.$get$c2()
if(0>=z.length)return H.e(z,-1)
z.pop()}z=y.gaO()
return z.charCodeAt(0)==0?z:z},
l5:{"^":"l0;a,0b,0c,0d,0e,0f,r,$ti",
ga3:function(a){return P.fo(this,this.r,H.x(this,0))},
gm:function(a){return this.a},
h:function(a,b){var z,y
H.A(b,H.x(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dz()
this.b=z}return this.dc(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dz()
this.c=y}return this.dc(y,b)}else return this.eV(0,b)},
eV:function(a,b){var z,y,x
H.A(b,H.x(this,0))
z=this.d
if(z==null){z=P.dz()
this.d=z}y=this.df(b)
x=z[y]
if(x==null)z[y]=[this.c_(b)]
else{if(this.dk(x,b)>=0)return!1
x.push(this.c_(b))}return!0},
G:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.dt(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dt(this.c,b)
else return this.fN(0,b)},
fN:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.f9(z,b)
x=this.dk(y,b)
if(x<0)return!1
this.dB(y.splice(x,1)[0])
return!0},
dc:function(a,b){H.A(b,H.x(this,0))
if(H.d(a[b],"$isdy")!=null)return!1
a[b]=this.c_(b)
return!0},
dt:function(a,b){var z
if(a==null)return!1
z=H.d(a[b],"$isdy")
if(z==null)return!1
this.dB(z)
delete a[b]
return!0},
dd:function(){this.r=this.r+1&67108863},
c_:function(a){var z,y
z=new P.dy(H.A(a,H.x(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dd()
return z},
dB:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dd()},
df:function(a){return J.b7(a)&0x3ffffff},
f9:function(a,b){return a[this.df(b)]},
dk:function(a,b){var z,y
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
l6:{"^":"b;a,b,0c,0d,$ti",
gP:function(a){return this.d},
H:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b8(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.A(z.a,H.x(this,0))
this.c=z.b
return!0}}},
q:{
fo:function(a,b,c){var z=new P.l6(a,b,[c])
z.c=a.e
return z}}},
l0:{"^":"jg;"},
ik:{"^":"n:7;a,b,c",
$2:function(a,b){this.a.l(0,H.A(a,this.b),H.A(b,this.c))}},
cx:{"^":"l7;",$isi:1,$isc:1},
z:{"^":"b;$ti",
ga3:function(a){return new H.im(a,this.gm(a),0,[H.b4(this,a,"z",0)])},
J:function(a,b){return this.i(a,b)},
iw:function(a,b){var z,y,x
z=H.h([],[H.b4(this,a,"z",0)])
C.a.sm(z,this.gm(a))
y=0
while(!0){x=this.gm(a)
if(typeof x!=="number")return H.o(x)
if(!(y<x))break
C.a.l(z,y,this.i(a,y));++y}return z},
cU:function(a){return this.iw(a,!0)},
aC:function(a,b,c,d){var z
H.A(d,H.b4(this,a,"z",0))
P.aU(b,c,this.gm(a),null,null,null)
for(z=b;z<c;++z)this.l(a,z,d)},
j:function(a){return P.d4(a,"[","]")}},
is:{"^":"am;"},
it:{"^":"n:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.l(a)
z.a=y+": "
z.a+=H.l(b)}},
am:{"^":"b;$ti",
M:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.b4(this,a,"am",0),H.b4(this,a,"am",1)]})
for(z=J.bE(this.gaE(a));z.H();){y=z.gP(z)
b.$2(y,this.i(a,y))}},
gm:function(a){return J.ao(this.gaE(a))},
j:function(a){return P.da(a)},
$isL:1},
lJ:{"^":"b;$ti",
l:function(a,b,c){H.A(b,H.x(this,0))
H.A(c,H.x(this,1))
throw H.a(P.B("Cannot modify unmodifiable map"))}},
iu:{"^":"b;$ti",
i:function(a,b){return J.dT(this.a,b)},
l:function(a,b,c){J.cQ(this.a,H.A(b,H.x(this,0)),H.A(c,H.x(this,1)))},
M:function(a,b){J.dU(this.a,H.f(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]}))},
gm:function(a){return J.ao(this.a)},
j:function(a){return J.ac(this.a)},
$isL:1},
f7:{"^":"lK;a,$ti"},
jh:{"^":"b;$ti",
j:function(a){return P.d4(this,"{","}")},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dW("index"))
if(b<0)H.r(P.a2(b,0,null,"index",null))
for(z=P.fo(this,this.r,H.x(this,0)),y=0;z.H();){x=z.d
if(b===y)return x;++y}throw H.a(P.U(b,this,"index",null,y))},
$isi:1},
jg:{"^":"jh;"},
l7:{"^":"b+z;"},
lK:{"^":"iu+lJ;$ti"}}],["","",,P,{"^":"",hn:{"^":"c5;a",
i1:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aU(c,d,b.length,null,null,null)
z=$.$get$fj()
if(typeof d!=="number")return H.o(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.I(b,y)
if(r===37){q=s+2
if(q<=d){p=H.cM(C.b.I(b,s))
o=H.cM(C.b.I(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.e(z,n)
m=z[n]
if(m>=0){n=C.b.Z("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.as("")
w.a+=C.b.A(b,x,y)
w.a+=H.cA(r)
x=s
continue}}throw H.a(P.a0("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.A(b,x,d)
k=l.length
if(v>=0)P.dZ(b,u,d,v,t,k)
else{j=C.d.bo(k-1,4)+1
if(j===1)throw H.a(P.a0("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.b4(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dZ(b,u,d,v,t,i)
else{j=C.d.bo(i,4)
if(j===1)throw H.a(P.a0("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.b4(b,d,d,j===2?"==":"=")}return b},
$asc5:function(){return[[P.c,P.m],P.k]},
q:{
dZ:function(a,b,c,d,e,f){if(C.d.bo(f,4)!==0)throw H.a(P.a0("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.a0("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.a0("Invalid base64 padding, more than two '=' characters",a,b))}}},ho:{"^":"bG;a",
$asbG:function(){return[[P.c,P.m],P.k]}},c5:{"^":"b;$ti"},bG:{"^":"jw;$ti"},hQ:{"^":"c5;",
$asc5:function(){return[P.k,[P.c,P.m]]}},kd:{"^":"hQ;a",
ghN:function(){return C.F}},kk:{"^":"bG;",
bb:function(a,b,c){var z,y,x,w
z=a.length
P.aU(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.m4(0,0,x)
if(w.f7(a,b,z)!==z)w.dC(J.hf(a,z-1),0)
return C.U.bX(x,0,w.b)},
cs:function(a){return this.bb(a,0,null)},
$asbG:function(){return[P.k,[P.c,P.m]]}},m4:{"^":"b;a,b,c",
dC:function(a,b){var z,y,x,w,v
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
f7:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.Z(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.I(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dC(w,C.b.I(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},ke:{"^":"bG;a",
bb:function(a,b,c){var z,y,x,w,v
H.w(a,"$isc",[P.m],"$asc")
z=P.kf(!1,a,b,c)
if(z!=null)return z
y=J.ao(a)
P.aU(b,c,y,null,null,null)
x=new P.as("")
w=new P.m1(!1,x,!0,0,0,0)
w.bb(a,b,y)
w.hQ(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cs:function(a){return this.bb(a,0,null)},
$asbG:function(){return[[P.c,P.m],P.k]},
q:{
kf:function(a,b,c,d){H.w(b,"$isc",[P.m],"$asc")
if(b instanceof Uint8Array)return P.kg(!1,b,c,d)
return},
kg:function(a,b,c,d){var z,y,x
z=$.$get$fb()
if(z==null)return
y=0===c
if(y&&!0)return P.du(z,b)
x=b.length
d=P.aU(c,d,x,null,null,null)
if(y&&d===x)return P.du(z,b)
return P.du(z,b.subarray(c,d))},
du:function(a,b){if(P.ki(b))return
return P.kj(a,b)},
kj:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.ay(y)}return},
ki:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
kh:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.ay(y)}return}}},m1:{"^":"b;a,b,c,d,e,f",
hQ:function(a,b,c){var z
H.w(b,"$isc",[P.m],"$asc")
if(this.e>0){z=P.a0("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
bb:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(a,"$isc",[P.m],"$asc")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.m3(c)
v=new P.m2(this,b,c,a)
$label0$0:for(u=J.av(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.i(a,s)
if(typeof r!=="number")return r.bU()
if((r&192)!==128){q=P.a0("Bad UTF-8 encoding 0x"+C.d.bk(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.e(C.w,q)
if(z<=C.w[q]){q=P.a0("Overlong encoding of 0x"+C.d.bk(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.a0("Character outside valid Unicode range: 0x"+C.d.bk(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cA(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.aj()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.i(a,o)
if(typeof r!=="number")return r.K()
if(r<0){m=P.a0("Negative UTF-8 code unit: -0x"+C.d.bk(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.a0("Bad UTF-8 encoding 0x"+C.d.bk(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},m3:{"^":"n:52;a",
$2:function(a,b){var z,y,x,w
H.w(a,"$isc",[P.m],"$asc")
z=this.a
for(y=J.av(a),x=b;x<z;++x){w=y.i(a,x)
if(typeof w!=="number")return w.bU()
if((w&127)!==w)return x-b}return z-b}},m2:{"^":"n:29;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.eM(this.d,a,b)}}}],["","",,P,{"^":"",
cl:function(a,b,c){var z
H.f(b,{func:1,ret:P.m,args:[P.k]})
z=H.iZ(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.a0(a,null,null))},
hS:function(a){var z=J.K(a)
if(!!z.$isn)return z.j(a)
return"Instance of '"+H.bi(a)+"'"},
io:function(a,b,c,d){var z,y
H.A(b,d)
z=J.i5(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.l(z,y,b)
return H.w(z,"$isc",[d],"$asc")},
ip:function(a,b,c){var z,y,x
z=[c]
y=H.h([],z)
for(x=a.ga3(a);x.H();)C.a.h(y,H.A(x.gP(x),c))
if(b)return y
return H.w(J.bJ(y),"$isc",z,"$asc")},
eM:function(a,b,c){var z,y
z=P.m
H.w(a,"$isi",[z],"$asi")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.w(a,"$isbd",[z],"$asbd")
y=a.length
c=P.aU(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.K()
z=c<y}else z=!0
return H.eE(z?C.a.bX(a,b,c):a)}if(!!J.K(a).$isdg)return H.j0(a,b,P.aU(b,c,a.length,null,null,null))
return P.jz(a,b,c)},
jz:function(a,b,c){var z,y,x,w
H.w(a,"$isi",[P.m],"$asi")
if(b<0)throw H.a(P.a2(b,0,J.ao(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a2(c,b,J.ao(a),null,null))
y=J.bE(a)
for(x=0;x<b;++x)if(!y.H())throw H.a(P.a2(b,0,x,null,null))
w=[]
if(z)for(;y.H();)w.push(y.gP(y))
else for(x=b;x<c;++x){if(!y.H())throw H.a(P.a2(c,b,x,null,null))
w.push(y.gP(y))}return H.eE(w)},
j7:function(a,b,c){return new H.i7(a,H.i8(a,!1,!0,!1))},
dt:function(){var z=H.iR()
if(z!=null)return P.k5(z,0,null)
throw H.a(P.B("'Uri.base' is not supported"))},
ct:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ac(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hS(a)},
v:function(a){return new P.fk(a)},
iq:function(a,b,c,d){var z,y
H.f(b,{func:1,ret:d,args:[P.m]})
z=H.h([],[d])
C.a.sm(z,a)
for(y=0;y<a;++y)C.a.l(z,y,b.$1(y))
return z},
dQ:function(a){H.na(a)},
k5:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.I(a,b+4)^58)*3|C.b.I(a,b)^100|C.b.I(a,b+1)^97|C.b.I(a,b+2)^116|C.b.I(a,b+3)^97)>>>0
if(y===0)return P.f8(b>0||c<c?C.b.A(a,b,c):a,5,null).geB()
else if(y===32)return P.f8(C.b.A(a,z,c),0,null).geB()}x=new Array(8)
x.fixed$length=Array
w=H.h(x,[P.m])
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
if(typeof v!=="number")return v.cZ()
if(v>=b)if(P.fK(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.E()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.K()
if(typeof r!=="number")return H.o(r)
if(q<r)r=q
if(typeof s!=="number")return s.K()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.K()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.K()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.ad(a,"..",s)))n=r>s+2&&C.b.ad(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.ad(a,"file",b)){if(u<=b){if(!C.b.ad(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.b.A(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.b.b4(a,s,r,"/");++r;++q;++c}else{a=C.b.A(a,b,s)+"/"+C.b.A(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.ad(a,"http",b)){if(x&&t+3===s&&C.b.ad(a,"80",t+1))if(b===0&&!0){a=C.b.b4(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.b.A(a,b,t)+C.b.A(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.b.ad(a,"https",b)){if(x&&t+4===s&&C.b.ad(a,"443",t+1))if(b===0&&!0){a=C.b.b4(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.b.A(a,b,t)+C.b.A(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.b.A(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.lo(a,v,u,t,s,r,q,o)}return P.lL(a,b,c,v,u,t,s,r,q,o)},
fa:function(a,b){var z=P.k
return C.a.hR(H.h(a.split("&"),[z]),P.et(z,z),new P.k8(b),[P.L,P.k,P.k])},
k3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.k4(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.Z(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.cl(C.b.A(a,v,w),null,null)
if(typeof s!=="number")return s.aj()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.e(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.cl(C.b.A(a,v,c),null,null)
if(typeof s!=="number")return s.aj()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.e(y,u)
y[u]=s
return y},
f9:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.k6(a)
y=new P.k7(z,a)
if(a.length<2)z.$1("address is too short")
x=H.h([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.Z(a,w)
if(s===58){if(w===b){++w
if(C.b.Z(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaF(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.k3(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.e(o,l)
o[l]=0
i=l+1
if(i>=n)return H.e(o,i)
o[i]=0
l+=2}else{i=C.d.aT(k,8)
if(l<0||l>=n)return H.e(o,l)
o[l]=i
i=l+1
if(i>=n)return H.e(o,i)
o[i]=k&255
l+=2}}return o},
mi:function(){var z,y,x,w,v
z=P.iq(22,new P.mk(),!0,P.T)
y=new P.mj(z)
x=new P.ml()
w=new P.mm()
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
fK:function(a,b,c,d,e){var z,y,x,w,v
H.w(e,"$isc",[P.m],"$asc")
z=$.$get$fL()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.e(z,d)
x=z[d]
w=C.b.I(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.e(x,w)
v=x[w]
d=v&31
C.a.l(e,v>>>5,y)}return d},
aj:{"^":"b;"},
"+bool":0,
ag:{"^":"b;a,b",
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.ag))return!1
return this.a===b.a&&this.b===b.b},
aV:function(a,b){return C.d.aV(this.a,H.d(b,"$isag").a)},
gS:function(a){var z=this.a
return(z^C.d.aT(z,30))&1073741823},
j:function(a){var z,y,x,w,v,u,t
z=P.hH(H.iY(this))
y=P.c6(H.iW(this))
x=P.c6(H.iS(this))
w=P.c6(H.iT(this))
v=P.c6(H.iV(this))
u=P.c6(H.iX(this))
t=P.hI(H.iU(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
$isal:1,
$asal:function(){return[P.ag]},
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
c6:function(a){if(a>=10)return""+a
return"0"+a}}},
u:{"^":"V;"},
"+double":0,
aS:{"^":"b;a",
k:function(a,b){return new P.aS(C.d.ai(this.a*b))},
K:function(a,b){return C.d.K(this.a,H.d(b,"$isaS").a)},
aj:function(a,b){return C.d.aj(this.a,H.d(b,"$isaS").a)},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.aS))return!1
return this.a===b.a},
gS:function(a){return this.a&0x1FFFFFFF},
aV:function(a,b){return C.d.aV(this.a,H.d(b,"$isaS").a)},
j:function(a){var z,y,x,w,v
z=new P.hN()
y=this.a
if(y<0)return"-"+new P.aS(0-y).j(0)
x=z.$1(C.d.a5(y,6e7)%60)
w=z.$1(C.d.a5(y,1e6)%60)
v=new P.hM().$1(y%1e6)
return""+C.d.a5(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
$isal:1,
$asal:function(){return[P.aS]},
q:{
ef:function(a,b,c,d,e,f){return new P.aS(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hM:{"^":"n:18;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hN:{"^":"n:18;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a7:{"^":"b;"},
ez:{"^":"a7;",
j:function(a){return"Throw of null."}},
aR:{"^":"a7;a,b,c,d",
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
c4:function(a){return new P.aR(!1,null,null,a)},
cn:function(a,b,c){return new P.aR(!0,a,b,c)},
dW:function(a){return new P.aR(!1,null,a,"Must not be null")}}},
cB:{"^":"aR;e,f,a,b,c,d",
gc2:function(){return"RangeError"},
gc1:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
q:{
cd:function(a,b,c){return new P.cB(null,null,!0,a,b,"Value not in range")},
a2:function(a,b,c,d,e){return new P.cB(b,c,!0,a,d,"Invalid value")},
aU:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.o(a)
if(0<=a){if(typeof c!=="number")return H.o(c)
z=a>c}else z=!0
if(z)throw H.a(P.a2(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
z=b>c}else z=!0
if(z)throw H.a(P.a2(b,a,c,"end",f))
return b}return c}}},
i1:{"^":"aR;e,m:f>,a,b,c,d",
gc2:function(){return"RangeError"},
gc1:function(){if(J.hb(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
q:{
U:function(a,b,c,d,e){var z=H.D(e!=null?e:J.ao(b))
return new P.i1(b,z,!0,a,c,"Index out of range")}}},
k1:{"^":"a7;a",
j:function(a){return"Unsupported operation: "+this.a},
q:{
B:function(a){return new P.k1(a)}}},
jZ:{"^":"a7;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
ch:function(a){return new P.jZ(a)}}},
jt:{"^":"a7;a",
j:function(a){return"Bad state: "+this.a}},
hz:{"^":"a7;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.ct(z))+"."},
q:{
b8:function(a){return new P.hz(a)}}},
iN:{"^":"b;",
j:function(a){return"Out of Memory"},
$isa7:1},
eJ:{"^":"b;",
j:function(a){return"Stack Overflow"},
$isa7:1},
hG:{"^":"a7;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fk:{"^":"b;a",
j:function(a){return"Exception: "+this.a}},
hY:{"^":"b;a,b,c",
j:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.l(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.A(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.I(w,s)
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
m=""}l=C.b.A(w,o,p)
return y+n+l+m+"\n"+C.b.k(" ",x-o+n.length)+"^\n"},
q:{
a0:function(a,b,c){return new P.hY(a,b,c)}}},
m:{"^":"V;"},
"+int":0,
i:{"^":"b;$ti",
gm:function(a){var z,y
z=this.ga3(this)
for(y=0;z.H();)++y
return y},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dW("index"))
if(b<0)H.r(P.a2(b,0,null,"index",null))
for(z=this.ga3(this),y=0;z.H();){x=z.gP(z)
if(b===y)return x;++y}throw H.a(P.U(b,this,"index",null,y))},
j:function(a){return P.i3(this,"(",")")}},
d5:{"^":"b;$ti"},
c:{"^":"b;$ti",$isi:1},
"+List":0,
L:{"^":"b;$ti"},
J:{"^":"b;",
gS:function(a){return P.b.prototype.gS.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
V:{"^":"b;",$isal:1,
$asal:function(){return[P.V]}},
"+num":0,
b:{"^":";",
v:function(a,b){return this===b},
gS:function(a){return H.bP(this)},
j:function(a){return"Instance of '"+H.bi(this)+"'"},
toString:function(){return this.j(this)}},
aA:{"^":"b;"},
k:{"^":"b;",$isal:1,
$asal:function(){return[P.k]},
$iseA:1},
"+String":0,
as:{"^":"b;aO:a<",
gm:function(a){return this.a.length},
j:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isoW:1,
q:{
eL:function(a,b,c){var z=J.bE(b)
if(!z.H())return a
if(c.length===0){do a+=H.l(z.gP(z))
while(z.H())}else{a+=H.l(z.gP(z))
for(;z.H();)a=a+c+H.l(z.gP(z))}return a}}},
k8:{"^":"n:33;a",
$2:function(a,b){var z,y,x,w
z=P.k
H.w(a,"$isL",[z,z],"$asL")
H.O(b)
y=J.av(b).eg(b,"=")
if(y===-1){if(b!=="")J.cQ(a,P.dB(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.A(b,0,y)
w=C.b.aI(b,y+1)
z=this.a
J.cQ(a,P.dB(x,0,x.length,z,!0),P.dB(w,0,w.length,z,!0))}return a}},
k4:{"^":"n:34;a",
$2:function(a,b){throw H.a(P.a0("Illegal IPv4 address, "+a,this.a,b))}},
k6:{"^":"n:36;a",
$2:function(a,b){throw H.a(P.a0("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
k7:{"^":"n:28;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.cl(C.b.A(this.b,a,b),null,16)
if(typeof z!=="number")return z.K()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cG:{"^":"b;bW:a<,b,c,d,eu:e>,f,r,0x,0y,0z,0Q,0ch",
geC:function(){return this.b},
gcF:function(a){var z=this.c
if(z==null)return""
if(C.b.ac(z,"["))return C.b.A(z,1,z.length-1)
return z},
gbO:function(a){var z=this.d
if(z==null)return P.fA(this.a)
return z},
gcP:function(a){var z=this.f
return z==null?"":z},
geb:function(){var z=this.r
return z==null?"":z},
cR:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isL",[P.k,null],"$asL")
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
if(x&&!C.b.ac(d,"/"))d="/"+d
g=P.dA(g,0,0,h)
return new P.cG(i,j,c,f,d,g,this.r)},
ew:function(a,b){return this.cR(a,null,null,null,null,null,null,b,null,null)},
gbQ:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.k
y=new P.f7(P.fa(z==null?"":z,C.l),[y,y])
this.Q=y
z=y}return z},
gec:function(){return this.c!=null},
gef:function(){return this.f!=null},
ged:function(){return this.r!=null},
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
v:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.K(b)
if(!!z.$isds){y=this.a
x=b.gbW()
if(y==null?x==null:y===x)if(this.c!=null===b.gec()){y=this.b
x=b.geC()
if(y==null?x==null:y===x){y=this.gcF(this)
x=z.gcF(b)
if(y==null?x==null:y===x){y=this.gbO(this)
x=z.gbO(b)
if(y==null?x==null:y===x)if(this.e===z.geu(b)){y=this.f
x=y==null
if(!x===b.gef()){if(x)y=""
if(y===z.gcP(b)){z=this.r
y=z==null
if(!y===b.ged()){if(y)z=""
z=z===b.geb()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gS:function(a){var z=this.z
if(z==null){z=C.b.gS(this.j(0))
this.z=z}return z},
$isds:1,
q:{
dC:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isc",[P.m],"$asc")
if(c===C.l){z=$.$get$fF().b
if(typeof b!=="string")H.r(H.a6(b))
z=z.test(b)}else z=!1
if(z)return b
H.A(b,H.aD(c,"c5",0))
y=c.ghN().cs(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.e(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cA(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lL:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.lW(a,b,d)
else{if(d===b)P.bY(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.lX(a,z,e-1):""
x=P.lQ(a,e,f,!1)
if(typeof f!=="number")return f.E()
w=f+1
if(typeof g!=="number")return H.o(g)
v=w<g?P.lT(P.cl(C.b.A(a,w,g),new P.lM(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lR(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.K()
t=h<i?P.dA(a,h+1,i,null):null
return new P.cG(j,y,x,v,u,t,i<c?P.lP(a,i+1,c):null)},
fA:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bY:function(a,b,c){throw H.a(P.a0(c,a,b))},
lT:function(a,b){if(a!=null&&a===P.fA(b))return
return a},
lQ:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.Z(a,b)===91){if(typeof c!=="number")return c.L()
z=c-1
if(C.b.Z(a,z)!==93)P.bY(a,b,"Missing end `]` to match `[` in host")
P.f9(a,b+1,z)
return C.b.A(a,b,c).toLowerCase()}if(typeof c!=="number")return H.o(c)
y=b
for(;y<c;++y)if(C.b.Z(a,y)===58){P.f9(a,b,c)
return"["+a+"]"}return P.lZ(a,b,c)},
lZ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.o(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.Z(a,z)
if(v===37){u=P.fH(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.as("")
s=C.b.A(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.A(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.e(C.x,t)
t=(C.x[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.as("")
if(y<z){x.a+=C.b.A(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.e(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bY(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.Z(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.as("")
s=C.b.A(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fB(v)
z+=q
y=z}}}}if(x==null)return C.b.A(a,b,c)
if(y<c){s=C.b.A(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
lW:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fD(C.b.I(a,b)))P.bY(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.I(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.e(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bY(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.A(a,b,c)
return P.lN(y?a.toLowerCase():a)},
lN:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lX:function(a,b,c){return P.bZ(a,b,c,C.R)},
lR:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bZ(a,b,c,C.y):C.t.ja(d,new P.lS(),P.k).a0(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.ac(w,"/"))w="/"+w
return P.lY(w,e,f)},
lY:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.ac(a,"/"))return P.m_(a,!z||c)
return P.m0(a)},
dA:function(a,b,c,d){var z,y
z={}
H.w(d,"$isL",[P.k,null],"$asL")
if(a!=null){if(d!=null)throw H.a(P.c4("Both query and queryParameters specified"))
return P.bZ(a,b,c,C.n)}if(d==null)return
y=new P.as("")
z.a=""
d.M(0,new P.lU(new P.lV(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
lP:function(a,b,c){return P.bZ(a,b,c,C.n)},
fH:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.Z(a,b+1)
x=C.b.Z(a,z)
w=H.cM(y)
v=H.cM(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.d.aT(u,4)
if(z>=8)return H.e(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cA(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.A(a,b,b+3).toUpperCase()
return},
fB:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.h(z,[P.m])
C.a.l(y,0,37)
C.a.l(y,1,C.b.I("0123456789ABCDEF",a>>>4))
C.a.l(y,2,C.b.I("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.h(z,[P.m])
for(v=0;--w,w>=0;x=128){u=C.d.h6(a,6*w)&63|x
C.a.l(y,v,37)
C.a.l(y,v+1,C.b.I("0123456789ABCDEF",u>>>4))
C.a.l(y,v+2,C.b.I("0123456789ABCDEF",u&15))
v+=3}}return P.eM(y,0,null)},
bZ:function(a,b,c,d){var z=P.fG(a,b,c,H.w(d,"$isc",[P.m],"$asc"),!1)
return z==null?C.b.A(a,b,c):z},
fG:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.w(d,"$isc",[P.m],"$asc")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.K()
if(typeof c!=="number")return H.o(c)
if(!(y<c))break
c$0:{v=C.b.Z(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.e(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fH(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.e(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bY(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.Z(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fB(v)}}if(w==null)w=new P.as("")
w.a+=C.b.A(a,x,y)
w.a+=H.l(t)
if(typeof s!=="number")return H.o(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.K()
if(x<c)w.a+=C.b.A(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fE:function(a){if(C.b.ac(a,"."))return!0
return C.b.eg(a,"/.")!==-1},
m0:function(a){var z,y,x,w,v,u,t
if(!P.fE(a))return a
z=H.h([],[P.k])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.F(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.e(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.a0(z,"/")},
m_:function(a,b){var z,y,x,w,v,u
if(!P.fE(a))return!b?P.fC(a):a
z=H.h([],[P.k])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaF(z)!==".."){if(0>=z.length)return H.e(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.e(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaF(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.e(z,0)
C.a.l(z,0,P.fC(z[0]))}return C.a.a0(z,"/")},
fC:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fD(J.hc(a,0)))for(y=1;y<z;++y){x=C.b.I(a,y)
if(x===58)return C.b.A(a,0,y)+"%3A"+C.b.aI(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.e(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
lO:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.I(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.c4("Invalid URL encoding"))}}return z},
dB:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.dL(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.I(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.l!==d)v=!1
else v=!0
if(v)return y.A(a,b,c)
else u=new H.hw(y.A(a,b,c))}else{u=H.h([],[P.m])
for(x=b;x<c;++x){w=y.I(a,x)
if(w>127)throw H.a(P.c4("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.c4("Truncated URI"))
C.a.h(u,P.lO(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.w(u,"$isc",[P.m],"$asc")
return new P.ke(!1).cs(u)},
fD:function(a){var z=a|32
return 97<=z&&z<=122}}},
lM:{"^":"n:39;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.E()
throw H.a(P.a0("Invalid port",this.a,z+1))}},
lS:{"^":"n:40;",
$1:function(a){return P.dC(C.S,a,C.l,!1)}},
lV:{"^":"n:20;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.l(P.dC(C.p,a,C.l,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.l(P.dC(C.p,b,C.l,!0))}}},
lU:{"^":"n:42;a",
$2:function(a,b){var z,y
H.O(a)
if(b==null||typeof b==="string")this.a.$2(a,H.O(b))
else for(z=J.bE(H.h3(b,"$isi")),y=this.a;z.H();)y.$2(a,H.O(z.gP(z)))}},
k2:{"^":"b;a,b,c",
geB:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.e(z,0)
y=this.a
z=z[0]+1
x=C.b.eh(y,"?",z)
w=y.length
if(x>=0){v=P.bZ(y,x+1,w,C.n)
w=x}else v=null
z=new P.kH(this,"data",null,null,null,P.bZ(y,z,w,C.y),v,null)
this.c=z
return z},
j:function(a){var z,y
z=this.b
if(0>=z.length)return H.e(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
q:{
f8:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.h([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.I(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.a0("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.a0("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.I(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaF(z)
if(v!==44||x!==t+7||!C.b.ad(a,"base64",t+1))throw H.a(P.a0("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.C.i1(0,a,s,y)
else{r=P.fG(a,s,y,C.n,!0)
if(r!=null)a=C.b.b4(a,s,y,r)}return new P.k2(a,z,c)}}},
mk:{"^":"n:43;",
$1:function(a){return new Uint8Array(96)}},
mj:{"^":"n:45;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.e(z,a)
z=z[a]
J.hh(z,0,96,b)
return z}},
ml:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.I(b,y)^96
if(x>=a.length)return H.e(a,x)
a[x]=c}}},
mm:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=C.b.I(b,0),y=C.b.I(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.e(a,x)
a[x]=c}}},
lo:{"^":"b;a,b,c,d,e,f,r,x,0y",
gec:function(){return this.c>0},
gee:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.E()
y=this.e
if(typeof y!=="number")return H.o(y)
y=z+1<y
z=y}else z=!1
return z},
gef:function(){var z=this.f
if(typeof z!=="number")return z.K()
return z<this.r},
ged:function(){return this.r<this.a.length},
gdm:function(){return this.b===4&&C.b.ac(this.a,"http")},
gdn:function(){return this.b===5&&C.b.ac(this.a,"https")},
gbW:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdm()){this.x="http"
z="http"}else if(this.gdn()){this.x="https"
z="https"}else if(z===4&&C.b.ac(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.ac(this.a,"package")){this.x="package"
z="package"}else{z=C.b.A(this.a,0,z)
this.x=z}return z},
geC:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.A(this.a,y,z-1):""},
gcF:function(a){var z=this.c
return z>0?C.b.A(this.a,z,this.d):""},
gbO:function(a){var z
if(this.gee()){z=this.d
if(typeof z!=="number")return z.E()
return P.cl(C.b.A(this.a,z+1,this.e),null,null)}if(this.gdm())return 80
if(this.gdn())return 443
return 0},
geu:function(a){return C.b.A(this.a,this.e,this.f)},
gcP:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.K()
return z<y?C.b.A(this.a,z+1,y):""},
geb:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.aI(y,z+1):""},
gbQ:function(){var z=this.f
if(typeof z!=="number")return z.K()
if(z>=this.r)return C.T
z=P.k
return new P.f7(P.fa(this.gcP(this),C.l),[z,z])},
cR:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isL",[P.k,null],"$asL")
i=this.gbW()
z=i==="file"
y=this.c
j=y>0?C.b.A(this.a,this.b+3,y):""
f=this.gee()?this.gbO(this):null
y=this.c
if(y>0)c=C.b.A(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.A(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.ac(d,"/"))d="/"+d
g=P.dA(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.aI(y,x+1)
return new P.cG(i,j,c,f,d,g,b)},
ew:function(a,b){return this.cR(a,null,null,null,null,null,null,b,null,null)},
gS:function(a){var z=this.y
if(z==null){z=C.b.gS(this.a)
this.y=z}return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.K(b)
if(!!z.$isds)return this.a===z.j(b)
return!1},
j:function(a){return this.a},
$isds:1},
kH:{"^":"cG;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
cZ:function(a,b){var z=document.createElement("canvas")
return z},
hP:function(a){H.d(a,"$isa8")
return"wheel"},
i2:function(a){var z,y,x
y=document.createElement("input")
z=H.d(y,"$isel")
try{J.hj(z,a)}catch(x){H.ay(x)}return z},
cF:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fn:function(a,b,c,d){var z,y
z=W.cF(W.cF(W.cF(W.cF(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fO:function(a,b){var z
H.f(a,{func:1,ret:-1,args:[b]})
z=$.X
if(z===C.j)return a
return z.dJ(a,b)},
a9:{"^":"a4;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
nq:{"^":"dj;0t:x=,0u:y=","%":"Accelerometer|LinearAccelerationSensor"},
nr:{"^":"t;0m:length=","%":"AccessibleNodeList"},
ns:{"^":"a9;0a4:type}",
j:function(a){return String(a)},
"%":"HTMLAnchorElement"},
nt:{"^":"a9;",
j:function(a){return String(a)},
"%":"HTMLAreaElement"},
cU:{"^":"t;",$iscU:1,"%":";Blob"},
nz:{"^":"a9;0a4:type}","%":"HTMLButtonElement"},
cY:{"^":"a9;",
bV:function(a,b,c){if(c!=null)return a.getContext(b,P.mz(c,null))
return a.getContext(b)},
eF:function(a,b){return this.bV(a,b,null)},
$iscY:1,
"%":"HTMLCanvasElement"},
e3:{"^":"t;",$ise3:1,"%":"CanvasRenderingContext2D"},
nB:{"^":"P;0m:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
nD:{"^":"cr;0m:length=","%":"CSSPerspective"},
nE:{"^":"d1;0t:x=,0u:y=","%":"CSSPositionValue"},
nF:{"^":"cr;0t:x=,0u:y=","%":"CSSRotation"},
b9:{"^":"t;",$isb9:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
nG:{"^":"cr;0t:x=,0u:y=","%":"CSSScale"},
hE:{"^":"kG;0m:length=",
eG:function(a,b){var z=a.getPropertyValue(this.da(a,b))
return z==null?"":z},
da:function(a,b){var z,y
z=$.$get$e8()
y=z[b]
if(typeof y==="string")return y
y=this.h7(a,b)
z[b]=y
return y},
h7:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hJ()+b
if(z in a)return z
return b},
fY:function(a,b,c,d){a.setProperty(b,c,d)},
gcm:function(a){return a.bottom},
gar:function(a){return a.height},
gb0:function(a){return a.left},
gbg:function(a){return a.right},
gbl:function(a){return a.top},
gat:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hF:{"^":"b;",
gb0:function(a){return this.eG(a,"left")}},
d1:{"^":"t;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
cr:{"^":"t;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
nH:{"^":"d1;0m:length=","%":"CSSTransformValue"},
nI:{"^":"cr;0t:x=,0u:y=","%":"CSSTranslation"},
nJ:{"^":"d1;0m:length=","%":"CSSUnparsedValue"},
nK:{"^":"t;0m:length=","%":"DataTransferItemList"},
nL:{"^":"t;0t:x=,0u:y=","%":"DeviceAcceleration"},
nM:{"^":"t;",
j:function(a){return String(a)},
"%":"DOMException"},
nN:{"^":"hK;",
gt:function(a){return a.x},
gu:function(a){return a.y},
"%":"DOMPoint"},
hK:{"^":"t;",
gt:function(a){return a.x},
gu:function(a){return a.y},
"%":";DOMPointReadOnly"},
nO:{"^":"kJ;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.D(b)
H.w(c,"$isaa",[P.V],"$asaa")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[[P.aa,P.V]]},
$asz:function(){return[[P.aa,P.V]]},
$isi:1,
$asi:function(){return[[P.aa,P.V]]},
$isc:1,
$asc:function(){return[[P.aa,P.V]]},
$asC:function(){return[[P.aa,P.V]]},
"%":"ClientRectList|DOMRectList"},
hL:{"^":"t;",
j:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gat(a))+" x "+H.l(this.gar(a))},
v:function(a,b){var z
if(b==null)return!1
z=H.bz(b,"$isaa",[P.V],"$asaa")
if(!z)return!1
z=J.b1(b)
return a.left===z.gb0(b)&&a.top===z.gbl(b)&&this.gat(a)===z.gat(b)&&this.gar(a)===z.gar(b)},
gS:function(a){return W.fn(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gat(a)&0x1FFFFFFF,this.gar(a)&0x1FFFFFFF)},
gcm:function(a){return a.bottom},
gar:function(a){return a.height},
gb0:function(a){return a.left},
gbg:function(a){return a.right},
gbl:function(a){return a.top},
gat:function(a){return a.width},
gt:function(a){return a.x},
gu:function(a){return a.y},
$isaa:1,
$asaa:function(){return[P.V]},
"%":";DOMRectReadOnly"},
nP:{"^":"kL;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.D(b)
H.O(c)
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[P.k]},
$asz:function(){return[P.k]},
$isi:1,
$asi:function(){return[P.k]},
$isc:1,
$asc:function(){return[P.k]},
$asC:function(){return[P.k]},
"%":"DOMStringList"},
nQ:{"^":"t;0m:length=","%":"DOMTokenList"},
kF:{"^":"cx;a,b",
gm:function(a){return this.b.length},
i:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return H.d(z[b],"$isa4")},
l:function(a,b,c){var z
H.D(b)
H.d(c,"$isa4")
z=this.b
if(b>>>0!==b||b>=z.length)return H.e(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga3:function(a){var z=this.cU(this)
return new J.az(z,z.length,0,[H.x(z,0)])},
aC:function(a,b,c,d){throw H.a(P.ch(null))},
$asz:function(){return[W.a4]},
$asi:function(){return[W.a4]},
$asc:function(){return[W.a4]}},
a4:{"^":"P;",
gcq:function(a){return new W.kF(a,a.children)},
gby:function(a){return P.j3(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.V)},
j:function(a){return a.localName},
$isa4:1,
"%":";Element"},
nR:{"^":"a9;0a4:type}","%":"HTMLEmbedElement"},
ad:{"^":"t;",$isad:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a8:{"^":"t;",
dD:["eJ",function(a,b,c,d){H.f(c,{func:1,args:[W.ad]})
if(c!=null)this.eW(a,b,c,!1)}],
eW:function(a,b,c,d){return a.addEventListener(b,H.bA(H.f(c,{func:1,args:[W.ad]}),1),!1)},
$isa8:1,
"%":"AccessibleNode|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RemotePlayback|ScreenOrientation|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;ft|fu|fw|fx"},
b2:{"^":"cU;",$isb2:1,"%":"File"},
eh:{"^":"kQ;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.D(b)
H.d(c,"$isb2")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.b2]},
$asz:function(){return[W.b2]},
$isi:1,
$asi:function(){return[W.b2]},
$isc:1,
$asc:function(){return[W.b2]},
$iseh:1,
$asC:function(){return[W.b2]},
"%":"FileList"},
o9:{"^":"a8;0m:length=","%":"FileWriter"},
oc:{"^":"a9;0m:length=","%":"HTMLFormElement"},
bc:{"^":"t;",$isbc:1,"%":"Gamepad"},
od:{"^":"dj;0t:x=,0u:y=","%":"Gyroscope"},
oe:{"^":"t;0m:length=","%":"History"},
of:{"^":"l2;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.D(b)
H.d(c,"$isP")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.P]},
$asz:function(){return[W.P]},
$isi:1,
$asi:function(){return[W.P]},
$isc:1,
$asc:function(){return[W.P]},
$asC:function(){return[W.P]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c7:{"^":"t;0dN:data=",$isc7:1,"%":"ImageData"},
ek:{"^":"a9;",$isek:1,"%":"HTMLImageElement"},
el:{"^":"a9;0a4:type}",$isel:1,"%":"HTMLInputElement"},
bK:{"^":"dp;",$isbK:1,"%":"KeyboardEvent"},
ol:{"^":"a9;0a4:type}","%":"HTMLLinkElement"},
om:{"^":"t;",
j:function(a){return String(a)},
"%":"Location"},
on:{"^":"dj;0t:x=,0u:y=","%":"Magnetometer"},
op:{"^":"t;0m:length=","%":"MediaList"},
oq:{"^":"a8;",
dD:function(a,b,c,d){H.f(c,{func:1,args:[W.ad]})
if(b==="message")a.start()
this.eJ(a,b,c,!1)},
"%":"MessagePort"},
or:{"^":"l8;",
i:function(a,b){return P.b0(a.get(H.O(b)))},
M:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b0(y.value[1]))}},
gaE:function(a){var z=H.h([],[P.k])
this.M(a,new W.iF(z))
return z},
gm:function(a){return a.size},
l:function(a,b,c){throw H.a(P.B("Not supported"))},
$asam:function(){return[P.k,null]},
$isL:1,
$asL:function(){return[P.k,null]},
"%":"MIDIInputMap"},
iF:{"^":"n:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
os:{"^":"l9;",
i:function(a,b){return P.b0(a.get(H.O(b)))},
M:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b0(y.value[1]))}},
gaE:function(a){var z=H.h([],[P.k])
this.M(a,new W.iG(z))
return z},
gm:function(a){return a.size},
l:function(a,b,c){throw H.a(P.B("Not supported"))},
$asam:function(){return[P.k,null]},
$isL:1,
$asL:function(){return[P.k,null]},
"%":"MIDIOutputMap"},
iG:{"^":"n:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bg:{"^":"t;",$isbg:1,"%":"MimeType"},
ot:{"^":"lb;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.D(b)
H.d(c,"$isbg")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bg]},
$asz:function(){return[W.bg]},
$isi:1,
$asi:function(){return[W.bg]},
$isc:1,
$asc:function(){return[W.bg]},
$asC:function(){return[W.bg]},
"%":"MimeTypeArray"},
aJ:{"^":"dp;",$isaJ:1,"%":"PointerEvent;DragEvent|MouseEvent"},
kE:{"^":"cx;a",
l:function(a,b,c){var z,y
H.D(b)
H.d(c,"$isP")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.e(y,b)
z.replaceChild(c,y[b])},
ga3:function(a){var z=this.a.childNodes
return new W.ei(z,z.length,-1,[H.b4(C.V,z,"C",0)])},
aC:function(a,b,c,d){throw H.a(P.B("Cannot fillRange on Node list"))},
gm:function(a){return this.a.childNodes.length},
i:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
$asz:function(){return[W.P]},
$asi:function(){return[W.P]},
$asc:function(){return[W.P]}},
P:{"^":"a8;",
il:function(a,b){var z,y
try{z=a.parentNode
J.hd(z,b,a)}catch(y){H.ay(y)}return a},
j:function(a){var z=a.nodeValue
return z==null?this.eK(a):z},
fQ:function(a,b,c){return a.replaceChild(b,c)},
$isP:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iK:{"^":"ld;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.D(b)
H.d(c,"$isP")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.P]},
$asz:function(){return[W.P]},
$isi:1,
$asi:function(){return[W.P]},
$isc:1,
$asc:function(){return[W.P]},
$asC:function(){return[W.P]},
"%":"NodeList|RadioNodeList"},
oB:{"^":"a9;0a4:type}","%":"HTMLOListElement"},
oC:{"^":"a9;0a4:type}","%":"HTMLObjectElement"},
bh:{"^":"t;0m:length=",$isbh:1,"%":"Plugin"},
oG:{"^":"lh;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.D(b)
H.d(c,"$isbh")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bh]},
$asz:function(){return[W.bh]},
$isi:1,
$asi:function(){return[W.bh]},
$isc:1,
$asc:function(){return[W.bh]},
$asC:function(){return[W.bh]},
"%":"PluginArray"},
oL:{"^":"t;0a4:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
oM:{"^":"ln;",
i:function(a,b){return P.b0(a.get(H.O(b)))},
M:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b0(y.value[1]))}},
gaE:function(a){var z=H.h([],[P.k])
this.M(a,new W.jd(z))
return z},
gm:function(a){return a.size},
l:function(a,b,c){throw H.a(P.B("Not supported"))},
$asam:function(){return[P.k,null]},
$isL:1,
$asL:function(){return[P.k,null]},
"%":"RTCStatsReport"},
jd:{"^":"n:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oN:{"^":"a9;0a4:type}","%":"HTMLScriptElement"},
oP:{"^":"a9;0m:length=","%":"HTMLSelectElement"},
dj:{"^":"a8;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bj:{"^":"a8;",$isbj:1,"%":"SourceBuffer"},
oQ:{"^":"fu;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.D(b)
H.d(c,"$isbj")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bj]},
$asz:function(){return[W.bj]},
$isi:1,
$asi:function(){return[W.bj]},
$isc:1,
$asc:function(){return[W.bj]},
$asC:function(){return[W.bj]},
"%":"SourceBufferList"},
oR:{"^":"a9;0a4:type}","%":"HTMLSourceElement"},
bk:{"^":"t;",$isbk:1,"%":"SpeechGrammar"},
oS:{"^":"lq;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.D(b)
H.d(c,"$isbk")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bk]},
$asz:function(){return[W.bk]},
$isi:1,
$asi:function(){return[W.bk]},
$isc:1,
$asc:function(){return[W.bk]},
$asC:function(){return[W.bk]},
"%":"SpeechGrammarList"},
bl:{"^":"t;0m:length=",$isbl:1,"%":"SpeechRecognitionResult"},
oU:{"^":"lt;",
i:function(a,b){return a.getItem(H.O(b))},
l:function(a,b,c){a.setItem(b,H.O(c))},
M:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.k,P.k]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gaE:function(a){var z=H.h([],[P.k])
this.M(a,new W.jv(z))
return z},
gm:function(a){return a.length},
$asam:function(){return[P.k,P.k]},
$isL:1,
$asL:function(){return[P.k,P.k]},
"%":"Storage"},
jv:{"^":"n:20;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oX:{"^":"a9;0a4:type}","%":"HTMLStyleElement"},
bm:{"^":"t;",$isbm:1,"%":"CSSStyleSheet|StyleSheet"},
bQ:{"^":"a9;",$isbQ:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bn:{"^":"a8;",$isbn:1,"%":"TextTrack"},
bo:{"^":"a8;",$isbo:1,"%":"TextTrackCue|VTTCue"},
p1:{"^":"lA;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.D(b)
H.d(c,"$isbo")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bo]},
$asz:function(){return[W.bo]},
$isi:1,
$asi:function(){return[W.bo]},
$isc:1,
$asc:function(){return[W.bo]},
$asC:function(){return[W.bo]},
"%":"TextTrackCueList"},
p2:{"^":"fx;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.D(b)
H.d(c,"$isbn")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bn]},
$asz:function(){return[W.bn]},
$isi:1,
$asi:function(){return[W.bn]},
$isc:1,
$asc:function(){return[W.bn]},
$asC:function(){return[W.bn]},
"%":"TextTrackList"},
p3:{"^":"t;0m:length=","%":"TimeRanges"},
bq:{"^":"t;",$isbq:1,"%":"Touch"},
br:{"^":"dp;",$isbr:1,"%":"TouchEvent"},
p4:{"^":"lG;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.D(b)
H.d(c,"$isbq")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bq]},
$asz:function(){return[W.bq]},
$isi:1,
$asi:function(){return[W.bq]},
$isc:1,
$asc:function(){return[W.bq]},
$asC:function(){return[W.bq]},
"%":"TouchList"},
p5:{"^":"t;0m:length=","%":"TrackDefaultList"},
dp:{"^":"ad;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
p7:{"^":"t;",
j:function(a){return String(a)},
"%":"URL"},
p9:{"^":"t;0t:x=","%":"VRStageBoundsPoint"},
pa:{"^":"a8;0m:length=","%":"VideoTrackList"},
bV:{"^":"aJ;",
ghK:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.B("deltaY is not supported"))},
ghJ:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.B("deltaX is not supported"))},
$isbV:1,
"%":"WheelEvent"},
kx:{"^":"a8;",
fS:function(a,b){return a.requestAnimationFrame(H.bA(H.f(b,{func:1,ret:-1,args:[P.V]}),1))},
f6:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
pf:{"^":"m7;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.D(b)
H.d(c,"$isb9")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.b9]},
$asz:function(){return[W.b9]},
$isi:1,
$asi:function(){return[W.b9]},
$isc:1,
$asc:function(){return[W.b9]},
$asC:function(){return[W.b9]},
"%":"CSSRuleList"},
pg:{"^":"hL;",
j:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
v:function(a,b){var z
if(b==null)return!1
z=H.bz(b,"$isaa",[P.V],"$asaa")
if(!z)return!1
z=J.b1(b)
return a.left===z.gb0(b)&&a.top===z.gbl(b)&&a.width===z.gat(b)&&a.height===z.gar(b)},
gS:function(a){return W.fn(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gar:function(a){return a.height},
gat:function(a){return a.width},
gt:function(a){return a.x},
gu:function(a){return a.y},
"%":"ClientRect|DOMRect"},
pi:{"^":"m9;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.D(b)
H.d(c,"$isbc")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bc]},
$asz:function(){return[W.bc]},
$isi:1,
$asi:function(){return[W.bc]},
$isc:1,
$asc:function(){return[W.bc]},
$asC:function(){return[W.bc]},
"%":"GamepadList"},
pj:{"^":"mb;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.D(b)
H.d(c,"$isP")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.P]},
$asz:function(){return[W.P]},
$isi:1,
$asi:function(){return[W.P]},
$isc:1,
$asc:function(){return[W.P]},
$asC:function(){return[W.P]},
"%":"MozNamedAttrMap|NamedNodeMap"},
pk:{"^":"md;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.D(b)
H.d(c,"$isbl")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bl]},
$asz:function(){return[W.bl]},
$isi:1,
$asi:function(){return[W.bl]},
$isc:1,
$asc:function(){return[W.bl]},
$asC:function(){return[W.bl]},
"%":"SpeechRecognitionResultList"},
pl:{"^":"mf;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.D(b)
H.d(c,"$isbm")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.e(a,b)
return a[b]},
$isG:1,
$asG:function(){return[W.bm]},
$asz:function(){return[W.bm]},
$isi:1,
$asi:function(){return[W.bm]},
$isc:1,
$asc:function(){return[W.bm]},
$asC:function(){return[W.bm]},
"%":"StyleSheetList"},
kM:{"^":"dl;a,b,c,$ti",
hZ:function(a,b,c,d){var z=H.x(this,0)
H.f(a,{func:1,ret:-1,args:[z]})
H.f(c,{func:1,ret:-1})
return W.a3(this.a,this.b,a,!1,z)}},
ph:{"^":"kM;a,b,c,$ti"},
kN:{"^":"eK;a,b,c,d,e,$ti",
hb:function(){var z=this.d
if(z!=null&&this.a<=0)J.he(this.b,this.c,z,!1)},
q:{
a3:function(a,b,c,d,e){var z=c==null?null:W.fO(new W.kO(c),W.ad)
z=new W.kN(0,a,b,z,!1,[e])
z.hb()
return z}}},
kO:{"^":"n:4;a",
$1:function(a){return this.a.$1(H.d(a,"$isad"))}},
C:{"^":"b;$ti",
ga3:function(a){return new W.ei(a,this.gm(a),-1,[H.b4(this,a,"C",0)])},
aC:function(a,b,c,d){H.A(d,H.b4(this,a,"C",0))
throw H.a(P.B("Cannot modify an immutable List."))}},
ei:{"^":"b;a,b,c,0d,$ti",
H:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dT(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gP:function(a){return this.d}},
kG:{"^":"t+hF;"},
kI:{"^":"t+z;"},
kJ:{"^":"kI+C;"},
kK:{"^":"t+z;"},
kL:{"^":"kK+C;"},
kP:{"^":"t+z;"},
kQ:{"^":"kP+C;"},
l1:{"^":"t+z;"},
l2:{"^":"l1+C;"},
l8:{"^":"t+am;"},
l9:{"^":"t+am;"},
la:{"^":"t+z;"},
lb:{"^":"la+C;"},
lc:{"^":"t+z;"},
ld:{"^":"lc+C;"},
lg:{"^":"t+z;"},
lh:{"^":"lg+C;"},
ln:{"^":"t+am;"},
ft:{"^":"a8+z;"},
fu:{"^":"ft+C;"},
lp:{"^":"t+z;"},
lq:{"^":"lp+C;"},
lt:{"^":"t+am;"},
lz:{"^":"t+z;"},
lA:{"^":"lz+C;"},
fw:{"^":"a8+z;"},
fx:{"^":"fw+C;"},
lF:{"^":"t+z;"},
lG:{"^":"lF+C;"},
m6:{"^":"t+z;"},
m7:{"^":"m6+C;"},
m8:{"^":"t+z;"},
m9:{"^":"m8+C;"},
ma:{"^":"t+z;"},
mb:{"^":"ma+C;"},
mc:{"^":"t+z;"},
md:{"^":"mc+C;"},
me:{"^":"t+z;"},
mf:{"^":"me+C;"}}],["","",,P,{"^":"",
mC:function(a){var z,y
z=J.K(a)
if(!!z.$isc7){y=z.gdN(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fz(a.data,a.height,a.width)},
mB:function(a){if(a instanceof P.fz)return{data:a.a,height:a.b,width:a.c}
return a},
b0:function(a){var z,y,x,w,v
if(a==null)return
z=P.et(P.k,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w){v=H.O(y[w])
z.l(0,v,a[v])}return z},
mz:function(a,b){var z={}
a.M(0,new P.mA(z))
return z},
ee:function(){var z=$.ed
if(z==null){z=J.cR(window.navigator.userAgent,"Opera",0)
$.ed=z}return z},
hJ:function(){var z,y
z=$.ea
if(z!=null)return z
y=$.eb
if(y==null){y=J.cR(window.navigator.userAgent,"Firefox",0)
$.eb=y}if(y)z="-moz-"
else{y=$.ec
if(y==null){y=!P.ee()&&J.cR(window.navigator.userAgent,"Trident/",0)
$.ec=y}if(y)z="-ms-"
else z=P.ee()?"-o-":"-webkit-"}$.ea=z
return z},
lw:{"^":"b;",
e9:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
cW:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.K(a)
if(!!y.$isag)return new Date(a.a)
if(!!y.$isj6)throw H.a(P.ch("structured clone of RegExp"))
if(!!y.$isb2)return a
if(!!y.$iscU)return a
if(!!y.$iseh)return a
if(!!y.$isc7)return a
if(!!y.$isex||!!y.$isdf)return a
if(!!y.$isL){x=this.e9(a)
w=this.b
if(x>=w.length)return H.e(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.l(w,x,v)
y.M(a,new P.ly(z,this))
return z.a}if(!!y.$isc){x=this.e9(a)
z=this.b
if(x>=z.length)return H.e(z,x)
v=z[x]
if(v!=null)return v
return this.hH(a,x)}throw H.a(P.ch("structured clone of other type"))},
hH:function(a,b){var z,y,x,w
z=J.av(a)
y=z.gm(a)
x=new Array(y)
C.a.l(this.b,b,x)
if(typeof y!=="number")return H.o(y)
w=0
for(;w<y;++w)C.a.l(x,w,this.cW(z.i(a,w)))
return x}},
ly:{"^":"n:7;a,b",
$2:function(a,b){this.a.a[a]=this.b.cW(b)}},
fz:{"^":"b;dN:a>,b,c",$isc7:1},
mA:{"^":"n:7;a",
$2:function(a,b){this.a[a]=b}},
lx:{"^":"lw;a,b"},
hV:{"^":"cx;a,b",
gbr:function(){var z,y,x
z=this.b
y=H.aD(z,"z",0)
x=W.a4
return new H.iv(new H.kv(z,H.f(new P.hW(),{func:1,ret:P.aj,args:[y]}),[y]),H.f(new P.hX(),{func:1,ret:x,args:[y]}),[y,x])},
l:function(a,b,c){var z
H.D(b)
H.d(c,"$isa4")
z=this.gbr()
J.hi(z.b.$1(J.cS(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aC:function(a,b,c,d){throw H.a(P.B("Cannot fillRange on filtered list"))},
gm:function(a){return J.ao(this.gbr().a)},
i:function(a,b){var z=this.gbr()
return z.b.$1(J.cS(z.a,b))},
ga3:function(a){var z=P.ip(this.gbr(),!1,W.a4)
return new J.az(z,z.length,0,[H.x(z,0)])},
$asz:function(){return[W.a4]},
$asi:function(){return[W.a4]},
$asc:function(){return[W.a4]}},
hW:{"^":"n:48;",
$1:function(a){return!!J.K(H.d(a,"$isP")).$isa4}},
hX:{"^":"n:49;",
$1:function(a){return H.j(H.d(a,"$isP"),"$isa4")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bX:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fm:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bO:{"^":"b;t:a>,u:b>,$ti",
j:function(a){return"Point("+H.l(this.a)+", "+H.l(this.b)+")"},
v:function(a,b){var z,y,x
if(b==null)return!1
z=H.bz(b,"$isbO",[P.V],null)
if(!z)return!1
z=this.a
y=J.b1(b)
x=y.gt(b)
if(z==null?x==null:z===x){z=this.b
y=y.gu(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gS:function(a){var z,y
z=J.b7(this.a)
y=J.b7(this.b)
return P.fm(P.bX(P.bX(0,z),y))},
k:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.k()
y=H.x(this,0)
z=H.A(z*b,y)
x=this.b
if(typeof x!=="number")return x.k()
return new P.bO(z,H.A(x*b,y),this.$ti)}},
li:{"^":"b;$ti",
gbg:function(a){var z=this.a
if(typeof z!=="number")return z.E()
return H.A(z+this.c,H.x(this,0))},
gcm:function(a){var z=this.b
if(typeof z!=="number")return z.E()
return H.A(z+this.d,H.x(this,0))},
j:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
v:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bz(b,"$isaa",[P.V],"$asaa")
if(!z)return!1
z=this.a
y=J.b1(b)
x=y.gb0(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbl(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.E()
w=H.x(this,0)
if(H.A(z+this.c,w)===y.gbg(b)){if(typeof x!=="number")return x.E()
z=H.A(x+this.d,w)===y.gcm(b)}else z=!1}else z=!1}else z=!1
return z},
gS:function(a){var z,y,x,w,v
z=this.a
y=J.b7(z)
x=this.b
w=J.b7(x)
if(typeof z!=="number")return z.E()
v=H.x(this,0)
z=H.A(z+this.c,v)
if(typeof x!=="number")return x.E()
v=H.A(x+this.d,v)
return P.fm(P.bX(P.bX(P.bX(P.bX(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
dM:function(a,b){var z,y
H.w(b,"$isbO",[P.V],"$asbO")
z=b.a
y=this.a
if(typeof z!=="number")return z.cZ()
if(typeof y!=="number")return H.o(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.cZ()
if(typeof y!=="number")return H.o(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
aa:{"^":"li;b0:a>,bl:b>,at:c>,ar:d>,$ti",q:{
j3:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.K()
if(c<0)z=-c*0
else z=c
H.A(z,e)
if(typeof d!=="number")return d.K()
if(d<0)y=-d*0
else y=d
return new P.aa(a,b,z,H.A(y,e),[e])}}}}],["","",,P,{"^":"",nS:{"^":"W;0t:x=,0u:y=","%":"SVGFEBlendElement"},nT:{"^":"W;0t:x=,0u:y=","%":"SVGFEColorMatrixElement"},nU:{"^":"W;0t:x=,0u:y=","%":"SVGFEComponentTransferElement"},nV:{"^":"W;0t:x=,0u:y=","%":"SVGFECompositeElement"},nW:{"^":"W;0t:x=,0u:y=","%":"SVGFEConvolveMatrixElement"},nX:{"^":"W;0t:x=,0u:y=","%":"SVGFEDiffuseLightingElement"},nY:{"^":"W;0t:x=,0u:y=","%":"SVGFEDisplacementMapElement"},nZ:{"^":"W;0t:x=,0u:y=","%":"SVGFEFloodElement"},o_:{"^":"W;0t:x=,0u:y=","%":"SVGFEGaussianBlurElement"},o0:{"^":"W;0t:x=,0u:y=","%":"SVGFEImageElement"},o1:{"^":"W;0t:x=,0u:y=","%":"SVGFEMergeElement"},o2:{"^":"W;0t:x=,0u:y=","%":"SVGFEMorphologyElement"},o3:{"^":"W;0t:x=,0u:y=","%":"SVGFEOffsetElement"},o4:{"^":"W;0t:x=,0u:y=","%":"SVGFEPointLightElement"},o5:{"^":"W;0t:x=,0u:y=","%":"SVGFESpecularLightingElement"},o6:{"^":"W;0t:x=,0u:y=","%":"SVGFESpotLightElement"},o7:{"^":"W;0t:x=,0u:y=","%":"SVGFETileElement"},o8:{"^":"W;0t:x=,0u:y=","%":"SVGFETurbulenceElement"},oa:{"^":"W;0t:x=,0u:y=","%":"SVGFilterElement"},ob:{"^":"bI;0t:x=,0u:y=","%":"SVGForeignObjectElement"},i_:{"^":"bI;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bI:{"^":"W;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},og:{"^":"bI;0t:x=,0u:y=","%":"SVGImageElement"},bL:{"^":"t;",$isbL:1,"%":"SVGLength"},ok:{"^":"l4;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.D(b)
H.d(c,"$isbL")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$asz:function(){return[P.bL]},
$isi:1,
$asi:function(){return[P.bL]},
$isc:1,
$asc:function(){return[P.bL]},
$asC:function(){return[P.bL]},
"%":"SVGLengthList"},oo:{"^":"W;0t:x=,0u:y=","%":"SVGMaskElement"},bN:{"^":"t;",$isbN:1,"%":"SVGNumber"},oA:{"^":"lf;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.D(b)
H.d(c,"$isbN")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$asz:function(){return[P.bN]},
$isi:1,
$asi:function(){return[P.bN]},
$isc:1,
$asc:function(){return[P.bN]},
$asC:function(){return[P.bN]},
"%":"SVGNumberList"},oF:{"^":"W;0t:x=,0u:y=","%":"SVGPatternElement"},oH:{"^":"t;0t:x=,0u:y=","%":"SVGPoint"},oI:{"^":"t;0m:length=","%":"SVGPointList"},oJ:{"^":"t;0t:x=,0u:y=","%":"SVGRect"},oK:{"^":"i_;0t:x=,0u:y=","%":"SVGRectElement"},oO:{"^":"W;0a4:type}","%":"SVGScriptElement"},oV:{"^":"lv;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.D(b)
H.O(c)
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$asz:function(){return[P.k]},
$isi:1,
$asi:function(){return[P.k]},
$isc:1,
$asc:function(){return[P.k]},
$asC:function(){return[P.k]},
"%":"SVGStringList"},oY:{"^":"W;0a4:type}","%":"SVGStyleElement"},W:{"^":"a4;",
gcq:function(a){return new P.hV(a,new W.kE(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},oZ:{"^":"bI;0t:x=,0u:y=","%":"SVGSVGElement"},jA:{"^":"bI;","%":"SVGTextPathElement;SVGTextContentElement"},p0:{"^":"jA;0t:x=,0u:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bR:{"^":"t;",$isbR:1,"%":"SVGTransform"},p6:{"^":"lI;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.D(b)
H.d(c,"$isbR")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$asz:function(){return[P.bR]},
$isi:1,
$asi:function(){return[P.bR]},
$isc:1,
$asc:function(){return[P.bR]},
$asC:function(){return[P.bR]},
"%":"SVGTransformList"},p8:{"^":"bI;0t:x=,0u:y=","%":"SVGUseElement"},l3:{"^":"t+z;"},l4:{"^":"l3+C;"},le:{"^":"t+z;"},lf:{"^":"le+C;"},lu:{"^":"t+z;"},lv:{"^":"lu+C;"},lH:{"^":"t+z;"},lI:{"^":"lH+C;"}}],["","",,P,{"^":"",T:{"^":"b;",$isi:1,
$asi:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]},
$isjO:1}}],["","",,P,{"^":"",nu:{"^":"t;0m:length=","%":"AudioBuffer"},dY:{"^":"a8;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},nv:{"^":"kD;",
i:function(a,b){return P.b0(a.get(H.O(b)))},
M:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[P.k,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b0(y.value[1]))}},
gaE:function(a){var z=H.h([],[P.k])
this.M(a,new P.hl(z))
return z},
gm:function(a){return a.size},
l:function(a,b,c){throw H.a(P.B("Not supported"))},
$asam:function(){return[P.k,null]},
$isL:1,
$asL:function(){return[P.k,null]},
"%":"AudioParamMap"},hl:{"^":"n:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},hm:{"^":"dY;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},nw:{"^":"a8;0m:length=","%":"AudioTrackList"},hp:{"^":"a8;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},nx:{"^":"dY;0a4:type}","%":"BiquadFilterNode"},oD:{"^":"hp;0m:length=","%":"OfflineAudioContext"},oE:{"^":"hm;0a4:type}","%":"Oscillator|OscillatorNode"},kD:{"^":"t+am;"}}],["","",,P,{"^":"",di:{"^":"t;",
it:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.K(g)
if(!!z.$isc7)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.mB(g))
return}if(!!z.$isek)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.c4("Incorrect number or type of arguments"))},
is:function(a,b,c,d,e,f,g){return this.it(a,b,c,d,e,f,g,null,null,null)},
$isdi:1,
"%":"WebGLRenderingContext"},jB:{"^":"t;",$isjB:1,"%":"WebGLTexture"},jX:{"^":"t;",$isjX:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",oT:{"^":"ls;",
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.U(b,a,null,null,null))
return P.b0(a.item(b))},
l:function(a,b,c){H.D(b)
H.d(c,"$isL")
throw H.a(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$asz:function(){return[[P.L,,,]]},
$isi:1,
$asi:function(){return[[P.L,,,]]},
$isc:1,
$asc:function(){return[[P.L,,,]]},
$asC:function(){return[[P.L,,,]]},
"%":"SQLResultSetRowList"},lr:{"^":"t+z;"},ls:{"^":"lr+C;"}}],["","",,O,{"^":"",aq:{"^":"b;0a,0b,0c,0d,$ti",
bp:function(a){this.a=H.h([],[a])
this.b=null
this.c=null
this.d=null},
d_:function(a,b,c){var z=H.aD(this,"aq",0)
H.f(b,{func:1,ret:P.aj,args:[[P.i,z]]})
z={func:1,ret:-1,args:[P.m,[P.i,z]]}
H.f(a,z)
H.f(c,z)
this.b=b
this.c=a
this.d=c},
b6:function(a,b){return this.d_(a,null,b)},
dr:function(a){var z
H.w(a,"$isi",[H.aD(this,"aq",0)],"$asi")
z=this.b
if(z!=null)return z.$1(a)
return!0},
d4:function(a,b){var z
H.w(b,"$isi",[H.aD(this,"aq",0)],"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gm:function(a){return this.a.length},
ga3:function(a){var z=this.a
return new J.az(z,z.length,0,[H.x(z,0)])},
J:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.e(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aD(this,"aq",0)
H.A(b,z)
z=[z]
if(this.dr(H.h([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.d4(x,H.h([b],z))}},
ci:function(a,b){var z,y
H.w(b,"$isi",[H.aD(this,"aq",0)],"$asi")
if(this.dr(b)){z=this.a
y=z.length
C.a.ci(z,b)
this.d4(y,b)}},
$isi:1,
q:{
d_:function(a){var z=new O.aq([a])
z.bp(a)
return z}}},dc:{"^":"b;0a,0b",
gm:function(a){return this.a.length},
gw:function(){var z=this.b
if(z==null){z=D.I()
this.b=z}return z},
eP:function(a){var z=this.b
if(!(z==null))z.D(a)},
aJ:function(){return this.eP(null)},
ga1:function(a){var z=this.a
if(z.length>0)return C.a.gaF(z)
else return V.bf()},
bP:function(a){var z=this.a
if(a==null)C.a.h(z,V.bf())
else C.a.h(z,a)
this.aJ()},
aG:function(){var z=this.a
if(z.length>0){z.pop()
this.aJ()}}}}],["","",,E,{"^":"",cT:{"^":"b;"},aT:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a6:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sa7:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gw()
y.toString
x=H.f(this.ges(),{func:1,ret:-1,args:[D.q]})
C.a.G(y.a,x)}y=this.c
if(y!=null){y=y.gw()
y.toString
x=H.f(this.ges(),{func:1,ret:-1,args:[D.q]})
C.a.h(y.a,x)}w=new D.H("shape",z,this.c,this,[F.eH])
w.b=!0
this.b3(w)}},
ao:function(a,b){var z
for(z=this.y.a,z=new J.az(z,z.length,0,[H.x(z,0)]);z.H();)z.d.ao(0,b)},
aa:function(a){var z,y
z=a.dx
C.a.h(z.a,z.ga1(z))
z.aJ()
a.cO(this.f)
z=a.dy
y=(z&&C.a).gaF(z)
if(y!=null&&this.d!=null)y.ev(a,this)
for(z=this.y.a,z=new J.az(z,z.length,0,[H.x(z,0)]);z.H();)z.d.aa(a)
a.cN()
a.dx.aG()},
gw:function(){var z=this.z
if(z==null){z=D.I()
this.z=z}return z},
b3:function(a){var z=this.z
if(!(z==null))z.D(a)},
V:function(){return this.b3(null)},
i5:[function(a){H.d(a,"$isq")
this.e=null
this.b3(a)},function(){return this.i5(null)},"jf","$1","$0","ges",0,2,1],
i3:[function(a){this.b3(H.d(a,"$isq"))},function(){return this.i3(null)},"jd","$1","$0","ger",0,2,1],
jc:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isi",[E.aT],"$asi")
for(z=b.length,y=this.ger(),x={func:1,ret:-1,args:[D.q]},w=[x],v=0;v<b.length;b.length===z||(0,H.E)(b),++v){u=b[v]
if(u!=null){if(u.ga6()==null){t=new D.ba()
t.a=H.h([],w)
t.c=0
u.sa6(t)}t=u.ga6()
t.toString
H.f(y,x)
C.a.h(t.a,y)}}this.V()},"$2","gi2",8,0,9],
je:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isi",[E.aT],"$asi")
for(z=b.length,y=this.ger(),x={func:1,ret:-1,args:[D.q]},w=[x],v=0;v<b.length;b.length===z||(0,H.E)(b),++v){u=b[v]
if(u!=null){if(u.ga6()==null){t=new D.ba()
t.a=H.h([],w)
t.c=0
u.sa6(t)}t=u.ga6()
t.toString
H.f(y,x)
C.a.G(t.a,y)}}this.V()},"$2","gi4",8,0,9],
$isaK:1,
q:{
eg:function(a,b,c,d,e,f){var z,y
z=new E.aT()
z.a=d
z.b=!0
y=O.d_(E.aT)
z.y=y
y.b6(z.gi2(),z.gi4())
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
z.sa7(0,e)
return z}}},j8:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
eO:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.ag(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.dc()
y=[V.aG]
z.a=H.h([],y)
x=z.gw()
x.toString
w={func:1,ret:-1,args:[D.q]}
v=H.f(new E.ja(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.dc()
z.a=H.h([],y)
v=z.gw()
v.toString
x=H.f(new E.jb(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.dc()
z.a=H.h([],y)
y=z.gw()
y.toString
w=H.f(new E.jc(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.h([],[O.cg])
this.dy=z
C.a.h(z,null)
this.fr=new H.cw(0,0,[P.k,A.dk])},
gig:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.ga1(z)
y=this.db
y=z.k(0,y.ga1(y))
this.z=y
z=y}return z},
cO:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaF(z):a;(z&&C.a).h(z,y)},
cN:function(){var z=this.dy
if(z.length>1)z.pop()},
dG:function(a){var z=a.b
if(z.length===0)throw H.a(P.v("May not cache a shader with no name."))
if(this.fr.cr(0,z))throw H.a(P.v('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.l(0,z,a)},
q:{
j9:function(a,b){var z=new E.j8(a,b)
z.eO(a,b)
return z}}},ja:{"^":"n:12;a",
$1:function(a){var z
H.d(a,"$isq")
z=this.a
z.z=null
z.ch=null}},jb:{"^":"n:12;a",
$1:function(a){var z
H.d(a,"$isq")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jc:{"^":"n:12;a",
$1:function(a){var z
H.d(a,"$isq")
z=this.a
z.ch=null
z.cx=null}},jH:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a6:x@,0y,0z,0Q,0ch",
gw:function(){var z=this.x
if(z==null){z=D.I()
this.x=z}return z},
eR:[function(a){var z
H.d(a,"$isq")
z=this.x
if(!(z==null))z.D(a)
this.im()},function(){return this.eR(null)},"eQ","$1","$0","gd5",0,2,1],
ghT:function(){var z,y,x
z=Date.now()
y=C.d.a5(P.ef(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.ag(z,!1)
return x/y},
du:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.o(z)
x=C.h.cE(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.h.cE(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
im:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.f(new E.jJ(this),{func:1,ret:-1,args:[P.V]})
C.B.f6(z)
C.B.fS(z,W.fO(y,P.V))}},
ik:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.du()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ag(w,!1)
x.y=P.ef(0,0,0,w-x.r.a,0,0).a*0.000001
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
this.d.aa(this.e)}}catch(v){z=H.ay(v)
y=H.bC(v)
P.dQ("Error: "+H.l(z))
P.dQ("Stack: "+H.l(y))
throw H.a(z)}},
q:{
jI:function(a,b,c,d,e){var z,y,x,w
z=J.K(a)
if(!!z.$iscY)return E.eO(a,!0,!0,!0,!1)
y=W.cZ(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcq(a).h(0,y)
w=E.eO(y,!0,!0,!0,!1)
w.a=a
return w},
eO:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jH()
y=P.ii(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.k,null)
x=C.k.bV(a,"webgl",y)
x=H.d(x==null?C.k.bV(a,"experimental-webgl",y):x,"$isdi")
if(x==null)H.r(P.v("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.j9(x,a)
w=new T.jC(x)
w.b=H.D(x.getParameter(3379))
w.c=H.D(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.k9(a)
v=new X.ia()
v.c=new X.aI(!1,!1,!1)
v.d=P.il(null,null,null,P.m)
w.b=v
v=new X.iH(w)
v.f=0
v.r=new V.M(0,0)
v.x=new V.M(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.ir(w)
v.r=0
v.x=new V.M(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jL(w)
v.e=0
v.f=new V.M(0,0)
v.r=new V.M(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.h([],[[P.eK,P.b]])
w.z=v
u=document
t=W.aJ
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a3(u,"contextmenu",H.f(w.gfp(),s),!1,t))
v=w.z
r=W.ad
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a3(a,"focus",H.f(w.gft(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a3(a,"blur",H.f(w.gfl(),q),!1,r))
v=w.z
p=W.bK
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a3(u,"keyup",H.f(w.gfv(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a3(u,"keydown",H.f(w.gfu(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a3(a,"mousedown",H.f(w.gfA(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a3(a,"mouseup",H.f(w.gfC(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a3(a,"mousemove",H.f(w.gfB(),s),!1,t))
p=w.z
o=W.bV;(p&&C.a).h(p,W.a3(a,H.O(W.hP(a)),H.f(w.gfD(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a3(u,"mousemove",H.f(w.gfq(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a3(u,"mouseup",H.f(w.gfs(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a3(u,"pointerlockchange",H.f(w.gfE(),q),!1,r))
r=w.z
q=W.br
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a3(a,"touchstart",H.f(w.gfM(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a3(a,"touchend",H.f(w.gfK(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a3(a,"touchmove",H.f(w.gfL(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.ag(Date.now(),!1)
z.ch=0
z.du()
return z}}},jJ:{"^":"n:31;a",
$1:function(a){var z
H.h5(a)
z=this.a
if(z.z){z.z=!1
z.ik()}}}}],["","",,Z,{"^":"",fg:{"^":"b;a,b",q:{
dw:function(a,b,c){var z
H.w(c,"$isc",[P.m],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bw(c)),35044)
a.bindBuffer(b,null)
return new Z.fg(b,z)}}},e1:{"^":"cT;a,b,c,d,e",
a_:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ay(y)
x=P.v('Failed to bind buffer attribute "'+J.ac(this.a)+'": '+H.l(z))
throw H.a(x)}},
j:function(a){return"["+J.ac(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},fh:{"^":"b;a",$isny:1},cX:{"^":"b;a,0b,c,d",
aD:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
a_:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].a_(a)},
aH:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aa:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.e(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
j:function(a){var z,y,x,w,v,u
z=[P.k]
y=H.h([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.E)(x),++v)C.a.h(y,x[v].j(0))
u=H.h([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ac(z[v]))
return"Buffer:  ["+this.a.j(0)+"]\nIndices: "+C.a.a0(y,", ")+"\nAttrs:   "+C.a.a0(u,", ")},
$isp_:1},cv:{"^":"b;a,b,c",
j:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bi(this.c)+"'")+"]"}},bt:{"^":"b;a",
gd1:function(a){var z,y
z=this.a
y=(z&$.$get$aC().a)!==0?3:0
if((z&$.$get$aX().a)!==0)y+=3
if((z&$.$get$aW().a)!==0)y+=3
if((z&$.$get$aY().a)!==0)y+=2
if((z&$.$get$aZ().a)!==0)y+=3
if((z&$.$get$bT().a)!==0)y+=3
if((z&$.$get$bU().a)!==0)y+=4
if((z&$.$get$bu().a)!==0)++y
return(z&$.$get$aV().a)!==0?y+4:y},
hB:function(a){var z,y,x
z=$.$get$aC()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aX()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aW()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aY()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aZ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bT()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bU()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bu()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aV()
if((y&z.a)!==0)if(x===a)return z
return $.$get$ff()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bt))return!1
return this.a===b.a},
j:function(a){var z,y
z=H.h([],[P.k])
y=this.a
if((y&$.$get$aC().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aX().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aW().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aY().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aZ().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bT().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bU().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bu().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aV().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.a0(z,"|")},
q:{
au:function(a){return new Z.bt(a)}}}}],["","",,D,{"^":"",e4:{"^":"b;"},ba:{"^":"b;0a,0b,0c",
D:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.q(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.M(y,new D.hT(z))
return x!==0},
hL:function(){return this.D(null)},
io:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.D(y)}}},
as:function(a){return this.io(a,!0,!1)},
q:{
I:function(){var z=new D.ba()
z.a=H.h([],[{func:1,ret:-1,args:[D.q]}])
z.c=0
return z}}},hT:{"^":"n:32;a",
$1:function(a){var z
H.f(a,{func:1,ret:-1,args:[D.q]})
z=this.a.a
z.b
a.$1(z)}},q:{"^":"b;a,0b"},c8:{"^":"q;c,d,a,0b,$ti"},c9:{"^":"q;c,d,a,0b,$ti"},H:{"^":"q;c,d,e,a,0b,$ti",
j:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,X,{"^":"",e2:{"^":"b;a,b",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.e2))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.v(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.l(this.a)},
q:{"^":"nA<"}},eq:{"^":"b;a,b",
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eq))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.v(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.l(this.a)}},er:{"^":"q;c,a,0b"},ia:{"^":"b;0a,0b,0c,0d",
ib:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.er(a,this)
y.b=!0
return z.D(y)},
i7:function(a){var z,y
this.c=a.b
this.d.G(0,a.a)
z=this.b
if(z==null)return!1
y=new X.er(a,this)
y.b=!0
return z.D(y)}},eu:{"^":"cz;x,y,c,d,e,a,0b"},ir:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aw:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ag(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=y.E(0,new V.M(x*w,v*u))
u=this.a.gaU()
s=new X.bM(a,new V.M(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cM:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.D(this.aw(a,b))
return!0},
be:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.eI()
if(typeof z!=="number")return z.bU()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.D(this.aw(a,b))
return!0},
bd:function(a,b){var z=this.d
if(z==null)return!1
z.D(this.aw(a,b))
return!0},
ic:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaU()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.k()
t=a.b
s=this.cy
if(typeof t!=="number")return t.k()
w=new X.dd(new V.Z(v*u,t*s),y,x,new P.ag(w,!1),this)
w.b=!0
z.D(w)
return!0},
fz:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ag(Date.now(),!1)
y=this.f
x=new X.eu(c,a,this.a.gaU(),b,z,this)
x.b=!0
y.D(x)
this.y=z
this.x=new V.M(0,0)}},aI:{"^":"b;a,b,c",
v:function(a,b){var z,y
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
return z+(this.c?"Shift+":"")}},bM:{"^":"cz;x,y,z,Q,ch,c,d,e,a,0b"},iH:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
c3:function(a,b,c){var z,y,x
z=new P.ag(Date.now(),!1)
y=this.a.gaU()
x=new X.bM(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cM:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.D(this.c3(a,b,!0))
return!0},
be:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.eI()
if(typeof z!=="number")return z.bU()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.D(this.c3(a,b,!0))
return!0},
bd:function(a,b){var z=this.d
if(z==null)return!1
z.D(this.c3(a,b,!1))
return!0},
ie:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaU()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.k()
u=a.b
t=this.ch
if(typeof u!=="number")return u.k()
x=new X.dd(new V.Z(w*v,u*t),y,b,new P.ag(x,!1),this)
x.b=!0
z.D(x)
return!0},
gdP:function(){var z=this.b
if(z==null){z=D.I()
this.b=z}return z},
gbT:function(){var z=this.c
if(z==null){z=D.I()
this.c=z}return z},
geq:function(){var z=this.d
if(z==null){z=D.I()
this.d=z}return z}},dd:{"^":"cz;x,c,d,e,a,0b"},cz:{"^":"q;"},eQ:{"^":"cz;x,y,z,Q,ch,c,d,e,a,0b"},jL:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
aw:function(a,b){var z,y,x,w
H.w(a,"$isc",[V.M],"$asc")
z=new P.ag(Date.now(),!1)
y=a.length>0?a[0]:new V.M(0,0)
x=this.a.gaU()
w=new X.eQ(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
ia:function(a){var z
H.w(a,"$isc",[V.M],"$asc")
z=this.b
if(z==null)return!1
z.D(this.aw(a,!0))
return!0},
i8:function(a){var z
H.w(a,"$isc",[V.M],"$asc")
z=this.c
if(z==null)return!1
z.D(this.aw(a,!0))
return!0},
i9:function(a){var z
H.w(a,"$isc",[V.M],"$asc")
z=this.d
if(z==null)return!1
z.D(this.aw(a,!1))
return!0}},k9:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaU:function(){var z=this.a
return V.eG(0,0,(z&&C.k).gby(z).c,C.k.gby(z).d)},
dh:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eq(z,new X.aI(y,a.altKey,a.shiftKey))},
aS:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aI(y,a.altKey,a.shiftKey)},
cg:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aI(y,a.altKey,a.shiftKey)},
ay:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.L()
v=z.top
if(typeof x!=="number")return x.L()
return new V.M(y-w,x-v)},
b7:function(a){return new V.Z(a.movementX,a.movementY)},
ca:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.h([],[V.M])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.E)(x),++v){u=x[v]
t=C.h.ai(u.pageX)
C.h.ai(u.pageY)
s=z.left
C.h.ai(u.pageX)
C.a.h(y,new V.M(t-s,C.h.ai(u.pageY)-z.top))}return y},
au:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.e2(z,new X.aI(y,a.altKey,a.shiftKey))},
iO:[function(a){this.f=!0},"$1","gft",4,0,4],
iH:[function(a){this.f=!1},"$1","gfl",4,0,4],
iL:[function(a){if(this.f)a.preventDefault()},"$1","gfp",4,0,4],
iQ:[function(a){var z
H.d(a,"$isbK")
if(!this.f)return
z=this.dh(a)
if(this.b.ib(z))a.preventDefault()},"$1","gfv",4,0,21],
iP:[function(a){var z
H.d(a,"$isbK")
if(!this.f)return
z=this.dh(a)
if(this.b.i7(z))a.preventDefault()},"$1","gfu",4,0,21],
iS:[function(a){var z,y,x,w
H.d(a,"$isaJ")
z=this.a
z.focus()
this.f=!0
this.aS(a)
if(this.x){y=this.au(a)
x=this.b7(a)
if(this.d.cM(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.au(a)
w=this.ay(a)
if(this.c.cM(y,w))a.preventDefault()},"$1","gfA",4,0,5],
iU:[function(a){var z,y,x
H.d(a,"$isaJ")
this.aS(a)
z=this.au(a)
if(this.x){y=this.b7(a)
if(this.d.be(z,y))a.preventDefault()
return}if(this.r)return
x=this.ay(a)
if(this.c.be(z,x))a.preventDefault()},"$1","gfC",4,0,5],
iN:[function(a){var z,y,x,w
H.d(a,"$isaJ")
z=this.a
if(!(z&&C.k).gby(z).dM(0,new P.bO(a.clientX,a.clientY,[P.V]))){this.aS(a)
y=this.au(a)
if(this.x){x=this.b7(a)
if(this.d.be(y,x))a.preventDefault()
return}if(this.r)return
w=this.ay(a)
if(this.c.be(y,w))a.preventDefault()}},"$1","gfs",4,0,5],
iT:[function(a){var z,y,x
H.d(a,"$isaJ")
this.aS(a)
z=this.au(a)
if(this.x){y=this.b7(a)
if(this.d.bd(z,y))a.preventDefault()
return}if(this.r)return
x=this.ay(a)
if(this.c.bd(z,x))a.preventDefault()},"$1","gfB",4,0,5],
iM:[function(a){var z,y,x,w
H.d(a,"$isaJ")
z=this.a
if(!(z&&C.k).gby(z).dM(0,new P.bO(a.clientX,a.clientY,[P.V]))){this.aS(a)
y=this.au(a)
if(this.x){x=this.b7(a)
if(this.d.bd(y,x))a.preventDefault()
return}if(this.r)return
w=this.ay(a)
if(this.c.bd(y,w))a.preventDefault()}},"$1","gfq",4,0,5],
iV:[function(a){var z,y
H.d(a,"$isbV")
this.aS(a)
z=new V.Z((a&&C.A).ghJ(a),C.A.ghK(a)).p(0,180)
if(this.x){if(this.d.ic(z))a.preventDefault()
return}if(this.r)return
y=this.ay(a)
if(this.c.ie(z,y))a.preventDefault()},"$1","gfD",4,0,44],
iW:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.au(this.y)
v=this.ay(this.y)
this.d.fz(w,v,x)}},"$1","gfE",4,0,4],
j3:[function(a){var z
H.d(a,"$isbr")
this.a.focus()
this.f=!0
this.cg(a)
z=this.ca(a)
if(this.e.ia(z))a.preventDefault()},"$1","gfM",4,0,13],
j1:[function(a){var z
H.d(a,"$isbr")
this.cg(a)
z=this.ca(a)
if(this.e.i8(z))a.preventDefault()},"$1","gfK",4,0,13],
j2:[function(a){var z
H.d(a,"$isbr")
this.cg(a)
z=this.ca(a)
if(this.e.i9(z))a.preventDefault()},"$1","gfL",4,0,13]}}],["","",,D,{"^":"",cs:{"^":"b;0a,0b,0c,0d",
gw:function(){var z=this.d
if(z==null){z=D.I()
this.d=z}return z},
aK:[function(a){var z
H.d(a,"$isq")
z=this.d
if(!(z==null))z.D(a)},function(){return this.aK(null)},"ix","$1","$0","geS",0,2,1],
$isa5:1,
$isaK:1},a5:{"^":"b;",$isaK:1},ib:{"^":"aq;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gw:function(){var z=this.Q
if(z==null){z=D.I()
this.Q=z}return z},
aK:function(a){var z=this.Q
if(!(z==null))z.D(a)},
fw:[function(a){var z
H.d(a,"$isq")
z=this.ch
if(!(z==null))z.D(a)},function(){return this.fw(null)},"iR","$1","$0","gdq",0,2,1],
iX:[function(a){var z,y,x
H.w(a,"$isi",[D.a5],"$asi")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.E)(a),++y){x=a[y]
if(x==null||this.f1(x))return!1}return!0},"$1","gfF",4,0,37],
iE:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a5
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdq(),w={func:1,ret:-1,args:[D.q]},v=[w],u=0;u<b.length;b.length===y||(0,H.E)(b),++u){t=H.d(b[u],"$isa5")
if(t instanceof D.cs)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.ba()
s.a=H.h([],v)
s.c=0
t.d=s}H.f(x,w)
C.a.h(s.a,x)}z=new D.c8(a,b,this,[z])
z.b=!0
this.aK(z)},"$2","gfi",8,0,22],
iZ:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a5
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdq(),w={func:1,ret:-1,args:[D.q]},v=[w],u=0;u<b.length;b.length===y||(0,H.E)(b),++u){t=H.d(b[u],"$isa5")
if(t instanceof D.cs)C.a.G(this.e,t)
s=t.d
if(s==null){s=new D.ba()
s.a=H.h([],v)
s.c=0
t.d=s}H.f(x,w)
C.a.G(s.a,x)}z=new D.c9(a,b,this,[z])
z.b=!0
this.aK(z)},"$2","gfH",8,0,22],
f1:function(a){var z=C.a.ba(this.e,a)
return z},
$asi:function(){return[D.a5]},
$asaq:function(){return[D.a5]}},iQ:{"^":"b;",$isa5:1,$isaK:1},js:{"^":"b;",$isa5:1,$isaK:1},jE:{"^":"b;",$isa5:1,$isaK:1},jF:{"^":"b;",$isa5:1,$isaK:1},jG:{"^":"b;",$isa5:1,$isaK:1}}],["","",,V,{"^":"",
nC:[function(a,b){if(typeof b!=="number")return b.L()
if(typeof a!=="number")return H.o(a)
return Math.abs(b-a)<=1e-9},"$2","iE",8,0,35],
np:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.h.bo(a-b,z)
return(a<0?a+z:a)+b},
Q:function(a,b,c){if(a==null)return C.b.ah("null",c)
return C.b.ah(C.h.ez($.p.$2(a,0)?0:a,b),c+b+1)},
bB:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isc",[P.u],"$asc")
z=H.h([],[P.k])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.E)(a),++w){v=V.Q(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.e(z,u)
C.a.l(z,u,C.b.ah(z[u],x))}return z},
dP:function(a,b){return C.h.iv(Math.pow(b,C.I.cE(Math.log(H.my(a))/Math.log(b))))},
a1:{"^":"b;a,b,c",
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
return new V.a1(z,y,x)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}},
ak:{"^":"b;a,b,c,d",
cU:function(a){return H.h([this.a,this.b,this.c,this.d],[P.u])},
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
return new V.ak(z,y,x,w)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ak))return!1
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
cy:{"^":"b;a,b,c,d,e,f,r,x,y",
ab:function(a,b){var z=H.h([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.u])
return z},
k:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.d(a5,"$iscy")
z=this.a
y=a5.a
if(typeof z!=="number")return z.k()
x=C.h.k(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.k()
u=C.h.k(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.k()
r=C.h.k(t,s)
q=a5.b
p=C.h.k(z,q)
o=a5.e
n=C.h.k(w,o)
m=a5.x
l=C.h.k(t,m)
k=a5.c
z=C.h.k(z,k)
j=a5.f
w=C.h.k(w,j)
i=a5.y
t=C.h.k(t,i)
h=this.d
if(typeof h!=="number")return h.k()
g=C.h.k(h,y)
f=this.e
if(typeof f!=="number")return f.k()
e=C.h.k(f,v)
d=this.f
if(typeof d!=="number")return d.k()
c=C.h.k(d,s)
b=C.h.k(h,q)
a=C.h.k(f,o)
a0=C.h.k(d,m)
h=C.h.k(h,k)
f=C.h.k(f,j)
d=C.h.k(d,i)
a1=this.r
if(typeof a1!=="number")return a1.k()
y=C.h.k(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.k()
v=C.h.k(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.k()
return new V.cy(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.h.k(a3,s),C.h.k(a1,q)+C.h.k(a2,o)+C.h.k(a3,m),C.h.k(a1,k)+C.h.k(a2,j)+C.h.k(a3,i))},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cy))return!1
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
y=V.bB(H.h([this.a,this.d,this.r],z),3,0)
x=V.bB(H.h([this.b,this.e,this.x],z),3,0)
w=V.bB(H.h([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.e(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.e(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.e(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.e(y,1)
s=" "+y[1]+", "
if(1>=u)return H.e(x,1)
s=s+x[1]+", "
if(1>=t)return H.e(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.e(y,2)
z=" "+y[2]+", "
if(2>=u)return H.e(x,2)
z=z+x[2]+", "
if(2>=t)return H.e(w,2)
return s+(z+w[2]+"]")}},
aG:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ab:function(a,b){var z=H.h([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.u])
return z},
cG:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.p.$2(a2,0))return V.bf()
a3=1/a2
a4=-w
a5=-i
return V.aH((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.d(a7,"$isaG")
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
cV:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.y(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
bm:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aG))return!1
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
j:function(a){return this.N()},
ea:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.u]
y=V.bB(H.h([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bB(H.h([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bB(H.h([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bB(H.h([this.d,this.x,this.ch,this.dx],z),b,c)
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
N:function(){return this.ea("",3,0)},
F:function(a){return this.ea(a,3,0)},
q:{
aH:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aG(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bf:function(){return V.aH(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
ew:function(a,b,c){var z,y,x,w,v
z=c.p(0,Math.sqrt(c.B(c)))
y=b.az(z)
x=y.p(0,Math.sqrt(y.B(y)))
w=z.az(x)
v=new V.y(a.a,a.b,a.c)
return V.aH(x.a,w.a,z.a,x.O(0).B(v),x.b,w.b,z.b,w.O(0).B(v),x.c,w.c,z.c,z.O(0).B(v),0,0,0,1)}}},
M:{"^":"b;t:a>,u:b>",
E:function(a,b){return new V.M(this.a+b.a,this.b+b.b)},
L:function(a,b){return new V.M(this.a-b.a,this.b-b.b)},
k:function(a,b){return new V.M(this.a*b,this.b*b)},
p:function(a,b){if($.p.$2(b,0))return new V.M(0,0)
return new V.M(this.a/b,this.b/b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.M))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}},
S:{"^":"b;t:a>,u:b>,c",
E:function(a,b){return new V.S(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a,b){return new V.S(this.a-b.a,this.b-b.b,this.c-b.c)},
k:function(a,b){return new V.S(this.a*b,this.b*b,this.c*b)},
p:function(a,b){if($.p.$2(b,0))return new V.S(0,0,0)
return new V.S(this.a/b,this.b/b,this.c/b)},
v:function(a,b){var z
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
aL:{"^":"b;t:a>,u:b>,c,d",
k:function(a,b){return new V.aL(this.a*b,this.b*b,this.c*b,this.d*b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aL))return!1
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
eF:{"^":"b;t:a>,u:b>,c,d",
ga9:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eF))return!1
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
eG:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eF(a,b,c,d)}}},
Z:{"^":"b;a,b",
em:[function(a){return Math.sqrt(this.B(this))},"$0","gm",1,0,14],
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
return new V.Z(z*b,y*b)},
p:function(a,b){var z,y
if($.p.$2(b,0))return new V.Z(0,0)
z=this.a
if(typeof z!=="number")return z.p()
y=this.b
if(typeof y!=="number")return y.p()
return new V.Z(z/b,y/b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}},
y:{"^":"b;a,b,c",
em:[function(a){return Math.sqrt(this.B(this))},"$0","gm",1,0,14],
B:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cH:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.y(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
az:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.y(z*y-x*w,x*v-u*y,u*w-z*v)},
E:function(a,b){return new V.y(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a){return new V.y(-this.a,-this.b,-this.c)},
k:function(a,b){return new V.y(this.a*b,this.b*b,this.c*b)},
p:function(a,b){if($.p.$2(b,0))return new V.y(0,0,0)
return new V.y(this.a/b,this.b/b,this.c/b)},
el:function(){if(!$.p.$2(0,this.a))return!1
if(!$.p.$2(0,this.b))return!1
if(!$.p.$2(0,this.c))return!1
return!0},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.y))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}},
bS:{"^":"b;a,b,c,d",
em:[function(a){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=this.d
return Math.sqrt(z*z+y*y+x*x+w*w)},"$0","gm",1,0,14],
k:function(a,b){return new V.bS(this.a*b,this.b*b,this.c*b,this.d*b)},
p:function(a,b){if($.p.$2(b,0))return new V.bS(0,0,0,0)
return new V.bS(this.a/b,this.b/b,this.c/b,this.d/b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bS))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}}}],["","",,U,{"^":"",hx:{"^":"e4;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bZ:function(a){var z=V.np(a,this.c,this.b)
return z},
gw:function(){var z=this.y
if(z==null){z=D.I()
this.y=z}return z},
R:function(a){var z=this.y
if(!(z==null))z.D(a)},
scX:function(a,b){},
scI:function(a){var z,y
z=this.b
if(!$.p.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bZ(z)}z=new D.H("maximumLocation",y,this.b,this,[P.u])
z.b=!0
this.R(z)}},
scK:function(a){var z,y
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
scJ:function(a){var z,y,x
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
sT:function(a){var z,y,x
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
scu:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.p.$2(z,a)){y=this.x
this.x=a
z=new D.H("dampening",y,a,this,[P.u])
z.b=!0
this.R(z)}},
ao:function(a,b){var z,y,x,w
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
y=w}this.sT(y)}},
q:{
d0:function(){var z=new U.hx()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},e6:{"^":"ah;0a,0b",
gw:function(){var z=this.b
if(z==null){z=D.I()
this.b=z}return z},
b5:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e6))return!1
return J.F(this.a,b.a)},
j:function(a){return"Constant: "+this.a.F("          ")},
q:{
e7:function(a){var z=new U.e6()
z.a=a
return z}}},ej:{"^":"aq;0e,0f,0r,0a,0b,0c,0d",
gw:function(){var z=this.e
if(z==null){z=D.I()
this.e=z}return z},
R:[function(a){var z
H.d(a,"$isq")
z=this.e
if(!(z==null))z.D(a)},function(){return this.R(null)},"al","$1","$0","gaL",0,2,1],
iD:[function(a,b){var z,y,x,w,v,u,t
z=U.ah
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaL(),w={func:1,ret:-1,args:[D.q]},v=0;v<b.length;b.length===y||(0,H.E)(b),++v){u=b[v]
if(u!=null){t=u.gw()
t.toString
H.f(x,w)
C.a.h(t.a,x)}}z=new D.c8(a,b,this,[z])
z.b=!0
this.R(z)},"$2","gfh",8,0,23],
iY:[function(a,b){var z,y,x,w,v,u,t
z=U.ah
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaL(),w={func:1,ret:-1,args:[D.q]},v=0;v<b.length;b.length===y||(0,H.E)(b),++v){u=b[v]
if(u!=null){t=u.gw()
t.toString
H.f(x,w)
C.a.G(t.a,x)}}z=new D.c9(a,b,this,[z])
z.b=!0
this.R(z)},"$2","gfG",8,0,23],
b5:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.K()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.az(z,z.length,0,[H.x(z,0)]),x=null;z.H();){y=z.d
if(y!=null){w=y.b5(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.bf():x
z=this.e
if(!(z==null))z.as(0)}return this.f},
v:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ej))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.e(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.e(w,y)
if(!J.F(x,w[y]))return!1}return!0},
j:function(a){return"Group"},
$asi:function(){return[U.ah]},
$asaq:function(){return[U.ah]},
$isah:1},ah:{"^":"e4;"},ka:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gw:function(){var z=this.cy
if(z==null){z=D.I()
this.cy=z}return z},
R:[function(a){var z
H.d(a,"$isq")
z=this.cy
if(!(z==null))z.D(a)},function(){return this.R(null)},"al","$1","$0","gaL",0,2,1],
b8:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdP()
z.toString
y={func:1,ret:-1,args:[D.q]}
x=H.f(this.gc5(),y)
C.a.h(z.a,x)
x=this.a.c.geq()
x.toString
z=H.f(this.gc6(),y)
C.a.h(x.a,z)
z=this.a.c.gbT()
z.toString
y=H.f(this.gc7(),y)
C.a.h(z.a,y)
return!0},
fd:[function(a){H.d(a,"$isq")
if(!J.F(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gc5",4,0,2],
fe:[function(a){var z,y,x,w,v,u,t
a=H.j(H.d(a,"$isq"),"$isbM")
if(!this.y)return
if(this.x){z=a.d.L(0,a.y)
z=new V.Z(z.a,z.b)
z=z.B(z)
y=this.r
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.L(0,a.y)
z=new V.Z(y.a,y.b).k(0,2).p(0,z.ga9())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.k()
x=this.e
if(typeof x!=="number")return H.o(x)
y.sT(z*10*x)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=new V.Z(x.a,x.b).k(0,2).p(0,z.ga9())
x=this.b
v=w.a
if(typeof v!=="number")return v.O()
u=this.e
if(typeof u!=="number")return H.o(u)
t=this.z
if(typeof t!=="number")return H.o(t)
x.sX(0,-v*u+t)
this.b.sT(0)
y=y.L(0,a.z)
this.Q=new V.Z(y.a,y.b).k(0,2).p(0,z.ga9())}this.al()},"$1","gc6",4,0,2],
ff:[function(a){var z,y,x
H.d(a,"$isq")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.B(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.k()
x=this.e
if(typeof x!=="number")return H.o(x)
z.sT(y*10*x)
this.al()}},"$1","gc7",4,0,2],
b5:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.K()
if(z<y){this.ch=y
x=b.y
this.b.ao(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aH(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isah:1},kb:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gw:function(){var z=this.fx
if(z==null){z=D.I()
this.fx=z}return z},
R:[function(a){var z
H.d(a,"$isq")
z=this.fx
if(!(z==null))z.D(a)},function(){return this.R(null)},"al","$1","$0","gaL",0,2,1],
b8:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdP()
z.toString
y={func:1,ret:-1,args:[D.q]}
x=H.f(this.gc5(),y)
C.a.h(z.a,x)
x=this.a.c.geq()
x.toString
z=H.f(this.gc6(),y)
C.a.h(x.a,z)
z=this.a.c.gbT()
z.toString
x=H.f(this.gc7(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.I()
x.f=z}x=H.f(this.gfa(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.I()
x.d=z}x=H.f(this.gfb(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.I()
x.b=z}x=H.f(this.gha(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.I()
x.d=z}x=H.f(this.gh9(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.I()
x.c=z}y=H.f(this.gh8(),y)
C.a.h(z.a,y)
return!0},
ap:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.O()
z=-z}if(this.r){if(typeof y!=="number")return y.O()
y=-y}return new V.Z(z,y)},
fd:[function(a){a=H.j(H.d(a,"$isq"),"$isbM")
if(!J.F(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gc5",4,0,2],
fe:[function(a){var z,y,x,w,v,u,t
a=H.j(H.d(a,"$isq"),"$isbM")
if(!this.cx)return
if(this.ch){z=a.d.L(0,a.y)
z=new V.Z(z.a,z.b)
z=z.B(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.L(0,a.y)
z=this.ap(new V.Z(y.a,y.b).k(0,2).p(0,z.ga9()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.O()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sT(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.O()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sT(-z*10*y)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=this.ap(new V.Z(x.a,x.b).k(0,2).p(0,z.ga9()))
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
this.b.sT(0)
this.c.sT(0)
y=y.L(0,a.z)
this.dx=this.ap(new V.Z(y.a,y.b).k(0,2).p(0,z.ga9()))}this.al()},"$1","gc6",4,0,2],
ff:[function(a){var z,y,x
H.d(a,"$isq")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.B(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.O()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sT(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.O()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sT(-y*10*z)
this.al()}},"$1","gc7",4,0,2],
iA:[function(a){if(H.j(H.d(a,"$isq"),"$iseu").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfa",4,0,2],
iB:[function(a){var z,y,x,w,v,u,t
a=H.j(H.d(a,"$isq"),"$isbM")
if(!J.F(this.d,a.x.b))return
z=a.c
y=a.d
x=y.L(0,a.y)
w=this.ap(new V.Z(x.a,x.b).k(0,2).p(0,z.ga9()))
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
this.b.sT(0)
this.c.sT(0)
y=y.L(0,a.z)
this.dx=this.ap(new V.Z(y.a,y.b).k(0,2).p(0,z.ga9()))
this.al()},"$1","gfb",4,0,2],
j7:[function(a){H.d(a,"$isq")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gha",4,0,2],
j6:[function(a){var z,y,x,w,v,u,t
a=H.j(H.d(a,"$isq"),"$iseQ")
if(!this.cx)return
if(this.ch){z=a.d.L(0,a.y)
z=new V.Z(z.a,z.b)
z=z.B(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.L(0,a.y)
z=this.ap(new V.Z(y.a,y.b).k(0,2).p(0,z.ga9()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.O()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sT(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.O()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sT(-z*10*y)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=this.ap(new V.Z(x.a,x.b).k(0,2).p(0,z.ga9()))
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
this.b.sT(0)
this.c.sT(0)
y=y.L(0,a.z)
this.dx=this.ap(new V.Z(y.a,y.b).k(0,2).p(0,z.ga9()))}this.al()},"$1","gh9",4,0,2],
j5:[function(a){var z,y,x
H.d(a,"$isq")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.B(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.O()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sT(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.O()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sT(-y*10*z)
this.al()}},"$1","gh8",4,0,2],
b5:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.K()
if(z<y){this.dy=y
x=b.y
this.c.ao(0,x)
this.b.ao(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aH(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.k(0,V.aH(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isah:1},kc:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gw:function(){var z=this.r
if(z==null){z=D.I()
this.r=z}return z},
R:function(a){var z=this.r
if(!(z==null))z.D(a)},
b8:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.I()
z.e=y
z=y}else z=y
y=H.f(this.gfg(),{func:1,ret:-1,args:[D.q]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.I()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
iC:[function(a){var z,y,x,w
H.d(a,"$isq")
if(!J.F(this.b,this.a.b.c))return
H.j(a,"$isdd")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.k()
w=z+y*x
if(z!==w){this.d=w
z=new D.H("zoom",z,w,this,[P.u])
z.b=!0
this.R(z)}},"$1","gfg",4,0,2],
b5:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aH(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isah:1}}],["","",,M,{"^":"",hy:{"^":"aq;0e,0f,0a,0b,0c,0d",
gw:function(){var z=this.f
if(z==null){z=D.I()
this.f=z}return z},
a2:[function(a){var z
H.d(a,"$isq")
z=this.f
if(!(z==null))z.D(a)},function(){return this.a2(null)},"d6","$1","$0","gY",0,2,1],
j_:[function(a,b){var z,y,x,w,v,u,t
z=M.aM
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gY(),w={func:1,ret:-1,args:[D.q]},v=0;v<b.length;b.length===y||(0,H.E)(b),++v){u=b[v]
if(u!=null){t=u.gw()
t.toString
H.f(x,w)
C.a.h(t.a,x)}}z=new D.c8(a,b,this,[z])
z.b=!0
this.a2(z)},"$2","gfI",8,0,24],
j0:[function(a,b){var z,y,x,w,v,u,t
z=M.aM
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gY(),w={func:1,ret:-1,args:[D.q]},v=0;v<b.length;b.length===y||(0,H.E)(b),++v){u=b[v]
if(u!=null){t=u.gw()
t.toString
H.f(x,w)
C.a.G(t.a,x)}}z=new D.c9(a,b,this,[z])
z.b=!0
this.a2(z)},"$2","gfJ",8,0,24],
aa:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.az(z,z.length,0,[H.x(z,0)]);z.H();){y=z.d
if(!(y==null))y.aa(a)}this.e=!1},
$asi:function(){return[M.aM]},
$asaq:function(){return[M.aM]},
$isaM:1},hD:{"^":"b;0a,0b,0c,0d,0e,0f",
gw:function(){var z=this.f
if(z==null){z=D.I()
this.f=z}return z},
a2:[function(a){var z
H.d(a,"$isq")
z=this.f
if(!(z==null))z.D(a)},function(){return this.a2(null)},"d6","$1","$0","gY",0,2,1],
sb9:function(a){var z,y,x
if(a==null)a=new X.i0()
z=this.a
if(z!==a){if(z!=null){z=z.gw()
z.toString
y=H.f(this.gY(),{func:1,ret:-1,args:[D.q]})
C.a.G(z.a,y)}x=this.a
this.a=a
z=a.gw()
z.toString
y=H.f(this.gY(),{func:1,ret:-1,args:[D.q]})
C.a.h(z.a,y)
z=new D.H("camera",x,this.a,this,[X.cp])
z.b=!0
this.a2(z)}},
sbh:function(a,b){var z,y,x
if(b==null)b=X.d2(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gw()
z.toString
y=H.f(this.gY(),{func:1,ret:-1,args:[D.q]})
C.a.G(z.a,y)}x=this.b
this.b=b
z=b.gw()
z.toString
y=H.f(this.gY(),{func:1,ret:-1,args:[D.q]})
C.a.h(z.a,y)
z=new D.H("target",x,this.b,this,[X.dm])
z.b=!0
this.a2(z)}},
sbi:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gw()
z.toString
y=H.f(this.gY(),{func:1,ret:-1,args:[D.q]})
C.a.G(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gw()
z.toString
y=H.f(this.gY(),{func:1,ret:-1,args:[D.q]})
C.a.h(z.a,y)}z=new D.H("technique",x,this.c,this,[O.cg])
z.b=!0
this.a2(z)}},
aa:function(a){a.cO(this.c)
this.b.a_(a)
this.a.a_(a)
this.d.ao(0,a)
this.d.aa(a)
this.a.aH(a)
this.b.toString
a.cN()},
$isaM:1},hR:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
a2:[function(a){var z
H.d(a,"$isq")
z=this.x
if(!(z==null))z.D(a)},function(){return this.a2(null)},"d6","$1","$0","gY",0,2,1],
iJ:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aT
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gY(),w={func:1,ret:-1,args:[D.q]},v=[w],u=0;u<b.length;b.length===y||(0,H.E)(b),++u){t=b[u]
if(t!=null){if(t.ga6()==null){s=new D.ba()
s.a=H.h([],v)
s.c=0
t.sa6(s)}s=t.ga6()
s.toString
H.f(x,w)
C.a.h(s.a,x)}}z=new D.c8(a,b,this,[z])
z.b=!0
this.a2(z)},"$2","gfn",8,0,9],
iK:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aT
H.w(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gY(),w={func:1,ret:-1,args:[D.q]},v=[w],u=0;u<b.length;b.length===y||(0,H.E)(b),++u){t=b[u]
if(t!=null){if(t.ga6()==null){s=new D.ba()
s.a=H.h([],v)
s.c=0
t.sa6(s)}s=t.ga6()
s.toString
H.f(x,w)
C.a.G(s.a,x)}}z=new D.c9(a,b,this,[z])
z.b=!0
this.a2(z)},"$2","gfo",8,0,9],
sb9:function(a){var z,y,x
if(a==null)a=X.eB(2000,1.0471975511965976,null,0.1)
z=this.a
if(z!==a){if(z!=null){z=z.gw()
z.toString
y=H.f(this.gY(),{func:1,ret:-1,args:[D.q]})
C.a.G(z.a,y)}x=this.a
this.a=a
z=a.gw()
z.toString
y=H.f(this.gY(),{func:1,ret:-1,args:[D.q]})
C.a.h(z.a,y)
z=new D.H("camera",x,this.a,this,[X.cp])
z.b=!0
this.a2(z)}},
sbh:function(a,b){var z,y,x
if(b==null)b=X.d2(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gw()
z.toString
y=H.f(this.gY(),{func:1,ret:-1,args:[D.q]})
C.a.G(z.a,y)}x=this.b
this.b=b
z=b.gw()
z.toString
y=H.f(this.gY(),{func:1,ret:-1,args:[D.q]})
C.a.h(z.a,y)
z=new D.H("target",x,this.b,this,[X.dm])
z.b=!0
this.a2(z)}},
sbi:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gw()
z.toString
y=H.f(this.gY(),{func:1,ret:-1,args:[D.q]})
C.a.G(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gw()
z.toString
y=H.f(this.gY(),{func:1,ret:-1,args:[D.q]})
C.a.h(z.a,y)}z=new D.H("technique",x,this.c,this,[O.cg])
z.b=!0
this.a2(z)}},
gw:function(){var z=this.x
if(z==null){z=D.I()
this.x=z}return z},
aa:function(a){var z
a.cO(this.c)
this.b.a_(a)
this.a.a_(a)
z=this.c
if(z!=null)z.ao(0,a)
for(z=this.d.a,z=new J.az(z,z.length,0,[H.x(z,0)]);z.H();)z.d.ao(0,a)
for(z=this.d.a,z=new J.az(z,z.length,0,[H.x(z,0)]);z.H();)z.d.aa(a)
this.a.toString
a.cy.aG()
a.db.aG()
this.b.toString
a.cN()},
$isaM:1},aM:{"^":"b;"}}],["","",,A,{"^":"",dX:{"^":"b;a,b,c"},hk:{"^":"b;a",
i:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hM:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
dO:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},ev:{"^":"dk;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aZ,0aB,0b_,0bz,0dQ,0dR,0bA,0bB,0dS,0dT,0bC,0bD,0dU,0dV,0bE,0dW,0dX,0bF,0dY,0dZ,0bG,0bH,0bI,0e_,0e0,0bJ,0bK,0e1,0e2,0bL,0e3,0cw,0e4,0cz,0e5,0cA,0e6,0cB,0e7,0cC,0e8,0cD,a,b,0c,0d,0e,0f,0r",
eN:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.x=a1
z=new P.as("")
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
a1.hd(z)
a1.hk(z)
a1.he(z)
a1.hs(z)
a1.ht(z)
a1.hm(z)
a1.hx(z)
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
z=new P.as("")
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
v.hh(z)
v.hc(z)
v.hf(z)
v.hi(z)
v.hq(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.ho(z)
v.hp(z)}v.hl(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.c){r+="uniform float alpha;\n"
z.a=r
if(q!==C.i){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.f){r+="uniform sampler2D alphaTxt;\n"
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
case C.f:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
p=H.h([],[P.k])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.a0(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.hg(z)
v.hn(z)
v.hr(z)
v.hu(z)
v.hv(z)
v.hw(z)
v.hj(z)}r=z.a+="// === Main ===\n"
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
o=H.h([],[P.k])
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
n="vec4("+C.a.a0(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.ei(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.y=this.f.i(0,"posAttr")
this.Q=this.f.i(0,"normAttr")
this.z=this.f.i(0,"binmAttr")
this.ch=this.f.i(0,"txt2DAttr")
this.cx=this.f.i(0,"txtCubeAttr")
this.cy=this.f.i(0,"bendAttr")
if(a1.fr)this.fy=H.j(this.r.n(0,"invViewMat"),"$isaO")
if(y)this.db=H.j(this.r.n(0,"objMat"),"$isaO")
if(w)this.dx=H.j(this.r.n(0,"viewObjMat"),"$isaO")
this.fr=H.j(this.r.n(0,"projViewObjMat"),"$isaO")
if(a1.x2)this.go=H.j(this.r.n(0,"txt2DMat"),"$isdr")
if(a1.y1)this.id=H.j(this.r.n(0,"txtCubeMat"),"$isaO")
if(a1.y2)this.k1=H.j(this.r.n(0,"colorMat"),"$isaO")
this.k3=H.h([],[A.aO])
y=a1.aZ
if(y>0){this.k2=H.d(this.r.n(0,"bendMatCount"),"$isR")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.i(0,v)
if(l==null)H.r(P.v("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.j(l,"$isaO"))}}y=a1.a
if(y!==C.c){this.k4=H.j(this.r.n(0,"emissionClr"),"$isN")
switch(y){case C.c:break
case C.i:break
case C.f:this.r1=H.j(this.r.n(0,"emissionTxt"),"$isat")
this.rx=H.j(this.r.n(0,"nullEmissionTxt"),"$isR")
break
case C.e:this.r2=H.j(this.r.n(0,"emissionTxt"),"$isan")
this.rx=H.j(this.r.n(0,"nullEmissionTxt"),"$isR")
break}}y=a1.b
if(y!==C.c){this.ry=H.j(this.r.n(0,"ambientClr"),"$isN")
switch(y){case C.c:break
case C.i:break
case C.f:this.x1=H.j(this.r.n(0,"ambientTxt"),"$isat")
this.y1=H.j(this.r.n(0,"nullAmbientTxt"),"$isR")
break
case C.e:this.x2=H.j(this.r.n(0,"ambientTxt"),"$isan")
this.y1=H.j(this.r.n(0,"nullAmbientTxt"),"$isR")
break}}y=a1.c
if(y!==C.c){this.y2=H.j(this.r.n(0,"diffuseClr"),"$isN")
switch(y){case C.c:break
case C.i:break
case C.f:this.aZ=H.j(this.r.n(0,"diffuseTxt"),"$isat")
this.b_=H.j(this.r.n(0,"nullDiffuseTxt"),"$isR")
break
case C.e:this.aB=H.j(this.r.n(0,"diffuseTxt"),"$isan")
this.b_=H.j(this.r.n(0,"nullDiffuseTxt"),"$isR")
break}}y=a1.d
if(y!==C.c){this.bz=H.j(this.r.n(0,"invDiffuseClr"),"$isN")
switch(y){case C.c:break
case C.i:break
case C.f:this.dQ=H.j(this.r.n(0,"invDiffuseTxt"),"$isat")
this.bA=H.j(this.r.n(0,"nullInvDiffuseTxt"),"$isR")
break
case C.e:this.dR=H.j(this.r.n(0,"invDiffuseTxt"),"$isan")
this.bA=H.j(this.r.n(0,"nullInvDiffuseTxt"),"$isR")
break}}y=a1.e
if(y!==C.c){this.bD=H.j(this.r.n(0,"shininess"),"$isa_")
this.bB=H.j(this.r.n(0,"specularClr"),"$isN")
switch(y){case C.c:break
case C.i:break
case C.f:this.dS=H.j(this.r.n(0,"specularTxt"),"$isat")
this.bC=H.j(this.r.n(0,"nullSpecularTxt"),"$isR")
break
case C.e:this.dT=H.j(this.r.n(0,"specularTxt"),"$isan")
this.bC=H.j(this.r.n(0,"nullSpecularTxt"),"$isR")
break}}switch(a1.f){case C.c:break
case C.i:break
case C.f:this.dU=H.j(this.r.n(0,"bumpTxt"),"$isat")
this.bE=H.j(this.r.n(0,"nullBumpTxt"),"$isR")
break
case C.e:this.dV=H.j(this.r.n(0,"bumpTxt"),"$isan")
this.bE=H.j(this.r.n(0,"nullBumpTxt"),"$isR")
break}if(a1.dy){this.dW=H.j(this.r.n(0,"envSampler"),"$isan")
this.dX=H.j(this.r.n(0,"nullEnvTxt"),"$isR")
y=a1.r
if(y!==C.c){this.bF=H.j(this.r.n(0,"reflectClr"),"$isN")
switch(y){case C.c:break
case C.i:break
case C.f:this.dY=H.j(this.r.n(0,"reflectTxt"),"$isat")
this.bG=H.j(this.r.n(0,"nullReflectTxt"),"$isR")
break
case C.e:this.dZ=H.j(this.r.n(0,"reflectTxt"),"$isan")
this.bG=H.j(this.r.n(0,"nullReflectTxt"),"$isR")
break}}y=a1.x
if(y!==C.c){this.bH=H.j(this.r.n(0,"refraction"),"$isa_")
this.bI=H.j(this.r.n(0,"refractClr"),"$isN")
switch(y){case C.c:break
case C.i:break
case C.f:this.e_=H.j(this.r.n(0,"refractTxt"),"$isat")
this.bJ=H.j(this.r.n(0,"nullRefractTxt"),"$isR")
break
case C.e:this.e0=H.j(this.r.n(0,"refractTxt"),"$isan")
this.bJ=H.j(this.r.n(0,"nullRefractTxt"),"$isR")
break}}}y=a1.y
if(y!==C.c){this.bK=H.j(this.r.n(0,"alpha"),"$isa_")
switch(y){case C.c:break
case C.i:break
case C.f:this.e1=H.j(this.r.n(0,"alphaTxt"),"$isat")
this.bL=H.j(this.r.n(0,"nullAlphaTxt"),"$isR")
break
case C.e:this.e2=H.j(this.r.n(0,"alphaTxt"),"$isan")
this.bL=H.j(this.r.n(0,"nullAlphaTxt"),"$isR")
break}}this.cw=H.h([],[A.f1])
this.cz=H.h([],[A.f2])
this.cA=H.h([],[A.f3])
this.cB=H.h([],[A.f4])
this.cC=H.h([],[A.f5])
this.cD=H.h([],[A.f6])
if(a1.k2){y=a1.z
if(y>0){this.e3=H.d(this.r.n(0,"dirLightCount"),"$isR")
for(m=0;m<y;++m){x=this.r
w="dirLights["+m+"].viewDir"
l=x.i(0,w)
if(l==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isN")
x=this.r
w="dirLights["+m+"].color"
k=x.i(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isN")
x=this.cw;(x&&C.a).h(x,new A.f1(m,l,k))}}y=a1.Q
if(y>0){this.e4=H.d(this.r.n(0,"pntLightCount"),"$isR")
for(m=0;m<y;++m){x=this.r
w="pntLights["+m+"].point"
l=x.i(0,w)
if(l==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isN")
x=this.r
w="pntLights["+m+"].viewPnt"
k=x.i(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isN")
x=this.r
w="pntLights["+m+"].color"
j=x.i(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isN")
x=this.r
w="pntLights["+m+"].att0"
i=x.i(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isa_")
x=this.r
w="pntLights["+m+"].att1"
h=x.i(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isa_")
x=this.r
w="pntLights["+m+"].att2"
g=x.i(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isa_")
x=this.cz;(x&&C.a).h(x,new A.f2(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.e5=H.d(this.r.n(0,"spotLightCount"),"$isR")
for(m=0;m<y;++m){x=this.r
w="spotLights["+m+"].objPnt"
l=x.i(0,w)
if(l==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isN")
x=this.r
w="spotLights["+m+"].objDir"
k=x.i(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isN")
x=this.r
w="spotLights["+m+"].viewPnt"
j=x.i(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isN")
x=this.r
w="spotLights["+m+"].color"
i=x.i(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isN")
x=this.r
w="spotLights["+m+"].cutoff"
h=x.i(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isa_")
x=this.r
w="spotLights["+m+"].coneAngle"
g=x.i(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isa_")
x=this.r
w="spotLights["+m+"].att0"
f=x.i(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isa_")
x=this.r
w="spotLights["+m+"].att1"
e=x.i(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isa_")
x=this.r
w="spotLights["+m+"].att2"
d=x.i(0,w)
if(d==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isa_")
x=this.cA;(x&&C.a).h(x,new A.f3(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.e6=H.d(this.r.n(0,"txtDirLightCount"),"$isR")
for(m=0;m<y;++m){x=this.r
w="txtDirLights["+m+"].objUp"
l=x.i(0,w)
if(l==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isN")
x=this.r
w="txtDirLights["+m+"].objRight"
k=x.i(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isN")
x=this.r
w="txtDirLights["+m+"].objDir"
j=x.i(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isN")
x=this.r
w="txtDirLights["+m+"].viewDir"
i=x.i(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isN")
x=this.r
w="txtDirLights["+m+"].color"
h=x.i(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isN")
x=this.r
w="txtDirLights["+m+"].nullTxt"
g=x.i(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isR")
x=this.r
w="txtDirLightsTxt2D"+m
f=x.i(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isat")
x=this.cB;(x&&C.a).h(x,new A.f4(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.e7=H.d(this.r.n(0,"txtPntLightCount"),"$isR")
for(m=0;m<y;++m){x=this.r
w="txtPntLights["+m+"].point"
l=x.i(0,w)
if(l==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isN")
x=this.r
w="txtPntLights["+m+"].viewPnt"
k=x.i(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isN")
x=this.r
w="txtPntLights["+m+"].invViewRotMat"
j=x.i(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isdr")
x=this.r
w="txtPntLights["+m+"].color"
i=x.i(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isN")
x=this.r
w="txtPntLights["+m+"].nullTxt"
h=x.i(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isR")
x=this.r
w="txtPntLights["+m+"].att0"
g=x.i(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isa_")
x=this.r
w="txtPntLights["+m+"].att1"
f=x.i(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isa_")
x=this.r
w="txtPntLights["+m+"].att2"
e=x.i(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isa_")
x=this.r
w="txtPntLightsTxtCube"+m
d=x.i(0,w)
if(d==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isan")
x=this.cC;(x&&C.a).h(x,new A.f5(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.e8=H.d(this.r.n(0,"txtSpotLightCount"),"$isR")
for(m=0;m<y;++m){x=this.r
w="txtSpotLights["+m+"].objPnt"
l=x.i(0,w)
if(l==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isN")
x=this.r
w="txtSpotLights["+m+"].objDir"
k=x.i(0,w)
if(k==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isN")
x=this.r
w="txtSpotLights["+m+"].objUp"
j=x.i(0,w)
if(j==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isN")
x=this.r
w="txtSpotLights["+m+"].objRight"
i=x.i(0,w)
if(i==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isN")
x=this.r
w="txtSpotLights["+m+"].viewPnt"
h=x.i(0,w)
if(h==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isN")
x=this.r
w="txtSpotLights["+m+"].nullTxt"
g=x.i(0,w)
if(g==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isR")
x=this.r
w="txtSpotLights["+m+"].color"
f=x.i(0,w)
if(f==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isN")
x=this.r
w="txtSpotLights["+m+"].tuScalar"
e=x.i(0,w)
if(e==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isa_")
x=this.r
w="txtSpotLights["+m+"].tvScalar"
d=x.i(0,w)
if(d==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isa_")
x=this.r
w="txtSpotLights["+m+"].att0"
c=x.i(0,w)
if(c==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isa_")
x=this.r
w="txtSpotLights["+m+"].att1"
b=x.i(0,w)
if(b==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(b,"$isa_")
x=this.r
w="txtSpotLights["+m+"].att2"
a=x.i(0,w)
if(a==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a,"$isa_")
x=this.r
w="txtSpotLightsTxt2D"+m
a0=x.i(0,w)
if(a0==null)H.r(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a0,"$isat")
x=this.cD;(x&&C.a).h(x,new A.f6(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
am:function(a,b,c){b.a.uniform1i(b.d,1)},
ae:function(a,b,c){if(c==null||c.d<6)b.a.uniform1i(b.d,1)
else{a.d0(c)
b.a.uniform1i(b.d,0)}},
q:{
iy:function(a,b){var z,y
z=a.aB
y=new A.ev(b,z)
y.d3(b,z)
y.eN(a,b)
return y}}},iB:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aZ,aB,b_",
hd:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aZ+"];\n"
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
hk:function(a){var z
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
he:function(a){var z
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
hs:function(a){var z,y
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
ht:function(a){var z,y
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
hm:function(a){var z
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
hx:function(a){var z
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
if(0>=c.length)return H.e(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.aI(c,1))+"Txt;\n"
a.a=z
if(b===C.f)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
hh:function(a){var z,y
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
case C.f:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
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
hc:function(a){var z,y
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
case C.f:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
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
hf:function(a){var z,y
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
case C.f:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
hi:function(a){var z,y
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
case C.f:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
hq:function(a){var z,y
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
case C.f:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
hl:function(a){var z,y
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
ho:function(a){var z,y
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
case C.f:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
hp:function(a){var z,y
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
case C.f:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
hg:function(a){var z,y
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
hn:function(a){var z,y
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
hr:function(a){var z,y
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
hu:function(a){var z,y,x
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
hv:function(a){var z,y,x
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
hw:function(a){var z,y,x
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
hj:function(a){var z
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
j:function(a){return this.aB}},f1:{"^":"b;a,b,c"},f4:{"^":"b;a,b,c,d,e,f,r,x"},f2:{"^":"b;a,b,c,d,e,f,r"},f5:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f3:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f6:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},dk:{"^":"cT;",
d3:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
ei:function(a,b,c){var z,y,x
this.c=this.di(b,35633)
this.d=this.di(c,35632)
z=this.a
y=z.createProgram()
this.e=y
z.attachShader(y,this.c)
z.attachShader(this.e,this.d)
z.linkProgram(this.e)
if(!H.fS(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.r(P.v("Failed to link shader: "+H.l(x)))}this.h4()
this.h5()},
a_:function(a){a.a.useProgram(this.e)
this.f.hM()},
di:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fS(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.v("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
h4:function(){var z,y,x,w,v,u
z=H.h([],[A.dX])
y=this.a
x=H.D(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dX(y,v.name,u))}this.f=new A.hk(z)},
h5:function(){var z,y,x,w,v,u
z=H.h([],[A.ae])
y=this.a
x=H.D(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.hI(v.type,v.size,v.name,u))}this.r=new A.jW(z)},
aP:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.R(z,y,b,c)
else return A.dq(z,y,b,a,c)},
f3:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.at(z,y,b,c)
else return A.dq(z,y,b,a,c)},
f4:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.an(z,y,b,c)
else return A.dq(z,y,b,a,c)},
bt:function(a,b){return new P.fk(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
hI:function(a,b,c,d){switch(a){case 5120:return this.aP(b,c,d)
case 5121:return this.aP(b,c,d)
case 5122:return this.aP(b,c,d)
case 5123:return this.aP(b,c,d)
case 5124:return this.aP(b,c,d)
case 5125:return this.aP(b,c,d)
case 5126:return new A.a_(this.a,this.e,c,d)
case 35664:return new A.jR(this.a,this.e,c,d)
case 35665:return new A.N(this.a,this.e,c,d)
case 35666:return new A.jU(this.a,this.e,c,d)
case 35667:return new A.jS(this.a,this.e,c,d)
case 35668:return new A.jT(this.a,this.e,c,d)
case 35669:return new A.jV(this.a,this.e,c,d)
case 35674:return new A.jY(this.a,this.e,c,d)
case 35675:return new A.dr(this.a,this.e,c,d)
case 35676:return new A.aO(this.a,this.e,c,d)
case 35678:return this.f3(b,c,d)
case 35680:return this.f4(b,c,d)
case 35670:throw H.a(this.bt("BOOL",c))
case 35671:throw H.a(this.bt("BOOL_VEC2",c))
case 35672:throw H.a(this.bt("BOOL_VEC3",c))
case 35673:throw H.a(this.bt("BOOL_VEC4",c))
default:throw H.a(P.v("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},cq:{"^":"b;a,b",
j:function(a){return this.b}},eI:{"^":"dk;0x,0y,0z,0Q,0ch,0cx,a,b,0c,0d,0e,0f,0r"},ae:{"^":"b;"},jW:{"^":"b;a",
i:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.i(0,b)
if(z==null)throw H.a(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return z},
j:function(a){return this.N()},
hS:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.E)(z),++w)x+=z[w].j(0)+a
return x},
N:function(){return this.hS("\n")}},R:{"^":"ae;a,b,c,d",
j:function(a){return"Uniform1i: "+H.l(this.c)}},jS:{"^":"ae;a,b,c,d",
j:function(a){return"Uniform2i: "+H.l(this.c)}},jT:{"^":"ae;a,b,c,d",
j:function(a){return"Uniform3i: "+H.l(this.c)}},jV:{"^":"ae;a,b,c,d",
j:function(a){return"Uniform4i: "+H.l(this.c)}},jQ:{"^":"ae;0e,0f,a,b,c,d",
j:function(a){return"Uniform1iv: "+H.l(this.c)},
q:{
dq:function(a,b,c,d,e){var z=new A.jQ(a,b,c,e)
z.f=d
z.e=P.io(d,0,!1,P.m)
return z}}},a_:{"^":"ae;a,b,c,d",
j:function(a){return"Uniform1f: "+H.l(this.c)}},jR:{"^":"ae;a,b,c,d",
j:function(a){return"Uniform2f: "+H.l(this.c)}},N:{"^":"ae;a,b,c,d",
j:function(a){return"Uniform3f: "+H.l(this.c)}},jU:{"^":"ae;a,b,c,d",
j:function(a){return"Uniform4f: "+H.l(this.c)}},jY:{"^":"ae;a,b,c,d",
j:function(a){return"Uniform1Mat2 "+H.l(this.c)}},dr:{"^":"ae;a,b,c,d",
ak:function(a){var z=new Float32Array(H.bw(H.w(a,"$isc",[P.u],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
j:function(a){return"UniformMat3: "+H.l(this.c)}},aO:{"^":"ae;a,b,c,d",
ak:function(a){var z=new Float32Array(H.bw(H.w(a,"$isc",[P.u],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
j:function(a){return"UniformMat4: "+H.l(this.c)}},at:{"^":"ae;a,b,c,d",
j:function(a){return"UniformSampler2D: "+H.l(this.c)}},an:{"^":"ae;a,b,c,d",
d0:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
j:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",
dI:function(a,b,c,d){var z
H.f(c,{func:1,ret:-1,args:[F.ab,P.u,P.u]})
z=F.ce()
F.c_(z,b,c,d,a,1,0,0,1)
F.c_(z,b,c,d,a,0,1,0,3)
F.c_(z,b,c,d,a,0,0,1,2)
F.c_(z,b,c,d,a,-1,0,0,0)
F.c_(z,b,c,d,a,0,-1,0,0)
F.c_(z,b,c,d,a,0,0,-1,3)
z.af()
return z},
cH:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
c_:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.f(c,{func:1,ret:-1,args:[F.ab,P.u,P.u]})
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.y(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.y(t+h,s+f,r+g)
z.b=q
p=new V.y(t-h,s-f,r-g)
z.c=p
o=new V.y(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cH(y)
k=F.cH(z.b)
j=F.cP(d,e,new F.mg(z,F.cH(z.c),F.cH(z.d),k,l,c),b)
if(j!=null)a.b2(j)},
fV:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.f(d,{func:1,ret:P.u,args:[P.u]})
if(e<3)return
z=F.ce()
y=b?-1:1
x=-6.283185307179586/e
w=H.h([],[F.ab])
v=z.a
u=new V.y(0,0,y)
u=u.p(0,Math.sqrt(u.B(u)))
C.a.h(w,v.hz(new V.aL(a,-1,-1,-1),new V.ak(1,1,1,1),new V.S(0,0,c),new V.y(0,0,y),new V.M(0.5,0.5),u))
for(v=y*y,t=0;t<=e;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=d.$1(t/e)
u=z.a
if(typeof p!=="number")return H.o(p)
o=new V.y(r,q,y).p(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.bs(new V.aL(a,-1,-1,-1),null,new V.ak(n,l,m,1),new V.S(r*p,q*p,c),new V.y(0,0,y),new V.M(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.dE(w)
return z},
fT:function(a,b,c,d,e,f){return F.mE(!0,c,d,new F.mD(a,f),e)},
mE:function(a,b,c,d,e){var z
H.f(d,{func:1,ret:P.u,args:[P.u,P.u]})
if(e<3)return
if(c<1)return
z=F.cP(c,e,new F.mG(d),null)
if(z==null)return
z.af()
z.bw()
if(b)z.b2(F.fV(3,!1,1,new F.mH(d),e))
z.b2(F.fV(1,!0,-1,new F.mI(d),e))
return z},
mX:function(a,b){var z=F.cP(a,b,new F.mY(),null)
z.d.bS()
z.af()
z.bw()
return z},
af:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
b=b.p(0,Math.sqrt(b.B(b)))
z=b.a
y=b.b
x=b.c
w=F.bs(null,null,null,new V.S(z,y,x),b,null,null,null,0)
v=a.hO(w,new F.dv())
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
w.sa8(0,new V.ak(u,t,s,1))
r=Math.sqrt(z*z+y*y)
q=Math.atan2(y,z)/1.5707963267948966
if(q<0)q=-q
p=Math.atan2(r,x)/3.141592653589793
w.scT(new V.M(q,p<0?-p:p))
a.a.h(0,w)
return w},
Y:function(a,b,c,d,e){var z,y,x,w
if(e<=0)a.d.bu(0,b,d,c)
else{z=F.af(a,b.r.E(0,c.r).k(0,0.5))
y=F.af(a,c.r.E(0,d.r).k(0,0.5))
x=F.af(a,d.r.E(0,b.r).k(0,0.5))
w=e-1
F.Y(a,b,z,x,w)
F.Y(a,z,c,y,w)
F.Y(a,y,x,z,w)
F.Y(a,x,y,d,w)}},
h9:function(a,b,c){var z,y
z={}
z.a=b
z.a=new F.ni()
y=F.dI(a,null,new F.nj(z),c)
y.bw()
return y},
nm:function(a,b,c,d){return F.fU(c,a,d,b,new F.nn())},
mV:function(a,b,c,d,e,f){return F.fU(d,a,e,b,new F.mW(f,c))},
fU:function(a,b,c,d,e){var z=F.cP(a,b,new F.mF(H.f(e,{func:1,ret:V.S,args:[P.u]}),d,b,c),null)
if(z==null)return
z.af()
z.bw()
return z},
cP:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.f(c,{func:1,ret:-1,args:[F.ab,P.u,P.u]})
if(a<1)return
if(b<1)return
z=F.ce()
y=H.h([],[F.ab])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.bs(null,null,new V.ak(u,0,0,1),null,null,new V.M(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.ct(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.bs(null,null,new V.ak(o,n,m,1),null,null,new V.M(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.ct(d))}}z.d.hy(a+1,b+1,y)
return z},
mg:{"^":"n:6;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cH(z.b,b).cH(z.d.cH(z.c,b),c)
a.sX(0,new V.S(y.a,y.b,y.c))
a.san(y.p(0,Math.sqrt(y.B(y))))
z=1-b
x=1-c
a.sdH(new V.aL(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
mD:{"^":"n:17;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
mG:{"^":"n:6;a",
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
u=new V.y(y,u,w)
a.san(u.p(0,Math.sqrt(u.B(u))))
a.sdH(new V.aL(1-c,2+c,-1,-1))}},
mH:{"^":"n:25;a",
$1:function(a){return this.a.$2(a,1)}},
mI:{"^":"n:25;a",
$1:function(a){return this.a.$2(1-a,0)}},
mY:{"^":"n:6;",
$3:function(a,b,c){var z,y,x,w
z=c*3.141592653589793
y=Math.sin(z)
x=b*6.283185307179586
w=new V.y(Math.cos(x)*y,Math.cos(z),Math.sin(x)*y)
x=w.p(0,Math.sqrt(w.B(w)))
a.sX(0,new V.S(x.a,x.b,x.c))}},
ni:{"^":"n:17;",
$2:function(a,b){return 0}},
nj:{"^":"n:6;a",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.o(z)
y=a.f
x=new V.y(y.a,y.b,y.c)
z=x.p(0,Math.sqrt(x.B(x))).k(0,1+z)
a.sX(0,new V.S(z.a,z.b,z.c))}},
nn:{"^":"n:26;",
$1:function(a){return new V.S(Math.cos(a),Math.sin(a),0)}},
mW:{"^":"n:26;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.S(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
mF:{"^":"n:6;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dS(y.$1(z),x)
x=J.dS(y.$1(z+3.141592653589793/this.c),x).L(0,w)
x=new V.y(x.a,x.b,x.c)
v=x.p(0,Math.sqrt(x.B(x)))
u=new V.y(1,0,0)
y=v.az(!v.v(0,u)?new V.y(0,0,1):u)
t=y.p(0,Math.sqrt(y.B(y)))
y=t.az(v)
u=y.p(0,Math.sqrt(y.B(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.k(0,y*x)
x=t.k(0,r*x)
a.sX(0,w.E(0,new V.S(y.a-x.a,y.b-x.b,y.c-x.c)))}},
ar:{"^":"b;0a,0b,0c,0d,0e",
aA:function(){if(!this.gbc()){C.a.G(this.a.a.d.b,this)
this.a.a.V()}this.cc()
this.cd()
this.fP()},
h1:function(a){this.a=a
C.a.h(a.d.b,this)},
h2:function(a){this.b=a
C.a.h(a.d.c,this)},
h3:function(a){this.c=a
C.a.h(a.d.d,this)},
cc:function(){var z=this.a
if(z!=null){C.a.G(z.d.b,this)
this.a=null}},
cd:function(){var z=this.b
if(z!=null){C.a.G(z.d.c,this)
this.b=null}},
fP:function(){var z=this.c
if(z!=null){C.a.G(z.d.d,this)
this.c=null}},
gbc:function(){return this.a==null||this.b==null||this.c==null},
eY:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.y(0,0,0)
if(y!=null)v=v.E(0,y)
if(x!=null)v=v.E(0,x)
if(w!=null)v=v.E(0,w)
if(v.el())return
return v.p(0,Math.sqrt(v.B(v)))},
f_:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.L(0,y)
z=new V.y(z.a,z.b,z.c)
v=z.p(0,Math.sqrt(z.B(z)))
z=w.L(0,y)
z=new V.y(z.a,z.b,z.c)
z=v.az(z.p(0,Math.sqrt(z.B(z))))
return z.p(0,Math.sqrt(z.B(z)))},
cp:function(){if(this.d!=null)return!0
var z=this.eY()
if(z==null){z=this.f_()
if(z==null)return!1}this.d=z
this.a.a.V()
return!0},
eX:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.y(0,0,0)
if(y!=null)v=v.E(0,y)
if(x!=null)v=v.E(0,x)
if(w!=null)v=v.E(0,w)
if(v.el())return
return v.p(0,Math.sqrt(v.B(v)))},
eZ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.p.$2(n,0)){z=r.L(0,u)
z=new V.y(z.a,z.b,z.c)
m=z.p(0,Math.sqrt(z.B(z)))
if(o.a-p.a<0)m=m.O(0)}else{l=(z-q.b)/n
z=r.L(0,u).k(0,l).E(0,u).L(0,x)
z=new V.y(z.a,z.b,z.c)
m=z.p(0,Math.sqrt(z.B(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.O(0)}z=this.d
if(z!=null){k=z.p(0,Math.sqrt(z.B(z)))
z=k.az(m)
z=z.p(0,Math.sqrt(z.B(z))).az(k)
m=z.p(0,Math.sqrt(z.B(z)))}return m},
cn:function(){if(this.e!=null)return!0
var z=this.eX()
if(z==null){z=this.eZ()
if(z==null)return!1}this.e=z
this.a.a.V()
return!0},
aN:function(a,b){var z=b.a
if(z==null)throw H.a(P.v("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.a(P.v("May not replace a face's vertex with a vertex attached to a different shape."))},
ghE:function(a){if(J.F(this.a,this.b))return!0
if(J.F(this.b,this.c))return!0
if(J.F(this.c,this.a))return!0
return!1},
v:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.N()},
F:function(a){var z,y
if(this.gbc())return a+"disposed"
z=a+C.b.ah(J.ac(this.a.e),0)+", "+C.b.ah(J.ac(this.b.e),0)+", "+C.b.ah(J.ac(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.j(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.j(0)+"}"):z+"-}"},
N:function(){return this.F("")},
q:{
bb:function(a,b,c){var z,y,x
z=new F.ar()
y=a.a
if(y==null)H.r(P.v("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.v("May not create a face with vertices attached to different shapes."))
z.h1(a)
z.h2(b)
z.h3(c)
C.a.h(z.a.a.d.b,z)
z.a.a.V()
return z}}},
hU:{"^":"b;"},
jl:{"^":"hU;",
b1:function(a,b,c){var z,y
z=b.a
z.a.a.C()
z=z.e
y=c.a
y.a.a.C()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.C()
z=z.e
y=c.b
y.a.a.C()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.C()
z=z.e
y=c.c
y.a.a.C()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.C()
z=z.e
y=c.b
y.a.a.C()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.C()
z=z.e
y=c.c
y.a.a.C()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.C()
z=z.e
y=c.a
y.a.a.C()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.C()
z=z.e
y=c.c
y.a.a.C()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.C()
z=z.e
y=c.a
y.a.a.C()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.C()
z=z.e
y=c.b
y.a.a.C()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
d9:{"^":"b;0a,0b",
aA:function(){if(!this.gbc()){C.a.G(this.a.a.c.b,this)
this.a.a.V()}this.cc()
this.cd()},
cc:function(){var z=this.a
if(z!=null){C.a.G(z.c.b,this)
this.a=null}},
cd:function(){var z=this.b
if(z!=null){C.a.G(z.c.c,this)
this.b=null}},
gbc:function(){return this.a==null||this.b==null},
aN:function(a,b){var z=b.a
if(z==null)throw H.a(P.v("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.a(P.v("May not replace a line's vertex with a vertex attached to a different shape."))},
v:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.N()},
F:function(a){if(this.gbc())return a+"disposed"
return a+C.b.ah(J.ac(this.a.e),0)+", "+C.b.ah(J.ac(this.b.e),0)},
N:function(){return this.F("")}},
ic:{"^":"b;"},
jP:{"^":"ic;",
b1:function(a,b,c){var z,y
z=b.a
z.a.a.C()
z=z.e
y=c.a
y.a.a.C()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.C()
z=z.e
y=c.b
y.a.a.C()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.C()
z=z.e
y=c.b
y.a.a.C()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.C()
z=z.e
y=c.a
y.a.a.C()
y=y.e
return z==null?y==null:z===y}else return!1}}},
dh:{"^":"b;0a",
aA:function(){var z=this.a
if(z!=null){C.a.G(z.a.b.b,this)
this.a.a.V()}this.fO()},
fO:function(){var z=this.a
if(z!=null){C.a.G(z.b.b,this)
this.a=null}},
v:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.N()},
F:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.ah(J.ac(z.e),0)},
N:function(){return this.F("")}},
eH:{"^":"b;0a,0b,0c,0d,0e",
gw:function(){var z=this.e
if(z==null){z=D.I()
this.e=z}return z},
b2:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.C()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.E)(z),++w){v=z[w]
this.a.h(0,v.hG())}this.a.C()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.E)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.dh()
if(r.a==null)H.r(P.v("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.D(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.E)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.C()
t=t.e
if(typeof t!=="number")return t.E()
t+=y
s=s.c
if(t>=s.length)return H.e(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.d9()
s=p.a
if(s==null)H.r(P.v("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.r(P.v("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.D(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.E)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.C()
t=t.e
if(typeof t!=="number")return t.E()
t+=y
s=s.c
if(t>=s.length)return H.e(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.bb(p,o,l)}z=this.e
if(!(z==null))z.as(0)},
af:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.af()||!1
if(!this.a.af())y=!1
z=this.e
if(!(z==null))z.as(0)
return y},
hP:function(a,b,c){var z,y,x,w
z=this.a.c.length
for(y=c;y<z;++y){x=this.a.c
if(y>=x.length)return H.e(x,y)
w=x[y]
if(b.b1(0,a,w))return w}return},
hO:function(a,b){return this.hP(a,b,0)},
f8:function(a,b,c,d,e){var z,y,x
H.w(d,"$isc",[F.ab],"$asc")
H.w(e,"$isc",[P.m],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
if(a.b1(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
fR:function(a,b){var z,y,x,w,v,u,t,s
H.w(b,"$isc",[P.m],"$asc")
H.jr(b,J.mo(),H.x(b,0))
this.a.h(0,a)
for(z=b.length-1;z>=0;--z){if(z>=b.length)return H.e(b,z)
y=b[z]
x=this.a.c
if(y<0||y>=x.length)return H.e(x,y)
w=x[y]
for(;x=w.d,x.b.length+x.c.length+x.d.length>0;){x=x.i(0,0)
v=x.a
if(v==null||x.b==null||x.c==null)H.r(P.v("May not replace a face's vertex when the point has been disposed."))
if(J.F(v,w)){x.aN(w,a)
v=x.a
if(v!=null){C.a.G(v.d.b,x)
x.a=null}x.a=a
C.a.h(a.d.b,x)
u=1}else u=0
if(J.F(x.b,w)){x.aN(w,a)
v=x.b
if(v!=null){C.a.G(v.d.c,x)
x.b=null}x.b=a
C.a.h(a.d.c,x);++u}if(J.F(x.c,w)){x.aN(w,a)
v=x.c
if(v!=null){C.a.G(v.d.d,x)
x.c=null}x.c=a
C.a.h(a.d.d,x);++u}if(u>0){x=x.a.a.e
if(!(x==null))x.D(null)}}for(;x=w.c,x.b.length+x.c.length>0;){x=x.i(0,0)
v=x.a
if(v==null||x.b==null)H.r(P.v("May not replace a line's vertex when the point has been disposed."))
if(J.F(v,w)){x.aN(w,a)
v=x.a
if(v!=null){C.a.G(v.c.b,x)
x.a=null}x.a=a
C.a.h(a.c.b,x)
u=1}else u=0
if(J.F(x.b,w)){x.aN(w,a)
v=x.b
if(v!=null){C.a.G(v.c.c,x)
x.b=null}x.b=a
C.a.h(a.c.c,x);++u}if(u>0){x=x.a.a.e
if(!(x==null))x.D(null)}}for(;x=w.b.b,x.length>0;){x=x[0]
v=x.a
if(v==null)H.r(P.v("May not replace a point's vertex when the point has been disposed."))
if(J.F(v,w)){if(a.a==null)H.r(P.v("May not replace a point's vertex with a vertex which is not attached to a shape."))
v=x.a
if(v!=null){C.a.G(v.b.b,x)
x.a=null}x.a=a
C.a.h(a.b.b,x)
u=1}else u=0
if(u>0){x=x.a.a.e
if(!(x==null))x.D(null)}}x=this.a
v=x.c
if(y>=v.length)return H.e(v,y)
t=v[y]
if(t.b.b.length===0){s=t.c
if(s.b.length===0&&s.c.length===0){s=t.d
s=s.b.length===0&&s.c.length===0&&s.d.length===0}else s=!1}else s=!1
if(!s)H.r(P.v("May not remove a vertex without first making it empty."))
t.a=null
C.a.ii(v,y)
v=x.a.e
if(!(v==null))v.D(null)
x.b=!0}},
ep:function(a,b){var z,y,x,w,v,u,t,s
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.ab],x=[P.m];y>=0;--y){w=this.a.c
if(y>=w.length)return H.e(w,y)
v=w[y]
u=H.h([],z)
t=H.h([],x)
if(this.f8(a,v,y,u,t)){s=b.b2(u)
if(s!=null){this.fR(s,t)
y-=t.length}}}this.a.C()
this.c.bS()
this.d.bS()
this.b.ij()
this.c.cQ(new F.jP())
this.d.cQ(new F.jl())
z=this.e
if(!(z==null))z.as(0)},
hA:function(a){this.ep(new F.dv(),new F.iL())},
bw:function(){return this.hA(null)},
dL:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aC()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aX().a)!==0)++w
if((x&$.$get$aW().a)!==0)++w
if((x&$.$get$aY().a)!==0)++w
if((x&$.$get$aZ().a)!==0)++w
if((x&$.$get$bT().a)!==0)++w
if((x&$.$get$bU().a)!==0)++w
if((x&$.$get$bu().a)!==0)++w
if((x&$.$get$aV().a)!==0)++w
v=b.gd1(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.u
t=H.h(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.h(y,[Z.e1])
for(r=0,q=0;q<w;++q){p=b.hB(q)
o=p.gd1(p)
C.a.l(s,q,new Z.e1(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.e(y,n)
m=y[n].hY(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.l(t,l,m[k]);++l}}r+=o}H.w(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bw(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cX(new Z.fg(34962,j),s,b)
i.b=H.h([],[Z.cv])
if(this.b.b.length!==0){x=P.m
h=H.h([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.C()
C.a.h(h,g.e)}f=Z.dw(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cv(0,h.length,f))}if(this.c.b.length!==0){x=P.m
h=H.h([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.C()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.e(g,q)
g=g[q].b
g.a.a.C()
C.a.h(h,g.e)}f=Z.dw(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cv(1,h.length,f))}if(this.d.b.length!==0){x=P.m
h=H.h([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.C()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.e(g,q)
g=g[q].b
g.a.a.C()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.e(g,q)
g=g[q].c
g.a.a.C()
C.a.h(h,g.e)}f=Z.dw(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cv(4,h.length,f))}return i},
j:function(a){var z=H.h([],[P.k])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.F("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.F("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.F("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.F("   "))}return C.a.a0(z,"\n")},
b3:function(a){var z=this.e
if(!(z==null))z.D(a)},
V:function(){return this.b3(null)},
q:{
ce:function(){var z,y
z=new F.eH()
y=new F.kl(z)
y.b=!1
y.c=H.h([],[F.ab])
z.a=y
y=new F.jk(z)
y.b=H.h([],[F.dh])
z.b=y
y=new F.jj(z)
y.b=H.h([],[F.d9])
z.c=y
y=new F.ji(z)
y.b=H.h([],[F.ar])
z.d=y
z.e=null
return z}}},
ji:{"^":"b;a,0b",
bu:function(a,b,c,d){this.a.a.h(0,b)
this.a.a.h(0,c)
this.a.a.h(0,d)
return F.bb(b,c,d)},
dE:function(a){var z,y,x,w,v,u
H.w(a,"$isc",[F.ab],"$asc")
z=H.h([],[F.ar])
y=a.length
if(y>0){x=a[0]
for(w=2;w<y;++w){v=w-1
u=a.length
if(v>=u)return H.e(a,v)
v=a[v]
if(w>=u)return H.e(a,w)
u=a[w]
this.a.a.h(0,x)
this.a.a.h(0,v)
this.a.a.h(0,u)
C.a.h(z,F.bb(x,v,u))}}return z},
hy:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isc",[F.ab],"$asc")
z=H.h([],[F.ar])
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
C.a.h(z,F.bb(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bb(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bb(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bb(q,n,r))}u=!u}w=!w}return z},
gm:function(a){return this.b.length},
cQ:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.i(0,w)
for(u=w-1;u>=0;--u){t=x.d.i(0,u)
if(a.b1(0,v,t)){v.aA()
break}}}}},
bS:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=x.ghE(x)
if(y)x.aA()}},
af:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.E)(z),++w)if(!z[w].cp())x=!1
return x},
co:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.E)(z),++w)if(!z[w].cn())x=!1
return x},
j:function(a){return this.N()},
F:function(a){var z,y,x,w
z=H.h([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].F(a))
return C.a.a0(z,"\n")},
N:function(){return this.F("")}},
jj:{"^":"b;a,0b",
gm:function(a){return this.b.length},
cQ:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.e(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.i(0,w)
for(u=w-1;u>=0;--u){t=x.c.i(0,u)
if(a.b1(0,v,t)){v.aA()
break}}}}},
bS:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=J.F(x.a,x.b)
if(y)x.aA()}},
j:function(a){return this.N()},
F:function(a){var z,y,x,w
z=H.h([],[P.k])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.e(w,x)
C.a.h(z,w[x].F(a+(""+x+". ")))}return C.a.a0(z,"\n")},
N:function(){return this.F("")}},
jk:{"^":"b;a,0b",
gm:function(a){return this.b.length},
ij:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aA()}},
j:function(a){return this.N()},
F:function(a){var z,y,x,w
z=H.h([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].F(a))
return C.a.a0(z,"\n")},
N:function(){return this.F("")}},
ab:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
ct:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.bs(this.cx,x,u,z,y,w,v,a,t)},
hG:function(){return this.ct(null)},
sX:function(a,b){var z
if(!J.F(this.f,b)){this.f=b
z=this.a
if(z!=null)z.V()}},
scL:function(a){var z
a=a==null?null:a.p(0,Math.sqrt(a.B(a)))
if(!J.F(this.r,a)){this.r=a
z=this.a
if(z!=null)z.V()}},
sdK:function(a){var z
a=a==null?null:a.p(0,Math.sqrt(a.B(a)))
if(!J.F(this.x,a)){this.x=a
z=this.a
if(z!=null)z.V()}},
scT:function(a){var z
if(!J.F(this.y,a)){this.y=a
z=this.a
if(z!=null)z.V()}},
san:function(a){var z
if(!J.F(this.z,a)){this.z=a
z=this.a
if(z!=null)z.V()}},
sa8:function(a,b){var z
if(!J.F(this.Q,b)){this.Q=b
z=this.a
if(z!=null)z.V()}},
seD:function(a,b){var z
if(this.ch!==b){this.ch=b
z=this.a
if(z!=null)z.V()}},
sdH:function(a){var z
if(!J.F(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.V()}},
hY:function(a){var z,y
z=J.K(a)
if(z.v(a,$.$get$aC())){z=this.f
y=[P.u]
if(z==null)return H.h([0,0,0],y)
else return H.h([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aX())){z=this.r
y=[P.u]
if(z==null)return H.h([0,1,0],y)
else return H.h([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aW())){z=this.x
y=[P.u]
if(z==null)return H.h([0,0,1],y)
else return H.h([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$aY())){z=this.y
y=[P.u]
if(z==null)return H.h([0,0],y)
else return H.h([z.a,z.b],y)}else if(z.v(a,$.$get$aZ())){z=this.z
y=[P.u]
if(z==null)return H.h([0,0,0],y)
else return H.h([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$bT())){z=this.Q
y=[P.u]
if(z==null)return H.h([1,1,1],y)
else return H.h([z.a,z.b,z.c],y)}else if(z.v(a,$.$get$bU())){z=this.Q
if(z==null)return H.h([1,1,1,1],[P.u])
else return z.cU(0)}else if(z.v(a,$.$get$bu()))return H.h([this.ch],[P.u])
else if(z.v(a,$.$get$aV())){z=this.cx
y=[P.u]
if(z==null)return H.h([-1,-1,-1,-1],y)
else return H.h([z.a,z.b,z.c,z.d],y)}else return H.h([],[P.u])},
cp:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.y(0,0,0)
this.d.M(0,new F.ku(z))
z=z.a
this.r=z.p(0,Math.sqrt(z.B(z)))
z=this.a
if(z!=null){z.V()
z=this.a.e
if(!(z==null))z.as(0)}return!0},
cn:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.y(0,0,0)
this.d.M(0,new F.kt(z))
z=z.a
this.x=z.p(0,Math.sqrt(z.B(z)))
z=this.a
if(z!=null){z.V()
z=this.a.e
if(!(z==null))z.as(0)}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.N()},
F:function(a){var z,y,x
z=H.h([],[P.k])
C.a.h(z,C.b.ah(J.ac(this.e),0))
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
x=C.a.a0(z,", ")
return a+"{"+x+"}"},
N:function(){return this.F("")},
q:{
bs:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ab()
y=new F.ks(z)
y.b=H.h([],[F.dh])
z.b=y
y=new F.kq(z)
x=[F.d9]
y.b=H.h([],x)
y.c=H.h([],x)
z.c=y
y=new F.km(z)
x=[F.ar]
y.b=H.h([],x)
y.c=H.h([],x)
y.d=H.h([],x)
z.d=y
h=$.$get$fd()
z.e=0
y=$.$get$aC()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aX().a)!==0?e:null
z.x=(x&$.$get$aW().a)!==0?b:null
z.y=(x&$.$get$aY().a)!==0?f:null
z.z=(x&$.$get$aZ().a)!==0?g:null
z.Q=(x&$.$get$fe().a)!==0?c:null
z.ch=(x&$.$get$bu().a)!==0?i:0
z.cx=(x&$.$get$aV().a)!==0?a:null
return z}}},
ku:{"^":"n:10;a",
$1:function(a){var z,y
H.d(a,"$isar")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
kt:{"^":"n:10;a",
$1:function(a){var z,y
H.d(a,"$isar")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
kl:{"^":"b;a,0b,0c",
C:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.e(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.v("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.V()
return!0},
dF:function(a,b,c,d,e,f,g,h,i){var z=F.bs(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bv:function(a,b,c,d,e,f){return this.dF(a,null,b,c,null,d,e,f,0)},
hz:function(a,b,c,d,e,f){return this.dF(a,null,b,c,d,e,f,null,0)},
gm:function(a){return this.c.length},
af:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x)z[x].cp()
return!0},
co:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x)z[x].cn()
return!0},
hD:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.p(0,Math.sqrt(u*u+t*t+s*s))
if(!J.F(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.D(null)}}}}return!0},
j:function(a){return this.N()},
F:function(a){var z,y,x,w
this.C()
z=H.h([],[P.k])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].F(a))
return C.a.a0(z,"\n")},
N:function(){return this.F("")}},
km:{"^":"b;a,0b,0c,0d",
gm:function(a){return this.b.length+this.c.length+this.d.length},
i:function(a,b){var z,y,x
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
M:function(a,b){H.f(b,{func:1,ret:-1,args:[F.ar]})
C.a.M(this.b,b)
C.a.M(this.c,new F.kn(this,b))
C.a.M(this.d,new F.ko(this,b))},
j:function(a){return this.N()},
F:function(a){var z,y,x,w
z=H.h([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].F(a))
return C.a.a0(z,"\n")},
N:function(){return this.F("")}},
kn:{"^":"n:10;a,b",
$1:function(a){H.d(a,"$isar")
if(!J.F(a.a,this.a))this.b.$1(a)}},
ko:{"^":"n:10;a,b",
$1:function(a){var z
H.d(a,"$isar")
z=this.a
if(!J.F(a.a,z)&&!J.F(a.b,z))this.b.$1(a)}},
kq:{"^":"b;a,0b,0c",
gm:function(a){return this.b.length+this.c.length},
i:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.e(z,x)
return z[x]}else{if(b<0)return H.e(z,b)
return z[b]}},
j:function(a){return this.N()},
F:function(a){var z,y,x,w
z=H.h([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].F(a))
return C.a.a0(z,"\n")},
N:function(){return this.F("")}},
kr:{"^":"b;"},
dv:{"^":"kr;",
b1:function(a,b,c){return J.F(b.f,c.f)}},
fc:{"^":"b;"},
kp:{"^":"fc;",
b2:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.w(a,"$isc",[F.ab],"$asc")
for(z=a.length,y=0,x=null,w=null,v=null,u=0,t=null,s=0,r=null,q=0,p=null,o=0,n=0,m=0;m<z;++m){l=a[m]
k=l.f
if(k!=null){x=x==null?k:new V.S(x.a+k.a,x.b+k.b,x.c+k.c);++y}j=l.r
if(j!=null)w=w==null?j:new V.y(w.a+j.a,w.b+j.b,w.c+j.c)
i=l.x
if(i!=null)v=v==null?i:new V.y(v.a+i.a,v.b+i.b,v.c+i.c)
h=l.y
if(h!=null){r=r==null?h:new V.M(r.a+h.a,r.b+h.b);++s}g=l.z
if(g!=null){p=p==null?g:new V.y(p.a+g.a,p.b+g.b,p.c+g.c);++q}f=l.Q
if(f!=null){e=f.a
d=f.b
c=f.c
f=f.d
if(t==null){f=[e,d,c,f]
t=new V.bS(f[0],f[1],f[2],f[3])}else{f=[e,d,c,f]
e=f[0]
d=f[1]
c=f[2]
f=f[3]
t=new V.bS(t.a+e,t.b+d,t.c+c,t.d+f)}++u}f=l.ch
if(typeof f!=="number")return H.o(f)
n+=f;++o}b=F.bs(null,null,null,null,null,null,null,null,0)
if(y<=0||x==null)b.sX(0,null)
else b.sX(0,x.p(0,y))
if(w==null)b.scL(null)
else b.scL(w.p(0,Math.sqrt(w.B(w))))
if(v==null)b.sdK(null)
else b.sdK(v.p(0,Math.sqrt(v.B(v))))
if(s<=0||r==null)b.scT(null)
else b.scT(r.p(0,s))
if(q<=0||p==null)b.san(null)
else b.san(p.p(0,q))
if(u<=0||t==null)b.sa8(0,null)
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
b.sa8(0,new V.ak(f,e,d,z))}if(o<=0)b.seD(0,0)
else b.seD(0,n/o)
return b}},
iL:{"^":"fc;",
b2:function(a){var z,y,x,w
H.w(a,"$isc",[F.ab],"$asc")
z=new V.y(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.y(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.p(0,Math.sqrt(z.B(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.E)(a),++x)a[x].scL(z)
return}},
ks:{"^":"b;a,0b",
gm:function(a){return this.b.length},
j:function(a){return this.N()},
F:function(a){var z,y,x,w
z=H.h([],[P.k])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.h(z,y[w].F(a))
return C.a.a0(z,"\n")},
N:function(){return this.F("")}}}],["","",,O,{"^":"",ix:{"^":"cg;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gw:function(){var z=this.dy
if(z==null){z=D.I()
this.dy=z}return z},
U:[function(a){var z
H.d(a,"$isq")
z=this.dy
if(!(z==null))z.D(a)},function(){return this.U(null)},"d7","$1","$0","gaM",0,2,1],
fU:[function(a){H.d(a,"$isq")
this.a=null
this.U(a)},function(){return this.fU(null)},"j4","$1","$0","gfT",0,2,1],
iF:[function(a,b){var z=V.aG
z=new D.c8(a,H.w(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.U(z)},"$2","gfj",8,0,27],
iG:[function(a,b){var z=V.aG
z=new D.c9(a,H.w(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.U(z)},"$2","gfk",8,0,27],
dg:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.d.a5(z.e.length+3,4)*4
x=C.d.a5(z.f.length+3,4)*4
w=C.d.a5(z.r.length+3,4)*4
v=C.d.a5(z.x.length+3,4)*4
u=C.d.a5(z.y.length+3,4)*4
t=C.d.a5(z.z.length+3,4)*4
s=C.d.a5(this.e.a.length+3,4)*4
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
a0=q===C.e||p===C.e||o===C.e||n===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$aC()
if(c){z=$.$get$aX()
a6=new Z.bt(a6.a|z.a)}if(b){z=$.$get$aW()
a6=new Z.bt(a6.a|z.a)}if(a){z=$.$get$aY()
a6=new Z.bt(a6.a|z.a)}if(a0){z=$.$get$aZ()
a6=new Z.bt(a6.a|z.a)}if(a2){z=$.$get$aV()
a6=new Z.bt(a6.a|z.a)}return new A.iB(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
W:function(a,b){H.w(a,"$isc",[T.dn],"$asc")
if(b!=null)if(!C.a.ba(a,b)){b.a=a.length
C.a.h(a,b)}},
ao:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.az(z,z.length,0,[H.x(z,0)]);z.H();){y=z.d
x=new V.y(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cV(x)}}},
ev:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.dg()
y=H.d(a.fr.i(0,z.aB),"$isev")
if(y==null){y=A.iy(z,a.a)
a.dG(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.b_
z=b.e
if(!(z instanceof Z.cX)){b.e=null
z=null}if(z==null||!z.d.v(0,w)){z=x.r1
if(z)b.d.af()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.c
u.d.co()
u.a.co()
u=u.e
if(!(u==null))u.as(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.a.hD()
t=t.e
if(!(t==null))t.as(0)}r=b.d.dL(new Z.fh(a.a),w)
r.aD($.$get$aC()).e=this.a.y.c
if(z)r.aD($.$get$aX()).e=this.a.Q.c
if(v)r.aD($.$get$aW()).e=this.a.z.c
if(x.rx)r.aD($.$get$aY()).e=this.a.ch.c
if(u)r.aD($.$get$aZ()).e=this.a.cx.c
if(x.x1)r.aD($.$get$aV()).e=this.a.cy.c
b.e=r}z=T.dn
q=H.h([],[z])
this.a.a_(a)
if(x.fx){v=this.a
u=a.dx
u=u.ga1(u)
v=v.db
v.toString
v.ak(u.ab(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.ga1(u)
t=a.dx
t=u.k(0,t.ga1(t))
a.cx=t
u=t}v=v.dx
v.toString
v.ak(u.ab(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.gig()
t=a.dx
t=u.k(0,t.ga1(t))
a.ch=t
u=t}v=v.fr
v.toString
v.ak(u.ab(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.go
v.toString
v.ak(u.ab(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.id
v.toString
v.ak(u.ab(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k1
v.toString
v.ak(C.t.ab(u,!0))}if(x.aZ>0){p=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,p)
for(v=[P.u],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.e(t,o)
t=t[o]
u.toString
H.d(t,"$isaG")
u=u.k3
if(o>=u.length)return H.e(u,o)
u=u[o]
n=new Float32Array(H.bw(H.w(t.ab(0,!0),"$isc",v,"$asc")))
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
case C.f:this.W(q,this.f.d)
v=this.a
u=this.f.d
v.am(v.r1,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.W(q,this.f.e)
v=this.a
u=this.f.e
v.ae(v.r2,v.rx,u)
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
case C.f:this.W(q,this.r.d)
v=this.a
u=this.r.d
v.am(v.x1,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.W(q,this.r.e)
v=this.a
u=this.r.e
v.ae(v.x2,v.y1,u)
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
case C.f:this.W(q,this.x.d)
v=this.a
u=this.x.d
v.am(v.aZ,v.b_,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.W(q,this.x.e)
v=this.a
u=this.x.e
v.ae(v.aB,v.b_,u)
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
v=v.bz
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.f:this.W(q,this.y.d)
v=this.a
u=this.y.d
v.am(v.dQ,v.bA,u)
u=this.a
v=this.y.f
u=u.bz
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.W(q,this.y.e)
v=this.a
u=this.y.e
v.ae(v.dR,v.bA,u)
u=this.a
v=this.y.f
u=u.bz
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.c:break
case C.i:v=this.a
u=this.z.f
v=v.bB
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bD
u.a.uniform1f(u.d,s)
break
case C.f:this.W(q,this.z.d)
v=this.a
u=this.z.d
v.am(v.dS,v.bC,u)
u=this.a
v=this.z.f
u=u.bB
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bD
v.a.uniform1f(v.d,s)
break
case C.e:this.W(q,this.z.e)
v=this.a
u=this.z.e
v.ae(v.dT,v.bC,u)
u=this.a
v=this.z.f
u=u.bB
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bD
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.e3
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga1(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.E)(v),++k){j=v[k]
t=this.a.cw
if(l>=t.length)return H.e(t,l)
i=t[l]
t=m.cV(j.a)
s=t.a
h=t.b
g=t.c
g=t.p(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.e4
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga1(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.E)(v),++k){j=v[k]
t=this.a.cz
if(l>=t.length)return H.e(t,l)
i=t[l]
t=j.gbf(j)
s=i.b
h=t.gt(t)
g=t.gu(t)
t=t.gcY(t)
s.a.uniform3f(s.d,h,g,t)
t=m.bm(j.gbf(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.ga8(j)
g=i.d
h=t.gbR()
s=t.gbn()
t=t.gbx()
g.a.uniform3f(g.d,h,s,t)
t=j.gcj()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gck()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gcl()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.e5
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga1(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.E)(v),++k){j=v[k]
t=this.a.cA
if(l>=t.length)return H.e(t,l)
i=t[l]
t=j.gbf(j)
s=i.b
h=t.gt(t)
g=t.gu(t)
t=t.gcY(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gcv(j).jb()
g=i.c
h=t.gaW(t)
s=t.gaX(t)
t=t.gaY()
g.a.uniform3f(g.d,h,s,t)
t=m.bm(j.gbf(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.ga8(j)
s=i.e
h=t.gbR()
g=t.gbn()
t=t.gbx()
s.a.uniform3f(s.d,h,g,t)
t=j.gj9()
g=i.f
g.a.uniform1f(g.d,t)
t=j.gj8()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gcj()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gck()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gcl()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.e6
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga1(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.E)(v),++k){j=v[k]
s=this.a.cB
if(l>=s.length)return H.e(s,l)
i=s[l]
s=j.gbj()
H.w(q,"$isc",t,"$asc")
if(!C.a.ba(q,s)){s.sc4(q.length)
C.a.h(q,s)}s=j.gcv(j)
h=i.d
g=s.gaW(s)
f=s.gaX(s)
s=s.gaY()
h.a.uniform3f(h.d,g,f,s)
s=j.gbT()
f=i.b
g=s.gaW(s)
h=s.gaX(s)
s=s.gaY()
f.a.uniform3f(f.d,g,h,s)
s=j.gbg(j)
h=i.c
g=s.gaW(s)
f=s.gaX(s)
s=s.gaY()
h.a.uniform3f(h.d,g,f,s)
s=m.cV(j.gcv(j))
f=s.a
g=s.b
h=s.c
h=s.p(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.ga8(j)
g=i.f
f=h.gbR()
s=h.gbn()
h=h.gbx()
g.a.uniform3f(g.d,f,s,h)
h=j.gbj()
s=h.gbN(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gbN(h)
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.ghV(h))
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.e7
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga1(v)
for(v=this.dx.y,u=v.length,t=[P.u],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.E)(v),++k){j=v[k]
h=this.a.cC
if(l>=h.length)return H.e(h,l)
i=h[l]
h=j.gbj()
H.w(q,"$isc",s,"$asc")
if(!C.a.ba(q,h)){h.sc4(q.length)
C.a.h(q,h)}e=m.k(0,j.ga1(j))
h=j.ga1(j).bm(new V.S(0,0,0))
g=i.b
f=h.gt(h)
d=h.gu(h)
h=h.gcY(h)
g.a.uniform3f(g.d,f,d,h)
h=e.bm(new V.S(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.cG(0)
d=i.d
n=new Float32Array(H.bw(H.w(new V.cy(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).ab(0,!0),"$isc",t,"$asc")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.ga8(j)
h=i.e
f=d.gbR()
g=d.gbn()
d=d.gbx()
h.a.uniform3f(h.d,f,g,d)
d=j.gbj()
h=d.gbN(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.giz()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gc4())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gcj()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gck()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gcl()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.e8
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga1(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.E)(v),++k){j=v[k]
t=this.a.cD
if(l>=t.length)return H.e(t,l)
i=t[l]
t=j.gbj()
H.w(q,"$isc",z,"$asc")
if(!C.a.ba(q,t)){t.sc4(q.length)
C.a.h(q,t)}t=j.gbf(j)
s=i.b
h=t.gt(t)
g=t.gu(t)
t=t.gcY(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gcv(j)
g=i.c
h=t.gaW(t)
s=t.gaX(t)
t=t.gaY()
g.a.uniform3f(g.d,h,s,t)
t=j.gbT()
s=i.d
h=t.gaW(t)
g=t.gaX(t)
t=t.gaY()
s.a.uniform3f(s.d,h,g,t)
t=j.gbg(j)
g=i.e
h=t.gaW(t)
s=t.gaX(t)
t=t.gaY()
g.a.uniform3f(g.d,h,s,t)
t=m.bm(j.gbf(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gbj()
s=t.gbN(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gbN(t)
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.ghV(t))
t=i.x
t.a.uniform1i(t.d,0)}t=j.ga8(j)
s=i.y
h=t.gbR()
g=t.gbn()
t=t.gbx()
s.a.uniform3f(s.d,h,g,t)
t=j.gjg()
g=i.z
g.a.uniform1f(g.d,t)
t=j.gjh()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gcj()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gck()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gcl()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.c:break
case C.i:break
case C.f:this.W(q,this.Q.d)
z=this.a
v=this.Q.d
z.am(z.dU,z.bE,v)
break
case C.e:this.W(q,this.Q.e)
z=this.a
v=this.Q.e
z.ae(z.dV,z.bE,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.ga1(v).cG(0)
a.Q=v}z=z.fy
z.toString
z.ak(v.ab(0,!0))}if(x.dy){this.W(q,this.ch)
z=this.a
v=this.ch
z.ae(z.dW,z.dX,v)
switch(x.r){case C.c:break
case C.i:z=this.a
v=this.cx.f
z=z.bF
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.f:this.W(q,this.cx.d)
z=this.a
v=this.cx.d
z.am(z.dY,z.bG,v)
v=this.a
z=this.cx.f
v=v.bF
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.e:this.W(q,this.cx.e)
z=this.a
v=this.cx.e
z.ae(z.dZ,z.bG,v)
v=this.a
z=this.cx.f
v=v.bF
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.c:break
case C.i:z=this.a
v=this.cy.f
z=z.bI
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bH
v.a.uniform1f(v.d,t)
break
case C.f:this.W(q,this.cy.d)
z=this.a
v=this.cy.d
z.am(z.e_,z.bJ,v)
v=this.a
z=this.cy.f
v=v.bI
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bH
z.a.uniform1f(z.d,t)
break
case C.e:this.W(q,this.cy.e)
z=this.a
v=this.cy.e
z.ae(z.e0,z.bJ,v)
v=this.a
z=this.cy.f
v=v.bI
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bH
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.c
if(v){switch(z){case C.c:break
case C.i:z=this.a
u=this.db.f
z=z.bK
z.a.uniform1f(z.d,u)
break
case C.f:this.W(q,this.db.d)
z=this.a
u=this.db.d
z.am(z.e1,z.bL,u)
u=this.a
z=this.db.f
u=u.bK
u.a.uniform1f(u.d,z)
break
case C.e:this.W(q,this.db.e)
z=this.a
u=this.db.e
z.ae(z.e2,z.bL,u)
u=this.a
z=this.db.f
u=u.bK
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o)q[o].a_(a)
z=b.e
z.a_(a)
z.aa(a)
z.aH(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o){z=q[o]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(34067,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.dO()},
j:function(a){var z=this.a
if(z!=null)return z.b
else return this.dg().aB}},iz:{"^":"db;0f,a,b,0c,0d,0e",
fX:function(a){var z,y
z=this.f
if(!$.p.$2(z,a)){y=this.f
this.f=a
z=new D.H(this.b,y,a,this,[P.u])
z.b=!0
this.a.U(z)}},
aR:function(){this.d2()
this.fX(1)}},db:{"^":"b;",
U:[function(a){this.a.U(H.d(a,"$isq"))},function(){return this.U(null)},"d7","$1","$0","gaM",0,2,1],
aR:["d2",function(){}],
h_:function(a){},
h0:function(a){var z,y,x
z=this.e
if(z==null?a!=null:z!==a){if(z!=null){z=z.e
y=H.f(this.gaM(),{func:1,ret:-1,args:[D.q]})
C.a.G(z.a,y)}x=this.e
this.e=a
if(a!=null){z=a.e
y=H.f(this.gaM(),{func:1,ret:-1,args:[D.q]})
C.a.h(z.a,y)}z=new D.H(this.b+".textureCube",x,this.e,this,[T.cC])
z.b=!0
this.a.U(z)}},
san:function(a){var z=this.c
if(z!==C.e){if(z===C.c)this.aR()
this.c=C.e
this.h_(null)
z=this.a
z.a=null
z.U(null)}this.h0(a)}},iA:{"^":"db;a,b,0c,0d,0e"},be:{"^":"db;0f,a,b,0c,0d,0e",
dv:function(a){var z,y
if(!J.F(this.f,a)){z=this.f
this.f=a
y=new D.H(this.b+".color",z,a,this,[V.a1])
y.b=!0
this.a.U(y)}},
aR:["bY",function(){this.d2()
this.dv(new V.a1(1,1,1))}],
sa8:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.aR()
z=this.a
z.a=null
z.U(null)}this.dv(b)}},iC:{"^":"be;0ch,0f,a,b,0c,0d,0e",
fZ:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.H(this.b+".refraction",y,a,this,[P.u])
z.b=!0
this.a.U(z)}},
aR:function(){this.bY()
this.fZ(1)}},iD:{"^":"be;0ch,0f,a,b,0c,0d,0e",
ce:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.H(this.b+".shininess",y,a,this,[P.u])
z.b=!0
this.a.U(z)}},
aR:function(){this.bY()
this.ce(100)}},jm:{"^":"cg;0a,0b,0c,0d,0e",
gw:function(){var z=this.e
if(z==null){z=D.I()
this.e=z}return z},
U:[function(a){var z
H.d(a,"$isq")
z=this.e
if(!(z==null))z.D(a)},function(){return this.U(null)},"d7","$1","$0","gaM",0,2,1],
ev:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.d(a.fr.i(0,"Skybox"),"$iseI")
if(z==null){y=a.a
z=new A.eI(y,"Skybox")
z.d3(y,"Skybox")
z.ei(0,$.jo,$.jn)
z.x=z.f.i(0,"posAttr")
z.y=H.j(z.r.i(0,"fov"),"$isa_")
z.z=H.j(z.r.i(0,"ratio"),"$isa_")
z.Q=H.j(z.r.i(0,"boxClr"),"$isN")
z.ch=H.j(z.r.i(0,"boxTxt"),"$isan")
z.cx=H.j(z.r.i(0,"viewMat"),"$isaO")
a.dG(z)}this.a=z}if(b.e==null){y=b.d.dL(new Z.fh(a.a),$.$get$aC())
y.aD($.$get$aC()).e=this.a.x.c
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
w.ch.d0(x)
x=this.d
y=w.Q
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.ga1(x).cG(0)
w=w.cx
w.toString
w.ak(x.ab(0,!0))
y=b.e
if(y instanceof Z.cX){y.a_(a)
y.aa(a)
y.aH(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.dO()
y=this.c
if(y!=null)y.aH(a)}},cg:{"^":"b;"}}],["","",,T,{"^":"",dn:{"^":"cT;"},cC:{"^":"dn;0b,0c,0d,0e,a",
a_:function(a){if(!this.c&&this.d>=6){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,this.b)}},
aH:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,null)}}},jC:{"^":"b;a,0b,0c,0d,0e",
eo:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
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
r=new T.cC(0)
r.b=s
r.c=!1
r.d=0
r.e=D.I()
this.aQ(r,s,z,34069,!1,!1)
this.aQ(r,s,w,34070,!1,!1)
this.aQ(r,s,y,34071,!1,!1)
this.aQ(r,s,v,34072,!1,!1)
this.aQ(r,s,x,34073,!1,!1)
this.aQ(r,s,u,34074,!1,!1)
return r},
i_:function(a,b){return this.eo(a,b,!1,"")},
en:function(a){return this.eo(a,".png",!1,"")},
aQ:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.ad
W.a3(z,"load",H.f(new T.jD(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
fV:function(a,b,c){var z,y,x,w
b=V.dP(b,2)
z=V.dP(a.width,2)
y=V.dP(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cZ(null,null)
x.width=z
x.height=y
w=H.d(C.k.eF(x,"2d"),"$ise3")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.mC(w.getImageData(0,0,x.width,x.height))}}},jD:{"^":"n:15;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.fV(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.W.is(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6)x.e.hL();++z.e}}}],["","",,X,{"^":"",cp:{"^":"b;",$isaK:1},hZ:{"^":"dm;0a,0b,0c,0d,0e,0f,0r,0x",
gw:function(){var z=this.x
if(z==null){z=D.I()
this.x=z}return z},
ax:function(a){var z=this.x
if(!(z==null))z.D(a)},
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
v=C.d.ai(w.a*y)
if(typeof x!=="number")return H.o(x)
u=C.d.ai(w.b*x)
t=C.d.ai(w.c*y)
a.c=t
w=C.d.ai(w.d*x)
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
z=new X.hZ()
y=new V.ak(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.eG(0,0,1,1)
z.r=y
return z}}},i0:{"^":"b;0a,0b",
gw:function(){var z=this.b
if(z==null){z=D.I()
this.b=z}return z},
a_:function(a){var z
a.cy.bP(V.bf())
z=V.bf()
a.db.bP(z)},
aH:function(a){a.cy.aG()
a.db.aG()},
$isaK:1,
$iscp:1},iO:{"^":"b;0a,0b,0c,0d,0e",
gw:function(){var z=this.e
if(z==null){z=D.I()
this.e=z}return z},
ax:[function(a){var z
H.d(a,"$isq")
z=this.e
if(!(z==null))z.D(a)},function(){return this.ax(null)},"iI","$1","$0","gfm",0,2,1],
a_:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=a.cy
w=this.b
v=this.c
u=this.d
t=u-v
s=1/Math.tan(w*0.5)
x.bP(V.aH(-s/(z/y),0,0,0,0,s,0,0,0,0,u/t,-u*v/t,0,0,1,0))
z=$.eC
if(z==null){z=V.ew(new V.S(0,0,0),new V.y(0,1,0),new V.y(0,0,-1))
$.eC=z
r=z}else r=z
z=this.a
if(z!=null){q=z.b5(0,a,this)
if(q!=null)r=q.k(0,r)}a.db.bP(r)},
aH:function(a){a.cy.aG()
a.db.aG()},
$isaK:1,
$iscp:1,
q:{
eB:function(a,b,c,d){var z,y,x,w
z=new X.iO()
z.b=1.0471975511965976
z.c=0.1
z.d=2000
if(null!=c){y=z.a
z.a=c
if(c!=null){x=c.gw()
x.toString
w=H.f(z.gfm(),{func:1,ret:-1,args:[D.q]})
C.a.h(x.a,w)}x=new D.H("mover",y,z.a,z,[U.ah])
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
z.ax(x)}return z}}},dm:{"^":"b;"}}],["","",,B,{"^":"",
nd:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
z=document
y=z.body
x=y.style
x.backgroundColor="#FFFFFF"
x.margin="40px"
x.padding="0"
w=z.createElement("div")
x=w.style
x.position="fixed"
x.width="100%"
x.height="100%"
x.left="0px"
x.top="0px"
x.zIndex="-1"
v="url('"+d+"')"
x.backgroundImage=v
x.backgroundRepeat="no-repeat"
y.appendChild(w)
u=z.createElement("div")
x=u.style
x.position="relative"
x.textAlign="center"
y.appendChild(u)
t=z.createElement("div")
x=t.style
x.textAlign="center"
x.marginLeft="auto"
x.marginRight="auto"
x.marginTop="40px"
x.marginBottom="40px"
x.padding="40px"
x.background="rgba(255,255,255,0.8)"
C.r.fY(x,(x&&C.r).da(x,"box-shadow"),"3px 3px 4px 2px rgba(0,0,0,0.5)","")
u.appendChild(t)
if(a.length!==0)z.title=a
s=z.createElement("div")
t.appendChild(s)
s.appendChild(b)
r=z.createElement("div")
x=r.style
x.display="block"
x.clear="both"
s.appendChild(r)
x=W.ad
W.a3(z,"scroll",H.f(new B.ne(w,y),{func:1,ret:-1,args:[x]}),!1,x)},
nf:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(b,"$isc",[P.k],"$asc")
z=document
y=z.createElement("div")
x=y.style
x.textAlign="center"
x.marginLeft="auto"
x.marginRight="auto"
w=z.createElement("table")
w.id="shellTable"
x=w.style
x.padding="0px"
x.marginLeft="auto"
x.marginRight="auto"
y.appendChild(w)
v=w.insertRow(-1)
u=W.cZ(null,null)
u.id="threeDart"
x=u.style
x.width="800px"
x.height="600px"
t=H.d(v.insertCell(-1),"$isbQ")
x=c.length>0
s=x?4:3
r=t.style
r.textAlign="center"
r.marginLeft="auto"
r.marginRight="auto"
t.colSpan=s
t.appendChild(u)
q=w.insertRow(-1)
r=H.d(q.insertCell(-1),"$isbQ").style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
for(p=0;p<1;++p){o=z.createElement("div")
o.id=b[p]
r=o.style
r.textAlign="left"
r=o.style
r.verticalAlign="top"
t=H.d(q.insertCell(-1),"$isbQ")
r=t.style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
t.appendChild(o)}if(x){n=z.createElement("div")
n.textContent=c
t=H.d(q.insertCell(-1),"$isbQ")
z=t.style
z.width="400px"
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
t.appendChild(n)}z=H.d(q.insertCell(-1),"$isbQ").style
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
B.nd(a,y,!1,"../resources/SnowTop.png")},
ng:function(a){P.jK(C.G,new B.nh(a))},
j1:{"^":"b;a,0b",
bu:function(a,b,c,d){var z,y,x,w,v,u,t
H.f(c,{func:1,ret:-1})
if(this.b==null)return
z=this.a
if(P.dt().gbQ().i(0,z)==null)if(d){c.$0()
this.eA(b)
y=!0}else y=!1
else if(P.dt().gbQ().i(0,z)===b){c.$0()
y=!0}else y=!1
x=document
w=x.createElement("label")
v=w.style
v.whiteSpace="nowrap"
J.dV(this.b).h(0,w)
u=W.i2("radio")
u.checked=y
u.name=z
z=W.ad
W.a3(u,"change",H.f(new B.j2(this,u,b,c),{func:1,ret:-1,args:[z]}),!1,z)
w.appendChild(u)
t=x.createElement("span")
t.textContent=b
w.appendChild(t)
J.dV(this.b).h(0,x.createElement("br"))},
aq:function(a,b,c){return this.bu(a,b,c,!1)},
eA:function(a){var z,y,x,w,v
z=P.dt()
y=P.k
x=P.ij(z.gbQ(),y,y)
x.l(0,this.a,a)
w=z.ew(0,x)
y=window.history
v=w.j(0)
y.toString
y.replaceState(new P.lx([],[]).cW(""),"",v)}},
j2:{"^":"n:15;a,b,c,d",
$1:function(a){if(this.b.checked){this.a.eA(this.c)
this.d.$0()}}},
ne:{"^":"n:15;a,b",
$1:function(a){var z,y
z=this.a.style
y=H.l(-0.05*C.h.ai(this.b.scrollTop))+"px"
z.top=y}},
nh:{"^":"n:50;a",
$1:function(a){H.d(a,"$isbp")
P.dQ(C.h.ez(this.a.ghT(),2)+" fps")}}}],["","",,T,{"^":"",
h4:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
B.nf("Test 017",H.h(["shapes"],[P.k]),"A test of the Material Lighting shader with solid color directional light, cube mapped textures, and a reflection map. The specular map is also used to define where reflections are painted.")
z=document
y=z.getElementById("threeDart")
if(y==null)H.r(P.v("Failed to find an element with the identifier, threeDart."))
x=E.jI(y,!0,!0,!0,!1)
w=E.eg(null,!0,null,"",null,null)
w.sa7(0,F.h9(8,null,8))
v=X.d2(!0,!0,!1,null,2000,null,0)
if(v.b){v.b=!1
u=new D.H("clearColor",!0,!1,v,[P.aj])
u.b=!0
v.ax(u)}t=x.f.i_("../resources/maskonaive",".jpg")
s=x.f.en("../resources/earthSpecular")
r=x.f.en("../resources/earthColor")
q=new O.ix()
u=O.d_(V.aG)
q.e=u
u.b6(q.gfj(),q.gfk())
u=new O.be(q,"emission")
u.c=C.c
u.f=new V.a1(0,0,0)
q.f=u
u=new O.be(q,"ambient")
u.c=C.c
u.f=new V.a1(0,0,0)
q.r=u
u=new O.be(q,"diffuse")
u.c=C.c
u.f=new V.a1(0,0,0)
q.x=u
u=new O.be(q,"invDiffuse")
u.c=C.c
u.f=new V.a1(0,0,0)
q.y=u
u=new O.iD(q,"specular")
u.c=C.c
u.f=new V.a1(0,0,0)
u.ch=100
q.z=u
u=new O.iA(q,"bump")
u.c=C.c
q.Q=u
q.ch=null
u=new O.be(q,"reflect")
u.c=C.c
u.f=new V.a1(0,0,0)
q.cx=u
u=new O.iC(q,"refract")
u.c=C.c
u.f=new V.a1(0,0,0)
u.ch=1
q.cy=u
u=new O.iz(q,"alpha")
u.c=C.c
u.f=1
q.db=u
u=new D.ib()
u.bp(D.a5)
u.e=H.h([],[D.cs])
u.f=H.h([],[D.iQ])
u.r=H.h([],[D.js])
u.x=H.h([],[D.jE])
u.y=H.h([],[D.jF])
u.z=H.h([],[D.jG])
u.Q=null
u.ch=null
u.d_(u.gfi(),u.gfF(),u.gfH())
q.dx=u
p=u.Q
if(p==null){p=D.I()
u.Q=p
u=p}else u=p
p={func:1,ret:-1,args:[D.q]}
o=H.f(q.gfT(),p)
C.a.h(u.a,o)
o=q.dx
u=o.ch
if(u==null){u=D.I()
o.ch=u}o=H.f(q.gaM(),p)
C.a.h(u.a,o)
q.dy=null
u=q.dx
n=U.e7(V.ew(new V.S(0,0,0),new V.y(0,1,0),new V.y(-1,-1,-1)))
m=new V.a1(1,1,1)
l=new D.cs()
l.c=new V.a1(1,1,1)
l.a=new V.y(0,0,1)
k=l.b
l.b=n
n=n.gw()
n.toString
j=H.f(l.geS(),p)
C.a.h(n.a,j)
n=new D.H("mover",k,l.b,l,[U.ah])
n.b=!0
l.aK(n)
if(!l.c.v(0,m)){k=l.c
l.c=m
n=new D.H("color",k,m,l,[V.a1])
n.b=!0
l.aK(n)}u.h(0,l)
u=q.r
u.sa8(0,new V.a1(0.5,0.5,0.5))
u=q.x
u.sa8(0,new V.a1(0.5,0.5,0.5))
q.r.san(r)
q.x.san(r)
q.z.san(s)
u=q.ch
if(u!==t){if(u!=null)C.a.G(u.e.a,o)
k=q.ch
q.ch=t
C.a.h(t.e.a,o)
u=new D.H("environment",k,q.ch,q,[T.cC])
u.b=!0
q.U(u)}q.cx.san(s)
u=q.cx
u.sa8(0,new V.a1(0.5,0.5,0.5))
u=q.z
if(u.c===C.c){u.c=C.i
u.bY()
u.ce(100)
o=u.a
o.a=null
o.U(null)}u.ce(10)
i=new U.ej()
i.bp(U.ah)
i.b6(i.gfh(),i.gfG())
i.e=null
i.f=V.bf()
i.r=0
u=x.r
o=new U.kb()
n=U.d0()
n.scX(0,!0)
n.scI(6.283185307179586)
n.scK(0)
n.sX(0,0)
n.scJ(100)
n.sT(0)
n.scu(0.5)
o.b=n
n=n.gw()
n.toString
l=H.f(o.gaL(),p)
C.a.h(n.a,l)
n=U.d0()
n.scX(0,!0)
n.scI(6.283185307179586)
n.scK(0)
n.sX(0,0)
n.scJ(100)
n.sT(0)
n.scu(0.5)
o.c=n
C.a.h(n.gw().a,l)
o.d=null
o.e=!1
o.f=!1
o.r=!1
o.x=2.5
o.y=2.5
o.z=2
o.Q=4
o.cx=!1
o.ch=!1
o.cy=0
o.db=0
o.dx=null
o.dy=0
o.fr=null
o.fx=null
h=new X.aI(!1,!1,!1)
k=o.d
o.d=h
n=[X.aI]
l=new D.H("modifiers",k,h,o,n)
l.b=!0
o.R(l)
l=o.f
if(l!==!1){o.f=!1
l=new D.H("invertX",l,!1,o,[P.aj])
l.b=!0
o.R(l)}l=o.r
if(l!==!1){o.r=!1
l=new D.H("invertY",l,!1,o,[P.aj])
l.b=!0
o.R(l)}o.b8(u)
i.h(0,o)
u=x.r
o=new U.ka()
l=U.d0()
l.scX(0,!0)
l.scI(6.283185307179586)
l.scK(0)
l.sX(0,0)
l.scJ(100)
l.sT(0)
l.scu(0.2)
o.b=l
l=l.gw()
l.toString
j=H.f(o.gaL(),p)
C.a.h(l.a,j)
o.c=null
o.d=!1
o.e=2.5
o.f=2
o.r=4
o.y=!1
o.x=!1
o.z=0
o.Q=null
o.ch=0
o.cx=null
o.cy=null
h=new X.aI(!0,!1,!1)
k=o.c
o.c=h
l=new D.H("modifiers",k,h,o,n)
l.b=!0
o.R(l)
o.b8(u)
i.h(0,o)
u=x.r
o=new U.kc()
o.c=0.01
o.d=0
o.e=0
h=new X.aI(!1,!1,!1)
o.b=h
n=new D.H("modifiers",null,h,o,n)
n.b=!0
o.R(n)
o.b8(u)
i.h(0,o)
i.h(0,U.e7(V.aH(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
g=X.eB(2000,1.0471975511965976,i,0.1)
f=new M.hD()
f.sb9(null)
f.sbh(0,null)
f.sbi(null)
u=E.eg(null,!0,null,"",null,null)
e=F.ce()
o=e.a
n=new V.y(-1,-1,1)
n=n.p(0,Math.sqrt(n.B(n)))
d=o.bv(new V.aL(1,2,4,6),new V.ak(1,0,0,1),new V.S(-1,-1,0),new V.M(0,1),n,null)
o=e.a
n=new V.y(1,-1,1)
n=n.p(0,Math.sqrt(n.B(n)))
c=o.bv(new V.aL(0,3,4,6),new V.ak(0,0,1,1),new V.S(1,-1,0),new V.M(1,1),n,null)
o=e.a
n=new V.y(1,1,1)
n=n.p(0,Math.sqrt(n.B(n)))
b=o.bv(new V.aL(0,2,5,6),new V.ak(0,1,0,1),new V.S(1,1,0),new V.M(1,0),n,null)
o=e.a
n=new V.y(-1,1,1)
n=n.p(0,Math.sqrt(n.B(n)))
a=o.bv(new V.aL(0,2,4,7),new V.ak(1,1,0,1),new V.S(-1,1,0),new V.M(0,0),n,null)
e.d.dE(H.h([d,c,b,a],[F.ab]))
e.af()
u.sa7(0,e)
f.d=u
f.e=null
u=new O.jm()
u.b=1.0471975511965976
k=u.c
u.c=t
o=t.e
n=H.f(u.gaM(),p)
C.a.h(o.a,n)
o=new D.H("boxTexture",k,u.c,u,[T.cC])
o.b=!0
u.U(o)
r=new V.a1(1,1,1)
if(!J.F(u.d,r)){k=u.d
u.d=r
o=new D.H("boxColor",k,r,u,[V.a1])
o.b=!0
u.U(o)}u.e=null
f.sbi(u)
f.sbh(0,v)
f.sb9(g)
a0=new M.hR()
u=O.d_(E.aT)
a0.d=u
u.b6(a0.gfn(),a0.gfo())
a0.e=null
a0.f=null
a0.r=null
a0.x=null
a0.sb9(null)
a0.sbh(0,null)
a0.sbi(null)
a0.sb9(g)
a0.sbi(q)
a0.sbh(0,v)
a0.d.h(0,w)
u=M.aM
o=H.h([f,a0],[u])
n=new M.hy()
n.bp(u)
n.e=!1
n.f=null
n.b6(n.gfI(),n.gfJ())
n.ci(0,o)
u=x.d
if(u!==n){if(u!=null){u=u.gw()
u.toString
o=H.f(x.gd5(),p)
C.a.G(u.a,o)}x.d=n
u=n.gw()
u.toString
p=H.f(x.gd5(),p)
C.a.h(u.a,p)
x.eQ()}u=new B.j1("shapes")
z=z.getElementById("shapes")
u.b=z
if(z==null)H.r("Failed to find "+u.j(0)+"._elemId for RadioGroup")
u.aq(0,"Cube",new T.n_(w))
u.aq(0,"Cuboid",new T.n0(w))
u.aq(0,"Cylinder",new T.n1(w))
u.aq(0,"Cone",new T.n2(w))
u.aq(0,"LatLonSphere",new T.n3(w))
u.aq(0,"IsoSphere",new T.n4(w))
u.bu(0,"Sphere",new T.n5(w),!0)
u.aq(0,"Toroid",new T.n6(w))
u.aq(0,"Knot",new T.n7(w))
B.ng(x)},
n_:{"^":"n:0;a",
$0:function(){this.a.sa7(0,F.dI(1,null,null,1))}},
n0:{"^":"n:0;a",
$0:function(){this.a.sa7(0,F.dI(8,null,null,8))}},
n1:{"^":"n:0;a",
$0:function(){this.a.sa7(0,F.fT(1,!0,!0,1,40,1))}},
n2:{"^":"n:0;a",
$0:function(){this.a.sa7(0,F.fT(1,!0,!1,1,40,0))}},
n3:{"^":"n:0;a",
$0:function(){this.a.sa7(0,F.mX(10,20))}},
n4:{"^":"n:0;a",
$0:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=F.ce()
y=Math.sqrt(5)/2+0.5
x=F.af(z,new V.y(-1,y,0))
w=F.af(z,new V.y(1,y,0))
v=-y
u=F.af(z,new V.y(-1,v,0))
t=F.af(z,new V.y(1,v,0))
s=F.af(z,new V.y(0,-1,v))
r=F.af(z,new V.y(0,1,v))
q=F.af(z,new V.y(0,-1,y))
p=F.af(z,new V.y(0,1,y))
o=F.af(z,new V.y(y,0,1))
n=F.af(z,new V.y(y,0,-1))
m=F.af(z,new V.y(v,0,1))
l=F.af(z,new V.y(v,0,-1))
F.Y(z,x,l,r,2)
F.Y(z,x,r,w,2)
F.Y(z,x,w,p,2)
F.Y(z,x,p,m,2)
F.Y(z,x,m,l,2)
F.Y(z,w,r,n,2)
F.Y(z,r,l,s,2)
F.Y(z,l,m,u,2)
F.Y(z,m,p,q,2)
F.Y(z,p,w,o,2)
F.Y(z,t,n,s,2)
F.Y(z,t,s,u,2)
F.Y(z,t,u,q,2)
F.Y(z,t,q,o,2)
F.Y(z,t,o,n,2)
F.Y(z,s,n,r,2)
F.Y(z,u,s,l,2)
F.Y(z,q,u,m,2)
F.Y(z,o,q,p,2)
F.Y(z,n,o,w,2)
z.ep(new F.dv(),new F.kp())
this.a.sa7(0,z)}},
n5:{"^":"n:0;a",
$0:function(){this.a.sa7(0,F.h9(6,null,6))}},
n6:{"^":"n:0;a",
$0:function(){this.a.sa7(0,F.nm(30,1,15,0.5))}},
n7:{"^":"n:0;a",
$0:function(){this.a.sa7(0,F.mV(120,1,2,12,0.3,3))}}},1]]
setupProgram(dart,0,0)
J.K=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eo.prototype
return J.en.prototype}if(typeof a=="string")return J.cb.prototype
if(a==null)return J.ep.prototype
if(typeof a=="boolean")return J.i6.prototype
if(a.constructor==Array)return J.bd.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cc.prototype
return a}if(a instanceof P.b)return a
return J.cL(a)}
J.av=function(a){if(typeof a=="string")return J.cb.prototype
if(a==null)return a
if(a.constructor==Array)return J.bd.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cc.prototype
return a}if(a instanceof P.b)return a
return J.cL(a)}
J.ck=function(a){if(a==null)return a
if(a.constructor==Array)return J.bd.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cc.prototype
return a}if(a instanceof P.b)return a
return J.cL(a)}
J.fX=function(a){if(typeof a=="number")return J.ca.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ci.prototype
return a}
J.fY=function(a){if(typeof a=="number")return J.ca.prototype
if(typeof a=="string")return J.cb.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ci.prototype
return a}
J.dL=function(a){if(typeof a=="string")return J.cb.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ci.prototype
return a}
J.b1=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.cc.prototype
return a}if(a instanceof P.b)return a
return J.cL(a)}
J.F=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.K(a).v(a,b)}
J.aE=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.fX(a).aj(a,b)}
J.hb=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.fX(a).K(a,b)}
J.dS=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.fY(a).k(a,b)}
J.dT=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.h1(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.av(a).i(a,b)}
J.cQ=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.h1(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.ck(a).l(a,b,c)}
J.hc=function(a,b){return J.dL(a).I(a,b)}
J.hd=function(a,b,c){return J.b1(a).fQ(a,b,c)}
J.he=function(a,b,c,d){return J.b1(a).dD(a,b,c,d)}
J.hf=function(a,b){return J.dL(a).Z(a,b)}
J.hg=function(a,b){return J.fY(a).aV(a,b)}
J.cR=function(a,b,c){return J.av(a).hF(a,b,c)}
J.cS=function(a,b){return J.ck(a).J(a,b)}
J.hh=function(a,b,c,d){return J.ck(a).aC(a,b,c,d)}
J.dU=function(a,b){return J.ck(a).M(a,b)}
J.dV=function(a){return J.b1(a).gcq(a)}
J.b7=function(a){return J.K(a).gS(a)}
J.bE=function(a){return J.ck(a).ga3(a)}
J.ao=function(a){return J.av(a).gm(a)}
J.hi=function(a,b){return J.b1(a).il(a,b)}
J.hj=function(a,b){return J.b1(a).sa4(a,b)}
J.ac=function(a){return J.K(a).j(a)}
I.ax=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.cY.prototype
C.r=W.hE.prototype
C.H=J.t.prototype
C.a=J.bd.prototype
C.I=J.en.prototype
C.d=J.eo.prototype
C.t=J.ep.prototype
C.h=J.ca.prototype
C.b=J.cb.prototype
C.P=J.cc.prototype
C.U=H.dg.prototype
C.V=W.iK.prototype
C.z=J.iP.prototype
C.W=P.di.prototype
C.q=J.ci.prototype
C.A=W.bV.prototype
C.B=W.kx.prototype
C.D=new P.ho(!1)
C.C=new P.hn(C.D)
C.E=new P.iN()
C.F=new P.kk()
C.j=new P.lj()
C.c=new A.cq(0,"ColorSourceType.None")
C.i=new A.cq(1,"ColorSourceType.Solid")
C.f=new A.cq(2,"ColorSourceType.Texture2D")
C.e=new A.cq(3,"ColorSourceType.TextureCube")
C.G=new P.aS(5e6)
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
C.w=H.h(I.ax([127,2047,65535,1114111]),[P.m])
C.m=H.h(I.ax([0,0,32776,33792,1,10240,0,0]),[P.m])
C.n=H.h(I.ax([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.o=H.h(I.ax([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.R=H.h(I.ax([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.p=H.h(I.ax([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.x=H.h(I.ax([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.S=H.h(I.ax([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.y=H.h(I.ax([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.Q=H.h(I.ax([]),[P.k])
C.T=new H.hC(0,{},C.Q,[P.k,P.k])
C.l=new P.kd(!1)
$.aF=0
$.bF=null
$.e_=null
$.dD=!1
$.h_=null
$.fP=null
$.h8=null
$.cK=null
$.cN=null
$.dM=null
$.bx=null
$.c0=null
$.c1=null
$.dE=!1
$.X=C.j
$.ed=null
$.ec=null
$.eb=null
$.ea=null
$.p=V.iE()
$.jo="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.jn="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.eC=null
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
I.$lazy(y,x,w)}})(["e9","$get$e9",function(){return H.fZ("_$dart_dartClosure")},"d6","$get$d6",function(){return H.fZ("_$dart_js")},"eR","$get$eR",function(){return H.aN(H.cD({
toString:function(){return"$receiver$"}}))},"eS","$get$eS",function(){return H.aN(H.cD({$method$:null,
toString:function(){return"$receiver$"}}))},"eT","$get$eT",function(){return H.aN(H.cD(null))},"eU","$get$eU",function(){return H.aN(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eY","$get$eY",function(){return H.aN(H.cD(void 0))},"eZ","$get$eZ",function(){return H.aN(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eW","$get$eW",function(){return H.aN(H.eX(null))},"eV","$get$eV",function(){return H.aN(function(){try{null.$method$}catch(z){return z.message}}())},"f0","$get$f0",function(){return H.aN(H.eX(void 0))},"f_","$get$f_",function(){return H.aN(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dx","$get$dx",function(){return P.ky()},"c2","$get$c2",function(){return[]},"fb","$get$fb",function(){return P.kh()},"fj","$get$fj",function(){return H.iI(H.bw(H.h([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"fF","$get$fF",function(){return P.j7("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fL","$get$fL",function(){return P.mi()},"e8","$get$e8",function(){return{}},"ff","$get$ff",function(){return Z.au(0)},"fd","$get$fd",function(){return Z.au(511)},"aC","$get$aC",function(){return Z.au(1)},"aX","$get$aX",function(){return Z.au(2)},"aW","$get$aW",function(){return Z.au(4)},"aY","$get$aY",function(){return Z.au(8)},"aZ","$get$aZ",function(){return Z.au(16)},"bT","$get$bT",function(){return Z.au(32)},"bU","$get$bU",function(){return Z.au(64)},"fe","$get$fe",function(){return Z.au(96)},"bu","$get$bu",function(){return Z.au(128)},"aV","$get$aV",function(){return Z.au(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.J},{func:1,ret:-1,opt:[D.q]},{func:1,ret:-1,args:[D.q]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ad]},{func:1,ret:-1,args:[W.aJ]},{func:1,ret:P.J,args:[F.ab,P.u,P.u]},{func:1,ret:P.J,args:[,,]},{func:1,ret:-1,args:[P.k,,]},{func:1,ret:-1,args:[P.m,[P.i,E.aT]]},{func:1,ret:P.J,args:[F.ar]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.J,args:[D.q]},{func:1,ret:-1,args:[W.br]},{func:1,ret:P.u},{func:1,ret:P.J,args:[W.ad]},{func:1,ret:P.J,args:[,]},{func:1,ret:P.u,args:[P.u,P.u]},{func:1,ret:P.k,args:[P.m]},{func:1,args:[,]},{func:1,ret:-1,args:[P.k,P.k]},{func:1,ret:-1,args:[W.bK]},{func:1,ret:-1,args:[P.m,[P.i,D.a5]]},{func:1,ret:-1,args:[P.m,[P.i,U.ah]]},{func:1,ret:-1,args:[P.m,[P.i,M.aM]]},{func:1,ret:P.u,args:[P.u]},{func:1,ret:V.S,args:[P.u]},{func:1,ret:-1,args:[P.m,[P.i,V.aG]]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,args:[,P.k]},{func:1,ret:P.J,args:[P.V]},{func:1,ret:P.J,args:[{func:1,ret:-1,args:[D.q]}]},{func:1,ret:[P.L,P.k,P.k],args:[[P.L,P.k,P.k],P.k]},{func:1,ret:-1,args:[P.k,P.m]},{func:1,ret:P.aj,args:[P.u,P.u]},{func:1,ret:-1,args:[P.k],opt:[,]},{func:1,ret:P.aj,args:[[P.i,D.a5]]},{func:1,ret:-1,args:[P.b],opt:[P.aA]},{func:1,ret:P.J,args:[P.k]},{func:1,ret:P.k,args:[P.k]},{func:1,ret:P.J,args:[,],opt:[,]},{func:1,ret:P.J,args:[P.k,,]},{func:1,ret:P.T,args:[P.m]},{func:1,ret:-1,args:[W.bV]},{func:1,ret:P.T,args:[,,]},{func:1,ret:P.J,args:[{func:1,ret:-1}]},{func:1,args:[P.k]},{func:1,ret:P.aj,args:[W.P]},{func:1,ret:W.a4,args:[W.P]},{func:1,ret:P.J,args:[P.bp]},{func:1,ret:P.m,args:[,,]},{func:1,ret:P.m,args:[[P.c,P.m],P.m]},{func:1,ret:[P.b_,,],args:[,]}]
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
if(x==y)H.nl(d||a)
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
Isolate.ax=a.ax
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
if(typeof dartMainRunner==="function")dartMainRunner(T.h4,[])
else T.h4([])})})()
//# sourceMappingURL=test.dart.js.map
