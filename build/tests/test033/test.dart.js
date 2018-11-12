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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.df"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.df"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.df(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dg=function(){}
var dart=[["","",,H,{"^":"",lx:{"^":"a;a"}}],["","",,J,{"^":"",
J:function(a){return void 0},
dm:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cq:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dj==null){H.kR()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.f(P.eF("Return interceptor for "+H.i(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cJ()]
if(v!=null)return v
v=H.kW(a)
if(v!=null)return v
if(typeof a=="function")return C.G
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cJ(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
n:{"^":"a;",
q:function(a,b){return a===b},
gV:function(a){return H.bq(a)},
i:["dX",function(a){return"Instance of '"+H.aX(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h4:{"^":"n;",
i:function(a){return String(a)},
gV:function(a){return a?519018:218159},
$isa4:1},
dR:{"^":"n;",
q:function(a,b){return null==b},
i:function(a){return"null"},
gV:function(a){return 0},
$isI:1},
cK:{"^":"n;",
gV:function(a){return 0},
i:["dY",function(a){return String(a)}]},
hG:{"^":"cK;"},
d6:{"^":"cK;"},
bP:{"^":"cK;",
i:function(a){var z=a[$.$get$dD()]
if(z==null)return this.dY(a)
return"JavaScript function for "+H.i(J.a5(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscE:1},
aU:{"^":"n;$ti",
h:function(a,b){H.A(b,H.y(a,0))
if(!!a.fixed$length)H.q(P.ae("add"))
a.push(b)},
L:function(a,b){var z
if(!!a.fixed$length)H.q(P.ae("remove"))
for(z=0;z<a.length;++z)if(J.O(a[z],b)){a.splice(z,1)
return!0}return!1},
aO:function(a,b){var z,y
H.v(b,"$isc",[H.y(a,0)],"$asc")
if(!!a.fixed$length)H.q(P.ae("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.x)(b),++y)a.push(b[y])},
K:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.f(P.bb(a))}},
w:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.S(z,y,H.i(a[y]))
return z.join(b)},
h3:function(a){return this.w(a,"")},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
bv:function(a,b,c){var z=a.length
if(b>z)throw H.f(P.aj(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.f(P.aj(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.y(a,0)])
return H.b(a.slice(b,c),[H.y(a,0)])},
gcf:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.f(H.h2())},
aF:function(a,b){var z
for(z=0;z<a.length;++z)if(J.O(a[z],b))return!0
return!1},
i:function(a){return P.cG(a,"[","]")},
gX:function(a){return new J.af(a,a.length,0,[H.y(a,0)])},
gV:function(a){return H.bq(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.q(P.ae("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(P.bZ(b,"newLength",null))
if(b<0)throw H.f(P.aj(b,0,null,"newLength",null))
a.length=b},
S:function(a,b,c){H.Y(b)
H.A(c,H.y(a,0))
if(!!a.immutable$list)H.q(P.ae("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(H.aO(a,b))
if(b>=a.length||b<0)throw H.f(H.aO(a,b))
a[b]=c},
$isc:1,
$ise:1,
p:{
h3:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.bZ(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.aj(a,0,4294967295,"length",null))
return J.dO(new Array(a),b)},
dO:function(a,b){return J.bj(H.b(a,[b]))},
bj:function(a){H.bJ(a)
a.fixed$length=Array
return a}}},
lw:{"^":"aU;$ti"},
af:{"^":"a;a,b,c,0d,$ti",
gO:function(a){return this.d},
B:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.f(H.x(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c9:{"^":"n;",
hA:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.f(P.ae(""+a+".toInt()"))},
cc:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.f(P.ae(""+a+".floor()"))},
ad:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.ae(""+a+".round()"))},
dP:function(a,b){var z,y
if(b>20)throw H.f(P.aj(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gV:function(a){return a&0x1FFFFFFF},
dU:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
e_:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cY(a,b)},
Z:function(a,b){return(a|0)===a?a/b|0:this.cY(a,b)},
cY:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.f(P.ae("Result of truncating division is "+H.i(z)+": "+H.i(a)+" ~/ "+b))},
b7:function(a,b){var z
if(a>0)z=this.fd(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fd:function(a,b){return b>31?0:a>>>b},
a7:function(a,b){if(typeof b!=="number")throw H.f(H.aN(b))
return a<b},
$isw:1,
$isW:1},
dQ:{"^":"c9;",$isC:1},
dP:{"^":"c9;"},
cI:{"^":"n;",
c1:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(H.aO(a,b))
if(b<0)throw H.f(H.aO(a,b))
if(b>=a.length)H.q(H.aO(a,b))
return a.charCodeAt(b)},
b4:function(a,b){if(b>=a.length)throw H.f(H.aO(a,b))
return a.charCodeAt(b)},
D:function(a,b){H.S(b)
if(typeof b!=="string")throw H.f(P.bZ(b,null,null))
return a+b},
bw:function(a,b,c){H.Y(c)
if(c==null)c=a.length
if(b<0)throw H.f(P.cd(b,null,null))
if(b>c)throw H.f(P.cd(b,null,null))
if(c>a.length)throw H.f(P.cd(c,null,null))
return a.substring(b,c)},
cA:function(a,b){return this.bw(a,b,null)},
l:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.u)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hg:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.l(c,z)+a},
a6:function(a,b){return this.hg(a,b," ")},
fO:function(a,b,c){if(c>a.length)throw H.f(P.aj(c,0,a.length,null,null))
return H.fk(a,b,c)},
i:function(a){return a},
gV:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
$ise5:1,
$ism:1}}],["","",,H,{"^":"",
h2:function(){return new P.ih("No element")},
Z:{"^":"iP;a",
gk:function(a){return this.a.length},
j:function(a,b){return C.h.c1(this.a,b)},
$aseG:function(){return[P.C]},
$asr:function(){return[P.C]},
$asc:function(){return[P.C]},
$ase:function(){return[P.C]}},
fP:{"^":"c;"},
dW:{"^":"a;a,b,c,0d,$ti",
gO:function(a){return this.d},
B:function(){var z,y,x,w
z=this.a
y=J.bX(z)
x=y.gk(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.f(P.bb(z))
w=this.c
if(typeof x!=="number")return H.o(x)
if(w>=x){this.d=null
return!1}this.d=y.C(z,w);++this.c
return!0}},
hl:{"^":"c;a,b,$ti",
gX:function(a){return new H.hm(J.bK(this.a),this.b,this.$ti)},
gk:function(a){return J.b9(this.a)},
C:function(a,b){return this.b.$1(J.dq(this.a,b))},
$asc:function(a,b){return[b]}},
hm:{"^":"cH;0a,b,c,$ti",
B:function(){var z=this.b
if(z.B()){this.a=this.c.$1(z.gO(z))
return!0}this.a=null
return!1},
gO:function(a){return this.a},
$ascH:function(a,b){return[b]}},
j4:{"^":"c;a,b,$ti",
gX:function(a){return new H.j5(J.bK(this.a),this.b,this.$ti)}},
j5:{"^":"cH;a,b,$ti",
B:function(){var z,y
for(z=this.a,y=this.b;z.B();)if(y.$1(z.gO(z)))return!0
return!1},
gO:function(a){var z=this.a
return z.gO(z)}},
c6:{"^":"a;$ti"},
eG:{"^":"a;$ti"},
iP:{"^":"ca+eG;"}}],["","",,H,{"^":"",
kM:function(a){return init.types[H.Y(a)]},
kU:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.J(a).$isD},
i:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a5(a)
if(typeof z!=="string")throw H.f(H.aN(a))
return z},
bq:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aX:function(a){var z,y,x,w,v,u,t,s,r
z=J.J(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.x||!!J.J(a).$isd6){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.h.b4(w,0)===36)w=C.h.cA(w,1)
r=H.dk(H.bJ(H.aP(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
e7:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
hQ:function(a){var z,y,x,w
z=H.b([],[P.C])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.x)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.f(H.aN(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.f.b7(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.f(H.aN(w))}return H.e7(z)},
e8:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.f(H.aN(x))
if(x<0)throw H.f(H.aN(x))
if(x>65535)return H.hQ(a)}return H.e7(a)},
hP:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.b7(z,10))>>>0,56320|z&1023)}throw H.f(P.aj(a,0,1114111,null,null))},
a8:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hO:function(a){return a.b?H.a8(a).getUTCFullYear()+0:H.a8(a).getFullYear()+0},
hM:function(a){return a.b?H.a8(a).getUTCMonth()+1:H.a8(a).getMonth()+1},
hI:function(a){return a.b?H.a8(a).getUTCDate()+0:H.a8(a).getDate()+0},
hJ:function(a){return a.b?H.a8(a).getUTCHours()+0:H.a8(a).getHours()+0},
hL:function(a){return a.b?H.a8(a).getUTCMinutes()+0:H.a8(a).getMinutes()+0},
hN:function(a){return a.b?H.a8(a).getUTCSeconds()+0:H.a8(a).getSeconds()+0},
hK:function(a){return a.b?H.a8(a).getUTCMilliseconds()+0:H.a8(a).getMilliseconds()+0},
o:function(a){throw H.f(H.aN(a))},
h:function(a,b){if(a==null)J.b9(a)
throw H.f(H.aO(a,b))},
aO:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.az(!0,b,"index",null)
z=H.Y(J.b9(a))
if(!(b<0)){if(typeof z!=="number")return H.o(z)
y=b>=z}else y=!0
if(y)return P.M(b,a,"index",null,z)
return P.cd(b,"index",null)},
kI:function(a,b,c){if(a>c)return new P.cc(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cc(a,c,!0,b,"end","Invalid value")
return new P.az(!0,b,"end",null)},
aN:function(a){return new P.az(!0,a,null,null)},
kD:function(a){if(typeof a!=="number")throw H.f(H.aN(a))
return a},
f:function(a){var z
if(a==null)a=new P.e4()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fm})
z.name=""}else z.toString=H.fm
return z},
fm:function(){return J.a5(this.dartException)},
q:function(a){throw H.f(a)},
x:function(a){throw H.f(P.bb(a))},
aR:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.l6(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.b7(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cL(H.i(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.e3(H.i(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eo()
u=$.$get$ep()
t=$.$get$eq()
s=$.$get$er()
r=$.$get$ev()
q=$.$get$ew()
p=$.$get$et()
$.$get$es()
o=$.$get$ey()
n=$.$get$ex()
m=v.a5(y)
if(m!=null)return z.$1(H.cL(H.S(y),m))
else{m=u.a5(y)
if(m!=null){m.method="call"
return z.$1(H.cL(H.S(y),m))}else{m=t.a5(y)
if(m==null){m=s.a5(y)
if(m==null){m=r.a5(y)
if(m==null){m=q.a5(y)
if(m==null){m=p.a5(y)
if(m==null){m=s.a5(y)
if(m==null){m=o.a5(y)
if(m==null){m=n.a5(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.e3(H.S(y),m))}}return z.$1(new H.iO(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.ec()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.az(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.ec()
return a},
b7:function(a){var z
if(a==null)return new H.eX(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eX(a)},
kK:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.S(0,a[y],a[x])}return b},
kT:function(a,b,c,d,e,f){H.j(a,"$iscE")
switch(H.Y(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.p("Unsupported number of arguments for wrapped closure"))},
b5:function(a,b){var z
H.Y(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kT)
a.$identity=z
return z},
fC:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.J(d).$ise){z.$reflectionInfo=d
x=H.hT(z).r}else x=d
w=e?Object.create(new H.ii().constructor.prototype):Object.create(new H.cv(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.as
if(typeof u!=="number")return u.D()
$.as=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dz(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.kM,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.du:H.cw
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.f("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dz(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fz:function(a,b,c,d){var z=H.cw
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dz:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fB(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fz(y,!w,z,b)
if(y===0){w=$.as
if(typeof w!=="number")return w.D()
$.as=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.ba
if(v==null){v=H.c_("self")
$.ba=v}return new Function(w+H.i(v)+";return "+u+"."+H.i(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.as
if(typeof w!=="number")return w.D()
$.as=w+1
t+=w
w="return function("+t+"){return this."
v=$.ba
if(v==null){v=H.c_("self")
$.ba=v}return new Function(w+H.i(v)+"."+H.i(z)+"("+t+");}")()},
fA:function(a,b,c,d){var z,y
z=H.cw
y=H.du
switch(b?-1:a){case 0:throw H.f(H.i1("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fB:function(a,b){var z,y,x,w,v,u,t,s
z=$.ba
if(z==null){z=H.c_("self")
$.ba=z}y=$.dt
if(y==null){y=H.c_("receiver")
$.dt=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fA(w,!u,x,b)
if(w===1){z="return function(){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+");"
y=$.as
if(typeof y!=="number")return y.D()
$.as=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+", "+s+");"
y=$.as
if(typeof y!=="number")return y.D()
$.as=y+1
return new Function(z+y+"}")()},
df:function(a,b,c,d,e,f,g){var z,y
z=J.bj(H.bJ(b))
H.Y(c)
y=!!J.J(d).$ise?J.bj(d):d
return H.fC(a,z,c,y,!!e,f,g)},
S:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.ax(a,"String"))},
kZ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.ax(a,"num"))},
fa:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.ax(a,"bool"))},
Y:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.ax(a,"int"))},
fi:function(a,b){throw H.f(H.ax(a,H.S(b).substring(3)))},
l0:function(a,b){var z=J.bX(b)
throw H.f(H.fy(a,z.bw(b,3,z.gk(b))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.J(a)[b])return a
H.fi(a,b)},
d:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.J(a)[b]
else z=!0
if(z)return a
H.l0(a,b)},
bJ:function(a){if(a==null)return a
if(!!J.J(a).$ise)return a
throw H.f(H.ax(a,"List"))},
kV:function(a,b){if(a==null)return a
if(!!J.J(a).$ise)return a
if(J.J(a)[b])return a
H.fi(a,b)},
fb:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.Y(z)]
else return a.$S()}return},
bW:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fb(J.J(a))
if(z==null)return!1
y=H.fe(z,null,b,null)
return y},
k:function(a,b){var z,y
if(a==null)return a
if($.db)return a
$.db=!0
try{if(H.bW(a,b))return a
z=H.bY(b)
y=H.ax(a,z)
throw H.f(y)}finally{$.db=!1}},
dh:function(a,b){if(a!=null&&!H.de(a,b))H.q(H.ax(a,H.bY(b)))
return a},
f5:function(a){var z
if(a instanceof H.t){z=H.fb(J.J(a))
if(z!=null)return H.bY(z)
return"Closure"}return H.aX(a)},
l5:function(a){throw H.f(new P.fI(H.S(a)))},
fc:function(a){return init.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
aP:function(a){if(a==null)return
return a.$ti},
mk:function(a,b,c){return H.b8(a["$as"+H.i(c)],H.aP(b))},
bI:function(a,b,c,d){var z
H.S(c)
H.Y(d)
z=H.b8(a["$as"+H.i(c)],H.aP(b))
return z==null?null:z[d]},
am:function(a,b,c){var z
H.S(b)
H.Y(c)
z=H.b8(a["$as"+H.i(b)],H.aP(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.Y(b)
z=H.aP(a)
return z==null?null:z[b]},
bY:function(a){var z=H.aQ(a,null)
return z},
aQ:function(a,b){var z,y
H.v(b,"$ise",[P.m],"$ase")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dk(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Y(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.h(b,y)
return H.i(b[y])}if('func' in a)return H.kt(a,b)
if('futureOr' in a)return"FutureOr<"+H.aQ("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kt:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.m]
H.v(b,"$ise",z,"$ase")
if("bounds" in a){y=a.bounds
if(b==null){b=H.b([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.h(b,r)
t=C.h.D(t,b[r])
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
for(z=H.kJ(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.S(z[l])
n=n+m+H.aQ(i[h],b)+(" "+H.i(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dk:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$ise",[P.m],"$ase")
if(a==null)return""
z=new P.bT("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aQ(u,c)}v="<"+z.i(0)+">"
return v},
b8:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bH:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aP(a)
y=J.J(a)
if(y[b]==null)return!1
return H.f8(H.b8(y[d],z),null,c,null)},
v:function(a,b,c,d){var z,y
H.S(b)
H.bJ(c)
H.S(d)
if(a==null)return a
z=H.bH(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dk(c,0,null)
throw H.f(H.ax(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
f8:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.an(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.an(a[y],b,c[y],d))return!1
return!0},
mi:function(a,b,c){return a.apply(b,H.b8(J.J(b)["$as"+H.i(c)],H.aP(b)))},
ff:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="I"||a===-1||a===-2||H.ff(z)}return!1},
de:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="I"||b===-1||b===-2||H.ff(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.de(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bW(a,b)}y=J.J(a).constructor
x=H.aP(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.an(y,null,b,null)
return z},
A:function(a,b){if(a!=null&&!H.de(a,b))throw H.f(H.ax(a,H.bY(b)))
return a},
an:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.an(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="I")return!0
if('func' in c)return H.fe(a,b,c,d)
if('func' in a)return c.builtin$cls==="cE"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.an("type" in a?a.type:null,b,x,d)
else if(H.an(a,b,x,d))return!0
else{if(!('$is'+"bg" in y.prototype))return!1
w=y.prototype["$as"+"bg"]
v=H.b8(w,z?a.slice(1):null)
return H.an(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bY(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.f8(H.b8(r,z),b,u,d)},
fe:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.an(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.an(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.an(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.an(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kY(m,b,l,d)},
kY:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.an(c[w],d,a[w],b))return!1}return!0},
mj:function(a,b,c){Object.defineProperty(a,H.S(b),{value:c,enumerable:false,writable:true,configurable:true})},
kW:function(a){var z,y,x,w,v,u
z=H.S($.fd.$1(a))
y=$.co[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cr[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.S($.f7.$2(a,z))
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
return u.i}if(v==="+")return H.fh(a,x)
if(v==="*")throw H.f(P.eF(z))
if(init.leafTags[z]===true){u=H.cs(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fh(a,x)},
fh:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dm(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cs:function(a){return J.dm(a,!1,null,!!a.$isD)},
kX:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cs(z)
else return J.dm(z,c,null,null)},
kR:function(){if(!0===$.dj)return
$.dj=!0
H.kS()},
kS:function(){var z,y,x,w,v,u,t,s
$.co=Object.create(null)
$.cr=Object.create(null)
H.kN()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fj.$1(v)
if(u!=null){t=H.kX(v,z[v],u)
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
z=H.b4(C.A,H.b4(C.F,H.b4(C.n,H.b4(C.n,H.b4(C.E,H.b4(C.B,H.b4(C.C(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fd=new H.kO(v)
$.f7=new H.kP(u)
$.fj=new H.kQ(t)},
b4:function(a,b){return a(b)||b},
fk:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fl:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hS:{"^":"a;a,b,c,d,e,f,r,0x",p:{
hT:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bj(z)
y=z[0]
x=z[1]
return new H.hS(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iC:{"^":"a;a,b,c,d,e,f",
a5:function(a){var z,y,x
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
if(z==null)z=H.b([],[P.m])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iC(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
ch:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eu:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hD:{"^":"X;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.i(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
e3:function(a,b){return new H.hD(a,b==null?null:b.method)}}},
h7:{"^":"X;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.i(this.a)+")"},
p:{
cL:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.h7(a,y,z?null:b.receiver)}}},
iO:{"^":"X;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
l6:{"^":"t:15;a",
$1:function(a){if(!!J.J(a).$isX)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eX:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaq:1},
t:{"^":"a;",
i:function(a){return"Closure '"+H.aX(this).trim()+"'"},
gdR:function(){return this},
$iscE:1,
gdR:function(){return this}},
eg:{"^":"t;"},
ii:{"^":"eg;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cv:{"^":"eg;a,b,c,d",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cv))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gV:function(a){var z,y
z=this.c
if(z==null)y=H.bq(this.a)
else y=typeof z!=="object"?J.aS(z):H.bq(z)
return(y^H.bq(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.aX(z)+"'")},
p:{
cw:function(a){return a.a},
du:function(a){return a.c},
c_:function(a){var z,y,x,w,v
z=new H.cv("self","target","receiver","name")
y=J.bj(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iD:{"^":"X;a",
i:function(a){return this.a},
p:{
ax:function(a,b){return new H.iD("TypeError: "+H.i(P.c5(a))+": type '"+H.f5(a)+"' is not a subtype of type '"+b+"'")}}},
fx:{"^":"X;a",
i:function(a){return this.a},
p:{
fy:function(a,b){return new H.fx("CastError: "+H.i(P.c5(a))+": type '"+H.f5(a)+"' is not a subtype of type '"+b+"'")}}},
i0:{"^":"X;a",
i:function(a){return"RuntimeError: "+H.i(this.a)},
p:{
i1:function(a){return new H.i0(a)}}},
aV:{"^":"hj;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gar:function(a){return new H.dV(this,[H.y(this,0)])},
d7:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cN(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cN(y,b)}else return this.h1(b)},
h1:function(a){var z=this.d
if(z==null)return!1
return this.cd(this.bF(z,J.aS(a)&0x3ffffff),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.b5(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.b5(w,b)
x=y==null?null:y.b
return x}else return this.h2(b)},
h2:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bF(z,J.aS(a)&0x3ffffff)
x=this.cd(y,a)
if(x<0)return
return y[x].b},
S:function(a,b,c){var z,y,x,w,v,u
H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bM()
this.b=z}this.cG(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bM()
this.c=y}this.cG(y,b,c)}else{x=this.d
if(x==null){x=this.bM()
this.d=x}w=J.aS(b)&0x3ffffff
v=this.bF(x,w)
if(v==null)this.bS(x,w,[this.bN(b,c)])
else{u=this.cd(v,b)
if(u>=0)v[u].b=c
else v.push(this.bN(b,c))}}},
K:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.f(P.bb(this))
z=z.c}},
cG:function(a,b,c){var z
H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
z=this.b5(a,b)
if(z==null)this.bS(a,b,this.bN(b,c))
else z.b=c},
ev:function(){this.r=this.r+1&67108863},
bN:function(a,b){var z,y
z=new H.hb(H.A(a,H.y(this,0)),H.A(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.ev()
return z},
cd:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.O(a[y].a,b))return y
return-1},
i:function(a){return P.dY(this)},
b5:function(a,b){return a[b]},
bF:function(a,b){return a[b]},
bS:function(a,b,c){a[b]=c},
eo:function(a,b){delete a[b]},
cN:function(a,b){return this.b5(a,b)!=null},
bM:function(){var z=Object.create(null)
this.bS(z,"<non-identifier-key>",z)
this.eo(z,"<non-identifier-key>")
return z},
$isdU:1},
hb:{"^":"a;a,b,0c,0d"},
dV:{"^":"fP;a,$ti",
gk:function(a){return this.a.a},
gX:function(a){var z,y
z=this.a
y=new H.hc(z,z.r,this.$ti)
y.c=z.e
return y}},
hc:{"^":"a;a,b,0c,0d,$ti",
gO:function(a){return this.d},
B:function(){var z=this.a
if(this.b!==z.r)throw H.f(P.bb(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kO:{"^":"t:15;a",
$1:function(a){return this.a(a)}},
kP:{"^":"t:26;a",
$2:function(a,b){return this.a(a,b)}},
kQ:{"^":"t:27;a",
$1:function(a){return this.a(H.S(a))}},
h5:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$ise5:1,
p:{
h6:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.f(new P.fY("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
kJ:function(a){return J.dO(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
l_:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bD:function(a){return a},
aM:function(a,b,c){H.bJ(b)
if(a>>>0!==a||a>=c)throw H.f(H.aO(b,a))},
ks:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.f(H.kI(a,b,c))
return b},
hA:{"^":"n;",$ism3:1,"%":"DataView;ArrayBufferView;cS|eR|eS|hz|eT|eU|aL"},
cS:{"^":"hA;",
gk:function(a){return a.length},
$isD:1,
$asD:I.dg},
hz:{"^":"eS;",
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
$asc6:function(){return[P.w]},
$asr:function(){return[P.w]},
$isc:1,
$asc:function(){return[P.w]},
$ise:1,
$ase:function(){return[P.w]},
"%":"Float32Array|Float64Array"},
aL:{"^":"eU;",
$asc6:function(){return[P.C]},
$asr:function(){return[P.C]},
$isc:1,
$asc:function(){return[P.C]},
$ise:1,
$ase:function(){return[P.C]}},
lF:{"^":"aL;",
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lG:{"^":"aL;",
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lH:{"^":"aL;",
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lI:{"^":"aL;",
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lJ:{"^":"aL;",
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lK:{"^":"aL;",
gk:function(a){return a.length},
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hB:{"^":"aL;",
gk:function(a){return a.length},
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
bv:function(a,b,c){return new Uint8Array(a.subarray(b,H.ks(b,c,a.length)))},
"%":";Uint8Array"},
eR:{"^":"cS+r;"},
eS:{"^":"eR+c6;"},
eT:{"^":"cS+r;"},
eU:{"^":"eT+c6;"}}],["","",,P,{"^":"",
j7:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kA()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b5(new P.j9(z),1)).observe(y,{childList:true})
return new P.j8(z,y,x)}else if(self.setImmediate!=null)return P.kB()
return P.kC()},
m7:[function(a){self.scheduleImmediate(H.b5(new P.ja(H.k(a,{func:1,ret:-1})),0))},"$1","kA",4,0,11],
m8:[function(a){self.setImmediate(H.b5(new P.jb(H.k(a,{func:1,ret:-1})),0))},"$1","kB",4,0,11],
m9:[function(a){P.d2(C.l,H.k(a,{func:1,ret:-1}))},"$1","kC",4,0,11],
d2:function(a,b){var z
H.k(b,{func:1,ret:-1})
z=C.f.Z(a.a,1000)
return P.k6(z<0?0:z,b)},
ej:function(a,b){var z
H.k(b,{func:1,ret:-1,args:[P.aZ]})
z=C.f.Z(a.a,1000)
return P.k7(z<0?0:z,b)},
kw:function(a,b){if(H.bW(a,{func:1,args:[P.a,P.aq]}))return b.hp(a,null,P.a,P.aq)
if(H.bW(a,{func:1,args:[P.a]}))return H.k(a,{func:1,ret:null,args:[P.a]})
throw H.f(P.bZ(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kv:function(){var z,y
for(;z=$.b3,z!=null;){$.bF=null
y=z.b
$.b3=y
if(y==null)$.bE=null
z.a.$0()}},
mh:[function(){$.dc=!0
try{P.kv()}finally{$.bF=null
$.dc=!1
if($.b3!=null)$.$get$d8().$1(P.f9())}},"$0","f9",0,0,3],
f4:function(a){var z=new P.eM(H.k(a,{func:1,ret:-1}))
if($.b3==null){$.bE=z
$.b3=z
if(!$.dc)$.$get$d8().$1(P.f9())}else{$.bE.b=z
$.bE=z}},
kz:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
z=$.b3
if(z==null){P.f4(a)
$.bF=$.bE
return}y=new P.eM(a)
x=$.bF
if(x==null){y.b=z
$.bF=y
$.b3=y}else{y.b=x.b
x.b=y
$.bF=y
if(y.b==null)$.bE=y}},
l1:function(a){var z,y
z={func:1,ret:-1}
H.k(a,z)
y=$.N
if(C.j===y){P.cn(null,null,C.j,a)
return}y.toString
P.cn(null,null,y,H.k(y.bX(a),z))},
ei:function(a,b){var z,y
z={func:1,ret:-1}
H.k(b,z)
y=$.N
if(y===C.j){y.toString
return P.d2(a,b)}return P.d2(a,H.k(y.bX(b),z))},
iz:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aZ]}
H.k(b,z)
y=$.N
if(y===C.j){y.toString
return P.ej(a,b)}x=y.d3(b,P.aZ)
$.N.toString
return P.ej(a,H.k(x,z))},
cm:function(a,b,c,d,e){var z={}
z.a=d
P.kz(new P.kx(z,e))},
f2:function(a,b,c,d,e){var z,y
H.k(d,{func:1,ret:e})
y=$.N
if(y===c)return d.$0()
$.N=c
z=y
try{y=d.$0()
return y}finally{$.N=z}},
f3:function(a,b,c,d,e,f,g){var z,y
H.k(d,{func:1,ret:f,args:[g]})
H.A(e,g)
y=$.N
if(y===c)return d.$1(e)
$.N=c
z=y
try{y=d.$1(e)
return y}finally{$.N=z}},
ky:function(a,b,c,d,e,f,g,h,i){var z,y
H.k(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
y=$.N
if(y===c)return d.$2(e,f)
$.N=c
z=y
try{y=d.$2(e,f)
return y}finally{$.N=z}},
cn:function(a,b,c,d){var z
H.k(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.bX(d):c.fM(d,-1)
P.f4(d)},
j9:{"^":"t:14;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
j8:{"^":"t:23;a,b,c",
$1:function(a){var z,y
this.a.a=H.k(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
ja:{"^":"t:2;a",
$0:function(){this.a.$0()}},
jb:{"^":"t:2;a",
$0:function(){this.a.$0()}},
f_:{"^":"a;a,0b,c",
ea:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b5(new P.k9(this,b),0),a)
else throw H.f(P.ae("`setTimeout()` not found."))},
eb:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b5(new P.k8(this,a,Date.now(),b),0),a)
else throw H.f(P.ae("Periodic timer."))},
$isaZ:1,
p:{
k6:function(a,b){var z=new P.f_(!0,0)
z.ea(a,b)
return z},
k7:function(a,b){var z=new P.f_(!1,0)
z.eb(a,b)
return z}}},
k9:{"^":"t:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
k8:{"^":"t:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.e_(w,x)}z.c=y
this.d.$1(z)}},
b2:{"^":"a;0a,b,c,d,e,$ti",
h8:function(a){if(this.c!==6)return!0
return this.b.b.co(H.k(this.d,{func:1,ret:P.a4,args:[P.a]}),a.a,P.a4,P.a)},
h_:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.bW(z,{func:1,args:[P.a,P.aq]}))return H.dh(w.hu(z,a.a,a.b,null,y,P.aq),x)
else return H.dh(w.co(H.k(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aH:{"^":"a;cX:a<,b,0f5:c<,$ti",
dO:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.N
if(y!==C.j){y.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kw(b,y)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aH(0,$.N,[c])
w=b==null?1:3
this.cH(new P.b2(x,w,a,b,[z,c]))
return x},
hz:function(a,b){return this.dO(a,null,b)},
cH:function(a){var z,y
z=this.a
if(z<=1){a.a=H.j(this.c,"$isb2")
this.c=a}else{if(z===2){y=H.j(this.c,"$isaH")
z=y.a
if(z<4){y.cH(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cn(null,null,z,H.k(new P.jp(this,a),{func:1,ret:-1}))}},
cT:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.j(this.c,"$isb2")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.j(this.c,"$isaH")
y=u.a
if(y<4){u.cT(a)
return}this.a=y
this.c=u.c}z.a=this.b6(a)
y=this.b
y.toString
P.cn(null,null,y,H.k(new P.ju(z,this),{func:1,ret:-1}))}},
bQ:function(){var z=H.j(this.c,"$isb2")
this.c=null
return this.b6(z)},
b6:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cK:function(a){var z,y,x,w
z=H.y(this,0)
H.dh(a,{futureOr:1,type:z})
y=this.$ti
x=H.bH(a,"$isbg",y,"$asbg")
if(x){z=H.bH(a,"$isaH",y,null)
if(z)P.eO(a,this)
else P.jq(a,this)}else{w=this.bQ()
H.A(a,z)
this.a=4
this.c=a
P.bB(this,w)}},
bB:[function(a,b){var z
H.j(b,"$isaq")
z=this.bQ()
this.a=8
this.c=new P.ag(a,b)
P.bB(this,z)},function(a){return this.bB(a,null)},"hI","$2","$1","gek",4,2,30],
$isbg:1,
p:{
jq:function(a,b){var z,y,x
b.a=1
try{a.dO(new P.jr(b),new P.js(b),null)}catch(x){z=H.aR(x)
y=H.b7(x)
P.l1(new P.jt(b,z,y))}},
eO:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.j(a.c,"$isaH")
if(z>=4){y=b.bQ()
b.a=a.a
b.c=a.c
P.bB(b,y)}else{y=H.j(b.c,"$isb2")
b.a=2
b.c=a
a.cT(y)}},
bB:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.j(y.c,"$isag")
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
if(p){H.j(r,"$isag")
y=y.b
u=r.a
t=r.b
y.toString
P.cm(null,null,y,u,t)
return}o=$.N
if(o==null?q!=null:o!==q)$.N=q
else o=null
y=b.c
if(y===8)new P.jx(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jw(x,b,r).$0()}else if((y&2)!==0)new P.jv(z,x,b).$0()
if(o!=null)$.N=o
y=x.b
if(!!J.J(y).$isbg){if(y.a>=4){n=H.j(t.c,"$isb2")
t.c=null
b=t.b6(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eO(y,t)
return}}m=b.b
n=H.j(m.c,"$isb2")
m.c=null
b=m.b6(n)
y=x.a
u=x.b
if(!y){H.A(u,H.y(m,0))
m.a=4
m.c=u}else{H.j(u,"$isag")
m.a=8
m.c=u}z.a=m
y=m}}}},
jp:{"^":"t:2;a,b",
$0:function(){P.bB(this.a,this.b)}},
ju:{"^":"t:2;a,b",
$0:function(){P.bB(this.b,this.a.a)}},
jr:{"^":"t:14;a",
$1:function(a){var z=this.a
z.a=0
z.cK(a)}},
js:{"^":"t:34;a",
$2:function(a,b){this.a.bB(a,H.j(b,"$isaq"))},
$1:function(a){return this.$2(a,null)}},
jt:{"^":"t:2;a,b,c",
$0:function(){this.a.bB(this.b,this.c)}},
jx:{"^":"t:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dN(H.k(w.d,{func:1}),null)}catch(v){y=H.aR(v)
x=H.b7(v)
if(this.d){w=H.j(this.a.a.c,"$isag").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.j(this.a.a.c,"$isag")
else u.b=new P.ag(y,x)
u.a=!0
return}if(!!J.J(z).$isbg){if(z instanceof P.aH&&z.gcX()>=4){if(z.gcX()===8){w=this.b
w.b=H.j(z.gf5(),"$isag")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.hz(new P.jy(t),null)
w.a=!1}}},
jy:{"^":"t:36;a",
$1:function(a){return this.a}},
jw:{"^":"t:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.A(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.co(H.k(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aR(t)
y=H.b7(t)
x=this.a
x.b=new P.ag(z,y)
x.a=!0}}},
jv:{"^":"t:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.j(this.a.a.c,"$isag")
w=this.c
if(w.h8(z)&&w.e!=null){v=this.b
v.b=w.h_(z)
v.a=!1}}catch(u){y=H.aR(u)
x=H.b7(u)
w=H.j(this.a.a.c,"$isag")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ag(y,x)
s.a=!0}}},
eM:{"^":"a;a,0b"},
cZ:{"^":"a;$ti",
gk:function(a){var z,y
z={}
y=new P.aH(0,$.N,[P.C])
z.a=0
this.h6(new P.im(z,this),!0,new P.io(z,y),y.gek())
return y}},
im:{"^":"t;a,b",
$1:function(a){H.A(a,H.am(this.b,"cZ",0));++this.a.a},
$S:function(){return{func:1,ret:P.I,args:[H.am(this.b,"cZ",0)]}}},
io:{"^":"t:2;a,b",
$0:function(){this.b.cK(this.a.a)}},
ee:{"^":"a;$ti"},
il:{"^":"a;"},
aZ:{"^":"a;"},
ag:{"^":"a;a,b",
i:function(a){return H.i(this.a)},
$isX:1},
kg:{"^":"a;",$ism6:1},
kx:{"^":"t:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.e4()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.f(z)
x=H.f(z)
x.stack=y.i(0)
throw x}},
jT:{"^":"kg;",
hv:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
try{if(C.j===$.N){a.$0()
return}P.f2(null,null,this,a,-1)}catch(x){z=H.aR(x)
y=H.b7(x)
P.cm(null,null,this,z,H.j(y,"$isaq"))}},
hw:function(a,b,c){var z,y,x
H.k(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.j===$.N){a.$1(b)
return}P.f3(null,null,this,a,b,-1,c)}catch(x){z=H.aR(x)
y=H.b7(x)
P.cm(null,null,this,z,H.j(y,"$isaq"))}},
fM:function(a,b){return new P.jV(this,H.k(a,{func:1,ret:b}),b)},
bX:function(a){return new P.jU(this,H.k(a,{func:1,ret:-1}))},
d3:function(a,b){return new P.jW(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
dN:function(a,b){H.k(a,{func:1,ret:b})
if($.N===C.j)return a.$0()
return P.f2(null,null,this,a,b)},
co:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.N===C.j)return a.$1(b)
return P.f3(null,null,this,a,b,c,d)},
hu:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.N===C.j)return a.$2(b,c)
return P.ky(null,null,this,a,b,c,d,e,f)},
hp:function(a,b,c,d){return H.k(a,{func:1,ret:b,args:[c,d]})}},
jV:{"^":"t;a,b,c",
$0:function(){return this.a.dN(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jU:{"^":"t:3;a,b",
$0:function(){return this.a.hv(this.b)}},
jW:{"^":"t;a,b,c",
$1:function(a){var z=this.c
return this.a.hw(this.b,H.A(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
he:function(a,b,c){H.bJ(a)
return H.v(H.kK(a,new H.aV(0,0,[b,c])),"$isdU",[b,c],"$asdU")},
hd:function(a,b){return new H.aV(0,0,[a,b])},
hf:function(a,b,c,d){return new P.jF(0,0,[d])},
h1:function(a,b,c){var z,y
if(P.dd(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bG()
C.a.h(y,a)
try{P.ku(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.ef(b,H.kV(z,"$isc"),", ")+c
return y.charCodeAt(0)==0?y:y},
cG:function(a,b,c){var z,y,x
if(P.dd(a))return b+"..."+c
z=new P.bT(b)
y=$.$get$bG()
C.a.h(y,a)
try{x=z
x.a=P.ef(x.gay(),a,", ")}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.a=y.gay()+c
y=z.gay()
return y.charCodeAt(0)==0?y:y},
dd:function(a){var z,y
for(z=0;y=$.$get$bG(),z<y.length;++z)if(a===y[z])return!0
return!1},
ku:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gX(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.B())return
w=H.i(z.gO(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.B()){if(x<=5)return
if(0>=b.length)return H.h(b,-1)
v=b.pop()
if(0>=b.length)return H.h(b,-1)
u=b.pop()}else{t=z.gO(z);++x
if(!z.B()){if(x<=4){C.a.h(b,H.i(t))
return}v=H.i(t)
if(0>=b.length)return H.h(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gO(z);++x
for(;z.B();t=s,s=r){r=z.gO(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.i(t)
v=H.i(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dY:function(a){var z,y,x
z={}
if(P.dd(a))return"{...}"
y=new P.bT("")
try{C.a.h($.$get$bG(),a)
x=y
x.a=x.gay()+"{"
z.a=!0
J.fq(a,new P.hk(z,y))
z=y
z.a=z.gay()+"}"}finally{z=$.$get$bG()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.gay()
return z.charCodeAt(0)==0?z:z},
jF:{"^":"jz;a,0b,0c,0d,0e,0f,r,$ti",
gX:function(a){return P.eQ(this,this.r,H.y(this,0))},
gk:function(a){return this.a},
h:function(a,b){var z,y
H.A(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.da()
this.b=z}return this.cI(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.da()
this.c=y}return this.cI(y,b)}else return this.ed(0,b)},
ed:function(a,b){var z,y,x
H.A(b,H.y(this,0))
z=this.d
if(z==null){z=P.da()
this.d=z}y=this.cL(b)
x=z[y]
if(x==null)z[y]=[this.bA(b)]
else{if(this.cQ(x,b)>=0)return!1
x.push(this.bA(b))}return!0},
L:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cU(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cU(this.c,b)
else return this.f0(0,b)},
f0:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.er(z,b)
x=this.cQ(y,b)
if(x<0)return!1
this.cZ(y.splice(x,1)[0])
return!0},
cI:function(a,b){H.A(b,H.y(this,0))
if(H.j(a[b],"$isd9")!=null)return!1
a[b]=this.bA(b)
return!0},
cU:function(a,b){var z
if(a==null)return!1
z=H.j(a[b],"$isd9")
if(z==null)return!1
this.cZ(z)
delete a[b]
return!0},
cJ:function(){this.r=this.r+1&67108863},
bA:function(a){var z,y
z=new P.d9(H.A(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cJ()
return z},
cZ:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cJ()},
cL:function(a){return J.aS(a)&0x3ffffff},
er:function(a,b){return a[this.cL(b)]},
cQ:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.O(a[y].a,b))return y
return-1},
p:{
da:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
d9:{"^":"a;a,0b,0c"},
jG:{"^":"a;a,b,0c,0d,$ti",
gO:function(a){return this.d},
B:function(){var z=this.a
if(this.b!==z.r)throw H.f(P.bb(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.A(z.a,H.y(this,0))
this.c=z.b
return!0}}},
p:{
eQ:function(a,b,c){var z=new P.jG(a,b,[c])
z.c=a.e
return z}}},
jz:{"^":"i2;"},
ca:{"^":"jH;",$isc:1,$ise:1},
r:{"^":"a;$ti",
gX:function(a){return new H.dW(a,this.gk(a),0,[H.bI(this,a,"r",0)])},
C:function(a,b){return this.j(a,b)},
hC:function(a,b){var z,y,x
z=H.b([],[H.bI(this,a,"r",0)])
C.a.sk(z,this.gk(a))
y=0
while(!0){x=this.gk(a)
if(typeof x!=="number")return H.o(x)
if(!(y<x))break
C.a.S(z,y,this.j(a,y));++y}return z},
hB:function(a){return this.hC(a,!0)},
i:function(a){return P.cG(a,"[","]")}},
hj:{"^":"aa;"},
hk:{"^":"t:12;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.i(a)
z.a=y+": "
z.a+=H.i(b)}},
aa:{"^":"a;$ti",
K:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.bI(this,a,"aa",0),H.bI(this,a,"aa",1)]})
for(z=J.bK(this.gar(a));z.B();){y=z.gO(z)
b.$2(y,this.j(a,y))}},
gk:function(a){return J.b9(this.gar(a))},
i:function(a){return P.dY(a)},
$isa2:1},
i4:{"^":"a;$ti",
i:function(a){return P.cG(this,"{","}")},
C:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(P.dr("index"))
if(b<0)H.q(P.aj(b,0,null,"index",null))
for(z=P.eQ(this,this.r,H.y(this,0)),y=0;z.B();){x=z.d
if(b===y)return x;++y}throw H.f(P.M(b,this,"index",null,y))},
$isc:1},
i2:{"^":"i4;"},
jH:{"^":"a+r;"}}],["","",,P,{"^":"",cA:{"^":"a;$ti"},dA:{"^":"il;$ti"},fR:{"^":"cA;",
$ascA:function(){return[P.m,[P.e,P.C]]}},iV:{"^":"fR;a"},iW:{"^":"dA;",
fQ:function(a,b,c){var z,y,x,w
z=a.length
P.e9(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.kf(0,0,x)
if(w.eq(a,b,z)!==z)w.d_(C.h.c1(a,z-1),0)
return C.I.bv(x,0,w.b)},
fP:function(a){return this.fQ(a,0,null)},
$asdA:function(){return[P.m,[P.e,P.C]]}},kf:{"^":"a;a,b,c",
d_:function(a,b){var z,y,x,w,v
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
eq:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.h.c1(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.h.b4(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.d_(w,C.h.b4(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}}}],["","",,P,{"^":"",
fT:function(a){var z=J.J(a)
if(!!z.$ist)return z.i(a)
return"Instance of '"+H.aX(a)+"'"},
hg:function(a,b,c,d){var z,y
H.A(b,d)
z=J.h3(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.S(z,y,b)
return H.v(z,"$ise",[d],"$ase")},
hh:function(a,b,c){var z,y,x
z=[c]
y=H.b([],z)
for(x=a.gX(a);x.B();)C.a.h(y,H.A(x.gO(x),c))
if(b)return y
return H.v(J.bj(y),"$ise",z,"$ase")},
d_:function(a,b,c){var z,y
z=P.C
H.v(a,"$isc",[z],"$asc")
if(a.constructor===Array){H.v(a,"$isaU",[z],"$asaU")
y=a.length
c=P.e9(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a7()
z=c<y}else z=!0
return H.e8(z?C.a.bv(a,b,c):a)}return P.ip(a,b,c)},
ip:function(a,b,c){var z,y,x
H.v(a,"$isc",[P.C],"$asc")
z=J.bK(a)
for(y=0;y<b;++y)if(!z.B())throw H.f(P.aj(b,0,y,null,null))
x=[]
for(;z.B();)x.push(z.gO(z))
return H.e8(x)},
hU:function(a,b,c){return new H.h5(a,H.h6(a,!1,!0,!1))},
ke:function(a,b,c,d){var z,y,x,w,v,u
H.v(a,"$ise",[P.C],"$ase")
if(c===C.q){z=$.$get$f1().b
z=z.test(b)}else z=!1
if(z)return b
y=C.v.fP(H.A(b,H.am(c,"cA",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.h(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.hP(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
c5:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a5(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fT(a)},
p:function(a){return new P.eN(a)},
dp:function(a){H.l_(a)},
a4:{"^":"a;"},
"+bool":0,
ao:{"^":"a;a,b",
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.ao))return!1
return this.a===b.a&&this.b===b.b},
gV:function(a){var z=this.a
return(z^C.f.b7(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fJ(H.hO(this))
y=P.bM(H.hM(this))
x=P.bM(H.hI(this))
w=P.bM(H.hJ(this))
v=P.bM(H.hL(this))
u=P.bM(H.hN(this))
t=P.fK(H.hK(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
fJ:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fK:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bM:function(a){if(a>=10)return""+a
return"0"+a}}},
w:{"^":"W;"},
"+double":0,
bd:{"^":"a;a",
a7:function(a,b){return C.f.a7(this.a,H.j(b,"$isbd").a)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.bd))return!1
return this.a===b.a},
gV:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fO()
y=this.a
if(y<0)return"-"+new P.bd(0-y).i(0)
x=z.$1(C.f.Z(y,6e7)%60)
w=z.$1(C.f.Z(y,1e6)%60)
v=new P.fN().$1(y%1e6)
return""+C.f.Z(y,36e8)+":"+H.i(x)+":"+H.i(w)+"."+H.i(v)},
p:{
dK:function(a,b,c,d,e,f){return new P.bd(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fN:{"^":"t:13;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fO:{"^":"t:13;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
X:{"^":"a;"},
e4:{"^":"X;",
i:function(a){return"Throw of null."}},
az:{"^":"X;a,b,c,d",
gbD:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbC:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.i(z)
w=this.gbD()+y+x
if(!this.a)return w
v=this.gbC()
u=P.c5(this.b)
return w+v+": "+H.i(u)},
p:{
fs:function(a){return new P.az(!1,null,null,a)},
bZ:function(a,b,c){return new P.az(!0,a,b,c)},
dr:function(a){return new P.az(!1,null,a,"Must not be null")}}},
cc:{"^":"az;e,f,a,b,c,d",
gbD:function(){return"RangeError"},
gbC:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.i(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.i(z)
else if(x>z)y=": Not in range "+H.i(z)+".."+H.i(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.i(z)}return y},
p:{
cd:function(a,b,c){return new P.cc(null,null,!0,a,b,"Value not in range")},
aj:function(a,b,c,d,e){return new P.cc(b,c,!0,a,d,"Invalid value")},
e9:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.o(a)
if(0<=a){if(typeof c!=="number")return H.o(c)
z=a>c}else z=!0
if(z)throw H.f(P.aj(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
z=b>c}else z=!0
if(z)throw H.f(P.aj(b,a,c,"end",f))
return b}return c}}},
h0:{"^":"az;e,k:f>,a,b,c,d",
gbD:function(){return"RangeError"},
gbC:function(){if(J.fn(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.i(z)},
p:{
M:function(a,b,c,d,e){var z=H.Y(e!=null?e:J.b9(b))
return new P.h0(b,z,!0,a,c,"Index out of range")}}},
iQ:{"^":"X;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
ae:function(a){return new P.iQ(a)}}},
iN:{"^":"X;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
eF:function(a){return new P.iN(a)}}},
ih:{"^":"X;a",
i:function(a){return"Bad state: "+this.a}},
fE:{"^":"X;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.i(P.c5(z))+"."},
p:{
bb:function(a){return new P.fE(a)}}},
hE:{"^":"a;",
i:function(a){return"Out of Memory"},
$isX:1},
ec:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isX:1},
fI:{"^":"X;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eN:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
fY:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.h.bw(x,0,75)+"..."
return y+"\n"+x}},
C:{"^":"W;"},
"+int":0,
c:{"^":"a;$ti",
gk:function(a){var z,y
z=this.gX(this)
for(y=0;z.B();)++y
return y},
C:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(P.dr("index"))
if(b<0)H.q(P.aj(b,0,null,"index",null))
for(z=this.gX(this),y=0;z.B();){x=z.gO(z)
if(b===y)return x;++y}throw H.f(P.M(b,this,"index",null,y))},
i:function(a){return P.h1(this,"(",")")}},
cH:{"^":"a;$ti"},
e:{"^":"a;$ti",$isc:1},
"+List":0,
a2:{"^":"a;$ti"},
I:{"^":"a;",
gV:function(a){return P.a.prototype.gV.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
W:{"^":"a;"},
"+num":0,
a:{"^":";",
q:function(a,b){return this===b},
gV:function(a){return H.bq(this)},
i:function(a){return"Instance of '"+H.aX(this)+"'"},
toString:function(){return this.i(this)}},
aq:{"^":"a;"},
m:{"^":"a;",$ise5:1},
"+String":0,
bT:{"^":"a;ay:a<",
gk:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
ef:function(a,b,c){var z=J.bK(b)
if(!z.B())return a
if(c.length===0){do a+=H.i(z.gO(z))
while(z.B())}else{a+=H.i(z.gO(z))
for(;z.B();)a=a+c+H.i(z.gO(z))}return a}}}}],["","",,W,{"^":"",
cz:function(a,b){var z=document.createElement("canvas")
return z},
fQ:function(a){H.j(a,"$isa7")
return"wheel"},
cj:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eP:function(a,b,c,d){var z,y
z=W.cj(W.cj(W.cj(W.cj(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
f6:function(a,b){var z
H.k(a,{func:1,ret:-1,args:[b]})
z=$.N
if(z===C.j)return a
return z.d3(a,b)},
bi:{"^":"a_;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
l8:{"^":"n;0k:length=","%":"AccessibleNodeList"},
l9:{"^":"bi;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
la:{"^":"bi;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
fw:{"^":"n;","%":";Blob"},
cy:{"^":"bi;",
bu:function(a,b,c){if(c!=null)return a.getContext(b,P.kE(c,null))
return a.getContext(b)},
dS:function(a,b){return this.bu(a,b,null)},
$iscy:1,
"%":"HTMLCanvasElement"},
dx:{"^":"n;",$isdx:1,"%":"CanvasRenderingContext2D"},
lg:{"^":"K;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
li:{"^":"fH;0k:length=","%":"CSSPerspective"},
bc:{"^":"n;",$isbc:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
lj:{"^":"jf;0k:length=",
dT:function(a,b){var z=a.getPropertyValue(this.eh(a,b))
return z==null?"":z},
eh:function(a,b){var z,y
z=$.$get$dB()
y=z[b]
if(typeof y==="string")return y
y=this.fe(a,b)
z[b]=y
return y},
fe:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fL()+b
if(z in a)return z
return b},
gbY:function(a){return a.bottom},
gaj:function(a){return a.height},
gaJ:function(a){return a.left},
gaW:function(a){return a.right},
gb1:function(a){return a.top},
gak:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fG:{"^":"a;",
gaJ:function(a){return this.dT(a,"left")}},
dC:{"^":"n;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
fH:{"^":"n;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
lk:{"^":"dC;0k:length=","%":"CSSTransformValue"},
ll:{"^":"dC;0k:length=","%":"CSSUnparsedValue"},
lm:{"^":"n;0k:length=","%":"DataTransferItemList"},
ln:{"^":"n;",
i:function(a){return String(a)},
"%":"DOMException"},
lo:{"^":"jh;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[[P.a9,P.W]]},
$asr:function(){return[[P.a9,P.W]]},
$isc:1,
$asc:function(){return[[P.a9,P.W]]},
$ise:1,
$ase:function(){return[[P.a9,P.W]]},
$asz:function(){return[[P.a9,P.W]]},
"%":"ClientRectList|DOMRectList"},
fM:{"^":"n;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gak(a))+" x "+H.i(this.gaj(a))},
q:function(a,b){var z
if(b==null)return!1
z=H.bH(b,"$isa9",[P.W],"$asa9")
if(!z)return!1
z=J.cp(b)
return a.left===z.gaJ(b)&&a.top===z.gb1(b)&&this.gak(a)===z.gak(b)&&this.gaj(a)===z.gaj(b)},
gV:function(a){return W.eP(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gak(a)&0x1FFFFFFF,this.gaj(a)&0x1FFFFFFF)},
gbY:function(a){return a.bottom},
gaj:function(a){return a.height},
gaJ:function(a){return a.left},
gaW:function(a){return a.right},
gb1:function(a){return a.top},
gak:function(a){return a.width},
$isa9:1,
$asa9:function(){return[P.W]},
"%":";DOMRectReadOnly"},
lp:{"^":"jj;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[P.m]},
$asr:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]},
$ise:1,
$ase:function(){return[P.m]},
$asz:function(){return[P.m]},
"%":"DOMStringList"},
lq:{"^":"n;0k:length=","%":"DOMTokenList"},
je:{"^":"ca;a,b",
gk:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return H.j(z[b],"$isa_")},
h:function(a,b){this.a.appendChild(b)
return b},
gX:function(a){var z=this.hB(this)
return new J.af(z,z.length,0,[H.y(z,0)])},
$asr:function(){return[W.a_]},
$asc:function(){return[W.a_]},
$ase:function(){return[W.a_]}},
a_:{"^":"K;",
gd5:function(a){return new W.je(a,a.children)},
gd6:function(a){return P.hR(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.W)},
i:function(a){return a.localName},
$isa_:1,
"%":";Element"},
a6:{"^":"n;",$isa6:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a7:{"^":"n;",
d0:["dW",function(a,b,c,d){H.k(c,{func:1,args:[W.a6]})
if(c!=null)this.ee(a,b,c,!1)}],
ee:function(a,b,c,d){return a.addEventListener(b,H.b5(H.k(c,{func:1,args:[W.a6]}),1),!1)},
$isa7:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eV|eW|eY|eZ"},
bf:{"^":"fw;",$isbf:1,"%":"File"},
lr:{"^":"jo;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bf]},
$asr:function(){return[W.bf]},
$isc:1,
$asc:function(){return[W.bf]},
$ise:1,
$ase:function(){return[W.bf]},
$asz:function(){return[W.bf]},
"%":"FileList"},
ls:{"^":"a7;0k:length=","%":"FileWriter"},
lt:{"^":"bi;0k:length=","%":"HTMLFormElement"},
bh:{"^":"n;",$isbh:1,"%":"Gamepad"},
lu:{"^":"n;0k:length=","%":"History"},
lv:{"^":"jB;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.K]},
$asr:function(){return[W.K]},
$isc:1,
$asc:function(){return[W.K]},
$ise:1,
$ase:function(){return[W.K]},
$asz:function(){return[W.K]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c7:{"^":"n;0d8:data=",$isc7:1,"%":"ImageData"},
dN:{"^":"bi;",$isdN:1,"%":"HTMLImageElement"},
bk:{"^":"d3;",$isbk:1,"%":"KeyboardEvent"},
lz:{"^":"n;",
i:function(a){return String(a)},
"%":"Location"},
lA:{"^":"n;0k:length=","%":"MediaList"},
lB:{"^":"a7;",
d0:function(a,b,c,d){H.k(c,{func:1,args:[W.a6]})
if(b==="message")a.start()
this.dW(a,b,c,!1)},
"%":"MessagePort"},
lC:{"^":"jI;",
j:function(a,b){return P.aI(a.get(H.S(b)))},
K:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aI(y.value[1]))}},
gar:function(a){var z=H.b([],[P.m])
this.K(a,new W.hw(z))
return z},
gk:function(a){return a.size},
$asaa:function(){return[P.m,null]},
$isa2:1,
$asa2:function(){return[P.m,null]},
"%":"MIDIInputMap"},
hw:{"^":"t:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lD:{"^":"jJ;",
j:function(a,b){return P.aI(a.get(H.S(b)))},
K:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aI(y.value[1]))}},
gar:function(a){var z=H.b([],[P.m])
this.K(a,new W.hx(z))
return z},
gk:function(a){return a.size},
$asaa:function(){return[P.m,null]},
$isa2:1,
$asa2:function(){return[P.m,null]},
"%":"MIDIOutputMap"},
hx:{"^":"t:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bl:{"^":"n;",$isbl:1,"%":"MimeType"},
lE:{"^":"jL;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bl]},
$asr:function(){return[W.bl]},
$isc:1,
$asc:function(){return[W.bl]},
$ise:1,
$ase:function(){return[W.bl]},
$asz:function(){return[W.bl]},
"%":"MimeTypeArray"},
ap:{"^":"d3;",$isap:1,"%":"PointerEvent;DragEvent|MouseEvent"},
jd:{"^":"ca;a",
gX:function(a){var z=this.a.childNodes
return new W.dL(z,z.length,-1,[H.bI(C.J,z,"z",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
$asr:function(){return[W.K]},
$asc:function(){return[W.K]},
$ase:function(){return[W.K]}},
K:{"^":"a7;",
i:function(a){var z=a.nodeValue
return z==null?this.dX(a):z},
$isK:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hC:{"^":"jN;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.K]},
$asr:function(){return[W.K]},
$isc:1,
$asc:function(){return[W.K]},
$ise:1,
$ase:function(){return[W.K]},
$asz:function(){return[W.K]},
"%":"NodeList|RadioNodeList"},
bo:{"^":"n;0k:length=",$isbo:1,"%":"Plugin"},
lN:{"^":"jR;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bo]},
$asr:function(){return[W.bo]},
$isc:1,
$asc:function(){return[W.bo]},
$ise:1,
$ase:function(){return[W.bo]},
$asz:function(){return[W.bo]},
"%":"PluginArray"},
lP:{"^":"jX;",
j:function(a,b){return P.aI(a.get(H.S(b)))},
K:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aI(y.value[1]))}},
gar:function(a){var z=H.b([],[P.m])
this.K(a,new W.i_(z))
return z},
gk:function(a){return a.size},
$asaa:function(){return[P.m,null]},
$isa2:1,
$asa2:function(){return[P.m,null]},
"%":"RTCStatsReport"},
i_:{"^":"t:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lQ:{"^":"bi;0k:length=","%":"HTMLSelectElement"},
br:{"^":"a7;",$isbr:1,"%":"SourceBuffer"},
lR:{"^":"eW;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.br]},
$asr:function(){return[W.br]},
$isc:1,
$asc:function(){return[W.br]},
$ise:1,
$ase:function(){return[W.br]},
$asz:function(){return[W.br]},
"%":"SourceBufferList"},
bs:{"^":"n;",$isbs:1,"%":"SpeechGrammar"},
lS:{"^":"jZ;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bs]},
$asr:function(){return[W.bs]},
$isc:1,
$asc:function(){return[W.bs]},
$ise:1,
$ase:function(){return[W.bs]},
$asz:function(){return[W.bs]},
"%":"SpeechGrammarList"},
bt:{"^":"n;0k:length=",$isbt:1,"%":"SpeechRecognitionResult"},
lU:{"^":"k1;",
j:function(a,b){return a.getItem(H.S(b))},
K:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.m,P.m]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gar:function(a){var z=H.b([],[P.m])
this.K(a,new W.ik(z))
return z},
gk:function(a){return a.length},
$asaa:function(){return[P.m,P.m]},
$isa2:1,
$asa2:function(){return[P.m,P.m]},
"%":"Storage"},
ik:{"^":"t:38;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bu:{"^":"n;",$isbu:1,"%":"CSSStyleSheet|StyleSheet"},
bv:{"^":"a7;",$isbv:1,"%":"TextTrack"},
bw:{"^":"a7;",$isbw:1,"%":"TextTrackCue|VTTCue"},
lY:{"^":"k5;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bw]},
$asr:function(){return[W.bw]},
$isc:1,
$asc:function(){return[W.bw]},
$ise:1,
$ase:function(){return[W.bw]},
$asz:function(){return[W.bw]},
"%":"TextTrackCueList"},
lZ:{"^":"eZ;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bv]},
$asr:function(){return[W.bv]},
$isc:1,
$asc:function(){return[W.bv]},
$ise:1,
$ase:function(){return[W.bv]},
$asz:function(){return[W.bv]},
"%":"TextTrackList"},
m_:{"^":"n;0k:length=","%":"TimeRanges"},
bx:{"^":"n;",$isbx:1,"%":"Touch"},
b_:{"^":"d3;",$isb_:1,"%":"TouchEvent"},
m0:{"^":"kb;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bx]},
$asr:function(){return[W.bx]},
$isc:1,
$asc:function(){return[W.bx]},
$ise:1,
$ase:function(){return[W.bx]},
$asz:function(){return[W.bx]},
"%":"TouchList"},
m1:{"^":"n;0k:length=","%":"TrackDefaultList"},
d3:{"^":"a6;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
m4:{"^":"n;",
i:function(a){return String(a)},
"%":"URL"},
m5:{"^":"a7;0k:length=","%":"VideoTrackList"},
bA:{"^":"ap;",
gfU:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.ae("deltaY is not supported"))},
gfT:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.ae("deltaX is not supported"))},
$isbA:1,
"%":"WheelEvent"},
j6:{"^":"a7;",
f1:function(a,b){return a.requestAnimationFrame(H.b5(H.k(b,{func:1,ret:-1,args:[P.W]}),1))},
ep:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
ma:{"^":"ki;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bc]},
$asr:function(){return[W.bc]},
$isc:1,
$asc:function(){return[W.bc]},
$ise:1,
$ase:function(){return[W.bc]},
$asz:function(){return[W.bc]},
"%":"CSSRuleList"},
mb:{"^":"fM;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
q:function(a,b){var z
if(b==null)return!1
z=H.bH(b,"$isa9",[P.W],"$asa9")
if(!z)return!1
z=J.cp(b)
return a.left===z.gaJ(b)&&a.top===z.gb1(b)&&a.width===z.gak(b)&&a.height===z.gaj(b)},
gV:function(a){return W.eP(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gaj:function(a){return a.height},
gak:function(a){return a.width},
"%":"ClientRect|DOMRect"},
md:{"^":"kk;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bh]},
$asr:function(){return[W.bh]},
$isc:1,
$asc:function(){return[W.bh]},
$ise:1,
$ase:function(){return[W.bh]},
$asz:function(){return[W.bh]},
"%":"GamepadList"},
me:{"^":"km;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.K]},
$asr:function(){return[W.K]},
$isc:1,
$asc:function(){return[W.K]},
$ise:1,
$ase:function(){return[W.K]},
$asz:function(){return[W.K]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mf:{"^":"ko;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bt]},
$asr:function(){return[W.bt]},
$isc:1,
$asc:function(){return[W.bt]},
$ise:1,
$ase:function(){return[W.bt]},
$asz:function(){return[W.bt]},
"%":"SpeechRecognitionResultList"},
mg:{"^":"kq;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bu]},
$asr:function(){return[W.bu]},
$isc:1,
$asc:function(){return[W.bu]},
$ise:1,
$ase:function(){return[W.bu]},
$asz:function(){return[W.bu]},
"%":"StyleSheetList"},
jk:{"^":"cZ;a,b,c,$ti",
h6:function(a,b,c,d){var z=H.y(this,0)
H.k(a,{func:1,ret:-1,args:[z]})
H.k(c,{func:1,ret:-1})
return W.V(this.a,this.b,a,!1,z)}},
mc:{"^":"jk;a,b,c,$ti"},
jl:{"^":"ee;a,b,c,d,e,$ti",
fi:function(){var z=this.d
if(z!=null&&this.a<=0)J.fp(this.b,this.c,z,!1)},
p:{
V:function(a,b,c,d,e){var z=c==null?null:W.f6(new W.jm(c),W.a6)
z=new W.jl(0,a,b,z,!1,[e])
z.fi()
return z}}},
jm:{"^":"t:7;a",
$1:function(a){return this.a.$1(H.j(a,"$isa6"))}},
z:{"^":"a;$ti",
gX:function(a){return new W.dL(a,this.gk(a),-1,[H.bI(this,a,"z",0)])}},
dL:{"^":"a;a,b,c,0d,$ti",
B:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fo(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gO:function(a){return this.d}},
jf:{"^":"n+fG;"},
jg:{"^":"n+r;"},
jh:{"^":"jg+z;"},
ji:{"^":"n+r;"},
jj:{"^":"ji+z;"},
jn:{"^":"n+r;"},
jo:{"^":"jn+z;"},
jA:{"^":"n+r;"},
jB:{"^":"jA+z;"},
jI:{"^":"n+aa;"},
jJ:{"^":"n+aa;"},
jK:{"^":"n+r;"},
jL:{"^":"jK+z;"},
jM:{"^":"n+r;"},
jN:{"^":"jM+z;"},
jQ:{"^":"n+r;"},
jR:{"^":"jQ+z;"},
jX:{"^":"n+aa;"},
eV:{"^":"a7+r;"},
eW:{"^":"eV+z;"},
jY:{"^":"n+r;"},
jZ:{"^":"jY+z;"},
k1:{"^":"n+aa;"},
k4:{"^":"n+r;"},
k5:{"^":"k4+z;"},
eY:{"^":"a7+r;"},
eZ:{"^":"eY+z;"},
ka:{"^":"n+r;"},
kb:{"^":"ka+z;"},
kh:{"^":"n+r;"},
ki:{"^":"kh+z;"},
kj:{"^":"n+r;"},
kk:{"^":"kj+z;"},
kl:{"^":"n+r;"},
km:{"^":"kl+z;"},
kn:{"^":"n+r;"},
ko:{"^":"kn+z;"},
kp:{"^":"n+r;"},
kq:{"^":"kp+z;"}}],["","",,P,{"^":"",
kH:function(a){var z,y
z=J.J(a)
if(!!z.$isc7){y=z.gd8(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.f0(a.data,a.height,a.width)},
kG:function(a){if(a instanceof P.f0)return{data:a.a,height:a.b,width:a.c}
return a},
aI:function(a){var z,y,x,w,v
if(a==null)return
z=P.hd(P.m,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w){v=H.S(y[w])
z.S(0,v,a[v])}return z},
kE:function(a,b){var z={}
a.K(0,new P.kF(z))
return z},
dI:function(){var z=$.dH
if(z==null){z=J.ct(window.navigator.userAgent,"Opera",0)
$.dH=z}return z},
fL:function(){var z,y
z=$.dE
if(z!=null)return z
y=$.dF
if(y==null){y=J.ct(window.navigator.userAgent,"Firefox",0)
$.dF=y}if(y)z="-moz-"
else{y=$.dG
if(y==null){y=!P.dI()&&J.ct(window.navigator.userAgent,"Trident/",0)
$.dG=y}if(y)z="-ms-"
else z=P.dI()?"-o-":"-webkit-"}$.dE=z
return z},
f0:{"^":"a;d8:a>,b,c",$isc7:1},
kF:{"^":"t:12;a",
$2:function(a,b){this.a[a]=b}},
fV:{"^":"ca;a,b",
gbH:function(){var z,y,x
z=this.b
y=H.am(z,"r",0)
x=W.a_
return new H.hl(new H.j4(z,H.k(new P.fW(),{func:1,ret:P.a4,args:[y]}),[y]),H.k(new P.fX(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.b9(this.gbH().a)},
j:function(a,b){var z=this.gbH()
return z.b.$1(J.dq(z.a,b))},
gX:function(a){var z=P.hh(this.gbH(),!1,W.a_)
return new J.af(z,z.length,0,[H.y(z,0)])},
$asr:function(){return[W.a_]},
$asc:function(){return[W.a_]},
$ase:function(){return[W.a_]}},
fW:{"^":"t:24;",
$1:function(a){return!!J.J(H.j(a,"$isK")).$isa_}},
fX:{"^":"t:25;",
$1:function(a){return H.d(H.j(a,"$isK"),"$isa_")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
ck:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jC:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jS:{"^":"a;$ti",
gaW:function(a){var z=this.a
if(typeof z!=="number")return z.D()
return H.A(z+this.c,H.y(this,0))},
gbY:function(a){var z=this.b
if(typeof z!=="number")return z.D()
return H.A(z+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.i(this.a)+", "+H.i(this.b)+") "+this.c+" x "+this.d},
q:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bH(b,"$isa9",[P.W],"$asa9")
if(!z)return!1
z=this.a
y=J.cp(b)
x=y.gaJ(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb1(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.D()
w=H.y(this,0)
if(H.A(z+this.c,w)===y.gaW(b)){if(typeof x!=="number")return x.D()
z=H.A(x+this.d,w)===y.gbY(b)}else z=!1}else z=!1}else z=!1
return z},
gV:function(a){var z,y,x,w,v
z=this.a
y=J.aS(z)
x=this.b
w=J.aS(x)
if(typeof z!=="number")return z.D()
v=H.y(this,0)
z=H.A(z+this.c,v)
if(typeof x!=="number")return x.D()
v=H.A(x+this.d,v)
return P.jC(P.ck(P.ck(P.ck(P.ck(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a9:{"^":"jS;aJ:a>,b1:b>,ak:c>,aj:d>,$ti",p:{
hR:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.a7()
if(c<0)z=-c*0
else z=c
H.A(z,e)
if(typeof d!=="number")return d.a7()
if(d<0)y=-d*0
else y=d
return new P.a9(a,b,z,H.A(y,e),[e])}}}}],["","",,P,{"^":"",bQ:{"^":"n;",$isbQ:1,"%":"SVGLength"},ly:{"^":"jE;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$asr:function(){return[P.bQ]},
$isc:1,
$asc:function(){return[P.bQ]},
$ise:1,
$ase:function(){return[P.bQ]},
$asz:function(){return[P.bQ]},
"%":"SVGLengthList"},bS:{"^":"n;",$isbS:1,"%":"SVGNumber"},lL:{"^":"jP;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$asr:function(){return[P.bS]},
$isc:1,
$asc:function(){return[P.bS]},
$ise:1,
$ase:function(){return[P.bS]},
$asz:function(){return[P.bS]},
"%":"SVGNumberList"},lO:{"^":"n;0k:length=","%":"SVGPointList"},lV:{"^":"k3;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$asr:function(){return[P.m]},
$isc:1,
$asc:function(){return[P.m]},
$ise:1,
$ase:function(){return[P.m]},
$asz:function(){return[P.m]},
"%":"SVGStringList"},lW:{"^":"a_;",
gd5:function(a){return new P.fV(a,new W.jd(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"},bV:{"^":"n;",$isbV:1,"%":"SVGTransform"},m2:{"^":"kd;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$asr:function(){return[P.bV]},
$isc:1,
$asc:function(){return[P.bV]},
$ise:1,
$ase:function(){return[P.bV]},
$asz:function(){return[P.bV]},
"%":"SVGTransformList"},jD:{"^":"n+r;"},jE:{"^":"jD+z;"},jO:{"^":"n+r;"},jP:{"^":"jO+z;"},k2:{"^":"n+r;"},k3:{"^":"k2+z;"},kc:{"^":"n+r;"},kd:{"^":"kc+z;"}}],["","",,P,{"^":"",lb:{"^":"n;0k:length=","%":"AudioBuffer"},lc:{"^":"jc;",
j:function(a,b){return P.aI(a.get(H.S(b)))},
K:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aI(y.value[1]))}},
gar:function(a){var z=H.b([],[P.m])
this.K(a,new P.fu(z))
return z},
gk:function(a){return a.size},
$asaa:function(){return[P.m,null]},
$isa2:1,
$asa2:function(){return[P.m,null]},
"%":"AudioParamMap"},fu:{"^":"t:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},ld:{"^":"a7;0k:length=","%":"AudioTrackList"},fv:{"^":"a7;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lM:{"^":"fv;0k:length=","%":"OfflineAudioContext"},jc:{"^":"n+aa;"}}],["","",,P,{"^":"",cW:{"^":"n;",
hy:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.J(g)
if(!!z.$isc7)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.kG(g))
return}if(!!z.$isdN)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.f(P.fs("Incorrect number or type of arguments"))},
hx:function(a,b,c,d,e,f,g){return this.hy(a,b,c,d,e,f,g,null,null,null)},
$iscW:1,
"%":"WebGLRenderingContext"},iq:{"^":"n;",$isiq:1,"%":"WebGLTexture"},iL:{"^":"n;",$isiL:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",lT:{"^":"k0;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.M(b,a,null,null,null))
return P.aI(a.item(b))},
C:function(a,b){return this.j(a,b)},
$asr:function(){return[[P.a2,,,]]},
$isc:1,
$asc:function(){return[[P.a2,,,]]},
$ise:1,
$ase:function(){return[[P.a2,,,]]},
$asz:function(){return[[P.a2,,,]]},
"%":"SQLResultSetRowList"},k_:{"^":"n+r;"},k0:{"^":"k_+z;"}}],["","",,O,{"^":"",ah:{"^":"a;0a,0b,0c,0d,$ti",
by:function(a){this.a=H.b([],[a])
this.b=null
this.c=null
this.d=null},
cu:function(a,b,c){var z=H.am(this,"ah",0)
H.k(b,{func:1,ret:P.a4,args:[[P.c,z]]})
z={func:1,ret:-1,args:[P.C,[P.c,z]]}
H.k(a,z)
H.k(c,z)
this.b=b
this.c=a
this.d=c},
aL:function(a,b){return this.cu(a,null,b)},
aM:function(a){var z
H.v(a,"$isc",[H.am(this,"ah",0)],"$asc")
z=this.b
if(z!=null)return z.$1(a)
return!0},
bO:function(a,b){var z
H.v(b,"$isc",[H.am(this,"ah",0)],"$asc")
z=this.c
if(z!=null)z.$2(a,b)},
eV:function(a,b){var z
H.v(b,"$isc",[H.am(this,"ah",0)],"$asc")
z=this.d
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
gX:function(a){var z=this.a
return new J.af(z,z.length,0,[H.y(z,0)])},
C:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.am(this,"ah",0)
H.A(b,z)
z=[z]
if(this.aM(H.b([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.bO(x,H.b([b],z))}},
aO:function(a,b){var z,y
H.v(b,"$isc",[H.am(this,"ah",0)],"$asc")
if(this.aM(b)){z=this.a
y=z.length
C.a.aO(z,b)
this.bO(y,b)}},
S:function(a,b,c){var z,y,x
z=H.am(this,"ah",0)
H.A(c,z)
y=this.a
if(b>=y.length)return H.h(y,b)
x=y[b]
if(!J.O(x,c)&&this.aM(H.b([c],[z]))){C.a.S(this.a,b,c)
z=[z]
this.eV(b,H.b([x],z))
this.bO(b,H.b([c],z))}},
$isc:1,
p:{
c1:function(a){var z=new O.ah([a])
z.by(a)
return z}}},cO:{"^":"a;0a,0b",
gk:function(a){return this.a.length},
gn:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
e4:function(a){var z=this.b
if(!(z==null))z.t(a)},
av:function(){return this.e4(null)},
gI:function(a){var z=this.a
if(z.length>0)return C.a.gcf(z)
else return V.aK()},
br:function(a){var z=this.a
if(a==null)C.a.h(z,V.aK())
else C.a.h(z,a)
this.av()},
as:function(){var z=this.a
if(z.length>0){z.pop()
this.av()}}}}],["","",,E,{"^":"",cu:{"^":"a;"},aA:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0Y:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
scw:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gn().L(0,this.gdK())
y=this.c
if(y!=null)y.gn().h(0,this.gdK())
x=new D.B("shape",z,this.c,this,[F.ea])
x.b=!0
this.ac(x)}},
sdH:function(a){var z,y
if(!J.O(this.r,a)){z=this.r
if(z!=null)z.gn().L(0,this.gdJ())
if(a!=null)a.gn().h(0,this.gdJ())
this.r=a
y=new D.B("mover",z,a,this,[U.a0])
y.b=!0
this.ac(y)}},
ae:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.a:null
if(!J.O(y,this.x)){x=this.x
this.x=y
w=new D.B("matrix",x,y,this,[V.ab])
w.b=!0
this.ac(w)}for(z=this.y.a,z=new J.af(z,z.length,0,[H.y(z,0)]);z.B();)z.d.ae(0,b)},
a0:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gI(z))
else C.a.h(z.a,y.l(0,z.gI(z)))
z.av()
a.cn(this.f)
z=a.dy
x=(z&&C.a).gcf(z)
if(x!=null&&this.d!=null)x.dM(a,this)
for(z=this.y.a,z=new J.af(z,z.length,0,[H.y(z,0)]);z.B();)z.d.a0(a)
a.cm()
a.dx.as()},
gn:function(){var z=this.z
if(z==null){z=D.E()
this.z=z}return z},
ac:function(a){var z=this.z
if(!(z==null))z.t(a)},
a_:function(){return this.ac(null)},
hf:[function(a){H.j(a,"$isu")
this.e=null
this.ac(a)},function(){return this.hf(null)},"ip","$1","$0","gdK",0,2,0],
he:[function(a){this.ac(H.j(a,"$isu"))},function(){return this.he(null)},"io","$1","$0","gdJ",0,2,0],
hc:[function(a){this.ac(H.j(a,"$isu"))},function(){return this.hc(null)},"il","$1","$0","gdI",0,2,0],
ik:[function(a,b){var z,y,x,w,v,u,t,s
H.v(b,"$isc",[E.aA],"$asc")
for(z=b.length,y=this.gdI(),x={func:1,ret:-1,args:[D.u]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gY()==null){t=new D.aT()
t.d=0
u.sY(t)}t=u.gY()
t.toString
H.k(y,x)
s=t.a
if(s==null){s=H.b([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.a_()},"$2","ghb",8,0,8],
im:[function(a,b){var z,y,x,w,v
H.v(b,"$isc",[E.aA],"$asc")
for(z=b.length,y=this.gdI(),x=0;x<b.length;b.length===z||(0,H.x)(b),++x){w=b[x]
if(w!=null){if(w.gY()==null){v=new D.aT()
v.d=0
w.sY(v)}w.gY().L(0,y)}}this.a_()},"$2","ghd",8,0,8],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isav:1,
p:{
c4:function(a,b,c,d,e,f){var z,y
z=new E.aA()
z.a=d
z.b=!0
y=O.c1(E.aA)
z.y=y
y.aL(z.ghb(),z.ghd())
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
z.scw(0,e)
z.sdH(c)
return z}}},hV:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
e1:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.ao(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cO()
y=[V.ab]
z.a=H.b([],y)
z.gn().h(0,new E.hX(this))
this.cy=z
z=new O.cO()
z.a=H.b([],y)
z.gn().h(0,new E.hY(this))
this.db=z
z=new O.cO()
z.a=H.b([],y)
z.gn().h(0,new E.hZ(this))
this.dx=z
z=H.b([],[O.bU])
this.dy=z
C.a.h(z,null)
this.fr=new H.aV(0,0,[P.m,A.cX])},
gho:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gI(z)
y=this.db
y=z.l(0,y.gI(y))
this.z=y
z=y}return z},
cn:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gcf(z):a;(z&&C.a).h(z,y)},
cm:function(){var z=this.dy
if(z.length>1)z.pop()},
d2:function(a){var z=a.b
if(z.length===0)throw H.f(P.p("May not cache a shader with no name."))
if(this.fr.d7(0,z))throw H.f(P.p('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.S(0,z,a)},
p:{
hW:function(a,b){var z=new E.hV(a,b)
z.e1(a,b)
return z}}},hX:{"^":"t:9;a",
$1:function(a){var z
H.j(a,"$isu")
z=this.a
z.z=null
z.ch=null}},hY:{"^":"t:9;a",
$1:function(a){var z
H.j(a,"$isu")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hZ:{"^":"t:9;a",
$1:function(a){var z
H.j(a,"$isu")
z=this.a
z.ch=null
z.cx=null}},iw:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0Y:x@,0y,0z,0Q,0ch,0cx,0cy",
gn:function(){var z=this.x
if(z==null){z=D.E()
this.x=z}return z},
e6:[function(a){var z
H.j(a,"$isu")
z=this.x
if(!(z==null))z.t(a)
this.hs()},function(){return this.e6(null)},"e5","$1","$0","gcE",0,2,0],
gfZ:function(){var z,y,x
z=Date.now()
y=C.f.Z(P.dK(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.ao(z,!1)
return x/y},
cV:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.l()
if(typeof z!=="number")return H.o(z)
x=C.i.cc(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.l()
w=C.i.cc(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.ei(C.l,this.ghr())}},
hs:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.k(new E.iy(this),{func:1,ret:-1,args:[P.W]})
C.t.ep(z)
C.t.f1(z,W.f6(y,P.W))}},"$0","ghr",0,0,3],
hq:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.cV()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ao(w,!1)
x.y=P.dK(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sk(w.a,0)
w.av()
w=x.db
C.a.sk(w.a,0)
w.av()
w=x.dx
C.a.sk(w.a,0)
w.av()
w=x.dy;(w&&C.a).sk(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a0(this.e)}}catch(v){z=H.aR(v)
y=H.b7(v)
P.dp("Error: "+H.i(z))
P.dp("Stack: "+H.i(y))
throw H.f(z)}},
p:{
ix:function(a,b,c,d,e){var z,y,x,w
z=J.J(a)
if(!!z.$iscy)return E.eh(a,!0,!0,!0,!1)
y=W.cz(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gd5(a).h(0,y)
w=E.eh(y,!0,!0,!0,!1)
w.a=a
return w},
eh:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.iw()
y=P.he(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.m,null)
x=C.k.bu(a,"webgl",y)
x=H.j(x==null?C.k.bu(a,"experimental-webgl",y):x,"$iscW")
if(x==null)H.q(P.p("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hW(x,a)
w=new T.ir(x)
w.b=H.Y(x.getParameter(3379))
w.c=H.Y(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.iR(a)
v=new X.h8()
v.c=new X.au(!1,!1,!1)
v.d=P.hf(null,null,null,P.C)
w.b=v
v=new X.hy(w)
v.f=0
v.r=new V.P(0,0)
v.x=new V.P(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.hi(w)
v.r=0
v.x=new V.P(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.iB(w)
v.e=0
v.f=new V.P(0,0)
v.r=new V.P(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.b([],[[P.ee,P.a]])
w.z=v
u=document
t=W.ap
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.V(u,"contextmenu",H.k(w.geH(),s),!1,t))
v=w.z
r=W.a6
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.V(a,"focus",H.k(w.geK(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.V(a,"blur",H.k(w.geE(),q),!1,r))
v=w.z
p=W.bk
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.V(u,"keyup",H.k(w.geM(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.V(u,"keydown",H.k(w.geL(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.V(a,"mousedown",H.k(w.geP(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.V(a,"mouseup",H.k(w.geR(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.V(a,"mousemove",H.k(w.geQ(),s),!1,t))
p=w.z
o=W.bA;(p&&C.a).h(p,W.V(a,H.S(W.fQ(a)),H.k(w.geS(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.V(u,"mousemove",H.k(w.geI(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.V(u,"mouseup",H.k(w.geJ(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.V(u,"pointerlockchange",H.k(w.geT(),q),!1,r))
r=w.z
q=W.b_
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.V(a,"touchstart",H.k(w.gf_(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.V(a,"touchend",H.k(w.geY(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.V(a,"touchmove",H.k(w.geZ(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.ao(Date.now(),!1)
z.cy=0
z.cV()
return z}}},iy:{"^":"t:28;a",
$1:function(a){var z
H.kZ(a)
z=this.a
if(z.ch){z.ch=!1
z.hq()}}}}],["","",,Z,{"^":"",eK:{"^":"a;a,b",p:{
d7:function(a,b,c){var z
H.v(c,"$ise",[P.C],"$ase")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bD(c)),35044)
a.bindBuffer(b,null)
return new Z.eK(b,z)}}},dv:{"^":"cu;a,b,c,d,e",
U:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aR(y)
x=P.p('Failed to bind buffer attribute "'+J.a5(this.a)+'": '+H.i(z))
throw H.f(x)}},
i:function(a){return"["+J.a5(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.i(this.e)+"]"}},eL:{"^":"a;a",$isle:1},cx:{"^":"a;a,0b,c,d",
aq:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
U:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].U(a)},
au:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
a0:function(a){var z,y,x,w,v
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
z=[P.m]
y=H.b([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v)C.a.h(y,x[v].i(0))
u=H.b([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a5(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.w(y,", ")+"\nAttrs:   "+C.a.w(u,", ")},
$islX:1},c8:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aX(this.c)+"'")+"]"}},b0:{"^":"a;a",
gcz:function(a){var z,y
z=this.a
y=(z&$.$get$ar().a)!==0?3:0
if((z&$.$get$aE().a)!==0)y+=3
if((z&$.$get$aD().a)!==0)y+=3
if((z&$.$get$aF().a)!==0)y+=2
if((z&$.$get$aG().a)!==0)y+=3
if((z&$.$get$by().a)!==0)y+=3
if((z&$.$get$bz().a)!==0)y+=4
if((z&$.$get$b1().a)!==0)++y
return(z&$.$get$aC().a)!==0?y+4:y},
fL:function(a){var z,y,x
z=$.$get$ar()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aE()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aD()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aF()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aG()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$by()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bz()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b1()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aC()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eJ()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b0))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.b([],[P.m])
y=this.a
if((y&$.$get$ar().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aE().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aD().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aF().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aG().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$by().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bz().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b1().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aC().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.w(z,"|")},
p:{
al:function(a){return new Z.b0(a)}}}}],["","",,D,{"^":"",dy:{"^":"a;"},aT:{"^":"a;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.u]}
H.k(b,z)
y=this.a
if(y==null){z=H.b([],[z])
this.a=z}else z=y
C.a.h(z,b)},
L:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[D.u]})
z=this.a
z=z==null?null:C.a.aF(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).L(z,b)||!1}else y=!1
return y},
t:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w)w=!0
else w=!1
if(w)return!1
if(a==null){a=new D.u(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.K(y,new D.fU(z))
return!0},
fV:function(){return this.t(null)},
ht:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.t(y)}}},
at:function(a){return this.ht(a,!0,!1)},
p:{
E:function(){var z=new D.aT()
z.d=0
return z}}},fU:{"^":"t:29;a",
$1:function(a){var z
H.k(a,{func:1,ret:-1,args:[D.u]})
z=this.a.a
z.b
a.$1(z)}},u:{"^":"a;a,0b"},bN:{"^":"u;c,d,a,0b,$ti"},bO:{"^":"u;c,d,a,0b,$ti"},B:{"^":"u;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}}],["","",,X,{"^":"",dw:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dw))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)},
p:{"^":"lf<"}},dS:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dS))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}},dT:{"^":"u;c,a,0b"},h8:{"^":"a;0a,0b,0c,0d",
hl:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dT(a,this)
y.b=!0
return z.t(y)},
hh:function(a){var z,y
this.c=a.b
this.d.L(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dT(a,this)
y.b=!0
return z.t(y)}},dX:{"^":"cb;x,y,c,d,e,a,0b"},hi:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
an:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ao(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.l()
v=b.b
u=this.ch
if(typeof v!=="number")return v.l()
t=new V.P(y.a+x*w,y.b+v*u)
u=this.a.gaE()
s=new X.bm(a,new V.P(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cl:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.t(this.an(a,b))
return!0},
aU:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dV()
if(typeof z!=="number")return z.dQ()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.t(this.an(a,b))
return!0},
aT:function(a,b){var z=this.d
if(z==null)return!1
z.t(this.an(a,b))
return!0},
hm:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaE()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.l()
t=a.b
s=this.cy
if(typeof t!=="number")return t.l()
w=new X.cR(new V.Q(v*u,t*s),y,x,new P.ao(w,!1),this)
w.b=!0
z.t(w)
return!0},
eO:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ao(Date.now(),!1)
y=this.f
x=new X.dX(c,a,this.a.gaE(),b,z,this)
x.b=!0
y.t(x)
this.y=z
this.x=new V.P(0,0)}},au:{"^":"a;a,b,c",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.au))return!1
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
return z+(this.c?"Shift+":"")}},bm:{"^":"cb;x,y,z,Q,ch,c,d,e,a,0b"},hy:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bE:function(a,b,c){var z,y,x
z=new P.ao(Date.now(),!1)
y=this.a.gaE()
x=new X.bm(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cl:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.t(this.bE(a,b,!0))
return!0},
aU:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dV()
if(typeof z!=="number")return z.dQ()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.t(this.bE(a,b,!0))
return!0},
aT:function(a,b){var z=this.d
if(z==null)return!1
z.t(this.bE(a,b,!1))
return!0},
hn:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaE()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.l()
u=a.b
t=this.ch
if(typeof u!=="number")return u.l()
x=new X.cR(new V.Q(w*v,u*t),y,b,new P.ao(x,!1),this)
x.b=!0
z.t(x)
return!0},
gda:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
gbt:function(){var z=this.c
if(z==null){z=D.E()
this.c=z}return z},
gdG:function(){var z=this.d
if(z==null){z=D.E()
this.d=z}return z}},cR:{"^":"cb;x,c,d,e,a,0b"},cb:{"^":"u;"},em:{"^":"cb;x,y,z,Q,ch,c,d,e,a,0b"},iB:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
an:function(a,b){var z,y,x,w
H.v(a,"$ise",[V.P],"$ase")
z=new P.ao(Date.now(),!1)
y=a.length>0?a[0]:new V.P(0,0)
x=this.a.gaE()
w=new X.em(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hk:function(a){var z
H.v(a,"$ise",[V.P],"$ase")
z=this.b
if(z==null)return!1
z.t(this.an(a,!0))
return!0},
hi:function(a){var z
H.v(a,"$ise",[V.P],"$ase")
z=this.c
if(z==null)return!1
z.t(this.an(a,!0))
return!0},
hj:function(a){var z
H.v(a,"$ise",[V.P],"$ase")
z=this.d
if(z==null)return!1
z.t(this.an(a,!1))
return!0}},iR:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaE:function(){var z=this.a
return V.ce(0,0,(z&&C.k).gd6(z).c,C.k.gd6(z).d)},
cO:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dS(z,new X.au(y,a.altKey,a.shiftKey))},
aD:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.au(y,a.altKey,a.shiftKey)},
bT:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.au(y,a.altKey,a.shiftKey)},
ao:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.E()
v=z.top
if(typeof x!=="number")return x.E()
return new V.P(y-w,x-v)},
aN:function(a){return new V.Q(a.movementX,a.movementY)},
bP:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.b([],[V.P])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
t=C.i.ad(u.pageX)
C.i.ad(u.pageY)
s=z.left
C.i.ad(u.pageX)
C.a.h(y,new V.P(t-s,C.i.ad(u.pageY)-z.top))}return y},
al:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dw(z,new X.au(y,a.altKey,a.shiftKey))},
bI:function(a){var z,y,x,w,v,u
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
hX:[function(a){this.f=!0},"$1","geK",4,0,7],
hR:[function(a){this.f=!1},"$1","geE",4,0,7],
hU:[function(a){H.j(a,"$isap")
if(this.f&&this.bI(a))a.preventDefault()},"$1","geH",4,0,4],
hZ:[function(a){var z
H.j(a,"$isbk")
if(!this.f)return
z=this.cO(a)
if(this.b.hl(z))a.preventDefault()},"$1","geM",4,0,16],
hY:[function(a){var z
H.j(a,"$isbk")
if(!this.f)return
z=this.cO(a)
if(this.b.hh(z))a.preventDefault()},"$1","geL",4,0,16],
i0:[function(a){var z,y,x,w
H.j(a,"$isap")
z=this.a
z.focus()
this.f=!0
this.aD(a)
if(this.x){y=this.al(a)
x=this.aN(a)
if(this.d.cl(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.al(a)
w=this.ao(a)
if(this.c.cl(y,w))a.preventDefault()},"$1","geP",4,0,4],
i2:[function(a){var z,y,x
H.j(a,"$isap")
this.aD(a)
z=this.al(a)
if(this.x){y=this.aN(a)
if(this.d.aU(z,y))a.preventDefault()
return}if(this.r)return
x=this.ao(a)
if(this.c.aU(z,x))a.preventDefault()},"$1","geR",4,0,4],
hW:[function(a){var z,y,x
H.j(a,"$isap")
if(!this.bI(a)){this.aD(a)
z=this.al(a)
if(this.x){y=this.aN(a)
if(this.d.aU(z,y))a.preventDefault()
return}if(this.r)return
x=this.ao(a)
if(this.c.aU(z,x))a.preventDefault()}},"$1","geJ",4,0,4],
i1:[function(a){var z,y,x
H.j(a,"$isap")
this.aD(a)
z=this.al(a)
if(this.x){y=this.aN(a)
if(this.d.aT(z,y))a.preventDefault()
return}if(this.r)return
x=this.ao(a)
if(this.c.aT(z,x))a.preventDefault()},"$1","geQ",4,0,4],
hV:[function(a){var z,y,x
H.j(a,"$isap")
if(!this.bI(a)){this.aD(a)
z=this.al(a)
if(this.x){y=this.aN(a)
if(this.d.aT(z,y))a.preventDefault()
return}if(this.r)return
x=this.ao(a)
if(this.c.aT(z,x))a.preventDefault()}},"$1","geI",4,0,4],
i3:[function(a){var z,y
H.j(a,"$isbA")
this.aD(a)
z=new V.Q((a&&C.r).gfT(a),C.r.gfU(a)).u(0,180)
if(this.x){if(this.d.hm(z))a.preventDefault()
return}if(this.r)return
y=this.ao(a)
if(this.c.hn(z,y))a.preventDefault()},"$1","geS",4,0,31],
i4:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.al(this.y)
v=this.ao(this.y)
this.d.eO(w,v,x)}},"$1","geT",4,0,7],
ia:[function(a){var z
H.j(a,"$isb_")
this.a.focus()
this.f=!0
this.bT(a)
z=this.bP(a)
if(this.e.hk(z))a.preventDefault()},"$1","gf_",4,0,10],
i8:[function(a){var z
H.j(a,"$isb_")
this.bT(a)
z=this.bP(a)
if(this.e.hi(z))a.preventDefault()},"$1","geY",4,0,10],
i9:[function(a){var z
H.j(a,"$isb_")
this.bT(a)
z=this.bP(a)
if(this.e.hj(z))a.preventDefault()},"$1","geZ",4,0,10]}}],["","",,D,{"^":"",c3:{"^":"a;0a,0b,0c,0d",
gn:function(){var z=this.d
if(z==null){z=D.E()
this.d=z}return z},
aw:[function(a){var z
H.j(a,"$isu")
z=this.d
if(!(z==null))z.t(a)},function(){return this.aw(null)},"hE","$1","$0","ge7",0,2,0],
$isU:1,
$isav:1,
p:{
dJ:function(a,b){var z,y,x
z=new D.c3()
z.c=new V.T(1,1,1)
z.a=new V.G(0,0,1)
y=z.b
z.b=b
b.gn().h(0,z.ge7())
x=new D.B("mover",y,z.b,z,[U.a0])
x.b=!0
z.aw(x)
if(!z.c.q(0,a)){y=z.c
z.c=a
x=new D.B("color",y,a,z,[V.T])
x.b=!0
z.aw(x)}return z}}},U:{"^":"a;",$isav:1},h9:{"^":"ah;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gn:function(){var z=this.Q
if(z==null){z=D.E()
this.Q=z}return z},
aw:function(a){var z=this.Q
if(!(z==null))z.t(a)},
eN:[function(a){var z
H.j(a,"$isu")
z=this.ch
if(!(z==null))z.t(a)},function(){return this.eN(null)},"i_","$1","$0","gcS",0,2,0],
i5:[function(a){var z,y,x
H.v(a,"$isc",[D.U],"$asc")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.x)(a),++y){x=a[y]
if(x==null||this.el(x))return!1}return!0},"$1","geU",4,0,33],
hN:[function(a,b){var z,y,x,w,v,u,t,s,r
z=D.U
H.v(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gcS(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.j(b[u],"$isU")
if(t instanceof D.c3)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aT()
s.d=0
t.d=s}H.k(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}z=new D.bN(a,b,this,[z])
z.b=!0
this.aw(z)},"$2","geA",8,0,17],
i6:[function(a,b){var z,y,x,w,v,u
z=D.U
H.v(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gcS(),w=0;w<b.length;b.length===y||(0,H.x)(b),++w){v=H.j(b[w],"$isU")
if(v instanceof D.c3)C.a.L(this.e,v)
u=v.d
if(u==null){u=new D.aT()
u.d=0
v.d=u}u.L(0,x)}z=new D.bO(a,b,this,[z])
z.b=!0
this.aw(z)},"$2","geW",8,0,17],
el:function(a){var z=C.a.aF(this.e,a)
return z},
$asc:function(){return[D.U]},
$asah:function(){return[D.U]}},hH:{"^":"a;",$isU:1,$isav:1},ig:{"^":"a;",$isU:1,$isav:1},it:{"^":"a;",$isU:1,$isav:1},iu:{"^":"a;",$isU:1,$isav:1},iv:{"^":"a;",$isU:1,$isav:1}}],["","",,V,{"^":"",
lh:[function(a,b){if(typeof b!=="number")return b.E()
if(typeof a!=="number")return H.o(a)
return Math.abs(b-a)<=1e-9},"$2","hu",8,0,32],
l7:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.i.dU(a-b,z)
return(a<0?a+z:a)+b},
L:function(a,b,c){if(a==null)return C.h.a6("null",c)
return C.h.a6(C.i.dP($.l.$2(a,0)?0:a,b),c+b+1)},
b6:function(a,b,c){var z,y,x,w,v,u
H.v(a,"$ise",[P.w],"$ase")
z=H.b([],[P.m])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.x)(a),++w){v=V.L(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.h(z,u)
C.a.S(z,u,C.h.a6(z[u],x))}return z},
dn:function(a,b){return C.i.hA(Math.pow(b,C.y.cc(Math.log(H.kD(a))/Math.log(b))))},
T:{"^":"a;a,b,c",
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
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}},
aJ:{"^":"a;a,b,c,d",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aJ))return!1
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
e0:{"^":"a;a,b,c,d,e,f,r,x,y",
a3:function(a,b){var z=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.w])
return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e0))return!1
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
z=[P.w]
y=V.b6(H.b([this.a,this.d,this.r],z),3,0)
x=V.b6(H.b([this.b,this.e,this.x],z),3,0)
w=V.b6(H.b([this.c,this.f,this.y],z),3,0)
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
ab:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a3:function(a,b){var z=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.w])
return z},
ce:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.o(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.o(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.o(u)
t=this.c
if(typeof t!=="number")return t.l()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.o(r)
q=this.d
if(typeof q!=="number")return q.l()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.l()
if(typeof k!=="number")return H.o(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.l()
if(typeof i!=="number")return H.o(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.o(g)
f=this.Q
if(typeof f!=="number")return f.l()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.o(d)
c=this.ch
if(typeof c!=="number")return c.l()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.l.$2(a2,0))return V.aK()
a3=1/a2
a4=-w
a5=-i
return V.at((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
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
return V.at(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cp:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.G(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
b2:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(typeof t!=="number")return H.o(t)
s=this.e
if(typeof s!=="number")return s.l()
r=this.f
if(typeof r!=="number")return r.l()
q=this.r
if(typeof q!=="number")return q.l()
p=this.x
if(typeof p!=="number")return H.o(p)
o=this.y
if(typeof o!=="number")return o.l()
n=this.z
if(typeof n!=="number")return n.l()
m=this.Q
if(typeof m!=="number")return m.l()
l=this.ch
if(typeof l!=="number")return H.o(l)
return new V.ac(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ab))return!1
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
dB:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.w]
y=V.b6(H.b([this.a,this.e,this.y,this.cx],z),b,c)
x=V.b6(H.b([this.b,this.f,this.z,this.cy],z),b,c)
w=V.b6(H.b([this.c,this.r,this.Q,this.db],z),b,c)
v=V.b6(H.b([this.d,this.x,this.ch,this.dx],z),b,c)
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
v:function(a){return this.dB(a,3,0)},
F:function(){return this.dB("",3,0)},
p:{
at:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ab(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aK:function(){return V.at(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
cQ:function(a,b,c){return V.at(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
hv:function(a,b,c,d){return V.at(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
cP:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.at(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
e2:function(a,b,c,d){return V.e1(new V.ac(0,0,0),new V.G(0,1,0),new V.G(a,b,c))},
e1:function(a,b,c){var z,y,x,w,v
z=c.u(0,Math.sqrt(c.A(c)))
y=b.aR(z)
x=y.u(0,Math.sqrt(y.A(y)))
w=z.aR(x)
v=new V.G(a.a,a.b,a.c)
return V.at(x.a,w.a,z.a,x.H(0).A(v),x.b,w.b,z.b,w.H(0).A(v),x.c,w.c,z.c,z.H(0).A(v),0,0,0,1)}}},
P:{"^":"a;a,b",
E:function(a,b){return new V.P(this.a-b.a,this.b-b.b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.P))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}},
ac:{"^":"a;a,b,c",
E:function(a,b){return new V.ac(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ac))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}},
bp:{"^":"a;a,b,c,d",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bp))return!1
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
cV:{"^":"a;a,b,c,d",
ga2:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cV))return!1
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
p:{
ce:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cV(a,b,c,d)}}},
Q:{"^":"a;a,b",
h4:[function(a){return Math.sqrt(this.A(this))},"$0","gk",1,0,18],
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
return new V.Q(z*b,y*b)},
u:function(a,b){var z,y
if($.l.$2(b,0))return new V.Q(0,0)
z=this.a
if(typeof z!=="number")return z.u()
y=this.b
if(typeof y!=="number")return y.u()
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
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}},
G:{"^":"a;a,b,c",
h4:[function(a){return Math.sqrt(this.A(this))},"$0","gk",1,0,18],
A:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cg:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.G(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aR:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.G(z*y-x*w,x*v-u*y,u*w-z*v)},
D:function(a,b){return new V.G(this.a+b.a,this.b+b.b,this.c+b.c)},
H:function(a){return new V.G(-this.a,-this.b,-this.c)},
u:function(a,b){if($.l.$2(b,0))return new V.G(0,0,0)
return new V.G(this.a/b,this.b/b,this.c/b)},
dD:function(){if(!$.l.$2(0,this.a))return!1
if(!$.l.$2(0,this.b))return!1
if(!$.l.$2(0,this.c))return!1
return!0},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.G))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}}],["","",,U,{"^":"",fD:{"^":"dy;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bz:function(a){var z=V.l7(a,this.c,this.b)
return z},
gn:function(){var z=this.y
if(z==null){z=D.E()
this.y=z}return z},
J:function(a){var z=this.y
if(!(z==null))z.t(a)},
scq:function(a,b){},
sci:function(a){var z,y
z=this.b
if(!$.l.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bz(z)}z=new D.B("maximumLocation",y,this.b,this,[P.w])
z.b=!0
this.J(z)}},
sck:function(a){var z,y
z=this.c
if(!$.l.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bz(z)}z=new D.B("minimumLocation",y,this.c,this,[P.w])
z.b=!0
this.J(z)}},
sa1:function(a,b){var z,y
b=this.bz(b)
z=this.d
if(!$.l.$2(z,b)){y=this.d
this.d=b
z=new D.B("location",y,b,this,[P.w])
z.b=!0
this.J(z)}},
scj:function(a){var z,y,x
z=this.e
if(!$.l.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.B("maximumVelocity",y,a,this,[P.w])
z.b=!0
this.J(z)}},
sM:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.l.$2(z,a)){x=this.f
this.f=a
z=new D.B("velocity",x,a,this,[P.w])
z.b=!0
this.J(z)}},
sc3:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.l.$2(z,a)){y=this.x
this.x=a
z=new D.B("dampening",y,a,this,[P.w])
z.b=!0
this.J(z)}},
ae:function(a,b){var z,y,x,w
z=this.f
if($.l.$2(z,0)){z=this.r
z=!$.l.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa1(0,this.d+y*b)
z=this.x
if(!$.l.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sM(y)}},
p:{
cB:function(){var z=new U.fD()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},cC:{"^":"a0;0a,0b",
gn:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
sI:function(a,b){var z,y,x
if(b==null)b=V.aK()
if(!J.O(this.a,b)){z=this.a
this.a=b
y=new D.B("matrix",z,b,this,[V.ab])
y.b=!0
x=this.b
if(!(x==null))x.t(y)}},
aK:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cC))return!1
return J.O(this.a,b.a)},
i:function(a){return"Constant: "+this.a.v("          ")},
p:{
bL:function(a){var z=new U.cC()
z.sI(0,a)
return z}}},dM:{"^":"ah;0e,0f,0r,0a,0b,0c,0d",
gn:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
J:[function(a){var z
H.j(a,"$isu")
z=this.e
if(!(z==null))z.t(a)},function(){return this.J(null)},"a9","$1","$0","gax",0,2,0],
hF:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.a0
H.v(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gax(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){s=t.gn()
s.toString
H.k(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.bN(a,b,this,[z])
z.b=!0
this.J(z)},"$2","ge8",8,0,19],
hG:[function(a,b){var z,y,x,w,v
z=U.a0
H.v(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gax(),w=0;w<b.length;b.length===y||(0,H.x)(b),++w){v=b[w]
if(v!=null)v.gn().L(0,x)}z=new D.bO(a,b,this,[z])
z.b=!0
this.J(z)},"$2","ge9",8,0,19],
aK:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.a7()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.af(z,z.length,0,[H.y(z,0)]),x=null;z.B();){y=z.d
if(y!=null){w=y.aK(0,b,c)
if(w!=null)x=x==null?w:w.l(0,x)}}this.f=x==null?V.aK():x
z=this.e
if(!(z==null))z.at(0)}return this.f},
q:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dM))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.h(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.h(w,y)
if(!J.O(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asc:function(){return[U.a0]},
$asah:function(){return[U.a0]},
$isa0:1,
p:{
cF:function(a){var z=new U.dM()
z.by(U.a0)
z.aL(z.ge8(),z.ge9())
if(a!=null)z.aO(0,a)
z.e=null
z.f=V.aK()
z.r=0
return z}}},a0:{"^":"dy;"},iS:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gn:function(){var z=this.cy
if(z==null){z=D.E()
this.cy=z}return z},
J:[function(a){var z
H.j(a,"$isu")
z=this.cy
if(!(z==null))z.t(a)},function(){return this.J(null)},"a9","$1","$0","gax",0,2,0],
aP:function(a){if(this.a!=null)return!1
this.a=a
a.c.gda().h(0,this.gbJ())
this.a.c.gdG().h(0,this.gbK())
this.a.c.gbt().h(0,this.gbL())
return!0},
ew:[function(a){H.j(a,"$isu")
if(!J.O(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbJ",4,0,1],
ex:[function(a){var z,y,x,w,v,u,t
a=H.d(H.j(a,"$isu"),"$isbm")
if(!this.y)return
if(this.x){z=a.d.E(0,a.y)
z=new V.Q(z.a,z.b)
z=z.A(z)
y=this.r
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.E(0,a.y)
z=new V.Q(y.a,y.b).l(0,2).u(0,z.ga2())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.l()
x=this.e
if(typeof x!=="number")return H.o(x)
y.sM(z*10*x)}else{z=a.c
y=a.d
x=y.E(0,a.y)
w=new V.Q(x.a,x.b).l(0,2).u(0,z.ga2())
x=this.b
v=w.a
if(typeof v!=="number")return v.H()
u=this.e
if(typeof u!=="number")return H.o(u)
t=this.z
if(typeof t!=="number")return H.o(t)
x.sa1(0,-v*u+t)
this.b.sM(0)
y=y.E(0,a.z)
this.Q=new V.Q(y.a,y.b).l(0,2).u(0,z.ga2())}this.a9()},"$1","gbK",4,0,1],
ey:[function(a){var z,y,x
H.j(a,"$isu")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.A(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.l()
x=this.e
if(typeof x!=="number")return H.o(x)
z.sM(y*10*x)
this.a9()}},"$1","gbL",4,0,1],
aK:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.a7()
if(z<y){this.ch=y
x=b.y
this.b.ae(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.at(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa0:1},iT:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gn:function(){var z=this.fx
if(z==null){z=D.E()
this.fx=z}return z},
J:[function(a){var z
H.j(a,"$isu")
z=this.fx
if(!(z==null))z.t(a)},function(){return this.J(null)},"a9","$1","$0","gax",0,2,0],
aP:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gda().h(0,this.gbJ())
this.a.c.gdG().h(0,this.gbK())
this.a.c.gbt().h(0,this.gbL())
z=this.a.d
y=z.f
if(y==null){y=D.E()
z.f=y
z=y}else z=y
z.h(0,this.ges())
z=this.a.d
y=z.d
if(y==null){y=D.E()
z.d=y
z=y}else z=y
z.h(0,this.geu())
z=this.a.e
y=z.b
if(y==null){y=D.E()
z.b=y
z=y}else z=y
z.h(0,this.gfh())
z=this.a.e
y=z.d
if(y==null){y=D.E()
z.d=y
z=y}else z=y
z.h(0,this.gfg())
z=this.a.e
y=z.c
if(y==null){y=D.E()
z.c=y
z=y}else z=y
z.h(0,this.gff())
return!0},
ag:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.H()
z=-z}if(this.r){if(typeof y!=="number")return y.H()
y=-y}return new V.Q(z,y)},
ew:[function(a){a=H.d(H.j(a,"$isu"),"$isbm")
if(!J.O(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbJ",4,0,1],
ex:[function(a){var z,y,x,w,v,u,t
a=H.d(H.j(a,"$isu"),"$isbm")
if(!this.cx)return
if(this.ch){z=a.d.E(0,a.y)
z=new V.Q(z.a,z.b)
z=z.A(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.E(0,a.y)
z=this.ag(new V.Q(y.a,y.b).l(0,2).u(0,z.ga2()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.H()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sM(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.H()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sM(-z*10*y)}else{z=a.c
y=a.d
x=y.E(0,a.y)
w=this.ag(new V.Q(x.a,x.b).l(0,2).u(0,z.ga2()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa1(0,-u*v+x)
this.b.sM(0)
this.c.sM(0)
y=y.E(0,a.z)
this.dx=this.ag(new V.Q(y.a,y.b).l(0,2).u(0,z.ga2()))}this.a9()},"$1","gbK",4,0,1],
ey:[function(a){var z,y,x
H.j(a,"$isu")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.A(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.H()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sM(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.H()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sM(-y*10*z)
this.a9()}},"$1","gbL",4,0,1],
hK:[function(a){if(H.d(H.j(a,"$isu"),"$isdX").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","ges",4,0,1],
hL:[function(a){var z,y,x,w,v,u,t
a=H.d(H.j(a,"$isu"),"$isbm")
if(!J.O(this.d,a.x.b))return
z=a.c
y=a.d
x=y.E(0,a.y)
w=this.ag(new V.Q(x.a,x.b).l(0,2).u(0,z.ga2()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa1(0,-u*v+x)
this.b.sM(0)
this.c.sM(0)
y=y.E(0,a.z)
this.dx=this.ag(new V.Q(y.a,y.b).l(0,2).u(0,z.ga2()))
this.a9()},"$1","geu",4,0,1],
ig:[function(a){H.j(a,"$isu")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfh",4,0,1],
ie:[function(a){var z,y,x,w,v,u,t
a=H.d(H.j(a,"$isu"),"$isem")
if(!this.cx)return
if(this.ch){z=a.d.E(0,a.y)
z=new V.Q(z.a,z.b)
z=z.A(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.E(0,a.y)
z=this.ag(new V.Q(y.a,y.b).l(0,2).u(0,z.ga2()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.H()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sM(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.H()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sM(-z*10*y)}else{z=a.c
y=a.d
x=y.E(0,a.y)
w=this.ag(new V.Q(x.a,x.b).l(0,2).u(0,z.ga2()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa1(0,-u*v+x)
this.b.sM(0)
this.c.sM(0)
y=y.E(0,a.z)
this.dx=this.ag(new V.Q(y.a,y.b).l(0,2).u(0,z.ga2()))}this.a9()},"$1","gfg",4,0,1],
ic:[function(a){var z,y,x
H.j(a,"$isu")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.A(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.H()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sM(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.H()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sM(-y*10*z)
this.a9()}},"$1","gff",4,0,1],
aK:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.a7()
if(z<y){this.dy=y
x=b.y
this.c.ae(0,x)
this.b.ae(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.fr=V.at(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1).l(0,V.cP(this.c.d))}return this.fr},
$isa0:1},iU:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gn:function(){var z=this.r
if(z==null){z=D.E()
this.r=z}return z},
J:function(a){var z=this.r
if(!(z==null))z.t(a)},
aP:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.E()
z.e=y
z=y}else z=y
y=this.gez()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.E()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
hM:[function(a){var z,y,x,w
H.j(a,"$isu")
if(!J.O(this.b,this.a.b.c))return
H.d(a,"$iscR")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.l()
w=z+y*x
if(z!==w){this.d=w
z=new D.B("zoom",z,w,this,[P.w])
z.b=!0
this.J(z)}},"$1","gez",4,0,1],
aK:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.hv(x,x,x,1)}return this.f},
$isa0:1}}],["","",,M,{"^":"",fF:{"^":"a;0a,0b,0c,0d,0e,0f",
gn:function(){var z=this.f
if(z==null){z=D.E()
this.f=z}return z},
T:[function(a){var z
H.j(a,"$isu")
z=this.f
if(!(z==null))z.t(a)},function(){return this.T(null)},"cF","$1","$0","gN",0,2,0],
saQ:function(a){var z,y
if(a==null)a=new X.h_()
z=this.a
if(z!==a){if(z!=null)z.gn().L(0,this.gN())
y=this.a
this.a=a
a.gn().h(0,this.gN())
z=new D.B("camera",y,this.a,this,[X.c0])
z.b=!0
this.T(z)}},
saX:function(a,b){var z,y
if(b==null)b=X.cD(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gn().L(0,this.gN())
y=this.b
this.b=b
b.gn().h(0,this.gN())
z=new D.B("target",y,this.b,this,[X.cg])
z.b=!0
this.T(z)}},
saY:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gn().L(0,this.gN())
y=this.c
this.c=a
if(a!=null)a.gn().h(0,this.gN())
z=new D.B("technique",y,this.c,this,[O.bU])
z.b=!0
this.T(z)}},
a0:function(a){a.cn(this.c)
this.b.U(a)
this.a.U(a)
this.d.ae(0,a)
this.d.a0(a)
this.a.au(a)
this.b.toString
a.cm()},
$isaY:1,
$iscf:1},fS:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
T:[function(a){var z
H.j(a,"$isu")
z=this.x
if(!(z==null))z.t(a)},function(){return this.T(null)},"cF","$1","$0","gN",0,2,0],
hS:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.aA
H.v(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gN(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.gY()==null){s=new D.aT()
s.d=0
t.sY(s)}s=t.gY()
s.toString
H.k(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.bN(a,b,this,[z])
z.b=!0
this.T(z)},"$2","geF",8,0,8],
hT:[function(a,b){var z,y,x,w,v,u
z=E.aA
H.v(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gN(),w=0;w<b.length;b.length===y||(0,H.x)(b),++w){v=b[w]
if(v!=null){if(v.gY()==null){u=new D.aT()
u.d=0
v.sY(u)}v.gY().L(0,x)}}z=new D.bO(a,b,this,[z])
z.b=!0
this.T(z)},"$2","geG",8,0,8],
saQ:function(a){var z,y
if(a==null)a=X.cT(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null)z.gn().L(0,this.gN())
y=this.a
this.a=a
a.gn().h(0,this.gN())
z=new D.B("camera",y,this.a,this,[X.c0])
z.b=!0
this.T(z)}},
saX:function(a,b){var z,y
if(b==null)b=X.cD(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gn().L(0,this.gN())
y=this.b
this.b=b
b.gn().h(0,this.gN())
z=new D.B("target",y,this.b,this,[X.cg])
z.b=!0
this.T(z)}},
saY:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gn().L(0,this.gN())
y=this.c
this.c=a
if(a!=null)a.gn().h(0,this.gN())
z=new D.B("technique",y,this.c,this,[O.bU])
z.b=!0
this.T(z)}},
gn:function(){var z=this.x
if(z==null){z=D.E()
this.x=z}return z},
a0:function(a){var z
a.cn(this.c)
this.b.U(a)
this.a.U(a)
z=this.c
if(z!=null)z.ae(0,a)
for(z=this.d.a,z=new J.af(z,z.length,0,[H.y(z,0)]);z.B();)z.d.ae(0,a)
for(z=this.d.a,z=new J.af(z,z.length,0,[H.y(z,0)]);z.B();)z.d.a0(a)
this.a.toString
a.cy.as()
a.db.as()
this.b.toString
a.cm()},
$isaY:1,
$iscf:1},aY:{"^":"cf;"},cf:{"^":"a;"},ij:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gn:function(){var z=this.cy
if(z==null){z=D.E()
this.cy=z}return z},
T:[function(a){var z
H.j(a,"$isu")
z=this.cy
if(!(z==null))z.t(a)},function(){return this.T(null)},"cF","$1","$0","gN",0,2,0],
hO:[function(a,b){var z,y,x,w,v,u,t,s,r
z=M.aY
H.v(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gN(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){s=t.gn()
s.toString
H.k(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.bN(a,b,this,[z])
z.b=!0
this.T(z)},"$2","geB",8,0,20],
i7:[function(a,b){var z,y,x,w,v
z=M.aY
H.v(b,"$isc",[z],"$asc")
for(y=b.length,x=this.gN(),w=0;w<b.length;b.length===y||(0,H.x)(b),++w){v=b[w]
if(v!=null)v.gn().L(0,x)}z=new D.bO(a,b,this,[z])
z.b=!0
this.T(z)},"$2","geX",8,0,20],
a0:function(a){var z,y
this.y.sdL(0,this.r)
for(z=this.z.a,z=new J.af(z,z.length,0,[H.y(z,0)]);z.B();){y=z.d
y.saX(0,this.y)
y.saQ(this.e)
y.a0(a)}this.y.sdL(0,this.x)
for(z=this.z.a,z=new J.af(z,z.length,0,[H.y(z,0)]);z.B();){y=z.d
y.saX(0,this.y)
y.saQ(this.f)
y.a0(a)}},
$iscf:1}}],["","",,A,{"^":"",ds:{"^":"a;a,b,c"},ft:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fW:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
d9:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},e_:{"^":"cX;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0ai,0ab,0bb,0dc,0bc,0bd,0dd,0de,0be,0bf,0df,0dg,0bg,0bh,0dh,0di,0bi,0dj,0dk,0bj,0dl,0dm,0bk,0bl,0bm,0dn,0dq,0bn,0bo,0dr,0ds,0bp,0dt,0c6,0du,0c7,0dv,0c8,0dw,0c9,0dz,0ca,0dA,0cb,a,b,0c,0d,0e,0f,0r,0x,0y",
e0:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.z=a1
z=new P.bT("")
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
a1.fk(z)
a1.fs(z)
a1.fl(z)
a1.fC(z)
a1.fD(z)
a1.fu(z)
a1.fH(z)
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
z=new P.bT("")
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
v.fo(z)
v.fj(z)
v.fm(z)
v.fp(z)
v.fA(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.fw(z)
v.fz(z)}v.ft(z)
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
p=H.b([],[P.m])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.w(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.fn(z)
v.fv(z)
v.fB(z)
v.fE(z)
v.fF(z)
v.fG(z)
v.fq(z)}r=z.a+="// === Main ===\n"
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
o=H.b([],[P.m])
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
this.dC(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a1.fr)this.id=H.d(this.y.m(0,"invViewMat"),"$isay")
if(y)this.dy=H.d(this.y.m(0,"objMat"),"$isay")
if(w)this.fr=H.d(this.y.m(0,"viewObjMat"),"$isay")
this.fy=H.d(this.y.m(0,"projViewObjMat"),"$isay")
if(a1.x2)this.k1=H.d(this.y.m(0,"txt2DMat"),"$isd5")
if(a1.y1)this.k2=H.d(this.y.m(0,"txtCubeMat"),"$isay")
if(a1.y2)this.k3=H.d(this.y.m(0,"colorMat"),"$isay")
this.r1=H.b([],[A.ay])
y=a1.ai
if(y>0){this.k4=H.j(this.y.m(0,"bendMatCount"),"$isH")
for(m=0;m<y;++m){x=this.r1
w=this.y
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.q(P.p("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.d(l,"$isay"))}}y=a1.a
if(y!==C.b){this.r2=H.d(this.y.m(0,"emissionClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.rx=H.d(this.y.m(0,"emissionTxt"),"$isak")
this.x1=H.d(this.y.m(0,"nullEmissionTxt"),"$isH")
break
case C.c:this.ry=H.d(this.y.m(0,"emissionTxt"),"$isad")
this.x1=H.d(this.y.m(0,"nullEmissionTxt"),"$isH")
break}}y=a1.b
if(y!==C.b){this.x2=H.d(this.y.m(0,"ambientClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.y1=H.d(this.y.m(0,"ambientTxt"),"$isak")
this.ai=H.d(this.y.m(0,"nullAmbientTxt"),"$isH")
break
case C.c:this.y2=H.d(this.y.m(0,"ambientTxt"),"$isad")
this.ai=H.d(this.y.m(0,"nullAmbientTxt"),"$isH")
break}}y=a1.c
if(y!==C.b){this.ab=H.d(this.y.m(0,"diffuseClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.bb=H.d(this.y.m(0,"diffuseTxt"),"$isak")
this.bc=H.d(this.y.m(0,"nullDiffuseTxt"),"$isH")
break
case C.c:this.dc=H.d(this.y.m(0,"diffuseTxt"),"$isad")
this.bc=H.d(this.y.m(0,"nullDiffuseTxt"),"$isH")
break}}y=a1.d
if(y!==C.b){this.bd=H.d(this.y.m(0,"invDiffuseClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.dd=H.d(this.y.m(0,"invDiffuseTxt"),"$isak")
this.be=H.d(this.y.m(0,"nullInvDiffuseTxt"),"$isH")
break
case C.c:this.de=H.d(this.y.m(0,"invDiffuseTxt"),"$isad")
this.be=H.d(this.y.m(0,"nullInvDiffuseTxt"),"$isH")
break}}y=a1.e
if(y!==C.b){this.bh=H.d(this.y.m(0,"shininess"),"$isR")
this.bf=H.d(this.y.m(0,"specularClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.df=H.d(this.y.m(0,"specularTxt"),"$isak")
this.bg=H.d(this.y.m(0,"nullSpecularTxt"),"$isH")
break
case C.c:this.dg=H.d(this.y.m(0,"specularTxt"),"$isad")
this.bg=H.d(this.y.m(0,"nullSpecularTxt"),"$isH")
break}}switch(a1.f){case C.b:break
case C.e:break
case C.d:this.dh=H.d(this.y.m(0,"bumpTxt"),"$isak")
this.bi=H.d(this.y.m(0,"nullBumpTxt"),"$isH")
break
case C.c:this.di=H.d(this.y.m(0,"bumpTxt"),"$isad")
this.bi=H.d(this.y.m(0,"nullBumpTxt"),"$isH")
break}if(a1.dy){this.dj=H.d(this.y.m(0,"envSampler"),"$isad")
this.dk=H.d(this.y.m(0,"nullEnvTxt"),"$isH")
y=a1.r
if(y!==C.b){this.bj=H.d(this.y.m(0,"reflectClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.dl=H.d(this.y.m(0,"reflectTxt"),"$isak")
this.bk=H.d(this.y.m(0,"nullReflectTxt"),"$isH")
break
case C.c:this.dm=H.d(this.y.m(0,"reflectTxt"),"$isad")
this.bk=H.d(this.y.m(0,"nullReflectTxt"),"$isH")
break}}y=a1.x
if(y!==C.b){this.bl=H.d(this.y.m(0,"refraction"),"$isR")
this.bm=H.d(this.y.m(0,"refractClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.dn=H.d(this.y.m(0,"refractTxt"),"$isak")
this.bn=H.d(this.y.m(0,"nullRefractTxt"),"$isH")
break
case C.c:this.dq=H.d(this.y.m(0,"refractTxt"),"$isad")
this.bn=H.d(this.y.m(0,"nullRefractTxt"),"$isH")
break}}}y=a1.y
if(y!==C.b){this.bo=H.d(this.y.m(0,"alpha"),"$isR")
switch(y){case C.b:break
case C.e:break
case C.d:this.dr=H.d(this.y.m(0,"alphaTxt"),"$isak")
this.bp=H.d(this.y.m(0,"nullAlphaTxt"),"$isH")
break
case C.c:this.ds=H.d(this.y.m(0,"alphaTxt"),"$isad")
this.bp=H.d(this.y.m(0,"nullAlphaTxt"),"$isH")
break}}this.c6=H.b([],[A.ez])
this.c7=H.b([],[A.eA])
this.c8=H.b([],[A.eB])
this.c9=H.b([],[A.eC])
this.ca=H.b([],[A.eD])
this.cb=H.b([],[A.eE])
if(a1.k2){y=a1.z
if(y>0){this.dt=H.j(this.y.m(0,"dirLightCount"),"$isH")
for(m=0;m<y;++m){x=this.y
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isF")
x=this.y
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isF")
x=this.c6;(x&&C.a).h(x,new A.ez(m,l,k))}}y=a1.Q
if(y>0){this.du=H.j(this.y.m(0,"pntLightCount"),"$isH")
for(m=0;m<y;++m){x=this.y
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isF")
x=this.y
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isF")
x=this.y
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isF")
x=this.y
w="pntLights["+m+"].att0"
i=x.j(0,w)
if(i==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isR")
x=this.y
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isR")
x=this.y
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isR")
x=this.c7;(x&&C.a).h(x,new A.eA(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.dv=H.j(this.y.m(0,"spotLightCount"),"$isH")
for(m=0;m<y;++m){x=this.y
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isF")
x=this.y
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isF")
x=this.y
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isF")
x=this.y
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isF")
x=this.y
w="spotLights["+m+"].cutoff"
h=x.j(0,w)
if(h==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isR")
x=this.y
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isR")
x=this.y
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isR")
x=this.y
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isR")
x=this.y
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isR")
x=this.c8;(x&&C.a).h(x,new A.eB(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.dw=H.j(this.y.m(0,"txtDirLightCount"),"$isH")
for(m=0;m<y;++m){x=this.y
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isF")
x=this.y
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isF")
x=this.y
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isF")
x=this.y
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isF")
x=this.y
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isF")
x=this.y
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isH")
x=this.y
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isak")
x=this.c9;(x&&C.a).h(x,new A.eC(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.dz=H.j(this.y.m(0,"txtPntLightCount"),"$isH")
for(m=0;m<y;++m){x=this.y
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isF")
x=this.y
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isF")
x=this.y
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isd5")
x=this.y
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isF")
x=this.y
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isH")
x=this.y
w="txtPntLights["+m+"].att0"
g=x.j(0,w)
if(g==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isR")
x=this.y
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isR")
x=this.y
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isR")
x=this.y
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isad")
x=this.ca;(x&&C.a).h(x,new A.eD(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.dA=H.j(this.y.m(0,"txtSpotLightCount"),"$isH")
for(m=0;m<y;++m){x=this.y
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isF")
x=this.y
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isF")
x=this.y
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isF")
x=this.y
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isF")
x=this.y
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isF")
x=this.y
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isH")
x=this.y
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isF")
x=this.y
w="txtSpotLights["+m+"].tuScalar"
e=x.j(0,w)
if(e==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isR")
x=this.y
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isR")
x=this.y
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(c,"$isR")
x=this.y
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(b,"$isR")
x=this.y
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a,"$isR")
x=this.y
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.q(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a0,"$isak")
x=this.cb;(x&&C.a).h(x,new A.eE(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
aa:function(a,b,c){b.a.uniform1i(b.d,1)},
a4:function(a,b,c){if(c==null||c.d<6)b.a.uniform1i(b.d,1)
else{a.cv(c)
b.a.uniform1i(b.d,0)}},
p:{
ho:function(a,b){var z,y
z=a.ab
y=new A.e_(b,z)
y.cD(b,z)
y.e0(a,b)
return y}}},hr:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,ai,ab,bb",
fk:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.ai+"];\n"
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
fs:function(a){var z
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
fl:function(a){var z
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
fC:function(a){var z,y
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
fD:function(a){var z,y
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
fu:function(a){var z
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
fH:function(a){var z
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
if(b===C.e)return
if(0>=c.length)return H.h(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.h.cA(c,1))+"Txt;\n"
a.a=z
if(b===C.d)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.c)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fo:function(a){var z,y
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
fj:function(a){var z,y
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
fm:function(a){var z,y
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
fp:function(a){var z,y
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
fA:function(a){var z,y
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
ft:function(a){var z,y
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
fw:function(a){var z,y
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
fz:function(a){var z,y
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
fn:function(a){var z,y
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
fv:function(a){var z,y
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
fB:function(a){var z,y
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
fE:function(a){var z,y,x
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
fF:function(a){var z,y,x
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
fG:function(a){var z,y,x
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
fq:function(a){var z
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
i:function(a){return this.ab}},ez:{"^":"a;a,b,c"},eC:{"^":"a;a,b,c,d,e,f,r,x"},eA:{"^":"a;a,b,c,d,e,f,r"},eD:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eB:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eE:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cX:{"^":"cu;",
cD:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dC:function(a,b,c){var z,y,x
this.c=b
this.d=c
this.e=this.cP(b,35633)
this.f=this.cP(this.d,35632)
z=this.a
y=z.createProgram()
this.r=y
z.attachShader(y,this.e)
z.attachShader(this.r,this.f)
z.linkProgram(this.r)
if(!H.fa(z.getProgramParameter(this.r,35714))){x=z.getProgramInfoLog(this.r)
z.deleteProgram(this.r)
H.q(P.p("Failed to link shader: "+H.i(x)))}this.fa()
this.fc()},
U:function(a){a.a.useProgram(this.r)
this.x.fW()},
cP:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fa(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.f(P.p("Error compiling shader '"+H.i(y)+"': "+H.i(x)))}return y},
fa:function(){var z,y,x,w,v,u
z=H.b([],[A.ds])
y=this.a
x=H.Y(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.ds(y,v.name,u))}this.x=new A.ft(z)},
fc:function(){var z,y,x,w,v,u
z=H.b([],[A.a3])
y=this.a
x=H.Y(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.fS(v.type,v.size,v.name,u))}this.y=new A.iK(z)},
az:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.H(z,y,b,c)
else return A.d4(z,y,b,a,c)},
em:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ak(z,y,b,c)
else return A.d4(z,y,b,a,c)},
en:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ad(z,y,b,c)
else return A.d4(z,y,b,a,c)},
b8:function(a,b){return new P.eN(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
fS:function(a,b,c,d){switch(a){case 5120:return this.az(b,c,d)
case 5121:return this.az(b,c,d)
case 5122:return this.az(b,c,d)
case 5123:return this.az(b,c,d)
case 5124:return this.az(b,c,d)
case 5125:return this.az(b,c,d)
case 5126:return new A.R(this.a,this.r,c,d)
case 35664:return new A.iF(this.a,this.r,c,d)
case 35665:return new A.F(this.a,this.r,c,d)
case 35666:return new A.iI(this.a,this.r,c,d)
case 35667:return new A.iG(this.a,this.r,c,d)
case 35668:return new A.iH(this.a,this.r,c,d)
case 35669:return new A.iJ(this.a,this.r,c,d)
case 35674:return new A.iM(this.a,this.r,c,d)
case 35675:return new A.d5(this.a,this.r,c,d)
case 35676:return new A.ay(this.a,this.r,c,d)
case 35678:return this.em(b,c,d)
case 35680:return this.en(b,c,d)
case 35670:throw H.f(this.b8("BOOL",c))
case 35671:throw H.f(this.b8("BOOL_VEC2",c))
case 35672:throw H.f(this.b8("BOOL_VEC3",c))
case 35673:throw H.f(this.b8("BOOL_VEC4",c))
default:throw H.f(P.p("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}},c2:{"^":"a;a,b",
i:function(a){return this.b}},eb:{"^":"cX;0z,0Q,0ch,0cx,0cy,0db,a,b,0c,0d,0e,0f,0r,0x,0y"},a3:{"^":"a;"},iK:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.j(0,b)
if(z==null)throw H.f(P.p("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.F()},
fY:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w)x+=z[w].i(0)+a
return x},
F:function(){return this.fY("\n")}},H:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform1i: "+H.i(this.c)}},iG:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform2i: "+H.i(this.c)}},iH:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform3i: "+H.i(this.c)}},iJ:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform4i: "+H.i(this.c)}},iE:{"^":"a3;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.i(this.c)},
p:{
d4:function(a,b,c,d,e){var z=new A.iE(a,b,c,e)
z.f=d
z.e=P.hg(d,0,!1,P.C)
return z}}},R:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform1f: "+H.i(this.c)}},iF:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform2f: "+H.i(this.c)}},F:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform3f: "+H.i(this.c)}},iI:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform4f: "+H.i(this.c)}},iM:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}},d5:{"^":"a3;a,b,c,d",
a8:function(a){var z=new Float32Array(H.bD(H.v(a,"$ise",[P.w],"$ase")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.i(this.c)}},ay:{"^":"a3;a,b,c,d",
a8:function(a){var z=new Float32Array(H.bD(H.v(a,"$ise",[P.w],"$ase")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.i(this.c)}},ak:{"^":"a3;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.i(this.c)}},ad:{"^":"a3;a,b,c,d",
cv:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}}],["","",,F,{"^":"",
cl:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bC:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.G(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.G(t+h,s+f,r+g)
z.b=q
p=new V.G(t-h,s-f,r-g)
z.c=p
o=new V.G(y-h,w-f,v-g)
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
j=F.l4(d,e,new F.kr(z,F.cl(z.c),F.cl(z.d),k,l,c),b)
if(j!=null)a.h9(j)},
l4:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.k(c,{func:1,ret:-1,args:[F.aB,P.w,P.w]})
if(a<1)return
if(b<1)return
z=F.cY()
y=H.b([],[F.aB])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.ci(null,null,new V.aJ(u,0,0,1),null,null,new V.P(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.c2(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.ci(null,null,new V.aJ(o,n,m,1),null,null,new V.P(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.c2(d))}}z.d.fJ(a+1,b+1,y)
return z},
kr:{"^":"t:35;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cg(z.b,b).cg(z.d.cg(z.c,b),c)
z=new V.ac(y.a,y.b,y.c)
if(!J.O(a.f,z)){a.f=z
z=a.a
if(z!=null)z.a_()}a.sb_(y.u(0,Math.sqrt(y.A(y))))
z=1-b
x=1-c
x=new V.bp(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.O(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.a_()}}},
ai:{"^":"a;0a,0b,0c,0d,0e",
gc5:function(){return this.a==null||this.b==null||this.c==null},
eg:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.G(0,0,0)
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.dD())return
return v.u(0,Math.sqrt(v.A(v)))},
ej:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.E(0,y)
z=new V.G(z.a,z.b,z.c)
v=z.u(0,Math.sqrt(z.A(z)))
z=w.E(0,y)
z=new V.G(z.a,z.b,z.c)
z=v.aR(z.u(0,Math.sqrt(z.A(z))))
return z.u(0,Math.sqrt(z.A(z)))},
c0:function(){if(this.d!=null)return!0
var z=this.eg()
if(z==null){z=this.ej()
if(z==null)return!1}this.d=z
this.a.a.a_()
return!0},
ef:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.G(0,0,0)
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.dD())return
return v.u(0,Math.sqrt(v.A(v)))},
ei:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
z=new V.G(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.A(z)))
if(o.a-p.a<0)m=m.H(0)}else{l=(z-q.b)/n
z=r.E(0,u)
z=new V.ac(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).E(0,x)
z=new V.G(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.A(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.H(0)}z=this.d
if(z!=null){k=z.u(0,Math.sqrt(z.A(z)))
z=k.aR(m)
z=z.u(0,Math.sqrt(z.A(z))).aR(k)
m=z.u(0,Math.sqrt(z.A(z)))}return m},
bZ:function(){if(this.e!=null)return!0
var z=this.ef()
if(z==null){z=this.ei()
if(z==null)return!1}this.e=z
this.a.a.a_()
return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
v:function(a){var z,y
if(this.gc5())return a+"disposed"
z=a+C.h.a6(J.a5(this.a.e),0)+", "+C.h.a6(J.a5(this.b.e),0)+", "+C.h.a6(J.a5(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
F:function(){return this.v("")},
p:{
be:function(a,b,c){var z,y,x
z=new F.ai()
y=a.a
if(y==null)H.q(P.p("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.q(P.p("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.a_()
return z}}},
cM:{"^":"a;0a,0b",
gc5:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
v:function(a){if(this.gc5())return a+"disposed"
return a+C.h.a6(J.a5(this.a.e),0)+", "+C.h.a6(J.a5(this.b.e),0)},
F:function(){return this.v("")},
p:{
ha:function(a,b){var z,y,x
z=new F.cM()
y=a.a
if(y==null)H.q(P.p("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.q(P.p("May not create a line with vertices attached to different shapes."))
z.a=a
C.a.h(a.c.b,z)
z.b=b
C.a.h(b.c.c,z)
C.a.h(z.a.a.c.b,z)
z.a.a.a_()
return z}}},
cU:{"^":"a;0a",
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
v:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.h.a6(J.a5(z.e),0)},
F:function(){return this.v("")}},
ea:{"^":"a;0a,0b,0c,0d,0e",
gn:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
h9:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.W()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){v=z[w]
this.a.h(0,v.fR())}this.a.W()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.W()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.cU()
if(r.a==null)H.q(P.p("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.t(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.W()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.W()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.h(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
F.ha(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.W()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.W()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.h(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.W()
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
F.be(p,o,m)}z=this.e
if(!(z==null))z.at(0)},
ap:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.ap()||!1
if(!this.a.ap())y=!1
z=this.e
if(!(z==null))z.at(0)
return y},
d4:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$ar()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aE().a)!==0)++w
if((x&$.$get$aD().a)!==0)++w
if((x&$.$get$aF().a)!==0)++w
if((x&$.$get$aG().a)!==0)++w
if((x&$.$get$by().a)!==0)++w
if((x&$.$get$bz().a)!==0)++w
if((x&$.$get$b1().a)!==0)++w
if((x&$.$get$aC().a)!==0)++w
v=b.gcz(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.w
t=H.b(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.b(y,[Z.dv])
for(r=0,q=0;q<w;++q){p=b.fL(q)
o=p.gcz(p)
C.a.S(s,q,new Z.dv(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.h(y,n)
m=y[n].h5(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.S(t,l,m[k]);++l}}r+=o}H.v(t,"$ise",[x],"$ase")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bD(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cx(new Z.eK(34962,j),s,b)
i.b=H.b([],[Z.c8])
if(this.b.b.length!==0){x=P.C
h=H.b([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.W()
C.a.h(h,g.e)}f=Z.d7(y,34963,H.v(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.c8(0,h.length,f))}if(this.c.b.length!==0){x=P.C
h=H.b([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.W()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.W()
C.a.h(h,g.e)}f=Z.d7(y,34963,H.v(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.c8(1,h.length,f))}if(this.d.b.length!==0){x=P.C
h=H.b([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.W()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.W()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].c
g.a.a.W()
C.a.h(h,g.e)}f=Z.d7(y,34963,H.v(h,"$ise",[x],"$ase"))
C.a.h(i.b,new Z.c8(4,h.length,f))}return i},
i:function(a){var z=H.b([],[P.m])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.v("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.v("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.v("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.v("   "))}return C.a.w(z,"\n")},
ac:function(a){var z=this.e
if(!(z==null))z.t(a)},
a_:function(){return this.ac(null)},
p:{
cY:function(){var z,y
z=new F.ea()
y=new F.iX(z)
y.b=!1
y.c=H.b([],[F.aB])
z.a=y
y=new F.i7(z)
y.b=H.b([],[F.cU])
z.b=y
y=new F.i6(z)
y.b=H.b([],[F.cM])
z.c=y
y=new F.i5(z)
y.b=H.b([],[F.ai])
z.d=y
z.e=null
return z}}},
i5:{"^":"a;a,0b",
fI:function(a){var z,y,x,w,v
H.v(a,"$ise",[F.aB],"$ase")
z=H.b([],[F.ai])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.be(y,w,v))}return z},
fJ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.v(c,"$ise",[F.aB],"$ase")
z=H.b([],[F.ai])
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
C.a.h(z,F.be(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.be(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.be(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.be(q,n,r))}u=!u}w=!w}return z},
gk:function(a){return this.b.length},
ap:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].c0())x=!1
return x},
c_:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].bZ())x=!1
return x},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
F:function(){return this.v("")}},
i6:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.b([],[P.m])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.h(w,x)
C.a.h(z,w[x].v(a+(""+x+". ")))}return C.a.w(z,"\n")},
F:function(){return this.v("")}},
i7:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
F:function(){return this.v("")}},
aB:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
c2:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.ci(this.cx,x,u,z,y,w,v,a,t)},
fR:function(){return this.c2(null)},
sb_:function(a){var z
if(!J.O(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a_()}},
h5:function(a){var z,y
z=J.J(a)
if(z.q(a,$.$get$ar())){z=this.f
y=[P.w]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aE())){z=this.r
y=[P.w]
if(z==null)return H.b([0,1,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aD())){z=this.x
y=[P.w]
if(z==null)return H.b([0,0,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aF())){z=this.y
y=[P.w]
if(z==null)return H.b([0,0],y)
else return H.b([z.a,z.b],y)}else if(z.q(a,$.$get$aG())){z=this.z
y=[P.w]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$by())){z=this.Q
y=[P.w]
if(z==null)return H.b([1,1,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bz())){z=this.Q
y=[P.w]
if(z==null)return H.b([1,1,1,1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else if(z.q(a,$.$get$b1()))return H.b([this.ch],[P.w])
else if(z.q(a,$.$get$aC())){z=this.cx
y=[P.w]
if(z==null)return H.b([-1,-1,-1,-1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else return H.b([],[P.w])},
c0:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.G(0,0,0)
this.d.K(0,new F.j3(z))
z=z.a
this.r=z.u(0,Math.sqrt(z.A(z)))
z=this.a
if(z!=null){z.a_()
z=this.a.e
if(!(z==null))z.at(0)}return!0},
bZ:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.G(0,0,0)
this.d.K(0,new F.j2(z))
z=z.a
this.x=z.u(0,Math.sqrt(z.A(z)))
z=this.a
if(z!=null){z.a_()
z=this.a.e
if(!(z==null))z.at(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
v:function(a){var z,y,x
z=H.b([],[P.m])
C.a.h(z,C.h.a6(J.a5(this.e),0))
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
F:function(){return this.v("")},
p:{
ci:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aB()
y=new F.j1(z)
y.b=H.b([],[F.cU])
z.b=y
y=new F.j0(z)
x=[F.cM]
y.b=H.b([],x)
y.c=H.b([],x)
z.c=y
y=new F.iY(z)
x=[F.ai]
y.b=H.b([],x)
y.c=H.b([],x)
y.d=H.b([],x)
z.d=y
h=$.$get$eH()
z.e=0
y=$.$get$ar()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aE().a)!==0?e:null
z.x=(x&$.$get$aD().a)!==0?b:null
z.y=(x&$.$get$aF().a)!==0?f:null
z.z=(x&$.$get$aG().a)!==0?g:null
z.Q=(x&$.$get$eI().a)!==0?c:null
z.ch=(x&$.$get$b1().a)!==0?i:0
z.cx=(x&$.$get$aC().a)!==0?a:null
return z}}},
j3:{"^":"t:5;a",
$1:function(a){var z,y
H.j(a,"$isai")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
j2:{"^":"t:5;a",
$1:function(a){var z,y
H.j(a,"$isai")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
iX:{"^":"a;a,0b,0c",
W:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.h(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.f(P.p("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a_()
return!0},
fK:function(a,b,c,d,e,f,g,h,i){var z=F.ci(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
b9:function(a,b,c,d,e,f){return this.fK(a,null,b,c,null,d,e,f,0)},
gk:function(a){return this.c.length},
ap:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].c0()
return!0},
c_:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].bZ()
return!0},
fN:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.u(0,Math.sqrt(u*u+t*t+s*s))
if(!J.O(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.t(null)}}}}return!0},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
this.W()
z=H.b([],[P.m])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
F:function(){return this.v("")}},
iY:{"^":"a;a,0b,0c,0d",
gk:function(a){return this.b.length+this.c.length+this.d.length},
K:function(a,b){H.k(b,{func:1,ret:-1,args:[F.ai]})
C.a.K(this.b,b)
C.a.K(this.c,new F.iZ(this,b))
C.a.K(this.d,new F.j_(this,b))},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
F:function(){return this.v("")}},
iZ:{"^":"t:5;a,b",
$1:function(a){H.j(a,"$isai")
if(!J.O(a.a,this.a))this.b.$1(a)}},
j_:{"^":"t:5;a,b",
$1:function(a){var z
H.j(a,"$isai")
z=this.a
if(!J.O(a.a,z)&&!J.O(a.b,z))this.b.$1(a)}},
j0:{"^":"a;a,0b,0c",
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
F:function(){return this.v("")}},
j1:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
F:function(){return this.v("")}}}],["","",,O,{"^":"",hn:{"^":"bU;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gn:function(){var z=this.dy
if(z==null){z=D.E()
this.dy=z}return z},
R:[function(a){var z
H.j(a,"$isu")
z=this.dy
if(!(z==null))z.t(a)},function(){return this.R(null)},"cR","$1","$0","gaB",0,2,0],
f3:[function(a){H.j(a,"$isu")
this.a=null
this.R(a)},function(){return this.f3(null)},"ib","$1","$0","gf2",0,2,0],
hP:[function(a,b){var z=V.ab
z=new D.bN(a,H.v(b,"$isc",[z],"$asc"),this,[z])
z.b=!0
this.R(z)},"$2","geC",8,0,21],
hQ:[function(a,b){var z=V.ab
z=new D.bO(a,H.v(b,"$isc",[z],"$asc"),this,[z])
z.b=!0
this.R(z)},"$2","geD",8,0,21],
cM:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.f.Z(z.e.length+3,4)*4
x=C.f.Z(z.f.length+3,4)*4
w=C.f.Z(z.r.length+3,4)*4
v=C.f.Z(z.x.length+3,4)*4
u=C.f.Z(z.y.length+3,4)*4
t=C.f.Z(z.z.length+3,4)*4
s=C.f.Z(this.e.a.length+3,4)*4
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
a6=$.$get$ar()
if(c){z=$.$get$aE()
a6=new Z.b0(a6.a|z.a)}if(b){z=$.$get$aD()
a6=new Z.b0(a6.a|z.a)}if(a){z=$.$get$aF()
a6=new Z.b0(a6.a|z.a)}if(a0){z=$.$get$aG()
a6=new Z.b0(a6.a|z.a)}if(a2){z=$.$get$aC()
a6=new Z.b0(a6.a|z.a)}return new A.hr(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
P:function(a,b){H.v(a,"$ise",[T.d0],"$ase")
if(b!=null)if(!C.a.aF(a,b)){b.a=a.length
C.a.h(a,b)}},
ae:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.af(z,z.length,0,[H.y(z,0)]);z.B();){y=z.d
x=new V.G(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cp(x)}}},
dM:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.cM()
y=H.j(a.fr.j(0,z.ab),"$ise_")
if(y==null){y=A.ho(z,a.a)
a.d2(y)}this.a=y
b.e=null
z=y}x=z.z
w=x.bb
z=b.e
if(!(z instanceof Z.cx)){b.e=null
z=null}if(z==null||!z.d.q(0,w)){z=x.r1
if(z)b.d.ap()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.d
u.d.c_()
u.a.c_()
u=u.e
if(!(u==null))u.at(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.a.fN()
t=t.e
if(!(t==null))t.at(0)}r=b.d.d4(new Z.eL(a.a),w)
r.aq($.$get$ar()).e=this.a.Q.c
if(z)r.aq($.$get$aE()).e=this.a.cx.c
if(v)r.aq($.$get$aD()).e=this.a.ch.c
if(x.rx)r.aq($.$get$aF()).e=this.a.cy.c
if(u)r.aq($.$get$aG()).e=this.a.db.c
if(x.x1)r.aq($.$get$aC()).e=this.a.dx.c
b.e=r}z=T.d0
q=H.b([],[z])
this.a.U(a)
if(x.fx){v=this.a
u=a.dx
u=u.gI(u)
v=v.dy
v.toString
v.a8(u.a3(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.gI(u)
t=a.dx
t=u.l(0,t.gI(t))
a.cx=t
u=t}v=v.fr
v.toString
v.a8(u.a3(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.gho()
t=a.dx
t=u.l(0,t.gI(t))
a.ch=t
u=t}v=v.fy
v.toString
v.a8(u.a3(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.k1
v.toString
v.a8(u.a3(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.k2
v.toString
v.a8(u.a3(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k3
v.toString
v.a8(C.z.a3(u,!0))}if(x.ai>0){p=this.e.a.length
v=this.a.k4
v.a.uniform1i(v.d,p)
for(v=[P.w],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.h(t,o)
t=t[o]
u.toString
H.j(t,"$isab")
u=u.r1
if(o>=u.length)return H.h(u,o)
u=u[o]
n=new Float32Array(H.bD(H.v(t.a3(0,!0),"$ise",v,"$ase")))
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
v.a4(v.ry,v.x1,u)
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
v.aa(v.y1,v.ai,u)
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
v.a4(v.y2,v.ai,u)
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
v=v.ab
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.P(q,this.x.d)
v=this.a
u=this.x.d
v.aa(v.bb,v.bc,u)
u=this.a
v=this.x.f
u=u.ab
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.c:this.P(q,this.x.e)
v=this.a
u=this.x.e
v.a4(v.dc,v.bc,u)
u=this.a
v=this.x.f
u=u.ab
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.d){case C.b:break
case C.e:v=this.a
u=this.y.f
v=v.bd
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.P(q,this.y.d)
v=this.a
u=this.y.d
v.aa(v.dd,v.be,u)
u=this.a
v=this.y.f
u=u.bd
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.c:this.P(q,this.y.e)
v=this.a
u=this.y.e
v.a4(v.de,v.be,u)
u=this.a
v=this.y.f
u=u.bd
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.b:break
case C.e:v=this.a
u=this.z.f
v=v.bf
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bh
u.a.uniform1f(u.d,s)
break
case C.d:this.P(q,this.z.d)
v=this.a
u=this.z.d
v.aa(v.df,v.bg,u)
u=this.a
v=this.z.f
u=u.bf
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bh
v.a.uniform1f(v.d,s)
break
case C.c:this.P(q,this.z.e)
v=this.a
u=this.z.e
v.a4(v.dg,v.bg,u)
u=this.a
v=this.z.f
u=u.bf
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bh
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.dt
v.a.uniform1i(v.d,p)
v=a.db
m=v.gI(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.c6
if(l>=t.length)return H.h(t,l)
i=t[l]
t=m.cp(j.a)
s=t.a
h=t.b
g=t.c
g=t.u(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.du
v.a.uniform1i(v.d,p)
v=a.db
m=v.gI(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.c7
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gaV(j)
s=i.b
h=t.gcr(t)
g=t.gcs(t)
t=t.gct(t)
s.a.uniform3f(s.d,h,g,t)
t=m.b2(j.gaV(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gah(j)
g=i.d
h=t.gbs()
s=t.gb3()
t=t.gba()
g.a.uniform3f(g.d,h,s,t)
t=j.gbU()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gbV()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gbW()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.dv
v.a.uniform1i(v.d,p)
v=a.db
m=v.gI(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.c8
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gaV(j)
s=i.b
h=t.gcr(t)
g=t.gcs(t)
t=t.gct(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gc4(j).ij()
g=i.c
h=t.gaG(t)
s=t.gaH(t)
t=t.gaI()
g.a.uniform3f(g.d,h,s,t)
t=m.b2(j.gaV(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gah(j)
s=i.e
h=t.gbs()
g=t.gb3()
t=t.gba()
s.a.uniform3f(s.d,h,g,t)
t=j.gii()
g=i.f
g.a.uniform1f(g.d,t)
t=j.gih()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gbU()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gbV()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gbW()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.dw
v.a.uniform1i(v.d,p)
v=a.db
m=v.gI(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
s=this.a.c9
if(l>=s.length)return H.h(s,l)
i=s[l]
s=j.gaZ()
H.v(q,"$ise",t,"$ase")
if(!C.a.aF(q,s)){s.sbG(q.length)
C.a.h(q,s)}s=j.gc4(j)
h=i.d
g=s.gaG(s)
f=s.gaH(s)
s=s.gaI()
h.a.uniform3f(h.d,g,f,s)
s=j.gbt()
f=i.b
g=s.gaG(s)
h=s.gaH(s)
s=s.gaI()
f.a.uniform3f(f.d,g,h,s)
s=j.gaW(j)
h=i.c
g=s.gaG(s)
f=s.gaH(s)
s=s.gaI()
h.a.uniform3f(h.d,g,f,s)
s=m.cp(j.gc4(j))
f=s.a
g=s.b
h=s.c
h=s.u(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gah(j)
g=i.f
f=h.gbs()
s=h.gb3()
h=h.gba()
g.a.uniform3f(g.d,f,s,h)
h=j.gaZ()
s=h.gbq(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gbq(h)
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.gh0(h))
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.dz
v.a.uniform1i(v.d,p)
v=a.db
m=v.gI(v)
for(v=this.dx.y,u=v.length,t=[P.w],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
h=this.a.ca
if(l>=h.length)return H.h(h,l)
i=h[l]
h=j.gaZ()
H.v(q,"$ise",s,"$ase")
if(!C.a.aF(q,h)){h.sbG(q.length)
C.a.h(q,h)}e=m.l(0,j.gI(j))
h=j.gI(j).b2(new V.ac(0,0,0))
g=i.b
f=h.gcr(h)
d=h.gcs(h)
h=h.gct(h)
g.a.uniform3f(g.d,f,d,h)
h=e.b2(new V.ac(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.ce(0)
d=i.d
n=new Float32Array(H.bD(H.v(new V.e0(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a3(0,!0),"$ise",t,"$ase")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gah(j)
h=i.e
f=d.gbs()
g=d.gb3()
d=d.gba()
h.a.uniform3f(h.d,f,g,d)
d=j.gaZ()
h=d.gbq(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.ghJ()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gbG())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gbU()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gbV()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gbW()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.dA
v.a.uniform1i(v.d,p)
v=a.db
m=v.gI(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.cb
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gaZ()
H.v(q,"$ise",z,"$ase")
if(!C.a.aF(q,t)){t.sbG(q.length)
C.a.h(q,t)}t=j.gaV(j)
s=i.b
h=t.gcr(t)
g=t.gcs(t)
t=t.gct(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gc4(j)
g=i.c
h=t.gaG(t)
s=t.gaH(t)
t=t.gaI()
g.a.uniform3f(g.d,h,s,t)
t=j.gbt()
s=i.d
h=t.gaG(t)
g=t.gaH(t)
t=t.gaI()
s.a.uniform3f(s.d,h,g,t)
t=j.gaW(j)
g=i.e
h=t.gaG(t)
s=t.gaH(t)
t=t.gaI()
g.a.uniform3f(g.d,h,s,t)
t=m.b2(j.gaV(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gaZ()
s=t.gbq(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gbq(t)
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.gh0(t))
t=i.x
t.a.uniform1i(t.d,0)}t=j.gah(j)
s=i.y
h=t.gbs()
g=t.gb3()
t=t.gba()
s.a.uniform3f(s.d,h,g,t)
t=j.giq()
g=i.z
g.a.uniform1f(g.d,t)
t=j.gir()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gbU()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gbV()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gbW()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.b:break
case C.e:break
case C.d:this.P(q,this.Q.d)
z=this.a
v=this.Q.d
z.aa(z.dh,z.bi,v)
break
case C.c:this.P(q,this.Q.e)
z=this.a
v=this.Q.e
z.a4(z.di,z.bi,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gI(v).ce(0)
a.Q=v}z=z.id
z.toString
z.a8(v.a3(0,!0))}if(x.dy){this.P(q,this.ch)
z=this.a
v=this.ch
z.a4(z.dj,z.dk,v)
switch(x.r){case C.b:break
case C.e:z=this.a
v=this.cx.f
z=z.bj
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.d:this.P(q,this.cx.d)
z=this.a
v=this.cx.d
z.aa(z.dl,z.bk,v)
v=this.a
z=this.cx.f
v=v.bj
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.c:this.P(q,this.cx.e)
z=this.a
v=this.cx.e
z.a4(z.dm,z.bk,v)
v=this.a
z=this.cx.f
v=v.bj
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.b:break
case C.e:z=this.a
v=this.cy.f
z=z.bm
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bl
v.a.uniform1f(v.d,t)
break
case C.d:this.P(q,this.cy.d)
z=this.a
v=this.cy.d
z.aa(z.dn,z.bn,v)
v=this.a
z=this.cy.f
v=v.bm
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bl
z.a.uniform1f(z.d,t)
break
case C.c:this.P(q,this.cy.e)
z=this.a
v=this.cy.e
z.a4(z.dq,z.bn,v)
v=this.a
z=this.cy.f
v=v.bm
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bl
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.b
if(v){switch(z){case C.b:break
case C.e:z=this.a
u=this.db.f
z=z.bo
z.a.uniform1f(z.d,u)
break
case C.d:this.P(q,this.db.d)
z=this.a
u=this.db.d
z.aa(z.dr,z.bp,u)
u=this.a
z=this.db.f
u=u.bo
u.a.uniform1f(u.d,z)
break
case C.c:this.P(q,this.db.e)
z=this.a
u=this.db.e
z.a4(z.ds,z.bp,u)
u=this.a
z=this.db.f
u=u.bo
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o)q[o].U(a)
z=b.e
z.U(a)
z.a0(a)
z.au(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o){z=q[o]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(34067,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.x.d9()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cM().ab}},hp:{"^":"cN;0f,a,b,0c,0d,0e",
f6:function(a){var z,y
z=this.f
if(!$.l.$2(z,a)){y=this.f
this.f=a
z=new D.B(this.b,y,a,this,[P.w])
z.b=!0
this.a.R(z)}},
aC:function(){this.cC()
this.f6(1)}},cN:{"^":"a;",
R:[function(a){this.a.R(H.j(a,"$isu"))},function(){return this.R(null)},"cR","$1","$0","gaB",0,2,0],
aC:["cC",function(){}],
f8:function(a){},
f9:function(a){var z,y
z=this.e
if(z==null?a!=null:z!==a){if(z!=null)z.gn().L(0,this.gaB())
y=this.e
this.e=a
if(a!=null)a.gn().h(0,this.gaB())
z=new D.B(this.b+".textureCube",y,this.e,this,[T.d1])
z.b=!0
this.a.R(z)}},
sb_:function(a){var z=this.c
if(z!==C.c){if(z===C.b)this.aC()
this.c=C.c
this.f8(null)
z=this.a
z.a=null
z.R(null)}this.f9(a)}},hq:{"^":"cN;a,b,0c,0d,0e"},aW:{"^":"cN;0f,a,b,0c,0d,0e",
cW:function(a){var z,y
if(!J.O(this.f,a)){z=this.f
this.f=a
y=new D.B(this.b+".color",z,a,this,[V.T])
y.b=!0
this.a.R(y)}},
aC:["bx",function(){this.cC()
this.cW(new V.T(1,1,1))}],
sah:function(a,b){var z
if(this.c===C.b){this.c=C.e
this.aC()
z=this.a
z.a=null
z.R(null)}this.cW(b)}},hs:{"^":"aW;0ch,0f,a,b,0c,0d,0e",
f7:function(a){var z,y
z=this.ch
if(!$.l.$2(z,a)){y=this.ch
this.ch=a
z=new D.B(this.b+".refraction",y,a,this,[P.w])
z.b=!0
this.a.R(z)}},
aC:function(){this.bx()
this.f7(1)}},ht:{"^":"aW;0ch,0f,a,b,0c,0d,0e",
bR:function(a){var z,y
z=this.ch
if(!$.l.$2(z,a)){y=this.ch
this.ch=a
z=new D.B(this.b+".shininess",y,a,this,[P.w])
z.b=!0
this.a.R(z)}},
aC:function(){this.bx()
this.bR(100)}},ic:{"^":"bU;0a,0b,0c,0d,0e",
gn:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
R:[function(a){var z
H.j(a,"$isu")
z=this.e
if(!(z==null))z.t(a)},function(){return this.R(null)},"cR","$1","$0","gaB",0,2,0],
dM:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.j(a.fr.j(0,"Skybox"),"$iseb")
if(z==null){y=a.a
z=new A.eb(y,"Skybox")
z.cD(y,"Skybox")
z.dC(0,$.ie,$.id)
z.z=z.x.j(0,"posAttr")
z.Q=H.d(z.y.j(0,"fov"),"$isR")
z.ch=H.d(z.y.j(0,"ratio"),"$isR")
z.cx=H.d(z.y.j(0,"boxClr"),"$isF")
z.cy=H.d(z.y.j(0,"boxTxt"),"$isad")
z.db=H.d(z.y.j(0,"viewMat"),"$isay")
a.d2(z)}this.a=z}if(b.e==null){y=b.d.d4(new Z.eL(a.a),$.$get$ar())
y.aq($.$get$ar()).e=this.a.z.c
b.e=y}y=this.c
if(y!=null){y.a=1
y.U(a)}y=a.d
x=a.c
w=this.a
w.U(a)
v=this.b
u=w.Q
u.a.uniform1f(u.d,v)
v=w.ch
v.a.uniform1f(v.d,y/x)
x=this.c
w.cy.cv(x)
x=this.d
y=w.cx
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.gI(x).ce(0)
w=w.db
w.toString
w.a8(x.a3(0,!0))
y=b.e
if(y instanceof Z.cx){y.U(a)
y.a0(a)
y.au(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.x.d9()
y=this.c
if(y!=null)y.au(a)}},bU:{"^":"a;"}}],["","",,T,{"^":"",d0:{"^":"cu;"},d1:{"^":"d0;0a,0b,0c,0d,0e",
gn:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
U:function(a){if(!this.c&&this.d>=6){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,this.b)}},
au:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,null)}}},ir:{"^":"a;a,0b,0c,0d,0e",
dF:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
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
r=new T.d1()
r.a=0
r.b=s
r.c=!1
r.d=0
this.aA(r,s,z,34069,!1,!1)
this.aA(r,s,w,34070,!1,!1)
this.aA(r,s,y,34071,!1,!1)
this.aA(r,s,v,34072,!1,!1)
this.aA(r,s,x,34073,!1,!1)
this.aA(r,s,u,34074,!1,!1)
return r},
dE:function(a){return this.dF(a,".png",!1,"")},
h7:function(a,b){return this.dF(a,b,!1,"")},
aA:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.a6
W.V(z,"load",H.k(new T.is(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
f4:function(a,b,c){var z,y,x,w
b=V.dn(b,2)
z=V.dn(a.width,2)
y=V.dn(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cz(null,null)
x.width=z
x.height=y
w=H.j(C.k.dS(x,"2d"),"$isdx")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.kH(w.getImageData(0,0,x.width,x.height))}}},is:{"^":"t:22;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.f4(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.K.hx(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6){x=x.e
if(!(x==null))x.fV()}++z.e}}}],["","",,V,{"^":"",fr:{"^":"a;",
aS:function(a,b){return!0},
i:function(a){return"all"},
$isbR:1},bR:{"^":"a;"},dZ:{"^":"a;",
aS:["dZ",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)if(z[x].aS(0,b))return!0
return!1}],
i:["cB",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbR:1},bn:{"^":"dZ;0a",
aS:function(a,b){return!this.dZ(0,b)},
i:function(a){return"!["+this.cB(0)+"]"}},i3:{"^":"a;0a",
e2:function(a){var z,y
if(a.a.length<=0)throw H.f(P.p("May not create a SetMatcher with zero characters."))
z=new H.aV(0,0,[P.C,P.a4])
for(y=new H.dW(a,a.gk(a),0,[H.am(a,"r",0)]);y.B();)z.S(0,y.d,!0)
this.a=z},
aS:function(a,b){return this.a.d7(0,b)},
i:function(a){var z=this.a
return P.d_(new H.dV(z,[H.y(z,0)]),0,null)},
$isbR:1,
p:{
a1:function(a){var z=new V.i3()
z.e2(a)
return z}}},ed:{"^":"a;a,b,0c,0d",
gha:function(a){return this.b},
w:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.en(this.a.G(0,b))
w.a=H.b([],[V.bR])
w.c=!1
C.a.h(this.c,w)
return w},
fX:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.aS(0,a))return w}return},
i:function(a){return this.b}},ek:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.fl(this.b,"\n","\\n")
y=H.fl(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},el:{"^":"a;a,b,0c",
i:function(a){return this.b}},iA:{"^":"a;0a,0b,0c",
G:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.ed(this,b)
z.c=H.b([],[V.en])
this.a.S(0,b,z)}return z},
b0:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.el(this,a)
y=P.m
z.c=new H.aV(0,0,[y,y])
this.b.S(0,a,z)}return z},
hD:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.b([],[V.ek])
y=this.c
x=[P.C]
w=H.b([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.h.b4(a,t)
r=y.fX(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.d_(w,0,null)
throw H.f(P.p("Untokenizable string [state: "+y.gha(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.b([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.d_(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.ek(o==null?p.b:o,q,t)}++t}}}},en:{"^":"dZ;b,0c,0a",
i:function(a){return this.b.b+": "+this.cB(0)}}}],["","",,X,{"^":"",c0:{"^":"a;",$isav:1},fZ:{"^":"cg;0a,0b,0c,0d,0e,0f,0r,0x",
gn:function(){var z=this.x
if(z==null){z=D.E()
this.x=z}return z},
af:function(a){var z=this.x
if(!(z==null))z.t(a)},
sdL:function(a,b){var z,y
if(!this.r.q(0,b)){z=this.r
this.r=b
y=new D.B("region",z,b,this,[V.cV])
y.b=!0
this.af(y)}},
U:function(a){var z,y,x,w,v,u,t,s
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.o(y)
v=C.i.ad(w.a*y)
if(typeof x!=="number")return H.o(x)
u=C.i.ad(w.b*x)
t=C.i.ad(w.c*y)
a.c=t
w=C.i.ad(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
if(this.b){z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
s=16640}else s=256
a.a.clear(s)},
p:{
cD:function(a,b,c,d,e,f,g){var z,y
z=new X.fZ()
y=new V.aJ(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.ce(0,0,1,1)
z.r=y
return z}}},h_:{"^":"a;0a,0b",
gn:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
U:function(a){var z
a.cy.br(V.aK())
z=V.aK()
a.db.br(z)},
au:function(a){a.cy.as()
a.db.as()},
$isav:1,
$isc0:1},hF:{"^":"a;0a,0b,0c,0d,0e,0f",
gn:function(){var z=this.f
if(z==null){z=D.E()
this.f=z}return z},
af:[function(a){var z
H.j(a,"$isu")
z=this.f
if(!(z==null))z.t(a)},function(){return this.af(null)},"hH","$1","$0","gec",0,2,0],
U:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=this.c
w=this.d
v=this.e
u=v-w
t=1/Math.tan(x*0.5)
s=V.at(-t/(z/y),0,0,0,0,t,0,0,0,0,v/u,-v*w/u,0,0,1,0)
a.cy.br(s)
z=$.e6
if(z==null){z=V.e1(new V.ac(0,0,0),new V.G(0,1,0),new V.G(0,0,-1))
$.e6=z
r=z}else r=z
z=this.b
if(z!=null){q=z.aK(0,a,this)
if(q!=null)r=q.l(0,r)}a.db.br(r)},
au:function(a){a.cy.as()
a.db.as()},
$isav:1,
$isc0:1,
p:{
cT:function(a,b,c,d,e){var z,y,x
z=new X.hF()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
if(null!=c){y=z.b
z.b=c
if(c!=null)c.gn().h(0,z.gec())
x=new D.B("mover",y,z.b,z,[U.a0])
x.b=!0
z.af(x)}x=z.c
if(!$.l.$2(x,b)){y=z.c
z.c=b
x=new D.B("fov",y,b,z,[P.w])
x.b=!0
z.af(x)}x=z.d
if(!$.l.$2(x,d)){y=z.d
z.d=d
x=new D.B("near",y,d,z,[P.w])
x.b=!0
z.af(x)}x=z.e
if(!$.l.$2(x,a)){y=z.e
z.e=a
x=new D.B("far",y,a,z,[P.w])
x.b=!0
z.af(x)}return z}}},cg:{"^":"a;"}}],["","",,V,{"^":"",
l2:function(a){P.iz(C.w,new V.l3(a))},
l3:{"^":"t:37;a",
$1:function(a){H.j(a,"$isaZ")
P.dp(C.i.dP(this.a.gfZ(),2)+" fps")}},
i8:{"^":"a;0a,0b",
e3:function(a,b){var z,y,x,w,v,u,t
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
t=W.a6
W.V(z,"scroll",H.k(new V.ib(x),{func:1,ret:-1,args:[t]}),!1,t)},
d1:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.v(a,"$ise",[P.m],"$ase")
this.fb()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.hD(C.a.h3(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
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
if(H.fk(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.h(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.ke(C.H,s,C.q,!1)
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
fb:function(){var z,y,x,w
if(this.b!=null)return
z=new V.iA()
y=P.m
z.a=new H.aV(0,0,[y,V.ed])
z.b=new H.aV(0,0,[y,V.el])
z.c=z.G(0,"Start")
y=z.G(0,"Start").w(0,"Bold")
x=V.a1(new H.Z("*"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Bold").w(0,"Bold")
x=new V.bn()
w=[V.bR]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.a1(new H.Z("*"))
C.a.h(x.a,y)
y=z.G(0,"Bold").w(0,"BoldEnd")
x=V.a1(new H.Z("*"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Start").w(0,"Italic")
x=V.a1(new H.Z("_"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Italic").w(0,"Italic")
x=new V.bn()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.a1(new H.Z("_"))
C.a.h(x.a,y)
y=z.G(0,"Italic").w(0,"ItalicEnd")
x=V.a1(new H.Z("_"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Start").w(0,"Code")
x=V.a1(new H.Z("`"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Code").w(0,"Code")
x=new V.bn()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.a1(new H.Z("`"))
C.a.h(x.a,y)
y=z.G(0,"Code").w(0,"CodeEnd")
x=V.a1(new H.Z("`"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Start").w(0,"LinkHead")
x=V.a1(new H.Z("["))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"LinkHead").w(0,"LinkTail")
x=V.a1(new H.Z("|"))
C.a.h(y.a,x)
x=z.G(0,"LinkHead").w(0,"LinkEnd")
y=V.a1(new H.Z("]"))
C.a.h(x.a,y)
x.c=!0
x=z.G(0,"LinkHead").w(0,"LinkHead")
y=new V.bn()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.a1(new H.Z("|]"))
C.a.h(y.a,x)
x=z.G(0,"LinkTail").w(0,"LinkEnd")
y=V.a1(new H.Z("]"))
C.a.h(x.a,y)
x.c=!0
x=z.G(0,"LinkTail").w(0,"LinkTail")
y=new V.bn()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.a1(new H.Z("|]"))
C.a.h(y.a,x)
C.a.h(z.G(0,"Start").w(0,"Other").a,new V.fr())
x=z.G(0,"Other").w(0,"Other")
y=new V.bn()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.a1(new H.Z("*_`["))
C.a.h(y.a,x)
x=z.G(0,"BoldEnd")
x.d=x.a.b0("Bold")
x=z.G(0,"ItalicEnd")
x.d=x.a.b0("Italic")
x=z.G(0,"CodeEnd")
x.d=x.a.b0("Code")
x=z.G(0,"LinkEnd")
x.d=x.a.b0("Link")
x=z.G(0,"Other")
x.d=x.a.b0("Other")
this.b=z},
p:{
i9:function(a,b){var z=new V.i8()
z.e3(a,!0)
return z}}},
ib:{"^":"t:22;a",
$1:function(a){P.ei(C.l,new V.ia(this.a))}},
ia:{"^":"t:2;a",
$0:function(){var z,y,x
z=C.i.ad(document.documentElement.scrollTop)
y=this.a.style
x=H.i(-0.01*z)+"px"
y.top=x}}}],["","",,K,{"^":"",
fg:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=V.i9("Test 033",!0)
y=W.cz(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.m]
z.d1(H.b(["Test of a sterioscopic scene."],x))
z.d1(H.b(["\xab[Back to Tests|../]"],x))
w=document.getElementById("testCanvas")
if(w==null)H.q(P.p("Failed to find an element with the identifier, testCanvas."))
v=E.ix(w,!0,!0,!0,!1)
u=F.cY()
F.bC(u,null,null,1,1,1,0,0,1)
F.bC(u,null,null,1,1,0,1,0,3)
F.bC(u,null,null,1,1,0,0,1,2)
F.bC(u,null,null,1,1,-1,0,0,0)
F.bC(u,null,null,1,1,0,-1,0,0)
F.bC(u,null,null,1,1,0,0,-1,3)
u.ap()
t=E.c4(null,!0,null,"",u,null)
s=E.c4(null,!0,null,"",null,null)
for(r=-1.6;r<=1.7;r+=0.8)for(q=-1.6;q<=1.7;q+=0.8)for(p=-1.6;p<=1.7;p+=0.8){o=new V.ab(1,0,0,r,0,1,0,q,0,0,1,p,0,0,0,1).l(0,new V.ab(0.2,0,0,0,0,0.2,0,0,0,0,0.2,0,0,0,0,1))
n=E.c4(null,!0,null,"",null,null)
z=new U.cC()
z.sI(0,o)
n.sdH(z)
z=n.y
x=H.y(z,0)
H.A(t,x)
m=[x]
if(z.aM(H.b([t],m))){l=z.a
k=l.length
C.a.h(l,t)
x=H.v(H.b([t],m),"$isc",[x],"$asc")
z=z.c
if(z!=null)z.$2(k,x)}z=s.y
x=H.y(z,0)
H.A(n,x)
m=[x]
if(z.aM(H.b([n],m))){l=z.a
k=l.length
C.a.h(l,n)
x=H.v(H.b([n],m),"$isc",[x],"$asc")
z=z.c
if(z!=null)z.$2(k,x)}}j=v.f.dE("../resources/diceColor")
i=new O.hn()
z=O.c1(V.ab)
i.e=z
z.aL(i.geC(),i.geD())
z=new O.aW(i,"emission")
z.c=C.b
z.f=new V.T(0,0,0)
i.f=z
z=new O.aW(i,"ambient")
z.c=C.b
z.f=new V.T(0,0,0)
i.r=z
z=new O.aW(i,"diffuse")
z.c=C.b
z.f=new V.T(0,0,0)
i.x=z
z=new O.aW(i,"invDiffuse")
z.c=C.b
z.f=new V.T(0,0,0)
i.y=z
z=new O.ht(i,"specular")
z.c=C.b
z.f=new V.T(0,0,0)
z.ch=100
i.z=z
z=new O.hq(i,"bump")
z.c=C.b
i.Q=z
i.ch=null
z=new O.aW(i,"reflect")
z.c=C.b
z.f=new V.T(0,0,0)
i.cx=z
z=new O.hs(i,"refract")
z.c=C.b
z.f=new V.T(0,0,0)
z.ch=1
i.cy=z
z=new O.hp(i,"alpha")
z.c=C.b
z.f=1
i.db=z
z=new D.h9()
z.by(D.U)
z.e=H.b([],[D.c3])
z.f=H.b([],[D.hH])
z.r=H.b([],[D.ig])
z.x=H.b([],[D.it])
z.y=H.b([],[D.iu])
z.z=H.b([],[D.iv])
z.Q=null
z.ch=null
z.cu(z.geA(),z.geU(),z.geW())
i.dx=z
x=z.Q
if(x==null){x=D.E()
z.Q=x
z=x}else z=x
z.h(0,i.gf2())
z=i.dx
x=z.ch
if(x==null){x=D.E()
z.ch=x
z=x}else z=x
z.h(0,i.gaB())
i.dy=null
z=i.dx
x=U.bL(V.e2(-1,-1,-1,null))
z.h(0,D.dJ(new V.T(1,0.9,0.9),x))
z=i.dx
x=U.bL(V.e2(1,1,2,null))
z.h(0,D.dJ(new V.T(0.2,0.2,0.35),x))
z=i.r
z.sah(0,new V.T(0.2,0.2,0.2))
i.r.sb_(j)
z=i.x
z.sah(0,new V.T(0.8,0.8,0.8))
i.x.sb_(j)
z=i.z
z.sah(0,new V.T(0.7,0.7,0.7))
z=i.z
if(z.c===C.b){z.c=C.e
z.bx()
z.bR(100)
x=z.a
x.a=null
x.R(null)}z.bR(10)
i.Q.sb_(v.f.dE("../resources/diceBumpMap"))
h=U.cF(null)
z=v.r
x=new U.iT()
m=U.cB()
m.scq(0,!0)
m.sci(6.283185307179586)
m.sck(0)
m.sa1(0,0)
m.scj(100)
m.sM(0)
m.sc3(0.5)
x.b=m
l=x.gax()
m.gn().h(0,l)
m=U.cB()
m.scq(0,!0)
m.sci(6.283185307179586)
m.sck(0)
m.sa1(0,0)
m.scj(100)
m.sM(0)
m.sc3(0.5)
x.c=m
m.gn().h(0,l)
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
g=new X.au(!1,!1,!1)
f=x.d
x.d=g
m=[X.au]
l=new D.B("modifiers",f,g,x,m)
l.b=!0
x.J(l)
l=x.f
if(l!==!1){x.f=!1
l=new D.B("invertX",l,!1,x,[P.a4])
l.b=!0
x.J(l)}l=x.r
if(l!==!1){x.r=!1
l=new D.B("invertY",l,!1,x,[P.a4])
l.b=!0
x.J(l)}x.aP(z)
h.h(0,x)
z=v.r
x=new U.iS()
l=U.cB()
l.scq(0,!0)
l.sci(6.283185307179586)
l.sck(0)
l.sa1(0,0)
l.scj(100)
l.sM(0)
l.sc3(0.2)
x.b=l
l.gn().h(0,x.gax())
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
g=new X.au(!0,!1,!1)
f=x.c
x.c=g
l=new D.B("modifiers",f,g,x,m)
l.b=!0
x.J(l)
x.aP(z)
h.h(0,x)
z=v.r
x=new U.iU()
x.c=0.01
x.d=0
x.e=0
g=new X.au(!1,!1,!1)
x.b=g
m=new D.B("modifiers",null,g,x,m)
m.b=!0
x.J(m)
x.aP(z)
h.h(0,x)
h.h(0,U.bL(V.cQ(0,0,6)))
e=X.cD(!0,!0,!1,null,2000,null,0)
if(e.b){e.b=!1
z=new D.B("clearColor",!0,!1,e,[P.a4])
z.b=!0
e.af(z)}z=v.f.h7("../resources/maskonaive",".jpg")
d=new M.fF()
d.saQ(null)
d.saX(0,null)
d.saY(null)
x=E.c4(null,!0,null,"",null,null)
u=F.cY()
m=u.a
l=new V.G(-1,-1,1)
l=l.u(0,Math.sqrt(l.A(l)))
c=m.b9(new V.bp(1,2,4,6),new V.aJ(1,0,0,1),new V.ac(-1,-1,0),new V.P(0,1),l,null)
m=u.a
l=new V.G(1,-1,1)
l=l.u(0,Math.sqrt(l.A(l)))
b=m.b9(new V.bp(0,3,4,6),new V.aJ(0,0,1,1),new V.ac(1,-1,0),new V.P(1,1),l,null)
m=u.a
l=new V.G(1,1,1)
l=l.u(0,Math.sqrt(l.A(l)))
a=m.b9(new V.bp(0,2,5,6),new V.aJ(0,1,0,1),new V.ac(1,1,0),new V.P(1,0),l,null)
m=u.a
l=new V.G(-1,1,1)
l=l.u(0,Math.sqrt(l.A(l)))
a0=m.b9(new V.bp(0,2,4,7),new V.aJ(1,1,0,1),new V.ac(-1,1,0),new V.P(0,0),l,null)
u.d.fI(H.b([c,b,a,a0],[F.aB]))
u.ap()
x.scw(0,u)
d.d=x
d.e=null
x=new O.ic()
x.b=1.0471975511965976
f=x.c
x.c=z
z.gn().h(0,x.gaB())
z=new D.B("boxTexture",f,x.c,x,[T.d1])
z.b=!0
x.R(z)
j=new V.T(1,1,1)
if(!J.O(x.d,j)){f=x.d
x.d=j
z=new D.B("boxColor",f,j,x,[V.T])
z.b=!0
x.R(z)}x.e=null
d.saY(x)
a1=new M.fS()
z=O.c1(E.aA)
a1.d=z
z.aL(a1.geF(),a1.geG())
a1.e=null
a1.f=null
a1.r=null
a1.x=null
a1.saQ(null)
a1.saX(0,null)
a1.saY(null)
a1.saY(i)
a1.d.h(0,s)
z=M.aY
x=H.b([d,a1],[z])
m=new M.ij()
l=U.bL(null)
m.a=l
a2=U.bL(null)
m.b=a2
a3=U.a0
a4=[a3]
l=U.cF(H.b([null,l],a4))
m.c=l
a4=U.cF(H.b([null,a2],a4))
m.d=a4
m.e=X.cT(2000,1.0471975511965976,l,0.1,null)
m.f=X.cT(2000,1.0471975511965976,a4,0.1,null)
m.r=V.ce(0,0,0.5,1)
m.x=V.ce(0.5,0,0.5,1)
z=O.c1(z)
m.z=z
z.aL(m.geB(),m.geX())
m.z.aO(0,x)
m.Q=0.1
m.ch=12
m.cx=null
m.cy=null
z=m.c.a
if(0>=z.length)return H.h(z,0)
if(!J.O(z[0],h)){z=m.c
l=z.a
if(0>=l.length)return H.h(l,0)
f=l[0]
z.S(0,0,h)
m.d.S(0,0,h)
a3=new D.B("cameraMover",f,h,m,[a3])
a3.b=!0
m.T(a3)}z=m.y
if(z!==e){if(z!=null)z.gn().L(0,m.gN())
f=m.y
m.y=e
e.gn().h(0,m.gN())
z=new D.B("target",f,m.y,m,[X.cg])
z.b=!0
m.T(z)}m.z.aO(0,x)
m.Q=0.1
m.ch=12
a5=Math.atan2(0.1,12)
z=m.a
x=m.Q
if(typeof x!=="number")return x.H()
z.sI(0,V.cQ(-x,0,0).l(0,V.cP(a5)))
m.b.sI(0,V.cQ(m.Q,0,0).l(0,V.cP(-a5)))
z=v.d
if(z!==m){if(z!=null)z.gn().L(0,v.gcE())
v.d=m
m.gn().h(0,v.gcE())
v.e5()}V.l2(v)}},1]]
setupProgram(dart,0,0)
J.J=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dQ.prototype
return J.dP.prototype}if(typeof a=="string")return J.cI.prototype
if(a==null)return J.dR.prototype
if(typeof a=="boolean")return J.h4.prototype
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bP.prototype
return a}if(a instanceof P.a)return a
return J.cq(a)}
J.bX=function(a){if(typeof a=="string")return J.cI.prototype
if(a==null)return a
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bP.prototype
return a}if(a instanceof P.a)return a
return J.cq(a)}
J.di=function(a){if(a==null)return a
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bP.prototype
return a}if(a instanceof P.a)return a
return J.cq(a)}
J.kL=function(a){if(typeof a=="number")return J.c9.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.d6.prototype
return a}
J.cp=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bP.prototype
return a}if(a instanceof P.a)return a
return J.cq(a)}
J.O=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.J(a).q(a,b)}
J.fn=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kL(a).a7(a,b)}
J.fo=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kU(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bX(a).j(a,b)}
J.fp=function(a,b,c,d){return J.cp(a).d0(a,b,c,d)}
J.ct=function(a,b,c){return J.bX(a).fO(a,b,c)}
J.dq=function(a,b){return J.di(a).C(a,b)}
J.fq=function(a,b){return J.di(a).K(a,b)}
J.aS=function(a){return J.J(a).gV(a)}
J.bK=function(a){return J.di(a).gX(a)}
J.b9=function(a){return J.bX(a).gk(a)}
J.a5=function(a){return J.J(a).i(a)}
I.dl=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.cy.prototype
C.x=J.n.prototype
C.a=J.aU.prototype
C.y=J.dP.prototype
C.f=J.dQ.prototype
C.z=J.dR.prototype
C.i=J.c9.prototype
C.h=J.cI.prototype
C.G=J.bP.prototype
C.I=H.hB.prototype
C.J=W.hC.prototype
C.p=J.hG.prototype
C.K=P.cW.prototype
C.m=J.d6.prototype
C.r=W.bA.prototype
C.t=W.j6.prototype
C.u=new P.hE()
C.v=new P.iW()
C.j=new P.jT()
C.b=new A.c2(0,"ColorSourceType.None")
C.e=new A.c2(1,"ColorSourceType.Solid")
C.d=new A.c2(2,"ColorSourceType.Texture2D")
C.c=new A.c2(3,"ColorSourceType.TextureCube")
C.l=new P.bd(0)
C.w=new P.bd(5e6)
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
C.H=H.b(I.dl([0,0,65498,45055,65535,34815,65534,18431]),[P.C])
C.q=new P.iV(!1)
$.as=0
$.ba=null
$.dt=null
$.db=!1
$.fd=null
$.f7=null
$.fj=null
$.co=null
$.cr=null
$.dj=null
$.b3=null
$.bE=null
$.bF=null
$.dc=!1
$.N=C.j
$.dH=null
$.dG=null
$.dF=null
$.dE=null
$.l=V.hu()
$.ie="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.id="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.e6=null
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
I.$lazy(y,x,w)}})(["dD","$get$dD",function(){return H.fc("_$dart_dartClosure")},"cJ","$get$cJ",function(){return H.fc("_$dart_js")},"eo","$get$eo",function(){return H.aw(H.ch({
toString:function(){return"$receiver$"}}))},"ep","$get$ep",function(){return H.aw(H.ch({$method$:null,
toString:function(){return"$receiver$"}}))},"eq","$get$eq",function(){return H.aw(H.ch(null))},"er","$get$er",function(){return H.aw(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"ev","$get$ev",function(){return H.aw(H.ch(void 0))},"ew","$get$ew",function(){return H.aw(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"et","$get$et",function(){return H.aw(H.eu(null))},"es","$get$es",function(){return H.aw(function(){try{null.$method$}catch(z){return z.message}}())},"ey","$get$ey",function(){return H.aw(H.eu(void 0))},"ex","$get$ex",function(){return H.aw(function(){try{(void 0).$method$}catch(z){return z.message}}())},"d8","$get$d8",function(){return P.j7()},"bG","$get$bG",function(){return[]},"f1","$get$f1",function(){return P.hU("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dB","$get$dB",function(){return{}},"eJ","$get$eJ",function(){return Z.al(0)},"eH","$get$eH",function(){return Z.al(511)},"ar","$get$ar",function(){return Z.al(1)},"aE","$get$aE",function(){return Z.al(2)},"aD","$get$aD",function(){return Z.al(4)},"aF","$get$aF",function(){return Z.al(8)},"aG","$get$aG",function(){return Z.al(16)},"by","$get$by",function(){return Z.al(32)},"bz","$get$bz",function(){return Z.al(64)},"eI","$get$eI",function(){return Z.al(96)},"b1","$get$b1",function(){return Z.al(128)},"aC","$get$aC",function(){return Z.al(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.u]},{func:1,ret:-1,args:[D.u]},{func:1,ret:P.I},{func:1,ret:-1},{func:1,ret:-1,args:[W.ap]},{func:1,ret:P.I,args:[F.ai]},{func:1,ret:-1,args:[P.m,,]},{func:1,ret:-1,args:[W.a6]},{func:1,ret:-1,args:[P.C,[P.c,E.aA]]},{func:1,ret:P.I,args:[D.u]},{func:1,ret:-1,args:[W.b_]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.I,args:[,,]},{func:1,ret:P.m,args:[P.C]},{func:1,ret:P.I,args:[,]},{func:1,args:[,]},{func:1,ret:-1,args:[W.bk]},{func:1,ret:-1,args:[P.C,[P.c,D.U]]},{func:1,ret:P.w},{func:1,ret:-1,args:[P.C,[P.c,U.a0]]},{func:1,ret:-1,args:[P.C,[P.c,M.aY]]},{func:1,ret:-1,args:[P.C,[P.c,V.ab]]},{func:1,ret:P.I,args:[W.a6]},{func:1,ret:P.I,args:[{func:1,ret:-1}]},{func:1,ret:P.a4,args:[W.K]},{func:1,ret:W.a_,args:[W.K]},{func:1,args:[,P.m]},{func:1,args:[P.m]},{func:1,ret:P.I,args:[P.W]},{func:1,ret:P.I,args:[{func:1,ret:-1,args:[D.u]}]},{func:1,ret:-1,args:[P.a],opt:[P.aq]},{func:1,ret:-1,args:[W.bA]},{func:1,ret:P.a4,args:[P.w,P.w]},{func:1,ret:P.a4,args:[[P.c,D.U]]},{func:1,ret:P.I,args:[,],opt:[,]},{func:1,ret:P.I,args:[F.aB,P.w,P.w]},{func:1,ret:[P.aH,,],args:[,]},{func:1,ret:P.I,args:[P.aZ]},{func:1,ret:-1,args:[P.m,P.m]}]
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
if(x==y)H.l5(d||a)
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
Isolate.dl=a.dl
Isolate.dg=a.dg
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
if(typeof dartMainRunner==="function")dartMainRunner(K.fg,[])
else K.fg([])})})()
//# sourceMappingURL=test.dart.js.map
