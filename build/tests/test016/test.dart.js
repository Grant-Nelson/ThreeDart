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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.d5"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.d5"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.d5(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.d6=function(){}
var dart=[["","",,H,{"^":"",lp:{"^":"a;a"}}],["","",,J,{"^":"",
J:function(a){return void 0},
dc:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cl:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.d9==null){H.kJ()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.h(P.ez("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cD()]
if(v!=null)return v
v=H.kO(a)
if(v!=null)return v
if(typeof a=="function")return C.G
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cD(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
o:{"^":"a;",
q:function(a,b){return a===b},
gT:function(a){return H.bq(a)},
i:["dS",function(a){return"Instance of '"+H.aY(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h_:{"^":"o;",
i:function(a){return String(a)},
gT:function(a){return a?519018:218159},
$isa3:1},
dJ:{"^":"o;",
q:function(a,b){return null==b},
i:function(a){return"null"},
gT:function(a){return 0},
$isI:1},
cE:{"^":"o;",
gT:function(a){return 0},
i:["dT",function(a){return String(a)}]},
hz:{"^":"cE;"},
cX:{"^":"cE;"},
bO:{"^":"cE;",
i:function(a){var z=a[$.$get$dv()]
if(z==null)return this.dT(a)
return"JavaScript function for "+H.j(J.a4(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscz:1},
aU:{"^":"o;$ti",
h:function(a,b){H.C(b,H.z(a,0))
if(!!a.fixed$length)H.r(P.ad("add"))
a.push(b)},
P:function(a,b){var z
if(!!a.fixed$length)H.r(P.ad("remove"))
for(z=0;z<a.length;++z)if(J.S(a[z],b)){a.splice(z,1)
return!0}return!1},
bR:function(a,b){var z,y
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
fZ:function(a){return this.w(a,"")},
C:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
bu:function(a,b,c){var z=a.length
if(b>z)throw H.h(P.ah(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.h(P.ah(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.z(a,0)])
return H.c(a.slice(b,c),[H.z(a,0)])},
gcd:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.h(H.fY())},
aQ:function(a,b){var z
for(z=0;z<a.length;++z)if(J.S(a[z],b))return!0
return!1},
i:function(a){return P.cA(a,"[","]")},
gW:function(a){return new J.al(a,a.length,0,[H.z(a,0)])},
gT:function(a){return H.bq(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.r(P.ad("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.bY(b,"newLength",null))
if(b<0)throw H.h(P.ah(b,0,null,"newLength",null))
a.length=b},
X:function(a,b,c){H.Y(b)
H.C(c,H.z(a,0))
if(!!a.immutable$list)H.r(P.ad("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.aO(a,b))
if(b>=a.length||b<0)throw H.h(H.aO(a,b))
a[b]=c},
$isd:1,
$isf:1,
n:{
fZ:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.bY(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.ah(a,0,4294967295,"length",null))
return J.dG(new Array(a),b)},
dG:function(a,b){return J.bj(H.c(a,[b]))},
bj:function(a){H.bJ(a)
a.fixed$length=Array
return a}}},
lo:{"^":"aU;$ti"},
al:{"^":"a;a,b,c,0d,$ti",
gM:function(a){return this.d},
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
ca:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.h(P.ad(""+a+".floor()"))},
ac:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.ad(""+a+".round()"))},
dK:function(a,b){var z,y
if(b>20)throw H.h(P.ah(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gT:function(a){return a&0x1FFFFFFF},
dP:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
dV:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cY(a,b)},
Z:function(a,b){return(a|0)===a?a/b|0:this.cY(a,b)},
cY:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.h(P.ad("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
b7:function(a,b){var z
if(a>0)z=this.f7(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
f7:function(a,b){return b>31?0:a>>>b},
a7:function(a,b){if(typeof b!=="number")throw H.h(H.aN(b))
return a<b},
$isv:1,
$isW:1},
dI:{"^":"c6;",$isA:1},
dH:{"^":"c6;"},
cC:{"^":"o;",
c_:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.aO(a,b))
if(b<0)throw H.h(H.aO(a,b))
if(b>=a.length)H.r(H.aO(a,b))
return a.charCodeAt(b)},
b4:function(a,b){if(b>=a.length)throw H.h(H.aO(a,b))
return a.charCodeAt(b)},
D:function(a,b){H.R(b)
if(typeof b!=="string")throw H.h(P.bY(b,null,null))
return a+b},
bv:function(a,b,c){H.Y(c)
if(c==null)c=a.length
if(b<0)throw H.h(P.ca(b,null,null))
if(b>c)throw H.h(P.ca(b,null,null))
if(c>a.length)throw H.h(P.ca(c,null,null))
return a.substring(b,c)},
cw:function(a,b){return this.bv(a,b,null)},
l:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.u)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
ha:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.l(c,z)+a},
a6:function(a,b){return this.ha(a,b," ")},
fJ:function(a,b,c){if(c>a.length)throw H.h(P.ah(c,0,a.length,null,null))
return H.fe(a,b,c)},
i:function(a){return a},
gT:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
$isdX:1,
$isn:1}}],["","",,H,{"^":"",
fY:function(){return new P.i9("No element")},
Z:{"^":"iH;a",
gk:function(a){return this.a.length},
j:function(a,b){return C.h.c_(this.a,b)},
$aseA:function(){return[P.A]},
$ast:function(){return[P.A]},
$asd:function(){return[P.A]},
$asf:function(){return[P.A]}},
fK:{"^":"d;"},
dO:{"^":"a;a,b,c,0d,$ti",
gM:function(a){return this.d},
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
hf:{"^":"d;a,b,$ti",
gW:function(a){return new H.hg(J.bK(this.a),this.b,this.$ti)},
gk:function(a){return J.b9(this.a)},
C:function(a,b){return this.b.$1(J.df(this.a,b))},
$asd:function(a,b){return[b]}},
hg:{"^":"cB;0a,b,c,$ti",
B:function(){var z=this.b
if(z.B()){this.a=this.c.$1(z.gM(z))
return!0}this.a=null
return!1},
gM:function(a){return this.a},
$ascB:function(a,b){return[b]}},
iX:{"^":"d;a,b,$ti",
gW:function(a){return new H.iY(J.bK(this.a),this.b,this.$ti)}},
iY:{"^":"cB;a,b,$ti",
B:function(){var z,y
for(z=this.a,y=this.b;z.B();)if(y.$1(z.gM(z)))return!0
return!1},
gM:function(a){var z=this.a
return z.gM(z)}},
c3:{"^":"a;$ti"},
eA:{"^":"a;$ti"},
iH:{"^":"c7+eA;"}}],["","",,H,{"^":"",
kE:function(a){return init.types[H.Y(a)]},
kM:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.J(a).$isB},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a4(a)
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
if(w==null||z===C.x||!!J.J(a).$iscX){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.h.b4(w,0)===36)w=C.h.cw(w,1)
r=H.da(H.bJ(H.aP(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
e_:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
hJ:function(a){var z,y,x,w
z=H.c([],[P.A])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.w)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.h(H.aN(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.f.b7(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.h(H.aN(w))}return H.e_(z)},
e0:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.h(H.aN(x))
if(x<0)throw H.h(H.aN(x))
if(x>65535)return H.hJ(a)}return H.e_(a)},
hI:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.b7(z,10))>>>0,56320|z&1023)}throw H.h(P.ah(a,0,1114111,null,null))},
a8:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hH:function(a){return a.b?H.a8(a).getUTCFullYear()+0:H.a8(a).getFullYear()+0},
hF:function(a){return a.b?H.a8(a).getUTCMonth()+1:H.a8(a).getMonth()+1},
hB:function(a){return a.b?H.a8(a).getUTCDate()+0:H.a8(a).getDate()+0},
hC:function(a){return a.b?H.a8(a).getUTCHours()+0:H.a8(a).getHours()+0},
hE:function(a){return a.b?H.a8(a).getUTCMinutes()+0:H.a8(a).getMinutes()+0},
hG:function(a){return a.b?H.a8(a).getUTCSeconds()+0:H.a8(a).getSeconds()+0},
hD:function(a){return a.b?H.a8(a).getUTCMilliseconds()+0:H.a8(a).getMilliseconds()+0},
p:function(a){throw H.h(H.aN(a))},
i:function(a,b){if(a==null)J.b9(a)
throw H.h(H.aO(a,b))},
aO:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.az(!0,b,"index",null)
z=H.Y(J.b9(a))
if(!(b<0)){if(typeof z!=="number")return H.p(z)
y=b>=z}else y=!0
if(y)return P.M(b,a,"index",null,z)
return P.ca(b,"index",null)},
kA:function(a,b,c){if(a>c)return new P.c9(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c9(a,c,!0,b,"end","Invalid value")
return new P.az(!0,b,"end",null)},
aN:function(a){return new P.az(!0,a,null,null)},
kv:function(a){if(typeof a!=="number")throw H.h(H.aN(a))
return a},
h:function(a){var z
if(a==null)a=new P.dW()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fg})
z.name=""}else z.toString=H.fg
return z},
fg:function(){return J.a4(this.dartException)},
r:function(a){throw H.h(a)},
w:function(a){throw H.h(P.bb(a))},
aR:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kZ(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.b7(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cF(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dV(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$ei()
u=$.$get$ej()
t=$.$get$ek()
s=$.$get$el()
r=$.$get$ep()
q=$.$get$eq()
p=$.$get$en()
$.$get$em()
o=$.$get$es()
n=$.$get$er()
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
if(l)return z.$1(H.dV(H.R(y),m))}}return z.$1(new H.iG(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.e6()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.az(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.e6()
return a},
b7:function(a){var z
if(a==null)return new H.eR(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eR(a)},
kC:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.X(0,a[y],a[x])}return b},
kL:function(a,b,c,d,e,f){H.k(a,"$iscz")
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
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kL)
a.$identity=z
return z},
fw:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.J(d).$isf){z.$reflectionInfo=d
x=H.hM(z).r}else x=d
w=e?Object.create(new H.ia().constructor.prototype):Object.create(new H.cq(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aq
if(typeof u!=="number")return u.D()
$.aq=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dp(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.kE,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dj:H.cr
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.h("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dp(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
ft:function(a,b,c,d){var z=H.cr
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dp:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fv(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.ft(y,!w,z,b)
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
fu:function(a,b,c,d){var z,y
z=H.cr
y=H.dj
switch(b?-1:a){case 0:throw H.h(H.hV("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fv:function(a,b){var z,y,x,w,v,u,t,s
z=$.ba
if(z==null){z=H.bZ("self")
$.ba=z}y=$.di
if(y==null){y=H.bZ("receiver")
$.di=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fu(w,!u,x,b)
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
d5:function(a,b,c,d,e,f,g){var z,y
z=J.bj(H.bJ(b))
H.Y(c)
y=!!J.J(d).$isf?J.bj(d):d
return H.fw(a,z,c,y,!!e,f,g)},
R:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.aw(a,"String"))},
kR:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aw(a,"num"))},
f4:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.aw(a,"bool"))},
Y:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.aw(a,"int"))},
fc:function(a,b){throw H.h(H.aw(a,H.R(b).substring(3)))},
kT:function(a,b){var z=J.bW(b)
throw H.h(H.fs(a,z.bv(b,3,z.gk(b))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.J(a)[b])return a
H.fc(a,b)},
e:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.J(a)[b]
else z=!0
if(z)return a
H.kT(a,b)},
bJ:function(a){if(a==null)return a
if(!!J.J(a).$isf)return a
throw H.h(H.aw(a,"List"))},
kN:function(a,b){if(a==null)return a
if(!!J.J(a).$isf)return a
if(J.J(a)[b])return a
H.fc(a,b)},
f5:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.Y(z)]
else return a.$S()}return},
bV:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.f5(J.J(a))
if(z==null)return!1
y=H.f8(z,null,b,null)
return y},
b:function(a,b){var z,y
if(a==null)return a
if($.d1)return a
$.d1=!0
try{if(H.bV(a,b))return a
z=H.bX(b)
y=H.aw(a,z)
throw H.h(y)}finally{$.d1=!1}},
d7:function(a,b){if(a!=null&&!H.d4(a,b))H.r(H.aw(a,H.bX(b)))
return a},
f_:function(a){var z
if(a instanceof H.u){z=H.f5(J.J(a))
if(z!=null)return H.bX(z)
return"Closure"}return H.aY(a)},
kY:function(a){throw H.h(new P.fD(H.R(a)))},
f6:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
aP:function(a){if(a==null)return
return a.$ti},
mc:function(a,b,c){return H.b8(a["$as"+H.j(c)],H.aP(b))},
bI:function(a,b,c,d){var z
H.R(c)
H.Y(d)
z=H.b8(a["$as"+H.j(c)],H.aP(b))
return z==null?null:z[d]},
ay:function(a,b,c){var z
H.R(b)
H.Y(c)
z=H.b8(a["$as"+H.j(b)],H.aP(a))
return z==null?null:z[c]},
z:function(a,b){var z
H.Y(b)
z=H.aP(a)
return z==null?null:z[b]},
bX:function(a){var z=H.aQ(a,null)
return z},
aQ:function(a,b){var z,y
H.x(b,"$isf",[P.n],"$asf")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.da(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Y(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.j(b[y])}if('func' in a)return H.kl(a,b)
if('futureOr' in a)return"FutureOr<"+H.aQ("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kl:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
for(z=H.kB(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.R(z[l])
n=n+m+H.aQ(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
da:function(a,b,c){var z,y,x,w,v,u
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
return H.f2(H.b8(y[d],z),null,c,null)},
x:function(a,b,c,d){var z,y
H.R(b)
H.bJ(c)
H.R(d)
if(a==null)return a
z=H.bH(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.da(c,0,null)
throw H.h(H.aw(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
f2:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ak(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ak(a[y],b,c[y],d))return!1
return!0},
ma:function(a,b,c){return a.apply(b,H.b8(J.J(b)["$as"+H.j(c)],H.aP(b)))},
f9:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="I"||a===-1||a===-2||H.f9(z)}return!1},
d4:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="I"||b===-1||b===-2||H.f9(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.d4(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bV(a,b)}y=J.J(a).constructor
x=H.aP(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ak(y,null,b,null)
return z},
C:function(a,b){if(a!=null&&!H.d4(a,b))throw H.h(H.aw(a,H.bX(b)))
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
if('func' in c)return H.f8(a,b,c,d)
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
return H.f2(H.b8(r,z),b,u,d)},
f8:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.kQ(m,b,l,d)},
kQ:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ak(c[w],d,a[w],b))return!1}return!0},
mb:function(a,b,c){Object.defineProperty(a,H.R(b),{value:c,enumerable:false,writable:true,configurable:true})},
kO:function(a){var z,y,x,w,v,u
z=H.R($.f7.$1(a))
y=$.cj[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cm[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.R($.f1.$2(a,z))
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
return u.i}if(v==="+")return H.fb(a,x)
if(v==="*")throw H.h(P.ez(z))
if(init.leafTags[z]===true){u=H.cn(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fb(a,x)},
fb:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dc(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cn:function(a){return J.dc(a,!1,null,!!a.$isB)},
kP:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cn(z)
else return J.dc(z,c,null,null)},
kJ:function(){if(!0===$.d9)return
$.d9=!0
H.kK()},
kK:function(){var z,y,x,w,v,u,t,s
$.cj=Object.create(null)
$.cm=Object.create(null)
H.kF()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fd.$1(v)
if(u!=null){t=H.kP(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kF:function(){var z,y,x,w,v,u,t
z=C.D()
z=H.b4(C.A,H.b4(C.F,H.b4(C.n,H.b4(C.n,H.b4(C.E,H.b4(C.B,H.b4(C.C(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.f7=new H.kG(v)
$.f1=new H.kH(u)
$.fd=new H.kI(t)},
b4:function(a,b){return a(b)||b},
fe:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
ff:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hL:{"^":"a;a,b,c,d,e,f,r,0x",n:{
hM:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bj(z)
y=z[0]
x=z[1]
return new H.hL(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iu:{"^":"a;a,b,c,d,e,f",
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
return new H.iu(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cc:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eo:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hw:{"^":"X;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
n:{
dV:function(a,b){return new H.hw(a,b==null?null:b.method)}}},
h2:{"^":"X;a,b,c",
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
return new H.h2(a,y,z?null:b.receiver)}}},
iG:{"^":"X;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kZ:{"^":"u:15;a",
$1:function(a){if(!!J.J(a).$isX)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eR:{"^":"a;a,0b",
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
gdM:function(){return this},
$iscz:1,
gdM:function(){return this}},
ea:{"^":"u;"},
ia:{"^":"ea;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cq:{"^":"ea;a,b,c,d",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cq))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gT:function(a){var z,y
z=this.c
if(z==null)y=H.bq(this.a)
else y=typeof z!=="object"?J.aS(z):H.bq(z)
return(y^H.bq(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.aY(z)+"'")},
n:{
cr:function(a){return a.a},
dj:function(a){return a.c},
bZ:function(a){var z,y,x,w,v
z=new H.cq("self","target","receiver","name")
y=J.bj(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iv:{"^":"X;a",
i:function(a){return this.a},
n:{
aw:function(a,b){return new H.iv("TypeError: "+H.j(P.c2(a))+": type '"+H.f_(a)+"' is not a subtype of type '"+b+"'")}}},
fr:{"^":"X;a",
i:function(a){return this.a},
n:{
fs:function(a,b){return new H.fr("CastError: "+H.j(P.c2(a))+": type '"+H.f_(a)+"' is not a subtype of type '"+b+"'")}}},
hU:{"^":"X;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
n:{
hV:function(a){return new H.hU(a)}}},
aV:{"^":"hd;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gap:function(a){return new H.dN(this,[H.z(this,0)])},
d7:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cM(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cM(y,b)}else return this.fX(b)},
fX:function(a){var z=this.d
if(z==null)return!1
return this.cb(this.bD(z,J.aS(a)&0x3ffffff),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.b5(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.b5(w,b)
x=y==null?null:y.b
return x}else return this.fY(b)},
fY:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bD(z,J.aS(a)&0x3ffffff)
x=this.cb(y,a)
if(x<0)return
return y[x].b},
X:function(a,b,c){var z,y,x,w,v,u
H.C(b,H.z(this,0))
H.C(c,H.z(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bK()
this.b=z}this.cF(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bK()
this.c=y}this.cF(y,b,c)}else{x=this.d
if(x==null){x=this.bK()
this.d=x}w=J.aS(b)&0x3ffffff
v=this.bD(x,w)
if(v==null)this.bP(x,w,[this.bL(b,c)])
else{u=this.cb(v,b)
if(u>=0)v[u].b=c
else v.push(this.bL(b,c))}}},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.z(this,0),H.z(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.h(P.bb(this))
z=z.c}},
cF:function(a,b,c){var z
H.C(b,H.z(this,0))
H.C(c,H.z(this,1))
z=this.b5(a,b)
if(z==null)this.bP(a,b,this.bL(b,c))
else z.b=c},
en:function(){this.r=this.r+1&67108863},
bL:function(a,b){var z,y
z=new H.h5(H.C(a,H.z(this,0)),H.C(b,H.z(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.en()
return z},
cb:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.S(a[y].a,b))return y
return-1},
i:function(a){return P.dQ(this)},
b5:function(a,b){return a[b]},
bD:function(a,b){return a[b]},
bP:function(a,b,c){a[b]=c},
eh:function(a,b){delete a[b]},
cM:function(a,b){return this.b5(a,b)!=null},
bK:function(){var z=Object.create(null)
this.bP(z,"<non-identifier-key>",z)
this.eh(z,"<non-identifier-key>")
return z},
$isdM:1},
h5:{"^":"a;a,b,0c,0d"},
dN:{"^":"fK;a,$ti",
gk:function(a){return this.a.a},
gW:function(a){var z,y
z=this.a
y=new H.h6(z,z.r,this.$ti)
y.c=z.e
return y}},
h6:{"^":"a;a,b,0c,0d,$ti",
gM:function(a){return this.d},
B:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.bb(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kG:{"^":"u:15;a",
$1:function(a){return this.a(a)}},
kH:{"^":"u:26;a",
$2:function(a,b){return this.a(a,b)}},
kI:{"^":"u:27;a",
$1:function(a){return this.a(H.R(a))}},
h0:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isdX:1,
n:{
h1:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.h(new P.fT("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
kB:function(a){return J.dG(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kS:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bD:function(a){return a},
aM:function(a,b,c){H.bJ(b)
if(a>>>0!==a||a>=c)throw H.h(H.aO(b,a))},
kk:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.h(H.kA(a,b,c))
return b},
ht:{"^":"o;",$islW:1,"%":"DataView;ArrayBufferView;cK|eL|eM|hs|eN|eO|aL"},
cK:{"^":"ht;",
gk:function(a){return a.length},
$isB:1,
$asB:I.d6},
hs:{"^":"eM;",
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
$asc3:function(){return[P.v]},
$ast:function(){return[P.v]},
$isd:1,
$asd:function(){return[P.v]},
$isf:1,
$asf:function(){return[P.v]},
"%":"Float32Array|Float64Array"},
aL:{"^":"eO;",
$asc3:function(){return[P.A]},
$ast:function(){return[P.A]},
$isd:1,
$asd:function(){return[P.A]},
$isf:1,
$asf:function(){return[P.A]}},
lx:{"^":"aL;",
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Int16Array"},
ly:{"^":"aL;",
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lz:{"^":"aL;",
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lA:{"^":"aL;",
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lB:{"^":"aL;",
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lC:{"^":"aL;",
gk:function(a){return a.length},
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hu:{"^":"aL;",
gk:function(a){return a.length},
j:function(a,b){H.aM(b,a,a.length)
return a[b]},
bu:function(a,b,c){return new Uint8Array(a.subarray(b,H.kk(b,c,a.length)))},
"%":";Uint8Array"},
eL:{"^":"cK+t;"},
eM:{"^":"eL+c3;"},
eN:{"^":"cK+t;"},
eO:{"^":"eN+c3;"}}],["","",,P,{"^":"",
j_:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.ks()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b5(new P.j1(z),1)).observe(y,{childList:true})
return new P.j0(z,y,x)}else if(self.setImmediate!=null)return P.kt()
return P.ku()},
m_:[function(a){self.scheduleImmediate(H.b5(new P.j2(H.b(a,{func:1,ret:-1})),0))},"$1","ks",4,0,11],
m0:[function(a){self.setImmediate(H.b5(new P.j3(H.b(a,{func:1,ret:-1})),0))},"$1","kt",4,0,11],
m1:[function(a){P.cT(C.l,H.b(a,{func:1,ret:-1}))},"$1","ku",4,0,11],
cT:function(a,b){var z
H.b(b,{func:1,ret:-1})
z=C.f.Z(a.a,1000)
return P.jZ(z<0?0:z,b)},
ed:function(a,b){var z
H.b(b,{func:1,ret:-1,args:[P.aZ]})
z=C.f.Z(a.a,1000)
return P.k_(z<0?0:z,b)},
ko:function(a,b){if(H.bV(a,{func:1,args:[P.a,P.ao]}))return b.hj(a,null,P.a,P.ao)
if(H.bV(a,{func:1,args:[P.a]}))return H.b(a,{func:1,ret:null,args:[P.a]})
throw H.h(P.bY(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kn:function(){var z,y
for(;z=$.b3,z!=null;){$.bF=null
y=z.b
$.b3=y
if(y==null)$.bE=null
z.a.$0()}},
m9:[function(){$.d2=!0
try{P.kn()}finally{$.bF=null
$.d2=!1
if($.b3!=null)$.$get$cZ().$1(P.f3())}},"$0","f3",0,0,3],
eZ:function(a){var z=new P.eG(H.b(a,{func:1,ret:-1}))
if($.b3==null){$.bE=z
$.b3=z
if(!$.d2)$.$get$cZ().$1(P.f3())}else{$.bE.b=z
$.bE=z}},
kr:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
z=$.b3
if(z==null){P.eZ(a)
$.bF=$.bE
return}y=new P.eG(a)
x=$.bF
if(x==null){y.b=z
$.bF=y
$.b3=y}else{y.b=x.b
x.b=y
$.bF=y
if(y.b==null)$.bE=y}},
kU:function(a){var z,y
z={func:1,ret:-1}
H.b(a,z)
y=$.N
if(C.j===y){P.ci(null,null,C.j,a)
return}y.toString
P.ci(null,null,y,H.b(y.bV(a),z))},
ec:function(a,b){var z,y
z={func:1,ret:-1}
H.b(b,z)
y=$.N
if(y===C.j){y.toString
return P.cT(a,b)}return P.cT(a,H.b(y.bV(b),z))},
ir:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aZ]}
H.b(b,z)
y=$.N
if(y===C.j){y.toString
return P.ed(a,b)}x=y.d2(b,P.aZ)
$.N.toString
return P.ed(a,H.b(x,z))},
ch:function(a,b,c,d,e){var z={}
z.a=d
P.kr(new P.kp(z,e))},
eX:function(a,b,c,d,e){var z,y
H.b(d,{func:1,ret:e})
y=$.N
if(y===c)return d.$0()
$.N=c
z=y
try{y=d.$0()
return y}finally{$.N=z}},
eY:function(a,b,c,d,e,f,g){var z,y
H.b(d,{func:1,ret:f,args:[g]})
H.C(e,g)
y=$.N
if(y===c)return d.$1(e)
$.N=c
z=y
try{y=d.$1(e)
return y}finally{$.N=z}},
kq:function(a,b,c,d,e,f,g,h,i){var z,y
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
z=C.j!==c
if(z)d=!(!z||!1)?c.bV(d):c.fH(d,-1)
P.eZ(d)},
j1:{"^":"u:14;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
j0:{"^":"u:23;a,b,c",
$1:function(a){var z,y
this.a.a=H.b(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
j2:{"^":"u:2;a",
$0:function(){this.a.$0()}},
j3:{"^":"u:2;a",
$0:function(){this.a.$0()}},
eU:{"^":"a;a,0b,c",
e3:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b5(new P.k1(this,b),0),a)
else throw H.h(P.ad("`setTimeout()` not found."))},
e4:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b5(new P.k0(this,a,Date.now(),b),0),a)
else throw H.h(P.ad("Periodic timer."))},
$isaZ:1,
n:{
jZ:function(a,b){var z=new P.eU(!0,0)
z.e3(a,b)
return z},
k_:function(a,b){var z=new P.eU(!1,0)
z.e4(a,b)
return z}}},
k1:{"^":"u:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
k0:{"^":"u:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.f.dV(w,x)}z.c=y
this.d.$1(z)}},
b2:{"^":"a;0a,b,c,d,e,$ti",
h3:function(a){if(this.c!==6)return!0
return this.b.b.cn(H.b(this.d,{func:1,ret:P.a3,args:[P.a]}),a.a,P.a3,P.a)},
fV:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.z(this,1)}
w=this.b.b
if(H.bV(z,{func:1,args:[P.a,P.ao]}))return H.d7(w.ho(z,a.a,a.b,null,y,P.ao),x)
else return H.d7(w.cn(H.b(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aI:{"^":"a;cX:a<,b,0f_:c<,$ti",
dJ:function(a,b,c){var z,y,x,w
z=H.z(this,0)
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.N
if(y!==C.j){y.toString
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.ko(b,y)}H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aI(0,$.N,[c])
w=b==null?1:3
this.cG(new P.b2(x,w,a,b,[z,c]))
return x},
ht:function(a,b){return this.dJ(a,null,b)},
cG:function(a){var z,y
z=this.a
if(z<=1){a.a=H.k(this.c,"$isb2")
this.c=a}else{if(z===2){y=H.k(this.c,"$isaI")
z=y.a
if(z<4){y.cG(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.ci(null,null,z,H.b(new P.jh(this,a),{func:1,ret:-1}))}},
cT:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.k(this.c,"$isb2")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.k(this.c,"$isaI")
y=u.a
if(y<4){u.cT(a)
return}this.a=y
this.c=u.c}z.a=this.b6(a)
y=this.b
y.toString
P.ci(null,null,y,H.b(new P.jm(z,this),{func:1,ret:-1}))}},
bN:function(){var z=H.k(this.c,"$isb2")
this.c=null
return this.b6(z)},
b6:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cJ:function(a){var z,y,x,w
z=H.z(this,0)
H.d7(a,{futureOr:1,type:z})
y=this.$ti
x=H.bH(a,"$isbg",y,"$asbg")
if(x){z=H.bH(a,"$isaI",y,null)
if(z)P.eI(a,this)
else P.ji(a,this)}else{w=this.bN()
H.C(a,z)
this.a=4
this.c=a
P.bB(this,w)}},
bz:[function(a,b){var z
H.k(b,"$isao")
z=this.bN()
this.a=8
this.c=new P.ae(a,b)
P.bB(this,z)},function(a){return this.bz(a,null)},"hA","$2","$1","ged",4,2,30],
$isbg:1,
n:{
ji:function(a,b){var z,y,x
b.a=1
try{a.dJ(new P.jj(b),new P.jk(b),null)}catch(x){z=H.aR(x)
y=H.b7(x)
P.kU(new P.jl(b,z,y))}},
eI:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.k(a.c,"$isaI")
if(z>=4){y=b.bN()
b.a=a.a
b.c=a.c
P.bB(b,y)}else{y=H.k(b.c,"$isb2")
b.a=2
b.c=a
a.cT(y)}},
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
if(y===8)new P.jp(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jo(x,b,r).$0()}else if((y&2)!==0)new P.jn(z,x,b).$0()
if(o!=null)$.N=o
y=x.b
if(!!J.J(y).$isbg){if(y.a>=4){n=H.k(t.c,"$isb2")
t.c=null
b=t.b6(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eI(y,t)
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
jh:{"^":"u:2;a,b",
$0:function(){P.bB(this.a,this.b)}},
jm:{"^":"u:2;a,b",
$0:function(){P.bB(this.b,this.a.a)}},
jj:{"^":"u:14;a",
$1:function(a){var z=this.a
z.a=0
z.cJ(a)}},
jk:{"^":"u:34;a",
$2:function(a,b){this.a.bz(a,H.k(b,"$isao"))},
$1:function(a){return this.$2(a,null)}},
jl:{"^":"u:2;a,b,c",
$0:function(){this.a.bz(this.b,this.c)}},
jp:{"^":"u:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dI(H.b(w.d,{func:1}),null)}catch(v){y=H.aR(v)
x=H.b7(v)
if(this.d){w=H.k(this.a.a.c,"$isae").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.k(this.a.a.c,"$isae")
else u.b=new P.ae(y,x)
u.a=!0
return}if(!!J.J(z).$isbg){if(z instanceof P.aI&&z.gcX()>=4){if(z.gcX()===8){w=this.b
w.b=H.k(z.gf_(),"$isae")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ht(new P.jq(t),null)
w.a=!1}}},
jq:{"^":"u:36;a",
$1:function(a){return this.a}},
jo:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.z(x,0)
v=H.C(this.c,w)
u=H.z(x,1)
this.a.b=x.b.b.cn(H.b(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aR(t)
y=H.b7(t)
x=this.a
x.b=new P.ae(z,y)
x.a=!0}}},
jn:{"^":"u:3;a,b,c",
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
eG:{"^":"a;a,0b"},
cP:{"^":"a;$ti",
gk:function(a){var z,y
z={}
y=new P.aI(0,$.N,[P.A])
z.a=0
this.h1(new P.id(z,this),!0,new P.ie(z,y),y.ged())
return y}},
id:{"^":"u;a,b",
$1:function(a){H.C(a,H.ay(this.b,"cP",0));++this.a.a},
$S:function(){return{func:1,ret:P.I,args:[H.ay(this.b,"cP",0)]}}},
ie:{"^":"u:2;a,b",
$0:function(){this.b.cJ(this.a.a)}},
e8:{"^":"a;$ti"},
ic:{"^":"a;"},
aZ:{"^":"a;"},
ae:{"^":"a;a,b",
i:function(a){return H.j(this.a)},
$isX:1},
k8:{"^":"a;",$islZ:1},
kp:{"^":"u:2;a,b",
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
jL:{"^":"k8;",
hp:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
try{if(C.j===$.N){a.$0()
return}P.eX(null,null,this,a,-1)}catch(x){z=H.aR(x)
y=H.b7(x)
P.ch(null,null,this,z,H.k(y,"$isao"))}},
hq:function(a,b,c){var z,y,x
H.b(a,{func:1,ret:-1,args:[c]})
H.C(b,c)
try{if(C.j===$.N){a.$1(b)
return}P.eY(null,null,this,a,b,-1,c)}catch(x){z=H.aR(x)
y=H.b7(x)
P.ch(null,null,this,z,H.k(y,"$isao"))}},
fH:function(a,b){return new P.jN(this,H.b(a,{func:1,ret:b}),b)},
bV:function(a){return new P.jM(this,H.b(a,{func:1,ret:-1}))},
d2:function(a,b){return new P.jO(this,H.b(a,{func:1,ret:-1,args:[b]}),b)},
dI:function(a,b){H.b(a,{func:1,ret:b})
if($.N===C.j)return a.$0()
return P.eX(null,null,this,a,b)},
cn:function(a,b,c,d){H.b(a,{func:1,ret:c,args:[d]})
H.C(b,d)
if($.N===C.j)return a.$1(b)
return P.eY(null,null,this,a,b,c,d)},
ho:function(a,b,c,d,e,f){H.b(a,{func:1,ret:d,args:[e,f]})
H.C(b,e)
H.C(c,f)
if($.N===C.j)return a.$2(b,c)
return P.kq(null,null,this,a,b,c,d,e,f)},
hj:function(a,b,c,d){return H.b(a,{func:1,ret:b,args:[c,d]})}},
jN:{"^":"u;a,b,c",
$0:function(){return this.a.dI(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jM:{"^":"u:3;a,b",
$0:function(){return this.a.hp(this.b)}},
jO:{"^":"u;a,b,c",
$1:function(a){var z=this.c
return this.a.hq(this.b,H.C(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
h8:function(a,b,c){H.bJ(a)
return H.x(H.kC(a,new H.aV(0,0,[b,c])),"$isdM",[b,c],"$asdM")},
h7:function(a,b){return new H.aV(0,0,[a,b])},
h9:function(a,b,c,d){return new P.jx(0,0,[d])},
fX:function(a,b,c){var z,y
if(P.d3(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bG()
C.a.h(y,a)
try{P.km(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.e9(b,H.kN(z,"$isd"),", ")+c
return y.charCodeAt(0)==0?y:y},
cA:function(a,b,c){var z,y,x
if(P.d3(a))return b+"..."+c
z=new P.bS(b)
y=$.$get$bG()
C.a.h(y,a)
try{x=z
x.a=P.e9(x.gaw(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gaw()+c
y=z.gaw()
return y.charCodeAt(0)==0?y:y},
d3:function(a){var z,y
for(z=0;y=$.$get$bG(),z<y.length;++z)if(a===y[z])return!0
return!1},
km:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gW(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.B())return
w=H.j(z.gM(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.B()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gM(z);++x
if(!z.B()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gM(z);++x
for(;z.B();t=s,s=r){r=z.gM(z);++x
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
if(P.d3(a))return"{...}"
y=new P.bS("")
try{C.a.h($.$get$bG(),a)
x=y
x.a=x.gaw()+"{"
z.a=!0
J.fk(a,new P.he(z,y))
z=y
z.a=z.gaw()+"}"}finally{z=$.$get$bG()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.gaw()
return z.charCodeAt(0)==0?z:z},
jx:{"^":"jr;a,0b,0c,0d,0e,0f,r,$ti",
gW:function(a){return P.eK(this,this.r,H.z(this,0))},
gk:function(a){return this.a},
h:function(a,b){var z,y
H.C(b,H.z(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.d0()
this.b=z}return this.cH(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.d0()
this.c=y}return this.cH(y,b)}else return this.e6(0,b)},
e6:function(a,b){var z,y,x
H.C(b,H.z(this,0))
z=this.d
if(z==null){z=P.d0()
this.d=z}y=this.cK(b)
x=z[y]
if(x==null)z[y]=[this.by(b)]
else{if(this.cP(x,b)>=0)return!1
x.push(this.by(b))}return!0},
P:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cU(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cU(this.c,b)
else return this.eV(0,b)},
eV:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.ek(z,b)
x=this.cP(y,b)
if(x<0)return!1
this.cZ(y.splice(x,1)[0])
return!0},
cH:function(a,b){H.C(b,H.z(this,0))
if(H.k(a[b],"$isd_")!=null)return!1
a[b]=this.by(b)
return!0},
cU:function(a,b){var z
if(a==null)return!1
z=H.k(a[b],"$isd_")
if(z==null)return!1
this.cZ(z)
delete a[b]
return!0},
cI:function(){this.r=this.r+1&67108863},
by:function(a){var z,y
z=new P.d_(H.C(a,H.z(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cI()
return z},
cZ:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cI()},
cK:function(a){return J.aS(a)&0x3ffffff},
ek:function(a,b){return a[this.cK(b)]},
cP:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.S(a[y].a,b))return y
return-1},
n:{
d0:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
d_:{"^":"a;a,0b,0c"},
jy:{"^":"a;a,b,0c,0d,$ti",
gM:function(a){return this.d},
B:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.bb(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.C(z.a,H.z(this,0))
this.c=z.b
return!0}}},
n:{
eK:function(a,b,c){var z=new P.jy(a,b,[c])
z.c=a.e
return z}}},
jr:{"^":"hW;"},
c7:{"^":"jz;",$isd:1,$isf:1},
t:{"^":"a;$ti",
gW:function(a){return new H.dO(a,this.gk(a),0,[H.bI(this,a,"t",0)])},
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
hd:{"^":"aa;"},
he:{"^":"u:12;a,b",
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
for(z=J.bK(this.gap(a));z.B();){y=z.gM(z)
b.$2(y,this.j(a,y))}},
gk:function(a){return J.b9(this.gap(a))},
i:function(a){return P.dQ(a)},
$isa1:1},
hY:{"^":"a;$ti",
i:function(a){return P.cA(this,"{","}")},
C:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.dg("index"))
if(b<0)H.r(P.ah(b,0,null,"index",null))
for(z=P.eK(this,this.r,H.z(this,0)),y=0;z.B();){x=z.d
if(b===y)return x;++y}throw H.h(P.M(b,this,"index",null,y))},
$isd:1},
hW:{"^":"hY;"},
jz:{"^":"a+t;"}}],["","",,P,{"^":"",cv:{"^":"a;$ti"},ds:{"^":"ic;$ti"},fM:{"^":"cv;",
$ascv:function(){return[P.n,[P.f,P.A]]}},iN:{"^":"fM;a"},iO:{"^":"ds;",
fL:function(a,b,c){var z,y,x,w
z=a.length
P.e1(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.k7(0,0,x)
if(w.ej(a,b,z)!==z)w.d_(C.h.c_(a,z-1),0)
return C.I.bu(x,0,w.b)},
fK:function(a){return this.fL(a,0,null)},
$asds:function(){return[P.n,[P.f,P.A]]}},k7:{"^":"a;a,b,c",
d_:function(a,b){var z,y,x,w,v
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
if(b!==c&&(C.h.c_(a,c-1)&64512)===55296)--c
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
fO:function(a){var z=J.J(a)
if(!!z.$isu)return z.i(a)
return"Instance of '"+H.aY(a)+"'"},
ha:function(a,b,c,d){var z,y
H.C(b,d)
z=J.fZ(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.X(z,y,b)
return H.x(z,"$isf",[d],"$asf")},
hb:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gW(a);x.B();)C.a.h(y,H.C(x.gM(x),c))
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
return H.e0(z?C.a.bu(a,b,c):a)}return P.ig(a,b,c)},
ig:function(a,b,c){var z,y,x
H.x(a,"$isd",[P.A],"$asd")
z=J.bK(a)
for(y=0;y<b;++y)if(!z.B())throw H.h(P.ah(b,0,y,null,null))
x=[]
for(;z.B();)x.push(z.gM(z))
return H.e0(x)},
hN:function(a,b,c){return new H.h0(a,H.h1(a,!1,!0,!1))},
k6:function(a,b,c,d){var z,y,x,w,v,u
H.x(a,"$isf",[P.A],"$asf")
if(c===C.q){z=$.$get$eW().b
z=z.test(b)}else z=!1
if(z)return b
y=C.v.fK(H.C(b,H.ay(c,"cv",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.i(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.hI(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
c2:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a4(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fO(a)},
q:function(a){return new P.eH(a)},
de:function(a){H.kS(a)},
a3:{"^":"a;"},
"+bool":0,
am:{"^":"a;a,b",
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.am))return!1
return this.a===b.a&&this.b===b.b},
gT:function(a){var z=this.a
return(z^C.f.b7(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fE(H.hH(this))
y=P.bL(H.hF(this))
x=P.bL(H.hB(this))
w=P.bL(H.hC(this))
v=P.bL(H.hE(this))
u=P.bL(H.hG(this))
t=P.fF(H.hD(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
n:{
fE:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fF:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bL:function(a){if(a>=10)return""+a
return"0"+a}}},
v:{"^":"W;"},
"+double":0,
bd:{"^":"a;a",
a7:function(a,b){return C.f.a7(this.a,H.k(b,"$isbd").a)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.bd))return!1
return this.a===b.a},
gT:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fJ()
y=this.a
if(y<0)return"-"+new P.bd(0-y).i(0)
x=z.$1(C.f.Z(y,6e7)%60)
w=z.$1(C.f.Z(y,1e6)%60)
v=new P.fI().$1(y%1e6)
return""+C.f.Z(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
n:{
dB:function(a,b,c,d,e,f){return new P.bd(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fI:{"^":"u:13;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fJ:{"^":"u:13;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
X:{"^":"a;"},
dW:{"^":"X;",
i:function(a){return"Throw of null."}},
az:{"^":"X;a,b,c,d",
gbB:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbA:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gbB()+y+x
if(!this.a)return w
v=this.gbA()
u=P.c2(this.b)
return w+v+": "+H.j(u)},
n:{
fm:function(a){return new P.az(!1,null,null,a)},
bY:function(a,b,c){return new P.az(!0,a,b,c)},
dg:function(a){return new P.az(!1,null,a,"Must not be null")}}},
c9:{"^":"az;e,f,a,b,c,d",
gbB:function(){return"RangeError"},
gbA:function(){var z,y,x
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
fW:{"^":"az;e,k:f>,a,b,c,d",
gbB:function(){return"RangeError"},
gbA:function(){if(J.fh(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
n:{
M:function(a,b,c,d,e){var z=H.Y(e!=null?e:J.b9(b))
return new P.fW(b,z,!0,a,c,"Index out of range")}}},
iI:{"^":"X;a",
i:function(a){return"Unsupported operation: "+this.a},
n:{
ad:function(a){return new P.iI(a)}}},
iF:{"^":"X;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
n:{
ez:function(a){return new P.iF(a)}}},
i9:{"^":"X;a",
i:function(a){return"Bad state: "+this.a}},
fz:{"^":"X;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.c2(z))+"."},
n:{
bb:function(a){return new P.fz(a)}}},
hx:{"^":"a;",
i:function(a){return"Out of Memory"},
$isX:1},
e6:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isX:1},
fD:{"^":"X;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eH:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
fT:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.h.bv(x,0,75)+"..."
return y+"\n"+x}},
A:{"^":"W;"},
"+int":0,
d:{"^":"a;$ti",
gk:function(a){var z,y
z=this.gW(this)
for(y=0;z.B();)++y
return y},
C:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.dg("index"))
if(b<0)H.r(P.ah(b,0,null,"index",null))
for(z=this.gW(this),y=0;z.B();){x=z.gM(z)
if(b===y)return x;++y}throw H.h(P.M(b,this,"index",null,y))},
i:function(a){return P.fX(this,"(",")")}},
cB:{"^":"a;$ti"},
f:{"^":"a;$ti",$isd:1},
"+List":0,
a1:{"^":"a;$ti"},
I:{"^":"a;",
gT:function(a){return P.a.prototype.gT.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
W:{"^":"a;"},
"+num":0,
a:{"^":";",
q:function(a,b){return this===b},
gT:function(a){return H.bq(this)},
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
if(c.length===0){do a+=H.j(z.gM(z))
while(z.B())}else{a+=H.j(z.gM(z))
for(;z.B();)a=a+c+H.j(z.gM(z))}return a}}}}],["","",,W,{"^":"",
cu:function(a,b){var z=document.createElement("canvas")
return z},
fL:function(a){H.k(a,"$isa6")
return"wheel"},
ce:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eJ:function(a,b,c,d){var z,y
z=W.ce(W.ce(W.ce(W.ce(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
f0:function(a,b){var z
H.b(a,{func:1,ret:-1,args:[b]})
z=$.N
if(z===C.j)return a
return z.d2(a,b)},
bi:{"^":"a_;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
l0:{"^":"o;0k:length=","%":"AccessibleNodeList"},
l1:{"^":"bi;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
l2:{"^":"bi;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
fq:{"^":"o;","%":";Blob"},
ct:{"^":"bi;",
bs:function(a,b,c){if(c!=null)return a.getContext(b,P.kw(c,null))
return a.getContext(b)},
dN:function(a,b){return this.bs(a,b,null)},
$isct:1,
"%":"HTMLCanvasElement"},
dm:{"^":"o;",$isdm:1,"%":"CanvasRenderingContext2D"},
l8:{"^":"K;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
la:{"^":"fC;0k:length=","%":"CSSPerspective"},
bc:{"^":"o;",$isbc:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
lb:{"^":"j7;0k:length=",
dO:function(a,b){var z=a.getPropertyValue(this.ea(a,b))
return z==null?"":z},
ea:function(a,b){var z,y
z=$.$get$dt()
y=z[b]
if(typeof y==="string")return y
y=this.f8(a,b)
z[b]=y
return y},
f8:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fG()+b
if(z in a)return z
return b},
gbW:function(a){return a.bottom},
gaf:function(a){return a.height},
gaI:function(a){return a.left},
gaW:function(a){return a.right},
gb0:function(a){return a.top},
gag:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fB:{"^":"a;",
gaI:function(a){return this.dO(a,"left")}},
du:{"^":"o;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
fC:{"^":"o;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
lc:{"^":"du;0k:length=","%":"CSSTransformValue"},
ld:{"^":"du;0k:length=","%":"CSSUnparsedValue"},
le:{"^":"o;0k:length=","%":"DataTransferItemList"},
lf:{"^":"o;",
i:function(a){return String(a)},
"%":"DOMException"},
lg:{"^":"j9;",
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
fH:{"^":"o;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gag(a))+" x "+H.j(this.gaf(a))},
q:function(a,b){var z
if(b==null)return!1
z=H.bH(b,"$isa9",[P.W],"$asa9")
if(!z)return!1
z=J.ck(b)
return a.left===z.gaI(b)&&a.top===z.gb0(b)&&this.gag(a)===z.gag(b)&&this.gaf(a)===z.gaf(b)},
gT:function(a){return W.eJ(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gag(a)&0x1FFFFFFF,this.gaf(a)&0x1FFFFFFF)},
gbW:function(a){return a.bottom},
gaf:function(a){return a.height},
gaI:function(a){return a.left},
gaW:function(a){return a.right},
gb0:function(a){return a.top},
gag:function(a){return a.width},
$isa9:1,
$asa9:function(){return[P.W]},
"%":";DOMRectReadOnly"},
lh:{"^":"jb;",
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
li:{"^":"o;0k:length=","%":"DOMTokenList"},
j6:{"^":"c7;a,b",
gk:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return H.k(z[b],"$isa_")},
h:function(a,b){this.a.appendChild(b)
return b},
gW:function(a){var z=this.hv(this)
return new J.al(z,z.length,0,[H.z(z,0)])},
$ast:function(){return[W.a_]},
$asd:function(){return[W.a_]},
$asf:function(){return[W.a_]}},
a_:{"^":"K;",
gd4:function(a){return new W.j6(a,a.children)},
gd6:function(a){return P.hK(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.W)},
i:function(a){return a.localName},
$isa_:1,
"%":";Element"},
a5:{"^":"o;",$isa5:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a6:{"^":"o;",
d0:["dR",function(a,b,c,d){H.b(c,{func:1,args:[W.a5]})
if(c!=null)this.e7(a,b,c,!1)}],
e7:function(a,b,c,d){return a.addEventListener(b,H.b5(H.b(c,{func:1,args:[W.a5]}),1),!1)},
$isa6:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eP|eQ|eS|eT"},
bf:{"^":"fq;",$isbf:1,"%":"File"},
lj:{"^":"jg;",
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
lk:{"^":"a6;0k:length=","%":"FileWriter"},
ll:{"^":"bi;0k:length=","%":"HTMLFormElement"},
bh:{"^":"o;",$isbh:1,"%":"Gamepad"},
lm:{"^":"o;0k:length=","%":"History"},
ln:{"^":"jt;",
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
c4:{"^":"o;0d8:data=",$isc4:1,"%":"ImageData"},
dF:{"^":"bi;",$isdF:1,"%":"HTMLImageElement"},
bk:{"^":"cU;",$isbk:1,"%":"KeyboardEvent"},
lr:{"^":"o;",
i:function(a){return String(a)},
"%":"Location"},
ls:{"^":"o;0k:length=","%":"MediaList"},
lt:{"^":"a6;",
d0:function(a,b,c,d){H.b(c,{func:1,args:[W.a5]})
if(b==="message")a.start()
this.dR(a,b,c,!1)},
"%":"MessagePort"},
lu:{"^":"jA;",
j:function(a,b){return P.aJ(a.get(H.R(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aJ(y.value[1]))}},
gap:function(a){var z=H.c([],[P.n])
this.J(a,new W.hp(z))
return z},
gk:function(a){return a.size},
$asaa:function(){return[P.n,null]},
$isa1:1,
$asa1:function(){return[P.n,null]},
"%":"MIDIInputMap"},
hp:{"^":"u:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lv:{"^":"jB;",
j:function(a,b){return P.aJ(a.get(H.R(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aJ(y.value[1]))}},
gap:function(a){var z=H.c([],[P.n])
this.J(a,new W.hq(z))
return z},
gk:function(a){return a.size},
$asaa:function(){return[P.n,null]},
$isa1:1,
$asa1:function(){return[P.n,null]},
"%":"MIDIOutputMap"},
hq:{"^":"u:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bl:{"^":"o;",$isbl:1,"%":"MimeType"},
lw:{"^":"jD;",
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
an:{"^":"cU;",$isan:1,"%":"PointerEvent;DragEvent|MouseEvent"},
j5:{"^":"c7;a",
gW:function(a){var z=this.a.childNodes
return new W.dD(z,z.length,-1,[H.bI(C.J,z,"y",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
$ast:function(){return[W.K]},
$asd:function(){return[W.K]},
$asf:function(){return[W.K]}},
K:{"^":"a6;",
i:function(a){var z=a.nodeValue
return z==null?this.dS(a):z},
$isK:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hv:{"^":"jF;",
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
lF:{"^":"jJ;",
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
lH:{"^":"jP;",
j:function(a,b){return P.aJ(a.get(H.R(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aJ(y.value[1]))}},
gap:function(a){var z=H.c([],[P.n])
this.J(a,new W.hT(z))
return z},
gk:function(a){return a.size},
$asaa:function(){return[P.n,null]},
$isa1:1,
$asa1:function(){return[P.n,null]},
"%":"RTCStatsReport"},
hT:{"^":"u:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lI:{"^":"bi;0k:length=","%":"HTMLSelectElement"},
br:{"^":"a6;",$isbr:1,"%":"SourceBuffer"},
lJ:{"^":"eQ;",
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
lK:{"^":"jR;",
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
lM:{"^":"jU;",
j:function(a,b){return a.getItem(H.R(b))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,P.n]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gap:function(a){var z=H.c([],[P.n])
this.J(a,new W.ib(z))
return z},
gk:function(a){return a.length},
$asaa:function(){return[P.n,P.n]},
$isa1:1,
$asa1:function(){return[P.n,P.n]},
"%":"Storage"},
ib:{"^":"u:38;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bu:{"^":"o;",$isbu:1,"%":"CSSStyleSheet|StyleSheet"},
bv:{"^":"a6;",$isbv:1,"%":"TextTrack"},
bw:{"^":"a6;",$isbw:1,"%":"TextTrackCue|VTTCue"},
lQ:{"^":"jY;",
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
lR:{"^":"eT;",
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
lS:{"^":"o;0k:length=","%":"TimeRanges"},
bx:{"^":"o;",$isbx:1,"%":"Touch"},
b_:{"^":"cU;",$isb_:1,"%":"TouchEvent"},
lT:{"^":"k3;",
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
lU:{"^":"o;0k:length=","%":"TrackDefaultList"},
cU:{"^":"a5;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
lX:{"^":"o;",
i:function(a){return String(a)},
"%":"URL"},
lY:{"^":"a6;0k:length=","%":"VideoTrackList"},
bA:{"^":"an;",
gfP:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.ad("deltaY is not supported"))},
gfO:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.ad("deltaX is not supported"))},
$isbA:1,
"%":"WheelEvent"},
iZ:{"^":"a6;",
eW:function(a,b){return a.requestAnimationFrame(H.b5(H.b(b,{func:1,ret:-1,args:[P.W]}),1))},
ei:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
m2:{"^":"ka;",
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
m3:{"^":"fH;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
q:function(a,b){var z
if(b==null)return!1
z=H.bH(b,"$isa9",[P.W],"$asa9")
if(!z)return!1
z=J.ck(b)
return a.left===z.gaI(b)&&a.top===z.gb0(b)&&a.width===z.gag(b)&&a.height===z.gaf(b)},
gT:function(a){return W.eJ(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gaf:function(a){return a.height},
gag:function(a){return a.width},
"%":"ClientRect|DOMRect"},
m5:{"^":"kc;",
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
m6:{"^":"ke;",
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
m7:{"^":"kg;",
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
m8:{"^":"ki;",
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
jc:{"^":"cP;a,b,c,$ti",
h1:function(a,b,c,d){var z=H.z(this,0)
H.b(a,{func:1,ret:-1,args:[z]})
H.b(c,{func:1,ret:-1})
return W.V(this.a,this.b,a,!1,z)}},
m4:{"^":"jc;a,b,c,$ti"},
jd:{"^":"e8;a,b,c,d,e,$ti",
fc:function(){var z=this.d
if(z!=null&&this.a<=0)J.fj(this.b,this.c,z,!1)},
n:{
V:function(a,b,c,d,e){var z=c==null?null:W.f0(new W.je(c),W.a5)
z=new W.jd(0,a,b,z,!1,[e])
z.fc()
return z}}},
je:{"^":"u:7;a",
$1:function(a){return this.a.$1(H.k(a,"$isa5"))}},
y:{"^":"a;$ti",
gW:function(a){return new W.dD(a,this.gk(a),-1,[H.bI(this,a,"y",0)])}},
dD:{"^":"a;a,b,c,0d,$ti",
B:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fi(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gM:function(a){return this.d}},
j7:{"^":"o+fB;"},
j8:{"^":"o+t;"},
j9:{"^":"j8+y;"},
ja:{"^":"o+t;"},
jb:{"^":"ja+y;"},
jf:{"^":"o+t;"},
jg:{"^":"jf+y;"},
js:{"^":"o+t;"},
jt:{"^":"js+y;"},
jA:{"^":"o+aa;"},
jB:{"^":"o+aa;"},
jC:{"^":"o+t;"},
jD:{"^":"jC+y;"},
jE:{"^":"o+t;"},
jF:{"^":"jE+y;"},
jI:{"^":"o+t;"},
jJ:{"^":"jI+y;"},
jP:{"^":"o+aa;"},
eP:{"^":"a6+t;"},
eQ:{"^":"eP+y;"},
jQ:{"^":"o+t;"},
jR:{"^":"jQ+y;"},
jU:{"^":"o+aa;"},
jX:{"^":"o+t;"},
jY:{"^":"jX+y;"},
eS:{"^":"a6+t;"},
eT:{"^":"eS+y;"},
k2:{"^":"o+t;"},
k3:{"^":"k2+y;"},
k9:{"^":"o+t;"},
ka:{"^":"k9+y;"},
kb:{"^":"o+t;"},
kc:{"^":"kb+y;"},
kd:{"^":"o+t;"},
ke:{"^":"kd+y;"},
kf:{"^":"o+t;"},
kg:{"^":"kf+y;"},
kh:{"^":"o+t;"},
ki:{"^":"kh+y;"}}],["","",,P,{"^":"",
kz:function(a){var z,y
z=J.J(a)
if(!!z.$isc4){y=z.gd8(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.eV(a.data,a.height,a.width)},
ky:function(a){if(a instanceof P.eV)return{data:a.a,height:a.b,width:a.c}
return a},
aJ:function(a){var z,y,x,w,v
if(a==null)return
z=P.h7(P.n,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w){v=H.R(y[w])
z.X(0,v,a[v])}return z},
kw:function(a,b){var z={}
a.J(0,new P.kx(z))
return z},
dA:function(){var z=$.dz
if(z==null){z=J.co(window.navigator.userAgent,"Opera",0)
$.dz=z}return z},
fG:function(){var z,y
z=$.dw
if(z!=null)return z
y=$.dx
if(y==null){y=J.co(window.navigator.userAgent,"Firefox",0)
$.dx=y}if(y)z="-moz-"
else{y=$.dy
if(y==null){y=!P.dA()&&J.co(window.navigator.userAgent,"Trident/",0)
$.dy=y}if(y)z="-ms-"
else z=P.dA()?"-o-":"-webkit-"}$.dw=z
return z},
eV:{"^":"a;d8:a>,b,c",$isc4:1},
kx:{"^":"u:12;a",
$2:function(a,b){this.a[a]=b}},
fQ:{"^":"c7;a,b",
gbF:function(){var z,y,x
z=this.b
y=H.ay(z,"t",0)
x=W.a_
return new H.hf(new H.iX(z,H.b(new P.fR(),{func:1,ret:P.a3,args:[y]}),[y]),H.b(new P.fS(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.b9(this.gbF().a)},
j:function(a,b){var z=this.gbF()
return z.b.$1(J.df(z.a,b))},
gW:function(a){var z=P.hb(this.gbF(),!1,W.a_)
return new J.al(z,z.length,0,[H.z(z,0)])},
$ast:function(){return[W.a_]},
$asd:function(){return[W.a_]},
$asf:function(){return[W.a_]}},
fR:{"^":"u:24;",
$1:function(a){return!!J.J(H.k(a,"$isK")).$isa_}},
fS:{"^":"u:25;",
$1:function(a){return H.e(H.k(a,"$isK"),"$isa_")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cf:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ju:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jK:{"^":"a;$ti",
gaW:function(a){var z=this.a
if(typeof z!=="number")return z.D()
return H.C(z+this.c,H.z(this,0))},
gbW:function(a){var z=this.b
if(typeof z!=="number")return z.D()
return H.C(z+this.d,H.z(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
q:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bH(b,"$isa9",[P.W],"$asa9")
if(!z)return!1
z=this.a
y=J.ck(b)
x=y.gaI(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb0(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.D()
w=H.z(this,0)
if(H.C(z+this.c,w)===y.gaW(b)){if(typeof x!=="number")return x.D()
z=H.C(x+this.d,w)===y.gbW(b)}else z=!1}else z=!1}else z=!1
return z},
gT:function(a){var z,y,x,w,v
z=this.a
y=J.aS(z)
x=this.b
w=J.aS(x)
if(typeof z!=="number")return z.D()
v=H.z(this,0)
z=H.C(z+this.c,v)
if(typeof x!=="number")return x.D()
v=H.C(x+this.d,v)
return P.ju(P.cf(P.cf(P.cf(P.cf(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a9:{"^":"jK;aI:a>,b0:b>,ag:c>,af:d>,$ti",n:{
hK:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.a7()
if(c<0)z=-c*0
else z=c
H.C(z,e)
if(typeof d!=="number")return d.a7()
if(d<0)y=-d*0
else y=d
return new P.a9(a,b,z,H.C(y,e),[e])}}}}],["","",,P,{"^":"",bP:{"^":"o;",$isbP:1,"%":"SVGLength"},lq:{"^":"jw;",
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
"%":"SVGLengthList"},bR:{"^":"o;",$isbR:1,"%":"SVGNumber"},lD:{"^":"jH;",
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
"%":"SVGNumberList"},lG:{"^":"o;0k:length=","%":"SVGPointList"},lN:{"^":"jW;",
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
"%":"SVGStringList"},lO:{"^":"a_;",
gd4:function(a){return new P.fQ(a,new W.j5(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"},bU:{"^":"o;",$isbU:1,"%":"SVGTransform"},lV:{"^":"k5;",
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
"%":"SVGTransformList"},jv:{"^":"o+t;"},jw:{"^":"jv+y;"},jG:{"^":"o+t;"},jH:{"^":"jG+y;"},jV:{"^":"o+t;"},jW:{"^":"jV+y;"},k4:{"^":"o+t;"},k5:{"^":"k4+y;"}}],["","",,P,{"^":"",l3:{"^":"o;0k:length=","%":"AudioBuffer"},l4:{"^":"j4;",
j:function(a,b){return P.aJ(a.get(H.R(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aJ(y.value[1]))}},
gap:function(a){var z=H.c([],[P.n])
this.J(a,new P.fo(z))
return z},
gk:function(a){return a.size},
$asaa:function(){return[P.n,null]},
$isa1:1,
$asa1:function(){return[P.n,null]},
"%":"AudioParamMap"},fo:{"^":"u:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},l5:{"^":"a6;0k:length=","%":"AudioTrackList"},fp:{"^":"a6;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lE:{"^":"fp;0k:length=","%":"OfflineAudioContext"},j4:{"^":"o+aa;"}}],["","",,P,{"^":"",cM:{"^":"o;",
hs:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.J(g)
if(!!z.$isc4)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.ky(g))
return}if(!!z.$isdF)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.h(P.fm("Incorrect number or type of arguments"))},
hr:function(a,b,c,d,e,f,g){return this.hs(a,b,c,d,e,f,g,null,null,null)},
$iscM:1,
"%":"WebGLRenderingContext"},ih:{"^":"o;",$isih:1,"%":"WebGLTexture"},iD:{"^":"o;",$isiD:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",lL:{"^":"jT;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return P.aJ(a.item(b))},
C:function(a,b){return this.j(a,b)},
$ast:function(){return[[P.a1,,,]]},
$isd:1,
$asd:function(){return[[P.a1,,,]]},
$isf:1,
$asf:function(){return[[P.a1,,,]]},
$asy:function(){return[[P.a1,,,]]},
"%":"SQLResultSetRowList"},jS:{"^":"o+t;"},jT:{"^":"jS+y;"}}],["","",,O,{"^":"",af:{"^":"a;0a,0b,0c,0d,$ti",
b3:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
ct:function(a,b,c){var z=H.ay(this,"af",0)
H.b(b,{func:1,ret:P.a3,args:[[P.d,z]]})
z={func:1,ret:-1,args:[P.A,[P.d,z]]}
H.b(a,z)
H.b(c,z)
this.b=b
this.c=a
this.d=c},
aM:function(a,b){return this.ct(a,null,b)},
cS:function(a){var z
H.x(a,"$isd",[H.ay(this,"af",0)],"$asd")
z=this.b
if(z!=null)return z.$1(a)
return!0},
cC:function(a,b){var z
H.x(b,"$isd",[H.ay(this,"af",0)],"$asd")
z=this.c
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
gW:function(a){var z=this.a
return new J.al(z,z.length,0,[H.z(z,0)])},
C:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.ay(this,"af",0)
H.C(b,z)
z=[z]
if(this.cS(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.cC(x,H.c([b],z))}},
bR:function(a,b){var z,y
H.x(b,"$isd",[H.ay(this,"af",0)],"$asd")
if(this.cS(b)){z=this.a
y=z.length
C.a.bR(z,b)
this.cC(y,b)}},
$isd:1,
n:{
cw:function(a){var z=new O.af([a])
z.b3(a)
return z}}},cI:{"^":"a;0a,0b",
gk:function(a){return this.a.length},
gp:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
e_:function(a){var z=this.b
if(!(z==null))z.t(a)},
at:function(){return this.e_(null)},
gS:function(a){var z=this.a
if(z.length>0)return C.a.gcd(z)
else return V.aX()},
bp:function(a){var z=this.a
if(a==null)C.a.h(z,V.aX())
else C.a.h(z,a)
this.at()},
aq:function(){var z=this.a
if(z.length>0){z.pop()
this.at()}}}}],["","",,E,{"^":"",cp:{"^":"a;"},aA:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0Y:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sbt:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gp()
y.toString
x=H.b(this.gdG(),{func:1,ret:-1,args:[D.l]})
C.a.P(y.a,x)}y=this.c
if(y!=null){y=y.gp()
y.toString
x=H.b(this.gdG(),{func:1,ret:-1,args:[D.l]})
C.a.h(y.a,x)}w=new D.D("shape",z,this.c,this,[F.e4])
w.b=!0
this.aJ(w)}},
ad:function(a,b){var z
for(z=this.y.a,z=new J.al(z,z.length,0,[H.z(z,0)]);z.B();)z.d.ad(0,b)},
a2:function(a){var z,y
z=a.dx
C.a.h(z.a,z.gS(z))
z.at()
a.cm(this.f)
z=a.dy
y=(z&&C.a).gcd(z)
if(y!=null&&this.d!=null)y.dH(a,this)
for(z=this.y.a,z=new J.al(z,z.length,0,[H.z(z,0)]);z.B();)z.d.a2(a)
a.cl()
a.dx.aq()},
gp:function(){var z=this.z
if(z==null){z=D.E()
this.z=z}return z},
aJ:function(a){var z=this.z
if(!(z==null))z.t(a)},
a_:function(){return this.aJ(null)},
h9:[function(a){H.k(a,"$isl")
this.e=null
this.aJ(a)},function(){return this.h9(null)},"ih","$1","$0","gdG",0,2,0],
h7:[function(a){this.aJ(H.k(a,"$isl"))},function(){return this.h7(null)},"ie","$1","$0","gdF",0,2,0],
ic:[function(a,b){var z,y,x,w,v,u,t
H.x(b,"$isd",[E.aA],"$asd")
for(z=b.length,y=this.gdF(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.w)(b),++v){u=b[v]
if(u!=null){if(u.gY()==null){t=new D.aT()
t.a=H.c([],w)
t.c=0
u.sY(t)}t=u.gY()
t.toString
H.b(y,x)
C.a.h(t.a,y)}}this.a_()},"$2","gh6",8,0,8],
ig:[function(a,b){var z,y,x,w,v,u,t
H.x(b,"$isd",[E.aA],"$asd")
for(z=b.length,y=this.gdF(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.w)(b),++v){u=b[v]
if(u!=null){if(u.gY()==null){t=new D.aT()
t.a=H.c([],w)
t.c=0
u.sY(t)}t=u.gY()
t.toString
H.b(y,x)
C.a.P(t.a,y)}}this.a_()},"$2","gh8",8,0,8],
$isat:1,
n:{
dC:function(a,b,c,d,e,f){var z,y
z=new E.aA()
z.a=d
z.b=!0
y=O.cw(E.aA)
z.y=y
y.aM(z.gh6(),z.gh8())
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
z.sbt(0,e)
return z}}},hO:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
dX:function(a,b){var z,y,x,w,v
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
v=H.b(new E.hQ(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cI()
z.a=H.c([],y)
v=z.gp()
v.toString
x=H.b(new E.hR(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cI()
z.a=H.c([],y)
y=z.gp()
y.toString
w=H.b(new E.hS(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.c([],[O.bT])
this.dy=z
C.a.h(z,null)
this.fr=new H.aV(0,0,[P.n,A.cN])},
ghi:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gS(z)
y=this.db
y=z.l(0,y.gS(y))
this.z=y
z=y}return z},
cm:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gcd(z):a;(z&&C.a).h(z,y)},
cl:function(){var z=this.dy
if(z.length>1)z.pop()},
d1:function(a){var z=a.b
if(z.length===0)throw H.h(P.q("May not cache a shader with no name."))
if(this.fr.d7(0,z))throw H.h(P.q('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.X(0,z,a)},
n:{
hP:function(a,b){var z=new E.hO(a,b)
z.dX(a,b)
return z}}},hQ:{"^":"u:9;a",
$1:function(a){var z
H.k(a,"$isl")
z=this.a
z.z=null
z.ch=null}},hR:{"^":"u:9;a",
$1:function(a){var z
H.k(a,"$isl")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hS:{"^":"u:9;a",
$1:function(a){var z
H.k(a,"$isl")
z=this.a
z.ch=null
z.cx=null}},io:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0Y:x@,0y,0z,0Q,0ch",
gp:function(){var z=this.x
if(z==null){z=D.E()
this.x=z}return z},
e1:[function(a){var z
H.k(a,"$isl")
z=this.x
if(!(z==null))z.t(a)
this.hm()},function(){return this.e1(null)},"e0","$1","$0","gcD",0,2,0],
gfU:function(){var z,y,x
z=Date.now()
y=C.f.Z(P.dB(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.am(z,!1)
return x/y},
cV:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.l()
if(typeof z!=="number")return H.p(z)
x=C.i.ca(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.l()
w=C.i.ca(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.ec(C.l,this.ghl())},
hm:[function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.b(new E.iq(this),{func:1,ret:-1,args:[P.W]})
C.t.ei(z)
C.t.eW(z,W.f0(y,P.W))}},"$0","ghl",0,0,3],
hk:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cV()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.am(w,!1)
x.y=P.dB(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sk(w.a,0)
w.at()
w=x.db
C.a.sk(w.a,0)
w.at()
w=x.dx
C.a.sk(w.a,0)
w.at()
w=x.dy;(w&&C.a).sk(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a2(this.e)}}catch(v){z=H.aR(v)
y=H.b7(v)
P.de("Error: "+H.j(z))
P.de("Stack: "+H.j(y))
throw H.h(z)}},
n:{
ip:function(a,b,c,d,e){var z,y,x,w
z=J.J(a)
if(!!z.$isct)return E.eb(a,!0,!0,!0,!1)
y=W.cu(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gd4(a).h(0,y)
w=E.eb(y,!0,!0,!0,!1)
w.a=a
return w},
eb:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.io()
y=P.h8(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.n,null)
x=C.k.bs(a,"webgl",y)
x=H.k(x==null?C.k.bs(a,"experimental-webgl",y):x,"$iscM")
if(x==null)H.r(P.q("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hP(x,a)
w=new T.ii(x)
w.b=H.Y(x.getParameter(3379))
w.c=H.Y(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.iJ(a)
v=new X.h3()
v.c=new X.as(!1,!1,!1)
v.d=P.h9(null,null,null,P.A)
w.b=v
v=new X.hr(w)
v.f=0
v.r=new V.O(0,0)
v.x=new V.O(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.hc(w)
v.r=0
v.x=new V.O(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.it(w)
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
C.a.h(v,W.V(u,"contextmenu",H.b(w.geA(),s),!1,t))
v=w.z
r=W.a5
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.V(a,"focus",H.b(w.geD(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.V(a,"blur",H.b(w.gex(),q),!1,r))
v=w.z
p=W.bk
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.V(u,"keyup",H.b(w.geF(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.V(u,"keydown",H.b(w.geE(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.V(a,"mousedown",H.b(w.geI(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.V(a,"mouseup",H.b(w.geK(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.V(a,"mousemove",H.b(w.geJ(),s),!1,t))
p=w.z
o=W.bA;(p&&C.a).h(p,W.V(a,H.R(W.fL(a)),H.b(w.geL(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.V(u,"mousemove",H.b(w.geB(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.V(u,"mouseup",H.b(w.geC(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.V(u,"pointerlockchange",H.b(w.geM(),q),!1,r))
r=w.z
q=W.b_
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.V(a,"touchstart",H.b(w.geU(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.V(a,"touchend",H.b(w.geS(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.V(a,"touchmove",H.b(w.geT(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.am(Date.now(),!1)
z.ch=0
z.cV()
return z}}},iq:{"^":"u:28;a",
$1:function(a){var z
H.kR(a)
z=this.a
if(z.z){z.z=!1
z.hk()}}}}],["","",,Z,{"^":"",eE:{"^":"a;a,b",n:{
cY:function(a,b,c){var z
H.x(c,"$isf",[P.A],"$asf")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bD(c)),35044)
a.bindBuffer(b,null)
return new Z.eE(b,z)}}},dk:{"^":"cp;a,b,c,d,e",
R:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aR(y)
x=P.q('Failed to bind buffer attribute "'+J.a4(this.a)+'": '+H.j(z))
throw H.h(x)}},
i:function(a){return"["+J.a4(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},eF:{"^":"a;a",$isl6:1},cs:{"^":"a;a,0b,c,d",
ao:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
R:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].R(a)},
as:function(a){var z,y,x
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
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a4(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.w(y,", ")+"\nAttrs:   "+C.a.w(u,", ")},
$islP:1},c5:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aY(this.c)+"'")+"]"}},b0:{"^":"a;a",
gcv:function(a){var z,y
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
fG:function(a){var z,y,x
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
return $.$get$eD()},
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
aj:function(a){return new Z.b0(a)}}}}],["","",,D,{"^":"",dn:{"^":"a;"},aT:{"^":"a;0a,0b,0c",
t:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.l(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.J(y,new D.fP(z))
return x!==0},
fQ:function(){return this.t(null)},
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
E:function(){var z=new D.aT()
z.a=H.c([],[{func:1,ret:-1,args:[D.l]}])
z.c=0
return z}}},fP:{"^":"u:29;a",
$1:function(a){var z
H.b(a,{func:1,ret:-1,args:[D.l]})
z=this.a.a
z.b
a.$1(z)}},l:{"^":"a;a,0b"},bM:{"^":"l;c,d,a,0b,$ti"},bN:{"^":"l;c,d,a,0b,$ti"},D:{"^":"l;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",dl:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dl))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)},
n:{"^":"l7<"}},dK:{"^":"a;a,b",
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dK))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},dL:{"^":"l;c,a,0b"},h3:{"^":"a;0a,0b,0c,0d",
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
this.d.P(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dL(a,this)
y.b=!0
return z.t(y)}},dP:{"^":"c8;x,y,c,d,e,a,0b"},hc:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ak:function(a,b){var z,y,x,w,v,u,t,s
z=new P.am(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.l()
v=b.b
u=this.ch
if(typeof v!=="number")return v.l()
t=new V.O(y.a+x*w,y.b+v*u)
u=this.a.gaC()
s=new X.bm(a,new V.O(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
ck:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.t(this.ak(a,b))
return!0},
aU:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dQ()
if(typeof z!=="number")return z.dL()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.t(this.ak(a,b))
return!0},
aT:function(a,b){var z=this.d
if(z==null)return!1
z.t(this.ak(a,b))
return!0},
hg:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaC()
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
eH:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.am(Date.now(),!1)
y=this.f
x=new X.dP(c,a,this.a.gaC(),b,z,this)
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
return z+(this.c?"Shift+":"")}},bm:{"^":"c8;x,y,z,Q,ch,c,d,e,a,0b"},hr:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bC:function(a,b,c){var z,y,x
z=new P.am(Date.now(),!1)
y=this.a.gaC()
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
z.t(this.bC(a,b,!0))
return!0},
aU:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dQ()
if(typeof z!=="number")return z.dL()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.t(this.bC(a,b,!0))
return!0},
aT:function(a,b){var z=this.d
if(z==null)return!1
z.t(this.bC(a,b,!1))
return!0},
hh:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaC()
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
gda:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
gbr:function(){var z=this.c
if(z==null){z=D.E()
this.c=z}return z},
gdE:function(){var z=this.d
if(z==null){z=D.E()
this.d=z}return z}},cJ:{"^":"c8;x,c,d,e,a,0b"},c8:{"^":"l;"},eg:{"^":"c8;x,y,z,Q,ch,c,d,e,a,0b"},it:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
ak:function(a,b){var z,y,x,w
H.x(a,"$isf",[V.O],"$asf")
z=new P.am(Date.now(),!1)
y=a.length>0?a[0]:new V.O(0,0)
x=this.a.gaC()
w=new X.eg(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
he:function(a){var z
H.x(a,"$isf",[V.O],"$asf")
z=this.b
if(z==null)return!1
z.t(this.ak(a,!0))
return!0},
hc:function(a){var z
H.x(a,"$isf",[V.O],"$asf")
z=this.c
if(z==null)return!1
z.t(this.ak(a,!0))
return!0},
hd:function(a){var z
H.x(a,"$isf",[V.O],"$asf")
z=this.d
if(z==null)return!1
z.t(this.ak(a,!1))
return!0}},iJ:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaC:function(){var z=this.a
return V.e3(0,0,(z&&C.k).gd6(z).c,C.k.gd6(z).d)},
cN:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dK(z,new X.as(y,a.altKey,a.shiftKey))},
aB:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.as(y,a.altKey,a.shiftKey)},
bQ:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.as(y,a.altKey,a.shiftKey)},
al:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.E()
v=z.top
if(typeof x!=="number")return x.E()
return new V.O(y-w,x-v)},
aN:function(a){return new V.P(a.movementX,a.movementY)},
bM:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.O])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.w)(x),++v){u=x[v]
t=C.i.ac(u.pageX)
C.i.ac(u.pageY)
s=z.left
C.i.ac(u.pageX)
C.a.h(y,new V.O(t-s,C.i.ac(u.pageY)-z.top))}return y},
ai:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dl(z,new X.as(y,a.altKey,a.shiftKey))},
bG:function(a){var z,y,x,w,v,u
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
hP:[function(a){this.f=!0},"$1","geD",4,0,7],
hJ:[function(a){this.f=!1},"$1","gex",4,0,7],
hM:[function(a){H.k(a,"$isan")
if(this.f&&this.bG(a))a.preventDefault()},"$1","geA",4,0,4],
hR:[function(a){var z
H.k(a,"$isbk")
if(!this.f)return
z=this.cN(a)
if(this.b.hf(z))a.preventDefault()},"$1","geF",4,0,16],
hQ:[function(a){var z
H.k(a,"$isbk")
if(!this.f)return
z=this.cN(a)
if(this.b.hb(z))a.preventDefault()},"$1","geE",4,0,16],
hT:[function(a){var z,y,x,w
H.k(a,"$isan")
z=this.a
z.focus()
this.f=!0
this.aB(a)
if(this.x){y=this.ai(a)
x=this.aN(a)
if(this.d.ck(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ai(a)
w=this.al(a)
if(this.c.ck(y,w))a.preventDefault()},"$1","geI",4,0,4],
hV:[function(a){var z,y,x
H.k(a,"$isan")
this.aB(a)
z=this.ai(a)
if(this.x){y=this.aN(a)
if(this.d.aU(z,y))a.preventDefault()
return}if(this.r)return
x=this.al(a)
if(this.c.aU(z,x))a.preventDefault()},"$1","geK",4,0,4],
hO:[function(a){var z,y,x
H.k(a,"$isan")
if(!this.bG(a)){this.aB(a)
z=this.ai(a)
if(this.x){y=this.aN(a)
if(this.d.aU(z,y))a.preventDefault()
return}if(this.r)return
x=this.al(a)
if(this.c.aU(z,x))a.preventDefault()}},"$1","geC",4,0,4],
hU:[function(a){var z,y,x
H.k(a,"$isan")
this.aB(a)
z=this.ai(a)
if(this.x){y=this.aN(a)
if(this.d.aT(z,y))a.preventDefault()
return}if(this.r)return
x=this.al(a)
if(this.c.aT(z,x))a.preventDefault()},"$1","geJ",4,0,4],
hN:[function(a){var z,y,x
H.k(a,"$isan")
if(!this.bG(a)){this.aB(a)
z=this.ai(a)
if(this.x){y=this.aN(a)
if(this.d.aT(z,y))a.preventDefault()
return}if(this.r)return
x=this.al(a)
if(this.c.aT(z,x))a.preventDefault()}},"$1","geB",4,0,4],
hW:[function(a){var z,y
H.k(a,"$isbA")
this.aB(a)
z=new V.P((a&&C.r).gfO(a),C.r.gfP(a)).u(0,180)
if(this.x){if(this.d.hg(z))a.preventDefault()
return}if(this.r)return
y=this.al(a)
if(this.c.hh(z,y))a.preventDefault()},"$1","geL",4,0,31],
hX:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ai(this.y)
v=this.al(this.y)
this.d.eH(w,v,x)}},"$1","geM",4,0,7],
i4:[function(a){var z
H.k(a,"$isb_")
this.a.focus()
this.f=!0
this.bQ(a)
z=this.bM(a)
if(this.e.he(z))a.preventDefault()},"$1","geU",4,0,10],
i2:[function(a){var z
H.k(a,"$isb_")
this.bQ(a)
z=this.bM(a)
if(this.e.hc(z))a.preventDefault()},"$1","geS",4,0,10],
i3:[function(a){var z
H.k(a,"$isb_")
this.bQ(a)
z=this.bM(a)
if(this.e.hd(z))a.preventDefault()},"$1","geT",4,0,10]}}],["","",,D,{"^":"",c1:{"^":"a;0a,0b,0c,0d",
gp:function(){var z=this.d
if(z==null){z=D.E()
this.d=z}return z},
au:[function(a){var z
H.k(a,"$isl")
z=this.d
if(!(z==null))z.t(a)},function(){return this.au(null)},"hy","$1","$0","ge2",0,2,0],
$isU:1,
$isat:1},U:{"^":"a;",$isat:1},h4:{"^":"af;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gp:function(){var z=this.Q
if(z==null){z=D.E()
this.Q=z}return z},
au:function(a){var z=this.Q
if(!(z==null))z.t(a)},
eG:[function(a){var z
H.k(a,"$isl")
z=this.ch
if(!(z==null))z.t(a)},function(){return this.eG(null)},"hS","$1","$0","gcR",0,2,0],
hY:[function(a){var z,y,x
H.x(a,"$isd",[D.U],"$asd")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.w)(a),++y){x=a[y]
if(x==null||this.ee(x))return!1}return!0},"$1","geN",4,0,33],
hG:[function(a,b){var z,y,x,w,v,u,t,s
z=D.U
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gcR(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.w)(b),++u){t=H.k(b[u],"$isU")
if(t instanceof D.c1)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aT()
s.a=H.c([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.h(s.a,x)}z=new D.bM(a,b,this,[z])
z.b=!0
this.au(z)},"$2","geu",8,0,17],
i_:[function(a,b){var z,y,x,w,v,u,t,s
z=D.U
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gcR(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.w)(b),++u){t=H.k(b[u],"$isU")
if(t instanceof D.c1)C.a.P(this.e,t)
s=t.d
if(s==null){s=new D.aT()
s.a=H.c([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.P(s.a,x)}z=new D.bN(a,b,this,[z])
z.b=!0
this.au(z)},"$2","geP",8,0,17],
ee:function(a){var z=C.a.aQ(this.e,a)
return z},
$asd:function(){return[D.U]},
$asaf:function(){return[D.U]}},hA:{"^":"a;",$isU:1,$isat:1},i8:{"^":"a;",$isU:1,$isat:1},ik:{"^":"a;",$isU:1,$isat:1},il:{"^":"a;",$isU:1,$isat:1},im:{"^":"a;",$isU:1,$isat:1}}],["","",,V,{"^":"",
l9:[function(a,b){if(typeof b!=="number")return b.E()
if(typeof a!=="number")return H.p(a)
return Math.abs(b-a)<=1e-9},"$2","ho",8,0,32],
l_:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.i.dP(a-b,z)
return(a<0?a+z:a)+b},
L:function(a,b,c){if(a==null)return C.h.a6("null",c)
return C.h.a6(C.i.dK($.m.$2(a,0)?0:a,b),c+b+1)},
b6:function(a,b,c){var z,y,x,w,v,u
H.x(a,"$isf",[P.v],"$asf")
z=H.c([],[P.n])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.w)(a),++w){v=V.L(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.i(z,u)
C.a.X(z,u,C.h.a6(z[u],x))}return z},
dd:function(a,b){return C.i.hu(Math.pow(b,C.y.ca(Math.log(H.kv(a))/Math.log(b))))},
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
cc:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
b1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
dA:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
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
F:function(){return this.dA("",3,0)},
v:function(a){return this.dA(a,3,0)},
n:{
ar:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aB(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aX:function(){return V.ar(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
dU:function(a,b,c){var z,y,x,w,v
z=c.u(0,Math.sqrt(c.A(c)))
y=b.aR(z)
x=y.u(0,Math.sqrt(y.A(y)))
w=z.aR(x)
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
h_:[function(a){return Math.sqrt(this.A(this))},"$0","gk",1,0,18],
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
h_:[function(a){return Math.sqrt(this.A(this))},"$0","gk",1,0,18],
A:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ce:function(a,b){var z,y,x
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
u:function(a,b){if($.m.$2(b,0))return new V.G(0,0,0)
return new V.G(this.a/b,this.b/b,this.c/b)},
dC:function(){if(!$.m.$2(0,this.a))return!1
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
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}}],["","",,U,{"^":"",fx:{"^":"dn;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bx:function(a){var z=V.l_(a,this.c,this.b)
return z},
gp:function(){var z=this.y
if(z==null){z=D.E()
this.y=z}return z},
I:function(a){var z=this.y
if(!(z==null))z.t(a)},
scp:function(a,b){},
scg:function(a){var z,y
z=this.b
if(!$.m.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bx(z)}z=new D.D("maximumLocation",y,this.b,this,[P.v])
z.b=!0
this.I(z)}},
scj:function(a){var z,y
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bx(z)}z=new D.D("minimumLocation",y,this.c,this,[P.v])
z.b=!0
this.I(z)}},
sa0:function(a,b){var z,y
b=this.bx(b)
z=this.d
if(!$.m.$2(z,b)){y=this.d
this.d=b
z=new D.D("location",y,b,this,[P.v])
z.b=!0
this.I(z)}},
sci:function(a){var z,y,x
z=this.e
if(!$.m.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.D("maximumVelocity",y,a,this,[P.v])
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
z=new D.D("velocity",x,a,this,[P.v])
z.b=!0
this.I(z)}},
sc1:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.m.$2(z,a)){y=this.x
this.x=a
z=new D.D("dampening",y,a,this,[P.v])
z.b=!0
this.I(z)}},
ad:function(a,b){var z,y,x,w
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
cx:function(){var z=new U.fx()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dq:{"^":"a7;0a,0b",
gp:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
aL:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dq))return!1
return J.S(this.a,b.a)},
i:function(a){return"Constant: "+this.a.v("          ")},
n:{
dr:function(a){var z=new U.dq()
z.a=a
return z}}},dE:{"^":"af;0e,0f,0r,0a,0b,0c,0d",
gp:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
I:[function(a){var z
H.k(a,"$isl")
z=this.e
if(!(z==null))z.t(a)},function(){return this.I(null)},"a9","$1","$0","gav",0,2,0],
hF:[function(a,b){var z,y,x,w,v,u,t
z=U.a7
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gav(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.w)(b),++v){u=b[v]
if(u!=null){t=u.gp()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.bM(a,b,this,[z])
z.b=!0
this.I(z)},"$2","ges",8,0,19],
hZ:[function(a,b){var z,y,x,w,v,u,t
z=U.a7
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gav(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.w)(b),++v){u=b[v]
if(u!=null){t=u.gp()
t.toString
H.b(x,w)
C.a.P(t.a,x)}}z=new D.bN(a,b,this,[z])
z.b=!0
this.I(z)},"$2","geO",8,0,19],
aL:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.a7()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.al(z,z.length,0,[H.z(z,0)]),x=null;z.B();){y=z.d
if(y!=null){w=y.aL(0,b,c)
if(w!=null)x=x==null?w:w.l(0,x)}}this.f=x==null?V.aX():x
z=this.e
if(!(z==null))z.ar(0)}return this.f},
q:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dE))return!1
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
$isa7:1},a7:{"^":"dn;"},iK:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gp:function(){var z=this.cy
if(z==null){z=D.E()
this.cy=z}return z},
I:[function(a){var z
H.k(a,"$isl")
z=this.cy
if(!(z==null))z.t(a)},function(){return this.I(null)},"a9","$1","$0","gav",0,2,0],
aO:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gda()
z.toString
y={func:1,ret:-1,args:[D.l]}
x=H.b(this.gbH(),y)
C.a.h(z.a,x)
x=this.a.c.gdE()
x.toString
z=H.b(this.gbI(),y)
C.a.h(x.a,z)
z=this.a.c.gbr()
z.toString
y=H.b(this.gbJ(),y)
C.a.h(z.a,y)
return!0},
eo:[function(a){H.k(a,"$isl")
if(!J.S(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbH",4,0,1],
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
this.Q=new V.P(y.a,y.b).l(0,2).u(0,z.ga1())}this.a9()},"$1","gbI",4,0,1],
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
this.a9()}},"$1","gbJ",4,0,1],
aL:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.a7()
if(z<y){this.ch=y
x=b.y
this.b.ad(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.ar(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa7:1},iL:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gp:function(){var z=this.fx
if(z==null){z=D.E()
this.fx=z}return z},
I:[function(a){var z
H.k(a,"$isl")
z=this.fx
if(!(z==null))z.t(a)},function(){return this.I(null)},"a9","$1","$0","gav",0,2,0],
aO:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gda()
z.toString
y={func:1,ret:-1,args:[D.l]}
x=H.b(this.gbH(),y)
C.a.h(z.a,x)
x=this.a.c.gdE()
x.toString
z=H.b(this.gbI(),y)
C.a.h(x.a,z)
z=this.a.c.gbr()
z.toString
x=H.b(this.gbJ(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.E()
x.f=z}x=H.b(this.gel(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.E()
x.d=z}x=H.b(this.gem(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.E()
x.b=z}x=H.b(this.gfb(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.E()
x.d=z}x=H.b(this.gfa(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.E()
x.c=z}y=H.b(this.gf9(),y)
C.a.h(z.a,y)
return!0},
ae:function(a){var z,y
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
this.db=this.b.d},"$1","gbH",4,0,1],
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
z=this.ae(new V.P(y.a,y.b).l(0,2).u(0,z.ga1()))
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
w=this.ae(new V.P(x.a,x.b).l(0,2).u(0,z.ga1()))
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
this.dx=this.ae(new V.P(y.a,y.b).l(0,2).u(0,z.ga1()))}this.a9()},"$1","gbI",4,0,1],
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
this.a9()}},"$1","gbJ",4,0,1],
hC:[function(a){if(H.e(H.k(a,"$isl"),"$isdP").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gel",4,0,1],
hD:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$isl"),"$isbm")
if(!J.S(this.d,a.x.b))return
z=a.c
y=a.d
x=y.E(0,a.y)
w=this.ae(new V.P(x.a,x.b).l(0,2).u(0,z.ga1()))
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
this.dx=this.ae(new V.P(y.a,y.b).l(0,2).u(0,z.ga1()))
this.a9()},"$1","gem",4,0,1],
i8:[function(a){H.k(a,"$isl")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfb",4,0,1],
i7:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$isl"),"$iseg")
if(!this.cx)return
if(this.ch){z=a.d.E(0,a.y)
z=new V.P(z.a,z.b)
z=z.A(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.E(0,a.y)
z=this.ae(new V.P(y.a,y.b).l(0,2).u(0,z.ga1()))
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
w=this.ae(new V.P(x.a,x.b).l(0,2).u(0,z.ga1()))
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
this.dx=this.ae(new V.P(y.a,y.b).l(0,2).u(0,z.ga1()))}this.a9()},"$1","gfa",4,0,1],
i6:[function(a){var z,y,x
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
this.a9()}},"$1","gf9",4,0,1],
aL:function(a,b,c){var z,y,x,w,v
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
z=V.ar(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.l(0,V.ar(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isa7:1},iM:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gp:function(){var z=this.r
if(z==null){z=D.E()
this.r=z}return z},
I:function(a){var z=this.r
if(!(z==null))z.t(a)},
aO:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.E()
z.e=y
z=y}else z=y
y=H.b(this.ger(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.E()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
hE:[function(a){var z,y,x,w
H.k(a,"$isl")
if(!J.S(this.b,this.a.b.c))return
H.e(a,"$iscJ")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.l()
w=z+y*x
if(z!==w){this.d=w
z=new D.D("zoom",z,w,this,[P.v])
z.b=!0
this.I(z)}},"$1","ger",4,0,1],
aL:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.ar(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa7:1}}],["","",,M,{"^":"",fy:{"^":"af;0e,0f,0a,0b,0c,0d",
gp:function(){var z=this.f
if(z==null){z=D.E()
this.f=z}return z},
U:[function(a){var z
H.k(a,"$isl")
z=this.f
if(!(z==null))z.t(a)},function(){return this.U(null)},"cE","$1","$0","gO",0,2,0],
i0:[function(a,b){var z,y,x,w,v,u,t
z=M.au
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gO(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.w)(b),++v){u=b[v]
if(u!=null){t=u.gp()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.bM(a,b,this,[z])
z.b=!0
this.U(z)},"$2","geQ",8,0,20],
i1:[function(a,b){var z,y,x,w,v,u,t
z=M.au
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gO(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.w)(b),++v){u=b[v]
if(u!=null){t=u.gp()
t.toString
H.b(x,w)
C.a.P(t.a,x)}}z=new D.bN(a,b,this,[z])
z.b=!0
this.U(z)},"$2","geR",8,0,20],
a2:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.al(z,z.length,0,[H.z(z,0)]);z.B();){y=z.d
if(!(y==null))y.a2(a)}this.e=!1},
$asd:function(){return[M.au]},
$asaf:function(){return[M.au]},
$isau:1},fA:{"^":"a;0a,0b,0c,0d,0e,0f",
gp:function(){var z=this.f
if(z==null){z=D.E()
this.f=z}return z},
U:[function(a){var z
H.k(a,"$isl")
z=this.f
if(!(z==null))z.t(a)},function(){return this.U(null)},"cE","$1","$0","gO",0,2,0],
saP:function(a){var z,y,x
if(a==null)a=new X.fV()
z=this.a
if(z!==a){if(z!=null){z=z.gp()
z.toString
y=H.b(this.gO(),{func:1,ret:-1,args:[D.l]})
C.a.P(z.a,y)}x=this.a
this.a=a
z=a.gp()
z.toString
y=H.b(this.gO(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.D("camera",x,this.a,this,[X.c_])
z.b=!0
this.U(z)}},
saX:function(a,b){var z,y,x
if(b==null)b=X.cy(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gp()
z.toString
y=H.b(this.gO(),{func:1,ret:-1,args:[D.l]})
C.a.P(z.a,y)}x=this.b
this.b=b
z=b.gp()
z.toString
y=H.b(this.gO(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.D("target",x,this.b,this,[X.cR])
z.b=!0
this.U(z)}},
saY:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gp()
z.toString
y=H.b(this.gO(),{func:1,ret:-1,args:[D.l]})
C.a.P(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gp()
z.toString
y=H.b(this.gO(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.D("technique",x,this.c,this,[O.bT])
z.b=!0
this.U(z)}},
a2:function(a){a.cm(this.c)
this.b.R(a)
this.a.R(a)
this.d.ad(0,a)
this.d.a2(a)
this.a.as(a)
this.b.toString
a.cl()},
$isau:1},fN:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
U:[function(a){var z
H.k(a,"$isl")
z=this.x
if(!(z==null))z.t(a)},function(){return this.U(null)},"cE","$1","$0","gO",0,2,0],
hK:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aA
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gO(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.w)(b),++u){t=b[u]
if(t!=null){if(t.gY()==null){s=new D.aT()
s.a=H.c([],v)
s.c=0
t.sY(s)}s=t.gY()
s.toString
H.b(x,w)
C.a.h(s.a,x)}}z=new D.bM(a,b,this,[z])
z.b=!0
this.U(z)},"$2","gey",8,0,8],
hL:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aA
H.x(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gO(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.w)(b),++u){t=b[u]
if(t!=null){if(t.gY()==null){s=new D.aT()
s.a=H.c([],v)
s.c=0
t.sY(s)}s=t.gY()
s.toString
H.b(x,w)
C.a.P(s.a,x)}}z=new D.bN(a,b,this,[z])
z.b=!0
this.U(z)},"$2","gez",8,0,8],
saP:function(a){var z,y,x
if(a==null)a=X.dY(2000,1.0471975511965976,null,0.1)
z=this.a
if(z!==a){if(z!=null){z=z.gp()
z.toString
y=H.b(this.gO(),{func:1,ret:-1,args:[D.l]})
C.a.P(z.a,y)}x=this.a
this.a=a
z=a.gp()
z.toString
y=H.b(this.gO(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.D("camera",x,this.a,this,[X.c_])
z.b=!0
this.U(z)}},
saX:function(a,b){var z,y,x
if(b==null)b=X.cy(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gp()
z.toString
y=H.b(this.gO(),{func:1,ret:-1,args:[D.l]})
C.a.P(z.a,y)}x=this.b
this.b=b
z=b.gp()
z.toString
y=H.b(this.gO(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.D("target",x,this.b,this,[X.cR])
z.b=!0
this.U(z)}},
saY:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gp()
z.toString
y=H.b(this.gO(),{func:1,ret:-1,args:[D.l]})
C.a.P(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gp()
z.toString
y=H.b(this.gO(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.D("technique",x,this.c,this,[O.bT])
z.b=!0
this.U(z)}},
gp:function(){var z=this.x
if(z==null){z=D.E()
this.x=z}return z},
a2:function(a){var z
a.cm(this.c)
this.b.R(a)
this.a.R(a)
z=this.c
if(z!=null)z.ad(0,a)
for(z=this.d.a,z=new J.al(z,z.length,0,[H.z(z,0)]);z.B();)z.d.ad(0,a)
for(z=this.d.a,z=new J.al(z,z.length,0,[H.z(z,0)]);z.B();)z.d.a2(a)
this.a.toString
a.cy.aq()
a.db.aq()
this.b.toString
a.cl()},
$isau:1},au:{"^":"a;"}}],["","",,A,{"^":"",dh:{"^":"a;a,b,c"},fn:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fR:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
d9:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},dS:{"^":"cN;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aG,0an,0aH,0bb,0dc,0dd,0bc,0bd,0de,0df,0be,0bf,0dg,0dh,0bg,0di,0dj,0bh,0dk,0dl,0bi,0bj,0bk,0dm,0dn,0bl,0bm,0dq,0dr,0bn,0ds,0c4,0dt,0c5,0du,0c6,0dv,0c7,0dw,0c8,0dz,0c9,a,b,0c,0d,0e,0f,0r",
dW:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
a1.fe(z)
a1.fl(z)
a1.ff(z)
a1.fu(z)
a1.fv(z)
a1.fn(z)
a1.fB(z)
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
v.fi(z)
v.fd(z)
v.fg(z)
v.fj(z)
v.fs(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.fp(z)
v.fq(z)}v.fm(z)
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
v.fh(z)
v.fo(z)
v.ft(z)
v.fw(z)
v.fz(z)
v.fA(z)
v.fk(z)}r=z.a+="// === Main ===\n"
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
this.dB(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
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
if(a1.x2)this.go=H.e(this.r.m(0,"txt2DMat"),"$iscW")
if(a1.y1)this.id=H.e(this.r.m(0,"txtCubeMat"),"$isax")
if(a1.y2)this.k1=H.e(this.r.m(0,"colorMat"),"$isax")
this.k3=H.c([],[A.ax])
y=a1.aG
if(y>0){this.k2=H.k(this.r.m(0,"bendMatCount"),"$isH")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.r(P.q("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.e(l,"$isax"))}}y=a1.a
if(y!==C.b){this.k4=H.e(this.r.m(0,"emissionClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.r1=H.e(this.r.m(0,"emissionTxt"),"$isai")
this.rx=H.e(this.r.m(0,"nullEmissionTxt"),"$isH")
break
case C.c:this.r2=H.e(this.r.m(0,"emissionTxt"),"$isac")
this.rx=H.e(this.r.m(0,"nullEmissionTxt"),"$isH")
break}}y=a1.b
if(y!==C.b){this.ry=H.e(this.r.m(0,"ambientClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.x1=H.e(this.r.m(0,"ambientTxt"),"$isai")
this.y1=H.e(this.r.m(0,"nullAmbientTxt"),"$isH")
break
case C.c:this.x2=H.e(this.r.m(0,"ambientTxt"),"$isac")
this.y1=H.e(this.r.m(0,"nullAmbientTxt"),"$isH")
break}}y=a1.c
if(y!==C.b){this.y2=H.e(this.r.m(0,"diffuseClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.aG=H.e(this.r.m(0,"diffuseTxt"),"$isai")
this.aH=H.e(this.r.m(0,"nullDiffuseTxt"),"$isH")
break
case C.c:this.an=H.e(this.r.m(0,"diffuseTxt"),"$isac")
this.aH=H.e(this.r.m(0,"nullDiffuseTxt"),"$isH")
break}}y=a1.d
if(y!==C.b){this.bb=H.e(this.r.m(0,"invDiffuseClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.dc=H.e(this.r.m(0,"invDiffuseTxt"),"$isai")
this.bc=H.e(this.r.m(0,"nullInvDiffuseTxt"),"$isH")
break
case C.c:this.dd=H.e(this.r.m(0,"invDiffuseTxt"),"$isac")
this.bc=H.e(this.r.m(0,"nullInvDiffuseTxt"),"$isH")
break}}y=a1.e
if(y!==C.b){this.bf=H.e(this.r.m(0,"shininess"),"$isQ")
this.bd=H.e(this.r.m(0,"specularClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.de=H.e(this.r.m(0,"specularTxt"),"$isai")
this.be=H.e(this.r.m(0,"nullSpecularTxt"),"$isH")
break
case C.c:this.df=H.e(this.r.m(0,"specularTxt"),"$isac")
this.be=H.e(this.r.m(0,"nullSpecularTxt"),"$isH")
break}}switch(a1.f){case C.b:break
case C.e:break
case C.d:this.dg=H.e(this.r.m(0,"bumpTxt"),"$isai")
this.bg=H.e(this.r.m(0,"nullBumpTxt"),"$isH")
break
case C.c:this.dh=H.e(this.r.m(0,"bumpTxt"),"$isac")
this.bg=H.e(this.r.m(0,"nullBumpTxt"),"$isH")
break}if(a1.dy){this.di=H.e(this.r.m(0,"envSampler"),"$isac")
this.dj=H.e(this.r.m(0,"nullEnvTxt"),"$isH")
y=a1.r
if(y!==C.b){this.bh=H.e(this.r.m(0,"reflectClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.dk=H.e(this.r.m(0,"reflectTxt"),"$isai")
this.bi=H.e(this.r.m(0,"nullReflectTxt"),"$isH")
break
case C.c:this.dl=H.e(this.r.m(0,"reflectTxt"),"$isac")
this.bi=H.e(this.r.m(0,"nullReflectTxt"),"$isH")
break}}y=a1.x
if(y!==C.b){this.bj=H.e(this.r.m(0,"refraction"),"$isQ")
this.bk=H.e(this.r.m(0,"refractClr"),"$isF")
switch(y){case C.b:break
case C.e:break
case C.d:this.dm=H.e(this.r.m(0,"refractTxt"),"$isai")
this.bl=H.e(this.r.m(0,"nullRefractTxt"),"$isH")
break
case C.c:this.dn=H.e(this.r.m(0,"refractTxt"),"$isac")
this.bl=H.e(this.r.m(0,"nullRefractTxt"),"$isH")
break}}}y=a1.y
if(y!==C.b){this.bm=H.e(this.r.m(0,"alpha"),"$isQ")
switch(y){case C.b:break
case C.e:break
case C.d:this.dq=H.e(this.r.m(0,"alphaTxt"),"$isai")
this.bn=H.e(this.r.m(0,"nullAlphaTxt"),"$isH")
break
case C.c:this.dr=H.e(this.r.m(0,"alphaTxt"),"$isac")
this.bn=H.e(this.r.m(0,"nullAlphaTxt"),"$isH")
break}}this.c4=H.c([],[A.et])
this.c5=H.c([],[A.eu])
this.c6=H.c([],[A.ev])
this.c7=H.c([],[A.ew])
this.c8=H.c([],[A.ex])
this.c9=H.c([],[A.ey])
if(a1.k2){y=a1.z
if(y>0){this.ds=H.k(this.r.m(0,"dirLightCount"),"$isH")
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
x=this.c4;(x&&C.a).h(x,new A.et(m,l,k))}}y=a1.Q
if(y>0){this.dt=H.k(this.r.m(0,"pntLightCount"),"$isH")
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
x=this.c5;(x&&C.a).h(x,new A.eu(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.du=H.k(this.r.m(0,"spotLightCount"),"$isH")
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
x=this.c6;(x&&C.a).h(x,new A.ev(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.dv=H.k(this.r.m(0,"txtDirLightCount"),"$isH")
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
x=this.c7;(x&&C.a).h(x,new A.ew(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.dw=H.k(this.r.m(0,"txtPntLightCount"),"$isH")
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
H.e(j,"$iscW")
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
x=this.c8;(x&&C.a).h(x,new A.ex(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.dz=H.k(this.r.m(0,"txtSpotLightCount"),"$isH")
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
x=this.c9;(x&&C.a).h(x,new A.ey(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
aa:function(a,b,c){b.a.uniform1i(b.d,1)},
a4:function(a,b,c){if(c==null||c.d<6)b.a.uniform1i(b.d,1)
else{a.cu(c)
b.a.uniform1i(b.d,0)}},
n:{
hi:function(a,b){var z,y
z=a.an
y=new A.dS(b,z)
y.cB(b,z)
y.dW(a,b)
return y}}},hl:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aG,an,aH",
fe:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aG+"];\n"
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
fl:function(a){var z
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
ff:function(a){var z
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
fu:function(a){var z,y
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
fv:function(a){var z,y
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
fn:function(a){var z
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
fB:function(a){var z
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
if(b===C.e)return
if(0>=c.length)return H.i(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.h.cw(c,1))+"Txt;\n"
a.a=z
if(b===C.d)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.c)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fi:function(a){var z,y
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
fd:function(a){var z,y
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
fg:function(a){var z,y
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
fj:function(a){var z,y
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
fs:function(a){var z,y
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
fm:function(a){var z,y
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
fp:function(a){var z,y
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
fq:function(a){var z,y
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
fh:function(a){var z,y
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
fo:function(a){var z,y
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
ft:function(a){var z,y
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
fw:function(a){var z,y,x
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
fz:function(a){var z,y,x
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
fA:function(a){var z,y,x
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
fk:function(a){var z
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
i:function(a){return this.an}},et:{"^":"a;a,b,c"},ew:{"^":"a;a,b,c,d,e,f,r,x"},eu:{"^":"a;a,b,c,d,e,f,r"},ex:{"^":"a;a,b,c,d,e,f,r,x,y,z"},ev:{"^":"a;a,b,c,d,e,f,r,x,y,z"},ey:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cN:{"^":"cp;",
cB:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null},
dB:function(a,b,c){var z,y,x
this.c=this.cO(b,35633)
this.d=this.cO(c,35632)
z=this.a
y=z.createProgram()
this.e=y
z.attachShader(y,this.c)
z.attachShader(this.e,this.d)
z.linkProgram(this.e)
if(!H.f4(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.r(P.q("Failed to link shader: "+H.j(x)))}this.f4()
this.f6()},
R:function(a){a.a.useProgram(this.e)
this.f.fR()},
cO:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.f4(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.h(P.q("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
f4:function(){var z,y,x,w,v,u
z=H.c([],[A.dh])
y=this.a
x=H.Y(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dh(y,v.name,u))}this.f=new A.fn(z)},
f6:function(){var z,y,x,w,v,u
z=H.c([],[A.a2])
y=this.a
x=H.Y(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.fN(v.type,v.size,v.name,u))}this.r=new A.iC(z)},
ax:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.H(z,y,b,c)
else return A.cV(z,y,b,a,c)},
ef:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ai(z,y,b,c)
else return A.cV(z,y,b,a,c)},
eg:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ac(z,y,b,c)
else return A.cV(z,y,b,a,c)},
b8:function(a,b){return new P.eH(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
fN:function(a,b,c,d){switch(a){case 5120:return this.ax(b,c,d)
case 5121:return this.ax(b,c,d)
case 5122:return this.ax(b,c,d)
case 5123:return this.ax(b,c,d)
case 5124:return this.ax(b,c,d)
case 5125:return this.ax(b,c,d)
case 5126:return new A.Q(this.a,this.e,c,d)
case 35664:return new A.ix(this.a,this.e,c,d)
case 35665:return new A.F(this.a,this.e,c,d)
case 35666:return new A.iA(this.a,this.e,c,d)
case 35667:return new A.iy(this.a,this.e,c,d)
case 35668:return new A.iz(this.a,this.e,c,d)
case 35669:return new A.iB(this.a,this.e,c,d)
case 35674:return new A.iE(this.a,this.e,c,d)
case 35675:return new A.cW(this.a,this.e,c,d)
case 35676:return new A.ax(this.a,this.e,c,d)
case 35678:return this.ef(b,c,d)
case 35680:return this.eg(b,c,d)
case 35670:throw H.h(this.b8("BOOL",c))
case 35671:throw H.h(this.b8("BOOL_VEC2",c))
case 35672:throw H.h(this.b8("BOOL_VEC3",c))
case 35673:throw H.h(this.b8("BOOL_VEC4",c))
default:throw H.h(P.q("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},c0:{"^":"a;a,b",
i:function(a){return this.b}},e5:{"^":"cN;0x,0y,0z,0Q,0ch,0cx,a,b,0c,0d,0e,0f,0r"},a2:{"^":"a;"},iC:{"^":"a;a",
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
F:function(){return this.fT("\n")}},H:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},iy:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},iz:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},iB:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},iw:{"^":"a2;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.j(this.c)},
n:{
cV:function(a,b,c,d,e){var z=new A.iw(a,b,c,e)
z.f=d
z.e=P.ha(d,0,!1,P.A)
return z}}},Q:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},ix:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},F:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},iA:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},iE:{"^":"a2;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},cW:{"^":"a2;a,b,c,d",
a8:function(a){var z=new Float32Array(H.bD(H.x(a,"$isf",[P.v],"$asf")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},ax:{"^":"a2;a,b,c,d",
a8:function(a){var z=new Float32Array(H.bD(H.x(a,"$isf",[P.v],"$asf")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},ai:{"^":"a2;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},ac:{"^":"a2;a,b,c,d",
cu:function(a){var z,y,x
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
j=F.kX(d,e,new F.kj(z,F.cg(z.c),F.cg(z.d),k,l,c),b)
if(j!=null)a.h4(j)},
kX:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
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
C.a.h(y,t.c0(d))}for(x=1;x<=a;++x){s=x/a
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
C.a.h(y,t.c0(d))}}z.d.fD(a+1,b+1,y)
return z},
kj:{"^":"u:35;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.ce(z.b,b).ce(z.d.ce(z.c,b),c)
z=new V.ab(y.a,y.b,y.c)
if(!J.S(a.f,z)){a.f=z
z=a.a
if(z!=null)z.a_()}a.saK(y.u(0,Math.sqrt(y.A(y))))
z=1-b
x=1-c
x=new V.bp(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.S(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.a_()}}},
ag:{"^":"a;0a,0b,0c,0d,0e",
gc3:function(){return this.a==null||this.b==null||this.c==null},
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
if(v.dC())return
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
z=v.aR(z.u(0,Math.sqrt(z.A(z))))
return z.u(0,Math.sqrt(z.A(z)))},
bZ:function(){if(this.d!=null)return!0
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
if(v.dC())return
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
z=k.aR(m)
z=z.u(0,Math.sqrt(z.A(z))).aR(k)
m=z.u(0,Math.sqrt(z.A(z)))}return m},
bX:function(){if(this.e!=null)return!0
var z=this.e8()
if(z==null){z=this.eb()
if(z==null)return!1}this.e=z
this.a.a.a_()
return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
v:function(a){var z,y
if(this.gc3())return a+"disposed"
z=a+C.h.a6(J.a4(this.a.e),0)+", "+C.h.a6(J.a4(this.b.e),0)+", "+C.h.a6(J.a4(this.c.e),0)+" {"
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
gc3:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
v:function(a){if(this.gc3())return a+"disposed"
return a+C.h.a6(J.a4(this.a.e),0)+", "+C.h.a6(J.a4(this.b.e),0)},
F:function(){return this.v("")}},
cL:{"^":"a;0a",
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
v:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.h.a6(J.a4(z.e),0)},
F:function(){return this.v("")}},
e4:{"^":"a;0a,0b,0c,0d,0e",
gp:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
h4:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.V()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.w)(z),++w){v=z[w]
this.a.h(0,v.fM())}this.a.V()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.w)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.V()
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
s.a.a.V()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.V()
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
s.a.a.V()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.V()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.i(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.V()
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
am:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.am()||!1
if(!this.a.am())y=!1
z=this.e
if(!(z==null))z.ar(0)
return y},
d3:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
v=b.gcv(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.v
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.dk])
for(r=0,q=0;q<w;++q){p=b.fG(q)
o=p.gcv(p)
C.a.X(s,q,new Z.dk(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.i(y,n)
m=y[n].h0(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.X(t,l,m[k]);++l}}r+=o}H.x(t,"$isf",[x],"$asf")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bD(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cs(new Z.eE(34962,j),s,b)
i.b=H.c([],[Z.c5])
if(this.b.b.length!==0){x=P.A
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.V()
C.a.h(h,g.e)}f=Z.cY(y,34963,H.x(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.c5(0,h.length,f))}if(this.c.b.length!==0){x=P.A
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.V()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.V()
C.a.h(h,g.e)}f=Z.cY(y,34963,H.x(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.c5(1,h.length,f))}if(this.d.b.length!==0){x=P.A
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.V()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.V()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].c
g.a.a.V()
C.a.h(h,g.e)}f=Z.cY(y,34963,H.x(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.c5(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.n])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.v("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.v("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.v("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.v("   "))}return C.a.w(z,"\n")},
aJ:function(a){var z=this.e
if(!(z==null))z.t(a)},
a_:function(){return this.aJ(null)},
n:{
cO:function(){var z,y
z=new F.e4()
y=new F.iP(z)
y.b=!1
y.c=H.c([],[F.aC])
z.a=y
y=new F.i0(z)
y.b=H.c([],[F.cL])
z.b=y
y=new F.i_(z)
y.b=H.c([],[F.cG])
z.c=y
y=new F.hZ(z)
y.b=H.c([],[F.ag])
z.d=y
z.e=null
return z}}},
hZ:{"^":"a;a,0b",
fC:function(a){var z,y,x,w,v
H.x(a,"$isf",[F.aC],"$asf")
z=H.c([],[F.ag])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.be(y,w,v))}return z},
fD:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
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
am:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.w)(z),++w)if(!z[w].bZ())x=!1
return x},
bY:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.w)(z),++w)if(!z[w].bX())x=!1
return x},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
F:function(){return this.v("")}},
i_:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.i(w,x)
C.a.h(z,w[x].v(a+(""+x+". ")))}return C.a.w(z,"\n")},
F:function(){return this.v("")}},
i0:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
F:function(){return this.v("")}},
aC:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
c0:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cd(this.cx,x,u,z,y,w,v,a,t)},
fM:function(){return this.c0(null)},
saK:function(a){var z
if(!J.S(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a_()}},
h0:function(a){var z,y
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
bZ:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.J(0,new F.iW(z))
z=z.a
this.r=z.u(0,Math.sqrt(z.A(z)))
z=this.a
if(z!=null){z.a_()
z=this.a.e
if(!(z==null))z.ar(0)}return!0},
bX:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.J(0,new F.iV(z))
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
C.a.h(z,C.h.a6(J.a4(this.e),0))
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
y=new F.iU(z)
y.b=H.c([],[F.cL])
z.b=y
y=new F.iT(z)
x=[F.cG]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.iQ(z)
x=[F.ag]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
z.d=y
h=$.$get$eB()
z.e=0
y=$.$get$ap()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aF().a)!==0?e:null
z.x=(x&$.$get$aE().a)!==0?b:null
z.y=(x&$.$get$aG().a)!==0?f:null
z.z=(x&$.$get$aH().a)!==0?g:null
z.Q=(x&$.$get$eC().a)!==0?c:null
z.ch=(x&$.$get$b1().a)!==0?i:0
z.cx=(x&$.$get$aD().a)!==0?a:null
return z}}},
iW:{"^":"u:5;a",
$1:function(a){var z,y
H.k(a,"$isag")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
iV:{"^":"u:5;a",
$1:function(a){var z,y
H.k(a,"$isag")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
iP:{"^":"a;a,0b,0c",
V:function(){var z,y,x,w
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
fE:function(a,b,c,d,e,f,g,h,i){var z=F.cd(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
b9:function(a,b,c,d,e,f){return this.fE(a,null,b,c,null,d,e,f,0)},
gk:function(a){return this.c.length},
am:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x)z[x].bZ()
return!0},
bY:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x)z[x].bX()
return!0},
fI:function(){var z,y,x,w,v,u,t,s
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
this.V()
z=H.c([],[P.n])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
F:function(){return this.v("")}},
iQ:{"^":"a;a,0b,0c,0d",
gk:function(a){return this.b.length+this.c.length+this.d.length},
J:function(a,b){H.b(b,{func:1,ret:-1,args:[F.ag]})
C.a.J(this.b,b)
C.a.J(this.c,new F.iR(this,b))
C.a.J(this.d,new F.iS(this,b))},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
F:function(){return this.v("")}},
iR:{"^":"u:5;a,b",
$1:function(a){H.k(a,"$isag")
if(!J.S(a.a,this.a))this.b.$1(a)}},
iS:{"^":"u:5;a,b",
$1:function(a){var z
H.k(a,"$isag")
z=this.a
if(!J.S(a.a,z)&&!J.S(a.b,z))this.b.$1(a)}},
iT:{"^":"a;a,0b,0c",
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
F:function(){return this.v("")}},
iU:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].v(a))
return C.a.w(z,"\n")},
F:function(){return this.v("")}}}],["","",,O,{"^":"",hh:{"^":"bT;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gp:function(){var z=this.dy
if(z==null){z=D.E()
this.dy=z}return z},
L:[function(a){var z
H.k(a,"$isl")
z=this.dy
if(!(z==null))z.t(a)},function(){return this.L(null)},"cQ","$1","$0","gaz",0,2,0],
eY:[function(a){H.k(a,"$isl")
this.a=null
this.L(a)},function(){return this.eY(null)},"i5","$1","$0","geX",0,2,0],
hH:[function(a,b){var z=V.aB
z=new D.bM(a,H.x(b,"$isd",[z],"$asd"),this,[z])
z.b=!0
this.L(z)},"$2","gev",8,0,21],
hI:[function(a,b){var z=V.aB
z=new D.bN(a,H.x(b,"$isd",[z],"$asd"),this,[z])
z.b=!0
this.L(z)},"$2","gew",8,0,21],
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
a6=$.$get$ap()
if(c){z=$.$get$aF()
a6=new Z.b0(a6.a|z.a)}if(b){z=$.$get$aE()
a6=new Z.b0(a6.a|z.a)}if(a){z=$.$get$aG()
a6=new Z.b0(a6.a|z.a)}if(a0){z=$.$get$aH()
a6=new Z.b0(a6.a|z.a)}if(a2){z=$.$get$aD()
a6=new Z.b0(a6.a|z.a)}return new A.hl(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
N:function(a,b){H.x(a,"$isf",[T.cS],"$asf")
if(b!=null)if(!C.a.aQ(a,b)){b.a=a.length
C.a.h(a,b)}},
ad:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.al(z,z.length,0,[H.z(z,0)]);z.B();){y=z.d
x=new V.G(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.co(x)}}},
dH:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.cL()
y=H.k(a.fr.j(0,z.an),"$isdS")
if(y==null){y=A.hi(z,a.a)
a.d1(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.aH
z=b.e
if(!(z instanceof Z.cs)){b.e=null
z=null}if(z==null||!z.d.q(0,w)){z=x.r1
if(z)b.d.am()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.c
u.d.bY()
u.a.bY()
u=u.e
if(!(u==null))u.ar(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.a.fI()
t=t.e
if(!(t==null))t.ar(0)}r=b.d.d3(new Z.eF(a.a),w)
r.ao($.$get$ap()).e=this.a.y.c
if(z)r.ao($.$get$aF()).e=this.a.Q.c
if(v)r.ao($.$get$aE()).e=this.a.z.c
if(x.rx)r.ao($.$get$aG()).e=this.a.ch.c
if(u)r.ao($.$get$aH()).e=this.a.cx.c
if(x.x1)r.ao($.$get$aD()).e=this.a.cy.c
b.e=r}z=T.cS
q=H.c([],[z])
this.a.R(a)
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
t=u.l(0,t.gS(t))
a.cx=t
u=t}v=v.dx
v.toString
v.a8(u.a3(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.ghi()
t=a.dx
t=u.l(0,t.gS(t))
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
v.a8(C.z.a3(u,!0))}if(x.aG>0){p=this.e.a.length
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
case C.e:v=this.a
u=this.f.f
v=v.k4
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.N(q,this.f.d)
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
case C.c:this.N(q,this.f.e)
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
case C.d:this.N(q,this.r.d)
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
case C.c:this.N(q,this.r.e)
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
case C.d:this.N(q,this.x.d)
v=this.a
u=this.x.d
v.aa(v.aG,v.aH,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.c:this.N(q,this.x.e)
v=this.a
u=this.x.e
v.a4(v.an,v.aH,u)
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
v=v.bb
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.d:this.N(q,this.y.d)
v=this.a
u=this.y.d
v.aa(v.dc,v.bc,u)
u=this.a
v=this.y.f
u=u.bb
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.c:this.N(q,this.y.e)
v=this.a
u=this.y.e
v.a4(v.dd,v.bc,u)
u=this.a
v=this.y.f
u=u.bb
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.b:break
case C.e:v=this.a
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
case C.d:this.N(q,this.z.d)
v=this.a
u=this.z.d
v.aa(v.de,v.be,u)
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
case C.c:this.N(q,this.z.e)
v=this.a
u=this.z.e
v.a4(v.df,v.be,u)
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
v=this.a.ds
v.a.uniform1i(v.d,p)
v=a.db
m=v.gS(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.w)(v),++k){j=v[k]
t=this.a.c4
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
v=this.a.dt
v.a.uniform1i(v.d,p)
v=a.db
m=v.gS(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.w)(v),++k){j=v[k]
t=this.a.c5
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gaV(j)
s=i.b
h=t.gcq(t)
g=t.gcr(t)
t=t.gcs(t)
s.a.uniform3f(s.d,h,g,t)
t=m.b1(j.gaV(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gab(j)
g=i.d
h=t.gbq()
s=t.gb2()
t=t.gba()
g.a.uniform3f(g.d,h,s,t)
t=j.gbS()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gbT()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gbU()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.du
v.a.uniform1i(v.d,p)
v=a.db
m=v.gS(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.w)(v),++k){j=v[k]
t=this.a.c6
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gaV(j)
s=i.b
h=t.gcq(t)
g=t.gcr(t)
t=t.gcs(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gc2(j).ib()
g=i.c
h=t.gaD(t)
s=t.gaE(t)
t=t.gaF()
g.a.uniform3f(g.d,h,s,t)
t=m.b1(j.gaV(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gab(j)
s=i.e
h=t.gbq()
g=t.gb2()
t=t.gba()
s.a.uniform3f(s.d,h,g,t)
t=j.gia()
g=i.f
g.a.uniform1f(g.d,t)
t=j.gi9()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gbS()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gbT()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gbU()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.dv
v.a.uniform1i(v.d,p)
v=a.db
m=v.gS(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.w)(v),++k){j=v[k]
s=this.a.c7
if(l>=s.length)return H.i(s,l)
i=s[l]
s=j.gaZ()
H.x(q,"$isf",t,"$asf")
if(!C.a.aQ(q,s)){s.sbE(q.length)
C.a.h(q,s)}s=j.gc2(j)
h=i.d
g=s.gaD(s)
f=s.gaE(s)
s=s.gaF()
h.a.uniform3f(h.d,g,f,s)
s=j.gbr()
f=i.b
g=s.gaD(s)
h=s.gaE(s)
s=s.gaF()
f.a.uniform3f(f.d,g,h,s)
s=j.gaW(j)
h=i.c
g=s.gaD(s)
f=s.gaE(s)
s=s.gaF()
h.a.uniform3f(h.d,g,f,s)
s=m.co(j.gc2(j))
f=s.a
g=s.b
h=s.c
h=s.u(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gab(j)
g=i.f
f=h.gbq()
s=h.gb2()
h=h.gba()
g.a.uniform3f(g.d,f,s,h)
h=j.gaZ()
s=h.gbo(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gbo(h)
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.gfW(h))
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.dw
v.a.uniform1i(v.d,p)
v=a.db
m=v.gS(v)
for(v=this.dx.y,u=v.length,t=[P.v],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.w)(v),++k){j=v[k]
h=this.a.c8
if(l>=h.length)return H.i(h,l)
i=h[l]
h=j.gaZ()
H.x(q,"$isf",s,"$asf")
if(!C.a.aQ(q,h)){h.sbE(q.length)
C.a.h(q,h)}e=m.l(0,j.gS(j))
h=j.gS(j).b1(new V.ab(0,0,0))
g=i.b
f=h.gcq(h)
d=h.gcr(h)
h=h.gcs(h)
g.a.uniform3f(g.d,f,d,h)
h=e.b1(new V.ab(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.cc(0)
d=i.d
n=new Float32Array(H.bD(H.x(new V.dT(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a3(0,!0),"$isf",t,"$asf")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gab(j)
h=i.e
f=d.gbq()
g=d.gb2()
d=d.gba()
h.a.uniform3f(h.d,f,g,d)
d=j.gaZ()
h=d.gbo(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.ghB()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gbE())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gbS()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gbT()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gbU()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.dz
v.a.uniform1i(v.d,p)
v=a.db
m=v.gS(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.w)(v),++k){j=v[k]
t=this.a.c9
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gaZ()
H.x(q,"$isf",z,"$asf")
if(!C.a.aQ(q,t)){t.sbE(q.length)
C.a.h(q,t)}t=j.gaV(j)
s=i.b
h=t.gcq(t)
g=t.gcr(t)
t=t.gcs(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gc2(j)
g=i.c
h=t.gaD(t)
s=t.gaE(t)
t=t.gaF()
g.a.uniform3f(g.d,h,s,t)
t=j.gbr()
s=i.d
h=t.gaD(t)
g=t.gaE(t)
t=t.gaF()
s.a.uniform3f(s.d,h,g,t)
t=j.gaW(j)
g=i.e
h=t.gaD(t)
s=t.gaE(t)
t=t.gaF()
g.a.uniform3f(g.d,h,s,t)
t=m.b1(j.gaV(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gaZ()
s=t.gbo(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gbo(t)
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.gfW(t))
t=i.x
t.a.uniform1i(t.d,0)}t=j.gab(j)
s=i.y
h=t.gbq()
g=t.gb2()
t=t.gba()
s.a.uniform3f(s.d,h,g,t)
t=j.gii()
g=i.z
g.a.uniform1f(g.d,t)
t=j.gij()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gbS()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gbT()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gbU()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.b:break
case C.e:break
case C.d:this.N(q,this.Q.d)
z=this.a
v=this.Q.d
z.aa(z.dg,z.bg,v)
break
case C.c:this.N(q,this.Q.e)
z=this.a
v=this.Q.e
z.a4(z.dh,z.bg,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gS(v).cc(0)
a.Q=v}z=z.fy
z.toString
z.a8(v.a3(0,!0))}if(x.dy){this.N(q,this.ch)
z=this.a
v=this.ch
z.a4(z.di,z.dj,v)
switch(x.r){case C.b:break
case C.e:z=this.a
v=this.cx.f
z=z.bh
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.d:this.N(q,this.cx.d)
z=this.a
v=this.cx.d
z.aa(z.dk,z.bi,v)
v=this.a
z=this.cx.f
v=v.bh
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.c:this.N(q,this.cx.e)
z=this.a
v=this.cx.e
z.a4(z.dl,z.bi,v)
v=this.a
z=this.cx.f
v=v.bh
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.b:break
case C.e:z=this.a
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
case C.d:this.N(q,this.cy.d)
z=this.a
v=this.cy.d
z.aa(z.dm,z.bl,v)
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
case C.c:this.N(q,this.cy.e)
z=this.a
v=this.cy.e
z.a4(z.dn,z.bl,v)
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
case C.e:z=this.a
u=this.db.f
z=z.bm
z.a.uniform1f(z.d,u)
break
case C.d:this.N(q,this.db.d)
z=this.a
u=this.db.d
z.aa(z.dq,z.bn,u)
u=this.a
z=this.db.f
u=u.bm
u.a.uniform1f(u.d,z)
break
case C.c:this.N(q,this.db.e)
z=this.a
u=this.db.e
z.a4(z.dr,z.bn,u)
u=this.a
z=this.db.f
u=u.bm
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o)q[o].R(a)
z=b.e
z.R(a)
z.a2(a)
z.as(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o){z=q[o]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(34067,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.d9()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cL().an}},hj:{"^":"cH;0f,a,b,0c,0d,0e",
f0:function(a){var z,y
z=this.f
if(!$.m.$2(z,a)){y=this.f
this.f=a
z=new D.D(this.b,y,a,this,[P.v])
z.b=!0
this.a.L(z)}},
aA:function(){this.cA()
this.f0(1)}},cH:{"^":"a;",
L:[function(a){this.a.L(H.k(a,"$isl"))},function(){return this.L(null)},"cQ","$1","$0","gaz",0,2,0],
aA:["cA",function(){}],
f2:function(a){},
f3:function(a){var z,y,x
z=this.e
if(z==null?a!=null:z!==a){if(z!=null){z=z.e
y=H.b(this.gaz(),{func:1,ret:-1,args:[D.l]})
C.a.P(z.a,y)}x=this.e
this.e=a
if(a!=null){z=a.e
y=H.b(this.gaz(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.D(this.b+".textureCube",x,this.e,this,[T.cb])
z.b=!0
this.a.L(z)}},
saK:function(a){var z=this.c
if(z!==C.c){if(z===C.b)this.aA()
this.c=C.c
this.f2(null)
z=this.a
z.a=null
z.L(null)}this.f3(a)}},hk:{"^":"cH;a,b,0c,0d,0e"},aW:{"^":"cH;0f,a,b,0c,0d,0e",
cW:function(a){var z,y
if(!J.S(this.f,a)){z=this.f
this.f=a
y=new D.D(this.b+".color",z,a,this,[V.T])
y.b=!0
this.a.L(y)}},
aA:["bw",function(){this.cA()
this.cW(new V.T(1,1,1))}],
sab:function(a,b){var z
if(this.c===C.b){this.c=C.e
this.aA()
z=this.a
z.a=null
z.L(null)}this.cW(b)}},hm:{"^":"aW;0ch,0f,a,b,0c,0d,0e",
f1:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.D(this.b+".refraction",y,a,this,[P.v])
z.b=!0
this.a.L(z)}},
aA:function(){this.bw()
this.f1(1)}},hn:{"^":"aW;0ch,0f,a,b,0c,0d,0e",
bO:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.D(this.b+".shininess",y,a,this,[P.v])
z.b=!0
this.a.L(z)}},
aA:function(){this.bw()
this.bO(100)}},i5:{"^":"bT;0a,0b,0c,0d,0e",
gp:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
L:[function(a){var z
H.k(a,"$isl")
z=this.e
if(!(z==null))z.t(a)},function(){return this.L(null)},"cQ","$1","$0","gaz",0,2,0],
dH:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.k(a.fr.j(0,"Skybox"),"$ise5")
if(z==null){y=a.a
z=new A.e5(y,"Skybox")
z.cB(y,"Skybox")
z.dB(0,$.i7,$.i6)
z.x=z.f.j(0,"posAttr")
z.y=H.e(z.r.j(0,"fov"),"$isQ")
z.z=H.e(z.r.j(0,"ratio"),"$isQ")
z.Q=H.e(z.r.j(0,"boxClr"),"$isF")
z.ch=H.e(z.r.j(0,"boxTxt"),"$isac")
z.cx=H.e(z.r.j(0,"viewMat"),"$isax")
a.d1(z)}this.a=z}if(b.e==null){y=b.d.d3(new Z.eF(a.a),$.$get$ap())
y.ao($.$get$ap()).e=this.a.x.c
b.e=y}y=this.c
if(y!=null){y.a=1
y.R(a)}y=a.d
x=a.c
w=this.a
w.R(a)
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
x=x.gS(x).cc(0)
w=w.cx
w.toString
w.a8(x.a3(0,!0))
y=b.e
if(y instanceof Z.cs){y.R(a)
y.a2(a)
y.as(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.d9()
y=this.c
if(y!=null)y.as(a)}},bT:{"^":"a;"}}],["","",,T,{"^":"",cS:{"^":"cp;"},cb:{"^":"cS;0b,0c,0d,0e,a",
R:function(a){if(!this.c&&this.d>=6){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,this.b)}},
as:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,null)}}},ii:{"^":"a;a,0b,0c,0d,0e",
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
r=new T.cb(0)
r.b=s
r.c=!1
r.d=0
r.e=D.E()
this.ay(r,s,z,34069,!1,!1)
this.ay(r,s,w,34070,!1,!1)
this.ay(r,s,y,34071,!1,!1)
this.ay(r,s,v,34072,!1,!1)
this.ay(r,s,x,34073,!1,!1)
this.ay(r,s,u,34074,!1,!1)
return r},
h2:function(a,b){return this.dD(a,b,!1,"")},
cf:function(a){return this.dD(a,".png",!1,"")},
ay:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.a5
W.V(z,"load",H.b(new T.ij(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
eZ:function(a,b,c){var z,y,x,w
b=V.dd(b,2)
z=V.dd(a.width,2)
y=V.dd(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cu(null,null)
x.width=z
x.height=y
w=H.k(C.k.dN(x,"2d"),"$isdm")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.kz(w.getImageData(0,0,x.width,x.height))}}},ij:{"^":"u:22;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.eZ(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.K.hr(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6)x.e.fQ();++z.e}}}],["","",,V,{"^":"",fl:{"^":"a;",
aS:function(a,b){return!0},
i:function(a){return"all"},
$isbQ:1},bQ:{"^":"a;"},dR:{"^":"a;",
aS:["dU",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x)if(z[x].aS(0,b))return!0
return!1}],
i:["cz",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.w)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbQ:1},bn:{"^":"dR;0a",
aS:function(a,b){return!this.dU(0,b)},
i:function(a){return"!["+this.cz(0)+"]"}},hX:{"^":"a;0a",
dY:function(a){var z,y
if(a.a.length<=0)throw H.h(P.q("May not create a SetMatcher with zero characters."))
z=new H.aV(0,0,[P.A,P.a3])
for(y=new H.dO(a,a.gk(a),0,[H.ay(a,"t",0)]);y.B();)z.X(0,y.d,!0)
this.a=z},
aS:function(a,b){return this.a.d7(0,b)},
i:function(a){var z=this.a
return P.cQ(new H.dN(z,[H.z(z,0)]),0,null)},
$isbQ:1,
n:{
a0:function(a){var z=new V.hX()
z.dY(a)
return z}}},e7:{"^":"a;a,b,0c,0d",
gh5:function(a){return this.b},
w:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eh(this.a.G(0,b))
w.a=H.c([],[V.bQ])
w.c=!1
C.a.h(this.c,w)
return w},
fS:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x){w=z[x]
if(w.aS(0,a))return w}return},
i:function(a){return this.b}},ee:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.ff(this.b,"\n","\\n")
y=H.ff(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},ef:{"^":"a;a,b,0c",
i:function(a){return this.b}},is:{"^":"a;0a,0b,0c",
G:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.e7(this,b)
z.c=H.c([],[V.eh])
this.a.X(0,b,z)}return z},
b_:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.ef(this,a)
y=P.n
z.c=new H.aV(0,0,[y,y])
this.b.X(0,a,z)}return z},
hx:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.ee])
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
u=new V.ee(o==null?p.b:o,q,t)}++t}}}},eh:{"^":"dR;b,0c,0a",
i:function(a){return this.b.b+": "+this.cz(0)}}}],["","",,X,{"^":"",c_:{"^":"a;",$isat:1},fU:{"^":"cR;0a,0b,0c,0d,0e,0f,0r,0x",
gp:function(){var z=this.x
if(z==null){z=D.E()
this.x=z}return z},
ah:function(a){var z=this.x
if(!(z==null))z.t(a)},
sd5:function(a,b){var z
if(this.b){this.b=!1
z=new D.D("clearColor",!0,!1,this,[P.a3])
z.b=!0
this.ah(z)}},
R:function(a){var z,y,x,w,v,u,t,s
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
n:{
cy:function(a,b,c,d,e,f,g){var z,y
z=new X.fU()
y=new V.aK(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.e3(0,0,1,1)
z.r=y
return z}}},fV:{"^":"a;0a,0b",
gp:function(){var z=this.b
if(z==null){z=D.E()
this.b=z}return z},
R:function(a){var z
a.cy.bp(V.aX())
z=V.aX()
a.db.bp(z)},
as:function(a){a.cy.aq()
a.db.aq()},
$isat:1,
$isc_:1},hy:{"^":"a;0a,0b,0c,0d,0e",
gp:function(){var z=this.e
if(z==null){z=D.E()
this.e=z}return z},
ah:[function(a){var z
H.k(a,"$isl")
z=this.e
if(!(z==null))z.t(a)},function(){return this.ah(null)},"hz","$1","$0","ge5",0,2,0],
R:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=a.cy
w=this.b
v=this.c
u=this.d
t=u-v
s=1/Math.tan(w*0.5)
x.bp(V.ar(-s/(z/y),0,0,0,0,s,0,0,0,0,u/t,-u*v/t,0,0,1,0))
z=$.dZ
if(z==null){z=V.dU(new V.ab(0,0,0),new V.G(0,1,0),new V.G(0,0,-1))
$.dZ=z
r=z}else r=z
z=this.a
if(z!=null){q=z.aL(0,a,this)
if(q!=null)r=q.l(0,r)}a.db.bp(r)},
as:function(a){a.cy.aq()
a.db.aq()},
$isat:1,
$isc_:1,
n:{
dY:function(a,b,c,d){var z,y,x,w
z=new X.hy()
z.b=1.0471975511965976
z.c=0.1
z.d=2000
if(null!=c){y=z.a
z.a=c
if(c!=null){x=c.gp()
x.toString
w=H.b(z.ge5(),{func:1,ret:-1,args:[D.l]})
C.a.h(x.a,w)}x=new D.D("mover",y,z.a,z,[U.a7])
x.b=!0
z.ah(x)}x=z.b
if(!$.m.$2(x,b)){y=z.b
z.b=b
x=new D.D("fov",y,b,z,[P.v])
x.b=!0
z.ah(x)}x=z.c
if(!$.m.$2(x,d)){y=z.c
z.c=d
x=new D.D("near",y,d,z,[P.v])
x.b=!0
z.ah(x)}x=z.d
if(!$.m.$2(x,a)){y=z.d
z.d=a
x=new D.D("far",y,a,z,[P.v])
x.b=!0
z.ah(x)}return z}}},cR:{"^":"a;"}}],["","",,V,{"^":"",
kV:function(a){P.ir(C.w,new V.kW(a))},
kW:{"^":"u:37;a",
$1:function(a){H.k(a,"$isaZ")
P.de(C.i.dK(this.a.gfU(),2)+" fps")}},
i1:{"^":"a;0a,0b",
dZ:function(a,b){var z,y,x,w,v,u,t
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
t=W.a5
W.V(z,"scroll",H.b(new V.i4(x),{func:1,ret:-1,args:[t]}),!1,t)},
fF:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.x(a,"$isf",[P.n],"$asf")
this.f5()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.hx(C.a.fZ(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.w)(x),++v){u=x[v]
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
if(H.fe(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.i(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.k6(C.H,s,C.q,!1)
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
f5:function(){var z,y,x,w
if(this.b!=null)return
z=new V.is()
y=P.n
z.a=new H.aV(0,0,[y,V.e7])
z.b=new H.aV(0,0,[y,V.ef])
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
C.a.h(z.G(0,"Start").w(0,"Other").a,new V.fl())
x=z.G(0,"Other").w(0,"Other")
y=new V.bn()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a0(new H.Z("*_`["))
C.a.h(y.a,x)
x=z.G(0,"BoldEnd")
x.d=x.a.b_("Bold")
x=z.G(0,"ItalicEnd")
x.d=x.a.b_("Italic")
x=z.G(0,"CodeEnd")
x.d=x.a.b_("Code")
x=z.G(0,"LinkEnd")
x.d=x.a.b_("Link")
x=z.G(0,"Other")
x.d=x.a.b_("Other")
this.b=z},
n:{
i2:function(a,b){var z=new V.i1()
z.dZ(a,!0)
return z}}},
i4:{"^":"u:22;a",
$1:function(a){P.ec(C.l,new V.i3(this.a))}},
i3:{"^":"u:2;a",
$0:function(){var z,y,x
z=C.i.ac(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}}}],["","",,X,{"^":"",
fa:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
z=V.i2("Test 016",!0)
y=W.cu(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
z.fF(H.c(["A test of the Material Lighting shader with cube texturing, ","bump mapping, and a color directional light."],[P.n]))
x=document.getElementById("testCanvas")
if(x==null)H.r(P.q("Failed to find an element with the identifier, testCanvas."))
w=E.ip(x,!0,!0,!0,!1)
v=X.cy(!0,!0,!1,null,2000,null,0)
v.sd5(0,!1)
u=E.dC(null,!0,null,"",null,null)
t=F.cO()
F.bC(t,null,null,1,1,1,0,0,1)
F.bC(t,null,null,1,1,0,1,0,3)
F.bC(t,null,null,1,1,0,0,1,2)
F.bC(t,null,null,1,1,-1,0,0,0)
F.bC(t,null,null,1,1,0,-1,0,0)
F.bC(t,null,null,1,1,0,0,-1,3)
t.am()
u.sbt(0,t)
s=w.f.h2("../resources/maskonaive",".jpg")
r=w.f.cf("../resources/diceColor")
q=new O.hh()
z=O.cw(V.aB)
q.e=z
z.aM(q.gev(),q.gew())
z=new O.aW(q,"emission")
z.c=C.b
z.f=new V.T(0,0,0)
q.f=z
z=new O.aW(q,"ambient")
z.c=C.b
z.f=new V.T(0,0,0)
q.r=z
z=new O.aW(q,"diffuse")
z.c=C.b
z.f=new V.T(0,0,0)
q.x=z
z=new O.aW(q,"invDiffuse")
z.c=C.b
z.f=new V.T(0,0,0)
q.y=z
z=new O.hn(q,"specular")
z.c=C.b
z.f=new V.T(0,0,0)
z.ch=100
q.z=z
z=new O.hk(q,"bump")
z.c=C.b
q.Q=z
q.ch=null
z=new O.aW(q,"reflect")
z.c=C.b
z.f=new V.T(0,0,0)
q.cx=z
z=new O.hm(q,"refract")
z.c=C.b
z.f=new V.T(0,0,0)
z.ch=1
q.cy=z
z=new O.hj(q,"alpha")
z.c=C.b
z.f=1
q.db=z
z=new D.h4()
z.b3(D.U)
z.e=H.c([],[D.c1])
z.f=H.c([],[D.hA])
z.r=H.c([],[D.i8])
z.x=H.c([],[D.ik])
z.y=H.c([],[D.il])
z.z=H.c([],[D.im])
z.Q=null
z.ch=null
z.ct(z.geu(),z.geN(),z.geP())
q.dx=z
p=z.Q
if(p==null){p=D.E()
z.Q=p
z=p}else z=p
p={func:1,ret:-1,args:[D.l]}
o=H.b(q.geX(),p)
C.a.h(z.a,o)
o=q.dx
z=o.ch
if(z==null){z=D.E()
o.ch=z}o=H.b(q.gaz(),p)
C.a.h(z.a,o)
q.dy=null
z=q.dx
n=U.dr(V.dU(new V.ab(0,0,0),new V.G(0,1,0),new V.G(1,-1,-3)))
m=new V.T(1,1,1)
l=new D.c1()
l.c=new V.T(1,1,1)
l.a=new V.G(0,0,1)
k=l.b
l.b=n
n=n.gp()
n.toString
j=H.b(l.ge2(),p)
C.a.h(n.a,j)
n=new D.D("mover",k,l.b,l,[U.a7])
n.b=!0
l.au(n)
if(!l.c.q(0,m)){k=l.c
l.c=m
n=new D.D("color",k,m,l,[V.T])
n.b=!0
l.au(n)}z.h(0,l)
z=q.r
z.sab(0,new V.T(0.2,0.2,0.2))
z=q.x
z.sab(0,new V.T(0.7,0.7,0.7))
z=q.z
z.sab(0,new V.T(0.7,0.7,0.7))
q.r.saK(r)
q.x.saK(r)
q.z.saK(w.f.cf("../resources/diceSpecular"))
z=q.z
if(z.c===C.b){z.c=C.e
z.bw()
z.bO(100)
n=z.a
n.a=null
n.L(null)}z.bO(10)
q.Q.saK(w.f.cf("../resources/diceBumpMap"))
z=q.ch
if(z!==s){if(z!=null)C.a.P(z.e.a,o)
k=q.ch
q.ch=s
C.a.h(s.e.a,o)
z=new D.D("environment",k,q.ch,q,[T.cb])
z.b=!0
q.L(z)}z=q.cx
z.sab(0,new V.T(0.3,0.3,0.3))
i=new U.dE()
i.b3(U.a7)
i.aM(i.ges(),i.geO())
i.e=null
i.f=V.aX()
i.r=0
z=w.r
o=new U.iL()
n=U.cx()
n.scp(0,!0)
n.scg(6.283185307179586)
n.scj(0)
n.sa0(0,0)
n.sci(100)
n.sK(0)
n.sc1(0.5)
o.b=n
n=n.gp()
n.toString
l=H.b(o.gav(),p)
C.a.h(n.a,l)
n=U.cx()
n.scp(0,!0)
n.scg(6.283185307179586)
n.scj(0)
n.sa0(0,0)
n.sci(100)
n.sK(0)
n.sc1(0.5)
o.c=n
C.a.h(n.gp().a,l)
o.d=null
o.e=!1
o.f=!1
o.r=!1
o.x=2.5
o.y=2.5
o.z=2
o.Q=4
o.cx=!1
o.ch=!1
o.cy=0
o.db=0
o.dx=null
o.dy=0
o.fr=null
o.fx=null
h=new X.as(!1,!1,!1)
k=o.d
o.d=h
n=[X.as]
l=new D.D("modifiers",k,h,o,n)
l.b=!0
o.I(l)
l=o.f
if(l!==!1){o.f=!1
l=new D.D("invertX",l,!1,o,[P.a3])
l.b=!0
o.I(l)}l=o.r
if(l!==!1){o.r=!1
l=new D.D("invertY",l,!1,o,[P.a3])
l.b=!0
o.I(l)}o.aO(z)
i.h(0,o)
z=w.r
o=new U.iK()
l=U.cx()
l.scp(0,!0)
l.scg(6.283185307179586)
l.scj(0)
l.sa0(0,0)
l.sci(100)
l.sK(0)
l.sc1(0.2)
o.b=l
l=l.gp()
l.toString
j=H.b(o.gav(),p)
C.a.h(l.a,j)
o.c=null
o.d=!1
o.e=2.5
o.f=2
o.r=4
o.y=!1
o.x=!1
o.z=0
o.Q=null
o.ch=0
o.cx=null
o.cy=null
h=new X.as(!0,!1,!1)
k=o.c
o.c=h
l=new D.D("modifiers",k,h,o,n)
l.b=!0
o.I(l)
o.aO(z)
i.h(0,o)
z=w.r
o=new U.iM()
o.c=0.01
o.d=0
o.e=0
h=new X.as(!1,!1,!1)
o.b=h
n=new D.D("modifiers",null,h,o,n)
n.b=!0
o.I(n)
o.aO(z)
i.h(0,o)
i.h(0,U.dr(V.ar(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
g=X.dY(2000,1.0471975511965976,i,0.1)
f=new M.fA()
f.saP(null)
f.saX(0,null)
f.saY(null)
z=E.dC(null,!0,null,"",null,null)
t=F.cO()
o=t.a
n=new V.G(-1,-1,1)
n=n.u(0,Math.sqrt(n.A(n)))
e=o.b9(new V.bp(1,2,4,6),new V.aK(1,0,0,1),new V.ab(-1,-1,0),new V.O(0,1),n,null)
o=t.a
n=new V.G(1,-1,1)
n=n.u(0,Math.sqrt(n.A(n)))
d=o.b9(new V.bp(0,3,4,6),new V.aK(0,0,1,1),new V.ab(1,-1,0),new V.O(1,1),n,null)
o=t.a
n=new V.G(1,1,1)
n=n.u(0,Math.sqrt(n.A(n)))
c=o.b9(new V.bp(0,2,5,6),new V.aK(0,1,0,1),new V.ab(1,1,0),new V.O(1,0),n,null)
o=t.a
n=new V.G(-1,1,1)
n=n.u(0,Math.sqrt(n.A(n)))
b=o.b9(new V.bp(0,2,4,7),new V.aK(1,1,0,1),new V.ab(-1,1,0),new V.O(0,0),n,null)
t.d.fC(H.c([e,d,c,b],[F.aC]))
t.am()
z.sbt(0,t)
f.d=z
f.e=null
z=new O.i5()
z.b=1.0471975511965976
k=z.c
z.c=s
o=s.e
n=H.b(z.gaz(),p)
C.a.h(o.a,n)
o=new D.D("boxTexture",k,z.c,z,[T.cb])
o.b=!0
z.L(o)
r=new V.T(1,1,1)
if(!J.S(z.d,r)){k=z.d
z.d=r
o=new D.D("boxColor",k,r,z,[V.T])
o.b=!0
z.L(o)}z.e=null
f.saY(z)
f.saX(0,v)
f.saP(g)
a=new M.fN()
z=O.cw(E.aA)
a.d=z
z.aM(a.gey(),a.gez())
a.e=null
a.f=null
a.r=null
a.x=null
a.saP(null)
a.saX(0,null)
a.saY(null)
a.saP(g)
a.saY(q)
a.saX(0,v)
a.d.h(0,u)
a.b.sd5(0,!1)
z=M.au
o=H.c([f,a],[z])
n=new M.fy()
n.b3(z)
n.e=!1
n.f=null
n.aM(n.geQ(),n.geR())
n.bR(0,o)
z=w.d
if(z!==n){if(z!=null){z=z.gp()
z.toString
o=H.b(w.gcD(),p)
C.a.P(z.a,o)}w.d=n
z=n.gp()
z.toString
p=H.b(w.gcD(),p)
C.a.h(z.a,p)
w.e0()}V.kV(w)}},1]]
setupProgram(dart,0,0)
J.J=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dI.prototype
return J.dH.prototype}if(typeof a=="string")return J.cC.prototype
if(a==null)return J.dJ.prototype
if(typeof a=="boolean")return J.h_.prototype
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
J.d8=function(a){if(a==null)return a
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bO.prototype
return a}if(a instanceof P.a)return a
return J.cl(a)}
J.kD=function(a){if(typeof a=="number")return J.c6.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cX.prototype
return a}
J.ck=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bO.prototype
return a}if(a instanceof P.a)return a
return J.cl(a)}
J.S=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.J(a).q(a,b)}
J.fh=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kD(a).a7(a,b)}
J.fi=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kM(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bW(a).j(a,b)}
J.fj=function(a,b,c,d){return J.ck(a).d0(a,b,c,d)}
J.co=function(a,b,c){return J.bW(a).fJ(a,b,c)}
J.df=function(a,b){return J.d8(a).C(a,b)}
J.fk=function(a,b){return J.d8(a).J(a,b)}
J.aS=function(a){return J.J(a).gT(a)}
J.bK=function(a){return J.d8(a).gW(a)}
J.b9=function(a){return J.bW(a).gk(a)}
J.a4=function(a){return J.J(a).i(a)}
I.db=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.ct.prototype
C.x=J.o.prototype
C.a=J.aU.prototype
C.y=J.dH.prototype
C.f=J.dI.prototype
C.z=J.dJ.prototype
C.i=J.c6.prototype
C.h=J.cC.prototype
C.G=J.bO.prototype
C.I=H.hu.prototype
C.J=W.hv.prototype
C.p=J.hz.prototype
C.K=P.cM.prototype
C.m=J.cX.prototype
C.r=W.bA.prototype
C.t=W.iZ.prototype
C.u=new P.hx()
C.v=new P.iO()
C.j=new P.jL()
C.b=new A.c0(0,"ColorSourceType.None")
C.e=new A.c0(1,"ColorSourceType.Solid")
C.d=new A.c0(2,"ColorSourceType.Texture2D")
C.c=new A.c0(3,"ColorSourceType.TextureCube")
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
C.H=H.c(I.db([0,0,65498,45055,65535,34815,65534,18431]),[P.A])
C.q=new P.iN(!1)
$.aq=0
$.ba=null
$.di=null
$.d1=!1
$.f7=null
$.f1=null
$.fd=null
$.cj=null
$.cm=null
$.d9=null
$.b3=null
$.bE=null
$.bF=null
$.d2=!1
$.N=C.j
$.dz=null
$.dy=null
$.dx=null
$.dw=null
$.m=V.ho()
$.i7="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.i6="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
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
I.$lazy(y,x,w)}})(["dv","$get$dv",function(){return H.f6("_$dart_dartClosure")},"cD","$get$cD",function(){return H.f6("_$dart_js")},"ei","$get$ei",function(){return H.av(H.cc({
toString:function(){return"$receiver$"}}))},"ej","$get$ej",function(){return H.av(H.cc({$method$:null,
toString:function(){return"$receiver$"}}))},"ek","$get$ek",function(){return H.av(H.cc(null))},"el","$get$el",function(){return H.av(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"ep","$get$ep",function(){return H.av(H.cc(void 0))},"eq","$get$eq",function(){return H.av(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"en","$get$en",function(){return H.av(H.eo(null))},"em","$get$em",function(){return H.av(function(){try{null.$method$}catch(z){return z.message}}())},"es","$get$es",function(){return H.av(H.eo(void 0))},"er","$get$er",function(){return H.av(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cZ","$get$cZ",function(){return P.j_()},"bG","$get$bG",function(){return[]},"eW","$get$eW",function(){return P.hN("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dt","$get$dt",function(){return{}},"eD","$get$eD",function(){return Z.aj(0)},"eB","$get$eB",function(){return Z.aj(511)},"ap","$get$ap",function(){return Z.aj(1)},"aF","$get$aF",function(){return Z.aj(2)},"aE","$get$aE",function(){return Z.aj(4)},"aG","$get$aG",function(){return Z.aj(8)},"aH","$get$aH",function(){return Z.aj(16)},"by","$get$by",function(){return Z.aj(32)},"bz","$get$bz",function(){return Z.aj(64)},"eC","$get$eC",function(){return Z.aj(96)},"b1","$get$b1",function(){return Z.aj(128)},"aD","$get$aD",function(){return Z.aj(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.l]},{func:1,ret:-1,args:[D.l]},{func:1,ret:P.I},{func:1,ret:-1},{func:1,ret:-1,args:[W.an]},{func:1,ret:P.I,args:[F.ag]},{func:1,ret:-1,args:[P.n,,]},{func:1,ret:-1,args:[W.a5]},{func:1,ret:-1,args:[P.A,[P.d,E.aA]]},{func:1,ret:P.I,args:[D.l]},{func:1,ret:-1,args:[W.b_]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.I,args:[,,]},{func:1,ret:P.n,args:[P.A]},{func:1,ret:P.I,args:[,]},{func:1,args:[,]},{func:1,ret:-1,args:[W.bk]},{func:1,ret:-1,args:[P.A,[P.d,D.U]]},{func:1,ret:P.v},{func:1,ret:-1,args:[P.A,[P.d,U.a7]]},{func:1,ret:-1,args:[P.A,[P.d,M.au]]},{func:1,ret:-1,args:[P.A,[P.d,V.aB]]},{func:1,ret:P.I,args:[W.a5]},{func:1,ret:P.I,args:[{func:1,ret:-1}]},{func:1,ret:P.a3,args:[W.K]},{func:1,ret:W.a_,args:[W.K]},{func:1,args:[,P.n]},{func:1,args:[P.n]},{func:1,ret:P.I,args:[P.W]},{func:1,ret:P.I,args:[{func:1,ret:-1,args:[D.l]}]},{func:1,ret:-1,args:[P.a],opt:[P.ao]},{func:1,ret:-1,args:[W.bA]},{func:1,ret:P.a3,args:[P.v,P.v]},{func:1,ret:P.a3,args:[[P.d,D.U]]},{func:1,ret:P.I,args:[,],opt:[,]},{func:1,ret:P.I,args:[F.aC,P.v,P.v]},{func:1,ret:[P.aI,,],args:[,]},{func:1,ret:P.I,args:[P.aZ]},{func:1,ret:-1,args:[P.n,P.n]}]
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
if(x==y)H.kY(d||a)
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
Isolate.db=a.db
Isolate.d6=a.d6
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
if(typeof dartMainRunner==="function")dartMainRunner(X.fa,[])
else X.fa([])})})()
//# sourceMappingURL=test.dart.js.map
