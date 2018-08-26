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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$ism)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
var dart=[["","",,H,{"^":"",lu:{"^":"a;a"}}],["","",,J,{"^":"",
I:function(a){return void 0},
d5:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ci:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.d3==null){H.kg()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.j(P.ej("Return interceptor for "+H.i(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cz()]
if(v!=null)return v
v=H.kl(a)
if(v!=null)return v
if(typeof a=="function")return C.E
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cz(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
m:{"^":"a;",
u:function(a,b){return a===b},
gR:function(a){return H.bl(a)},
j:["dH",function(a){return"Instance of '"+H.aT(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fH:{"^":"m;",
j:function(a){return String(a)},
gR:function(a){return a?519018:218159},
$isa7:1},
dB:{"^":"m;",
u:function(a,b){return null==b},
j:function(a){return"null"},
gR:function(a){return 0},
$isH:1},
cA:{"^":"m;",
gR:function(a){return 0},
j:["dI",function(a){return String(a)}]},
hi:{"^":"cA;"},
cc:{"^":"cA;"},
bL:{"^":"cA;",
j:function(a){var z=a[$.$get$dm()]
if(z==null)return this.dI(a)
return"JavaScript function for "+H.i(J.aj(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscw:1},
bJ:{"^":"m;$ti",
h:function(a,b){H.B(b,H.y(a,0))
if(!!a.fixed$length)H.r(P.ab("add"))
a.push(b)},
M:function(a,b){var z
if(!!a.fixed$length)H.r(P.ab("remove"))
for(z=0;z<a.length;++z)if(J.P(a[z],b)){a.splice(z,1)
return!0}return!1},
bM:function(a,b){var z,y
H.w(b,"$ise",[H.y(a,0)],"$ase")
if(!!a.fixed$length)H.r(P.ab("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.z)(b),++y)a.push(b[y])},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.j(P.b7(a))}},
W:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.a4(z,y,H.i(a[y]))
return z.join(b)},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
gc3:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.j(H.fF())},
b8:function(a,b){var z
for(z=0;z<a.length;++z)if(J.P(a[z],b))return!0
return!1},
j:function(a){return P.cx(a,"[","]")},
gV:function(a){return new J.ak(a,a.length,0,[H.y(a,0)])},
gR:function(a){return H.bl(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.r(P.ab("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.bZ(b,"newLength",null))
if(b<0)throw H.j(P.bm(b,0,null,"newLength",null))
a.length=b},
a4:function(a,b,c){H.a_(b)
H.B(c,H.y(a,0))
if(!!a.immutable$list)H.r(P.ab("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(H.bS(a,b))
if(b>=a.length||b<0)throw H.j(H.bS(a,b))
a[b]=c},
$ise:1,
$isc:1,
t:{
fG:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.j(P.bZ(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.j(P.bm(a,0,4294967295,"length",null))
return J.dy(new Array(a),b)},
dy:function(a,b){return J.be(H.f(a,[b]))},
be:function(a){H.bW(a)
a.fixed$length=Array
return a}}},
lt:{"^":"bJ;$ti"},
ak:{"^":"a;a,b,c,0d,$ti",
gO:function(a){return this.d},
E:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.j(H.z(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bK:{"^":"m;",
gfM:function(a){return a===0?1/a<0:a<0},
hg:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.j(P.ab(""+a+".toInt()"))},
c1:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.j(P.ab(""+a+".floor()"))},
a7:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.j(P.ab(""+a+".round()"))},
dv:function(a,b){var z
if(b>20)throw H.j(P.bm(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gfM(a))return"-"+z
return z},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gR:function(a){return a&0x1FFFFFFF},
i:function(a,b){if(typeof b!=="number")throw H.j(H.bR(b))
return a*b},
dD:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
dK:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cL(a,b)},
Z:function(a,b){return(a|0)===a?a/b|0:this.cL(a,b)},
cL:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.j(P.ab("Result of truncating division is "+H.i(z)+": "+H.i(a)+" ~/ "+b))},
cJ:function(a,b){var z
if(a>0)z=this.f_(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
f_:function(a,b){return b>31?0:a>>>b},
ac:function(a,b){if(typeof b!=="number")throw H.j(H.bR(b))
return a<b},
$isv:1,
$isT:1},
dA:{"^":"bK;",$isL:1},
dz:{"^":"bK;"},
c8:{"^":"m;",
e0:function(a,b){if(b>=a.length)throw H.j(H.bS(a,b))
return a.charCodeAt(b)},
F:function(a,b){H.U(b)
if(typeof b!=="string")throw H.j(P.bZ(b,null,null))
return a+b},
ck:function(a,b,c){H.a_(c)
if(c==null)c=a.length
if(b>c)throw H.j(P.cI(b,null,null))
if(c>a.length)throw H.j(P.cI(c,null,null))
return a.substring(b,c)},
cj:function(a,b){return this.ck(a,b,null)},
i:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.j(C.t)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
fX:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.i(c,z)+a},
ar:function(a,b){return this.fX(a,b," ")},
fB:function(a,b,c){if(c>a.length)throw H.j(P.bm(c,0,a.length,null,null))
return H.kx(a,b,c)},
j:function(a){return a},
gR:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$ishg:1,
$iso:1}}],["","",,H,{"^":"",
fF:function(){return new P.hL("No element")},
fr:{"^":"e;"},
fS:{"^":"a;a,b,c,0d,$ti",
gO:function(a){return this.d},
E:function(){var z,y,x,w
z=this.a
y=J.bU(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.j(P.b7(z))
w=this.c
if(typeof x!=="number")return H.p(x)
if(w>=x){this.d=null
return!1}this.d=y.D(z,w);++this.c
return!0}},
fY:{"^":"e;a,b,$ti",
gV:function(a){return new H.fZ(J.bY(this.a),this.b,this.$ti)},
gl:function(a){return J.b5(this.a)},
D:function(a,b){return this.b.$1(J.d9(this.a,b))},
$ase:function(a,b){return[b]}},
fZ:{"^":"cy;0a,b,c,$ti",
E:function(){var z=this.b
if(z.E()){this.a=this.c.$1(z.gO(z))
return!0}this.a=null
return!1},
gO:function(a){return this.a},
$ascy:function(a,b){return[b]}},
ix:{"^":"e;a,b,$ti",
gV:function(a){return new H.iy(J.bY(this.a),this.b,this.$ti)}},
iy:{"^":"cy;a,b,$ti",
E:function(){var z,y
for(z=this.a,y=this.b;z.E();)if(y.$1(z.gO(z)))return!0
return!1},
gO:function(a){var z=this.a
return z.gO(z)}},
c5:{"^":"a;$ti"}}],["","",,H,{"^":"",
kb:function(a){return init.types[H.a_(a)]},
kj:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.I(a).$isA},
i:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aj(a)
if(typeof z!=="string")throw H.j(H.bR(a))
return z},
bl:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aT:function(a){var z,y,x,w,v,u,t,s,r
z=J.I(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.v||!!J.I(a).$iscc){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.j.e0(w,0)===36)w=C.j.cj(w,1)
r=H.d4(H.bW(H.aM(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
a5:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hq:function(a){return a.b?H.a5(a).getUTCFullYear()+0:H.a5(a).getFullYear()+0},
ho:function(a){return a.b?H.a5(a).getUTCMonth()+1:H.a5(a).getMonth()+1},
hk:function(a){return a.b?H.a5(a).getUTCDate()+0:H.a5(a).getDate()+0},
hl:function(a){return a.b?H.a5(a).getUTCHours()+0:H.a5(a).getHours()+0},
hn:function(a){return a.b?H.a5(a).getUTCMinutes()+0:H.a5(a).getMinutes()+0},
hp:function(a){return a.b?H.a5(a).getUTCSeconds()+0:H.a5(a).getSeconds()+0},
hm:function(a){return a.b?H.a5(a).getUTCMilliseconds()+0:H.a5(a).getMilliseconds()+0},
p:function(a){throw H.j(H.bR(a))},
k:function(a,b){if(a==null)J.b5(a)
throw H.j(H.bS(a,b))},
bS:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aI(!0,b,"index",null)
z=H.a_(J.b5(a))
if(!(b<0)){if(typeof z!=="number")return H.p(z)
y=b>=z}else y=!0
if(y)return P.M(b,a,"index",null,z)
return P.cI(b,"index",null)},
bR:function(a){return new P.aI(!0,a,null,null)},
k0:function(a){if(typeof a!=="number")throw H.j(H.bR(a))
return a},
j:function(a){var z
if(a==null)a=new P.dL()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.eY})
z.name=""}else z.toString=H.eY
return z},
eY:function(){return J.aj(this.dartException)},
r:function(a){throw H.j(a)},
z:function(a){throw H.j(P.b7(a))},
aO:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kC(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.cJ(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cC(H.i(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dK(H.i(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$e2()
u=$.$get$e3()
t=$.$get$e4()
s=$.$get$e5()
r=$.$get$e9()
q=$.$get$ea()
p=$.$get$e7()
$.$get$e6()
o=$.$get$ec()
n=$.$get$eb()
m=v.a6(y)
if(m!=null)return z.$1(H.cC(H.U(y),m))
else{m=u.a6(y)
if(m!=null){m.method="call"
return z.$1(H.cC(H.U(y),m))}else{m=t.a6(y)
if(m==null){m=s.a6(y)
if(m==null){m=r.a6(y)
if(m==null){m=q.a6(y)
if(m==null){m=p.a6(y)
if(m==null){m=s.a6(y)
if(m==null){m=o.a6(y)
if(m==null){m=n.a6(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dK(H.U(y),m))}}return z.$1(new H.ie(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dV()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aI(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dV()
return a},
b3:function(a){var z
if(a==null)return new H.eB(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eB(a)},
k8:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.a4(0,a[y],a[x])}return b},
ki:function(a,b,c,d,e,f){H.h(a,"$iscw")
switch(H.a_(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.j(P.q("Unsupported number of arguments for wrapped closure"))},
b1:function(a,b){var z
H.a_(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ki)
a.$identity=z
return z},
fc:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.I(d).$isc){z.$reflectionInfo=d
x=H.hs(z).r}else x=d
w=e?Object.create(new H.hM().constructor.prototype):Object.create(new H.cn(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.ao
if(typeof u!=="number")return u.F()
$.ao=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.di(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.kb,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dd:H.co
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.j("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.di(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
f9:function(a,b,c,d){var z=H.co
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
di:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fb(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.f9(y,!w,z,b)
if(y===0){w=$.ao
if(typeof w!=="number")return w.F()
$.ao=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b6
if(v==null){v=H.c_("self")
$.b6=v}return new Function(w+H.i(v)+";return "+u+"."+H.i(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ao
if(typeof w!=="number")return w.F()
$.ao=w+1
t+=w
w="return function("+t+"){return this."
v=$.b6
if(v==null){v=H.c_("self")
$.b6=v}return new Function(w+H.i(v)+"."+H.i(z)+"("+t+");}")()},
fa:function(a,b,c,d){var z,y
z=H.co
y=H.dd
switch(b?-1:a){case 0:throw H.j(H.hA("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fb:function(a,b){var z,y,x,w,v,u,t,s
z=$.b6
if(z==null){z=H.c_("self")
$.b6=z}y=$.dc
if(y==null){y=H.c_("receiver")
$.dc=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fa(w,!u,x,b)
if(w===1){z="return function(){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+");"
y=$.ao
if(typeof y!=="number")return y.F()
$.ao=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+", "+s+");"
y=$.ao
if(typeof y!=="number")return y.F()
$.ao=y+1
return new Function(z+y+"}")()},
d_:function(a,b,c,d,e,f,g){var z,y
z=J.be(H.bW(b))
H.a_(c)
y=!!J.I(d).$isc?J.be(d):d
return H.fc(a,z,c,y,!!e,f,g)},
U:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.j(H.aw(a,"String"))},
ko:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.j(H.aw(a,"num"))},
eO:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.j(H.aw(a,"bool"))},
a_:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.j(H.aw(a,"int"))},
eW:function(a,b){throw H.j(H.aw(a,H.U(b).substring(3)))},
kq:function(a,b){var z=J.bU(b)
throw H.j(H.f8(a,z.ck(b,3,z.gl(b))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.I(a)[b])return a
H.eW(a,b)},
d:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.I(a)[b]
else z=!0
if(z)return a
H.kq(a,b)},
bW:function(a){if(a==null)return a
if(!!J.I(a).$isc)return a
throw H.j(H.aw(a,"List"))},
kk:function(a,b){if(a==null)return a
if(!!J.I(a).$isc)return a
if(J.I(a)[b])return a
H.eW(a,b)},
eP:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.a_(z)]
else return a.$S()}return},
bT:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.eP(J.I(a))
if(z==null)return!1
y=H.eS(z,null,b,null)
return y},
b:function(a,b){var z,y
if(a==null)return a
if($.cW)return a
$.cW=!0
try{if(H.bT(a,b))return a
z=H.bX(b)
y=H.aw(a,z)
throw H.j(y)}finally{$.cW=!1}},
d1:function(a,b){if(a!=null&&!H.cZ(a,b))H.r(H.aw(a,H.bX(b)))
return a},
eJ:function(a){var z
if(a instanceof H.u){z=H.eP(J.I(a))
if(z!=null)return H.bX(z)
return"Closure"}return H.aT(a)},
kz:function(a){throw H.j(new P.fj(H.U(a)))},
eQ:function(a){return init.getIsolateTag(a)},
f:function(a,b){a.$ti=b
return a},
aM:function(a){if(a==null)return
return a.$ti},
mr:function(a,b,c){return H.b4(a["$as"+H.i(c)],H.aM(b))},
bE:function(a,b,c,d){var z
H.U(c)
H.a_(d)
z=H.b4(a["$as"+H.i(c)],H.aM(b))
return z==null?null:z[d]},
aL:function(a,b,c){var z
H.U(b)
H.a_(c)
z=H.b4(a["$as"+H.i(b)],H.aM(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.a_(b)
z=H.aM(a)
return z==null?null:z[b]},
bX:function(a){var z=H.aN(a,null)
return z},
aN:function(a,b){var z,y
H.w(b,"$isc",[P.o],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.d4(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a_(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.k(b,y)
return H.i(b[y])}if('func' in a)return H.jR(a,b)
if('futureOr' in a)return"FutureOr<"+H.aN("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jR:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.o]
H.w(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.f([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.k(b,r)
t=C.j.F(t,b[r])
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
for(z=H.k7(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.U(z[l])
n=n+m+H.aN(i[h],b)+(" "+H.i(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
d4:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isc",[P.o],"$asc")
if(a==null)return""
z=new P.bO("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aN(u,c)}v="<"+z.j(0)+">"
return v},
b4:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
b0:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aM(a)
y=J.I(a)
if(y[b]==null)return!1
return H.eM(H.b4(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.U(b)
H.bW(c)
H.U(d)
if(a==null)return a
z=H.b0(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.d4(c,0,null)
throw H.j(H.aw(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
eM:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ai(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ai(a[y],b,c[y],d))return!1
return!0},
mp:function(a,b,c){return a.apply(b,H.b4(J.I(b)["$as"+H.i(c)],H.aM(b)))},
eT:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="H"||a===-1||a===-2||H.eT(z)}return!1},
cZ:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="H"||b===-1||b===-2||H.eT(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.cZ(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bT(a,b)}y=J.I(a).constructor
x=H.aM(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ai(y,null,b,null)
return z},
B:function(a,b){if(a!=null&&!H.cZ(a,b))throw H.j(H.aw(a,H.bX(b)))
return a},
ai:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ai(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="H")return!0
if('func' in c)return H.eS(a,b,c,d)
if('func' in a)return c.builtin$cls==="cw"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ai("type" in a?a.type:null,b,x,d)
else if(H.ai(a,b,x,d))return!0
else{if(!('$is'+"bb" in y.prototype))return!1
w=y.prototype["$as"+"bb"]
v=H.b4(w,z?a.slice(1):null)
return H.ai(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bX(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eM(H.b4(r,z),b,u,d)},
eS:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.kn(m,b,l,d)},
kn:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ai(c[w],d,a[w],b))return!1}return!0},
mq:function(a,b,c){Object.defineProperty(a,H.U(b),{value:c,enumerable:false,writable:true,configurable:true})},
kl:function(a){var z,y,x,w,v,u
z=H.U($.eR.$1(a))
y=$.ch[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cj[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.U($.eL.$2(a,z))
if(z!=null){y=$.ch[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cj[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.ck(x)
$.ch[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cj[z]=x
return x}if(v==="-"){u=H.ck(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eV(a,x)
if(v==="*")throw H.j(P.ej(z))
if(init.leafTags[z]===true){u=H.ck(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eV(a,x)},
eV:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.d5(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
ck:function(a){return J.d5(a,!1,null,!!a.$isA)},
km:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.ck(z)
else return J.d5(z,c,null,null)},
kg:function(){if(!0===$.d3)return
$.d3=!0
H.kh()},
kh:function(){var z,y,x,w,v,u,t,s
$.ch=Object.create(null)
$.cj=Object.create(null)
H.kc()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eX.$1(v)
if(u!=null){t=H.km(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kc:function(){var z,y,x,w,v,u,t
z=C.B()
z=H.b_(C.y,H.b_(C.D,H.b_(C.n,H.b_(C.n,H.b_(C.C,H.b_(C.z,H.b_(C.A(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eR=new H.kd(v)
$.eL=new H.ke(u)
$.eX=new H.kf(t)},
b_:function(a,b){return a(b)||b},
kx:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
hr:{"^":"a;a,b,c,d,e,f,r,0x",t:{
hs:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.be(z)
y=z[0]
x=z[1]
return new H.hr(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
i1:{"^":"a;a,b,c,d,e,f",
a6:function(a){var z,y,x
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
av:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.f([],[P.o])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.i1(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cb:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
e8:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
he:{"^":"Z;a,b",
j:function(a){var z=this.b
if(z==null)return"NullError: "+H.i(this.a)
return"NullError: method not found: '"+z+"' on null"},
t:{
dK:function(a,b){return new H.he(a,b==null?null:b.method)}}},
fI:{"^":"Z;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.i(this.a)+")"},
t:{
cC:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fI(a,y,z?null:b.receiver)}}},
ie:{"^":"Z;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kC:{"^":"u:15;a",
$1:function(a){if(!!J.I(a).$isZ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eB:{"^":"a;a,0b",
j:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isam:1},
u:{"^":"a;",
j:function(a){return"Closure '"+H.aT(this).trim()+"'"},
gdz:function(){return this},
$iscw:1,
gdz:function(){return this}},
dY:{"^":"u;"},
hM:{"^":"dY;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cn:{"^":"dY;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cn))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gR:function(a){var z,y
z=this.c
if(z==null)y=H.bl(this.a)
else y=typeof z!=="object"?J.aH(z):H.bl(z)
return(y^H.bl(this.b))>>>0},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.aT(z)+"'")},
t:{
co:function(a){return a.a},
dd:function(a){return a.c},
c_:function(a){var z,y,x,w,v
z=new H.cn("self","target","receiver","name")
y=J.be(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
i2:{"^":"Z;a",
j:function(a){return this.a},
t:{
aw:function(a,b){return new H.i2("TypeError: "+H.i(P.c4(a))+": type '"+H.eJ(a)+"' is not a subtype of type '"+b+"'")}}},
f7:{"^":"Z;a",
j:function(a){return this.a},
t:{
f8:function(a,b){return new H.f7("CastError: "+H.i(P.c4(a))+": type '"+H.eJ(a)+"' is not a subtype of type '"+b+"'")}}},
hz:{"^":"Z;a",
j:function(a){return"RuntimeError: "+H.i(this.a)},
t:{
hA:function(a){return new H.hz(a)}}},
cB:{"^":"fW;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gaq:function(a){return new H.fN(this,[H.y(this,0)])},
fC:function(a,b){var z=this.b
if(z==null)return!1
return this.e3(z,b)},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.b1(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.b1(w,b)
x=y==null?null:y.b
return x}else return this.fL(b)},
fL:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cC(z,J.aH(a)&0x3ffffff)
x=this.dl(y,a)
if(x<0)return
return y[x].b},
a4:function(a,b,c){var z,y,x,w,v,u
H.B(b,H.y(this,0))
H.B(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bF()
this.b=z}this.cp(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bF()
this.c=y}this.cp(y,b,c)}else{x=this.d
if(x==null){x=this.bF()
this.d=x}w=J.aH(b)&0x3ffffff
v=this.cC(x,w)
if(v==null)this.bK(x,w,[this.bG(b,c)])
else{u=this.dl(v,b)
if(u>=0)v[u].b=c
else v.push(this.bG(b,c))}}},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.j(P.b7(this))
z=z.c}},
cp:function(a,b,c){var z
H.B(b,H.y(this,0))
H.B(c,H.y(this,1))
z=this.b1(a,b)
if(z==null)this.bK(a,b,this.bG(b,c))
else z.b=c},
ec:function(){this.r=this.r+1&67108863},
bG:function(a,b){var z,y
z=new H.fM(H.B(a,H.y(this,0)),H.B(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.ec()
return z},
dl:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.P(a[y].a,b))return y
return-1},
j:function(a){return P.dH(this)},
b1:function(a,b){return a[b]},
cC:function(a,b){return a[b]},
bK:function(a,b,c){a[b]=c},
e6:function(a,b){delete a[b]},
e3:function(a,b){return this.b1(a,b)!=null},
bF:function(){var z=Object.create(null)
this.bK(z,"<non-identifier-key>",z)
this.e6(z,"<non-identifier-key>")
return z},
$isdF:1},
fM:{"^":"a;a,b,0c,0d"},
fN:{"^":"fr;a,$ti",
gl:function(a){return this.a.a},
gV:function(a){var z,y
z=this.a
y=new H.fO(z,z.r,this.$ti)
y.c=z.e
return y}},
fO:{"^":"a;a,b,0c,0d,$ti",
gO:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.j(P.b7(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kd:{"^":"u:15;a",
$1:function(a){return this.a(a)}},
ke:{"^":"u:26;a",
$2:function(a,b){return this.a(a,b)}},
kf:{"^":"u:27;a",
$1:function(a){return this.a(H.U(a))}}}],["","",,H,{"^":"",
k7:function(a){return J.dy(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kp:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bA:function(a){return a},
aK:function(a,b,c){if(a>>>0!==a||a>=c)throw H.j(H.bS(b,a))},
hb:{"^":"m;",$ism8:1,"%":"DataView;ArrayBufferView;cH|ev|ew|ha|ex|ey|aJ"},
cH:{"^":"hb;",
gl:function(a){return a.length},
$isA:1,
$asA:I.d0},
ha:{"^":"ew;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
$asc5:function(){return[P.v]},
$ast:function(){return[P.v]},
$ise:1,
$ase:function(){return[P.v]},
$isc:1,
$asc:function(){return[P.v]},
"%":"Float32Array|Float64Array"},
aJ:{"^":"ey;",
$asc5:function(){return[P.L]},
$ast:function(){return[P.L]},
$ise:1,
$ase:function(){return[P.L]},
$isc:1,
$asc:function(){return[P.L]}},
lE:{"^":"aJ;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lF:{"^":"aJ;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lG:{"^":"aJ;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lH:{"^":"aJ;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lI:{"^":"aJ;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lJ:{"^":"aJ;",
gl:function(a){return a.length},
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lK:{"^":"aJ;",
gl:function(a){return a.length},
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
ev:{"^":"cH+t;"},
ew:{"^":"ev+c5;"},
ex:{"^":"cH+t;"},
ey:{"^":"ex+c5;"}}],["","",,P,{"^":"",
iA:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jY()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b1(new P.iC(z),1)).observe(y,{childList:true})
return new P.iB(z,y,x)}else if(self.setImmediate!=null)return P.jZ()
return P.k_()},
me:[function(a){self.scheduleImmediate(H.b1(new P.iD(H.b(a,{func:1,ret:-1})),0))},"$1","jY",4,0,11],
mf:[function(a){self.setImmediate(H.b1(new P.iE(H.b(a,{func:1,ret:-1})),0))},"$1","jZ",4,0,11],
mg:[function(a){H.b(a,{func:1,ret:-1})
P.jy(0,a)},"$1","k_",4,0,11],
e0:function(a,b){var z
H.b(b,{func:1,ret:-1,args:[P.aU]})
z=C.h.Z(a.a,1000)
return P.jz(z<0?0:z,b)},
jU:function(a,b){if(H.bT(a,{func:1,args:[P.a,P.am]}))return b.h5(a,null,P.a,P.am)
if(H.bT(a,{func:1,args:[P.a]}))return H.b(a,{func:1,ret:null,args:[P.a]})
throw H.j(P.bZ(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jT:function(){var z,y
for(;z=$.aZ,z!=null;){$.bC=null
y=z.b
$.aZ=y
if(y==null)$.bB=null
z.a.$0()}},
mo:[function(){$.cX=!0
try{P.jT()}finally{$.bC=null
$.cX=!1
if($.aZ!=null)$.$get$cT().$1(P.eN())}},"$0","eN",0,0,3],
eI:function(a){var z=new P.ep(H.b(a,{func:1,ret:-1}))
if($.aZ==null){$.bB=z
$.aZ=z
if(!$.cX)$.$get$cT().$1(P.eN())}else{$.bB.b=z
$.bB=z}},
jX:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
z=$.aZ
if(z==null){P.eI(a)
$.bC=$.bB
return}y=new P.ep(a)
x=$.bC
if(x==null){y.b=z
$.bC=y
$.aZ=y}else{y.b=x.b
x.b=y
$.bC=y
if(y.b==null)$.bB=y}},
kr:function(a){var z,y
z={func:1,ret:-1}
H.b(a,z)
y=$.O
if(C.i===y){P.cg(null,null,C.i,a)
return}y.toString
P.cg(null,null,y,H.b(y.cP(a),z))},
i_:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aU]}
H.b(b,z)
y=$.O
if(y===C.i){y.toString
return P.e0(a,b)}x=y.cQ(b,P.aU)
$.O.toString
return P.e0(a,H.b(x,z))},
cf:function(a,b,c,d,e){var z={}
z.a=d
P.jX(new P.jV(z,e))},
eG:function(a,b,c,d,e){var z,y
H.b(d,{func:1,ret:e})
y=$.O
if(y===c)return d.$0()
$.O=c
z=y
try{y=d.$0()
return y}finally{$.O=z}},
eH:function(a,b,c,d,e,f,g){var z,y
H.b(d,{func:1,ret:f,args:[g]})
H.B(e,g)
y=$.O
if(y===c)return d.$1(e)
$.O=c
z=y
try{y=d.$1(e)
return y}finally{$.O=z}},
jW:function(a,b,c,d,e,f,g,h,i){var z,y
H.b(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
y=$.O
if(y===c)return d.$2(e,f)
$.O=c
z=y
try{y=d.$2(e,f)
return y}finally{$.O=z}},
cg:function(a,b,c,d){var z
H.b(d,{func:1,ret:-1})
z=C.i!==c
if(z)d=!(!z||!1)?c.cP(d):c.fw(d,-1)
P.eI(d)},
iC:{"^":"u:14;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iB:{"^":"u:23;a,b,c",
$1:function(a){var z,y
this.a.a=H.b(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iD:{"^":"u:2;a",
$0:function(){this.a.$0()}},
iE:{"^":"u:2;a",
$0:function(){this.a.$0()}},
eE:{"^":"a;a,0b,c",
dS:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b1(new P.jB(this,b),0),a)
else throw H.j(P.ab("`setTimeout()` not found."))},
dT:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b1(new P.jA(this,a,Date.now(),b),0),a)
else throw H.j(P.ab("Periodic timer."))},
$isaU:1,
t:{
jy:function(a,b){var z=new P.eE(!0,0)
z.dS(a,b)
return z},
jz:function(a,b){var z=new P.eE(!1,0)
z.dT(a,b)
return z}}},
jB:{"^":"u:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
jA:{"^":"u:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.dK(w,x)}z.c=y
this.d.$1(z)}},
aY:{"^":"a;0a,b,c,d,e,$ti",
fQ:function(a){if(this.c!==6)return!0
return this.b.b.cc(H.b(this.d,{func:1,ret:P.a7,args:[P.a]}),a.a,P.a7,P.a)},
fK:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.bT(z,{func:1,args:[P.a,P.am]}))return H.d1(w.ha(z,a.a,a.b,null,y,P.am),x)
else return H.d1(w.cc(H.b(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aF:{"^":"a;cK:a<,b,0eS:c<,$ti",
du:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.O
if(y!==C.i){y.toString
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.jU(b,y)}H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aF(0,$.O,[c])
w=b==null?1:3
this.cq(new P.aY(x,w,a,b,[z,c]))
return x},
hf:function(a,b){return this.du(a,null,b)},
cq:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isaY")
this.c=a}else{if(z===2){y=H.h(this.c,"$isaF")
z=y.a
if(z<4){y.cq(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cg(null,null,z,H.b(new P.iS(this,a),{func:1,ret:-1}))}},
cF:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isaY")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isaF")
y=u.a
if(y<4){u.cF(a)
return}this.a=y
this.c=u.c}z.a=this.b3(a)
y=this.b
y.toString
P.cg(null,null,y,H.b(new P.iX(z,this),{func:1,ret:-1}))}},
bI:function(){var z=H.h(this.c,"$isaY")
this.c=null
return this.b3(z)},
b3:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cu:function(a){var z,y,x,w
z=H.y(this,0)
H.d1(a,{futureOr:1,type:z})
y=this.$ti
x=H.b0(a,"$isbb",y,"$asbb")
if(x){z=H.b0(a,"$isaF",y,null)
if(z)P.er(a,this)
else P.iT(a,this)}else{w=this.bI()
H.B(a,z)
this.a=4
this.c=a
P.by(this,w)}},
bx:[function(a,b){var z
H.h(b,"$isam")
z=this.bI()
this.a=8
this.c=new P.ac(a,b)
P.by(this,z)},function(a){return this.bx(a,null)},"hl","$2","$1","ge1",4,2,30],
$isbb:1,
t:{
iT:function(a,b){var z,y,x
b.a=1
try{a.du(new P.iU(b),new P.iV(b),null)}catch(x){z=H.aO(x)
y=H.b3(x)
P.kr(new P.iW(b,z,y))}},
er:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isaF")
if(z>=4){y=b.bI()
b.a=a.a
b.c=a.c
P.by(b,y)}else{y=H.h(b.c,"$isaY")
b.a=2
b.c=a
a.cF(y)}},
by:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isac")
y=y.b
u=v.a
t=v.b
y.toString
P.cf(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.by(z.a,b)}y=z.a
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
if(p){H.h(r,"$isac")
y=y.b
u=r.a
t=r.b
y.toString
P.cf(null,null,y,u,t)
return}o=$.O
if(o==null?q!=null:o!==q)$.O=q
else o=null
y=b.c
if(y===8)new P.j_(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.iZ(x,b,r).$0()}else if((y&2)!==0)new P.iY(z,x,b).$0()
if(o!=null)$.O=o
y=x.b
if(!!J.I(y).$isbb){if(y.a>=4){n=H.h(t.c,"$isaY")
t.c=null
b=t.b3(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.er(y,t)
return}}m=b.b
n=H.h(m.c,"$isaY")
m.c=null
b=m.b3(n)
y=x.a
u=x.b
if(!y){H.B(u,H.y(m,0))
m.a=4
m.c=u}else{H.h(u,"$isac")
m.a=8
m.c=u}z.a=m
y=m}}}},
iS:{"^":"u:2;a,b",
$0:function(){P.by(this.a,this.b)}},
iX:{"^":"u:2;a,b",
$0:function(){P.by(this.b,this.a.a)}},
iU:{"^":"u:14;a",
$1:function(a){var z=this.a
z.a=0
z.cu(a)}},
iV:{"^":"u:34;a",
$2:function(a,b){this.a.bx(a,H.h(b,"$isam"))},
$1:function(a){return this.$2(a,null)}},
iW:{"^":"u:2;a,b,c",
$0:function(){this.a.bx(this.b,this.c)}},
j_:{"^":"u:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dt(H.b(w.d,{func:1}),null)}catch(v){y=H.aO(v)
x=H.b3(v)
if(this.d){w=H.h(this.a.a.c,"$isac").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isac")
else u.b=new P.ac(y,x)
u.a=!0
return}if(!!J.I(z).$isbb){if(z instanceof P.aF&&z.gcK()>=4){if(z.gcK()===8){w=this.b
w.b=H.h(z.geS(),"$isac")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.hf(new P.j0(t),null)
w.a=!1}}},
j0:{"^":"u:37;a",
$1:function(a){return this.a}},
iZ:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.B(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.cc(H.b(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aO(t)
y=H.b3(t)
x=this.a
x.b=new P.ac(z,y)
x.a=!0}}},
iY:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isac")
w=this.c
if(w.fQ(z)&&w.e!=null){v=this.b
v.b=w.fK(z)
v.a=!1}}catch(u){y=H.aO(u)
x=H.b3(u)
w=H.h(this.a.a.c,"$isac")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ac(y,x)
s.a=!0}}},
ep:{"^":"a;a,0b"},
cM:{"^":"a;$ti",
gl:function(a){var z,y
z={}
y=new P.aF(0,$.O,[P.L])
z.a=0
this.fP(new P.hO(z,this),!0,new P.hP(z,y),y.ge1())
return y}},
hO:{"^":"u;a,b",
$1:function(a){H.B(a,H.aL(this.b,"cM",0));++this.a.a},
$S:function(){return{func:1,ret:P.H,args:[H.aL(this.b,"cM",0)]}}},
hP:{"^":"u:2;a,b",
$0:function(){this.b.cu(this.a.a)}},
dW:{"^":"a;$ti"},
aU:{"^":"a;"},
ac:{"^":"a;a,b",
j:function(a){return H.i(this.a)},
$isZ:1},
jG:{"^":"a;",$ismd:1},
jV:{"^":"u:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dL()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.j(z)
x=H.j(z)
x.stack=y.j(0)
throw x}},
jk:{"^":"jG;",
hb:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
try{if(C.i===$.O){a.$0()
return}P.eG(null,null,this,a,-1)}catch(x){z=H.aO(x)
y=H.b3(x)
P.cf(null,null,this,z,H.h(y,"$isam"))}},
hc:function(a,b,c){var z,y,x
H.b(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.i===$.O){a.$1(b)
return}P.eH(null,null,this,a,b,-1,c)}catch(x){z=H.aO(x)
y=H.b3(x)
P.cf(null,null,this,z,H.h(y,"$isam"))}},
fw:function(a,b){return new P.jm(this,H.b(a,{func:1,ret:b}),b)},
cP:function(a){return new P.jl(this,H.b(a,{func:1,ret:-1}))},
cQ:function(a,b){return new P.jn(this,H.b(a,{func:1,ret:-1,args:[b]}),b)},
dt:function(a,b){H.b(a,{func:1,ret:b})
if($.O===C.i)return a.$0()
return P.eG(null,null,this,a,b)},
cc:function(a,b,c,d){H.b(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.O===C.i)return a.$1(b)
return P.eH(null,null,this,a,b,c,d)},
ha:function(a,b,c,d,e,f){H.b(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.O===C.i)return a.$2(b,c)
return P.jW(null,null,this,a,b,c,d,e,f)},
h5:function(a,b,c,d){return H.b(a,{func:1,ret:b,args:[c,d]})}},
jm:{"^":"u;a,b,c",
$0:function(){return this.a.dt(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jl:{"^":"u:3;a,b",
$0:function(){return this.a.hb(this.b)}},
jn:{"^":"u;a,b,c",
$1:function(a){var z=this.c
return this.a.hc(this.b,H.B(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
fQ:function(a,b,c){H.bW(a)
return H.w(H.k8(a,new H.cB(0,0,[b,c])),"$isdF",[b,c],"$asdF")},
fP:function(a,b){return new H.cB(0,0,[a,b])},
fR:function(a,b,c,d){return new P.j6(0,0,[d])},
fE:function(a,b,c){var z,y
if(P.cY(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bD()
C.a.h(y,a)
try{P.jS(a,z)}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=P.dX(b,H.kk(z,"$ise"),", ")+c
return y.charCodeAt(0)==0?y:y},
cx:function(a,b,c){var z,y,x
if(P.cY(a))return b+"..."+c
z=new P.bO(b)
y=$.$get$bD()
C.a.h(y,a)
try{x=z
x.a=P.dX(x.gaw(),a,", ")}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=z
y.a=y.gaw()+c
y=z.gaw()
return y.charCodeAt(0)==0?y:y},
cY:function(a){var z,y
for(z=0;y=$.$get$bD(),z<y.length;++z)if(a===y[z])return!0
return!1},
jS:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gV(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.E())return
w=H.i(z.gO(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.E()){if(x<=5)return
if(0>=b.length)return H.k(b,-1)
v=b.pop()
if(0>=b.length)return H.k(b,-1)
u=b.pop()}else{t=z.gO(z);++x
if(!z.E()){if(x<=4){C.a.h(b,H.i(t))
return}v=H.i(t)
if(0>=b.length)return H.k(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gO(z);++x
for(;z.E();t=s,s=r){r=z.gO(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.k(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.i(t)
v=H.i(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.k(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dH:function(a){var z,y,x
z={}
if(P.cY(a))return"{...}"
y=new P.bO("")
try{C.a.h($.$get$bD(),a)
x=y
x.a=x.gaw()+"{"
z.a=!0
J.f1(a,new P.fX(z,y))
z=y
z.a=z.gaw()+"}"}finally{z=$.$get$bD()
if(0>=z.length)return H.k(z,-1)
z.pop()}z=y.gaw()
return z.charCodeAt(0)==0?z:z},
j6:{"^":"j1;a,0b,0c,0d,0e,0f,r,$ti",
gV:function(a){return P.eu(this,this.r,H.y(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.B(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cV()
this.b=z}return this.cs(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cV()
this.c=y}return this.cs(y,b)}else return this.dV(0,b)},
dV:function(a,b){var z,y,x
H.B(b,H.y(this,0))
z=this.d
if(z==null){z=P.cV()
this.d=z}y=this.cv(b)
x=z[y]
if(x==null)z[y]=[this.bw(b)]
else{if(this.cB(x,b)>=0)return!1
x.push(this.bw(b))}return!0},
M:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cG(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cG(this.c,b)
else return this.eK(0,b)},
eK:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.e9(z,b)
x=this.cB(y,b)
if(x<0)return!1
this.cM(y.splice(x,1)[0])
return!0},
cs:function(a,b){H.B(b,H.y(this,0))
if(H.h(a[b],"$iscU")!=null)return!1
a[b]=this.bw(b)
return!0},
cG:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$iscU")
if(z==null)return!1
this.cM(z)
delete a[b]
return!0},
ct:function(){this.r=this.r+1&67108863},
bw:function(a){var z,y
z=new P.cU(H.B(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.ct()
return z},
cM:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.ct()},
cv:function(a){return J.aH(a)&0x3ffffff},
e9:function(a,b){return a[this.cv(b)]},
cB:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.P(a[y].a,b))return y
return-1},
t:{
cV:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cU:{"^":"a;a,0b,0c"},
j7:{"^":"a;a,b,0c,0d,$ti",
gO:function(a){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.j(P.b7(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.B(z.a,H.y(this,0))
this.c=z.b
return!0}}},
t:{
eu:function(a,b,c){var z=new P.j7(a,b,[c])
z.c=a.e
return z}}},
j1:{"^":"hB;"},
cD:{"^":"j8;",$ise:1,$isc:1},
t:{"^":"a;$ti",
gV:function(a){return new H.fS(a,this.gl(a),0,[H.bE(this,a,"t",0)])},
D:function(a,b){return this.k(a,b)},
hi:function(a,b){var z,y,x
z=H.f([],[H.bE(this,a,"t",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.p(x)
if(!(y<x))break
C.a.a4(z,y,this.k(a,y));++y}return z},
hh:function(a){return this.hi(a,!0)},
j:function(a){return P.cx(a,"[","]")}},
fW:{"^":"a8;"},
fX:{"^":"u:12;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.i(a)
z.a=y+": "
z.a+=H.i(b)}},
a8:{"^":"a;$ti",
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.bE(this,a,"a8",0),H.bE(this,a,"a8",1)]})
for(z=J.bY(this.gaq(a));z.E();){y=z.gO(z)
b.$2(y,this.k(a,y))}},
gl:function(a){return J.b5(this.gaq(a))},
j:function(a){return P.dH(a)},
$isa2:1},
hC:{"^":"a;$ti",
j:function(a){return P.cx(this,"{","}")},
D:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.da("index"))
if(b<0)H.r(P.bm(b,0,null,"index",null))
for(z=P.eu(this,this.r,H.y(this,0)),y=0;z.E();){x=z.d
if(b===y)return x;++y}throw H.j(P.M(b,this,"index",null,y))},
$ise:1},
hB:{"^":"hC;"},
j8:{"^":"a+t;"}}],["","",,P,{"^":"",
fu:function(a){var z=J.I(a)
if(!!z.$isu)return z.j(a)
return"Instance of '"+H.aT(a)+"'"},
fT:function(a,b,c,d){var z,y
H.B(b,d)
z=J.fG(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.a4(z,y,b)
return H.w(z,"$isc",[d],"$asc")},
fU:function(a,b,c){var z,y,x
z=[c]
y=H.f([],z)
for(x=a.gV(a);x.E();)C.a.h(y,H.B(x.gO(x),c))
if(b)return y
return H.w(J.be(y),"$isc",z,"$asc")},
c4:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aj(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fu(a)},
q:function(a){return new P.eq(a)},
d7:function(a){H.kp(a)},
a7:{"^":"a;"},
"+bool":0,
al:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.al))return!1
return this.a===b.a&&this.b===b.b},
gR:function(a){var z=this.a
return(z^C.h.cJ(z,30))&1073741823},
j:function(a){var z,y,x,w,v,u,t
z=P.fk(H.hq(this))
y=P.bF(H.ho(this))
x=P.bF(H.hk(this))
w=P.bF(H.hl(this))
v=P.bF(H.hn(this))
u=P.bF(H.hp(this))
t=P.fl(H.hm(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
t:{
fk:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fl:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bF:function(a){if(a>=10)return""+a
return"0"+a}}},
v:{"^":"T;"},
"+double":0,
b9:{"^":"a;a",
i:function(a,b){return new P.b9(C.h.a7(this.a*b))},
ac:function(a,b){return C.h.ac(this.a,H.h(b,"$isb9").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.b9))return!1
return this.a===b.a},
gR:function(a){return this.a&0x1FFFFFFF},
j:function(a){var z,y,x,w,v
z=new P.fq()
y=this.a
if(y<0)return"-"+new P.b9(0-y).j(0)
x=z.$1(C.h.Z(y,6e7)%60)
w=z.$1(C.h.Z(y,1e6)%60)
v=new P.fp().$1(y%1e6)
return""+C.h.Z(y,36e8)+":"+H.i(x)+":"+H.i(w)+"."+H.i(v)},
t:{
dt:function(a,b,c,d,e,f){return new P.b9(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fp:{"^":"u:13;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fq:{"^":"u:13;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
Z:{"^":"a;"},
dL:{"^":"Z;",
j:function(a){return"Throw of null."}},
aI:{"^":"Z;a,b,c,d",
gbz:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gby:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.i(z)
w=this.gbz()+y+x
if(!this.a)return w
v=this.gby()
u=P.c4(this.b)
return w+v+": "+H.i(u)},
t:{
f2:function(a){return new P.aI(!1,null,null,a)},
bZ:function(a,b,c){return new P.aI(!0,a,b,c)},
da:function(a){return new P.aI(!1,null,a,"Must not be null")}}},
dP:{"^":"aI;e,f,a,b,c,d",
gbz:function(){return"RangeError"},
gby:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.i(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.i(z)
else if(x>z)y=": Not in range "+H.i(z)+".."+H.i(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.i(z)}return y},
t:{
cI:function(a,b,c){return new P.dP(null,null,!0,a,b,"Value not in range")},
bm:function(a,b,c,d,e){return new P.dP(b,c,!0,a,d,"Invalid value")}}},
fD:{"^":"aI;e,l:f>,a,b,c,d",
gbz:function(){return"RangeError"},
gby:function(){if(J.eZ(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.i(z)},
t:{
M:function(a,b,c,d,e){var z=H.a_(e!=null?e:J.b5(b))
return new P.fD(b,z,!0,a,c,"Index out of range")}}},
ig:{"^":"Z;a",
j:function(a){return"Unsupported operation: "+this.a},
t:{
ab:function(a){return new P.ig(a)}}},
id:{"^":"Z;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
t:{
ej:function(a){return new P.id(a)}}},
hL:{"^":"Z;a",
j:function(a){return"Bad state: "+this.a}},
ff:{"^":"Z;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.i(P.c4(z))+"."},
t:{
b7:function(a){return new P.ff(a)}}},
hf:{"^":"a;",
j:function(a){return"Out of Memory"},
$isZ:1},
dV:{"^":"a;",
j:function(a){return"Stack Overflow"},
$isZ:1},
fj:{"^":"Z;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eq:{"^":"a;a",
j:function(a){return"Exception: "+this.a}},
L:{"^":"T;"},
"+int":0,
e:{"^":"a;$ti",
gl:function(a){var z,y
z=this.gV(this)
for(y=0;z.E();)++y
return y},
D:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.j(P.da("index"))
if(b<0)H.r(P.bm(b,0,null,"index",null))
for(z=this.gV(this),y=0;z.E();){x=z.gO(z)
if(b===y)return x;++y}throw H.j(P.M(b,this,"index",null,y))},
j:function(a){return P.fE(this,"(",")")}},
cy:{"^":"a;$ti"},
c:{"^":"a;$ti",$ise:1},
"+List":0,
a2:{"^":"a;$ti"},
H:{"^":"a;",
gR:function(a){return P.a.prototype.gR.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
T:{"^":"a;"},
"+num":0,
a:{"^":";",
u:function(a,b){return this===b},
gR:function(a){return H.bl(this)},
j:function(a){return"Instance of '"+H.aT(this)+"'"},
toString:function(){return this.j(this)}},
am:{"^":"a;"},
o:{"^":"a;",$ishg:1},
"+String":0,
bO:{"^":"a;aw:a<",
gl:function(a){return this.a.length},
j:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
t:{
dX:function(a,b,c){var z=J.bY(b)
if(!z.E())return a
if(c.length===0){do a+=H.i(z.gO(z))
while(z.E())}else{a+=H.i(z.gO(z))
for(;z.E();)a=a+c+H.i(z.gO(z))}return a}}}}],["","",,W,{"^":"",
cr:function(a,b){var z=document.createElement("canvas")
return z},
fs:function(a){H.h(a,"$isa1")
return"wheel"},
ce:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
et:function(a,b,c,d){var z,y
z=W.ce(W.ce(W.ce(W.ce(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eK:function(a,b){var z
H.b(a,{func:1,ret:-1,args:[b]})
z=$.O
if(z===C.i)return a
return z.cQ(a,b)},
aQ:{"^":"a0;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
kE:{"^":"cK;0n:x=,0p:y=","%":"Accelerometer|LinearAccelerationSensor"},
kF:{"^":"m;0l:length=","%":"AccessibleNodeList"},
kG:{"^":"aQ;",
j:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kH:{"^":"aQ;",
j:function(a){return String(a)},
"%":"HTMLAreaElement"},
f6:{"^":"m;","%":";Blob"},
cq:{"^":"aQ;",
br:function(a,b,c){if(c!=null)return a.getContext(b,P.k1(c,null))
return a.getContext(b)},
dB:function(a,b){return this.br(a,b,null)},
$iscq:1,
"%":"HTMLCanvasElement"},
dg:{"^":"m;",$isdg:1,"%":"CanvasRenderingContext2D"},
kN:{"^":"J;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kP:{"^":"c2;0l:length=","%":"CSSPerspective"},
kQ:{"^":"cu;0n:x=,0p:y=","%":"CSSPositionValue"},
kR:{"^":"c2;0n:x=,0p:y=","%":"CSSRotation"},
b8:{"^":"m;",$isb8:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
kS:{"^":"c2;0n:x=,0p:y=","%":"CSSScale"},
fh:{"^":"iI;0l:length=",
dC:function(a,b){var z=a.getPropertyValue(this.cr(a,b))
return z==null?"":z},
cr:function(a,b){var z,y
z=$.$get$dl()
y=z[b]
if(typeof y==="string")return y
y=this.f0(a,b)
z[b]=y
return y},
f0:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fm()+b
if(z in a)return z
return b},
eT:function(a,b,c,d){a.setProperty(b,c,d)},
gbQ:function(a){return a.bottom},
gaf:function(a){return a.height},
gaH:function(a){return a.left},
gaU:function(a){return a.right},
gaY:function(a){return a.top},
gag:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fi:{"^":"a;",
gaH:function(a){return this.dC(a,"left")}},
cu:{"^":"m;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
c2:{"^":"m;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
kT:{"^":"cu;0l:length=","%":"CSSTransformValue"},
kU:{"^":"c2;0n:x=,0p:y=","%":"CSSTranslation"},
kV:{"^":"cu;0l:length=","%":"CSSUnparsedValue"},
kW:{"^":"m;0l:length=","%":"DataTransferItemList"},
kX:{"^":"m;0n:x=,0p:y=","%":"DeviceAcceleration"},
kY:{"^":"m;",
j:function(a){return String(a)},
"%":"DOMException"},
kZ:{"^":"fn;",
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"DOMPoint"},
fn:{"^":"m;",
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":";DOMPointReadOnly"},
l_:{"^":"iK;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.M(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[[P.a6,P.T]]},
$ast:function(){return[[P.a6,P.T]]},
$ise:1,
$ase:function(){return[[P.a6,P.T]]},
$isc:1,
$asc:function(){return[[P.a6,P.T]]},
$asx:function(){return[[P.a6,P.T]]},
"%":"ClientRectList|DOMRectList"},
fo:{"^":"m;",
j:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gag(a))+" x "+H.i(this.gaf(a))},
u:function(a,b){var z
if(b==null)return!1
z=H.b0(b,"$isa6",[P.T],"$asa6")
if(!z)return!1
z=J.bV(b)
return a.left===z.gaH(b)&&a.top===z.gaY(b)&&this.gag(a)===z.gag(b)&&this.gaf(a)===z.gaf(b)},
gR:function(a){return W.et(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gag(a)&0x1FFFFFFF,this.gaf(a)&0x1FFFFFFF)},
gbQ:function(a){return a.bottom},
gaf:function(a){return a.height},
gaH:function(a){return a.left},
gaU:function(a){return a.right},
gaY:function(a){return a.top},
gag:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
$isa6:1,
$asa6:function(){return[P.T]},
"%":";DOMRectReadOnly"},
l0:{"^":"iM;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.M(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[P.o]},
$ast:function(){return[P.o]},
$ise:1,
$ase:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]},
$asx:function(){return[P.o]},
"%":"DOMStringList"},
l1:{"^":"m;0l:length=","%":"DOMTokenList"},
iH:{"^":"cD;a,b",
gl:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.k(z,b)
return H.h(z[b],"$isa0")},
h:function(a,b){this.a.appendChild(b)
return b},
gV:function(a){var z=this.hh(this)
return new J.ak(z,z.length,0,[H.y(z,0)])},
$ast:function(){return[W.a0]},
$ase:function(){return[W.a0]},
$asc:function(){return[W.a0]}},
a0:{"^":"J;",
gcS:function(a){return new W.iH(a,a.children)},
gb7:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.ac()
if(x<0)x=-x*0
if(typeof w!=="number")return w.ac()
if(w<0)w=-w*0
return new P.a6(z,y,x,w,[P.T])},
j:function(a){return a.localName},
$isa0:1,
"%":";Element"},
a4:{"^":"m;",$isa4:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a1:{"^":"m;",
cN:["dG",function(a,b,c,d){H.b(c,{func:1,args:[W.a4]})
if(c!=null)this.dW(a,b,c,!1)}],
dW:function(a,b,c,d){return a.addEventListener(b,H.b1(H.b(c,{func:1,args:[W.a4]}),1),!1)},
$isa1:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;ez|eA|eC|eD"},
ba:{"^":"f6;",$isba:1,"%":"File"},
lk:{"^":"iR;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.M(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.ba]},
$ast:function(){return[W.ba]},
$ise:1,
$ase:function(){return[W.ba]},
$isc:1,
$asc:function(){return[W.ba]},
$asx:function(){return[W.ba]},
"%":"FileList"},
ll:{"^":"a1;0l:length=","%":"FileWriter"},
lo:{"^":"aQ;0l:length=","%":"HTMLFormElement"},
bc:{"^":"m;",$isbc:1,"%":"Gamepad"},
lp:{"^":"cK;0n:x=,0p:y=","%":"Gyroscope"},
lq:{"^":"m;0l:length=","%":"History"},
lr:{"^":"j3;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.M(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.J]},
$ast:function(){return[W.J]},
$ise:1,
$ase:function(){return[W.J]},
$isc:1,
$asc:function(){return[W.J]},
$asx:function(){return[W.J]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c6:{"^":"m;0cV:data=",$isc6:1,"%":"ImageData"},
dx:{"^":"aQ;",$isdx:1,"%":"HTMLImageElement"},
bf:{"^":"cP;",$isbf:1,"%":"KeyboardEvent"},
lw:{"^":"m;",
j:function(a){return String(a)},
"%":"Location"},
lx:{"^":"cK;0n:x=,0p:y=","%":"Magnetometer"},
lz:{"^":"m;0l:length=","%":"MediaList"},
lA:{"^":"a1;",
cN:function(a,b,c,d){H.b(c,{func:1,args:[W.a4]})
if(b==="message")a.start()
this.dG(a,b,c,!1)},
"%":"MessagePort"},
lB:{"^":"j9;",
k:function(a,b){return P.aG(a.get(H.U(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aG(y.value[1]))}},
gaq:function(a){var z=H.f([],[P.o])
this.J(a,new W.h7(z))
return z},
gl:function(a){return a.size},
$asa8:function(){return[P.o,null]},
$isa2:1,
$asa2:function(){return[P.o,null]},
"%":"MIDIInputMap"},
h7:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lC:{"^":"ja;",
k:function(a,b){return P.aG(a.get(H.U(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aG(y.value[1]))}},
gaq:function(a){var z=H.f([],[P.o])
this.J(a,new W.h8(z))
return z},
gl:function(a){return a.size},
$asa8:function(){return[P.o,null]},
$isa2:1,
$asa2:function(){return[P.o,null]},
"%":"MIDIOutputMap"},
h8:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bg:{"^":"m;",$isbg:1,"%":"MimeType"},
lD:{"^":"jc;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.M(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bg]},
$ast:function(){return[W.bg]},
$ise:1,
$ase:function(){return[W.bg]},
$isc:1,
$asc:function(){return[W.bg]},
$asx:function(){return[W.bg]},
"%":"MimeTypeArray"},
as:{"^":"cP;",$isas:1,"%":"PointerEvent;DragEvent|MouseEvent"},
iG:{"^":"cD;a",
gV:function(a){var z=this.a.childNodes
return new W.dv(z,z.length,-1,[H.bE(C.F,z,"x",0)])},
gl:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.k(z,b)
return z[b]},
$ast:function(){return[W.J]},
$ase:function(){return[W.J]},
$asc:function(){return[W.J]}},
J:{"^":"a1;",
j:function(a){var z=a.nodeValue
return z==null?this.dH(a):z},
$isJ:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hc:{"^":"je;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.M(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.J]},
$ast:function(){return[W.J]},
$ise:1,
$ase:function(){return[W.J]},
$isc:1,
$asc:function(){return[W.J]},
$asx:function(){return[W.J]},
"%":"NodeList|RadioNodeList"},
bi:{"^":"m;0l:length=",$isbi:1,"%":"Plugin"},
lO:{"^":"ji;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.M(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bi]},
$ast:function(){return[W.bi]},
$ise:1,
$ase:function(){return[W.bi]},
$isc:1,
$asc:function(){return[W.bi]},
$asx:function(){return[W.bi]},
"%":"PluginArray"},
lT:{"^":"jo;",
k:function(a,b){return P.aG(a.get(H.U(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aG(y.value[1]))}},
gaq:function(a){var z=H.f([],[P.o])
this.J(a,new W.hy(z))
return z},
gl:function(a){return a.size},
$asa8:function(){return[P.o,null]},
$isa2:1,
$asa2:function(){return[P.o,null]},
"%":"RTCStatsReport"},
hy:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lU:{"^":"aQ;0l:length=","%":"HTMLSelectElement"},
cK:{"^":"a1;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bn:{"^":"a1;",$isbn:1,"%":"SourceBuffer"},
lV:{"^":"eA;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.M(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bn]},
$ast:function(){return[W.bn]},
$ise:1,
$ase:function(){return[W.bn]},
$isc:1,
$asc:function(){return[W.bn]},
$asx:function(){return[W.bn]},
"%":"SourceBufferList"},
bo:{"^":"m;",$isbo:1,"%":"SpeechGrammar"},
lW:{"^":"jq;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.M(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bo]},
$ast:function(){return[W.bo]},
$ise:1,
$ase:function(){return[W.bo]},
$isc:1,
$asc:function(){return[W.bo]},
$asx:function(){return[W.bo]},
"%":"SpeechGrammarList"},
bp:{"^":"m;0l:length=",$isbp:1,"%":"SpeechRecognitionResult"},
lY:{"^":"jt;",
k:function(a,b){return a.getItem(H.U(b))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,P.o]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gaq:function(a){var z=H.f([],[P.o])
this.J(a,new W.hN(z))
return z},
gl:function(a){return a.length},
$asa8:function(){return[P.o,P.o]},
$isa2:1,
$asa2:function(){return[P.o,P.o]},
"%":"Storage"},
hN:{"^":"u:39;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bq:{"^":"m;",$isbq:1,"%":"CSSStyleSheet|StyleSheet"},
br:{"^":"aQ;",$isbr:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
bs:{"^":"a1;",$isbs:1,"%":"TextTrack"},
bt:{"^":"a1;",$isbt:1,"%":"TextTrackCue|VTTCue"},
m2:{"^":"jx;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.M(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bt]},
$ast:function(){return[W.bt]},
$ise:1,
$ase:function(){return[W.bt]},
$isc:1,
$asc:function(){return[W.bt]},
$asx:function(){return[W.bt]},
"%":"TextTrackCueList"},
m3:{"^":"eD;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.M(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bs]},
$ast:function(){return[W.bs]},
$ise:1,
$ase:function(){return[W.bs]},
$isc:1,
$asc:function(){return[W.bs]},
$asx:function(){return[W.bs]},
"%":"TextTrackList"},
m4:{"^":"m;0l:length=","%":"TimeRanges"},
bu:{"^":"m;",$isbu:1,"%":"Touch"},
aV:{"^":"cP;",$isaV:1,"%":"TouchEvent"},
m5:{"^":"jD;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.M(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bu]},
$ast:function(){return[W.bu]},
$ise:1,
$ase:function(){return[W.bu]},
$isc:1,
$asc:function(){return[W.bu]},
$asx:function(){return[W.bu]},
"%":"TouchList"},
m6:{"^":"m;0l:length=","%":"TrackDefaultList"},
cP:{"^":"a4;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
m9:{"^":"m;",
j:function(a){return String(a)},
"%":"URL"},
mb:{"^":"m;0n:x=","%":"VRStageBoundsPoint"},
mc:{"^":"a1;0l:length=","%":"VideoTrackList"},
bx:{"^":"as;",
gfF:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.j(P.ab("deltaY is not supported"))},
gfE:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.j(P.ab("deltaX is not supported"))},
$isbx:1,
"%":"WheelEvent"},
iz:{"^":"a1;",
eO:function(a,b){return a.requestAnimationFrame(H.b1(H.b(b,{func:1,ret:-1,args:[P.T]}),1))},
e7:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
mh:{"^":"jI;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.M(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.b8]},
$ast:function(){return[W.b8]},
$ise:1,
$ase:function(){return[W.b8]},
$isc:1,
$asc:function(){return[W.b8]},
$asx:function(){return[W.b8]},
"%":"CSSRuleList"},
mi:{"^":"fo;",
j:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
u:function(a,b){var z
if(b==null)return!1
z=H.b0(b,"$isa6",[P.T],"$asa6")
if(!z)return!1
z=J.bV(b)
return a.left===z.gaH(b)&&a.top===z.gaY(b)&&a.width===z.gag(b)&&a.height===z.gaf(b)},
gR:function(a){return W.et(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gaf:function(a){return a.height},
gag:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"ClientRect|DOMRect"},
mk:{"^":"jK;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.M(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bc]},
$ast:function(){return[W.bc]},
$ise:1,
$ase:function(){return[W.bc]},
$isc:1,
$asc:function(){return[W.bc]},
$asx:function(){return[W.bc]},
"%":"GamepadList"},
ml:{"^":"jM;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.M(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.J]},
$ast:function(){return[W.J]},
$ise:1,
$ase:function(){return[W.J]},
$isc:1,
$asc:function(){return[W.J]},
$asx:function(){return[W.J]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mm:{"^":"jO;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.M(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bp]},
$ast:function(){return[W.bp]},
$ise:1,
$ase:function(){return[W.bp]},
$isc:1,
$asc:function(){return[W.bp]},
$asx:function(){return[W.bp]},
"%":"SpeechRecognitionResultList"},
mn:{"^":"jQ;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.M(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.k(a,b)
return a[b]},
$isA:1,
$asA:function(){return[W.bq]},
$ast:function(){return[W.bq]},
$ise:1,
$ase:function(){return[W.bq]},
$isc:1,
$asc:function(){return[W.bq]},
$asx:function(){return[W.bq]},
"%":"StyleSheetList"},
iN:{"^":"cM;a,b,c,$ti",
fP:function(a,b,c,d){var z=H.y(this,0)
H.b(a,{func:1,ret:-1,args:[z]})
H.b(c,{func:1,ret:-1})
return W.Y(this.a,this.b,a,!1,z)}},
mj:{"^":"iN;a,b,c,$ti"},
iO:{"^":"dW;a,b,c,d,e,$ti",
f4:function(){var z=this.d
if(z!=null&&this.a<=0)J.f0(this.b,this.c,z,!1)},
t:{
Y:function(a,b,c,d,e){var z=c==null?null:W.eK(new W.iP(c),W.a4)
z=new W.iO(0,a,b,z,!1,[e])
z.f4()
return z}}},
iP:{"^":"u:4;a",
$1:function(a){return this.a.$1(H.h(a,"$isa4"))}},
x:{"^":"a;$ti",
gV:function(a){return new W.dv(a,this.gl(a),-1,[H.bE(this,a,"x",0)])}},
dv:{"^":"a;a,b,c,0d,$ti",
E:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.f_(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gO:function(a){return this.d}},
iI:{"^":"m+fi;"},
iJ:{"^":"m+t;"},
iK:{"^":"iJ+x;"},
iL:{"^":"m+t;"},
iM:{"^":"iL+x;"},
iQ:{"^":"m+t;"},
iR:{"^":"iQ+x;"},
j2:{"^":"m+t;"},
j3:{"^":"j2+x;"},
j9:{"^":"m+a8;"},
ja:{"^":"m+a8;"},
jb:{"^":"m+t;"},
jc:{"^":"jb+x;"},
jd:{"^":"m+t;"},
je:{"^":"jd+x;"},
jh:{"^":"m+t;"},
ji:{"^":"jh+x;"},
jo:{"^":"m+a8;"},
ez:{"^":"a1+t;"},
eA:{"^":"ez+x;"},
jp:{"^":"m+t;"},
jq:{"^":"jp+x;"},
jt:{"^":"m+a8;"},
jw:{"^":"m+t;"},
jx:{"^":"jw+x;"},
eC:{"^":"a1+t;"},
eD:{"^":"eC+x;"},
jC:{"^":"m+t;"},
jD:{"^":"jC+x;"},
jH:{"^":"m+t;"},
jI:{"^":"jH+x;"},
jJ:{"^":"m+t;"},
jK:{"^":"jJ+x;"},
jL:{"^":"m+t;"},
jM:{"^":"jL+x;"},
jN:{"^":"m+t;"},
jO:{"^":"jN+x;"},
jP:{"^":"m+t;"},
jQ:{"^":"jP+x;"}}],["","",,P,{"^":"",
k4:function(a){var z,y
z=J.I(a)
if(!!z.$isc6){y=z.gcV(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.eF(a.data,a.height,a.width)},
k3:function(a){if(a instanceof P.eF)return{data:a.a,height:a.b,width:a.c}
return a},
aG:function(a){var z,y,x,w,v
if(a==null)return
z=P.fP(P.o,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w){v=H.U(y[w])
z.a4(0,v,a[v])}return z},
k1:function(a,b){var z={}
a.J(0,new P.k2(z))
return z},
ds:function(){var z=$.dr
if(z==null){z=J.cl(window.navigator.userAgent,"Opera",0)
$.dr=z}return z},
fm:function(){var z,y
z=$.dn
if(z!=null)return z
y=$.dp
if(y==null){y=J.cl(window.navigator.userAgent,"Firefox",0)
$.dp=y}if(y)z="-moz-"
else{y=$.dq
if(y==null){y=!P.ds()&&J.cl(window.navigator.userAgent,"Trident/",0)
$.dq=y}if(y)z="-ms-"
else z=P.ds()?"-o-":"-webkit-"}$.dn=z
return z},
eF:{"^":"a;cV:a>,b,c",$isc6:1},
k2:{"^":"u:12;a",
$2:function(a,b){this.a[a]=b}},
fx:{"^":"cD;a,b",
gbB:function(){var z,y,x
z=this.b
y=H.aL(z,"t",0)
x=W.a0
return new H.fY(new H.ix(z,H.b(new P.fy(),{func:1,ret:P.a7,args:[y]}),[y]),H.b(new P.fz(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.b5(this.gbB().a)},
k:function(a,b){var z=this.gbB()
return z.b.$1(J.d9(z.a,b))},
gV:function(a){var z=P.fU(this.gbB(),!1,W.a0)
return new J.ak(z,z.length,0,[H.y(z,0)])},
$ast:function(){return[W.a0]},
$ase:function(){return[W.a0]},
$asc:function(){return[W.a0]}},
fy:{"^":"u:24;",
$1:function(a){return!!J.I(H.h(a,"$isJ")).$isa0}},
fz:{"^":"u:25;",
$1:function(a){return H.d(H.h(a,"$isJ"),"$isa0")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bz:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
es:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bj:{"^":"a;n:a>,p:b>,$ti",
j:function(a){return"Point("+H.i(this.a)+", "+H.i(this.b)+")"},
u:function(a,b){var z,y,x
if(b==null)return!1
z=H.b0(b,"$isbj",[P.T],null)
if(!z)return!1
z=this.a
y=J.bV(b)
x=y.gn(b)
if(z==null?x==null:z===x){z=this.b
y=y.gp(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gR:function(a){var z,y
z=J.aH(this.a)
y=J.aH(this.b)
return P.es(P.bz(P.bz(0,z),y))},
i:function(a,b){var z,y,x
z=this.a
if(typeof z!=="number")return z.i()
y=H.y(this,0)
z=H.B(z*b,y)
x=this.b
if(typeof x!=="number")return x.i()
return new P.bj(z,H.B(x*b,y),this.$ti)}},
jj:{"^":"a;$ti",
gaU:function(a){var z=this.a
if(typeof z!=="number")return z.F()
return H.B(z+this.c,H.y(this,0))},
gbQ:function(a){var z=this.b
if(typeof z!=="number")return z.F()
return H.B(z+this.d,H.y(this,0))},
j:function(a){return"Rectangle ("+H.i(this.a)+", "+H.i(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.b0(b,"$isa6",[P.T],"$asa6")
if(!z)return!1
z=this.a
y=J.bV(b)
x=y.gaH(b)
if(z==null?x==null:z===x){x=this.b
w=y.gaY(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.F()
w=H.y(this,0)
if(H.B(z+this.c,w)===y.gaU(b)){if(typeof x!=="number")return x.F()
z=H.B(x+this.d,w)===y.gbQ(b)}else z=!1}else z=!1}else z=!1
return z},
gR:function(a){var z,y,x,w,v
z=this.a
y=J.aH(z)
x=this.b
w=J.aH(x)
if(typeof z!=="number")return z.F()
v=H.y(this,0)
z=H.B(z+this.c,v)
if(typeof x!=="number")return x.F()
v=H.B(x+this.d,v)
return P.es(P.bz(P.bz(P.bz(P.bz(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
cT:function(a,b){var z,y
H.w(b,"$isbj",[P.T],"$asbj")
z=b.a
y=this.a
if(typeof z!=="number")return z.dA()
if(typeof y!=="number")return H.p(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.dA()
if(typeof y!=="number")return H.p(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
a6:{"^":"jj;aH:a>,aY:b>,ag:c>,af:d>,$ti"}}],["","",,P,{"^":"",l2:{"^":"R;0n:x=,0p:y=","%":"SVGFEBlendElement"},l3:{"^":"R;0n:x=,0p:y=","%":"SVGFEColorMatrixElement"},l4:{"^":"R;0n:x=,0p:y=","%":"SVGFEComponentTransferElement"},l5:{"^":"R;0n:x=,0p:y=","%":"SVGFECompositeElement"},l6:{"^":"R;0n:x=,0p:y=","%":"SVGFEConvolveMatrixElement"},l7:{"^":"R;0n:x=,0p:y=","%":"SVGFEDiffuseLightingElement"},l8:{"^":"R;0n:x=,0p:y=","%":"SVGFEDisplacementMapElement"},l9:{"^":"R;0n:x=,0p:y=","%":"SVGFEFloodElement"},la:{"^":"R;0n:x=,0p:y=","%":"SVGFEGaussianBlurElement"},lb:{"^":"R;0n:x=,0p:y=","%":"SVGFEImageElement"},lc:{"^":"R;0n:x=,0p:y=","%":"SVGFEMergeElement"},ld:{"^":"R;0n:x=,0p:y=","%":"SVGFEMorphologyElement"},le:{"^":"R;0n:x=,0p:y=","%":"SVGFEOffsetElement"},lf:{"^":"R;0n:x=,0p:y=","%":"SVGFEPointLightElement"},lg:{"^":"R;0n:x=,0p:y=","%":"SVGFESpecularLightingElement"},lh:{"^":"R;0n:x=,0p:y=","%":"SVGFESpotLightElement"},li:{"^":"R;0n:x=,0p:y=","%":"SVGFETileElement"},lj:{"^":"R;0n:x=,0p:y=","%":"SVGFETurbulenceElement"},lm:{"^":"R;0n:x=,0p:y=","%":"SVGFilterElement"},ln:{"^":"bd;0n:x=,0p:y=","%":"SVGForeignObjectElement"},fB:{"^":"bd;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bd:{"^":"R;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},ls:{"^":"bd;0n:x=,0p:y=","%":"SVGImageElement"},bM:{"^":"m;",$isbM:1,"%":"SVGLength"},lv:{"^":"j5;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.M(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.k(a,b)},
$ast:function(){return[P.bM]},
$ise:1,
$ase:function(){return[P.bM]},
$isc:1,
$asc:function(){return[P.bM]},
$asx:function(){return[P.bM]},
"%":"SVGLengthList"},ly:{"^":"R;0n:x=,0p:y=","%":"SVGMaskElement"},bN:{"^":"m;",$isbN:1,"%":"SVGNumber"},lL:{"^":"jg;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.M(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.k(a,b)},
$ast:function(){return[P.bN]},
$ise:1,
$ase:function(){return[P.bN]},
$isc:1,
$asc:function(){return[P.bN]},
$asx:function(){return[P.bN]},
"%":"SVGNumberList"},lN:{"^":"R;0n:x=,0p:y=","%":"SVGPatternElement"},lP:{"^":"m;0n:x=,0p:y=","%":"SVGPoint"},lQ:{"^":"m;0l:length=","%":"SVGPointList"},lR:{"^":"m;0n:x=,0p:y=","%":"SVGRect"},lS:{"^":"fB;0n:x=,0p:y=","%":"SVGRectElement"},lZ:{"^":"jv;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.M(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.k(a,b)},
$ast:function(){return[P.o]},
$ise:1,
$ase:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]},
$asx:function(){return[P.o]},
"%":"SVGStringList"},R:{"^":"a0;",
gcS:function(a){return new P.fx(a,new W.iG(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},m_:{"^":"bd;0n:x=,0p:y=","%":"SVGSVGElement"},hQ:{"^":"bd;","%":"SVGTextPathElement;SVGTextContentElement"},m1:{"^":"hQ;0n:x=,0p:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bQ:{"^":"m;",$isbQ:1,"%":"SVGTransform"},m7:{"^":"jF;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.M(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.k(a,b)},
$ast:function(){return[P.bQ]},
$ise:1,
$ase:function(){return[P.bQ]},
$isc:1,
$asc:function(){return[P.bQ]},
$asx:function(){return[P.bQ]},
"%":"SVGTransformList"},ma:{"^":"bd;0n:x=,0p:y=","%":"SVGUseElement"},j4:{"^":"m+t;"},j5:{"^":"j4+x;"},jf:{"^":"m+t;"},jg:{"^":"jf+x;"},ju:{"^":"m+t;"},jv:{"^":"ju+x;"},jE:{"^":"m+t;"},jF:{"^":"jE+x;"}}],["","",,P,{"^":"",kI:{"^":"m;0l:length=","%":"AudioBuffer"},kJ:{"^":"iF;",
k:function(a,b){return P.aG(a.get(H.U(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aG(y.value[1]))}},
gaq:function(a){var z=H.f([],[P.o])
this.J(a,new P.f4(z))
return z},
gl:function(a){return a.size},
$asa8:function(){return[P.o,null]},
$isa2:1,
$asa2:function(){return[P.o,null]},
"%":"AudioParamMap"},f4:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},kK:{"^":"a1;0l:length=","%":"AudioTrackList"},f5:{"^":"a1;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lM:{"^":"f5;0l:length=","%":"OfflineAudioContext"},iF:{"^":"m+a8;"}}],["","",,P,{"^":"",cJ:{"^":"m;",
he:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.I(g)
if(!!z.$isc6)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.k3(g))
return}if(!!z.$isdx)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.j(P.f2("Incorrect number or type of arguments"))},
hd:function(a,b,c,d,e,f,g){return this.he(a,b,c,d,e,f,g,null,null,null)},
$iscJ:1,
"%":"WebGLRenderingContext"},hR:{"^":"m;",$ishR:1,"%":"WebGLTexture"},ib:{"^":"m;",$isib:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",lX:{"^":"js;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.M(b,a,null,null,null))
return P.aG(a.item(b))},
D:function(a,b){return this.k(a,b)},
$ast:function(){return[[P.a2,,,]]},
$ise:1,
$ase:function(){return[[P.a2,,,]]},
$isc:1,
$asc:function(){return[[P.a2,,,]]},
$asx:function(){return[[P.a2,,,]]},
"%":"SQLResultSetRowList"},jr:{"^":"m+t;"},js:{"^":"jr+x;"}}],["","",,O,{"^":"",ad:{"^":"a;0a,0b,0c,0d,$ti",
b0:function(a){this.a=H.f([],[a])
this.b=null
this.c=null
this.d=null},
cg:function(a,b,c){var z=H.aL(this,"ad",0)
H.b(b,{func:1,ret:P.a7,args:[[P.e,z]]})
z={func:1,ret:-1,args:[P.L,[P.e,z]]}
H.b(a,z)
H.b(c,z)
this.b=b
this.c=a
this.d=c},
aL:function(a,b){return this.cg(a,null,b)},
cE:function(a){var z
H.w(a,"$ise",[H.aL(this,"ad",0)],"$ase")
z=this.b
if(z!=null)return z.$1(a)
return!0},
cm:function(a,b){var z
H.w(b,"$ise",[H.aL(this,"ad",0)],"$ase")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gV:function(a){var z=this.a
return new J.ak(z,z.length,0,[H.y(z,0)])},
D:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.k(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aL(this,"ad",0)
H.B(b,z)
z=[z]
if(this.cE(H.f([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.cm(x,H.f([b],z))}},
bM:function(a,b){var z,y
H.w(b,"$ise",[H.aL(this,"ad",0)],"$ase")
if(this.cE(b)){z=this.a
y=z.length
C.a.bM(z,b)
this.cm(y,b)}},
$ise:1,
t:{
cs:function(a){var z=new O.ad([a])
z.b0(a)
return z}}},cF:{"^":"a;0a,0b",
gl:function(a){return this.a.length},
gq:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
dN:function(a){var z=this.b
if(!(z==null))z.w(a)},
au:function(){return this.dN(null)},
gS:function(a){var z=this.a
if(z.length>0)return C.a.gc3(z)
else return V.aS()},
bo:function(a){var z=this.a
if(a==null)C.a.h(z,V.aS())
else C.a.h(z,a)
this.au()},
as:function(){var z=this.a
if(z.length>0){z.pop()
this.au()}}}}],["","",,E,{"^":"",cm:{"^":"a;"},az:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0Y:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sbs:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gq()
y.toString
x=H.b(this.gdr(),{func:1,ret:-1,args:[D.l]})
C.a.M(y.a,x)}y=this.c
if(y!=null){y=y.gq()
y.toString
x=H.b(this.gdr(),{func:1,ret:-1,args:[D.l]})
C.a.h(y.a,x)}w=new D.F("shape",z,this.c,this,[F.dS])
w.b=!0
this.aI(w)}},
ab:function(a,b){var z
for(z=this.y.a,z=new J.ak(z,z.length,0,[H.y(z,0)]);z.E();)z.d.ab(0,b)},
a2:function(a){var z,y
z=a.dx
C.a.h(z.a,z.gS(z))
z.au()
a.c9(this.f)
z=a.dy
y=(z&&C.a).gc3(z)
if(y!=null&&this.d!=null)y.ds(a,this)
for(z=this.y.a,z=new J.ak(z,z.length,0,[H.y(z,0)]);z.E();)z.d.a2(a)
a.c8()
a.dx.as()},
gq:function(){var z=this.z
if(z==null){z=D.C()
this.z=z}return z},
aI:function(a){var z=this.z
if(!(z==null))z.w(a)},
a1:function(){return this.aI(null)},
fW:[function(a){H.h(a,"$isl")
this.e=null
this.aI(a)},function(){return this.fW(null)},"i1","$1","$0","gdr",0,2,0],
fU:[function(a){this.aI(H.h(a,"$isl"))},function(){return this.fU(null)},"i_","$1","$0","gdq",0,2,0],
hZ:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$ise",[E.az],"$ase")
for(z=b.length,y=this.gdq(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.gY()==null){t=new D.aP()
t.a=H.f([],w)
t.c=0
u.sY(t)}t=u.gY()
t.toString
H.b(y,x)
C.a.h(t.a,y)}}this.a1()},"$2","gfT",8,0,8],
i0:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$ise",[E.az],"$ase")
for(z=b.length,y=this.gdq(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.gY()==null){t=new D.aP()
t.a=H.f([],w)
t.c=0
u.sY(t)}t=u.gY()
t.toString
H.b(y,x)
C.a.M(t.a,y)}}this.a1()},"$2","gfV",8,0,8],
$isat:1,
t:{
du:function(a,b,c,d,e,f){var z,y
z=new E.az()
z.a=d
z.b=!0
y=O.cs(E.az)
z.y=y
y.aL(z.gfT(),z.gfV())
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
return z}}},ht:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
dM:function(a,b){var z,y,x,w,v
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
z=new O.cF()
y=[V.ap]
z.a=H.f([],y)
x=z.gq()
x.toString
w={func:1,ret:-1,args:[D.l]}
v=H.b(new E.hv(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cF()
z.a=H.f([],y)
v=z.gq()
v.toString
x=H.b(new E.hw(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cF()
z.a=H.f([],y)
y=z.gq()
y.toString
w=H.b(new E.hx(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.f([],[O.bP])
this.dy=z
C.a.h(z,null)
this.fr=new H.cB(0,0,[P.o,A.cL])},
gh4:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gS(z)
y=this.db
y=z.i(0,y.gS(y))
this.z=y
z=y}return z},
c9:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gc3(z):a;(z&&C.a).h(z,y)},
c8:function(){var z=this.dy
if(z.length>1)z.pop()},
cO:function(a){var z=a.b
if(z.length===0)throw H.j(P.q("May not cache a shader with no name."))
if(this.fr.fC(0,z))throw H.j(P.q('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.a4(0,z,a)},
t:{
hu:function(a,b){var z=new E.ht(a,b)
z.dM(a,b)
return z}}},hv:{"^":"u:9;a",
$1:function(a){var z
H.h(a,"$isl")
z=this.a
z.z=null
z.ch=null}},hw:{"^":"u:9;a",
$1:function(a){var z
H.h(a,"$isl")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hx:{"^":"u:9;a",
$1:function(a){var z
H.h(a,"$isl")
z=this.a
z.ch=null
z.cx=null}},hX:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0Y:x@,0y,0z,0Q,0ch",
gq:function(){var z=this.x
if(z==null){z=D.C()
this.x=z}return z},
dP:[function(a){var z
H.h(a,"$isl")
z=this.x
if(!(z==null))z.w(a)
this.h8()},function(){return this.dP(null)},"dO","$1","$0","gcn",0,2,0],
gfJ:function(){var z,y,x
z=Date.now()
y=C.h.Z(P.dt(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.al(z,!1)
return x/y},
cH:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.i()
if(typeof z!=="number")return H.p(z)
x=C.e.c1(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.i()
w=C.e.c1(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
h8:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.b(new E.hZ(this),{func:1,ret:-1,args:[P.T]})
C.r.e7(z)
C.r.eO(z,W.eK(y,P.T))}},
h7:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cH()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.al(w,!1)
x.y=P.dt(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.au()
w=x.db
C.a.sl(w.a,0)
w.au()
w=x.dx
C.a.sl(w.a,0)
w.au()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a2(this.e)}}catch(v){z=H.aO(v)
y=H.b3(v)
P.d7("Error: "+H.i(z))
P.d7("Stack: "+H.i(y))
throw H.j(z)}},
t:{
hY:function(a,b,c,d,e){var z,y,x,w
z=J.I(a)
if(!!z.$iscq)return E.e_(a,!0,!0,!0,!1)
y=W.cr(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcS(a).h(0,y)
w=E.e_(y,!0,!0,!0,!1)
w.a=a
return w},
e_:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.hX()
y=P.fQ(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.o,null)
x=C.k.br(a,"webgl",y)
x=H.h(x==null?C.k.br(a,"experimental-webgl",y):x,"$iscJ")
if(x==null)H.r(P.q("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hu(x,a)
w=new T.hS(x)
w.b=H.a_(x.getParameter(3379))
w.c=H.a_(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.ih(a)
v=new X.fJ()
v.c=new X.ar(!1,!1,!1)
v.d=P.fR(null,null,null,P.L)
w.b=v
v=new X.h9(w)
v.f=0
v.r=new V.N(0,0)
v.x=new V.N(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.fV(w)
v.r=0
v.x=new V.N(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.i0(w)
v.e=0
v.f=new V.N(0,0)
v.r=new V.N(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.f([],[[P.dW,P.a]])
w.z=v
u=document
t=W.as
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.Y(u,"contextmenu",H.b(w.geo(),s),!1,t))
v=w.z
r=W.a4
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.Y(a,"focus",H.b(w.ger(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.Y(a,"blur",H.b(w.gel(),q),!1,r))
v=w.z
p=W.bf
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.Y(u,"keyup",H.b(w.geu(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.Y(u,"keydown",H.b(w.ges(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.Y(a,"mousedown",H.b(w.gex(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Y(a,"mouseup",H.b(w.gez(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Y(a,"mousemove",H.b(w.gey(),s),!1,t))
p=w.z
o=W.bx;(p&&C.a).h(p,W.Y(a,H.U(W.fs(a)),H.b(w.geA(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.Y(u,"mousemove",H.b(w.gep(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.Y(u,"mouseup",H.b(w.geq(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.Y(u,"pointerlockchange",H.b(w.geB(),q),!1,r))
r=w.z
q=W.aV
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.Y(a,"touchstart",H.b(w.geJ(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Y(a,"touchend",H.b(w.geH(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Y(a,"touchmove",H.b(w.geI(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.al(Date.now(),!1)
z.ch=0
z.cH()
return z}}},hZ:{"^":"u:28;a",
$1:function(a){var z
H.ko(a)
z=this.a
if(z.z){z.z=!1
z.h7()}}}}],["","",,Z,{"^":"",en:{"^":"a;a,b",t:{
cS:function(a,b,c){var z
H.w(c,"$isc",[P.L],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bA(c)),35044)
a.bindBuffer(b,null)
return new Z.en(b,z)}}},de:{"^":"cm;a,b,c,d,e",
U:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aO(y)
x=P.q('Failed to bind buffer attribute "'+J.aj(this.a)+'": '+H.i(z))
throw H.j(x)}},
j:function(a){return"["+J.aj(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.i(this.e)+"]"}},eo:{"^":"a;a",$iskL:1},cp:{"^":"a;a,0b,c,d",
ap:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
U:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].U(a)},
aJ:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
a2:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.k(x,y)
w=x[y]
x=w.c
v=x.a
a.a.bindBuffer(v,x.b)
a.a.drawElements(w.a,w.b,5123,0)
a.a.bindBuffer(v,null)}},
j:function(a){var z,y,x,w,v,u
z=[P.o]
y=H.f([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v)C.a.h(y,x[v].j(0))
u=H.f([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.aj(z[v]))
return"Buffer:  ["+this.a.j(0)+"]\nIndices: "+C.a.W(y,", ")+"\nAttrs:   "+C.a.W(u,", ")},
$ism0:1},c7:{"^":"a;a,b,c",
j:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aT(this.c)+"'")+"]"}},aW:{"^":"a;a",
gci:function(a){var z,y
z=this.a
y=(z&$.$get$an().a)!==0?3:0
if((z&$.$get$aC().a)!==0)y+=3
if((z&$.$get$aB().a)!==0)y+=3
if((z&$.$get$aD().a)!==0)y+=2
if((z&$.$get$aE().a)!==0)y+=3
if((z&$.$get$bv().a)!==0)y+=3
if((z&$.$get$bw().a)!==0)y+=4
if((z&$.$get$aX().a)!==0)++y
return(z&$.$get$aA().a)!==0?y+4:y},
fv:function(a){var z,y,x
z=$.$get$an()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aC()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aB()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aD()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aE()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bv()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bw()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aX()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aA()
if((y&z.a)!==0)if(x===a)return z
return $.$get$em()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aW))return!1
return this.a===b.a},
j:function(a){var z,y
z=H.f([],[P.o])
y=this.a
if((y&$.$get$an().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aC().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aB().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aD().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aE().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bv().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bw().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aX().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aA().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.W(z,"|")},
t:{
ah:function(a){return new Z.aW(a)}}}}],["","",,D,{"^":"",dh:{"^":"a;"},aP:{"^":"a;0a,0b,0c",
w:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.l(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.J(y,new D.fv(z))
return x!==0},
fG:function(){return this.w(null)},
h9:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.w(y)}}},
at:function(a){return this.h9(a,!0,!1)},
t:{
C:function(){var z=new D.aP()
z.a=H.f([],[{func:1,ret:-1,args:[D.l]}])
z.c=0
return z}}},fv:{"^":"u:29;a",
$1:function(a){var z
H.b(a,{func:1,ret:-1,args:[D.l]})
z=this.a.a
z.b
a.$1(z)}},l:{"^":"a;a,0b"},bH:{"^":"l;c,d,a,0b,$ti"},bI:{"^":"l;c,d,a,0b,$ti"},F:{"^":"l;c,d,e,a,0b,$ti",
j:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}}],["","",,X,{"^":"",df:{"^":"a;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.df))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.i(this.a)},
t:{"^":"kM<"}},dC:{"^":"a;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dC))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.i(this.a)}},dD:{"^":"l;c,a,0b"},fJ:{"^":"a;0a,0b,0c,0d",
h1:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dD(a,this)
y.b=!0
return z.w(y)},
fY:function(a){var z,y
this.c=a.b
this.d.M(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dD(a,this)
y.b=!0
return z.w(y)}},dG:{"^":"ca;x,y,c,d,e,a,0b"},fV:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ak:function(a,b){var z,y,x,w,v,u,t,s
z=new P.al(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.i()
v=b.b
u=this.ch
if(typeof v!=="number")return v.i()
t=new V.N(y.a+x*w,y.b+v*u)
u=this.a.gaB()
s=new X.bh(a,new V.N(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
c7:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.w(this.ak(a,b))
return!0},
aS:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dE()
if(typeof z!=="number")return z.dw()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.w(this.ak(a,b))
return!0},
aR:function(a,b){var z=this.d
if(z==null)return!1
z.w(this.ak(a,b))
return!0},
h2:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaB()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.i()
t=a.b
s=this.cy
if(typeof t!=="number")return t.i()
w=new X.cG(new V.Q(v*u,t*s),y,x,new P.al(w,!1),this)
w.b=!0
z.w(w)
return!0},
ew:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.al(Date.now(),!1)
y=this.f
x=new X.dG(c,a,this.a.gaB(),b,z,this)
x.b=!0
y.w(x)
this.y=z
this.x=new V.N(0,0)}},ar:{"^":"a;a,b,c",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ar))return!1
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
return z+(this.c?"Shift+":"")}},bh:{"^":"ca;x,y,z,Q,ch,c,d,e,a,0b"},h9:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bA:function(a,b,c){var z,y,x
z=new P.al(Date.now(),!1)
y=this.a.gaB()
x=new X.bh(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
c7:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.w(this.bA(a,b,!0))
return!0},
aS:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dE()
if(typeof z!=="number")return z.dw()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.w(this.bA(a,b,!0))
return!0},
aR:function(a,b){var z=this.d
if(z==null)return!1
z.w(this.bA(a,b,!1))
return!0},
h3:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaB()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.i()
u=a.b
t=this.ch
if(typeof u!=="number")return u.i()
x=new X.cG(new V.Q(w*v,u*t),y,b,new P.al(x,!1),this)
x.b=!0
z.w(x)
return!0},
gcY:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
gbq:function(){var z=this.c
if(z==null){z=D.C()
this.c=z}return z},
gdn:function(){var z=this.d
if(z==null){z=D.C()
this.d=z}return z}},cG:{"^":"ca;x,c,d,e,a,0b"},ca:{"^":"l;"},e1:{"^":"ca;x,y,z,Q,ch,c,d,e,a,0b"},i0:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
ak:function(a,b){var z,y,x,w
H.w(a,"$isc",[V.N],"$asc")
z=new P.al(Date.now(),!1)
y=a.length>0?a[0]:new V.N(0,0)
x=this.a.gaB()
w=new X.e1(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
h0:function(a){var z
H.w(a,"$isc",[V.N],"$asc")
z=this.b
if(z==null)return!1
z.w(this.ak(a,!0))
return!0},
fZ:function(a){var z
H.w(a,"$isc",[V.N],"$asc")
z=this.c
if(z==null)return!1
z.w(this.ak(a,!0))
return!0},
h_:function(a){var z
H.w(a,"$isc",[V.N],"$asc")
z=this.d
if(z==null)return!1
z.w(this.ak(a,!1))
return!0}},ih:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaB:function(){var z=this.a
return V.dR(0,0,(z&&C.k).gb7(z).c,C.k.gb7(z).d)},
cz:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dC(z,new X.ar(y,a.altKey,a.shiftKey))},
aA:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ar(y,a.altKey,a.shiftKey)},
bL:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ar(y,a.altKey,a.shiftKey)},
al:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.G()
v=z.top
if(typeof x!=="number")return x.G()
return new V.N(y-w,x-v)},
aM:function(a){return new V.Q(a.movementX,a.movementY)},
bH:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.f([],[V.N])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
t=C.e.a7(u.pageX)
C.e.a7(u.pageY)
s=z.left
C.e.a7(u.pageX)
C.a.h(y,new V.N(t-s,C.e.a7(u.pageY)-z.top))}return y},
ai:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.df(z,new X.ar(y,a.altKey,a.shiftKey))},
hB:[function(a){this.f=!0},"$1","ger",4,0,4],
hv:[function(a){this.f=!1},"$1","gel",4,0,4],
hy:[function(a){if(this.f)a.preventDefault()},"$1","geo",4,0,4],
hD:[function(a){var z
H.h(a,"$isbf")
if(!this.f)return
z=this.cz(a)
if(this.b.h1(z))a.preventDefault()},"$1","geu",4,0,16],
hC:[function(a){var z
H.h(a,"$isbf")
if(!this.f)return
z=this.cz(a)
if(this.b.fY(z))a.preventDefault()},"$1","ges",4,0,16],
hF:[function(a){var z,y,x,w
H.h(a,"$isas")
z=this.a
z.focus()
this.f=!0
this.aA(a)
if(this.x){y=this.ai(a)
x=this.aM(a)
if(this.d.c7(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ai(a)
w=this.al(a)
if(this.c.c7(y,w))a.preventDefault()},"$1","gex",4,0,5],
hH:[function(a){var z,y,x
H.h(a,"$isas")
this.aA(a)
z=this.ai(a)
if(this.x){y=this.aM(a)
if(this.d.aS(z,y))a.preventDefault()
return}if(this.r)return
x=this.al(a)
if(this.c.aS(z,x))a.preventDefault()},"$1","gez",4,0,5],
hA:[function(a){var z,y,x,w
H.h(a,"$isas")
z=this.a
if(!(z&&C.k).gb7(z).cT(0,new P.bj(a.clientX,a.clientY,[P.T]))){this.aA(a)
y=this.ai(a)
if(this.x){x=this.aM(a)
if(this.d.aS(y,x))a.preventDefault()
return}if(this.r)return
w=this.al(a)
if(this.c.aS(y,w))a.preventDefault()}},"$1","geq",4,0,5],
hG:[function(a){var z,y,x
H.h(a,"$isas")
this.aA(a)
z=this.ai(a)
if(this.x){y=this.aM(a)
if(this.d.aR(z,y))a.preventDefault()
return}if(this.r)return
x=this.al(a)
if(this.c.aR(z,x))a.preventDefault()},"$1","gey",4,0,5],
hz:[function(a){var z,y,x,w
H.h(a,"$isas")
z=this.a
if(!(z&&C.k).gb7(z).cT(0,new P.bj(a.clientX,a.clientY,[P.T]))){this.aA(a)
y=this.ai(a)
if(this.x){x=this.aM(a)
if(this.d.aR(y,x))a.preventDefault()
return}if(this.r)return
w=this.al(a)
if(this.c.aR(y,w))a.preventDefault()}},"$1","gep",4,0,5],
hI:[function(a){var z,y
H.h(a,"$isbx")
this.aA(a)
z=new V.Q((a&&C.q).gfE(a),C.q.gfF(a)).v(0,180)
if(this.x){if(this.d.h2(z))a.preventDefault()
return}if(this.r)return
y=this.al(a)
if(this.c.h3(z,y))a.preventDefault()},"$1","geA",4,0,31],
hJ:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ai(this.y)
v=this.al(this.y)
this.d.ew(w,v,x)}},"$1","geB",4,0,4],
hR:[function(a){var z
H.h(a,"$isaV")
this.a.focus()
this.f=!0
this.bL(a)
z=this.bH(a)
if(this.e.h0(z))a.preventDefault()},"$1","geJ",4,0,10],
hP:[function(a){var z
H.h(a,"$isaV")
this.bL(a)
z=this.bH(a)
if(this.e.fZ(z))a.preventDefault()},"$1","geH",4,0,10],
hQ:[function(a){var z
H.h(a,"$isaV")
this.bL(a)
z=this.bH(a)
if(this.e.h_(z))a.preventDefault()},"$1","geI",4,0,10]}}],["","",,D,{"^":"",c3:{"^":"a;0a,0b,0c,0d",
gq:function(){var z=this.d
if(z==null){z=D.C()
this.d=z}return z},
av:[function(a){var z
H.h(a,"$isl")
z=this.d
if(!(z==null))z.w(a)},function(){return this.av(null)},"hj","$1","$0","gdQ",0,2,0],
$isW:1,
$isat:1},W:{"^":"a;",$isat:1},fK:{"^":"ad;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gq:function(){var z=this.Q
if(z==null){z=D.C()
this.Q=z}return z},
av:function(a){var z=this.Q
if(!(z==null))z.w(a)},
ev:[function(a){var z
H.h(a,"$isl")
z=this.ch
if(!(z==null))z.w(a)},function(){return this.ev(null)},"hE","$1","$0","gcD",0,2,0],
hK:[function(a){var z,y,x
H.w(a,"$ise",[D.W],"$ase")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.z)(a),++y){x=a[y]
if(x==null||this.e2(x))return!1}return!0},"$1","geC",4,0,33],
hs:[function(a,b){var z,y,x,w,v,u,t,s
z=D.W
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gcD(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=H.h(b[u],"$isW")
if(t instanceof D.c3)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aP()
s.a=H.f([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.h(s.a,x)}z=new D.bH(a,b,this,[z])
z.b=!0
this.av(z)},"$2","gei",8,0,17],
hM:[function(a,b){var z,y,x,w,v,u,t,s
z=D.W
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gcD(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=H.h(b[u],"$isW")
if(t instanceof D.c3)C.a.M(this.e,t)
s=t.d
if(s==null){s=new D.aP()
s.a=H.f([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.M(s.a,x)}z=new D.bI(a,b,this,[z])
z.b=!0
this.av(z)},"$2","geE",8,0,17],
e2:function(a){var z=C.a.b8(this.e,a)
return z},
$ase:function(){return[D.W]},
$asad:function(){return[D.W]}},hj:{"^":"a;",$isW:1,$isat:1},hK:{"^":"a;",$isW:1,$isat:1},hU:{"^":"a;",$isW:1,$isat:1},hV:{"^":"a;",$isW:1,$isat:1},hW:{"^":"a;",$isW:1,$isat:1}}],["","",,V,{"^":"",
kO:[function(a,b){if(typeof b!=="number")return b.G()
if(typeof a!=="number")return H.p(a)
return Math.abs(b-a)<=1e-9},"$2","h6",8,0,32],
kD:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.e.dD(a-b,z)
return(a<0?a+z:a)+b},
K:function(a,b,c){if(a==null)return C.j.ar("null",c)
return C.j.ar(C.e.dv($.n.$2(a,0)?0:a,b),c+b+1)},
b2:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isc",[P.v],"$asc")
z=H.f([],[P.o])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.z)(a),++w){v=V.K(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.k(z,u)
C.a.a4(z,u,C.j.ar(z[u],x))}return z},
d6:function(a,b){return C.e.hg(Math.pow(b,C.w.c1(Math.log(H.k0(a))/Math.log(b))))},
V:{"^":"a;a,b,c",
i:function(a,b){var z,y,x
z=b*this.a
y=b*this.b
x=b*this.c
if(z<0)z=0
else if(z>1)z=1
if(y<0)y=0
else if(y>1)y=1
if(x<0)x=0
else if(x>1)x=1
return new V.V(z,y,x)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}},
ay:{"^":"a;a,b,c,d",
i:function(a,b){var z,y,x,w
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
return new V.ay(z,y,x,w)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ay))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}},
c9:{"^":"a;a,b,c,d,e,f,r,x,y",
a3:function(a,b){var z=H.f([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.v])
return z},
i:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.h(a5,"$isc9")
z=this.a
y=a5.a
if(typeof z!=="number")return z.i()
x=C.e.i(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.i()
u=C.e.i(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.i()
r=C.e.i(t,s)
q=a5.b
p=C.e.i(z,q)
o=a5.e
n=C.e.i(w,o)
m=a5.x
l=C.e.i(t,m)
k=a5.c
z=C.e.i(z,k)
j=a5.f
w=C.e.i(w,j)
i=a5.y
t=C.e.i(t,i)
h=this.d
if(typeof h!=="number")return h.i()
g=C.e.i(h,y)
f=this.e
if(typeof f!=="number")return f.i()
e=C.e.i(f,v)
d=this.f
if(typeof d!=="number")return d.i()
c=C.e.i(d,s)
b=C.e.i(h,q)
a=C.e.i(f,o)
a0=C.e.i(d,m)
h=C.e.i(h,k)
f=C.e.i(f,j)
d=C.e.i(d,i)
a1=this.r
if(typeof a1!=="number")return a1.i()
y=C.e.i(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.i()
v=C.e.i(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.i()
return new V.c9(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.e.i(a3,s),C.e.i(a1,q)+C.e.i(a2,o)+C.e.i(a3,m),C.e.i(a1,k)+C.e.i(a2,j)+C.e.i(a3,i))},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c9))return!1
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
j:function(a){var z,y,x,w,v,u,t,s
z=[P.v]
y=V.b2(H.f([this.a,this.d,this.r],z),3,0)
x=V.b2(H.f([this.b,this.e,this.x],z),3,0)
w=V.b2(H.f([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.k(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.k(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.k(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.k(y,1)
s=" "+y[1]+", "
if(1>=u)return H.k(x,1)
s=s+x[1]+", "
if(1>=t)return H.k(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.k(y,2)
z=" "+y[2]+", "
if(2>=u)return H.k(x,2)
z=z+x[2]+", "
if(2>=t)return H.k(w,2)
return s+(z+w[2]+"]")}},
ap:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a3:function(a,b){var z=H.f([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.v])
return z},
c2:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.i()
if(typeof y!=="number")return H.p(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.i()
if(typeof w!=="number")return H.p(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.p(u)
t=this.c
if(typeof t!=="number")return t.i()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.p(r)
q=this.d
if(typeof q!=="number")return q.i()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.i()
if(typeof k!=="number")return H.p(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.i()
if(typeof i!=="number")return H.p(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.p(g)
f=this.Q
if(typeof f!=="number")return f.i()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.p(d)
c=this.ch
if(typeof c!=="number")return c.i()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.n.$2(a2,0))return V.aS()
a3=1/a2
a4=-w
a5=-i
return V.aq((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
i:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.h(a7,"$isap")
z=this.a
y=a7.a
if(typeof z!=="number")return z.i()
if(typeof y!=="number")return H.p(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.i()
if(typeof w!=="number")return H.p(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.i()
if(typeof u!=="number")return H.p(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.i()
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
if(typeof f!=="number")return f.i()
e=this.f
if(typeof e!=="number")return e.i()
d=this.r
if(typeof d!=="number")return d.i()
c=this.x
if(typeof c!=="number")return c.i()
b=this.y
if(typeof b!=="number")return b.i()
a=this.z
if(typeof a!=="number")return a.i()
a0=this.Q
if(typeof a0!=="number")return a0.i()
a1=this.ch
if(typeof a1!=="number")return a1.i()
a2=this.cx
if(typeof a2!=="number")return a2.i()
a3=this.cy
if(typeof a3!=="number")return a3.i()
a4=this.db
if(typeof a4!=="number")return a4.i()
a5=this.dx
if(typeof a5!=="number")return a5.i()
return V.aq(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cd:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.i()
x=this.b
w=a.b
if(typeof x!=="number")return x.i()
v=this.c
u=a.c
if(typeof v!=="number")return v.i()
t=this.e
if(typeof t!=="number")return t.i()
s=this.f
if(typeof s!=="number")return s.i()
r=this.r
if(typeof r!=="number")return r.i()
q=this.y
if(typeof q!=="number")return q.i()
p=this.z
if(typeof p!=="number")return p.i()
o=this.Q
if(typeof o!=="number")return o.i()
return new V.E(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
aZ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.i()
x=this.b
w=a.b
if(typeof x!=="number")return x.i()
v=this.c
u=a.c
if(typeof v!=="number")return v.i()
t=this.d
if(typeof t!=="number")return H.p(t)
s=this.e
if(typeof s!=="number")return s.i()
r=this.f
if(typeof r!=="number")return r.i()
q=this.r
if(typeof q!=="number")return q.i()
p=this.x
if(typeof p!=="number")return H.p(p)
o=this.y
if(typeof o!=="number")return o.i()
n=this.z
if(typeof n!=="number")return n.i()
m=this.Q
if(typeof m!=="number")return m.i()
l=this.ch
if(typeof l!=="number")return H.p(l)
return new V.X(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ap))return!1
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
j:function(a){return this.K()},
dj:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.v]
y=V.b2(H.f([this.a,this.e,this.y,this.cx],z),b,c)
x=V.b2(H.f([this.b,this.f,this.z,this.cy],z),b,c)
w=V.b2(H.f([this.c,this.r,this.Q,this.db],z),b,c)
v=V.b2(H.f([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.k(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.k(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.k(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.k(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.k(y,1)
q=q+y[1]+", "
if(1>=t)return H.k(x,1)
q=q+x[1]+", "
if(1>=s)return H.k(w,1)
q=q+w[1]+", "
if(1>=r)return H.k(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.k(y,2)
u=u+y[2]+", "
if(2>=t)return H.k(x,2)
u=u+x[2]+", "
if(2>=s)return H.k(w,2)
u=u+w[2]+", "
if(2>=r)return H.k(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.k(y,3)
q=q+y[3]+", "
if(3>=t)return H.k(x,3)
q=q+x[3]+", "
if(3>=s)return H.k(w,3)
q=q+w[3]+", "
if(3>=r)return H.k(v,3)
return u+(q+v[3]+"]")},
C:function(a){return this.dj(a,3,0)},
K:function(){return this.dj("",3,0)},
t:{
aq:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ap(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aS:function(){return V.aq(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
dJ:function(a,b,c){var z,y,x,w,v
z=c.v(0,Math.sqrt(c.B(c)))
y=b.an(z)
x=y.v(0,Math.sqrt(y.B(y)))
w=z.an(x)
v=new V.E(a.a,a.b,a.c)
return V.aq(x.a,w.a,z.a,x.H(0).B(v),x.b,w.b,z.b,w.H(0).B(v),x.c,w.c,z.c,z.H(0).B(v),0,0,0,1)}}},
N:{"^":"a;n:a>,p:b>",
G:function(a,b){return new V.N(this.a-b.a,this.b-b.b)},
i:function(a,b){return new V.N(this.a*b,this.b*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.N))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}},
X:{"^":"a;n:a>,p:b>,c",
F:function(a,b){return new V.X(this.a+b.a,this.b+b.b,this.c+b.c)},
G:function(a,b){return new V.X(this.a-b.a,this.b-b.b,this.c-b.c)},
i:function(a,b){return new V.X(this.a*b,this.b*b,this.c*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}},
bk:{"^":"a;n:a>,p:b>,c,d",
i:function(a,b){return new V.bk(this.a*b,this.b*b,this.c*b,this.d*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bk))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}},
dQ:{"^":"a;n:a>,p:b>,c,d",
ga0:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dQ))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"},
t:{
dR:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dQ(a,b,c,d)}}},
Q:{"^":"a;a,b",
fN:[function(a){return Math.sqrt(this.B(this))},"$0","gl",1,0,18],
B:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.i()
if(typeof y!=="number")return H.p(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.i()
if(typeof w!=="number")return H.p(w)
return z*y+x*w},
i:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.i()
y=this.b
if(typeof y!=="number")return y.i()
return new V.Q(z*b,y*b)},
v:function(a,b){var z,y
if($.n.$2(b,0))return new V.Q(0,0)
z=this.a
if(typeof z!=="number")return z.v()
y=this.b
if(typeof y!=="number")return y.v()
return new V.Q(z/b,y/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
j:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}},
E:{"^":"a;a,b,c",
fN:[function(a){return Math.sqrt(this.B(this))},"$0","gl",1,0,18],
B:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
an:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.E(z*y-x*w,x*v-u*y,u*w-z*v)},
F:function(a,b){return new V.E(this.a+b.a,this.b+b.b,this.c+b.c)},
H:function(a){return new V.E(-this.a,-this.b,-this.c)},
i:function(a,b){return new V.E(this.a*b,this.b*b,this.c*b)},
v:function(a,b){if($.n.$2(b,0))return new V.E(0,0,0)
return new V.E(this.a/b,this.b/b,this.c/b)},
dm:function(){if(!$.n.$2(0,this.a))return!1
if(!$.n.$2(0,this.b))return!1
if(!$.n.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.E))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}}],["","",,U,{"^":"",fd:{"^":"dh;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bv:function(a){var z=V.kD(a,this.c,this.b)
return z},
gq:function(){var z=this.y
if(z==null){z=D.C()
this.y=z}return z},
I:function(a){var z=this.y
if(!(z==null))z.w(a)},
sce:function(a,b){},
sc4:function(a){var z,y
z=this.b
if(!$.n.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bv(z)}z=new D.F("maximumLocation",y,this.b,this,[P.v])
z.b=!0
this.I(z)}},
sc6:function(a){var z,y
z=this.c
if(!$.n.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bv(z)}z=new D.F("minimumLocation",y,this.c,this,[P.v])
z.b=!0
this.I(z)}},
sa_:function(a,b){var z,y
b=this.bv(b)
z=this.d
if(!$.n.$2(z,b)){y=this.d
this.d=b
z=new D.F("location",y,b,this,[P.v])
z.b=!0
this.I(z)}},
sc5:function(a){var z,y,x
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
this.I(z)}},
sL:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.n.$2(z,a)){x=this.f
this.f=a
z=new D.F("velocity",x,a,this,[P.v])
z.b=!0
this.I(z)}},
sbU:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.n.$2(z,a)){y=this.x
this.x=a
z=new D.F("dampening",y,a,this,[P.v])
z.b=!0
this.I(z)}},
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
y=w}this.sL(y)}},
t:{
ct:function(){var z=new U.fd()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dj:{"^":"a9;0a,0b",
gq:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
aK:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dj))return!1
return J.P(this.a,b.a)},
j:function(a){return"Constant: "+this.a.C("          ")},
t:{
dk:function(a){var z=new U.dj()
z.a=a
return z}}},dw:{"^":"ad;0e,0f,0r,0a,0b,0c,0d",
gq:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
I:[function(a){var z
H.h(a,"$isl")
z=this.e
if(!(z==null))z.w(a)},function(){return this.I(null)},"a9","$1","$0","gaz",0,2,0],
hr:[function(a,b){var z,y,x,w,v,u,t
z=U.a9
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gaz(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.z)(b),++v){u=b[v]
if(u!=null){t=u.gq()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.bH(a,b,this,[z])
z.b=!0
this.I(z)},"$2","geh",8,0,19],
hL:[function(a,b){var z,y,x,w,v,u,t
z=U.a9
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gaz(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.z)(b),++v){u=b[v]
if(u!=null){t=u.gq()
t.toString
H.b(x,w)
C.a.M(t.a,x)}}z=new D.bI(a,b,this,[z])
z.b=!0
this.I(z)},"$2","geD",8,0,19],
aK:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.ac()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.ak(z,z.length,0,[H.y(z,0)]),x=null;z.E();){y=z.d
if(y!=null){w=y.aK(0,b,c)
if(w!=null)x=x==null?w:w.i(0,x)}}this.f=x==null?V.aS():x
z=this.e
if(!(z==null))z.at(0)}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dw))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.k(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.k(w,y)
if(!J.P(x,w[y]))return!1}return!0},
j:function(a){return"Group"},
$ase:function(){return[U.a9]},
$asad:function(){return[U.a9]},
$isa9:1},a9:{"^":"dh;"},ii:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gq:function(){var z=this.cy
if(z==null){z=D.C()
this.cy=z}return z},
I:[function(a){var z
H.h(a,"$isl")
z=this.cy
if(!(z==null))z.w(a)},function(){return this.I(null)},"a9","$1","$0","gaz",0,2,0],
aN:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gcY()
z.toString
y={func:1,ret:-1,args:[D.l]}
x=H.b(this.gbC(),y)
C.a.h(z.a,x)
x=this.a.c.gdn()
x.toString
z=H.b(this.gbD(),y)
C.a.h(x.a,z)
z=this.a.c.gbq()
z.toString
y=H.b(this.gbE(),y)
C.a.h(z.a,y)
return!0},
ed:[function(a){H.h(a,"$isl")
if(!J.P(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbC",4,0,1],
ee:[function(a){var z,y,x,w,v,u,t
a=H.d(H.h(a,"$isl"),"$isbh")
if(!this.y)return
if(this.x){z=a.d.G(0,a.y)
z=new V.Q(z.a,z.b)
z=z.B(z)
y=this.r
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.G(0,a.y)
z=new V.Q(y.a,y.b).i(0,2).v(0,z.ga0())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.i()
x=this.e
if(typeof x!=="number")return H.p(x)
y.sL(z*10*x)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=new V.Q(x.a,x.b).i(0,2).v(0,z.ga0())
x=this.b
v=w.a
if(typeof v!=="number")return v.H()
u=this.e
if(typeof u!=="number")return H.p(u)
t=this.z
if(typeof t!=="number")return H.p(t)
x.sa_(0,-v*u+t)
this.b.sL(0)
y=y.G(0,a.z)
this.Q=new V.Q(y.a,y.b).i(0,2).v(0,z.ga0())}this.a9()},"$1","gbD",4,0,1],
ef:[function(a){var z,y,x
H.h(a,"$isl")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.B(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.i()
x=this.e
if(typeof x!=="number")return H.p(x)
z.sL(y*10*x)
this.a9()}},"$1","gbE",4,0,1],
aK:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.ac()
if(z<y){this.ch=y
x=b.y
this.b.ab(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aq(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa9:1},ij:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gq:function(){var z=this.fx
if(z==null){z=D.C()
this.fx=z}return z},
I:[function(a){var z
H.h(a,"$isl")
z=this.fx
if(!(z==null))z.w(a)},function(){return this.I(null)},"a9","$1","$0","gaz",0,2,0],
aN:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gcY()
z.toString
y={func:1,ret:-1,args:[D.l]}
x=H.b(this.gbC(),y)
C.a.h(z.a,x)
x=this.a.c.gdn()
x.toString
z=H.b(this.gbD(),y)
C.a.h(x.a,z)
z=this.a.c.gbq()
z.toString
x=H.b(this.gbE(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.C()
x.f=z}x=H.b(this.gea(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.C()
x.d=z}x=H.b(this.geb(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.C()
x.b=z}x=H.b(this.gf3(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.C()
x.d=z}x=H.b(this.gf2(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.C()
x.c=z}y=H.b(this.gf1(),y)
C.a.h(z.a,y)
return!0},
ad:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.H()
z=-z}if(this.r){if(typeof y!=="number")return y.H()
y=-y}return new V.Q(z,y)},
ed:[function(a){a=H.d(H.h(a,"$isl"),"$isbh")
if(!J.P(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbC",4,0,1],
ee:[function(a){var z,y,x,w,v,u,t
a=H.d(H.h(a,"$isl"),"$isbh")
if(!this.cx)return
if(this.ch){z=a.d.G(0,a.y)
z=new V.Q(z.a,z.b)
z=z.B(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.G(0,a.y)
z=this.ad(new V.Q(y.a,y.b).i(0,2).v(0,z.ga0()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.H()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sL(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.H()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sL(-z*10*y)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=this.ad(new V.Q(x.a,x.b).i(0,2).v(0,z.ga0()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa_(0,-u*v+x)
this.b.sL(0)
this.c.sL(0)
y=y.G(0,a.z)
this.dx=this.ad(new V.Q(y.a,y.b).i(0,2).v(0,z.ga0()))}this.a9()},"$1","gbD",4,0,1],
ef:[function(a){var z,y,x
H.h(a,"$isl")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.B(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.H()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sL(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.H()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sL(-y*10*z)
this.a9()}},"$1","gbE",4,0,1],
ho:[function(a){if(H.d(H.h(a,"$isl"),"$isdG").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gea",4,0,1],
hp:[function(a){var z,y,x,w,v,u,t
a=H.d(H.h(a,"$isl"),"$isbh")
if(!J.P(this.d,a.x.b))return
z=a.c
y=a.d
x=y.G(0,a.y)
w=this.ad(new V.Q(x.a,x.b).i(0,2).v(0,z.ga0()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa_(0,-u*v+x)
this.b.sL(0)
this.c.sL(0)
y=y.G(0,a.z)
this.dx=this.ad(new V.Q(y.a,y.b).i(0,2).v(0,z.ga0()))
this.a9()},"$1","geb",4,0,1],
hV:[function(a){H.h(a,"$isl")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gf3",4,0,1],
hU:[function(a){var z,y,x,w,v,u,t
a=H.d(H.h(a,"$isl"),"$ise1")
if(!this.cx)return
if(this.ch){z=a.d.G(0,a.y)
z=new V.Q(z.a,z.b)
z=z.B(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.G(0,a.y)
z=this.ad(new V.Q(y.a,y.b).i(0,2).v(0,z.ga0()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.H()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sL(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.H()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sL(-z*10*y)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=this.ad(new V.Q(x.a,x.b).i(0,2).v(0,z.ga0()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa_(0,-u*v+x)
this.b.sL(0)
this.c.sL(0)
y=y.G(0,a.z)
this.dx=this.ad(new V.Q(y.a,y.b).i(0,2).v(0,z.ga0()))}this.a9()},"$1","gf2",4,0,1],
hT:[function(a){var z,y,x
H.h(a,"$isl")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.B(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.H()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sL(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.H()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sL(-y*10*z)
this.a9()}},"$1","gf1",4,0,1],
aK:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.ac()
if(z<y){this.dy=y
x=b.y
this.c.ab(0,x)
this.b.ab(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aq(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.i(0,V.aq(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isa9:1},ik:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gq:function(){var z=this.r
if(z==null){z=D.C()
this.r=z}return z},
I:function(a){var z=this.r
if(!(z==null))z.w(a)},
aN:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.C()
z.e=y
z=y}else z=y
y=H.b(this.geg(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.C()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
hq:[function(a){var z,y,x,w
H.h(a,"$isl")
if(!J.P(this.b,this.a.b.c))return
H.d(a,"$iscG")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.i()
w=z+y*x
if(z!==w){this.d=w
z=new D.F("zoom",z,w,this,[P.v])
z.b=!0
this.I(z)}},"$1","geg",4,0,1],
aK:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aq(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa9:1}}],["","",,M,{"^":"",fe:{"^":"ad;0e,0f,0a,0b,0c,0d",
gq:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
T:[function(a){var z
H.h(a,"$isl")
z=this.f
if(!(z==null))z.w(a)},function(){return this.T(null)},"co","$1","$0","gP",0,2,0],
hN:[function(a,b){var z,y,x,w,v,u,t
z=M.au
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gP(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.z)(b),++v){u=b[v]
if(u!=null){t=u.gq()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.bH(a,b,this,[z])
z.b=!0
this.T(z)},"$2","geF",8,0,20],
hO:[function(a,b){var z,y,x,w,v,u,t
z=M.au
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gP(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.z)(b),++v){u=b[v]
if(u!=null){t=u.gq()
t.toString
H.b(x,w)
C.a.M(t.a,x)}}z=new D.bI(a,b,this,[z])
z.b=!0
this.T(z)},"$2","geG",8,0,20],
a2:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.ak(z,z.length,0,[H.y(z,0)]);z.E();){y=z.d
if(!(y==null))y.a2(a)}this.e=!1},
$ase:function(){return[M.au]},
$asad:function(){return[M.au]},
$isau:1},fg:{"^":"a;0a,0b,0c,0d,0e,0f",
gq:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
T:[function(a){var z
H.h(a,"$isl")
z=this.f
if(!(z==null))z.w(a)},function(){return this.T(null)},"co","$1","$0","gP",0,2,0],
saO:function(a){var z,y,x
if(a==null)a=new X.fC()
z=this.a
if(z!==a){if(z!=null){z=z.gq()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.M(z.a,y)}x=this.a
this.a=a
z=a.gq()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.F("camera",x,this.a,this,[X.c0])
z.b=!0
this.T(z)}},
saV:function(a,b){var z,y,x
if(b==null)b=X.cv(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gq()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.M(z.a,y)}x=this.b
this.b=b
z=b.gq()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.F("target",x,this.b,this,[X.cN])
z.b=!0
this.T(z)}},
saW:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gq()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.M(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gq()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.F("technique",x,this.c,this,[O.bP])
z.b=!0
this.T(z)}},
a2:function(a){a.c9(this.c)
this.b.U(a)
this.a.U(a)
this.d.ab(0,a)
this.d.a2(a)
this.a.aJ(a)
this.b.toString
a.c8()},
$isau:1},ft:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
T:[function(a){var z
H.h(a,"$isl")
z=this.x
if(!(z==null))z.w(a)},function(){return this.T(null)},"co","$1","$0","gP",0,2,0],
hw:[function(a,b){var z,y,x,w,v,u,t,s
z=E.az
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gP(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){if(t.gY()==null){s=new D.aP()
s.a=H.f([],v)
s.c=0
t.sY(s)}s=t.gY()
s.toString
H.b(x,w)
C.a.h(s.a,x)}}z=new D.bH(a,b,this,[z])
z.b=!0
this.T(z)},"$2","gem",8,0,8],
hx:[function(a,b){var z,y,x,w,v,u,t,s
z=E.az
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gP(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){if(t.gY()==null){s=new D.aP()
s.a=H.f([],v)
s.c=0
t.sY(s)}s=t.gY()
s.toString
H.b(x,w)
C.a.M(s.a,x)}}z=new D.bI(a,b,this,[z])
z.b=!0
this.T(z)},"$2","gen",8,0,8],
saO:function(a){var z,y,x
if(a==null)a=X.dM(2000,1.0471975511965976,null,0.1)
z=this.a
if(z!==a){if(z!=null){z=z.gq()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.M(z.a,y)}x=this.a
this.a=a
z=a.gq()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.F("camera",x,this.a,this,[X.c0])
z.b=!0
this.T(z)}},
saV:function(a,b){var z,y,x
if(b==null)b=X.cv(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gq()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.M(z.a,y)}x=this.b
this.b=b
z=b.gq()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.F("target",x,this.b,this,[X.cN])
z.b=!0
this.T(z)}},
saW:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gq()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.M(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gq()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.F("technique",x,this.c,this,[O.bP])
z.b=!0
this.T(z)}},
gq:function(){var z=this.x
if(z==null){z=D.C()
this.x=z}return z},
a2:function(a){var z
a.c9(this.c)
this.b.U(a)
this.a.U(a)
z=this.c
if(z!=null)z.ab(0,a)
for(z=this.d.a,z=new J.ak(z,z.length,0,[H.y(z,0)]);z.E();)z.d.ab(0,a)
for(z=this.d.a,z=new J.ak(z,z.length,0,[H.y(z,0)]);z.E();)z.d.a2(a)
this.a.toString
a.cy.as()
a.db.as()
this.b.toString
a.c8()},
$isau:1},au:{"^":"a;"}}],["","",,A,{"^":"",db:{"^":"a;a,b,c"},f3:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fH:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
cW:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},dI:{"^":"cL;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aF,0ao,0aG,0b9,0cZ,0d_,0ba,0bb,0d0,0d1,0bc,0bd,0d2,0d3,0be,0d4,0d5,0bf,0d6,0d7,0bg,0bh,0bi,0d8,0d9,0bj,0bk,0da,0dc,0bl,0dd,0bW,0de,0bX,0df,0bY,0dg,0bZ,0dh,0c_,0di,0c0,a,b,0c,0d,0e,0f,0r",
dL:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.x=a1
z=new P.bO("")
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
a1.f6(z)
a1.fd(z)
a1.f7(z)
a1.fl(z)
a1.fm(z)
a1.ff(z)
a1.fq(z)
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
z=new P.bO("")
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
v.fa(z)
v.f5(z)
v.f8(z)
v.fb(z)
v.fj(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.fh(z)
v.fi(z)}v.fe(z)
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
p=H.f([],[P.o])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.W(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.f9(z)
v.fg(z)
v.fk(z)
v.fn(z)
v.fo(z)
v.fp(z)
v.fc(z)}r=z.a+="// === Main ===\n"
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
o=H.f([],[P.o])
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
n="vec4("+C.a.W(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.dk(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.y=this.f.k(0,"posAttr")
this.Q=this.f.k(0,"normAttr")
this.z=this.f.k(0,"binmAttr")
this.ch=this.f.k(0,"txt2DAttr")
this.cx=this.f.k(0,"txtCubeAttr")
this.cy=this.f.k(0,"bendAttr")
if(a1.fr)this.fy=H.d(this.r.m(0,"invViewMat"),"$isax")
if(y)this.db=H.d(this.r.m(0,"objMat"),"$isax")
if(w)this.dx=H.d(this.r.m(0,"viewObjMat"),"$isax")
this.fr=H.d(this.r.m(0,"projViewObjMat"),"$isax")
if(a1.x2)this.go=H.d(this.r.m(0,"txt2DMat"),"$iscR")
if(a1.y1)this.id=H.d(this.r.m(0,"txtCubeMat"),"$isax")
if(a1.y2)this.k1=H.d(this.r.m(0,"colorMat"),"$isax")
this.k3=H.f([],[A.ax])
y=a1.aF
if(y>0){this.k2=H.h(this.r.m(0,"bendMatCount"),"$isG")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.k(0,v)
if(l==null)H.r(P.q("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.d(l,"$isax"))}}y=a1.a
if(y!==C.b){this.k4=H.d(this.r.m(0,"emissionClr"),"$isD")
switch(y){case C.b:break
case C.f:break
case C.c:this.r1=H.d(this.r.m(0,"emissionTxt"),"$isaf")
this.rx=H.d(this.r.m(0,"nullEmissionTxt"),"$isG")
break
case C.d:this.r2=H.d(this.r.m(0,"emissionTxt"),"$isaa")
this.rx=H.d(this.r.m(0,"nullEmissionTxt"),"$isG")
break}}y=a1.b
if(y!==C.b){this.ry=H.d(this.r.m(0,"ambientClr"),"$isD")
switch(y){case C.b:break
case C.f:break
case C.c:this.x1=H.d(this.r.m(0,"ambientTxt"),"$isaf")
this.y1=H.d(this.r.m(0,"nullAmbientTxt"),"$isG")
break
case C.d:this.x2=H.d(this.r.m(0,"ambientTxt"),"$isaa")
this.y1=H.d(this.r.m(0,"nullAmbientTxt"),"$isG")
break}}y=a1.c
if(y!==C.b){this.y2=H.d(this.r.m(0,"diffuseClr"),"$isD")
switch(y){case C.b:break
case C.f:break
case C.c:this.aF=H.d(this.r.m(0,"diffuseTxt"),"$isaf")
this.aG=H.d(this.r.m(0,"nullDiffuseTxt"),"$isG")
break
case C.d:this.ao=H.d(this.r.m(0,"diffuseTxt"),"$isaa")
this.aG=H.d(this.r.m(0,"nullDiffuseTxt"),"$isG")
break}}y=a1.d
if(y!==C.b){this.b9=H.d(this.r.m(0,"invDiffuseClr"),"$isD")
switch(y){case C.b:break
case C.f:break
case C.c:this.cZ=H.d(this.r.m(0,"invDiffuseTxt"),"$isaf")
this.ba=H.d(this.r.m(0,"nullInvDiffuseTxt"),"$isG")
break
case C.d:this.d_=H.d(this.r.m(0,"invDiffuseTxt"),"$isaa")
this.ba=H.d(this.r.m(0,"nullInvDiffuseTxt"),"$isG")
break}}y=a1.e
if(y!==C.b){this.bd=H.d(this.r.m(0,"shininess"),"$isS")
this.bb=H.d(this.r.m(0,"specularClr"),"$isD")
switch(y){case C.b:break
case C.f:break
case C.c:this.d0=H.d(this.r.m(0,"specularTxt"),"$isaf")
this.bc=H.d(this.r.m(0,"nullSpecularTxt"),"$isG")
break
case C.d:this.d1=H.d(this.r.m(0,"specularTxt"),"$isaa")
this.bc=H.d(this.r.m(0,"nullSpecularTxt"),"$isG")
break}}switch(a1.f){case C.b:break
case C.f:break
case C.c:this.d2=H.d(this.r.m(0,"bumpTxt"),"$isaf")
this.be=H.d(this.r.m(0,"nullBumpTxt"),"$isG")
break
case C.d:this.d3=H.d(this.r.m(0,"bumpTxt"),"$isaa")
this.be=H.d(this.r.m(0,"nullBumpTxt"),"$isG")
break}if(a1.dy){this.d4=H.d(this.r.m(0,"envSampler"),"$isaa")
this.d5=H.d(this.r.m(0,"nullEnvTxt"),"$isG")
y=a1.r
if(y!==C.b){this.bf=H.d(this.r.m(0,"reflectClr"),"$isD")
switch(y){case C.b:break
case C.f:break
case C.c:this.d6=H.d(this.r.m(0,"reflectTxt"),"$isaf")
this.bg=H.d(this.r.m(0,"nullReflectTxt"),"$isG")
break
case C.d:this.d7=H.d(this.r.m(0,"reflectTxt"),"$isaa")
this.bg=H.d(this.r.m(0,"nullReflectTxt"),"$isG")
break}}y=a1.x
if(y!==C.b){this.bh=H.d(this.r.m(0,"refraction"),"$isS")
this.bi=H.d(this.r.m(0,"refractClr"),"$isD")
switch(y){case C.b:break
case C.f:break
case C.c:this.d8=H.d(this.r.m(0,"refractTxt"),"$isaf")
this.bj=H.d(this.r.m(0,"nullRefractTxt"),"$isG")
break
case C.d:this.d9=H.d(this.r.m(0,"refractTxt"),"$isaa")
this.bj=H.d(this.r.m(0,"nullRefractTxt"),"$isG")
break}}}y=a1.y
if(y!==C.b){this.bk=H.d(this.r.m(0,"alpha"),"$isS")
switch(y){case C.b:break
case C.f:break
case C.c:this.da=H.d(this.r.m(0,"alphaTxt"),"$isaf")
this.bl=H.d(this.r.m(0,"nullAlphaTxt"),"$isG")
break
case C.d:this.dc=H.d(this.r.m(0,"alphaTxt"),"$isaa")
this.bl=H.d(this.r.m(0,"nullAlphaTxt"),"$isG")
break}}this.bW=H.f([],[A.ed])
this.bX=H.f([],[A.ee])
this.bY=H.f([],[A.ef])
this.bZ=H.f([],[A.eg])
this.c_=H.f([],[A.eh])
this.c0=H.f([],[A.ei])
if(a1.k2){y=a1.z
if(y>0){this.dd=H.h(this.r.m(0,"dirLightCount"),"$isG")
for(m=0;m<y;++m){x=this.r
w="dirLights["+m+"].viewDir"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isD")
x=this.r
w="dirLights["+m+"].color"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isD")
x=this.bW;(x&&C.a).h(x,new A.ed(m,l,k))}}y=a1.Q
if(y>0){this.de=H.h(this.r.m(0,"pntLightCount"),"$isG")
for(m=0;m<y;++m){x=this.r
w="pntLights["+m+"].point"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isD")
x=this.r
w="pntLights["+m+"].viewPnt"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isD")
x=this.r
w="pntLights["+m+"].color"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isD")
x=this.r
w="pntLights["+m+"].att0"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isS")
x=this.r
w="pntLights["+m+"].att1"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isS")
x=this.r
w="pntLights["+m+"].att2"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isS")
x=this.bX;(x&&C.a).h(x,new A.ee(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.df=H.h(this.r.m(0,"spotLightCount"),"$isG")
for(m=0;m<y;++m){x=this.r
w="spotLights["+m+"].objPnt"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isD")
x=this.r
w="spotLights["+m+"].objDir"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isD")
x=this.r
w="spotLights["+m+"].viewPnt"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isD")
x=this.r
w="spotLights["+m+"].color"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isD")
x=this.r
w="spotLights["+m+"].cutoff"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isS")
x=this.r
w="spotLights["+m+"].coneAngle"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isS")
x=this.r
w="spotLights["+m+"].att0"
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isS")
x=this.r
w="spotLights["+m+"].att1"
e=x.k(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isS")
x=this.r
w="spotLights["+m+"].att2"
d=x.k(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isS")
x=this.bY;(x&&C.a).h(x,new A.ef(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.dg=H.h(this.r.m(0,"txtDirLightCount"),"$isG")
for(m=0;m<y;++m){x=this.r
w="txtDirLights["+m+"].objUp"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isD")
x=this.r
w="txtDirLights["+m+"].objRight"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isD")
x=this.r
w="txtDirLights["+m+"].objDir"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isD")
x=this.r
w="txtDirLights["+m+"].viewDir"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isD")
x=this.r
w="txtDirLights["+m+"].color"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isD")
x=this.r
w="txtDirLights["+m+"].nullTxt"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isG")
x=this.r
w="txtDirLightsTxt2D"+m
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isaf")
x=this.bZ;(x&&C.a).h(x,new A.eg(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.dh=H.h(this.r.m(0,"txtPntLightCount"),"$isG")
for(m=0;m<y;++m){x=this.r
w="txtPntLights["+m+"].point"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isD")
x=this.r
w="txtPntLights["+m+"].viewPnt"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isD")
x=this.r
w="txtPntLights["+m+"].invViewRotMat"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$iscR")
x=this.r
w="txtPntLights["+m+"].color"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isD")
x=this.r
w="txtPntLights["+m+"].nullTxt"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isG")
x=this.r
w="txtPntLights["+m+"].att0"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isS")
x=this.r
w="txtPntLights["+m+"].att1"
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isS")
x=this.r
w="txtPntLights["+m+"].att2"
e=x.k(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isS")
x=this.r
w="txtPntLightsTxtCube"+m
d=x.k(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isaa")
x=this.c_;(x&&C.a).h(x,new A.eh(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.di=H.h(this.r.m(0,"txtSpotLightCount"),"$isG")
for(m=0;m<y;++m){x=this.r
w="txtSpotLights["+m+"].objPnt"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isD")
x=this.r
w="txtSpotLights["+m+"].objDir"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isD")
x=this.r
w="txtSpotLights["+m+"].objUp"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isD")
x=this.r
w="txtSpotLights["+m+"].objRight"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isD")
x=this.r
w="txtSpotLights["+m+"].viewPnt"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isD")
x=this.r
w="txtSpotLights["+m+"].nullTxt"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isG")
x=this.r
w="txtSpotLights["+m+"].color"
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isD")
x=this.r
w="txtSpotLights["+m+"].tuScalar"
e=x.k(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isS")
x=this.r
w="txtSpotLights["+m+"].tvScalar"
d=x.k(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isS")
x=this.r
w="txtSpotLights["+m+"].att0"
c=x.k(0,w)
if(c==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(c,"$isS")
x=this.r
w="txtSpotLights["+m+"].att1"
b=x.k(0,w)
if(b==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(b,"$isS")
x=this.r
w="txtSpotLights["+m+"].att2"
a=x.k(0,w)
if(a==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a,"$isS")
x=this.r
w="txtSpotLightsTxt2D"+m
a0=x.k(0,w)
if(a0==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a0,"$isaf")
x=this.c0;(x&&C.a).h(x,new A.ei(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
aa:function(a,b,c){b.a.uniform1i(b.d,1)},
a5:function(a,b,c){b.a.uniform1i(b.d,1)},
t:{
h0:function(a,b){var z,y
z=a.ao
y=new A.dI(b,z)
y.cl(b,z)
y.dL(a,b)
return y}}},h3:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aF,ao,aG",
f6:function(a){var z,y,x
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
fd:function(a){var z
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
f7:function(a){var z
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
fl:function(a){var z,y
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
fm:function(a){var z,y
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
ff:function(a){var z
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
fq:function(a){var z
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
aj:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.k(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.j.cj(c,1))+"Txt;\n"
a.a=z
if(b===C.c)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fa:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aj(a,z,"emission")
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
f5:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aj(a,z,"ambient")
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
f8:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aj(a,z,"diffuse")
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
fb:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aj(a,z,"invDiffuse")
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
fj:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aj(a,z,"specular")
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
fe:function(a){var z,y
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
fh:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aj(a,z,"reflect")
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
fi:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aj(a,z,"refract")
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
f9:function(a){var z,y
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
fg:function(a){var z,y
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
fk:function(a){var z,y
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
fn:function(a){var z,y,x
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
fo:function(a){var z,y,x
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
fp:function(a){var z,y,x
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
fc:function(a){var z
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
j:function(a){return this.ao}},ed:{"^":"a;a,b,c"},eg:{"^":"a;a,b,c,d,e,f,r,x"},ee:{"^":"a;a,b,c,d,e,f,r"},eh:{"^":"a;a,b,c,d,e,f,r,x,y,z"},ef:{"^":"a;a,b,c,d,e,f,r,x,y,z"},ei:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cL:{"^":"cm;",
cl:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
dk:function(a,b,c){var z,y,x
this.c=this.cA(b,35633)
this.d=this.cA(c,35632)
z=this.a
y=z.createProgram()
this.e=y
z.attachShader(y,this.c)
z.attachShader(this.e,this.d)
z.linkProgram(this.e)
if(!H.eO(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.r(P.q("Failed to link shader: "+H.i(x)))}this.eY()
this.eZ()},
U:function(a){a.a.useProgram(this.e)
this.f.fH()},
cA:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.eO(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.j(P.q("Error compiling shader '"+H.i(y)+"': "+H.i(x)))}return y},
eY:function(){var z,y,x,w,v,u
z=H.f([],[A.db])
y=this.a
x=H.a_(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.db(y,v.name,u))}this.f=new A.f3(z)},
eZ:function(){var z,y,x,w,v,u
z=H.f([],[A.a3])
y=this.a
x=H.a_(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.fD(v.type,v.size,v.name,u))}this.r=new A.ia(z)},
ax:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.G(z,y,b,c)
else return A.cQ(z,y,b,a,c)},
e4:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.af(z,y,b,c)
else return A.cQ(z,y,b,a,c)},
e5:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.aa(z,y,b,c)
else return A.cQ(z,y,b,a,c)},
b4:function(a,b){return new P.eq(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
fD:function(a,b,c,d){switch(a){case 5120:return this.ax(b,c,d)
case 5121:return this.ax(b,c,d)
case 5122:return this.ax(b,c,d)
case 5123:return this.ax(b,c,d)
case 5124:return this.ax(b,c,d)
case 5125:return this.ax(b,c,d)
case 5126:return new A.S(this.a,this.e,c,d)
case 35664:return new A.i5(this.a,this.e,c,d)
case 35665:return new A.D(this.a,this.e,c,d)
case 35666:return new A.i8(this.a,this.e,c,d)
case 35667:return new A.i6(this.a,this.e,c,d)
case 35668:return new A.i7(this.a,this.e,c,d)
case 35669:return new A.i9(this.a,this.e,c,d)
case 35674:return new A.ic(this.a,this.e,c,d)
case 35675:return new A.cR(this.a,this.e,c,d)
case 35676:return new A.ax(this.a,this.e,c,d)
case 35678:return this.e4(b,c,d)
case 35680:return this.e5(b,c,d)
case 35670:throw H.j(this.b4("BOOL",c))
case 35671:throw H.j(this.b4("BOOL_VEC2",c))
case 35672:throw H.j(this.b4("BOOL_VEC3",c))
case 35673:throw H.j(this.b4("BOOL_VEC4",c))
default:throw H.j(P.q("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}},c1:{"^":"a;a,b",
j:function(a){return this.b}},dU:{"^":"cL;0x,0y,0z,0Q,0ch,0cx,a,b,0c,0d,0e,0f,0r"},a3:{"^":"a;"},ia:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.k(0,b)
if(z==null)throw H.j(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return z},
j:function(a){return this.K()},
fI:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w)x+=z[w].j(0)+a
return x},
K:function(){return this.fI("\n")}},G:{"^":"a3;a,b,c,d",
j:function(a){return"Uniform1i: "+H.i(this.c)}},i6:{"^":"a3;a,b,c,d",
j:function(a){return"Uniform2i: "+H.i(this.c)}},i7:{"^":"a3;a,b,c,d",
j:function(a){return"Uniform3i: "+H.i(this.c)}},i9:{"^":"a3;a,b,c,d",
j:function(a){return"Uniform4i: "+H.i(this.c)}},i4:{"^":"a3;0e,0f,a,b,c,d",
j:function(a){return"Uniform1iv: "+H.i(this.c)},
t:{
cQ:function(a,b,c,d,e){var z=new A.i4(a,b,c,e)
z.f=d
z.e=P.fT(d,0,!1,P.L)
return z}}},S:{"^":"a3;a,b,c,d",
j:function(a){return"Uniform1f: "+H.i(this.c)}},i5:{"^":"a3;a,b,c,d",
j:function(a){return"Uniform2f: "+H.i(this.c)}},D:{"^":"a3;a,b,c,d",
j:function(a){return"Uniform3f: "+H.i(this.c)}},i8:{"^":"a3;a,b,c,d",
j:function(a){return"Uniform4f: "+H.i(this.c)}},ic:{"^":"a3;a,b,c,d",
j:function(a){return"Uniform1Mat2 "+H.i(this.c)}},cR:{"^":"a3;a,b,c,d",
a8:function(a){var z=new Float32Array(H.bA(H.w(a,"$isc",[P.v],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
j:function(a){return"UniformMat3: "+H.i(this.c)}},ax:{"^":"a3;a,b,c,d",
a8:function(a){var z=new Float32Array(H.bA(H.w(a,"$isc",[P.v],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
j:function(a){return"UniformMat4: "+H.i(this.c)}},af:{"^":"a3;a,b,c,d",
j:function(a){return"UniformSampler2D: "+H.i(this.c)}},aa:{"^":"a3;a,b,c,d",
dF:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
j:function(a){return"UniformSamplerCube: "+H.i(this.c)}}}],["","",,F,{"^":"",
kA:function(a,b,c,d){return F.k5(c,a,d,b,new F.kB())},
k5:function(a,b,c,d,e){var z=F.ky(a,b,new F.k6(H.b(e,{func:1,ret:V.X,args:[P.v]}),d,b,c),null)
if(z==null)return
z.am()
z.fS(new F.ir(),new F.hd())
return z},
ky:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.b(c,{func:1,ret:-1,args:[F.ag,P.v,P.v]})
if(a<1)return
if(b<1)return
z=F.dT()
y=H.f([],[F.ag])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cd(null,null,new V.ay(u,0,0,1),null,null,new V.N(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cU(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cd(null,null,new V.ay(o,n,m,1),null,null,new V.N(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cU(d))}}z.d.ft(a+1,b+1,y)
return z},
kB:{"^":"u:35;",
$1:function(a){return new V.X(Math.cos(a),Math.sin(a),0)}},
k6:{"^":"u:36;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.d8(y.$1(z),x)
x=J.d8(y.$1(z+3.141592653589793/this.c),x).G(0,w)
x=new V.E(x.a,x.b,x.c)
v=x.v(0,Math.sqrt(x.B(x)))
u=new V.E(1,0,0)
y=v.an(!v.u(0,u)?new V.E(0,0,1):u)
t=y.v(0,Math.sqrt(y.B(y)))
y=t.an(v)
u=y.v(0,Math.sqrt(y.B(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.i(0,y*x)
x=t.i(0,r*x)
x=w.F(0,new V.X(y.a-x.a,y.b-x.b,y.c-x.c))
if(!J.P(a.f,x)){a.f=x
y=a.a
if(y!=null)y.a1()}}},
ae:{"^":"a;0a,0b,0c,0d,0e",
aP:function(){if(!this.gcX()){C.a.M(this.a.a.d.b,this)
this.a.a.a1()}this.eL()
this.eM()
this.eN()},
eV:function(a){this.a=a
C.a.h(a.d.b,this)},
eW:function(a){this.b=a
C.a.h(a.d.c,this)},
eX:function(a){this.c=a
C.a.h(a.d.d,this)},
eL:function(){var z=this.a
if(z!=null){C.a.M(z.d.b,this)
this.a=null}},
eM:function(){var z=this.b
if(z!=null){C.a.M(z.d.c,this)
this.b=null}},
eN:function(){var z=this.c
if(z!=null){C.a.M(z.d.d,this)
this.c=null}},
gcX:function(){return this.a==null||this.b==null||this.c==null},
dY:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.E(0,0,0)
if(y!=null)v=v.F(0,y)
if(x!=null)v=v.F(0,x)
if(w!=null)v=v.F(0,w)
if(v.dm())return
return v.v(0,Math.sqrt(v.B(v)))},
e_:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.G(0,y)
z=new V.E(z.a,z.b,z.c)
v=z.v(0,Math.sqrt(z.B(z)))
z=w.G(0,y)
z=new V.E(z.a,z.b,z.c)
z=v.an(z.v(0,Math.sqrt(z.B(z))))
return z.v(0,Math.sqrt(z.B(z)))},
bT:function(){if(this.d!=null)return!0
var z=this.dY()
if(z==null){z=this.e_()
if(z==null)return!1}this.d=z
this.a.a.a1()
return!0},
dX:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.E(0,0,0)
if(y!=null)v=v.F(0,y)
if(x!=null)v=v.F(0,x)
if(w!=null)v=v.F(0,w)
if(v.dm())return
return v.v(0,Math.sqrt(v.B(v)))},
dZ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.n.$2(n,0)){z=r.G(0,u)
z=new V.E(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.B(z)))
if(o.a-p.a<0)m=m.H(0)}else{l=(z-q.b)/n
z=r.G(0,u).i(0,l).F(0,u).G(0,x)
z=new V.E(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.B(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.H(0)}z=this.d
if(z!=null){k=z.v(0,Math.sqrt(z.B(z)))
z=k.an(m)
z=z.v(0,Math.sqrt(z.B(z))).an(k)
m=z.v(0,Math.sqrt(z.B(z)))}return m},
bR:function(){if(this.e!=null)return!0
var z=this.dX()
if(z==null){z=this.dZ()
if(z==null)return!1}this.e=z
this.a.a.a1()
return!0},
gfA:function(a){if(J.P(this.a,this.b))return!0
if(J.P(this.b,this.c))return!0
if(J.P(this.c,this.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.K()},
C:function(a){var z,y
if(this.gcX())return a+"disposed"
z=a+C.j.ar(J.aj(this.a.e),0)+", "+C.j.ar(J.aj(this.b.e),0)+", "+C.j.ar(J.aj(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.j(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.j(0)+"}"):z+"-}"},
K:function(){return this.C("")},
t:{
bG:function(a,b,c){var z,y,x
z=new F.ae()
y=a.a
if(y==null)H.r(P.q("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.q("May not create a face with vertices attached to different shapes."))
z.eV(a)
z.eW(b)
z.eX(c)
C.a.h(z.a.a.d.b,z)
z.a.a.a1()
return z}}},
fw:{"^":"a;"},
hG:{"^":"fw;",
aQ:function(a,b,c){var z,y
z=b.a
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.A()
z=z.e
y=c.c
y.a.a.A()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.A()
z=z.e
y=c.c
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.A()
z=z.e
y=c.c
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
dE:{"^":"a;"},
fL:{"^":"a;"},
i3:{"^":"fL;",
aQ:function(a,b,c){var z,y
z=b.a
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
y=y.e
return z==null?y==null:z===y}else return!1}}},
dO:{"^":"a;"},
dS:{"^":"a;0a,0b,0c,0d,0e",
gq:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
am:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.am()||!1
if(!this.a.am())y=!1
z=this.e
if(!(z==null))z.at(0)
return y},
e8:function(a,b,c,d,e){var z,y,x
H.w(d,"$isc",[F.ag],"$asc")
H.w(e,"$isc",[P.L],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.k(y,z)
x=y[z]
if(a.aQ(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
fS:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.ag],x=[P.L];y>=0;--y){w=this.a.c
if(y>=w.length)return H.k(w,y)
v=w[y]
u=H.f([],z)
t=H.f([],x)
if(this.e8(a,v,y,u,t))b.fR(u)}this.a.A()
this.c.ca()
this.d.ca()
this.b.h6()
this.c.cb(new F.i3())
this.d.cb(new F.hG())
z=this.e
if(!(z==null))z.at(0)},
cR:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$an()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aC().a)!==0)++w
if((x&$.$get$aB().a)!==0)++w
if((x&$.$get$aD().a)!==0)++w
if((x&$.$get$aE().a)!==0)++w
if((x&$.$get$bv().a)!==0)++w
if((x&$.$get$bw().a)!==0)++w
if((x&$.$get$aX().a)!==0)++w
if((x&$.$get$aA().a)!==0)++w
v=b.gci(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.v
t=H.f(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.f(y,[Z.de])
for(r=0,q=0;q<w;++q){p=b.fv(q)
o=p.gci(p)
C.a.a4(s,q,new Z.de(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.k(y,n)
m=y[n].fO(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.a4(t,l,m[k]);++l}}r+=o}H.w(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bA(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cp(new Z.en(34962,j),s,b)
i.b=H.f([],[Z.c7])
if(this.b.b.length!==0){x=P.L
h=H.f([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)}f=Z.cS(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.c7(0,h.length,f))}if(this.c.b.length!==0){x=P.L
h=H.f([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.k(g,q)
g=g[q].b
g.a.a.A()
C.a.h(h,g.e)}f=Z.cS(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.c7(1,h.length,f))}if(this.d.b.length!==0){x=P.L
h=H.f([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.k(g,q)
g=g[q].b
g.a.a.A()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.k(g,q)
g=g[q].c
g.a.a.A()
C.a.h(h,g.e)}f=Z.cS(y,34963,H.w(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.c7(4,h.length,f))}return i},
j:function(a){var z=H.f([],[P.o])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.C("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.C("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.C("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.C("   "))}return C.a.W(z,"\n")},
aI:function(a){var z=this.e
if(!(z==null))z.w(a)},
a1:function(){return this.aI(null)},
t:{
dT:function(){var z,y
z=new F.dS()
y=new F.il(z)
y.b=!1
y.c=H.f([],[F.ag])
z.a=y
y=new F.hF(z)
y.b=H.f([],[F.dO])
z.b=y
y=new F.hE(z)
y.b=H.f([],[F.dE])
z.c=y
y=new F.hD(z)
y.b=H.f([],[F.ae])
z.d=y
z.e=null
return z}}},
hD:{"^":"a;a,0b",
fs:function(a){var z,y,x,w,v
H.w(a,"$isc",[F.ag],"$asc")
z=H.f([],[F.ae])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.bG(y,w,v))}return z},
ft:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isc",[F.ag],"$asc")
z=H.f([],[F.ae])
for(y=b,x=0,w=!1,v=1;v<a;++v,++x,++y){for(u=w,t=1;t<b;++t,y=p){s=c.length
if(x<0||x>=s)return H.k(c,x)
r=c[x];++x
if(x>=s)return H.k(c,x)
q=c[x]
p=y+1
if(p<0||p>=s)return H.k(c,p)
o=c[p]
if(y<0||y>=s)return H.k(c,y)
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
cb:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.k(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.k(0,w)
for(u=w-1;u>=0;--u){t=x.d.k(0,u)
if(a.aQ(0,v,t)){v.aP()
break}}}}},
ca:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.k(y,z)
x=y[z]
y=x.gfA(x)
if(y)x.aP()}},
am:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].bT())x=!1
return x},
bS:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].bR())x=!1
return x},
j:function(a){return this.K()},
C:function(a){var z,y,x,w
z=H.f([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
return C.a.W(z,"\n")},
K:function(){return this.C("")}},
hE:{"^":"a;a,0b",
gl:function(a){return this.b.length},
cb:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.k(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.k(0,w)
for(u=w-1;u>=0;--u){t=x.c.k(0,u)
if(a.aQ(0,v,t)){v.aP()
break}}}}},
ca:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.k(y,z)
x=y[z]
y=J.P(x.a,x.b)
if(y)x.aP()}},
j:function(a){return this.K()},
C:function(a){var z,y,x,w
z=H.f([],[P.o])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.k(w,x)
C.a.h(z,w[x].C(a+(""+x+". ")))}return C.a.W(z,"\n")},
K:function(){return this.C("")}},
hF:{"^":"a;a,0b",
gl:function(a){return this.b.length},
h6:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.k(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aP()}},
j:function(a){return this.K()},
C:function(a){var z,y,x,w
z=H.f([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
return C.a.W(z,"\n")},
K:function(){return this.C("")}},
ag:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cU:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cd(this.cx,x,u,z,y,w,v,a,t)},
fO:function(a){var z,y
z=J.I(a)
if(z.u(a,$.$get$an())){z=this.f
y=[P.v]
if(z==null)return H.f([0,0,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aC())){z=this.r
y=[P.v]
if(z==null)return H.f([0,1,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aB())){z=this.x
y=[P.v]
if(z==null)return H.f([0,0,1],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aD())){z=this.y
y=[P.v]
if(z==null)return H.f([0,0],y)
else return H.f([z.a,z.b],y)}else if(z.u(a,$.$get$aE())){z=this.z
y=[P.v]
if(z==null)return H.f([0,0,0],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bv())){z=this.Q
y=[P.v]
if(z==null)return H.f([1,1,1],y)
else return H.f([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bw())){z=this.Q
y=[P.v]
if(z==null)return H.f([1,1,1,1],y)
else return H.f([z.a,z.b,z.c,z.d],y)}else if(z.u(a,$.$get$aX()))return H.f([this.ch],[P.v])
else if(z.u(a,$.$get$aA())){z=this.cx
y=[P.v]
if(z==null)return H.f([-1,-1,-1,-1],y)
else return H.f([z.a,z.b,z.c,z.d],y)}else return H.f([],[P.v])},
bT:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.E(0,0,0)
this.d.J(0,new F.iw(z))
z=z.a
this.r=z.v(0,Math.sqrt(z.B(z)))
z=this.a
if(z!=null){z.a1()
z=this.a.e
if(!(z==null))z.at(0)}return!0},
bR:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.E(0,0,0)
this.d.J(0,new F.iv(z))
z=z.a
this.x=z.v(0,Math.sqrt(z.B(z)))
z=this.a
if(z!=null){z.a1()
z=this.a.e
if(!(z==null))z.at(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.K()},
C:function(a){var z,y,x
z=H.f([],[P.o])
C.a.h(z,C.j.ar(J.aj(this.e),0))
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
C.a.h(z,V.K(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
x=C.a.W(z,", ")
return a+"{"+x+"}"},
K:function(){return this.C("")},
t:{
cd:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ag()
y=new F.iu(z)
y.b=H.f([],[F.dO])
z.b=y
y=new F.iq(z)
x=[F.dE]
y.b=H.f([],x)
y.c=H.f([],x)
z.c=y
y=new F.im(z)
x=[F.ae]
y.b=H.f([],x)
y.c=H.f([],x)
y.d=H.f([],x)
z.d=y
h=$.$get$ek()
z.e=0
y=$.$get$an()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aC().a)!==0?e:null
z.x=(x&$.$get$aB().a)!==0?b:null
z.y=(x&$.$get$aD().a)!==0?f:null
z.z=(x&$.$get$aE().a)!==0?g:null
z.Q=(x&$.$get$el().a)!==0?c:null
z.ch=(x&$.$get$aX().a)!==0?i:0
z.cx=(x&$.$get$aA().a)!==0?a:null
return z}}},
iw:{"^":"u:6;a",
$1:function(a){var z,y
H.h(a,"$isae")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
iv:{"^":"u:6;a",
$1:function(a){var z,y
H.h(a,"$isae")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
il:{"^":"a;a,0b,0c",
A:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.k(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.j(P.q("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.a1()
return!0},
fu:function(a,b,c,d,e,f,g,h,i){var z=F.cd(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
b5:function(a,b,c,d,e,f){return this.fu(a,null,b,c,null,d,e,f,0)},
gl:function(a){return this.c.length},
am:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].bT()
return!0},
bS:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].bR()
return!0},
fz:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.v(0,Math.sqrt(u*u+t*t+s*s))
if(!J.P(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.w(null)}}}}return!0},
j:function(a){return this.K()},
C:function(a){var z,y,x,w
this.A()
z=H.f([],[P.o])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
return C.a.W(z,"\n")},
K:function(){return this.C("")}},
im:{"^":"a;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.k(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.k(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.k(z,b)
return z[b]},
J:function(a,b){H.b(b,{func:1,ret:-1,args:[F.ae]})
C.a.J(this.b,b)
C.a.J(this.c,new F.io(this,b))
C.a.J(this.d,new F.ip(this,b))},
j:function(a){return this.K()},
C:function(a){var z,y,x,w
z=H.f([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
return C.a.W(z,"\n")},
K:function(){return this.C("")}},
io:{"^":"u:6;a,b",
$1:function(a){H.h(a,"$isae")
if(!J.P(a.a,this.a))this.b.$1(a)}},
ip:{"^":"u:6;a,b",
$1:function(a){var z
H.h(a,"$isae")
z=this.a
if(!J.P(a.a,z)&&!J.P(a.b,z))this.b.$1(a)}},
iq:{"^":"a;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.k(z,x)
return z[x]}else{if(b<0)return H.k(z,b)
return z[b]}},
j:function(a){return this.K()},
C:function(a){var z,y,x,w
z=H.f([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
return C.a.W(z,"\n")},
K:function(){return this.C("")}},
is:{"^":"a;"},
ir:{"^":"is;",
aQ:function(a,b,c){return J.P(b.f,c.f)}},
it:{"^":"a;"},
hd:{"^":"it;",
fR:function(a){var z,y,x,w,v,u,t,s
H.w(a,"$isc",[F.ag],"$asc")
z=new V.E(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.E(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.v(0,Math.sqrt(z.B(z)))
for(y=a.length,w=z.a,v=z.b,u=z.c,u=w*w+v*v+u*u,x=0;x<a.length;a.length===y||(0,H.z)(a),++x){t=a[x]
s=z.v(0,Math.sqrt(u))
if(!J.P(t.r,s)){t.r=s
w=t.a
if(w!=null){w=w.e
if(!(w==null))w.w(null)}}}return}},
iu:{"^":"a;a,0b",
gl:function(a){return this.b.length},
j:function(a){return this.K()},
C:function(a){var z,y,x,w
z=H.f([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].C(a))
return C.a.W(z,"\n")},
K:function(){return this.C("")}}}],["","",,O,{"^":"",h_:{"^":"bP;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gq:function(){var z=this.dy
if(z==null){z=D.C()
this.dy=z}return z},
X:[function(a){var z
H.h(a,"$isl")
z=this.dy
if(!(z==null))z.w(a)},function(){return this.X(null)},"dR","$1","$0","gbu",0,2,0],
eQ:[function(a){H.h(a,"$isl")
this.a=null
this.X(a)},function(){return this.eQ(null)},"hS","$1","$0","geP",0,2,0],
ht:[function(a,b){var z=V.ap
z=new D.bH(a,H.w(b,"$ise",[z],"$ase"),this,[z])
z.b=!0
this.X(z)},"$2","gej",8,0,21],
hu:[function(a,b){var z=V.ap
z=new D.bI(a,H.w(b,"$ise",[z],"$ase"),this,[z])
z.b=!0
this.X(z)},"$2","gek",8,0,21],
cw:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.h.Z(z.e.length+3,4)*4
x=C.h.Z(z.f.length+3,4)*4
w=C.h.Z(z.r.length+3,4)*4
v=C.h.Z(z.x.length+3,4)*4
u=C.h.Z(z.y.length+3,4)*4
t=C.h.Z(z.z.length+3,4)*4
s=C.h.Z(this.e.a.length+3,4)*4
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
h="MaterialLight_"+C.h.j(q.a)+C.h.j(p.a)+C.h.j(o.a)+C.h.j(n.a)+C.h.j(m.a)+C.h.j(l.a)+C.h.j(k.a)+C.h.j(j.a)+C.h.j(i.a)+"_"
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
a6=$.$get$an()
if(c){z=$.$get$aC()
a6=new Z.aW(a6.a|z.a)}if(b){z=$.$get$aB()
a6=new Z.aW(a6.a|z.a)}if(a){z=$.$get$aD()
a6=new Z.aW(a6.a|z.a)}if(a0){z=$.$get$aE()
a6=new Z.aW(a6.a|z.a)}if(a2){z=$.$get$aA()
a6=new Z.aW(a6.a|z.a)}return new A.h3(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
N:function(a,b){H.w(a,"$isc",[T.cO],"$asc")},
ab:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.ak(z,z.length,0,[H.y(z,0)]);z.E();){y=z.d
x=new V.E(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cd(x)}}},
ds:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.cw()
y=H.h(a.fr.k(0,z.ao),"$isdI")
if(y==null){y=A.h0(z,a.a)
a.cO(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.aG
z=b.e
if(!(z instanceof Z.cp)){b.e=null
z=null}if(z==null||!z.d.u(0,w)){z=x.r1
if(z)b.d.am()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.c
u.d.bS()
u.a.bS()
u=u.e
if(!(u==null))u.at(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.a.fz()
t=t.e
if(!(t==null))t.at(0)}r=b.d.cR(new Z.eo(a.a),w)
r.ap($.$get$an()).e=this.a.y.c
if(z)r.ap($.$get$aC()).e=this.a.Q.c
if(v)r.ap($.$get$aB()).e=this.a.z.c
if(x.rx)r.ap($.$get$aD()).e=this.a.ch.c
if(u)r.ap($.$get$aE()).e=this.a.cx.c
if(x.x1)r.ap($.$get$aA()).e=this.a.cy.c
b.e=r}z=T.cO
q=H.f([],[z])
this.a.U(a)
if(x.fx){v=this.a
u=a.dx
u=u.gS(u)
v=v.db
v.toString
v.a8(u.a3(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.gS(u)
t=a.dx
t=u.i(0,t.gS(t))
a.cx=t
u=t}v=v.dx
v.toString
v.a8(u.a3(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.gh4()
t=a.dx
t=u.i(0,t.gS(t))
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
v.a8(C.x.a3(u,!0))}if(x.aF>0){p=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,p)
for(v=[P.v],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.k(t,o)
t=t[o]
u.toString
H.h(t,"$isap")
u=u.k3
if(o>=u.length)return H.k(u,o)
u=u[o]
n=new Float32Array(H.bA(H.w(t.a3(0,!0),"$isc",v,"$asc")))
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
case C.c:this.N(q,this.f.d)
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
case C.d:this.N(q,this.f.e)
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
case C.c:this.N(q,this.r.d)
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
case C.d:this.N(q,this.r.e)
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
case C.c:this.N(q,this.x.d)
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
case C.d:this.N(q,this.x.e)
v=this.a
u=this.x.e
v.a5(v.ao,v.aG,u)
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
v=v.b9
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.c:this.N(q,this.y.d)
v=this.a
u=this.y.d
v.aa(v.cZ,v.ba,u)
u=this.a
v=this.y.f
u=u.b9
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.N(q,this.y.e)
v=this.a
u=this.y.e
v.a5(v.d_,v.ba,u)
u=this.a
v=this.y.f
u=u.b9
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.b:break
case C.f:v=this.a
u=this.z.f
v=v.bb
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bd
u.a.uniform1f(u.d,s)
break
case C.c:this.N(q,this.z.d)
v=this.a
u=this.z.d
v.aa(v.d0,v.bc,u)
u=this.a
v=this.z.f
u=u.bb
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bd
v.a.uniform1f(v.d,s)
break
case C.d:this.N(q,this.z.e)
v=this.a
u=this.z.e
v.a5(v.d1,v.bc,u)
u=this.a
v=this.z.f
u=u.bb
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bd
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.dd
v.a.uniform1i(v.d,p)
v=a.db
m=v.gS(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.bW
if(l>=t.length)return H.k(t,l)
i=t[l]
t=m.cd(j.a)
s=t.a
h=t.b
g=t.c
g=t.v(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.de
v.a.uniform1i(v.d,p)
v=a.db
m=v.gS(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.bX
if(l>=t.length)return H.k(t,l)
i=t[l]
t=j.gaT(j)
s=i.b
h=t.gn(t)
g=t.gp(t)
t=t.gcf(t)
s.a.uniform3f(s.d,h,g,t)
t=m.aZ(j.gaT(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gae(j)
g=i.d
h=t.gbp()
s=t.gb_()
t=t.gb6()
g.a.uniform3f(g.d,h,s,t)
t=j.gbN()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gbO()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gbP()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.df
v.a.uniform1i(v.d,p)
v=a.db
m=v.gS(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.bY
if(l>=t.length)return H.k(t,l)
i=t[l]
t=j.gaT(j)
s=i.b
h=t.gn(t)
g=t.gp(t)
t=t.gcf(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gbV(j).hY()
g=i.c
h=t.gaC(t)
s=t.gaD(t)
t=t.gaE()
g.a.uniform3f(g.d,h,s,t)
t=m.aZ(j.gaT(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gae(j)
s=i.e
h=t.gbp()
g=t.gb_()
t=t.gb6()
s.a.uniform3f(s.d,h,g,t)
t=j.ghX()
g=i.f
g.a.uniform1f(g.d,t)
t=j.ghW()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gbN()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gbO()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gbP()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.dg
v.a.uniform1i(v.d,p)
v=a.db
m=v.gS(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
s=this.a.bZ
if(l>=s.length)return H.k(s,l)
i=s[l]
s=j.gaX()
H.w(q,"$isc",t,"$asc")
if(!C.a.b8(q,s)){s.sbm(0,q.length)
C.a.h(q,s)}s=j.gbV(j)
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
s=j.gaU(j)
h=i.c
g=s.gaC(s)
f=s.gaD(s)
s=s.gaE()
h.a.uniform3f(h.d,g,f,s)
s=m.cd(j.gbV(j))
f=s.a
g=s.b
h=s.c
h=s.v(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gae(j)
g=i.f
f=h.gbp()
s=h.gb_()
h=h.gb6()
g.a.uniform3f(g.d,f,s,h)
h=j.gaX()
s=h.gbn(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gbn(h)
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.gbm(h))
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.dh
v.a.uniform1i(v.d,p)
v=a.db
m=v.gS(v)
for(v=this.dx.y,u=v.length,t=[P.v],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
h=this.a.c_
if(l>=h.length)return H.k(h,l)
i=h[l]
h=j.gaX()
H.w(q,"$isc",s,"$asc")
if(!C.a.b8(q,h)){h.sbm(0,q.length)
C.a.h(q,h)}e=m.i(0,j.gS(j))
h=j.gS(j).aZ(new V.X(0,0,0))
g=i.b
f=h.gn(h)
d=h.gp(h)
h=h.gcf(h)
g.a.uniform3f(g.d,f,d,h)
h=e.aZ(new V.X(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.c2(0)
d=i.d
n=new Float32Array(H.bA(H.w(new V.c9(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a3(0,!0),"$isc",t,"$asc")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gae(j)
h=i.e
f=d.gbp()
g=d.gb_()
d=d.gb6()
h.a.uniform3f(h.d,f,g,d)
d=j.gaX()
h=d.gbn(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.ghn()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.ghm())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gbN()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gbO()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gbP()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.di
v.a.uniform1i(v.d,p)
v=a.db
m=v.gS(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.c0
if(l>=t.length)return H.k(t,l)
i=t[l]
t=j.gaX()
H.w(q,"$isc",z,"$asc")
if(!C.a.b8(q,t)){t.sbm(0,q.length)
C.a.h(q,t)}t=j.gaT(j)
s=i.b
h=t.gn(t)
g=t.gp(t)
t=t.gcf(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gbV(j)
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
t=j.gaU(j)
g=i.e
h=t.gaC(t)
s=t.gaD(t)
t=t.gaE()
g.a.uniform3f(g.d,h,s,t)
t=m.aZ(j.gaT(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gaX()
s=t.gbn(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gbn(t)
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.gbm(t))
t=i.x
t.a.uniform1i(t.d,0)}t=j.gae(j)
s=i.y
h=t.gbp()
g=t.gb_()
t=t.gb6()
s.a.uniform3f(s.d,h,g,t)
t=j.gi2()
g=i.z
g.a.uniform1f(g.d,t)
t=j.gi3()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gbN()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gbO()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gbP()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.b:break
case C.f:break
case C.c:this.N(q,this.Q.d)
z=this.a
v=this.Q.d
z.aa(z.d2,z.be,v)
break
case C.d:this.N(q,this.Q.e)
z=this.a
v=this.Q.e
z.a5(z.d3,z.be,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gS(v).c2(0)
a.Q=v}z=z.fy
z.toString
z.a8(v.a3(0,!0))}if(x.dy){this.N(q,this.ch)
z=this.a
v=this.ch
z.a5(z.d4,z.d5,v)
switch(x.r){case C.b:break
case C.f:z=this.a
v=this.cx.f
z=z.bf
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.c:this.N(q,this.cx.d)
z=this.a
v=this.cx.d
z.aa(z.d6,z.bg,v)
v=this.a
z=this.cx.f
v=v.bf
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.d:this.N(q,this.cx.e)
z=this.a
v=this.cx.e
z.a5(z.d7,z.bg,v)
v=this.a
z=this.cx.f
v=v.bf
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.b:break
case C.f:z=this.a
v=this.cy.f
z=z.bi
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bh
v.a.uniform1f(v.d,t)
break
case C.c:this.N(q,this.cy.d)
z=this.a
v=this.cy.d
z.aa(z.d8,z.bj,v)
v=this.a
z=this.cy.f
v=v.bi
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bh
z.a.uniform1f(z.d,t)
break
case C.d:this.N(q,this.cy.e)
z=this.a
v=this.cy.e
z.a5(z.d9,z.bj,v)
v=this.a
z=this.cy.f
v=v.bi
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bh
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.b
if(v){switch(z){case C.b:break
case C.f:z=this.a
u=this.db.f
z=z.bk
z.a.uniform1f(z.d,u)
break
case C.c:this.N(q,this.db.d)
z=this.a
u=this.db.d
z.aa(z.da,z.bl,u)
u=this.a
z=this.db.f
u=u.bk
u.a.uniform1f(u.d,z)
break
case C.d:this.N(q,this.db.e)
z=this.a
u=this.db.e
z.a5(z.dc,z.bl,u)
u=this.a
z=this.db.f
u=u.bk
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o)q[o].U(a)
z=b.e
z.U(a)
z.a2(a)
z.aJ(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o)q[o].aJ(a)
z=this.a
z.toString
a.a.useProgram(null)
z.f.cW()},
j:function(a){var z=this.a
if(z!=null)return z.b
else return this.cw().ao}},h1:{"^":"cE;0f,a,b,0c,0d,0e"},cE:{"^":"a;",
b2:["dJ",function(){}]},h2:{"^":"cE;a,b,0c,0d,0e"},aR:{"^":"cE;0f,a,b,0c,0d,0e",
cI:function(a){var z,y
if(!J.P(this.f,a)){z=this.f
this.f=a
y=new D.F(this.b+".color",z,a,this,[V.V])
y.b=!0
this.a.X(y)}},
b2:["bt",function(){this.dJ()
this.cI(new V.V(1,1,1))}],
sae:function(a,b){var z
if(this.c===C.b){this.c=C.f
this.b2()
z=this.a
z.a=null
z.X(null)}this.cI(b)}},h4:{"^":"aR;0ch,0f,a,b,0c,0d,0e",
eU:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.F(this.b+".refraction",y,a,this,[P.v])
z.b=!0
this.a.X(z)}},
b2:function(){this.bt()
this.eU(1)}},h5:{"^":"aR;0ch,0f,a,b,0c,0d,0e",
bJ:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.F(this.b+".shininess",y,a,this,[P.v])
z.b=!0
this.a.X(z)}},
b2:function(){this.bt()
this.bJ(100)}},hH:{"^":"bP;0a,0b,0c,0d,0e",
gq:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
X:[function(a){var z
H.h(a,"$isl")
z=this.e
if(!(z==null))z.w(a)},function(){return this.X(null)},"dR","$1","$0","gbu",0,2,0],
ds:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.h(a.fr.k(0,"Skybox"),"$isdU")
if(z==null){y=a.a
z=new A.dU(y,"Skybox")
z.cl(y,"Skybox")
z.dk(0,$.hJ,$.hI)
z.x=z.f.k(0,"posAttr")
z.y=H.d(z.r.k(0,"fov"),"$isS")
z.z=H.d(z.r.k(0,"ratio"),"$isS")
z.Q=H.d(z.r.k(0,"boxClr"),"$isD")
z.ch=H.d(z.r.k(0,"boxTxt"),"$isaa")
z.cx=H.d(z.r.k(0,"viewMat"),"$isax")
a.cO(z)}this.a=z}if(b.e==null){y=b.d.cR(new Z.eo(a.a),$.$get$an())
y.ap($.$get$an()).e=this.a.x.c
b.e=y}y=this.c
if(y!=null){y.a=1
if(!y.c&&y.d>=6){y.c=!0
a.a.activeTexture(33985)
a.a.bindTexture(34067,y.b)}}y=a.d
x=a.c
w=this.a
w.U(a)
v=this.b
u=w.y
u.a.uniform1f(u.d,v)
v=w.z
v.a.uniform1f(v.d,y/x)
x=this.c
w.ch.dF(x)
x=this.d
y=w.Q
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.gS(x).c2(0)
w=w.cx
w.toString
w.a8(x.a3(0,!0))
y=b.e
if(y instanceof Z.cp){y.U(a)
y.a2(a)
y.aJ(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.cW()
y=this.c
if(y!=null)if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(34067,null)}}},bP:{"^":"a;"}}],["","",,T,{"^":"",cO:{"^":"cm;"},dZ:{"^":"cO;0b,0c,0d,0e,a"},hS:{"^":"a;a,0b,0c,0d,0e",
ay:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.a4
W.Y(z,"load",H.b(new T.hT(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
eR:function(a,b,c){var z,y,x,w
b=V.d6(b,2)
z=V.d6(a.width,2)
y=V.d6(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cr(null,null)
x.width=z
x.height=y
w=H.h(C.k.dB(x,"2d"),"$isdg")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.k4(w.getImageData(0,0,x.width,x.height))}}},hT:{"^":"u:22;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.eR(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.G.hd(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6)x.e.fG();++z.e}}}],["","",,X,{"^":"",c0:{"^":"a;",$isat:1},fA:{"^":"cN;0a,0b,0c,0d,0e,0f,0r,0x",
gq:function(){var z=this.x
if(z==null){z=D.C()
this.x=z}return z},
ah:function(a){var z=this.x
if(!(z==null))z.w(a)},
U:function(a){var z,y,x,w,v,u,t,s
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.p(y)
v=C.h.a7(w.a*y)
if(typeof x!=="number")return H.p(x)
u=C.h.a7(w.b*x)
t=C.h.a7(w.c*y)
a.c=t
w=C.h.a7(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
if(this.b){z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
s=16640}else s=256
a.a.clear(s)},
t:{
cv:function(a,b,c,d,e,f,g){var z,y
z=new X.fA()
y=new V.ay(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.dR(0,0,1,1)
z.r=y
return z}}},fC:{"^":"a;0a,0b",
gq:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
U:function(a){var z
a.cy.bo(V.aS())
z=V.aS()
a.db.bo(z)},
aJ:function(a){a.cy.as()
a.db.as()},
$isat:1,
$isc0:1},hh:{"^":"a;0a,0b,0c,0d,0e",
gq:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
ah:[function(a){var z
H.h(a,"$isl")
z=this.e
if(!(z==null))z.w(a)},function(){return this.ah(null)},"hk","$1","$0","gdU",0,2,0],
U:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=a.cy
w=this.b
v=this.c
u=this.d
t=u-v
s=1/Math.tan(w*0.5)
x.bo(V.aq(-s/(z/y),0,0,0,0,s,0,0,0,0,u/t,-u*v/t,0,0,1,0))
z=$.dN
if(z==null){z=V.dJ(new V.X(0,0,0),new V.E(0,1,0),new V.E(0,0,-1))
$.dN=z
r=z}else r=z
z=this.a
if(z!=null){q=z.aK(0,a,this)
if(q!=null)r=q.i(0,r)}a.db.bo(r)},
aJ:function(a){a.cy.as()
a.db.as()},
$isat:1,
$isc0:1,
t:{
dM:function(a,b,c,d){var z,y,x,w
z=new X.hh()
z.b=1.0471975511965976
z.c=0.1
z.d=2000
if(null!=c){y=z.a
z.a=c
if(c!=null){x=c.gq()
x.toString
w=H.b(z.gdU(),{func:1,ret:-1,args:[D.l]})
C.a.h(x.a,w)}x=new D.F("mover",y,z.a,z,[U.a9])
x.b=!0
z.ah(x)}x=z.b
if(!$.n.$2(x,b)){y=z.b
z.b=b
x=new D.F("fov",y,b,z,[P.v])
x.b=!0
z.ah(x)}x=z.c
if(!$.n.$2(x,d)){y=z.c
z.c=d
x=new D.F("near",y,d,z,[P.v])
x.b=!0
z.ah(x)}x=z.d
if(!$.n.$2(x,a)){y=z.d
z.d=a
x=new D.F("far",y,a,z,[P.v])
x.b=!0
z.ah(x)}return z}}},cN:{"^":"a;"}}],["","",,B,{"^":"",
ks:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
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
C.m.eT(x,(x&&C.m).cr(x,"box-shadow"),"3px 3px 4px 2px rgba(0,0,0,0.5)","")
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
x=W.a4
W.Y(z,"scroll",H.b(new B.kt(w,y),{func:1,ret:-1,args:[x]}),!1,x)},
ku:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(b,"$isc",[P.o],"$asc")
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
u=W.cr(null,null)
u.id="threeDart"
x=u.style
x.width="800px"
x.height="600px"
t=H.h(v.insertCell(-1),"$isbr")
x=c.length>0
s=x?3:2
r=t.style
r.textAlign="center"
r.marginLeft="auto"
r.marginRight="auto"
t.colSpan=s
t.appendChild(u)
q=w.insertRow(-1)
r=H.h(q.insertCell(-1),"$isbr").style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
for(p=0;!1;++p){o=z.createElement("div")
if(p>=0)return H.k(b,p)
o.id=b[p]
r=o.style
r.textAlign="left"
r=o.style
r.verticalAlign="top"
t=H.h(q.insertCell(-1),"$isbr")
r=t.style
r.textAlign="center"
r.verticalAlign="top"
r.marginLeft="auto"
r.marginRight="auto"
t.appendChild(o)}if(x){n=z.createElement("div")
n.textContent=c
t=H.h(q.insertCell(-1),"$isbr")
z=t.style
z.width="400px"
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
t.appendChild(n)}z=H.h(q.insertCell(-1),"$isbr").style
z.textAlign="center"
z.verticalAlign="top"
z.marginLeft="auto"
z.marginRight="auto"
B.ks(a,y,!1,"../resources/SnowTop.png")},
kv:function(a){P.i_(C.u,new B.kw(a))},
kt:{"^":"u:22;a,b",
$1:function(a){var z,y
z=this.a.style
y=H.i(-0.05*C.e.a7(this.b.scrollTop))+"px"
z.top=y}},
kw:{"^":"u:38;a",
$1:function(a){H.h(a,"$isaU")
P.d7(C.e.dv(this.a.gfJ(),2)+" fps")}}}],["","",,B,{"^":"",
eU:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
B.ku("Test 013",H.f([],[P.o]),"Test of sky box and cover pass.")
z=document.getElementById("threeDart")
if(z==null)H.r(P.q("Failed to find an element with the identifier, threeDart."))
y=E.hY(z,!0,!0,!0,!1)
x=new U.dw()
w=U.a9
x.b0(w)
x.aL(x.geh(),x.geD())
x.e=null
x.f=V.aS()
x.r=0
v=y.r
u=new U.ij()
t=U.ct()
t.sce(0,!0)
t.sc4(6.283185307179586)
t.sc6(0)
t.sa_(0,0)
t.sc5(100)
t.sL(0)
t.sbU(0.5)
u.b=t
t=t.gq()
t.toString
s={func:1,ret:-1,args:[D.l]}
r=H.b(u.gaz(),s)
C.a.h(t.a,r)
t=U.ct()
t.sce(0,!0)
t.sc4(6.283185307179586)
t.sc6(0)
t.sa_(0,0)
t.sc5(100)
t.sL(0)
t.sbU(0.5)
u.c=t
C.a.h(t.gq().a,r)
u.d=null
u.e=!1
u.f=!1
u.r=!1
u.x=2.5
u.y=2.5
u.z=2
u.Q=4
u.cx=!1
u.ch=!1
u.cy=0
u.db=0
u.dx=null
u.dy=0
u.fr=null
u.fx=null
q=new X.ar(!1,!1,!1)
p=u.d
u.d=q
t=[X.ar]
r=new D.F("modifiers",p,q,u,t)
r.b=!0
u.I(r)
r=u.f
if(r!==!1){u.f=!1
r=new D.F("invertX",r,!1,u,[P.a7])
r.b=!0
u.I(r)}r=u.r
if(r!==!1){u.r=!1
r=new D.F("invertY",r,!1,u,[P.a7])
r.b=!0
u.I(r)}u.aN(v)
x.h(0,u)
v=y.r
u=new U.ii()
r=U.ct()
r.sce(0,!0)
r.sc4(6.283185307179586)
r.sc6(0)
r.sa_(0,0)
r.sc5(100)
r.sL(0)
r.sbU(0.2)
u.b=r
r=r.gq()
r.toString
o=H.b(u.gaz(),s)
C.a.h(r.a,o)
u.c=null
u.d=!1
u.e=2.5
u.f=2
u.r=4
u.y=!1
u.x=!1
u.z=0
u.Q=null
u.ch=0
u.cx=null
u.cy=null
q=new X.ar(!0,!1,!1)
p=u.c
u.c=q
r=new D.F("modifiers",p,q,u,t)
r.b=!0
u.I(r)
u.aN(v)
x.h(0,u)
v=y.r
u=new U.ik()
u.c=0.01
u.d=0
u.e=0
q=new X.ar(!1,!1,!1)
u.b=q
t=new D.F("modifiers",null,q,u,t)
t.b=!0
u.I(t)
u.aN(v)
x.h(0,u)
x.h(0,U.dk(V.aq(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
n=X.dM(2000,1.0471975511965976,x,0.1)
m=X.cv(!0,!0,!1,null,2000,null,0)
if(m.b){m.b=!1
v=new D.F("clearColor",!0,!1,m,[P.a7])
v.b=!0
m.ah(v)}l=E.du(null,!0,null,"",null,null)
l.sbs(0,F.kA(30,1,15,0.5))
k=new O.h_()
v=O.cs(V.ap)
k.e=v
v.aL(k.gej(),k.gek())
v=new O.aR(k,"emission")
v.c=C.b
v.f=new V.V(0,0,0)
k.f=v
v=new O.aR(k,"ambient")
v.c=C.b
v.f=new V.V(0,0,0)
k.r=v
v=new O.aR(k,"diffuse")
v.c=C.b
v.f=new V.V(0,0,0)
k.x=v
v=new O.aR(k,"invDiffuse")
v.c=C.b
v.f=new V.V(0,0,0)
k.y=v
v=new O.h5(k,"specular")
v.c=C.b
v.f=new V.V(0,0,0)
v.ch=100
k.z=v
v=new O.h2(k,"bump")
v.c=C.b
k.Q=v
k.ch=null
v=new O.aR(k,"reflect")
v.c=C.b
v.f=new V.V(0,0,0)
k.cx=v
v=new O.h4(k,"refract")
v.c=C.b
v.f=new V.V(0,0,0)
v.ch=1
k.cy=v
v=new O.h1(k,"alpha")
v.c=C.b
v.f=1
k.db=v
v=new D.fK()
v.b0(D.W)
v.e=H.f([],[D.c3])
v.f=H.f([],[D.hj])
v.r=H.f([],[D.hK])
v.x=H.f([],[D.hU])
v.y=H.f([],[D.hV])
v.z=H.f([],[D.hW])
v.Q=null
v.ch=null
v.cg(v.gei(),v.geC(),v.geE())
k.dx=v
u=v.Q
if(u==null){u=D.C()
v.Q=u
v=u}else v=u
u=H.b(k.geP(),s)
C.a.h(v.a,u)
u=k.dx
v=u.ch
if(v==null){v=D.C()
u.ch=v}u=H.b(k.gbu(),s)
C.a.h(v.a,u)
k.dy=null
u=k.dx
v=U.dk(V.dJ(new V.X(0,0,0),new V.E(0,1,0),new V.E(0,-1,-1)))
j=new V.V(1,1,1)
t=new D.c3()
t.c=new V.V(1,1,1)
t.a=new V.E(0,0,1)
p=t.b
t.b=v
v=v.gq()
v.toString
r=H.b(t.gdQ(),s)
C.a.h(v.a,r)
w=new D.F("mover",p,t.b,t,[w])
w.b=!0
t.av(w)
if(!t.c.u(0,j)){p=t.c
t.c=j
w=new D.F("color",p,j,t,[V.V])
w.b=!0
t.av(w)}u.h(0,t)
w=k.r
w.sae(0,new V.V(0,0,1))
w=k.x
w.sae(0,new V.V(0,1,0))
w=k.z
w.sae(0,new V.V(1,0,0))
w=k.z
if(w.c===C.b){w.c=C.f
w.bt()
w.bJ(100)
v=w.a
v.a=null
v.X(null)}w.bJ(10)
w=y.f
v=w.a
i=v.createTexture()
v.bindTexture(34067,i)
v.texParameteri(34067,10242,10497)
v.texParameteri(34067,10243,10497)
v.texParameteri(34067,10241,9729)
v.texParameteri(34067,10240,9729)
v.bindTexture(34067,null)
h=new T.dZ(0)
h.b=i
h.c=!1
h.d=0
h.e=D.C()
w.ay(h,i,"../resources/maskonaive/posx.jpg",34069,!1,!1)
w.ay(h,i,"../resources/maskonaive/negx.jpg",34070,!1,!1)
w.ay(h,i,"../resources/maskonaive/posy.jpg",34071,!1,!1)
w.ay(h,i,"../resources/maskonaive/negy.jpg",34072,!1,!1)
w.ay(h,i,"../resources/maskonaive/posz.jpg",34073,!1,!1)
w.ay(h,i,"../resources/maskonaive/negz.jpg",34074,!1,!1)
g=new M.fg()
g.saO(null)
g.saV(0,null)
g.saW(null)
w=E.du(null,!0,null,"",null,null)
f=F.dT()
v=f.a
u=new V.E(-1,-1,1)
u=u.v(0,Math.sqrt(u.B(u)))
e=v.b5(new V.bk(1,2,4,6),new V.ay(1,0,0,1),new V.X(-1,-1,0),new V.N(0,1),u,null)
v=f.a
u=new V.E(1,-1,1)
u=u.v(0,Math.sqrt(u.B(u)))
d=v.b5(new V.bk(0,3,4,6),new V.ay(0,0,1,1),new V.X(1,-1,0),new V.N(1,1),u,null)
v=f.a
u=new V.E(1,1,1)
u=u.v(0,Math.sqrt(u.B(u)))
c=v.b5(new V.bk(0,2,5,6),new V.ay(0,1,0,1),new V.X(1,1,0),new V.N(1,0),u,null)
v=f.a
u=new V.E(-1,1,1)
u=u.v(0,Math.sqrt(u.B(u)))
b=v.b5(new V.bk(0,2,4,7),new V.ay(1,1,0,1),new V.X(-1,1,0),new V.N(0,0),u,null)
f.d.fs(H.f([e,d,c,b],[F.ag]))
f.am()
w.sbs(0,f)
g.d=w
g.e=null
w=new O.hH()
w.b=1.0471975511965976
p=w.c
w.c=h
v=h.e
u=H.b(w.gbu(),s)
C.a.h(v.a,u)
v=new D.F("boxTexture",p,w.c,w,[T.dZ])
v.b=!0
w.X(v)
j=new V.V(1,1,1)
if(!J.P(w.d,j)){p=w.d
w.d=j
v=new D.F("boxColor",p,j,w,[V.V])
v.b=!0
w.X(v)}w.e=null
g.saW(w)
g.saV(0,m)
g.saO(n)
a=new M.ft()
w=O.cs(E.az)
a.d=w
w.aL(a.gem(),a.gen())
a.e=null
a.f=null
a.r=null
a.x=null
a.saO(null)
a.saV(0,null)
a.saW(null)
a.saO(n)
a.saW(k)
a.saV(0,m)
a.d.h(0,l)
w=M.au
v=H.f([g,a],[w])
u=new M.fe()
u.b0(w)
u.e=!1
u.f=null
u.aL(u.geF(),u.geG())
u.bM(0,v)
w=y.d
if(w!==u){if(w!=null){w=w.gq()
w.toString
v=H.b(y.gcn(),s)
C.a.M(w.a,v)}y.d=u
w=u.gq()
w.toString
s=H.b(y.gcn(),s)
C.a.h(w.a,s)
y.dO()}B.kv(y)}},1]]
setupProgram(dart,0,0)
J.I=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dA.prototype
return J.dz.prototype}if(typeof a=="string")return J.c8.prototype
if(a==null)return J.dB.prototype
if(typeof a=="boolean")return J.fH.prototype
if(a.constructor==Array)return J.bJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bL.prototype
return a}if(a instanceof P.a)return a
return J.ci(a)}
J.bU=function(a){if(typeof a=="string")return J.c8.prototype
if(a==null)return a
if(a.constructor==Array)return J.bJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bL.prototype
return a}if(a instanceof P.a)return a
return J.ci(a)}
J.d2=function(a){if(a==null)return a
if(a.constructor==Array)return J.bJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bL.prototype
return a}if(a instanceof P.a)return a
return J.ci(a)}
J.k9=function(a){if(typeof a=="number")return J.bK.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cc.prototype
return a}
J.ka=function(a){if(typeof a=="number")return J.bK.prototype
if(typeof a=="string")return J.c8.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cc.prototype
return a}
J.bV=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bL.prototype
return a}if(a instanceof P.a)return a
return J.ci(a)}
J.P=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.I(a).u(a,b)}
J.eZ=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.k9(a).ac(a,b)}
J.d8=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.ka(a).i(a,b)}
J.f_=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kj(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bU(a).k(a,b)}
J.f0=function(a,b,c,d){return J.bV(a).cN(a,b,c,d)}
J.cl=function(a,b,c){return J.bU(a).fB(a,b,c)}
J.d9=function(a,b){return J.d2(a).D(a,b)}
J.f1=function(a,b){return J.d2(a).J(a,b)}
J.aH=function(a){return J.I(a).gR(a)}
J.bY=function(a){return J.d2(a).gV(a)}
J.b5=function(a){return J.bU(a).gl(a)}
J.aj=function(a){return J.I(a).j(a)}
var $=I.p
C.k=W.cq.prototype
C.m=W.fh.prototype
C.v=J.m.prototype
C.a=J.bJ.prototype
C.w=J.dz.prototype
C.h=J.dA.prototype
C.x=J.dB.prototype
C.e=J.bK.prototype
C.j=J.c8.prototype
C.E=J.bL.prototype
C.F=W.hc.prototype
C.p=J.hi.prototype
C.G=P.cJ.prototype
C.l=J.cc.prototype
C.q=W.bx.prototype
C.r=W.iz.prototype
C.t=new P.hf()
C.i=new P.jk()
C.b=new A.c1(0,"ColorSourceType.None")
C.f=new A.c1(1,"ColorSourceType.Solid")
C.c=new A.c1(2,"ColorSourceType.Texture2D")
C.d=new A.c1(3,"ColorSourceType.TextureCube")
C.u=new P.b9(5e6)
C.y=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.z=function(hooks) {
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

C.A=function(getTagFallback) {
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
C.B=function() {
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
C.C=function(hooks) {
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
C.D=function(hooks) {
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
$.ao=0
$.b6=null
$.dc=null
$.cW=!1
$.eR=null
$.eL=null
$.eX=null
$.ch=null
$.cj=null
$.d3=null
$.aZ=null
$.bB=null
$.bC=null
$.cX=!1
$.O=C.i
$.dr=null
$.dq=null
$.dp=null
$.dn=null
$.n=V.h6()
$.hJ="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.hI="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.dN=null
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
I.$lazy(y,x,w)}})(["dm","$get$dm",function(){return H.eQ("_$dart_dartClosure")},"cz","$get$cz",function(){return H.eQ("_$dart_js")},"e2","$get$e2",function(){return H.av(H.cb({
toString:function(){return"$receiver$"}}))},"e3","$get$e3",function(){return H.av(H.cb({$method$:null,
toString:function(){return"$receiver$"}}))},"e4","$get$e4",function(){return H.av(H.cb(null))},"e5","$get$e5",function(){return H.av(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"e9","$get$e9",function(){return H.av(H.cb(void 0))},"ea","$get$ea",function(){return H.av(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"e7","$get$e7",function(){return H.av(H.e8(null))},"e6","$get$e6",function(){return H.av(function(){try{null.$method$}catch(z){return z.message}}())},"ec","$get$ec",function(){return H.av(H.e8(void 0))},"eb","$get$eb",function(){return H.av(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cT","$get$cT",function(){return P.iA()},"bD","$get$bD",function(){return[]},"dl","$get$dl",function(){return{}},"em","$get$em",function(){return Z.ah(0)},"ek","$get$ek",function(){return Z.ah(511)},"an","$get$an",function(){return Z.ah(1)},"aC","$get$aC",function(){return Z.ah(2)},"aB","$get$aB",function(){return Z.ah(4)},"aD","$get$aD",function(){return Z.ah(8)},"aE","$get$aE",function(){return Z.ah(16)},"bv","$get$bv",function(){return Z.ah(32)},"bw","$get$bw",function(){return Z.ah(64)},"el","$get$el",function(){return Z.ah(96)},"aX","$get$aX",function(){return Z.ah(128)},"aA","$get$aA",function(){return Z.ah(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.l]},{func:1,ret:-1,args:[D.l]},{func:1,ret:P.H},{func:1,ret:-1},{func:1,ret:-1,args:[W.a4]},{func:1,ret:-1,args:[W.as]},{func:1,ret:P.H,args:[F.ae]},{func:1,ret:-1,args:[P.o,,]},{func:1,ret:-1,args:[P.L,[P.e,E.az]]},{func:1,ret:P.H,args:[D.l]},{func:1,ret:-1,args:[W.aV]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.H,args:[,,]},{func:1,ret:P.o,args:[P.L]},{func:1,ret:P.H,args:[,]},{func:1,args:[,]},{func:1,ret:-1,args:[W.bf]},{func:1,ret:-1,args:[P.L,[P.e,D.W]]},{func:1,ret:P.v},{func:1,ret:-1,args:[P.L,[P.e,U.a9]]},{func:1,ret:-1,args:[P.L,[P.e,M.au]]},{func:1,ret:-1,args:[P.L,[P.e,V.ap]]},{func:1,ret:P.H,args:[W.a4]},{func:1,ret:P.H,args:[{func:1,ret:-1}]},{func:1,ret:P.a7,args:[W.J]},{func:1,ret:W.a0,args:[W.J]},{func:1,args:[,P.o]},{func:1,args:[P.o]},{func:1,ret:P.H,args:[P.T]},{func:1,ret:P.H,args:[{func:1,ret:-1,args:[D.l]}]},{func:1,ret:-1,args:[P.a],opt:[P.am]},{func:1,ret:-1,args:[W.bx]},{func:1,ret:P.a7,args:[P.v,P.v]},{func:1,ret:P.a7,args:[[P.e,D.W]]},{func:1,ret:P.H,args:[,],opt:[,]},{func:1,ret:V.X,args:[P.v]},{func:1,ret:P.H,args:[F.ag,P.v,P.v]},{func:1,ret:[P.aF,,],args:[,]},{func:1,ret:P.H,args:[P.aU]},{func:1,ret:-1,args:[P.o,P.o]}]
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
if(x==y)H.kz(d||a)
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
if(typeof dartMainRunner==="function")dartMainRunner(B.eU,[])
else B.eU([])})})()
//# sourceMappingURL=test.dart.js.map
