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
var dart=[["","",,H,{"^":"",lw:{"^":"a;a"}}],["","",,J,{"^":"",
J:function(a){return void 0},
dm:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cq:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dj==null){H.kQ()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.h(P.eF("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cJ()]
if(v!=null)return v
v=H.kV(a)
if(v!=null)return v
if(typeof a=="function")return C.G
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cJ(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
o:{"^":"a;",
q:function(a,b){return a===b},
gV:function(a){return H.bq(a)},
i:["dV",function(a){return"Instance of '"+H.aX(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h4:{"^":"o;",
i:function(a){return String(a)},
gV:function(a){return a?519018:218159},
$isa4:1},
dR:{"^":"o;",
q:function(a,b){return null==b},
i:function(a){return"null"},
gV:function(a){return 0},
$isI:1},
cK:{"^":"o;",
gV:function(a){return 0},
i:["dW",function(a){return String(a)}]},
hF:{"^":"cK;"},
d6:{"^":"cK;"},
bP:{"^":"cK;",
i:function(a){var z=a[$.$get$dD()]
if(z==null)return this.dW(a)
return"JavaScript function for "+H.j(J.a5(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscE:1},
aU:{"^":"o;$ti",
h:function(a,b){H.A(b,H.y(a,0))
if(!!a.fixed$length)H.r(P.ae("add"))
a.push(b)},
R:function(a,b){var z
if(!!a.fixed$length)H.r(P.ae("remove"))
for(z=0;z<a.length;++z)if(J.O(a[z],b)){a.splice(z,1)
return!0}return!1},
aO:function(a,b){var z,y
H.v(b,"$isd",[H.y(a,0)],"$asd")
if(!!a.fixed$length)H.r(P.ae("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.x)(b),++y)a.push(b[y])},
K:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.h(P.bb(a))}},
w:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.S(z,y,H.j(a[y]))
return z.join(b)},
h1:function(a){return this.w(a,"")},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
bu:function(a,b,c){var z=a.length
if(b>z)throw H.h(P.aj(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.h(P.aj(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.y(a,0)])
return H.c(a.slice(b,c),[H.y(a,0)])},
gce:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.h(H.h2())},
aR:function(a,b){var z
for(z=0;z<a.length;++z)if(J.O(a[z],b))return!0
return!1},
i:function(a){return P.cG(a,"[","]")},
gX:function(a){return new J.af(a,a.length,0,[H.y(a,0)])},
gV:function(a){return H.bq(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.r(P.ae("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.bZ(b,"newLength",null))
if(b<0)throw H.h(P.aj(b,0,null,"newLength",null))
a.length=b},
S:function(a,b,c){H.Y(b)
H.A(c,H.y(a,0))
if(!!a.immutable$list)H.r(P.ae("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.aO(a,b))
if(b>=a.length||b<0)throw H.h(H.aO(a,b))
a[b]=c},
$isd:1,
$isf:1,
p:{
h3:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.bZ(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.aj(a,0,4294967295,"length",null))
return J.dO(new Array(a),b)},
dO:function(a,b){return J.bj(H.c(a,[b]))},
bj:function(a){H.bJ(a)
a.fixed$length=Array
return a}}},
lv:{"^":"aU;$ti"},
af:{"^":"a;a,b,c,0d,$ti",
gN:function(a){return this.d},
B:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.h(H.x(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
c9:{"^":"o;",
hy:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.h(P.ae(""+a+".toInt()"))},
cb:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.h(P.ae(""+a+".floor()"))},
ac:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.ae(""+a+".round()"))},
dN:function(a,b){var z,y
if(b>20)throw H.h(P.aj(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gV:function(a){return a&0x1FFFFFFF},
dS:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
dY:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cX(a,b)},
Z:function(a,b){return(a|0)===a?a/b|0:this.cX(a,b)},
cX:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.h(P.ae("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
b8:function(a,b){var z
if(a>0)z=this.fb(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fb:function(a,b){return b>31?0:a>>>b},
a7:function(a,b){if(typeof b!=="number")throw H.h(H.aN(b))
return a<b},
$isw:1,
$isW:1},
dQ:{"^":"c9;",$isC:1},
dP:{"^":"c9;"},
cI:{"^":"o;",
c0:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.aO(a,b))
if(b<0)throw H.h(H.aO(a,b))
if(b>=a.length)H.r(H.aO(a,b))
return a.charCodeAt(b)},
b5:function(a,b){if(b>=a.length)throw H.h(H.aO(a,b))
return a.charCodeAt(b)},
D:function(a,b){H.S(b)
if(typeof b!=="string")throw H.h(P.bZ(b,null,null))
return a+b},
bv:function(a,b,c){H.Y(c)
if(c==null)c=a.length
if(b<0)throw H.h(P.cd(b,null,null))
if(b>c)throw H.h(P.cd(b,null,null))
if(c>a.length)throw H.h(P.cd(c,null,null))
return a.substring(b,c)},
cz:function(a,b){return this.bv(a,b,null)},
l:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.u)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
he:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.l(c,z)+a},
a6:function(a,b){return this.he(a,b," ")},
fM:function(a,b,c){if(c>a.length)throw H.h(P.aj(c,0,a.length,null,null))
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
$isn:1}}],["","",,H,{"^":"",
h2:function(){return new P.ig("No element")},
Z:{"^":"iO;a",
gk:function(a){return this.a.length},
j:function(a,b){return C.h.c0(this.a,b)},
$aseG:function(){return[P.C]},
$ast:function(){return[P.C]},
$asd:function(){return[P.C]},
$asf:function(){return[P.C]}},
fP:{"^":"d;"},
dW:{"^":"a;a,b,c,0d,$ti",
gN:function(a){return this.d},
B:function(){var z,y,x,w
z=this.a
y=J.bX(z)
x=y.gk(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.h(P.bb(z))
w=this.c
if(typeof x!=="number")return H.p(x)
if(w>=x){this.d=null
return!1}this.d=y.C(z,w);++this.c
return!0}},
hk:{"^":"d;a,b,$ti",
gX:function(a){return new H.hl(J.bK(this.a),this.b,this.$ti)},
gk:function(a){return J.b9(this.a)},
C:function(a,b){return this.b.$1(J.dq(this.a,b))},
$asd:function(a,b){return[b]}},
hl:{"^":"cH;0a,b,c,$ti",
B:function(){var z=this.b
if(z.B()){this.a=this.c.$1(z.gN(z))
return!0}this.a=null
return!1},
gN:function(a){return this.a},
$ascH:function(a,b){return[b]}},
j3:{"^":"d;a,b,$ti",
gX:function(a){return new H.j4(J.bK(this.a),this.b,this.$ti)}},
j4:{"^":"cH;a,b,$ti",
B:function(){var z,y
for(z=this.a,y=this.b;z.B();)if(y.$1(z.gN(z)))return!0
return!1},
gN:function(a){var z=this.a
return z.gN(z)}},
c6:{"^":"a;$ti"},
eG:{"^":"a;$ti"},
iO:{"^":"ca+eG;"}}],["","",,H,{"^":"",
kL:function(a){return init.types[H.Y(a)]},
kT:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.J(a).$isD},
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
if(w.length>1&&C.h.b5(w,0)===36)w=C.h.cz(w,1)
r=H.dk(H.bJ(H.aP(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
e7:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
hP:function(a){var z,y,x,w
z=H.c([],[P.C])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.x)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.h(H.aN(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.f.b8(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.h(H.aN(w))}return H.e7(z)},
e8:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.h(H.aN(x))
if(x<0)throw H.h(H.aN(x))
if(x>65535)return H.hP(a)}return H.e7(a)},
hO:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.b8(z,10))>>>0,56320|z&1023)}throw H.h(P.aj(a,0,1114111,null,null))},
a8:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hN:function(a){return a.b?H.a8(a).getUTCFullYear()+0:H.a8(a).getFullYear()+0},
hL:function(a){return a.b?H.a8(a).getUTCMonth()+1:H.a8(a).getMonth()+1},
hH:function(a){return a.b?H.a8(a).getUTCDate()+0:H.a8(a).getDate()+0},
hI:function(a){return a.b?H.a8(a).getUTCHours()+0:H.a8(a).getHours()+0},
hK:function(a){return a.b?H.a8(a).getUTCMinutes()+0:H.a8(a).getMinutes()+0},
hM:function(a){return a.b?H.a8(a).getUTCSeconds()+0:H.a8(a).getSeconds()+0},
hJ:function(a){return a.b?H.a8(a).getUTCMilliseconds()+0:H.a8(a).getMilliseconds()+0},
p:function(a){throw H.h(H.aN(a))},
i:function(a,b){if(a==null)J.b9(a)
throw H.h(H.aO(a,b))},
aO:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.az(!0,b,"index",null)
z=H.Y(J.b9(a))
if(!(b<0)){if(typeof z!=="number")return H.p(z)
y=b>=z}else y=!0
if(y)return P.M(b,a,"index",null,z)
return P.cd(b,"index",null)},
kH:function(a,b,c){if(a>c)return new P.cc(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cc(a,c,!0,b,"end","Invalid value")
return new P.az(!0,b,"end",null)},
aN:function(a){return new P.az(!0,a,null,null)},
kC:function(a){if(typeof a!=="number")throw H.h(H.aN(a))
return a},
h:function(a){var z
if(a==null)a=new P.e4()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fm})
z.name=""}else z.toString=H.fm
return z},
fm:function(){return J.a5(this.dartException)},
r:function(a){throw H.h(a)},
x:function(a){throw H.h(P.bb(a))},
aR:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.l5(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.b8(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cL(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.e3(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eo()
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
if(l)return z.$1(H.e3(H.S(y),m))}}return z.$1(new H.iN(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.ec()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.az(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.ec()
return a},
b7:function(a){var z
if(a==null)return new H.eX(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eX(a)},
kJ:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.S(0,a[y],a[x])}return b},
kS:function(a,b,c,d,e,f){H.k(a,"$iscE")
switch(H.Y(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.q("Unsupported number of arguments for wrapped closure"))},
b5:function(a,b){var z
H.Y(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kS)
a.$identity=z
return z},
fC:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.J(d).$isf){z.$reflectionInfo=d
x=H.hS(z).r}else x=d
w=e?Object.create(new H.ih().constructor.prototype):Object.create(new H.cv(null,null,null,null).constructor.prototype)
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
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.kL,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.du:H.cw
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.h("Error in reflectionInfo.")
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
$.ba=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.as
if(typeof w!=="number")return w.D()
$.as=w+1
t+=w
w="return function("+t+"){return this."
v=$.ba
if(v==null){v=H.c_("self")
$.ba=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
fA:function(a,b,c,d){var z,y
z=H.cw
y=H.du
switch(b?-1:a){case 0:throw H.h(H.i0("Intercepted function with no arguments."))
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
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.as
if(typeof y!=="number")return y.D()
$.as=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.as
if(typeof y!=="number")return y.D()
$.as=y+1
return new Function(z+y+"}")()},
df:function(a,b,c,d,e,f,g){var z,y
z=J.bj(H.bJ(b))
H.Y(c)
y=!!J.J(d).$isf?J.bj(d):d
return H.fC(a,z,c,y,!!e,f,g)},
S:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.ax(a,"String"))},
kY:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.ax(a,"num"))},
fa:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.ax(a,"bool"))},
Y:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.ax(a,"int"))},
fi:function(a,b){throw H.h(H.ax(a,H.S(b).substring(3)))},
l_:function(a,b){var z=J.bX(b)
throw H.h(H.fy(a,z.bv(b,3,z.gk(b))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.J(a)[b])return a
H.fi(a,b)},
e:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.J(a)[b]
else z=!0
if(z)return a
H.l_(a,b)},
bJ:function(a){if(a==null)return a
if(!!J.J(a).$isf)return a
throw H.h(H.ax(a,"List"))},
kU:function(a,b){if(a==null)return a
if(!!J.J(a).$isf)return a
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
b:function(a,b){var z,y
if(a==null)return a
if($.db)return a
$.db=!0
try{if(H.bW(a,b))return a
z=H.bY(b)
y=H.ax(a,z)
throw H.h(y)}finally{$.db=!1}},
dh:function(a,b){if(a!=null&&!H.de(a,b))H.r(H.ax(a,H.bY(b)))
return a},
f5:function(a){var z
if(a instanceof H.u){z=H.fb(J.J(a))
if(z!=null)return H.bY(z)
return"Closure"}return H.aX(a)},
l4:function(a){throw H.h(new P.fI(H.S(a)))},
fc:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
aP:function(a){if(a==null)return
return a.$ti},
mj:function(a,b,c){return H.b8(a["$as"+H.j(c)],H.aP(b))},
bI:function(a,b,c,d){var z
H.S(c)
H.Y(d)
z=H.b8(a["$as"+H.j(c)],H.aP(b))
return z==null?null:z[d]},
am:function(a,b,c){var z
H.S(b)
H.Y(c)
z=H.b8(a["$as"+H.j(b)],H.aP(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.Y(b)
z=H.aP(a)
return z==null?null:z[b]},
bY:function(a){var z=H.aQ(a,null)
return z},
aQ:function(a,b){var z,y
H.v(b,"$isf",[P.n],"$asf")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dk(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Y(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.j(b[y])}if('func' in a)return H.ks(a,b)
if('futureOr' in a)return"FutureOr<"+H.aQ("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ks:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.n]
H.v(b,"$isf",z,"$asf")
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
for(z=H.kI(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.S(z[l])
n=n+m+H.aQ(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dk:function(a,b,c){var z,y,x,w,v,u
H.v(c,"$isf",[P.n],"$asf")
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
throw H.h(H.ax(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
f8:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.an(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.an(a[y],b,c[y],d))return!1
return!0},
mh:function(a,b,c){return a.apply(b,H.b8(J.J(b)["$as"+H.j(c)],H.aP(b)))},
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
A:function(a,b){if(a!=null&&!H.de(a,b))throw H.h(H.ax(a,H.bY(b)))
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
return H.kX(m,b,l,d)},
kX:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.an(c[w],d,a[w],b))return!1}return!0},
mi:function(a,b,c){Object.defineProperty(a,H.S(b),{value:c,enumerable:false,writable:true,configurable:true})},
kV:function(a){var z,y,x,w,v,u
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
if(v==="*")throw H.h(P.eF(z))
if(init.leafTags[z]===true){u=H.cs(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fh(a,x)},
fh:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dm(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cs:function(a){return J.dm(a,!1,null,!!a.$isD)},
kW:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cs(z)
else return J.dm(z,c,null,null)},
kQ:function(){if(!0===$.dj)return
$.dj=!0
H.kR()},
kR:function(){var z,y,x,w,v,u,t,s
$.co=Object.create(null)
$.cr=Object.create(null)
H.kM()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fj.$1(v)
if(u!=null){t=H.kW(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kM:function(){var z,y,x,w,v,u,t
z=C.D()
z=H.b4(C.A,H.b4(C.F,H.b4(C.n,H.b4(C.n,H.b4(C.E,H.b4(C.B,H.b4(C.C(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fd=new H.kN(v)
$.f7=new H.kO(u)
$.fj=new H.kP(t)},
b4:function(a,b){return a(b)||b},
fk:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fl:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hR:{"^":"a;a,b,c,d,e,f,r,0x",p:{
hS:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bj(z)
y=z[0]
x=z[1]
return new H.hR(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iB:{"^":"a;a,b,c,d,e,f",
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
if(z==null)z=H.c([],[P.n])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iB(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
ch:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eu:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hC:{"^":"X;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
e3:function(a,b){return new H.hC(a,b==null?null:b.method)}}},
h7:{"^":"X;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
p:{
cL:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.h7(a,y,z?null:b.receiver)}}},
iN:{"^":"X;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
l5:{"^":"u:15;a",
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
u:{"^":"a;",
i:function(a){return"Closure '"+H.aX(this).trim()+"'"},
gdP:function(){return this},
$iscE:1,
gdP:function(){return this}},
eg:{"^":"u;"},
ih:{"^":"eg;",
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
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.aX(z)+"'")},
p:{
cw:function(a){return a.a},
du:function(a){return a.c},
c_:function(a){var z,y,x,w,v
z=new H.cv("self","target","receiver","name")
y=J.bj(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iC:{"^":"X;a",
i:function(a){return this.a},
p:{
ax:function(a,b){return new H.iC("TypeError: "+H.j(P.c5(a))+": type '"+H.f5(a)+"' is not a subtype of type '"+b+"'")}}},
fx:{"^":"X;a",
i:function(a){return this.a},
p:{
fy:function(a,b){return new H.fx("CastError: "+H.j(P.c5(a))+": type '"+H.f5(a)+"' is not a subtype of type '"+b+"'")}}},
i_:{"^":"X;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
p:{
i0:function(a){return new H.i_(a)}}},
aV:{"^":"hi;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gaq:function(a){return new H.dV(this,[H.y(this,0)])},
d6:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cM(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cM(y,b)}else return this.h_(b)},
h_:function(a){var z=this.d
if(z==null)return!1
return this.cc(this.bE(z,J.aS(a)&0x3ffffff),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.b6(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.b6(w,b)
x=y==null?null:y.b
return x}else return this.h0(b)},
h0:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bE(z,J.aS(a)&0x3ffffff)
x=this.cc(y,a)
if(x<0)return
return y[x].b},
S:function(a,b,c){var z,y,x,w,v,u
H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bL()
this.b=z}this.cF(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bL()
this.c=y}this.cF(y,b,c)}else{x=this.d
if(x==null){x=this.bL()
this.d=x}w=J.aS(b)&0x3ffffff
v=this.bE(x,w)
if(v==null)this.bR(x,w,[this.bM(b,c)])
else{u=this.cc(v,b)
if(u>=0)v[u].b=c
else v.push(this.bM(b,c))}}},
K:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.h(P.bb(this))
z=z.c}},
cF:function(a,b,c){var z
H.A(b,H.y(this,0))
H.A(c,H.y(this,1))
z=this.b6(a,b)
if(z==null)this.bR(a,b,this.bM(b,c))
else z.b=c},
es:function(){this.r=this.r+1&67108863},
bM:function(a,b){var z,y
z=new H.ha(H.A(a,H.y(this,0)),H.A(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.es()
return z},
cc:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.O(a[y].a,b))return y
return-1},
i:function(a){return P.dY(this)},
b6:function(a,b){return a[b]},
bE:function(a,b){return a[b]},
bR:function(a,b,c){a[b]=c},
em:function(a,b){delete a[b]},
cM:function(a,b){return this.b6(a,b)!=null},
bL:function(){var z=Object.create(null)
this.bR(z,"<non-identifier-key>",z)
this.em(z,"<non-identifier-key>")
return z},
$isdU:1},
ha:{"^":"a;a,b,0c,0d"},
dV:{"^":"fP;a,$ti",
gk:function(a){return this.a.a},
gX:function(a){var z,y
z=this.a
y=new H.hb(z,z.r,this.$ti)
y.c=z.e
return y}},
hb:{"^":"a;a,b,0c,0d,$ti",
gN:function(a){return this.d},
B:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.bb(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kN:{"^":"u:15;a",
$1:function(a){return this.a(a)}},
kO:{"^":"u:26;a",
$2:function(a,b){return this.a(a,b)}},
kP:{"^":"u:27;a",
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
throw H.h(new P.fY("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
kI:function(a){return J.dO(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kZ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bD:function(a){return a},
aM:function(a,b,c){H.bJ(b)
if(a>>>0!==a||a>=c)throw H.h(H.aO(b,a))},
kr:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.h(H.kH(a,b,c))
return b},
hz:{"^":"o;",$ism2:1,"%":"DataView;ArrayBufferView;cS|eR|eS|hy|eT|eU|aL"},
cS:{"^":"hz;",
gk:function(a){return a.length},
$isD:1,
$asD:I.dg},
hy:{"^":"eS;",
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
$asc6:function(){return[P.w]},
$ast:function(){return[P.w]},
$isd:1,
$asd:function(){return[P.w]},
$isf:1,
$asf:function(){return[P.w]},
"%":"Float32Array|Float64Array"},
aL:{"^":"eU;",
$asc6:function(){return[P.C]},
$ast:function(){return[P.C]},
$isd:1,
$asd:function(){return[P.C]},
$isf:1,
$asf:function(){return[P.C]}},
lE:{"^":"aL;",
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lF:{"^":"aL;",
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lG:{"^":"aL;",
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lH:{"^":"aL;",
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lI:{"^":"aL;",
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lJ:{"^":"aL;",
gk:function(a){return a.length},
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hA:{"^":"aL;",
gk:function(a){return a.length},
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
bu:function(a,b,c){return new Uint8Array(a.subarray(b,H.kr(b,c,a.length)))},
"%":";Uint8Array"},
eR:{"^":"cS+t;"},
eS:{"^":"eR+c6;"},
eT:{"^":"cS+t;"},
eU:{"^":"eT+c6;"}}],["","",,P,{"^":"",
j6:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kz()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b5(new P.j8(z),1)).observe(y,{childList:true})
return new P.j7(z,y,x)}else if(self.setImmediate!=null)return P.kA()
return P.kB()},
m6:[function(a){self.scheduleImmediate(H.b5(new P.j9(H.b(a,{func:1,ret:-1})),0))},"$1","kz",4,0,11],
m7:[function(a){self.setImmediate(H.b5(new P.ja(H.b(a,{func:1,ret:-1})),0))},"$1","kA",4,0,11],
m8:[function(a){P.d2(C.l,H.b(a,{func:1,ret:-1}))},"$1","kB",4,0,11],
d2:function(a,b){var z
H.b(b,{func:1,ret:-1})
z=C.f.Z(a.a,1000)
return P.k5(z<0?0:z,b)},
ej:function(a,b){var z
H.b(b,{func:1,ret:-1,args:[P.aZ]})
z=C.f.Z(a.a,1000)
return P.k6(z<0?0:z,b)},
kv:function(a,b){if(H.bW(a,{func:1,args:[P.a,P.aq]}))return b.hn(a,null,P.a,P.aq)
if(H.bW(a,{func:1,args:[P.a]}))return H.b(a,{func:1,ret:null,args:[P.a]})
throw H.h(P.bZ(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ku:function(){var z,y
for(;z=$.b3,z!=null;){$.bF=null
y=z.b
$.b3=y
if(y==null)$.bE=null
z.a.$0()}},
mg:[function(){$.dc=!0
try{P.ku()}finally{$.bF=null
$.dc=!1
if($.b3!=null)$.$get$d8().$1(P.f9())}},"$0","f9",0,0,3],
f4:function(a){var z=new P.eM(H.b(a,{func:1,ret:-1}))
if($.b3==null){$.bE=z
$.b3=z
if(!$.dc)$.$get$d8().$1(P.f9())}else{$.bE.b=z
$.bE=z}},
ky:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
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
l0:function(a){var z,y
z={func:1,ret:-1}
H.b(a,z)
y=$.N
if(C.j===y){P.cn(null,null,C.j,a)
return}y.toString
P.cn(null,null,y,H.b(y.bW(a),z))},
ei:function(a,b){var z,y
z={func:1,ret:-1}
H.b(b,z)
y=$.N
if(y===C.j){y.toString
return P.d2(a,b)}return P.d2(a,H.b(y.bW(b),z))},
iy:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aZ]}
H.b(b,z)
y=$.N
if(y===C.j){y.toString
return P.ej(a,b)}x=y.d2(b,P.aZ)
$.N.toString
return P.ej(a,H.b(x,z))},
cm:function(a,b,c,d,e){var z={}
z.a=d
P.ky(new P.kw(z,e))},
f2:function(a,b,c,d,e){var z,y
H.b(d,{func:1,ret:e})
y=$.N
if(y===c)return d.$0()
$.N=c
z=y
try{y=d.$0()
return y}finally{$.N=z}},
f3:function(a,b,c,d,e,f,g){var z,y
H.b(d,{func:1,ret:f,args:[g]})
H.A(e,g)
y=$.N
if(y===c)return d.$1(e)
$.N=c
z=y
try{y=d.$1(e)
return y}finally{$.N=z}},
kx:function(a,b,c,d,e,f,g,h,i){var z,y
H.b(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
y=$.N
if(y===c)return d.$2(e,f)
$.N=c
z=y
try{y=d.$2(e,f)
return y}finally{$.N=z}},
cn:function(a,b,c,d){var z
H.b(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.bW(d):c.fK(d,-1)
P.f4(d)},
j8:{"^":"u:14;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
j7:{"^":"u:23;a,b,c",
$1:function(a){var z,y
this.a.a=H.b(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
j9:{"^":"u:2;a",
$0:function(){this.a.$0()}},
ja:{"^":"u:2;a",
$0:function(){this.a.$0()}},
f_:{"^":"a;a,0b,c",
e8:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b5(new P.k8(this,b),0),a)
else throw H.h(P.ae("`setTimeout()` not found."))},
e9:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b5(new P.k7(this,a,Date.now(),b),0),a)
else throw H.h(P.ae("Periodic timer."))},
$isaZ:1,
p:{
k5:function(a,b){var z=new P.f_(!0,0)
z.e8(a,b)
return z},
k6:function(a,b){var z=new P.f_(!1,0)
z.e9(a,b)
return z}}},
k8:{"^":"u:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
k7:{"^":"u:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.dY(w,x)}z.c=y
this.d.$1(z)}},
b2:{"^":"a;0a,b,c,d,e,$ti",
h6:function(a){if(this.c!==6)return!0
return this.b.b.cn(H.b(this.d,{func:1,ret:P.a4,args:[P.a]}),a.a,P.a4,P.a)},
fY:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.bW(z,{func:1,args:[P.a,P.aq]}))return H.dh(w.hs(z,a.a,a.b,null,y,P.aq),x)
else return H.dh(w.cn(H.b(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aH:{"^":"a;cW:a<,b,0f3:c<,$ti",
dM:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.N
if(y!==C.j){y.toString
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kv(b,y)}H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aH(0,$.N,[c])
w=b==null?1:3
this.cG(new P.b2(x,w,a,b,[z,c]))
return x},
hx:function(a,b){return this.dM(a,null,b)},
cG:function(a){var z,y
z=this.a
if(z<=1){a.a=H.k(this.c,"$isb2")
this.c=a}else{if(z===2){y=H.k(this.c,"$isaH")
z=y.a
if(z<4){y.cG(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cn(null,null,z,H.b(new P.jo(this,a),{func:1,ret:-1}))}},
cS:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.k(this.c,"$isb2")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.k(this.c,"$isaH")
y=u.a
if(y<4){u.cS(a)
return}this.a=y
this.c=u.c}z.a=this.b7(a)
y=this.b
y.toString
P.cn(null,null,y,H.b(new P.jt(z,this),{func:1,ret:-1}))}},
bP:function(){var z=H.k(this.c,"$isb2")
this.c=null
return this.b7(z)},
b7:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cJ:function(a){var z,y,x,w
z=H.y(this,0)
H.dh(a,{futureOr:1,type:z})
y=this.$ti
x=H.bH(a,"$isbg",y,"$asbg")
if(x){z=H.bH(a,"$isaH",y,null)
if(z)P.eO(a,this)
else P.jp(a,this)}else{w=this.bP()
H.A(a,z)
this.a=4
this.c=a
P.bB(this,w)}},
bA:[function(a,b){var z
H.k(b,"$isaq")
z=this.bP()
this.a=8
this.c=new P.ag(a,b)
P.bB(this,z)},function(a){return this.bA(a,null)},"hG","$2","$1","gei",4,2,30],
$isbg:1,
p:{
jp:function(a,b){var z,y,x
b.a=1
try{a.dM(new P.jq(b),new P.jr(b),null)}catch(x){z=H.aR(x)
y=H.b7(x)
P.l0(new P.js(b,z,y))}},
eO:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.k(a.c,"$isaH")
if(z>=4){y=b.bP()
b.a=a.a
b.c=a.c
P.bB(b,y)}else{y=H.k(b.c,"$isb2")
b.a=2
b.c=a
a.cS(y)}},
bB:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.k(y.c,"$isag")
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
if(p){H.k(r,"$isag")
y=y.b
u=r.a
t=r.b
y.toString
P.cm(null,null,y,u,t)
return}o=$.N
if(o==null?q!=null:o!==q)$.N=q
else o=null
y=b.c
if(y===8)new P.jw(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jv(x,b,r).$0()}else if((y&2)!==0)new P.ju(z,x,b).$0()
if(o!=null)$.N=o
y=x.b
if(!!J.J(y).$isbg){if(y.a>=4){n=H.k(t.c,"$isb2")
t.c=null
b=t.b7(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eO(y,t)
return}}m=b.b
n=H.k(m.c,"$isb2")
m.c=null
b=m.b7(n)
y=x.a
u=x.b
if(!y){H.A(u,H.y(m,0))
m.a=4
m.c=u}else{H.k(u,"$isag")
m.a=8
m.c=u}z.a=m
y=m}}}},
jo:{"^":"u:2;a,b",
$0:function(){P.bB(this.a,this.b)}},
jt:{"^":"u:2;a,b",
$0:function(){P.bB(this.b,this.a.a)}},
jq:{"^":"u:14;a",
$1:function(a){var z=this.a
z.a=0
z.cJ(a)}},
jr:{"^":"u:34;a",
$2:function(a,b){this.a.bA(a,H.k(b,"$isaq"))},
$1:function(a){return this.$2(a,null)}},
js:{"^":"u:2;a,b,c",
$0:function(){this.a.bA(this.b,this.c)}},
jw:{"^":"u:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dL(H.b(w.d,{func:1}),null)}catch(v){y=H.aR(v)
x=H.b7(v)
if(this.d){w=H.k(this.a.a.c,"$isag").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.k(this.a.a.c,"$isag")
else u.b=new P.ag(y,x)
u.a=!0
return}if(!!J.J(z).$isbg){if(z instanceof P.aH&&z.gcW()>=4){if(z.gcW()===8){w=this.b
w.b=H.k(z.gf3(),"$isag")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.hx(new P.jx(t),null)
w.a=!1}}},
jx:{"^":"u:36;a",
$1:function(a){return this.a}},
jv:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.A(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.cn(H.b(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aR(t)
y=H.b7(t)
x=this.a
x.b=new P.ag(z,y)
x.a=!0}}},
ju:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.k(this.a.a.c,"$isag")
w=this.c
if(w.h6(z)&&w.e!=null){v=this.b
v.b=w.fY(z)
v.a=!1}}catch(u){y=H.aR(u)
x=H.b7(u)
w=H.k(this.a.a.c,"$isag")
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
this.h4(new P.il(z,this),!0,new P.im(z,y),y.gei())
return y}},
il:{"^":"u;a,b",
$1:function(a){H.A(a,H.am(this.b,"cZ",0));++this.a.a},
$S:function(){return{func:1,ret:P.I,args:[H.am(this.b,"cZ",0)]}}},
im:{"^":"u:2;a,b",
$0:function(){this.b.cJ(this.a.a)}},
ee:{"^":"a;$ti"},
ik:{"^":"a;"},
aZ:{"^":"a;"},
ag:{"^":"a;a,b",
i:function(a){return H.j(this.a)},
$isX:1},
kf:{"^":"a;",$ism5:1},
kw:{"^":"u:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.e4()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.h(z)
x=H.h(z)
x.stack=y.i(0)
throw x}},
jS:{"^":"kf;",
ht:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
try{if(C.j===$.N){a.$0()
return}P.f2(null,null,this,a,-1)}catch(x){z=H.aR(x)
y=H.b7(x)
P.cm(null,null,this,z,H.k(y,"$isaq"))}},
hu:function(a,b,c){var z,y,x
H.b(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.j===$.N){a.$1(b)
return}P.f3(null,null,this,a,b,-1,c)}catch(x){z=H.aR(x)
y=H.b7(x)
P.cm(null,null,this,z,H.k(y,"$isaq"))}},
fK:function(a,b){return new P.jU(this,H.b(a,{func:1,ret:b}),b)},
bW:function(a){return new P.jT(this,H.b(a,{func:1,ret:-1}))},
d2:function(a,b){return new P.jV(this,H.b(a,{func:1,ret:-1,args:[b]}),b)},
dL:function(a,b){H.b(a,{func:1,ret:b})
if($.N===C.j)return a.$0()
return P.f2(null,null,this,a,b)},
cn:function(a,b,c,d){H.b(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.N===C.j)return a.$1(b)
return P.f3(null,null,this,a,b,c,d)},
hs:function(a,b,c,d,e,f){H.b(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.N===C.j)return a.$2(b,c)
return P.kx(null,null,this,a,b,c,d,e,f)},
hn:function(a,b,c,d){return H.b(a,{func:1,ret:b,args:[c,d]})}},
jU:{"^":"u;a,b,c",
$0:function(){return this.a.dL(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jT:{"^":"u:3;a,b",
$0:function(){return this.a.ht(this.b)}},
jV:{"^":"u;a,b,c",
$1:function(a){var z=this.c
return this.a.hu(this.b,H.A(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hd:function(a,b,c){H.bJ(a)
return H.v(H.kJ(a,new H.aV(0,0,[b,c])),"$isdU",[b,c],"$asdU")},
hc:function(a,b){return new H.aV(0,0,[a,b])},
he:function(a,b,c,d){return new P.jE(0,0,[d])},
h1:function(a,b,c){var z,y
if(P.dd(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bG()
C.a.h(y,a)
try{P.kt(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.ef(b,H.kU(z,"$isd"),", ")+c
return y.charCodeAt(0)==0?y:y},
cG:function(a,b,c){var z,y,x
if(P.dd(a))return b+"..."+c
z=new P.bT(b)
y=$.$get$bG()
C.a.h(y,a)
try{x=z
x.a=P.ef(x.gax(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gax()+c
y=z.gax()
return y.charCodeAt(0)==0?y:y},
dd:function(a){var z,y
for(z=0;y=$.$get$bG(),z<y.length;++z)if(a===y[z])return!0
return!1},
kt:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gX(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.B())return
w=H.j(z.gN(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.B()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gN(z);++x
if(!z.B()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gN(z);++x
for(;z.B();t=s,s=r){r=z.gN(z);++x
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
dY:function(a){var z,y,x
z={}
if(P.dd(a))return"{...}"
y=new P.bT("")
try{C.a.h($.$get$bG(),a)
x=y
x.a=x.gax()+"{"
z.a=!0
J.fq(a,new P.hj(z,y))
z=y
z.a=z.gax()+"}"}finally{z=$.$get$bG()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.gax()
return z.charCodeAt(0)==0?z:z},
jE:{"^":"jy;a,0b,0c,0d,0e,0f,r,$ti",
gX:function(a){return P.eQ(this,this.r,H.y(this,0))},
gk:function(a){return this.a},
h:function(a,b){var z,y
H.A(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.da()
this.b=z}return this.cH(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.da()
this.c=y}return this.cH(y,b)}else return this.eb(0,b)},
eb:function(a,b){var z,y,x
H.A(b,H.y(this,0))
z=this.d
if(z==null){z=P.da()
this.d=z}y=this.cK(b)
x=z[y]
if(x==null)z[y]=[this.bz(b)]
else{if(this.cP(x,b)>=0)return!1
x.push(this.bz(b))}return!0},
R:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cT(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cT(this.c,b)
else return this.eZ(0,b)},
eZ:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.ep(z,b)
x=this.cP(y,b)
if(x<0)return!1
this.cY(y.splice(x,1)[0])
return!0},
cH:function(a,b){H.A(b,H.y(this,0))
if(H.k(a[b],"$isd9")!=null)return!1
a[b]=this.bz(b)
return!0},
cT:function(a,b){var z
if(a==null)return!1
z=H.k(a[b],"$isd9")
if(z==null)return!1
this.cY(z)
delete a[b]
return!0},
cI:function(){this.r=this.r+1&67108863},
bz:function(a){var z,y
z=new P.d9(H.A(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cI()
return z},
cY:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cI()},
cK:function(a){return J.aS(a)&0x3ffffff},
ep:function(a,b){return a[this.cK(b)]},
cP:function(a,b){var z,y
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
jF:{"^":"a;a,b,0c,0d,$ti",
gN:function(a){return this.d},
B:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.bb(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.A(z.a,H.y(this,0))
this.c=z.b
return!0}}},
p:{
eQ:function(a,b,c){var z=new P.jF(a,b,[c])
z.c=a.e
return z}}},
jy:{"^":"i1;"},
ca:{"^":"jG;",$isd:1,$isf:1},
t:{"^":"a;$ti",
gX:function(a){return new H.dW(a,this.gk(a),0,[H.bI(this,a,"t",0)])},
C:function(a,b){return this.j(a,b)},
hA:function(a,b){var z,y,x
z=H.c([],[H.bI(this,a,"t",0)])
C.a.sk(z,this.gk(a))
y=0
while(!0){x=this.gk(a)
if(typeof x!=="number")return H.p(x)
if(!(y<x))break
C.a.S(z,y,this.j(a,y));++y}return z},
hz:function(a){return this.hA(a,!0)},
i:function(a){return P.cG(a,"[","]")}},
hi:{"^":"aa;"},
hj:{"^":"u:12;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
aa:{"^":"a;$ti",
K:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.bI(this,a,"aa",0),H.bI(this,a,"aa",1)]})
for(z=J.bK(this.gaq(a));z.B();){y=z.gN(z)
b.$2(y,this.j(a,y))}},
gk:function(a){return J.b9(this.gaq(a))},
i:function(a){return P.dY(a)},
$isa2:1},
i3:{"^":"a;$ti",
i:function(a){return P.cG(this,"{","}")},
C:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.dr("index"))
if(b<0)H.r(P.aj(b,0,null,"index",null))
for(z=P.eQ(this,this.r,H.y(this,0)),y=0;z.B();){x=z.d
if(b===y)return x;++y}throw H.h(P.M(b,this,"index",null,y))},
$isd:1},
i1:{"^":"i3;"},
jG:{"^":"a+t;"}}],["","",,P,{"^":"",cA:{"^":"a;$ti"},dA:{"^":"ik;$ti"},fR:{"^":"cA;",
$ascA:function(){return[P.n,[P.f,P.C]]}},iU:{"^":"fR;a"},iV:{"^":"dA;",
fO:function(a,b,c){var z,y,x,w
z=a.length
P.e9(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.ke(0,0,x)
if(w.eo(a,b,z)!==z)w.cZ(C.h.c0(a,z-1),0)
return C.I.bu(x,0,w.b)},
fN:function(a){return this.fO(a,0,null)},
$asdA:function(){return[P.n,[P.f,P.C]]}},ke:{"^":"a;a,b,c",
cZ:function(a,b){var z,y,x,w,v
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
eo:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.h.c0(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.h.b5(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.cZ(w,C.h.b5(a,u)))x=u}else if(w<=2047){v=this.b
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
fT:function(a){var z=J.J(a)
if(!!z.$isu)return z.i(a)
return"Instance of '"+H.aX(a)+"'"},
hf:function(a,b,c,d){var z,y
H.A(b,d)
z=J.h3(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.S(z,y,b)
return H.v(z,"$isf",[d],"$asf")},
hg:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gX(a);x.B();)C.a.h(y,H.A(x.gN(x),c))
if(b)return y
return H.v(J.bj(y),"$isf",z,"$asf")},
d_:function(a,b,c){var z,y
z=P.C
H.v(a,"$isd",[z],"$asd")
if(a.constructor===Array){H.v(a,"$isaU",[z],"$asaU")
y=a.length
c=P.e9(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a7()
z=c<y}else z=!0
return H.e8(z?C.a.bu(a,b,c):a)}return P.io(a,b,c)},
io:function(a,b,c){var z,y,x
H.v(a,"$isd",[P.C],"$asd")
z=J.bK(a)
for(y=0;y<b;++y)if(!z.B())throw H.h(P.aj(b,0,y,null,null))
x=[]
for(;z.B();)x.push(z.gN(z))
return H.e8(x)},
hT:function(a,b,c){return new H.h5(a,H.h6(a,!1,!0,!1))},
kd:function(a,b,c,d){var z,y,x,w,v,u
H.v(a,"$isf",[P.C],"$asf")
if(c===C.q){z=$.$get$f1().b
z=z.test(b)}else z=!1
if(z)return b
y=C.v.fN(H.A(b,H.am(c,"cA",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.i(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.hO(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
c5:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a5(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fT(a)},
q:function(a){return new P.eN(a)},
dp:function(a){H.kZ(a)},
a4:{"^":"a;"},
"+bool":0,
ao:{"^":"a;a,b",
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.ao))return!1
return this.a===b.a&&this.b===b.b},
gV:function(a){var z=this.a
return(z^C.f.b8(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fJ(H.hN(this))
y=P.bM(H.hL(this))
x=P.bM(H.hH(this))
w=P.bM(H.hI(this))
v=P.bM(H.hK(this))
u=P.bM(H.hM(this))
t=P.fK(H.hJ(this))
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
a7:function(a,b){return C.f.a7(this.a,H.k(b,"$isbd").a)},
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
return""+C.f.Z(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
p:{
dK:function(a,b,c,d,e,f){return new P.bd(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fN:{"^":"u:13;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fO:{"^":"u:13;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
X:{"^":"a;"},
e4:{"^":"X;",
i:function(a){return"Throw of null."}},
az:{"^":"X;a,b,c,d",
gbC:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbB:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gbC()+y+x
if(!this.a)return w
v=this.gbB()
u=P.c5(this.b)
return w+v+": "+H.j(u)},
p:{
fs:function(a){return new P.az(!1,null,null,a)},
bZ:function(a,b,c){return new P.az(!0,a,b,c)},
dr:function(a){return new P.az(!1,null,a,"Must not be null")}}},
cc:{"^":"az;e,f,a,b,c,d",
gbC:function(){return"RangeError"},
gbB:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
p:{
cd:function(a,b,c){return new P.cc(null,null,!0,a,b,"Value not in range")},
aj:function(a,b,c,d,e){return new P.cc(b,c,!0,a,d,"Invalid value")},
e9:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.p(a)
if(0<=a){if(typeof c!=="number")return H.p(c)
z=a>c}else z=!0
if(z)throw H.h(P.aj(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.p(c)
z=b>c}else z=!0
if(z)throw H.h(P.aj(b,a,c,"end",f))
return b}return c}}},
h0:{"^":"az;e,k:f>,a,b,c,d",
gbC:function(){return"RangeError"},
gbB:function(){if(J.fn(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
p:{
M:function(a,b,c,d,e){var z=H.Y(e!=null?e:J.b9(b))
return new P.h0(b,z,!0,a,c,"Index out of range")}}},
iP:{"^":"X;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
ae:function(a){return new P.iP(a)}}},
iM:{"^":"X;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
eF:function(a){return new P.iM(a)}}},
ig:{"^":"X;a",
i:function(a){return"Bad state: "+this.a}},
fE:{"^":"X;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.c5(z))+"."},
p:{
bb:function(a){return new P.fE(a)}}},
hD:{"^":"a;",
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
if(x.length>78)x=C.h.bv(x,0,75)+"..."
return y+"\n"+x}},
C:{"^":"W;"},
"+int":0,
d:{"^":"a;$ti",
gk:function(a){var z,y
z=this.gX(this)
for(y=0;z.B();)++y
return y},
C:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.dr("index"))
if(b<0)H.r(P.aj(b,0,null,"index",null))
for(z=this.gX(this),y=0;z.B();){x=z.gN(z)
if(b===y)return x;++y}throw H.h(P.M(b,this,"index",null,y))},
i:function(a){return P.h1(this,"(",")")}},
cH:{"^":"a;$ti"},
f:{"^":"a;$ti",$isd:1},
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
n:{"^":"a;",$ise5:1},
"+String":0,
bT:{"^":"a;ax:a<",
gk:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
ef:function(a,b,c){var z=J.bK(b)
if(!z.B())return a
if(c.length===0){do a+=H.j(z.gN(z))
while(z.B())}else{a+=H.j(z.gN(z))
for(;z.B();)a=a+c+H.j(z.gN(z))}return a}}}}],["","",,W,{"^":"",
cz:function(a,b){var z=document.createElement("canvas")
return z},
fQ:function(a){H.k(a,"$isa7")
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
H.b(a,{func:1,ret:-1,args:[b]})
z=$.N
if(z===C.j)return a
return z.d2(a,b)},
bi:{"^":"a_;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
l7:{"^":"o;0k:length=","%":"AccessibleNodeList"},
l8:{"^":"bi;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
l9:{"^":"bi;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
fw:{"^":"o;","%":";Blob"},
cy:{"^":"bi;",
bt:function(a,b,c){if(c!=null)return a.getContext(b,P.kD(c,null))
return a.getContext(b)},
dQ:function(a,b){return this.bt(a,b,null)},
$iscy:1,
"%":"HTMLCanvasElement"},
dx:{"^":"o;",$isdx:1,"%":"CanvasRenderingContext2D"},
lf:{"^":"K;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
lh:{"^":"fH;0k:length=","%":"CSSPerspective"},
bc:{"^":"o;",$isbc:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
li:{"^":"je;0k:length=",
dR:function(a,b){var z=a.getPropertyValue(this.ef(a,b))
return z==null?"":z},
ef:function(a,b){var z,y
z=$.$get$dB()
y=z[b]
if(typeof y==="string")return y
y=this.fc(a,b)
z[b]=y
return y},
fc:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fL()+b
if(z in a)return z
return b},
gbX:function(a){return a.bottom},
gah:function(a){return a.height},
gaJ:function(a){return a.left},
gaX:function(a){return a.right},
gb2:function(a){return a.top},
gai:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fG:{"^":"a;",
gaJ:function(a){return this.dR(a,"left")}},
dC:{"^":"o;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
fH:{"^":"o;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
lj:{"^":"dC;0k:length=","%":"CSSTransformValue"},
lk:{"^":"dC;0k:length=","%":"CSSUnparsedValue"},
ll:{"^":"o;0k:length=","%":"DataTransferItemList"},
lm:{"^":"o;",
i:function(a){return String(a)},
"%":"DOMException"},
ln:{"^":"jg;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[[P.a9,P.W]]},
$ast:function(){return[[P.a9,P.W]]},
$isd:1,
$asd:function(){return[[P.a9,P.W]]},
$isf:1,
$asf:function(){return[[P.a9,P.W]]},
$asz:function(){return[[P.a9,P.W]]},
"%":"ClientRectList|DOMRectList"},
fM:{"^":"o;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gai(a))+" x "+H.j(this.gah(a))},
q:function(a,b){var z
if(b==null)return!1
z=H.bH(b,"$isa9",[P.W],"$asa9")
if(!z)return!1
z=J.cp(b)
return a.left===z.gaJ(b)&&a.top===z.gb2(b)&&this.gai(a)===z.gai(b)&&this.gah(a)===z.gah(b)},
gV:function(a){return W.eP(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gai(a)&0x1FFFFFFF,this.gah(a)&0x1FFFFFFF)},
gbX:function(a){return a.bottom},
gah:function(a){return a.height},
gaJ:function(a){return a.left},
gaX:function(a){return a.right},
gb2:function(a){return a.top},
gai:function(a){return a.width},
$isa9:1,
$asa9:function(){return[P.W]},
"%":";DOMRectReadOnly"},
lo:{"^":"ji;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[P.n]},
$ast:function(){return[P.n]},
$isd:1,
$asd:function(){return[P.n]},
$isf:1,
$asf:function(){return[P.n]},
$asz:function(){return[P.n]},
"%":"DOMStringList"},
lp:{"^":"o;0k:length=","%":"DOMTokenList"},
jd:{"^":"ca;a,b",
gk:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return H.k(z[b],"$isa_")},
h:function(a,b){this.a.appendChild(b)
return b},
gX:function(a){var z=this.hz(this)
return new J.af(z,z.length,0,[H.y(z,0)])},
$ast:function(){return[W.a_]},
$asd:function(){return[W.a_]},
$asf:function(){return[W.a_]}},
a_:{"^":"K;",
gd4:function(a){return new W.jd(a,a.children)},
gd5:function(a){return P.hQ(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.W)},
i:function(a){return a.localName},
$isa_:1,
"%":";Element"},
a6:{"^":"o;",$isa6:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a7:{"^":"o;",
d_:["dU",function(a,b,c,d){H.b(c,{func:1,args:[W.a6]})
if(c!=null)this.ec(a,b,c,!1)}],
ec:function(a,b,c,d){return a.addEventListener(b,H.b5(H.b(c,{func:1,args:[W.a6]}),1),!1)},
$isa7:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eV|eW|eY|eZ"},
bf:{"^":"fw;",$isbf:1,"%":"File"},
lq:{"^":"jn;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bf]},
$ast:function(){return[W.bf]},
$isd:1,
$asd:function(){return[W.bf]},
$isf:1,
$asf:function(){return[W.bf]},
$asz:function(){return[W.bf]},
"%":"FileList"},
lr:{"^":"a7;0k:length=","%":"FileWriter"},
ls:{"^":"bi;0k:length=","%":"HTMLFormElement"},
bh:{"^":"o;",$isbh:1,"%":"Gamepad"},
lt:{"^":"o;0k:length=","%":"History"},
lu:{"^":"jA;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.K]},
$ast:function(){return[W.K]},
$isd:1,
$asd:function(){return[W.K]},
$isf:1,
$asf:function(){return[W.K]},
$asz:function(){return[W.K]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c7:{"^":"o;0d7:data=",$isc7:1,"%":"ImageData"},
dN:{"^":"bi;",$isdN:1,"%":"HTMLImageElement"},
bk:{"^":"d3;",$isbk:1,"%":"KeyboardEvent"},
ly:{"^":"o;",
i:function(a){return String(a)},
"%":"Location"},
lz:{"^":"o;0k:length=","%":"MediaList"},
lA:{"^":"a7;",
d_:function(a,b,c,d){H.b(c,{func:1,args:[W.a6]})
if(b==="message")a.start()
this.dU(a,b,c,!1)},
"%":"MessagePort"},
lB:{"^":"jH;",
j:function(a,b){return P.aI(a.get(H.S(b)))},
K:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aI(y.value[1]))}},
gaq:function(a){var z=H.c([],[P.n])
this.K(a,new W.hv(z))
return z},
gk:function(a){return a.size},
$asaa:function(){return[P.n,null]},
$isa2:1,
$asa2:function(){return[P.n,null]},
"%":"MIDIInputMap"},
hv:{"^":"u:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lC:{"^":"jI;",
j:function(a,b){return P.aI(a.get(H.S(b)))},
K:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aI(y.value[1]))}},
gaq:function(a){var z=H.c([],[P.n])
this.K(a,new W.hw(z))
return z},
gk:function(a){return a.size},
$asaa:function(){return[P.n,null]},
$isa2:1,
$asa2:function(){return[P.n,null]},
"%":"MIDIOutputMap"},
hw:{"^":"u:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bl:{"^":"o;",$isbl:1,"%":"MimeType"},
lD:{"^":"jK;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bl]},
$ast:function(){return[W.bl]},
$isd:1,
$asd:function(){return[W.bl]},
$isf:1,
$asf:function(){return[W.bl]},
$asz:function(){return[W.bl]},
"%":"MimeTypeArray"},
ap:{"^":"d3;",$isap:1,"%":"PointerEvent;DragEvent|MouseEvent"},
jc:{"^":"ca;a",
gX:function(a){var z=this.a.childNodes
return new W.dL(z,z.length,-1,[H.bI(C.J,z,"z",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
$ast:function(){return[W.K]},
$asd:function(){return[W.K]},
$asf:function(){return[W.K]}},
K:{"^":"a7;",
i:function(a){var z=a.nodeValue
return z==null?this.dV(a):z},
$isK:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hB:{"^":"jM;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.K]},
$ast:function(){return[W.K]},
$isd:1,
$asd:function(){return[W.K]},
$isf:1,
$asf:function(){return[W.K]},
$asz:function(){return[W.K]},
"%":"NodeList|RadioNodeList"},
bo:{"^":"o;0k:length=",$isbo:1,"%":"Plugin"},
lM:{"^":"jQ;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bo]},
$ast:function(){return[W.bo]},
$isd:1,
$asd:function(){return[W.bo]},
$isf:1,
$asf:function(){return[W.bo]},
$asz:function(){return[W.bo]},
"%":"PluginArray"},
lO:{"^":"jW;",
j:function(a,b){return P.aI(a.get(H.S(b)))},
K:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aI(y.value[1]))}},
gaq:function(a){var z=H.c([],[P.n])
this.K(a,new W.hZ(z))
return z},
gk:function(a){return a.size},
$asaa:function(){return[P.n,null]},
$isa2:1,
$asa2:function(){return[P.n,null]},
"%":"RTCStatsReport"},
hZ:{"^":"u:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lP:{"^":"bi;0k:length=","%":"HTMLSelectElement"},
br:{"^":"a7;",$isbr:1,"%":"SourceBuffer"},
lQ:{"^":"eW;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.br]},
$ast:function(){return[W.br]},
$isd:1,
$asd:function(){return[W.br]},
$isf:1,
$asf:function(){return[W.br]},
$asz:function(){return[W.br]},
"%":"SourceBufferList"},
bs:{"^":"o;",$isbs:1,"%":"SpeechGrammar"},
lR:{"^":"jY;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bs]},
$ast:function(){return[W.bs]},
$isd:1,
$asd:function(){return[W.bs]},
$isf:1,
$asf:function(){return[W.bs]},
$asz:function(){return[W.bs]},
"%":"SpeechGrammarList"},
bt:{"^":"o;0k:length=",$isbt:1,"%":"SpeechRecognitionResult"},
lT:{"^":"k0;",
j:function(a,b){return a.getItem(H.S(b))},
K:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,P.n]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gaq:function(a){var z=H.c([],[P.n])
this.K(a,new W.ij(z))
return z},
gk:function(a){return a.length},
$asaa:function(){return[P.n,P.n]},
$isa2:1,
$asa2:function(){return[P.n,P.n]},
"%":"Storage"},
ij:{"^":"u:38;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bu:{"^":"o;",$isbu:1,"%":"CSSStyleSheet|StyleSheet"},
bv:{"^":"a7;",$isbv:1,"%":"TextTrack"},
bw:{"^":"a7;",$isbw:1,"%":"TextTrackCue|VTTCue"},
lX:{"^":"k4;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bw]},
$ast:function(){return[W.bw]},
$isd:1,
$asd:function(){return[W.bw]},
$isf:1,
$asf:function(){return[W.bw]},
$asz:function(){return[W.bw]},
"%":"TextTrackCueList"},
lY:{"^":"eZ;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bv]},
$ast:function(){return[W.bv]},
$isd:1,
$asd:function(){return[W.bv]},
$isf:1,
$asf:function(){return[W.bv]},
$asz:function(){return[W.bv]},
"%":"TextTrackList"},
lZ:{"^":"o;0k:length=","%":"TimeRanges"},
bx:{"^":"o;",$isbx:1,"%":"Touch"},
b_:{"^":"d3;",$isb_:1,"%":"TouchEvent"},
m_:{"^":"ka;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bx]},
$ast:function(){return[W.bx]},
$isd:1,
$asd:function(){return[W.bx]},
$isf:1,
$asf:function(){return[W.bx]},
$asz:function(){return[W.bx]},
"%":"TouchList"},
m0:{"^":"o;0k:length=","%":"TrackDefaultList"},
d3:{"^":"a6;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
m3:{"^":"o;",
i:function(a){return String(a)},
"%":"URL"},
m4:{"^":"a7;0k:length=","%":"VideoTrackList"},
bA:{"^":"ap;",
gfS:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.ae("deltaY is not supported"))},
gfR:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.ae("deltaX is not supported"))},
$isbA:1,
"%":"WheelEvent"},
j5:{"^":"a7;",
f_:function(a,b){return a.requestAnimationFrame(H.b5(H.b(b,{func:1,ret:-1,args:[P.W]}),1))},
en:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
m9:{"^":"kh;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bc]},
$ast:function(){return[W.bc]},
$isd:1,
$asd:function(){return[W.bc]},
$isf:1,
$asf:function(){return[W.bc]},
$asz:function(){return[W.bc]},
"%":"CSSRuleList"},
ma:{"^":"fM;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
q:function(a,b){var z
if(b==null)return!1
z=H.bH(b,"$isa9",[P.W],"$asa9")
if(!z)return!1
z=J.cp(b)
return a.left===z.gaJ(b)&&a.top===z.gb2(b)&&a.width===z.gai(b)&&a.height===z.gah(b)},
gV:function(a){return W.eP(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gah:function(a){return a.height},
gai:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mc:{"^":"kj;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bh]},
$ast:function(){return[W.bh]},
$isd:1,
$asd:function(){return[W.bh]},
$isf:1,
$asf:function(){return[W.bh]},
$asz:function(){return[W.bh]},
"%":"GamepadList"},
md:{"^":"kl;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.K]},
$ast:function(){return[W.K]},
$isd:1,
$asd:function(){return[W.K]},
$isf:1,
$asf:function(){return[W.K]},
$asz:function(){return[W.K]},
"%":"MozNamedAttrMap|NamedNodeMap"},
me:{"^":"kn;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bt]},
$ast:function(){return[W.bt]},
$isd:1,
$asd:function(){return[W.bt]},
$isf:1,
$asf:function(){return[W.bt]},
$asz:function(){return[W.bt]},
"%":"SpeechRecognitionResultList"},
mf:{"^":"kp;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isD:1,
$asD:function(){return[W.bu]},
$ast:function(){return[W.bu]},
$isd:1,
$asd:function(){return[W.bu]},
$isf:1,
$asf:function(){return[W.bu]},
$asz:function(){return[W.bu]},
"%":"StyleSheetList"},
jj:{"^":"cZ;a,b,c,$ti",
h4:function(a,b,c,d){var z=H.y(this,0)
H.b(a,{func:1,ret:-1,args:[z]})
H.b(c,{func:1,ret:-1})
return W.V(this.a,this.b,a,!1,z)}},
mb:{"^":"jj;a,b,c,$ti"},
jk:{"^":"ee;a,b,c,d,e,$ti",
fg:function(){var z=this.d
if(z!=null&&this.a<=0)J.fp(this.b,this.c,z,!1)},
p:{
V:function(a,b,c,d,e){var z=c==null?null:W.f6(new W.jl(c),W.a6)
z=new W.jk(0,a,b,z,!1,[e])
z.fg()
return z}}},
jl:{"^":"u:7;a",
$1:function(a){return this.a.$1(H.k(a,"$isa6"))}},
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
gN:function(a){return this.d}},
je:{"^":"o+fG;"},
jf:{"^":"o+t;"},
jg:{"^":"jf+z;"},
jh:{"^":"o+t;"},
ji:{"^":"jh+z;"},
jm:{"^":"o+t;"},
jn:{"^":"jm+z;"},
jz:{"^":"o+t;"},
jA:{"^":"jz+z;"},
jH:{"^":"o+aa;"},
jI:{"^":"o+aa;"},
jJ:{"^":"o+t;"},
jK:{"^":"jJ+z;"},
jL:{"^":"o+t;"},
jM:{"^":"jL+z;"},
jP:{"^":"o+t;"},
jQ:{"^":"jP+z;"},
jW:{"^":"o+aa;"},
eV:{"^":"a7+t;"},
eW:{"^":"eV+z;"},
jX:{"^":"o+t;"},
jY:{"^":"jX+z;"},
k0:{"^":"o+aa;"},
k3:{"^":"o+t;"},
k4:{"^":"k3+z;"},
eY:{"^":"a7+t;"},
eZ:{"^":"eY+z;"},
k9:{"^":"o+t;"},
ka:{"^":"k9+z;"},
kg:{"^":"o+t;"},
kh:{"^":"kg+z;"},
ki:{"^":"o+t;"},
kj:{"^":"ki+z;"},
kk:{"^":"o+t;"},
kl:{"^":"kk+z;"},
km:{"^":"o+t;"},
kn:{"^":"km+z;"},
ko:{"^":"o+t;"},
kp:{"^":"ko+z;"}}],["","",,P,{"^":"",
kG:function(a){var z,y
z=J.J(a)
if(!!z.$isc7){y=z.gd7(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.f0(a.data,a.height,a.width)},
kF:function(a){if(a instanceof P.f0)return{data:a.a,height:a.b,width:a.c}
return a},
aI:function(a){var z,y,x,w,v
if(a==null)return
z=P.hc(P.n,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w){v=H.S(y[w])
z.S(0,v,a[v])}return z},
kD:function(a,b){var z={}
a.K(0,new P.kE(z))
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
f0:{"^":"a;d7:a>,b,c",$isc7:1},
kE:{"^":"u:12;a",
$2:function(a,b){this.a[a]=b}},
fV:{"^":"ca;a,b",
gbG:function(){var z,y,x
z=this.b
y=H.am(z,"t",0)
x=W.a_
return new H.hk(new H.j3(z,H.b(new P.fW(),{func:1,ret:P.a4,args:[y]}),[y]),H.b(new P.fX(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.b9(this.gbG().a)},
j:function(a,b){var z=this.gbG()
return z.b.$1(J.dq(z.a,b))},
gX:function(a){var z=P.hg(this.gbG(),!1,W.a_)
return new J.af(z,z.length,0,[H.y(z,0)])},
$ast:function(){return[W.a_]},
$asd:function(){return[W.a_]},
$asf:function(){return[W.a_]}},
fW:{"^":"u:24;",
$1:function(a){return!!J.J(H.k(a,"$isK")).$isa_}},
fX:{"^":"u:25;",
$1:function(a){return H.e(H.k(a,"$isK"),"$isa_")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
ck:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jB:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jR:{"^":"a;$ti",
gaX:function(a){var z=this.a
if(typeof z!=="number")return z.D()
return H.A(z+this.c,H.y(this,0))},
gbX:function(a){var z=this.b
if(typeof z!=="number")return z.D()
return H.A(z+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
q:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bH(b,"$isa9",[P.W],"$asa9")
if(!z)return!1
z=this.a
y=J.cp(b)
x=y.gaJ(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb2(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.D()
w=H.y(this,0)
if(H.A(z+this.c,w)===y.gaX(b)){if(typeof x!=="number")return x.D()
z=H.A(x+this.d,w)===y.gbX(b)}else z=!1}else z=!1}else z=!1
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
return P.jB(P.ck(P.ck(P.ck(P.ck(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a9:{"^":"jR;aJ:a>,b2:b>,ai:c>,ah:d>,$ti",p:{
hQ:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.a7()
if(c<0)z=-c*0
else z=c
H.A(z,e)
if(typeof d!=="number")return d.a7()
if(d<0)y=-d*0
else y=d
return new P.a9(a,b,z,H.A(y,e),[e])}}}}],["","",,P,{"^":"",bQ:{"^":"o;",$isbQ:1,"%":"SVGLength"},lx:{"^":"jD;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$ast:function(){return[P.bQ]},
$isd:1,
$asd:function(){return[P.bQ]},
$isf:1,
$asf:function(){return[P.bQ]},
$asz:function(){return[P.bQ]},
"%":"SVGLengthList"},bS:{"^":"o;",$isbS:1,"%":"SVGNumber"},lK:{"^":"jO;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$ast:function(){return[P.bS]},
$isd:1,
$asd:function(){return[P.bS]},
$isf:1,
$asf:function(){return[P.bS]},
$asz:function(){return[P.bS]},
"%":"SVGNumberList"},lN:{"^":"o;0k:length=","%":"SVGPointList"},lU:{"^":"k2;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$ast:function(){return[P.n]},
$isd:1,
$asd:function(){return[P.n]},
$isf:1,
$asf:function(){return[P.n]},
$asz:function(){return[P.n]},
"%":"SVGStringList"},lV:{"^":"a_;",
gd4:function(a){return new P.fV(a,new W.jc(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"},bV:{"^":"o;",$isbV:1,"%":"SVGTransform"},m1:{"^":"kc;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$ast:function(){return[P.bV]},
$isd:1,
$asd:function(){return[P.bV]},
$isf:1,
$asf:function(){return[P.bV]},
$asz:function(){return[P.bV]},
"%":"SVGTransformList"},jC:{"^":"o+t;"},jD:{"^":"jC+z;"},jN:{"^":"o+t;"},jO:{"^":"jN+z;"},k1:{"^":"o+t;"},k2:{"^":"k1+z;"},kb:{"^":"o+t;"},kc:{"^":"kb+z;"}}],["","",,P,{"^":"",la:{"^":"o;0k:length=","%":"AudioBuffer"},lb:{"^":"jb;",
j:function(a,b){return P.aI(a.get(H.S(b)))},
K:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aI(y.value[1]))}},
gaq:function(a){var z=H.c([],[P.n])
this.K(a,new P.fu(z))
return z},
gk:function(a){return a.size},
$asaa:function(){return[P.n,null]},
$isa2:1,
$asa2:function(){return[P.n,null]},
"%":"AudioParamMap"},fu:{"^":"u:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},lc:{"^":"a7;0k:length=","%":"AudioTrackList"},fv:{"^":"a7;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lL:{"^":"fv;0k:length=","%":"OfflineAudioContext"},jb:{"^":"o+aa;"}}],["","",,P,{"^":"",cW:{"^":"o;",
hw:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.J(g)
if(!!z.$isc7)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.kF(g))
return}if(!!z.$isdN)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.h(P.fs("Incorrect number or type of arguments"))},
hv:function(a,b,c,d,e,f,g){return this.hw(a,b,c,d,e,f,g,null,null,null)},
$iscW:1,
"%":"WebGLRenderingContext"},ip:{"^":"o;",$isip:1,"%":"WebGLTexture"},iK:{"^":"o;",$isiK:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",lS:{"^":"k_;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return P.aI(a.item(b))},
C:function(a,b){return this.j(a,b)},
$ast:function(){return[[P.a2,,,]]},
$isd:1,
$asd:function(){return[[P.a2,,,]]},
$isf:1,
$asf:function(){return[[P.a2,,,]]},
$asz:function(){return[[P.a2,,,]]},
"%":"SQLResultSetRowList"},jZ:{"^":"o+t;"},k_:{"^":"jZ+z;"}}],["","",,O,{"^":"",ah:{"^":"a;0a,0b,0c,0d,$ti",
bx:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
ct:function(a,b,c){var z=H.am(this,"ah",0)
H.b(b,{func:1,ret:P.a4,args:[[P.d,z]]})
z={func:1,ret:-1,args:[P.C,[P.d,z]]}
H.b(a,z)
H.b(c,z)
this.b=b
this.c=a
this.d=c},
aL:function(a,b){return this.ct(a,null,b)},
aM:function(a){var z
H.v(a,"$isd",[H.am(this,"ah",0)],"$asd")
z=this.b
if(z!=null)return z.$1(a)
return!0},
bN:function(a,b){var z
H.v(b,"$isd",[H.am(this,"ah",0)],"$asd")
z=this.c
if(z!=null)z.$2(a,b)},
eT:function(a,b){var z
H.v(b,"$isd",[H.am(this,"ah",0)],"$asd")
z=this.d
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
gX:function(a){var z=this.a
return new J.af(z,z.length,0,[H.y(z,0)])},
C:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.am(this,"ah",0)
H.A(b,z)
z=[z]
if(this.aM(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.bN(x,H.c([b],z))}},
aO:function(a,b){var z,y
H.v(b,"$isd",[H.am(this,"ah",0)],"$asd")
if(this.aM(b)){z=this.a
y=z.length
C.a.aO(z,b)
this.bN(y,b)}},
S:function(a,b,c){var z,y,x
z=H.am(this,"ah",0)
H.A(c,z)
y=this.a
if(b>=y.length)return H.i(y,b)
x=y[b]
if(!J.O(x,c)&&this.aM(H.c([c],[z]))){C.a.S(this.a,b,c)
z=[z]
this.eT(b,H.c([x],z))
this.bN(b,H.c([c],z))}},
$isd:1,
p:{
c1:function(a){var z=new O.ah([a])
z.bx(a)
return z}}},cO:{"^":"a;0a,0b",
gk:function(a){return this.a.length},
gn:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
e2:function(a){var z=this.b
if(!(z==null))z.t(a)},
au:function(){return this.e2(null)},
gI:function(a){var z=this.a
if(z.length>0)return C.a.gce(z)
else return V.aK()},
bq:function(a){var z=this.a
if(a==null)C.a.h(z,V.aK())
else C.a.h(z,a)
this.au()},
ar:function(){var z=this.a
if(z.length>0){z.pop()
this.au()}}}}],["","",,E,{"^":"",cu:{"^":"a;"},aA:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0Y:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
scv:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gn()
y.toString
x=H.b(this.gdI(),{func:1,ret:-1,args:[D.l]})
C.a.R(y.a,x)}y=this.c
if(y!=null){y=y.gn()
y.toString
x=H.b(this.gdI(),{func:1,ret:-1,args:[D.l]})
C.a.h(y.a,x)}w=new D.B("shape",z,this.c,this,[F.ea])
w.b=!0
this.ab(w)}},
sdF:function(a){var z,y,x,w
if(!J.O(this.r,a)){z=this.r
if(z!=null){y=z.gn()
y.toString
x=H.b(this.gdH(),{func:1,ret:-1,args:[D.l]})
C.a.R(y.a,x)}if(a!=null){y=a.gn()
y.toString
x=H.b(this.gdH(),{func:1,ret:-1,args:[D.l]})
C.a.h(y.a,x)}this.r=a
w=new D.B("mover",z,a,this,[U.a0])
w.b=!0
this.ab(w)}},
ad:function(a,b){var z,y,x,w
z=this.r
y=z!=null?z.a:null
if(!J.O(y,this.x)){x=this.x
this.x=y
w=new D.B("matrix",x,y,this,[V.ab])
w.b=!0
this.ab(w)}for(z=this.y.a,z=new J.af(z,z.length,0,[H.y(z,0)]);z.B();)z.d.ad(0,b)},
a0:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gI(z))
else C.a.h(z.a,y.l(0,z.gI(z)))
z.au()
a.cm(this.f)
z=a.dy
x=(z&&C.a).gce(z)
if(x!=null&&this.d!=null)x.dK(a,this)
for(z=this.y.a,z=new J.af(z,z.length,0,[H.y(z,0)]);z.B();)z.d.a0(a)
a.cl()
a.dx.ar()},
gn:function(){var z=this.z
if(z==null){z=D.E()
this.z=z}return z},
ab:function(a){var z=this.z
if(!(z==null))z.t(a)},
a_:function(){return this.ab(null)},
hd:[function(a){H.k(a,"$isl")
this.e=null
this.ab(a)},function(){return this.hd(null)},"im","$1","$0","gdI",0,2,0],
hc:[function(a){this.ab(H.k(a,"$isl"))},function(){return this.hc(null)},"il","$1","$0","gdH",0,2,0],
ha:[function(a){this.ab(H.k(a,"$isl"))},function(){return this.ha(null)},"ij","$1","$0","gdG",0,2,0],
ii:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$isd",[E.aA],"$asd")
for(z=b.length,y=this.gdG(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gY()==null){t=new D.aT()
t.a=H.c([],w)
t.c=0
u.sY(t)}t=u.gY()
t.toString
H.b(y,x)
C.a.h(t.a,y)}}this.a_()},"$2","gh9",8,0,8],
ik:[function(a,b){var z,y,x,w,v,u,t
H.v(b,"$isd",[E.aA],"$asd")
for(z=b.length,y=this.gdG(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gY()==null){t=new D.aT()
t.a=H.c([],w)
t.c=0
u.sY(t)}t=u.gY()
t.toString
H.b(y,x)
C.a.R(t.a,y)}}this.a_()},"$2","ghb",8,0,8],
$isav:1,
p:{
c4:function(a,b,c,d,e,f){var z,y
z=new E.aA()
z.a=d
z.b=!0
y=O.c1(E.aA)
z.y=y
y.aL(z.gh9(),z.ghb())
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
z.scv(0,e)
z.sdF(c)
return z}}},hU:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
e_:function(a,b){var z,y,x,w,v
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
z.a=H.c([],y)
x=z.gn()
x.toString
w={func:1,ret:-1,args:[D.l]}
v=H.b(new E.hW(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cO()
z.a=H.c([],y)
v=z.gn()
v.toString
x=H.b(new E.hX(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cO()
z.a=H.c([],y)
y=z.gn()
y.toString
w=H.b(new E.hY(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.c([],[O.bU])
this.dy=z
C.a.h(z,null)
this.fr=new H.aV(0,0,[P.n,A.cX])},
ghm:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gI(z)
y=this.db
y=z.l(0,y.gI(y))
this.z=y
z=y}return z},
cm:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gce(z):a;(z&&C.a).h(z,y)},
cl:function(){var z=this.dy
if(z.length>1)z.pop()},
d1:function(a){var z=a.b
if(z.length===0)throw H.h(P.q("May not cache a shader with no name."))
if(this.fr.d6(0,z))throw H.h(P.q('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.S(0,z,a)},
p:{
hV:function(a,b){var z=new E.hU(a,b)
z.e_(a,b)
return z}}},hW:{"^":"u:9;a",
$1:function(a){var z
H.k(a,"$isl")
z=this.a
z.z=null
z.ch=null}},hX:{"^":"u:9;a",
$1:function(a){var z
H.k(a,"$isl")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hY:{"^":"u:9;a",
$1:function(a){var z
H.k(a,"$isl")
z=this.a
z.ch=null
z.cx=null}},iv:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0Y:x@,0y,0z,0Q,0ch",
gn:function(){var z=this.x
if(z==null){z=D.E()
this.x=z}return z},
e4:[function(a){var z
H.k(a,"$isl")
z=this.x
if(!(z==null))z.t(a)
this.hq()},function(){return this.e4(null)},"e3","$1","$0","gcD",0,2,0],
gfX:function(){var z,y,x
z=Date.now()
y=C.f.Z(P.dK(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.ao(z,!1)
return x/y},
cU:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.l()
if(typeof z!=="number")return H.p(z)
x=C.i.cb(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.l()
w=C.i.cb(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.ei(C.l,this.ghp())},
hq:[function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.b(new E.ix(this),{func:1,ret:-1,args:[P.W]})
C.t.en(z)
C.t.f_(z,W.f6(y,P.W))}},"$0","ghp",0,0,3],
ho:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cU()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ao(w,!1)
x.y=P.dK(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sk(w.a,0)
w.au()
w=x.db
C.a.sk(w.a,0)
w.au()
w=x.dx
C.a.sk(w.a,0)
w.au()
w=x.dy;(w&&C.a).sk(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a0(this.e)}}catch(v){z=H.aR(v)
y=H.b7(v)
P.dp("Error: "+H.j(z))
P.dp("Stack: "+H.j(y))
throw H.h(z)}},
p:{
iw:function(a,b,c,d,e){var z,y,x,w
z=J.J(a)
if(!!z.$iscy)return E.eh(a,!0,!0,!0,!1)
y=W.cz(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gd4(a).h(0,y)
w=E.eh(y,!0,!0,!0,!1)
w.a=a
return w},
eh:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.iv()
y=P.hd(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.n,null)
x=C.k.bt(a,"webgl",y)
x=H.k(x==null?C.k.bt(a,"experimental-webgl",y):x,"$iscW")
if(x==null)H.r(P.q("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hV(x,a)
w=new T.iq(x)
w.b=H.Y(x.getParameter(3379))
w.c=H.Y(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.iQ(a)
v=new X.h8()
v.c=new X.au(!1,!1,!1)
v.d=P.he(null,null,null,P.C)
w.b=v
v=new X.hx(w)
v.f=0
v.r=new V.P(0,0)
v.x=new V.P(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.hh(w)
v.r=0
v.x=new V.P(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.iA(w)
v.e=0
v.f=new V.P(0,0)
v.r=new V.P(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.ee,P.a]])
w.z=v
u=document
t=W.ap
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.V(u,"contextmenu",H.b(w.geF(),s),!1,t))
v=w.z
r=W.a6
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.V(a,"focus",H.b(w.geI(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.V(a,"blur",H.b(w.geC(),q),!1,r))
v=w.z
p=W.bk
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.V(u,"keyup",H.b(w.geK(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.V(u,"keydown",H.b(w.geJ(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.V(a,"mousedown",H.b(w.geN(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.V(a,"mouseup",H.b(w.geP(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.V(a,"mousemove",H.b(w.geO(),s),!1,t))
p=w.z
o=W.bA;(p&&C.a).h(p,W.V(a,H.S(W.fQ(a)),H.b(w.geQ(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.V(u,"mousemove",H.b(w.geG(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.V(u,"mouseup",H.b(w.geH(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.V(u,"pointerlockchange",H.b(w.geR(),q),!1,r))
r=w.z
q=W.b_
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.V(a,"touchstart",H.b(w.geY(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.V(a,"touchend",H.b(w.geW(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.V(a,"touchmove",H.b(w.geX(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.ao(Date.now(),!1)
z.ch=0
z.cU()
return z}}},ix:{"^":"u:28;a",
$1:function(a){var z
H.kY(a)
z=this.a
if(z.z){z.z=!1
z.ho()}}}}],["","",,Z,{"^":"",eK:{"^":"a;a,b",p:{
d7:function(a,b,c){var z
H.v(c,"$isf",[P.C],"$asf")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bD(c)),35044)
a.bindBuffer(b,null)
return new Z.eK(b,z)}}},dv:{"^":"cu;a,b,c,d,e",
U:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aR(y)
x=P.q('Failed to bind buffer attribute "'+J.a5(this.a)+'": '+H.j(z))
throw H.h(x)}},
i:function(a){return"["+J.a5(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},eL:{"^":"a;a",$isld:1},cx:{"^":"a;a,0b,c,d",
ap:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
U:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].U(a)},
at:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
a0:function(a){var z,y,x,w,v
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
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a5(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.w(y,", ")+"\nAttrs:   "+C.a.w(u,", ")},
$islW:1},c8:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aX(this.c)+"'")+"]"}},b0:{"^":"a;a",
gcw:function(a){var z,y
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
fJ:function(a){var z,y,x
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
z=H.c([],[P.n])
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
al:function(a){return new Z.b0(a)}}}}],["","",,D,{"^":"",dy:{"^":"a;"},aT:{"^":"a;0a,0b,0c",
t:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.l(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.K(y,new D.fU(z))
return x!==0},
fT:function(){return this.t(null)},
hr:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.t(y)}}},
as:function(a){return this.hr(a,!0,!1)},
p:{
E:function(){var z=new D.aT()
z.a=H.c([],[{func:1,ret:-1,args:[D.l]}])
z.c=0
return z}}},fU:{"^":"u:29;a",
$1:function(a){var z
H.b(a,{func:1,ret:-1,args:[D.l]})
z=this.a.a
z.b
a.$1(z)}},l:{"^":"a;a,0b"},bN:{"^":"l;c,d,a,0b,$ti"},bO:{"^":"l;c,d,a,0b,$ti"},B:{"^":"l;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",dw:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dw))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)},
p:{"^":"le<"}},dS:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dS))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},dT:{"^":"l;c,a,0b"},h8:{"^":"a;0a,0b,0c,0d",
hj:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dT(a,this)
y.b=!0
return z.t(y)},
hf:function(a){var z,y
this.c=a.b
this.d.R(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dT(a,this)
y.b=!0
return z.t(y)}},dX:{"^":"cb;x,y,c,d,e,a,0b"},hh:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
al:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ao(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.l()
v=b.b
u=this.ch
if(typeof v!=="number")return v.l()
t=new V.P(y.a+x*w,y.b+v*u)
u=this.a.gaD()
s=new X.bm(a,new V.P(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
ck:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.t(this.al(a,b))
return!0},
aV:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dT()
if(typeof z!=="number")return z.dO()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.t(this.al(a,b))
return!0},
aU:function(a,b){var z=this.d
if(z==null)return!1
z.t(this.al(a,b))
return!0},
hk:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaD()
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
eM:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ao(Date.now(),!1)
y=this.f
x=new X.dX(c,a,this.a.gaD(),b,z,this)
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
return z+(this.c?"Shift+":"")}},bm:{"^":"cb;x,y,z,Q,ch,c,d,e,a,0b"},hx:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bD:function(a,b,c){var z,y,x
z=new P.ao(Date.now(),!1)
y=this.a.gaD()
x=new X.bm(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
ck:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.t(this.bD(a,b,!0))
return!0},
aV:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dT()
if(typeof z!=="number")return z.dO()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.t(this.bD(a,b,!0))
return!0},
aU:function(a,b){var z=this.d
if(z==null)return!1
z.t(this.bD(a,b,!1))
return!0},
hl:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaD()
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
gd9:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
gbs:function(){var z=this.c
if(z==null){z=D.E()
this.c=z}return z},
gdE:function(){var z=this.d
if(z==null){z=D.E()
this.d=z}return z}},cR:{"^":"cb;x,c,d,e,a,0b"},cb:{"^":"l;"},em:{"^":"cb;x,y,z,Q,ch,c,d,e,a,0b"},iA:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
al:function(a,b){var z,y,x,w
H.v(a,"$isf",[V.P],"$asf")
z=new P.ao(Date.now(),!1)
y=a.length>0?a[0]:new V.P(0,0)
x=this.a.gaD()
w=new X.em(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hi:function(a){var z
H.v(a,"$isf",[V.P],"$asf")
z=this.b
if(z==null)return!1
z.t(this.al(a,!0))
return!0},
hg:function(a){var z
H.v(a,"$isf",[V.P],"$asf")
z=this.c
if(z==null)return!1
z.t(this.al(a,!0))
return!0},
hh:function(a){var z
H.v(a,"$isf",[V.P],"$asf")
z=this.d
if(z==null)return!1
z.t(this.al(a,!1))
return!0}},iQ:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaD:function(){var z=this.a
return V.ce(0,0,(z&&C.k).gd5(z).c,C.k.gd5(z).d)},
cN:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dS(z,new X.au(y,a.altKey,a.shiftKey))},
aC:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.au(y,a.altKey,a.shiftKey)},
bS:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.au(y,a.altKey,a.shiftKey)},
am:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.E()
v=z.top
if(typeof x!=="number")return x.E()
return new V.P(y-w,x-v)},
aN:function(a){return new V.Q(a.movementX,a.movementY)},
bO:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.P])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
t=C.i.ac(u.pageX)
C.i.ac(u.pageY)
s=z.left
C.i.ac(u.pageX)
C.a.h(y,new V.P(t-s,C.i.ac(u.pageY)-z.top))}return y},
aj:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dw(z,new X.au(y,a.altKey,a.shiftKey))},
bH:function(a){var z,y,x,w,v,u
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
hV:[function(a){this.f=!0},"$1","geI",4,0,7],
hP:[function(a){this.f=!1},"$1","geC",4,0,7],
hS:[function(a){H.k(a,"$isap")
if(this.f&&this.bH(a))a.preventDefault()},"$1","geF",4,0,4],
hX:[function(a){var z
H.k(a,"$isbk")
if(!this.f)return
z=this.cN(a)
if(this.b.hj(z))a.preventDefault()},"$1","geK",4,0,16],
hW:[function(a){var z
H.k(a,"$isbk")
if(!this.f)return
z=this.cN(a)
if(this.b.hf(z))a.preventDefault()},"$1","geJ",4,0,16],
hZ:[function(a){var z,y,x,w
H.k(a,"$isap")
z=this.a
z.focus()
this.f=!0
this.aC(a)
if(this.x){y=this.aj(a)
x=this.aN(a)
if(this.d.ck(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aj(a)
w=this.am(a)
if(this.c.ck(y,w))a.preventDefault()},"$1","geN",4,0,4],
i0:[function(a){var z,y,x
H.k(a,"$isap")
this.aC(a)
z=this.aj(a)
if(this.x){y=this.aN(a)
if(this.d.aV(z,y))a.preventDefault()
return}if(this.r)return
x=this.am(a)
if(this.c.aV(z,x))a.preventDefault()},"$1","geP",4,0,4],
hU:[function(a){var z,y,x
H.k(a,"$isap")
if(!this.bH(a)){this.aC(a)
z=this.aj(a)
if(this.x){y=this.aN(a)
if(this.d.aV(z,y))a.preventDefault()
return}if(this.r)return
x=this.am(a)
if(this.c.aV(z,x))a.preventDefault()}},"$1","geH",4,0,4],
i_:[function(a){var z,y,x
H.k(a,"$isap")
this.aC(a)
z=this.aj(a)
if(this.x){y=this.aN(a)
if(this.d.aU(z,y))a.preventDefault()
return}if(this.r)return
x=this.am(a)
if(this.c.aU(z,x))a.preventDefault()},"$1","geO",4,0,4],
hT:[function(a){var z,y,x
H.k(a,"$isap")
if(!this.bH(a)){this.aC(a)
z=this.aj(a)
if(this.x){y=this.aN(a)
if(this.d.aU(z,y))a.preventDefault()
return}if(this.r)return
x=this.am(a)
if(this.c.aU(z,x))a.preventDefault()}},"$1","geG",4,0,4],
i1:[function(a){var z,y
H.k(a,"$isbA")
this.aC(a)
z=new V.Q((a&&C.r).gfR(a),C.r.gfS(a)).u(0,180)
if(this.x){if(this.d.hk(z))a.preventDefault()
return}if(this.r)return
y=this.am(a)
if(this.c.hl(z,y))a.preventDefault()},"$1","geQ",4,0,31],
i2:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.aj(this.y)
v=this.am(this.y)
this.d.eM(w,v,x)}},"$1","geR",4,0,7],
i8:[function(a){var z
H.k(a,"$isb_")
this.a.focus()
this.f=!0
this.bS(a)
z=this.bO(a)
if(this.e.hi(z))a.preventDefault()},"$1","geY",4,0,10],
i6:[function(a){var z
H.k(a,"$isb_")
this.bS(a)
z=this.bO(a)
if(this.e.hg(z))a.preventDefault()},"$1","geW",4,0,10],
i7:[function(a){var z
H.k(a,"$isb_")
this.bS(a)
z=this.bO(a)
if(this.e.hh(z))a.preventDefault()},"$1","geX",4,0,10]}}],["","",,D,{"^":"",c3:{"^":"a;0a,0b,0c,0d",
gn:function(){var z=this.d
if(z==null){z=D.E()
this.d=z}return z},
av:[function(a){var z
H.k(a,"$isl")
z=this.d
if(!(z==null))z.t(a)},function(){return this.av(null)},"hC","$1","$0","ge5",0,2,0],
$isU:1,
$isav:1,
p:{
dJ:function(a,b){var z,y,x,w
z=new D.c3()
z.c=new V.T(1,1,1)
z.a=new V.G(0,0,1)
y=z.b
z.b=b
x=b.gn()
x.toString
w=H.b(z.ge5(),{func:1,ret:-1,args:[D.l]})
C.a.h(x.a,w)
x=new D.B("mover",y,z.b,z,[U.a0])
x.b=!0
z.av(x)
if(!z.c.q(0,a)){y=z.c
z.c=a
x=new D.B("color",y,a,z,[V.T])
x.b=!0
z.av(x)}return z}}},U:{"^":"a;",$isav:1},h9:{"^":"ah;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gn:function(){var z=this.Q
if(z==null){z=D.E()
this.Q=z}return z},
av:function(a){var z=this.Q
if(!(z==null))z.t(a)},
eL:[function(a){var z
H.k(a,"$isl")
z=this.ch
if(!(z==null))z.t(a)},function(){return this.eL(null)},"hY","$1","$0","gcR",0,2,0],
i3:[function(a){var z,y,x
H.v(a,"$isd",[D.U],"$asd")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.x)(a),++y){x=a[y]
if(x==null||this.ej(x))return!1}return!0},"$1","geS",4,0,33],
hL:[function(a,b){var z,y,x,w,v,u,t,s
z=D.U
H.v(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gcR(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.k(b[u],"$isU")
if(t instanceof D.c3)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aT()
s.a=H.c([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.h(s.a,x)}z=new D.bN(a,b,this,[z])
z.b=!0
this.av(z)},"$2","gey",8,0,17],
i4:[function(a,b){var z,y,x,w,v,u,t,s
z=D.U
H.v(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gcR(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.k(b[u],"$isU")
if(t instanceof D.c3)C.a.R(this.e,t)
s=t.d
if(s==null){s=new D.aT()
s.a=H.c([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.R(s.a,x)}z=new D.bO(a,b,this,[z])
z.b=!0
this.av(z)},"$2","geU",8,0,17],
ej:function(a){var z=C.a.aR(this.e,a)
return z},
$asd:function(){return[D.U]},
$asah:function(){return[D.U]}},hG:{"^":"a;",$isU:1,$isav:1},ie:{"^":"a;",$isU:1,$isav:1},is:{"^":"a;",$isU:1,$isav:1},it:{"^":"a;",$isU:1,$isav:1},iu:{"^":"a;",$isU:1,$isav:1}}],["","",,V,{"^":"",
lg:[function(a,b){if(typeof b!=="number")return b.E()
if(typeof a!=="number")return H.p(a)
return Math.abs(b-a)<=1e-9},"$2","ht",8,0,32],
l6:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.i.dS(a-b,z)
return(a<0?a+z:a)+b},
L:function(a,b,c){if(a==null)return C.h.a6("null",c)
return C.h.a6(C.i.dN($.m.$2(a,0)?0:a,b),c+b+1)},
b6:function(a,b,c){var z,y,x,w,v,u
H.v(a,"$isf",[P.w],"$asf")
z=H.c([],[P.n])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.x)(a),++w){v=V.L(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.i(z,u)
C.a.S(z,u,C.h.a6(z[u],x))}return z},
dn:function(a,b){return C.i.hy(Math.pow(b,C.y.cb(Math.log(H.kC(a))/Math.log(b))))},
T:{"^":"a;a,b,c",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}},
aJ:{"^":"a;a,b,c,d",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aJ))return!1
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
e0:{"^":"a;a,b,c,d,e,f,r,x,y",
a3:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.w])
return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e0))return!1
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
z=[P.w]
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
ab:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a3:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.w])
return z},
cd:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.m.$2(a2,0))return V.aK()
a3=1/a2
a4=-w
a5=-i
return V.at((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
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
return V.at(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
co:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
b3:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return new V.ac(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
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
dz:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.w]
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
v:function(a){return this.dz(a,3,0)},
F:function(){return this.dz("",3,0)},
p:{
at:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ab(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aK:function(){return V.at(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
cQ:function(a,b,c){return V.at(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
hu:function(a,b,c,d){return V.at(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
cP:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.at(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
e2:function(a,b,c,d){return V.e1(new V.ac(0,0,0),new V.G(0,1,0),new V.G(a,b,c))},
e1:function(a,b,c){var z,y,x,w,v
z=c.u(0,Math.sqrt(c.A(c)))
y=b.aS(z)
x=y.u(0,Math.sqrt(y.A(y)))
w=z.aS(x)
v=new V.G(a.a,a.b,a.c)
return V.at(x.a,w.a,z.a,x.H(0).A(v),x.b,w.b,z.b,w.H(0).A(v),x.c,w.c,z.c,z.H(0).A(v),0,0,0,1)}}},
P:{"^":"a;a,b",
E:function(a,b){return new V.P(this.a-b.a,this.b-b.b)},
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
ac:{"^":"a;a,b,c",
E:function(a,b){return new V.ac(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ac))return!1
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
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+", "+V.L(this.d,3,0)+"]"},
p:{
ce:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cV(a,b,c,d)}}},
Q:{"^":"a;a,b",
h2:[function(a){return Math.sqrt(this.A(this))},"$0","gk",1,0,18],
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
return new V.Q(z*b,y*b)},
u:function(a,b){var z,y
if($.m.$2(b,0))return new V.Q(0,0)
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
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}},
G:{"^":"a;a,b,c",
h2:[function(a){return Math.sqrt(this.A(this))},"$0","gk",1,0,18],
A:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cf:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.G(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aS:function(a){var z,y,x,w,v,u
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
dB:function(){if(!$.m.$2(0,this.a))return!1
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
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}}],["","",,U,{"^":"",fD:{"^":"dy;0a,0b,0c,0d,0e,0f,0r,0x,0y",
by:function(a){var z=V.l6(a,this.c,this.b)
return z},
gn:function(){var z=this.y
if(z==null){z=D.E()
this.y=z}return z},
J:function(a){var z=this.y
if(!(z==null))z.t(a)},
scp:function(a,b){},
scg:function(a){var z,y
z=this.b
if(!$.m.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.by(z)}z=new D.B("maximumLocation",y,this.b,this,[P.w])
z.b=!0
this.J(z)}},
scj:function(a){var z,y
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.by(z)}z=new D.B("minimumLocation",y,this.c,this,[P.w])
z.b=!0
this.J(z)}},
sa1:function(a,b){var z,y
b=this.by(b)
z=this.d
if(!$.m.$2(z,b)){y=this.d
this.d=b
z=new D.B("location",y,b,this,[P.w])
z.b=!0
this.J(z)}},
sci:function(a){var z,y,x
z=this.e
if(!$.m.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.B("maximumVelocity",y,a,this,[P.w])
z.b=!0
this.J(z)}},
sL:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.m.$2(z,a)){x=this.f
this.f=a
z=new D.B("velocity",x,a,this,[P.w])
z.b=!0
this.J(z)}},
sc2:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.m.$2(z,a)){y=this.x
this.x=a
z=new D.B("dampening",y,a,this,[P.w])
z.b=!0
this.J(z)}},
ad:function(a,b){var z,y,x,w
z=this.f
if($.m.$2(z,0)){z=this.r
z=!$.m.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa1(0,this.d+y*b)
z=this.x
if(!$.m.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sL(y)}},
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
H.k(a,"$isl")
z=this.e
if(!(z==null))z.t(a)},function(){return this.J(null)},"a9","$1","$0","gaw",0,2,0],
hD:[function(a,b){var z,y,x,w,v,u,t
z=U.a0
H.v(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gaw(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gn()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.bN(a,b,this,[z])
z.b=!0
this.J(z)},"$2","ge6",8,0,19],
hE:[function(a,b){var z,y,x,w,v,u,t
z=U.a0
H.v(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gaw(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gn()
t.toString
H.b(x,w)
C.a.R(t.a,x)}}z=new D.bO(a,b,this,[z])
z.b=!0
this.J(z)},"$2","ge7",8,0,19],
aK:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.a7()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.af(z,z.length,0,[H.y(z,0)]),x=null;z.B();){y=z.d
if(y!=null){w=y.aK(0,b,c)
if(w!=null)x=x==null?w:w.l(0,x)}}this.f=x==null?V.aK():x
z=this.e
if(!(z==null))z.as(0)}return this.f},
q:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dM))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.i(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.i(w,y)
if(!J.O(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asd:function(){return[U.a0]},
$asah:function(){return[U.a0]},
$isa0:1,
p:{
cF:function(a){var z=new U.dM()
z.bx(U.a0)
z.aL(z.ge6(),z.ge7())
if(a!=null)z.aO(0,a)
z.e=null
z.f=V.aK()
z.r=0
return z}}},a0:{"^":"dy;"},iR:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gn:function(){var z=this.cy
if(z==null){z=D.E()
this.cy=z}return z},
J:[function(a){var z
H.k(a,"$isl")
z=this.cy
if(!(z==null))z.t(a)},function(){return this.J(null)},"a9","$1","$0","gaw",0,2,0],
aP:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gd9()
z.toString
y={func:1,ret:-1,args:[D.l]}
x=H.b(this.gbI(),y)
C.a.h(z.a,x)
x=this.a.c.gdE()
x.toString
z=H.b(this.gbJ(),y)
C.a.h(x.a,z)
z=this.a.c.gbs()
z.toString
y=H.b(this.gbK(),y)
C.a.h(z.a,y)
return!0},
eu:[function(a){H.k(a,"$isl")
if(!J.O(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbI",4,0,1],
ev:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$isl"),"$isbm")
if(!this.y)return
if(this.x){z=a.d.E(0,a.y)
z=new V.Q(z.a,z.b)
z=z.A(z)
y=this.r
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.E(0,a.y)
z=new V.Q(y.a,y.b).l(0,2).u(0,z.ga2())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.l()
x=this.e
if(typeof x!=="number")return H.p(x)
y.sL(z*10*x)}else{z=a.c
y=a.d
x=y.E(0,a.y)
w=new V.Q(x.a,x.b).l(0,2).u(0,z.ga2())
x=this.b
v=w.a
if(typeof v!=="number")return v.H()
u=this.e
if(typeof u!=="number")return H.p(u)
t=this.z
if(typeof t!=="number")return H.p(t)
x.sa1(0,-v*u+t)
this.b.sL(0)
y=y.E(0,a.z)
this.Q=new V.Q(y.a,y.b).l(0,2).u(0,z.ga2())}this.a9()},"$1","gbJ",4,0,1],
ew:[function(a){var z,y,x
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
z.sL(y*10*x)
this.a9()}},"$1","gbK",4,0,1],
aK:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.a7()
if(z<y){this.ch=y
x=b.y
this.b.ad(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.at(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa0:1},iS:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gn:function(){var z=this.fx
if(z==null){z=D.E()
this.fx=z}return z},
J:[function(a){var z
H.k(a,"$isl")
z=this.fx
if(!(z==null))z.t(a)},function(){return this.J(null)},"a9","$1","$0","gaw",0,2,0],
aP:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gd9()
z.toString
y={func:1,ret:-1,args:[D.l]}
x=H.b(this.gbI(),y)
C.a.h(z.a,x)
x=this.a.c.gdE()
x.toString
z=H.b(this.gbJ(),y)
C.a.h(x.a,z)
z=this.a.c.gbs()
z.toString
x=H.b(this.gbK(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.E()
x.f=z}x=H.b(this.geq(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.E()
x.d=z}x=H.b(this.ger(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.E()
x.b=z}x=H.b(this.gff(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.E()
x.d=z}x=H.b(this.gfe(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.E()
x.c=z}y=H.b(this.gfd(),y)
C.a.h(z.a,y)
return!0},
af:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.H()
z=-z}if(this.r){if(typeof y!=="number")return y.H()
y=-y}return new V.Q(z,y)},
eu:[function(a){a=H.e(H.k(a,"$isl"),"$isbm")
if(!J.O(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbI",4,0,1],
ev:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$isl"),"$isbm")
if(!this.cx)return
if(this.ch){z=a.d.E(0,a.y)
z=new V.Q(z.a,z.b)
z=z.A(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.E(0,a.y)
z=this.af(new V.Q(y.a,y.b).l(0,2).u(0,z.ga2()))
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
x=y.E(0,a.y)
w=this.af(new V.Q(x.a,x.b).l(0,2).u(0,z.ga2()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa1(0,-u*v+x)
this.b.sL(0)
this.c.sL(0)
y=y.E(0,a.z)
this.dx=this.af(new V.Q(y.a,y.b).l(0,2).u(0,z.ga2()))}this.a9()},"$1","gbJ",4,0,1],
ew:[function(a){var z,y,x
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
z.sL(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.H()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sL(-y*10*z)
this.a9()}},"$1","gbK",4,0,1],
hI:[function(a){if(H.e(H.k(a,"$isl"),"$isdX").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","geq",4,0,1],
hJ:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$isl"),"$isbm")
if(!J.O(this.d,a.x.b))return
z=a.c
y=a.d
x=y.E(0,a.y)
w=this.af(new V.Q(x.a,x.b).l(0,2).u(0,z.ga2()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa1(0,-u*v+x)
this.b.sL(0)
this.c.sL(0)
y=y.E(0,a.z)
this.dx=this.af(new V.Q(y.a,y.b).l(0,2).u(0,z.ga2()))
this.a9()},"$1","ger",4,0,1],
ic:[function(a){H.k(a,"$isl")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gff",4,0,1],
ib:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$isl"),"$isem")
if(!this.cx)return
if(this.ch){z=a.d.E(0,a.y)
z=new V.Q(z.a,z.b)
z=z.A(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.E(0,a.y)
z=this.af(new V.Q(y.a,y.b).l(0,2).u(0,z.ga2()))
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
x=y.E(0,a.y)
w=this.af(new V.Q(x.a,x.b).l(0,2).u(0,z.ga2()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa1(0,-u*v+x)
this.b.sL(0)
this.c.sL(0)
y=y.E(0,a.z)
this.dx=this.af(new V.Q(y.a,y.b).l(0,2).u(0,z.ga2()))}this.a9()},"$1","gfe",4,0,1],
ia:[function(a){var z,y,x
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
z.sL(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.H()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sL(-y*10*z)
this.a9()}},"$1","gfd",4,0,1],
aK:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.a7()
if(z<y){this.dy=y
x=b.y
this.c.ad(0,x)
this.b.ad(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.fr=V.at(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1).l(0,V.cP(this.c.d))}return this.fr},
$isa0:1},iT:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
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
y=H.b(this.gex(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.E()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
hK:[function(a){var z,y,x,w
H.k(a,"$isl")
if(!J.O(this.b,this.a.b.c))return
H.e(a,"$iscR")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.l()
w=z+y*x
if(z!==w){this.d=w
z=new D.B("zoom",z,w,this,[P.w])
z.b=!0
this.J(z)}},"$1","gex",4,0,1],
aK:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.hu(x,x,x,1)}return this.f},
$isa0:1}}],["","",,M,{"^":"",fF:{"^":"a;0a,0b,0c,0d,0e,0f",
gn:function(){var z=this.f
if(z==null){z=D.E()
this.f=z}return z},
T:[function(a){var z
H.k(a,"$isl")
z=this.f
if(!(z==null))z.t(a)},function(){return this.T(null)},"cE","$1","$0","gM",0,2,0],
saQ:function(a){var z,y,x
if(a==null)a=new X.h_()
z=this.a
if(z!==a){if(z!=null){z=z.gn()
z.toString
y=H.b(this.gM(),{func:1,ret:-1,args:[D.l]})
C.a.R(z.a,y)}x=this.a
this.a=a
z=a.gn()
z.toString
y=H.b(this.gM(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.B("camera",x,this.a,this,[X.c0])
z.b=!0
this.T(z)}},
saY:function(a,b){var z,y,x
if(b==null)b=X.cD(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gn()
z.toString
y=H.b(this.gM(),{func:1,ret:-1,args:[D.l]})
C.a.R(z.a,y)}x=this.b
this.b=b
z=b.gn()
z.toString
y=H.b(this.gM(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.B("target",x,this.b,this,[X.cg])
z.b=!0
this.T(z)}},
saZ:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gn()
z.toString
y=H.b(this.gM(),{func:1,ret:-1,args:[D.l]})
C.a.R(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gn()
z.toString
y=H.b(this.gM(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.B("technique",x,this.c,this,[O.bU])
z.b=!0
this.T(z)}},
a0:function(a){a.cm(this.c)
this.b.U(a)
this.a.U(a)
this.d.ad(0,a)
this.d.a0(a)
this.a.at(a)
this.b.toString
a.cl()},
$isaY:1,
$iscf:1},fS:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
T:[function(a){var z
H.k(a,"$isl")
z=this.x
if(!(z==null))z.t(a)},function(){return this.T(null)},"cE","$1","$0","gM",0,2,0],
hQ:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aA
H.v(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gM(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.gY()==null){s=new D.aT()
s.a=H.c([],v)
s.c=0
t.sY(s)}s=t.gY()
s.toString
H.b(x,w)
C.a.h(s.a,x)}}z=new D.bN(a,b,this,[z])
z.b=!0
this.T(z)},"$2","geD",8,0,8],
hR:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aA
H.v(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gM(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.gY()==null){s=new D.aT()
s.a=H.c([],v)
s.c=0
t.sY(s)}s=t.gY()
s.toString
H.b(x,w)
C.a.R(s.a,x)}}z=new D.bO(a,b,this,[z])
z.b=!0
this.T(z)},"$2","geE",8,0,8],
saQ:function(a){var z,y,x
if(a==null)a=X.cT(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null){z=z.gn()
z.toString
y=H.b(this.gM(),{func:1,ret:-1,args:[D.l]})
C.a.R(z.a,y)}x=this.a
this.a=a
z=a.gn()
z.toString
y=H.b(this.gM(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.B("camera",x,this.a,this,[X.c0])
z.b=!0
this.T(z)}},
saY:function(a,b){var z,y,x
if(b==null)b=X.cD(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gn()
z.toString
y=H.b(this.gM(),{func:1,ret:-1,args:[D.l]})
C.a.R(z.a,y)}x=this.b
this.b=b
z=b.gn()
z.toString
y=H.b(this.gM(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.B("target",x,this.b,this,[X.cg])
z.b=!0
this.T(z)}},
saZ:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gn()
z.toString
y=H.b(this.gM(),{func:1,ret:-1,args:[D.l]})
C.a.R(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gn()
z.toString
y=H.b(this.gM(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.B("technique",x,this.c,this,[O.bU])
z.b=!0
this.T(z)}},
gn:function(){var z=this.x
if(z==null){z=D.E()
this.x=z}return z},
a0:function(a){var z
a.cm(this.c)
this.b.U(a)
this.a.U(a)
z=this.c
if(z!=null)z.ad(0,a)
for(z=this.d.a,z=new J.af(z,z.length,0,[H.y(z,0)]);z.B();)z.d.ad(0,a)
for(z=this.d.a,z=new J.af(z,z.length,0,[H.y(z,0)]);z.B();)z.d.a0(a)
this.a.toString
a.cy.ar()
a.db.ar()
this.b.toString
a.cl()},
$isaY:1,
$iscf:1},aY:{"^":"cf;"},cf:{"^":"a;"},ii:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gn:function(){var z=this.cy
if(z==null){z=D.E()
this.cy=z}return z},
T:[function(a){var z
H.k(a,"$isl")
z=this.cy
if(!(z==null))z.t(a)},function(){return this.T(null)},"cE","$1","$0","gM",0,2,0],
hM:[function(a,b){var z,y,x,w,v,u,t
z=M.aY
H.v(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gM(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gn()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.bN(a,b,this,[z])
z.b=!0
this.T(z)},"$2","gez",8,0,20],
i5:[function(a,b){var z,y,x,w,v,u,t
z=M.aY
H.v(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gM(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gn()
t.toString
H.b(x,w)
C.a.R(t.a,x)}}z=new D.bO(a,b,this,[z])
z.b=!0
this.T(z)},"$2","geV",8,0,20],
a0:function(a){var z,y
this.y.sdJ(0,this.r)
for(z=this.z.a,z=new J.af(z,z.length,0,[H.y(z,0)]);z.B();){y=z.d
y.saY(0,this.y)
y.saQ(this.e)
y.a0(a)}this.y.sdJ(0,this.x)
for(z=this.z.a,z=new J.af(z,z.length,0,[H.y(z,0)]);z.B();){y=z.d
y.saY(0,this.y)
y.saQ(this.f)
y.a0(a)}},
$iscf:1}}],["","",,A,{"^":"",ds:{"^":"a;a,b,c"},ft:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fU:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
d8:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},e_:{"^":"cX;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aH,0ao,0aI,0bc,0da,0dc,0bd,0be,0dd,0de,0bf,0bg,0df,0dg,0bh,0dh,0di,0bi,0dj,0dk,0bj,0bk,0bl,0dl,0dm,0bm,0bn,0dn,0dq,0bo,0dr,0c5,0ds,0c6,0dt,0c7,0du,0c8,0dv,0c9,0dw,0ca,a,b,0c,0d,0e,0f,0r",
dZ:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.x=a1
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
a1.fi(z)
a1.fp(z)
a1.fj(z)
a1.fA(z)
a1.fB(z)
a1.fs(z)
a1.fF(z)
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
v.fm(z)
v.fh(z)
v.fk(z)
v.fn(z)
v.fw(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.fu(z)
v.fv(z)}v.fq(z)
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
p=H.c([],[P.n])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.w(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.fl(z)
v.ft(z)
v.fz(z)
v.fC(z)
v.fD(z)
v.fE(z)
v.fo(z)}r=z.a+="// === Main ===\n"
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
this.dA(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.y=this.f.j(0,"posAttr")
this.Q=this.f.j(0,"normAttr")
this.z=this.f.j(0,"binmAttr")
this.ch=this.f.j(0,"txt2DAttr")
this.cx=this.f.j(0,"txtCubeAttr")
this.cy=this.f.j(0,"bendAttr")
if(a1.fr)this.fy=H.e(this.r.m(0,"invViewMat"),"$isay")
if(y)this.db=H.e(this.r.m(0,"objMat"),"$isay")
if(w)this.dx=H.e(this.r.m(0,"viewObjMat"),"$isay")
this.fr=H.e(this.r.m(0,"projViewObjMat"),"$isay")
if(a1.x2)this.go=H.e(this.r.m(0,"txt2DMat"),"$isd5")
if(a1.y1)this.id=H.e(this.r.m(0,"txtCubeMat"),"$isay")
if(a1.y2)this.k1=H.e(this.r.m(0,"colorMat"),"$isay")
this.k3=H.c([],[A.ay])
y=a1.aH
if(y>0){this.k2=H.k(this.r.m(0,"bendMatCount"),"$isH")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.r(P.q("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.e(l,"$isay"))}}y=a1.a
if(y!==C.b){this.k4=H.e(this.r.m(0,"emissionClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.r1=H.e(this.r.m(0,"emissionTxt"),"$isak")
this.rx=H.e(this.r.m(0,"nullEmissionTxt"),"$isH")
break
case C.c:this.r2=H.e(this.r.m(0,"emissionTxt"),"$isad")
this.rx=H.e(this.r.m(0,"nullEmissionTxt"),"$isH")
break}}y=a1.b
if(y!==C.b){this.ry=H.e(this.r.m(0,"ambientClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.x1=H.e(this.r.m(0,"ambientTxt"),"$isak")
this.y1=H.e(this.r.m(0,"nullAmbientTxt"),"$isH")
break
case C.c:this.x2=H.e(this.r.m(0,"ambientTxt"),"$isad")
this.y1=H.e(this.r.m(0,"nullAmbientTxt"),"$isH")
break}}y=a1.c
if(y!==C.b){this.y2=H.e(this.r.m(0,"diffuseClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.aH=H.e(this.r.m(0,"diffuseTxt"),"$isak")
this.aI=H.e(this.r.m(0,"nullDiffuseTxt"),"$isH")
break
case C.c:this.ao=H.e(this.r.m(0,"diffuseTxt"),"$isad")
this.aI=H.e(this.r.m(0,"nullDiffuseTxt"),"$isH")
break}}y=a1.d
if(y!==C.b){this.bc=H.e(this.r.m(0,"invDiffuseClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.da=H.e(this.r.m(0,"invDiffuseTxt"),"$isak")
this.bd=H.e(this.r.m(0,"nullInvDiffuseTxt"),"$isH")
break
case C.c:this.dc=H.e(this.r.m(0,"invDiffuseTxt"),"$isad")
this.bd=H.e(this.r.m(0,"nullInvDiffuseTxt"),"$isH")
break}}y=a1.e
if(y!==C.b){this.bg=H.e(this.r.m(0,"shininess"),"$isR")
this.be=H.e(this.r.m(0,"specularClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.dd=H.e(this.r.m(0,"specularTxt"),"$isak")
this.bf=H.e(this.r.m(0,"nullSpecularTxt"),"$isH")
break
case C.c:this.de=H.e(this.r.m(0,"specularTxt"),"$isad")
this.bf=H.e(this.r.m(0,"nullSpecularTxt"),"$isH")
break}}switch(a1.f){case C.b:break
case C.e:break
case C.d:this.df=H.e(this.r.m(0,"bumpTxt"),"$isak")
this.bh=H.e(this.r.m(0,"nullBumpTxt"),"$isH")
break
case C.c:this.dg=H.e(this.r.m(0,"bumpTxt"),"$isad")
this.bh=H.e(this.r.m(0,"nullBumpTxt"),"$isH")
break}if(a1.dy){this.dh=H.e(this.r.m(0,"envSampler"),"$isad")
this.di=H.e(this.r.m(0,"nullEnvTxt"),"$isH")
y=a1.r
if(y!==C.b){this.bi=H.e(this.r.m(0,"reflectClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.dj=H.e(this.r.m(0,"reflectTxt"),"$isak")
this.bj=H.e(this.r.m(0,"nullReflectTxt"),"$isH")
break
case C.c:this.dk=H.e(this.r.m(0,"reflectTxt"),"$isad")
this.bj=H.e(this.r.m(0,"nullReflectTxt"),"$isH")
break}}y=a1.x
if(y!==C.b){this.bk=H.e(this.r.m(0,"refraction"),"$isR")
this.bl=H.e(this.r.m(0,"refractClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.dl=H.e(this.r.m(0,"refractTxt"),"$isak")
this.bm=H.e(this.r.m(0,"nullRefractTxt"),"$isH")
break
case C.c:this.dm=H.e(this.r.m(0,"refractTxt"),"$isad")
this.bm=H.e(this.r.m(0,"nullRefractTxt"),"$isH")
break}}}y=a1.y
if(y!==C.b){this.bn=H.e(this.r.m(0,"alpha"),"$isR")
switch(y){case C.b:break
case C.e:break
case C.d:this.dn=H.e(this.r.m(0,"alphaTxt"),"$isak")
this.bo=H.e(this.r.m(0,"nullAlphaTxt"),"$isH")
break
case C.c:this.dq=H.e(this.r.m(0,"alphaTxt"),"$isad")
this.bo=H.e(this.r.m(0,"nullAlphaTxt"),"$isH")
break}}this.c5=H.c([],[A.ez])
this.c6=H.c([],[A.eA])
this.c7=H.c([],[A.eB])
this.c8=H.c([],[A.eC])
this.c9=H.c([],[A.eD])
this.ca=H.c([],[A.eE])
if(a1.k2){y=a1.z
if(y>0){this.dr=H.k(this.r.m(0,"dirLightCount"),"$isH")
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
x=this.c5;(x&&C.a).h(x,new A.ez(m,l,k))}}y=a1.Q
if(y>0){this.ds=H.k(this.r.m(0,"pntLightCount"),"$isH")
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
H.e(i,"$isR")
x=this.r
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isR")
x=this.r
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isR")
x=this.c6;(x&&C.a).h(x,new A.eA(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.dt=H.k(this.r.m(0,"spotLightCount"),"$isH")
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
H.e(h,"$isR")
x=this.r
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isR")
x=this.r
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isR")
x=this.r
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isR")
x=this.r
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isR")
x=this.c7;(x&&C.a).h(x,new A.eB(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.du=H.k(this.r.m(0,"txtDirLightCount"),"$isH")
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
H.e(f,"$isak")
x=this.c8;(x&&C.a).h(x,new A.eC(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.dv=H.k(this.r.m(0,"txtPntLightCount"),"$isH")
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
H.e(j,"$isd5")
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
H.e(g,"$isR")
x=this.r
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isR")
x=this.r
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isR")
x=this.r
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isad")
x=this.c9;(x&&C.a).h(x,new A.eD(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.dw=H.k(this.r.m(0,"txtSpotLightCount"),"$isH")
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
H.e(e,"$isR")
x=this.r
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isR")
x=this.r
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(c,"$isR")
x=this.r
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(b,"$isR")
x=this.r
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(a,"$isR")
x=this.r
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(a0,"$isak")
x=this.ca;(x&&C.a).h(x,new A.eE(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
aa:function(a,b,c){b.a.uniform1i(b.d,1)},
a4:function(a,b,c){if(c==null||c.d<6)b.a.uniform1i(b.d,1)
else{a.cu(c)
b.a.uniform1i(b.d,0)}},
p:{
hn:function(a,b){var z,y
z=a.ao
y=new A.e_(b,z)
y.cC(b,z)
y.dZ(a,b)
return y}}},hq:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aH,ao,aI",
fi:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aH+"];\n"
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
fp:function(a){var z
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
fj:function(a){var z
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
fA:function(a){var z,y
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
fB:function(a){var z,y
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
fs:function(a){var z
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
fF:function(a){var z
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
ak:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.e)return
if(0>=c.length)return H.i(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.h.cz(c,1))+"Txt;\n"
a.a=z
if(b===C.d)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.c)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fm:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.ak(a,z,"emission")
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
fh:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.ak(a,z,"ambient")
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
fk:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.ak(a,z,"diffuse")
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
fn:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.ak(a,z,"invDiffuse")
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
fw:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.ak(a,z,"specular")
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
fq:function(a){var z,y
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
fu:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.ak(a,z,"reflect")
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
fv:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.ak(a,z,"refract")
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
fl:function(a){var z,y
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
ft:function(a){var z,y
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
fz:function(a){var z,y
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
fC:function(a){var z,y,x
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
fD:function(a){var z,y,x
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
fE:function(a){var z,y,x
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
fo:function(a){var z
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
i:function(a){return this.ao}},ez:{"^":"a;a,b,c"},eC:{"^":"a;a,b,c,d,e,f,r,x"},eA:{"^":"a;a,b,c,d,e,f,r"},eD:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eB:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eE:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cX:{"^":"cu;",
cC:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
dA:function(a,b,c){var z,y,x
this.c=this.cO(b,35633)
this.d=this.cO(c,35632)
z=this.a
y=z.createProgram()
this.e=y
z.attachShader(y,this.c)
z.attachShader(this.e,this.d)
z.linkProgram(this.e)
if(!H.fa(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.r(P.q("Failed to link shader: "+H.j(x)))}this.f8()
this.fa()},
U:function(a){a.a.useProgram(this.e)
this.f.fU()},
cO:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fa(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.h(P.q("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
f8:function(){var z,y,x,w,v,u
z=H.c([],[A.ds])
y=this.a
x=H.Y(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.ds(y,v.name,u))}this.f=new A.ft(z)},
fa:function(){var z,y,x,w,v,u
z=H.c([],[A.a3])
y=this.a
x=H.Y(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.fQ(v.type,v.size,v.name,u))}this.r=new A.iJ(z)},
ay:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.H(z,y,b,c)
else return A.d4(z,y,b,a,c)},
ek:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ak(z,y,b,c)
else return A.d4(z,y,b,a,c)},
el:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ad(z,y,b,c)
else return A.d4(z,y,b,a,c)},
b9:function(a,b){return new P.eN(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
fQ:function(a,b,c,d){switch(a){case 5120:return this.ay(b,c,d)
case 5121:return this.ay(b,c,d)
case 5122:return this.ay(b,c,d)
case 5123:return this.ay(b,c,d)
case 5124:return this.ay(b,c,d)
case 5125:return this.ay(b,c,d)
case 5126:return new A.R(this.a,this.e,c,d)
case 35664:return new A.iE(this.a,this.e,c,d)
case 35665:return new A.F(this.a,this.e,c,d)
case 35666:return new A.iH(this.a,this.e,c,d)
case 35667:return new A.iF(this.a,this.e,c,d)
case 35668:return new A.iG(this.a,this.e,c,d)
case 35669:return new A.iI(this.a,this.e,c,d)
case 35674:return new A.iL(this.a,this.e,c,d)
case 35675:return new A.d5(this.a,this.e,c,d)
case 35676:return new A.ay(this.a,this.e,c,d)
case 35678:return this.ek(b,c,d)
case 35680:return this.el(b,c,d)
case 35670:throw H.h(this.b9("BOOL",c))
case 35671:throw H.h(this.b9("BOOL_VEC2",c))
case 35672:throw H.h(this.b9("BOOL_VEC3",c))
case 35673:throw H.h(this.b9("BOOL_VEC4",c))
default:throw H.h(P.q("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},c2:{"^":"a;a,b",
i:function(a){return this.b}},eb:{"^":"cX;0x,0y,0z,0Q,0ch,0cx,a,b,0c,0d,0e,0f,0r"},a3:{"^":"a;"},iJ:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.j(0,b)
if(z==null)throw H.h(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.F()},
fW:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w)x+=z[w].i(0)+a
return x},
F:function(){return this.fW("\n")}},H:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},iF:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},iG:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},iI:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},iD:{"^":"a3;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.j(this.c)},
p:{
d4:function(a,b,c,d,e){var z=new A.iD(a,b,c,e)
z.f=d
z.e=P.hf(d,0,!1,P.C)
return z}}},R:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},iE:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},F:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},iH:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},iL:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},d5:{"^":"a3;a,b,c,d",
a8:function(a){var z=new Float32Array(H.bD(H.v(a,"$isf",[P.w],"$asf")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},ay:{"^":"a3;a,b,c,d",
a8:function(a){var z=new Float32Array(H.bD(H.v(a,"$isf",[P.w],"$asf")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},ak:{"^":"a3;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},ad:{"^":"a3;a,b,c,d",
cu:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
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
j=F.l3(d,e,new F.kq(z,F.cl(z.c),F.cl(z.d),k,l,c),b)
if(j!=null)a.h7(j)},
l3:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.b(c,{func:1,ret:-1,args:[F.aB,P.w,P.w]})
if(a<1)return
if(b<1)return
z=F.cY()
y=H.c([],[F.aB])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.ci(null,null,new V.aJ(u,0,0,1),null,null,new V.P(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.c1(d))}for(x=1;x<=a;++x){s=x/a
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
C.a.h(y,t.c1(d))}}z.d.fH(a+1,b+1,y)
return z},
kq:{"^":"u:35;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cf(z.b,b).cf(z.d.cf(z.c,b),c)
z=new V.ac(y.a,y.b,y.c)
if(!J.O(a.f,z)){a.f=z
z=a.a
if(z!=null)z.a_()}a.sb0(y.u(0,Math.sqrt(y.A(y))))
z=1-b
x=1-c
x=new V.bp(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.O(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.a_()}}},
ai:{"^":"a;0a,0b,0c,0d,0e",
gc4:function(){return this.a==null||this.b==null||this.c==null},
ee:function(){var z,y,x,w,v
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
if(v.dB())return
return v.u(0,Math.sqrt(v.A(v)))},
eh:function(){var z,y,x,w,v
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
z=v.aS(z.u(0,Math.sqrt(z.A(z))))
return z.u(0,Math.sqrt(z.A(z)))},
c_:function(){if(this.d!=null)return!0
var z=this.ee()
if(z==null){z=this.eh()
if(z==null)return!1}this.d=z
this.a.a.a_()
return!0},
ed:function(){var z,y,x,w,v
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
if(v.dB())return
return v.u(0,Math.sqrt(v.A(v)))},
eg:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
z=new V.ac(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).E(0,x)
z=new V.G(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.A(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.H(0)}z=this.d
if(z!=null){k=z.u(0,Math.sqrt(z.A(z)))
z=k.aS(m)
z=z.u(0,Math.sqrt(z.A(z))).aS(k)
m=z.u(0,Math.sqrt(z.A(z)))}return m},
bY:function(){if(this.e!=null)return!0
var z=this.ed()
if(z==null){z=this.eg()
if(z==null)return!1}this.e=z
this.a.a.a_()
return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
v:function(a){var z,y
if(this.gc4())return a+"disposed"
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
cM:{"^":"a;0a,0b",
gc4:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
v:function(a){if(this.gc4())return a+"disposed"
return a+C.h.a6(J.a5(this.a.e),0)+", "+C.h.a6(J.a5(this.b.e),0)},
F:function(){return this.v("")}},
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
h7:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.W()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){v=z[w]
this.a.h(0,v.fP())}this.a.W()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.W()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.cU()
if(r.a==null)H.r(P.q("May not create a point with a vertex which is not attached to a shape."))
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
if(s>=t.length)return H.i(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.W()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.i(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.cM()
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
if(!(t==null))t.t(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.W()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.W()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.i(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.W()
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
if(!(z==null))z.as(0)},
an:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.an()||!1
if(!this.a.an())y=!1
z=this.e
if(!(z==null))z.as(0)
return y},
d3:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
v=b.gcw(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.w
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.dv])
for(r=0,q=0;q<w;++q){p=b.fJ(q)
o=p.gcw(p)
C.a.S(s,q,new Z.dv(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.i(y,n)
m=y[n].h3(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.S(t,l,m[k]);++l}}r+=o}H.v(t,"$isf",[x],"$asf")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bD(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cx(new Z.eK(34962,j),s,b)
i.b=H.c([],[Z.c8])
if(this.b.b.length!==0){x=P.C
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.W()
C.a.h(h,g.e)}f=Z.d7(y,34963,H.v(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.c8(0,h.length,f))}if(this.c.b.length!==0){x=P.C
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.W()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.W()
C.a.h(h,g.e)}f=Z.d7(y,34963,H.v(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.c8(1,h.length,f))}if(this.d.b.length!==0){x=P.C
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.W()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.W()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].c
g.a.a.W()
C.a.h(h,g.e)}f=Z.d7(y,34963,H.v(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.c8(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.n])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.v("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.v("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.v("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.v("   "))}return C.a.w(z,"\n")},
ab:function(a){var z=this.e
if(!(z==null))z.t(a)},
a_:function(){return this.ab(null)},
p:{
cY:function(){var z,y
z=new F.ea()
y=new F.iW(z)
y.b=!1
y.c=H.c([],[F.aB])
z.a=y
y=new F.i6(z)
y.b=H.c([],[F.cU])
z.b=y
y=new F.i5(z)
y.b=H.c([],[F.cM])
z.c=y
y=new F.i4(z)
y.b=H.c([],[F.ai])
z.d=y
z.e=null
return z}}},
i4:{"^":"a;a,0b",
fG:function(a){var z,y,x,w,v
H.v(a,"$isf",[F.aB],"$asf")
z=H.c([],[F.ai])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.be(y,w,v))}return z},
fH:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.v(c,"$isf",[F.aB],"$asf")
z=H.c([],[F.ai])
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
an:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].c_())x=!1
return x},
bZ:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].bY())x=!1
return x},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
F:function(){return this.v("")}},
i5:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.i(w,x)
C.a.h(z,w[x].v(a+(""+x+". ")))}return C.a.w(z,"\n")},
F:function(){return this.v("")}},
i6:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
F:function(){return this.v("")}},
aB:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
c1:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.ci(this.cx,x,u,z,y,w,v,a,t)},
fP:function(){return this.c1(null)},
sb0:function(a){var z
if(!J.O(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a_()}},
h3:function(a){var z,y
z=J.J(a)
if(z.q(a,$.$get$ar())){z=this.f
y=[P.w]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aE())){z=this.r
y=[P.w]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aD())){z=this.x
y=[P.w]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$aF())){z=this.y
y=[P.w]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.q(a,$.$get$aG())){z=this.z
y=[P.w]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$by())){z=this.Q
y=[P.w]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.q(a,$.$get$bz())){z=this.Q
y=[P.w]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(z.q(a,$.$get$b1()))return H.c([this.ch],[P.w])
else if(z.q(a,$.$get$aC())){z=this.cx
y=[P.w]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.w])},
c_:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.K(0,new F.j2(z))
z=z.a
this.r=z.u(0,Math.sqrt(z.A(z)))
z=this.a
if(z!=null){z.a_()
z=this.a.e
if(!(z==null))z.as(0)}return!0},
bY:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.K(0,new F.j1(z))
z=z.a
this.x=z.u(0,Math.sqrt(z.A(z)))
z=this.a
if(z!=null){z.a_()
z=this.a.e
if(!(z==null))z.as(0)}return!0},
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
p:{
ci:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aB()
y=new F.j0(z)
y.b=H.c([],[F.cU])
z.b=y
y=new F.j_(z)
x=[F.cM]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.iX(z)
x=[F.ai]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
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
j2:{"^":"u:5;a",
$1:function(a){var z,y
H.k(a,"$isai")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
j1:{"^":"u:5;a",
$1:function(a){var z,y
H.k(a,"$isai")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
iW:{"^":"a;a,0b,0c",
W:function(){var z,y,x,w
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
fI:function(a,b,c,d,e,f,g,h,i){var z=F.ci(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
ba:function(a,b,c,d,e,f){return this.fI(a,null,b,c,null,d,e,f,0)},
gk:function(a){return this.c.length},
an:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].c_()
return!0},
bZ:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].bY()
return!0},
fL:function(){var z,y,x,w,v,u,t,s
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
z=H.c([],[P.n])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
F:function(){return this.v("")}},
iX:{"^":"a;a,0b,0c,0d",
gk:function(a){return this.b.length+this.c.length+this.d.length},
K:function(a,b){H.b(b,{func:1,ret:-1,args:[F.ai]})
C.a.K(this.b,b)
C.a.K(this.c,new F.iY(this,b))
C.a.K(this.d,new F.iZ(this,b))},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
F:function(){return this.v("")}},
iY:{"^":"u:5;a,b",
$1:function(a){H.k(a,"$isai")
if(!J.O(a.a,this.a))this.b.$1(a)}},
iZ:{"^":"u:5;a,b",
$1:function(a){var z
H.k(a,"$isai")
z=this.a
if(!J.O(a.a,z)&&!J.O(a.b,z))this.b.$1(a)}},
j_:{"^":"a;a,0b,0c",
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
F:function(){return this.v("")}},
j0:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
F:function(){return this.v("")}}}],["","",,O,{"^":"",hm:{"^":"bU;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gn:function(){var z=this.dy
if(z==null){z=D.E()
this.dy=z}return z},
P:[function(a){var z
H.k(a,"$isl")
z=this.dy
if(!(z==null))z.t(a)},function(){return this.P(null)},"cQ","$1","$0","gaA",0,2,0],
f1:[function(a){H.k(a,"$isl")
this.a=null
this.P(a)},function(){return this.f1(null)},"i9","$1","$0","gf0",0,2,0],
hN:[function(a,b){var z=V.ab
z=new D.bN(a,H.v(b,"$isd",[z],"$asd"),this,[z])
z.b=!0
this.P(z)},"$2","geA",8,0,21],
hO:[function(a,b){var z=V.ab
z=new D.bO(a,H.v(b,"$isd",[z],"$asd"),this,[z])
z.b=!0
this.P(z)},"$2","geB",8,0,21],
cL:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
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
a6=new Z.b0(a6.a|z.a)}return new A.hq(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
O:function(a,b){H.v(a,"$isf",[T.d0],"$asf")
if(b!=null)if(!C.a.aR(a,b)){b.a=a.length
C.a.h(a,b)}},
ad:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.af(z,z.length,0,[H.y(z,0)]);z.B();){y=z.d
x=new V.G(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.co(x)}}},
dK:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.cL()
y=H.k(a.fr.j(0,z.ao),"$ise_")
if(y==null){y=A.hn(z,a.a)
a.d1(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.aI
z=b.e
if(!(z instanceof Z.cx)){b.e=null
z=null}if(z==null||!z.d.q(0,w)){z=x.r1
if(z)b.d.an()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.c
u.d.bZ()
u.a.bZ()
u=u.e
if(!(u==null))u.as(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.a.fL()
t=t.e
if(!(t==null))t.as(0)}r=b.d.d3(new Z.eL(a.a),w)
r.ap($.$get$ar()).e=this.a.y.c
if(z)r.ap($.$get$aE()).e=this.a.Q.c
if(v)r.ap($.$get$aD()).e=this.a.z.c
if(x.rx)r.ap($.$get$aF()).e=this.a.ch.c
if(u)r.ap($.$get$aG()).e=this.a.cx.c
if(x.x1)r.ap($.$get$aC()).e=this.a.cy.c
b.e=r}z=T.d0
q=H.c([],[z])
this.a.U(a)
if(x.fx){v=this.a
u=a.dx
u=u.gI(u)
v=v.db
v.toString
v.a8(u.a3(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.gI(u)
t=a.dx
t=u.l(0,t.gI(t))
a.cx=t
u=t}v=v.dx
v.toString
v.a8(u.a3(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.ghm()
t=a.dx
t=u.l(0,t.gI(t))
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
v.a8(C.z.a3(u,!0))}if(x.aH>0){p=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,p)
for(v=[P.w],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.i(t,o)
t=t[o]
u.toString
H.k(t,"$isab")
u=u.k3
if(o>=u.length)return H.i(u,o)
u=u[o]
n=new Float32Array(H.bD(H.v(t.a3(0,!0),"$isf",v,"$asf")))
u.a.uniformMatrix4fv(u.d,!1,n)}}switch(x.a){case C.b:break
case C.e:v=this.a
u=this.f.f
v=v.k4
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.O(q,this.f.d)
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
case C.c:this.O(q,this.f.e)
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
case C.e:v=this.a
u=this.r.f
v=v.ry
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.O(q,this.r.d)
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
case C.c:this.O(q,this.r.e)
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
case C.e:v=this.a
u=this.x.f
v=v.y2
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.O(q,this.x.d)
v=this.a
u=this.x.d
v.aa(v.aH,v.aI,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.c:this.O(q,this.x.e)
v=this.a
u=this.x.e
v.a4(v.ao,v.aI,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.d){case C.b:break
case C.e:v=this.a
u=this.y.f
v=v.bc
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.O(q,this.y.d)
v=this.a
u=this.y.d
v.aa(v.da,v.bd,u)
u=this.a
v=this.y.f
u=u.bc
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.c:this.O(q,this.y.e)
v=this.a
u=this.y.e
v.a4(v.dc,v.bd,u)
u=this.a
v=this.y.f
u=u.bc
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.b:break
case C.e:v=this.a
u=this.z.f
v=v.be
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bg
u.a.uniform1f(u.d,s)
break
case C.d:this.O(q,this.z.d)
v=this.a
u=this.z.d
v.aa(v.dd,v.bf,u)
u=this.a
v=this.z.f
u=u.be
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bg
v.a.uniform1f(v.d,s)
break
case C.c:this.O(q,this.z.e)
v=this.a
u=this.z.e
v.a4(v.de,v.bf,u)
u=this.a
v=this.z.f
u=u.be
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bg
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.dr
v.a.uniform1i(v.d,p)
v=a.db
m=v.gI(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.c5
if(l>=t.length)return H.i(t,l)
i=t[l]
t=m.co(j.a)
s=t.a
h=t.b
g=t.c
g=t.u(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.ds
v.a.uniform1i(v.d,p)
v=a.db
m=v.gI(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.c6
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gaW(j)
s=i.b
h=t.gcq(t)
g=t.gcr(t)
t=t.gcs(t)
s.a.uniform3f(s.d,h,g,t)
t=m.b3(j.gaW(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gag(j)
g=i.d
h=t.gbr()
s=t.gb4()
t=t.gbb()
g.a.uniform3f(g.d,h,s,t)
t=j.gbT()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gbU()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gbV()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.dt
v.a.uniform1i(v.d,p)
v=a.db
m=v.gI(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.c7
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gaW(j)
s=i.b
h=t.gcq(t)
g=t.gcr(t)
t=t.gcs(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gc3(j).ih()
g=i.c
h=t.gaE(t)
s=t.gaF(t)
t=t.gaG()
g.a.uniform3f(g.d,h,s,t)
t=m.b3(j.gaW(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gag(j)
s=i.e
h=t.gbr()
g=t.gb4()
t=t.gbb()
s.a.uniform3f(s.d,h,g,t)
t=j.gig()
g=i.f
g.a.uniform1f(g.d,t)
t=j.gie()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gbT()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gbU()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gbV()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.du
v.a.uniform1i(v.d,p)
v=a.db
m=v.gI(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
s=this.a.c8
if(l>=s.length)return H.i(s,l)
i=s[l]
s=j.gb_()
H.v(q,"$isf",t,"$asf")
if(!C.a.aR(q,s)){s.sbF(q.length)
C.a.h(q,s)}s=j.gc3(j)
h=i.d
g=s.gaE(s)
f=s.gaF(s)
s=s.gaG()
h.a.uniform3f(h.d,g,f,s)
s=j.gbs()
f=i.b
g=s.gaE(s)
h=s.gaF(s)
s=s.gaG()
f.a.uniform3f(f.d,g,h,s)
s=j.gaX(j)
h=i.c
g=s.gaE(s)
f=s.gaF(s)
s=s.gaG()
h.a.uniform3f(h.d,g,f,s)
s=m.co(j.gc3(j))
f=s.a
g=s.b
h=s.c
h=s.u(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gag(j)
g=i.f
f=h.gbr()
s=h.gb4()
h=h.gbb()
g.a.uniform3f(g.d,f,s,h)
h=j.gb_()
s=h.gbp(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gbp(h)
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.gfZ(h))
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.dv
v.a.uniform1i(v.d,p)
v=a.db
m=v.gI(v)
for(v=this.dx.y,u=v.length,t=[P.w],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
h=this.a.c9
if(l>=h.length)return H.i(h,l)
i=h[l]
h=j.gb_()
H.v(q,"$isf",s,"$asf")
if(!C.a.aR(q,h)){h.sbF(q.length)
C.a.h(q,h)}e=m.l(0,j.gI(j))
h=j.gI(j).b3(new V.ac(0,0,0))
g=i.b
f=h.gcq(h)
d=h.gcr(h)
h=h.gcs(h)
g.a.uniform3f(g.d,f,d,h)
h=e.b3(new V.ac(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.cd(0)
d=i.d
n=new Float32Array(H.bD(H.v(new V.e0(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a3(0,!0),"$isf",t,"$asf")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gag(j)
h=i.e
f=d.gbr()
g=d.gb4()
d=d.gbb()
h.a.uniform3f(h.d,f,g,d)
d=j.gb_()
h=d.gbp(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.ghH()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gbF())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gbT()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gbU()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gbV()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.dw
v.a.uniform1i(v.d,p)
v=a.db
m=v.gI(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.ca
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gb_()
H.v(q,"$isf",z,"$asf")
if(!C.a.aR(q,t)){t.sbF(q.length)
C.a.h(q,t)}t=j.gaW(j)
s=i.b
h=t.gcq(t)
g=t.gcr(t)
t=t.gcs(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gc3(j)
g=i.c
h=t.gaE(t)
s=t.gaF(t)
t=t.gaG()
g.a.uniform3f(g.d,h,s,t)
t=j.gbs()
s=i.d
h=t.gaE(t)
g=t.gaF(t)
t=t.gaG()
s.a.uniform3f(s.d,h,g,t)
t=j.gaX(j)
g=i.e
h=t.gaE(t)
s=t.gaF(t)
t=t.gaG()
g.a.uniform3f(g.d,h,s,t)
t=m.b3(j.gaW(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gb_()
s=t.gbp(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gbp(t)
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.gfZ(t))
t=i.x
t.a.uniform1i(t.d,0)}t=j.gag(j)
s=i.y
h=t.gbr()
g=t.gb4()
t=t.gbb()
s.a.uniform3f(s.d,h,g,t)
t=j.gio()
g=i.z
g.a.uniform1f(g.d,t)
t=j.gip()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gbT()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gbU()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gbV()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.b:break
case C.e:break
case C.d:this.O(q,this.Q.d)
z=this.a
v=this.Q.d
z.aa(z.df,z.bh,v)
break
case C.c:this.O(q,this.Q.e)
z=this.a
v=this.Q.e
z.a4(z.dg,z.bh,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gI(v).cd(0)
a.Q=v}z=z.fy
z.toString
z.a8(v.a3(0,!0))}if(x.dy){this.O(q,this.ch)
z=this.a
v=this.ch
z.a4(z.dh,z.di,v)
switch(x.r){case C.b:break
case C.e:z=this.a
v=this.cx.f
z=z.bi
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.d:this.O(q,this.cx.d)
z=this.a
v=this.cx.d
z.aa(z.dj,z.bj,v)
v=this.a
z=this.cx.f
v=v.bi
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.c:this.O(q,this.cx.e)
z=this.a
v=this.cx.e
z.a4(z.dk,z.bj,v)
v=this.a
z=this.cx.f
v=v.bi
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.b:break
case C.e:z=this.a
v=this.cy.f
z=z.bl
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bk
v.a.uniform1f(v.d,t)
break
case C.d:this.O(q,this.cy.d)
z=this.a
v=this.cy.d
z.aa(z.dl,z.bm,v)
v=this.a
z=this.cy.f
v=v.bl
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bk
z.a.uniform1f(z.d,t)
break
case C.c:this.O(q,this.cy.e)
z=this.a
v=this.cy.e
z.a4(z.dm,z.bm,v)
v=this.a
z=this.cy.f
v=v.bl
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bk
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.b
if(v){switch(z){case C.b:break
case C.e:z=this.a
u=this.db.f
z=z.bn
z.a.uniform1f(z.d,u)
break
case C.d:this.O(q,this.db.d)
z=this.a
u=this.db.d
z.aa(z.dn,z.bo,u)
u=this.a
z=this.db.f
u=u.bn
u.a.uniform1f(u.d,z)
break
case C.c:this.O(q,this.db.e)
z=this.a
u=this.db.e
z.a4(z.dq,z.bo,u)
u=this.a
z=this.db.f
u=u.bn
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o)q[o].U(a)
z=b.e
z.U(a)
z.a0(a)
z.at(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o){z=q[o]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(34067,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.d8()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cL().ao}},ho:{"^":"cN;0f,a,b,0c,0d,0e",
f4:function(a){var z,y
z=this.f
if(!$.m.$2(z,a)){y=this.f
this.f=a
z=new D.B(this.b,y,a,this,[P.w])
z.b=!0
this.a.P(z)}},
aB:function(){this.cB()
this.f4(1)}},cN:{"^":"a;",
P:[function(a){this.a.P(H.k(a,"$isl"))},function(){return this.P(null)},"cQ","$1","$0","gaA",0,2,0],
aB:["cB",function(){}],
f6:function(a){},
f7:function(a){var z,y,x
z=this.e
if(z==null?a!=null:z!==a){if(z!=null){z=z.gn()
z.toString
y=H.b(this.gaA(),{func:1,ret:-1,args:[D.l]})
C.a.R(z.a,y)}x=this.e
this.e=a
if(a!=null){z=a.gn()
z.toString
y=H.b(this.gaA(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.B(this.b+".textureCube",x,this.e,this,[T.d1])
z.b=!0
this.a.P(z)}},
sb0:function(a){var z=this.c
if(z!==C.c){if(z===C.b)this.aB()
this.c=C.c
this.f6(null)
z=this.a
z.a=null
z.P(null)}this.f7(a)}},hp:{"^":"cN;a,b,0c,0d,0e"},aW:{"^":"cN;0f,a,b,0c,0d,0e",
cV:function(a){var z,y
if(!J.O(this.f,a)){z=this.f
this.f=a
y=new D.B(this.b+".color",z,a,this,[V.T])
y.b=!0
this.a.P(y)}},
aB:["bw",function(){this.cB()
this.cV(new V.T(1,1,1))}],
sag:function(a,b){var z
if(this.c===C.b){this.c=C.e
this.aB()
z=this.a
z.a=null
z.P(null)}this.cV(b)}},hr:{"^":"aW;0ch,0f,a,b,0c,0d,0e",
f5:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.B(this.b+".refraction",y,a,this,[P.w])
z.b=!0
this.a.P(z)}},
aB:function(){this.bw()
this.f5(1)}},hs:{"^":"aW;0ch,0f,a,b,0c,0d,0e",
bQ:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.B(this.b+".shininess",y,a,this,[P.w])
z.b=!0
this.a.P(z)}},
aB:function(){this.bw()
this.bQ(100)}},ib:{"^":"bU;0a,0b,0c,0d,0e",
gn:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
P:[function(a){var z
H.k(a,"$isl")
z=this.e
if(!(z==null))z.t(a)},function(){return this.P(null)},"cQ","$1","$0","gaA",0,2,0],
dK:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.k(a.fr.j(0,"Skybox"),"$iseb")
if(z==null){y=a.a
z=new A.eb(y,"Skybox")
z.cC(y,"Skybox")
z.dA(0,$.id,$.ic)
z.x=z.f.j(0,"posAttr")
z.y=H.e(z.r.j(0,"fov"),"$isR")
z.z=H.e(z.r.j(0,"ratio"),"$isR")
z.Q=H.e(z.r.j(0,"boxClr"),"$isF")
z.ch=H.e(z.r.j(0,"boxTxt"),"$isad")
z.cx=H.e(z.r.j(0,"viewMat"),"$isay")
a.d1(z)}this.a=z}if(b.e==null){y=b.d.d3(new Z.eL(a.a),$.$get$ar())
y.ap($.$get$ar()).e=this.a.x.c
b.e=y}y=this.c
if(y!=null){y.a=1
y.U(a)}y=a.d
x=a.c
w=this.a
w.U(a)
v=this.b
u=w.y
u.a.uniform1f(u.d,v)
v=w.z
v.a.uniform1f(v.d,y/x)
x=this.c
w.ch.cu(x)
x=this.d
y=w.Q
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.gI(x).cd(0)
w=w.cx
w.toString
w.a8(x.a3(0,!0))
y=b.e
if(y instanceof Z.cx){y.U(a)
y.a0(a)
y.at(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.d8()
y=this.c
if(y!=null)y.at(a)}},bU:{"^":"a;"}}],["","",,T,{"^":"",d0:{"^":"cu;"},d1:{"^":"d0;0a,0b,0c,0d,0e",
gn:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
U:function(a){if(!this.c&&this.d>=6){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,this.b)}},
at:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,null)}}},iq:{"^":"a;a,0b,0c,0d,0e",
dD:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
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
this.az(r,s,z,34069,!1,!1)
this.az(r,s,w,34070,!1,!1)
this.az(r,s,y,34071,!1,!1)
this.az(r,s,v,34072,!1,!1)
this.az(r,s,x,34073,!1,!1)
this.az(r,s,u,34074,!1,!1)
return r},
dC:function(a){return this.dD(a,".png",!1,"")},
h5:function(a,b){return this.dD(a,b,!1,"")},
az:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.a6
W.V(z,"load",H.b(new T.ir(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
f2:function(a,b,c){var z,y,x,w
b=V.dn(b,2)
z=V.dn(a.width,2)
y=V.dn(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cz(null,null)
x.width=z
x.height=y
w=H.k(C.k.dQ(x,"2d"),"$isdx")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.kG(w.getImageData(0,0,x.width,x.height))}}},ir:{"^":"u:22;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.f2(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.K.hv(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6){x=x.e
if(!(x==null))x.fT()}++z.e}}}],["","",,V,{"^":"",fr:{"^":"a;",
aT:function(a,b){return!0},
i:function(a){return"all"},
$isbR:1},bR:{"^":"a;"},dZ:{"^":"a;",
aT:["dX",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)if(z[x].aT(0,b))return!0
return!1}],
i:["cA",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbR:1},bn:{"^":"dZ;0a",
aT:function(a,b){return!this.dX(0,b)},
i:function(a){return"!["+this.cA(0)+"]"}},i2:{"^":"a;0a",
e0:function(a){var z,y
if(a.a.length<=0)throw H.h(P.q("May not create a SetMatcher with zero characters."))
z=new H.aV(0,0,[P.C,P.a4])
for(y=new H.dW(a,a.gk(a),0,[H.am(a,"t",0)]);y.B();)z.S(0,y.d,!0)
this.a=z},
aT:function(a,b){return this.a.d6(0,b)},
i:function(a){var z=this.a
return P.d_(new H.dV(z,[H.y(z,0)]),0,null)},
$isbR:1,
p:{
a1:function(a){var z=new V.i2()
z.e0(a)
return z}}},ed:{"^":"a;a,b,0c,0d",
gh8:function(a){return this.b},
w:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.en(this.a.G(0,b))
w.a=H.c([],[V.bR])
w.c=!1
C.a.h(this.c,w)
return w},
fV:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.aT(0,a))return w}return},
i:function(a){return this.b}},ek:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.fl(this.b,"\n","\\n")
y=H.fl(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},el:{"^":"a;a,b,0c",
i:function(a){return this.b}},iz:{"^":"a;0a,0b,0c",
G:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.ed(this,b)
z.c=H.c([],[V.en])
this.a.S(0,b,z)}return z},
b1:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.el(this,a)
y=P.n
z.c=new H.aV(0,0,[y,y])
this.b.S(0,a,z)}return z},
hB:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.ek])
y=this.c
x=[P.C]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.h.b5(a,t)
r=y.fV(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.d_(w,0,null)
throw H.h(P.q("Untokenizable string [state: "+y.gh8(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.d_(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.ek(o==null?p.b:o,q,t)}++t}}}},en:{"^":"dZ;b,0c,0a",
i:function(a){return this.b.b+": "+this.cA(0)}}}],["","",,X,{"^":"",c0:{"^":"a;",$isav:1},fZ:{"^":"cg;0a,0b,0c,0d,0e,0f,0r,0x",
gn:function(){var z=this.x
if(z==null){z=D.E()
this.x=z}return z},
ae:function(a){var z=this.x
if(!(z==null))z.t(a)},
sdJ:function(a,b){var z,y
if(!this.r.q(0,b)){z=this.r
this.r=b
y=new D.B("region",z,b,this,[V.cV])
y.b=!0
this.ae(y)}},
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
v=C.i.ac(w.a*y)
if(typeof x!=="number")return H.p(x)
u=C.i.ac(w.b*x)
t=C.i.ac(w.c*y)
a.c=t
w=C.i.ac(w.d*x)
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
a.cy.bq(V.aK())
z=V.aK()
a.db.bq(z)},
at:function(a){a.cy.ar()
a.db.ar()},
$isav:1,
$isc0:1},hE:{"^":"a;0a,0b,0c,0d,0e,0f",
gn:function(){var z=this.f
if(z==null){z=D.E()
this.f=z}return z},
ae:[function(a){var z
H.k(a,"$isl")
z=this.f
if(!(z==null))z.t(a)},function(){return this.ae(null)},"hF","$1","$0","gea",0,2,0],
U:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=this.c
w=this.d
v=this.e
u=v-w
t=1/Math.tan(x*0.5)
s=V.at(-t/(z/y),0,0,0,0,t,0,0,0,0,v/u,-v*w/u,0,0,1,0)
a.cy.bq(s)
z=$.e6
if(z==null){z=V.e1(new V.ac(0,0,0),new V.G(0,1,0),new V.G(0,0,-1))
$.e6=z
r=z}else r=z
z=this.b
if(z!=null){q=z.aK(0,a,this)
if(q!=null)r=q.l(0,r)}a.db.bq(r)},
at:function(a){a.cy.ar()
a.db.ar()},
$isav:1,
$isc0:1,
p:{
cT:function(a,b,c,d,e){var z,y,x,w
z=new X.hE()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
if(null!=c){y=z.b
z.b=c
if(c!=null){x=c.gn()
x.toString
w=H.b(z.gea(),{func:1,ret:-1,args:[D.l]})
C.a.h(x.a,w)}x=new D.B("mover",y,z.b,z,[U.a0])
x.b=!0
z.ae(x)}x=z.c
if(!$.m.$2(x,b)){y=z.c
z.c=b
x=new D.B("fov",y,b,z,[P.w])
x.b=!0
z.ae(x)}x=z.d
if(!$.m.$2(x,d)){y=z.d
z.d=d
x=new D.B("near",y,d,z,[P.w])
x.b=!0
z.ae(x)}x=z.e
if(!$.m.$2(x,a)){y=z.e
z.e=a
x=new D.B("far",y,a,z,[P.w])
x.b=!0
z.ae(x)}return z}}},cg:{"^":"a;"}}],["","",,V,{"^":"",
l1:function(a){P.iy(C.w,new V.l2(a))},
l2:{"^":"u:37;a",
$1:function(a){H.k(a,"$isaZ")
P.dp(C.i.dN(this.a.gfX(),2)+" fps")}},
i7:{"^":"a;0a,0b",
e1:function(a,b){var z,y,x,w,v,u,t
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
W.V(z,"scroll",H.b(new V.ia(x),{func:1,ret:-1,args:[t]}),!1,t)},
d0:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.v(a,"$isf",[P.n],"$asf")
this.f9()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.hB(C.a.h1(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
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
if(1>=r.length)return H.i(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.kd(C.H,s,C.q,!1)
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
f9:function(){var z,y,x,w
if(this.b!=null)return
z=new V.iz()
y=P.n
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
x.a=H.c([],w)
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
x.a=H.c([],w)
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
x.a=H.c([],w)
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
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a1(new H.Z("|]"))
C.a.h(y.a,x)
x=z.G(0,"LinkTail").w(0,"LinkEnd")
y=V.a1(new H.Z("]"))
C.a.h(x.a,y)
x.c=!0
x=z.G(0,"LinkTail").w(0,"LinkTail")
y=new V.bn()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a1(new H.Z("|]"))
C.a.h(y.a,x)
C.a.h(z.G(0,"Start").w(0,"Other").a,new V.fr())
x=z.G(0,"Other").w(0,"Other")
y=new V.bn()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a1(new H.Z("*_`["))
C.a.h(y.a,x)
x=z.G(0,"BoldEnd")
x.d=x.a.b1("Bold")
x=z.G(0,"ItalicEnd")
x.d=x.a.b1("Italic")
x=z.G(0,"CodeEnd")
x.d=x.a.b1("Code")
x=z.G(0,"LinkEnd")
x.d=x.a.b1("Link")
x=z.G(0,"Other")
x.d=x.a.b1("Other")
this.b=z},
p:{
i8:function(a,b){var z=new V.i7()
z.e1(a,!0)
return z}}},
ia:{"^":"u:22;a",
$1:function(a){P.ei(C.l,new V.i9(this.a))}},
i9:{"^":"u:2;a",
$0:function(){var z,y,x
z=C.i.ac(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}}}],["","",,K,{"^":"",
fg:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=V.i8("Test 033",!0)
y=W.cz(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.n]
z.d0(H.c(["Test of a sterioscopic scene."],x))
z.d0(H.c(["\xab[Back to Tests|../]"],x))
w=document.getElementById("testCanvas")
if(w==null)H.r(P.q("Failed to find an element with the identifier, testCanvas."))
v=E.iw(w,!0,!0,!0,!1)
u=F.cY()
F.bC(u,null,null,1,1,1,0,0,1)
F.bC(u,null,null,1,1,0,1,0,3)
F.bC(u,null,null,1,1,0,0,1,2)
F.bC(u,null,null,1,1,-1,0,0,0)
F.bC(u,null,null,1,1,0,-1,0,0)
F.bC(u,null,null,1,1,0,0,-1,3)
u.an()
t=E.c4(null,!0,null,"",u,null)
s=E.c4(null,!0,null,"",null,null)
for(r=-1.6;r<=1.7;r+=0.8)for(q=-1.6;q<=1.7;q+=0.8)for(p=-1.6;p<=1.7;p+=0.8){o=new V.ab(1,0,0,r,0,1,0,q,0,0,1,p,0,0,0,1).l(0,new V.ab(0.2,0,0,0,0,0.2,0,0,0,0,0.2,0,0,0,0,1))
n=E.c4(null,!0,null,"",null,null)
z=new U.cC()
z.sI(0,o)
n.sdF(z)
z=n.y
x=H.y(z,0)
H.A(t,x)
m=[x]
if(z.aM(H.c([t],m))){l=z.a
k=l.length
C.a.h(l,t)
x=H.v(H.c([t],m),"$isd",[x],"$asd")
z=z.c
if(z!=null)z.$2(k,x)}z=s.y
x=H.y(z,0)
H.A(n,x)
m=[x]
if(z.aM(H.c([n],m))){l=z.a
k=l.length
C.a.h(l,n)
x=H.v(H.c([n],m),"$isd",[x],"$asd")
z=z.c
if(z!=null)z.$2(k,x)}}j=v.f.dC("../resources/diceColor")
i=new O.hm()
z=O.c1(V.ab)
i.e=z
z.aL(i.geA(),i.geB())
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
z=new O.hs(i,"specular")
z.c=C.b
z.f=new V.T(0,0,0)
z.ch=100
i.z=z
z=new O.hp(i,"bump")
z.c=C.b
i.Q=z
i.ch=null
z=new O.aW(i,"reflect")
z.c=C.b
z.f=new V.T(0,0,0)
i.cx=z
z=new O.hr(i,"refract")
z.c=C.b
z.f=new V.T(0,0,0)
z.ch=1
i.cy=z
z=new O.ho(i,"alpha")
z.c=C.b
z.f=1
i.db=z
z=new D.h9()
z.bx(D.U)
z.e=H.c([],[D.c3])
z.f=H.c([],[D.hG])
z.r=H.c([],[D.ie])
z.x=H.c([],[D.is])
z.y=H.c([],[D.it])
z.z=H.c([],[D.iu])
z.Q=null
z.ch=null
z.ct(z.gey(),z.geS(),z.geU())
i.dx=z
x=z.Q
if(x==null){x=D.E()
z.Q=x
z=x}else z=x
x={func:1,ret:-1,args:[D.l]}
m=H.b(i.gf0(),x)
C.a.h(z.a,m)
m=i.dx
z=m.ch
if(z==null){z=D.E()
m.ch=z}m=H.b(i.gaA(),x)
C.a.h(z.a,m)
i.dy=null
m=i.dx
z=U.bL(V.e2(-1,-1,-1,null))
m.h(0,D.dJ(new V.T(1,0.9,0.9),z))
z=i.dx
m=U.bL(V.e2(1,1,2,null))
z.h(0,D.dJ(new V.T(0.2,0.2,0.35),m))
z=i.r
z.sag(0,new V.T(0.2,0.2,0.2))
i.r.sb0(j)
z=i.x
z.sag(0,new V.T(0.8,0.8,0.8))
i.x.sb0(j)
z=i.z
z.sag(0,new V.T(0.7,0.7,0.7))
z=i.z
if(z.c===C.b){z.c=C.e
z.bw()
z.bQ(100)
m=z.a
m.a=null
m.P(null)}z.bQ(10)
i.Q.sb0(v.f.dC("../resources/diceBumpMap"))
h=U.cF(null)
z=v.r
m=new U.iS()
l=U.cB()
l.scp(0,!0)
l.scg(6.283185307179586)
l.scj(0)
l.sa1(0,0)
l.sci(100)
l.sL(0)
l.sc2(0.5)
m.b=l
l=l.gn()
l.toString
g=H.b(m.gaw(),x)
C.a.h(l.a,g)
l=U.cB()
l.scp(0,!0)
l.scg(6.283185307179586)
l.scj(0)
l.sa1(0,0)
l.sci(100)
l.sL(0)
l.sc2(0.5)
m.c=l
C.a.h(l.gn().a,g)
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
f=new X.au(!1,!1,!1)
e=m.d
m.d=f
l=[X.au]
g=new D.B("modifiers",e,f,m,l)
g.b=!0
m.J(g)
g=m.f
if(g!==!1){m.f=!1
g=new D.B("invertX",g,!1,m,[P.a4])
g.b=!0
m.J(g)}g=m.r
if(g!==!1){m.r=!1
g=new D.B("invertY",g,!1,m,[P.a4])
g.b=!0
m.J(g)}m.aP(z)
h.h(0,m)
z=v.r
m=new U.iR()
g=U.cB()
g.scp(0,!0)
g.scg(6.283185307179586)
g.scj(0)
g.sa1(0,0)
g.sci(100)
g.sL(0)
g.sc2(0.2)
m.b=g
g=g.gn()
g.toString
d=H.b(m.gaw(),x)
C.a.h(g.a,d)
m.c=null
m.d=!1
m.e=2.5
m.f=2
m.r=4
m.y=!1
m.x=!1
m.z=0
m.Q=null
m.ch=0
m.cx=null
m.cy=null
f=new X.au(!0,!1,!1)
e=m.c
m.c=f
g=new D.B("modifiers",e,f,m,l)
g.b=!0
m.J(g)
m.aP(z)
h.h(0,m)
z=v.r
m=new U.iT()
m.c=0.01
m.d=0
m.e=0
f=new X.au(!1,!1,!1)
m.b=f
l=new D.B("modifiers",null,f,m,l)
l.b=!0
m.J(l)
m.aP(z)
h.h(0,m)
h.h(0,U.bL(V.cQ(0,0,6)))
c=X.cD(!0,!0,!1,null,2000,null,0)
if(c.b){c.b=!1
z=new D.B("clearColor",!0,!1,c,[P.a4])
z.b=!0
c.ae(z)}z=v.f.h5("../resources/maskonaive",".jpg")
b=new M.fF()
b.saQ(null)
b.saY(0,null)
b.saZ(null)
m=E.c4(null,!0,null,"",null,null)
u=F.cY()
l=u.a
g=new V.G(-1,-1,1)
g=g.u(0,Math.sqrt(g.A(g)))
a=l.ba(new V.bp(1,2,4,6),new V.aJ(1,0,0,1),new V.ac(-1,-1,0),new V.P(0,1),g,null)
l=u.a
g=new V.G(1,-1,1)
g=g.u(0,Math.sqrt(g.A(g)))
a0=l.ba(new V.bp(0,3,4,6),new V.aJ(0,0,1,1),new V.ac(1,-1,0),new V.P(1,1),g,null)
l=u.a
g=new V.G(1,1,1)
g=g.u(0,Math.sqrt(g.A(g)))
a1=l.ba(new V.bp(0,2,5,6),new V.aJ(0,1,0,1),new V.ac(1,1,0),new V.P(1,0),g,null)
l=u.a
g=new V.G(-1,1,1)
g=g.u(0,Math.sqrt(g.A(g)))
a2=l.ba(new V.bp(0,2,4,7),new V.aJ(1,1,0,1),new V.ac(-1,1,0),new V.P(0,0),g,null)
u.d.fG(H.c([a,a0,a1,a2],[F.aB]))
u.an()
m.scv(0,u)
b.d=m
b.e=null
m=new O.ib()
m.b=1.0471975511965976
e=m.c
m.c=z
z=z.gn()
z.toString
l=H.b(m.gaA(),x)
C.a.h(z.a,l)
z=new D.B("boxTexture",e,m.c,m,[T.d1])
z.b=!0
m.P(z)
j=new V.T(1,1,1)
if(!J.O(m.d,j)){e=m.d
m.d=j
z=new D.B("boxColor",e,j,m,[V.T])
z.b=!0
m.P(z)}m.e=null
b.saZ(m)
a3=new M.fS()
z=O.c1(E.aA)
a3.d=z
z.aL(a3.geD(),a3.geE())
a3.e=null
a3.f=null
a3.r=null
a3.x=null
a3.saQ(null)
a3.saY(0,null)
a3.saZ(null)
a3.saZ(i)
a3.d.h(0,s)
z=M.aY
m=H.c([b,a3],[z])
l=new M.ii()
g=U.bL(null)
l.a=g
d=U.bL(null)
l.b=d
a4=U.a0
a5=[a4]
g=U.cF(H.c([null,g],a5))
l.c=g
a5=U.cF(H.c([null,d],a5))
l.d=a5
l.e=X.cT(2000,1.0471975511965976,g,0.1,null)
l.f=X.cT(2000,1.0471975511965976,a5,0.1,null)
l.r=V.ce(0,0,0.5,1)
l.x=V.ce(0.5,0,0.5,1)
z=O.c1(z)
l.z=z
z.aL(l.gez(),l.geV())
l.z.aO(0,m)
l.Q=0.1
l.ch=12
l.cx=null
l.cy=null
z=l.c.a
if(0>=z.length)return H.i(z,0)
if(!J.O(z[0],h)){z=l.c
g=z.a
if(0>=g.length)return H.i(g,0)
e=g[0]
z.S(0,0,h)
l.d.S(0,0,h)
a4=new D.B("cameraMover",e,h,l,[a4])
a4.b=!0
l.T(a4)}z=l.y
if(z!==c){if(z!=null){z=z.gn()
z.toString
g=H.b(l.gM(),x)
C.a.R(z.a,g)}e=l.y
l.y=c
z=c.gn()
z.toString
g=H.b(l.gM(),x)
C.a.h(z.a,g)
z=new D.B("target",e,l.y,l,[X.cg])
z.b=!0
l.T(z)}l.z.aO(0,m)
l.Q=0.1
l.ch=12
a6=Math.atan2(0.1,12)
z=l.a
m=l.Q
if(typeof m!=="number")return m.H()
z.sI(0,V.cQ(-m,0,0).l(0,V.cP(a6)))
l.b.sI(0,V.cQ(l.Q,0,0).l(0,V.cP(-a6)))
z=v.d
if(z!==l){if(z!=null){z=z.gn()
z.toString
m=H.b(v.gcD(),x)
C.a.R(z.a,m)}v.d=l
z=l.gn()
z.toString
x=H.b(v.gcD(),x)
C.a.h(z.a,x)
v.e3()}V.l1(v)}},1]]
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
J.kK=function(a){if(typeof a=="number")return J.c9.prototype
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
return J.kK(a).a7(a,b)}
J.fo=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kT(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bX(a).j(a,b)}
J.fp=function(a,b,c,d){return J.cp(a).d_(a,b,c,d)}
J.ct=function(a,b,c){return J.bX(a).fM(a,b,c)}
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
C.x=J.o.prototype
C.a=J.aU.prototype
C.y=J.dP.prototype
C.f=J.dQ.prototype
C.z=J.dR.prototype
C.i=J.c9.prototype
C.h=J.cI.prototype
C.G=J.bP.prototype
C.I=H.hA.prototype
C.J=W.hB.prototype
C.p=J.hF.prototype
C.K=P.cW.prototype
C.m=J.d6.prototype
C.r=W.bA.prototype
C.t=W.j5.prototype
C.u=new P.hD()
C.v=new P.iV()
C.j=new P.jS()
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
C.H=H.c(I.dl([0,0,65498,45055,65535,34815,65534,18431]),[P.C])
C.q=new P.iU(!1)
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
$.m=V.ht()
$.id="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.ic="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
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
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"et","$get$et",function(){return H.aw(H.eu(null))},"es","$get$es",function(){return H.aw(function(){try{null.$method$}catch(z){return z.message}}())},"ey","$get$ey",function(){return H.aw(H.eu(void 0))},"ex","$get$ex",function(){return H.aw(function(){try{(void 0).$method$}catch(z){return z.message}}())},"d8","$get$d8",function(){return P.j6()},"bG","$get$bG",function(){return[]},"f1","$get$f1",function(){return P.hT("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dB","$get$dB",function(){return{}},"eJ","$get$eJ",function(){return Z.al(0)},"eH","$get$eH",function(){return Z.al(511)},"ar","$get$ar",function(){return Z.al(1)},"aE","$get$aE",function(){return Z.al(2)},"aD","$get$aD",function(){return Z.al(4)},"aF","$get$aF",function(){return Z.al(8)},"aG","$get$aG",function(){return Z.al(16)},"by","$get$by",function(){return Z.al(32)},"bz","$get$bz",function(){return Z.al(64)},"eI","$get$eI",function(){return Z.al(96)},"b1","$get$b1",function(){return Z.al(128)},"aC","$get$aC",function(){return Z.al(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.l]},{func:1,ret:-1,args:[D.l]},{func:1,ret:P.I},{func:1,ret:-1},{func:1,ret:-1,args:[W.ap]},{func:1,ret:P.I,args:[F.ai]},{func:1,ret:-1,args:[P.n,,]},{func:1,ret:-1,args:[W.a6]},{func:1,ret:-1,args:[P.C,[P.d,E.aA]]},{func:1,ret:P.I,args:[D.l]},{func:1,ret:-1,args:[W.b_]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.I,args:[,,]},{func:1,ret:P.n,args:[P.C]},{func:1,ret:P.I,args:[,]},{func:1,args:[,]},{func:1,ret:-1,args:[W.bk]},{func:1,ret:-1,args:[P.C,[P.d,D.U]]},{func:1,ret:P.w},{func:1,ret:-1,args:[P.C,[P.d,U.a0]]},{func:1,ret:-1,args:[P.C,[P.d,M.aY]]},{func:1,ret:-1,args:[P.C,[P.d,V.ab]]},{func:1,ret:P.I,args:[W.a6]},{func:1,ret:P.I,args:[{func:1,ret:-1}]},{func:1,ret:P.a4,args:[W.K]},{func:1,ret:W.a_,args:[W.K]},{func:1,args:[,P.n]},{func:1,args:[P.n]},{func:1,ret:P.I,args:[P.W]},{func:1,ret:P.I,args:[{func:1,ret:-1,args:[D.l]}]},{func:1,ret:-1,args:[P.a],opt:[P.aq]},{func:1,ret:-1,args:[W.bA]},{func:1,ret:P.a4,args:[P.w,P.w]},{func:1,ret:P.a4,args:[[P.d,D.U]]},{func:1,ret:P.I,args:[,],opt:[,]},{func:1,ret:P.I,args:[F.aB,P.w,P.w]},{func:1,ret:[P.aH,,],args:[,]},{func:1,ret:P.I,args:[P.aZ]},{func:1,ret:-1,args:[P.n,P.n]}]
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
if(x==y)H.l4(d||a)
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
