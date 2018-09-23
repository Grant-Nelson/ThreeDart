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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.d0"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.d0"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.d0(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.d1=function(){}
var dart=[["","",,H,{"^":"",lA:{"^":"a;a"}}],["","",,J,{"^":"",
J:function(a){return void 0},
d7:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cl:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.d4==null){H.kS()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.h(P.ey("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cC()]
if(v!=null)return v
v=H.kX(a)
if(v!=null)return v
if(typeof a=="function")return C.G
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cC(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
o:{"^":"a;",
t:function(a,b){return a===b},
gS:function(a){return H.bp(a)},
i:["dQ",function(a){return"Instance of '"+H.aZ(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h_:{"^":"o;",
i:function(a){return String(a)},
gS:function(a){return a?519018:218159},
$isa4:1},
dF:{"^":"o;",
t:function(a,b){return null==b},
i:function(a){return"null"},
gS:function(a){return 0},
$isI:1},
cD:{"^":"o;",
gS:function(a){return 0},
i:["dR",function(a){return String(a)}]},
hB:{"^":"cD;"},
cd:{"^":"cD;"},
bO:{"^":"cD;",
i:function(a){var z=a[$.$get$dr()]
if(z==null)return this.dR(a)
return"JavaScript function for "+H.j(J.al(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscz:1},
aV:{"^":"o;$ti",
h:function(a,b){H.C(b,H.z(a,0))
if(!!a.fixed$length)H.r(P.ac("add"))
a.push(b)},
N:function(a,b){var z
if(!!a.fixed$length)H.r(P.ac("remove"))
for(z=0;z<a.length;++z)if(J.P(a[z],b)){a.splice(z,1)
return!0}return!1},
bS:function(a,b){var z,y
H.w(b,"$ise",[H.z(a,0)],"$ase")
if(!!a.fixed$length)H.r(P.ac("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.y)(b),++y)a.push(b[y])},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.h(P.bc(a))}},
B:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.W(z,y,H.j(a[y]))
return z.join(b)},
h1:function(a){return this.B(a,"")},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
bv:function(a,b,c){var z=a.length
if(b>z)throw H.h(P.ag(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.h(P.ag(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.z(a,0)])
return H.c(a.slice(b,c),[H.z(a,0)])},
gcc:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.h(H.fY())},
ba:function(a,b){var z
for(z=0;z<a.length;++z)if(J.P(a[z],b))return!0
return!1},
i:function(a){return P.cA(a,"[","]")},
gV:function(a){return new J.am(a,a.length,0,[H.z(a,0)])},
gS:function(a){return H.bp(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.r(P.ac("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.bY(b,"newLength",null))
if(b<0)throw H.h(P.ag(b,0,null,"newLength",null))
a.length=b},
W:function(a,b,c){H.Z(b)
H.C(c,H.z(a,0))
if(!!a.immutable$list)H.r(P.ac("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.aO(a,b))
if(b>=a.length||b<0)throw H.h(H.aO(a,b))
a[b]=c},
$ise:1,
$isd:1,
p:{
fZ:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.bY(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.ag(a,0,4294967295,"length",null))
return J.dC(new Array(a),b)},
dC:function(a,b){return J.bi(H.c(a,[b]))},
bi:function(a){H.bH(a)
a.fixed$length=Array
return a}}},
lz:{"^":"aV;$ti"},
am:{"^":"a;a,b,c,0d,$ti",
gM:function(a){return this.d},
C:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.h(H.y(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bN:{"^":"o;",
gh0:function(a){return a===0?1/a<0:a<0},
hy:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.h(P.ac(""+a+".toInt()"))},
c9:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.h(P.ac(""+a+".floor()"))},
a6:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.ac(""+a+".round()"))},
dH:function(a,b){var z
if(b>20)throw H.h(P.ag(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gh0(a))return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gS:function(a){return a&0x1FFFFFFF},
j:function(a,b){if(typeof b!=="number")throw H.h(H.aK(b))
return a*b},
dM:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
dU:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cU(a,b)},
Z:function(a,b){return(a|0)===a?a/b|0:this.cU(a,b)},
cU:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.h(P.ac("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
b6:function(a,b){var z
if(a>0)z=this.fb(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fb:function(a,b){return b>31?0:a>>>b},
a7:function(a,b){if(typeof b!=="number")throw H.h(H.aK(b))
return a<b},
$isv:1,
$isX:1},
dE:{"^":"bN;",$isA:1},
dD:{"^":"bN;"},
c6:{"^":"o;",
c0:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.aO(a,b))
if(b<0)throw H.h(H.aO(a,b))
if(b>=a.length)H.r(H.aO(a,b))
return a.charCodeAt(b)},
b2:function(a,b){if(b>=a.length)throw H.h(H.aO(a,b))
return a.charCodeAt(b)},
F:function(a,b){H.S(b)
if(typeof b!=="string")throw H.h(P.bY(b,null,null))
return a+b},
bw:function(a,b,c){H.Z(c)
if(c==null)c=a.length
if(b<0)throw H.h(P.cb(b,null,null))
if(b>c)throw H.h(P.cb(b,null,null))
if(c>a.length)throw H.h(P.cb(c,null,null))
return a.substring(b,c)},
cu:function(a,b){return this.bw(a,b,null)},
j:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.u)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hd:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.j(c,z)+a},
aq:function(a,b){return this.hd(a,b," ")},
fN:function(a,b,c){if(c>a.length)throw H.h(P.ag(c,0,a.length,null,null))
return H.fd(a,b,c)},
i:function(a){return a},
gS:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$isdT:1,
$isn:1}}],["","",,H,{"^":"",
fY:function(){return new P.ic("No element")},
a_:{"^":"iL;a",
gl:function(a){return this.a.length},
k:function(a,b){return C.i.c0(this.a,b)},
$asez:function(){return[P.A]},
$ast:function(){return[P.A]},
$ase:function(){return[P.A]},
$asd:function(){return[P.A]}},
fJ:{"^":"e;"},
dL:{"^":"a;a,b,c,0d,$ti",
gM:function(a){return this.d},
C:function(){var z,y,x,w
z=this.a
y=J.bW(z)
x=y.gl(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.h(P.bc(z))
w=this.c
if(typeof x!=="number")return H.p(x)
if(w>=x){this.d=null
return!1}this.d=y.D(z,w);++this.c
return!0}},
hg:{"^":"e;a,b,$ti",
gV:function(a){return new H.hh(J.bI(this.a),this.b,this.$ti)},
gl:function(a){return J.ba(this.a)},
D:function(a,b){return this.b.$1(J.db(this.a,b))},
$ase:function(a,b){return[b]}},
hh:{"^":"cB;0a,b,c,$ti",
C:function(){var z=this.b
if(z.C()){this.a=this.c.$1(z.gM(z))
return!0}this.a=null
return!1},
gM:function(a){return this.a},
$ascB:function(a,b){return[b]}},
j3:{"^":"e;a,b,$ti",
gV:function(a){return new H.j4(J.bI(this.a),this.b,this.$ti)}},
j4:{"^":"cB;a,b,$ti",
C:function(){var z,y
for(z=this.a,y=this.b;z.C();)if(y.$1(z.gM(z)))return!0
return!1},
gM:function(a){var z=this.a
return z.gM(z)}},
c3:{"^":"a;$ti"},
ez:{"^":"a;$ti"},
iL:{"^":"c7+ez;"}}],["","",,H,{"^":"",
kN:function(a){return init.types[H.Z(a)]},
kV:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.J(a).$isB},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.al(a)
if(typeof z!=="string")throw H.h(H.aK(a))
return z},
bp:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aZ:function(a){var z,y,x,w,v,u,t,s,r
z=J.J(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.x||!!J.J(a).$iscd){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.i.b2(w,0)===36)w=C.i.cu(w,1)
r=H.d5(H.bH(H.aP(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
dX:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
hL:function(a){var z,y,x,w
z=H.c([],[P.A])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.y)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.h(H.aK(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.b6(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.h(H.aK(w))}return H.dX(z)},
dY:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.h(H.aK(x))
if(x<0)throw H.h(H.aK(x))
if(x>65535)return H.hL(a)}return H.dX(a)},
hK:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.b6(z,10))>>>0,56320|z&1023)}throw H.h(P.ag(a,0,1114111,null,null))},
a7:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hJ:function(a){return a.b?H.a7(a).getUTCFullYear()+0:H.a7(a).getFullYear()+0},
hH:function(a){return a.b?H.a7(a).getUTCMonth()+1:H.a7(a).getMonth()+1},
hD:function(a){return a.b?H.a7(a).getUTCDate()+0:H.a7(a).getDate()+0},
hE:function(a){return a.b?H.a7(a).getUTCHours()+0:H.a7(a).getHours()+0},
hG:function(a){return a.b?H.a7(a).getUTCMinutes()+0:H.a7(a).getMinutes()+0},
hI:function(a){return a.b?H.a7(a).getUTCSeconds()+0:H.a7(a).getSeconds()+0},
hF:function(a){return a.b?H.a7(a).getUTCMilliseconds()+0:H.a7(a).getMilliseconds()+0},
p:function(a){throw H.h(H.aK(a))},
i:function(a,b){if(a==null)J.ba(a)
throw H.h(H.aO(a,b))},
aO:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aB(!0,b,"index",null)
z=H.Z(J.ba(a))
if(!(b<0)){if(typeof z!=="number")return H.p(z)
y=b>=z}else y=!0
if(y)return P.M(b,a,"index",null,z)
return P.cb(b,"index",null)},
kI:function(a,b,c){if(a>c)return new P.ca(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.ca(a,c,!0,b,"end","Invalid value")
return new P.aB(!0,b,"end",null)},
aK:function(a){return new P.aB(!0,a,null,null)},
kB:function(a){if(typeof a!=="number")throw H.h(H.aK(a))
return a},
h:function(a){var z
if(a==null)a=new P.dS()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.ff})
z.name=""}else z.toString=H.ff
return z},
ff:function(){return J.al(this.dartException)},
r:function(a){throw H.h(a)},
y:function(a){throw H.h(P.bc(a))},
aR:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.l9(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.b6(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cE(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dR(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eh()
u=$.$get$ei()
t=$.$get$ej()
s=$.$get$ek()
r=$.$get$eo()
q=$.$get$ep()
p=$.$get$em()
$.$get$el()
o=$.$get$er()
n=$.$get$eq()
m=v.a5(y)
if(m!=null)return z.$1(H.cE(H.S(y),m))
else{m=u.a5(y)
if(m!=null){m.method="call"
return z.$1(H.cE(H.S(y),m))}else{m=t.a5(y)
if(m==null){m=s.a5(y)
if(m==null){m=r.a5(y)
if(m==null){m=q.a5(y)
if(m==null){m=p.a5(y)
if(m==null){m=s.a5(y)
if(m==null){m=o.a5(y)
if(m==null){m=n.a5(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dR(H.S(y),m))}}return z.$1(new H.iK(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.e4()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aB(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.e4()
return a},
b8:function(a){var z
if(a==null)return new H.eQ(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eQ(a)},
kK:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.W(0,a[y],a[x])}return b},
kU:function(a,b,c,d,e,f){H.k(a,"$iscz")
switch(H.Z(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.q("Unsupported number of arguments for wrapped closure"))},
b6:function(a,b){var z
H.Z(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kU)
a.$identity=z
return z},
fv:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.J(d).$isd){z.$reflectionInfo=d
x=H.hO(z).r}else x=d
w=e?Object.create(new H.id().constructor.prototype):Object.create(new H.cq(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.ar
if(typeof u!=="number")return u.F()
$.ar=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dk(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.kN,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.df:H.cr
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.h("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dk(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fs:function(a,b,c,d){var z=H.cr
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dk:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fu(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fs(y,!w,z,b)
if(y===0){w=$.ar
if(typeof w!=="number")return w.F()
$.ar=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bb
if(v==null){v=H.bZ("self")
$.bb=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ar
if(typeof w!=="number")return w.F()
$.ar=w+1
t+=w
w="return function("+t+"){return this."
v=$.bb
if(v==null){v=H.bZ("self")
$.bb=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
ft:function(a,b,c,d){var z,y
z=H.cr
y=H.df
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
fu:function(a,b){var z,y,x,w,v,u,t,s
z=$.bb
if(z==null){z=H.bZ("self")
$.bb=z}y=$.de
if(y==null){y=H.bZ("receiver")
$.de=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.ft(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.ar
if(typeof y!=="number")return y.F()
$.ar=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.ar
if(typeof y!=="number")return y.F()
$.ar=y+1
return new Function(z+y+"}")()},
d0:function(a,b,c,d,e,f,g){var z,y
z=J.bi(H.bH(b))
H.Z(c)
y=!!J.J(d).$isd?J.bi(d):d
return H.fv(a,z,c,y,!!e,f,g)},
S:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.ay(a,"String"))},
l_:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.ay(a,"num"))},
f3:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.ay(a,"bool"))},
Z:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.ay(a,"int"))},
fb:function(a,b){throw H.h(H.ay(a,H.S(b).substring(3)))},
l1:function(a,b){var z=J.bW(b)
throw H.h(H.fr(a,z.bw(b,3,z.gl(b))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.J(a)[b])return a
H.fb(a,b)},
f:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.J(a)[b]
else z=!0
if(z)return a
H.l1(a,b)},
bH:function(a){if(a==null)return a
if(!!J.J(a).$isd)return a
throw H.h(H.ay(a,"List"))},
kW:function(a,b){if(a==null)return a
if(!!J.J(a).$isd)return a
if(J.J(a)[b])return a
H.fb(a,b)},
f4:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.Z(z)]
else return a.$S()}return},
bV:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.f4(J.J(a))
if(z==null)return!1
y=H.f7(z,null,b,null)
return y},
b:function(a,b){var z,y
if(a==null)return a
if($.cX)return a
$.cX=!0
try{if(H.bV(a,b))return a
z=H.bX(b)
y=H.ay(a,z)
throw H.h(y)}finally{$.cX=!1}},
d2:function(a,b){if(a!=null&&!H.d_(a,b))H.r(H.ay(a,H.bX(b)))
return a},
eZ:function(a){var z
if(a instanceof H.u){z=H.f4(J.J(a))
if(z!=null)return H.bX(z)
return"Closure"}return H.aZ(a)},
l6:function(a){throw H.h(new P.fC(H.S(a)))},
f5:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
aP:function(a){if(a==null)return
return a.$ti},
mn:function(a,b,c){return H.b9(a["$as"+H.j(c)],H.aP(b))},
bG:function(a,b,c,d){var z
H.S(c)
H.Z(d)
z=H.b9(a["$as"+H.j(c)],H.aP(b))
return z==null?null:z[d]},
aA:function(a,b,c){var z
H.S(b)
H.Z(c)
z=H.b9(a["$as"+H.j(b)],H.aP(a))
return z==null?null:z[c]},
z:function(a,b){var z
H.Z(b)
z=H.aP(a)
return z==null?null:z[b]},
bX:function(a){var z=H.aQ(a,null)
return z},
aQ:function(a,b){var z,y
H.w(b,"$isd",[P.n],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.d5(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Z(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.j(b[y])}if('func' in a)return H.kr(a,b)
if('futureOr' in a)return"FutureOr<"+H.aQ("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kr:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.n]
H.w(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.i(b,r)
t=C.i.F(t,b[r])
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
for(z=H.kJ(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.S(z[l])
n=n+m+H.aQ(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
d5:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isd",[P.n],"$asd")
if(a==null)return""
z=new P.bS("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aQ(u,c)}v="<"+z.i(0)+">"
return v},
b9:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bF:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aP(a)
y=J.J(a)
if(y[b]==null)return!1
return H.f1(H.b9(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.S(b)
H.bH(c)
H.S(d)
if(a==null)return a
z=H.bF(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.d5(c,0,null)
throw H.h(H.ay(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
f1:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ak(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ak(a[y],b,c[y],d))return!1
return!0},
ml:function(a,b,c){return a.apply(b,H.b9(J.J(b)["$as"+H.j(c)],H.aP(b)))},
f8:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="I"||a===-1||a===-2||H.f8(z)}return!1},
d_:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="I"||b===-1||b===-2||H.f8(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.d_(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bV(a,b)}y=J.J(a).constructor
x=H.aP(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.ak(y,null,b,null)
return z},
C:function(a,b){if(a!=null&&!H.d_(a,b))throw H.h(H.ay(a,H.bX(b)))
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
if('func' in c)return H.f7(a,b,c,d)
if('func' in a)return c.builtin$cls==="cz"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ak("type" in a?a.type:null,b,x,d)
else if(H.ak(a,b,x,d))return!0
else{if(!('$is'+"bf" in y.prototype))return!1
w=y.prototype["$as"+"bf"]
v=H.b9(w,z?a.slice(1):null)
return H.ak(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.bX(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.f1(H.b9(r,z),b,u,d)},
f7:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.kZ(m,b,l,d)},
kZ:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ak(c[w],d,a[w],b))return!1}return!0},
mm:function(a,b,c){Object.defineProperty(a,H.S(b),{value:c,enumerable:false,writable:true,configurable:true})},
kX:function(a){var z,y,x,w,v,u
z=H.S($.f6.$1(a))
y=$.cj[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cm[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.S($.f0.$2(a,z))
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
return u.i}if(v==="+")return H.fa(a,x)
if(v==="*")throw H.h(P.ey(z))
if(init.leafTags[z]===true){u=H.cn(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fa(a,x)},
fa:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.d7(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cn:function(a){return J.d7(a,!1,null,!!a.$isB)},
kY:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cn(z)
else return J.d7(z,c,null,null)},
kS:function(){if(!0===$.d4)return
$.d4=!0
H.kT()},
kT:function(){var z,y,x,w,v,u,t,s
$.cj=Object.create(null)
$.cm=Object.create(null)
H.kO()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fc.$1(v)
if(u!=null){t=H.kY(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kO:function(){var z,y,x,w,v,u,t
z=C.D()
z=H.b5(C.A,H.b5(C.F,H.b5(C.n,H.b5(C.n,H.b5(C.E,H.b5(C.B,H.b5(C.C(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.f6=new H.kP(v)
$.f0=new H.kQ(u)
$.fc=new H.kR(t)},
b5:function(a,b){return a(b)||b},
fd:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fe:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hN:{"^":"a;a,b,c,d,e,f,r,0x",p:{
hO:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bi(z)
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
p:{
ax:function(a){var z,y,x,w,v,u
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
en:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hy:{"^":"Y;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
p:{
dR:function(a,b){return new H.hy(a,b==null?null:b.method)}}},
h2:{"^":"Y;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
p:{
cE:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.h2(a,y,z?null:b.receiver)}}},
iK:{"^":"Y;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
l9:{"^":"u:15;a",
$1:function(a){if(!!J.J(a).$isY)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eQ:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isap:1},
u:{"^":"a;",
i:function(a){return"Closure '"+H.aZ(this).trim()+"'"},
gdJ:function(){return this},
$iscz:1,
gdJ:function(){return this}},
e8:{"^":"u;"},
id:{"^":"e8;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cq:{"^":"e8;a,b,c,d",
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cq))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gS:function(a){var z,y
z=this.c
if(z==null)y=H.bp(this.a)
else y=typeof z!=="object"?J.aS(z):H.bp(z)
return(y^H.bp(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.aZ(z)+"'")},
p:{
cr:function(a){return a.a},
df:function(a){return a.c},
bZ:function(a){var z,y,x,w,v
z=new H.cq("self","target","receiver","name")
y=J.bi(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iy:{"^":"Y;a",
i:function(a){return this.a},
p:{
ay:function(a,b){return new H.iy("TypeError: "+H.j(P.c2(a))+": type '"+H.eZ(a)+"' is not a subtype of type '"+b+"'")}}},
fq:{"^":"Y;a",
i:function(a){return this.a},
p:{
fr:function(a,b){return new H.fq("CastError: "+H.j(P.c2(a))+": type '"+H.eZ(a)+"' is not a subtype of type '"+b+"'")}}},
hW:{"^":"Y;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
p:{
hX:function(a){return new H.hW(a)}}},
aW:{"^":"he;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
gap:function(a){return new H.dK(this,[H.z(this,0)])},
d3:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cJ(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cJ(y,b)}else return this.fZ(b)},
fZ:function(a){var z=this.d
if(z==null)return!1
return this.ca(this.bF(z,J.aS(a)&0x3ffffff),a)>=0},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.b3(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.b3(w,b)
x=y==null?null:y.b
return x}else return this.h_(b)},
h_:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bF(z,J.aS(a)&0x3ffffff)
x=this.ca(y,a)
if(x<0)return
return y[x].b},
W:function(a,b,c){var z,y,x,w,v,u
H.C(b,H.z(this,0))
H.C(c,H.z(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bL()
this.b=z}this.cC(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bL()
this.c=y}this.cC(y,b,c)}else{x=this.d
if(x==null){x=this.bL()
this.d=x}w=J.aS(b)&0x3ffffff
v=this.bF(x,w)
if(v==null)this.bQ(x,w,[this.bM(b,c)])
else{u=this.ca(v,b)
if(u>=0)v[u].b=c
else v.push(this.bM(b,c))}}},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.z(this,0),H.z(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.h(P.bc(this))
z=z.c}},
cC:function(a,b,c){var z
H.C(b,H.z(this,0))
H.C(c,H.z(this,1))
z=this.b3(a,b)
if(z==null)this.bQ(a,b,this.bM(b,c))
else z.b=c},
eo:function(){this.r=this.r+1&67108863},
bM:function(a,b){var z,y
z=new H.h6(H.C(a,H.z(this,0)),H.C(b,H.z(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eo()
return z},
ca:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.P(a[y].a,b))return y
return-1},
i:function(a){return P.dN(this)},
b3:function(a,b){return a[b]},
bF:function(a,b){return a[b]},
bQ:function(a,b,c){a[b]=c},
eh:function(a,b){delete a[b]},
cJ:function(a,b){return this.b3(a,b)!=null},
bL:function(){var z=Object.create(null)
this.bQ(z,"<non-identifier-key>",z)
this.eh(z,"<non-identifier-key>")
return z},
$isdJ:1},
h6:{"^":"a;a,b,0c,0d"},
dK:{"^":"fJ;a,$ti",
gl:function(a){return this.a.a},
gV:function(a){var z,y
z=this.a
y=new H.h7(z,z.r,this.$ti)
y.c=z.e
return y}},
h7:{"^":"a;a,b,0c,0d,$ti",
gM:function(a){return this.d},
C:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.bc(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kP:{"^":"u:15;a",
$1:function(a){return this.a(a)}},
kQ:{"^":"u:26;a",
$2:function(a,b){return this.a(a,b)}},
kR:{"^":"u:27;a",
$1:function(a){return this.a(H.S(a))}},
h0:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isdT:1,
p:{
h1:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.h(new P.fT("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
kJ:function(a){return J.dC(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
l0:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bB:function(a){return a},
aN:function(a,b,c){H.bH(b)
if(a>>>0!==a||a>=c)throw H.h(H.aO(b,a))},
kq:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.h(H.kI(a,b,c))
return b},
hu:{"^":"o;",$ism6:1,"%":"DataView;ArrayBufferView;cI|eK|eL|ht|eM|eN|aM"},
cI:{"^":"hu;",
gl:function(a){return a.length},
$isB:1,
$asB:I.d1},
ht:{"^":"eL;",
k:function(a,b){H.aN(b,a,a.length)
return a[b]},
$asc3:function(){return[P.v]},
$ast:function(){return[P.v]},
$ise:1,
$ase:function(){return[P.v]},
$isd:1,
$asd:function(){return[P.v]},
"%":"Float32Array|Float64Array"},
aM:{"^":"eN;",
$asc3:function(){return[P.A]},
$ast:function(){return[P.A]},
$ise:1,
$ase:function(){return[P.A]},
$isd:1,
$asd:function(){return[P.A]}},
lI:{"^":"aM;",
k:function(a,b){H.aN(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lJ:{"^":"aM;",
k:function(a,b){H.aN(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lK:{"^":"aM;",
k:function(a,b){H.aN(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lL:{"^":"aM;",
k:function(a,b){H.aN(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lM:{"^":"aM;",
k:function(a,b){H.aN(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lN:{"^":"aM;",
gl:function(a){return a.length},
k:function(a,b){H.aN(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hv:{"^":"aM;",
gl:function(a){return a.length},
k:function(a,b){H.aN(b,a,a.length)
return a[b]},
bv:function(a,b,c){return new Uint8Array(a.subarray(b,H.kq(b,c,a.length)))},
"%":";Uint8Array"},
eK:{"^":"cI+t;"},
eL:{"^":"eK+c3;"},
eM:{"^":"cI+t;"},
eN:{"^":"eM+c3;"}}],["","",,P,{"^":"",
j6:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.ky()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b6(new P.j8(z),1)).observe(y,{childList:true})
return new P.j7(z,y,x)}else if(self.setImmediate!=null)return P.kz()
return P.kA()},
ma:[function(a){self.scheduleImmediate(H.b6(new P.j9(H.b(a,{func:1,ret:-1})),0))},"$1","ky",4,0,11],
mb:[function(a){self.setImmediate(H.b6(new P.ja(H.b(a,{func:1,ret:-1})),0))},"$1","kz",4,0,11],
mc:[function(a){P.cP(C.l,H.b(a,{func:1,ret:-1}))},"$1","kA",4,0,11],
cP:function(a,b){var z
H.b(b,{func:1,ret:-1})
z=C.h.Z(a.a,1000)
return P.k5(z<0?0:z,b)},
ec:function(a,b){var z
H.b(b,{func:1,ret:-1,args:[P.b_]})
z=C.h.Z(a.a,1000)
return P.k6(z<0?0:z,b)},
ku:function(a,b){if(H.bV(a,{func:1,args:[P.a,P.ap]}))return b.hm(a,null,P.a,P.ap)
if(H.bV(a,{func:1,args:[P.a]}))return H.b(a,{func:1,ret:null,args:[P.a]})
throw H.h(P.bY(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kt:function(){var z,y
for(;z=$.b4,z!=null;){$.bD=null
y=z.b
$.b4=y
if(y==null)$.bC=null
z.a.$0()}},
mk:[function(){$.cY=!0
try{P.kt()}finally{$.bD=null
$.cY=!1
if($.b4!=null)$.$get$cU().$1(P.f2())}},"$0","f2",0,0,3],
eY:function(a){var z=new P.eF(H.b(a,{func:1,ret:-1}))
if($.b4==null){$.bC=z
$.b4=z
if(!$.cY)$.$get$cU().$1(P.f2())}else{$.bC.b=z
$.bC=z}},
kx:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
z=$.b4
if(z==null){P.eY(a)
$.bD=$.bC
return}y=new P.eF(a)
x=$.bD
if(x==null){y.b=z
$.bD=y
$.b4=y}else{y.b=x.b
x.b=y
$.bD=y
if(y.b==null)$.bC=y}},
l2:function(a){var z,y
z={func:1,ret:-1}
H.b(a,z)
y=$.O
if(C.j===y){P.ci(null,null,C.j,a)
return}y.toString
P.ci(null,null,y,H.b(y.bW(a),z))},
eb:function(a,b){var z,y
z={func:1,ret:-1}
H.b(b,z)
y=$.O
if(y===C.j){y.toString
return P.cP(a,b)}return P.cP(a,H.b(y.bW(b),z))},
iu:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.b_]}
H.b(b,z)
y=$.O
if(y===C.j){y.toString
return P.ec(a,b)}x=y.d_(b,P.b_)
$.O.toString
return P.ec(a,H.b(x,z))},
ch:function(a,b,c,d,e){var z={}
z.a=d
P.kx(new P.kv(z,e))},
eW:function(a,b,c,d,e){var z,y
H.b(d,{func:1,ret:e})
y=$.O
if(y===c)return d.$0()
$.O=c
z=y
try{y=d.$0()
return y}finally{$.O=z}},
eX:function(a,b,c,d,e,f,g){var z,y
H.b(d,{func:1,ret:f,args:[g]})
H.C(e,g)
y=$.O
if(y===c)return d.$1(e)
$.O=c
z=y
try{y=d.$1(e)
return y}finally{$.O=z}},
kw:function(a,b,c,d,e,f,g,h,i){var z,y
H.b(d,{func:1,ret:g,args:[h,i]})
H.C(e,h)
H.C(f,i)
y=$.O
if(y===c)return d.$2(e,f)
$.O=c
z=y
try{y=d.$2(e,f)
return y}finally{$.O=z}},
ci:function(a,b,c,d){var z
H.b(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.bW(d):c.fK(d,-1)
P.eY(d)},
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
eT:{"^":"a;a,0b,c",
e3:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b6(new P.k8(this,b),0),a)
else throw H.h(P.ac("`setTimeout()` not found."))},
e4:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b6(new P.k7(this,a,Date.now(),b),0),a)
else throw H.h(P.ac("Periodic timer."))},
$isb_:1,
p:{
k5:function(a,b){var z=new P.eT(!0,0)
z.e3(a,b)
return z},
k6:function(a,b){var z=new P.eT(!1,0)
z.e4(a,b)
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
if(w>(y+1)*x)y=C.h.dU(w,x)}z.c=y
this.d.$1(z)}},
b3:{"^":"a;0a,b,c,d,e,$ti",
h5:function(a){if(this.c!==6)return!0
return this.b.b.cm(H.b(this.d,{func:1,ret:P.a4,args:[P.a]}),a.a,P.a4,P.a)},
fY:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.z(this,1)}
w=this.b.b
if(H.bV(z,{func:1,args:[P.a,P.ap]}))return H.d2(w.hs(z,a.a,a.b,null,y,P.ap),x)
else return H.d2(w.cm(H.b(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aJ:{"^":"a;cT:a<,b,0f3:c<,$ti",
dG:function(a,b,c){var z,y,x,w
z=H.z(this,0)
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.O
if(y!==C.j){y.toString
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.ku(b,y)}H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aJ(0,$.O,[c])
w=b==null?1:3
this.cD(new P.b3(x,w,a,b,[z,c]))
return x},
hx:function(a,b){return this.dG(a,null,b)},
cD:function(a){var z,y
z=this.a
if(z<=1){a.a=H.k(this.c,"$isb3")
this.c=a}else{if(z===2){y=H.k(this.c,"$isaJ")
z=y.a
if(z<4){y.cD(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.ci(null,null,z,H.b(new P.jo(this,a),{func:1,ret:-1}))}},
cP:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.k(this.c,"$isb3")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.k(this.c,"$isaJ")
y=u.a
if(y<4){u.cP(a)
return}this.a=y
this.c=u.c}z.a=this.b5(a)
y=this.b
y.toString
P.ci(null,null,y,H.b(new P.jt(z,this),{func:1,ret:-1}))}},
bO:function(){var z=H.k(this.c,"$isb3")
this.c=null
return this.b5(z)},
b5:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cG:function(a){var z,y,x,w
z=H.z(this,0)
H.d2(a,{futureOr:1,type:z})
y=this.$ti
x=H.bF(a,"$isbf",y,"$asbf")
if(x){z=H.bF(a,"$isaJ",y,null)
if(z)P.eH(a,this)
else P.jp(a,this)}else{w=this.bO()
H.C(a,z)
this.a=4
this.c=a
P.bA(this,w)}},
bB:[function(a,b){var z
H.k(b,"$isap")
z=this.bO()
this.a=8
this.c=new P.ad(a,b)
P.bA(this,z)},function(a){return this.bB(a,null)},"hE","$2","$1","ged",4,2,30],
$isbf:1,
p:{
jp:function(a,b){var z,y,x
b.a=1
try{a.dG(new P.jq(b),new P.jr(b),null)}catch(x){z=H.aR(x)
y=H.b8(x)
P.l2(new P.js(b,z,y))}},
eH:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.k(a.c,"$isaJ")
if(z>=4){y=b.bO()
b.a=a.a
b.c=a.c
P.bA(b,y)}else{y=H.k(b.c,"$isb3")
b.a=2
b.c=a
a.cP(y)}},
bA:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.k(y.c,"$isad")
y=y.b
u=v.a
t=v.b
y.toString
P.ch(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bA(z.a,b)}y=z.a
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
if(p){H.k(r,"$isad")
y=y.b
u=r.a
t=r.b
y.toString
P.ch(null,null,y,u,t)
return}o=$.O
if(o==null?q!=null:o!==q)$.O=q
else o=null
y=b.c
if(y===8)new P.jw(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jv(x,b,r).$0()}else if((y&2)!==0)new P.ju(z,x,b).$0()
if(o!=null)$.O=o
y=x.b
if(!!J.J(y).$isbf){if(y.a>=4){n=H.k(t.c,"$isb3")
t.c=null
b=t.b5(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eH(y,t)
return}}m=b.b
n=H.k(m.c,"$isb3")
m.c=null
b=m.b5(n)
y=x.a
u=x.b
if(!y){H.C(u,H.z(m,0))
m.a=4
m.c=u}else{H.k(u,"$isad")
m.a=8
m.c=u}z.a=m
y=m}}}},
jo:{"^":"u:2;a,b",
$0:function(){P.bA(this.a,this.b)}},
jt:{"^":"u:2;a,b",
$0:function(){P.bA(this.b,this.a.a)}},
jq:{"^":"u:14;a",
$1:function(a){var z=this.a
z.a=0
z.cG(a)}},
jr:{"^":"u:34;a",
$2:function(a,b){this.a.bB(a,H.k(b,"$isap"))},
$1:function(a){return this.$2(a,null)}},
js:{"^":"u:2;a,b,c",
$0:function(){this.a.bB(this.b,this.c)}},
jw:{"^":"u:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dF(H.b(w.d,{func:1}),null)}catch(v){y=H.aR(v)
x=H.b8(v)
if(this.d){w=H.k(this.a.a.c,"$isad").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.k(this.a.a.c,"$isad")
else u.b=new P.ad(y,x)
u.a=!0
return}if(!!J.J(z).$isbf){if(z instanceof P.aJ&&z.gcT()>=4){if(z.gcT()===8){w=this.b
w.b=H.k(z.gf3(),"$isad")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.hx(new P.jx(t),null)
w.a=!1}}},
jx:{"^":"u:37;a",
$1:function(a){return this.a}},
jv:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.z(x,0)
v=H.C(this.c,w)
u=H.z(x,1)
this.a.b=x.b.b.cm(H.b(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aR(t)
y=H.b8(t)
x=this.a
x.b=new P.ad(z,y)
x.a=!0}}},
ju:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.k(this.a.a.c,"$isad")
w=this.c
if(w.h5(z)&&w.e!=null){v=this.b
v.b=w.fY(z)
v.a=!1}}catch(u){y=H.aR(u)
x=H.b8(u)
w=H.k(this.a.a.c,"$isad")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ad(y,x)
s.a=!0}}},
eF:{"^":"a;a,0b"},
cL:{"^":"a;$ti",
gl:function(a){var z,y
z={}
y=new P.aJ(0,$.O,[P.A])
z.a=0
this.h4(new P.ih(z,this),!0,new P.ii(z,y),y.ged())
return y}},
ih:{"^":"u;a,b",
$1:function(a){H.C(a,H.aA(this.b,"cL",0));++this.a.a},
$S:function(){return{func:1,ret:P.I,args:[H.aA(this.b,"cL",0)]}}},
ii:{"^":"u:2;a,b",
$0:function(){this.b.cG(this.a.a)}},
e6:{"^":"a;$ti"},
ig:{"^":"a;"},
b_:{"^":"a;"},
ad:{"^":"a;a,b",
i:function(a){return H.j(this.a)},
$isY:1},
kf:{"^":"a;",$ism9:1},
kv:{"^":"u:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dS()
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
try{if(C.j===$.O){a.$0()
return}P.eW(null,null,this,a,-1)}catch(x){z=H.aR(x)
y=H.b8(x)
P.ch(null,null,this,z,H.k(y,"$isap"))}},
hu:function(a,b,c){var z,y,x
H.b(a,{func:1,ret:-1,args:[c]})
H.C(b,c)
try{if(C.j===$.O){a.$1(b)
return}P.eX(null,null,this,a,b,-1,c)}catch(x){z=H.aR(x)
y=H.b8(x)
P.ch(null,null,this,z,H.k(y,"$isap"))}},
fK:function(a,b){return new P.jU(this,H.b(a,{func:1,ret:b}),b)},
bW:function(a){return new P.jT(this,H.b(a,{func:1,ret:-1}))},
d_:function(a,b){return new P.jV(this,H.b(a,{func:1,ret:-1,args:[b]}),b)},
dF:function(a,b){H.b(a,{func:1,ret:b})
if($.O===C.j)return a.$0()
return P.eW(null,null,this,a,b)},
cm:function(a,b,c,d){H.b(a,{func:1,ret:c,args:[d]})
H.C(b,d)
if($.O===C.j)return a.$1(b)
return P.eX(null,null,this,a,b,c,d)},
hs:function(a,b,c,d,e,f){H.b(a,{func:1,ret:d,args:[e,f]})
H.C(b,e)
H.C(c,f)
if($.O===C.j)return a.$2(b,c)
return P.kw(null,null,this,a,b,c,d,e,f)},
hm:function(a,b,c,d){return H.b(a,{func:1,ret:b,args:[c,d]})}},
jU:{"^":"u;a,b,c",
$0:function(){return this.a.dF(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jT:{"^":"u:3;a,b",
$0:function(){return this.a.ht(this.b)}},
jV:{"^":"u;a,b,c",
$1:function(a){var z=this.c
return this.a.hu(this.b,H.C(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
h9:function(a,b,c){H.bH(a)
return H.w(H.kK(a,new H.aW(0,0,[b,c])),"$isdJ",[b,c],"$asdJ")},
h8:function(a,b){return new H.aW(0,0,[a,b])},
ha:function(a,b,c,d){return new P.jE(0,0,[d])},
fX:function(a,b,c){var z,y
if(P.cZ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bE()
C.a.h(y,a)
try{P.ks(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.e7(b,H.kW(z,"$ise"),", ")+c
return y.charCodeAt(0)==0?y:y},
cA:function(a,b,c){var z,y,x
if(P.cZ(a))return b+"..."+c
z=new P.bS(b)
y=$.$get$bE()
C.a.h(y,a)
try{x=z
x.a=P.e7(x.gav(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gav()+c
y=z.gav()
return y.charCodeAt(0)==0?y:y},
cZ:function(a){var z,y
for(z=0;y=$.$get$bE(),z<y.length;++z)if(a===y[z])return!0
return!1},
ks:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gV(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.C())return
w=H.j(z.gM(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.C()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gM(z);++x
if(!z.C()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gM(z);++x
for(;z.C();t=s,s=r){r=z.gM(z);++x
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
dN:function(a){var z,y,x
z={}
if(P.cZ(a))return"{...}"
y=new P.bS("")
try{C.a.h($.$get$bE(),a)
x=y
x.a=x.gav()+"{"
z.a=!0
J.fj(a,new P.hf(z,y))
z=y
z.a=z.gav()+"}"}finally{z=$.$get$bE()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.gav()
return z.charCodeAt(0)==0?z:z},
jE:{"^":"jy;a,0b,0c,0d,0e,0f,r,$ti",
gV:function(a){return P.eJ(this,this.r,H.z(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z,y
H.C(b,H.z(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cW()
this.b=z}return this.cE(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cW()
this.c=y}return this.cE(y,b)}else return this.e6(0,b)},
e6:function(a,b){var z,y,x
H.C(b,H.z(this,0))
z=this.d
if(z==null){z=P.cW()
this.d=z}y=this.cH(b)
x=z[y]
if(x==null)z[y]=[this.bA(b)]
else{if(this.cM(x,b)>=0)return!1
x.push(this.bA(b))}return!0},
N:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cQ(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cQ(this.c,b)
else return this.eW(0,b)},
eW:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.el(z,b)
x=this.cM(y,b)
if(x<0)return!1
this.cV(y.splice(x,1)[0])
return!0},
cE:function(a,b){H.C(b,H.z(this,0))
if(H.k(a[b],"$iscV")!=null)return!1
a[b]=this.bA(b)
return!0},
cQ:function(a,b){var z
if(a==null)return!1
z=H.k(a[b],"$iscV")
if(z==null)return!1
this.cV(z)
delete a[b]
return!0},
cF:function(){this.r=this.r+1&67108863},
bA:function(a){var z,y
z=new P.cV(H.C(a,H.z(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cF()
return z},
cV:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cF()},
cH:function(a){return J.aS(a)&0x3ffffff},
el:function(a,b){return a[this.cH(b)]},
cM:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.P(a[y].a,b))return y
return-1},
p:{
cW:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cV:{"^":"a;a,0b,0c"},
jF:{"^":"a;a,b,0c,0d,$ti",
gM:function(a){return this.d},
C:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.bc(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.C(z.a,H.z(this,0))
this.c=z.b
return!0}}},
p:{
eJ:function(a,b,c){var z=new P.jF(a,b,[c])
z.c=a.e
return z}}},
jy:{"^":"hY;"},
c7:{"^":"jG;",$ise:1,$isd:1},
t:{"^":"a;$ti",
gV:function(a){return new H.dL(a,this.gl(a),0,[H.bG(this,a,"t",0)])},
D:function(a,b){return this.k(a,b)},
hA:function(a,b){var z,y,x
z=H.c([],[H.bG(this,a,"t",0)])
C.a.sl(z,this.gl(a))
y=0
while(!0){x=this.gl(a)
if(typeof x!=="number")return H.p(x)
if(!(y<x))break
C.a.W(z,y,this.k(a,y));++y}return z},
hz:function(a){return this.hA(a,!0)},
i:function(a){return P.cA(a,"[","]")}},
he:{"^":"a9;"},
hf:{"^":"u:12;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
a9:{"^":"a;$ti",
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.bG(this,a,"a9",0),H.bG(this,a,"a9",1)]})
for(z=J.bI(this.gap(a));z.C();){y=z.gM(z)
b.$2(y,this.k(a,y))}},
gl:function(a){return J.ba(this.gap(a))},
i:function(a){return P.dN(a)},
$isa2:1},
i_:{"^":"a;$ti",
i:function(a){return P.cA(this,"{","}")},
D:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.dc("index"))
if(b<0)H.r(P.ag(b,0,null,"index",null))
for(z=P.eJ(this,this.r,H.z(this,0)),y=0;z.C();){x=z.d
if(b===y)return x;++y}throw H.h(P.M(b,this,"index",null,y))},
$ise:1},
hY:{"^":"i_;"},
jG:{"^":"a+t;"}}],["","",,P,{"^":"",cv:{"^":"a;$ti"},dn:{"^":"ig;$ti"},fL:{"^":"cv;",
$ascv:function(){return[P.n,[P.d,P.A]]}},iR:{"^":"fL;a"},iS:{"^":"dn;",
fP:function(a,b,c){var z,y,x,w
z=a.length
P.dZ(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.ke(0,0,x)
if(w.ej(a,b,z)!==z)w.cW(C.i.c0(a,z-1),0)
return C.I.bv(x,0,w.b)},
fO:function(a){return this.fP(a,0,null)},
$asdn:function(){return[P.n,[P.d,P.A]]}},ke:{"^":"a;a,b,c",
cW:function(a,b){var z,y,x,w,v
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
if(b!==c&&(C.i.c0(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.b2(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.cW(w,C.i.b2(a,u)))x=u}else if(w<=2047){v=this.b
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
fN:function(a){var z=J.J(a)
if(!!z.$isu)return z.i(a)
return"Instance of '"+H.aZ(a)+"'"},
hb:function(a,b,c,d){var z,y
H.C(b,d)
z=J.fZ(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.W(z,y,b)
return H.w(z,"$isd",[d],"$asd")},
hc:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gV(a);x.C();)C.a.h(y,H.C(x.gM(x),c))
if(b)return y
return H.w(J.bi(y),"$isd",z,"$asd")},
cM:function(a,b,c){var z,y
z=P.A
H.w(a,"$ise",[z],"$ase")
if(a.constructor===Array){H.w(a,"$isaV",[z],"$asaV")
y=a.length
c=P.dZ(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a7()
z=c<y}else z=!0
return H.dY(z?C.a.bv(a,b,c):a)}return P.ij(a,b,c)},
ij:function(a,b,c){var z,y,x
H.w(a,"$ise",[P.A],"$ase")
z=J.bI(a)
for(y=0;y<b;++y)if(!z.C())throw H.h(P.ag(b,0,y,null,null))
x=[]
for(;z.C();)x.push(z.gM(z))
return H.dY(x)},
hP:function(a,b,c){return new H.h0(a,H.h1(a,!1,!0,!1))},
kd:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isd",[P.A],"$asd")
if(c===C.q){z=$.$get$eV().b
z=z.test(b)}else z=!1
if(z)return b
y=C.v.fO(H.C(b,H.aA(c,"cv",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.i(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.hK(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
c2:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.al(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fN(a)},
q:function(a){return new P.eG(a)},
d9:function(a){H.l0(a)},
a4:{"^":"a;"},
"+bool":0,
an:{"^":"a;a,b",
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.an))return!1
return this.a===b.a&&this.b===b.b},
gS:function(a){var z=this.a
return(z^C.h.b6(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fD(H.hJ(this))
y=P.bJ(H.hH(this))
x=P.bJ(H.hD(this))
w=P.bJ(H.hE(this))
v=P.bJ(H.hG(this))
u=P.bJ(H.hI(this))
t=P.fE(H.hF(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
p:{
fD:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fE:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bJ:function(a){if(a>=10)return""+a
return"0"+a}}},
v:{"^":"X;"},
"+double":0,
aT:{"^":"a;a",
j:function(a,b){return new P.aT(C.h.a6(this.a*b))},
a7:function(a,b){return C.h.a7(this.a,H.k(b,"$isaT").a)},
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.aT))return!1
return this.a===b.a},
gS:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fI()
y=this.a
if(y<0)return"-"+new P.aT(0-y).i(0)
x=z.$1(C.h.Z(y,6e7)%60)
w=z.$1(C.h.Z(y,1e6)%60)
v=new P.fH().$1(y%1e6)
return""+C.h.Z(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
p:{
dx:function(a,b,c,d,e,f){return new P.aT(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fH:{"^":"u:13;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fI:{"^":"u:13;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
Y:{"^":"a;"},
dS:{"^":"Y;",
i:function(a){return"Throw of null."}},
aB:{"^":"Y;a,b,c,d",
gbD:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbC:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gbD()+y+x
if(!this.a)return w
v=this.gbC()
u=P.c2(this.b)
return w+v+": "+H.j(u)},
p:{
fl:function(a){return new P.aB(!1,null,null,a)},
bY:function(a,b,c){return new P.aB(!0,a,b,c)},
dc:function(a){return new P.aB(!1,null,a,"Must not be null")}}},
ca:{"^":"aB;e,f,a,b,c,d",
gbD:function(){return"RangeError"},
gbC:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
p:{
cb:function(a,b,c){return new P.ca(null,null,!0,a,b,"Value not in range")},
ag:function(a,b,c,d,e){return new P.ca(b,c,!0,a,d,"Invalid value")},
dZ:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.p(a)
if(0<=a){if(typeof c!=="number")return H.p(c)
z=a>c}else z=!0
if(z)throw H.h(P.ag(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.p(c)
z=b>c}else z=!0
if(z)throw H.h(P.ag(b,a,c,"end",f))
return b}return c}}},
fW:{"^":"aB;e,l:f>,a,b,c,d",
gbD:function(){return"RangeError"},
gbC:function(){if(J.fg(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
p:{
M:function(a,b,c,d,e){var z=H.Z(e!=null?e:J.ba(b))
return new P.fW(b,z,!0,a,c,"Index out of range")}}},
iM:{"^":"Y;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
ac:function(a){return new P.iM(a)}}},
iJ:{"^":"Y;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
ey:function(a){return new P.iJ(a)}}},
ic:{"^":"Y;a",
i:function(a){return"Bad state: "+this.a}},
fy:{"^":"Y;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.c2(z))+"."},
p:{
bc:function(a){return new P.fy(a)}}},
hz:{"^":"a;",
i:function(a){return"Out of Memory"},
$isY:1},
e4:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isY:1},
fC:{"^":"Y;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eG:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
fT:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.i.bw(x,0,75)+"..."
return y+"\n"+x}},
A:{"^":"X;"},
"+int":0,
e:{"^":"a;$ti",
gl:function(a){var z,y
z=this.gV(this)
for(y=0;z.C();)++y
return y},
D:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.dc("index"))
if(b<0)H.r(P.ag(b,0,null,"index",null))
for(z=this.gV(this),y=0;z.C();){x=z.gM(z)
if(b===y)return x;++y}throw H.h(P.M(b,this,"index",null,y))},
i:function(a){return P.fX(this,"(",")")}},
cB:{"^":"a;$ti"},
d:{"^":"a;$ti",$ise:1},
"+List":0,
a2:{"^":"a;$ti"},
I:{"^":"a;",
gS:function(a){return P.a.prototype.gS.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
X:{"^":"a;"},
"+num":0,
a:{"^":";",
t:function(a,b){return this===b},
gS:function(a){return H.bp(this)},
i:function(a){return"Instance of '"+H.aZ(this)+"'"},
toString:function(){return this.i(this)}},
ap:{"^":"a;"},
n:{"^":"a;",$isdT:1},
"+String":0,
bS:{"^":"a;av:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
e7:function(a,b,c){var z=J.bI(b)
if(!z.C())return a
if(c.length===0){do a+=H.j(z.gM(z))
while(z.C())}else{a+=H.j(z.gM(z))
for(;z.C();)a=a+c+H.j(z.gM(z))}return a}}}}],["","",,W,{"^":"",
cu:function(a,b){var z=document.createElement("canvas")
return z},
fK:function(a){H.k(a,"$isa6")
return"wheel"},
cf:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eI:function(a,b,c,d){var z,y
z=W.cf(W.cf(W.cf(W.cf(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
f_:function(a,b){var z
H.b(a,{func:1,ret:-1,args:[b]})
z=$.O
if(z===C.j)return a
return z.d_(a,b)},
bh:{"^":"a0;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
lb:{"^":"o;0l:length=","%":"AccessibleNodeList"},
lc:{"^":"bh;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
ld:{"^":"bh;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
fp:{"^":"o;","%":";Blob"},
ct:{"^":"bh;",
bt:function(a,b,c){if(c!=null)return a.getContext(b,P.kC(c,null))
return a.getContext(b)},
dK:function(a,b){return this.bt(a,b,null)},
$isct:1,
"%":"HTMLCanvasElement"},
di:{"^":"o;",$isdi:1,"%":"CanvasRenderingContext2D"},
lj:{"^":"K;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
ll:{"^":"fB;0l:length=","%":"CSSPerspective"},
bd:{"^":"o;",$isbd:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
lm:{"^":"je;0l:length=",
dL:function(a,b){var z=a.getPropertyValue(this.ea(a,b))
return z==null?"":z},
ea:function(a,b){var z,y
z=$.$get$dp()
y=z[b]
if(typeof y==="string")return y
y=this.fc(a,b)
z[b]=y
return y},
fc:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fF()+b
if(z in a)return z
return b},
gbX:function(a){return a.bottom},
gae:function(a){return a.height},
gaG:function(a){return a.left},
gaU:function(a){return a.right},
gaZ:function(a){return a.top},
gaf:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fA:{"^":"a;",
gaG:function(a){return this.dL(a,"left")}},
dq:{"^":"o;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
fB:{"^":"o;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
ln:{"^":"dq;0l:length=","%":"CSSTransformValue"},
lo:{"^":"dq;0l:length=","%":"CSSUnparsedValue"},
lp:{"^":"o;0l:length=","%":"DataTransferItemList"},
lq:{"^":"o;",
i:function(a){return String(a)},
"%":"DOMException"},
lr:{"^":"jg;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[[P.a8,P.X]]},
$ast:function(){return[[P.a8,P.X]]},
$ise:1,
$ase:function(){return[[P.a8,P.X]]},
$isd:1,
$asd:function(){return[[P.a8,P.X]]},
$asx:function(){return[[P.a8,P.X]]},
"%":"ClientRectList|DOMRectList"},
fG:{"^":"o;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gaf(a))+" x "+H.j(this.gae(a))},
t:function(a,b){var z
if(b==null)return!1
z=H.bF(b,"$isa8",[P.X],"$asa8")
if(!z)return!1
z=J.ck(b)
return a.left===z.gaG(b)&&a.top===z.gaZ(b)&&this.gaf(a)===z.gaf(b)&&this.gae(a)===z.gae(b)},
gS:function(a){return W.eI(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gaf(a)&0x1FFFFFFF,this.gae(a)&0x1FFFFFFF)},
gbX:function(a){return a.bottom},
gae:function(a){return a.height},
gaG:function(a){return a.left},
gaU:function(a){return a.right},
gaZ:function(a){return a.top},
gaf:function(a){return a.width},
$isa8:1,
$asa8:function(){return[P.X]},
"%":";DOMRectReadOnly"},
ls:{"^":"ji;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[P.n]},
$ast:function(){return[P.n]},
$ise:1,
$ase:function(){return[P.n]},
$isd:1,
$asd:function(){return[P.n]},
$asx:function(){return[P.n]},
"%":"DOMStringList"},
lt:{"^":"o;0l:length=","%":"DOMTokenList"},
jd:{"^":"c7;a,b",
gl:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return H.k(z[b],"$isa0")},
h:function(a,b){this.a.appendChild(b)
return b},
gV:function(a){var z=this.hz(this)
return new J.am(z,z.length,0,[H.z(z,0)])},
$ast:function(){return[W.a0]},
$ase:function(){return[W.a0]},
$asd:function(){return[W.a0]}},
a0:{"^":"K;",
gd1:function(a){return new W.jd(a,a.children)},
gd2:function(a){return P.hM(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.X)},
i:function(a){return a.localName},
$isa0:1,
"%":";Element"},
a5:{"^":"o;",$isa5:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a6:{"^":"o;",
cX:["dP",function(a,b,c,d){H.b(c,{func:1,args:[W.a5]})
if(c!=null)this.e7(a,b,c,!1)}],
e7:function(a,b,c,d){return a.addEventListener(b,H.b6(H.b(c,{func:1,args:[W.a5]}),1),!1)},
$isa6:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|ScriptProcessorNode|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eO|eP|eR|eS"},
be:{"^":"fp;",$isbe:1,"%":"File"},
lu:{"^":"jn;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.be]},
$ast:function(){return[W.be]},
$ise:1,
$ase:function(){return[W.be]},
$isd:1,
$asd:function(){return[W.be]},
$asx:function(){return[W.be]},
"%":"FileList"},
lv:{"^":"a6;0l:length=","%":"FileWriter"},
lw:{"^":"bh;0l:length=","%":"HTMLFormElement"},
bg:{"^":"o;",$isbg:1,"%":"Gamepad"},
lx:{"^":"o;0l:length=","%":"History"},
ly:{"^":"jA;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.K]},
$ast:function(){return[W.K]},
$ise:1,
$ase:function(){return[W.K]},
$isd:1,
$asd:function(){return[W.K]},
$asx:function(){return[W.K]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
c4:{"^":"o;0d5:data=",$isc4:1,"%":"ImageData"},
dB:{"^":"bh;",$isdB:1,"%":"HTMLImageElement"},
bj:{"^":"cQ;",$isbj:1,"%":"KeyboardEvent"},
lC:{"^":"o;",
i:function(a){return String(a)},
"%":"Location"},
lD:{"^":"o;0l:length=","%":"MediaList"},
lE:{"^":"a6;",
cX:function(a,b,c,d){H.b(c,{func:1,args:[W.a5]})
if(b==="message")a.start()
this.dP(a,b,c,!1)},
"%":"MessagePort"},
lF:{"^":"jH;",
k:function(a,b){return P.aL(a.get(H.S(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aL(y.value[1]))}},
gap:function(a){var z=H.c([],[P.n])
this.J(a,new W.hq(z))
return z},
gl:function(a){return a.size},
$asa9:function(){return[P.n,null]},
$isa2:1,
$asa2:function(){return[P.n,null]},
"%":"MIDIInputMap"},
hq:{"^":"u:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lG:{"^":"jI;",
k:function(a,b){return P.aL(a.get(H.S(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aL(y.value[1]))}},
gap:function(a){var z=H.c([],[P.n])
this.J(a,new W.hr(z))
return z},
gl:function(a){return a.size},
$asa9:function(){return[P.n,null]},
$isa2:1,
$asa2:function(){return[P.n,null]},
"%":"MIDIOutputMap"},
hr:{"^":"u:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bk:{"^":"o;",$isbk:1,"%":"MimeType"},
lH:{"^":"jK;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bk]},
$ast:function(){return[W.bk]},
$ise:1,
$ase:function(){return[W.bk]},
$isd:1,
$asd:function(){return[W.bk]},
$asx:function(){return[W.bk]},
"%":"MimeTypeArray"},
ao:{"^":"cQ;",$isao:1,"%":"PointerEvent;DragEvent|MouseEvent"},
jc:{"^":"c7;a",
gV:function(a){var z=this.a.childNodes
return new W.dz(z,z.length,-1,[H.bG(C.J,z,"x",0)])},
gl:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
$ast:function(){return[W.K]},
$ase:function(){return[W.K]},
$asd:function(){return[W.K]}},
K:{"^":"a6;",
i:function(a){var z=a.nodeValue
return z==null?this.dQ(a):z},
$isK:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hw:{"^":"jM;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.K]},
$ast:function(){return[W.K]},
$ise:1,
$ase:function(){return[W.K]},
$isd:1,
$asd:function(){return[W.K]},
$asx:function(){return[W.K]},
"%":"NodeList|RadioNodeList"},
bn:{"^":"o;0l:length=",$isbn:1,"%":"Plugin"},
lQ:{"^":"jQ;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bn]},
$ast:function(){return[W.bn]},
$ise:1,
$ase:function(){return[W.bn]},
$isd:1,
$asd:function(){return[W.bn]},
$asx:function(){return[W.bn]},
"%":"PluginArray"},
lS:{"^":"jW;",
k:function(a,b){return P.aL(a.get(H.S(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aL(y.value[1]))}},
gap:function(a){var z=H.c([],[P.n])
this.J(a,new W.hV(z))
return z},
gl:function(a){return a.size},
$asa9:function(){return[P.n,null]},
$isa2:1,
$asa2:function(){return[P.n,null]},
"%":"RTCStatsReport"},
hV:{"^":"u:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},
lT:{"^":"bh;0l:length=","%":"HTMLSelectElement"},
bq:{"^":"a6;",$isbq:1,"%":"SourceBuffer"},
lU:{"^":"eP;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bq]},
$ast:function(){return[W.bq]},
$ise:1,
$ase:function(){return[W.bq]},
$isd:1,
$asd:function(){return[W.bq]},
$asx:function(){return[W.bq]},
"%":"SourceBufferList"},
br:{"^":"o;",$isbr:1,"%":"SpeechGrammar"},
lV:{"^":"jY;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.br]},
$ast:function(){return[W.br]},
$ise:1,
$ase:function(){return[W.br]},
$isd:1,
$asd:function(){return[W.br]},
$asx:function(){return[W.br]},
"%":"SpeechGrammarList"},
bs:{"^":"o;0l:length=",$isbs:1,"%":"SpeechRecognitionResult"},
lX:{"^":"k0;",
k:function(a,b){return a.getItem(H.S(b))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,P.n]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gap:function(a){var z=H.c([],[P.n])
this.J(a,new W.ie(z))
return z},
gl:function(a){return a.length},
$asa9:function(){return[P.n,P.n]},
$isa2:1,
$asa2:function(){return[P.n,P.n]},
"%":"Storage"},
ie:{"^":"u:39;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bt:{"^":"o;",$isbt:1,"%":"CSSStyleSheet|StyleSheet"},
bu:{"^":"a6;",$isbu:1,"%":"TextTrack"},
bv:{"^":"a6;",$isbv:1,"%":"TextTrackCue|VTTCue"},
m0:{"^":"k4;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bv]},
$ast:function(){return[W.bv]},
$ise:1,
$ase:function(){return[W.bv]},
$isd:1,
$asd:function(){return[W.bv]},
$asx:function(){return[W.bv]},
"%":"TextTrackCueList"},
m1:{"^":"eS;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bu]},
$ast:function(){return[W.bu]},
$ise:1,
$ase:function(){return[W.bu]},
$isd:1,
$asd:function(){return[W.bu]},
$asx:function(){return[W.bu]},
"%":"TextTrackList"},
m2:{"^":"o;0l:length=","%":"TimeRanges"},
bw:{"^":"o;",$isbw:1,"%":"Touch"},
b0:{"^":"cQ;",$isb0:1,"%":"TouchEvent"},
m3:{"^":"ka;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bw]},
$ast:function(){return[W.bw]},
$ise:1,
$ase:function(){return[W.bw]},
$isd:1,
$asd:function(){return[W.bw]},
$asx:function(){return[W.bw]},
"%":"TouchList"},
m4:{"^":"o;0l:length=","%":"TrackDefaultList"},
cQ:{"^":"a5;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
m7:{"^":"o;",
i:function(a){return String(a)},
"%":"URL"},
m8:{"^":"a6;0l:length=","%":"VideoTrackList"},
bz:{"^":"ao;",
gfS:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.ac("deltaY is not supported"))},
gfR:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.ac("deltaX is not supported"))},
$isbz:1,
"%":"WheelEvent"},
j5:{"^":"a6;",
f_:function(a,b){return a.requestAnimationFrame(H.b6(H.b(b,{func:1,ret:-1,args:[P.X]}),1))},
ei:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
md:{"^":"kh;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bd]},
$ast:function(){return[W.bd]},
$ise:1,
$ase:function(){return[W.bd]},
$isd:1,
$asd:function(){return[W.bd]},
$asx:function(){return[W.bd]},
"%":"CSSRuleList"},
me:{"^":"fG;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
t:function(a,b){var z
if(b==null)return!1
z=H.bF(b,"$isa8",[P.X],"$asa8")
if(!z)return!1
z=J.ck(b)
return a.left===z.gaG(b)&&a.top===z.gaZ(b)&&a.width===z.gaf(b)&&a.height===z.gae(b)},
gS:function(a){return W.eI(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gae:function(a){return a.height},
gaf:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mg:{"^":"kj;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bg]},
$ast:function(){return[W.bg]},
$ise:1,
$ase:function(){return[W.bg]},
$isd:1,
$asd:function(){return[W.bg]},
$asx:function(){return[W.bg]},
"%":"GamepadList"},
mh:{"^":"kl;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.K]},
$ast:function(){return[W.K]},
$ise:1,
$ase:function(){return[W.K]},
$isd:1,
$asd:function(){return[W.K]},
$asx:function(){return[W.K]},
"%":"MozNamedAttrMap|NamedNodeMap"},
mi:{"^":"kn;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bs]},
$ast:function(){return[W.bs]},
$ise:1,
$ase:function(){return[W.bs]},
$isd:1,
$asd:function(){return[W.bs]},
$asx:function(){return[W.bs]},
"%":"SpeechRecognitionResultList"},
mj:{"^":"kp;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bt]},
$ast:function(){return[W.bt]},
$ise:1,
$ase:function(){return[W.bt]},
$isd:1,
$asd:function(){return[W.bt]},
$asx:function(){return[W.bt]},
"%":"StyleSheetList"},
jj:{"^":"cL;a,b,c,$ti",
h4:function(a,b,c,d){var z=H.z(this,0)
H.b(a,{func:1,ret:-1,args:[z]})
H.b(c,{func:1,ret:-1})
return W.W(this.a,this.b,a,!1,z)}},
mf:{"^":"jj;a,b,c,$ti"},
jk:{"^":"e6;a,b,c,d,e,$ti",
fg:function(){var z=this.d
if(z!=null&&this.a<=0)J.fi(this.b,this.c,z,!1)},
p:{
W:function(a,b,c,d,e){var z=c==null?null:W.f_(new W.jl(c),W.a5)
z=new W.jk(0,a,b,z,!1,[e])
z.fg()
return z}}},
jl:{"^":"u:7;a",
$1:function(a){return this.a.$1(H.k(a,"$isa5"))}},
x:{"^":"a;$ti",
gV:function(a){return new W.dz(a,this.gl(a),-1,[H.bG(this,a,"x",0)])}},
dz:{"^":"a;a,b,c,0d,$ti",
C:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fh(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gM:function(a){return this.d}},
je:{"^":"o+fA;"},
jf:{"^":"o+t;"},
jg:{"^":"jf+x;"},
jh:{"^":"o+t;"},
ji:{"^":"jh+x;"},
jm:{"^":"o+t;"},
jn:{"^":"jm+x;"},
jz:{"^":"o+t;"},
jA:{"^":"jz+x;"},
jH:{"^":"o+a9;"},
jI:{"^":"o+a9;"},
jJ:{"^":"o+t;"},
jK:{"^":"jJ+x;"},
jL:{"^":"o+t;"},
jM:{"^":"jL+x;"},
jP:{"^":"o+t;"},
jQ:{"^":"jP+x;"},
jW:{"^":"o+a9;"},
eO:{"^":"a6+t;"},
eP:{"^":"eO+x;"},
jX:{"^":"o+t;"},
jY:{"^":"jX+x;"},
k0:{"^":"o+a9;"},
k3:{"^":"o+t;"},
k4:{"^":"k3+x;"},
eR:{"^":"a6+t;"},
eS:{"^":"eR+x;"},
k9:{"^":"o+t;"},
ka:{"^":"k9+x;"},
kg:{"^":"o+t;"},
kh:{"^":"kg+x;"},
ki:{"^":"o+t;"},
kj:{"^":"ki+x;"},
kk:{"^":"o+t;"},
kl:{"^":"kk+x;"},
km:{"^":"o+t;"},
kn:{"^":"km+x;"},
ko:{"^":"o+t;"},
kp:{"^":"ko+x;"}}],["","",,P,{"^":"",
kF:function(a){var z,y
z=J.J(a)
if(!!z.$isc4){y=z.gd5(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.eU(a.data,a.height,a.width)},
kE:function(a){if(a instanceof P.eU)return{data:a.a,height:a.b,width:a.c}
return a},
aL:function(a){var z,y,x,w,v
if(a==null)return
z=P.h8(P.n,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w){v=H.S(y[w])
z.W(0,v,a[v])}return z},
kC:function(a,b){var z={}
a.J(0,new P.kD(z))
return z},
dw:function(){var z=$.dv
if(z==null){z=J.co(window.navigator.userAgent,"Opera",0)
$.dv=z}return z},
fF:function(){var z,y
z=$.ds
if(z!=null)return z
y=$.dt
if(y==null){y=J.co(window.navigator.userAgent,"Firefox",0)
$.dt=y}if(y)z="-moz-"
else{y=$.du
if(y==null){y=!P.dw()&&J.co(window.navigator.userAgent,"Trident/",0)
$.du=y}if(y)z="-ms-"
else z=P.dw()?"-o-":"-webkit-"}$.ds=z
return z},
eU:{"^":"a;d5:a>,b,c",$isc4:1},
kD:{"^":"u:12;a",
$2:function(a,b){this.a[a]=b}},
fQ:{"^":"c7;a,b",
gbG:function(){var z,y,x
z=this.b
y=H.aA(z,"t",0)
x=W.a0
return new H.hg(new H.j3(z,H.b(new P.fR(),{func:1,ret:P.a4,args:[y]}),[y]),H.b(new P.fS(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.ba(this.gbG().a)},
k:function(a,b){var z=this.gbG()
return z.b.$1(J.db(z.a,b))},
gV:function(a){var z=P.hc(this.gbG(),!1,W.a0)
return new J.am(z,z.length,0,[H.z(z,0)])},
$ast:function(){return[W.a0]},
$ase:function(){return[W.a0]},
$asd:function(){return[W.a0]}},
fR:{"^":"u:24;",
$1:function(a){return!!J.J(H.k(a,"$isK")).$isa0}},
fS:{"^":"u:25;",
$1:function(a){return H.f(H.k(a,"$isK"),"$isa0")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cg:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jB:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jR:{"^":"a;$ti",
gaU:function(a){var z=this.a
if(typeof z!=="number")return z.F()
return H.C(z+this.c,H.z(this,0))},
gbX:function(a){var z=this.b
if(typeof z!=="number")return z.F()
return H.C(z+this.d,H.z(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.bF(b,"$isa8",[P.X],"$asa8")
if(!z)return!1
z=this.a
y=J.ck(b)
x=y.gaG(b)
if(z==null?x==null:z===x){x=this.b
w=y.gaZ(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.F()
w=H.z(this,0)
if(H.C(z+this.c,w)===y.gaU(b)){if(typeof x!=="number")return x.F()
z=H.C(x+this.d,w)===y.gbX(b)}else z=!1}else z=!1}else z=!1
return z},
gS:function(a){var z,y,x,w,v
z=this.a
y=J.aS(z)
x=this.b
w=J.aS(x)
if(typeof z!=="number")return z.F()
v=H.z(this,0)
z=H.C(z+this.c,v)
if(typeof x!=="number")return x.F()
v=H.C(x+this.d,v)
return P.jB(P.cg(P.cg(P.cg(P.cg(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
a8:{"^":"jR;aG:a>,aZ:b>,af:c>,ae:d>,$ti",p:{
hM:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.a7()
if(c<0)z=-c*0
else z=c
H.C(z,e)
if(typeof d!=="number")return d.a7()
if(d<0)y=-d*0
else y=d
return new P.a8(a,b,z,H.C(y,e),[e])}}}}],["","",,P,{"^":"",bP:{"^":"o;",$isbP:1,"%":"SVGLength"},lB:{"^":"jD;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.k(a,b)},
$ast:function(){return[P.bP]},
$ise:1,
$ase:function(){return[P.bP]},
$isd:1,
$asd:function(){return[P.bP]},
$asx:function(){return[P.bP]},
"%":"SVGLengthList"},bR:{"^":"o;",$isbR:1,"%":"SVGNumber"},lO:{"^":"jO;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.k(a,b)},
$ast:function(){return[P.bR]},
$ise:1,
$ase:function(){return[P.bR]},
$isd:1,
$asd:function(){return[P.bR]},
$asx:function(){return[P.bR]},
"%":"SVGNumberList"},lR:{"^":"o;0l:length=","%":"SVGPointList"},lY:{"^":"k2;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.k(a,b)},
$ast:function(){return[P.n]},
$ise:1,
$ase:function(){return[P.n]},
$isd:1,
$asd:function(){return[P.n]},
$asx:function(){return[P.n]},
"%":"SVGStringList"},lZ:{"^":"a0;",
gd1:function(a){return new P.fQ(a,new W.jc(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"},bU:{"^":"o;",$isbU:1,"%":"SVGTransform"},m5:{"^":"kc;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.k(a,b)},
$ast:function(){return[P.bU]},
$ise:1,
$ase:function(){return[P.bU]},
$isd:1,
$asd:function(){return[P.bU]},
$asx:function(){return[P.bU]},
"%":"SVGTransformList"},jC:{"^":"o+t;"},jD:{"^":"jC+x;"},jN:{"^":"o+t;"},jO:{"^":"jN+x;"},k1:{"^":"o+t;"},k2:{"^":"k1+x;"},kb:{"^":"o+t;"},kc:{"^":"kb+x;"}}],["","",,P,{"^":"",le:{"^":"o;0l:length=","%":"AudioBuffer"},lf:{"^":"jb;",
k:function(a,b){return P.aL(a.get(H.S(b)))},
J:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.n,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aL(y.value[1]))}},
gap:function(a){var z=H.c([],[P.n])
this.J(a,new P.fn(z))
return z},
gl:function(a){return a.size},
$asa9:function(){return[P.n,null]},
$isa2:1,
$asa2:function(){return[P.n,null]},
"%":"AudioParamMap"},fn:{"^":"u:6;a",
$2:function(a,b){return C.a.h(this.a,a)}},lg:{"^":"a6;0l:length=","%":"AudioTrackList"},fo:{"^":"a6;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},lP:{"^":"fo;0l:length=","%":"OfflineAudioContext"},jb:{"^":"o+a9;"}}],["","",,P,{"^":"",cJ:{"^":"o;",
hw:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.J(g)
if(!!z.$isc4)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.kE(g))
return}if(!!z.$isdB)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.h(P.fl("Incorrect number or type of arguments"))},
hv:function(a,b,c,d,e,f,g){return this.hw(a,b,c,d,e,f,g,null,null,null)},
$iscJ:1,
"%":"WebGLRenderingContext"},ik:{"^":"o;",$isik:1,"%":"WebGLTexture"},iH:{"^":"o;",$isiH:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",lW:{"^":"k_;",
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return P.aL(a.item(b))},
D:function(a,b){return this.k(a,b)},
$ast:function(){return[[P.a2,,,]]},
$ise:1,
$ase:function(){return[[P.a2,,,]]},
$isd:1,
$asd:function(){return[[P.a2,,,]]},
$asx:function(){return[[P.a2,,,]]},
"%":"SQLResultSetRowList"},jZ:{"^":"o+t;"},k_:{"^":"jZ+x;"}}],["","",,O,{"^":"",ae:{"^":"a;0a,0b,0c,0d,$ti",
b1:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
cs:function(a,b,c){var z=H.aA(this,"ae",0)
H.b(b,{func:1,ret:P.a4,args:[[P.e,z]]})
z={func:1,ret:-1,args:[P.A,[P.e,z]]}
H.b(a,z)
H.b(c,z)
this.b=b
this.c=a
this.d=c},
aK:function(a,b){return this.cs(a,null,b)},
cO:function(a){var z
H.w(a,"$ise",[H.aA(this,"ae",0)],"$ase")
z=this.b
if(z!=null)return z.$1(a)
return!0},
cz:function(a,b){var z
H.w(b,"$ise",[H.aA(this,"ae",0)],"$ase")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gV:function(a){var z=this.a
return new J.am(z,z.length,0,[H.z(z,0)])},
D:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aA(this,"ae",0)
H.C(b,z)
z=[z]
if(this.cO(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.cz(x,H.c([b],z))}},
bS:function(a,b){var z,y
H.w(b,"$ise",[H.aA(this,"ae",0)],"$ase")
if(this.cO(b)){z=this.a
y=z.length
C.a.bS(z,b)
this.cz(y,b)}},
$ise:1,
p:{
cw:function(a){var z=new O.ae([a])
z.b1(a)
return z}}},cG:{"^":"a;0a,0b",
gl:function(a){return this.a.length},
gn:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
dZ:function(a){var z=this.b
if(!(z==null))z.u(a)},
at:function(){return this.dZ(null)},
gR:function(a){var z=this.a
if(z.length>0)return C.a.gcc(z)
else return V.aY()},
bq:function(a){var z=this.a
if(a==null)C.a.h(z,V.aY())
else C.a.h(z,a)
this.at()},
ar:function(){var z=this.a
if(z.length>0){z.pop()
this.at()}}}}],["","",,E,{"^":"",cp:{"^":"a;"},aD:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0Y:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sbu:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gn()
y.toString
x=H.b(this.gdD(),{func:1,ret:-1,args:[D.l]})
C.a.N(y.a,x)}y=this.c
if(y!=null){y=y.gn()
y.toString
x=H.b(this.gdD(),{func:1,ret:-1,args:[D.l]})
C.a.h(y.a,x)}w=new D.G("shape",z,this.c,this,[F.e1])
w.b=!0
this.aH(w)}},
ab:function(a,b){var z
for(z=this.y.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.C();)z.d.ab(0,b)},
a2:function(a){var z,y
z=a.dx
C.a.h(z.a,z.gR(z))
z.at()
a.cj(this.f)
z=a.dy
y=(z&&C.a).gcc(z)
if(y!=null&&this.d!=null)y.dE(a,this)
for(z=this.y.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.C();)z.d.a2(a)
a.ci()
a.dx.ar()},
gn:function(){var z=this.z
if(z==null){z=D.D()
this.z=z}return z},
aH:function(a){var z=this.z
if(!(z==null))z.u(a)},
a1:function(){return this.aH(null)},
hc:[function(a){H.k(a,"$isl")
this.e=null
this.aH(a)},function(){return this.hc(null)},"im","$1","$0","gdD",0,2,0],
ha:[function(a){this.aH(H.k(a,"$isl"))},function(){return this.ha(null)},"ik","$1","$0","gdC",0,2,0],
ij:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$ise",[E.aD],"$ase")
for(z=b.length,y=this.gdC(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.y)(b),++v){u=b[v]
if(u!=null){if(u.gY()==null){t=new D.aU()
t.a=H.c([],w)
t.c=0
u.sY(t)}t=u.gY()
t.toString
H.b(y,x)
C.a.h(t.a,y)}}this.a1()},"$2","gh9",8,0,8],
il:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$ise",[E.aD],"$ase")
for(z=b.length,y=this.gdC(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.y)(b),++v){u=b[v]
if(u!=null){if(u.gY()==null){t=new D.aU()
t.a=H.c([],w)
t.c=0
u.sY(t)}t=u.gY()
t.toString
H.b(y,x)
C.a.N(t.a,y)}}this.a1()},"$2","ghb",8,0,8],
$isav:1,
p:{
dy:function(a,b,c,d,e,f){var z,y
z=new E.aD()
z.a=d
z.b=!0
y=O.cw(E.aD)
z.y=y
y.aK(z.gh9(),z.ghb())
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
z.sbu(0,e)
return z}}},hQ:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
dW:function(a,b){var z,y,x,w,v
this.c=512
this.d=512
this.e=0
z=new P.an(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cG()
y=[V.as]
z.a=H.c([],y)
x=z.gn()
x.toString
w={func:1,ret:-1,args:[D.l]}
v=H.b(new E.hS(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cG()
z.a=H.c([],y)
v=z.gn()
v.toString
x=H.b(new E.hT(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cG()
z.a=H.c([],y)
y=z.gn()
y.toString
w=H.b(new E.hU(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.c([],[O.bT])
this.dy=z
C.a.h(z,null)
this.fr=new H.aW(0,0,[P.n,A.cK])},
ghl:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gR(z)
y=this.db
y=z.j(0,y.gR(y))
this.z=y
z=y}return z},
cj:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gcc(z):a;(z&&C.a).h(z,y)},
ci:function(){var z=this.dy
if(z.length>1)z.pop()},
cZ:function(a){var z=a.b
if(z.length===0)throw H.h(P.q("May not cache a shader with no name."))
if(this.fr.d3(0,z))throw H.h(P.q('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.W(0,z,a)},
p:{
hR:function(a,b){var z=new E.hQ(a,b)
z.dW(a,b)
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
gn:function(){var z=this.x
if(z==null){z=D.D()
this.x=z}return z},
e0:[function(a){var z
H.k(a,"$isl")
z=this.x
if(!(z==null))z.u(a)
this.hq()},function(){return this.e0(null)},"e_","$1","$0","gcA",0,2,0],
gfX:function(){var z,y,x
z=Date.now()
y=C.h.Z(P.dx(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.an(z,!1)
return x/y},
cR:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.j()
if(typeof z!=="number")return H.p(z)
x=C.c.c9(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.j()
w=C.c.c9(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.eb(C.l,this.ghp())},
hq:[function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.b(new E.it(this),{func:1,ret:-1,args:[P.X]})
C.t.ei(z)
C.t.f_(z,W.f_(y,P.X))}},"$0","ghp",0,0,3],
ho:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cR()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.an(w,!1)
x.y=P.dx(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.at()
w=x.db
C.a.sl(w.a,0)
w.at()
w=x.dx
C.a.sl(w.a,0)
w.at()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a2(this.e)}}catch(v){z=H.aR(v)
y=H.b8(v)
P.d9("Error: "+H.j(z))
P.d9("Stack: "+H.j(y))
throw H.h(z)}},
p:{
is:function(a,b,c,d,e){var z,y,x,w
z=J.J(a)
if(!!z.$isct)return E.ea(a,!0,!0,!0,!1)
y=W.cu(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gd1(a).h(0,y)
w=E.ea(y,!0,!0,!0,!1)
w.a=a
return w},
ea:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.ir()
y=P.h9(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.n,null)
x=C.k.bt(a,"webgl",y)
x=H.k(x==null?C.k.bt(a,"experimental-webgl",y):x,"$iscJ")
if(x==null)H.r(P.q("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hR(x,a)
w=new T.il(x)
w.b=H.Z(x.getParameter(3379))
w.c=H.Z(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.iN(a)
v=new X.h3()
v.c=new X.au(!1,!1,!1)
v.d=P.ha(null,null,null,P.A)
w.b=v
v=new X.hs(w)
v.f=0
v.r=new V.N(0,0)
v.x=new V.N(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.hd(w)
v.r=0
v.x=new V.N(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.iw(w)
v.e=0
v.f=new V.N(0,0)
v.r=new V.N(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.e6,P.a]])
w.z=v
u=document
t=W.ao
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.W(u,"contextmenu",H.b(w.geB(),s),!1,t))
v=w.z
r=W.a5
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.W(a,"focus",H.b(w.geE(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.W(a,"blur",H.b(w.gey(),q),!1,r))
v=w.z
p=W.bj
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.W(u,"keyup",H.b(w.geG(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.W(u,"keydown",H.b(w.geF(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.W(a,"mousedown",H.b(w.geJ(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.W(a,"mouseup",H.b(w.geL(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.W(a,"mousemove",H.b(w.geK(),s),!1,t))
p=w.z
o=W.bz;(p&&C.a).h(p,W.W(a,H.S(W.fK(a)),H.b(w.geM(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.W(u,"mousemove",H.b(w.geC(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.W(u,"mouseup",H.b(w.geD(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.W(u,"pointerlockchange",H.b(w.geN(),q),!1,r))
r=w.z
q=W.b0
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.W(a,"touchstart",H.b(w.geV(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.W(a,"touchend",H.b(w.geT(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.W(a,"touchmove",H.b(w.geU(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.an(Date.now(),!1)
z.ch=0
z.cR()
return z}}},it:{"^":"u:28;a",
$1:function(a){var z
H.l_(a)
z=this.a
if(z.z){z.z=!1
z.ho()}}}}],["","",,Z,{"^":"",eD:{"^":"a;a,b",p:{
cT:function(a,b,c){var z
H.w(c,"$isd",[P.A],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bB(c)),35044)
a.bindBuffer(b,null)
return new Z.eD(b,z)}}},dg:{"^":"cp;a,b,c,d,e",
U:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aR(y)
x=P.q('Failed to bind buffer attribute "'+J.al(this.a)+'": '+H.j(z))
throw H.h(x)}},
i:function(a){return"["+J.al(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},eE:{"^":"a;a",$islh:1},cs:{"^":"a;a,0b,c,d",
ao:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
U:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].U(a)},
aI:function(a){var z,y,x
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
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.al(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.B(y,", ")+"\nAttrs:   "+C.a.B(u,", ")},
$ism_:1},c5:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aZ(this.c)+"'")+"]"}},b1:{"^":"a;a",
gct:function(a){var z,y
z=this.a
y=(z&$.$get$aq().a)!==0?3:0
if((z&$.$get$aG().a)!==0)y+=3
if((z&$.$get$aF().a)!==0)y+=3
if((z&$.$get$aH().a)!==0)y+=2
if((z&$.$get$aI().a)!==0)y+=3
if((z&$.$get$bx().a)!==0)y+=3
if((z&$.$get$by().a)!==0)y+=4
if((z&$.$get$b2().a)!==0)++y
return(z&$.$get$aE().a)!==0?y+4:y},
fJ:function(a){var z,y,x
z=$.$get$aq()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aG()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aF()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aH()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aI()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bx()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$by()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b2()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aE()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eC()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b1))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.n])
y=this.a
if((y&$.$get$aq().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aG().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aF().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aH().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aI().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bx().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$by().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b2().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aE().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.B(z,"|")},
p:{
aj:function(a){return new Z.b1(a)}}}}],["","",,D,{"^":"",dj:{"^":"a;"},aU:{"^":"a;0a,0b,0c",
u:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.l(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.J(y,new D.fO(z))
return x!==0},
fT:function(){return this.u(null)},
hr:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.u(y)}}},
as:function(a){return this.hr(a,!0,!1)},
p:{
D:function(){var z=new D.aU()
z.a=H.c([],[{func:1,ret:-1,args:[D.l]}])
z.c=0
return z}}},fO:{"^":"u:29;a",
$1:function(a){var z
H.b(a,{func:1,ret:-1,args:[D.l]})
z=this.a.a
z.b
a.$1(z)}},l:{"^":"a;a,0b"},bL:{"^":"l;c,d,a,0b,$ti"},bM:{"^":"l;c,d,a,0b,$ti"},G:{"^":"l;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",dh:{"^":"a;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dh))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)},
p:{"^":"li<"}},dG:{"^":"a;a,b",
t:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dG))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},dH:{"^":"l;c,a,0b"},h3:{"^":"a;0a,0b,0c,0d",
hi:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dH(a,this)
y.b=!0
return z.u(y)},
he:function(a){var z,y
this.c=a.b
this.d.N(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dH(a,this)
y.b=!0
return z.u(y)}},dM:{"^":"c9;x,y,c,d,e,a,0b"},hd:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aj:function(a,b){var z,y,x,w,v,u,t,s
z=new P.an(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.j()
v=b.b
u=this.ch
if(typeof v!=="number")return v.j()
t=new V.N(y.a+x*w,y.b+v*u)
u=this.a.gaA()
s=new X.bl(a,new V.N(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cg:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.u(this.aj(a,b))
return!0},
aS:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dN()
if(typeof z!=="number")return z.dI()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.u(this.aj(a,b))
return!0},
aR:function(a,b){var z=this.d
if(z==null)return!1
z.u(this.aj(a,b))
return!0},
hj:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaA()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.j()
t=a.b
s=this.cy
if(typeof t!=="number")return t.j()
w=new X.cH(new V.Q(v*u,t*s),y,x,new P.an(w,!1),this)
w.b=!0
z.u(w)
return!0},
eI:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.an(Date.now(),!1)
y=this.f
x=new X.dM(c,a,this.a.gaA(),b,z,this)
x.b=!0
y.u(x)
this.y=z
this.x=new V.N(0,0)}},au:{"^":"a;a,b,c",
t:function(a,b){var z,y
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
return z+(this.c?"Shift+":"")}},bl:{"^":"c9;x,y,z,Q,ch,c,d,e,a,0b"},hs:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bE:function(a,b,c){var z,y,x
z=new P.an(Date.now(),!1)
y=this.a.gaA()
x=new X.bl(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cg:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.u(this.bE(a,b,!0))
return!0},
aS:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dN()
if(typeof z!=="number")return z.dI()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.u(this.bE(a,b,!0))
return!0},
aR:function(a,b){var z=this.d
if(z==null)return!1
z.u(this.bE(a,b,!1))
return!0},
hk:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaA()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.j()
u=a.b
t=this.ch
if(typeof u!=="number")return u.j()
x=new X.cH(new V.Q(w*v,u*t),y,b,new P.an(x,!1),this)
x.b=!0
z.u(x)
return!0},
gd8:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
gbs:function(){var z=this.c
if(z==null){z=D.D()
this.c=z}return z},
gdB:function(){var z=this.d
if(z==null){z=D.D()
this.d=z}return z}},cH:{"^":"c9;x,c,d,e,a,0b"},c9:{"^":"l;"},ef:{"^":"c9;x,y,z,Q,ch,c,d,e,a,0b"},iw:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
aj:function(a,b){var z,y,x,w
H.w(a,"$isd",[V.N],"$asd")
z=new P.an(Date.now(),!1)
y=a.length>0?a[0]:new V.N(0,0)
x=this.a.gaA()
w=new X.ef(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hh:function(a){var z
H.w(a,"$isd",[V.N],"$asd")
z=this.b
if(z==null)return!1
z.u(this.aj(a,!0))
return!0},
hf:function(a){var z
H.w(a,"$isd",[V.N],"$asd")
z=this.c
if(z==null)return!1
z.u(this.aj(a,!0))
return!0},
hg:function(a){var z
H.w(a,"$isd",[V.N],"$asd")
z=this.d
if(z==null)return!1
z.u(this.aj(a,!1))
return!0}},iN:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaA:function(){var z=this.a
return V.e0(0,0,(z&&C.k).gd2(z).c,C.k.gd2(z).d)},
cK:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dG(z,new X.au(y,a.altKey,a.shiftKey))},
az:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.au(y,a.altKey,a.shiftKey)},
bR:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.au(y,a.altKey,a.shiftKey)},
ak:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.E()
v=z.top
if(typeof x!=="number")return x.E()
return new V.N(y-w,x-v)},
aL:function(a){return new V.Q(a.movementX,a.movementY)},
bN:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.N])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v){u=x[v]
t=C.c.a6(u.pageX)
C.c.a6(u.pageY)
s=z.left
C.c.a6(u.pageX)
C.a.h(y,new V.N(t-s,C.c.a6(u.pageY)-z.top))}return y},
ah:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dh(z,new X.au(y,a.altKey,a.shiftKey))},
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
hU:[function(a){this.f=!0},"$1","geE",4,0,7],
hO:[function(a){this.f=!1},"$1","gey",4,0,7],
hR:[function(a){H.k(a,"$isao")
if(this.f&&this.bH(a))a.preventDefault()},"$1","geB",4,0,4],
hW:[function(a){var z
H.k(a,"$isbj")
if(!this.f)return
z=this.cK(a)
if(this.b.hi(z))a.preventDefault()},"$1","geG",4,0,16],
hV:[function(a){var z
H.k(a,"$isbj")
if(!this.f)return
z=this.cK(a)
if(this.b.he(z))a.preventDefault()},"$1","geF",4,0,16],
hY:[function(a){var z,y,x,w
H.k(a,"$isao")
z=this.a
z.focus()
this.f=!0
this.az(a)
if(this.x){y=this.ah(a)
x=this.aL(a)
if(this.d.cg(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ah(a)
w=this.ak(a)
if(this.c.cg(y,w))a.preventDefault()},"$1","geJ",4,0,4],
i_:[function(a){var z,y,x
H.k(a,"$isao")
this.az(a)
z=this.ah(a)
if(this.x){y=this.aL(a)
if(this.d.aS(z,y))a.preventDefault()
return}if(this.r)return
x=this.ak(a)
if(this.c.aS(z,x))a.preventDefault()},"$1","geL",4,0,4],
hT:[function(a){var z,y,x
H.k(a,"$isao")
if(!this.bH(a)){this.az(a)
z=this.ah(a)
if(this.x){y=this.aL(a)
if(this.d.aS(z,y))a.preventDefault()
return}if(this.r)return
x=this.ak(a)
if(this.c.aS(z,x))a.preventDefault()}},"$1","geD",4,0,4],
hZ:[function(a){var z,y,x
H.k(a,"$isao")
this.az(a)
z=this.ah(a)
if(this.x){y=this.aL(a)
if(this.d.aR(z,y))a.preventDefault()
return}if(this.r)return
x=this.ak(a)
if(this.c.aR(z,x))a.preventDefault()},"$1","geK",4,0,4],
hS:[function(a){var z,y,x
H.k(a,"$isao")
if(!this.bH(a)){this.az(a)
z=this.ah(a)
if(this.x){y=this.aL(a)
if(this.d.aR(z,y))a.preventDefault()
return}if(this.r)return
x=this.ak(a)
if(this.c.aR(z,x))a.preventDefault()}},"$1","geC",4,0,4],
i0:[function(a){var z,y
H.k(a,"$isbz")
this.az(a)
z=new V.Q((a&&C.r).gfR(a),C.r.gfS(a)).q(0,180)
if(this.x){if(this.d.hj(z))a.preventDefault()
return}if(this.r)return
y=this.ak(a)
if(this.c.hk(z,y))a.preventDefault()},"$1","geM",4,0,31],
i1:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ah(this.y)
v=this.ak(this.y)
this.d.eI(w,v,x)}},"$1","geN",4,0,7],
i9:[function(a){var z
H.k(a,"$isb0")
this.a.focus()
this.f=!0
this.bR(a)
z=this.bN(a)
if(this.e.hh(z))a.preventDefault()},"$1","geV",4,0,10],
i7:[function(a){var z
H.k(a,"$isb0")
this.bR(a)
z=this.bN(a)
if(this.e.hf(z))a.preventDefault()},"$1","geT",4,0,10],
i8:[function(a){var z
H.k(a,"$isb0")
this.bR(a)
z=this.bN(a)
if(this.e.hg(z))a.preventDefault()},"$1","geU",4,0,10]}}],["","",,D,{"^":"",c1:{"^":"a;0a,0b,0c,0d",
gn:function(){var z=this.d
if(z==null){z=D.D()
this.d=z}return z},
au:[function(a){var z
H.k(a,"$isl")
z=this.d
if(!(z==null))z.u(a)},function(){return this.au(null)},"hC","$1","$0","ge1",0,2,0],
$isU:1,
$isav:1},U:{"^":"a;",$isav:1},h4:{"^":"ae;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gn:function(){var z=this.Q
if(z==null){z=D.D()
this.Q=z}return z},
au:function(a){var z=this.Q
if(!(z==null))z.u(a)},
eH:[function(a){var z
H.k(a,"$isl")
z=this.ch
if(!(z==null))z.u(a)},function(){return this.eH(null)},"hX","$1","$0","gcN",0,2,0],
i2:[function(a){var z,y,x
H.w(a,"$ise",[D.U],"$ase")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.y)(a),++y){x=a[y]
if(x==null||this.ee(x))return!1}return!0},"$1","geO",4,0,33],
hL:[function(a,b){var z,y,x,w,v,u,t,s
z=D.U
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gcN(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=H.k(b[u],"$isU")
if(t instanceof D.c1)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aU()
s.a=H.c([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.h(s.a,x)}z=new D.bL(a,b,this,[z])
z.b=!0
this.au(z)},"$2","gev",8,0,17],
i4:[function(a,b){var z,y,x,w,v,u,t,s
z=D.U
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gcN(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=H.k(b[u],"$isU")
if(t instanceof D.c1)C.a.N(this.e,t)
s=t.d
if(s==null){s=new D.aU()
s.a=H.c([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.N(s.a,x)}z=new D.bM(a,b,this,[z])
z.b=!0
this.au(z)},"$2","geQ",8,0,17],
ee:function(a){var z=C.a.ba(this.e,a)
return z},
$ase:function(){return[D.U]},
$asae:function(){return[D.U]}},hC:{"^":"a;",$isU:1,$isav:1},ib:{"^":"a;",$isU:1,$isav:1},io:{"^":"a;",$isU:1,$isav:1},ip:{"^":"a;",$isU:1,$isav:1},iq:{"^":"a;",$isU:1,$isav:1}}],["","",,V,{"^":"",
lk:[function(a,b){if(typeof b!=="number")return b.E()
if(typeof a!=="number")return H.p(a)
return Math.abs(b-a)<=1e-9},"$2","hp",8,0,32],
la:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.c.dM(a-b,z)
return(a<0?a+z:a)+b},
L:function(a,b,c){if(a==null)return C.i.aq("null",c)
return C.i.aq(C.c.dH($.m.$2(a,0)?0:a,b),c+b+1)},
b7:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isd",[P.v],"$asd")
z=H.c([],[P.n])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.y)(a),++w){v=V.L(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.i(z,u)
C.a.W(z,u,C.i.aq(z[u],x))}return z},
d8:function(a,b){return C.c.hy(Math.pow(b,C.y.c9(Math.log(H.kB(a))/Math.log(b))))},
T:{"^":"a;a,b,c",
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
return new V.T(z,y,x)},
t:function(a,b){var z
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
aC:{"^":"a;a,b,c,d",
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
return new V.aC(z,y,x,w)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aC))return!1
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
c8:{"^":"a;a,b,c,d,e,f,r,x,y",
a3:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.v])
return z},
j:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.k(a5,"$isc8")
z=this.a
y=a5.a
if(typeof z!=="number")return z.j()
x=C.c.j(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.j()
u=C.c.j(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.j()
r=C.c.j(t,s)
q=a5.b
p=C.c.j(z,q)
o=a5.e
n=C.c.j(w,o)
m=a5.x
l=C.c.j(t,m)
k=a5.c
z=C.c.j(z,k)
j=a5.f
w=C.c.j(w,j)
i=a5.y
t=C.c.j(t,i)
h=this.d
if(typeof h!=="number")return h.j()
g=C.c.j(h,y)
f=this.e
if(typeof f!=="number")return f.j()
e=C.c.j(f,v)
d=this.f
if(typeof d!=="number")return d.j()
c=C.c.j(d,s)
b=C.c.j(h,q)
a=C.c.j(f,o)
a0=C.c.j(d,m)
h=C.c.j(h,k)
f=C.c.j(f,j)
d=C.c.j(d,i)
a1=this.r
if(typeof a1!=="number")return a1.j()
y=C.c.j(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.j()
v=C.c.j(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.j()
return new V.c8(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.c.j(a3,s),C.c.j(a1,q)+C.c.j(a2,o)+C.c.j(a3,m),C.c.j(a1,k)+C.c.j(a2,j)+C.c.j(a3,i))},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c8))return!1
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
y=V.b7(H.c([this.a,this.d,this.r],z),3,0)
x=V.b7(H.c([this.b,this.e,this.x],z),3,0)
w=V.b7(H.c([this.c,this.f,this.y],z),3,0)
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
as:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a3:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.v])
return z},
cb:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.p(y)
x=this.b
w=this.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.p(w)
v=z*y-x*w
u=this.r
if(typeof u!=="number")return H.p(u)
t=this.c
if(typeof t!=="number")return t.j()
s=z*u-t*w
r=this.x
if(typeof r!=="number")return H.p(r)
q=this.d
if(typeof q!=="number")return q.j()
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
if(typeof l!=="number")return l.j()
if(typeof k!=="number")return H.p(k)
j=this.z
i=this.cx
if(typeof j!=="number")return j.j()
if(typeof i!=="number")return H.p(i)
h=l*k-j*i
g=this.db
if(typeof g!=="number")return H.p(g)
f=this.Q
if(typeof f!=="number")return f.j()
e=l*g-f*i
d=this.dx
if(typeof d!=="number")return H.p(d)
c=this.ch
if(typeof c!=="number")return c.j()
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.m.$2(a2,0))return V.aY()
a3=1/a2
a4=-w
a5=-i
return V.at((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
j:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.k(a7,"$isas")
z=this.a
y=a7.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.p(y)
x=this.b
w=a7.e
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.p(w)
v=this.c
u=a7.y
if(typeof v!=="number")return v.j()
if(typeof u!=="number")return H.p(u)
t=this.d
s=a7.cx
if(typeof t!=="number")return t.j()
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
return V.at(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cn:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
return new V.F(z*y+x*w+v*u,t*y+s*w+r*u,q*y+p*w+o*u)},
b_:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(typeof t!=="number")return H.p(t)
s=this.e
if(typeof s!=="number")return s.j()
r=this.f
if(typeof r!=="number")return r.j()
q=this.r
if(typeof q!=="number")return q.j()
p=this.x
if(typeof p!=="number")return H.p(p)
o=this.y
if(typeof o!=="number")return o.j()
n=this.z
if(typeof n!=="number")return n.j()
m=this.Q
if(typeof m!=="number")return m.j()
l=this.ch
if(typeof l!=="number")return H.p(l)
return new V.V(z*y+x*w+v*u+t,s*y+r*w+q*u+p,o*y+n*w+m*u+l)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.as))return!1
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
dw:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.v]
y=V.b7(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.b7(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.b7(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.b7(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
A:function(a){return this.dw(a,3,0)},
K:function(){return this.dw("",3,0)},
p:{
at:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.as(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aY:function(){return V.at(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
dQ:function(a,b,c){var z,y,x,w,v
z=c.q(0,Math.sqrt(c.w(c)))
y=b.am(z)
x=y.q(0,Math.sqrt(y.w(y)))
w=z.am(x)
v=new V.F(a.a,a.b,a.c)
return V.at(x.a,w.a,z.a,x.H(0).w(v),x.b,w.b,z.b,w.H(0).w(v),x.c,w.c,z.c,z.H(0).w(v),0,0,0,1)}}},
N:{"^":"a;a,b",
E:function(a,b){return new V.N(this.a-b.a,this.b-b.b)},
j:function(a,b){return new V.N(this.a*b,this.b*b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.N))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}},
V:{"^":"a;a,b,c",
F:function(a,b){return new V.V(this.a+b.a,this.b+b.b,this.c+b.c)},
E:function(a,b){return new V.V(this.a-b.a,this.b-b.b,this.c-b.c)},
j:function(a,b){return new V.V(this.a*b,this.b*b,this.c*b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}},
bo:{"^":"a;a,b,c,d",
j:function(a,b){return new V.bo(this.a*b,this.b*b,this.c*b,this.d*b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bo))return!1
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
e_:{"^":"a;a,b,c,d",
ga0:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e_))return!1
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
e0:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e_(a,b,c,d)}}},
Q:{"^":"a;a,b",
h2:[function(a){return Math.sqrt(this.w(this))},"$0","gl",1,0,18],
w:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.j()
if(typeof y!=="number")return H.p(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.j()
if(typeof w!=="number")return H.p(w)
return z*y+x*w},
j:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.j()
y=this.b
if(typeof y!=="number")return y.j()
return new V.Q(z*b,y*b)},
q:function(a,b){var z,y
if($.m.$2(b,0))return new V.Q(0,0)
z=this.a
if(typeof z!=="number")return z.q()
y=this.b
if(typeof y!=="number")return y.q()
return new V.Q(z/b,y/b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}},
F:{"^":"a;a,b,c",
h2:[function(a){return Math.sqrt(this.w(this))},"$0","gl",1,0,18],
w:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
am:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.F(z*y-x*w,x*v-u*y,u*w-z*v)},
F:function(a,b){return new V.F(this.a+b.a,this.b+b.b,this.c+b.c)},
H:function(a){return new V.F(-this.a,-this.b,-this.c)},
j:function(a,b){return new V.F(this.a*b,this.b*b,this.c*b)},
q:function(a,b){if($.m.$2(b,0))return new V.F(0,0,0)
return new V.F(this.a/b,this.b/b,this.c/b)},
dA:function(){if(!$.m.$2(0,this.a))return!1
if(!$.m.$2(0,this.b))return!1
if(!$.m.$2(0,this.c))return!1
return!0},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.F))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}}],["","",,U,{"^":"",fw:{"^":"dj;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bz:function(a){var z=V.la(a,this.c,this.b)
return z},
gn:function(){var z=this.y
if(z==null){z=D.D()
this.y=z}return z},
I:function(a){var z=this.y
if(!(z==null))z.u(a)},
sco:function(a,b){},
scd:function(a){var z,y
z=this.b
if(!$.m.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bz(z)}z=new D.G("maximumLocation",y,this.b,this,[P.v])
z.b=!0
this.I(z)}},
scf:function(a){var z,y
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bz(z)}z=new D.G("minimumLocation",y,this.c,this,[P.v])
z.b=!0
this.I(z)}},
sa_:function(a,b){var z,y
b=this.bz(b)
z=this.d
if(!$.m.$2(z,b)){y=this.d
this.d=b
z=new D.G("location",y,b,this,[P.v])
z.b=!0
this.I(z)}},
sce:function(a){var z,y,x
z=this.e
if(!$.m.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.G("maximumVelocity",y,a,this,[P.v])
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
z=new D.G("velocity",x,a,this,[P.v])
z.b=!0
this.I(z)}},
sc1:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.m.$2(z,a)){y=this.x
this.x=a
z=new D.G("dampening",y,a,this,[P.v])
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
this.sa_(0,this.d+y*b)
z=this.x
if(!$.m.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sL(y)}},
p:{
cx:function(){var z=new U.fw()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dl:{"^":"aa;0a,0b",
gn:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
aJ:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dl))return!1
return J.P(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")},
p:{
dm:function(a){var z=new U.dl()
z.a=a
return z}}},dA:{"^":"ae;0e,0f,0r,0a,0b,0c,0d",
gn:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
I:[function(a){var z
H.k(a,"$isl")
z=this.e
if(!(z==null))z.u(a)},function(){return this.I(null)},"a9","$1","$0","gay",0,2,0],
hK:[function(a,b){var z,y,x,w,v,u,t
z=U.aa
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gay(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.y)(b),++v){u=b[v]
if(u!=null){t=u.gn()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.bL(a,b,this,[z])
z.b=!0
this.I(z)},"$2","geu",8,0,19],
i3:[function(a,b){var z,y,x,w,v,u,t
z=U.aa
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gay(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.y)(b),++v){u=b[v]
if(u!=null){t=u.gn()
t.toString
H.b(x,w)
C.a.N(t.a,x)}}z=new D.bM(a,b,this,[z])
z.b=!0
this.I(z)},"$2","geP",8,0,19],
aJ:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.a7()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.am(z,z.length,0,[H.z(z,0)]),x=null;z.C();){y=z.d
if(y!=null){w=y.aJ(0,b,c)
if(w!=null)x=x==null?w:w.j(0,x)}}this.f=x==null?V.aY():x
z=this.e
if(!(z==null))z.as(0)}return this.f},
t:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dA))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.i(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.i(w,y)
if(!J.P(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$ase:function(){return[U.aa]},
$asae:function(){return[U.aa]},
$isaa:1},aa:{"^":"dj;"},iO:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gn:function(){var z=this.cy
if(z==null){z=D.D()
this.cy=z}return z},
I:[function(a){var z
H.k(a,"$isl")
z=this.cy
if(!(z==null))z.u(a)},function(){return this.I(null)},"a9","$1","$0","gay",0,2,0],
aM:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gd8()
z.toString
y={func:1,ret:-1,args:[D.l]}
x=H.b(this.gbI(),y)
C.a.h(z.a,x)
x=this.a.c.gdB()
x.toString
z=H.b(this.gbJ(),y)
C.a.h(x.a,z)
z=this.a.c.gbs()
z.toString
y=H.b(this.gbK(),y)
C.a.h(z.a,y)
return!0},
ep:[function(a){H.k(a,"$isl")
if(!J.P(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbI",4,0,1],
eq:[function(a){var z,y,x,w,v,u,t
a=H.f(H.k(a,"$isl"),"$isbl")
if(!this.y)return
if(this.x){z=a.d.E(0,a.y)
z=new V.Q(z.a,z.b)
z=z.w(z)
y=this.r
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.E(0,a.y)
z=new V.Q(y.a,y.b).j(0,2).q(0,z.ga0())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.j()
x=this.e
if(typeof x!=="number")return H.p(x)
y.sL(z*10*x)}else{z=a.c
y=a.d
x=y.E(0,a.y)
w=new V.Q(x.a,x.b).j(0,2).q(0,z.ga0())
x=this.b
v=w.a
if(typeof v!=="number")return v.H()
u=this.e
if(typeof u!=="number")return H.p(u)
t=this.z
if(typeof t!=="number")return H.p(t)
x.sa_(0,-v*u+t)
this.b.sL(0)
y=y.E(0,a.z)
this.Q=new V.Q(y.a,y.b).j(0,2).q(0,z.ga0())}this.a9()},"$1","gbJ",4,0,1],
er:[function(a){var z,y,x
H.k(a,"$isl")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.w(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.j()
x=this.e
if(typeof x!=="number")return H.p(x)
z.sL(y*10*x)
this.a9()}},"$1","gbK",4,0,1],
aJ:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.a7()
if(z<y){this.ch=y
x=b.y
this.b.ab(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.at(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isaa:1},iP:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gn:function(){var z=this.fx
if(z==null){z=D.D()
this.fx=z}return z},
I:[function(a){var z
H.k(a,"$isl")
z=this.fx
if(!(z==null))z.u(a)},function(){return this.I(null)},"a9","$1","$0","gay",0,2,0],
aM:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gd8()
z.toString
y={func:1,ret:-1,args:[D.l]}
x=H.b(this.gbI(),y)
C.a.h(z.a,x)
x=this.a.c.gdB()
x.toString
z=H.b(this.gbJ(),y)
C.a.h(x.a,z)
z=this.a.c.gbs()
z.toString
x=H.b(this.gbK(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.f
if(z==null){z=D.D()
x.f=z}x=H.b(this.gem(),y)
C.a.h(z.a,x)
x=this.a.d
z=x.d
if(z==null){z=D.D()
x.d=z}x=H.b(this.gen(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.b
if(z==null){z=D.D()
x.b=z}x=H.b(this.gff(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.D()
x.d=z}x=H.b(this.gfe(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.D()
x.c=z}y=H.b(this.gfd(),y)
C.a.h(z.a,y)
return!0},
ac:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.H()
z=-z}if(this.r){if(typeof y!=="number")return y.H()
y=-y}return new V.Q(z,y)},
ep:[function(a){a=H.f(H.k(a,"$isl"),"$isbl")
if(!J.P(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbI",4,0,1],
eq:[function(a){var z,y,x,w,v,u,t
a=H.f(H.k(a,"$isl"),"$isbl")
if(!this.cx)return
if(this.ch){z=a.d.E(0,a.y)
z=new V.Q(z.a,z.b)
z=z.w(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.E(0,a.y)
z=this.ac(new V.Q(y.a,y.b).j(0,2).q(0,z.ga0()))
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
w=this.ac(new V.Q(x.a,x.b).j(0,2).q(0,z.ga0()))
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
y=y.E(0,a.z)
this.dx=this.ac(new V.Q(y.a,y.b).j(0,2).q(0,z.ga0()))}this.a9()},"$1","gbJ",4,0,1],
er:[function(a){var z,y,x
H.k(a,"$isl")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.w(z)>0.0001){z=this.c
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
hH:[function(a){if(H.f(H.k(a,"$isl"),"$isdM").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gem",4,0,1],
hI:[function(a){var z,y,x,w,v,u,t
a=H.f(H.k(a,"$isl"),"$isbl")
if(!J.P(this.d,a.x.b))return
z=a.c
y=a.d
x=y.E(0,a.y)
w=this.ac(new V.Q(x.a,x.b).j(0,2).q(0,z.ga0()))
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
y=y.E(0,a.z)
this.dx=this.ac(new V.Q(y.a,y.b).j(0,2).q(0,z.ga0()))
this.a9()},"$1","gen",4,0,1],
ie:[function(a){H.k(a,"$isl")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gff",4,0,1],
ic:[function(a){var z,y,x,w,v,u,t
a=H.f(H.k(a,"$isl"),"$isef")
if(!this.cx)return
if(this.ch){z=a.d.E(0,a.y)
z=new V.Q(z.a,z.b)
z=z.w(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.E(0,a.y)
z=this.ac(new V.Q(y.a,y.b).j(0,2).q(0,z.ga0()))
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
w=this.ac(new V.Q(x.a,x.b).j(0,2).q(0,z.ga0()))
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
y=y.E(0,a.z)
this.dx=this.ac(new V.Q(y.a,y.b).j(0,2).q(0,z.ga0()))}this.a9()},"$1","gfe",4,0,1],
ib:[function(a){var z,y,x
H.k(a,"$isl")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.w(z)>0.0001){z=this.c
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
aJ:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.a7()
if(z<y){this.dy=y
x=b.y
this.c.ab(0,x)
this.b.ab(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.at(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.j(0,V.at(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isaa:1},iQ:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gn:function(){var z=this.r
if(z==null){z=D.D()
this.r=z}return z},
I:function(a){var z=this.r
if(!(z==null))z.u(a)},
aM:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.D()
z.e=y
z=y}else z=y
y=H.b(this.ges(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=this.a.d
x=z.e
if(x==null){x=D.D()
z.e=x
z=x}else z=x
C.a.h(z.a,y)
return!0},
hJ:[function(a){var z,y,x,w
H.k(a,"$isl")
if(!J.P(this.b,this.a.b.c))return
H.f(a,"$iscH")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.j()
w=z+y*x
if(z!==w){this.d=w
z=new D.G("zoom",z,w,this,[P.v])
z.b=!0
this.I(z)}},"$1","ges",4,0,1],
aJ:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.at(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isaa:1}}],["","",,M,{"^":"",fx:{"^":"ae;0e,0f,0a,0b,0c,0d",
gn:function(){var z=this.f
if(z==null){z=D.D()
this.f=z}return z},
T:[function(a){var z
H.k(a,"$isl")
z=this.f
if(!(z==null))z.u(a)},function(){return this.T(null)},"cB","$1","$0","gP",0,2,0],
i5:[function(a,b){var z,y,x,w,v,u,t
z=M.aw
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gP(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.y)(b),++v){u=b[v]
if(u!=null){t=u.gn()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.bL(a,b,this,[z])
z.b=!0
this.T(z)},"$2","geR",8,0,20],
i6:[function(a,b){var z,y,x,w,v,u,t
z=M.aw
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gP(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.y)(b),++v){u=b[v]
if(u!=null){t=u.gn()
t.toString
H.b(x,w)
C.a.N(t.a,x)}}z=new D.bM(a,b,this,[z])
z.b=!0
this.T(z)},"$2","geS",8,0,20],
a2:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.C();){y=z.d
if(!(y==null))y.a2(a)}this.e=!1},
$ase:function(){return[M.aw]},
$asae:function(){return[M.aw]},
$isaw:1},fz:{"^":"a;0a,0b,0c,0d,0e,0f",
gn:function(){var z=this.f
if(z==null){z=D.D()
this.f=z}return z},
T:[function(a){var z
H.k(a,"$isl")
z=this.f
if(!(z==null))z.u(a)},function(){return this.T(null)},"cB","$1","$0","gP",0,2,0],
saN:function(a){var z,y,x
if(a==null)a=new X.fV()
z=this.a
if(z!==a){if(z!=null){z=z.gn()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.N(z.a,y)}x=this.a
this.a=a
z=a.gn()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.G("camera",x,this.a,this,[X.c_])
z.b=!0
this.T(z)}},
saV:function(a,b){var z,y,x
if(b==null)b=X.cy(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gn()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.N(z.a,y)}x=this.b
this.b=b
z=b.gn()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.G("target",x,this.b,this,[X.cN])
z.b=!0
this.T(z)}},
saW:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gn()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.N(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gn()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.G("technique",x,this.c,this,[O.bT])
z.b=!0
this.T(z)}},
a2:function(a){a.cj(this.c)
this.b.U(a)
this.a.U(a)
this.d.ab(0,a)
this.d.a2(a)
this.a.aI(a)
this.b.toString
a.ci()},
$isaw:1},fM:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
T:[function(a){var z
H.k(a,"$isl")
z=this.x
if(!(z==null))z.u(a)},function(){return this.T(null)},"cB","$1","$0","gP",0,2,0],
hP:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aD
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gP(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){if(t.gY()==null){s=new D.aU()
s.a=H.c([],v)
s.c=0
t.sY(s)}s=t.gY()
s.toString
H.b(x,w)
C.a.h(s.a,x)}}z=new D.bL(a,b,this,[z])
z.b=!0
this.T(z)},"$2","gez",8,0,8],
hQ:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aD
H.w(b,"$ise",[z],"$ase")
for(y=b.length,x=this.gP(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){if(t.gY()==null){s=new D.aU()
s.a=H.c([],v)
s.c=0
t.sY(s)}s=t.gY()
s.toString
H.b(x,w)
C.a.N(s.a,x)}}z=new D.bM(a,b,this,[z])
z.b=!0
this.T(z)},"$2","geA",8,0,8],
saN:function(a){var z,y,x
if(a==null)a=X.dU(2000,1.0471975511965976,null,0.1)
z=this.a
if(z!==a){if(z!=null){z=z.gn()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.N(z.a,y)}x=this.a
this.a=a
z=a.gn()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.G("camera",x,this.a,this,[X.c_])
z.b=!0
this.T(z)}},
saV:function(a,b){var z,y,x
if(b==null)b=X.cy(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gn()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.N(z.a,y)}x=this.b
this.b=b
z=b.gn()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.G("target",x,this.b,this,[X.cN])
z.b=!0
this.T(z)}},
saW:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gn()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.N(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gn()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.G("technique",x,this.c,this,[O.bT])
z.b=!0
this.T(z)}},
gn:function(){var z=this.x
if(z==null){z=D.D()
this.x=z}return z},
a2:function(a){var z
a.cj(this.c)
this.b.U(a)
this.a.U(a)
z=this.c
if(z!=null)z.ab(0,a)
for(z=this.d.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.C();)z.d.ab(0,a)
for(z=this.d.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.C();)z.d.a2(a)
this.a.toString
a.cy.ar()
a.db.ar()
this.b.toString
a.ci()},
$isaw:1},aw:{"^":"a;"}}],["","",,A,{"^":"",dd:{"^":"a;a,b,c"},fm:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fU:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
d6:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},dP:{"^":"cK;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aE,0an,0aF,0bb,0d9,0da,0bc,0bd,0dc,0dd,0be,0bf,0de,0df,0bg,0dg,0dh,0bh,0di,0dj,0bi,0bj,0bk,0dk,0dl,0bl,0bm,0dm,0dn,0bn,0dq,0c3,0dr,0c4,0ds,0c5,0dt,0c6,0du,0c7,0dv,0c8,a,b,0c,0d,0e,0f,0r",
dV:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
if(q!==C.f){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.d){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.e){r+="uniform samplerCube alphaTxt;\n"
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
r=z.a+="   return litClr*("+C.a.B(p," + ")+");\n"
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
n="vec4("+C.a.B(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.dz(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.y=this.f.k(0,"posAttr")
this.Q=this.f.k(0,"normAttr")
this.z=this.f.k(0,"binmAttr")
this.ch=this.f.k(0,"txt2DAttr")
this.cx=this.f.k(0,"txtCubeAttr")
this.cy=this.f.k(0,"bendAttr")
if(a1.fr)this.fy=H.f(this.r.m(0,"invViewMat"),"$isaz")
if(y)this.db=H.f(this.r.m(0,"objMat"),"$isaz")
if(w)this.dx=H.f(this.r.m(0,"viewObjMat"),"$isaz")
this.fr=H.f(this.r.m(0,"projViewObjMat"),"$isaz")
if(a1.x2)this.go=H.f(this.r.m(0,"txt2DMat"),"$iscS")
if(a1.y1)this.id=H.f(this.r.m(0,"txtCubeMat"),"$isaz")
if(a1.y2)this.k1=H.f(this.r.m(0,"colorMat"),"$isaz")
this.k3=H.c([],[A.az])
y=a1.aE
if(y>0){this.k2=H.k(this.r.m(0,"bendMatCount"),"$isH")
for(m=0;m<y;++m){x=this.k3
w=this.r
v="bendValues["+m+"].mat"
l=w.k(0,v)
if(l==null)H.r(P.q("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.f(l,"$isaz"))}}y=a1.a
if(y!==C.b){this.k4=H.f(this.r.m(0,"emissionClr"),"$isE")
switch(y){case C.b:break
case C.f:break
case C.d:this.r1=H.f(this.r.m(0,"emissionTxt"),"$isah")
this.rx=H.f(this.r.m(0,"nullEmissionTxt"),"$isH")
break
case C.e:this.r2=H.f(this.r.m(0,"emissionTxt"),"$isab")
this.rx=H.f(this.r.m(0,"nullEmissionTxt"),"$isH")
break}}y=a1.b
if(y!==C.b){this.ry=H.f(this.r.m(0,"ambientClr"),"$isE")
switch(y){case C.b:break
case C.f:break
case C.d:this.x1=H.f(this.r.m(0,"ambientTxt"),"$isah")
this.y1=H.f(this.r.m(0,"nullAmbientTxt"),"$isH")
break
case C.e:this.x2=H.f(this.r.m(0,"ambientTxt"),"$isab")
this.y1=H.f(this.r.m(0,"nullAmbientTxt"),"$isH")
break}}y=a1.c
if(y!==C.b){this.y2=H.f(this.r.m(0,"diffuseClr"),"$isE")
switch(y){case C.b:break
case C.f:break
case C.d:this.aE=H.f(this.r.m(0,"diffuseTxt"),"$isah")
this.aF=H.f(this.r.m(0,"nullDiffuseTxt"),"$isH")
break
case C.e:this.an=H.f(this.r.m(0,"diffuseTxt"),"$isab")
this.aF=H.f(this.r.m(0,"nullDiffuseTxt"),"$isH")
break}}y=a1.d
if(y!==C.b){this.bb=H.f(this.r.m(0,"invDiffuseClr"),"$isE")
switch(y){case C.b:break
case C.f:break
case C.d:this.d9=H.f(this.r.m(0,"invDiffuseTxt"),"$isah")
this.bc=H.f(this.r.m(0,"nullInvDiffuseTxt"),"$isH")
break
case C.e:this.da=H.f(this.r.m(0,"invDiffuseTxt"),"$isab")
this.bc=H.f(this.r.m(0,"nullInvDiffuseTxt"),"$isH")
break}}y=a1.e
if(y!==C.b){this.bf=H.f(this.r.m(0,"shininess"),"$isR")
this.bd=H.f(this.r.m(0,"specularClr"),"$isE")
switch(y){case C.b:break
case C.f:break
case C.d:this.dc=H.f(this.r.m(0,"specularTxt"),"$isah")
this.be=H.f(this.r.m(0,"nullSpecularTxt"),"$isH")
break
case C.e:this.dd=H.f(this.r.m(0,"specularTxt"),"$isab")
this.be=H.f(this.r.m(0,"nullSpecularTxt"),"$isH")
break}}switch(a1.f){case C.b:break
case C.f:break
case C.d:this.de=H.f(this.r.m(0,"bumpTxt"),"$isah")
this.bg=H.f(this.r.m(0,"nullBumpTxt"),"$isH")
break
case C.e:this.df=H.f(this.r.m(0,"bumpTxt"),"$isab")
this.bg=H.f(this.r.m(0,"nullBumpTxt"),"$isH")
break}if(a1.dy){this.dg=H.f(this.r.m(0,"envSampler"),"$isab")
this.dh=H.f(this.r.m(0,"nullEnvTxt"),"$isH")
y=a1.r
if(y!==C.b){this.bh=H.f(this.r.m(0,"reflectClr"),"$isE")
switch(y){case C.b:break
case C.f:break
case C.d:this.di=H.f(this.r.m(0,"reflectTxt"),"$isah")
this.bi=H.f(this.r.m(0,"nullReflectTxt"),"$isH")
break
case C.e:this.dj=H.f(this.r.m(0,"reflectTxt"),"$isab")
this.bi=H.f(this.r.m(0,"nullReflectTxt"),"$isH")
break}}y=a1.x
if(y!==C.b){this.bj=H.f(this.r.m(0,"refraction"),"$isR")
this.bk=H.f(this.r.m(0,"refractClr"),"$isE")
switch(y){case C.b:break
case C.f:break
case C.d:this.dk=H.f(this.r.m(0,"refractTxt"),"$isah")
this.bl=H.f(this.r.m(0,"nullRefractTxt"),"$isH")
break
case C.e:this.dl=H.f(this.r.m(0,"refractTxt"),"$isab")
this.bl=H.f(this.r.m(0,"nullRefractTxt"),"$isH")
break}}}y=a1.y
if(y!==C.b){this.bm=H.f(this.r.m(0,"alpha"),"$isR")
switch(y){case C.b:break
case C.f:break
case C.d:this.dm=H.f(this.r.m(0,"alphaTxt"),"$isah")
this.bn=H.f(this.r.m(0,"nullAlphaTxt"),"$isH")
break
case C.e:this.dn=H.f(this.r.m(0,"alphaTxt"),"$isab")
this.bn=H.f(this.r.m(0,"nullAlphaTxt"),"$isH")
break}}this.c3=H.c([],[A.es])
this.c4=H.c([],[A.et])
this.c5=H.c([],[A.eu])
this.c6=H.c([],[A.ev])
this.c7=H.c([],[A.ew])
this.c8=H.c([],[A.ex])
if(a1.k2){y=a1.z
if(y>0){this.dq=H.k(this.r.m(0,"dirLightCount"),"$isH")
for(m=0;m<y;++m){x=this.r
w="dirLights["+m+"].viewDir"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isE")
x=this.r
w="dirLights["+m+"].color"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isE")
x=this.c3;(x&&C.a).h(x,new A.es(m,l,k))}}y=a1.Q
if(y>0){this.dr=H.k(this.r.m(0,"pntLightCount"),"$isH")
for(m=0;m<y;++m){x=this.r
w="pntLights["+m+"].point"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isE")
x=this.r
w="pntLights["+m+"].viewPnt"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isE")
x=this.r
w="pntLights["+m+"].color"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isE")
x=this.r
w="pntLights["+m+"].att0"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isR")
x=this.r
w="pntLights["+m+"].att1"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isR")
x=this.r
w="pntLights["+m+"].att2"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isR")
x=this.c4;(x&&C.a).h(x,new A.et(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.ds=H.k(this.r.m(0,"spotLightCount"),"$isH")
for(m=0;m<y;++m){x=this.r
w="spotLights["+m+"].objPnt"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isE")
x=this.r
w="spotLights["+m+"].objDir"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isE")
x=this.r
w="spotLights["+m+"].viewPnt"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isE")
x=this.r
w="spotLights["+m+"].color"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isE")
x=this.r
w="spotLights["+m+"].cutoff"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isR")
x=this.r
w="spotLights["+m+"].coneAngle"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isR")
x=this.r
w="spotLights["+m+"].att0"
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isR")
x=this.r
w="spotLights["+m+"].att1"
e=x.k(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isR")
x=this.r
w="spotLights["+m+"].att2"
d=x.k(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isR")
x=this.c5;(x&&C.a).h(x,new A.eu(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.dt=H.k(this.r.m(0,"txtDirLightCount"),"$isH")
for(m=0;m<y;++m){x=this.r
w="txtDirLights["+m+"].objUp"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isE")
x=this.r
w="txtDirLights["+m+"].objRight"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isE")
x=this.r
w="txtDirLights["+m+"].objDir"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isE")
x=this.r
w="txtDirLights["+m+"].viewDir"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isE")
x=this.r
w="txtDirLights["+m+"].color"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isE")
x=this.r
w="txtDirLights["+m+"].nullTxt"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isH")
x=this.r
w="txtDirLightsTxt2D"+m
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isah")
x=this.c6;(x&&C.a).h(x,new A.ev(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.du=H.k(this.r.m(0,"txtPntLightCount"),"$isH")
for(m=0;m<y;++m){x=this.r
w="txtPntLights["+m+"].point"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isE")
x=this.r
w="txtPntLights["+m+"].viewPnt"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isE")
x=this.r
w="txtPntLights["+m+"].invViewRotMat"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$iscS")
x=this.r
w="txtPntLights["+m+"].color"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isE")
x=this.r
w="txtPntLights["+m+"].nullTxt"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isH")
x=this.r
w="txtPntLights["+m+"].att0"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isR")
x=this.r
w="txtPntLights["+m+"].att1"
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isR")
x=this.r
w="txtPntLights["+m+"].att2"
e=x.k(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isR")
x=this.r
w="txtPntLightsTxtCube"+m
d=x.k(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isab")
x=this.c7;(x&&C.a).h(x,new A.ew(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.dv=H.k(this.r.m(0,"txtSpotLightCount"),"$isH")
for(m=0;m<y;++m){x=this.r
w="txtSpotLights["+m+"].objPnt"
l=x.k(0,w)
if(l==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(l,"$isE")
x=this.r
w="txtSpotLights["+m+"].objDir"
k=x.k(0,w)
if(k==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(k,"$isE")
x=this.r
w="txtSpotLights["+m+"].objUp"
j=x.k(0,w)
if(j==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(j,"$isE")
x=this.r
w="txtSpotLights["+m+"].objRight"
i=x.k(0,w)
if(i==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(i,"$isE")
x=this.r
w="txtSpotLights["+m+"].viewPnt"
h=x.k(0,w)
if(h==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(h,"$isE")
x=this.r
w="txtSpotLights["+m+"].nullTxt"
g=x.k(0,w)
if(g==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(g,"$isH")
x=this.r
w="txtSpotLights["+m+"].color"
f=x.k(0,w)
if(f==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(f,"$isE")
x=this.r
w="txtSpotLights["+m+"].tuScalar"
e=x.k(0,w)
if(e==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(e,"$isR")
x=this.r
w="txtSpotLights["+m+"].tvScalar"
d=x.k(0,w)
if(d==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(d,"$isR")
x=this.r
w="txtSpotLights["+m+"].att0"
c=x.k(0,w)
if(c==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(c,"$isR")
x=this.r
w="txtSpotLights["+m+"].att1"
b=x.k(0,w)
if(b==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(b,"$isR")
x=this.r
w="txtSpotLights["+m+"].att2"
a=x.k(0,w)
if(a==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(a,"$isR")
x=this.r
w="txtSpotLightsTxt2D"+m
a0=x.k(0,w)
if(a0==null)H.r(P.q("Required uniform value, "+w+", was not defined or used in shader."))
H.f(a0,"$isah")
x=this.c8;(x&&C.a).h(x,new A.ex(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
aa:function(a,b,c){b.a.uniform1i(b.d,1)},
a4:function(a,b,c){b.a.uniform1i(b.d,1)},
p:{
hj:function(a,b){var z,y
z=a.an
y=new A.dP(b,z)
y.cw(b,z)
y.dV(a,b)
return y}}},hm:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aE,an,aF",
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
z=a.a+="uniform BendingValue bendValues["+this.aE+"];\n"
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
ai:function(a,b,c){var z
if(b===C.b)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.i(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.cu(c,1))+"Txt;\n"
a.a=z
if(b===C.d)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fm:function(a){var z,y
z=this.a
if(z===C.b)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.ai(a,z,"emission")
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
fh:function(a){var z,y
z=this.b
if(z===C.b)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.ai(a,z,"ambient")
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
fk:function(a){var z,y
z=this.c
if(z===C.b)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.ai(a,z,"diffuse")
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
fn:function(a){var z,y
z=this.d
if(z===C.b)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.ai(a,z,"invDiffuse")
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
fw:function(a){var z,y
z=this.e
if(z===C.b)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.ai(a,z,"specular")
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
fq:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.b:break
case C.f:break
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
switch(y){case C.b:z+="   return normalize(normalVec);\n"
a.a=z
break
case C.f:z+="   return normalize(normalVec);\n"
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
fu:function(a){var z,y
z=this.r
if(z===C.b)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.ai(a,z,"reflect")
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
fv:function(a){var z,y
z=this.x
if(z===C.b)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.ai(a,z,"refract")
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
i:function(a){return this.an}},es:{"^":"a;a,b,c"},ev:{"^":"a;a,b,c,d,e,f,r,x"},et:{"^":"a;a,b,c,d,e,f,r"},ew:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eu:{"^":"a;a,b,c,d,e,f,r,x,y,z"},ex:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cK:{"^":"cp;",
cw:function(a,b){this.c=null
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
if(!H.f3(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.r(P.q("Failed to link shader: "+H.j(x)))}this.f8()
this.fa()},
U:function(a){a.a.useProgram(this.e)
this.f.fU()},
cL:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.f3(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.h(P.q("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
f8:function(){var z,y,x,w,v,u
z=H.c([],[A.dd])
y=this.a
x=H.Z(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dd(y,v.name,u))}this.f=new A.fm(z)},
fa:function(){var z,y,x,w,v,u
z=H.c([],[A.a3])
y=this.a
x=H.Z(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.fQ(v.type,v.size,v.name,u))}this.r=new A.iG(z)},
aw:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.H(z,y,b,c)
else return A.cR(z,y,b,a,c)},
ef:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ah(z,y,b,c)
else return A.cR(z,y,b,a,c)},
eg:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ab(z,y,b,c)
else return A.cR(z,y,b,a,c)},
b7:function(a,b){return new P.eG(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
fQ:function(a,b,c,d){switch(a){case 5120:return this.aw(b,c,d)
case 5121:return this.aw(b,c,d)
case 5122:return this.aw(b,c,d)
case 5123:return this.aw(b,c,d)
case 5124:return this.aw(b,c,d)
case 5125:return this.aw(b,c,d)
case 5126:return new A.R(this.a,this.e,c,d)
case 35664:return new A.iB(this.a,this.e,c,d)
case 35665:return new A.E(this.a,this.e,c,d)
case 35666:return new A.iE(this.a,this.e,c,d)
case 35667:return new A.iC(this.a,this.e,c,d)
case 35668:return new A.iD(this.a,this.e,c,d)
case 35669:return new A.iF(this.a,this.e,c,d)
case 35674:return new A.iI(this.a,this.e,c,d)
case 35675:return new A.cS(this.a,this.e,c,d)
case 35676:return new A.az(this.a,this.e,c,d)
case 35678:return this.ef(b,c,d)
case 35680:return this.eg(b,c,d)
case 35670:throw H.h(this.b7("BOOL",c))
case 35671:throw H.h(this.b7("BOOL_VEC2",c))
case 35672:throw H.h(this.b7("BOOL_VEC3",c))
case 35673:throw H.h(this.b7("BOOL_VEC4",c))
default:throw H.h(P.q("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},c0:{"^":"a;a,b",
i:function(a){return this.b}},e3:{"^":"cK;0x,0y,0z,0Q,0ch,0cx,a,b,0c,0d,0e,0f,0r"},a3:{"^":"a;"},iG:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.k(0,b)
if(z==null)throw H.h(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.K()},
fW:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.y)(z),++w)x+=z[w].i(0)+a
return x},
K:function(){return this.fW("\n")}},H:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},iC:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},iD:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},iF:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},iA:{"^":"a3;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.j(this.c)},
p:{
cR:function(a,b,c,d,e){var z=new A.iA(a,b,c,e)
z.f=d
z.e=P.hb(d,0,!1,P.A)
return z}}},R:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},iB:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},E:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},iE:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},iI:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},cS:{"^":"a3;a,b,c,d",
a8:function(a){var z=new Float32Array(H.bB(H.w(a,"$isd",[P.v],"$asd")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},az:{"^":"a3;a,b,c,d",
a8:function(a){var z=new Float32Array(H.bB(H.w(a,"$isd",[P.v],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},ah:{"^":"a3;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},ab:{"^":"a3;a,b,c,d",
dO:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
l7:function(a,b,c,d){return F.kG(c,a,d,b,new F.l8())},
kG:function(a,b,c,d,e){var z=F.l5(a,b,new F.kH(H.b(e,{func:1,ret:V.V,args:[P.v]}),d,b,c),null)
if(z==null)return
z.al()
z.h7(new F.iY(),new F.hx())
return z},
l5:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.b(c,{func:1,ret:-1,args:[F.ai,P.v,P.v]})
if(a<1)return
if(b<1)return
z=F.e2()
y=H.c([],[F.ai])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.ce(null,null,new V.aC(u,0,0,1),null,null,new V.N(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.d4(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.ce(null,null,new V.aC(o,n,m,1),null,null,new V.N(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.d4(d))}}z.d.fH(a+1,b+1,y)
return z},
l8:{"^":"u:35;",
$1:function(a){return new V.V(Math.cos(a),Math.sin(a),0)}},
kH:{"^":"u:36;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.da(y.$1(z),x)
x=J.da(y.$1(z+3.141592653589793/this.c),x).E(0,w)
x=new V.F(x.a,x.b,x.c)
v=x.q(0,Math.sqrt(x.w(x)))
u=new V.F(1,0,0)
y=v.am(!v.t(0,u)?new V.F(0,0,1):u)
t=y.q(0,Math.sqrt(y.w(y)))
y=t.am(v)
u=y.q(0,Math.sqrt(y.w(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.j(0,y*x)
x=t.j(0,r*x)
x=w.F(0,new V.V(y.a-x.a,y.b-x.b,y.c-x.c))
if(!J.P(a.f,x)){a.f=x
y=a.a
if(y!=null)y.a1()}}},
af:{"^":"a;0a,0b,0c,0d,0e",
aO:function(){if(!this.gd7()){C.a.N(this.a.a.d.b,this)
this.a.a.a1()}this.eX()
this.eY()
this.eZ()},
f5:function(a){this.a=a
C.a.h(a.d.b,this)},
f6:function(a){this.b=a
C.a.h(a.d.c,this)},
f7:function(a){this.c=a
C.a.h(a.d.d,this)},
eX:function(){var z=this.a
if(z!=null){C.a.N(z.d.b,this)
this.a=null}},
eY:function(){var z=this.b
if(z!=null){C.a.N(z.d.c,this)
this.b=null}},
eZ:function(){var z=this.c
if(z!=null){C.a.N(z.d.d,this)
this.c=null}},
gd7:function(){return this.a==null||this.b==null||this.c==null},
e9:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.F(0,0,0)
if(y!=null)v=v.F(0,y)
if(x!=null)v=v.F(0,x)
if(w!=null)v=v.F(0,w)
if(v.dA())return
return v.q(0,Math.sqrt(v.w(v)))},
ec:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.E(0,y)
z=new V.F(z.a,z.b,z.c)
v=z.q(0,Math.sqrt(z.w(z)))
z=w.E(0,y)
z=new V.F(z.a,z.b,z.c)
z=v.am(z.q(0,Math.sqrt(z.w(z))))
return z.q(0,Math.sqrt(z.w(z)))},
c_:function(){if(this.d!=null)return!0
var z=this.e9()
if(z==null){z=this.ec()
if(z==null)return!1}this.d=z
this.a.a.a1()
return!0},
e8:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.F(0,0,0)
if(y!=null)v=v.F(0,y)
if(x!=null)v=v.F(0,x)
if(w!=null)v=v.F(0,w)
if(v.dA())return
return v.q(0,Math.sqrt(v.w(v)))},
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
z=new V.F(z.a,z.b,z.c)
m=z.q(0,Math.sqrt(z.w(z)))
if(o.a-p.a<0)m=m.H(0)}else{l=(z-q.b)/n
z=r.E(0,u).j(0,l).F(0,u).E(0,x)
z=new V.F(z.a,z.b,z.c)
m=z.q(0,Math.sqrt(z.w(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.H(0)}z=this.d
if(z!=null){k=z.q(0,Math.sqrt(z.w(z)))
z=k.am(m)
z=z.q(0,Math.sqrt(z.w(z))).am(k)
m=z.q(0,Math.sqrt(z.w(z)))}return m},
bY:function(){if(this.e!=null)return!0
var z=this.e8()
if(z==null){z=this.eb()
if(z==null)return!1}this.e=z
this.a.a.a1()
return!0},
gfM:function(a){if(J.P(this.a,this.b))return!0
if(J.P(this.b,this.c))return!0
if(J.P(this.c,this.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
A:function(a){var z,y
if(this.gd7())return a+"disposed"
z=a+C.i.aq(J.al(this.a.e),0)+", "+C.i.aq(J.al(this.b.e),0)+", "+C.i.aq(J.al(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
K:function(){return this.A("")},
p:{
bK:function(a,b,c){var z,y,x
z=new F.af()
y=a.a
if(y==null)H.r(P.q("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.q("May not create a face with vertices attached to different shapes."))
z.f5(a)
z.f6(b)
z.f7(c)
C.a.h(z.a.a.d.b,z)
z.a.a.a1()
return z}}},
fP:{"^":"a;"},
i7:{"^":"fP;",
aQ:function(a,b,c){var z,y
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
dI:{"^":"a;"},
h5:{"^":"a;"},
iz:{"^":"h5;",
aQ:function(a,b,c){var z,y
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
dW:{"^":"a;"},
e1:{"^":"a;0a,0b,0c,0d,0e",
gn:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
al:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.al()||!1
if(!this.a.al())y=!1
z=this.e
if(!(z==null))z.as(0)
return y},
ek:function(a,b,c,d,e){var z,y,x
H.w(d,"$isd",[F.ai],"$asd")
H.w(e,"$isd",[P.A],"$asd")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
if(a.aQ(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
h7:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.c
for(y=this.a.c.length-1,z=[F.ai],x=[P.A];y>=0;--y){w=this.a.c
if(y>=w.length)return H.i(w,y)
v=w[y]
u=H.c([],z)
t=H.c([],x)
if(this.ek(a,v,y,u,t))b.h6(u)}this.a.v()
this.c.ck()
this.d.ck()
this.b.hn()
this.c.cl(new F.iz())
this.d.cl(new F.i7())
z=this.e
if(!(z==null))z.as(0)},
d0:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aq()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aG().a)!==0)++w
if((x&$.$get$aF().a)!==0)++w
if((x&$.$get$aH().a)!==0)++w
if((x&$.$get$aI().a)!==0)++w
if((x&$.$get$bx().a)!==0)++w
if((x&$.$get$by().a)!==0)++w
if((x&$.$get$b2().a)!==0)++w
if((x&$.$get$aE().a)!==0)++w
v=b.gct(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.v
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.dg])
for(r=0,q=0;q<w;++q){p=b.fJ(q)
o=p.gct(p)
C.a.W(s,q,new Z.dg(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.i(y,n)
m=y[n].h3(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.W(t,l,m[k]);++l}}r+=o}H.w(t,"$isd",[x],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bB(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cs(new Z.eD(34962,j),s,b)
i.b=H.c([],[Z.c5])
if(this.b.b.length!==0){x=P.A
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.v()
C.a.h(h,g.e)}f=Z.cT(y,34963,H.w(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.c5(0,h.length,f))}if(this.c.b.length!==0){x=P.A
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.v()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.v()
C.a.h(h,g.e)}f=Z.cT(y,34963,H.w(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.c5(1,h.length,f))}if(this.d.b.length!==0){x=P.A
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.v()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.v()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].c
g.a.a.v()
C.a.h(h,g.e)}f=Z.cT(y,34963,H.w(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.c5(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.n])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.A("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.A("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.A("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.A("   "))}return C.a.B(z,"\n")},
aH:function(a){var z=this.e
if(!(z==null))z.u(a)},
a1:function(){return this.aH(null)},
p:{
e2:function(){var z,y
z=new F.e1()
y=new F.iT(z)
y.b=!1
y.c=H.c([],[F.ai])
z.a=y
y=new F.i2(z)
y.b=H.c([],[F.dW])
z.b=y
y=new F.i1(z)
y.b=H.c([],[F.dI])
z.c=y
y=new F.i0(z)
y.b=H.c([],[F.af])
z.d=y
z.e=null
return z}}},
i0:{"^":"a;a,0b",
fG:function(a){var z,y,x,w,v
H.w(a,"$isd",[F.ai],"$asd")
z=H.c([],[F.af])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.bK(y,w,v))}return z},
fH:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isd",[F.ai],"$asd")
z=H.c([],[F.af])
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
C.a.h(z,F.bK(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bK(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bK(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bK(q,n,r))}u=!u}w=!w}return z},
gl:function(a){return this.b.length},
cl:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.k(0,w)
for(u=w-1;u>=0;--u){t=x.d.k(0,u)
if(a.aQ(0,v,t)){v.aO()
break}}}}},
ck:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
x=y[z]
y=x.gfM(x)
if(y)x.aO()}},
al:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.y)(z),++w)if(!z[w].c_())x=!1
return x},
bZ:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.y)(z),++w)if(!z[w].bY())x=!1
return x},
i:function(a){return this.K()},
A:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
K:function(){return this.A("")}},
i1:{"^":"a;a,0b",
gl:function(a){return this.b.length},
cl:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.i(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.k(0,w)
for(u=w-1;u>=0;--u){t=x.c.k(0,u)
if(a.aQ(0,v,t)){v.aO()
break}}}}},
ck:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
x=y[z]
y=J.P(x.a,x.b)
if(y)x.aO()}},
i:function(a){return this.K()},
A:function(a){var z,y,x,w
z=H.c([],[P.n])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.i(w,x)
C.a.h(z,w[x].A(a+(""+x+". ")))}return C.a.B(z,"\n")},
K:function(){return this.A("")}},
i2:{"^":"a;a,0b",
gl:function(a){return this.b.length},
hn:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aO()}},
i:function(a){return this.K()},
A:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
K:function(){return this.A("")}},
ai:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
d4:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.ce(this.cx,x,u,z,y,w,v,a,t)},
h3:function(a){var z,y
z=J.J(a)
if(z.t(a,$.$get$aq())){z=this.f
y=[P.v]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aG())){z=this.r
y=[P.v]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aF())){z=this.x
y=[P.v]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$aH())){z=this.y
y=[P.v]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.t(a,$.$get$aI())){z=this.z
y=[P.v]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$bx())){z=this.Q
y=[P.v]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.t(a,$.$get$by())){z=this.Q
y=[P.v]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(z.t(a,$.$get$b2()))return H.c([this.ch],[P.v])
else if(z.t(a,$.$get$aE())){z=this.cx
y=[P.v]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.v])},
c_:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.F(0,0,0)
this.d.J(0,new F.j2(z))
z=z.a
this.r=z.q(0,Math.sqrt(z.w(z)))
z=this.a
if(z!=null){z.a1()
z=this.a.e
if(!(z==null))z.as(0)}return!0},
bY:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.F(0,0,0)
this.d.J(0,new F.j1(z))
z=z.a
this.x=z.q(0,Math.sqrt(z.w(z)))
z=this.a
if(z!=null){z.a1()
z=this.a.e
if(!(z==null))z.as(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
A:function(a){var z,y,x
z=H.c([],[P.n])
C.a.h(z,C.i.aq(J.al(this.e),0))
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
x=C.a.B(z,", ")
return a+"{"+x+"}"},
K:function(){return this.A("")},
p:{
ce:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ai()
y=new F.j0(z)
y.b=H.c([],[F.dW])
z.b=y
y=new F.iX(z)
x=[F.dI]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.iU(z)
x=[F.af]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
z.d=y
h=$.$get$eA()
z.e=0
y=$.$get$aq()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aG().a)!==0?e:null
z.x=(x&$.$get$aF().a)!==0?b:null
z.y=(x&$.$get$aH().a)!==0?f:null
z.z=(x&$.$get$aI().a)!==0?g:null
z.Q=(x&$.$get$eB().a)!==0?c:null
z.ch=(x&$.$get$b2().a)!==0?i:0
z.cx=(x&$.$get$aE().a)!==0?a:null
return z}}},
j2:{"^":"u:5;a",
$1:function(a){var z,y
H.k(a,"$isaf")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
j1:{"^":"u:5;a",
$1:function(a){var z,y
H.k(a,"$isaf")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
iT:{"^":"a;a,0b,0c",
v:function(){var z,y,x,w
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
this.a.a1()
return!0},
fI:function(a,b,c,d,e,f,g,h,i){var z=F.ce(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
b8:function(a,b,c,d,e,f){return this.fI(a,null,b,c,null,d,e,f,0)},
gl:function(a){return this.c.length},
al:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)z[x].c_()
return!0},
bZ:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)z[x].bY()
return!0},
fL:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.q(0,Math.sqrt(u*u+t*t+s*s))
if(!J.P(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.u(null)}}}}return!0},
i:function(a){return this.K()},
A:function(a){var z,y,x,w
this.v()
z=H.c([],[P.n])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
K:function(){return this.A("")}},
iU:{"^":"a;a,0b,0c,0d",
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
J:function(a,b){H.b(b,{func:1,ret:-1,args:[F.af]})
C.a.J(this.b,b)
C.a.J(this.c,new F.iV(this,b))
C.a.J(this.d,new F.iW(this,b))},
i:function(a){return this.K()},
A:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
K:function(){return this.A("")}},
iV:{"^":"u:5;a,b",
$1:function(a){H.k(a,"$isaf")
if(!J.P(a.a,this.a))this.b.$1(a)}},
iW:{"^":"u:5;a,b",
$1:function(a){var z
H.k(a,"$isaf")
z=this.a
if(!J.P(a.a,z)&&!J.P(a.b,z))this.b.$1(a)}},
iX:{"^":"a;a,0b,0c",
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
A:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
K:function(){return this.A("")}},
iZ:{"^":"a;"},
iY:{"^":"iZ;",
aQ:function(a,b,c){return J.P(b.f,c.f)}},
j_:{"^":"a;"},
hx:{"^":"j_;",
h6:function(a){var z,y,x,w,v,u,t,s
H.w(a,"$isd",[F.ai],"$asd")
z=new V.F(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.F(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.q(0,Math.sqrt(z.w(z)))
for(y=a.length,w=z.a,v=z.b,u=z.c,u=w*w+v*v+u*u,x=0;x<a.length;a.length===y||(0,H.y)(a),++x){t=a[x]
s=z.q(0,Math.sqrt(u))
if(!J.P(t.r,s)){t.r=s
w=t.a
if(w!=null){w=w.e
if(!(w==null))w.u(null)}}}return}},
j0:{"^":"a;a,0b",
gl:function(a){return this.b.length},
i:function(a){return this.K()},
A:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
K:function(){return this.A("")}}}],["","",,O,{"^":"",hi:{"^":"bT;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gn:function(){var z=this.dy
if(z==null){z=D.D()
this.dy=z}return z},
X:[function(a){var z
H.k(a,"$isl")
z=this.dy
if(!(z==null))z.u(a)},function(){return this.X(null)},"e2","$1","$0","gby",0,2,0],
f1:[function(a){H.k(a,"$isl")
this.a=null
this.X(a)},function(){return this.f1(null)},"ia","$1","$0","gf0",0,2,0],
hM:[function(a,b){var z=V.as
z=new D.bL(a,H.w(b,"$ise",[z],"$ase"),this,[z])
z.b=!0
this.X(z)},"$2","gew",8,0,21],
hN:[function(a,b){var z=V.as
z=new D.bM(a,H.w(b,"$ise",[z],"$ase"),this,[z])
z.b=!0
this.X(z)},"$2","gex",8,0,21],
cI:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
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
h="MaterialLight_"+C.h.i(q.a)+C.h.i(p.a)+C.h.i(o.a)+C.h.i(n.a)+C.h.i(m.a)+C.h.i(l.a)+C.h.i(k.a)+C.h.i(j.a)+C.h.i(i.a)+"_"
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
a0=q===C.e||p===C.e||o===C.e||n===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$aq()
if(c){z=$.$get$aG()
a6=new Z.b1(a6.a|z.a)}if(b){z=$.$get$aF()
a6=new Z.b1(a6.a|z.a)}if(a){z=$.$get$aH()
a6=new Z.b1(a6.a|z.a)}if(a0){z=$.$get$aI()
a6=new Z.b1(a6.a|z.a)}if(a2){z=$.$get$aE()
a6=new Z.b1(a6.a|z.a)}return new A.hm(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
O:function(a,b){H.w(a,"$isd",[T.cO],"$asd")},
ab:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.C();){y=z.d
x=new V.F(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cn(x)}}},
dE:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.cI()
y=H.k(a.fr.k(0,z.an),"$isdP")
if(y==null){y=A.hj(z,a.a)
a.cZ(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.aF
z=b.e
if(!(z instanceof Z.cs)){b.e=null
z=null}if(z==null||!z.d.t(0,w)){z=x.r1
if(z)b.d.al()
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
if(!(t==null))t.as(0)}r=b.d.d0(new Z.eE(a.a),w)
r.ao($.$get$aq()).e=this.a.y.c
if(z)r.ao($.$get$aG()).e=this.a.Q.c
if(v)r.ao($.$get$aF()).e=this.a.z.c
if(x.rx)r.ao($.$get$aH()).e=this.a.ch.c
if(u)r.ao($.$get$aI()).e=this.a.cx.c
if(x.x1)r.ao($.$get$aE()).e=this.a.cy.c
b.e=r}z=T.cO
q=H.c([],[z])
this.a.U(a)
if(x.fx){v=this.a
u=a.dx
u=u.gR(u)
v=v.db
v.toString
v.a8(u.a3(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.gR(u)
t=a.dx
t=u.j(0,t.gR(t))
a.cx=t
u=t}v=v.dx
v.toString
v.a8(u.a3(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.ghl()
t=a.dx
t=u.j(0,t.gR(t))
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
v.a8(C.z.a3(u,!0))}if(x.aE>0){p=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,p)
for(v=[P.v],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.i(t,o)
t=t[o]
u.toString
H.k(t,"$isas")
u=u.k3
if(o>=u.length)return H.i(u,o)
u=u[o]
n=new Float32Array(H.bB(H.w(t.a3(0,!0),"$isd",v,"$asd")))
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
case C.e:this.O(q,this.f.e)
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
case C.e:this.O(q,this.r.e)
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
case C.d:this.O(q,this.x.d)
v=this.a
u=this.x.d
v.aa(v.aE,v.aF,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.e:this.O(q,this.x.e)
v=this.a
u=this.x.e
v.a4(v.an,v.aF,u)
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
case C.d:this.O(q,this.y.d)
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
case C.e:this.O(q,this.y.e)
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
case C.d:this.O(q,this.z.d)
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
case C.e:this.O(q,this.z.e)
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
m=v.gR(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
t=this.a.c3
if(l>=t.length)return H.i(t,l)
i=t[l]
t=m.cn(j.a)
s=t.a
h=t.b
g=t.c
g=t.q(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.dr
v.a.uniform1i(v.d,p)
v=a.db
m=v.gR(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
t=this.a.c4
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gaT(j)
s=i.b
h=t.gcp(t)
g=t.gcq(t)
t=t.gcr(t)
s.a.uniform3f(s.d,h,g,t)
t=m.b_(j.gaT(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gad(j)
g=i.d
h=t.gbr()
s=t.gb0()
t=t.gb9()
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
v=this.a.ds
v.a.uniform1i(v.d,p)
v=a.db
m=v.gR(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
t=this.a.c5
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gaT(j)
s=i.b
h=t.gcp(t)
g=t.gcq(t)
t=t.gcr(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gc2(j).ii()
g=i.c
h=t.gaB(t)
s=t.gaC(t)
t=t.gaD()
g.a.uniform3f(g.d,h,s,t)
t=m.b_(j.gaT(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gad(j)
s=i.e
h=t.gbr()
g=t.gb0()
t=t.gb9()
s.a.uniform3f(s.d,h,g,t)
t=j.gih()
g=i.f
g.a.uniform1f(g.d,t)
t=j.gig()
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
v=this.a.dt
v.a.uniform1i(v.d,p)
v=a.db
m=v.gR(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
s=this.a.c6
if(l>=s.length)return H.i(s,l)
i=s[l]
s=j.gaX()
H.w(q,"$isd",t,"$asd")
if(!C.a.ba(q,s)){s.sbo(0,q.length)
C.a.h(q,s)}s=j.gc2(j)
h=i.d
g=s.gaB(s)
f=s.gaC(s)
s=s.gaD()
h.a.uniform3f(h.d,g,f,s)
s=j.gbs()
f=i.b
g=s.gaB(s)
h=s.gaC(s)
s=s.gaD()
f.a.uniform3f(f.d,g,h,s)
s=j.gaU(j)
h=i.c
g=s.gaB(s)
f=s.gaC(s)
s=s.gaD()
h.a.uniform3f(h.d,g,f,s)
s=m.cn(j.gc2(j))
f=s.a
g=s.b
h=s.c
h=s.q(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gad(j)
g=i.f
f=h.gbr()
s=h.gb0()
h=h.gb9()
g.a.uniform3f(g.d,f,s,h)
h=j.gaX()
s=h.gbp(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gbp(h)
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.gbo(h))
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.du
v.a.uniform1i(v.d,p)
v=a.db
m=v.gR(v)
for(v=this.dx.y,u=v.length,t=[P.v],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
h=this.a.c7
if(l>=h.length)return H.i(h,l)
i=h[l]
h=j.gaX()
H.w(q,"$isd",s,"$asd")
if(!C.a.ba(q,h)){h.sbo(0,q.length)
C.a.h(q,h)}e=m.j(0,j.gR(j))
h=j.gR(j).b_(new V.V(0,0,0))
g=i.b
f=h.gcp(h)
d=h.gcq(h)
h=h.gcr(h)
g.a.uniform3f(g.d,f,d,h)
h=e.b_(new V.V(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.cb(0)
d=i.d
n=new Float32Array(H.bB(H.w(new V.c8(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a3(0,!0),"$isd",t,"$asd")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gad(j)
h=i.e
f=d.gbr()
g=d.gb0()
d=d.gb9()
h.a.uniform3f(h.d,f,g,d)
d=j.gaX()
h=d.gbp(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.ghG()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.ghF())
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
v=this.a.dv
v.a.uniform1i(v.d,p)
v=a.db
m=v.gR(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
t=this.a.c8
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gaX()
H.w(q,"$isd",z,"$asd")
if(!C.a.ba(q,t)){t.sbo(0,q.length)
C.a.h(q,t)}t=j.gaT(j)
s=i.b
h=t.gcp(t)
g=t.gcq(t)
t=t.gcr(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gc2(j)
g=i.c
h=t.gaB(t)
s=t.gaC(t)
t=t.gaD()
g.a.uniform3f(g.d,h,s,t)
t=j.gbs()
s=i.d
h=t.gaB(t)
g=t.gaC(t)
t=t.gaD()
s.a.uniform3f(s.d,h,g,t)
t=j.gaU(j)
g=i.e
h=t.gaB(t)
s=t.gaC(t)
t=t.gaD()
g.a.uniform3f(g.d,h,s,t)
t=m.b_(j.gaT(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gaX()
s=t.gbp(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gbp(t)
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.gbo(t))
t=i.x
t.a.uniform1i(t.d,0)}t=j.gad(j)
s=i.y
h=t.gbr()
g=t.gb0()
t=t.gb9()
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
case C.f:break
case C.d:this.O(q,this.Q.d)
z=this.a
v=this.Q.d
z.aa(z.de,z.bg,v)
break
case C.e:this.O(q,this.Q.e)
z=this.a
v=this.Q.e
z.a4(z.df,z.bg,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gR(v).cb(0)
a.Q=v}z=z.fy
z.toString
z.a8(v.a3(0,!0))}if(x.dy){this.O(q,this.ch)
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
case C.d:this.O(q,this.cx.d)
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
case C.e:this.O(q,this.cx.e)
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
case C.d:this.O(q,this.cy.d)
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
case C.e:this.O(q,this.cy.e)
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
case C.d:this.O(q,this.db.d)
z=this.a
u=this.db.d
z.aa(z.dm,z.bn,u)
u=this.a
z=this.db.f
u=u.bm
u.a.uniform1f(u.d,z)
break
case C.e:this.O(q,this.db.e)
z=this.a
u=this.db.e
z.a4(z.dn,z.bn,u)
u=this.a
z=this.db.f
u=u.bm
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o)q[o].U(a)
z=b.e
z.U(a)
z.a2(a)
z.aI(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o)q[o].aI(a)
z=this.a
z.toString
a.a.useProgram(null)
z.f.d6()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cI().an}},hk:{"^":"cF;0f,a,b,0c,0d,0e"},cF:{"^":"a;",
b4:["dT",function(){}]},hl:{"^":"cF;a,b,0c,0d,0e"},aX:{"^":"cF;0f,a,b,0c,0d,0e",
cS:function(a){var z,y
if(!J.P(this.f,a)){z=this.f
this.f=a
y=new D.G(this.b+".color",z,a,this,[V.T])
y.b=!0
this.a.X(y)}},
b4:["bx",function(){this.dT()
this.cS(new V.T(1,1,1))}],
sad:function(a,b){var z
if(this.c===C.b){this.c=C.f
this.b4()
z=this.a
z.a=null
z.X(null)}this.cS(b)}},hn:{"^":"aX;0ch,0f,a,b,0c,0d,0e",
f4:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.G(this.b+".refraction",y,a,this,[P.v])
z.b=!0
this.a.X(z)}},
b4:function(){this.bx()
this.f4(1)}},ho:{"^":"aX;0ch,0f,a,b,0c,0d,0e",
bP:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.G(this.b+".shininess",y,a,this,[P.v])
z.b=!0
this.a.X(z)}},
b4:function(){this.bx()
this.bP(100)}},i8:{"^":"bT;0a,0b,0c,0d,0e",
gn:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
X:[function(a){var z
H.k(a,"$isl")
z=this.e
if(!(z==null))z.u(a)},function(){return this.X(null)},"e2","$1","$0","gby",0,2,0],
dE:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.k(a.fr.k(0,"Skybox"),"$ise3")
if(z==null){y=a.a
z=new A.e3(y,"Skybox")
z.cw(y,"Skybox")
z.dz(0,$.ia,$.i9)
z.x=z.f.k(0,"posAttr")
z.y=H.f(z.r.k(0,"fov"),"$isR")
z.z=H.f(z.r.k(0,"ratio"),"$isR")
z.Q=H.f(z.r.k(0,"boxClr"),"$isE")
z.ch=H.f(z.r.k(0,"boxTxt"),"$isab")
z.cx=H.f(z.r.k(0,"viewMat"),"$isaz")
a.cZ(z)}this.a=z}if(b.e==null){y=b.d.d0(new Z.eE(a.a),$.$get$aq())
y.ao($.$get$aq()).e=this.a.x.c
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
w.ch.dO(x)
x=this.d
y=w.Q
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.gR(x).cb(0)
w=w.cx
w.toString
w.a8(x.a3(0,!0))
y=b.e
if(y instanceof Z.cs){y.U(a)
y.a2(a)
y.aI(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.d6()
y=this.c
if(y!=null)if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(34067,null)}}},bT:{"^":"a;"}}],["","",,T,{"^":"",cO:{"^":"cp;"},e9:{"^":"cO;0a,0b,0c,0d,0e",
gn:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z}},il:{"^":"a;a,0b,0c,0d,0e",
ax:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.a5
W.W(z,"load",H.b(new T.im(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
f2:function(a,b,c){var z,y,x,w
b=V.d8(b,2)
z=V.d8(a.width,2)
y=V.d8(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cu(null,null)
x.width=z
x.height=y
w=H.k(C.k.dK(x,"2d"),"$isdi")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.kF(w.getImageData(0,0,x.width,x.height))}}},im:{"^":"u:22;a,b,c,d,e,f,r",
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
if(!(x==null))x.fT()}++z.e}}}],["","",,V,{"^":"",fk:{"^":"a;",
aP:function(a,b){return!0},
i:function(a){return"all"},
$isbQ:1},bQ:{"^":"a;"},dO:{"^":"a;",
aP:["dS",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)if(z[x].aP(0,b))return!0
return!1}],
i:["cv",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.y)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbQ:1},bm:{"^":"dO;0a",
aP:function(a,b){return!this.dS(0,b)},
i:function(a){return"!["+this.cv(0)+"]"}},hZ:{"^":"a;0a",
dX:function(a){var z,y
if(a.a.length<=0)throw H.h(P.q("May not create a SetMatcher with zero characters."))
z=new H.aW(0,0,[P.A,P.a4])
for(y=new H.dL(a,a.gl(a),0,[H.aA(a,"t",0)]);y.C();)z.W(0,y.d,!0)
this.a=z},
aP:function(a,b){return this.a.d3(0,b)},
i:function(a){var z=this.a
return P.cM(new H.dK(z,[H.z(z,0)]),0,null)},
$isbQ:1,
p:{
a1:function(a){var z=new V.hZ()
z.dX(a)
return z}}},e5:{"^":"a;a,b,0c,0d",
gh8:function(a){return this.b},
B:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.eg(this.a.G(0,b))
w.a=H.c([],[V.bQ])
w.c=!1
C.a.h(this.c,w)
return w},
fV:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
if(w.aP(0,a))return w}return},
i:function(a){return this.b}},ed:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.fe(this.b,"\n","\\n")
y=H.fe(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},ee:{"^":"a;a,b,0c",
i:function(a){return this.b}},iv:{"^":"a;0a,0b,0c",
G:function(a,b){var z=this.a.k(0,b)
if(z==null){z=new V.e5(this,b)
z.c=H.c([],[V.eg])
this.a.W(0,b,z)}return z},
aY:function(a){var z,y
z=this.b.k(0,a)
if(z==null){z=new V.ee(this,a)
y=P.n
z.c=new H.aW(0,0,[y,y])
this.b.W(0,a,z)}return z},
hB:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.ed])
y=this.c
x=[P.A]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.b2(a,t)
r=y.fV(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cM(w,0,null)
throw H.h(P.q("Untokenizable string [state: "+y.gh8(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cM(w,0,null)
p=y.d
o=p.c.k(0,q)
u=new V.ed(o==null?p.b:o,q,t)}++t}}}},eg:{"^":"dO;b,0c,0a",
i:function(a){return this.b.b+": "+this.cv(0)}}}],["","",,X,{"^":"",c_:{"^":"a;",$isav:1},fU:{"^":"cN;0a,0b,0c,0d,0e,0f,0r,0x",
gn:function(){var z=this.x
if(z==null){z=D.D()
this.x=z}return z},
ag:function(a){var z=this.x
if(!(z==null))z.u(a)},
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
v=C.c.a6(w.a*y)
if(typeof x!=="number")return H.p(x)
u=C.c.a6(w.b*x)
t=C.c.a6(w.c*y)
a.c=t
w=C.c.a6(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
if(this.b){z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
s=16640}else s=256
a.a.clear(s)},
p:{
cy:function(a,b,c,d,e,f,g){var z,y
z=new X.fU()
y=new V.aC(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.e0(0,0,1,1)
z.r=y
return z}}},fV:{"^":"a;0a,0b",
gn:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
U:function(a){var z
a.cy.bq(V.aY())
z=V.aY()
a.db.bq(z)},
aI:function(a){a.cy.ar()
a.db.ar()},
$isav:1,
$isc_:1},hA:{"^":"a;0a,0b,0c,0d,0e",
gn:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
ag:[function(a){var z
H.k(a,"$isl")
z=this.e
if(!(z==null))z.u(a)},function(){return this.ag(null)},"hD","$1","$0","ge5",0,2,0],
U:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=a.cy
w=this.b
v=this.c
u=this.d
t=u-v
s=1/Math.tan(w*0.5)
x.bq(V.at(-s/(z/y),0,0,0,0,s,0,0,0,0,u/t,-u*v/t,0,0,1,0))
z=$.dV
if(z==null){z=V.dQ(new V.V(0,0,0),new V.F(0,1,0),new V.F(0,0,-1))
$.dV=z
r=z}else r=z
z=this.a
if(z!=null){q=z.aJ(0,a,this)
if(q!=null)r=q.j(0,r)}a.db.bq(r)},
aI:function(a){a.cy.ar()
a.db.ar()},
$isav:1,
$isc_:1,
p:{
dU:function(a,b,c,d){var z,y,x,w
z=new X.hA()
z.b=1.0471975511965976
z.c=0.1
z.d=2000
if(null!=c){y=z.a
z.a=c
if(c!=null){x=c.gn()
x.toString
w=H.b(z.ge5(),{func:1,ret:-1,args:[D.l]})
C.a.h(x.a,w)}x=new D.G("mover",y,z.a,z,[U.aa])
x.b=!0
z.ag(x)}x=z.b
if(!$.m.$2(x,b)){y=z.b
z.b=b
x=new D.G("fov",y,b,z,[P.v])
x.b=!0
z.ag(x)}x=z.c
if(!$.m.$2(x,d)){y=z.c
z.c=d
x=new D.G("near",y,d,z,[P.v])
x.b=!0
z.ag(x)}x=z.d
if(!$.m.$2(x,a)){y=z.d
z.d=a
x=new D.G("far",y,a,z,[P.v])
x.b=!0
z.ag(x)}return z}}},cN:{"^":"a;"}}],["","",,V,{"^":"",
l3:function(a){P.iu(C.w,new V.l4(a))},
l4:{"^":"u:38;a",
$1:function(a){H.k(a,"$isb_")
P.d9(C.c.dH(this.a.gfX(),2)+" fps")}},
i3:{"^":"a;0a,0b",
dY:function(a,b){var z,y,x,w,v,u,t
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
W.W(z,"scroll",H.b(new V.i6(x),{func:1,ret:-1,args:[t]}),!1,t)},
cY:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$isd",[P.n],"$asd")
this.f9()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.hB(C.a.h1(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v){u=x[v]
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
if(H.fd(s,"|",0)){r=s.split("|")
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
z=new V.iv()
y=P.n
z.a=new H.aW(0,0,[y,V.e5])
z.b=new H.aW(0,0,[y,V.ee])
z.c=z.G(0,"Start")
y=z.G(0,"Start").B(0,"Bold")
x=V.a1(new H.a_("*"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Bold").B(0,"Bold")
x=new V.bm()
w=[V.bQ]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a1(new H.a_("*"))
C.a.h(x.a,y)
y=z.G(0,"Bold").B(0,"BoldEnd")
x=V.a1(new H.a_("*"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Start").B(0,"Italic")
x=V.a1(new H.a_("_"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Italic").B(0,"Italic")
x=new V.bm()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a1(new H.a_("_"))
C.a.h(x.a,y)
y=z.G(0,"Italic").B(0,"ItalicEnd")
x=V.a1(new H.a_("_"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Start").B(0,"Code")
x=V.a1(new H.a_("`"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Code").B(0,"Code")
x=new V.bm()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a1(new H.a_("`"))
C.a.h(x.a,y)
y=z.G(0,"Code").B(0,"CodeEnd")
x=V.a1(new H.a_("`"))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"Start").B(0,"LinkHead")
x=V.a1(new H.a_("["))
C.a.h(y.a,x)
y.c=!0
y=z.G(0,"LinkHead").B(0,"LinkTail")
x=V.a1(new H.a_("|"))
C.a.h(y.a,x)
x=z.G(0,"LinkHead").B(0,"LinkEnd")
y=V.a1(new H.a_("]"))
C.a.h(x.a,y)
x.c=!0
x=z.G(0,"LinkHead").B(0,"LinkHead")
y=new V.bm()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a1(new H.a_("|]"))
C.a.h(y.a,x)
x=z.G(0,"LinkTail").B(0,"LinkEnd")
y=V.a1(new H.a_("]"))
C.a.h(x.a,y)
x.c=!0
x=z.G(0,"LinkTail").B(0,"LinkTail")
y=new V.bm()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a1(new H.a_("|]"))
C.a.h(y.a,x)
C.a.h(z.G(0,"Start").B(0,"Other").a,new V.fk())
x=z.G(0,"Other").B(0,"Other")
y=new V.bm()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a1(new H.a_("*_`["))
C.a.h(y.a,x)
x=z.G(0,"BoldEnd")
x.d=x.a.aY("Bold")
x=z.G(0,"ItalicEnd")
x.d=x.a.aY("Italic")
x=z.G(0,"CodeEnd")
x.d=x.a.aY("Code")
x=z.G(0,"LinkEnd")
x.d=x.a.aY("Link")
x=z.G(0,"Other")
x.d=x.a.aY("Other")
this.b=z},
p:{
i4:function(a,b){var z=new V.i3()
z.dY(a,!0)
return z}}},
i6:{"^":"u:22;a",
$1:function(a){P.eb(C.l,new V.i5(this.a))}},
i5:{"^":"u:2;a",
$0:function(){var z,y,x
z=C.c.a6(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}}}],["","",,B,{"^":"",
f9:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
z=V.i4("Test 013",!0)
y=W.cu(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.n]
z.cY(H.c(["Test of sky box and cover pass."],x))
z.cY(H.c(["\xab[Back to Tests|../]"],x))
w=document.getElementById("testCanvas")
if(w==null)H.r(P.q("Failed to find an element with the identifier, testCanvas."))
v=E.is(w,!0,!0,!0,!1)
u=new U.dA()
z=U.aa
u.b1(z)
u.aK(u.geu(),u.geP())
u.e=null
u.f=V.aY()
u.r=0
x=v.r
t=new U.iP()
s=U.cx()
s.sco(0,!0)
s.scd(6.283185307179586)
s.scf(0)
s.sa_(0,0)
s.sce(100)
s.sL(0)
s.sc1(0.5)
t.b=s
s=s.gn()
s.toString
r={func:1,ret:-1,args:[D.l]}
q=H.b(t.gay(),r)
C.a.h(s.a,q)
s=U.cx()
s.sco(0,!0)
s.scd(6.283185307179586)
s.scf(0)
s.sa_(0,0)
s.sce(100)
s.sL(0)
s.sc1(0.5)
t.c=s
C.a.h(s.gn().a,q)
t.d=null
t.e=!1
t.f=!1
t.r=!1
t.x=2.5
t.y=2.5
t.z=2
t.Q=4
t.cx=!1
t.ch=!1
t.cy=0
t.db=0
t.dx=null
t.dy=0
t.fr=null
t.fx=null
p=new X.au(!1,!1,!1)
o=t.d
t.d=p
s=[X.au]
q=new D.G("modifiers",o,p,t,s)
q.b=!0
t.I(q)
q=t.f
if(q!==!1){t.f=!1
q=new D.G("invertX",q,!1,t,[P.a4])
q.b=!0
t.I(q)}q=t.r
if(q!==!1){t.r=!1
q=new D.G("invertY",q,!1,t,[P.a4])
q.b=!0
t.I(q)}t.aM(x)
u.h(0,t)
x=v.r
t=new U.iO()
q=U.cx()
q.sco(0,!0)
q.scd(6.283185307179586)
q.scf(0)
q.sa_(0,0)
q.sce(100)
q.sL(0)
q.sc1(0.2)
t.b=q
q=q.gn()
q.toString
n=H.b(t.gay(),r)
C.a.h(q.a,n)
t.c=null
t.d=!1
t.e=2.5
t.f=2
t.r=4
t.y=!1
t.x=!1
t.z=0
t.Q=null
t.ch=0
t.cx=null
t.cy=null
p=new X.au(!0,!1,!1)
o=t.c
t.c=p
q=new D.G("modifiers",o,p,t,s)
q.b=!0
t.I(q)
t.aM(x)
u.h(0,t)
x=v.r
t=new U.iQ()
t.c=0.01
t.d=0
t.e=0
p=new X.au(!1,!1,!1)
t.b=p
s=new D.G("modifiers",null,p,t,s)
s.b=!0
t.I(s)
t.aM(x)
u.h(0,t)
u.h(0,U.dm(V.at(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
m=X.dU(2000,1.0471975511965976,u,0.1)
l=X.cy(!0,!0,!1,null,2000,null,0)
if(l.b){l.b=!1
x=new D.G("clearColor",!0,!1,l,[P.a4])
x.b=!0
l.ag(x)}k=E.dy(null,!0,null,"",null,null)
k.sbu(0,F.l7(30,1,15,0.5))
j=new O.hi()
x=O.cw(V.as)
j.e=x
x.aK(j.gew(),j.gex())
x=new O.aX(j,"emission")
x.c=C.b
x.f=new V.T(0,0,0)
j.f=x
x=new O.aX(j,"ambient")
x.c=C.b
x.f=new V.T(0,0,0)
j.r=x
x=new O.aX(j,"diffuse")
x.c=C.b
x.f=new V.T(0,0,0)
j.x=x
x=new O.aX(j,"invDiffuse")
x.c=C.b
x.f=new V.T(0,0,0)
j.y=x
x=new O.ho(j,"specular")
x.c=C.b
x.f=new V.T(0,0,0)
x.ch=100
j.z=x
x=new O.hl(j,"bump")
x.c=C.b
j.Q=x
j.ch=null
x=new O.aX(j,"reflect")
x.c=C.b
x.f=new V.T(0,0,0)
j.cx=x
x=new O.hn(j,"refract")
x.c=C.b
x.f=new V.T(0,0,0)
x.ch=1
j.cy=x
x=new O.hk(j,"alpha")
x.c=C.b
x.f=1
j.db=x
x=new D.h4()
x.b1(D.U)
x.e=H.c([],[D.c1])
x.f=H.c([],[D.hC])
x.r=H.c([],[D.ib])
x.x=H.c([],[D.io])
x.y=H.c([],[D.ip])
x.z=H.c([],[D.iq])
x.Q=null
x.ch=null
x.cs(x.gev(),x.geO(),x.geQ())
j.dx=x
t=x.Q
if(t==null){t=D.D()
x.Q=t
x=t}else x=t
t=H.b(j.gf0(),r)
C.a.h(x.a,t)
t=j.dx
x=t.ch
if(x==null){x=D.D()
t.ch=x}t=H.b(j.gby(),r)
C.a.h(x.a,t)
j.dy=null
t=j.dx
x=U.dm(V.dQ(new V.V(0,0,0),new V.F(0,1,0),new V.F(0,-1,-1)))
i=new V.T(1,1,1)
s=new D.c1()
s.c=new V.T(1,1,1)
s.a=new V.F(0,0,1)
o=s.b
s.b=x
x=x.gn()
x.toString
q=H.b(s.ge1(),r)
C.a.h(x.a,q)
z=new D.G("mover",o,s.b,s,[z])
z.b=!0
s.au(z)
if(!s.c.t(0,i)){o=s.c
s.c=i
z=new D.G("color",o,i,s,[V.T])
z.b=!0
s.au(z)}t.h(0,s)
z=j.r
z.sad(0,new V.T(0,0,1))
z=j.x
z.sad(0,new V.T(0,1,0))
z=j.z
z.sad(0,new V.T(1,0,0))
z=j.z
if(z.c===C.b){z.c=C.f
z.bx()
z.bP(100)
x=z.a
x.a=null
x.X(null)}z.bP(10)
z=v.f
x=z.a
h=x.createTexture()
x.bindTexture(34067,h)
x.texParameteri(34067,10242,10497)
x.texParameteri(34067,10243,10497)
x.texParameteri(34067,10241,9729)
x.texParameteri(34067,10240,9729)
x.bindTexture(34067,null)
g=new T.e9()
g.a=0
g.b=h
g.c=!1
g.d=0
z.ax(g,h,"../resources/maskonaive/posx.jpg",34069,!1,!1)
z.ax(g,h,"../resources/maskonaive/negx.jpg",34070,!1,!1)
z.ax(g,h,"../resources/maskonaive/posy.jpg",34071,!1,!1)
z.ax(g,h,"../resources/maskonaive/negy.jpg",34072,!1,!1)
z.ax(g,h,"../resources/maskonaive/posz.jpg",34073,!1,!1)
z.ax(g,h,"../resources/maskonaive/negz.jpg",34074,!1,!1)
f=new M.fz()
f.saN(null)
f.saV(0,null)
f.saW(null)
z=E.dy(null,!0,null,"",null,null)
e=F.e2()
x=e.a
t=new V.F(-1,-1,1)
t=t.q(0,Math.sqrt(t.w(t)))
d=x.b8(new V.bo(1,2,4,6),new V.aC(1,0,0,1),new V.V(-1,-1,0),new V.N(0,1),t,null)
x=e.a
t=new V.F(1,-1,1)
t=t.q(0,Math.sqrt(t.w(t)))
c=x.b8(new V.bo(0,3,4,6),new V.aC(0,0,1,1),new V.V(1,-1,0),new V.N(1,1),t,null)
x=e.a
t=new V.F(1,1,1)
t=t.q(0,Math.sqrt(t.w(t)))
b=x.b8(new V.bo(0,2,5,6),new V.aC(0,1,0,1),new V.V(1,1,0),new V.N(1,0),t,null)
x=e.a
t=new V.F(-1,1,1)
t=t.q(0,Math.sqrt(t.w(t)))
a=x.b8(new V.bo(0,2,4,7),new V.aC(1,1,0,1),new V.V(-1,1,0),new V.N(0,0),t,null)
e.d.fG(H.c([d,c,b,a],[F.ai]))
e.al()
z.sbu(0,e)
f.d=z
f.e=null
z=new O.i8()
z.b=1.0471975511965976
o=z.c
z.c=g
x=g.gn()
x.toString
t=H.b(z.gby(),r)
C.a.h(x.a,t)
x=new D.G("boxTexture",o,z.c,z,[T.e9])
x.b=!0
z.X(x)
i=new V.T(1,1,1)
if(!J.P(z.d,i)){o=z.d
z.d=i
x=new D.G("boxColor",o,i,z,[V.T])
x.b=!0
z.X(x)}z.e=null
f.saW(z)
f.saV(0,l)
f.saN(m)
a0=new M.fM()
z=O.cw(E.aD)
a0.d=z
z.aK(a0.gez(),a0.geA())
a0.e=null
a0.f=null
a0.r=null
a0.x=null
a0.saN(null)
a0.saV(0,null)
a0.saW(null)
a0.saN(m)
a0.saW(j)
a0.saV(0,l)
a0.d.h(0,k)
z=M.aw
x=H.c([f,a0],[z])
t=new M.fx()
t.b1(z)
t.e=!1
t.f=null
t.aK(t.geR(),t.geS())
t.bS(0,x)
z=v.d
if(z!==t){if(z!=null){z=z.gn()
z.toString
x=H.b(v.gcA(),r)
C.a.N(z.a,x)}v.d=t
z=t.gn()
z.toString
r=H.b(v.gcA(),r)
C.a.h(z.a,r)
v.e_()}V.l3(v)}},1]]
setupProgram(dart,0,0)
J.J=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dE.prototype
return J.dD.prototype}if(typeof a=="string")return J.c6.prototype
if(a==null)return J.dF.prototype
if(typeof a=="boolean")return J.h_.prototype
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bO.prototype
return a}if(a instanceof P.a)return a
return J.cl(a)}
J.bW=function(a){if(typeof a=="string")return J.c6.prototype
if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bO.prototype
return a}if(a instanceof P.a)return a
return J.cl(a)}
J.d3=function(a){if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bO.prototype
return a}if(a instanceof P.a)return a
return J.cl(a)}
J.kL=function(a){if(typeof a=="number")return J.bN.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cd.prototype
return a}
J.kM=function(a){if(typeof a=="number")return J.bN.prototype
if(typeof a=="string")return J.c6.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cd.prototype
return a}
J.ck=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bO.prototype
return a}if(a instanceof P.a)return a
return J.cl(a)}
J.P=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.J(a).t(a,b)}
J.fg=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kL(a).a7(a,b)}
J.da=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kM(a).j(a,b)}
J.fh=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kV(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bW(a).k(a,b)}
J.fi=function(a,b,c,d){return J.ck(a).cX(a,b,c,d)}
J.co=function(a,b,c){return J.bW(a).fN(a,b,c)}
J.db=function(a,b){return J.d3(a).D(a,b)}
J.fj=function(a,b){return J.d3(a).J(a,b)}
J.aS=function(a){return J.J(a).gS(a)}
J.bI=function(a){return J.d3(a).gV(a)}
J.ba=function(a){return J.bW(a).gl(a)}
J.al=function(a){return J.J(a).i(a)}
I.d6=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.ct.prototype
C.x=J.o.prototype
C.a=J.aV.prototype
C.y=J.dD.prototype
C.h=J.dE.prototype
C.z=J.dF.prototype
C.c=J.bN.prototype
C.i=J.c6.prototype
C.G=J.bO.prototype
C.I=H.hv.prototype
C.J=W.hw.prototype
C.p=J.hB.prototype
C.K=P.cJ.prototype
C.m=J.cd.prototype
C.r=W.bz.prototype
C.t=W.j5.prototype
C.u=new P.hz()
C.v=new P.iS()
C.j=new P.jS()
C.b=new A.c0(0,"ColorSourceType.None")
C.f=new A.c0(1,"ColorSourceType.Solid")
C.d=new A.c0(2,"ColorSourceType.Texture2D")
C.e=new A.c0(3,"ColorSourceType.TextureCube")
C.l=new P.aT(0)
C.w=new P.aT(5e6)
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
C.H=H.c(I.d6([0,0,65498,45055,65535,34815,65534,18431]),[P.A])
C.q=new P.iR(!1)
$.ar=0
$.bb=null
$.de=null
$.cX=!1
$.f6=null
$.f0=null
$.fc=null
$.cj=null
$.cm=null
$.d4=null
$.b4=null
$.bC=null
$.bD=null
$.cY=!1
$.O=C.j
$.dv=null
$.du=null
$.dt=null
$.ds=null
$.m=V.hp()
$.ia="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.i9="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.dV=null
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
I.$lazy(y,x,w)}})(["dr","$get$dr",function(){return H.f5("_$dart_dartClosure")},"cC","$get$cC",function(){return H.f5("_$dart_js")},"eh","$get$eh",function(){return H.ax(H.cc({
toString:function(){return"$receiver$"}}))},"ei","$get$ei",function(){return H.ax(H.cc({$method$:null,
toString:function(){return"$receiver$"}}))},"ej","$get$ej",function(){return H.ax(H.cc(null))},"ek","$get$ek",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eo","$get$eo",function(){return H.ax(H.cc(void 0))},"ep","$get$ep",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"em","$get$em",function(){return H.ax(H.en(null))},"el","$get$el",function(){return H.ax(function(){try{null.$method$}catch(z){return z.message}}())},"er","$get$er",function(){return H.ax(H.en(void 0))},"eq","$get$eq",function(){return H.ax(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cU","$get$cU",function(){return P.j6()},"bE","$get$bE",function(){return[]},"eV","$get$eV",function(){return P.hP("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dp","$get$dp",function(){return{}},"eC","$get$eC",function(){return Z.aj(0)},"eA","$get$eA",function(){return Z.aj(511)},"aq","$get$aq",function(){return Z.aj(1)},"aG","$get$aG",function(){return Z.aj(2)},"aF","$get$aF",function(){return Z.aj(4)},"aH","$get$aH",function(){return Z.aj(8)},"aI","$get$aI",function(){return Z.aj(16)},"bx","$get$bx",function(){return Z.aj(32)},"by","$get$by",function(){return Z.aj(64)},"eB","$get$eB",function(){return Z.aj(96)},"b2","$get$b2",function(){return Z.aj(128)},"aE","$get$aE",function(){return Z.aj(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.l]},{func:1,ret:-1,args:[D.l]},{func:1,ret:P.I},{func:1,ret:-1},{func:1,ret:-1,args:[W.ao]},{func:1,ret:P.I,args:[F.af]},{func:1,ret:-1,args:[P.n,,]},{func:1,ret:-1,args:[W.a5]},{func:1,ret:-1,args:[P.A,[P.e,E.aD]]},{func:1,ret:P.I,args:[D.l]},{func:1,ret:-1,args:[W.b0]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.I,args:[,,]},{func:1,ret:P.n,args:[P.A]},{func:1,ret:P.I,args:[,]},{func:1,args:[,]},{func:1,ret:-1,args:[W.bj]},{func:1,ret:-1,args:[P.A,[P.e,D.U]]},{func:1,ret:P.v},{func:1,ret:-1,args:[P.A,[P.e,U.aa]]},{func:1,ret:-1,args:[P.A,[P.e,M.aw]]},{func:1,ret:-1,args:[P.A,[P.e,V.as]]},{func:1,ret:P.I,args:[W.a5]},{func:1,ret:P.I,args:[{func:1,ret:-1}]},{func:1,ret:P.a4,args:[W.K]},{func:1,ret:W.a0,args:[W.K]},{func:1,args:[,P.n]},{func:1,args:[P.n]},{func:1,ret:P.I,args:[P.X]},{func:1,ret:P.I,args:[{func:1,ret:-1,args:[D.l]}]},{func:1,ret:-1,args:[P.a],opt:[P.ap]},{func:1,ret:-1,args:[W.bz]},{func:1,ret:P.a4,args:[P.v,P.v]},{func:1,ret:P.a4,args:[[P.e,D.U]]},{func:1,ret:P.I,args:[,],opt:[,]},{func:1,ret:V.V,args:[P.v]},{func:1,ret:P.I,args:[F.ai,P.v,P.v]},{func:1,ret:[P.aJ,,],args:[,]},{func:1,ret:P.I,args:[P.b_]},{func:1,ret:-1,args:[P.n,P.n]}]
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
if(x==y)H.l6(d||a)
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
Isolate.d6=a.d6
Isolate.d1=a.d1
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
if(typeof dartMainRunner==="function")dartMainRunner(B.f9,[])
else B.f9([])})})()
//# sourceMappingURL=test.dart.js.map
