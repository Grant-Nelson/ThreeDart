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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.cQ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cQ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.cQ(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.cR=function(){}
var dart=[["","",,H,{"^":"",lb:{"^":"a;a"}}],["","",,J,{"^":"",
J:function(a){return void 0},
cX:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cf:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cU==null){H.kt()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.f(P.ek("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$ct()]
if(v!=null)return v
v=H.ky(a)
if(v!=null)return v
if(typeof a=="function")return C.F
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$ct(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
o:{"^":"a;",
p:function(a,b){return a===b},
gP:function(a){return H.bk(a)},
i:["dz",function(a){return"Instance of '"+H.aW(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|CanvasRenderingContext2D|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|ImageData|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
fG:{"^":"o;",
i:function(a){return String(a)},
gP:function(a){return a?519018:218159},
$isa8:1},
ds:{"^":"o;",
p:function(a,b){return null==b},
i:function(a){return"null"},
gP:function(a){return 0},
$isF:1},
cu:{"^":"o;",
gP:function(a){return 0},
i:["dA",function(a){return String(a)}]},
hj:{"^":"cu;"},
c8:{"^":"cu;"},
bI:{"^":"cu;",
i:function(a){var z=a[$.$get$dg()]
if(z==null)return this.dA(a)
return"JavaScript function for "+H.j(J.ah(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscq:1},
aT:{"^":"o;$ti",
h:function(a,b){H.C(b,H.y(a,0))
if(!!a.fixed$length)H.r(P.am("add"))
a.push(b)},
O:function(a,b){var z
if(!!a.fixed$length)H.r(P.am("remove"))
for(z=0;z<a.length;++z)if(J.N(a[z],b)){a.splice(z,1)
return!0}return!1},
J:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.f(P.b9(a))}},
w:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.T(z,y,H.j(a[y]))
return z.join(b)},
fK:function(a){return this.w(a,"")},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
bk:function(a,b,c){var z=a.length
if(b>z)throw H.f(P.ac(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.f(P.ac(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.y(a,0)])
return H.b(a.slice(b,c),[H.y(a,0)])},
gbZ:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.f(H.fE())},
b4:function(a,b){var z
for(z=0;z<a.length;++z)if(J.N(a[z],b))return!0
return!1},
i:function(a){return P.cr(a,"[","]")},
gS:function(a){return new J.an(a,a.length,0,[H.y(a,0)])},
gP:function(a){return H.bk(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.r(P.am("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(P.bS(b,"newLength",null))
if(b<0)throw H.f(P.ac(b,0,null,"newLength",null))
a.length=b},
T:function(a,b,c){H.T(b)
H.C(c,H.y(a,0))
if(!!a.immutable$list)H.r(P.am("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(H.aM(a,b))
if(b>=a.length||b<0)throw H.f(H.aM(a,b))
a[b]=c},
$ish:1,
$isc:1,
n:{
fF:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.bS(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.ac(a,0,4294967295,"length",null))
return J.dq(new Array(a),b)},
dq:function(a,b){return J.be(H.b(a,[b]))},
be:function(a){H.bC(a)
a.fixed$length=Array
return a}}},
la:{"^":"aT;$ti"},
an:{"^":"a;a,b,c,0d,$ti",
gM:function(a){return this.d},
D:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.f(H.z(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bH:{"^":"o;",
gfJ:function(a){return a===0?1/a<0:a<0},
d8:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.f(P.am(""+a+".floor()"))},
a0:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.am(""+a+".round()"))},
dn:function(a,b){var z
if(b>20)throw H.f(P.ac(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gfJ(a))return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gP:function(a){return a&0x1FFFFFFF},
j:function(a,b){if(typeof b!=="number")throw H.f(H.aL(b))
return a*b},
du:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
dD:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cE(a,b)},
V:function(a,b){return(a|0)===a?a/b|0:this.cE(a,b)},
cE:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.f(P.am("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
b0:function(a,b){var z
if(a>0)z=this.eU(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
eU:function(a,b){return b>31?0:a>>>b},
a2:function(a,b){if(typeof b!=="number")throw H.f(H.aL(b))
return a<b},
$isv:1,
$isW:1},
dr:{"^":"bH;",$isA:1},
fH:{"^":"bH;"},
c1:{"^":"o;",
bP:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(H.aM(a,b))
if(b<0)throw H.f(H.aM(a,b))
if(b>=a.length)H.r(H.aM(a,b))
return a.charCodeAt(b)},
aX:function(a,b){if(b>=a.length)throw H.f(H.aM(a,b))
return a.charCodeAt(b)},
F:function(a,b){H.Q(b)
if(typeof b!=="string")throw H.f(P.bS(b,null,null))
return a+b},
bl:function(a,b,c){H.T(c)
if(c==null)c=a.length
if(b<0)throw H.f(P.c6(b,null,null))
if(b>c)throw H.f(P.c6(b,null,null))
if(c>a.length)throw H.f(P.c6(c,null,null))
return a.substring(b,c)},
cg:function(a,b){return this.bl(a,b,null)},
j:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.u)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
fW:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.j(c,z)+a},
ak:function(a,b){return this.fW(a,b," ")},
ft:function(a,b,c){if(c>a.length)throw H.f(P.ac(c,0,a.length,null,null))
return H.eY(a,b,c)},
i:function(a){return a},
gP:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$isdF:1,
$isl:1}}],["","",,H,{"^":"",
fE:function(){return new P.hS("No element")},
Z:{"^":"io;a",
gl:function(a){return this.a.length},
k:function(a,b){return C.i.bP(this.a,b)},
$asel:function(){return[P.A]},
$ast:function(){return[P.A]},
$ash:function(){return[P.A]},
$asc:function(){return[P.A]}},
fq:{"^":"h;"},
dy:{"^":"a;a,b,c,0d,$ti",
gM:function(a){return this.d},
D:function(){var z,y,x,w
z=this.a
y=J.bQ(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.f(P.b9(z))
w=this.c
if(typeof x!=="number")return H.n(x)
if(w>=x){this.d=null
return!1}this.d=y.C(z,w);++this.c
return!0}},
fY:{"^":"h;a,b,$ti",
gS:function(a){return new H.fZ(J.bD(this.a),this.b,this.$ti)},
gl:function(a){return J.b7(this.a)},
C:function(a,b){return this.b.$1(J.d_(this.a,b))},
$ash:function(a,b){return[b]}},
fZ:{"^":"cs;0a,b,c,$ti",
D:function(){var z=this.b
if(z.D()){this.a=this.c.$1(z.gM(z))
return!0}this.a=null
return!1},
gM:function(a){return this.a},
$ascs:function(a,b){return[b]}},
iI:{"^":"h;a,b,$ti",
gS:function(a){return new H.iJ(J.bD(this.a),this.b,this.$ti)}},
iJ:{"^":"cs;a,b,$ti",
D:function(){var z,y
for(z=this.a,y=this.b;z.D();)if(y.$1(z.gM(z)))return!0
return!1},
gM:function(a){var z=this.a
return z.gM(z)}},
bY:{"^":"a;$ti"},
el:{"^":"a;$ti"},
io:{"^":"c2+el;"}}],["","",,H,{"^":"",
ko:function(a){return init.types[H.T(a)]},
kw:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.J(a).$isB},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ah(a)
if(typeof z!=="string")throw H.f(H.aL(a))
return z},
bk:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aW:function(a){var z,y,x,w,v,u,t,s,r
z=J.J(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.x||!!J.J(a).$isc8){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.aX(w,0)===36)w=C.i.cg(w,1)
r=H.cV(H.bC(H.aN(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
dI:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
ht:function(a){var z,y,x,w
z=H.b([],[P.A])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.z)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.f(H.aL(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.f.b0(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.f(H.aL(w))}return H.dI(z)},
dJ:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.f(H.aL(x))
if(x<0)throw H.f(H.aL(x))
if(x>65535)return H.ht(a)}return H.dI(a)},
hs:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.b0(z,10))>>>0,56320|z&1023)}throw H.f(P.ac(a,0,1114111,null,null))},
a6:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hr:function(a){return a.b?H.a6(a).getUTCFullYear()+0:H.a6(a).getFullYear()+0},
hp:function(a){return a.b?H.a6(a).getUTCMonth()+1:H.a6(a).getMonth()+1},
hl:function(a){return a.b?H.a6(a).getUTCDate()+0:H.a6(a).getDate()+0},
hm:function(a){return a.b?H.a6(a).getUTCHours()+0:H.a6(a).getHours()+0},
ho:function(a){return a.b?H.a6(a).getUTCMinutes()+0:H.a6(a).getMinutes()+0},
hq:function(a){return a.b?H.a6(a).getUTCSeconds()+0:H.a6(a).getSeconds()+0},
hn:function(a){return a.b?H.a6(a).getUTCMilliseconds()+0:H.a6(a).getMilliseconds()+0},
n:function(a){throw H.f(H.aL(a))},
i:function(a,b){if(a==null)J.b7(a)
throw H.f(H.aM(a,b))},
aM:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aH(!0,b,"index",null)
z=H.T(J.b7(a))
if(!(b<0)){if(typeof z!=="number")return H.n(z)
y=b>=z}else y=!0
if(y)return P.K(b,a,"index",null,z)
return P.c6(b,"index",null)},
kj:function(a,b,c){if(a>c)return new P.c5(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c5(a,c,!0,b,"end","Invalid value")
return new P.aH(!0,b,"end",null)},
aL:function(a){return new P.aH(!0,a,null,null)},
f:function(a){var z
if(a==null)a=new P.dE()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.f_})
z.name=""}else z.toString=H.f_
return z},
f_:function(){return J.ah(this.dartException)},
r:function(a){throw H.f(a)},
z:function(a){throw H.f(P.b9(a))},
aP:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kL(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.b0(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cv(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dD(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$e3()
u=$.$get$e4()
t=$.$get$e5()
s=$.$get$e6()
r=$.$get$ea()
q=$.$get$eb()
p=$.$get$e8()
$.$get$e7()
o=$.$get$ed()
n=$.$get$ec()
m=v.a_(y)
if(m!=null)return z.$1(H.cv(H.Q(y),m))
else{m=u.a_(y)
if(m!=null){m.method="call"
return z.$1(H.cv(H.Q(y),m))}else{m=t.a_(y)
if(m==null){m=s.a_(y)
if(m==null){m=r.a_(y)
if(m==null){m=q.a_(y)
if(m==null){m=p.a_(y)
if(m==null){m=s.a_(y)
if(m==null){m=o.a_(y)
if(m==null){m=n.a_(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dD(H.Q(y),m))}}return z.$1(new H.im(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dQ()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aH(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dQ()
return a},
b5:function(a){var z
if(a==null)return new H.eB(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eB(a)},
kl:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.T(0,a[y],a[x])}return b},
kv:function(a,b,c,d,e,f){H.k(a,"$iscq")
switch(H.T(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.q("Unsupported number of arguments for wrapped closure"))},
b3:function(a,b){var z
H.T(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kv)
a.$identity=z
return z},
fe:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.J(d).$isc){z.$reflectionInfo=d
x=H.hw(z).r}else x=d
w=e?Object.create(new H.hT().constructor.prototype):Object.create(new H.ck(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.ao
if(typeof u!=="number")return u.F()
$.ao=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.da(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.ko,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.d3:H.cl
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.f("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.da(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fb:function(a,b,c,d){var z=H.cl
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
da:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fd(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fb(y,!w,z,b)
if(y===0){w=$.ao
if(typeof w!=="number")return w.F()
$.ao=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b8
if(v==null){v=H.bT("self")
$.b8=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ao
if(typeof w!=="number")return w.F()
$.ao=w+1
t+=w
w="return function("+t+"){return this."
v=$.b8
if(v==null){v=H.bT("self")
$.b8=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
fc:function(a,b,c,d){var z,y
z=H.cl
y=H.d3
switch(b?-1:a){case 0:throw H.f(H.hF("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fd:function(a,b){var z,y,x,w,v,u,t,s
z=$.b8
if(z==null){z=H.bT("self")
$.b8=z}y=$.d2
if(y==null){y=H.bT("receiver")
$.d2=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fc(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.ao
if(typeof y!=="number")return y.F()
$.ao=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.ao
if(typeof y!=="number")return y.F()
$.ao=y+1
return new Function(z+y+"}")()},
cQ:function(a,b,c,d,e,f,g){var z,y
z=J.be(H.bC(b))
H.T(c)
y=!!J.J(d).$isc?J.be(d):d
return H.fe(a,z,c,y,!!e,f,g)},
Q:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.at(a,"String"))},
kB:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.at(a,"num"))},
eO:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.at(a,"bool"))},
T:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.at(a,"int"))},
eW:function(a,b){throw H.f(H.at(a,H.Q(b).substring(3)))},
kD:function(a,b){var z=J.bQ(b)
throw H.f(H.fa(a,z.bl(b,3,z.gl(b))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.J(a)[b])return a
H.eW(a,b)},
e:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.J(a)[b]
else z=!0
if(z)return a
H.kD(a,b)},
bC:function(a){if(a==null)return a
if(!!J.J(a).$isc)return a
throw H.f(H.at(a,"List"))},
kx:function(a,b){if(a==null)return a
if(!!J.J(a).$isc)return a
if(J.J(a)[b])return a
H.eW(a,b)},
eP:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.T(z)]
else return a.$S()}return},
bP:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.eP(J.J(a))
if(z==null)return!1
y=H.eS(z,null,b,null)
return y},
d:function(a,b){var z,y
if(a==null)return a
if($.cM)return a
$.cM=!0
try{if(H.bP(a,b))return a
z=H.bR(b)
y=H.at(a,z)
throw H.f(y)}finally{$.cM=!1}},
cS:function(a,b){if(a!=null&&!H.cP(a,b))H.r(H.at(a,H.bR(b)))
return a},
eJ:function(a){var z
if(a instanceof H.u){z=H.eP(J.J(a))
if(z!=null)return H.bR(z)
return"Closure"}return H.aW(a)},
kI:function(a){throw H.f(new P.fj(H.Q(a)))},
eQ:function(a){return init.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
aN:function(a){if(a==null)return
return a.$ti},
lZ:function(a,b,c){return H.b6(a["$as"+H.j(c)],H.aN(b))},
bB:function(a,b,c,d){var z
H.Q(c)
H.T(d)
z=H.b6(a["$as"+H.j(c)],H.aN(b))
return z==null?null:z[d]},
aG:function(a,b,c){var z
H.Q(b)
H.T(c)
z=H.b6(a["$as"+H.j(b)],H.aN(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.T(b)
z=H.aN(a)
return z==null?null:z[b]},
bR:function(a){var z=H.aO(a,null)
return z},
aO:function(a,b){var z,y
H.x(b,"$isc",[P.l],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.cV(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.T(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.j(b[y])}if('func' in a)return H.k5(a,b)
if('futureOr' in a)return"FutureOr<"+H.aO("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
k5:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.l]
H.x(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.b([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.i(b,r)
t=C.i.F(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aO(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aO(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aO(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aO(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kk(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.Q(z[l])
n=n+m+H.aO(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
cV:function(a,b,c){var z,y,x,w,v,u
H.x(c,"$isc",[P.l],"$asc")
if(a==null)return""
z=new P.bN("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aO(u,c)}v="<"+z.i(0)+">"
return v},
b6:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bA:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aN(a)
y=J.J(a)
if(y[b]==null)return!1
return H.eM(H.b6(y[d],z),null,c,null)},
x:function(a,b,c,d){var z,y
H.Q(b)
H.bC(c)
H.Q(d)
if(a==null)return a
z=H.bA(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.cV(c,0,null)
throw H.f(H.at(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
eM:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ag(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ag(a[y],b,c[y],d))return!1
return!0},
lX:function(a,b,c){return a.apply(b,H.b6(J.J(b)["$as"+H.j(c)],H.aN(b)))},
eT:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="F"||a===-1||a===-2||H.eT(z)}return!1},
cP:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="F"||b===-1||b===-2||H.eT(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.cP(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bP(a,b)}y=J.J(a).constructor
x=H.aN(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ag(y,null,b,null)
return z},
C:function(a,b){if(a!=null&&!H.cP(a,b))throw H.f(H.at(a,H.bR(b)))
return a},
ag:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ag(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="F")return!0
if('func' in c)return H.eS(a,b,c,d)
if('func' in a)return c.builtin$cls==="cq"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ag("type" in a?a.type:null,b,x,d)
else if(H.ag(a,b,x,d))return!0
else{if(!('$is'+"bc" in y.prototype))return!1
w=y.prototype["$as"+"bc"]
v=H.b6(w,z?a.slice(1):null)
return H.ag(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bR(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eM(H.b6(r,z),b,u,d)},
eS:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ag(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ag(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ag(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ag(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kA(m,b,l,d)},
kA:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ag(c[w],d,a[w],b))return!1}return!0},
lY:function(a,b,c){Object.defineProperty(a,H.Q(b),{value:c,enumerable:false,writable:true,configurable:true})},
ky:function(a){var z,y,x,w,v,u
z=H.Q($.eR.$1(a))
y=$.cd[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cg[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.Q($.eL.$2(a,z))
if(z!=null){y=$.cd[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cg[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.ch(x)
$.cd[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cg[z]=x
return x}if(v==="-"){u=H.ch(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eV(a,x)
if(v==="*")throw H.f(P.ek(z))
if(init.leafTags[z]===true){u=H.ch(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eV(a,x)},
eV:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cX(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
ch:function(a){return J.cX(a,!1,null,!!a.$isB)},
kz:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.ch(z)
else return J.cX(z,c,null,null)},
kt:function(){if(!0===$.cU)return
$.cU=!0
H.ku()},
ku:function(){var z,y,x,w,v,u,t,s
$.cd=Object.create(null)
$.cg=Object.create(null)
H.kp()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eX.$1(v)
if(u!=null){t=H.kz(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kp:function(){var z,y,x,w,v,u,t
z=C.C()
z=H.b2(C.z,H.b2(C.E,H.b2(C.n,H.b2(C.n,H.b2(C.D,H.b2(C.A,H.b2(C.B(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eR=new H.kq(v)
$.eL=new H.kr(u)
$.eX=new H.ks(t)},
b2:function(a,b){return a(b)||b},
eY:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
eZ:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hv:{"^":"a;a,b,c,d,e,f,r,0x",n:{
hw:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.be(z)
y=z[0]
x=z[1]
return new H.hv(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
i8:{"^":"a;a,b,c,d,e,f",
a_:function(a){var z,y,x
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
as:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.b([],[P.l])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.i8(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c7:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
e9:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hg:{"^":"X;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
n:{
dD:function(a,b){return new H.hg(a,b==null?null:b.method)}}},
fK:{"^":"X;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
n:{
cv:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fK(a,y,z?null:b.receiver)}}},
im:{"^":"X;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kL:{"^":"u:15;a",
$1:function(a){if(!!J.J(a).$isX)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eB:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isal:1},
u:{"^":"a;",
i:function(a){return"Closure '"+H.aW(this).trim()+"'"},
gds:function(){return this},
$iscq:1,
gds:function(){return this}},
dV:{"^":"u;"},
hT:{"^":"dV;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
ck:{"^":"dV;a,b,c,d",
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.ck))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gP:function(a){var z,y
z=this.c
if(z==null)y=H.bk(this.a)
else y=typeof z!=="object"?J.aQ(z):H.bk(z)
return(y^H.bk(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.aW(z)+"'")},
n:{
cl:function(a){return a.a},
d3:function(a){return a.c},
bT:function(a){var z,y,x,w,v
z=new H.ck("self","target","receiver","name")
y=J.be(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
i9:{"^":"X;a",
i:function(a){return this.a},
n:{
at:function(a,b){return new H.i9("TypeError: "+H.j(P.bW(a))+": type '"+H.eJ(a)+"' is not a subtype of type '"+b+"'")}}},
f9:{"^":"X;a",
i:function(a){return this.a},
n:{
fa:function(a,b){return new H.f9("CastError: "+H.j(P.bW(a))+": type '"+H.eJ(a)+"' is not a subtype of type '"+b+"'")}}},
hE:{"^":"X;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
n:{
hF:function(a){return new H.hE(a)}}},
aU:{"^":"fW;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gaj:function(a){return new H.dx(this,[H.y(this,0)])},
cL:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cs(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cs(y,b)}else return this.fH(b)},
fH:function(a){var z=this.d
if(z==null)return!1
return this.bY(this.bu(z,J.aQ(a)&0x3ffffff),a)>=0},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.aY(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.aY(w,b)
x=y==null?null:y.b
return x}else return this.fI(b)},
fI:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bu(z,J.aQ(a)&0x3ffffff)
x=this.bY(y,a)
if(x<0)return
return y[x].b},
T:function(a,b,c){var z,y,x,w,v,u
H.C(b,H.y(this,0))
H.C(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bA()
this.b=z}this.cl(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bA()
this.c=y}this.cl(y,b,c)}else{x=this.d
if(x==null){x=this.bA()
this.d=x}w=J.aQ(b)&0x3ffffff
v=this.bu(x,w)
if(v==null)this.bF(x,w,[this.bB(b,c)])
else{u=this.bY(v,b)
if(u>=0)v[u].b=c
else v.push(this.bB(b,c))}}},
J:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.f(P.b9(this))
z=z.c}},
cl:function(a,b,c){var z
H.C(b,H.y(this,0))
H.C(c,H.y(this,1))
z=this.aY(a,b)
if(z==null)this.bF(a,b,this.bB(b,c))
else z.b=c},
e7:function(){this.r=this.r+1&67108863},
bB:function(a,b){var z,y
z=new H.fO(H.C(a,H.y(this,0)),H.C(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.e7()
return z},
bY:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.N(a[y].a,b))return y
return-1},
i:function(a){return P.dA(this)},
aY:function(a,b){return a[b]},
bu:function(a,b){return a[b]},
bF:function(a,b,c){a[b]=c},
e0:function(a,b){delete a[b]},
cs:function(a,b){return this.aY(a,b)!=null},
bA:function(){var z=Object.create(null)
this.bF(z,"<non-identifier-key>",z)
this.e0(z,"<non-identifier-key>")
return z},
$isdw:1},
fO:{"^":"a;a,b,0c,0d"},
dx:{"^":"fq;a,$ti",
gl:function(a){return this.a.a},
gS:function(a){var z,y
z=this.a
y=new H.fP(z,z.r,this.$ti)
y.c=z.e
return y}},
fP:{"^":"a;a,b,0c,0d,$ti",
gM:function(a){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.f(P.b9(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kq:{"^":"u:15;a",
$1:function(a){return this.a(a)}},
kr:{"^":"u:24;a",
$2:function(a,b){return this.a(a,b)}},
ks:{"^":"u:25;a",
$1:function(a){return this.a(H.Q(a))}},
fI:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isdF:1,
n:{
fJ:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.f(new P.fA("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
kk:function(a){return J.dq(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kC:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bw:function(a){return a},
aK:function(a,b,c){H.bC(b)
if(a>>>0!==a||a>=c)throw H.f(H.aM(b,a))},
k4:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.f(H.kj(a,b,c))
return b},
hc:{"^":"o;","%":"DataView;ArrayBufferView;cz|ev|ew|hb|ex|ey|aJ"},
cz:{"^":"hc;",
gl:function(a){return a.length},
$isB:1,
$asB:I.cR},
hb:{"^":"ew;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
$asbY:function(){return[P.v]},
$ast:function(){return[P.v]},
$ish:1,
$ash:function(){return[P.v]},
$isc:1,
$asc:function(){return[P.v]},
"%":"Float32Array|Float64Array"},
aJ:{"^":"ey;",
$asbY:function(){return[P.A]},
$ast:function(){return[P.A]},
$ish:1,
$ash:function(){return[P.A]},
$isc:1,
$asc:function(){return[P.A]}},
lj:{"^":"aJ;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lk:{"^":"aJ;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Int32Array"},
ll:{"^":"aJ;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lm:{"^":"aJ;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
ln:{"^":"aJ;",
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lo:{"^":"aJ;",
gl:function(a){return a.length},
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hd:{"^":"aJ;",
gl:function(a){return a.length},
k:function(a,b){H.aK(b,a,a.length)
return a[b]},
bk:function(a,b,c){return new Uint8Array(a.subarray(b,H.k4(b,c,a.length)))},
"%":";Uint8Array"},
ev:{"^":"cz+t;"},
ew:{"^":"ev+bY;"},
ex:{"^":"cz+t;"},
ey:{"^":"ex+bY;"}}],["","",,P,{"^":"",
iL:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kc()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b3(new P.iN(z),1)).observe(y,{childList:true})
return new P.iM(z,y,x)}else if(self.setImmediate!=null)return P.kd()
return P.ke()},
lM:[function(a){self.scheduleImmediate(H.b3(new P.iO(H.d(a,{func:1,ret:-1})),0))},"$1","kc",4,0,11],
lN:[function(a){self.setImmediate(H.b3(new P.iP(H.d(a,{func:1,ret:-1})),0))},"$1","kd",4,0,11],
lO:[function(a){P.cD(C.l,H.d(a,{func:1,ret:-1}))},"$1","ke",4,0,11],
cD:function(a,b){var z
H.d(b,{func:1,ret:-1})
z=C.f.V(a.a,1000)
return P.jK(z<0?0:z,b)},
dZ:function(a,b){var z
H.d(b,{func:1,ret:-1,args:[P.aX]})
z=C.f.V(a.a,1000)
return P.jL(z<0?0:z,b)},
k8:function(a,b){if(H.bP(a,{func:1,args:[P.a,P.al]}))return b.h4(a,null,P.a,P.al)
if(H.bP(a,{func:1,args:[P.a]}))return H.d(a,{func:1,ret:null,args:[P.a]})
throw H.f(P.bS(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
k7:function(){var z,y
for(;z=$.b1,z!=null;){$.by=null
y=z.b
$.b1=y
if(y==null)$.bx=null
z.a.$0()}},
lW:[function(){$.cN=!0
try{P.k7()}finally{$.by=null
$.cN=!1
if($.b1!=null)$.$get$cJ().$1(P.eN())}},"$0","eN",0,0,3],
eI:function(a){var z=new P.eq(H.d(a,{func:1,ret:-1}))
if($.b1==null){$.bx=z
$.b1=z
if(!$.cN)$.$get$cJ().$1(P.eN())}else{$.bx.b=z
$.bx=z}},
kb:function(a){var z,y,x
H.d(a,{func:1,ret:-1})
z=$.b1
if(z==null){P.eI(a)
$.by=$.bx
return}y=new P.eq(a)
x=$.by
if(x==null){y.b=z
$.by=y
$.b1=y}else{y.b=x.b
x.b=y
$.by=y
if(y.b==null)$.bx=y}},
kE:function(a){var z,y
z={func:1,ret:-1}
H.d(a,z)
y=$.M
if(C.j===y){P.cc(null,null,C.j,a)
return}y.toString
P.cc(null,null,y,H.d(y.bK(a),z))},
dY:function(a,b){var z,y
z={func:1,ret:-1}
H.d(b,z)
y=$.M
if(y===C.j){y.toString
return P.cD(a,b)}return P.cD(a,H.d(y.bK(b),z))},
i5:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aX]}
H.d(b,z)
y=$.M
if(y===C.j){y.toString
return P.dZ(a,b)}x=y.cI(b,P.aX)
$.M.toString
return P.dZ(a,H.d(x,z))},
cb:function(a,b,c,d,e){var z={}
z.a=d
P.kb(new P.k9(z,e))},
eG:function(a,b,c,d,e){var z,y
H.d(d,{func:1,ret:e})
y=$.M
if(y===c)return d.$0()
$.M=c
z=y
try{y=d.$0()
return y}finally{$.M=z}},
eH:function(a,b,c,d,e,f,g){var z,y
H.d(d,{func:1,ret:f,args:[g]})
H.C(e,g)
y=$.M
if(y===c)return d.$1(e)
$.M=c
z=y
try{y=d.$1(e)
return y}finally{$.M=z}},
ka:function(a,b,c,d,e,f,g,h,i){var z,y
H.d(d,{func:1,ret:g,args:[h,i]})
H.C(e,h)
H.C(f,i)
y=$.M
if(y===c)return d.$2(e,f)
$.M=c
z=y
try{y=d.$2(e,f)
return y}finally{$.M=z}},
cc:function(a,b,c,d){var z
H.d(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.bK(d):c.fo(d,-1)
P.eI(d)},
iN:{"^":"u:14;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iM:{"^":"u:21;a,b,c",
$1:function(a){var z,y
this.a.a=H.d(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iO:{"^":"u:2;a",
$0:function(){this.a.$0()}},
iP:{"^":"u:2;a",
$0:function(){this.a.$0()}},
eE:{"^":"a;a,0b,c",
dO:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b3(new P.jN(this,b),0),a)
else throw H.f(P.am("`setTimeout()` not found."))},
dP:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b3(new P.jM(this,a,Date.now(),b),0),a)
else throw H.f(P.am("Periodic timer."))},
$isaX:1,
n:{
jK:function(a,b){var z=new P.eE(!0,0)
z.dO(a,b)
return z},
jL:function(a,b){var z=new P.eE(!1,0)
z.dP(a,b)
return z}}},
jN:{"^":"u:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
jM:{"^":"u:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.dD(w,x)}z.c=y
this.d.$1(z)}},
b0:{"^":"a;0a,b,c,d,e,$ti",
fO:function(a){if(this.c!==6)return!0
return this.b.b.c6(H.d(this.d,{func:1,ret:P.a8,args:[P.a]}),a.a,P.a8,P.a)},
fG:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.bP(z,{func:1,args:[P.a,P.al]}))return H.cS(w.hb(z,a.a,a.b,null,y,P.al),x)
else return H.cS(w.c6(H.d(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aE:{"^":"a;cD:a<,b,0eM:c<,$ti",
dm:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.M
if(y!==C.j){y.toString
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.k8(b,y)}H.d(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aE(0,$.M,[c])
w=b==null?1:3
this.cm(new P.b0(x,w,a,b,[z,c]))
return x},
he:function(a,b){return this.dm(a,null,b)},
cm:function(a){var z,y
z=this.a
if(z<=1){a.a=H.k(this.c,"$isb0")
this.c=a}else{if(z===2){y=H.k(this.c,"$isaE")
z=y.a
if(z<4){y.cm(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cc(null,null,z,H.d(new P.j2(this,a),{func:1,ret:-1}))}},
cz:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.k(this.c,"$isb0")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.k(this.c,"$isaE")
y=u.a
if(y<4){u.cz(a)
return}this.a=y
this.c=u.c}z.a=this.b_(a)
y=this.b
y.toString
P.cc(null,null,y,H.d(new P.j7(z,this),{func:1,ret:-1}))}},
bD:function(){var z=H.k(this.c,"$isb0")
this.c=null
return this.b_(z)},
b_:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cp:function(a){var z,y,x,w
z=H.y(this,0)
H.cS(a,{futureOr:1,type:z})
y=this.$ti
x=H.bA(a,"$isbc",y,"$asbc")
if(x){z=H.bA(a,"$isaE",y,null)
if(z)P.es(a,this)
else P.j3(a,this)}else{w=this.bD()
H.C(a,z)
this.a=4
this.c=a
P.bv(this,w)}},
bq:[function(a,b){var z
H.k(b,"$isal")
z=this.bD()
this.a=8
this.c=new P.ab(a,b)
P.bv(this,z)},function(a){return this.bq(a,null)},"hl","$2","$1","gdX",4,2,28],
$isbc:1,
n:{
j3:function(a,b){var z,y,x
b.a=1
try{a.dm(new P.j4(b),new P.j5(b),null)}catch(x){z=H.aP(x)
y=H.b5(x)
P.kE(new P.j6(b,z,y))}},
es:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.k(a.c,"$isaE")
if(z>=4){y=b.bD()
b.a=a.a
b.c=a.c
P.bv(b,y)}else{y=H.k(b.c,"$isb0")
b.a=2
b.c=a
a.cz(y)}},
bv:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.k(y.c,"$isab")
y=y.b
u=v.a
t=v.b
y.toString
P.cb(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bv(z.a,b)}y=z.a
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
if(p){H.k(r,"$isab")
y=y.b
u=r.a
t=r.b
y.toString
P.cb(null,null,y,u,t)
return}o=$.M
if(o==null?q!=null:o!==q)$.M=q
else o=null
y=b.c
if(y===8)new P.ja(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.j9(x,b,r).$0()}else if((y&2)!==0)new P.j8(z,x,b).$0()
if(o!=null)$.M=o
y=x.b
if(!!J.J(y).$isbc){if(y.a>=4){n=H.k(t.c,"$isb0")
t.c=null
b=t.b_(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.es(y,t)
return}}m=b.b
n=H.k(m.c,"$isb0")
m.c=null
b=m.b_(n)
y=x.a
u=x.b
if(!y){H.C(u,H.y(m,0))
m.a=4
m.c=u}else{H.k(u,"$isab")
m.a=8
m.c=u}z.a=m
y=m}}}},
j2:{"^":"u:2;a,b",
$0:function(){P.bv(this.a,this.b)}},
j7:{"^":"u:2;a,b",
$0:function(){P.bv(this.b,this.a.a)}},
j4:{"^":"u:14;a",
$1:function(a){var z=this.a
z.a=0
z.cp(a)}},
j5:{"^":"u:32;a",
$2:function(a,b){this.a.bq(a,H.k(b,"$isal"))},
$1:function(a){return this.$2(a,null)}},
j6:{"^":"u:2;a,b,c",
$0:function(){this.a.bq(this.b,this.c)}},
ja:{"^":"u:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dk(H.d(w.d,{func:1}),null)}catch(v){y=H.aP(v)
x=H.b5(v)
if(this.d){w=H.k(this.a.a.c,"$isab").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.k(this.a.a.c,"$isab")
else u.b=new P.ab(y,x)
u.a=!0
return}if(!!J.J(z).$isbc){if(z instanceof P.aE&&z.gcD()>=4){if(z.gcD()===8){w=this.b
w.b=H.k(z.geM(),"$isab")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.he(new P.jb(t),null)
w.a=!1}}},
jb:{"^":"u:35;a",
$1:function(a){return this.a}},
j9:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.C(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.c6(H.d(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aP(t)
y=H.b5(t)
x=this.a
x.b=new P.ab(z,y)
x.a=!0}}},
j8:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.k(this.a.a.c,"$isab")
w=this.c
if(w.fO(z)&&w.e!=null){v=this.b
v.b=w.fG(z)
v.a=!1}}catch(u){y=H.aP(u)
x=H.b5(u)
w=H.k(this.a.a.c,"$isab")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ab(y,x)
s.a=!0}}},
eq:{"^":"a;a,0b"},
cA:{"^":"a;$ti",
gl:function(a){var z,y
z={}
y=new P.aE(0,$.M,[P.A])
z.a=0
this.fN(new P.hW(z,this),!0,new P.hX(z,y),y.gdX())
return y}},
hW:{"^":"u;a,b",
$1:function(a){H.C(a,H.aG(this.b,"cA",0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.aG(this.b,"cA",0)]}}},
hX:{"^":"u:2;a,b",
$0:function(){this.b.cp(this.a.a)}},
dS:{"^":"a;$ti"},
hV:{"^":"a;"},
aX:{"^":"a;"},
ab:{"^":"a;a,b",
i:function(a){return H.j(this.a)},
$isX:1},
jU:{"^":"a;",$islL:1},
k9:{"^":"u:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dE()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.f(z)
x=H.f(z)
x.stack=y.i(0)
throw x}},
jw:{"^":"jU;",
hc:function(a){var z,y,x
H.d(a,{func:1,ret:-1})
try{if(C.j===$.M){a.$0()
return}P.eG(null,null,this,a,-1)}catch(x){z=H.aP(x)
y=H.b5(x)
P.cb(null,null,this,z,H.k(y,"$isal"))}},
hd:function(a,b,c){var z,y,x
H.d(a,{func:1,ret:-1,args:[c]})
H.C(b,c)
try{if(C.j===$.M){a.$1(b)
return}P.eH(null,null,this,a,b,-1,c)}catch(x){z=H.aP(x)
y=H.b5(x)
P.cb(null,null,this,z,H.k(y,"$isal"))}},
fo:function(a,b){return new P.jy(this,H.d(a,{func:1,ret:b}),b)},
bK:function(a){return new P.jx(this,H.d(a,{func:1,ret:-1}))},
cI:function(a,b){return new P.jz(this,H.d(a,{func:1,ret:-1,args:[b]}),b)},
dk:function(a,b){H.d(a,{func:1,ret:b})
if($.M===C.j)return a.$0()
return P.eG(null,null,this,a,b)},
c6:function(a,b,c,d){H.d(a,{func:1,ret:c,args:[d]})
H.C(b,d)
if($.M===C.j)return a.$1(b)
return P.eH(null,null,this,a,b,c,d)},
hb:function(a,b,c,d,e,f){H.d(a,{func:1,ret:d,args:[e,f]})
H.C(b,e)
H.C(c,f)
if($.M===C.j)return a.$2(b,c)
return P.ka(null,null,this,a,b,c,d,e,f)},
h4:function(a,b,c,d){return H.d(a,{func:1,ret:b,args:[c,d]})}},
jy:{"^":"u;a,b,c",
$0:function(){return this.a.dk(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jx:{"^":"u:3;a,b",
$0:function(){return this.a.hc(this.b)}},
jz:{"^":"u;a,b,c",
$1:function(a){var z=this.c
return this.a.hd(this.b,H.C(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
fR:function(a,b,c){H.bC(a)
return H.x(H.kl(a,new H.aU(0,0,[b,c])),"$isdw",[b,c],"$asdw")},
fQ:function(a,b){return new H.aU(0,0,[a,b])},
fS:function(a,b,c,d){return new P.ji(0,0,[d])},
fD:function(a,b,c){var z,y
if(P.cO(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bz()
C.a.h(y,a)
try{P.k6(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.dT(b,H.kx(z,"$ish"),", ")+c
return y.charCodeAt(0)==0?y:y},
cr:function(a,b,c){var z,y,x
if(P.cO(a))return b+"..."+c
z=new P.bN(b)
y=$.$get$bz()
C.a.h(y,a)
try{x=z
x.a=P.dT(x.gaq(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gaq()+c
y=z.gaq()
return y.charCodeAt(0)==0?y:y},
cO:function(a){var z,y
for(z=0;y=$.$get$bz(),z<y.length;++z)if(a===y[z])return!0
return!1},
k6:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gS(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.D())return
w=H.j(z.gM(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.D()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gM(z);++x
if(!z.D()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gM(z);++x
for(;z.D();t=s,s=r){r=z.gM(z);++x
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
dA:function(a){var z,y,x
z={}
if(P.cO(a))return"{...}"
y=new P.bN("")
try{C.a.h($.$get$bz(),a)
x=y
x.a=x.gaq()+"{"
z.a=!0
J.f3(a,new P.fX(z,y))
z=y
z.a=z.gaq()+"}"}finally{z=$.$get$bz()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.gaq()
return z.charCodeAt(0)==0?z:z},
ji:{"^":"jc;a,0b,0c,0d,0e,0f,r,$ti",
gS:function(a){return P.eu(this,this.r,H.y(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.C(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cL()
this.b=z}return this.cn(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cL()
this.c=y}return this.cn(y,b)}else return this.dQ(0,b)},
dQ:function(a,b){var z,y,x
H.C(b,H.y(this,0))
z=this.d
if(z==null){z=P.cL()
this.d=z}y=this.cq(b)
x=z[y]
if(x==null)z[y]=[this.bp(b)]
else{if(this.cv(x,b)>=0)return!1
x.push(this.bp(b))}return!0},
O:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cA(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cA(this.c,b)
else return this.eF(0,b)},
eF:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.e4(z,b)
x=this.cv(y,b)
if(x<0)return!1
this.cF(y.splice(x,1)[0])
return!0},
cn:function(a,b){H.C(b,H.y(this,0))
if(H.k(a[b],"$iscK")!=null)return!1
a[b]=this.bp(b)
return!0},
cA:function(a,b){var z
if(a==null)return!1
z=H.k(a[b],"$iscK")
if(z==null)return!1
this.cF(z)
delete a[b]
return!0},
co:function(){this.r=this.r+1&67108863},
bp:function(a){var z,y
z=new P.cK(H.C(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.co()
return z},
cF:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.co()},
cq:function(a){return J.aQ(a)&0x3ffffff},
e4:function(a,b){return a[this.cq(b)]},
cv:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.N(a[y].a,b))return y
return-1},
n:{
cL:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cK:{"^":"a;a,0b,0c"},
jj:{"^":"a;a,b,0c,0d,$ti",
gM:function(a){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.f(P.b9(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.C(z.a,H.y(this,0))
this.c=z.b
return!0}}},
n:{
eu:function(a,b,c){var z=new P.jj(a,b,[c])
z.c=a.e
return z}}},
jc:{"^":"hG;"},
c2:{"^":"jk;",$ish:1,$isc:1},
t:{"^":"a;$ti",
gS:function(a){return new H.dy(a,this.gl(a),0,[H.bB(this,a,"t",0)])},
C:function(a,b){return this.k(a,b)},
hg:function(a,b){var z,y,x
z=H.b([],[H.bB(this,a,"t",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.n(x)
if(!(y<x))break
C.a.T(z,y,this.k(a,y));++y}return z},
hf:function(a){return this.hg(a,!0)},
i:function(a){return P.cr(a,"[","]")}},
fW:{"^":"aa;"},
fX:{"^":"u:12;a,b",
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
H.d(b,{func:1,ret:-1,args:[H.bB(this,a,"aa",0),H.bB(this,a,"aa",1)]})
for(z=J.bD(this.gaj(a));z.D();){y=z.gM(z)
b.$2(y,this.k(a,y))}},
gl:function(a){return J.b7(this.gaj(a))},
i:function(a){return P.dA(a)},
$isa1:1},
hI:{"^":"a;$ti",
i:function(a){return P.cr(this,"{","}")},
C:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(P.d0("index"))
if(b<0)H.r(P.ac(b,0,null,"index",null))
for(z=P.eu(this,this.r,H.y(this,0)),y=0;z.D();){x=z.d
if(b===y)return x;++y}throw H.f(P.K(b,this,"index",null,y))},
$ish:1},
hG:{"^":"hI;"},
jk:{"^":"a+t;"}}],["","",,P,{"^":"",cn:{"^":"a;$ti"},dd:{"^":"hV;$ti"},fs:{"^":"cn;",
$ascn:function(){return[P.l,[P.c,P.A]]}},iu:{"^":"fs;a"},iv:{"^":"dd;",
fv:function(a,b,c){var z,y,x,w
z=a.length
P.dK(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.jT(0,0,x)
if(w.e2(a,b,z)!==z)w.cG(C.i.bP(a,z-1),0)
return C.H.bk(x,0,w.b)},
fu:function(a){return this.fv(a,0,null)},
$asdd:function(){return[P.l,[P.c,P.A]]}},jT:{"^":"a;a,b,c",
cG:function(a,b){var z,y,x,w,v
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
e2:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.i.bP(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.aX(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.cG(w,C.i.aX(a,u)))x=u}else if(w<=2047){v=this.b
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
fu:function(a){var z=J.J(a)
if(!!z.$isu)return z.i(a)
return"Instance of '"+H.aW(a)+"'"},
fT:function(a,b,c,d){var z,y
H.C(b,d)
z=J.fF(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.T(z,y,b)
return H.x(z,"$isc",[d],"$asc")},
fU:function(a,b,c){var z,y,x
z=[c]
y=H.b([],z)
for(x=a.gS(a);x.D();)C.a.h(y,H.C(x.gM(x),c))
if(b)return y
return H.x(J.be(y),"$isc",z,"$asc")},
cB:function(a,b,c){var z,y
z=P.A
H.x(a,"$ish",[z],"$ash")
if(a.constructor===Array){H.x(a,"$isaT",[z],"$asaT")
y=a.length
c=P.dK(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a2()
z=c<y}else z=!0
return H.dJ(z?C.a.bk(a,b,c):a)}return P.hY(a,b,c)},
hY:function(a,b,c){var z,y,x
H.x(a,"$ish",[P.A],"$ash")
z=J.bD(a)
for(y=0;y<b;++y)if(!z.D())throw H.f(P.ac(b,0,y,null,null))
x=[]
for(;z.D();)x.push(z.gM(z))
return H.dJ(x)},
hx:function(a,b,c){return new H.fI(a,H.fJ(a,!1,!0,!1))},
jS:function(a,b,c,d){var z,y,x,w,v,u
H.x(a,"$isc",[P.A],"$asc")
if(c===C.q){z=$.$get$eF().b
z=z.test(b)}else z=!1
if(z)return b
y=C.v.fu(H.C(b,H.aG(c,"cn",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.i(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.hs(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
bW:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ah(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fu(a)},
q:function(a){return new P.er(a)},
cY:function(a){H.kC(a)},
a8:{"^":"a;"},
"+bool":0,
ai:{"^":"a;a,b",
p:function(a,b){if(b==null)return!1
if(!(b instanceof P.ai))return!1
return this.a===b.a&&this.b===b.b},
gP:function(a){var z=this.a
return(z^C.f.b0(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fk(H.hr(this))
y=P.bF(H.hp(this))
x=P.bF(H.hl(this))
w=P.bF(H.hm(this))
v=P.bF(H.ho(this))
u=P.bF(H.hq(this))
t=P.fl(H.hn(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
n:{
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
v:{"^":"W;"},
"+double":0,
aR:{"^":"a;a",
j:function(a,b){return new P.aR(C.f.a0(this.a*b))},
a2:function(a,b){return C.f.a2(this.a,H.k(b,"$isaR").a)},
p:function(a,b){if(b==null)return!1
if(!(b instanceof P.aR))return!1
return this.a===b.a},
gP:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fp()
y=this.a
if(y<0)return"-"+new P.aR(0-y).i(0)
x=z.$1(C.f.V(y,6e7)%60)
w=z.$1(C.f.V(y,1e6)%60)
v=new P.fo().$1(y%1e6)
return""+C.f.V(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
n:{
dm:function(a,b,c,d,e,f){return new P.aR(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fo:{"^":"u:13;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fp:{"^":"u:13;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
X:{"^":"a;"},
dE:{"^":"X;",
i:function(a){return"Throw of null."}},
aH:{"^":"X;a,b,c,d",
gbs:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbr:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gbs()+y+x
if(!this.a)return w
v=this.gbr()
u=P.bW(this.b)
return w+v+": "+H.j(u)},
n:{
bS:function(a,b,c){return new P.aH(!0,a,b,c)},
d0:function(a){return new P.aH(!1,null,a,"Must not be null")}}},
c5:{"^":"aH;e,f,a,b,c,d",
gbs:function(){return"RangeError"},
gbr:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
n:{
c6:function(a,b,c){return new P.c5(null,null,!0,a,b,"Value not in range")},
ac:function(a,b,c,d,e){return new P.c5(b,c,!0,a,d,"Invalid value")},
dK:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.n(a)
if(0<=a){if(typeof c!=="number")return H.n(c)
z=a>c}else z=!0
if(z)throw H.f(P.ac(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.n(c)
z=b>c}else z=!0
if(z)throw H.f(P.ac(b,a,c,"end",f))
return b}return c}}},
fC:{"^":"aH;e,l:f>,a,b,c,d",
gbs:function(){return"RangeError"},
gbr:function(){if(J.f0(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
n:{
K:function(a,b,c,d,e){var z=H.T(e!=null?e:J.b7(b))
return new P.fC(b,z,!0,a,c,"Index out of range")}}},
ip:{"^":"X;a",
i:function(a){return"Unsupported operation: "+this.a},
n:{
am:function(a){return new P.ip(a)}}},
il:{"^":"X;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
n:{
ek:function(a){return new P.il(a)}}},
hS:{"^":"X;a",
i:function(a){return"Bad state: "+this.a}},
fg:{"^":"X;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.bW(z))+"."},
n:{
b9:function(a){return new P.fg(a)}}},
hh:{"^":"a;",
i:function(a){return"Out of Memory"},
$isX:1},
dQ:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isX:1},
fj:{"^":"X;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
er:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
fA:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.i.bl(x,0,75)+"..."
return y+"\n"+x}},
A:{"^":"W;"},
"+int":0,
h:{"^":"a;$ti",
gl:function(a){var z,y
z=this.gS(this)
for(y=0;z.D();)++y
return y},
C:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(P.d0("index"))
if(b<0)H.r(P.ac(b,0,null,"index",null))
for(z=this.gS(this),y=0;z.D();){x=z.gM(z)
if(b===y)return x;++y}throw H.f(P.K(b,this,"index",null,y))},
i:function(a){return P.fD(this,"(",")")}},
cs:{"^":"a;$ti"},
c:{"^":"a;$ti",$ish:1},
"+List":0,
a1:{"^":"a;$ti"},
F:{"^":"a;",
gP:function(a){return P.a.prototype.gP.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
W:{"^":"a;"},
"+num":0,
a:{"^":";",
p:function(a,b){return this===b},
gP:function(a){return H.bk(this)},
i:function(a){return"Instance of '"+H.aW(this)+"'"},
toString:function(){return this.i(this)}},
al:{"^":"a;"},
l:{"^":"a;",$isdF:1},
"+String":0,
bN:{"^":"a;aq:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
n:{
dT:function(a,b,c){var z=J.bD(b)
if(!z.D())return a
if(c.length===0){do a+=H.j(z.gM(z))
while(z.D())}else{a+=H.j(z.gM(z))
for(;z.D();)a=a+c+H.j(z.gM(z))}return a}}}}],["","",,W,{"^":"",
d8:function(a,b){var z=document.createElement("canvas")
return z},
fr:function(a){H.k(a,"$isa3")
return"wheel"},
c9:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
et:function(a,b,c,d){var z,y
z=W.c9(W.c9(W.c9(W.c9(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eK:function(a,b){var z
H.d(a,{func:1,ret:-1,args:[b]})
z=$.M
if(z===C.j)return a
return z.cI(a,b)},
bG:{"^":"a_;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
kN:{"^":"o;0l:length=","%":"AccessibleNodeList"},
kO:{"^":"bG;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kP:{"^":"bG;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
f8:{"^":"o;","%":";Blob"},
cm:{"^":"bG;",
cc:function(a,b,c){var z=a.getContext(b,P.kf(c,null))
return z},
$iscm:1,
"%":"HTMLCanvasElement"},
kV:{"^":"I;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kX:{"^":"fi;0l:length=","%":"CSSPerspective"},
ba:{"^":"o;",$isba:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
kY:{"^":"iT;0l:length=",
dt:function(a,b){var z=a.getPropertyValue(this.dU(a,b))
return z==null?"":z},
dU:function(a,b){var z,y
z=$.$get$de()
y=z[b]
if(typeof y==="string")return y
y=this.eV(a,b)
z[b]=y
return y},
eV:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fm()+b
if(z in a)return z
return b},
gbL:function(a){return a.bottom},
gaa:function(a){return a.height},
gaB:function(a){return a.left},
gaQ:function(a){return a.right},
gaT:function(a){return a.top},
gac:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fh:{"^":"a;",
gaB:function(a){return this.dt(a,"left")}},
df:{"^":"o;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
fi:{"^":"o;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
kZ:{"^":"df;0l:length=","%":"CSSTransformValue"},
l_:{"^":"df;0l:length=","%":"CSSUnparsedValue"},
l0:{"^":"o;0l:length=","%":"DataTransferItemList"},
l1:{"^":"o;",
i:function(a){return String(a)},
"%":"DOMException"},
l2:{"^":"iV;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[[P.a7,P.W]]},
$ast:function(){return[[P.a7,P.W]]},
$ish:1,
$ash:function(){return[[P.a7,P.W]]},
$isc:1,
$asc:function(){return[[P.a7,P.W]]},
$asw:function(){return[[P.a7,P.W]]},
"%":"ClientRectList|DOMRectList"},
fn:{"^":"o;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gac(a))+" x "+H.j(this.gaa(a))},
p:function(a,b){var z
if(b==null)return!1
z=H.bA(b,"$isa7",[P.W],"$asa7")
if(!z)return!1
z=J.ce(b)
return a.left===z.gaB(b)&&a.top===z.gaT(b)&&this.gac(a)===z.gac(b)&&this.gaa(a)===z.gaa(b)},
gP:function(a){return W.et(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gac(a)&0x1FFFFFFF,this.gaa(a)&0x1FFFFFFF)},
gbL:function(a){return a.bottom},
gaa:function(a){return a.height},
gaB:function(a){return a.left},
gaQ:function(a){return a.right},
gaT:function(a){return a.top},
gac:function(a){return a.width},
$isa7:1,
$asa7:function(){return[P.W]},
"%":";DOMRectReadOnly"},
l3:{"^":"iX;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[P.l]},
$ast:function(){return[P.l]},
$ish:1,
$ash:function(){return[P.l]},
$isc:1,
$asc:function(){return[P.l]},
$asw:function(){return[P.l]},
"%":"DOMStringList"},
l4:{"^":"o;0l:length=","%":"DOMTokenList"},
iS:{"^":"c2;a,b",
gl:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return H.k(z[b],"$isa_")},
h:function(a,b){this.a.appendChild(b)
return b},
gS:function(a){var z=this.hf(this)
return new J.an(z,z.length,0,[H.y(z,0)])},
$ast:function(){return[W.a_]},
$ash:function(){return[W.a_]},
$asc:function(){return[W.a_]}},
a_:{"^":"I;",
gcJ:function(a){return new W.iS(a,a.children)},
gcK:function(a){return P.hu(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.W)},
i:function(a){return a.localName},
$isa_:1,
"%":";Element"},
a9:{"^":"o;",$isa9:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a3:{"^":"o;",
cH:["dw",function(a,b,c,d){H.d(c,{func:1,args:[W.a9]})
if(c!=null)this.dR(a,b,c,!1)}],
dR:function(a,b,c,d){return a.addEventListener(b,H.b3(H.d(c,{func:1,args:[W.a9]}),1),!1)},
$isa3:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;ez|eA|eC|eD"},
bb:{"^":"f8;",$isbb:1,"%":"File"},
l5:{"^":"j1;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bb]},
$ast:function(){return[W.bb]},
$ish:1,
$ash:function(){return[W.bb]},
$isc:1,
$asc:function(){return[W.bb]},
$asw:function(){return[W.bb]},
"%":"FileList"},
l6:{"^":"a3;0l:length=","%":"FileWriter"},
l7:{"^":"bG;0l:length=","%":"HTMLFormElement"},
bd:{"^":"o;",$isbd:1,"%":"Gamepad"},
l8:{"^":"o;0l:length=","%":"History"},
l9:{"^":"je;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.I]},
$ast:function(){return[W.I]},
$ish:1,
$ash:function(){return[W.I]},
$isc:1,
$asc:function(){return[W.I]},
$asw:function(){return[W.I]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
bf:{"^":"cE;",$isbf:1,"%":"KeyboardEvent"},
ld:{"^":"o;",
i:function(a){return String(a)},
"%":"Location"},
le:{"^":"o;0l:length=","%":"MediaList"},
lf:{"^":"a3;",
cH:function(a,b,c,d){H.d(c,{func:1,args:[W.a9]})
if(b==="message")a.start()
this.dw(a,b,c,!1)},
"%":"MessagePort"},
lg:{"^":"jl;",
k:function(a,b){return P.aF(a.get(H.Q(b)))},
J:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.l,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aF(y.value[1]))}},
gaj:function(a){var z=H.b([],[P.l])
this.J(a,new W.h8(z))
return z},
gl:function(a){return a.size},
$asaa:function(){return[P.l,null]},
$isa1:1,
$asa1:function(){return[P.l,null]},
"%":"MIDIInputMap"},
h8:{"^":"u:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lh:{"^":"jm;",
k:function(a,b){return P.aF(a.get(H.Q(b)))},
J:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.l,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aF(y.value[1]))}},
gaj:function(a){var z=H.b([],[P.l])
this.J(a,new W.h9(z))
return z},
gl:function(a){return a.size},
$asaa:function(){return[P.l,null]},
$isa1:1,
$asa1:function(){return[P.l,null]},
"%":"MIDIOutputMap"},
h9:{"^":"u:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bg:{"^":"o;",$isbg:1,"%":"MimeType"},
li:{"^":"jo;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bg]},
$ast:function(){return[W.bg]},
$ish:1,
$ash:function(){return[W.bg]},
$isc:1,
$asc:function(){return[W.bg]},
$asw:function(){return[W.bg]},
"%":"MimeTypeArray"},
ak:{"^":"cE;",$isak:1,"%":"PointerEvent;DragEvent|MouseEvent"},
iR:{"^":"c2;a",
gS:function(a){var z=this.a.childNodes
return new W.dn(z,z.length,-1,[H.bB(C.I,z,"w",0)])},
gl:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
$ast:function(){return[W.I]},
$ash:function(){return[W.I]},
$asc:function(){return[W.I]}},
I:{"^":"a3;",
i:function(a){var z=a.nodeValue
return z==null?this.dz(a):z},
$isI:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
he:{"^":"jq;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.I]},
$ast:function(){return[W.I]},
$ish:1,
$ash:function(){return[W.I]},
$isc:1,
$asc:function(){return[W.I]},
$asw:function(){return[W.I]},
"%":"NodeList|RadioNodeList"},
bj:{"^":"o;0l:length=",$isbj:1,"%":"Plugin"},
lr:{"^":"ju;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bj]},
$ast:function(){return[W.bj]},
$ish:1,
$ash:function(){return[W.bj]},
$isc:1,
$asc:function(){return[W.bj]},
$asw:function(){return[W.bj]},
"%":"PluginArray"},
lt:{"^":"jA;",
k:function(a,b){return P.aF(a.get(H.Q(b)))},
J:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.l,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aF(y.value[1]))}},
gaj:function(a){var z=H.b([],[P.l])
this.J(a,new W.hD(z))
return z},
gl:function(a){return a.size},
$asaa:function(){return[P.l,null]},
$isa1:1,
$asa1:function(){return[P.l,null]},
"%":"RTCStatsReport"},
hD:{"^":"u:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lv:{"^":"bG;0l:length=","%":"HTMLSelectElement"},
bl:{"^":"a3;",$isbl:1,"%":"SourceBuffer"},
lw:{"^":"eA;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bl]},
$ast:function(){return[W.bl]},
$ish:1,
$ash:function(){return[W.bl]},
$isc:1,
$asc:function(){return[W.bl]},
$asw:function(){return[W.bl]},
"%":"SourceBufferList"},
bm:{"^":"o;",$isbm:1,"%":"SpeechGrammar"},
lx:{"^":"jC;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bm]},
$ast:function(){return[W.bm]},
$ish:1,
$ash:function(){return[W.bm]},
$isc:1,
$asc:function(){return[W.bm]},
$asw:function(){return[W.bm]},
"%":"SpeechGrammarList"},
bn:{"^":"o;0l:length=",$isbn:1,"%":"SpeechRecognitionResult"},
lz:{"^":"jF;",
k:function(a,b){return a.getItem(H.Q(b))},
J:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.l,P.l]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gaj:function(a){var z=H.b([],[P.l])
this.J(a,new W.hU(z))
return z},
gl:function(a){return a.length},
$asaa:function(){return[P.l,P.l]},
$isa1:1,
$asa1:function(){return[P.l,P.l]},
"%":"Storage"},
hU:{"^":"u:38;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bo:{"^":"o;",$isbo:1,"%":"CSSStyleSheet|StyleSheet"},
bp:{"^":"a3;",$isbp:1,"%":"TextTrack"},
bq:{"^":"a3;",$isbq:1,"%":"TextTrackCue|VTTCue"},
lD:{"^":"jJ;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bq]},
$ast:function(){return[W.bq]},
$ish:1,
$ash:function(){return[W.bq]},
$isc:1,
$asc:function(){return[W.bq]},
$asw:function(){return[W.bq]},
"%":"TextTrackCueList"},
lE:{"^":"eD;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bp]},
$ast:function(){return[W.bp]},
$ish:1,
$ash:function(){return[W.bp]},
$isc:1,
$asc:function(){return[W.bp]},
$asw:function(){return[W.bp]},
"%":"TextTrackList"},
lF:{"^":"o;0l:length=","%":"TimeRanges"},
br:{"^":"o;",$isbr:1,"%":"Touch"},
aY:{"^":"cE;",$isaY:1,"%":"TouchEvent"},
lG:{"^":"jP;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.br]},
$ast:function(){return[W.br]},
$ish:1,
$ash:function(){return[W.br]},
$isc:1,
$asc:function(){return[W.br]},
$asw:function(){return[W.br]},
"%":"TouchList"},
lH:{"^":"o;0l:length=","%":"TrackDefaultList"},
cE:{"^":"a9;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
lJ:{"^":"o;",
i:function(a){return String(a)},
"%":"URL"},
lK:{"^":"a3;0l:length=","%":"VideoTrackList"},
bu:{"^":"ak;",
gfA:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.am("deltaY is not supported"))},
gfz:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.am("deltaX is not supported"))},
$isbu:1,
"%":"WheelEvent"},
iK:{"^":"a3;",
eJ:function(a,b){return a.requestAnimationFrame(H.b3(H.d(b,{func:1,ret:-1,args:[P.W]}),1))},
e1:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
lP:{"^":"jW;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.ba]},
$ast:function(){return[W.ba]},
$ish:1,
$ash:function(){return[W.ba]},
$isc:1,
$asc:function(){return[W.ba]},
$asw:function(){return[W.ba]},
"%":"CSSRuleList"},
lQ:{"^":"fn;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
p:function(a,b){var z
if(b==null)return!1
z=H.bA(b,"$isa7",[P.W],"$asa7")
if(!z)return!1
z=J.ce(b)
return a.left===z.gaB(b)&&a.top===z.gaT(b)&&a.width===z.gac(b)&&a.height===z.gaa(b)},
gP:function(a){return W.et(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gaa:function(a){return a.height},
gac:function(a){return a.width},
"%":"ClientRect|DOMRect"},
lS:{"^":"jY;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bd]},
$ast:function(){return[W.bd]},
$ish:1,
$ash:function(){return[W.bd]},
$isc:1,
$asc:function(){return[W.bd]},
$asw:function(){return[W.bd]},
"%":"GamepadList"},
lT:{"^":"k_;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.I]},
$ast:function(){return[W.I]},
$ish:1,
$ash:function(){return[W.I]},
$isc:1,
$asc:function(){return[W.I]},
$asw:function(){return[W.I]},
"%":"MozNamedAttrMap|NamedNodeMap"},
lU:{"^":"k1;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bn]},
$ast:function(){return[W.bn]},
$ish:1,
$ash:function(){return[W.bn]},
$isc:1,
$asc:function(){return[W.bn]},
$asw:function(){return[W.bn]},
"%":"SpeechRecognitionResultList"},
lV:{"^":"k3;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bo]},
$ast:function(){return[W.bo]},
$ish:1,
$ash:function(){return[W.bo]},
$isc:1,
$asc:function(){return[W.bo]},
$asw:function(){return[W.bo]},
"%":"StyleSheetList"},
iY:{"^":"cA;a,b,c,$ti",
fN:function(a,b,c,d){var z=H.y(this,0)
H.d(a,{func:1,ret:-1,args:[z]})
H.d(c,{func:1,ret:-1})
return W.Y(this.a,this.b,a,!1,z)}},
lR:{"^":"iY;a,b,c,$ti"},
iZ:{"^":"dS;a,b,c,d,e,$ti",
eZ:function(){var z=this.d
if(z!=null&&this.a<=0)J.f2(this.b,this.c,z,!1)},
n:{
Y:function(a,b,c,d,e){var z=c==null?null:W.eK(new W.j_(c),W.a9)
z=new W.iZ(0,a,b,z,!1,[e])
z.eZ()
return z}}},
j_:{"^":"u:7;a",
$1:function(a){return this.a.$1(H.k(a,"$isa9"))}},
w:{"^":"a;$ti",
gS:function(a){return new W.dn(a,this.gl(a),-1,[H.bB(this,a,"w",0)])}},
dn:{"^":"a;a,b,c,0d,$ti",
D:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.f1(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gM:function(a){return this.d}},
iT:{"^":"o+fh;"},
iU:{"^":"o+t;"},
iV:{"^":"iU+w;"},
iW:{"^":"o+t;"},
iX:{"^":"iW+w;"},
j0:{"^":"o+t;"},
j1:{"^":"j0+w;"},
jd:{"^":"o+t;"},
je:{"^":"jd+w;"},
jl:{"^":"o+aa;"},
jm:{"^":"o+aa;"},
jn:{"^":"o+t;"},
jo:{"^":"jn+w;"},
jp:{"^":"o+t;"},
jq:{"^":"jp+w;"},
jt:{"^":"o+t;"},
ju:{"^":"jt+w;"},
jA:{"^":"o+aa;"},
ez:{"^":"a3+t;"},
eA:{"^":"ez+w;"},
jB:{"^":"o+t;"},
jC:{"^":"jB+w;"},
jF:{"^":"o+aa;"},
jI:{"^":"o+t;"},
jJ:{"^":"jI+w;"},
eC:{"^":"a3+t;"},
eD:{"^":"eC+w;"},
jO:{"^":"o+t;"},
jP:{"^":"jO+w;"},
jV:{"^":"o+t;"},
jW:{"^":"jV+w;"},
jX:{"^":"o+t;"},
jY:{"^":"jX+w;"},
jZ:{"^":"o+t;"},
k_:{"^":"jZ+w;"},
k0:{"^":"o+t;"},
k1:{"^":"k0+w;"},
k2:{"^":"o+t;"},
k3:{"^":"k2+w;"}}],["","",,P,{"^":"",
aF:function(a){var z,y,x,w,v
if(a==null)return
z=P.fQ(P.l,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w){v=H.Q(y[w])
z.T(0,v,a[v])}return z},
kf:function(a,b){var z={}
a.J(0,new P.kg(z))
return z},
dl:function(){var z=$.dk
if(z==null){z=J.ci(window.navigator.userAgent,"Opera",0)
$.dk=z}return z},
fm:function(){var z,y
z=$.dh
if(z!=null)return z
y=$.di
if(y==null){y=J.ci(window.navigator.userAgent,"Firefox",0)
$.di=y}if(y)z="-moz-"
else{y=$.dj
if(y==null){y=!P.dl()&&J.ci(window.navigator.userAgent,"Trident/",0)
$.dj=y}if(y)z="-ms-"
else z=P.dl()?"-o-":"-webkit-"}$.dh=z
return z},
kg:{"^":"u:12;a",
$2:function(a,b){this.a[a]=b}},
fx:{"^":"c2;a,b",
gbv:function(){var z,y,x
z=this.b
y=H.aG(z,"t",0)
x=W.a_
return new H.fY(new H.iI(z,H.d(new P.fy(),{func:1,ret:P.a8,args:[y]}),[y]),H.d(new P.fz(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.b7(this.gbv().a)},
k:function(a,b){var z=this.gbv()
return z.b.$1(J.d_(z.a,b))},
gS:function(a){var z=P.fU(this.gbv(),!1,W.a_)
return new J.an(z,z.length,0,[H.y(z,0)])},
$ast:function(){return[W.a_]},
$ash:function(){return[W.a_]},
$asc:function(){return[W.a_]}},
fy:{"^":"u:22;",
$1:function(a){return!!J.J(H.k(a,"$isI")).$isa_}},
fz:{"^":"u:23;",
$1:function(a){return H.e(H.k(a,"$isI"),"$isa_")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
ca:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jf:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jv:{"^":"a;$ti",
gaQ:function(a){var z=this.a
if(typeof z!=="number")return z.F()
return H.C(z+this.c,H.y(this,0))},
gbL:function(a){var z=this.b
if(typeof z!=="number")return z.F()
return H.C(z+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
p:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bA(b,"$isa7",[P.W],"$asa7")
if(!z)return!1
z=this.a
y=J.ce(b)
x=y.gaB(b)
if(z==null?x==null:z===x){x=this.b
w=y.gaT(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.F()
w=H.y(this,0)
if(H.C(z+this.c,w)===y.gaQ(b)){if(typeof x!=="number")return x.F()
z=H.C(x+this.d,w)===y.gbL(b)}else z=!1}else z=!1}else z=!1
return z},
gP:function(a){var z,y,x,w,v
z=this.a
y=J.aQ(z)
x=this.b
w=J.aQ(x)
if(typeof z!=="number")return z.F()
v=H.y(this,0)
z=H.C(z+this.c,v)
if(typeof x!=="number")return x.F()
v=H.C(x+this.d,v)
return P.jf(P.ca(P.ca(P.ca(P.ca(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a7:{"^":"jv;aB:a>,aT:b>,ac:c>,aa:d>,$ti",n:{
hu:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.a2()
if(c<0)z=-c*0
else z=c
H.C(z,e)
if(typeof d!=="number")return d.a2()
if(d<0)y=-d*0
else y=d
return new P.a7(a,b,z,H.C(y,e),[e])}}}}],["","",,P,{"^":"",bJ:{"^":"o;",$isbJ:1,"%":"SVGLength"},lc:{"^":"jh;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.k(a,b)},
$ast:function(){return[P.bJ]},
$ish:1,
$ash:function(){return[P.bJ]},
$isc:1,
$asc:function(){return[P.bJ]},
$asw:function(){return[P.bJ]},
"%":"SVGLengthList"},bM:{"^":"o;",$isbM:1,"%":"SVGNumber"},lp:{"^":"js;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.k(a,b)},
$ast:function(){return[P.bM]},
$ish:1,
$ash:function(){return[P.bM]},
$isc:1,
$asc:function(){return[P.bM]},
$asw:function(){return[P.bM]},
"%":"SVGNumberList"},ls:{"^":"o;0l:length=","%":"SVGPointList"},lA:{"^":"jH;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.k(a,b)},
$ast:function(){return[P.l]},
$ish:1,
$ash:function(){return[P.l]},
$isc:1,
$asc:function(){return[P.l]},
$asw:function(){return[P.l]},
"%":"SVGStringList"},lB:{"^":"a_;",
gcJ:function(a){return new P.fx(a,new W.iR(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"},bO:{"^":"o;",$isbO:1,"%":"SVGTransform"},lI:{"^":"jR;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.k(a,b)},
$ast:function(){return[P.bO]},
$ish:1,
$ash:function(){return[P.bO]},
$isc:1,
$asc:function(){return[P.bO]},
$asw:function(){return[P.bO]},
"%":"SVGTransformList"},jg:{"^":"o+t;"},jh:{"^":"jg+w;"},jr:{"^":"o+t;"},js:{"^":"jr+w;"},jG:{"^":"o+t;"},jH:{"^":"jG+w;"},jQ:{"^":"o+t;"},jR:{"^":"jQ+w;"}}],["","",,P,{"^":"",kQ:{"^":"o;0l:length=","%":"AudioBuffer"},kR:{"^":"iQ;",
k:function(a,b){return P.aF(a.get(H.Q(b)))},
J:function(a,b){var z,y
H.d(b,{func:1,ret:-1,args:[P.l,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aF(y.value[1]))}},
gaj:function(a){var z=H.b([],[P.l])
this.J(a,new P.f6(z))
return z},
gl:function(a){return a.size},
$asaa:function(){return[P.l,null]},
$isa1:1,
$asa1:function(){return[P.l,null]},
"%":"AudioParamMap"},f6:{"^":"u:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},kS:{"^":"a3;0l:length=","%":"AudioTrackList"},f7:{"^":"a3;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lq:{"^":"f7;0l:length=","%":"OfflineAudioContext"},iQ:{"^":"o+aa;"}}],["","",,P,{"^":"",dN:{"^":"o;",$isdN:1,"%":"WebGLRenderingContext"},ij:{"^":"o;",$isij:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",ly:{"^":"jE;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.K(b,a,null,null,null))
return P.aF(a.item(b))},
C:function(a,b){return this.k(a,b)},
$ast:function(){return[[P.a1,,,]]},
$ish:1,
$ash:function(){return[[P.a1,,,]]},
$isc:1,
$asc:function(){return[[P.a1,,,]]},
$asw:function(){return[[P.a1,,,]]},
"%":"SQLResultSetRowList"},jD:{"^":"o+t;"},jE:{"^":"jD+w;"}}],["","",,O,{"^":"",au:{"^":"a;0a,0b,0c,0d,$ti",
bn:function(a){this.a=H.b([],[a])
this.b=null
this.c=null
this.d=null},
cd:function(a,b,c){var z=H.aG(this,"au",0)
H.d(b,{func:1,ret:P.a8,args:[[P.h,z]]})
z={func:1,ret:-1,args:[P.A,[P.h,z]]}
H.d(a,z)
H.d(c,z)
this.b=b
this.c=a
this.d=c},
aW:function(a,b){return this.cd(a,null,b)},
ey:function(a){var z
H.x(a,"$ish",[H.aG(this,"au",0)],"$ash")
z=this.b
if(z!=null)return z.$1(a)
return!0},
dJ:function(a,b){var z
H.x(b,"$ish",[H.aG(this,"au",0)],"$ash")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gS:function(a){var z=this.a
return new J.an(z,z.length,0,[H.y(z,0)])},
C:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aG(this,"au",0)
H.C(b,z)
z=[z]
if(this.ey(H.b([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dJ(x,H.b([b],z))}},
$ish:1,
n:{
co:function(a){var z=new O.au([a])
z.bn(a)
return z}}},cx:{"^":"a;0a,0b",
gl:function(a){return this.a.length},
gt:function(){var z=this.b
if(z==null){z=D.G()
this.b=z}return z},
dK:function(a){var z=this.b
if(!(z==null))z.A(a)},
am:function(){return this.dK(null)},
gR:function(a){var z=this.a
if(z.length>0)return C.a.gbZ(z)
else return V.bL()},
di:function(a){var z=this.a
if(a==null)C.a.h(z,V.bL())
else C.a.h(z,a)
this.am()},
c3:function(){var z=this.a
if(z.length>0){z.pop()
this.am()}}}}],["","",,E,{"^":"",cj:{"^":"a;"},aI:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0U:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sce:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gt()
y.toString
x=H.d(this.gdg(),{func:1,ret:-1,args:[D.p]})
C.a.O(y.a,x)}y=this.c
if(y!=null){y=y.gt()
y.toString
x=H.d(this.gdg(),{func:1,ret:-1,args:[D.p]})
C.a.h(y.a,x)}w=new D.L("shape",z,this.c,this,[F.dP])
w.b=!0
this.aC(w)}},
ab:function(a,b){var z
for(z=this.y.a,z=new J.an(z,z.length,0,[H.y(z,0)]);z.D();)z.d.ab(0,b)},
aD:function(a){var z,y
z=a.dx
C.a.h(z.a,z.gR(z))
z.am()
a.dj(this.f)
z=a.dy
y=(z&&C.a).gbZ(z)
if(y!=null&&this.d!=null)y.h7(a,this)
for(z=this.y.a,z=new J.an(z,z.length,0,[H.y(z,0)]);z.D();)z.d.aD(a)
a.dh()
a.dx.c3()},
gt:function(){var z=this.z
if(z==null){z=D.G()
this.z=z}return z},
aC:function(a){var z=this.z
if(!(z==null))z.A(a)},
Y:function(){return this.aC(null)},
fV:[function(a){H.k(a,"$isp")
this.e=null
this.aC(a)},function(){return this.fV(null)},"hZ","$1","$0","gdg",0,2,0],
fT:[function(a){this.aC(H.k(a,"$isp"))},function(){return this.fT(null)},"hX","$1","$0","gdf",0,2,0],
hW:[function(a,b){var z,y,x,w,v,u,t
H.x(b,"$ish",[E.aI],"$ash")
for(z=b.length,y=this.gdf(),x={func:1,ret:-1,args:[D.p]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.gU()==null){t=new D.aS()
t.a=H.b([],w)
t.c=0
u.sU(t)}t=u.gU()
t.toString
H.d(y,x)
C.a.h(t.a,y)}}this.Y()},"$2","gfS",8,0,8],
hY:[function(a,b){var z,y,x,w,v,u,t
H.x(b,"$ish",[E.aI],"$ash")
for(z=b.length,y=this.gdf(),x={func:1,ret:-1,args:[D.p]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.gU()==null){t=new D.aS()
t.a=H.b([],w)
t.c=0
u.sU(t)}t=u.gU()
t.toString
H.d(y,x)
C.a.O(t.a,y)}}this.Y()},"$2","gfU",8,0,8],
$isav:1},hy:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
dF:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.ai(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cx()
y=[V.ap]
z.a=H.b([],y)
x=z.gt()
x.toString
w={func:1,ret:-1,args:[D.p]}
v=H.d(new E.hA(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cx()
z.a=H.b([],y)
v=z.gt()
v.toString
x=H.d(new E.hB(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cx()
z.a=H.b([],y)
y=z.gt()
y.toString
w=H.d(new E.hC(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.b([],[O.cC])
this.dy=z
C.a.h(z,null)
this.fr=new H.aU(0,0,[P.l,A.dO])},
gh3:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gR(z)
y=this.db
y=z.j(0,y.gR(y))
this.z=y
z=y}return z},
dj:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gbZ(z):a;(z&&C.a).h(z,y)},
dh:function(){var z=this.dy
if(z.length>1)z.pop()},
n:{
hz:function(a,b){var z=new E.hy(a,b)
z.dF(a,b)
return z}}},hA:{"^":"u:9;a",
$1:function(a){var z
H.k(a,"$isp")
z=this.a
z.z=null
z.ch=null}},hB:{"^":"u:9;a",
$1:function(a){var z
H.k(a,"$isp")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hC:{"^":"u:9;a",
$1:function(a){var z
H.k(a,"$isp")
z=this.a
z.ch=null
z.cx=null}},i2:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0U:x@,0y,0z,0Q,0ch",
gt:function(){var z=this.x
if(z==null){z=D.G()
this.x=z}return z},
dM:[function(a){var z
H.k(a,"$isp")
z=this.x
if(!(z==null))z.A(a)
this.h9()},function(){return this.dM(null)},"dL","$1","$0","gcj",0,2,0],
gfF:function(){var z,y,x
z=Date.now()
y=C.f.V(P.dm(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.ai(z,!1)
return x/y},
cB:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.j()
if(typeof z!=="number")return H.n(z)
x=C.e.d8(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.j()
w=C.e.d8(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.dY(C.l,this.gh8())},
h9:[function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.d(new E.i4(this),{func:1,ret:-1,args:[P.W]})
C.t.e1(z)
C.t.eJ(z,W.eK(y,P.W))}},"$0","gh8",0,0,3],
h6:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cB()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ai(w,!1)
x.y=P.dm(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.am()
w=x.db
C.a.sl(w.a,0)
w.am()
w=x.dx
C.a.sl(w.a,0)
w.am()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aD(this.e)}}catch(v){z=H.aP(v)
y=H.b5(v)
P.cY("Error: "+H.j(z))
P.cY("Stack: "+H.j(y))
throw H.f(z)}},
n:{
i3:function(a,b,c,d,e){var z,y,x,w
z=J.J(a)
if(!!z.$iscm)return E.dX(a,!0,!0,!0,!1)
y=W.d8(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcJ(a).h(0,y)
w=E.dX(y,!0,!0,!0,!1)
w.a=a
return w},
dX:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.i2()
y=P.fR(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.l,null)
x=C.k.cc(a,"webgl",y)
x=H.k(x==null?C.k.cc(a,"experimental-webgl",y):x,"$isdN")
if(x==null)H.r(P.q("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hz(x,a)
w=new T.hZ(x)
w.b=H.T(x.getParameter(3379))
w.c=H.T(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.iq(a)
v=new X.fL()
v.c=new X.ar(!1,!1,!1)
v.d=P.fS(null,null,null,P.A)
w.b=v
v=new X.ha(w)
v.f=0
v.r=new V.R(0,0)
v.x=new V.R(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.fV(w)
v.r=0
v.x=new V.R(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.i7(w)
v.e=0
v.f=new V.R(0,0)
v.r=new V.R(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.b([],[[P.dS,P.a]])
w.z=v
u=document
t=W.ak
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.Y(u,"contextmenu",H.d(w.gek(),s),!1,t))
v=w.z
r=W.a9
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.Y(a,"focus",H.d(w.gen(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.Y(a,"blur",H.d(w.geg(),q),!1,r))
v=w.z
p=W.bf
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.Y(u,"keyup",H.d(w.gep(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.Y(u,"keydown",H.d(w.geo(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.Y(a,"mousedown",H.d(w.ges(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Y(a,"mouseup",H.d(w.gev(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Y(a,"mousemove",H.d(w.geu(),s),!1,t))
p=w.z
o=W.bu;(p&&C.a).h(p,W.Y(a,H.Q(W.fr(a)),H.d(w.gew(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.Y(u,"mousemove",H.d(w.gel(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.Y(u,"mouseup",H.d(w.gem(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.Y(u,"pointerlockchange",H.d(w.gex(),q),!1,r))
r=w.z
q=W.aY
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.Y(a,"touchstart",H.d(w.geE(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Y(a,"touchend",H.d(w.geC(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Y(a,"touchmove",H.d(w.geD(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.ai(Date.now(),!1)
z.ch=0
z.cB()
return z}}},i4:{"^":"u:26;a",
$1:function(a){var z
H.kB(a)
z=this.a
if(z.z){z.z=!1
z.h6()}}}}],["","",,Z,{"^":"",ep:{"^":"a;a,b",n:{
cI:function(a,b,c){var z
H.x(c,"$isc",[P.A],"$asc")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bw(c)),35044)
a.bindBuffer(b,null)
return new Z.ep(b,z)}}},d4:{"^":"cj;a,b,c,d,e",
b2:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aP(y)
x=P.q('Failed to bind buffer attribute "'+J.ah(this.a)+'": '+H.j(z))
throw H.f(x)}},
i:function(a){return"["+J.ah(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},iH:{"^":"a;a",$iskT:1},d5:{"^":"a;a,0b,c,d",
aA:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
b2:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].b2(a)},
dq:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
aD:function(a){var z,y,x,w,v
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
z=[P.l]
y=H.b([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v)C.a.h(y,x[v].i(0))
u=H.b([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ah(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.w(y,", ")+"\nAttrs:   "+C.a.w(u,", ")},
$islC:1},bZ:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aW(this.c)+"'")+"]"}},aZ:{"^":"a;a",
gcf:function(a){var z,y
z=this.a
y=(z&$.$get$aB().a)!==0?3:0
if((z&$.$get$aA().a)!==0)y+=3
if((z&$.$get$az().a)!==0)y+=3
if((z&$.$get$aC().a)!==0)y+=2
if((z&$.$get$aD().a)!==0)y+=3
if((z&$.$get$bs().a)!==0)y+=3
if((z&$.$get$bt().a)!==0)y+=4
if((z&$.$get$b_().a)!==0)++y
return(z&$.$get$ay().a)!==0?y+4:y},
fn:function(a){var z,y,x
z=$.$get$aB()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aA()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$az()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aC()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aD()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bs()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bt()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b_()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ay()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eo()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aZ))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.b([],[P.l])
y=this.a
if((y&$.$get$aB().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aA().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$az().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aC().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aD().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bs().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bt().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b_().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$ay().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.w(z,"|")},
n:{
af:function(a){return new Z.aZ(a)}}}}],["","",,D,{"^":"",d9:{"^":"a;"},aS:{"^":"a;0a,0b,0c",
A:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.p(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.J(y,new D.fv(z))
return x!==0},
ha:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.A(y)}}},
al:function(a){return this.ha(a,!0,!1)},
n:{
G:function(){var z=new D.aS()
z.a=H.b([],[{func:1,ret:-1,args:[D.p]}])
z.c=0
return z}}},fv:{"^":"u:27;a",
$1:function(a){var z
H.d(a,{func:1,ret:-1,args:[D.p]})
z=this.a.a
z.b
a.$1(z)}},p:{"^":"a;a,0b"},c_:{"^":"p;c,d,a,0b,$ti"},c0:{"^":"p;c,d,a,0b,$ti"},L:{"^":"p;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",d6:{"^":"a;a,b",
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d6))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)},
n:{"^":"kU<"}},dt:{"^":"a;a,b",
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dt))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},du:{"^":"p;c,a,0b"},fL:{"^":"a;0a,0b,0c,0d",
h0:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.du(a,this)
y.b=!0
return z.A(y)},
fX:function(a){var z,y
this.c=a.b
this.d.O(0,a.a)
z=this.b
if(z==null)return!1
y=new X.du(a,this)
y.b=!0
return z.A(y)}},dz:{"^":"c4;x,y,c,d,e,a,0b"},fV:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
af:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ai(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.j()
v=b.b
u=this.ch
if(typeof v!=="number")return v.j()
t=new V.R(y.a+x*w,y.b+v*u)
u=this.a.gau()
s=new X.bh(a,new V.R(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
c2:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.A(this.af(a,b))
return!0},
aO:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dv()
if(typeof z!=="number")return z.dr()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.A(this.af(a,b))
return!0},
aN:function(a,b){var z=this.d
if(z==null)return!1
z.A(this.af(a,b))
return!0},
h1:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gau()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.j()
t=a.b
s=this.cy
if(typeof t!=="number")return t.j()
w=new X.cy(new V.O(v*u,t*s),y,x,new P.ai(w,!1),this)
w.b=!0
z.A(w)
return!0},
er:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ai(Date.now(),!1)
y=this.f
x=new X.dz(c,a,this.a.gau(),b,z,this)
x.b=!0
y.A(x)
this.y=z
this.x=new V.R(0,0)}},ar:{"^":"a;a,b,c",
p:function(a,b){var z,y
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
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},bh:{"^":"c4;x,y,z,Q,ch,c,d,e,a,0b"},ha:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bt:function(a,b,c){var z,y,x
z=new P.ai(Date.now(),!1)
y=this.a.gau()
x=new X.bh(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
c2:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.A(this.bt(a,b,!0))
return!0},
aO:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dv()
if(typeof z!=="number")return z.dr()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.A(this.bt(a,b,!0))
return!0},
aN:function(a,b){var z=this.d
if(z==null)return!1
z.A(this.bt(a,b,!1))
return!0},
h2:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gau()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.j()
u=a.b
t=this.ch
if(typeof u!=="number")return u.j()
x=new X.cy(new V.O(w*v,u*t),y,b,new P.ai(x,!1),this)
x.b=!0
z.A(x)
return!0},
gcO:function(){var z=this.b
if(z==null){z=D.G()
this.b=z}return z},
gbj:function(){var z=this.c
if(z==null){z=D.G()
this.c=z}return z},
gdd:function(){var z=this.d
if(z==null){z=D.G()
this.d=z}return z}},cy:{"^":"c4;x,c,d,e,a,0b"},c4:{"^":"p;"},e1:{"^":"c4;x,y,z,Q,ch,c,d,e,a,0b"},i7:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
af:function(a,b){var z,y,x,w
H.x(a,"$isc",[V.R],"$asc")
z=new P.ai(Date.now(),!1)
y=a.length>0?a[0]:new V.R(0,0)
x=this.a.gau()
w=new X.e1(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
h_:function(a){var z
H.x(a,"$isc",[V.R],"$asc")
z=this.b
if(z==null)return!1
z.A(this.af(a,!0))
return!0},
fY:function(a){var z
H.x(a,"$isc",[V.R],"$asc")
z=this.c
if(z==null)return!1
z.A(this.af(a,!0))
return!0},
fZ:function(a){var z
H.x(a,"$isc",[V.R],"$asc")
z=this.d
if(z==null)return!1
z.A(this.af(a,!1))
return!0}},iq:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gau:function(){var z=this.a
return V.dM(0,0,(z&&C.k).gcK(z).c,C.k.gcK(z).d)},
ct:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dt(z,new X.ar(y,a.altKey,a.shiftKey))},
as:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ar(y,a.altKey,a.shiftKey)},
bG:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ar(y,a.altKey,a.shiftKey)},
ag:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.E()
v=z.top
if(typeof x!=="number")return x.E()
return new V.R(y-w,x-v)},
aG:function(a){return new V.O(a.movementX,a.movementY)},
bC:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.b([],[V.R])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
t=C.e.a0(u.pageX)
C.e.a0(u.pageY)
s=z.left
C.e.a0(u.pageX)
C.a.h(y,new V.R(t-s,C.e.a0(u.pageY)-z.top))}return y},
ad:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.d6(z,new X.ar(y,a.altKey,a.shiftKey))},
bw:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.E()
v=H.T(y-w)
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.E()
u=H.T(x-y)
if(u<0)return!1
return v<z.width&&u<z.height},
hA:[function(a){this.f=!0},"$1","gen",4,0,7],
ht:[function(a){this.f=!1},"$1","geg",4,0,7],
hx:[function(a){H.k(a,"$isak")
if(this.f&&this.bw(a))a.preventDefault()},"$1","gek",4,0,4],
hC:[function(a){var z
H.k(a,"$isbf")
if(!this.f)return
z=this.ct(a)
if(this.b.h0(z))a.preventDefault()},"$1","gep",4,0,16],
hB:[function(a){var z
H.k(a,"$isbf")
if(!this.f)return
z=this.ct(a)
if(this.b.fX(z))a.preventDefault()},"$1","geo",4,0,16],
hE:[function(a){var z,y,x,w
H.k(a,"$isak")
z=this.a
z.focus()
this.f=!0
this.as(a)
if(this.x){y=this.ad(a)
x=this.aG(a)
if(this.d.c2(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ad(a)
w=this.ag(a)
if(this.c.c2(y,w))a.preventDefault()},"$1","ges",4,0,4],
hG:[function(a){var z,y,x
H.k(a,"$isak")
this.as(a)
z=this.ad(a)
if(this.x){y=this.aG(a)
if(this.d.aO(z,y))a.preventDefault()
return}if(this.r)return
x=this.ag(a)
if(this.c.aO(z,x))a.preventDefault()},"$1","gev",4,0,4],
hz:[function(a){var z,y,x
H.k(a,"$isak")
if(!this.bw(a)){this.as(a)
z=this.ad(a)
if(this.x){y=this.aG(a)
if(this.d.aO(z,y))a.preventDefault()
return}if(this.r)return
x=this.ag(a)
if(this.c.aO(z,x))a.preventDefault()}},"$1","gem",4,0,4],
hF:[function(a){var z,y,x
H.k(a,"$isak")
this.as(a)
z=this.ad(a)
if(this.x){y=this.aG(a)
if(this.d.aN(z,y))a.preventDefault()
return}if(this.r)return
x=this.ag(a)
if(this.c.aN(z,x))a.preventDefault()},"$1","geu",4,0,4],
hy:[function(a){var z,y,x
H.k(a,"$isak")
if(!this.bw(a)){this.as(a)
z=this.ad(a)
if(this.x){y=this.aG(a)
if(this.d.aN(z,y))a.preventDefault()
return}if(this.r)return
x=this.ag(a)
if(this.c.aN(z,x))a.preventDefault()}},"$1","gel",4,0,4],
hH:[function(a){var z,y
H.k(a,"$isbu")
this.as(a)
z=new V.O((a&&C.r).gfz(a),C.r.gfA(a)).q(0,180)
if(this.x){if(this.d.h1(z))a.preventDefault()
return}if(this.r)return
y=this.ag(a)
if(this.c.h2(z,y))a.preventDefault()},"$1","gew",4,0,29],
hI:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ad(this.y)
v=this.ag(this.y)
this.d.er(w,v,x)}},"$1","gex",4,0,7],
hO:[function(a){var z
H.k(a,"$isaY")
this.a.focus()
this.f=!0
this.bG(a)
z=this.bC(a)
if(this.e.h_(z))a.preventDefault()},"$1","geE",4,0,10],
hM:[function(a){var z
H.k(a,"$isaY")
this.bG(a)
z=this.bC(a)
if(this.e.fY(z))a.preventDefault()},"$1","geC",4,0,10],
hN:[function(a){var z
H.k(a,"$isaY")
this.bG(a)
z=this.bC(a)
if(this.e.fZ(z))a.preventDefault()},"$1","geD",4,0,10]}}],["","",,D,{"^":"",bV:{"^":"a;0a,0b,0c,0d",
gt:function(){var z=this.d
if(z==null){z=D.G()
this.d=z}return z},
an:[function(a){var z
H.k(a,"$isp")
z=this.d
if(!(z==null))z.A(a)},function(){return this.an(null)},"hi","$1","$0","gdN",0,2,0],
$isV:1,
$isav:1},V:{"^":"a;",$isav:1},fM:{"^":"au;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gt:function(){var z=this.Q
if(z==null){z=D.G()
this.Q=z}return z},
an:function(a){var z=this.Q
if(!(z==null))z.A(a)},
eq:[function(a){var z
H.k(a,"$isp")
z=this.ch
if(!(z==null))z.A(a)},function(){return this.eq(null)},"hD","$1","$0","gcw",0,2,0],
hJ:[function(a){var z,y,x
H.x(a,"$ish",[D.V],"$ash")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.z)(a),++y){x=a[y]
if(x==null||this.dY(x))return!1}return!0},"$1","gez",4,0,31],
hq:[function(a,b){var z,y,x,w,v,u,t,s
z=D.V
H.x(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gcw(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=H.k(b[u],"$isV")
if(t instanceof D.bV)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aS()
s.a=H.b([],v)
s.c=0
t.d=s}H.d(x,w)
C.a.h(s.a,x)}z=new D.c_(a,b,this,[z])
z.b=!0
this.an(z)},"$2","ged",8,0,17],
hL:[function(a,b){var z,y,x,w,v,u,t,s
z=D.V
H.x(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gcw(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=H.k(b[u],"$isV")
if(t instanceof D.bV)C.a.O(this.e,t)
s=t.d
if(s==null){s=new D.aS()
s.a=H.b([],v)
s.c=0
t.d=s}H.d(x,w)
C.a.O(s.a,x)}z=new D.c0(a,b,this,[z])
z.b=!0
this.an(z)},"$2","geB",8,0,17],
dY:function(a){var z=C.a.b4(this.e,a)
return z},
$ash:function(){return[D.V]},
$asau:function(){return[D.V]}},hk:{"^":"a;",$isV:1,$isav:1},hR:{"^":"a;",$isV:1,$isav:1},i_:{"^":"a;",$isV:1,$isav:1},i0:{"^":"a;",$isV:1,$isav:1},i1:{"^":"a;",$isV:1,$isav:1}}],["","",,V,{"^":"",
kW:[function(a,b){if(typeof b!=="number")return b.E()
if(typeof a!=="number")return H.n(a)
return Math.abs(b-a)<=1e-9},"$2","h7",8,0,30],
kM:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.e.du(a-b,z)
return(a<0?a+z:a)+b},
P:function(a,b,c){if(a==null)return C.i.ak("null",c)
return C.i.ak(C.e.dn($.m.$2(a,0)?0:a,b),c+b+1)},
b4:function(a,b,c){var z,y,x,w,v,u
H.x(a,"$isc",[P.v],"$asc")
z=H.b([],[P.l])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.z)(a),++w){v=V.P(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.i(z,u)
C.a.T(z,u,C.i.ak(z[u],x))}return z},
U:{"^":"a;a,b,c",
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
return new V.U(z,y,x)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}},
bE:{"^":"a;a,b,c,d",
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
return new V.bE(z,y,x,w)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bE))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"}},
c3:{"^":"a;a,b,c,d,e,f,r,x,y",
a1:function(a,b){var z=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.v])
return z},
j:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.k(a5,"$isc3")
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
return new V.c3(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.e.j(a3,s),C.e.j(a1,q)+C.e.j(a2,o)+C.e.j(a3,m),C.e.j(a1,k)+C.e.j(a2,j)+C.e.j(a3,i))},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c3))return!1
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
y=V.b4(H.b([this.a,this.d,this.r],z),3,0)
x=V.b4(H.b([this.b,this.e,this.x],z),3,0)
w=V.b4(H.b([this.c,this.f,this.y],z),3,0)
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
ap:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a1:function(a,b){var z=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.v])
return z},
da:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.m.$2(a2,0))return V.bL()
a3=1/a2
a4=-w
a5=-i
return V.aq((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
j:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.k(a7,"$isap")
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
return V.aq(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
c7:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
v=this.c
u=a.c
if(typeof v!=="number")return v.j()
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
return new V.H(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
aU:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
v=this.c
u=a.c
if(typeof v!=="number")return v.j()
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
return new V.a5(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ap))return!1
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
i:function(a){return this.K()},
d9:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.v]
y=V.b4(H.b([this.a,this.e,this.y,this.cx],z),b,c)
x=V.b4(H.b([this.b,this.f,this.z,this.cy],z),b,c)
w=V.b4(H.b([this.c,this.r,this.Q,this.db],z),b,c)
v=V.b4(H.b([this.d,this.x,this.ch,this.dx],z),b,c)
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
K:function(){return this.d9("",3,0)},
v:function(a){return this.d9(a,3,0)},
n:{
aq:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ap(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bL:function(){return V.aq(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
dC:function(a,b,c){var z,y,x,w,v
z=c.q(0,Math.sqrt(c.B(c)))
y=b.ah(z)
x=y.q(0,Math.sqrt(y.B(y)))
w=z.ah(x)
v=new V.H(a.a,a.b,a.c)
return V.aq(x.a,w.a,z.a,x.H(0).B(v),x.b,w.b,z.b,w.H(0).B(v),x.c,w.c,z.c,z.H(0).B(v),0,0,0,1)}}},
R:{"^":"a;a,b",
E:function(a,b){return new V.R(this.a-b.a,this.b-b.b)},
j:function(a,b){return new V.R(this.a*b,this.b*b)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}},
a5:{"^":"a;a,b,c",
F:function(a,b){return new V.a5(this.a+b.a,this.b+b.b,this.c+b.c)},
E:function(a,b){return new V.a5(this.a-b.a,this.b-b.b,this.c-b.c)},
j:function(a,b){return new V.a5(this.a*b,this.b*b,this.c*b)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}},
dL:{"^":"a;a,b,c,d",
gX:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dL))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"},
n:{
dM:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dL(a,b,c,d)}}},
O:{"^":"a;a,b",
fL:[function(a){return Math.sqrt(this.B(this))},"$0","gl",1,0,18],
B:function(a){var z,y,x,w
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
return new V.O(z*b,y*b)},
q:function(a,b){var z,y
if($.m.$2(b,0))return new V.O(0,0)
z=this.a
if(typeof z!=="number")return z.q()
y=this.b
if(typeof y!=="number")return y.q()
return new V.O(z/b,y/b)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}},
H:{"^":"a;a,b,c",
fL:[function(a){return Math.sqrt(this.B(this))},"$0","gl",1,0,18],
B:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ah:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.H(z*y-x*w,x*v-u*y,u*w-z*v)},
F:function(a,b){return new V.H(this.a+b.a,this.b+b.b,this.c+b.c)},
H:function(a){return new V.H(-this.a,-this.b,-this.c)},
j:function(a,b){return new V.H(this.a*b,this.b*b,this.c*b)},
q:function(a,b){if($.m.$2(b,0))return new V.H(0,0,0)
return new V.H(this.a/b,this.b/b,this.c/b)},
dc:function(){if(!$.m.$2(0,this.a))return!1
if(!$.m.$2(0,this.b))return!1
if(!$.m.$2(0,this.c))return!1
return!0},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.H))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}}],["","",,U,{"^":"",ff:{"^":"d9;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bo:function(a){var z=V.kM(a,this.c,this.b)
return z},
gt:function(){var z=this.y
if(z==null){z=D.G()
this.y=z}return z},
I:function(a){var z=this.y
if(!(z==null))z.A(a)},
sc8:function(a,b){},
sc_:function(a){var z,y
z=this.b
if(!$.m.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bo(z)}z=new D.L("maximumLocation",y,this.b,this,[P.v])
z.b=!0
this.I(z)}},
sc1:function(a){var z,y
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bo(z)}z=new D.L("minimumLocation",y,this.c,this,[P.v])
z.b=!0
this.I(z)}},
sW:function(a,b){var z,y
b=this.bo(b)
z=this.d
if(!$.m.$2(z,b)){y=this.d
this.d=b
z=new D.L("location",y,b,this,[P.v])
z.b=!0
this.I(z)}},
sc0:function(a){var z,y,x
z=this.e
if(!$.m.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.L("maximumVelocity",y,a,this,[P.v])
z.b=!0
this.I(z)}},
sL:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.m.$2(z,a)){x=this.f
this.f=a
z=new D.L("velocity",x,a,this,[P.v])
z.b=!0
this.I(z)}},
sbQ:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.m.$2(z,a)){y=this.x
this.x=a
z=new D.L("dampening",y,a,this,[P.v])
z.b=!0
this.I(z)}},
ab:function(a,b){var z,y,x,w
z=this.f
if($.m.$2(z,0)){z=this.r
z=!$.m.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sW(0,this.d+y*b)
z=this.x
if(!$.m.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sL(y)}},
n:{
cp:function(){var z=new U.ff()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},db:{"^":"a4;0a,0b",
gt:function(){var z=this.b
if(z==null){z=D.G()
this.b=z}return z},
aE:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.db))return!1
return J.N(this.a,b.a)},
i:function(a){return"Constant: "+this.a.v("          ")},
n:{
dc:function(a){var z=new U.db()
z.a=a
return z}}},dp:{"^":"au;0e,0f,0r,0a,0b,0c,0d",
gt:function(){var z=this.e
if(z==null){z=D.G()
this.e=z}return z},
I:[function(a){var z
H.k(a,"$isp")
z=this.e
if(!(z==null))z.A(a)},function(){return this.I(null)},"a3","$1","$0","gao",0,2,0],
hp:[function(a,b){var z,y,x,w,v,u,t
z=U.a4
H.x(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gao(),w={func:1,ret:-1,args:[D.p]},v=0;v<b.length;b.length===y||(0,H.z)(b),++v){u=b[v]
if(u!=null){t=u.gt()
t.toString
H.d(x,w)
C.a.h(t.a,x)}}z=new D.c_(a,b,this,[z])
z.b=!0
this.I(z)},"$2","gec",8,0,19],
hK:[function(a,b){var z,y,x,w,v,u,t
z=U.a4
H.x(b,"$ish",[z],"$ash")
for(y=b.length,x=this.gao(),w={func:1,ret:-1,args:[D.p]},v=0;v<b.length;b.length===y||(0,H.z)(b),++v){u=b[v]
if(u!=null){t=u.gt()
t.toString
H.d(x,w)
C.a.O(t.a,x)}}z=new D.c0(a,b,this,[z])
z.b=!0
this.I(z)},"$2","geA",8,0,19],
aE:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.a2()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.an(z,z.length,0,[H.y(z,0)]),x=null;z.D();){y=z.d
if(y!=null){w=y.aE(0,b,c)
if(w!=null)x=x==null?w:w.j(0,x)}}this.f=x==null?V.bL():x
z=this.e
if(!(z==null))z.al(0)}return this.f},
p:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dp))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.i(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.i(w,y)
if(!J.N(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$ash:function(){return[U.a4]},
$asau:function(){return[U.a4]},
$isa4:1},a4:{"^":"d9;"},ir:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gt:function(){var z=this.cy
if(z==null){z=D.G()
this.cy=z}return z},
I:[function(a){var z
H.k(a,"$isp")
z=this.cy
if(!(z==null))z.A(a)},function(){return this.I(null)},"a3","$1","$0","gao",0,2,0],
aH:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gcO()
z.toString
y={func:1,ret:-1,args:[D.p]}
x=H.d(this.gbx(),y)
C.a.h(z.a,x)
x=this.a.c.gdd()
x.toString
z=H.d(this.gby(),y)
C.a.h(x.a,z)
z=this.a.c.gbj()
z.toString
y=H.d(this.gbz(),y)
C.a.h(z.a,y)
return!0},
e8:[function(a){H.k(a,"$isp")
if(!J.N(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbx",4,0,1],
e9:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$isp"),"$isbh")
if(!this.y)return
if(this.x){z=a.d.E(0,a.y)
z=new V.O(z.a,z.b)
z=z.B(z)
y=this.r
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.E(0,a.y)
z=new V.O(y.a,y.b).j(0,2).q(0,z.gX())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.j()
x=this.e
if(typeof x!=="number")return H.n(x)
y.sL(z*10*x)}else{z=a.c
y=a.d
x=y.E(0,a.y)
w=new V.O(x.a,x.b).j(0,2).q(0,z.gX())
x=this.b
v=w.a
if(typeof v!=="number")return v.H()
u=this.e
if(typeof u!=="number")return H.n(u)
t=this.z
if(typeof t!=="number")return H.n(t)
x.sW(0,-v*u+t)
this.b.sL(0)
y=y.E(0,a.z)
this.Q=new V.O(y.a,y.b).j(0,2).q(0,z.gX())}this.a3()},"$1","gby",4,0,1],
ea:[function(a){var z,y,x
H.k(a,"$isp")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.B(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.j()
x=this.e
if(typeof x!=="number")return H.n(x)
z.sL(y*10*x)
this.a3()}},"$1","gbz",4,0,1],
aE:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.a2()
if(z<y){this.ch=y
x=b.y
this.b.ab(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aq(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa4:1},is:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gt:function(){var z=this.fx
if(z==null){z=D.G()
this.fx=z}return z},
I:[function(a){var z
H.k(a,"$isp")
z=this.fx
if(!(z==null))z.A(a)},function(){return this.I(null)},"a3","$1","$0","gao",0,2,0],
aH:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gcO()
z.toString
y={func:1,ret:-1,args:[D.p]}
x=H.d(this.gbx(),y)
C.a.h(z.a,x)
x=this.a.c.gdd()
x.toString
z=H.d(this.gby(),y)
C.a.h(x.a,z)
z=this.a.c.gbj()
z.toString
x=H.d(this.gbz(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.G()
x.f=z}x=H.d(this.ge5(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.G()
x.d=z}x=H.d(this.ge6(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.G()
x.b=z}x=H.d(this.geY(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.G()
x.d=z}x=H.d(this.geX(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.G()
x.c=z}y=H.d(this.geW(),y)
C.a.h(z.a,y)
return!0},
a9:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.H()
z=-z}if(this.r){if(typeof y!=="number")return y.H()
y=-y}return new V.O(z,y)},
e8:[function(a){a=H.e(H.k(a,"$isp"),"$isbh")
if(!J.N(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbx",4,0,1],
e9:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$isp"),"$isbh")
if(!this.cx)return
if(this.ch){z=a.d.E(0,a.y)
z=new V.O(z.a,z.b)
z=z.B(z)
y=this.Q
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.E(0,a.y)
z=this.a9(new V.O(y.a,y.b).j(0,2).q(0,z.gX()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.H()
x=this.y
if(typeof x!=="number")return H.n(x)
y.sL(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.H()
y=this.x
if(typeof y!=="number")return H.n(y)
x.sL(-z*10*y)}else{z=a.c
y=a.d
x=y.E(0,a.y)
w=this.a9(new V.O(x.a,x.b).j(0,2).q(0,z.gX()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sW(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sW(0,-u*v+x)
this.b.sL(0)
this.c.sL(0)
y=y.E(0,a.z)
this.dx=this.a9(new V.O(y.a,y.b).j(0,2).q(0,z.gX()))}this.a3()},"$1","gby",4,0,1],
ea:[function(a){var z,y,x
H.k(a,"$isp")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.B(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.H()
x=this.y
if(typeof x!=="number")return H.n(x)
z.sL(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.H()
z=this.x
if(typeof z!=="number")return H.n(z)
x.sL(-y*10*z)
this.a3()}},"$1","gbz",4,0,1],
hm:[function(a){if(H.e(H.k(a,"$isp"),"$isdz").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","ge5",4,0,1],
hn:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$isp"),"$isbh")
if(!J.N(this.d,a.x.b))return
z=a.c
y=a.d
x=y.E(0,a.y)
w=this.a9(new V.O(x.a,x.b).j(0,2).q(0,z.gX()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sW(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sW(0,-u*v+x)
this.b.sL(0)
this.c.sL(0)
y=y.E(0,a.z)
this.dx=this.a9(new V.O(y.a,y.b).j(0,2).q(0,z.gX()))
this.a3()},"$1","ge6",4,0,1],
hS:[function(a){H.k(a,"$isp")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","geY",4,0,1],
hR:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$isp"),"$ise1")
if(!this.cx)return
if(this.ch){z=a.d.E(0,a.y)
z=new V.O(z.a,z.b)
z=z.B(z)
y=this.Q
if(typeof y!=="number")return H.n(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.E(0,a.y)
z=this.a9(new V.O(y.a,y.b).j(0,2).q(0,z.gX()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.H()
x=this.y
if(typeof x!=="number")return H.n(x)
y.sL(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.H()
y=this.x
if(typeof y!=="number")return H.n(y)
x.sL(-z*10*y)}else{z=a.c
y=a.d
x=y.E(0,a.y)
w=this.a9(new V.O(x.a,x.b).j(0,2).q(0,z.gX()))
x=this.c
v=w.a
if(typeof v!=="number")return v.H()
u=this.y
if(typeof u!=="number")return H.n(u)
t=this.cy
if(typeof t!=="number")return H.n(t)
x.sW(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.H()
v=this.x
if(typeof v!=="number")return H.n(v)
x=this.db
if(typeof x!=="number")return H.n(x)
t.sW(0,-u*v+x)
this.b.sL(0)
this.c.sL(0)
y=y.E(0,a.z)
this.dx=this.a9(new V.O(y.a,y.b).j(0,2).q(0,z.gX()))}this.a3()},"$1","geX",4,0,1],
hQ:[function(a){var z,y,x
H.k(a,"$isp")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.B(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.H()
x=this.y
if(typeof x!=="number")return H.n(x)
z.sL(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.H()
z=this.x
if(typeof z!=="number")return H.n(z)
x.sL(-y*10*z)
this.a3()}},"$1","geW",4,0,1],
aE:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.a2()
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
this.fr=z.j(0,V.aq(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isa4:1},it:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gt:function(){var z=this.r
if(z==null){z=D.G()
this.r=z}return z},
I:function(a){var z=this.r
if(!(z==null))z.A(a)},
aH:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.G()
z.e=y
z=y}else z=y
y=H.d(this.geb(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.G()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
ho:[function(a){var z,y,x,w
H.k(a,"$isp")
if(!J.N(this.b,this.a.b.c))return
H.e(a,"$iscy")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.j()
w=z+y*x
if(z!==w){this.d=w
z=new D.L("zoom",z,w,this,[P.v])
z.b=!0
this.I(z)}},"$1","geb",4,0,1],
aE:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aq(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa4:1}}],["","",,M,{"^":"",ft:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
ap:[function(a){var z
H.k(a,"$isp")
z=this.x
if(!(z==null))z.A(a)},function(){return this.ap(null)},"hj","$1","$0","ga8",0,2,0],
hv:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aI
H.x(b,"$ish",[z],"$ash")
for(y=b.length,x=this.ga8(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){if(t.gU()==null){s=new D.aS()
s.a=H.b([],v)
s.c=0
t.sU(s)}s=t.gU()
s.toString
H.d(x,w)
C.a.h(s.a,x)}}z=new D.c_(a,b,this,[z])
z.b=!0
this.ap(z)},"$2","gei",8,0,8],
hw:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aI
H.x(b,"$ish",[z],"$ash")
for(y=b.length,x=this.ga8(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){if(t.gU()==null){s=new D.aS()
s.a=H.b([],v)
s.c=0
t.sU(s)}s=t.gU()
s.toString
H.d(x,w)
C.a.O(s.a,x)}}z=new D.c0(a,b,this,[z])
z.b=!0
this.ap(z)},"$2","gej",8,0,8],
sdl:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gt()
z.toString
y=H.d(this.ga8(),{func:1,ret:-1,args:[D.p]})
C.a.O(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gt()
z.toString
y=H.d(this.ga8(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)}z=new D.L("technique",x,this.c,this,[O.cC])
z.b=!0
this.ap(z)}},
gt:function(){var z=this.x
if(z==null){z=D.G()
this.x=z}return z},
aD:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.dj(this.c)
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
u=C.f.a0(v.a*x)
if(typeof w!=="number")return H.n(w)
t=C.f.a0(v.b*w)
s=C.f.a0(v.c*x)
a.c=s
v=C.f.a0(v.d*w)
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
s.di(V.aq(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0))
y=$.dG
if(y==null){y=V.dC(new V.a5(0,0,0),new V.H(0,1,0),new V.H(0,0,-1))
$.dG=y
m=y}else m=y
y=z.a
if(y!=null){l=y.aE(0,a,z)
if(l!=null)m=l.j(0,m)}a.db.di(m)
z=this.c
if(z!=null)z.ab(0,a)
for(z=this.d.a,z=new J.an(z,z.length,0,[H.y(z,0)]);z.D();)z.d.ab(0,a)
for(z=this.d.a,z=new J.an(z,z.length,0,[H.y(z,0)]);z.D();)z.d.aD(a)
this.a.toString
a.cy.c3()
a.db.c3()
this.b.toString
a.dh()},
$islu:1}}],["","",,A,{"^":"",d1:{"^":"a;a,b,c"},f5:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fC:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
fB:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},h1:{"^":"dO;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0ay,0ai,0az,0b5,0cP,0cQ,0b6,0b7,0cR,0cS,0b8,0b9,0cT,0cU,0ba,0cV,0cW,0bb,0cX,0cY,0bc,0bd,0be,0cZ,0d_,0bf,0bg,0d0,0d1,0bh,0d2,0bS,0d3,0bT,0d4,0bU,0d5,0bV,0d6,0bW,0d7,0bX,a,b,0c,0d,0e,0f,0r",
dE:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.x=a2
z=new P.bN("")
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
a2.f0(z)
a2.f7(z)
a2.f1(z)
a2.ff(z)
a2.fg(z)
a2.f9(z)
a2.fk(z)
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
z=new P.bN("")
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
v.f4(z)
v.f_(z)
v.f2(z)
v.f5(z)
v.fd(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.fb(z)
v.fc(z)}v.f8(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.b){r+="uniform float alpha;\n"
z.a=r
if(q!==C.h){r+="uniform int nullAlphaTxt;\n"
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
case C.h:r+="   return alpha;\n"
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
p=H.b([],[P.l])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.w(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.f3(z)
v.fa(z)
v.fe(z)
v.fh(z)
v.fi(z)
v.fj(z)
v.f6(z)}r=z.a+="// === Main ===\n"
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
o=H.b([],[P.l])
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
this.c=this.cu(x.charCodeAt(0)==0?x:x,35633)
this.d=this.cu(v.charCodeAt(0)==0?v:v,35632)
v=this.a
x=v.createProgram()
this.e=x
v.attachShader(x,this.c)
v.attachShader(this.e,this.d)
v.linkProgram(this.e)
if(!H.eO(v.getProgramParameter(this.e,35714))){m=v.getProgramInfoLog(this.e)
v.deleteProgram(this.e)
H.r(P.q("Failed to link shader: "+H.j(m)))}this.eR()
this.eT()
this.y=this.f.k(0,"posAttr")
this.Q=this.f.k(0,"normAttr")
this.z=this.f.k(0,"binmAttr")
this.ch=this.f.k(0,"txt2DAttr")
this.cx=this.f.k(0,"txtCubeAttr")
this.cy=this.f.k(0,"bendAttr")
if(a2.fr)this.fy=H.e(this.r.m(0,"invViewMat"),"$isaw")
if(y)this.db=H.e(this.r.m(0,"objMat"),"$isaw")
if(w)this.dx=H.e(this.r.m(0,"viewObjMat"),"$isaw")
this.fr=H.e(this.r.m(0,"projViewObjMat"),"$isaw")
if(a2.x2)this.go=H.e(this.r.m(0,"txt2DMat"),"$iscG")
if(a2.y1)this.id=H.e(this.r.m(0,"txtCubeMat"),"$isaw")
if(a2.y2)this.k1=H.e(this.r.m(0,"colorMat"),"$isaw")
this.k3=H.b([],[A.aw])
y=a2.ay
if(y>0){this.k2=H.k(this.r.m(0,"bendMatCount"),"$isE")
for(l=0;l<y;++l){x=this.k3
w=this.r
v="bendValues["+l+"].mat"
k=w.k(0,v)
if(k==null)H.r(P.q("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.e(k,"$isaw"))}}y=a2.a
if(y!==C.b){this.k4=H.e(this.r.m(0,"emissionClr"),"$isD")
switch(y){case C.b:break
case C.h:break
case C.c:this.r1=H.e(this.r.m(0,"emissionTxt"),"$isad")
this.rx=H.e(this.r.m(0,"nullEmissionTxt"),"$isE")
break
case C.d:this.r2=H.e(this.r.m(0,"emissionTxt"),"$isae")
this.rx=H.e(this.r.m(0,"nullEmissionTxt"),"$isE")
break}}y=a2.b
if(y!==C.b){this.ry=H.e(this.r.m(0,"ambientClr"),"$isD")
switch(y){case C.b:break
case C.h:break
case C.c:this.x1=H.e(this.r.m(0,"ambientTxt"),"$isad")
this.y1=H.e(this.r.m(0,"nullAmbientTxt"),"$isE")
break
case C.d:this.x2=H.e(this.r.m(0,"ambientTxt"),"$isae")
this.y1=H.e(this.r.m(0,"nullAmbientTxt"),"$isE")
break}}y=a2.c
if(y!==C.b){this.y2=H.e(this.r.m(0,"diffuseClr"),"$isD")
switch(y){case C.b:break
case C.h:break
case C.c:this.ay=H.e(this.r.m(0,"diffuseTxt"),"$isad")
this.az=H.e(this.r.m(0,"nullDiffuseTxt"),"$isE")
break
case C.d:this.ai=H.e(this.r.m(0,"diffuseTxt"),"$isae")
this.az=H.e(this.r.m(0,"nullDiffuseTxt"),"$isE")
break}}y=a2.d
if(y!==C.b){this.b5=H.e(this.r.m(0,"invDiffuseClr"),"$isD")
switch(y){case C.b:break
case C.h:break
case C.c:this.cP=H.e(this.r.m(0,"invDiffuseTxt"),"$isad")
this.b6=H.e(this.r.m(0,"nullInvDiffuseTxt"),"$isE")
break
case C.d:this.cQ=H.e(this.r.m(0,"invDiffuseTxt"),"$isae")
this.b6=H.e(this.r.m(0,"nullInvDiffuseTxt"),"$isE")
break}}y=a2.e
if(y!==C.b){this.b9=H.e(this.r.m(0,"shininess"),"$isS")
this.b7=H.e(this.r.m(0,"specularClr"),"$isD")
switch(y){case C.b:break
case C.h:break
case C.c:this.cR=H.e(this.r.m(0,"specularTxt"),"$isad")
this.b8=H.e(this.r.m(0,"nullSpecularTxt"),"$isE")
break
case C.d:this.cS=H.e(this.r.m(0,"specularTxt"),"$isae")
this.b8=H.e(this.r.m(0,"nullSpecularTxt"),"$isE")
break}}switch(a2.f){case C.b:break
case C.h:break
case C.c:this.cT=H.e(this.r.m(0,"bumpTxt"),"$isad")
this.ba=H.e(this.r.m(0,"nullBumpTxt"),"$isE")
break
case C.d:this.cU=H.e(this.r.m(0,"bumpTxt"),"$isae")
this.ba=H.e(this.r.m(0,"nullBumpTxt"),"$isE")
break}if(a2.dy){this.cV=H.e(this.r.m(0,"envSampler"),"$isae")
this.cW=H.e(this.r.m(0,"nullEnvTxt"),"$isE")
y=a2.r
if(y!==C.b){this.bb=H.e(this.r.m(0,"reflectClr"),"$isD")
switch(y){case C.b:break
case C.h:break
case C.c:this.cX=H.e(this.r.m(0,"reflectTxt"),"$isad")
this.bc=H.e(this.r.m(0,"nullReflectTxt"),"$isE")
break
case C.d:this.cY=H.e(this.r.m(0,"reflectTxt"),"$isae")
this.bc=H.e(this.r.m(0,"nullReflectTxt"),"$isE")
break}}y=a2.x
if(y!==C.b){this.bd=H.e(this.r.m(0,"refraction"),"$isS")
this.be=H.e(this.r.m(0,"refractClr"),"$isD")
switch(y){case C.b:break
case C.h:break
case C.c:this.cZ=H.e(this.r.m(0,"refractTxt"),"$isad")
this.bf=H.e(this.r.m(0,"nullRefractTxt"),"$isE")
break
case C.d:this.d_=H.e(this.r.m(0,"refractTxt"),"$isae")
this.bf=H.e(this.r.m(0,"nullRefractTxt"),"$isE")
break}}}y=a2.y
if(y!==C.b){this.bg=H.e(this.r.m(0,"alpha"),"$isS")
switch(y){case C.b:break
case C.h:break
case C.c:this.d0=H.e(this.r.m(0,"alphaTxt"),"$isad")
this.bh=H.e(this.r.m(0,"nullAlphaTxt"),"$isE")
break
case C.d:this.d1=H.e(this.r.m(0,"alphaTxt"),"$isae")
this.bh=H.e(this.r.m(0,"nullAlphaTxt"),"$isE")
break}}this.bS=H.b([],[A.ee])
this.bT=H.b([],[A.ef])
this.bU=H.b([],[A.eg])
this.bV=H.b([],[A.eh])
this.bW=H.b([],[A.ei])
this.bX=H.b([],[A.ej])
if(a2.k2){y=a2.z
if(y>0){this.d2=H.k(this.r.m(0,"dirLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="dirLights["+l+"].viewDir"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isD")
x=this.r
w="dirLights["+l+"].color"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isD")
x=this.bS;(x&&C.a).h(x,new A.ee(l,k,j))}}y=a2.Q
if(y>0){this.d3=H.k(this.r.m(0,"pntLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="pntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isD")
x=this.r
w="pntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isD")
x=this.r
w="pntLights["+l+"].color"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isD")
x=this.r
w="pntLights["+l+"].att0"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isS")
x=this.r
w="pntLights["+l+"].att1"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isS")
x=this.r
w="pntLights["+l+"].att2"
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isS")
x=this.bT;(x&&C.a).h(x,new A.ef(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.d4=H.k(this.r.m(0,"spotLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="spotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isD")
x=this.r
w="spotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isD")
x=this.r
w="spotLights["+l+"].viewPnt"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isD")
x=this.r
w="spotLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isD")
x=this.r
w="spotLights["+l+"].cutoff"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isS")
x=this.r
w="spotLights["+l+"].coneAngle"
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isS")
x=this.r
w="spotLights["+l+"].att0"
e=x.k(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isS")
x=this.r
w="spotLights["+l+"].att1"
d=x.k(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isS")
x=this.r
w="spotLights["+l+"].att2"
c=x.k(0,w)
if(c==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(c,"$isS")
x=this.bU;(x&&C.a).h(x,new A.eg(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.d5=H.k(this.r.m(0,"txtDirLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="txtDirLights["+l+"].objUp"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isD")
x=this.r
w="txtDirLights["+l+"].objRight"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isD")
x=this.r
w="txtDirLights["+l+"].objDir"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isD")
x=this.r
w="txtDirLights["+l+"].viewDir"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isD")
x=this.r
w="txtDirLights["+l+"].color"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isD")
x=this.r
w="txtDirLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isE")
x=this.r
w="txtDirLightsTxt2D"+l
e=x.k(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isad")
x=this.bV;(x&&C.a).h(x,new A.eh(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.d6=H.k(this.r.m(0,"txtPntLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="txtPntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isD")
x=this.r
w="txtPntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isD")
x=this.r
w="txtPntLights["+l+"].invViewRotMat"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$iscG")
x=this.r
w="txtPntLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isD")
x=this.r
w="txtPntLights["+l+"].nullTxt"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isE")
x=this.r
w="txtPntLights["+l+"].att0"
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isS")
x=this.r
w="txtPntLights["+l+"].att1"
e=x.k(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isS")
x=this.r
w="txtPntLights["+l+"].att2"
d=x.k(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isS")
x=this.r
w="txtPntLightsTxtCube"+l
c=x.k(0,w)
if(c==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(c,"$isae")
x=this.bW;(x&&C.a).h(x,new A.ei(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.d7=H.k(this.r.m(0,"txtSpotLightCount"),"$isE")
for(l=0;l<y;++l){x=this.r
w="txtSpotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isD")
x=this.r
w="txtSpotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isD")
x=this.r
w="txtSpotLights["+l+"].objUp"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isD")
x=this.r
w="txtSpotLights["+l+"].objRight"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isD")
x=this.r
w="txtSpotLights["+l+"].viewPnt"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isD")
x=this.r
w="txtSpotLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isE")
x=this.r
w="txtSpotLights["+l+"].color"
e=x.k(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isD")
x=this.r
w="txtSpotLights["+l+"].tuScalar"
d=x.k(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isS")
x=this.r
w="txtSpotLights["+l+"].tvScalar"
c=x.k(0,w)
if(c==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(c,"$isS")
x=this.r
w="txtSpotLights["+l+"].att0"
b=x.k(0,w)
if(b==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(b,"$isS")
x=this.r
w="txtSpotLights["+l+"].att1"
a=x.k(0,w)
if(a==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(a,"$isS")
x=this.r
w="txtSpotLights["+l+"].att2"
a0=x.k(0,w)
if(a0==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(a0,"$isS")
x=this.r
w="txtSpotLightsTxt2D"+l
a1=x.k(0,w)
if(a1==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.e(a1,"$isad")
x=this.bX;(x&&C.a).h(x,new A.ej(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
a5:function(a,b,c){b.a.uniform1i(b.d,1)},
Z:function(a,b,c){b.a.uniform1i(b.d,1)},
n:{
h0:function(a,b){var z,y
z=a.ai
y=new A.h1(b,z)
y.dH(b,z)
y.dE(a,b)
return y}}},h4:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,ay,ai,az",
f0:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.ay+"];\n"
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
f7:function(a){var z
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
f1:function(a){var z
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
ff:function(a){var z,y
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
fg:function(a){var z,y
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
f9:function(a){var z
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
fk:function(a){var z
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
ae:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.h)return
if(0>=c.length)return H.i(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.cg(c,1))+"Txt;\n"
a.a=z
if(b===C.c)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
f4:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.ae(a,z,"emission")
y=a.a+="\n"
y+="vec3 emission()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.h:z=y+"   return emissionClr;\n"
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
f_:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.ae(a,z,"ambient")
y=a.a+="\n"
y+="vec3 ambient()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.h:z=y+"   return ambientClr;\n"
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
f2:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.ae(a,z,"diffuse")
y=a.a+="vec3 diffuseColor;\n"
y+="\n"
a.a=y
y+="void setDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.h:z=y+"   diffuseColor = diffuseClr;\n"
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
f5:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.ae(a,z,"invDiffuse")
y=a.a+="vec3 invDiffuseColor;\n"
y+="\n"
a.a=y
y+="void setInvDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.b:z=y
break
case C.h:z=y+"   invDiffuseColor = invDiffuseClr;\n"
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
fd:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.ae(a,z,"specular")
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
case C.h:z=y+"   specularColor = specularClr;\n"
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
f8:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.b:break
case C.h:break
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
case C.h:z+="   return normalize(normalVec);\n"
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
fb:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.ae(a,z,"reflect")
y=a.a+="\n"
y+="vec3 reflect(vec3 refl)\n"
a.a=y
y+="{\n"
a.a=y
y+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=y
switch(z){case C.b:z=y
break
case C.h:z=y+"   vec3 scalar = reflectClr;\n"
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
fc:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.ae(a,z,"refract")
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
case C.h:z=y+"   vec3 scalar = refractClr;\n"
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
f3:function(a){var z,y
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
fa:function(a){var z,y
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
fe:function(a){var z,y
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
fh:function(a){var z,y,x
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
fi:function(a){var z,y,x
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
fj:function(a){var z,y,x
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
f6:function(a){var z
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
i:function(a){return this.ai}},ee:{"^":"a;a,b,c"},eh:{"^":"a;a,b,c,d,e,f,r,x"},ef:{"^":"a;a,b,c,d,e,f,r"},ei:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eg:{"^":"a;a,b,c,d,e,f,r,x,y,z"},ej:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},dO:{"^":"cj;",
dH:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
cu:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.eO(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.f(P.q("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
eR:function(){var z,y,x,w,v,u
z=H.b([],[A.d1])
y=this.a
x=H.T(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.n(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.d1(y,v.name,u))}this.f=new A.f5(z)},
eT:function(){var z,y,x,w,v,u
z=H.b([],[A.a2])
y=this.a
x=H.T(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.n(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.fw(v.type,v.size,v.name,u))}this.r=new A.ii(z)},
ar:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.E(z,y,b,c)
else return A.cF(z,y,b,a,c)},
dZ:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ad(z,y,b,c)
else return A.cF(z,y,b,a,c)},
e_:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ae(z,y,b,c)
else return A.cF(z,y,b,a,c)},
b1:function(a,b){return new P.er(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
fw:function(a,b,c,d){switch(a){case 5120:return this.ar(b,c,d)
case 5121:return this.ar(b,c,d)
case 5122:return this.ar(b,c,d)
case 5123:return this.ar(b,c,d)
case 5124:return this.ar(b,c,d)
case 5125:return this.ar(b,c,d)
case 5126:return new A.S(this.a,this.e,c,d)
case 35664:return new A.ic(this.a,this.e,c,d)
case 35665:return new A.D(this.a,this.e,c,d)
case 35666:return new A.ig(this.a,this.e,c,d)
case 35667:return new A.id(this.a,this.e,c,d)
case 35668:return new A.ie(this.a,this.e,c,d)
case 35669:return new A.ih(this.a,this.e,c,d)
case 35674:return new A.ik(this.a,this.e,c,d)
case 35675:return new A.cG(this.a,this.e,c,d)
case 35676:return new A.aw(this.a,this.e,c,d)
case 35678:return this.dZ(b,c,d)
case 35680:return this.e_(b,c,d)
case 35670:throw H.f(this.b1("BOOL",c))
case 35671:throw H.f(this.b1("BOOL_VEC2",c))
case 35672:throw H.f(this.b1("BOOL_VEC3",c))
case 35673:throw H.f(this.b1("BOOL_VEC4",c))
default:throw H.f(P.q("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},bU:{"^":"a;a,b",
i:function(a){return this.b}},a2:{"^":"a;"},ii:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.k(0,b)
if(z==null)throw H.f(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.K()},
fE:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w)x+=z[w].i(0)+a
return x},
K:function(){return this.fE("\n")}},E:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},id:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},ie:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},ih:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},ib:{"^":"a2;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.j(this.c)},
n:{
cF:function(a,b,c,d,e){var z=new A.ib(a,b,c,e)
z.f=d
z.e=P.fT(d,0,!1,P.A)
return z}}},S:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},ic:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},D:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},ig:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},ik:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},cG:{"^":"a2;a,b,c,d",
a7:function(a){var z=new Float32Array(H.bw(H.x(a,"$isc",[P.v],"$asc")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},aw:{"^":"a2;a,b,c,d",
a7:function(a){var z=new Float32Array(H.bw(H.x(a,"$isc",[P.v],"$asc")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},ad:{"^":"a2;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},ae:{"^":"a2;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
kJ:function(a,b,c,d){return F.kh(c,a,d,b,new F.kK())},
kh:function(a,b,c,d,e){var z=F.kH(a,b,new F.ki(H.d(e,{func:1,ret:V.a5,args:[P.v]}),d,b,c),null)
if(z==null)return
z.at()
z.fQ(new F.iB(),new F.hf())
return z},
kH:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.d(c,{func:1,ret:-1,args:[F.ax,P.v,P.v]})
if(a<1)return
if(b<1)return
z=new F.dP()
y=new F.iw(z)
y.b=!1
x=[F.ax]
y.c=H.b([],x)
z.a=y
y=new F.hL(z)
y.b=H.b([],[F.dH])
z.b=y
y=new F.hK(z)
y.b=H.b([],[F.dv])
z.c=y
y=new F.hJ(z)
y.b=H.b([],[F.aj])
z.d=y
z.e=null
w=H.b([],x)
for(v=0;v<=b;++v){u=v/b
y=z.a
if(u<0)x=0
else x=u>1?1:u
y.toString
t=F.cH(null,null,new V.bE(x,0,0,1),null,null,new V.R(u,1),null,null,0)
y.h(0,t)
c.$3(t,u,0)
C.a.h(w,t.cM(d))}for(v=1;v<=a;++v){s=v/a
for(y=s>1,x=s<0,r=1-s,q=0;q<=b;++q){u=q/b
p=z.a
if(u<0)o=0
else o=u>1?1:u
if(x)n=0
else n=y?1:s
if(x)m=0
else m=y?1:s
p.toString
t=F.cH(null,null,new V.bE(o,n,m,1),null,null,new V.R(u,r),null,null,0)
p.h(0,t)
c.$3(t,u,s)
C.a.h(w,t.cM(d))}}z.d.fl(a+1,b+1,w)
return z},
kK:{"^":"u:33;",
$1:function(a){return new V.a5(Math.cos(a),Math.sin(a),0)}},
ki:{"^":"u:34;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.cZ(y.$1(z),x)
x=J.cZ(y.$1(z+3.141592653589793/this.c),x).E(0,w)
x=new V.H(x.a,x.b,x.c)
v=x.q(0,Math.sqrt(x.B(x)))
u=new V.H(1,0,0)
y=v.ah(!v.p(0,u)?new V.H(0,0,1):u)
t=y.q(0,Math.sqrt(y.B(y)))
y=t.ah(v)
u=y.q(0,Math.sqrt(y.B(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.j(0,y*x)
x=t.j(0,r*x)
x=w.F(0,new V.a5(y.a-x.a,y.b-x.b,y.c-x.c))
if(!J.N(a.f,x)){a.f=x
y=a.a
if(y!=null)y.Y()}}},
aj:{"^":"a;0a,0b,0c,0d,0e",
aI:function(){if(!this.gcN()){C.a.O(this.a.a.d.b,this)
this.a.a.Y()}this.eG()
this.eH()
this.eI()},
eO:function(a){this.a=a
C.a.h(a.d.b,this)},
eP:function(a){this.b=a
C.a.h(a.d.c,this)},
eQ:function(a){this.c=a
C.a.h(a.d.d,this)},
eG:function(){var z=this.a
if(z!=null){C.a.O(z.d.b,this)
this.a=null}},
eH:function(){var z=this.b
if(z!=null){C.a.O(z.d.c,this)
this.b=null}},
eI:function(){var z=this.c
if(z!=null){C.a.O(z.d.d,this)
this.c=null}},
gcN:function(){return this.a==null||this.b==null||this.c==null},
dT:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.H(0,0,0)
if(y!=null)v=v.F(0,y)
if(x!=null)v=v.F(0,x)
if(w!=null)v=v.F(0,w)
if(v.dc())return
return v.q(0,Math.sqrt(v.B(v)))},
dW:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.E(0,y)
z=new V.H(z.a,z.b,z.c)
v=z.q(0,Math.sqrt(z.B(z)))
z=w.E(0,y)
z=new V.H(z.a,z.b,z.c)
z=v.ah(z.q(0,Math.sqrt(z.B(z))))
return z.q(0,Math.sqrt(z.B(z)))},
bO:function(){if(this.d!=null)return!0
var z=this.dT()
if(z==null){z=this.dW()
if(z==null)return!1}this.d=z
this.a.a.Y()
return!0},
dS:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.H(0,0,0)
if(y!=null)v=v.F(0,y)
if(x!=null)v=v.F(0,x)
if(w!=null)v=v.F(0,w)
if(v.dc())return
return v.q(0,Math.sqrt(v.B(v)))},
dV:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
z=new V.H(z.a,z.b,z.c)
m=z.q(0,Math.sqrt(z.B(z)))
if(o.a-p.a<0)m=m.H(0)}else{l=(z-q.b)/n
z=r.E(0,u).j(0,l).F(0,u).E(0,x)
z=new V.H(z.a,z.b,z.c)
m=z.q(0,Math.sqrt(z.B(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.H(0)}z=this.d
if(z!=null){k=z.q(0,Math.sqrt(z.B(z)))
z=k.ah(m)
z=z.q(0,Math.sqrt(z.B(z))).ah(k)
m=z.q(0,Math.sqrt(z.B(z)))}return m},
bM:function(){if(this.e!=null)return!0
var z=this.dS()
if(z==null){z=this.dV()
if(z==null)return!1}this.e=z
this.a.a.Y()
return!0},
gfs:function(a){if(J.N(this.a,this.b))return!0
if(J.N(this.b,this.c))return!0
if(J.N(this.c,this.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
v:function(a){var z,y
if(this.gcN())return a+"disposed"
z=a+C.i.ak(J.ah(this.a.e),0)+", "+C.i.ak(J.ah(this.b.e),0)+", "+C.i.ak(J.ah(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
K:function(){return this.v("")},
n:{
bX:function(a,b,c){var z,y,x
z=new F.aj()
y=a.a
if(y==null)H.r(P.q("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.q("May not create a face with vertices attached to different shapes."))
z.eO(a)
z.eP(b)
z.eQ(c)
C.a.h(z.a.a.d.b,z)
z.a.a.Y()
return z}}},
fw:{"^":"a;"},
hQ:{"^":"fw;",
aM:function(a,b,c){var z,y
z=b.a
z.a.a.u()
z=z.e
y=c.a
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.u()
z=z.e
y=c.b
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.u()
z=z.e
y=c.c
y.a.a.u()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.u()
z=z.e
y=c.b
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.u()
z=z.e
y=c.c
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.u()
z=z.e
y=c.a
y.a.a.u()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else{z=b.a
z.a.a.u()
z=z.e
y=c.c
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.u()
z=z.e
y=c.a
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.c
z.a.a.u()
z=z.e
y=c.b
y.a.a.u()
y=y.e
y=z==null?y==null:z===y
z=y}else z=!1
return z}else return!1}}}},
dv:{"^":"a;"},
fN:{"^":"a;"},
ia:{"^":"fN;",
aM:function(a,b,c){var z,y
z=b.a
z.a.a.u()
z=z.e
y=c.a
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.u()
z=z.e
y=c.b
y.a.a.u()
y=y.e
return z==null?y==null:z===y}else{z=b.a
z.a.a.u()
z=z.e
y=c.b
y.a.a.u()
y=y.e
if(z==null?y==null:z===y){z=b.b
z.a.a.u()
z=z.e
y=c.a
y.a.a.u()
y=y.e
return z==null?y==null:z===y}else return!1}}},
dH:{"^":"a;"},
dP:{"^":"a;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.G()
this.e=z}return z},
at:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.at()||!1
if(!this.a.at())y=!1
z=this.e
if(!(z==null))z.al(0)
return y},
e3:function(a,b,c,d,e){var z,y,x
H.x(d,"$isc",[F.ax],"$asc")
H.x(e,"$isc",[P.A],"$asc")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
if(a.aM(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
fQ:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.ax],x=[P.A];y>=0;--y){w=this.a.c
if(y>=w.length)return H.i(w,y)
v=w[y]
u=H.b([],z)
t=H.b([],x)
if(this.e3(a,v,y,u,t))b.fP(u)}this.a.u()
this.c.c4()
this.d.c4()
this.b.h5()
this.c.c5(new F.ia())
this.d.c5(new F.hQ())
z=this.e
if(!(z==null))z.al(0)},
fp:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aB()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aA().a)!==0)++w
if((x&$.$get$az().a)!==0)++w
if((x&$.$get$aC().a)!==0)++w
if((x&$.$get$aD().a)!==0)++w
if((x&$.$get$bs().a)!==0)++w
if((x&$.$get$bt().a)!==0)++w
if((x&$.$get$b_().a)!==0)++w
if((x&$.$get$ay().a)!==0)++w
v=b.gcf(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.v
t=H.b(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.b(y,[Z.d4])
for(r=0,q=0;q<w;++q){p=b.fn(q)
o=p.gcf(p)
C.a.T(s,q,new Z.d4(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.i(y,n)
m=y[n].fM(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.T(t,l,m[k]);++l}}r+=o}H.x(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bw(t)),35044)
y.bindBuffer(34962,null)
i=new Z.d5(new Z.ep(34962,j),s,b)
i.b=H.b([],[Z.bZ])
if(this.b.b.length!==0){x=P.A
h=H.b([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.u()
C.a.h(h,g.e)}f=Z.cI(y,34963,H.x(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.bZ(0,h.length,f))}if(this.c.b.length!==0){x=P.A
h=H.b([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.u()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.u()
C.a.h(h,g.e)}f=Z.cI(y,34963,H.x(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.bZ(1,h.length,f))}if(this.d.b.length!==0){x=P.A
h=H.b([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.u()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.u()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].c
g.a.a.u()
C.a.h(h,g.e)}f=Z.cI(y,34963,H.x(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.bZ(4,h.length,f))}return i},
i:function(a){var z=H.b([],[P.l])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.v("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.v("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.v("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.v("   "))}return C.a.w(z,"\n")},
aC:function(a){var z=this.e
if(!(z==null))z.A(a)},
Y:function(){return this.aC(null)}},
hJ:{"^":"a;a,0b",
fl:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.x(c,"$isc",[F.ax],"$asc")
z=H.b([],[F.aj])
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
C.a.h(z,F.bX(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bX(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bX(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bX(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
c5:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.k(0,w)
for(u=w-1;u>=0;--u){t=x.d.k(0,u)
if(a.aM(0,v,t)){v.aI()
break}}}}},
c4:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
x=y[z]
y=x.gfs(x)
if(y)x.aI()}},
at:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].bO())x=!1
return x},
bN:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].bM())x=!1
return x},
i:function(a){return this.K()},
v:function(a){var z,y,x,w
z=H.b([],[P.l])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
K:function(){return this.v("")}},
hK:{"^":"a;a,0b",
gl:function(a){return this.b.length},
c5:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.k(0,w)
for(u=w-1;u>=0;--u){t=x.c.k(0,u)
if(a.aM(0,v,t)){v.aI()
break}}}}},
c4:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
x=y[z]
y=J.N(x.a,x.b)
if(y)x.aI()}},
i:function(a){return this.K()},
v:function(a){var z,y,x,w
z=H.b([],[P.l])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.i(w,x)
C.a.h(z,w[x].v(a+(""+x+". ")))}return C.a.w(z,"\n")},
K:function(){return this.v("")}},
hL:{"^":"a;a,0b",
gl:function(a){return this.b.length},
h5:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aI()}},
i:function(a){return this.K()},
v:function(a){var z,y,x,w
z=H.b([],[P.l])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
K:function(){return this.v("")}},
ax:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cM:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cH(this.cx,x,u,z,y,w,v,a,t)},
fM:function(a){var z,y
z=J.J(a)
if(z.p(a,$.$get$aB())){z=this.f
y=[P.v]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$aA())){z=this.r
y=[P.v]
if(z==null)return H.b([0,1,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$az())){z=this.x
y=[P.v]
if(z==null)return H.b([0,0,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$aC())){z=this.y
y=[P.v]
if(z==null)return H.b([0,0],y)
else return H.b([z.a,z.b],y)}else if(z.p(a,$.$get$aD())){z=this.z
y=[P.v]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$bs())){z=this.Q
y=[P.v]
if(z==null)return H.b([1,1,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(z.p(a,$.$get$bt())){z=this.Q
y=[P.v]
if(z==null)return H.b([1,1,1,1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else if(z.p(a,$.$get$b_()))return H.b([this.ch],[P.v])
else if(z.p(a,$.$get$ay())){z=H.b([-1,-1,-1,-1],[P.v])
return z}else return H.b([],[P.v])},
bO:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.H(0,0,0)
this.d.J(0,new F.iG(z))
z=z.a
this.r=z.q(0,Math.sqrt(z.B(z)))
z=this.a
if(z!=null){z.Y()
z=this.a.e
if(!(z==null))z.al(0)}return!0},
bM:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.H(0,0,0)
this.d.J(0,new F.iF(z))
z=z.a
this.x=z.q(0,Math.sqrt(z.B(z)))
z=this.a
if(z!=null){z.Y()
z=this.a.e
if(!(z==null))z.al(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
v:function(a){var z,y,x
z=H.b([],[P.l])
C.a.h(z,C.i.ak(J.ah(this.e),0))
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
C.a.h(z,V.P(this.ch,3,0))
C.a.h(z,"-")
x=C.a.w(z,", ")
return a+"{"+x+"}"},
K:function(){return this.v("")},
n:{
cH:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ax()
y=new F.iE(z)
y.b=H.b([],[F.dH])
z.b=y
y=new F.iA(z)
x=[F.dv]
y.b=H.b([],x)
y.c=H.b([],x)
z.c=y
y=new F.ix(z)
x=[F.aj]
y.b=H.b([],x)
y.c=H.b([],x)
y.d=H.b([],x)
z.d=y
h=$.$get$em()
z.e=0
y=$.$get$aB()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aA().a)!==0?e:null
z.x=(x&$.$get$az().a)!==0?b:null
z.y=(x&$.$get$aC().a)!==0?f:null
z.z=(x&$.$get$aD().a)!==0?g:null
z.Q=(x&$.$get$en().a)!==0?c:null
z.ch=(x&$.$get$b_().a)!==0?i:0
z.cx=(x&$.$get$ay().a)!==0?a:null
return z}}},
iG:{"^":"u:5;a",
$1:function(a){var z,y
H.k(a,"$isaj")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
iF:{"^":"u:5;a",
$1:function(a){var z,y
H.k(a,"$isaj")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
iw:{"^":"a;a,0b,0c",
u:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.i(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z=b.a
if(z!=null){if(z===this.a)return!1
throw H.f(P.q("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
b.a=this.a
C.a.h(z,b)
this.a.Y()
return!0},
gl:function(a){return this.c.length},
at:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].bO()
return!0},
bN:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].bM()
return!0},
fq:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.q(0,Math.sqrt(u*u+t*t+s*s))
if(!J.N(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.A(null)}}}}return!0},
i:function(a){return this.K()},
v:function(a){var z,y,x,w
this.u()
z=H.b([],[P.l])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
K:function(){return this.v("")}},
ix:{"^":"a;a,0b,0c,0d",
gl:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.i(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.i(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.i(z,b)
return z[b]},
J:function(a,b){H.d(b,{func:1,ret:-1,args:[F.aj]})
C.a.J(this.b,b)
C.a.J(this.c,new F.iy(this,b))
C.a.J(this.d,new F.iz(this,b))},
i:function(a){return this.K()},
v:function(a){var z,y,x,w
z=H.b([],[P.l])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
K:function(){return this.v("")}},
iy:{"^":"u:5;a,b",
$1:function(a){H.k(a,"$isaj")
if(!J.N(a.a,this.a))this.b.$1(a)}},
iz:{"^":"u:5;a,b",
$1:function(a){var z
H.k(a,"$isaj")
z=this.a
if(!J.N(a.a,z)&&!J.N(a.b,z))this.b.$1(a)}},
iA:{"^":"a;a,0b,0c",
gl:function(a){return this.b.length+this.c.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.i(z,x)
return z[x]}else{if(b<0)return H.i(z,b)
return z[b]}},
i:function(a){return this.K()},
v:function(a){var z,y,x,w
z=H.b([],[P.l])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
K:function(){return this.v("")}},
iC:{"^":"a;"},
iB:{"^":"iC;",
aM:function(a,b,c){return J.N(b.f,c.f)}},
iD:{"^":"a;"},
hf:{"^":"iD;",
fP:function(a){var z,y,x,w,v,u,t,s
H.x(a,"$isc",[F.ax],"$asc")
z=new V.H(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.H(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.q(0,Math.sqrt(z.B(z)))
for(y=a.length,w=z.a,v=z.b,u=z.c,u=w*w+v*v+u*u,x=0;x<a.length;a.length===y||(0,H.z)(a),++x){t=a[x]
s=z.q(0,Math.sqrt(u))
if(!J.N(t.r,s)){t.r=s
w=t.a
if(w!=null){w=w.e
if(!(w==null))w.A(null)}}}return}},
iE:{"^":"a;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.K()},
v:function(a){var z,y,x,w
z=H.b([],[P.l])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
K:function(){return this.v("")}}}],["","",,O,{"^":"",h_:{"^":"cC;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gt:function(){var z=this.dy
if(z==null){z=D.G()
this.dy=z}return z},
a4:[function(a){var z
H.k(a,"$isp")
z=this.dy
if(!(z==null))z.A(a)},function(){return this.a4(null)},"hu","$1","$0","geh",0,2,0],
eL:[function(a){H.k(a,"$isp")
this.a=null
this.a4(a)},function(){return this.eL(null)},"hP","$1","$0","geK",0,2,0],
hr:[function(a,b){var z=V.ap
z=new D.c_(a,H.x(b,"$ish",[z],"$ash"),this,[z])
z.b=!0
this.a4(z)},"$2","gee",8,0,20],
hs:[function(a,b){var z=V.ap
z=new D.c0(a,H.x(b,"$ish",[z],"$ash"),this,[z])
z.b=!0
this.a4(z)},"$2","gef",8,0,20],
cr:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.f.V(z.e.length+3,4)*4
x=C.f.V(z.f.length+3,4)*4
w=C.f.V(z.r.length+3,4)*4
v=C.f.V(z.x.length+3,4)*4
u=C.f.V(z.y.length+3,4)*4
t=C.f.V(z.z.length+3,4)*4
s=C.f.V(this.e.a.length+3,4)*4
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
a=q===C.c||p===C.c||o===C.c||n===C.c||m===C.c||l===C.c||k===C.c||j===C.c||i===C.c
a0=q===C.d||p===C.d||o===C.d||n===C.d||m===C.d||l===C.d||k===C.d||j===C.d||i===C.d
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$aB()
if(c){z=$.$get$aA()
a6=new Z.aZ(a6.a|z.a)}if(b){z=$.$get$az()
a6=new Z.aZ(a6.a|z.a)}if(a){z=$.$get$aC()
a6=new Z.aZ(a6.a|z.a)}if(a0){z=$.$get$aD()
a6=new Z.aZ(a6.a|z.a)}if(a2){z=$.$get$ay()
a6=new Z.aZ(a6.a|z.a)}return new A.h4(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
N:function(a,b){H.x(a,"$isc",[T.dW],"$asc")},
ab:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.an(z,z.length,0,[H.y(z,0)]);z.D();){y=z.d
x=new V.H(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.c7(x)}}},
h7:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
z=this.a
if(z==null){z=this.cr()
y=a.fr.k(0,z.ai)
if(y==null){y=A.h0(z,a.a)
x=y.b
if(x.length===0)H.r(P.q("May not cache a shader with no name."))
if(a.fr.cL(0,x))H.r(P.q('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.T(0,x,y)}this.a=y
b.e=null
z=y}w=z.x
v=w.az
z=b.e
if(!(z instanceof Z.d5)){b.e=null
z=null}if(z==null||!z.d.p(0,v)){z=w.r1
if(z)b.d.at()
u=w.r2
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.d.bN()
t.a.bN()
t=t.e
if(!(t==null))t.al(0)}t=w.ry
if(t){s=b.d
r=s.e
if(!(r==null))++r.c
s.a.fq()
s=s.e
if(!(s==null))s.al(0)}q=b.d.fp(new Z.iH(a.a),v)
q.aA($.$get$aB()).e=this.a.y.c
if(z)q.aA($.$get$aA()).e=this.a.Q.c
if(u)q.aA($.$get$az()).e=this.a.z.c
if(w.rx)q.aA($.$get$aC()).e=this.a.ch.c
if(t)q.aA($.$get$aD()).e=this.a.cx.c
if(w.x1)q.aA($.$get$ay()).e=this.a.cy.c
b.e=q}z=T.dW
p=H.b([],[z])
u=this.a
a.a.useProgram(u.e)
u.f.fC()
if(w.fx){u=this.a
t=a.dx
t=t.gR(t)
u=u.db
u.toString
u.a7(t.a1(0,!0))}if(w.fy){u=this.a
t=a.cx
if(t==null){t=a.db
t=t.gR(t)
s=a.dx
s=t.j(0,s.gR(s))
a.cx=s
t=s}u=u.dx
u.toString
u.a7(t.a1(0,!0))}u=this.a
t=a.ch
if(t==null){t=a.gh3()
s=a.dx
s=t.j(0,s.gR(s))
a.ch=s
t=s}u=u.fr
u.toString
u.a7(t.a1(0,!0))
if(w.x2){u=this.a
t=this.b
u=u.go
u.toString
u.a7(t.a1(0,!0))}if(w.y1){u=this.a
t=this.c
u=u.id
u.toString
u.a7(t.a1(0,!0))}if(w.y2){u=this.a
t=this.d
u=u.k1
u.toString
u.a7(C.y.a1(t,!0))}if(w.ay>0){o=this.e.a.length
u=this.a.k2
u.a.uniform1i(u.d,o)
for(u=[P.v],n=0;n<o;++n){t=this.a
s=this.e.a
if(n>=s.length)return H.i(s,n)
s=s[n]
t.toString
H.k(s,"$isap")
t=t.k3
if(n>=t.length)return H.i(t,n)
t=t[n]
m=new Float32Array(H.bw(H.x(s.a1(0,!0),"$isc",u,"$asc")))
t.a.uniformMatrix4fv(t.d,!1,m)}}switch(w.a){case C.b:break
case C.h:u=this.a
t=this.f.f
u=u.k4
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.N(p,this.f.d)
u=this.a
t=this.f.d
u.a5(u.r1,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.N(p,this.f.e)
u=this.a
t=this.f.e
u.Z(u.r2,u.rx,t)
t=this.a
u=this.f.f
t=t.k4
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}if(w.k2){switch(w.b){case C.b:break
case C.h:u=this.a
t=this.r.f
u=u.ry
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.N(p,this.r.d)
u=this.a
t=this.r.d
u.a5(u.x1,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.N(p,this.r.e)
u=this.a
t=this.r.e
u.Z(u.x2,u.y1,t)
t=this.a
u=this.r.f
t=t.ry
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.c){case C.b:break
case C.h:u=this.a
t=this.x.f
u=u.y2
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.N(p,this.x.d)
u=this.a
t=this.x.d
u.a5(u.ay,u.az,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.N(p,this.x.e)
u=this.a
t=this.x.e
u.Z(u.ai,u.az,t)
t=this.a
u=this.x.f
t=t.y2
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.d){case C.b:break
case C.h:u=this.a
t=this.y.f
u=u.b5
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
break
case C.c:this.N(p,this.y.d)
u=this.a
t=this.y.d
u.a5(u.cP,u.b6,t)
t=this.a
u=this.y.f
t=t.b5
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break
case C.d:this.N(p,this.y.e)
u=this.a
t=this.y.e
u.Z(u.cQ,u.b6,t)
t=this.a
u=this.y.f
t=t.b5
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
break}switch(w.e){case C.b:break
case C.h:u=this.a
t=this.z.f
u=u.b7
u.toString
s=t.a
r=t.b
t=t.c
u.a.uniform3f(u.d,s,r,t)
t=this.a
r=this.z.ch
t=t.b9
t.a.uniform1f(t.d,r)
break
case C.c:this.N(p,this.z.d)
u=this.a
t=this.z.d
u.a5(u.cR,u.b8,t)
t=this.a
u=this.z.f
t=t.b7
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.b9
u.a.uniform1f(u.d,r)
break
case C.d:this.N(p,this.z.e)
u=this.a
t=this.z.e
u.Z(u.cS,u.b8,t)
t=this.a
u=this.z.f
t=t.b7
t.toString
s=u.a
r=u.b
u=u.c
t.a.uniform3f(t.d,s,r,u)
u=this.a
r=this.z.ch
u=u.b9
u.a.uniform1f(u.d,r)
break}if(w.z>0){o=this.dx.e.length
u=this.a.d2
u.a.uniform1i(u.d,o)
u=a.db
l=u.gR(u)
for(u=this.dx.e,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.z)(u),++j){i=u[j]
s=this.a.bS
if(k>=s.length)return H.i(s,k)
h=s[k]
s=l.c7(i.a)
r=s.a
g=s.b
f=s.c
f=s.q(0,Math.sqrt(r*r+g*g+f*f))
g=h.b
g.a.uniform3f(g.d,f.a,f.b,f.c)
f=i.c
g=h.c
g.a.uniform3f(g.d,f.a,f.b,f.c);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.d3
u.a.uniform1i(u.d,o)
u=a.db
l=u.gR(u)
for(u=this.dx.f,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.z)(u),++j){i=u[j]
s=this.a.bT
if(k>=s.length)return H.i(s,k)
h=s[k]
s=i.gaP(i)
r=h.b
g=s.gc9(s)
f=s.gca(s)
s=s.gcb(s)
r.a.uniform3f(r.d,g,f,s)
s=l.aU(i.gaP(i))
f=h.c
f.a.uniform3f(f.d,s.a,s.b,s.c)
s=i.ga6(i)
f=h.d
g=s.gbi()
r=s.gaV()
s=s.gb3()
f.a.uniform3f(f.d,g,r,s)
s=i.gbH()
r=h.e
r.a.uniform1f(r.d,s)
s=i.gbI()
r=h.f
r.a.uniform1f(r.d,s)
s=i.gbJ()
r=h.r
r.a.uniform1f(r.d,s);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.d4
u.a.uniform1i(u.d,o)
u=a.db
l=u.gR(u)
for(u=this.dx.r,t=u.length,k=0,j=0;j<u.length;u.length===t||(0,H.z)(u),++j){i=u[j]
s=this.a.bU
if(k>=s.length)return H.i(s,k)
h=s[k]
s=i.gaP(i)
r=h.b
g=s.gc9(s)
f=s.gca(s)
s=s.gcb(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbR(i).hV()
f=h.c
g=s.gav(s)
r=s.gaw(s)
s=s.gax()
f.a.uniform3f(f.d,g,r,s)
s=l.aU(i.gaP(i))
r=h.d
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.ga6(i)
r=h.e
g=s.gbi()
f=s.gaV()
s=s.gb3()
r.a.uniform3f(r.d,g,f,s)
s=i.ghU()
f=h.f
f.a.uniform1f(f.d,s)
s=i.ghT()
f=h.r
f.a.uniform1f(f.d,s)
s=i.gbH()
f=h.x
f.a.uniform1f(f.d,s)
s=i.gbI()
f=h.y
f.a.uniform1f(f.d,s)
s=i.gbJ()
f=h.z
f.a.uniform1f(f.d,s);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.d5
u.a.uniform1i(u.d,o)
u=a.db
l=u.gR(u)
for(u=this.dx.x,t=u.length,s=[z],k=0,j=0;j<u.length;u.length===t||(0,H.z)(u),++j){i=u[j]
r=this.a.bV
if(k>=r.length)return H.i(r,k)
h=r[k]
r=i.gaR()
H.x(p,"$isc",s,"$asc")
if(!C.a.b4(p,r)){r.saJ(0,p.length)
C.a.h(p,r)}r=i.gbR(i)
g=h.d
f=r.gav(r)
e=r.gaw(r)
r=r.gax()
g.a.uniform3f(g.d,f,e,r)
r=i.gbj()
e=h.b
f=r.gav(r)
g=r.gaw(r)
r=r.gax()
e.a.uniform3f(e.d,f,g,r)
r=i.gaQ(i)
g=h.c
f=r.gav(r)
e=r.gaw(r)
r=r.gax()
g.a.uniform3f(g.d,f,e,r)
r=l.c7(i.gbR(i))
e=r.a
f=r.b
g=r.c
g=r.q(0,Math.sqrt(e*e+f*f+g*g))
f=h.e
f.a.uniform3f(f.d,g.a,g.b,g.c)
g=i.ga6(i)
f=h.f
e=g.gbi()
r=g.gaV()
g=g.gb3()
f.a.uniform3f(f.d,e,r,g)
g=i.gaR()
r=g.gaK(g)
if(!r){r=h.x
r.a.uniform1i(r.d,1)}else{r=h.r
f=g.gaK(g)
e=r.a
r=r.d
if(!f)e.uniform1i(r,0)
else e.uniform1i(r,g.gaJ(g))
r=h.x
r.a.uniform1i(r.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.d6
u.a.uniform1i(u.d,o)
u=a.db
l=u.gR(u)
for(u=this.dx.y,t=u.length,s=[P.v],r=[z],k=0,j=0;j<u.length;u.length===t||(0,H.z)(u),++j){i=u[j]
g=this.a.bW
if(k>=g.length)return H.i(g,k)
h=g[k]
g=i.gaR()
H.x(p,"$isc",r,"$asc")
if(!C.a.b4(p,g)){g.saJ(0,p.length)
C.a.h(p,g)}d=l.j(0,i.gR(i))
g=i.gR(i).aU(new V.a5(0,0,0))
f=h.b
e=g.gc9(g)
c=g.gca(g)
g=g.gcb(g)
f.a.uniform3f(f.d,e,c,g)
g=d.aU(new V.a5(0,0,0))
c=h.c
c.a.uniform3f(c.d,g.a,g.b,g.c)
g=d.da(0)
c=h.d
m=new Float32Array(H.bw(H.x(new V.c3(g.a,g.b,g.c,g.e,g.f,g.r,g.y,g.z,g.Q).a1(0,!0),"$isc",s,"$asc")))
c.a.uniformMatrix3fv(c.d,!1,m)
c=i.ga6(i)
g=h.e
e=c.gbi()
f=c.gaV()
c=c.gb3()
g.a.uniform3f(g.d,e,f,c)
c=i.gaR()
g=c.gaK(c)
if(!g){g=h.r
g.a.uniform1i(g.d,1)}else{g=h.f
f=c.gaK(c)
e=g.a
g=g.d
if(!f)e.uniform1i(g,0)
else e.uniform1i(g,c.gaJ(c))
g=h.r
g.a.uniform1i(g.d,0)}g=i.gbH()
f=h.x
f.a.uniform1f(f.d,g)
g=i.gbI()
f=h.y
f.a.uniform1f(f.d,g)
g=i.gbJ()
f=h.z
f.a.uniform1f(f.d,g);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.d7
u.a.uniform1i(u.d,o)
u=a.db
l=u.gR(u)
for(u=this.dx.z,t=u.length,z=[z],k=0,j=0;j<u.length;u.length===t||(0,H.z)(u),++j){i=u[j]
s=this.a.bX
if(k>=s.length)return H.i(s,k)
h=s[k]
s=i.gaR()
H.x(p,"$isc",z,"$asc")
if(!C.a.b4(p,s)){s.saJ(0,p.length)
C.a.h(p,s)}s=i.gaP(i)
r=h.b
g=s.gc9(s)
f=s.gca(s)
s=s.gcb(s)
r.a.uniform3f(r.d,g,f,s)
s=i.gbR(i)
f=h.c
g=s.gav(s)
r=s.gaw(s)
s=s.gax()
f.a.uniform3f(f.d,g,r,s)
s=i.gbj()
r=h.d
g=s.gav(s)
f=s.gaw(s)
s=s.gax()
r.a.uniform3f(r.d,g,f,s)
s=i.gaQ(i)
f=h.e
g=s.gav(s)
r=s.gaw(s)
s=s.gax()
f.a.uniform3f(f.d,g,r,s)
s=l.aU(i.gaP(i))
r=h.f
r.a.uniform3f(r.d,s.a,s.b,s.c)
s=i.gaR()
r=s.gaK(s)
if(!r){s=h.x
s.a.uniform1i(s.d,1)}else{r=h.r
g=s.gaK(s)
f=r.a
r=r.d
if(!g)f.uniform1i(r,0)
else f.uniform1i(r,s.gaJ(s))
s=h.x
s.a.uniform1i(s.d,0)}s=i.ga6(i)
r=h.y
g=s.gbi()
f=s.gaV()
s=s.gb3()
r.a.uniform3f(r.d,g,f,s)
s=i.gi_()
f=h.z
f.a.uniform1f(f.d,s)
s=i.gi0()
f=h.Q
f.a.uniform1f(f.d,s)
s=i.gbH()
f=h.ch
f.a.uniform1f(f.d,s)
s=i.gbI()
f=h.cx
f.a.uniform1f(f.d,s)
s=i.gbJ()
f=h.cy
f.a.uniform1f(f.d,s);++k}}}switch(w.f){case C.b:break
case C.h:break
case C.c:this.N(p,this.Q.d)
z=this.a
u=this.Q.d
z.a5(z.cT,z.ba,u)
break
case C.d:this.N(p,this.Q.e)
z=this.a
u=this.Q.e
z.Z(z.cU,z.ba,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db
u=u.gR(u).da(0)
a.Q=u}z=z.fy
z.toString
z.a7(u.a1(0,!0))}if(w.dy){this.N(p,this.ch)
z=this.a
u=this.ch
z.Z(z.cV,z.cW,u)
switch(w.r){case C.b:break
case C.h:z=this.a
u=this.cx.f
z=z.bb
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
break
case C.c:this.N(p,this.cx.d)
z=this.a
u=this.cx.d
z.a5(z.cX,z.bc,u)
u=this.a
z=this.cx.f
u=u.bb
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break
case C.d:this.N(p,this.cx.e)
z=this.a
u=this.cx.e
z.Z(z.cY,z.bc,u)
u=this.a
z=this.cx.f
u=u.bb
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
break}switch(w.x){case C.b:break
case C.h:z=this.a
u=this.cy.f
z=z.be
z.toString
t=u.a
s=u.b
u=u.c
z.a.uniform3f(z.d,t,s,u)
u=this.a
s=this.cy.ch
u=u.bd
u.a.uniform1f(u.d,s)
break
case C.c:this.N(p,this.cy.d)
z=this.a
u=this.cy.d
z.a5(z.cZ,z.bf,u)
u=this.a
z=this.cy.f
u=u.be
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bd
z.a.uniform1f(z.d,s)
break
case C.d:this.N(p,this.cy.e)
z=this.a
u=this.cy.e
z.Z(z.d_,z.bf,u)
u=this.a
z=this.cy.f
u=u.be
u.toString
t=z.a
s=z.b
z=z.c
u.a.uniform3f(u.d,t,s,z)
z=this.a
s=this.cy.ch
z=z.bd
z.a.uniform1f(z.d,s)
break}}z=w.y
u=z!==C.b
if(u){switch(z){case C.b:break
case C.h:z=this.a
t=this.db.f
z=z.bg
z.a.uniform1f(z.d,t)
break
case C.c:this.N(p,this.db.d)
z=this.a
t=this.db.d
z.a5(z.d0,z.bh,t)
t=this.a
z=this.db.f
t=t.bg
t.a.uniform1f(t.d,z)
break
case C.d:this.N(p,this.db.e)
z=this.a
t=this.db.e
z.Z(z.d1,z.bh,t)
t=this.a
z=this.db.f
t=t.bg
t.a.uniform1f(t.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(n=0;n<p.length;++n)p[n].b2(a)
z=b.e
z.b2(a)
z.aD(a)
z.dq(a)
if(u)a.a.disable(3042)
for(n=0;n<p.length;++n)p[n].dq(a)
z=this.a
z.toString
a.a.useProgram(null)
z.f.fB()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cr().ai}},h2:{"^":"cw;0f,a,b,0c,0d,0e"},cw:{"^":"a;",
aZ:["dC",function(){}]},h3:{"^":"cw;a,b,0c,0d,0e"},aV:{"^":"cw;0f,a,b,0c,0d,0e",
cC:function(a){var z,y
if(!J.N(this.f,a)){z=this.f
this.f=a
y=new D.L(this.b+".color",z,a,this,[V.U])
y.b=!0
this.a.a4(y)}},
aZ:["bm",function(){this.dC()
this.cC(new V.U(1,1,1))}],
sa6:function(a,b){var z
if(this.c===C.b){this.c=C.h
this.aZ()
z=this.a
z.a=null
z.a4(null)}this.cC(b)}},h5:{"^":"aV;0ch,0f,a,b,0c,0d,0e",
eN:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.L(this.b+".refraction",y,a,this,[P.v])
z.b=!0
this.a.a4(z)}},
aZ:function(){this.bm()
this.eN(1)}},h6:{"^":"aV;0ch,0f,a,b,0c,0d,0e",
bE:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.L(this.b+".shininess",y,a,this,[P.v])
z.b=!0
this.a.a4(z)}},
aZ:function(){this.bm()
this.bE(100)}},cC:{"^":"a;"}}],["","",,T,{"^":"",dW:{"^":"cj;"},hZ:{"^":"a;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",f4:{"^":"a;",
aL:function(a,b){return!0},
i:function(a){return"all"},
$isbK:1},bK:{"^":"a;"},dB:{"^":"a;",
aL:["dB",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)if(z[x].aL(0,b))return!0
return!1}],
i:["ci",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbK:1},bi:{"^":"dB;0a",
aL:function(a,b){return!this.dB(0,b)},
i:function(a){return"!["+this.ci(0)+"]"}},hH:{"^":"a;0a",
dG:function(a){var z,y
if(a.a.length<=0)throw H.f(P.q("May not create a SetMatcher with zero characters."))
z=new H.aU(0,0,[P.A,P.a8])
for(y=new H.dy(a,a.gl(a),0,[H.aG(a,"t",0)]);y.D();)z.T(0,y.d,!0)
this.a=z},
aL:function(a,b){return this.a.cL(0,b)},
i:function(a){var z=this.a
return P.cB(new H.dx(z,[H.y(z,0)]),0,null)},
$isbK:1,
n:{
a0:function(a){var z=new V.hH()
z.dG(a)
return z}}},dR:{"^":"a;a,b,0c,0d",
gfR:function(a){return this.b},
w:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.e2(this.a.G(0,b))
w.a=H.b([],[V.bK])
w.c=!1
C.a.h(this.c,w)
return w},
fD:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.aL(0,a))return w}return},
i:function(a){return this.b}},e_:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.eZ(this.b,"\n","\\n")
y=H.eZ(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},e0:{"^":"a;a,b,0c",
i:function(a){return this.b}},i6:{"^":"a;0a,0b,0c",
G:function(a,b){var z=this.a.k(0,b)
if(z==null){z=new V.dR(this,b)
z.c=H.b([],[V.e2])
this.a.T(0,b,z)}return z},
aS:function(a){var z,y
z=this.b.k(0,a)
if(z==null){z=new V.e0(this,a)
y=P.l
z.c=new H.aU(0,0,[y,y])
this.b.T(0,a,z)}return z},
hh:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.b([],[V.e_])
y=this.c
x=[P.A]
w=H.b([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.aX(a,t)
r=y.fD(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cB(w,0,null)
throw H.f(P.q("Untokenizable string [state: "+y.gfR(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.b([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cB(w,0,null)
p=y.d
o=p.c.k(0,q)
u=new V.e_(o==null?p.b:o,q,t)}++t}}}},e2:{"^":"dB;b,0c,0a",
i:function(a){return this.b.b+": "+this.ci(0)}}}],["","",,X,{"^":"",d7:{"^":"a;",$isav:1},fB:{"^":"dU;0a,0b,0c,0d,0e,0f,0r,0x",
gt:function(){var z=this.x
if(z==null){z=D.G()
this.x=z}return z}},hi:{"^":"a;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.G()
this.e=z}return z},
aF:[function(a){var z
H.k(a,"$isp")
z=this.e
if(!(z==null))z.A(a)},function(){return this.aF(null)},"hk","$1","$0","gck",0,2,0],
sde:function(a){var z,y,x
if(!J.N(this.a,a)){z=this.a
if(z!=null){z=z.gt()
z.toString
y=H.d(this.gck(),{func:1,ret:-1,args:[D.p]})
C.a.O(z.a,y)}x=this.a
this.a=a
if(a!=null){z=a.gt()
z.toString
y=H.d(this.gck(),{func:1,ret:-1,args:[D.p]})
C.a.h(z.a,y)}z=new D.L("mover",x,this.a,this,[U.a4])
z.b=!0
this.aF(z)}},
$isav:1,
$isd7:1},dU:{"^":"a;"}}],["","",,V,{"^":"",
kF:function(a){P.i5(C.w,new V.kG(a))},
kG:{"^":"u:36;a",
$1:function(a){H.k(a,"$isaX")
P.cY(C.e.dn(this.a.gfF(),2)+" fps")}},
hM:{"^":"a;0a,0b",
dI:function(a,b){var z,y,x,w,v,u,t
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
t=W.a9
W.Y(z,"scroll",H.d(new V.hP(x),{func:1,ret:-1,args:[t]}),!1,t)},
fm:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.x(a,"$isc",[P.l],"$asc")
this.eS()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.hh(C.a.fK(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
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
if(H.eY(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.i(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.jS(C.G,s,C.q,!1)
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
eS:function(){var z,y,x,w
if(this.b!=null)return
z=new V.i6()
y=P.l
z.a=new H.aU(0,0,[y,V.dR])
z.b=new H.aU(0,0,[y,V.e0])
z.c=z.G(0,"Start")
y=z.G(0,"Start").w(0,"Bold")
x=V.a0(new H.Z("*"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Bold").w(0,"Bold")
x=new V.bi()
w=[V.bK]
x.a=H.b([],w)
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
x=new V.bi()
x.a=H.b([],w)
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
x=new V.bi()
x.a=H.b([],w)
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
y=new V.bi()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.a0(new H.Z("|]"))
C.a.h(y.a,x)
x=z.G(0,"LinkTail").w(0,"LinkEnd")
y=V.a0(new H.Z("]"))
C.a.h(x.a,y)
x.c=!0
x=z.G(0,"LinkTail").w(0,"LinkTail")
y=new V.bi()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.a0(new H.Z("|]"))
C.a.h(y.a,x)
C.a.h(z.G(0,"Start").w(0,"Other").a,new V.f4())
x=z.G(0,"Other").w(0,"Other")
y=new V.bi()
y.a=H.b([],w)
C.a.h(x.a,y)
x=V.a0(new H.Z("*_`["))
C.a.h(y.a,x)
x=z.G(0,"BoldEnd")
x.d=x.a.aS("Bold")
x=z.G(0,"ItalicEnd")
x.d=x.a.aS("Italic")
x=z.G(0,"CodeEnd")
x.d=x.a.aS("Code")
x=z.G(0,"LinkEnd")
x.d=x.a.aS("Link")
x=z.G(0,"Other")
x.d=x.a.aS("Other")
this.b=z},
n:{
hN:function(a,b){var z=new V.hM()
z.dI(a,!0)
return z}}},
hP:{"^":"u:37;a",
$1:function(a){P.dY(C.l,new V.hO(this.a))}},
hO:{"^":"u:2;a",
$0:function(){var z,y,x
z=C.e.a0(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}}}],["","",,Q,{"^":"",
eU:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=V.hN("Test 009",!0)
y=W.d8(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
z.fm(H.b(["Another test of the Material Lighting shader with solid color and ","a directional lighting. The light and object don't move but the camera can be ","moved around the object."],[P.l]))
x=document.getElementById("testCanvas")
if(x==null)H.r(P.q("Failed to find an element with the identifier, testCanvas."))
w=E.i3(x,!0,!0,!0,!1)
v=new E.aI()
v.a=""
v.b=!0
z=E.aI
u=O.co(z)
v.y=u
u.aW(v.gfS(),v.gfU())
v.z=null
v.Q=null
v.ch=null
v.cx=null
v.cy=null
v.db=null
v.dx=null
v.dy=null
v.fr=null
v.fx=null
v.sce(0,null)
v.sce(0,F.kJ(30,1,15,0.5))
t=new O.h_()
u=O.co(V.ap)
t.e=u
u.aW(t.gee(),t.gef())
u=new O.aV(t,"emission")
u.c=C.b
u.f=new V.U(0,0,0)
t.f=u
u=new O.aV(t,"ambient")
u.c=C.b
u.f=new V.U(0,0,0)
t.r=u
u=new O.aV(t,"diffuse")
u.c=C.b
u.f=new V.U(0,0,0)
t.x=u
u=new O.aV(t,"invDiffuse")
u.c=C.b
u.f=new V.U(0,0,0)
t.y=u
u=new O.h6(t,"specular")
u.c=C.b
u.f=new V.U(0,0,0)
u.ch=100
t.z=u
u=new O.h3(t,"bump")
u.c=C.b
t.Q=u
t.ch=null
u=new O.aV(t,"reflect")
u.c=C.b
u.f=new V.U(0,0,0)
t.cx=u
u=new O.h5(t,"refract")
u.c=C.b
u.f=new V.U(0,0,0)
u.ch=1
t.cy=u
u=new O.h2(t,"alpha")
u.c=C.b
u.f=1
t.db=u
u=new D.fM()
u.bn(D.V)
u.e=H.b([],[D.bV])
u.f=H.b([],[D.hk])
u.r=H.b([],[D.hR])
u.x=H.b([],[D.i_])
u.y=H.b([],[D.i0])
u.z=H.b([],[D.i1])
u.Q=null
u.ch=null
u.cd(u.ged(),u.gez(),u.geB())
t.dx=u
s=u.Q
if(s==null){s=D.G()
u.Q=s
u=s}else u=s
s={func:1,ret:-1,args:[D.p]}
r=H.d(t.geK(),s)
C.a.h(u.a,r)
r=t.dx
u=r.ch
if(u==null){u=D.G()
r.ch=u}r=H.d(t.geh(),s)
C.a.h(u.a,r)
t.dy=null
r=t.dx
u=U.dc(V.dC(new V.a5(0,0,0),new V.H(0,1,0),new V.H(-1,-1,-1)))
q=new V.U(1,1,1)
p=new D.bV()
p.c=new V.U(1,1,1)
p.a=new V.H(0,0,1)
o=p.b
p.b=u
u=u.gt()
u.toString
n=H.d(p.gdN(),s)
C.a.h(u.a,n)
u=new D.L("mover",o,p.b,p,[U.a4])
u.b=!0
p.an(u)
if(!p.c.p(0,q)){o=p.c
p.c=q
u=new D.L("color",o,q,p,[V.U])
u.b=!0
p.an(u)}r.h(0,p)
t.f.sa6(0,new V.U(0,0,0))
u=t.r
u.sa6(0,new V.U(0,0,1))
u=t.x
u.sa6(0,new V.U(0,1,0))
u=t.z
u.sa6(0,new V.U(1,0,0))
u=t.z
if(u.c===C.b){u.c=C.h
u.bm()
u.bE(100)
r=u.a
r.a=null
r.a4(null)}u.bE(10)
m=new U.dp()
m.bn(U.a4)
m.aW(m.gec(),m.geA())
m.e=null
m.f=V.bL()
m.r=0
u=w.r
r=new U.is()
p=U.cp()
p.sc8(0,!0)
p.sc_(6.283185307179586)
p.sc1(0)
p.sW(0,0)
p.sc0(100)
p.sL(0)
p.sbQ(0.5)
r.b=p
p=p.gt()
p.toString
n=H.d(r.gao(),s)
C.a.h(p.a,n)
p=U.cp()
p.sc8(0,!0)
p.sc_(6.283185307179586)
p.sc1(0)
p.sW(0,0)
p.sc0(100)
p.sL(0)
p.sbQ(0.5)
r.c=p
C.a.h(p.gt().a,n)
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
l=new X.ar(!1,!1,!1)
o=r.d
r.d=l
p=[X.ar]
n=new D.L("modifiers",o,l,r,p)
n.b=!0
r.I(n)
n=r.f
if(n!==!1){r.f=!1
n=new D.L("invertX",n,!1,r,[P.a8])
n.b=!0
r.I(n)}n=r.r
if(n!==!0){r.r=!0
n=new D.L("invertY",n,!0,r,[P.a8])
n.b=!0
r.I(n)}r.aH(u)
m.h(0,r)
u=w.r
r=new U.ir()
n=U.cp()
n.sc8(0,!0)
n.sc_(6.283185307179586)
n.sc1(0)
n.sW(0,0)
n.sc0(100)
n.sL(0)
n.sbQ(0.2)
r.b=n
n=n.gt()
n.toString
k=H.d(r.gao(),s)
C.a.h(n.a,k)
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
l=new X.ar(!0,!1,!1)
o=r.c
r.c=l
n=new D.L("modifiers",o,l,r,p)
n.b=!0
r.I(n)
r.aH(u)
m.h(0,r)
u=w.r
r=new U.it()
r.c=0.01
r.d=0
r.e=0
l=new X.ar(!1,!1,!1)
r.b=l
p=new D.L("modifiers",null,l,r,p)
p.b=!0
r.I(p)
r.aH(u)
m.h(0,r)
m.h(0,U.dc(V.aq(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
u=new M.ft()
z=O.co(z)
u.d=z
z.aW(u.gei(),u.gej())
u.e=null
u.f=null
u.r=null
u.x=null
j=new X.hi()
j.b=1.0471975511965976
j.c=0.1
j.d=2000
j.sde(null)
z=j.b
if(!$.m.$2(z,1.0471975511965976)){o=j.b
j.b=1.0471975511965976
z=new D.L("fov",o,1.0471975511965976,j,[P.v])
z.b=!0
j.aF(z)}z=j.c
if(!$.m.$2(z,0.1)){o=j.c
j.c=0.1
z=new D.L("near",o,0.1,j,[P.v])
z.b=!0
j.aF(z)}z=j.d
if(!$.m.$2(z,2000)){o=j.d
j.d=2000
z=new D.L("far",o,2000,j,[P.v])
z.b=!0
j.aF(z)}z=u.a
if(z!==j){if(z!=null){z=z.gt()
z.toString
r=H.d(u.ga8(),s)
C.a.O(z.a,r)}o=u.a
u.a=j
z=j.gt()
z.toString
r=H.d(u.ga8(),s)
C.a.h(z.a,r)
z=new D.L("camera",o,u.a,u,[X.d7])
z.b=!0
u.ap(z)}i=new X.fB()
z=new V.bE(0,0,0,1)
i.a=z
i.b=!0
i.c=2000
i.d=!0
i.e=0
i.f=!1
z=V.dM(0,0,1,1)
i.r=z
z=u.b
if(z!==i){if(z!=null){z=z.gt()
z.toString
r=H.d(u.ga8(),s)
C.a.O(z.a,r)}o=u.b
u.b=i
z=i.gt()
z.toString
r=H.d(u.ga8(),s)
C.a.h(z.a,r)
z=new D.L("target",o,u.b,u,[X.dU])
z.b=!0
u.ap(z)}u.sdl(null)
u.sdl(t)
u.d.h(0,v)
u.a.sde(m)
z=w.d
if(z!==u){if(z!=null){z=z.gt()
z.toString
r=H.d(w.gcj(),s)
C.a.O(z.a,r)}w.d=u
z=u.gt()
z.toString
s=H.d(w.gcj(),s)
C.a.h(z.a,s)
w.dL()}V.kF(w)}},1]]
setupProgram(dart,0,0)
J.J=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dr.prototype
return J.fH.prototype}if(typeof a=="string")return J.c1.prototype
if(a==null)return J.ds.prototype
if(typeof a=="boolean")return J.fG.prototype
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bI.prototype
return a}if(a instanceof P.a)return a
return J.cf(a)}
J.bQ=function(a){if(typeof a=="string")return J.c1.prototype
if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bI.prototype
return a}if(a instanceof P.a)return a
return J.cf(a)}
J.cT=function(a){if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bI.prototype
return a}if(a instanceof P.a)return a
return J.cf(a)}
J.km=function(a){if(typeof a=="number")return J.bH.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.c8.prototype
return a}
J.kn=function(a){if(typeof a=="number")return J.bH.prototype
if(typeof a=="string")return J.c1.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.c8.prototype
return a}
J.ce=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bI.prototype
return a}if(a instanceof P.a)return a
return J.cf(a)}
J.N=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.J(a).p(a,b)}
J.f0=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.km(a).a2(a,b)}
J.cZ=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kn(a).j(a,b)}
J.f1=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kw(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bQ(a).k(a,b)}
J.f2=function(a,b,c,d){return J.ce(a).cH(a,b,c,d)}
J.ci=function(a,b,c){return J.bQ(a).ft(a,b,c)}
J.d_=function(a,b){return J.cT(a).C(a,b)}
J.f3=function(a,b){return J.cT(a).J(a,b)}
J.aQ=function(a){return J.J(a).gP(a)}
J.bD=function(a){return J.cT(a).gS(a)}
J.b7=function(a){return J.bQ(a).gl(a)}
J.ah=function(a){return J.J(a).i(a)}
I.cW=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.cm.prototype
C.x=J.o.prototype
C.a=J.aT.prototype
C.f=J.dr.prototype
C.y=J.ds.prototype
C.e=J.bH.prototype
C.i=J.c1.prototype
C.F=J.bI.prototype
C.H=H.hd.prototype
C.I=W.he.prototype
C.p=J.hj.prototype
C.m=J.c8.prototype
C.r=W.bu.prototype
C.t=W.iK.prototype
C.u=new P.hh()
C.v=new P.iv()
C.j=new P.jw()
C.b=new A.bU(0,"ColorSourceType.None")
C.h=new A.bU(1,"ColorSourceType.Solid")
C.c=new A.bU(2,"ColorSourceType.Texture2D")
C.d=new A.bU(3,"ColorSourceType.TextureCube")
C.l=new P.aR(0)
C.w=new P.aR(5e6)
C.z=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.A=function(hooks) {
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

C.B=function(getTagFallback) {
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
C.C=function() {
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
C.D=function(hooks) {
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
C.E=function(hooks) {
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
C.G=H.b(I.cW([0,0,65498,45055,65535,34815,65534,18431]),[P.A])
C.q=new P.iu(!1)
$.ao=0
$.b8=null
$.d2=null
$.cM=!1
$.eR=null
$.eL=null
$.eX=null
$.cd=null
$.cg=null
$.cU=null
$.b1=null
$.bx=null
$.by=null
$.cN=!1
$.M=C.j
$.dk=null
$.dj=null
$.di=null
$.dh=null
$.m=V.h7()
$.dG=null
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
I.$lazy(y,x,w)}})(["dg","$get$dg",function(){return H.eQ("_$dart_dartClosure")},"ct","$get$ct",function(){return H.eQ("_$dart_js")},"e3","$get$e3",function(){return H.as(H.c7({
toString:function(){return"$receiver$"}}))},"e4","$get$e4",function(){return H.as(H.c7({$method$:null,
toString:function(){return"$receiver$"}}))},"e5","$get$e5",function(){return H.as(H.c7(null))},"e6","$get$e6",function(){return H.as(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"ea","$get$ea",function(){return H.as(H.c7(void 0))},"eb","$get$eb",function(){return H.as(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"e8","$get$e8",function(){return H.as(H.e9(null))},"e7","$get$e7",function(){return H.as(function(){try{null.$method$}catch(z){return z.message}}())},"ed","$get$ed",function(){return H.as(H.e9(void 0))},"ec","$get$ec",function(){return H.as(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cJ","$get$cJ",function(){return P.iL()},"bz","$get$bz",function(){return[]},"eF","$get$eF",function(){return P.hx("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"de","$get$de",function(){return{}},"eo","$get$eo",function(){return Z.af(0)},"em","$get$em",function(){return Z.af(511)},"aB","$get$aB",function(){return Z.af(1)},"aA","$get$aA",function(){return Z.af(2)},"az","$get$az",function(){return Z.af(4)},"aC","$get$aC",function(){return Z.af(8)},"aD","$get$aD",function(){return Z.af(16)},"bs","$get$bs",function(){return Z.af(32)},"bt","$get$bt",function(){return Z.af(64)},"en","$get$en",function(){return Z.af(96)},"b_","$get$b_",function(){return Z.af(128)},"ay","$get$ay",function(){return Z.af(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.p]},{func:1,ret:-1,args:[D.p]},{func:1,ret:P.F},{func:1,ret:-1},{func:1,ret:-1,args:[W.ak]},{func:1,ret:P.F,args:[F.aj]},{func:1,ret:-1,args:[P.l,,]},{func:1,ret:-1,args:[W.a9]},{func:1,ret:-1,args:[P.A,[P.h,E.aI]]},{func:1,ret:P.F,args:[D.p]},{func:1,ret:-1,args:[W.aY]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.F,args:[,,]},{func:1,ret:P.l,args:[P.A]},{func:1,ret:P.F,args:[,]},{func:1,args:[,]},{func:1,ret:-1,args:[W.bf]},{func:1,ret:-1,args:[P.A,[P.h,D.V]]},{func:1,ret:P.v},{func:1,ret:-1,args:[P.A,[P.h,U.a4]]},{func:1,ret:-1,args:[P.A,[P.h,V.ap]]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,ret:P.a8,args:[W.I]},{func:1,ret:W.a_,args:[W.I]},{func:1,args:[,P.l]},{func:1,args:[P.l]},{func:1,ret:P.F,args:[P.W]},{func:1,ret:P.F,args:[{func:1,ret:-1,args:[D.p]}]},{func:1,ret:-1,args:[P.a],opt:[P.al]},{func:1,ret:-1,args:[W.bu]},{func:1,ret:P.a8,args:[P.v,P.v]},{func:1,ret:P.a8,args:[[P.h,D.V]]},{func:1,ret:P.F,args:[,],opt:[,]},{func:1,ret:V.a5,args:[P.v]},{func:1,ret:P.F,args:[F.ax,P.v,P.v]},{func:1,ret:[P.aE,,],args:[,]},{func:1,ret:P.F,args:[P.aX]},{func:1,ret:P.F,args:[W.a9]},{func:1,ret:-1,args:[P.l,P.l]}]
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
if(x==y)H.kI(d||a)
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
Isolate.cW=a.cW
Isolate.cR=a.cR
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
if(typeof dartMainRunner==="function")dartMainRunner(Q.eU,[])
else Q.eU([])})})()
//# sourceMappingURL=test.dart.js.map
