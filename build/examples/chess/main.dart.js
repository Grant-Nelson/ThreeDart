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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isr)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
if(a1==="m"){processStatics(init.statics[b2]=b3.m,b4)
delete b3.m}else if(a2===43){w[g]=a1.substring(1)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dP"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dP"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dP(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dQ=function(){}
var dart=[["","",,H,{"^":"",n6:{"^":"a;a"}}],["","",,J,{"^":"",
L:function(a){return void 0},
dW:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cg:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dS==null){H.mr()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.d(P.fr("Return interceptor for "+H.i(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$df()]
if(v!=null)return v
v=H.mw(a)
if(v!=null)return v
if(typeof a=="function")return C.J
y=Object.getPrototypeOf(a)
if(y==null)return C.r
if(y===Object.prototype)return C.r
if(typeof w=="function"){Object.defineProperty(w,$.$get$df(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
r:{"^":"a;",
u:function(a,b){return a===b},
gX:function(a){return H.bL(a)},
i:["eB",function(a){return"Instance of '"+H.bi(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
ib:{"^":"r;",
i:function(a){return String(a)},
gX:function(a){return a?519018:218159},
$isa7:1},
ex:{"^":"r;",
u:function(a,b){return null==b},
i:function(a){return"null"},
gX:function(a){return 0},
$isE:1},
dg:{"^":"r;",
gX:function(a){return 0},
i:["eC",function(a){return String(a)}]},
iZ:{"^":"dg;"},
cN:{"^":"dg;"},
bG:{"^":"dg;",
i:function(a){var z=a[$.$get$eh()]
if(z==null)return this.eC(a)
return"JavaScript function for "+H.i(J.ad(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isdc:1},
b2:{"^":"r;$ti",
h:function(a,b){H.z(b,H.u(a,0))
if(!!a.fixed$length)H.o(P.ag("add"))
a.push(b)},
O:function(a,b){var z
if(!!a.fixed$length)H.o(P.ag("remove"))
for(z=0;z<a.length;++z)if(J.S(a[z],b)){a.splice(z,1)
return!0}return!1},
aW:function(a,b){var z,y
H.t(b,"$ise",[H.u(a,0)],"$ase")
if(!!a.fixed$length)H.o(P.ag("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.A)(b),++y)a.push(b[y])},
M:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.u(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.d(P.bz(a))}},
C:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.Y(z,y,H.i(a[y]))
return z.join(b)},
hW:function(a){return this.C(a,"")},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
c1:function(a,b,c){var z=a.length
if(b>z)throw H.d(P.ap(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.d(P.ap(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.u(a,0)])
return H.b(a.slice(b,c),[H.u(a,0)])},
gcO:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.d(H.i8())},
ey:function(a,b,c,d,e){var z,y,x,w
z=H.u(a,0)
H.t(d,"$ise",[z],"$ase")
if(!!a.immutable$list)H.o(P.ag("setRange"))
P.dr(b,c,a.length,null,null,null)
if(typeof c!=="number")return c.B()
if(typeof b!=="number")return H.k(b)
y=c-b
if(y===0)return
H.t(d,"$isf",[z],"$asf")
z=J.b9(d)
x=z.gk(d)
if(typeof x!=="number")return H.k(x)
if(e+y>x)throw H.d(H.i9())
if(e<b)for(w=y-1;w>=0;--w)a[b+w]=z.j(d,e+w)
else for(w=0;w<y;++w)a[b+w]=z.j(d,e+w)},
bo:function(a,b,c,d){return this.ey(a,b,c,d,0)},
av:function(a,b,c){var z
if(c>=a.length)return-1
for(z=c;z<a.length;++z)if(J.S(a[z],b))return z
return-1},
J:function(a,b){return this.av(a,b,0)},
b_:function(a,b){var z
for(z=0;z<a.length;++z)if(J.S(a[z],b))return!0
return!1},
i:function(a){return P.dd(a,"[","]")},
gZ:function(a){return new J.at(a,a.length,0,[H.u(a,0)])},
gX:function(a){return H.bL(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.o(P.ag("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.cl(b,"newLength",null))
if(b<0)throw H.d(P.ap(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.aH(a,b))
if(b>=a.length||b<0)throw H.d(H.aH(a,b))
return a[b]},
Y:function(a,b,c){H.W(b)
H.z(c,H.u(a,0))
if(!!a.immutable$list)H.o(P.ag("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.aH(a,b))
if(b>=a.length||b<0)throw H.d(H.aH(a,b))
a[b]=c},
p:function(a,b){var z,y
z=[H.u(a,0)]
H.t(b,"$isf",z,"$asf")
y=C.e.p(a.length,b.gk(b))
z=H.b([],z)
this.sk(z,y)
this.bo(z,0,a.length,a)
this.bo(z,a.length,y,b)
return z},
$ise:1,
$isf:1,
m:{
ia:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.cl(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.ap(a,0,4294967295,"length",null))
return J.eu(new Array(a),b)},
eu:function(a,b){return J.bF(H.b(a,[b]))},
bF:function(a){H.ch(a)
a.fixed$length=Array
return a}}},
n5:{"^":"b2;$ti"},
at:{"^":"a;a,b,c,0d,$ti",
gL:function(a){return this.d},
D:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.d(H.A(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c1:{"^":"r;",
cC:function(a,b){var z
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=C.e.gbT(b)
if(this.gbT(a)===z)return 0
if(this.gbT(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbT:function(a){return a===0?1/a<0:a<0},
iz:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.d(P.ag(""+a+".toInt()"))},
cL:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.d(P.ag(""+a+".floor()"))},
ao:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.ag(""+a+".round()"))},
hE:function(a,b,c){if(C.e.cC(b,c)>0)throw H.d(H.ar(b))
if(this.cC(a,b)<0)return b
if(this.cC(a,c)>0)return c
return a},
ep:function(a,b){var z
if(b>20)throw H.d(P.ap(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gbT(a))return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gX:function(a){return a&0x1FFFFFFF},
p:function(a,b){if(typeof b!=="number")throw H.d(H.ar(b))
return a+b},
ew:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
eE:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dA(a,b)},
a3:function(a,b){return(a|0)===a?a/b|0:this.dA(a,b)},
dA:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.d(P.ag("Result of truncating division is "+H.i(z)+": "+H.i(a)+" ~/ "+b))},
bz:function(a,b){var z
if(a>0)z=this.h4(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
h4:function(a,b){return b>31?0:a>>>b},
S:function(a,b){if(typeof b!=="number")throw H.d(H.ar(b))
return a<b},
b4:function(a,b){if(typeof b!=="number")throw H.d(H.ar(b))
return a>=b},
$isy:1,
$isa_:1},
ew:{"^":"c1;",$isC:1},
ev:{"^":"c1;"},
c2:{"^":"r;",
ba:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.aH(a,b))
if(b<0)throw H.d(H.aH(a,b))
if(b>=a.length)H.o(H.aH(a,b))
return a.charCodeAt(b)},
aP:function(a,b){if(b>=a.length)throw H.d(H.aH(a,b))
return a.charCodeAt(b)},
p:function(a,b){H.Q(b)
if(typeof b!=="string")throw H.d(P.cl(b,null,null))
return a+b},
b6:function(a,b,c){H.W(c)
if(c==null)c=a.length
if(b<0)throw H.d(P.cH(b,null,null))
if(b>c)throw H.d(P.cH(b,null,null))
if(c>a.length)throw H.d(P.cH(c,null,null))
return a.substring(b,c)},
c2:function(a,b){return this.b6(a,b,null)},
cW:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.aP(z,0)===133){x=J.ic(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.ba(z,w)===133?J.id(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
l:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.w)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
ib:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.l(c,z)+a},
af:function(a,b){return this.ib(a,b," ")},
av:function(a,b,c){var z
if(c>a.length)throw H.d(P.ap(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
J:function(a,b){return this.av(a,b,0)},
hY:function(a,b,c){var z
c=a.length
z=b.length
if(c+z>c)c-=z
return a.lastIndexOf(b,c)},
hX:function(a,b){return this.hY(a,b,null)},
hH:function(a,b,c){if(c>a.length)throw H.d(P.ap(c,0,a.length,null,null))
return H.hg(a,b,c)},
i:function(a){return a},
gX:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
j:function(a,b){if(b>=a.length||!1)throw H.d(H.aH(a,b))
return a[b]},
$iseN:1,
$ism:1,
m:{
ey:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
ic:function(a,b){var z,y
for(z=a.length;b<z;){y=C.i.aP(a,b)
if(y!==32&&y!==13&&!J.ey(y))break;++b}return b},
id:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.i.ba(a,z)
if(y!==32&&y!==13&&!J.ey(y))break}return b}}}}],["","",,H,{"^":"",
i8:function(){return new P.dw("No element")},
i9:function(){return new P.dw("Too few elements")},
a2:{"^":"kc;a",
gk:function(a){return this.a.length},
j:function(a,b){return C.i.ba(this.a,b)},
$asfs:function(){return[P.C]},
$asv:function(){return[P.C]},
$ase:function(){return[P.C]},
$asf:function(){return[P.C]}},
hQ:{"^":"e;"},
eF:{"^":"a;a,b,c,0d,$ti",
gL:function(a){return this.d},
D:function(){var z,y,x,w
z=this.a
y=J.b9(z)
x=y.gk(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.d(P.bz(z))
w=this.c
if(typeof x!=="number")return H.k(x)
if(w>=x){this.d=null
return!1}this.d=y.F(z,w);++this.c
return!0}},
iA:{"^":"e;a,b,$ti",
gZ:function(a){return new H.iB(J.bY(this.a),this.b,this.$ti)},
gk:function(a){return J.aI(this.a)},
F:function(a,b){return this.b.$1(J.e_(this.a,b))},
$ase:function(a,b){return[b]}},
iB:{"^":"de;0a,b,c,$ti",
D:function(){var z=this.b
if(z.D()){this.a=this.c.$1(z.gL(z))
return!0}this.a=null
return!1},
gL:function(a){return this.a},
$asde:function(a,b){return[b]}},
kq:{"^":"e;a,b,$ti",
gZ:function(a){return new H.kr(J.bY(this.a),this.b,this.$ti)}},
kr:{"^":"de;a,b,$ti",
D:function(){var z,y
for(z=this.a,y=this.b;z.D();)if(y.$1(z.gL(z)))return!0
return!1},
gL:function(a){var z=this.a
return z.gL(z)}},
cv:{"^":"a;$ti"},
fs:{"^":"a;$ti"},
kc:{"^":"cC+fs;"}}],["","",,H,{"^":"",
mm:function(a){return init.types[H.W(a)]},
mu:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.L(a).$isD},
i:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ad(a)
if(typeof z!=="string")throw H.d(H.ar(a))
return z},
bL:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
j8:function(a,b){var z,y
if(typeof a!=="string")H.o(H.ar(a))
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.c(z,3)
y=H.Q(z[3])
if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return},
j7:function(a){var z,y
if(typeof a!=="string")H.o(H.ar(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
z=parseFloat(a)
if(isNaN(z)){y=J.cZ(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return}return z},
bi:function(a){var z,y,x,w,v,u,t,s,r
z=J.L(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.A||!!J.L(a).$iscN){v=C.p(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.aP(w,0)===36)w=C.i.c2(w,1)
r=H.dU(H.ch(H.ba(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
eR:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
ja:function(a){var z,y,x,w
z=H.b([],[P.C])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.A)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.d(H.ar(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.e.bz(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.d(H.ar(w))}return H.eR(z)},
eS:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.d(H.ar(x))
if(x<0)throw H.d(H.ar(x))
if(x>65535)return H.ja(a)}return H.eR(a)},
j9:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.e.bz(z,10))>>>0,56320|z&1023)}throw H.d(P.ap(a,0,1114111,null,null))},
ae:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
j6:function(a){return a.b?H.ae(a).getUTCFullYear()+0:H.ae(a).getFullYear()+0},
j4:function(a){return a.b?H.ae(a).getUTCMonth()+1:H.ae(a).getMonth()+1},
j0:function(a){return a.b?H.ae(a).getUTCDate()+0:H.ae(a).getDate()+0},
j1:function(a){return a.b?H.ae(a).getUTCHours()+0:H.ae(a).getHours()+0},
j3:function(a){return a.b?H.ae(a).getUTCMinutes()+0:H.ae(a).getMinutes()+0},
j5:function(a){return a.b?H.ae(a).getUTCSeconds()+0:H.ae(a).getSeconds()+0},
j2:function(a){return a.b?H.ae(a).getUTCMilliseconds()+0:H.ae(a).getMilliseconds()+0},
k:function(a){throw H.d(H.ar(a))},
c:function(a,b){if(a==null)J.aI(a)
throw H.d(H.aH(a,b))},
aH:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aU(!0,b,"index",null)
z=H.W(J.aI(a))
if(!(b<0)){if(typeof z!=="number")return H.k(z)
y=b>=z}else y=!0
if(y)return P.R(b,a,"index",null,z)
return P.cH(b,"index",null)},
mf:function(a,b,c){if(a>c)return new P.cG(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cG(a,c,!0,b,"end","Invalid value")
return new P.aU(!0,b,"end",null)},
ar:function(a){return new P.aU(!0,a,null,null)},
ma:function(a){if(typeof a!=="number")throw H.d(H.ar(a))
return a},
d:function(a){var z
if(a==null)a=new P.dp()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hi})
z.name=""}else z.toString=H.hi
return z},
hi:function(){return J.ad(this.dartException)},
o:function(a){throw H.d(a)},
A:function(a){throw H.d(P.bz(a))},
ac:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.mG(a)
if(a==null)return
if(a instanceof H.d9)return z.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.bz(x,16)&8191)===10)switch(w){case 438:return z.$1(H.dh(H.i(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eM(H.i(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fa()
u=$.$get$fb()
t=$.$get$fc()
s=$.$get$fd()
r=$.$get$fh()
q=$.$get$fi()
p=$.$get$ff()
$.$get$fe()
o=$.$get$fk()
n=$.$get$fj()
m=v.ae(y)
if(m!=null)return z.$1(H.dh(H.Q(y),m))
else{m=u.ae(y)
if(m!=null){m.method="call"
return z.$1(H.dh(H.Q(y),m))}else{m=t.ae(y)
if(m==null){m=s.ae(y)
if(m==null){m=r.ae(y)
if(m==null){m=q.ae(y)
if(m==null){m=p.ae(y)
if(m==null){m=s.ae(y)
if(m==null){m=o.ae(y)
if(m==null){m=n.ae(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eM(H.Q(y),m))}}return z.$1(new H.kb(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eY()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aU(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eY()
return a},
bb:function(a){var z
if(a instanceof H.d9)return a.b
if(a==null)return new H.fM(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fM(a)},
mk:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.Y(0,a[y],a[x])}return b},
mt:function(a,b,c,d,e,f){H.j(a,"$isdc")
switch(H.W(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.n("Unsupported number of arguments for wrapped closure"))},
bt:function(a,b){var z
H.W(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mt)
a.$identity=z
return z},
hA:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.L(d).$isf){z.$reflectionInfo=d
x=H.jf(z).r}else x=d
w=e?Object.create(new H.jE().constructor.prototype):Object.create(new H.d0(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aJ
if(typeof u!=="number")return u.p()
$.aJ=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.eb(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.mm,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.e6:H.d1
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.d("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.eb(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hx:function(a,b,c,d){var z=H.d1
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
eb:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hz(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hx(y,!w,z,b)
if(y===0){w=$.aJ
if(typeof w!=="number")return w.p()
$.aJ=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.by
if(v==null){v=H.co("self")
$.by=v}return new Function(w+H.i(v)+";return "+u+"."+H.i(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aJ
if(typeof w!=="number")return w.p()
$.aJ=w+1
t+=w
w="return function("+t+"){return this."
v=$.by
if(v==null){v=H.co("self")
$.by=v}return new Function(w+H.i(v)+"."+H.i(z)+"("+t+");}")()},
hy:function(a,b,c,d){var z,y
z=H.d1
y=H.e6
switch(b?-1:a){case 0:throw H.d(H.jp("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hz:function(a,b){var z,y,x,w,v,u,t,s
z=$.by
if(z==null){z=H.co("self")
$.by=z}y=$.e5
if(y==null){y=H.co("receiver")
$.e5=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hy(w,!u,x,b)
if(w===1){z="return function(){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+");"
y=$.aJ
if(typeof y!=="number")return y.p()
$.aJ=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+", "+s+");"
y=$.aJ
if(typeof y!=="number")return y.p()
$.aJ=y+1
return new Function(z+y+"}")()},
dP:function(a,b,c,d,e,f,g){var z,y
z=J.bF(H.ch(b))
H.W(c)
y=!!J.L(d).$isf?J.bF(d):d
return H.hA(a,z,c,y,!!e,f,g)},
Q:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.aN(a,"String"))},
mA:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.aN(a,"num"))},
h3:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.aN(a,"bool"))},
W:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.aN(a,"int"))},
he:function(a,b){throw H.d(H.aN(a,H.Q(b).substring(3)))},
mC:function(a,b){var z=J.b9(b)
throw H.d(H.hw(a,z.b6(b,3,z.gk(b))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.L(a)[b])return a
H.he(a,b)},
h:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.L(a)[b]
else z=!0
if(z)return a
H.mC(a,b)},
ch:function(a){if(a==null)return a
if(!!J.L(a).$isf)return a
throw H.d(H.aN(a,"List"))},
mv:function(a,b){if(a==null)return a
if(!!J.L(a).$isf)return a
if(J.L(a)[b])return a
H.he(a,b)},
h4:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.W(z)]
else return a.$S()}return},
cf:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.h4(J.L(a))
if(z==null)return!1
y=H.ha(z,null,b,null)
return y},
l:function(a,b){var z,y
if(a==null)return a
if($.dL)return a
$.dL=!0
try{if(H.cf(a,b))return a
z=H.cj(b)
y=H.aN(a,z)
throw H.d(y)}finally{$.dL=!1}},
bv:function(a,b){if(a!=null&&!H.dO(a,b))H.o(H.aN(a,H.cj(b)))
return a},
fZ:function(a){var z
if(a instanceof H.q){z=H.h4(J.L(a))
if(z!=null)return H.cj(z)
return"Closure"}return H.bi(a)},
mF:function(a){throw H.d(new P.hH(H.Q(a)))},
h7:function(a){return init.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
ba:function(a){if(a==null)return
return a.$ti},
nV:function(a,b,c){return H.bx(a["$as"+H.i(c)],H.ba(b))},
bw:function(a,b,c,d){var z
H.Q(c)
H.W(d)
z=H.bx(a["$as"+H.i(c)],H.ba(b))
return z==null?null:z[d]},
as:function(a,b,c){var z
H.Q(b)
H.W(c)
z=H.bx(a["$as"+H.i(b)],H.ba(a))
return z==null?null:z[c]},
u:function(a,b){var z
H.W(b)
z=H.ba(a)
return z==null?null:z[b]},
cj:function(a){var z=H.bc(a,null)
return z},
bc:function(a,b){var z,y
H.t(b,"$isf",[P.m],"$asf")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dU(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.W(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.c(b,y)
return H.i(b[y])}if('func' in a)return H.lY(a,b)
if('futureOr' in a)return"FutureOr<"+H.bc("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lY:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.m]
H.t(b,"$isf",z,"$asf")
if("bounds" in a){y=a.bounds
if(b==null){b=H.b([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.c(b,r)
t=C.i.p(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.bc(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.bc(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.bc(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.bc(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.mj(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.Q(z[l])
n=n+m+H.bc(i[h],b)+(" "+H.i(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dU:function(a,b,c){var z,y,x,w,v,u
H.t(c,"$isf",[P.m],"$asf")
if(a==null)return""
z=new P.cc("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.bc(u,c)}v="<"+z.i(0)+">"
return v},
bx:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
b_:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.ba(a)
y=J.L(a)
if(y[b]==null)return!1
return H.h1(H.bx(y[d],z),null,c,null)},
t:function(a,b,c,d){var z,y
H.Q(b)
H.ch(c)
H.Q(d)
if(a==null)return a
z=H.b_(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dU(c,0,null)
throw H.d(H.aN(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
h1:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aC(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aC(a[y],b,c[y],d))return!1
return!0},
nT:function(a,b,c){return a.apply(b,H.bx(J.L(b)["$as"+H.i(c)],H.ba(b)))},
hb:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="E"||a===-1||a===-2||H.hb(z)}return!1},
dO:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="E"||b===-1||b===-2||H.hb(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dO(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cf(a,b)}y=J.L(a).constructor
x=H.ba(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.aC(y,null,b,null)
return z},
z:function(a,b){if(a!=null&&!H.dO(a,b))throw H.d(H.aN(a,H.cj(b)))
return a},
aC:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aC(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="E")return!0
if('func' in c)return H.ha(a,b,c,d)
if('func' in a)return c.builtin$cls==="dc"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aC("type" in a?a.type:null,b,x,d)
else if(H.aC(a,b,x,d))return!0
else{if(!('$is'+"an" in y.prototype))return!1
w=y.prototype["$as"+"an"]
v=H.bx(w,z?a.slice(1):null)
return H.aC(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cj(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.h1(H.bx(r,z),b,u,d)},
ha:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.aC(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.aC(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.aC(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.aC(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.mz(m,b,l,d)},
mz:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aC(c[w],d,a[w],b))return!1}return!0},
nU:function(a,b,c){Object.defineProperty(a,H.Q(b),{value:c,enumerable:false,writable:true,configurable:true})},
mw:function(a){var z,y,x,w,v,u
z=H.Q($.h9.$1(a))
y=$.cT[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cV[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.Q($.h0.$2(a,z))
if(z!=null){y=$.cT[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cV[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cW(x)
$.cT[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cV[z]=x
return x}if(v==="-"){u=H.cW(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.hd(a,x)
if(v==="*")throw H.d(P.fr(z))
if(init.leafTags[z]===true){u=H.cW(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.hd(a,x)},
hd:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dW(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cW:function(a){return J.dW(a,!1,null,!!a.$isD)},
my:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cW(z)
else return J.dW(z,c,null,null)},
mr:function(){if(!0===$.dS)return
$.dS=!0
H.ms()},
ms:function(){var z,y,x,w,v,u,t,s
$.cT=Object.create(null)
$.cV=Object.create(null)
H.mn()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hf.$1(v)
if(u!=null){t=H.my(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mn:function(){var z,y,x,w,v,u,t
z=C.G()
z=H.bs(C.D,H.bs(C.I,H.bs(C.o,H.bs(C.o,H.bs(C.H,H.bs(C.E,H.bs(C.F(C.p),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.h9=new H.mo(v)
$.h0=new H.mp(u)
$.hf=new H.mq(t)},
bs:function(a,b){return a(b)||b},
hg:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hh:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
je:{"^":"a;a,b,c,d,e,f,r,0x",m:{
jf:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bF(z)
y=z[0]
x=z[1]
return new H.je(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
k_:{"^":"a;a,b,c,d,e,f",
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
m:{
aM:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.b([],[P.m])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.k_(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cM:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fg:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iT:{"^":"a0;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.i(this.a)
return"NullError: method not found: '"+z+"' on null"},
m:{
eM:function(a,b){return new H.iT(a,b==null?null:b.method)}}},
ih:{"^":"a0;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.i(this.a)+")"},
m:{
dh:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.ih(a,y,z?null:b.receiver)}}},
kb:{"^":"a0;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
d9:{"^":"a;a,b"},
mG:{"^":"q:15;a",
$1:function(a){if(!!J.L(a).$isa0)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fM:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaa:1},
q:{"^":"a;",
i:function(a){return"Closure '"+H.bi(this).trim()+"'"},
ges:function(){return this},
$isdc:1,
ges:function(){return this}},
f1:{"^":"q;"},
jE:{"^":"f1;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
d0:{"^":"f1;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.d0))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gX:function(a){var z,y
z=this.c
if(z==null)y=H.bL(this.a)
else y=typeof z!=="object"?J.bd(z):H.bL(z)
return(y^H.bL(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.bi(z)+"'")},
m:{
d1:function(a){return a.a},
e6:function(a){return a.c},
co:function(a){var z,y,x,w,v
z=new H.d0("self","target","receiver","name")
y=J.bF(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
k0:{"^":"a0;a",
i:function(a){return this.a},
m:{
aN:function(a,b){return new H.k0("TypeError: "+H.i(P.cu(a))+": type '"+H.fZ(a)+"' is not a subtype of type '"+b+"'")}}},
hv:{"^":"a0;a",
i:function(a){return this.a},
m:{
hw:function(a,b){return new H.hv("CastError: "+H.i(P.cu(a))+": type '"+H.fZ(a)+"' is not a subtype of type '"+b+"'")}}},
jo:{"^":"a0;a",
i:function(a){return"RuntimeError: "+H.i(this.a)},
m:{
jp:function(a){return new H.jo(a)}}},
aX:{"^":"iy;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gaK:function(a){return new H.eE(this,[H.u(this,0)])},
dN:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.dg(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.dg(y,b)}else return this.hU(b)},
hU:function(a){var z=this.d
if(z==null)return!1
return this.cM(this.cc(z,J.bd(a)&0x3ffffff),a)>=0},
aW:function(a,b){J.e0(H.t(b,"$isY",this.$ti,"$asY"),new H.ig(this))},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.br(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.br(w,b)
x=y==null?null:y.b
return x}else return this.hV(b)},
hV:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cc(z,J.bd(a)&0x3ffffff)
x=this.cM(y,a)
if(x<0)return
return y[x].b},
Y:function(a,b,c){var z,y,x,w,v,u
H.z(b,H.u(this,0))
H.z(c,H.u(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.cf()
this.b=z}this.d8(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.cf()
this.c=y}this.d8(y,b,c)}else{x=this.d
if(x==null){x=this.cf()
this.d=x}w=J.bd(b)&0x3ffffff
v=this.cc(x,w)
if(v==null)this.co(x,w,[this.cg(b,c)])
else{u=this.cM(v,b)
if(u>=0)v[u].b=c
else v.push(this.cg(b,c))}}},
M:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.d(P.bz(this))
z=z.c}},
d8:function(a,b,c){var z
H.z(b,H.u(this,0))
H.z(c,H.u(this,1))
z=this.br(a,b)
if(z==null)this.co(a,b,this.cg(b,c))
else z.b=c},
fk:function(){this.r=this.r+1&67108863},
cg:function(a,b){var z,y
z=new H.iq(H.z(a,H.u(this,0)),H.z(b,H.u(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fk()
return z},
cM:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.S(a[y].a,b))return y
return-1},
i:function(a){return P.eH(this)},
br:function(a,b){return a[b]},
cc:function(a,b){return a[b]},
co:function(a,b,c){a[b]=c},
fc:function(a,b){delete a[b]},
dg:function(a,b){return this.br(a,b)!=null},
cf:function(){var z=Object.create(null)
this.co(z,"<non-identifier-key>",z)
this.fc(z,"<non-identifier-key>")
return z},
$iseD:1},
ig:{"^":"q;a",
$2:function(a,b){var z=this.a
z.Y(0,H.z(a,H.u(z,0)),H.z(b,H.u(z,1)))},
$S:function(){var z=this.a
return{func:1,ret:P.E,args:[H.u(z,0),H.u(z,1)]}}},
iq:{"^":"a;a,b,0c,0d"},
eE:{"^":"hQ;a,$ti",
gk:function(a){return this.a.a},
gZ:function(a){var z,y
z=this.a
y=new H.ir(z,z.r,this.$ti)
y.c=z.e
return y}},
ir:{"^":"a;a,b,0c,0d,$ti",
gL:function(a){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.bz(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
mo:{"^":"q:15;a",
$1:function(a){return this.a(a)}},
mp:{"^":"q:31;a",
$2:function(a,b){return this.a(a,b)}},
mq:{"^":"q:32;a",
$1:function(a){return this.a(H.Q(a))}},
ie:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
gfo:function(){var z=this.c
if(z!=null)return z
z=this.b
z=H.ez(this.a,z.multiline,!z.ignoreCase,!0)
this.c=z
return z},
hQ:function(a){var z=this.b.exec(a)
if(z==null)return
return new H.fF(this,z)},
ff:function(a,b){var z,y
z=this.gfo()
z.lastIndex=b
y=z.exec(a)
if(y==null)return
return new H.fF(this,y)},
$iseN:1,
m:{
ez:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.d(P.da("Illegal RegExp pattern ("+String(w)+")",a,null))}}},
fF:{"^":"a;a,b",
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.c(z,b)
return z[b]}},
kt:{"^":"a;a,b,c,0d",
gL:function(a){return this.d},
D:function(){var z,y,x,w
z=this.b
if(z==null)return!1
y=this.c
if(y<=z.length){x=this.a.ff(z,y)
if(x!=null){this.d=x
z=x.b
y=z.index
w=y+z[0].length
this.c=y===w?w+1:w
return!0}}this.d=null
this.b=null
return!1}}}],["","",,H,{"^":"",
mj:function(a){return J.eu(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
mB:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bU:function(a){return a},
b8:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.aH(b,a))},
lX:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.d(H.mf(a,b,c))
return b},
iQ:{"^":"r;",$isnE:1,"%":"DataView;ArrayBufferView;dn|fG|fH|iP|fI|fJ|b5"},
dn:{"^":"iQ;",
gk:function(a){return a.length},
$isD:1,
$asD:I.dQ},
iP:{"^":"fH;",
j:function(a,b){H.b8(b,a,a.length)
return a[b]},
$ascv:function(){return[P.y]},
$asv:function(){return[P.y]},
$ise:1,
$ase:function(){return[P.y]},
$isf:1,
$asf:function(){return[P.y]},
"%":"Float32Array|Float64Array"},
b5:{"^":"fJ;",
$ascv:function(){return[P.C]},
$asv:function(){return[P.C]},
$ise:1,
$ase:function(){return[P.C]},
$isf:1,
$asf:function(){return[P.C]}},
ne:{"^":"b5;",
j:function(a,b){H.b8(b,a,a.length)
return a[b]},
"%":"Int16Array"},
nf:{"^":"b5;",
j:function(a,b){H.b8(b,a,a.length)
return a[b]},
"%":"Int32Array"},
ng:{"^":"b5;",
j:function(a,b){H.b8(b,a,a.length)
return a[b]},
"%":"Int8Array"},
nh:{"^":"b5;",
j:function(a,b){H.b8(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
ni:{"^":"b5;",
j:function(a,b){H.b8(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
nj:{"^":"b5;",
gk:function(a){return a.length},
j:function(a,b){H.b8(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
iR:{"^":"b5;",
gk:function(a){return a.length},
j:function(a,b){H.b8(b,a,a.length)
return a[b]},
c1:function(a,b,c){return new Uint8Array(a.subarray(b,H.lX(b,c,a.length)))},
"%":";Uint8Array"},
fG:{"^":"dn+v;"},
fH:{"^":"fG+cv;"},
fI:{"^":"dn+v;"},
fJ:{"^":"fI+cv;"}}],["","",,P,{"^":"",
kx:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.m7()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bt(new P.kz(z),1)).observe(y,{childList:true})
return new P.ky(z,y,x)}else if(self.setImmediate!=null)return P.m8()
return P.m9()},
nI:[function(a){self.scheduleImmediate(H.bt(new P.kA(H.l(a,{func:1,ret:-1})),0))},"$1","m7",4,0,10],
nJ:[function(a){self.setImmediate(H.bt(new P.kB(H.l(a,{func:1,ret:-1})),0))},"$1","m8",4,0,10],
nK:[function(a){P.dC(C.l,H.l(a,{func:1,ret:-1}))},"$1","m9",4,0,10],
dC:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.e.a3(a.a,1000)
return P.lA(z<0?0:z,b)},
f5:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.bj]})
z=C.e.a3(a.a,1000)
return P.lB(z<0?0:z,b)},
al:function(a){return new P.fy(new P.lx(new P.ah(0,$.K,[a]),[a]),!1,[a])},
ak:function(a,b){H.l(a,{func:1,ret:-1,args:[P.C,,]})
H.j(b,"$isfy")
a.$2(0,null)
b.b=!0
return b.a.a},
a6:function(a,b){P.lU(a,H.l(b,{func:1,ret:-1,args:[P.C,,]}))},
aj:function(a,b){H.j(b,"$isd8").aG(0,a)},
ai:function(a,b){H.j(b,"$isd8").bb(H.ac(a),H.bb(a))},
lU:function(a,b){var z,y,x,w,v
H.l(b,{func:1,ret:-1,args:[P.C,,]})
z=new P.lV(b)
y=new P.lW(b)
x=J.L(a)
if(!!x.$isah)a.cq(H.l(z,{func:1,ret:{futureOr:1},args:[,]}),y,null)
else{w={func:1,ret:{futureOr:1},args:[,]}
if(!!x.$isan)a.bW(H.l(z,w),y,null)
else{v=new P.ah(0,$.K,[null])
H.z(a,null)
v.a=4
v.c=a
v.cq(H.l(z,w),null,null)}}},
am:function(a){var z=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(y){e=y
d=c}}}(a,1)
return $.K.el(new P.m6(z),P.E,P.C,null)},
m2:function(a,b){if(H.cf(a,{func:1,args:[P.a,P.aa]}))return b.el(a,null,P.a,P.aa)
if(H.cf(a,{func:1,args:[P.a]}))return H.l(a,{func:1,ret:null,args:[P.a]})
throw H.d(P.cl(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
m_:function(){var z,y
for(;z=$.bq,z!=null;){$.bW=null
y=z.b
$.bq=y
if(y==null)$.bV=null
z.a.$0()}},
nS:[function(){$.dM=!0
try{P.m_()}finally{$.bW=null
$.dM=!1
if($.bq!=null)$.$get$dI().$1(P.h2())}},"$0","h2",0,0,2],
fW:function(a){var z=new P.fz(H.l(a,{func:1,ret:-1}))
if($.bq==null){$.bV=z
$.bq=z
if(!$.dM)$.$get$dI().$1(P.h2())}else{$.bV.b=z
$.bV=z}},
m5:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.bq
if(z==null){P.fW(a)
$.bW=$.bV
return}y=new P.fz(a)
x=$.bW
if(x==null){y.b=z
$.bW=y
$.bq=y}else{y.b=x.b
x.b=y
$.bW=y
if(y.b==null)$.bV=y}},
dY:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.K
if(C.j===y){P.br(null,null,C.j,a)
return}y.toString
P.br(null,null,y,H.l(y.cv(a),z))},
nu:function(a,b){return new P.lu(H.t(a,"$iscb",[b],"$ascb"),!1,[b])},
dB:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.K
if(y===C.j){y.toString
return P.dC(a,b)}return P.dC(a,H.l(y.cv(b),z))},
jX:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bj]}
H.l(b,z)
y=$.K
if(y===C.j){y.toString
return P.f5(a,b)}x=y.dH(b,P.bj)
$.K.toString
return P.f5(a,H.l(x,z))},
cR:function(a,b,c,d,e){var z={}
z.a=d
P.m5(new P.m3(z,e))},
fU:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.K
if(y===c)return d.$0()
$.K=c
z=y
try{y=d.$0()
return y}finally{$.K=z}},
fV:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.K
if(y===c)return d.$1(e)
$.K=c
z=y
try{y=d.$1(e)
return y}finally{$.K=z}},
m4:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.K
if(y===c)return d.$2(e,f)
$.K=c
z=y
try{y=d.$2(e,f)
return y}finally{$.K=z}},
br:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.cv(d):c.hC(d,-1)
P.fW(d)},
kz:{"^":"q:16;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
ky:{"^":"q:28;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kA:{"^":"q:1;a",
$0:function(){this.a.$0()}},
kB:{"^":"q:1;a",
$0:function(){this.a.$0()}},
fP:{"^":"a;a,0b,c",
eW:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bt(new P.lD(this,b),0),a)
else throw H.d(P.ag("`setTimeout()` not found."))},
eX:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bt(new P.lC(this,a,Date.now(),b),0),a)
else throw H.d(P.ag("Periodic timer."))},
$isbj:1,
m:{
lA:function(a,b){var z=new P.fP(!0,0)
z.eW(a,b)
return z},
lB:function(a,b){var z=new P.fP(!1,0)
z.eX(a,b)
return z}}},
lD:{"^":"q:2;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lC:{"^":"q:1;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.e.eE(w,x)}z.c=y
this.d.$1(z)}},
fy:{"^":"a;a,b,$ti",
aG:function(a,b){var z
H.bv(b,{futureOr:1,type:H.u(this,0)})
if(this.b)this.a.aG(0,b)
else{z=H.b_(b,"$isan",this.$ti,"$asan")
if(z){z=this.a
b.bW(z.ghF(z),z.gdM(),-1)}else P.dY(new P.kv(this,b))}},
bb:function(a,b){if(this.b)this.a.bb(a,b)
else P.dY(new P.ku(this,a,b))},
$isd8:1},
kv:{"^":"q:1;a,b",
$0:function(){this.a.a.aG(0,this.b)}},
ku:{"^":"q:1;a,b,c",
$0:function(){this.a.a.bb(this.b,this.c)}},
lV:{"^":"q:30;a",
$1:function(a){return this.a.$2(0,a)}},
lW:{"^":"q:35;a",
$2:function(a,b){this.a.$2(1,new H.d9(a,H.j(b,"$isaa")))}},
m6:{"^":"q:38;a",
$2:function(a,b){this.a(H.W(a),b)}},
fA:{"^":"a;$ti",
bb:[function(a,b){H.j(b,"$isaa")
if(a==null)a=new P.dp()
if(this.a.a!==0)throw H.d(P.dx("Future already completed"))
$.K.toString
this.ar(a,b)},function(a){return this.bb(a,null)},"hG","$2","$1","gdM",4,2,21],
$isd8:1},
kw:{"^":"fA;a,$ti",
aG:function(a,b){var z
H.bv(b,{futureOr:1,type:H.u(this,0)})
z=this.a
if(z.a!==0)throw H.d(P.dx("Future already completed"))
z.f_(b)},
ar:function(a,b){this.a.f0(a,b)}},
lx:{"^":"fA;a,$ti",
aG:[function(a,b){var z
H.bv(b,{futureOr:1,type:H.u(this,0)})
z=this.a
if(z.a!==0)throw H.d(P.dx("Future already completed"))
z.c8(b)},function(a){return this.aG(a,null)},"jh","$1","$0","ghF",1,2,41],
ar:function(a,b){this.a.ar(a,b)}},
bo:{"^":"a;0a,b,c,d,e,$ti",
i2:function(a){if(this.c!==6)return!0
return this.b.b.cU(H.l(this.d,{func:1,ret:P.a7,args:[P.a]}),a.a,P.a7,P.a)},
hT:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.u(this,1)}
w=this.b.b
if(H.cf(z,{func:1,args:[P.a,P.aa]}))return H.bv(w.iv(z,a.a,a.b,null,y,P.aa),x)
else return H.bv(w.cU(H.l(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
ah:{"^":"a;dz:a<,b,0h0:c<,$ti",
bW:function(a,b,c){var z,y
z=H.u(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.K
if(y!==C.j){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.m2(b,y)}return this.cq(a,b,c)},
ag:function(a,b){return this.bW(a,null,b)},
cq:function(a,b,c){var z,y,x
z=H.u(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=new P.ah(0,$.K,[c])
x=b==null?1:3
this.d9(new P.bo(y,x,a,b,[z,c]))
return y},
d9:function(a){var z,y
z=this.a
if(z<=1){a.a=H.j(this.c,"$isbo")
this.c=a}else{if(z===2){y=H.j(this.c,"$isah")
z=y.a
if(z<4){y.d9(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.br(null,null,z,H.l(new P.kP(this,a),{func:1,ret:-1}))}},
dq:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.j(this.c,"$isbo")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.j(this.c,"$isah")
y=u.a
if(y<4){u.dq(a)
return}this.a=y
this.c=u.c}z.a=this.bw(a)
y=this.b
y.toString
P.br(null,null,y,H.l(new P.kW(z,this),{func:1,ret:-1}))}},
bv:function(){var z=H.j(this.c,"$isbo")
this.c=null
return this.bw(z)},
bw:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
c8:function(a){var z,y,x,w
z=H.u(this,0)
H.bv(a,{futureOr:1,type:z})
y=this.$ti
x=H.b_(a,"$isan",y,"$asan")
if(x){z=H.b_(a,"$isah",y,null)
if(z)P.cO(a,this)
else P.fC(a,this)}else{w=this.bv()
H.z(a,z)
this.a=4
this.c=a
P.bp(this,w)}},
ar:[function(a,b){var z
H.j(b,"$isaa")
z=this.bv()
this.a=8
this.c=new P.au(a,b)
P.bp(this,z)},function(a){return this.ar(a,null)},"iG","$2","$1","gf8",4,2,21],
f_:function(a){var z
H.bv(a,{futureOr:1,type:H.u(this,0)})
z=H.b_(a,"$isan",this.$ti,"$asan")
if(z){this.f6(a)
return}this.a=1
z=this.b
z.toString
P.br(null,null,z,H.l(new P.kR(this,a),{func:1,ret:-1}))},
f6:function(a){var z=this.$ti
H.t(a,"$isan",z,"$asan")
z=H.b_(a,"$isah",z,null)
if(z){if(a.a===8){this.a=1
z=this.b
z.toString
P.br(null,null,z,H.l(new P.kV(this,a),{func:1,ret:-1}))}else P.cO(a,this)
return}P.fC(a,this)},
f0:function(a,b){var z
this.a=1
z=this.b
z.toString
P.br(null,null,z,H.l(new P.kQ(this,a,b),{func:1,ret:-1}))},
$isan:1,
m:{
fC:function(a,b){var z,y,x
b.a=1
try{a.bW(new P.kS(b),new P.kT(b),null)}catch(x){z=H.ac(x)
y=H.bb(x)
P.dY(new P.kU(b,z,y))}},
cO:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.j(a.c,"$isah")
if(z>=4){y=b.bv()
b.a=a.a
b.c=a.c
P.bp(b,y)}else{y=H.j(b.c,"$isbo")
b.a=2
b.c=a
a.dq(y)}},
bp:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.j(y.c,"$isau")
y=y.b
u=v.a
t=v.b
y.toString
P.cR(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bp(z.a,b)}y=z.a
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
if(p){H.j(r,"$isau")
y=y.b
u=r.a
t=r.b
y.toString
P.cR(null,null,y,u,t)
return}o=$.K
if(o==null?q!=null:o!==q)$.K=q
else o=null
y=b.c
if(y===8)new P.kZ(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kY(x,b,r).$0()}else if((y&2)!==0)new P.kX(z,x,b).$0()
if(o!=null)$.K=o
y=x.b
if(!!J.L(y).$isan){if(y.a>=4){n=H.j(t.c,"$isbo")
t.c=null
b=t.bw(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.cO(y,t)
return}}m=b.b
n=H.j(m.c,"$isbo")
m.c=null
b=m.bw(n)
y=x.a
u=x.b
if(!y){H.z(u,H.u(m,0))
m.a=4
m.c=u}else{H.j(u,"$isau")
m.a=8
m.c=u}z.a=m
y=m}}}},
kP:{"^":"q:1;a,b",
$0:function(){P.bp(this.a,this.b)}},
kW:{"^":"q:1;a,b",
$0:function(){P.bp(this.b,this.a.a)}},
kS:{"^":"q:16;a",
$1:function(a){var z=this.a
z.a=0
z.c8(a)}},
kT:{"^":"q:42;a",
$2:function(a,b){this.a.ar(a,H.j(b,"$isaa"))},
$1:function(a){return this.$2(a,null)}},
kU:{"^":"q:1;a,b,c",
$0:function(){this.a.ar(this.b,this.c)}},
kR:{"^":"q:1;a,b",
$0:function(){var z,y,x
z=this.a
y=H.z(this.b,H.u(z,0))
x=z.bv()
z.a=4
z.c=y
P.bp(z,x)}},
kV:{"^":"q:1;a,b",
$0:function(){P.cO(this.b,this.a)}},
kQ:{"^":"q:1;a,b,c",
$0:function(){this.a.ar(this.b,this.c)}},
kZ:{"^":"q:2;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.en(H.l(w.d,{func:1}),null)}catch(v){y=H.ac(v)
x=H.bb(v)
if(this.d){w=H.j(this.a.a.c,"$isau").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.j(this.a.a.c,"$isau")
else u.b=new P.au(y,x)
u.a=!0
return}if(!!J.L(z).$isan){if(z instanceof P.ah&&z.gdz()>=4){if(z.gdz()===8){w=this.b
w.b=H.j(z.gh0(),"$isau")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ag(new P.l_(t),null)
w.a=!1}}},
l_:{"^":"q:44;a",
$1:function(a){return this.a}},
kY:{"^":"q:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.u(x,0)
v=H.z(this.c,w)
u=H.u(x,1)
this.a.b=x.b.b.cU(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ac(t)
y=H.bb(t)
x=this.a
x.b=new P.au(z,y)
x.a=!0}}},
kX:{"^":"q:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.j(this.a.a.c,"$isau")
w=this.c
if(w.i2(z)&&w.e!=null){v=this.b
v.b=w.hT(z)
v.a=!1}}catch(u){y=H.ac(u)
x=H.bb(u)
w=H.j(this.a.a.c,"$isau")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.au(y,x)
s.a=!0}}},
fz:{"^":"a;a,0b"},
cb:{"^":"a;$ti",
gk:function(a){var z,y
z={}
y=new P.ah(0,$.K,[P.C])
z.a=0
this.i0(new P.jH(z,this),!0,new P.jI(z,y),y.gf8())
return y}},
jH:{"^":"q;a,b",
$1:function(a){H.z(a,H.as(this.b,"cb",0));++this.a.a},
$S:function(){return{func:1,ret:P.E,args:[H.as(this.b,"cb",0)]}}},
jI:{"^":"q:1;a,b",
$0:function(){this.b.c8(this.a.a)}},
f_:{"^":"a;$ti"},
jG:{"^":"a;"},
lu:{"^":"a;0a,b,c,$ti"},
bj:{"^":"a;"},
au:{"^":"a;a,b",
i:function(a){return H.i(this.a)},
$isa0:1},
lJ:{"^":"a;",$isnH:1},
m3:{"^":"q:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dp()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.d(z)
x=H.d(z)
x.stack=y.i(0)
throw x}},
lk:{"^":"lJ;",
iw:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.j===$.K){a.$0()
return}P.fU(null,null,this,a,-1)}catch(x){z=H.ac(x)
y=H.bb(x)
P.cR(null,null,this,z,H.j(y,"$isaa"))}},
ix:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.j===$.K){a.$1(b)
return}P.fV(null,null,this,a,b,-1,c)}catch(x){z=H.ac(x)
y=H.bb(x)
P.cR(null,null,this,z,H.j(y,"$isaa"))}},
hC:function(a,b){return new P.lm(this,H.l(a,{func:1,ret:b}),b)},
cv:function(a){return new P.ll(this,H.l(a,{func:1,ret:-1}))},
dH:function(a,b){return new P.ln(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
j:function(a,b){return},
en:function(a,b){H.l(a,{func:1,ret:b})
if($.K===C.j)return a.$0()
return P.fU(null,null,this,a,b)},
cU:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.K===C.j)return a.$1(b)
return P.fV(null,null,this,a,b,c,d)},
iv:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.K===C.j)return a.$2(b,c)
return P.m4(null,null,this,a,b,c,d,e,f)},
el:function(a,b,c,d){return H.l(a,{func:1,ret:b,args:[c,d]})}},
lm:{"^":"q;a,b,c",
$0:function(){return this.a.en(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
ll:{"^":"q:2;a,b",
$0:function(){return this.a.iw(this.b)}},
ln:{"^":"q;a,b,c",
$1:function(a){var z=this.c
return this.a.ix(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
it:function(a,b,c){H.ch(a)
return H.t(H.mk(a,new H.aX(0,0,[b,c])),"$iseD",[b,c],"$aseD")},
is:function(a,b){return new H.aX(0,0,[a,b])},
iu:function(a,b,c,d){return new P.l6(0,0,[d])},
i7:function(a,b,c){var z,y
if(P.dN(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bX()
C.a.h(y,a)
try{P.lZ(a,z)}finally{if(0>=y.length)return H.c(y,-1)
y.pop()}y=P.f0(b,H.mv(z,"$ise"),", ")+c
return y.charCodeAt(0)==0?y:y},
dd:function(a,b,c){var z,y,x
if(P.dN(a))return b+"..."+c
z=new P.cc(b)
y=$.$get$bX()
C.a.h(y,a)
try{x=z
x.a=P.f0(x.gaQ(),a,", ")}finally{if(0>=y.length)return H.c(y,-1)
y.pop()}y=z
y.a=y.gaQ()+c
y=z.gaQ()
return y.charCodeAt(0)==0?y:y},
dN:function(a){var z,y
for(z=0;y=$.$get$bX(),z<y.length;++z)if(a===y[z])return!0
return!1},
lZ:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gZ(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.D())return
w=H.i(z.gL(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.D()){if(x<=5)return
if(0>=b.length)return H.c(b,-1)
v=b.pop()
if(0>=b.length)return H.c(b,-1)
u=b.pop()}else{t=z.gL(z);++x
if(!z.D()){if(x<=4){C.a.h(b,H.i(t))
return}v=H.i(t)
if(0>=b.length)return H.c(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gL(z);++x
for(;z.D();t=s,s=r){r=z.gL(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.c(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.i(t)
v=H.i(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
eH:function(a){var z,y,x
z={}
if(P.dN(a))return"{...}"
y=new P.cc("")
try{C.a.h($.$get$bX(),a)
x=y
x.a=x.gaQ()+"{"
z.a=!0
J.e0(a,new P.iz(z,y))
z=y
z.a=z.gaQ()+"}"}finally{z=$.$get$bX()
if(0>=z.length)return H.c(z,-1)
z.pop()}z=y.gaQ()
return z.charCodeAt(0)==0?z:z},
l6:{"^":"l0;a,0b,0c,0d,0e,0f,r,$ti",
gZ:function(a){return P.fE(this,this.r,H.u(this,0))},
gk:function(a){return this.a},
h:function(a,b){var z,y
H.z(b,H.u(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dK()
this.b=z}return this.dc(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dK()
this.c=y}return this.dc(y,b)}else return this.f7(0,b)},
f7:function(a,b){var z,y,x
H.z(b,H.u(this,0))
z=this.d
if(z==null){z=P.dK()
this.d=z}y=this.de(b)
x=z[y]
if(x==null)z[y]=[this.c7(b)]
else{if(this.dj(x,b)>=0)return!1
x.push(this.c7(b))}return!0},
O:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.dr(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dr(this.c,b)
else return this.fX(0,b)},
fX:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.fh(z,b)
x=this.dj(y,b)
if(x<0)return!1
this.dB(y.splice(x,1)[0])
return!0},
dc:function(a,b){H.z(b,H.u(this,0))
if(H.j(a[b],"$isdJ")!=null)return!1
a[b]=this.c7(b)
return!0},
dr:function(a,b){var z
if(a==null)return!1
z=H.j(a[b],"$isdJ")
if(z==null)return!1
this.dB(z)
delete a[b]
return!0},
dd:function(){this.r=this.r+1&67108863},
c7:function(a){var z,y
z=new P.dJ(H.z(a,H.u(this,0)))
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
de:function(a){return J.bd(a)&0x3ffffff},
fh:function(a,b){return a[this.de(b)]},
dj:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.S(a[y].a,b))return y
return-1},
m:{
dK:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dJ:{"^":"a;a,0b,0c"},
l7:{"^":"a;a,b,0c,0d,$ti",
gL:function(a){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.bz(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.z(z.a,H.u(this,0))
this.c=z.b
return!0}}},
m:{
fE:function(a,b,c){var z=new P.l7(a,b,[c])
z.c=a.e
return z}}},
l0:{"^":"jq;"},
cC:{"^":"l8;",$ise:1,$isf:1},
v:{"^":"a;$ti",
gZ:function(a){return new H.eF(a,this.gk(a),0,[H.bw(this,a,"v",0)])},
F:function(a,b){return this.j(a,b)},
iB:function(a,b){var z,y,x
z=H.b([],[H.bw(this,a,"v",0)])
C.a.sk(z,this.gk(a))
y=0
while(!0){x=this.gk(a)
if(typeof x!=="number")return H.k(x)
if(!(y<x))break
C.a.Y(z,y,this.j(a,y));++y}return z},
iA:function(a){return this.iB(a,!0)},
p:function(a,b){var z,y,x
z=[H.bw(this,a,"v",0)]
H.t(b,"$isf",z,"$asf")
y=H.b([],z)
z=this.gk(a)
x=b.gk(b)
if(typeof z!=="number")return z.p()
C.a.sk(y,C.e.p(z,x))
C.a.bo(y,0,this.gk(a),a)
C.a.bo(y,this.gk(a),y.length,b)
return y},
av:function(a,b,c){var z,y
if(c.S(0,0))c=0
z=c
while(!0){y=this.gk(a)
if(typeof y!=="number")return H.k(y)
if(!(z<y))break
if(J.S(this.j(a,z),b))return z;++z}return-1},
J:function(a,b){return this.av(a,b,0)},
i:function(a){return P.dd(a,"[","]")}},
iy:{"^":"ao;"},
iz:{"^":"q:24;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.i(a)
z.a=y+": "
z.a+=H.i(b)}},
ao:{"^":"a;$ti",
M:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.bw(this,a,"ao",0),H.bw(this,a,"ao",1)]})
for(z=J.bY(this.gaK(a));z.D();){y=z.gL(z)
b.$2(y,this.j(a,y))}},
gk:function(a){return J.aI(this.gaK(a))},
i:function(a){return P.eH(a)},
$isY:1},
js:{"^":"a;$ti",
i:function(a){return P.dd(this,"{","}")},
F:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.e3("index"))
if(b<0)H.o(P.ap(b,0,null,"index",null))
for(z=P.fE(this,this.r,H.u(this,0)),y=0;z.D();){x=z.d
if(b===y)return x;++y}throw H.d(P.R(b,this,"index",null,y))},
$ise:1},
jq:{"^":"js;"},
l8:{"^":"a+v;"}}],["","",,P,{"^":"",d5:{"^":"a;$ti"},ee:{"^":"jG;$ti"},hS:{"^":"d5;",
$asd5:function(){return[P.m,[P.f,P.C]]}},kg:{"^":"hS;a"},kh:{"^":"ee;",
hJ:function(a,b,c){var z,y,x,w
z=a.length
P.dr(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.lI(0,0,x)
if(w.fg(a,b,z)!==z)w.dC(C.i.ba(a,z-1),0)
return C.K.c1(x,0,w.b)},
hI:function(a){return this.hJ(a,0,null)},
$asee:function(){return[P.m,[P.f,P.C]]}},lI:{"^":"a;a,b,c",
dC:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.c(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.c(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.c(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.c(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.c(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.c(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.c(z,y)
z[y]=128|a&63
return!1}},
fg:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.i.ba(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.aP(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dC(w,C.i.aP(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.c(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.c(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.c(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.c(z,v)
z[v]=128|w&63}}return x}}}],["","",,P,{"^":"",
dT:function(a,b,c){var z
H.Q(a)
z=H.j8(a,c)
if(z!=null)return z
throw H.d(P.da(a,null,null))},
mi:function(a,b){var z=H.j7(a)
if(z!=null)return z
throw H.d(P.da("Invalid double",a,null))},
hU:function(a){var z=J.L(a)
if(!!z.$isq)return z.i(a)
return"Instance of '"+H.bi(a)+"'"},
iv:function(a,b,c,d){var z,y
H.z(b,d)
z=J.ia(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.Y(z,y,b)
return H.t(z,"$isf",[d],"$asf")},
iw:function(a,b,c){var z,y,x
z=[c]
y=H.b([],z)
for(x=a.gZ(a);x.D();)C.a.h(y,H.z(x.gL(x),c))
if(b)return y
return H.t(J.bF(y),"$isf",z,"$asf")},
dy:function(a,b,c){var z,y
z=P.C
H.t(a,"$ise",[z],"$ase")
if(a.constructor===Array){H.t(a,"$isb2",[z],"$asb2")
y=a.length
c=P.dr(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.S()
z=c<y}else z=!0
return H.eS(z?C.a.c1(a,b,c):a)}return P.jJ(a,b,c)},
jJ:function(a,b,c){var z,y,x
H.t(a,"$ise",[P.C],"$ase")
z=J.bY(a)
for(y=0;y<b;++y)if(!z.D())throw H.d(P.ap(b,0,y,null,null))
x=[]
for(;z.D();)x.push(z.gL(z))
return H.eS(x)},
ds:function(a,b,c){return new H.ie(a,H.ez(a,!1,!0,!1))},
fS:function(a,b,c,d){var z,y,x,w,v,u
H.t(a,"$isf",[P.C],"$asf")
if(c===C.n){z=$.$get$fR().b
z=z.test(b)}else z=!1
if(z)return b
y=C.x.hI(H.z(b,H.as(c,"d5",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.c(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.j9(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
cu:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ad(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hU(a)},
n:function(a){return new P.fB(a)},
ci:function(a){H.mB(a)},
a7:{"^":"a;"},
"+bool":0,
aW:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.aW))return!1
return this.a===b.a&&this.b===b.b},
gX:function(a){var z=this.a
return(z^C.e.bz(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.hI(H.j6(this))
y=P.bZ(H.j4(this))
x=P.bZ(H.j0(this))
w=P.bZ(H.j1(this))
v=P.bZ(H.j3(this))
u=P.bZ(H.j5(this))
t=P.hJ(H.j2(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
m:{
hI:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hJ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bZ:function(a){if(a>=10)return""+a
return"0"+a}}},
y:{"^":"a_;"},
"+double":0,
be:{"^":"a;a",
p:function(a,b){return new P.be(C.e.p(this.a,b.gfd()))},
S:function(a,b){return C.e.S(this.a,H.j(b,"$isbe").a)},
b4:function(a,b){return C.e.b4(this.a,b.gfd())},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.be))return!1
return this.a===b.a},
gX:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hN()
y=this.a
if(y<0)return"-"+new P.be(0-y).i(0)
x=z.$1(C.e.a3(y,6e7)%60)
w=z.$1(C.e.a3(y,1e6)%60)
v=new P.hM().$1(y%1e6)
return""+C.e.a3(y,36e8)+":"+H.i(x)+":"+H.i(w)+"."+H.i(v)},
m:{
eo:function(a,b,c,d,e,f){return new P.be(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hM:{"^":"q:17;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hN:{"^":"q:17;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a0:{"^":"a;"},
dp:{"^":"a0;",
i:function(a){return"Throw of null."}},
aU:{"^":"a0;a,b,c,d",
gca:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc9:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.i(z)
w=this.gca()+y+x
if(!this.a)return w
v=this.gc9()
u=P.cu(this.b)
return w+v+": "+H.i(u)},
m:{
hm:function(a){return new P.aU(!1,null,null,a)},
cl:function(a,b,c){return new P.aU(!0,a,b,c)},
e3:function(a){return new P.aU(!1,null,a,"Must not be null")}}},
cG:{"^":"aU;e,f,a,b,c,d",
gca:function(){return"RangeError"},
gc9:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.i(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.i(z)
else if(x>z)y=": Not in range "+H.i(z)+".."+H.i(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.i(z)}return y},
m:{
cH:function(a,b,c){return new P.cG(null,null,!0,a,b,"Value not in range")},
ap:function(a,b,c,d,e){return new P.cG(b,c,!0,a,d,"Invalid value")},
dr:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.k(a)
if(0<=a){if(typeof c!=="number")return H.k(c)
z=a>c}else z=!0
if(z)throw H.d(P.ap(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.k(c)
z=b>c}else z=!0
if(z)throw H.d(P.ap(b,a,c,"end",f))
return b}return c}}},
i6:{"^":"aU;e,k:f>,a,b,c,d",
gca:function(){return"RangeError"},
gc9:function(){if(J.cX(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.i(z)},
m:{
R:function(a,b,c,d,e){var z=H.W(e!=null?e:J.aI(b))
return new P.i6(b,z,!0,a,c,"Index out of range")}}},
kd:{"^":"a0;a",
i:function(a){return"Unsupported operation: "+this.a},
m:{
ag:function(a){return new P.kd(a)}}},
ka:{"^":"a0;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
m:{
fr:function(a){return new P.ka(a)}}},
dw:{"^":"a0;a",
i:function(a){return"Bad state: "+this.a},
m:{
dx:function(a){return new P.dw(a)}}},
hD:{"^":"a0;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.i(P.cu(z))+"."},
m:{
bz:function(a){return new P.hD(a)}}},
iV:{"^":"a;",
i:function(a){return"Out of Memory"},
$isa0:1},
eY:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isa0:1},
hH:{"^":"a0;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fB:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
i_:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=z!=null&&""!==z?"FormatException: "+H.i(z):"FormatException"
x=this.b
if(typeof x!=="string")return y
if(x.length>78)x=C.i.b6(x,0,75)+"..."
return y+"\n"+x},
m:{
da:function(a,b,c){return new P.i_(a,b,c)}}},
C:{"^":"a_;"},
"+int":0,
e:{"^":"a;$ti",
gk:function(a){var z,y
z=this.gZ(this)
for(y=0;z.D();)++y
return y},
F:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.e3("index"))
if(b<0)H.o(P.ap(b,0,null,"index",null))
for(z=this.gZ(this),y=0;z.D();){x=z.gL(z)
if(b===y)return x;++y}throw H.d(P.R(b,this,"index",null,y))},
i:function(a){return P.i7(this,"(",")")}},
de:{"^":"a;$ti"},
f:{"^":"a;$ti",$ise:1},
"+List":0,
Y:{"^":"a;$ti"},
E:{"^":"a;",
gX:function(a){return P.a.prototype.gX.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a_:{"^":"a;"},
"+num":0,
a:{"^":";",
u:function(a,b){return this===b},
gX:function(a){return H.bL(this)},
i:function(a){return"Instance of '"+H.bi(this)+"'"},
toString:function(){return this.i(this)}},
aa:{"^":"a;"},
m:{"^":"a;",$iseN:1},
"+String":0,
cc:{"^":"a;aQ:a<",
gk:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
m:{
f0:function(a,b,c){var z=J.bY(b)
if(!z.D())return a
if(c.length===0){do a+=H.i(z.gL(z))
while(z.D())}else{a+=H.i(z.gL(z))
for(;z.D();)a=a+c+H.i(z.gL(z))}return a}}}}],["","",,W,{"^":"",
hl:function(a){var z=document.createElement("a")
return z},
d4:function(a,b){var z=document.createElement("canvas")
return z},
hR:function(a){H.j(a,"$isa9")
return"wheel"},
er:function(a,b,c){return W.i3(a,null,null,b,null,null,null,c).ag(new W.i2(),P.m)},
i3:function(a,b,c,d,e,f,g,h){var z,y,x,w,v
z=W.bE
y=new P.ah(0,$.K,[z])
x=new P.kw(y,[z])
w=new XMLHttpRequest()
C.z.ia(w,"GET",a,!0)
z=W.ca
v={func:1,ret:-1,args:[z]}
W.V(w,"load",H.l(new W.i4(w,x),v),!1,z)
W.V(w,"error",H.l(x.gdM(),v),!1,z)
w.send()
return y},
et:function(a,b,c){var z=document.createElement("img")
z.src=b
return z},
cP:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fD:function(a,b,c,d){var z,y
z=W.cP(W.cP(W.cP(W.cP(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
h_:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.K
if(z===C.j)return a
return z.dH(a,b)},
bD:{"^":"a3;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
mI:{"^":"r;0k:length=","%":"AccessibleNodeList"},
mJ:{"^":"bD;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
mK:{"^":"bD;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
hs:{"^":"r;","%":";Blob"},
d3:{"^":"bD;",
c0:function(a,b,c){if(c!=null)return a.getContext(b,P.mb(c,null))
return a.getContext(b)},
eu:function(a,b){return this.c0(a,b,null)},
$isd3:1,
"%":"HTMLCanvasElement"},
e9:{"^":"r;",$ise9:1,"%":"CanvasRenderingContext2D"},
mQ:{"^":"M;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
mS:{"^":"hG;0k:length=","%":"CSSPerspective"},
bA:{"^":"r;",$isbA:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
mT:{"^":"kF;0k:length=",
ev:function(a,b){var z=a.getPropertyValue(this.f3(a,b))
return z==null?"":z},
f3:function(a,b){var z,y
z=$.$get$ef()
y=z[b]
if(typeof y==="string")return y
y=this.h5(a,b)
z[b]=y
return y},
h5:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hK()+b
if(z in a)return z
return b},
gcw:function(a){return a.bottom},
gau:function(a){return a.height},
gb1:function(a){return a.left},
gbi:function(a){return a.right},
gbm:function(a){return a.top},
gay:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hF:{"^":"a;",
gb1:function(a){return this.ev(a,"left")}},
eg:{"^":"r;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
hG:{"^":"r;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
mU:{"^":"eg;0k:length=","%":"CSSTransformValue"},
mV:{"^":"eg;0k:length=","%":"CSSUnparsedValue"},
mW:{"^":"r;0k:length=",
j:function(a,b){return a[b]},
"%":"DataTransferItemList"},
mX:{"^":"r;",
i:function(a){return String(a)},
"%":"DOMException"},
mY:{"^":"kH;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.R(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isD:1,
$asD:function(){return[[P.af,P.a_]]},
$asv:function(){return[[P.af,P.a_]]},
$ise:1,
$ase:function(){return[[P.af,P.a_]]},
$isf:1,
$asf:function(){return[[P.af,P.a_]]},
$asB:function(){return[[P.af,P.a_]]},
"%":"ClientRectList|DOMRectList"},
hL:{"^":"r;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gay(a))+" x "+H.i(this.gau(a))},
u:function(a,b){var z
if(b==null)return!1
z=H.b_(b,"$isaf",[P.a_],"$asaf")
if(!z)return!1
z=J.cU(b)
return a.left===z.gb1(b)&&a.top===z.gbm(b)&&this.gay(a)===z.gay(b)&&this.gau(a)===z.gau(b)},
gX:function(a){return W.fD(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gay(a)&0x1FFFFFFF,this.gau(a)&0x1FFFFFFF)},
gcw:function(a){return a.bottom},
gau:function(a){return a.height},
gb1:function(a){return a.left},
gbi:function(a){return a.right},
gbm:function(a){return a.top},
gay:function(a){return a.width},
$isaf:1,
$asaf:function(){return[P.a_]},
"%":";DOMRectReadOnly"},
mZ:{"^":"kJ;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.R(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isD:1,
$asD:function(){return[P.m]},
$asv:function(){return[P.m]},
$ise:1,
$ase:function(){return[P.m]},
$isf:1,
$asf:function(){return[P.m]},
$asB:function(){return[P.m]},
"%":"DOMStringList"},
n_:{"^":"r;0k:length=","%":"DOMTokenList"},
kE:{"^":"cC;a,b",
gk:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.c(z,b)
return H.j(z[b],"$isa3")},
h:function(a,b){this.a.appendChild(b)
return b},
gZ:function(a){var z=this.iA(this)
return new J.at(z,z.length,0,[H.u(z,0)])},
$asv:function(){return[W.a3]},
$ase:function(){return[W.a3]},
$asf:function(){return[W.a3]}},
a3:{"^":"M;",
gdJ:function(a){return new W.kE(a,a.children)},
gdL:function(a){return P.jd(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a_)},
i:function(a){return a.localName},
$isa3:1,
"%":";Element"},
a4:{"^":"r;",$isa4:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a9:{"^":"r;",
dD:["eA",function(a,b,c,d){H.l(c,{func:1,args:[W.a4]})
if(c!=null)this.eZ(a,b,c,!1)}],
eZ:function(a,b,c,d){return a.addEventListener(b,H.bt(H.l(c,{func:1,args:[W.a4]}),1),!1)},
$isa9:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;fK|fL|fN|fO"},
bB:{"^":"hs;",$isbB:1,"%":"File"},
n0:{"^":"kO;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.R(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bB]},
$asv:function(){return[W.bB]},
$ise:1,
$ase:function(){return[W.bB]},
$isf:1,
$asf:function(){return[W.bB]},
$asB:function(){return[W.bB]},
"%":"FileList"},
n1:{"^":"a9;0k:length=","%":"FileWriter"},
n2:{"^":"bD;0k:length=","%":"HTMLFormElement"},
bC:{"^":"r;",$isbC:1,"%":"Gamepad"},
n3:{"^":"r;0k:length=","%":"History"},
n4:{"^":"l2;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.R(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.M]},
$asv:function(){return[W.M]},
$ise:1,
$ase:function(){return[W.M]},
$isf:1,
$asf:function(){return[W.M]},
$asB:function(){return[W.M]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
bE:{"^":"i1;",
jr:function(a,b,c,d,e,f){return a.open(b,c)},
ia:function(a,b,c,d){return a.open(b,c,d)},
$isbE:1,
"%":"XMLHttpRequest"},
i2:{"^":"q:25;",
$1:function(a){return H.j(a,"$isbE").responseText}},
i4:{"^":"q:26;a,b",
$1:function(a){var z,y,x,w,v
H.j(a,"$isca")
z=this.a
y=z.status
if(typeof y!=="number")return y.b4()
x=y>=200&&y<300
w=y>307&&y<400
y=x||y===0||y===304||w
v=this.b
if(y)v.aG(0,z)
else v.hG(a)}},
i1:{"^":"a9;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
cw:{"^":"r;0dP:data=",$iscw:1,"%":"ImageData"},
es:{"^":"bD;",$ises:1,"%":"HTMLImageElement"},
bH:{"^":"dD;",$isbH:1,"%":"KeyboardEvent"},
n8:{"^":"r;",
i:function(a){return String(a)},
"%":"Location"},
n9:{"^":"r;0k:length=","%":"MediaList"},
na:{"^":"a9;",
dD:function(a,b,c,d){H.l(c,{func:1,args:[W.a4]})
if(b==="message")a.start()
this.eA(a,b,c,!1)},
"%":"MessagePort"},
nb:{"^":"l9;",
j:function(a,b){return P.b0(a.get(H.Q(b)))},
M:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b0(y.value[1]))}},
gaK:function(a){var z=H.b([],[P.m])
this.M(a,new W.iL(z))
return z},
gk:function(a){return a.size},
$asao:function(){return[P.m,null]},
$isY:1,
$asY:function(){return[P.m,null]},
"%":"MIDIInputMap"},
iL:{"^":"q:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nc:{"^":"la;",
j:function(a,b){return P.b0(a.get(H.Q(b)))},
M:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b0(y.value[1]))}},
gaK:function(a){var z=H.b([],[P.m])
this.M(a,new W.iM(z))
return z},
gk:function(a){return a.size},
$asao:function(){return[P.m,null]},
$isY:1,
$asY:function(){return[P.m,null]},
"%":"MIDIOutputMap"},
iM:{"^":"q:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bI:{"^":"r;",$isbI:1,"%":"MimeType"},
nd:{"^":"lc;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.R(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bI]},
$asv:function(){return[W.bI]},
$ise:1,
$ase:function(){return[W.bI]},
$isf:1,
$asf:function(){return[W.bI]},
$asB:function(){return[W.bI]},
"%":"MimeTypeArray"},
aF:{"^":"dD;",$isaF:1,"%":"PointerEvent;DragEvent|MouseEvent"},
kD:{"^":"cC;a",
gZ:function(a){var z=this.a.childNodes
return new W.ep(z,z.length,-1,[H.bw(C.L,z,"B",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.c(z,b)
return z[b]},
$asv:function(){return[W.M]},
$ase:function(){return[W.M]},
$asf:function(){return[W.M]}},
M:{"^":"a9;",
i:function(a){var z=a.nodeValue
return z==null?this.eB(a):z},
$isM:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iS:{"^":"le;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.R(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.M]},
$asv:function(){return[W.M]},
$ise:1,
$ase:function(){return[W.M]},
$isf:1,
$asf:function(){return[W.M]},
$asB:function(){return[W.M]},
"%":"NodeList|RadioNodeList"},
bK:{"^":"r;0k:length=",$isbK:1,"%":"Plugin"},
nm:{"^":"li;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.R(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bK]},
$asv:function(){return[W.bK]},
$ise:1,
$ase:function(){return[W.bK]},
$isf:1,
$asf:function(){return[W.bK]},
$asB:function(){return[W.bK]},
"%":"PluginArray"},
ca:{"^":"a4;",$isca:1,"%":"ProgressEvent|ResourceProgressEvent"},
no:{"^":"lo;",
j:function(a,b){return P.b0(a.get(H.Q(b)))},
M:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b0(y.value[1]))}},
gaK:function(a){var z=H.b([],[P.m])
this.M(a,new W.jn(z))
return z},
gk:function(a){return a.size},
$asao:function(){return[P.m,null]},
$isY:1,
$asY:function(){return[P.m,null]},
"%":"RTCStatsReport"},
jn:{"^":"q:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
np:{"^":"bD;0k:length=","%":"HTMLSelectElement"},
bM:{"^":"a9;",$isbM:1,"%":"SourceBuffer"},
nq:{"^":"fL;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.R(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bM]},
$asv:function(){return[W.bM]},
$ise:1,
$ase:function(){return[W.bM]},
$isf:1,
$asf:function(){return[W.bM]},
$asB:function(){return[W.bM]},
"%":"SourceBufferList"},
bN:{"^":"r;",$isbN:1,"%":"SpeechGrammar"},
nr:{"^":"lq;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.R(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bN]},
$asv:function(){return[W.bN]},
$ise:1,
$ase:function(){return[W.bN]},
$isf:1,
$asf:function(){return[W.bN]},
$asB:function(){return[W.bN]},
"%":"SpeechGrammarList"},
bO:{"^":"r;0k:length=",$isbO:1,"%":"SpeechRecognitionResult"},
nt:{"^":"lt;",
j:function(a,b){return a.getItem(H.Q(b))},
M:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.m,P.m]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gaK:function(a){var z=H.b([],[P.m])
this.M(a,new W.jF(z))
return z},
gk:function(a){return a.length},
$asao:function(){return[P.m,P.m]},
$isY:1,
$asY:function(){return[P.m,P.m]},
"%":"Storage"},
jF:{"^":"q:27;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bP:{"^":"r;",$isbP:1,"%":"CSSStyleSheet|StyleSheet"},
bQ:{"^":"a9;",$isbQ:1,"%":"TextTrack"},
bR:{"^":"a9;",$isbR:1,"%":"TextTrackCue|VTTCue"},
ny:{"^":"lz;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.R(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bR]},
$asv:function(){return[W.bR]},
$ise:1,
$ase:function(){return[W.bR]},
$isf:1,
$asf:function(){return[W.bR]},
$asB:function(){return[W.bR]},
"%":"TextTrackCueList"},
nz:{"^":"fO;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.R(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bQ]},
$asv:function(){return[W.bQ]},
$ise:1,
$ase:function(){return[W.bQ]},
$isf:1,
$asf:function(){return[W.bQ]},
$asB:function(){return[W.bQ]},
"%":"TextTrackList"},
nA:{"^":"r;0k:length=","%":"TimeRanges"},
bS:{"^":"r;",$isbS:1,"%":"Touch"},
bk:{"^":"dD;",$isbk:1,"%":"TouchEvent"},
nB:{"^":"lF;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.R(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bS]},
$asv:function(){return[W.bS]},
$ise:1,
$ase:function(){return[W.bS]},
$isf:1,
$asf:function(){return[W.bS]},
$asB:function(){return[W.bS]},
"%":"TouchList"},
nC:{"^":"r;0k:length=","%":"TrackDefaultList"},
dD:{"^":"a4;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
nF:{"^":"r;",
i:function(a){return String(a)},
"%":"URL"},
nG:{"^":"a9;0k:length=","%":"VideoTrackList"},
bT:{"^":"aF;",
ghM:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.ag("deltaY is not supported"))},
ghL:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.ag("deltaX is not supported"))},
$isbT:1,
"%":"WheelEvent"},
ks:{"^":"a9;",
fY:function(a,b){return a.requestAnimationFrame(H.bt(H.l(b,{func:1,ret:-1,args:[P.a_]}),1))},
fe:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
nL:{"^":"lL;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.R(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bA]},
$asv:function(){return[W.bA]},
$ise:1,
$ase:function(){return[W.bA]},
$isf:1,
$asf:function(){return[W.bA]},
$asB:function(){return[W.bA]},
"%":"CSSRuleList"},
nM:{"^":"hL;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
u:function(a,b){var z
if(b==null)return!1
z=H.b_(b,"$isaf",[P.a_],"$asaf")
if(!z)return!1
z=J.cU(b)
return a.left===z.gb1(b)&&a.top===z.gbm(b)&&a.width===z.gay(b)&&a.height===z.gau(b)},
gX:function(a){return W.fD(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gau:function(a){return a.height},
gay:function(a){return a.width},
"%":"ClientRect|DOMRect"},
nO:{"^":"lN;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.R(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bC]},
$asv:function(){return[W.bC]},
$ise:1,
$ase:function(){return[W.bC]},
$isf:1,
$asf:function(){return[W.bC]},
$asB:function(){return[W.bC]},
"%":"GamepadList"},
nP:{"^":"lP;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.R(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.M]},
$asv:function(){return[W.M]},
$ise:1,
$ase:function(){return[W.M]},
$isf:1,
$asf:function(){return[W.M]},
$asB:function(){return[W.M]},
"%":"MozNamedAttrMap|NamedNodeMap"},
nQ:{"^":"lR;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.R(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bO]},
$asv:function(){return[W.bO]},
$ise:1,
$ase:function(){return[W.bO]},
$isf:1,
$asf:function(){return[W.bO]},
$asB:function(){return[W.bO]},
"%":"SpeechRecognitionResultList"},
nR:{"^":"lT;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.R(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bP]},
$asv:function(){return[W.bP]},
$ise:1,
$ase:function(){return[W.bP]},
$isf:1,
$asf:function(){return[W.bP]},
$asB:function(){return[W.bP]},
"%":"StyleSheetList"},
kK:{"^":"cb;a,b,c,$ti",
i0:function(a,b,c,d){var z=H.u(this,0)
H.l(a,{func:1,ret:-1,args:[z]})
H.l(c,{func:1,ret:-1})
return W.V(this.a,this.b,a,!1,z)}},
nN:{"^":"kK;a,b,c,$ti"},
kL:{"^":"f_;a,b,c,d,e,$ti",
h9:function(){var z=this.d
if(z!=null&&this.a<=0)J.hj(this.b,this.c,z,!1)},
m:{
V:function(a,b,c,d,e){var z=c==null?null:W.h_(new W.kM(c),W.a4)
z=new W.kL(0,a,b,z,!1,[e])
z.h9()
return z}}},
kM:{"^":"q:7;a",
$1:function(a){return this.a.$1(H.j(a,"$isa4"))}},
B:{"^":"a;$ti",
gZ:function(a){return new W.ep(a,this.gk(a),-1,[H.bw(this,a,"B",0)])}},
ep:{"^":"a;a,b,c,0d,$ti",
D:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.P(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gL:function(a){return this.d}},
kF:{"^":"r+hF;"},
kG:{"^":"r+v;"},
kH:{"^":"kG+B;"},
kI:{"^":"r+v;"},
kJ:{"^":"kI+B;"},
kN:{"^":"r+v;"},
kO:{"^":"kN+B;"},
l1:{"^":"r+v;"},
l2:{"^":"l1+B;"},
l9:{"^":"r+ao;"},
la:{"^":"r+ao;"},
lb:{"^":"r+v;"},
lc:{"^":"lb+B;"},
ld:{"^":"r+v;"},
le:{"^":"ld+B;"},
lh:{"^":"r+v;"},
li:{"^":"lh+B;"},
lo:{"^":"r+ao;"},
fK:{"^":"a9+v;"},
fL:{"^":"fK+B;"},
lp:{"^":"r+v;"},
lq:{"^":"lp+B;"},
lt:{"^":"r+ao;"},
ly:{"^":"r+v;"},
lz:{"^":"ly+B;"},
fN:{"^":"a9+v;"},
fO:{"^":"fN+B;"},
lE:{"^":"r+v;"},
lF:{"^":"lE+B;"},
lK:{"^":"r+v;"},
lL:{"^":"lK+B;"},
lM:{"^":"r+v;"},
lN:{"^":"lM+B;"},
lO:{"^":"r+v;"},
lP:{"^":"lO+B;"},
lQ:{"^":"r+v;"},
lR:{"^":"lQ+B;"},
lS:{"^":"r+v;"},
lT:{"^":"lS+B;"}}],["","",,P,{"^":"",
me:function(a){var z,y
z=J.L(a)
if(!!z.$iscw){y=z.gdP(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fQ(a.data,a.height,a.width)},
md:function(a){if(a instanceof P.fQ)return{data:a.a,height:a.b,width:a.c}
return a},
b0:function(a){var z,y,x,w,v
if(a==null)return
z=P.is(P.m,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w){v=H.Q(y[w])
z.Y(0,v,a[v])}return z},
mb:function(a,b){var z={}
a.M(0,new P.mc(z))
return z},
em:function(){var z=$.el
if(z==null){z=J.cY(window.navigator.userAgent,"Opera",0)
$.el=z}return z},
hK:function(){var z,y
z=$.ei
if(z!=null)return z
y=$.ej
if(y==null){y=J.cY(window.navigator.userAgent,"Firefox",0)
$.ej=y}if(y)z="-moz-"
else{y=$.ek
if(y==null){y=!P.em()&&J.cY(window.navigator.userAgent,"Trident/",0)
$.ek=y}if(y)z="-ms-"
else z=P.em()?"-o-":"-webkit-"}$.ei=z
return z},
fQ:{"^":"a;dP:a>,b,c",$iscw:1},
mc:{"^":"q:24;a",
$2:function(a,b){this.a[a]=b}},
hX:{"^":"cC;a,b",
gcd:function(){var z,y,x
z=this.b
y=H.as(z,"v",0)
x=W.a3
return new H.iA(new H.kq(z,H.l(new P.hY(),{func:1,ret:P.a7,args:[y]}),[y]),H.l(new P.hZ(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.aI(this.gcd().a)},
j:function(a,b){var z=this.gcd()
return z.b.$1(J.e_(z.a,b))},
gZ:function(a){var z=P.iw(this.gcd(),!1,W.a3)
return new J.at(z,z.length,0,[H.u(z,0)])},
$asv:function(){return[W.a3]},
$ase:function(){return[W.a3]},
$asf:function(){return[W.a3]}},
hY:{"^":"q:29;",
$1:function(a){return!!J.L(H.j(a,"$isM")).$isa3}},
hZ:{"^":"q:45;",
$1:function(a){return H.h(H.j(a,"$isM"),"$isa3")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cQ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l3:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
lj:{"^":"a;$ti",
gbi:function(a){var z=this.a
if(typeof z!=="number")return z.p()
return H.z(z+this.c,H.u(this,0))},
gcw:function(a){var z=this.b
if(typeof z!=="number")return z.p()
return H.z(z+this.d,H.u(this,0))},
i:function(a){return"Rectangle ("+H.i(this.a)+", "+H.i(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.b_(b,"$isaf",[P.a_],"$asaf")
if(!z)return!1
z=this.a
y=J.cU(b)
x=y.gb1(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbm(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.p()
w=H.u(this,0)
if(H.z(z+this.c,w)===y.gbi(b)){if(typeof x!=="number")return x.p()
z=H.z(x+this.d,w)===y.gcw(b)}else z=!1}else z=!1}else z=!1
return z},
gX:function(a){var z,y,x,w,v
z=this.a
y=J.bd(z)
x=this.b
w=J.bd(x)
if(typeof z!=="number")return z.p()
v=H.u(this,0)
z=H.z(z+this.c,v)
if(typeof x!=="number")return x.p()
v=H.z(x+this.d,v)
return P.l3(P.cQ(P.cQ(P.cQ(P.cQ(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
af:{"^":"lj;b1:a>,bm:b>,ay:c>,au:d>,$ti",m:{
jd:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.S()
if(c<0)z=-c*0
else z=c
H.z(z,e)
if(typeof d!=="number")return d.S()
if(d<0)y=-d*0
else y=d
return new P.af(a,b,z,H.z(y,e),[e])}}}}],["","",,P,{"^":"",c3:{"^":"r;",$isc3:1,"%":"SVGLength"},n7:{"^":"l5;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.R(b,a,null,null,null))
return a.getItem(b)},
F:function(a,b){return this.j(a,b)},
$asv:function(){return[P.c3]},
$ise:1,
$ase:function(){return[P.c3]},
$isf:1,
$asf:function(){return[P.c3]},
$asB:function(){return[P.c3]},
"%":"SVGLengthList"},c9:{"^":"r;",$isc9:1,"%":"SVGNumber"},nk:{"^":"lg;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.R(b,a,null,null,null))
return a.getItem(b)},
F:function(a,b){return this.j(a,b)},
$asv:function(){return[P.c9]},
$ise:1,
$ase:function(){return[P.c9]},
$isf:1,
$asf:function(){return[P.c9]},
$asB:function(){return[P.c9]},
"%":"SVGNumberList"},nn:{"^":"r;0k:length=","%":"SVGPointList"},nv:{"^":"lw;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.R(b,a,null,null,null))
return a.getItem(b)},
F:function(a,b){return this.j(a,b)},
$asv:function(){return[P.m]},
$ise:1,
$ase:function(){return[P.m]},
$isf:1,
$asf:function(){return[P.m]},
$asB:function(){return[P.m]},
"%":"SVGStringList"},nw:{"^":"a3;",
gdJ:function(a){return new P.hX(a,new W.kD(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"},ce:{"^":"r;",$isce:1,"%":"SVGTransform"},nD:{"^":"lH;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.R(b,a,null,null,null))
return a.getItem(b)},
F:function(a,b){return this.j(a,b)},
$asv:function(){return[P.ce]},
$ise:1,
$ase:function(){return[P.ce]},
$isf:1,
$asf:function(){return[P.ce]},
$asB:function(){return[P.ce]},
"%":"SVGTransformList"},l4:{"^":"r+v;"},l5:{"^":"l4+B;"},lf:{"^":"r+v;"},lg:{"^":"lf+B;"},lv:{"^":"r+v;"},lw:{"^":"lv+B;"},lG:{"^":"r+v;"},lH:{"^":"lG+B;"}}],["","",,P,{"^":"",mL:{"^":"r;0k:length=","%":"AudioBuffer"},mM:{"^":"kC;",
j:function(a,b){return P.b0(a.get(H.Q(b)))},
M:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.m,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b0(y.value[1]))}},
gaK:function(a){var z=H.b([],[P.m])
this.M(a,new P.ho(z))
return z},
gk:function(a){return a.size},
$asao:function(){return[P.m,null]},
$isY:1,
$asY:function(){return[P.m,null]},
"%":"AudioParamMap"},ho:{"^":"q:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},mN:{"^":"a9;0k:length=","%":"AudioTrackList"},hp:{"^":"a9;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},nl:{"^":"hp;0k:length=","%":"OfflineAudioContext"},kC:{"^":"r+ao;"}}],["","",,P,{"^":"",dt:{"^":"r;",
iy:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.L(g)
if(!!z.$iscw)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.md(g))
return}if(!!z.$ises)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.d(P.hm("Incorrect number or type of arguments"))},
eo:function(a,b,c,d,e,f,g){return this.iy(a,b,c,d,e,f,g,null,null,null)},
$isdt:1,
"%":"WebGLRenderingContext"},jK:{"^":"r;",$isjK:1,"%":"WebGLTexture"},k8:{"^":"r;",$isk8:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",ns:{"^":"ls;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.R(b,a,null,null,null))
return P.b0(a.item(b))},
F:function(a,b){return this.j(a,b)},
$asv:function(){return[[P.Y,,,]]},
$ise:1,
$ase:function(){return[[P.Y,,,]]},
$isf:1,
$asf:function(){return[[P.Y,,,]]},
$asB:function(){return[[P.Y,,,]]},
"%":"SQLResultSetRowList"},lr:{"^":"r+v;"},ls:{"^":"lr+B;"}}],["","",,O,{"^":"",a8:{"^":"a;0a,0b,0c,0d,$ti",
bp:function(a){this.a=H.b([],[a])
this.b=null
this.c=null
this.d=null},
cY:function(a,b,c){var z=H.as(this,"a8",0)
H.l(b,{func:1,ret:P.a7,args:[[P.e,z]]})
z={func:1,ret:-1,args:[P.C,[P.e,z]]}
H.l(a,z)
H.l(c,z)
this.b=b
this.c=a
this.d=c},
b5:function(a,b){return this.cY(a,null,b)},
aD:function(a){var z
H.t(a,"$ise",[H.as(this,"a8",0)],"$ase")
z=this.b
if(z!=null)return z.$1(a)
return!0},
d4:function(a,b){var z
H.t(b,"$ise",[H.as(this,"a8",0)],"$ase")
z=this.c
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
gZ:function(a){var z=this.a
return new J.at(z,z.length,0,[H.u(z,0)])},
F:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.c(z,b)
return z[b]},
av:function(a,b,c){H.z(b,H.as(this,"a8",0))
return C.a.av(this.a,b,c)},
J:function(a,b){return this.av(a,b,0)},
h:function(a,b){var z,y,x
z=H.as(this,"a8",0)
H.z(b,z)
z=[z]
if(this.aD(H.b([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.d4(x,H.b([b],z))}},
aW:function(a,b){var z,y
H.t(b,"$ise",[H.as(this,"a8",0)],"$ase")
if(this.aD(b)){z=this.a
y=z.length
C.a.aW(z,b)
this.d4(y,b)}},
j:function(a,b){var z=this.a
if(b>=z.length)return H.c(z,b)
return z[b]},
$ise:1,
m:{
d6:function(a){var z=new O.a8([a])
z.bp(a)
return z}}},dj:{"^":"a;0a,0b",
gk:function(a){return this.a.length},
gt:function(){var z=this.b
if(z==null){z=D.I()
this.b=z}return z},
eT:function(a){var z=this.b
if(!(z==null))z.A(a)},
aO:function(){return this.eT(null)},
gN:function(a){var z=this.a
if(z.length>0)return C.a.gcO(z)
else return V.b3()},
bV:function(a){var z=this.a
if(a==null)C.a.h(z,V.b3())
else C.a.h(z,a)
this.aO()},
aL:function(){var z=this.a
if(z.length>0){z.pop()
this.aO()}}}}],["","",,E,{"^":"",d_:{"^":"a;"},T:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a2:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
ab:function(a,b,c,d,e,f){var z
this.a=d
this.b=!0
this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
z=O.d6(E.T)
this.y=z
z.b5(this.gi4(),this.gi6())
this.z=null
this.Q=null
this.ch=null
this.cx=null
this.cy=null
this.db=null
this.dx=null
this.dy=null
this.fr=null
this.fx=null
this.saa(0,e)
this.sa1(f)
this.sbU(c)},
da:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.at(z,z.length,0,[H.u(z,0)]);z.D();){y=z.d
if(y.f==null)y.da()}},
saa:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gt().O(0,this.gej())
y=this.c
if(y!=null)y.gt().h(0,this.gej())
x=new D.F("shape",z,this.c,this,[F.eW])
x.b=!0
this.a7(x)}},
sa1:function(a){var z,y,x
z=this.f
if(z==null?a!=null:z!==a){if(z!=null)z.gt().O(0,this.gek())
y=this.f
this.f=a
if(a!=null)a.gt().h(0,this.gek())
this.da()
x=new D.F("technique",y,this.f,this,[O.cd])
x.b=!0
this.a7(x)}},
sbU:function(a){var z,y
if(!J.S(this.r,a)){z=this.r
if(z!=null)z.gt().O(0,this.gei())
if(a!=null)a.gt().h(0,this.gei())
this.r=a
y=new D.F("mover",z,a,this,[U.ax])
y.b=!0
this.a7(y)}},
ax:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.a:null
if(!J.S(y,this.x)){x=this.x
this.x=y
w=new D.F("matrix",x,y,this,[V.aE])
w.b=!0
this.a7(w)}z=this.f
if(z!=null)z.ax(0,b)
for(z=this.y.a,z=new J.at(z,z.length,0,[H.u(z,0)]);z.D();)z.d.ax(0,b)},
a8:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gN(z))
else C.a.h(z.a,y.l(0,z.gN(z)))
z.aO()
a.cT(this.f)
z=a.dy
x=(z&&C.a).gcO(z)
if(x!=null&&this.d!=null)x.em(a,this)
for(z=this.y.a,z=new J.at(z,z.length,0,[H.u(z,0)]);z.D();)z.d.a8(a)
a.cS()
a.dx.aL()},
gt:function(){var z=this.z
if(z==null){z=D.I()
this.z=z}return z},
a7:function(a){var z=this.z
if(!(z==null))z.A(a)},
a4:function(){return this.a7(null)},
i8:[function(a){H.j(a,"$isx")
this.e=null
this.a7(a)},function(){return this.i8(null)},"jp","$1","$0","gej",0,2,0],
i9:[function(a){this.a7(H.j(a,"$isx"))},function(){return this.i9(null)},"jq","$1","$0","gek",0,2,0],
i7:[function(a){this.a7(H.j(a,"$isx"))},function(){return this.i7(null)},"jo","$1","$0","gei",0,2,0],
i5:[function(a){this.a7(H.j(a,"$isx"))},function(){return this.i5(null)},"jm","$1","$0","geh",0,2,0],
jl:[function(a,b){var z,y,x,w,v,u,t,s
H.t(b,"$ise",[E.T],"$ase")
for(z=b.length,y=this.geh(),x={func:1,ret:-1,args:[D.x]},w=[x],v=0;v<b.length;b.length===z||(0,H.A)(b),++v){u=b[v]
if(u!=null){if(u.ga2()==null){t=new D.bf()
t.d=0
u.sa2(t)}t=u.ga2()
t.toString
H.l(y,x)
s=t.a
if(s==null){s=H.b([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.a4()},"$2","gi4",8,0,8],
jn:[function(a,b){var z,y,x,w,v
H.t(b,"$ise",[E.T],"$ase")
for(z=b.length,y=this.geh(),x=0;x<b.length;b.length===z||(0,H.A)(b),++x){w=b[x]
if(w!=null){if(w.ga2()==null){v=new D.bf()
v.d=0
w.sa2(v)}w.ga2().O(0,y)}}this.a4()},"$2","gi6",8,0,8],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaK:1,
m:{
av:function(a,b,c,d,e,f){var z=new E.T()
z.ab(a,!0,c,d,e,f)
return z}}},jg:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
eO:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.aW(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.dj()
y=[V.aE]
z.a=H.b([],y)
z.gt().h(0,new E.ji(this))
this.cy=z
z=new O.dj()
z.a=H.b([],y)
z.gt().h(0,new E.jj(this))
this.db=z
z=new O.dj()
z.a=H.b([],y)
z.gt().h(0,new E.jk(this))
this.dx=z
z=H.b([],[O.cd])
this.dy=z
C.a.h(z,null)
this.fr=new H.aX(0,0,[P.m,A.du])},
giq:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gN(z)
y=this.db
y=z.l(0,y.gN(y))
this.z=y
z=y}return z},
cT:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gcO(z):a;(z&&C.a).h(z,y)},
cS:function(){var z=this.dy
if(z.length>1)z.pop()},
dG:function(a){var z=a.b
if(z.length===0)throw H.d(P.n("May not cache a shader with no name."))
if(this.fr.dN(0,z))throw H.d(P.n('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.Y(0,z,a)},
m:{
jh:function(a,b){var z=new E.jg(a,b)
z.eO(a,b)
return z}}},ji:{"^":"q:11;a",
$1:function(a){var z
H.j(a,"$isx")
z=this.a
z.z=null
z.ch=null}},jj:{"^":"q:11;a",
$1:function(a){var z
H.j(a,"$isx")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jk:{"^":"q:11;a",
$1:function(a){var z
H.j(a,"$isx")
z=this.a
z.ch=null
z.cx=null}},jS:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0a2:x@,0y,0z,0Q,0ch,0cx,0cy",
gt:function(){var z=this.x
if(z==null){z=D.I()
this.x=z}return z},
eV:[function(a){var z
H.j(a,"$isx")
z=this.x
if(!(z==null))z.A(a)
this.it()},function(){return this.eV(null)},"eU","$1","$0","gd5",0,2,0],
ghS:function(){var z,y,x
z=Date.now()
y=C.e.a3(P.eo(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.aW(z,!1)
return x/y},
ds:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.l()
if(typeof z!=="number")return H.k(z)
x=C.h.cL(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.l()
w=C.h.cL(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.dB(C.l,this.gis())}},
it:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.jU(this),{func:1,ret:-1,args:[P.a_]})
C.v.fe(z)
C.v.fY(z,W.h_(y,P.a_))}},"$0","gis",0,0,2],
ir:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.ds()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aW(w,!1)
x.y=P.eo(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sk(w.a,0)
w.aO()
w=x.db
C.a.sk(w.a,0)
w.aO()
w=x.dx
C.a.sk(w.a,0)
w.aO()
w=x.dy;(w&&C.a).sk(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a8(this.e)}}catch(v){z=H.ac(v)
y=H.bb(v)
P.ci("Error: "+H.i(z))
P.ci("Stack: "+H.i(y))
throw H.d(z)}},
m:{
jT:function(a,b,c,d,e){var z,y,x,w
z=J.L(a)
if(!!z.$isd3)return E.f3(a,!0,!0,!0,!1)
y=W.d4(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gdJ(a).h(0,y)
w=E.f3(y,!0,!0,!0,!1)
w.a=a
return w},
f3:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jS()
y=P.it(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.m,null)
x=C.k.c0(a,"webgl",y)
x=H.j(x==null?C.k.c0(a,"experimental-webgl",y):x,"$isdt")
if(x==null)H.o(P.n("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.jh(x,a)
w=new T.jM(x)
w.b=H.W(x.getParameter(3379))
w.c=H.W(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.ke(a)
v=new X.ii()
v.c=new X.b4(!1,!1,!1)
v.d=P.iu(null,null,null,P.C)
w.b=v
v=new X.iN(w)
v.f=0
v.r=new V.N(0,0)
v.x=new V.N(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.ix(w)
v.r=0
v.x=new V.N(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jZ(w)
v.e=0
v.f=new V.N(0,0)
v.r=new V.N(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.b([],[[P.f_,P.a]])
w.z=v
u=document
t=W.aF
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.V(u,"contextmenu",H.l(w.gfz(),s),!1,t))
v=w.z
r=W.a4
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.V(a,"focus",H.l(w.gfC(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.V(a,"blur",H.l(w.gfu(),q),!1,r))
v=w.z
p=W.bH
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.V(u,"keyup",H.l(w.gfE(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.V(u,"keydown",H.l(w.gfD(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.V(a,"mousedown",H.l(w.gfH(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.V(a,"mouseup",H.l(w.gfJ(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.V(a,"mousemove",H.l(w.gfI(),s),!1,t))
p=w.z
o=W.bT;(p&&C.a).h(p,W.V(a,H.Q(W.hR(a)),H.l(w.gfK(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.V(u,"mousemove",H.l(w.gfA(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.V(u,"mouseup",H.l(w.gfB(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.V(u,"pointerlockchange",H.l(w.gfL(),q),!1,r))
r=w.z
q=W.bk
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.V(a,"touchstart",H.l(w.gfT(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.V(a,"touchend",H.l(w.gfR(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.V(a,"touchmove",H.l(w.gfS(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.aW(Date.now(),!1)
z.cy=0
z.ds()
return z}}},jU:{"^":"q:33;a",
$1:function(a){var z
H.mA(a)
z=this.a
if(z.ch){z.ch=!1
z.ir()}}}}],["","",,Z,{"^":"",fw:{"^":"a;a,b",m:{
dH:function(a,b,c){var z
H.t(c,"$isf",[P.C],"$asf")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bU(c)),35044)
a.bindBuffer(b,null)
return new Z.fw(b,z)}}},e7:{"^":"d_;a,b,c,d,e",
R:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ac(y)
x=P.n('Failed to bind buffer attribute "'+J.ad(this.a)+'": '+H.i(z))
throw H.d(x)}},
i:function(a){return"["+J.ad(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.i(this.e)+"]"}},fx:{"^":"a;a",$ismO:1},d2:{"^":"a;a,0b,c,d",
aJ:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
R:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].R(a)},
ap:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
a8:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.c(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.m]
y=H.b([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v)C.a.h(y,x[v].i(0))
u=H.b([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ad(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.C(y,", ")+"\nAttrs:   "+C.a.C(u,", ")},
$isnx:1},cx:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bi(this.c)+"'")+"]"}},bl:{"^":"a;a",
gd_:function(a){var z,y
z=this.a
y=(z&$.$get$aB().a)!==0?3:0
if((z&$.$get$aR().a)!==0)y+=3
if((z&$.$get$aQ().a)!==0)y+=3
if((z&$.$get$aS().a)!==0)y+=2
if((z&$.$get$aT().a)!==0)y+=3
if((z&$.$get$bm().a)!==0)y+=3
if((z&$.$get$bn().a)!==0)y+=4
if((z&$.$get$b7().a)!==0)++y
return(z&$.$get$aP().a)!==0?y+4:y},
hA:function(a){var z,y,x
z=$.$get$aB()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aQ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aT()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bm()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bn()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b7()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aP()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fv()},
J:function(a,b){var z,y
z=this.a
if((z&$.$get$aB().a)!==0)y=1
else y=0
if((z&$.$get$aR().a)!==0)++y
if((z&$.$get$aQ().a)!==0)++y
if((z&$.$get$aS().a)!==0)++y
if((z&$.$get$aT().a)!==0)++y
if((z&$.$get$bm().a)!==0)++y
if((z&$.$get$bn().a)!==0)++y
if((z&$.$get$b7().a)!==0)++y;(z&$.$get$aP().a)!==0
return-1},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bl))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.b([],[P.m])
y=this.a
if((y&$.$get$aB().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aR().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aQ().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aS().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aT().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bm().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bn().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b7().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aP().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.C(z,"|")},
m:{
aA:function(a){return new Z.bl(a)}}}}],["","",,D,{"^":"",ea:{"^":"a;"},bf:{"^":"a;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.x]}
H.l(b,z)
y=this.a
if(y==null){z=H.b([],[z])
this.a=z}else z=y
C.a.h(z,b)},
O:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.x]})
z=this.a
z=z==null?null:C.a.b_(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).O(z,b)||!1}else y=!1
return y},
A:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w)w=!0
else w=!1
if(w)return!1
if(a==null){a=new D.x(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.M(y,new D.hV(z))
return!0},
dR:function(){return this.A(null)},
iu:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.A(y)}}},
b3:function(a){return this.iu(a,!0,!1)},
m:{
I:function(){var z=new D.bf()
z.d=0
return z}}},hV:{"^":"q:34;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.x]})
z=this.a.a
z.b
a.$1(z)}},x:{"^":"a;a,0b"},c_:{"^":"x;c,d,a,0b,$ti"},c0:{"^":"x;c,d,a,0b,$ti"},F:{"^":"x;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}}],["","",,O,{"^":"",
h8:function(a){var z=C.i.hX(a,"/")
if(z<=0)return a
return C.i.b6(a,0,z)},
fY:function(a){var z,y,x
z=P.ds("([^\\s]+)",!0,!1)
$.fX=z
y=z.hQ(a)
if(y==null)return H.b([],[P.m])
z=y.b
if(1>=z.length)return H.c(z,1)
x=z[1]
return H.b([x,C.i.cW(C.i.c2(a,x.length))],[P.m])},
cS:function(a){var z,y,x
z=H.b([],[P.m])
y=P.ds("([^\\s]+)",!0,!1)
$.fX=y
y=new H.kt(y,a,0)
for(;y.D();){x=y.d.b
if(1>=x.length)return H.c(x,1)
C.a.h(z,x[1])}return z},
aZ:function(a){var z,y,x,w
z=O.cS(a)
y=H.b([],[P.y])
x=z.length
for(w=0;w<x;++w){if(w>=z.length)return H.c(z,w)
C.a.h(y,P.mi(z[w],null))}return y},
c8:function(a,b,c){return O.iO(a,b,!1)},
iO:function(a,b,c){var z=0,y=P.al([P.Y,P.m,O.c5]),x,w=2,v,u=[],t,s,r,q,p,o,n,m
var $async$c8=P.am(function(d,e){if(d===1){v=e
z=w}while(true)switch(z){case 0:w=4
t=O.h8(a)
p=new O.m0(b)
p.b=new H.aX(0,0,[P.m,O.c5])
s=p
z=7
return P.a6(W.er(a,null,null),$async$c8)
case 7:r=e
z=8
return P.a6(s.an(r,t,!1),$async$c8)
case 8:o=s.gdm()
x=o
z=1
break
w=2
z=6
break
case 4:w=3
m=v
q=H.ac(m)
P.ci(a+": "+H.i(q))
o=P.n(a+": "+H.i(q))
throw H.d(o)
z=6
break
case 3:z=2
break
case 6:case 1:return P.aj(x,y)
case 2:return P.ai(v,y)}})
return P.ak($async$c8,y)},
ay:function(a,b,c,d,e){return O.iU(a,b,c,d,!1)},
iU:function(a,b,c,d,e){var z=0,y=P.al(E.T),x,w=2,v,u=[],t,s,r,q,p,o,n,m,l
var $async$ay=P.am(function(f,g){if(f===1){v=g
z=w}while(true)switch(z){case 0:w=4
t=O.h8(a)
p=new O.m1(b)
p.b=H.b([],[O.fT])
p.c=H.b([],[V.N])
p.d=H.b([],[V.G])
p.e=new H.aX(0,0,[P.m,O.c5])
p.f=d
p.r=""
o=O.aw()
n=o.r
n.sq(0,new V.w(0.35,0.35,0.35))
n=o.x
n.sq(0,new V.w(0.65,0.65,0.65))
p.x=o
p.Q=E.av(null,!0,null,"",null,null)
p.bA()
s=p
z=7
return P.a6(W.er(a,null,null),$async$ay)
case 7:r=g
z=8
return P.a6(s.an(r,t,!1),$async$ay)
case 8:o=s.ghO()
x=o
z=1
break
w=2
z=6
break
case 4:w=3
l=v
q=H.ac(l)
P.ci(a+": "+H.i(q))
o=P.n(a+": "+H.i(q))
throw H.d(o)
z=6
break
case 3:z=2
break
case 6:case 1:return P.aj(x,y)
case 2:return P.ai(v,y)}})
return P.ak($async$ay,y)},
m0:{"^":"a;a,0dm:b<,0c",
an:function(a,b,c){var z=0,y=P.al(null),x=this
var $async$an=P.am(function(d,e){if(d===1)return P.ai(e,y)
while(true)switch(z){case 0:z=2
return P.a6(x.am(H.b(a.split("\n"),[P.m]),b,!1),$async$an)
case 2:return P.aj(null,y)}})
return P.ak($async$an,y)},
am:function(a,b,c){H.t(a,"$isf",[P.m],"$asf")
return this.io(a,b,!1)},
io:function(a,b,c){var z=0,y=P.al(null),x,w=2,v,u=[],t=this,s,r,q,p,o
var $async$am=P.am(function(d,e){if(d===1){v=e
z=w}while(true)switch(z){case 0:s=0
case 3:if(!J.cX(s,a.length)){z=5
break}w=7
q=s
if(q>>>0!==q||q>=a.length){x=H.c(a,q)
z=1
break}z=10
return P.a6(t.a0(a[q],b,!1),$async$am)
case 10:w=2
z=9
break
case 7:w=6
o=v
r=H.ac(o)
q=P.n("Line "+H.i(J.ck(s,1))+": "+H.i(r))
throw H.d(q)
z=9
break
case 6:z=2
break
case 9:case 4:s=J.ck(s,1)
z=3
break
case 5:case 1:return P.aj(x,y)
case 2:return P.ai(v,y)}})
return P.ak($async$am,y)},
a0:function(a,b,c){H.Q(a)
return this.il(a,b,!1)},
il:function(a,b,c){var z=0,y=P.al(null),x,w=2,v,u=[],t=this,s,r,q,p,o,n,m,l
var $async$a0=P.am(function(d,e){if(d===1){v=e
z=w}while(true)switch(z){case 0:w=4
s=J.e1(a,"#")
if(J.dZ(s,0))a=J.e2(a,0,s)
a=J.cZ(a)
if(J.aI(a)<=0){z=1
break}r=O.fY(a)
if(J.aI(r)<1){z=1
break}case 7:switch(J.P(r,0)){case"newmtl":z=9
break
case"Ka":z=10
break
case"Kd":z=11
break
case"Ks":z=12
break
case"Ns":z=13
break
case"d":z=14
break
case"Tr":z=15
break
case"map_Ka":z=16
break
case"map_Kd":z=17
break
case"map_Ks":z=18
break
case"map_d":z=19
break
case"map_bump":z=20
break
case"bump":z=21
break
default:z=22
break}break
case 9:p=J.P(r,1)
o=O.aw()
t.c=o
t.b.Y(0,p,o)
z=1
break
case 10:n=O.aZ(J.P(r,1))
t.c.r.sq(0,V.d7(n))
z=1
break
case 11:n=O.aZ(J.P(r,1))
t.c.x.sq(0,V.d7(n))
z=1
break
case 12:n=O.aZ(J.P(r,1))
t.c.z.sq(0,V.d7(n))
z=1
break
case 13:n=O.aZ(J.P(r,1))
p=n.length
if(p!==1)H.o(P.n("Shininess may only have 1 number."))
o=t.c.z
if(0>=p){x=H.c(n,0)
z=1
break}o.sa6(n[0])
z=1
break
case 14:n=O.aZ(J.P(r,1))
p=n.length
if(p!==1)H.o(P.n("Alpha may only have 1 number."))
o=t.c.db
if(0>=p){x=H.c(n,0)
z=1
break}o.seq(0,n[0])
z=1
break
case 15:n=O.aZ(J.P(r,1))
p=n.length
if(p!==1)H.o(P.n("Alpha may only have 1 number."))
o=t.c.db
if(0>=p){x=H.c(n,0)
z=1
break}p=n[0]
if(typeof p!=="number"){x=H.k(p)
z=1
break}o.seq(0,1-p)
z=1
break
case 16:z=23
return P.a6(t.cj(J.P(r,1),b),$async$a0)
case 23:z=1
break
case 17:z=24
return P.a6(t.ck(J.P(r,1),b),$async$a0)
case 24:z=1
break
case 18:z=25
return P.a6(t.cl(J.P(r,1),b),$async$a0)
case 25:z=1
break
case 19:z=26
return P.a6(t.ci(J.P(r,1),b),$async$a0)
case 26:z=1
break
case 20:z=27
return P.a6(t.bt(J.P(r,1),b),$async$a0)
case 27:z=1
break
case 21:z=28
return P.a6(t.bt(J.P(r,1),b),$async$a0)
case 28:z=1
break
case 22:z=1
break
case 8:w=2
z=6
break
case 4:w=3
l=v
q=H.ac(l)
p=P.n('Line: "'+H.i(a)+'": '+H.i(q))
throw H.d(p)
z=6
break
case 3:z=2
break
case 6:case 1:return P.aj(x,y)
case 2:return P.ai(v,y)}})
return P.ak($async$a0,y)},
cj:function(a,b){var z=0,y=P.al(null),x=this,w
var $async$cj=P.am(function(c,d){if(c===1)return P.ai(d,y)
while(true)switch(z){case 0:w=b+"/"+a
x.c.r.sa5(x.a.ak(w))
return P.aj(null,y)}})
return P.ak($async$cj,y)},
ck:function(a,b){var z=0,y=P.al(null),x=this,w
var $async$ck=P.am(function(c,d){if(c===1)return P.ai(d,y)
while(true)switch(z){case 0:w=b+"/"+a
x.c.x.sa5(x.a.ak(w))
return P.aj(null,y)}})
return P.ak($async$ck,y)},
cl:function(a,b){var z=0,y=P.al(null),x=this,w
var $async$cl=P.am(function(c,d){if(c===1)return P.ai(d,y)
while(true)switch(z){case 0:w=b+"/"+a
x.c.z.sa5(x.a.ak(w))
return P.aj(null,y)}})
return P.ak($async$cl,y)},
ci:function(a,b){var z=0,y=P.al(null),x=this,w
var $async$ci=P.am(function(c,d){if(c===1)return P.ai(d,y)
while(true)switch(z){case 0:w=b+"/"+a
x.c.db.sa5(x.a.ak(w))
return P.aj(null,y)}})
return P.ak($async$ci,y)},
bt:function(a,b){var z=0,y=P.al(null),x=this,w
var $async$bt=P.am(function(c,d){if(c===1)return P.ai(d,y)
while(true)switch(z){case 0:w=b+"/"+a
x.c.Q.sa5(x.a.ak(w))
return P.aj(null,y)}})
return P.ak($async$bt,y)}},
fT:{"^":"a;a,0b"},
m1:{"^":"a;a,0b,0c,0d,0dm:e<,0f,0r,0x,0y,0z,0Q",
ghO:function(){var z,y,x
z=this.Q
y=z.y.a
x=y.length
if(x===1){if(0>=x)return H.c(y,0)
return y[0]}return z},
an:function(a,b,c){var z=0,y=P.al(null),x=this
var $async$an=P.am(function(d,e){if(d===1)return P.ai(e,y)
while(true)switch(z){case 0:z=2
return P.a6(x.am(H.b(a.split("\n"),[P.m]),b,!1),$async$an)
case 2:return P.aj(null,y)}})
return P.ak($async$an,y)},
am:function(a,b,c){H.t(a,"$isf",[P.m],"$asf")
return this.ip(a,b,!1)},
ip:function(a,b,c){var z=0,y=P.al(null),x,w=2,v,u=[],t=this,s,r,q,p,o
var $async$am=P.am(function(d,e){if(d===1){v=e
z=w}while(true)switch(z){case 0:s=0
case 3:if(!J.cX(s,a.length)){z=5
break}w=7
q=s
if(q>>>0!==q||q>=a.length){x=H.c(a,q)
z=1
break}z=10
return P.a6(t.a0(a[q],b,!1),$async$am)
case 10:w=2
z=9
break
case 7:w=6
o=v
r=H.ac(o)
q=P.n("Line "+H.i(J.ck(s,1))+": "+H.i(r))
throw H.d(q)
z=9
break
case 6:z=2
break
case 9:case 4:s=J.ck(s,1)
z=3
break
case 5:case 1:return P.aj(x,y)
case 2:return P.ai(v,y)}})
return P.ak($async$am,y)},
a0:function(a,b,c){H.Q(a)
return this.im(a,b,!1)},
im:function(a,b,c){var z=0,y=P.al(null),x,w=2,v,u=[],t=this,s,r,q,p,o,n,m,l,k,j
var $async$a0=P.am(function(d,e){if(d===1){v=e
z=w}while(true)switch(z){case 0:w=4
s=J.e1(a,"#")
if(J.dZ(s,0))a=J.e2(a,0,s)
a=J.cZ(a)
if(J.aI(a)<=0){z=1
break}r=O.fY(a)
if(J.aI(r)<1){z=1
break}case 7:switch(J.P(r,0)){case"v":z=9
break
case"vt":z=10
break
case"vn":z=11
break
case"p":z=12
break
case"l":z=13
break
case"f":z=14
break
case"mtllib":z=15
break
case"usemtl":z=16
break
case"g":z=17
break
case"o":z=18
break
default:z=19
break}break
case 9:p=O.aZ(J.P(r,1))
o=p.length
if(o<3)H.o(P.n("Positions must have at least 3 numbers."))
if(o>4)H.o(P.n("Positions must have at most than 4 numbers."))
if(o===4){if(3>=o){x=H.c(p,3)
z=1
break}o=p[3]
if(!$.p.$2(o,1))H.o(P.n("Currently, non-one w values in positions are not supported."))}o=t.b
n=p.length
if(0>=n){x=H.c(p,0)
z=1
break}m=p[0]
if(1>=n){x=H.c(p,1)
z=1
break}l=p[1]
if(2>=n){x=H.c(p,2)
z=1
break}l=[m,l,p[2]]
l=new O.fT(new V.a1(l[0],l[1],l[2]))
l.b=H.b([],[F.aG])
C.a.h(o,l)
z=1
break
case 10:p=O.aZ(J.P(r,1))
o=p.length
if(o<2)H.o(P.n("Textures must have at least 2 numbers."))
if(o>3)H.o(P.n("Textures must have at most than 3 numbers."))
if(o===3){if(2>=o){x=H.c(p,2)
z=1
break}o=p[2]
if(!$.p.$2(o,0))H.o(P.n("Currently, non-zero z values in textures are not supported."))}o=t.c
n=p.length
if(0>=n){x=H.c(p,0)
z=1
break}m=p[0]
if(1>=n){x=H.c(p,1)
z=1
break}m=[m,p[1]]
C.a.h(o,new V.N(m[0],m[1]))
z=1
break
case 11:p=O.aZ(J.P(r,1))
o=p.length
if(o!==3)H.o(P.n("Normals must have exactly 3 numbers."))
n=t.d
if(0>=o){x=H.c(p,0)
z=1
break}m=p[0]
if(1>=o){x=H.c(p,1)
z=1
break}l=p[1]
if(2>=o){x=H.c(p,2)
z=1
break}C.a.h(n,new V.G(m,l,p[2]))
z=1
break
case 12:t.fW(J.P(r,1))
z=1
break
case 13:t.fV(J.P(r,1))
z=1
break
case 14:t.fU(J.P(r,1))
z=1
break
case 15:z=20
return P.a6(t.bu(J.P(r,1),b,!1),$async$a0)
case 20:z=1
break
case 16:o=J.P(r,1)
t.x=t.e.j(0,o)
t.bA()
z=1
break
case 17:t.r=J.P(r,1)
t.bA()
z=1
break
case 18:t.r=J.P(r,1)
t.bA()
z=1
break
case 19:z=1
break
case 8:w=2
z=6
break
case 4:w=3
j=v
q=H.ac(j)
o=P.n('Line: "'+H.i(a)+'": '+H.i(q))
throw H.d(o)
z=6
break
case 3:z=2
break
case 6:case 1:return P.aj(x,y)
case 2:return P.ai(v,y)}})
return P.ak($async$a0,y)},
bA:function(){var z,y,x
if(this.z==null||this.y.a.c.length!==0){z=F.dv()
this.y=z
z=E.av(null,!0,null,"",z,null)
this.z=z
this.Q.y.h(0,z)
for(z=this.b,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)C.a.sk(z[x].b,0)}this.z.sa1(this.x)
this.z.a=this.r},
c5:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=a.split("/")
y=z.length
if(0>=y)return H.c(z,0)
x=P.dT(z[0],null,null)
w=this.b.length
if(typeof x!=="number")return x.S()
if(x<-w||x>w||x===0)throw H.d(P.n("The position index, "+x+", was out of range [-"+w+".."+w+"] or 0."))
if(x<0)x=w+x+1;--x
if(y>1){v=z[1]
if(v!=null&&v.length>0){u=P.dT(v,null,null)
t=this.c
w=t.length
if(typeof u!=="number")return u.S()
if(u<-w||u>w||u===0)throw H.d(P.n("The texture index, "+u+", was out of range [-"+w+".."+w+"] or 0."))
if(u<0)u=w+u+1
s=u-1
if(s<0||s>=w)return H.c(t,s)
r=t[s]}else r=null}else r=null
if(y>2){v=z[2]
if(v!=null&&v.length>0){q=P.dT(v,null,null)
y=this.d
w=y.length
if(typeof q!=="number")return q.S()
if(q<-w||q>w||q===0)throw H.d(P.n("The normal index, "+q+", was out of range [-"+w+".."+w+"] or 0."))
if(q<0)q=w+q+1
t=q-1
if(t<0||t>=w)return H.c(y,t)
p=y[t]}else p=null}else p=null
y=this.b
if(x<0||x>=y.length)return H.c(y,x)
o=y[x]
for(y=o.b,t=y.length,n=0;n<y.length;y.length===t||(0,H.A)(y),++n){m=y[n]
if(J.S(m.y,r)&&J.S(m.r,p))return m}m=F.dG(null,null,null,null,null,null,null,null,0)
y=o.a
if(!J.S(m.f,y)){m.f=y
y=m.a
if(y!=null)y.a4()}if(!J.S(m.y,r)){m.y=r
y=m.a
if(y!=null)y.a4()}p=p==null?null:p.v(0,Math.sqrt(p.E(p)))
if(!J.S(m.r,p)){m.r=p
y=m.a
if(y!=null)y.a4()}this.y.a.h(0,m)
C.a.h(o.b,m)
return m},
fW:function(a){var z,y,x,w
z=O.cS(a)
y=H.b([],[F.aG])
x=z.length
for(w=0;w<x;++w){if(w>=z.length)return H.c(z,w)
C.a.h(y,this.c5(z[w]))}this.y.b.hy(y)},
fV:function(a){var z,y,x,w
z=O.cS(a)
y=H.b([],[F.aG])
x=z.length
for(w=0;w<x;++w){if(w>=z.length)return H.c(z,w)
C.a.h(y,this.c5(z[w]))}this.y.c.hx(y)},
fU:function(a){var z,y,x,w
z=O.cS(a)
y=H.b([],[F.aG])
x=z.length
for(w=0;w<x;++w){if(w>=z.length)return H.c(z,w)
C.a.h(y,this.c5(z[w]))}this.y.d.cr(y)},
bu:function(a,b,c){var z=0,y=P.al(null),x=this,w
var $async$bu=P.am(function(d,e){if(d===1)return P.ai(e,y)
while(true)switch(z){case 0:z=2
return P.a6(O.c8(b+"/"+a,x.a,!1),$async$bu)
case 2:w=e
x.e.aW(0,w)
return P.aj(null,y)}})
return P.ak($async$bu,y)}}}],["","",,X,{"^":"",e8:{"^":"a;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.e8))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)},
m:{"^":"mP<"}},eA:{"^":"a;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eA))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}},eB:{"^":"x;c,a,0b"},ii:{"^":"a;0a,0b,0c,0d",
ii:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.eB(a,this)
y.b=!0
return z.A(y)},
ic:function(a){var z,y
this.c=a.b
this.d.O(0,a.a)
z=this.b
if(z==null)return!1
y=new X.eB(a,this)
y.b=!0
return z.A(y)}},eG:{"^":"dq;x,y,c,d,e,a,0b"},ix:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aC:function(a,b){var z,y,x,w,v,u,t,s,r
z=new P.aW(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.l()
v=b.b
u=this.ch
if(typeof v!=="number")return v.l()
t=y.a
if(typeof t!=="number")return t.p()
y=y.b
if(typeof y!=="number")return y.p()
s=new V.N(t+x*w,y+v*u)
u=this.a.gbD()
r=new X.c7(a,new V.N(0,0),this.x,this.y,this.z,u,s,z,this)
r.b=!0
this.z=z
this.x=s
return r},
cR:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.A(this.aC(a,b))
return!0},
bg:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.ex()
if(typeof z!=="number")return z.er()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.A(this.aC(a,b))
return!0},
bf:function(a,b){var z=this.d
if(z==null)return!1
z.A(this.aC(a,b))
return!0},
ij:function(a){return!1},
fG:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aW(Date.now(),!1)
y=this.f
x=new X.eG(c,a,this.a.gbD(),b,z,this)
x.b=!0
y.A(x)
this.y=z
this.x=new V.N(0,0)}},b4:{"^":"a;a,b,c",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.b4))return!1
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
return z+(this.c?"Shift+":"")}},c7:{"^":"dq;x,y,z,Q,ch,c,d,e,a,0b"},iN:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
cb:function(a,b,c){var z,y,x
z=new P.aW(Date.now(),!1)
y=this.a.gbD()
x=new X.c7(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cR:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.A(this.cb(a,b,!0))
return!0},
bg:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.ex()
if(typeof z!=="number")return z.er()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.A(this.cb(a,b,!0))
return!0},
bf:function(a,b){var z=this.d
if(z==null)return!1
z.A(this.cb(a,b,!1))
return!0},
ik:function(a,b){return!1}},dq:{"^":"x;"},f8:{"^":"dq;x,y,z,Q,ch,c,d,e,a,0b"},jZ:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
aC:function(a,b){var z,y,x,w
H.t(a,"$isf",[V.N],"$asf")
z=new P.aW(Date.now(),!1)
y=a.length>0?a[0]:new V.N(0,0)
x=this.a.gbD()
w=new X.f8(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
ih:function(a){var z
H.t(a,"$isf",[V.N],"$asf")
z=this.b
if(z==null)return!1
z.A(this.aC(a,!0))
return!0},
ie:function(a){var z
H.t(a,"$isf",[V.N],"$asf")
z=this.c
if(z==null)return!1
z.A(this.aC(a,!0))
return!0},
ig:function(a){var z
H.t(a,"$isf",[V.N],"$asf")
z=this.d
if(z==null)return!1
z.A(this.aC(a,!1))
return!0}},ke:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gbD:function(){var z=this.a
return V.eV(0,0,(z&&C.k).gdL(z).c,C.k.gdL(z).d)},
dh:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eA(z,new X.b4(y,a.altKey,a.shiftKey))},
aV:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.b4(y,a.altKey,a.shiftKey)},
cp:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.b4(y,a.altKey,a.shiftKey)},
aE:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.B()
v=z.top
if(typeof x!=="number")return x.B()
return new V.N(y-w,x-v)},
b8:function(a){return new V.Z(a.movementX,a.movementY)},
cm:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.b([],[V.N])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v){u=x[v]
t=C.h.ao(u.pageX)
C.h.ao(u.pageY)
s=z.left
C.h.ao(u.pageX)
C.a.h(y,new V.N(t-s,C.h.ao(u.pageY)-z.top))}return y},
aA:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.e8(z,new X.b4(y,a.altKey,a.shiftKey))},
ce:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.B()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.B()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
iW:[function(a){this.f=!0},"$1","gfC",4,0,7],
iQ:[function(a){this.f=!1},"$1","gfu",4,0,7],
iT:[function(a){H.j(a,"$isaF")
if(this.f&&this.ce(a))a.preventDefault()},"$1","gfz",4,0,5],
iY:[function(a){var z
H.j(a,"$isbH")
if(!this.f)return
z=this.dh(a)
if(this.b.ii(z))a.preventDefault()},"$1","gfE",4,0,14],
iX:[function(a){var z
H.j(a,"$isbH")
if(!this.f)return
z=this.dh(a)
if(this.b.ic(z))a.preventDefault()},"$1","gfD",4,0,14],
j_:[function(a){var z,y,x,w
H.j(a,"$isaF")
z=this.a
z.focus()
this.f=!0
this.aV(a)
if(this.x){y=this.aA(a)
x=this.b8(a)
if(this.d.cR(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aA(a)
w=this.aE(a)
if(this.c.cR(y,w))a.preventDefault()},"$1","gfH",4,0,5],
j1:[function(a){var z,y,x
H.j(a,"$isaF")
this.aV(a)
z=this.aA(a)
if(this.x){y=this.b8(a)
if(this.d.bg(z,y))a.preventDefault()
return}if(this.r)return
x=this.aE(a)
if(this.c.bg(z,x))a.preventDefault()},"$1","gfJ",4,0,5],
iV:[function(a){var z,y,x
H.j(a,"$isaF")
if(!this.ce(a)){this.aV(a)
z=this.aA(a)
if(this.x){y=this.b8(a)
if(this.d.bg(z,y))a.preventDefault()
return}if(this.r)return
x=this.aE(a)
if(this.c.bg(z,x))a.preventDefault()}},"$1","gfB",4,0,5],
j0:[function(a){var z,y,x
H.j(a,"$isaF")
this.aV(a)
z=this.aA(a)
if(this.x){y=this.b8(a)
if(this.d.bf(z,y))a.preventDefault()
return}if(this.r)return
x=this.aE(a)
if(this.c.bf(z,x))a.preventDefault()},"$1","gfI",4,0,5],
iU:[function(a){var z,y,x
H.j(a,"$isaF")
if(!this.ce(a)){this.aV(a)
z=this.aA(a)
if(this.x){y=this.b8(a)
if(this.d.bf(z,y))a.preventDefault()
return}if(this.r)return
x=this.aE(a)
if(this.c.bf(z,x))a.preventDefault()}},"$1","gfA",4,0,5],
j2:[function(a){var z,y
H.j(a,"$isbT")
this.aV(a)
z=new V.Z((a&&C.u).ghL(a),C.u.ghM(a)).v(0,180)
if(this.x){if(this.d.ij(z))a.preventDefault()
return}if(this.r)return
y=this.aE(a)
if(this.c.ik(z,y))a.preventDefault()},"$1","gfK",4,0,37],
j3:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.aA(this.y)
v=this.aE(this.y)
this.d.fG(w,v,x)}},"$1","gfL",4,0,7],
jb:[function(a){var z
H.j(a,"$isbk")
this.a.focus()
this.f=!0
this.cp(a)
z=this.cm(a)
if(this.e.ih(z))a.preventDefault()},"$1","gfT",4,0,12],
j9:[function(a){var z
H.j(a,"$isbk")
this.cp(a)
z=this.cm(a)
if(this.e.ie(z))a.preventDefault()},"$1","gfR",4,0,12],
ja:[function(a){var z
H.j(a,"$isbk")
this.cp(a)
z=this.cm(a)
if(this.e.ig(z))a.preventDefault()},"$1","gfS",4,0,12]}}],["","",,D,{"^":"",cr:{"^":"a;0a,0b,0c,0d",
gt:function(){var z=this.d
if(z==null){z=D.I()
this.d=z}return z},
bq:function(a){var z
H.j(a,"$isx")
z=this.d
if(!(z==null))z.A(a)},
sq:function(a,b){var z,y
if(b==null)b=new V.w(1,1,1)
if(!this.c.u(0,b)){z=this.c
this.c=b
y=new D.F("color",z,b,this,[V.w])
y.b=!0
this.bq(y)}},
$isX:1,
$isaK:1,
m:{
en:function(a,b){var z=new D.cr()
z.c=new V.w(1,1,1)
z.a=new V.G(0,0,1)
z.sq(0,a)
return z}}},X:{"^":"a;",$isaK:1},io:{"^":"a8;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gt:function(){var z=this.Q
if(z==null){z=D.I()
this.Q=z}return z},
bq:function(a){var z=this.Q
if(!(z==null))z.A(a)},
fF:[function(a){var z
H.j(a,"$isx")
z=this.ch
if(!(z==null))z.A(a)},function(){return this.fF(null)},"iZ","$1","$0","gdn",0,2,0],
j4:[function(a){var z,y,x
H.t(a,"$ise",[D.X],"$ase")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.A)(a),++y){x=a[y]
if(x==null||this.f9(x))return!1}return!0},"$1","gfM",4,0,39],
iN:[function(a,b){var z,y,x,w,v,u,t,s,r
z=D.X
H.t(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gdn(),w={func:1,ret:-1,args:[D.x]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=H.j(b[u],"$isX")
if(t instanceof D.cr)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bf()
s.d=0
t.d=s}H.l(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}z=new D.c_(a,b,this,[z])
z.b=!0
this.bq(z)},"$2","gfq",8,0,18],
j6:[function(a,b){var z,y,x,w,v,u
z=D.X
H.t(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gdn(),w=0;w<b.length;b.length===y||(0,H.A)(b),++w){v=H.j(b[w],"$isX")
if(v instanceof D.cr)C.a.O(this.e,v)
u=v.d
if(u==null){u=new D.bf()
u.d=0
v.d=u}u.O(0,x)}z=new D.c0(a,b,this,[z])
z.b=!0
this.bq(z)},"$2","gfO",8,0,18],
f9:function(a){var z=C.a.b_(this.e,a)
return z},
$ase:function(){return[D.X]},
$asa8:function(){return[D.X]}},j_:{"^":"a;",$isX:1,$isaK:1},jD:{"^":"a;",$isX:1,$isaK:1},jP:{"^":"a;",$isX:1,$isaK:1},jQ:{"^":"a;",$isX:1,$isaK:1},jR:{"^":"a;",$isX:1,$isaK:1}}],["","",,V,{"^":"",
mR:[function(a,b){if(typeof b!=="number")return b.B()
if(typeof a!=="number")return H.k(a)
return Math.abs(b-a)<=1e-9},"$2","iK",8,0,36],
mH:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.h.ew(a-b,z)
return(a<0?a+z:a)+b},
O:function(a,b,c){if(a==null)return C.i.af("null",c)
return C.i.af(C.h.ep($.p.$2(a,0)?0:a,b),c+b+1)},
bu:function(a,b,c){var z,y,x,w,v,u
H.t(a,"$isf",[P.y],"$asf")
z=H.b([],[P.m])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.A)(a),++w){v=V.O(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.c(z,u)
C.a.Y(z,u,C.i.af(z[u],x))}return z},
dX:function(a,b){return C.h.iz(Math.pow(b,C.B.cL(Math.log(H.ma(a))/Math.log(b))))},
w:{"^":"a;a,b,c",
p:function(a,b){var z,y,x
z=C.h.p(this.a,b.gb2())
y=C.h.p(this.b,b.gaM())
x=C.h.p(this.c,b.gaY())
if(z<0)z=0
else if(z>1)z=1
if(y<0)y=0
else if(y>1)y=1
if(x<0)x=0
else if(x>1)x=1
return new V.w(z,y,x)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.w))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"},
m:{
d7:function(a){var z,y,x
H.t(a,"$isf",[P.y],"$asf")
z=J.b9(a)
y=z.j(a,0)
x=z.j(a,1)
z=z.j(a,2)
if(typeof y!=="number")return y.S()
if(y<0)y=0
else if(y>1)y=1
if(typeof x!=="number")return x.S()
if(x<0)x=0
else if(x>1)x=1
if(typeof z!=="number")return z.S()
if(z<0)z=0
else if(z>1)z=1
return new V.w(y,x,z)}}},
aV:{"^":"a;a,b,c,d",
p:function(a,b){var z,y,x,w
z=C.h.p(this.a,b.gb2())
y=C.h.p(this.b,b.gaM())
x=C.h.p(this.c,b.gaY())
w=C.h.p(this.d,b.gjg(b))
if(z<0)z=0
else if(z>1)z=1
if(y<0)y=0
else if(y>1)y=1
if(x<0)x=0
else if(x>1)x=1
if(w<0)w=0
else if(w>1)w=1
return new V.aV(z,y,x,w)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aV))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"}},
eK:{"^":"a;a,b,c,d,e,f,r,x,y",
a9:function(a,b){var z=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.y])
return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eK))return!1
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
i:function(a){var z,y,x,w,v,u,t,s
z=[P.y]
y=V.bu(H.b([this.a,this.d,this.r],z),3,0)
x=V.bu(H.b([this.b,this.e,this.x],z),3,0)
w=V.bu(H.b([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.c(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.c(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.c(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.c(y,1)
s=" "+y[1]+", "
if(1>=u)return H.c(x,1)
s=s+x[1]+", "
if(1>=t)return H.c(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.c(y,2)
z=" "+y[2]+", "
if(2>=u)return H.c(x,2)
z=z+x[2]+", "
if(2>=t)return H.c(w,2)
return s+(z+w[2]+"]")}},
aE:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a9:function(a,b){var z=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.y])
return z},
cN:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.k(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.k(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.k(u)
t=this.c
if(typeof t!=="number")return t.l()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.k(r)
q=this.d
if(typeof q!=="number")return q.l()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.l()
if(typeof k!=="number")return H.k(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.l()
if(typeof i!=="number")return H.k(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.k(g)
f=this.Q
if(typeof f!=="number")return f.l()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.k(d)
c=this.ch
if(typeof c!=="number")return c.l()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.p.$2(a2,0))return V.b3()
a3=1/a2
a4=-w
a5=-i
return V.aY((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
l:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.k(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.k(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.l()
if(typeof u!=="number")return H.k(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.l()
if(typeof s!=="number")return H.k(s)
r=a7.b
if(typeof r!=="number")return H.k(r)
q=a7.f
if(typeof q!=="number")return H.k(q)
p=a7.z
if(typeof p!=="number")return H.k(p)
o=a7.cy
if(typeof o!=="number")return H.k(o)
n=a7.c
if(typeof n!=="number")return H.k(n)
m=a7.r
if(typeof m!=="number")return H.k(m)
l=a7.Q
if(typeof l!=="number")return H.k(l)
k=a7.db
if(typeof k!=="number")return H.k(k)
j=a7.d
if(typeof j!=="number")return H.k(j)
i=a7.x
if(typeof i!=="number")return H.k(i)
h=a7.ch
if(typeof h!=="number")return H.k(h)
g=a7.dx
if(typeof g!=="number")return H.k(g)
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
return V.aY(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cV:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.k(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.k(w)
v=this.c
u=a.c
if(typeof v!=="number")return v.l()
if(typeof u!=="number")return H.k(u)
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
bn:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.k(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.k(w)
v=this.c
u=a.c
if(typeof v!=="number")return v.l()
if(typeof u!=="number")return H.k(u)
t=this.d
if(typeof t!=="number")return H.k(t)
s=this.e
if(typeof s!=="number")return s.l()
r=this.f
if(typeof r!=="number")return r.l()
q=this.r
if(typeof q!=="number")return q.l()
p=this.x
if(typeof p!=="number")return H.k(p)
o=this.y
if(typeof o!=="number")return o.l()
n=this.z
if(typeof n!=="number")return n.l()
m=this.Q
if(typeof m!=="number")return m.l()
l=this.ch
if(typeof l!=="number")return H.k(l)
return new V.a1(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aE))return!1
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
i:function(a){return this.G()},
ec:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.y]
y=V.bu(H.b([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bu(H.b([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bu(H.b([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bu(H.b([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.c(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.c(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.c(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.c(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.c(y,1)
q=q+y[1]+", "
if(1>=t)return H.c(x,1)
q=q+x[1]+", "
if(1>=s)return H.c(w,1)
q=q+w[1]+", "
if(1>=r)return H.c(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.c(y,2)
u=u+y[2]+", "
if(2>=t)return H.c(x,2)
u=u+x[2]+", "
if(2>=s)return H.c(w,2)
u=u+w[2]+", "
if(2>=r)return H.c(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.c(y,3)
q=q+y[3]+", "
if(3>=t)return H.c(x,3)
q=q+x[3]+", "
if(3>=s)return H.c(w,3)
q=q+w[3]+", "
if(3>=r)return H.c(v,3)
return u+(q+v[3]+"]")},
G:function(){return this.ec("",3,0)},
w:function(a){return this.ec(a,3,0)},
m:{
aY:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aE(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
b3:function(){return V.aY(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
c6:function(a,b,c){return V.aY(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
dm:function(a,b,c,d){return V.aY(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
eL:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aY(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
dl:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aY(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
dk:function(a,b,c){var z,y,x,w,v
z=c.v(0,Math.sqrt(c.E(c)))
y=b.bc(z)
x=y.v(0,Math.sqrt(y.E(y)))
w=z.bc(x)
v=new V.G(a.a,a.b,a.c)
return V.aY(x.a,w.a,z.a,x.H(0).E(v),x.b,w.b,z.b,w.H(0).E(v),x.c,w.c,z.c,z.H(0).E(v),0,0,0,1)}}},
N:{"^":"a;a,b",
p:function(a,b){var z,y,x,w
z=this.a
y=b.a
if(typeof z!=="number")return z.p()
if(typeof y!=="number")return H.k(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.p()
if(typeof w!=="number")return H.k(w)
return new V.N(z+y,x+w)},
B:function(a,b){var z,y,x,w
z=this.a
y=b.a
if(typeof z!=="number")return z.B()
if(typeof y!=="number")return H.k(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.B()
if(typeof w!=="number")return H.k(w)
return new V.N(z-y,x-w)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.N))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+"]"}},
a1:{"^":"a;a,b,c",
p:function(a,b){var z,y,x,w,v,u
z=this.a
y=b.a
if(typeof z!=="number")return z.p()
if(typeof y!=="number")return H.k(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.p()
if(typeof w!=="number")return H.k(w)
v=this.c
u=b.c
if(typeof v!=="number")return v.p()
if(typeof u!=="number")return H.k(u)
return new V.a1(z+y,x+w,v+u)},
B:function(a,b){var z,y,x,w,v,u
z=this.a
y=b.a
if(typeof z!=="number")return z.B()
if(typeof y!=="number")return H.k(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.B()
if(typeof w!=="number")return H.k(w)
v=this.c
u=b.c
if(typeof v!=="number")return v.B()
if(typeof u!=="number")return H.k(u)
return new V.a1(z-y,x-w,v-u)},
u:function(a,b){var z
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
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}},
b6:{"^":"a;a,b,c,d",
p:function(a,b){return new V.b6(C.h.p(this.a,b.gbY(b)),C.h.p(this.b,b.gbZ(b)),C.h.p(this.c,b.gc_(b)),C.h.p(this.d,b.gju(b)))},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b6))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"}},
eU:{"^":"a;a,b,c,d",
gaw:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eU))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"},
m:{
eV:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eU(a,b,c,d)}}},
Z:{"^":"a;a,b",
hZ:[function(a){return Math.sqrt(this.E(this))},"$0","gk",1,0,19],
E:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.k(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.k(w)
return z*y+x*w},
p:function(a,b){var z,y,x
z=this.a
y=b.gaH(b)
if(typeof z!=="number")return z.p()
y=C.h.p(z,y)
z=this.b
x=b.gaI(b)
if(typeof z!=="number")return z.p()
return new V.Z(y,C.h.p(z,x))},
l:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.l()
y=this.b
if(typeof y!=="number")return y.l()
return new V.Z(z*b,y*b)},
v:function(a,b){var z,y
if($.p.$2(b,0))return new V.Z(0,0)
z=this.a
if(typeof z!=="number")return z.v()
y=this.b
if(typeof y!=="number")return y.v()
return new V.Z(z/b,y/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+"]"}},
G:{"^":"a;a,b,c",
hZ:[function(a){return Math.sqrt(this.E(this))},"$0","gk",1,0,19],
E:function(a){var z,y,x,w,v,u
z=this.a
y=a.a
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.k(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.k(w)
v=this.c
u=a.c
if(typeof v!=="number")return v.l()
if(typeof u!=="number")return H.k(u)
return z*y+x*w+v*u},
bc:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
if(typeof z!=="number")return z.l()
if(typeof y!=="number")return H.k(y)
x=this.c
w=a.b
if(typeof x!=="number")return x.l()
if(typeof w!=="number")return H.k(w)
v=a.a
if(typeof v!=="number")return H.k(v)
u=this.a
if(typeof u!=="number")return u.l()
return new V.G(z*y-x*w,x*v-u*y,u*w-z*v)},
p:function(a,b){var z,y,x,w,v,u
z=this.a
y=b.a
if(typeof z!=="number")return z.p()
if(typeof y!=="number")return H.k(y)
x=this.b
w=b.b
if(typeof x!=="number")return x.p()
if(typeof w!=="number")return H.k(w)
v=this.c
u=b.c
if(typeof v!=="number")return v.p()
if(typeof u!=="number")return H.k(u)
return new V.G(z+y,x+w,v+u)},
H:function(a){var z,y,x
z=this.a
if(typeof z!=="number")return z.H()
y=this.b
if(typeof y!=="number")return y.H()
x=this.c
if(typeof x!=="number")return x.H()
return new V.G(-z,-y,-x)},
v:function(a,b){var z,y,x
if($.p.$2(b,0))return new V.G(0,0,0)
z=this.a
if(typeof z!=="number")return z.v()
y=this.b
if(typeof y!=="number")return y.v()
x=this.c
if(typeof x!=="number")return x.v()
return new V.G(z/b,y/b,x/b)},
ee:function(){if(!$.p.$2(0,this.a))return!1
if(!$.p.$2(0,this.b))return!1
if(!$.p.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.G))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}}}],["","",,U,{"^":"",hB:{"^":"ea;0a,0b,0c,0d,0e,0f,0r,0x,0y",
c6:function(a){var z,y,x
z=this.a
y=this.c
x=this.b
if(z)return V.mH(a,y,x)
else{if(a<y)z=y
else z=a>x?x:a
return z}},
gt:function(){var z=this.y
if(z==null){z=D.I()
this.y=z}return z},
W:function(a){var z=this.y
if(!(z==null))z.A(a)},
scX:function(a,b){var z=this.a
if(z!==b){this.a=b
z=new D.F("wrap",z,b,this,[P.a7])
z.b=!0
this.W(z)}},
scP:function(a){var z,y
z=this.b
if(!$.p.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.c6(z)}z=new D.F("maximumLocation",y,this.b,this,[P.y])
z.b=!0
this.W(z)}},
scQ:function(a){var z,y
z=this.c
if(!$.p.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.c6(z)}z=new D.F("minimumLocation",y,this.c,this,[P.y])
z.b=!0
this.W(z)}},
sal:function(a,b){var z,y
b=this.c6(b)
z=this.d
if(!$.p.$2(z,b)){y=this.d
this.d=b
z=new D.F("location",y,b,this,[P.y])
z.b=!0
this.W(z)}},
seg:function(a){var z,y,x
z=this.e
if(!$.p.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.F("maximumVelocity",y,a,this,[P.y])
z.b=!0
this.W(z)}},
sT:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.p.$2(z,a)){x=this.f
this.f=a
z=new D.F("velocity",x,a,this,[P.y])
z.b=!0
this.W(z)}},
sdO:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.p.$2(z,a)){y=this.x
this.x=a
z=new D.F("dampening",y,a,this,[P.y])
z.b=!0
this.W(z)}},
ax:function(a,b){var z,y,x,w
z=this.f
if($.p.$2(z,0)){z=this.r
z=!$.p.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sal(0,this.d+y*b)
z=this.x
if(!$.p.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sT(y)}},
m:{
ec:function(){var z=new U.hB()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},ed:{"^":"ax;0a,0b",
gt:function(){var z=this.b
if(z==null){z=D.I()
this.b=z}return z},
sN:function(a,b){var z,y,x
if(b==null)b=V.b3()
if(!J.S(this.a,b)){z=this.a
this.a=b
y=new D.F("matrix",z,b,this,[V.aE])
y.b=!0
x=this.b
if(!(x==null))x.A(y)}},
bX:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ed))return!1
return J.S(this.a,b.a)},
i:function(a){return"Constant: "+this.a.w("          ")},
m:{
b1:function(a){var z=new U.ed()
z.sN(0,a)
return z}}},eq:{"^":"a8;0e,0f,0r,0a,0b,0c,0d",
gt:function(){var z=this.e
if(z==null){z=D.I()
this.e=z}return z},
W:[function(a){var z
H.j(a,"$isx")
z=this.e
if(!(z==null))z.A(a)},function(){return this.W(null)},"aT","$1","$0","gbs",0,2,0],
iM:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.ax
H.t(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gbs(),w={func:1,ret:-1,args:[D.x]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=b[u]
if(t!=null){s=t.gt()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.c_(a,b,this,[z])
z.b=!0
this.W(z)},"$2","gfp",8,0,20],
j5:[function(a,b){var z,y,x,w,v
z=U.ax
H.t(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gbs(),w=0;w<b.length;b.length===y||(0,H.A)(b),++w){v=b[w]
if(v!=null)v.gt().O(0,x)}z=new D.c0(a,b,this,[z])
z.b=!0
this.W(z)},"$2","gfN",8,0,20],
bX:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.S()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.at(z,z.length,0,[H.u(z,0)]),x=null;z.D();){y=z.d
if(y!=null){w=y.bX(0,b,c)
if(w!=null)x=x==null?w:w.l(0,x)}}this.f=x==null?V.b3():x
z=this.e
if(!(z==null))z.b3(0)}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eq))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.c(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.c(w,y)
if(!J.S(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$ase:function(){return[U.ax]},
$asa8:function(){return[U.ax]},
$isax:1},ax:{"^":"ea;"},kf:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gt:function(){var z=this.fx
if(z==null){z=D.I()
this.fx=z}return z},
W:[function(a){var z
H.j(a,"$isx")
z=this.fx
if(!(z==null))z.A(a)},function(){return this.W(null)},"aT","$1","$0","gbs",0,2,0],
hB:function(a){var z,y
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.b
if(y==null){y=D.I()
z.b=y
z=y}else z=y
z.h(0,this.gfl())
z=this.a.c
y=z.d
if(y==null){y=D.I()
z.d=y
z=y}else z=y
z.h(0,this.gfm())
z=this.a.c
y=z.c
if(y==null){y=D.I()
z.c=y
z=y}else z=y
z.h(0,this.gfn())
z=this.a.d
y=z.f
if(y==null){y=D.I()
z.f=y
z=y}else z=y
z.h(0,this.gfi())
z=this.a.d
y=z.d
if(y==null){y=D.I()
z.d=y
z=y}else z=y
z.h(0,this.gfj())
z=this.a.e
y=z.b
if(y==null){y=D.I()
z.b=y
z=y}else z=y
z.h(0,this.gh8())
z=this.a.e
y=z.d
if(y==null){y=D.I()
z.d=y
z=y}else z=y
z.h(0,this.gh7())
z=this.a.e
y=z.c
if(y==null){y=D.I()
z.c=y
z=y}else z=y
z.h(0,this.gh6())
return!0},
as:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.H()
z=-z}if(this.r){if(typeof y!=="number")return y.H()
y=-y}return new V.Z(z,y)},
iJ:[function(a){a=H.h(H.j(a,"$isx"),"$isc7")
if(!J.S(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfl",4,0,3],
iK:[function(a){var z,y,x,w,v,u,t
a=H.h(H.j(a,"$isx"),"$isc7")
if(!this.cx)return
if(this.ch){z=a.d.B(0,a.y)
z=new V.Z(z.a,z.b)
z=z.E(z)
y=this.Q
if(typeof y!=="number")return H.k(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.B(0,a.y)
z=this.as(new V.Z(y.a,y.b).l(0,2).v(0,z.gaw()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.H()
x=this.y
if(typeof x!=="number")return H.k(x)
y.sT(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.H()
y=this.x
if(typeof y!=="number")return H.k(y)
x.sT(-z*10*y)}else{z=a.c
y=a.d
x=y.B(0,a.y)
w=this.as(new V.Z(x.a,x.b).l(0,2).v(0,z.gaw()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.k(u)
t=this.cy
if(typeof t!=="number")return H.k(t)
x.sal(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.k(v)
x=this.db
if(typeof x!=="number")return H.k(x)
t.sal(0,-u*v+x)
this.b.sT(0)
this.c.sT(0)
y=y.B(0,a.z)
this.dx=this.as(new V.Z(y.a,y.b).l(0,2).v(0,z.gaw()))}this.aT()},"$1","gfm",4,0,3],
iL:[function(a){var z,y,x
H.j(a,"$isx")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.E(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.H()
x=this.y
if(typeof x!=="number")return H.k(x)
z.sT(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.H()
z=this.x
if(typeof z!=="number")return H.k(z)
x.sT(-y*10*z)
this.aT()}},"$1","gfn",4,0,3],
iH:[function(a){if(H.h(H.j(a,"$isx"),"$iseG").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfi",4,0,3],
iI:[function(a){var z,y,x,w,v,u,t
a=H.h(H.j(a,"$isx"),"$isc7")
if(!J.S(this.d,a.x.b))return
z=a.c
y=a.d
x=y.B(0,a.y)
w=this.as(new V.Z(x.a,x.b).l(0,2).v(0,z.gaw()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.k(u)
t=this.cy
if(typeof t!=="number")return H.k(t)
x.sal(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.k(v)
x=this.db
if(typeof x!=="number")return H.k(x)
t.sal(0,-u*v+x)
this.b.sT(0)
this.c.sT(0)
y=y.B(0,a.z)
this.dx=this.as(new V.Z(y.a,y.b).l(0,2).v(0,z.gaw()))
this.aT()},"$1","gfj",4,0,3],
jf:[function(a){H.j(a,"$isx")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gh8",4,0,3],
je:[function(a){var z,y,x,w,v,u,t
a=H.h(H.j(a,"$isx"),"$isf8")
if(!this.cx)return
if(this.ch){z=a.d.B(0,a.y)
z=new V.Z(z.a,z.b)
z=z.E(z)
y=this.Q
if(typeof y!=="number")return H.k(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.B(0,a.y)
z=this.as(new V.Z(y.a,y.b).l(0,2).v(0,z.gaw()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.H()
x=this.y
if(typeof x!=="number")return H.k(x)
y.sT(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.H()
y=this.x
if(typeof y!=="number")return H.k(y)
x.sT(-z*10*y)}else{z=a.c
y=a.d
x=y.B(0,a.y)
w=this.as(new V.Z(x.a,x.b).l(0,2).v(0,z.gaw()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.k(u)
t=this.cy
if(typeof t!=="number")return H.k(t)
x.sal(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.k(v)
x=this.db
if(typeof x!=="number")return H.k(x)
t.sal(0,-u*v+x)
this.b.sT(0)
this.c.sT(0)
y=y.B(0,a.z)
this.dx=this.as(new V.Z(y.a,y.b).l(0,2).v(0,z.gaw()))}this.aT()},"$1","gh7",4,0,3],
jd:[function(a){var z,y,x
H.j(a,"$isx")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.E(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.H()
x=this.y
if(typeof x!=="number")return H.k(x)
z.sT(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.H()
z=this.x
if(typeof z!=="number")return H.k(z)
x.sT(-y*10*z)
this.aT()}},"$1","gh6",4,0,3],
bX:function(a,b,c){var z,y,x
z=this.dy
y=b.e
if(typeof z!=="number")return z.S()
if(z<y){this.dy=y
x=b.y
this.c.ax(0,x)
this.b.ax(0,x)
this.fr=V.eL(this.b.d).l(0,V.dl(this.c.d))}return this.fr},
$isax:1}}],["","",,M,{"^":"",hC:{"^":"a8;0e,0f,0a,0b,0c,0d",
gt:function(){var z=this.f
if(z==null){z=D.I()
this.f=z}return z},
a_:[function(a){var z
H.j(a,"$isx")
z=this.f
if(!(z==null))z.A(a)},function(){return this.a_(null)},"d6","$1","$0","gU",0,2,0],
j7:[function(a,b){var z,y,x,w,v,u,t,s,r
z=M.aL
H.t(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gU(),w={func:1,ret:-1,args:[D.x]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=b[u]
if(t!=null){s=t.gt()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.c_(a,b,this,[z])
z.b=!0
this.a_(z)},"$2","gfP",8,0,22],
j8:[function(a,b){var z,y,x,w,v
z=M.aL
H.t(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gU(),w=0;w<b.length;b.length===y||(0,H.A)(b),++w){v=b[w]
if(v!=null)v.gt().O(0,x)}z=new D.c0(a,b,this,[z])
z.b=!0
this.a_(z)},"$2","gfQ",8,0,22],
a8:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.at(z,z.length,0,[H.u(z,0)]);z.D();){y=z.d
if(!(y==null))y.a8(a)}this.e=!1},
$ase:function(){return[M.aL]},
$asa8:function(){return[M.aL]},
$isaL:1},hE:{"^":"a;0a,0b,0c,0d,0e,0f",
gt:function(){var z=this.f
if(z==null){z=D.I()
this.f=z}return z},
a_:[function(a){var z
H.j(a,"$isx")
z=this.f
if(!(z==null))z.A(a)},function(){return this.a_(null)},"d6","$1","$0","gU",0,2,0],
sb9:function(a){var z,y
if(a==null)a=new X.i5()
z=this.a
if(z!==a){if(z!=null)z.gt().O(0,this.gU())
y=this.a
this.a=a
a.gt().h(0,this.gU())
z=new D.F("camera",y,this.a,this,[X.cp])
z.b=!0
this.a_(z)}},
sbj:function(a,b){var z,y
if(b==null)b=X.db(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gt().O(0,this.gU())
y=this.b
this.b=b
b.gt().h(0,this.gU())
z=new D.F("target",y,this.b,this,[X.dz])
z.b=!0
this.a_(z)}},
sa1:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gt().O(0,this.gU())
y=this.c
this.c=a
if(a!=null)a.gt().h(0,this.gU())
z=new D.F("technique",y,this.c,this,[O.cd])
z.b=!0
this.a_(z)}},
a8:function(a){a.cT(this.c)
this.b.R(a)
this.a.R(a)
this.d.ax(0,a)
this.d.a8(a)
this.a.ap(a)
this.b.toString
a.cS()},
$isaL:1},hT:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
a_:[function(a){var z
H.j(a,"$isx")
z=this.x
if(!(z==null))z.A(a)},function(){return this.a_(null)},"d6","$1","$0","gU",0,2,0],
iR:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.T
H.t(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gU(),w={func:1,ret:-1,args:[D.x]},v=[w],u=0;u<b.length;b.length===y||(0,H.A)(b),++u){t=b[u]
if(t!=null){if(t.ga2()==null){s=new D.bf()
s.d=0
t.sa2(s)}s=t.ga2()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.b([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.c_(a,b,this,[z])
z.b=!0
this.a_(z)},"$2","gfv",8,0,8],
iS:[function(a,b){var z,y,x,w,v,u
z=E.T
H.t(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gU(),w=0;w<b.length;b.length===y||(0,H.A)(b),++w){v=b[w]
if(v!=null){if(v.ga2()==null){u=new D.bf()
u.d=0
v.sa2(u)}v.ga2().O(0,x)}}z=new D.c0(a,b,this,[z])
z.b=!0
this.a_(z)},"$2","gfw",8,0,8],
sb9:function(a){var z,y
if(a==null)a=X.eP(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null)z.gt().O(0,this.gU())
y=this.a
this.a=a
a.gt().h(0,this.gU())
z=new D.F("camera",y,this.a,this,[X.cp])
z.b=!0
this.a_(z)}},
sbj:function(a,b){var z,y
if(b==null)b=X.db(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gt().O(0,this.gU())
y=this.b
this.b=b
b.gt().h(0,this.gU())
z=new D.F("target",y,this.b,this,[X.dz])
z.b=!0
this.a_(z)}},
gt:function(){var z=this.x
if(z==null){z=D.I()
this.x=z}return z},
a8:function(a){var z
a.cT(this.c)
this.b.R(a)
this.a.R(a)
for(z=this.d.a,z=new J.at(z,z.length,0,[H.u(z,0)]);z.D();)z.d.ax(0,a)
for(z=this.d.a,z=new J.at(z,z.length,0,[H.u(z,0)]);z.D();)z.d.a8(a)
this.a.toString
a.cy.aL()
a.db.aL()
this.b.toString
a.cS()},
$isaL:1},aL:{"^":"a;"}}],["","",,A,{"^":"",e4:{"^":"a;a,b,c"},hn:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
J:function(a,b){var z
for(z=this.a.length-1;z>=0;--z);return-1},
hN:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
dQ:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},eJ:{"^":"du;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0at,0aj,0bE,0dS,0bF,0bG,0dT,0dU,0bH,0bI,0dV,0dW,0bJ,0bK,0dX,0dY,0bL,0dZ,0e_,0bM,0e0,0e1,0bN,0bO,0bP,0e2,0e3,0bQ,0bR,0e4,0e5,0bS,0e6,0cF,0e7,0cG,0e8,0cH,0e9,0cI,0ea,0cJ,0eb,0cK,a,b,0c,0d,0e,0f,0r,0x,0y",
eK:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.z=a1
z=new P.cc("")
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
a1.hb(z)
a1.hi(z)
a1.hc(z)
a1.hq(z)
a1.hr(z)
a1.hk(z)
a1.hv(z)
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
z=new P.cc("")
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
v.hf(z)
v.ha(z)
v.hd(z)
v.hg(z)
v.ho(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.hm(z)
v.hn(z)}v.hj(z)
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
p=H.b([],[P.m])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.C(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.he(z)
v.hl(z)
v.hp(z)
v.hs(z)
v.ht(z)
v.hu(z)
v.hh(z)}r=z.a+="// === Main ===\n"
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
n="vec4("+C.a.C(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.ed(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a1.fr)this.id=H.h(this.y.n(0,"invViewMat"),"$isaO")
if(y)this.dy=H.h(this.y.n(0,"objMat"),"$isaO")
if(w)this.fr=H.h(this.y.n(0,"viewObjMat"),"$isaO")
this.fy=H.h(this.y.n(0,"projViewObjMat"),"$isaO")
if(a1.x2)this.k1=H.h(this.y.n(0,"txt2DMat"),"$isdF")
if(a1.y1)this.k2=H.h(this.y.n(0,"txtCubeMat"),"$isaO")
if(a1.y2)this.k3=H.h(this.y.n(0,"colorMat"),"$isaO")
this.r1=H.b([],[A.aO])
y=a1.at
if(y>0){this.k4=H.j(this.y.n(0,"bendMatCount"),"$isJ")
for(m=0;m<y;++m){x=this.r1
w=this.y
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.o(P.n("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.h(l,"$isaO"))}}y=a1.a
if(y!==C.b){this.r2=H.h(this.y.n(0,"emissionClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.c:this.rx=H.h(this.y.n(0,"emissionTxt"),"$isaz")
this.x1=H.h(this.y.n(0,"nullEmissionTxt"),"$isJ")
break
case C.d:this.ry=H.h(this.y.n(0,"emissionTxt"),"$isaq")
this.x1=H.h(this.y.n(0,"nullEmissionTxt"),"$isJ")
break}}y=a1.b
if(y!==C.b){this.x2=H.h(this.y.n(0,"ambientClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.c:this.y1=H.h(this.y.n(0,"ambientTxt"),"$isaz")
this.at=H.h(this.y.n(0,"nullAmbientTxt"),"$isJ")
break
case C.d:this.y2=H.h(this.y.n(0,"ambientTxt"),"$isaq")
this.at=H.h(this.y.n(0,"nullAmbientTxt"),"$isJ")
break}}y=a1.c
if(y!==C.b){this.aj=H.h(this.y.n(0,"diffuseClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.c:this.bE=H.h(this.y.n(0,"diffuseTxt"),"$isaz")
this.bF=H.h(this.y.n(0,"nullDiffuseTxt"),"$isJ")
break
case C.d:this.dS=H.h(this.y.n(0,"diffuseTxt"),"$isaq")
this.bF=H.h(this.y.n(0,"nullDiffuseTxt"),"$isJ")
break}}y=a1.d
if(y!==C.b){this.bG=H.h(this.y.n(0,"invDiffuseClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.c:this.dT=H.h(this.y.n(0,"invDiffuseTxt"),"$isaz")
this.bH=H.h(this.y.n(0,"nullInvDiffuseTxt"),"$isJ")
break
case C.d:this.dU=H.h(this.y.n(0,"invDiffuseTxt"),"$isaq")
this.bH=H.h(this.y.n(0,"nullInvDiffuseTxt"),"$isJ")
break}}y=a1.e
if(y!==C.b){this.bK=H.h(this.y.n(0,"shininess"),"$isU")
this.bI=H.h(this.y.n(0,"specularClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.c:this.dV=H.h(this.y.n(0,"specularTxt"),"$isaz")
this.bJ=H.h(this.y.n(0,"nullSpecularTxt"),"$isJ")
break
case C.d:this.dW=H.h(this.y.n(0,"specularTxt"),"$isaq")
this.bJ=H.h(this.y.n(0,"nullSpecularTxt"),"$isJ")
break}}switch(a1.f){case C.b:break
case C.f:break
case C.c:this.dX=H.h(this.y.n(0,"bumpTxt"),"$isaz")
this.bL=H.h(this.y.n(0,"nullBumpTxt"),"$isJ")
break
case C.d:this.dY=H.h(this.y.n(0,"bumpTxt"),"$isaq")
this.bL=H.h(this.y.n(0,"nullBumpTxt"),"$isJ")
break}if(a1.dy){this.dZ=H.h(this.y.n(0,"envSampler"),"$isaq")
this.e_=H.h(this.y.n(0,"nullEnvTxt"),"$isJ")
y=a1.r
if(y!==C.b){this.bM=H.h(this.y.n(0,"reflectClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.c:this.e0=H.h(this.y.n(0,"reflectTxt"),"$isaz")
this.bN=H.h(this.y.n(0,"nullReflectTxt"),"$isJ")
break
case C.d:this.e1=H.h(this.y.n(0,"reflectTxt"),"$isaq")
this.bN=H.h(this.y.n(0,"nullReflectTxt"),"$isJ")
break}}y=a1.x
if(y!==C.b){this.bO=H.h(this.y.n(0,"refraction"),"$isU")
this.bP=H.h(this.y.n(0,"refractClr"),"$isH")
switch(y){case C.b:break
case C.f:break
case C.c:this.e2=H.h(this.y.n(0,"refractTxt"),"$isaz")
this.bQ=H.h(this.y.n(0,"nullRefractTxt"),"$isJ")
break
case C.d:this.e3=H.h(this.y.n(0,"refractTxt"),"$isaq")
this.bQ=H.h(this.y.n(0,"nullRefractTxt"),"$isJ")
break}}}y=a1.y
if(y!==C.b){this.bR=H.h(this.y.n(0,"alpha"),"$isU")
switch(y){case C.b:break
case C.f:break
case C.c:this.e4=H.h(this.y.n(0,"alphaTxt"),"$isaz")
this.bS=H.h(this.y.n(0,"nullAlphaTxt"),"$isJ")
break
case C.d:this.e5=H.h(this.y.n(0,"alphaTxt"),"$isaq")
this.bS=H.h(this.y.n(0,"nullAlphaTxt"),"$isJ")
break}}this.cF=H.b([],[A.fl])
this.cG=H.b([],[A.fm])
this.cH=H.b([],[A.fn])
this.cI=H.b([],[A.fo])
this.cJ=H.b([],[A.fp])
this.cK=H.b([],[A.fq])
if(a1.k2){y=a1.z
if(y>0){this.e6=H.j(this.y.n(0,"dirLightCount"),"$isJ")
for(m=0;m<y;++m){x=this.y
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(l,"$isH")
x=this.y
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isH")
x=this.cF;(x&&C.a).h(x,new A.fl(m,l,k))}}y=a1.Q
if(y>0){this.e7=H.j(this.y.n(0,"pntLightCount"),"$isJ")
for(m=0;m<y;++m){x=this.y
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(l,"$isH")
x=this.y
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isH")
x=this.y
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isH")
x=this.y
w="pntLights["+m+"].att0"
i=x.j(0,w)
if(i==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isU")
x=this.y
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isU")
x=this.y
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isU")
x=this.cG;(x&&C.a).h(x,new A.fm(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.e8=H.j(this.y.n(0,"spotLightCount"),"$isJ")
for(m=0;m<y;++m){x=this.y
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(l,"$isH")
x=this.y
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isH")
x=this.y
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isH")
x=this.y
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isH")
x=this.y
w="spotLights["+m+"].cutoff"
h=x.j(0,w)
if(h==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isU")
x=this.y
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isU")
x=this.y
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isU")
x=this.y
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isU")
x=this.y
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(d,"$isU")
x=this.cH;(x&&C.a).h(x,new A.fn(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.e9=H.j(this.y.n(0,"txtDirLightCount"),"$isJ")
for(m=0;m<y;++m){x=this.y
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(l,"$isH")
x=this.y
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isH")
x=this.y
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isH")
x=this.y
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isH")
x=this.y
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isH")
x=this.y
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isJ")
x=this.y
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isaz")
x=this.cI;(x&&C.a).h(x,new A.fo(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.ea=H.j(this.y.n(0,"txtPntLightCount"),"$isJ")
for(m=0;m<y;++m){x=this.y
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(l,"$isH")
x=this.y
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isH")
x=this.y
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isdF")
x=this.y
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isH")
x=this.y
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isJ")
x=this.y
w="txtPntLights["+m+"].att0"
g=x.j(0,w)
if(g==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isU")
x=this.y
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isU")
x=this.y
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isU")
x=this.y
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(d,"$isaq")
x=this.cJ;(x&&C.a).h(x,new A.fp(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.eb=H.j(this.y.n(0,"txtSpotLightCount"),"$isJ")
for(m=0;m<y;++m){x=this.y
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(l,"$isH")
x=this.y
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isH")
x=this.y
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isH")
x=this.y
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isH")
x=this.y
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isH")
x=this.y
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isJ")
x=this.y
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isH")
x=this.y
w="txtSpotLights["+m+"].tuScalar"
e=x.j(0,w)
if(e==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isU")
x=this.y
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(d,"$isU")
x=this.y
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(c,"$isU")
x=this.y
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(b,"$isU")
x=this.y
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(a,"$isU")
x=this.y
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.h(a0,"$isaz")
x=this.cK;(x&&C.a).h(x,new A.fq(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
ai:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.ez(c)
b.a.uniform1i(b.d,0)}},
ac:function(a,b,c){if(c==null||c.d<6)b.a.uniform1i(b.d,1)
else{a.cZ(c)
b.a.uniform1i(b.d,0)}},
m:{
iC:function(a,b){var z,y
z=a.aj
y=new A.eJ(b,z)
y.d3(b,z)
y.eK(a,b)
return y}}},iF:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,at,aj,bE",
hb:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.at+"];\n"
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
hi:function(a){var z
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
hc:function(a){var z
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
hq:function(a){var z,y
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
hr:function(a){var z,y
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
hk:function(a){var z
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
hv:function(a){var z
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
aB:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.c(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.c2(c,1))+"Txt;\n"
a.a=z
if(b===C.c)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
hf:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aB(a,z,"emission")
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
ha:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aB(a,z,"ambient")
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
hd:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aB(a,z,"diffuse")
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
hg:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aB(a,z,"invDiffuse")
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
ho:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aB(a,z,"specular")
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
hj:function(a){var z,y
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
hm:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aB(a,z,"reflect")
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
hn:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aB(a,z,"refract")
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
he:function(a){var z,y
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
hl:function(a){var z,y
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
hp:function(a){var z,y
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
hs:function(a){var z,y,x
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
ht:function(a){var z,y,x
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
hu:function(a){var z,y,x
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
hh:function(a){var z
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
i:function(a){return this.aj}},fl:{"^":"a;a,b,c"},fo:{"^":"a;a,b,c,d,e,f,r,x"},fm:{"^":"a;a,b,c,d,e,f,r"},fp:{"^":"a;a,b,c,d,e,f,r,x,y,z"},fn:{"^":"a;a,b,c,d,e,f,r,x,y,z"},fq:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},du:{"^":"d_;",
d3:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
ed:function(a,b,c){var z,y,x
this.c=b
this.d=c
this.e=this.di(b,35633)
this.f=this.di(this.d,35632)
z=this.a
y=z.createProgram()
this.r=y
z.attachShader(y,this.e)
z.attachShader(this.r,this.f)
z.linkProgram(this.r)
if(!H.h3(z.getProgramParameter(this.r,35714))){x=z.getProgramInfoLog(this.r)
z.deleteProgram(this.r)
H.o(P.n("Failed to link shader: "+H.i(x)))}this.h1()
this.h3()},
R:function(a){a.a.useProgram(this.r)
this.x.hN()},
di:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.h3(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.d(P.n("Error compiling shader '"+H.i(y)+"': "+H.i(x)))}return y},
h1:function(){var z,y,x,w,v,u
z=H.b([],[A.e4])
y=this.a
x=H.W(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.k(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.e4(y,v.name,u))}this.x=new A.hn(z)},
h3:function(){var z,y,x,w,v,u
z=H.b([],[A.ab])
y=this.a
x=H.W(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.k(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.hK(v.type,v.size,v.name,u))}this.y=new A.k7(z)},
aR:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.J(z,y,b,c)
else return A.dE(z,y,b,a,c)},
fa:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.az(z,y,b,c)
else return A.dE(z,y,b,a,c)},
fb:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.aq(z,y,b,c)
else return A.dE(z,y,b,a,c)},
bB:function(a,b){return new P.fB(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
hK:function(a,b,c,d){switch(a){case 5120:return this.aR(b,c,d)
case 5121:return this.aR(b,c,d)
case 5122:return this.aR(b,c,d)
case 5123:return this.aR(b,c,d)
case 5124:return this.aR(b,c,d)
case 5125:return this.aR(b,c,d)
case 5126:return new A.U(this.a,this.r,c,d)
case 35664:return new A.k2(this.a,this.r,c,d)
case 35665:return new A.H(this.a,this.r,c,d)
case 35666:return new A.k5(this.a,this.r,c,d)
case 35667:return new A.k3(this.a,this.r,c,d)
case 35668:return new A.k4(this.a,this.r,c,d)
case 35669:return new A.k6(this.a,this.r,c,d)
case 35674:return new A.k9(this.a,this.r,c,d)
case 35675:return new A.dF(this.a,this.r,c,d)
case 35676:return new A.aO(this.a,this.r,c,d)
case 35678:return this.fa(b,c,d)
case 35680:return this.fb(b,c,d)
case 35670:throw H.d(this.bB("BOOL",c))
case 35671:throw H.d(this.bB("BOOL_VEC2",c))
case 35672:throw H.d(this.bB("BOOL_VEC3",c))
case 35673:throw H.d(this.bB("BOOL_VEC4",c))
default:throw H.d(P.n("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}},cq:{"^":"a;a,b",
i:function(a){return this.b}},eX:{"^":"du;0z,0Q,0ch,0cx,0cy,0db,a,b,0c,0d,0e,0f,0r,0x,0y"},ab:{"^":"a;"},k7:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.j(0,b)
if(z==null)throw H.d(P.n("Required uniform value, "+b+", was not defined or used in shader."))
return z},
J:function(a,b){var z
for(z=this.a.length-1;z>=0;--z);return-1},
i:function(a){return this.G()},
hR:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.A)(z),++w)x+=z[w].i(0)+a
return x},
G:function(){return this.hR("\n")}},J:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform1i: "+H.i(this.c)}},k3:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform2i: "+H.i(this.c)}},k4:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform3i: "+H.i(this.c)}},k6:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform4i: "+H.i(this.c)}},k1:{"^":"ab;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.i(this.c)},
m:{
dE:function(a,b,c,d,e){var z=new A.k1(a,b,c,e)
z.f=d
z.e=P.iv(d,0,!1,P.C)
return z}}},U:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform1f: "+H.i(this.c)}},k2:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform2f: "+H.i(this.c)}},H:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform3f: "+H.i(this.c)}},k5:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform4f: "+H.i(this.c)}},k9:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}},dF:{"^":"ab;a,b,c,d",
ah:function(a){var z=new Float32Array(H.bU(H.t(a,"$isf",[P.y],"$asf")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.i(this.c)}},aO:{"^":"ab;a,b,c,d",
ah:function(a){var z=new Float32Array(H.bU(H.t(a,"$isf",[P.y],"$asf")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.i(this.c)}},az:{"^":"ab;a,b,c,d",
ez:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.i(this.c)}},aq:{"^":"ab;a,b,c,d",
cZ:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}}],["","",,F,{"^":"",
mg:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
e=new F.mh()
if(f<3)return
z=F.dv()
y=-6.283185307179586/f
x=H.b([],[F.aG])
w=z.a
v=new V.G(0,0,1)
v=v.v(0,Math.sqrt(v.E(v)))
C.a.h(x,w.hz(new V.b6(a,-1,-1,-1),new V.aV(1,1,1,1),new V.a1(0,0,d),new V.G(0,0,1),new V.N(0.5,0.5),v))
for(u=0;u<=f;++u){t=y*u
s=Math.sin(t)
r=Math.cos(t)
q=e.$1(u/f)
w=z.a
if(typeof q!=="number")return H.k(q)
v=new V.G(s,r,1).v(0,Math.sqrt(s*s+r*r+1))
if(s<0)p=0
else p=s>1?1:s
o=r<0
if(o)n=0
else n=r>1?1:r
if(o)o=0
else o=r>1?1:r
w.toString
m=F.dG(new V.b6(a,-1,-1,-1),null,new V.aV(p,n,o,1),new V.a1(s*q,r*q,d),new V.G(0,0,1),new V.N(s*0.5+0.5,r*0.5+0.5),v,null,0)
w.h(0,m)
C.a.h(x,m)}z.d.cr(x)
return z},
mh:{"^":"q:40;",
$1:function(a){return 1}},
aD:{"^":"a;0a,0b,0c,0d,0e",
iD:function(a,b,c){if(!c)this.d=null
if(!b)this.e=null},
cW:function(a){return this.iD(a,!0,!0)},
gcE:function(){return this.a==null||this.b==null||this.c==null},
f2:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.G(0,0,0)
if(y!=null)v=v.p(0,y)
if(x!=null)v=v.p(0,x)
if(w!=null)v=v.p(0,w)
if(v.ee())return
return v.v(0,Math.sqrt(v.E(v)))},
f5:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.B(0,y)
z=new V.G(z.a,z.b,z.c)
v=z.v(0,Math.sqrt(z.E(z)))
z=w.B(0,y)
z=new V.G(z.a,z.b,z.c)
z=v.bc(z.v(0,Math.sqrt(z.E(z))))
return z.v(0,Math.sqrt(z.E(z)))},
cB:function(){if(this.d!=null)return!0
var z=this.f2()
if(z==null){z=this.f5()
if(z==null)return!1}this.d=z
this.a.a.a4()
return!0},
f1:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.G(0,0,0)
if(y!=null)v=v.p(0,y)
if(x!=null)v=v.p(0,x)
if(w!=null)v=v.p(0,w)
if(v.ee())return
return v.v(0,Math.sqrt(v.E(v)))},
f4:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
y=o.b
if(typeof z!=="number")return z.B()
if(typeof y!=="number")return H.k(y)
n=z-y
if($.p.$2(n,0)){z=r.B(0,u)
z=new V.G(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.E(z)))
z=o.a
p=p.a
if(typeof z!=="number")return z.B()
if(typeof p!=="number")return H.k(p)
if(z-p<0)m=m.H(0)}else{y=q.b
if(typeof y!=="number")return H.k(y)
l=(z-y)/n
y=r.B(0,u)
z=y.a
if(typeof z!=="number")return z.l()
w=y.b
if(typeof w!=="number")return w.l()
y=y.c
if(typeof y!=="number")return y.l()
v=u.a
if(typeof v!=="number")return H.k(v)
t=u.b
if(typeof t!=="number")return H.k(t)
s=u.c
if(typeof s!=="number")return H.k(s)
s=new V.a1(z*l+v,w*l+t,y*l+s).B(0,x)
s=new V.G(s.a,s.b,s.c)
m=s.v(0,Math.sqrt(s.E(s)))
o=o.a
p=p.a
if(typeof o!=="number")return o.B()
if(typeof p!=="number")return H.k(p)
q=q.a
if(typeof q!=="number")return H.k(q)
if((o-p)*l+p-q<0)m=m.H(0)}z=this.d
if(z!=null){k=z.v(0,Math.sqrt(z.E(z)))
z=k.bc(m)
z=z.v(0,Math.sqrt(z.E(z))).bc(k)
m=z.v(0,Math.sqrt(z.E(z)))}return m},
cz:function(){if(this.e!=null)return!0
var z=this.f1()
if(z==null){z=this.f4()
if(z==null)return!1}this.e=z
this.a.a.a4()
return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
w:function(a){var z,y
if(this.gcE())return a+"disposed"
z=a+C.i.af(J.ad(this.a.e),0)+", "+C.i.af(J.ad(this.b.e),0)+", "+C.i.af(J.ad(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
G:function(){return this.w("")},
m:{
hW:function(a,b,c){var z,y,x
z=new F.aD()
y=a.a
if(y==null)H.o(P.n("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.o(P.n("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.a4()
return z}}},
cB:{"^":"a;0a,0b",
gcE:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
w:function(a){if(this.gcE())return a+"disposed"
return a+C.i.af(J.ad(this.a.e),0)+", "+C.i.af(J.ad(this.b.e),0)},
G:function(){return this.w("")},
m:{
ip:function(a,b){var z,y,x
z=new F.cB()
y=a.a
if(y==null)H.o(P.n("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.o(P.n("May not create a line with vertices attached to different shapes."))
z.a=a
C.a.h(a.c.b,z)
z.b=b
C.a.h(b.c.c,z)
C.a.h(z.a.a.c.b,z)
z.a.a.a4()
return z}}},
cE:{"^":"a;0a",
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
w:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.i.af(J.ad(z.e),0)},
G:function(){return this.w("")}},
eW:{"^":"a;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.I()
this.e=z}return z},
aZ:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aZ()||!1
if(!this.a.aZ())y=!1
z=this.e
if(!(z==null))z.b3(0)
return y},
dI:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aB()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aR().a)!==0)++w
if((x&$.$get$aQ().a)!==0)++w
if((x&$.$get$aS().a)!==0)++w
if((x&$.$get$aT().a)!==0)++w
if((x&$.$get$bm().a)!==0)++w
if((x&$.$get$bn().a)!==0)++w
if((x&$.$get$b7().a)!==0)++w
if((x&$.$get$aP().a)!==0)++w
v=b.gd_(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.y
t=H.b(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.b(y,[Z.e7])
for(r=0,q=0;q<w;++q){p=b.hA(q)
o=p.gd_(p)
C.a.Y(s,q,new Z.e7(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.c(y,n)
m=y[n].i_(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.Y(t,l,m[k]);++l}}r+=o}H.t(t,"$isf",[x],"$asf")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bU(t)),35044)
y.bindBuffer(34962,null)
i=new Z.d2(new Z.fw(34962,j),s,b)
i.b=H.b([],[Z.cx])
if(this.b.b.length!==0){x=P.C
h=H.b([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.aF()
C.a.h(h,g.e)}f=Z.dH(y,34963,H.t(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.cx(0,h.length,f))}if(this.c.b.length!==0){x=P.C
h=H.b([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.aF()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.c(g,q)
g=g[q].b
g.a.a.aF()
C.a.h(h,g.e)}f=Z.dH(y,34963,H.t(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.cx(1,h.length,f))}if(this.d.b.length!==0){x=P.C
h=H.b([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.aF()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.c(g,q)
g=g[q].b
g.a.a.aF()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.c(g,q)
g=g[q].c
g.a.a.aF()
C.a.h(h,g.e)}f=Z.dH(y,34963,H.t(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.cx(4,h.length,f))}return i},
i:function(a){var z=H.b([],[P.m])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.w("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.w("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.w("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.w("   "))}return C.a.C(z,"\n")},
a7:function(a){var z=this.e
if(!(z==null))z.A(a)},
a4:function(){return this.a7(null)},
m:{
dv:function(){var z,y
z=new F.eW()
y=new F.ki(z)
y.b=!1
y.c=H.b([],[F.aG])
z.a=y
y=new F.jv(z)
y.b=H.b([],[F.cE])
z.b=y
y=new F.ju(z)
y.b=H.b([],[F.cB])
z.c=y
y=new F.jt(z)
y.b=H.b([],[F.aD])
z.d=y
z.e=null
return z}}},
jt:{"^":"a;a,0b",
cr:function(a){var z,y,x,w,v,u
H.t(a,"$isf",[F.aG],"$asf")
z=H.b([],[F.aD])
y=a.length
if(y>0){x=a[0]
for(w=2;w<y;++w){v=w-1
u=a.length
if(v>=u)return H.c(a,v)
v=a[v]
if(w>=u)return H.c(a,w)
u=a[w]
this.a.a.h(0,x)
this.a.a.h(0,v)
this.a.a.h(0,u)
C.a.h(z,F.hW(x,v,u))}}return z},
gk:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>=z.length)return H.c(z,b)
return z[b]},
J:function(a,b){return C.a.J(this.b,b)},
aZ:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.A)(z),++w)if(!z[w].cB())x=!1
return x},
cA:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.A)(z),++w)if(!z[w].cz())x=!1
return x},
i:function(a){return this.G()},
w:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].w(a))
return C.a.C(z,"\n")},
G:function(){return this.w("")}},
ju:{"^":"a;a,0b",
hx:function(a){var z,y,x,w,v
H.t(a,"$isf",[F.aG],"$asf")
z=H.b([],[F.cB])
y=a.length
for(x=1;x<y;x+=2){w=x-1
v=a.length
if(w>=v)return H.c(a,w)
w=a[w]
if(x>=v)return H.c(a,x)
v=a[x]
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.ip(w,v))}return z},
gk:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>=z.length)return H.c(z,b)
return z[b]},
J:function(a,b){return C.a.J(this.b,b)},
i:function(a){return this.G()},
w:function(a){var z,y,x,w
z=H.b([],[P.m])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.c(w,x)
C.a.h(z,w[x].w(a+(""+x+". ")))}return C.a.C(z,"\n")},
G:function(){return this.w("")}},
jv:{"^":"a;a,0b",
hy:function(a){var z,y,x,w,v
H.t(a,"$isf",[F.aG],"$asf")
z=H.b([],[F.cE])
y=a.length
for(x=0;x<y;++x){if(x>=a.length)return H.c(a,x)
w=a[x]
this.a.a.h(0,w)
v=new F.cE()
if(w.a==null)H.o(P.n("May not create a point with a vertex which is not attached to a shape."))
v.a=w
C.a.h(w.b.b,v)
C.a.h(v.a.a.b.b,v)
w=v.a.a.e
if(!(w==null))w.A(null)
C.a.h(z,v)}return z},
gk:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>=z.length)return H.c(z,b)
return z[b]},
J:function(a,b){return C.a.J(this.b,b)},
i:function(a){return this.G()},
w:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].w(a))
return C.a.C(z,"\n")},
G:function(){return this.w("")}},
aG:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
i_:function(a){var z,y
z=J.L(a)
if(z.u(a,$.$get$aB())){z=this.f
y=[P.y]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aR())){z=this.r
y=[P.y]
if(z==null)return H.b([0,1,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aQ())){z=this.x
y=[P.y]
if(z==null)return H.b([0,0,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aS())){z=this.y
y=[P.y]
if(z==null)return H.b([0,0],y)
else return H.b([z.a,z.b],y)}else if(z.u(a,$.$get$aT())){z=this.z
y=[P.y]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bm())){z=this.Q
y=[P.y]
if(z==null)return H.b([1,1,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bn())){z=this.Q
y=[P.y]
if(z==null)return H.b([1,1,1,1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else if(z.u(a,$.$get$b7()))return H.b([this.ch],[P.y])
else if(z.u(a,$.$get$aP())){z=this.cx
y=[P.y]
if(z==null)return H.b([-1,-1,-1,-1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else return H.b([],[P.y])},
cB:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.G(0,0,0)
this.d.M(0,new F.kp(z))
z=z.a
this.r=z.v(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.a4()
z=this.a.e
if(!(z==null))z.b3(0)}return!0},
cz:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.G(0,0,0)
this.d.M(0,new F.ko(z))
z=z.a
this.x=z.v(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.a4()
z=this.a.e
if(!(z==null))z.b3(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
w:function(a){var z,y,x
z=H.b([],[P.m])
C.a.h(z,C.i.af(J.ad(this.e),0))
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
C.a.h(z,V.O(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.C(z,", ")
return a+"{"+x+"}"},
G:function(){return this.w("")},
m:{
dG:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aG()
y=new F.kn(z)
y.b=H.b([],[F.cE])
z.b=y
y=new F.km(z)
x=[F.cB]
y.b=H.b([],x)
y.c=H.b([],x)
z.c=y
y=new F.kj(z)
x=[F.aD]
y.b=H.b([],x)
y.c=H.b([],x)
y.d=H.b([],x)
z.d=y
h=$.$get$ft()
z.e=0
y=$.$get$aB()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aR().a)!==0?e:null
z.x=(x&$.$get$aQ().a)!==0?b:null
z.y=(x&$.$get$aS().a)!==0?f:null
z.z=(x&$.$get$aT().a)!==0?g:null
z.Q=(x&$.$get$fu().a)!==0?c:null
z.ch=(x&$.$get$b7().a)!==0?i:0
z.cx=(x&$.$get$aP().a)!==0?a:null
return z}}},
kp:{"^":"q:9;a",
$1:function(a){var z,y
H.j(a,"$isaD")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.p(0,z)}}},
ko:{"^":"q:9;a",
$1:function(a){var z,y
H.j(a,"$isaD")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.p(0,z)}}},
ki:{"^":"a;a,0b,0c",
aF:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.c(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.d(P.n("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a4()
return!0},
dF:function(a,b,c,d,e,f,g,h,i){var z=F.dG(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bC:function(a,b,c,d,e,f){return this.dF(a,null,b,c,null,d,e,f,0)},
hz:function(a,b,c,d,e,f){return this.dF(a,null,b,c,d,e,f,null,0)},
gk:function(a){return this.c.length},
j:function(a,b){var z=this.c
if(b>=z.length)return H.c(z,b)
return z[b]},
J:function(a,b){return C.a.J(this.c,b)},
aZ:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)z[x].cB()
return!0},
cA:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)z[x].cz()
return!0},
hD:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
if(typeof u!=="number")return u.l()
t=v.b
if(typeof t!=="number")return t.l()
s=v.c
if(typeof s!=="number")return s.l()
s=v.v(0,Math.sqrt(u*u+t*t+s*s))
if(!J.S(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.A(null)}}}}return!0},
i:function(a){return this.G()},
w:function(a){var z,y,x,w
this.aF()
z=H.b([],[P.m])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].w(a))
return C.a.C(z,"\n")},
G:function(){return this.w("")}},
kj:{"^":"a;a,0b,0c,0d",
gk:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var z,y,x
z=this.b.length
if(b.S(0,z)){y=this.b
if(b>>>0!==b||b>=y.length)return H.c(y,b)
return y[b]}b=b.B(0,z)
x=this.c.length
if(b.S(0,x)){y=this.c
if(b>>>0!==b||b>=y.length)return H.c(y,b)
return y[b]}b=b.B(0,x)
y=this.d
if(b>>>0!==b||b>=y.length)return H.c(y,b)
return y[b]},
J:function(a,b){var z=C.a.J(this.b,b)
if(z>=0)return z
z=C.a.J(this.c,b)
if(z>=0)return z+this.b.length
z=C.a.J(this.d,b)
if(z>=0)return z+this.b.length+this.c.length
return-1},
M:function(a,b){H.l(b,{func:1,ret:-1,args:[F.aD]})
C.a.M(this.b,b)
C.a.M(this.c,new F.kk(this,b))
C.a.M(this.d,new F.kl(this,b))},
i:function(a){return this.G()},
w:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].w(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].w(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].w(a))
return C.a.C(z,"\n")},
G:function(){return this.w("")}},
kk:{"^":"q:9;a,b",
$1:function(a){H.j(a,"$isaD")
if(!J.S(a.a,this.a))this.b.$1(a)}},
kl:{"^":"q:9;a,b",
$1:function(a){var z
H.j(a,"$isaD")
z=this.a
if(!J.S(a.a,z)&&!J.S(a.b,z))this.b.$1(a)}},
km:{"^":"a;a,0b,0c",
gk:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b.length
if(b.b4(0,z)){y=this.c
x=b.B(0,z)
if(x>>>0!==x||x>=y.length)return H.c(y,x)
return y[x]}else{y=this.b
if(b>>>0!==b||b>=y.length)return H.c(y,b)
return y[b]}},
J:function(a,b){var z=C.a.J(this.b,b)
if(z>=0)return z
z=C.a.J(this.c,b)
if(z>=0)return z+this.b.length
return-1},
i:function(a){return this.G()},
w:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].w(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].w(a))
return C.a.C(z,"\n")},
G:function(){return this.w("")}},
kn:{"^":"a;a,0b",
gk:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.c(z,b)
return z[b]},
J:function(a,b){return C.a.J(this.b,b)},
i:function(a){return this.G()},
w:function(a){var z,y,x,w
z=H.b([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.h(z,y[w].w(a))
return C.a.C(z,"\n")},
G:function(){return this.w("")}}}],["","",,O,{"^":"",c5:{"^":"cd;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gt:function(){var z=this.dy
if(z==null){z=D.I()
this.dy=z}return z},
K:[function(a){var z
H.j(a,"$isx")
z=this.dy
if(!(z==null))z.A(a)},function(){return this.K(null)},"d7","$1","$0","gaq",0,2,0],
h_:[function(a){H.j(a,"$isx")
this.a=null
this.K(a)},function(){return this.h_(null)},"jc","$1","$0","gfZ",0,2,0],
iO:[function(a,b){var z=V.aE
z=new D.c_(a,H.t(b,"$ise",[z],"$ase"),this,[z])
z.b=!0
this.K(z)},"$2","gfs",8,0,23],
iP:[function(a,b){var z=V.aE
z=new D.c0(a,H.t(b,"$ise",[z],"$ase"),this,[z])
z.b=!0
this.K(z)},"$2","gft",8,0,23],
sad:function(a){var z,y
z=this.ch
if(z==null?a!=null:z!==a){if(z!=null)z.gt().O(0,this.gaq())
y=this.ch
this.ch=a
if(a!=null)a.gt().h(0,this.gaq())
z=new D.F("environment",y,this.ch,this,[T.dA])
z.b=!0
this.K(z)}},
df:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.e.a3(z.e.length+3,4)*4
x=C.e.a3(z.f.length+3,4)*4
w=C.e.a3(z.r.length+3,4)*4
v=C.e.a3(z.x.length+3,4)*4
u=C.e.a3(z.y.length+3,4)*4
t=C.e.a3(z.z.length+3,4)*4
s=C.e.a3(this.e.a.length+3,4)*4
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
a6=$.$get$aB()
if(c){z=$.$get$aR()
a6=new Z.bl(a6.a|z.a)}if(b){z=$.$get$aQ()
a6=new Z.bl(a6.a|z.a)}if(a){z=$.$get$aS()
a6=new Z.bl(a6.a|z.a)}if(a0){z=$.$get$aT()
a6=new Z.bl(a6.a|z.a)}if(a2){z=$.$get$aP()
a6=new Z.bl(a6.a|z.a)}return new A.iF(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
P:function(a,b){H.t(a,"$isf",[T.cK],"$asf")
if(b!=null)if(!C.a.b_(a,b)){b.sbd(0,a.length)
C.a.h(a,b)}},
ax:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.at(z,z.length,0,[H.u(z,0)]);z.D();){y=z.d
x=new V.G(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cV(x)}}},
em:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.df()
y=H.j(a.fr.j(0,z.aj),"$iseJ")
if(y==null){y=A.iC(z,a.a)
a.dG(y)}this.a=y
b.e=null
z=y}x=z.z
w=x.bE
z=b.e
if(!(z instanceof Z.d2)){b.e=null
z=null}if(z==null||!z.d.u(0,w)){z=x.r1
if(z)b.d.aZ()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.d
u.d.cA()
u.a.cA()
u=u.e
if(!(u==null))u.b3(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.a.hD()
t=t.e
if(!(t==null))t.b3(0)}r=b.d.dI(new Z.fx(a.a),w)
r.aJ($.$get$aB()).e=this.a.Q.c
if(z)r.aJ($.$get$aR()).e=this.a.cx.c
if(v)r.aJ($.$get$aQ()).e=this.a.ch.c
if(x.rx)r.aJ($.$get$aS()).e=this.a.cy.c
if(u)r.aJ($.$get$aT()).e=this.a.db.c
if(x.x1)r.aJ($.$get$aP()).e=this.a.dx.c
b.e=r}z=T.cK
q=H.b([],[z])
this.a.R(a)
if(x.fx){v=this.a
u=a.dx
u=u.gN(u)
v=v.dy
v.toString
v.ah(u.a9(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.gN(u)
t=a.dx
t=u.l(0,t.gN(t))
a.cx=t
u=t}v=v.fr
v.toString
v.ah(u.a9(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.giq()
t=a.dx
t=u.l(0,t.gN(t))
a.ch=t
u=t}v=v.fy
v.toString
v.ah(u.a9(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.k1
v.toString
v.ah(u.a9(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.k2
v.toString
v.ah(u.a9(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k3
v.toString
v.ah(C.C.a9(u,!0))}if(x.at>0){p=this.e.a.length
v=this.a.k4
v.a.uniform1i(v.d,p)
for(v=[P.y],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.c(t,o)
t=t[o]
u.toString
H.j(t,"$isaE")
u=u.r1
if(o>=u.length)return H.c(u,o)
u=u[o]
n=new Float32Array(H.bU(H.t(t.a9(0,!0),"$isf",v,"$asf")))
u.a.uniformMatrix4fv(u.d,!1,n)}}switch(x.a){case C.b:break
case C.f:v=this.a
u=this.f.f
v=v.r2
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.c:this.P(q,this.f.d)
v=this.a
u=this.f.d
v.ai(v.rx,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.P(q,this.f.e)
v=this.a
u=this.f.e
v.ac(v.ry,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}if(x.k2){switch(x.b){case C.b:break
case C.f:v=this.a
u=this.r.f
v=v.x2
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.c:this.P(q,this.r.d)
v=this.a
u=this.r.d
v.ai(v.y1,v.at,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.P(q,this.r.e)
v=this.a
u=this.r.e
v.ac(v.y2,v.at,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.c){case C.b:break
case C.f:v=this.a
u=this.x.f
v=v.aj
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.c:this.P(q,this.x.d)
v=this.a
u=this.x.d
v.ai(v.bE,v.bF,u)
u=this.a
v=this.x.f
u=u.aj
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.P(q,this.x.e)
v=this.a
u=this.x.e
v.ac(v.dS,v.bF,u)
u=this.a
v=this.x.f
u=u.aj
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.d){case C.b:break
case C.f:v=this.a
u=this.y.f
v=v.bG
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.c:this.P(q,this.y.d)
v=this.a
u=this.y.d
v.ai(v.dT,v.bH,u)
u=this.a
v=this.y.f
u=u.bG
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.P(q,this.y.e)
v=this.a
u=this.y.e
v.ac(v.dU,v.bH,u)
u=this.a
v=this.y.f
u=u.bG
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.b:break
case C.f:v=this.a
u=this.z.f
v=v.bI
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bK
u.a.uniform1f(u.d,s)
break
case C.c:this.P(q,this.z.d)
v=this.a
u=this.z.d
v.ai(v.dV,v.bJ,u)
u=this.a
v=this.z.f
u=u.bI
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bK
v.a.uniform1f(v.d,s)
break
case C.d:this.P(q,this.z.e)
v=this.a
u=this.z.e
v.ac(v.dW,v.bJ,u)
u=this.a
v=this.z.f
u=u.bI
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bK
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.e6
v.a.uniform1i(v.d,p)
v=a.db
m=v.gN(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.A)(v),++k){j=v[k]
t=this.a.cF
if(l>=t.length)return H.c(t,l)
i=t[l]
t=m.cV(j.a)
s=t.a
if(typeof s!=="number")return s.l()
h=t.b
if(typeof h!=="number")return h.l()
g=t.c
if(typeof g!=="number")return g.l()
g=t.v(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.e7
v.a.uniform1i(v.d,p)
v=a.db
m=v.gN(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.A)(v),++k){j=v[k]
t=this.a.cG
if(l>=t.length)return H.c(t,l)
i=t[l]
t=j.gbh(j)
s=i.b
h=t.gbY(t)
g=t.gbZ(t)
t=t.gc_(t)
s.a.uniform3f(s.d,h,g,t)
t=m.bn(j.gbh(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gq(j)
g=i.d
h=t.gb2()
s=t.gaM()
t=t.gaY()
g.a.uniform3f(g.d,h,s,t)
t=j.gcs()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gct()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gcu()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.e8
v.a.uniform1i(v.d,p)
v=a.db
m=v.gN(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.A)(v),++k){j=v[k]
t=this.a.cH
if(l>=t.length)return H.c(t,l)
i=t[l]
t=j.gbh(j)
s=i.b
h=t.gbY(t)
g=t.gbZ(t)
t=t.gc_(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gcD(j).jk()
g=i.c
h=t.gaH(t)
s=t.gaI(t)
t=t.gb0()
g.a.uniform3f(g.d,h,s,t)
t=m.bn(j.gbh(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gq(j)
s=i.e
h=t.gb2()
g=t.gaM()
t=t.gaY()
s.a.uniform3f(s.d,h,g,t)
t=j.gjj()
g=i.f
g.a.uniform1f(g.d,t)
t=j.gji()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gcs()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gct()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gcu()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.e9
v.a.uniform1i(v.d,p)
v=a.db
m=v.gN(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.A)(v),++k){j=v[k]
s=this.a.cI
if(l>=s.length)return H.c(s,l)
i=s[l]
s=j.gbk()
H.t(q,"$isf",t,"$asf")
if(!C.a.b_(q,s)){s.sbd(0,q.length)
C.a.h(q,s)}s=j.gcD(j)
h=i.d
g=s.gaH(s)
f=s.gaI(s)
s=s.gb0()
h.a.uniform3f(h.d,g,f,s)
s=j.giE()
f=i.b
g=s.gaH(s)
h=s.gaI(s)
s=s.gb0()
f.a.uniform3f(f.d,g,h,s)
s=j.gbi(j)
h=i.c
g=s.gaH(s)
f=s.gaI(s)
s=s.gb0()
h.a.uniform3f(h.d,g,f,s)
s=m.cV(j.gcD(j))
f=s.a
if(typeof f!=="number")return f.l()
g=s.b
if(typeof g!=="number")return g.l()
h=s.c
if(typeof h!=="number")return h.l()
h=s.v(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gq(j)
g=i.f
f=h.gb2()
s=h.gaM()
h=h.gaY()
g.a.uniform3f(g.d,f,s,h)
h=j.gbk()
s=h.gef(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gdl()
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.gdk())
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.ea
v.a.uniform1i(v.d,p)
v=a.db
m=v.gN(v)
for(v=this.dx.y,u=v.length,t=[P.y],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.A)(v),++k){j=v[k]
h=this.a.cJ
if(l>=h.length)return H.c(h,l)
i=h[l]
h=j.gbk()
H.t(q,"$isf",s,"$asf")
if(!C.a.b_(q,h)){h.sbd(0,q.length)
C.a.h(q,h)}e=m.l(0,j.gN(j))
h=j.gN(j).bn(new V.a1(0,0,0))
g=i.b
f=h.gbY(h)
d=h.gbZ(h)
h=h.gc_(h)
g.a.uniform3f(g.d,f,d,h)
h=e.bn(new V.a1(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.cN(0)
d=i.d
n=new Float32Array(H.bU(H.t(new V.eK(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a9(0,!0),"$isf",t,"$asf")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gq(j)
h=i.e
f=d.gb2()
g=d.gaM()
d=d.gaY()
h.a.uniform3f(h.d,f,g,d)
d=j.gbk()
h=d.gef(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gdl()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gdk())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gcs()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gct()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gcu()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.eb
v.a.uniform1i(v.d,p)
v=a.db
m=v.gN(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.A)(v),++k){j=v[k]
t=this.a.cK
if(l>=t.length)return H.c(t,l)
i=t[l]
t=j.gbk()
H.t(q,"$isf",z,"$asf")
if(!C.a.b_(q,t)){t.sbd(0,q.length)
C.a.h(q,t)}t=j.gbh(j)
s=i.b
h=t.gbY(t)
g=t.gbZ(t)
t=t.gc_(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gcD(j)
g=i.c
h=t.gaH(t)
s=t.gaI(t)
t=t.gb0()
g.a.uniform3f(g.d,h,s,t)
t=j.giE()
s=i.d
h=t.gaH(t)
g=t.gaI(t)
t=t.gb0()
s.a.uniform3f(s.d,h,g,t)
t=j.gbi(j)
g=i.e
h=t.gaH(t)
s=t.gaI(t)
t=t.gb0()
g.a.uniform3f(g.d,h,s,t)
t=m.bn(j.gbh(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gbk()
s=t.gef(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gdl()
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.gdk())
t=i.x
t.a.uniform1i(t.d,0)}t=j.gq(j)
s=i.y
h=t.gb2()
g=t.gaM()
t=t.gaY()
s.a.uniform3f(s.d,h,g,t)
t=j.gjs()
g=i.z
g.a.uniform1f(g.d,t)
t=j.gjt()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gcs()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gct()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gcu()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.b:break
case C.f:break
case C.c:this.P(q,this.Q.d)
z=this.a
v=this.Q.d
z.ai(z.dX,z.bL,v)
break
case C.d:this.P(q,this.Q.e)
z=this.a
v=this.Q.e
z.ac(z.dY,z.bL,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gN(v).cN(0)
a.Q=v}z=z.id
z.toString
z.ah(v.a9(0,!0))}if(x.dy){this.P(q,this.ch)
z=this.a
v=this.ch
z.ac(z.dZ,z.e_,v)
switch(x.r){case C.b:break
case C.f:z=this.a
v=this.cx.f
z=z.bM
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.c:this.P(q,this.cx.d)
z=this.a
v=this.cx.d
z.ai(z.e0,z.bN,v)
v=this.a
z=this.cx.f
v=v.bM
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.d:this.P(q,this.cx.e)
z=this.a
v=this.cx.e
z.ac(z.e1,z.bN,v)
v=this.a
z=this.cx.f
v=v.bM
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.b:break
case C.f:z=this.a
v=this.cy.f
z=z.bP
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bO
v.a.uniform1f(v.d,t)
break
case C.c:this.P(q,this.cy.d)
z=this.a
v=this.cy.d
z.ai(z.e2,z.bQ,v)
v=this.a
z=this.cy.f
v=v.bP
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bO
z.a.uniform1f(z.d,t)
break
case C.d:this.P(q,this.cy.e)
z=this.a
v=this.cy.e
z.ac(z.e3,z.bQ,v)
v=this.a
z=this.cy.f
v=v.bP
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bO
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.b
if(v){switch(z){case C.b:break
case C.f:z=this.a
u=this.db.f
z=z.bR
z.a.uniform1f(z.d,u)
break
case C.c:this.P(q,this.db.d)
z=this.a
u=this.db.d
z.ai(z.e4,z.bS,u)
u=this.a
z=this.db.f
u=u.bR
u.a.uniform1f(u.d,z)
break
case C.d:this.P(q,this.db.e)
z=this.a
u=this.db.e
z.ac(z.e5,z.bS,u)
u=this.a
z=this.db.f
u=u.bR
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o)q[o].R(a)
z=b.e
z.R(a)
z.a8(a)
z.ap(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o)q[o].ap(a)
z=this.a
z.toString
a.a.useProgram(null)
z.x.dQ()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.df().aj},
m:{
aw:function(){var z,y,x
z=new O.c5()
y=O.d6(V.aE)
z.e=y
y.b5(z.gfs(),z.gft())
y=new O.bg(z,"emission")
y.c=C.b
y.f=new V.w(0,0,0)
z.f=y
y=new O.bg(z,"ambient")
y.c=C.b
y.f=new V.w(0,0,0)
z.r=y
y=new O.bg(z,"diffuse")
y.c=C.b
y.f=new V.w(0,0,0)
z.x=y
y=new O.bg(z,"invDiffuse")
y.c=C.b
y.f=new V.w(0,0,0)
z.y=y
y=new O.iH(z,"specular")
y.c=C.b
y.f=new V.w(0,0,0)
y.ch=100
z.z=y
y=new O.iE(z,"bump")
y.c=C.b
z.Q=y
z.ch=null
y=new O.bg(z,"reflect")
y.c=C.b
y.f=new V.w(0,0,0)
z.cx=y
y=new O.iG(z,"refract")
y.c=C.b
y.f=new V.w(0,0,0)
y.ch=1
z.cy=y
y=new O.iD(z,"alpha")
y.c=C.b
y.f=1
z.db=y
y=new D.io()
y.bp(D.X)
y.e=H.b([],[D.cr])
y.f=H.b([],[D.j_])
y.r=H.b([],[D.jD])
y.x=H.b([],[D.jP])
y.y=H.b([],[D.jQ])
y.z=H.b([],[D.jR])
y.Q=null
y.ch=null
y.cY(y.gfq(),y.gfM(),y.gfO())
z.dx=y
x=y.Q
if(x==null){x=D.I()
y.Q=x
y=x}else y=x
y.h(0,z.gfZ())
y=z.dx
x=y.ch
if(x==null){x=D.I()
y.ch=x
y=x}else y=x
y.h(0,z.gaq())
z.dy=null
return z}}},iD:{"^":"di;0f,a,b,0c,0d,0e",
bx:function(a){var z,y
z=this.f
if(!$.p.$2(z,a)){y=this.f
this.f=a
z=new D.F(this.b,y,a,this,[P.y])
z.b=!0
this.a.K(z)}},
b7:function(){this.d1()
this.bx(1)},
aU:function(){this.c3()
this.bx(1)},
seq:function(a,b){var z
if(b==null)b=1
if(b<=0)this.dK(0)
else if(this.c===C.b){this.c=C.f
this.c3()
this.bx(1)
z=this.a
z.a=null
z.K(null)}this.bx(b)}},di:{"^":"a;",
K:[function(a){this.a.K(H.j(a,"$isx"))},function(){return this.K(null)},"d7","$1","$0","gaq",0,2,0],
b7:["d1",function(){}],
aU:["c3",function(){}],
dv:function(a){var z,y
z=this.d
if(z==null?a!=null:z!==a){if(z!=null)z.gt().O(0,this.gaq())
y=this.d
this.d=a
if(a!=null)a.gt().h(0,this.gaq())
z=new D.F(this.b+".texture2D",y,this.d,this,[T.f2])
z.b=!0
this.a.K(z)}},
dw:function(a){},
dK:function(a){var z
if(this.c!==C.b){this.c=C.b
z=this.a
z.a=null
z.K(null)}this.b7()
this.dv(null)
this.dw(null)
this.a.K(null)},
sa5:function(a){var z=this.c
if(z!==C.c){if(z===C.b)this.aU()
this.c=C.c
this.dw(null)
z=this.a
z.a=null
z.K(null)}this.dv(a)}},iE:{"^":"di;a,b,0c,0d,0e"},bg:{"^":"di;0f,a,b,0c,0d,0e",
cn:function(a){var z,y
if(!J.S(this.f,a)){z=this.f
this.f=a
y=new D.F(this.b+".color",z,a,this,[V.w])
y.b=!0
this.a.K(y)}},
b7:["d2",function(){this.d1()
this.cn(new V.w(0,0,0))}],
aU:["c4",function(){this.c3()
this.cn(new V.w(1,1,1))}],
sq:function(a,b){var z
if(this.c===C.b){this.c=C.f
this.aU()
z=this.a
z.a=null
z.K(null)}this.cn(b)}},iG:{"^":"bg;0ch,0f,a,b,0c,0d,0e",
du:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.F(this.b+".refraction",y,a,this,[P.y])
z.b=!0
this.a.K(z)}},
b7:function(){this.d2()
this.du(1)},
aU:function(){this.c4()
this.du(1)}},iH:{"^":"bg;0ch,0f,a,b,0c,0d,0e",
by:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.F(this.b+".shininess",y,a,this,[P.y])
z.b=!0
this.a.K(z)}},
b7:function(){this.d2()
this.by(100)},
aU:function(){this.c4()
this.by(100)},
sa6:function(a){var z
if(a==null)a=100
if(a<=0)this.dK(0)
else if(this.c===C.b){this.c=C.f
this.c4()
this.by(100)
z=this.a
z.a=null
z.K(null)}this.by(a)}},jA:{"^":"cd;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.I()
this.e=z}return z},
K:[function(a){var z
H.j(a,"$isx")
z=this.e
if(!(z==null))z.A(a)},function(){return this.K(null)},"d7","$1","$0","gaq",0,2,0],
em:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.j(a.fr.j(0,"Skybox"),"$iseX")
if(z==null){y=a.a
z=new A.eX(y,"Skybox")
z.d3(y,"Skybox")
z.ed(0,$.jC,$.jB)
z.z=z.x.j(0,"posAttr")
z.Q=H.h(z.y.j(0,"fov"),"$isU")
z.ch=H.h(z.y.j(0,"ratio"),"$isU")
z.cx=H.h(z.y.j(0,"boxClr"),"$isH")
z.cy=H.h(z.y.j(0,"boxTxt"),"$isaq")
z.db=H.h(z.y.j(0,"viewMat"),"$isaO")
a.dG(z)}this.a=z}if(b.e==null){y=b.d.dI(new Z.fx(a.a),$.$get$aB())
y.aJ($.$get$aB()).e=this.a.z.c
b.e=y}y=this.c
if(y!=null){y.a=1
y.R(a)}y=a.d
x=a.c
w=this.a
w.R(a)
v=this.b
u=w.Q
u.a.uniform1f(u.d,v)
v=w.ch
v.a.uniform1f(v.d,y/x)
x=this.c
w.cy.cZ(x)
x=this.d
y=w.cx
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.gN(x).cN(0)
w=w.db
w.toString
w.ah(x.a9(0,!0))
y=b.e
if(y instanceof Z.d2){y.R(a)
y.a8(a)
y.ap(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.x.dQ()
y=this.c
if(y!=null)y.ap(a)}},cd:{"^":"a;"}}],["","",,T,{"^":"",cK:{"^":"d_;"},f2:{"^":"cK;"},jL:{"^":"f2;0a,0b,0c,0d,0e,0f,0r,0x,0y",
sbd:function(a,b){this.a=b
return b},
gt:function(){var z=this.y
if(z==null){z=D.I()
this.y=z}return z},
R:function(a){if(!this.c&&this.d){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(3553,this.b)}},
ap:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(3553,null)}}},dA:{"^":"cK;0a,0b,0c,0d,0e",
sbd:function(a,b){this.a=b
return b},
gt:function(){var z=this.e
if(z==null){z=D.I()
this.e=z}return z},
R:function(a){if(!this.c&&this.d>=6){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,this.b)}},
ap:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,null)}}},jM:{"^":"a;a,0b,0c,0d,0e",
i1:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
z.bindTexture(3553,y)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
z.bindTexture(3553,null);++this.d
x=W.et(null,a,null)
w=new T.jL()
w.a=0
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
z=W.a4
W.V(x,"load",H.l(new T.jO(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
ak:function(a){return this.i1(a,!1,!1,!1,!1)},
aS:function(a,b,c,d,e,f){var z,y
z=W.et(null,c,null);++this.d
y=W.a4
W.V(z,"load",H.l(new T.jN(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
dt:function(a,b,c){var z,y,x,w
b=V.dX(b,2)
z=V.dX(a.width,2)
y=V.dX(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.d4(null,null)
x.width=z
x.height=y
w=H.j(C.k.eu(x,"2d"),"$ise9")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.me(w.getImageData(0,0,x.width,x.height))}}},jO:{"^":"q:13;a,b,c,d,e,f,r",
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
C.t.eo(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.dR()}++x.e}},jN:{"^":"q:13;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.dt(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.t.eo(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6){x=x.e
if(!(x==null))x.dR()}++z.e}}}],["","",,V,{"^":"",hk:{"^":"a;",
be:function(a,b){return!0},
i:function(a){return"all"},
$isc4:1},c4:{"^":"a;"},eI:{"^":"a;",
be:["eD",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)if(z[x].be(0,b))return!0
return!1}],
i:["d0",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.A)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isc4:1},bJ:{"^":"eI;0a",
be:function(a,b){return!this.eD(0,b)},
i:function(a){return"!["+this.d0(0)+"]"}},jr:{"^":"a;0a",
eQ:function(a){var z,y
if(a.a.length<=0)throw H.d(P.n("May not create a SetMatcher with zero characters."))
z=new H.aX(0,0,[P.C,P.a7])
for(y=new H.eF(a,a.gk(a),0,[H.as(a,"v",0)]);y.D();)z.Y(0,y.d,!0)
this.a=z},
be:function(a,b){return this.a.dN(0,b)},
i:function(a){var z=this.a
return P.dy(new H.eE(z,[H.u(z,0)]),0,null)},
$isc4:1,
m:{
a5:function(a){var z=new V.jr()
z.eQ(a)
return z}}},eZ:{"^":"a;a,b,0c,0d",
gi3:function(a){return this.b},
C:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.f9(this.a.I(0,b))
w.a=H.b([],[V.c4])
w.c=!1
C.a.h(this.c,w)
return w},
hP:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
if(w.be(0,a))return w}return},
i:function(a){return this.b}},f6:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.hh(this.b,"\n","\\n")
y=H.hh(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},f7:{"^":"a;a,b,0c",
i:function(a){return this.b}},jY:{"^":"a;0a,0b,0c",
I:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.eZ(this,b)
z.c=H.b([],[V.f9])
this.a.Y(0,b,z)}return z},
bl:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.f7(this,a)
y=P.m
z.c=new H.aX(0,0,[y,y])
this.b.Y(0,a,z)}return z},
iC:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.b([],[V.f6])
y=this.c
x=[P.C]
w=H.b([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.aP(a,t)
r=y.hP(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.dy(w,0,null)
throw H.d(P.n("Untokenizable string [state: "+y.gi3(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.b([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.dy(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.f6(o==null?p.b:o,q,t)}++t}}}},f9:{"^":"eI;b,0c,0a",
i:function(a){return this.b.b+": "+this.d0(0)}}}],["","",,X,{"^":"",cp:{"^":"a;",$isaK:1},i0:{"^":"dz;0a,0b,0c,0d,0e,0f,0r,0x",
gt:function(){var z=this.x
if(z==null){z=D.I()
this.x=z}return z},
az:function(a){var z=this.x
if(!(z==null))z.A(a)},
R:function(a){var z,y,x,w,v,u,t,s
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.k(y)
v=C.h.ao(w.a*y)
if(typeof x!=="number")return H.k(x)
u=C.h.ao(w.b*x)
t=C.h.ao(w.c*y)
a.c=t
w=C.h.ao(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
if(this.b){z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
s=16640}else s=256
a.a.clear(s)},
m:{
db:function(a,b,c,d,e,f,g){var z,y
z=new X.i0()
y=new V.aV(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.eV(0,0,1,1)
z.r=y
return z}}},i5:{"^":"a;0a,0b",
gt:function(){var z=this.b
if(z==null){z=D.I()
this.b=z}return z},
R:function(a){var z
a.cy.bV(V.b3())
z=V.b3()
a.db.bV(z)},
ap:function(a){a.cy.aL()
a.db.aL()},
$isaK:1,
$iscp:1},iY:{"^":"a;0a,0b,0c,0d,0e,0f",
gt:function(){var z=this.f
if(z==null){z=D.I()
this.f=z}return z},
az:[function(a){var z
H.j(a,"$isx")
z=this.f
if(!(z==null))z.A(a)},function(){return this.az(null)},"iF","$1","$0","geY",0,2,0],
R:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=this.c
w=this.d
v=this.e
u=v-w
t=1/Math.tan(x*0.5)
s=V.aY(-t/(z/y),0,0,0,0,t,0,0,0,0,v/u,-v*w/u,0,0,1,0)
a.cy.bV(s)
z=$.eQ
if(z==null){z=V.dk(new V.a1(0,0,0),new V.G(0,1,0),new V.G(0,0,-1))
$.eQ=z
r=z}else r=z
z=this.b
if(z!=null){q=z.bX(0,a,this)
if(q!=null)r=q.l(0,r)}a.db.bV(r)},
ap:function(a){a.cy.aL()
a.db.aL()},
$isaK:1,
$iscp:1,
m:{
eP:function(a,b,c,d,e){var z,y,x
z=new X.iY()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
if(null!=c){y=z.b
z.b=c
if(c!=null)c.gt().h(0,z.geY())
x=new D.F("mover",y,z.b,z,[U.ax])
x.b=!0
z.az(x)}x=z.c
if(!$.p.$2(x,b)){y=z.c
z.c=b
x=new D.F("fov",y,b,z,[P.y])
x.b=!0
z.az(x)}x=z.d
if(!$.p.$2(x,d)){y=z.d
z.d=d
x=new D.F("near",y,d,z,[P.y])
x.b=!0
z.az(x)}x=z.e
if(!$.p.$2(x,a)){y=z.e
z.e=a
x=new D.F("far",y,a,z,[P.y])
x.b=!0
z.az(x)}return z}}},dz:{"^":"a;"}}],["","",,V,{"^":"",
mD:function(a){P.jX(C.y,new V.mE(a))},
mE:{"^":"q:43;a",
$1:function(a){H.j(a,"$isbj")
P.ci(C.h.ep(this.a.ghS(),2)+" fps")}},
jw:{"^":"a;0a,0b",
eR:function(a,b){var z,y,x,w,v,u,t
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
W.V(z,"scroll",H.l(new V.jz(x),{func:1,ret:-1,args:[t]}),!1,t)},
hw:function(a,b,c){var z,y,x,w
a=H.W(C.e.hE(a,0,4))
if(c.length===0)c=P.fS(C.q,b,C.n,!1)
z=document.createElement("div")
z.className="textHeader"
z.id=c
y=z.style
x=""+(28-a*3)+"px"
y.fontSize=x
w=W.hl(null)
w.href="#"+c
w.textContent=b
z.appendChild(w)
this.a.appendChild(z)},
dE:function(a,b){return this.hw(a,b,"")},
aX:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.t(a,"$isf",[P.m],"$asf")
this.h2()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.iC(C.a.hW(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v){u=x[v]
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
if(H.hg(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.c(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.fS(C.q,s,C.n,!1)
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
h2:function(){var z,y,x,w
if(this.b!=null)return
z=new V.jY()
y=P.m
z.a=new H.aX(0,0,[y,V.eZ])
z.b=new H.aX(0,0,[y,V.f7])
z.c=z.I(0,"Start")
y=z.I(0,"Start").C(0,"Bold")
x=V.a5(new H.a2("*"))
C.a.h(y.a,x)
y.c=!0
y=z.I(0,"Bold").C(0,"Bold")
x=new V.bJ()
w=[V.c4]
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.a5(new H.a2("*"))
C.a.h(x.a,y)
y=z.I(0,"Bold").C(0,"BoldEnd")
x=V.a5(new H.a2("*"))
C.a.h(y.a,x)
y.c=!0
y=z.I(0,"Start").C(0,"Italic")
x=V.a5(new H.a2("_"))
C.a.h(y.a,x)
y.c=!0
y=z.I(0,"Italic").C(0,"Italic")
x=new V.bJ()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.a5(new H.a2("_"))
C.a.h(x.a,y)
y=z.I(0,"Italic").C(0,"ItalicEnd")
x=V.a5(new H.a2("_"))
C.a.h(y.a,x)
y.c=!0
y=z.I(0,"Start").C(0,"Code")
x=V.a5(new H.a2("`"))
C.a.h(y.a,x)
y.c=!0
y=z.I(0,"Code").C(0,"Code")
x=new V.bJ()
x.a=H.b([],w)
C.a.h(y.a,x)
y=V.a5(new H.a2("`"))
C.a.h(x.a,y)
y=z.I(0,"Code").C(0,"CodeEnd")
x=V.a5(new H.a2("`"))
C.a.h(y.a,x)
y.c=!0
y=z.I(0,"Start").C(0,"LinkHead")
x=V.a5(new H.a2("["))
C.a.h(y.a,x)
y.c=!0
y=z.I(0,"LinkHead").C(0,"LinkTail")
x=V.a5(new H.a2("|"))
C.a.h(y.a,x)
x=z.I(0,"LinkHead").C(0,"LinkEnd")
y=V.a5(new H.a2("]"))
C.a.h(x.a,y)
x.c=!0
x=z.I(0,"LinkHead").C(0,"LinkHead")
y=new V.bJ()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.a5(new H.a2("|]"))
C.a.h(y.a,x)
x=z.I(0,"LinkTail").C(0,"LinkEnd")
y=V.a5(new H.a2("]"))
C.a.h(x.a,y)
x.c=!0
x=z.I(0,"LinkTail").C(0,"LinkTail")
y=new V.bJ()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.a5(new H.a2("|]"))
C.a.h(y.a,x)
C.a.h(z.I(0,"Start").C(0,"Other").a,new V.hk())
x=z.I(0,"Other").C(0,"Other")
y=new V.bJ()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.a5(new H.a2("*_`["))
C.a.h(y.a,x)
x=z.I(0,"BoldEnd")
x.d=x.a.bl("Bold")
x=z.I(0,"ItalicEnd")
x.d=x.a.bl("Italic")
x=z.I(0,"CodeEnd")
x.d=x.a.bl("Code")
x=z.I(0,"LinkEnd")
x.d=x.a.bl("Link")
x=z.I(0,"Other")
x.d=x.a.bl("Other")
this.b=z},
m:{
jx:function(a,b){var z=new V.jw()
z.eR(a,!0)
return z}}},
jz:{"^":"q:13;a",
$1:function(a){P.dB(C.l,new V.jy(this.a))}},
jy:{"^":"q:1;a",
$0:function(){var z,y,x
z=C.h.ao(document.documentElement.scrollTop)
y=this.a.style
x=H.i(-0.01*z)+"px"
y.top=x}}}],["","",,L,{"^":"",
hc:function(){var z,y,x
z=V.jx("3Dart Chess",!0)
y=[P.m]
z.aX(H.b(["This example is in development and may still have a few issues and glitches."],y))
x=W.d4(null,null)
x.className="pageLargeCanvas"
x.id="targetCanvas"
z.a.appendChild(x)
z.dE(1,"About")
z.aX(H.b(["Just started (WIP). Currently you can rotate the camera but game piece selection ","and movement have not been implemented yet. Click and drag with mouse to see the board from ","different angles."],y))
z.aX(H.b(["3Dart Chess is an example of how [3Dart|https://github.com/Grant-Nelson/ThreeDart] can be used ","to create simple browser driven video games. ","This example has no server backing it so currently there is no networked two player mode. ","It would take very little to turn this into a simple online game."],y))
z.aX(H.b(["\xab[Back to Examples List|../../]"],y))
z.dE(1,"Help wanted")
z.aX(H.b(["There is still much to be done, many cool new features, and several little bugs. ","If you would like to contribute to this example, have an idea, find a bug, or just want ","to learn more about it, check out the ","[source code|https://github.com/Grant-Nelson/ThreeDart/tree/master/web/examples/chess]."],y))
z.aX(H.b(["There are tons of ways to contribute. You could even start your own example. ","See the [3Dart Project|https://github.com/Grant-Nelson/ThreeDart] for more."],y))
P.dB(C.l,L.mx())},
nW:[function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=document.getElementById("targetCanvas")
if(z==null)H.o(P.n("Failed to find an element with the identifier, targetCanvas."))
y=E.jT(z,!0,!0,!0,!1)
x=y.r
w=new U.kf()
v=U.ec()
v.scX(0,!0)
v.scP(6.283185307179586)
v.scQ(0)
v.sal(0,0)
v.seg(100)
v.sT(0)
v.sdO(0.5)
w.b=v
u=w.gbs()
v.gt().h(0,u)
v=U.ec()
v.scX(0,!0)
v.scP(6.283185307179586)
v.scQ(0)
v.sal(0,0)
v.seg(100)
v.sT(0)
v.sdO(0.5)
w.c=v
v.gt().h(0,u)
w.d=null
w.e=!1
w.f=!1
w.r=!1
w.x=2.5
w.y=2.5
w.z=2
w.Q=4
w.cx=!1
w.ch=!1
w.cy=0
w.db=0
w.dx=null
w.dy=0
w.fr=null
w.fx=null
t=new X.b4(!1,!1,!1)
s=w.d
w.d=t
v=new D.F("modifiers",s,t,w,[X.b4])
v.b=!0
w.W(v)
v=w.f
if(v!==!1){w.f=!1
v=new D.F("invertX",v,!1,w,[P.a7])
v.b=!0
w.W(v)}v=w.r
if(v!==!1){w.r=!1
v=new D.F("invertY",v,!1,w,[P.a7])
v.b=!0
w.W(v)}w.hB(x)
w.b.scQ(-1.5707963267948966)
w.b.scP(0)
w.b.scX(0,!1)
x=U.ax
w=H.b([w,U.b1(V.dm(1.75,1.75,1.75,1)),U.b1(V.c6(0,0,15))],[x])
v=new U.eq()
v.bp(x)
v.b5(v.gfp(),v.gfN())
v.aW(0,w)
v.e=null
v.f=V.b3()
v.r=0
r=X.eP(2000,1.0471975511965976,v,0.1,null)
q=X.db(!0,!0,!1,null,2000,null,0)
if(q.b){q.b=!1
x=new D.F("clearColor",!0,!1,q,[P.a7])
x.b=!0
q.az(x)}p=L.hu(y)
x=p.id.a
o=new M.hE()
o.sb9(null)
o.sbj(0,null)
o.sa1(null)
w=E.av(null,!0,null,"",null,null)
n=F.dv()
v=n.a
u=new V.G(-1,-1,1)
u=u.v(0,Math.sqrt(u.E(u)))
m=v.bC(new V.b6(1,2,4,6),new V.aV(1,0,0,1),new V.a1(-1,-1,0),new V.N(0,1),u,null)
v=n.a
u=new V.G(1,-1,1)
u=u.v(0,Math.sqrt(u.E(u)))
l=v.bC(new V.b6(0,3,4,6),new V.aV(0,0,1,1),new V.a1(1,-1,0),new V.N(1,1),u,null)
v=n.a
u=new V.G(1,1,1)
u=u.v(0,Math.sqrt(u.E(u)))
k=v.bC(new V.b6(0,2,5,6),new V.aV(0,1,0,1),new V.a1(1,1,0),new V.N(1,0),u,null)
v=n.a
u=new V.G(-1,1,1)
u=u.v(0,Math.sqrt(u.E(u)))
j=v.bC(new V.b6(0,2,4,7),new V.aV(1,1,0,1),new V.a1(-1,1,0),new V.N(0,0),u,null)
n.d.cr(H.b([m,l,k,j],[F.aG]))
n.aZ()
w.saa(0,n)
o.d=w
o.e=null
w=new O.jA()
w.b=1.0471975511965976
if(null!=x){s=w.c
w.c=x
x.gt().h(0,w.gaq())
x=new D.F("boxTexture",s,w.c,w,[T.dA])
x.b=!0
w.K(x)}i=new V.w(1,1,1)
if(!J.S(w.d,i)){s=w.d
w.d=i
x=new D.F("boxColor",s,i,w,[V.w])
x.b=!0
w.K(x)}w.e=null
o.sa1(w)
o.sbj(0,q)
o.sb9(r)
h=new M.hT()
x=O.d6(E.T)
h.d=x
x.b5(h.gfv(),h.gfw())
h.e=null
h.f=null
h.r=null
h.x=null
h.sb9(null)
h.sbj(0,null)
h.sbj(0,q)
h.sb9(r)
h.d.h(0,p)
x=M.aL
w=H.b([o,h],[x])
v=new M.hC()
v.bp(x)
v.e=!1
v.f=null
v.b5(v.gfP(),v.gfQ())
v.aW(0,w)
x=y.d
if(x!==v){if(x!=null)x.gt().O(0,y.gd5())
y.d=v
v.gt().h(0,y.gd5())
y.eU()}V.mD(y)},"$0","mx",0,0,2],
hq:{"^":"bh;fy,go,id,k1,0k2,k3,k4,0r1,0r2,0rx,0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
eF:function(a,b,c,d,e,f,g){var z
if($.cn==null){$.cn=E.av(null,!0,null,"bishop shape",null,null)
O.ay("./resources/bishop.obj",a.f,null,null,!1).ag(new L.hr(),null)}z=this.k4?"white":"black"
this.a=z+(" bishop "+this.go)
this.y.h(0,$.cn)},
m:{
cm:function(a,b,c,d,e,f,g){var z=new L.hq(d,e,f,g,b,c)
z.ab(null,!0,null,"",null,null)
z.aN(b,c,d,e,f,g)
z.eF(a,b,c,d,e,f,g)
return z}}},
hr:{"^":"q:4;",
$1:function(a){H.j(a,"$isT")
$.cn.saa(0,a.c)}},
ht:{"^":"T;0fy,0go,0id,0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
eG:function(a){var z,y,x,w,v,u,t,s,r
this.fy=H.b([],[L.bh])
this.go=H.b([],[L.f4])
this.id=L.iJ(a)
this.a="board"
for(z=1;z<=8;++z)for(y=1;y<=8;++y){x=L.jV(a,this,(z+y)%2===0,z,y)
w=this.go;(w&&C.a).h(w,x)
w=this.y
v=H.u(w,0)
H.z(x,v)
u=[v]
if(w.aD(H.b([x],u))){t=w.a
s=t.length
C.a.h(t,x)
v=H.t(H.b([x],u),"$ise",[v],"$ase")
w=w.c
if(w!=null)w.$2(s,v)}}for(z=1;z<=8;++z){w=L.eO(a,this,!0,2,z,0,0.7)
v=this.fy;(v&&C.a).h(v,w)
v=this.y
u=H.u(v,0)
H.z(w,u)
t=[u]
if(v.aD(H.b([w],t))){r=v.a
s=r.length
C.a.h(r,w)
u=H.t(H.b([w],t),"$ise",[u],"$ase")
w=v.c
if(w!=null)w.$2(s,u)}w=L.eO(a,this,!1,7,z,0,0.7)
v=this.fy;(v&&C.a).h(v,w)
v=this.y
u=H.u(v,0)
H.z(w,u)
t=[u]
if(v.aD(H.b([w],t))){r=v.a
s=r.length
C.a.h(r,w)
u=H.t(H.b([w],t),"$ise",[u],"$ase")
w=v.c
if(w!=null)w.$2(s,u)}}this.V(0,L.cI(a,this,!0,1,1,0,0.7))
this.V(0,L.cI(a,this,!0,1,8,0,0.7))
this.V(0,L.cI(a,this,!1,8,1,0,0.7))
this.V(0,L.cI(a,this,!1,8,8,0,0.7))
this.V(0,L.cz(a,this,!0,1,2,0,0.7))
this.V(0,L.cz(a,this,!0,1,7,3.141592653589793,0.7))
this.V(0,L.cz(a,this,!1,8,2,0,0.7))
this.V(0,L.cz(a,this,!1,8,7,3.141592653589793,0.7))
this.V(0,L.cm(a,this,!0,1,3,-1.5707963267948966,0.8))
this.V(0,L.cm(a,this,!0,1,6,1.5707963267948966,0.8))
this.V(0,L.cm(a,this,!1,8,3,-1.5707963267948966,0.8))
this.V(0,L.cm(a,this,!1,8,6,1.5707963267948966,0.8))
this.V(0,L.eT(a,this,!0,1,4,0,1))
this.V(0,L.eC(a,this,!0,1,5,1.5707963267948966,0.9))
this.V(0,L.eT(a,this,!1,8,4,0,1))
this.V(0,L.eC(a,this,!1,8,5,1.5707963267948966,0.9))
this.y.h(0,L.cs(a,this,0,0,0,0))
this.y.h(0,L.cs(a,this,8,0,1.5707963267948966,1))
this.y.h(0,L.cs(a,this,8,8,3.141592653589793,2))
this.y.h(0,L.cs(a,this,0,8,4.71238898038469,3))
w=this.y
v=F.mg(-1,!1,!1,0,null,30)
u=this.id.Q
w.h(0,E.av(null,!0,U.b1(V.c6(0,-0.5,0).l(0,V.eL(-1.5707963267948966)).l(0,V.dm(12,12,12,1))),"",v,u))},
V:function(a,b){var z=this.fy;(z&&C.a).h(z,b)
this.y.h(0,b)},
m:{
hu:function(a){var z=new L.ht()
z.ab(null,!0,null,"",null,null)
z.eG(a)
return z}}},
hO:{"^":"T;fy,0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
eH:function(a,b,c,d,e,f){var z
if($.ct==null){$.ct=E.av(null,!0,null,"edge shape",null,null)
O.ay("./resources/edge.obj",a.f,null,null,!1).ag(new L.hP(),null)}this.sbU(U.b1(V.c6(c-4,0,d-4).l(0,V.dl(e))))
this.a="edge"
this.y.h(0,$.ct)
z=this.fy.id.z
if(f>=z.length)return H.c(z,f)
this.sa1(z[f])},
m:{
cs:function(a,b,c,d,e,f){var z=new L.hO(b)
z.ab(null,!0,null,"",null,null)
z.eH(a,b,c,d,e,f)
return z}}},
hP:{"^":"q:4;",
$1:function(a){H.j(a,"$isT")
$.ct.saa(0,a.c)}},
ij:{"^":"bh;fy,go,id,k1,0k2,k3,k4,0r1,0r2,0rx,0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
eI:function(a,b,c,d,e,f,g){var z
if($.cy==null){$.cy=E.av(null,!0,null,"king shape",null,null)
O.ay("./resources/king.obj",a.f,null,null,!1).ag(new L.ik(),null)}z=this.k4?"white":"black"
this.a=z+(" king "+this.go)
this.y.h(0,$.cy)},
m:{
eC:function(a,b,c,d,e,f,g){var z=new L.ij(d,e,f,g,b,c)
z.ab(null,!0,null,"",null,null)
z.aN(b,c,d,e,f,g)
z.eI(a,b,c,d,e,f,g)
return z}}},
ik:{"^":"q:4;",
$1:function(a){H.j(a,"$isT")
$.cy.saa(0,a.c)}},
il:{"^":"bh;fy,go,id,k1,0k2,k3,k4,0r1,0r2,0rx,0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
eJ:function(a,b,c,d,e,f,g){var z
if($.cA==null){$.cA=E.av(null,!0,null,"knight shape",null,null)
O.ay("./resources/knight.obj",a.f,null,null,!1).ag(new L.im(),null)}z=this.k4?"white":"black"
this.a=z+(" knight "+this.go)
this.y.h(0,$.cA)},
m:{
cz:function(a,b,c,d,e,f,g){var z=new L.il(d,e,f,g,b,c)
z.ab(null,!0,null,"",null,null)
z.aN(b,c,d,e,f,g)
z.eJ(a,b,c,d,e,f,g)
return z}}},
im:{"^":"q:4;",
$1:function(a){H.j(a,"$isT")
$.cA.saa(0,a.c)}},
iI:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q",
eL:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z=a.f
y=z.a
x=y.createTexture()
y.bindTexture(34067,x)
y.texParameteri(34067,10242,10497)
y.texParameteri(34067,10243,10497)
y.texParameteri(34067,10241,9729)
y.texParameteri(34067,10240,9729)
y.bindTexture(34067,null)
w=new T.dA()
w.a=0
w.b=x
w.c=!1
w.d=0
z.aS(w,x,"resources/posx.png",34069,!1,!1)
z.aS(w,x,"resources/negx.png",34070,!1,!1)
z.aS(w,x,"resources/posy.png",34071,!1,!1)
z.aS(w,x,"resources/negy.png",34072,!1,!1)
z.aS(w,x,"resources/posz.png",34073,!1,!1)
z.aS(w,x,"resources/negz.png",34074,!1,!1)
this.a=w
v=D.en(null,null)
v.sq(0,new V.w(1,0.9,0.8))
v.b=U.b1(V.dk(new V.a1(0,0,0),new V.G(0,1,0),new V.G(0,-1,-0.25)))
u=D.en(null,null)
u.sq(0,new V.w(0,0.1,0.3))
u.b=U.b1(V.dk(new V.a1(0,0,0),new V.G(0,1,0),new V.G(0,1,0.25)))
t=new V.w(0.15,0.15,0.15)
z=O.aw()
y=z.x
y.sq(0,new V.w(0.6,0.6,0.6))
y=z.r
y.sq(0,new V.w(0.4,0.4,0.4))
z.z.sq(0,new V.w(1,1,1))
z.z.sa6(60)
z.sad(this.a)
z.cx.sq(0,t)
z.dx.h(0,v)
z.dx.h(0,u)
this.b=z
z=O.aw()
y=z.x
y.sq(0,new V.w(0.2,0.2,0.2))
y=z.r
y.sq(0,new V.w(0.1,0.1,0.1))
z.z.sq(0,new V.w(1,1,1))
z.z.sa6(60)
z.sad(this.a)
z.cx.sq(0,t)
z.dx.h(0,v)
z.dx.h(0,u)
this.c=z
z=O.aw()
y=z.x
y.sq(0,new V.w(0.6,0,0))
y=z.r
y.sq(0,new V.w(0.8,0,0))
z.z.sq(0,new V.w(1,1,1))
z.z.sa6(100)
z.sad(this.a)
z.cx.sq(0,t)
z.dx.h(0,v)
z.dx.h(0,u)
this.d=z
z=O.aw()
y=z.x
y.sq(0,new V.w(0.2,0,0))
y=z.r
y.sq(0,new V.w(0.6,0,0))
z.z.sq(0,new V.w(1,1,1))
z.z.sa6(100)
z.sad(this.a)
z.cx.sq(0,t)
z.dx.h(0,v)
z.dx.h(0,u)
this.e=z
s=new V.w(0.075,0.075,0.075)
z=O.aw()
y=z.x
y.sq(0,new V.w(0.6,0.6,0.6))
y=z.r
y.sq(0,new V.w(0.4,0.4,0.4))
z.z.sq(0,new V.w(1,1,1))
z.z.sa6(60)
z.sad(this.a)
z.cx.sq(0,s)
z.dx.h(0,v)
z.dx.h(0,u)
this.f=z
z=O.aw()
y=z.x
y.sq(0,new V.w(0.2,0.2,0.2))
y=z.r
y.sq(0,new V.w(0.1,0.1,0.1))
z.z.sq(0,new V.w(1,1,1))
z.z.sa6(60)
z.sad(this.a)
z.cx.sq(0,s)
z.dx.h(0,v)
z.dx.h(0,u)
this.r=z
z=O.aw()
y=z.x
y.sq(0,new V.w(0.6,0,0))
y=z.r
y.sq(0,new V.w(0.8,0,0))
z.z.sq(0,new V.w(1,1,1))
z.z.sa6(100)
z.sad(this.a)
z.cx.sq(0,s)
z.dx.h(0,v)
z.dx.h(0,u)
this.x=z
z=O.aw()
y=z.x
y.sq(0,new V.w(0.2,0,0))
y=z.r
y.sq(0,new V.w(0.6,0,0))
z.z.sq(0,new V.w(1,1,1))
z.z.sa6(100)
z.sad(this.a)
z.cx.sq(0,s)
z.dx.h(0,v)
z.dx.h(0,u)
this.y=z
this.z=H.b([],[O.c5])
for(r=0;r<4;++r){q=a.f.ak("resources/edge"+r+".png")
z=this.z
y=O.aw()
p=y.x
p.sq(0,new V.w(0.6,0.6,0.6))
y.x.sa5(q)
p=y.r
p.sq(0,new V.w(0.4,0.4,0.4))
y.r.sa5(q)
y.z.sq(0,new V.w(1,1,1))
y.z.sa6(80)
y.sad(this.a)
p=y.cx
p.sq(0,new V.w(0.1,0.1,0.1))
p=y.dx
p.toString
o=H.as(p,"a8",0)
H.z(v,o)
n=[o]
if(p.aD(H.b([v],n))){m=p.a
l=m.length
C.a.h(m,v)
o=H.t(H.b([v],n),"$ise",[o],"$ase")
p=p.c
if(p!=null)p.$2(l,o)}p=y.dx
p.toString
o=H.as(p,"a8",0)
H.z(u,o)
n=[o]
if(p.aD(H.b([u],n))){m=p.a
l=m.length
C.a.h(m,u)
o=H.t(H.b([u],n),"$ise",[o],"$ase")
p=p.c
if(p!=null)p.$2(l,o)}(z&&C.a).h(z,y)}k=a.f.ak("resources/tableColor.png")
j=a.f.ak("resources/tableSpec.png")
z=O.aw()
y=z.x
y.sq(0,new V.w(0.6,0.6,0.6))
z.x.sa5(k)
y=z.r
y.sq(0,new V.w(0.4,0.4,0.4))
z.r.sa5(k)
z.z.sq(0,new V.w(1,1,1))
z.z.sa6(80)
z.z.sa5(j)
z.sad(this.a)
z.cx.sa5(j)
z.Q.sa5(a.f.ak("resources/tableNormal.png"))
z.dx.h(0,v)
z.dx.h(0,u)
this.Q=z},
m:{
iJ:function(a){var z=new L.iI()
z.eL(a)
return z}}},
iW:{"^":"bh;fy,go,id,k1,0k2,k3,k4,0r1,0r2,0rx,0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
eM:function(a,b,c,d,e,f,g){var z
if($.cD==null){$.cD=E.av(null,!0,null,"pawn shape",null,null)
O.ay("./resources/pawn.obj",a.f,null,null,!1).ag(new L.iX(),null)}z=this.k4?"white":"black"
this.a=z+(" pawn "+this.go)
this.y.h(0,$.cD)},
m:{
eO:function(a,b,c,d,e,f,g){var z=new L.iW(d,e,f,g,b,c)
z.ab(null,!0,null,"",null,null)
z.aN(b,c,d,e,f,g)
z.eM(a,b,c,d,e,f,g)
return z}}},
iX:{"^":"q:4;",
$1:function(a){H.j(a,"$isT")
$.cD.saa(0,a.c)}},
bh:{"^":"T;",
aN:function(a,b,c,d,e,f){var z,y
z=U.b1(null)
this.k2=z
this.sbU(z)
this.r1=!1
this.r2=!1
this.rx=!1
z=this.k1
this.k2.sN(0,V.c6(this.fy-4.5,0,this.go-4.5).l(0,V.dl(this.id)).l(0,V.dm(z,z,z,1)))
if(this.k4){z=this.rx
y=this.k3.id
if(z)this.sa1(y.d)
else this.sa1(y.b)}else{z=this.rx
y=this.k3.id
if(z)this.sa1(y.e)
else this.sa1(y.c)}}},
jb:{"^":"bh;fy,go,id,k1,0k2,k3,k4,0r1,0r2,0rx,0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
eN:function(a,b,c,d,e,f,g){var z
if($.cF==null){$.cF=E.av(null,!0,null,"queen shape",null,null)
O.ay("./resources/queen.obj",a.f,null,null,!1).ag(new L.jc(),null)}z=this.k4?"white":"black"
this.a=z+(" queen "+this.go)
this.y.h(0,$.cF)},
m:{
eT:function(a,b,c,d,e,f,g){var z=new L.jb(d,e,f,g,b,c)
z.ab(null,!0,null,"",null,null)
z.aN(b,c,d,e,f,g)
z.eN(a,b,c,d,e,f,g)
return z}}},
jc:{"^":"q:4;",
$1:function(a){H.j(a,"$isT")
$.cF.saa(0,a.c)}},
jl:{"^":"bh;fy,go,id,k1,0k2,k3,k4,0r1,0r2,0rx,0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
eP:function(a,b,c,d,e,f,g){var z
if($.cJ==null){$.cJ=E.av(null,!0,null,"rook shape",null,null)
O.ay("./resources/rook.obj",a.f,null,null,!1).ag(new L.jm(),null)}z=this.k4?"white":"black"
this.a=z+(" rook "+this.go)
this.y.h(0,$.cJ)},
m:{
cI:function(a,b,c,d,e,f,g){var z=new L.jl(d,e,f,g,b,c)
z.ab(null,!0,null,"",null,null)
z.aN(b,c,d,e,f,g)
z.eP(a,b,c,d,e,f,g)
return z}}},
jm:{"^":"q:4;",
$1:function(a){H.j(a,"$isT")
$.cJ.saa(0,a.c)}},
f4:{"^":"T;fy,go,0id,k1,k2,0k3,0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
eS:function(a,b,c,d,e){var z,y,x,w
if($.cL==null){$.cL=E.av(null,!0,null,"tile shape",null,null)
O.ay("./resources/tile.obj",a.f,null,null,!1).ag(new L.jW(),null)}z=this.fy
y=this.go
this.sbU(U.b1(V.c6(z-4.5,0,y-4.5)))
this.k3=!1
x=this.k2
w=x?"white":"black"
this.a=w+(" tile "+z+" "+y)
this.y.h(0,$.cL)
if(x){z=this.k3
y=this.k1.id
if(z)this.sa1(y.x)
else this.sa1(y.f)}else{z=this.k3
y=this.k1.id
if(z)this.sa1(y.y)
else this.sa1(y.r)}},
m:{
jV:function(a,b,c,d,e){var z=new L.f4(d,e,b,c)
z.ab(null,!0,null,"",null,null)
z.eS(a,b,c,d,e)
return z}}},
jW:{"^":"q:4;",
$1:function(a){H.j(a,"$isT")
$.cL.saa(0,a.c)}}},1]]
setupProgram(dart,0,0)
J.L=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ew.prototype
return J.ev.prototype}if(typeof a=="string")return J.c2.prototype
if(a==null)return J.ex.prototype
if(typeof a=="boolean")return J.ib.prototype
if(a.constructor==Array)return J.b2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof P.a)return a
return J.cg(a)}
J.ml=function(a){if(typeof a=="number")return J.c1.prototype
if(typeof a=="string")return J.c2.prototype
if(a==null)return a
if(a.constructor==Array)return J.b2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof P.a)return a
return J.cg(a)}
J.b9=function(a){if(typeof a=="string")return J.c2.prototype
if(a==null)return a
if(a.constructor==Array)return J.b2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof P.a)return a
return J.cg(a)}
J.dR=function(a){if(a==null)return a
if(a.constructor==Array)return J.b2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof P.a)return a
return J.cg(a)}
J.h5=function(a){if(typeof a=="number")return J.c1.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cN.prototype
return a}
J.h6=function(a){if(typeof a=="string")return J.c2.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cN.prototype
return a}
J.cU=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof P.a)return a
return J.cg(a)}
J.ck=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.ml(a).p(a,b)}
J.S=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.L(a).u(a,b)}
J.dZ=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.h5(a).b4(a,b)}
J.cX=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.h5(a).S(a,b)}
J.P=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mu(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b9(a).j(a,b)}
J.hj=function(a,b,c,d){return J.cU(a).dD(a,b,c,d)}
J.cY=function(a,b,c){return J.b9(a).hH(a,b,c)}
J.e_=function(a,b){return J.dR(a).F(a,b)}
J.e0=function(a,b){return J.dR(a).M(a,b)}
J.bd=function(a){return J.L(a).gX(a)}
J.bY=function(a){return J.dR(a).gZ(a)}
J.aI=function(a){return J.b9(a).gk(a)}
J.e1=function(a,b){return J.b9(a).J(a,b)}
J.e2=function(a,b,c){return J.h6(a).b6(a,b,c)}
J.ad=function(a){return J.L(a).i(a)}
J.cZ=function(a){return J.h6(a).cW(a)}
I.dV=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.d3.prototype
C.z=W.bE.prototype
C.A=J.r.prototype
C.a=J.b2.prototype
C.B=J.ev.prototype
C.e=J.ew.prototype
C.C=J.ex.prototype
C.h=J.c1.prototype
C.i=J.c2.prototype
C.J=J.bG.prototype
C.K=H.iR.prototype
C.L=W.iS.prototype
C.r=J.iZ.prototype
C.t=P.dt.prototype
C.m=J.cN.prototype
C.u=W.bT.prototype
C.v=W.ks.prototype
C.w=new P.iV()
C.x=new P.kh()
C.j=new P.lk()
C.b=new A.cq(0,"ColorSourceType.None")
C.f=new A.cq(1,"ColorSourceType.Solid")
C.c=new A.cq(2,"ColorSourceType.Texture2D")
C.d=new A.cq(3,"ColorSourceType.TextureCube")
C.l=new P.be(0)
C.y=new P.be(5e6)
C.D=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.E=function(hooks) {
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
C.o=function(hooks) { return hooks; }

C.F=function(getTagFallback) {
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
C.G=function() {
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
C.H=function(hooks) {
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
C.I=function(hooks) {
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
C.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.q=H.b(I.dV([0,0,65498,45055,65535,34815,65534,18431]),[P.C])
C.n=new P.kg(!1)
$.aJ=0
$.by=null
$.e5=null
$.dL=!1
$.h9=null
$.h0=null
$.hf=null
$.cT=null
$.cV=null
$.dS=null
$.bq=null
$.bV=null
$.bW=null
$.dM=!1
$.K=C.j
$.el=null
$.ek=null
$.ej=null
$.ei=null
$.fX=null
$.p=V.iK()
$.jC="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.jB="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.eQ=null
$.cn=null
$.ct=null
$.cy=null
$.cA=null
$.cD=null
$.cF=null
$.cJ=null
$.cL=null
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
I.$lazy(y,x,w)}})(["eh","$get$eh",function(){return H.h7("_$dart_dartClosure")},"df","$get$df",function(){return H.h7("_$dart_js")},"fa","$get$fa",function(){return H.aM(H.cM({
toString:function(){return"$receiver$"}}))},"fb","$get$fb",function(){return H.aM(H.cM({$method$:null,
toString:function(){return"$receiver$"}}))},"fc","$get$fc",function(){return H.aM(H.cM(null))},"fd","$get$fd",function(){return H.aM(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"fh","$get$fh",function(){return H.aM(H.cM(void 0))},"fi","$get$fi",function(){return H.aM(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"ff","$get$ff",function(){return H.aM(H.fg(null))},"fe","$get$fe",function(){return H.aM(function(){try{null.$method$}catch(z){return z.message}}())},"fk","$get$fk",function(){return H.aM(H.fg(void 0))},"fj","$get$fj",function(){return H.aM(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dI","$get$dI",function(){return P.kx()},"bX","$get$bX",function(){return[]},"fR","$get$fR",function(){return P.ds("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"ef","$get$ef",function(){return{}},"fv","$get$fv",function(){return Z.aA(0)},"ft","$get$ft",function(){return Z.aA(511)},"aB","$get$aB",function(){return Z.aA(1)},"aR","$get$aR",function(){return Z.aA(2)},"aQ","$get$aQ",function(){return Z.aA(4)},"aS","$get$aS",function(){return Z.aA(8)},"aT","$get$aT",function(){return Z.aA(16)},"bm","$get$bm",function(){return Z.aA(32)},"bn","$get$bn",function(){return Z.aA(64)},"fu","$get$fu",function(){return Z.aA(96)},"b7","$get$b7",function(){return Z.aA(128)},"aP","$get$aP",function(){return Z.aA(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.x]},{func:1,ret:P.E},{func:1,ret:-1},{func:1,ret:-1,args:[D.x]},{func:1,ret:P.E,args:[E.T]},{func:1,ret:-1,args:[W.aF]},{func:1,ret:-1,args:[P.m,,]},{func:1,ret:-1,args:[W.a4]},{func:1,ret:-1,args:[P.C,[P.e,E.T]]},{func:1,ret:P.E,args:[F.aD]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.E,args:[D.x]},{func:1,ret:-1,args:[W.bk]},{func:1,ret:P.E,args:[W.a4]},{func:1,ret:-1,args:[W.bH]},{func:1,args:[,]},{func:1,ret:P.E,args:[,]},{func:1,ret:P.m,args:[P.C]},{func:1,ret:-1,args:[P.C,[P.e,D.X]]},{func:1,ret:P.y},{func:1,ret:-1,args:[P.C,[P.e,U.ax]]},{func:1,ret:-1,args:[P.a],opt:[P.aa]},{func:1,ret:-1,args:[P.C,[P.e,M.aL]]},{func:1,ret:-1,args:[P.C,[P.e,V.aE]]},{func:1,ret:P.E,args:[,,]},{func:1,ret:P.m,args:[W.bE]},{func:1,ret:P.E,args:[W.ca]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.E,args:[{func:1,ret:-1}]},{func:1,ret:P.a7,args:[W.M]},{func:1,ret:-1,args:[,]},{func:1,args:[,P.m]},{func:1,args:[P.m]},{func:1,ret:P.E,args:[P.a_]},{func:1,ret:P.E,args:[{func:1,ret:-1,args:[D.x]}]},{func:1,ret:P.E,args:[,P.aa]},{func:1,ret:P.a7,args:[P.y,P.y]},{func:1,ret:-1,args:[W.bT]},{func:1,ret:P.E,args:[P.C,,]},{func:1,ret:P.a7,args:[[P.e,D.X]]},{func:1,ret:P.y,args:[P.y]},{func:1,ret:-1,opt:[P.a]},{func:1,ret:P.E,args:[,],opt:[,]},{func:1,ret:P.E,args:[P.bj]},{func:1,ret:[P.ah,,],args:[,]},{func:1,ret:W.a3,args:[W.M]}]
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
if(x==y)H.mF(d||a)
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
Isolate.dV=a.dV
Isolate.dQ=a.dQ
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
if(typeof dartMainRunner==="function")dartMainRunner(L.hc,[])
else L.hc([])})})()
//# sourceMappingURL=main.dart.js.map
