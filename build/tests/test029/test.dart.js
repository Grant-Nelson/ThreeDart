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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.dV"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dV"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.dV(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dW=function(){}
var dart=[["","",,H,{"^":"",oo:{"^":"b;a"}}],["","",,J,{"^":"",
L:function(a){return void 0},
e_:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
d_:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dY==null){H.nH()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.cq("Return interceptor for "+H.k(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$dj()]
if(v!=null)return v
v=H.nK(a)
if(v!=null)return v
if(typeof a=="function")return C.Y
y=Object.getPrototypeOf(a)
if(y==null)return C.F
if(y===Object.prototype)return C.F
if(typeof w=="function"){Object.defineProperty(w,$.$get$dj(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
r:{"^":"b;",
w:function(a,b){return a===b},
gX:function(a){return H.bS(a)},
i:["f0",function(a){return"Instance of '"+H.bo(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
iJ:{"^":"r;",
i:function(a){return String(a)},
gX:function(a){return a?519018:218159},
$isT:1},
eG:{"^":"r;",
w:function(a,b){return null==b},
i:function(a){return"null"},
gX:function(a){return 0},
$isK:1},
dk:{"^":"r;",
gX:function(a){return 0},
i:["f2",function(a){return String(a)}]},
jo:{"^":"dk;"},
cr:{"^":"dk;"},
cm:{"^":"dk;",
i:function(a){var z=a[$.$get$en()]
if(z==null)return this.f2(a)
return"JavaScript function for "+H.k(J.am(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscg:1},
bk:{"^":"r;$ti",
h:function(a,b){H.A(b,H.x(a,0))
if(!!a.fixed$length)H.t(P.D("add"))
a.push(b)},
P:function(a,b){var z
if(!!a.fixed$length)H.t(P.D("remove"))
for(z=0;z<a.length;++z)if(J.V(a[z],b)){a.splice(z,1)
return!0}return!1},
ac:function(a,b){var z,y
H.p(b,"$isi",[H.x(a,0)],"$asi")
if(!!a.fixed$length)H.t(P.D("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.C)(b),++y)a.push(b[y])},
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.x(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.aJ(a))}},
n:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.p(z,y,H.k(a[y]))
return z.join(b)},
it:function(a){return this.n(a,"")},
ij:function(a,b,c,d){var z,y,x
H.A(b,d)
H.l(c,{func:1,ret:d,args:[d,H.x(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.aJ(a))}return y},
ih:function(a,b,c){var z,y,x
H.l(b,{func:1,ret:P.T,args:[H.x(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.a(P.aJ(a))}throw H.a(H.dh())},
ig:function(a,b){return this.ih(a,b,null)},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
bW:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a4(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a4(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.x(a,0)])
return H.c(a.slice(b,c),[H.x(a,0)])},
gax:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.dh())},
aG:function(a,b,c,d){var z
H.A(d,H.x(a,0))
if(!!a.immutable$list)H.t(P.D("fill range"))
P.aY(b,c,a.length,null,null,null)
for(z=b;z.O(0,c);z=z.I(0,1))a[z]=d},
dU:function(a,b){var z,y
H.l(b,{func:1,ret:P.T,args:[H.x(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.a(P.aJ(a))}return!1},
W:function(a,b){var z
for(z=0;z<a.length;++z)if(J.V(a[z],b))return!0
return!1},
i:function(a){return P.dg(a,"[","]")},
ga0:function(a){return new J.aB(a,a.length,0,[H.x(a,0)])},
gX:function(a){return H.bS(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.t(P.D("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cy(b,"newLength",null))
if(b<0)throw H.a(P.a4(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aS(a,b))
if(b>=a.length||b<0)throw H.a(H.aS(a,b))
return a[b]},
p:function(a,b,c){H.F(b)
H.A(c,H.x(a,0))
if(!!a.immutable$list)H.t(P.D("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aS(a,b))
if(b>=a.length||b<0)throw H.a(H.aS(a,b))
a[b]=c},
$isi:1,
$isd:1,
t:{
iI:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cy(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a4(a,0,4294967295,"length",null))
return J.eD(new Array(a),b)},
eD:function(a,b){return J.bL(H.c(a,[b]))},
bL:function(a){H.c9(a)
a.fixed$length=Array
return a}}},
on:{"^":"bk;$ti"},
aB:{"^":"b;a,b,c,0d,$ti",
gM:function(a){return this.d},
C:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.C(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
ck:{"^":"r;",
gis:function(a){return a===0?1/a<0:a<0},
j4:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.D(""+a+".toInt()"))},
cI:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.D(""+a+".floor()"))},
a1:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.D(""+a+".round()"))},
eM:function(a,b){var z
if(b>20)throw H.a(P.a4(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gis(a))return"-"+z
return z},
bj:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a4(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.a_(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.t(P.D("Unexpected toString result: "+z))
x=J.aT(y)
z=x.j(y,1)
w=+x.j(y,3)
if(x.j(y,2)!=null){z+=x.j(y,2)
w-=x.j(y,2).length}return z+C.b.k("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gX:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.a(H.af(b))
return a*b},
bn:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
f6:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dM(a,b)},
a9:function(a,b){return(a|0)===a?a/b|0:this.dM(a,b)},
dM:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.D("Result of truncating division is "+H.k(z)+": "+H.k(a)+" ~/ "+b))},
aT:function(a,b){var z
if(a>0)z=this.dK(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
hu:function(a,b){if(b<0)throw H.a(H.af(b))
return this.dK(a,b)},
dK:function(a,b){return b>31?0:a>>>b},
O:function(a,b){if(typeof b!=="number")throw H.a(H.af(b))
return a<b},
$isB:1,
$isa5:1},
eF:{"^":"ck;",$ism:1},
eE:{"^":"ck;"},
cl:{"^":"r;",
a_:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aS(a,b))
if(b<0)throw H.a(H.aS(a,b))
if(b>=a.length)H.t(H.aS(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.a(H.aS(a,b))
return a.charCodeAt(b)},
I:function(a,b){H.H(b)
if(typeof b!=="string")throw H.a(P.cy(b,null,null))
return a+b},
b1:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.af(b))
c=P.aY(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.af(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
al:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.af(c))
if(typeof c!=="number")return c.O()
if(c<0||c>a.length)throw H.a(P.a4(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a7:function(a,b){return this.al(a,b,0)},
v:function(a,b,c){H.F(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.af(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.O()
if(b<0)throw H.a(P.cM(b,null,null))
if(b>c)throw H.a(P.cM(b,null,null))
if(c>a.length)throw H.a(P.cM(c,null,null))
return a.substring(b,c)},
at:function(a,b){return this.v(a,b,null)},
j7:function(a){return a.toLowerCase()},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.L)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
iI:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
aH:function(a,b){return this.iI(a,b," ")},
ey:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a4(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
ex:function(a,b){return this.ey(a,b,0)},
i5:function(a,b,c){if(c>a.length)throw H.a(P.a4(c,0,a.length,null,null))
return H.hB(a,b,c)},
i:function(a){return a},
gX:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gm:function(a){return a.length},
$iseX:1,
$isf:1}}],["","",,H,{"^":"",
d0:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
dh:function(){return new P.dy("No element")},
iH:function(){return new P.dy("Too many elements")},
u:{"^":"kJ;a",
gm:function(a){return this.a.length},
j:function(a,b){return C.b.a_(this.a,b)},
$ascR:function(){return[P.m]},
$asy:function(){return[P.m]},
$asi:function(){return[P.m]},
$asd:function(){return[P.m]}},
ev:{"^":"i;"},
cJ:{"^":"ev;$ti",
ga0:function(a){return new H.dn(this,this.gm(this),0,[H.ag(this,"cJ",0)])},
d3:function(a,b){return this.f1(0,H.l(b,{func:1,ret:P.T,args:[H.ag(this,"cJ",0)]}))}},
dn:{"^":"b;a,b,c,0d,$ti",
gM:function(a){return this.d},
C:function(){var z,y,x,w
z=this.a
y=J.aT(z)
x=y.gm(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.aJ(z))
w=this.c
if(typeof x!=="number")return H.o(x)
if(w>=x){this.d=null
return!1}this.d=y.J(z,w);++this.c
return!0}},
j1:{"^":"i;a,b,$ti",
ga0:function(a){return new H.j2(J.b5(this.a),this.b,this.$ti)},
gm:function(a){return J.ar(this.a)},
J:function(a,b){return this.b.$1(J.cw(this.a,b))},
$asi:function(a,b){return[b]}},
j2:{"^":"di;0a,b,c,$ti",
C:function(){var z=this.b
if(z.C()){this.a=this.c.$1(z.gM(z))
return!0}this.a=null
return!1},
gM:function(a){return this.a},
$asdi:function(a,b){return[b]}},
j3:{"^":"cJ;a,b,$ti",
gm:function(a){return J.ar(this.a)},
J:function(a,b){return this.b.$1(J.cw(this.a,b))},
$ascJ:function(a,b){return[b]},
$asi:function(a,b){return[b]}},
dK:{"^":"i;a,b,$ti",
ga0:function(a){return new H.le(J.b5(this.a),this.b,this.$ti)}},
le:{"^":"di;a,b,$ti",
C:function(){var z,y
for(z=this.a,y=this.b;z.C();)if(y.$1(z.gM(z)))return!0
return!1},
gM:function(a){var z=this.a
return z.gM(z)}},
cG:{"^":"b;$ti"},
cR:{"^":"b;$ti",
p:function(a,b,c){H.F(b)
H.A(c,H.ag(this,"cR",0))
throw H.a(P.D("Cannot modify an unmodifiable list"))},
aG:function(a,b,c,d){H.A(d,H.ag(this,"cR",0))
throw H.a(P.D("Cannot modify an unmodifiable list"))}},
kJ:{"^":"cI+cR;"}}],["","",,H,{"^":"",
i4:function(){throw H.a(P.D("Cannot modify unmodifiable Map"))},
nA:function(a){return init.types[H.F(a)]},
hu:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.L(a).$isJ},
k:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.am(a)
if(typeof z!=="string")throw H.a(H.af(a))
return z},
bS:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
jz:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.h(z,3)
y=H.H(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a4(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.F(w,u)|32)>x)return}return parseInt(a,b)},
bo:function(a){var z,y,x,w,v,u,t,s,r
z=J.L(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.Q||!!J.L(a).$iscr){v=C.z(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.F(w,0)===36)w=C.b.at(w,1)
r=H.dZ(H.c9(H.bd(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
jr:function(){if(!!self.location)return self.location.href
return},
f0:function(a){var z,y,x,w,v
H.c9(a)
z=J.ar(a)
if(typeof z!=="number")return z.eU()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
jA:function(a){var z,y,x,w
z=H.c([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.C)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.af(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.e.aT(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.af(w))}return H.f0(z)},
f1:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.af(x))
if(x<0)throw H.a(H.af(x))
if(x>65535)return H.jA(a)}return H.f0(a)},
jB:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.eU()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
bT:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.e.aT(z,10))>>>0,56320|z&1023)}}throw H.a(P.a4(a,0,1114111,null,null))},
ak:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jy:function(a){return a.b?H.ak(a).getUTCFullYear()+0:H.ak(a).getFullYear()+0},
jw:function(a){return a.b?H.ak(a).getUTCMonth()+1:H.ak(a).getMonth()+1},
js:function(a){return a.b?H.ak(a).getUTCDate()+0:H.ak(a).getDate()+0},
jt:function(a){return a.b?H.ak(a).getUTCHours()+0:H.ak(a).getHours()+0},
jv:function(a){return a.b?H.ak(a).getUTCMinutes()+0:H.ak(a).getMinutes()+0},
jx:function(a){return a.b?H.ak(a).getUTCSeconds()+0:H.ak(a).getSeconds()+0},
ju:function(a){return a.b?H.ak(a).getUTCMilliseconds()+0:H.ak(a).getMilliseconds()+0},
o:function(a){throw H.a(H.af(a))},
h:function(a,b){if(a==null)J.ar(a)
throw H.a(H.aS(a,b))},
aS:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aG(!0,b,"index",null)
z=H.F(J.ar(a))
if(!(b<0)){if(typeof z!=="number")return H.o(z)
y=b>=z}else y=!0
if(y)return P.W(b,a,"index",null,z)
return P.cM(b,"index",null)},
nu:function(a,b,c){if(a>c)return new P.cL(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cL(a,c,!0,b,"end","Invalid value")
return new P.aG(!0,b,"end",null)},
af:function(a){return new P.aG(!0,a,null,null)},
nn:function(a){if(typeof a!=="number")throw H.a(H.af(a))
return a},
a:function(a){var z
if(a==null)a=new P.eW()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hC})
z.name=""}else z.toString=H.hC
return z},
hC:function(){return J.am(this.dartException)},
t:function(a){throw H.a(a)},
C:function(a){throw H.a(P.aJ(a))},
ab:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.nZ(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.aT(x,16)&8191)===10)switch(w){case 438:return z.$1(H.dl(H.k(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eV(H.k(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fm()
u=$.$get$fn()
t=$.$get$fo()
s=$.$get$fp()
r=$.$get$ft()
q=$.$get$fu()
p=$.$get$fr()
$.$get$fq()
o=$.$get$fw()
n=$.$get$fv()
m=v.an(y)
if(m!=null)return z.$1(H.dl(H.H(y),m))
else{m=u.an(y)
if(m!=null){m.method="call"
return z.$1(H.dl(H.H(y),m))}else{m=t.an(y)
if(m==null){m=s.an(y)
if(m==null){m=r.an(y)
if(m==null){m=q.an(y)
if(m==null){m=p.an(y)
if(m==null){m=s.an(y)
if(m==null){m=o.an(y)
if(m==null){m=n.an(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eV(H.H(y),m))}}return z.$1(new H.kI(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.f7()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aG(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.f7()
return a},
bF:function(a){var z
if(a==null)return new H.h1(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.h1(a)},
nx:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.p(0,a[y],a[x])}return b},
nJ:function(a,b,c,d,e,f){H.e(a,"$iscg")
switch(H.F(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.v("Unsupported number of arguments for wrapped closure"))},
bD:function(a,b){var z
H.F(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nJ)
a.$identity=z
return z},
i_:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.L(d).$isd){z.$reflectionInfo=d
x=H.jF(z).r}else x=d
w=e?Object.create(new H.k5().constructor.prototype):Object.create(new H.d7(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aH
if(typeof u!=="number")return u.I()
$.aH=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.eh(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.nA,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.ec:H.d8
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.eh(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
hX:function(a,b,c,d){var z=H.d8
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
eh:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hZ(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hX(y,!w,z,b)
if(y===0){w=$.aH
if(typeof w!=="number")return w.I()
$.aH=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bI
if(v==null){v=H.cA("self")
$.bI=v}return new Function(w+H.k(v)+";return "+u+"."+H.k(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aH
if(typeof w!=="number")return w.I()
$.aH=w+1
t+=w
w="return function("+t+"){return this."
v=$.bI
if(v==null){v=H.cA("self")
$.bI=v}return new Function(w+H.k(v)+"."+H.k(z)+"("+t+");}")()},
hY:function(a,b,c,d){var z,y
z=H.d8
y=H.ec
switch(b?-1:a){case 0:throw H.a(H.jP("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hZ:function(a,b){var z,y,x,w,v,u,t,s
z=$.bI
if(z==null){z=H.cA("self")
$.bI=z}y=$.eb
if(y==null){y=H.cA("receiver")
$.eb=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hY(w,!u,x,b)
if(w===1){z="return function(){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+");"
y=$.aH
if(typeof y!=="number")return y.I()
$.aH=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+", "+s+");"
y=$.aH
if(typeof y!=="number")return y.I()
$.aH=y+1
return new Function(z+y+"}")()},
dV:function(a,b,c,d,e,f,g){var z,y
z=J.bL(H.c9(b))
H.F(c)
y=!!J.L(d).$isd?J.bL(d):d
return H.i_(a,z,c,y,!!e,f,g)},
H:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aE(a,"String"))},
nv:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aE(a,"double"))},
nP:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aE(a,"num"))},
dT:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aE(a,"bool"))},
F:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aE(a,"int"))},
hz:function(a,b){throw H.a(H.aE(a,H.H(b).substring(3)))},
nR:function(a,b){var z=J.aT(b)
throw H.a(H.hW(a,z.v(b,3,z.gm(b))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.L(a)[b])return a
H.hz(a,b)},
j:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.L(a)[b]
else z=!0
if(z)return a
H.nR(a,b)},
c9:function(a){if(a==null)return a
if(!!J.L(a).$isd)return a
throw H.a(H.aE(a,"List"))},
hw:function(a,b){if(a==null)return a
if(!!J.L(a).$isd)return a
if(J.L(a)[b])return a
H.hz(a,b)},
hq:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.F(z)]
else return a.$S()}return},
cu:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.hq(J.L(a))
if(z==null)return!1
y=H.ht(z,null,b,null)
return y},
l:function(a,b){var z,y
if(a==null)return a
if($.dQ)return a
$.dQ=!0
try{if(H.cu(a,b))return a
z=H.cv(b)
y=H.aE(a,z)
throw H.a(y)}finally{$.dQ=!1}},
dX:function(a,b){if(a!=null&&!H.dU(a,b))H.t(H.aE(a,H.cv(b)))
return a},
hl:function(a){var z
if(a instanceof H.n){z=H.hq(J.L(a))
if(z!=null)return H.cv(z)
return"Closure"}return H.bo(a)},
nW:function(a){throw H.a(new P.i9(H.H(a)))},
hr:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bd:function(a){if(a==null)return
return a.$ti},
pi:function(a,b,c){return H.bG(a["$as"+H.k(c)],H.bd(b))},
b4:function(a,b,c,d){var z
H.H(c)
H.F(d)
z=H.bG(a["$as"+H.k(c)],H.bd(b))
return z==null?null:z[d]},
ag:function(a,b,c){var z
H.H(b)
H.F(c)
z=H.bG(a["$as"+H.k(b)],H.bd(a))
return z==null?null:z[c]},
x:function(a,b){var z
H.F(b)
z=H.bd(a)
return z==null?null:z[b]},
cv:function(a){var z=H.be(a,null)
return z},
be:function(a,b){var z,y
H.p(b,"$isd",[P.f],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dZ(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.F(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.h(b,y)
return H.k(b[y])}if('func' in a)return H.nd(a,b)
if('futureOr' in a)return"FutureOr<"+H.be("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nd:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.f]
H.p(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.h(b,r)
t=C.b.I(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.be(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.be(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.be(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.be(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.nw(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.H(z[l])
n=n+m+H.be(i[h],b)+(" "+H.k(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dZ:function(a,b,c){var z,y,x,w,v,u
H.p(c,"$isd",[P.f],"$asd")
if(a==null)return""
z=new P.ao("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.be(u,c)}v="<"+z.i(0)+">"
return v},
bG:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
c5:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.bd(a)
y=J.L(a)
if(y[b]==null)return!1
return H.ho(H.bG(y[d],z),null,c,null)},
p:function(a,b,c,d){var z,y
H.H(b)
H.c9(c)
H.H(d)
if(a==null)return a
z=H.c5(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.dZ(c,0,null)
throw H.a(H.aE(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
ho:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aA(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aA(a[y],b,c[y],d))return!1
return!0},
pg:function(a,b,c){return a.apply(b,H.bG(J.L(b)["$as"+H.k(c)],H.bd(b)))},
hv:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="K"||a===-1||a===-2||H.hv(z)}return!1},
dU:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="K"||b===-1||b===-2||H.hv(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.dU(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cu(a,b)}y=J.L(a).constructor
x=H.bd(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.aA(y,null,b,null)
return z},
A:function(a,b){if(a!=null&&!H.dU(a,b))throw H.a(H.aE(a,H.cv(b)))
return a},
aA:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aA(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="K")return!0
if('func' in c)return H.ht(a,b,c,d)
if('func' in a)return c.builtin$cls==="cg"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aA("type" in a?a.type:null,b,x,d)
else if(H.aA(a,b,x,d))return!0
else{if(!('$is'+"bK" in y.prototype))return!1
w=y.prototype["$as"+"bK"]
v=H.bG(w,z?a.slice(1):null)
return H.aA(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cv(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.ho(H.bG(r,z),b,u,d)},
ht:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.nO(m,b,l,d)},
nO:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aA(c[w],d,a[w],b))return!1}return!0},
ph:function(a,b,c){Object.defineProperty(a,H.H(b),{value:c,enumerable:false,writable:true,configurable:true})},
nK:function(a){var z,y,x,w,v,u
z=H.H($.hs.$1(a))
y=$.cZ[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.d1[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.H($.hn.$2(a,z))
if(z!=null){y=$.cZ[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.d1[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.d2(x)
$.cZ[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.d1[z]=x
return x}if(v==="-"){u=H.d2(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.hy(a,x)
if(v==="*")throw H.a(P.cq(z))
if(init.leafTags[z]===true){u=H.d2(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.hy(a,x)},
hy:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.e_(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
d2:function(a){return J.e_(a,!1,null,!!a.$isJ)},
nN:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.d2(z)
else return J.e_(z,c,null,null)},
nH:function(){if(!0===$.dY)return
$.dY=!0
H.nI()},
nI:function(){var z,y,x,w,v,u,t,s
$.cZ=Object.create(null)
$.d1=Object.create(null)
H.nD()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hA.$1(v)
if(u!=null){t=H.nN(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
nD:function(){var z,y,x,w,v,u,t
z=C.V()
z=H.bC(C.S,H.bC(C.X,H.bC(C.y,H.bC(C.y,H.bC(C.W,H.bC(C.T,H.bC(C.U(C.z),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.hs=new H.nE(v)
$.hn=new H.nF(u)
$.hA=new H.nG(t)},
bC:function(a,b){return a(b)||b},
hB:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
e1:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
i3:{"^":"b;$ti",
i:function(a){return P.dp(this)},
p:function(a,b,c){H.A(b,H.x(this,0))
H.A(c,H.x(this,1))
return H.i4()},
$isM:1},
i5:{"^":"i3;a,b,c,$ti",
gm:function(a){return this.a},
bw:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bw(0,b))return
return this.du(b)},
du:function(a){return this.b[H.H(a)]},
H:function(a,b){var z,y,x,w,v
z=H.x(this,1)
H.l(b,{func:1,ret:-1,args:[H.x(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.A(this.du(v),z))}}},
jE:{"^":"b;a,b,c,d,e,f,r,0x",t:{
jF:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bL(z)
y=z[0]
x=z[1]
return new H.jE(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ku:{"^":"b;a,b,c,d,e,f",
an:function(a){var z,y,x
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
aQ:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.f])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ku(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cQ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fs:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
jl:{"^":"a8;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.k(this.a)
return"NullError: method not found: '"+z+"' on null"},
t:{
eV:function(a,b){return new H.jl(a,b==null?null:b.method)}}},
iM:{"^":"a8;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.k(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.k(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.k(this.a)+")"},
t:{
dl:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.iM(a,y,z?null:b.receiver)}}},
kI:{"^":"a8;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
nZ:{"^":"n:20;a",
$1:function(a){if(!!J.L(a).$isa8)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
h1:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaD:1},
n:{"^":"b;",
i:function(a){return"Closure '"+H.bo(this).trim()+"'"},
geQ:function(){return this},
$iscg:1,
geQ:function(){return this}},
fc:{"^":"n;"},
k5:{"^":"fc;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
d7:{"^":"fc;a,b,c,d",
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.d7))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gX:function(a){var z,y
z=this.c
if(z==null)y=H.bS(this.a)
else y=typeof z!=="object"?J.cb(z):H.bS(z)
return(y^H.bS(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.bo(z)+"'")},
t:{
d8:function(a){return a.a},
ec:function(a){return a.c},
cA:function(a){var z,y,x,w,v
z=new H.d7("self","target","receiver","name")
y=J.bL(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
kv:{"^":"a8;a",
i:function(a){return this.a},
t:{
aE:function(a,b){return new H.kv("TypeError: "+H.k(P.cF(a))+": type '"+H.hl(a)+"' is not a subtype of type '"+b+"'")}}},
hV:{"^":"a8;a",
i:function(a){return this.a},
t:{
hW:function(a,b){return new H.hV("CastError: "+H.k(P.cF(a))+": type '"+H.hl(a)+"' is not a subtype of type '"+b+"'")}}},
jO:{"^":"a8;a",
i:function(a){return"RuntimeError: "+H.k(this.a)},
t:{
jP:function(a){return new H.jO(a)}}},
b9:{"^":"eO;a,0b,0c,0d,0e,0f,r,$ti",
gm:function(a){return this.a},
gir:function(a){return this.a===0},
gaa:function(a){return new H.iR(this,[H.x(this,0)])},
bw:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.dq(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.dq(y,b)}else return this.io(b)},
io:function(a){var z=this.d
if(z==null)return!1
return this.cM(this.c7(z,this.cL(a)),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bq(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bq(w,b)
x=y==null?null:y.b
return x}else return this.ip(b)},
ip:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.c7(z,this.cL(a))
x=this.cM(y,a)
if(x<0)return
return y[x].b},
p:function(a,b,c){var z,y
H.A(b,H.x(this,0))
H.A(c,H.x(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.cc()
this.b=z}this.dh(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.cc()
this.c=y}this.dh(y,b,c)}else this.iq(b,c)},
iq:function(a,b){var z,y,x,w
H.A(a,H.x(this,0))
H.A(b,H.x(this,1))
z=this.d
if(z==null){z=this.cc()
this.d=z}y=this.cL(a)
x=this.c7(z,y)
if(x==null)this.ci(z,y,[this.cd(a,b)])
else{w=this.cM(x,a)
if(w>=0)x[w].b=b
else x.push(this.cd(a,b))}},
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.aJ(this))
z=z.c}},
dh:function(a,b,c){var z
H.A(b,H.x(this,0))
H.A(c,H.x(this,1))
z=this.bq(a,b)
if(z==null)this.ci(a,b,this.cd(b,c))
else z.b=c},
fG:function(){this.r=this.r+1&67108863},
cd:function(a,b){var z,y
z=new H.iQ(H.A(a,H.x(this,0)),H.A(b,H.x(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fG()
return z},
cL:function(a){return J.cb(a)&0x3ffffff},
cM:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.V(a[y].a,b))return y
return-1},
i:function(a){return P.dp(this)},
bq:function(a,b){return a[b]},
c7:function(a,b){return a[b]},
ci:function(a,b,c){a[b]=c},
fA:function(a,b){delete a[b]},
dq:function(a,b){return this.bq(a,b)!=null},
cc:function(){var z=Object.create(null)
this.ci(z,"<non-identifier-key>",z)
this.fA(z,"<non-identifier-key>")
return z},
$iseK:1},
iQ:{"^":"b;a,b,0c,0d"},
iR:{"^":"ev;a,$ti",
gm:function(a){return this.a.a},
ga0:function(a){var z,y
z=this.a
y=new H.iS(z,z.r,this.$ti)
y.c=z.e
return y}},
iS:{"^":"b;a,b,0c,0d,$ti",
gM:function(a){return this.d},
C:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aJ(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
nE:{"^":"n:20;a",
$1:function(a){return this.a(a)}},
nF:{"^":"n:57;a",
$2:function(a,b){return this.a(a,b)}},
nG:{"^":"n:56;a",
$1:function(a){return this.a(H.H(a))}},
iK:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseX:1,
$isjG:1,
t:{
iL:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.a1("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
nw:function(a){return J.eD(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
nQ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bA:function(a){return a},
jf:function(a){return new Int8Array(a)},
aR:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aS(b,a))},
n7:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.nu(a,b,c))
return b},
eT:{"^":"r;",$iseT:1,"%":"ArrayBuffer"},
du:{"^":"r;",$isdu:1,$iskw:1,"%":"DataView;ArrayBufferView;dt|fW|fX|jg|fY|fZ|bb"},
dt:{"^":"du;",
gm:function(a){return a.length},
$isJ:1,
$asJ:I.dW},
jg:{"^":"fX;",
j:function(a,b){H.aR(b,a,a.length)
return a[b]},
p:function(a,b,c){H.F(b)
H.nv(c)
H.aR(b,a,a.length)
a[b]=c},
$ascG:function(){return[P.B]},
$asy:function(){return[P.B]},
$isi:1,
$asi:function(){return[P.B]},
$isd:1,
$asd:function(){return[P.B]},
"%":"Float32Array|Float64Array"},
bb:{"^":"fZ;",
p:function(a,b,c){H.F(b)
H.F(c)
H.aR(b,a,a.length)
a[b]=c},
$ascG:function(){return[P.m]},
$asy:function(){return[P.m]},
$isi:1,
$asi:function(){return[P.m]},
$isd:1,
$asd:function(){return[P.m]}},
ow:{"^":"bb;",
j:function(a,b){H.aR(b,a,a.length)
return a[b]},
"%":"Int16Array"},
ox:{"^":"bb;",
j:function(a,b){H.aR(b,a,a.length)
return a[b]},
"%":"Int32Array"},
oy:{"^":"bb;",
j:function(a,b){H.aR(b,a,a.length)
return a[b]},
"%":"Int8Array"},
oz:{"^":"bb;",
j:function(a,b){H.aR(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
oA:{"^":"bb;",
j:function(a,b){H.aR(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
oB:{"^":"bb;",
gm:function(a){return a.length},
j:function(a,b){H.aR(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
dv:{"^":"bb;",
gm:function(a){return a.length},
j:function(a,b){H.aR(b,a,a.length)
return a[b]},
bW:function(a,b,c){return new Uint8Array(a.subarray(b,H.n7(b,c,a.length)))},
$isdv:1,
$isS:1,
"%":";Uint8Array"},
fW:{"^":"dt+y;"},
fX:{"^":"fW+cG;"},
fY:{"^":"dt+y;"},
fZ:{"^":"fY+cG;"}}],["","",,P,{"^":"",
lg:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.nk()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bD(new P.li(z),1)).observe(y,{childList:true})
return new P.lh(z,y,x)}else if(self.setImmediate!=null)return P.nl()
return P.nm()},
p3:[function(a){self.scheduleImmediate(H.bD(new P.lj(H.l(a,{func:1,ret:-1})),0))},"$1","nk",4,0,11],
p4:[function(a){self.setImmediate(H.bD(new P.lk(H.l(a,{func:1,ret:-1})),0))},"$1","nl",4,0,11],
p5:[function(a){P.dD(C.q,H.l(a,{func:1,ret:-1}))},"$1","nm",4,0,11],
dD:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.e.a9(a.a,1000)
return P.mr(z<0?0:z,b)},
fh:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.bv]})
z=C.e.a9(a.a,1000)
return P.ms(z<0?0:z,b)},
ng:function(a,b){if(H.cu(a,{func:1,args:[P.b,P.aD]}))return b.iS(a,null,P.b,P.aD)
if(H.cu(a,{func:1,args:[P.b]}))return H.l(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cy(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
nf:function(){var z,y
for(;z=$.bB,z!=null;){$.c3=null
y=z.b
$.bB=y
if(y==null)$.c2=null
z.a.$0()}},
pf:[function(){$.dR=!0
try{P.nf()}finally{$.c3=null
$.dR=!1
if($.bB!=null)$.$get$dL().$1(P.hp())}},"$0","hp",0,0,3],
hk:function(a){var z=new P.fN(H.l(a,{func:1,ret:-1}))
if($.bB==null){$.c2=z
$.bB=z
if(!$.dR)$.$get$dL().$1(P.hp())}else{$.c2.b=z
$.c2=z}},
nj:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.bB
if(z==null){P.hk(a)
$.c3=$.c2
return}y=new P.fN(a)
x=$.c3
if(x==null){y.b=z
$.c3=y
$.bB=y}else{y.b=x.b
x.b=y
$.c3=y
if(y.b==null)$.c2=y}},
nS:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.Z
if(C.j===y){P.cY(null,null,C.j,a)
return}y.toString
P.cY(null,null,y,H.l(y.co(a),z))},
fg:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.Z
if(y===C.j){y.toString
return P.dD(a,b)}return P.dD(a,H.l(y.co(b),z))},
kr:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bv]}
H.l(b,z)
y=$.Z
if(y===C.j){y.toString
return P.fh(a,b)}x=y.dV(b,P.bv)
$.Z.toString
return P.fh(a,H.l(x,z))},
cX:function(a,b,c,d,e){var z={}
z.a=d
P.nj(new P.nh(z,e))},
hg:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.Z
if(y===c)return d.$0()
$.Z=c
z=y
try{y=d.$0()
return y}finally{$.Z=z}},
hh:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.A(e,g)
y=$.Z
if(y===c)return d.$1(e)
$.Z=c
z=y
try{y=d.$1(e)
return y}finally{$.Z=z}},
ni:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
y=$.Z
if(y===c)return d.$2(e,f)
$.Z=c
z=y
try{y=d.$2(e,f)
return y}finally{$.Z=z}},
cY:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.co(d):c.i2(d,-1)
P.hk(d)},
li:{"^":"n:17;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
lh:{"^":"n:51;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
lj:{"^":"n:2;a",
$0:function(){this.a.$0()}},
lk:{"^":"n:2;a",
$0:function(){this.a.$0()}},
h5:{"^":"b;a,0b,c",
fi:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bD(new P.mu(this,b),0),a)
else throw H.a(P.D("`setTimeout()` not found."))},
fj:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bD(new P.mt(this,a,Date.now(),b),0),a)
else throw H.a(P.D("Periodic timer."))},
$isbv:1,
t:{
mr:function(a,b){var z=new P.h5(!0,0)
z.fi(a,b)
return z},
ms:function(a,b){var z=new P.h5(!1,0)
z.fj(a,b)
return z}}},
mu:{"^":"n:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
mt:{"^":"n:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.e.f6(w,x)}z.c=y
this.d.$1(z)}},
bz:{"^":"b;0a,b,c,d,e,$ti",
iz:function(a){if(this.c!==6)return!0
return this.b.b.d0(H.l(this.d,{func:1,ret:P.T,args:[P.b]}),a.a,P.T,P.b)},
im:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.x(this,1)}
w=this.b.b
if(H.cu(z,{func:1,args:[P.b,P.aD]}))return H.dX(w.j_(z,a.a,a.b,null,y,P.aD),x)
else return H.dX(w.d0(H.l(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
b2:{"^":"b;dL:a<,b,0hk:c<,$ti",
eL:function(a,b,c){var z,y,x,w
z=H.x(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.Z
if(y!==C.j){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.ng(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.b2(0,$.Z,[c])
w=b==null?1:3
this.di(new P.bz(x,w,a,b,[z,c]))
return x},
j3:function(a,b){return this.eL(a,null,b)},
di:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isbz")
this.c=a}else{if(z===2){y=H.e(this.c,"$isb2")
z=y.a
if(z<4){y.di(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cY(null,null,z,H.l(new P.lA(this,a),{func:1,ret:-1}))}},
dE:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isbz")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isb2")
y=u.a
if(y<4){u.dE(a)
return}this.a=y
this.c=u.c}z.a=this.bs(a)
y=this.b
y.toString
P.cY(null,null,y,H.l(new P.lF(z,this),{func:1,ret:-1}))}},
cf:function(){var z=H.e(this.c,"$isbz")
this.c=null
return this.bs(z)},
bs:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
dl:function(a){var z,y,x,w
z=H.x(this,0)
H.dX(a,{futureOr:1,type:z})
y=this.$ti
x=H.c5(a,"$isbK",y,"$asbK")
if(x){z=H.c5(a,"$isb2",y,null)
if(z)P.fR(a,this)
else P.lB(a,this)}else{w=this.cf()
H.A(a,z)
this.a=4
this.c=a
P.c_(this,w)}},
c2:[function(a,b){var z
H.e(b,"$isaD")
z=this.cf()
this.a=8
this.c=new P.as(a,b)
P.c_(this,z)},function(a){return this.c2(a,null)},"jb","$2","$1","gft",4,2,50],
$isbK:1,
t:{
lB:function(a,b){var z,y,x
b.a=1
try{a.eL(new P.lC(b),new P.lD(b),null)}catch(x){z=H.ab(x)
y=H.bF(x)
P.nS(new P.lE(b,z,y))}},
fR:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isb2")
if(z>=4){y=b.cf()
b.a=a.a
b.c=a.c
P.c_(b,y)}else{y=H.e(b.c,"$isbz")
b.a=2
b.c=a
a.dE(y)}},
c_:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isas")
y=y.b
u=v.a
t=v.b
y.toString
P.cX(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.c_(z.a,b)}y=z.a
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
if(p){H.e(r,"$isas")
y=y.b
u=r.a
t=r.b
y.toString
P.cX(null,null,y,u,t)
return}o=$.Z
if(o==null?q!=null:o!==q)$.Z=q
else o=null
y=b.c
if(y===8)new P.lI(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.lH(x,b,r).$0()}else if((y&2)!==0)new P.lG(z,x,b).$0()
if(o!=null)$.Z=o
y=x.b
if(!!J.L(y).$isbK){if(y.a>=4){n=H.e(t.c,"$isbz")
t.c=null
b=t.bs(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fR(y,t)
return}}m=b.b
n=H.e(m.c,"$isbz")
m.c=null
b=m.bs(n)
y=x.a
u=x.b
if(!y){H.A(u,H.x(m,0))
m.a=4
m.c=u}else{H.e(u,"$isas")
m.a=8
m.c=u}z.a=m
y=m}}}},
lA:{"^":"n:2;a,b",
$0:function(){P.c_(this.a,this.b)}},
lF:{"^":"n:2;a,b",
$0:function(){P.c_(this.b,this.a.a)}},
lC:{"^":"n:17;a",
$1:function(a){var z=this.a
z.a=0
z.dl(a)}},
lD:{"^":"n:46;a",
$2:function(a,b){this.a.c2(a,H.e(b,"$isaD"))},
$1:function(a){return this.$2(a,null)}},
lE:{"^":"n:2;a,b,c",
$0:function(){this.a.c2(this.b,this.c)}},
lI:{"^":"n:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.eI(H.l(w.d,{func:1}),null)}catch(v){y=H.ab(v)
x=H.bF(v)
if(this.d){w=H.e(this.a.a.c,"$isas").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isas")
else u.b=new P.as(y,x)
u.a=!0
return}if(!!J.L(z).$isbK){if(z instanceof P.b2&&z.gdL()>=4){if(z.gdL()===8){w=this.b
w.b=H.e(z.ghk(),"$isas")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.j3(new P.lJ(t),null)
w.a=!1}}},
lJ:{"^":"n:49;a",
$1:function(a){return this.a}},
lH:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.x(x,0)
v=H.A(this.c,w)
u=H.x(x,1)
this.a.b=x.b.b.d0(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ab(t)
y=H.bF(t)
x=this.a
x.b=new P.as(z,y)
x.a=!0}}},
lG:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isas")
w=this.c
if(w.iz(z)&&w.e!=null){v=this.b
v.b=w.im(z)
v.a=!1}}catch(u){y=H.ab(u)
x=H.bF(u)
w=H.e(this.a.a.c,"$isas")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.as(y,x)
s.a=!0}}},
fN:{"^":"b;a,0b"},
dz:{"^":"b;$ti",
gm:function(a){var z,y
z={}
y=new P.b2(0,$.Z,[P.m])
z.a=0
this.iw(new P.k8(z,this),!0,new P.k9(z,y),y.gft())
return y}},
k8:{"^":"n;a,b",
$1:function(a){H.A(a,H.ag(this.b,"dz",0));++this.a.a},
$S:function(){return{func:1,ret:P.K,args:[H.ag(this.b,"dz",0)]}}},
k9:{"^":"n:2;a,b",
$0:function(){this.b.dl(this.a.a)}},
fa:{"^":"b;$ti"},
k7:{"^":"b;"},
bv:{"^":"b;"},
as:{"^":"b;a,b",
i:function(a){return H.k(this.a)},
$isa8:1},
mX:{"^":"b;",$isp2:1},
nh:{"^":"n:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eW()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.i(0)
throw x}},
m2:{"^":"mX;",
j0:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.j===$.Z){a.$0()
return}P.hg(null,null,this,a,-1)}catch(x){z=H.ab(x)
y=H.bF(x)
P.cX(null,null,this,z,H.e(y,"$isaD"))}},
j1:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.j===$.Z){a.$1(b)
return}P.hh(null,null,this,a,b,-1,c)}catch(x){z=H.ab(x)
y=H.bF(x)
P.cX(null,null,this,z,H.e(y,"$isaD"))}},
i2:function(a,b){return new P.m4(this,H.l(a,{func:1,ret:b}),b)},
co:function(a){return new P.m3(this,H.l(a,{func:1,ret:-1}))},
dV:function(a,b){return new P.m5(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
eI:function(a,b){H.l(a,{func:1,ret:b})
if($.Z===C.j)return a.$0()
return P.hg(null,null,this,a,b)},
d0:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.Z===C.j)return a.$1(b)
return P.hh(null,null,this,a,b,c,d)},
j_:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.Z===C.j)return a.$2(b,c)
return P.ni(null,null,this,a,b,c,d,e,f)},
iS:function(a,b,c,d){return H.l(a,{func:1,ret:b,args:[c,d]})}},
m4:{"^":"n;a,b,c",
$0:function(){return this.a.eI(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
m3:{"^":"n:3;a,b",
$0:function(){return this.a.j0(this.b)}},
m5:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.j1(this.b,H.A(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
iT:function(a,b,c,d,e){return new H.b9(0,0,[d,e])},
iU:function(a,b,c){H.c9(a)
return H.p(H.nx(a,new H.b9(0,0,[b,c])),"$iseK",[b,c],"$aseK")},
dm:function(a,b){return new H.b9(0,0,[a,b])},
cn:function(a,b,c,d){return new P.lQ(0,0,[d])},
iG:function(a,b,c){var z,y
if(P.dS(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$c4()
C.a.h(y,a)
try{P.ne(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.fb(b,H.hw(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
dg:function(a,b,c){var z,y,x
if(P.dS(a))return b+"..."+c
z=new P.ao(b)
y=$.$get$c4()
C.a.h(y,a)
try{x=z
x.a=P.fb(x.gaO(),a,", ")}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.a=y.gaO()+c
y=z.gaO()
return y.charCodeAt(0)==0?y:y},
dS:function(a){var z,y
for(z=0;y=$.$get$c4(),z<y.length;++z)if(a===y[z])return!0
return!1},
ne:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga0(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.C())return
w=H.k(z.gM(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.C()){if(x<=5)return
if(0>=b.length)return H.h(b,-1)
v=b.pop()
if(0>=b.length)return H.h(b,-1)
u=b.pop()}else{t=z.gM(z);++x
if(!z.C()){if(x<=4){C.a.h(b,H.k(t))
return}v=H.k(t)
if(0>=b.length)return H.h(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gM(z);++x
for(;z.C();t=s,s=r){r=z.gM(z);++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.k(t)
v=H.k(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
iV:function(a,b,c){var z=P.iT(null,null,null,b,c)
a.H(0,new P.iW(z,b,c))
return z},
eL:function(a,b){var z,y
z=P.cn(null,null,null,b)
for(y=J.b5(a);y.C();)z.h(0,H.A(y.gM(y),b))
return z},
dp:function(a){var z,y,x
z={}
if(P.dS(a))return"{...}"
y=new P.ao("")
try{C.a.h($.$get$c4(),a)
x=y
x.a=x.gaO()+"{"
z.a=!0
J.e4(a,new P.j_(z,y))
z=y
z.a=z.gaO()+"}"}finally{z=$.$get$c4()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.gaO()
return z.charCodeAt(0)==0?z:z},
lQ:{"^":"lK;a,0b,0c,0d,0e,0f,r,$ti",
ga0:function(a){var z=new P.fV(this,this.r,this.$ti)
z.c=this.e
return z},
gm:function(a){return this.a},
W:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.e(z[b],"$iscV")!=null}else{y=this.fu(b)
return y}},
fu:function(a){var z=this.d
if(z==null)return!1
return this.c5(this.dv(z,a),a)>=0},
h:function(a,b){var z,y
H.A(b,H.x(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dN()
this.b=z}return this.dj(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dN()
this.c=y}return this.dj(y,b)}else return this.fl(0,b)},
fl:function(a,b){var z,y,x
H.A(b,H.x(this,0))
z=this.d
if(z==null){z=P.dN()
this.d=z}y=this.dm(b)
x=z[y]
if(x==null)z[y]=[this.c1(b)]
else{if(this.c5(x,b)>=0)return!1
x.push(this.c1(b))}return!0},
P:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.dF(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dF(this.c,b)
else return this.hc(0,b)},
hc:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.dv(z,b)
x=this.c5(y,b)
if(x<0)return!1
this.dN(y.splice(x,1)[0])
return!0},
dj:function(a,b){H.A(b,H.x(this,0))
if(H.e(a[b],"$iscV")!=null)return!1
a[b]=this.c1(b)
return!0},
dF:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$iscV")
if(z==null)return!1
this.dN(z)
delete a[b]
return!0},
dk:function(){this.r=this.r+1&67108863},
c1:function(a){var z,y
z=new P.cV(H.A(a,H.x(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dk()
return z},
dN:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dk()},
dm:function(a){return J.cb(a)&0x3ffffff},
dv:function(a,b){return a[this.dm(b)]},
c5:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.V(a[y].a,b))return y
return-1},
t:{
dN:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cV:{"^":"b;a,0b,0c"},
fV:{"^":"b;a,b,0c,0d,$ti",
gM:function(a){return this.d},
C:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aJ(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.A(z.a,H.x(this,0))
this.c=z.b
return!0}}}},
lK:{"^":"jQ;"},
iW:{"^":"n:6;a,b,c",
$2:function(a,b){this.a.p(0,H.A(a,this.b),H.A(b,this.c))}},
cI:{"^":"lR;",$isi:1,$isd:1},
y:{"^":"b;$ti",
ga0:function(a){return new H.dn(a,this.gm(a),0,[H.b4(this,a,"y",0)])},
J:function(a,b){return this.j(a,b)},
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.b4(this,a,"y",0)]})
z=this.gm(a)
if(typeof z!=="number")return H.o(z)
y=0
for(;y<z;++y){b.$1(this.j(a,y))
if(z!==this.gm(a))throw H.a(P.aJ(a))}},
j6:function(a,b){var z,y,x
z=H.c([],[H.b4(this,a,"y",0)])
C.a.sm(z,this.gm(a))
y=0
while(!0){x=this.gm(a)
if(typeof x!=="number")return H.o(x)
if(!(y<x))break
C.a.p(z,y,this.j(a,y));++y}return z},
j5:function(a){return this.j6(a,!0)},
aG:function(a,b,c,d){var z
H.A(d,H.b4(this,a,"y",0))
P.aY(b,c,this.gm(a),null,null,null)
for(z=b;z<c;++z)this.p(a,z,d)},
i:function(a){return P.dg(a,"[","]")}},
eO:{"^":"aj;"},
j_:{"^":"n:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.k(a)
z.a=y+": "
z.a+=H.k(b)}},
aj:{"^":"b;$ti",
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.b4(this,a,"aj",0),H.b4(this,a,"aj",1)]})
for(z=J.b5(this.gaa(a));z.C();){y=z.gM(z)
b.$2(y,this.j(a,y))}},
gm:function(a){return J.ar(this.gaa(a))},
i:function(a){return P.dp(a)},
$isM:1},
mz:{"^":"b;$ti",
p:function(a,b,c){H.A(b,H.x(this,0))
H.A(c,H.x(this,1))
throw H.a(P.D("Cannot modify unmodifiable map"))}},
j0:{"^":"b;$ti",
j:function(a,b){return J.e3(this.a,b)},
p:function(a,b,c){J.d3(this.a,H.A(b,H.x(this,0)),H.A(c,H.x(this,1)))},
H:function(a,b){J.e4(this.a,H.l(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]}))},
gm:function(a){return J.ar(this.a)},
i:function(a){return J.am(this.a)},
$isM:1},
fD:{"^":"mA;a,$ti"},
jS:{"^":"b;$ti",
ac:function(a,b){var z
for(z=J.b5(H.p(b,"$isi",this.$ti,"$asi"));z.C();)this.h(0,z.gM(z))},
i:function(a){return P.dg(this,"{","}")},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.e7("index"))
if(b<0)H.t(P.a4(b,0,null,"index",null))
for(z=new P.fV(this,this.r,this.$ti),z.c=this.e,y=0;z.C();){x=z.d
if(b===y)return x;++y}throw H.a(P.W(b,this,"index",null,y))},
$isi:1},
jQ:{"^":"jS;"},
lR:{"^":"b+y;"},
mA:{"^":"j0+mz;$ti"}}],["","",,P,{"^":"",hS:{"^":"cd;a",
iD:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.aY(c,d,b.length,null,null,null)
z=$.$get$fP()
if(typeof d!=="number")return H.o(d)
y=c
x=y
w=null
v=-1
u=-1
t=0
for(;y<d;y=s){s=y+1
r=C.b.F(b,y)
if(r===37){q=s+2
if(q<=d){p=H.d0(C.b.F(b,s))
o=H.d0(C.b.F(b,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.h(z,n)
m=z[n]
if(m>=0){n=C.b.a_("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.ao("")
w.a+=C.b.v(b,x,y)
w.a+=H.bT(r)
x=s
continue}}throw H.a(P.a1("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.v(b,x,d)
k=l.length
if(v>=0)P.e9(b,u,d,v,t,k)
else{j=C.e.bn(k-1,4)+1
if(j===1)throw H.a(P.a1("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.b1(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.e9(b,u,d,v,t,i)
else{j=C.e.bn(i,4)
if(j===1)throw H.a(P.a1("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.b1(b,d,d,j===2?"==":"=")}return b},
$ascd:function(){return[[P.d,P.m],P.f]},
t:{
e9:function(a,b,c,d,e,f){if(C.e.bn(f,4)!==0)throw H.a(P.a1("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.a1("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.a1("Invalid base64 padding, more than two '=' characters",a,b))}}},hT:{"^":"b7;a",
$asb7:function(){return[[P.d,P.m],P.f]}},cd:{"^":"b;$ti"},b7:{"^":"k7;$ti"},ip:{"^":"cd;",
$ascd:function(){return[P.f,[P.d,P.m]]}},iD:{"^":"b;a,b,c,d,e",
i:function(a){return this.a}},iC:{"^":"b7;a",
fv:function(a,b,c){var z,y,x,w,v,u
for(z=this.a,y=z.e,x=z.d,z=z.c,w=b,v=null;w<c;++w){if(w>=a.length)return H.h(a,w)
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
default:u=null}if(u!=null){if(v==null)v=new P.ao("")
if(w>b)v.a+=C.b.v(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.hN(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asb7:function(){return[P.f,P.f]}},kW:{"^":"ip;a",
gic:function(){return C.M}},l2:{"^":"b7;",
ba:function(a,b,c){var z,y,x,w
z=a.length
P.aY(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.mV(0,0,x)
if(w.fC(a,b,z)!==z)w.dP(J.hH(a,z-1),0)
return C.a3.bW(x,0,w.b)},
cv:function(a){return this.ba(a,0,null)},
$asb7:function(){return[P.f,[P.d,P.m]]}},mV:{"^":"b;a,b,c",
dP:function(a,b){var z,y,x,w,v
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
fC:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.a_(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.F(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dP(w,C.b.F(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},kX:{"^":"b7;a",
ba:function(a,b,c){var z,y,x,w,v
H.p(a,"$isd",[P.m],"$asd")
z=P.kY(!1,a,b,c)
if(z!=null)return z
y=J.ar(a)
P.aY(b,c,y,null,null,null)
x=new P.ao("")
w=new P.mS(!1,x,!0,0,0,0)
w.ba(a,b,y)
w.ii(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cv:function(a){return this.ba(a,0,null)},
$asb7:function(){return[[P.d,P.m],P.f]},
t:{
kY:function(a,b,c,d){H.p(b,"$isd",[P.m],"$asd")
if(b instanceof Uint8Array)return P.kZ(!1,b,c,d)
return},
kZ:function(a,b,c,d){var z,y,x
z=$.$get$fI()
if(z==null)return
y=0===c
if(y&&!0)return P.dH(z,b)
x=b.length
d=P.aY(c,d,x,null,null,null)
if(y&&d===x)return P.dH(z,b)
return P.dH(z,b.subarray(c,d))},
dH:function(a,b){if(P.l0(b))return
return P.l1(a,b)},
l1:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.ab(y)}return},
l0:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
l_:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.ab(y)}return}}},mS:{"^":"b;a,b,c,d,e,f",
ii:function(a,b,c){var z
H.p(b,"$isd",[P.m],"$asd")
if(this.e>0){z=P.a1("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
ba:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.p(a,"$isd",[P.m],"$asd")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.mU(c)
v=new P.mT(this,b,c,a)
$label0$0:for(u=J.aT(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.bS()
if((r&192)!==128){q=P.a1("Bad UTF-8 encoding 0x"+C.e.bj(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.h(C.A,q)
if(z<=C.A[q]){q=P.a1("Overlong encoding of 0x"+C.e.bj(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.a1("Character outside valid Unicode range: 0x"+C.e.bj(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.bT(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.d8()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.O()
if(r<0){m=P.a1("Negative UTF-8 code unit: -0x"+C.e.bj(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.a1("Bad UTF-8 encoding 0x"+C.e.bj(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},mU:{"^":"n:45;a",
$2:function(a,b){var z,y,x,w
H.p(a,"$isd",[P.m],"$asd")
z=this.a
for(y=J.aT(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.bS()
if((w&127)!==w)return x-b}return z-b}},mT:{"^":"n:44;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.co(this.d,a,b)}}}],["","",,P,{"^":"",
c8:function(a,b,c){var z
H.l(b,{func:1,ret:P.m,args:[P.f]})
z=H.jz(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.a1(a,null,null))},
ir:function(a){var z=J.L(a)
if(!!z.$isn)return z.i(a)
return"Instance of '"+H.bo(a)+"'"},
iX:function(a,b,c,d){var z,y
H.A(b,d)
z=J.iI(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.p(z,y,b)
return H.p(z,"$isd",[d],"$asd")},
eM:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.ga0(a);x.C();)C.a.h(y,H.A(x.gM(x),c))
if(b)return y
return H.p(J.bL(y),"$isd",z,"$asd")},
co:function(a,b,c){var z,y
z=P.m
H.p(a,"$isi",[z],"$asi")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.p(a,"$isbk",[z],"$asbk")
y=a.length
c=P.aY(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.O()
z=c<y}else z=!0
return H.f1(z?C.a.bW(a,b,c):a)}if(!!J.L(a).$isdv)return H.jB(a,b,P.aY(b,c,a.length,null,null,null))
return P.ka(a,b,c)},
ka:function(a,b,c){var z,y,x,w
H.p(a,"$isi",[P.m],"$asi")
if(b<0)throw H.a(P.a4(b,0,J.ar(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a4(c,b,J.ar(a),null,null))
y=J.b5(a)
for(x=0;x<b;++x)if(!y.C())throw H.a(P.a4(b,0,x,null,null))
w=[]
if(z)for(;y.C();)w.push(y.gM(y))
else for(x=b;x<c;++x){if(!y.C())throw H.a(P.a4(c,b,x,null,null))
w.push(y.gM(y))}return H.f1(w)},
jH:function(a,b,c){return new H.iK(a,H.iL(a,!1,!0,!1))},
fF:function(){var z=H.jr()
if(z!=null)return P.kO(z,0,null)
throw H.a(P.D("'Uri.base' is not supported"))},
cF:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.am(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ir(a)},
v:function(a){return new P.fQ(a)},
iY:function(a,b,c,d){var z,y
H.l(b,{func:1,ret:d,args:[P.m]})
z=H.c([],[d])
C.a.sm(z,a)
for(y=0;y<a;++y)C.a.p(z,y,b.$1(y))
return z},
e0:function(a){H.nQ(a)},
kO:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.F(a,b+4)^58)*3|C.b.F(a,b)^100|C.b.F(a,b+1)^97|C.b.F(a,b+2)^116|C.b.F(a,b+3)^97)>>>0
if(y===0)return P.fE(b>0||c<c?C.b.v(a,b,c):a,5,null).geO()
else if(y===32)return P.fE(C.b.v(a,z,c),0,null).geO()}x=new Array(8)
x.fixed$length=Array
w=H.c(x,[P.m])
C.a.p(w,0,0)
x=b-1
C.a.p(w,1,x)
C.a.p(w,2,x)
C.a.p(w,7,x)
C.a.p(w,3,b)
C.a.p(w,4,b)
C.a.p(w,5,c)
C.a.p(w,6,c)
if(P.hi(a,b,c,0,w)>=14)C.a.p(w,7,c)
v=w[1]
if(typeof v!=="number")return v.j8()
if(v>=b)if(P.hi(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.I()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.O()
if(typeof r!=="number")return H.o(r)
if(q<r)r=q
if(typeof s!=="number")return s.O()
if(s<u||s<=v)s=r
if(typeof t!=="number")return t.O()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.O()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.al(a,"..",s)))n=r>s+2&&C.b.al(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.al(a,"file",b)){if(u<=b){if(!C.b.al(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.b.v(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.b.b1(a,s,r,"/");++r;++q;++c}else{a=C.b.v(a,b,s)+"/"+C.b.v(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.al(a,"http",b)){if(x&&t+3===s&&C.b.al(a,"80",t+1))if(b===0&&!0){a=C.b.b1(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.b.v(a,b,t)+C.b.v(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.b.al(a,"https",b)){if(x&&t+4===s&&C.b.al(a,"443",t+1))if(b===0&&!0){a=C.b.b1(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.b.v(a,b,t)+C.b.v(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.b.v(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.mb(a,v,u,t,s,r,q,o)}return P.mB(a,b,c,v,u,t,s,r,q,o)},
fH:function(a,b){var z=P.f
return C.a.ij(H.c(a.split("&"),[z]),P.dm(z,z),new P.kR(b),[P.M,P.f,P.f])},
kM:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.kN(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.a_(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.c8(C.b.v(a,v,w),null,null)
if(typeof s!=="number")return s.d8()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.h(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.c8(C.b.v(a,v,c),null,null)
if(typeof s!=="number")return s.d8()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.h(y,u)
y[u]=s
return y},
fG:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.kP(a)
y=new P.kQ(z,a)
if(a.length<2)z.$1("address is too short")
x=H.c([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.a_(a,w)
if(s===58){if(w===b){++w
if(C.b.a_(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gax(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.kM(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.h(o,l)
o[l]=0
i=l+1
if(i>=n)return H.h(o,i)
o[i]=0
l+=2}else{i=C.e.aT(k,8)
if(l<0||l>=n)return H.h(o,l)
o[l]=i
i=l+1
if(i>=n)return H.h(o,i)
o[i]=k&255
l+=2}}return o},
n8:function(){var z,y,x,w,v
z=P.iY(22,new P.na(),!0,P.S)
y=new P.n9(z)
x=new P.nb()
w=new P.nc()
v=H.e(y.$2(0,225),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(14,225),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(15,225),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(1,225),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(2,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(3,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(4,229),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(5,229),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(6,231),"$isS")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(7,231),"$isS")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.e(y.$2(8,8),"$isS"),"]",5)
v=H.e(y.$2(9,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(16,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(17,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(10,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(18,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(19,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(11,235),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(12,236),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.e(y.$2(13,237),"$isS")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.e(y.$2(20,245),"$isS"),"az",21)
v=H.e(y.$2(21,245),"$isS")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
hi:function(a,b,c,d,e){var z,y,x,w,v
H.p(e,"$isd",[P.m],"$asd")
z=$.$get$hj()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.h(z,d)
x=z[d]
w=C.b.F(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.h(x,w)
v=x[w]
d=v&31
C.a.p(e,v>>>5,y)}return d},
T:{"^":"b;"},
"+bool":0,
au:{"^":"b;a,b",
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.au))return!1
return this.a===b.a&&this.b===b.b},
gX:function(a){var z=this.a
return(z^C.e.aT(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.ib(H.jy(this))
y=P.ce(H.jw(this))
x=P.ce(H.js(this))
w=P.ce(H.jt(this))
v=P.ce(H.jv(this))
u=P.ce(H.jx(this))
t=P.ic(H.ju(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
t:{
ib:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
ic:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ce:function(a){if(a>=10)return""+a
return"0"+a}}},
B:{"^":"a5;"},
"+double":0,
bh:{"^":"b;a",
k:function(a,b){return new P.bh(C.e.a1(this.a*b))},
O:function(a,b){return C.e.O(this.a,H.e(b,"$isbh").a)},
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.bh))return!1
return this.a===b.a},
gX:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.ik()
y=this.a
if(y<0)return"-"+new P.bh(0-y).i(0)
x=z.$1(C.e.a9(y,6e7)%60)
w=z.$1(C.e.a9(y,1e6)%60)
v=new P.ij().$1(y%1e6)
return""+C.e.a9(y,36e8)+":"+H.k(x)+":"+H.k(w)+"."+H.k(v)},
t:{
eu:function(a,b,c,d,e,f){return new P.bh(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
ij:{"^":"n:27;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
ik:{"^":"n:27;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a8:{"^":"b;"},
eW:{"^":"a8;",
i:function(a){return"Throw of null."}},
aG:{"^":"a8;a,b,c,d",
gc4:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc3:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.k(z)
w=this.gc4()+y+x
if(!this.a)return w
v=this.gc3()
u=P.cF(this.b)
return w+v+": "+H.k(u)},
t:{
cc:function(a){return new P.aG(!1,null,null,a)},
cy:function(a,b,c){return new P.aG(!0,a,b,c)},
e7:function(a){return new P.aG(!1,null,a,"Must not be null")}}},
cL:{"^":"aG;e,f,a,b,c,d",
gc4:function(){return"RangeError"},
gc3:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.k(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.k(z)
else if(x>z)y=": Not in range "+H.k(z)+".."+H.k(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.k(z)}return y},
t:{
cM:function(a,b,c){return new P.cL(null,null,!0,a,b,"Value not in range")},
a4:function(a,b,c,d,e){return new P.cL(b,c,!0,a,d,"Invalid value")},
aY:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.o(a)
if(0<=a){if(typeof c!=="number")return H.o(c)
z=a>c}else z=!0
if(z)throw H.a(P.a4(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
z=b>c}else z=!0
if(z)throw H.a(P.a4(b,a,c,"end",f))
return b}return c}}},
iF:{"^":"aG;e,m:f>,a,b,c,d",
gc4:function(){return"RangeError"},
gc3:function(){if(J.hD(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.k(z)},
t:{
W:function(a,b,c,d,e){var z=H.F(e!=null?e:J.ar(b))
return new P.iF(b,z,!0,a,c,"Index out of range")}}},
kK:{"^":"a8;a",
i:function(a){return"Unsupported operation: "+this.a},
t:{
D:function(a){return new P.kK(a)}}},
kH:{"^":"a8;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
t:{
cq:function(a){return new P.kH(a)}}},
dy:{"^":"a8;a",
i:function(a){return"Bad state: "+this.a},
t:{
f9:function(a){return new P.dy(a)}}},
i2:{"^":"a8;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.k(P.cF(z))+"."},
t:{
aJ:function(a){return new P.i2(a)}}},
jm:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa8:1},
f7:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa8:1},
i9:{"^":"a8;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fQ:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
iy:{"^":"b;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.k(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.v(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.F(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.b.a_(w,s)
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
m=""}l=C.b.v(w,o,p)
return y+n+l+m+"\n"+C.b.k(" ",x-o+n.length)+"^\n"},
t:{
a1:function(a,b,c){return new P.iy(a,b,c)}}},
cg:{"^":"b;"},
m:{"^":"a5;"},
"+int":0,
i:{"^":"b;$ti",
d3:["f1",function(a,b){var z=H.ag(this,"i",0)
return new H.dK(this,H.l(b,{func:1,ret:P.T,args:[z]}),[z])}],
gm:function(a){var z,y
z=this.ga0(this)
for(y=0;z.C();)++y
return y},
gaL:function(a){var z,y
z=this.ga0(this)
if(!z.C())throw H.a(H.dh())
y=z.gM(z)
if(z.C())throw H.a(H.iH())
return y},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.e7("index"))
if(b<0)H.t(P.a4(b,0,null,"index",null))
for(z=this.ga0(this),y=0;z.C();){x=z.gM(z)
if(b===y)return x;++y}throw H.a(P.W(b,this,"index",null,y))},
i:function(a){return P.iG(this,"(",")")}},
di:{"^":"b;$ti"},
d:{"^":"b;$ti",$isi:1},
"+List":0,
M:{"^":"b;$ti"},
K:{"^":"b;",
gX:function(a){return P.b.prototype.gX.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a5:{"^":"b;"},
"+num":0,
b:{"^":";",
w:function(a,b){return this===b},
gX:function(a){return H.bS(this)},
i:function(a){return"Instance of '"+H.bo(this)+"'"},
toString:function(){return this.i(this)}},
aD:{"^":"b;"},
f:{"^":"b;",$iseX:1},
"+String":0,
ao:{"^":"b;aO:a<",
gm:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isoP:1,
t:{
fb:function(a,b,c){var z=J.b5(b)
if(!z.C())return a
if(c.length===0){do a+=H.k(z.gM(z))
while(z.C())}else{a+=H.k(z.gM(z))
for(;z.C();)a=a+c+H.k(z.gM(z))}return a}}},
kR:{"^":"n:43;a",
$2:function(a,b){var z,y,x,w
z=P.f
H.p(a,"$isM",[z,z],"$asM")
H.H(b)
y=J.aT(b).ex(b,"=")
if(y===-1){if(b!=="")J.d3(a,P.dP(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.v(b,0,y)
w=C.b.at(b,y+1)
z=this.a
J.d3(a,P.dP(x,0,x.length,z,!0),P.dP(w,0,w.length,z,!0))}return a}},
kN:{"^":"n:42;a",
$2:function(a,b){throw H.a(P.a1("Illegal IPv4 address, "+a,this.a,b))}},
kP:{"^":"n:40;a",
$2:function(a,b){throw H.a(P.a1("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
kQ:{"^":"n:37;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.c8(C.b.v(this.b,a,b),null,16)
if(typeof z!=="number")return z.O()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cW:{"^":"b;bU:a<,b,c,d,eF:e>,f,r,0x,0y,0z,0Q,0ch",
geP:function(){return this.b},
gcJ:function(a){var z=this.c
if(z==null)return""
if(C.b.a7(z,"["))return C.b.v(z,1,z.length-1)
return z},
gbN:function(a){var z=this.d
if(z==null)return P.h7(this.a)
return z},
gcV:function(a){var z=this.f
return z==null?"":z},
geq:function(){var z=this.r
return z==null?"":z},
d_:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.p(h,"$isM",[P.f,null],"$asM")
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
g=P.dO(g,0,0,h)
return new P.cW(i,j,c,f,d,g,this.r)},
eH:function(a,b){return this.d_(a,null,null,null,null,null,null,b,null,null)},
gcW:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.f
y=new P.fD(P.fH(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
ger:function(){return this.c!=null},
gev:function(){return this.f!=null},
ges:function(){return this.r!=null},
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
w:function(a,b){var z,y,x
if(b==null)return!1
if(this===b)return!0
z=J.L(b)
if(!!z.$isdG){y=this.a
x=b.gbU()
if(y==null?x==null:y===x)if(this.c!=null===b.ger()){y=this.b
x=b.geP()
if(y==null?x==null:y===x){y=this.gcJ(this)
x=z.gcJ(b)
if(y==null?x==null:y===x){y=this.gbN(this)
x=z.gbN(b)
if(y==null?x==null:y===x)if(this.e===z.geF(b)){y=this.f
x=y==null
if(!x===b.gev()){if(x)y=""
if(y===z.gcV(b)){z=this.r
y=z==null
if(!y===b.ges()){if(y)z=""
z=z===b.geq()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gX:function(a){var z=this.z
if(z==null){z=C.b.gX(this.i(0))
this.z=z}return z},
$isdG:1,
t:{
ct:function(a,b,c,d){var z,y,x,w,v,u
H.p(a,"$isd",[P.m],"$asd")
if(c===C.k){z=$.$get$hc().b
if(typeof b!=="string")H.t(H.af(b))
z=z.test(b)}else z=!1
if(z)return b
H.A(b,H.ag(c,"cd",0))
y=c.gic().cv(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.h(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.bT(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
mB:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.mM(a,b,d)
else{if(d===b)P.c0(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.mN(a,z,e-1):""
x=P.mG(a,e,f,!1)
if(typeof f!=="number")return f.I()
w=f+1
if(typeof g!=="number")return H.o(g)
v=w<g?P.mJ(P.c8(C.b.v(a,w,g),new P.mC(a,f),null),j):null}else{y=""
x=null
v=null}u=P.mH(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.O()
t=h<i?P.dO(a,h+1,i,null):null
return new P.cW(j,y,x,v,u,t,i<c?P.mF(a,i+1,c):null)},
h7:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
c0:function(a,b,c){throw H.a(P.a1(c,a,b))},
mJ:function(a,b){if(a!=null&&a===P.h7(b))return
return a},
mG:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.a_(a,b)===91){if(typeof c!=="number")return c.K()
z=c-1
if(C.b.a_(a,z)!==93)P.c0(a,b,"Missing end `]` to match `[` in host")
P.fG(a,b+1,z)
return C.b.v(a,b,c).toLowerCase()}if(typeof c!=="number")return H.o(c)
y=b
for(;y<c;++y)if(C.b.a_(a,y)===58){P.fG(a,b,c)
return"["+a+"]"}return P.mP(a,b,c)},
mP:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.o(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.a_(a,z)
if(v===37){u=P.he(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.ao("")
s=C.b.v(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.v(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.h(C.D,t)
t=(C.D[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.ao("")
if(y<z){x.a+=C.b.v(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.h(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.c0(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.a_(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.ao("")
s=C.b.v(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.h8(v)
z+=q
y=z}}}}if(x==null)return C.b.v(a,b,c)
if(y<c){s=C.b.v(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
mM:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.ha(C.b.F(a,b)))P.c0(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.F(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.h(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.c0(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.v(a,b,c)
return P.mD(y?a.toLowerCase():a)},
mD:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mN:function(a,b,c){return P.c1(a,b,c,C.a0)},
mH:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.c1(a,b,c,C.E):C.x.jN(d,new P.mI(),P.f).n(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a7(w,"/"))w="/"+w
return P.mO(w,e,f)},
mO:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a7(a,"/"))return P.mQ(a,!z||c)
return P.mR(a)},
dO:function(a,b,c,d){var z,y
z={}
H.p(d,"$isM",[P.f,null],"$asM")
if(a!=null){if(d!=null)throw H.a(P.cc("Both query and queryParameters specified"))
return P.c1(a,b,c,C.n)}if(d==null)return
y=new P.ao("")
z.a=""
d.H(0,new P.mK(new P.mL(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
mF:function(a,b,c){return P.c1(a,b,c,C.n)},
he:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.a_(a,b+1)
x=C.b.a_(a,z)
w=H.d0(y)
v=H.d0(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.e.aT(u,4)
if(z>=8)return H.h(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.bT(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.v(a,b,b+3).toUpperCase()
return},
h8:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.c(z,[P.m])
C.a.p(y,0,37)
C.a.p(y,1,C.b.F("0123456789ABCDEF",a>>>4))
C.a.p(y,2,C.b.F("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.c(z,[P.m])
for(v=0;--w,w>=0;x=128){u=C.e.hu(a,6*w)&63|x
C.a.p(y,v,37)
C.a.p(y,v+1,C.b.F("0123456789ABCDEF",u>>>4))
C.a.p(y,v+2,C.b.F("0123456789ABCDEF",u&15))
v+=3}}return P.co(y,0,null)},
c1:function(a,b,c,d){var z=P.hd(a,b,c,H.p(d,"$isd",[P.m],"$asd"),!1)
return z==null?C.b.v(a,b,c):z},
hd:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.p(d,"$isd",[P.m],"$asd")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.O()
if(typeof c!=="number")return H.o(c)
if(!(y<c))break
c$0:{v=C.b.a_(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.h(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.he(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.h(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.c0(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.a_(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.h8(v)}}if(w==null)w=new P.ao("")
w.a+=C.b.v(a,x,y)
w.a+=H.k(t)
if(typeof s!=="number")return H.o(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.O()
if(x<c)w.a+=C.b.v(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
hb:function(a){if(C.b.a7(a,"."))return!0
return C.b.ex(a,"/.")!==-1},
mR:function(a){var z,y,x,w,v,u,t
if(!P.hb(a))return a
z=H.c([],[P.f])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.V(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.h(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.n(z,"/")},
mQ:function(a,b){var z,y,x,w,v,u
if(!P.hb(a))return!b?P.h9(a):a
z=H.c([],[P.f])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gax(z)!==".."){if(0>=z.length)return H.h(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.h(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gax(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.h(z,0)
C.a.p(z,0,P.h9(z[0]))}return C.a.n(z,"/")},
h9:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.ha(J.hE(a,0)))for(y=1;y<z;++y){x=C.b.F(a,y)
if(x===58)return C.b.v(a,0,y)+"%3A"+C.b.at(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.h(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
mE:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.F(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.cc("Invalid URL encoding"))}}return z},
dP:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.c7(a)
x=b
while(!0){if(!(x<c)){z=!0
break}w=y.F(a,x)
if(w<=127)if(w!==37)v=w===43
else v=!0
else v=!0
if(v){z=!1
break}++x}if(z){if(C.k!==d)v=!1
else v=!0
if(v)return y.v(a,b,c)
else u=new H.u(y.v(a,b,c))}else{u=H.c([],[P.m])
for(x=b;x<c;++x){w=y.F(a,x)
if(w>127)throw H.a(P.cc("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.cc("Truncated URI"))
C.a.h(u,P.mE(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.p(u,"$isd",[P.m],"$asd")
return new P.kX(!1).cv(u)},
ha:function(a){var z=a|32
return 97<=z&&z<=122}}},
mC:{"^":"n:18;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.I()
throw H.a(P.a1("Invalid port",this.a,z+1))}},
mI:{"^":"n:19;",
$1:function(a){return P.ct(C.a1,a,C.k,!1)}},
mL:{"^":"n:29;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.k(P.ct(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.k(P.ct(C.p,b,C.k,!0))}}},
mK:{"^":"n:36;a",
$2:function(a,b){var z,y
H.H(a)
if(b==null||typeof b==="string")this.a.$2(a,H.H(b))
else for(z=J.b5(H.hw(b,"$isi")),y=this.a;z.C();)y.$2(a,H.H(z.gM(z)))}},
kL:{"^":"b;a,b,c",
geO:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.h(z,0)
y=this.a
z=z[0]+1
x=C.b.ey(y,"?",z)
w=y.length
if(x>=0){v=P.c1(y,x+1,w,C.n)
w=x}else v=null
z=new P.lp(this,"data",null,null,null,P.c1(y,z,w,C.E),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.h(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
t:{
fE:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.c([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.F(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.a1("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.a1("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.F(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gax(z)
if(v!==44||x!==t+7||!C.b.al(a,"base64",t+1))throw H.a(P.a1("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.J.iD(0,a,s,y)
else{r=P.hd(a,s,y,C.n,!0)
if(r!=null)a=C.b.b1(a,s,y,r)}return new P.kL(a,z,c)}}},
na:{"^":"n:34;",
$1:function(a){return new Uint8Array(96)}},
n9:{"^":"n:33;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.h(z,a)
z=z[a]
J.hI(z,0,96,b)
return z}},
nb:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.F(b,y)^96
if(x>=a.length)return H.h(a,x)
a[x]=c}}},
nc:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=C.b.F(b,0),y=C.b.F(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.h(a,x)
a[x]=c}}},
mb:{"^":"b;a,b,c,d,e,f,r,x,0y",
ger:function(){return this.c>0},
geu:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.I()
y=this.e
if(typeof y!=="number")return H.o(y)
y=z+1<y
z=y}else z=!1
return z},
gev:function(){var z=this.f
if(typeof z!=="number")return z.O()
return z<this.r},
ges:function(){return this.r<this.a.length},
gdz:function(){return this.b===4&&C.b.a7(this.a,"http")},
gdA:function(){return this.b===5&&C.b.a7(this.a,"https")},
gbU:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdz()){this.x="http"
z="http"}else if(this.gdA()){this.x="https"
z="https"}else if(z===4&&C.b.a7(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a7(this.a,"package")){this.x="package"
z="package"}else{z=C.b.v(this.a,0,z)
this.x=z}return z},
geP:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.v(this.a,y,z-1):""},
gcJ:function(a){var z=this.c
return z>0?C.b.v(this.a,z,this.d):""},
gbN:function(a){var z
if(this.geu()){z=this.d
if(typeof z!=="number")return z.I()
return P.c8(C.b.v(this.a,z+1,this.e),null,null)}if(this.gdz())return 80
if(this.gdA())return 443
return 0},
geF:function(a){return C.b.v(this.a,this.e,this.f)},
gcV:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.O()
return z<y?C.b.v(this.a,z+1,y):""},
geq:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.at(y,z+1):""},
gcW:function(){var z=this.f
if(typeof z!=="number")return z.O()
if(z>=this.r)return C.a2
z=P.f
return new P.fD(P.fH(this.gcV(this),C.k),[z,z])},
d_:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.p(h,"$isM",[P.f,null],"$asM")
i=this.gbU()
z=i==="file"
y=this.c
j=y>0?C.b.v(this.a,this.b+3,y):""
f=this.geu()?this.gbN(this):null
y=this.c
if(y>0)c=C.b.v(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.v(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a7(d,"/"))d="/"+d
g=P.dO(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.at(y,x+1)
return new P.cW(i,j,c,f,d,g,b)},
eH:function(a,b){return this.d_(a,null,null,null,null,null,null,b,null,null)},
gX:function(a){var z=this.y
if(z==null){z=C.b.gX(this.a)
this.y=z}return z},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.L(b)
if(!!z.$isdG)return this.a===z.i(b)
return!1},
i:function(a){return this.a},
$isdG:1},
lp:{"^":"cW;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
e6:function(a){var z=document.createElement("a")
return z},
da:function(a,b){var z=document.createElement("canvas")
return z},
il:function(a,b,c){var z,y
z=document.body
y=(z&&C.w).aq(z,a,b,c)
y.toString
z=W.G
z=new H.dK(new W.az(y),H.l(new W.im(),{func:1,ret:P.T,args:[z]}),[z])
return H.e(z.gaL(z),"$isR")},
io:function(a){H.e(a,"$isah")
return"wheel"},
bJ:function(a){var z,y,x
z="element tag unavailable"
try{y=J.hL(a)
if(typeof y==="string")z=a.tagName}catch(x){H.ab(x)}return z},
df:function(a,b,c){var z=document.createElement("img")
if(b!=null)z.src=b
return z},
cT:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fU:function(a,b,c,d){var z,y
z=W.cT(W.cT(W.cT(W.cT(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
hm:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.Z
if(z===C.j)return a
return z.dV(a,b)},
ai:{"^":"R;","%":"HTMLAudioElement|HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
o0:{"^":"r;0m:length=","%":"AccessibleNodeList"},
o1:{"^":"ai;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
o2:{"^":"ai;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
ea:{"^":"ai;",$isea:1,"%":"HTMLBaseElement"},
d6:{"^":"r;",$isd6:1,"%":";Blob"},
cz:{"^":"ai;",$iscz:1,"%":"HTMLBodyElement"},
d9:{"^":"ai;",
bT:function(a,b,c){if(c!=null)return a.getContext(b,P.no(c,null))
return a.getContext(b)},
eS:function(a,b){return this.bT(a,b,null)},
$isd9:1,
"%":"HTMLCanvasElement"},
ef:{"^":"r;",$isef:1,"%":"CanvasRenderingContext2D"},
o8:{"^":"G;0m:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
oa:{"^":"i8;0m:length=","%":"CSSPerspective"},
bf:{"^":"r;",$isbf:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
ob:{"^":"lo;0m:length=",
eT:function(a,b){var z=a.getPropertyValue(this.fp(a,b))
return z==null?"":z},
fp:function(a,b){var z,y
z=$.$get$el()
y=z[b]
if(typeof y==="string")return y
y=this.hv(a,b)
z[b]=y
return y},
hv:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.id()+b
if(z in a)return z
return b},
gcp:function(a){return a.bottom},
gaf:function(a){return a.height},
gaZ:function(a){return a.left},
gbg:function(a){return a.right},
gbk:function(a){return a.top},
gak:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
i7:{"^":"b;",
gaZ:function(a){return this.eT(a,"left")}},
em:{"^":"r;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
i8:{"^":"r;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
oc:{"^":"em;0m:length=","%":"CSSTransformValue"},
od:{"^":"em;0m:length=","%":"CSSUnparsedValue"},
oe:{"^":"r;0m:length=","%":"DataTransferItemList"},
bg:{"^":"ai;",$isbg:1,"%":"HTMLDivElement"},
of:{"^":"r;",
i:function(a){return String(a)},
"%":"DOMException"},
og:{"^":"lr;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.p(c,"$isaa",[P.a5],"$asaa")
throw H.a(P.D("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[[P.aa,P.a5]]},
$asy:function(){return[[P.aa,P.a5]]},
$isi:1,
$asi:function(){return[[P.aa,P.a5]]},
$isd:1,
$asd:function(){return[[P.aa,P.a5]]},
$asE:function(){return[[P.aa,P.a5]]},
"%":"ClientRectList|DOMRectList"},
ii:{"^":"r;",
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gak(a))+" x "+H.k(this.gaf(a))},
w:function(a,b){var z
if(b==null)return!1
z=H.c5(b,"$isaa",[P.a5],"$asaa")
if(!z)return!1
z=J.aU(b)
return a.left===z.gaZ(b)&&a.top===z.gbk(b)&&this.gak(a)===z.gak(b)&&this.gaf(a)===z.gaf(b)},
gX:function(a){return W.fU(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gak(a)&0x1FFFFFFF,this.gaf(a)&0x1FFFFFFF)},
gcp:function(a){return a.bottom},
gaf:function(a){return a.height},
gaZ:function(a){return a.left},
gbg:function(a){return a.right},
gbk:function(a){return a.top},
gak:function(a){return a.width},
$isaa:1,
$asaa:function(){return[P.a5]},
"%":";DOMRectReadOnly"},
oh:{"^":"lt;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.H(c)
throw H.a(P.D("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[P.f]},
$asy:function(){return[P.f]},
$isi:1,
$asi:function(){return[P.f]},
$isd:1,
$asd:function(){return[P.f]},
$asE:function(){return[P.f]},
"%":"DOMStringList"},
oi:{"^":"r;0m:length=","%":"DOMTokenList"},
ln:{"^":"cI;dt:a<,b",
gm:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return H.e(z[b],"$isR")},
p:function(a,b,c){var z
H.F(b)
H.e(c,"$isR")
z=this.b
if(b>>>0!==b||b>=z.length)return H.h(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga0:function(a){var z=this.j5(this)
return new J.aB(z,z.length,0,[H.x(z,0)])},
aG:function(a,b,c,d){throw H.a(P.cq(null))},
$asy:function(){return[W.R]},
$asi:function(){return[W.R]},
$asd:function(){return[W.R]}},
R:{"^":"G;0j2:tagName=",
gi1:function(a){return new W.lu(a)},
gcu:function(a){return new W.ln(a,a.children)},
gdY:function(a){return P.jD(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a5)},
i:function(a){return a.localName},
aq:["bX",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.ex
if(z==null){z=H.c([],[W.aO])
y=new W.eU(z)
C.a.h(z,W.fS(null))
C.a.h(z,W.h2())
$.ex=y
d=y}else d=z
z=$.ew
if(z==null){z=new W.hf(d)
$.ew=z
c=z}else{z.a=d
c=z}}if($.aV==null){z=document
y=z.implementation.createHTMLDocument("")
$.aV=y
$.dd=y.createRange()
y=$.aV
y.toString
y=y.createElement("base")
H.e(y,"$isea")
y.href=z.baseURI
$.aV.head.appendChild(y)}z=$.aV
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.e(y,"$iscz")}z=$.aV
if(!!this.$iscz)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
$.aV.body.appendChild(x)}if("createContextualFragment" in window.Range.prototype&&!C.a.W(C.a_,a.tagName)){$.dd.selectNodeContents(x)
w=$.dd.createContextualFragment(b)}else{x.innerHTML=b
w=$.aV.createDocumentFragment()
for(;z=x.firstChild,z!=null;)w.appendChild(z)}z=$.aV.body
if(x==null?z!=null:x!==z)J.e5(x)
c.d9(w)
document.adoptNode(w)
return w},function(a,b,c){return this.aq(a,b,c,null)},"i7",null,null,"gjL",5,5,null],
eX:function(a,b,c,d){a.textContent=null
a.appendChild(this.aq(a,b,c,d))},
eW:function(a,b){return this.eX(a,b,null,null)},
$isR:1,
"%":";Element"},
im:{"^":"n:24;",
$1:function(a){return!!J.L(H.e(a,"$isG")).$isR}},
ac:{"^":"r;",$isac:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
ah:{"^":"r;",
dS:["f_",function(a,b,c,d){H.l(c,{func:1,args:[W.ac]})
if(c!=null)this.fm(a,b,c,!1)}],
fm:function(a,b,c,d){return a.addEventListener(b,H.bD(H.l(c,{func:1,args:[W.ac]}),1),!1)},
$isah:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;h_|h0|h3|h4"},
b8:{"^":"d6;",$isb8:1,"%":"File"},
ez:{"^":"lz;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isb8")
throw H.a(P.D("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.b8]},
$asy:function(){return[W.b8]},
$isi:1,
$asi:function(){return[W.b8]},
$isd:1,
$asd:function(){return[W.b8]},
$isez:1,
$asE:function(){return[W.b8]},
"%":"FileList"},
oj:{"^":"ah;0m:length=","%":"FileWriter"},
ok:{"^":"ai;0m:length=","%":"HTMLFormElement"},
bj:{"^":"r;",$isbj:1,"%":"Gamepad"},
ol:{"^":"r;0m:length=","%":"History"},
om:{"^":"lM;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isG")
throw H.a(P.D("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.G]},
$asy:function(){return[W.G]},
$isi:1,
$asi:function(){return[W.G]},
$isd:1,
$asd:function(){return[W.G]},
$asE:function(){return[W.G]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
ch:{"^":"r;0e0:data=",$isch:1,"%":"ImageData"},
de:{"^":"ai;",$isde:1,"%":"HTMLImageElement"},
bM:{"^":"dE;",$isbM:1,"%":"KeyboardEvent"},
oq:{"^":"r;",
i:function(a){return String(a)},
"%":"Location"},
or:{"^":"r;0m:length=","%":"MediaList"},
os:{"^":"ah;",
dS:function(a,b,c,d){H.l(c,{func:1,args:[W.ac]})
if(b==="message")a.start()
this.f_(a,b,c,!1)},
"%":"MessagePort"},
ot:{"^":"lS;",
j:function(a,b){return P.b3(a.get(H.H(b)))},
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b3(y.value[1]))}},
gaa:function(a){var z=H.c([],[P.f])
this.H(a,new W.jc(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.D("Not supported"))},
$asaj:function(){return[P.f,null]},
$isM:1,
$asM:function(){return[P.f,null]},
"%":"MIDIInputMap"},
jc:{"^":"n:9;a",
$2:function(a,b){return C.a.h(this.a,a)}},
ou:{"^":"lT;",
j:function(a,b){return P.b3(a.get(H.H(b)))},
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b3(y.value[1]))}},
gaa:function(a){var z=H.c([],[P.f])
this.H(a,new W.jd(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.D("Not supported"))},
$asaj:function(){return[P.f,null]},
$isM:1,
$asM:function(){return[P.f,null]},
"%":"MIDIOutputMap"},
jd:{"^":"n:9;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bm:{"^":"r;",$isbm:1,"%":"MimeType"},
ov:{"^":"lV;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbm")
throw H.a(P.D("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bm]},
$asy:function(){return[W.bm]},
$isi:1,
$asi:function(){return[W.bm]},
$isd:1,
$asd:function(){return[W.bm]},
$asE:function(){return[W.bm]},
"%":"MimeTypeArray"},
ad:{"^":"dE;",$isad:1,"%":"PointerEvent;DragEvent|MouseEvent"},
az:{"^":"cI;a",
gaL:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.f9("No elements"))
if(y>1)throw H.a(P.f9("More than one element"))
return z.firstChild},
ac:function(a,b){var z,y,x,w
H.p(b,"$isi",[W.G],"$asi")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
p:function(a,b,c){var z,y
H.F(b)
H.e(c,"$isG")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.h(y,b)
z.replaceChild(c,y[b])},
ga0:function(a){var z=this.a.childNodes
return new W.eA(z,z.length,-1,[H.b4(C.a4,z,"E",0)])},
aG:function(a,b,c,d){throw H.a(P.D("Cannot fillRange on Node list"))},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
$asy:function(){return[W.G]},
$asi:function(){return[W.G]},
$asd:function(){return[W.G]}},
G:{"^":"ah;0cT:previousSibling=",
iT:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
iW:function(a,b){var z,y
try{z=a.parentNode
J.hF(z,b,a)}catch(y){H.ab(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.f0(a):z},
hg:function(a,b,c){return a.replaceChild(b,c)},
$isG:1,
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
oC:{"^":"r;",
iQ:[function(a){return a.previousNode()},"$0","gcT",1,0,26],
"%":"NodeIterator"},
jh:{"^":"lX;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isG")
throw H.a(P.D("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.G]},
$asy:function(){return[W.G]},
$isi:1,
$asi:function(){return[W.G]},
$isd:1,
$asd:function(){return[W.G]},
$asE:function(){return[W.G]},
"%":"NodeList|RadioNodeList"},
bn:{"^":"r;0m:length=",$isbn:1,"%":"Plugin"},
oG:{"^":"m0;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbn")
throw H.a(P.D("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bn]},
$asy:function(){return[W.bn]},
$isi:1,
$asi:function(){return[W.bn]},
$isd:1,
$asd:function(){return[W.bn]},
$asE:function(){return[W.bn]},
"%":"PluginArray"},
oI:{"^":"m6;",
j:function(a,b){return P.b3(a.get(H.H(b)))},
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b3(y.value[1]))}},
gaa:function(a){var z=H.c([],[P.f])
this.H(a,new W.jN(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.D("Not supported"))},
$asaj:function(){return[P.f,null]},
$isM:1,
$asM:function(){return[P.f,null]},
"%":"RTCStatsReport"},
jN:{"^":"n:9;a",
$2:function(a,b){return C.a.h(this.a,a)}},
oJ:{"^":"ai;0m:length=","%":"HTMLSelectElement"},
bp:{"^":"ah;",$isbp:1,"%":"SourceBuffer"},
oK:{"^":"h0;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbp")
throw H.a(P.D("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bp]},
$asy:function(){return[W.bp]},
$isi:1,
$asi:function(){return[W.bp]},
$isd:1,
$asd:function(){return[W.bp]},
$asE:function(){return[W.bp]},
"%":"SourceBufferList"},
bq:{"^":"r;",$isbq:1,"%":"SpeechGrammar"},
oL:{"^":"md;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbq")
throw H.a(P.D("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bq]},
$asy:function(){return[W.bq]},
$isi:1,
$asi:function(){return[W.bq]},
$isd:1,
$asd:function(){return[W.bq]},
$asE:function(){return[W.bq]},
"%":"SpeechGrammarList"},
br:{"^":"r;0m:length=",$isbr:1,"%":"SpeechRecognitionResult"},
oN:{"^":"mg;",
j:function(a,b){return a.getItem(H.H(b))},
p:function(a,b,c){a.setItem(b,H.H(c))},
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.f,P.f]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gaa:function(a){var z=H.c([],[P.f])
this.H(a,new W.k6(z))
return z},
gm:function(a){return a.length},
$asaj:function(){return[P.f,P.f]},
$isM:1,
$asM:function(){return[P.f,P.f]},
"%":"Storage"},
k6:{"^":"n:29;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bs:{"^":"r;",$isbs:1,"%":"CSSStyleSheet|StyleSheet"},
dB:{"^":"ai;",$isdB:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
kb:{"^":"ai;",
aq:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.bX(a,b,c,d)
z=W.il("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.az(y).ac(0,new W.az(z))
return y},
"%":"HTMLTableElement"},
oQ:{"^":"ai;",
aq:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.bX(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.G.aq(z.createElement("table"),b,c,d)
z.toString
z=new W.az(z)
x=z.gaL(z)
x.toString
z=new W.az(x)
w=z.gaL(z)
y.toString
w.toString
new W.az(y).ac(0,new W.az(w))
return y},
"%":"HTMLTableRowElement"},
oR:{"^":"ai;",
aq:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.bX(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.G.aq(z.createElement("table"),b,c,d)
z.toString
z=new W.az(z)
x=z.gaL(z)
y.toString
x.toString
new W.az(y).ac(0,new W.az(x))
return y},
"%":"HTMLTableSectionElement"},
fd:{"^":"ai;",$isfd:1,"%":"HTMLTemplateElement"},
bt:{"^":"ah;",$isbt:1,"%":"TextTrack"},
bu:{"^":"ah;",$isbu:1,"%":"TextTrackCue|VTTCue"},
oT:{"^":"mq;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbu")
throw H.a(P.D("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bu]},
$asy:function(){return[W.bu]},
$isi:1,
$asi:function(){return[W.bu]},
$isd:1,
$asd:function(){return[W.bu]},
$asE:function(){return[W.bu]},
"%":"TextTrackCueList"},
oU:{"^":"h4;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbt")
throw H.a(P.D("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bt]},
$asy:function(){return[W.bt]},
$isi:1,
$asi:function(){return[W.bt]},
$isd:1,
$asd:function(){return[W.bt]},
$asE:function(){return[W.bt]},
"%":"TextTrackList"},
oV:{"^":"r;0m:length=","%":"TimeRanges"},
bw:{"^":"r;",$isbw:1,"%":"Touch"},
bx:{"^":"dE;",$isbx:1,"%":"TouchEvent"},
oW:{"^":"mw;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbw")
throw H.a(P.D("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bw]},
$asy:function(){return[W.bw]},
$isi:1,
$asi:function(){return[W.bw]},
$isd:1,
$asd:function(){return[W.bw]},
$asE:function(){return[W.bw]},
"%":"TouchList"},
oX:{"^":"r;0m:length=","%":"TrackDefaultList"},
oZ:{"^":"r;",
iQ:[function(a){return a.previousNode()},"$0","gcT",1,0,26],
"%":"TreeWalker"},
dE:{"^":"ac;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
p0:{"^":"r;",
i:function(a){return String(a)},
"%":"URL"},
p1:{"^":"ah;0m:length=","%":"VideoTrackList"},
bZ:{"^":"ad;",
gia:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.D("deltaY is not supported"))},
gi9:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.D("deltaX is not supported"))},
$isbZ:1,
"%":"WheelEvent"},
lf:{"^":"ah;",
hh:function(a,b){return a.requestAnimationFrame(H.bD(H.l(b,{func:1,ret:-1,args:[P.a5]}),1))},
fB:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fO:{"^":"G;",$isfO:1,"%":"Attr"},
p6:{"^":"mZ;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbf")
throw H.a(P.D("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bf]},
$asy:function(){return[W.bf]},
$isi:1,
$asi:function(){return[W.bf]},
$isd:1,
$asd:function(){return[W.bf]},
$asE:function(){return[W.bf]},
"%":"CSSRuleList"},
p7:{"^":"ii;",
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
w:function(a,b){var z
if(b==null)return!1
z=H.c5(b,"$isaa",[P.a5],"$asaa")
if(!z)return!1
z=J.aU(b)
return a.left===z.gaZ(b)&&a.top===z.gbk(b)&&a.width===z.gak(b)&&a.height===z.gaf(b)},
gX:function(a){return W.fU(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gaf:function(a){return a.height},
gak:function(a){return a.width},
"%":"ClientRect|DOMRect"},
p9:{"^":"n0;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbj")
throw H.a(P.D("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bj]},
$asy:function(){return[W.bj]},
$isi:1,
$asi:function(){return[W.bj]},
$isd:1,
$asd:function(){return[W.bj]},
$asE:function(){return[W.bj]},
"%":"GamepadList"},
pc:{"^":"n2;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isG")
throw H.a(P.D("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.G]},
$asy:function(){return[W.G]},
$isi:1,
$asi:function(){return[W.G]},
$isd:1,
$asd:function(){return[W.G]},
$asE:function(){return[W.G]},
"%":"MozNamedAttrMap|NamedNodeMap"},
pd:{"^":"n4;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbr")
throw H.a(P.D("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.br]},
$asy:function(){return[W.br]},
$isi:1,
$asi:function(){return[W.br]},
$isd:1,
$asd:function(){return[W.br]},
$asE:function(){return[W.br]},
"%":"SpeechRecognitionResultList"},
pe:{"^":"n6;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.F(b)
H.e(c,"$isbs")
throw H.a(P.D("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.h(a,b)
return a[b]},
$isJ:1,
$asJ:function(){return[W.bs]},
$asy:function(){return[W.bs]},
$isi:1,
$asi:function(){return[W.bs]},
$isd:1,
$asd:function(){return[W.bs]},
$asE:function(){return[W.bs]},
"%":"StyleSheetList"},
ll:{"^":"eO;dt:a<",
H:function(a,b){var z,y,x,w,v
H.l(b,{func:1,ret:-1,args:[P.f,P.f]})
for(z=this.gaa(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.C)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gaa:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.f])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.h(z,w)
v=H.e(z[w],"$isfO")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asaj:function(){return[P.f,P.f]},
$asM:function(){return[P.f,P.f]}},
lu:{"^":"ll;a",
j:function(a,b){return this.a.getAttribute(H.H(b))},
p:function(a,b,c){this.a.setAttribute(b,H.H(c))},
gm:function(a){return this.gaa(this).length}},
lv:{"^":"dz;a,b,c,$ti",
iw:function(a,b,c,d){var z=H.x(this,0)
H.l(a,{func:1,ret:-1,args:[z]})
H.l(c,{func:1,ret:-1})
return W.a2(this.a,this.b,a,!1,z)}},
p8:{"^":"lv;a,b,c,$ti"},
lw:{"^":"fa;a,b,c,d,e,$ti",
hz:function(){var z=this.d
if(z!=null&&this.a<=0)J.hG(this.b,this.c,z,!1)},
t:{
a2:function(a,b,c,d,e){var z=c==null?null:W.hm(new W.lx(c),W.ac)
z=new W.lw(0,a,b,z,!1,[e])
z.hz()
return z}}},
lx:{"^":"n:10;a",
$1:function(a){return this.a.$1(H.e(a,"$isac"))}},
cs:{"^":"b;a",
fe:function(a){var z,y
z=$.$get$dM()
if(z.gir(z)){for(y=0;y<262;++y)z.p(0,C.Z[y],W.nB())
for(y=0;y<12;++y)z.p(0,C.t[y],W.nC())}},
aU:function(a){return $.$get$fT().W(0,W.bJ(a))},
aD:function(a,b,c){var z,y,x
z=W.bJ(a)
y=$.$get$dM()
x=y.j(0,H.k(z)+"::"+b)
if(x==null)x=y.j(0,"*::"+b)
if(x==null)return!1
return H.dT(x.$4(a,b,c,this))},
$isaO:1,
t:{
fS:function(a){var z,y
z=W.e6(null)
y=window.location
z=new W.cs(new W.m7(z,y))
z.fe(a)
return z},
pa:[function(a,b,c,d){H.e(a,"$isR")
H.H(b)
H.H(c)
H.e(d,"$iscs")
return!0},"$4","nB",16,0,22],
pb:[function(a,b,c,d){var z,y,x,w,v
H.e(a,"$isR")
H.H(b)
H.H(c)
z=H.e(d,"$iscs").a
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
return z},"$4","nC",16,0,22]}},
E:{"^":"b;$ti",
ga0:function(a){return new W.eA(a,this.gm(a),-1,[H.b4(this,a,"E",0)])},
aG:function(a,b,c,d){H.A(d,H.b4(this,a,"E",0))
throw H.a(P.D("Cannot modify an immutable List."))}},
eU:{"^":"b;a",
aU:function(a){return C.a.dU(this.a,new W.jj(a))},
aD:function(a,b,c){return C.a.dU(this.a,new W.ji(a,b,c))},
$isaO:1},
jj:{"^":"n:28;a",
$1:function(a){return H.e(a,"$isaO").aU(this.a)}},
ji:{"^":"n:28;a,b,c",
$1:function(a){return H.e(a,"$isaO").aD(this.a,this.b,this.c)}},
m8:{"^":"b;",
fh:function(a,b,c,d){var z,y,x
this.a.ac(0,c)
z=b.d3(0,new W.m9())
y=b.d3(0,new W.ma())
this.b.ac(0,z)
x=this.c
x.ac(0,C.B)
x.ac(0,y)},
aU:function(a){return this.a.W(0,W.bJ(a))},
aD:["f5",function(a,b,c){var z,y
z=W.bJ(a)
y=this.c
if(y.W(0,H.k(z)+"::"+b))return this.d.i_(c)
else if(y.W(0,"*::"+b))return this.d.i_(c)
else{y=this.b
if(y.W(0,H.k(z)+"::"+b))return!0
else if(y.W(0,"*::"+b))return!0
else if(y.W(0,H.k(z)+"::*"))return!0
else if(y.W(0,"*::*"))return!0}return!1}],
$isaO:1},
m9:{"^":"n:14;",
$1:function(a){return!C.a.W(C.t,H.H(a))}},
ma:{"^":"n:14;",
$1:function(a){return C.a.W(C.t,H.H(a))}},
mn:{"^":"m8;e,a,b,c,d",
aD:function(a,b,c){if(this.f5(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.W(0,b)
return!1},
t:{
h2:function(){var z,y,x,w,v
z=P.f
y=P.eL(C.r,z)
x=H.x(C.r,0)
w=H.l(new W.mo(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.mn(y,P.cn(null,null,null,z),P.cn(null,null,null,z),P.cn(null,null,null,z),null)
y.fh(null,new H.j3(C.r,w,[x,z]),v,null)
return y}}},
mo:{"^":"n:19;",
$1:function(a){return"TEMPLATE::"+H.k(H.H(a))}},
mm:{"^":"b;",
aU:function(a){var z=J.L(a)
if(!!z.$isf3)return!1
z=!!z.$isdA
if(z&&W.bJ(a)==="foreignObject")return!1
if(z)return!0
return!1},
aD:function(a,b,c){if(b==="is"||C.b.a7(b,"on"))return!1
return this.aU(a)},
$isaO:1},
eA:{"^":"b;a,b,c,0d,$ti",
C:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.e3(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gM:function(a){return this.d}},
aO:{"^":"b;"},
m7:{"^":"b;a,b",$isp_:1},
hf:{"^":"b;a",
d9:function(a){new W.mW(this).$2(a,null)},
b7:function(a,b){if(b==null)J.e5(a)
else b.removeChild(a)},
hm:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.hJ(a)
x=y.gdt().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.ab(t)}v="element unprintable"
try{v=J.am(a)}catch(t){H.ab(t)}try{u=W.bJ(a)
this.hl(H.e(a,"$isR"),b,z,v,u,H.e(y,"$isM"),H.H(x))}catch(t){if(H.ab(t) instanceof P.aG)throw t
else{this.b7(a,b)
window
s="Removing corrupted element "+H.k(v)
if(typeof console!="undefined")window.console.warn(s)}}},
hl:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.b7(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aU(a)){this.b7(a,b)
window
z="Removing disallowed element <"+H.k(e)+"> from "+H.k(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.aD(a,"is",g)){this.b7(a,b)
window
z="Removing disallowed type extension <"+H.k(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gaa(f)
y=H.c(z.slice(0),[H.x(z,0)])
for(x=f.gaa(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.h(y,x)
w=y[x]
if(!this.a.aD(a,J.hO(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.k(e)+" "+w+'="'+H.k(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.L(a).$isfd)this.d9(a.content)},
$isoD:1},
mW:{"^":"n:32;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.hm(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.b7(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.hK(z)}catch(w){H.ab(w)
v=H.e(z,"$isG")
if(x){u=v.parentNode
if(u!=null)u.removeChild(v)}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.e(y,"$isG")}}},
lo:{"^":"r+i7;"},
lq:{"^":"r+y;"},
lr:{"^":"lq+E;"},
ls:{"^":"r+y;"},
lt:{"^":"ls+E;"},
ly:{"^":"r+y;"},
lz:{"^":"ly+E;"},
lL:{"^":"r+y;"},
lM:{"^":"lL+E;"},
lS:{"^":"r+aj;"},
lT:{"^":"r+aj;"},
lU:{"^":"r+y;"},
lV:{"^":"lU+E;"},
lW:{"^":"r+y;"},
lX:{"^":"lW+E;"},
m_:{"^":"r+y;"},
m0:{"^":"m_+E;"},
m6:{"^":"r+aj;"},
h_:{"^":"ah+y;"},
h0:{"^":"h_+E;"},
mc:{"^":"r+y;"},
md:{"^":"mc+E;"},
mg:{"^":"r+aj;"},
mp:{"^":"r+y;"},
mq:{"^":"mp+E;"},
h3:{"^":"ah+y;"},
h4:{"^":"h3+E;"},
mv:{"^":"r+y;"},
mw:{"^":"mv+E;"},
mY:{"^":"r+y;"},
mZ:{"^":"mY+E;"},
n_:{"^":"r+y;"},
n0:{"^":"n_+E;"},
n1:{"^":"r+y;"},
n2:{"^":"n1+E;"},
n3:{"^":"r+y;"},
n4:{"^":"n3+E;"},
n5:{"^":"r+y;"},
n6:{"^":"n5+E;"}}],["","",,P,{"^":"",
nr:function(a){var z,y
z=J.L(a)
if(!!z.$isch){y=z.ge0(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.h6(a.data,a.height,a.width)},
nq:function(a){if(a instanceof P.h6)return{data:a.a,height:a.b,width:a.c}
return a},
b3:function(a){var z,y,x,w,v
if(a==null)return
z=P.dm(P.f,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w){v=H.H(y[w])
z.p(0,v,a[v])}return z},
no:function(a,b){var z={}
a.H(0,new P.np(z))
return z},
es:function(){var z=$.er
if(z==null){z=J.d4(window.navigator.userAgent,"Opera",0)
$.er=z}return z},
id:function(){var z,y
z=$.eo
if(z!=null)return z
y=$.ep
if(y==null){y=J.d4(window.navigator.userAgent,"Firefox",0)
$.ep=y}if(y)z="-moz-"
else{y=$.eq
if(y==null){y=!P.es()&&J.d4(window.navigator.userAgent,"Trident/",0)
$.eq=y}if(y)z="-ms-"
else z=P.es()?"-o-":"-webkit-"}$.eo=z
return z},
mj:{"^":"b;",
eo:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
d2:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.L(a)
if(!!y.$isau)return new Date(a.a)
if(!!y.$isjG)throw H.a(P.cq("structured clone of RegExp"))
if(!!y.$isb8)return a
if(!!y.$isd6)return a
if(!!y.$isez)return a
if(!!y.$isch)return a
if(!!y.$iseT||!!y.$isdu)return a
if(!!y.$isM){x=this.eo(a)
w=this.b
if(x>=w.length)return H.h(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.p(w,x,v)
y.H(a,new P.ml(z,this))
return z.a}if(!!y.$isd){x=this.eo(a)
z=this.b
if(x>=z.length)return H.h(z,x)
v=z[x]
if(v!=null)return v
return this.i6(a,x)}throw H.a(P.cq("structured clone of other type"))},
i6:function(a,b){var z,y,x,w
z=J.aT(a)
y=z.gm(a)
x=new Array(y)
C.a.p(this.b,b,x)
if(typeof y!=="number")return H.o(y)
w=0
for(;w<y;++w)C.a.p(x,w,this.d2(z.j(a,w)))
return x}},
ml:{"^":"n:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.d2(b)}},
h6:{"^":"b;e0:a>,b,c",$isch:1},
np:{"^":"n:6;a",
$2:function(a,b){this.a[a]=b}},
mk:{"^":"mj;a,b"},
iv:{"^":"cI;a,b",
gb5:function(){var z,y,x
z=this.b
y=H.ag(z,"y",0)
x=W.R
return new H.j1(new H.dK(z,H.l(new P.iw(),{func:1,ret:P.T,args:[y]}),[y]),H.l(new P.ix(),{func:1,ret:x,args:[y]}),[y,x])},
H:function(a,b){H.l(b,{func:1,ret:-1,args:[W.R]})
C.a.H(P.eM(this.gb5(),!1,W.R),b)},
p:function(a,b,c){var z
H.F(b)
H.e(c,"$isR")
z=this.gb5()
J.hM(z.b.$1(J.cw(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aG:function(a,b,c,d){throw H.a(P.D("Cannot fillRange on filtered list"))},
gm:function(a){return J.ar(this.gb5().a)},
j:function(a,b){var z=this.gb5()
return z.b.$1(J.cw(z.a,b))},
ga0:function(a){var z=P.eM(this.gb5(),!1,W.R)
return new J.aB(z,z.length,0,[H.x(z,0)])},
$asy:function(){return[W.R]},
$asi:function(){return[W.R]},
$asd:function(){return[W.R]}},
iw:{"^":"n:24;",
$1:function(a){return!!J.L(H.e(a,"$isG")).$isR}},
ix:{"^":"n:58;",
$1:function(a){return H.j(H.e(a,"$isG"),"$isR")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cU:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lN:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
m1:{"^":"b;$ti",
gbg:function(a){var z=this.a
if(typeof z!=="number")return z.I()
return H.A(z+this.c,H.x(this,0))},
gcp:function(a){var z=this.b
if(typeof z!=="number")return z.I()
return H.A(z+this.d,H.x(this,0))},
i:function(a){return"Rectangle ("+H.k(this.a)+", "+H.k(this.b)+") "+this.c+" x "+this.d},
w:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.c5(b,"$isaa",[P.a5],"$asaa")
if(!z)return!1
z=this.a
y=J.aU(b)
x=y.gaZ(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbk(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.I()
w=H.x(this,0)
if(H.A(z+this.c,w)===y.gbg(b)){if(typeof x!=="number")return x.I()
z=H.A(x+this.d,w)===y.gcp(b)}else z=!1}else z=!1}else z=!1
return z},
gX:function(a){var z,y,x,w,v
z=this.a
y=J.cb(z)
x=this.b
w=J.cb(x)
if(typeof z!=="number")return z.I()
v=H.x(this,0)
z=H.A(z+this.c,v)
if(typeof x!=="number")return x.I()
v=H.A(x+this.d,v)
return P.lN(P.cU(P.cU(P.cU(P.cU(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
aa:{"^":"m1;aZ:a>,bk:b>,ak:c>,af:d>,$ti",t:{
jD:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.O()
if(c<0)z=-c*0
else z=c
H.A(z,e)
if(typeof d!=="number")return d.O()
if(d<0)y=-d*0
else y=d
return new P.aa(a,b,z,H.A(y,e),[e])}}}}],["","",,P,{"^":"",bN:{"^":"r;",$isbN:1,"%":"SVGLength"},op:{"^":"lP;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.F(b)
H.e(c,"$isbN")
throw H.a(P.D("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asy:function(){return[P.bN]},
$isi:1,
$asi:function(){return[P.bN]},
$isd:1,
$asd:function(){return[P.bN]},
$asE:function(){return[P.bN]},
"%":"SVGLengthList"},bQ:{"^":"r;",$isbQ:1,"%":"SVGNumber"},oE:{"^":"lZ;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.F(b)
H.e(c,"$isbQ")
throw H.a(P.D("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asy:function(){return[P.bQ]},
$isi:1,
$asi:function(){return[P.bQ]},
$isd:1,
$asd:function(){return[P.bQ]},
$asE:function(){return[P.bQ]},
"%":"SVGNumberList"},oH:{"^":"r;0m:length=","%":"SVGPointList"},f3:{"^":"dA;",$isf3:1,"%":"SVGScriptElement"},oO:{"^":"mi;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.F(b)
H.H(c)
throw H.a(P.D("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asy:function(){return[P.f]},
$isi:1,
$asi:function(){return[P.f]},
$isd:1,
$asd:function(){return[P.f]},
$asE:function(){return[P.f]},
"%":"SVGStringList"},dA:{"^":"R;",
gcu:function(a){return new P.iv(a,new W.az(a))},
aq:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.aO])
C.a.h(z,W.fS(null))
C.a.h(z,W.h2())
C.a.h(z,new W.mm())
c=new W.hf(new W.eU(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.w).i7(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.az(w)
u=z.gaL(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
$isdA:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bW:{"^":"r;",$isbW:1,"%":"SVGTransform"},oY:{"^":"my;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){H.F(b)
H.e(c,"$isbW")
throw H.a(P.D("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asy:function(){return[P.bW]},
$isi:1,
$asi:function(){return[P.bW]},
$isd:1,
$asd:function(){return[P.bW]},
$asE:function(){return[P.bW]},
"%":"SVGTransformList"},lO:{"^":"r+y;"},lP:{"^":"lO+E;"},lY:{"^":"r+y;"},lZ:{"^":"lY+E;"},mh:{"^":"r+y;"},mi:{"^":"mh+E;"},mx:{"^":"r+y;"},my:{"^":"mx+E;"}}],["","",,P,{"^":"",S:{"^":"b;",$isi:1,
$asi:function(){return[P.m]},
$isd:1,
$asd:function(){return[P.m]},
$iskw:1}}],["","",,P,{"^":"",o3:{"^":"r;0m:length=","%":"AudioBuffer"},o4:{"^":"lm;",
j:function(a,b){return P.b3(a.get(H.H(b)))},
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.f,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b3(y.value[1]))}},
gaa:function(a){var z=H.c([],[P.f])
this.H(a,new P.hQ(z))
return z},
gm:function(a){return a.size},
p:function(a,b,c){throw H.a(P.D("Not supported"))},
$asaj:function(){return[P.f,null]},
$isM:1,
$asM:function(){return[P.f,null]},
"%":"AudioParamMap"},hQ:{"^":"n:9;a",
$2:function(a,b){return C.a.h(this.a,a)}},o5:{"^":"ah;0m:length=","%":"AudioTrackList"},hU:{"^":"ah;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},oF:{"^":"hU;0m:length=","%":"OfflineAudioContext"},lm:{"^":"r+aj;"}}],["","",,P,{"^":"",dx:{"^":"r;",
eK:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=i==null
if(!z&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}y=J.L(g)
if(!!y.$isch&&h==null&&z&&!0){a.texImage2D(b,c,d,e,f,P.nq(g))
return}if(!!y.$isde&&h==null&&z&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.cc("Incorrect number or type of arguments"))},
eJ:function(a,b,c,d,e,f,g){return this.eK(a,b,c,d,e,f,g,null,null,null)},
$isdx:1,
"%":"WebGLRenderingContext"},kc:{"^":"r;",$iskc:1,"%":"WebGLTexture"},kF:{"^":"r;",$iskF:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",oM:{"^":"mf;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.W(b,a,null,null,null))
return P.b3(a.item(b))},
p:function(a,b,c){H.F(b)
H.e(c,"$isM")
throw H.a(P.D("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$asy:function(){return[[P.M,,,]]},
$isi:1,
$asi:function(){return[[P.M,,,]]},
$isd:1,
$asd:function(){return[[P.M,,,]]},
$asE:function(){return[[P.M,,,]]},
"%":"SQLResultSetRowList"},me:{"^":"r+y;"},mf:{"^":"me+E;"}}],["","",,O,{"^":"",at:{"^":"b;0a,0b,0c,0d,$ti",
bp:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
da:function(a,b,c){var z=H.ag(this,"at",0)
H.l(b,{func:1,ret:P.T,args:[[P.i,z]]})
z={func:1,ret:-1,args:[P.m,[P.i,z]]}
H.l(a,z)
H.l(c,z)
this.b=b
this.c=a
this.d=c},
b4:function(a,b){return this.da(a,null,b)},
dD:function(a){var z
H.p(a,"$isi",[H.ag(this,"at",0)],"$asi")
z=this.b
if(z!=null)return z.$1(a)
return!0},
de:function(a,b){var z
H.p(b,"$isi",[H.ag(this,"at",0)],"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gm:function(a){return this.a.length},
ga0:function(a){var z=this.a
return new J.aB(z,z.length,0,[H.x(z,0)])},
J:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.ag(this,"at",0)
H.A(b,z)
z=[z]
if(this.dD(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.de(x,H.c([b],z))}},
ac:function(a,b){var z,y
H.p(b,"$isi",[H.ag(this,"at",0)],"$asi")
if(this.dD(b)){z=this.a
y=z.length
C.a.ac(z,b)
this.de(y,b)}},
$isi:1,
t:{
db:function(a){var z=new O.at([a])
z.bp(a)
return z}}},dr:{"^":"b;0a,0b",
gm:function(a){return this.a.length},
gu:function(){var z=this.b
if(z==null){z=D.I()
this.b=z}return z},
fb:function(a){var z=this.b
if(!(z==null))z.B(a)},
aM:function(){return this.fb(null)},
ga2:function(a){var z=this.a
if(z.length>0)return C.a.gax(z)
else return V.ba()},
bP:function(a){var z=this.a
if(a==null)C.a.h(z,V.ba())
else C.a.h(z,a)
this.aM()},
aI:function(){var z=this.a
if(z.length>0){z.pop()
this.aM()}}}}],["","",,E,{"^":"",d5:{"^":"b;"},aW:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a8:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sbV:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gu().P(0,this.geD())
y=this.c
if(y!=null)y.gu().h(0,this.geD())
x=new D.N("shape",z,this.c,this,[F.f4])
x.b=!0
this.b0(x)}},
ae:function(a,b){var z
for(z=this.y.a,z=new J.aB(z,z.length,0,[H.x(z,0)]);z.C();)z.d.ae(0,b)},
ad:function(a){var z,y
z=a.dx
C.a.h(z.a,z.ga2(z))
z.aM()
a.cU(this.f)
z=a.dy
y=(z&&C.a).gax(z)
if(y!=null&&this.d!=null)y.cZ(a,this)
for(z=this.y.a,z=new J.aB(z,z.length,0,[H.x(z,0)]);z.C();)z.d.ad(a)
a.cS()
a.dx.aI()},
gu:function(){var z=this.z
if(z==null){z=D.I()
this.z=z}return z},
b0:function(a){var z=this.z
if(!(z==null))z.B(a)},
ai:function(){return this.b0(null)},
iH:[function(a){H.e(a,"$isz")
this.e=null
this.b0(a)},function(){return this.iH(null)},"jS","$1","$0","geD",0,2,0],
iF:[function(a){this.b0(H.e(a,"$isz"))},function(){return this.iF(null)},"jQ","$1","$0","geC",0,2,0],
jP:[function(a,b){var z,y,x,w,v,u,t,s
H.p(b,"$isi",[E.aW],"$asi")
for(z=b.length,y=this.geC(),x={func:1,ret:-1,args:[D.z]},w=[x],v=0;v<b.length;b.length===z||(0,H.C)(b),++v){u=b[v]
if(u!=null){if(u.ga8()==null){t=new D.bi()
t.d=0
u.sa8(t)}t=u.ga8()
t.toString
H.l(y,x)
s=t.a
if(s==null){s=H.c([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.ai()},"$2","giE",8,0,8],
jR:[function(a,b){var z,y,x,w,v
H.p(b,"$isi",[E.aW],"$asi")
for(z=b.length,y=this.geC(),x=0;x<b.length;b.length===z||(0,H.C)(b),++x){w=b[x]
if(w!=null){if(w.ga8()==null){v=new D.bi()
v.d=0
w.sa8(v)}w.ga8().P(0,y)}}this.ai()},"$2","giG",8,0,8],
$isaN:1,
t:{
ey:function(a,b,c,d,e,f){var z,y
z=new E.aW()
z.a=d
z.b=!0
y=O.db(E.aW)
z.y=y
y.b4(z.giE(),z.giG())
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
z.sbV(0,e)
return z}}},jI:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
f8:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.au(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.dr()
y=[V.aK]
z.a=H.c([],y)
z.gu().h(0,new E.jK(this))
this.cy=z
z=new O.dr()
z.a=H.c([],y)
z.gu().h(0,new E.jL(this))
this.db=z
z=new O.dr()
z.a=H.c([],y)
z.gu().h(0,new E.jM(this))
this.dx=z
z=H.c([],[O.bU])
this.dy=z
C.a.h(z,null)
this.fr=new H.b9(0,0,[P.f,A.cN])},
giR:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.ga2(z)
y=this.db
y=z.k(0,y.ga2(y))
this.z=y
z=y}return z},
geG:function(){var z,y
z=this.ch
if(z==null){z=this.giR()
y=this.dx
y=z.k(0,y.ga2(y))
this.ch=y
z=y}return z},
cU:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gax(z):a;(z&&C.a).h(z,y)},
cS:function(){var z=this.dy
if(z.length>1)z.pop()},
ck:function(a){var z=a.b
if(z.length===0)throw H.a(P.v("May not cache a shader with no name."))
if(this.fr.bw(0,z))throw H.a(P.v('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.p(0,z,a)},
t:{
jJ:function(a,b){var z=new E.jI(a,b)
z.f8(a,b)
return z}}},jK:{"^":"n:7;a",
$1:function(a){var z
H.e(a,"$isz")
z=this.a
z.z=null
z.ch=null}},jL:{"^":"n:7;a",
$1:function(a){var z
H.e(a,"$isz")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jM:{"^":"n:7;a",
$1:function(a){var z
H.e(a,"$isz")
z=this.a
z.ch=null
z.cx=null}},ko:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a8:x@,0y,0z,0Q,0ch,0cx,0cy",
gu:function(){var z=this.x
if(z==null){z=D.I()
this.x=z}return z},
fd:[function(a){var z
H.e(a,"$isz")
z=this.x
if(!(z==null))z.B(a)
this.iY()},function(){return this.fd(null)},"fc","$1","$0","gdf",0,2,0],
gil:function(){var z,y,x
z=Date.now()
y=C.e.a9(P.eu(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.au(z,!1)
return x/y},
dG:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.o(z)
x=C.d.cI(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.d.cI(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.fg(C.q,this.giX())},
iY:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.kq(this),{func:1,ret:-1,args:[P.a5]})
C.I.fB(z)
C.I.hh(z,W.hm(y,P.a5))}},"$0","giX",0,0,3],
iV:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dG()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.au(w,!1)
x.y=P.eu(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sm(w.a,0)
w.aM()
w=x.db
C.a.sm(w.a,0)
w.aM()
w=x.dx
C.a.sm(w.a,0)
w.aM()
w=x.dy;(w&&C.a).sm(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.ad(this.e)}x=this.z
if(!(x==null))x.B(null)}catch(v){z=H.ab(v)
y=H.bF(v)
P.e0("Error: "+H.k(z))
P.e0("Stack: "+H.k(y))
throw H.a(z)}},
t:{
kp:function(a,b,c,d,e){var z,y,x,w
z=J.L(a)
if(!!z.$isd9)return E.ff(a,!0,!0,!0,!1)
y=W.da(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcu(a).h(0,y)
w=E.ff(y,!0,!0,!0,!1)
w.a=a
return w},
ff:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.ko()
y=P.iU(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.f,null)
x=C.l.bT(a,"webgl",y)
x=H.e(x==null?C.l.bT(a,"experimental-webgl",y):x,"$isdx")
if(x==null)H.t(P.v("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.jJ(x,a)
w=new T.ki(x)
w.b=H.F(x.getParameter(3379))
w.c=H.F(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.kS(a)
v=new X.iN()
v.c=new X.aM(!1,!1,!1)
v.d=P.cn(null,null,null,P.m)
w.b=v
v=new X.je(w)
v.f=0
v.r=new V.X(0,0)
v.x=new V.X(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.iZ(w)
v.r=0
v.x=new V.X(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.kt(w)
v.e=0
v.f=new V.X(0,0)
v.r=new V.X(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.fa,P.b]])
w.z=v
u=document
t=W.ad
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a2(u,"contextmenu",H.l(w.gfS(),s),!1,t))
v=w.z
r=W.ac
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a2(a,"focus",H.l(w.gfV(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a2(a,"blur",H.l(w.gfP(),q),!1,r))
v=w.z
p=W.bM
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a2(u,"keyup",H.l(w.gfX(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a2(u,"keydown",H.l(w.gfW(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a2(a,"mousedown",H.l(w.gh_(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a2(a,"mouseup",H.l(w.gh1(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a2(a,"mousemove",H.l(w.gh0(),s),!1,t))
p=w.z
o=W.bZ;(p&&C.a).h(p,W.a2(a,H.H(W.io(a)),H.l(w.gh2(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a2(u,"mousemove",H.l(w.gfT(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a2(u,"mouseup",H.l(w.gfU(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a2(u,"pointerlockchange",H.l(w.gh3(),q),!1,r))
r=w.z
q=W.bx
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a2(a,"touchstart",H.l(w.ghb(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a2(a,"touchend",H.l(w.gh9(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a2(a,"touchmove",H.l(w.gha(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.au(Date.now(),!1)
z.cy=0
z.dG()
return z}}},kq:{"^":"n:35;a",
$1:function(a){var z
H.nP(a)
z=this.a
if(z.ch){z.ch=!1
z.iV()}}}}],["","",,Z,{"^":"",fM:{"^":"b;a,b",t:{
dJ:function(a,b,c){var z
H.p(c,"$isd",[P.m],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bA(c)),35044)
a.bindBuffer(b,null)
return new Z.fM(b,z)}}},ed:{"^":"d5;a,b,c,d,e",
Z:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ab(y)
x=P.v('Failed to bind buffer attribute "'+J.am(this.a)+'": '+H.k(z))
throw H.a(x)}},
i:function(a){return"["+J.am(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.k(this.e)+"]"}},dI:{"^":"b;a",$iso6:1},cB:{"^":"b;a,0b,c,d",
as:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
Z:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].Z(a)},
aj:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
ad:function(a){var z,y,x,w,v
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
z=[P.f]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.am(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.n(y,", ")+"\nAttrs:   "+C.a.n(u,", ")},
$isoS:1},cH:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bo(this.c)+"'")+"]"}},bc:{"^":"b;a",
gdc:function(a){var z,y
z=this.a
y=(z&$.$get$aq().a)!==0?3:0
if((z&$.$get$b0().a)!==0)y+=3
if((z&$.$get$b_().a)!==0)y+=3
if((z&$.$get$aF().a)!==0)y+=2
if((z&$.$get$b1().a)!==0)y+=3
if((z&$.$get$bX().a)!==0)y+=3
if((z&$.$get$bY().a)!==0)y+=4
if((z&$.$get$by().a)!==0)++y
return(z&$.$get$aZ().a)!==0?y+4:y},
i0:function(a){var z,y,x
z=$.$get$aq()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$b0()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b_()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aF()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b1()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bX()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bY()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$by()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aZ()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fL()},
w:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bc))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.f])
y=this.a
if((y&$.$get$aq().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$b0().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$b_().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aF().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$b1().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bX().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bY().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$by().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aZ().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.n(z,"|")},
t:{
ay:function(a){return new Z.bc(a)}}}}],["","",,D,{"^":"",eg:{"^":"b;"},bi:{"^":"b;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.z]}
H.l(b,z)
y=this.a
if(y==null){z=H.c([],[z])
this.a=z}else z=y
C.a.h(z,b)},
P:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.z]})
z=this.a
z=z==null?null:C.a.W(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).P(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.W(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).P(z,b)||y}return y},
B:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w){w=this.b
w=w==null?null:w.length===0
if(w==null)w=!0}else w=!1
if(w)return!1
if(a==null){a=new D.z(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.H(y,new D.is(z))
y=this.b
if(!(y==null))C.a.H(y,new D.it(z))
z=this.b
if(!(z==null))C.a.sm(z,0)
return!0},
cB:function(){return this.B(null)},
iZ:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.B(y)}}},
aK:function(a){return this.iZ(a,!0,!1)},
t:{
I:function(){var z=new D.bi()
z.d=0
return z}}},is:{"^":"n:21;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.z]})
z=this.a.a
z.b
a.$1(z)}},it:{"^":"n:21;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.z]})
z=this.a.a
z.b
a.$1(z)}},z:{"^":"b;a,0b"},ci:{"^":"z;c,d,a,0b,$ti"},cj:{"^":"z;c,d,a,0b,$ti"},N:{"^":"z;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}}],["","",,X,{"^":"",ee:{"^":"b;a,b",
w:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ee))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)},
t:{"^":"o7<"}},eH:{"^":"b;a,b",
w:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eH))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}},eI:{"^":"z;c,a,0b"},iN:{"^":"b;0a,0b,0c,0d",
iN:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.eI(a,this)
y.b=!0
return z.B(y)},
iJ:function(a){var z,y
this.c=a.b
this.d.P(0,a.a)
z=this.b
if(z==null)return!1
y=new X.eI(a,this)
y.b=!0
return z.B(y)}},eN:{"^":"cK;x,y,c,d,e,a,0b"},iZ:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aB:function(a,b){var z,y,x,w,v,u,t,s
z=new P.au(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=new V.X(y.a+x*w,y.b+v*u)
u=this.a.gaV()
s=new X.bP(a,new V.X(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cR:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.B(this.aB(a,b))
return!0},
be:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.eV()
if(typeof z!=="number")return z.bS()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.B(this.aB(a,b))
return!0},
bd:function(a,b){var z=this.d
if(z==null)return!1
z.B(this.aB(a,b))
return!0},
iO:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaV()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.k()
t=a.b
s=this.cy
if(typeof t!=="number")return t.k()
w=new X.ds(new V.a_(v*u,t*s),y,x,new P.au(w,!1),this)
w.b=!0
z.B(w)
return!0},
fZ:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.au(Date.now(),!1)
y=this.f
x=new X.eN(c,a,this.a.gaV(),b,z,this)
x.b=!0
y.B(x)
this.y=z
this.x=new V.X(0,0)}},aM:{"^":"b;a,b,c",
w:function(a,b){var z,y
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
return z+(this.c?"Shift+":"")}},bP:{"^":"cK;x,y,z,Q,ch,c,d,e,a,0b"},je:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
c6:function(a,b,c){var z,y,x
z=new P.au(Date.now(),!1)
y=this.a.gaV()
x=new X.bP(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cR:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.B(this.c6(a,b,!0))
return!0},
be:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.eV()
if(typeof z!=="number")return z.bS()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.B(this.c6(a,b,!0))
return!0},
bd:function(a,b){var z=this.d
if(z==null)return!1
z.B(this.c6(a,b,!1))
return!0},
iP:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaV()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.k()
u=a.b
t=this.ch
if(typeof u!=="number")return u.k()
x=new X.ds(new V.a_(w*v,u*t),y,b,new P.au(x,!1),this)
x.b=!0
z.B(x)
return!0},
ge2:function(){var z=this.b
if(z==null){z=D.I()
this.b=z}return z},
gbR:function(){var z=this.c
if(z==null){z=D.I()
this.c=z}return z},
geB:function(){var z=this.d
if(z==null){z=D.I()
this.d=z}return z}},ds:{"^":"cK;x,c,d,e,a,0b"},cK:{"^":"z;"},fk:{"^":"cK;x,y,z,Q,ch,c,d,e,a,0b"},kt:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
aB:function(a,b){var z,y,x,w
H.p(a,"$isd",[V.X],"$asd")
z=new P.au(Date.now(),!1)
y=a.length>0?a[0]:new V.X(0,0)
x=this.a.gaV()
w=new X.fk(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
iM:function(a){var z
H.p(a,"$isd",[V.X],"$asd")
z=this.b
if(z==null)return!1
z.B(this.aB(a,!0))
return!0},
iK:function(a){var z
H.p(a,"$isd",[V.X],"$asd")
z=this.c
if(z==null)return!1
z.B(this.aB(a,!0))
return!0},
iL:function(a){var z
H.p(a,"$isd",[V.X],"$asd")
z=this.d
if(z==null)return!1
z.B(this.aB(a,!1))
return!0}},kS:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaV:function(){var z=this.a
return V.dw(0,0,(z&&C.l).gdY(z).c,C.l.gdY(z).d)},
dr:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eH(z,new X.aM(y,a.altKey,a.shiftKey))},
aS:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aM(y,a.altKey,a.shiftKey)},
cj:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aM(y,a.altKey,a.shiftKey)},
aC:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.K()
v=z.top
if(typeof x!=="number")return x.K()
return new V.X(y-w,x-v)},
b6:function(a){return new V.a_(a.movementX,a.movementY)},
ce:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.X])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v){u=x[v]
t=C.d.a1(u.pageX)
C.d.a1(u.pageY)
s=z.left
C.d.a1(u.pageX)
C.a.h(y,new V.X(t-s,C.d.a1(u.pageY)-z.top))}return y},
az:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.ee(z,new X.aM(y,a.altKey,a.shiftKey))},
c8:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.K()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.K()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
jp:[function(a){this.f=!0},"$1","gfV",4,0,10],
jj:[function(a){this.f=!1},"$1","gfP",4,0,10],
jm:[function(a){H.e(a,"$isad")
if(this.f&&this.c8(a))a.preventDefault()},"$1","gfS",4,0,4],
jr:[function(a){var z
H.e(a,"$isbM")
if(!this.f)return
z=this.dr(a)
if(this.b.iN(z))a.preventDefault()},"$1","gfX",4,0,30],
jq:[function(a){var z
H.e(a,"$isbM")
if(!this.f)return
z=this.dr(a)
if(this.b.iJ(z))a.preventDefault()},"$1","gfW",4,0,30],
jt:[function(a){var z,y,x,w
H.e(a,"$isad")
z=this.a
z.focus()
this.f=!0
this.aS(a)
if(this.x){y=this.az(a)
x=this.b6(a)
if(this.d.cR(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.az(a)
w=this.aC(a)
if(this.c.cR(y,w))a.preventDefault()},"$1","gh_",4,0,4],
jv:[function(a){var z,y,x
H.e(a,"$isad")
this.aS(a)
z=this.az(a)
if(this.x){y=this.b6(a)
if(this.d.be(z,y))a.preventDefault()
return}if(this.r)return
x=this.aC(a)
if(this.c.be(z,x))a.preventDefault()},"$1","gh1",4,0,4],
jo:[function(a){var z,y,x
H.e(a,"$isad")
if(!this.c8(a)){this.aS(a)
z=this.az(a)
if(this.x){y=this.b6(a)
if(this.d.be(z,y))a.preventDefault()
return}if(this.r)return
x=this.aC(a)
if(this.c.be(z,x))a.preventDefault()}},"$1","gfU",4,0,4],
ju:[function(a){var z,y,x
H.e(a,"$isad")
this.aS(a)
z=this.az(a)
if(this.x){y=this.b6(a)
if(this.d.bd(z,y))a.preventDefault()
return}if(this.r)return
x=this.aC(a)
if(this.c.bd(z,x))a.preventDefault()},"$1","gh0",4,0,4],
jn:[function(a){var z,y,x
H.e(a,"$isad")
if(!this.c8(a)){this.aS(a)
z=this.az(a)
if(this.x){y=this.b6(a)
if(this.d.bd(z,y))a.preventDefault()
return}if(this.r)return
x=this.aC(a)
if(this.c.bd(z,x))a.preventDefault()}},"$1","gfT",4,0,4],
jw:[function(a){var z,y
H.e(a,"$isbZ")
this.aS(a)
z=new V.a_((a&&C.H).gi9(a),C.H.gia(a)).A(0,180)
if(this.x){if(this.d.iO(z))a.preventDefault()
return}if(this.r)return
y=this.aC(a)
if(this.c.iP(z,y))a.preventDefault()},"$1","gh2",4,0,39],
jx:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.az(this.y)
v=this.aC(this.y)
this.d.fZ(w,v,x)}},"$1","gh3",4,0,10],
jF:[function(a){var z
H.e(a,"$isbx")
this.a.focus()
this.f=!0
this.cj(a)
z=this.ce(a)
if(this.e.iM(z))a.preventDefault()},"$1","ghb",4,0,13],
jD:[function(a){var z
H.e(a,"$isbx")
this.cj(a)
z=this.ce(a)
if(this.e.iK(z))a.preventDefault()},"$1","gh9",4,0,13],
jE:[function(a){var z
H.e(a,"$isbx")
this.cj(a)
z=this.ce(a)
if(this.e.iL(z))a.preventDefault()},"$1","gha",4,0,13]}}],["","",,D,{"^":"",cE:{"^":"b;0a,0b,0c,0d",
gu:function(){var z=this.d
if(z==null){z=D.I()
this.d=z}return z},
aN:[function(a){var z
H.e(a,"$isz")
z=this.d
if(!(z==null))z.B(a)},function(){return this.aN(null)},"j9","$1","$0","gfg",0,2,0],
$isa6:1,
$isaN:1},a6:{"^":"b;",$isaN:1},iO:{"^":"at;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gu:function(){var z=this.Q
if(z==null){z=D.I()
this.Q=z}return z},
aN:function(a){var z=this.Q
if(!(z==null))z.B(a)},
fY:[function(a){var z
H.e(a,"$isz")
z=this.ch
if(!(z==null))z.B(a)},function(){return this.fY(null)},"js","$1","$0","gdC",0,2,0],
jy:[function(a){var z,y,x
H.p(a,"$isi",[D.a6],"$asi")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.C)(a),++y){x=a[y]
if(x==null||this.ff(x))return!1}return!0},"$1","gh4",4,0,41],
jg:[function(a,b){var z,y,x,w,v,u,t,s,r
z=D.a6
H.p(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdC(),w={func:1,ret:-1,args:[D.z]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=H.e(b[u],"$isa6")
if(t instanceof D.cE)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bi()
s.d=0
t.d=s}H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}z=new D.ci(a,b,this,[z])
z.b=!0
this.aN(z)},"$2","gfM",8,0,15],
jA:[function(a,b){var z,y,x,w,v,u
z=D.a6
H.p(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdC(),w=0;w<b.length;b.length===y||(0,H.C)(b),++w){v=H.e(b[w],"$isa6")
if(v instanceof D.cE)C.a.P(this.e,v)
u=v.d
if(u==null){u=new D.bi()
u.d=0
v.d=u}u.P(0,x)}z=new D.cj(a,b,this,[z])
z.b=!0
this.aN(z)},"$2","gh6",8,0,15],
ff:function(a){var z=C.a.W(this.e,a)
return z},
$asi:function(){return[D.a6]},
$asat:function(){return[D.a6]}},jq:{"^":"b;",$isa6:1,$isaN:1},k4:{"^":"b;",$isa6:1,$isaN:1},kl:{"^":"b;",$isa6:1,$isaN:1},km:{"^":"b;",$isa6:1,$isaN:1},kn:{"^":"b;",$isa6:1,$isaN:1}}],["","",,V,{"^":"",
o9:[function(a,b){if(typeof b!=="number")return b.K()
if(typeof a!=="number")return H.o(a)
return Math.abs(b-a)<=1e-9},"$2","jb",8,0,38],
o_:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.d.bn(a-b,z)
return(a<0?a+z:a)+b},
U:function(a,b,c){if(a==null)return C.b.aH("null",c)
return C.b.aH(C.d.eM($.q.$2(a,0)?0:a,b),c+b+1)},
bE:function(a,b,c){var z,y,x,w,v,u
H.p(a,"$isd",[P.B],"$asd")
z=H.c([],[P.f])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.C)(a),++w){v=V.U(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.h(z,u)
C.a.p(z,u,C.b.aH(z[u],x))}return z},
ca:function(a,b){return C.d.j4(Math.pow(b,C.R.cI(Math.log(H.nn(a))/Math.log(b))))},
a3:{"^":"b;a,b,c",
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
return new V.a3(z,y,x)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}},
aI:{"^":"b;a,b,c,d",
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
return new V.aI(z,y,x,w)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aI))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+", "+V.U(this.d,3,0)+"]"}},
bO:{"^":"b;a,b,c,d,e,f,r,x,y",
a5:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.B])
return z},
k:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.e(a5,"$isbO")
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
return new V.bO(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.d.k(a3,s),C.d.k(a1,q)+C.d.k(a2,o)+C.d.k(a3,m),C.d.k(a1,k)+C.d.k(a2,j)+C.d.k(a3,i))},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bO))return!1
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
z=[P.B]
y=V.bE(H.c([this.a,this.d,this.r],z),3,0)
x=V.bE(H.c([this.b,this.e,this.x],z),3,0)
w=V.bE(H.c([this.c,this.f,this.y],z),3,0)
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
aK:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a5:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.B])
return z},
cN:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.q.$2(a2,0))return V.ba()
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
d1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.Q(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
bl:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return new V.a7(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aK))return!1
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
i:function(a){return this.U()},
ep:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.B]
y=V.bE(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bE(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bE(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bE(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
G:function(a){return this.ep(a,3,0)},
U:function(){return this.ep("",3,0)},
t:{
aL:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aK(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ba:function(){return V.aL(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
eS:function(a,b,c,d){return V.aL(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
eR:function(a,b,c){var z,y,x,w,v
z=c.A(0,Math.sqrt(c.E(c)))
y=b.aF(z)
x=y.A(0,Math.sqrt(y.E(y)))
w=z.aF(x)
v=new V.Q(a.a,a.b,a.c)
return V.aL(x.a,w.a,z.a,x.R(0).E(v),x.b,w.b,z.b,w.R(0).E(v),x.c,w.c,z.c,z.R(0).E(v),0,0,0,1)}}},
X:{"^":"b;a,b",
K:function(a,b){return new V.X(this.a-b.a,this.b-b.b)},
k:function(a,b){return new V.X(this.a*b,this.b*b)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+"]"}},
a7:{"^":"b;a,b,c",
I:function(a,b){return new V.a7(this.a+b.a,this.b+b.b,this.c+b.c)},
K:function(a,b){return new V.a7(this.a-b.a,this.b-b.b,this.c-b.c)},
k:function(a,b){return new V.a7(this.a*b,this.b*b,this.c*b)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}},
bR:{"^":"b;a,b,c,d",
k:function(a,b){return new V.bR(this.a*b,this.b*b,this.c*b,this.d*b)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bR))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+", "+V.U(this.d,3,0)+"]"}},
f2:{"^":"b;a,b,c,d",
gah:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.f2))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+", "+V.U(this.d,3,0)+"]"},
t:{
dw:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.f2(a,b,c,d)}}},
a_:{"^":"b;a,b",
iu:[function(a){return Math.sqrt(this.E(this))},"$0","gm",1,0,31],
E:function(a){var z,y,x,w
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
return new V.a_(z*b,y*b)},
A:function(a,b){var z,y
if($.q.$2(b,0))return new V.a_(0,0)
z=this.a
if(typeof z!=="number")return z.A()
y=this.b
if(typeof y!=="number")return y.A()
return new V.a_(z/b,y/b)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+"]"}},
Q:{"^":"b;a,b,c",
iu:[function(a){return Math.sqrt(this.E(this))},"$0","gm",1,0,31],
E:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aF:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.Q(z*y-x*w,x*v-u*y,u*w-z*v)},
I:function(a,b){return new V.Q(this.a+b.a,this.b+b.b,this.c+b.c)},
R:function(a){return new V.Q(-this.a,-this.b,-this.c)},
k:function(a,b){return new V.Q(this.a*b,this.b*b,this.c*b)},
A:function(a,b){if($.q.$2(b,0))return new V.Q(0,0,0)
return new V.Q(this.a/b,this.b/b,this.c/b)},
ez:function(){if(!$.q.$2(0,this.a))return!1
if(!$.q.$2(0,this.b))return!1
if(!$.q.$2(0,this.c))return!1
return!0},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}}],["","",,U,{"^":"",i0:{"^":"eg;0a,0b,0c,0d,0e,0f,0r,0x,0y",
c0:function(a){var z=V.o_(a,this.c,this.b)
return z},
gu:function(){var z=this.y
if(z==null){z=D.I()
this.y=z}return z},
T:function(a){var z=this.y
if(!(z==null))z.B(a)},
sd4:function(a,b){},
scO:function(a){var z,y
z=this.b
if(!$.q.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.c0(z)}z=new D.N("maximumLocation",y,this.b,this,[P.B])
z.b=!0
this.T(z)}},
scQ:function(a){var z,y
z=this.c
if(!$.q.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.c0(z)}z=new D.N("minimumLocation",y,this.c,this,[P.B])
z.b=!0
this.T(z)}},
sag:function(a,b){var z,y
b=this.c0(b)
z=this.d
if(!$.q.$2(z,b)){y=this.d
this.d=b
z=new D.N("location",y,b,this,[P.B])
z.b=!0
this.T(z)}},
scP:function(a){var z,y,x
z=this.e
if(!$.q.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.N("maximumVelocity",y,a,this,[P.B])
z.b=!0
this.T(z)}},
sV:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.q.$2(z,a)){x=this.f
this.f=a
z=new D.N("velocity",x,a,this,[P.B])
z.b=!0
this.T(z)}},
scw:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.q.$2(z,a)){y=this.x
this.x=a
z=new D.N("dampening",y,a,this,[P.B])
z.b=!0
this.T(z)}},
ae:function(a,b){var z,y,x,w
z=this.f
if($.q.$2(z,0)){z=this.r
z=!$.q.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sag(0,this.d+y*b)
z=this.x
if(!$.q.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sV(y)}},
t:{
dc:function(){var z=new U.i0()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},ei:{"^":"an;0a,0b",
gu:function(){var z=this.b
if(z==null){z=D.I()
this.b=z}return z},
b3:function(a,b,c){return this.a},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ei))return!1
return J.V(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")},
t:{
ej:function(a){var z=new U.ei()
z.a=a
return z}}},eC:{"^":"at;0e,0f,0r,0a,0b,0c,0d",
gu:function(){var z=this.e
if(z==null){z=D.I()
this.e=z}return z},
T:[function(a){var z
H.e(a,"$isz")
z=this.e
if(!(z==null))z.B(a)},function(){return this.T(null)},"ap","$1","$0","gaR",0,2,0],
jf:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.an
H.p(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaR(),w={func:1,ret:-1,args:[D.z]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=b[u]
if(t!=null){s=t.gu()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.ci(a,b,this,[z])
z.b=!0
this.T(z)},"$2","gfL",8,0,25],
jz:[function(a,b){var z,y,x,w,v
z=U.an
H.p(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaR(),w=0;w<b.length;b.length===y||(0,H.C)(b),++w){v=b[w]
if(v!=null)v.gu().P(0,x)}z=new D.cj(a,b,this,[z])
z.b=!0
this.T(z)},"$2","gh5",8,0,25],
b3:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.O()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.aB(z,z.length,0,[H.x(z,0)]),x=null;z.C();){y=z.d
if(y!=null){w=y.b3(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.ba():x
z=this.e
if(!(z==null))z.aK(0)}return this.f},
w:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eC))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.h(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.h(w,y)
if(!J.V(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asi:function(){return[U.an]},
$asat:function(){return[U.an]},
$isan:1},an:{"^":"eg;"},kT:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gu:function(){var z=this.cy
if(z==null){z=D.I()
this.cy=z}return z},
T:[function(a){var z
H.e(a,"$isz")
z=this.cy
if(!(z==null))z.B(a)},function(){return this.T(null)},"ap","$1","$0","gaR",0,2,0],
b8:function(a){if(this.a!=null)return!1
this.a=a
a.c.ge2().h(0,this.gc9())
this.a.c.geB().h(0,this.gca())
this.a.c.gbR().h(0,this.gcb())
return!0},
fH:[function(a){H.e(a,"$isz")
if(!J.V(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gc9",4,0,1],
fI:[function(a){var z,y,x,w,v,u,t
a=H.j(H.e(a,"$isz"),"$isbP")
if(!this.y)return
if(this.x){z=a.d.K(0,a.y)
z=new V.a_(z.a,z.b)
z=z.E(z)
y=this.r
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.K(0,a.y)
z=new V.a_(y.a,y.b).k(0,2).A(0,z.gah())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.k()
x=this.e
if(typeof x!=="number")return H.o(x)
y.sV(z*10*x)}else{z=a.c
y=a.d
x=y.K(0,a.y)
w=new V.a_(x.a,x.b).k(0,2).A(0,z.gah())
x=this.b
v=w.a
if(typeof v!=="number")return v.R()
u=this.e
if(typeof u!=="number")return H.o(u)
t=this.z
if(typeof t!=="number")return H.o(t)
x.sag(0,-v*u+t)
this.b.sV(0)
y=y.K(0,a.z)
this.Q=new V.a_(y.a,y.b).k(0,2).A(0,z.gah())}this.ap()},"$1","gca",4,0,1],
fJ:[function(a){var z,y,x
H.e(a,"$isz")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.E(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.k()
x=this.e
if(typeof x!=="number")return H.o(x)
z.sV(y*10*x)
this.ap()}},"$1","gcb",4,0,1],
b3:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.O()
if(z<y){this.ch=y
x=b.y
this.b.ae(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aL(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isan:1},kU:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gu:function(){var z=this.fx
if(z==null){z=D.I()
this.fx=z}return z},
T:[function(a){var z
H.e(a,"$isz")
z=this.fx
if(!(z==null))z.B(a)},function(){return this.T(null)},"ap","$1","$0","gaR",0,2,0],
b8:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.ge2().h(0,this.gc9())
this.a.c.geB().h(0,this.gca())
this.a.c.gbR().h(0,this.gcb())
z=this.a.d
y=z.f
if(y==null){y=D.I()
z.f=y
z=y}else z=y
z.h(0,this.gfE())
z=this.a.d
y=z.d
if(y==null){y=D.I()
z.d=y
z=y}else z=y
z.h(0,this.gfF())
z=this.a.e
y=z.b
if(y==null){y=D.I()
z.b=y
z=y}else z=y
z.h(0,this.ghy())
z=this.a.e
y=z.d
if(y==null){y=D.I()
z.d=y
z=y}else z=y
z.h(0,this.ghx())
z=this.a.e
y=z.c
if(y==null){y=D.I()
z.c=y
z=y}else z=y
z.h(0,this.ghw())
return!0},
au:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.R()
z=-z}if(this.r){if(typeof y!=="number")return y.R()
y=-y}return new V.a_(z,y)},
fH:[function(a){a=H.j(H.e(a,"$isz"),"$isbP")
if(!J.V(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gc9",4,0,1],
fI:[function(a){var z,y,x,w,v,u,t
a=H.j(H.e(a,"$isz"),"$isbP")
if(!this.cx)return
if(this.ch){z=a.d.K(0,a.y)
z=new V.a_(z.a,z.b)
z=z.E(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.K(0,a.y)
z=this.au(new V.a_(y.a,y.b).k(0,2).A(0,z.gah()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.R()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sV(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.R()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sV(-z*10*y)}else{z=a.c
y=a.d
x=y.K(0,a.y)
w=this.au(new V.a_(x.a,x.b).k(0,2).A(0,z.gah()))
x=this.c
v=w.a
if(typeof v!=="number")return v.R()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sag(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.R()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sag(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.K(0,a.z)
this.dx=this.au(new V.a_(y.a,y.b).k(0,2).A(0,z.gah()))}this.ap()},"$1","gca",4,0,1],
fJ:[function(a){var z,y,x
H.e(a,"$isz")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.E(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.R()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sV(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.R()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sV(-y*10*z)
this.ap()}},"$1","gcb",4,0,1],
jc:[function(a){if(H.j(H.e(a,"$isz"),"$iseN").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfE",4,0,1],
jd:[function(a){var z,y,x,w,v,u,t
a=H.j(H.e(a,"$isz"),"$isbP")
if(!J.V(this.d,a.x.b))return
z=a.c
y=a.d
x=y.K(0,a.y)
w=this.au(new V.a_(x.a,x.b).k(0,2).A(0,z.gah()))
x=this.c
v=w.a
if(typeof v!=="number")return v.R()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sag(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.R()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sag(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.K(0,a.z)
this.dx=this.au(new V.a_(y.a,y.b).k(0,2).A(0,z.gah()))
this.ap()},"$1","gfF",4,0,1],
jJ:[function(a){H.e(a,"$isz")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghy",4,0,1],
jI:[function(a){var z,y,x,w,v,u,t
a=H.j(H.e(a,"$isz"),"$isfk")
if(!this.cx)return
if(this.ch){z=a.d.K(0,a.y)
z=new V.a_(z.a,z.b)
z=z.E(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.K(0,a.y)
z=this.au(new V.a_(y.a,y.b).k(0,2).A(0,z.gah()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.R()
x=this.y
if(typeof x!=="number")return H.o(x)
y.sV(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.R()
y=this.x
if(typeof y!=="number")return H.o(y)
x.sV(-z*10*y)}else{z=a.c
y=a.d
x=y.K(0,a.y)
w=this.au(new V.a_(x.a,x.b).k(0,2).A(0,z.gah()))
x=this.c
v=w.a
if(typeof v!=="number")return v.R()
u=this.y
if(typeof u!=="number")return H.o(u)
t=this.cy
if(typeof t!=="number")return H.o(t)
x.sag(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.R()
v=this.x
if(typeof v!=="number")return H.o(v)
x=this.db
if(typeof x!=="number")return H.o(x)
t.sag(0,-u*v+x)
this.b.sV(0)
this.c.sV(0)
y=y.K(0,a.z)
this.dx=this.au(new V.a_(y.a,y.b).k(0,2).A(0,z.gah()))}this.ap()},"$1","ghx",4,0,1],
jH:[function(a){var z,y,x
H.e(a,"$isz")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.E(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.R()
x=this.y
if(typeof x!=="number")return H.o(x)
z.sV(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.R()
z=this.x
if(typeof z!=="number")return H.o(z)
x.sV(-y*10*z)
this.ap()}},"$1","ghw",4,0,1],
b3:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.O()
if(z<y){this.dy=y
x=b.y
this.c.ae(0,x)
this.b.ae(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aL(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.k(0,V.aL(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isan:1},kV:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gu:function(){var z=this.r
if(z==null){z=D.I()
this.r=z}return z},
T:function(a){var z=this.r
if(!(z==null))z.B(a)},
b8:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.I()
z.e=y
z=y}else z=y
y=this.gfK()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.I()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
je:[function(a){var z,y,x,w
H.e(a,"$isz")
if(!J.V(this.b,this.a.b.c))return
H.j(a,"$isds")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.k()
w=z+y*x
if(z!==w){this.d=w
z=new D.N("zoom",z,w,this,[P.B])
z.b=!0
this.T(z)}},"$1","gfK",4,0,1],
b3:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.eS(x,x,x,1)}return this.f},
$isan:1}}],["","",,M,{"^":"",i1:{"^":"at;0e,0f,0a,0b,0c,0d",
gu:function(){var z=this.f
if(z==null){z=D.I()
this.f=z}return z},
a3:[function(a){var z
H.e(a,"$isz")
z=this.f
if(!(z==null))z.B(a)},function(){return this.a3(null)},"dg","$1","$0","gY",0,2,0],
jB:[function(a,b){var z,y,x,w,v,u,t,s,r
z=M.aP
H.p(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gY(),w={func:1,ret:-1,args:[D.z]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=b[u]
if(t!=null){s=t.gu()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.ci(a,b,this,[z])
z.b=!0
this.a3(z)},"$2","gh7",8,0,16],
jC:[function(a,b){var z,y,x,w,v
z=M.aP
H.p(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gY(),w=0;w<b.length;b.length===y||(0,H.C)(b),++w){v=b[w]
if(v!=null)v.gu().P(0,x)}z=new D.cj(a,b,this,[z])
z.b=!0
this.a3(z)},"$2","gh8",8,0,16],
ad:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.aB(z,z.length,0,[H.x(z,0)]);z.C();){y=z.d
if(!(y==null))y.ad(a)}this.e=!1},
$asi:function(){return[M.aP]},
$asat:function(){return[M.aP]},
$isaP:1},i6:{"^":"b;0a,0b,0c,0d,0e,0f",
gu:function(){var z=this.f
if(z==null){z=D.I()
this.f=z}return z},
a3:[function(a){var z
H.e(a,"$isz")
z=this.f
if(!(z==null))z.B(a)},function(){return this.a3(null)},"dg","$1","$0","gY",0,2,0],
sb9:function(a){var z,y
if(a==null)a=new X.iE()
z=this.a
if(z!==a){if(z!=null)z.gu().P(0,this.gY())
y=this.a
this.a=a
a.gu().h(0,this.gY())
z=new D.N("camera",y,this.a,this,[X.cC])
z.b=!0
this.a3(z)}},
sbh:function(a,b){var z,y
if(b==null)b=X.eB(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gu().P(0,this.gY())
y=this.b
this.b=b
b.gu().h(0,this.gY())
z=new D.N("target",y,this.b,this,[X.cO])
z.b=!0
this.a3(z)}},
sb2:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gu().P(0,this.gY())
y=this.c
this.c=a
if(a!=null)a.gu().h(0,this.gY())
z=new D.N("technique",y,this.c,this,[O.bU])
z.b=!0
this.a3(z)}},
ad:function(a){var z
a.cU(this.c)
this.b.Z(a)
this.a.Z(a)
z=this.c
if(z!=null)z.ae(0,a)
this.d.ae(0,a)
this.d.ad(a)
this.a.aj(a)
this.b.aj(a)
a.cS()},
$isaP:1,
t:{
ek:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new M.i6()
z.sb9(a)
z.sbh(0,b)
z.sb2(c)
y=E.ey(null,!0,null,"",null,null)
x=F.f5()
w=x.a
v=new V.Q(-1,-1,1)
v=v.A(0,Math.sqrt(v.E(v)))
u=w.bu(new V.bR(1,2,4,6),new V.aI(1,0,0,1),new V.a7(-1,-1,0),new V.X(0,1),v,null)
w=x.a
v=new V.Q(1,-1,1)
v=v.A(0,Math.sqrt(v.E(v)))
t=w.bu(new V.bR(0,3,4,6),new V.aI(0,0,1,1),new V.a7(1,-1,0),new V.X(1,1),v,null)
w=x.a
v=new V.Q(1,1,1)
v=v.A(0,Math.sqrt(v.E(v)))
s=w.bu(new V.bR(0,2,5,6),new V.aI(0,1,0,1),new V.a7(1,1,0),new V.X(1,0),v,null)
w=x.a
v=new V.Q(-1,1,1)
v=v.A(0,Math.sqrt(v.E(v)))
r=w.bu(new V.bR(0,2,4,7),new V.aI(1,1,0,1),new V.a7(-1,1,0),new V.X(0,0),v,null)
x.d.hX(H.c([u,t,s,r],[F.ax]))
x.aE()
y.sbV(0,x)
z.d=y
z.e=null
return z}}},iq:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
a3:[function(a){var z
H.e(a,"$isz")
z=this.x
if(!(z==null))z.B(a)},function(){return this.a3(null)},"dg","$1","$0","gY",0,2,0],
jk:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.aW
H.p(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gY(),w={func:1,ret:-1,args:[D.z]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=b[u]
if(t!=null){if(t.ga8()==null){s=new D.bi()
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
this.a3(z)},"$2","gfQ",8,0,8],
jl:[function(a,b){var z,y,x,w,v,u
z=E.aW
H.p(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gY(),w=0;w<b.length;b.length===y||(0,H.C)(b),++w){v=b[w]
if(v!=null){if(v.ga8()==null){u=new D.bi()
u.d=0
v.sa8(u)}v.ga8().P(0,x)}}z=new D.cj(a,b,this,[z])
z.b=!0
this.a3(z)},"$2","gfR",8,0,8],
sb9:function(a){var z,y
if(a==null)a=X.eY(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null)z.gu().P(0,this.gY())
y=this.a
this.a=a
a.gu().h(0,this.gY())
z=new D.N("camera",y,this.a,this,[X.cC])
z.b=!0
this.a3(z)}},
sbh:function(a,b){var z,y
if(b==null)b=X.eB(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gu().P(0,this.gY())
y=this.b
this.b=b
b.gu().h(0,this.gY())
z=new D.N("target",y,this.b,this,[X.cO])
z.b=!0
this.a3(z)}},
sb2:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gu().P(0,this.gY())
y=this.c
this.c=a
if(a!=null)a.gu().h(0,this.gY())
z=new D.N("technique",y,this.c,this,[O.bU])
z.b=!0
this.a3(z)}},
gu:function(){var z=this.x
if(z==null){z=D.I()
this.x=z}return z},
ad:function(a){var z
a.cU(this.c)
this.b.Z(a)
this.a.Z(a)
z=this.c
if(z!=null)z.ae(0,a)
for(z=this.d.a,z=new J.aB(z,z.length,0,[H.x(z,0)]);z.C();)z.d.ae(0,a)
for(z=this.d.a,z=new J.aB(z,z.length,0,[H.x(z,0)]);z.C();)z.d.ad(a)
this.a.toString
a.cy.aI()
a.db.aI()
this.b.aj(a)
a.cS()},
$isaP:1},aP:{"^":"b;"}}],["","",,A,{"^":"",e8:{"^":"b;a,b,c"},hP:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
ib:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
cA:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},et:{"^":"cN;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,a,b,0c,0d,0e,0f,0r,0x,0y",
ab:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.eY(c)
b.a.uniform1i(b.d,0)}}},eQ:{"^":"cN;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aw,0ar,0by,0e3,0bz,0bA,0e4,0e5,0bB,0bC,0e6,0e7,0bD,0bE,0e8,0e9,0bF,0ea,0eb,0bG,0ec,0ed,0bH,0bI,0bJ,0ee,0ef,0bK,0bL,0eg,0eh,0bM,0ei,0cC,0ej,0cD,0ek,0cE,0el,0cF,0em,0cG,0en,0cH,a,b,0c,0d,0e,0f,0r,0x,0y",
f7:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.z=a1
z=new P.ao("")
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
a1.hB(z)
a1.hI(z)
a1.hC(z)
a1.hQ(z)
a1.hR(z)
a1.hK(z)
a1.hV(z)
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
z=new P.ao("")
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
v.hF(z)
v.hA(z)
v.hD(z)
v.hG(z)
v.hO(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.hM(z)
v.hN(z)}v.hJ(z)
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
p=H.c([],[P.f])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.n(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.hE(z)
v.hL(z)
v.hP(z)
v.hS(z)
v.hT(z)
v.hU(z)
v.hH(z)}r=z.a+="// === Main ===\n"
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
o=H.c([],[P.f])
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
this.cK(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a1.fr)this.id=H.j(this.y.q(0,"invViewMat"),"$isaw")
if(y)this.dy=H.j(this.y.q(0,"objMat"),"$isaw")
if(w)this.fr=H.j(this.y.q(0,"viewObjMat"),"$isaw")
this.fy=H.j(this.y.q(0,"projViewObjMat"),"$isaw")
if(a1.x2)this.k1=H.j(this.y.q(0,"txt2DMat"),"$iscp")
if(a1.y1)this.k2=H.j(this.y.q(0,"txtCubeMat"),"$isaw")
if(a1.y2)this.k3=H.j(this.y.q(0,"colorMat"),"$isaw")
this.r1=H.c([],[A.aw])
y=a1.aw
if(y>0){this.k4=H.e(this.y.q(0,"bendMatCount"),"$isO")
for(m=0;m<y;++m){x=this.r1
w=this.y
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.t(P.v("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.j(l,"$isaw"))}}y=a1.a
if(y!==C.c){this.r2=H.j(this.y.q(0,"emissionClr"),"$isP")
switch(y){case C.c:break
case C.i:break
case C.f:this.rx=H.j(this.y.q(0,"emissionTxt"),"$isal")
this.x1=H.j(this.y.q(0,"nullEmissionTxt"),"$isO")
break
case C.h:this.ry=H.j(this.y.q(0,"emissionTxt"),"$isap")
this.x1=H.j(this.y.q(0,"nullEmissionTxt"),"$isO")
break}}y=a1.b
if(y!==C.c){this.x2=H.j(this.y.q(0,"ambientClr"),"$isP")
switch(y){case C.c:break
case C.i:break
case C.f:this.y1=H.j(this.y.q(0,"ambientTxt"),"$isal")
this.aw=H.j(this.y.q(0,"nullAmbientTxt"),"$isO")
break
case C.h:this.y2=H.j(this.y.q(0,"ambientTxt"),"$isap")
this.aw=H.j(this.y.q(0,"nullAmbientTxt"),"$isO")
break}}y=a1.c
if(y!==C.c){this.ar=H.j(this.y.q(0,"diffuseClr"),"$isP")
switch(y){case C.c:break
case C.i:break
case C.f:this.by=H.j(this.y.q(0,"diffuseTxt"),"$isal")
this.bz=H.j(this.y.q(0,"nullDiffuseTxt"),"$isO")
break
case C.h:this.e3=H.j(this.y.q(0,"diffuseTxt"),"$isap")
this.bz=H.j(this.y.q(0,"nullDiffuseTxt"),"$isO")
break}}y=a1.d
if(y!==C.c){this.bA=H.j(this.y.q(0,"invDiffuseClr"),"$isP")
switch(y){case C.c:break
case C.i:break
case C.f:this.e4=H.j(this.y.q(0,"invDiffuseTxt"),"$isal")
this.bB=H.j(this.y.q(0,"nullInvDiffuseTxt"),"$isO")
break
case C.h:this.e5=H.j(this.y.q(0,"invDiffuseTxt"),"$isap")
this.bB=H.j(this.y.q(0,"nullInvDiffuseTxt"),"$isO")
break}}y=a1.e
if(y!==C.c){this.bE=H.j(this.y.q(0,"shininess"),"$isa0")
this.bC=H.j(this.y.q(0,"specularClr"),"$isP")
switch(y){case C.c:break
case C.i:break
case C.f:this.e6=H.j(this.y.q(0,"specularTxt"),"$isal")
this.bD=H.j(this.y.q(0,"nullSpecularTxt"),"$isO")
break
case C.h:this.e7=H.j(this.y.q(0,"specularTxt"),"$isap")
this.bD=H.j(this.y.q(0,"nullSpecularTxt"),"$isO")
break}}switch(a1.f){case C.c:break
case C.i:break
case C.f:this.e8=H.j(this.y.q(0,"bumpTxt"),"$isal")
this.bF=H.j(this.y.q(0,"nullBumpTxt"),"$isO")
break
case C.h:this.e9=H.j(this.y.q(0,"bumpTxt"),"$isap")
this.bF=H.j(this.y.q(0,"nullBumpTxt"),"$isO")
break}if(a1.dy){this.ea=H.j(this.y.q(0,"envSampler"),"$isap")
this.eb=H.j(this.y.q(0,"nullEnvTxt"),"$isO")
y=a1.r
if(y!==C.c){this.bG=H.j(this.y.q(0,"reflectClr"),"$isP")
switch(y){case C.c:break
case C.i:break
case C.f:this.ec=H.j(this.y.q(0,"reflectTxt"),"$isal")
this.bH=H.j(this.y.q(0,"nullReflectTxt"),"$isO")
break
case C.h:this.ed=H.j(this.y.q(0,"reflectTxt"),"$isap")
this.bH=H.j(this.y.q(0,"nullReflectTxt"),"$isO")
break}}y=a1.x
if(y!==C.c){this.bI=H.j(this.y.q(0,"refraction"),"$isa0")
this.bJ=H.j(this.y.q(0,"refractClr"),"$isP")
switch(y){case C.c:break
case C.i:break
case C.f:this.ee=H.j(this.y.q(0,"refractTxt"),"$isal")
this.bK=H.j(this.y.q(0,"nullRefractTxt"),"$isO")
break
case C.h:this.ef=H.j(this.y.q(0,"refractTxt"),"$isap")
this.bK=H.j(this.y.q(0,"nullRefractTxt"),"$isO")
break}}}y=a1.y
if(y!==C.c){this.bL=H.j(this.y.q(0,"alpha"),"$isa0")
switch(y){case C.c:break
case C.i:break
case C.f:this.eg=H.j(this.y.q(0,"alphaTxt"),"$isal")
this.bM=H.j(this.y.q(0,"nullAlphaTxt"),"$isO")
break
case C.h:this.eh=H.j(this.y.q(0,"alphaTxt"),"$isap")
this.bM=H.j(this.y.q(0,"nullAlphaTxt"),"$isO")
break}}this.cC=H.c([],[A.fx])
this.cD=H.c([],[A.fy])
this.cE=H.c([],[A.fz])
this.cF=H.c([],[A.fA])
this.cG=H.c([],[A.fB])
this.cH=H.c([],[A.fC])
if(a1.k2){y=a1.z
if(y>0){this.ei=H.e(this.y.q(0,"dirLightCount"),"$isO")
for(m=0;m<y;++m){x=this.y
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isP")
x=this.y
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isP")
x=this.cC;(x&&C.a).h(x,new A.fx(m,l,k))}}y=a1.Q
if(y>0){this.ej=H.e(this.y.q(0,"pntLightCount"),"$isO")
for(m=0;m<y;++m){x=this.y
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isP")
x=this.y
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isP")
x=this.y
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isP")
x=this.y
w="pntLights["+m+"].att0"
i=x.j(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isa0")
x=this.y
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isa0")
x=this.y
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isa0")
x=this.cD;(x&&C.a).h(x,new A.fy(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.ek=H.e(this.y.q(0,"spotLightCount"),"$isO")
for(m=0;m<y;++m){x=this.y
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isP")
x=this.y
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isP")
x=this.y
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isP")
x=this.y
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isP")
x=this.y
w="spotLights["+m+"].cutoff"
h=x.j(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isa0")
x=this.y
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isa0")
x=this.y
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isa0")
x=this.y
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isa0")
x=this.y
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isa0")
x=this.cE;(x&&C.a).h(x,new A.fz(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.el=H.e(this.y.q(0,"txtDirLightCount"),"$isO")
for(m=0;m<y;++m){x=this.y
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isP")
x=this.y
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isP")
x=this.y
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isP")
x=this.y
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isP")
x=this.y
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isP")
x=this.y
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isO")
x=this.y
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isal")
x=this.cF;(x&&C.a).h(x,new A.fA(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.em=H.e(this.y.q(0,"txtPntLightCount"),"$isO")
for(m=0;m<y;++m){x=this.y
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isP")
x=this.y
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isP")
x=this.y
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$iscp")
x=this.y
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isP")
x=this.y
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isO")
x=this.y
w="txtPntLights["+m+"].att0"
g=x.j(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isa0")
x=this.y
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isa0")
x=this.y
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isa0")
x=this.y
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isap")
x=this.cG;(x&&C.a).h(x,new A.fB(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.en=H.e(this.y.q(0,"txtSpotLightCount"),"$isO")
for(m=0;m<y;++m){x=this.y
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isP")
x=this.y
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isP")
x=this.y
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isP")
x=this.y
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isP")
x=this.y
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isP")
x=this.y
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isO")
x=this.y
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isP")
x=this.y
w="txtSpotLights["+m+"].tuScalar"
e=x.j(0,w)
if(e==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isa0")
x=this.y
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isa0")
x=this.y
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isa0")
x=this.y
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(b,"$isa0")
x=this.y
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a,"$isa0")
x=this.y
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.t(P.v("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a0,"$isal")
x=this.cH;(x&&C.a).h(x,new A.fC(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
ab:function(a,b,c){b.a.uniform1i(b.d,1)},
am:function(a,b,c){b.a.uniform1i(b.d,1)},
t:{
j5:function(a,b){var z,y
z=a.ar
y=new A.eQ(b,z)
y.bZ(b,z)
y.f7(a,b)
return y}}},j8:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aw,ar,by",
hB:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aw+"];\n"
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
hI:function(a){var z
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
hC:function(a){var z
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
hQ:function(a){var z,y
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
hR:function(a){var z,y
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
hK:function(a){var z
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
hV:function(a){var z
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
aA:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.h(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.at(c,1))+"Txt;\n"
a.a=z
if(b===C.f)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
hF:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aA(a,z,"emission")
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
hA:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aA(a,z,"ambient")
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
hD:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aA(a,z,"diffuse")
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
hG:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aA(a,z,"invDiffuse")
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
hO:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aA(a,z,"specular")
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
hJ:function(a){var z,y
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
hM:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aA(a,z,"reflect")
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
hN:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aA(a,z,"refract")
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
hE:function(a){var z,y
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
hL:function(a){var z,y
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
hP:function(a){var z,y
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
hS:function(a){var z,y,x
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
hT:function(a){var z,y,x
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
hU:function(a){var z,y,x
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
hH:function(a){var z
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
i:function(a){return this.ar}},fx:{"^":"b;a,b,c"},fA:{"^":"b;a,b,c,d,e,f,r,x"},fy:{"^":"b;a,b,c,d,e,f,r"},fB:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fz:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fC:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cN:{"^":"d5;",
bZ:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
cK:function(a,b,c){var z,y,x
this.c=b
this.d=c
this.e=this.ds(b,35633)
this.f=this.ds(this.d,35632)
z=this.a
y=z.createProgram()
this.r=y
z.attachShader(y,this.e)
z.attachShader(this.r,this.f)
z.linkProgram(this.r)
if(!H.dT(z.getProgramParameter(this.r,35714))){x=z.getProgramInfoLog(this.r)
z.deleteProgram(this.r)
H.t(P.v("Failed to link shader: "+H.k(x)))}this.hr()
this.ht()},
Z:function(a){a.a.useProgram(this.r)
this.x.ib()},
ds:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.dT(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.v("Error compiling shader '"+H.k(y)+"': "+H.k(x)))}return y},
hr:function(){var z,y,x,w,v,u
z=H.c([],[A.e8])
y=this.a
x=H.F(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.e8(y,v.name,u))}this.x=new A.hP(z)},
ht:function(){var z,y,x,w,v,u
z=H.c([],[A.ae])
y=this.a
x=H.F(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.i8(v.type,v.size,v.name,u))}this.y=new A.kE(z)},
aP:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.O(z,y,b,c)
else return A.dF(z,y,b,a,c)},
fw:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.al(z,y,b,c)
else return A.dF(z,y,b,a,c)},
fz:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ap(z,y,b,c)
else return A.dF(z,y,b,a,c)},
bt:function(a,b){return new P.fQ(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
i8:function(a,b,c,d){switch(a){case 5120:return this.aP(b,c,d)
case 5121:return this.aP(b,c,d)
case 5122:return this.aP(b,c,d)
case 5123:return this.aP(b,c,d)
case 5124:return this.aP(b,c,d)
case 5125:return this.aP(b,c,d)
case 5126:return new A.a0(this.a,this.r,c,d)
case 35664:return new A.kz(this.a,this.r,c,d)
case 35665:return new A.P(this.a,this.r,c,d)
case 35666:return new A.kC(this.a,this.r,c,d)
case 35667:return new A.kA(this.a,this.r,c,d)
case 35668:return new A.kB(this.a,this.r,c,d)
case 35669:return new A.kD(this.a,this.r,c,d)
case 35674:return new A.kG(this.a,this.r,c,d)
case 35675:return new A.cp(this.a,this.r,c,d)
case 35676:return new A.aw(this.a,this.r,c,d)
case 35678:return this.fw(b,c,d)
case 35680:return this.fz(b,c,d)
case 35670:throw H.a(this.bt("BOOL",c))
case 35671:throw H.a(this.bt("BOOL_VEC2",c))
case 35672:throw H.a(this.bt("BOOL_VEC3",c))
case 35673:throw H.a(this.bt("BOOL_VEC4",c))
default:throw H.a(P.v("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}},cD:{"^":"b;a,b",
i:function(a){return this.b}},f6:{"^":"cN;0z,0Q,0ch,0cx,0cy,0db,a,b,0c,0d,0e,0f,0r,0x,0y"},ae:{"^":"b;"},kE:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
q:function(a,b){var z=this.j(0,b)
if(z==null)throw H.a(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.U()},
ik:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.C)(z),++w)x+=z[w].i(0)+a
return x},
U:function(){return this.ik("\n")}},O:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform1i: "+H.k(this.c)}},kA:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform2i: "+H.k(this.c)}},kB:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform3i: "+H.k(this.c)}},kD:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform4i: "+H.k(this.c)}},ky:{"^":"ae;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.k(this.c)},
t:{
dF:function(a,b,c,d,e){var z=new A.ky(a,b,c,e)
z.f=d
z.e=P.iX(d,0,!1,P.m)
return z}}},a0:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform1f: "+H.k(this.c)}},kz:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform2f: "+H.k(this.c)}},P:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform3f: "+H.k(this.c)}},kC:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform4f: "+H.k(this.c)}},kG:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.k(this.c)}},cp:{"^":"ae;a,b,c,d",
a6:function(a){var z=new Float32Array(H.bA(H.p(a,"$isd",[P.B],"$asd")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.k(this.c)}},aw:{"^":"ae;a,b,c,d",
a6:function(a){var z=new Float32Array(H.bA(H.p(a,"$isd",[P.B],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.k(this.c)}},al:{"^":"ae;a,b,c,d",
eY:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.k(this.c)}},ap:{"^":"ae;a,b,c,d",
eZ:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.k(this.c)}}}],["","",,F,{"^":"",
nX:function(a,b,c,d){return F.ns(c,a,d,b,new F.nY())},
ns:function(a,b,c,d,e){var z=F.nV(a,b,new F.nt(H.l(e,{func:1,ret:V.a7,args:[P.B]}),d,b,c),null)
if(z==null)return
z.aE()
z.iB(new F.l8(),new F.jk())
return z},
nV:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.ax,P.B,P.B]})
if(a<1)return
if(b<1)return
z=F.f5()
y=H.c([],[F.ax])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cS(null,null,new V.aI(u,0,0,1),null,null,new V.X(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.e_(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cS(null,null,new V.aI(o,n,m,1),null,null,new V.X(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.e_(d))}}z.d.hY(a+1,b+1,y)
return z},
nY:{"^":"n:47;",
$1:function(a){return new V.a7(Math.cos(a),Math.sin(a),0)}},
nt:{"^":"n:48;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.e2(y.$1(z),x)
x=J.e2(y.$1(z+3.141592653589793/this.c),x).K(0,w)
x=new V.Q(x.a,x.b,x.c)
v=x.A(0,Math.sqrt(x.E(x)))
u=new V.Q(1,0,0)
y=v.aF(!v.w(0,u)?new V.Q(0,0,1):u)
t=y.A(0,Math.sqrt(y.E(y)))
y=t.aF(v)
u=y.A(0,Math.sqrt(y.E(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.k(0,y*x)
x=t.k(0,r*x)
x=w.I(0,new V.a7(y.a-x.a,y.b-x.b,y.c-x.c))
if(!J.V(a.f,x)){a.f=x
y=a.a
if(y!=null)y.ai()}}},
av:{"^":"b;0a,0b,0c,0d,0e",
bb:function(){if(!this.ge1()){C.a.P(this.a.a.d.b,this)
this.a.a.ai()}this.hd()
this.he()
this.hf()},
ho:function(a){this.a=a
C.a.h(a.d.b,this)},
hp:function(a){this.b=a
C.a.h(a.d.c,this)},
hq:function(a){this.c=a
C.a.h(a.d.d,this)},
hd:function(){var z=this.a
if(z!=null){C.a.P(z.d.b,this)
this.a=null}},
he:function(){var z=this.b
if(z!=null){C.a.P(z.d.c,this)
this.b=null}},
hf:function(){var z=this.c
if(z!=null){C.a.P(z.d.d,this)
this.c=null}},
ge1:function(){return this.a==null||this.b==null||this.c==null},
fo:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.Q(0,0,0)
if(y!=null)v=v.I(0,y)
if(x!=null)v=v.I(0,x)
if(w!=null)v=v.I(0,w)
if(v.ez())return
return v.A(0,Math.sqrt(v.E(v)))},
fs:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.K(0,y)
z=new V.Q(z.a,z.b,z.c)
v=z.A(0,Math.sqrt(z.E(z)))
z=w.K(0,y)
z=new V.Q(z.a,z.b,z.c)
z=v.aF(z.A(0,Math.sqrt(z.E(z))))
return z.A(0,Math.sqrt(z.E(z)))},
ct:function(){if(this.d!=null)return!0
var z=this.fo()
if(z==null){z=this.fs()
if(z==null)return!1}this.d=z
this.a.a.ai()
return!0},
fn:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.Q(0,0,0)
if(y!=null)v=v.I(0,y)
if(x!=null)v=v.I(0,x)
if(w!=null)v=v.I(0,w)
if(v.ez())return
return v.A(0,Math.sqrt(v.E(v)))},
fq:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.q.$2(n,0)){z=r.K(0,u)
z=new V.Q(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.E(z)))
if(o.a-p.a<0)m=m.R(0)}else{l=(z-q.b)/n
z=r.K(0,u).k(0,l).I(0,u).K(0,x)
z=new V.Q(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.E(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.R(0)}z=this.d
if(z!=null){k=z.A(0,Math.sqrt(z.E(z)))
z=k.aF(m)
z=z.A(0,Math.sqrt(z.E(z))).aF(k)
m=z.A(0,Math.sqrt(z.E(z)))}return m},
cr:function(){if(this.e!=null)return!0
var z=this.fn()
if(z==null){z=this.fq()
if(z==null)return!1}this.e=z
this.a.a.ai()
return!0},
gi4:function(a){if(J.V(this.a,this.b))return!0
if(J.V(this.b,this.c))return!0
if(J.V(this.c,this.a))return!0
return!1},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.U()},
G:function(a){var z,y
if(this.ge1())return a+"disposed"
z=a+C.b.aH(J.am(this.a.e),0)+", "+C.b.aH(J.am(this.b.e),0)+", "+C.b.aH(J.am(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
U:function(){return this.G("")},
t:{
cf:function(a,b,c){var z,y,x
z=new F.av()
y=a.a
if(y==null)H.t(P.v("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.t(P.v("May not create a face with vertices attached to different shapes."))
z.ho(a)
z.hp(b)
z.hq(c)
C.a.h(z.a.a.d.b,z)
z.a.a.ai()
return z}}},
iu:{"^":"b;"},
k0:{"^":"iu;",
bc:function(a,b,c){var z,y
z=b.a
z.a.a.D()
z=z.e
y=c.a
y.a.a.D()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.D()
z=z.e
y=c.b
y.a.a.D()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.D()
z=z.e
y=c.c
y.a.a.D()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.D()
z=z.e
y=c.b
y.a.a.D()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.D()
z=z.e
y=c.c
y.a.a.D()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.D()
z=z.e
y=c.a
y.a.a.D()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.D()
z=z.e
y=c.c
y.a.a.D()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.D()
z=z.e
y=c.a
y.a.a.D()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.D()
z=z.e
y=c.b
y.a.a.D()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
eJ:{"^":"b;"},
iP:{"^":"b;"},
kx:{"^":"iP;",
bc:function(a,b,c){var z,y
z=b.a
z.a.a.D()
z=z.e
y=c.a
y.a.a.D()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.D()
z=z.e
y=c.b
y.a.a.D()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.D()
z=z.e
y=c.b
y.a.a.D()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.D()
z=z.e
y=c.a
y.a.a.D()
y=y.e
return z==null?y==null:z===y}else return!1}}},
f_:{"^":"b;"},
f4:{"^":"b;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.I()
this.e=z}return z},
aE:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aE()||!1
if(!this.a.aE())y=!1
z=this.e
if(!(z==null))z.aK(0)
return y},
fD:function(a,b,c,d,e){var z,y,x
H.p(d,"$isd",[F.ax],"$asd")
H.p(e,"$isd",[P.m],"$asd")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
if(a.bc(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
iB:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
for(y=this.a.c.length-1,z=[F.ax],x=[P.m];y>=0;--y){w=this.a.c
if(y>=w.length)return H.h(w,y)
v=w[y]
u=H.c([],z)
t=H.c([],x)
if(this.fD(a,v,y,u,t))b.iA(u)}this.a.D()
this.c.cX()
this.d.cX()
this.b.iU()
this.c.cY(new F.kx())
this.d.cY(new F.k0())
z=this.e
if(!(z==null))z.aK(0)},
cq:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aq()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$b0().a)!==0)++w
if((x&$.$get$b_().a)!==0)++w
if((x&$.$get$aF().a)!==0)++w
if((x&$.$get$b1().a)!==0)++w
if((x&$.$get$bX().a)!==0)++w
if((x&$.$get$bY().a)!==0)++w
if((x&$.$get$by().a)!==0)++w
if((x&$.$get$aZ().a)!==0)++w
v=b.gdc(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.B
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.ed])
for(r=0,q=0;q<w;++q){p=b.i0(q)
o=p.gdc(p)
C.a.p(s,q,new Z.ed(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.h(y,n)
m=y[n].iv(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.p(t,l,m[k]);++l}}r+=o}H.p(t,"$isd",[x],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bA(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cB(new Z.fM(34962,j),s,b)
i.b=H.c([],[Z.cH])
if(this.b.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.D()
C.a.h(h,g.e)}f=Z.dJ(y,34963,H.p(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cH(0,h.length,f))}if(this.c.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.D()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.D()
C.a.h(h,g.e)}f=Z.dJ(y,34963,H.p(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cH(1,h.length,f))}if(this.d.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.D()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.D()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].c
g.a.a.D()
C.a.h(h,g.e)}f=Z.dJ(y,34963,H.p(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cH(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.f])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.G("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.G("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.G("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.G("   "))}return C.a.n(z,"\n")},
b0:function(a){var z=this.e
if(!(z==null))z.B(a)},
ai:function(){return this.b0(null)},
t:{
f5:function(){var z,y
z=new F.f4()
y=new F.l3(z)
y.b=!1
y.c=H.c([],[F.ax])
z.a=y
y=new F.jV(z)
y.b=H.c([],[F.f_])
z.b=y
y=new F.jU(z)
y.b=H.c([],[F.eJ])
z.c=y
y=new F.jT(z)
y.b=H.c([],[F.av])
z.d=y
z.e=null
return z}}},
jT:{"^":"b;a,0b",
hX:function(a){var z,y,x,w,v
H.p(a,"$isd",[F.ax],"$asd")
z=H.c([],[F.av])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.cf(y,w,v))}return z},
hY:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.p(c,"$isd",[F.ax],"$asd")
z=H.c([],[F.av])
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
C.a.h(z,F.cf(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.cf(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.cf(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.cf(q,n,r))}u=!u}w=!w}return z},
gm:function(a){return this.b.length},
cY:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.j(0,w)
for(u=w-1;u>=0;--u){t=x.d.j(0,u)
if(a.bc(0,v,t)){v.bb()
break}}}}},
cX:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
x=y[z]
y=x.gi4(x)
if(y)x.bb()}},
aE:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.C)(z),++w)if(!z[w].ct())x=!1
return x},
cs:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.C)(z),++w)if(!z[w].cr())x=!1
return x},
i:function(a){return this.U()},
G:function(a){var z,y,x,w
z=H.c([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].G(a))
return C.a.n(z,"\n")},
U:function(){return this.G("")}},
jU:{"^":"b;a,0b",
gm:function(a){return this.b.length},
cY:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.h(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.j(0,w)
for(u=w-1;u>=0;--u){t=x.c.j(0,u)
if(a.bc(0,v,t)){v.bb()
break}}}}},
cX:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
x=y[z]
y=J.V(x.a,x.b)
if(y)x.bb()}},
i:function(a){return this.U()},
G:function(a){var z,y,x,w
z=H.c([],[P.f])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.h(w,x)
C.a.h(z,w[x].G(a+(""+x+". ")))}return C.a.n(z,"\n")},
U:function(){return this.G("")}},
jV:{"^":"b;a,0b",
gm:function(a){return this.b.length},
iU:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
y=y[z]
if(y.a.b.b.length>1)y.bb()}},
i:function(a){return this.U()},
G:function(a){var z,y,x,w
z=H.c([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].G(a))
return C.a.n(z,"\n")},
U:function(){return this.G("")}},
ax:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
e_:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cS(this.cx,x,u,z,y,w,v,a,t)},
iv:function(a){var z,y
z=J.L(a)
if(z.w(a,$.$get$aq())){z=this.f
y=[P.B]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.w(a,$.$get$b0())){z=this.r
y=[P.B]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.w(a,$.$get$b_())){z=this.x
y=[P.B]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.w(a,$.$get$aF())){z=this.y
y=[P.B]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.w(a,$.$get$b1())){z=this.z
y=[P.B]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.w(a,$.$get$bX())){z=this.Q
y=[P.B]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.w(a,$.$get$bY())){z=this.Q
y=[P.B]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(z.w(a,$.$get$by()))return H.c([this.ch],[P.B])
else if(z.w(a,$.$get$aZ())){z=this.cx
y=[P.B]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.B])},
ct:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.Q(0,0,0)
this.d.H(0,new F.ld(z))
z=z.a
this.r=z.A(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.ai()
z=this.a.e
if(!(z==null))z.aK(0)}return!0},
cr:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.Q(0,0,0)
this.d.H(0,new F.lc(z))
z=z.a
this.x=z.A(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.ai()
z=this.a.e
if(!(z==null))z.aK(0)}return!0},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.U()},
G:function(a){var z,y,x
z=H.c([],[P.f])
C.a.h(z,C.b.aH(J.am(this.e),0))
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
C.a.h(z,V.U(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.n(z,", ")
return a+"{"+x+"}"},
U:function(){return this.G("")},
t:{
cS:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ax()
y=new F.lb(z)
y.b=H.c([],[F.f_])
z.b=y
y=new F.l7(z)
x=[F.eJ]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.l4(z)
x=[F.av]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
z.d=y
h=$.$get$fJ()
z.e=0
y=$.$get$aq()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$b0().a)!==0?e:null
z.x=(x&$.$get$b_().a)!==0?b:null
z.y=(x&$.$get$aF().a)!==0?f:null
z.z=(x&$.$get$b1().a)!==0?g:null
z.Q=(x&$.$get$fK().a)!==0?c:null
z.ch=(x&$.$get$by().a)!==0?i:0
z.cx=(x&$.$get$aZ().a)!==0?a:null
return z}}},
ld:{"^":"n:5;a",
$1:function(a){var z,y
H.e(a,"$isav")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.I(0,z)}}},
lc:{"^":"n:5;a",
$1:function(a){var z,y
H.e(a,"$isav")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.I(0,z)}}},
l3:{"^":"b;a,0b,0c",
D:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.h(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.a(P.v("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.ai()
return!0},
hZ:function(a,b,c,d,e,f,g,h,i){var z=F.cS(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bu:function(a,b,c,d,e,f){return this.hZ(a,null,b,c,null,d,e,f,0)},
gm:function(a){return this.c.length},
aE:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)z[x].ct()
return!0},
cs:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)z[x].cr()
return!0},
i3:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.A(0,Math.sqrt(u*u+t*t+s*s))
if(!J.V(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.B(null)}}}}return!0},
i:function(a){return this.U()},
G:function(a){var z,y,x,w
this.D()
z=H.c([],[P.f])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].G(a))
return C.a.n(z,"\n")},
U:function(){return this.G("")}},
l4:{"^":"b;a,0b,0c,0d",
gm:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.h(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.h(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.h(z,b)
return z[b]},
H:function(a,b){H.l(b,{func:1,ret:-1,args:[F.av]})
C.a.H(this.b,b)
C.a.H(this.c,new F.l5(this,b))
C.a.H(this.d,new F.l6(this,b))},
i:function(a){return this.U()},
G:function(a){var z,y,x,w
z=H.c([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].G(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].G(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].G(a))
return C.a.n(z,"\n")},
U:function(){return this.G("")}},
l5:{"^":"n:5;a,b",
$1:function(a){H.e(a,"$isav")
if(!J.V(a.a,this.a))this.b.$1(a)}},
l6:{"^":"n:5;a,b",
$1:function(a){var z
H.e(a,"$isav")
z=this.a
if(!J.V(a.a,z)&&!J.V(a.b,z))this.b.$1(a)}},
l7:{"^":"b;a,0b,0c",
gm:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.h(z,x)
return z[x]}else{if(b<0)return H.h(z,b)
return z[b]}},
i:function(a){return this.U()},
G:function(a){var z,y,x,w
z=H.c([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].G(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].G(a))
return C.a.n(z,"\n")},
U:function(){return this.G("")}},
l9:{"^":"b;"},
l8:{"^":"l9;",
bc:function(a,b,c){return J.V(b.f,c.f)}},
la:{"^":"b;"},
jk:{"^":"la;",
iA:function(a){var z,y,x,w,v,u,t,s
H.p(a,"$isd",[F.ax],"$asd")
z=new V.Q(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.Q(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.A(0,Math.sqrt(z.E(z)))
for(y=a.length,w=z.a,v=z.b,u=z.c,u=w*w+v*v+u*u,x=0;x<a.length;a.length===y||(0,H.C)(a),++x){t=a[x]
s=z.A(0,Math.sqrt(u))
if(!J.V(t.r,s)){t.r=s
w=t.a
if(w!=null){w=w.e
if(!(w==null))w.B(null)}}}return}},
lb:{"^":"b;a,0b",
gm:function(a){return this.b.length},
i:function(a){return this.U()},
G:function(a){var z,y,x,w
z=H.c([],[P.f])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].G(a))
return C.a.n(z,"\n")},
U:function(){return this.G("")}}}],["","",,O,{"^":"",ie:{"^":"bU;0a,0b,0c,0d,0e,0f,0r",
gu:function(){var z=this.r
if(z==null){z=D.I()
this.r=z}return z},
a4:function(a){var z=this.r
if(!(z==null))z.B(a)},
ay:function(){return this.a4(null)},
sdZ:function(a){var z=this.b
if(z==null?a!=null:z!==a){this.b=a
this.ay()}},
sdX:function(a){var z=this.c
if(z==null?a!=null:z!==a){this.c=a
this.ay()}},
sdW:function(a){var z=a==null?V.ba():a
this.f=z
if(!z.w(0,a)){this.f=a
this.ay()}},
ae:function(a,b){},
S:function(a,b){H.p(a,"$isd",[T.bV],"$asd")
if(b!=null)if(!C.a.W(a,b)){b.a=a.length
C.a.h(a,b)}},
cZ:function(a,b){var z,y,x,w,v,u,t
if(this.a==null){z=H.e(a.fr.j(0,"Distort"),"$iset")
if(z==null){y=a.a
z=new A.et(y,"Distort")
z.bZ(y,"Distort")
z.cK(0,$.ih,$.ig)
z.z=z.x.j(0,"posAttr")
z.Q=z.x.j(0,"txt2DAttr")
z.ch=H.j(z.y.q(0,"projViewObjMat"),"$isaw")
z.cx=H.j(z.y.q(0,"colorTxt2DMat"),"$iscp")
z.cy=H.j(z.y.q(0,"bumpTxt2DMat"),"$iscp")
z.db=H.j(z.y.q(0,"colorTxt"),"$isal")
z.dx=H.j(z.y.q(0,"bumpTxt"),"$isal")
z.dy=H.j(z.y.q(0,"nullColorTxt"),"$isO")
z.fr=H.j(z.y.q(0,"nullBumpTxt"),"$isO")
z.fx=H.j(z.y.q(0,"bumpMat"),"$isaw")
a.ck(z)}this.a=z}if(b.e==null){y=b.d
x=a.a
w=$.$get$aq()
v=$.$get$aF()
v=y.cq(new Z.dI(x),new Z.bc(w.a|v.a))
v.as($.$get$aq()).e=this.a.z.c
v.as($.$get$aF()).e=this.a.Q.c
b.e=v}u=H.c([],[T.bV])
this.S(u,this.b)
this.S(u,this.c)
for(t=0;t<u.length;++t){y=u[t]
if(!y.c&&y.d){y.c=!0
a.a.activeTexture(33984+y.a)
a.a.bindTexture(3553,y.b)}}y=this.a
y.Z(a)
x=this.b
y.ab(y.db,y.dy,x)
x=this.c
y.ab(y.dx,y.fr,x)
x=a.geG()
w=y.ch
w.toString
w.a6(x.a5(0,!0))
x=this.d
w=y.cx
w.toString
w.a6(x.a5(0,!0))
x=this.e
w=y.cy
w.toString
w.a6(x.a5(0,!0))
x=this.f
y=y.fx
y.toString
y.a6(x.a5(0,!0))
y=b.e
if(y instanceof Z.cB){y.Z(a)
y.ad(a)
y.aj(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.x.cA()
for(t=0;t<u.length;++t){y=u[t]
if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(3553,null)}}}},j4:{"^":"bU;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gu:function(){var z=this.dy
if(z==null){z=D.I()
this.dy=z}return z},
a4:[function(a){var z
H.e(a,"$isz")
z=this.dy
if(!(z==null))z.B(a)},function(){return this.a4(null)},"ay","$1","$0","gc_",0,2,0],
hj:[function(a){H.e(a,"$isz")
this.a=null
this.a4(a)},function(){return this.hj(null)},"jG","$1","$0","ghi",0,2,0],
jh:[function(a,b){var z=V.aK
z=new D.ci(a,H.p(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.a4(z)},"$2","gfN",8,0,23],
ji:[function(a,b){var z=V.aK
z=new D.cj(a,H.p(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.a4(z)},"$2","gfO",8,0,23],
dn:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.e.a9(z.e.length+3,4)*4
x=C.e.a9(z.f.length+3,4)*4
w=C.e.a9(z.r.length+3,4)*4
v=C.e.a9(z.x.length+3,4)*4
u=C.e.a9(z.y.length+3,4)*4
t=C.e.a9(z.z.length+3,4)*4
s=C.e.a9(this.e.a.length+3,4)*4
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
a6=$.$get$aq()
if(c){z=$.$get$b0()
a6=new Z.bc(a6.a|z.a)}if(b){z=$.$get$b_()
a6=new Z.bc(a6.a|z.a)}if(a){z=$.$get$aF()
a6=new Z.bc(a6.a|z.a)}if(a0){z=$.$get$b1()
a6=new Z.bc(a6.a|z.a)}if(a2){z=$.$get$aZ()
a6=new Z.bc(a6.a|z.a)}return new A.j8(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
S:function(a,b){H.p(a,"$isd",[T.bV],"$asd")},
ae:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.aB(z,z.length,0,[H.x(z,0)]);z.C();){y=z.d
x=new V.Q(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.d1(x)}}},
cZ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.dn()
y=H.e(a.fr.j(0,z.ar),"$iseQ")
if(y==null){y=A.j5(z,a.a)
a.ck(y)}this.a=y
b.e=null
z=y}x=z.z
w=x.by
z=b.e
if(!(z instanceof Z.cB)){b.e=null
z=null}if(z==null||!z.d.w(0,w)){z=x.r1
if(z)b.d.aE()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.d
u.d.cs()
u.a.cs()
u=u.e
if(!(u==null))u.aK(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.a.i3()
t=t.e
if(!(t==null))t.aK(0)}r=b.d.cq(new Z.dI(a.a),w)
r.as($.$get$aq()).e=this.a.Q.c
if(z)r.as($.$get$b0()).e=this.a.cx.c
if(v)r.as($.$get$b_()).e=this.a.ch.c
if(x.rx)r.as($.$get$aF()).e=this.a.cy.c
if(u)r.as($.$get$b1()).e=this.a.db.c
if(x.x1)r.as($.$get$aZ()).e=this.a.dx.c
b.e=r}z=T.bV
q=H.c([],[z])
this.a.Z(a)
if(x.fx){v=this.a
u=a.dx
u=u.ga2(u)
v=v.dy
v.toString
v.a6(u.a5(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.ga2(u)
t=a.dx
t=u.k(0,t.ga2(t))
a.cx=t
u=t}v=v.fr
v.toString
v.a6(u.a5(0,!0))}v=this.a
u=a.geG()
v=v.fy
v.toString
v.a6(u.a5(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.k1
v.toString
v.a6(u.a5(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.k2
v.toString
v.a6(u.a5(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k3
v.toString
v.a6(C.x.a5(u,!0))}if(x.aw>0){p=this.e.a.length
v=this.a.k4
v.a.uniform1i(v.d,p)
for(v=[P.B],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.h(t,o)
t=t[o]
u.toString
H.e(t,"$isaK")
u=u.r1
if(o>=u.length)return H.h(u,o)
u=u[o]
n=new Float32Array(H.bA(H.p(t.a5(0,!0),"$isd",v,"$asd")))
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
case C.f:this.S(q,this.f.d)
v=this.a
u=this.f.d
v.ab(v.rx,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.h:this.S(q,this.f.e)
v=this.a
u=this.f.e
v.am(v.ry,v.x1,u)
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
case C.f:this.S(q,this.r.d)
v=this.a
u=this.r.d
v.ab(v.y1,v.aw,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.h:this.S(q,this.r.e)
v=this.a
u=this.r.e
v.am(v.y2,v.aw,u)
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
case C.f:this.S(q,this.x.d)
v=this.a
u=this.x.d
v.ab(v.by,v.bz,u)
u=this.a
v=this.x.f
u=u.ar
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.h:this.S(q,this.x.e)
v=this.a
u=this.x.e
v.am(v.e3,v.bz,u)
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
v=v.bA
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.f:this.S(q,this.y.d)
v=this.a
u=this.y.d
v.ab(v.e4,v.bB,u)
u=this.a
v=this.y.f
u=u.bA
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.h:this.S(q,this.y.e)
v=this.a
u=this.y.e
v.am(v.e5,v.bB,u)
u=this.a
v=this.y.f
u=u.bA
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.c:break
case C.i:v=this.a
u=this.z.f
v=v.bC
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bE
u.a.uniform1f(u.d,s)
break
case C.f:this.S(q,this.z.d)
v=this.a
u=this.z.d
v.ab(v.e6,v.bD,u)
u=this.a
v=this.z.f
u=u.bC
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bE
v.a.uniform1f(v.d,s)
break
case C.h:this.S(q,this.z.e)
v=this.a
u=this.z.e
v.am(v.e7,v.bD,u)
u=this.a
v=this.z.f
u=u.bC
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bE
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.ei
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga2(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.C)(v),++k){j=v[k]
t=this.a.cC
if(l>=t.length)return H.h(t,l)
i=t[l]
t=m.d1(j.a)
s=t.a
h=t.b
g=t.c
g=t.A(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.ej
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga2(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.C)(v),++k){j=v[k]
t=this.a.cD
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gbf(j)
s=i.b
h=t.gd5(t)
g=t.gd6(t)
t=t.gd7(t)
s.a.uniform3f(s.d,h,g,t)
t=m.bl(j.gbf(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gav(j)
g=i.d
h=t.gbQ()
s=t.gbm()
t=t.gbv()
g.a.uniform3f(g.d,h,s,t)
t=j.gcl()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gcm()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gcn()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.ek
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga2(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.C)(v),++k){j=v[k]
t=this.a.cE
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gbf(j)
s=i.b
h=t.gd5(t)
g=t.gd6(t)
t=t.gd7(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gcz(j).jO()
g=i.c
h=t.gaW(t)
s=t.gaX(t)
t=t.gaY()
g.a.uniform3f(g.d,h,s,t)
t=m.bl(j.gbf(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gav(j)
s=i.e
h=t.gbQ()
g=t.gbm()
t=t.gbv()
s.a.uniform3f(s.d,h,g,t)
t=j.gjM()
g=i.f
g.a.uniform1f(g.d,t)
t=j.gjK()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gcl()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gcm()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gcn()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.el
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga2(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.C)(v),++k){j=v[k]
s=this.a.cF
if(l>=s.length)return H.h(s,l)
i=s[l]
s=j.gbi()
H.p(q,"$isd",t,"$asd")
if(!C.a.W(q,s)){s.sew(0,q.length)
C.a.h(q,s)}s=j.gcz(j)
h=i.d
g=s.gaW(s)
f=s.gaX(s)
s=s.gaY()
h.a.uniform3f(h.d,g,f,s)
s=j.gbR()
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
s=m.d1(j.gcz(j))
f=s.a
g=s.b
h=s.c
h=s.A(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gav(j)
g=i.f
f=h.gbQ()
s=h.gbm()
h=h.gbv()
g.a.uniform3f(g.d,f,s,h)
h=j.gbi()
s=h.geA(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gdB()
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.gdw())
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.em
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga2(v)
for(v=this.dx.y,u=v.length,t=[P.B],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.C)(v),++k){j=v[k]
h=this.a.cG
if(l>=h.length)return H.h(h,l)
i=h[l]
h=j.gbi()
H.p(q,"$isd",s,"$asd")
if(!C.a.W(q,h)){h.sew(0,q.length)
C.a.h(q,h)}e=m.k(0,j.ga2(j))
h=j.ga2(j).bl(new V.a7(0,0,0))
g=i.b
f=h.gd5(h)
d=h.gd6(h)
h=h.gd7(h)
g.a.uniform3f(g.d,f,d,h)
h=e.bl(new V.a7(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.cN(0)
d=i.d
n=new Float32Array(H.bA(H.p(new V.bO(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a5(0,!0),"$isd",t,"$asd")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gav(j)
h=i.e
f=d.gbQ()
g=d.gbm()
d=d.gbv()
h.a.uniform3f(h.d,f,g,d)
d=j.gbi()
h=d.geA(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gdB()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gdw())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gcl()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gcm()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gcn()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.en
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga2(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.C)(v),++k){j=v[k]
t=this.a.cH
if(l>=t.length)return H.h(t,l)
i=t[l]
t=j.gbi()
H.p(q,"$isd",z,"$asd")
if(!C.a.W(q,t)){t.sew(0,q.length)
C.a.h(q,t)}t=j.gbf(j)
s=i.b
h=t.gd5(t)
g=t.gd6(t)
t=t.gd7(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gcz(j)
g=i.c
h=t.gaW(t)
s=t.gaX(t)
t=t.gaY()
g.a.uniform3f(g.d,h,s,t)
t=j.gbR()
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
t=m.bl(j.gbf(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gbi()
s=t.geA(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gdB()
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.gdw())
t=i.x
t.a.uniform1i(t.d,0)}t=j.gav(j)
s=i.y
h=t.gbQ()
g=t.gbm()
t=t.gbv()
s.a.uniform3f(s.d,h,g,t)
t=j.gjT()
g=i.z
g.a.uniform1f(g.d,t)
t=j.gjU()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gcl()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gcm()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gcn()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.c:break
case C.i:break
case C.f:this.S(q,this.Q.d)
z=this.a
v=this.Q.d
z.ab(z.e8,z.bF,v)
break
case C.h:this.S(q,this.Q.e)
z=this.a
v=this.Q.e
z.am(z.e9,z.bF,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.ga2(v).cN(0)
a.Q=v}z=z.id
z.toString
z.a6(v.a5(0,!0))}if(x.dy){this.S(q,this.ch)
z=this.a
v=this.ch
z.am(z.ea,z.eb,v)
switch(x.r){case C.c:break
case C.i:z=this.a
v=this.cx.f
z=z.bG
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.f:this.S(q,this.cx.d)
z=this.a
v=this.cx.d
z.ab(z.ec,z.bH,v)
v=this.a
z=this.cx.f
v=v.bG
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.h:this.S(q,this.cx.e)
z=this.a
v=this.cx.e
z.am(z.ed,z.bH,v)
v=this.a
z=this.cx.f
v=v.bG
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.c:break
case C.i:z=this.a
v=this.cy.f
z=z.bJ
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bI
v.a.uniform1f(v.d,t)
break
case C.f:this.S(q,this.cy.d)
z=this.a
v=this.cy.d
z.ab(z.ee,z.bK,v)
v=this.a
z=this.cy.f
v=v.bJ
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bI
z.a.uniform1f(z.d,t)
break
case C.h:this.S(q,this.cy.e)
z=this.a
v=this.cy.e
z.am(z.ef,z.bK,v)
v=this.a
z=this.cy.f
v=v.bJ
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bI
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.c
if(v){switch(z){case C.c:break
case C.i:z=this.a
u=this.db.f
z=z.bL
z.a.uniform1f(z.d,u)
break
case C.f:this.S(q,this.db.d)
z=this.a
u=this.db.d
z.ab(z.eg,z.bM,u)
u=this.a
z=this.db.f
u=u.bL
u.a.uniform1f(u.d,z)
break
case C.h:this.S(q,this.db.e)
z=this.a
u=this.db.e
z.am(z.eh,z.bM,u)
u=this.a
z=this.db.f
u=u.bL
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o)q[o].Z(a)
z=b.e
z.Z(a)
z.ad(a)
z.aj(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o)q[o].aj(a)
z=this.a
z.toString
a.a.useProgram(null)
z.x.cA()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dn().ar}},j6:{"^":"dq;0f,a,b,0c,0d,0e"},dq:{"^":"b;",
br:["f4",function(){}]},j7:{"^":"dq;a,b,0c,0d,0e"},bl:{"^":"dq;0f,a,b,0c,0d,0e",
dI:function(a){var z,y
if(!J.V(this.f,a)){z=this.f
this.f=a
y=new D.N(this.b+".color",z,a,this,[V.a3])
y.b=!0
this.a.a4(y)}},
br:["bY",function(){this.f4()
this.dI(new V.a3(1,1,1))}],
sav:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.br()
z=this.a
z.a=null
z.a4(null)}this.dI(b)}},j9:{"^":"bl;0ch,0f,a,b,0c,0d,0e",
hn:function(a){var z,y
z=this.ch
if(!$.q.$2(z,a)){y=this.ch
this.ch=a
z=new D.N(this.b+".refraction",y,a,this,[P.B])
z.b=!0
this.a.a4(z)}},
br:function(){this.bY()
this.hn(1)}},ja:{"^":"bl;0ch,0f,a,b,0c,0d,0e",
cg:function(a){var z,y
z=this.ch
if(!$.q.$2(z,a)){y=this.ch
this.ch=a
z=new D.N(this.b+".shininess",y,a,this,[P.B])
z.b=!0
this.a.a4(z)}},
br:function(){this.bY()
this.cg(100)}},k1:{"^":"bU;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.I()
this.e=z}return z},
a4:[function(a){var z
H.e(a,"$isz")
z=this.e
if(!(z==null))z.B(a)},function(){return this.a4(null)},"ay","$1","$0","gc_",0,2,0],
ae:function(a,b){},
cZ:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.e(a.fr.j(0,"Skybox"),"$isf6")
if(z==null){y=a.a
z=new A.f6(y,"Skybox")
z.bZ(y,"Skybox")
z.cK(0,$.k3,$.k2)
z.z=z.x.j(0,"posAttr")
z.Q=H.j(z.y.j(0,"fov"),"$isa0")
z.ch=H.j(z.y.j(0,"ratio"),"$isa0")
z.cx=H.j(z.y.j(0,"boxClr"),"$isP")
z.cy=H.j(z.y.j(0,"boxTxt"),"$isap")
z.db=H.j(z.y.j(0,"viewMat"),"$isaw")
a.ck(z)}this.a=z}if(b.e==null){y=b.d.cq(new Z.dI(a.a),$.$get$aq())
y.as($.$get$aq()).e=this.a.z.c
b.e=y}y=this.c
if(y!=null){y.a=1
if(!y.c&&y.d>=6){y.c=!0
a.a.activeTexture(33985)
a.a.bindTexture(34067,y.b)}}y=a.d
x=a.c
w=this.a
w.Z(a)
v=this.b
u=w.Q
u.a.uniform1f(u.d,v)
v=w.ch
v.a.uniform1f(v.d,y/x)
x=this.c
w.cy.eZ(x)
x=this.d
y=w.cx
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.ga2(x).cN(0)
w=w.db
w.toString
w.a6(x.a5(0,!0))
y=b.e
if(y instanceof Z.cB){y.Z(a)
y.ad(a)
y.aj(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.x.cA()
y=this.c
if(y!=null)if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(34067,null)}}},bU:{"^":"b;"}}],["","",,T,{"^":"",bV:{"^":"d5;"},kd:{"^":"bV;"},kh:{"^":"kd;0a,0b,0c,0d,0e,0f,0r,0x,0y",
dJ:function(){if(!this.d){this.d=!0
var z=this.y
if(!(z==null))z.cB()}},
gu:function(){var z=this.y
if(z==null){z=D.I()
this.y=z}return z},
t:{
dC:function(a,b){var z=new T.kh()
z.a=a
z.b=b
z.c=!1
z.d=!1
z.e=0
z.f=0
z.r=0
z.x=0
return z}}},fe:{"^":"bV;0a,0b,0c,0d,0e",
gu:function(){var z=this.e
if(z==null){z=D.I()
this.e=z}return z}},ki:{"^":"b;a,0b,0c,0d,0e",
iy:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
z.bindTexture(3553,y)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
z.bindTexture(3553,null);++this.d
x=W.df(null,a,null)
w=T.dC(0,y)
z=W.ac
W.a2(x,"load",H.l(new T.kk(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
ix:function(a){return this.iy(a,!1,!1,!1,!1)},
aQ:function(a,b,c,d,e,f){var z,y
z=W.df(null,c,null);++this.d
y=W.ac
W.a2(z,"load",H.l(new T.kj(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
dH:function(a,b,c){var z,y,x,w
b=V.ca(b,2)
z=V.ca(a.width,2)
y=V.ca(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.da(null,null)
x.width=z
x.height=y
w=H.e(C.l.eS(x,"2d"),"$isef")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.nr(w.getImageData(0,0,x.width,x.height))}}},kk:{"^":"n:12;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.dH(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.u.eJ(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
z.dJ();++x.e}},kj:{"^":"n:12;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.dH(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.u.eJ(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6){x=x.e
if(!(x==null))x.cB()}++z.e}}}],["","",,V,{"^":"",bH:{"^":"b;",
b_:function(a,b){return!0},
i:function(a){return"all"},
$isaX:1},aX:{"^":"b;"},eP:{"^":"b;",
b_:["f3",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)if(z[x].b_(0,b))return!0
return!1}],
i:["dd",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.C)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isaX:1},aC:{"^":"eP;0a",
b_:function(a,b){return!this.f3(0,b)},
i:function(a){return"!["+this.dd(0)+"]"}},jC:{"^":"b;0a,0b",
b_:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var z,y
z=H.bT(this.a)
y=H.bT(this.b)
return z+".."+y},
$isaX:1,
t:{
Y:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.a(P.v("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.b.F(a,0)
y=C.b.F(b,0)
x=new V.jC()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},jR:{"^":"b;0a",
f9:function(a){var z,y
if(a.a.length<=0)throw H.a(P.v("May not create a SetMatcher with zero characters."))
z=new H.b9(0,0,[P.m,P.T])
for(y=new H.dn(a,a.gm(a),0,[H.ag(a,"y",0)]);y.C();)z.p(0,y.d,!0)
this.a=z},
b_:function(a,b){return this.a.bw(0,b)},
i:function(a){var z=this.a
return P.co(z.gaa(z),0,null)},
$isaX:1,
t:{
w:function(a){var z=new V.jR()
z.f9(a)
return z}}},f8:{"^":"b;a,b,0c,0d",
giC:function(a){return this.b},
n:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.fl(this.a.l(0,b))
w.a=H.c([],[V.aX])
w.c=!1
C.a.h(this.c,w)
return w},
ie:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
if(w.b_(0,a))return w}return},
i:function(a){return this.b}},fi:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.e1(this.b,"\n","\\n")
y=H.e1(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},fj:{"^":"b;a,b,0c",
aJ:function(a,b,c){var z,y,x
H.p(c,"$isd",[P.f],"$asd")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.C)(c),++y){x=c[y]
this.c.p(0,x,b)}},
i:function(a){return this.b}},ks:{"^":"b;0a,0b,0c",
l:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.f8(this,b)
z.c=H.c([],[V.fl])
this.a.p(0,b,z)}return z},
N:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.fj(this,a)
y=P.f
z.c=new H.b9(0,0,[y,y])
this.b.p(0,a,z)}return z},
eN:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.fi])
y=this.c
x=[P.m]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.F(a,t)
r=y.ie(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.co(w,0,null)
throw H.a(P.v("Untokenizable string [state: "+y.giC(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.co(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.fi(o==null?p.b:o,q,t)}++t}}},
t:{
cP:function(){var z,y
z=new V.ks()
y=P.f
z.a=new H.b9(0,0,[y,V.f8])
z.b=new H.b9(0,0,[y,V.fj])
return z}}},fl:{"^":"eP;b,0c,0a",
i:function(a){return this.b.b+": "+this.dd(0)}}}],["","",,X,{"^":"",hR:{"^":"cO;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
gu:function(){var z=this.fr
if(z==null){z=D.I()
this.fr=z}return z},
ao:function(a){var z=this.fr
if(!(z==null))z.B(a)},
sak:function(a,b){var z
if(b<1)b=1
z=this.a
if(z!==b){this.y=null
this.a=b
this.c=b
z=new D.N("width",z,b,this,[P.m])
z.b=!0
this.ao(z)}},
saf:function(a,b){var z
if(b<1)b=1
z=this.b
if(z!==b){this.y=null
this.b=b
this.d=b
z=new D.N("height",z,b,this,[P.m])
z.b=!0
this.ao(z)}},
Z:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(this.f){z=a.a.drawingBufferWidth
y=this.r
if(typeof z!=="number")return z.k()
this.sak(0,C.e.a1(z*y))
y=a.a.drawingBufferHeight
z=this.x
if(typeof y!=="number")return y.k()
this.saf(0,C.e.a1(y*z))}if(this.y==null){z=a.a
y=this.ch
x=this.a
w=this.b
v=H.F(z.getParameter(3379))
u=V.ca(x,2)
t=V.ca(w,2)
v=V.ca(v,2)
u=Math.min(u,v)
t=Math.min(t,v)
s=z.createTexture()
z.bindTexture(3553,s)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
C.u.eK(z,3553,0,6408,u,t,0,6408,5121,null)
z.bindTexture(3553,null)
r=T.dC(0,s)
r.e=x
r.f=w
r.r=u
r.x=t
r.dJ()
y.b=r.b
y.c=r.c
y.d=r.d
y.e=r.e
y.f=r.f
y.r=r.r
y.x=r.x
y=y.y
if(!(y==null))y.cB()
y=this.ch
x=y.b
this.z=x
this.c=y.r
this.d=y.x
z.bindTexture(3553,x)
y=z.createRenderbuffer()
this.Q=y
z.bindRenderbuffer(36161,y)
z.renderbufferStorage(36161,33189,this.c,this.d)
y=z.createFramebuffer()
this.y=y
z.bindFramebuffer(36160,y)
z.framebufferTexture2D(36160,36064,3553,this.z,0)
z.framebufferRenderbuffer(36160,36096,36161,this.Q)
z.bindTexture(3553,null)
z.bindRenderbuffer(36161,null)
z.bindFramebuffer(36160,null)}a.a.bindFramebuffer(36160,this.y)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=this.dy
y=z.c
a.c=C.d.a1(y*this.a)
x=z.d
a.d=C.d.a1(x*this.b)
w=this.c
if(typeof w!=="number")return H.o(w)
q=C.d.a1(z.a*w)
p=this.d
if(typeof p!=="number")return H.o(p)
o=C.d.a1(z.b*p)
n=C.d.a1(y*w)
m=C.d.a1(x*p)
a.a.viewport(q,o,n,m)
a.a.clearDepth(this.db)
if(this.cy){z=a.a
y=this.cx
z.clearColor(y.a,y.b,y.c,y.d)
l=16640}else l=256
if(l>0)a.a.clear(l)},
aj:function(a){a.a.bindFramebuffer(36160,null)}},cC:{"^":"b;",$isaN:1},iz:{"^":"cO;0a,0b,0c,0d,0e,0f,0r,0x",
gu:function(){var z=this.x
if(z==null){z=D.I()
this.x=z}return z},
Z:function(a){var z,y,x,w,v,u,t
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.o(y)
v=C.d.a1(w.a*y)
if(typeof x!=="number")return H.o(x)
u=C.d.a1(w.b*x)
t=C.d.a1(w.c*y)
a.c=t
w=C.d.a1(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
a.a.clear(16640)},
aj:function(a){},
t:{
eB:function(a,b,c,d,e,f,g){var z,y
z=new X.iz()
y=new V.aI(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.dw(0,0,1,1)
z.r=y
return z}}},iE:{"^":"b;0a,0b",
gu:function(){var z=this.b
if(z==null){z=D.I()
this.b=z}return z},
Z:function(a){var z
a.cy.bP(V.ba())
z=V.ba()
a.db.bP(z)},
aj:function(a){a.cy.aI()
a.db.aI()},
$isaN:1,
$iscC:1},jn:{"^":"b;0a,0b,0c,0d,0e,0f",
gu:function(){var z=this.f
if(z==null){z=D.I()
this.f=z}return z},
ao:[function(a){var z
H.e(a,"$isz")
z=this.f
if(!(z==null))z.B(a)},function(){return this.ao(null)},"ja","$1","$0","gfk",0,2,0],
Z:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=this.c
w=this.d
v=this.e
u=v-w
t=1/Math.tan(x*0.5)
s=V.aL(-t/(z/y),0,0,0,0,t,0,0,0,0,v/u,-v*w/u,0,0,1,0)
a.cy.bP(s)
z=$.eZ
if(z==null){z=V.eR(new V.a7(0,0,0),new V.Q(0,1,0),new V.Q(0,0,-1))
$.eZ=z
r=z}else r=z
z=this.b
if(z!=null){q=z.b3(0,a,this)
if(q!=null)r=q.k(0,r)}a.db.bP(r)},
aj:function(a){a.cy.aI()
a.db.aI()},
$isaN:1,
$iscC:1,
t:{
eY:function(a,b,c,d,e){var z,y,x
z=new X.jn()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
if(null!=c){y=z.b
z.b=c
if(c!=null)c.gu().h(0,z.gfk())
x=new D.N("mover",y,z.b,z,[U.an])
x.b=!0
z.ao(x)}x=z.c
if(!$.q.$2(x,b)){y=z.c
z.c=b
x=new D.N("fov",y,b,z,[P.B])
x.b=!0
z.ao(x)}x=z.d
if(!$.q.$2(x,d)){y=z.d
z.d=d
x=new D.N("near",y,d,z,[P.B])
x.b=!0
z.ao(x)}x=z.e
if(!$.q.$2(x,a)){y=z.e
z.e=a
x=new D.N("far",y,a,z,[P.B])
x.b=!0
z.ao(x)}return z}}},cO:{"^":"b;"}}],["","",,V,{"^":"",
nT:function(a){P.kr(C.O,new V.nU(a))},
b6:{"^":"b;",
bo:function(a){this.b=new P.iC(C.P)
this.c=null
this.d=H.c([],[[P.d,W.bg]])},
L:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.c([],[W.bg]))
y=a.split("\n")
for(z=y.length,x=[W.bg],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.c([],x))
t=document.createElement("div")
t.className="codePart"
H.H(u)
s=this.b.fv(u,0,u.length)
r=s==null?u:s
C.N.eW(t,H.e1(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gax(this.d),t)}},
eE:function(a,b){var z,y,x,w
H.p(b,"$isd",[P.f],"$asd")
this.d=H.c([],[[P.d,W.bg]])
z=C.a.n(b,"\n")
y=this.c
if(y==null){y=this.bx()
this.c=y}for(y=y.eN(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)this.bO(y[w])}},
nU:{"^":"n:52;a",
$1:function(a){H.e(a,"$isbv")
P.e0(C.d.eM(this.a.gil(),2)+" fps")}},
ia:{"^":"b6;a,0b,0c,0d",
bO:function(a){switch(a.a){case"Class":this.L(a.b,"#551")
break
case"Comment":this.L(a.b,"#777")
break
case"Id":this.L(a.b,"#111")
break
case"Num":this.L(a.b,"#191")
break
case"Reserved":this.L(a.b,"#119")
break
case"String":this.L(a.b,"#171")
break
case"Symbol":this.L(a.b,"#616")
break
case"Type":this.L(a.b,"#B11")
break
case"Whitespace":this.L(a.b,"#111")
break}},
bx:function(){var z,y,x,w
z=V.cP()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Id")
x=V.w(new H.u("_"))
C.a.h(y.a,x)
x=V.Y("a","z")
C.a.h(y.a,x)
x=V.Y("A","Z")
C.a.h(y.a,x)
x=z.l(0,"Id").n(0,"Id")
y=V.w(new H.u("_"))
C.a.h(x.a,y)
y=V.Y("0","9")
C.a.h(x.a,y)
y=V.Y("a","z")
C.a.h(x.a,y)
y=V.Y("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"Int")
x=V.Y("0","9")
C.a.h(y.a,x)
x=z.l(0,"Int").n(0,"Int")
y=V.Y("0","9")
C.a.h(x.a,y)
y=z.l(0,"Int").n(0,"FloatDot")
x=V.w(new H.u("."))
C.a.h(y.a,x)
x=z.l(0,"FloatDot").n(0,"Float")
y=V.Y("0","9")
C.a.h(x.a,y)
y=z.l(0,"Float").n(0,"Float")
x=V.Y("0","9")
C.a.h(y.a,x)
x=z.l(0,"Start").n(0,"Sym")
y=V.w(new H.u("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.l(0,"Sym").n(0,"Sym")
x=V.w(new H.u("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.l(0,"Start").n(0,"OpenDoubleStr")
y=V.w(new H.u('"'))
C.a.h(x.a,y)
y=z.l(0,"OpenDoubleStr").n(0,"CloseDoubleStr")
x=V.w(new H.u('"'))
C.a.h(y.a,x)
x=z.l(0,"OpenDoubleStr").n(0,"EscDoubleStr")
y=V.w(new H.u("\\"))
C.a.h(x.a,y)
y=z.l(0,"EscDoubleStr").n(0,"OpenDoubleStr")
x=V.w(new H.u('"'))
C.a.h(y.a,x)
C.a.h(z.l(0,"OpenDoubleStr").n(0,"OpenDoubleStr").a,new V.bH())
x=z.l(0,"Start").n(0,"OpenSingleStr")
y=V.w(new H.u("'"))
C.a.h(x.a,y)
y=z.l(0,"OpenSingleStr").n(0,"CloseSingleStr")
x=V.w(new H.u("'"))
C.a.h(y.a,x)
x=z.l(0,"OpenSingleStr").n(0,"EscSingleStr")
y=V.w(new H.u("\\"))
C.a.h(x.a,y)
y=z.l(0,"EscSingleStr").n(0,"OpenSingleStr")
x=V.w(new H.u("'"))
C.a.h(y.a,x)
C.a.h(z.l(0,"OpenSingleStr").n(0,"OpenSingleStr").a,new V.bH())
x=z.l(0,"Start").n(0,"Slash")
y=V.w(new H.u("/"))
C.a.h(x.a,y)
y=z.l(0,"Slash").n(0,"Comment")
x=V.w(new H.u("/"))
C.a.h(y.a,x)
x=z.l(0,"Comment").n(0,"EndComment")
y=V.w(new H.u("\n"))
C.a.h(x.a,y)
y=z.l(0,"Comment").n(0,"Comment")
x=new V.aC()
w=[V.aX]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.w(new H.u("\n"))
C.a.h(x.a,y)
y=z.l(0,"Slash").n(0,"MLComment")
x=V.w(new H.u("*"))
C.a.h(y.a,x)
x=z.l(0,"MLComment").n(0,"MLCStar")
y=V.w(new H.u("*"))
C.a.h(x.a,y)
y=z.l(0,"MLCStar").n(0,"MLComment")
x=new V.aC()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.w(new H.u("*"))
C.a.h(x.a,y)
y=z.l(0,"MLCStar").n(0,"EndComment")
x=V.w(new H.u("/"))
C.a.h(y.a,x)
x=z.l(0,"Start").n(0,"Whitespace")
y=V.w(new H.u(" \n\t"))
C.a.h(x.a,y)
y=z.l(0,"Whitespace").n(0,"Whitespace")
x=V.w(new H.u(" \n\t"))
C.a.h(y.a,x)
x=z.l(0,"Int")
x.d=x.a.N("Num")
x=z.l(0,"Float")
x.d=x.a.N("Num")
x=z.l(0,"Sym")
x.d=x.a.N("Symbol")
x=z.l(0,"CloseDoubleStr")
x.d=x.a.N("String")
x=z.l(0,"CloseSingleStr")
x.d=x.a.N("String")
x=z.l(0,"EndComment")
x.d=x.a.N("Comment")
x=z.l(0,"Whitespace")
x.d=x.a.N("Whitespace")
x=z.l(0,"Id")
y=x.a.N("Id")
x.d=y
x=[P.f]
y.aJ(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.aJ(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.aJ(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
iA:{"^":"b6;a,0b,0c,0d",
bO:function(a){switch(a.a){case"Builtin":this.L(a.b,"#411")
break
case"Comment":this.L(a.b,"#777")
break
case"Id":this.L(a.b,"#111")
break
case"Num":this.L(a.b,"#191")
break
case"Preprocess":this.L(a.b,"#737")
break
case"Reserved":this.L(a.b,"#119")
break
case"Symbol":this.L(a.b,"#611")
break
case"Type":this.L(a.b,"#171")
break
case"Whitespace":this.L(a.b,"#111")
break}},
bx:function(){var z,y,x,w
z=V.cP()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Id")
x=V.w(new H.u("_"))
C.a.h(y.a,x)
x=V.Y("a","z")
C.a.h(y.a,x)
x=V.Y("A","Z")
C.a.h(y.a,x)
x=z.l(0,"Id").n(0,"Id")
y=V.w(new H.u("_"))
C.a.h(x.a,y)
y=V.Y("0","9")
C.a.h(x.a,y)
y=V.Y("a","z")
C.a.h(x.a,y)
y=V.Y("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"Int")
x=V.Y("0","9")
C.a.h(y.a,x)
x=z.l(0,"Int").n(0,"Int")
y=V.Y("0","9")
C.a.h(x.a,y)
y=z.l(0,"Int").n(0,"FloatDot")
x=V.w(new H.u("."))
C.a.h(y.a,x)
x=z.l(0,"FloatDot").n(0,"Float")
y=V.Y("0","9")
C.a.h(x.a,y)
y=z.l(0,"Float").n(0,"Float")
x=V.Y("0","9")
C.a.h(y.a,x)
x=z.l(0,"Start").n(0,"Sym")
y=V.w(new H.u("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.l(0,"Sym").n(0,"Sym")
x=V.w(new H.u("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.l(0,"Start").n(0,"Slash")
y=V.w(new H.u("/"))
C.a.h(x.a,y)
y=z.l(0,"Slash").n(0,"Comment")
x=V.w(new H.u("/"))
C.a.h(y.a,x)
C.a.h(z.l(0,"Slash").n(0,"Sym").a,new V.bH())
x=z.l(0,"Comment").n(0,"EndComment")
y=V.w(new H.u("\n"))
C.a.h(x.a,y)
y=z.l(0,"Comment").n(0,"Comment")
x=new V.aC()
w=[V.aX]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.w(new H.u("\n"))
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"Preprocess")
x=V.w(new H.u("#"))
C.a.h(y.a,x)
x=z.l(0,"Preprocess").n(0,"Preprocess")
y=new V.aC()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.w(new H.u("\n"))
C.a.h(y.a,x)
x=z.l(0,"Preprocess").n(0,"EndPreprocess")
y=V.w(new H.u("\n"))
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"Whitespace")
x=V.w(new H.u(" \n\t"))
C.a.h(y.a,x)
x=z.l(0,"Whitespace").n(0,"Whitespace")
y=V.w(new H.u(" \n\t"))
C.a.h(x.a,y)
y=z.l(0,"Int")
y.d=y.a.N("Num")
y=z.l(0,"Float")
y.d=y.a.N("Num")
y=z.l(0,"Sym")
y.d=y.a.N("Symbol")
y=z.l(0,"EndComment")
y.d=y.a.N("Comment")
y=z.l(0,"EndPreprocess")
y.d=y.a.N("Preprocess")
y=z.l(0,"Whitespace")
y.d=y.a.N("Whitespace")
y=z.l(0,"Id")
x=y.a.N("Id")
y.d=x
y=[P.f]
x.aJ(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.aJ(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.aJ(0,"Builtin",H.c(["gl_FragColor","gl_Position"],y))
return z}},
iB:{"^":"b6;a,0b,0c,0d",
bO:function(a){switch(a.a){case"Attr":this.L(a.b,"#911")
this.L("=","#111")
break
case"Id":this.L(a.b,"#111")
break
case"Other":this.L(a.b,"#111")
break
case"Reserved":this.L(a.b,"#119")
break
case"String":this.L(a.b,"#171")
break
case"Symbol":this.L(a.b,"#616")
break}},
bx:function(){var z,y,x
z=V.cP()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Id")
x=V.w(new H.u("_"))
C.a.h(y.a,x)
x=V.Y("a","z")
C.a.h(y.a,x)
x=V.Y("A","Z")
C.a.h(y.a,x)
x=z.l(0,"Id").n(0,"Id")
y=V.w(new H.u("_"))
C.a.h(x.a,y)
y=V.Y("0","9")
C.a.h(x.a,y)
y=V.Y("a","z")
C.a.h(x.a,y)
y=V.Y("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Id").n(0,"Attr")
x=V.w(new H.u("="))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").n(0,"Sym")
x=V.w(new H.u("</\\-!>="))
C.a.h(y.a,x)
x=z.l(0,"Sym").n(0,"Sym")
y=V.w(new H.u("</\\-!>="))
C.a.h(x.a,y)
y=z.l(0,"Start").n(0,"OpenStr")
x=V.w(new H.u('"'))
C.a.h(y.a,x)
x=z.l(0,"OpenStr").n(0,"CloseStr")
y=V.w(new H.u('"'))
C.a.h(x.a,y)
y=z.l(0,"OpenStr").n(0,"EscStr")
x=V.w(new H.u("\\"))
C.a.h(y.a,x)
x=z.l(0,"EscStr").n(0,"OpenStr")
y=V.w(new H.u('"'))
C.a.h(x.a,y)
C.a.h(z.l(0,"OpenStr").n(0,"OpenStr").a,new V.bH())
C.a.h(z.l(0,"Start").n(0,"Other").a,new V.bH())
y=z.l(0,"Other").n(0,"Other")
x=new V.aC()
x.a=H.c([],[V.aX])
C.a.h(y.a,x)
y=V.w(new H.u('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.Y("a","z")
C.a.h(x.a,y)
y=V.Y("A","Z")
C.a.h(x.a,y)
y=z.l(0,"Sym")
y.d=y.a.N("Symbol")
y=z.l(0,"CloseStr")
y.d=y.a.N("String")
y=z.l(0,"Id")
x=y.a.N("Id")
y.d=x
x.aJ(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
x=z.l(0,"Attr")
x.d=x.a.N("Attr")
x=z.l(0,"Other")
x.d=x.a.N("Other")
return z}},
jp:{"^":"b6;a,0b,0c,0d",
eE:function(a,b){H.p(b,"$isd",[P.f],"$asd")
this.d=H.c([],[[P.d,W.bg]])
this.L(C.a.n(b,"\n"),"#111")},
bO:function(a){},
bx:function(){return}},
jW:{"^":"b;0a,0b",
fa:function(a,b){var z,y,x,w,v,u,t
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
t=W.ac
W.a2(z,"scroll",H.l(new V.jZ(x),{func:1,ret:-1,args:[t]}),!1,t)},
dT:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.p(a,"$isd",[P.f],"$asd")
this.hs()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.eN(C.a.it(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v){u=x[v]
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
if(H.hB(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.h(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.ct(C.C,s,C.k,!1)
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
eR:function(a){var z,y,x,w
z=new V.ia("dart")
z.bo("dart")
y=new V.iA("glsl")
y.bo("glsl")
x=new V.iB("html")
x.bo("html")
w=C.a.ig(H.c([z,y,x],[V.b6]),new V.k_(a))
if(w!=null)return w
z=new V.jp("plain")
z.bo("plain")
return z},
dR:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.p(a2,"$isd",[P.f],"$asd")
z=H.c([],[P.m])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.c7(w).a7(w,"+")){C.a.p(a2,x,C.b.at(w,1))
C.a.h(z,1)
y=!0}else if(C.b.a7(w,"-")){C.a.p(a2,x,C.b.at(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.eR(a0)
v.eE(0,a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
t.appendChild(s)
this.a.appendChild(t)
r=P.ct(C.C,a,C.k,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.e6(null)
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
if(x>=z.length)return H.h(z,x)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.C)(w),++e)f.appendChild(w[e])
j.appendChild(i)
j.appendChild(h)
j.appendChild(f)
s.appendChild(j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.C)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.ga0(w);b.C();)h.appendChild(b.gM(b))
j.appendChild(i)
j.appendChild(h)
s.appendChild(j)}},
hW:function(a){var z,y,x,w,v,u,t
H.p(a,"$isd",[P.f],"$asd")
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
x=H.e(w.insertCell(-1),"$isdB").style
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
t=H.e(w.insertCell(-1),"$isdB")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
hs:function(){var z,y,x,w
if(this.b!=null)return
z=V.cP()
z.c=z.l(0,"Start")
y=z.l(0,"Start").n(0,"Bold")
x=V.w(new H.u("*"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Bold").n(0,"Bold")
x=new V.aC()
w=[V.aX]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.w(new H.u("*"))
C.a.h(x.a,y)
y=z.l(0,"Bold").n(0,"BoldEnd")
x=V.w(new H.u("*"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").n(0,"Italic")
x=V.w(new H.u("_"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Italic").n(0,"Italic")
x=new V.aC()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.w(new H.u("_"))
C.a.h(x.a,y)
y=z.l(0,"Italic").n(0,"ItalicEnd")
x=V.w(new H.u("_"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").n(0,"Code")
x=V.w(new H.u("`"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Code").n(0,"Code")
x=new V.aC()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.w(new H.u("`"))
C.a.h(x.a,y)
y=z.l(0,"Code").n(0,"CodeEnd")
x=V.w(new H.u("`"))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"Start").n(0,"LinkHead")
x=V.w(new H.u("["))
C.a.h(y.a,x)
y.c=!0
y=z.l(0,"LinkHead").n(0,"LinkTail")
x=V.w(new H.u("|"))
C.a.h(y.a,x)
x=z.l(0,"LinkHead").n(0,"LinkEnd")
y=V.w(new H.u("]"))
C.a.h(x.a,y)
x.c=!0
x=z.l(0,"LinkHead").n(0,"LinkHead")
y=new V.aC()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.w(new H.u("|]"))
C.a.h(y.a,x)
x=z.l(0,"LinkTail").n(0,"LinkEnd")
y=V.w(new H.u("]"))
C.a.h(x.a,y)
x.c=!0
x=z.l(0,"LinkTail").n(0,"LinkTail")
y=new V.aC()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.w(new H.u("|]"))
C.a.h(y.a,x)
C.a.h(z.l(0,"Start").n(0,"Other").a,new V.bH())
x=z.l(0,"Other").n(0,"Other")
y=new V.aC()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.w(new H.u("*_`["))
C.a.h(y.a,x)
x=z.l(0,"BoldEnd")
x.d=x.a.N("Bold")
x=z.l(0,"ItalicEnd")
x.d=x.a.N("Italic")
x=z.l(0,"CodeEnd")
x.d=x.a.N("Code")
x=z.l(0,"LinkEnd")
x.d=x.a.N("Link")
x=z.l(0,"Other")
x.d=x.a.N("Other")
this.b=z},
t:{
jX:function(a,b){var z=new V.jW()
z.fa(a,!0)
return z}}},
jZ:{"^":"n:12;a",
$1:function(a){P.fg(C.q,new V.jY(this.a))}},
jY:{"^":"n:2;a",
$0:function(){var z,y,x
z=C.d.a1(document.documentElement.scrollTop)
y=this.a.style
x=H.k(-0.01*z)+"px"
y.top=x}},
k_:{"^":"n:53;a",
$1:function(a){return H.e(a,"$isb6").a===this.a}},
ke:{"^":"b;a,b,0c,d",
dQ:function(a,b,c){var z,y,x,w,v,u
z=W.df(null,null,null)
z.src=b
z.width=64
z.height=64
y=z.style
y.border="solid 2px white"
y=J.cx(this.c)
x=y.gm(y)
y=W.ad
W.a2(z,"click",H.l(new V.kg(this,z,b,x),{func:1,ret:-1,args:[y]}),!1,y)
J.cx(this.c).h(0,z)
J.cx(this.c).h(0,document.createElement("br"))
w=P.fF().gcW().j(0,H.k(this.a))
if(w==null){this.dO(x)
v=c}else{u=P.c8(w,null,null)
v=u==null?x==null:u===x}if(v)z.click()},
h:function(a,b){return this.dQ(a,b,!1)},
dO:function(a){var z,y,x,w,v
z=P.fF()
y=P.f
x=P.iV(z.gcW(),y,y)
x.p(0,this.a,H.k(a))
w=z.eH(0,x)
y=window.history
v=w.i(0)
y.toString
y.replaceState(new P.mk([],[]).d2(""),"",v)}},
kg:{"^":"n:54;a,b,c,d",
$1:function(a){var z,y
H.e(a,"$isad")
z=this.a
y=J.cx(z.c)
y.H(y,new V.kf())
y=this.b.style
y.border="solid 2px black"
z.d.$1(this.c)
z.dO(this.d)}},
kf:{"^":"n:55;",
$1:function(a){var z
H.e(a,"$isR")
if(!!J.L(a).$isde){z=a.style
z.border="solid 2px white"}}}}],["","",,X,{"^":"",
hx:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=V.jX("Test 029",!0)
y=W.da(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.f]
z.dT(H.c(["Test of bump distort pass. It renders the scene to a back buffer then ","paints that back buffer texture to the front buffer with a distortion."],x))
z.hW(H.c(["bumpMaps"],x))
z.dT(H.c(["\xab[Back to Tests|../]"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.t(P.v("Failed to find an element with the identifier, testCanvas."))
v=E.kp(w,!0,!0,!0,!1)
u=new U.eC()
t=U.an
u.bp(t)
u.b4(u.gfL(),u.gh5())
u.e=null
u.f=V.ba()
u.r=0
s=v.r
r=new U.kU()
q=U.dc()
q.sd4(0,!0)
q.scO(6.283185307179586)
q.scQ(0)
q.sag(0,0)
q.scP(100)
q.sV(0)
q.scw(0.5)
r.b=q
p=r.gaR()
q.gu().h(0,p)
q=U.dc()
q.sd4(0,!0)
q.scO(6.283185307179586)
q.scQ(0)
q.sag(0,0)
q.scP(100)
q.sV(0)
q.scw(0.5)
r.c=q
q.gu().h(0,p)
r.d=null
r.e=!1
r.f=!1
r.r=!1
r.x=2.5
r.y=2.5
r.z=2
r.Q=4
r.cx=!1
r.ch=!1
r.cy=0
r.db=0
r.dx=null
r.dy=0
r.fr=null
r.fx=null
o=new X.aM(!1,!1,!1)
n=r.d
r.d=o
q=[X.aM]
p=new D.N("modifiers",n,o,r,q)
p.b=!0
r.T(p)
p=r.f
if(p!==!1){r.f=!1
p=new D.N("invertX",p,!1,r,[P.T])
p.b=!0
r.T(p)}p=r.r
if(p!==!1){r.r=!1
p=new D.N("invertY",p,!1,r,[P.T])
p.b=!0
r.T(p)}r.b8(s)
u.h(0,r)
s=v.r
r=new U.kT()
p=U.dc()
p.sd4(0,!0)
p.scO(6.283185307179586)
p.scQ(0)
p.sag(0,0)
p.scP(100)
p.sV(0)
p.scw(0.2)
r.b=p
p.gu().h(0,r.gaR())
r.c=null
r.d=!1
r.e=2.5
r.f=2
r.r=4
r.y=!1
r.x=!1
r.z=0
r.Q=null
r.ch=0
r.cx=null
r.cy=null
o=new X.aM(!0,!1,!1)
n=r.c
r.c=o
p=new D.N("modifiers",n,o,r,q)
p.b=!0
r.T(p)
r.b8(s)
u.h(0,r)
s=v.r
r=new U.kV()
r.c=0.01
r.d=0
r.e=0
o=new X.aM(!1,!1,!1)
r.b=o
q=new D.N("modifiers",null,o,r,q)
q.b=!0
r.T(q)
r.b8(s)
u.h(0,r)
u.h(0,U.ej(V.aL(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
m=X.eY(2000,1.0471975511965976,u,0.1,null)
l=new X.hR()
l.a=512
l.b=512
l.c=512
l.d=512
l.e=!0
l.f=!0
l.r=1
l.x=1
l.ch=T.dC(0,null)
l.cx=new V.aI(0,0,0,1)
l.cy=!0
l.db=2000
l.dx=!0
l.dy=V.dw(0,0,1,1)
l.sak(0,800)
l.saf(0,600)
if(l.cy){l.cy=!1
s=new D.N("clearColor",!0,!1,l,[P.T])
s.b=!0
l.ao(s)}k=E.ey(null,!0,null,"",null,null)
k.sbV(0,F.nX(30,1,15,0.5))
j=new O.j4()
s=O.db(V.aK)
j.e=s
s.b4(j.gfN(),j.gfO())
s=new O.bl(j,"emission")
s.c=C.c
s.f=new V.a3(0,0,0)
j.f=s
s=new O.bl(j,"ambient")
s.c=C.c
s.f=new V.a3(0,0,0)
j.r=s
s=new O.bl(j,"diffuse")
s.c=C.c
s.f=new V.a3(0,0,0)
j.x=s
s=new O.bl(j,"invDiffuse")
s.c=C.c
s.f=new V.a3(0,0,0)
j.y=s
s=new O.ja(j,"specular")
s.c=C.c
s.f=new V.a3(0,0,0)
s.ch=100
j.z=s
s=new O.j7(j,"bump")
s.c=C.c
j.Q=s
j.ch=null
s=new O.bl(j,"reflect")
s.c=C.c
s.f=new V.a3(0,0,0)
j.cx=s
s=new O.j9(j,"refract")
s.c=C.c
s.f=new V.a3(0,0,0)
s.ch=1
j.cy=s
s=new O.j6(j,"alpha")
s.c=C.c
s.f=1
j.db=s
s=new D.iO()
s.bp(D.a6)
s.e=H.c([],[D.cE])
s.f=H.c([],[D.jq])
s.r=H.c([],[D.k4])
s.x=H.c([],[D.kl])
s.y=H.c([],[D.km])
s.z=H.c([],[D.kn])
s.Q=null
s.ch=null
s.da(s.gfM(),s.gh4(),s.gh6())
j.dx=s
r=s.Q
if(r==null){r=D.I()
s.Q=r
s=r}else s=r
s.h(0,j.ghi())
s=j.dx
r=s.ch
if(r==null){r=D.I()
s.ch=r
s=r}else s=r
s.h(0,j.gc_())
j.dy=null
s=j.dx
r=U.ej(V.eR(new V.a7(0,0,0),new V.Q(0,1,0),new V.Q(0,-1,-1)))
i=new V.a3(1,1,1)
q=new D.cE()
q.c=new V.a3(1,1,1)
q.a=new V.Q(0,0,1)
n=q.b
q.b=r
r.gu().h(0,q.gfg())
t=new D.N("mover",n,q.b,q,[t])
t.b=!0
q.aN(t)
if(!q.c.w(0,i)){n=q.c
q.c=i
t=new D.N("color",n,i,q,[V.a3])
t.b=!0
q.aN(t)}s.h(0,q)
t=j.r
t.sav(0,new V.a3(0,0,1))
t=j.x
t.sav(0,new V.a3(0,1,0))
t=j.z
t.sav(0,new V.a3(1,0,0))
t=j.z
if(t.c===C.c){t.c=C.i
t.bY()
t.cg(100)
s=t.a
s.a=null
s.a4(null)}t.cg(10)
t=v.f
s=t.a
h=s.createTexture()
s.bindTexture(34067,h)
s.texParameteri(34067,10242,10497)
s.texParameteri(34067,10243,10497)
s.texParameteri(34067,10241,9729)
s.texParameteri(34067,10240,9729)
s.bindTexture(34067,null)
g=new T.fe()
g.a=0
g.b=h
g.c=!1
g.d=0
t.aQ(g,h,"../resources/maskonaive/posx.jpg",34069,!1,!1)
t.aQ(g,h,"../resources/maskonaive/negx.jpg",34070,!1,!1)
t.aQ(g,h,"../resources/maskonaive/posy.jpg",34071,!1,!1)
t.aQ(g,h,"../resources/maskonaive/negy.jpg",34072,!1,!1)
t.aQ(g,h,"../resources/maskonaive/posz.jpg",34073,!1,!1)
t.aQ(g,h,"../resources/maskonaive/negz.jpg",34074,!1,!1)
f=M.ek(null,null,null)
t=new O.k1()
t.b=1.0471975511965976
n=t.c
t.c=g
g.gu().h(0,t.gc_())
s=new D.N("boxTexture",n,t.c,t,[T.fe])
s.b=!0
t.a4(s)
i=new V.a3(1,1,1)
if(!J.V(t.d,i)){n=t.d
t.d=i
s=new D.N("boxColor",n,i,t,[V.a3])
s.b=!0
t.a4(s)}t.e=null
f.sb2(t)
f.sbh(0,l)
f.sb9(m)
e=new M.iq()
t=O.db(E.aW)
e.d=t
t.b4(e.gfQ(),e.gfR())
e.e=null
e.f=null
e.r=null
e.x=null
e.sb9(null)
e.sbh(0,null)
e.sb2(null)
e.sb9(m)
e.sb2(j)
e.sbh(0,l)
e.d.h(0,k)
d=new O.ie()
d.sdZ(null)
d.sdX(null)
c=new V.bO(1,0,0,0,1,0,0,0,1)
if(!J.V(d.d,c)){d.d=c
d.ay()}c=new V.bO(1,0,0,0,1,0,0,0,1)
if(!J.V(d.e,c)){d.e=c
d.ay()}d.sdW(null)
d.sdZ(l.ch)
d.sdW(V.eS(0.05,0.05,0.05,1))
b=M.ek(null,null,null)
b.sb2(d)
t=M.aP
s=H.c([f,e,b],[t])
r=new M.i1()
r.bp(t)
r.e=!1
r.f=null
r.b4(r.gh7(),r.gh8())
r.ac(0,s)
t=v.d
if(t!==r){if(t!=null)t.gu().P(0,v.gdf())
v.d=r
r.gu().h(0,v.gdf())
v.fc()}t=new V.ke("bumpMaps",!0,new X.nL(d,v))
x=x.getElementById("bumpMaps")
t.c=x
if(x==null)H.t("Failed to find bumpMaps for Texture2DGroup")
t.dQ(0,"../resources/BumpMap1.png",!0)
t.h(0,"../resources/BumpMap2.png")
t.h(0,"../resources/BumpMap3.png")
t.h(0,"../resources/BumpMap4.png")
t.h(0,"../resources/BumpMap5.png")
t.h(0,"../resources/ScrewBumpMap.png")
t.h(0,"../resources/CtrlPnlBumpMap.png")
x=v.z
if(x==null){x=D.I()
v.z=x}t={func:1,ret:-1,args:[D.z]}
s=H.l(new X.nM(z,d),t)
r=x.b
if(r==null){t=H.c([],[t])
x.b=t
x=t}else x=r
C.a.h(x,s)
V.nT(v)},
nL:{"^":"n:18;a,b",
$1:function(a){this.a.sdX(this.b.f.ix(a))}},
nM:{"^":"n:7;a,b",
$1:function(a){var z,y,x,w
H.e(a,"$isz")
z=this.a
y=this.b
x=y.a
w=[P.f]
z.dR("Vertex Shader for distort","glsl",0,H.c((x==null?null:x.c).split("\n"),w))
y=y.a
z.dR("Fragment Shader for distort","glsl",0,H.c((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.L=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eF.prototype
return J.eE.prototype}if(typeof a=="string")return J.cl.prototype
if(a==null)return J.eG.prototype
if(typeof a=="boolean")return J.iJ.prototype
if(a.constructor==Array)return J.bk.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cm.prototype
return a}if(a instanceof P.b)return a
return J.d_(a)}
J.aT=function(a){if(typeof a=="string")return J.cl.prototype
if(a==null)return a
if(a.constructor==Array)return J.bk.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cm.prototype
return a}if(a instanceof P.b)return a
return J.d_(a)}
J.c6=function(a){if(a==null)return a
if(a.constructor==Array)return J.bk.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cm.prototype
return a}if(a instanceof P.b)return a
return J.d_(a)}
J.ny=function(a){if(typeof a=="number")return J.ck.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cr.prototype
return a}
J.nz=function(a){if(typeof a=="number")return J.ck.prototype
if(typeof a=="string")return J.cl.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cr.prototype
return a}
J.c7=function(a){if(typeof a=="string")return J.cl.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cr.prototype
return a}
J.aU=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.cm.prototype
return a}if(a instanceof P.b)return a
return J.d_(a)}
J.V=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.L(a).w(a,b)}
J.hD=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.ny(a).O(a,b)}
J.e2=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.nz(a).k(a,b)}
J.e3=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.hu(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aT(a).j(a,b)}
J.d3=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.hu(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.c6(a).p(a,b,c)}
J.hE=function(a,b){return J.c7(a).F(a,b)}
J.hF=function(a,b,c){return J.aU(a).hg(a,b,c)}
J.hG=function(a,b,c,d){return J.aU(a).dS(a,b,c,d)}
J.hH=function(a,b){return J.c7(a).a_(a,b)}
J.d4=function(a,b,c){return J.aT(a).i5(a,b,c)}
J.cw=function(a,b){return J.c6(a).J(a,b)}
J.hI=function(a,b,c,d){return J.c6(a).aG(a,b,c,d)}
J.e4=function(a,b){return J.c6(a).H(a,b)}
J.hJ=function(a){return J.aU(a).gi1(a)}
J.cx=function(a){return J.aU(a).gcu(a)}
J.cb=function(a){return J.L(a).gX(a)}
J.b5=function(a){return J.c6(a).ga0(a)}
J.ar=function(a){return J.aT(a).gm(a)}
J.hK=function(a){return J.aU(a).gcT(a)}
J.hL=function(a){return J.aU(a).gj2(a)}
J.e5=function(a){return J.c6(a).iT(a)}
J.hM=function(a,b){return J.aU(a).iW(a,b)}
J.hN=function(a,b,c){return J.c7(a).v(a,b,c)}
J.hO=function(a){return J.c7(a).j7(a)}
J.am=function(a){return J.L(a).i(a)}
I.a9=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.w=W.cz.prototype
C.l=W.d9.prototype
C.N=W.bg.prototype
C.Q=J.r.prototype
C.a=J.bk.prototype
C.R=J.eE.prototype
C.e=J.eF.prototype
C.x=J.eG.prototype
C.d=J.ck.prototype
C.b=J.cl.prototype
C.Y=J.cm.prototype
C.a3=H.dv.prototype
C.a4=W.jh.prototype
C.F=J.jo.prototype
C.u=P.dx.prototype
C.G=W.kb.prototype
C.v=J.cr.prototype
C.H=W.bZ.prototype
C.I=W.lf.prototype
C.K=new P.hT(!1)
C.J=new P.hS(C.K)
C.L=new P.jm()
C.M=new P.l2()
C.j=new P.m2()
C.c=new A.cD(0,"ColorSourceType.None")
C.i=new A.cD(1,"ColorSourceType.Solid")
C.f=new A.cD(2,"ColorSourceType.Texture2D")
C.h=new A.cD(3,"ColorSourceType.TextureCube")
C.q=new P.bh(0)
C.O=new P.bh(5e6)
C.P=new P.iD("element",!0,!1,!1,!1)
C.S=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.T=function(hooks) {
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
C.y=function(hooks) { return hooks; }

C.U=function(getTagFallback) {
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
C.V=function() {
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
C.W=function(hooks) {
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
C.X=function(hooks) {
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
C.z=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.A=H.c(I.a9([127,2047,65535,1114111]),[P.m])
C.m=H.c(I.a9([0,0,32776,33792,1,10240,0,0]),[P.m])
C.Z=H.c(I.a9(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.n=H.c(I.a9([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.o=H.c(I.a9([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.a_=H.c(I.a9(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.B=H.c(I.a9([]),[P.f])
C.a0=H.c(I.a9([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.C=H.c(I.a9([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.p=H.c(I.a9([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.D=H.c(I.a9([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.a1=H.c(I.a9([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.E=H.c(I.a9([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.r=H.c(I.a9(["bind","if","ref","repeat","syntax"]),[P.f])
C.t=H.c(I.a9(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])
C.a2=new H.i5(0,{},C.B,[P.f,P.f])
C.k=new P.kW(!1)
$.aH=0
$.bI=null
$.eb=null
$.dQ=!1
$.hs=null
$.hn=null
$.hA=null
$.cZ=null
$.d1=null
$.dY=null
$.bB=null
$.c2=null
$.c3=null
$.dR=!1
$.Z=C.j
$.aV=null
$.dd=null
$.ex=null
$.ew=null
$.er=null
$.eq=null
$.ep=null
$.eo=null
$.q=V.jb()
$.ih="uniform mat4 projViewObjMat;                             \nuniform mat3 colorTxt2DMat;                              \nuniform mat3 bumpTxt2DMat;                               \n                                                         \nattribute vec3 posAttr;                                  \nattribute vec2 txt2DAttr;                                \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvoid main()                                              \n{                                                        \n   vec3 txt2D = vec3(txt2DAttr.x, 1.0-txt2DAttr.y, 1.0); \n   colorTxt2D = (colorTxt2DMat * txt2D).xy;              \n   bumpTxt2D = (bumpTxt2DMat * vec3(txt2DAttr, 1.0)).xy; \n   gl_Position = projViewObjMat * vec4(posAttr, 1.0);    \n}                                                        \n"
$.ig="precision mediump float;                                 \n                                                         \nuniform sampler2D colorTxt;                              \nuniform sampler2D bumpTxt;                               \nuniform int nullColorTxt;                                \nuniform int nullBumpTxt;                                 \nuniform mat4 bumpMat;                                    \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvec2 offset()                                            \n{                                                        \n   if(nullBumpTxt > 0) return vec2(0.0, 0.0);            \n   vec3 txt2D = texture2D(bumpTxt, bumpTxt2D).rgb;       \n   txt2D = normalize(txt2D*2.0 - 1.0);                   \n   return (bumpMat * vec4(txt2D, 1.0)).xy;               \n}                                                        \n                                                         \nvoid main()                                              \n{                                                        \n   if(nullColorTxt > 0) gl_FragColor = vec4(1.0);        \n   else                                                  \n   {                                                     \n      vec2 txt2D = colorTxt2D + offset();                \n      gl_FragColor = texture2D(colorTxt, txt2D);         \n   }                                                     \n}                                                        \n"
$.k3="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.k2="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.eZ=null
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
I.$lazy(y,x,w)}})(["en","$get$en",function(){return H.hr("_$dart_dartClosure")},"dj","$get$dj",function(){return H.hr("_$dart_js")},"fm","$get$fm",function(){return H.aQ(H.cQ({
toString:function(){return"$receiver$"}}))},"fn","$get$fn",function(){return H.aQ(H.cQ({$method$:null,
toString:function(){return"$receiver$"}}))},"fo","$get$fo",function(){return H.aQ(H.cQ(null))},"fp","$get$fp",function(){return H.aQ(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"ft","$get$ft",function(){return H.aQ(H.cQ(void 0))},"fu","$get$fu",function(){return H.aQ(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fr","$get$fr",function(){return H.aQ(H.fs(null))},"fq","$get$fq",function(){return H.aQ(function(){try{null.$method$}catch(z){return z.message}}())},"fw","$get$fw",function(){return H.aQ(H.fs(void 0))},"fv","$get$fv",function(){return H.aQ(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dL","$get$dL",function(){return P.lg()},"c4","$get$c4",function(){return[]},"fI","$get$fI",function(){return P.l_()},"fP","$get$fP",function(){return H.jf(H.bA(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"hc","$get$hc",function(){return P.jH("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"hj","$get$hj",function(){return P.n8()},"el","$get$el",function(){return{}},"fT","$get$fT",function(){return P.eL(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)},"dM","$get$dM",function(){return P.dm(P.f,P.cg)},"fL","$get$fL",function(){return Z.ay(0)},"fJ","$get$fJ",function(){return Z.ay(511)},"aq","$get$aq",function(){return Z.ay(1)},"b0","$get$b0",function(){return Z.ay(2)},"b_","$get$b_",function(){return Z.ay(4)},"aF","$get$aF",function(){return Z.ay(8)},"b1","$get$b1",function(){return Z.ay(16)},"bX","$get$bX",function(){return Z.ay(32)},"bY","$get$bY",function(){return Z.ay(64)},"fK","$get$fK",function(){return Z.ay(96)},"by","$get$by",function(){return Z.ay(128)},"aZ","$get$aZ",function(){return Z.ay(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.z]},{func:1,ret:-1,args:[D.z]},{func:1,ret:P.K},{func:1,ret:-1},{func:1,ret:-1,args:[W.ad]},{func:1,ret:P.K,args:[F.av]},{func:1,ret:P.K,args:[,,]},{func:1,ret:P.K,args:[D.z]},{func:1,ret:-1,args:[P.m,[P.i,E.aW]]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:-1,args:[W.ac]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.K,args:[W.ac]},{func:1,ret:-1,args:[W.bx]},{func:1,ret:P.T,args:[P.f]},{func:1,ret:-1,args:[P.m,[P.i,D.a6]]},{func:1,ret:-1,args:[P.m,[P.i,M.aP]]},{func:1,ret:P.K,args:[,]},{func:1,ret:P.K,args:[P.f]},{func:1,ret:P.f,args:[P.f]},{func:1,args:[,]},{func:1,ret:P.K,args:[{func:1,ret:-1,args:[D.z]}]},{func:1,ret:P.T,args:[W.R,P.f,P.f,W.cs]},{func:1,ret:-1,args:[P.m,[P.i,V.aK]]},{func:1,ret:P.T,args:[W.G]},{func:1,ret:-1,args:[P.m,[P.i,U.an]]},{func:1,ret:W.G},{func:1,ret:P.f,args:[P.m]},{func:1,ret:P.T,args:[W.aO]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:-1,args:[W.bM]},{func:1,ret:P.B},{func:1,ret:-1,args:[W.G,W.G]},{func:1,ret:P.S,args:[,,]},{func:1,ret:P.S,args:[P.m]},{func:1,ret:P.K,args:[P.a5]},{func:1,ret:P.K,args:[P.f,,]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:P.T,args:[P.B,P.B]},{func:1,ret:-1,args:[W.bZ]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,ret:P.T,args:[[P.i,D.a6]]},{func:1,ret:-1,args:[P.f,P.m]},{func:1,ret:[P.M,P.f,P.f],args:[[P.M,P.f,P.f],P.f]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.m,args:[[P.d,P.m],P.m]},{func:1,ret:P.K,args:[,],opt:[,]},{func:1,ret:V.a7,args:[P.B]},{func:1,ret:P.K,args:[F.ax,P.B,P.B]},{func:1,ret:[P.b2,,],args:[,]},{func:1,ret:-1,args:[P.b],opt:[P.aD]},{func:1,ret:P.K,args:[{func:1,ret:-1}]},{func:1,ret:P.K,args:[P.bv]},{func:1,ret:P.T,args:[V.b6]},{func:1,ret:P.K,args:[W.ad]},{func:1,ret:P.K,args:[W.R]},{func:1,args:[P.f]},{func:1,args:[,P.f]},{func:1,ret:W.R,args:[W.G]}]
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
if(x==y)H.nW(d||a)
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
Isolate.a9=a.a9
Isolate.dW=a.dW
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
if(typeof dartMainRunner==="function")dartMainRunner(X.hx,[])
else X.hx([])})})()
//# sourceMappingURL=test.dart.js.map
