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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dA"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dA"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dA(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dB=function(){}
var dart=[["","",,H,{"^":"",nf:{"^":"b;a"}}],["","",,J,{"^":"",
K:function(a){return void 0},
dG:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cE:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dE==null){H.mz()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.c7("Return interceptor for "+H.k(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cY()]
if(v!=null)return v
v=H.mC(a)
if(v!=null)return v
if(typeof a=="function")return C.P
y=Object.getPrototypeOf(a)
if(y==null)return C.z
if(y===Object.prototype)return C.z
if(typeof w=="function"){Object.defineProperty(w,$.$get$cY(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
r:{"^":"b;",
t:function(a,b){return a===b},
gP:function(a){return H.bG(a)},
i:["em",function(a){return"Instance of '"+H.ba(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
hX:{"^":"r;",
i:function(a){return String(a)},
gP:function(a){return a?519018:218159},
$isZ:1},
eh:{"^":"r;",
t:function(a,b){return null==b},
i:function(a){return"null"},
gP:function(a){return 0},
$isG:1},
cZ:{"^":"r;",
gP:function(a){return 0},
i:["en",function(a){return String(a)}]},
iE:{"^":"cZ;"},
cu:{"^":"cZ;"},
c2:{"^":"cZ;",
i:function(a){var z=a[$.$get$e1()]
if(z==null)return this.en(a)
return"JavaScript function for "+H.k(J.ad(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscV:1},
b6:{"^":"r;$ti",
h:function(a,b){H.y(b,H.w(a,0))
if(!!a.fixed$length)H.q(P.A("add"))
a.push(b)},
V:function(a,b){var z
if(!!a.fixed$length)H.q(P.A("remove"))
for(z=0;z<a.length;++z)if(J.T(a[z],b)){a.splice(z,1)
return!0}return!1},
c4:function(a,b){var z,y
H.u(b,"$ish",[H.w(a,0)],"$ash")
if(!!a.fixed$length)H.q(P.A("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.B)(b),++y)a.push(b[y])},
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.w(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.b2(a))}},
A:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.k(a[y]))
return z.join(b)},
hA:function(a){return this.A(a,"")},
ht:function(a,b,c,d){var z,y,x
H.y(b,d)
H.l(c,{func:1,ret:d,args:[d,H.w(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.b2(a))}return y},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
bK:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a0(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a0(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.w(a,0)])
return H.c(a.slice(b,c),[H.w(a,0)])},
gax:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.hV())},
aw:function(a,b,c,d){var z
H.y(d,H.w(a,0))
if(!!a.immutable$list)H.q(P.A("fill range"))
P.aL(b,c,a.length,null,null,null)
for(z=b;z.K(0,c);z=z.B(0,1))a[z]=d},
ad:function(a,b){var z
for(z=0;z<a.length;++z)if(J.T(a[z],b))return!0
return!1},
i:function(a){return P.cW(a,"[","]")},
gY:function(a){return new J.av(a,a.length,0,[H.w(a,0)])},
gP:function(a){return H.bG(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.q(P.A("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cc(b,"newLength",null))
if(b<0)throw H.a(P.a0(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aG(a,b))
if(b>=a.length||b<0)throw H.a(H.aG(a,b))
return a[b]},
m:function(a,b,c){H.D(b)
H.y(c,H.w(a,0))
if(!!a.immutable$list)H.q(P.A("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aG(a,b))
if(b>=a.length||b<0)throw H.a(H.aG(a,b))
a[b]=c},
$ish:1,
$isd:1,
p:{
hW:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cc(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a0(a,0,4294967295,"length",null))
return J.ee(new Array(a),b)},
ee:function(a,b){return J.bA(H.c(a,[b]))},
bA:function(a){H.bT(a)
a.fixed$length=Array
return a}}},
ne:{"^":"b6;$ti"},
av:{"^":"b;a,b,c,0d,$ti",
gO:function(a){return this.d},
D:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.B(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
cm:{"^":"r;",
ic:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.A(""+a+".toInt()"))},
cq:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.A(""+a+".floor()"))},
af:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.A(""+a+".round()"))},
eb:function(a,b){var z,y
if(b>20)throw H.a(P.a0(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
b4:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a0(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.U(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.q(P.A("Unexpected toString result: "+z))
x=J.aH(y)
z=x.j(y,1)
w=+x.j(y,3)
if(x.j(y,2)!=null){z+=x.j(y,2)
w-=x.j(y,2).length}return z+C.b.k("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gP:function(a){return a&0x1FFFFFFF},
ba:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
ep:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.de(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.de(a,b)},
de:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.A("Result of truncating division is "+H.k(z)+": "+H.k(a)+" ~/ "+b))},
aH:function(a,b){var z
if(a>0)z=this.dc(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fJ:function(a,b){if(b<0)throw H.a(H.ah(b))
return this.dc(a,b)},
dc:function(a,b){return b>31?0:a>>>b},
K:function(a,b){if(typeof b!=="number")throw H.a(H.ah(b))
return a<b},
$isv:1,
$isa2:1},
eg:{"^":"cm;",$ism:1},
ef:{"^":"cm;"},
cn:{"^":"r;",
U:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aG(a,b))
if(b<0)throw H.a(H.aG(a,b))
if(b>=a.length)H.q(H.aG(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(b>=a.length)throw H.a(H.aG(a,b))
return a.charCodeAt(b)},
B:function(a,b){H.O(b)
if(typeof b!=="string")throw H.a(P.cc(b,null,null))
return a+b},
aR:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.ah(b))
c=P.aL(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.ah(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
a5:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.ah(c))
if(typeof c!=="number")return c.K()
if(c<0||c>a.length)throw H.a(P.a0(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a4:function(a,b){return this.a5(a,b,0)},
q:function(a,b,c){H.D(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.ah(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.K()
if(b<0)throw H.a(P.cs(b,null,null))
if(b>c)throw H.a(P.cs(b,null,null))
if(c>a.length)throw H.a(P.cs(c,null,null))
return a.substring(b,c)},
ap:function(a,b){return this.q(a,b,null)},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.E)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hQ:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
a9:function(a,b){return this.hQ(a,b," ")},
hR:function(a,b,c){var z=b-a.length
if(z<=0)return a
return a+this.k(c,z)},
dV:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a0(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
dU:function(a,b){return this.dV(a,b,0)},
hh:function(a,b,c){if(c>a.length)throw H.a(P.a0(c,0,a.length,null,null))
return H.h2(a,b,c)},
i:function(a){return a},
gP:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$iseu:1,
$isi:1}}],["","",,H,{"^":"",
cF:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
hV:function(){return new P.je("No element")},
a5:{"^":"jL;a",
gl:function(a){return this.a.length},
j:function(a,b){return C.b.U(this.a,b)},
$ascv:function(){return[P.m]},
$asx:function(){return[P.m]},
$ash:function(){return[P.m]},
$asd:function(){return[P.m]}},
hH:{"^":"h;"},
ek:{"^":"b;a,b,c,0d,$ti",
gO:function(a){return this.d},
D:function(){var z,y,x,w
z=this.a
y=J.aH(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.b2(z))
w=this.c
if(typeof x!=="number")return H.o(x)
if(w>=x){this.d=null
return!1}this.d=y.F(z,w);++this.c
return!0}},
ij:{"^":"h;a,b,$ti",
gY:function(a){return new H.ik(J.bv(this.a),this.b,this.$ti)},
gl:function(a){return J.au(this.a)},
F:function(a,b){return this.b.$1(J.cL(this.a,b))},
$ash:function(a,b){return[b]}},
ik:{"^":"cX;0a,b,c,$ti",
D:function(){var z=this.b
if(z.D()){this.a=this.c.$1(z.gO(z))
return!0}this.a=null
return!1},
gO:function(a){return this.a},
$ascX:function(a,b){return[b]}},
kd:{"^":"h;a,b,$ti",
gY:function(a){return new H.ke(J.bv(this.a),this.b,this.$ti)}},
ke:{"^":"cX;a,b,$ti",
D:function(){var z,y
for(z=this.a,y=this.b;z.D();)if(y.$1(z.gO(z)))return!0
return!1},
gO:function(a){var z=this.a
return z.gO(z)}},
ck:{"^":"b;$ti"},
cv:{"^":"b;$ti",
m:function(a,b,c){H.D(b)
H.y(c,H.ar(this,"cv",0))
throw H.a(P.A("Cannot modify an unmodifiable list"))},
aw:function(a,b,c,d){H.y(d,H.ar(this,"cv",0))
throw H.a(P.A("Cannot modify an unmodifiable list"))}},
jL:{"^":"cp+cv;"}}],["","",,H,{"^":"",
hw:function(){throw H.a(P.A("Cannot modify unmodifiable Map"))},
mr:function(a){return init.types[H.D(a)]},
fW:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.K(a).$isE},
k:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ad(a)
if(typeof z!=="string")throw H.a(H.ah(a))
return z},
bG:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iO:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.f(z,3)
y=H.O(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a0(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.E(w,u)|32)>x)return}return parseInt(a,b)},
ba:function(a){var z,y,x,w,v,u,t,s,r
z=J.K(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.H||!!J.K(a).$iscu){v=C.v(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.E(w,0)===36)w=C.b.ap(w,1)
r=H.dF(H.bT(H.b0(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
iG:function(){if(!!self.location)return self.location.href
return},
ew:function(a){var z,y,x,w,v
H.bT(a)
z=J.au(a)
if(typeof z!=="number")return z.ei()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iP:function(a){var z,y,x,w
z=H.c([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.B)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.ah(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.f.aH(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.ah(w))}return H.ew(z)},
ex:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.ah(x))
if(x<0)throw H.a(H.ah(x))
if(x>65535)return H.iP(a)}return H.ew(a)},
iQ:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.ei()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
cq:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.aH(z,10))>>>0,56320|z&1023)}}throw H.a(P.a0(a,0,1114111,null,null))},
ag:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iN:function(a){return a.b?H.ag(a).getUTCFullYear()+0:H.ag(a).getFullYear()+0},
iL:function(a){return a.b?H.ag(a).getUTCMonth()+1:H.ag(a).getMonth()+1},
iH:function(a){return a.b?H.ag(a).getUTCDate()+0:H.ag(a).getDate()+0},
iI:function(a){return a.b?H.ag(a).getUTCHours()+0:H.ag(a).getHours()+0},
iK:function(a){return a.b?H.ag(a).getUTCMinutes()+0:H.ag(a).getMinutes()+0},
iM:function(a){return a.b?H.ag(a).getUTCSeconds()+0:H.ag(a).getSeconds()+0},
iJ:function(a){return a.b?H.ag(a).getUTCMilliseconds()+0:H.ag(a).getMilliseconds()+0},
o:function(a){throw H.a(H.ah(a))},
f:function(a,b){if(a==null)J.au(a)
throw H.a(H.aG(a,b))},
aG:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aI(!0,b,"index",null)
z=H.D(J.au(a))
if(!(b<0)){if(typeof z!=="number")return H.o(z)
y=b>=z}else y=!0
if(y)return P.R(b,a,"index",null,z)
return P.cs(b,"index",null)},
mm:function(a,b,c){if(a>c)return new P.cr(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cr(a,c,!0,b,"end","Invalid value")
return new P.aI(!0,b,"end",null)},
ah:function(a){return new P.aI(!0,a,null,null)},
mg:function(a){if(typeof a!=="number")throw H.a(H.ah(a))
return a},
a:function(a){var z
if(a==null)a=new P.et()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.h5})
z.name=""}else z.toString=H.h5
return z},
h5:function(){return J.ad(this.dartException)},
q:function(a){throw H.a(a)},
B:function(a){throw H.a(P.b2(a))},
at:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.mO(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.aH(x,16)&8191)===10)switch(w){case 438:return z.$1(H.d_(H.k(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.es(H.k(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eT()
u=$.$get$eU()
t=$.$get$eV()
s=$.$get$eW()
r=$.$get$f_()
q=$.$get$f0()
p=$.$get$eY()
$.$get$eX()
o=$.$get$f2()
n=$.$get$f1()
m=v.a8(y)
if(m!=null)return z.$1(H.d_(H.O(y),m))
else{m=u.a8(y)
if(m!=null){m.method="call"
return z.$1(H.d_(H.O(y),m))}else{m=t.a8(y)
if(m==null){m=s.a8(y)
if(m==null){m=r.a8(y)
if(m==null){m=q.a8(y)
if(m==null){m=p.a8(y)
if(m==null){m=s.a8(y)
if(m==null){m=o.a8(y)
if(m==null){m=n.a8(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.es(H.O(y),m))}}return z.$1(new H.jK(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eE()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aI(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eE()
return a},
bt:function(a){var z
if(a==null)return new H.fu(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fu(a)},
mp:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
mB:function(a,b,c,d,e,f){H.e(a,"$iscV")
switch(H.D(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.t("Unsupported number of arguments for wrapped closure"))},
br:function(a,b){var z
H.D(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mB)
a.$identity=z
return z},
hs:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.K(d).$isd){z.$reflectionInfo=d
x=H.iT(z).r}else x=d
w=e?Object.create(new H.jf().constructor.prototype):Object.create(new H.cO(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aB
if(typeof u!=="number")return u.B()
$.aB=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dZ(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.mr,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dR:H.cP
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dZ(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hp:function(a,b,c,d){var z=H.cP
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dZ:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hr(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hp(y,!w,z,b)
if(y===0){w=$.aB
if(typeof w!=="number")return w.B()
$.aB=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bw
if(v==null){v=H.cd("self")
$.bw=v}return new Function(w+H.k(v)+";return "+u+"."+H.k(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aB
if(typeof w!=="number")return w.B()
$.aB=w+1
t+=w
w="return function("+t+"){return this."
v=$.bw
if(v==null){v=H.cd("self")
$.bw=v}return new Function(w+H.k(v)+"."+H.k(z)+"("+t+");}")()},
hq:function(a,b,c,d){var z,y
z=H.cP
y=H.dR
switch(b?-1:a){case 0:throw H.a(H.j2("Intercepted function with no arguments."))
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
z=$.bw
if(z==null){z=H.cd("self")
$.bw=z}y=$.dQ
if(y==null){y=H.cd("receiver")
$.dQ=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hq(w,!u,x,b)
if(w===1){z="return function(){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+");"
y=$.aB
if(typeof y!=="number")return y.B()
$.aB=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+", "+s+");"
y=$.aB
if(typeof y!=="number")return y.B()
$.aB=y+1
return new Function(z+y+"}")()},
dA:function(a,b,c,d,e,f,g){var z,y
z=J.bA(H.bT(b))
H.D(c)
y=!!J.K(d).$isd?J.bA(d):d
return H.hs(a,z,c,y,!!e,f,g)},
O:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aA(a,"String"))},
mn:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aA(a,"double"))},
mH:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aA(a,"num"))},
fR:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aA(a,"bool"))},
D:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aA(a,"int"))},
h0:function(a,b){throw H.a(H.aA(a,H.O(b).substring(3)))},
mJ:function(a,b){var z=J.aH(b)
throw H.a(H.hm(a,z.q(b,3,z.gl(b))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.K(a)[b])return a
H.h0(a,b)},
j:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.K(a)[b]
else z=!0
if(z)return a
H.mJ(a,b)},
bT:function(a){if(a==null)return a
if(!!J.K(a).$isd)return a
throw H.a(H.aA(a,"List"))},
fY:function(a,b){if(a==null)return a
if(!!J.K(a).$isd)return a
if(J.K(a)[b])return a
H.h0(a,b)},
fS:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.D(z)]
else return a.$S()}return},
c8:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fS(J.K(a))
if(z==null)return!1
y=H.fV(z,null,b,null)
return y},
l:function(a,b){var z,y
if(a==null)return a
if($.dw)return a
$.dw=!0
try{if(H.c8(a,b))return a
z=H.cb(b)
y=H.aA(a,z)
throw H.a(y)}finally{$.dw=!1}},
dC:function(a,b){if(a!=null&&!H.dz(a,b))H.q(H.aA(a,H.cb(b)))
return a},
fM:function(a){var z
if(a instanceof H.p){z=H.fS(J.K(a))
if(z!=null)return H.cb(z)
return"Closure"}return H.ba(a)},
mN:function(a){throw H.a(new P.hA(H.O(a)))},
fT:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
b0:function(a){if(a==null)return
return a.$ti},
oc:function(a,b,c){return H.bu(a["$as"+H.k(c)],H.b0(b))},
b_:function(a,b,c,d){var z
H.O(c)
H.D(d)
z=H.bu(a["$as"+H.k(c)],H.b0(b))
return z==null?null:z[d]},
ar:function(a,b,c){var z
H.O(b)
H.D(c)
z=H.bu(a["$as"+H.k(b)],H.b0(a))
return z==null?null:z[c]},
w:function(a,b){var z
H.D(b)
z=H.b0(a)
return z==null?null:z[b]},
cb:function(a){var z=H.b1(a,null)
return z},
b1:function(a,b){var z,y
H.u(b,"$isd",[P.i],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dF(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.D(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.k(b[y])}if('func' in a)return H.m6(a,b)
if('futureOr' in a)return"FutureOr<"+H.b1("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
m6:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.i]
H.u(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.f(b,r)
t=C.b.B(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.b1(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b1(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b1(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b1(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.mo(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.O(z[l])
n=n+m+H.b1(i[h],b)+(" "+H.k(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dF:function(a,b,c){var z,y,x,w,v,u
H.u(c,"$isd",[P.i],"$asd")
if(a==null)return""
z=new P.an("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b1(u,c)}v="<"+z.i(0)+">"
return v},
bu:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bS:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.b0(a)
y=J.K(a)
if(y[b]==null)return!1
return H.fP(H.bu(y[d],z),null,c,null)},
u:function(a,b,c,d){var z,y
H.O(b)
H.bT(c)
H.O(d)
if(a==null)return a
z=H.bS(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dF(c,0,null)
throw H.a(H.aA(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
fP:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.as(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.as(a[y],b,c[y],d))return!1
return!0},
oa:function(a,b,c){return a.apply(b,H.bu(J.K(b)["$as"+H.k(c)],H.b0(b)))},
fX:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="G"||a===-1||a===-2||H.fX(z)}return!1},
dz:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="G"||b===-1||b===-2||H.fX(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dz(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c8(a,b)}y=J.K(a).constructor
x=H.b0(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.as(y,null,b,null)
return z},
y:function(a,b){if(a!=null&&!H.dz(a,b))throw H.a(H.aA(a,H.cb(b)))
return a},
as:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.as(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="G")return!0
if('func' in c)return H.fV(a,b,c,d)
if('func' in a)return c.builtin$cls==="cV"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.as("type" in a?a.type:null,b,x,d)
else if(H.as(a,b,x,d))return!0
else{if(!('$is'+"bz" in y.prototype))return!1
w=y.prototype["$as"+"bz"]
v=H.bu(w,z?a.slice(1):null)
return H.as(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cb(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fP(H.bu(r,z),b,u,d)},
fV:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.mG(m,b,l,d)},
mG:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.as(c[w],d,a[w],b))return!1}return!0},
ob:function(a,b,c){Object.defineProperty(a,H.O(b),{value:c,enumerable:false,writable:true,configurable:true})},
mC:function(a){var z,y,x,w,v,u
z=H.O($.fU.$1(a))
y=$.cD[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cG[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.O($.fO.$2(a,z))
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
return u.i}if(v==="+")return H.h_(a,x)
if(v==="*")throw H.a(P.c7(z))
if(init.leafTags[z]===true){u=H.cH(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.h_(a,x)},
h_:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dG(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cH:function(a){return J.dG(a,!1,null,!!a.$isE)},
mF:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cH(z)
else return J.dG(z,c,null,null)},
mz:function(){if(!0===$.dE)return
$.dE=!0
H.mA()},
mA:function(){var z,y,x,w,v,u,t,s
$.cD=Object.create(null)
$.cG=Object.create(null)
H.mv()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.h1.$1(v)
if(u!=null){t=H.mF(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mv:function(){var z,y,x,w,v,u,t
z=C.M()
z=H.bq(C.J,H.bq(C.O,H.bq(C.u,H.bq(C.u,H.bq(C.N,H.bq(C.K,H.bq(C.L(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fU=new H.mw(v)
$.fO=new H.mx(u)
$.h1=new H.my(t)},
bq:function(a,b){return a(b)||b},
h2:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
h3:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hv:{"^":"b;$ti",
i:function(a){return P.d1(this)},
m:function(a,b,c){H.y(b,H.w(this,0))
H.y(c,H.w(this,1))
return H.hw()},
$isI:1},
hx:{"^":"hv;a,b,c,$ti",
gl:function(a){return this.a},
bl:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bl(0,b))return
return this.d2(b)},
d2:function(a){return this.b[H.O(a)]},
H:function(a,b){var z,y,x,w,v
z=H.w(this,1)
H.l(b,{func:1,ret:-1,args:[H.w(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.y(this.d2(v),z))}}},
iS:{"^":"b;a,b,c,d,e,f,r,0x",p:{
iT:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bA(z)
y=z[0]
x=z[1]
return new H.iS(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jx:{"^":"b;a,b,c,d,e,f",
a8:function(a){var z,y,x
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
if(z==null)z=H.c([],[P.i])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jx(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
ct:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eZ:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iB:{"^":"a6;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.k(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
es:function(a,b){return new H.iB(a,b==null?null:b.method)}}},
i_:{"^":"a6;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.k(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.k(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.k(this.a)+")"},
p:{
d_:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.i_(a,y,z?null:b.receiver)}}},
jK:{"^":"a6;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
mO:{"^":"p:16;a",
$1:function(a){if(!!J.K(a).$isa6)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fu:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaz:1},
p:{"^":"b;",
i:function(a){return"Closure '"+H.ba(this).trim()+"'"},
gef:function(){return this},
$iscV:1,
gef:function(){return this}},
eK:{"^":"p;"},
jf:{"^":"eK;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cO:{"^":"eK;a,b,c,d",
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cO))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gP:function(a){var z,y
z=this.c
if(z==null)y=H.bG(this.a)
else y=typeof z!=="object"?J.bU(z):H.bG(z)
return(y^H.bG(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.ba(z)+"'")},
p:{
cP:function(a){return a.a},
dR:function(a){return a.c},
cd:function(a){var z,y,x,w,v
z=new H.cO("self","target","receiver","name")
y=J.bA(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jy:{"^":"a6;a",
i:function(a){return this.a},
p:{
aA:function(a,b){return new H.jy("TypeError: "+H.k(P.cj(a))+": type '"+H.fM(a)+"' is not a subtype of type '"+b+"'")}}},
hl:{"^":"a6;a",
i:function(a){return this.a},
p:{
hm:function(a,b){return new H.hl("CastError: "+H.k(P.cj(a))+": type '"+H.fM(a)+"' is not a subtype of type '"+b+"'")}}},
j1:{"^":"a6;a",
i:function(a){return"RuntimeError: "+H.k(this.a)},
p:{
j2:function(a){return new H.j1(a)}}},
aW:{"^":"ig;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gal:function(a){return new H.i4(this,[H.w(this,0)])},
bl:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.d_(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.d_(y,b)}else return this.hx(b)},
hx:function(a){var z=this.d
if(z==null)return!1
return this.ct(this.bT(z,this.cs(a)),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bd(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bd(w,b)
x=y==null?null:y.b
return x}else return this.hy(b)},
hy:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bT(z,this.cs(a))
x=this.ct(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y
H.y(b,H.w(this,0))
H.y(c,H.w(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bV()
this.b=z}this.cS(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bV()
this.c=y}this.cS(y,b,c)}else this.hz(b,c)},
hz:function(a,b){var z,y,x,w
H.y(a,H.w(this,0))
H.y(b,H.w(this,1))
z=this.d
if(z==null){z=this.bV()
this.d=z}y=this.cs(a)
x=this.bT(z,y)
if(x==null)this.c1(z,y,[this.bW(a,b)])
else{w=this.ct(x,a)
if(w>=0)x[w].b=b
else x.push(this.bW(a,b))}},
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.w(this,0),H.w(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.b2(this))
z=z.c}},
cS:function(a,b,c){var z
H.y(b,H.w(this,0))
H.y(c,H.w(this,1))
z=this.bd(a,b)
if(z==null)this.c1(a,b,this.bW(b,c))
else z.b=c},
eY:function(){this.r=this.r+1&67108863},
bW:function(a,b){var z,y
z=new H.i3(H.y(a,H.w(this,0)),H.y(b,H.w(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eY()
return z},
cs:function(a){return J.bU(a)&0x3ffffff},
ct:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.T(a[y].a,b))return y
return-1},
i:function(a){return P.d1(this)},
bd:function(a,b){return a[b]},
bT:function(a,b){return a[b]},
c1:function(a,b,c){a[b]=c},
eR:function(a,b){delete a[b]},
d_:function(a,b){return this.bd(a,b)!=null},
bV:function(){var z=Object.create(null)
this.c1(z,"<non-identifier-key>",z)
this.eR(z,"<non-identifier-key>")
return z},
$isei:1},
i3:{"^":"b;a,b,0c,0d"},
i4:{"^":"hH;a,$ti",
gl:function(a){return this.a.a},
gY:function(a){var z,y
z=this.a
y=new H.i5(z,z.r,this.$ti)
y.c=z.e
return y}},
i5:{"^":"b;a,b,0c,0d,$ti",
gO:function(a){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b2(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
mw:{"^":"p:16;a",
$1:function(a){return this.a(a)}},
mx:{"^":"p:48;a",
$2:function(a,b){return this.a(a,b)}},
my:{"^":"p:28;a",
$1:function(a){return this.a(H.O(a))}},
hY:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseu:1,
$isiU:1,
p:{
hZ:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.V("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mo:function(a){return J.ee(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
mI:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bo:function(a){return a},
iy:function(a){return new Int8Array(a)},
aF:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aG(b,a))},
m0:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.mm(a,b,c))
return b},
er:{"^":"r;",$iser:1,"%":"ArrayBuffer"},
d7:{"^":"r;",$isd7:1,$isjz:1,"%":"DataView;ArrayBufferView;d6|fo|fp|iz|fq|fr|aY"},
d6:{"^":"d7;",
gl:function(a){return a.length},
$isE:1,
$asE:I.dB},
iz:{"^":"fp;",
j:function(a,b){H.aF(b,a,a.length)
return a[b]},
m:function(a,b,c){H.D(b)
H.mn(c)
H.aF(b,a,a.length)
a[b]=c},
$asck:function(){return[P.v]},
$asx:function(){return[P.v]},
$ish:1,
$ash:function(){return[P.v]},
$isd:1,
$asd:function(){return[P.v]},
"%":"Float32Array|Float64Array"},
aY:{"^":"fr;",
m:function(a,b,c){H.D(b)
H.D(c)
H.aF(b,a,a.length)
a[b]=c},
$asck:function(){return[P.m]},
$asx:function(){return[P.m]},
$ish:1,
$ash:function(){return[P.m]},
$isd:1,
$asd:function(){return[P.m]}},
no:{"^":"aY;",
j:function(a,b){H.aF(b,a,a.length)
return a[b]},
"%":"Int16Array"},
np:{"^":"aY;",
j:function(a,b){H.aF(b,a,a.length)
return a[b]},
"%":"Int32Array"},
nq:{"^":"aY;",
j:function(a,b){H.aF(b,a,a.length)
return a[b]},
"%":"Int8Array"},
nr:{"^":"aY;",
j:function(a,b){H.aF(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
ns:{"^":"aY;",
j:function(a,b){H.aF(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
nt:{"^":"aY;",
gl:function(a){return a.length},
j:function(a,b){H.aF(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
d8:{"^":"aY;",
gl:function(a){return a.length},
j:function(a,b){H.aF(b,a,a.length)
return a[b]},
bK:function(a,b,c){return new Uint8Array(a.subarray(b,H.m0(b,c,a.length)))},
$isd8:1,
$isQ:1,
"%":";Uint8Array"},
fo:{"^":"d6+x;"},
fp:{"^":"fo+ck;"},
fq:{"^":"d6+x;"},
fr:{"^":"fq+ck;"}}],["","",,P,{"^":"",
kg:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.md()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.br(new P.ki(z),1)).observe(y,{childList:true})
return new P.kh(z,y,x)}else if(self.setImmediate!=null)return P.me()
return P.mf()},
o_:[function(a){self.scheduleImmediate(H.br(new P.kj(H.l(a,{func:1,ret:-1})),0))},"$1","md",4,0,11],
o0:[function(a){self.setImmediate(H.br(new P.kk(H.l(a,{func:1,ret:-1})),0))},"$1","me",4,0,11],
o1:[function(a){P.dh(C.q,H.l(a,{func:1,ret:-1}))},"$1","mf",4,0,11],
dh:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.f.a1(a.a,1000)
return P.lk(z<0?0:z,b)},
eO:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.bh]})
z=C.f.a1(a.a,1000)
return P.ll(z<0?0:z,b)},
m9:function(a,b){if(H.c8(a,{func:1,args:[P.b,P.az]}))return b.i_(a,null,P.b,P.az)
if(H.c8(a,{func:1,args:[P.b]}))return H.l(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cc(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
m8:function(){var z,y
for(;z=$.bp,z!=null;){$.bQ=null
y=z.b
$.bp=y
if(y==null)$.bP=null
z.a.$0()}},
o9:[function(){$.dx=!0
try{P.m8()}finally{$.bQ=null
$.dx=!1
if($.bp!=null)$.$get$dr().$1(P.fQ())}},"$0","fQ",0,0,3],
fL:function(a){var z=new P.fi(H.l(a,{func:1,ret:-1}))
if($.bp==null){$.bP=z
$.bp=z
if(!$.dx)$.$get$dr().$1(P.fQ())}else{$.bP.b=z
$.bP=z}},
mc:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.bp
if(z==null){P.fL(a)
$.bQ=$.bP
return}y=new P.fi(a)
x=$.bQ
if(x==null){y.b=z
$.bQ=y
$.bp=y}else{y.b=x.b
x.b=y
$.bQ=y
if(y.b==null)$.bP=y}},
mK:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.S
if(C.j===y){P.cC(null,null,C.j,a)
return}y.toString
P.cC(null,null,y,H.l(y.c9(a),z))},
eN:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.S
if(y===C.j){y.toString
return P.dh(a,b)}return P.dh(a,H.l(y.c9(b),z))},
ju:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bh]}
H.l(b,z)
y=$.S
if(y===C.j){y.toString
return P.eO(a,b)}x=y.dl(b,P.bh)
$.S.toString
return P.eO(a,H.l(x,z))},
cB:function(a,b,c,d,e){var z={}
z.a=d
P.mc(new P.ma(z,e))},
fH:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.S
if(y===c)return d.$0()
$.S=c
z=y
try{y=d.$0()
return y}finally{$.S=z}},
fI:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.y(e,g)
y=$.S
if(y===c)return d.$1(e)
$.S=c
z=y
try{y=d.$1(e)
return y}finally{$.S=z}},
mb:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.y(e,h)
H.y(f,i)
y=$.S
if(y===c)return d.$2(e,f)
$.S=c
z=y
try{y=d.$2(e,f)
return y}finally{$.S=z}},
cC:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.c9(d):c.he(d,-1)
P.fL(d)},
ki:{"^":"p:19;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kh:{"^":"p:47;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kj:{"^":"p:2;a",
$0:function(){this.a.$0()}},
kk:{"^":"p:2;a",
$0:function(){this.a.$0()}},
fx:{"^":"b;a,0b,c",
eE:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.br(new P.ln(this,b),0),a)
else throw H.a(P.A("`setTimeout()` not found."))},
eF:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.br(new P.lm(this,a,Date.now(),b),0),a)
else throw H.a(P.A("Periodic timer."))},
$isbh:1,
p:{
lk:function(a,b){var z=new P.fx(!0,0)
z.eE(a,b)
return z},
ll:function(a,b){var z=new P.fx(!1,0)
z.eF(a,b)
return z}}},
ln:{"^":"p:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lm:{"^":"p:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.ep(w,x)}z.c=y
this.d.$1(z)}},
bn:{"^":"b;0a,b,c,d,e,$ti",
hG:function(a){if(this.c!==6)return!0
return this.b.b.cE(H.l(this.d,{func:1,ret:P.Z,args:[P.b]}),a.a,P.Z,P.b)},
hw:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.w(this,1)}
w=this.b.b
if(H.c8(z,{func:1,args:[P.b,P.az]}))return H.dC(w.i6(z,a.a,a.b,null,y,P.az),x)
else return H.dC(w.cE(H.l(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aT:{"^":"b;dd:a<,b,0fB:c<,$ti",
ea:function(a,b,c){var z,y,x,w
z=H.w(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.S
if(y!==C.j){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.m9(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aT(0,$.S,[c])
w=b==null?1:3
this.cT(new P.bn(x,w,a,b,[z,c]))
return x},
ib:function(a,b){return this.ea(a,null,b)},
cT:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isbn")
this.c=a}else{if(z===2){y=H.e(this.c,"$isaT")
z=y.a
if(z<4){y.cT(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cC(null,null,z,H.l(new P.kz(this,a),{func:1,ret:-1}))}},
d7:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isbn")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isaT")
y=u.a
if(y<4){u.d7(a)
return}this.a=y
this.c=u.c}z.a=this.bh(a)
y=this.b
y.toString
P.cC(null,null,y,H.l(new P.kE(z,this),{func:1,ret:-1}))}},
c_:function(){var z=H.e(this.c,"$isbn")
this.c=null
return this.bh(z)},
bh:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cX:function(a){var z,y,x,w
z=H.w(this,0)
H.dC(a,{futureOr:1,type:z})
y=this.$ti
x=H.bS(a,"$isbz",y,"$asbz")
if(x){z=H.bS(a,"$isaT",y,null)
if(z)P.fl(a,this)
else P.kA(a,this)}else{w=this.c_()
H.y(a,z)
this.a=4
this.c=a
P.bL(this,w)}},
bP:[function(a,b){var z
H.e(b,"$isaz")
z=this.c_()
this.a=8
this.c=new P.ak(a,b)
P.bL(this,z)},function(a){return this.bP(a,null)},"is","$2","$1","geN",4,2,29],
$isbz:1,
p:{
kA:function(a,b){var z,y,x
b.a=1
try{a.ea(new P.kB(b),new P.kC(b),null)}catch(x){z=H.at(x)
y=H.bt(x)
P.mK(new P.kD(b,z,y))}},
fl:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isaT")
if(z>=4){y=b.c_()
b.a=a.a
b.c=a.c
P.bL(b,y)}else{y=H.e(b.c,"$isbn")
b.a=2
b.c=a
a.d7(y)}},
bL:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isak")
y=y.b
u=v.a
t=v.b
y.toString
P.cB(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bL(z.a,b)}y=z.a
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
if(p){H.e(r,"$isak")
y=y.b
u=r.a
t=r.b
y.toString
P.cB(null,null,y,u,t)
return}o=$.S
if(o==null?q!=null:o!==q)$.S=q
else o=null
y=b.c
if(y===8)new P.kH(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kG(x,b,r).$0()}else if((y&2)!==0)new P.kF(z,x,b).$0()
if(o!=null)$.S=o
y=x.b
if(!!J.K(y).$isbz){if(y.a>=4){n=H.e(t.c,"$isbn")
t.c=null
b=t.bh(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fl(y,t)
return}}m=b.b
n=H.e(m.c,"$isbn")
m.c=null
b=m.bh(n)
y=x.a
u=x.b
if(!y){H.y(u,H.w(m,0))
m.a=4
m.c=u}else{H.e(u,"$isak")
m.a=8
m.c=u}z.a=m
y=m}}}},
kz:{"^":"p:2;a,b",
$0:function(){P.bL(this.a,this.b)}},
kE:{"^":"p:2;a,b",
$0:function(){P.bL(this.b,this.a.a)}},
kB:{"^":"p:19;a",
$1:function(a){var z=this.a
z.a=0
z.cX(a)}},
kC:{"^":"p:52;a",
$2:function(a,b){this.a.bP(a,H.e(b,"$isaz"))},
$1:function(a){return this.$2(a,null)}},
kD:{"^":"p:2;a,b,c",
$0:function(){this.a.bP(this.b,this.c)}},
kH:{"^":"p:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.e7(H.l(w.d,{func:1}),null)}catch(v){y=H.at(v)
x=H.bt(v)
if(this.d){w=H.e(this.a.a.c,"$isak").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isak")
else u.b=new P.ak(y,x)
u.a=!0
return}if(!!J.K(z).$isbz){if(z instanceof P.aT&&z.gdd()>=4){if(z.gdd()===8){w=this.b
w.b=H.e(z.gfB(),"$isak")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ib(new P.kI(t),null)
w.a=!1}}},
kI:{"^":"p:35;a",
$1:function(a){return this.a}},
kG:{"^":"p:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.w(x,0)
v=H.y(this.c,w)
u=H.w(x,1)
this.a.b=x.b.b.cE(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.at(t)
y=H.bt(t)
x=this.a
x.b=new P.ak(z,y)
x.a=!0}}},
kF:{"^":"p:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isak")
w=this.c
if(w.hG(z)&&w.e!=null){v=this.b
v.b=w.hw(z)
v.a=!1}}catch(u){y=H.at(u)
x=H.bt(u)
w=H.e(this.a.a.c,"$isak")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ak(y,x)
s.a=!0}}},
fi:{"^":"b;a,0b"},
dd:{"^":"b;$ti",
gl:function(a){var z,y
z={}
y=new P.aT(0,$.S,[P.m])
z.a=0
this.hD(new P.ji(z,this),!0,new P.jj(z,y),y.geN())
return y}},
ji:{"^":"p;a,b",
$1:function(a){H.y(a,H.ar(this.b,"dd",0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.ar(this.b,"dd",0)]}}},
jj:{"^":"p:2;a,b",
$0:function(){this.b.cX(this.a.a)}},
eG:{"^":"b;$ti"},
jh:{"^":"b;"},
bh:{"^":"b;"},
ak:{"^":"b;a,b",
i:function(a){return H.k(this.a)},
$isa6:1},
lP:{"^":"b;",$isnZ:1},
ma:{"^":"p:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.et()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
l2:{"^":"lP;",
i7:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.j===$.S){a.$0()
return}P.fH(null,null,this,a,-1)}catch(x){z=H.at(x)
y=H.bt(x)
P.cB(null,null,this,z,H.e(y,"$isaz"))}},
i8:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.y(b,c)
try{if(C.j===$.S){a.$1(b)
return}P.fI(null,null,this,a,b,-1,c)}catch(x){z=H.at(x)
y=H.bt(x)
P.cB(null,null,this,z,H.e(y,"$isaz"))}},
he:function(a,b){return new P.l4(this,H.l(a,{func:1,ret:b}),b)},
c9:function(a){return new P.l3(this,H.l(a,{func:1,ret:-1}))},
dl:function(a,b){return new P.l5(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
e7:function(a,b){H.l(a,{func:1,ret:b})
if($.S===C.j)return a.$0()
return P.fH(null,null,this,a,b)},
cE:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.y(b,d)
if($.S===C.j)return a.$1(b)
return P.fI(null,null,this,a,b,c,d)},
i6:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.y(b,e)
H.y(c,f)
if($.S===C.j)return a.$2(b,c)
return P.mb(null,null,this,a,b,c,d,e,f)},
i_:function(a,b,c,d){return H.l(a,{func:1,ret:b,args:[c,d]})}},
l4:{"^":"p;a,b,c",
$0:function(){return this.a.e7(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
l3:{"^":"p:3;a,b",
$0:function(){return this.a.i7(this.b)}},
l5:{"^":"p;a,b,c",
$1:function(a){var z=this.c
return this.a.i8(this.b,H.y(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
i6:function(a,b,c,d,e){return new H.aW(0,0,[d,e])},
i7:function(a,b,c){H.bT(a)
return H.u(H.mp(a,new H.aW(0,0,[b,c])),"$isei",[b,c],"$asei")},
ej:function(a,b){return new H.aW(0,0,[a,b])},
ia:function(a,b,c,d){return new P.kP(0,0,[d])},
hU:function(a,b,c){var z,y
if(P.dy(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bR()
C.a.h(y,a)
try{P.m7(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.eH(b,H.fY(z,"$ish"),", ")+c
return y.charCodeAt(0)==0?y:y},
cW:function(a,b,c){var z,y,x
if(P.dy(a))return b+"..."+c
z=new P.an(b)
y=$.$get$bR()
C.a.h(y,a)
try{x=z
x.a=P.eH(x.gaD(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gaD()+c
y=z.gaD()
return y.charCodeAt(0)==0?y:y},
dy:function(a){var z,y
for(z=0;y=$.$get$bR(),z<y.length;++z)if(a===y[z])return!0
return!1},
m7:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gY(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.D())return
w=H.k(z.gO(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.D()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gO(z);++x
if(!z.D()){if(x<=4){C.a.h(b,H.k(t))
return}v=H.k(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gO(z);++x
for(;z.D();t=s,s=r){r=z.gO(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.k(t)
v=H.k(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
i8:function(a,b,c){var z=P.i6(null,null,null,b,c)
a.H(0,new P.i9(z,b,c))
return z},
d1:function(a){var z,y,x
z={}
if(P.dy(a))return"{...}"
y=new P.an("")
try{C.a.h($.$get$bR(),a)
x=y
x.a=x.gaD()+"{"
z.a=!0
J.dK(a,new P.ih(z,y))
z=y
z.a=z.gaD()+"}"}finally{z=$.$get$bR()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gaD()
return z.charCodeAt(0)==0?z:z},
kP:{"^":"kJ;a,0b,0c,0d,0e,0f,r,$ti",
gY:function(a){return P.fn(this,this.r,H.w(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.y(b,H.w(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dt()
this.b=z}return this.cV(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dt()
this.c=y}return this.cV(y,b)}else return this.eG(0,b)},
eG:function(a,b){var z,y,x
H.y(b,H.w(this,0))
z=this.d
if(z==null){z=P.dt()
this.d=z}y=this.cY(b)
x=z[y]
if(x==null)z[y]=[this.bO(b)]
else{if(this.d3(x,b)>=0)return!1
x.push(this.bO(b))}return!0},
V:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.d8(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.d8(this.c,b)
else return this.ft(0,b)},
ft:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.eU(z,b)
x=this.d3(y,b)
if(x<0)return!1
this.df(y.splice(x,1)[0])
return!0},
cV:function(a,b){H.y(b,H.w(this,0))
if(H.e(a[b],"$isds")!=null)return!1
a[b]=this.bO(b)
return!0},
d8:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$isds")
if(z==null)return!1
this.df(z)
delete a[b]
return!0},
cW:function(){this.r=this.r+1&67108863},
bO:function(a){var z,y
z=new P.ds(H.y(a,H.w(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cW()
return z},
df:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cW()},
cY:function(a){return J.bU(a)&0x3ffffff},
eU:function(a,b){return a[this.cY(b)]},
d3:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.T(a[y].a,b))return y
return-1},
p:{
dt:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
ds:{"^":"b;a,0b,0c"},
kQ:{"^":"b;a,b,0c,0d,$ti",
gO:function(a){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.b2(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.y(z.a,H.w(this,0))
this.c=z.b
return!0}}},
p:{
fn:function(a,b,c){var z=new P.kQ(a,b,[c])
z.c=a.e
return z}}},
kJ:{"^":"j3;"},
i9:{"^":"p:5;a,b,c",
$2:function(a,b){this.a.m(0,H.y(a,this.b),H.y(b,this.c))}},
cp:{"^":"kR;",$ish:1,$isd:1},
x:{"^":"b;$ti",
gY:function(a){return new H.ek(a,this.gl(a),0,[H.b_(this,a,"x",0)])},
F:function(a,b){return this.j(a,b)},
ig:function(a,b){var z,y,x
z=H.c([],[H.b_(this,a,"x",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.o(x)
if(!(y<x))break
C.a.m(z,y,this.j(a,y));++y}return z},
ie:function(a){return this.ig(a,!0)},
aw:function(a,b,c,d){var z
H.y(d,H.b_(this,a,"x",0))
P.aL(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.m(a,z,d)},
i:function(a){return P.cW(a,"[","]")}},
ig:{"^":"ai;"},
ih:{"^":"p:5;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.k(a)
z.a=y+": "
z.a+=H.k(b)}},
ai:{"^":"b;$ti",
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.b_(this,a,"ai",0),H.b_(this,a,"ai",1)]})
for(z=J.bv(this.gal(a));z.D();){y=z.gO(z)
b.$2(y,this.j(a,y))}},
gl:function(a){return J.au(this.gal(a))},
i:function(a){return P.d1(a)},
$isI:1},
ls:{"^":"b;$ti",
m:function(a,b,c){H.y(b,H.w(this,0))
H.y(c,H.w(this,1))
throw H.a(P.A("Cannot modify unmodifiable map"))}},
ii:{"^":"b;$ti",
j:function(a,b){return J.dJ(this.a,b)},
m:function(a,b,c){J.cJ(this.a,H.y(b,H.w(this,0)),H.y(c,H.w(this,1)))},
H:function(a,b){J.dK(this.a,H.l(b,{func:1,ret:-1,args:[H.w(this,0),H.w(this,1)]}))},
gl:function(a){return J.au(this.a)},
i:function(a){return J.ad(this.a)},
$isI:1},
f9:{"^":"lt;a,$ti"},
j5:{"^":"b;$ti",
i:function(a){return P.cW(this,"{","}")},
F:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dM("index"))
if(b<0)H.q(P.a0(b,0,null,"index",null))
for(z=P.fn(this,this.r,H.w(this,0)),y=0;z.D();){x=z.d
if(b===y)return x;++y}throw H.a(P.R(b,this,"index",null,y))},
$ish:1},
j3:{"^":"j5;"},
kR:{"^":"b+x;"},
lt:{"^":"ii+ls;$ti"}}],["","",,P,{"^":"",hi:{"^":"bW;a",
hJ:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aL(c,d,b.length,null,null,null)
z=$.$get$fj()
if(typeof d!=="number")return H.o(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.E(b,y)
if(r===37){q=s+2
if(q<=d){p=H.cF(C.b.E(b,s))
o=H.cF(C.b.E(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.f(z,n)
m=z[n]
if(m>=0){n=C.b.U("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.an("")
w.a+=C.b.q(b,x,y)
w.a+=H.cq(r)
x=s
continue}}throw H.a(P.V("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.q(b,x,d)
k=l.length
if(v>=0)P.dP(b,u,d,v,t,k)
else{j=C.f.ba(k-1,4)+1
if(j===1)throw H.a(P.V("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aR(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.dP(b,u,d,v,t,i)
else{j=C.f.ba(i,4)
if(j===1)throw H.a(P.V("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.aR(b,d,d,j===2?"==":"=")}return b},
$asbW:function(){return[[P.d,P.m],P.i]},
p:{
dP:function(a,b,c,d,e,f){if(C.f.ba(f,4)!==0)throw H.a(P.V("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.V("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.V("Invalid base64 padding, more than two '=' characters",a,b))}}},hj:{"^":"bx;a",
$asbx:function(){return[[P.d,P.m],P.i]}},bW:{"^":"b;$ti"},bx:{"^":"jh;$ti"},hJ:{"^":"bW;",
$asbW:function(){return[P.i,[P.d,P.m]]}},jX:{"^":"hJ;a",
ghq:function(){return C.F}},k3:{"^":"bx;",
aW:function(a,b,c){var z,y,x,w
z=a.length
P.aL(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.lO(0,0,x)
if(w.eT(a,b,z)!==z)w.dh(J.ha(a,z-1),0)
return C.V.bK(x,0,w.b)},
cf:function(a){return this.aW(a,0,null)},
$asbx:function(){return[P.i,[P.d,P.m]]}},lO:{"^":"b;a,b,c",
dh:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.f(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.f(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.f(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.f(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.f(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.f(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.f(z,y)
z[y]=128|a&63
return!1}},
eT:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.U(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.E(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dh(w,C.b.E(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.f(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.f(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.f(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.f(z,v)
z[v]=128|w&63}}return x}},jY:{"^":"bx;a",
aW:function(a,b,c){var z,y,x,w,v
H.u(a,"$isd",[P.m],"$asd")
z=P.jZ(!1,a,b,c)
if(z!=null)return z
y=J.au(a)
P.aL(b,c,y,null,null,null)
x=new P.an("")
w=new P.lL(!1,x,!0,0,0,0)
w.aW(a,b,y)
w.hs(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cf:function(a){return this.aW(a,0,null)},
$asbx:function(){return[[P.d,P.m],P.i]},
p:{
jZ:function(a,b,c,d){H.u(b,"$isd",[P.m],"$asd")
if(b instanceof Uint8Array)return P.k_(!1,b,c,d)
return},
k_:function(a,b,c,d){var z,y,x
z=$.$get$fd()
if(z==null)return
y=0===c
if(y&&!0)return P.dn(z,b)
x=b.length
d=P.aL(c,d,x,null,null,null)
if(y&&d===x)return P.dn(z,b)
return P.dn(z,b.subarray(c,d))},
dn:function(a,b){if(P.k1(b))return
return P.k2(a,b)},
k2:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.at(y)}return},
k1:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
k0:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.at(y)}return}}},lL:{"^":"b;a,b,c,d,e,f",
hs:function(a,b,c){var z
H.u(b,"$isd",[P.m],"$asd")
if(this.e>0){z=P.V("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
aW:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.u(a,"$isd",[P.m],"$asd")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.lN(c)
v=new P.lM(this,b,c,a)
$label0$0:for(u=J.aH(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.bF()
if((r&192)!==128){q=P.V("Bad UTF-8 encoding 0x"+C.f.b4(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.f(C.w,q)
if(z<=C.w[q]){q=P.V("Overlong encoding of 0x"+C.f.b4(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.V("Character outside valid Unicode range: 0x"+C.f.b4(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.cq(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.b9()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.K()
if(r<0){m=P.V("Negative UTF-8 code unit: -0x"+C.f.b4(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.V("Bad UTF-8 encoding 0x"+C.f.b4(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},lN:{"^":"p:51;a",
$2:function(a,b){var z,y,x,w
H.u(a,"$isd",[P.m],"$asd")
z=this.a
for(y=J.aH(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.bF()
if((w&127)!==w)return x-b}return z-b}},lM:{"^":"p:46;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.c6(this.d,a,b)}}}],["","",,P,{"^":"",
ca:function(a,b,c){var z
H.l(b,{func:1,ret:P.m,args:[P.i]})
z=H.iO(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.V(a,null,null))},
hL:function(a){var z=J.K(a)
if(!!z.$isp)return z.i(a)
return"Instance of '"+H.ba(a)+"'"},
ib:function(a,b,c,d){var z,y
H.y(b,d)
z=J.hW(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.u(z,"$isd",[d],"$asd")},
ic:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gY(a);x.D();)C.a.h(y,H.y(x.gO(x),c))
if(b)return y
return H.u(J.bA(y),"$isd",z,"$asd")},
c6:function(a,b,c){var z,y
z=P.m
H.u(a,"$ish",[z],"$ash")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.u(a,"$isb6",[z],"$asb6")
y=a.length
c=P.aL(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.K()
z=c<y}else z=!0
return H.ex(z?C.a.bK(a,b,c):a)}if(!!J.K(a).$isd8)return H.iQ(a,b,P.aL(b,c,a.length,null,null,null))
return P.jk(a,b,c)},
jk:function(a,b,c){var z,y,x,w
H.u(a,"$ish",[P.m],"$ash")
if(b<0)throw H.a(P.a0(b,0,J.au(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a0(c,b,J.au(a),null,null))
y=J.bv(a)
for(x=0;x<b;++x)if(!y.D())throw H.a(P.a0(b,0,x,null,null))
w=[]
if(z)for(;y.D();)w.push(y.gO(y))
else for(x=b;x<c;++x){if(!y.D())throw H.a(P.a0(c,b,x,null,null))
w.push(y.gO(y))}return H.ex(w)},
iV:function(a,b,c){return new H.hY(a,H.hZ(a,!1,!0,!1))},
dm:function(){var z=H.iG()
if(z!=null)return P.jQ(z,0,null)
throw H.a(P.A("'Uri.base' is not supported"))},
cj:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ad(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hL(a)},
t:function(a){return new P.fk(a)},
id:function(a,b,c,d){var z,y
H.l(b,{func:1,ret:d,args:[P.m]})
z=H.c([],[d])
C.a.sl(z,a)
for(y=0;y<a;++y)C.a.m(z,y,b.$1(y))
return z},
dI:function(a){H.mI(a)},
jQ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.E(a,b+4)^58)*3|C.b.E(a,b)^100|C.b.E(a,b+1)^97|C.b.E(a,b+2)^116|C.b.E(a,b+3)^97)>>>0
if(y===0)return P.fa(b>0||c<c?C.b.q(a,b,c):a,5,null).gec()
else if(y===32)return P.fa(C.b.q(a,z,c),0,null).gec()}x=new Array(8)
x.fixed$length=Array
w=H.c(x,[P.m])
C.a.m(w,0,0)
x=b-1
C.a.m(w,1,x)
C.a.m(w,2,x)
C.a.m(w,7,x)
C.a.m(w,3,b)
C.a.m(w,4,b)
C.a.m(w,5,c)
C.a.m(w,6,c)
if(P.fJ(a,b,c,0,w)>=14)C.a.m(w,7,c)
v=w[1]
if(typeof v!=="number")return v.ik()
if(v>=b)if(P.fJ(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.B()
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
p=!1}else{if(!(r<c&&r===s+2&&C.b.a5(a,"..",s)))n=r>s+2&&C.b.a5(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.a5(a,"file",b)){if(u<=b){if(!C.b.a5(a,"/",s)){m="file:///"
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
s=7}else if(s===r)if(b===0&&!0){a=C.b.aR(a,s,r,"/");++r;++q;++c}else{a=C.b.q(a,b,s)+"/"+C.b.q(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.a5(a,"http",b)){if(x&&t+3===s&&C.b.a5(a,"80",t+1))if(b===0&&!0){a=C.b.aR(a,t,s,"")
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
else if(v===z&&C.b.a5(a,"https",b)){if(x&&t+4===s&&C.b.a5(a,"443",t+1))if(b===0&&!0){a=C.b.aR(a,t,s,"")
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
q-=b}return new P.l7(a,v,u,t,s,r,q,o)}return P.lu(a,b,c,v,u,t,s,r,q,o)},
fc:function(a,b){var z=P.i
return C.a.ht(H.c(a.split("&"),[z]),P.ej(z,z),new P.jT(b),[P.I,P.i,P.i])},
jO:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.jP(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.U(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.ca(C.b.q(a,v,w),null,null)
if(typeof s!=="number")return s.b9()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.f(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.ca(C.b.q(a,v,c),null,null)
if(typeof s!=="number")return s.b9()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.f(y,u)
y[u]=s
return y},
fb:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.jR(a)
y=new P.jS(z,a)
if(a.length<2)z.$1("address is too short")
x=H.c([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.U(a,w)
if(s===58){if(w===b){++w
if(C.b.U(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gax(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.jO(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.f(o,l)
o[l]=0
i=l+1
if(i>=n)return H.f(o,i)
o[i]=0
l+=2}else{i=C.f.aH(k,8)
if(l<0||l>=n)return H.f(o,l)
o[l]=i
i=l+1
if(i>=n)return H.f(o,i)
o[i]=k&255
l+=2}}return o},
m1:function(){var z,y,x,w,v
z=P.id(22,new P.m3(),!0,P.Q)
y=new P.m2(z)
x=new P.m4()
w=new P.m5()
v=H.e(y.$2(0,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(14,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(15,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(1,225),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(2,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(3,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(4,229),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(5,229),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(6,231),"$isQ")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(7,231),"$isQ")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.e(y.$2(8,8),"$isQ"),"]",5)
v=H.e(y.$2(9,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(16,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(17,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(10,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(18,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(19,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(11,235),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(12,236),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.e(y.$2(13,237),"$isQ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.e(y.$2(20,245),"$isQ"),"az",21)
v=H.e(y.$2(21,245),"$isQ")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fJ:function(a,b,c,d,e){var z,y,x,w,v
H.u(e,"$isd",[P.m],"$asd")
z=$.$get$fK()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.f(z,d)
x=z[d]
w=C.b.E(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.f(x,w)
v=x[w]
d=v&31
C.a.m(e,v>>>5,y)}return d},
Z:{"^":"b;"},
"+bool":0,
aC:{"^":"b;a,b",
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.aC))return!1
return this.a===b.a&&this.b===b.b},
gP:function(a){var z=this.a
return(z^C.f.aH(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.hB(H.iN(this))
y=P.bY(H.iL(this))
x=P.bY(H.iH(this))
w=P.bY(H.iI(this))
v=P.bY(H.iK(this))
u=P.bY(H.iM(this))
t=P.hC(H.iJ(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
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
bY:function(a){if(a>=10)return""+a
return"0"+a}}},
v:{"^":"a2;"},
"+double":0,
by:{"^":"b;a",
K:function(a,b){return C.f.K(this.a,H.e(b,"$isby").a)},
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.by))return!1
return this.a===b.a},
gP:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hG()
y=this.a
if(y<0)return"-"+new P.by(0-y).i(0)
x=z.$1(C.f.a1(y,6e7)%60)
w=z.$1(C.f.a1(y,1e6)%60)
v=new P.hF().$1(y%1e6)
return""+C.f.a1(y,36e8)+":"+H.k(x)+":"+H.k(w)+"."+H.k(v)},
p:{
e7:function(a,b,c,d,e,f){return new P.by(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hF:{"^":"p:15;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hG:{"^":"p:15;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a6:{"^":"b;"},
et:{"^":"a6;",
i:function(a){return"Throw of null."}},
aI:{"^":"a6;a,b,c,d",
gbR:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbQ:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.k(z)
w=this.gbR()+y+x
if(!this.a)return w
v=this.gbQ()
u=P.cj(this.b)
return w+v+": "+H.k(u)},
p:{
bV:function(a){return new P.aI(!1,null,null,a)},
cc:function(a,b,c){return new P.aI(!0,a,b,c)},
dM:function(a){return new P.aI(!1,null,a,"Must not be null")}}},
cr:{"^":"aI;e,f,a,b,c,d",
gbR:function(){return"RangeError"},
gbQ:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.k(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.k(z)
else if(x>z)y=": Not in range "+H.k(z)+".."+H.k(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.k(z)}return y},
p:{
cs:function(a,b,c){return new P.cr(null,null,!0,a,b,"Value not in range")},
a0:function(a,b,c,d,e){return new P.cr(b,c,!0,a,d,"Invalid value")},
aL:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.o(a)
if(0<=a){if(typeof c!=="number")return H.o(c)
z=a>c}else z=!0
if(z)throw H.a(P.a0(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
z=b>c}else z=!0
if(z)throw H.a(P.a0(b,a,c,"end",f))
return b}return c}}},
hS:{"^":"aI;e,l:f>,a,b,c,d",
gbR:function(){return"RangeError"},
gbQ:function(){if(J.h6(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.k(z)},
p:{
R:function(a,b,c,d,e){var z=H.D(e!=null?e:J.au(b))
return new P.hS(b,z,!0,a,c,"Index out of range")}}},
jM:{"^":"a6;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
A:function(a){return new P.jM(a)}}},
jJ:{"^":"a6;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
c7:function(a){return new P.jJ(a)}}},
je:{"^":"a6;a",
i:function(a){return"Bad state: "+this.a}},
hu:{"^":"a6;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.k(P.cj(z))+"."},
p:{
b2:function(a){return new P.hu(a)}}},
iC:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa6:1},
eE:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa6:1},
hA:{"^":"a6;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fk:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
hQ:{"^":"b;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.k(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.q(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.E(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.b.U(w,s)
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
return y+n+l+m+"\n"+C.b.k(" ",x-o+n.length)+"^\n"},
p:{
V:function(a,b,c){return new P.hQ(a,b,c)}}},
m:{"^":"a2;"},
"+int":0,
h:{"^":"b;$ti",
gl:function(a){var z,y
z=this.gY(this)
for(y=0;z.D();)++y
return y},
F:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.dM("index"))
if(b<0)H.q(P.a0(b,0,null,"index",null))
for(z=this.gY(this),y=0;z.D();){x=z.gO(z)
if(b===y)return x;++y}throw H.a(P.R(b,this,"index",null,y))},
i:function(a){return P.hU(this,"(",")")}},
cX:{"^":"b;$ti"},
d:{"^":"b;$ti",$ish:1},
"+List":0,
I:{"^":"b;$ti"},
G:{"^":"b;",
gP:function(a){return P.b.prototype.gP.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a2:{"^":"b;"},
"+num":0,
b:{"^":";",
t:function(a,b){return this===b},
gP:function(a){return H.bG(this)},
i:function(a){return"Instance of '"+H.ba(this)+"'"},
toString:function(){return this.i(this)}},
az:{"^":"b;"},
i:{"^":"b;",$iseu:1},
"+String":0,
an:{"^":"b;aD:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isnN:1,
p:{
eH:function(a,b,c){var z=J.bv(b)
if(!z.D())return a
if(c.length===0){do a+=H.k(z.gO(z))
while(z.D())}else{a+=H.k(z.gO(z))
for(;z.D();)a=a+c+H.k(z.gO(z))}return a}}},
jT:{"^":"p:39;a",
$2:function(a,b){var z,y,x,w
z=P.i
H.u(a,"$isI",[z,z],"$asI")
H.O(b)
y=J.aH(b).dU(b,"=")
if(y===-1){if(b!=="")J.cJ(a,P.dv(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.q(b,0,y)
w=C.b.ap(b,y+1)
z=this.a
J.cJ(a,P.dv(x,0,x.length,z,!0),P.dv(w,0,w.length,z,!0))}return a}},
jP:{"^":"p:27;a",
$2:function(a,b){throw H.a(P.V("Illegal IPv4 address, "+a,this.a,b))}},
jR:{"^":"p:30;a",
$2:function(a,b){throw H.a(P.V("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
jS:{"^":"p:37;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.ca(C.b.q(this.b,a,b),null,16)
if(typeof z!=="number")return z.K()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cy:{"^":"b;bH:a<,b,c,d,e0:e>,f,r,0x,0y,0z,0Q,0ch",
ged:function(){return this.b},
gcr:function(a){var z=this.c
if(z==null)return""
if(C.b.a4(z,"["))return C.b.q(z,1,z.length-1)
return z},
gbC:function(a){var z=this.d
if(z==null)return P.fz(this.a)
return z},
gcC:function(a){var z=this.f
return z==null?"":z},
gdP:function(){var z=this.r
return z==null?"":z},
cD:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.u(h,"$isI",[P.i,null],"$asI")
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
if(x&&!C.b.a4(d,"/"))d="/"+d
g=P.du(g,0,0,h)
return new P.cy(i,j,c,f,d,g,this.r)},
e5:function(a,b){return this.cD(a,null,null,null,null,null,null,b,null,null)},
gbD:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.i
y=new P.f9(P.fc(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
gdQ:function(){return this.c!=null},
gdT:function(){return this.f!=null},
gdR:function(){return this.r!=null},
i:function(a){var z,y,x,w
z=this.y
if(z==null){z=this.a
y=z.length!==0?H.k(z)+":":""
x=this.c
w=x==null
if(!w||z==="file"){z=y+"//"
y=this.b
if(y.length!==0)z=z+H.k(y)+"@"
if(!w)z+=x
y=this.d
if(y!=null)z=z+":"+H.k(y)}else z=y
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
z=J.K(b)
if(!!z.$isdl){y=this.a
x=b.gbH()
if(y==null?x==null:y===x)if(this.c!=null===b.gdQ()){y=this.b
x=b.ged()
if(y==null?x==null:y===x){y=this.gcr(this)
x=z.gcr(b)
if(y==null?x==null:y===x){y=this.gbC(this)
x=z.gbC(b)
if(y==null?x==null:y===x)if(this.e===z.ge0(b)){y=this.f
x=y==null
if(!x===b.gdT()){if(x)y=""
if(y===z.gcC(b)){z=this.r
y=z==null
if(!y===b.gdR()){if(y)z=""
z=z===b.gdP()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gP:function(a){var z=this.z
if(z==null){z=C.b.gP(this.i(0))
this.z=z}return z},
$isdl:1,
p:{
cz:function(a,b,c,d){var z,y,x,w,v,u
H.u(a,"$isd",[P.m],"$asd")
if(c===C.k){z=$.$get$fE().b
if(typeof b!=="string")H.q(H.ah(b))
z=z.test(b)}else z=!1
if(z)return b
H.y(b,H.ar(c,"bW",0))
y=c.ghq().cf(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.f(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cq(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lu:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.lF(a,b,d)
else{if(d===b)P.bM(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.lG(a,z,e-1):""
x=P.lz(a,e,f,!1)
if(typeof f!=="number")return f.B()
w=f+1
if(typeof g!=="number")return H.o(g)
v=w<g?P.lC(P.ca(C.b.q(a,w,g),new P.lv(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lA(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.K()
t=h<i?P.du(a,h+1,i,null):null
return new P.cy(j,y,x,v,u,t,i<c?P.ly(a,i+1,c):null)},
fz:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bM:function(a,b,c){throw H.a(P.V(c,a,b))},
lC:function(a,b){if(a!=null&&a===P.fz(b))return
return a},
lz:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.U(a,b)===91){if(typeof c!=="number")return c.I()
z=c-1
if(C.b.U(a,z)!==93)P.bM(a,b,"Missing end `]` to match `[` in host")
P.fb(a,b+1,z)
return C.b.q(a,b,c).toLowerCase()}if(typeof c!=="number")return H.o(c)
y=b
for(;y<c;++y)if(C.b.U(a,y)===58){P.fb(a,b,c)
return"["+a+"]"}return P.lI(a,b,c)},
lI:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.o(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.U(a,z)
if(v===37){u=P.fG(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.an("")
s=C.b.q(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.q(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.f(C.x,t)
t=(C.x[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.an("")
if(y<z){x.a+=C.b.q(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.f(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.bM(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.U(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.an("")
s=C.b.q(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fA(v)
z+=q
y=z}}}}if(x==null)return C.b.q(a,b,c)
if(y<c){s=C.b.q(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
lF:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fC(C.b.E(a,b)))P.bM(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.E(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.f(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bM(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.q(a,b,c)
return P.lw(y?a.toLowerCase():a)},
lw:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lG:function(a,b,c){return P.bN(a,b,c,C.R)},
lA:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bN(a,b,c,C.y):C.t.j2(d,new P.lB(),P.i).A(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a4(w,"/"))w="/"+w
return P.lH(w,e,f)},
lH:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a4(a,"/"))return P.lJ(a,!z||c)
return P.lK(a)},
du:function(a,b,c,d){var z,y
z={}
H.u(d,"$isI",[P.i,null],"$asI")
if(a!=null){if(d!=null)throw H.a(P.bV("Both query and queryParameters specified"))
return P.bN(a,b,c,C.n)}if(d==null)return
y=new P.an("")
z.a=""
d.H(0,new P.lD(new P.lE(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
ly:function(a,b,c){return P.bN(a,b,c,C.n)},
fG:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.U(a,b+1)
x=C.b.U(a,z)
w=H.cF(y)
v=H.cF(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.f.aH(u,4)
if(z>=8)return H.f(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.cq(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.q(a,b,b+3).toUpperCase()
return},
fA:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.c(z,[P.m])
C.a.m(y,0,37)
C.a.m(y,1,C.b.E("0123456789ABCDEF",a>>>4))
C.a.m(y,2,C.b.E("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.c(z,[P.m])
for(v=0;--w,w>=0;x=128){u=C.f.fJ(a,6*w)&63|x
C.a.m(y,v,37)
C.a.m(y,v+1,C.b.E("0123456789ABCDEF",u>>>4))
C.a.m(y,v+2,C.b.E("0123456789ABCDEF",u&15))
v+=3}}return P.c6(y,0,null)},
bN:function(a,b,c,d){var z=P.fF(a,b,c,H.u(d,"$isd",[P.m],"$asd"),!1)
return z==null?C.b.q(a,b,c):z},
fF:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.u(d,"$isd",[P.m],"$asd")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.K()
if(typeof c!=="number")return H.o(c)
if(!(y<c))break
c$0:{v=C.b.U(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.f(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fG(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.f(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bM(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.U(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fA(v)}}if(w==null)w=new P.an("")
w.a+=C.b.q(a,x,y)
w.a+=H.k(t)
if(typeof s!=="number")return H.o(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.K()
if(x<c)w.a+=C.b.q(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fD:function(a){if(C.b.a4(a,"."))return!0
return C.b.dU(a,"/.")!==-1},
lK:function(a){var z,y,x,w,v,u,t
if(!P.fD(a))return a
z=H.c([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.T(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.f(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.A(z,"/")},
lJ:function(a,b){var z,y,x,w,v,u
if(!P.fD(a))return!b?P.fB(a):a
z=H.c([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gax(z)!==".."){if(0>=z.length)return H.f(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.f(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gax(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.f(z,0)
C.a.m(z,0,P.fB(z[0]))}return C.a.A(z,"/")},
fB:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fC(J.h7(a,0)))for(y=1;y<z;++y){x=C.b.E(a,y)
if(x===58)return C.b.q(a,0,y)+"%3A"+C.b.ap(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.f(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
lx:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.E(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.bV("Invalid URL encoding"))}}return z},
dv:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.dD(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.E(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.k!==d)v=!1
else v=!0
if(v)return y.q(a,b,c)
else u=new H.a5(y.q(a,b,c))}else{u=H.c([],[P.m])
for(x=b;x<c;++x){w=y.E(a,x)
if(w>127)throw H.a(P.bV("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.bV("Truncated URI"))
C.a.h(u,P.lx(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.u(u,"$isd",[P.m],"$asd")
return new P.jY(!1).cf(u)},
fC:function(a){var z=a|32
return 97<=z&&z<=122}}},
lv:{"^":"p:44;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.B()
throw H.a(P.V("Invalid port",this.a,z+1))}},
lB:{"^":"p:36;",
$1:function(a){return P.cz(C.T,a,C.k,!1)}},
lE:{"^":"p:17;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.k(P.cz(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.k(P.cz(C.p,b,C.k,!0))}}},
lD:{"^":"p:41;a",
$2:function(a,b){var z,y
H.O(a)
if(b==null||typeof b==="string")this.a.$2(a,H.O(b))
else for(z=J.bv(H.fY(b,"$ish")),y=this.a;z.D();)y.$2(a,H.O(z.gO(z)))}},
jN:{"^":"b;a,b,c",
gec:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
z=z[0]+1
x=C.b.dV(y,"?",z)
w=y.length
if(x>=0){v=P.bN(y,x+1,w,C.n)
w=x}else v=null
z=new P.kp(this,"data",null,null,null,P.bN(y,z,w,C.y),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
p:{
fa:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.c([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.E(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.V("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.V("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.E(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gax(z)
if(v!==44||x!==t+7||!C.b.a5(a,"base64",t+1))throw H.a(P.V("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.C.hJ(0,a,s,y)
else{r=P.fF(a,s,y,C.n,!0)
if(r!=null)a=C.b.aR(a,s,y,r)}return new P.jN(a,z,c)}}},
m3:{"^":"p:42;",
$1:function(a){return new Uint8Array(96)}},
m2:{"^":"p:43;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.f(z,a)
z=z[a]
J.hb(z,0,96,b)
return z}},
m4:{"^":"p;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.E(b,y)^96
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
m5:{"^":"p;",
$3:function(a,b,c){var z,y,x
for(z=C.b.E(b,0),y=C.b.E(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
l7:{"^":"b;a,b,c,d,e,f,r,x,0y",
gdQ:function(){return this.c>0},
gdS:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.B()
y=this.e
if(typeof y!=="number")return H.o(y)
y=z+1<y
z=y}else z=!1
return z},
gdT:function(){var z=this.f
if(typeof z!=="number")return z.K()
return z<this.r},
gdR:function(){return this.r<this.a.length},
gd4:function(){return this.b===4&&C.b.a4(this.a,"http")},
gd5:function(){return this.b===5&&C.b.a4(this.a,"https")},
gbH:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gd4()){this.x="http"
z="http"}else if(this.gd5()){this.x="https"
z="https"}else if(z===4&&C.b.a4(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a4(this.a,"package")){this.x="package"
z="package"}else{z=C.b.q(this.a,0,z)
this.x=z}return z},
ged:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.q(this.a,y,z-1):""},
gcr:function(a){var z=this.c
return z>0?C.b.q(this.a,z,this.d):""},
gbC:function(a){var z
if(this.gdS()){z=this.d
if(typeof z!=="number")return z.B()
return P.ca(C.b.q(this.a,z+1,this.e),null,null)}if(this.gd4())return 80
if(this.gd5())return 443
return 0},
ge0:function(a){return C.b.q(this.a,this.e,this.f)},
gcC:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.K()
return z<y?C.b.q(this.a,z+1,y):""},
gdP:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.ap(y,z+1):""},
gbD:function(){var z=this.f
if(typeof z!=="number")return z.K()
if(z>=this.r)return C.U
z=P.i
return new P.f9(P.fc(this.gcC(this),C.k),[z,z])},
cD:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.u(h,"$isI",[P.i,null],"$asI")
i=this.gbH()
z=i==="file"
y=this.c
j=y>0?C.b.q(this.a,this.b+3,y):""
f=this.gdS()?this.gbC(this):null
y=this.c
if(y>0)c=C.b.q(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.q(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a4(d,"/"))d="/"+d
g=P.du(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.ap(y,x+1)
return new P.cy(i,j,c,f,d,g,b)},
e5:function(a,b){return this.cD(a,null,null,null,null,null,null,b,null,null)},
gP:function(a){var z=this.y
if(z==null){z=C.b.gP(this.a)
this.y=z}return z},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.K(b)
if(!!z.$isdl)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdl:1},
kp:{"^":"cy;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
cR:function(a,b){var z=document.createElement("canvas")
return z},
hI:function(a){H.e(a,"$isa9")
return"wheel"},
hT:function(a){var z,y,x
y=document.createElement("input")
z=H.e(y,"$ised")
try{J.hd(z,a)}catch(x){H.at(x)}return z},
cw:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fm:function(a,b,c,d){var z,y
z=W.cw(W.cw(W.cw(W.cw(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fN:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.S
if(z===C.j)return a
return z.dl(a,b)},
aa:{"^":"a_;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
mP:{"^":"r;0l:length=","%":"AccessibleNodeList"},
mQ:{"^":"aa;0Z:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
mR:{"^":"aa;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
cN:{"^":"r;",$iscN:1,"%":";Blob"},
mX:{"^":"aa;0Z:type}","%":"HTMLButtonElement"},
cQ:{"^":"aa;",
bG:function(a,b,c){if(c!=null)return a.getContext(b,P.mh(c,null))
return a.getContext(b)},
eg:function(a,b){return this.bG(a,b,null)},
$iscQ:1,
"%":"HTMLCanvasElement"},
dW:{"^":"r;",$isdW:1,"%":"CanvasRenderingContext2D"},
mZ:{"^":"J;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
n0:{"^":"hz;0l:length=","%":"CSSPerspective"},
b3:{"^":"r;",$isb3:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
n1:{"^":"ko;0l:length=",
eh:function(a,b){var z=a.getPropertyValue(this.eK(a,b))
return z==null?"":z},
eK:function(a,b){var z,y
z=$.$get$e_()
y=z[b]
if(typeof y==="string")return y
y=this.fK(a,b)
z[b]=y
return y},
fK:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hD()+b
if(z in a)return z
return b},
gca:function(a){return a.bottom},
gak:function(a){return a.height},
gaO:function(a){return a.left},
gb2:function(a){return a.right},
gb6:function(a){return a.top},
gao:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hy:{"^":"b;",
gaO:function(a){return this.eh(a,"left")}},
e0:{"^":"r;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
hz:{"^":"r;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
n2:{"^":"e0;0l:length=","%":"CSSTransformValue"},
n3:{"^":"e0;0l:length=","%":"CSSUnparsedValue"},
n4:{"^":"r;0l:length=","%":"DataTransferItemList"},
n5:{"^":"r;",
i:function(a){return String(a)},
"%":"DOMException"},
n6:{"^":"kr;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.u(c,"$isab",[P.a2],"$asab")
throw H.a(P.A("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isE:1,
$asE:function(){return[[P.ab,P.a2]]},
$asx:function(){return[[P.ab,P.a2]]},
$ish:1,
$ash:function(){return[[P.ab,P.a2]]},
$isd:1,
$asd:function(){return[[P.ab,P.a2]]},
$asC:function(){return[[P.ab,P.a2]]},
"%":"ClientRectList|DOMRectList"},
hE:{"^":"r;",
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gao(a))+" x "+H.k(this.gak(a))},
t:function(a,b){var z
if(b==null)return!1
z=H.bS(b,"$isab",[P.a2],"$asab")
if(!z)return!1
z=J.aZ(b)
return a.left===z.gaO(b)&&a.top===z.gb6(b)&&this.gao(a)===z.gao(b)&&this.gak(a)===z.gak(b)},
gP:function(a){return W.fm(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gao(a)&0x1FFFFFFF,this.gak(a)&0x1FFFFFFF)},
gca:function(a){return a.bottom},
gak:function(a){return a.height},
gaO:function(a){return a.left},
gb2:function(a){return a.right},
gb6:function(a){return a.top},
gao:function(a){return a.width},
$isab:1,
$asab:function(){return[P.a2]},
"%":";DOMRectReadOnly"},
n7:{"^":"kt;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.O(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isE:1,
$asE:function(){return[P.i]},
$asx:function(){return[P.i]},
$ish:1,
$ash:function(){return[P.i]},
$isd:1,
$asd:function(){return[P.i]},
$asC:function(){return[P.i]},
"%":"DOMStringList"},
n8:{"^":"r;0l:length=","%":"DOMTokenList"},
kn:{"^":"cp;a,b",
gl:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return H.e(z[b],"$isa_")},
m:function(a,b,c){var z
H.D(b)
H.e(c,"$isa_")
z=this.b
if(b>>>0!==b||b>=z.length)return H.f(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gY:function(a){var z=this.ie(this)
return new J.av(z,z.length,0,[H.w(z,0)])},
aw:function(a,b,c,d){throw H.a(P.c7(null))},
$asx:function(){return[W.a_]},
$ash:function(){return[W.a_]},
$asd:function(){return[W.a_]}},
a_:{"^":"J;",
gce:function(a){return new W.kn(a,a.children)},
gdm:function(a){return P.iR(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a2)},
i:function(a){return a.localName},
$isa_:1,
"%":";Element"},
n9:{"^":"aa;0Z:type}","%":"HTMLEmbedElement"},
ae:{"^":"r;",$isae:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a9:{"^":"r;",
di:["el",function(a,b,c,d){H.l(c,{func:1,args:[W.ae]})
if(c!=null)this.eH(a,b,c,!1)}],
eH:function(a,b,c,d){return a.addEventListener(b,H.br(H.l(c,{func:1,args:[W.ae]}),1),!1)},
$isa9:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;fs|ft|fv|fw"},
aV:{"^":"cN;",$isaV:1,"%":"File"},
e8:{"^":"ky;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.e(c,"$isaV")
throw H.a(P.A("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.aV]},
$asx:function(){return[W.aV]},
$ish:1,
$ash:function(){return[W.aV]},
$isd:1,
$asd:function(){return[W.aV]},
$ise8:1,
$asC:function(){return[W.aV]},
"%":"FileList"},
na:{"^":"a9;0l:length=","%":"FileWriter"},
nb:{"^":"aa;0l:length=","%":"HTMLFormElement"},
b5:{"^":"r;",$isb5:1,"%":"Gamepad"},
nc:{"^":"r;0l:length=","%":"History"},
nd:{"^":"kL;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.e(c,"$isJ")
throw H.a(P.A("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.J]},
$asx:function(){return[W.J]},
$ish:1,
$ash:function(){return[W.J]},
$isd:1,
$asd:function(){return[W.J]},
$asC:function(){return[W.J]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c_:{"^":"r;0dn:data=",$isc_:1,"%":"ImageData"},
ec:{"^":"aa;",$isec:1,"%":"HTMLImageElement"},
ed:{"^":"aa;0Z:type}",$ised:1,$isdY:1,"%":"HTMLInputElement"},
dY:{"^":"b;",$isa_:1,$isa9:1,$isJ:1},
bC:{"^":"di;",$isbC:1,"%":"KeyboardEvent"},
nh:{"^":"aa;0Z:type}","%":"HTMLLinkElement"},
ni:{"^":"r;",
i:function(a){return String(a)},
"%":"Location"},
nj:{"^":"r;0l:length=","%":"MediaList"},
nk:{"^":"a9;",
di:function(a,b,c,d){H.l(c,{func:1,args:[W.ae]})
if(b==="message")a.start()
this.el(a,b,c,!1)},
"%":"MessagePort"},
nl:{"^":"kS;",
j:function(a,b){return P.aU(a.get(H.O(b)))},
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gal:function(a){var z=H.c([],[P.i])
this.H(a,new W.iv(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asai:function(){return[P.i,null]},
$isI:1,
$asI:function(){return[P.i,null]},
"%":"MIDIInputMap"},
iv:{"^":"p:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nm:{"^":"kT;",
j:function(a,b){return P.aU(a.get(H.O(b)))},
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gal:function(a){var z=H.c([],[P.i])
this.H(a,new W.iw(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asai:function(){return[P.i,null]},
$isI:1,
$asI:function(){return[P.i,null]},
"%":"MIDIOutputMap"},
iw:{"^":"p:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
b8:{"^":"r;",$isb8:1,"%":"MimeType"},
nn:{"^":"kV;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.e(c,"$isb8")
throw H.a(P.A("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.b8]},
$asx:function(){return[W.b8]},
$ish:1,
$ash:function(){return[W.b8]},
$isd:1,
$asd:function(){return[W.b8]},
$asC:function(){return[W.b8]},
"%":"MimeTypeArray"},
ax:{"^":"di;",$isax:1,"%":"PointerEvent;DragEvent|MouseEvent"},
km:{"^":"cp;a",
m:function(a,b,c){var z,y
H.D(b)
H.e(c,"$isJ")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.f(y,b)
z.replaceChild(c,y[b])},
gY:function(a){var z=this.a.childNodes
return new W.e9(z,z.length,-1,[H.b_(C.W,z,"C",0)])},
aw:function(a,b,c,d){throw H.a(P.A("Cannot fillRange on Node list"))},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return z[b]},
$asx:function(){return[W.J]},
$ash:function(){return[W.J]},
$asd:function(){return[W.J]}},
J:{"^":"a9;",
i2:function(a,b){var z,y
try{z=a.parentNode
J.h8(z,b,a)}catch(y){H.at(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.em(a):z},
fu:function(a,b,c){return a.replaceChild(b,c)},
$isJ:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
iA:{"^":"kX;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.e(c,"$isJ")
throw H.a(P.A("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.J]},
$asx:function(){return[W.J]},
$ish:1,
$ash:function(){return[W.J]},
$isd:1,
$asd:function(){return[W.J]},
$asC:function(){return[W.J]},
"%":"NodeList|RadioNodeList"},
nv:{"^":"aa;0Z:type}","%":"HTMLOListElement"},
nw:{"^":"aa;0Z:type}","%":"HTMLObjectElement"},
b9:{"^":"r;0l:length=",$isb9:1,"%":"Plugin"},
nz:{"^":"l0;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.e(c,"$isb9")
throw H.a(P.A("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.b9]},
$asx:function(){return[W.b9]},
$ish:1,
$ash:function(){return[W.b9]},
$isd:1,
$asd:function(){return[W.b9]},
$asC:function(){return[W.b9]},
"%":"PluginArray"},
nB:{"^":"r;0Z:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
nC:{"^":"l6;",
j:function(a,b){return P.aU(a.get(H.O(b)))},
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gal:function(a){var z=H.c([],[P.i])
this.H(a,new W.j0(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asai:function(){return[P.i,null]},
$isI:1,
$asI:function(){return[P.i,null]},
"%":"RTCStatsReport"},
j0:{"^":"p:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nE:{"^":"aa;0Z:type}","%":"HTMLScriptElement"},
nG:{"^":"aa;0l:length=","%":"HTMLSelectElement"},
bb:{"^":"a9;",$isbb:1,"%":"SourceBuffer"},
nH:{"^":"ft;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.e(c,"$isbb")
throw H.a(P.A("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bb]},
$asx:function(){return[W.bb]},
$ish:1,
$ash:function(){return[W.bb]},
$isd:1,
$asd:function(){return[W.bb]},
$asC:function(){return[W.bb]},
"%":"SourceBufferList"},
nI:{"^":"aa;0Z:type}","%":"HTMLSourceElement"},
bc:{"^":"r;",$isbc:1,"%":"SpeechGrammar"},
nJ:{"^":"l9;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.e(c,"$isbc")
throw H.a(P.A("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bc]},
$asx:function(){return[W.bc]},
$ish:1,
$ash:function(){return[W.bc]},
$isd:1,
$asd:function(){return[W.bc]},
$asC:function(){return[W.bc]},
"%":"SpeechGrammarList"},
bd:{"^":"r;0l:length=",$isbd:1,"%":"SpeechRecognitionResult"},
nL:{"^":"lc;",
j:function(a,b){return a.getItem(H.O(b))},
m:function(a,b,c){a.setItem(b,H.O(c))},
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.i,P.i]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gal:function(a){var z=H.c([],[P.i])
this.H(a,new W.jg(z))
return z},
gl:function(a){return a.length},
$asai:function(){return[P.i,P.i]},
$isI:1,
$asI:function(){return[P.i,P.i]},
"%":"Storage"},
jg:{"^":"p:17;a",
$2:function(a,b){return C.a.h(this.a,a)}},
nO:{"^":"aa;0Z:type}","%":"HTMLStyleElement"},
be:{"^":"r;",$isbe:1,"%":"CSSStyleSheet|StyleSheet"},
de:{"^":"aa;",$isde:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bf:{"^":"a9;",$isbf:1,"%":"TextTrack"},
bg:{"^":"a9;",$isbg:1,"%":"TextTrackCue|VTTCue"},
nR:{"^":"lj;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.e(c,"$isbg")
throw H.a(P.A("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bg]},
$asx:function(){return[W.bg]},
$ish:1,
$ash:function(){return[W.bg]},
$isd:1,
$asd:function(){return[W.bg]},
$asC:function(){return[W.bg]},
"%":"TextTrackCueList"},
nS:{"^":"fw;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.e(c,"$isbf")
throw H.a(P.A("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bf]},
$asx:function(){return[W.bf]},
$ish:1,
$ash:function(){return[W.bf]},
$isd:1,
$asd:function(){return[W.bf]},
$asC:function(){return[W.bf]},
"%":"TextTrackList"},
nT:{"^":"r;0l:length=","%":"TimeRanges"},
bi:{"^":"r;",$isbi:1,"%":"Touch"},
bj:{"^":"di;",$isbj:1,"%":"TouchEvent"},
nU:{"^":"lp;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.e(c,"$isbi")
throw H.a(P.A("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bi]},
$asx:function(){return[W.bi]},
$ish:1,
$ash:function(){return[W.bi]},
$isd:1,
$asd:function(){return[W.bi]},
$asC:function(){return[W.bi]},
"%":"TouchList"},
nV:{"^":"r;0l:length=","%":"TrackDefaultList"},
di:{"^":"ae;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
nX:{"^":"r;",
i:function(a){return String(a)},
"%":"URL"},
nY:{"^":"a9;0l:length=","%":"VideoTrackList"},
bK:{"^":"ax;",
ghm:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.A("deltaY is not supported"))},
ghl:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.A("deltaX is not supported"))},
$isbK:1,
"%":"WheelEvent"},
kf:{"^":"a9;",
fv:function(a,b){return a.requestAnimationFrame(H.br(H.l(b,{func:1,ret:-1,args:[P.a2]}),1))},
eS:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
o2:{"^":"lR;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.e(c,"$isb3")
throw H.a(P.A("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.b3]},
$asx:function(){return[W.b3]},
$ish:1,
$ash:function(){return[W.b3]},
$isd:1,
$asd:function(){return[W.b3]},
$asC:function(){return[W.b3]},
"%":"CSSRuleList"},
o3:{"^":"hE;",
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
t:function(a,b){var z
if(b==null)return!1
z=H.bS(b,"$isab",[P.a2],"$asab")
if(!z)return!1
z=J.aZ(b)
return a.left===z.gaO(b)&&a.top===z.gb6(b)&&a.width===z.gao(b)&&a.height===z.gak(b)},
gP:function(a){return W.fm(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gak:function(a){return a.height},
gao:function(a){return a.width},
"%":"ClientRect|DOMRect"},
o5:{"^":"lT;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.e(c,"$isb5")
throw H.a(P.A("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.b5]},
$asx:function(){return[W.b5]},
$ish:1,
$ash:function(){return[W.b5]},
$isd:1,
$asd:function(){return[W.b5]},
$asC:function(){return[W.b5]},
"%":"GamepadList"},
o6:{"^":"lV;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.e(c,"$isJ")
throw H.a(P.A("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.J]},
$asx:function(){return[W.J]},
$ish:1,
$ash:function(){return[W.J]},
$isd:1,
$asd:function(){return[W.J]},
$asC:function(){return[W.J]},
"%":"MozNamedAttrMap|NamedNodeMap"},
o7:{"^":"lX;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.e(c,"$isbd")
throw H.a(P.A("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.bd]},
$asx:function(){return[W.bd]},
$ish:1,
$ash:function(){return[W.bd]},
$isd:1,
$asd:function(){return[W.bd]},
$asC:function(){return[W.bd]},
"%":"SpeechRecognitionResultList"},
o8:{"^":"lZ;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.D(b)
H.e(c,"$isbe")
throw H.a(P.A("Cannot assign element of immutable List."))},
F:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isE:1,
$asE:function(){return[W.be]},
$asx:function(){return[W.be]},
$ish:1,
$ash:function(){return[W.be]},
$isd:1,
$asd:function(){return[W.be]},
$asC:function(){return[W.be]},
"%":"StyleSheetList"},
ku:{"^":"dd;a,b,c,$ti",
hD:function(a,b,c,d){var z=H.w(this,0)
H.l(a,{func:1,ret:-1,args:[z]})
H.l(c,{func:1,ret:-1})
return W.a1(this.a,this.b,a,!1,z)}},
o4:{"^":"ku;a,b,c,$ti"},
kv:{"^":"eG;a,b,c,d,e,$ti",
fO:function(){var z=this.d
if(z!=null&&this.a<=0)J.h9(this.b,this.c,z,!1)},
p:{
a1:function(a,b,c,d,e){var z=c==null?null:W.fN(new W.kw(c),W.ae)
z=new W.kv(0,a,b,z,!1,[e])
z.fO()
return z}}},
kw:{"^":"p:7;a",
$1:function(a){return this.a.$1(H.e(a,"$isae"))}},
C:{"^":"b;$ti",
gY:function(a){return new W.e9(a,this.gl(a),-1,[H.b_(this,a,"C",0)])},
aw:function(a,b,c,d){H.y(d,H.b_(this,a,"C",0))
throw H.a(P.A("Cannot modify an immutable List."))}},
e9:{"^":"b;a,b,c,0d,$ti",
D:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.dJ(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gO:function(a){return this.d}},
ko:{"^":"r+hy;"},
kq:{"^":"r+x;"},
kr:{"^":"kq+C;"},
ks:{"^":"r+x;"},
kt:{"^":"ks+C;"},
kx:{"^":"r+x;"},
ky:{"^":"kx+C;"},
kK:{"^":"r+x;"},
kL:{"^":"kK+C;"},
kS:{"^":"r+ai;"},
kT:{"^":"r+ai;"},
kU:{"^":"r+x;"},
kV:{"^":"kU+C;"},
kW:{"^":"r+x;"},
kX:{"^":"kW+C;"},
l_:{"^":"r+x;"},
l0:{"^":"l_+C;"},
l6:{"^":"r+ai;"},
fs:{"^":"a9+x;"},
ft:{"^":"fs+C;"},
l8:{"^":"r+x;"},
l9:{"^":"l8+C;"},
lc:{"^":"r+ai;"},
li:{"^":"r+x;"},
lj:{"^":"li+C;"},
fv:{"^":"a9+x;"},
fw:{"^":"fv+C;"},
lo:{"^":"r+x;"},
lp:{"^":"lo+C;"},
lQ:{"^":"r+x;"},
lR:{"^":"lQ+C;"},
lS:{"^":"r+x;"},
lT:{"^":"lS+C;"},
lU:{"^":"r+x;"},
lV:{"^":"lU+C;"},
lW:{"^":"r+x;"},
lX:{"^":"lW+C;"},
lY:{"^":"r+x;"},
lZ:{"^":"lY+C;"}}],["","",,P,{"^":"",
mk:function(a){var z,y
z=J.K(a)
if(!!z.$isc_){y=z.gdn(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fy(a.data,a.height,a.width)},
mj:function(a){if(a instanceof P.fy)return{data:a.a,height:a.b,width:a.c}
return a},
aU:function(a){var z,y,x,w,v
if(a==null)return
z=P.ej(P.i,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w){v=H.O(y[w])
z.m(0,v,a[v])}return z},
mh:function(a,b){var z={}
a.H(0,new P.mi(z))
return z},
e6:function(){var z=$.e5
if(z==null){z=J.cK(window.navigator.userAgent,"Opera",0)
$.e5=z}return z},
hD:function(){var z,y
z=$.e2
if(z!=null)return z
y=$.e3
if(y==null){y=J.cK(window.navigator.userAgent,"Firefox",0)
$.e3=y}if(y)z="-moz-"
else{y=$.e4
if(y==null){y=!P.e6()&&J.cK(window.navigator.userAgent,"Trident/",0)
$.e4=y}if(y)z="-ms-"
else z=P.e6()?"-o-":"-webkit-"}$.e2=z
return z},
lf:{"^":"b;",
dN:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
cG:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.K(a)
if(!!y.$isaC)return new Date(a.a)
if(!!y.$isiU)throw H.a(P.c7("structured clone of RegExp"))
if(!!y.$isaV)return a
if(!!y.$iscN)return a
if(!!y.$ise8)return a
if(!!y.$isc_)return a
if(!!y.$iser||!!y.$isd7)return a
if(!!y.$isI){x=this.dN(a)
w=this.b
if(x>=w.length)return H.f(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.m(w,x,v)
y.H(a,new P.lh(z,this))
return z.a}if(!!y.$isd){x=this.dN(a)
z=this.b
if(x>=z.length)return H.f(z,x)
v=z[x]
if(v!=null)return v
return this.hj(a,x)}throw H.a(P.c7("structured clone of other type"))},
hj:function(a,b){var z,y,x,w
z=J.aH(a)
y=z.gl(a)
x=new Array(y)
C.a.m(this.b,b,x)
if(typeof y!=="number")return H.o(y)
w=0
for(;w<y;++w)C.a.m(x,w,this.cG(z.j(a,w)))
return x}},
lh:{"^":"p:5;a,b",
$2:function(a,b){this.a.a[a]=this.b.cG(b)}},
fy:{"^":"b;dn:a>,b,c",$isc_:1},
mi:{"^":"p:5;a",
$2:function(a,b){this.a[a]=b}},
lg:{"^":"lf;a,b"},
hN:{"^":"cp;a,b",
gbf:function(){var z,y,x
z=this.b
y=H.ar(z,"x",0)
x=W.a_
return new H.ij(new H.kd(z,H.l(new P.hO(),{func:1,ret:P.Z,args:[y]}),[y]),H.l(new P.hP(),{func:1,ret:x,args:[y]}),[y,x])},
m:function(a,b,c){var z
H.D(b)
H.e(c,"$isa_")
z=this.gbf()
J.hc(z.b.$1(J.cL(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aw:function(a,b,c,d){throw H.a(P.A("Cannot fillRange on filtered list"))},
gl:function(a){return J.au(this.gbf().a)},
j:function(a,b){var z=this.gbf()
return z.b.$1(J.cL(z.a,b))},
gY:function(a){var z=P.ic(this.gbf(),!1,W.a_)
return new J.av(z,z.length,0,[H.w(z,0)])},
$asx:function(){return[W.a_]},
$ash:function(){return[W.a_]},
$asd:function(){return[W.a_]}},
hO:{"^":"p:26;",
$1:function(a){return!!J.K(H.e(a,"$isJ")).$isa_}},
hP:{"^":"p:25;",
$1:function(a){return H.j(H.e(a,"$isJ"),"$isa_")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cx:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kM:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
l1:{"^":"b;$ti",
gb2:function(a){var z=this.a
if(typeof z!=="number")return z.B()
return H.y(z+this.c,H.w(this,0))},
gca:function(a){var z=this.b
if(typeof z!=="number")return z.B()
return H.y(z+this.d,H.w(this,0))},
i:function(a){return"Rectangle ("+H.k(this.a)+", "+H.k(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bS(b,"$isab",[P.a2],"$asab")
if(!z)return!1
z=this.a
y=J.aZ(b)
x=y.gaO(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb6(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.B()
w=H.w(this,0)
if(H.y(z+this.c,w)===y.gb2(b)){if(typeof x!=="number")return x.B()
z=H.y(x+this.d,w)===y.gca(b)}else z=!1}else z=!1}else z=!1
return z},
gP:function(a){var z,y,x,w,v
z=this.a
y=J.bU(z)
x=this.b
w=J.bU(x)
if(typeof z!=="number")return z.B()
v=H.w(this,0)
z=H.y(z+this.c,v)
if(typeof x!=="number")return x.B()
v=H.y(x+this.d,v)
return P.kM(P.cx(P.cx(P.cx(P.cx(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
ab:{"^":"l1;aO:a>,b6:b>,ao:c>,ak:d>,$ti",p:{
iR:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.K()
if(c<0)z=-c*0
else z=c
H.y(z,e)
if(typeof d!=="number")return d.K()
if(d<0)y=-d*0
else y=d
return new P.ab(a,b,z,H.y(y,e),[e])}}}}],["","",,P,{"^":"",bD:{"^":"r;",$isbD:1,"%":"SVGLength"},ng:{"^":"kO;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.e(c,"$isbD")
throw H.a(P.A("Cannot assign element of immutable List."))},
F:function(a,b){return this.j(a,b)},
$asx:function(){return[P.bD]},
$ish:1,
$ash:function(){return[P.bD]},
$isd:1,
$asd:function(){return[P.bD]},
$asC:function(){return[P.bD]},
"%":"SVGLengthList"},bF:{"^":"r;",$isbF:1,"%":"SVGNumber"},nu:{"^":"kZ;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.e(c,"$isbF")
throw H.a(P.A("Cannot assign element of immutable List."))},
F:function(a,b){return this.j(a,b)},
$asx:function(){return[P.bF]},
$ish:1,
$ash:function(){return[P.bF]},
$isd:1,
$asd:function(){return[P.bF]},
$asC:function(){return[P.bF]},
"%":"SVGNumberList"},nA:{"^":"r;0l:length=","%":"SVGPointList"},nF:{"^":"eI;0Z:type}","%":"SVGScriptElement"},nM:{"^":"le;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.O(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
F:function(a,b){return this.j(a,b)},
$asx:function(){return[P.i]},
$ish:1,
$ash:function(){return[P.i]},
$isd:1,
$asd:function(){return[P.i]},
$asC:function(){return[P.i]},
"%":"SVGStringList"},nP:{"^":"eI;0Z:type}","%":"SVGStyleElement"},eI:{"^":"a_;",
gce:function(a){return new P.hN(a,new W.km(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bH:{"^":"r;",$isbH:1,"%":"SVGTransform"},nW:{"^":"lr;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){H.D(b)
H.e(c,"$isbH")
throw H.a(P.A("Cannot assign element of immutable List."))},
F:function(a,b){return this.j(a,b)},
$asx:function(){return[P.bH]},
$ish:1,
$ash:function(){return[P.bH]},
$isd:1,
$asd:function(){return[P.bH]},
$asC:function(){return[P.bH]},
"%":"SVGTransformList"},kN:{"^":"r+x;"},kO:{"^":"kN+C;"},kY:{"^":"r+x;"},kZ:{"^":"kY+C;"},ld:{"^":"r+x;"},le:{"^":"ld+C;"},lq:{"^":"r+x;"},lr:{"^":"lq+C;"}}],["","",,P,{"^":"",Q:{"^":"b;",$ish:1,
$ash:function(){return[P.m]},
$isd:1,
$asd:function(){return[P.m]},
$isjz:1}}],["","",,P,{"^":"",mS:{"^":"r;0l:length=","%":"AudioBuffer"},dO:{"^":"a9;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},mT:{"^":"kl;",
j:function(a,b){return P.aU(a.get(H.O(b)))},
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.i,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aU(y.value[1]))}},
gal:function(a){var z=H.c([],[P.i])
this.H(a,new P.hg(z))
return z},
gl:function(a){return a.size},
m:function(a,b,c){throw H.a(P.A("Not supported"))},
$asai:function(){return[P.i,null]},
$isI:1,
$asI:function(){return[P.i,null]},
"%":"AudioParamMap"},hg:{"^":"p:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},hh:{"^":"dO;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},mU:{"^":"a9;0l:length=","%":"AudioTrackList"},hk:{"^":"a9;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mV:{"^":"dO;0Z:type}","%":"BiquadFilterNode"},nx:{"^":"hk;0l:length=","%":"OfflineAudioContext"},ny:{"^":"hh;0Z:type}","%":"Oscillator|OscillatorNode"},kl:{"^":"r+ai;"}}],["","",,P,{"^":"",dc:{"^":"r;",
ia:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.K(g)
if(!!z.$isc_)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.mj(g))
return}if(!!z.$isec)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.bV("Incorrect number or type of arguments"))},
i9:function(a,b,c,d,e,f,g){return this.ia(a,b,c,d,e,f,g,null,null,null)},
$isdc:1,
"%":"WebGLRenderingContext"},jH:{"^":"r;",$isjH:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",nK:{"^":"lb;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.R(b,a,null,null,null))
return P.aU(a.item(b))},
m:function(a,b,c){H.D(b)
H.e(c,"$isI")
throw H.a(P.A("Cannot assign element of immutable List."))},
F:function(a,b){return this.j(a,b)},
$asx:function(){return[[P.I,,,]]},
$ish:1,
$ash:function(){return[[P.I,,,]]},
$isd:1,
$asd:function(){return[[P.I,,,]]},
$asC:function(){return[[P.I,,,]]},
"%":"SQLResultSetRowList"},la:{"^":"r+x;"},lb:{"^":"la+C;"}}],["","",,O,{"^":"",al:{"^":"b;0a,0b,0c,0d,$ti",
bc:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
bI:function(a,b,c){var z=H.ar(this,"al",0)
H.l(b,{func:1,ret:P.Z,args:[[P.h,z]]})
z={func:1,ret:-1,args:[P.m,[P.h,z]]}
H.l(a,z)
H.l(c,z)
this.b=b
this.c=a
this.d=c},
bb:function(a,b){return this.bI(a,null,b)},
bY:function(a){var z
H.u(a,"$ish",[H.ar(this,"al",0)],"$ash")
z=this.b
if(z!=null)return z.$1(a)
return!0},
cO:function(a,b){var z
H.u(b,"$ish",[H.ar(this,"al",0)],"$ash")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gY:function(a){var z=this.a
return new J.av(z,z.length,0,[H.w(z,0)])},
F:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.ar(this,"al",0)
H.y(b,z)
z=[z]
if(this.bY(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.cO(x,H.c([b],z))}},
c4:function(a,b){var z,y
H.u(b,"$ish",[H.ar(this,"al",0)],"$ash")
if(this.bY(b)){z=this.a
y=z.length
C.a.c4(z,b)
this.cO(y,b)}},
$ish:1,
p:{
cS:function(a){var z=new O.al([a])
z.bc(a)
return z}}},d3:{"^":"b;0a,0b",
gl:function(a){return this.a.length},
gu:function(){var z=this.b
if(z==null){z=D.L()
this.b=z}return z},
ew:function(a){var z=this.b
if(!(z==null))z.v(a)},
az:function(){return this.ew(null)},
gR:function(a){var z=this.a
if(z.length>0)return C.a.gax(z)
else return V.c4()},
e3:function(a){var z=this.a
if(a==null)C.a.h(z,V.c4())
else C.a.h(z,a)
this.az()},
cB:function(){var z=this.a
if(z.length>0){z.pop()
this.az()}}}}],["","",,E,{"^":"",cM:{"^":"b;"},aJ:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a0:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
cU:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.av(z,z.length,0,[H.w(z,0)]);z.D();){y=z.d
if(y.f==null)y.cU()}},
sbJ:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gu().V(0,this.gdZ())
y=this.c
if(y!=null)y.gu().h(0,this.gdZ())
x=new D.F("shape",z,this.c,this,[F.eC])
x.b=!0
this.a3(x)}},
scF:function(a){var z,y,x
z=this.f
if(z==null?a!=null:z!==a){if(z!=null)z.gu().V(0,this.ge_())
y=this.f
this.f=a
if(a!=null)a.gu().h(0,this.ge_())
this.cU()
x=new D.F("technique",y,this.f,this,[O.df])
x.b=!0
this.a3(x)}},
saP:function(a){var z,y
if(!J.T(this.r,a)){z=this.r
if(z!=null)z.gu().V(0,this.gdY())
if(a!=null)a.gu().h(0,this.gdY())
this.r=a
y=new D.F("mover",z,a,this,[U.a7])
y.b=!0
this.a3(y)}},
ab:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.ay(0,b,this):null
if(!J.T(y,this.x)){x=this.x
this.x=y
w=new D.F("matrix",x,y,this,[V.am])
w.b=!0
this.a3(w)}z=this.f
if(z!=null)z.ab(0,b)
for(z=this.y.a,z=new J.av(z,z.length,0,[H.w(z,0)]);z.D();)z.d.ab(0,b)},
aQ:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gR(z))
else C.a.h(z.a,y.k(0,z.gR(z)))
z.az()
a.e4(this.f)
z=a.dy
x=(z&&C.a).gax(z)
if(x!=null&&this.d!=null)x.i1(a,this)
for(z=this.y.a,z=new J.av(z,z.length,0,[H.w(z,0)]);z.D();)z.d.aQ(a)
a.e2()
a.dx.cB()},
gu:function(){var z=this.z
if(z==null){z=D.L()
this.z=z}return z},
a3:function(a){var z=this.z
if(!(z==null))z.v(a)},
a2:function(){return this.a3(null)},
hO:[function(a){H.e(a,"$isz")
this.e=null
this.a3(a)},function(){return this.hO(null)},"j8","$1","$0","gdZ",0,2,0],
hP:[function(a){this.a3(H.e(a,"$isz"))},function(){return this.hP(null)},"j9","$1","$0","ge_",0,2,0],
hN:[function(a){this.a3(H.e(a,"$isz"))},function(){return this.hN(null)},"j7","$1","$0","gdY",0,2,0],
hL:[function(a){this.a3(H.e(a,"$isz"))},function(){return this.hL(null)},"j5","$1","$0","gdX",0,2,0],
j4:[function(a,b){var z,y,x,w,v,u,t,s
H.u(b,"$ish",[E.aJ],"$ash")
for(z=b.length,y=this.gdX(),x={func:1,ret:-1,args:[D.z]},w=[x],v=0;v<b.length;b.length===z||(0,H.B)(b),++v){u=b[v]
if(u!=null){if(u.ga0()==null){t=new D.b4()
t.d=0
u.sa0(t)}t=u.ga0()
t.toString
H.l(y,x)
s=t.a
if(s==null){s=H.c([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.a2()},"$2","ghK",8,0,8],
j6:[function(a,b){var z,y,x,w,v
H.u(b,"$ish",[E.aJ],"$ash")
for(z=b.length,y=this.gdX(),x=0;x<b.length;b.length===z||(0,H.B)(b),++x){w=b[x]
if(w!=null){if(w.ga0()==null){v=new D.b4()
v.d=0
w.sa0(v)}w.ga0().V(0,y)}}this.a2()},"$2","ghM",8,0,8],
$isaK:1,
p:{
ci:function(a,b,c,d,e,f){var z,y
z=new E.aJ()
z.a=d
z.b=!0
y=O.cS(E.aJ)
z.y=y
y.bb(z.ghK(),z.ghM())
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
z.sbJ(0,e)
z.scF(f)
z.saP(c)
return z}}},iW:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
er:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.aC(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.d3()
y=[V.am]
z.a=H.c([],y)
z.gu().h(0,new E.iY(this))
this.cy=z
z=new O.d3()
z.a=H.c([],y)
z.gu().h(0,new E.iZ(this))
this.db=z
z=new O.d3()
z.a=H.c([],y)
z.gu().h(0,new E.j_(this))
this.dx=z
z=H.c([],[O.df])
this.dy=z
C.a.h(z,null)
this.fr=new H.aW(0,0,[P.i,A.eB])},
ghZ:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gR(z)
y=this.db
y=z.k(0,y.gR(y))
this.z=y
z=y}return z},
e4:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gax(z):a;(z&&C.a).h(z,y)},
e2:function(){var z=this.dy
if(z.length>1)z.pop()},
p:{
iX:function(a,b){var z=new E.iW(a,b)
z.er(a,b)
return z}}},iY:{"^":"p:9;a",
$1:function(a){var z
H.e(a,"$isz")
z=this.a
z.z=null
z.ch=null}},iZ:{"^":"p:9;a",
$1:function(a){var z
H.e(a,"$isz")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},j_:{"^":"p:9;a",
$1:function(a){var z
H.e(a,"$isz")
z=this.a
z.ch=null
z.cx=null}},jr:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a0:x@,0y,0z,0Q,0ch,0cx,0cy",
gu:function(){var z=this.x
if(z==null){z=D.L()
this.x=z}return z},
ey:[function(a){var z
H.e(a,"$isz")
z=this.x
if(!(z==null))z.v(a)
this.i4()},function(){return this.ey(null)},"ex","$1","$0","gcP",0,2,0],
ghv:function(){var z,y,x
z=Date.now()
y=C.f.a1(P.e7(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.aC(z,!1)
return x/y},
d9:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.o(z)
x=C.i.cq(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.i.cq(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.eN(C.q,this.gi3())},
i4:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.jt(this),{func:1,ret:-1,args:[P.a2]})
C.B.eS(z)
C.B.fv(z,W.fN(y,P.a2))}},"$0","gi3",0,0,3],
i0:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.d9()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aC(w,!1)
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
this.d.aQ(this.e)}}catch(v){z=H.at(v)
y=H.bt(v)
P.dI("Error: "+H.k(z))
P.dI("Stack: "+H.k(y))
throw H.a(z)}},
p:{
js:function(a,b,c,d,e){var z,y,x,w
z=J.K(a)
if(!!z.$iscQ)return E.eM(a,!0,!0,!0,!1)
y=W.cR(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gce(a).h(0,y)
w=E.eM(y,!0,!0,!0,!1)
w.a=a
return w},
eM:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jr()
y=P.i7(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.i,null)
x=C.l.bG(a,"webgl",y)
x=H.e(x==null?C.l.bG(a,"experimental-webgl",y):x,"$isdc")
if(x==null)H.q(P.t("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.iX(x,a)
w=new T.jm(x)
w.b=H.D(x.getParameter(3379))
w.c=H.D(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.jU(a)
v=new X.i1()
v.c=new X.a4(!1,!1,!1)
v.d=P.ia(null,null,null,P.m)
w.b=v
v=new X.ix(w)
v.f=0
v.r=new V.X(0,0)
v.x=new V.X(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.ie(w)
v.r=0
v.x=new V.X(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jw(w)
v.e=0
v.f=new V.X(0,0)
v.r=new V.X(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.eG,P.b]])
w.z=v
u=document
t=W.ax
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a1(u,"contextmenu",H.l(w.gf9(),s),!1,t))
v=w.z
r=W.ae
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a1(a,"focus",H.l(w.gfc(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a1(a,"blur",H.l(w.gf5(),q),!1,r))
v=w.z
p=W.bC
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a1(u,"keyup",H.l(w.gbX(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a1(u,"keydown",H.l(w.gbM(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a1(a,"mousedown",H.l(w.gfh(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a1(a,"mouseup",H.l(w.gfj(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a1(a,"mousemove",H.l(w.gfi(),s),!1,t))
p=w.z
o=W.bK;(p&&C.a).h(p,W.a1(a,H.O(W.hI(a)),H.l(w.gfk(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a1(u,"mousemove",H.l(w.gfa(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a1(u,"mouseup",H.l(w.gfb(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a1(u,"pointerlockchange",H.l(w.gfl(),q),!1,r))
r=w.z
q=W.bj
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a1(a,"touchstart",H.l(w.gfs(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a1(a,"touchend",H.l(w.gfp(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a1(a,"touchmove",H.l(w.gfq(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.aC(Date.now(),!1)
z.cy=0
z.d9()
return z}}},jt:{"^":"p:31;a",
$1:function(a){var z
H.mH(a)
z=this.a
if(z.ch){z.ch=!1
z.i0()}}}}],["","",,Z,{"^":"",fh:{"^":"b;a,b",p:{
dq:function(a,b,c){var z
H.u(c,"$isd",[P.m],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bo(c)),35044)
a.bindBuffer(b,null)
return new Z.fh(b,z)}}},dS:{"^":"cM;a,b,c,d,e",
c8:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.at(y)
x=P.t('Failed to bind buffer attribute "'+J.ad(this.a)+'": '+H.k(z))
throw H.a(x)}},
i:function(a){return"["+J.ad(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.k(this.e)+"]"}},kc:{"^":"b;a",$ismW:1},dT:{"^":"b;a,0b,c,d",
aM:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
c8:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].c8(a)},
ii:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aQ:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.f(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.i]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ad(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.A(y,", ")+"\nAttrs:   "+C.a.A(u,", ")},
$isnQ:1},cl:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.ba(this.c)+"'")+"]"}},bl:{"^":"b;a",
gcL:function(a){var z,y
z=this.a
y=(z&$.$get$aQ().a)!==0?3:0
if((z&$.$get$aP().a)!==0)y+=3
if((z&$.$get$aO().a)!==0)y+=3
if((z&$.$get$aR().a)!==0)y+=2
if((z&$.$get$aS().a)!==0)y+=3
if((z&$.$get$bI().a)!==0)y+=3
if((z&$.$get$bJ().a)!==0)y+=4
if((z&$.$get$bm().a)!==0)++y
return(z&$.$get$aN().a)!==0?y+4:y},
hd:function(a){var z,y,x
z=$.$get$aQ()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aP()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aO()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bI()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bJ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bm()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aN()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fg()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bl))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.i])
y=this.a
if((y&$.$get$aQ().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aP().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aO().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aR().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aS().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bI().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bJ().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bm().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aN().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.A(z,"|")},
p:{
aq:function(a){return new Z.bl(a)}}}}],["","",,D,{"^":"",dX:{"^":"b;"},b4:{"^":"b;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.z]}
H.l(b,z)
y=this.a
if(y==null){z=H.c([],[z])
this.a=z}else z=y
C.a.h(z,b)},
V:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.z]})
z=this.a
z=z==null?null:C.a.ad(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).V(z,b)||!1}else y=!1
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
if(a==null){a=new D.z(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.H(y,new D.hM(z))
return!0},
ho:function(){return this.v(null)},
i5:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.v(y)}}},
an:function(a){return this.i5(a,!0,!1)},
p:{
L:function(){var z=new D.b4()
z.d=0
return z}}},hM:{"^":"p:32;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.z]})
z=this.a.a
z.b
a.$1(z)}},z:{"^":"b;a,0b"},c0:{"^":"z;c,d,a,0b,$ti"},c1:{"^":"z;c,d,a,0b,$ti"},F:{"^":"z;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}}],["","",,X,{"^":"",dU:{"^":"b;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dU))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)},
p:{"^":"mY<"}},U:{"^":"b;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.U))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}},co:{"^":"z;c,a,0b"},i0:{"^":"al;0e,0f,0r,0x,0y,0a,0b,0c,0d",
gu:function(){var z=this.e
if(z==null){z=D.L()
this.e=z}return z},
gaN:function(){var z=this.y
if(z==null){z=D.L()
this.y=z}return z},
cQ:function(a){var z=this.e
if(!(z==null))z.v(a)},
im:[function(a){var z,y,x
H.u(a,"$ish",[X.U],"$ash")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.B)(a),++y){x=a[y]
if(C.a.ad(this.a,x))return!1}return!0},"$1","geB",4,0,33],
il:[function(a,b){var z=X.U
z=new D.c0(a,H.u(b,"$ish",[z],"$ash"),this,[z])
z.b=!0
this.cQ(z)},"$2","gez",8,0,18],
io:[function(a,b){var z=X.U
z=new D.c1(a,H.u(b,"$ish",[z],"$ash"),this,[z])
z.b=!0
this.cQ(z)},"$2","geC",8,0,18],
eA:[function(a){var z
H.e(a,"$isz")
if(!this.r&&a instanceof X.co){z=a.c
if(C.a.ad(this.a,z)){this.r=!0
z=this.y
if(!(z==null))z.v(a)}}},"$1","gbM",4,0,1],
fe:[function(a){var z
H.e(a,"$isz")
if(this.r&&a instanceof X.co){z=a.c
if(C.a.ad(this.a,z))this.r=!1}},"$1","gbX",4,0,1],
ai:function(a){var z,y
if(this.f!=null)return!1
this.f=a
z=a.b
y=z.b
if(y==null){y=D.L()
z.b=y}y.h(0,this.gbM())
y=z.a
if(y==null){y=D.L()
z.a=y
z=y}else z=y
z.h(0,this.gbX())
return!0},
$ash:function(){return[X.U]},
$asal:function(){return[X.U]},
p:{
bB:function(){var z=new X.i0()
z.bc(X.U)
z.e=null
z.f=null
z.r=!1
z.x=null
z.y=null
z.bI(z.gez(),z.geB(),z.geC())
return z}}},i1:{"^":"b;0a,0b,0c,0d",
hW:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.co(a,this)
y.b=!0
return z.v(y)},
hS:function(a){var z,y
this.c=a.b
this.d.V(0,a.a)
z=this.b
if(z==null)return!1
y=new X.co(a,this)
y.b=!0
return z.v(y)}},el:{"^":"db;x,y,c,d,e,a,0b"},ie:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
at:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aC(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=new V.X(y.a+x*w,y.b+v*u)
u=this.a.gbk()
s=new X.c5(a,new V.X(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cA:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.v(this.at(a,b))
return!0},
b0:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.ej()
if(typeof z!=="number")return z.bF()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.v(this.at(a,b))
return!0},
b_:function(a,b){var z=this.d
if(z==null)return!1
z.v(this.at(a,b))
return!0},
hX:function(a){return!1},
fg:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aC(Date.now(),!1)
y=this.f
x=new X.el(c,a,this.a.gbk(),b,z,this)
x.b=!0
y.v(x)
this.y=z
this.x=new V.X(0,0)}},a4:{"^":"b;a,b,c",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.a4))return!1
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
return z+(this.c?"Shift+":"")}},c5:{"^":"db;x,y,z,Q,ch,c,d,e,a,0b"},ix:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bS:function(a,b,c){var z,y,x
z=new P.aC(Date.now(),!1)
y=this.a.gbk()
x=new X.c5(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cA:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.v(this.bS(a,b,!0))
return!0},
b0:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.ej()
if(typeof z!=="number")return z.bF()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.v(this.bS(a,b,!0))
return!0},
b_:function(a,b){var z=this.d
if(z==null)return!1
z.v(this.bS(a,b,!1))
return!0},
hY:function(a,b){return!1}},db:{"^":"z;"},eR:{"^":"db;x,y,z,Q,ch,c,d,e,a,0b"},jw:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
at:function(a,b){var z,y,x,w
H.u(a,"$isd",[V.X],"$asd")
z=new P.aC(Date.now(),!1)
y=a.length>0?a[0]:new V.X(0,0)
x=this.a.gbk()
w=new X.eR(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hV:function(a){var z
H.u(a,"$isd",[V.X],"$asd")
z=this.b
if(z==null)return!1
z.v(this.at(a,!0))
return!0},
hT:function(a){var z
H.u(a,"$isd",[V.X],"$asd")
z=this.c
if(z==null)return!1
z.v(this.at(a,!0))
return!0},
hU:function(a){var z
H.u(a,"$isd",[V.X],"$asd")
z=this.d
if(z==null)return!1
z.v(this.at(a,!1))
return!0}},jU:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gbk:function(){var z=this.a
return V.ez(0,0,(z&&C.l).gdm(z).c,C.l.gdm(z).d)},
d0:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.U(z,new X.a4(y,a.altKey,a.shiftKey))},
aG:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.a4(y,a.altKey,a.shiftKey)},
c2:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.a4(y,a.altKey,a.shiftKey)},
au:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.I()
v=z.top
if(typeof x!=="number")return x.I()
return new V.X(y-w,x-v)},
aV:function(a){return new V.a8(a.movementX,a.movementY)},
bZ:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.X])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
t=C.i.af(u.pageX)
C.i.af(u.pageY)
s=z.left
C.i.af(u.pageX)
C.a.h(y,new V.X(t-s,C.i.af(u.pageY)-z.top))}return y},
ar:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dU(z,new X.a4(y,a.altKey,a.shiftKey))},
bU:function(a){var z,y,x,w,v,u
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
iI:[function(a){this.f=!0},"$1","gfc",4,0,7],
iC:[function(a){this.f=!1},"$1","gf5",4,0,7],
iF:[function(a){H.e(a,"$isax")
if(this.f&&this.bU(a))a.preventDefault()},"$1","gf9",4,0,4],
fe:[function(a){var z
H.e(a,"$isbC")
if(!this.f)return
z=this.d0(a)
if(this.b.hW(z))a.preventDefault()},"$1","gbX",4,0,20],
eA:[function(a){var z
H.e(a,"$isbC")
if(!this.f)return
z=this.d0(a)
if(this.b.hS(z))a.preventDefault()},"$1","gbM",4,0,20],
iL:[function(a){var z,y,x,w
H.e(a,"$isax")
z=this.a
z.focus()
this.f=!0
this.aG(a)
if(this.x){y=this.ar(a)
x=this.aV(a)
if(this.d.cA(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ar(a)
w=this.au(a)
if(this.c.cA(y,w))a.preventDefault()},"$1","gfh",4,0,4],
iN:[function(a){var z,y,x
H.e(a,"$isax")
this.aG(a)
z=this.ar(a)
if(this.x){y=this.aV(a)
if(this.d.b0(z,y))a.preventDefault()
return}if(this.r)return
x=this.au(a)
if(this.c.b0(z,x))a.preventDefault()},"$1","gfj",4,0,4],
iH:[function(a){var z,y,x
H.e(a,"$isax")
if(!this.bU(a)){this.aG(a)
z=this.ar(a)
if(this.x){y=this.aV(a)
if(this.d.b0(z,y))a.preventDefault()
return}if(this.r)return
x=this.au(a)
if(this.c.b0(z,x))a.preventDefault()}},"$1","gfb",4,0,4],
iM:[function(a){var z,y,x
H.e(a,"$isax")
this.aG(a)
z=this.ar(a)
if(this.x){y=this.aV(a)
if(this.d.b_(z,y))a.preventDefault()
return}if(this.r)return
x=this.au(a)
if(this.c.b_(z,x))a.preventDefault()},"$1","gfi",4,0,4],
iG:[function(a){var z,y,x
H.e(a,"$isax")
if(!this.bU(a)){this.aG(a)
z=this.ar(a)
if(this.x){y=this.aV(a)
if(this.d.b_(z,y))a.preventDefault()
return}if(this.r)return
x=this.au(a)
if(this.c.b_(z,x))a.preventDefault()}},"$1","gfa",4,0,4],
iO:[function(a){var z,y
H.e(a,"$isbK")
this.aG(a)
z=new V.a8((a&&C.A).ghl(a),C.A.ghm(a)).C(0,180)
if(this.x){if(this.d.hX(z))a.preventDefault()
return}if(this.r)return
y=this.au(a)
if(this.c.hY(z,y))a.preventDefault()},"$1","gfk",4,0,38],
iP:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ar(this.y)
v=this.au(this.y)
this.d.fg(w,v,x)}},"$1","gfl",4,0,7],
iV:[function(a){var z
H.e(a,"$isbj")
this.a.focus()
this.f=!0
this.c2(a)
z=this.bZ(a)
if(this.e.hV(z))a.preventDefault()},"$1","gfs",4,0,12],
iT:[function(a){var z
H.e(a,"$isbj")
this.c2(a)
z=this.bZ(a)
if(this.e.hT(z))a.preventDefault()},"$1","gfp",4,0,12],
iU:[function(a){var z
H.e(a,"$isbj")
this.c2(a)
z=this.bZ(a)
if(this.e.hU(z))a.preventDefault()},"$1","gfq",4,0,12]}}],["","",,D,{"^":"",ch:{"^":"b;0a,0b,0c,0d",
gu:function(){var z=this.d
if(z==null){z=D.L()
this.d=z}return z},
aA:[function(a){var z
H.e(a,"$isz")
z=this.d
if(!(z==null))z.v(a)},function(){return this.aA(null)},"ip","$1","$0","geD",0,2,0],
$isa3:1,
$isaK:1,
p:{
cU:function(a,b){var z,y,x
z=new D.ch()
z.c=new V.W(1,1,1)
z.a=new V.N(0,0,1)
y=z.b
z.b=b
b.gu().h(0,z.geD())
x=new D.F("mover",y,z.b,z,[U.a7])
x.b=!0
z.aA(x)
if(!z.c.t(0,a)){y=z.c
z.c=a
x=new D.F("color",y,a,z,[V.W])
x.b=!0
z.aA(x)}return z}}},a3:{"^":"b;",$isaK:1},i2:{"^":"al;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gu:function(){var z=this.Q
if(z==null){z=D.L()
this.Q=z}return z},
aA:function(a){var z=this.Q
if(!(z==null))z.v(a)},
ff:[function(a){var z
H.e(a,"$isz")
z=this.ch
if(!(z==null))z.v(a)},function(){return this.ff(null)},"iK","$1","$0","gd6",0,2,0],
iQ:[function(a){var z,y,x
H.u(a,"$ish",[D.a3],"$ash")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.B)(a),++y){x=a[y]
if(x==null||this.eO(x))return!1}return!0},"$1","gfm",4,0,40],
iz:[function(a,b){var z,y,x,w,v,u,t,s,r
z=D.a3
H.u(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gd6(),w={func:1,ret:-1,args:[D.z]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=H.e(b[u],"$isa3")
if(t instanceof D.ch)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.b4()
s.d=0
t.d=s}H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}z=new D.c0(a,b,this,[z])
z.b=!0
this.aA(z)},"$2","gf2",8,0,21],
iS:[function(a,b){var z,y,x,w,v,u
z=D.a3
H.u(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gd6(),w=0;w<b.length;b.length===y||(0,H.B)(b),++w){v=H.e(b[w],"$isa3")
if(v instanceof D.ch)C.a.V(this.e,v)
u=v.d
if(u==null){u=new D.b4()
u.d=0
v.d=u}u.V(0,x)}z=new D.c1(a,b,this,[z])
z.b=!0
this.aA(z)},"$2","gfo",8,0,21],
eO:function(a){var z=C.a.ad(this.e,a)
return z},
$ash:function(){return[D.a3]},
$asal:function(){return[D.a3]}},iF:{"^":"b;",$isa3:1,$isaK:1},jd:{"^":"b;",$isa3:1,$isaK:1},jo:{"^":"b;",$isa3:1,$isaK:1},jp:{"^":"b;",$isa3:1,$isaK:1},jq:{"^":"b;",$isa3:1,$isaK:1}}],["","",,V,{"^":"",
n_:[function(a,b){if(typeof b!=="number")return b.I()
if(typeof a!=="number")return H.o(a)
return Math.abs(b-a)<=1e-9},"$2","iu",8,0,34],
cI:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.i.ba(a-b,z)
return(a<0?a+z:a)+b},
H:function(a,b,c){if(a==null)return C.b.a9("null",c)
return C.b.a9(C.i.eb($.n.$2(a,0)?0:a,b),c+b+1)},
bs:function(a,b,c){var z,y,x,w,v,u
H.u(a,"$isd",[P.v],"$asd")
z=H.c([],[P.i])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.B)(a),++w){v=V.H(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.f(z,u)
C.a.m(z,u,C.b.a9(z[u],x))}return z},
dH:function(a,b){return C.i.ic(Math.pow(b,C.I.cq(Math.log(H.mg(a))/Math.log(b))))},
W:{"^":"b;a,b,c",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}},
ce:{"^":"b;a,b,c,d",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ce))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+", "+V.H(this.d,3,0)+"]"}},
aX:{"^":"b;a,b,c,d,e,f,r,x,y",
aa:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.v])
return z},
bB:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=this.e
x=this.y
if(typeof y!=="number")return y.k()
if(typeof x!=="number")return H.o(x)
w=y*x
v=this.f
u=this.x
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.o(u)
if(typeof z!=="number")return z.k()
t=this.d
s=this.b
if(typeof s!=="number")return s.k()
r=s*x
q=this.c
if(typeof q!=="number")return H.o(q)
p=u*q
if(typeof t!=="number")return t.k()
o=this.r
n=s*v-y*q
if(typeof o!=="number")return o.k()
m=z*(w-v*u)-t*(r-p)+o*n
if($.n.$2(m,0))return new V.aX(1,0,0,0,1,0,0,0,1)
l=1/m
return new V.aX((w-u*v)*l,(p-r)*l,n*l,(o*v-t*x)*l,(z*x-o*q)*l,(t*q-z*v)*l,(t*u-o*y)*l,(o*s-z*u)*l,(z*y-t*s)*l)},
aS:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
v=this.c
u=a.c
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.o(u)
t=this.d
if(typeof t!=="number")return t.k()
s=this.e
if(typeof s!=="number")return s.k()
r=this.f
if(typeof r!=="number")return r.k()
q=this.r
if(typeof q!=="number")return q.k()
p=this.x
if(typeof p!=="number")return p.k()
o=this.y
if(typeof o!=="number")return o.k()
return new V.N(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aX))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
z=b.e
if(!$.n.$2(z,this.e))return!1
z=b.f
if(!$.n.$2(z,this.f))return!1
z=b.r
if(!$.n.$2(z,this.r))return!1
z=b.x
if(!$.n.$2(z,this.x))return!1
z=b.y
if(!$.n.$2(z,this.y))return!1
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.v]
y=V.bs(H.c([this.a,this.d,this.r],z),3,0)
x=V.bs(H.c([this.b,this.e,this.x],z),3,0)
w=V.bs(H.c([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.f(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.f(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.f(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.f(y,1)
s=" "+y[1]+", "
if(1>=u)return H.f(x,1)
s=s+x[1]+", "
if(1>=t)return H.f(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.f(y,2)
z=" "+y[2]+", "
if(2>=u)return H.f(x,2)
z=z+x[2]+", "
if(2>=t)return H.f(w,2)
return s+(z+w[2]+"]")}},
am:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
aa:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.v])
return z},
bB:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.n.$2(a2,0))return V.c4()
a3=1/a2
a4=-w
a5=-i
return V.aD((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
return V.aD(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
aS:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
v=this.c
u=a.c
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.o(u)
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
return new V.N(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
b7:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
v=this.c
u=a.c
if(typeof v!=="number")return v.k()
if(typeof u!=="number")return H.o(u)
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
return new V.ay(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.am))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
z=b.e
if(!$.n.$2(z,this.e))return!1
z=b.f
if(!$.n.$2(z,this.f))return!1
z=b.r
if(!$.n.$2(z,this.r))return!1
z=b.x
if(!$.n.$2(z,this.x))return!1
z=b.y
if(!$.n.$2(z,this.y))return!1
z=b.z
if(!$.n.$2(z,this.z))return!1
z=b.Q
if(!$.n.$2(z,this.Q))return!1
z=b.ch
if(!$.n.$2(z,this.ch))return!1
z=b.cx
if(!$.n.$2(z,this.cx))return!1
z=b.cy
if(!$.n.$2(z,this.cy))return!1
z=b.db
if(!$.n.$2(z,this.db))return!1
z=b.dx
if(!$.n.$2(z,this.dx))return!1
return!0},
i:function(a){return this.J()},
dO:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.v]
y=V.bs(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bs(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bs(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bs(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.f(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.f(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.f(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.f(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.f(y,1)
q=q+y[1]+", "
if(1>=t)return H.f(x,1)
q=q+x[1]+", "
if(1>=s)return H.f(w,1)
q=q+w[1]+", "
if(1>=r)return H.f(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.f(y,2)
u=u+y[2]+", "
if(2>=t)return H.f(x,2)
u=u+x[2]+", "
if(2>=s)return H.f(w,2)
u=u+w[2]+", "
if(2>=r)return H.f(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.f(y,3)
q=q+y[3]+", "
if(3>=t)return H.f(x,3)
q=q+x[3]+", "
if(3>=s)return H.f(w,3)
q=q+w[3]+", "
if(3>=r)return H.f(v,3)
return u+(q+v[3]+"]")},
w:function(a){return this.dO(a,3,0)},
J:function(){return this.dO("",3,0)},
p:{
aD:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.am(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
c4:function(){return V.aD(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
eq:function(a,b,c){return V.aD(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
d4:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aD(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
ep:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aD(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
d5:function(a,b,c,d){return V.eo(new V.ay(0,0,0),new V.N(0,1,0),new V.N(a,b,c))},
eo:function(a,b,c){var z,y,x,w,v
z=c.C(0,Math.sqrt(c.G(c)))
y=b.aX(z)
x=y.C(0,Math.sqrt(y.G(y)))
w=z.aX(x)
v=new V.N(a.a,a.b,a.c)
return V.aD(x.a,w.a,z.a,x.N(0).G(v),x.b,w.b,z.b,w.N(0).G(v),x.c,w.c,z.c,z.N(0).G(v),0,0,0,1)}}},
X:{"^":"b;a,b",
I:function(a,b){return new V.X(this.a-b.a,this.b-b.b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}},
ay:{"^":"b;a,b,c",
I:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.I()
if(typeof w!=="number")return H.o(w)
return new V.ay(this.a-z,this.b-y,x-w)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ay))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}},
da:{"^":"b;a,b,c,d",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.da))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+", "+V.H(this.d,3,0)+"]"}},
ey:{"^":"b;a,b,c,d",
gam:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ey))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+", "+V.H(this.d,3,0)+"]"},
p:{
ez:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ey(a,b,c,d)}}},
a8:{"^":"b;a,b",
hB:[function(a){return Math.sqrt(this.G(this))},"$0","gl",1,0,22],
G:function(a){var z,y,x,w
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
return new V.a8(z*b,y*b)},
C:function(a,b){var z,y
if($.n.$2(b,0))return new V.a8(0,0)
z=this.a
if(typeof z!=="number")return z.C()
y=this.b
if(typeof y!=="number")return y.C()
return new V.a8(z/b,y/b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a8))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}},
N:{"^":"b;a,b,c",
hB:[function(a){return Math.sqrt(this.G(this))},"$0","gl",1,0,22],
G:function(a){var z,y
z=this.c
y=a.c
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.o(y)
return this.a*a.a+this.b*a.b+z*y},
cu:function(a,b){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=a.c
if(typeof w!=="number")return w.I()
if(typeof x!=="number")return H.o(x)
return new V.N(z+b*(a.a-z),y+b*(a.b-y),x+b*(w-x))},
aX:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
if(typeof y!=="number")return H.o(y)
x=this.c
w=a.b
if(typeof x!=="number")return x.k()
v=a.a
u=this.a
return new V.N(z*y-x*w,x*v-u*y,u*w-z*v)},
B:function(a,b){var z,y
z=this.c
y=b.c
if(typeof z!=="number")return z.B()
if(typeof y!=="number")return H.o(y)
return new V.N(this.a+b.a,this.b+b.b,z+y)},
N:function(a){var z=this.c
if(typeof z!=="number")return z.N()
return new V.N(-this.a,-this.b,-z)},
C:function(a,b){var z
if($.n.$2(b,0))return new V.N(0,0,0)
z=this.c
if(typeof z!=="number")return z.C()
return new V.N(this.a/b,this.b/b,z/b)},
dW:function(){if(!$.n.$2(0,this.a))return!1
if(!$.n.$2(0,this.b))return!1
if(!$.n.$2(0,this.c))return!1
return!0},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.N))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}}],["","",,U,{"^":"",ht:{"^":"dX;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bN:function(a){var z,y,x
z=this.a
y=this.c
x=this.b
if(z)return V.cI(a,y,x)
else{if(a<y)z=y
else z=a>x?x:a
return z}},
gu:function(){var z=this.y
if(z==null){z=D.L()
this.y=z}return z},
M:function(a){var z=this.y
if(!(z==null))z.v(a)},
scH:function(a,b){var z=this.a
if(z!==b){this.a=b
z=new D.F("warp",z,b,this,[P.Z])
z.b=!0
this.M(z)}},
scw:function(a){var z,y
z=this.b
if(!$.n.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bN(z)}z=new D.F("maximumLocation",y,this.b,this,[P.v])
z.b=!0
this.M(z)}},
scz:function(a){var z,y
z=this.c
if(!$.n.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bN(z)}z=new D.F("minimumLocation",y,this.c,this,[P.v])
z.b=!0
this.M(z)}},
sa_:function(a,b){var z,y
b=this.bN(b==null?0:b)
z=this.d
if(!$.n.$2(z,b)){y=this.d
this.d=b
z=new D.F("location",y,b,this,[P.v])
z.b=!0
this.M(z)}},
saZ:function(a){var z,y,x
z=this.e
if(!$.n.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.F("maximumVelocity",y,a,this,[P.v])
z.b=!0
this.M(z)}},
sS:function(a){var z,y,x
z=a==null?0:a
y=this.e
a=-y
if(!(z<a))a=z>y?y:z
z=this.f
if(!$.n.$2(z,a)){x=this.f
this.f=a
z=new D.F("velocity",x,a,this,[P.v])
z.b=!0
this.M(z)}},
sav:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.n.$2(z,a)){y=this.x
this.x=a
z=new D.F("dampening",y,a,this,[P.v])
z.b=!0
this.M(z)}},
ab:function(a,b){var z,y,x,w
z=this.f
if($.n.$2(z,0)){z=this.r
z=!$.n.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa_(0,this.d+y*b)
z=this.x
if(!$.n.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sS(y)}},
p:{
bX:function(){var z=new U.ht()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},cT:{"^":"a7;0a,0b",
gu:function(){var z=this.b
if(z==null){z=D.L()
this.b=z}return z},
sR:function(a,b){var z,y,x
if(!J.T(this.a,b)){z=this.a
this.a=b
y=new D.F("matrix",z,b,this,[V.am])
y.b=!0
x=this.b
if(!(x==null))x.v(y)}},
ay:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cT))return!1
return J.T(this.a,b.a)},
i:function(a){return"Constant: "+this.a.w("          ")},
p:{
cg:function(a){var z=new U.cT()
z.sR(0,a)
return z}}},ea:{"^":"al;0e,0f,0r,0a,0b,0c,0d",
gu:function(){var z=this.e
if(z==null){z=D.L()
this.e=z}return z},
M:[function(a){var z
H.e(a,"$isz")
z=this.e
if(!(z==null))z.v(a)},function(){return this.M(null)},"aq","$1","$0","gaB",0,2,0],
iy:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.a7
H.u(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gaB(),w={func:1,ret:-1,args:[D.z]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){s=t.gu()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.c0(a,b,this,[z])
z.b=!0
this.M(z)},"$2","gf1",8,0,23],
iR:[function(a,b){var z,y,x,w,v
z=U.a7
H.u(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gaB(),w=0;w<b.length;b.length===y||(0,H.B)(b),++w){v=b[w]
if(v!=null)v.gu().V(0,x)}z=new D.c1(a,b,this,[z])
z.b=!0
this.M(z)},"$2","gfn",8,0,23],
ay:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.K()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.av(z,z.length,0,[H.w(z,0)]),x=null;z.D();){y=z.d
if(y!=null){w=y.ay(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.c4():x
z=this.e
if(!(z==null))z.an(0)}return this.f},
t:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ea))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.f(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.f(w,y)
if(!J.T(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$ash:function(){return[U.a7]},
$asal:function(){return[U.a7]},
$isa7:1,
p:{
eb:function(a){var z=new U.ea()
z.bc(U.a7)
z.bb(z.gf1(),z.gfn())
z.c4(0,a)
z.e=null
z.f=V.c4()
z.r=0
return z}}},a7:{"^":"dX;"},eA:{"^":"a7;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gu:function(){var z=this.y
if(z==null){z=D.L()
this.y=z}return z},
M:function(a){var z=this.y
if(!(z==null))z.v(a)},
see:function(a){var z,y
a=V.cI(a,0,6.283185307179586)
z=this.a
if(!$.n.$2(z,a)){y=this.a
this.a=a
z=new D.F("yaw",y,a,this,[P.v])
z.b=!0
this.M(z)}},
se1:function(a,b){var z,y
b=V.cI(b,0,6.283185307179586)
z=this.b
if(!$.n.$2(z,b)){y=this.b
this.b=b
z=new D.F("pitch",y,b,this,[P.v])
z.b=!0
this.M(z)}},
se6:function(a){var z,y
a=V.cI(a,0,6.283185307179586)
z=this.c
if(!$.n.$2(z,a)){y=this.c
this.c=a
z=new D.F("roll",y,a,this,[P.v])
z.b=!0
this.M(z)}},
ay:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.d
this.see(this.a+this.d*b.y)
this.se1(0,this.b+this.e*b.y)
this.se6(this.c+this.f*b.y)
z=this.c
x=Math.cos(z)
w=Math.sin(z)
this.x=V.aD(x,-w,0,0,w,x,0,0,0,0,1,0,0,0,0,1).k(0,V.ep(this.b)).k(0,V.d4(this.a))
z=this.y
if(!(z==null))z.an(0)}return this.x},
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eA))return!1
z=this.a
y=b.a
if(!$.n.$2(z,y))return!1
z=this.b
y=b.b
if(!$.n.$2(z,y))return!1
z=this.c
y=b.c
if(!$.n.$2(z,y))return!1
z=this.d
y=b.d
if(!$.n.$2(z,y))return!1
z=this.e
y=b.e
if(!$.n.$2(z,y))return!1
z=this.f
y=b.f
if(!$.n.$2(z,y))return!1
return!0},
i:function(a){return"Rotater: ["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"], ["+V.H(this.d,3,0)+", "+V.H(this.e,3,0)+", "+V.H(this.f,3,0)+"]"}},jV:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gu:function(){var z=this.fx
if(z==null){z=D.L()
this.fx=z}return z},
M:[function(a){var z
H.e(a,"$isz")
z=this.fx
if(!(z==null))z.v(a)},function(){return this.M(null)},"aq","$1","$0","gaB",0,2,0],
ai:function(a){var z,y
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.b
if(y==null){y=D.L()
z.b=y
z=y}else z=y
z.h(0,this.geZ())
z=this.a.c
y=z.d
if(y==null){y=D.L()
z.d=y
z=y}else z=y
z.h(0,this.gf_())
z=this.a.c
y=z.c
if(y==null){y=D.L()
z.c=y
z=y}else z=y
z.h(0,this.gf0())
z=this.a.d
y=z.f
if(y==null){y=D.L()
z.f=y
z=y}else z=y
z.h(0,this.geW())
z=this.a.d
y=z.d
if(y==null){y=D.L()
z.d=y
z=y}else z=y
z.h(0,this.geX())
z=this.a.e
y=z.b
if(y==null){y=D.L()
z.b=y
z=y}else z=y
z.h(0,this.gfN())
z=this.a.e
y=z.d
if(y==null){y=D.L()
z.d=y
z=y}else z=y
z.h(0,this.gfM())
z=this.a.e
y=z.c
if(y==null){y=D.L()
z.c=y
z=y}else z=y
z.h(0,this.gfL())
return!0},
ah:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.N()
z=-z}if(this.r){if(typeof y!=="number")return y.N()
y=-y}return new V.a8(z,y)},
iv:[function(a){a=H.j(H.e(a,"$isz"),"$isc5")
if(!J.T(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","geZ",4,0,1],
iw:[function(a){var z,y,x,w,v,u,t
a=H.j(H.e(a,"$isz"),"$isc5")
if(!this.cx)return
if(this.ch){z=a.d.I(0,a.y)
z=new V.a8(z.a,z.b)
z=z.G(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.I(0,a.y)
z=this.ah(new V.a8(y.a,y.b).k(0,2).C(0,z.gam()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.N()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sS(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.N()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sS(-z*10*y)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=this.ah(new V.a8(x.a,x.b).k(0,2).C(0,z.gam()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa_(0,-u*v+x)
this.b.sS(0)
this.c.sS(0)
y=y.I(0,a.z)
this.dx=this.ah(new V.a8(y.a,y.b).k(0,2).C(0,z.gam()))}this.aq()},"$1","gf_",4,0,1],
ix:[function(a){var z,y,x
H.e(a,"$isz")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.G(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.N()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sS(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.N()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sS(-y*10*z)
this.aq()}},"$1","gf0",4,0,1],
it:[function(a){if(H.j(H.e(a,"$isz"),"$isel").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","geW",4,0,1],
iu:[function(a){var z,y,x,w,v,u,t
a=H.j(H.e(a,"$isz"),"$isc5")
if(!J.T(this.d,a.x.b))return
z=a.c
y=a.d
x=y.I(0,a.y)
w=this.ah(new V.a8(x.a,x.b).k(0,2).C(0,z.gam()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa_(0,-u*v+x)
this.b.sS(0)
this.c.sS(0)
y=y.I(0,a.z)
this.dx=this.ah(new V.a8(y.a,y.b).k(0,2).C(0,z.gam()))
this.aq()},"$1","geX",4,0,1],
iZ:[function(a){H.e(a,"$isz")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfN",4,0,1],
iY:[function(a){var z,y,x,w,v,u,t
a=H.j(H.e(a,"$isz"),"$iseR")
if(!this.cx)return
if(this.ch){z=a.d.I(0,a.y)
z=new V.a8(z.a,z.b)
z=z.G(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.I(0,a.y)
z=this.ah(new V.a8(y.a,y.b).k(0,2).C(0,z.gam()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.N()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sS(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.N()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sS(-z*10*y)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=this.ah(new V.a8(x.a,x.b).k(0,2).C(0,z.gam()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa_(0,-u*v+x)
this.b.sS(0)
this.c.sS(0)
y=y.I(0,a.z)
this.dx=this.ah(new V.a8(y.a,y.b).k(0,2).C(0,z.gam()))}this.aq()},"$1","gfM",4,0,1],
iX:[function(a){var z,y,x
H.e(a,"$isz")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.G(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.N()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sS(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.N()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sS(-y*10*z)
this.aq()}},"$1","gfL",4,0,1],
ay:function(a,b,c){var z,y,x
z=this.dy
y=b.e
if(typeof z!=="number")return z.K()
if(z<y){this.dy=y
x=b.y
this.c.ab(0,x)
this.b.ab(0,x)
this.fr=V.d4(this.b.d).k(0,V.ep(this.c.d))}return this.fr},
$isa7:1},jW:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gu:function(){var z=this.dx
if(z==null){z=D.L()
this.dx=z}return z},
M:[function(a){var z
H.e(a,"$isz")
z=this.dx
if(!(z==null))z.v(a)},function(){return this.M(null)},"aq","$1","$0","gaB",0,2,0],
ga_:function(a){return new V.ay(this.r.d,this.x.d,this.y.d)},
iJ:[function(a){this.M(H.e(a,"$isz"))},"$1","gfd",4,0,1],
c3:function(a,b,c,d,e){if(a.r){if(typeof e!=="number")return e.B()
e+=d}else if(b.r){if(typeof e!=="number")return e.I()
e-=d}else{if(typeof e!=="number")return e.b9()
e=e>0?e-Math.min(e,c):e+Math.min(-e,c)}return e},
ay:function(a,b,c){var z,y,x,w,v,u
z=this.cy
y=b.e
if(typeof z!=="number")return z.K()
if(z<y){this.cy=y
this.ga_(this)
x=b.y
if(x>0.1)x=0.1
z=this.ch
if(typeof z!=="number")return z.k()
w=z*x
z=this.cx
if(typeof z!=="number")return z.k()
v=z*x
u=new V.N(this.r.f,this.x.f,this.y.f)
z=this.Q
if(z!=null)u=z.aS(u)
u=new V.N(this.c3(this.a,this.b,w,v,u.a),this.c3(this.c,this.d,w,v,u.b),this.c3(this.e,this.f,w,v,u.c))
z=this.z
if(z!=null)u=z.aS(u)
this.r.sS(u.a)
this.x.sS(u.b)
this.y.sS(u.c)
this.r.ab(0,x)
this.x.ab(0,x)
this.y.ab(0,x)
this.db=V.eq(this.r.d,-this.x.d,this.y.d)}return this.db},
$isa7:1}}],["","",,M,{"^":"",hK:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
aT:[function(a){var z
H.e(a,"$isz")
z=this.x
if(!(z==null))z.v(a)},function(){return this.aT(null)},"iq","$1","$0","gaC",0,2,0],
iD:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.aJ
H.u(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gaC(),w={func:1,ret:-1,args:[D.z]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){if(t.ga0()==null){s=new D.b4()
s.d=0
t.sa0(s)}s=t.ga0()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.c0(a,b,this,[z])
z.b=!0
this.aT(z)},"$2","gf7",8,0,8],
iE:[function(a,b){var z,y,x,w,v,u
z=E.aJ
H.u(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gaC(),w=0;w<b.length;b.length===y||(0,H.B)(b),++w){v=b[w]
if(v!=null){if(v.ga0()==null){u=new D.b4()
u.d=0
v.sa0(u)}v.ga0().V(0,x)}}z=new D.c1(a,b,this,[z])
z.b=!0
this.aT(z)},"$2","gf8",8,0,8],
gu:function(){var z=this.x
if(z==null){z=D.L()
this.x=z}return z},
aQ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.e4(this.c)
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
if(typeof x!=="number")return H.o(x)
u=C.i.af(v.a*x)
if(typeof w!=="number")return H.o(w)
t=C.i.af(v.b*w)
s=C.i.af(v.c*x)
a.c=s
v=C.i.af(v.d*w)
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
n=V.aD(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.e3(n)
y=$.ev
if(y==null){y=V.eo(new V.ay(0,0,0),new V.N(0,1,0),new V.N(0,0,-1))
$.ev=y
m=y}else m=y
y=z.b
if(y!=null){l=y.ay(0,a,z)
if(l!=null)m=l.k(0,m)}a.db.e3(m)
for(z=this.d.a,z=new J.av(z,z.length,0,[H.w(z,0)]);z.D();)z.d.ab(0,a)
for(z=this.d.a,z=new J.av(z,z.length,0,[H.w(z,0)]);z.D();)z.d.aQ(a)
this.a.toString
a.cy.cB()
a.db.cB()
this.b.toString
a.e2()},
$isnD:1}}],["","",,A,{"^":"",dN:{"^":"b;a,b,c"},hf:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hp:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
hn:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},il:{"^":"eB;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aj,0ae,0bm,0dq,0bn,0bo,0dr,0ds,0bp,0bq,0dt,0du,0br,0bs,0dv,0dw,0bt,0dz,0dA,0bu,0dB,0dC,0bv,0bw,0bx,0dD,0dE,0by,0bz,0dF,0dG,0bA,0dH,0ck,0dI,0cl,0dJ,0cm,0dK,0cn,0dL,0co,0dM,0cp,a,b,0c,0d,0e,0f,0r,0x,0y",
eq:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.z=a2
z=new P.an("")
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
a2.fQ(z)
a2.fX(z)
a2.fR(z)
a2.h4(z)
a2.h5(z)
a2.fZ(z)
a2.h9(z)
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
z=new P.an("")
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
x.fU(z)
x.fP(z)
x.fS(z)
x.fV(z)
x.h2(z)
u=x.dy
if(u){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
x.h0(z)
x.h1(z)}x.fY(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=x.y
if(q!==C.c){r+="uniform float alpha;\n"
z.a=r
if(q!==C.h){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.d){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.e){r+="uniform samplerCube alphaTxt;\n"
z.a=r}}r+="\n"
z.a=r}r+="float alphaValue()\n"
z.a=r
r+="{\n"
z.a=r
switch(q){case C.c:r+="   return 1.0;\n"
z.a=r
break
case C.h:r+="   return alpha;\n"
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
p=H.c([],[P.i])
if(x.b!==C.c)C.a.h(p,"ambient()")
if(x.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(x.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(x.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.A(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
x.fT(z)
x.h_(z)
x.h3(z)
x.h6(z)
x.h7(z)
x.h8(z)
x.fW(z)}r=z.a+="// === Main ===\n"
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
o=H.c([],[P.i])
if(q){z.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(o,"lightAccum")
if(x.c!==C.c)z.a+="   setDiffuseColor();\n"
if(x.d!==C.c)z.a+="   setInvDiffuseColor();\n"
if(x.e!==C.c)z.a+="   setSpecularColor();\n"
if(x.z>0)z.a+="   lightAccum += allDirLightValues(norm);\n"
if(x.Q>0)z.a+="   lightAccum += allPointLightValues(norm);\n"
if(x.ch>0)z.a+="   lightAccum += allSpotLightValues(norm);\n"
if(x.cx>0)z.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(x.cy>0)z.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(x.db>0)z.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(x.dx<=0)z.a+="   lightAccum += nonLightValues(norm);\n"}if(x.a!==C.c)C.a.h(o,"emission()")
if(x.r!==C.c)C.a.h(o,"reflect(refl)")
if(x.x!==C.c)C.a.h(o,"refract(refl)")
if(o.length<=0)C.a.h(o,"vec3(0.0, 0.0, 0.0)")
n="vec4("+C.a.A(o," + ")+", alpha);"
x=z.a
if(t){x+="   gl_FragColor = colorMat*"+n+"\n"
z.a=x}else{x+="   gl_FragColor = "+n+"\n"
z.a=x}x+="}\n"
z.a=x
this.c=s
this.d=x.charCodeAt(0)==0?x:x
this.e=this.d1(s,35633)
this.f=this.d1(this.d,35632)
x=this.a
v=x.createProgram()
this.r=v
x.attachShader(v,this.e)
x.attachShader(this.r,this.f)
x.linkProgram(this.r)
if(!H.fR(x.getProgramParameter(this.r,35714))){m=x.getProgramInfoLog(this.r)
x.deleteProgram(this.r)
H.q(P.t("Failed to link shader: "+H.k(m)))}this.fG()
this.fI()
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a2.fr)this.id=H.j(this.y.n(0,"invViewMat"),"$isaM")
if(y)this.dy=H.j(this.y.n(0,"objMat"),"$isaM")
if(w)this.fr=H.j(this.y.n(0,"viewObjMat"),"$isaM")
this.fy=H.j(this.y.n(0,"projViewObjMat"),"$isaM")
if(a2.x2)this.k1=H.j(this.y.n(0,"txt2DMat"),"$isdk")
if(a2.y1)this.k2=H.j(this.y.n(0,"txtCubeMat"),"$isaM")
if(a2.y2)this.k3=H.j(this.y.n(0,"colorMat"),"$isaM")
this.r1=H.c([],[A.aM])
y=a2.aj
if(y>0){this.k4=H.e(this.y.n(0,"bendMatCount"),"$isP")
for(l=0;l<y;++l){x=this.r1
w=this.y
v="bendValues["+l+"].mat"
k=w.j(0,v)
if(k==null)H.q(P.t("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.j(k,"$isaM"))}}y=a2.a
if(y!==C.c){this.r2=H.j(this.y.n(0,"emissionClr"),"$isM")
switch(y){case C.c:break
case C.h:break
case C.d:this.rx=H.j(this.y.n(0,"emissionTxt"),"$isao")
this.x1=H.j(this.y.n(0,"nullEmissionTxt"),"$isP")
break
case C.e:this.ry=H.j(this.y.n(0,"emissionTxt"),"$isap")
this.x1=H.j(this.y.n(0,"nullEmissionTxt"),"$isP")
break}}y=a2.b
if(y!==C.c){this.x2=H.j(this.y.n(0,"ambientClr"),"$isM")
switch(y){case C.c:break
case C.h:break
case C.d:this.y1=H.j(this.y.n(0,"ambientTxt"),"$isao")
this.aj=H.j(this.y.n(0,"nullAmbientTxt"),"$isP")
break
case C.e:this.y2=H.j(this.y.n(0,"ambientTxt"),"$isap")
this.aj=H.j(this.y.n(0,"nullAmbientTxt"),"$isP")
break}}y=a2.c
if(y!==C.c){this.ae=H.j(this.y.n(0,"diffuseClr"),"$isM")
switch(y){case C.c:break
case C.h:break
case C.d:this.bm=H.j(this.y.n(0,"diffuseTxt"),"$isao")
this.bn=H.j(this.y.n(0,"nullDiffuseTxt"),"$isP")
break
case C.e:this.dq=H.j(this.y.n(0,"diffuseTxt"),"$isap")
this.bn=H.j(this.y.n(0,"nullDiffuseTxt"),"$isP")
break}}y=a2.d
if(y!==C.c){this.bo=H.j(this.y.n(0,"invDiffuseClr"),"$isM")
switch(y){case C.c:break
case C.h:break
case C.d:this.dr=H.j(this.y.n(0,"invDiffuseTxt"),"$isao")
this.bp=H.j(this.y.n(0,"nullInvDiffuseTxt"),"$isP")
break
case C.e:this.ds=H.j(this.y.n(0,"invDiffuseTxt"),"$isap")
this.bp=H.j(this.y.n(0,"nullInvDiffuseTxt"),"$isP")
break}}y=a2.e
if(y!==C.c){this.bs=H.j(this.y.n(0,"shininess"),"$isY")
this.bq=H.j(this.y.n(0,"specularClr"),"$isM")
switch(y){case C.c:break
case C.h:break
case C.d:this.dt=H.j(this.y.n(0,"specularTxt"),"$isao")
this.br=H.j(this.y.n(0,"nullSpecularTxt"),"$isP")
break
case C.e:this.du=H.j(this.y.n(0,"specularTxt"),"$isap")
this.br=H.j(this.y.n(0,"nullSpecularTxt"),"$isP")
break}}switch(a2.f){case C.c:break
case C.h:break
case C.d:this.dv=H.j(this.y.n(0,"bumpTxt"),"$isao")
this.bt=H.j(this.y.n(0,"nullBumpTxt"),"$isP")
break
case C.e:this.dw=H.j(this.y.n(0,"bumpTxt"),"$isap")
this.bt=H.j(this.y.n(0,"nullBumpTxt"),"$isP")
break}if(a2.dy){this.dz=H.j(this.y.n(0,"envSampler"),"$isap")
this.dA=H.j(this.y.n(0,"nullEnvTxt"),"$isP")
y=a2.r
if(y!==C.c){this.bu=H.j(this.y.n(0,"reflectClr"),"$isM")
switch(y){case C.c:break
case C.h:break
case C.d:this.dB=H.j(this.y.n(0,"reflectTxt"),"$isao")
this.bv=H.j(this.y.n(0,"nullReflectTxt"),"$isP")
break
case C.e:this.dC=H.j(this.y.n(0,"reflectTxt"),"$isap")
this.bv=H.j(this.y.n(0,"nullReflectTxt"),"$isP")
break}}y=a2.x
if(y!==C.c){this.bw=H.j(this.y.n(0,"refraction"),"$isY")
this.bx=H.j(this.y.n(0,"refractClr"),"$isM")
switch(y){case C.c:break
case C.h:break
case C.d:this.dD=H.j(this.y.n(0,"refractTxt"),"$isao")
this.by=H.j(this.y.n(0,"nullRefractTxt"),"$isP")
break
case C.e:this.dE=H.j(this.y.n(0,"refractTxt"),"$isap")
this.by=H.j(this.y.n(0,"nullRefractTxt"),"$isP")
break}}}y=a2.y
if(y!==C.c){this.bz=H.j(this.y.n(0,"alpha"),"$isY")
switch(y){case C.c:break
case C.h:break
case C.d:this.dF=H.j(this.y.n(0,"alphaTxt"),"$isao")
this.bA=H.j(this.y.n(0,"nullAlphaTxt"),"$isP")
break
case C.e:this.dG=H.j(this.y.n(0,"alphaTxt"),"$isap")
this.bA=H.j(this.y.n(0,"nullAlphaTxt"),"$isP")
break}}this.ck=H.c([],[A.f3])
this.cl=H.c([],[A.f4])
this.cm=H.c([],[A.f5])
this.cn=H.c([],[A.f6])
this.co=H.c([],[A.f7])
this.cp=H.c([],[A.f8])
if(a2.k2){y=a2.z
if(y>0){this.dH=H.e(this.y.n(0,"dirLightCount"),"$isP")
for(l=0;l<y;++l){x=this.y
w="dirLights["+l+"].viewDir"
k=x.j(0,w)
if(k==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isM")
x=this.y
w="dirLights["+l+"].color"
j=x.j(0,w)
if(j==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isM")
x=this.ck;(x&&C.a).h(x,new A.f3(l,k,j))}}y=a2.Q
if(y>0){this.dI=H.e(this.y.n(0,"pntLightCount"),"$isP")
for(l=0;l<y;++l){x=this.y
w="pntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isM")
x=this.y
w="pntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isM")
x=this.y
w="pntLights["+l+"].color"
i=x.j(0,w)
if(i==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isM")
x=this.y
w="pntLights["+l+"].att0"
h=x.j(0,w)
if(h==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isY")
x=this.y
w="pntLights["+l+"].att1"
g=x.j(0,w)
if(g==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isY")
x=this.y
w="pntLights["+l+"].att2"
f=x.j(0,w)
if(f==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isY")
x=this.cl;(x&&C.a).h(x,new A.f4(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.dJ=H.e(this.y.n(0,"spotLightCount"),"$isP")
for(l=0;l<y;++l){x=this.y
w="spotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isM")
x=this.y
w="spotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isM")
x=this.y
w="spotLights["+l+"].viewPnt"
i=x.j(0,w)
if(i==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isM")
x=this.y
w="spotLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isM")
x=this.y
w="spotLights["+l+"].cutoff"
g=x.j(0,w)
if(g==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isY")
x=this.y
w="spotLights["+l+"].coneAngle"
f=x.j(0,w)
if(f==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isY")
x=this.y
w="spotLights["+l+"].att0"
e=x.j(0,w)
if(e==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isY")
x=this.y
w="spotLights["+l+"].att1"
d=x.j(0,w)
if(d==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isY")
x=this.y
w="spotLights["+l+"].att2"
c=x.j(0,w)
if(c==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isY")
x=this.cm;(x&&C.a).h(x,new A.f5(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.dK=H.e(this.y.n(0,"txtDirLightCount"),"$isP")
for(l=0;l<y;++l){x=this.y
w="txtDirLights["+l+"].objUp"
k=x.j(0,w)
if(k==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isM")
x=this.y
w="txtDirLights["+l+"].objRight"
j=x.j(0,w)
if(j==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isM")
x=this.y
w="txtDirLights["+l+"].objDir"
i=x.j(0,w)
if(i==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isM")
x=this.y
w="txtDirLights["+l+"].viewDir"
h=x.j(0,w)
if(h==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isM")
x=this.y
w="txtDirLights["+l+"].color"
g=x.j(0,w)
if(g==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isM")
x=this.y
w="txtDirLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isP")
x=this.y
w="txtDirLightsTxt2D"+l
e=x.j(0,w)
if(e==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isao")
x=this.cn;(x&&C.a).h(x,new A.f6(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.dL=H.e(this.y.n(0,"txtPntLightCount"),"$isP")
for(l=0;l<y;++l){x=this.y
w="txtPntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isM")
x=this.y
w="txtPntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isM")
x=this.y
w="txtPntLights["+l+"].invViewRotMat"
i=x.j(0,w)
if(i==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isdk")
x=this.y
w="txtPntLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isM")
x=this.y
w="txtPntLights["+l+"].nullTxt"
g=x.j(0,w)
if(g==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isP")
x=this.y
w="txtPntLights["+l+"].att0"
f=x.j(0,w)
if(f==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isY")
x=this.y
w="txtPntLights["+l+"].att1"
e=x.j(0,w)
if(e==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isY")
x=this.y
w="txtPntLights["+l+"].att2"
d=x.j(0,w)
if(d==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isY")
x=this.y
w="txtPntLightsTxtCube"+l
c=x.j(0,w)
if(c==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isap")
x=this.co;(x&&C.a).h(x,new A.f7(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.dM=H.e(this.y.n(0,"txtSpotLightCount"),"$isP")
for(l=0;l<y;++l){x=this.y
w="txtSpotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isM")
x=this.y
w="txtSpotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isM")
x=this.y
w="txtSpotLights["+l+"].objUp"
i=x.j(0,w)
if(i==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isM")
x=this.y
w="txtSpotLights["+l+"].objRight"
h=x.j(0,w)
if(h==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isM")
x=this.y
w="txtSpotLights["+l+"].viewPnt"
g=x.j(0,w)
if(g==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isM")
x=this.y
w="txtSpotLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isP")
x=this.y
w="txtSpotLights["+l+"].color"
e=x.j(0,w)
if(e==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isM")
x=this.y
w="txtSpotLights["+l+"].tuScalar"
d=x.j(0,w)
if(d==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isY")
x=this.y
w="txtSpotLights["+l+"].tvScalar"
c=x.j(0,w)
if(c==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isY")
x=this.y
w="txtSpotLights["+l+"].att0"
b=x.j(0,w)
if(b==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(b,"$isY")
x=this.y
w="txtSpotLights["+l+"].att1"
a=x.j(0,w)
if(a==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a,"$isY")
x=this.y
w="txtSpotLights["+l+"].att2"
a0=x.j(0,w)
if(a0==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a0,"$isY")
x=this.y
w="txtSpotLightsTxt2D"+l
a1=x.j(0,w)
if(a1==null)H.q(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a1,"$isao")
x=this.cp;(x&&C.a).h(x,new A.f8(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
ac:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.ek(c)
b.a.uniform1i(b.d,0)}},
a6:function(a,b,c){b.a.uniform1i(b.d,1)},
p:{
im:function(a,b){var z,y
z=a.ae
y=new A.il(b,z)
y.eu(b,z)
y.eq(a,b)
return y}}},ir:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aj,ae,bm",
fQ:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aj+"];\n"
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
fX:function(a){var z
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
fR:function(a){var z
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
h4:function(a){var z,y
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
h5:function(a){var z,y
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
fZ:function(a){var z
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
h9:function(a){var z
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
as:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.h)return
if(0>=c.length)return H.f(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.ap(c,1))+"Txt;\n"
a.a=z
if(b===C.d)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fU:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.as(a,z,"emission")
y=a.a+="\n"
y+="vec3 emission()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
break
case C.h:z=y+"   return emissionClr;\n"
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
fP:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.as(a,z,"ambient")
y=a.a+="\n"
y+="vec3 ambient()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
break
case C.h:z=y+"   return ambientClr;\n"
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
fS:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.as(a,z,"diffuse")
y=a.a+="vec3 diffuseColor;\n"
y+="\n"
a.a=y
y+="void setDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
break
case C.h:z=y+"   diffuseColor = diffuseClr;\n"
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
fV:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.as(a,z,"invDiffuse")
y=a.a+="vec3 invDiffuseColor;\n"
y+="\n"
a.a=y
y+="void setInvDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
break
case C.h:z=y+"   invDiffuseColor = invDiffuseClr;\n"
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
h2:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.as(a,z,"specular")
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
case C.h:z=y+"   specularColor = specularClr;\n"
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
fY:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.c:break
case C.h:break
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
switch(y){case C.c:z+="   return normalize(normalVec);\n"
a.a=z
break
case C.h:z+="   return normalize(normalVec);\n"
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
h0:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.as(a,z,"reflect")
y=a.a+="\n"
y+="vec3 reflect(vec3 refl)\n"
a.a=y
y+="{\n"
a.a=y
y+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=y
switch(z){case C.c:z=y
break
case C.h:z=y+"   vec3 scalar = reflectClr;\n"
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
h1:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.as(a,z,"refract")
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
case C.h:z=y+"   vec3 scalar = refractClr;\n"
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
fT:function(a){var z,y
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
h_:function(a){var z,y
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
h3:function(a){var z,y
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
h6:function(a){var z,y,x
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
h7:function(a){var z,y,x
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
h8:function(a){var z,y,x
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
fW:function(a){var z
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
i:function(a){return this.ae}},f3:{"^":"b;a,b,c"},f6:{"^":"b;a,b,c,d,e,f,r,x"},f4:{"^":"b;a,b,c,d,e,f,r"},f7:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f5:{"^":"b;a,b,c,d,e,f,r,x,y,z"},f8:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},eB:{"^":"cM;",
eu:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
d1:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fR(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.t("Error compiling shader '"+H.k(y)+"': "+H.k(x)))}return y},
fG:function(){var z,y,x,w,v,u
z=H.c([],[A.dN])
y=this.a
x=H.D(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.dN(y,v.name,u))}this.x=new A.hf(z)},
fI:function(){var z,y,x,w,v,u
z=H.c([],[A.af])
y=this.a
x=H.D(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.hk(v.type,v.size,v.name,u))}this.y=new A.jG(z)},
aE:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.P(z,y,b,c)
else return A.dj(z,y,b,a,c)},
eP:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ao(z,y,b,c)
else return A.dj(z,y,b,a,c)},
eQ:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ap(z,y,b,c)
else return A.dj(z,y,b,a,c)},
bi:function(a,b){return new P.fk(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
hk:function(a,b,c,d){switch(a){case 5120:return this.aE(b,c,d)
case 5121:return this.aE(b,c,d)
case 5122:return this.aE(b,c,d)
case 5123:return this.aE(b,c,d)
case 5124:return this.aE(b,c,d)
case 5125:return this.aE(b,c,d)
case 5126:return new A.Y(this.a,this.r,c,d)
case 35664:return new A.jB(this.a,this.r,c,d)
case 35665:return new A.M(this.a,this.r,c,d)
case 35666:return new A.jE(this.a,this.r,c,d)
case 35667:return new A.jC(this.a,this.r,c,d)
case 35668:return new A.jD(this.a,this.r,c,d)
case 35669:return new A.jF(this.a,this.r,c,d)
case 35674:return new A.jI(this.a,this.r,c,d)
case 35675:return new A.dk(this.a,this.r,c,d)
case 35676:return new A.aM(this.a,this.r,c,d)
case 35678:return this.eP(b,c,d)
case 35680:return this.eQ(b,c,d)
case 35670:throw H.a(this.bi("BOOL",c))
case 35671:throw H.a(this.bi("BOOL_VEC2",c))
case 35672:throw H.a(this.bi("BOOL_VEC3",c))
case 35673:throw H.a(this.bi("BOOL_VEC4",c))
default:throw H.a(P.t("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}},cf:{"^":"b;a,b",
i:function(a){return this.b}},af:{"^":"b;"},jG:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.j(0,b)
if(z==null)throw H.a(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.J()},
hu:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w)x+=z[w].i(0)+a
return x},
J:function(){return this.hu("\n")}},P:{"^":"af;a,b,c,d",
i:function(a){return"Uniform1i: "+H.k(this.c)}},jC:{"^":"af;a,b,c,d",
i:function(a){return"Uniform2i: "+H.k(this.c)}},jD:{"^":"af;a,b,c,d",
i:function(a){return"Uniform3i: "+H.k(this.c)}},jF:{"^":"af;a,b,c,d",
i:function(a){return"Uniform4i: "+H.k(this.c)}},jA:{"^":"af;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.k(this.c)},
p:{
dj:function(a,b,c,d,e){var z=new A.jA(a,b,c,e)
z.f=d
z.e=P.ib(d,0,!1,P.m)
return z}}},Y:{"^":"af;a,b,c,d",
i:function(a){return"Uniform1f: "+H.k(this.c)}},jB:{"^":"af;a,b,c,d",
i:function(a){return"Uniform2f: "+H.k(this.c)}},M:{"^":"af;a,b,c,d",
i:function(a){return"Uniform3f: "+H.k(this.c)}},jE:{"^":"af;a,b,c,d",
i:function(a){return"Uniform4f: "+H.k(this.c)}},jI:{"^":"af;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.k(this.c)}},dk:{"^":"af;a,b,c,d",
ag:function(a){var z=new Float32Array(H.bo(H.u(a,"$isd",[P.v],"$asd")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.k(this.c)}},aM:{"^":"af;a,b,c,d",
ag:function(a){var z=new Float32Array(H.bo(H.u(a,"$isd",[P.v],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.k(this.c)}},ao:{"^":"af;a,b,c,d",
ek:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.k(this.c)}},ap:{"^":"af;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.k(this.c)}}}],["","",,F,{"^":"",
cA:function(a){var z,y
z=a.a>0?1:0
if(a.b>0)z+=2
y=a.c
if(typeof y!=="number")return y.b9()
return(y>0?z+4:z)*2},
bO:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.N(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.N(t+h,s+f,r+g)
z.b=q
p=new V.N(t-h,s-f,r-g)
z.c=p
o=new V.N(y-h,w-f,v-g)
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
j=F.h4(d,e,new F.m_(z,F.cA(z.c),F.cA(z.d),k,l,c),b)
if(j!=null)a.hH(j)},
ms:function(a,b,c){var z={}
z.a=b
z.a=new F.mt()
return F.h4(c,a,new F.mu(z),null)},
h4:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.bk,P.v,P.v]})
if(a<1)return
if(b<1)return
z=F.eD()
y=H.c([],[F.bk])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.dp(null,null,new V.ce(u,0,0,1),null,null,new V.X(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cg(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.dp(null,null,new V.ce(o,n,m,1),null,null,new V.X(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cg(d))}}z.d.hc(a+1,b+1,y)
return z},
m_:{"^":"p:14;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cu(z.b,b).cu(z.d.cu(z.c,b),c)
a.sa_(0,new V.ay(y.a,y.b,y.c))
a.se9(y.C(0,Math.sqrt(y.G(y))))
z=1-b
x=1-c
a.sdk(new V.da(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))}},
mt:{"^":"p:45;",
$2:function(a,b){return 0}},
mu:{"^":"p:14;a",
$3:function(a,b,c){var z,y,x,w
z=b*2-1
y=c*2-1
a.sa_(0,new V.ay(z,y,this.a.a.$2(b,c)))
x=new V.N(z,y,1)
a.se9(x.C(0,Math.sqrt(x.G(x))))
x=1-b
w=1-c
a.sdk(new V.da(b*c,2+x*c,4+b*w,6+x*w))}},
aw:{"^":"b;0a,0b,0c,0d,0e",
gcj:function(){return this.a==null||this.b==null||this.c==null},
eJ:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.N(0,0,0)
if(y!=null)v=v.B(0,y)
if(x!=null)v=v.B(0,x)
if(w!=null)v=v.B(0,w)
if(v.dW())return
return v.C(0,Math.sqrt(v.G(v)))},
eM:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.I(0,y)
z=new V.N(z.a,z.b,z.c)
v=z.C(0,Math.sqrt(z.G(z)))
z=w.I(0,y)
z=new V.N(z.a,z.b,z.c)
z=v.aX(z.C(0,Math.sqrt(z.G(z))))
return z.C(0,Math.sqrt(z.G(z)))},
cd:function(){if(this.d!=null)return!0
var z=this.eJ()
if(z==null){z=this.eM()
if(z==null)return!1}this.d=z
this.a.a.a2()
return!0},
eI:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.N(0,0,0)
if(y!=null)v=v.B(0,y)
if(x!=null)v=v.B(0,x)
if(w!=null)v=v.B(0,w)
if(v.dW())return
return v.C(0,Math.sqrt(v.G(v)))},
eL:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.n.$2(n,0)){z=r.I(0,u)
z=new V.N(z.a,z.b,z.c)
m=z.C(0,Math.sqrt(z.G(z)))
if(o.a-p.a<0)m=m.N(0)}else{l=(z-q.b)/n
z=r.I(0,u)
y=z.c
if(typeof y!=="number")return y.k()
w=u.a
v=u.b
t=u.c
if(typeof t!=="number")return H.o(t)
t=new V.ay(z.a*l+w,z.b*l+v,y*l+t).I(0,x)
t=new V.N(t.a,t.b,t.c)
m=t.C(0,Math.sqrt(t.G(t)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.N(0)}z=this.d
if(z!=null){k=z.C(0,Math.sqrt(z.G(z)))
z=k.aX(m)
z=z.C(0,Math.sqrt(z.G(z))).aX(k)
m=z.C(0,Math.sqrt(z.G(z)))}return m},
cb:function(){if(this.e!=null)return!0
var z=this.eI()
if(z==null){z=this.eL()
if(z==null)return!1}this.e=z
this.a.a.a2()
return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
w:function(a){var z,y
if(this.gcj())return a+"disposed"
z=a+C.b.a9(J.ad(this.a.e),0)+", "+C.b.a9(J.ad(this.b.e),0)+", "+C.b.a9(J.ad(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
J:function(){return this.w("")},
p:{
bZ:function(a,b,c){var z,y,x
z=new F.aw()
y=a.a
if(y==null)H.q(P.t("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.q(P.t("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.a2()
return z}}},
d0:{"^":"b;0a,0b",
gcj:function(){return this.a==null||this.b==null},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
w:function(a){if(this.gcj())return a+"disposed"
return a+C.b.a9(J.ad(this.a.e),0)+", "+C.b.a9(J.ad(this.b.e),0)},
J:function(){return this.w("")}},
d9:{"^":"b;0a",
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
w:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.a9(J.ad(z.e),0)},
J:function(){return this.w("")}},
eC:{"^":"b;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.L()
this.e=z}return z},
hH:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.d
a.a.X()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){v=z[w]
this.a.h(0,v.hi())}this.a.X()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.X()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.d9()
if(r.a==null)H.q(P.t("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.v(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.X()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.X()
t=t.e
if(typeof t!=="number")return t.B()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.d0()
s=p.a
if(s==null)H.q(P.t("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.q(P.t("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.v(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.X()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.X()
t=t.e
if(typeof t!=="number")return t.B()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.X()
s=s.e
if(typeof s!=="number")return s.B()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.bZ(p,o,l)}z=this.e
if(!(z==null))z.an(0)},
aI:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aI()||!1
if(!this.a.aI())y=!1
z=this.e
if(!(z==null))z.an(0)
return y},
hf:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aQ()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aP().a)!==0)++w
if((x&$.$get$aO().a)!==0)++w
if((x&$.$get$aR().a)!==0)++w
if((x&$.$get$aS().a)!==0)++w
if((x&$.$get$bI().a)!==0)++w
if((x&$.$get$bJ().a)!==0)++w
if((x&$.$get$bm().a)!==0)++w
if((x&$.$get$aN().a)!==0)++w
v=b.gcL(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.v
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.dS])
for(r=0,q=0;q<w;++q){p=b.hd(q)
o=p.gcL(p)
C.a.m(s,q,new Z.dS(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.f(y,n)
m=y[n].hC(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}H.u(t,"$isd",[x],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bo(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dT(new Z.fh(34962,j),s,b)
i.b=H.c([],[Z.cl])
if(this.b.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.X()
C.a.h(h,g.e)}f=Z.dq(y,34963,H.u(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cl(0,h.length,f))}if(this.c.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.X()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.X()
C.a.h(h,g.e)}f=Z.dq(y,34963,H.u(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cl(1,h.length,f))}if(this.d.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.X()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.X()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].c
g.a.a.X()
C.a.h(h,g.e)}f=Z.dq(y,34963,H.u(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cl(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.i])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.w("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.w("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.w("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.w("   "))}return C.a.A(z,"\n")},
a3:function(a){var z=this.e
if(!(z==null))z.v(a)},
a2:function(){return this.a3(null)},
p:{
eD:function(){var z,y
z=new F.eC()
y=new F.k4(z)
y.b=!1
y.c=H.c([],[F.bk])
z.a=y
y=new F.j8(z)
y.b=H.c([],[F.d9])
z.b=y
y=new F.j7(z)
y.b=H.c([],[F.d0])
z.c=y
y=new F.j6(z)
y.b=H.c([],[F.aw])
z.d=y
z.e=null
return z}}},
j6:{"^":"b;a,0b",
hc:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.u(c,"$isd",[F.bk],"$asd")
z=H.c([],[F.aw])
for(y=b,x=0,w=!1,v=1;v<a;++v,++x,++y){for(u=w,t=1;t<b;++t,y=p){s=c.length
if(x<0||x>=s)return H.f(c,x)
r=c[x];++x
if(x>=s)return H.f(c,x)
q=c[x]
p=y+1
if(p<0||p>=s)return H.f(c,p)
o=c[p]
if(y<0||y>=s)return H.f(c,y)
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
aI:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].cd())x=!1
return x},
cc:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].cb())x=!1
return x},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
z=H.c([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].w(a))
return C.a.A(z,"\n")},
J:function(){return this.w("")}},
j7:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
z=H.c([],[P.i])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.f(w,x)
C.a.h(z,w[x].w(a+(""+x+". ")))}return C.a.A(z,"\n")},
J:function(){return this.w("")}},
j8:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
z=H.c([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].w(a))
return C.a.A(z,"\n")},
J:function(){return this.w("")}},
bk:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cg:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.dp(this.cx,x,u,z,y,w,v,a,t)},
hi:function(){return this.cg(null)},
sa_:function(a,b){var z
if(!J.T(this.f,b)){this.f=b
z=this.a
if(z!=null)z.a2()}},
se9:function(a){var z
if(!J.T(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a2()}},
sdk:function(a){var z
if(!J.T(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.a2()}},
hC:function(a){var z,y
z=J.K(a)
if(z.t(a,$.$get$aQ())){z=this.f
y=[P.v]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aP())){z=this.r
y=[P.v]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aO())){z=this.x
y=[P.v]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aR())){z=this.y
y=[P.v]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.t(a,$.$get$aS())){z=this.z
y=[P.v]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bI())){z=this.Q
y=[P.v]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bJ())){z=this.Q
y=[P.v]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(z.t(a,$.$get$bm()))return H.c([this.ch],[P.v])
else if(z.t(a,$.$get$aN())){z=this.cx
y=[P.v]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.v])},
cd:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.N(0,0,0)
this.d.H(0,new F.kb(z))
z=z.a
this.r=z.C(0,Math.sqrt(z.G(z)))
z=this.a
if(z!=null){z.a2()
z=this.a.e
if(!(z==null))z.an(0)}return!0},
cb:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.N(0,0,0)
this.d.H(0,new F.ka(z))
z=z.a
this.x=z.C(0,Math.sqrt(z.G(z)))
z=this.a
if(z!=null){z.a2()
z=this.a.e
if(!(z==null))z.an(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
w:function(a){var z,y,x
z=H.c([],[P.i])
C.a.h(z,C.b.a9(J.ad(this.e),0))
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
C.a.h(z,V.H(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.A(z,", ")
return a+"{"+x+"}"},
J:function(){return this.w("")},
p:{
dp:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.bk()
y=new F.k9(z)
y.b=H.c([],[F.d9])
z.b=y
y=new F.k8(z)
x=[F.d0]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.k5(z)
x=[F.aw]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
z.d=y
h=$.$get$fe()
z.e=0
y=$.$get$aQ()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aP().a)!==0?e:null
z.x=(x&$.$get$aO().a)!==0?b:null
z.y=(x&$.$get$aR().a)!==0?f:null
z.z=(x&$.$get$aS().a)!==0?g:null
z.Q=(x&$.$get$ff().a)!==0?c:null
z.ch=(x&$.$get$bm().a)!==0?i:0
z.cx=(x&$.$get$aN().a)!==0?a:null
return z}}},
kb:{"^":"p:10;a",
$1:function(a){var z,y
H.e(a,"$isaw")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
ka:{"^":"p:10;a",
$1:function(a){var z,y
H.e(a,"$isaw")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.B(0,z)}}},
k4:{"^":"b;a,0b,0c",
X:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.f(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.t("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a2()
return!0},
gl:function(a){return this.c.length},
aI:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].cd()
return!0},
cc:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].cb()
return!0},
hg:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
if(typeof s!=="number")return s.k()
s=v.C(0,Math.sqrt(u*u+t*t+s*s))
if(!J.T(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.v(null)}}}}return!0},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
this.X()
z=H.c([],[P.i])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].w(a))
return C.a.A(z,"\n")},
J:function(){return this.w("")}},
k5:{"^":"b;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
H:function(a,b){H.l(b,{func:1,ret:-1,args:[F.aw]})
C.a.H(this.b,b)
C.a.H(this.c,new F.k6(this,b))
C.a.H(this.d,new F.k7(this,b))},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
z=H.c([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].w(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].w(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].w(a))
return C.a.A(z,"\n")},
J:function(){return this.w("")}},
k6:{"^":"p:10;a,b",
$1:function(a){H.e(a,"$isaw")
if(!J.T(a.a,this.a))this.b.$1(a)}},
k7:{"^":"p:10;a,b",
$1:function(a){var z
H.e(a,"$isaw")
z=this.a
if(!J.T(a.a,z)&&!J.T(a.b,z))this.b.$1(a)}},
k8:{"^":"b;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
z=H.c([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].w(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].w(a))
return C.a.A(z,"\n")},
J:function(){return this.w("")}},
k9:{"^":"b;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.J()},
w:function(a){var z,y,x,w
z=H.c([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].w(a))
return C.a.A(z,"\n")},
J:function(){return this.w("")}}}],["","",,O,{"^":"",io:{"^":"df;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gu:function(){var z=this.dy
if(z==null){z=D.L()
this.dy=z}return z},
W:[function(a){var z
H.e(a,"$isz")
z=this.dy
if(!(z==null))z.v(a)},function(){return this.W(null)},"f6","$1","$0","gbg",0,2,0],
fz:[function(a){H.e(a,"$isz")
this.a=null
this.W(a)},function(){return this.fz(null)},"iW","$1","$0","gfw",0,2,0],
iA:[function(a,b){var z=V.am
z=new D.c0(a,H.u(b,"$ish",[z],"$ash"),this,[z])
z.b=!0
this.W(z)},"$2","gf3",8,0,24],
iB:[function(a,b){var z=V.am
z=new D.c1(a,H.u(b,"$ish",[z],"$ash"),this,[z])
z.b=!0
this.W(z)},"$2","gf4",8,0,24],
cZ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.f.a1(z.e.length+3,4)*4
x=C.f.a1(z.f.length+3,4)*4
w=C.f.a1(z.r.length+3,4)*4
v=C.f.a1(z.x.length+3,4)*4
u=C.f.a1(z.y.length+3,4)*4
t=C.f.a1(z.z.length+3,4)*4
s=C.f.a1(this.e.a.length+3,4)*4
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
g=k!==C.c||j!==C.c
f=p!==C.c||o!==C.c||n!==C.c||m!==C.c
e=m===C.c
d=!e||g
c=o!==C.c||n!==C.c||!e||l!==C.c||g
e=l===C.c
b=!e
a=q===C.d||p===C.d||o===C.d||n===C.d||m===C.d||l===C.d||k===C.d||j===C.d||i===C.d
a0=q===C.e||p===C.e||o===C.e||n===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$aQ()
if(c){z=$.$get$aP()
a6=new Z.bl(a6.a|z.a)}if(b){z=$.$get$aO()
a6=new Z.bl(a6.a|z.a)}if(a){z=$.$get$aR()
a6=new Z.bl(a6.a|z.a)}if(a0){z=$.$get$aS()
a6=new Z.bl(a6.a|z.a)}if(a2){z=$.$get$aN()
a6=new Z.bl(a6.a|z.a)}return new A.ir(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
T:function(a,b){H.u(a,"$isd",[T.dg],"$asd")
if(b!=null)if(!C.a.ad(a,b)){b.a=a.length
C.a.h(a,b)}},
ab:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.av(z,z.length,0,[H.w(z,0)]);z.D();){y=z.d
x=new V.N(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.aS(x)}}},
i1:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.cZ()
y=a.fr.j(0,z.ae)
if(y==null){y=A.im(z,a.a)
x=y.b
if(x.length===0)H.q(P.t("May not cache a shader with no name."))
if(a.fr.bl(0,x))H.q(P.t('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.m(0,x,y)}this.a=y
b.e=null
z=y}w=z.z
v=w.bm
z=b.e
if(!(z instanceof Z.dT)){b.e=null
z=null}if(z==null||!z.d.t(0,v)){z=w.r1
if(z)b.d.aI()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.d.cc()
t.a.cc()
t=t.e
if(!(t==null))t.an(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.d
s.a.hg()
s=s.e
if(!(s==null))s.an(0)}q=b.d.hf(new Z.kc(a.a),v)
q.aM($.$get$aQ()).e=this.a.Q.c
if(z)q.aM($.$get$aP()).e=this.a.cx.c
if(u)q.aM($.$get$aO()).e=this.a.ch.c
if(w.rx)q.aM($.$get$aR()).e=this.a.cy.c
if(t)q.aM($.$get$aS()).e=this.a.db.c
if(w.x1)q.aM($.$get$aN()).e=this.a.dx.c
b.e=q}z=T.dg
p=H.c([],[z])
u=this.a
a.a.useProgram(u.r)
u.x.hp()
if(w.fx){u=this.a
t=a.dx
t=t.gR(t)
u=u.dy
u.toString
u.ag(t.aa(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gR(t)
s=a.dx
s=t.k(0,s.gR(s))
a.cx=s
t=s}u=u.fr
u.toString
u.ag(t.aa(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.ghZ()
s=a.dx
s=t.k(0,s.gR(s))
a.ch=s
t=s}u=u.fy
u.toString
u.ag(t.aa(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.k1
u.toString
u.ag(t.aa(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.k2
u.toString
u.ag(t.aa(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k3
u.toString
u.ag(C.t.aa(t,!0))}if(w.aj>0){o=this.e.a.length
u=this.a.k4
u.a.uniform1i(u.d,o)
for(u=[P.v],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.f(s,n)
s=s[n]
t.toString
H.e(s,"$isam")
t=t.r1
if(n>=t.length)return H.f(t,n)
t=t[n]
m=new Float32Array(H.bo(H.u(s.aa(0,!0),"$isd",u,"$asd")))
t.a.uniformMatrix4fv(t.d,!1,m)}}switch(w.a){case C.c:break
case C.h:u=this.a
t=this.f.f
u=u.r2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.d:this.T(p,this.f.d)
u=this.a
t=this.f.d
u.ac(u.rx,u.x1,t)
t=this.a
u=this.f.f
t=t.r2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.e:this.T(p,this.f.e)
u=this.a
t=this.f.e
u.a6(u.ry,u.x1,t)
t=this.a
u=this.f.f
t=t.r2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}if(w.k2){switch(w.b){case C.c:break
case C.h:u=this.a
t=this.r.f
u=u.x2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.d:this.T(p,this.r.d)
u=this.a
t=this.r.d
u.ac(u.y1,u.aj,t)
t=this.a
u=this.r.f
t=t.x2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.e:this.T(p,this.r.e)
u=this.a
t=this.r.e
u.a6(u.y2,u.aj,t)
t=this.a
u=this.r.f
t=t.x2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.c){case C.c:break
case C.h:u=this.a
t=this.x.f
u=u.ae
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.d:this.T(p,this.x.d)
u=this.a
t=this.x.d
u.ac(u.bm,u.bn,t)
t=this.a
u=this.x.f
t=t.ae
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.e:this.T(p,this.x.e)
u=this.a
t=this.x.e
u.a6(u.dq,u.bn,t)
t=this.a
u=this.x.f
t=t.ae
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.d){case C.c:break
case C.h:u=this.a
t=this.y.f
u=u.bo
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.d:this.T(p,this.y.d)
u=this.a
t=this.y.d
u.ac(u.dr,u.bp,t)
t=this.a
u=this.y.f
t=t.bo
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.e:this.T(p,this.y.e)
u=this.a
t=this.y.e
u.a6(u.ds,u.bp,t)
t=this.a
u=this.y.f
t=t.bo
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.c:break
case C.h:u=this.a
t=this.z.f
u=u.bq
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.bs
t.a.uniform1f(t.d,r)
break
case C.d:this.T(p,this.z.d)
u=this.a
t=this.z.d
u.ac(u.dt,u.br,t)
t=this.a
u=this.z.f
t=t.bq
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bs
u.a.uniform1f(u.d,r)
break
case C.e:this.T(p,this.z.e)
u=this.a
t=this.z.e
u.a6(u.du,u.br,t)
t=this.a
u=this.z.f
t=t.bq
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.bs
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.dH
u.a.uniform1i(u.d,o)
u=a.db
l=u.gR(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.ck
if(k>=s.length)return H.f(s,k)
h=s[k]
s=l.aS(i.a)
r=s.a
g=s.b
f=s.c
if(typeof f!=="number")return f.k()
f=s.C(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.dI
u.a.uniform1i(u.d,o)
u=a.db
l=u.gR(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.cl
if(k>=s.length)return H.f(s,k)
h=s[k]
s=i.gb1(i)
r=h.b
g=s.gcI(s)
f=s.gcJ(s)
s=s.gcK(s)
r.a.uniform3f(r.d,g,f,s)
s=l.b7(i.gb1(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.ga7(i)
f=h.d
g=s.gbE()
r=s.gb8()
s=s.gbj()
f.a.uniform3f(f.d,g,r,s)
s=i.gc5()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gc6()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gc7()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.dJ
u.a.uniform1i(u.d,o)
u=a.db
l=u.gR(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.cm
if(k>=s.length)return H.f(s,k)
h=s[k]
s=i.gb1(i)
r=h.b
g=s.gcI(s)
f=s.gcJ(s)
s=s.gcK(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gci(i).j3()
f=h.c
g=s.gaJ(s)
r=s.gaK(s)
s=s.gaL()
f.a.uniform3f(f.d,g,r,s)
s=l.b7(i.gb1(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.ga7(i)
r=h.e
g=s.gbE()
f=s.gb8()
s=s.gbj()
r.a.uniform3f(r.d,g,f,s)
s=i.gj0()
f=h.f
f.a.uniform1f(f.d,s)
s=i.gj_()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gc5()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gc6()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gc7()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.dK
u.a.uniform1i(u.d,o)
u=a.db
l=u.gR(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
r=this.a.cn
if(k>=r.length)return H.f(r,k)
h=r[k]
r=i.gb3()
H.u(p,"$isd",s,"$asd")
if(!C.a.ad(p,r)){r.sbe(p.length)
C.a.h(p,r)}r=i.gci(i)
g=h.d
f=r.gaJ(r)
e=r.gaK(r)
r=r.gaL()
g.a.uniform3f(g.d,f,e,r)
r=i.gij()
e=h.b
f=r.gaJ(r)
g=r.gaK(r)
r=r.gaL()
e.a.uniform3f(e.d,f,g,r)
r=i.gb2(i)
g=h.c
f=r.gaJ(r)
e=r.gaK(r)
r=r.gaL()
g.a.uniform3f(g.d,f,e,r)
r=l.aS(i.gci(i))
e=r.a
f=r.b
g=r.c
if(typeof g!=="number")return g.k()
g=r.C(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.ga7(i)
f=h.f
e=g.gbE()
r=g.gb8()
g=g.gbj()
f.a.uniform3f(f.d,e,r,g)
g=i.gb3()
r=g.gcv(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.geV()
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gbe())
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.dL
u.a.uniform1i(u.d,o)
u=a.db
l=u.gR(u)
for(u=this.dx.y,t=u.length,s=[P.v],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
g=this.a.co
if(k>=g.length)return H.f(g,k)
h=g[k]
g=i.gb3()
H.u(p,"$isd",r,"$asd")
if(!C.a.ad(p,g)){g.sbe(p.length)
C.a.h(p,g)}d=l.k(0,i.gR(i))
g=i.gR(i).b7(new V.ay(0,0,0))
f=h.b
e=g.gcI(g)
c=g.gcJ(g)
g=g.gcK(g)
f.a.uniform3f(f.d,e,c,g)
g=d.b7(new V.ay(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.bB(0)
c=h.d
m=new Float32Array(H.bo(H.u(new V.aX(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).aa(0,!0),"$isd",s,"$asd")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.ga7(i)
g=h.e
e=c.gbE()
f=c.gb8()
c=c.gbj()
g.a.uniform3f(g.d,e,f,c)
c=i.gb3()
g=c.gcv(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gcv(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gj1(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gc5()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gc6()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gc7()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.dM
u.a.uniform1i(u.d,o)
u=a.db
l=u.gR(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.B)(u),++j){i=u[j]
s=this.a.cp
if(k>=s.length)return H.f(s,k)
h=s[k]
s=i.gb3()
H.u(p,"$isd",z,"$asd")
if(!C.a.ad(p,s)){s.sbe(p.length)
C.a.h(p,s)}s=i.gb1(i)
r=h.b
g=s.gcI(s)
f=s.gcJ(s)
s=s.gcK(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gci(i)
f=h.c
g=s.gaJ(s)
r=s.gaK(s)
s=s.gaL()
f.a.uniform3f(f.d,g,r,s)
s=i.gij()
r=h.d
g=s.gaJ(s)
f=s.gaK(s)
s=s.gaL()
r.a.uniform3f(r.d,g,f,s)
s=i.gb2(i)
f=h.e
g=s.gaJ(s)
r=s.gaK(s)
s=s.gaL()
f.a.uniform3f(f.d,g,r,s)
s=l.b7(i.gb1(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gb3()
r=s.gcv(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.geV()
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gbe())
s=h.x
s.a.uniform1i(s.d,0)}s=i.ga7(i)
r=h.y
g=s.gbE()
f=s.gb8()
s=s.gbj()
r.a.uniform3f(r.d,g,f,s)
s=i.gja()
f=h.z
f.a.uniform1f(f.d,s)
s=i.gjb()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gc5()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gc6()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gc7()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.c:break
case C.h:break
case C.d:this.T(p,this.Q.d)
z=this.a
u=this.Q.d
z.ac(z.dv,z.bt,u)
break
case C.e:this.T(p,this.Q.e)
z=this.a
u=this.Q.e
z.a6(z.dw,z.bt,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gR(u).bB(0)
a.Q=u}z=z.id
z.toString
z.ag(u.aa(0,!0))}if(w.dy){this.T(p,this.ch)
z=this.a
u=this.ch
z.a6(z.dz,z.dA,u)
switch(w.r){case C.c:break
case C.h:z=this.a
u=this.cx.f
z=z.bu
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.d:this.T(p,this.cx.d)
z=this.a
u=this.cx.d
z.ac(z.dB,z.bv,u)
u=this.a
z=this.cx.f
u=u.bu
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.e:this.T(p,this.cx.e)
z=this.a
u=this.cx.e
z.a6(z.dC,z.bv,u)
u=this.a
z=this.cx.f
u=u.bu
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.c:break
case C.h:z=this.a
u=this.cy.f
z=z.bx
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.bw
u.a.uniform1f(u.d,s)
break
case C.d:this.T(p,this.cy.d)
z=this.a
u=this.cy.d
z.ac(z.dD,z.by,u)
u=this.a
z=this.cy.f
u=u.bx
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bw
z.a.uniform1f(z.d,s)
break
case C.e:this.T(p,this.cy.e)
z=this.a
u=this.cy.e
z.a6(z.dE,z.by,u)
u=this.a
z=this.cy.f
u=u.bx
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bw
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.c
if(u){switch(z){case C.c:break
case C.h:z=this.a
t=this.db.f
z=z.bz
z.a.uniform1f(z.d,t)
break
case C.d:this.T(p,this.db.d)
z=this.a
t=this.db.d
z.ac(z.dF,z.bA,t)
t=this.a
z=this.db.f
t=t.bz
t.a.uniform1f(t.d,z)
break
case C.e:this.T(p,this.db.e)
z=this.a
t=this.db.e
z.a6(z.dG,z.bA,t)
t=this.a
z=this.db.f
t=t.bz
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n){z=p[n]
if(!z.c&&z.d){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,z.b)}}z=b.e
z.c8(a)
z.aQ(a)
z.ii(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n){z=p[n]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.x.hn()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cZ().ae},
p:{
en:function(){var z,y,x
z=new O.io()
y=O.cS(V.am)
z.e=y
y.bb(z.gf3(),z.gf4())
y=new O.b7(z,"emission")
y.c=C.c
y.f=new V.W(0,0,0)
z.f=y
y=new O.b7(z,"ambient")
y.c=C.c
y.f=new V.W(0,0,0)
z.r=y
y=new O.b7(z,"diffuse")
y.c=C.c
y.f=new V.W(0,0,0)
z.x=y
y=new O.b7(z,"invDiffuse")
y.c=C.c
y.f=new V.W(0,0,0)
z.y=y
y=new O.it(z,"specular")
y.c=C.c
y.f=new V.W(0,0,0)
y.ch=100
z.z=y
y=new O.iq(z,"bump")
y.c=C.c
z.Q=y
z.ch=null
y=new O.b7(z,"reflect")
y.c=C.c
y.f=new V.W(0,0,0)
z.cx=y
y=new O.is(z,"refract")
y.c=C.c
y.f=new V.W(0,0,0)
y.ch=1
z.cy=y
y=new O.ip(z,"alpha")
y.c=C.c
y.f=1
z.db=y
y=new D.i2()
y.bc(D.a3)
y.e=H.c([],[D.ch])
y.f=H.c([],[D.iF])
y.r=H.c([],[D.jd])
y.x=H.c([],[D.jo])
y.y=H.c([],[D.jp])
y.z=H.c([],[D.jq])
y.Q=null
y.ch=null
y.bI(y.gf2(),y.gfm(),y.gfo())
z.dx=y
x=y.Q
if(x==null){x=D.L()
y.Q=x
y=x}else y=x
y.h(0,z.gfw())
y=z.dx
x=y.ch
if(x==null){x=D.L()
y.ch=x
y=x}else y=x
y.h(0,z.gbg())
z.dy=null
return z}}},ip:{"^":"d2;0f,a,b,0c,0d,0e",
fC:function(a){var z,y
z=this.f
if(!$.n.$2(z,a)){y=this.f
this.f=a
z=new D.F(this.b,y,a,this,[P.v])
z.b=!0
this.a.W(z)}},
aF:function(){this.cN()
this.fC(1)}},d2:{"^":"b;",
W:[function(a){this.a.W(H.e(a,"$isz"))},function(){return this.W(null)},"f6","$1","$0","gbg",0,2,0],
aF:["cN",function(){}],
fE:function(a){var z,y
z=this.d
if(z==null?a!=null:z!==a){if(z!=null)z.gu().V(0,this.gbg())
y=this.d
this.d=a
if(a!=null)a.gu().h(0,this.gbg())
z=new D.F(this.b+".texture2D",y,this.d,this,[T.eL])
z.b=!0
this.a.W(z)}},
fF:function(a){},
se8:function(a){var z=this.c
if(z!==C.d){if(z===C.c)this.aF()
this.c=C.d
this.fF(null)
z=this.a
z.a=null
z.W(null)}this.fE(a)}},iq:{"^":"d2;a,b,0c,0d,0e"},b7:{"^":"d2;0f,a,b,0c,0d,0e",
da:function(a){var z,y
if(!J.T(this.f,a)){z=this.f
this.f=a
y=new D.F(this.b+".color",z,a,this,[V.W])
y.b=!0
this.a.W(y)}},
aF:["bL",function(){this.cN()
this.da(new V.W(1,1,1))}],
sa7:function(a,b){var z
if(this.c===C.c){this.c=C.h
this.aF()
z=this.a
z.a=null
z.W(null)}this.da(b)}},is:{"^":"b7;0ch,0f,a,b,0c,0d,0e",
fD:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.F(this.b+".refraction",y,a,this,[P.v])
z.b=!0
this.a.W(z)}},
aF:function(){this.bL()
this.fD(1)}},it:{"^":"b7;0ch,0f,a,b,0c,0d,0e",
c0:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.F(this.b+".shininess",y,a,this,[P.v])
z.b=!0
this.a.W(z)}},
aF:function(){this.bL()
this.c0(100)}},df:{"^":"b;"}}],["","",,T,{"^":"",dg:{"^":"cM;"},eL:{"^":"dg;"},jl:{"^":"eL;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gu:function(){var z=this.y
if(z==null){z=D.L()
this.y=z}return z}},jm:{"^":"b;a,0b,0c,0d,0e",
hF:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
z.bindTexture(3553,y)
z.texParameteri(3553,10242,10497)
z.texParameteri(3553,10243,10497)
z.texParameteri(3553,10241,9987)
z.texParameteri(3553,10240,9729)
z.bindTexture(3553,null);++this.d
x=document.createElement("img")
x.src=a
w=new T.jl()
w.a=0
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
z=W.ae
W.a1(x,"load",H.l(new T.jn(this,w,x,!1,y,!1,!0),{func:1,ret:-1,args:[z]}),!1,z)
return w},
hE:function(a,b,c){return this.hF(a,!1,b,!1,c)},
fA:function(a,b,c){var z,y,x,w
b=V.dH(b,2)
z=V.dH(a.width,2)
y=V.dH(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cR(null,null)
x.width=z
x.height=y
w=H.e(C.l.eg(x,"2d"),"$isdW")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.mk(w.getImageData(0,0,x.width,x.height))}}},jn:{"^":"p:13;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.fA(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.X.i9(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.ho()}++x.e}}}],["","",,V,{"^":"",he:{"^":"b;",
aY:function(a,b){return!0},
i:function(a){return"all"},
$isc3:1},c3:{"^":"b;"},em:{"^":"b;",
aY:["eo",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)if(z[x].aY(0,b))return!0
return!1}],
i:["cM",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isc3:1},bE:{"^":"em;0a",
aY:function(a,b){return!this.eo(0,b)},
i:function(a){return"!["+this.cM(0)+"]"}},j4:{"^":"b;0a",
es:function(a){var z,y
if(a.a.length<=0)throw H.a(P.t("May not create a SetMatcher with zero characters."))
z=new H.aW(0,0,[P.m,P.Z])
for(y=new H.ek(a,a.gl(a),0,[H.ar(a,"x",0)]);y.D();)z.m(0,y.d,!0)
this.a=z},
aY:function(a,b){return this.a.bl(0,b)},
i:function(a){var z=this.a
return P.c6(z.gal(z),0,null)},
$isc3:1,
p:{
ac:function(a){var z=new V.j4()
z.es(a)
return z}}},eF:{"^":"b;a,b,0c,0d",
ghI:function(a){return this.b},
A:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eS(this.a.L(0,b))
w.a=H.c([],[V.c3])
w.c=!1
C.a.h(this.c,w)
return w},
hr:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.aY(0,a))return w}return},
i:function(a){return this.b}},eP:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.h3(this.b,"\n","\\n")
y=H.h3(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},eQ:{"^":"b;a,b,0c",
i:function(a){return this.b}},jv:{"^":"b;0a,0b,0c",
L:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.eF(this,b)
z.c=H.c([],[V.eS])
this.a.m(0,b,z)}return z},
b5:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.eQ(this,a)
y=P.i
z.c=new H.aW(0,0,[y,y])
this.b.m(0,a,z)}return z},
ih:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.eP])
y=this.c
x=[P.m]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.E(a,t)
r=y.hr(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.c6(w,0,null)
throw H.a(P.t("Untokenizable string [state: "+y.ghI(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.c6(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.eP(o==null?p.b:o,q,t)}++t}}}},eS:{"^":"em;b,0c,0a",
i:function(a){return this.b.b+": "+this.cM(0)}}}],["","",,X,{"^":"",dV:{"^":"b;",$isaK:1},hR:{"^":"eJ;0a,0b,0c,0d,0e,0f,0r,0x",
gu:function(){var z=this.x
if(z==null){z=D.L()
this.x=z}return z}},iD:{"^":"b;0a,0b,0c,0d,0e,0f",
gu:function(){var z=this.f
if(z==null){z=D.L()
this.f=z}return z},
aU:[function(a){var z
H.e(a,"$isz")
z=this.f
if(!(z==null))z.v(a)},function(){return this.aU(null)},"ir","$1","$0","gcR",0,2,0],
saP:function(a){var z,y
if(!J.T(this.b,a)){z=this.b
if(z!=null)z.gu().V(0,this.gcR())
y=this.b
this.b=a
if(a!=null)a.gu().h(0,this.gcR())
z=new D.F("mover",y,this.b,this,[U.a7])
z.b=!0
this.aU(z)}},
$isaK:1,
$isdV:1},eJ:{"^":"b;"}}],["","",,V,{"^":"",
mL:function(a){P.ju(C.G,new V.mM(a))},
hn:{"^":"b;a,b,0c,0d",
ha:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
H.l(c,{func:1,ret:-1,args:[P.Z]})
if(this.c==null)return
z=this.d.length
y=P.dm().gbD().j(0,this.a)
if(y==null||y.length<=z){x=!0
w=!1}else{if(z>=y.length)return H.f(y,z)
w=y[z]==="1"
x=!1}c.$1(w)
v=document
u=v.createElement("label")
t=u.style
t.whiteSpace="nowrap"
J.dL(this.c).h(0,u)
s=W.hT("checkbox")
s.checked=w
t=W.ae
W.a1(s,"change",H.l(new V.ho(this,c,s,z),{func:1,ret:-1,args:[t]}),!1,t)
u.appendChild(s)
r=v.createElement("span")
r.textContent=b
u.appendChild(r)
J.dL(this.c).h(0,v.createElement("br"))
C.a.h(this.d,s)
if(x)this.dg(z,w)},
dg:function(a,b){var z,y,x,w,v,u,t
z=this.a
y=P.dm().gbD().j(0,z)
if(y==null)y=""
x=y.length
if(x<a)y=C.b.hR(y,a-x+1,"0")
w=a>0?C.b.q(y,0,a):""
w+=b?"1":"0"
x=a+1
if(x<y.length)w+=C.b.ap(y,x)
v=P.dm()
x=P.i
u=P.i8(v.gbD(),x,x)
u.m(0,z,w)
t=v.e5(0,u)
z=window.history
x=t.i(0)
z.toString
z.replaceState(new P.lg([],[]).cG(""),"",x)}},
ho:{"^":"p:13;a,b,c,d",
$1:function(a){var z=this.c
this.b.$1(z.checked)
this.a.dg(this.d,z.checked)}},
mM:{"^":"p:49;a",
$1:function(a){H.e(a,"$isbh")
P.dI(C.i.eb(this.a.ghv(),2)+" fps")}},
j9:{"^":"b;0a,0b",
ev:function(a,b){var z,y,x,w,v,u,t
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
t=W.ae
W.a1(z,"scroll",H.l(new V.jc(x),{func:1,ret:-1,args:[t]}),!1,t)},
dj:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.u(a,"$isd",[P.i],"$asd")
this.fH()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.ih(C.a.hA(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
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
if(H.h2(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.f(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cz(C.S,s,C.k,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.k(p)
q.textContent=s
y.appendChild(q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
y.appendChild(t)
break}}this.a.appendChild(y)},
hb:function(a){var z,y,x,w,v,u,t
H.u(a,"$isd",[P.i],"$asd")
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
x=H.e(w.insertCell(-1),"$isde").style
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
t=H.e(w.insertCell(-1),"$isde")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
fH:function(){var z,y,x,w
if(this.b!=null)return
z=new V.jv()
y=P.i
z.a=new H.aW(0,0,[y,V.eF])
z.b=new H.aW(0,0,[y,V.eQ])
z.c=z.L(0,"Start")
y=z.L(0,"Start").A(0,"Bold")
x=V.ac(new H.a5("*"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Bold").A(0,"Bold")
x=new V.bE()
w=[V.c3]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.ac(new H.a5("*"))
C.a.h(x.a,y)
y=z.L(0,"Bold").A(0,"BoldEnd")
x=V.ac(new H.a5("*"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Start").A(0,"Italic")
x=V.ac(new H.a5("_"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Italic").A(0,"Italic")
x=new V.bE()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.ac(new H.a5("_"))
C.a.h(x.a,y)
y=z.L(0,"Italic").A(0,"ItalicEnd")
x=V.ac(new H.a5("_"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Start").A(0,"Code")
x=V.ac(new H.a5("`"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Code").A(0,"Code")
x=new V.bE()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.ac(new H.a5("`"))
C.a.h(x.a,y)
y=z.L(0,"Code").A(0,"CodeEnd")
x=V.ac(new H.a5("`"))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"Start").A(0,"LinkHead")
x=V.ac(new H.a5("["))
C.a.h(y.a,x)
y.c=!0
y=z.L(0,"LinkHead").A(0,"LinkTail")
x=V.ac(new H.a5("|"))
C.a.h(y.a,x)
x=z.L(0,"LinkHead").A(0,"LinkEnd")
y=V.ac(new H.a5("]"))
C.a.h(x.a,y)
x.c=!0
x=z.L(0,"LinkHead").A(0,"LinkHead")
y=new V.bE()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.ac(new H.a5("|]"))
C.a.h(y.a,x)
x=z.L(0,"LinkTail").A(0,"LinkEnd")
y=V.ac(new H.a5("]"))
C.a.h(x.a,y)
x.c=!0
x=z.L(0,"LinkTail").A(0,"LinkTail")
y=new V.bE()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.ac(new H.a5("|]"))
C.a.h(y.a,x)
C.a.h(z.L(0,"Start").A(0,"Other").a,new V.he())
x=z.L(0,"Other").A(0,"Other")
y=new V.bE()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.ac(new H.a5("*_`["))
C.a.h(y.a,x)
x=z.L(0,"BoldEnd")
x.d=x.a.b5("Bold")
x=z.L(0,"ItalicEnd")
x.d=x.a.b5("Italic")
x=z.L(0,"CodeEnd")
x.d=x.a.b5("Code")
x=z.L(0,"LinkEnd")
x.d=x.a.b5("Link")
x=z.L(0,"Other")
x.d=x.a.b5("Other")
this.b=z},
p:{
ja:function(a,b){var z=new V.j9()
z.ev(a,!0)
return z}}},
jc:{"^":"p:13;a",
$1:function(a){P.eN(C.q,new V.jb(this.a))}},
jb:{"^":"p:2;a",
$0:function(){var z,y,x
z=C.i.af(document.documentElement.scrollTop)
y=this.a.style
x=H.k(-0.01*z)+"px"
y.top=x}}}],["","",,X,{"^":"",
ml:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=O.en()
y=z.dx
x=U.cg(V.d5(1,-3,-1,null))
y.h(0,D.cU(new V.W(0.4,0.4,1),x))
y=z.dx
x=U.cg(V.d5(0,1,0,null))
y.h(0,D.cU(new V.W(0,0.2,0.1),x))
y=z.r
y.sa7(0,new V.W(0.2,0.2,0.2))
y=z.x
y.sa7(0,new V.W(0.7,0.7,0.7))
z.z.sa7(0,new V.W(1,1,1))
y=z.z
if(y.c===C.c){y.c=C.h
y.bL()
y.c0(100)
x=y.a
x.a=null
x.W(null)}y.c0(10)
w=E.ci(null,!0,null,"",null,null)
w.scF(z)
v=F.eD()
F.bO(v,null,null,1,1,1,0,0,1)
F.bO(v,null,null,1,1,0,1,0,3)
F.bO(v,null,null,1,1,0,0,1,2)
F.bO(v,null,null,1,1,-1,0,0,0)
F.bO(v,null,null,1,1,0,-1,0,0)
F.bO(v,null,null,1,1,0,0,-1,3)
v.aI()
for(y=[U.a7],x=[P.v],u=-60;u<=60;u+=12)for(t=u/10,s=-60;s<=60;s+=12){r=E.ci(null,!0,null,"",null,null)
r.sbJ(0,v)
q=s/10
p=new U.eA()
p.a=0
p.b=0
p.c=0
p.d=0
p.e=0
p.f=0
p.r=0
p.see(t)
p.se1(0,q)
p.se6(0)
o=p.d
if(!$.n.$2(o,t)){n=p.d
p.d=t
o=new D.F("deltaYaw",n,t,p,x)
o.b=!0
m=p.y
if(!(m==null))m.v(o)}o=p.e
if(!$.n.$2(o,q)){n=p.e
p.e=q
q=new D.F("deltaPitch",n,q,p,x)
q.b=!0
o=p.y
if(!(o==null))o.v(q)}q=p.f
if(!$.n.$2(q,0.32)){n=p.f
p.f=0.32
q=new D.F("deltaRoll",n,0.32,p,x)
q.b=!0
o=p.y
if(!(o==null))o.v(q)}q=new U.cT()
q.sR(0,new V.am(1,0,0,u,0,1,0,0,0,0,1,s,0,0,0,1))
r.saP(U.eb(H.c([p,q],y)))
q=w.y
p=H.w(q,0)
H.y(r,p)
o=[p]
if(q.bY(H.c([r],o))){m=q.a
l=m.length
C.a.h(m,r)
p=H.u(H.c([r],o),"$ish",[p],"$ash")
q=q.c
if(q!=null)q.$2(l,p)}}return w},
fZ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=V.ja("Test 038",!0)
y=W.cR(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.i]
z.dj(H.c(["A test of basic 3D movement around a room similar to a first person view. ","A and D (left and right arrow keys) strifes left and right. ","W and S (up and down arrow keys) moves forward and backward. ","Q and E moves up and down. Mouse looks around with left mouse button pressed."],x))
z.hb(H.c(["options"],x))
z.dj(H.c(["\xab[Back to Tests|../]"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.q(P.t("Failed to find an element with the identifier, testCanvas."))
v=E.js(w,!0,!0,!0,!1)
u=E.ci(null,!0,null,"",null,null)
z=u.y
t=v.f.hE("../resources/Grass.png",!0,!0)
s=U.cg(V.eq(0,-3,0).k(0,V.aD(1000,0,0,0,0,1,0,0,0,0,1000,0,0,0,0,1)).k(0,V.d4(-1.5707963267948966)))
r=O.en()
q=new V.aX(1000,0,0,0,1000,0,0,0,1)
if(!J.T(r.b,q)){p=r.b
o=p==null&&!0
if(o)r.a=null
r.b=q
p=new D.F("texture2DMatrix",p,q,r,[V.aX])
p.b=!0
r.W(p)}r.dx.h(0,D.cU(new V.W(1,1,1),U.cg(V.d5(1,-3,-1,null))))
p=r.r
p.sa7(0,new V.W(0.5,0.5,0.5))
p=r.x
p.sa7(0,new V.W(0.5,0.5,0.5))
r.r.se8(t)
r.x.se8(t)
p=E.ci(null,!0,null,"",null,null)
p.sbJ(0,F.ms(20,null,20))
p.saP(s)
p.scF(r)
z.h(0,p)
u.y.h(0,X.ml(v))
p=v.r
n=new U.jW()
z=X.bB()
z.h(0,new X.U(39,new X.a4(!1,!1,!1)))
z.h(0,new X.U(68,new X.a4(!1,!1,!1)))
o=n.gfd()
z.gaN().h(0,o)
n.a=z
z=X.bB()
z.h(0,new X.U(37,new X.a4(!1,!1,!1)))
z.h(0,new X.U(65,new X.a4(!1,!1,!1)))
z.gaN().h(0,o)
n.b=z
z=X.bB()
z.h(0,new X.U(81,new X.a4(!1,!1,!1)))
z.gaN().h(0,o)
n.c=z
z=X.bB()
z.h(0,new X.U(69,new X.a4(!1,!1,!1)))
z.gaN().h(0,o)
n.d=z
z=X.bB()
z.h(0,new X.U(40,new X.a4(!1,!1,!1)))
z.h(0,new X.U(83,new X.a4(!1,!1,!1)))
z.gaN().h(0,o)
n.e=z
z=X.bB()
z.h(0,new X.U(38,new X.a4(!1,!1,!1)))
z.h(0,new X.U(87,new X.a4(!1,!1,!1)))
z.gaN().h(0,o)
n.f=z
z=U.bX()
z.saZ(30)
z.sav(0)
o=n.gaB()
z.gu().h(0,o)
n.r=z
z=U.bX()
z.saZ(30)
z.sav(0)
z.gu().h(0,o)
n.x=z
z=U.bX()
z.saZ(30)
z.sav(0)
z.gu().h(0,o)
n.y=z
n.z=null
n.Q=null
n.ch=60
n.cx=15
n.cy=0
n.db=null
n.dx=null
n.dy=null
n.a.ai(p)
n.b.ai(p)
n.c.ai(p)
n.d.ai(p)
n.e.ai(p)
n.f.ai(p)
z=v.r
m=new U.jV()
p=U.bX()
p.scH(0,!0)
p.scw(6.283185307179586)
p.scz(0)
p.sa_(0,0)
p.saZ(100)
p.sS(0)
p.sav(0.5)
m.b=p
o=m.gaB()
p.gu().h(0,o)
p=U.bX()
p.scH(0,!0)
p.scw(6.283185307179586)
p.scz(0)
p.sa_(0,0)
p.saZ(100)
p.sS(0)
p.sav(0.5)
m.c=p
p.gu().h(0,o)
m.d=null
m.e=!1
m.f=!1
m.r=!1
m.x=2.5
m.y=2.5
m.z=2
m.Q=4
m.cx=!1
m.ch=!1
m.cy=0
m.db=0
m.dx=null
m.dy=0
m.fr=null
m.fx=null
l=new X.a4(!1,!1,!1)
k=m.d
m.d=l
p=new D.F("modifiers",k,l,m,[X.a4])
p.b=!0
m.M(p)
p=m.f
if(p!==!1){m.f=!1
p=new D.F("invertX",p,!1,m,[P.Z])
p.b=!0
m.M(p)}p=m.r
if(p!==!1){m.r=!1
p=new D.F("invertY",p,!1,m,[P.Z])
p.b=!0
m.M(p)}m.ai(z)
m.b.scw(1.5707963267948966)
m.b.scz(-1.5707963267948966)
m.b.sav(1)
m.c.sav(1)
m.b.scH(0,!1)
m.gu().h(0,new X.mD(n,m))
j=U.eb(H.c([n,m],[U.a7]))
z=new M.hK()
p=O.cS(E.aJ)
z.d=p
p.bb(z.gf7(),z.gf8())
z.e=null
z.f=null
z.r=null
z.x=null
i=new X.iD()
i.c=1.0471975511965976
i.d=0.1
i.e=2000
i.saP(null)
p=i.c
if(!$.n.$2(p,1.0471975511965976)){k=i.c
i.c=1.0471975511965976
p=new D.F("fov",k,1.0471975511965976,i,[P.v])
p.b=!0
i.aU(p)}p=i.d
if(!$.n.$2(p,0.1)){k=i.d
i.d=0.1
p=new D.F("near",k,0.1,i,[P.v])
p.b=!0
i.aU(p)}p=i.e
if(!$.n.$2(p,2000)){k=i.e
i.e=2000
p=new D.F("far",k,2000,i,[P.v])
p.b=!0
i.aU(p)}p=z.a
if(p!==i){if(p!=null)p.gu().V(0,z.gaC())
k=z.a
z.a=i
i.gu().h(0,z.gaC())
p=new D.F("camera",k,z.a,z,[X.dV])
p.b=!0
z.aT(p)}h=new X.hR()
p=new V.ce(0,0,0,1)
h.a=p
h.b=!0
h.c=2000
h.d=!0
h.e=0
h.f=!1
p=V.ez(0,0,1,1)
h.r=p
p=z.b
if(p!==h){if(p!=null)p.gu().V(0,z.gaC())
k=z.b
z.b=h
h.gu().h(0,z.gaC())
p=new D.F("target",k,z.b,z,[X.eJ])
p.b=!0
z.aT(p)}z.d.h(0,u)
z.a.saP(j)
p=v.d
if(p!==z){if(p!=null)p.gu().V(0,v.gcP())
v.d=z
z.gu().h(0,v.gcP())
v.ex()}z=new V.hn("options",!0)
x=x.getElementById("options")
z.c=x
if(x==null)H.q("Failed to find options for CheckGroup")
z.d=H.c([],[W.dY])
z.ha(0,"Mouse Locking",new X.mE(v),!1)
V.mL(v)},
mD:{"^":"p:9;a,b",
$1:function(a){var z,y,x,w,v
H.e(a,"$isz")
z=this.a
y=-this.b.c.d
x=Math.cos(y)
w=Math.sin(y)
y=new V.aX(x,0,-w,0,1,0,w,0,x)
if(!J.T(z.z,y)){v=z.z
z.z=y
z.Q=y.bB(0)
y=new D.F("velocityRotation",v,z.z,z,[V.aX])
y.b=!0
z.M(y)}}},
mE:{"^":"p:50;a",
$1:function(a){this.a.r.r=a}}},1]]
setupProgram(dart,0,0)
J.K=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eg.prototype
return J.ef.prototype}if(typeof a=="string")return J.cn.prototype
if(a==null)return J.eh.prototype
if(typeof a=="boolean")return J.hX.prototype
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c2.prototype
return a}if(a instanceof P.b)return a
return J.cE(a)}
J.aH=function(a){if(typeof a=="string")return J.cn.prototype
if(a==null)return a
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c2.prototype
return a}if(a instanceof P.b)return a
return J.cE(a)}
J.c9=function(a){if(a==null)return a
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c2.prototype
return a}if(a instanceof P.b)return a
return J.cE(a)}
J.mq=function(a){if(typeof a=="number")return J.cm.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cu.prototype
return a}
J.dD=function(a){if(typeof a=="string")return J.cn.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cu.prototype
return a}
J.aZ=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c2.prototype
return a}if(a instanceof P.b)return a
return J.cE(a)}
J.T=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.K(a).t(a,b)}
J.h6=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mq(a).K(a,b)}
J.dJ=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fW(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aH(a).j(a,b)}
J.cJ=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.fW(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.c9(a).m(a,b,c)}
J.h7=function(a,b){return J.dD(a).E(a,b)}
J.h8=function(a,b,c){return J.aZ(a).fu(a,b,c)}
J.h9=function(a,b,c,d){return J.aZ(a).di(a,b,c,d)}
J.ha=function(a,b){return J.dD(a).U(a,b)}
J.cK=function(a,b,c){return J.aH(a).hh(a,b,c)}
J.cL=function(a,b){return J.c9(a).F(a,b)}
J.hb=function(a,b,c,d){return J.c9(a).aw(a,b,c,d)}
J.dK=function(a,b){return J.c9(a).H(a,b)}
J.dL=function(a){return J.aZ(a).gce(a)}
J.bU=function(a){return J.K(a).gP(a)}
J.bv=function(a){return J.c9(a).gY(a)}
J.au=function(a){return J.aH(a).gl(a)}
J.hc=function(a,b){return J.aZ(a).i2(a,b)}
J.hd=function(a,b){return J.aZ(a).sZ(a,b)}
J.ad=function(a){return J.K(a).i(a)}
I.aj=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.cQ.prototype
C.H=J.r.prototype
C.a=J.b6.prototype
C.I=J.ef.prototype
C.f=J.eg.prototype
C.t=J.eh.prototype
C.i=J.cm.prototype
C.b=J.cn.prototype
C.P=J.c2.prototype
C.V=H.d8.prototype
C.W=W.iA.prototype
C.z=J.iE.prototype
C.X=P.dc.prototype
C.r=J.cu.prototype
C.A=W.bK.prototype
C.B=W.kf.prototype
C.D=new P.hj(!1)
C.C=new P.hi(C.D)
C.E=new P.iC()
C.F=new P.k3()
C.j=new P.l2()
C.c=new A.cf(0,"ColorSourceType.None")
C.h=new A.cf(1,"ColorSourceType.Solid")
C.d=new A.cf(2,"ColorSourceType.Texture2D")
C.e=new A.cf(3,"ColorSourceType.TextureCube")
C.q=new P.by(0)
C.G=new P.by(5e6)
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
C.w=H.c(I.aj([127,2047,65535,1114111]),[P.m])
C.m=H.c(I.aj([0,0,32776,33792,1,10240,0,0]),[P.m])
C.n=H.c(I.aj([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.o=H.c(I.aj([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.R=H.c(I.aj([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.S=H.c(I.aj([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.p=H.c(I.aj([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.x=H.c(I.aj([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.T=H.c(I.aj([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.y=H.c(I.aj([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.Q=H.c(I.aj([]),[P.i])
C.U=new H.hx(0,{},C.Q,[P.i,P.i])
C.k=new P.jX(!1)
$.aB=0
$.bw=null
$.dQ=null
$.dw=!1
$.fU=null
$.fO=null
$.h1=null
$.cD=null
$.cG=null
$.dE=null
$.bp=null
$.bP=null
$.bQ=null
$.dx=!1
$.S=C.j
$.e5=null
$.e4=null
$.e3=null
$.e2=null
$.n=V.iu()
$.ev=null
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
I.$lazy(y,x,w)}})(["e1","$get$e1",function(){return H.fT("_$dart_dartClosure")},"cY","$get$cY",function(){return H.fT("_$dart_js")},"eT","$get$eT",function(){return H.aE(H.ct({
toString:function(){return"$receiver$"}}))},"eU","$get$eU",function(){return H.aE(H.ct({$method$:null,
toString:function(){return"$receiver$"}}))},"eV","$get$eV",function(){return H.aE(H.ct(null))},"eW","$get$eW",function(){return H.aE(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"f_","$get$f_",function(){return H.aE(H.ct(void 0))},"f0","$get$f0",function(){return H.aE(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eY","$get$eY",function(){return H.aE(H.eZ(null))},"eX","$get$eX",function(){return H.aE(function(){try{null.$method$}catch(z){return z.message}}())},"f2","$get$f2",function(){return H.aE(H.eZ(void 0))},"f1","$get$f1",function(){return H.aE(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dr","$get$dr",function(){return P.kg()},"bR","$get$bR",function(){return[]},"fd","$get$fd",function(){return P.k0()},"fj","$get$fj",function(){return H.iy(H.bo(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"fE","$get$fE",function(){return P.iV("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fK","$get$fK",function(){return P.m1()},"e_","$get$e_",function(){return{}},"fg","$get$fg",function(){return Z.aq(0)},"fe","$get$fe",function(){return Z.aq(511)},"aQ","$get$aQ",function(){return Z.aq(1)},"aP","$get$aP",function(){return Z.aq(2)},"aO","$get$aO",function(){return Z.aq(4)},"aR","$get$aR",function(){return Z.aq(8)},"aS","$get$aS",function(){return Z.aq(16)},"bI","$get$bI",function(){return Z.aq(32)},"bJ","$get$bJ",function(){return Z.aq(64)},"ff","$get$ff",function(){return Z.aq(96)},"bm","$get$bm",function(){return Z.aq(128)},"aN","$get$aN",function(){return Z.aq(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.z]},{func:1,ret:-1,args:[D.z]},{func:1,ret:P.G},{func:1,ret:-1},{func:1,ret:-1,args:[W.ax]},{func:1,ret:P.G,args:[,,]},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:-1,args:[W.ae]},{func:1,ret:-1,args:[P.m,[P.h,E.aJ]]},{func:1,ret:P.G,args:[D.z]},{func:1,ret:P.G,args:[F.aw]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bj]},{func:1,ret:P.G,args:[W.ae]},{func:1,ret:P.G,args:[F.bk,P.v,P.v]},{func:1,ret:P.i,args:[P.m]},{func:1,args:[,]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:-1,args:[P.m,[P.h,X.U]]},{func:1,ret:P.G,args:[,]},{func:1,ret:-1,args:[W.bC]},{func:1,ret:-1,args:[P.m,[P.h,D.a3]]},{func:1,ret:P.v},{func:1,ret:-1,args:[P.m,[P.h,U.a7]]},{func:1,ret:-1,args:[P.m,[P.h,V.am]]},{func:1,ret:W.a_,args:[W.J]},{func:1,ret:P.Z,args:[W.J]},{func:1,ret:-1,args:[P.i,P.m]},{func:1,args:[P.i]},{func:1,ret:-1,args:[P.b],opt:[P.az]},{func:1,ret:-1,args:[P.i],opt:[,]},{func:1,ret:P.G,args:[P.a2]},{func:1,ret:P.G,args:[{func:1,ret:-1,args:[D.z]}]},{func:1,ret:P.Z,args:[[P.h,X.U]]},{func:1,ret:P.Z,args:[P.v,P.v]},{func:1,ret:[P.aT,,],args:[,]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:-1,args:[W.bK]},{func:1,ret:[P.I,P.i,P.i],args:[[P.I,P.i,P.i],P.i]},{func:1,ret:P.Z,args:[[P.h,D.a3]]},{func:1,ret:P.G,args:[P.i,,]},{func:1,ret:P.Q,args:[P.m]},{func:1,ret:P.Q,args:[,,]},{func:1,ret:P.G,args:[P.i]},{func:1,ret:P.v,args:[P.v,P.v]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,args:[,P.i]},{func:1,ret:P.G,args:[P.bh]},{func:1,ret:P.G,args:[P.Z]},{func:1,ret:P.m,args:[[P.d,P.m],P.m]},{func:1,ret:P.G,args:[,],opt:[,]}]
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
if(x==y)H.mN(d||a)
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
Isolate.dB=a.dB
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
if(typeof dartMainRunner==="function")dartMainRunner(X.fZ,[])
else X.fZ([])})})()
//# sourceMappingURL=test.dart.js.map
