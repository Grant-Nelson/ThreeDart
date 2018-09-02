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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.d4"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.d4"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.d4(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.d5=function(){}
var dart=[["","",,H,{"^":"",ls:{"^":"a;a"}}],["","",,J,{"^":"",
J:function(a){return void 0},
db:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cl:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.d8==null){H.kM()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.h(P.eB("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cD()]
if(v!=null)return v
v=H.kR(a)
if(v!=null)return v
if(typeof a=="function")return C.H
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cD(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
o:{"^":"a;",
q:function(a,b){return a===b},
gS:function(a){return H.bq(a)},
i:["dT",function(a){return"Instance of '"+H.aY(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h1:{"^":"o;",
i:function(a){return String(a)},
gS:function(a){return a?519018:218159},
$isa4:1},
dJ:{"^":"o;",
q:function(a,b){return null==b},
i:function(a){return"null"},
gS:function(a){return 0},
$isI:1},
cE:{"^":"o;",
gS:function(a){return 0},
i:["dU",function(a){return String(a)}]},
hB:{"^":"cE;"},
cW:{"^":"cE;"},
bO:{"^":"cE;",
i:function(a){var z=a[$.$get$du()]
if(z==null)return this.dU(a)
return"JavaScript function for "+H.j(J.a5(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscz:1},
aU:{"^":"o;$ti",
h:function(a,b){H.C(b,H.z(a,0))
if(!!a.fixed$length)H.r(P.ad("add"))
a.push(b)},
R:function(a,b){var z
if(!!a.fixed$length)H.r(P.ad("remove"))
for(z=0;z<a.length;++z)if(J.S(a[z],b)){a.splice(z,1)
return!0}return!1},
bN:function(a,b){var z,y
H.x(b,"$isd",[H.z(a,0)],"$asd")
if(!!a.fixed$length)H.r(P.ad("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.w)(b),++y)a.push(b[y])},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.h(P.bb(a))}},
w:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.X(z,y,H.j(a[y]))
return z.join(b)},
fY:function(a){return this.w(a,"")},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
bt:function(a,b,c){var z=a.length
if(b>z)throw H.h(P.ah(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.h(P.ah(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.z(a,0)])
return H.c(a.slice(b,c),[H.z(a,0)])},
gc9:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.h(H.h_())},
aP:function(a,b){var z
for(z=0;z<a.length;++z)if(J.S(a[z],b))return!0
return!1},
i:function(a){return P.cA(a,"[","]")},
gV:function(a){return new J.al(a,a.length,0,[H.z(a,0)])},
gS:function(a){return H.bq(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.r(P.ad("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.bY(b,"newLength",null))
if(b<0)throw H.h(P.ah(b,0,null,"newLength",null))
a.length=b},
X:function(a,b,c){H.U(b)
H.C(c,H.z(a,0))
if(!!a.immutable$list)H.r(P.ad("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.aO(a,b))
if(b>=a.length||b<0)throw H.h(H.aO(a,b))
a[b]=c},
$isd:1,
$isf:1,
n:{
h0:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.bY(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.ah(a,0,4294967295,"length",null))
return J.dG(new Array(a),b)},
dG:function(a,b){return J.bj(H.c(a,[b]))},
bj:function(a){H.bJ(a)
a.fixed$length=Array
return a}}},
lr:{"^":"aU;$ti"},
al:{"^":"a;a,b,c,0d,$ti",
gL:function(a){return this.d},
B:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.h(H.w(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c6:{"^":"o;",
hu:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.h(P.ad(""+a+".toInt()"))},
c6:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.h(P.ad(""+a+".floor()"))},
ab:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.ad(""+a+".round()"))},
dJ:function(a,b){var z,y
if(b>20)throw H.h(P.ah(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gS:function(a){return a&0x1FFFFFFF},
dO:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
dW:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cW(a,b)},
Z:function(a,b){return(a|0)===a?a/b|0:this.cW(a,b)},
cW:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.h(P.ad("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
b7:function(a,b){var z
if(a>0)z=this.f8(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
f8:function(a,b){return b>31?0:a>>>b},
a7:function(a,b){if(typeof b!=="number")throw H.h(H.aN(b))
return a<b},
$isv:1,
$isW:1},
dI:{"^":"c6;",$isA:1},
dH:{"^":"c6;"},
cC:{"^":"o;",
bW:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.aO(a,b))
if(b<0)throw H.h(H.aO(a,b))
if(b>=a.length)H.r(H.aO(a,b))
return a.charCodeAt(b)},
b4:function(a,b){if(b>=a.length)throw H.h(H.aO(a,b))
return a.charCodeAt(b)},
D:function(a,b){H.R(b)
if(typeof b!=="string")throw H.h(P.bY(b,null,null))
return a+b},
bu:function(a,b,c){H.U(c)
if(c==null)c=a.length
if(b<0)throw H.h(P.ca(b,null,null))
if(b>c)throw H.h(P.ca(b,null,null))
if(c>a.length)throw H.h(P.ca(c,null,null))
return a.substring(b,c)},
cr:function(a,b){return this.bu(a,b,null)},
l:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.v)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
ha:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.l(c,z)+a},
a6:function(a,b){return this.ha(a,b," ")},
fK:function(a,b,c){if(c>a.length)throw H.h(P.ah(c,0,a.length,null,null))
return H.fg(a,b,c)},
i:function(a){return a},
gS:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
$isdX:1,
$isn:1}}],["","",,H,{"^":"",
h_:function(){return new P.ib("No element")},
Z:{"^":"iK;a",
gk:function(a){return this.a.length},
j:function(a,b){return C.h.bW(this.a,b)},
$aseC:function(){return[P.A]},
$ast:function(){return[P.A]},
$asd:function(){return[P.A]},
$asf:function(){return[P.A]}},
fM:{"^":"d;"},
dO:{"^":"a;a,b,c,0d,$ti",
gL:function(a){return this.d},
B:function(){var z,y,x,w
z=this.a
y=J.bW(z)
x=y.gk(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.h(P.bb(z))
w=this.c
if(typeof x!=="number")return H.p(x)
if(w>=x){this.d=null
return!1}this.d=y.C(z,w);++this.c
return!0}},
hh:{"^":"d;a,b,$ti",
gV:function(a){return new H.hi(J.bK(this.a),this.b,this.$ti)},
gk:function(a){return J.b9(this.a)},
C:function(a,b){return this.b.$1(J.de(this.a,b))},
$asd:function(a,b){return[b]}},
hi:{"^":"cB;0a,b,c,$ti",
B:function(){var z=this.b
if(z.B()){this.a=this.c.$1(z.gL(z))
return!0}this.a=null
return!1},
gL:function(a){return this.a},
$ascB:function(a,b){return[b]}},
j_:{"^":"d;a,b,$ti",
gV:function(a){return new H.j0(J.bK(this.a),this.b,this.$ti)}},
j0:{"^":"cB;a,b,$ti",
B:function(){var z,y
for(z=this.a,y=this.b;z.B();)if(y.$1(z.gL(z)))return!0
return!1},
gL:function(a){var z=this.a
return z.gL(z)}},
c3:{"^":"a;$ti"},
eC:{"^":"a;$ti"},
iK:{"^":"c7+eC;"}}],["","",,H,{"^":"",
kH:function(a){return init.types[H.U(a)]},
kP:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.J(a).$isB},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a5(a)
if(typeof z!=="string")throw H.h(H.aN(a))
return z},
bq:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aY:function(a){var z,y,x,w,v,u,t,s,r
z=J.J(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.y||!!J.J(a).$iscW){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.h.b4(w,0)===36)w=C.h.cr(w,1)
r=H.d9(H.bJ(H.aP(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
e_:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
hL:function(a){var z,y,x,w
z=H.c([],[P.A])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.w)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.h(H.aN(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.e.b7(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.h(H.aN(w))}return H.e_(z)},
e0:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.h(H.aN(x))
if(x<0)throw H.h(H.aN(x))
if(x>65535)return H.hL(a)}return H.e_(a)},
hK:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.e.b7(z,10))>>>0,56320|z&1023)}throw H.h(P.ah(a,0,1114111,null,null))},
a8:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hJ:function(a){return a.b?H.a8(a).getUTCFullYear()+0:H.a8(a).getFullYear()+0},
hH:function(a){return a.b?H.a8(a).getUTCMonth()+1:H.a8(a).getMonth()+1},
hD:function(a){return a.b?H.a8(a).getUTCDate()+0:H.a8(a).getDate()+0},
hE:function(a){return a.b?H.a8(a).getUTCHours()+0:H.a8(a).getHours()+0},
hG:function(a){return a.b?H.a8(a).getUTCMinutes()+0:H.a8(a).getMinutes()+0},
hI:function(a){return a.b?H.a8(a).getUTCSeconds()+0:H.a8(a).getSeconds()+0},
hF:function(a){return a.b?H.a8(a).getUTCMilliseconds()+0:H.a8(a).getMilliseconds()+0},
p:function(a){throw H.h(H.aN(a))},
i:function(a,b){if(a==null)J.b9(a)
throw H.h(H.aO(a,b))},
aO:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.az(!0,b,"index",null)
z=H.U(J.b9(a))
if(!(b<0)){if(typeof z!=="number")return H.p(z)
y=b>=z}else y=!0
if(y)return P.M(b,a,"index",null,z)
return P.ca(b,"index",null)},
kD:function(a,b,c){if(a>c)return new P.c9(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c9(a,c,!0,b,"end","Invalid value")
return new P.az(!0,b,"end",null)},
aN:function(a){return new P.az(!0,a,null,null)},
ky:function(a){if(typeof a!=="number")throw H.h(H.aN(a))
return a},
h:function(a){var z
if(a==null)a=new P.dW()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fi})
z.name=""}else z.toString=H.fi
return z},
fi:function(){return J.a5(this.dartException)},
r:function(a){throw H.h(a)},
w:function(a){throw H.h(P.bb(a))},
aR:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.l1(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.b7(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cF(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dV(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$ek()
u=$.$get$el()
t=$.$get$em()
s=$.$get$en()
r=$.$get$er()
q=$.$get$es()
p=$.$get$ep()
$.$get$eo()
o=$.$get$eu()
n=$.$get$et()
m=v.a5(y)
if(m!=null)return z.$1(H.cF(H.R(y),m))
else{m=u.a5(y)
if(m!=null){m.method="call"
return z.$1(H.cF(H.R(y),m))}else{m=t.a5(y)
if(m==null){m=s.a5(y)
if(m==null){m=r.a5(y)
if(m==null){m=q.a5(y)
if(m==null){m=p.a5(y)
if(m==null){m=s.a5(y)
if(m==null){m=o.a5(y)
if(m==null){m=n.a5(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dV(H.R(y),m))}}return z.$1(new H.iJ(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.e6()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.az(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.e6()
return a},
b7:function(a){var z
if(a==null)return new H.eT(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eT(a)},
kF:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.X(0,a[y],a[x])}return b},
kO:function(a,b,c,d,e,f){H.k(a,"$iscz")
switch(H.U(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.q("Unsupported number of arguments for wrapped closure"))},
b5:function(a,b){var z
H.U(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kO)
a.$identity=z
return z},
fy:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.J(d).$isf){z.$reflectionInfo=d
x=H.hO(z).r}else x=d
w=e?Object.create(new H.ic().constructor.prototype):Object.create(new H.cq(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aq
if(typeof u!=="number")return u.D()
$.aq=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dn(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.kH,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.di:H.cr
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.h("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dn(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fv:function(a,b,c,d){var z=H.cr
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dn:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fx(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fv(y,!w,z,b)
if(y===0){w=$.aq
if(typeof w!=="number")return w.D()
$.aq=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.ba
if(v==null){v=H.bZ("self")
$.ba=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aq
if(typeof w!=="number")return w.D()
$.aq=w+1
t+=w
w="return function("+t+"){return this."
v=$.ba
if(v==null){v=H.bZ("self")
$.ba=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
fw:function(a,b,c,d){var z,y
z=H.cr
y=H.di
switch(b?-1:a){case 0:throw H.h(H.hX("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fx:function(a,b){var z,y,x,w,v,u,t,s
z=$.ba
if(z==null){z=H.bZ("self")
$.ba=z}y=$.dh
if(y==null){y=H.bZ("receiver")
$.dh=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fw(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.aq
if(typeof y!=="number")return y.D()
$.aq=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.aq
if(typeof y!=="number")return y.D()
$.aq=y+1
return new Function(z+y+"}")()},
d4:function(a,b,c,d,e,f,g){var z,y
z=J.bj(H.bJ(b))
H.U(c)
y=!!J.J(d).$isf?J.bj(d):d
return H.fy(a,z,c,y,!!e,f,g)},
R:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.aw(a,"String"))},
kU:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aw(a,"num"))},
f6:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.aw(a,"bool"))},
U:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.aw(a,"int"))},
fe:function(a,b){throw H.h(H.aw(a,H.R(b).substring(3)))},
kW:function(a,b){var z=J.bW(b)
throw H.h(H.fu(a,z.bu(b,3,z.gk(b))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.J(a)[b])return a
H.fe(a,b)},
e:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.J(a)[b]
else z=!0
if(z)return a
H.kW(a,b)},
bJ:function(a){if(a==null)return a
if(!!J.J(a).$isf)return a
throw H.h(H.aw(a,"List"))},
kQ:function(a,b){if(a==null)return a
if(!!J.J(a).$isf)return a
if(J.J(a)[b])return a
H.fe(a,b)},
f7:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.U(z)]
else return a.$S()}return},
bV:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.f7(J.J(a))
if(z==null)return!1
y=H.fa(z,null,b,null)
return y},
b:function(a,b){var z,y
if(a==null)return a
if($.d0)return a
$.d0=!0
try{if(H.bV(a,b))return a
z=H.bX(b)
y=H.aw(a,z)
throw H.h(y)}finally{$.d0=!1}},
d6:function(a,b){if(a!=null&&!H.d3(a,b))H.r(H.aw(a,H.bX(b)))
return a},
f1:function(a){var z
if(a instanceof H.u){z=H.f7(J.J(a))
if(z!=null)return H.bX(z)
return"Closure"}return H.aY(a)},
l0:function(a){throw H.h(new P.fF(H.R(a)))},
f8:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
aP:function(a){if(a==null)return
return a.$ti},
mf:function(a,b,c){return H.b8(a["$as"+H.j(c)],H.aP(b))},
bI:function(a,b,c,d){var z
H.R(c)
H.U(d)
z=H.b8(a["$as"+H.j(c)],H.aP(b))
return z==null?null:z[d]},
ay:function(a,b,c){var z
H.R(b)
H.U(c)
z=H.b8(a["$as"+H.j(b)],H.aP(a))
return z==null?null:z[c]},
z:function(a,b){var z
H.U(b)
z=H.aP(a)
return z==null?null:z[b]},
bX:function(a){var z=H.aQ(a,null)
return z},
aQ:function(a,b){var z,y
H.x(b,"$isf",[P.n],"$asf")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.d9(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.U(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.j(b[y])}if('func' in a)return H.ko(a,b)
if('futureOr' in a)return"FutureOr<"+H.aQ("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ko:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.n]
H.x(b,"$isf",z,"$asf")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.i(b,r)
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
for(z=H.kE(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.R(z[l])
n=n+m+H.aQ(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
d9:function(a,b,c){var z,y,x,w,v,u
H.x(c,"$isf",[P.n],"$asf")
if(a==null)return""
z=new P.bS("")
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
return H.f4(H.b8(y[d],z),null,c,null)},
x:function(a,b,c,d){var z,y
H.R(b)
H.bJ(c)
H.R(d)
if(a==null)return a
z=H.bH(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.d9(c,0,null)
throw H.h(H.aw(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
f4:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ak(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ak(a[y],b,c[y],d))return!1
return!0},
md:function(a,b,c){return a.apply(b,H.b8(J.J(b)["$as"+H.j(c)],H.aP(b)))},
fb:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="I"||a===-1||a===-2||H.fb(z)}return!1},
d3:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="I"||b===-1||b===-2||H.fb(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.d3(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bV(a,b)}y=J.J(a).constructor
x=H.aP(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ak(y,null,b,null)
return z},
C:function(a,b){if(a!=null&&!H.d3(a,b))throw H.h(H.aw(a,H.bX(b)))
return a},
ak:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ak(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="I")return!0
if('func' in c)return H.fa(a,b,c,d)
if('func' in a)return c.builtin$cls==="cz"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ak("type" in a?a.type:null,b,x,d)
else if(H.ak(a,b,x,d))return!0
else{if(!('$is'+"bg" in y.prototype))return!1
w=y.prototype["$as"+"bg"]
v=H.b8(w,z?a.slice(1):null)
return H.ak(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bX(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.f4(H.b8(r,z),b,u,d)},
fa:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ak(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ak(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ak(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ak(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kT(m,b,l,d)},
kT:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ak(c[w],d,a[w],b))return!1}return!0},
me:function(a,b,c){Object.defineProperty(a,H.R(b),{value:c,enumerable:false,writable:true,configurable:true})},
kR:function(a){var z,y,x,w,v,u
z=H.R($.f9.$1(a))
y=$.cj[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cm[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.R($.f3.$2(a,z))
if(z!=null){y=$.cj[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cm[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cn(x)
$.cj[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cm[z]=x
return x}if(v==="-"){u=H.cn(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fd(a,x)
if(v==="*")throw H.h(P.eB(z))
if(init.leafTags[z]===true){u=H.cn(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fd(a,x)},
fd:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.db(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cn:function(a){return J.db(a,!1,null,!!a.$isB)},
kS:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cn(z)
else return J.db(z,c,null,null)},
kM:function(){if(!0===$.d8)return
$.d8=!0
H.kN()},
kN:function(){var z,y,x,w,v,u,t,s
$.cj=Object.create(null)
$.cm=Object.create(null)
H.kI()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.ff.$1(v)
if(u!=null){t=H.kS(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kI:function(){var z,y,x,w,v,u,t
z=C.E()
z=H.b4(C.B,H.b4(C.G,H.b4(C.n,H.b4(C.n,H.b4(C.F,H.b4(C.C,H.b4(C.D(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.f9=new H.kJ(v)
$.f3=new H.kK(u)
$.ff=new H.kL(t)},
b4:function(a,b){return a(b)||b},
fg:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fh:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hN:{"^":"a;a,b,c,d,e,f,r,0x",n:{
hO:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bj(z)
y=z[0]
x=z[1]
return new H.hN(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ix:{"^":"a;a,b,c,d,e,f",
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
n:{
av:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.n])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ix(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cc:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eq:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hy:{"^":"Y;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
n:{
dV:function(a,b){return new H.hy(a,b==null?null:b.method)}}},
h4:{"^":"Y;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
n:{
cF:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.h4(a,y,z?null:b.receiver)}}},
iJ:{"^":"Y;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
l1:{"^":"u:16;a",
$1:function(a){if(!!J.J(a).$isY)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eT:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isao:1},
u:{"^":"a;",
i:function(a){return"Closure '"+H.aY(this).trim()+"'"},
gdL:function(){return this},
$iscz:1,
gdL:function(){return this}},
ea:{"^":"u;"},
ic:{"^":"ea;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cq:{"^":"ea;a,b,c,d",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cq))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gS:function(a){var z,y
z=this.c
if(z==null)y=H.bq(this.a)
else y=typeof z!=="object"?J.aS(z):H.bq(z)
return(y^H.bq(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.aY(z)+"'")},
n:{
cr:function(a){return a.a},
di:function(a){return a.c},
bZ:function(a){var z,y,x,w,v
z=new H.cq("self","target","receiver","name")
y=J.bj(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iy:{"^":"Y;a",
i:function(a){return this.a},
n:{
aw:function(a,b){return new H.iy("TypeError: "+H.j(P.c2(a))+": type '"+H.f1(a)+"' is not a subtype of type '"+b+"'")}}},
ft:{"^":"Y;a",
i:function(a){return this.a},
n:{
fu:function(a,b){return new H.ft("CastError: "+H.j(P.c2(a))+": type '"+H.f1(a)+"' is not a subtype of type '"+b+"'")}}},
hW:{"^":"Y;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
n:{
hX:function(a){return new H.hW(a)}}},
aV:{"^":"hf;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gap:function(a){return new H.dN(this,[H.z(this,0)])},
d4:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cJ(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cJ(y,b)}else return this.fW(b)},
fW:function(a){var z=this.d
if(z==null)return!1
return this.c7(this.bB(z,J.aS(a)&0x3ffffff),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.b5(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.b5(w,b)
x=y==null?null:y.b
return x}else return this.fX(b)},
fX:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bB(z,J.aS(a)&0x3ffffff)
x=this.c7(y,a)
if(x<0)return
return y[x].b},
X:function(a,b,c){var z,y,x,w,v,u
H.C(b,H.z(this,0))
H.C(c,H.z(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bH()
this.b=z}this.cC(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bH()
this.c=y}this.cC(y,b,c)}else{x=this.d
if(x==null){x=this.bH()
this.d=x}w=J.aS(b)&0x3ffffff
v=this.bB(x,w)
if(v==null)this.bL(x,w,[this.bI(b,c)])
else{u=this.c7(v,b)
if(u>=0)v[u].b=c
else v.push(this.bI(b,c))}}},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.z(this,0),H.z(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.h(P.bb(this))
z=z.c}},
cC:function(a,b,c){var z
H.C(b,H.z(this,0))
H.C(c,H.z(this,1))
z=this.b5(a,b)
if(z==null)this.bL(a,b,this.bI(b,c))
else z.b=c},
en:function(){this.r=this.r+1&67108863},
bI:function(a,b){var z,y
z=new H.h7(H.C(a,H.z(this,0)),H.C(b,H.z(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.en()
return z},
c7:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.S(a[y].a,b))return y
return-1},
i:function(a){return P.dQ(this)},
b5:function(a,b){return a[b]},
bB:function(a,b){return a[b]},
bL:function(a,b,c){a[b]=c},
eh:function(a,b){delete a[b]},
cJ:function(a,b){return this.b5(a,b)!=null},
bH:function(){var z=Object.create(null)
this.bL(z,"<non-identifier-key>",z)
this.eh(z,"<non-identifier-key>")
return z},
$isdM:1},
h7:{"^":"a;a,b,0c,0d"},
dN:{"^":"fM;a,$ti",
gk:function(a){return this.a.a},
gV:function(a){var z,y
z=this.a
y=new H.h8(z,z.r,this.$ti)
y.c=z.e
return y}},
h8:{"^":"a;a,b,0c,0d,$ti",
gL:function(a){return this.d},
B:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.bb(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kJ:{"^":"u:16;a",
$1:function(a){return this.a(a)}},
kK:{"^":"u:26;a",
$2:function(a,b){return this.a(a,b)}},
kL:{"^":"u:27;a",
$1:function(a){return this.a(H.R(a))}},
h2:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isdX:1,
n:{
h3:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.h(new P.fV("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
kE:function(a){return J.dG(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kV:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bD:function(a){return a},
aM:function(a,b,c){H.bJ(b)
if(a>>>0!==a||a>=c)throw H.h(H.aO(b,a))},
kn:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.h(H.kD(a,b,c))
return b},
hv:{"^":"o;",$islZ:1,"%":"DataView;ArrayBufferView;cK|eN|eO|hu|eP|eQ|aL"},
cK:{"^":"hv;",
gk:function(a){return a.length},
$isB:1,
$asB:I.d5},
hu:{"^":"eO;",
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
$asc3:function(){return[P.v]},
$ast:function(){return[P.v]},
$isd:1,
$asd:function(){return[P.v]},
$isf:1,
$asf:function(){return[P.v]},
"%":"Float32Array|Float64Array"},
aL:{"^":"eQ;",
$asc3:function(){return[P.A]},
$ast:function(){return[P.A]},
$isd:1,
$asd:function(){return[P.A]},
$isf:1,
$asf:function(){return[P.A]}},
lA:{"^":"aL;",
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lB:{"^":"aL;",
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lC:{"^":"aL;",
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lD:{"^":"aL;",
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lE:{"^":"aL;",
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lF:{"^":"aL;",
gk:function(a){return a.length},
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hw:{"^":"aL;",
gk:function(a){return a.length},
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
bt:function(a,b,c){return new Uint8Array(a.subarray(b,H.kn(b,c,a.length)))},
"%":";Uint8Array"},
eN:{"^":"cK+t;"},
eO:{"^":"eN+c3;"},
eP:{"^":"cK+t;"},
eQ:{"^":"eP+c3;"}}],["","",,P,{"^":"",
j2:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kv()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b5(new P.j4(z),1)).observe(y,{childList:true})
return new P.j3(z,y,x)}else if(self.setImmediate!=null)return P.kw()
return P.kx()},
m2:[function(a){self.scheduleImmediate(H.b5(new P.j5(H.b(a,{func:1,ret:-1})),0))},"$1","kv",4,0,12],
m3:[function(a){self.setImmediate(H.b5(new P.j6(H.b(a,{func:1,ret:-1})),0))},"$1","kw",4,0,12],
m4:[function(a){P.cS(C.l,H.b(a,{func:1,ret:-1}))},"$1","kx",4,0,12],
cS:function(a,b){var z
H.b(b,{func:1,ret:-1})
z=C.e.Z(a.a,1000)
return P.k1(z<0?0:z,b)},
ef:function(a,b){var z
H.b(b,{func:1,ret:-1,args:[P.aZ]})
z=C.e.Z(a.a,1000)
return P.k2(z<0?0:z,b)},
kr:function(a,b){if(H.bV(a,{func:1,args:[P.a,P.ao]}))return b.hj(a,null,P.a,P.ao)
if(H.bV(a,{func:1,args:[P.a]}))return H.b(a,{func:1,ret:null,args:[P.a]})
throw H.h(P.bY(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kq:function(){var z,y
for(;z=$.b3,z!=null;){$.bF=null
y=z.b
$.b3=y
if(y==null)$.bE=null
z.a.$0()}},
mc:[function(){$.d1=!0
try{P.kq()}finally{$.bF=null
$.d1=!1
if($.b3!=null)$.$get$cY().$1(P.f5())}},"$0","f5",0,0,3],
f0:function(a){var z=new P.eI(H.b(a,{func:1,ret:-1}))
if($.b3==null){$.bE=z
$.b3=z
if(!$.d1)$.$get$cY().$1(P.f5())}else{$.bE.b=z
$.bE=z}},
ku:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
z=$.b3
if(z==null){P.f0(a)
$.bF=$.bE
return}y=new P.eI(a)
x=$.bF
if(x==null){y.b=z
$.bF=y
$.b3=y}else{y.b=x.b
x.b=y
$.bF=y
if(y.b==null)$.bE=y}},
kX:function(a){var z,y
z={func:1,ret:-1}
H.b(a,z)
y=$.N
if(C.i===y){P.ci(null,null,C.i,a)
return}y.toString
P.ci(null,null,y,H.b(y.bR(a),z))},
ee:function(a,b){var z,y
z={func:1,ret:-1}
H.b(b,z)
y=$.N
if(y===C.i){y.toString
return P.cS(a,b)}return P.cS(a,H.b(y.bR(b),z))},
iu:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aZ]}
H.b(b,z)
y=$.N
if(y===C.i){y.toString
return P.ef(a,b)}x=y.d0(b,P.aZ)
$.N.toString
return P.ef(a,H.b(x,z))},
ch:function(a,b,c,d,e){var z={}
z.a=d
P.ku(new P.ks(z,e))},
eZ:function(a,b,c,d,e){var z,y
H.b(d,{func:1,ret:e})
y=$.N
if(y===c)return d.$0()
$.N=c
z=y
try{y=d.$0()
return y}finally{$.N=z}},
f_:function(a,b,c,d,e,f,g){var z,y
H.b(d,{func:1,ret:f,args:[g]})
H.C(e,g)
y=$.N
if(y===c)return d.$1(e)
$.N=c
z=y
try{y=d.$1(e)
return y}finally{$.N=z}},
kt:function(a,b,c,d,e,f,g,h,i){var z,y
H.b(d,{func:1,ret:g,args:[h,i]})
H.C(e,h)
H.C(f,i)
y=$.N
if(y===c)return d.$2(e,f)
$.N=c
z=y
try{y=d.$2(e,f)
return y}finally{$.N=z}},
ci:function(a,b,c,d){var z
H.b(d,{func:1,ret:-1})
z=C.i!==c
if(z)d=!(!z||!1)?c.bR(d):c.fI(d,-1)
P.f0(d)},
j4:{"^":"u:15;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
j3:{"^":"u:23;a,b,c",
$1:function(a){var z,y
this.a.a=H.b(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
j5:{"^":"u:2;a",
$0:function(){this.a.$0()}},
j6:{"^":"u:2;a",
$0:function(){this.a.$0()}},
eW:{"^":"a;a,0b,c",
e4:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b5(new P.k4(this,b),0),a)
else throw H.h(P.ad("`setTimeout()` not found."))},
e5:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b5(new P.k3(this,a,Date.now(),b),0),a)
else throw H.h(P.ad("Periodic timer."))},
$isaZ:1,
n:{
k1:function(a,b){var z=new P.eW(!0,0)
z.e4(a,b)
return z},
k2:function(a,b){var z=new P.eW(!1,0)
z.e5(a,b)
return z}}},
k4:{"^":"u:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
k3:{"^":"u:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.e.dW(w,x)}z.c=y
this.d.$1(z)}},
b2:{"^":"a;0a,b,c,d,e,$ti",
h3:function(a){if(this.c!==6)return!0
return this.b.b.ci(H.b(this.d,{func:1,ret:P.a4,args:[P.a]}),a.a,P.a4,P.a)},
fV:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.z(this,1)}
w=this.b.b
if(H.bV(z,{func:1,args:[P.a,P.ao]}))return H.d6(w.ho(z,a.a,a.b,null,y,P.ao),x)
else return H.d6(w.ci(H.b(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aI:{"^":"a;cV:a<,b,0f_:c<,$ti",
dI:function(a,b,c){var z,y,x,w
z=H.z(this,0)
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.N
if(y!==C.i){y.toString
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kr(b,y)}H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aI(0,$.N,[c])
w=b==null?1:3
this.cD(new P.b2(x,w,a,b,[z,c]))
return x},
ht:function(a,b){return this.dI(a,null,b)},
cD:function(a){var z,y
z=this.a
if(z<=1){a.a=H.k(this.c,"$isb2")
this.c=a}else{if(z===2){y=H.k(this.c,"$isaI")
z=y.a
if(z<4){y.cD(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.ci(null,null,z,H.b(new P.jk(this,a),{func:1,ret:-1}))}},
cQ:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.k(this.c,"$isb2")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.k(this.c,"$isaI")
y=u.a
if(y<4){u.cQ(a)
return}this.a=y
this.c=u.c}z.a=this.b6(a)
y=this.b
y.toString
P.ci(null,null,y,H.b(new P.jp(z,this),{func:1,ret:-1}))}},
bK:function(){var z=H.k(this.c,"$isb2")
this.c=null
return this.b6(z)},
b6:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cG:function(a){var z,y,x,w
z=H.z(this,0)
H.d6(a,{futureOr:1,type:z})
y=this.$ti
x=H.bH(a,"$isbg",y,"$asbg")
if(x){z=H.bH(a,"$isaI",y,null)
if(z)P.eK(a,this)
else P.jl(a,this)}else{w=this.bK()
H.C(a,z)
this.a=4
this.c=a
P.bB(this,w)}},
bx:[function(a,b){var z
H.k(b,"$isao")
z=this.bK()
this.a=8
this.c=new P.ae(a,b)
P.bB(this,z)},function(a){return this.bx(a,null)},"hz","$2","$1","ged",4,2,30],
$isbg:1,
n:{
jl:function(a,b){var z,y,x
b.a=1
try{a.dI(new P.jm(b),new P.jn(b),null)}catch(x){z=H.aR(x)
y=H.b7(x)
P.kX(new P.jo(b,z,y))}},
eK:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.k(a.c,"$isaI")
if(z>=4){y=b.bK()
b.a=a.a
b.c=a.c
P.bB(b,y)}else{y=H.k(b.c,"$isb2")
b.a=2
b.c=a
a.cQ(y)}},
bB:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.k(y.c,"$isae")
y=y.b
u=v.a
t=v.b
y.toString
P.ch(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
if(p){H.k(r,"$isae")
y=y.b
u=r.a
t=r.b
y.toString
P.ch(null,null,y,u,t)
return}o=$.N
if(o==null?q!=null:o!==q)$.N=q
else o=null
y=b.c
if(y===8)new P.js(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jr(x,b,r).$0()}else if((y&2)!==0)new P.jq(z,x,b).$0()
if(o!=null)$.N=o
y=x.b
if(!!J.J(y).$isbg){if(y.a>=4){n=H.k(t.c,"$isb2")
t.c=null
b=t.b6(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eK(y,t)
return}}m=b.b
n=H.k(m.c,"$isb2")
m.c=null
b=m.b6(n)
y=x.a
u=x.b
if(!y){H.C(u,H.z(m,0))
m.a=4
m.c=u}else{H.k(u,"$isae")
m.a=8
m.c=u}z.a=m
y=m}}}},
jk:{"^":"u:2;a,b",
$0:function(){P.bB(this.a,this.b)}},
jp:{"^":"u:2;a,b",
$0:function(){P.bB(this.b,this.a.a)}},
jm:{"^":"u:15;a",
$1:function(a){var z=this.a
z.a=0
z.cG(a)}},
jn:{"^":"u:34;a",
$2:function(a,b){this.a.bx(a,H.k(b,"$isao"))},
$1:function(a){return this.$2(a,null)}},
jo:{"^":"u:2;a,b,c",
$0:function(){this.a.bx(this.b,this.c)}},
js:{"^":"u:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dG(H.b(w.d,{func:1}),null)}catch(v){y=H.aR(v)
x=H.b7(v)
if(this.d){w=H.k(this.a.a.c,"$isae").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.k(this.a.a.c,"$isae")
else u.b=new P.ae(y,x)
u.a=!0
return}if(!!J.J(z).$isbg){if(z instanceof P.aI&&z.gcV()>=4){if(z.gcV()===8){w=this.b
w.b=H.k(z.gf_(),"$isae")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ht(new P.jt(t),null)
w.a=!1}}},
jt:{"^":"u:36;a",
$1:function(a){return this.a}},
jr:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.z(x,0)
v=H.C(this.c,w)
u=H.z(x,1)
this.a.b=x.b.b.ci(H.b(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aR(t)
y=H.b7(t)
x=this.a
x.b=new P.ae(z,y)
x.a=!0}}},
jq:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.k(this.a.a.c,"$isae")
w=this.c
if(w.h3(z)&&w.e!=null){v=this.b
v.b=w.fV(z)
v.a=!1}}catch(u){y=H.aR(u)
x=H.b7(u)
w=H.k(this.a.a.c,"$isae")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ae(y,x)
s.a=!0}}},
eI:{"^":"a;a,0b"},
cP:{"^":"a;$ti",
gk:function(a){var z,y
z={}
y=new P.aI(0,$.N,[P.A])
z.a=0
this.h0(new P.ig(z,this),!0,new P.ih(z,y),y.ged())
return y}},
ig:{"^":"u;a,b",
$1:function(a){H.C(a,H.ay(this.b,"cP",0));++this.a.a},
$S:function(){return{func:1,ret:P.I,args:[H.ay(this.b,"cP",0)]}}},
ih:{"^":"u:2;a,b",
$0:function(){this.b.cG(this.a.a)}},
e8:{"^":"a;$ti"},
ie:{"^":"a;"},
aZ:{"^":"a;"},
ae:{"^":"a;a,b",
i:function(a){return H.j(this.a)},
$isY:1},
kb:{"^":"a;",$ism1:1},
ks:{"^":"u:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dW()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.h(z)
x=H.h(z)
x.stack=y.i(0)
throw x}},
jO:{"^":"kb;",
hp:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
try{if(C.i===$.N){a.$0()
return}P.eZ(null,null,this,a,-1)}catch(x){z=H.aR(x)
y=H.b7(x)
P.ch(null,null,this,z,H.k(y,"$isao"))}},
hq:function(a,b,c){var z,y,x
H.b(a,{func:1,ret:-1,args:[c]})
H.C(b,c)
try{if(C.i===$.N){a.$1(b)
return}P.f_(null,null,this,a,b,-1,c)}catch(x){z=H.aR(x)
y=H.b7(x)
P.ch(null,null,this,z,H.k(y,"$isao"))}},
fI:function(a,b){return new P.jQ(this,H.b(a,{func:1,ret:b}),b)},
bR:function(a){return new P.jP(this,H.b(a,{func:1,ret:-1}))},
d0:function(a,b){return new P.jR(this,H.b(a,{func:1,ret:-1,args:[b]}),b)},
dG:function(a,b){H.b(a,{func:1,ret:b})
if($.N===C.i)return a.$0()
return P.eZ(null,null,this,a,b)},
ci:function(a,b,c,d){H.b(a,{func:1,ret:c,args:[d]})
H.C(b,d)
if($.N===C.i)return a.$1(b)
return P.f_(null,null,this,a,b,c,d)},
ho:function(a,b,c,d,e,f){H.b(a,{func:1,ret:d,args:[e,f]})
H.C(b,e)
H.C(c,f)
if($.N===C.i)return a.$2(b,c)
return P.kt(null,null,this,a,b,c,d,e,f)},
hj:function(a,b,c,d){return H.b(a,{func:1,ret:b,args:[c,d]})}},
jQ:{"^":"u;a,b,c",
$0:function(){return this.a.dG(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jP:{"^":"u:3;a,b",
$0:function(){return this.a.hp(this.b)}},
jR:{"^":"u;a,b,c",
$1:function(a){var z=this.c
return this.a.hq(this.b,H.C(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
ha:function(a,b,c){H.bJ(a)
return H.x(H.kF(a,new H.aV(0,0,[b,c])),"$isdM",[b,c],"$asdM")},
h9:function(a,b){return new H.aV(0,0,[a,b])},
hb:function(a,b,c,d){return new P.jA(0,0,[d])},
fZ:function(a,b,c){var z,y
if(P.d2(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bG()
C.a.h(y,a)
try{P.kp(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.e9(b,H.kQ(z,"$isd"),", ")+c
return y.charCodeAt(0)==0?y:y},
cA:function(a,b,c){var z,y,x
if(P.d2(a))return b+"..."+c
z=new P.bS(b)
y=$.$get$bG()
C.a.h(y,a)
try{x=z
x.a=P.e9(x.gaw(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gaw()+c
y=z.gaw()
return y.charCodeAt(0)==0?y:y},
d2:function(a){var z,y
for(z=0;y=$.$get$bG(),z<y.length;++z)if(a===y[z])return!0
return!1},
kp:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gV(a)
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
dQ:function(a){var z,y,x
z={}
if(P.d2(a))return"{...}"
y=new P.bS("")
try{C.a.h($.$get$bG(),a)
x=y
x.a=x.gaw()+"{"
z.a=!0
J.fm(a,new P.hg(z,y))
z=y
z.a=z.gaw()+"}"}finally{z=$.$get$bG()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.gaw()
return z.charCodeAt(0)==0?z:z},
jA:{"^":"ju;a,0b,0c,0d,0e,0f,r,$ti",
gV:function(a){return P.eM(this,this.r,H.z(this,0))},
gk:function(a){return this.a},
h:function(a,b){var z,y
H.C(b,H.z(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.d_()
this.b=z}return this.cE(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.d_()
this.c=y}return this.cE(y,b)}else return this.e6(0,b)},
e6:function(a,b){var z,y,x
H.C(b,H.z(this,0))
z=this.d
if(z==null){z=P.d_()
this.d=z}y=this.cH(b)
x=z[y]
if(x==null)z[y]=[this.bw(b)]
else{if(this.cM(x,b)>=0)return!1
x.push(this.bw(b))}return!0},
R:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cR(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cR(this.c,b)
else return this.eW(0,b)},
eW:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.ek(z,b)
x=this.cM(y,b)
if(x<0)return!1
this.cX(y.splice(x,1)[0])
return!0},
cE:function(a,b){H.C(b,H.z(this,0))
if(H.k(a[b],"$iscZ")!=null)return!1
a[b]=this.bw(b)
return!0},
cR:function(a,b){var z
if(a==null)return!1
z=H.k(a[b],"$iscZ")
if(z==null)return!1
this.cX(z)
delete a[b]
return!0},
cF:function(){this.r=this.r+1&67108863},
bw:function(a){var z,y
z=new P.cZ(H.C(a,H.z(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cF()
return z},
cX:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cF()},
cH:function(a){return J.aS(a)&0x3ffffff},
ek:function(a,b){return a[this.cH(b)]},
cM:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.S(a[y].a,b))return y
return-1},
n:{
d_:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cZ:{"^":"a;a,0b,0c"},
jB:{"^":"a;a,b,0c,0d,$ti",
gL:function(a){return this.d},
B:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.bb(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.C(z.a,H.z(this,0))
this.c=z.b
return!0}}},
n:{
eM:function(a,b,c){var z=new P.jB(a,b,[c])
z.c=a.e
return z}}},
ju:{"^":"hY;"},
c7:{"^":"jC;",$isd:1,$isf:1},
t:{"^":"a;$ti",
gV:function(a){return new H.dO(a,this.gk(a),0,[H.bI(this,a,"t",0)])},
C:function(a,b){return this.j(a,b)},
hw:function(a,b){var z,y,x
z=H.c([],[H.bI(this,a,"t",0)])
C.a.sk(z,this.gk(a))
y=0
while(!0){x=this.gk(a)
if(typeof x!=="number")return H.p(x)
if(!(y<x))break
C.a.X(z,y,this.j(a,y));++y}return z},
hv:function(a){return this.hw(a,!0)},
i:function(a){return P.cA(a,"[","]")}},
hf:{"^":"aa;"},
hg:{"^":"u:13;a,b",
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
H.b(b,{func:1,ret:-1,args:[H.bI(this,a,"aa",0),H.bI(this,a,"aa",1)]})
for(z=J.bK(this.gap(a));z.B();){y=z.gL(z)
b.$2(y,this.j(a,y))}},
gk:function(a){return J.b9(this.gap(a))},
i:function(a){return P.dQ(a)},
$isa2:1},
i_:{"^":"a;$ti",
i:function(a){return P.cA(this,"{","}")},
C:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.df("index"))
if(b<0)H.r(P.ah(b,0,null,"index",null))
for(z=P.eM(this,this.r,H.z(this,0)),y=0;z.B();){x=z.d
if(b===y)return x;++y}throw H.h(P.M(b,this,"index",null,y))},
$isd:1},
hY:{"^":"i_;"},
jC:{"^":"a+t;"}}],["","",,P,{"^":"",cv:{"^":"a;$ti"},dr:{"^":"ie;$ti"},fO:{"^":"cv;",
$ascv:function(){return[P.n,[P.f,P.A]]}},iQ:{"^":"fO;a"},iR:{"^":"dr;",
fM:function(a,b,c){var z,y,x,w
z=a.length
P.e1(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.ka(0,0,x)
if(w.ej(a,b,z)!==z)w.cY(C.h.bW(a,z-1),0)
return C.J.bt(x,0,w.b)},
fL:function(a){return this.fM(a,0,null)},
$asdr:function(){return[P.n,[P.f,P.A]]}},ka:{"^":"a;a,b,c",
cY:function(a,b){var z,y,x,w,v
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
ej:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.h.bW(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.h.b4(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.cY(w,C.h.b4(a,u)))x=u}else if(w<=2047){v=this.b
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
fQ:function(a){var z=J.J(a)
if(!!z.$isu)return z.i(a)
return"Instance of '"+H.aY(a)+"'"},
hc:function(a,b,c,d){var z,y
H.C(b,d)
z=J.h0(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.X(z,y,b)
return H.x(z,"$isf",[d],"$asf")},
hd:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gV(a);x.B();)C.a.h(y,H.C(x.gL(x),c))
if(b)return y
return H.x(J.bj(y),"$isf",z,"$asf")},
cQ:function(a,b,c){var z,y
z=P.A
H.x(a,"$isd",[z],"$asd")
if(a.constructor===Array){H.x(a,"$isaU",[z],"$asaU")
y=a.length
c=P.e1(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a7()
z=c<y}else z=!0
return H.e0(z?C.a.bt(a,b,c):a)}return P.ii(a,b,c)},
ii:function(a,b,c){var z,y,x
H.x(a,"$isd",[P.A],"$asd")
z=J.bK(a)
for(y=0;y<b;++y)if(!z.B())throw H.h(P.ah(b,0,y,null,null))
x=[]
for(;z.B();)x.push(z.gL(z))
return H.e0(x)},
hP:function(a,b,c){return new H.h2(a,H.h3(a,!1,!0,!1))},
k9:function(a,b,c,d){var z,y,x,w,v,u
H.x(a,"$isf",[P.A],"$asf")
if(c===C.r){z=$.$get$eY().b
z=z.test(b)}else z=!1
if(z)return b
y=C.w.fL(H.C(b,H.ay(c,"cv",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.i(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.hK(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
c2:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a5(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fQ(a)},
q:function(a){return new P.eJ(a)},
dd:function(a){H.kV(a)},
a4:{"^":"a;"},
"+bool":0,
am:{"^":"a;a,b",
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.am))return!1
return this.a===b.a&&this.b===b.b},
gS:function(a){var z=this.a
return(z^C.e.b7(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fG(H.hJ(this))
y=P.bL(H.hH(this))
x=P.bL(H.hD(this))
w=P.bL(H.hE(this))
v=P.bL(H.hG(this))
u=P.bL(H.hI(this))
t=P.fH(H.hF(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
n:{
fG:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fH:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bL:function(a){if(a>=10)return""+a
return"0"+a}}},
v:{"^":"W;"},
"+double":0,
bd:{"^":"a;a",
a7:function(a,b){return C.e.a7(this.a,H.k(b,"$isbd").a)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.bd))return!1
return this.a===b.a},
gS:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fL()
y=this.a
if(y<0)return"-"+new P.bd(0-y).i(0)
x=z.$1(C.e.Z(y,6e7)%60)
w=z.$1(C.e.Z(y,1e6)%60)
v=new P.fK().$1(y%1e6)
return""+C.e.Z(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
n:{
dA:function(a,b,c,d,e,f){return new P.bd(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fK:{"^":"u:14;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fL:{"^":"u:14;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
Y:{"^":"a;"},
dW:{"^":"Y;",
i:function(a){return"Throw of null."}},
az:{"^":"Y;a,b,c,d",
gbz:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gby:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gbz()+y+x
if(!this.a)return w
v=this.gby()
u=P.c2(this.b)
return w+v+": "+H.j(u)},
n:{
fo:function(a){return new P.az(!1,null,null,a)},
bY:function(a,b,c){return new P.az(!0,a,b,c)},
df:function(a){return new P.az(!1,null,a,"Must not be null")}}},
c9:{"^":"az;e,f,a,b,c,d",
gbz:function(){return"RangeError"},
gby:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
n:{
ca:function(a,b,c){return new P.c9(null,null,!0,a,b,"Value not in range")},
ah:function(a,b,c,d,e){return new P.c9(b,c,!0,a,d,"Invalid value")},
e1:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.p(a)
if(0<=a){if(typeof c!=="number")return H.p(c)
z=a>c}else z=!0
if(z)throw H.h(P.ah(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.p(c)
z=b>c}else z=!0
if(z)throw H.h(P.ah(b,a,c,"end",f))
return b}return c}}},
fY:{"^":"az;e,k:f>,a,b,c,d",
gbz:function(){return"RangeError"},
gby:function(){if(J.fj(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
n:{
M:function(a,b,c,d,e){var z=H.U(e!=null?e:J.b9(b))
return new P.fY(b,z,!0,a,c,"Index out of range")}}},
iL:{"^":"Y;a",
i:function(a){return"Unsupported operation: "+this.a},
n:{
ad:function(a){return new P.iL(a)}}},
iI:{"^":"Y;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
n:{
eB:function(a){return new P.iI(a)}}},
ib:{"^":"Y;a",
i:function(a){return"Bad state: "+this.a}},
fB:{"^":"Y;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.c2(z))+"."},
n:{
bb:function(a){return new P.fB(a)}}},
hz:{"^":"a;",
i:function(a){return"Out of Memory"},
$isY:1},
e6:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isY:1},
fF:{"^":"Y;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eJ:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
fV:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.h.bu(x,0,75)+"..."
return y+"\n"+x}},
A:{"^":"W;"},
"+int":0,
d:{"^":"a;$ti",
gk:function(a){var z,y
z=this.gV(this)
for(y=0;z.B();)++y
return y},
C:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.df("index"))
if(b<0)H.r(P.ah(b,0,null,"index",null))
for(z=this.gV(this),y=0;z.B();){x=z.gL(z)
if(b===y)return x;++y}throw H.h(P.M(b,this,"index",null,y))},
i:function(a){return P.fZ(this,"(",")")}},
cB:{"^":"a;$ti"},
f:{"^":"a;$ti",$isd:1},
"+List":0,
a2:{"^":"a;$ti"},
I:{"^":"a;",
gS:function(a){return P.a.prototype.gS.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
W:{"^":"a;"},
"+num":0,
a:{"^":";",
q:function(a,b){return this===b},
gS:function(a){return H.bq(this)},
i:function(a){return"Instance of '"+H.aY(this)+"'"},
toString:function(){return this.i(this)}},
ao:{"^":"a;"},
n:{"^":"a;",$isdX:1},
"+String":0,
bS:{"^":"a;aw:a<",
gk:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
n:{
e9:function(a,b,c){var z=J.bK(b)
if(!z.B())return a
if(c.length===0){do a+=H.j(z.gL(z))
while(z.B())}else{a+=H.j(z.gL(z))
for(;z.B();)a=a+c+H.j(z.gL(z))}return a}}}}],["","",,W,{"^":"",
cu:function(a,b){var z=document.createElement("canvas")
return z},
fN:function(a){H.k(a,"$isa6")
return"wheel"},
dF:function(a,b,c){var z=document.createElement("img")
z.src=b
return z},
ce:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eL:function(a,b,c,d){var z,y
z=W.ce(W.ce(W.ce(W.ce(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
f2:function(a,b){var z
H.b(a,{func:1,ret:-1,args:[b]})
z=$.N
if(z===C.i)return a
return z.d0(a,b)},
bi:{"^":"a_;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
l3:{"^":"o;0k:length=","%":"AccessibleNodeList"},
l4:{"^":"bi;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
l5:{"^":"bi;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
fs:{"^":"o;","%":";Blob"},
ct:{"^":"bi;",
br:function(a,b,c){if(c!=null)return a.getContext(b,P.kz(c,null))
return a.getContext(b)},
dM:function(a,b){return this.br(a,b,null)},
$isct:1,
"%":"HTMLCanvasElement"},
dl:{"^":"o;",$isdl:1,"%":"CanvasRenderingContext2D"},
lb:{"^":"K;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
ld:{"^":"fE;0k:length=","%":"CSSPerspective"},
bc:{"^":"o;",$isbc:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
le:{"^":"ja;0k:length=",
dN:function(a,b){var z=a.getPropertyValue(this.ea(a,b))
return z==null?"":z},
ea:function(a,b){var z,y
z=$.$get$ds()
y=z[b]
if(typeof y==="string")return y
y=this.f9(a,b)
z[b]=y
return y},
f9:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fI()+b
if(z in a)return z
return b},
gbS:function(a){return a.bottom},
gae:function(a){return a.height},
gaH:function(a){return a.left},
gaV:function(a){return a.right},
gb_:function(a){return a.top},
gaf:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fD:{"^":"a;",
gaH:function(a){return this.dN(a,"left")}},
dt:{"^":"o;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
fE:{"^":"o;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
lf:{"^":"dt;0k:length=","%":"CSSTransformValue"},
lg:{"^":"dt;0k:length=","%":"CSSUnparsedValue"},
lh:{"^":"o;0k:length=","%":"DataTransferItemList"},
li:{"^":"o;",
i:function(a){return String(a)},
"%":"DOMException"},
lj:{"^":"jc;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[[P.a9,P.W]]},
$ast:function(){return[[P.a9,P.W]]},
$isd:1,
$asd:function(){return[[P.a9,P.W]]},
$isf:1,
$asf:function(){return[[P.a9,P.W]]},
$asy:function(){return[[P.a9,P.W]]},
"%":"ClientRectList|DOMRectList"},
fJ:{"^":"o;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gaf(a))+" x "+H.j(this.gae(a))},
q:function(a,b){var z
if(b==null)return!1
z=H.bH(b,"$isa9",[P.W],"$asa9")
if(!z)return!1
z=J.ck(b)
return a.left===z.gaH(b)&&a.top===z.gb_(b)&&this.gaf(a)===z.gaf(b)&&this.gae(a)===z.gae(b)},
gS:function(a){return W.eL(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gaf(a)&0x1FFFFFFF,this.gae(a)&0x1FFFFFFF)},
gbS:function(a){return a.bottom},
gae:function(a){return a.height},
gaH:function(a){return a.left},
gaV:function(a){return a.right},
gb_:function(a){return a.top},
gaf:function(a){return a.width},
$isa9:1,
$asa9:function(){return[P.W]},
"%":";DOMRectReadOnly"},
lk:{"^":"je;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[P.n]},
$ast:function(){return[P.n]},
$isd:1,
$asd:function(){return[P.n]},
$isf:1,
$asf:function(){return[P.n]},
$asy:function(){return[P.n]},
"%":"DOMStringList"},
ll:{"^":"o;0k:length=","%":"DOMTokenList"},
j9:{"^":"c7;a,b",
gk:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return H.k(z[b],"$isa_")},
h:function(a,b){this.a.appendChild(b)
return b},
gV:function(a){var z=this.hv(this)
return new J.al(z,z.length,0,[H.z(z,0)])},
$ast:function(){return[W.a_]},
$asd:function(){return[W.a_]},
$asf:function(){return[W.a_]}},
a_:{"^":"K;",
gd2:function(a){return new W.j9(a,a.children)},
gd3:function(a){return P.hM(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.W)},
i:function(a){return a.localName},
$isa_:1,
"%":";Element"},
a1:{"^":"o;",$isa1:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a6:{"^":"o;",
cZ:["dS",function(a,b,c,d){H.b(c,{func:1,args:[W.a1]})
if(c!=null)this.e7(a,b,c,!1)}],
e7:function(a,b,c,d){return a.addEventListener(b,H.b5(H.b(c,{func:1,args:[W.a1]}),1),!1)},
$isa6:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eR|eS|eU|eV"},
bf:{"^":"fs;",$isbf:1,"%":"File"},
lm:{"^":"jj;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bf]},
$ast:function(){return[W.bf]},
$isd:1,
$asd:function(){return[W.bf]},
$isf:1,
$asf:function(){return[W.bf]},
$asy:function(){return[W.bf]},
"%":"FileList"},
ln:{"^":"a6;0k:length=","%":"FileWriter"},
lo:{"^":"bi;0k:length=","%":"HTMLFormElement"},
bh:{"^":"o;",$isbh:1,"%":"Gamepad"},
lp:{"^":"o;0k:length=","%":"History"},
lq:{"^":"jw;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.K]},
$ast:function(){return[W.K]},
$isd:1,
$asd:function(){return[W.K]},
$isf:1,
$asf:function(){return[W.K]},
$asy:function(){return[W.K]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c4:{"^":"o;0d5:data=",$isc4:1,"%":"ImageData"},
dE:{"^":"bi;",$isdE:1,"%":"HTMLImageElement"},
bk:{"^":"cT;",$isbk:1,"%":"KeyboardEvent"},
lu:{"^":"o;",
i:function(a){return String(a)},
"%":"Location"},
lv:{"^":"o;0k:length=","%":"MediaList"},
lw:{"^":"a6;",
cZ:function(a,b,c,d){H.b(c,{func:1,args:[W.a1]})
if(b==="message")a.start()
this.dS(a,b,c,!1)},
"%":"MessagePort"},
lx:{"^":"jD;",
j:function(a,b){return P.aJ(a.get(H.R(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aJ(y.value[1]))}},
gap:function(a){var z=H.c([],[P.n])
this.J(a,new W.hr(z))
return z},
gk:function(a){return a.size},
$asaa:function(){return[P.n,null]},
$isa2:1,
$asa2:function(){return[P.n,null]},
"%":"MIDIInputMap"},
hr:{"^":"u:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
ly:{"^":"jE;",
j:function(a,b){return P.aJ(a.get(H.R(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aJ(y.value[1]))}},
gap:function(a){var z=H.c([],[P.n])
this.J(a,new W.hs(z))
return z},
gk:function(a){return a.size},
$asaa:function(){return[P.n,null]},
$isa2:1,
$asa2:function(){return[P.n,null]},
"%":"MIDIOutputMap"},
hs:{"^":"u:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bl:{"^":"o;",$isbl:1,"%":"MimeType"},
lz:{"^":"jG;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bl]},
$ast:function(){return[W.bl]},
$isd:1,
$asd:function(){return[W.bl]},
$isf:1,
$asf:function(){return[W.bl]},
$asy:function(){return[W.bl]},
"%":"MimeTypeArray"},
an:{"^":"cT;",$isan:1,"%":"PointerEvent;DragEvent|MouseEvent"},
j8:{"^":"c7;a",
gV:function(a){var z=this.a.childNodes
return new W.dC(z,z.length,-1,[H.bI(C.K,z,"y",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
$ast:function(){return[W.K]},
$asd:function(){return[W.K]},
$asf:function(){return[W.K]}},
K:{"^":"a6;",
i:function(a){var z=a.nodeValue
return z==null?this.dT(a):z},
$isK:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hx:{"^":"jI;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.K]},
$ast:function(){return[W.K]},
$isd:1,
$asd:function(){return[W.K]},
$isf:1,
$asf:function(){return[W.K]},
$asy:function(){return[W.K]},
"%":"NodeList|RadioNodeList"},
bo:{"^":"o;0k:length=",$isbo:1,"%":"Plugin"},
lI:{"^":"jM;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bo]},
$ast:function(){return[W.bo]},
$isd:1,
$asd:function(){return[W.bo]},
$isf:1,
$asf:function(){return[W.bo]},
$asy:function(){return[W.bo]},
"%":"PluginArray"},
lK:{"^":"jS;",
j:function(a,b){return P.aJ(a.get(H.R(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aJ(y.value[1]))}},
gap:function(a){var z=H.c([],[P.n])
this.J(a,new W.hV(z))
return z},
gk:function(a){return a.size},
$asaa:function(){return[P.n,null]},
$isa2:1,
$asa2:function(){return[P.n,null]},
"%":"RTCStatsReport"},
hV:{"^":"u:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lL:{"^":"bi;0k:length=","%":"HTMLSelectElement"},
br:{"^":"a6;",$isbr:1,"%":"SourceBuffer"},
lM:{"^":"eS;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.br]},
$ast:function(){return[W.br]},
$isd:1,
$asd:function(){return[W.br]},
$isf:1,
$asf:function(){return[W.br]},
$asy:function(){return[W.br]},
"%":"SourceBufferList"},
bs:{"^":"o;",$isbs:1,"%":"SpeechGrammar"},
lN:{"^":"jU;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bs]},
$ast:function(){return[W.bs]},
$isd:1,
$asd:function(){return[W.bs]},
$isf:1,
$asf:function(){return[W.bs]},
$asy:function(){return[W.bs]},
"%":"SpeechGrammarList"},
bt:{"^":"o;0k:length=",$isbt:1,"%":"SpeechRecognitionResult"},
lP:{"^":"jX;",
j:function(a,b){return a.getItem(H.R(b))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,P.n]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gap:function(a){var z=H.c([],[P.n])
this.J(a,new W.id(z))
return z},
gk:function(a){return a.length},
$asaa:function(){return[P.n,P.n]},
$isa2:1,
$asa2:function(){return[P.n,P.n]},
"%":"Storage"},
id:{"^":"u:38;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bu:{"^":"o;",$isbu:1,"%":"CSSStyleSheet|StyleSheet"},
bv:{"^":"a6;",$isbv:1,"%":"TextTrack"},
bw:{"^":"a6;",$isbw:1,"%":"TextTrackCue|VTTCue"},
lT:{"^":"k0;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bw]},
$ast:function(){return[W.bw]},
$isd:1,
$asd:function(){return[W.bw]},
$isf:1,
$asf:function(){return[W.bw]},
$asy:function(){return[W.bw]},
"%":"TextTrackCueList"},
lU:{"^":"eV;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bv]},
$ast:function(){return[W.bv]},
$isd:1,
$asd:function(){return[W.bv]},
$isf:1,
$asf:function(){return[W.bv]},
$asy:function(){return[W.bv]},
"%":"TextTrackList"},
lV:{"^":"o;0k:length=","%":"TimeRanges"},
bx:{"^":"o;",$isbx:1,"%":"Touch"},
b_:{"^":"cT;",$isb_:1,"%":"TouchEvent"},
lW:{"^":"k6;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bx]},
$ast:function(){return[W.bx]},
$isd:1,
$asd:function(){return[W.bx]},
$isf:1,
$asf:function(){return[W.bx]},
$asy:function(){return[W.bx]},
"%":"TouchList"},
lX:{"^":"o;0k:length=","%":"TrackDefaultList"},
cT:{"^":"a1;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
m_:{"^":"o;",
i:function(a){return String(a)},
"%":"URL"},
m0:{"^":"a6;0k:length=","%":"VideoTrackList"},
bA:{"^":"an;",
gfQ:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.ad("deltaY is not supported"))},
gfP:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.ad("deltaX is not supported"))},
$isbA:1,
"%":"WheelEvent"},
j1:{"^":"a6;",
eX:function(a,b){return a.requestAnimationFrame(H.b5(H.b(b,{func:1,ret:-1,args:[P.W]}),1))},
ei:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
m5:{"^":"kd;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bc]},
$ast:function(){return[W.bc]},
$isd:1,
$asd:function(){return[W.bc]},
$isf:1,
$asf:function(){return[W.bc]},
$asy:function(){return[W.bc]},
"%":"CSSRuleList"},
m6:{"^":"fJ;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
q:function(a,b){var z
if(b==null)return!1
z=H.bH(b,"$isa9",[P.W],"$asa9")
if(!z)return!1
z=J.ck(b)
return a.left===z.gaH(b)&&a.top===z.gb_(b)&&a.width===z.gaf(b)&&a.height===z.gae(b)},
gS:function(a){return W.eL(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gae:function(a){return a.height},
gaf:function(a){return a.width},
"%":"ClientRect|DOMRect"},
m8:{"^":"kf;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bh]},
$ast:function(){return[W.bh]},
$isd:1,
$asd:function(){return[W.bh]},
$isf:1,
$asf:function(){return[W.bh]},
$asy:function(){return[W.bh]},
"%":"GamepadList"},
m9:{"^":"kh;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.K]},
$ast:function(){return[W.K]},
$isd:1,
$asd:function(){return[W.K]},
$isf:1,
$asf:function(){return[W.K]},
$asy:function(){return[W.K]},
"%":"MozNamedAttrMap|NamedNodeMap"},
ma:{"^":"kj;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bt]},
$ast:function(){return[W.bt]},
$isd:1,
$asd:function(){return[W.bt]},
$isf:1,
$asf:function(){return[W.bt]},
$asy:function(){return[W.bt]},
"%":"SpeechRecognitionResultList"},
mb:{"^":"kl;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bu]},
$ast:function(){return[W.bu]},
$isd:1,
$asd:function(){return[W.bu]},
$isf:1,
$asf:function(){return[W.bu]},
$asy:function(){return[W.bu]},
"%":"StyleSheetList"},
jf:{"^":"cP;a,b,c,$ti",
h0:function(a,b,c,d){var z=H.z(this,0)
H.b(a,{func:1,ret:-1,args:[z]})
H.b(c,{func:1,ret:-1})
return W.T(this.a,this.b,a,!1,z)}},
m7:{"^":"jf;a,b,c,$ti"},
jg:{"^":"e8;a,b,c,d,e,$ti",
fd:function(){var z=this.d
if(z!=null&&this.a<=0)J.fl(this.b,this.c,z,!1)},
n:{
T:function(a,b,c,d,e){var z=c==null?null:W.f2(new W.jh(c),W.a1)
z=new W.jg(0,a,b,z,!1,[e])
z.fd()
return z}}},
jh:{"^":"u:7;a",
$1:function(a){return this.a.$1(H.k(a,"$isa1"))}},
y:{"^":"a;$ti",
gV:function(a){return new W.dC(a,this.gk(a),-1,[H.bI(this,a,"y",0)])}},
dC:{"^":"a;a,b,c,0d,$ti",
B:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fk(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gL:function(a){return this.d}},
ja:{"^":"o+fD;"},
jb:{"^":"o+t;"},
jc:{"^":"jb+y;"},
jd:{"^":"o+t;"},
je:{"^":"jd+y;"},
ji:{"^":"o+t;"},
jj:{"^":"ji+y;"},
jv:{"^":"o+t;"},
jw:{"^":"jv+y;"},
jD:{"^":"o+aa;"},
jE:{"^":"o+aa;"},
jF:{"^":"o+t;"},
jG:{"^":"jF+y;"},
jH:{"^":"o+t;"},
jI:{"^":"jH+y;"},
jL:{"^":"o+t;"},
jM:{"^":"jL+y;"},
jS:{"^":"o+aa;"},
eR:{"^":"a6+t;"},
eS:{"^":"eR+y;"},
jT:{"^":"o+t;"},
jU:{"^":"jT+y;"},
jX:{"^":"o+aa;"},
k_:{"^":"o+t;"},
k0:{"^":"k_+y;"},
eU:{"^":"a6+t;"},
eV:{"^":"eU+y;"},
k5:{"^":"o+t;"},
k6:{"^":"k5+y;"},
kc:{"^":"o+t;"},
kd:{"^":"kc+y;"},
ke:{"^":"o+t;"},
kf:{"^":"ke+y;"},
kg:{"^":"o+t;"},
kh:{"^":"kg+y;"},
ki:{"^":"o+t;"},
kj:{"^":"ki+y;"},
kk:{"^":"o+t;"},
kl:{"^":"kk+y;"}}],["","",,P,{"^":"",
kC:function(a){var z,y
z=J.J(a)
if(!!z.$isc4){y=z.gd5(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.eX(a.data,a.height,a.width)},
kB:function(a){if(a instanceof P.eX)return{data:a.a,height:a.b,width:a.c}
return a},
aJ:function(a){var z,y,x,w,v
if(a==null)return
z=P.h9(P.n,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w){v=H.R(y[w])
z.X(0,v,a[v])}return z},
kz:function(a,b){var z={}
a.J(0,new P.kA(z))
return z},
dz:function(){var z=$.dy
if(z==null){z=J.co(window.navigator.userAgent,"Opera",0)
$.dy=z}return z},
fI:function(){var z,y
z=$.dv
if(z!=null)return z
y=$.dw
if(y==null){y=J.co(window.navigator.userAgent,"Firefox",0)
$.dw=y}if(y)z="-moz-"
else{y=$.dx
if(y==null){y=!P.dz()&&J.co(window.navigator.userAgent,"Trident/",0)
$.dx=y}if(y)z="-ms-"
else z=P.dz()?"-o-":"-webkit-"}$.dv=z
return z},
eX:{"^":"a;d5:a>,b,c",$isc4:1},
kA:{"^":"u:13;a",
$2:function(a,b){this.a[a]=b}},
fS:{"^":"c7;a,b",
gbC:function(){var z,y,x
z=this.b
y=H.ay(z,"t",0)
x=W.a_
return new H.hh(new H.j_(z,H.b(new P.fT(),{func:1,ret:P.a4,args:[y]}),[y]),H.b(new P.fU(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.b9(this.gbC().a)},
j:function(a,b){var z=this.gbC()
return z.b.$1(J.de(z.a,b))},
gV:function(a){var z=P.hd(this.gbC(),!1,W.a_)
return new J.al(z,z.length,0,[H.z(z,0)])},
$ast:function(){return[W.a_]},
$asd:function(){return[W.a_]},
$asf:function(){return[W.a_]}},
fT:{"^":"u:24;",
$1:function(a){return!!J.J(H.k(a,"$isK")).$isa_}},
fU:{"^":"u:25;",
$1:function(a){return H.e(H.k(a,"$isK"),"$isa_")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cf:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jx:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jN:{"^":"a;$ti",
gaV:function(a){var z=this.a
if(typeof z!=="number")return z.D()
return H.C(z+this.c,H.z(this,0))},
gbS:function(a){var z=this.b
if(typeof z!=="number")return z.D()
return H.C(z+this.d,H.z(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
q:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bH(b,"$isa9",[P.W],"$asa9")
if(!z)return!1
z=this.a
y=J.ck(b)
x=y.gaH(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb_(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.D()
w=H.z(this,0)
if(H.C(z+this.c,w)===y.gaV(b)){if(typeof x!=="number")return x.D()
z=H.C(x+this.d,w)===y.gbS(b)}else z=!1}else z=!1}else z=!1
return z},
gS:function(a){var z,y,x,w,v
z=this.a
y=J.aS(z)
x=this.b
w=J.aS(x)
if(typeof z!=="number")return z.D()
v=H.z(this,0)
z=H.C(z+this.c,v)
if(typeof x!=="number")return x.D()
v=H.C(x+this.d,v)
return P.jx(P.cf(P.cf(P.cf(P.cf(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a9:{"^":"jN;aH:a>,b_:b>,af:c>,ae:d>,$ti",n:{
hM:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.a7()
if(c<0)z=-c*0
else z=c
H.C(z,e)
if(typeof d!=="number")return d.a7()
if(d<0)y=-d*0
else y=d
return new P.a9(a,b,z,H.C(y,e),[e])}}}}],["","",,P,{"^":"",bP:{"^":"o;",$isbP:1,"%":"SVGLength"},lt:{"^":"jz;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$ast:function(){return[P.bP]},
$isd:1,
$asd:function(){return[P.bP]},
$isf:1,
$asf:function(){return[P.bP]},
$asy:function(){return[P.bP]},
"%":"SVGLengthList"},bR:{"^":"o;",$isbR:1,"%":"SVGNumber"},lG:{"^":"jK;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$ast:function(){return[P.bR]},
$isd:1,
$asd:function(){return[P.bR]},
$isf:1,
$asf:function(){return[P.bR]},
$asy:function(){return[P.bR]},
"%":"SVGNumberList"},lJ:{"^":"o;0k:length=","%":"SVGPointList"},lQ:{"^":"jZ;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$ast:function(){return[P.n]},
$isd:1,
$asd:function(){return[P.n]},
$isf:1,
$asf:function(){return[P.n]},
$asy:function(){return[P.n]},
"%":"SVGStringList"},lR:{"^":"a_;",
gd2:function(a){return new P.fS(a,new W.j8(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"},bU:{"^":"o;",$isbU:1,"%":"SVGTransform"},lY:{"^":"k8;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$ast:function(){return[P.bU]},
$isd:1,
$asd:function(){return[P.bU]},
$isf:1,
$asf:function(){return[P.bU]},
$asy:function(){return[P.bU]},
"%":"SVGTransformList"},jy:{"^":"o+t;"},jz:{"^":"jy+y;"},jJ:{"^":"o+t;"},jK:{"^":"jJ+y;"},jY:{"^":"o+t;"},jZ:{"^":"jY+y;"},k7:{"^":"o+t;"},k8:{"^":"k7+y;"}}],["","",,P,{"^":"",l6:{"^":"o;0k:length=","%":"AudioBuffer"},l7:{"^":"j7;",
j:function(a,b){return P.aJ(a.get(H.R(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aJ(y.value[1]))}},
gap:function(a){var z=H.c([],[P.n])
this.J(a,new P.fq(z))
return z},
gk:function(a){return a.size},
$asaa:function(){return[P.n,null]},
$isa2:1,
$asa2:function(){return[P.n,null]},
"%":"AudioParamMap"},fq:{"^":"u:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},l8:{"^":"a6;0k:length=","%":"AudioTrackList"},fr:{"^":"a6;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lH:{"^":"fr;0k:length=","%":"OfflineAudioContext"},j7:{"^":"o+aa;"}}],["","",,P,{"^":"",cM:{"^":"o;",
hr:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.J(g)
if(!!z.$isc4)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.kB(g))
return}if(!!z.$isdE)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.h(P.fo("Incorrect number or type of arguments"))},
dH:function(a,b,c,d,e,f,g){return this.hr(a,b,c,d,e,f,g,null,null,null)},
$iscM:1,
"%":"WebGLRenderingContext"},ij:{"^":"o;",$isij:1,"%":"WebGLTexture"},iG:{"^":"o;",$isiG:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",lO:{"^":"jW;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return P.aJ(a.item(b))},
C:function(a,b){return this.j(a,b)},
$ast:function(){return[[P.a2,,,]]},
$isd:1,
$asd:function(){return[[P.a2,,,]]},
$isf:1,
$asf:function(){return[[P.a2,,,]]},
$asy:function(){return[[P.a2,,,]]},
"%":"SQLResultSetRowList"},jV:{"^":"o+t;"},jW:{"^":"jV+y;"}}],["","",,O,{"^":"",af:{"^":"a;0a,0b,0c,0d,$ti",
b3:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
cp:function(a,b,c){var z=H.ay(this,"af",0)
H.b(b,{func:1,ret:P.a4,args:[[P.d,z]]})
z={func:1,ret:-1,args:[P.A,[P.d,z]]}
H.b(a,z)
H.b(c,z)
this.b=b
this.c=a
this.d=c},
aK:function(a,b){return this.cp(a,null,b)},
cP:function(a){var z
H.x(a,"$isd",[H.ay(this,"af",0)],"$asd")
z=this.b
if(z!=null)return z.$1(a)
return!0},
cw:function(a,b){var z
H.x(b,"$isd",[H.ay(this,"af",0)],"$asd")
z=this.c
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
gV:function(a){var z=this.a
return new J.al(z,z.length,0,[H.z(z,0)])},
C:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.ay(this,"af",0)
H.C(b,z)
z=[z]
if(this.cP(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.cw(x,H.c([b],z))}},
bN:function(a,b){var z,y
H.x(b,"$isd",[H.ay(this,"af",0)],"$asd")
if(this.cP(b)){z=this.a
y=z.length
C.a.bN(z,b)
this.cw(y,b)}},
$isd:1,
n:{
cw:function(a){var z=new O.af([a])
z.b3(a)
return z}}},cI:{"^":"a;0a,0b",
gk:function(a){return this.a.length},
gp:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
e0:function(a){var z=this.b
if(!(z==null))z.t(a)},
as:function(){return this.e0(null)},
gP:function(a){var z=this.a
if(z.length>0)return C.a.gc9(z)
else return V.aX()},
bo:function(a){var z=this.a
if(a==null)C.a.h(z,V.aX())
else C.a.h(z,a)
this.as()},
aq:function(){var z=this.a
if(z.length>0){z.pop()
this.as()}}}}],["","",,E,{"^":"",cp:{"^":"a;"},aA:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0Y:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sbs:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gp()
y.toString
x=H.b(this.gdE(),{func:1,ret:-1,args:[D.l]})
C.a.R(y.a,x)}y=this.c
if(y!=null){y=y.gp()
y.toString
x=H.b(this.gdE(),{func:1,ret:-1,args:[D.l]})
C.a.h(y.a,x)}w=new D.E("shape",z,this.c,this,[F.e4])
w.b=!0
this.aI(w)}},
ac:function(a,b){var z
for(z=this.y.a,z=new J.al(z,z.length,0,[H.z(z,0)]);z.B();)z.d.ac(0,b)},
a2:function(a){var z,y
z=a.dx
C.a.h(z.a,z.gP(z))
z.as()
a.cg(this.f)
z=a.dy
y=(z&&C.a).gc9(z)
if(y!=null&&this.d!=null)y.dF(a,this)
for(z=this.y.a,z=new J.al(z,z.length,0,[H.z(z,0)]);z.B();)z.d.a2(a)
a.cf()
a.dx.aq()},
gp:function(){var z=this.z
if(z==null){z=D.D()
this.z=z}return z},
aI:function(a){var z=this.z
if(!(z==null))z.t(a)},
a_:function(){return this.aI(null)},
h9:[function(a){H.k(a,"$isl")
this.e=null
this.aI(a)},function(){return this.h9(null)},"ig","$1","$0","gdE",0,2,0],
h7:[function(a){this.aI(H.k(a,"$isl"))},function(){return this.h7(null)},"ic","$1","$0","gdD",0,2,0],
ib:[function(a,b){var z,y,x,w,v,u,t
H.x(b,"$isd",[E.aA],"$asd")
for(z=b.length,y=this.gdD(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.w)(b),++v){u=b[v]
if(u!=null){if(u.gY()==null){t=new D.aT()
t.a=H.c([],w)
t.c=0
u.sY(t)}t=u.gY()
t.toString
H.b(y,x)
C.a.h(t.a,y)}}this.a_()},"$2","gh6",8,0,8],
ie:[function(a,b){var z,y,x,w,v,u,t
H.x(b,"$isd",[E.aA],"$asd")
for(z=b.length,y=this.gdD(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.w)(b),++v){u=b[v]
if(u!=null){if(u.gY()==null){t=new D.aT()
t.a=H.c([],w)
t.c=0
u.sY(t)}t=u.gY()
t.toString
H.b(y,x)
C.a.R(t.a,y)}}this.a_()},"$2","gh8",8,0,8],
$isat:1,
n:{
dB:function(a,b,c,d,e,f){var z,y
z=new E.aA()
z.a=d
z.b=!0
y=O.cw(E.aA)
z.y=y
y.aK(z.gh6(),z.gh8())
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
z.sbs(0,e)
return z}}},hQ:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
dY:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.am(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cI()
y=[V.aB]
z.a=H.c([],y)
x=z.gp()
x.toString
w={func:1,ret:-1,args:[D.l]}
v=H.b(new E.hS(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cI()
z.a=H.c([],y)
v=z.gp()
v.toString
x=H.b(new E.hT(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cI()
z.a=H.c([],y)
y=z.gp()
y.toString
w=H.b(new E.hU(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.c([],[O.bT])
this.dy=z
C.a.h(z,null)
this.fr=new H.aV(0,0,[P.n,A.cN])},
ghi:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gP(z)
y=this.db
y=z.l(0,y.gP(y))
this.z=y
z=y}return z},
cg:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gc9(z):a;(z&&C.a).h(z,y)},
cf:function(){var z=this.dy
if(z.length>1)z.pop()},
d_:function(a){var z=a.b
if(z.length===0)throw H.h(P.q("May not cache a shader with no name."))
if(this.fr.d4(0,z))throw H.h(P.q('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.X(0,z,a)},
n:{
hR:function(a,b){var z=new E.hQ(a,b)
z.dY(a,b)
return z}}},hS:{"^":"u:9;a",
$1:function(a){var z
H.k(a,"$isl")
z=this.a
z.z=null
z.ch=null}},hT:{"^":"u:9;a",
$1:function(a){var z
H.k(a,"$isl")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hU:{"^":"u:9;a",
$1:function(a){var z
H.k(a,"$isl")
z=this.a
z.ch=null
z.cx=null}},ir:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0Y:x@,0y,0z,0Q,0ch",
gp:function(){var z=this.x
if(z==null){z=D.D()
this.x=z}return z},
e2:[function(a){var z
H.k(a,"$isl")
z=this.x
if(!(z==null))z.t(a)
this.hm()},function(){return this.e2(null)},"e1","$1","$0","gcz",0,2,0],
gfU:function(){var z,y,x
z=Date.now()
y=C.e.Z(P.dA(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.am(z,!1)
return x/y},
cS:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.l()
if(typeof z!=="number")return H.p(z)
x=C.j.c6(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.l()
w=C.j.c6(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.ee(C.l,this.ghl())},
hm:[function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.b(new E.it(this),{func:1,ret:-1,args:[P.W]})
C.u.ei(z)
C.u.eX(z,W.f2(y,P.W))}},"$0","ghl",0,0,3],
hk:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cS()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.am(w,!1)
x.y=P.dA(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sk(w.a,0)
w.as()
w=x.db
C.a.sk(w.a,0)
w.as()
w=x.dx
C.a.sk(w.a,0)
w.as()
w=x.dy;(w&&C.a).sk(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a2(this.e)}}catch(v){z=H.aR(v)
y=H.b7(v)
P.dd("Error: "+H.j(z))
P.dd("Stack: "+H.j(y))
throw H.h(z)}},
n:{
is:function(a,b,c,d,e){var z,y,x,w
z=J.J(a)
if(!!z.$isct)return E.ed(a,!0,!0,!0,!1)
y=W.cu(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gd2(a).h(0,y)
w=E.ed(y,!0,!0,!0,!1)
w.a=a
return w},
ed:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.ir()
y=P.ha(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.n,null)
x=C.k.br(a,"webgl",y)
x=H.k(x==null?C.k.br(a,"experimental-webgl",y):x,"$iscM")
if(x==null)H.r(P.q("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hR(x,a)
w=new T.ik(x)
w.b=H.U(x.getParameter(3379))
w.c=H.U(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.iM(a)
v=new X.h5()
v.c=new X.as(!1,!1,!1)
v.d=P.hb(null,null,null,P.A)
w.b=v
v=new X.ht(w)
v.f=0
v.r=new V.O(0,0)
v.x=new V.O(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.he(w)
v.r=0
v.x=new V.O(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.iw(w)
v.e=0
v.f=new V.O(0,0)
v.r=new V.O(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.e8,P.a]])
w.z=v
u=document
t=W.an
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.T(u,"contextmenu",H.b(w.geB(),s),!1,t))
v=w.z
r=W.a1
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.T(a,"focus",H.b(w.geE(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.T(a,"blur",H.b(w.gex(),q),!1,r))
v=w.z
p=W.bk
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.T(u,"keyup",H.b(w.geG(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.T(u,"keydown",H.b(w.geF(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.T(a,"mousedown",H.b(w.geJ(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.T(a,"mouseup",H.b(w.geL(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.T(a,"mousemove",H.b(w.geK(),s),!1,t))
p=w.z
o=W.bA;(p&&C.a).h(p,W.T(a,H.R(W.fN(a)),H.b(w.geM(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.T(u,"mousemove",H.b(w.geC(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.T(u,"mouseup",H.b(w.geD(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.T(u,"pointerlockchange",H.b(w.geN(),q),!1,r))
r=w.z
q=W.b_
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.T(a,"touchstart",H.b(w.geV(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.T(a,"touchend",H.b(w.geT(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.T(a,"touchmove",H.b(w.geU(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.am(Date.now(),!1)
z.ch=0
z.cS()
return z}}},it:{"^":"u:28;a",
$1:function(a){var z
H.kU(a)
z=this.a
if(z.z){z.z=!1
z.hk()}}}}],["","",,Z,{"^":"",eG:{"^":"a;a,b",n:{
cX:function(a,b,c){var z
H.x(c,"$isf",[P.A],"$asf")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bD(c)),35044)
a.bindBuffer(b,null)
return new Z.eG(b,z)}}},dj:{"^":"cp;a,b,c,d,e",
W:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aR(y)
x=P.q('Failed to bind buffer attribute "'+J.a5(this.a)+'": '+H.j(z))
throw H.h(x)}},
i:function(a){return"["+J.a5(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},eH:{"^":"a;a",$isl9:1},cs:{"^":"a;a,0b,c,d",
ao:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
W:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].W(a)},
b1:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
a2:function(a){var z,y,x,w,v
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
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.w)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a5(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.w(y,", ")+"\nAttrs:   "+C.a.w(u,", ")},
$islS:1},c5:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aY(this.c)+"'")+"]"}},b0:{"^":"a;a",
gcq:function(a){var z,y
z=this.a
y=(z&$.$get$ap().a)!==0?3:0
if((z&$.$get$aF().a)!==0)y+=3
if((z&$.$get$aE().a)!==0)y+=3
if((z&$.$get$aG().a)!==0)y+=2
if((z&$.$get$aH().a)!==0)y+=3
if((z&$.$get$by().a)!==0)y+=3
if((z&$.$get$bz().a)!==0)y+=4
if((z&$.$get$b1().a)!==0)++y
return(z&$.$get$aD().a)!==0?y+4:y},
fH:function(a){var z,y,x
z=$.$get$ap()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aF()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aE()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aG()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aH()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$by()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bz()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b1()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aD()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eF()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b0))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.n])
y=this.a
if((y&$.$get$ap().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aF().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aE().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aG().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aH().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$by().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bz().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b1().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aD().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.w(z,"|")},
n:{
aj:function(a){return new Z.b0(a)}}}}],["","",,D,{"^":"",dm:{"^":"a;"},aT:{"^":"a;0a,0b,0c",
t:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.l(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.J(y,new D.fR(z))
return x!==0},
d8:function(){return this.t(null)},
hn:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.t(y)}}},
ar:function(a){return this.hn(a,!0,!1)},
n:{
D:function(){var z=new D.aT()
z.a=H.c([],[{func:1,ret:-1,args:[D.l]}])
z.c=0
return z}}},fR:{"^":"u:29;a",
$1:function(a){var z
H.b(a,{func:1,ret:-1,args:[D.l]})
z=this.a.a
z.b
a.$1(z)}},l:{"^":"a;a,0b"},bM:{"^":"l;c,d,a,0b,$ti"},bN:{"^":"l;c,d,a,0b,$ti"},E:{"^":"l;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",dk:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dk))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)},
n:{"^":"la<"}},dK:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dK))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},dL:{"^":"l;c,a,0b"},h5:{"^":"a;0a,0b,0c,0d",
hf:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dL(a,this)
y.b=!0
return z.t(y)},
hb:function(a){var z,y
this.c=a.b
this.d.R(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dL(a,this)
y.b=!0
return z.t(y)}},dP:{"^":"c8;x,y,c,d,e,a,0b"},he:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ai:function(a,b){var z,y,x,w,v,u,t,s
z=new P.am(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.l()
v=b.b
u=this.ch
if(typeof v!=="number")return v.l()
t=new V.O(y.a+x*w,y.b+v*u)
u=this.a.gaB()
s=new X.bm(a,new V.O(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
ce:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.t(this.ai(a,b))
return!0},
aT:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dP()
if(typeof z!=="number")return z.dK()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.t(this.ai(a,b))
return!0},
aS:function(a,b){var z=this.d
if(z==null)return!1
z.t(this.ai(a,b))
return!0},
hg:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaB()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.l()
t=a.b
s=this.cy
if(typeof t!=="number")return t.l()
w=new X.cJ(new V.P(v*u,t*s),y,x,new P.am(w,!1),this)
w.b=!0
z.t(w)
return!0},
eI:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.am(Date.now(),!1)
y=this.f
x=new X.dP(c,a,this.a.gaB(),b,z,this)
x.b=!0
y.t(x)
this.y=z
this.x=new V.O(0,0)}},as:{"^":"a;a,b,c",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.as))return!1
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
return z+(this.c?"Shift+":"")}},bm:{"^":"c8;x,y,z,Q,ch,c,d,e,a,0b"},ht:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bA:function(a,b,c){var z,y,x
z=new P.am(Date.now(),!1)
y=this.a.gaB()
x=new X.bm(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
ce:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.t(this.bA(a,b,!0))
return!0},
aT:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dP()
if(typeof z!=="number")return z.dK()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.t(this.bA(a,b,!0))
return!0},
aS:function(a,b){var z=this.d
if(z==null)return!1
z.t(this.bA(a,b,!1))
return!0},
hh:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaB()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.l()
u=a.b
t=this.ch
if(typeof u!=="number")return u.l()
x=new X.cJ(new V.P(w*v,u*t),y,b,new P.am(x,!1),this)
x.b=!0
z.t(x)
return!0},
gd7:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
gbq:function(){var z=this.c
if(z==null){z=D.D()
this.c=z}return z},
gdC:function(){var z=this.d
if(z==null){z=D.D()
this.d=z}return z}},cJ:{"^":"c8;x,c,d,e,a,0b"},c8:{"^":"l;"},ei:{"^":"c8;x,y,z,Q,ch,c,d,e,a,0b"},iw:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
ai:function(a,b){var z,y,x,w
H.x(a,"$isf",[V.O],"$asf")
z=new P.am(Date.now(),!1)
y=a.length>0?a[0]:new V.O(0,0)
x=this.a.gaB()
w=new X.ei(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
he:function(a){var z
H.x(a,"$isf",[V.O],"$asf")
z=this.b
if(z==null)return!1
z.t(this.ai(a,!0))
return!0},
hc:function(a){var z
H.x(a,"$isf",[V.O],"$asf")
z=this.c
if(z==null)return!1
z.t(this.ai(a,!0))
return!0},
hd:function(a){var z
H.x(a,"$isf",[V.O],"$asf")
z=this.d
if(z==null)return!1
z.t(this.ai(a,!1))
return!0}},iM:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaB:function(){var z=this.a
return V.e3(0,0,(z&&C.k).gd3(z).c,C.k.gd3(z).d)},
cK:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dK(z,new X.as(y,a.altKey,a.shiftKey))},
aA:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.as(y,a.altKey,a.shiftKey)},
bM:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.as(y,a.altKey,a.shiftKey)},
ak:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.E()
v=z.top
if(typeof x!=="number")return x.E()
return new V.O(y-w,x-v)},
aM:function(a){return new V.P(a.movementX,a.movementY)},
bJ:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.O])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.w)(x),++v){u=x[v]
t=C.j.ab(u.pageX)
C.j.ab(u.pageY)
s=z.left
C.j.ab(u.pageX)
C.a.h(y,new V.O(t-s,C.j.ab(u.pageY)-z.top))}return y},
ag:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dk(z,new X.as(y,a.altKey,a.shiftKey))},
bD:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.E()
v=H.U(y-w)
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.E()
u=H.U(x-y)
if(u<0)return!1
return v<z.width&&u<z.height},
hO:[function(a){this.f=!0},"$1","geE",4,0,7],
hH:[function(a){this.f=!1},"$1","gex",4,0,7],
hL:[function(a){H.k(a,"$isan")
if(this.f&&this.bD(a))a.preventDefault()},"$1","geB",4,0,4],
hQ:[function(a){var z
H.k(a,"$isbk")
if(!this.f)return
z=this.cK(a)
if(this.b.hf(z))a.preventDefault()},"$1","geG",4,0,17],
hP:[function(a){var z
H.k(a,"$isbk")
if(!this.f)return
z=this.cK(a)
if(this.b.hb(z))a.preventDefault()},"$1","geF",4,0,17],
hS:[function(a){var z,y,x,w
H.k(a,"$isan")
z=this.a
z.focus()
this.f=!0
this.aA(a)
if(this.x){y=this.ag(a)
x=this.aM(a)
if(this.d.ce(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ag(a)
w=this.ak(a)
if(this.c.ce(y,w))a.preventDefault()},"$1","geJ",4,0,4],
hU:[function(a){var z,y,x
H.k(a,"$isan")
this.aA(a)
z=this.ag(a)
if(this.x){y=this.aM(a)
if(this.d.aT(z,y))a.preventDefault()
return}if(this.r)return
x=this.ak(a)
if(this.c.aT(z,x))a.preventDefault()},"$1","geL",4,0,4],
hN:[function(a){var z,y,x
H.k(a,"$isan")
if(!this.bD(a)){this.aA(a)
z=this.ag(a)
if(this.x){y=this.aM(a)
if(this.d.aT(z,y))a.preventDefault()
return}if(this.r)return
x=this.ak(a)
if(this.c.aT(z,x))a.preventDefault()}},"$1","geD",4,0,4],
hT:[function(a){var z,y,x
H.k(a,"$isan")
this.aA(a)
z=this.ag(a)
if(this.x){y=this.aM(a)
if(this.d.aS(z,y))a.preventDefault()
return}if(this.r)return
x=this.ak(a)
if(this.c.aS(z,x))a.preventDefault()},"$1","geK",4,0,4],
hM:[function(a){var z,y,x
H.k(a,"$isan")
if(!this.bD(a)){this.aA(a)
z=this.ag(a)
if(this.x){y=this.aM(a)
if(this.d.aS(z,y))a.preventDefault()
return}if(this.r)return
x=this.ak(a)
if(this.c.aS(z,x))a.preventDefault()}},"$1","geC",4,0,4],
hV:[function(a){var z,y
H.k(a,"$isbA")
this.aA(a)
z=new V.P((a&&C.t).gfP(a),C.t.gfQ(a)).u(0,180)
if(this.x){if(this.d.hg(z))a.preventDefault()
return}if(this.r)return
y=this.ak(a)
if(this.c.hh(z,y))a.preventDefault()},"$1","geM",4,0,31],
hW:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ag(this.y)
v=this.ak(this.y)
this.d.eI(w,v,x)}},"$1","geN",4,0,7],
i3:[function(a){var z
H.k(a,"$isb_")
this.a.focus()
this.f=!0
this.bM(a)
z=this.bJ(a)
if(this.e.he(z))a.preventDefault()},"$1","geV",4,0,10],
i1:[function(a){var z
H.k(a,"$isb_")
this.bM(a)
z=this.bJ(a)
if(this.e.hc(z))a.preventDefault()},"$1","geT",4,0,10],
i2:[function(a){var z
H.k(a,"$isb_")
this.bM(a)
z=this.bJ(a)
if(this.e.hd(z))a.preventDefault()},"$1","geU",4,0,10]}}],["","",,D,{"^":"",c1:{"^":"a;0a,0b,0c,0d",
gp:function(){var z=this.d
if(z==null){z=D.D()
this.d=z}return z},
at:[function(a){var z
H.k(a,"$isl")
z=this.d
if(!(z==null))z.t(a)},function(){return this.at(null)},"hy","$1","$0","ge3",0,2,0],
$isV:1,
$isat:1},V:{"^":"a;",$isat:1},h6:{"^":"af;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gp:function(){var z=this.Q
if(z==null){z=D.D()
this.Q=z}return z},
at:function(a){var z=this.Q
if(!(z==null))z.t(a)},
eH:[function(a){var z
H.k(a,"$isl")
z=this.ch
if(!(z==null))z.t(a)},function(){return this.eH(null)},"hR","$1","$0","gcO",0,2,0],
hX:[function(a){var z,y,x
H.x(a,"$isd",[D.V],"$asd")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.w)(a),++y){x=a[y]
if(x==null||this.ee(x))return!1}return!0},"$1","geO",4,0,33],
hE:[function(a,b){var z,y,x,w,v,u,t,s
z=D.V
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gcO(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.w)(b),++u){t=H.k(b[u],"$isV")
if(t instanceof D.c1)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aT()
s.a=H.c([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.h(s.a,x)}z=new D.bM(a,b,this,[z])
z.b=!0
this.at(z)},"$2","geu",8,0,18],
hZ:[function(a,b){var z,y,x,w,v,u,t,s
z=D.V
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gcO(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.w)(b),++u){t=H.k(b[u],"$isV")
if(t instanceof D.c1)C.a.R(this.e,t)
s=t.d
if(s==null){s=new D.aT()
s.a=H.c([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.R(s.a,x)}z=new D.bN(a,b,this,[z])
z.b=!0
this.at(z)},"$2","geQ",8,0,18],
ee:function(a){var z=C.a.aP(this.e,a)
return z},
$asd:function(){return[D.V]},
$asaf:function(){return[D.V]}},hC:{"^":"a;",$isV:1,$isat:1},ia:{"^":"a;",$isV:1,$isat:1},io:{"^":"a;",$isV:1,$isat:1},ip:{"^":"a;",$isV:1,$isat:1},iq:{"^":"a;",$isV:1,$isat:1}}],["","",,V,{"^":"",
lc:[function(a,b){if(typeof b!=="number")return b.E()
if(typeof a!=="number")return H.p(a)
return Math.abs(b-a)<=1e-9},"$2","hq",8,0,32],
l2:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.j.dO(a-b,z)
return(a<0?a+z:a)+b},
L:function(a,b,c){if(a==null)return C.h.a6("null",c)
return C.h.a6(C.j.dJ($.m.$2(a,0)?0:a,b),c+b+1)},
b6:function(a,b,c){var z,y,x,w,v,u
H.x(a,"$isf",[P.v],"$asf")
z=H.c([],[P.n])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.w)(a),++w){v=V.L(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.i(z,u)
C.a.X(z,u,C.h.a6(z[u],x))}return z},
dc:function(a,b){return C.j.hu(Math.pow(b,C.z.c6(Math.log(H.ky(a))/Math.log(b))))},
X:{"^":"a;a,b,c",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}},
aK:{"^":"a;a,b,c,d",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aK))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+", "+V.L(this.d,3,0)+"]"}},
dT:{"^":"a;a,b,c,d,e,f,r,x,y",
a3:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.v])
return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dT))return!1
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
i:function(a){var z,y,x,w,v,u,t,s
z=[P.v]
y=V.b6(H.c([this.a,this.d,this.r],z),3,0)
x=V.b6(H.c([this.b,this.e,this.x],z),3,0)
w=V.b6(H.c([this.c,this.f,this.y],z),3,0)
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
aB:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a3:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.v])
return z},
c8:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.m.$2(a2,0))return V.aX()
a3=1/a2
a4=-w
a5=-i
return V.ar((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
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
return V.ar(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
ck:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
b0:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return new V.ab(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aB))return!1
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
i:function(a){return this.F()},
dw:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.v]
y=V.b6(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.b6(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.b6(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.b6(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
F:function(){return this.dw("",3,0)},
v:function(a){return this.dw(a,3,0)},
n:{
ar:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aB(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aX:function(){return V.ar(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
dU:function(a,b,c){var z,y,x,w,v
z=c.u(0,Math.sqrt(c.A(c)))
y=b.aQ(z)
x=y.u(0,Math.sqrt(y.A(y)))
w=z.aQ(x)
v=new V.G(a.a,a.b,a.c)
return V.ar(x.a,w.a,z.a,x.H(0).A(v),x.b,w.b,z.b,w.H(0).A(v),x.c,w.c,z.c,z.H(0).A(v),0,0,0,1)}}},
O:{"^":"a;a,b",
E:function(a,b){return new V.O(this.a-b.a,this.b-b.b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}},
ab:{"^":"a;a,b,c",
E:function(a,b){return new V.ab(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ab))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}},
bp:{"^":"a;a,b,c,d",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bp))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+", "+V.L(this.d,3,0)+"]"}},
e2:{"^":"a;a,b,c,d",
ga1:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e2))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+", "+V.L(this.d,3,0)+"]"},
n:{
e3:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e2(a,b,c,d)}}},
P:{"^":"a;a,b",
fZ:[function(a){return Math.sqrt(this.A(this))},"$0","gk",1,0,19],
A:function(a){var z,y,x,w
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
return new V.P(z*b,y*b)},
u:function(a,b){var z,y
if($.m.$2(b,0))return new V.P(0,0)
z=this.a
if(typeof z!=="number")return z.u()
y=this.b
if(typeof y!=="number")return y.u()
return new V.P(z/b,y/b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.P))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}},
G:{"^":"a;a,b,c",
fZ:[function(a){return Math.sqrt(this.A(this))},"$0","gk",1,0,19],
A:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ca:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.G(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aQ:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.G(z*y-x*w,x*v-u*y,u*w-z*v)},
D:function(a,b){return new V.G(this.a+b.a,this.b+b.b,this.c+b.c)},
H:function(a){return new V.G(-this.a,-this.b,-this.c)},
u:function(a,b){if($.m.$2(b,0))return new V.G(0,0,0)
return new V.G(this.a/b,this.b/b,this.c/b)},
dA:function(){if(!$.m.$2(0,this.a))return!1
if(!$.m.$2(0,this.b))return!1
if(!$.m.$2(0,this.c))return!1
return!0},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.G))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}}],["","",,U,{"^":"",fz:{"^":"dm;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bv:function(a){var z=V.l2(a,this.c,this.b)
return z},
gp:function(){var z=this.y
if(z==null){z=D.D()
this.y=z}return z},
I:function(a){var z=this.y
if(!(z==null))z.t(a)},
scl:function(a,b){},
scb:function(a){var z,y
z=this.b
if(!$.m.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bv(z)}z=new D.E("maximumLocation",y,this.b,this,[P.v])
z.b=!0
this.I(z)}},
scd:function(a){var z,y
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bv(z)}z=new D.E("minimumLocation",y,this.c,this,[P.v])
z.b=!0
this.I(z)}},
sa0:function(a,b){var z,y
b=this.bv(b)
z=this.d
if(!$.m.$2(z,b)){y=this.d
this.d=b
z=new D.E("location",y,b,this,[P.v])
z.b=!0
this.I(z)}},
scc:function(a){var z,y,x
z=this.e
if(!$.m.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.E("maximumVelocity",y,a,this,[P.v])
z.b=!0
this.I(z)}},
sK:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.m.$2(z,a)){x=this.f
this.f=a
z=new D.E("velocity",x,a,this,[P.v])
z.b=!0
this.I(z)}},
sbY:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.m.$2(z,a)){y=this.x
this.x=a
z=new D.E("dampening",y,a,this,[P.v])
z.b=!0
this.I(z)}},
ac:function(a,b){var z,y,x,w
z=this.f
if($.m.$2(z,0)){z=this.r
z=!$.m.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa0(0,this.d+y*b)
z=this.x
if(!$.m.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sK(y)}},
n:{
cx:function(){var z=new U.fz()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dp:{"^":"a7;0a,0b",
gp:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
aJ:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dp))return!1
return J.S(this.a,b.a)},
i:function(a){return"Constant: "+this.a.v("          ")},
n:{
dq:function(a){var z=new U.dp()
z.a=a
return z}}},dD:{"^":"af;0e,0f,0r,0a,0b,0c,0d",
gp:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
I:[function(a){var z
H.k(a,"$isl")
z=this.e
if(!(z==null))z.t(a)},function(){return this.I(null)},"a9","$1","$0","gau",0,2,0],
hD:[function(a,b){var z,y,x,w,v,u,t
z=U.a7
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gau(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.w)(b),++v){u=b[v]
if(u!=null){t=u.gp()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.bM(a,b,this,[z])
z.b=!0
this.I(z)},"$2","ges",8,0,20],
hY:[function(a,b){var z,y,x,w,v,u,t
z=U.a7
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gau(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.w)(b),++v){u=b[v]
if(u!=null){t=u.gp()
t.toString
H.b(x,w)
C.a.R(t.a,x)}}z=new D.bN(a,b,this,[z])
z.b=!0
this.I(z)},"$2","geP",8,0,20],
aJ:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.a7()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.al(z,z.length,0,[H.z(z,0)]),x=null;z.B();){y=z.d
if(y!=null){w=y.aJ(0,b,c)
if(w!=null)x=x==null?w:w.l(0,x)}}this.f=x==null?V.aX():x
z=this.e
if(!(z==null))z.ar(0)}return this.f},
q:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dD))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.i(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.i(w,y)
if(!J.S(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asd:function(){return[U.a7]},
$asaf:function(){return[U.a7]},
$isa7:1},a7:{"^":"dm;"},iN:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gp:function(){var z=this.cy
if(z==null){z=D.D()
this.cy=z}return z},
I:[function(a){var z
H.k(a,"$isl")
z=this.cy
if(!(z==null))z.t(a)},function(){return this.I(null)},"a9","$1","$0","gau",0,2,0],
aN:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gd7()
z.toString
y={func:1,ret:-1,args:[D.l]}
x=H.b(this.gbE(),y)
C.a.h(z.a,x)
x=this.a.c.gdC()
x.toString
z=H.b(this.gbF(),y)
C.a.h(x.a,z)
z=this.a.c.gbq()
z.toString
y=H.b(this.gbG(),y)
C.a.h(z.a,y)
return!0},
eo:[function(a){H.k(a,"$isl")
if(!J.S(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbE",4,0,1],
ep:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$isl"),"$isbm")
if(!this.y)return
if(this.x){z=a.d.E(0,a.y)
z=new V.P(z.a,z.b)
z=z.A(z)
y=this.r
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.E(0,a.y)
z=new V.P(y.a,y.b).l(0,2).u(0,z.ga1())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.l()
x=this.e
if(typeof x!=="number")return H.p(x)
y.sK(z*10*x)}else{z=a.c
y=a.d
x=y.E(0,a.y)
w=new V.P(x.a,x.b).l(0,2).u(0,z.ga1())
x=this.b
v=w.a
if(typeof v!=="number")return v.H()
u=this.e
if(typeof u!=="number")return H.p(u)
t=this.z
if(typeof t!=="number")return H.p(t)
x.sa0(0,-v*u+t)
this.b.sK(0)
y=y.E(0,a.z)
this.Q=new V.P(y.a,y.b).l(0,2).u(0,z.ga1())}this.a9()},"$1","gbF",4,0,1],
eq:[function(a){var z,y,x
H.k(a,"$isl")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.A(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.l()
x=this.e
if(typeof x!=="number")return H.p(x)
z.sK(y*10*x)
this.a9()}},"$1","gbG",4,0,1],
aJ:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.a7()
if(z<y){this.ch=y
x=b.y
this.b.ac(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.ar(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa7:1},iO:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gp:function(){var z=this.fx
if(z==null){z=D.D()
this.fx=z}return z},
I:[function(a){var z
H.k(a,"$isl")
z=this.fx
if(!(z==null))z.t(a)},function(){return this.I(null)},"a9","$1","$0","gau",0,2,0],
aN:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gd7()
z.toString
y={func:1,ret:-1,args:[D.l]}
x=H.b(this.gbE(),y)
C.a.h(z.a,x)
x=this.a.c.gdC()
x.toString
z=H.b(this.gbF(),y)
C.a.h(x.a,z)
z=this.a.c.gbq()
z.toString
x=H.b(this.gbG(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.D()
x.f=z}x=H.b(this.gel(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.D()
x.d=z}x=H.b(this.gem(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.D()
x.b=z}x=H.b(this.gfc(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.D()
x.d=z}x=H.b(this.gfb(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.D()
x.c=z}y=H.b(this.gfa(),y)
C.a.h(z.a,y)
return!0},
ad:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.H()
z=-z}if(this.r){if(typeof y!=="number")return y.H()
y=-y}return new V.P(z,y)},
eo:[function(a){a=H.e(H.k(a,"$isl"),"$isbm")
if(!J.S(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbE",4,0,1],
ep:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$isl"),"$isbm")
if(!this.cx)return
if(this.ch){z=a.d.E(0,a.y)
z=new V.P(z.a,z.b)
z=z.A(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.E(0,a.y)
z=this.ad(new V.P(y.a,y.b).l(0,2).u(0,z.ga1()))
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
w=this.ad(new V.P(x.a,x.b).l(0,2).u(0,z.ga1()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa0(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa0(0,-u*v+x)
this.b.sK(0)
this.c.sK(0)
y=y.E(0,a.z)
this.dx=this.ad(new V.P(y.a,y.b).l(0,2).u(0,z.ga1()))}this.a9()},"$1","gbF",4,0,1],
eq:[function(a){var z,y,x
H.k(a,"$isl")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.A(z)>0.0001){z=this.c
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
this.a9()}},"$1","gbG",4,0,1],
hA:[function(a){if(H.e(H.k(a,"$isl"),"$isdP").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gel",4,0,1],
hB:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$isl"),"$isbm")
if(!J.S(this.d,a.x.b))return
z=a.c
y=a.d
x=y.E(0,a.y)
w=this.ad(new V.P(x.a,x.b).l(0,2).u(0,z.ga1()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa0(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa0(0,-u*v+x)
this.b.sK(0)
this.c.sK(0)
y=y.E(0,a.z)
this.dx=this.ad(new V.P(y.a,y.b).l(0,2).u(0,z.ga1()))
this.a9()},"$1","gem",4,0,1],
i7:[function(a){H.k(a,"$isl")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfc",4,0,1],
i6:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$isl"),"$isei")
if(!this.cx)return
if(this.ch){z=a.d.E(0,a.y)
z=new V.P(z.a,z.b)
z=z.A(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.E(0,a.y)
z=this.ad(new V.P(y.a,y.b).l(0,2).u(0,z.ga1()))
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
w=this.ad(new V.P(x.a,x.b).l(0,2).u(0,z.ga1()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa0(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa0(0,-u*v+x)
this.b.sK(0)
this.c.sK(0)
y=y.E(0,a.z)
this.dx=this.ad(new V.P(y.a,y.b).l(0,2).u(0,z.ga1()))}this.a9()},"$1","gfb",4,0,1],
i5:[function(a){var z,y,x
H.k(a,"$isl")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.A(z)>0.0001){z=this.c
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
this.a9()}},"$1","gfa",4,0,1],
aJ:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.a7()
if(z<y){this.dy=y
x=b.y
this.c.ac(0,x)
this.b.ac(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.ar(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.l(0,V.ar(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isa7:1},iP:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gp:function(){var z=this.r
if(z==null){z=D.D()
this.r=z}return z},
I:function(a){var z=this.r
if(!(z==null))z.t(a)},
aN:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.D()
z.e=y
z=y}else z=y
y=H.b(this.ger(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.D()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
hC:[function(a){var z,y,x,w
H.k(a,"$isl")
if(!J.S(this.b,this.a.b.c))return
H.e(a,"$iscJ")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.l()
w=z+y*x
if(z!==w){this.d=w
z=new D.E("zoom",z,w,this,[P.v])
z.b=!0
this.I(z)}},"$1","ger",4,0,1],
aJ:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.ar(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa7:1}}],["","",,M,{"^":"",fA:{"^":"af;0e,0f,0a,0b,0c,0d",
gp:function(){var z=this.f
if(z==null){z=D.D()
this.f=z}return z},
T:[function(a){var z
H.k(a,"$isl")
z=this.f
if(!(z==null))z.t(a)},function(){return this.T(null)},"cA","$1","$0","gN",0,2,0],
i_:[function(a,b){var z,y,x,w,v,u,t
z=M.au
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gN(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.w)(b),++v){u=b[v]
if(u!=null){t=u.gp()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.bM(a,b,this,[z])
z.b=!0
this.T(z)},"$2","geR",8,0,21],
i0:[function(a,b){var z,y,x,w,v,u,t
z=M.au
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gN(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.w)(b),++v){u=b[v]
if(u!=null){t=u.gp()
t.toString
H.b(x,w)
C.a.R(t.a,x)}}z=new D.bN(a,b,this,[z])
z.b=!0
this.T(z)},"$2","geS",8,0,21],
a2:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.al(z,z.length,0,[H.z(z,0)]);z.B();){y=z.d
if(!(y==null))y.a2(a)}this.e=!1},
$asd:function(){return[M.au]},
$asaf:function(){return[M.au]},
$isau:1},fC:{"^":"a;0a,0b,0c,0d,0e,0f",
gp:function(){var z=this.f
if(z==null){z=D.D()
this.f=z}return z},
T:[function(a){var z
H.k(a,"$isl")
z=this.f
if(!(z==null))z.t(a)},function(){return this.T(null)},"cA","$1","$0","gN",0,2,0],
saO:function(a){var z,y,x
if(a==null)a=new X.fX()
z=this.a
if(z!==a){if(z!=null){z=z.gp()
z.toString
y=H.b(this.gN(),{func:1,ret:-1,args:[D.l]})
C.a.R(z.a,y)}x=this.a
this.a=a
z=a.gp()
z.toString
y=H.b(this.gN(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.E("camera",x,this.a,this,[X.c_])
z.b=!0
this.T(z)}},
saW:function(a,b){var z,y,x
if(b==null)b=X.cy(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gp()
z.toString
y=H.b(this.gN(),{func:1,ret:-1,args:[D.l]})
C.a.R(z.a,y)}x=this.b
this.b=b
z=b.gp()
z.toString
y=H.b(this.gN(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.E("target",x,this.b,this,[X.cR])
z.b=!0
this.T(z)}},
saX:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gp()
z.toString
y=H.b(this.gN(),{func:1,ret:-1,args:[D.l]})
C.a.R(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gp()
z.toString
y=H.b(this.gN(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.E("technique",x,this.c,this,[O.bT])
z.b=!0
this.T(z)}},
a2:function(a){a.cg(this.c)
this.b.W(a)
this.a.W(a)
this.d.ac(0,a)
this.d.a2(a)
this.a.b1(a)
this.b.toString
a.cf()},
$isau:1},fP:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
T:[function(a){var z
H.k(a,"$isl")
z=this.x
if(!(z==null))z.t(a)},function(){return this.T(null)},"cA","$1","$0","gN",0,2,0],
hJ:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aA
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gN(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.w)(b),++u){t=b[u]
if(t!=null){if(t.gY()==null){s=new D.aT()
s.a=H.c([],v)
s.c=0
t.sY(s)}s=t.gY()
s.toString
H.b(x,w)
C.a.h(s.a,x)}}z=new D.bM(a,b,this,[z])
z.b=!0
this.T(z)},"$2","gez",8,0,8],
hK:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aA
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gN(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.w)(b),++u){t=b[u]
if(t!=null){if(t.gY()==null){s=new D.aT()
s.a=H.c([],v)
s.c=0
t.sY(s)}s=t.gY()
s.toString
H.b(x,w)
C.a.R(s.a,x)}}z=new D.bN(a,b,this,[z])
z.b=!0
this.T(z)},"$2","geA",8,0,8],
saO:function(a){var z,y,x
if(a==null)a=X.dY(2000,1.0471975511965976,null,0.1)
z=this.a
if(z!==a){if(z!=null){z=z.gp()
z.toString
y=H.b(this.gN(),{func:1,ret:-1,args:[D.l]})
C.a.R(z.a,y)}x=this.a
this.a=a
z=a.gp()
z.toString
y=H.b(this.gN(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.E("camera",x,this.a,this,[X.c_])
z.b=!0
this.T(z)}},
saW:function(a,b){var z,y,x
if(b==null)b=X.cy(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gp()
z.toString
y=H.b(this.gN(),{func:1,ret:-1,args:[D.l]})
C.a.R(z.a,y)}x=this.b
this.b=b
z=b.gp()
z.toString
y=H.b(this.gN(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.E("target",x,this.b,this,[X.cR])
z.b=!0
this.T(z)}},
saX:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gp()
z.toString
y=H.b(this.gN(),{func:1,ret:-1,args:[D.l]})
C.a.R(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gp()
z.toString
y=H.b(this.gN(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.E("technique",x,this.c,this,[O.bT])
z.b=!0
this.T(z)}},
gp:function(){var z=this.x
if(z==null){z=D.D()
this.x=z}return z},
a2:function(a){var z
a.cg(this.c)
this.b.W(a)
this.a.W(a)
z=this.c
if(z!=null)z.ac(0,a)
for(z=this.d.a,z=new J.al(z,z.length,0,[H.z(z,0)]);z.B();)z.d.ac(0,a)
for(z=this.d.a,z=new J.al(z,z.length,0,[H.z(z,0)]);z.B();)z.d.a2(a)
this.a.toString
a.cy.aq()
a.db.aq()
this.b.toString
a.cf()},
$isau:1},au:{"^":"a;"}}],["","",,A,{"^":"",dg:{"^":"a;a,b,c"},fp:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fR:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
d6:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},dS:{"^":"cN;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aF,0an,0aG,0bb,0d9,0da,0bc,0bd,0dc,0dd,0be,0bf,0de,0df,0bg,0dg,0dh,0bh,0di,0dj,0bi,0bj,0bk,0dk,0dl,0bl,0bm,0dm,0dn,0bn,0dq,0c0,0dr,0c1,0ds,0c2,0dt,0c3,0du,0c4,0dv,0c5,a,b,0c,0d,0e,0f,0r",
dX:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.x=a1
z=new P.bS("")
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
a1.ff(z)
a1.fm(z)
a1.fg(z)
a1.fv(z)
a1.fw(z)
a1.fo(z)
a1.fC(z)
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
z=new P.bS("")
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
v.fj(z)
v.fe(z)
v.fh(z)
v.fk(z)
v.ft(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.fq(z)
v.fs(z)}v.fn(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.b){r+="uniform float alpha;\n"
z.a=r
if(q!==C.f){r+="uniform int nullAlphaTxt;\n"
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
case C.f:r+="   return alpha;\n"
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
r=z.a+="   return litClr*("+C.a.w(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.fi(z)
v.fp(z)
v.fu(z)
v.fz(z)
v.fA(z)
v.fB(z)
v.fl(z)}r=z.a+="// === Main ===\n"
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
n="vec4("+C.a.w(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.dz(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.y=this.f.j(0,"posAttr")
this.Q=this.f.j(0,"normAttr")
this.z=this.f.j(0,"binmAttr")
this.ch=this.f.j(0,"txt2DAttr")
this.cx=this.f.j(0,"txtCubeAttr")
this.cy=this.f.j(0,"bendAttr")
if(a1.fr)this.fy=H.e(this.r.m(0,"invViewMat"),"$isax")
if(y)this.db=H.e(this.r.m(0,"objMat"),"$isax")
if(w)this.dx=H.e(this.r.m(0,"viewObjMat"),"$isax")
this.fr=H.e(this.r.m(0,"projViewObjMat"),"$isax")
if(a1.x2)this.go=H.e(this.r.m(0,"txt2DMat"),"$iscV")
if(a1.y1)this.id=H.e(this.r.m(0,"txtCubeMat"),"$isax")
if(a1.y2)this.k1=H.e(this.r.m(0,"colorMat"),"$isax")
this.k3=H.c([],[A.ax])
y=a1.aF
if(y>0){this.k2=H.k(this.r.m(0,"bendMatCount"),"$isH")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.r(P.q("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.e(l,"$isax"))}}y=a1.a
if(y!==C.b){this.k4=H.e(this.r.m(0,"emissionClr"),"$isF")
switch(y){case C.b:break
case C.f:break
case C.c:this.r1=H.e(this.r.m(0,"emissionTxt"),"$isai")
this.rx=H.e(this.r.m(0,"nullEmissionTxt"),"$isH")
break
case C.d:this.r2=H.e(this.r.m(0,"emissionTxt"),"$isac")
this.rx=H.e(this.r.m(0,"nullEmissionTxt"),"$isH")
break}}y=a1.b
if(y!==C.b){this.ry=H.e(this.r.m(0,"ambientClr"),"$isF")
switch(y){case C.b:break
case C.f:break
case C.c:this.x1=H.e(this.r.m(0,"ambientTxt"),"$isai")
this.y1=H.e(this.r.m(0,"nullAmbientTxt"),"$isH")
break
case C.d:this.x2=H.e(this.r.m(0,"ambientTxt"),"$isac")
this.y1=H.e(this.r.m(0,"nullAmbientTxt"),"$isH")
break}}y=a1.c
if(y!==C.b){this.y2=H.e(this.r.m(0,"diffuseClr"),"$isF")
switch(y){case C.b:break
case C.f:break
case C.c:this.aF=H.e(this.r.m(0,"diffuseTxt"),"$isai")
this.aG=H.e(this.r.m(0,"nullDiffuseTxt"),"$isH")
break
case C.d:this.an=H.e(this.r.m(0,"diffuseTxt"),"$isac")
this.aG=H.e(this.r.m(0,"nullDiffuseTxt"),"$isH")
break}}y=a1.d
if(y!==C.b){this.bb=H.e(this.r.m(0,"invDiffuseClr"),"$isF")
switch(y){case C.b:break
case C.f:break
case C.c:this.d9=H.e(this.r.m(0,"invDiffuseTxt"),"$isai")
this.bc=H.e(this.r.m(0,"nullInvDiffuseTxt"),"$isH")
break
case C.d:this.da=H.e(this.r.m(0,"invDiffuseTxt"),"$isac")
this.bc=H.e(this.r.m(0,"nullInvDiffuseTxt"),"$isH")
break}}y=a1.e
if(y!==C.b){this.bf=H.e(this.r.m(0,"shininess"),"$isQ")
this.bd=H.e(this.r.m(0,"specularClr"),"$isF")
switch(y){case C.b:break
case C.f:break
case C.c:this.dc=H.e(this.r.m(0,"specularTxt"),"$isai")
this.be=H.e(this.r.m(0,"nullSpecularTxt"),"$isH")
break
case C.d:this.dd=H.e(this.r.m(0,"specularTxt"),"$isac")
this.be=H.e(this.r.m(0,"nullSpecularTxt"),"$isH")
break}}switch(a1.f){case C.b:break
case C.f:break
case C.c:this.de=H.e(this.r.m(0,"bumpTxt"),"$isai")
this.bg=H.e(this.r.m(0,"nullBumpTxt"),"$isH")
break
case C.d:this.df=H.e(this.r.m(0,"bumpTxt"),"$isac")
this.bg=H.e(this.r.m(0,"nullBumpTxt"),"$isH")
break}if(a1.dy){this.dg=H.e(this.r.m(0,"envSampler"),"$isac")
this.dh=H.e(this.r.m(0,"nullEnvTxt"),"$isH")
y=a1.r
if(y!==C.b){this.bh=H.e(this.r.m(0,"reflectClr"),"$isF")
switch(y){case C.b:break
case C.f:break
case C.c:this.di=H.e(this.r.m(0,"reflectTxt"),"$isai")
this.bi=H.e(this.r.m(0,"nullReflectTxt"),"$isH")
break
case C.d:this.dj=H.e(this.r.m(0,"reflectTxt"),"$isac")
this.bi=H.e(this.r.m(0,"nullReflectTxt"),"$isH")
break}}y=a1.x
if(y!==C.b){this.bj=H.e(this.r.m(0,"refraction"),"$isQ")
this.bk=H.e(this.r.m(0,"refractClr"),"$isF")
switch(y){case C.b:break
case C.f:break
case C.c:this.dk=H.e(this.r.m(0,"refractTxt"),"$isai")
this.bl=H.e(this.r.m(0,"nullRefractTxt"),"$isH")
break
case C.d:this.dl=H.e(this.r.m(0,"refractTxt"),"$isac")
this.bl=H.e(this.r.m(0,"nullRefractTxt"),"$isH")
break}}}y=a1.y
if(y!==C.b){this.bm=H.e(this.r.m(0,"alpha"),"$isQ")
switch(y){case C.b:break
case C.f:break
case C.c:this.dm=H.e(this.r.m(0,"alphaTxt"),"$isai")
this.bn=H.e(this.r.m(0,"nullAlphaTxt"),"$isH")
break
case C.d:this.dn=H.e(this.r.m(0,"alphaTxt"),"$isac")
this.bn=H.e(this.r.m(0,"nullAlphaTxt"),"$isH")
break}}this.c0=H.c([],[A.ev])
this.c1=H.c([],[A.ew])
this.c2=H.c([],[A.ex])
this.c3=H.c([],[A.ey])
this.c4=H.c([],[A.ez])
this.c5=H.c([],[A.eA])
if(a1.k2){y=a1.z
if(y>0){this.dq=H.k(this.r.m(0,"dirLightCount"),"$isH")
for(m=0;m<y;++m){x=this.r
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isF")
x=this.r
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isF")
x=this.c0;(x&&C.a).h(x,new A.ev(m,l,k))}}y=a1.Q
if(y>0){this.dr=H.k(this.r.m(0,"pntLightCount"),"$isH")
for(m=0;m<y;++m){x=this.r
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isF")
x=this.r
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isF")
x=this.r
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isF")
x=this.r
w="pntLights["+m+"].att0"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isQ")
x=this.r
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isQ")
x=this.r
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isQ")
x=this.c1;(x&&C.a).h(x,new A.ew(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.ds=H.k(this.r.m(0,"spotLightCount"),"$isH")
for(m=0;m<y;++m){x=this.r
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isF")
x=this.r
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isF")
x=this.r
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isF")
x=this.r
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isF")
x=this.r
w="spotLights["+m+"].cutoff"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isQ")
x=this.r
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isQ")
x=this.r
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isQ")
x=this.r
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isQ")
x=this.r
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isQ")
x=this.c2;(x&&C.a).h(x,new A.ex(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.dt=H.k(this.r.m(0,"txtDirLightCount"),"$isH")
for(m=0;m<y;++m){x=this.r
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isF")
x=this.r
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isF")
x=this.r
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isF")
x=this.r
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isF")
x=this.r
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isF")
x=this.r
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isH")
x=this.r
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isai")
x=this.c3;(x&&C.a).h(x,new A.ey(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.du=H.k(this.r.m(0,"txtPntLightCount"),"$isH")
for(m=0;m<y;++m){x=this.r
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isF")
x=this.r
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isF")
x=this.r
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$iscV")
x=this.r
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isF")
x=this.r
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isH")
x=this.r
w="txtPntLights["+m+"].att0"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isQ")
x=this.r
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isQ")
x=this.r
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isQ")
x=this.r
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isac")
x=this.c4;(x&&C.a).h(x,new A.ez(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.dv=H.k(this.r.m(0,"txtSpotLightCount"),"$isH")
for(m=0;m<y;++m){x=this.r
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isF")
x=this.r
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isF")
x=this.r
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isF")
x=this.r
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isF")
x=this.r
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isF")
x=this.r
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isH")
x=this.r
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isF")
x=this.r
w="txtSpotLights["+m+"].tuScalar"
e=x.j(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isQ")
x=this.r
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isQ")
x=this.r
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(c,"$isQ")
x=this.r
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(b,"$isQ")
x=this.r
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(a,"$isQ")
x=this.r
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(a0,"$isai")
x=this.c5;(x&&C.a).h(x,new A.eA(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
aa:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.dQ(c)
b.a.uniform1i(b.d,0)}},
a4:function(a,b,c){b.a.uniform1i(b.d,1)},
n:{
hk:function(a,b){var z,y
z=a.an
y=new A.dS(b,z)
y.cv(b,z)
y.dX(a,b)
return y}}},hn:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aF,an,aG",
ff:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aF+"];\n"
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
fm:function(a){var z
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
fg:function(a){var z
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
fv:function(a){var z,y
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
fw:function(a){var z,y
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
fo:function(a){var z
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
fC:function(a){var z
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
ah:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.i(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.h.cr(c,1))+"Txt;\n"
a.a=z
if(b===C.c)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fj:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.ah(a,z,"emission")
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
fe:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.ah(a,z,"ambient")
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
fh:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.ah(a,z,"diffuse")
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
fk:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.ah(a,z,"invDiffuse")
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
ft:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.ah(a,z,"specular")
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
fn:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.b:break
case C.f:break
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
case C.f:z+="   return normalize(normalVec);\n"
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
fq:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.ah(a,z,"reflect")
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
fs:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.ah(a,z,"refract")
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
fi:function(a){var z,y
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
fp:function(a){var z,y
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
fu:function(a){var z,y
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
fz:function(a){var z,y,x
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
fA:function(a){var z,y,x
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
fB:function(a){var z,y,x
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
fl:function(a){var z
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
i:function(a){return this.an}},ev:{"^":"a;a,b,c"},ey:{"^":"a;a,b,c,d,e,f,r,x"},ew:{"^":"a;a,b,c,d,e,f,r"},ez:{"^":"a;a,b,c,d,e,f,r,x,y,z"},ex:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eA:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cN:{"^":"cp;",
cv:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
dz:function(a,b,c){var z,y,x
this.c=this.cL(b,35633)
this.d=this.cL(c,35632)
z=this.a
y=z.createProgram()
this.e=y
z.attachShader(y,this.c)
z.attachShader(this.e,this.d)
z.linkProgram(this.e)
if(!H.f6(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.r(P.q("Failed to link shader: "+H.j(x)))}this.f5()
this.f7()},
W:function(a){a.a.useProgram(this.e)
this.f.fR()},
cL:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.f6(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.h(P.q("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
f5:function(){var z,y,x,w,v,u
z=H.c([],[A.dg])
y=this.a
x=H.U(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dg(y,v.name,u))}this.f=new A.fp(z)},
f7:function(){var z,y,x,w,v,u
z=H.c([],[A.a3])
y=this.a
x=H.U(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.fO(v.type,v.size,v.name,u))}this.r=new A.iF(z)},
ax:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.H(z,y,b,c)
else return A.cU(z,y,b,a,c)},
ef:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ai(z,y,b,c)
else return A.cU(z,y,b,a,c)},
eg:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ac(z,y,b,c)
else return A.cU(z,y,b,a,c)},
b8:function(a,b){return new P.eJ(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
fO:function(a,b,c,d){switch(a){case 5120:return this.ax(b,c,d)
case 5121:return this.ax(b,c,d)
case 5122:return this.ax(b,c,d)
case 5123:return this.ax(b,c,d)
case 5124:return this.ax(b,c,d)
case 5125:return this.ax(b,c,d)
case 5126:return new A.Q(this.a,this.e,c,d)
case 35664:return new A.iA(this.a,this.e,c,d)
case 35665:return new A.F(this.a,this.e,c,d)
case 35666:return new A.iD(this.a,this.e,c,d)
case 35667:return new A.iB(this.a,this.e,c,d)
case 35668:return new A.iC(this.a,this.e,c,d)
case 35669:return new A.iE(this.a,this.e,c,d)
case 35674:return new A.iH(this.a,this.e,c,d)
case 35675:return new A.cV(this.a,this.e,c,d)
case 35676:return new A.ax(this.a,this.e,c,d)
case 35678:return this.ef(b,c,d)
case 35680:return this.eg(b,c,d)
case 35670:throw H.h(this.b8("BOOL",c))
case 35671:throw H.h(this.b8("BOOL_VEC2",c))
case 35672:throw H.h(this.b8("BOOL_VEC3",c))
case 35673:throw H.h(this.b8("BOOL_VEC4",c))
default:throw H.h(P.q("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},c0:{"^":"a;a,b",
i:function(a){return this.b}},e5:{"^":"cN;0x,0y,0z,0Q,0ch,0cx,a,b,0c,0d,0e,0f,0r"},a3:{"^":"a;"},iF:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.j(0,b)
if(z==null)throw H.h(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.F()},
fT:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.w)(z),++w)x+=z[w].i(0)+a
return x},
F:function(){return this.fT("\n")}},H:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},iB:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},iC:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},iE:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},iz:{"^":"a3;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.j(this.c)},
n:{
cU:function(a,b,c,d,e){var z=new A.iz(a,b,c,e)
z.f=d
z.e=P.hc(d,0,!1,P.A)
return z}}},Q:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},iA:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},F:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},iD:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},iH:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},cV:{"^":"a3;a,b,c,d",
a8:function(a){var z=new Float32Array(H.bD(H.x(a,"$isf",[P.v],"$asf")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},ax:{"^":"a3;a,b,c,d",
a8:function(a){var z=new Float32Array(H.bD(H.x(a,"$isf",[P.v],"$asf")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},ai:{"^":"a3;a,b,c,d",
dQ:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},ac:{"^":"a3;a,b,c,d",
dR:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
cg:function(a){var z=a.a>0?1:0
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
z.d=y}l=F.cg(y)
k=F.cg(z.b)
j=F.l_(d,e,new F.km(z,F.cg(z.c),F.cg(z.d),k,l,c),b)
if(j!=null)a.h4(j)},
l_:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.b(c,{func:1,ret:-1,args:[F.aC,P.v,P.v]})
if(a<1)return
if(b<1)return
z=F.cO()
y=H.c([],[F.aC])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cd(null,null,new V.aK(u,0,0,1),null,null,new V.O(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.bX(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cd(null,null,new V.aK(o,n,m,1),null,null,new V.O(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.bX(d))}}z.d.fE(a+1,b+1,y)
return z},
km:{"^":"u:35;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.ca(z.b,b).ca(z.d.ca(z.c,b),c)
z=new V.ab(y.a,y.b,y.c)
if(!J.S(a.f,z)){a.f=z
z=a.a
if(z!=null)z.a_()}a.shs(y.u(0,Math.sqrt(y.A(y))))
z=1-b
x=1-c
x=new V.bp(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.S(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.a_()}}},
ag:{"^":"a;0a,0b,0c,0d,0e",
gc_:function(){return this.a==null||this.b==null||this.c==null},
e9:function(){var z,y,x,w,v
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
if(v.dA())return
return v.u(0,Math.sqrt(v.A(v)))},
ec:function(){var z,y,x,w,v
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
z=v.aQ(z.u(0,Math.sqrt(z.A(z))))
return z.u(0,Math.sqrt(z.A(z)))},
bV:function(){if(this.d!=null)return!0
var z=this.e9()
if(z==null){z=this.ec()
if(z==null)return!1}this.d=z
this.a.a.a_()
return!0},
e8:function(){var z,y,x,w,v
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
if(v.dA())return
return v.u(0,Math.sqrt(v.A(v)))},
eb:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.m.$2(n,0)){z=r.E(0,u)
z=new V.G(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.A(z)))
if(o.a-p.a<0)m=m.H(0)}else{l=(z-q.b)/n
z=r.E(0,u)
z=new V.ab(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).E(0,x)
z=new V.G(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.A(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.H(0)}z=this.d
if(z!=null){k=z.u(0,Math.sqrt(z.A(z)))
z=k.aQ(m)
z=z.u(0,Math.sqrt(z.A(z))).aQ(k)
m=z.u(0,Math.sqrt(z.A(z)))}return m},
bT:function(){if(this.e!=null)return!0
var z=this.e8()
if(z==null){z=this.eb()
if(z==null)return!1}this.e=z
this.a.a.a_()
return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
v:function(a){var z,y
if(this.gc_())return a+"disposed"
z=a+C.h.a6(J.a5(this.a.e),0)+", "+C.h.a6(J.a5(this.b.e),0)+", "+C.h.a6(J.a5(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
F:function(){return this.v("")},
n:{
be:function(a,b,c){var z,y,x
z=new F.ag()
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
z.a.a.a_()
return z}}},
cG:{"^":"a;0a,0b",
gc_:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
v:function(a){if(this.gc_())return a+"disposed"
return a+C.h.a6(J.a5(this.a.e),0)+", "+C.h.a6(J.a5(this.b.e),0)},
F:function(){return this.v("")}},
cL:{"^":"a;0a",
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
v:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.h.a6(J.a5(z.e),0)},
F:function(){return this.v("")}},
e4:{"^":"a;0a,0b,0c,0d,0e",
gp:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
h4:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.U()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.w)(z),++w){v=z[w]
this.a.h(0,v.fN())}this.a.U()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.w)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.U()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.cL()
if(r.a==null)H.r(P.q("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.t(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.w)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.U()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.U()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.i(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.cG()
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
if(!(t==null))t.t(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.w)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.U()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.U()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.i(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.U()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.be(p,o,l)}z=this.e
if(!(z==null))z.ar(0)},
al:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.al()||!1
if(!this.a.al())y=!1
z=this.e
if(!(z==null))z.ar(0)
return y},
d1:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$ap()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aF().a)!==0)++w
if((x&$.$get$aE().a)!==0)++w
if((x&$.$get$aG().a)!==0)++w
if((x&$.$get$aH().a)!==0)++w
if((x&$.$get$by().a)!==0)++w
if((x&$.$get$bz().a)!==0)++w
if((x&$.$get$b1().a)!==0)++w
if((x&$.$get$aD().a)!==0)++w
v=b.gcq(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.v
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.dj])
for(r=0,q=0;q<w;++q){p=b.fH(q)
o=p.gcq(p)
C.a.X(s,q,new Z.dj(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.i(y,n)
m=y[n].h_(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.X(t,l,m[k]);++l}}r+=o}H.x(t,"$isf",[x],"$asf")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bD(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cs(new Z.eG(34962,j),s,b)
i.b=H.c([],[Z.c5])
if(this.b.b.length!==0){x=P.A
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.U()
C.a.h(h,g.e)}f=Z.cX(y,34963,H.x(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.c5(0,h.length,f))}if(this.c.b.length!==0){x=P.A
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.U()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.U()
C.a.h(h,g.e)}f=Z.cX(y,34963,H.x(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.c5(1,h.length,f))}if(this.d.b.length!==0){x=P.A
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.U()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.U()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].c
g.a.a.U()
C.a.h(h,g.e)}f=Z.cX(y,34963,H.x(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.c5(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.n])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.v("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.v("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.v("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.v("   "))}return C.a.w(z,"\n")},
aI:function(a){var z=this.e
if(!(z==null))z.t(a)},
a_:function(){return this.aI(null)},
n:{
cO:function(){var z,y
z=new F.e4()
y=new F.iS(z)
y.b=!1
y.c=H.c([],[F.aC])
z.a=y
y=new F.i2(z)
y.b=H.c([],[F.cL])
z.b=y
y=new F.i1(z)
y.b=H.c([],[F.cG])
z.c=y
y=new F.i0(z)
y.b=H.c([],[F.ag])
z.d=y
z.e=null
return z}}},
i0:{"^":"a;a,0b",
fD:function(a){var z,y,x,w,v
H.x(a,"$isf",[F.aC],"$asf")
z=H.c([],[F.ag])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.be(y,w,v))}return z},
fE:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.x(c,"$isf",[F.aC],"$asf")
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
al:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.w)(z),++w)if(!z[w].bV())x=!1
return x},
bU:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.w)(z),++w)if(!z[w].bT())x=!1
return x},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
F:function(){return this.v("")}},
i1:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.i(w,x)
C.a.h(z,w[x].v(a+(""+x+". ")))}return C.a.w(z,"\n")},
F:function(){return this.v("")}},
i2:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
F:function(){return this.v("")}},
aC:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bX:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cd(this.cx,x,u,z,y,w,v,a,t)},
fN:function(){return this.bX(null)},
shs:function(a){var z
if(!J.S(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a_()}},
h_:function(a){var z,y
z=J.J(a)
if(z.q(a,$.$get$ap())){z=this.f
y=[P.v]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aF())){z=this.r
y=[P.v]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aE())){z=this.x
y=[P.v]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aG())){z=this.y
y=[P.v]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.q(a,$.$get$aH())){z=this.z
y=[P.v]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$by())){z=this.Q
y=[P.v]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bz())){z=this.Q
y=[P.v]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(z.q(a,$.$get$b1()))return H.c([this.ch],[P.v])
else if(z.q(a,$.$get$aD())){z=this.cx
y=[P.v]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.v])},
bV:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.J(0,new F.iZ(z))
z=z.a
this.r=z.u(0,Math.sqrt(z.A(z)))
z=this.a
if(z!=null){z.a_()
z=this.a.e
if(!(z==null))z.ar(0)}return!0},
bT:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.J(0,new F.iY(z))
z=z.a
this.x=z.u(0,Math.sqrt(z.A(z)))
z=this.a
if(z!=null){z.a_()
z=this.a.e
if(!(z==null))z.ar(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
v:function(a){var z,y,x
z=H.c([],[P.n])
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
n:{
cd:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aC()
y=new F.iX(z)
y.b=H.c([],[F.cL])
z.b=y
y=new F.iW(z)
x=[F.cG]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.iT(z)
x=[F.ag]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
z.d=y
h=$.$get$eD()
z.e=0
y=$.$get$ap()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aF().a)!==0?e:null
z.x=(x&$.$get$aE().a)!==0?b:null
z.y=(x&$.$get$aG().a)!==0?f:null
z.z=(x&$.$get$aH().a)!==0?g:null
z.Q=(x&$.$get$eE().a)!==0?c:null
z.ch=(x&$.$get$b1().a)!==0?i:0
z.cx=(x&$.$get$aD().a)!==0?a:null
return z}}},
iZ:{"^":"u:5;a",
$1:function(a){var z,y
H.k(a,"$isag")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
iY:{"^":"u:5;a",
$1:function(a){var z,y
H.k(a,"$isag")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
iS:{"^":"a;a,0b,0c",
U:function(){var z,y,x,w
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
this.a.a_()
return!0},
fF:function(a,b,c,d,e,f,g,h,i){var z=F.cd(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
b9:function(a,b,c,d,e,f){return this.fF(a,null,b,c,null,d,e,f,0)},
gk:function(a){return this.c.length},
al:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x)z[x].bV()
return!0},
bU:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x)z[x].bT()
return!0},
fJ:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.u(0,Math.sqrt(u*u+t*t+s*s))
if(!J.S(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.t(null)}}}}return!0},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
this.U()
z=H.c([],[P.n])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
F:function(){return this.v("")}},
iT:{"^":"a;a,0b,0c,0d",
gk:function(a){return this.b.length+this.c.length+this.d.length},
J:function(a,b){H.b(b,{func:1,ret:-1,args:[F.ag]})
C.a.J(this.b,b)
C.a.J(this.c,new F.iU(this,b))
C.a.J(this.d,new F.iV(this,b))},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
F:function(){return this.v("")}},
iU:{"^":"u:5;a,b",
$1:function(a){H.k(a,"$isag")
if(!J.S(a.a,this.a))this.b.$1(a)}},
iV:{"^":"u:5;a,b",
$1:function(a){var z
H.k(a,"$isag")
z=this.a
if(!J.S(a.a,z)&&!J.S(a.b,z))this.b.$1(a)}},
iW:{"^":"a;a,0b,0c",
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
F:function(){return this.v("")}},
iX:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
F:function(){return this.v("")}}}],["","",,O,{"^":"",hj:{"^":"bT;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gp:function(){var z=this.dy
if(z==null){z=D.D()
this.dy=z}return z},
O:[function(a){var z
H.k(a,"$isl")
z=this.dy
if(!(z==null))z.t(a)},function(){return this.O(null)},"cB","$1","$0","gav",0,2,0],
eZ:[function(a){H.k(a,"$isl")
this.a=null
this.O(a)},function(){return this.eZ(null)},"i4","$1","$0","geY",0,2,0],
hF:[function(a,b){var z=V.aB
z=new D.bM(a,H.x(b,"$isd",[z],"$asd"),this,[z])
z.b=!0
this.O(z)},"$2","gev",8,0,22],
hG:[function(a,b){var z=V.aB
z=new D.bN(a,H.x(b,"$isd",[z],"$asd"),this,[z])
z.b=!0
this.O(z)},"$2","gew",8,0,22],
cI:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.e.Z(z.e.length+3,4)*4
x=C.e.Z(z.f.length+3,4)*4
w=C.e.Z(z.r.length+3,4)*4
v=C.e.Z(z.x.length+3,4)*4
u=C.e.Z(z.y.length+3,4)*4
t=C.e.Z(z.z.length+3,4)*4
s=C.e.Z(this.e.a.length+3,4)*4
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
h="MaterialLight_"+C.e.i(q.a)+C.e.i(p.a)+C.e.i(o.a)+C.e.i(n.a)+C.e.i(m.a)+C.e.i(l.a)+C.e.i(k.a)+C.e.i(j.a)+C.e.i(i.a)+"_"
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
a6=$.$get$ap()
if(c){z=$.$get$aF()
a6=new Z.b0(a6.a|z.a)}if(b){z=$.$get$aE()
a6=new Z.b0(a6.a|z.a)}if(a){z=$.$get$aG()
a6=new Z.b0(a6.a|z.a)}if(a0){z=$.$get$aH()
a6=new Z.b0(a6.a|z.a)}if(a2){z=$.$get$aD()
a6=new Z.b0(a6.a|z.a)}return new A.hn(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
M:function(a,b){H.x(a,"$isf",[T.cb],"$asf")
if(b!=null)if(!C.a.aP(a,b)){b.a=a.length
C.a.h(a,b)}},
ac:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.al(z,z.length,0,[H.z(z,0)]);z.B();){y=z.d
x=new V.G(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.ck(x)}}},
dF:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.cI()
y=H.k(a.fr.j(0,z.an),"$isdS")
if(y==null){y=A.hk(z,a.a)
a.d_(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.aG
z=b.e
if(!(z instanceof Z.cs)){b.e=null
z=null}if(z==null||!z.d.q(0,w)){z=x.r1
if(z)b.d.al()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.c
u.d.bU()
u.a.bU()
u=u.e
if(!(u==null))u.ar(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.a.fJ()
t=t.e
if(!(t==null))t.ar(0)}r=b.d.d1(new Z.eH(a.a),w)
r.ao($.$get$ap()).e=this.a.y.c
if(z)r.ao($.$get$aF()).e=this.a.Q.c
if(v)r.ao($.$get$aE()).e=this.a.z.c
if(x.rx)r.ao($.$get$aG()).e=this.a.ch.c
if(u)r.ao($.$get$aH()).e=this.a.cx.c
if(x.x1)r.ao($.$get$aD()).e=this.a.cy.c
b.e=r}z=T.cb
q=H.c([],[z])
this.a.W(a)
if(x.fx){v=this.a
u=a.dx
u=u.gP(u)
v=v.db
v.toString
v.a8(u.a3(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.gP(u)
t=a.dx
t=u.l(0,t.gP(t))
a.cx=t
u=t}v=v.dx
v.toString
v.a8(u.a3(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.ghi()
t=a.dx
t=u.l(0,t.gP(t))
a.ch=t
u=t}v=v.fr
v.toString
v.a8(u.a3(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.go
v.toString
v.a8(u.a3(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.id
v.toString
v.a8(u.a3(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k1
v.toString
v.a8(C.A.a3(u,!0))}if(x.aF>0){p=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,p)
for(v=[P.v],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.i(t,o)
t=t[o]
u.toString
H.k(t,"$isaB")
u=u.k3
if(o>=u.length)return H.i(u,o)
u=u[o]
n=new Float32Array(H.bD(H.x(t.a3(0,!0),"$isf",v,"$asf")))
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
case C.c:this.M(q,this.f.d)
v=this.a
u=this.f.d
v.aa(v.r1,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.M(q,this.f.e)
v=this.a
u=this.f.e
v.a4(v.r2,v.rx,u)
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
case C.c:this.M(q,this.r.d)
v=this.a
u=this.r.d
v.aa(v.x1,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.M(q,this.r.e)
v=this.a
u=this.r.e
v.a4(v.x2,v.y1,u)
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
case C.c:this.M(q,this.x.d)
v=this.a
u=this.x.d
v.aa(v.aF,v.aG,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.M(q,this.x.e)
v=this.a
u=this.x.e
v.a4(v.an,v.aG,u)
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
v=v.bb
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.c:this.M(q,this.y.d)
v=this.a
u=this.y.d
v.aa(v.d9,v.bc,u)
u=this.a
v=this.y.f
u=u.bb
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.M(q,this.y.e)
v=this.a
u=this.y.e
v.a4(v.da,v.bc,u)
u=this.a
v=this.y.f
u=u.bb
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.b:break
case C.f:v=this.a
u=this.z.f
v=v.bd
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bf
u.a.uniform1f(u.d,s)
break
case C.c:this.M(q,this.z.d)
v=this.a
u=this.z.d
v.aa(v.dc,v.be,u)
u=this.a
v=this.z.f
u=u.bd
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bf
v.a.uniform1f(v.d,s)
break
case C.d:this.M(q,this.z.e)
v=this.a
u=this.z.e
v.a4(v.dd,v.be,u)
u=this.a
v=this.z.f
u=u.bd
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bf
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.dq
v.a.uniform1i(v.d,p)
v=a.db
m=v.gP(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.w)(v),++k){j=v[k]
t=this.a.c0
if(l>=t.length)return H.i(t,l)
i=t[l]
t=m.ck(j.a)
s=t.a
h=t.b
g=t.c
g=t.u(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.dr
v.a.uniform1i(v.d,p)
v=a.db
m=v.gP(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.w)(v),++k){j=v[k]
t=this.a.c1
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gaU(j)
s=i.b
h=t.gcm(t)
g=t.gcn(t)
t=t.gco(t)
s.a.uniform3f(s.d,h,g,t)
t=m.b0(j.gaU(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gam(j)
g=i.d
h=t.gbp()
s=t.gb2()
t=t.gba()
g.a.uniform3f(g.d,h,s,t)
t=j.gbO()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gbP()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gbQ()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.ds
v.a.uniform1i(v.d,p)
v=a.db
m=v.gP(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.w)(v),++k){j=v[k]
t=this.a.c2
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gaU(j)
s=i.b
h=t.gcm(t)
g=t.gcn(t)
t=t.gco(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gbZ(j).ia()
g=i.c
h=t.gaC(t)
s=t.gaD(t)
t=t.gaE()
g.a.uniform3f(g.d,h,s,t)
t=m.b0(j.gaU(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gam(j)
s=i.e
h=t.gbp()
g=t.gb2()
t=t.gba()
s.a.uniform3f(s.d,h,g,t)
t=j.gi9()
g=i.f
g.a.uniform1f(g.d,t)
t=j.gi8()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gbO()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gbP()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gbQ()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.dt
v.a.uniform1i(v.d,p)
v=a.db
m=v.gP(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.w)(v),++k){j=v[k]
s=this.a.c3
if(l>=s.length)return H.i(s,l)
i=s[l]
s=j.gaY()
H.x(q,"$isf",t,"$asf")
if(!C.a.aP(q,s)){s.saL(q.length)
C.a.h(q,s)}s=j.gbZ(j)
h=i.d
g=s.gaC(s)
f=s.gaD(s)
s=s.gaE()
h.a.uniform3f(h.d,g,f,s)
s=j.gbq()
f=i.b
g=s.gaC(s)
h=s.gaD(s)
s=s.gaE()
f.a.uniform3f(f.d,g,h,s)
s=j.gaV(j)
h=i.c
g=s.gaC(s)
f=s.gaD(s)
s=s.gaE()
h.a.uniform3f(h.d,g,f,s)
s=m.ck(j.gbZ(j))
f=s.a
g=s.b
h=s.c
h=s.u(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gam(j)
g=i.f
f=h.gbp()
s=h.gb2()
h=h.gba()
g.a.uniform3f(g.d,f,s,h)
h=j.gaY()
s=h.gdB(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gcN()
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.gaL())
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.du
v.a.uniform1i(v.d,p)
v=a.db
m=v.gP(v)
for(v=this.dx.y,u=v.length,t=[P.v],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.w)(v),++k){j=v[k]
h=this.a.c4
if(l>=h.length)return H.i(h,l)
i=h[l]
h=j.gaY()
H.x(q,"$isf",s,"$asf")
if(!C.a.aP(q,h)){h.saL(q.length)
C.a.h(q,h)}e=m.l(0,j.gP(j))
h=j.gP(j).b0(new V.ab(0,0,0))
g=i.b
f=h.gcm(h)
d=h.gcn(h)
h=h.gco(h)
g.a.uniform3f(g.d,f,d,h)
h=e.b0(new V.ab(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.c8(0)
d=i.d
n=new Float32Array(H.bD(H.x(new V.dT(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a3(0,!0),"$isf",t,"$asf")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gam(j)
h=i.e
f=d.gbp()
g=d.gb2()
d=d.gba()
h.a.uniform3f(h.d,f,g,d)
d=j.gaY()
h=d.gdB(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gcN()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gaL())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gbO()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gbP()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gbQ()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.dv
v.a.uniform1i(v.d,p)
v=a.db
m=v.gP(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.w)(v),++k){j=v[k]
t=this.a.c5
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gaY()
H.x(q,"$isf",z,"$asf")
if(!C.a.aP(q,t)){t.saL(q.length)
C.a.h(q,t)}t=j.gaU(j)
s=i.b
h=t.gcm(t)
g=t.gcn(t)
t=t.gco(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gbZ(j)
g=i.c
h=t.gaC(t)
s=t.gaD(t)
t=t.gaE()
g.a.uniform3f(g.d,h,s,t)
t=j.gbq()
s=i.d
h=t.gaC(t)
g=t.gaD(t)
t=t.gaE()
s.a.uniform3f(s.d,h,g,t)
t=j.gaV(j)
g=i.e
h=t.gaC(t)
s=t.gaD(t)
t=t.gaE()
g.a.uniform3f(g.d,h,s,t)
t=m.b0(j.gaU(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gaY()
s=t.gdB(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gcN()
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.gaL())
t=i.x
t.a.uniform1i(t.d,0)}t=j.gam(j)
s=i.y
h=t.gbp()
g=t.gb2()
t=t.gba()
s.a.uniform3f(s.d,h,g,t)
t=j.gih()
g=i.z
g.a.uniform1f(g.d,t)
t=j.gii()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gbO()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gbP()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gbQ()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.b:break
case C.f:break
case C.c:this.M(q,this.Q.d)
z=this.a
v=this.Q.d
z.aa(z.de,z.bg,v)
break
case C.d:this.M(q,this.Q.e)
z=this.a
v=this.Q.e
z.a4(z.df,z.bg,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gP(v).c8(0)
a.Q=v}z=z.fy
z.toString
z.a8(v.a3(0,!0))}if(x.dy){this.M(q,this.ch)
z=this.a
v=this.ch
z.a4(z.dg,z.dh,v)
switch(x.r){case C.b:break
case C.f:z=this.a
v=this.cx.f
z=z.bh
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.c:this.M(q,this.cx.d)
z=this.a
v=this.cx.d
z.aa(z.di,z.bi,v)
v=this.a
z=this.cx.f
v=v.bh
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.d:this.M(q,this.cx.e)
z=this.a
v=this.cx.e
z.a4(z.dj,z.bi,v)
v=this.a
z=this.cx.f
v=v.bh
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.b:break
case C.f:z=this.a
v=this.cy.f
z=z.bk
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bj
v.a.uniform1f(v.d,t)
break
case C.c:this.M(q,this.cy.d)
z=this.a
v=this.cy.d
z.aa(z.dk,z.bl,v)
v=this.a
z=this.cy.f
v=v.bk
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bj
z.a.uniform1f(z.d,t)
break
case C.d:this.M(q,this.cy.e)
z=this.a
v=this.cy.e
z.a4(z.dl,z.bl,v)
v=this.a
z=this.cy.f
v=v.bk
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bj
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.b
if(v){switch(z){case C.b:break
case C.f:z=this.a
u=this.db.f
z=z.bm
z.a.uniform1f(z.d,u)
break
case C.c:this.M(q,this.db.d)
z=this.a
u=this.db.d
z.aa(z.dm,z.bn,u)
u=this.a
z=this.db.f
u=u.bm
u.a.uniform1f(u.d,z)
break
case C.d:this.M(q,this.db.e)
z=this.a
u=this.db.e
z.a4(z.dn,z.bn,u)
u=this.a
z=this.db.f
u=u.bm
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o){z=q[o]
if(!z.c&&z.d){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,z.b)}}z=b.e
z.W(a)
z.a2(a)
z.b1(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o){z=q[o]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.d6()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cI().an}},hl:{"^":"cH;0f,a,b,0c,0d,0e",
f0:function(a){var z,y
z=this.f
if(!$.m.$2(z,a)){y=this.f
this.f=a
z=new D.E(this.b,y,a,this,[P.v])
z.b=!0
this.a.O(z)}},
az:function(){this.ct()
this.f0(1)}},cH:{"^":"a;",
O:[function(a){this.a.O(H.k(a,"$isl"))},function(){return this.O(null)},"cB","$1","$0","gav",0,2,0],
az:["ct",function(){}],
f3:function(a){var z,y,x
z=this.d
if(z==null?a!=null:z!==a){if(z!=null){z=z.y
y=H.b(this.gav(),{func:1,ret:-1,args:[D.l]})
C.a.R(z.a,y)}x=this.d
this.d=a
if(a!=null){z=a.y
y=H.b(this.gav(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.E(this.b+".texture2D",x,this.d,this,[T.eb])
z.b=!0
this.a.O(z)}},
f4:function(a){},
scj:function(a){var z=this.c
if(z!==C.c){if(z===C.b)this.az()
this.c=C.c
this.f4(null)
z=this.a
z.a=null
z.O(null)}this.f3(a)}},hm:{"^":"cH;a,b,0c,0d,0e"},aW:{"^":"cH;0f,a,b,0c,0d,0e",
cU:function(a){var z,y
if(!J.S(this.f,a)){z=this.f
this.f=a
y=new D.E(this.b+".color",z,a,this,[V.X])
y.b=!0
this.a.O(y)}},
az:["cu",function(){this.ct()
this.cU(new V.X(1,1,1))}],
sam:function(a,b){var z
if(this.c===C.b){this.c=C.f
this.az()
z=this.a
z.a=null
z.O(null)}this.cU(b)}},ho:{"^":"aW;0ch,0f,a,b,0c,0d,0e",
f1:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.E(this.b+".refraction",y,a,this,[P.v])
z.b=!0
this.a.O(z)}},
az:function(){this.cu()
this.f1(1)}},hp:{"^":"aW;0ch,0f,a,b,0c,0d,0e",
f2:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.E(this.b+".shininess",y,a,this,[P.v])
z.b=!0
this.a.O(z)}},
az:function(){this.cu()
this.f2(100)}},i7:{"^":"bT;0a,0b,0c,0d,0e",
gp:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
O:[function(a){var z
H.k(a,"$isl")
z=this.e
if(!(z==null))z.t(a)},function(){return this.O(null)},"cB","$1","$0","gav",0,2,0],
dF:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.k(a.fr.j(0,"Skybox"),"$ise5")
if(z==null){y=a.a
z=new A.e5(y,"Skybox")
z.cv(y,"Skybox")
z.dz(0,$.i9,$.i8)
z.x=z.f.j(0,"posAttr")
z.y=H.e(z.r.j(0,"fov"),"$isQ")
z.z=H.e(z.r.j(0,"ratio"),"$isQ")
z.Q=H.e(z.r.j(0,"boxClr"),"$isF")
z.ch=H.e(z.r.j(0,"boxTxt"),"$isac")
z.cx=H.e(z.r.j(0,"viewMat"),"$isax")
a.d_(z)}this.a=z}if(b.e==null){y=b.d.d1(new Z.eH(a.a),$.$get$ap())
y.ao($.$get$ap()).e=this.a.x.c
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
w.ch.dR(x)
x=this.d
y=w.Q
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.gP(x).c8(0)
w=w.cx
w.toString
w.a8(x.a3(0,!0))
y=b.e
if(y instanceof Z.cs){y.W(a)
y.a2(a)
y.b1(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.d6()
y=this.c
if(y!=null)if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(34067,null)}}},bT:{"^":"a;"}}],["","",,T,{"^":"",cb:{"^":"cp;"},eb:{"^":"cb;0b,0c,0d,0e,0f,0r,0x,0y,a"},ec:{"^":"cb;0b,0c,0d,0e,a"},ik:{"^":"a;a,0b,0c,0d,0e",
h2:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
z.bindTexture(3553,y)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
z.bindTexture(3553,null);++this.d
x=W.dF(null,a,null)
w=new T.eb(0)
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
w.y=D.D()
z=W.a1
W.T(x,"load",H.b(new T.im(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
h1:function(a){return this.h2(a,!1,!1,!1,!1)},
ay:function(a,b,c,d,e,f){var z,y
z=W.dF(null,c,null);++this.d
y=W.a1
W.T(z,"load",H.b(new T.il(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
cT:function(a,b,c){var z,y,x,w
b=V.dc(b,2)
z=V.dc(a.width,2)
y=V.dc(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cu(null,null)
x.width=z
x.height=y
w=H.k(C.k.dM(x,"2d"),"$isdl")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.kC(w.getImageData(0,0,x.width,x.height))}}},im:{"^":"u:11;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.cT(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.q.dH(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z.y.d8()}++x.e}},il:{"^":"u:11;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.cT(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.q.dH(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6)x.e.d8();++z.e}}}],["","",,V,{"^":"",fn:{"^":"a;",
aR:function(a,b){return!0},
i:function(a){return"all"},
$isbQ:1},bQ:{"^":"a;"},dR:{"^":"a;",
aR:["dV",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x)if(z[x].aR(0,b))return!0
return!1}],
i:["cs",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.w)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbQ:1},bn:{"^":"dR;0a",
aR:function(a,b){return!this.dV(0,b)},
i:function(a){return"!["+this.cs(0)+"]"}},hZ:{"^":"a;0a",
dZ:function(a){var z,y
if(a.a.length<=0)throw H.h(P.q("May not create a SetMatcher with zero characters."))
z=new H.aV(0,0,[P.A,P.a4])
for(y=new H.dO(a,a.gk(a),0,[H.ay(a,"t",0)]);y.B();)z.X(0,y.d,!0)
this.a=z},
aR:function(a,b){return this.a.d4(0,b)},
i:function(a){var z=this.a
return P.cQ(new H.dN(z,[H.z(z,0)]),0,null)},
$isbQ:1,
n:{
a0:function(a){var z=new V.hZ()
z.dZ(a)
return z}}},e7:{"^":"a;a,b,0c,0d",
gh5:function(a){return this.b},
w:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.ej(this.a.G(0,b))
w.a=H.c([],[V.bQ])
w.c=!1
C.a.h(this.c,w)
return w},
fS:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x){w=z[x]
if(w.aR(0,a))return w}return},
i:function(a){return this.b}},eg:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.fh(this.b,"\n","\\n")
y=H.fh(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eh:{"^":"a;a,b,0c",
i:function(a){return this.b}},iv:{"^":"a;0a,0b,0c",
G:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.e7(this,b)
z.c=H.c([],[V.ej])
this.a.X(0,b,z)}return z},
aZ:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.eh(this,a)
y=P.n
z.c=new H.aV(0,0,[y,y])
this.b.X(0,a,z)}return z},
hx:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.eg])
y=this.c
x=[P.A]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.h.b4(a,t)
r=y.fS(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cQ(w,0,null)
throw H.h(P.q("Untokenizable string [state: "+y.gh5(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cQ(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.eg(o==null?p.b:o,q,t)}++t}}}},ej:{"^":"dR;b,0c,0a",
i:function(a){return this.b.b+": "+this.cs(0)}}}],["","",,X,{"^":"",c_:{"^":"a;",$isat:1},fW:{"^":"cR;0a,0b,0c,0d,0e,0f,0r,0x",
gp:function(){var z=this.x
if(z==null){z=D.D()
this.x=z}return z},
aj:function(a){var z=this.x
if(!(z==null))z.t(a)},
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
v=C.e.ab(w.a*y)
if(typeof x!=="number")return H.p(x)
u=C.e.ab(w.b*x)
t=C.e.ab(w.c*y)
a.c=t
w=C.e.ab(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
if(this.b){z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
s=16640}else s=256
a.a.clear(s)},
n:{
cy:function(a,b,c,d,e,f,g){var z,y
z=new X.fW()
y=new V.aK(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.e3(0,0,1,1)
z.r=y
return z}}},fX:{"^":"a;0a,0b",
gp:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
W:function(a){var z
a.cy.bo(V.aX())
z=V.aX()
a.db.bo(z)},
b1:function(a){a.cy.aq()
a.db.aq()},
$isat:1,
$isc_:1},hA:{"^":"a;0a,0b,0c,0d,0e",
gp:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
aj:[function(a){var z
H.k(a,"$isl")
z=this.e
if(!(z==null))z.t(a)},function(){return this.aj(null)},"hI","$1","$0","gey",0,2,0],
W:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=a.cy
w=this.b
v=this.c
u=this.d
t=u-v
s=1/Math.tan(w*0.5)
x.bo(V.ar(-s/(z/y),0,0,0,0,s,0,0,0,0,u/t,-u*v/t,0,0,1,0))
z=$.dZ
if(z==null){z=V.dU(new V.ab(0,0,0),new V.G(0,1,0),new V.G(0,0,-1))
$.dZ=z
r=z}else r=z
z=this.a
if(z!=null){q=z.aJ(0,a,this)
if(q!=null)r=q.l(0,r)}a.db.bo(r)},
b1:function(a){a.cy.aq()
a.db.aq()},
$isat:1,
$isc_:1,
n:{
dY:function(a,b,c,d){var z,y,x,w
z=new X.hA()
z.b=1.0471975511965976
z.c=0.1
z.d=2000
if(null!=c){y=z.a
z.a=c
if(c!=null){x=c.gp()
x.toString
w=H.b(z.gey(),{func:1,ret:-1,args:[D.l]})
C.a.h(x.a,w)}x=new D.E("mover",y,z.a,z,[U.a7])
x.b=!0
z.aj(x)}x=z.b
if(!$.m.$2(x,b)){y=z.b
z.b=b
x=new D.E("fov",y,b,z,[P.v])
x.b=!0
z.aj(x)}x=z.c
if(!$.m.$2(x,d)){y=z.c
z.c=d
x=new D.E("near",y,d,z,[P.v])
x.b=!0
z.aj(x)}x=z.d
if(!$.m.$2(x,a)){y=z.d
z.d=a
x=new D.E("far",y,a,z,[P.v])
x.b=!0
z.aj(x)}return z}}},cR:{"^":"a;"}}],["","",,V,{"^":"",
kY:function(a){P.iu(C.x,new V.kZ(a))},
kZ:{"^":"u:37;a",
$1:function(a){H.k(a,"$isaZ")
P.dd(C.j.dJ(this.a.gfU(),2)+" fps")}},
i3:{"^":"a;0a,0b",
e_:function(a,b){var z,y,x,w,v,u,t
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
t=W.a1
W.T(z,"scroll",H.b(new V.i6(x),{func:1,ret:-1,args:[t]}),!1,t)},
fG:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.x(a,"$isf",[P.n],"$asf")
this.f6()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.hx(C.a.fY(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.w)(x),++v){u=x[v]
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
if(H.fg(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.i(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.k9(C.I,s,C.r,!1)
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
f6:function(){var z,y,x,w
if(this.b!=null)return
z=new V.iv()
y=P.n
z.a=new H.aV(0,0,[y,V.e7])
z.b=new H.aV(0,0,[y,V.eh])
z.c=z.G(0,"Start")
y=z.G(0,"Start").w(0,"Bold")
x=V.a0(new H.Z("*"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Bold").w(0,"Bold")
x=new V.bn()
w=[V.bQ]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a0(new H.Z("*"))
C.a.h(x.a,y)
y=z.G(0,"Bold").w(0,"BoldEnd")
x=V.a0(new H.Z("*"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Start").w(0,"Italic")
x=V.a0(new H.Z("_"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Italic").w(0,"Italic")
x=new V.bn()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a0(new H.Z("_"))
C.a.h(x.a,y)
y=z.G(0,"Italic").w(0,"ItalicEnd")
x=V.a0(new H.Z("_"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Start").w(0,"Code")
x=V.a0(new H.Z("`"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Code").w(0,"Code")
x=new V.bn()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a0(new H.Z("`"))
C.a.h(x.a,y)
y=z.G(0,"Code").w(0,"CodeEnd")
x=V.a0(new H.Z("`"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Start").w(0,"LinkHead")
x=V.a0(new H.Z("["))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"LinkHead").w(0,"LinkTail")
x=V.a0(new H.Z("|"))
C.a.h(y.a,x)
x=z.G(0,"LinkHead").w(0,"LinkEnd")
y=V.a0(new H.Z("]"))
C.a.h(x.a,y)
x.c=!0
x=z.G(0,"LinkHead").w(0,"LinkHead")
y=new V.bn()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a0(new H.Z("|]"))
C.a.h(y.a,x)
x=z.G(0,"LinkTail").w(0,"LinkEnd")
y=V.a0(new H.Z("]"))
C.a.h(x.a,y)
x.c=!0
x=z.G(0,"LinkTail").w(0,"LinkTail")
y=new V.bn()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a0(new H.Z("|]"))
C.a.h(y.a,x)
C.a.h(z.G(0,"Start").w(0,"Other").a,new V.fn())
x=z.G(0,"Other").w(0,"Other")
y=new V.bn()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a0(new H.Z("*_`["))
C.a.h(y.a,x)
x=z.G(0,"BoldEnd")
x.d=x.a.aZ("Bold")
x=z.G(0,"ItalicEnd")
x.d=x.a.aZ("Italic")
x=z.G(0,"CodeEnd")
x.d=x.a.aZ("Code")
x=z.G(0,"LinkEnd")
x.d=x.a.aZ("Link")
x=z.G(0,"Other")
x.d=x.a.aZ("Other")
this.b=z},
n:{
i4:function(a,b){var z=new V.i3()
z.e_(a,!0)
return z}}},
i6:{"^":"u:11;a",
$1:function(a){P.ee(C.l,new V.i5(this.a))}},
i5:{"^":"u:2;a",
$0:function(){var z,y,x
z=C.j.ab(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}}}],["","",,Q,{"^":"",
fc:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
z=V.i4("Test 019",!0)
y=W.cu(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
z.fG(H.c(["A test of the Material Lighting shader with an alpha texture. ","There are no mapped reflections, this is actually transparent."],[P.n]))
x=document.getElementById("testCanvas")
if(x==null)H.r(P.q("Failed to find an element with the identifier, testCanvas."))
w=E.is(x,!0,!0,!0,!1)
v=E.dB(null,!0,null,"",null,null)
u=F.cO()
F.bC(u,null,null,1,1,1,0,0,1)
F.bC(u,null,null,1,1,0,1,0,3)
F.bC(u,null,null,1,1,0,0,1,2)
F.bC(u,null,null,1,1,-1,0,0,0)
F.bC(u,null,null,1,1,0,-1,0,0)
F.bC(u,null,null,1,1,0,0,-1,3)
u.al()
v.sbs(0,u)
t=X.cy(!0,!0,!1,null,2000,null,0)
if(t.b){t.b=!1
z=new D.E("clearColor",!0,!1,t,[P.a4])
z.b=!0
t.aj(z)}z=w.f
s=z.a
r=s.createTexture()
s.bindTexture(34067,r)
s.texParameteri(34067,10242,10497)
s.texParameteri(34067,10243,10497)
s.texParameteri(34067,10241,9729)
s.texParameteri(34067,10240,9729)
s.bindTexture(34067,null)
q=new T.ec(0)
q.b=r
q.c=!1
q.d=0
q.e=D.D()
z.ay(q,r,"../resources/maskonaive/posx.jpg",34069,!1,!1)
z.ay(q,r,"../resources/maskonaive/negx.jpg",34070,!1,!1)
z.ay(q,r,"../resources/maskonaive/posy.jpg",34071,!1,!1)
z.ay(q,r,"../resources/maskonaive/negy.jpg",34072,!1,!1)
z.ay(q,r,"../resources/maskonaive/posz.jpg",34073,!1,!1)
z.ay(q,r,"../resources/maskonaive/negz.jpg",34074,!1,!1)
p=w.f.h1("../resources/AlphaWeave.png")
o=new O.hj()
z=O.cw(V.aB)
o.e=z
z.aK(o.gev(),o.gew())
z=new O.aW(o,"emission")
z.c=C.b
z.f=new V.X(0,0,0)
o.f=z
z=new O.aW(o,"ambient")
z.c=C.b
z.f=new V.X(0,0,0)
o.r=z
z=new O.aW(o,"diffuse")
z.c=C.b
z.f=new V.X(0,0,0)
o.x=z
z=new O.aW(o,"invDiffuse")
z.c=C.b
z.f=new V.X(0,0,0)
o.y=z
z=new O.hp(o,"specular")
z.c=C.b
z.f=new V.X(0,0,0)
z.ch=100
o.z=z
z=new O.hm(o,"bump")
z.c=C.b
o.Q=z
o.ch=null
z=new O.aW(o,"reflect")
z.c=C.b
z.f=new V.X(0,0,0)
o.cx=z
z=new O.ho(o,"refract")
z.c=C.b
z.f=new V.X(0,0,0)
z.ch=1
o.cy=z
z=new O.hl(o,"alpha")
z.c=C.b
z.f=1
o.db=z
z=new D.h6()
z.b3(D.V)
z.e=H.c([],[D.c1])
z.f=H.c([],[D.hC])
z.r=H.c([],[D.ia])
z.x=H.c([],[D.io])
z.y=H.c([],[D.ip])
z.z=H.c([],[D.iq])
z.Q=null
z.ch=null
z.cp(z.geu(),z.geO(),z.geQ())
o.dx=z
s=z.Q
if(s==null){s=D.D()
z.Q=s
z=s}else z=s
s={func:1,ret:-1,args:[D.l]}
n=H.b(o.geY(),s)
C.a.h(z.a,n)
n=o.dx
z=n.ch
if(z==null){z=D.D()
n.ch=z}n=H.b(o.gav(),s)
C.a.h(z.a,n)
o.dy=null
n=o.dx
z=U.dq(V.dU(new V.ab(0,0,0),new V.G(0,1,0),new V.G(1,-2,-3)))
m=new V.X(1,1,1)
l=new D.c1()
l.c=new V.X(1,1,1)
l.a=new V.G(0,0,1)
k=l.b
l.b=z
z=z.gp()
z.toString
j=H.b(l.ge3(),s)
C.a.h(z.a,j)
z=new D.E("mover",k,l.b,l,[U.a7])
z.b=!0
l.at(z)
if(!l.c.q(0,m)){k=l.c
l.c=m
z=new D.E("color",k,m,l,[V.X])
z.b=!0
l.at(z)}n.h(0,l)
z=o.r
z.sam(0,new V.X(0.5,0.5,0.5))
z=o.x
z.sam(0,new V.X(0.6,0.6,0.6))
o.r.scj(p)
o.x.scj(p)
o.db.scj(p)
i=new U.dD()
i.b3(U.a7)
i.aK(i.ges(),i.geP())
i.e=null
i.f=V.aX()
i.r=0
z=w.r
n=new U.iO()
l=U.cx()
l.scl(0,!0)
l.scb(6.283185307179586)
l.scd(0)
l.sa0(0,0)
l.scc(100)
l.sK(0)
l.sbY(0.5)
n.b=l
l=l.gp()
l.toString
j=H.b(n.gau(),s)
C.a.h(l.a,j)
l=U.cx()
l.scl(0,!0)
l.scb(6.283185307179586)
l.scd(0)
l.sa0(0,0)
l.scc(100)
l.sK(0)
l.sbY(0.5)
n.c=l
C.a.h(l.gp().a,j)
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
h=new X.as(!1,!1,!1)
k=n.d
n.d=h
l=[X.as]
j=new D.E("modifiers",k,h,n,l)
j.b=!0
n.I(j)
j=n.f
if(j!==!1){n.f=!1
j=new D.E("invertX",j,!1,n,[P.a4])
j.b=!0
n.I(j)}j=n.r
if(j!==!1){n.r=!1
j=new D.E("invertY",j,!1,n,[P.a4])
j.b=!0
n.I(j)}n.aN(z)
i.h(0,n)
z=w.r
n=new U.iN()
j=U.cx()
j.scl(0,!0)
j.scb(6.283185307179586)
j.scd(0)
j.sa0(0,0)
j.scc(100)
j.sK(0)
j.sbY(0.2)
n.b=j
j=j.gp()
j.toString
g=H.b(n.gau(),s)
C.a.h(j.a,g)
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
h=new X.as(!0,!1,!1)
k=n.c
n.c=h
j=new D.E("modifiers",k,h,n,l)
j.b=!0
n.I(j)
n.aN(z)
i.h(0,n)
z=w.r
n=new U.iP()
n.c=0.01
n.d=0
n.e=0
h=new X.as(!1,!1,!1)
n.b=h
l=new D.E("modifiers",null,h,n,l)
l.b=!0
n.I(l)
n.aN(z)
i.h(0,n)
i.h(0,U.dq(V.ar(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
f=X.dY(2000,1.0471975511965976,i,0.1)
e=new M.fC()
e.saO(null)
e.saW(0,null)
e.saX(null)
z=E.dB(null,!0,null,"",null,null)
u=F.cO()
n=u.a
l=new V.G(-1,-1,1)
l=l.u(0,Math.sqrt(l.A(l)))
d=n.b9(new V.bp(1,2,4,6),new V.aK(1,0,0,1),new V.ab(-1,-1,0),new V.O(0,1),l,null)
n=u.a
l=new V.G(1,-1,1)
l=l.u(0,Math.sqrt(l.A(l)))
c=n.b9(new V.bp(0,3,4,6),new V.aK(0,0,1,1),new V.ab(1,-1,0),new V.O(1,1),l,null)
n=u.a
l=new V.G(1,1,1)
l=l.u(0,Math.sqrt(l.A(l)))
b=n.b9(new V.bp(0,2,5,6),new V.aK(0,1,0,1),new V.ab(1,1,0),new V.O(1,0),l,null)
n=u.a
l=new V.G(-1,1,1)
l=l.u(0,Math.sqrt(l.A(l)))
a=n.b9(new V.bp(0,2,4,7),new V.aK(1,1,0,1),new V.ab(-1,1,0),new V.O(0,0),l,null)
u.d.fD(H.c([d,c,b,a],[F.aC]))
u.al()
z.sbs(0,u)
e.d=z
e.e=null
z=new O.i7()
z.b=1.0471975511965976
k=z.c
z.c=q
n=q.e
l=H.b(z.gav(),s)
C.a.h(n.a,l)
n=new D.E("boxTexture",k,z.c,z,[T.ec])
n.b=!0
z.O(n)
p=new V.X(1,1,1)
if(!J.S(z.d,p)){k=z.d
z.d=p
n=new D.E("boxColor",k,p,z,[V.X])
n.b=!0
z.O(n)}z.e=null
e.saX(z)
e.saW(0,t)
e.saO(f)
a0=new M.fP()
z=O.cw(E.aA)
a0.d=z
z.aK(a0.gez(),a0.geA())
a0.e=null
a0.f=null
a0.r=null
a0.x=null
a0.saO(null)
a0.saW(0,null)
a0.saX(null)
a0.saO(f)
a0.saX(o)
a0.saW(0,t)
a0.d.h(0,v)
z=M.au
n=H.c([e,a0],[z])
l=new M.fA()
l.b3(z)
l.e=!1
l.f=null
l.aK(l.geR(),l.geS())
l.bN(0,n)
z=w.d
if(z!==l){if(z!=null){z=z.gp()
z.toString
n=H.b(w.gcz(),s)
C.a.R(z.a,n)}w.d=l
z=l.gp()
z.toString
s=H.b(w.gcz(),s)
C.a.h(z.a,s)
w.e1()}V.kY(w)}},1]]
setupProgram(dart,0,0)
J.J=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dI.prototype
return J.dH.prototype}if(typeof a=="string")return J.cC.prototype
if(a==null)return J.dJ.prototype
if(typeof a=="boolean")return J.h1.prototype
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bO.prototype
return a}if(a instanceof P.a)return a
return J.cl(a)}
J.bW=function(a){if(typeof a=="string")return J.cC.prototype
if(a==null)return a
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bO.prototype
return a}if(a instanceof P.a)return a
return J.cl(a)}
J.d7=function(a){if(a==null)return a
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bO.prototype
return a}if(a instanceof P.a)return a
return J.cl(a)}
J.kG=function(a){if(typeof a=="number")return J.c6.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cW.prototype
return a}
J.ck=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bO.prototype
return a}if(a instanceof P.a)return a
return J.cl(a)}
J.S=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.J(a).q(a,b)}
J.fj=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kG(a).a7(a,b)}
J.fk=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kP(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bW(a).j(a,b)}
J.fl=function(a,b,c,d){return J.ck(a).cZ(a,b,c,d)}
J.co=function(a,b,c){return J.bW(a).fK(a,b,c)}
J.de=function(a,b){return J.d7(a).C(a,b)}
J.fm=function(a,b){return J.d7(a).J(a,b)}
J.aS=function(a){return J.J(a).gS(a)}
J.bK=function(a){return J.d7(a).gV(a)}
J.b9=function(a){return J.bW(a).gk(a)}
J.a5=function(a){return J.J(a).i(a)}
I.da=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.ct.prototype
C.y=J.o.prototype
C.a=J.aU.prototype
C.z=J.dH.prototype
C.e=J.dI.prototype
C.A=J.dJ.prototype
C.j=J.c6.prototype
C.h=J.cC.prototype
C.H=J.bO.prototype
C.J=H.hw.prototype
C.K=W.hx.prototype
C.p=J.hB.prototype
C.q=P.cM.prototype
C.m=J.cW.prototype
C.t=W.bA.prototype
C.u=W.j1.prototype
C.v=new P.hz()
C.w=new P.iR()
C.i=new P.jO()
C.b=new A.c0(0,"ColorSourceType.None")
C.f=new A.c0(1,"ColorSourceType.Solid")
C.c=new A.c0(2,"ColorSourceType.Texture2D")
C.d=new A.c0(3,"ColorSourceType.TextureCube")
C.l=new P.bd(0)
C.x=new P.bd(5e6)
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
C.I=H.c(I.da([0,0,65498,45055,65535,34815,65534,18431]),[P.A])
C.r=new P.iQ(!1)
$.aq=0
$.ba=null
$.dh=null
$.d0=!1
$.f9=null
$.f3=null
$.ff=null
$.cj=null
$.cm=null
$.d8=null
$.b3=null
$.bE=null
$.bF=null
$.d1=!1
$.N=C.i
$.dy=null
$.dx=null
$.dw=null
$.dv=null
$.m=V.hq()
$.i9="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.i8="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.dZ=null
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
I.$lazy(y,x,w)}})(["du","$get$du",function(){return H.f8("_$dart_dartClosure")},"cD","$get$cD",function(){return H.f8("_$dart_js")},"ek","$get$ek",function(){return H.av(H.cc({
toString:function(){return"$receiver$"}}))},"el","$get$el",function(){return H.av(H.cc({$method$:null,
toString:function(){return"$receiver$"}}))},"em","$get$em",function(){return H.av(H.cc(null))},"en","$get$en",function(){return H.av(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"er","$get$er",function(){return H.av(H.cc(void 0))},"es","$get$es",function(){return H.av(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"ep","$get$ep",function(){return H.av(H.eq(null))},"eo","$get$eo",function(){return H.av(function(){try{null.$method$}catch(z){return z.message}}())},"eu","$get$eu",function(){return H.av(H.eq(void 0))},"et","$get$et",function(){return H.av(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cY","$get$cY",function(){return P.j2()},"bG","$get$bG",function(){return[]},"eY","$get$eY",function(){return P.hP("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"ds","$get$ds",function(){return{}},"eF","$get$eF",function(){return Z.aj(0)},"eD","$get$eD",function(){return Z.aj(511)},"ap","$get$ap",function(){return Z.aj(1)},"aF","$get$aF",function(){return Z.aj(2)},"aE","$get$aE",function(){return Z.aj(4)},"aG","$get$aG",function(){return Z.aj(8)},"aH","$get$aH",function(){return Z.aj(16)},"by","$get$by",function(){return Z.aj(32)},"bz","$get$bz",function(){return Z.aj(64)},"eE","$get$eE",function(){return Z.aj(96)},"b1","$get$b1",function(){return Z.aj(128)},"aD","$get$aD",function(){return Z.aj(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.l]},{func:1,ret:-1,args:[D.l]},{func:1,ret:P.I},{func:1,ret:-1},{func:1,ret:-1,args:[W.an]},{func:1,ret:P.I,args:[F.ag]},{func:1,ret:-1,args:[P.n,,]},{func:1,ret:-1,args:[W.a1]},{func:1,ret:-1,args:[P.A,[P.d,E.aA]]},{func:1,ret:P.I,args:[D.l]},{func:1,ret:-1,args:[W.b_]},{func:1,ret:P.I,args:[W.a1]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.I,args:[,,]},{func:1,ret:P.n,args:[P.A]},{func:1,ret:P.I,args:[,]},{func:1,args:[,]},{func:1,ret:-1,args:[W.bk]},{func:1,ret:-1,args:[P.A,[P.d,D.V]]},{func:1,ret:P.v},{func:1,ret:-1,args:[P.A,[P.d,U.a7]]},{func:1,ret:-1,args:[P.A,[P.d,M.au]]},{func:1,ret:-1,args:[P.A,[P.d,V.aB]]},{func:1,ret:P.I,args:[{func:1,ret:-1}]},{func:1,ret:P.a4,args:[W.K]},{func:1,ret:W.a_,args:[W.K]},{func:1,args:[,P.n]},{func:1,args:[P.n]},{func:1,ret:P.I,args:[P.W]},{func:1,ret:P.I,args:[{func:1,ret:-1,args:[D.l]}]},{func:1,ret:-1,args:[P.a],opt:[P.ao]},{func:1,ret:-1,args:[W.bA]},{func:1,ret:P.a4,args:[P.v,P.v]},{func:1,ret:P.a4,args:[[P.d,D.V]]},{func:1,ret:P.I,args:[,],opt:[,]},{func:1,ret:P.I,args:[F.aC,P.v,P.v]},{func:1,ret:[P.aI,,],args:[,]},{func:1,ret:P.I,args:[P.aZ]},{func:1,ret:-1,args:[P.n,P.n]}]
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
if(x==y)H.l0(d||a)
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
Isolate.da=a.da
Isolate.d5=a.d5
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
if(typeof dartMainRunner==="function")dartMainRunner(Q.fc,[])
else Q.fc([])})})()
//# sourceMappingURL=test.dart.js.map
