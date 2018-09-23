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
var d=supportsDirectProtoAccess&&b2!="b"
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dy"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dy"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dy(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dz=function(){}
var dart=[["","",,H,{"^":"",nQ:{"^":"b;a"}}],["","",,J,{"^":"",
H:function(a){return void 0},
dF:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cE:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dD==null){H.mL()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.c7("Return interceptor for "+H.l(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cX()]
if(v!=null)return v
v=H.mQ(a)
if(v!=null)return v
if(typeof a=="function")return C.P
y=Object.getPrototypeOf(a)
if(y==null)return C.z
if(y===Object.prototype)return C.z
if(typeof w=="function"){Object.defineProperty(w,$.$get$cX(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
r:{"^":"b;",
t:function(a,b){return a===b},
gT:function(a){return H.bF(a)},
i:["em",function(a){return"Instance of '"+H.bc(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
hT:{"^":"r;",
i:function(a){return String(a)},
gT:function(a){return a?519018:218159},
$isah:1},
eh:{"^":"r;",
t:function(a,b){return null==b},
i:function(a){return"null"},
gT:function(a){return 0},
$isE:1},
cY:{"^":"r;",
gT:function(a){return 0},
i:["en",function(a){return String(a)}]},
iz:{"^":"cY;"},
c8:{"^":"cY;"},
c2:{"^":"cY;",
i:function(a){var z=a[$.$get$e1()]
if(z==null)return this.en(a)
return"JavaScript function for "+H.l(J.aa(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscT:1},
b8:{"^":"r;$ti",
h:function(a,b){H.z(b,H.y(a,0))
if(!!a.fixed$length)H.p(P.A("add"))
a.push(b)},
O:function(a,b){var z
if(!!a.fixed$length)H.p(P.A("remove"))
for(z=0;z<a.length;++z)if(J.O(a[z],b)){a.splice(z,1)
return!0}return!1},
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.aW(a))}},
D:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.l(a[y]))
return z.join(b)},
hF:function(a){return this.D(a,"")},
hx:function(a,b,c,d){var z,y,x
H.z(b,d)
H.h(c,{func:1,ret:d,args:[d,H.y(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.aW(a))}return y},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
bN:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a0(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a0(c,b,a.length,"end",null))
if(b===c)return H.e([],[H.y(a,0)])
return H.e(a.slice(b,c),[H.y(a,0)])},
gax:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.hR())},
aw:function(a,b,c,d){var z
H.z(d,H.y(a,0))
if(!!a.immutable$list)H.p(P.A("fill range"))
P.aR(b,c,a.length,null,null,null)
for(z=b;z.L(0,c);z=z.w(0,1))a[z]=d},
bo:function(a,b){var z
for(z=0;z<a.length;++z)if(J.O(a[z],b))return!0
return!1},
i:function(a){return P.cV(a,"[","]")},
gZ:function(a){return new J.au(a,a.length,0,[H.y(a,0)])},
gT:function(a){return H.bF(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.p(P.A("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cd(b,"newLength",null))
if(b<0)throw H.a(P.a0(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aL(a,b))
if(b>=a.length||b<0)throw H.a(H.aL(a,b))
return a[b]},
m:function(a,b,c){H.D(b)
H.z(c,H.y(a,0))
if(!!a.immutable$list)H.p(P.A("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aL(a,b))
if(b>=a.length||b<0)throw H.a(H.aL(a,b))
a[b]=c},
$isk:1,
$isd:1,
p:{
hS:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cd(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a0(a,0,4294967295,"length",null))
return J.ee(new Array(a),b)},
ee:function(a,b){return J.bz(H.e(a,[b]))},
bz:function(a){H.bT(a)
a.fixed$length=Array
return a}}},
nP:{"^":"b8;$ti"},
au:{"^":"b;a,b,c,0d,$ti",
gP:function(a){return this.d},
F:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.C(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c0:{"^":"r;",
ghE:function(a){return a===0?1/a<0:a<0},
ij:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.A(""+a+".toInt()"))},
b_:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.A(""+a+".floor()"))},
ac:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.A(""+a+".round()"))},
ec:function(a,b){var z
if(b>20)throw H.a(P.a0(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ghE(a))return"-"+z
return z},
bb:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a0(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.V(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.p(P.A("Unexpected toString result: "+z))
x=J.aM(y)
z=x.k(y,1)
w=+x.k(y,3)
if(x.k(y,2)!=null){z+=x.k(y,2)
w-=x.k(y,2).length}return z+C.b.j("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gT:function(a){return a&0x1FFFFFFF},
j:function(a,b){if(typeof b!=="number")throw H.a(H.a9(b))
return a*b},
ah:function(a,b){var z
if(typeof b!=="number")throw H.a(H.a9(b))
z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
eq:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dj(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.dj(a,b)},
dj:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.A("Result of truncating division is "+H.l(z)+": "+H.l(a)+" ~/ "+b))},
aG:function(a,b){var z
if(a>0)z=this.dh(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fL:function(a,b){if(b<0)throw H.a(H.a9(b))
return this.dh(a,b)},
dh:function(a,b){return b>31?0:a>>>b},
L:function(a,b){if(typeof b!=="number")throw H.a(H.a9(b))
return a<b},
$isu:1,
$isa1:1},
eg:{"^":"c0;",$iso:1},
ef:{"^":"c0;"},
c1:{"^":"r;",
V:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aL(a,b))
if(b<0)throw H.a(H.aL(a,b))
if(b>=a.length)H.p(H.aL(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.a(H.aL(a,b))
return a.charCodeAt(b)},
w:function(a,b){H.L(b)
if(typeof b!=="string")throw H.a(P.cd(b,null,null))
return a+b},
aQ:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.a9(b))
c=P.aR(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.p(H.a9(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
a8:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.p(H.a9(c))
if(typeof c!=="number")return c.L()
if(c<0||c>a.length)throw H.a(P.a0(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a7:function(a,b){return this.a8(a,b,0)},
q:function(a,b,c){H.D(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.a9(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.L()
if(b<0)throw H.a(P.cr(b,null,null))
if(b>c)throw H.a(P.cr(b,null,null))
if(c>a.length)throw H.a(P.cr(c,null,null))
return a.substring(b,c)},
ay:function(a,b){return this.q(a,b,null)},
j:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.E)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hV:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.j(c,z)+a},
ab:function(a,b){return this.hV(a,b," ")},
dY:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a0(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
dX:function(a,b){return this.dY(a,b,0)},
hl:function(a,b,c){if(c>a.length)throw H.a(P.a0(c,0,a.length,null,null))
return H.h0(a,b,c)},
i:function(a){return a},
gT:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$isev:1,
$isi:1}}],["","",,H,{"^":"",
cF:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
hR:function(){return new P.jc("No element")},
a3:{"^":"jP;a",
gl:function(a){return this.a.length},
k:function(a,b){return C.b.V(this.a,b)},
$ascu:function(){return[P.o]},
$asx:function(){return[P.o]},
$ask:function(){return[P.o]},
$asd:function(){return[P.o]}},
hC:{"^":"k;"},
en:{"^":"b;a,b,c,0d,$ti",
gP:function(a){return this.d},
F:function(){var z,y,x,w
z=this.a
y=J.aM(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.aW(z))
w=this.c
if(typeof x!=="number")return H.n(x)
if(w>=x){this.d=null
return!1}this.d=y.J(z,w);++this.c
return!0}},
ic:{"^":"k;a,b,$ti",
gZ:function(a){return new H.id(J.bv(this.a),this.b,this.$ti)},
gl:function(a){return J.at(this.a)},
J:function(a,b){return this.b.$1(J.cK(this.a,b))},
$ask:function(a,b){return[b]}},
id:{"^":"cW;0a,b,c,$ti",
F:function(){var z=this.b
if(z.F()){this.a=this.c.$1(z.gP(z))
return!0}this.a=null
return!1},
gP:function(a){return this.a},
$ascW:function(a,b){return[b]}},
kl:{"^":"k;a,b,$ti",
gZ:function(a){return new H.km(J.bv(this.a),this.b,this.$ti)}},
km:{"^":"cW;a,b,$ti",
F:function(){var z,y
for(z=this.a,y=this.b;z.F();)if(y.$1(z.gP(z)))return!0
return!1},
gP:function(a){var z=this.a
return z.gP(z)}},
ci:{"^":"b;$ti"},
cu:{"^":"b;$ti",
m:function(a,b,c){H.D(b)
H.z(c,H.aA(this,"cu",0))
throw H.a(P.A("Cannot modify an unmodifiable list"))},
aw:function(a,b,c,d){H.z(d,H.aA(this,"cu",0))
throw H.a(P.A("Cannot modify an unmodifiable list"))}},
jP:{"^":"cm+cu;"}}],["","",,H,{"^":"",
hr:function(){throw H.a(P.A("Cannot modify unmodifiable Map"))},
mE:function(a){return init.types[H.D(a)]},
fU:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.H(a).$isF},
l:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aa(a)
if(typeof z!=="string")throw H.a(H.a9(a))
return z},
bF:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iJ:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.c(z,3)
y=H.L(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a0(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.H(w,u)|32)>x)return}return parseInt(a,b)},
bc:function(a){var z,y,x,w,v,u,t,s,r
z=J.H(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.H||!!J.H(a).$isc8){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.H(w,0)===36)w=C.b.ay(w,1)
r=H.dE(H.bT(H.b2(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
iB:function(){if(!!self.location)return self.location.href
return},
ex:function(a){var z,y,x,w,v
H.bT(a)
z=J.at(a)
if(typeof z!=="number")return z.ej()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iK:function(a){var z,y,x,w
z=H.e([],[P.o])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.C)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.a9(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.d.aG(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.a9(w))}return H.ex(z)},
ey:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.a9(x))
if(x<0)throw H.a(H.a9(x))
if(x>65535)return H.iK(a)}return H.ex(a)},
iL:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.ej()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cp:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.d.aG(z,10))>>>0,56320|z&1023)}}throw H.a(P.a0(a,0,1114111,null,null))},
ag:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iI:function(a){return a.b?H.ag(a).getUTCFullYear()+0:H.ag(a).getFullYear()+0},
iG:function(a){return a.b?H.ag(a).getUTCMonth()+1:H.ag(a).getMonth()+1},
iC:function(a){return a.b?H.ag(a).getUTCDate()+0:H.ag(a).getDate()+0},
iD:function(a){return a.b?H.ag(a).getUTCHours()+0:H.ag(a).getHours()+0},
iF:function(a){return a.b?H.ag(a).getUTCMinutes()+0:H.ag(a).getMinutes()+0},
iH:function(a){return a.b?H.ag(a).getUTCSeconds()+0:H.ag(a).getSeconds()+0},
iE:function(a){return a.b?H.ag(a).getUTCMilliseconds()+0:H.ag(a).getMilliseconds()+0},
n:function(a){throw H.a(H.a9(a))},
c:function(a,b){if(a==null)J.at(a)
throw H.a(H.aL(a,b))},
aL:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aN(!0,b,"index",null)
z=H.D(J.at(a))
if(!(b<0)){if(typeof z!=="number")return H.n(z)
y=b>=z}else y=!0
if(y)return P.S(b,a,"index",null,z)
return P.cr(b,"index",null)},
my:function(a,b,c){if(a>c)return new P.cq(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cq(a,c,!0,b,"end","Invalid value")
return new P.aN(!0,b,"end",null)},
a9:function(a){return new P.aN(!0,a,null,null)},
mn:function(a){if(typeof a!=="number")throw H.a(H.a9(a))
return a},
a:function(a){var z
if(a==null)a=new P.eu()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.h2})
z.name=""}else z.toString=H.h2
return z},
h2:function(){return J.aa(this.dartException)},
p:function(a){throw H.a(a)},
C:function(a){throw H.a(P.aW(a))},
as:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.nn(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.aG(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cZ(H.l(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.et(H.l(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eR()
u=$.$get$eS()
t=$.$get$eT()
s=$.$get$eU()
r=$.$get$eY()
q=$.$get$eZ()
p=$.$get$eW()
$.$get$eV()
o=$.$get$f0()
n=$.$get$f_()
m=v.aa(y)
if(m!=null)return z.$1(H.cZ(H.L(y),m))
else{m=u.aa(y)
if(m!=null){m.method="call"
return z.$1(H.cZ(H.L(y),m))}else{m=t.aa(y)
if(m==null){m=s.aa(y)
if(m==null){m=r.aa(y)
if(m==null){m=q.aa(y)
if(m==null){m=p.aa(y)
if(m==null){m=s.aa(y)
if(m==null){m=o.aa(y)
if(m==null){m=n.aa(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.et(H.L(y),m))}}return z.$1(new H.jO(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eD()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aN(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eD()
return a},
bs:function(a){var z
if(a==null)return new H.fq(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fq(a)},
mB:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
mN:function(a,b,c,d,e,f){H.f(a,"$iscT")
switch(H.D(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.v("Unsupported number of arguments for wrapped closure"))},
bq:function(a,b){var z
H.D(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mN)
a.$identity=z
return z},
hn:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.H(d).$isd){z.$reflectionInfo=d
x=H.iQ(z).r}else x=d
w=e?Object.create(new H.jd().constructor.prototype):Object.create(new H.cN(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aB
if(typeof u!=="number")return u.w()
$.aB=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dX(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.mE,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dQ:H.cO
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dX(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hk:function(a,b,c,d){var z=H.cO
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dX:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hm(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hk(y,!w,z,b)
if(y===0){w=$.aB
if(typeof w!=="number")return w.w()
$.aB=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bw
if(v==null){v=H.ce("self")
$.bw=v}return new Function(w+H.l(v)+";return "+u+"."+H.l(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aB
if(typeof w!=="number")return w.w()
$.aB=w+1
t+=w
w="return function("+t+"){return this."
v=$.bw
if(v==null){v=H.ce("self")
$.bw=v}return new Function(w+H.l(v)+"."+H.l(z)+"("+t+");}")()},
hl:function(a,b,c,d){var z,y
z=H.cO
y=H.dQ
switch(b?-1:a){case 0:throw H.a(H.j_("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hm:function(a,b){var z,y,x,w,v,u,t,s
z=$.bw
if(z==null){z=H.ce("self")
$.bw=z}y=$.dP
if(y==null){y=H.ce("receiver")
$.dP=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hl(w,!u,x,b)
if(w===1){z="return function(){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+");"
y=$.aB
if(typeof y!=="number")return y.w()
$.aB=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.l(z)+"."+H.l(x)+"(this."+H.l(y)+", "+s+");"
y=$.aB
if(typeof y!=="number")return y.w()
$.aB=y+1
return new Function(z+y+"}")()},
dy:function(a,b,c,d,e,f,g){var z,y
z=J.bz(H.bT(b))
H.D(c)
y=!!J.H(d).$isd?J.bz(d):d
return H.hn(a,z,c,y,!!e,f,g)},
L:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.ay(a,"String"))},
mz:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.ay(a,"double"))},
nb:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.ay(a,"num"))},
fO:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.ay(a,"bool"))},
D:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.ay(a,"int"))},
fZ:function(a,b){throw H.a(H.ay(a,H.L(b).substring(3)))},
nd:function(a,b){var z=J.aM(b)
throw H.a(H.hj(a,z.q(b,3,z.gl(b))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.H(a)[b])return a
H.fZ(a,b)},
j:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.H(a)[b]
else z=!0
if(z)return a
H.nd(a,b)},
bT:function(a){if(a==null)return a
if(!!J.H(a).$isd)return a
throw H.a(H.ay(a,"List"))},
fW:function(a,b){if(a==null)return a
if(!!J.H(a).$isd)return a
if(J.H(a)[b])return a
H.fZ(a,b)},
fQ:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.D(z)]
else return a.$S()}return},
c9:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fQ(J.H(a))
if(z==null)return!1
y=H.fT(z,null,b,null)
return y},
h:function(a,b){var z,y
if(a==null)return a
if($.du)return a
$.du=!0
try{if(H.c9(a,b))return a
z=H.cb(b)
y=H.ay(a,z)
throw H.a(y)}finally{$.du=!1}},
dA:function(a,b){if(a!=null&&!H.dx(a,b))H.p(H.ay(a,H.cb(b)))
return a},
fJ:function(a){var z
if(a instanceof H.m){z=H.fQ(J.H(a))
if(z!=null)return H.cb(z)
return"Closure"}return H.bc(a)},
nk:function(a){throw H.a(new P.hv(H.L(a)))},
fR:function(a){return init.getIsolateTag(a)},
e:function(a,b){a.$ti=b
return a},
b2:function(a){if(a==null)return
return a.$ti},
oN:function(a,b,c){return H.bt(a["$as"+H.l(c)],H.b2(b))},
aV:function(a,b,c,d){var z
H.L(c)
H.D(d)
z=H.bt(a["$as"+H.l(c)],H.b2(b))
return z==null?null:z[d]},
aA:function(a,b,c){var z
H.L(b)
H.D(c)
z=H.bt(a["$as"+H.l(b)],H.b2(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.D(b)
z=H.b2(a)
return z==null?null:z[b]},
cb:function(a){var z=H.b3(a,null)
return z},
b3:function(a,b){var z,y
H.w(b,"$isd",[P.i],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dE(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.D(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.c(b,y)
return H.l(b[y])}if('func' in a)return H.md(a,b)
if('futureOr' in a)return"FutureOr<"+H.b3("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
md:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.i]
H.w(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.e([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.c(b,r)
t=C.b.w(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.b3(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b3(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b3(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b3(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.mA(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.L(z[l])
n=n+m+H.b3(i[h],b)+(" "+H.l(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dE:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isd",[P.i],"$asd")
if(a==null)return""
z=new P.am("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b3(u,c)}v="<"+z.i(0)+">"
return v},
bt:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bR:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.b2(a)
y=J.H(a)
if(y[b]==null)return!1
return H.fM(H.bt(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.L(b)
H.bT(c)
H.L(d)
if(a==null)return a
z=H.bR(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dE(c,0,null)
throw H.a(H.ay(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fM:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ar(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ar(a[y],b,c[y],d))return!1
return!0},
oL:function(a,b,c){return a.apply(b,H.bt(J.H(b)["$as"+H.l(c)],H.b2(b)))},
fV:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="E"||a===-1||a===-2||H.fV(z)}return!1},
dx:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="E"||b===-1||b===-2||H.fV(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dx(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c9(a,b)}y=J.H(a).constructor
x=H.b2(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ar(y,null,b,null)
return z},
z:function(a,b){if(a!=null&&!H.dx(a,b))throw H.a(H.ay(a,H.cb(b)))
return a},
ar:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ar(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="E")return!0
if('func' in c)return H.fT(a,b,c,d)
if('func' in a)return c.builtin$cls==="cT"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ar("type" in a?a.type:null,b,x,d)
else if(H.ar(a,b,x,d))return!0
else{if(!('$is'+"by" in y.prototype))return!1
w=y.prototype["$as"+"by"]
v=H.bt(w,z?a.slice(1):null)
return H.ar(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cb(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fM(H.bt(r,z),b,u,d)},
fT:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ar(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ar(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ar(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ar(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.na(m,b,l,d)},
na:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ar(c[w],d,a[w],b))return!1}return!0},
oM:function(a,b,c){Object.defineProperty(a,H.L(b),{value:c,enumerable:false,writable:true,configurable:true})},
mQ:function(a){var z,y,x,w,v,u
z=H.L($.fS.$1(a))
y=$.cD[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cG[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.L($.fL.$2(a,z))
if(z!=null){y=$.cD[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cG[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cH(x)
$.cD[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cG[z]=x
return x}if(v==="-"){u=H.cH(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fY(a,x)
if(v==="*")throw H.a(P.c7(z))
if(init.leafTags[z]===true){u=H.cH(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fY(a,x)},
fY:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dF(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cH:function(a){return J.dF(a,!1,null,!!a.$isF)},
n9:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cH(z)
else return J.dF(z,c,null,null)},
mL:function(){if(!0===$.dD)return
$.dD=!0
H.mM()},
mM:function(){var z,y,x,w,v,u,t,s
$.cD=Object.create(null)
$.cG=Object.create(null)
H.mH()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.h_.$1(v)
if(u!=null){t=H.n9(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mH:function(){var z,y,x,w,v,u,t
z=C.M()
z=H.bp(C.J,H.bp(C.O,H.bp(C.u,H.bp(C.u,H.bp(C.N,H.bp(C.K,H.bp(C.L(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fS=new H.mI(v)
$.fL=new H.mJ(u)
$.h_=new H.mK(t)},
bp:function(a,b){return a(b)||b},
h0:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
h1:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hq:{"^":"b;$ti",
i:function(a){return P.d0(this)},
m:function(a,b,c){H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
return H.hr()},
$isI:1},
hs:{"^":"hq;a,b,c,$ti",
gl:function(a){return this.a},
bp:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
k:function(a,b){if(!this.bp(0,b))return
return this.d7(b)},
d7:function(a){return this.b[H.L(a)]},
I:function(a,b){var z,y,x,w,v
z=H.y(this,1)
H.h(b,{func:1,ret:-1,args:[H.y(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.z(this.d7(v),z))}}},
iP:{"^":"b;a,b,c,d,e,f,r,0x",p:{
iQ:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bz(z)
y=z[0]
x=z[1]
return new H.iP(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jA:{"^":"b;a,b,c,d,e,f",
aa:function(a){var z,y,x
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
aE:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.e([],[P.i])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jA(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
ct:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eX:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iw:{"^":"a5;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.l(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
et:function(a,b){return new H.iw(a,b==null?null:b.method)}}},
hW:{"^":"a5;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.l(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.l(this.a)+")"},
p:{
cZ:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hW(a,y,z?null:b.receiver)}}},
jO:{"^":"a5;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
nn:{"^":"m:17;a",
$1:function(a){if(!!J.H(a).$isa5)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fq:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isax:1},
m:{"^":"b;",
i:function(a){return"Closure '"+H.bc(this).trim()+"'"},
geg:function(){return this},
$iscT:1,
geg:function(){return this}},
eJ:{"^":"m;"},
jd:{"^":"eJ;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cN:{"^":"eJ;a,b,c,d",
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cN))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gT:function(a){var z,y
z=this.c
if(z==null)y=H.bF(this.a)
else y=typeof z!=="object"?J.bU(z):H.bF(z)
return(y^H.bF(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bc(z)+"'")},
p:{
cO:function(a){return a.a},
dQ:function(a){return a.c},
ce:function(a){var z,y,x,w,v
z=new H.cN("self","target","receiver","name")
y=J.bz(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jB:{"^":"a5;a",
i:function(a){return this.a},
p:{
ay:function(a,b){return new H.jB("TypeError: "+H.l(P.ch(a))+": type '"+H.fJ(a)+"' is not a subtype of type '"+b+"'")}}},
hi:{"^":"a5;a",
i:function(a){return this.a},
p:{
hj:function(a,b){return new H.hi("CastError: "+H.l(P.ch(a))+": type '"+H.fJ(a)+"' is not a subtype of type '"+b+"'")}}},
iZ:{"^":"a5;a",
i:function(a){return"RuntimeError: "+H.l(this.a)},
p:{
j_:function(a){return new H.iZ(a)}}},
aY:{"^":"i9;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gam:function(a){return new H.i0(this,[H.y(this,0)])},
bp:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.d4(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.d4(y,b)}else return this.hB(b)},
hB:function(a){var z=this.d
if(z==null)return!1
return this.cz(this.bW(z,this.cw(a)),a)>=0},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bh(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bh(w,b)
x=y==null?null:y.b
return x}else return this.hC(b)},
hC:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bW(z,this.cw(a))
x=this.cz(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y
H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.c0()
this.b=z}this.cX(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c0()
this.c=y}this.cX(y,b,c)}else this.hD(b,c)},
hD:function(a,b){var z,y,x,w
H.z(a,H.y(this,0))
H.z(b,H.y(this,1))
z=this.d
if(z==null){z=this.c0()
this.d=z}y=this.cw(a)
x=this.bW(z,y)
if(x==null)this.c7(z,y,[this.c1(a,b)])
else{w=this.cz(x,a)
if(w>=0)x[w].b=b
else x.push(this.c1(a,b))}},
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.aW(this))
z=z.c}},
cX:function(a,b,c){var z
H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
z=this.bh(a,b)
if(z==null)this.c7(a,b,this.c1(b,c))
else z.b=c},
eW:function(){this.r=this.r+1&67108863},
c1:function(a,b){var z,y
z=new H.i_(H.z(a,H.y(this,0)),H.z(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eW()
return z},
cw:function(a){return J.bU(a)&0x3ffffff},
cz:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.O(a[y].a,b))return y
return-1},
i:function(a){return P.d0(this)},
bh:function(a,b){return a[b]},
bW:function(a,b){return a[b]},
c7:function(a,b,c){a[b]=c},
eP:function(a,b){delete a[b]},
d4:function(a,b){return this.bh(a,b)!=null},
c0:function(){var z=Object.create(null)
this.c7(z,"<non-identifier-key>",z)
this.eP(z,"<non-identifier-key>")
return z},
$isek:1},
i_:{"^":"b;a,b,0c,0d"},
i0:{"^":"hC;a,$ti",
gl:function(a){return this.a.a},
gZ:function(a){var z,y
z=this.a
y=new H.i1(z,z.r,this.$ti)
y.c=z.e
return y}},
i1:{"^":"b;a,b,0c,0d,$ti",
gP:function(a){return this.d},
F:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aW(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
mI:{"^":"m:17;a",
$1:function(a){return this.a(a)}},
mJ:{"^":"m:30;a",
$2:function(a,b){return this.a(a,b)}},
mK:{"^":"m:27;a",
$1:function(a){return this.a(H.L(a))}},
hU:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isev:1,
$isiR:1,
p:{
hV:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.W("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mA:function(a){return J.ee(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
nc:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bn:function(a){return a},
is:function(a){return new Int8Array(a)},
aK:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aL(b,a))},
m7:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.my(a,b,c))
return b},
es:{"^":"r;",$ises:1,"%":"ArrayBuffer"},
d5:{"^":"r;",$isd5:1,$isjC:1,"%":"DataView;ArrayBufferView;d4|fk|fl|it|fm|fn|aZ"},
d4:{"^":"d5;",
gl:function(a){return a.length},
$isF:1,
$asF:I.dz},
it:{"^":"fl;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
m:function(a,b,c){H.D(b)
H.mz(c)
H.aK(b,a,a.length)
a[b]=c},
$asci:function(){return[P.u]},
$asx:function(){return[P.u]},
$isk:1,
$ask:function(){return[P.u]},
$isd:1,
$asd:function(){return[P.u]},
"%":"Float32Array|Float64Array"},
aZ:{"^":"fn;",
m:function(a,b,c){H.D(b)
H.D(c)
H.aK(b,a,a.length)
a[b]=c},
$asci:function(){return[P.o]},
$asx:function(){return[P.o]},
$isk:1,
$ask:function(){return[P.o]},
$isd:1,
$asd:function(){return[P.o]}},
nZ:{"^":"aZ;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Int16Array"},
o_:{"^":"aZ;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Int32Array"},
o0:{"^":"aZ;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Int8Array"},
o1:{"^":"aZ;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
o2:{"^":"aZ;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
o3:{"^":"aZ;",
gl:function(a){return a.length},
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
d6:{"^":"aZ;",
gl:function(a){return a.length},
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
bN:function(a,b,c){return new Uint8Array(a.subarray(b,H.m7(b,c,a.length)))},
$isd6:1,
$isP:1,
"%":";Uint8Array"},
fk:{"^":"d4+x;"},
fl:{"^":"fk+ci;"},
fm:{"^":"d4+x;"},
fn:{"^":"fm+ci;"}}],["","",,P,{"^":"",
ko:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mk()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bq(new P.kq(z),1)).observe(y,{childList:true})
return new P.kp(z,y,x)}else if(self.setImmediate!=null)return P.ml()
return P.mm()},
oA:[function(a){self.scheduleImmediate(H.bq(new P.kr(H.h(a,{func:1,ret:-1})),0))},"$1","mk",4,0,15],
oB:[function(a){self.setImmediate(H.bq(new P.ks(H.h(a,{func:1,ret:-1})),0))},"$1","ml",4,0,15],
oC:[function(a){P.de(C.q,H.h(a,{func:1,ret:-1}))},"$1","mm",4,0,15],
de:function(a,b){var z
H.h(b,{func:1,ret:-1})
z=C.d.a2(a.a,1000)
return P.lr(z<0?0:z,b)},
eM:function(a,b){var z
H.h(b,{func:1,ret:-1,args:[P.bj]})
z=C.d.a2(a.a,1000)
return P.ls(z<0?0:z,b)},
mg:function(a,b){if(H.c9(a,{func:1,args:[P.b,P.ax]}))return b.i3(a,null,P.b,P.ax)
if(H.c9(a,{func:1,args:[P.b]}))return H.h(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cd(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mf:function(){var z,y
for(;z=$.bo,z!=null;){$.bP=null
y=z.b
$.bo=y
if(y==null)$.bO=null
z.a.$0()}},
oK:[function(){$.dv=!0
try{P.mf()}finally{$.bP=null
$.dv=!1
if($.bo!=null)$.$get$dp().$1(P.fN())}},"$0","fN",0,0,3],
fI:function(a){var z=new P.fe(H.h(a,{func:1,ret:-1}))
if($.bo==null){$.bO=z
$.bo=z
if(!$.dv)$.$get$dp().$1(P.fN())}else{$.bO.b=z
$.bO=z}},
mj:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
z=$.bo
if(z==null){P.fI(a)
$.bP=$.bO
return}y=new P.fe(a)
x=$.bP
if(x==null){y.b=z
$.bP=y
$.bo=y}else{y.b=x.b
x.b=y
$.bP=y
if(y.b==null)$.bO=y}},
ne:function(a){var z,y
z={func:1,ret:-1}
H.h(a,z)
y=$.T
if(C.j===y){P.cC(null,null,C.j,a)
return}y.toString
P.cC(null,null,y,H.h(y.ce(a),z))},
eL:function(a,b){var z,y
z={func:1,ret:-1}
H.h(b,z)
y=$.T
if(y===C.j){y.toString
return P.de(a,b)}return P.de(a,H.h(y.ce(b),z))},
jx:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bj]}
H.h(b,z)
y=$.T
if(y===C.j){y.toString
return P.eM(a,b)}x=y.dq(b,P.bj)
$.T.toString
return P.eM(a,H.h(x,z))},
cB:function(a,b,c,d,e){var z={}
z.a=d
P.mj(new P.mh(z,e))},
fE:function(a,b,c,d,e){var z,y
H.h(d,{func:1,ret:e})
y=$.T
if(y===c)return d.$0()
$.T=c
z=y
try{y=d.$0()
return y}finally{$.T=z}},
fF:function(a,b,c,d,e,f,g){var z,y
H.h(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.T
if(y===c)return d.$1(e)
$.T=c
z=y
try{y=d.$1(e)
return y}finally{$.T=z}},
mi:function(a,b,c,d,e,f,g,h,i){var z,y
H.h(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.T
if(y===c)return d.$2(e,f)
$.T=c
z=y
try{y=d.$2(e,f)
return y}finally{$.T=z}},
cC:function(a,b,c,d){var z
H.h(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.ce(d):c.hh(d,-1)
P.fI(d)},
kq:{"^":"m:24;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kp:{"^":"m:53;a,b,c",
$1:function(a){var z,y
this.a.a=H.h(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kr:{"^":"m:0;a",
$0:function(){this.a.$0()}},
ks:{"^":"m:0;a",
$0:function(){this.a.$0()}},
fu:{"^":"b;a,0b,c",
eC:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bq(new P.lu(this,b),0),a)
else throw H.a(P.A("`setTimeout()` not found."))},
eD:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bq(new P.lt(this,a,Date.now(),b),0),a)
else throw H.a(P.A("Periodic timer."))},
$isbj:1,
p:{
lr:function(a,b){var z=new P.fu(!0,0)
z.eC(a,b)
return z},
ls:function(a,b){var z=new P.fu(!1,0)
z.eD(a,b)
return z}}},
lu:{"^":"m:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lt:{"^":"m:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.d.eq(w,x)}z.c=y
this.d.$1(z)}},
bm:{"^":"b;0a,b,c,d,e,$ti",
hL:function(a){if(this.c!==6)return!0
return this.b.b.cK(H.h(this.d,{func:1,ret:P.ah,args:[P.b]}),a.a,P.ah,P.b)},
hA:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.c9(z,{func:1,args:[P.b,P.ax]}))return H.dA(w.ib(z,a.a,a.b,null,y,P.ax),x)
else return H.dA(w.cK(H.h(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aT:{"^":"b;di:a<,b,0fD:c<,$ti",
eb:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.T
if(y!==C.j){y.toString
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.mg(b,y)}H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aT(0,$.T,[c])
w=b==null?1:3
this.cY(new P.bm(x,w,a,b,[z,c]))
return x},
ii:function(a,b){return this.eb(a,null,b)},
cY:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isbm")
this.c=a}else{if(z===2){y=H.f(this.c,"$isaT")
z=y.a
if(z<4){y.cY(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cC(null,null,z,H.h(new P.kH(this,a),{func:1,ret:-1}))}},
dd:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isbm")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isaT")
y=u.a
if(y<4){u.dd(a)
return}this.a=y
this.c=u.c}z.a=this.bj(a)
y=this.b
y.toString
P.cC(null,null,y,H.h(new P.kM(z,this),{func:1,ret:-1}))}},
c3:function(){var z=H.f(this.c,"$isbm")
this.c=null
return this.bj(z)},
bj:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
d1:function(a){var z,y,x,w
z=H.y(this,0)
H.dA(a,{futureOr:1,type:z})
y=this.$ti
x=H.bR(a,"$isby",y,"$asby")
if(x){z=H.bR(a,"$isaT",y,null)
if(z)P.fh(a,this)
else P.kI(a,this)}else{w=this.c3()
H.z(a,z)
this.a=4
this.c=a
P.bK(this,w)}},
bS:[function(a,b){var z
H.f(b,"$isax")
z=this.c3()
this.a=8
this.c=new P.ak(a,b)
P.bK(this,z)},function(a){return this.bS(a,null)},"iv","$2","$1","geL",4,2,28],
$isby:1,
p:{
kI:function(a,b){var z,y,x
b.a=1
try{a.eb(new P.kJ(b),new P.kK(b),null)}catch(x){z=H.as(x)
y=H.bs(x)
P.ne(new P.kL(b,z,y))}},
fh:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isaT")
if(z>=4){y=b.c3()
b.a=a.a
b.c=a.c
P.bK(b,y)}else{y=H.f(b.c,"$isbm")
b.a=2
b.c=a
a.dd(y)}},
bK:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isak")
y=y.b
u=v.a
t=v.b
y.toString
P.cB(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bK(z.a,b)}y=z.a
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
if(p){H.f(r,"$isak")
y=y.b
u=r.a
t=r.b
y.toString
P.cB(null,null,y,u,t)
return}o=$.T
if(o==null?q!=null:o!==q)$.T=q
else o=null
y=b.c
if(y===8)new P.kP(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kO(x,b,r).$0()}else if((y&2)!==0)new P.kN(z,x,b).$0()
if(o!=null)$.T=o
y=x.b
if(!!J.H(y).$isby){if(y.a>=4){n=H.f(t.c,"$isbm")
t.c=null
b=t.bj(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fh(y,t)
return}}m=b.b
n=H.f(m.c,"$isbm")
m.c=null
b=m.bj(n)
y=x.a
u=x.b
if(!y){H.z(u,H.y(m,0))
m.a=4
m.c=u}else{H.f(u,"$isak")
m.a=8
m.c=u}z.a=m
y=m}}}},
kH:{"^":"m:0;a,b",
$0:function(){P.bK(this.a,this.b)}},
kM:{"^":"m:0;a,b",
$0:function(){P.bK(this.b,this.a.a)}},
kJ:{"^":"m:24;a",
$1:function(a){var z=this.a
z.a=0
z.d1(a)}},
kK:{"^":"m:29;a",
$2:function(a,b){this.a.bS(a,H.f(b,"$isax"))},
$1:function(a){return this.$2(a,null)}},
kL:{"^":"m:0;a,b,c",
$0:function(){this.a.bS(this.b,this.c)}},
kP:{"^":"m:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.e9(H.h(w.d,{func:1}),null)}catch(v){y=H.as(v)
x=H.bs(v)
if(this.d){w=H.f(this.a.a.c,"$isak").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isak")
else u.b=new P.ak(y,x)
u.a=!0
return}if(!!J.H(z).$isby){if(z instanceof P.aT&&z.gdi()>=4){if(z.gdi()===8){w=this.b
w.b=H.f(z.gfD(),"$isak")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ii(new P.kQ(t),null)
w.a=!1}}},
kQ:{"^":"m:45;a",
$1:function(a){return this.a}},
kO:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.z(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.cK(H.h(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.as(t)
y=H.bs(t)
x=this.a
x.b=new P.ak(z,y)
x.a=!0}}},
kN:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isak")
w=this.c
if(w.hL(z)&&w.e!=null){v=this.b
v.b=w.hA(z)
v.a=!1}}catch(u){y=H.as(u)
x=H.bs(u)
w=H.f(this.a.a.c,"$isak")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ak(y,x)
s.a=!0}}},
fe:{"^":"b;a,0b"},
da:{"^":"b;$ti",
gl:function(a){var z,y
z={}
y=new P.aT(0,$.T,[P.o])
z.a=0
this.hI(new P.jg(z,this),!0,new P.jh(z,y),y.geL())
return y}},
jg:{"^":"m;a,b",
$1:function(a){H.z(a,H.aA(this.b,"da",0));++this.a.a},
$S:function(){return{func:1,ret:P.E,args:[H.aA(this.b,"da",0)]}}},
jh:{"^":"m:0;a,b",
$0:function(){this.b.d1(this.a.a)}},
eF:{"^":"b;$ti"},
jf:{"^":"b;"},
bj:{"^":"b;"},
ak:{"^":"b;a,b",
i:function(a){return H.l(this.a)},
$isa5:1},
lW:{"^":"b;",$isoz:1},
mh:{"^":"m:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eu()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
la:{"^":"lW;",
ic:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
try{if(C.j===$.T){a.$0()
return}P.fE(null,null,this,a,-1)}catch(x){z=H.as(x)
y=H.bs(x)
P.cB(null,null,this,z,H.f(y,"$isax"))}},
ie:function(a,b,c){var z,y,x
H.h(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.j===$.T){a.$1(b)
return}P.fF(null,null,this,a,b,-1,c)}catch(x){z=H.as(x)
y=H.bs(x)
P.cB(null,null,this,z,H.f(y,"$isax"))}},
hh:function(a,b){return new P.lc(this,H.h(a,{func:1,ret:b}),b)},
ce:function(a){return new P.lb(this,H.h(a,{func:1,ret:-1}))},
dq:function(a,b){return new P.ld(this,H.h(a,{func:1,ret:-1,args:[b]}),b)},
e9:function(a,b){H.h(a,{func:1,ret:b})
if($.T===C.j)return a.$0()
return P.fE(null,null,this,a,b)},
cK:function(a,b,c,d){H.h(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.T===C.j)return a.$1(b)
return P.fF(null,null,this,a,b,c,d)},
ib:function(a,b,c,d,e,f){H.h(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.T===C.j)return a.$2(b,c)
return P.mi(null,null,this,a,b,c,d,e,f)},
i3:function(a,b,c,d){return H.h(a,{func:1,ret:b,args:[c,d]})}},
lc:{"^":"m;a,b,c",
$0:function(){return this.a.e9(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
lb:{"^":"m:3;a,b",
$0:function(){return this.a.ic(this.b)}},
ld:{"^":"m;a,b,c",
$1:function(a){var z=this.c
return this.a.ie(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
i2:function(a,b,c,d,e){return new H.aY(0,0,[d,e])},
i3:function(a,b,c){H.bT(a)
return H.w(H.mB(a,new H.aY(0,0,[b,c])),"$isek",[b,c],"$asek")},
el:function(a,b){return new H.aY(0,0,[a,b])},
i5:function(a,b,c,d){return new P.kX(0,0,[d])},
hQ:function(a,b,c){var z,y
if(P.dw(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bQ()
C.a.h(y,a)
try{P.me(a,z)}finally{if(0>=y.length)return H.c(y,-1)
y.pop()}y=P.eG(b,H.fW(z,"$isk"),", ")+c
return y.charCodeAt(0)==0?y:y},
cV:function(a,b,c){var z,y,x
if(P.dw(a))return b+"..."+c
z=new P.am(b)
y=$.$get$bQ()
C.a.h(y,a)
try{x=z
x.a=P.eG(x.gaD(),a,", ")}finally{if(0>=y.length)return H.c(y,-1)
y.pop()}y=z
y.a=y.gaD()+c
y=z.gaD()
return y.charCodeAt(0)==0?y:y},
dw:function(a){var z,y
for(z=0;y=$.$get$bQ(),z<y.length;++z)if(a===y[z])return!0
return!1},
me:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gZ(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.F())return
w=H.l(z.gP(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.F()){if(x<=5)return
if(0>=b.length)return H.c(b,-1)
v=b.pop()
if(0>=b.length)return H.c(b,-1)
u=b.pop()}else{t=z.gP(z);++x
if(!z.F()){if(x<=4){C.a.h(b,H.l(t))
return}v=H.l(t)
if(0>=b.length)return H.c(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gP(z);++x
for(;z.F();t=s,s=r){r=z.gP(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.c(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.l(t)
v=H.l(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
em:function(a,b,c){var z=P.i2(null,null,null,b,c)
a.I(0,new P.i4(z,b,c))
return z},
d0:function(a){var z,y,x
z={}
if(P.dw(a))return"{...}"
y=new P.am("")
try{C.a.h($.$get$bQ(),a)
x=y
x.a=x.gaD()+"{"
z.a=!0
J.dK(a,new P.ia(z,y))
z=y
z.a=z.gaD()+"}"}finally{z=$.$get$bQ()
if(0>=z.length)return H.c(z,-1)
z.pop()}z=y.gaD()
return z.charCodeAt(0)==0?z:z},
kX:{"^":"kR;a,0b,0c,0d,0e,0f,r,$ti",
gZ:function(a){return P.fj(this,this.r,H.y(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.z(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dr()
this.b=z}return this.d_(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dr()
this.c=y}return this.d_(y,b)}else return this.eE(0,b)},
eE:function(a,b){var z,y,x
H.z(b,H.y(this,0))
z=this.d
if(z==null){z=P.dr()
this.d=z}y=this.d2(b)
x=z[y]
if(x==null)z[y]=[this.bR(b)]
else{if(this.d8(x,b)>=0)return!1
x.push(this.bR(b))}return!0},
O:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.de(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.de(this.c,b)
else return this.ft(0,b)},
ft:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.eT(z,b)
x=this.d8(y,b)
if(x<0)return!1
this.dk(y.splice(x,1)[0])
return!0},
d_:function(a,b){H.z(b,H.y(this,0))
if(H.f(a[b],"$isdq")!=null)return!1
a[b]=this.bR(b)
return!0},
de:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isdq")
if(z==null)return!1
this.dk(z)
delete a[b]
return!0},
d0:function(){this.r=this.r+1&67108863},
bR:function(a){var z,y
z=new P.dq(H.z(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.d0()
return z},
dk:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.d0()},
d2:function(a){return J.bU(a)&0x3ffffff},
eT:function(a,b){return a[this.d2(b)]},
d8:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.O(a[y].a,b))return y
return-1},
p:{
dr:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dq:{"^":"b;a,0b,0c"},
kY:{"^":"b;a,b,0c,0d,$ti",
gP:function(a){return this.d},
F:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aW(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.z(z.a,H.y(this,0))
this.c=z.b
return!0}}},
p:{
fj:function(a,b,c){var z=new P.kY(a,b,[c])
z.c=a.e
return z}}},
kR:{"^":"j0;"},
i4:{"^":"m:7;a,b,c",
$2:function(a,b){this.a.m(0,H.z(a,this.b),H.z(b,this.c))}},
cm:{"^":"kZ;",$isk:1,$isd:1},
x:{"^":"b;$ti",
gZ:function(a){return new H.en(a,this.gl(a),0,[H.aV(this,a,"x",0)])},
J:function(a,b){return this.k(a,b)},
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.aV(this,a,"x",0)]})
z=this.gl(a)
if(typeof z!=="number")return H.n(z)
y=0
for(;y<z;++y){b.$1(this.k(a,y))
if(z!==this.gl(a))throw H.a(P.aW(a))}},
il:function(a,b){var z,y,x
z=H.e([],[H.aV(this,a,"x",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.n(x)
if(!(y<x))break
C.a.m(z,y,this.k(a,y));++y}return z},
ik:function(a){return this.il(a,!0)},
aw:function(a,b,c,d){var z
H.z(d,H.aV(this,a,"x",0))
P.aR(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.m(a,z,d)},
i:function(a){return P.cV(a,"[","]")}},
i9:{"^":"ai;"},
ia:{"^":"m:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.l(a)
z.a=y+": "
z.a+=H.l(b)}},
ai:{"^":"b;$ti",
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.aV(this,a,"ai",0),H.aV(this,a,"ai",1)]})
for(z=J.bv(this.gam(a));z.F();){y=z.gP(z)
b.$2(y,this.k(a,y))}},
gl:function(a){return J.at(this.gam(a))},
i:function(a){return P.d0(a)},
$isI:1},
lz:{"^":"b;$ti",
m:function(a,b,c){H.z(b,H.y(this,0))
H.z(c,H.y(this,1))
throw H.a(P.A("Cannot modify unmodifiable map"))}},
ib:{"^":"b;$ti",
k:function(a,b){return J.dJ(this.a,b)},
m:function(a,b,c){J.cI(this.a,H.z(b,H.y(this,0)),H.z(c,H.y(this,1)))},
I:function(a,b){J.dK(this.a,H.h(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]}))},
gl:function(a){return J.at(this.a)},
i:function(a){return J.aa(this.a)},
$isI:1},
f7:{"^":"lA;a,$ti"},
j2:{"^":"b;$ti",
i:function(a){return P.cV(this,"{","}")},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dL("index"))
if(b<0)H.p(P.a0(b,0,null,"index",null))
for(z=P.fj(this,this.r,H.y(this,0)),y=0;z.F();){x=z.d
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
$isk:1},
j0:{"^":"j2;"},
kZ:{"^":"b+x;"},
lA:{"^":"ib+lz;$ti"}}],["","",,P,{"^":"",hf:{"^":"bW;a",
hO:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aR(c,d,b.length,null,null,null)
z=$.$get$ff()
if(typeof d!=="number")return H.n(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.H(b,y)
if(r===37){q=s+2
if(q<=d){p=H.cF(C.b.H(b,s))
o=H.cF(C.b.H(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.c(z,n)
m=z[n]
if(m>=0){n=C.b.V("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.am("")
w.a+=C.b.q(b,x,y)
w.a+=H.cp(r)
x=s
continue}}throw H.a(P.W("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.q(b,x,d)
k=l.length
if(v>=0)P.dO(b,u,d,v,t,k)
else{j=C.d.ah(k-1,4)+1
if(j===1)throw H.a(P.W("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aQ(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dO(b,u,d,v,t,i)
else{j=C.d.ah(i,4)
if(j===1)throw H.a(P.W("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aQ(b,d,d,j===2?"==":"=")}return b},
$asbW:function(){return[[P.d,P.o],P.i]},
p:{
dO:function(a,b,c,d,e,f){if(C.d.ah(f,4)!==0)throw H.a(P.W("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.W("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.W("Invalid base64 padding, more than two '=' characters",a,b))}}},hg:{"^":"bx;a",
$asbx:function(){return[[P.d,P.o],P.i]}},bW:{"^":"b;$ti"},bx:{"^":"jf;$ti"},hE:{"^":"bW;",
$asbW:function(){return[P.i,[P.d,P.o]]}},k1:{"^":"hE;a",
ghu:function(){return C.F}},k8:{"^":"bx;",
aY:function(a,b,c){var z,y,x,w
z=a.length
P.aR(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.lV(0,0,x)
if(w.eR(a,b,z)!==z)w.dl(J.h7(a,z-1),0)
return C.V.bN(x,0,w.b)},
cl:function(a){return this.aY(a,0,null)},
$asbx:function(){return[P.i,[P.d,P.o]]}},lV:{"^":"b;a,b,c",
dl:function(a,b){var z,y,x,w,v
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
eR:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.V(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.H(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dl(w,C.b.H(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},k2:{"^":"bx;a",
aY:function(a,b,c){var z,y,x,w,v
H.w(a,"$isd",[P.o],"$asd")
z=P.k3(!1,a,b,c)
if(z!=null)return z
y=J.at(a)
P.aR(b,c,y,null,null,null)
x=new P.am("")
w=new P.lS(!1,x,!0,0,0,0)
w.aY(a,b,y)
w.hw(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cl:function(a){return this.aY(a,0,null)},
$asbx:function(){return[[P.d,P.o],P.i]},
p:{
k3:function(a,b,c,d){H.w(b,"$isd",[P.o],"$asd")
if(b instanceof Uint8Array)return P.k4(!1,b,c,d)
return},
k4:function(a,b,c,d){var z,y,x
z=$.$get$fb()
if(z==null)return
y=0===c
if(y&&!0)return P.dj(z,b)
x=b.length
d=P.aR(c,d,x,null,null,null)
if(y&&d===x)return P.dj(z,b)
return P.dj(z,b.subarray(c,d))},
dj:function(a,b){if(P.k6(b))return
return P.k7(a,b)},
k7:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.as(y)}return},
k6:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
k5:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.as(y)}return}}},lS:{"^":"b;a,b,c,d,e,f",
hw:function(a,b,c){var z
H.w(b,"$isd",[P.o],"$asd")
if(this.e>0){z=P.W("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
aY:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.w(a,"$isd",[P.o],"$asd")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.lU(c)
v=new P.lT(this,b,c,a)
$label0$0:for(u=J.aM(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.k(a,s)
if(typeof r!=="number")return r.bJ()
if((r&192)!==128){q=P.W("Bad UTF-8 encoding 0x"+C.d.bb(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.c(C.w,q)
if(z<=C.w[q]){q=P.W("Overlong encoding of 0x"+C.d.bb(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.W("Character outside valid Unicode range: 0x"+C.d.bb(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cp(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.bL()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.k(a,o)
if(typeof r!=="number")return r.L()
if(r<0){m=P.W("Negative UTF-8 code unit: -0x"+C.d.bb(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.W("Bad UTF-8 encoding 0x"+C.d.bb(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},lU:{"^":"m:41;a",
$2:function(a,b){var z,y,x,w
H.w(a,"$isd",[P.o],"$asd")
z=this.a
for(y=J.aM(a),x=b;x<z;++x){w=y.k(a,x)
if(typeof w!=="number")return w.bJ()
if((w&127)!==w)return x-b}return z-b}},lT:{"^":"m:42;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.c6(this.d,a,b)}}}],["","",,P,{"^":"",
bS:function(a,b,c){var z
H.h(b,{func:1,ret:P.o,args:[P.i]})
z=H.iJ(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.W(a,null,null))},
hG:function(a){var z=J.H(a)
if(!!z.$ism)return z.i(a)
return"Instance of '"+H.bc(a)+"'"},
i6:function(a,b,c,d){var z,y
H.z(b,d)
z=J.hS(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.w(z,"$isd",[d],"$asd")},
eo:function(a,b,c){var z,y,x
z=[c]
y=H.e([],z)
for(x=a.gZ(a);x.F();)C.a.h(y,H.z(x.gP(x),c))
if(b)return y
return H.w(J.bz(y),"$isd",z,"$asd")},
c6:function(a,b,c){var z,y
z=P.o
H.w(a,"$isk",[z],"$ask")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.w(a,"$isb8",[z],"$asb8")
y=a.length
c=P.aR(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.L()
z=c<y}else z=!0
return H.ey(z?C.a.bN(a,b,c):a)}if(!!J.H(a).$isd6)return H.iL(a,b,P.aR(b,c,a.length,null,null,null))
return P.ji(a,b,c)},
ji:function(a,b,c){var z,y,x,w
H.w(a,"$isk",[P.o],"$ask")
if(b<0)throw H.a(P.a0(b,0,J.at(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a0(c,b,J.at(a),null,null))
y=J.bv(a)
for(x=0;x<b;++x)if(!y.F())throw H.a(P.a0(b,0,x,null,null))
w=[]
if(z)for(;y.F();)w.push(y.gP(y))
else for(x=b;x<c;++x){if(!y.F())throw H.a(P.a0(c,b,x,null,null))
w.push(y.gP(y))}return H.ey(w)},
iS:function(a,b,c){return new H.hU(a,H.hV(a,!1,!0,!1))},
cv:function(){var z=H.iB()
if(z!=null)return P.jU(z,0,null)
throw H.a(P.A("'Uri.base' is not supported"))},
ch:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aa(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hG(a)},
v:function(a){return new P.fg(a)},
i7:function(a,b,c,d){var z,y
H.h(b,{func:1,ret:d,args:[P.o]})
z=H.e([],[d])
C.a.sl(z,a)
for(y=0;y<a;++y)C.a.m(z,y,b.$1(y))
return z},
dH:function(a){H.nc(a)},
jU:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.H(a,b+4)^58)*3|C.b.H(a,b)^100|C.b.H(a,b+1)^97|C.b.H(a,b+2)^116|C.b.H(a,b+3)^97)>>>0
if(y===0)return P.f8(b>0||c<c?C.b.q(a,b,c):a,5,null).gee()
else if(y===32)return P.f8(C.b.q(a,z,c),0,null).gee()}x=new Array(8)
x.fixed$length=Array
w=H.e(x,[P.o])
C.a.m(w,0,0)
x=b-1
C.a.m(w,1,x)
C.a.m(w,2,x)
C.a.m(w,7,x)
C.a.m(w,3,b)
C.a.m(w,4,b)
C.a.m(w,5,c)
C.a.m(w,6,c)
if(P.fG(a,b,c,0,w)>=14)C.a.m(w,7,c)
v=w[1]
if(typeof v!=="number")return v.ir()
if(v>=b)if(P.fG(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.w()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.L()
if(typeof r!=="number")return H.n(r)
if(q<r)r=q
if(typeof s!=="number")return s.L()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.L()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.L()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.a8(a,"..",s)))n=r>s+2&&C.b.a8(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.a8(a,"file",b)){if(u<=b){if(!C.b.a8(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.b.q(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.b.aQ(a,s,r,"/");++r;++q;++c}else{a=C.b.q(a,b,s)+"/"+C.b.q(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.a8(a,"http",b)){if(x&&t+3===s&&C.b.a8(a,"80",t+1))if(b===0&&!0){a=C.b.aQ(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.b.q(a,b,t)+C.b.q(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.b.a8(a,"https",b)){if(x&&t+4===s&&C.b.a8(a,"443",t+1))if(b===0&&!0){a=C.b.aQ(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.b.q(a,b,t)+C.b.q(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.b.q(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.lf(a,v,u,t,s,r,q,o)}return P.lB(a,b,c,v,u,t,s,r,q,o)},
fa:function(a,b){var z=P.i
return C.a.hx(H.e(a.split("&"),[z]),P.el(z,z),new P.jX(b),[P.I,P.i,P.i])},
jS:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.jT(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.V(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.bS(C.b.q(a,v,w),null,null)
if(typeof s!=="number")return s.bL()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.c(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.bS(C.b.q(a,v,c),null,null)
if(typeof s!=="number")return s.bL()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.c(y,u)
y[u]=s
return y},
f9:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.jV(a)
y=new P.jW(z,a)
if(a.length<2)z.$1("address is too short")
x=H.e([],[P.o])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.V(a,w)
if(s===58){if(w===b){++w
if(C.b.V(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gax(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.jS(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.c(o,l)
o[l]=0
i=l+1
if(i>=n)return H.c(o,i)
o[i]=0
l+=2}else{i=C.d.aG(k,8)
if(l<0||l>=n)return H.c(o,l)
o[l]=i
i=l+1
if(i>=n)return H.c(o,i)
o[i]=k&255
l+=2}}return o},
m8:function(){var z,y,x,w,v
z=P.i7(22,new P.ma(),!0,P.P)
y=new P.m9(z)
x=new P.mb()
w=new P.mc()
v=H.f(y.$2(0,225),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(14,225),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(15,225),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(1,225),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(2,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(3,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(4,229),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(5,229),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(6,231),"$isP")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(7,231),"$isP")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.f(y.$2(8,8),"$isP"),"]",5)
v=H.f(y.$2(9,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(16,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(17,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(10,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(18,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(19,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(11,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.f(y.$2(12,236),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.f(y.$2(13,237),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.f(y.$2(20,245),"$isP"),"az",21)
v=H.f(y.$2(21,245),"$isP")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fG:function(a,b,c,d,e){var z,y,x,w,v
H.w(e,"$isd",[P.o],"$asd")
z=$.$get$fH()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.c(z,d)
x=z[d]
w=C.b.H(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.c(x,w)
v=x[w]
d=v&31
C.a.m(e,v>>>5,y)}return d},
ah:{"^":"b;"},
"+bool":0,
al:{"^":"b;a,b",
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.al))return!1
return this.a===b.a&&this.b===b.b},
gT:function(a){var z=this.a
return(z^C.d.aG(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.hw(H.iI(this))
y=P.bY(H.iG(this))
x=P.bY(H.iC(this))
w=P.bY(H.iD(this))
v=P.bY(H.iF(this))
u=P.bY(H.iH(this))
t=P.hx(H.iE(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
hw:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hx:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bY:function(a){if(a>=10)return""+a
return"0"+a}}},
u:{"^":"a1;"},
"+double":0,
b5:{"^":"b;a",
j:function(a,b){return new P.b5(C.d.ac(this.a*b))},
L:function(a,b){return C.d.L(this.a,H.f(b,"$isb5").a)},
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.b5))return!1
return this.a===b.a},
gT:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hB()
y=this.a
if(y<0)return"-"+new P.b5(0-y).i(0)
x=z.$1(C.d.a2(y,6e7)%60)
w=z.$1(C.d.a2(y,1e6)%60)
v=new P.hA().$1(y%1e6)
return""+C.d.a2(y,36e8)+":"+H.l(x)+":"+H.l(w)+"."+H.l(v)},
p:{
e7:function(a,b,c,d,e,f){return new P.b5(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hA:{"^":"m:25;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hB:{"^":"m:25;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a5:{"^":"b;"},
eu:{"^":"a5;",
i:function(a){return"Throw of null."}},
aN:{"^":"a5;a,b,c,d",
gbU:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbT:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.l(z)
w=this.gbU()+y+x
if(!this.a)return w
v=this.gbT()
u=P.ch(this.b)
return w+v+": "+H.l(u)},
p:{
bV:function(a){return new P.aN(!1,null,null,a)},
cd:function(a,b,c){return new P.aN(!0,a,b,c)},
dL:function(a){return new P.aN(!1,null,a,"Must not be null")}}},
cq:{"^":"aN;e,f,a,b,c,d",
gbU:function(){return"RangeError"},
gbT:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.l(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.l(z)
else if(x>z)y=": Not in range "+H.l(z)+".."+H.l(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.l(z)}return y},
p:{
cr:function(a,b,c){return new P.cq(null,null,!0,a,b,"Value not in range")},
a0:function(a,b,c,d,e){return new P.cq(b,c,!0,a,d,"Invalid value")},
aR:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.n(a)
if(0<=a){if(typeof c!=="number")return H.n(c)
z=a>c}else z=!0
if(z)throw H.a(P.a0(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.n(c)
z=b>c}else z=!0
if(z)throw H.a(P.a0(b,a,c,"end",f))
return b}return c}}},
hO:{"^":"aN;e,l:f>,a,b,c,d",
gbU:function(){return"RangeError"},
gbT:function(){if(J.h3(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.l(z)},
p:{
S:function(a,b,c,d,e){var z=H.D(e!=null?e:J.at(b))
return new P.hO(b,z,!0,a,c,"Index out of range")}}},
jQ:{"^":"a5;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
A:function(a){return new P.jQ(a)}}},
jN:{"^":"a5;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
c7:function(a){return new P.jN(a)}}},
jc:{"^":"a5;a",
i:function(a){return"Bad state: "+this.a}},
hp:{"^":"a5;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.l(P.ch(z))+"."},
p:{
aW:function(a){return new P.hp(a)}}},
ix:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa5:1},
eD:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa5:1},
hv:{"^":"a5;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fg:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
hM:{"^":"b;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.l(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.q(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.H(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.b.V(w,s)
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
m=""}l=C.b.q(w,o,p)
return y+n+l+m+"\n"+C.b.j(" ",x-o+n.length)+"^\n"},
p:{
W:function(a,b,c){return new P.hM(a,b,c)}}},
o:{"^":"a1;"},
"+int":0,
k:{"^":"b;$ti",
gl:function(a){var z,y
z=this.gZ(this)
for(y=0;z.F();)++y
return y},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dL("index"))
if(b<0)H.p(P.a0(b,0,null,"index",null))
for(z=this.gZ(this),y=0;z.F();){x=z.gP(z)
if(b===y)return x;++y}throw H.a(P.S(b,this,"index",null,y))},
i:function(a){return P.hQ(this,"(",")")}},
cW:{"^":"b;$ti"},
d:{"^":"b;$ti",$isk:1},
"+List":0,
I:{"^":"b;$ti"},
E:{"^":"b;",
gT:function(a){return P.b.prototype.gT.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a1:{"^":"b;"},
"+num":0,
b:{"^":";",
t:function(a,b){return this===b},
gT:function(a){return H.bF(this)},
i:function(a){return"Instance of '"+H.bc(this)+"'"},
toString:function(){return this.i(this)}},
ax:{"^":"b;"},
i:{"^":"b;",$isev:1},
"+String":0,
am:{"^":"b;aD:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$ison:1,
p:{
eG:function(a,b,c){var z=J.bv(b)
if(!z.F())return a
if(c.length===0){do a+=H.l(z.gP(z))
while(z.F())}else{a+=H.l(z.gP(z))
for(;z.F();)a=a+c+H.l(z.gP(z))}return a}}},
jX:{"^":"m:40;a",
$2:function(a,b){var z,y,x,w
z=P.i
H.w(a,"$isI",[z,z],"$asI")
H.L(b)
y=J.aM(b).dX(b,"=")
if(y===-1){if(b!=="")J.cI(a,P.dt(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.q(b,0,y)
w=C.b.ay(b,y+1)
z=this.a
J.cI(a,P.dt(x,0,x.length,z,!0),P.dt(w,0,w.length,z,!0))}return a}},
jT:{"^":"m:39;a",
$2:function(a,b){throw H.a(P.W("Illegal IPv4 address, "+a,this.a,b))}},
jV:{"^":"m:43;a",
$2:function(a,b){throw H.a(P.W("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
jW:{"^":"m:46;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.bS(C.b.q(this.b,a,b),null,16)
if(typeof z!=="number")return z.L()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cy:{"^":"b;bM:a<,b,c,d,e5:e>,f,r,0x,0y,0z,0Q,0ch",
gef:function(){return this.b},
gcv:function(a){var z=this.c
if(z==null)return""
if(C.b.a7(z,"["))return C.b.q(z,1,z.length-1)
return z},
gbE:function(a){var z=this.d
if(z==null)return P.fw(this.a)
return z},
gcG:function(a){var z=this.f
return z==null?"":z},
gdS:function(){var z=this.r
return z==null?"":z},
cJ:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isI",[P.i,null],"$asI")
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
if(x&&!C.b.a7(d,"/"))d="/"+d
g=P.ds(g,0,0,h)
return new P.cy(i,j,c,f,d,g,this.r)},
cI:function(a,b){return this.cJ(a,null,null,null,null,null,null,b,null,null)},
gb8:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.i
y=new P.f7(P.fa(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
gdT:function(){return this.c!=null},
gdW:function(){return this.f!=null},
gdU:function(){return this.r!=null},
i:function(a){var z,y,x,w
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
z=J.H(b)
if(!!z.$isdi){y=this.a
x=b.gbM()
if(y==null?x==null:y===x)if(this.c!=null===b.gdT()){y=this.b
x=b.gef()
if(y==null?x==null:y===x){y=this.gcv(this)
x=z.gcv(b)
if(y==null?x==null:y===x){y=this.gbE(this)
x=z.gbE(b)
if(y==null?x==null:y===x)if(this.e===z.ge5(b)){y=this.f
x=y==null
if(!x===b.gdW()){if(x)y=""
if(y===z.gcG(b)){z=this.r
y=z==null
if(!y===b.gdU()){if(y)z=""
z=z===b.gdS()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gT:function(a){var z=this.z
if(z==null){z=C.b.gT(this.i(0))
this.z=z}return z},
$isdi:1,
p:{
cz:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isd",[P.o],"$asd")
if(c===C.k){z=$.$get$fB().b
if(typeof b!=="string")H.p(H.a9(b))
z=z.test(b)}else z=!1
if(z)return b
H.z(b,H.aA(c,"bW",0))
y=c.ghu().cl(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.c(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cp(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lB:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.lM(a,b,d)
else{if(d===b)P.bL(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.lN(a,z,e-1):""
x=P.lG(a,e,f,!1)
if(typeof f!=="number")return f.w()
w=f+1
if(typeof g!=="number")return H.n(g)
v=w<g?P.lJ(P.bS(C.b.q(a,w,g),new P.lC(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lH(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.L()
t=h<i?P.ds(a,h+1,i,null):null
return new P.cy(j,y,x,v,u,t,i<c?P.lF(a,i+1,c):null)},
fw:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bL:function(a,b,c){throw H.a(P.W(c,a,b))},
lJ:function(a,b){if(a!=null&&a===P.fw(b))return
return a},
lG:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.V(a,b)===91){if(typeof c!=="number")return c.G()
z=c-1
if(C.b.V(a,z)!==93)P.bL(a,b,"Missing end `]` to match `[` in host")
P.f9(a,b+1,z)
return C.b.q(a,b,c).toLowerCase()}if(typeof c!=="number")return H.n(c)
y=b
for(;y<c;++y)if(C.b.V(a,y)===58){P.f9(a,b,c)
return"["+a+"]"}return P.lP(a,b,c)},
lP:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.n(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.V(a,z)
if(v===37){u=P.fD(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.am("")
s=C.b.q(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.q(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.c(C.x,t)
t=(C.x[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.am("")
if(y<z){x.a+=C.b.q(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.c(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bL(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.V(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.am("")
s=C.b.q(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fx(v)
z+=q
y=z}}}}if(x==null)return C.b.q(a,b,c)
if(y<c){s=C.b.q(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
lM:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fz(C.b.H(a,b)))P.bL(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.H(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.c(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bL(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.q(a,b,c)
return P.lD(y?a.toLowerCase():a)},
lD:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lN:function(a,b,c){return P.bM(a,b,c,C.R)},
lH:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bM(a,b,c,C.y):C.t.j4(d,new P.lI(),P.i).D(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a7(w,"/"))w="/"+w
return P.lO(w,e,f)},
lO:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a7(a,"/"))return P.lQ(a,!z||c)
return P.lR(a)},
ds:function(a,b,c,d){var z,y
z={}
H.w(d,"$isI",[P.i,null],"$asI")
if(a!=null){if(d!=null)throw H.a(P.bV("Both query and queryParameters specified"))
return P.bM(a,b,c,C.n)}if(d==null)return
y=new P.am("")
z.a=""
d.I(0,new P.lK(new P.lL(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
lF:function(a,b,c){return P.bM(a,b,c,C.n)},
fD:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.V(a,b+1)
x=C.b.V(a,z)
w=H.cF(y)
v=H.cF(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.d.aG(u,4)
if(z>=8)return H.c(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cp(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.q(a,b,b+3).toUpperCase()
return},
fx:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.e(z,[P.o])
C.a.m(y,0,37)
C.a.m(y,1,C.b.H("0123456789ABCDEF",a>>>4))
C.a.m(y,2,C.b.H("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.e(z,[P.o])
for(v=0;--w,w>=0;x=128){u=C.d.fL(a,6*w)&63|x
C.a.m(y,v,37)
C.a.m(y,v+1,C.b.H("0123456789ABCDEF",u>>>4))
C.a.m(y,v+2,C.b.H("0123456789ABCDEF",u&15))
v+=3}}return P.c6(y,0,null)},
bM:function(a,b,c,d){var z=P.fC(a,b,c,H.w(d,"$isd",[P.o],"$asd"),!1)
return z==null?C.b.q(a,b,c):z},
fC:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.w(d,"$isd",[P.o],"$asd")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.L()
if(typeof c!=="number")return H.n(c)
if(!(y<c))break
c$0:{v=C.b.V(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.c(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fD(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.c(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bL(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.V(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fx(v)}}if(w==null)w=new P.am("")
w.a+=C.b.q(a,x,y)
w.a+=H.l(t)
if(typeof s!=="number")return H.n(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.L()
if(x<c)w.a+=C.b.q(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fA:function(a){if(C.b.a7(a,"."))return!0
return C.b.dX(a,"/.")!==-1},
lR:function(a){var z,y,x,w,v,u,t
if(!P.fA(a))return a
z=H.e([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.O(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.c(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.D(z,"/")},
lQ:function(a,b){var z,y,x,w,v,u
if(!P.fA(a))return!b?P.fy(a):a
z=H.e([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gax(z)!==".."){if(0>=z.length)return H.c(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.c(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gax(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.c(z,0)
C.a.m(z,0,P.fy(z[0]))}return C.a.D(z,"/")},
fy:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fz(J.h4(a,0)))for(y=1;y<z;++y){x=C.b.H(a,y)
if(x===58)return C.b.q(a,0,y)+"%3A"+C.b.ay(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.c(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
lE:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.H(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.bV("Invalid URL encoding"))}}return z},
dt:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.dB(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.H(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.k!==d)v=!1
else v=!0
if(v)return y.q(a,b,c)
else u=new H.a3(y.q(a,b,c))}else{u=H.e([],[P.o])
for(x=b;x<c;++x){w=y.H(a,x)
if(w>127)throw H.a(P.bV("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.bV("Truncated URI"))
C.a.h(u,P.lE(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.w(u,"$isd",[P.o],"$asd")
return new P.k2(!1).cl(u)},
fz:function(a){var z=a|32
return 97<=z&&z<=122}}},
lC:{"^":"m:23;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.w()
throw H.a(P.W("Invalid port",this.a,z+1))}},
lI:{"^":"m:47;",
$1:function(a){return P.cz(C.T,a,C.k,!1)}},
lL:{"^":"m:18;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.l(P.cz(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.l(P.cz(C.p,b,C.k,!0))}}},
lK:{"^":"m:38;a",
$2:function(a,b){var z,y
H.L(a)
if(b==null||typeof b==="string")this.a.$2(a,H.L(b))
else for(z=J.bv(H.fW(b,"$isk")),y=this.a;z.F();)y.$2(a,H.L(z.gP(z)))}},
jR:{"^":"b;a,b,c",
gee:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.c(z,0)
y=this.a
z=z[0]+1
x=C.b.dY(y,"?",z)
w=y.length
if(x>=0){v=P.bM(y,x+1,w,C.n)
w=x}else v=null
z=new P.kx(this,"data",null,null,null,P.bM(y,z,w,C.y),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.c(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
p:{
f8:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.e([b-1],[P.o])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.H(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.W("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.W("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.H(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gax(z)
if(v!==44||x!==t+7||!C.b.a8(a,"base64",t+1))throw H.a(P.W("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.C.hO(0,a,s,y)
else{r=P.fC(a,s,y,C.n,!0)
if(r!=null)a=C.b.aQ(a,s,y,r)}return new P.jR(a,z,c)}}},
ma:{"^":"m:34;",
$1:function(a){return new Uint8Array(96)}},
m9:{"^":"m:33;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.c(z,a)
z=z[a]
J.h8(z,0,96,b)
return z}},
mb:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.H(b,y)^96
if(x>=a.length)return H.c(a,x)
a[x]=c}}},
mc:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=C.b.H(b,0),y=C.b.H(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.c(a,x)
a[x]=c}}},
lf:{"^":"b;a,b,c,d,e,f,r,x,0y",
gdT:function(){return this.c>0},
gdV:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.w()
y=this.e
if(typeof y!=="number")return H.n(y)
y=z+1<y
z=y}else z=!1
return z},
gdW:function(){var z=this.f
if(typeof z!=="number")return z.L()
return z<this.r},
gdU:function(){return this.r<this.a.length},
gd9:function(){return this.b===4&&C.b.a7(this.a,"http")},
gda:function(){return this.b===5&&C.b.a7(this.a,"https")},
gbM:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gd9()){this.x="http"
z="http"}else if(this.gda()){this.x="https"
z="https"}else if(z===4&&C.b.a7(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a7(this.a,"package")){this.x="package"
z="package"}else{z=C.b.q(this.a,0,z)
this.x=z}return z},
gef:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.q(this.a,y,z-1):""},
gcv:function(a){var z=this.c
return z>0?C.b.q(this.a,z,this.d):""},
gbE:function(a){var z
if(this.gdV()){z=this.d
if(typeof z!=="number")return z.w()
return P.bS(C.b.q(this.a,z+1,this.e),null,null)}if(this.gd9())return 80
if(this.gda())return 443
return 0},
ge5:function(a){return C.b.q(this.a,this.e,this.f)},
gcG:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.L()
return z<y?C.b.q(this.a,z+1,y):""},
gdS:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.ay(y,z+1):""},
gb8:function(){var z=this.f
if(typeof z!=="number")return z.L()
if(z>=this.r)return C.U
z=P.i
return new P.f7(P.fa(this.gcG(this),C.k),[z,z])},
cJ:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.w(h,"$isI",[P.i,null],"$asI")
i=this.gbM()
z=i==="file"
y=this.c
j=y>0?C.b.q(this.a,this.b+3,y):""
f=this.gdV()?this.gbE(this):null
y=this.c
if(y>0)c=C.b.q(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.q(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a7(d,"/"))d="/"+d
g=P.ds(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.ay(y,x+1)
return new P.cy(i,j,c,f,d,g,b)},
cI:function(a,b){return this.cJ(a,null,null,null,null,null,null,b,null,null)},
gT:function(a){var z=this.y
if(z==null){z=C.b.gT(this.a)
this.y=z}return z},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.H(b)
if(!!z.$isdi)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdi:1},
kx:{"^":"cy;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
cQ:function(a,b){var z=document.createElement("canvas")
return z},
hD:function(a){H.f(a,"$isac")
return"wheel"},
ec:function(a,b,c){var z=document.createElement("img")
if(b!=null)z.src=b
return z},
hP:function(a){var z,y,x
y=document.createElement("input")
z=H.f(y,"$ised")
try{J.ha(z,a)}catch(x){H.as(x)}return z},
cw:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fi:function(a,b,c,d){var z,y
z=W.cw(W.cw(W.cw(W.cw(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fK:function(a,b){var z
H.h(a,{func:1,ret:-1,args:[b]})
z=$.T
if(z===C.j)return a
return z.dq(a,b)},
a6:{"^":"U;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
np:{"^":"r;0l:length=","%":"AccessibleNodeList"},
nq:{"^":"a6;0a0:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
nr:{"^":"a6;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
cM:{"^":"r;",$iscM:1,"%":";Blob"},
nx:{"^":"a6;0a0:type}","%":"HTMLButtonElement"},
cP:{"^":"a6;",
bK:function(a,b,c){if(c!=null)return a.getContext(b,P.mo(c,null))
return a.getContext(b)},
eh:function(a,b){return this.bK(a,b,null)},
$iscP:1,
"%":"HTMLCanvasElement"},
dV:{"^":"r;",$isdV:1,"%":"CanvasRenderingContext2D"},
nz:{"^":"J;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
nB:{"^":"hu;0l:length=","%":"CSSPerspective"},
b4:{"^":"r;",$isb4:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
nC:{"^":"kw;0l:length=",
ei:function(a,b){var z=a.getPropertyValue(this.eI(a,b))
return z==null?"":z},
eI:function(a,b){var z,y
z=$.$get$e_()
y=z[b]
if(typeof y==="string")return y
y=this.fM(a,b)
z[b]=y
return y},
fM:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hy()+b
if(z in a)return z
return b},
gcf:function(a){return a.bottom},
gal:function(a){return a.height},
gaO:function(a){return a.left},
gb9:function(a){return a.right},
gbd:function(a){return a.top},
gao:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
ht:{"^":"b;",
gaO:function(a){return this.ei(a,"left")}},
e0:{"^":"r;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
hu:{"^":"r;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
nD:{"^":"e0;0l:length=","%":"CSSTransformValue"},
nE:{"^":"e0;0l:length=","%":"CSSUnparsedValue"},
nF:{"^":"r;0l:length=","%":"DataTransferItemList"},
nG:{"^":"r;",
i:function(a){return String(a)},
"%":"DOMException"},
nH:{"^":"kz;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.w(c,"$isa7",[P.a1],"$asa7")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[[P.a7,P.a1]]},
$asx:function(){return[[P.a7,P.a1]]},
$isk:1,
$ask:function(){return[[P.a7,P.a1]]},
$isd:1,
$asd:function(){return[[P.a7,P.a1]]},
$asB:function(){return[[P.a7,P.a1]]},
"%":"ClientRectList|DOMRectList"},
hz:{"^":"r;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gao(a))+" x "+H.l(this.gal(a))},
t:function(a,b){var z
if(b==null)return!1
z=H.bR(b,"$isa7",[P.a1],"$asa7")
if(!z)return!1
z=J.b1(b)
return a.left===z.gaO(b)&&a.top===z.gbd(b)&&this.gao(a)===z.gao(b)&&this.gal(a)===z.gal(b)},
gT:function(a){return W.fi(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gao(a)&0x1FFFFFFF,this.gal(a)&0x1FFFFFFF)},
gcf:function(a){return a.bottom},
gal:function(a){return a.height},
gaO:function(a){return a.left},
gb9:function(a){return a.right},
gbd:function(a){return a.top},
gao:function(a){return a.width},
$isa7:1,
$asa7:function(){return[P.a1]},
"%":";DOMRectReadOnly"},
nI:{"^":"kB;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.L(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[P.i]},
$asx:function(){return[P.i]},
$isk:1,
$ask:function(){return[P.i]},
$isd:1,
$asd:function(){return[P.i]},
$asB:function(){return[P.i]},
"%":"DOMStringList"},
nJ:{"^":"r;0l:length=","%":"DOMTokenList"},
kv:{"^":"cm;a,b",
gl:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.c(z,b)
return H.f(z[b],"$isU")},
m:function(a,b,c){var z
H.D(b)
H.f(c,"$isU")
z=this.b
if(b>>>0!==b||b>=z.length)return H.c(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gZ:function(a){var z=this.ik(this)
return new J.au(z,z.length,0,[H.y(z,0)])},
aw:function(a,b,c,d){throw H.a(P.c7(null))},
$asx:function(){return[W.U]},
$ask:function(){return[W.U]},
$asd:function(){return[W.U]}},
U:{"^":"J;",
gck:function(a){return new W.kv(a,a.children)},
gdr:function(a){return P.iO(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a1)},
i:function(a){return a.localName},
$isU:1,
"%":";Element"},
nK:{"^":"a6;0a0:type}","%":"HTMLEmbedElement"},
ab:{"^":"r;",$isab:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
ac:{"^":"r;",
dm:["el",function(a,b,c,d){H.h(c,{func:1,args:[W.ab]})
if(c!=null)this.eF(a,b,c,!1)}],
eF:function(a,b,c,d){return a.addEventListener(b,H.bq(H.h(c,{func:1,args:[W.ab]}),1),!1)},
$isac:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fo|fp|fs|ft"},
aX:{"^":"cM;",$isaX:1,"%":"File"},
e9:{"^":"kG;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isaX")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.aX]},
$asx:function(){return[W.aX]},
$isk:1,
$ask:function(){return[W.aX]},
$isd:1,
$asd:function(){return[W.aX]},
$ise9:1,
$asB:function(){return[W.aX]},
"%":"FileList"},
nL:{"^":"ac;0l:length=","%":"FileWriter"},
nM:{"^":"a6;0l:length=","%":"HTMLFormElement"},
b7:{"^":"r;",$isb7:1,"%":"Gamepad"},
nN:{"^":"r;0l:length=","%":"History"},
nO:{"^":"kT;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isJ")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.J]},
$asx:function(){return[W.J]},
$isk:1,
$ask:function(){return[W.J]},
$isd:1,
$asd:function(){return[W.J]},
$asB:function(){return[W.J]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c_:{"^":"r;0ds:data=",$isc_:1,"%":"ImageData"},
cU:{"^":"a6;",$iscU:1,"%":"HTMLImageElement"},
ed:{"^":"a6;0a0:type}",$ised:1,"%":"HTMLInputElement"},
bA:{"^":"df;",$isbA:1,"%":"KeyboardEvent"},
nS:{"^":"a6;0a0:type}","%":"HTMLLinkElement"},
nT:{"^":"r;",
i:function(a){return String(a)},
"%":"Location"},
nU:{"^":"r;0l:length=","%":"MediaList"},
nV:{"^":"ac;",
dm:function(a,b,c,d){H.h(c,{func:1,args:[W.ab]})
if(b==="message")a.start()
this.el(a,b,c,!1)},
"%":"MessagePort"},
nW:{"^":"l_;",
k:function(a,b){return P.aU(a.get(H.L(b)))},
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gam:function(a){var z=H.e([],[P.i])
this.I(a,new W.ip(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asai:function(){return[P.i,null]},
$isI:1,
$asI:function(){return[P.i,null]},
"%":"MIDIInputMap"},
ip:{"^":"m:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nX:{"^":"l0;",
k:function(a,b){return P.aU(a.get(H.L(b)))},
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gam:function(a){var z=H.e([],[P.i])
this.I(a,new W.iq(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asai:function(){return[P.i,null]},
$isI:1,
$asI:function(){return[P.i,null]},
"%":"MIDIOutputMap"},
iq:{"^":"m:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
ba:{"^":"r;",$isba:1,"%":"MimeType"},
nY:{"^":"l2;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isba")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.ba]},
$asx:function(){return[W.ba]},
$isk:1,
$ask:function(){return[W.ba]},
$isd:1,
$asd:function(){return[W.ba]},
$asB:function(){return[W.ba]},
"%":"MimeTypeArray"},
ad:{"^":"df;",$isad:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ku:{"^":"cm;a",
m:function(a,b,c){var z,y
H.D(b)
H.f(c,"$isJ")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.c(y,b)
z.replaceChild(c,y[b])},
gZ:function(a){var z=this.a.childNodes
return new W.ea(z,z.length,-1,[H.aV(C.W,z,"B",0)])},
aw:function(a,b,c,d){throw H.a(P.A("Cannot fillRange on Node list"))},
gl:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.c(z,b)
return z[b]},
$asx:function(){return[W.J]},
$ask:function(){return[W.J]},
$asd:function(){return[W.J]}},
J:{"^":"ac;",
i7:function(a,b){var z,y
try{z=a.parentNode
J.h5(z,b,a)}catch(y){H.as(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.em(a):z},
fw:function(a,b,c){return a.replaceChild(b,c)},
$isJ:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iu:{"^":"l4;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isJ")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.J]},
$asx:function(){return[W.J]},
$isk:1,
$ask:function(){return[W.J]},
$isd:1,
$asd:function(){return[W.J]},
$asB:function(){return[W.J]},
"%":"NodeList|RadioNodeList"},
o5:{"^":"a6;0a0:type}","%":"HTMLOListElement"},
o6:{"^":"a6;0a0:type}","%":"HTMLObjectElement"},
bb:{"^":"r;0l:length=",$isbb:1,"%":"Plugin"},
o9:{"^":"l8;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbb")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bb]},
$asx:function(){return[W.bb]},
$isk:1,
$ask:function(){return[W.bb]},
$isd:1,
$asd:function(){return[W.bb]},
$asB:function(){return[W.bb]},
"%":"PluginArray"},
ob:{"^":"r;0a0:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
oc:{"^":"le;",
k:function(a,b){return P.aU(a.get(H.L(b)))},
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gam:function(a){var z=H.e([],[P.i])
this.I(a,new W.iY(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asai:function(){return[P.i,null]},
$isI:1,
$asI:function(){return[P.i,null]},
"%":"RTCStatsReport"},
iY:{"^":"m:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oe:{"^":"a6;0a0:type}","%":"HTMLScriptElement"},
og:{"^":"a6;0l:length=","%":"HTMLSelectElement"},
bd:{"^":"ac;",$isbd:1,"%":"SourceBuffer"},
oh:{"^":"fp;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbd")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bd]},
$asx:function(){return[W.bd]},
$isk:1,
$ask:function(){return[W.bd]},
$isd:1,
$asd:function(){return[W.bd]},
$asB:function(){return[W.bd]},
"%":"SourceBufferList"},
oi:{"^":"a6;0a0:type}","%":"HTMLSourceElement"},
be:{"^":"r;",$isbe:1,"%":"SpeechGrammar"},
oj:{"^":"lh;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbe")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.be]},
$asx:function(){return[W.be]},
$isk:1,
$ask:function(){return[W.be]},
$isd:1,
$asd:function(){return[W.be]},
$asB:function(){return[W.be]},
"%":"SpeechGrammarList"},
bf:{"^":"r;0l:length=",$isbf:1,"%":"SpeechRecognitionResult"},
ol:{"^":"lk;",
k:function(a,b){return a.getItem(H.L(b))},
m:function(a,b,c){a.setItem(b,H.L(c))},
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,P.i]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gam:function(a){var z=H.e([],[P.i])
this.I(a,new W.je(z))
return z},
gl:function(a){return a.length},
$asai:function(){return[P.i,P.i]},
$isI:1,
$asI:function(){return[P.i,P.i]},
"%":"Storage"},
je:{"^":"m:18;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oo:{"^":"a6;0a0:type}","%":"HTMLStyleElement"},
bg:{"^":"r;",$isbg:1,"%":"CSSStyleSheet|StyleSheet"},
db:{"^":"a6;",$isdb:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bh:{"^":"ac;",$isbh:1,"%":"TextTrack"},
bi:{"^":"ac;",$isbi:1,"%":"TextTrackCue|VTTCue"},
or:{"^":"lq;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbi")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bi]},
$asx:function(){return[W.bi]},
$isk:1,
$ask:function(){return[W.bi]},
$isd:1,
$asd:function(){return[W.bi]},
$asB:function(){return[W.bi]},
"%":"TextTrackCueList"},
os:{"^":"ft;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbh")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bh]},
$asx:function(){return[W.bh]},
$isk:1,
$ask:function(){return[W.bh]},
$isd:1,
$asd:function(){return[W.bh]},
$asB:function(){return[W.bh]},
"%":"TextTrackList"},
ot:{"^":"r;0l:length=","%":"TimeRanges"},
bk:{"^":"r;",$isbk:1,"%":"Touch"},
bl:{"^":"df;",$isbl:1,"%":"TouchEvent"},
ou:{"^":"lw;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbk")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bk]},
$asx:function(){return[W.bk]},
$isk:1,
$ask:function(){return[W.bk]},
$isd:1,
$asd:function(){return[W.bk]},
$asB:function(){return[W.bk]},
"%":"TouchList"},
ov:{"^":"r;0l:length=","%":"TrackDefaultList"},
df:{"^":"ab;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
ox:{"^":"r;",
i:function(a){return String(a)},
"%":"URL"},
oy:{"^":"ac;0l:length=","%":"VideoTrackList"},
bJ:{"^":"ad;",
ghq:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.A("deltaY is not supported"))},
ghp:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.A("deltaX is not supported"))},
$isbJ:1,
"%":"WheelEvent"},
kn:{"^":"ac;",
fz:function(a,b){return a.requestAnimationFrame(H.bq(H.h(b,{func:1,ret:-1,args:[P.a1]}),1))},
eQ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
oD:{"^":"lY;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isb4")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b4]},
$asx:function(){return[W.b4]},
$isk:1,
$ask:function(){return[W.b4]},
$isd:1,
$asd:function(){return[W.b4]},
$asB:function(){return[W.b4]},
"%":"CSSRuleList"},
oE:{"^":"hz;",
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
t:function(a,b){var z
if(b==null)return!1
z=H.bR(b,"$isa7",[P.a1],"$asa7")
if(!z)return!1
z=J.b1(b)
return a.left===z.gaO(b)&&a.top===z.gbd(b)&&a.width===z.gao(b)&&a.height===z.gal(b)},
gT:function(a){return W.fi(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gal:function(a){return a.height},
gao:function(a){return a.width},
"%":"ClientRect|DOMRect"},
oG:{"^":"m_;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isb7")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.b7]},
$asx:function(){return[W.b7]},
$isk:1,
$ask:function(){return[W.b7]},
$isd:1,
$asd:function(){return[W.b7]},
$asB:function(){return[W.b7]},
"%":"GamepadList"},
oH:{"^":"m1;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isJ")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.J]},
$asx:function(){return[W.J]},
$isk:1,
$ask:function(){return[W.J]},
$isd:1,
$asd:function(){return[W.J]},
$asB:function(){return[W.J]},
"%":"MozNamedAttrMap|NamedNodeMap"},
oI:{"^":"m3;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbf")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bf]},
$asx:function(){return[W.bf]},
$isk:1,
$ask:function(){return[W.bf]},
$isd:1,
$asd:function(){return[W.bf]},
$asB:function(){return[W.bf]},
"%":"SpeechRecognitionResultList"},
oJ:{"^":"m5;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.f(c,"$isbg")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.c(a,b)
return a[b]},
$isF:1,
$asF:function(){return[W.bg]},
$asx:function(){return[W.bg]},
$isk:1,
$ask:function(){return[W.bg]},
$isd:1,
$asd:function(){return[W.bg]},
$asB:function(){return[W.bg]},
"%":"StyleSheetList"},
kC:{"^":"da;a,b,c,$ti",
hI:function(a,b,c,d){var z=H.y(this,0)
H.h(a,{func:1,ret:-1,args:[z]})
H.h(c,{func:1,ret:-1})
return W.a_(this.a,this.b,a,!1,z)}},
oF:{"^":"kC;a,b,c,$ti"},
kD:{"^":"eF;a,b,c,d,e,$ti",
fQ:function(){var z=this.d
if(z!=null&&this.a<=0)J.h6(this.b,this.c,z,!1)},
p:{
a_:function(a,b,c,d,e){var z=c==null?null:W.fK(new W.kE(c),W.ab)
z=new W.kD(0,a,b,z,!1,[e])
z.fQ()
return z}}},
kE:{"^":"m:9;a",
$1:function(a){return this.a.$1(H.f(a,"$isab"))}},
B:{"^":"b;$ti",
gZ:function(a){return new W.ea(a,this.gl(a),-1,[H.aV(this,a,"B",0)])},
aw:function(a,b,c,d){H.z(d,H.aV(this,a,"B",0))
throw H.a(P.A("Cannot modify an immutable List."))}},
ea:{"^":"b;a,b,c,0d,$ti",
F:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dJ(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gP:function(a){return this.d}},
kw:{"^":"r+ht;"},
ky:{"^":"r+x;"},
kz:{"^":"ky+B;"},
kA:{"^":"r+x;"},
kB:{"^":"kA+B;"},
kF:{"^":"r+x;"},
kG:{"^":"kF+B;"},
kS:{"^":"r+x;"},
kT:{"^":"kS+B;"},
l_:{"^":"r+ai;"},
l0:{"^":"r+ai;"},
l1:{"^":"r+x;"},
l2:{"^":"l1+B;"},
l3:{"^":"r+x;"},
l4:{"^":"l3+B;"},
l7:{"^":"r+x;"},
l8:{"^":"l7+B;"},
le:{"^":"r+ai;"},
fo:{"^":"ac+x;"},
fp:{"^":"fo+B;"},
lg:{"^":"r+x;"},
lh:{"^":"lg+B;"},
lk:{"^":"r+ai;"},
lp:{"^":"r+x;"},
lq:{"^":"lp+B;"},
fs:{"^":"ac+x;"},
ft:{"^":"fs+B;"},
lv:{"^":"r+x;"},
lw:{"^":"lv+B;"},
lX:{"^":"r+x;"},
lY:{"^":"lX+B;"},
lZ:{"^":"r+x;"},
m_:{"^":"lZ+B;"},
m0:{"^":"r+x;"},
m1:{"^":"m0+B;"},
m2:{"^":"r+x;"},
m3:{"^":"m2+B;"},
m4:{"^":"r+x;"},
m5:{"^":"m4+B;"}}],["","",,P,{"^":"",
mr:function(a){var z,y
z=J.H(a)
if(!!z.$isc_){y=z.gds(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fv(a.data,a.height,a.width)},
mq:function(a){if(a instanceof P.fv)return{data:a.a,height:a.b,width:a.c}
return a},
aU:function(a){var z,y,x,w,v
if(a==null)return
z=P.el(P.i,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w){v=H.L(y[w])
z.m(0,v,a[v])}return z},
mo:function(a,b){var z={}
a.I(0,new P.mp(z))
return z},
e6:function(){var z=$.e5
if(z==null){z=J.cJ(window.navigator.userAgent,"Opera",0)
$.e5=z}return z},
hy:function(){var z,y
z=$.e2
if(z!=null)return z
y=$.e3
if(y==null){y=J.cJ(window.navigator.userAgent,"Firefox",0)
$.e3=y}if(y)z="-moz-"
else{y=$.e4
if(y==null){y=!P.e6()&&J.cJ(window.navigator.userAgent,"Trident/",0)
$.e4=y}if(y)z="-ms-"
else z=P.e6()?"-o-":"-webkit-"}$.e2=z
return z},
ln:{"^":"b;",
dQ:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
bI:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.H(a)
if(!!y.$isal)return new Date(a.a)
if(!!y.$isiR)throw H.a(P.c7("structured clone of RegExp"))
if(!!y.$isaX)return a
if(!!y.$iscM)return a
if(!!y.$ise9)return a
if(!!y.$isc_)return a
if(!!y.$ises||!!y.$isd5)return a
if(!!y.$isI){x=this.dQ(a)
w=this.b
if(x>=w.length)return H.c(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.m(w,x,v)
y.I(a,new P.lo(z,this))
return z.a}if(!!y.$isd){x=this.dQ(a)
z=this.b
if(x>=z.length)return H.c(z,x)
v=z[x]
if(v!=null)return v
return this.hn(a,x)}throw H.a(P.c7("structured clone of other type"))},
hn:function(a,b){var z,y,x,w
z=J.aM(a)
y=z.gl(a)
x=new Array(y)
C.a.m(this.b,b,x)
if(typeof y!=="number")return H.n(y)
w=0
for(;w<y;++w)C.a.m(x,w,this.bI(z.k(a,w)))
return x}},
lo:{"^":"m:7;a,b",
$2:function(a,b){this.a.a[a]=this.b.bI(b)}},
fv:{"^":"b;ds:a>,b,c",$isc_:1},
mp:{"^":"m:7;a",
$2:function(a,b){this.a[a]=b}},
fr:{"^":"ln;a,b"},
hJ:{"^":"cm;a,b",
gaU:function(){var z,y,x
z=this.b
y=H.aA(z,"x",0)
x=W.U
return new H.ic(new H.kl(z,H.h(new P.hK(),{func:1,ret:P.ah,args:[y]}),[y]),H.h(new P.hL(),{func:1,ret:x,args:[y]}),[y,x])},
I:function(a,b){H.h(b,{func:1,ret:-1,args:[W.U]})
C.a.I(P.eo(this.gaU(),!1,W.U),b)},
m:function(a,b,c){var z
H.D(b)
H.f(c,"$isU")
z=this.gaU()
J.h9(z.b.$1(J.cK(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aw:function(a,b,c,d){throw H.a(P.A("Cannot fillRange on filtered list"))},
gl:function(a){return J.at(this.gaU().a)},
k:function(a,b){var z=this.gaU()
return z.b.$1(J.cK(z.a,b))},
gZ:function(a){var z=P.eo(this.gaU(),!1,W.U)
return new J.au(z,z.length,0,[H.y(z,0)])},
$asx:function(){return[W.U]},
$ask:function(){return[W.U]},
$asd:function(){return[W.U]}},
hK:{"^":"m:26;",
$1:function(a){return!!J.H(H.f(a,"$isJ")).$isU}},
hL:{"^":"m:54;",
$1:function(a){return H.j(H.f(a,"$isJ"),"$isU")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cx:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kU:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
l9:{"^":"b;$ti",
gb9:function(a){var z=this.a
if(typeof z!=="number")return z.w()
return H.z(z+this.c,H.y(this,0))},
gcf:function(a){var z=this.b
if(typeof z!=="number")return z.w()
return H.z(z+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bR(b,"$isa7",[P.a1],"$asa7")
if(!z)return!1
z=this.a
y=J.b1(b)
x=y.gaO(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbd(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.w()
w=H.y(this,0)
if(H.z(z+this.c,w)===y.gb9(b)){if(typeof x!=="number")return x.w()
z=H.z(x+this.d,w)===y.gcf(b)}else z=!1}else z=!1}else z=!1
return z},
gT:function(a){var z,y,x,w,v
z=this.a
y=J.bU(z)
x=this.b
w=J.bU(x)
if(typeof z!=="number")return z.w()
v=H.y(this,0)
z=H.z(z+this.c,v)
if(typeof x!=="number")return x.w()
v=H.z(x+this.d,v)
return P.kU(P.cx(P.cx(P.cx(P.cx(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a7:{"^":"l9;aO:a>,bd:b>,ao:c>,al:d>,$ti",p:{
iO:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.L()
if(c<0)z=-c*0
else z=c
H.z(z,e)
if(typeof d!=="number")return d.L()
if(d<0)y=-d*0
else y=d
return new P.a7(a,b,z,H.z(y,e),[e])}}}}],["","",,P,{"^":"",bB:{"^":"r;",$isbB:1,"%":"SVGLength"},nR:{"^":"kW;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.f(c,"$isbB")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$asx:function(){return[P.bB]},
$isk:1,
$ask:function(){return[P.bB]},
$isd:1,
$asd:function(){return[P.bB]},
$asB:function(){return[P.bB]},
"%":"SVGLengthList"},bE:{"^":"r;",$isbE:1,"%":"SVGNumber"},o4:{"^":"l6;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.f(c,"$isbE")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$asx:function(){return[P.bE]},
$isk:1,
$ask:function(){return[P.bE]},
$isd:1,
$asd:function(){return[P.bE]},
$asB:function(){return[P.bE]},
"%":"SVGNumberList"},oa:{"^":"r;0l:length=","%":"SVGPointList"},of:{"^":"eH;0a0:type}","%":"SVGScriptElement"},om:{"^":"lm;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.L(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$asx:function(){return[P.i]},
$isk:1,
$ask:function(){return[P.i]},
$isd:1,
$asd:function(){return[P.i]},
$asB:function(){return[P.i]},
"%":"SVGStringList"},op:{"^":"eH;0a0:type}","%":"SVGStyleElement"},eH:{"^":"U;",
gck:function(a){return new P.hJ(a,new W.ku(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bG:{"^":"r;",$isbG:1,"%":"SVGTransform"},ow:{"^":"ly;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.f(c,"$isbG")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$asx:function(){return[P.bG]},
$isk:1,
$ask:function(){return[P.bG]},
$isd:1,
$asd:function(){return[P.bG]},
$asB:function(){return[P.bG]},
"%":"SVGTransformList"},kV:{"^":"r+x;"},kW:{"^":"kV+B;"},l5:{"^":"r+x;"},l6:{"^":"l5+B;"},ll:{"^":"r+x;"},lm:{"^":"ll+B;"},lx:{"^":"r+x;"},ly:{"^":"lx+B;"}}],["","",,P,{"^":"",P:{"^":"b;",$isk:1,
$ask:function(){return[P.o]},
$isd:1,
$asd:function(){return[P.o]},
$isjC:1}}],["","",,P,{"^":"",ns:{"^":"r;0l:length=","%":"AudioBuffer"},dN:{"^":"ac;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},nt:{"^":"kt;",
k:function(a,b){return P.aU(a.get(H.L(b)))},
I:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gam:function(a){var z=H.e([],[P.i])
this.I(a,new P.hd(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asai:function(){return[P.i,null]},
$isI:1,
$asI:function(){return[P.i,null]},
"%":"AudioParamMap"},hd:{"^":"m:8;a",
$2:function(a,b){return C.a.h(this.a,a)}},he:{"^":"dN;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},nu:{"^":"ac;0l:length=","%":"AudioTrackList"},hh:{"^":"ac;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},nv:{"^":"dN;0a0:type}","%":"BiquadFilterNode"},o7:{"^":"hh;0l:length=","%":"OfflineAudioContext"},o8:{"^":"he;0a0:type}","%":"Oscillator|OscillatorNode"},kt:{"^":"r+ai;"}}],["","",,P,{"^":"",d8:{"^":"r;",
ih:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.H(g)
if(!!z.$isc_)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.mq(g))
return}if(!!z.$iscU)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.bV("Incorrect number or type of arguments"))},
ig:function(a,b,c,d,e,f,g){return this.ih(a,b,c,d,e,f,g,null,null,null)},
$isd8:1,
"%":"WebGLRenderingContext"},jL:{"^":"r;",$isjL:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",ok:{"^":"lj;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.S(b,a,null,null,null))
return P.aU(a.item(b))},
m:function(a,b,c){H.D(b)
H.f(c,"$isI")
throw H.a(P.A("Cannot assign element of immutable List."))},
J:function(a,b){return this.k(a,b)},
$asx:function(){return[[P.I,,,]]},
$isk:1,
$ask:function(){return[[P.I,,,]]},
$isd:1,
$asd:function(){return[[P.I,,,]]},
$asB:function(){return[[P.I,,,]]},
"%":"SQLResultSetRowList"},li:{"^":"r+x;"},lj:{"^":"li+B;"}}],["","",,O,{"^":"",aO:{"^":"b;0a,0b,0c,0d,$ti",
bP:function(a){this.a=H.e([],[a])
this.b=null
this.c=null
this.d=null},
cR:function(a,b,c){var z=H.aA(this,"aO",0)
H.h(b,{func:1,ret:P.ah,args:[[P.k,z]]})
z={func:1,ret:-1,args:[P.o,[P.k,z]]}
H.h(a,z)
H.h(c,z)
this.b=b
this.c=a
this.d=c},
bg:function(a,b){return this.cR(a,null,b)},
fl:function(a){var z
H.w(a,"$isk",[H.aA(this,"aO",0)],"$ask")
z=this.b
if(z!=null)return z.$1(a)
return!0},
ex:function(a,b){var z
H.w(b,"$isk",[H.aA(this,"aO",0)],"$ask")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gZ:function(a){var z=this.a
return new J.au(z,z.length,0,[H.y(z,0)])},
J:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.c(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aA(this,"aO",0)
H.z(b,z)
z=[z]
if(this.fl(H.e([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.ex(x,H.e([b],z))}},
$isk:1,
p:{
cR:function(a){var z=new O.aO([a])
z.bP(a)
return z}}},d2:{"^":"b;0a,0b",
gl:function(a){return this.a.length},
gA:function(){var z=this.b
if(z==null){z=D.M()
this.b=z}return z},
ey:function(a){var z=this.b
if(!(z==null))z.C(a)},
az:function(){return this.ey(null)},
gX:function(a){var z=this.a
if(z.length>0)return C.a.gax(z)
else return V.c4()},
e7:function(a){var z=this.a
if(a==null)C.a.h(z,V.c4())
else C.a.h(z,a)
this.az()},
cF:function(){var z=this.a
if(z.length>0){z.pop()
this.az()}}}}],["","",,E,{"^":"",cL:{"^":"b;"},aP:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a1:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
cZ:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.au(z,z.length,0,[H.y(z,0)]);z.F();){y=z.d
if(y.f==null)y.cZ()}},
scS:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gA()
y.toString
x=H.h(this.ge3(),{func:1,ret:-1,args:[D.t]})
C.a.O(y.a,x)}y=this.c
if(y!=null){y=y.gA()
y.toString
x=H.h(this.ge3(),{func:1,ret:-1,args:[D.t]})
C.a.h(y.a,x)}w=new D.Q("shape",z,this.c,this,[F.cs])
w.b=!0
this.a5(w)}},
sea:function(a){var z,y,x,w
z=this.f
if(z==null?a!=null:z!==a){if(z!=null){z=z.gA()
z.toString
y=H.h(this.ge4(),{func:1,ret:-1,args:[D.t]})
C.a.O(z.a,y)}x=this.f
this.f=a
if(a!=null){z=a.gA()
z.toString
y=H.h(this.ge4(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)}this.cZ()
w=new D.Q("technique",x,this.f,this,[O.dc])
w.b=!0
this.a5(w)}},
sb4:function(a){var z,y,x,w
if(!J.O(this.r,a)){z=this.r
if(z!=null){y=z.gA()
y.toString
x=H.h(this.ge2(),{func:1,ret:-1,args:[D.t]})
C.a.O(y.a,x)}if(a!=null){y=a.gA()
y.toString
x=H.h(this.ge2(),{func:1,ret:-1,args:[D.t]})
C.a.h(y.a,x)}this.r=a
w=new D.Q("mover",z,a,this,[U.ae])
w.b=!0
this.a5(w)}},
an:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.aR(0,b,this):null
if(!J.O(y,this.x)){x=this.x
this.x=y
w=new D.Q("matrix",x,y,this,[V.aw])
w.b=!0
this.a5(w)}z=this.f
if(z!=null)z.an(0,b)
for(z=this.y.a,z=new J.au(z,z.length,0,[H.y(z,0)]);z.F();)z.d.an(0,b)},
aP:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gX(z))
else C.a.h(z.a,y.j(0,z.gX(z)))
z.az()
a.e8(this.f)
z=a.dy
x=(z&&C.a).gax(z)
if(x!=null&&this.d!=null)x.i6(a,this)
for(z=this.y.a,z=new J.au(z,z.length,0,[H.y(z,0)]);z.F();)z.d.aP(a)
a.e6()
a.dx.cF()},
gA:function(){var z=this.z
if(z==null){z=D.M()
this.z=z}return z},
a5:function(a){var z=this.z
if(!(z==null))z.C(a)},
a_:function(){return this.a5(null)},
hT:[function(a){H.f(a,"$ist")
this.e=null
this.a5(a)},function(){return this.hT(null)},"ja","$1","$0","ge3",0,2,1],
hU:[function(a){this.a5(H.f(a,"$ist"))},function(){return this.hU(null)},"jb","$1","$0","ge4",0,2,1],
hS:[function(a){this.a5(H.f(a,"$ist"))},function(){return this.hS(null)},"j9","$1","$0","ge2",0,2,1],
hQ:[function(a){this.a5(H.f(a,"$ist"))},function(){return this.hQ(null)},"j7","$1","$0","ge1",0,2,1],
j6:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isk",[E.aP],"$ask")
for(z=b.length,y=this.ge1(),x={func:1,ret:-1,args:[D.t]},w=[x],v=0;v<b.length;b.length===z||(0,H.C)(b),++v){u=b[v]
if(u!=null){if(u.ga1()==null){t=new D.b6()
t.a=H.e([],w)
t.c=0
u.sa1(t)}t=u.ga1()
t.toString
H.h(y,x)
C.a.h(t.a,y)}}this.a_()},"$2","ghP",8,0,10],
j8:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isk",[E.aP],"$ask")
for(z=b.length,y=this.ge1(),x={func:1,ret:-1,args:[D.t]},w=[x],v=0;v<b.length;b.length===z||(0,H.C)(b),++v){u=b[v]
if(u!=null){if(u.ga1()==null){t=new D.b6()
t.a=H.e([],w)
t.c=0
u.sa1(t)}t=u.ga1()
t.toString
H.h(y,x)
C.a.O(t.a,y)}}this.a_()},"$2","ghR",8,0,10],
$isaQ:1,
p:{
e8:function(a,b,c,d,e,f){var z,y
z=new E.aP()
z.a=d
z.b=!0
y=O.cR(E.aP)
z.y=y
y.bg(z.ghP(),z.ghR())
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
z.scS(0,e)
z.sea(f)
z.sb4(c)
return z}}},iT:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
es:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.al(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.d2()
y=[V.aw]
z.a=H.e([],y)
x=z.gA()
x.toString
w={func:1,ret:-1,args:[D.t]}
v=H.h(new E.iV(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.d2()
z.a=H.e([],y)
v=z.gA()
v.toString
x=H.h(new E.iW(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.d2()
z.a=H.e([],y)
y=z.gA()
y.toString
w=H.h(new E.iX(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.e([],[O.dc])
this.dy=z
C.a.h(z,null)
this.fr=new H.aY(0,0,[P.i,A.eC])},
gi2:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gX(z)
y=this.db
y=z.j(0,y.gX(y))
this.z=y
z=y}return z},
e8:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gax(z):a;(z&&C.a).h(z,y)},
e6:function(){var z=this.dy
if(z.length>1)z.pop()},
p:{
iU:function(a,b){var z=new E.iT(a,b)
z.es(a,b)
return z}}},iV:{"^":"m:11;a",
$1:function(a){var z
H.f(a,"$ist")
z=this.a
z.z=null
z.ch=null}},iW:{"^":"m:11;a",
$1:function(a){var z
H.f(a,"$ist")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},iX:{"^":"m:11;a",
$1:function(a){var z
H.f(a,"$ist")
z=this.a
z.ch=null
z.cx=null}},ju:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a1:x@,0y,0z,0Q,0ch",
gA:function(){var z=this.x
if(z==null){z=D.M()
this.x=z}return z},
eA:[function(a){var z
H.f(a,"$ist")
z=this.x
if(!(z==null))z.C(a)
this.i9()},function(){return this.eA(null)},"ez","$1","$0","gcV",0,2,1],
ghz:function(){var z,y,x
z=Date.now()
y=C.d.a2(P.e7(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.al(z,!1)
return x/y},
df:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.j()
if(typeof z!=="number")return H.n(z)
x=C.e.b_(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.j()
w=C.e.b_(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.eL(C.q,this.gi8())},
i9:[function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.h(new E.jw(this),{func:1,ret:-1,args:[P.a1]})
C.B.eQ(z)
C.B.fz(z,W.fK(y,P.a1))}},"$0","gi8",0,0,3],
i5:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.df()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.al(w,!1)
x.y=P.e7(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.az()
w=x.db
C.a.sl(w.a,0)
w.az()
w=x.dx
C.a.sl(w.a,0)
w.az()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aP(this.e)}}catch(v){z=H.as(v)
y=H.bs(v)
P.dH("Error: "+H.l(z))
P.dH("Stack: "+H.l(y))
throw H.a(z)}},
p:{
jv:function(a,b,c,d,e){var z,y,x,w
z=J.H(a)
if(!!z.$iscP)return E.eK(a,!0,!0,!0,!1)
y=W.cQ(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gck(a).h(0,y)
w=E.eK(y,!0,!0,!0,!1)
w.a=a
return w},
eK:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.ju()
y=P.i3(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.i,null)
x=C.l.bK(a,"webgl",y)
x=H.f(x==null?C.l.bK(a,"experimental-webgl",y):x,"$isd8")
if(x==null)H.p(P.v("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.iU(x,a)
w=new T.jo(x)
w.b=H.D(x.getParameter(3379))
w.c=H.D(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.jY(a)
v=new X.hX()
v.c=new X.aD(!1,!1,!1)
v.d=P.i5(null,null,null,P.o)
w.b=v
v=new X.ir(w)
v.f=0
v.r=new V.X(0,0)
v.x=new V.X(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.i8(w)
v.r=0
v.x=new V.X(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jz(w)
v.e=0
v.f=new V.X(0,0)
v.r=new V.X(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.e([],[[P.eF,P.b]])
w.z=v
u=document
t=W.ad
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a_(u,"contextmenu",H.h(w.gf8(),s),!1,t))
v=w.z
r=W.ab
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a_(a,"focus",H.h(w.gfb(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a_(a,"blur",H.h(w.gf4(),q),!1,r))
v=w.z
p=W.bA
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a_(u,"keyup",H.h(w.gfd(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a_(u,"keydown",H.h(w.gfc(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a_(a,"mousedown",H.h(w.gfg(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a_(a,"mouseup",H.h(w.gfi(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a_(a,"mousemove",H.h(w.gfh(),s),!1,t))
p=w.z
o=W.bJ;(p&&C.a).h(p,W.a_(a,H.L(W.hD(a)),H.h(w.gfj(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a_(u,"mousemove",H.h(w.gf9(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a_(u,"mouseup",H.h(w.gfa(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a_(u,"pointerlockchange",H.h(w.gfk(),q),!1,r))
r=w.z
q=W.bl
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a_(a,"touchstart",H.h(w.gfs(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a_(a,"touchend",H.h(w.gfp(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a_(a,"touchmove",H.h(w.gfq(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.al(Date.now(),!1)
z.ch=0
z.df()
return z}}},jw:{"^":"m:31;a",
$1:function(a){var z
H.nb(a)
z=this.a
if(z.z){z.z=!1
z.i5()}}}}],["","",,Z,{"^":"",fd:{"^":"b;a,b",p:{
dn:function(a,b,c){var z
H.w(c,"$isd",[P.o],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bn(c)),35044)
a.bindBuffer(b,null)
return new Z.fd(b,z)}}},dR:{"^":"cL;a,b,c,d,e",
bm:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.as(y)
x=P.v('Failed to bind buffer attribute "'+J.aa(this.a)+'": '+H.l(z))
throw H.a(x)}},
i:function(a){return"["+J.aa(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}},kk:{"^":"b;a",$isnw:1},dS:{"^":"b;a,0b,c,d",
aN:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bm:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bm(a)},
ed:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aP:function(a){var z,y,x,w,v
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
z=[P.i]
y=H.e([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v)C.a.h(y,x[v].i(0))
u=H.e([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.aa(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.D(y,", ")+"\nAttrs:   "+C.a.D(u,", ")},
$isoq:1},cj:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bc(this.c)+"'")+"]"}},b_:{"^":"b;a",
gcT:function(a){var z,y
z=this.a
y=(z&$.$get$aH().a)!==0?3:0
if((z&$.$get$az().a)!==0)y+=3
if((z&$.$get$aG().a)!==0)y+=3
if((z&$.$get$aI().a)!==0)y+=2
if((z&$.$get$aJ().a)!==0)y+=3
if((z&$.$get$bH().a)!==0)y+=3
if((z&$.$get$bI().a)!==0)y+=4
if((z&$.$get$b0().a)!==0)++y
return(z&$.$get$aF().a)!==0?y+4:y},
hg:function(a){var z,y,x
z=$.$get$aH()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$az()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aG()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aI()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aJ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bH()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bI()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b0()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aF()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fc()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b_))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.e([],[P.i])
y=this.a
if((y&$.$get$aH().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$az().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aG().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aI().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aJ().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bH().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bI().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b0().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aF().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.D(z,"|")},
p:{
aq:function(a){return new Z.b_(a)}}}}],["","",,D,{"^":"",dW:{"^":"b;"},b6:{"^":"b;0a,0b,0c",
C:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.t(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.I(y,new D.hH(z))
return x!==0},
hs:function(){return this.C(null)},
ia:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.C(y)}}},
a6:function(a){return this.ia(a,!0,!1)},
p:{
M:function(){var z=new D.b6()
z.a=H.e([],[{func:1,ret:-1,args:[D.t]}])
z.c=0
return z}}},hH:{"^":"m:32;a",
$1:function(a){var z
H.h(a,{func:1,ret:-1,args:[D.t]})
z=this.a.a
z.b
a.$1(z)}},t:{"^":"b;a,0b"},ck:{"^":"t;c,d,a,0b,$ti"},cl:{"^":"t;c,d,a,0b,$ti"},Q:{"^":"t;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}}],["","",,X,{"^":"",dT:{"^":"b;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dT))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)},
p:{"^":"ny<"}},ei:{"^":"b;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ei))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}},ej:{"^":"t;c,a,0b"},hX:{"^":"b;0a,0b,0c,0d",
i_:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.ej(a,this)
y.b=!0
return z.C(y)},
hW:function(a){var z,y
this.c=a.b
this.d.O(0,a.a)
z=this.b
if(z==null)return!1
y=new X.ej(a,this)
y.b=!0
return z.C(y)}},ep:{"^":"co;x,y,c,d,e,a,0b"},i8:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ar:function(a,b){var z,y,x,w,v,u,t,s
z=new P.al(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.j()
v=b.b
u=this.ch
if(typeof v!=="number")return v.j()
t=new V.X(y.a+x*w,y.b+v*u)
u=this.a.gaH()
s=new X.bC(a,new V.X(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cE:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.C(this.ar(a,b))
return!0},
b6:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.ek()
if(typeof z!=="number")return z.bJ()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.C(this.ar(a,b))
return!0},
b5:function(a,b){var z=this.d
if(z==null)return!1
z.C(this.ar(a,b))
return!0},
i0:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaH()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.j()
t=a.b
s=this.cy
if(typeof t!=="number")return t.j()
w=new X.d3(new V.V(v*u,t*s),y,x,new P.al(w,!1),this)
w.b=!0
z.C(w)
return!0},
ff:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.al(Date.now(),!1)
y=this.f
x=new X.ep(c,a,this.a.gaH(),b,z,this)
x.b=!0
y.C(x)
this.y=z
this.x=new V.X(0,0)}},aD:{"^":"b;a,b,c",
t:function(a,b){var z,y
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
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},bC:{"^":"co;x,y,z,Q,ch,c,d,e,a,0b"},ir:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bV:function(a,b,c){var z,y,x
z=new P.al(Date.now(),!1)
y=this.a.gaH()
x=new X.bC(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cE:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.C(this.bV(a,b,!0))
return!0},
b6:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.ek()
if(typeof z!=="number")return z.bJ()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.C(this.bV(a,b,!0))
return!0},
b5:function(a,b){var z=this.d
if(z==null)return!1
z.C(this.bV(a,b,!1))
return!0},
i1:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaH()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.j()
u=a.b
t=this.ch
if(typeof u!=="number")return u.j()
x=new X.d3(new V.V(w*v,u*t),y,b,new P.al(x,!1),this)
x.b=!0
z.C(x)
return!0},
gdt:function(){var z=this.b
if(z==null){z=D.M()
this.b=z}return z},
gbH:function(){var z=this.c
if(z==null){z=D.M()
this.c=z}return z},
ge0:function(){var z=this.d
if(z==null){z=D.M()
this.d=z}return z}},d3:{"^":"co;x,c,d,e,a,0b"},co:{"^":"t;"},eP:{"^":"co;x,y,z,Q,ch,c,d,e,a,0b"},jz:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
ar:function(a,b){var z,y,x,w
H.w(a,"$isd",[V.X],"$asd")
z=new P.al(Date.now(),!1)
y=a.length>0?a[0]:new V.X(0,0)
x=this.a.gaH()
w=new X.eP(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hZ:function(a){var z
H.w(a,"$isd",[V.X],"$asd")
z=this.b
if(z==null)return!1
z.C(this.ar(a,!0))
return!0},
hX:function(a){var z
H.w(a,"$isd",[V.X],"$asd")
z=this.c
if(z==null)return!1
z.C(this.ar(a,!0))
return!0},
hY:function(a){var z
H.w(a,"$isd",[V.X],"$asd")
z=this.d
if(z==null)return!1
z.C(this.ar(a,!1))
return!0}},jY:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaH:function(){var z=this.a
return V.eB(0,0,(z&&C.l).gdr(z).c,C.l.gdr(z).d)},
d5:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.ei(z,new X.aD(y,a.altKey,a.shiftKey))},
aF:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aD(y,a.altKey,a.shiftKey)},
c8:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aD(y,a.altKey,a.shiftKey)},
as:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.G()
v=z.top
if(typeof x!=="number")return x.G()
return new V.X(y-w,x-v)},
aV:function(a){return new V.V(a.movementX,a.movementY)},
c2:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.e([],[V.X])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v){u=x[v]
t=C.e.ac(u.pageX)
C.e.ac(u.pageY)
s=z.left
C.e.ac(u.pageX)
C.a.h(y,new V.X(t-s,C.e.ac(u.pageY)-z.top))}return y},
ap:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dT(z,new X.aD(y,a.altKey,a.shiftKey))},
bX:function(a){var z,y,x,w,v,u
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
iK:[function(a){this.f=!0},"$1","gfb",4,0,9],
iD:[function(a){this.f=!1},"$1","gf4",4,0,9],
iH:[function(a){H.f(a,"$isad")
if(this.f&&this.bX(a))a.preventDefault()},"$1","gf8",4,0,5],
iM:[function(a){var z
H.f(a,"$isbA")
if(!this.f)return
z=this.d5(a)
if(this.b.i_(z))a.preventDefault()},"$1","gfd",4,0,22],
iL:[function(a){var z
H.f(a,"$isbA")
if(!this.f)return
z=this.d5(a)
if(this.b.hW(z))a.preventDefault()},"$1","gfc",4,0,22],
iO:[function(a){var z,y,x,w
H.f(a,"$isad")
z=this.a
z.focus()
this.f=!0
this.aF(a)
if(this.x){y=this.ap(a)
x=this.aV(a)
if(this.d.cE(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ap(a)
w=this.as(a)
if(this.c.cE(y,w))a.preventDefault()},"$1","gfg",4,0,5],
iQ:[function(a){var z,y,x
H.f(a,"$isad")
this.aF(a)
z=this.ap(a)
if(this.x){y=this.aV(a)
if(this.d.b6(z,y))a.preventDefault()
return}if(this.r)return
x=this.as(a)
if(this.c.b6(z,x))a.preventDefault()},"$1","gfi",4,0,5],
iJ:[function(a){var z,y,x
H.f(a,"$isad")
if(!this.bX(a)){this.aF(a)
z=this.ap(a)
if(this.x){y=this.aV(a)
if(this.d.b6(z,y))a.preventDefault()
return}if(this.r)return
x=this.as(a)
if(this.c.b6(z,x))a.preventDefault()}},"$1","gfa",4,0,5],
iP:[function(a){var z,y,x
H.f(a,"$isad")
this.aF(a)
z=this.ap(a)
if(this.x){y=this.aV(a)
if(this.d.b5(z,y))a.preventDefault()
return}if(this.r)return
x=this.as(a)
if(this.c.b5(z,x))a.preventDefault()},"$1","gfh",4,0,5],
iI:[function(a){var z,y,x
H.f(a,"$isad")
if(!this.bX(a)){this.aF(a)
z=this.ap(a)
if(this.x){y=this.aV(a)
if(this.d.b5(z,y))a.preventDefault()
return}if(this.r)return
x=this.as(a)
if(this.c.b5(z,x))a.preventDefault()}},"$1","gf9",4,0,5],
iR:[function(a){var z,y
H.f(a,"$isbJ")
this.aF(a)
z=new V.V((a&&C.A).ghp(a),C.A.ghq(a)).u(0,180)
if(this.x){if(this.d.i0(z))a.preventDefault()
return}if(this.r)return
y=this.as(a)
if(this.c.i1(z,y))a.preventDefault()},"$1","gfj",4,0,35],
iS:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ap(this.y)
v=this.as(this.y)
this.d.ff(w,v,x)}},"$1","gfk",4,0,9],
iY:[function(a){var z
H.f(a,"$isbl")
this.a.focus()
this.f=!0
this.c8(a)
z=this.c2(a)
if(this.e.hZ(z))a.preventDefault()},"$1","gfs",4,0,12],
iW:[function(a){var z
H.f(a,"$isbl")
this.c8(a)
z=this.c2(a)
if(this.e.hX(z))a.preventDefault()},"$1","gfp",4,0,12],
iX:[function(a){var z
H.f(a,"$isbl")
this.c8(a)
z=this.c2(a)
if(this.e.hY(z))a.preventDefault()},"$1","gfq",4,0,12]}}],["","",,D,{"^":"",cg:{"^":"b;0a,0b,0c,0d",
gA:function(){var z=this.d
if(z==null){z=D.M()
this.d=z}return z},
aA:[function(a){var z
H.f(a,"$ist")
z=this.d
if(!(z==null))z.C(a)},function(){return this.aA(null)},"is","$1","$0","geB",0,2,1],
$isa2:1,
$isaQ:1},a2:{"^":"b;",$isaQ:1},hY:{"^":"aO;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gA:function(){var z=this.Q
if(z==null){z=D.M()
this.Q=z}return z},
aA:function(a){var z=this.Q
if(!(z==null))z.C(a)},
fe:[function(a){var z
H.f(a,"$ist")
z=this.ch
if(!(z==null))z.C(a)},function(){return this.fe(null)},"iN","$1","$0","gdc",0,2,1],
iT:[function(a){var z,y,x
H.w(a,"$isk",[D.a2],"$ask")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.C)(a),++y){x=a[y]
if(x==null||this.eM(x))return!1}return!0},"$1","gfm",4,0,37],
iA:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a2
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gdc(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=H.f(b[u],"$isa2")
if(t instanceof D.cg)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.b6()
s.a=H.e([],v)
s.c=0
t.d=s}H.h(x,w)
C.a.h(s.a,x)}z=new D.ck(a,b,this,[z])
z.b=!0
this.aA(z)},"$2","gf1",8,0,21],
iV:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a2
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gdc(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=H.f(b[u],"$isa2")
if(t instanceof D.cg)C.a.O(this.e,t)
s=t.d
if(s==null){s=new D.b6()
s.a=H.e([],v)
s.c=0
t.d=s}H.h(x,w)
C.a.O(s.a,x)}z=new D.cl(a,b,this,[z])
z.b=!0
this.aA(z)},"$2","gfo",8,0,21],
eM:function(a){var z=C.a.bo(this.e,a)
return z},
$ask:function(){return[D.a2]},
$asaO:function(){return[D.a2]}},iA:{"^":"b;",$isa2:1,$isaQ:1},jb:{"^":"b;",$isa2:1,$isaQ:1},jr:{"^":"b;",$isa2:1,$isaQ:1},js:{"^":"b;",$isa2:1,$isaQ:1},jt:{"^":"b;",$isa2:1,$isaQ:1}}],["","",,V,{"^":"",
nA:[function(a,b){if(typeof b!=="number")return b.G()
if(typeof a!=="number")return H.n(a)
return Math.abs(b-a)<=1e-9},"$2","io",8,0,36],
no:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.e.ah(a-b,z)
return(a<0?a+z:a)+b},
R:function(a,b,c){if(a==null)return C.b.ab("null",c)
return C.b.ab(C.e.ec($.q.$2(a,0)?0:a,b),c+b+1)},
br:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isd",[P.u],"$asd")
z=H.e([],[P.i])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.C)(a),++w){v=V.R(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.c(z,u)
C.a.m(z,u,C.b.ab(z[u],x))}return z},
dG:function(a,b){return C.e.ij(Math.pow(b,C.I.b_(Math.log(H.mn(a))/Math.log(b))))},
a4:{"^":"b;a,b,c",
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
return new V.a4(z,y,x)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}},
bX:{"^":"b;a,b,c,d",
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
return new V.bX(z,y,x,w)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bX))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+", "+V.R(this.d,3,0)+"]"}},
cn:{"^":"b;a,b,c,d,e,f,r,x,y",
ad:function(a,b){var z=H.e([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.u])
return z},
j:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.f(a5,"$iscn")
z=this.a
y=a5.a
if(typeof z!=="number")return z.j()
x=C.e.j(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.j()
u=C.e.j(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.j()
r=C.e.j(t,s)
q=a5.b
p=C.e.j(z,q)
o=a5.e
n=C.e.j(w,o)
m=a5.x
l=C.e.j(t,m)
k=a5.c
z=C.e.j(z,k)
j=a5.f
w=C.e.j(w,j)
i=a5.y
t=C.e.j(t,i)
h=this.d
if(typeof h!=="number")return h.j()
g=C.e.j(h,y)
f=this.e
if(typeof f!=="number")return f.j()
e=C.e.j(f,v)
d=this.f
if(typeof d!=="number")return d.j()
c=C.e.j(d,s)
b=C.e.j(h,q)
a=C.e.j(f,o)
a0=C.e.j(d,m)
h=C.e.j(h,k)
f=C.e.j(f,j)
d=C.e.j(d,i)
a1=this.r
if(typeof a1!=="number")return a1.j()
y=C.e.j(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.j()
v=C.e.j(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.j()
return new V.cn(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.e.j(a3,s),C.e.j(a1,q)+C.e.j(a2,o)+C.e.j(a3,m),C.e.j(a1,k)+C.e.j(a2,j)+C.e.j(a3,i))},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cn))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
z=b.e
if(!$.q.$2(z,this.e))return!1
z=b.f
if(!$.q.$2(z,this.f))return!1
z=b.r
if(!$.q.$2(z,this.r))return!1
z=b.x
if(!$.q.$2(z,this.x))return!1
z=b.y
if(!$.q.$2(z,this.y))return!1
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.u]
y=V.br(H.e([this.a,this.d,this.r],z),3,0)
x=V.br(H.e([this.b,this.e,this.x],z),3,0)
w=V.br(H.e([this.c,this.f,this.y],z),3,0)
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
aw:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ad:function(a,b){var z=H.e([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.u])
return z},
dZ:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.n(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.n(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.n(u)
t=this.c
if(typeof t!=="number")return t.j()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.n(r)
q=this.d
if(typeof q!=="number")return q.j()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.j()
if(typeof k!=="number")return H.n(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.j()
if(typeof i!=="number")return H.n(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.n(g)
f=this.Q
if(typeof f!=="number")return f.j()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.n(d)
c=this.ch
if(typeof c!=="number")return c.j()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.q.$2(a2,0))return V.c4()
a3=1/a2
a4=-w
a5=-i
return V.aC((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
j:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.f(a7,"$isaw")
z=this.a
y=a7.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.n(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.n(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.n(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.j()
if(typeof s!=="number")return H.n(s)
r=a7.b
if(typeof r!=="number")return H.n(r)
q=a7.f
if(typeof q!=="number")return H.n(q)
p=a7.z
if(typeof p!=="number")return H.n(p)
o=a7.cy
if(typeof o!=="number")return H.n(o)
n=a7.c
if(typeof n!=="number")return H.n(n)
m=a7.r
if(typeof m!=="number")return H.n(m)
l=a7.Q
if(typeof l!=="number")return H.n(l)
k=a7.db
if(typeof k!=="number")return H.n(k)
j=a7.d
if(typeof j!=="number")return H.n(j)
i=a7.x
if(typeof i!=="number")return H.n(i)
h=a7.ch
if(typeof h!=="number")return H.n(h)
g=a7.dx
if(typeof g!=="number")return H.n(g)
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
return V.aC(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cM:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
v=this.c
u=a.c
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.n(u)
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
return new V.G(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
be:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
v=this.c
u=a.c
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.n(u)
t=this.d
if(typeof t!=="number")return H.n(t)
s=this.e
if(typeof s!=="number")return s.j()
r=this.f
if(typeof r!=="number")return r.j()
q=this.r
if(typeof q!=="number")return q.j()
p=this.x
if(typeof p!=="number")return H.n(p)
o=this.y
if(typeof o!=="number")return o.j()
n=this.z
if(typeof n!=="number")return n.j()
m=this.Q
if(typeof m!=="number")return m.j()
l=this.ch
if(typeof l!=="number")return H.n(l)
return new V.Y(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aw))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
z=b.e
if(!$.q.$2(z,this.e))return!1
z=b.f
if(!$.q.$2(z,this.f))return!1
z=b.r
if(!$.q.$2(z,this.r))return!1
z=b.x
if(!$.q.$2(z,this.x))return!1
z=b.y
if(!$.q.$2(z,this.y))return!1
z=b.z
if(!$.q.$2(z,this.z))return!1
z=b.Q
if(!$.q.$2(z,this.Q))return!1
z=b.ch
if(!$.q.$2(z,this.ch))return!1
z=b.cx
if(!$.q.$2(z,this.cx))return!1
z=b.cy
if(!$.q.$2(z,this.cy))return!1
z=b.db
if(!$.q.$2(z,this.db))return!1
z=b.dx
if(!$.q.$2(z,this.dx))return!1
return!0},
i:function(a){return this.K()},
dR:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.u]
y=V.br(H.e([this.a,this.e,this.y,this.cx],z),b,c)
x=V.br(H.e([this.b,this.f,this.z,this.cy],z),b,c)
w=V.br(H.e([this.c,this.r,this.Q,this.db],z),b,c)
v=V.br(H.e([this.d,this.x,this.ch,this.dx],z),b,c)
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
K:function(){return this.dR("",3,0)},
B:function(a){return this.dR(a,3,0)},
p:{
aC:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aw(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
c4:function(){return V.aC(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
er:function(a,b,c){var z,y,x,w,v
z=c.u(0,Math.sqrt(c.E(c)))
y=b.at(z)
x=y.u(0,Math.sqrt(y.E(y)))
w=z.at(x)
v=new V.G(a.a,a.b,a.c)
return V.aC(x.a,w.a,z.a,x.N(0).E(v),x.b,w.b,z.b,w.N(0).E(v),x.c,w.c,z.c,z.N(0).E(v),0,0,0,1)}}},
X:{"^":"b;a,b",
G:function(a,b){return new V.X(this.a-b.a,this.b-b.b)},
j:function(a,b){return new V.X(this.a*b,this.b*b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+"]"}},
Y:{"^":"b;a,b,c",
w:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.w()
if(typeof w!=="number")return H.n(w)
return new V.Y(this.a+z,this.b+y,x+w)},
G:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.G()
if(typeof w!=="number")return H.n(w)
return new V.Y(this.a-z,this.b-y,x-w)},
j:function(a,b){var z=this.c
if(typeof z!=="number")return z.j()
return new V.Y(this.a*b,this.b*b,z*b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}},
c5:{"^":"b;a,b,c,d",
j:function(a,b){return new V.c5(this.a*b,this.b*b,this.c*b,this.d*b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c5))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+", "+V.R(this.d,3,0)+"]"}},
eA:{"^":"b;a,b,c,d",
ga4:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eA))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+", "+V.R(this.d,3,0)+"]"},
p:{
eB:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eA(a,b,c,d)}}},
V:{"^":"b;a,b",
hG:[function(a){return Math.sqrt(this.E(this))},"$0","gl",1,0,16],
E:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.n(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.n(w)
return z*y+x*w},
j:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.j()
y=this.b
if(typeof y!=="number")return y.j()
return new V.V(z*b,y*b)},
u:function(a,b){var z,y
if($.q.$2(b,0))return new V.V(0,0)
z=this.a
if(typeof z!=="number")return z.u()
y=this.b
if(typeof y!=="number")return y.u()
return new V.V(z/b,y/b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+"]"}},
G:{"^":"b;a,b,c",
hG:[function(a){return Math.sqrt(this.E(this))},"$0","gl",1,0,16],
E:function(a){var z,y
z=this.c
y=a.c
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.n(y)
return this.a*a.a+this.b*a.b+z*y},
cA:function(a,b){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=a.c
if(typeof w!=="number")return w.G()
if(typeof x!=="number")return H.n(x)
return new V.G(z+b*(a.a-z),y+b*(a.b-y),x+b*(w-x))},
at:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
if(typeof y!=="number")return H.n(y)
x=this.c
w=a.b
if(typeof x!=="number")return x.j()
v=a.a
u=this.a
return new V.G(z*y-x*w,x*v-u*y,u*w-z*v)},
w:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.w()
if(typeof w!=="number")return H.n(w)
return new V.G(this.a+z,this.b+y,x+w)},
N:function(a){var z=this.c
if(typeof z!=="number")return z.N()
return new V.G(-this.a,-this.b,-z)},
j:function(a,b){var z=this.c
if(typeof z!=="number")return z.j()
return new V.G(this.a*b,this.b*b,z*b)},
u:function(a,b){var z
if($.q.$2(b,0))return new V.G(0,0,0)
z=this.c
if(typeof z!=="number")return z.u()
return new V.G(this.a/b,this.b/b,z/b)},
e_:function(){if(!$.q.$2(0,this.a))return!1
if(!$.q.$2(0,this.b))return!1
if(!$.q.$2(0,this.c))return!1
return!0},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.G))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}}}],["","",,U,{"^":"",ho:{"^":"dW;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bQ:function(a){var z=V.no(a,this.c,this.b)
return z},
gA:function(){var z=this.y
if(z==null){z=D.M()
this.y=z}return z},
R:function(a){var z=this.y
if(!(z==null))z.C(a)},
scN:function(a,b){},
scB:function(a){var z,y
z=this.b
if(!$.q.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bQ(z)}z=new D.Q("maximumLocation",y,this.b,this,[P.u])
z.b=!0
this.R(z)}},
scD:function(a){var z,y
z=this.c
if(!$.q.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bQ(z)}z=new D.Q("minimumLocation",y,this.c,this,[P.u])
z.b=!0
this.R(z)}},
sW:function(a,b){var z,y
b=this.bQ(b)
z=this.d
if(!$.q.$2(z,b)){y=this.d
this.d=b
z=new D.Q("location",y,b,this,[P.u])
z.b=!0
this.R(z)}},
scC:function(a){var z,y,x
z=this.e
if(!$.q.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.Q("maximumVelocity",y,a,this,[P.u])
z.b=!0
this.R(z)}},
sS:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.q.$2(z,a)){x=this.f
this.f=a
z=new D.Q("velocity",x,a,this,[P.u])
z.b=!0
this.R(z)}},
scn:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.q.$2(z,a)){y=this.x
this.x=a
z=new D.Q("dampening",y,a,this,[P.u])
z.b=!0
this.R(z)}},
an:function(a,b){var z,y,x,w
z=this.f
if($.q.$2(z,0)){z=this.r
z=!$.q.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sW(0,this.d+y*b)
z=this.x
if(!$.q.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sS(y)}},
p:{
cS:function(){var z=new U.ho()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dY:{"^":"ae;0a,0b",
gA:function(){var z=this.b
if(z==null){z=D.M()
this.b=z}return z},
aR:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dY))return!1
return J.O(this.a,b.a)},
i:function(a){return"Constant: "+this.a.B("          ")},
p:{
dZ:function(a){var z=new U.dY()
z.a=a
return z}}},eb:{"^":"aO;0e,0f,0r,0a,0b,0c,0d",
gA:function(){var z=this.e
if(z==null){z=D.M()
this.e=z}return z},
R:[function(a){var z
H.f(a,"$ist")
z=this.e
if(!(z==null))z.C(a)},function(){return this.R(null)},"ae","$1","$0","gaB",0,2,1],
iz:[function(a,b){var z,y,x,w,v,u,t
z=U.ae
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaB(),w={func:1,ret:-1,args:[D.t]},v=0;v<b.length;b.length===y||(0,H.C)(b),++v){u=b[v]
if(u!=null){t=u.gA()
t.toString
H.h(x,w)
C.a.h(t.a,x)}}z=new D.ck(a,b,this,[z])
z.b=!0
this.R(z)},"$2","gf0",8,0,19],
iU:[function(a,b){var z,y,x,w,v,u,t
z=U.ae
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaB(),w={func:1,ret:-1,args:[D.t]},v=0;v<b.length;b.length===y||(0,H.C)(b),++v){u=b[v]
if(u!=null){t=u.gA()
t.toString
H.h(x,w)
C.a.O(t.a,x)}}z=new D.cl(a,b,this,[z])
z.b=!0
this.R(z)},"$2","gfn",8,0,19],
aR:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.L()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.au(z,z.length,0,[H.y(z,0)]),x=null;z.F();){y=z.d
if(y!=null){w=y.aR(0,b,c)
if(w!=null)x=x==null?w:w.j(0,x)}}this.f=x==null?V.c4():x
z=this.e
if(!(z==null))z.a6(0)}return this.f},
t:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eb))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.c(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.c(w,y)
if(!J.O(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$ask:function(){return[U.ae]},
$asaO:function(){return[U.ae]},
$isae:1},ae:{"^":"dW;"},jZ:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gA:function(){var z=this.cy
if(z==null){z=D.M()
this.cy=z}return z},
R:[function(a){var z
H.f(a,"$ist")
z=this.cy
if(!(z==null))z.C(a)},function(){return this.R(null)},"ae","$1","$0","gaB",0,2,1],
aX:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdt()
z.toString
y={func:1,ret:-1,args:[D.t]}
x=H.h(this.gbY(),y)
C.a.h(z.a,x)
x=this.a.c.ge0()
x.toString
z=H.h(this.gbZ(),y)
C.a.h(x.a,z)
z=this.a.c.gbH()
z.toString
y=H.h(this.gc_(),y)
C.a.h(z.a,y)
return!0},
eX:[function(a){H.f(a,"$ist")
if(!J.O(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbY",4,0,2],
eY:[function(a){var z,y,x,w,v,u,t
a=H.j(H.f(a,"$ist"),"$isbC")
if(!this.y)return
if(this.x){z=a.d.G(0,a.y)
z=new V.V(z.a,z.b)
z=z.E(z)
y=this.r
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.G(0,a.y)
z=new V.V(y.a,y.b).j(0,2).u(0,z.ga4())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.j()
x=this.e
if(typeof x!=="number")return H.n(x)
y.sS(z*10*x)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=new V.V(x.a,x.b).j(0,2).u(0,z.ga4())
x=this.b
v=w.a
if(typeof v!=="number")return v.N()
u=this.e
if(typeof u!=="number")return H.n(u)
t=this.z
if(typeof t!=="number")return H.n(t)
x.sW(0,-v*u+t)
this.b.sS(0)
y=y.G(0,a.z)
this.Q=new V.V(y.a,y.b).j(0,2).u(0,z.ga4())}this.ae()},"$1","gbZ",4,0,2],
eZ:[function(a){var z,y,x
H.f(a,"$ist")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.E(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.j()
x=this.e
if(typeof x!=="number")return H.n(x)
z.sS(y*10*x)
this.ae()}},"$1","gc_",4,0,2],
aR:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.L()
if(z<y){this.ch=y
x=b.y
this.b.an(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aC(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isae:1},k_:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gA:function(){var z=this.fx
if(z==null){z=D.M()
this.fx=z}return z},
R:[function(a){var z
H.f(a,"$ist")
z=this.fx
if(!(z==null))z.C(a)},function(){return this.R(null)},"ae","$1","$0","gaB",0,2,1],
aX:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gdt()
z.toString
y={func:1,ret:-1,args:[D.t]}
x=H.h(this.gbY(),y)
C.a.h(z.a,x)
x=this.a.c.ge0()
x.toString
z=H.h(this.gbZ(),y)
C.a.h(x.a,z)
z=this.a.c.gbH()
z.toString
x=H.h(this.gc_(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.M()
x.f=z}x=H.h(this.geU(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.M()
x.d=z}x=H.h(this.geV(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.M()
x.b=z}x=H.h(this.gfP(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.M()
x.d=z}x=H.h(this.gfO(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.M()
x.c=z}y=H.h(this.gfN(),y)
C.a.h(z.a,y)
return!0},
aj:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.N()
z=-z}if(this.r){if(typeof y!=="number")return y.N()
y=-y}return new V.V(z,y)},
eX:[function(a){a=H.j(H.f(a,"$ist"),"$isbC")
if(!J.O(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbY",4,0,2],
eY:[function(a){var z,y,x,w,v,u,t
a=H.j(H.f(a,"$ist"),"$isbC")
if(!this.cx)return
if(this.ch){z=a.d.G(0,a.y)
z=new V.V(z.a,z.b)
z=z.E(z)
y=this.Q
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.G(0,a.y)
z=this.aj(new V.V(y.a,y.b).j(0,2).u(0,z.ga4()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.N()
x=this.y
if(typeof x!=="number")return H.n(x)
y.sS(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.N()
y=this.x
if(typeof y!=="number")return H.n(y)
x.sS(-z*10*y)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=this.aj(new V.V(x.a,x.b).j(0,2).u(0,z.ga4()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sW(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sW(0,-u*v+x)
this.b.sS(0)
this.c.sS(0)
y=y.G(0,a.z)
this.dx=this.aj(new V.V(y.a,y.b).j(0,2).u(0,z.ga4()))}this.ae()},"$1","gbZ",4,0,2],
eZ:[function(a){var z,y,x
H.f(a,"$ist")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.E(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.N()
x=this.y
if(typeof x!=="number")return H.n(x)
z.sS(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.N()
z=this.x
if(typeof z!=="number")return H.n(z)
x.sS(-y*10*z)
this.ae()}},"$1","gc_",4,0,2],
iw:[function(a){if(H.j(H.f(a,"$ist"),"$isep").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","geU",4,0,2],
ix:[function(a){var z,y,x,w,v,u,t
a=H.j(H.f(a,"$ist"),"$isbC")
if(!J.O(this.d,a.x.b))return
z=a.c
y=a.d
x=y.G(0,a.y)
w=this.aj(new V.V(x.a,x.b).j(0,2).u(0,z.ga4()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sW(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sW(0,-u*v+x)
this.b.sS(0)
this.c.sS(0)
y=y.G(0,a.z)
this.dx=this.aj(new V.V(y.a,y.b).j(0,2).u(0,z.ga4()))
this.ae()},"$1","geV",4,0,2],
j1:[function(a){H.f(a,"$ist")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfP",4,0,2],
j0:[function(a){var z,y,x,w,v,u,t
a=H.j(H.f(a,"$ist"),"$iseP")
if(!this.cx)return
if(this.ch){z=a.d.G(0,a.y)
z=new V.V(z.a,z.b)
z=z.E(z)
y=this.Q
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.G(0,a.y)
z=this.aj(new V.V(y.a,y.b).j(0,2).u(0,z.ga4()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.N()
x=this.y
if(typeof x!=="number")return H.n(x)
y.sS(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.N()
y=this.x
if(typeof y!=="number")return H.n(y)
x.sS(-z*10*y)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=this.aj(new V.V(x.a,x.b).j(0,2).u(0,z.ga4()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sW(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sW(0,-u*v+x)
this.b.sS(0)
this.c.sS(0)
y=y.G(0,a.z)
this.dx=this.aj(new V.V(y.a,y.b).j(0,2).u(0,z.ga4()))}this.ae()},"$1","gfO",4,0,2],
j_:[function(a){var z,y,x
H.f(a,"$ist")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.E(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.N()
x=this.y
if(typeof x!=="number")return H.n(x)
z.sS(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.N()
z=this.x
if(typeof z!=="number")return H.n(z)
x.sS(-y*10*z)
this.ae()}},"$1","gfN",4,0,2],
aR:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.L()
if(z<y){this.dy=y
x=b.y
this.c.an(0,x)
this.b.an(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aC(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.j(0,V.aC(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isae:1},k0:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gA:function(){var z=this.r
if(z==null){z=D.M()
this.r=z}return z},
R:function(a){var z=this.r
if(!(z==null))z.C(a)},
aX:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.M()
z.e=y
z=y}else z=y
y=H.h(this.gf_(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.M()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
iy:[function(a){var z,y,x,w
H.f(a,"$ist")
if(!J.O(this.b,this.a.b.c))return
H.j(a,"$isd3")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.j()
w=z+y*x
if(z!==w){this.d=w
z=new D.Q("zoom",z,w,this,[P.u])
z.b=!0
this.R(z)}},"$1","gf_",4,0,2],
aR:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aC(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isae:1}}],["","",,M,{"^":"",hF:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
aS:[function(a){var z
H.f(a,"$ist")
z=this.x
if(!(z==null))z.C(a)},function(){return this.aS(null)},"it","$1","$0","gaC",0,2,1],
iF:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aP
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaC(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=b[u]
if(t!=null){if(t.ga1()==null){s=new D.b6()
s.a=H.e([],v)
s.c=0
t.sa1(s)}s=t.ga1()
s.toString
H.h(x,w)
C.a.h(s.a,x)}}z=new D.ck(a,b,this,[z])
z.b=!0
this.aS(z)},"$2","gf6",8,0,10],
iG:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aP
H.w(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaC(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=b[u]
if(t!=null){if(t.ga1()==null){s=new D.b6()
s.a=H.e([],v)
s.c=0
t.sa1(s)}s=t.ga1()
s.toString
H.h(x,w)
C.a.O(s.a,x)}}z=new D.cl(a,b,this,[z])
z.b=!0
this.aS(z)},"$2","gf7",8,0,10],
gA:function(){var z=this.x
if(z==null){z=D.M()
this.x=z}return z},
aP:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.e8(this.c)
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
if(typeof x!=="number")return H.n(x)
u=C.e.ac(v.a*x)
if(typeof w!=="number")return H.n(w)
t=C.e.ac(v.b*w)
s=C.e.ac(v.c*x)
a.c=s
v=C.e.ac(v.d*w)
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
s=a.cy
r=z.b
q=z.c
p=z.d
o=p-q
n=1/Math.tan(r*0.5)
s.e7(V.aC(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.ew
if(y==null){y=V.er(new V.Y(0,0,0),new V.G(0,1,0),new V.G(0,0,-1))
$.ew=y
m=y}else m=y
z=z.a
if(z!=null){l=z.a
if(l!=null)m=l.j(0,m)}a.db.e7(m)
for(z=this.d.a,z=new J.au(z,z.length,0,[H.y(z,0)]);z.F();)z.d.an(0,a)
for(z=this.d.a,z=new J.au(z,z.length,0,[H.y(z,0)]);z.F();)z.d.aP(a)
this.a.toString
a.cy.cF()
a.db.cF()
this.b.toString
a.e6()},
$isod:1}}],["","",,A,{"^":"",dM:{"^":"b;a,b,c"},hc:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
ht:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
hr:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},ih:{"^":"eC;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aL,0av,0aM,0bq,0du,0dv,0br,0bs,0dw,0dz,0bt,0bu,0dA,0dB,0bv,0dC,0dD,0bw,0dE,0dF,0bx,0by,0bz,0dG,0dH,0bA,0bB,0dI,0dJ,0bC,0dK,0cp,0dL,0cq,0dM,0cr,0dN,0cs,0dO,0ct,0dP,0cu,a,b,0c,0d,0e,0f,0r",
er:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.x=a2
z=new P.am("")
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
a2.fS(z)
a2.fZ(z)
a2.fT(z)
a2.h6(z)
a2.h7(z)
a2.h0(z)
a2.hb(z)
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
z=new P.am("")
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
v.fW(z)
v.fR(z)
v.fU(z)
v.fX(z)
v.h4(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.h2(z)
v.h3(z)}v.h_(z)
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
r=z.a+="   return litClr*("+C.a.D(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.fV(z)
v.h1(z)
v.h5(z)
v.h8(z)
v.h9(z)
v.ha(z)
v.fY(z)}r=z.a+="// === Main ===\n"
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
n="vec4("+C.a.D(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.c=this.d6(x.charCodeAt(0)==0?x:x,35633)
this.d=this.d6(v.charCodeAt(0)==0?v:v,35632)
v=this.a
x=v.createProgram()
this.e=x
v.attachShader(x,this.c)
v.attachShader(this.e,this.d)
v.linkProgram(this.e)
if(!H.fO(v.getProgramParameter(this.e,35714))){m=v.getProgramInfoLog(this.e)
v.deleteProgram(this.e)
H.p(P.v("Failed to link shader: "+H.l(m)))}this.fI()
this.fK()
this.y=this.f.k(0,"posAttr")
this.Q=this.f.k(0,"normAttr")
this.z=this.f.k(0,"binmAttr")
this.ch=this.f.k(0,"txt2DAttr")
this.cx=this.f.k(0,"txtCubeAttr")
this.cy=this.f.k(0,"bendAttr")
if(a2.fr)this.fy=H.j(this.r.n(0,"invViewMat"),"$isaS")
if(y)this.db=H.j(this.r.n(0,"objMat"),"$isaS")
if(w)this.dx=H.j(this.r.n(0,"viewObjMat"),"$isaS")
this.fr=H.j(this.r.n(0,"projViewObjMat"),"$isaS")
if(a2.x2)this.go=H.j(this.r.n(0,"txt2DMat"),"$isdh")
if(a2.y1)this.id=H.j(this.r.n(0,"txtCubeMat"),"$isaS")
if(a2.y2)this.k1=H.j(this.r.n(0,"colorMat"),"$isaS")
this.k3=H.e([],[A.aS])
y=a2.aL
if(y>0){this.k2=H.f(this.r.n(0,"bendMatCount"),"$isN")
for(l=0;l<y;++l){x=this.k3
w=this.r
v="bendValues["+l+"].mat"
k=w.k(0,v)
if(k==null)H.p(P.v("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.j(k,"$isaS"))}}y=a2.a
if(y!==C.c){this.k4=H.j(this.r.n(0,"emissionClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.f:this.r1=H.j(this.r.n(0,"emissionTxt"),"$isan")
this.rx=H.j(this.r.n(0,"nullEmissionTxt"),"$isN")
break
case C.h:this.r2=H.j(this.r.n(0,"emissionTxt"),"$isao")
this.rx=H.j(this.r.n(0,"nullEmissionTxt"),"$isN")
break}}y=a2.b
if(y!==C.c){this.ry=H.j(this.r.n(0,"ambientClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.f:this.x1=H.j(this.r.n(0,"ambientTxt"),"$isan")
this.y1=H.j(this.r.n(0,"nullAmbientTxt"),"$isN")
break
case C.h:this.x2=H.j(this.r.n(0,"ambientTxt"),"$isao")
this.y1=H.j(this.r.n(0,"nullAmbientTxt"),"$isN")
break}}y=a2.c
if(y!==C.c){this.y2=H.j(this.r.n(0,"diffuseClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.f:this.aL=H.j(this.r.n(0,"diffuseTxt"),"$isan")
this.aM=H.j(this.r.n(0,"nullDiffuseTxt"),"$isN")
break
case C.h:this.av=H.j(this.r.n(0,"diffuseTxt"),"$isao")
this.aM=H.j(this.r.n(0,"nullDiffuseTxt"),"$isN")
break}}y=a2.d
if(y!==C.c){this.bq=H.j(this.r.n(0,"invDiffuseClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.f:this.du=H.j(this.r.n(0,"invDiffuseTxt"),"$isan")
this.br=H.j(this.r.n(0,"nullInvDiffuseTxt"),"$isN")
break
case C.h:this.dv=H.j(this.r.n(0,"invDiffuseTxt"),"$isao")
this.br=H.j(this.r.n(0,"nullInvDiffuseTxt"),"$isN")
break}}y=a2.e
if(y!==C.c){this.bu=H.j(this.r.n(0,"shininess"),"$isZ")
this.bs=H.j(this.r.n(0,"specularClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.f:this.dw=H.j(this.r.n(0,"specularTxt"),"$isan")
this.bt=H.j(this.r.n(0,"nullSpecularTxt"),"$isN")
break
case C.h:this.dz=H.j(this.r.n(0,"specularTxt"),"$isao")
this.bt=H.j(this.r.n(0,"nullSpecularTxt"),"$isN")
break}}switch(a2.f){case C.c:break
case C.i:break
case C.f:this.dA=H.j(this.r.n(0,"bumpTxt"),"$isan")
this.bv=H.j(this.r.n(0,"nullBumpTxt"),"$isN")
break
case C.h:this.dB=H.j(this.r.n(0,"bumpTxt"),"$isao")
this.bv=H.j(this.r.n(0,"nullBumpTxt"),"$isN")
break}if(a2.dy){this.dC=H.j(this.r.n(0,"envSampler"),"$isao")
this.dD=H.j(this.r.n(0,"nullEnvTxt"),"$isN")
y=a2.r
if(y!==C.c){this.bw=H.j(this.r.n(0,"reflectClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.f:this.dE=H.j(this.r.n(0,"reflectTxt"),"$isan")
this.bx=H.j(this.r.n(0,"nullReflectTxt"),"$isN")
break
case C.h:this.dF=H.j(this.r.n(0,"reflectTxt"),"$isao")
this.bx=H.j(this.r.n(0,"nullReflectTxt"),"$isN")
break}}y=a2.x
if(y!==C.c){this.by=H.j(this.r.n(0,"refraction"),"$isZ")
this.bz=H.j(this.r.n(0,"refractClr"),"$isK")
switch(y){case C.c:break
case C.i:break
case C.f:this.dG=H.j(this.r.n(0,"refractTxt"),"$isan")
this.bA=H.j(this.r.n(0,"nullRefractTxt"),"$isN")
break
case C.h:this.dH=H.j(this.r.n(0,"refractTxt"),"$isao")
this.bA=H.j(this.r.n(0,"nullRefractTxt"),"$isN")
break}}}y=a2.y
if(y!==C.c){this.bB=H.j(this.r.n(0,"alpha"),"$isZ")
switch(y){case C.c:break
case C.i:break
case C.f:this.dI=H.j(this.r.n(0,"alphaTxt"),"$isan")
this.bC=H.j(this.r.n(0,"nullAlphaTxt"),"$isN")
break
case C.h:this.dJ=H.j(this.r.n(0,"alphaTxt"),"$isao")
this.bC=H.j(this.r.n(0,"nullAlphaTxt"),"$isN")
break}}this.cp=H.e([],[A.f1])
this.cq=H.e([],[A.f2])
this.cr=H.e([],[A.f3])
this.cs=H.e([],[A.f4])
this.ct=H.e([],[A.f5])
this.cu=H.e([],[A.f6])
if(a2.k2){y=a2.z
if(y>0){this.dK=H.f(this.r.n(0,"dirLightCount"),"$isN")
for(l=0;l<y;++l){x=this.r
w="dirLights["+l+"].viewDir"
k=x.k(0,w)
if(k==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isK")
x=this.r
w="dirLights["+l+"].color"
j=x.k(0,w)
if(j==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isK")
x=this.cp;(x&&C.a).h(x,new A.f1(l,k,j))}}y=a2.Q
if(y>0){this.dL=H.f(this.r.n(0,"pntLightCount"),"$isN")
for(l=0;l<y;++l){x=this.r
w="pntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isK")
x=this.r
w="pntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isK")
x=this.r
w="pntLights["+l+"].color"
i=x.k(0,w)
if(i==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isK")
x=this.r
w="pntLights["+l+"].att0"
h=x.k(0,w)
if(h==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isZ")
x=this.r
w="pntLights["+l+"].att1"
g=x.k(0,w)
if(g==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isZ")
x=this.r
w="pntLights["+l+"].att2"
f=x.k(0,w)
if(f==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isZ")
x=this.cq;(x&&C.a).h(x,new A.f2(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.dM=H.f(this.r.n(0,"spotLightCount"),"$isN")
for(l=0;l<y;++l){x=this.r
w="spotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isK")
x=this.r
w="spotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isK")
x=this.r
w="spotLights["+l+"].viewPnt"
i=x.k(0,w)
if(i==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isK")
x=this.r
w="spotLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isK")
x=this.r
w="spotLights["+l+"].cutoff"
g=x.k(0,w)
if(g==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isZ")
x=this.r
w="spotLights["+l+"].coneAngle"
f=x.k(0,w)
if(f==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isZ")
x=this.r
w="spotLights["+l+"].att0"
e=x.k(0,w)
if(e==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isZ")
x=this.r
w="spotLights["+l+"].att1"
d=x.k(0,w)
if(d==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isZ")
x=this.r
w="spotLights["+l+"].att2"
c=x.k(0,w)
if(c==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isZ")
x=this.cr;(x&&C.a).h(x,new A.f3(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.dN=H.f(this.r.n(0,"txtDirLightCount"),"$isN")
for(l=0;l<y;++l){x=this.r
w="txtDirLights["+l+"].objUp"
k=x.k(0,w)
if(k==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isK")
x=this.r
w="txtDirLights["+l+"].objRight"
j=x.k(0,w)
if(j==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isK")
x=this.r
w="txtDirLights["+l+"].objDir"
i=x.k(0,w)
if(i==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isK")
x=this.r
w="txtDirLights["+l+"].viewDir"
h=x.k(0,w)
if(h==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isK")
x=this.r
w="txtDirLights["+l+"].color"
g=x.k(0,w)
if(g==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isK")
x=this.r
w="txtDirLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isN")
x=this.r
w="txtDirLightsTxt2D"+l
e=x.k(0,w)
if(e==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isan")
x=this.cs;(x&&C.a).h(x,new A.f4(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.dO=H.f(this.r.n(0,"txtPntLightCount"),"$isN")
for(l=0;l<y;++l){x=this.r
w="txtPntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isK")
x=this.r
w="txtPntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isK")
x=this.r
w="txtPntLights["+l+"].invViewRotMat"
i=x.k(0,w)
if(i==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isdh")
x=this.r
w="txtPntLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isK")
x=this.r
w="txtPntLights["+l+"].nullTxt"
g=x.k(0,w)
if(g==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isN")
x=this.r
w="txtPntLights["+l+"].att0"
f=x.k(0,w)
if(f==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isZ")
x=this.r
w="txtPntLights["+l+"].att1"
e=x.k(0,w)
if(e==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isZ")
x=this.r
w="txtPntLights["+l+"].att2"
d=x.k(0,w)
if(d==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isZ")
x=this.r
w="txtPntLightsTxtCube"+l
c=x.k(0,w)
if(c==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isao")
x=this.ct;(x&&C.a).h(x,new A.f5(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.dP=H.f(this.r.n(0,"txtSpotLightCount"),"$isN")
for(l=0;l<y;++l){x=this.r
w="txtSpotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isK")
x=this.r
w="txtSpotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isK")
x=this.r
w="txtSpotLights["+l+"].objUp"
i=x.k(0,w)
if(i==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isK")
x=this.r
w="txtSpotLights["+l+"].objRight"
h=x.k(0,w)
if(h==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isK")
x=this.r
w="txtSpotLights["+l+"].viewPnt"
g=x.k(0,w)
if(g==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isK")
x=this.r
w="txtSpotLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isN")
x=this.r
w="txtSpotLights["+l+"].color"
e=x.k(0,w)
if(e==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isK")
x=this.r
w="txtSpotLights["+l+"].tuScalar"
d=x.k(0,w)
if(d==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isZ")
x=this.r
w="txtSpotLights["+l+"].tvScalar"
c=x.k(0,w)
if(c==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isZ")
x=this.r
w="txtSpotLights["+l+"].att0"
b=x.k(0,w)
if(b==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(b,"$isZ")
x=this.r
w="txtSpotLights["+l+"].att1"
a=x.k(0,w)
if(a==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a,"$isZ")
x=this.r
w="txtSpotLights["+l+"].att2"
a0=x.k(0,w)
if(a0==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a0,"$isZ")
x=this.r
w="txtSpotLightsTxt2D"+l
a1=x.k(0,w)
if(a1==null)H.p(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a1,"$isan")
x=this.cu;(x&&C.a).h(x,new A.f6(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
ag:function(a,b,c){b.a.uniform1i(b.d,1)},
a9:function(a,b,c){b.a.uniform1i(b.d,1)},
p:{
ig:function(a,b){var z,y
z=a.av
y=new A.ih(b,z)
y.ev(b,z)
y.er(a,b)
return y}}},ik:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aL,av,aM",
fS:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aL+"];\n"
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
fZ:function(a){var z
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
fT:function(a){var z
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
h6:function(a){var z,y
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
h7:function(a){var z,y
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
h0:function(a){var z
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
hb:function(a){var z
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
aq:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.c(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.ay(c,1))+"Txt;\n"
a.a=z
if(b===C.f)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fW:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aq(a,z,"emission")
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
fR:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aq(a,z,"ambient")
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
fU:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aq(a,z,"diffuse")
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
fX:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aq(a,z,"invDiffuse")
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
h4:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aq(a,z,"specular")
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
h_:function(a){var z,y
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
h2:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aq(a,z,"reflect")
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
h3:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aq(a,z,"refract")
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
fV:function(a){var z,y
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
h1:function(a){var z,y
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
h5:function(a){var z,y
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
h8:function(a){var z,y,x
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
h9:function(a){var z,y,x
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
ha:function(a){var z,y,x
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
fY:function(a){var z
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
i:function(a){return this.av}},f1:{"^":"b;a,b,c"},f4:{"^":"b;a,b,c,d,e,f,r,x"},f2:{"^":"b;a,b,c,d,e,f,r"},f5:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f3:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f6:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},eC:{"^":"cL;",
ev:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
d6:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fO(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.v("Error compiling shader '"+H.l(y)+"': "+H.l(x)))}return y},
fI:function(){var z,y,x,w,v,u
z=H.e([],[A.dM])
y=this.a
x=H.D(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.n(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dM(y,v.name,u))}this.f=new A.hc(z)},
fK:function(){var z,y,x,w,v,u
z=H.e([],[A.af])
y=this.a
x=H.D(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.n(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.ho(v.type,v.size,v.name,u))}this.r=new A.jK(z)},
aE:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.N(z,y,b,c)
else return A.dg(z,y,b,a,c)},
eN:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.an(z,y,b,c)
else return A.dg(z,y,b,a,c)},
eO:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ao(z,y,b,c)
else return A.dg(z,y,b,a,c)},
bk:function(a,b){return new P.fg(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
ho:function(a,b,c,d){switch(a){case 5120:return this.aE(b,c,d)
case 5121:return this.aE(b,c,d)
case 5122:return this.aE(b,c,d)
case 5123:return this.aE(b,c,d)
case 5124:return this.aE(b,c,d)
case 5125:return this.aE(b,c,d)
case 5126:return new A.Z(this.a,this.e,c,d)
case 35664:return new A.jF(this.a,this.e,c,d)
case 35665:return new A.K(this.a,this.e,c,d)
case 35666:return new A.jI(this.a,this.e,c,d)
case 35667:return new A.jG(this.a,this.e,c,d)
case 35668:return new A.jH(this.a,this.e,c,d)
case 35669:return new A.jJ(this.a,this.e,c,d)
case 35674:return new A.jM(this.a,this.e,c,d)
case 35675:return new A.dh(this.a,this.e,c,d)
case 35676:return new A.aS(this.a,this.e,c,d)
case 35678:return this.eN(b,c,d)
case 35680:return this.eO(b,c,d)
case 35670:throw H.a(this.bk("BOOL",c))
case 35671:throw H.a(this.bk("BOOL_VEC2",c))
case 35672:throw H.a(this.bk("BOOL_VEC3",c))
case 35673:throw H.a(this.bk("BOOL_VEC4",c))
default:throw H.a(P.v("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}},cf:{"^":"b;a,b",
i:function(a){return this.b}},af:{"^":"b;"},jK:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.k(0,b)
if(z==null)throw H.a(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.K()},
hy:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.C)(z),++w)x+=z[w].i(0)+a
return x},
K:function(){return this.hy("\n")}},N:{"^":"af;a,b,c,d",
i:function(a){return"Uniform1i: "+H.l(this.c)}},jG:{"^":"af;a,b,c,d",
i:function(a){return"Uniform2i: "+H.l(this.c)}},jH:{"^":"af;a,b,c,d",
i:function(a){return"Uniform3i: "+H.l(this.c)}},jJ:{"^":"af;a,b,c,d",
i:function(a){return"Uniform4i: "+H.l(this.c)}},jE:{"^":"af;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.l(this.c)},
p:{
dg:function(a,b,c,d,e){var z=new A.jE(a,b,c,e)
z.f=d
z.e=P.i6(d,0,!1,P.o)
return z}}},Z:{"^":"af;a,b,c,d",
i:function(a){return"Uniform1f: "+H.l(this.c)}},jF:{"^":"af;a,b,c,d",
i:function(a){return"Uniform2f: "+H.l(this.c)}},K:{"^":"af;a,b,c,d",
i:function(a){return"Uniform3f: "+H.l(this.c)}},jI:{"^":"af;a,b,c,d",
i:function(a){return"Uniform4f: "+H.l(this.c)}},jM:{"^":"af;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}},dh:{"^":"af;a,b,c,d",
ai:function(a){var z=new Float32Array(H.bn(H.w(a,"$isd",[P.u],"$asd")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.l(this.c)}},aS:{"^":"af;a,b,c,d",
ai:function(a){var z=new Float32Array(H.bn(H.w(a,"$isd",[P.u],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.l(this.c)}},an:{"^":"af;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.l(this.c)}},ao:{"^":"af;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}}],["","",,F,{"^":"",
fP:function(a,b,c,d){var z
H.h(c,{func:1,ret:-1,args:[F.ap,P.u,P.u]})
z=F.d9()
F.bN(z,b,c,d,a,1,0,0,1)
F.bN(z,b,c,d,a,0,1,0,3)
F.bN(z,b,c,d,a,0,0,1,2)
F.bN(z,b,c,d,a,-1,0,0,0)
F.bN(z,b,c,d,a,0,-1,0,0)
F.bN(z,b,c,d,a,0,0,-1,3)
z.a3()
return z},
cA:function(a){var z,y
z=a.a>0?1:0
if(a.b>0)z+=2
y=a.c
if(typeof y!=="number")return y.bL()
return(y>0?z+4:z)*2},
bN:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.h(c,{func:1,ret:-1,args:[F.ap,P.u,P.u]})
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
z.d=y}l=F.cA(y)
k=F.cA(z.b)
j=F.cc(d,e,new F.m6(z,F.cA(z.c),F.cA(z.d),k,l,c),b)
if(j!=null)a.bD(j)},
ms:function(a,b,c,d,e,f){return F.mu(!1,!1,d,new F.mt(a,f),e)},
mu:function(a,b,c,d,e){var z
H.h(d,{func:1,ret:P.u,args:[P.u,P.u]})
if(e<3)return
if(c<1)return
z=F.cc(c,e,new F.mx(d),null)
if(z==null)return
z.a3()
z.bl()
return z},
mO:function(a,b){var z=F.cc(a,b,new F.mP(),null)
z.d.bG()
z.a3()
z.bl()
return z},
nh:function(a,b,c){var z,y
z={}
z.a=b
z.a=new F.ni()
y=F.fP(a,null,new F.nj(z),c)
y.bl()
return y},
nl:function(a,b,c,d){return F.mv(c,a,d,b,new F.nm())},
mv:function(a,b,c,d,e){var z=F.cc(a,b,new F.mw(H.h(e,{func:1,ret:V.Y,args:[P.u]}),d,b,c),null)
if(z==null)return
z.a3()
z.bl()
return z},
dC:function(a,b,c){var z={}
z.a=b
z.a=new F.mF()
return F.cc(c,a,new F.mG(z),null)},
cc:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.h(c,{func:1,ret:-1,args:[F.ap,P.u,P.u]})
if(a<1)return
if(b<1)return
z=F.d9()
y=H.e([],[F.ap])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.dk(null,null,new V.bX(u,0,0,1),null,null,new V.X(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cm(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.dk(null,null,new V.bX(o,n,m,1),null,null,new V.X(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cm(d))}}z.d.hd(a+1,b+1,y)
return z},
m6:{"^":"m:4;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cA(z.b,b).cA(z.d.cA(z.c,b),c)
a.sW(0,new V.Y(y.a,y.b,y.c))
a.scL(y.u(0,Math.sqrt(y.E(y))))
z=1-b
x=1-c
a.scd(new V.c5(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
mt:{"^":"m:13;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
mx:{"^":"m:4;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.n(v)
y=-y*v
u=x*v
a.sW(0,new V.Y(y,u,w))
u=new V.G(y,u,w)
a.scL(u.u(0,Math.sqrt(u.E(u))))
a.scd(new V.c5(1-c,2+c,-1,-1))}},
mP:{"^":"m:4;",
$3:function(a,b,c){var z,y,x,w
z=c*3.141592653589793
y=Math.sin(z)
x=b*6.283185307179586
w=new V.G(Math.cos(x)*y,Math.cos(z),Math.sin(x)*y)
x=w.u(0,Math.sqrt(w.E(w)))
a.sW(0,new V.Y(x.a,x.b,x.c))}},
ni:{"^":"m:13;",
$2:function(a,b){return 0}},
nj:{"^":"m:4;a",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.n(z)
y=a.f
x=new V.G(y.a,y.b,y.c)
z=x.u(0,Math.sqrt(x.E(x))).j(0,1+z)
a.sW(0,new V.Y(z.a,z.b,z.c))}},
nm:{"^":"m:44;",
$1:function(a){return new V.Y(Math.cos(a),Math.sin(a),0)}},
mw:{"^":"m:4;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dI(y.$1(z),x)
x=J.dI(y.$1(z+3.141592653589793/this.c),x).G(0,w)
x=new V.G(x.a,x.b,x.c)
v=x.u(0,Math.sqrt(x.E(x)))
u=new V.G(1,0,0)
y=v.at(!v.t(0,u)?new V.G(0,0,1):u)
t=y.u(0,Math.sqrt(y.E(y)))
y=t.at(v)
u=y.u(0,Math.sqrt(y.E(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.j(0,y*x)
x=t.j(0,r*x)
r=y.c
q=x.c
if(typeof r!=="number")return r.G()
if(typeof q!=="number")return H.n(q)
a.sW(0,w.w(0,new V.Y(y.a-x.a,y.b-x.b,r-q)))}},
mF:{"^":"m:13;",
$2:function(a,b){return 0}},
mG:{"^":"m:4;a",
$3:function(a,b,c){var z,y,x,w
z=b*2-1
y=c*2-1
a.sW(0,new V.Y(z,y,this.a.a.$2(b,c)))
x=new V.G(z,y,1)
a.scL(x.u(0,Math.sqrt(x.E(x))))
x=1-b
w=1-c
a.scd(new V.c5(b*c,2+x*c,4+b*w,6+x*w))}},
av:{"^":"b;0a,0b,0c,0d,0e",
au:function(){if(!this.gaZ()){C.a.O(this.a.a.d.b,this)
this.a.a.a_()}this.c4()
this.c5()
this.fv()},
fF:function(a){this.a=a
C.a.h(a.d.b,this)},
fG:function(a){this.b=a
C.a.h(a.d.c,this)},
fH:function(a){this.c=a
C.a.h(a.d.d,this)},
c4:function(){var z=this.a
if(z!=null){C.a.O(z.d.b,this)
this.a=null}},
c5:function(){var z=this.b
if(z!=null){C.a.O(z.d.c,this)
this.b=null}},
fv:function(){var z=this.c
if(z!=null){C.a.O(z.d.d,this)
this.c=null}},
gaZ:function(){return this.a==null||this.b==null||this.c==null},
eH:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.G(0,0,0)
if(y!=null)v=v.w(0,y)
if(x!=null)v=v.w(0,x)
if(w!=null)v=v.w(0,w)
if(v.e_())return
return v.u(0,Math.sqrt(v.E(v)))},
eK:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.G(0,y)
z=new V.G(z.a,z.b,z.c)
v=z.u(0,Math.sqrt(z.E(z)))
z=w.G(0,y)
z=new V.G(z.a,z.b,z.c)
z=v.at(z.u(0,Math.sqrt(z.E(z))))
return z.u(0,Math.sqrt(z.E(z)))},
cj:function(){if(this.d!=null)return!0
var z=this.eH()
if(z==null){z=this.eK()
if(z==null)return!1}this.d=z
this.a.a.a_()
return!0},
eG:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.G(0,0,0)
if(y!=null)v=v.w(0,y)
if(x!=null)v=v.w(0,x)
if(w!=null)v=v.w(0,w)
if(v.e_())return
return v.u(0,Math.sqrt(v.E(v)))},
eJ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.q.$2(n,0)){z=r.G(0,u)
z=new V.G(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.E(z)))
if(o.a-p.a<0)m=m.N(0)}else{l=(z-q.b)/n
z=r.G(0,u).j(0,l).w(0,u).G(0,x)
z=new V.G(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.E(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.N(0)}z=this.d
if(z!=null){k=z.u(0,Math.sqrt(z.E(z)))
z=k.at(m)
z=z.u(0,Math.sqrt(z.E(z))).at(k)
m=z.u(0,Math.sqrt(z.E(z)))}return m},
cg:function(){if(this.e!=null)return!0
var z=this.eG()
if(z==null){z=this.eJ()
if(z==null)return!1}this.e=z
this.a.a.a_()
return!0},
ghk:function(a){if(J.O(this.a,this.b))return!0
if(J.O(this.b,this.c))return!0
if(J.O(this.c,this.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
B:function(a){var z,y
if(this.gaZ())return a+"disposed"
z=a+C.b.ab(J.aa(this.a.e),0)+", "+C.b.ab(J.aa(this.b.e),0)+", "+C.b.ab(J.aa(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
K:function(){return this.B("")},
p:{
bZ:function(a,b,c){var z,y,x
z=new F.av()
y=a.a
if(y==null)H.p(P.v("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.p(P.v("May not create a face with vertices attached to different shapes."))
z.fF(a)
z.fG(b)
z.fH(c)
C.a.h(z.a.a.d.b,z)
z.a.a.a_()
return z}}},
hI:{"^":"b;"},
ja:{"^":"hI;",
b3:function(a,b,c){var z,y
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
d_:{"^":"b;0a,0b",
au:function(){if(!this.gaZ()){C.a.O(this.a.a.c.b,this)
this.a.a.a_()}this.c4()
this.c5()},
c4:function(){var z=this.a
if(z!=null){C.a.O(z.c.b,this)
this.a=null}},
c5:function(){var z=this.b
if(z!=null){C.a.O(z.c.c,this)
this.b=null}},
gaZ:function(){return this.a==null||this.b==null},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
B:function(a){if(this.gaZ())return a+"disposed"
return a+C.b.ab(J.aa(this.a.e),0)+", "+C.b.ab(J.aa(this.b.e),0)},
K:function(){return this.B("")}},
hZ:{"^":"b;"},
jD:{"^":"hZ;",
b3:function(a,b,c){var z,y
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
d7:{"^":"b;0a",
au:function(){var z=this.a
if(z!=null){C.a.O(z.a.b.b,this)
this.a.a.a_()}this.fu()},
fu:function(){var z=this.a
if(z!=null){C.a.O(z.b.b,this)
this.a=null}},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
B:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.ab(J.aa(z.e),0)},
K:function(){return this.B("")}},
cs:{"^":"b;0a,0b,0c,0d,0e",
gA:function(){var z=this.e
if(z==null){z=D.M()
this.e=z}return z},
bD:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.v()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){v=z[w]
this.a.h(0,v.hm())}this.a.v()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.w()
s+=y
t=t.c
if(s>=t.length)return H.c(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.d7()
if(r.a==null)H.p(P.v("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.C(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.w()
s+=y
t=t.c
if(s>=t.length)return H.c(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.v()
t=t.e
if(typeof t!=="number")return t.w()
t+=y
s=s.c
if(t>=s.length)return H.c(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.d_()
s=p.a
if(s==null)H.p(P.v("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.p(P.v("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.C(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.C)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.w()
s+=y
t=t.c
if(s>=t.length)return H.c(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.v()
t=t.e
if(typeof t!=="number")return t.w()
t+=y
s=s.c
if(t>=s.length)return H.c(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.v()
s=s.e
if(typeof s!=="number")return s.w()
s+=y
t=t.c
if(s>=t.length)return H.c(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.bZ(p,o,l)}z=this.e
if(!(z==null))z.a6(0)},
a3:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.a3()||!1
if(!this.a.a3())y=!1
z=this.e
if(!(z==null))z.a6(0)
return y},
hf:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=a.a,x=z.length;y>=0;--y){w=this.a.c
if(y>=w.length)return H.c(w,y)
v=w[y]
w=v.y
u=C.e.b_(w.a*(a.b-1))
w=w.b
t=a.c
if(typeof t!=="number")return t.G()
s=C.e.b_(w*(t-1))
w=a.b
u=u>=0?C.d.ah(u,w):w+C.d.ah(u,w)
t=a.c
if(s>=0){if(typeof t!=="number")return H.n(t)
s=C.d.ah(s,t)}else{if(typeof t!=="number")return H.n(t)
s=t+C.d.ah(s,t)}r=(u+s*w)*4
if(r<0||r>=x)return H.c(z,r)
w=z[r]/255
t=r+1
if(t>=x)return H.c(z,t)
t=z[t]/255
q=r+2
if(q>=x)return H.c(z,q)
q=z[q]/255
p=r+3
if(p>=x)return H.c(z,p)
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
if(typeof t!=="number")return t.j()
n=w.a
m=w.b
l=w.c
if(typeof l!=="number")return l.w()
t=new V.Y(n+q*o,m+p*o,l+t*o)
if(!J.O(w,t)){v.f=t
w=v.a
if(w!=null){w=w.e
if(!(w==null))w.C(null)}}}z=this.e
if(!(z==null))z.a6(0)},
iq:function(a){var z,y,x,w,v
z=this.e
if(!(z==null))++z.c
for(z=this.a,y=z.c.length-1,x=a.a;y>=0;--y){w=z.c
if(y>=w.length)return H.c(w,y)
v=w[y]
if((x&$.$get$aH().a)===0)v.f=null
if((x&$.$get$az().a)===0)v.r=null
if((x&$.$get$aG().a)===0)v.x=null
if((x&$.$get$aI().a)===0)v.y=null
if((x&$.$get$aJ().a)===0)v.z=null
if((x&$.$get$dm().a)===0)v.Q=null
if((x&$.$get$b0().a)===0)v.ch=0
if((x&$.$get$aF().a)===0)v.cx=null}z=this.e
if(!(z==null))z.a6(0)},
ip:function(a,b){var z,y,x,w
z=this.e
if(!(z==null))++z.c
for(z=this.d,y=z.b.length-1;y>=0;--y){x=z.b
if(y>=x.length)return H.c(x,y)
w=x[y]
w.d=null}z=this.e
if(!(z==null))z.a6(0)},
io:function(a){return this.ip(!0,a)},
eS:function(a,b,c,d,e){var z,y,x
H.w(d,"$isd",[F.ap],"$asd")
H.w(e,"$isd",[P.o],"$asd")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.c(y,z)
x=y[z]
if(a.b3(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
hM:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.ap],x=[P.o];y>=0;--y){w=this.a.c
if(y>=w.length)return H.c(w,y)
v=w[y]
u=H.e([],z)
t=H.e([],x)
if(this.eS(a,v,y,u,t))b.bD(u)}this.a.v()
this.c.bG()
this.d.bG()
this.b.i4()
this.c.cH(new F.jD())
this.d.cH(new F.ja())
z=this.e
if(!(z==null))z.a6(0)},
he:function(a){this.hM(new F.ke(),new F.iv())},
bl:function(){return this.he(null)},
hi:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aH()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$az().a)!==0)++w
if((x&$.$get$aG().a)!==0)++w
if((x&$.$get$aI().a)!==0)++w
if((x&$.$get$aJ().a)!==0)++w
if((x&$.$get$bH().a)!==0)++w
if((x&$.$get$bI().a)!==0)++w
if((x&$.$get$b0().a)!==0)++w
if((x&$.$get$aF().a)!==0)++w
v=b.gcT(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.u
t=H.e(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.e(y,[Z.dR])
for(r=0,q=0;q<w;++q){p=b.hg(q)
o=p.gcT(p)
C.a.m(s,q,new Z.dR(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.c(y,n)
m=y[n].hH(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}H.w(t,"$isd",[x],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bn(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dS(new Z.fd(34962,j),s,b)
i.b=H.e([],[Z.cj])
if(this.b.b.length!==0){x=P.o
h=H.e([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.v()
C.a.h(h,g.e)}f=Z.dn(y,34963,H.w(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cj(0,h.length,f))}if(this.c.b.length!==0){x=P.o
h=H.e([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.v()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.c(g,q)
g=g[q].b
g.a.a.v()
C.a.h(h,g.e)}f=Z.dn(y,34963,H.w(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cj(1,h.length,f))}if(this.d.b.length!==0){x=P.o
h=H.e([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.v()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.c(g,q)
g=g[q].b
g.a.a.v()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.c(g,q)
g=g[q].c
g.a.a.v()
C.a.h(h,g.e)}f=Z.dn(y,34963,H.w(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cj(4,h.length,f))}return i},
i:function(a){var z=H.e([],[P.i])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.B("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.B("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.B("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.B("   "))}return C.a.D(z,"\n")},
a5:function(a){var z=this.e
if(!(z==null))z.C(a)},
a_:function(){return this.a5(null)},
p:{
d9:function(){var z,y
z=new F.cs()
y=new F.k9(z)
y.b=!1
y.c=H.e([],[F.ap])
z.a=y
y=new F.j5(z)
y.b=H.e([],[F.d7])
z.b=y
y=new F.j4(z)
y.b=H.e([],[F.d_])
z.c=y
y=new F.j3(z)
y.b=H.e([],[F.av])
z.d=y
z.e=null
return z}}},
j3:{"^":"b;a,0b",
hd:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isd",[F.ap],"$asd")
z=H.e([],[F.av])
for(y=b,x=0,w=!1,v=1;v<a;++v,++x,++y){for(u=w,t=1;t<b;++t,y=p){s=c.length
if(x<0||x>=s)return H.c(c,x)
r=c[x];++x
if(x>=s)return H.c(c,x)
q=c[x]
p=y+1
if(p<0||p>=s)return H.c(c,p)
o=c[p]
if(y<0||y>=s)return H.c(c,y)
n=c[y]
s=this.a.a
if(u){s.h(0,r)
this.a.a.h(0,q)
this.a.a.h(0,o)
C.a.h(z,F.bZ(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bZ(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bZ(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bZ(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
cH:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.c(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.k(0,w)
for(u=w-1;u>=0;--u){t=x.d.k(0,u)
if(a.b3(0,v,t)){v.au()
break}}}}},
bG:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.c(y,z)
x=y[z]
y=x.ghk(x)
if(y)x.au()}},
a3:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.C)(z),++w)if(!z[w].cj())x=!1
return x},
ci:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.C)(z),++w)if(!z[w].cg())x=!1
return x},
i:function(a){return this.K()},
B:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].B(a))
return C.a.D(z,"\n")},
K:function(){return this.B("")}},
j4:{"^":"b;a,0b",
gl:function(a){return this.b.length},
cH:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.c(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.k(0,w)
for(u=w-1;u>=0;--u){t=x.c.k(0,u)
if(a.b3(0,v,t)){v.au()
break}}}}},
bG:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.c(y,z)
x=y[z]
y=J.O(x.a,x.b)
if(y)x.au()}},
i:function(a){return this.K()},
B:function(a){var z,y,x,w
z=H.e([],[P.i])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.c(w,x)
C.a.h(z,w[x].B(a+(""+x+". ")))}return C.a.D(z,"\n")},
K:function(){return this.B("")}},
j5:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i4:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.c(y,z)
y=y[z]
if(y.a.b.b.length>1)y.au()}},
i:function(a){return this.K()},
B:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].B(a))
return C.a.D(z,"\n")},
K:function(){return this.B("")}},
ap:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cm:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.dk(this.cx,x,u,z,y,w,v,a,t)},
hm:function(){return this.cm(null)},
sW:function(a,b){var z
if(!J.O(this.f,b)){this.f=b
z=this.a
if(z!=null)z.a_()}},
scL:function(a){var z
if(!J.O(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a_()}},
scd:function(a){var z
if(!J.O(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.a_()}},
hH:function(a){var z,y
z=J.H(a)
if(z.t(a,$.$get$aH())){z=this.f
y=[P.u]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$az())){z=this.r
y=[P.u]
if(z==null)return H.e([0,1,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aG())){z=this.x
y=[P.u]
if(z==null)return H.e([0,0,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aI())){z=this.y
y=[P.u]
if(z==null)return H.e([0,0],y)
else return H.e([z.a,z.b],y)}else if(z.t(a,$.$get$aJ())){z=this.z
y=[P.u]
if(z==null)return H.e([0,0,0],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bH())){z=this.Q
y=[P.u]
if(z==null)return H.e([1,1,1],y)
else return H.e([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bI())){z=this.Q
y=[P.u]
if(z==null)return H.e([1,1,1,1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else if(z.t(a,$.$get$b0()))return H.e([this.ch],[P.u])
else if(z.t(a,$.$get$aF())){z=this.cx
y=[P.u]
if(z==null)return H.e([-1,-1,-1,-1],y)
else return H.e([z.a,z.b,z.c,z.d],y)}else return H.e([],[P.u])},
cj:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.I(0,new F.kj(z))
z=z.a
this.r=z.u(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.a_()
z=this.a.e
if(!(z==null))z.a6(0)}return!0},
cg:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.I(0,new F.ki(z))
z=z.a
this.x=z.u(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.a_()
z=this.a.e
if(!(z==null))z.a6(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
B:function(a){var z,y,x
z=H.e([],[P.i])
C.a.h(z,C.b.ab(J.aa(this.e),0))
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
C.a.h(z,V.R(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.D(z,", ")
return a+"{"+x+"}"},
K:function(){return this.B("")},
p:{
dk:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ap()
y=new F.kh(z)
y.b=H.e([],[F.d7])
z.b=y
y=new F.kd(z)
x=[F.d_]
y.b=H.e([],x)
y.c=H.e([],x)
z.c=y
y=new F.ka(z)
x=[F.av]
y.b=H.e([],x)
y.c=H.e([],x)
y.d=H.e([],x)
z.d=y
h=$.$get$dl()
z.e=0
y=$.$get$aH()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$az().a)!==0?e:null
z.x=(x&$.$get$aG().a)!==0?b:null
z.y=(x&$.$get$aI().a)!==0?f:null
z.z=(x&$.$get$aJ().a)!==0?g:null
z.Q=(x&$.$get$dm().a)!==0?c:null
z.ch=(x&$.$get$b0().a)!==0?i:0
z.cx=(x&$.$get$aF().a)!==0?a:null
return z}}},
kj:{"^":"m:6;a",
$1:function(a){var z,y
H.f(a,"$isav")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.w(0,z)}}},
ki:{"^":"m:6;a",
$1:function(a){var z,y
H.f(a,"$isav")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.w(0,z)}}},
k9:{"^":"b;a,0b,0c",
v:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.c(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.v("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a_()
return!0},
gl:function(a){return this.c.length},
a3:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)z[x].cj()
return!0},
ci:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)z[x].cg()
return!0},
hj:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
if(typeof s!=="number")return s.j()
s=v.u(0,Math.sqrt(u*u+t*t+s*s))
if(!J.O(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.C(null)}}}}return!0},
i:function(a){return this.K()},
B:function(a){var z,y,x,w
this.v()
z=H.e([],[P.i])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].B(a))
return C.a.D(z,"\n")},
K:function(){return this.B("")}},
ka:{"^":"b;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.c(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.c(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.c(z,b)
return z[b]},
I:function(a,b){H.h(b,{func:1,ret:-1,args:[F.av]})
C.a.I(this.b,b)
C.a.I(this.c,new F.kb(this,b))
C.a.I(this.d,new F.kc(this,b))},
i:function(a){return this.K()},
B:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].B(a))
return C.a.D(z,"\n")},
K:function(){return this.B("")}},
kb:{"^":"m:6;a,b",
$1:function(a){H.f(a,"$isav")
if(!J.O(a.a,this.a))this.b.$1(a)}},
kc:{"^":"m:6;a,b",
$1:function(a){var z
H.f(a,"$isav")
z=this.a
if(!J.O(a.a,z)&&!J.O(a.b,z))this.b.$1(a)}},
kd:{"^":"b;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.c(z,x)
return z[x]}else{if(b<0)return H.c(z,b)
return z[b]}},
i:function(a){return this.K()},
B:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].B(a))
return C.a.D(z,"\n")},
K:function(){return this.B("")}},
kf:{"^":"b;"},
ke:{"^":"kf;",
b3:function(a,b,c){return J.O(b.f,c.f)}},
kg:{"^":"b;"},
iv:{"^":"kg;",
bD:function(a){var z,y,x,w,v,u,t,s,r
H.w(a,"$isd",[F.ap],"$asd")
z=new V.G(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null){v=w.a
u=w.b
t=z.c
w=w.c
if(typeof t!=="number")return t.w()
if(typeof w!=="number")return H.n(w)
z=new V.G(z.a+v,z.b+u,t+w)}}z=z.u(0,Math.sqrt(z.E(z)))
for(y=a.length,w=z.a,v=z.b,v=w*w+v*v,w=z.c,x=0;x<a.length;a.length===y||(0,H.C)(a),++x){s=a[x]
if(typeof w!=="number")return w.j()
r=z.u(0,Math.sqrt(v+w*w))
if(!J.O(s.r,r)){s.r=r
u=s.a
if(u!=null){u=u.e
if(!(u==null))u.C(null)}}}return}},
kh:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.K()},
B:function(a){var z,y,x,w
z=H.e([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].B(a))
return C.a.D(z,"\n")},
K:function(){return this.B("")}}}],["","",,O,{"^":"",ie:{"^":"dc;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gA:function(){var z=this.dy
if(z==null){z=D.M()
this.dy=z}return z},
af:[function(a){var z
H.f(a,"$ist")
z=this.dy
if(!(z==null))z.C(a)},function(){return this.af(null)},"iE","$1","$0","gf5",0,2,1],
fB:[function(a){H.f(a,"$ist")
this.a=null
this.af(a)},function(){return this.fB(null)},"iZ","$1","$0","gfA",0,2,1],
iB:[function(a,b){var z=V.aw
z=new D.ck(a,H.w(b,"$isk",[z],"$ask"),this,[z])
z.b=!0
this.af(z)},"$2","gf2",8,0,20],
iC:[function(a,b){var z=V.aw
z=new D.cl(a,H.w(b,"$isk",[z],"$ask"),this,[z])
z.b=!0
this.af(z)},"$2","gf3",8,0,20],
d3:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
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
h="MaterialLight_"+C.d.i(q.a)+C.d.i(p.a)+C.d.i(o.a)+C.d.i(n.a)+C.d.i(m.a)+C.d.i(l.a)+C.d.i(k.a)+C.d.i(j.a)+C.d.i(i.a)+"_"
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
a6=$.$get$aH()
if(c){z=$.$get$az()
a6=new Z.b_(a6.a|z.a)}if(b){z=$.$get$aG()
a6=new Z.b_(a6.a|z.a)}if(a){z=$.$get$aI()
a6=new Z.b_(a6.a|z.a)}if(a0){z=$.$get$aJ()
a6=new Z.b_(a6.a|z.a)}if(a2){z=$.$get$aF()
a6=new Z.b_(a6.a|z.a)}return new A.ik(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
U:function(a,b){H.w(a,"$isd",[T.dd],"$asd")},
an:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.au(z,z.length,0,[H.y(z,0)]);z.F();){y=z.d
x=new V.G(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cM(x)}}},
i6:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.d3()
y=a.fr.k(0,z.av)
if(y==null){y=A.ig(z,a.a)
x=y.b
if(x.length===0)H.p(P.v("May not cache a shader with no name."))
if(a.fr.bp(0,x))H.p(P.v('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.m(0,x,y)}this.a=y
b.e=null
z=y}w=z.x
v=w.aM
z=b.e
if(!(z instanceof Z.dS)){b.e=null
z=null}if(z==null||!z.d.t(0,v)){z=w.r1
if(z)b.d.a3()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.d.ci()
t.a.ci()
t=t.e
if(!(t==null))t.a6(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.c
s.a.hj()
s=s.e
if(!(s==null))s.a6(0)}q=b.d.hi(new Z.kk(a.a),v)
q.aN($.$get$aH()).e=this.a.y.c
if(z)q.aN($.$get$az()).e=this.a.Q.c
if(u)q.aN($.$get$aG()).e=this.a.z.c
if(w.rx)q.aN($.$get$aI()).e=this.a.ch.c
if(t)q.aN($.$get$aJ()).e=this.a.cx.c
if(w.x1)q.aN($.$get$aF()).e=this.a.cy.c
b.e=q}z=T.dd
p=H.e([],[z])
u=this.a
a.a.useProgram(u.e)
u.f.ht()
if(w.fx){u=this.a
t=a.dx
t=t.gX(t)
u=u.db
u.toString
u.ai(t.ad(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gX(t)
s=a.dx
s=t.j(0,s.gX(s))
a.cx=s
t=s}u=u.dx
u.toString
u.ai(t.ad(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.gi2()
s=a.dx
s=t.j(0,s.gX(s))
a.ch=s
t=s}u=u.fr
u.toString
u.ai(t.ad(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.go
u.toString
u.ai(t.ad(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.id
u.toString
u.ai(t.ad(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k1
u.toString
u.ai(C.t.ad(t,!0))}if(w.aL>0){o=this.e.a.length
u=this.a.k2
u.a.uniform1i(u.d,o)
for(u=[P.u],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.c(s,n)
s=s[n]
t.toString
H.f(s,"$isaw")
t=t.k3
if(n>=t.length)return H.c(t,n)
t=t[n]
m=new Float32Array(H.bn(H.w(s.ad(0,!0),"$isd",u,"$asd")))
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
case C.f:this.U(p,this.f.d)
u=this.a
t=this.f.d
u.ag(u.r1,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.U(p,this.f.e)
u=this.a
t=this.f.e
u.a9(u.r2,u.rx,t)
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
case C.f:this.U(p,this.r.d)
u=this.a
t=this.r.d
u.ag(u.x1,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.U(p,this.r.e)
u=this.a
t=this.r.e
u.a9(u.x2,u.y1,t)
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
case C.f:this.U(p,this.x.d)
u=this.a
t=this.x.d
u.ag(u.aL,u.aM,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.U(p,this.x.e)
u=this.a
t=this.x.e
u.a9(u.av,u.aM,t)
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
u=u.bq
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.f:this.U(p,this.y.d)
u=this.a
t=this.y.d
u.ag(u.du,u.br,t)
t=this.a
u=this.y.f
t=t.bq
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.h:this.U(p,this.y.e)
u=this.a
t=this.y.e
u.a9(u.dv,u.br,t)
t=this.a
u=this.y.f
t=t.bq
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.c:break
case C.i:u=this.a
t=this.z.f
u=u.bs
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.bu
t.a.uniform1f(t.d,r)
break
case C.f:this.U(p,this.z.d)
u=this.a
t=this.z.d
u.ag(u.dw,u.bt,t)
t=this.a
u=this.z.f
t=t.bs
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bu
u.a.uniform1f(u.d,r)
break
case C.h:this.U(p,this.z.e)
u=this.a
t=this.z.e
u.a9(u.dz,u.bt,t)
t=this.a
u=this.z.f
t=t.bs
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bu
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.dK
u.a.uniform1i(u.d,o)
u=a.db
l=u.gX(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
s=this.a.cp
if(k>=s.length)return H.c(s,k)
h=s[k]
s=l.cM(i.a)
r=s.a
g=s.b
f=s.c
if(typeof f!=="number")return f.j()
f=s.u(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.dL
u.a.uniform1i(u.d,o)
u=a.db
l=u.gX(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
s=this.a.cq
if(k>=s.length)return H.c(s,k)
h=s[k]
s=i.gb7(i)
r=h.b
g=s.gcO(s)
f=s.gcP(s)
s=s.gcQ(s)
r.a.uniform3f(r.d,g,f,s)
s=l.be(i.gb7(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.gak(i)
f=h.d
g=s.gbF()
r=s.gbf()
s=s.gbn()
f.a.uniform3f(f.d,g,r,s)
s=i.gca()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gcb()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gcc()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.dM
u.a.uniform1i(u.d,o)
u=a.db
l=u.gX(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
s=this.a.cr
if(k>=s.length)return H.c(s,k)
h=s[k]
s=i.gb7(i)
r=h.b
g=s.gcO(s)
f=s.gcP(s)
s=s.gcQ(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gco(i).j5()
f=h.c
g=s.gaI(s)
r=s.gaJ(s)
s=s.gaK()
f.a.uniform3f(f.d,g,r,s)
s=l.be(i.gb7(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gak(i)
r=h.e
g=s.gbF()
f=s.gbf()
s=s.gbn()
r.a.uniform3f(r.d,g,f,s)
s=i.gj3()
f=h.f
f.a.uniform1f(f.d,s)
s=i.gj2()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gca()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gcb()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gcc()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.dN
u.a.uniform1i(u.d,o)
u=a.db
l=u.gX(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
r=this.a.cs
if(k>=r.length)return H.c(r,k)
h=r[k]
r=i.gba()
H.w(p,"$isd",s,"$asd")
if(!C.a.bo(p,r)){r.sb0(0,p.length)
C.a.h(p,r)}r=i.gco(i)
g=h.d
f=r.gaI(r)
e=r.gaJ(r)
r=r.gaK()
g.a.uniform3f(g.d,f,e,r)
r=i.gbH()
e=h.b
f=r.gaI(r)
g=r.gaJ(r)
r=r.gaK()
e.a.uniform3f(e.d,f,g,r)
r=i.gb9(i)
g=h.c
f=r.gaI(r)
e=r.gaJ(r)
r=r.gaK()
g.a.uniform3f(g.d,f,e,r)
r=l.cM(i.gco(i))
e=r.a
f=r.b
g=r.c
if(typeof g!=="number")return g.j()
g=r.u(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.gak(i)
f=h.f
e=g.gbF()
r=g.gbf()
g=g.gbn()
f.a.uniform3f(f.d,e,r,g)
g=i.gba()
r=g.gb1(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gb1(g)
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gb0(g))
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.dO
u.a.uniform1i(u.d,o)
u=a.db
l=u.gX(u)
for(u=this.dx.y,t=u.length,s=[P.u],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
g=this.a.ct
if(k>=g.length)return H.c(g,k)
h=g[k]
g=i.gba()
H.w(p,"$isd",r,"$asd")
if(!C.a.bo(p,g)){g.sb0(0,p.length)
C.a.h(p,g)}d=l.j(0,i.gX(i))
g=i.gX(i).be(new V.Y(0,0,0))
f=h.b
e=g.gcO(g)
c=g.gcP(g)
g=g.gcQ(g)
f.a.uniform3f(f.d,e,c,g)
g=d.be(new V.Y(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.dZ(0)
c=h.d
m=new Float32Array(H.bn(H.w(new V.cn(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).ad(0,!0),"$isd",s,"$asd")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.gak(i)
g=h.e
e=c.gbF()
f=c.gbf()
c=c.gbn()
g.a.uniform3f(g.d,e,f,c)
c=i.gba()
g=c.gb1(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gb1(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gb0(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gca()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gcb()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gcc()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.dP
u.a.uniform1i(u.d,o)
u=a.db
l=u.gX(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.C)(u),++j){i=u[j]
s=this.a.cu
if(k>=s.length)return H.c(s,k)
h=s[k]
s=i.gba()
H.w(p,"$isd",z,"$asd")
if(!C.a.bo(p,s)){s.sb0(0,p.length)
C.a.h(p,s)}s=i.gb7(i)
r=h.b
g=s.gcO(s)
f=s.gcP(s)
s=s.gcQ(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gco(i)
f=h.c
g=s.gaI(s)
r=s.gaJ(s)
s=s.gaK()
f.a.uniform3f(f.d,g,r,s)
s=i.gbH()
r=h.d
g=s.gaI(s)
f=s.gaJ(s)
s=s.gaK()
r.a.uniform3f(r.d,g,f,s)
s=i.gb9(i)
f=h.e
g=s.gaI(s)
r=s.gaJ(s)
s=s.gaK()
f.a.uniform3f(f.d,g,r,s)
s=l.be(i.gb7(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gba()
r=s.gb1(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gb1(s)
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gb0(s))
s=h.x
s.a.uniform1i(s.d,0)}s=i.gak(i)
r=h.y
g=s.gbF()
f=s.gbf()
s=s.gbn()
r.a.uniform3f(r.d,g,f,s)
s=i.gjc()
f=h.z
f.a.uniform1f(f.d,s)
s=i.gjd()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gca()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gcb()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gcc()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.c:break
case C.i:break
case C.f:this.U(p,this.Q.d)
z=this.a
u=this.Q.d
z.ag(z.dA,z.bv,u)
break
case C.h:this.U(p,this.Q.e)
z=this.a
u=this.Q.e
z.a9(z.dB,z.bv,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gX(u).dZ(0)
a.Q=u}z=z.fy
z.toString
z.ai(u.ad(0,!0))}if(w.dy){this.U(p,this.ch)
z=this.a
u=this.ch
z.a9(z.dC,z.dD,u)
switch(w.r){case C.c:break
case C.i:z=this.a
u=this.cx.f
z=z.bw
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.f:this.U(p,this.cx.d)
z=this.a
u=this.cx.d
z.ag(z.dE,z.bx,u)
u=this.a
z=this.cx.f
u=u.bw
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.h:this.U(p,this.cx.e)
z=this.a
u=this.cx.e
z.a9(z.dF,z.bx,u)
u=this.a
z=this.cx.f
u=u.bw
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.c:break
case C.i:z=this.a
u=this.cy.f
z=z.bz
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.by
u.a.uniform1f(u.d,s)
break
case C.f:this.U(p,this.cy.d)
z=this.a
u=this.cy.d
z.ag(z.dG,z.bA,u)
u=this.a
z=this.cy.f
u=u.bz
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.by
z.a.uniform1f(z.d,s)
break
case C.h:this.U(p,this.cy.e)
z=this.a
u=this.cy.e
z.a9(z.dH,z.bA,u)
u=this.a
z=this.cy.f
u=u.bz
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.by
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.c
if(u){switch(z){case C.c:break
case C.i:z=this.a
t=this.db.f
z=z.bB
z.a.uniform1f(z.d,t)
break
case C.f:this.U(p,this.db.d)
z=this.a
t=this.db.d
z.ag(z.dI,z.bC,t)
t=this.a
z=this.db.f
t=t.bB
t.a.uniform1f(t.d,z)
break
case C.h:this.U(p,this.db.e)
z=this.a
t=this.db.e
z.a9(z.dJ,z.bC,t)
t=this.a
z=this.db.f
t=t.bB
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n)p[n].bm(a)
z=b.e
z.bm(a)
z.aP(a)
z.ed(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n)p[n].ed(a)
z=this.a
z.toString
a.a.useProgram(null)
z.f.hr()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.d3().av}},ii:{"^":"d1;0f,a,b,0c,0d,0e"},d1:{"^":"b;",
bi:["ep",function(){}]},ij:{"^":"d1;a,b,0c,0d,0e"},b9:{"^":"d1;0f,a,b,0c,0d,0e",
dg:function(a){var z,y
if(!J.O(this.f,a)){z=this.f
this.f=a
y=new D.Q(this.b+".color",z,a,this,[V.a4])
y.b=!0
this.a.af(y)}},
bi:["bO",function(){this.ep()
this.dg(new V.a4(1,1,1))}],
sak:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.bi()
z=this.a
z.a=null
z.af(null)}this.dg(b)}},il:{"^":"b9;0ch,0f,a,b,0c,0d,0e",
fE:function(a){var z,y
z=this.ch
if(!$.q.$2(z,a)){y=this.ch
this.ch=a
z=new D.Q(this.b+".refraction",y,a,this,[P.u])
z.b=!0
this.a.af(z)}},
bi:function(){this.bO()
this.fE(1)}},im:{"^":"b9;0ch,0f,a,b,0c,0d,0e",
c6:function(a){var z,y
z=this.ch
if(!$.q.$2(z,a)){y=this.ch
this.ch=a
z=new D.Q(this.b+".shininess",y,a,this,[P.u])
z.b=!0
this.a.af(z)}},
bi:function(){this.bO()
this.c6(100)}},dc:{"^":"b;"}}],["","",,T,{"^":"",dd:{"^":"cL;"},jj:{"^":"dd;"},jn:{"^":"jj;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gA:function(){var z=this.y
if(z==null){z=D.M()
this.y=z}return z}},jo:{"^":"b;a,0b,0c,0d,0e",
hK:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
z.bindTexture(3553,y)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
z.bindTexture(3553,null);++this.d
x=W.ec(null,a,null)
w=new T.jn()
w.a=0
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
z=W.ab
W.a_(x,"load",H.h(new T.jp(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
hJ:function(a){return this.hK(a,!1,!1,!1,!1)},
fC:function(a,b,c){var z,y,x,w
b=V.dG(b,2)
z=V.dG(a.width,2)
y=V.dG(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cQ(null,null)
x.width=z
x.height=y
w=H.f(C.l.eh(x,"2d"),"$isdV")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.mr(w.getImageData(0,0,x.width,x.height))}}},jp:{"^":"m:14;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.fC(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.X.ig(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.hs()}++x.e}},jq:{"^":"b;a,b,c"}}],["","",,V,{"^":"",hb:{"^":"b;",
b2:function(a,b){return!0},
i:function(a){return"all"},
$isc3:1},c3:{"^":"b;"},eq:{"^":"b;",
b2:["eo",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)if(z[x].b2(0,b))return!0
return!1}],
i:["cU",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.C)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isc3:1},bD:{"^":"eq;0a",
b2:function(a,b){return!this.eo(0,b)},
i:function(a){return"!["+this.cU(0)+"]"}},j1:{"^":"b;0a",
eu:function(a){var z,y
if(a.a.length<=0)throw H.a(P.v("May not create a SetMatcher with zero characters."))
z=new H.aY(0,0,[P.o,P.ah])
for(y=new H.en(a,a.gl(a),0,[H.aA(a,"x",0)]);y.F();)z.m(0,y.d,!0)
this.a=z},
b2:function(a,b){return this.a.bp(0,b)},
i:function(a){var z=this.a
return P.c6(z.gam(z),0,null)},
$isc3:1,
p:{
a8:function(a){var z=new V.j1()
z.eu(a)
return z}}},eE:{"^":"b;a,b,0c,0d",
ghN:function(a){return this.b},
D:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eQ(this.a.M(0,b))
w.a=H.e([],[V.c3])
w.c=!1
C.a.h(this.c,w)
return w},
hv:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
if(w.b2(0,a))return w}return},
i:function(a){return this.b}},eN:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.h1(this.b,"\n","\\n")
y=H.h1(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eO:{"^":"b;a,b,0c",
i:function(a){return this.b}},jy:{"^":"b;0a,0b,0c",
M:function(a,b){var z=this.a.k(0,b)
if(z==null){z=new V.eE(this,b)
z.c=H.e([],[V.eQ])
this.a.m(0,b,z)}return z},
bc:function(a){var z,y
z=this.b.k(0,a)
if(z==null){z=new V.eO(this,a)
y=P.i
z.c=new H.aY(0,0,[y,y])
this.b.m(0,a,z)}return z},
im:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.e([],[V.eN])
y=this.c
x=[P.o]
w=H.e([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.H(a,t)
r=y.hv(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.c6(w,0,null)
throw H.a(P.v("Untokenizable string [state: "+y.ghN(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.e([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.c6(w,0,null)
p=y.d
o=p.c.k(0,q)
u=new V.eN(o==null?p.b:o,q,t)}++t}}}},eQ:{"^":"eq;b,0c,0a",
i:function(a){return this.b.b+": "+this.cU(0)}}}],["","",,X,{"^":"",dU:{"^":"b;",$isaQ:1},hN:{"^":"eI;0a,0b,0c,0d,0e,0f,0r,0x",
gA:function(){var z=this.x
if(z==null){z=D.M()
this.x=z}return z}},iy:{"^":"b;0a,0b,0c,0d,0e",
gA:function(){var z=this.e
if(z==null){z=D.M()
this.e=z}return z},
aT:[function(a){var z
H.f(a,"$ist")
z=this.e
if(!(z==null))z.C(a)},function(){return this.aT(null)},"iu","$1","$0","gcW",0,2,1],
sb4:function(a){var z,y,x
if(!J.O(this.a,a)){z=this.a
if(z!=null){z=z.gA()
z.toString
y=H.h(this.gcW(),{func:1,ret:-1,args:[D.t]})
C.a.O(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gA()
z.toString
y=H.h(this.gcW(),{func:1,ret:-1,args:[D.t]})
C.a.h(z.a,y)}z=new D.Q("mover",x,this.a,this,[U.ae])
z.b=!0
this.aT(z)}},
$isaQ:1,
$isdU:1},eI:{"^":"b;"}}],["","",,V,{"^":"",
nf:function(a){P.jx(C.G,new V.ng(a))},
ng:{"^":"m:48;a",
$1:function(a){H.f(a,"$isbj")
P.dH(C.e.ec(this.a.ghz(),2)+" fps")}},
iM:{"^":"b;a,b,0c",
c9:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.h(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.cv().gb8().k(0,H.l(z))
if(y==null)if(d){c.$0()
this.aW(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.bu(this.c).h(0,v)
t=W.hP("radio")
t.checked=x
t.name=z
z=W.ab
W.a_(t,"change",H.h(new V.iN(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.bu(this.c).h(0,w.createElement("br"))},
Y:function(a,b,c){return this.c9(a,b,c,!1)},
aW:function(a){var z,y,x,w,v
z=P.cv()
y=P.i
x=P.em(z.gb8(),y,y)
x.m(0,this.a,a)
w=z.cI(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.fr([],[]).bI(""),"",v)},
p:{
ez:function(a,b){var z,y
z=new V.iM(a,!0)
y=document.getElementById(a)
z.c=y
if(y==null)H.p("Failed to find "+a+" for RadioGroup")
return z}}},
iN:{"^":"m:14;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.aW(this.d)}}},
j6:{"^":"b;0a,0b",
ew:function(a,b){var z,y,x,w,v,u,t
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
W.a_(z,"scroll",H.h(new V.j9(x),{func:1,ret:-1,args:[t]}),!1,t)},
dn:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$isd",[P.i],"$asd")
this.fJ()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.im(C.a.hF(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v){u=x[v]
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
if(H.h0(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.c(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cz(C.S,s,C.k,!1)
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
hc:function(a){var z,y,x,w,v,u,t
H.w(a,"$isd",[P.i],"$asd")
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
x=H.f(w.insertCell(-1),"$isdb").style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
for(v=0;v<3;++v){u=z.createElement("div")
u.id=a[v]
x=u.style
x.textAlign="left"
x=u.style
x.verticalAlign="top"
t=H.f(w.insertCell(-1),"$isdb")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
fJ:function(){var z,y,x,w
if(this.b!=null)return
z=new V.jy()
y=P.i
z.a=new H.aY(0,0,[y,V.eE])
z.b=new H.aY(0,0,[y,V.eO])
z.c=z.M(0,"Start")
y=z.M(0,"Start").D(0,"Bold")
x=V.a8(new H.a3("*"))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"Bold").D(0,"Bold")
x=new V.bD()
w=[V.c3]
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.a8(new H.a3("*"))
C.a.h(x.a,y)
y=z.M(0,"Bold").D(0,"BoldEnd")
x=V.a8(new H.a3("*"))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"Start").D(0,"Italic")
x=V.a8(new H.a3("_"))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"Italic").D(0,"Italic")
x=new V.bD()
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.a8(new H.a3("_"))
C.a.h(x.a,y)
y=z.M(0,"Italic").D(0,"ItalicEnd")
x=V.a8(new H.a3("_"))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"Start").D(0,"Code")
x=V.a8(new H.a3("`"))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"Code").D(0,"Code")
x=new V.bD()
x.a=H.e([],w)
C.a.h(y.a,x)
y=V.a8(new H.a3("`"))
C.a.h(x.a,y)
y=z.M(0,"Code").D(0,"CodeEnd")
x=V.a8(new H.a3("`"))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"Start").D(0,"LinkHead")
x=V.a8(new H.a3("["))
C.a.h(y.a,x)
y.c=!0
y=z.M(0,"LinkHead").D(0,"LinkTail")
x=V.a8(new H.a3("|"))
C.a.h(y.a,x)
x=z.M(0,"LinkHead").D(0,"LinkEnd")
y=V.a8(new H.a3("]"))
C.a.h(x.a,y)
x.c=!0
x=z.M(0,"LinkHead").D(0,"LinkHead")
y=new V.bD()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.a8(new H.a3("|]"))
C.a.h(y.a,x)
x=z.M(0,"LinkTail").D(0,"LinkEnd")
y=V.a8(new H.a3("]"))
C.a.h(x.a,y)
x.c=!0
x=z.M(0,"LinkTail").D(0,"LinkTail")
y=new V.bD()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.a8(new H.a3("|]"))
C.a.h(y.a,x)
C.a.h(z.M(0,"Start").D(0,"Other").a,new V.hb())
x=z.M(0,"Other").D(0,"Other")
y=new V.bD()
y.a=H.e([],w)
C.a.h(x.a,y)
x=V.a8(new H.a3("*_`["))
C.a.h(y.a,x)
x=z.M(0,"BoldEnd")
x.d=x.a.bc("Bold")
x=z.M(0,"ItalicEnd")
x.d=x.a.bc("Italic")
x=z.M(0,"CodeEnd")
x.d=x.a.bc("Code")
x=z.M(0,"LinkEnd")
x.d=x.a.bc("Link")
x=z.M(0,"Other")
x.d=x.a.bc("Other")
this.b=z},
p:{
j7:function(a,b){var z=new V.j6()
z.ew(a,!0)
return z}}},
j9:{"^":"m:14;a",
$1:function(a){P.eL(C.q,new V.j8(this.a))}},
j8:{"^":"m:0;a",
$0:function(){var z,y,x
z=C.e.ac(document.documentElement.scrollTop)
y=this.a.style
x=H.l(-0.01*z)+"px"
y.top=x}},
jk:{"^":"b;a,b,0c,d",
Y:function(a,b,c){var z,y,x,w,v,u
z=W.ec(null,null,null)
z.src=b
z.width=64
z.height=64
y=z.style
y.border="solid 2px white"
y=J.bu(this.c)
x=y.gl(y)
y=W.ad
W.a_(z,"click",H.h(new V.jm(this,z,b,x),{func:1,ret:-1,args:[y]}),!1,y)
J.bu(this.c).h(0,z)
J.bu(this.c).h(0,document.createElement("br"))
w=P.cv().gb8().k(0,H.l(this.a))
if(w==null){this.aW(x)
v=c}else{u=P.bS(w,null,null)
v=u==null?x==null:u===x}if(v)z.click()},
h:function(a,b){return this.Y(a,b,!1)},
aW:function(a){var z,y,x,w,v
z=P.cv()
y=P.i
x=P.em(z.gb8(),y,y)
x.m(0,this.a,H.l(a))
w=z.cI(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.fr([],[]).bI(""),"",v)}},
jm:{"^":"m:49;a,b,c,d",
$1:function(a){var z,y
H.f(a,"$isad")
z=this.a
y=J.bu(z.c)
y.I(y,new V.jl())
y=this.b.style
y.border="solid 2px black"
z.d.$1(this.c)
z.aW(this.d)}},
jl:{"^":"m:50;",
$1:function(a){var z
H.f(a,"$isU")
if(!!J.H(a).$iscU){z=a.style
z.border="solid 2px white"}}}}],["","",,K,{"^":"",
fX:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z={}
y=V.j7("Test 037",!0)
x=W.cQ(null,null)
x.className="pageLargeCanvas"
x.id="testCanvas"
y.a.appendChild(x)
w=[P.i]
y.dn(H.e(["A test of applying a height map to an image. ","Some shapes will take a bit to calculate depending on quality of mapping."],w))
y.hc(H.e(["heightMaps","shapes","scalars"],w))
y.dn(H.e(["\xab[Back to Tests|../]"],w))
w=document
v=w.getElementById("testCanvas")
if(v==null)H.p(P.v("Failed to find an element with the identifier, testCanvas."))
u=E.jv(v,!0,!0,!0,!1)
t=new O.ie()
y=O.cR(V.aw)
t.e=y
y.bg(t.gf2(),t.gf3())
y=new O.b9(t,"emission")
y.c=C.c
y.f=new V.a4(0,0,0)
t.f=y
y=new O.b9(t,"ambient")
y.c=C.c
y.f=new V.a4(0,0,0)
t.r=y
y=new O.b9(t,"diffuse")
y.c=C.c
y.f=new V.a4(0,0,0)
t.x=y
y=new O.b9(t,"invDiffuse")
y.c=C.c
y.f=new V.a4(0,0,0)
t.y=y
y=new O.im(t,"specular")
y.c=C.c
y.f=new V.a4(0,0,0)
y.ch=100
t.z=y
y=new O.ij(t,"bump")
y.c=C.c
t.Q=y
t.ch=null
y=new O.b9(t,"reflect")
y.c=C.c
y.f=new V.a4(0,0,0)
t.cx=y
y=new O.il(t,"refract")
y.c=C.c
y.f=new V.a4(0,0,0)
y.ch=1
t.cy=y
y=new O.ii(t,"alpha")
y.c=C.c
y.f=1
t.db=y
y=new D.hY()
y.bP(D.a2)
y.e=H.e([],[D.cg])
y.f=H.e([],[D.iA])
y.r=H.e([],[D.jb])
y.x=H.e([],[D.jr])
y.y=H.e([],[D.js])
y.z=H.e([],[D.jt])
y.Q=null
y.ch=null
y.cR(y.gf1(),y.gfm(),y.gfo())
t.dx=y
s=y.Q
if(s==null){s=D.M()
y.Q=s
y=s}else y=s
s={func:1,ret:-1,args:[D.t]}
r=H.h(t.gfA(),s)
C.a.h(y.a,r)
r=t.dx
y=r.ch
if(y==null){y=D.M()
r.ch=y}r=H.h(t.gf5(),s)
C.a.h(y.a,r)
t.dy=null
r=t.dx
y=U.dZ(V.er(new V.Y(0,0,0),new V.G(0,1,0),new V.G(1,1,-3)))
q=new V.a4(1,1,1)
p=new D.cg()
p.c=new V.a4(1,1,1)
p.a=new V.G(0,0,1)
o=p.b
p.b=y
y=y.gA()
y.toString
n=H.h(p.geB(),s)
C.a.h(y.a,n)
y=new D.Q("mover",o,p.b,p,[U.ae])
y.b=!0
p.aA(y)
if(!p.c.t(0,q)){o=p.c
p.c=q
y=new D.Q("color",o,q,p,[V.a4])
y.b=!0
p.aA(y)}r.h(0,p)
y=t.r
y.sak(0,new V.a4(0,0,1))
y=t.x
y.sak(0,new V.a4(0,1,0))
y=t.z
y.sak(0,new V.a4(1,0,0))
y=t.z
if(y.c===C.c){y.c=C.i
y.bO()
y.c6(100)
r=y.a
r.a=null
r.af(null)}y.c6(10)
m=E.e8(null,!0,null,"",null,null)
m.sea(t)
l=E.e8(null,!0,null,"",null,null)
l.y.h(0,m)
y=new U.eb()
y.bP(U.ae)
y.bg(y.gf0(),y.gfn())
y.e=null
y.f=V.c4()
y.r=0
r=u.r
p=new U.k_()
n=U.cS()
n.scN(0,!0)
n.scB(6.283185307179586)
n.scD(0)
n.sW(0,0)
n.scC(100)
n.sS(0)
n.scn(0.5)
p.b=n
n=n.gA()
n.toString
k=H.h(p.gaB(),s)
C.a.h(n.a,k)
n=U.cS()
n.scN(0,!0)
n.scB(6.283185307179586)
n.scD(0)
n.sW(0,0)
n.scC(100)
n.sS(0)
n.scn(0.5)
p.c=n
C.a.h(n.gA().a,k)
p.d=null
p.e=!1
p.f=!1
p.r=!1
p.x=2.5
p.y=2.5
p.z=2
p.Q=4
p.cx=!1
p.ch=!1
p.cy=0
p.db=0
p.dx=null
p.dy=0
p.fr=null
p.fx=null
j=new X.aD(!1,!1,!1)
o=p.d
p.d=j
n=[X.aD]
k=new D.Q("modifiers",o,j,p,n)
k.b=!0
p.R(k)
k=p.f
if(k!==!1){p.f=!1
k=new D.Q("invertX",k,!1,p,[P.ah])
k.b=!0
p.R(k)}k=p.r
if(k!==!1){p.r=!1
k=new D.Q("invertY",k,!1,p,[P.ah])
k.b=!0
p.R(k)}p.aX(r)
y.h(0,p)
r=u.r
p=new U.jZ()
k=U.cS()
k.scN(0,!0)
k.scB(6.283185307179586)
k.scD(0)
k.sW(0,0)
k.scC(100)
k.sS(0)
k.scn(0.2)
p.b=k
k=k.gA()
k.toString
i=H.h(p.gaB(),s)
C.a.h(k.a,i)
p.c=null
p.d=!1
p.e=2.5
p.f=2
p.r=4
p.y=!1
p.x=!1
p.z=0
p.Q=null
p.ch=0
p.cx=null
p.cy=null
j=new X.aD(!0,!1,!1)
o=p.c
p.c=j
k=new D.Q("modifiers",o,j,p,n)
k.b=!0
p.R(k)
p.aX(r)
y.h(0,p)
r=u.r
p=new U.k0()
p.c=0.01
p.d=0
p.e=0
j=new X.aD(!1,!1,!1)
p.b=j
n=new D.Q("modifiers",null,j,p,n)
n.b=!0
p.R(n)
p.aX(r)
y.h(0,p)
l.sb4(y)
y=new M.hF()
r=O.cR(E.aP)
y.d=r
r.bg(y.gf6(),y.gf7())
y.e=null
y.f=null
y.r=null
y.x=null
h=new X.iy()
h.b=1.0471975511965976
h.c=0.1
h.d=2000
h.sb4(null)
r=h.b
if(!$.q.$2(r,1.0471975511965976)){o=h.b
h.b=1.0471975511965976
r=new D.Q("fov",o,1.0471975511965976,h,[P.u])
r.b=!0
h.aT(r)}r=h.c
if(!$.q.$2(r,0.1)){o=h.c
h.c=0.1
r=new D.Q("near",o,0.1,h,[P.u])
r.b=!0
h.aT(r)}r=h.d
if(!$.q.$2(r,2000)){o=h.d
h.d=2000
r=new D.Q("far",o,2000,h,[P.u])
r.b=!0
h.aT(r)}r=y.a
if(r!==h){if(r!=null){r=r.gA()
r.toString
p=H.h(y.gaC(),s)
C.a.O(r.a,p)}o=y.a
y.a=h
r=h.gA()
r.toString
p=H.h(y.gaC(),s)
C.a.h(r.a,p)
r=new D.Q("camera",o,y.a,y,[X.dU])
r.b=!0
y.aS(r)}g=new X.hN()
r=new V.bX(0,0,0,1)
g.a=r
g.b=!0
g.c=2000
g.d=!0
g.e=0
g.f=!1
r=V.eB(0,0,1,1)
g.r=r
r=y.b
if(r!==g){if(r!=null){r=r.gA()
r.toString
p=H.h(y.gaC(),s)
C.a.O(r.a,p)}o=y.b
y.b=g
r=g.gA()
r.toString
p=H.h(y.gaC(),s)
C.a.h(r.a,p)
r=new D.Q("target",o,y.b,y,[X.eI])
r.b=!0
y.aS(r)}y.d.h(0,l)
y.a.sb4(U.dZ(V.aC(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
r=u.d
if(r!==y){if(r!=null){r=r.gA()
r.toString
p=H.h(u.gcV(),s)
C.a.O(r.a,p)}u.d=y
y=y.gA()
y.toString
s=H.h(u.gcV(),s)
C.a.h(y.a,s)
u.ez()}z.a=null
z.b=""
z.c=1
f=new K.mS(z,u,m)
y=new V.jk("heightMaps",!0,new K.mT(z,f))
w=w.getElementById("heightMaps")
y.c=w
if(w==null)H.p("Failed to find heightMaps for Texture2DGroup")
y.Y(0,"../resources/HeightMap1.png",!0)
y.h(0,"../resources/HeightMap2.png")
y.h(0,"../resources/HeightMap3.png")
y.h(0,"../resources/ScrewHeightMap.png")
e=new K.mU(z,f)
y=V.ez("shapes",!0)
y.Y(0,"Cuboid",new K.n1(e))
y.Y(0,"Cylinder",new K.n2(e))
y.Y(0,"LatLonSphere",new K.n3(e))
y.Y(0,"Sphere",new K.n4(e))
y.Y(0,"Toroid",new K.n5(e))
y.Y(0,"Grid Small",new K.n6(e))
y.c9(0,"Grid Medium",new K.n7(e),!0)
y.Y(0,"Grid Large",new K.n8(e))
d=new K.mV(z,f)
z=V.ez("scalars",!0)
z.Y(0,"0.1",new K.mW(d))
z.Y(0,"0.2",new K.mX(d))
z.Y(0,"0.4",new K.mY(d))
z.c9(0,"0.6",new K.mZ(d),!0)
z.Y(0,"0.8",new K.n_(d))
z.Y(0,"1.0",new K.n0(d))
V.nf(u)},
mS:{"^":"m:0;a,b,c",
$0:function(){var z,y,x,w
z=this.a
if(z.a!=null&&z.b.length!==0){y=this.b
x=y.f.hJ(z.b)
w=x.y
if(w==null){w=D.M()
x.y=w}y=H.h(new K.mR(z,y,x,this.c),{func:1,ret:-1,args:[D.t]})
C.a.h(w.a,y)}}},
mR:{"^":"m:11;a,b,c,d",
$1:function(a){var z,y,x,w,v,u
H.f(a,"$ist")
z=this.b.f
y=this.c
x=y.r
w=y.x
z=z.a
z.bindFramebuffer(36160,z.createFramebuffer())
z.framebufferTexture2D(36160,36064,3553,y.b,0)
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.n(w)
v=new Uint8Array(x*w*4)
z.readPixels(0,0,x,w,6408,5121,v)
z.bindFramebuffer(36160,null)
z=this.a
y=z.a
u=F.d9()
u.bD(y)
u.a3()
u.hf(new T.jq(v,x,w),z.c)
z=$.$get$az()
z.toString
u.iq(new Z.b_($.$get$dl().a&~z.a))
u.io(!1)
u.a3()
this.d.scS(0,u)}},
mT:{"^":"m:23;a,b",
$1:function(a){this.a.b=a
this.b.$0()}},
mU:{"^":"m:51;a,b",
$1:function(a){this.a.a=a
this.b.$0()}},
n1:{"^":"m:0;a",
$0:function(){this.a.$1(F.fP(50,null,null,50))}},
n2:{"^":"m:0;a",
$0:function(){this.a.$1(F.ms(1,!1,!1,80,80,1))}},
n3:{"^":"m:0;a",
$0:function(){this.a.$1(F.mO(80,80))}},
n4:{"^":"m:0;a",
$0:function(){this.a.$1(F.nh(50,null,50))}},
n5:{"^":"m:0;a",
$0:function(){this.a.$1(F.nl(50,1,50,0.5))}},
n6:{"^":"m:0;a",
$0:function(){this.a.$1(F.dC(50,null,50))}},
n7:{"^":"m:0;a",
$0:function(){this.a.$1(F.dC(100,null,100))}},
n8:{"^":"m:0;a",
$0:function(){this.a.$1(F.dC(150,null,150))}},
mV:{"^":"m:52;a,b",
$1:function(a){this.a.c=a
this.b.$0()}},
mW:{"^":"m:0;a",
$0:function(){this.a.$1(0.1)}},
mX:{"^":"m:0;a",
$0:function(){this.a.$1(0.2)}},
mY:{"^":"m:0;a",
$0:function(){this.a.$1(0.4)}},
mZ:{"^":"m:0;a",
$0:function(){this.a.$1(0.6)}},
n_:{"^":"m:0;a",
$0:function(){this.a.$1(0.8)}},
n0:{"^":"m:0;a",
$0:function(){this.a.$1(1)}}},1]]
setupProgram(dart,0,0)
J.H=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eg.prototype
return J.ef.prototype}if(typeof a=="string")return J.c1.prototype
if(a==null)return J.eh.prototype
if(typeof a=="boolean")return J.hT.prototype
if(a.constructor==Array)return J.b8.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c2.prototype
return a}if(a instanceof P.b)return a
return J.cE(a)}
J.aM=function(a){if(typeof a=="string")return J.c1.prototype
if(a==null)return a
if(a.constructor==Array)return J.b8.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c2.prototype
return a}if(a instanceof P.b)return a
return J.cE(a)}
J.ca=function(a){if(a==null)return a
if(a.constructor==Array)return J.b8.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c2.prototype
return a}if(a instanceof P.b)return a
return J.cE(a)}
J.mC=function(a){if(typeof a=="number")return J.c0.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c8.prototype
return a}
J.mD=function(a){if(typeof a=="number")return J.c0.prototype
if(typeof a=="string")return J.c1.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c8.prototype
return a}
J.dB=function(a){if(typeof a=="string")return J.c1.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c8.prototype
return a}
J.b1=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c2.prototype
return a}if(a instanceof P.b)return a
return J.cE(a)}
J.O=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.H(a).t(a,b)}
J.h3=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mC(a).L(a,b)}
J.dI=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mD(a).j(a,b)}
J.dJ=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fU(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aM(a).k(a,b)}
J.cI=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.fU(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.ca(a).m(a,b,c)}
J.h4=function(a,b){return J.dB(a).H(a,b)}
J.h5=function(a,b,c){return J.b1(a).fw(a,b,c)}
J.h6=function(a,b,c,d){return J.b1(a).dm(a,b,c,d)}
J.h7=function(a,b){return J.dB(a).V(a,b)}
J.cJ=function(a,b,c){return J.aM(a).hl(a,b,c)}
J.cK=function(a,b){return J.ca(a).J(a,b)}
J.h8=function(a,b,c,d){return J.ca(a).aw(a,b,c,d)}
J.dK=function(a,b){return J.ca(a).I(a,b)}
J.bu=function(a){return J.b1(a).gck(a)}
J.bU=function(a){return J.H(a).gT(a)}
J.bv=function(a){return J.ca(a).gZ(a)}
J.at=function(a){return J.aM(a).gl(a)}
J.h9=function(a,b){return J.b1(a).i7(a,b)}
J.ha=function(a,b){return J.b1(a).sa0(a,b)}
J.aa=function(a){return J.H(a).i(a)}
I.aj=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.cP.prototype
C.H=J.r.prototype
C.a=J.b8.prototype
C.I=J.ef.prototype
C.d=J.eg.prototype
C.t=J.eh.prototype
C.e=J.c0.prototype
C.b=J.c1.prototype
C.P=J.c2.prototype
C.V=H.d6.prototype
C.W=W.iu.prototype
C.z=J.iz.prototype
C.X=P.d8.prototype
C.r=J.c8.prototype
C.A=W.bJ.prototype
C.B=W.kn.prototype
C.D=new P.hg(!1)
C.C=new P.hf(C.D)
C.E=new P.ix()
C.F=new P.k8()
C.j=new P.la()
C.c=new A.cf(0,"ColorSourceType.None")
C.i=new A.cf(1,"ColorSourceType.Solid")
C.f=new A.cf(2,"ColorSourceType.Texture2D")
C.h=new A.cf(3,"ColorSourceType.TextureCube")
C.q=new P.b5(0)
C.G=new P.b5(5e6)
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
C.w=H.e(I.aj([127,2047,65535,1114111]),[P.o])
C.m=H.e(I.aj([0,0,32776,33792,1,10240,0,0]),[P.o])
C.n=H.e(I.aj([0,0,65490,45055,65535,34815,65534,18431]),[P.o])
C.o=H.e(I.aj([0,0,26624,1023,65534,2047,65534,2047]),[P.o])
C.R=H.e(I.aj([0,0,32722,12287,65534,34815,65534,18431]),[P.o])
C.S=H.e(I.aj([0,0,65498,45055,65535,34815,65534,18431]),[P.o])
C.p=H.e(I.aj([0,0,24576,1023,65534,34815,65534,18431]),[P.o])
C.x=H.e(I.aj([0,0,32754,11263,65534,34815,65534,18431]),[P.o])
C.T=H.e(I.aj([0,0,32722,12287,65535,34815,65534,18431]),[P.o])
C.y=H.e(I.aj([0,0,65490,12287,65535,34815,65534,18431]),[P.o])
C.Q=H.e(I.aj([]),[P.i])
C.U=new H.hs(0,{},C.Q,[P.i,P.i])
C.k=new P.k1(!1)
$.aB=0
$.bw=null
$.dP=null
$.du=!1
$.fS=null
$.fL=null
$.h_=null
$.cD=null
$.cG=null
$.dD=null
$.bo=null
$.bO=null
$.bP=null
$.dv=!1
$.T=C.j
$.e5=null
$.e4=null
$.e3=null
$.e2=null
$.q=V.io()
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
I.$lazy(y,x,w)}})(["e1","$get$e1",function(){return H.fR("_$dart_dartClosure")},"cX","$get$cX",function(){return H.fR("_$dart_js")},"eR","$get$eR",function(){return H.aE(H.ct({
toString:function(){return"$receiver$"}}))},"eS","$get$eS",function(){return H.aE(H.ct({$method$:null,
toString:function(){return"$receiver$"}}))},"eT","$get$eT",function(){return H.aE(H.ct(null))},"eU","$get$eU",function(){return H.aE(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eY","$get$eY",function(){return H.aE(H.ct(void 0))},"eZ","$get$eZ",function(){return H.aE(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eW","$get$eW",function(){return H.aE(H.eX(null))},"eV","$get$eV",function(){return H.aE(function(){try{null.$method$}catch(z){return z.message}}())},"f0","$get$f0",function(){return H.aE(H.eX(void 0))},"f_","$get$f_",function(){return H.aE(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dp","$get$dp",function(){return P.ko()},"bQ","$get$bQ",function(){return[]},"fb","$get$fb",function(){return P.k5()},"ff","$get$ff",function(){return H.is(H.bn(H.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.o])))},"fB","$get$fB",function(){return P.iS("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fH","$get$fH",function(){return P.m8()},"e_","$get$e_",function(){return{}},"fc","$get$fc",function(){return Z.aq(0)},"dl","$get$dl",function(){return Z.aq(511)},"aH","$get$aH",function(){return Z.aq(1)},"az","$get$az",function(){return Z.aq(2)},"aG","$get$aG",function(){return Z.aq(4)},"aI","$get$aI",function(){return Z.aq(8)},"aJ","$get$aJ",function(){return Z.aq(16)},"bH","$get$bH",function(){return Z.aq(32)},"bI","$get$bI",function(){return Z.aq(64)},"dm","$get$dm",function(){return Z.aq(96)},"b0","$get$b0",function(){return Z.aq(128)},"aF","$get$aF",function(){return Z.aq(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.E},{func:1,ret:-1,opt:[D.t]},{func:1,ret:-1,args:[D.t]},{func:1,ret:-1},{func:1,ret:P.E,args:[F.ap,P.u,P.u]},{func:1,ret:-1,args:[W.ad]},{func:1,ret:P.E,args:[F.av]},{func:1,ret:P.E,args:[,,]},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:-1,args:[W.ab]},{func:1,ret:-1,args:[P.o,[P.k,E.aP]]},{func:1,ret:P.E,args:[D.t]},{func:1,ret:-1,args:[W.bl]},{func:1,ret:P.u,args:[P.u,P.u]},{func:1,ret:P.E,args:[W.ab]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.u},{func:1,args:[,]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:-1,args:[P.o,[P.k,U.ae]]},{func:1,ret:-1,args:[P.o,[P.k,V.aw]]},{func:1,ret:-1,args:[P.o,[P.k,D.a2]]},{func:1,ret:-1,args:[W.bA]},{func:1,ret:P.E,args:[P.i]},{func:1,ret:P.E,args:[,]},{func:1,ret:P.i,args:[P.o]},{func:1,ret:P.ah,args:[W.J]},{func:1,args:[P.i]},{func:1,ret:-1,args:[P.b],opt:[P.ax]},{func:1,ret:P.E,args:[,],opt:[,]},{func:1,args:[,P.i]},{func:1,ret:P.E,args:[P.a1]},{func:1,ret:P.E,args:[{func:1,ret:-1,args:[D.t]}]},{func:1,ret:P.P,args:[,,]},{func:1,ret:P.P,args:[P.o]},{func:1,ret:-1,args:[W.bJ]},{func:1,ret:P.ah,args:[P.u,P.u]},{func:1,ret:P.ah,args:[[P.k,D.a2]]},{func:1,ret:P.E,args:[P.i,,]},{func:1,ret:-1,args:[P.i,P.o]},{func:1,ret:[P.I,P.i,P.i],args:[[P.I,P.i,P.i],P.i]},{func:1,ret:P.o,args:[[P.d,P.o],P.o]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:-1,args:[P.i],opt:[,]},{func:1,ret:V.Y,args:[P.u]},{func:1,ret:[P.aT,,],args:[,]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:P.E,args:[P.bj]},{func:1,ret:P.E,args:[W.ad]},{func:1,ret:P.E,args:[W.U]},{func:1,ret:P.E,args:[F.cs]},{func:1,ret:P.E,args:[P.u]},{func:1,ret:P.E,args:[{func:1,ret:-1}]},{func:1,ret:W.U,args:[W.J]}]
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
if(x==y)H.nk(d||a)
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
Isolate.aj=a.aj
Isolate.dz=a.dz
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
if(typeof dartMainRunner==="function")dartMainRunner(K.fX,[])
else K.fX([])})})()
//# sourceMappingURL=test.dart.js.map
