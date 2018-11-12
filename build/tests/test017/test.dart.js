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
if(a1==="u"){processStatics(init.statics[b2]=b3.u,b4)
delete b3.u}else if(a2===43){w[g]=a1.substring(1)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.e_"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.e_"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.e_(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.e1=function(){}
var dart=[["","",,H,{"^":"",oO:{"^":"b;a"}}],["","",,J,{"^":"",
L:function(a){return void 0},
e5:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
d1:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.e3==null){H.nR()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.cs("Return interceptor for "+H.k(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$dl()]
if(v!=null)return v
v=H.nY(a)
if(v!=null)return v
if(typeof a=="function")return C.X
y=Object.getPrototypeOf(a)
if(y==null)return C.E
if(y===Object.prototype)return C.E
if(typeof w=="function"){Object.defineProperty(w,$.$get$dl(),{value:C.u,enumerable:false,writable:true,configurable:true})
return C.u}return C.u},
t:{"^":"b;",
A:function(a,b){return a===b},
gY:function(a){return H.bV(a)},
i:["fd",function(a){return"Instance of '"+H.br(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
iR:{"^":"t;",
i:function(a){return String(a)},
gY:function(a){return a?519018:218159},
$isW:1},
eO:{"^":"t;",
A:function(a,b){return null==b},
i:function(a){return"null"},
gY:function(a){return 0},
$isP:1},
dm:{"^":"t;",
gY:function(a){return 0},
i:["ff",function(a){return String(a)}]},
jy:{"^":"dm;"},
ct:{"^":"dm;"},
cm:{"^":"dm;",
i:function(a){var z=a[$.$get$ev()]
if(z==null)return this.ff(a)
return"JavaScript function for "+H.k(J.ad(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscg:1},
bm:{"^":"t;$ti",
h:function(a,b){H.D(b,H.y(a,0))
if(!!a.fixed$length)H.q(P.E("add"))
a.push(b)},
j6:function(a,b){if(!!a.fixed$length)H.q(P.E("removeAt"))
if(b<0||b>=a.length)throw H.a(P.co(b,null,null))
return a.splice(b,1)[0]},
F:function(a,b){var z
if(!!a.fixed$length)H.q(P.E("remove"))
for(z=0;z<a.length;++z)if(J.K(a[z],b)){a.splice(z,1)
return!0}return!1},
ac:function(a,b){var z,y
H.v(b,"$isi",[H.y(a,0)],"$asi")
if(!!a.fixed$length)H.q(P.E("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.B)(b),++y)a.push(b[y])},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.aW(a))}},
n:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.p(z,y,H.k(a[y]))
return z.join(b)},
iK:function(a){return this.n(a,"")},
iC:function(a,b,c,d){var z,y,x
H.D(b,d)
H.l(c,{func:1,ret:d,args:[d,H.y(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.aW(a))}return y},
iA:function(a,b,c){var z,y,x
H.l(b,{func:1,ret:P.W,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.a(P.aW(a))}throw H.a(H.cJ())},
iz:function(a,b){return this.iA(a,b,null)},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
c5:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a6(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a6(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.y(a,0)])
return H.c(a.slice(b,c),[H.y(a,0)])},
giy:function(a){if(a.length>0)return a[0]
throw H.a(H.cJ())},
gaz:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.cJ())},
aK:function(a,b,c,d){var z
H.D(d,H.y(a,0))
if(!!a.immutable$list)H.q(P.E("fill range"))
P.b_(b,c,a.length,null,null,null)
for(z=b;z.R(0,c);z=z.D(0,1))a[z]=d},
e7:function(a,b){var z,y
H.l(b,{func:1,ret:P.W,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.a(P.aW(a))}return!1},
X:function(a,b){var z
for(z=0;z<a.length;++z)if(J.K(a[z],b))return!0
return!1},
i:function(a){return P.dj(a,"[","]")},
ga2:function(a){return new J.aB(a,a.length,0,[H.y(a,0)])},
gY:function(a){return H.bV(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.q(P.E("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cA(b,"newLength",null))
if(b<0)throw H.a(P.a6(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aU(a,b))
if(b>=a.length||b<0)throw H.a(H.aU(a,b))
return a[b]},
p:function(a,b,c){H.G(b)
H.D(c,H.y(a,0))
if(!!a.immutable$list)H.q(P.E("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aU(a,b))
if(b>=a.length||b<0)throw H.a(H.aU(a,b))
a[b]=c},
$isi:1,
$isd:1,
u:{
iQ:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cA(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a6(a,0,4294967295,"length",null))
return J.eL(new Array(a),b)},
eL:function(a,b){return J.bQ(H.c(a,[b]))},
bQ:function(a){H.cb(a)
a.fixed$length=Array
return a}}},
oN:{"^":"bm;$ti"},
aB:{"^":"b;a,b,c,0d,$ti",
gN:function(a){return this.d},
H:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.B(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
ck:{"^":"t;",
jk:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.E(""+a+".toInt()"))},
cS:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.E(""+a+".floor()"))},
am:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.E(""+a+".round()"))},
f_:function(a,b){var z,y
if(b>20)throw H.a(P.a6(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
bq:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a6(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.a1(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.q(P.E("Unexpected toString result: "+z))
x=J.aV(y)
z=x.j(y,1)
w=+x.j(y,3)
if(x.j(y,2)!=null){z+=x.j(y,2)
w-=x.j(y,2).length}return z+C.b.k("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gY:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.a(H.ak(b))
return a*b},
bu:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
fi:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dY(a,b)},
a9:function(a,b){return(a|0)===a?a/b|0:this.dY(a,b)},
dY:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.E("Result of truncating division is "+H.k(z)+": "+H.k(a)+" ~/ "+b))},
b_:function(a,b){var z
if(a>0)z=this.dW(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
hH:function(a,b){if(b<0)throw H.a(H.ak(b))
return this.dW(a,b)},
dW:function(a,b){return b>31?0:a>>>b},
R:function(a,b){if(typeof b!=="number")throw H.a(H.ak(b))
return a<b},
$isu:1,
$isa8:1},
eN:{"^":"ck;",$isn:1},
eM:{"^":"ck;"},
cl:{"^":"t;",
a1:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aU(a,b))
if(b<0)throw H.a(H.aU(a,b))
if(b>=a.length)H.q(H.aU(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(b>=a.length)throw H.a(H.aU(a,b))
return a.charCodeAt(b)},
D:function(a,b){H.I(b)
if(typeof b!=="string")throw H.a(P.cA(b,null,null))
return a+b},
ba:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.ak(b))
c=P.b_(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.ak(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
ah:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.ak(c))
if(typeof c!=="number")return c.R()
if(c<0||c>a.length)throw H.a(P.a6(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a7:function(a,b){return this.ah(a,b,0)},
w:function(a,b,c){H.G(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.ak(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.R()
if(b<0)throw H.a(P.co(b,null,null))
if(b>c)throw H.a(P.co(b,null,null))
if(c>a.length)throw H.a(P.co(c,null,null))
return a.substring(b,c)},
au:function(a,b){return this.w(a,b,null)},
jm:function(a){return a.toLowerCase()},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.K)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
iV:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
al:function(a,b){return this.iV(a,b," ")},
eK:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a6(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
eJ:function(a,b){return this.eK(a,b,0)},
ik:function(a,b,c){if(c>a.length)throw H.a(P.a6(c,0,a.length,null,null))
return H.hK(a,b,c)},
i:function(a){return a},
gY:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gm:function(a){return a.length},
$isf1:1,
$ish:1}}],["","",,H,{"^":"",
d2:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
cJ:function(){return new P.dC("No element")},
iP:function(){return new P.dC("Too many elements")},
w:{"^":"kP;a",
gm:function(a){return this.a.length},
j:function(a,b){return C.b.a1(this.a,b)},
$ascT:function(){return[P.n]},
$asA:function(){return[P.n]},
$asi:function(){return[P.n]},
$asd:function(){return[P.n]}},
eC:{"^":"i;"},
cL:{"^":"eC;$ti",
ga2:function(a){return new H.dr(this,this.gm(this),0,[H.al(this,"cL",0)])},
dg:function(a,b){return this.fe(0,H.l(b,{func:1,ret:P.W,args:[H.al(this,"cL",0)]}))}},
dr:{"^":"b;a,b,c,0d,$ti",
gN:function(a){return this.d},
H:function(){var z,y,x,w
z=this.a
y=J.aV(z)
x=y.gm(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.aW(z))
w=this.c
if(typeof x!=="number")return H.o(x)
if(w>=x){this.d=null
return!1}this.d=y.J(z,w);++this.c
return!0}},
jb:{"^":"i;a,b,$ti",
ga2:function(a){return new H.jc(J.b7(this.a),this.b,this.$ti)},
gm:function(a){return J.as(this.a)},
J:function(a,b){return this.b.$1(J.cz(this.a,b))},
$asi:function(a,b){return[b]}},
jc:{"^":"dk;0a,b,c,$ti",
H:function(){var z=this.b
if(z.H()){this.a=this.c.$1(z.gN(z))
return!0}this.a=null
return!1},
gN:function(a){return this.a},
$asdk:function(a,b){return[b]}},
jd:{"^":"cL;a,b,$ti",
gm:function(a){return J.as(this.a)},
J:function(a,b){return this.b.$1(J.cz(this.a,b))},
$ascL:function(a,b){return[b]},
$asi:function(a,b){return[b]}},
dP:{"^":"i;a,b,$ti",
ga2:function(a){return new H.lj(J.b7(this.a),this.b,this.$ti)}},
lj:{"^":"dk;a,b,$ti",
H:function(){var z,y
for(z=this.a,y=this.b;z.H();)if(y.$1(z.gN(z)))return!0
return!1},
gN:function(a){var z=this.a
return z.gN(z)}},
cH:{"^":"b;$ti"},
cT:{"^":"b;$ti",
p:function(a,b,c){H.G(b)
H.D(c,H.al(this,"cT",0))
throw H.a(P.E("Cannot modify an unmodifiable list"))},
aK:function(a,b,c,d){H.D(d,H.al(this,"cT",0))
throw H.a(P.E("Cannot modify an unmodifiable list"))}},
kP:{"^":"cK+cT;"}}],["","",,H,{"^":"",
ie:function(){throw H.a(P.E("Cannot modify unmodifiable Map"))},
nK:function(a){return init.types[H.G(a)]},
hC:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.L(a).$isJ},
k:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ad(a)
if(typeof z!=="string")throw H.a(H.ak(a))
return z},
bV:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
jJ:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.f(z,3)
y=H.I(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a6(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.I(w,u)|32)>x)return}return parseInt(a,b)},
br:function(a){var z,y,x,w,v,u,t,s,r
z=J.L(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.P||!!J.L(a).$isct){v=C.y(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.I(w,0)===36)w=C.b.au(w,1)
r=H.e4(H.cb(H.be(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
jB:function(){if(!!self.location)return self.location.href
return},
f4:function(a){var z,y,x,w,v
H.cb(a)
z=J.as(a)
if(typeof z!=="number")return z.f8()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
jK:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.B)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.ak(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.f.b_(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.ak(w))}return H.f4(z)},
f5:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.ak(x))
if(x<0)throw H.a(H.ak(x))
if(x>65535)return H.jK(a)}return H.f4(a)},
jL:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.f8()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
bW:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.b_(z,10))>>>0,56320|z&1023)}}throw H.a(P.a6(a,0,1114111,null,null))},
ao:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jI:function(a){return a.b?H.ao(a).getUTCFullYear()+0:H.ao(a).getFullYear()+0},
jG:function(a){return a.b?H.ao(a).getUTCMonth()+1:H.ao(a).getMonth()+1},
jC:function(a){return a.b?H.ao(a).getUTCDate()+0:H.ao(a).getDate()+0},
jD:function(a){return a.b?H.ao(a).getUTCHours()+0:H.ao(a).getHours()+0},
jF:function(a){return a.b?H.ao(a).getUTCMinutes()+0:H.ao(a).getMinutes()+0},
jH:function(a){return a.b?H.ao(a).getUTCSeconds()+0:H.ao(a).getSeconds()+0},
jE:function(a){return a.b?H.ao(a).getUTCMilliseconds()+0:H.ao(a).getMilliseconds()+0},
o:function(a){throw H.a(H.ak(a))},
f:function(a,b){if(a==null)J.as(a)
throw H.a(H.aU(a,b))},
aU:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aI(!0,b,"index",null)
z=H.G(J.as(a))
if(!(b<0)){if(typeof z!=="number")return H.o(z)
y=b>=z}else y=!0
if(y)return P.Y(b,a,"index",null,z)
return P.co(b,"index",null)},
nE:function(a,b,c){if(a>c)return new P.cO(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cO(a,c,!0,b,"end","Invalid value")
return new P.aI(!0,b,"end",null)},
ak:function(a){return new P.aI(!0,a,null,null)},
nt:function(a){if(typeof a!=="number")throw H.a(H.ak(a))
return a},
a:function(a){var z
if(a==null)a=new P.f0()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hL})
z.name=""}else z.toString=H.hL
return z},
hL:function(){return J.ad(this.dartException)},
q:function(a){throw H.a(a)},
B:function(a){throw H.a(P.aW(a))},
ac:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.ol(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.b_(x,16)&8191)===10)switch(w){case 438:return z.$1(H.dn(H.k(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.f_(H.k(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fp()
u=$.$get$fq()
t=$.$get$fr()
s=$.$get$fs()
r=$.$get$fw()
q=$.$get$fx()
p=$.$get$fu()
$.$get$ft()
o=$.$get$fz()
n=$.$get$fy()
m=v.ak(y)
if(m!=null)return z.$1(H.dn(H.I(y),m))
else{m=u.ak(y)
if(m!=null){m.method="call"
return z.$1(H.dn(H.I(y),m))}else{m=t.ak(y)
if(m==null){m=s.ak(y)
if(m==null){m=r.ak(y)
if(m==null){m=q.ak(y)
if(m==null){m=p.ak(y)
if(m==null){m=s.ak(y)
if(m==null){m=o.ak(y)
if(m==null){m=n.ak(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.f_(H.I(y),m))}}return z.$1(new H.kO(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.fb()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aI(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.fb()
return a},
bK:function(a){var z
if(a==null)return new H.h6(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.h6(a)},
nH:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.p(0,a[y],a[x])}return b},
nT:function(a,b,c,d,e,f){H.e(a,"$iscg")
switch(H.G(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.r("Unsupported number of arguments for wrapped closure"))},
bI:function(a,b){var z
H.G(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nT)
a.$identity=z
return z},
i9:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.L(d).$isd){z.$reflectionInfo=d
x=H.jR(z).r}else x=d
w=e?Object.create(new H.kh().constructor.prototype):Object.create(new H.da(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aJ
if(typeof u!=="number")return u.D()
$.aJ=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.eq(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.nK,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.el:H.db
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.eq(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
i6:function(a,b,c,d){var z=H.db
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
eq:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.i8(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.i6(y,!w,z,b)
if(y===0){w=$.aJ
if(typeof w!=="number")return w.D()
$.aJ=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bN
if(v==null){v=H.cC("self")
$.bN=v}return new Function(w+H.k(v)+";return "+u+"."+H.k(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aJ
if(typeof w!=="number")return w.D()
$.aJ=w+1
t+=w
w="return function("+t+"){return this."
v=$.bN
if(v==null){v=H.cC("self")
$.bN=v}return new Function(w+H.k(v)+"."+H.k(z)+"("+t+");}")()},
i7:function(a,b,c,d){var z,y
z=H.db
y=H.el
switch(b?-1:a){case 0:throw H.a(H.k0("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
i8:function(a,b){var z,y,x,w,v,u,t,s
z=$.bN
if(z==null){z=H.cC("self")
$.bN=z}y=$.ek
if(y==null){y=H.cC("receiver")
$.ek=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.i7(w,!u,x,b)
if(w===1){z="return function(){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+");"
y=$.aJ
if(typeof y!=="number")return y.D()
$.aJ=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+", "+s+");"
y=$.aJ
if(typeof y!=="number")return y.D()
$.aJ=y+1
return new Function(z+y+"}")()},
e_:function(a,b,c,d,e,f,g){var z,y
z=J.bQ(H.cb(b))
H.G(c)
y=!!J.L(d).$isd?J.bQ(d):d
return H.i9(a,z,c,y,!!e,f,g)},
I:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aF(a,"String"))},
nF:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aF(a,"double"))},
oa:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aF(a,"num"))},
dY:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aF(a,"bool"))},
G:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aF(a,"int"))},
hH:function(a,b){throw H.a(H.aF(a,H.I(b).substring(3)))},
oc:function(a,b){var z=J.aV(b)
throw H.a(H.i5(a,z.w(b,3,z.gm(b))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.L(a)[b])return a
H.hH(a,b)},
j:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.L(a)[b]
else z=!0
if(z)return a
H.oc(a,b)},
cb:function(a){if(a==null)return a
if(!!J.L(a).$isd)return a
throw H.a(H.aF(a,"List"))},
hE:function(a,b){if(a==null)return a
if(!!J.L(a).$isd)return a
if(J.L(a)[b])return a
H.hH(a,b)},
hy:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.G(z)]
else return a.$S()}return},
cw:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.hy(J.L(a))
if(z==null)return!1
y=H.hB(z,null,b,null)
return y},
l:function(a,b){var z,y
if(a==null)return a
if($.dV)return a
$.dV=!0
try{if(H.cw(a,b))return a
z=H.cy(b)
y=H.aF(a,z)
throw H.a(y)}finally{$.dV=!1}},
e2:function(a,b){if(a!=null&&!H.dZ(a,b))H.q(H.aF(a,H.cy(b)))
return a},
hq:function(a){var z
if(a instanceof H.m){z=H.hy(J.L(a))
if(z!=null)return H.cy(z)
return"Closure"}return H.br(a)},
oi:function(a){throw H.a(new P.ik(H.I(a)))},
hz:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
be:function(a){if(a==null)return
return a.$ti},
pR:function(a,b,c){return H.bL(a["$as"+H.k(c)],H.be(b))},
bd:function(a,b,c,d){var z
H.I(c)
H.G(d)
z=H.bL(a["$as"+H.k(c)],H.be(b))
return z==null?null:z[d]},
al:function(a,b,c){var z
H.I(b)
H.G(c)
z=H.bL(a["$as"+H.k(b)],H.be(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.G(b)
z=H.be(a)
return z==null?null:z[b]},
cy:function(a){var z=H.bf(a,null)
return z},
bf:function(a,b){var z,y
H.v(b,"$isd",[P.h],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.e4(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.G(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.k(b[y])}if('func' in a)return H.nj(a,b)
if('futureOr' in a)return"FutureOr<"+H.bf("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nj:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.h]
H.v(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.f(b,r)
t=C.b.D(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.bf(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.bf(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.bf(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.bf(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.nG(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.I(z[l])
n=n+m+H.bf(i[h],b)+(" "+H.k(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
e4:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$isd",[P.h],"$asd")
if(a==null)return""
z=new P.aq("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.bf(u,c)}v="<"+z.i(0)+">"
return v},
bL:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
c8:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.be(a)
y=J.L(a)
if(y[b]==null)return!1
return H.ht(H.bL(y[d],z),null,c,null)},
v:function(a,b,c,d){var z,y
H.I(b)
H.cb(c)
H.I(d)
if(a==null)return a
z=H.c8(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.e4(c,0,null)
throw H.a(H.aF(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
ht:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aA(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aA(a[y],b,c[y],d))return!1
return!0},
pP:function(a,b,c){return a.apply(b,H.bL(J.L(b)["$as"+H.k(c)],H.be(b)))},
hD:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="P"||a===-1||a===-2||H.hD(z)}return!1},
dZ:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="P"||b===-1||b===-2||H.hD(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dZ(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cw(a,b)}y=J.L(a).constructor
x=H.be(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.aA(y,null,b,null)
return z},
D:function(a,b){if(a!=null&&!H.dZ(a,b))throw H.a(H.aF(a,H.cy(b)))
return a},
aA:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aA(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="P")return!0
if('func' in c)return H.hB(a,b,c,d)
if('func' in a)return c.builtin$cls==="cg"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aA("type" in a?a.type:null,b,x,d)
else if(H.aA(a,b,x,d))return!0
else{if(!('$is'+"bP" in y.prototype))return!1
w=y.prototype["$as"+"bP"]
v=H.bL(w,z?a.slice(1):null)
return H.aA(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cy(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.ht(H.bL(r,z),b,u,d)},
hB:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.aA(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.aA(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.aA(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.aA(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.o9(m,b,l,d)},
o9:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aA(c[w],d,a[w],b))return!1}return!0},
pQ:function(a,b,c){Object.defineProperty(a,H.I(b),{value:c,enumerable:false,writable:true,configurable:true})},
nY:function(a){var z,y,x,w,v,u
z=H.I($.hA.$1(a))
y=$.d0[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.d3[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.I($.hs.$2(a,z))
if(z!=null){y=$.d0[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.d3[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.d4(x)
$.d0[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.d3[z]=x
return x}if(v==="-"){u=H.d4(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.hG(a,x)
if(v==="*")throw H.a(P.cs(z))
if(init.leafTags[z]===true){u=H.d4(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.hG(a,x)},
hG:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.e5(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
d4:function(a){return J.e5(a,!1,null,!!a.$isJ)},
o8:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.d4(z)
else return J.e5(z,c,null,null)},
nR:function(){if(!0===$.e3)return
$.e3=!0
H.nS()},
nS:function(){var z,y,x,w,v,u,t,s
$.d0=Object.create(null)
$.d3=Object.create(null)
H.nN()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hI.$1(v)
if(u!=null){t=H.o8(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
nN:function(){var z,y,x,w,v,u,t
z=C.U()
z=H.bH(C.R,H.bH(C.W,H.bH(C.x,H.bH(C.x,H.bH(C.V,H.bH(C.S,H.bH(C.T(C.y),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.hA=new H.nO(v)
$.hs=new H.nP(u)
$.hI=new H.nQ(t)},
bH:function(a,b){return a(b)||b},
hK:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
e8:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
id:{"^":"b;$ti",
i:function(a){return P.ds(this)},
p:function(a,b,c){H.D(b,H.y(this,0))
H.D(c,H.y(this,1))
return H.ie()},
$isN:1},
ig:{"^":"id;a,b,c,$ti",
gm:function(a){return this.a},
bF:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bF(0,b))return
return this.dM(b)},
dM:function(a){return this.b[H.I(a)]},
K:function(a,b){var z,y,x,w,v
z=H.y(this,1)
H.l(b,{func:1,ret:-1,args:[H.y(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.D(this.dM(v),z))}}},
jQ:{"^":"b;a,b,c,d,e,f,r,0x",u:{
jR:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bQ(z)
y=z[0]
x=z[1]
return new H.jQ(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
kA:{"^":"b;a,b,c,d,e,f",
ak:function(a){var z,y,x
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
u:{
aR:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.h])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.kA(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cS:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fv:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
jv:{"^":"aa;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.k(this.a)
return"NullError: method not found: '"+z+"' on null"},
u:{
f_:function(a,b){return new H.jv(a,b==null?null:b.method)}}},
iU:{"^":"aa;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.k(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.k(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.k(this.a)+")"},
u:{
dn:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.iU(a,y,z?null:b.receiver)}}},
kO:{"^":"aa;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
ol:{"^":"m:20;a",
$1:function(a){if(!!J.L(a).$isaa)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
h6:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaE:1},
m:{"^":"b;",
i:function(a){return"Closure '"+H.br(this).trim()+"'"},
gf4:function(){return this},
$iscg:1,
gf4:function(){return this}},
fg:{"^":"m;"},
kh:{"^":"fg;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
da:{"^":"fg;a,b,c,d",
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.da))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gY:function(a){var z,y
z=this.c
if(z==null)y=H.bV(this.a)
else y=typeof z!=="object"?J.cc(z):H.bV(z)
return(y^H.bV(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.br(z)+"'")},
u:{
db:function(a){return a.a},
el:function(a){return a.c},
cC:function(a){var z,y,x,w,v
z=new H.da("self","target","receiver","name")
y=J.bQ(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
kB:{"^":"aa;a",
i:function(a){return this.a},
u:{
aF:function(a,b){return new H.kB("TypeError: "+H.k(P.cG(a))+": type '"+H.hq(a)+"' is not a subtype of type '"+b+"'")}}},
i4:{"^":"aa;a",
i:function(a){return this.a},
u:{
i5:function(a,b){return new H.i4("CastError: "+H.k(P.cG(a))+": type '"+H.hq(a)+"' is not a subtype of type '"+b+"'")}}},
k_:{"^":"aa;a",
i:function(a){return"RuntimeError: "+H.k(this.a)},
u:{
k0:function(a){return new H.k_(a)}}},
bb:{"^":"eU;a,0b,0c,0d,0e,0f,r,$ti",
gm:function(a){return this.a},
gcX:function(a){return this.a===0},
gaa:function(a){return new H.j_(this,[H.y(this,0)])},
bF:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.dI(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.dI(y,b)}else return this.iH(b)},
iH:function(a){var z=this.d
if(z==null)return!1
return this.cV(this.cf(z,this.cU(a)),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bx(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bx(w,b)
x=y==null?null:y.b
return x}else return this.iI(b)},
iI:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cf(z,this.cU(a))
x=this.cV(y,a)
if(x<0)return
return y[x].b},
p:function(a,b,c){var z,y
H.D(b,H.y(this,0))
H.D(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.cm()
this.b=z}this.dB(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.cm()
this.c=y}this.dB(y,b,c)}else this.iJ(b,c)},
iJ:function(a,b){var z,y,x,w
H.D(a,H.y(this,0))
H.D(b,H.y(this,1))
z=this.d
if(z==null){z=this.cm()
this.d=z}y=this.cU(a)
x=this.cf(z,y)
if(x==null)this.ct(z,y,[this.cn(a,b)])
else{w=this.cV(x,a)
if(w>=0)x[w].b=b
else x.push(this.cn(a,b))}},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.aW(this))
z=z.c}},
dB:function(a,b,c){var z
H.D(b,H.y(this,0))
H.D(c,H.y(this,1))
z=this.bx(a,b)
if(z==null)this.ct(a,b,this.cn(b,c))
else z.b=c},
fQ:function(){this.r=this.r+1&67108863},
cn:function(a,b){var z,y
z=new H.iZ(H.D(a,H.y(this,0)),H.D(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fQ()
return z},
cU:function(a){return J.cc(a)&0x3ffffff},
cV:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.K(a[y].a,b))return y
return-1},
i:function(a){return P.ds(this)},
bx:function(a,b){return a[b]},
cf:function(a,b){return a[b]},
ct:function(a,b,c){a[b]=c},
fL:function(a,b){delete a[b]},
dI:function(a,b){return this.bx(a,b)!=null},
cm:function(){var z=Object.create(null)
this.ct(z,"<non-identifier-key>",z)
this.fL(z,"<non-identifier-key>")
return z},
$iseR:1},
iZ:{"^":"b;a,b,0c,0d"},
j_:{"^":"eC;a,$ti",
gm:function(a){return this.a.a},
ga2:function(a){var z,y
z=this.a
y=new H.j0(z,z.r,this.$ti)
y.c=z.e
return y}},
j0:{"^":"b;a,b,0c,0d,$ti",
gN:function(a){return this.d},
H:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aW(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
nO:{"^":"m:20;a",
$1:function(a){return this.a(a)}},
nP:{"^":"m:57;a",
$2:function(a,b){return this.a(a,b)}},
nQ:{"^":"m:56;a",
$1:function(a){return this.a(H.I(a))}},
iS:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isf1:1,
$isjS:1,
u:{
iT:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.a4("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
nG:function(a){return J.eL(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
ob:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bF:function(a){return a},
jp:function(a){return new Int8Array(a)},
aT:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aU(b,a))},
nd:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.nE(a,b,c))
return b},
eY:{"^":"t;",$iseY:1,"%":"ArrayBuffer"},
dx:{"^":"t;",$isdx:1,$iskC:1,"%":"DataView;ArrayBufferView;dw|h0|h1|jq|h2|h3|bc"},
dw:{"^":"dx;",
gm:function(a){return a.length},
$isJ:1,
$asJ:I.e1},
jq:{"^":"h1;",
j:function(a,b){H.aT(b,a,a.length)
return a[b]},
p:function(a,b,c){H.G(b)
H.nF(c)
H.aT(b,a,a.length)
a[b]=c},
$ascH:function(){return[P.u]},
$asA:function(){return[P.u]},
$isi:1,
$asi:function(){return[P.u]},
$isd:1,
$asd:function(){return[P.u]},
"%":"Float32Array|Float64Array"},
bc:{"^":"h3;",
p:function(a,b,c){H.G(b)
H.G(c)
H.aT(b,a,a.length)
a[b]=c},
$ascH:function(){return[P.n]},
$asA:function(){return[P.n]},
$isi:1,
$asi:function(){return[P.n]},
$isd:1,
$asd:function(){return[P.n]}},
oX:{"^":"bc;",
j:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Int16Array"},
oY:{"^":"bc;",
j:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Int32Array"},
oZ:{"^":"bc;",
j:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Int8Array"},
p_:{"^":"bc;",
j:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
p0:{"^":"bc;",
j:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
p1:{"^":"bc;",
gm:function(a){return a.length},
j:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
dy:{"^":"bc;",
gm:function(a){return a.length},
j:function(a,b){H.aT(b,a,a.length)
return a[b]},
c5:function(a,b,c){return new Uint8Array(a.subarray(b,H.nd(b,c,a.length)))},
$isdy:1,
$isV:1,
"%":";Uint8Array"},
h0:{"^":"dw+A;"},
h1:{"^":"h0+cH;"},
h2:{"^":"dw+A;"},
h3:{"^":"h2+cH;"}}],["","",,P,{"^":"",
ll:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.nq()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bI(new P.ln(z),1)).observe(y,{childList:true})
return new P.lm(z,y,x)}else if(self.setImmediate!=null)return P.nr()
return P.ns()},
pC:[function(a){self.scheduleImmediate(H.bI(new P.lo(H.l(a,{func:1,ret:-1})),0))},"$1","nq",4,0,12],
pD:[function(a){self.setImmediate(H.bI(new P.lp(H.l(a,{func:1,ret:-1})),0))},"$1","nr",4,0,12],
pE:[function(a){P.dH(C.q,H.l(a,{func:1,ret:-1}))},"$1","ns",4,0,12],
dH:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.f.a9(a.a,1000)
return P.mw(z<0?0:z,b)},
fk:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.by]})
z=C.f.a9(a.a,1000)
return P.mx(z<0?0:z,b)},
nm:function(a,b){if(H.cw(a,{func:1,args:[P.b,P.aE]}))return b.j4(a,null,P.b,P.aE)
if(H.cw(a,{func:1,args:[P.b]}))return H.l(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cA(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
nl:function(){var z,y
for(;z=$.bG,z!=null;){$.c6=null
y=z.b
$.bG=y
if(y==null)$.c5=null
z.a.$0()}},
pO:[function(){$.dW=!0
try{P.nl()}finally{$.c6=null
$.dW=!1
if($.bG!=null)$.$get$dQ().$1(P.hu())}},"$0","hu",0,0,3],
hp:function(a){var z=new P.fS(H.l(a,{func:1,ret:-1}))
if($.bG==null){$.c5=z
$.bG=z
if(!$.dW)$.$get$dQ().$1(P.hu())}else{$.c5.b=z
$.c5=z}},
np:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.bG
if(z==null){P.hp(a)
$.c6=$.c5
return}y=new P.fS(a)
x=$.c6
if(x==null){y.b=z
$.c6=y
$.bG=y}else{y.b=x.b
x.b=y
$.c6=y
if(y.b==null)$.c5=y}},
od:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.a_
if(C.j===y){P.d_(null,null,C.j,a)
return}y.toString
P.d_(null,null,y,H.l(y.cC(a),z))},
fj:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.a_
if(y===C.j){y.toString
return P.dH(a,b)}return P.dH(a,H.l(y.cC(b),z))},
kx:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.by]}
H.l(b,z)
y=$.a_
if(y===C.j){y.toString
return P.fk(a,b)}x=y.e9(b,P.by)
$.a_.toString
return P.fk(a,H.l(x,z))},
cZ:function(a,b,c,d,e){var z={}
z.a=d
P.np(new P.nn(z,e))},
hl:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.a_
if(y===c)return d.$0()
$.a_=c
z=y
try{y=d.$0()
return y}finally{$.a_=z}},
hm:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.D(e,g)
y=$.a_
if(y===c)return d.$1(e)
$.a_=c
z=y
try{y=d.$1(e)
return y}finally{$.a_=z}},
no:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.D(e,h)
H.D(f,i)
y=$.a_
if(y===c)return d.$2(e,f)
$.a_=c
z=y
try{y=d.$2(e,f)
return y}finally{$.a_=z}},
d_:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.cC(d):c.ih(d,-1)
P.hp(d)},
ln:{"^":"m:33;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
lm:{"^":"m:53;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
lo:{"^":"m:0;a",
$0:function(){this.a.$0()}},
lp:{"^":"m:0;a",
$0:function(){this.a.$0()}},
ha:{"^":"b;a,0b,c",
fv:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bI(new P.mz(this,b),0),a)
else throw H.a(P.E("`setTimeout()` not found."))},
fw:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bI(new P.my(this,a,Date.now(),b),0),a)
else throw H.a(P.E("Periodic timer."))},
$isby:1,
u:{
mw:function(a,b){var z=new P.ha(!0,0)
z.fv(a,b)
return z},
mx:function(a,b){var z=new P.ha(!1,0)
z.fw(a,b)
return z}}},
mz:{"^":"m:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
my:{"^":"m:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.fi(w,x)}z.c=y
this.d.$1(z)}},
bE:{"^":"b;0a,b,c,d,e,$ti",
iO:function(a){if(this.c!==6)return!0
return this.b.b.da(H.l(this.d,{func:1,ret:P.W,args:[P.b]}),a.a,P.W,P.b)},
iF:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.cw(z,{func:1,args:[P.b,P.aE]}))return H.e2(w.jd(z,a.a,a.b,null,y,P.aE),x)
else return H.e2(w.da(H.l(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
b5:{"^":"b;dX:a<,b,0hw:c<,$ti",
eZ:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.a_
if(y!==C.j){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.nm(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.b5(0,$.a_,[c])
w=b==null?1:3
this.dC(new P.bE(x,w,a,b,[z,c]))
return x},
jj:function(a,b){return this.eZ(a,null,b)},
dC:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isbE")
this.c=a}else{if(z===2){y=H.e(this.c,"$isb5")
z=y.a
if(z<4){y.dC(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.d_(null,null,z,H.l(new P.lF(this,a),{func:1,ret:-1}))}},
dS:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isbE")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isb5")
y=u.a
if(y<4){u.dS(a)
return}this.a=y
this.c=u.c}z.a=this.bz(a)
y=this.b
y.toString
P.d_(null,null,y,H.l(new P.lK(z,this),{func:1,ret:-1}))}},
cp:function(){var z=H.e(this.c,"$isbE")
this.c=null
return this.bz(z)},
bz:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
dF:function(a){var z,y,x,w
z=H.y(this,0)
H.e2(a,{futureOr:1,type:z})
y=this.$ti
x=H.c8(a,"$isbP",y,"$asbP")
if(x){z=H.c8(a,"$isb5",y,null)
if(z)P.fW(a,this)
else P.lG(a,this)}else{w=this.cp()
H.D(a,z)
this.a=4
this.c=a
P.c1(this,w)}},
ca:[function(a,b){var z
H.e(b,"$isaE")
z=this.cp()
this.a=8
this.c=new P.at(a,b)
P.c1(this,z)},function(a){return this.ca(a,null)},"jp","$2","$1","gfG",4,2,52],
$isbP:1,
u:{
lG:function(a,b){var z,y,x
b.a=1
try{a.eZ(new P.lH(b),new P.lI(b),null)}catch(x){z=H.ac(x)
y=H.bK(x)
P.od(new P.lJ(b,z,y))}},
fW:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isb5")
if(z>=4){y=b.cp()
b.a=a.a
b.c=a.c
P.c1(b,y)}else{y=H.e(b.c,"$isbE")
b.a=2
b.c=a
a.dS(y)}},
c1:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isat")
y=y.b
u=v.a
t=v.b
y.toString
P.cZ(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.c1(z.a,b)}y=z.a
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
if(p){H.e(r,"$isat")
y=y.b
u=r.a
t=r.b
y.toString
P.cZ(null,null,y,u,t)
return}o=$.a_
if(o==null?q!=null:o!==q)$.a_=q
else o=null
y=b.c
if(y===8)new P.lN(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.lM(x,b,r).$0()}else if((y&2)!==0)new P.lL(z,x,b).$0()
if(o!=null)$.a_=o
y=x.b
if(!!J.L(y).$isbP){if(y.a>=4){n=H.e(t.c,"$isbE")
t.c=null
b=t.bz(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fW(y,t)
return}}m=b.b
n=H.e(m.c,"$isbE")
m.c=null
b=m.bz(n)
y=x.a
u=x.b
if(!y){H.D(u,H.y(m,0))
m.a=4
m.c=u}else{H.e(u,"$isat")
m.a=8
m.c=u}z.a=m
y=m}}}},
lF:{"^":"m:0;a,b",
$0:function(){P.c1(this.a,this.b)}},
lK:{"^":"m:0;a,b",
$0:function(){P.c1(this.b,this.a.a)}},
lH:{"^":"m:33;a",
$1:function(a){var z=this.a
z.a=0
z.dF(a)}},
lI:{"^":"m:51;a",
$2:function(a,b){this.a.ca(a,H.e(b,"$isaE"))},
$1:function(a){return this.$2(a,null)}},
lJ:{"^":"m:0;a,b,c",
$0:function(){this.a.ca(this.b,this.c)}},
lN:{"^":"m:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.eY(H.l(w.d,{func:1}),null)}catch(v){y=H.ac(v)
x=H.bK(v)
if(this.d){w=H.e(this.a.a.c,"$isat").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isat")
else u.b=new P.at(y,x)
u.a=!0
return}if(!!J.L(z).$isbP){if(z instanceof P.b5&&z.gdX()>=4){if(z.gdX()===8){w=this.b
w.b=H.e(z.ghw(),"$isat")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.jj(new P.lO(t),null)
w.a=!1}}},
lO:{"^":"m:49;a",
$1:function(a){return this.a}},
lM:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.D(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.da(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ac(t)
y=H.bK(t)
x=this.a
x.b=new P.at(z,y)
x.a=!0}}},
lL:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isat")
w=this.c
if(w.iO(z)&&w.e!=null){v=this.b
v.b=w.iF(z)
v.a=!1}}catch(u){y=H.ac(u)
x=H.bK(u)
w=H.e(this.a.a.c,"$isat")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.at(y,x)
s.a=!0}}},
fS:{"^":"b;a,0b"},
dD:{"^":"b;$ti",
gm:function(a){var z,y
z={}
y=new P.b5(0,$.a_,[P.n])
z.a=0
this.iM(new P.kk(z,this),!0,new P.kl(z,y),y.gfG())
return y}},
kk:{"^":"m;a,b",
$1:function(a){H.D(a,H.al(this.b,"dD",0));++this.a.a},
$S:function(){return{func:1,ret:P.P,args:[H.al(this.b,"dD",0)]}}},
kl:{"^":"m:0;a,b",
$0:function(){this.b.dF(this.a.a)}},
fe:{"^":"b;$ti"},
kj:{"^":"b;"},
by:{"^":"b;"},
at:{"^":"b;a,b",
i:function(a){return H.k(this.a)},
$isaa:1},
n1:{"^":"b;",$ispB:1},
nn:{"^":"m:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.f0()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
m7:{"^":"n1;",
je:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.j===$.a_){a.$0()
return}P.hl(null,null,this,a,-1)}catch(x){z=H.ac(x)
y=H.bK(x)
P.cZ(null,null,this,z,H.e(y,"$isaE"))}},
jf:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.D(b,c)
try{if(C.j===$.a_){a.$1(b)
return}P.hm(null,null,this,a,b,-1,c)}catch(x){z=H.ac(x)
y=H.bK(x)
P.cZ(null,null,this,z,H.e(y,"$isaE"))}},
ih:function(a,b){return new P.m9(this,H.l(a,{func:1,ret:b}),b)},
cC:function(a){return new P.m8(this,H.l(a,{func:1,ret:-1}))},
e9:function(a,b){return new P.ma(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
eY:function(a,b){H.l(a,{func:1,ret:b})
if($.a_===C.j)return a.$0()
return P.hl(null,null,this,a,b)},
da:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.D(b,d)
if($.a_===C.j)return a.$1(b)
return P.hm(null,null,this,a,b,c,d)},
jd:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.D(b,e)
H.D(c,f)
if($.a_===C.j)return a.$2(b,c)
return P.no(null,null,this,a,b,c,d,e,f)},
j4:function(a,b,c,d){return H.l(a,{func:1,ret:b,args:[c,d]})}},
m9:{"^":"m;a,b,c",
$0:function(){return this.a.eY(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
m8:{"^":"m:3;a,b",
$0:function(){return this.a.je(this.b)}},
ma:{"^":"m;a,b,c",
$1:function(a){var z=this.c
return this.a.jf(this.b,H.D(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
j1:function(a,b,c,d,e){return new H.bb(0,0,[d,e])},
j2:function(a,b,c){H.cb(a)
return H.v(H.nH(a,new H.bb(0,0,[b,c])),"$iseR",[b,c],"$aseR")},
dq:function(a,b){return new H.bb(0,0,[a,b])},
cn:function(a,b,c,d){return new P.lV(0,0,[d])},
iO:function(a,b,c){var z,y
if(P.dX(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$c7()
C.a.h(y,a)
try{P.nk(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.ff(b,H.hE(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
dj:function(a,b,c){var z,y,x
if(P.dX(a))return b+"..."+c
z=new P.aq(b)
y=$.$get$c7()
C.a.h(y,a)
try{x=z
x.a=P.ff(x.gaV(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gaV()+c
y=z.gaV()
return y.charCodeAt(0)==0?y:y},
dX:function(a){var z,y
for(z=0;y=$.$get$c7(),z<y.length;++z)if(a===y[z])return!0
return!1},
nk:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga2(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.H())return
w=H.k(z.gN(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.H()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gN(z);++x
if(!z.H()){if(x<=4){C.a.h(b,H.k(t))
return}v=H.k(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gN(z);++x
for(;z.H();t=s,s=r){r=z.gN(z);++x
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
j3:function(a,b,c){var z=P.j1(null,null,null,b,c)
a.K(0,new P.j4(z,b,c))
return z},
eS:function(a,b){var z,y
z=P.cn(null,null,null,b)
for(y=J.b7(a);y.H();)z.h(0,H.D(y.gN(y),b))
return z},
ds:function(a){var z,y,x
z={}
if(P.dX(a))return"{...}"
y=new P.aq("")
try{C.a.h($.$get$c7(),a)
x=y
x.a=x.gaV()+"{"
z.a=!0
J.eb(a,new P.j9(z,y))
z=y
z.a=z.gaV()+"}"}finally{z=$.$get$c7()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gaV()
return z.charCodeAt(0)==0?z:z},
lV:{"^":"lP;a,0b,0c,0d,0e,0f,r,$ti",
ga2:function(a){var z=new P.h_(this,this.r,this.$ti)
z.c=this.e
return z},
gm:function(a){return this.a},
X:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.e(z[b],"$iscW")!=null}else{y=this.fH(b)
return y}},
fH:function(a){var z=this.d
if(z==null)return!1
return this.cd(this.dN(z,a),a)>=0},
h:function(a,b){var z,y
H.D(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dS()
this.b=z}return this.dD(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dS()
this.c=y}return this.dD(y,b)}else return this.fz(0,b)},
fz:function(a,b){var z,y,x
H.D(b,H.y(this,0))
z=this.d
if(z==null){z=P.dS()
this.d=z}y=this.dG(b)
x=z[y]
if(x==null)z[y]=[this.c9(b)]
else{if(this.cd(x,b)>=0)return!1
x.push(this.c9(b))}return!0},
F:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.dT(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dT(this.c,b)
else return this.hn(0,b)},
hn:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.dN(z,b)
x=this.cd(y,b)
if(x<0)return!1
this.dZ(y.splice(x,1)[0])
return!0},
dD:function(a,b){H.D(b,H.y(this,0))
if(H.e(a[b],"$iscW")!=null)return!1
a[b]=this.c9(b)
return!0},
dT:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$iscW")
if(z==null)return!1
this.dZ(z)
delete a[b]
return!0},
dE:function(){this.r=this.r+1&67108863},
c9:function(a){var z,y
z=new P.cW(H.D(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dE()
return z},
dZ:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dE()},
dG:function(a){return J.cc(a)&0x3ffffff},
dN:function(a,b){return a[this.dG(b)]},
cd:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.K(a[y].a,b))return y
return-1},
u:{
dS:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cW:{"^":"b;a,0b,0c"},
h_:{"^":"b;a,b,0c,0d,$ti",
gN:function(a){return this.d},
H:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aW(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.D(z.a,H.y(this,0))
this.c=z.b
return!0}}}},
lP:{"^":"k1;"},
j4:{"^":"m:8;a,b,c",
$2:function(a,b){this.a.p(0,H.D(a,this.b),H.D(b,this.c))}},
cK:{"^":"lW;",$isi:1,$isd:1},
A:{"^":"b;$ti",
ga2:function(a){return new H.dr(a,this.gm(a),0,[H.bd(this,a,"A",0)])},
J:function(a,b){return this.j(a,b)},
jl:function(a,b){var z,y,x
z=H.c([],[H.bd(this,a,"A",0)])
C.a.sm(z,this.gm(a))
y=0
while(!0){x=this.gm(a)
if(typeof x!=="number")return H.o(x)
if(!(y<x))break
C.a.p(z,y,this.j(a,y));++y}return z},
dd:function(a){return this.jl(a,!0)},
aK:function(a,b,c,d){var z
H.D(d,H.bd(this,a,"A",0))
P.b_(b,c,this.gm(a),null,null,null)
for(z=b;z<c;++z)this.p(a,z,d)},
i:function(a){return P.dj(a,"[","]")}},
eU:{"^":"am;"},
j9:{"^":"m:8;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.k(a)
z.a=y+": "
z.a+=H.k(b)}},
am:{"^":"b;$ti",
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.bd(this,a,"am",0),H.bd(this,a,"am",1)]})
for(z=J.b7(this.gaa(a));z.H();){y=z.gN(z)
b.$2(y,this.j(a,y))}},
gm:function(a){return J.as(this.gaa(a))},
i:function(a){return P.ds(a)},
$isN:1},
mE:{"^":"b;$ti",
p:function(a,b,c){H.D(b,H.y(this,0))
H.D(c,H.y(this,1))
throw H.a(P.E("Cannot modify unmodifiable map"))}},
ja:{"^":"b;$ti",
j:function(a,b){return J.ea(this.a,b)},
p:function(a,b,c){J.d6(this.a,H.D(b,H.y(this,0)),H.D(c,H.y(this,1)))},
K:function(a,b){J.eb(this.a,H.l(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]}))},
gm:function(a){return J.as(this.a)},
i:function(a){return J.ad(this.a)},
$isN:1},
fG:{"^":"mF;a,$ti"},
k3:{"^":"b;$ti",
ac:function(a,b){var z
for(z=J.b7(H.v(b,"$isi",this.$ti,"$asi"));z.H();)this.h(0,z.gN(z))},
i:function(a){return P.dj(this,"{","}")},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.ef("index"))
if(b<0)H.q(P.a6(b,0,null,"index",null))
for(z=new P.h_(this,this.r,this.$ti),z.c=this.e,y=0;z.H();){x=z.d
if(b===y)return x;++y}throw H.a(P.Y(b,this,"index",null,y))},
$isi:1},
k1:{"^":"k3;"},
lW:{"^":"b+A;"},
mF:{"^":"ja+mE;$ti"}}],["","",,P,{"^":"",i1:{"^":"ce;a",
iQ:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.b_(c,d,b.length,null,null,null)
z=$.$get$fU()
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
if(q<=d){p=H.d2(C.b.I(b,s))
o=H.d2(C.b.I(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.f(z,n)
m=z[n]
if(m>=0){n=C.b.a1("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.aq("")
w.a+=C.b.w(b,x,y)
w.a+=H.bW(r)
x=s
continue}}throw H.a(P.a4("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.w(b,x,d)
k=l.length
if(v>=0)P.ei(b,u,d,v,t,k)
else{j=C.f.bu(k-1,4)+1
if(j===1)throw H.a(P.a4("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.ba(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.ei(b,u,d,v,t,i)
else{j=C.f.bu(i,4)
if(j===1)throw H.a(P.a4("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.ba(b,d,d,j===2?"==":"=")}return b},
$asce:function(){return[[P.d,P.n],P.h]},
u:{
ei:function(a,b,c,d,e,f){if(C.f.bu(f,4)!==0)throw H.a(P.a4("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.a4("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.a4("Invalid base64 padding, more than two '=' characters",a,b))}}},i2:{"^":"b9;a",
$asb9:function(){return[[P.d,P.n],P.h]}},ce:{"^":"b;$ti"},b9:{"^":"kj;$ti"},iw:{"^":"ce;",
$asce:function(){return[P.h,[P.d,P.n]]}},iK:{"^":"b;a,b,c,d,e",
i:function(a){return this.a}},iJ:{"^":"b9;a",
fI:function(a,b,c){var z,y,x,w,v,u
for(z=this.a,y=z.e,x=z.d,z=z.c,w=b,v=null;w<c;++w){if(w>=a.length)return H.f(a,w)
switch(a[w]){case"&":u="&amp;"
break
case'"':u=z?"&quot;":null
break
case"'":u=x?"&#39;":null
break
case"<":u="&lt;"
break
case">":u="&gt;"
break
case"/":u=y?"&#47;":null
break
default:u=null}if(u!=null){if(v==null)v=new P.aq("")
if(w>b)v.a+=C.b.w(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.hX(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asb9:function(){return[P.h,P.h]}},l1:{"^":"iw;a",
giu:function(){return C.L}},l8:{"^":"b9;",
bh:function(a,b,c){var z,y,x,w
z=a.length
P.b_(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.n_(0,0,x)
if(w.fN(a,b,z)!==z)w.e0(J.hQ(a,z-1),0)
return C.a2.c5(x,0,w.b)},
cI:function(a){return this.bh(a,0,null)},
$asb9:function(){return[P.h,[P.d,P.n]]}},n_:{"^":"b;a,b,c",
e0:function(a,b){var z,y,x,w,v
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
fN:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.a1(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.I(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.e0(w,C.b.I(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},l2:{"^":"b9;a",
bh:function(a,b,c){var z,y,x,w,v
H.v(a,"$isd",[P.n],"$asd")
z=P.l3(!1,a,b,c)
if(z!=null)return z
y=J.as(a)
P.b_(b,c,y,null,null,null)
x=new P.aq("")
w=new P.mX(!1,x,!0,0,0,0)
w.bh(a,b,y)
w.iB(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cI:function(a){return this.bh(a,0,null)},
$asb9:function(){return[[P.d,P.n],P.h]},
u:{
l3:function(a,b,c,d){H.v(b,"$isd",[P.n],"$asd")
if(b instanceof Uint8Array)return P.l4(!1,b,c,d)
return},
l4:function(a,b,c,d){var z,y,x
z=$.$get$fL()
if(z==null)return
y=0===c
if(y&&!0)return P.dM(z,b)
x=b.length
d=P.b_(c,d,x,null,null,null)
if(y&&d===x)return P.dM(z,b)
return P.dM(z,b.subarray(c,d))},
dM:function(a,b){if(P.l6(b))return
return P.l7(a,b)},
l7:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.ac(y)}return},
l6:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
l5:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.ac(y)}return}}},mX:{"^":"b;a,b,c,d,e,f",
iB:function(a,b,c){var z
H.v(b,"$isd",[P.n],"$asd")
if(this.e>0){z=P.a4("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
bh:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.v(a,"$isd",[P.n],"$asd")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.mZ(c)
v=new P.mY(this,b,c,a)
$label0$0:for(u=J.aV(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.c2()
if((r&192)!==128){q=P.a4("Bad UTF-8 encoding 0x"+C.f.bq(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.f(C.z,q)
if(z<=C.z[q]){q=P.a4("Overlong encoding of 0x"+C.f.bq(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.a4("Character outside valid Unicode range: 0x"+C.f.bq(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.bW(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.dl()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.R()
if(r<0){m=P.a4("Negative UTF-8 code unit: -0x"+C.f.bq(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.a4("Bad UTF-8 encoding 0x"+C.f.bq(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},mZ:{"^":"m:50;a",
$2:function(a,b){var z,y,x,w
H.v(a,"$isd",[P.n],"$asd")
z=this.a
for(y=J.aV(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.c2()
if((w&127)!==w)return x-b}return z-b}},mY:{"^":"m:48;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.cq(this.d,a,b)}}}],["","",,P,{"^":"",
cx:function(a,b,c){var z
H.l(b,{func:1,ret:P.n,args:[P.h]})
z=H.jJ(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.a4(a,null,null))},
iy:function(a){var z=J.L(a)
if(!!z.$ism)return z.i(a)
return"Instance of '"+H.br(a)+"'"},
j5:function(a,b,c,d){var z,y
H.D(b,d)
z=J.iQ(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.p(z,y,b)
return H.v(z,"$isd",[d],"$asd")},
j6:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.ga2(a);x.H();)C.a.h(y,H.D(x.gN(x),c))
if(b)return y
return H.v(J.bQ(y),"$isd",z,"$asd")},
cq:function(a,b,c){var z,y
z=P.n
H.v(a,"$isi",[z],"$asi")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.v(a,"$isbm",[z],"$asbm")
y=a.length
c=P.b_(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.R()
z=c<y}else z=!0
return H.f5(z?C.a.c5(a,b,c):a)}if(!!J.L(a).$isdy)return H.jL(a,b,P.b_(b,c,a.length,null,null,null))
return P.km(a,b,c)},
km:function(a,b,c){var z,y,x,w
H.v(a,"$isi",[P.n],"$asi")
if(b<0)throw H.a(P.a6(b,0,J.as(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a6(c,b,J.as(a),null,null))
y=J.b7(a)
for(x=0;x<b;++x)if(!y.H())throw H.a(P.a6(b,0,x,null,null))
w=[]
if(z)for(;y.H();)w.push(y.gN(y))
else for(x=b;x<c;++x){if(!y.H())throw H.a(P.a6(c,b,x,null,null))
w.push(y.gN(y))}return H.f5(w)},
jT:function(a,b,c){return new H.iS(a,H.iT(a,!1,!0,!1))},
fI:function(){var z=H.jB()
if(z!=null)return P.kU(z,0,null)
throw H.a(P.E("'Uri.base' is not supported"))},
cG:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ad(a)
if(typeof a==="string")return JSON.stringify(a)
return P.iy(a)},
r:function(a){return new P.fV(a)},
j7:function(a,b,c,d){var z,y
H.l(b,{func:1,ret:d,args:[P.n]})
z=H.c([],[d])
C.a.sm(z,a)
for(y=0;y<a;++y)C.a.p(z,y,b.$1(y))
return z},
e7:function(a){H.ob(a)},
kU:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.I(a,b+4)^58)*3|C.b.I(a,b)^100|C.b.I(a,b+1)^97|C.b.I(a,b+2)^116|C.b.I(a,b+3)^97)>>>0
if(y===0)return P.fH(b>0||c<c?C.b.w(a,b,c):a,5,null).gf1()
else if(y===32)return P.fH(C.b.w(a,z,c),0,null).gf1()}x=new Array(8)
x.fixed$length=Array
w=H.c(x,[P.n])
C.a.p(w,0,0)
x=b-1
C.a.p(w,1,x)
C.a.p(w,2,x)
C.a.p(w,7,x)
C.a.p(w,3,b)
C.a.p(w,4,b)
C.a.p(w,5,c)
C.a.p(w,6,c)
if(P.hn(a,b,c,0,w)>=14)C.a.p(w,7,c)
v=w[1]
if(typeof v!=="number")return v.jn()
if(v>=b)if(P.hn(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.D()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.R()
if(typeof r!=="number")return H.o(r)
if(q<r)r=q
if(typeof s!=="number")return s.R()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.R()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.R()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.ah(a,"..",s)))n=r>s+2&&C.b.ah(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.ah(a,"file",b)){if(u<=b){if(!C.b.ah(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.b.w(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.b.ba(a,s,r,"/");++r;++q;++c}else{a=C.b.w(a,b,s)+"/"+C.b.w(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.ah(a,"http",b)){if(x&&t+3===s&&C.b.ah(a,"80",t+1))if(b===0&&!0){a=C.b.ba(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.b.w(a,b,t)+C.b.w(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.b.ah(a,"https",b)){if(x&&t+4===s&&C.b.ah(a,"443",t+1))if(b===0&&!0){a=C.b.ba(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.b.w(a,b,t)+C.b.w(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.b.w(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.mg(a,v,u,t,s,r,q,o)}return P.mG(a,b,c,v,u,t,s,r,q,o)},
fK:function(a,b){var z=P.h
return C.a.iC(H.c(a.split("&"),[z]),P.dq(z,z),new P.kX(b),[P.N,P.h,P.h])},
kS:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.kT(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.a1(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.cx(C.b.w(a,v,w),null,null)
if(typeof s!=="number")return s.dl()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.f(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.cx(C.b.w(a,v,c),null,null)
if(typeof s!=="number")return s.dl()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.f(y,u)
y[u]=s
return y},
fJ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.kV(a)
y=new P.kW(z,a)
if(a.length<2)z.$1("address is too short")
x=H.c([],[P.n])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.a1(a,w)
if(s===58){if(w===b){++w
if(C.b.a1(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaz(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.kS(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.f(o,l)
o[l]=0
i=l+1
if(i>=n)return H.f(o,i)
o[i]=0
l+=2}else{i=C.f.b_(k,8)
if(l<0||l>=n)return H.f(o,l)
o[l]=i
i=l+1
if(i>=n)return H.f(o,i)
o[i]=k&255
l+=2}}return o},
ne:function(){var z,y,x,w,v
z=P.j7(22,new P.ng(),!0,P.V)
y=new P.nf(z)
x=new P.nh()
w=new P.ni()
v=H.e(y.$2(0,225),"$isV")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(14,225),"$isV")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(15,225),"$isV")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(1,225),"$isV")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(2,235),"$isV")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(3,235),"$isV")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(4,229),"$isV")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(5,229),"$isV")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(6,231),"$isV")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(7,231),"$isV")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.e(y.$2(8,8),"$isV"),"]",5)
v=H.e(y.$2(9,235),"$isV")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(16,235),"$isV")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(17,235),"$isV")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(10,235),"$isV")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(18,235),"$isV")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(19,235),"$isV")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(11,235),"$isV")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(12,236),"$isV")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.e(y.$2(13,237),"$isV")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.e(y.$2(20,245),"$isV"),"az",21)
v=H.e(y.$2(21,245),"$isV")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
hn:function(a,b,c,d,e){var z,y,x,w,v
H.v(e,"$isd",[P.n],"$asd")
z=$.$get$ho()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.f(z,d)
x=z[d]
w=C.b.I(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.f(x,w)
v=x[w]
d=v&31
C.a.p(e,v>>>5,y)}return d},
W:{"^":"b;"},
"+bool":0,
av:{"^":"b;a,b",
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.av))return!1
return this.a===b.a&&this.b===b.b},
gY:function(a){var z=this.a
return(z^C.f.b_(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.im(H.jI(this))
y=P.cf(H.jG(this))
x=P.cf(H.jC(this))
w=P.cf(H.jD(this))
v=P.cf(H.jF(this))
u=P.cf(H.jH(this))
t=P.io(H.jE(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
u:{
im:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
io:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cf:function(a){if(a>=10)return""+a
return"0"+a}}},
u:{"^":"a8;"},
"+double":0,
bi:{"^":"b;a",
k:function(a,b){return new P.bi(C.f.am(this.a*b))},
R:function(a,b){return C.f.R(this.a,H.e(b,"$isbi").a)},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.bi))return!1
return this.a===b.a},
gY:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.is()
y=this.a
if(y<0)return"-"+new P.bi(0-y).i(0)
x=z.$1(C.f.a9(y,6e7)%60)
w=z.$1(C.f.a9(y,1e6)%60)
v=new P.ir().$1(y%1e6)
return""+C.f.a9(y,36e8)+":"+H.k(x)+":"+H.k(w)+"."+H.k(v)},
u:{
eB:function(a,b,c,d,e,f){return new P.bi(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
ir:{"^":"m:27;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
is:{"^":"m:27;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
aa:{"^":"b;"},
f0:{"^":"aa;",
i:function(a){return"Throw of null."}},
aI:{"^":"aa;a,b,c,d",
gcc:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gcb:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.k(z)
w=this.gcc()+y+x
if(!this.a)return w
v=this.gcb()
u=P.cG(this.b)
return w+v+": "+H.k(u)},
u:{
cd:function(a){return new P.aI(!1,null,null,a)},
cA:function(a,b,c){return new P.aI(!0,a,b,c)},
ef:function(a){return new P.aI(!1,null,a,"Must not be null")}}},
cO:{"^":"aI;e,f,a,b,c,d",
gcc:function(){return"RangeError"},
gcb:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.k(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.k(z)
else if(x>z)y=": Not in range "+H.k(z)+".."+H.k(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.k(z)}return y},
u:{
co:function(a,b,c){return new P.cO(null,null,!0,a,b,"Value not in range")},
a6:function(a,b,c,d,e){return new P.cO(b,c,!0,a,d,"Invalid value")},
b_:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.o(a)
if(0<=a){if(typeof c!=="number")return H.o(c)
z=a>c}else z=!0
if(z)throw H.a(P.a6(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
z=b>c}else z=!0
if(z)throw H.a(P.a6(b,a,c,"end",f))
return b}return c}}},
iM:{"^":"aI;e,m:f>,a,b,c,d",
gcc:function(){return"RangeError"},
gcb:function(){if(J.hM(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.k(z)},
u:{
Y:function(a,b,c,d,e){var z=H.G(e!=null?e:J.as(b))
return new P.iM(b,z,!0,a,c,"Index out of range")}}},
kQ:{"^":"aa;a",
i:function(a){return"Unsupported operation: "+this.a},
u:{
E:function(a){return new P.kQ(a)}}},
kN:{"^":"aa;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
u:{
cs:function(a){return new P.kN(a)}}},
dC:{"^":"aa;a",
i:function(a){return"Bad state: "+this.a},
u:{
fd:function(a){return new P.dC(a)}}},
ic:{"^":"aa;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.k(P.cG(z))+"."},
u:{
aW:function(a){return new P.ic(a)}}},
jw:{"^":"b;",
i:function(a){return"Out of Memory"},
$isaa:1},
fb:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isaa:1},
ik:{"^":"aa;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fV:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
iF:{"^":"b;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.k(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.w(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.I(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.b.a1(w,s)
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
m=""}l=C.b.w(w,o,p)
return y+n+l+m+"\n"+C.b.k(" ",x-o+n.length)+"^\n"},
u:{
a4:function(a,b,c){return new P.iF(a,b,c)}}},
cg:{"^":"b;"},
n:{"^":"a8;"},
"+int":0,
i:{"^":"b;$ti",
dg:["fe",function(a,b){var z=H.al(this,"i",0)
return new H.dP(this,H.l(b,{func:1,ret:P.W,args:[z]}),[z])}],
gm:function(a){var z,y
z=this.ga2(this)
for(y=0;z.H();)++y
return y},
gaP:function(a){var z,y
z=this.ga2(this)
if(!z.H())throw H.a(H.cJ())
y=z.gN(z)
if(z.H())throw H.a(H.iP())
return y},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.ef("index"))
if(b<0)H.q(P.a6(b,0,null,"index",null))
for(z=this.ga2(this),y=0;z.H();){x=z.gN(z)
if(b===y)return x;++y}throw H.a(P.Y(b,this,"index",null,y))},
i:function(a){return P.iO(this,"(",")")}},
dk:{"^":"b;$ti"},
d:{"^":"b;$ti",$isi:1},
"+List":0,
N:{"^":"b;$ti"},
P:{"^":"b;",
gY:function(a){return P.b.prototype.gY.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a8:{"^":"b;"},
"+num":0,
b:{"^":";",
A:function(a,b){return this===b},
gY:function(a){return H.bV(this)},
i:function(a){return"Instance of '"+H.br(this)+"'"},
toString:function(){return this.i(this)}},
aE:{"^":"b;"},
h:{"^":"b;",$isf1:1},
"+String":0,
aq:{"^":"b;aV:a<",
gm:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$ispl:1,
u:{
ff:function(a,b,c){var z=J.b7(b)
if(!z.H())return a
if(c.length===0){do a+=H.k(z.gN(z))
while(z.H())}else{a+=H.k(z.gN(z))
for(;z.H();)a=a+c+H.k(z.gN(z))}return a}}},
kX:{"^":"m:47;a",
$2:function(a,b){var z,y,x,w
z=P.h
H.v(a,"$isN",[z,z],"$asN")
H.I(b)
y=J.aV(b).eJ(b,"=")
if(y===-1){if(b!=="")J.d6(a,P.dU(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.w(b,0,y)
w=C.b.au(b,y+1)
z=this.a
J.d6(a,P.dU(x,0,x.length,z,!0),P.dU(w,0,w.length,z,!0))}return a}},
kT:{"^":"m:46;a",
$2:function(a,b){throw H.a(P.a4("Illegal IPv4 address, "+a,this.a,b))}},
kV:{"^":"m:45;a",
$2:function(a,b){throw H.a(P.a4("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
kW:{"^":"m:44;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.cx(C.b.w(this.b,a,b),null,16)
if(typeof z!=="number")return z.R()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cX:{"^":"b;c4:a<,b,c,d,eV:e>,f,r,0x,0y,0z,0Q,0ch",
gf2:function(){return this.b},
gcT:function(a){var z=this.c
if(z==null)return""
if(C.b.a7(z,"["))return C.b.w(z,1,z.length-1)
return z},
gbX:function(a){var z=this.d
if(z==null)return P.hc(this.a)
return z},
gd6:function(a){var z=this.f
return z==null?"":z},
geE:function(){var z=this.r
return z==null?"":z},
d9:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.v(h,"$isN",[P.h,null],"$asN")
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
g=P.dT(g,0,0,h)
return new P.cX(i,j,c,f,d,g,this.r)},
eX:function(a,b){return this.d9(a,null,null,null,null,null,null,b,null,null)},
gd7:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.h
y=new P.fG(P.fK(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
geF:function(){return this.c!=null},
geI:function(){return this.f!=null},
geG:function(){return this.r!=null},
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
A:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.L(b)
if(!!z.$isdL){y=this.a
x=b.gc4()
if(y==null?x==null:y===x)if(this.c!=null===b.geF()){y=this.b
x=b.gf2()
if(y==null?x==null:y===x){y=this.gcT(this)
x=z.gcT(b)
if(y==null?x==null:y===x){y=this.gbX(this)
x=z.gbX(b)
if(y==null?x==null:y===x)if(this.e===z.geV(b)){y=this.f
x=y==null
if(!x===b.geI()){if(x)y=""
if(y===z.gd6(b)){z=this.r
y=z==null
if(!y===b.geG()){if(y)z=""
z=z===b.geE()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gY:function(a){var z=this.z
if(z==null){z=C.b.gY(this.i(0))
this.z=z}return z},
$isdL:1,
u:{
cv:function(a,b,c,d){var z,y,x,w,v,u
H.v(a,"$isd",[P.n],"$asd")
if(c===C.k){z=$.$get$hh().b
if(typeof b!=="string")H.q(H.ak(b))
z=z.test(b)}else z=!1
if(z)return b
H.D(b,H.al(c,"ce",0))
y=c.giu().cI(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.f(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.bW(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
mG:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.mR(a,b,d)
else{if(d===b)P.c2(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.mS(a,z,e-1):""
x=P.mL(a,e,f,!1)
if(typeof f!=="number")return f.D()
w=f+1
if(typeof g!=="number")return H.o(g)
v=w<g?P.mO(P.cx(C.b.w(a,w,g),new P.mH(a,f),null),j):null}else{y=""
x=null
v=null}u=P.mM(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.R()
t=h<i?P.dT(a,h+1,i,null):null
return new P.cX(j,y,x,v,u,t,i<c?P.mK(a,i+1,c):null)},
hc:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
c2:function(a,b,c){throw H.a(P.a4(c,a,b))},
mO:function(a,b){if(a!=null&&a===P.hc(b))return
return a},
mL:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.a1(a,b)===91){if(typeof c!=="number")return c.L()
z=c-1
if(C.b.a1(a,z)!==93)P.c2(a,b,"Missing end `]` to match `[` in host")
P.fJ(a,b+1,z)
return C.b.w(a,b,c).toLowerCase()}if(typeof c!=="number")return H.o(c)
y=b
for(;y<c;++y)if(C.b.a1(a,y)===58){P.fJ(a,b,c)
return"["+a+"]"}return P.mU(a,b,c)},
mU:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.o(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.a1(a,z)
if(v===37){u=P.hj(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.aq("")
s=C.b.w(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.w(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.f(C.C,t)
t=(C.C[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.aq("")
if(y<z){x.a+=C.b.w(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.f(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.c2(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.a1(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.aq("")
s=C.b.w(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.hd(v)
z+=q
y=z}}}}if(x==null)return C.b.w(a,b,c)
if(y<c){s=C.b.w(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
mR:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.hf(C.b.I(a,b)))P.c2(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.I(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.f(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.c2(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.w(a,b,c)
return P.mI(y?a.toLowerCase():a)},
mI:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mS:function(a,b,c){return P.c3(a,b,c,C.a_)},
mM:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.c3(a,b,c,C.D):C.w.k6(d,new P.mN(),P.h).n(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a7(w,"/"))w="/"+w
return P.mT(w,e,f)},
mT:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a7(a,"/"))return P.mV(a,!z||c)
return P.mW(a)},
dT:function(a,b,c,d){var z,y
z={}
H.v(d,"$isN",[P.h,null],"$asN")
if(a!=null){if(d!=null)throw H.a(P.cd("Both query and queryParameters specified"))
return P.c3(a,b,c,C.n)}if(d==null)return
y=new P.aq("")
z.a=""
d.K(0,new P.mP(new P.mQ(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
mK:function(a,b,c){return P.c3(a,b,c,C.n)},
hj:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.a1(a,b+1)
x=C.b.a1(a,z)
w=H.d2(y)
v=H.d2(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.f.b_(u,4)
if(z>=8)return H.f(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.bW(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.w(a,b,b+3).toUpperCase()
return},
hd:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.c(z,[P.n])
C.a.p(y,0,37)
C.a.p(y,1,C.b.I("0123456789ABCDEF",a>>>4))
C.a.p(y,2,C.b.I("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.c(z,[P.n])
for(v=0;--w,w>=0;x=128){u=C.f.hH(a,6*w)&63|x
C.a.p(y,v,37)
C.a.p(y,v+1,C.b.I("0123456789ABCDEF",u>>>4))
C.a.p(y,v+2,C.b.I("0123456789ABCDEF",u&15))
v+=3}}return P.cq(y,0,null)},
c3:function(a,b,c,d){var z=P.hi(a,b,c,H.v(d,"$isd",[P.n],"$asd"),!1)
return z==null?C.b.w(a,b,c):z},
hi:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.v(d,"$isd",[P.n],"$asd")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.R()
if(typeof c!=="number")return H.o(c)
if(!(y<c))break
c$0:{v=C.b.a1(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.f(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.hj(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.f(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.c2(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.a1(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.hd(v)}}if(w==null)w=new P.aq("")
w.a+=C.b.w(a,x,y)
w.a+=H.k(t)
if(typeof s!=="number")return H.o(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.R()
if(x<c)w.a+=C.b.w(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
hg:function(a){if(C.b.a7(a,"."))return!0
return C.b.eJ(a,"/.")!==-1},
mW:function(a){var z,y,x,w,v,u,t
if(!P.hg(a))return a
z=H.c([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.K(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.f(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.n(z,"/")},
mV:function(a,b){var z,y,x,w,v,u
if(!P.hg(a))return!b?P.he(a):a
z=H.c([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaz(z)!==".."){if(0>=z.length)return H.f(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.f(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaz(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.f(z,0)
C.a.p(z,0,P.he(z[0]))}return C.a.n(z,"/")},
he:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.hf(J.hN(a,0)))for(y=1;y<z;++y){x=C.b.I(a,y)
if(x===58)return C.b.w(a,0,y)+"%3A"+C.b.au(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.f(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
mJ:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.I(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.cd("Invalid URL encoding"))}}return z},
dU:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.ca(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.I(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.k!==d)v=!1
else v=!0
if(v)return y.w(a,b,c)
else u=new H.w(y.w(a,b,c))}else{u=H.c([],[P.n])
for(x=b;x<c;++x){w=y.I(a,x)
if(w>127)throw H.a(P.cd("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.cd("Truncated URI"))
C.a.h(u,P.mJ(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.v(u,"$isd",[P.n],"$asd")
return new P.l2(!1).cI(u)},
hf:function(a){var z=a|32
return 97<=z&&z<=122}}},
mH:{"^":"m:43;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.D()
throw H.a(P.a4("Invalid port",this.a,z+1))}},
mN:{"^":"m:19;",
$1:function(a){return P.cv(C.a0,a,C.k,!1)}},
mQ:{"^":"m:18;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.k(P.cv(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.k(P.cv(C.p,b,C.k,!0))}}},
mP:{"^":"m:42;a",
$2:function(a,b){var z,y
H.I(a)
if(b==null||typeof b==="string")this.a.$2(a,H.I(b))
else for(z=J.b7(H.hE(b,"$isi")),y=this.a;z.H();)y.$2(a,H.I(z.gN(z)))}},
kR:{"^":"b;a,b,c",
gf1:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
z=z[0]+1
x=C.b.eK(y,"?",z)
w=y.length
if(x>=0){v=P.c3(y,x+1,w,C.n)
w=x}else v=null
z=new P.lu(this,"data",null,null,null,P.c3(y,z,w,C.D),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
u:{
fH:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.c([b-1],[P.n])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.I(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.a4("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.a4("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.I(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaz(z)
if(v!==44||x!==t+7||!C.b.ah(a,"base64",t+1))throw H.a(P.a4("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.I.iQ(0,a,s,y)
else{r=P.hi(a,s,y,C.n,!0)
if(r!=null)a=C.b.ba(a,s,y,r)}return new P.kR(a,z,c)}}},
ng:{"^":"m:40;",
$1:function(a){return new Uint8Array(96)}},
nf:{"^":"m:37;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.f(z,a)
z=z[a]
J.hR(z,0,96,b)
return z}},
nh:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.I(b,y)^96
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
ni:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=C.b.I(b,0),y=C.b.I(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
mg:{"^":"b;a,b,c,d,e,f,r,x,0y",
geF:function(){return this.c>0},
geH:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.D()
y=this.e
if(typeof y!=="number")return H.o(y)
y=z+1<y
z=y}else z=!1
return z},
geI:function(){var z=this.f
if(typeof z!=="number")return z.R()
return z<this.r},
geG:function(){return this.r<this.a.length},
gdO:function(){return this.b===4&&C.b.a7(this.a,"http")},
gdP:function(){return this.b===5&&C.b.a7(this.a,"https")},
gc4:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdO()){this.x="http"
z="http"}else if(this.gdP()){this.x="https"
z="https"}else if(z===4&&C.b.a7(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a7(this.a,"package")){this.x="package"
z="package"}else{z=C.b.w(this.a,0,z)
this.x=z}return z},
gf2:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.w(this.a,y,z-1):""},
gcT:function(a){var z=this.c
return z>0?C.b.w(this.a,z,this.d):""},
gbX:function(a){var z
if(this.geH()){z=this.d
if(typeof z!=="number")return z.D()
return P.cx(C.b.w(this.a,z+1,this.e),null,null)}if(this.gdO())return 80
if(this.gdP())return 443
return 0},
geV:function(a){return C.b.w(this.a,this.e,this.f)},
gd6:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.R()
return z<y?C.b.w(this.a,z+1,y):""},
geE:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.au(y,z+1):""},
gd7:function(){var z=this.f
if(typeof z!=="number")return z.R()
if(z>=this.r)return C.a1
z=P.h
return new P.fG(P.fK(this.gd6(this),C.k),[z,z])},
d9:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.v(h,"$isN",[P.h,null],"$asN")
i=this.gc4()
z=i==="file"
y=this.c
j=y>0?C.b.w(this.a,this.b+3,y):""
f=this.geH()?this.gbX(this):null
y=this.c
if(y>0)c=C.b.w(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.w(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a7(d,"/"))d="/"+d
g=P.dT(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.au(y,x+1)
return new P.cX(i,j,c,f,d,g,b)},
eX:function(a,b){return this.d9(a,null,null,null,null,null,null,b,null,null)},
gY:function(a){var z=this.y
if(z==null){z=C.b.gY(this.a)
this.y=z}return z},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.L(b)
if(!!z.$isdL)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdL:1},
lu:{"^":"cX;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
ee:function(a){var z=document.createElement("a")
return z},
de:function(a,b){var z=document.createElement("canvas")
return z},
it:function(a,b,c){var z,y
z=document.body
y=(z&&C.v).aq(z,a,b,c)
y.toString
z=W.H
z=new H.dP(new W.az(y),H.l(new W.iu(),{func:1,ret:P.W,args:[z]}),[z])
return H.e(z.gaP(z),"$isX")},
iv:function(a){H.e(a,"$isah")
return"wheel"},
bO:function(a){var z,y,x
z="element tag unavailable"
try{y=J.hU(a)
if(typeof y==="string")z=a.tagName}catch(x){H.ac(x)}return z},
iN:function(a){var z,y,x
y=document.createElement("input")
z=H.e(y,"$iseK")
try{J.hW(z,a)}catch(x){H.ac(x)}return z},
cU:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fZ:function(a,b,c,d){var z,y
z=W.cU(W.cU(W.cU(W.cU(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
hr:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.a_
if(z===C.j)return a
return z.e9(a,b)},
a1:{"^":"X;","%":"HTMLAudioElement|HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
on:{"^":"t;0m:length=","%":"AccessibleNodeList"},
oo:{"^":"a1;0a6:type}",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
op:{"^":"a1;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
ej:{"^":"a1;",$isej:1,"%":"HTMLBaseElement"},
d9:{"^":"t;",$isd9:1,"%":";Blob"},
cB:{"^":"a1;",$iscB:1,"%":"HTMLBodyElement"},
ov:{"^":"a1;0a6:type}","%":"HTMLButtonElement"},
dd:{"^":"a1;",
c3:function(a,b,c){if(c!=null)return a.getContext(b,P.nu(c,null))
return a.getContext(b)},
f6:function(a,b){return this.c3(a,b,null)},
$isdd:1,
"%":"HTMLCanvasElement"},
eo:{"^":"t;",$iseo:1,"%":"CanvasRenderingContext2D"},
ox:{"^":"H;0m:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
oz:{"^":"ij;0m:length=","%":"CSSPerspective"},
bg:{"^":"t;",$isbg:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
oA:{"^":"lt;0m:length=",
f7:function(a,b){var z=a.getPropertyValue(this.fD(a,b))
return z==null?"":z},
fD:function(a,b){var z,y
z=$.$get$et()
y=z[b]
if(typeof y==="string")return y
y=this.hI(a,b)
z[b]=y
return y},
hI:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.ip()+b
if(z in a)return z
return b},
gcD:function(a){return a.bottom},
gay:function(a){return a.height},
gb5:function(a){return a.left},
gbm:function(a){return a.right},
gbr:function(a){return a.top},
gaB:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
ii:{"^":"b;",
gb5:function(a){return this.f7(a,"left")}},
eu:{"^":"t;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
ij:{"^":"t;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
oB:{"^":"eu;0m:length=","%":"CSSTransformValue"},
oC:{"^":"eu;0m:length=","%":"CSSUnparsedValue"},
oD:{"^":"t;0m:length=","%":"DataTransferItemList"},
bh:{"^":"a1;",$isbh:1,"%":"HTMLDivElement"},
oE:{"^":"t;",
i:function(a){return String(a)},
"%":"DOMException"},
oF:{"^":"lw;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.v(c,"$isae",[P.a8],"$asae")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[[P.ae,P.a8]]},
$asA:function(){return[[P.ae,P.a8]]},
$isi:1,
$asi:function(){return[[P.ae,P.a8]]},
$isd:1,
$asd:function(){return[[P.ae,P.a8]]},
$asF:function(){return[[P.ae,P.a8]]},
"%":"ClientRectList|DOMRectList"},
iq:{"^":"t;",
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gaB(a))+" x "+H.k(this.gay(a))},
A:function(a,b){var z
if(b==null)return!1
z=H.c8(b,"$isae",[P.a8],"$asae")
if(!z)return!1
z=J.aH(b)
return a.left===z.gb5(b)&&a.top===z.gbr(b)&&this.gaB(a)===z.gaB(b)&&this.gay(a)===z.gay(b)},
gY:function(a){return W.fZ(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gaB(a)&0x1FFFFFFF,this.gay(a)&0x1FFFFFFF)},
gcD:function(a){return a.bottom},
gay:function(a){return a.height},
gb5:function(a){return a.left},
gbm:function(a){return a.right},
gbr:function(a){return a.top},
gaB:function(a){return a.width},
$isae:1,
$asae:function(){return[P.a8]},
"%":";DOMRectReadOnly"},
oG:{"^":"ly;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.I(c)
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[P.h]},
$asA:function(){return[P.h]},
$isi:1,
$asi:function(){return[P.h]},
$isd:1,
$asd:function(){return[P.h]},
$asF:function(){return[P.h]},
"%":"DOMStringList"},
oH:{"^":"t;0m:length=","%":"DOMTokenList"},
ls:{"^":"cK;dL:a<,b",
gm:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return H.e(z[b],"$isX")},
p:function(a,b,c){var z
H.G(b)
H.e(c,"$isX")
z=this.b
if(b>>>0!==b||b>=z.length)return H.f(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga2:function(a){var z=this.dd(this)
return new J.aB(z,z.length,0,[H.y(z,0)])},
aK:function(a,b,c,d){throw H.a(P.cs(null))},
$asA:function(){return[W.X]},
$asi:function(){return[W.X]},
$asd:function(){return[W.X]}},
X:{"^":"H;0jg:tagName=",
gig:function(a){return new W.lz(a)},
gcH:function(a){return new W.ls(a,a.children)},
gec:function(a){return P.jP(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a8)},
i:function(a){return a.localName},
aq:["c6",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.eE
if(z==null){z=H.c([],[W.aO])
y=new W.eZ(z)
C.a.h(z,W.fX(null))
C.a.h(z,W.h7())
$.eE=y
d=y}else d=z
z=$.eD
if(z==null){z=new W.hk(d)
$.eD=z
c=z}else{z.a=d
c=z}}if($.aX==null){z=document
y=z.implementation.createHTMLDocument("")
$.aX=y
$.dh=y.createRange()
y=$.aX
y.toString
y=y.createElement("base")
H.e(y,"$isej")
y.href=z.baseURI
$.aX.head.appendChild(y)}z=$.aX
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.e(y,"$iscB")}z=$.aX
if(!!this.$iscB)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
$.aX.body.appendChild(x)}if("createContextualFragment" in window.Range.prototype&&!C.a.X(C.Z,a.tagName)){$.dh.selectNodeContents(x)
w=$.dh.createContextualFragment(b)}else{x.innerHTML=b
w=$.aX.createDocumentFragment()
for(;z=x.firstChild,z!=null;)w.appendChild(z)}z=$.aX.body
if(x==null?z!=null:x!==z)J.ed(x)
c.dm(w)
document.adoptNode(w)
return w},function(a,b,c){return this.aq(a,b,c,null)},"io",null,null,"gk0",5,5,null],
fb:function(a,b,c,d){a.textContent=null
a.appendChild(this.aq(a,b,c,d))},
fa:function(a,b){return this.fb(a,b,null,null)},
$isX:1,
"%":";Element"},
iu:{"^":"m:24;",
$1:function(a){return!!J.L(H.e(a,"$isH")).$isX}},
oI:{"^":"a1;0a6:type}","%":"HTMLEmbedElement"},
ag:{"^":"t;",$isag:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
ah:{"^":"t;",
e2:["fc",function(a,b,c,d){H.l(c,{func:1,args:[W.ag]})
if(c!=null)this.fA(a,b,c,!1)}],
fA:function(a,b,c,d){return a.addEventListener(b,H.bI(H.l(c,{func:1,args:[W.ag]}),1),!1)},
$isah:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;h4|h5|h8|h9"},
ba:{"^":"d9;",$isba:1,"%":"File"},
eG:{"^":"lE;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.e(c,"$isba")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.ba]},
$asA:function(){return[W.ba]},
$isi:1,
$asi:function(){return[W.ba]},
$isd:1,
$asd:function(){return[W.ba]},
$iseG:1,
$asF:function(){return[W.ba]},
"%":"FileList"},
oJ:{"^":"ah;0m:length=","%":"FileWriter"},
oK:{"^":"a1;0m:length=","%":"HTMLFormElement"},
bl:{"^":"t;",$isbl:1,"%":"Gamepad"},
oL:{"^":"t;0m:length=","%":"History"},
oM:{"^":"lR;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.e(c,"$isH")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.H]},
$asA:function(){return[W.H]},
$isi:1,
$asi:function(){return[W.H]},
$isd:1,
$asd:function(){return[W.H]},
$asF:function(){return[W.H]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
ch:{"^":"t;0ed:data=",$isch:1,"%":"ImageData"},
eJ:{"^":"a1;",$iseJ:1,"%":"HTMLImageElement"},
eK:{"^":"a1;0a6:type}",$iseK:1,"%":"HTMLInputElement"},
bR:{"^":"dI;",$isbR:1,"%":"KeyboardEvent"},
oQ:{"^":"a1;0a6:type}","%":"HTMLLinkElement"},
oR:{"^":"t;",
i:function(a){return String(a)},
"%":"Location"},
oS:{"^":"t;0m:length=","%":"MediaList"},
oT:{"^":"ah;",
e2:function(a,b,c,d){H.l(c,{func:1,args:[W.ag]})
if(b==="message")a.start()
this.fc(a,b,c,!1)},
"%":"MessagePort"},
oU:{"^":"lX;",
j:function(a,b){return P.b6(a.get(H.I(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b6(y.value[1]))}},
gaa:function(a){var z=H.c([],[P.h])
this.K(a,new W.jm(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.E("Not supported"))},
$asam:function(){return[P.h,null]},
$isN:1,
$asN:function(){return[P.h,null]},
"%":"MIDIInputMap"},
jm:{"^":"m:9;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oV:{"^":"lY;",
j:function(a,b){return P.b6(a.get(H.I(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b6(y.value[1]))}},
gaa:function(a){var z=H.c([],[P.h])
this.K(a,new W.jn(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.E("Not supported"))},
$asam:function(){return[P.h,null]},
$isN:1,
$asN:function(){return[P.h,null]},
"%":"MIDIOutputMap"},
jn:{"^":"m:9;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bp:{"^":"t;",$isbp:1,"%":"MimeType"},
oW:{"^":"m_;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.e(c,"$isbp")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bp]},
$asA:function(){return[W.bp]},
$isi:1,
$asi:function(){return[W.bp]},
$isd:1,
$asd:function(){return[W.bp]},
$asF:function(){return[W.bp]},
"%":"MimeTypeArray"},
aC:{"^":"dI;",$isaC:1,"%":"PointerEvent;DragEvent|MouseEvent"},
az:{"^":"cK;a",
gaP:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.fd("No elements"))
if(y>1)throw H.a(P.fd("More than one element"))
return z.firstChild},
ac:function(a,b){var z,y,x,w
H.v(b,"$isi",[W.H],"$asi")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
p:function(a,b,c){var z,y
H.G(b)
H.e(c,"$isH")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.f(y,b)
z.replaceChild(c,y[b])},
ga2:function(a){var z=this.a.childNodes
return new W.eH(z,z.length,-1,[H.bd(C.a3,z,"F",0)])},
aK:function(a,b,c,d){throw H.a(P.E("Cannot fillRange on Node list"))},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return z[b]},
$asA:function(){return[W.H]},
$asi:function(){return[W.H]},
$asd:function(){return[W.H]}},
H:{"^":"ah;0d4:previousSibling=",
j5:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
j9:function(a,b){var z,y
try{z=a.parentNode
J.hO(z,b,a)}catch(y){H.ac(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.fd(a):z},
hq:function(a,b,c){return a.replaceChild(b,c)},
$isH:1,
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
p2:{"^":"t;",
j2:[function(a){return a.previousNode()},"$0","gd4",1,0,26],
"%":"NodeIterator"},
jr:{"^":"m1;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.e(c,"$isH")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.H]},
$asA:function(){return[W.H]},
$isi:1,
$asi:function(){return[W.H]},
$isd:1,
$asd:function(){return[W.H]},
$asF:function(){return[W.H]},
"%":"NodeList|RadioNodeList"},
p5:{"^":"a1;0a6:type}","%":"HTMLOListElement"},
p6:{"^":"a1;0a6:type}","%":"HTMLObjectElement"},
bq:{"^":"t;0m:length=",$isbq:1,"%":"Plugin"},
p9:{"^":"m5;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.e(c,"$isbq")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bq]},
$asA:function(){return[W.bq]},
$isi:1,
$asi:function(){return[W.bq]},
$isd:1,
$asd:function(){return[W.bq]},
$asF:function(){return[W.bq]},
"%":"PluginArray"},
pb:{"^":"t;0a6:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
pc:{"^":"mb;",
j:function(a,b){return P.b6(a.get(H.I(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b6(y.value[1]))}},
gaa:function(a){var z=H.c([],[P.h])
this.K(a,new W.jZ(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.E("Not supported"))},
$asam:function(){return[P.h,null]},
$isN:1,
$asN:function(){return[P.h,null]},
"%":"RTCStatsReport"},
jZ:{"^":"m:9;a",
$2:function(a,b){return C.a.h(this.a,a)}},
pd:{"^":"a1;0a6:type}","%":"HTMLScriptElement"},
pe:{"^":"a1;0m:length=","%":"HTMLSelectElement"},
bs:{"^":"ah;",$isbs:1,"%":"SourceBuffer"},
pf:{"^":"h5;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.e(c,"$isbs")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bs]},
$asA:function(){return[W.bs]},
$isi:1,
$asi:function(){return[W.bs]},
$isd:1,
$asd:function(){return[W.bs]},
$asF:function(){return[W.bs]},
"%":"SourceBufferList"},
pg:{"^":"a1;0a6:type}","%":"HTMLSourceElement"},
bt:{"^":"t;",$isbt:1,"%":"SpeechGrammar"},
ph:{"^":"mi;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.e(c,"$isbt")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bt]},
$asA:function(){return[W.bt]},
$isi:1,
$asi:function(){return[W.bt]},
$isd:1,
$asd:function(){return[W.bt]},
$asF:function(){return[W.bt]},
"%":"SpeechGrammarList"},
bu:{"^":"t;0m:length=",$isbu:1,"%":"SpeechRecognitionResult"},
pj:{"^":"ml;",
j:function(a,b){return a.getItem(H.I(b))},
p:function(a,b,c){a.setItem(b,H.I(c))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gaa:function(a){var z=H.c([],[P.h])
this.K(a,new W.ki(z))
return z},
gm:function(a){return a.length},
$asam:function(){return[P.h,P.h]},
$isN:1,
$asN:function(){return[P.h,P.h]},
"%":"Storage"},
ki:{"^":"m:18;a",
$2:function(a,b){return C.a.h(this.a,a)}},
pm:{"^":"a1;0a6:type}","%":"HTMLStyleElement"},
bv:{"^":"t;",$isbv:1,"%":"CSSStyleSheet|StyleSheet"},
dE:{"^":"a1;",$isdE:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
kn:{"^":"a1;",
aq:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.c6(a,b,c,d)
z=W.it("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.az(y).ac(0,new W.az(z))
return y},
"%":"HTMLTableElement"},
po:{"^":"a1;",
aq:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.c6(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.F.aq(z.createElement("table"),b,c,d)
z.toString
z=new W.az(z)
x=z.gaP(z)
x.toString
z=new W.az(x)
w=z.gaP(z)
y.toString
w.toString
new W.az(y).ac(0,new W.az(w))
return y},
"%":"HTMLTableRowElement"},
pp:{"^":"a1;",
aq:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.c6(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.F.aq(z.createElement("table"),b,c,d)
z.toString
z=new W.az(z)
x=z.gaP(z)
y.toString
x.toString
new W.az(y).ac(0,new W.az(x))
return y},
"%":"HTMLTableSectionElement"},
fh:{"^":"a1;",$isfh:1,"%":"HTMLTemplateElement"},
bw:{"^":"ah;",$isbw:1,"%":"TextTrack"},
bx:{"^":"ah;",$isbx:1,"%":"TextTrackCue|VTTCue"},
pr:{"^":"mv;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.e(c,"$isbx")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bx]},
$asA:function(){return[W.bx]},
$isi:1,
$asi:function(){return[W.bx]},
$isd:1,
$asd:function(){return[W.bx]},
$asF:function(){return[W.bx]},
"%":"TextTrackCueList"},
ps:{"^":"h9;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.e(c,"$isbw")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bw]},
$asA:function(){return[W.bw]},
$isi:1,
$asi:function(){return[W.bw]},
$isd:1,
$asd:function(){return[W.bw]},
$asF:function(){return[W.bw]},
"%":"TextTrackList"},
pt:{"^":"t;0m:length=","%":"TimeRanges"},
bz:{"^":"t;",$isbz:1,"%":"Touch"},
bA:{"^":"dI;",$isbA:1,"%":"TouchEvent"},
pu:{"^":"mB;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.e(c,"$isbz")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bz]},
$asA:function(){return[W.bz]},
$isi:1,
$asi:function(){return[W.bz]},
$isd:1,
$asd:function(){return[W.bz]},
$asF:function(){return[W.bz]},
"%":"TouchList"},
pv:{"^":"t;0m:length=","%":"TrackDefaultList"},
px:{"^":"t;",
j2:[function(a){return a.previousNode()},"$0","gd4",1,0,26],
"%":"TreeWalker"},
dI:{"^":"ag;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
pz:{"^":"t;",
i:function(a){return String(a)},
"%":"URL"},
pA:{"^":"ah;0m:length=","%":"VideoTrackList"},
c0:{"^":"aC;",
gir:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.E("deltaY is not supported"))},
giq:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.E("deltaX is not supported"))},
$isc0:1,
"%":"WheelEvent"},
lk:{"^":"ah;",
hs:function(a,b){return a.requestAnimationFrame(H.bI(H.l(b,{func:1,ret:-1,args:[P.a8]}),1))},
fM:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fT:{"^":"H;",$isfT:1,"%":"Attr"},
pF:{"^":"n3;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.e(c,"$isbg")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bg]},
$asA:function(){return[W.bg]},
$isi:1,
$asi:function(){return[W.bg]},
$isd:1,
$asd:function(){return[W.bg]},
$asF:function(){return[W.bg]},
"%":"CSSRuleList"},
pG:{"^":"iq;",
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
A:function(a,b){var z
if(b==null)return!1
z=H.c8(b,"$isae",[P.a8],"$asae")
if(!z)return!1
z=J.aH(b)
return a.left===z.gb5(b)&&a.top===z.gbr(b)&&a.width===z.gaB(b)&&a.height===z.gay(b)},
gY:function(a){return W.fZ(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gay:function(a){return a.height},
gaB:function(a){return a.width},
"%":"ClientRect|DOMRect"},
pI:{"^":"n5;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.e(c,"$isbl")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bl]},
$asA:function(){return[W.bl]},
$isi:1,
$asi:function(){return[W.bl]},
$isd:1,
$asd:function(){return[W.bl]},
$asF:function(){return[W.bl]},
"%":"GamepadList"},
pL:{"^":"n7;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.e(c,"$isH")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.H]},
$asA:function(){return[W.H]},
$isi:1,
$asi:function(){return[W.H]},
$isd:1,
$asd:function(){return[W.H]},
$asF:function(){return[W.H]},
"%":"MozNamedAttrMap|NamedNodeMap"},
pM:{"^":"n9;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.e(c,"$isbu")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bu]},
$asA:function(){return[W.bu]},
$isi:1,
$asi:function(){return[W.bu]},
$isd:1,
$asd:function(){return[W.bu]},
$asF:function(){return[W.bu]},
"%":"SpeechRecognitionResultList"},
pN:{"^":"nb;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.G(b)
H.e(c,"$isbv")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bv]},
$asA:function(){return[W.bv]},
$isi:1,
$asi:function(){return[W.bv]},
$isd:1,
$asd:function(){return[W.bv]},
$asF:function(){return[W.bv]},
"%":"StyleSheetList"},
lq:{"^":"eU;dL:a<",
K:function(a,b){var z,y,x,w,v
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(z=this.gaa(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.B)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gaa:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.h])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
v=H.e(z[w],"$isfT")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asam:function(){return[P.h,P.h]},
$asN:function(){return[P.h,P.h]}},
lz:{"^":"lq;a",
j:function(a,b){return this.a.getAttribute(H.I(b))},
p:function(a,b,c){this.a.setAttribute(b,H.I(c))},
gm:function(a){return this.gaa(this).length}},
lA:{"^":"dD;a,b,c,$ti",
iM:function(a,b,c,d){var z=H.y(this,0)
H.l(a,{func:1,ret:-1,args:[z]})
H.l(c,{func:1,ret:-1})
return W.a7(this.a,this.b,a,!1,z)}},
pH:{"^":"lA;a,b,c,$ti"},
lB:{"^":"fe;a,b,c,d,e,$ti",
hM:function(){var z=this.d
if(z!=null&&this.a<=0)J.hP(this.b,this.c,z,!1)},
u:{
a7:function(a,b,c,d,e){var z=c==null?null:W.hr(new W.lC(c),W.ag)
z=new W.lB(0,a,b,z,!1,[e])
z.hM()
return z}}},
lC:{"^":"m:10;a",
$1:function(a){return this.a.$1(H.e(a,"$isag"))}},
cu:{"^":"b;a",
fq:function(a){var z,y
z=$.$get$dR()
if(z.gcX(z)){for(y=0;y<262;++y)z.p(0,C.Y[y],W.nL())
for(y=0;y<12;++y)z.p(0,C.t[y],W.nM())}},
b0:function(a){return $.$get$fY().X(0,W.bO(a))},
aH:function(a,b,c){var z,y,x
z=W.bO(a)
y=$.$get$dR()
x=y.j(0,H.k(z)+"::"+b)
if(x==null)x=y.j(0,"*::"+b)
if(x==null)return!1
return H.dY(x.$4(a,b,c,this))},
$isaO:1,
u:{
fX:function(a){var z,y
z=W.ee(null)
y=window.location
z=new W.cu(new W.mc(z,y))
z.fq(a)
return z},
pJ:[function(a,b,c,d){H.e(a,"$isX")
H.I(b)
H.I(c)
H.e(d,"$iscu")
return!0},"$4","nL",16,0,22],
pK:[function(a,b,c,d){var z,y,x,w,v
H.e(a,"$isX")
H.I(b)
H.I(c)
z=H.e(d,"$iscu").a
y=z.a
y.href=c
x=y.hostname
z=z.b
w=z.hostname
if(x==null?w==null:x===w){w=y.port
v=z.port
if(w==null?v==null:w===v){w=y.protocol
z=z.protocol
z=w==null?z==null:w===z}else z=!1}else z=!1
if(!z)if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","nM",16,0,22]}},
F:{"^":"b;$ti",
ga2:function(a){return new W.eH(a,this.gm(a),-1,[H.bd(this,a,"F",0)])},
aK:function(a,b,c,d){H.D(d,H.bd(this,a,"F",0))
throw H.a(P.E("Cannot modify an immutable List."))}},
eZ:{"^":"b;a",
b0:function(a){return C.a.e7(this.a,new W.jt(a))},
aH:function(a,b,c){return C.a.e7(this.a,new W.js(a,b,c))},
$isaO:1},
jt:{"^":"m:28;a",
$1:function(a){return H.e(a,"$isaO").b0(this.a)}},
js:{"^":"m:28;a,b,c",
$1:function(a){return H.e(a,"$isaO").aH(this.a,this.b,this.c)}},
md:{"^":"b;",
fu:function(a,b,c,d){var z,y,x
this.a.ac(0,c)
z=b.dg(0,new W.me())
y=b.dg(0,new W.mf())
this.b.ac(0,z)
x=this.c
x.ac(0,C.A)
x.ac(0,y)},
b0:function(a){return this.a.X(0,W.bO(a))},
aH:["fh",function(a,b,c){var z,y
z=W.bO(a)
y=this.c
if(y.X(0,H.k(z)+"::"+b))return this.d.ic(c)
else if(y.X(0,"*::"+b))return this.d.ic(c)
else{y=this.b
if(y.X(0,H.k(z)+"::"+b))return!0
else if(y.X(0,"*::"+b))return!0
else if(y.X(0,H.k(z)+"::*"))return!0
else if(y.X(0,"*::*"))return!0}return!1}],
$isaO:1},
me:{"^":"m:16;",
$1:function(a){return!C.a.X(C.t,H.I(a))}},
mf:{"^":"m:16;",
$1:function(a){return C.a.X(C.t,H.I(a))}},
ms:{"^":"md;e,a,b,c,d",
aH:function(a,b,c){if(this.fh(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.X(0,b)
return!1},
u:{
h7:function(){var z,y,x,w,v
z=P.h
y=P.eS(C.r,z)
x=H.y(C.r,0)
w=H.l(new W.mt(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.ms(y,P.cn(null,null,null,z),P.cn(null,null,null,z),P.cn(null,null,null,z),null)
y.fu(null,new H.jd(C.r,w,[x,z]),v,null)
return y}}},
mt:{"^":"m:19;",
$1:function(a){return"TEMPLATE::"+H.k(H.I(a))}},
mr:{"^":"b;",
b0:function(a){var z=J.L(a)
if(!!z.$isf8)return!1
z=!!z.$iscP
if(z&&W.bO(a)==="foreignObject")return!1
if(z)return!0
return!1},
aH:function(a,b,c){if(b==="is"||C.b.a7(b,"on"))return!1
return this.b0(a)},
$isaO:1},
eH:{"^":"b;a,b,c,0d,$ti",
H:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.ea(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gN:function(a){return this.d}},
aO:{"^":"b;"},
mc:{"^":"b;a,b",$ispy:1},
hk:{"^":"b;a",
dm:function(a){new W.n0(this).$2(a,null)},
be:function(a,b){if(b==null)J.ed(a)
else b.removeChild(a)},
hy:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.hS(a)
x=y.gdL().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.ac(t)}v="element unprintable"
try{v=J.ad(a)}catch(t){H.ac(t)}try{u=W.bO(a)
this.hx(H.e(a,"$isX"),b,z,v,u,H.e(y,"$isN"),H.I(x))}catch(t){if(H.ac(t) instanceof P.aI)throw t
else{this.be(a,b)
window
s="Removing corrupted element "+H.k(v)
if(typeof console!="undefined")window.console.warn(s)}}},
hx:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.be(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.b0(a)){this.be(a,b)
window
z="Removing disallowed element <"+H.k(e)+"> from "+H.k(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.aH(a,"is",g)){this.be(a,b)
window
z="Removing disallowed type extension <"+H.k(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gaa(f)
y=H.c(z.slice(0),[H.y(z,0)])
for(x=f.gaa(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.f(y,x)
w=y[x]
if(!this.a.aH(a,J.hY(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.k(e)+" "+w+'="'+H.k(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.L(a).$isfh)this.dm(a.content)},
$isp3:1},
n0:{"^":"m:36;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.hy(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.be(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.hT(z)}catch(w){H.ac(w)
v=H.e(z,"$isH")
if(x){u=v.parentNode
if(u!=null)u.removeChild(v)}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.e(y,"$isH")}}},
lt:{"^":"t+ii;"},
lv:{"^":"t+A;"},
lw:{"^":"lv+F;"},
lx:{"^":"t+A;"},
ly:{"^":"lx+F;"},
lD:{"^":"t+A;"},
lE:{"^":"lD+F;"},
lQ:{"^":"t+A;"},
lR:{"^":"lQ+F;"},
lX:{"^":"t+am;"},
lY:{"^":"t+am;"},
lZ:{"^":"t+A;"},
m_:{"^":"lZ+F;"},
m0:{"^":"t+A;"},
m1:{"^":"m0+F;"},
m4:{"^":"t+A;"},
m5:{"^":"m4+F;"},
mb:{"^":"t+am;"},
h4:{"^":"ah+A;"},
h5:{"^":"h4+F;"},
mh:{"^":"t+A;"},
mi:{"^":"mh+F;"},
ml:{"^":"t+am;"},
mu:{"^":"t+A;"},
mv:{"^":"mu+F;"},
h8:{"^":"ah+A;"},
h9:{"^":"h8+F;"},
mA:{"^":"t+A;"},
mB:{"^":"mA+F;"},
n2:{"^":"t+A;"},
n3:{"^":"n2+F;"},
n4:{"^":"t+A;"},
n5:{"^":"n4+F;"},
n6:{"^":"t+A;"},
n7:{"^":"n6+F;"},
n8:{"^":"t+A;"},
n9:{"^":"n8+F;"},
na:{"^":"t+A;"},
nb:{"^":"na+F;"}}],["","",,P,{"^":"",
nx:function(a){var z,y
z=J.L(a)
if(!!z.$isch){y=z.ged(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.hb(a.data,a.height,a.width)},
nw:function(a){if(a instanceof P.hb)return{data:a.a,height:a.b,width:a.c}
return a},
b6:function(a){var z,y,x,w,v
if(a==null)return
z=P.dq(P.h,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w){v=H.I(y[w])
z.p(0,v,a[v])}return z},
nu:function(a,b){var z={}
a.K(0,new P.nv(z))
return z},
eA:function(){var z=$.ez
if(z==null){z=J.d7(window.navigator.userAgent,"Opera",0)
$.ez=z}return z},
ip:function(){var z,y
z=$.ew
if(z!=null)return z
y=$.ex
if(y==null){y=J.d7(window.navigator.userAgent,"Firefox",0)
$.ex=y}if(y)z="-moz-"
else{y=$.ey
if(y==null){y=!P.eA()&&J.d7(window.navigator.userAgent,"Trident/",0)
$.ey=y}if(y)z="-ms-"
else z=P.eA()?"-o-":"-webkit-"}$.ew=z
return z},
mo:{"^":"b;",
eC:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
df:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.L(a)
if(!!y.$isav)return new Date(a.a)
if(!!y.$isjS)throw H.a(P.cs("structured clone of RegExp"))
if(!!y.$isba)return a
if(!!y.$isd9)return a
if(!!y.$iseG)return a
if(!!y.$isch)return a
if(!!y.$iseY||!!y.$isdx)return a
if(!!y.$isN){x=this.eC(a)
w=this.b
if(x>=w.length)return H.f(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.p(w,x,v)
y.K(a,new P.mq(z,this))
return z.a}if(!!y.$isd){x=this.eC(a)
z=this.b
if(x>=z.length)return H.f(z,x)
v=z[x]
if(v!=null)return v
return this.im(a,x)}throw H.a(P.cs("structured clone of other type"))},
im:function(a,b){var z,y,x,w
z=J.aV(a)
y=z.gm(a)
x=new Array(y)
C.a.p(this.b,b,x)
if(typeof y!=="number")return H.o(y)
w=0
for(;w<y;++w)C.a.p(x,w,this.df(z.j(a,w)))
return x}},
mq:{"^":"m:8;a,b",
$2:function(a,b){this.a.a[a]=this.b.df(b)}},
hb:{"^":"b;ed:a>,b,c",$isch:1},
nv:{"^":"m:8;a",
$2:function(a,b){this.a[a]=b}},
mp:{"^":"mo;a,b"},
iC:{"^":"cK;a,b",
gby:function(){var z,y,x
z=this.b
y=H.al(z,"A",0)
x=W.X
return new H.jb(new H.dP(z,H.l(new P.iD(),{func:1,ret:P.W,args:[y]}),[y]),H.l(new P.iE(),{func:1,ret:x,args:[y]}),[y,x])},
p:function(a,b,c){var z
H.G(b)
H.e(c,"$isX")
z=this.gby()
J.hV(z.b.$1(J.cz(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aK:function(a,b,c,d){throw H.a(P.E("Cannot fillRange on filtered list"))},
gm:function(a){return J.as(this.gby().a)},
j:function(a,b){var z=this.gby()
return z.b.$1(J.cz(z.a,b))},
ga2:function(a){var z=P.j6(this.gby(),!1,W.X)
return new J.aB(z,z.length,0,[H.y(z,0)])},
$asA:function(){return[W.X]},
$asi:function(){return[W.X]},
$asd:function(){return[W.X]}},
iD:{"^":"m:24;",
$1:function(a){return!!J.L(H.e(a,"$isH")).$isX}},
iE:{"^":"m:58;",
$1:function(a){return H.j(H.e(a,"$isH"),"$isX")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cV:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lS:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
m6:{"^":"b;$ti",
gbm:function(a){var z=this.a
if(typeof z!=="number")return z.D()
return H.D(z+this.c,H.y(this,0))},
gcD:function(a){var z=this.b
if(typeof z!=="number")return z.D()
return H.D(z+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.k(this.a)+", "+H.k(this.b)+") "+this.c+" x "+this.d},
A:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.c8(b,"$isae",[P.a8],"$asae")
if(!z)return!1
z=this.a
y=J.aH(b)
x=y.gb5(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbr(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.D()
w=H.y(this,0)
if(H.D(z+this.c,w)===y.gbm(b)){if(typeof x!=="number")return x.D()
z=H.D(x+this.d,w)===y.gcD(b)}else z=!1}else z=!1}else z=!1
return z},
gY:function(a){var z,y,x,w,v
z=this.a
y=J.cc(z)
x=this.b
w=J.cc(x)
if(typeof z!=="number")return z.D()
v=H.y(this,0)
z=H.D(z+this.c,v)
if(typeof x!=="number")return x.D()
v=H.D(x+this.d,v)
return P.lS(P.cV(P.cV(P.cV(P.cV(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
ae:{"^":"m6;b5:a>,br:b>,aB:c>,ay:d>,$ti",u:{
jP:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.R()
if(c<0)z=-c*0
else z=c
H.D(z,e)
if(typeof d!=="number")return d.R()
if(d<0)y=-d*0
else y=d
return new P.ae(a,b,z,H.D(y,e),[e])}}}}],["","",,P,{"^":"",bS:{"^":"t;",$isbS:1,"%":"SVGLength"},oP:{"^":"lU;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.G(b)
H.e(c,"$isbS")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asA:function(){return[P.bS]},
$isi:1,
$asi:function(){return[P.bS]},
$isd:1,
$asd:function(){return[P.bS]},
$asF:function(){return[P.bS]},
"%":"SVGLengthList"},bU:{"^":"t;",$isbU:1,"%":"SVGNumber"},p4:{"^":"m3;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.G(b)
H.e(c,"$isbU")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asA:function(){return[P.bU]},
$isi:1,
$asi:function(){return[P.bU]},
$isd:1,
$asd:function(){return[P.bU]},
$asF:function(){return[P.bU]},
"%":"SVGNumberList"},pa:{"^":"t;0m:length=","%":"SVGPointList"},f8:{"^":"cP;0a6:type}",$isf8:1,"%":"SVGScriptElement"},pk:{"^":"mn;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.G(b)
H.I(c)
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asA:function(){return[P.h]},
$isi:1,
$asi:function(){return[P.h]},
$isd:1,
$asd:function(){return[P.h]},
$asF:function(){return[P.h]},
"%":"SVGStringList"},pn:{"^":"cP;0a6:type}","%":"SVGStyleElement"},cP:{"^":"X;",
gcH:function(a){return new P.iC(a,new W.az(a))},
aq:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.aO])
C.a.h(z,W.fX(null))
C.a.h(z,W.h7())
C.a.h(z,new W.mr())
c=new W.hk(new W.eZ(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.v).io(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.az(w)
u=z.gaP(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
$iscP:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bX:{"^":"t;",$isbX:1,"%":"SVGTransform"},pw:{"^":"mD;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.G(b)
H.e(c,"$isbX")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asA:function(){return[P.bX]},
$isi:1,
$asi:function(){return[P.bX]},
$isd:1,
$asd:function(){return[P.bX]},
$asF:function(){return[P.bX]},
"%":"SVGTransformList"},lT:{"^":"t+A;"},lU:{"^":"lT+F;"},m2:{"^":"t+A;"},m3:{"^":"m2+F;"},mm:{"^":"t+A;"},mn:{"^":"mm+F;"},mC:{"^":"t+A;"},mD:{"^":"mC+F;"}}],["","",,P,{"^":"",V:{"^":"b;",$isi:1,
$asi:function(){return[P.n]},
$isd:1,
$asd:function(){return[P.n]},
$iskC:1}}],["","",,P,{"^":"",oq:{"^":"t;0m:length=","%":"AudioBuffer"},eh:{"^":"ah;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},or:{"^":"lr;",
j:function(a,b){return P.b6(a.get(H.I(b)))},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b6(y.value[1]))}},
gaa:function(a){var z=H.c([],[P.h])
this.K(a,new P.i_(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.E("Not supported"))},
$asam:function(){return[P.h,null]},
$isN:1,
$asN:function(){return[P.h,null]},
"%":"AudioParamMap"},i_:{"^":"m:9;a",
$2:function(a,b){return C.a.h(this.a,a)}},i0:{"^":"eh;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},os:{"^":"ah;0m:length=","%":"AudioTrackList"},i3:{"^":"ah;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},ot:{"^":"eh;0a6:type}","%":"BiquadFilterNode"},p7:{"^":"i3;0m:length=","%":"OfflineAudioContext"},p8:{"^":"i0;0a6:type}","%":"Oscillator|OscillatorNode"},lr:{"^":"t+am;"}}],["","",,P,{"^":"",dA:{"^":"t;",
ji:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.L(g)
if(!!z.$isch)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.nw(g))
return}if(!!z.$iseJ)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.cd("Incorrect number or type of arguments"))},
jh:function(a,b,c,d,e,f,g){return this.ji(a,b,c,d,e,f,g,null,null,null)},
$isdA:1,
"%":"WebGLRenderingContext"},ko:{"^":"t;",$isko:1,"%":"WebGLTexture"},kL:{"^":"t;",$iskL:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",pi:{"^":"mk;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return P.b6(a.item(b))},
p:function(a,b,c){H.G(b)
H.e(c,"$isN")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asA:function(){return[[P.N,,,]]},
$isi:1,
$asi:function(){return[[P.N,,,]]},
$isd:1,
$asd:function(){return[[P.N,,,]]},
$asF:function(){return[[P.N,,,]]},
"%":"SQLResultSetRowList"},mj:{"^":"t+A;"},mk:{"^":"mj+F;"}}],["","",,O,{"^":"",au:{"^":"b;0a,0b,0c,0d,$ti",
bw:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
dn:function(a,b,c){var z=H.al(this,"au",0)
H.l(b,{func:1,ret:P.W,args:[[P.i,z]]})
z={func:1,ret:-1,args:[P.n,[P.i,z]]}
H.l(a,z)
H.l(c,z)
this.b=b
this.c=a
this.d=c},
bc:function(a,b){return this.dn(a,null,b)},
dR:function(a){var z
H.v(a,"$isi",[H.al(this,"au",0)],"$asi")
z=this.b
if(z!=null)return z.$1(a)
return!0},
dv:function(a,b){var z
H.v(b,"$isi",[H.al(this,"au",0)],"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gm:function(a){return this.a.length},
ga2:function(a){var z=this.a
return new J.aB(z,z.length,0,[H.y(z,0)])},
J:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.al(this,"au",0)
H.D(b,z)
z=[z]
if(this.dR(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dv(x,H.c([b],z))}},
ac:function(a,b){var z,y
H.v(b,"$isi",[H.al(this,"au",0)],"$asi")
if(this.dR(b)){z=this.a
y=z.length
C.a.ac(z,b)
this.dv(y,b)}},
$isi:1,
u:{
df:function(a){var z=new O.au([a])
z.bw(a)
return z}}},du:{"^":"b;0a,0b",
gm:function(a){return this.a.length},
gv:function(){var z=this.b
if(z==null){z=D.M()
this.b=z}return z},
fn:function(a){var z=this.b
if(!(z==null))z.E(a)},
aQ:function(){return this.fn(null)},
ga4:function(a){var z=this.a
if(z.length>0)return C.a.gaz(z)
else return V.bo()},
bZ:function(a){var z=this.a
if(a==null)C.a.h(z,V.bo())
else C.a.h(z,a)
this.aQ()},
aM:function(){var z=this.a
if(z.length>0){z.pop()
this.aQ()}}}}],["","",,E,{"^":"",d8:{"^":"b;"},aY:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a8:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sab:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gv().F(0,this.geT())
y=this.c
if(y!=null)y.gv().h(0,this.geT())
x=new D.O("shape",z,this.c,this,[F.f9])
x.b=!0
this.b9(x)}},
at:function(a,b){var z
for(z=this.y.a,z=new J.aB(z,z.length,0,[H.y(z,0)]);z.H();)z.d.at(0,b)},
af:function(a){var z,y
z=a.dx
C.a.h(z.a,z.ga4(z))
z.aQ()
a.d5(this.f)
z=a.dy
y=(z&&C.a).gaz(z)
if(y!=null&&this.d!=null)y.eW(a,this)
for(z=this.y.a,z=new J.aB(z,z.length,0,[H.y(z,0)]);z.H();)z.d.af(a)
a.d3()
a.dx.aM()},
gv:function(){var z=this.z
if(z==null){z=D.M()
this.z=z}return z},
b9:function(a){var z=this.z
if(!(z==null))z.E(a)},
T:function(){return this.b9(null)},
iU:[function(a){H.e(a,"$isC")
this.e=null
this.b9(a)},function(){return this.iU(null)},"kb","$1","$0","geT",0,2,1],
iS:[function(a){this.b9(H.e(a,"$isC"))},function(){return this.iS(null)},"k9","$1","$0","geS",0,2,1],
k8:[function(a,b){var z,y,x,w,v,u,t,s
H.v(b,"$isi",[E.aY],"$asi")
for(z=b.length,y=this.geS(),x={func:1,ret:-1,args:[D.C]},w=[x],v=0;v<b.length;b.length===z||(0,H.B)(b),++v){u=b[v]
if(u!=null){if(u.ga8()==null){t=new D.bj()
t.d=0
u.sa8(t)}t=u.ga8()
t.toString
H.l(y,x)
s=t.a
if(s==null){s=H.c([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.T()},"$2","giR",8,0,6],
ka:[function(a,b){var z,y,x,w,v
H.v(b,"$isi",[E.aY],"$asi")
for(z=b.length,y=this.geS(),x=0;x<b.length;b.length===z||(0,H.B)(b),++x){w=b[x]
if(w!=null){if(w.ga8()==null){v=new D.bj()
v.d=0
w.sa8(v)}w.ga8().F(0,y)}}this.T()},"$2","giT",8,0,6],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaN:1,
u:{
eF:function(a,b,c,d,e,f){var z,y
z=new E.aY()
z.a=d
z.b=!0
y=O.df(E.aY)
z.y=y
y.bc(z.giR(),z.giT())
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
z.sab(0,e)
return z}}},jU:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
fk:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.av(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.du()
y=[V.aK]
z.a=H.c([],y)
z.gv().h(0,new E.jW(this))
this.cy=z
z=new O.du()
z.a=H.c([],y)
z.gv().h(0,new E.jX(this))
this.db=z
z=new O.du()
z.a=H.c([],y)
z.gv().h(0,new E.jY(this))
this.dx=z
z=H.c([],[O.cr])
this.dy=z
C.a.h(z,null)
this.fr=new H.bb(0,0,[P.h,A.dB])},
gj3:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.ga4(z)
y=this.db
y=z.k(0,y.ga4(y))
this.z=y
z=y}return z},
d5:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaz(z):a;(z&&C.a).h(z,y)},
d3:function(){var z=this.dy
if(z.length>1)z.pop()},
e6:function(a){var z=a.b
if(z.length===0)throw H.a(P.r("May not cache a shader with no name."))
if(this.fr.bF(0,z))throw H.a(P.r('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.p(0,z,a)},
u:{
jV:function(a,b){var z=new E.jU(a,b)
z.fk(a,b)
return z}}},jW:{"^":"m:11;a",
$1:function(a){var z
H.e(a,"$isC")
z=this.a
z.z=null
z.ch=null}},jX:{"^":"m:11;a",
$1:function(a){var z
H.e(a,"$isC")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jY:{"^":"m:11;a",
$1:function(a){var z
H.e(a,"$isC")
z=this.a
z.ch=null
z.cx=null}},ku:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a8:x@,0y,0z,0Q,0ch,0cx,0cy",
gv:function(){var z=this.x
if(z==null){z=D.M()
this.x=z}return z},
fp:[function(a){var z
H.e(a,"$isC")
z=this.x
if(!(z==null))z.E(a)
this.jb()},function(){return this.fp(null)},"fo","$1","$0","gdw",0,2,1],
giE:function(){var z,y,x
z=Date.now()
y=C.f.a9(P.eB(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.av(z,!1)
return x/y},
dU:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.o(z)
x=C.d.cS(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.d.cS(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.fj(C.q,this.gja())}},
jb:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.kw(this),{func:1,ret:-1,args:[P.a8]})
C.H.fM(z)
C.H.hs(z,W.hr(y,P.a8))}},"$0","gja",0,0,3],
j8:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dU()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.av(w,!1)
x.y=P.eB(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sm(w.a,0)
w.aQ()
w=x.db
C.a.sm(w.a,0)
w.aQ()
w=x.dx
C.a.sm(w.a,0)
w.aQ()
w=x.dy;(w&&C.a).sm(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.af(this.e)}x=this.z
if(!(x==null))x.E(null)}catch(v){z=H.ac(v)
y=H.bK(v)
P.e7("Error: "+H.k(z))
P.e7("Stack: "+H.k(y))
throw H.a(z)}},
u:{
kv:function(a,b,c,d,e){var z,y,x,w
z=J.L(a)
if(!!z.$isdd)return E.fi(a,!0,!0,!0,!1)
y=W.de(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcH(a).h(0,y)
w=E.fi(y,!0,!0,!0,!1)
w.a=a
return w},
fi:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.ku()
y=P.j2(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.h,null)
x=C.l.c3(a,"webgl",y)
x=H.e(x==null?C.l.c3(a,"experimental-webgl",y):x,"$isdA")
if(x==null)H.q(P.r("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.jV(x,a)
w=new T.kp(x)
w.b=H.G(x.getParameter(3379))
w.c=H.G(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.kY(a)
v=new X.iV()
v.c=new X.aM(!1,!1,!1)
v.d=P.cn(null,null,null,P.n)
w.b=v
v=new X.jo(w)
v.f=0
v.r=new V.Q(0,0)
v.x=new V.Q(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.j8(w)
v.r=0
v.x=new V.Q(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.kz(w)
v.e=0
v.f=new V.Q(0,0)
v.r=new V.Q(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.fe,P.b]])
w.z=v
u=document
t=W.aC
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a7(u,"contextmenu",H.l(w.gh2(),s),!1,t))
v=w.z
r=W.ag
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a7(a,"focus",H.l(w.gh5(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a7(a,"blur",H.l(w.gfZ(),q),!1,r))
v=w.z
p=W.bR
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a7(u,"keyup",H.l(w.gh7(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a7(u,"keydown",H.l(w.gh6(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a7(a,"mousedown",H.l(w.gha(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a7(a,"mouseup",H.l(w.ghc(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a7(a,"mousemove",H.l(w.ghb(),s),!1,t))
p=w.z
o=W.c0;(p&&C.a).h(p,W.a7(a,H.I(W.iv(a)),H.l(w.ghd(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a7(u,"mousemove",H.l(w.gh3(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a7(u,"mouseup",H.l(w.gh4(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a7(u,"pointerlockchange",H.l(w.ghe(),q),!1,r))
r=w.z
q=W.bA
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a7(a,"touchstart",H.l(w.ghm(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a7(a,"touchend",H.l(w.ghk(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a7(a,"touchmove",H.l(w.ghl(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.av(Date.now(),!1)
z.cy=0
z.dU()
return z}}},kw:{"^":"m:35;a",
$1:function(a){var z
H.oa(a)
z=this.a
if(z.ch){z.ch=!1
z.j8()}}}}],["","",,Z,{"^":"",fQ:{"^":"b;a,b",u:{
dO:function(a,b,c){var z
H.v(c,"$isd",[P.n],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bF(c)),35044)
a.bindBuffer(b,null)
return new Z.fQ(b,z)}}},em:{"^":"d8;a,b,c,d,e",
a3:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ac(y)
x=P.r('Failed to bind buffer attribute "'+J.ad(this.a)+'": '+H.k(z))
throw H.a(x)}},
i:function(a){return"["+J.ad(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.k(this.e)+"]"}},fR:{"^":"b;a",$isou:1},dc:{"^":"b;a,0b,c,d",
aL:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
a3:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].a3(a)},
aO:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
af:function(a){var z,y,x,w,v
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
z=[P.h]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ad(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.n(y,", ")+"\nAttrs:   "+C.a.n(u,", ")},
$ispq:1},cI:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.br(this.c)+"'")+"]"}},bC:{"^":"b;a",
gdr:function(a){var z,y
z=this.a
y=(z&$.$get$aG().a)!==0?3:0
if((z&$.$get$b2().a)!==0)y+=3
if((z&$.$get$b1().a)!==0)y+=3
if((z&$.$get$b3().a)!==0)y+=2
if((z&$.$get$b4().a)!==0)y+=3
if((z&$.$get$bZ().a)!==0)y+=3
if((z&$.$get$c_().a)!==0)y+=4
if((z&$.$get$bD().a)!==0)++y
return(z&$.$get$b0().a)!==0?y+4:y},
ie:function(a){var z,y,x
z=$.$get$aG()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$b2()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b1()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b3()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b4()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bZ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$c_()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bD()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b0()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fP()},
A:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bC))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.h])
y=this.a
if((y&$.$get$aG().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$b2().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$b1().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$b3().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$b4().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bZ().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$c_().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bD().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$b0().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.n(z,"|")},
u:{
ay:function(a){return new Z.bC(a)}}}}],["","",,D,{"^":"",ep:{"^":"b;"},bj:{"^":"b;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.C]}
H.l(b,z)
y=this.a
if(y==null){z=H.c([],[z])
this.a=z}else z=y
C.a.h(z,b)},
F:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.C]})
z=this.a
z=z==null?null:C.a.X(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).F(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.X(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).F(z,b)||y}return y},
E:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w){w=this.b
w=w==null?null:w.length===0
if(w==null)w=!0}else w=!1
if(w)return!1
if(a==null){a=new D.C(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.K(y,new D.iz(z))
y=this.b
if(!(y==null))C.a.K(y,new D.iA(z))
z=this.b
if(!(z==null))C.a.sm(z,0)
return!0},
is:function(){return this.E(null)},
jc:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.E(y)}}},
aA:function(a){return this.jc(a,!0,!1)},
u:{
M:function(){var z=new D.bj()
z.d=0
return z}}},iz:{"^":"m:30;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.C]})
z=this.a.a
z.b
a.$1(z)}},iA:{"^":"m:30;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.C]})
z=this.a.a
z.b
a.$1(z)}},C:{"^":"b;a,0b"},ci:{"^":"C;c,d,a,0b,$ti"},cj:{"^":"C;c,d,a,0b,$ti"},O:{"^":"C;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}}],["","",,X,{"^":"",en:{"^":"b;a,b",
A:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.en))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)},
u:{"^":"ow<"}},eP:{"^":"b;a,b",
A:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eP))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}},eQ:{"^":"C;c,a,0b"},iV:{"^":"b;0a,0b,0c,0d",
j_:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.eQ(a,this)
y.b=!0
return z.E(y)},
iW:function(a){var z,y
this.c=a.b
this.d.F(0,a.a)
z=this.b
if(z==null)return!1
y=new X.eQ(a,this)
y.b=!0
return z.E(y)}},eT:{"^":"cN;x,y,c,d,e,a,0b"},j8:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aE:function(a,b){var z,y,x,w,v,u,t,s
z=new P.av(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=y.D(0,new V.Q(x*w,v*u))
u=this.a.gb1()
s=new X.bT(a,new V.Q(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
d2:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.E(this.aE(a,b))
return!0},
bk:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.f9()
if(typeof z!=="number")return z.c2()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.E(this.aE(a,b))
return!0},
bj:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.aE(a,b))
return!0},
j0:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gb1()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.k()
t=a.b
s=this.cy
if(typeof t!=="number")return t.k()
w=new X.dv(new V.a2(v*u,t*s),y,x,new P.av(w,!1),this)
w.b=!0
z.E(w)
return!0},
h9:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.av(Date.now(),!1)
y=this.f
x=new X.eT(c,a,this.a.gb1(),b,z,this)
x.b=!0
y.E(x)
this.y=z
this.x=new V.Q(0,0)}},aM:{"^":"b;a,b,c",
A:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aM))return!1
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
return z+(this.c?"Shift+":"")}},bT:{"^":"cN;x,y,z,Q,ch,c,d,e,a,0b"},jo:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
ce:function(a,b,c){var z,y,x
z=new P.av(Date.now(),!1)
y=this.a.gb1()
x=new X.bT(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
d2:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.E(this.ce(a,b,!0))
return!0},
bk:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.f9()
if(typeof z!=="number")return z.c2()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.E(this.ce(a,b,!0))
return!0},
bj:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.ce(a,b,!1))
return!0},
j1:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gb1()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.k()
u=a.b
t=this.ch
if(typeof u!=="number")return u.k()
x=new X.dv(new V.a2(w*v,u*t),y,b,new P.av(x,!1),this)
x.b=!0
z.E(x)
return!0},
gef:function(){var z=this.b
if(z==null){z=D.M()
this.b=z}return z},
gc1:function(){var z=this.c
if(z==null){z=D.M()
this.c=z}return z},
geR:function(){var z=this.d
if(z==null){z=D.M()
this.d=z}return z}},dv:{"^":"cN;x,c,d,e,a,0b"},cN:{"^":"C;"},fn:{"^":"cN;x,y,z,Q,ch,c,d,e,a,0b"},kz:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
aE:function(a,b){var z,y,x,w
H.v(a,"$isd",[V.Q],"$asd")
z=new P.av(Date.now(),!1)
y=a.length>0?a[0]:new V.Q(0,0)
x=this.a.gb1()
w=new X.fn(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
iZ:function(a){var z
H.v(a,"$isd",[V.Q],"$asd")
z=this.b
if(z==null)return!1
z.E(this.aE(a,!0))
return!0},
iX:function(a){var z
H.v(a,"$isd",[V.Q],"$asd")
z=this.c
if(z==null)return!1
z.E(this.aE(a,!0))
return!0},
iY:function(a){var z
H.v(a,"$isd",[V.Q],"$asd")
z=this.d
if(z==null)return!1
z.E(this.aE(a,!1))
return!0}},kY:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gb1:function(){var z=this.a
return V.f7(0,0,(z&&C.l).gec(z).c,C.l.gec(z).d)},
dJ:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eP(z,new X.aM(y,a.altKey,a.shiftKey))},
aZ:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aM(y,a.altKey,a.shiftKey)},
cu:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aM(y,a.altKey,a.shiftKey)},
aG:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.L()
v=z.top
if(typeof x!=="number")return x.L()
return new V.Q(y-w,x-v)},
bd:function(a){return new V.a2(a.movementX,a.movementY)},
co:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.Q])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
t=C.d.am(u.pageX)
C.d.am(u.pageY)
s=z.left
C.d.am(u.pageX)
C.a.h(y,new V.Q(t-s,C.d.am(u.pageY)-z.top))}return y},
aC:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.en(z,new X.aM(y,a.altKey,a.shiftKey))},
ci:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.L()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.L()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
jF:[function(a){this.f=!0},"$1","gh5",4,0,10],
jy:[function(a){this.f=!1},"$1","gfZ",4,0,10],
jC:[function(a){H.e(a,"$isaC")
if(this.f&&this.ci(a))a.preventDefault()},"$1","gh2",4,0,4],
jH:[function(a){var z
H.e(a,"$isbR")
if(!this.f)return
z=this.dJ(a)
if(this.b.j_(z))a.preventDefault()},"$1","gh7",4,0,29],
jG:[function(a){var z
H.e(a,"$isbR")
if(!this.f)return
z=this.dJ(a)
if(this.b.iW(z))a.preventDefault()},"$1","gh6",4,0,29],
jJ:[function(a){var z,y,x,w
H.e(a,"$isaC")
z=this.a
z.focus()
this.f=!0
this.aZ(a)
if(this.x){y=this.aC(a)
x=this.bd(a)
if(this.d.d2(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aC(a)
w=this.aG(a)
if(this.c.d2(y,w))a.preventDefault()},"$1","gha",4,0,4],
jL:[function(a){var z,y,x
H.e(a,"$isaC")
this.aZ(a)
z=this.aC(a)
if(this.x){y=this.bd(a)
if(this.d.bk(z,y))a.preventDefault()
return}if(this.r)return
x=this.aG(a)
if(this.c.bk(z,x))a.preventDefault()},"$1","ghc",4,0,4],
jE:[function(a){var z,y,x
H.e(a,"$isaC")
if(!this.ci(a)){this.aZ(a)
z=this.aC(a)
if(this.x){y=this.bd(a)
if(this.d.bk(z,y))a.preventDefault()
return}if(this.r)return
x=this.aG(a)
if(this.c.bk(z,x))a.preventDefault()}},"$1","gh4",4,0,4],
jK:[function(a){var z,y,x
H.e(a,"$isaC")
this.aZ(a)
z=this.aC(a)
if(this.x){y=this.bd(a)
if(this.d.bj(z,y))a.preventDefault()
return}if(this.r)return
x=this.aG(a)
if(this.c.bj(z,x))a.preventDefault()},"$1","ghb",4,0,4],
jD:[function(a){var z,y,x
H.e(a,"$isaC")
if(!this.ci(a)){this.aZ(a)
z=this.aC(a)
if(this.x){y=this.bd(a)
if(this.d.bj(z,y))a.preventDefault()
return}if(this.r)return
x=this.aG(a)
if(this.c.bj(z,x))a.preventDefault()}},"$1","gh3",4,0,4],
jM:[function(a){var z,y
H.e(a,"$isc0")
this.aZ(a)
z=new V.a2((a&&C.G).giq(a),C.G.gir(a)).t(0,180)
if(this.x){if(this.d.j0(z))a.preventDefault()
return}if(this.r)return
y=this.aG(a)
if(this.c.j1(z,y))a.preventDefault()},"$1","ghd",4,0,39],
jN:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.aC(this.y)
v=this.aG(this.y)
this.d.h9(w,v,x)}},"$1","ghe",4,0,10],
jV:[function(a){var z
H.e(a,"$isbA")
this.a.focus()
this.f=!0
this.cu(a)
z=this.co(a)
if(this.e.iZ(z))a.preventDefault()},"$1","ghm",4,0,15],
jT:[function(a){var z
H.e(a,"$isbA")
this.cu(a)
z=this.co(a)
if(this.e.iX(z))a.preventDefault()},"$1","ghk",4,0,15],
jU:[function(a){var z
H.e(a,"$isbA")
this.cu(a)
z=this.co(a)
if(this.e.iY(z))a.preventDefault()},"$1","ghl",4,0,15]}}],["","",,D,{"^":"",cF:{"^":"b;0a,0b,0c,0d",
gv:function(){var z=this.d
if(z==null){z=D.M()
this.d=z}return z},
aR:[function(a){var z
H.e(a,"$isC")
z=this.d
if(!(z==null))z.E(a)},function(){return this.aR(null)},"jo","$1","$0","gft",0,2,1],
$isa9:1,
$isaN:1},a9:{"^":"b;",$isaN:1},iW:{"^":"au;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gv:function(){var z=this.Q
if(z==null){z=D.M()
this.Q=z}return z},
aR:function(a){var z=this.Q
if(!(z==null))z.E(a)},
h8:[function(a){var z
H.e(a,"$isC")
z=this.ch
if(!(z==null))z.E(a)},function(){return this.h8(null)},"jI","$1","$0","gdQ",0,2,1],
jO:[function(a){var z,y,x
H.v(a,"$isi",[D.a9],"$asi")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.B)(a),++y){x=a[y]
if(x==null||this.fs(x))return!1}return!0},"$1","ghf",4,0,41],
jv:[function(a,b){var z,y,x,w,v,u,t,s,r
z=D.a9
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdQ(),w={func:1,ret:-1,args:[D.C]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=H.e(b[u],"$isa9")
if(t instanceof D.cF)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bj()
s.d=0
t.d=s}H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}z=new D.ci(a,b,this,[z])
z.b=!0
this.aR(z)},"$2","gfW",8,0,21],
jQ:[function(a,b){var z,y,x,w,v,u
z=D.a9
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdQ(),w=0;w<b.length;b.length===y||(0,H.B)(b),++w){v=H.e(b[w],"$isa9")
if(v instanceof D.cF)C.a.F(this.e,v)
u=v.d
if(u==null){u=new D.bj()
u.d=0
v.d=u}u.F(0,x)}z=new D.cj(a,b,this,[z])
z.b=!0
this.aR(z)},"$2","ghh",8,0,21],
fs:function(a){var z=C.a.X(this.e,a)
return z},
$asi:function(){return[D.a9]},
$asau:function(){return[D.a9]}},jA:{"^":"b;",$isa9:1,$isaN:1},kg:{"^":"b;",$isa9:1,$isaN:1},kr:{"^":"b;",$isa9:1,$isaN:1},ks:{"^":"b;",$isa9:1,$isaN:1},kt:{"^":"b;",$isa9:1,$isaN:1}}],["","",,V,{"^":"",
oy:[function(a,b){if(typeof b!=="number")return b.L()
if(typeof a!=="number")return H.o(a)
return Math.abs(b-a)<=1e-9},"$2","jl",8,0,38],
om:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.d.bu(a-b,z)
return(a<0?a+z:a)+b},
S:function(a,b,c){if(a==null)return C.b.al("null",c)
return C.b.al(C.d.f_($.p.$2(a,0)?0:a,b),c+b+1)},
bJ:function(a,b,c){var z,y,x,w,v,u
H.v(a,"$isd",[P.u],"$asd")
z=H.c([],[P.h])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.B)(a),++w){v=V.S(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.f(z,u)
C.a.p(z,u,C.b.al(z[u],x))}return z},
e6:function(a,b){return C.d.jk(Math.pow(b,C.Q.cS(Math.log(H.nt(a))/Math.log(b))))},
a5:{"^":"b;a,b,c",
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
return new V.a5(z,y,x)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}},
ap:{"^":"b;a,b,c,d",
dd:function(a){return H.c([this.a,this.b,this.c,this.d],[P.u])},
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
return new V.ap(z,y,x,w)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ap))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+", "+V.S(this.d,3,0)+"]"}},
cM:{"^":"b;a,b,c,d,e,f,r,x,y",
ag:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.u])
return z},
k:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.e(a5,"$iscM")
z=this.a
y=a5.a
if(typeof z!=="number")return z.k()
x=C.d.k(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.k()
u=C.d.k(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.k()
r=C.d.k(t,s)
q=a5.b
p=C.d.k(z,q)
o=a5.e
n=C.d.k(w,o)
m=a5.x
l=C.d.k(t,m)
k=a5.c
z=C.d.k(z,k)
j=a5.f
w=C.d.k(w,j)
i=a5.y
t=C.d.k(t,i)
h=this.d
if(typeof h!=="number")return h.k()
g=C.d.k(h,y)
f=this.e
if(typeof f!=="number")return f.k()
e=C.d.k(f,v)
d=this.f
if(typeof d!=="number")return d.k()
c=C.d.k(d,s)
b=C.d.k(h,q)
a=C.d.k(f,o)
a0=C.d.k(d,m)
h=C.d.k(h,k)
f=C.d.k(f,j)
d=C.d.k(d,i)
a1=this.r
if(typeof a1!=="number")return a1.k()
y=C.d.k(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.k()
v=C.d.k(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.k()
return new V.cM(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.d.k(a3,s),C.d.k(a1,q)+C.d.k(a2,o)+C.d.k(a3,m),C.d.k(a1,k)+C.d.k(a2,j)+C.d.k(a3,i))},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cM))return!1
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
z=[P.u]
y=V.bJ(H.c([this.a,this.d,this.r],z),3,0)
x=V.bJ(H.c([this.b,this.e,this.x],z),3,0)
w=V.bJ(H.c([this.c,this.f,this.y],z),3,0)
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
aK:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ag:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.u])
return z},
cW:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.p.$2(a2,0))return V.bo()
a3=1/a2
a4=-w
a5=-i
return V.aL((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.e(a7,"$isaK")
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
return V.aL(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
de:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.z(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
bs:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return new V.U(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aK))return!1
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
i:function(a){return this.O()},
eD:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.u]
y=V.bJ(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bJ(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bJ(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bJ(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
O:function(){return this.eD("",3,0)},
G:function(a){return this.eD(a,3,0)},
u:{
aL:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aK(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bo:function(){return V.aL(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
eX:function(a,b,c){var z,y,x,w,v
z=c.t(0,Math.sqrt(c.B(c)))
y=b.aI(z)
x=y.t(0,Math.sqrt(y.B(y)))
w=z.aI(x)
v=new V.z(a.a,a.b,a.c)
return V.aL(x.a,w.a,z.a,x.S(0).B(v),x.b,w.b,z.b,w.S(0).B(v),x.c,w.c,z.c,z.S(0).B(v),0,0,0,1)}}},
Q:{"^":"b;a,b",
D:function(a,b){return new V.Q(this.a+b.a,this.b+b.b)},
L:function(a,b){return new V.Q(this.a-b.a,this.b-b.b)},
k:function(a,b){return new V.Q(this.a*b,this.b*b)},
t:function(a,b){if($.p.$2(b,0))return new V.Q(0,0)
return new V.Q(this.a/b,this.b/b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+"]"}},
U:{"^":"b;a,b,c",
D:function(a,b){return new V.U(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a,b){return new V.U(this.a-b.a,this.b-b.b,this.c-b.c)},
k:function(a,b){return new V.U(this.a*b,this.b*b,this.c*b)},
t:function(a,b){if($.p.$2(b,0))return new V.U(0,0,0)
return new V.U(this.a/b,this.b/b,this.c/b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}},
aP:{"^":"b;a,b,c,d",
k:function(a,b){return new V.aP(this.a*b,this.b*b,this.c*b,this.d*b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aP))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+", "+V.S(this.d,3,0)+"]"}},
f6:{"^":"b;a,b,c,d",
gae:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.f6))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+", "+V.S(this.d,3,0)+"]"},
u:{
f7:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.f6(a,b,c,d)}}},
a2:{"^":"b;a,b",
eN:[function(a){return Math.sqrt(this.B(this))},"$0","gm",1,0,14],
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
return new V.a2(z*b,y*b)},
t:function(a,b){var z,y
if($.p.$2(b,0))return new V.a2(0,0)
z=this.a
if(typeof z!=="number")return z.t()
y=this.b
if(typeof y!=="number")return y.t()
return new V.a2(z/b,y/b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+"]"}},
z:{"^":"b;a,b,c",
eN:[function(a){return Math.sqrt(this.B(this))},"$0","gm",1,0,14],
B:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cY:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.z(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aI:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.z(z*y-x*w,x*v-u*y,u*w-z*v)},
D:function(a,b){return new V.z(this.a+b.a,this.b+b.b,this.c+b.c)},
S:function(a){return new V.z(-this.a,-this.b,-this.c)},
k:function(a,b){return new V.z(this.a*b,this.b*b,this.c*b)},
t:function(a,b){if($.p.$2(b,0))return new V.z(0,0,0)
return new V.z(this.a/b,this.b/b,this.c/b)},
eM:function(){if(!$.p.$2(0,this.a))return!1
if(!$.p.$2(0,this.b))return!1
if(!$.p.$2(0,this.c))return!1
return!0},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.z))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}},
bY:{"^":"b;a,b,c,d",
eN:[function(a){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=this.d
return Math.sqrt(z*z+y*y+x*x+w*w)},"$0","gm",1,0,14],
k:function(a,b){return new V.bY(this.a*b,this.b*b,this.c*b,this.d*b)},
t:function(a,b){if($.p.$2(b,0))return new V.bY(0,0,0,0)
return new V.bY(this.a/b,this.b/b,this.c/b,this.d/b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bY))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+", "+V.S(this.d,3,0)+"]"}}}],["","",,U,{"^":"",ia:{"^":"ep;0a,0b,0c,0d,0e,0f,0r,0x,0y",
c8:function(a){var z=V.om(a,this.c,this.b)
return z},
gv:function(){var z=this.y
if(z==null){z=D.M()
this.y=z}return z},
U:function(a){var z=this.y
if(!(z==null))z.E(a)},
sdh:function(a,b){},
scZ:function(a){var z,y
z=this.b
if(!$.p.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.c8(z)}z=new D.O("maximumLocation",y,this.b,this,[P.u])
z.b=!0
this.U(z)}},
sd0:function(a){var z,y
z=this.c
if(!$.p.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.c8(z)}z=new D.O("minimumLocation",y,this.c,this,[P.u])
z.b=!0
this.U(z)}},
sa_:function(a,b){var z,y
b=this.c8(b)
z=this.d
if(!$.p.$2(z,b)){y=this.d
this.d=b
z=new D.O("location",y,b,this,[P.u])
z.b=!0
this.U(z)}},
sd_:function(a){var z,y,x
z=this.e
if(!$.p.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.O("maximumVelocity",y,a,this,[P.u])
z.b=!0
this.U(z)}},
sV:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.p.$2(z,a)){x=this.f
this.f=a
z=new D.O("velocity",x,a,this,[P.u])
z.b=!0
this.U(z)}},
scK:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.p.$2(z,a)){y=this.x
this.x=a
z=new D.O("dampening",y,a,this,[P.u])
z.b=!0
this.U(z)}},
at:function(a,b){var z,y,x,w
z=this.f
if($.p.$2(z,0)){z=this.r
z=!$.p.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa_(0,this.d+y*b)
z=this.x
if(!$.p.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sV(y)}},
u:{
dg:function(){var z=new U.ia()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},er:{"^":"an;0a,0b",
gv:function(){var z=this.b
if(z==null){z=D.M()
this.b=z}return z},
bb:function(a,b,c){return this.a},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.er))return!1
return J.K(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")},
u:{
es:function(a){var z=new U.er()
z.a=a
return z}}},eI:{"^":"au;0e,0f,0r,0a,0b,0c,0d",
gv:function(){var z=this.e
if(z==null){z=D.M()
this.e=z}return z},
U:[function(a){var z
H.e(a,"$isC")
z=this.e
if(!(z==null))z.E(a)},function(){return this.U(null)},"ao","$1","$0","gaS",0,2,1],
ju:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.an
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaS(),w={func:1,ret:-1,args:[D.C]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){s=t.gv()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.ci(a,b,this,[z])
z.b=!0
this.U(z)},"$2","gfV",8,0,17],
jP:[function(a,b){var z,y,x,w,v
z=U.an
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaS(),w=0;w<b.length;b.length===y||(0,H.B)(b),++w){v=b[w]
if(v!=null)v.gv().F(0,x)}z=new D.cj(a,b,this,[z])
z.b=!0
this.U(z)},"$2","ghg",8,0,17],
bb:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.R()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.aB(z,z.length,0,[H.y(z,0)]),x=null;z.H();){y=z.d
if(y!=null){w=y.bb(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.bo():x
z=this.e
if(!(z==null))z.aA(0)}return this.f},
A:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eI))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.f(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.f(w,y)
if(!J.K(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asi:function(){return[U.an]},
$asau:function(){return[U.an]},
$isan:1},an:{"^":"ep;"},kZ:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gv:function(){var z=this.cy
if(z==null){z=D.M()
this.cy=z}return z},
U:[function(a){var z
H.e(a,"$isC")
z=this.cy
if(!(z==null))z.E(a)},function(){return this.U(null)},"ao","$1","$0","gaS",0,2,1],
bf:function(a){if(this.a!=null)return!1
this.a=a
a.c.gef().h(0,this.gcj())
this.a.c.geR().h(0,this.gck())
this.a.c.gc1().h(0,this.gcl())
return!0},
fR:[function(a){H.e(a,"$isC")
if(!J.K(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gcj",4,0,2],
fS:[function(a){var z,y,x,w,v,u,t
a=H.j(H.e(a,"$isC"),"$isbT")
if(!this.y)return
if(this.x){z=a.d.L(0,a.y)
z=new V.a2(z.a,z.b)
z=z.B(z)
y=this.r
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.L(0,a.y)
z=new V.a2(y.a,y.b).k(0,2).t(0,z.gae())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.k()
x=this.e
if(typeof x!=="number")return H.o(x)
y.sV(z*10*x)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=new V.a2(x.a,x.b).k(0,2).t(0,z.gae())
x=this.b
v=w.a
if(typeof v!=="number")return v.S()
u=this.e
if(typeof u!=="number")return H.o(u)
t=this.z
if(typeof t!=="number")return H.o(t)
x.sa_(0,-v*u+t)
this.b.sV(0)
y=y.L(0,a.z)
this.Q=new V.a2(y.a,y.b).k(0,2).t(0,z.gae())}this.ao()},"$1","gck",4,0,2],
fT:[function(a){var z,y,x
H.e(a,"$isC")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.B(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.k()
x=this.e
if(typeof x!=="number")return H.o(x)
z.sV(y*10*x)
this.ao()}},"$1","gcl",4,0,2],
bb:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.R()
if(z<y){this.ch=y
x=b.y
this.b.at(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aL(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isan:1},l_:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gv:function(){var z=this.fx
if(z==null){z=D.M()
this.fx=z}return z},
U:[function(a){var z
H.e(a,"$isC")
z=this.fx
if(!(z==null))z.E(a)},function(){return this.U(null)},"ao","$1","$0","gaS",0,2,1],
bf:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gef().h(0,this.gcj())
this.a.c.geR().h(0,this.gck())
this.a.c.gc1().h(0,this.gcl())
z=this.a.d
y=z.f
if(y==null){y=D.M()
z.f=y
z=y}else z=y
z.h(0,this.gfO())
z=this.a.d
y=z.d
if(y==null){y=D.M()
z.d=y
z=y}else z=y
z.h(0,this.gfP())
z=this.a.e
y=z.b
if(y==null){y=D.M()
z.b=y
z=y}else z=y
z.h(0,this.ghL())
z=this.a.e
y=z.d
if(y==null){y=D.M()
z.d=y
z=y}else z=y
z.h(0,this.ghK())
z=this.a.e
y=z.c
if(y==null){y=D.M()
z.c=y
z=y}else z=y
z.h(0,this.ghJ())
return!0},
av:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.S()
z=-z}if(this.r){if(typeof y!=="number")return y.S()
y=-y}return new V.a2(z,y)},
fR:[function(a){a=H.j(H.e(a,"$isC"),"$isbT")
if(!J.K(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gcj",4,0,2],
fS:[function(a){var z,y,x,w,v,u,t
a=H.j(H.e(a,"$isC"),"$isbT")
if(!this.cx)return
if(this.ch){z=a.d.L(0,a.y)
z=new V.a2(z.a,z.b)
z=z.B(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.L(0,a.y)
z=this.av(new V.a2(y.a,y.b).k(0,2).t(0,z.gae()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.S()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sV(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.S()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sV(-z*10*y)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=this.av(new V.a2(x.a,x.b).k(0,2).t(0,z.gae()))
x=this.c
v=w.a
if(typeof v!=="number")return v.S()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.S()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa_(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.L(0,a.z)
this.dx=this.av(new V.a2(y.a,y.b).k(0,2).t(0,z.gae()))}this.ao()},"$1","gck",4,0,2],
fT:[function(a){var z,y,x
H.e(a,"$isC")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.B(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.S()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sV(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.S()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sV(-y*10*z)
this.ao()}},"$1","gcl",4,0,2],
jr:[function(a){if(H.j(H.e(a,"$isC"),"$iseT").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfO",4,0,2],
js:[function(a){var z,y,x,w,v,u,t
a=H.j(H.e(a,"$isC"),"$isbT")
if(!J.K(this.d,a.x.b))return
z=a.c
y=a.d
x=y.L(0,a.y)
w=this.av(new V.a2(x.a,x.b).k(0,2).t(0,z.gae()))
x=this.c
v=w.a
if(typeof v!=="number")return v.S()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.S()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa_(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.L(0,a.z)
this.dx=this.av(new V.a2(y.a,y.b).k(0,2).t(0,z.gae()))
this.ao()},"$1","gfP",4,0,2],
jZ:[function(a){H.e(a,"$isC")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghL",4,0,2],
jY:[function(a){var z,y,x,w,v,u,t
a=H.j(H.e(a,"$isC"),"$isfn")
if(!this.cx)return
if(this.ch){z=a.d.L(0,a.y)
z=new V.a2(z.a,z.b)
z=z.B(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.L(0,a.y)
z=this.av(new V.a2(y.a,y.b).k(0,2).t(0,z.gae()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.S()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sV(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.S()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sV(-z*10*y)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=this.av(new V.a2(x.a,x.b).k(0,2).t(0,z.gae()))
x=this.c
v=w.a
if(typeof v!=="number")return v.S()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sa_(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.S()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sa_(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.L(0,a.z)
this.dx=this.av(new V.a2(y.a,y.b).k(0,2).t(0,z.gae()))}this.ao()},"$1","ghK",4,0,2],
jX:[function(a){var z,y,x
H.e(a,"$isC")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.B(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.S()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sV(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.S()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sV(-y*10*z)
this.ao()}},"$1","ghJ",4,0,2],
bb:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.R()
if(z<y){this.dy=y
x=b.y
this.c.at(0,x)
this.b.at(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aL(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.k(0,V.aL(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isan:1},l0:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gv:function(){var z=this.r
if(z==null){z=D.M()
this.r=z}return z},
U:function(a){var z=this.r
if(!(z==null))z.E(a)},
bf:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.M()
z.e=y
z=y}else z=y
y=this.gfU()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.M()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
jt:[function(a){var z,y,x,w
H.e(a,"$isC")
if(!J.K(this.b,this.a.b.c))return
H.j(a,"$isdv")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.k()
w=z+y*x
if(z!==w){this.d=w
z=new D.O("zoom",z,w,this,[P.u])
z.b=!0
this.U(z)}},"$1","gfU",4,0,2],
bb:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aL(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isan:1}}],["","",,M,{"^":"",ib:{"^":"au;0e,0f,0a,0b,0c,0d",
gv:function(){var z=this.f
if(z==null){z=D.M()
this.f=z}return z},
a5:[function(a){var z
H.e(a,"$isC")
z=this.f
if(!(z==null))z.E(a)},function(){return this.a5(null)},"dz","$1","$0","ga0",0,2,1],
jR:[function(a,b){var z,y,x,w,v,u,t,s,r
z=M.aQ
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.ga0(),w={func:1,ret:-1,args:[D.C]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){s=t.gv()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.ci(a,b,this,[z])
z.b=!0
this.a5(z)},"$2","ghi",8,0,32],
jS:[function(a,b){var z,y,x,w,v
z=M.aQ
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.ga0(),w=0;w<b.length;b.length===y||(0,H.B)(b),++w){v=b[w]
if(v!=null)v.gv().F(0,x)}z=new D.cj(a,b,this,[z])
z.b=!0
this.a5(z)},"$2","ghj",8,0,32],
af:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.aB(z,z.length,0,[H.y(z,0)]);z.H();){y=z.d
if(!(y==null))y.af(a)}this.e=!1},
$asi:function(){return[M.aQ]},
$asau:function(){return[M.aQ]},
$isaQ:1},ih:{"^":"b;0a,0b,0c,0d,0e,0f",
gv:function(){var z=this.f
if(z==null){z=D.M()
this.f=z}return z},
a5:[function(a){var z
H.e(a,"$isC")
z=this.f
if(!(z==null))z.E(a)},function(){return this.a5(null)},"dz","$1","$0","ga0",0,2,1],
sbg:function(a){var z,y
if(a==null)a=new X.iL()
z=this.a
if(z!==a){if(z!=null)z.gv().F(0,this.ga0())
y=this.a
this.a=a
a.gv().h(0,this.ga0())
z=new D.O("camera",y,this.a,this,[X.cD])
z.b=!0
this.a5(z)}},
sbn:function(a,b){var z,y
if(b==null)b=X.di(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gv().F(0,this.ga0())
y=this.b
this.b=b
b.gv().h(0,this.ga0())
z=new D.O("target",y,this.b,this,[X.dF])
z.b=!0
this.a5(z)}},
sbo:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gv().F(0,this.ga0())
y=this.c
this.c=a
if(a!=null)a.gv().h(0,this.ga0())
z=new D.O("technique",y,this.c,this,[O.cr])
z.b=!0
this.a5(z)}},
af:function(a){a.d5(this.c)
this.b.a3(a)
this.a.a3(a)
this.d.at(0,a)
this.d.af(a)
this.a.aO(a)
this.b.toString
a.d3()},
$isaQ:1},ix:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
a5:[function(a){var z
H.e(a,"$isC")
z=this.x
if(!(z==null))z.E(a)},function(){return this.a5(null)},"dz","$1","$0","ga0",0,2,1],
jA:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.aY
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.ga0(),w={func:1,ret:-1,args:[D.C]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){if(t.ga8()==null){s=new D.bj()
s.d=0
t.sa8(s)}s=t.ga8()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.ci(a,b,this,[z])
z.b=!0
this.a5(z)},"$2","gh0",8,0,6],
jB:[function(a,b){var z,y,x,w,v,u
z=E.aY
H.v(b,"$isi",[z],"$asi")
for(y=b.length,x=this.ga0(),w=0;w<b.length;b.length===y||(0,H.B)(b),++w){v=b[w]
if(v!=null){if(v.ga8()==null){u=new D.bj()
u.d=0
v.sa8(u)}v.ga8().F(0,x)}}z=new D.cj(a,b,this,[z])
z.b=!0
this.a5(z)},"$2","gh1",8,0,6],
sbg:function(a){var z,y
if(a==null)a=X.f2(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null)z.gv().F(0,this.ga0())
y=this.a
this.a=a
a.gv().h(0,this.ga0())
z=new D.O("camera",y,this.a,this,[X.cD])
z.b=!0
this.a5(z)}},
sbn:function(a,b){var z,y
if(b==null)b=X.di(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gv().F(0,this.ga0())
y=this.b
this.b=b
b.gv().h(0,this.ga0())
z=new D.O("target",y,this.b,this,[X.dF])
z.b=!0
this.a5(z)}},
sbo:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gv().F(0,this.ga0())
y=this.c
this.c=a
if(a!=null)a.gv().h(0,this.ga0())
z=new D.O("technique",y,this.c,this,[O.cr])
z.b=!0
this.a5(z)}},
gv:function(){var z=this.x
if(z==null){z=D.M()
this.x=z}return z},
af:function(a){var z
a.d5(this.c)
this.b.a3(a)
this.a.a3(a)
z=this.c
if(z!=null)z.at(0,a)
for(z=this.d.a,z=new J.aB(z,z.length,0,[H.y(z,0)]);z.H();)z.d.at(0,a)
for(z=this.d.a,z=new J.aB(z,z.length,0,[H.y(z,0)]);z.H();)z.d.af(a)
this.a.toString
a.cy.aM()
a.db.aM()
this.b.toString
a.d3()},
$isaQ:1},aQ:{"^":"b;"}}],["","",,A,{"^":"",eg:{"^":"b;a,b,c"},hZ:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
it:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
ee:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},eW:{"^":"dB;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0ax,0ar,0bH,0eg,0bI,0bJ,0eh,0ei,0bK,0bL,0ej,0ek,0bM,0bN,0el,0em,0bO,0en,0eo,0bP,0ep,0eq,0bQ,0bR,0bS,0er,0es,0bT,0bU,0eu,0ev,0bV,0ew,0cM,0ex,0cN,0ey,0cO,0ez,0cP,0eA,0cQ,0eB,0cR,a,b,0c,0d,0e,0f,0r,0x,0y",
fj:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.z=a1
z=new P.aq("")
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
a1.hO(z)
a1.hV(z)
a1.hP(z)
a1.i2(z)
a1.i3(z)
a1.hX(z)
a1.i7(z)
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
z=new P.aq("")
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
v.hS(z)
v.hN(z)
v.hQ(z)
v.hT(z)
v.i0(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.hZ(z)
v.i_(z)}v.hW(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.c){r+="uniform float alpha;\n"
z.a=r
if(q!==C.i){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.h){r+="uniform sampler2D alphaTxt;\n"
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
case C.h:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
p=H.c([],[P.h])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.n(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.hR(z)
v.hY(z)
v.i1(z)
v.i4(z)
v.i5(z)
v.i6(z)
v.hU(z)}r=z.a+="// === Main ===\n"
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
o=H.c([],[P.h])
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
n="vec4("+C.a.n(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.eL(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a1.fr)this.id=H.j(this.y.q(0,"invViewMat"),"$isaS")
if(y)this.dy=H.j(this.y.q(0,"objMat"),"$isaS")
if(w)this.fr=H.j(this.y.q(0,"viewObjMat"),"$isaS")
this.fy=H.j(this.y.q(0,"projViewObjMat"),"$isaS")
if(a1.x2)this.k1=H.j(this.y.q(0,"txt2DMat"),"$isdK")
if(a1.y1)this.k2=H.j(this.y.q(0,"txtCubeMat"),"$isaS")
if(a1.y2)this.k3=H.j(this.y.q(0,"colorMat"),"$isaS")
this.r1=H.c([],[A.aS])
y=a1.ax
if(y>0){this.k4=H.e(this.y.q(0,"bendMatCount"),"$isT")
for(m=0;m<y;++m){x=this.r1
w=this.y
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.q(P.r("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.j(l,"$isaS"))}}y=a1.a
if(y!==C.c){this.r2=H.j(this.y.q(0,"emissionClr"),"$isR")
switch(y){case C.c:break
case C.i:break
case C.h:this.rx=H.j(this.y.q(0,"emissionTxt"),"$isax")
this.x1=H.j(this.y.q(0,"nullEmissionTxt"),"$isT")
break
case C.e:this.ry=H.j(this.y.q(0,"emissionTxt"),"$isar")
this.x1=H.j(this.y.q(0,"nullEmissionTxt"),"$isT")
break}}y=a1.b
if(y!==C.c){this.x2=H.j(this.y.q(0,"ambientClr"),"$isR")
switch(y){case C.c:break
case C.i:break
case C.h:this.y1=H.j(this.y.q(0,"ambientTxt"),"$isax")
this.ax=H.j(this.y.q(0,"nullAmbientTxt"),"$isT")
break
case C.e:this.y2=H.j(this.y.q(0,"ambientTxt"),"$isar")
this.ax=H.j(this.y.q(0,"nullAmbientTxt"),"$isT")
break}}y=a1.c
if(y!==C.c){this.ar=H.j(this.y.q(0,"diffuseClr"),"$isR")
switch(y){case C.c:break
case C.i:break
case C.h:this.bH=H.j(this.y.q(0,"diffuseTxt"),"$isax")
this.bI=H.j(this.y.q(0,"nullDiffuseTxt"),"$isT")
break
case C.e:this.eg=H.j(this.y.q(0,"diffuseTxt"),"$isar")
this.bI=H.j(this.y.q(0,"nullDiffuseTxt"),"$isT")
break}}y=a1.d
if(y!==C.c){this.bJ=H.j(this.y.q(0,"invDiffuseClr"),"$isR")
switch(y){case C.c:break
case C.i:break
case C.h:this.eh=H.j(this.y.q(0,"invDiffuseTxt"),"$isax")
this.bK=H.j(this.y.q(0,"nullInvDiffuseTxt"),"$isT")
break
case C.e:this.ei=H.j(this.y.q(0,"invDiffuseTxt"),"$isar")
this.bK=H.j(this.y.q(0,"nullInvDiffuseTxt"),"$isT")
break}}y=a1.e
if(y!==C.c){this.bN=H.j(this.y.q(0,"shininess"),"$isa3")
this.bL=H.j(this.y.q(0,"specularClr"),"$isR")
switch(y){case C.c:break
case C.i:break
case C.h:this.ej=H.j(this.y.q(0,"specularTxt"),"$isax")
this.bM=H.j(this.y.q(0,"nullSpecularTxt"),"$isT")
break
case C.e:this.ek=H.j(this.y.q(0,"specularTxt"),"$isar")
this.bM=H.j(this.y.q(0,"nullSpecularTxt"),"$isT")
break}}switch(a1.f){case C.c:break
case C.i:break
case C.h:this.el=H.j(this.y.q(0,"bumpTxt"),"$isax")
this.bO=H.j(this.y.q(0,"nullBumpTxt"),"$isT")
break
case C.e:this.em=H.j(this.y.q(0,"bumpTxt"),"$isar")
this.bO=H.j(this.y.q(0,"nullBumpTxt"),"$isT")
break}if(a1.dy){this.en=H.j(this.y.q(0,"envSampler"),"$isar")
this.eo=H.j(this.y.q(0,"nullEnvTxt"),"$isT")
y=a1.r
if(y!==C.c){this.bP=H.j(this.y.q(0,"reflectClr"),"$isR")
switch(y){case C.c:break
case C.i:break
case C.h:this.ep=H.j(this.y.q(0,"reflectTxt"),"$isax")
this.bQ=H.j(this.y.q(0,"nullReflectTxt"),"$isT")
break
case C.e:this.eq=H.j(this.y.q(0,"reflectTxt"),"$isar")
this.bQ=H.j(this.y.q(0,"nullReflectTxt"),"$isT")
break}}y=a1.x
if(y!==C.c){this.bR=H.j(this.y.q(0,"refraction"),"$isa3")
this.bS=H.j(this.y.q(0,"refractClr"),"$isR")
switch(y){case C.c:break
case C.i:break
case C.h:this.er=H.j(this.y.q(0,"refractTxt"),"$isax")
this.bT=H.j(this.y.q(0,"nullRefractTxt"),"$isT")
break
case C.e:this.es=H.j(this.y.q(0,"refractTxt"),"$isar")
this.bT=H.j(this.y.q(0,"nullRefractTxt"),"$isT")
break}}}y=a1.y
if(y!==C.c){this.bU=H.j(this.y.q(0,"alpha"),"$isa3")
switch(y){case C.c:break
case C.i:break
case C.h:this.eu=H.j(this.y.q(0,"alphaTxt"),"$isax")
this.bV=H.j(this.y.q(0,"nullAlphaTxt"),"$isT")
break
case C.e:this.ev=H.j(this.y.q(0,"alphaTxt"),"$isar")
this.bV=H.j(this.y.q(0,"nullAlphaTxt"),"$isT")
break}}this.cM=H.c([],[A.fA])
this.cN=H.c([],[A.fB])
this.cO=H.c([],[A.fC])
this.cP=H.c([],[A.fD])
this.cQ=H.c([],[A.fE])
this.cR=H.c([],[A.fF])
if(a1.k2){y=a1.z
if(y>0){this.ew=H.e(this.y.q(0,"dirLightCount"),"$isT")
for(m=0;m<y;++m){x=this.y
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isR")
x=this.y
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isR")
x=this.cM;(x&&C.a).h(x,new A.fA(m,l,k))}}y=a1.Q
if(y>0){this.ex=H.e(this.y.q(0,"pntLightCount"),"$isT")
for(m=0;m<y;++m){x=this.y
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isR")
x=this.y
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isR")
x=this.y
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isR")
x=this.y
w="pntLights["+m+"].att0"
i=x.j(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isa3")
x=this.y
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isa3")
x=this.y
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isa3")
x=this.cN;(x&&C.a).h(x,new A.fB(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.ey=H.e(this.y.q(0,"spotLightCount"),"$isT")
for(m=0;m<y;++m){x=this.y
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isR")
x=this.y
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isR")
x=this.y
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isR")
x=this.y
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isR")
x=this.y
w="spotLights["+m+"].cutoff"
h=x.j(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isa3")
x=this.y
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isa3")
x=this.y
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isa3")
x=this.y
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isa3")
x=this.y
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isa3")
x=this.cO;(x&&C.a).h(x,new A.fC(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.ez=H.e(this.y.q(0,"txtDirLightCount"),"$isT")
for(m=0;m<y;++m){x=this.y
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isR")
x=this.y
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isR")
x=this.y
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isR")
x=this.y
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isR")
x=this.y
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isR")
x=this.y
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isT")
x=this.y
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isax")
x=this.cP;(x&&C.a).h(x,new A.fD(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.eA=H.e(this.y.q(0,"txtPntLightCount"),"$isT")
for(m=0;m<y;++m){x=this.y
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isR")
x=this.y
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isR")
x=this.y
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isdK")
x=this.y
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isR")
x=this.y
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isT")
x=this.y
w="txtPntLights["+m+"].att0"
g=x.j(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isa3")
x=this.y
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isa3")
x=this.y
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isa3")
x=this.y
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isar")
x=this.cQ;(x&&C.a).h(x,new A.fE(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.eB=H.e(this.y.q(0,"txtSpotLightCount"),"$isT")
for(m=0;m<y;++m){x=this.y
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isR")
x=this.y
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isR")
x=this.y
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isR")
x=this.y
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isR")
x=this.y
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isR")
x=this.y
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isT")
x=this.y
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isR")
x=this.y
w="txtSpotLights["+m+"].tuScalar"
e=x.j(0,w)
if(e==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isa3")
x=this.y
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isa3")
x=this.y
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isa3")
x=this.y
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(b,"$isa3")
x=this.y
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a,"$isa3")
x=this.y
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a0,"$isax")
x=this.cR;(x&&C.a).h(x,new A.fF(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
ap:function(a,b,c){b.a.uniform1i(b.d,1)},
ai:function(a,b,c){if(c==null||c.d<6)b.a.uniform1i(b.d,1)
else{a.dq(c)
b.a.uniform1i(b.d,0)}},
u:{
jf:function(a,b){var z,y
z=a.ar
y=new A.eW(b,z)
y.du(b,z)
y.fj(a,b)
return y}}},ji:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,ax,ar,bH",
hO:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.ax+"];\n"
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
hV:function(a){var z
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
hP:function(a){var z
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
i2:function(a){var z,y
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
i3:function(a){var z,y
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
hX:function(a){var z
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
i7:function(a){var z
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
aD:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.f(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.au(c,1))+"Txt;\n"
a.a=z
if(b===C.h)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
hS:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aD(a,z,"emission")
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
case C.h:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
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
hN:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aD(a,z,"ambient")
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
case C.h:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
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
hQ:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aD(a,z,"diffuse")
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
case C.h:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
hT:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aD(a,z,"invDiffuse")
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
case C.h:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
i0:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aD(a,z,"specular")
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
case C.h:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
hW:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.c:break
case C.i:break
case C.h:z+="uniform sampler2D bumpTxt;\n"
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
case C.h:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
hZ:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aD(a,z,"reflect")
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
case C.h:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
i_:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aD(a,z,"refract")
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
case C.h:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
hR:function(a){var z,y
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
hY:function(a){var z,y
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
i1:function(a){var z,y
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
i4:function(a){var z,y,x
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
i5:function(a){var z,y,x
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
i6:function(a){var z,y,x
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
hU:function(a){var z
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
i:function(a){return this.ar}},fA:{"^":"b;a,b,c"},fD:{"^":"b;a,b,c,d,e,f,r,x"},fB:{"^":"b;a,b,c,d,e,f,r"},fE:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fC:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fF:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},dB:{"^":"d8;",
du:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
eL:function(a,b,c){var z,y,x
this.c=b
this.d=c
this.e=this.dK(b,35633)
this.f=this.dK(this.d,35632)
z=this.a
y=z.createProgram()
this.r=y
z.attachShader(y,this.e)
z.attachShader(this.r,this.f)
z.linkProgram(this.r)
if(!H.dY(z.getProgramParameter(this.r,35714))){x=z.getProgramInfoLog(this.r)
z.deleteProgram(this.r)
H.q(P.r("Failed to link shader: "+H.k(x)))}this.hE()
this.hG()},
a3:function(a){a.a.useProgram(this.r)
this.x.it()},
dK:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.dY(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.r("Error compiling shader '"+H.k(y)+"': "+H.k(x)))}return y},
hE:function(){var z,y,x,w,v,u
z=H.c([],[A.eg])
y=this.a
x=H.G(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.eg(y,v.name,u))}this.x=new A.hZ(z)},
hG:function(){var z,y,x,w,v,u
z=H.c([],[A.ai])
y=this.a
x=H.G(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.ip(v.type,v.size,v.name,u))}this.y=new A.kK(z)},
aW:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.T(z,y,b,c)
else return A.dJ(z,y,b,a,c)},
fJ:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ax(z,y,b,c)
else return A.dJ(z,y,b,a,c)},
fK:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ar(z,y,b,c)
else return A.dJ(z,y,b,a,c)},
bA:function(a,b){return new P.fV(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
ip:function(a,b,c,d){switch(a){case 5120:return this.aW(b,c,d)
case 5121:return this.aW(b,c,d)
case 5122:return this.aW(b,c,d)
case 5123:return this.aW(b,c,d)
case 5124:return this.aW(b,c,d)
case 5125:return this.aW(b,c,d)
case 5126:return new A.a3(this.a,this.r,c,d)
case 35664:return new A.kF(this.a,this.r,c,d)
case 35665:return new A.R(this.a,this.r,c,d)
case 35666:return new A.kI(this.a,this.r,c,d)
case 35667:return new A.kG(this.a,this.r,c,d)
case 35668:return new A.kH(this.a,this.r,c,d)
case 35669:return new A.kJ(this.a,this.r,c,d)
case 35674:return new A.kM(this.a,this.r,c,d)
case 35675:return new A.dK(this.a,this.r,c,d)
case 35676:return new A.aS(this.a,this.r,c,d)
case 35678:return this.fJ(b,c,d)
case 35680:return this.fK(b,c,d)
case 35670:throw H.a(this.bA("BOOL",c))
case 35671:throw H.a(this.bA("BOOL_VEC2",c))
case 35672:throw H.a(this.bA("BOOL_VEC3",c))
case 35673:throw H.a(this.bA("BOOL_VEC4",c))
default:throw H.a(P.r("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}},cE:{"^":"b;a,b",
i:function(a){return this.b}},fa:{"^":"dB;0z,0Q,0ch,0cx,0cy,0db,a,b,0c,0d,0e,0f,0r,0x,0y"},ai:{"^":"b;"},kK:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
q:function(a,b){var z=this.j(0,b)
if(z==null)throw H.a(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.O()},
iD:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w)x+=z[w].i(0)+a
return x},
O:function(){return this.iD("\n")}},T:{"^":"ai;a,b,c,d",
i:function(a){return"Uniform1i: "+H.k(this.c)}},kG:{"^":"ai;a,b,c,d",
i:function(a){return"Uniform2i: "+H.k(this.c)}},kH:{"^":"ai;a,b,c,d",
i:function(a){return"Uniform3i: "+H.k(this.c)}},kJ:{"^":"ai;a,b,c,d",
i:function(a){return"Uniform4i: "+H.k(this.c)}},kE:{"^":"ai;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.k(this.c)},
u:{
dJ:function(a,b,c,d,e){var z=new A.kE(a,b,c,e)
z.f=d
z.e=P.j5(d,0,!1,P.n)
return z}}},a3:{"^":"ai;a,b,c,d",
i:function(a){return"Uniform1f: "+H.k(this.c)}},kF:{"^":"ai;a,b,c,d",
i:function(a){return"Uniform2f: "+H.k(this.c)}},R:{"^":"ai;a,b,c,d",
i:function(a){return"Uniform3f: "+H.k(this.c)}},kI:{"^":"ai;a,b,c,d",
i:function(a){return"Uniform4f: "+H.k(this.c)}},kM:{"^":"ai;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.k(this.c)}},dK:{"^":"ai;a,b,c,d",
an:function(a){var z=new Float32Array(H.bF(H.v(a,"$isd",[P.u],"$asd")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.k(this.c)}},aS:{"^":"ai;a,b,c,d",
an:function(a){var z=new Float32Array(H.bF(H.v(a,"$isd",[P.u],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.k(this.c)}},ax:{"^":"ai;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.k(this.c)}},ar:{"^":"ai;a,b,c,d",
dq:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.k(this.c)}}}],["","",,F,{"^":"",
e0:function(a,b,c,d){var z
H.l(c,{func:1,ret:-1,args:[F.af,P.u,P.u]})
z=F.cp()
F.c4(z,b,c,d,a,1,0,0,1)
F.c4(z,b,c,d,a,0,1,0,3)
F.c4(z,b,c,d,a,0,0,1,2)
F.c4(z,b,c,d,a,-1,0,0,0)
F.c4(z,b,c,d,a,0,-1,0,0)
F.c4(z,b,c,d,a,0,0,-1,3)
z.aj()
return z},
cY:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
c4:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.l(c,{func:1,ret:-1,args:[F.af,P.u,P.u]})
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.z(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.z(t+h,s+f,r+g)
z.b=q
p=new V.z(t-h,s-f,r-g)
z.c=p
o=new V.z(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cY(y)
k=F.cY(z.b)
j=F.d5(d,e,new F.nc(z,F.cY(z.c),F.cY(z.d),k,l,c),b)
if(j!=null)a.b8(j)},
hx:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.l(e,{func:1,ret:P.u,args:[P.u]})
if(f<3)return
z=F.cp()
y=b?-1:1
x=-6.283185307179586/f
w=H.c([],[F.af])
v=z.a
u=new V.z(0,0,y)
u=u.t(0,Math.sqrt(u.B(u)))
C.a.h(w,v.ia(new V.aP(a,-1,-1,-1),new V.ap(1,1,1,1),new V.U(0,0,d),new V.z(0,0,y),new V.Q(0.5,0.5),u))
for(v=y*y,t=0;t<=f;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=e.$1(t/f)
u=z.a
if(typeof p!=="number")return H.o(p)
o=new V.z(r,q,y).t(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.bB(new V.aP(a,-1,-1,-1),null,new V.ap(n,l,m,1),new V.U(r*p,q*p,d),new V.z(0,0,y),new V.Q(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.e3(w)
return z},
hv:function(a,b,c,d,e,f){return F.nz(!0,c,d,new F.ny(a,f),e)},
nz:function(a,b,c,d,e){var z
H.l(d,{func:1,ret:P.u,args:[P.u,P.u]})
if(e<3)return
if(c<1)return
z=F.d5(c,e,new F.nB(d),null)
if(z==null)return
z.aj()
z.bD()
if(b)z.b8(F.hx(3,!1,!1,1,new F.nC(d),e))
z.b8(F.hx(1,!0,!1,-1,new F.nD(d),e))
return z},
nW:function(a,b){var z=F.d5(a,b,new F.nX(),null)
z.d.c0()
z.aj()
z.bD()
return z},
aj:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
b=b.t(0,Math.sqrt(b.B(b)))
z=b.a
y=b.b
x=b.c
w=F.bB(null,null,null,new V.U(z,y,x),b,null,null,null,0)
v=a.iv(w,new F.dN())
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
w.sad(0,new V.ap(u,t,s,1))
r=Math.sqrt(z*z+y*y)
q=Math.atan2(y,z)/1.5707963267948966
if(q<0)q=-q
p=Math.atan2(r,x)/3.141592653589793
w.sdc(new V.Q(q,p<0?-p:p))
a.a.h(0,w)
return w},
a0:function(a,b,c,d,e){var z,y,x,w
if(e<=0)a.d.bB(0,b,d,c)
else{z=F.aj(a,b.r.D(0,c.r).k(0,0.5))
y=F.aj(a,c.r.D(0,d.r).k(0,0.5))
x=F.aj(a,d.r.D(0,b.r).k(0,0.5))
w=e-1
F.a0(a,b,z,x,w)
F.a0(a,z,c,y,w)
F.a0(a,y,x,z,w)
F.a0(a,x,y,d,w)}},
hJ:function(a,b,c,d){var z,y
z={}
z.a=b
z.a=new F.og()
y=F.e0(a,null,new F.oh(z,c),d)
y.bD()
return y},
oj:function(a,b,c,d){return F.hw(c,a,d,b,new F.ok())},
nU:function(a,b,c,d,e,f){return F.hw(d,a,e,b,new F.nV(f,c))},
hw:function(a,b,c,d,e){var z=F.d5(a,b,new F.nA(H.l(e,{func:1,ret:V.U,args:[P.u]}),d,b,c),null)
if(z==null)return
z.aj()
z.bD()
return z},
d5:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.af,P.u,P.u]})
if(a<1)return
if(b<1)return
z=F.cp()
y=H.c([],[F.af])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.bB(null,null,new V.ap(u,0,0,1),null,null,new V.Q(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cJ(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.bB(null,null,new V.ap(o,n,m,1),null,null,new V.Q(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cJ(d))}}z.d.i9(a+1,b+1,y)
return z},
nc:{"^":"m:5;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cY(z.b,b).cY(z.d.cY(z.c,b),c)
a.sa_(0,new V.U(y.a,y.b,y.c))
a.sas(y.t(0,Math.sqrt(y.B(y))))
z=1-b
x=1-c
a.se8(new V.aP(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
ny:{"^":"m:25;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
nB:{"^":"m:5;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.o(v)
y=-y*v
u=x*v
a.sa_(0,new V.U(y,u,w))
u=new V.z(y,u,w)
a.sas(u.t(0,Math.sqrt(u.B(u))))
a.se8(new V.aP(1-c,2+c,-1,-1))}},
nC:{"^":"m:34;a",
$1:function(a){return this.a.$2(a,1)}},
nD:{"^":"m:34;a",
$1:function(a){return this.a.$2(1-a,0)}},
nX:{"^":"m:5;",
$3:function(a,b,c){var z,y,x,w
z=c*3.141592653589793
y=Math.sin(z)
x=b*6.283185307179586
w=new V.z(Math.cos(x)*y,Math.cos(z),Math.sin(x)*y)
x=w.t(0,Math.sqrt(w.B(w)))
a.sa_(0,new V.U(x.a,x.b,x.c))}},
og:{"^":"m:25;",
$2:function(a,b){return 0}},
oh:{"^":"m:5;a,b",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.o(z)
y=a.f
x=new V.z(y.a,y.b,y.c)
z=x.t(0,Math.sqrt(x.B(x))).k(0,this.b+z)
a.sa_(0,new V.U(z.a,z.b,z.c))}},
ok:{"^":"m:23;",
$1:function(a){return new V.U(Math.cos(a),Math.sin(a),0)}},
nV:{"^":"m:23;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.U(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
nA:{"^":"m:5;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.e9(y.$1(z),x)
x=J.e9(y.$1(z+3.141592653589793/this.c),x).L(0,w)
x=new V.z(x.a,x.b,x.c)
v=x.t(0,Math.sqrt(x.B(x)))
u=new V.z(1,0,0)
y=v.aI(!v.A(0,u)?new V.z(0,0,1):u)
t=y.t(0,Math.sqrt(y.B(y)))
y=t.aI(v)
u=y.t(0,Math.sqrt(y.B(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.k(0,y*x)
x=t.k(0,r*x)
a.sa_(0,w.D(0,new V.U(y.a-x.a,y.b-x.b,y.c-x.c)))}},
aw:{"^":"b;0a,0b,0c,0d,0e",
aJ:function(){if(!this.gbi()){C.a.F(this.a.a.d.b,this)
this.a.a.T()}this.cq()
this.cr()
this.hp()},
cv:function(a){this.a=a
C.a.h(a.d.b,this)},
cw:function(a){this.b=a
C.a.h(a.d.c,this)},
hD:function(a){this.c=a
C.a.h(a.d.d,this)},
cq:function(){var z=this.a
if(z!=null){C.a.F(z.d.b,this)
this.a=null}},
cr:function(){var z=this.b
if(z!=null){C.a.F(z.d.c,this)
this.b=null}},
hp:function(){var z=this.c
if(z!=null){C.a.F(z.d.d,this)
this.c=null}},
gbi:function(){return this.a==null||this.b==null||this.c==null},
fC:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.z(0,0,0)
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.eM())return
return v.t(0,Math.sqrt(v.B(v)))},
fF:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.L(0,y)
z=new V.z(z.a,z.b,z.c)
v=z.t(0,Math.sqrt(z.B(z)))
z=w.L(0,y)
z=new V.z(z.a,z.b,z.c)
z=v.aI(z.t(0,Math.sqrt(z.B(z))))
return z.t(0,Math.sqrt(z.B(z)))},
cG:function(){if(this.d!=null)return!0
var z=this.fC()
if(z==null){z=this.fF()
if(z==null)return!1}this.d=z
this.a.a.T()
return!0},
fB:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.z(0,0,0)
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.eM())return
return v.t(0,Math.sqrt(v.B(v)))},
fE:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
z=new V.z(z.a,z.b,z.c)
m=z.t(0,Math.sqrt(z.B(z)))
if(o.a-p.a<0)m=m.S(0)}else{l=(z-q.b)/n
z=r.L(0,u).k(0,l).D(0,u).L(0,x)
z=new V.z(z.a,z.b,z.c)
m=z.t(0,Math.sqrt(z.B(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.S(0)}z=this.d
if(z!=null){k=z.t(0,Math.sqrt(z.B(z)))
z=k.aI(m)
z=z.t(0,Math.sqrt(z.B(z))).aI(k)
m=z.t(0,Math.sqrt(z.B(z)))}return m},
cE:function(){if(this.e!=null)return!0
var z=this.fB()
if(z==null){z=this.fE()
if(z==null)return!1}this.e=z
this.a.a.T()
return!0},
aU:function(a,b){var z=b.a
if(z==null)throw H.a(P.r("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.a(P.r("May not replace a face's vertex with a vertex attached to a different shape."))},
gij:function(a){if(J.K(this.a,this.b))return!0
if(J.K(this.b,this.c))return!0
if(J.K(this.c,this.a))return!0
return!1},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var z,y
if(this.gbi())return a+"disposed"
z=a+C.b.al(J.ad(this.a.e),0)+", "+C.b.al(J.ad(this.b.e),0)+", "+C.b.al(J.ad(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
O:function(){return this.G("")},
u:{
bk:function(a,b,c){var z,y,x
z=new F.aw()
y=a.a
if(y==null)H.q(P.r("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.q(P.r("May not create a face with vertices attached to different shapes."))
z.cv(a)
z.cw(b)
z.hD(c)
C.a.h(z.a.a.d.b,z)
z.a.a.T()
return z}}},
iB:{"^":"b;"},
kc:{"^":"iB;",
b7:function(a,b,c){var z,y
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
dp:{"^":"b;0a,0b",
aJ:function(){if(!this.gbi()){C.a.F(this.a.a.c.b,this)
this.a.a.T()}this.cq()
this.cr()},
cv:function(a){this.a=a
C.a.h(a.c.b,this)},
cw:function(a){this.b=a
C.a.h(a.c.c,this)},
cq:function(){var z=this.a
if(z!=null){C.a.F(z.c.b,this)
this.a=null}},
cr:function(){var z=this.b
if(z!=null){C.a.F(z.c.c,this)
this.b=null}},
gbi:function(){return this.a==null||this.b==null},
aU:function(a,b){var z=b.a
if(z==null)throw H.a(P.r("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.a(P.r("May not replace a line's vertex with a vertex attached to a different shape."))},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){if(this.gbi())return a+"disposed"
return a+C.b.al(J.ad(this.a.e),0)+", "+C.b.al(J.ad(this.b.e),0)},
O:function(){return this.G("")},
u:{
iX:function(a,b){var z,y,x
z=new F.dp()
y=a.a
if(y==null)H.q(P.r("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.q(P.r("May not create a line with vertices attached to different shapes."))
z.cv(a)
z.cw(b)
C.a.h(z.a.a.c.b,z)
z.a.a.T()
return z}}},
iY:{"^":"b;"},
kD:{"^":"iY;",
b7:function(a,b,c){var z,y
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
dz:{"^":"b;0a",
aJ:function(){var z=this.a
if(z!=null){C.a.F(z.a.b.b,this)
this.a.a.T()}this.ho()},
ho:function(){var z=this.a
if(z!=null){C.a.F(z.b.b,this)
this.a=null}},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.al(J.ad(z.e),0)},
O:function(){return this.G("")}},
f9:{"^":"b;0a,0b,0c,0d,0e",
gv:function(){var z=this.e
if(z==null){z=D.M()
this.e=z}return z},
b8:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.C()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){v=z[w]
this.a.h(0,v.il())}this.a.C()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.dz()
if(r.a==null)H.q(P.r("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.E(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.C()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
F.iX(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.B)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.C()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
m=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,m)
F.bk(p,o,m)}z=this.e
if(!(z==null))z.aA(0)},
aj:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aj()||!1
if(!this.a.aj())y=!1
z=this.e
if(!(z==null))z.aA(0)
return y},
iw:function(a,b,c){var z,y,x,w
z=this.a.c.length
for(y=c;y<z;++y){x=this.a.c
if(y>=x.length)return H.f(x,y)
w=x[y]
if(b.b7(0,a,w))return w}return},
iv:function(a,b){return this.iw(a,b,0)},
hr:function(a,b){var z,y,x,w,v,u
H.v(b,"$isd",[F.af],"$asd")
this.a.h(0,a)
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.B)(b),++y){x=b[y]
for(;w=x.d,w.b.length+w.c.length+w.d.length>0;){w=w.j(0,0)
v=w.a
if(v==null||w.b==null||w.c==null)H.q(P.r("May not replace a face's vertex when the point has been disposed."))
if(J.K(v,x)){w.aU(x,a)
v=w.a
if(v!=null){C.a.F(v.d.b,w)
w.a=null}w.a=a
C.a.h(a.d.b,w)
u=1}else u=0
if(J.K(w.b,x)){w.aU(x,a)
v=w.b
if(v!=null){C.a.F(v.d.c,w)
w.b=null}w.b=a
C.a.h(a.d.c,w);++u}if(J.K(w.c,x)){w.aU(x,a)
v=w.c
if(v!=null){C.a.F(v.d.d,w)
w.c=null}w.c=a
C.a.h(a.d.d,w);++u}if(u>0){w=w.a.a.e
if(!(w==null))w.E(null)}}for(;w=x.c,w.b.length+w.c.length>0;){w=w.j(0,0)
v=w.a
if(v==null||w.b==null)H.q(P.r("May not replace a line's vertex when the point has been disposed."))
if(J.K(v,x)){w.aU(x,a)
v=w.a
if(v!=null){C.a.F(v.c.b,w)
w.a=null}w.a=a
C.a.h(a.c.b,w)
u=1}else u=0
if(J.K(w.b,x)){w.aU(x,a)
v=w.b
if(v!=null){C.a.F(v.c.c,w)
w.b=null}w.b=a
C.a.h(a.c.c,w);++u}if(u>0){w=w.a.a.e
if(!(w==null))w.E(null)}}for(;w=x.b.b,w.length>0;){w=w[0]
v=w.a
if(v==null)H.q(P.r("May not replace a point's vertex when the point has been disposed."))
if(J.K(v,x)){if(a.a==null)H.q(P.r("May not replace a point's vertex with a vertex which is not attached to a shape."))
v=w.a
if(v!=null){C.a.F(v.b.b,w)
w.a=null}w.a=a
C.a.h(a.b.b,w)
u=1}else u=0
if(u>0){w=w.a.a.e
if(!(w==null))w.E(null)}}this.a.F(0,x)}},
eQ:function(a,b){var z,y,x,w,v,u,t,s
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.c(z.slice(0),[H.y(z,0)])
for(z=[F.af];y.length!==0;){x=C.a.giy(y)
C.a.j6(y,0)
if(x!=null){w=H.c([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.B)(y),++u){t=y[u]
if(t!=null&&a.b7(0,x,t)){C.a.h(w,t)
C.a.F(y,t)}}if(w.length>1){s=b.b8(w)
if(s!=null){this.hr(s,w)
C.a.h(y,s)}}}}this.a.C()
this.c.c0()
this.d.c0()
this.b.j7()
this.c.d8(new F.kD())
this.d.d8(new F.kc())
z=this.e
if(!(z==null))z.aA(0)},
ib:function(a){this.eQ(new F.dN(),new F.ju())},
bD:function(){return this.ib(null)},
eb:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aG()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$b2().a)!==0)++w
if((x&$.$get$b1().a)!==0)++w
if((x&$.$get$b3().a)!==0)++w
if((x&$.$get$b4().a)!==0)++w
if((x&$.$get$bZ().a)!==0)++w
if((x&$.$get$c_().a)!==0)++w
if((x&$.$get$bD().a)!==0)++w
if((x&$.$get$b0().a)!==0)++w
v=b.gdr(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.u
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.em])
for(r=0,q=0;q<w;++q){p=b.ie(q)
o=p.gdr(p)
C.a.p(s,q,new Z.em(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.f(y,n)
m=y[n].iL(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.p(t,l,m[k]);++l}}r+=o}H.v(t,"$isd",[x],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bF(t)),35044)
y.bindBuffer(34962,null)
i=new Z.dc(new Z.fQ(34962,j),s,b)
i.b=H.c([],[Z.cI])
if(this.b.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.C()
C.a.h(h,g.e)}f=Z.dO(y,34963,H.v(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cI(0,h.length,f))}if(this.c.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.C()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.C()
C.a.h(h,g.e)}f=Z.dO(y,34963,H.v(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cI(1,h.length,f))}if(this.d.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.C()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.C()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].c
g.a.a.C()
C.a.h(h,g.e)}f=Z.dO(y,34963,H.v(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cI(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.h])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.G("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.G("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.G("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.G("   "))}return C.a.n(z,"\n")},
b9:function(a){var z=this.e
if(!(z==null))z.E(a)},
T:function(){return this.b9(null)},
u:{
cp:function(){var z,y
z=new F.f9()
y=new F.l9(z)
y.b=!1
y.c=H.c([],[F.af])
z.a=y
y=new F.k6(z)
y.b=H.c([],[F.dz])
z.b=y
y=new F.k5(z)
y.b=H.c([],[F.dp])
z.c=y
y=new F.k4(z)
y.b=H.c([],[F.aw])
z.d=y
z.e=null
return z}}},
k4:{"^":"b;a,0b",
bB:function(a,b,c,d){this.a.a.h(0,b)
this.a.a.h(0,c)
this.a.a.h(0,d)
return F.bk(b,c,d)},
e3:function(a){var z,y,x,w,v,u
H.v(a,"$isd",[F.af],"$asd")
z=H.c([],[F.aw])
y=a.length
if(y>0){x=a[0]
for(w=2;w<y;++w){v=w-1
u=a.length
if(v>=u)return H.f(a,v)
v=a[v]
if(w>=u)return H.f(a,w)
u=a[w]
this.a.a.h(0,x)
this.a.a.h(0,v)
this.a.a.h(0,u)
C.a.h(z,F.bk(x,v,u))}}return z},
i9:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.v(c,"$isd",[F.af],"$asd")
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
C.a.h(z,F.bk(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bk(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bk(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bk(q,n,r))}u=!u}w=!w}return z},
gm:function(a){return this.b.length},
d8:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.f(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.j(0,w)
for(u=w-1;u>=0;--u){t=x.d.j(0,u)
if(a.b7(0,v,t)){v.aJ()
break}}}}},
c0:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=x.gij(x)
if(y)x.aJ()}},
aj:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].cG())x=!1
return x},
cF:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].cE())x=!1
return x},
i:function(a){return this.O()},
G:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].G(a))
return C.a.n(z,"\n")},
O:function(){return this.G("")}},
k5:{"^":"b;a,0b",
gm:function(a){return this.b.length},
d8:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.f(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.j(0,w)
for(u=w-1;u>=0;--u){t=x.c.j(0,u)
if(a.b7(0,v,t)){v.aJ()
break}}}}},
c0:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=J.K(x.a,x.b)
if(y)x.aJ()}},
i:function(a){return this.O()},
G:function(a){var z,y,x,w
z=H.c([],[P.h])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.f(w,x)
C.a.h(z,w[x].G(a+(""+x+". ")))}return C.a.n(z,"\n")},
O:function(){return this.G("")}},
k6:{"^":"b;a,0b",
gm:function(a){return this.b.length},
j7:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aJ()}},
i:function(a){return this.O()},
G:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].G(a))
return C.a.n(z,"\n")},
O:function(){return this.G("")}},
af:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cJ:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.bB(this.cx,x,u,z,y,w,v,a,t)},
il:function(){return this.cJ(null)},
gcX:function(a){var z
if(this.b.b.length===0){z=this.c
if(z.b.length===0&&z.c.length===0){z=this.d
z=z.b.length===0&&z.c.length===0&&z.d.length===0}else z=!1}else z=!1
return z},
sa_:function(a,b){var z
if(!J.K(this.f,b)){this.f=b
z=this.a
if(z!=null)z.T()}},
sd1:function(a){var z
a=a==null?null:a.t(0,Math.sqrt(a.B(a)))
if(!J.K(this.r,a)){this.r=a
z=this.a
if(z!=null)z.T()}},
sea:function(a){var z
a=a==null?null:a.t(0,Math.sqrt(a.B(a)))
if(!J.K(this.x,a)){this.x=a
z=this.a
if(z!=null)z.T()}},
sdc:function(a){var z
if(!J.K(this.y,a)){this.y=a
z=this.a
if(z!=null)z.T()}},
sas:function(a){var z
if(!J.K(this.z,a)){this.z=a
z=this.a
if(z!=null)z.T()}},
sad:function(a,b){var z
if(!J.K(this.Q,b)){this.Q=b
z=this.a
if(z!=null)z.T()}},
sf3:function(a,b){var z
if(this.ch!==b){this.ch=b
z=this.a
if(z!=null)z.T()}},
se8:function(a){var z
if(!J.K(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.T()}},
iL:function(a){var z,y
z=J.L(a)
if(z.A(a,$.$get$aG())){z=this.f
y=[P.u]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$b2())){z=this.r
y=[P.u]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$b1())){z=this.x
y=[P.u]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$b3())){z=this.y
y=[P.u]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.A(a,$.$get$b4())){z=this.z
y=[P.u]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$bZ())){z=this.Q
y=[P.u]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$c_())){z=this.Q
if(z==null)return H.c([1,1,1,1],[P.u])
else return z.dd(0)}else if(z.A(a,$.$get$bD()))return H.c([this.ch],[P.u])
else if(z.A(a,$.$get$b0())){z=this.cx
y=[P.u]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.u])},
cG:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.z(0,0,0)
this.d.K(0,new F.li(z))
z=z.a
this.r=z.t(0,Math.sqrt(z.B(z)))
z=this.a
if(z!=null){z.T()
z=this.a.e
if(!(z==null))z.aA(0)}return!0},
cE:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.z(0,0,0)
this.d.K(0,new F.lh(z))
z=z.a
this.x=z.t(0,Math.sqrt(z.B(z)))
z=this.a
if(z!=null){z.T()
z=this.a.e
if(!(z==null))z.aA(0)}return!0},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var z,y,x
z=H.c([],[P.h])
C.a.h(z,C.b.al(J.ad(this.e),0))
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
C.a.h(z,V.S(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.n(z,", ")
return a+"{"+x+"}"},
O:function(){return this.G("")},
u:{
bB:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.af()
y=new F.lg(z)
y.b=H.c([],[F.dz])
z.b=y
y=new F.le(z)
x=[F.dp]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.la(z)
x=[F.aw]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
z.d=y
h=$.$get$fN()
z.e=0
y=$.$get$aG()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$b2().a)!==0?e:null
z.x=(x&$.$get$b1().a)!==0?b:null
z.y=(x&$.$get$b3().a)!==0?f:null
z.z=(x&$.$get$b4().a)!==0?g:null
z.Q=(x&$.$get$fO().a)!==0?c:null
z.ch=(x&$.$get$bD().a)!==0?i:0
z.cx=(x&$.$get$b0().a)!==0?a:null
return z}}},
li:{"^":"m:7;a",
$1:function(a){var z,y
H.e(a,"$isaw")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
lh:{"^":"m:7;a",
$1:function(a){var z,y
H.e(a,"$isaw")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
l9:{"^":"b;a,0b,0c",
C:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.f(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.r("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.T()
return!0},
e4:function(a,b,c,d,e,f,g,h,i){var z=F.bB(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bC:function(a,b,c,d,e,f){return this.e4(a,null,b,c,null,d,e,f,0)},
ia:function(a,b,c,d,e,f){return this.e4(a,null,b,c,d,e,f,null,0)},
gm:function(a){return this.c.length},
F:function(a,b){if(b==null)return!1
if(b.a!==this.a)return!1
if(!b.gcX(b))throw H.a(P.r("May not remove a vertex without first making it empty."))
b.a=null
C.a.F(this.c,b)
this.a.T()
this.b=!0
return!0},
aj:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].cG()
return!0},
cF:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].cE()
return!0},
ii:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.t(0,Math.sqrt(u*u+t*t+s*s))
if(!J.K(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.E(null)}}}}return!0},
i:function(a){return this.O()},
G:function(a){var z,y,x,w
this.C()
z=H.c([],[P.h])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].G(a))
return C.a.n(z,"\n")},
O:function(){return this.G("")}},
la:{"^":"b;a,0b,0c,0d",
gm:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.f(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.f(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
K:function(a,b){H.l(b,{func:1,ret:-1,args:[F.aw]})
C.a.K(this.b,b)
C.a.K(this.c,new F.lb(this,b))
C.a.K(this.d,new F.lc(this,b))},
i:function(a){return this.O()},
G:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].G(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].G(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].G(a))
return C.a.n(z,"\n")},
O:function(){return this.G("")}},
lb:{"^":"m:7;a,b",
$1:function(a){H.e(a,"$isaw")
if(!J.K(a.a,this.a))this.b.$1(a)}},
lc:{"^":"m:7;a,b",
$1:function(a){var z
H.e(a,"$isaw")
z=this.a
if(!J.K(a.a,z)&&!J.K(a.b,z))this.b.$1(a)}},
le:{"^":"b;a,0b,0c",
gm:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.f(z,x)
return z[x]}else{if(b<0)return H.f(z,b)
return z[b]}},
i:function(a){return this.O()},
G:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].G(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].G(a))
return C.a.n(z,"\n")},
O:function(){return this.G("")}},
lf:{"^":"b;"},
dN:{"^":"lf;",
b7:function(a,b,c){return J.K(b.f,c.f)}},
fM:{"^":"b;"},
ld:{"^":"fM;",
b8:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.v(a,"$isd",[F.af],"$asd")
for(z=a.length,y=0,x=null,w=null,v=null,u=0,t=null,s=0,r=null,q=0,p=null,o=0,n=0,m=0;m<z;++m){l=a[m]
k=l.f
if(k!=null){x=x==null?k:new V.U(x.a+k.a,x.b+k.b,x.c+k.c);++y}j=l.r
if(j!=null)w=w==null?j:new V.z(w.a+j.a,w.b+j.b,w.c+j.c)
i=l.x
if(i!=null)v=v==null?i:new V.z(v.a+i.a,v.b+i.b,v.c+i.c)
h=l.y
if(h!=null){r=r==null?h:new V.Q(r.a+h.a,r.b+h.b);++s}g=l.z
if(g!=null){p=p==null?g:new V.z(p.a+g.a,p.b+g.b,p.c+g.c);++q}f=l.Q
if(f!=null){e=f.a
d=f.b
c=f.c
f=f.d
if(t==null){f=[e,d,c,f]
t=new V.bY(f[0],f[1],f[2],f[3])}else{f=[e,d,c,f]
e=f[0]
d=f[1]
c=f[2]
f=f[3]
t=new V.bY(t.a+e,t.b+d,t.c+c,t.d+f)}++u}f=l.ch
if(typeof f!=="number")return H.o(f)
n+=f;++o}b=F.bB(null,null,null,null,null,null,null,null,0)
if(y<=0||x==null)b.sa_(0,null)
else b.sa_(0,x.t(0,y))
if(w==null)b.sd1(null)
else b.sd1(w.t(0,Math.sqrt(w.B(w))))
if(v==null)b.sea(null)
else b.sea(v.t(0,Math.sqrt(v.B(v))))
if(s<=0||r==null)b.sdc(null)
else b.sdc(r.t(0,s))
if(q<=0||p==null)b.sas(null)
else b.sas(p.t(0,q))
if(u<=0||t==null)b.sad(0,null)
else{z=t.t(0,u)
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
b.sad(0,new V.ap(f,e,d,z))}if(o<=0)b.sf3(0,0)
else b.sf3(0,n/o)
return b}},
ju:{"^":"fM;",
b8:function(a){var z,y,x,w
H.v(a,"$isd",[F.af],"$asd")
z=new V.z(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.z(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.t(0,Math.sqrt(z.B(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.B)(a),++x)a[x].sd1(z)
return}},
lg:{"^":"b;a,0b",
gm:function(a){return this.b.length},
i:function(a){return this.O()},
G:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].G(a))
return C.a.n(z,"\n")},
O:function(){return this.G("")}}}],["","",,O,{"^":"",je:{"^":"cr;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gv:function(){var z=this.dy
if(z==null){z=D.M()
this.dy=z}return z},
W:[function(a){var z
H.e(a,"$isC")
z=this.dy
if(!(z==null))z.E(a)},function(){return this.W(null)},"dA","$1","$0","gaT",0,2,1],
hu:[function(a){H.e(a,"$isC")
this.a=null
this.W(a)},function(){return this.hu(null)},"jW","$1","$0","ght",0,2,1],
jw:[function(a,b){var z=V.aK
z=new D.ci(a,H.v(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.W(z)},"$2","gfX",8,0,31],
jx:[function(a,b){var z=V.aK
z=new D.cj(a,H.v(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.W(z)},"$2","gfY",8,0,31],
dH:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.f.a9(z.e.length+3,4)*4
x=C.f.a9(z.f.length+3,4)*4
w=C.f.a9(z.r.length+3,4)*4
v=C.f.a9(z.x.length+3,4)*4
u=C.f.a9(z.y.length+3,4)*4
t=C.f.a9(z.z.length+3,4)*4
s=C.f.a9(this.e.a.length+3,4)*4
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
a=q===C.h||p===C.h||o===C.h||n===C.h||m===C.h||l===C.h||k===C.h||j===C.h||i===C.h
a0=q===C.e||p===C.e||o===C.e||n===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$aG()
if(c){z=$.$get$b2()
a6=new Z.bC(a6.a|z.a)}if(b){z=$.$get$b1()
a6=new Z.bC(a6.a|z.a)}if(a){z=$.$get$b3()
a6=new Z.bC(a6.a|z.a)}if(a0){z=$.$get$b4()
a6=new Z.bC(a6.a|z.a)}if(a2){z=$.$get$b0()
a6=new Z.bC(a6.a|z.a)}return new A.ji(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
Z:function(a,b){H.v(a,"$isd",[T.dG],"$asd")
if(b!=null)if(!C.a.X(a,b)){b.a=a.length
C.a.h(a,b)}},
at:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.aB(z,z.length,0,[H.y(z,0)]);z.H();){y=z.d
x=new V.z(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.de(x)}}},
eW:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.dH()
y=H.e(a.fr.j(0,z.ar),"$iseW")
if(y==null){y=A.jf(z,a.a)
a.e6(y)}this.a=y
b.e=null
z=y}x=z.z
w=x.bH
z=b.e
if(!(z instanceof Z.dc)){b.e=null
z=null}if(z==null||!z.d.A(0,w)){z=x.r1
if(z)b.d.aj()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.d
u.d.cF()
u.a.cF()
u=u.e
if(!(u==null))u.aA(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.a.ii()
t=t.e
if(!(t==null))t.aA(0)}r=b.d.eb(new Z.fR(a.a),w)
r.aL($.$get$aG()).e=this.a.Q.c
if(z)r.aL($.$get$b2()).e=this.a.cx.c
if(v)r.aL($.$get$b1()).e=this.a.ch.c
if(x.rx)r.aL($.$get$b3()).e=this.a.cy.c
if(u)r.aL($.$get$b4()).e=this.a.db.c
if(x.x1)r.aL($.$get$b0()).e=this.a.dx.c
b.e=r}z=T.dG
q=H.c([],[z])
this.a.a3(a)
if(x.fx){v=this.a
u=a.dx
u=u.ga4(u)
v=v.dy
v.toString
v.an(u.ag(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.ga4(u)
t=a.dx
t=u.k(0,t.ga4(t))
a.cx=t
u=t}v=v.fr
v.toString
v.an(u.ag(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.gj3()
t=a.dx
t=u.k(0,t.ga4(t))
a.ch=t
u=t}v=v.fy
v.toString
v.an(u.ag(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.k1
v.toString
v.an(u.ag(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.k2
v.toString
v.an(u.ag(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k3
v.toString
v.an(C.w.ag(u,!0))}if(x.ax>0){p=this.e.a.length
v=this.a.k4
v.a.uniform1i(v.d,p)
for(v=[P.u],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.f(t,o)
t=t[o]
u.toString
H.e(t,"$isaK")
u=u.r1
if(o>=u.length)return H.f(u,o)
u=u[o]
n=new Float32Array(H.bF(H.v(t.ag(0,!0),"$isd",v,"$asd")))
u.a.uniformMatrix4fv(u.d,!1,n)}}switch(x.a){case C.c:break
case C.i:v=this.a
u=this.f.f
v=v.r2
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.h:this.Z(q,this.f.d)
v=this.a
u=this.f.d
v.ap(v.rx,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.Z(q,this.f.e)
v=this.a
u=this.f.e
v.ai(v.ry,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}if(x.k2){switch(x.b){case C.c:break
case C.i:v=this.a
u=this.r.f
v=v.x2
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.h:this.Z(q,this.r.d)
v=this.a
u=this.r.d
v.ap(v.y1,v.ax,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.Z(q,this.r.e)
v=this.a
u=this.r.e
v.ai(v.y2,v.ax,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.c){case C.c:break
case C.i:v=this.a
u=this.x.f
v=v.ar
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.h:this.Z(q,this.x.d)
v=this.a
u=this.x.d
v.ap(v.bH,v.bI,u)
u=this.a
v=this.x.f
u=u.ar
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.Z(q,this.x.e)
v=this.a
u=this.x.e
v.ai(v.eg,v.bI,u)
u=this.a
v=this.x.f
u=u.ar
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.d){case C.c:break
case C.i:v=this.a
u=this.y.f
v=v.bJ
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.h:this.Z(q,this.y.d)
v=this.a
u=this.y.d
v.ap(v.eh,v.bK,u)
u=this.a
v=this.y.f
u=u.bJ
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.Z(q,this.y.e)
v=this.a
u=this.y.e
v.ai(v.ei,v.bK,u)
u=this.a
v=this.y.f
u=u.bJ
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.c:break
case C.i:v=this.a
u=this.z.f
v=v.bL
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bN
u.a.uniform1f(u.d,s)
break
case C.h:this.Z(q,this.z.d)
v=this.a
u=this.z.d
v.ap(v.ej,v.bM,u)
u=this.a
v=this.z.f
u=u.bL
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bN
v.a.uniform1f(v.d,s)
break
case C.e:this.Z(q,this.z.e)
v=this.a
u=this.z.e
v.ai(v.ek,v.bM,u)
u=this.a
v=this.z.f
u=u.bL
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bN
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.ew
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga4(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
t=this.a.cM
if(l>=t.length)return H.f(t,l)
i=t[l]
t=m.de(j.a)
s=t.a
h=t.b
g=t.c
g=t.t(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.ex
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga4(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
t=this.a.cN
if(l>=t.length)return H.f(t,l)
i=t[l]
t=j.gbl(j)
s=i.b
h=t.gdi(t)
g=t.gdj(t)
t=t.gdk(t)
s.a.uniform3f(s.d,h,g,t)
t=m.bs(j.gbl(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gad(j)
g=i.d
h=t.gc_()
s=t.gbt()
t=t.gbE()
g.a.uniform3f(g.d,h,s,t)
t=j.gcz()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gcA()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gcB()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.ey
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga4(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
t=this.a.cO
if(l>=t.length)return H.f(t,l)
i=t[l]
t=j.gbl(j)
s=i.b
h=t.gdi(t)
g=t.gdj(t)
t=t.gdk(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gcL(j).k7()
g=i.c
h=t.gb2(t)
s=t.gb3(t)
t=t.gb4()
g.a.uniform3f(g.d,h,s,t)
t=m.bs(j.gbl(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gad(j)
s=i.e
h=t.gc_()
g=t.gbt()
t=t.gbE()
s.a.uniform3f(s.d,h,g,t)
t=j.gk5()
g=i.f
g.a.uniform1f(g.d,t)
t=j.gk_()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gcz()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gcA()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gcB()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.ez
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga4(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
s=this.a.cP
if(l>=s.length)return H.f(s,l)
i=s[l]
s=j.gbp()
H.v(q,"$isd",t,"$asd")
if(!C.a.X(q,s)){s.scg(q.length)
C.a.h(q,s)}s=j.gcL(j)
h=i.d
g=s.gb2(s)
f=s.gb3(s)
s=s.gb4()
h.a.uniform3f(h.d,g,f,s)
s=j.gc1()
f=i.b
g=s.gb2(s)
h=s.gb3(s)
s=s.gb4()
f.a.uniform3f(f.d,g,h,s)
s=j.gbm(j)
h=i.c
g=s.gb2(s)
f=s.gb3(s)
s=s.gb4()
h.a.uniform3f(h.d,g,f,s)
s=m.de(j.gcL(j))
f=s.a
g=s.b
h=s.c
h=s.t(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gad(j)
g=i.f
f=h.gc_()
s=h.gbt()
h=h.gbE()
g.a.uniform3f(g.d,f,s,h)
h=j.gbp()
s=h.gbW(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gbW(h)
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.giG(h))
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.eA
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga4(v)
for(v=this.dx.y,u=v.length,t=[P.u],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
h=this.a.cQ
if(l>=h.length)return H.f(h,l)
i=h[l]
h=j.gbp()
H.v(q,"$isd",s,"$asd")
if(!C.a.X(q,h)){h.scg(q.length)
C.a.h(q,h)}e=m.k(0,j.ga4(j))
h=j.ga4(j).bs(new V.U(0,0,0))
g=i.b
f=h.gdi(h)
d=h.gdj(h)
h=h.gdk(h)
g.a.uniform3f(g.d,f,d,h)
h=e.bs(new V.U(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.cW(0)
d=i.d
n=new Float32Array(H.bF(H.v(new V.cM(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).ag(0,!0),"$isd",t,"$asd")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gad(j)
h=i.e
f=d.gc_()
g=d.gbt()
d=d.gbE()
h.a.uniform3f(h.d,f,g,d)
d=j.gbp()
h=d.gbW(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gjq()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gcg())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gcz()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gcA()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gcB()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.eB
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga4(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.B)(v),++k){j=v[k]
t=this.a.cR
if(l>=t.length)return H.f(t,l)
i=t[l]
t=j.gbp()
H.v(q,"$isd",z,"$asd")
if(!C.a.X(q,t)){t.scg(q.length)
C.a.h(q,t)}t=j.gbl(j)
s=i.b
h=t.gdi(t)
g=t.gdj(t)
t=t.gdk(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gcL(j)
g=i.c
h=t.gb2(t)
s=t.gb3(t)
t=t.gb4()
g.a.uniform3f(g.d,h,s,t)
t=j.gc1()
s=i.d
h=t.gb2(t)
g=t.gb3(t)
t=t.gb4()
s.a.uniform3f(s.d,h,g,t)
t=j.gbm(j)
g=i.e
h=t.gb2(t)
s=t.gb3(t)
t=t.gb4()
g.a.uniform3f(g.d,h,s,t)
t=m.bs(j.gbl(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gbp()
s=t.gbW(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gbW(t)
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.giG(t))
t=i.x
t.a.uniform1i(t.d,0)}t=j.gad(j)
s=i.y
h=t.gc_()
g=t.gbt()
t=t.gbE()
s.a.uniform3f(s.d,h,g,t)
t=j.gkc()
g=i.z
g.a.uniform1f(g.d,t)
t=j.gkd()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gcz()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gcA()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gcB()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.c:break
case C.i:break
case C.h:this.Z(q,this.Q.d)
z=this.a
v=this.Q.d
z.ap(z.el,z.bO,v)
break
case C.e:this.Z(q,this.Q.e)
z=this.a
v=this.Q.e
z.ai(z.em,z.bO,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.ga4(v).cW(0)
a.Q=v}z=z.id
z.toString
z.an(v.ag(0,!0))}if(x.dy){this.Z(q,this.ch)
z=this.a
v=this.ch
z.ai(z.en,z.eo,v)
switch(x.r){case C.c:break
case C.i:z=this.a
v=this.cx.f
z=z.bP
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.h:this.Z(q,this.cx.d)
z=this.a
v=this.cx.d
z.ap(z.ep,z.bQ,v)
v=this.a
z=this.cx.f
v=v.bP
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.e:this.Z(q,this.cx.e)
z=this.a
v=this.cx.e
z.ai(z.eq,z.bQ,v)
v=this.a
z=this.cx.f
v=v.bP
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.c:break
case C.i:z=this.a
v=this.cy.f
z=z.bS
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bR
v.a.uniform1f(v.d,t)
break
case C.h:this.Z(q,this.cy.d)
z=this.a
v=this.cy.d
z.ap(z.er,z.bT,v)
v=this.a
z=this.cy.f
v=v.bS
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bR
z.a.uniform1f(z.d,t)
break
case C.e:this.Z(q,this.cy.e)
z=this.a
v=this.cy.e
z.ai(z.es,z.bT,v)
v=this.a
z=this.cy.f
v=v.bS
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bR
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.c
if(v){switch(z){case C.c:break
case C.i:z=this.a
u=this.db.f
z=z.bU
z.a.uniform1f(z.d,u)
break
case C.h:this.Z(q,this.db.d)
z=this.a
u=this.db.d
z.ap(z.eu,z.bV,u)
u=this.a
z=this.db.f
u=u.bU
u.a.uniform1f(u.d,z)
break
case C.e:this.Z(q,this.db.e)
z=this.a
u=this.db.e
z.ai(z.ev,z.bV,u)
u=this.a
z=this.db.f
u=u.bU
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o)q[o].a3(a)
z=b.e
z.a3(a)
z.af(a)
z.aO(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o){z=q[o]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(34067,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.x.ee()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dH().ar}},jg:{"^":"dt;0f,a,b,0c,0d,0e",
hz:function(a){var z,y
z=this.f
if(!$.p.$2(z,a)){y=this.f
this.f=a
z=new D.O(this.b,y,a,this,[P.u])
z.b=!0
this.a.W(z)}},
aY:function(){this.dt()
this.hz(1)}},dt:{"^":"b;",
W:[function(a){this.a.W(H.e(a,"$isC"))},function(){return this.W(null)},"dA","$1","$0","gaT",0,2,1],
aY:["dt",function(){}],
hB:function(a){},
hC:function(a){var z,y
z=this.e
if(z==null?a!=null:z!==a){if(z!=null)z.gv().F(0,this.gaT())
y=this.e
this.e=a
if(a!=null)a.gv().h(0,this.gaT())
z=new D.O(this.b+".textureCube",y,this.e,this,[T.cQ])
z.b=!0
this.a.W(z)}},
sas:function(a){var z=this.c
if(z!==C.e){if(z===C.c)this.aY()
this.c=C.e
this.hB(null)
z=this.a
z.a=null
z.W(null)}this.hC(a)}},jh:{"^":"dt;a,b,0c,0d,0e"},bn:{"^":"dt;0f,a,b,0c,0d,0e",
dV:function(a){var z,y
if(!J.K(this.f,a)){z=this.f
this.f=a
y=new D.O(this.b+".color",z,a,this,[V.a5])
y.b=!0
this.a.W(y)}},
aY:["c7",function(){this.dt()
this.dV(new V.a5(1,1,1))}],
sad:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.aY()
z=this.a
z.a=null
z.W(null)}this.dV(b)}},jj:{"^":"bn;0ch,0f,a,b,0c,0d,0e",
hA:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.O(this.b+".refraction",y,a,this,[P.u])
z.b=!0
this.a.W(z)}},
aY:function(){this.c7()
this.hA(1)}},jk:{"^":"bn;0ch,0f,a,b,0c,0d,0e",
cs:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.O(this.b+".shininess",y,a,this,[P.u])
z.b=!0
this.a.W(z)}},
aY:function(){this.c7()
this.cs(100)}},kd:{"^":"cr;0a,0b,0c,0d,0e",
gv:function(){var z=this.e
if(z==null){z=D.M()
this.e=z}return z},
W:[function(a){var z
H.e(a,"$isC")
z=this.e
if(!(z==null))z.E(a)},function(){return this.W(null)},"dA","$1","$0","gaT",0,2,1],
eW:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.e(a.fr.j(0,"Skybox"),"$isfa")
if(z==null){y=a.a
z=new A.fa(y,"Skybox")
z.du(y,"Skybox")
z.eL(0,$.kf,$.ke)
z.z=z.x.j(0,"posAttr")
z.Q=H.j(z.y.j(0,"fov"),"$isa3")
z.ch=H.j(z.y.j(0,"ratio"),"$isa3")
z.cx=H.j(z.y.j(0,"boxClr"),"$isR")
z.cy=H.j(z.y.j(0,"boxTxt"),"$isar")
z.db=H.j(z.y.j(0,"viewMat"),"$isaS")
a.e6(z)}this.a=z}if(b.e==null){y=b.d.eb(new Z.fR(a.a),$.$get$aG())
y.aL($.$get$aG()).e=this.a.z.c
b.e=y}y=this.c
if(y!=null){y.a=1
y.a3(a)}y=a.d
x=a.c
w=this.a
w.a3(a)
v=this.b
u=w.Q
u.a.uniform1f(u.d,v)
v=w.ch
v.a.uniform1f(v.d,y/x)
x=this.c
w.cy.dq(x)
x=this.d
y=w.cx
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.ga4(x).cW(0)
w=w.db
w.toString
w.an(x.ag(0,!0))
y=b.e
if(y instanceof Z.dc){y.a3(a)
y.af(a)
y.aO(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.x.ee()
y=this.c
if(y!=null)y.aO(a)}},cr:{"^":"b;"}}],["","",,T,{"^":"",dG:{"^":"d8;"},cQ:{"^":"dG;0a,0b,0c,0d,0e",
gv:function(){var z=this.e
if(z==null){z=D.M()
this.e=z}return z},
a3:function(a){if(!this.c&&this.d>=6){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,this.b)}},
aO:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,null)}}},kp:{"^":"b;a,0b,0c,0d,0e",
eP:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
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
r=new T.cQ()
r.a=0
r.b=s
r.c=!1
r.d=0
this.aX(r,s,z,34069,!1,!1)
this.aX(r,s,w,34070,!1,!1)
this.aX(r,s,y,34071,!1,!1)
this.aX(r,s,v,34072,!1,!1)
this.aX(r,s,x,34073,!1,!1)
this.aX(r,s,u,34074,!1,!1)
return r},
iN:function(a,b){return this.eP(a,b,!1,"")},
eO:function(a){return this.eP(a,".png",!1,"")},
aX:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.ag
W.a7(z,"load",H.l(new T.kq(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
hv:function(a,b,c){var z,y,x,w
b=V.e6(b,2)
z=V.e6(a.width,2)
y=V.e6(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.de(null,null)
x.width=z
x.height=y
w=H.e(C.l.f6(x,"2d"),"$iseo")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.nx(w.getImageData(0,0,x.width,x.height))}}},kq:{"^":"m:13;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.hv(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.a4.jh(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6){x=x.e
if(!(x==null))x.is()}++z.e}}}],["","",,V,{"^":"",bM:{"^":"b;",
b6:function(a,b){return!0},
i:function(a){return"all"},
$isaZ:1},aZ:{"^":"b;"},eV:{"^":"b;",
b6:["fg",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)if(z[x].b6(0,b))return!0
return!1}],
i:["ds",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isaZ:1},aD:{"^":"eV;0a",
b6:function(a,b){return!this.fg(0,b)},
i:function(a){return"!["+this.ds(0)+"]"}},jO:{"^":"b;0a,0b",
b6:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var z,y
z=H.bW(this.a)
y=H.bW(this.b)
return z+".."+y},
$isaZ:1,
u:{
Z:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.a(P.r("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.b.I(a,0)
y=C.b.I(b,0)
x=new V.jO()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},k2:{"^":"b;0a",
fl:function(a){var z,y
if(a.a.length<=0)throw H.a(P.r("May not create a SetMatcher with zero characters."))
z=new H.bb(0,0,[P.n,P.W])
for(y=new H.dr(a,a.gm(a),0,[H.al(a,"A",0)]);y.H();)z.p(0,y.d,!0)
this.a=z},
b6:function(a,b){return this.a.bF(0,b)},
i:function(a){var z=this.a
return P.cq(z.gaa(z),0,null)},
$isaZ:1,
u:{
x:function(a){var z=new V.k2()
z.fl(a)
return z}}},fc:{"^":"b;a,b,0c,0d",
giP:function(a){return this.b},
n:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.fo(this.a.l(0,b))
w.a=H.c([],[V.aZ])
w.c=!1
C.a.h(this.c,w)
return w},
ix:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.b6(0,a))return w}return},
i:function(a){return this.b}},fl:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.e8(this.b,"\n","\\n")
y=H.e8(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},fm:{"^":"b;a,b,0c",
aN:function(a,b,c){var z,y,x
H.v(c,"$isd",[P.h],"$asd")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.B)(c),++y){x=c[y]
this.c.p(0,x,b)}},
i:function(a){return this.b}},ky:{"^":"b;0a,0b,0c",
l:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.fc(this,b)
z.c=H.c([],[V.fo])
this.a.p(0,b,z)}return z},
P:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.fm(this,a)
y=P.h
z.c=new H.bb(0,0,[y,y])
this.b.p(0,a,z)}return z},
f0:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.fl])
y=this.c
x=[P.n]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.I(a,t)
r=y.ix(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cq(w,0,null)
throw H.a(P.r("Untokenizable string [state: "+y.giP(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cq(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.fl(o==null?p.b:o,q,t)}++t}}},
u:{
cR:function(){var z,y
z=new V.ky()
y=P.h
z.a=new H.bb(0,0,[y,V.fc])
z.b=new H.bb(0,0,[y,V.fm])
return z}}},fo:{"^":"eV;b,0c,0a",
i:function(a){return this.b.b+": "+this.ds(0)}}}],["","",,X,{"^":"",cD:{"^":"b;",$isaN:1},iG:{"^":"dF;0a,0b,0c,0d,0e,0f,0r,0x",
gv:function(){var z=this.x
if(z==null){z=D.M()
this.x=z}return z},
aF:function(a){var z=this.x
if(!(z==null))z.E(a)},
a3:function(a){var z,y,x,w,v,u,t,s
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.o(y)
v=C.d.am(w.a*y)
if(typeof x!=="number")return H.o(x)
u=C.d.am(w.b*x)
t=C.d.am(w.c*y)
a.c=t
w=C.d.am(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
if(this.b){z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
s=16640}else s=256
a.a.clear(s)},
u:{
di:function(a,b,c,d,e,f,g){var z,y
z=new X.iG()
y=new V.ap(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.f7(0,0,1,1)
z.r=y
return z}}},iL:{"^":"b;0a,0b",
gv:function(){var z=this.b
if(z==null){z=D.M()
this.b=z}return z},
a3:function(a){var z
a.cy.bZ(V.bo())
z=V.bo()
a.db.bZ(z)},
aO:function(a){a.cy.aM()
a.db.aM()},
$isaN:1,
$iscD:1},jx:{"^":"b;0a,0b,0c,0d,0e,0f",
gv:function(){var z=this.f
if(z==null){z=D.M()
this.f=z}return z},
aF:[function(a){var z
H.e(a,"$isC")
z=this.f
if(!(z==null))z.E(a)},function(){return this.aF(null)},"jz","$1","$0","gh_",0,2,1],
a3:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=this.c
w=this.d
v=this.e
u=v-w
t=1/Math.tan(x*0.5)
s=V.aL(-t/(z/y),0,0,0,0,t,0,0,0,0,v/u,-v*w/u,0,0,1,0)
a.cy.bZ(s)
z=$.f3
if(z==null){z=V.eX(new V.U(0,0,0),new V.z(0,1,0),new V.z(0,0,-1))
$.f3=z
r=z}else r=z
z=this.b
if(z!=null){q=z.bb(0,a,this)
if(q!=null)r=q.k(0,r)}a.db.bZ(r)},
aO:function(a){a.cy.aM()
a.db.aM()},
$isaN:1,
$iscD:1,
u:{
f2:function(a,b,c,d,e){var z,y,x
z=new X.jx()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
if(null!=c){y=z.b
z.b=c
if(c!=null)c.gv().h(0,z.gh_())
x=new D.O("mover",y,z.b,z,[U.an])
x.b=!0
z.aF(x)}x=z.c
if(!$.p.$2(x,b)){y=z.c
z.c=b
x=new D.O("fov",y,b,z,[P.u])
x.b=!0
z.aF(x)}x=z.d
if(!$.p.$2(x,d)){y=z.d
z.d=d
x=new D.O("near",y,d,z,[P.u])
x.b=!0
z.aF(x)}x=z.e
if(!$.p.$2(x,a)){y=z.e
z.e=a
x=new D.O("far",y,a,z,[P.u])
x.b=!0
z.aF(x)}return z}}},dF:{"^":"b;"}}],["","",,V,{"^":"",
oe:function(a){P.kx(C.N,new V.of(a))},
b8:{"^":"b;",
bv:function(a){this.b=new P.iJ(C.O)
this.c=null
this.d=H.c([],[[P.d,W.bh]])},
M:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.c([],[W.bh]))
y=a.split("\n")
for(z=y.length,x=[W.bh],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.c([],x))
t=document.createElement("div")
t.className="codePart"
H.I(u)
s=this.b.fI(u,0,u.length)
r=s==null?u:s
C.M.fa(t,H.e8(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gaz(this.d),t)}},
eU:function(a,b){var z,y,x,w
H.v(b,"$isd",[P.h],"$asd")
this.d=H.c([],[[P.d,W.bh]])
z=C.a.n(b,"\n")
y=this.c
if(y==null){y=this.bG()
this.c=y}for(y=y.f0(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)this.bY(y[w])}},
of:{"^":"m:54;a",
$1:function(a){H.e(a,"$isby")
P.e7(C.d.f_(this.a.giE(),2)+" fps")}},
il:{"^":"b8;a,0b,0c,0d",
bY:function(a){switch(a.a){case"Class":this.M(a.b,"#551")
break
case"Comment":this.M(a.b,"#777")
break
case"Id":this.M(a.b,"#111")
break
case"Num":this.M(a.b,"#191")
break
case"Reserved":this.M(a.b,"#119")
break
case"String":this.M(a.b,"#171")
break
case"Symbol":this.M(a.b,"#616")
break
case"Type":this.M(a.b,"#B11")
break
case"Whitespace":this.M(a.b,"#111")
break}},
bG:function(){var z,y,x,w
z=V.cR()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Id")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
x=V.Z("a","z")
C.a.h(y.a,x)
x=V.Z("A","Z")
C.a.h(y.a,x)
x=z.l(0,"Id").n(0,"Id")
y=V.x(new H.w("_"))
C.a.h(x.a,y)
y=V.Z("0","9")
C.a.h(x.a,y)
y=V.Z("a","z")
C.a.h(x.a,y)
y=V.Z("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"Int")
x=V.Z("0","9")
C.a.h(y.a,x)
x=z.l(0,"Int").n(0,"Int")
y=V.Z("0","9")
C.a.h(x.a,y)
y=z.l(0,"Int").n(0,"FloatDot")
x=V.x(new H.w("."))
C.a.h(y.a,x)
x=z.l(0,"FloatDot").n(0,"Float")
y=V.Z("0","9")
C.a.h(x.a,y)
y=z.l(0,"Float").n(0,"Float")
x=V.Z("0","9")
C.a.h(y.a,x)
x=z.l(0,"Start").n(0,"Sym")
y=V.x(new H.w("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.l(0,"Sym").n(0,"Sym")
x=V.x(new H.w("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.l(0,"Start").n(0,"OpenDoubleStr")
y=V.x(new H.w('"'))
C.a.h(x.a,y)
y=z.l(0,"OpenDoubleStr").n(0,"CloseDoubleStr")
x=V.x(new H.w('"'))
C.a.h(y.a,x)
x=z.l(0,"OpenDoubleStr").n(0,"EscDoubleStr")
y=V.x(new H.w("\\"))
C.a.h(x.a,y)
y=z.l(0,"EscDoubleStr").n(0,"OpenDoubleStr")
x=V.x(new H.w('"'))
C.a.h(y.a,x)
C.a.h(z.l(0,"OpenDoubleStr").n(0,"OpenDoubleStr").a,new V.bM())
x=z.l(0,"Start").n(0,"OpenSingleStr")
y=V.x(new H.w("'"))
C.a.h(x.a,y)
y=z.l(0,"OpenSingleStr").n(0,"CloseSingleStr")
x=V.x(new H.w("'"))
C.a.h(y.a,x)
x=z.l(0,"OpenSingleStr").n(0,"EscSingleStr")
y=V.x(new H.w("\\"))
C.a.h(x.a,y)
y=z.l(0,"EscSingleStr").n(0,"OpenSingleStr")
x=V.x(new H.w("'"))
C.a.h(y.a,x)
C.a.h(z.l(0,"OpenSingleStr").n(0,"OpenSingleStr").a,new V.bM())
x=z.l(0,"Start").n(0,"Slash")
y=V.x(new H.w("/"))
C.a.h(x.a,y)
y=z.l(0,"Slash").n(0,"Comment")
x=V.x(new H.w("/"))
C.a.h(y.a,x)
x=z.l(0,"Comment").n(0,"EndComment")
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.l(0,"Comment").n(0,"Comment")
x=new V.aD()
w=[V.aZ]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.l(0,"Slash").n(0,"MLComment")
x=V.x(new H.w("*"))
C.a.h(y.a,x)
x=z.l(0,"MLComment").n(0,"MLCStar")
y=V.x(new H.w("*"))
C.a.h(x.a,y)
y=z.l(0,"MLCStar").n(0,"MLComment")
x=new V.aD()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("*"))
C.a.h(x.a,y)
y=z.l(0,"MLCStar").n(0,"EndComment")
x=V.x(new H.w("/"))
C.a.h(y.a,x)
x=z.l(0,"Start").n(0,"Whitespace")
y=V.x(new H.w(" \n\t"))
C.a.h(x.a,y)
y=z.l(0,"Whitespace").n(0,"Whitespace")
x=V.x(new H.w(" \n\t"))
C.a.h(y.a,x)
x=z.l(0,"Int")
x.d=x.a.P("Num")
x=z.l(0,"Float")
x.d=x.a.P("Num")
x=z.l(0,"Sym")
x.d=x.a.P("Symbol")
x=z.l(0,"CloseDoubleStr")
x.d=x.a.P("String")
x=z.l(0,"CloseSingleStr")
x.d=x.a.P("String")
x=z.l(0,"EndComment")
x.d=x.a.P("Comment")
x=z.l(0,"Whitespace")
x.d=x.a.P("Whitespace")
x=z.l(0,"Id")
y=x.a.P("Id")
x.d=y
x=[P.h]
y.aN(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.aN(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.aN(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
iH:{"^":"b8;a,0b,0c,0d",
bY:function(a){switch(a.a){case"Builtin":this.M(a.b,"#411")
break
case"Comment":this.M(a.b,"#777")
break
case"Id":this.M(a.b,"#111")
break
case"Num":this.M(a.b,"#191")
break
case"Preprocess":this.M(a.b,"#737")
break
case"Reserved":this.M(a.b,"#119")
break
case"Symbol":this.M(a.b,"#611")
break
case"Type":this.M(a.b,"#171")
break
case"Whitespace":this.M(a.b,"#111")
break}},
bG:function(){var z,y,x,w
z=V.cR()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Id")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
x=V.Z("a","z")
C.a.h(y.a,x)
x=V.Z("A","Z")
C.a.h(y.a,x)
x=z.l(0,"Id").n(0,"Id")
y=V.x(new H.w("_"))
C.a.h(x.a,y)
y=V.Z("0","9")
C.a.h(x.a,y)
y=V.Z("a","z")
C.a.h(x.a,y)
y=V.Z("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"Int")
x=V.Z("0","9")
C.a.h(y.a,x)
x=z.l(0,"Int").n(0,"Int")
y=V.Z("0","9")
C.a.h(x.a,y)
y=z.l(0,"Int").n(0,"FloatDot")
x=V.x(new H.w("."))
C.a.h(y.a,x)
x=z.l(0,"FloatDot").n(0,"Float")
y=V.Z("0","9")
C.a.h(x.a,y)
y=z.l(0,"Float").n(0,"Float")
x=V.Z("0","9")
C.a.h(y.a,x)
x=z.l(0,"Start").n(0,"Sym")
y=V.x(new H.w("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.l(0,"Sym").n(0,"Sym")
x=V.x(new H.w("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.l(0,"Start").n(0,"Slash")
y=V.x(new H.w("/"))
C.a.h(x.a,y)
y=z.l(0,"Slash").n(0,"Comment")
x=V.x(new H.w("/"))
C.a.h(y.a,x)
C.a.h(z.l(0,"Slash").n(0,"Sym").a,new V.bM())
x=z.l(0,"Comment").n(0,"EndComment")
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.l(0,"Comment").n(0,"Comment")
x=new V.aD()
w=[V.aZ]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"Preprocess")
x=V.x(new H.w("#"))
C.a.h(y.a,x)
x=z.l(0,"Preprocess").n(0,"Preprocess")
y=new V.aD()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.x(new H.w("\n"))
C.a.h(y.a,x)
x=z.l(0,"Preprocess").n(0,"EndPreprocess")
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"Whitespace")
x=V.x(new H.w(" \n\t"))
C.a.h(y.a,x)
x=z.l(0,"Whitespace").n(0,"Whitespace")
y=V.x(new H.w(" \n\t"))
C.a.h(x.a,y)
y=z.l(0,"Int")
y.d=y.a.P("Num")
y=z.l(0,"Float")
y.d=y.a.P("Num")
y=z.l(0,"Sym")
y.d=y.a.P("Symbol")
y=z.l(0,"EndComment")
y.d=y.a.P("Comment")
y=z.l(0,"EndPreprocess")
y.d=y.a.P("Preprocess")
y=z.l(0,"Whitespace")
y.d=y.a.P("Whitespace")
y=z.l(0,"Id")
x=y.a.P("Id")
y.d=x
y=[P.h]
x.aN(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.aN(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.aN(0,"Builtin",H.c(["gl_FragColor","gl_Position"],y))
return z}},
iI:{"^":"b8;a,0b,0c,0d",
bY:function(a){switch(a.a){case"Attr":this.M(a.b,"#911")
this.M("=","#111")
break
case"Id":this.M(a.b,"#111")
break
case"Other":this.M(a.b,"#111")
break
case"Reserved":this.M(a.b,"#119")
break
case"String":this.M(a.b,"#171")
break
case"Symbol":this.M(a.b,"#616")
break}},
bG:function(){var z,y,x
z=V.cR()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Id")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
x=V.Z("a","z")
C.a.h(y.a,x)
x=V.Z("A","Z")
C.a.h(y.a,x)
x=z.l(0,"Id").n(0,"Id")
y=V.x(new H.w("_"))
C.a.h(x.a,y)
y=V.Z("0","9")
C.a.h(x.a,y)
y=V.Z("a","z")
C.a.h(x.a,y)
y=V.Z("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Id").n(0,"Attr")
x=V.x(new H.w("="))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").n(0,"Sym")
x=V.x(new H.w("</\\-!>="))
C.a.h(y.a,x)
x=z.l(0,"Sym").n(0,"Sym")
y=V.x(new H.w("</\\-!>="))
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"OpenStr")
x=V.x(new H.w('"'))
C.a.h(y.a,x)
x=z.l(0,"OpenStr").n(0,"CloseStr")
y=V.x(new H.w('"'))
C.a.h(x.a,y)
y=z.l(0,"OpenStr").n(0,"EscStr")
x=V.x(new H.w("\\"))
C.a.h(y.a,x)
x=z.l(0,"EscStr").n(0,"OpenStr")
y=V.x(new H.w('"'))
C.a.h(x.a,y)
C.a.h(z.l(0,"OpenStr").n(0,"OpenStr").a,new V.bM())
C.a.h(z.l(0,"Start").n(0,"Other").a,new V.bM())
y=z.l(0,"Other").n(0,"Other")
x=new V.aD()
x.a=H.c([],[V.aZ])
C.a.h(y.a,x)
y=V.x(new H.w('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.Z("a","z")
C.a.h(x.a,y)
y=V.Z("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Sym")
y.d=y.a.P("Symbol")
y=z.l(0,"CloseStr")
y.d=y.a.P("String")
y=z.l(0,"Id")
x=y.a.P("Id")
y.d=x
x.aN(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
x=z.l(0,"Attr")
x.d=x.a.P("Attr")
x=z.l(0,"Other")
x.d=x.a.P("Other")
return z}},
jz:{"^":"b8;a,0b,0c,0d",
eU:function(a,b){H.v(b,"$isd",[P.h],"$asd")
this.d=H.c([],[[P.d,W.bh]])
this.M(C.a.n(b,"\n"),"#111")},
bY:function(a){},
bG:function(){return}},
jM:{"^":"b;a,b,0c",
bB:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.l(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.fI().gd7().j(0,H.k(z))
if(y==null)if(d){c.$0()
this.e_(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.ec(this.c).h(0,v)
t=W.iN("radio")
t.checked=x
t.name=z
z=W.ag
W.a7(t,"change",H.l(new V.jN(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.ec(this.c).h(0,w.createElement("br"))},
aw:function(a,b,c){return this.bB(a,b,c,!1)},
e_:function(a){var z,y,x,w,v
z=P.fI()
y=P.h
x=P.j3(z.gd7(),y,y)
x.p(0,this.a,a)
w=z.eX(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.mp([],[]).df(""),"",v)}},
jN:{"^":"m:13;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.e_(this.d)}}},
k7:{"^":"b;0a,0b",
fm:function(a,b){var z,y,x,w,v,u,t
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
t=W.ag
W.a7(z,"scroll",H.l(new V.ka(x),{func:1,ret:-1,args:[t]}),!1,t)},
e5:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.v(a,"$isd",[P.h],"$asd")
this.hF()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.f0(C.a.iK(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
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
if(H.hK(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.f(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cv(C.B,s,C.k,!1)
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
f5:function(a){var z,y,x,w
z=new V.il("dart")
z.bv("dart")
y=new V.iH("glsl")
y.bv("glsl")
x=new V.iI("html")
x.bv("html")
w=C.a.iz(H.c([z,y,x],[V.b8]),new V.kb(a))
if(w!=null)return w
z=new V.jz("plain")
z.bv("plain")
return z},
e1:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.v(a2,"$isd",[P.h],"$asd")
z=H.c([],[P.n])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.ca(w).a7(w,"+")){C.a.p(a2,x,C.b.au(w,1))
C.a.h(z,1)
y=!0}else if(C.b.a7(w,"-")){C.a.p(a2,x,C.b.au(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.f5(a0)
v.eU(0,a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
t.appendChild(s)
this.a.appendChild(t)
r=P.cv(C.B,a,C.k,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.ee(null)
n.href="#"+H.k(r)
n.textContent=a
o.appendChild(n)
p.appendChild(o)
q.appendChild(p)
s.appendChild(q)
if(y)for(m=a1,l=m,x=0;k=v.d,x<k.length;++x){w=k[x]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums codeLineLight"
h=u.createElement("td")
h.className="codeLineNums"
if(x>=z.length)return H.f(z,x)
g=z[x]
if(g===0){++l;++m
i.textContent=""+l
h.textContent=""+m}else if(g>0){j.className="codeTableRow codeLineLightGreen"
i.className="codeLineNums codeLineGreen codeLineCenter"
h.className="codeLineNums codeLineGreen";++m
i.textContent="+"
h.textContent=""+m}else if(g<0){j.className="codeTableRow codeLineLightRed"
i.className="codeLineNums codeLineRed"
h.className="codeLineNums codeLineRed codeLineCenter";++l
i.textContent=""+l
h.textContent="-"}f=u.createElement("td")
f.className="codeLineText"
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.B)(w),++e)f.appendChild(w[e])
j.appendChild(i)
j.appendChild(h)
j.appendChild(f)
s.appendChild(j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.B)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.ga2(w);b.H();)h.appendChild(b.gN(b))
j.appendChild(i)
j.appendChild(h)
s.appendChild(j)}},
i8:function(a){var z,y,x,w,v,u,t
H.v(a,"$isd",[P.h],"$asd")
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
x=H.e(w.insertCell(-1),"$isdE").style
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
t=H.e(w.insertCell(-1),"$isdE")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
hF:function(){var z,y,x,w
if(this.b!=null)return
z=V.cR()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Bold")
x=V.x(new H.w("*"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Bold").n(0,"Bold")
x=new V.aD()
w=[V.aZ]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("*"))
C.a.h(x.a,y)
y=z.l(0,"Bold").n(0,"BoldEnd")
x=V.x(new H.w("*"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").n(0,"Italic")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Italic").n(0,"Italic")
x=new V.aD()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("_"))
C.a.h(x.a,y)
y=z.l(0,"Italic").n(0,"ItalicEnd")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").n(0,"Code")
x=V.x(new H.w("`"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Code").n(0,"Code")
x=new V.aD()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("`"))
C.a.h(x.a,y)
y=z.l(0,"Code").n(0,"CodeEnd")
x=V.x(new H.w("`"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").n(0,"LinkHead")
x=V.x(new H.w("["))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"LinkHead").n(0,"LinkTail")
x=V.x(new H.w("|"))
C.a.h(y.a,x)
x=z.l(0,"LinkHead").n(0,"LinkEnd")
y=V.x(new H.w("]"))
C.a.h(x.a,y)
x.c=!0
x=z.l(0,"LinkHead").n(0,"LinkHead")
y=new V.aD()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.x(new H.w("|]"))
C.a.h(y.a,x)
x=z.l(0,"LinkTail").n(0,"LinkEnd")
y=V.x(new H.w("]"))
C.a.h(x.a,y)
x.c=!0
x=z.l(0,"LinkTail").n(0,"LinkTail")
y=new V.aD()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.x(new H.w("|]"))
C.a.h(y.a,x)
C.a.h(z.l(0,"Start").n(0,"Other").a,new V.bM())
x=z.l(0,"Other").n(0,"Other")
y=new V.aD()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.x(new H.w("*_`["))
C.a.h(y.a,x)
x=z.l(0,"BoldEnd")
x.d=x.a.P("Bold")
x=z.l(0,"ItalicEnd")
x.d=x.a.P("Italic")
x=z.l(0,"CodeEnd")
x.d=x.a.P("Code")
x=z.l(0,"LinkEnd")
x.d=x.a.P("Link")
x=z.l(0,"Other")
x.d=x.a.P("Other")
this.b=z},
u:{
k8:function(a,b){var z=new V.k7()
z.fm(a,!0)
return z}}},
ka:{"^":"m:13;a",
$1:function(a){P.fj(C.q,new V.k9(this.a))}},
k9:{"^":"m:0;a",
$0:function(){var z,y,x
z=C.d.am(document.documentElement.scrollTop)
y=this.a.style
x=H.k(-0.01*z)+"px"
y.top=x}},
kb:{"^":"m:55;a",
$1:function(a){return H.e(a,"$isb8").a===this.a}}}],["","",,T,{"^":"",
hF:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
z=V.k8("Test 017",!0)
y=W.de(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.h]
z.e5(H.c(["A test of the Material Lighting shader with solid color directional light, cube mapped textures, and a reflection map. The specular map is also used to define where reflections are painted."],x))
z.i8(H.c(["shapes"],x))
z.e5(H.c(["\xab[Back to Tests|../]"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.q(P.r("Failed to find an element with the identifier, testCanvas."))
v=E.kv(w,!0,!0,!0,!1)
u=E.eF(null,!0,null,"",null,null)
u.sab(0,F.hJ(8,null,1,8))
t=X.di(!0,!0,!1,null,2000,null,0)
if(t.b){t.b=!1
s=new D.O("clearColor",!0,!1,t,[P.W])
s.b=!0
t.aF(s)}r=v.f.iN("../resources/maskonaive",".jpg")
q=v.f.eO("../resources/earthSpecular")
p=v.f.eO("../resources/earthColor")
o=new O.je()
s=O.df(V.aK)
o.e=s
s.bc(o.gfX(),o.gfY())
s=new O.bn(o,"emission")
s.c=C.c
s.f=new V.a5(0,0,0)
o.f=s
s=new O.bn(o,"ambient")
s.c=C.c
s.f=new V.a5(0,0,0)
o.r=s
s=new O.bn(o,"diffuse")
s.c=C.c
s.f=new V.a5(0,0,0)
o.x=s
s=new O.bn(o,"invDiffuse")
s.c=C.c
s.f=new V.a5(0,0,0)
o.y=s
s=new O.jk(o,"specular")
s.c=C.c
s.f=new V.a5(0,0,0)
s.ch=100
o.z=s
s=new O.jh(o,"bump")
s.c=C.c
o.Q=s
o.ch=null
s=new O.bn(o,"reflect")
s.c=C.c
s.f=new V.a5(0,0,0)
o.cx=s
s=new O.jj(o,"refract")
s.c=C.c
s.f=new V.a5(0,0,0)
s.ch=1
o.cy=s
s=new O.jg(o,"alpha")
s.c=C.c
s.f=1
o.db=s
s=new D.iW()
s.bw(D.a9)
s.e=H.c([],[D.cF])
s.f=H.c([],[D.jA])
s.r=H.c([],[D.kg])
s.x=H.c([],[D.kr])
s.y=H.c([],[D.ks])
s.z=H.c([],[D.kt])
s.Q=null
s.ch=null
s.dn(s.gfW(),s.ghf(),s.ghh())
o.dx=s
n=s.Q
if(n==null){n=D.M()
s.Q=n
s=n}else s=n
s.h(0,o.ght())
s=o.dx
n=s.ch
if(n==null){n=D.M()
s.ch=n
s=n}else s=n
n=o.gaT()
s.h(0,n)
o.dy=null
s=o.dx
m=U.es(V.eX(new V.U(0,0,0),new V.z(0,1,0),new V.z(-1,-1,-1)))
l=new V.a5(1,1,1)
k=new D.cF()
k.c=new V.a5(1,1,1)
k.a=new V.z(0,0,1)
j=k.b
k.b=m
m.gv().h(0,k.gft())
m=new D.O("mover",j,k.b,k,[U.an])
m.b=!0
k.aR(m)
if(!k.c.A(0,l)){j=k.c
k.c=l
m=new D.O("color",j,l,k,[V.a5])
m.b=!0
k.aR(m)}s.h(0,k)
s=o.r
s.sad(0,new V.a5(0.5,0.5,0.5))
s=o.x
s.sad(0,new V.a5(0.5,0.5,0.5))
o.r.sas(p)
o.x.sas(p)
o.z.sas(q)
s=o.ch
if(s!==r){if(s!=null)s.gv().F(0,n)
j=o.ch
o.ch=r
r.gv().h(0,n)
s=new D.O("environment",j,o.ch,o,[T.cQ])
s.b=!0
o.W(s)}o.cx.sas(q)
s=o.cx
s.sad(0,new V.a5(0.5,0.5,0.5))
s=o.z
if(s.c===C.c){s.c=C.i
s.c7()
s.cs(100)
n=s.a
n.a=null
n.W(null)}s.cs(10)
i=new U.eI()
i.bw(U.an)
i.bc(i.gfV(),i.ghg())
i.e=null
i.f=V.bo()
i.r=0
s=v.r
n=new U.l_()
m=U.dg()
m.sdh(0,!0)
m.scZ(6.283185307179586)
m.sd0(0)
m.sa_(0,0)
m.sd_(100)
m.sV(0)
m.scK(0.5)
n.b=m
k=n.gaS()
m.gv().h(0,k)
m=U.dg()
m.sdh(0,!0)
m.scZ(6.283185307179586)
m.sd0(0)
m.sa_(0,0)
m.sd_(100)
m.sV(0)
m.scK(0.5)
n.c=m
m.gv().h(0,k)
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
h=new X.aM(!1,!1,!1)
j=n.d
n.d=h
m=[X.aM]
k=new D.O("modifiers",j,h,n,m)
k.b=!0
n.U(k)
k=n.f
if(k!==!1){n.f=!1
k=new D.O("invertX",k,!1,n,[P.W])
k.b=!0
n.U(k)}k=n.r
if(k!==!1){n.r=!1
k=new D.O("invertY",k,!1,n,[P.W])
k.b=!0
n.U(k)}n.bf(s)
i.h(0,n)
s=v.r
n=new U.kZ()
k=U.dg()
k.sdh(0,!0)
k.scZ(6.283185307179586)
k.sd0(0)
k.sa_(0,0)
k.sd_(100)
k.sV(0)
k.scK(0.2)
n.b=k
k.gv().h(0,n.gaS())
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
h=new X.aM(!0,!1,!1)
j=n.c
n.c=h
k=new D.O("modifiers",j,h,n,m)
k.b=!0
n.U(k)
n.bf(s)
i.h(0,n)
s=v.r
n=new U.l0()
n.c=0.01
n.d=0
n.e=0
h=new X.aM(!1,!1,!1)
n.b=h
m=new D.O("modifiers",null,h,n,m)
m.b=!0
n.U(m)
n.bf(s)
i.h(0,n)
i.h(0,U.es(V.aL(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
g=X.f2(2000,1.0471975511965976,i,0.1,null)
f=new M.ih()
f.sbg(null)
f.sbn(0,null)
f.sbo(null)
s=E.eF(null,!0,null,"",null,null)
e=F.cp()
n=e.a
m=new V.z(-1,-1,1)
m=m.t(0,Math.sqrt(m.B(m)))
d=n.bC(new V.aP(1,2,4,6),new V.ap(1,0,0,1),new V.U(-1,-1,0),new V.Q(0,1),m,null)
n=e.a
m=new V.z(1,-1,1)
m=m.t(0,Math.sqrt(m.B(m)))
c=n.bC(new V.aP(0,3,4,6),new V.ap(0,0,1,1),new V.U(1,-1,0),new V.Q(1,1),m,null)
n=e.a
m=new V.z(1,1,1)
m=m.t(0,Math.sqrt(m.B(m)))
b=n.bC(new V.aP(0,2,5,6),new V.ap(0,1,0,1),new V.U(1,1,0),new V.Q(1,0),m,null)
n=e.a
m=new V.z(-1,1,1)
m=m.t(0,Math.sqrt(m.B(m)))
a=n.bC(new V.aP(0,2,4,7),new V.ap(1,1,0,1),new V.U(-1,1,0),new V.Q(0,0),m,null)
e.d.e3(H.c([d,c,b,a],[F.af]))
e.aj()
s.sab(0,e)
f.d=s
f.e=null
s=new O.kd()
s.b=1.0471975511965976
j=s.c
s.c=r
r.gv().h(0,s.gaT())
n=new D.O("boxTexture",j,s.c,s,[T.cQ])
n.b=!0
s.W(n)
p=new V.a5(1,1,1)
if(!J.K(s.d,p)){j=s.d
s.d=p
n=new D.O("boxColor",j,p,s,[V.a5])
n.b=!0
s.W(n)}s.e=null
f.sbo(s)
f.sbn(0,t)
f.sbg(g)
a0=new M.ix()
s=O.df(E.aY)
a0.d=s
s.bc(a0.gh0(),a0.gh1())
a0.e=null
a0.f=null
a0.r=null
a0.x=null
a0.sbg(null)
a0.sbn(0,null)
a0.sbo(null)
a0.sbg(g)
a0.sbo(o)
a0.sbn(0,t)
a0.d.h(0,u)
s=M.aQ
n=H.c([f,a0],[s])
m=new M.ib()
m.bw(s)
m.e=!1
m.f=null
m.bc(m.ghi(),m.ghj())
m.ac(0,n)
s=v.d
if(s!==m){if(s!=null)s.gv().F(0,v.gdw())
v.d=m
m.gv().h(0,v.gdw())
v.fo()}s=new V.jM("shapes",!0)
x=x.getElementById("shapes")
s.c=x
if(x==null)H.q("Failed to find shapes for RadioGroup")
s.aw(0,"Cube",new T.nZ(u))
s.aw(0,"Cuboid",new T.o_(u))
s.aw(0,"Cylinder",new T.o0(u))
s.aw(0,"Cone",new T.o1(u))
s.aw(0,"LatLonSphere",new T.o2(u))
s.aw(0,"IsoSphere",new T.o3(u))
s.bB(0,"Sphere",new T.o4(u),!0)
s.aw(0,"Toroid",new T.o5(u))
s.aw(0,"Knot",new T.o6(u))
x=v.z
if(x==null){x=D.M()
v.z=x}s={func:1,ret:-1,args:[D.C]}
n=H.l(new T.o7(z,o),s)
m=x.b
if(m==null){s=H.c([],[s])
x.b=s
x=s}else x=m
C.a.h(x,n)
V.oe(v)},
nZ:{"^":"m:0;a",
$0:function(){this.a.sab(0,F.e0(1,null,null,1))}},
o_:{"^":"m:0;a",
$0:function(){this.a.sab(0,F.e0(8,null,null,8))}},
o0:{"^":"m:0;a",
$0:function(){this.a.sab(0,F.hv(1,!0,!0,1,40,1))}},
o1:{"^":"m:0;a",
$0:function(){this.a.sab(0,F.hv(1,!0,!1,1,40,0))}},
o2:{"^":"m:0;a",
$0:function(){this.a.sab(0,F.nW(10,20))}},
o3:{"^":"m:0;a",
$0:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=F.cp()
y=Math.sqrt(5)/2+0.5
x=F.aj(z,new V.z(-1,y,0))
w=F.aj(z,new V.z(1,y,0))
v=-y
u=F.aj(z,new V.z(-1,v,0))
t=F.aj(z,new V.z(1,v,0))
s=F.aj(z,new V.z(0,-1,v))
r=F.aj(z,new V.z(0,1,v))
q=F.aj(z,new V.z(0,-1,y))
p=F.aj(z,new V.z(0,1,y))
o=F.aj(z,new V.z(y,0,1))
n=F.aj(z,new V.z(y,0,-1))
m=F.aj(z,new V.z(v,0,1))
l=F.aj(z,new V.z(v,0,-1))
F.a0(z,x,l,r,2)
F.a0(z,x,r,w,2)
F.a0(z,x,w,p,2)
F.a0(z,x,p,m,2)
F.a0(z,x,m,l,2)
F.a0(z,w,r,n,2)
F.a0(z,r,l,s,2)
F.a0(z,l,m,u,2)
F.a0(z,m,p,q,2)
F.a0(z,p,w,o,2)
F.a0(z,t,n,s,2)
F.a0(z,t,s,u,2)
F.a0(z,t,u,q,2)
F.a0(z,t,q,o,2)
F.a0(z,t,o,n,2)
F.a0(z,s,n,r,2)
F.a0(z,u,s,l,2)
F.a0(z,q,u,m,2)
F.a0(z,o,q,p,2)
F.a0(z,n,o,w,2)
z.eQ(new F.dN(),new F.ld())
this.a.sab(0,z)}},
o4:{"^":"m:0;a",
$0:function(){this.a.sab(0,F.hJ(6,null,1,6))}},
o5:{"^":"m:0;a",
$0:function(){this.a.sab(0,F.oj(30,1,15,0.5))}},
o6:{"^":"m:0;a",
$0:function(){this.a.sab(0,F.nU(120,1,2,12,0.3,3))}},
o7:{"^":"m:11;a,b",
$1:function(a){var z,y,x,w
H.e(a,"$isC")
z=this.a
y=this.b
x=y.a
w=[P.h]
z.e1("Vertex Shader","glsl",0,H.c((x==null?null:x.c).split("\n"),w))
y=y.a
z.e1("Fragment Shader","glsl",0,H.c((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.L=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eN.prototype
return J.eM.prototype}if(typeof a=="string")return J.cl.prototype
if(a==null)return J.eO.prototype
if(typeof a=="boolean")return J.iR.prototype
if(a.constructor==Array)return J.bm.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cm.prototype
return a}if(a instanceof P.b)return a
return J.d1(a)}
J.aV=function(a){if(typeof a=="string")return J.cl.prototype
if(a==null)return a
if(a.constructor==Array)return J.bm.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cm.prototype
return a}if(a instanceof P.b)return a
return J.d1(a)}
J.c9=function(a){if(a==null)return a
if(a.constructor==Array)return J.bm.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cm.prototype
return a}if(a instanceof P.b)return a
return J.d1(a)}
J.nI=function(a){if(typeof a=="number")return J.ck.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ct.prototype
return a}
J.nJ=function(a){if(typeof a=="number")return J.ck.prototype
if(typeof a=="string")return J.cl.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ct.prototype
return a}
J.ca=function(a){if(typeof a=="string")return J.cl.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.ct.prototype
return a}
J.aH=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.cm.prototype
return a}if(a instanceof P.b)return a
return J.d1(a)}
J.K=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.L(a).A(a,b)}
J.hM=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.nI(a).R(a,b)}
J.e9=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.nJ(a).k(a,b)}
J.ea=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.hC(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aV(a).j(a,b)}
J.d6=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.hC(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.c9(a).p(a,b,c)}
J.hN=function(a,b){return J.ca(a).I(a,b)}
J.hO=function(a,b,c){return J.aH(a).hq(a,b,c)}
J.hP=function(a,b,c,d){return J.aH(a).e2(a,b,c,d)}
J.hQ=function(a,b){return J.ca(a).a1(a,b)}
J.d7=function(a,b,c){return J.aV(a).ik(a,b,c)}
J.cz=function(a,b){return J.c9(a).J(a,b)}
J.hR=function(a,b,c,d){return J.c9(a).aK(a,b,c,d)}
J.eb=function(a,b){return J.c9(a).K(a,b)}
J.hS=function(a){return J.aH(a).gig(a)}
J.ec=function(a){return J.aH(a).gcH(a)}
J.cc=function(a){return J.L(a).gY(a)}
J.b7=function(a){return J.c9(a).ga2(a)}
J.as=function(a){return J.aV(a).gm(a)}
J.hT=function(a){return J.aH(a).gd4(a)}
J.hU=function(a){return J.aH(a).gjg(a)}
J.ed=function(a){return J.c9(a).j5(a)}
J.hV=function(a,b){return J.aH(a).j9(a,b)}
J.hW=function(a,b){return J.aH(a).sa6(a,b)}
J.hX=function(a,b,c){return J.ca(a).w(a,b,c)}
J.hY=function(a){return J.ca(a).jm(a)}
J.ad=function(a){return J.L(a).i(a)}
I.ab=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.v=W.cB.prototype
C.l=W.dd.prototype
C.M=W.bh.prototype
C.P=J.t.prototype
C.a=J.bm.prototype
C.Q=J.eM.prototype
C.f=J.eN.prototype
C.w=J.eO.prototype
C.d=J.ck.prototype
C.b=J.cl.prototype
C.X=J.cm.prototype
C.a2=H.dy.prototype
C.a3=W.jr.prototype
C.E=J.jy.prototype
C.a4=P.dA.prototype
C.F=W.kn.prototype
C.u=J.ct.prototype
C.G=W.c0.prototype
C.H=W.lk.prototype
C.J=new P.i2(!1)
C.I=new P.i1(C.J)
C.K=new P.jw()
C.L=new P.l8()
C.j=new P.m7()
C.c=new A.cE(0,"ColorSourceType.None")
C.i=new A.cE(1,"ColorSourceType.Solid")
C.h=new A.cE(2,"ColorSourceType.Texture2D")
C.e=new A.cE(3,"ColorSourceType.TextureCube")
C.q=new P.bi(0)
C.N=new P.bi(5e6)
C.O=new P.iK("element",!0,!1,!1,!1)
C.R=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.S=function(hooks) {
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
C.x=function(hooks) { return hooks; }

C.T=function(getTagFallback) {
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
C.U=function() {
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
C.V=function(hooks) {
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
C.W=function(hooks) {
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
C.y=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.z=H.c(I.ab([127,2047,65535,1114111]),[P.n])
C.m=H.c(I.ab([0,0,32776,33792,1,10240,0,0]),[P.n])
C.Y=H.c(I.ab(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.n=H.c(I.ab([0,0,65490,45055,65535,34815,65534,18431]),[P.n])
C.o=H.c(I.ab([0,0,26624,1023,65534,2047,65534,2047]),[P.n])
C.Z=H.c(I.ab(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.A=H.c(I.ab([]),[P.h])
C.a_=H.c(I.ab([0,0,32722,12287,65534,34815,65534,18431]),[P.n])
C.B=H.c(I.ab([0,0,65498,45055,65535,34815,65534,18431]),[P.n])
C.p=H.c(I.ab([0,0,24576,1023,65534,34815,65534,18431]),[P.n])
C.C=H.c(I.ab([0,0,32754,11263,65534,34815,65534,18431]),[P.n])
C.a0=H.c(I.ab([0,0,32722,12287,65535,34815,65534,18431]),[P.n])
C.D=H.c(I.ab([0,0,65490,12287,65535,34815,65534,18431]),[P.n])
C.r=H.c(I.ab(["bind","if","ref","repeat","syntax"]),[P.h])
C.t=H.c(I.ab(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.a1=new H.ig(0,{},C.A,[P.h,P.h])
C.k=new P.l1(!1)
$.aJ=0
$.bN=null
$.ek=null
$.dV=!1
$.hA=null
$.hs=null
$.hI=null
$.d0=null
$.d3=null
$.e3=null
$.bG=null
$.c5=null
$.c6=null
$.dW=!1
$.a_=C.j
$.aX=null
$.dh=null
$.eE=null
$.eD=null
$.ez=null
$.ey=null
$.ex=null
$.ew=null
$.p=V.jl()
$.kf="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.ke="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.f3=null
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
I.$lazy(y,x,w)}})(["ev","$get$ev",function(){return H.hz("_$dart_dartClosure")},"dl","$get$dl",function(){return H.hz("_$dart_js")},"fp","$get$fp",function(){return H.aR(H.cS({
toString:function(){return"$receiver$"}}))},"fq","$get$fq",function(){return H.aR(H.cS({$method$:null,
toString:function(){return"$receiver$"}}))},"fr","$get$fr",function(){return H.aR(H.cS(null))},"fs","$get$fs",function(){return H.aR(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"fw","$get$fw",function(){return H.aR(H.cS(void 0))},"fx","$get$fx",function(){return H.aR(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fu","$get$fu",function(){return H.aR(H.fv(null))},"ft","$get$ft",function(){return H.aR(function(){try{null.$method$}catch(z){return z.message}}())},"fz","$get$fz",function(){return H.aR(H.fv(void 0))},"fy","$get$fy",function(){return H.aR(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dQ","$get$dQ",function(){return P.ll()},"c7","$get$c7",function(){return[]},"fL","$get$fL",function(){return P.l5()},"fU","$get$fU",function(){return H.jp(H.bF(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.n])))},"hh","$get$hh",function(){return P.jT("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"ho","$get$ho",function(){return P.ne()},"et","$get$et",function(){return{}},"fY","$get$fY",function(){return P.eS(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)},"dR","$get$dR",function(){return P.dq(P.h,P.cg)},"fP","$get$fP",function(){return Z.ay(0)},"fN","$get$fN",function(){return Z.ay(511)},"aG","$get$aG",function(){return Z.ay(1)},"b2","$get$b2",function(){return Z.ay(2)},"b1","$get$b1",function(){return Z.ay(4)},"b3","$get$b3",function(){return Z.ay(8)},"b4","$get$b4",function(){return Z.ay(16)},"bZ","$get$bZ",function(){return Z.ay(32)},"c_","$get$c_",function(){return Z.ay(64)},"fO","$get$fO",function(){return Z.ay(96)},"bD","$get$bD",function(){return Z.ay(128)},"b0","$get$b0",function(){return Z.ay(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.P},{func:1,ret:-1,opt:[D.C]},{func:1,ret:-1,args:[D.C]},{func:1,ret:-1},{func:1,ret:-1,args:[W.aC]},{func:1,ret:P.P,args:[F.af,P.u,P.u]},{func:1,ret:-1,args:[P.n,[P.i,E.aY]]},{func:1,ret:P.P,args:[F.aw]},{func:1,ret:P.P,args:[,,]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:-1,args:[W.ag]},{func:1,ret:P.P,args:[D.C]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.P,args:[W.ag]},{func:1,ret:P.u},{func:1,ret:-1,args:[W.bA]},{func:1,ret:P.W,args:[P.h]},{func:1,ret:-1,args:[P.n,[P.i,U.an]]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:P.h,args:[P.h]},{func:1,args:[,]},{func:1,ret:-1,args:[P.n,[P.i,D.a9]]},{func:1,ret:P.W,args:[W.X,P.h,P.h,W.cu]},{func:1,ret:V.U,args:[P.u]},{func:1,ret:P.W,args:[W.H]},{func:1,ret:P.u,args:[P.u,P.u]},{func:1,ret:W.H},{func:1,ret:P.h,args:[P.n]},{func:1,ret:P.W,args:[W.aO]},{func:1,ret:-1,args:[W.bR]},{func:1,ret:P.P,args:[{func:1,ret:-1,args:[D.C]}]},{func:1,ret:-1,args:[P.n,[P.i,V.aK]]},{func:1,ret:-1,args:[P.n,[P.i,M.aQ]]},{func:1,ret:P.P,args:[,]},{func:1,ret:P.u,args:[P.u]},{func:1,ret:P.P,args:[P.a8]},{func:1,ret:-1,args:[W.H,W.H]},{func:1,ret:P.V,args:[,,]},{func:1,ret:P.W,args:[P.u,P.u]},{func:1,ret:-1,args:[W.c0]},{func:1,ret:P.V,args:[P.n]},{func:1,ret:P.W,args:[[P.i,D.a9]]},{func:1,ret:P.P,args:[P.h,,]},{func:1,ret:P.P,args:[P.h]},{func:1,ret:P.n,args:[P.n,P.n]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:-1,args:[P.h,P.n]},{func:1,ret:[P.N,P.h,P.h],args:[[P.N,P.h,P.h],P.h]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,ret:[P.b5,,],args:[,]},{func:1,ret:P.n,args:[[P.d,P.n],P.n]},{func:1,ret:P.P,args:[,],opt:[,]},{func:1,ret:-1,args:[P.b],opt:[P.aE]},{func:1,ret:P.P,args:[{func:1,ret:-1}]},{func:1,ret:P.P,args:[P.by]},{func:1,ret:P.W,args:[V.b8]},{func:1,args:[P.h]},{func:1,args:[,P.h]},{func:1,ret:W.X,args:[W.H]}]
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
if(x==y)H.oi(d||a)
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
Isolate.ab=a.ab
Isolate.e1=a.e1
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
if(typeof dartMainRunner==="function")dartMainRunner(T.hF,[])
else T.hF([])})})()
//# sourceMappingURL=test.dart.js.map
