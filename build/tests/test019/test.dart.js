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
if(a1==="q"){processStatics(init.statics[b2]=b3.q,b4)
delete b3.q}else if(a2===43){w[g]=a1.substring(1)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.da"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.da"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.da(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.db=function(){}
var dart=[["","",,H,{"^":"",m1:{"^":"a;a"}}],["","",,J,{"^":"",
J:function(a){return void 0},
dh:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cp:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.de==null){H.kT()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.h(P.eF("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cI()]
if(v!=null)return v
v=H.kY(a)
if(v!=null)return v
if(typeof a=="function")return C.H
y=Object.getPrototypeOf(a)
if(y==null)return C.p
if(y===Object.prototype)return C.p
if(typeof w=="function"){Object.defineProperty(w,$.$get$cI(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
m:{"^":"a;",
u:function(a,b){return a===b},
gS:function(a){return H.bt(a)},
i:["dU",function(a){return"Instance of '"+H.aZ(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|ArrayBuffer|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NodeIterator|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCSessionDescription|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TreeWalker|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
h7:{"^":"m;",
i:function(a){return String(a)},
gS:function(a){return a?519018:218159},
$isa6:1},
dO:{"^":"m;",
u:function(a,b){return null==b},
i:function(a){return"null"},
gS:function(a){return 0},
$isI:1},
cJ:{"^":"m;",
gS:function(a){return 0},
i:["dV",function(a){return String(a)}]},
hH:{"^":"cJ;"},
d1:{"^":"cJ;"},
bR:{"^":"cJ;",
i:function(a){var z=a[$.$get$dz()]
if(z==null)return this.dV(a)
return"JavaScript function for "+H.j(J.a7(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscE:1},
aV:{"^":"m;$ti",
h:function(a,b){H.C(b,H.z(a,0))
if(!!a.fixed$length)H.r(P.ae("add"))
a.push(b)},
U:function(a,b){var z
if(!!a.fixed$length)H.r(P.ae("remove"))
for(z=0;z<a.length;++z)if(J.U(a[z],b)){a.splice(z,1)
return!0}return!1},
bP:function(a,b){var z,y
H.w(b,"$isd",[H.z(a,0)],"$asd")
if(!!a.fixed$length)H.r(P.ae("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.x)(b),++y)a.push(b[y])},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.z(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.h(P.bd(a))}},
B:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.Z(z,y,H.j(a[y]))
return z.join(b)},
fZ:function(a){return this.B(a,"")},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
bw:function(a,b,c){var z=a.length
if(b>z)throw H.h(P.ai(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.h(P.ai(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.z(a,0)])
return H.c(a.slice(b,c),[H.z(a,0)])},
gcb:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.h(H.h5())},
aR:function(a,b){var z
for(z=0;z<a.length;++z)if(J.U(a[z],b))return!0
return!1},
i:function(a){return P.cF(a,"[","]")},
gX:function(a){return new J.am(a,a.length,0,[H.z(a,0)])},
gS:function(a){return H.bt(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.r(P.ae("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.c2(b,"newLength",null))
if(b<0)throw H.h(P.ai(b,0,null,"newLength",null))
a.length=b},
Z:function(a,b,c){H.Z(b)
H.C(c,H.z(a,0))
if(!!a.immutable$list)H.r(P.ae("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.aQ(a,b))
if(b>=a.length||b<0)throw H.h(H.aQ(a,b))
a[b]=c},
$isd:1,
$isf:1,
q:{
h6:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.c2(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.ai(a,0,4294967295,"length",null))
return J.dL(new Array(a),b)},
dL:function(a,b){return J.bm(H.c(a,[b]))},
bm:function(a){H.bM(a)
a.fixed$length=Array
return a}}},
m0:{"^":"aV;$ti"},
am:{"^":"a;a,b,c,0d,$ti",
gN:function(a){return this.d},
D:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.h(H.x(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
cc:{"^":"m;",
hu:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.h(P.ae(""+a+".toInt()"))},
c8:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.h(P.ae(""+a+".floor()"))},
ad:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.ae(""+a+".round()"))},
dJ:function(a,b){var z,y
if(b>20)throw H.h(P.ai(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gS:function(a){return a&0x1FFFFFFF},
dP:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
dX:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cW(a,b)},
a0:function(a,b){return(a|0)===a?a/b|0:this.cW(a,b)},
cW:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.h(P.ae("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
b9:function(a,b){var z
if(a>0)z=this.f9(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
f9:function(a,b){return b>31?0:a>>>b},
a9:function(a,b){if(typeof b!=="number")throw H.h(H.aP(b))
return a<b},
$isv:1,
$isS:1},
dN:{"^":"cc;",$isA:1},
dM:{"^":"cc;"},
cH:{"^":"m;",
bY:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.aQ(a,b))
if(b<0)throw H.h(H.aQ(a,b))
if(b>=a.length)H.r(H.aQ(a,b))
return a.charCodeAt(b)},
b6:function(a,b){if(b>=a.length)throw H.h(H.aQ(a,b))
return a.charCodeAt(b)},
F:function(a,b){H.T(b)
if(typeof b!=="string")throw H.h(P.c2(b,null,null))
return a+b},
bx:function(a,b,c){H.Z(c)
if(c==null)c=a.length
if(b<0)throw H.h(P.cg(b,null,null))
if(b>c)throw H.h(P.cg(b,null,null))
if(c>a.length)throw H.h(P.cg(c,null,null))
return a.substring(b,c)},
cr:function(a,b){return this.bx(a,b,null)},
l:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.v)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hb:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.l(c,z)+a},
a8:function(a,b){return this.hb(a,b," ")},
fL:function(a,b,c){if(c>a.length)throw H.h(P.ai(c,0,a.length,null,null))
return H.fl(a,b,c)},
i:function(a){return a},
gS:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gk:function(a){return a.length},
$ise1:1,
$iso:1}}],["","",,H,{"^":"",
h5:function(){return new P.ii("No element")},
a_:{"^":"iS;a",
gk:function(a){return this.a.length},
j:function(a,b){return C.h.bY(this.a,b)},
$aseG:function(){return[P.A]},
$ast:function(){return[P.A]},
$asd:function(){return[P.A]},
$asf:function(){return[P.A]}},
fR:{"^":"d;"},
dT:{"^":"a;a,b,c,0d,$ti",
gN:function(a){return this.d},
D:function(){var z,y,x,w
z=this.a
y=J.c_(z)
x=y.gk(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.h(P.bd(z))
w=this.c
if(typeof x!=="number")return H.p(x)
if(w>=x){this.d=null
return!1}this.d=y.E(z,w);++this.c
return!0}},
hn:{"^":"d;a,b,$ti",
gX:function(a){return new H.ho(J.bN(this.a),this.b,this.$ti)},
gk:function(a){return J.bb(this.a)},
E:function(a,b){return this.b.$1(J.dk(this.a,b))},
$asd:function(a,b){return[b]}},
ho:{"^":"cG;0a,b,c,$ti",
D:function(){var z=this.b
if(z.D()){this.a=this.c.$1(z.gN(z))
return!0}this.a=null
return!1},
gN:function(a){return this.a},
$ascG:function(a,b){return[b]}},
j7:{"^":"d;a,b,$ti",
gX:function(a){return new H.j8(J.bN(this.a),this.b,this.$ti)}},
j8:{"^":"cG;a,b,$ti",
D:function(){var z,y
for(z=this.a,y=this.b;z.D();)if(y.$1(z.gN(z)))return!0
return!1},
gN:function(a){var z=this.a
return z.gN(z)}},
c9:{"^":"a;$ti"},
eG:{"^":"a;$ti"},
iS:{"^":"cd+eG;"}}],["","",,H,{"^":"",
kO:function(a){return init.types[H.Z(a)]},
kW:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.J(a).$isB},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a7(a)
if(typeof z!=="string")throw H.h(H.aP(a))
return z},
bt:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aZ:function(a){var z,y,x,w,v,u,t,s,r
z=J.J(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.y||!!J.J(a).$isd1){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.h.b6(w,0)===36)w=C.h.cr(w,1)
r=H.df(H.bM(H.aR(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
e4:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
hR:function(a){var z,y,x,w
z=H.c([],[P.A])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.x)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.h(H.aP(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.e.b9(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.h(H.aP(w))}return H.e4(z)},
e5:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.h(H.aP(x))
if(x<0)throw H.h(H.aP(x))
if(x>65535)return H.hR(a)}return H.e4(a)},
hQ:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.e.b9(z,10))>>>0,56320|z&1023)}throw H.h(P.ai(a,0,1114111,null,null))},
a9:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hP:function(a){return a.b?H.a9(a).getUTCFullYear()+0:H.a9(a).getFullYear()+0},
hN:function(a){return a.b?H.a9(a).getUTCMonth()+1:H.a9(a).getMonth()+1},
hJ:function(a){return a.b?H.a9(a).getUTCDate()+0:H.a9(a).getDate()+0},
hK:function(a){return a.b?H.a9(a).getUTCHours()+0:H.a9(a).getHours()+0},
hM:function(a){return a.b?H.a9(a).getUTCMinutes()+0:H.a9(a).getMinutes()+0},
hO:function(a){return a.b?H.a9(a).getUTCSeconds()+0:H.a9(a).getSeconds()+0},
hL:function(a){return a.b?H.a9(a).getUTCMilliseconds()+0:H.a9(a).getMilliseconds()+0},
p:function(a){throw H.h(H.aP(a))},
i:function(a,b){if(a==null)J.bb(a)
throw H.h(H.aQ(a,b))},
aQ:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aB(!0,b,"index",null)
z=H.Z(J.bb(a))
if(!(b<0)){if(typeof z!=="number")return H.p(z)
y=b>=z}else y=!0
if(y)return P.M(b,a,"index",null,z)
return P.cg(b,"index",null)},
kK:function(a,b,c){if(a>c)return new P.cf(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cf(a,c,!0,b,"end","Invalid value")
return new P.aB(!0,b,"end",null)},
aP:function(a){return new P.aB(!0,a,null,null)},
kF:function(a){if(typeof a!=="number")throw H.h(H.aP(a))
return a},
h:function(a){var z
if(a==null)a=new P.e0()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fn})
z.name=""}else z.toString=H.fn
return z},
fn:function(){return J.a7(this.dartException)},
r:function(a){throw H.h(a)},
x:function(a){throw H.h(P.bd(a))},
aT:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.l8(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.b9(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cK(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.e_(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eo()
u=$.$get$ep()
t=$.$get$eq()
s=$.$get$er()
r=$.$get$ev()
q=$.$get$ew()
p=$.$get$et()
$.$get$es()
o=$.$get$ey()
n=$.$get$ex()
m=v.a7(y)
if(m!=null)return z.$1(H.cK(H.T(y),m))
else{m=u.a7(y)
if(m!=null){m.method="call"
return z.$1(H.cK(H.T(y),m))}else{m=t.a7(y)
if(m==null){m=s.a7(y)
if(m==null){m=r.a7(y)
if(m==null){m=q.a7(y)
if(m==null){m=p.a7(y)
if(m==null){m=s.a7(y)
if(m==null){m=o.a7(y)
if(m==null){m=n.a7(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.e_(H.T(y),m))}}return z.$1(new H.iR(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eb()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aB(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eb()
return a},
b9:function(a){var z
if(a==null)return new H.eY(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eY(a)},
kM:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.Z(0,a[y],a[x])}return b},
kV:function(a,b,c,d,e,f){H.k(a,"$iscE")
switch(H.Z(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.q("Unsupported number of arguments for wrapped closure"))},
b7:function(a,b){var z
H.Z(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kV)
a.$identity=z
return z},
fD:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.J(d).$isf){z.$reflectionInfo=d
x=H.hU(z).r}else x=d
w=e?Object.create(new H.ij().constructor.prototype):Object.create(new H.cu(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aq
if(typeof u!=="number")return u.F()
$.aq=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.du(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.kO,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dp:H.cv
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.h("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.du(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fA:function(a,b,c,d){var z=H.cv
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
du:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fC(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fA(y,!w,z,b)
if(y===0){w=$.aq
if(typeof w!=="number")return w.F()
$.aq=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bc
if(v==null){v=H.c3("self")
$.bc=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aq
if(typeof w!=="number")return w.F()
$.aq=w+1
t+=w
w="return function("+t+"){return this."
v=$.bc
if(v==null){v=H.c3("self")
$.bc=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
fB:function(a,b,c,d){var z,y
z=H.cv
y=H.dp
switch(b?-1:a){case 0:throw H.h(H.i2("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fC:function(a,b){var z,y,x,w,v,u,t,s
z=$.bc
if(z==null){z=H.c3("self")
$.bc=z}y=$.dn
if(y==null){y=H.c3("receiver")
$.dn=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fB(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.aq
if(typeof y!=="number")return y.F()
$.aq=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.aq
if(typeof y!=="number")return y.F()
$.aq=y+1
return new Function(z+y+"}")()},
da:function(a,b,c,d,e,f,g){var z,y
z=J.bm(H.bM(b))
H.Z(c)
y=!!J.J(d).$isf?J.bm(d):d
return H.fD(a,z,c,y,!!e,f,g)},
T:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.ax(a,"String"))},
l0:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.ax(a,"num"))},
fb:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.ax(a,"bool"))},
Z:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.ax(a,"int"))},
fj:function(a,b){throw H.h(H.ax(a,H.T(b).substring(3)))},
l2:function(a,b){var z=J.c_(b)
throw H.h(H.fz(a,z.bx(b,3,z.gk(b))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.J(a)[b])return a
H.fj(a,b)},
e:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.J(a)[b]
else z=!0
if(z)return a
H.l2(a,b)},
bM:function(a){if(a==null)return a
if(!!J.J(a).$isf)return a
throw H.h(H.ax(a,"List"))},
kX:function(a,b){if(a==null)return a
if(!!J.J(a).$isf)return a
if(J.J(a)[b])return a
H.fj(a,b)},
fc:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.Z(z)]
else return a.$S()}return},
bZ:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fc(J.J(a))
if(z==null)return!1
y=H.ff(z,null,b,null)
return y},
b:function(a,b){var z,y
if(a==null)return a
if($.d6)return a
$.d6=!0
try{if(H.bZ(a,b))return a
z=H.c1(b)
y=H.ax(a,z)
throw H.h(y)}finally{$.d6=!1}},
dc:function(a,b){if(a!=null&&!H.d9(a,b))H.r(H.ax(a,H.c1(b)))
return a},
f6:function(a){var z
if(a instanceof H.u){z=H.fc(J.J(a))
if(z!=null)return H.c1(z)
return"Closure"}return H.aZ(a)},
l7:function(a){throw H.h(new P.fJ(H.T(a)))},
fd:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
aR:function(a){if(a==null)return
return a.$ti},
mY:function(a,b,c){return H.ba(a["$as"+H.j(c)],H.aR(b))},
bL:function(a,b,c,d){var z
H.T(c)
H.Z(d)
z=H.ba(a["$as"+H.j(c)],H.aR(b))
return z==null?null:z[d]},
az:function(a,b,c){var z
H.T(b)
H.Z(c)
z=H.ba(a["$as"+H.j(b)],H.aR(a))
return z==null?null:z[c]},
z:function(a,b){var z
H.Z(b)
z=H.aR(a)
return z==null?null:z[b]},
c1:function(a){var z=H.aS(a,null)
return z},
aS:function(a,b){var z,y
H.w(b,"$isf",[P.o],"$asf")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.df(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Z(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.j(b[y])}if('func' in a)return H.kv(a,b)
if('futureOr' in a)return"FutureOr<"+H.aS("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kv:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.o]
H.w(b,"$isf",z,"$asf")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.i(b,r)
t=C.h.F(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aS(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aS(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aS(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aS(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kL(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.T(z[l])
n=n+m+H.aS(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
df:function(a,b,c){var z,y,x,w,v,u
H.w(c,"$isf",[P.o],"$asf")
if(a==null)return""
z=new P.bW("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aS(u,c)}v="<"+z.i(0)+">"
return v},
ba:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
b6:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.aR(a)
y=J.J(a)
if(y[b]==null)return!1
return H.f9(H.ba(y[d],z),null,c,null)},
w:function(a,b,c,d){var z,y
H.T(b)
H.bM(c)
H.T(d)
if(a==null)return a
z=H.b6(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.df(c,0,null)
throw H.h(H.ax(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
f9:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.al(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.al(a[y],b,c[y],d))return!1
return!0},
mW:function(a,b,c){return a.apply(b,H.ba(J.J(b)["$as"+H.j(c)],H.aR(b)))},
fg:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="I"||a===-1||a===-2||H.fg(z)}return!1},
d9:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="a"||b.builtin$cls==="I"||b===-1||b===-2||H.fg(b)
return z}z=b==null||b===-1||b.builtin$cls==="a"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.d9(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bZ(a,b)}y=J.J(a).constructor
x=H.aR(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.al(y,null,b,null)
return z},
C:function(a,b){if(a!=null&&!H.d9(a,b))throw H.h(H.ax(a,H.c1(b)))
return a},
al:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.al(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="I")return!0
if('func' in c)return H.ff(a,b,c,d)
if('func' in a)return c.builtin$cls==="cE"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.al("type" in a?a.type:null,b,x,d)
else if(H.al(a,b,x,d))return!0
else{if(!('$is'+"bi" in y.prototype))return!1
w=y.prototype["$as"+"bi"]
v=H.ba(w,z?a.slice(1):null)
return H.al(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.c1(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.f9(H.ba(r,z),b,u,d)},
ff:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.al(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.al(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.al(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.al(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.l_(m,b,l,d)},
l_:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.al(c[w],d,a[w],b))return!1}return!0},
mX:function(a,b,c){Object.defineProperty(a,H.T(b),{value:c,enumerable:false,writable:true,configurable:true})},
kY:function(a){var z,y,x,w,v,u
z=H.T($.fe.$1(a))
y=$.co[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cq[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.T($.f8.$2(a,z))
if(z!=null){y=$.co[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cq[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cr(x)
$.co[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cq[z]=x
return x}if(v==="-"){u=H.cr(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fi(a,x)
if(v==="*")throw H.h(P.eF(z))
if(init.leafTags[z]===true){u=H.cr(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fi(a,x)},
fi:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dh(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cr:function(a){return J.dh(a,!1,null,!!a.$isB)},
kZ:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cr(z)
else return J.dh(z,c,null,null)},
kT:function(){if(!0===$.de)return
$.de=!0
H.kU()},
kU:function(){var z,y,x,w,v,u,t,s
$.co=Object.create(null)
$.cq=Object.create(null)
H.kP()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fk.$1(v)
if(u!=null){t=H.kZ(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kP:function(){var z,y,x,w,v,u,t
z=C.E()
z=H.b5(C.B,H.b5(C.G,H.b5(C.n,H.b5(C.n,H.b5(C.F,H.b5(C.C,H.b5(C.D(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fe=new H.kQ(v)
$.f8=new H.kR(u)
$.fk=new H.kS(t)},
b5:function(a,b){return a(b)||b},
fl:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fm:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hT:{"^":"a;a,b,c,d,e,f,r,0x",q:{
hU:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bm(z)
y=z[0]
x=z[1]
return new H.hT(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iF:{"^":"a;a,b,c,d,e,f",
a7:function(a){var z,y,x
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
q:{
aw:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.o])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iF(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
ci:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eu:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hE:{"^":"Y;a,b",
i:function(a){var z=this.b
if(z==null)return"NullError: "+H.j(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
e_:function(a,b){return new H.hE(a,b==null?null:b.method)}}},
ha:{"^":"Y;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
q:{
cK:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.ha(a,y,z?null:b.receiver)}}},
iR:{"^":"Y;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
l8:{"^":"u:16;a",
$1:function(a){if(!!J.J(a).$isY)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eY:{"^":"a;a,0b",
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
i:function(a){return"Closure '"+H.aZ(this).trim()+"'"},
gdL:function(){return this},
$iscE:1,
gdL:function(){return this}},
ef:{"^":"u;"},
ij:{"^":"ef;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cu:{"^":"ef;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cu))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gS:function(a){var z,y
z=this.c
if(z==null)y=H.bt(this.a)
else y=typeof z!=="object"?J.aA(z):H.bt(z)
return(y^H.bt(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.aZ(z)+"'")},
q:{
cv:function(a){return a.a},
dp:function(a){return a.c},
c3:function(a){var z,y,x,w,v
z=new H.cu("self","target","receiver","name")
y=J.bm(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iG:{"^":"Y;a",
i:function(a){return this.a},
q:{
ax:function(a,b){return new H.iG("TypeError: "+H.j(P.c8(a))+": type '"+H.f6(a)+"' is not a subtype of type '"+b+"'")}}},
fy:{"^":"Y;a",
i:function(a){return this.a},
q:{
fz:function(a,b){return new H.fy("CastError: "+H.j(P.c8(a))+": type '"+H.f6(a)+"' is not a subtype of type '"+b+"'")}}},
i1:{"^":"Y;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
q:{
i2:function(a){return new H.i1(a)}}},
aW:{"^":"hl;a,0b,0c,0d,0e,0f,r,$ti",
gk:function(a){return this.a},
gar:function(a){return new H.dS(this,[H.z(this,0)])},
d3:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.cJ(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.cJ(y,b)}else return this.fX(b)},
fX:function(a){var z=this.d
if(z==null)return!1
return this.c9(this.bE(z,J.aA(a)&0x3ffffff),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.b7(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.b7(w,b)
x=y==null?null:y.b
return x}else return this.fY(b)},
fY:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bE(z,J.aA(a)&0x3ffffff)
x=this.c9(y,a)
if(x<0)return
return y[x].b},
Z:function(a,b,c){var z,y,x,w,v,u
H.C(b,H.z(this,0))
H.C(c,H.z(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bJ()
this.b=z}this.cC(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bJ()
this.c=y}this.cC(y,b,c)}else{x=this.d
if(x==null){x=this.bJ()
this.d=x}w=J.aA(b)&0x3ffffff
v=this.bE(x,w)
if(v==null)this.bN(x,w,[this.bK(b,c)])
else{u=this.c9(v,b)
if(u>=0)v[u].b=c
else v.push(this.bK(b,c))}}},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.z(this,0),H.z(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.h(P.bd(this))
z=z.c}},
cC:function(a,b,c){var z
H.C(b,H.z(this,0))
H.C(c,H.z(this,1))
z=this.b7(a,b)
if(z==null)this.bN(a,b,this.bK(b,c))
else z.b=c},
eo:function(){this.r=this.r+1&67108863},
bK:function(a,b){var z,y
z=new H.hd(H.C(a,H.z(this,0)),H.C(b,H.z(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eo()
return z},
c9:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.U(a[y].a,b))return y
return-1},
i:function(a){return P.dV(this)},
b7:function(a,b){return a[b]},
bE:function(a,b){return a[b]},
bN:function(a,b,c){a[b]=c},
ei:function(a,b){delete a[b]},
cJ:function(a,b){return this.b7(a,b)!=null},
bJ:function(){var z=Object.create(null)
this.bN(z,"<non-identifier-key>",z)
this.ei(z,"<non-identifier-key>")
return z},
$isdR:1},
hd:{"^":"a;a,b,0c,0d"},
dS:{"^":"fR;a,$ti",
gk:function(a){return this.a.a},
gX:function(a){var z,y
z=this.a
y=new H.he(z,z.r,this.$ti)
y.c=z.e
return y}},
he:{"^":"a;a,b,0c,0d,$ti",
gN:function(a){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.bd(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
kQ:{"^":"u:16;a",
$1:function(a){return this.a(a)}},
kR:{"^":"u:26;a",
$2:function(a,b){return this.a(a,b)}},
kS:{"^":"u:27;a",
$1:function(a){return this.a(H.T(a))}},
h8:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$ise1:1,
q:{
h9:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.h(new P.h_("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
kL:function(a){return J.dL(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
l1:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bH:function(a){return a},
aO:function(a,b,c){H.bM(b)
if(a>>>0!==a||a>=c)throw H.h(H.aQ(b,a))},
ku:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.h(H.kK(a,b,c))
return b},
hB:{"^":"m;",$ismF:1,"%":"DataView;ArrayBufferView;cP|eS|eT|hA|eU|eV|aN"},
cP:{"^":"hB;",
gk:function(a){return a.length},
$isB:1,
$asB:I.db},
hA:{"^":"eT;",
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
$asc9:function(){return[P.v]},
$ast:function(){return[P.v]},
$isd:1,
$asd:function(){return[P.v]},
$isf:1,
$asf:function(){return[P.v]},
"%":"Float32Array|Float64Array"},
aN:{"^":"eV;",
$asc9:function(){return[P.A]},
$ast:function(){return[P.A]},
$isd:1,
$asd:function(){return[P.A]},
$isf:1,
$asf:function(){return[P.A]}},
mb:{"^":"aN;",
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mc:{"^":"aN;",
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
"%":"Int32Array"},
md:{"^":"aN;",
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
"%":"Int8Array"},
me:{"^":"aN;",
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
mf:{"^":"aN;",
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
mg:{"^":"aN;",
gk:function(a){return a.length},
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
hC:{"^":"aN;",
gk:function(a){return a.length},
j:function(a,b){H.aO(b,a,a.length)
return a[b]},
bw:function(a,b,c){return new Uint8Array(a.subarray(b,H.ku(b,c,a.length)))},
"%":";Uint8Array"},
eS:{"^":"cP+t;"},
eT:{"^":"eS+c9;"},
eU:{"^":"cP+t;"},
eV:{"^":"eU+c9;"}}],["","",,P,{"^":"",
ja:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kC()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b7(new P.jc(z),1)).observe(y,{childList:true})
return new P.jb(z,y,x)}else if(self.setImmediate!=null)return P.kD()
return P.kE()},
mL:[function(a){self.scheduleImmediate(H.b7(new P.jd(H.b(a,{func:1,ret:-1})),0))},"$1","kC",4,0,12],
mM:[function(a){self.setImmediate(H.b7(new P.je(H.b(a,{func:1,ret:-1})),0))},"$1","kD",4,0,12],
mN:[function(a){P.cY(C.m,H.b(a,{func:1,ret:-1}))},"$1","kE",4,0,12],
cY:function(a,b){var z
H.b(b,{func:1,ret:-1})
z=C.e.a0(a.a,1000)
return P.k8(z<0?0:z,b)},
ej:function(a,b){var z
H.b(b,{func:1,ret:-1,args:[P.b_]})
z=C.e.a0(a.a,1000)
return P.k9(z<0?0:z,b)},
ky:function(a,b){if(H.bZ(a,{func:1,args:[P.a,P.ao]}))return b.hk(a,null,P.a,P.ao)
if(H.bZ(a,{func:1,args:[P.a]}))return H.b(a,{func:1,ret:null,args:[P.a]})
throw H.h(P.c2(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kx:function(){var z,y
for(;z=$.b4,z!=null;){$.bJ=null
y=z.b
$.b4=y
if(y==null)$.bI=null
z.a.$0()}},
mV:[function(){$.d7=!0
try{P.kx()}finally{$.bJ=null
$.d7=!1
if($.b4!=null)$.$get$d3().$1(P.fa())}},"$0","fa",0,0,3],
f5:function(a){var z=new P.eM(H.b(a,{func:1,ret:-1}))
if($.b4==null){$.bI=z
$.b4=z
if(!$.d7)$.$get$d3().$1(P.fa())}else{$.bI.b=z
$.bI=z}},
kB:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
z=$.b4
if(z==null){P.f5(a)
$.bJ=$.bI
return}y=new P.eM(a)
x=$.bJ
if(x==null){y.b=z
$.bJ=y
$.b4=y}else{y.b=x.b
x.b=y
$.bJ=y
if(y.b==null)$.bI=y}},
l3:function(a){var z,y
z={func:1,ret:-1}
H.b(a,z)
y=$.N
if(C.i===y){P.cn(null,null,C.i,a)
return}y.toString
P.cn(null,null,y,H.b(y.bT(a),z))},
iB:function(a,b){var z,y
z={func:1,ret:-1}
H.b(b,z)
y=$.N
if(y===C.i){y.toString
return P.cY(a,b)}return P.cY(a,H.b(y.bT(b),z))},
iC:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.b_]}
H.b(b,z)
y=$.N
if(y===C.i){y.toString
return P.ej(a,b)}x=y.d0(b,P.b_)
$.N.toString
return P.ej(a,H.b(x,z))},
cm:function(a,b,c,d,e){var z={}
z.a=d
P.kB(new P.kz(z,e))},
f3:function(a,b,c,d,e){var z,y
H.b(d,{func:1,ret:e})
y=$.N
if(y===c)return d.$0()
$.N=c
z=y
try{y=d.$0()
return y}finally{$.N=z}},
f4:function(a,b,c,d,e,f,g){var z,y
H.b(d,{func:1,ret:f,args:[g]})
H.C(e,g)
y=$.N
if(y===c)return d.$1(e)
$.N=c
z=y
try{y=d.$1(e)
return y}finally{$.N=z}},
kA:function(a,b,c,d,e,f,g,h,i){var z,y
H.b(d,{func:1,ret:g,args:[h,i]})
H.C(e,h)
H.C(f,i)
y=$.N
if(y===c)return d.$2(e,f)
$.N=c
z=y
try{y=d.$2(e,f)
return y}finally{$.N=z}},
cn:function(a,b,c,d){var z
H.b(d,{func:1,ret:-1})
z=C.i!==c
if(z)d=!(!z||!1)?c.bT(d):c.fJ(d,-1)
P.f5(d)},
jc:{"^":"u:15;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jb:{"^":"u:23;a,b,c",
$1:function(a){var z,y
this.a.a=H.b(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jd:{"^":"u:2;a",
$0:function(){this.a.$0()}},
je:{"^":"u:2;a",
$0:function(){this.a.$0()}},
f0:{"^":"a;a,0b,c",
e5:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b7(new P.kb(this,b),0),a)
else throw H.h(P.ae("`setTimeout()` not found."))},
e6:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b7(new P.ka(this,a,Date.now(),b),0),a)
else throw H.h(P.ae("Periodic timer."))},
$isb_:1,
q:{
k8:function(a,b){var z=new P.f0(!0,0)
z.e5(a,b)
return z},
k9:function(a,b){var z=new P.f0(!1,0)
z.e6(a,b)
return z}}},
kb:{"^":"u:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
ka:{"^":"u:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.e.dX(w,x)}z.c=y
this.d.$1(z)}},
b3:{"^":"a;0a,b,c,d,e,$ti",
h4:function(a){if(this.c!==6)return!0
return this.b.b.ck(H.b(this.d,{func:1,ret:P.a6,args:[P.a]}),a.a,P.a6,P.a)},
fW:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.z(this,1)}
w=this.b.b
if(H.bZ(z,{func:1,args:[P.a,P.ao]}))return H.dc(w.ho(z,a.a,a.b,null,y,P.ao),x)
else return H.dc(w.ck(H.b(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aK:{"^":"a;cV:a<,b,0f0:c<,$ti",
dI:function(a,b,c){var z,y,x,w
z=H.z(this,0)
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.N
if(y!==C.i){y.toString
H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.ky(b,y)}H.b(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aK(0,$.N,[c])
w=b==null?1:3
this.cD(new P.b3(x,w,a,b,[z,c]))
return x},
ht:function(a,b){return this.dI(a,null,b)},
cD:function(a){var z,y
z=this.a
if(z<=1){a.a=H.k(this.c,"$isb3")
this.c=a}else{if(z===2){y=H.k(this.c,"$isaK")
z=y.a
if(z<4){y.cD(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cn(null,null,z,H.b(new P.js(this,a),{func:1,ret:-1}))}},
cQ:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.k(this.c,"$isb3")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.k(this.c,"$isaK")
y=u.a
if(y<4){u.cQ(a)
return}this.a=y
this.c=u.c}z.a=this.b8(a)
y=this.b
y.toString
P.cn(null,null,y,H.b(new P.jx(z,this),{func:1,ret:-1}))}},
bM:function(){var z=H.k(this.c,"$isb3")
this.c=null
return this.b8(z)},
b8:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cG:function(a){var z,y,x,w
z=H.z(this,0)
H.dc(a,{futureOr:1,type:z})
y=this.$ti
x=H.b6(a,"$isbi",y,"$asbi")
if(x){z=H.b6(a,"$isaK",y,null)
if(z)P.eO(a,this)
else P.jt(a,this)}else{w=this.bM()
H.C(a,z)
this.a=4
this.c=a
P.bE(this,w)}},
bA:[function(a,b){var z
H.k(b,"$isao")
z=this.bM()
this.a=8
this.c=new P.af(a,b)
P.bE(this,z)},function(a){return this.bA(a,null)},"hz","$2","$1","gee",4,2,30],
$isbi:1,
q:{
jt:function(a,b){var z,y,x
b.a=1
try{a.dI(new P.ju(b),new P.jv(b),null)}catch(x){z=H.aT(x)
y=H.b9(x)
P.l3(new P.jw(b,z,y))}},
eO:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.k(a.c,"$isaK")
if(z>=4){y=b.bM()
b.a=a.a
b.c=a.c
P.bE(b,y)}else{y=H.k(b.c,"$isb3")
b.a=2
b.c=a
a.cQ(y)}},
bE:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.k(y.c,"$isaf")
y=y.b
u=v.a
t=v.b
y.toString
P.cm(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bE(z.a,b)}y=z.a
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
if(p){H.k(r,"$isaf")
y=y.b
u=r.a
t=r.b
y.toString
P.cm(null,null,y,u,t)
return}o=$.N
if(o==null?q!=null:o!==q)$.N=q
else o=null
y=b.c
if(y===8)new P.jA(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jz(x,b,r).$0()}else if((y&2)!==0)new P.jy(z,x,b).$0()
if(o!=null)$.N=o
y=x.b
if(!!J.J(y).$isbi){if(y.a>=4){n=H.k(t.c,"$isb3")
t.c=null
b=t.b8(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eO(y,t)
return}}m=b.b
n=H.k(m.c,"$isb3")
m.c=null
b=m.b8(n)
y=x.a
u=x.b
if(!y){H.C(u,H.z(m,0))
m.a=4
m.c=u}else{H.k(u,"$isaf")
m.a=8
m.c=u}z.a=m
y=m}}}},
js:{"^":"u:2;a,b",
$0:function(){P.bE(this.a,this.b)}},
jx:{"^":"u:2;a,b",
$0:function(){P.bE(this.b,this.a.a)}},
ju:{"^":"u:15;a",
$1:function(a){var z=this.a
z.a=0
z.cG(a)}},
jv:{"^":"u:34;a",
$2:function(a,b){this.a.bA(a,H.k(b,"$isao"))},
$1:function(a){return this.$2(a,null)}},
jw:{"^":"u:2;a,b,c",
$0:function(){this.a.bA(this.b,this.c)}},
jA:{"^":"u:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dG(H.b(w.d,{func:1}),null)}catch(v){y=H.aT(v)
x=H.b9(v)
if(this.d){w=H.k(this.a.a.c,"$isaf").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.k(this.a.a.c,"$isaf")
else u.b=new P.af(y,x)
u.a=!0
return}if(!!J.J(z).$isbi){if(z instanceof P.aK&&z.gcV()>=4){if(z.gcV()===8){w=this.b
w.b=H.k(z.gf0(),"$isaf")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ht(new P.jB(t),null)
w.a=!1}}},
jB:{"^":"u:36;a",
$1:function(a){return this.a}},
jz:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.z(x,0)
v=H.C(this.c,w)
u=H.z(x,1)
this.a.b=x.b.b.ck(H.b(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aT(t)
y=H.b9(t)
x=this.a
x.b=new P.af(z,y)
x.a=!0}}},
jy:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.k(this.a.a.c,"$isaf")
w=this.c
if(w.h4(z)&&w.e!=null){v=this.b
v.b=w.fW(z)
v.a=!1}}catch(u){y=H.aT(u)
x=H.b9(u)
w=H.k(this.a.a.c,"$isaf")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.af(y,x)
s.a=!0}}},
eM:{"^":"a;a,0b"},
cV:{"^":"a;$ti",
gk:function(a){var z,y
z={}
y=new P.aK(0,$.N,[P.A])
z.a=0
this.h1(new P.im(z,this),!0,new P.io(z,y),y.gee())
return y}},
im:{"^":"u;a,b",
$1:function(a){H.C(a,H.az(this.b,"cV",0));++this.a.a},
$S:function(){return{func:1,ret:P.I,args:[H.az(this.b,"cV",0)]}}},
io:{"^":"u:2;a,b",
$0:function(){this.b.cG(this.a.a)}},
ed:{"^":"a;$ti"},
il:{"^":"a;"},
b_:{"^":"a;"},
af:{"^":"a;a,b",
i:function(a){return H.j(this.a)},
$isY:1},
ki:{"^":"a;",$ismK:1},
kz:{"^":"u:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.e0()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.h(z)
x=H.h(z)
x.stack=y.i(0)
throw x}},
jV:{"^":"ki;",
hp:function(a){var z,y,x
H.b(a,{func:1,ret:-1})
try{if(C.i===$.N){a.$0()
return}P.f3(null,null,this,a,-1)}catch(x){z=H.aT(x)
y=H.b9(x)
P.cm(null,null,this,z,H.k(y,"$isao"))}},
hq:function(a,b,c){var z,y,x
H.b(a,{func:1,ret:-1,args:[c]})
H.C(b,c)
try{if(C.i===$.N){a.$1(b)
return}P.f4(null,null,this,a,b,-1,c)}catch(x){z=H.aT(x)
y=H.b9(x)
P.cm(null,null,this,z,H.k(y,"$isao"))}},
fJ:function(a,b){return new P.jX(this,H.b(a,{func:1,ret:b}),b)},
bT:function(a){return new P.jW(this,H.b(a,{func:1,ret:-1}))},
d0:function(a,b){return new P.jY(this,H.b(a,{func:1,ret:-1,args:[b]}),b)},
dG:function(a,b){H.b(a,{func:1,ret:b})
if($.N===C.i)return a.$0()
return P.f3(null,null,this,a,b)},
ck:function(a,b,c,d){H.b(a,{func:1,ret:c,args:[d]})
H.C(b,d)
if($.N===C.i)return a.$1(b)
return P.f4(null,null,this,a,b,c,d)},
ho:function(a,b,c,d,e,f){H.b(a,{func:1,ret:d,args:[e,f]})
H.C(b,e)
H.C(c,f)
if($.N===C.i)return a.$2(b,c)
return P.kA(null,null,this,a,b,c,d,e,f)},
hk:function(a,b,c,d){return H.b(a,{func:1,ret:b,args:[c,d]})}},
jX:{"^":"u;a,b,c",
$0:function(){return this.a.dG(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jW:{"^":"u:3;a,b",
$0:function(){return this.a.hp(this.b)}},
jY:{"^":"u;a,b,c",
$1:function(a){var z=this.c
return this.a.hq(this.b,H.C(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hg:function(a,b,c){H.bM(a)
return H.w(H.kM(a,new H.aW(0,0,[b,c])),"$isdR",[b,c],"$asdR")},
hf:function(a,b){return new H.aW(0,0,[a,b])},
hh:function(a,b,c,d){return new P.jH(0,0,[d])},
h4:function(a,b,c){var z,y
if(P.d8(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bK()
C.a.h(y,a)
try{P.kw(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.ee(b,H.kX(z,"$isd"),", ")+c
return y.charCodeAt(0)==0?y:y},
cF:function(a,b,c){var z,y,x
if(P.d8(a))return b+"..."+c
z=new P.bW(b)
y=$.$get$bK()
C.a.h(y,a)
try{x=z
x.a=P.ee(x.gay(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gay()+c
y=z.gay()
return y.charCodeAt(0)==0?y:y},
d8:function(a){var z,y
for(z=0;y=$.$get$bK(),z<y.length;++z)if(a===y[z])return!0
return!1},
kw:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gX(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.D())return
w=H.j(z.gN(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.D()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gN(z);++x
if(!z.D()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gN(z);++x
for(;z.D();t=s,s=r){r=z.gN(z);++x
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
dV:function(a){var z,y,x
z={}
if(P.d8(a))return"{...}"
y=new P.bW("")
try{C.a.h($.$get$bK(),a)
x=y
x.a=x.gay()+"{"
z.a=!0
J.fr(a,new P.hm(z,y))
z=y
z.a=z.gay()+"}"}finally{z=$.$get$bK()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.gay()
return z.charCodeAt(0)==0?z:z},
jH:{"^":"jC;a,0b,0c,0d,0e,0f,r,$ti",
gX:function(a){return P.eR(this,this.r,H.z(this,0))},
gk:function(a){return this.a},
h:function(a,b){var z,y
H.C(b,H.z(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.d5()
this.b=z}return this.cE(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.d5()
this.c=y}return this.cE(y,b)}else return this.e7(0,b)},
e7:function(a,b){var z,y,x
H.C(b,H.z(this,0))
z=this.d
if(z==null){z=P.d5()
this.d=z}y=this.cH(b)
x=z[y]
if(x==null)z[y]=[this.bz(b)]
else{if(this.cM(x,b)>=0)return!1
x.push(this.bz(b))}return!0},
U:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cR(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cR(this.c,b)
else return this.eX(0,b)},
eX:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.el(z,b)
x=this.cM(y,b)
if(x<0)return!1
this.cX(y.splice(x,1)[0])
return!0},
cE:function(a,b){H.C(b,H.z(this,0))
if(H.k(a[b],"$isd4")!=null)return!1
a[b]=this.bz(b)
return!0},
cR:function(a,b){var z
if(a==null)return!1
z=H.k(a[b],"$isd4")
if(z==null)return!1
this.cX(z)
delete a[b]
return!0},
cF:function(){this.r=this.r+1&67108863},
bz:function(a){var z,y
z=new P.d4(H.C(a,H.z(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cF()
return z},
cX:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cF()},
cH:function(a){return J.aA(a)&0x3ffffff},
el:function(a,b){return a[this.cH(b)]},
cM:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.U(a[y].a,b))return y
return-1},
q:{
d5:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
d4:{"^":"a;a,0b,0c"},
jI:{"^":"a;a,b,0c,0d,$ti",
gN:function(a){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.bd(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.C(z.a,H.z(this,0))
this.c=z.b
return!0}}},
q:{
eR:function(a,b,c){var z=new P.jI(a,b,[c])
z.c=a.e
return z}}},
jC:{"^":"i3;"},
cd:{"^":"jJ;",$isd:1,$isf:1},
t:{"^":"a;$ti",
gX:function(a){return new H.dT(a,this.gk(a),0,[H.bL(this,a,"t",0)])},
E:function(a,b){return this.j(a,b)},
hw:function(a,b){var z,y,x
z=H.c([],[H.bL(this,a,"t",0)])
C.a.sk(z,this.gk(a))
y=0
while(!0){x=this.gk(a)
if(typeof x!=="number")return H.p(x)
if(!(y<x))break
C.a.Z(z,y,this.j(a,y));++y}return z},
hv:function(a){return this.hw(a,!0)},
i:function(a){return P.cF(a,"[","]")}},
hl:{"^":"ab;"},
hm:{"^":"u:13;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
ab:{"^":"a;$ti",
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[H.bL(this,a,"ab",0),H.bL(this,a,"ab",1)]})
for(z=J.bN(this.gar(a));z.D();){y=z.gN(z)
b.$2(y,this.j(a,y))}},
gk:function(a){return J.bb(this.gar(a))},
i:function(a){return P.dV(a)},
$isa4:1},
i5:{"^":"a;$ti",
i:function(a){return P.cF(this,"{","}")},
E:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.dl("index"))
if(b<0)H.r(P.ai(b,0,null,"index",null))
for(z=P.eR(this,this.r,H.z(this,0)),y=0;z.D();){x=z.d
if(b===y)return x;++y}throw H.h(P.M(b,this,"index",null,y))},
$isd:1},
i3:{"^":"i5;"},
jJ:{"^":"a+t;"}}],["","",,P,{"^":"",cz:{"^":"a;$ti"},dx:{"^":"il;$ti"},fT:{"^":"cz;",
$ascz:function(){return[P.o,[P.f,P.A]]}},iY:{"^":"fT;a"},iZ:{"^":"dx;",
fN:function(a,b,c){var z,y,x,w
z=a.length
P.e6(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.kh(0,0,x)
if(w.ek(a,b,z)!==z)w.cY(C.h.bY(a,z-1),0)
return C.J.bw(x,0,w.b)},
fM:function(a){return this.fN(a,0,null)},
$asdx:function(){return[P.o,[P.f,P.A]]}},kh:{"^":"a;a,b,c",
cY:function(a,b){var z,y,x,w,v
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
ek:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.h.bY(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.h.b6(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.cY(w,C.h.b6(a,u)))x=u}else if(w<=2047){v=this.b
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
fV:function(a){var z=J.J(a)
if(!!z.$isu)return z.i(a)
return"Instance of '"+H.aZ(a)+"'"},
hi:function(a,b,c,d){var z,y
H.C(b,d)
z=J.h6(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.Z(z,y,b)
return H.w(z,"$isf",[d],"$asf")},
hj:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gX(a);x.D();)C.a.h(y,H.C(x.gN(x),c))
if(b)return y
return H.w(J.bm(y),"$isf",z,"$asf")},
cW:function(a,b,c){var z,y
z=P.A
H.w(a,"$isd",[z],"$asd")
if(a.constructor===Array){H.w(a,"$isaV",[z],"$asaV")
y=a.length
c=P.e6(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a9()
z=c<y}else z=!0
return H.e5(z?C.a.bw(a,b,c):a)}return P.ip(a,b,c)},
ip:function(a,b,c){var z,y,x
H.w(a,"$isd",[P.A],"$asd")
z=J.bN(a)
for(y=0;y<b;++y)if(!z.D())throw H.h(P.ai(b,0,y,null,null))
x=[]
for(;z.D();)x.push(z.gN(z))
return H.e5(x)},
hV:function(a,b,c){return new H.h8(a,H.h9(a,!1,!0,!1))},
kg:function(a,b,c,d){var z,y,x,w,v,u
H.w(a,"$isf",[P.A],"$asf")
if(c===C.r){z=$.$get$f2().b
z=z.test(b)}else z=!1
if(z)return b
y=C.w.fM(H.C(b,H.az(c,"cz",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.i(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.hQ(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
c8:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a7(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fV(a)},
q:function(a){return new P.eN(a)},
dj:function(a){H.l1(a)},
a6:{"^":"a;"},
"+bool":0,
an:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.an))return!1
return this.a===b.a&&this.b===b.b},
gS:function(a){var z=this.a
return(z^C.e.b9(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t
z=P.fK(H.hP(this))
y=P.bO(H.hN(this))
x=P.bO(H.hJ(this))
w=P.bO(H.hK(this))
v=P.bO(H.hM(this))
u=P.bO(H.hO(this))
t=P.fL(H.hL(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
q:{
fK:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fL:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bO:function(a){if(a>=10)return""+a
return"0"+a}}},
v:{"^":"S;"},
"+double":0,
bf:{"^":"a;a",
a9:function(a,b){return C.e.a9(this.a,H.k(b,"$isbf").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.bf))return!1
return this.a===b.a},
gS:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fQ()
y=this.a
if(y<0)return"-"+new P.bf(0-y).i(0)
x=z.$1(C.e.a0(y,6e7)%60)
w=z.$1(C.e.a0(y,1e6)%60)
v=new P.fP().$1(y%1e6)
return""+C.e.a0(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
q:{
dF:function(a,b,c,d,e,f){return new P.bf(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fP:{"^":"u:14;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fQ:{"^":"u:14;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
Y:{"^":"a;"},
e0:{"^":"Y;",
i:function(a){return"Throw of null."}},
aB:{"^":"Y;a,b,c,d",
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
u=P.c8(this.b)
return w+v+": "+H.j(u)},
q:{
ft:function(a){return new P.aB(!1,null,null,a)},
c2:function(a,b,c){return new P.aB(!0,a,b,c)},
dl:function(a){return new P.aB(!1,null,a,"Must not be null")}}},
cf:{"^":"aB;e,f,a,b,c,d",
gbC:function(){return"RangeError"},
gbB:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
q:{
cg:function(a,b,c){return new P.cf(null,null,!0,a,b,"Value not in range")},
ai:function(a,b,c,d,e){return new P.cf(b,c,!0,a,d,"Invalid value")},
e6:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.p(a)
if(0<=a){if(typeof c!=="number")return H.p(c)
z=a>c}else z=!0
if(z)throw H.h(P.ai(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.p(c)
z=b>c}else z=!0
if(z)throw H.h(P.ai(b,a,c,"end",f))
return b}return c}}},
h3:{"^":"aB;e,k:f>,a,b,c,d",
gbC:function(){return"RangeError"},
gbB:function(){if(J.fo(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
q:{
M:function(a,b,c,d,e){var z=H.Z(e!=null?e:J.bb(b))
return new P.h3(b,z,!0,a,c,"Index out of range")}}},
iT:{"^":"Y;a",
i:function(a){return"Unsupported operation: "+this.a},
q:{
ae:function(a){return new P.iT(a)}}},
iQ:{"^":"Y;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
eF:function(a){return new P.iQ(a)}}},
ii:{"^":"Y;a",
i:function(a){return"Bad state: "+this.a}},
fG:{"^":"Y;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.c8(z))+"."},
q:{
bd:function(a){return new P.fG(a)}}},
hF:{"^":"a;",
i:function(a){return"Out of Memory"},
$isY:1},
eb:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isY:1},
fJ:{"^":"Y;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eN:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
h_:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.h.bx(x,0,75)+"..."
return y+"\n"+x}},
A:{"^":"S;"},
"+int":0,
d:{"^":"a;$ti",
gk:function(a){var z,y
z=this.gX(this)
for(y=0;z.D();)++y
return y},
E:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.dl("index"))
if(b<0)H.r(P.ai(b,0,null,"index",null))
for(z=this.gX(this),y=0;z.D();){x=z.gN(z)
if(b===y)return x;++y}throw H.h(P.M(b,this,"index",null,y))},
i:function(a){return P.h4(this,"(",")")}},
cG:{"^":"a;$ti"},
f:{"^":"a;$ti",$isd:1},
"+List":0,
a4:{"^":"a;$ti"},
I:{"^":"a;",
gS:function(a){return P.a.prototype.gS.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
S:{"^":"a;"},
"+num":0,
a:{"^":";",
u:function(a,b){return this===b},
gS:function(a){return H.bt(this)},
i:function(a){return"Instance of '"+H.aZ(this)+"'"},
toString:function(){return this.i(this)}},
ao:{"^":"a;"},
o:{"^":"a;",$ise1:1},
"+String":0,
bW:{"^":"a;ay:a<",
gk:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
q:{
ee:function(a,b,c){var z=J.bN(b)
if(!z.D())return a
if(c.length===0){do a+=H.j(z.gN(z))
while(z.D())}else{a+=H.j(z.gN(z))
for(;z.D();)a=a+c+H.j(z.gN(z))}return a}}}}],["","",,W,{"^":"",
cy:function(a,b){var z=document.createElement("canvas")
return z},
fS:function(a){H.k(a,"$isa3")
return"wheel"},
dK:function(a,b,c){var z=document.createElement("img")
z.src=b
return z},
ck:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eQ:function(a,b,c,d){var z,y
z=W.ck(W.ck(W.ck(W.ck(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
f7:function(a,b){var z
H.b(a,{func:1,ret:-1,args:[b]})
z=$.N
if(z===C.i)return a
return z.d0(a,b)},
bl:{"^":"a0;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
la:{"^":"cS;0n:x=,0p:y=","%":"Accelerometer|LinearAccelerationSensor"},
lb:{"^":"m;0k:length=","%":"AccessibleNodeList"},
lc:{"^":"bl;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
ld:{"^":"bl;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
fx:{"^":"m;","%":";Blob"},
cx:{"^":"bl;",
bu:function(a,b,c){if(c!=null)return a.getContext(b,P.kG(c,null))
return a.getContext(b)},
dN:function(a,b){return this.bu(a,b,null)},
$iscx:1,
"%":"HTMLCanvasElement"},
ds:{"^":"m;",$isds:1,"%":"CanvasRenderingContext2D"},
lj:{"^":"K;0k:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
ll:{"^":"c6;0k:length=","%":"CSSPerspective"},
lm:{"^":"cC;0n:x=,0p:y=","%":"CSSPositionValue"},
ln:{"^":"c6;0n:x=,0p:y=","%":"CSSRotation"},
be:{"^":"m;",$isbe:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
lo:{"^":"c6;0n:x=,0p:y=","%":"CSSScale"},
lp:{"^":"ji;0k:length=",
dO:function(a,b){var z=a.getPropertyValue(this.eb(a,b))
return z==null?"":z},
eb:function(a,b){var z,y
z=$.$get$dy()
y=z[b]
if(typeof y==="string")return y
y=this.fa(a,b)
z[b]=y
return y},
fa:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fM()+b
if(z in a)return z
return b},
gbU:function(a){return a.bottom},
gag:function(a){return a.height},
gaJ:function(a){return a.left},
gaX:function(a){return a.right},
gb1:function(a){return a.top},
gah:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fI:{"^":"a;",
gaJ:function(a){return this.dO(a,"left")}},
cC:{"^":"m;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
c6:{"^":"m;","%":"CSSMatrixComponent|CSSSkew;CSSTransformComponent"},
lq:{"^":"cC;0k:length=","%":"CSSTransformValue"},
lr:{"^":"c6;0n:x=,0p:y=","%":"CSSTranslation"},
ls:{"^":"cC;0k:length=","%":"CSSUnparsedValue"},
lt:{"^":"m;0k:length=","%":"DataTransferItemList"},
lu:{"^":"m;0n:x=,0p:y=","%":"DeviceAcceleration"},
lv:{"^":"m;",
i:function(a){return String(a)},
"%":"DOMException"},
lw:{"^":"fN;",
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"DOMPoint"},
fN:{"^":"m;",
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":";DOMPointReadOnly"},
lx:{"^":"jk;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[[P.aa,P.S]]},
$ast:function(){return[[P.aa,P.S]]},
$isd:1,
$asd:function(){return[[P.aa,P.S]]},
$isf:1,
$asf:function(){return[[P.aa,P.S]]},
$asy:function(){return[[P.aa,P.S]]},
"%":"ClientRectList|DOMRectList"},
fO:{"^":"m;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gah(a))+" x "+H.j(this.gag(a))},
u:function(a,b){var z
if(b==null)return!1
z=H.b6(b,"$isaa",[P.S],"$asaa")
if(!z)return!1
z=J.c0(b)
return a.left===z.gaJ(b)&&a.top===z.gb1(b)&&this.gah(a)===z.gah(b)&&this.gag(a)===z.gag(b)},
gS:function(a){return W.eQ(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gah(a)&0x1FFFFFFF,this.gag(a)&0x1FFFFFFF)},
gbU:function(a){return a.bottom},
gag:function(a){return a.height},
gaJ:function(a){return a.left},
gaX:function(a){return a.right},
gb1:function(a){return a.top},
gah:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
$isaa:1,
$asaa:function(){return[P.S]},
"%":";DOMRectReadOnly"},
ly:{"^":"jm;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[P.o]},
$ast:function(){return[P.o]},
$isd:1,
$asd:function(){return[P.o]},
$isf:1,
$asf:function(){return[P.o]},
$asy:function(){return[P.o]},
"%":"DOMStringList"},
lz:{"^":"m;0k:length=","%":"DOMTokenList"},
jh:{"^":"cd;a,b",
gk:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return H.k(z[b],"$isa0")},
h:function(a,b){this.a.appendChild(b)
return b},
gX:function(a){var z=this.hv(this)
return new J.am(z,z.length,0,[H.z(z,0)])},
$ast:function(){return[W.a0]},
$asd:function(){return[W.a0]},
$asf:function(){return[W.a0]}},
a0:{"^":"K;",
gd2:function(a){return new W.jh(a,a.children)},
gbd:function(a){return P.hS(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.S)},
i:function(a){return a.localName},
$isa0:1,
"%":";Element"},
a2:{"^":"m;",$isa2:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
a3:{"^":"m;",
cZ:["dT",function(a,b,c,d){H.b(c,{func:1,args:[W.a2]})
if(c!=null)this.e8(a,b,c,!1)}],
e8:function(a,b,c,d){return a.addEventListener(b,H.b7(H.b(c,{func:1,args:[W.a2]}),1),!1)},
$isa3:1,
"%":"AccessibleNode|AnalyserNode|Animation|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioScheduledSourceNode|AudioWorkletNode|BackgroundFetchRegistration|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|ChannelMergerNode|ChannelSplitterNode|Clipboard|ConstantSourceNode|ConvolverNode|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|DelayNode|DynamicsCompressorNode|EventSource|FileReader|FontFaceSet|GainNode|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|MediaDevices|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|Oscillator|OscillatorNode|PannerNode|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RealtimeAnalyserNode|RemotePlayback|ScreenOrientation|ScriptProcessorNode|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|StereoPannerNode|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WaveShaperNode|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;eW|eX|eZ|f_"},
bh:{"^":"fx;",$isbh:1,"%":"File"},
lS:{"^":"jr;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bh]},
$ast:function(){return[W.bh]},
$isd:1,
$asd:function(){return[W.bh]},
$isf:1,
$asf:function(){return[W.bh]},
$asy:function(){return[W.bh]},
"%":"FileList"},
lT:{"^":"a3;0k:length=","%":"FileWriter"},
lW:{"^":"bl;0k:length=","%":"HTMLFormElement"},
bj:{"^":"m;",$isbj:1,"%":"Gamepad"},
lX:{"^":"cS;0n:x=,0p:y=","%":"Gyroscope"},
lY:{"^":"m;0k:length=","%":"History"},
lZ:{"^":"jE;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
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
ca:{"^":"m;0d5:data=",$isca:1,"%":"ImageData"},
dJ:{"^":"bl;",$isdJ:1,"%":"HTMLImageElement"},
bn:{"^":"cZ;",$isbn:1,"%":"KeyboardEvent"},
m3:{"^":"m;",
i:function(a){return String(a)},
"%":"Location"},
m4:{"^":"cS;0n:x=,0p:y=","%":"Magnetometer"},
m6:{"^":"m;0k:length=","%":"MediaList"},
m7:{"^":"a3;",
cZ:function(a,b,c,d){H.b(c,{func:1,args:[W.a2]})
if(b==="message")a.start()
this.dT(a,b,c,!1)},
"%":"MessagePort"},
m8:{"^":"jK;",
j:function(a,b){return P.aL(a.get(H.T(b)))},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aL(y.value[1]))}},
gar:function(a){var z=H.c([],[P.o])
this.L(a,new W.hx(z))
return z},
gk:function(a){return a.size},
$asab:function(){return[P.o,null]},
$isa4:1,
$asa4:function(){return[P.o,null]},
"%":"MIDIInputMap"},
hx:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
m9:{"^":"jL;",
j:function(a,b){return P.aL(a.get(H.T(b)))},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aL(y.value[1]))}},
gar:function(a){var z=H.c([],[P.o])
this.L(a,new W.hy(z))
return z},
gk:function(a){return a.size},
$asab:function(){return[P.o,null]},
$isa4:1,
$asa4:function(){return[P.o,null]},
"%":"MIDIOutputMap"},
hy:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bo:{"^":"m;",$isbo:1,"%":"MimeType"},
ma:{"^":"jN;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bo]},
$ast:function(){return[W.bo]},
$isd:1,
$asd:function(){return[W.bo]},
$isf:1,
$asf:function(){return[W.bo]},
$asy:function(){return[W.bo]},
"%":"MimeTypeArray"},
at:{"^":"cZ;",$isat:1,"%":"PointerEvent;DragEvent|MouseEvent"},
jg:{"^":"cd;a",
gX:function(a){var z=this.a.childNodes
return new W.dH(z,z.length,-1,[H.bL(C.K,z,"y",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
$ast:function(){return[W.K]},
$asd:function(){return[W.K]},
$asf:function(){return[W.K]}},
K:{"^":"a3;",
i:function(a){var z=a.nodeValue
return z==null?this.dU(a):z},
$isK:1,
"%":"Attr|Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
hD:{"^":"jP;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
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
br:{"^":"m;0k:length=",$isbr:1,"%":"Plugin"},
mk:{"^":"jT;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.br]},
$ast:function(){return[W.br]},
$isd:1,
$asd:function(){return[W.br]},
$isf:1,
$asf:function(){return[W.br]},
$asy:function(){return[W.br]},
"%":"PluginArray"},
mp:{"^":"jZ;",
j:function(a,b){return P.aL(a.get(H.T(b)))},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aL(y.value[1]))}},
gar:function(a){var z=H.c([],[P.o])
this.L(a,new W.i0(z))
return z},
gk:function(a){return a.size},
$asab:function(){return[P.o,null]},
$isa4:1,
$asa4:function(){return[P.o,null]},
"%":"RTCStatsReport"},
i0:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},
mq:{"^":"bl;0k:length=","%":"HTMLSelectElement"},
cS:{"^":"a3;","%":"AbsoluteOrientationSensor|AmbientLightSensor|OrientationSensor|RelativeOrientationSensor;Sensor"},
bu:{"^":"a3;",$isbu:1,"%":"SourceBuffer"},
mr:{"^":"eX;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bu]},
$ast:function(){return[W.bu]},
$isd:1,
$asd:function(){return[W.bu]},
$isf:1,
$asf:function(){return[W.bu]},
$asy:function(){return[W.bu]},
"%":"SourceBufferList"},
bv:{"^":"m;",$isbv:1,"%":"SpeechGrammar"},
ms:{"^":"k0;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bv]},
$ast:function(){return[W.bv]},
$isd:1,
$asd:function(){return[W.bv]},
$isf:1,
$asf:function(){return[W.bv]},
$asy:function(){return[W.bv]},
"%":"SpeechGrammarList"},
bw:{"^":"m;0k:length=",$isbw:1,"%":"SpeechRecognitionResult"},
mu:{"^":"k3;",
j:function(a,b){return a.getItem(H.T(b))},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,P.o]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gar:function(a){var z=H.c([],[P.o])
this.L(a,new W.ik(z))
return z},
gk:function(a){return a.length},
$asab:function(){return[P.o,P.o]},
$isa4:1,
$asa4:function(){return[P.o,P.o]},
"%":"Storage"},
ik:{"^":"u:38;a",
$2:function(a,b){return C.a.h(this.a,a)}},
bx:{"^":"m;",$isbx:1,"%":"CSSStyleSheet|StyleSheet"},
by:{"^":"a3;",$isby:1,"%":"TextTrack"},
bz:{"^":"a3;",$isbz:1,"%":"TextTrackCue|VTTCue"},
mz:{"^":"k7;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bz]},
$ast:function(){return[W.bz]},
$isd:1,
$asd:function(){return[W.bz]},
$isf:1,
$asf:function(){return[W.bz]},
$asy:function(){return[W.bz]},
"%":"TextTrackCueList"},
mA:{"^":"f_;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.by]},
$ast:function(){return[W.by]},
$isd:1,
$asd:function(){return[W.by]},
$isf:1,
$asf:function(){return[W.by]},
$asy:function(){return[W.by]},
"%":"TextTrackList"},
mB:{"^":"m;0k:length=","%":"TimeRanges"},
bA:{"^":"m;",$isbA:1,"%":"Touch"},
b0:{"^":"cZ;",$isb0:1,"%":"TouchEvent"},
mC:{"^":"kd;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bA]},
$ast:function(){return[W.bA]},
$isd:1,
$asd:function(){return[W.bA]},
$isf:1,
$asf:function(){return[W.bA]},
$asy:function(){return[W.bA]},
"%":"TouchList"},
mD:{"^":"m;0k:length=","%":"TrackDefaultList"},
cZ:{"^":"a2;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
mG:{"^":"m;",
i:function(a){return String(a)},
"%":"URL"},
mI:{"^":"m;0n:x=","%":"VRStageBoundsPoint"},
mJ:{"^":"a3;0k:length=","%":"VideoTrackList"},
bD:{"^":"at;",
gfR:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.ae("deltaY is not supported"))},
gfQ:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.ae("deltaX is not supported"))},
$isbD:1,
"%":"WheelEvent"},
j9:{"^":"a3;",
eY:function(a,b){return a.requestAnimationFrame(H.b7(H.b(b,{func:1,ret:-1,args:[P.S]}),1))},
ej:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
mO:{"^":"kk;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.be]},
$ast:function(){return[W.be]},
$isd:1,
$asd:function(){return[W.be]},
$isf:1,
$asf:function(){return[W.be]},
$asy:function(){return[W.be]},
"%":"CSSRuleList"},
mP:{"^":"fO;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
u:function(a,b){var z
if(b==null)return!1
z=H.b6(b,"$isaa",[P.S],"$asaa")
if(!z)return!1
z=J.c0(b)
return a.left===z.gaJ(b)&&a.top===z.gb1(b)&&a.width===z.gah(b)&&a.height===z.gag(b)},
gS:function(a){return W.eQ(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gag:function(a){return a.height},
gah:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
"%":"ClientRect|DOMRect"},
mR:{"^":"km;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bj]},
$ast:function(){return[W.bj]},
$isd:1,
$asd:function(){return[W.bj]},
$isf:1,
$asf:function(){return[W.bj]},
$asy:function(){return[W.bj]},
"%":"GamepadList"},
mS:{"^":"ko;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
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
mT:{"^":"kq;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bw]},
$ast:function(){return[W.bw]},
$isd:1,
$asd:function(){return[W.bw]},
$isf:1,
$asf:function(){return[W.bw]},
$asy:function(){return[W.bw]},
"%":"SpeechRecognitionResultList"},
mU:{"^":"ks;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b>>>0!==b||b>=a.length)return H.i(a,b)
return a[b]},
$isB:1,
$asB:function(){return[W.bx]},
$ast:function(){return[W.bx]},
$isd:1,
$asd:function(){return[W.bx]},
$isf:1,
$asf:function(){return[W.bx]},
$asy:function(){return[W.bx]},
"%":"StyleSheetList"},
jn:{"^":"cV;a,b,c,$ti",
h1:function(a,b,c,d){var z=H.z(this,0)
H.b(a,{func:1,ret:-1,args:[z]})
H.b(c,{func:1,ret:-1})
return W.V(this.a,this.b,a,!1,z)}},
mQ:{"^":"jn;a,b,c,$ti"},
jo:{"^":"ed;a,b,c,d,e,$ti",
fe:function(){var z=this.d
if(z!=null&&this.a<=0)J.fq(this.b,this.c,z,!1)},
q:{
V:function(a,b,c,d,e){var z=c==null?null:W.f7(new W.jp(c),W.a2)
z=new W.jo(0,a,b,z,!1,[e])
z.fe()
return z}}},
jp:{"^":"u:4;a",
$1:function(a){return this.a.$1(H.k(a,"$isa2"))}},
y:{"^":"a;$ti",
gX:function(a){return new W.dH(a,this.gk(a),-1,[H.bL(this,a,"y",0)])}},
dH:{"^":"a;a,b,c,0d,$ti",
D:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.fp(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gN:function(a){return this.d}},
ji:{"^":"m+fI;"},
jj:{"^":"m+t;"},
jk:{"^":"jj+y;"},
jl:{"^":"m+t;"},
jm:{"^":"jl+y;"},
jq:{"^":"m+t;"},
jr:{"^":"jq+y;"},
jD:{"^":"m+t;"},
jE:{"^":"jD+y;"},
jK:{"^":"m+ab;"},
jL:{"^":"m+ab;"},
jM:{"^":"m+t;"},
jN:{"^":"jM+y;"},
jO:{"^":"m+t;"},
jP:{"^":"jO+y;"},
jS:{"^":"m+t;"},
jT:{"^":"jS+y;"},
jZ:{"^":"m+ab;"},
eW:{"^":"a3+t;"},
eX:{"^":"eW+y;"},
k_:{"^":"m+t;"},
k0:{"^":"k_+y;"},
k3:{"^":"m+ab;"},
k6:{"^":"m+t;"},
k7:{"^":"k6+y;"},
eZ:{"^":"a3+t;"},
f_:{"^":"eZ+y;"},
kc:{"^":"m+t;"},
kd:{"^":"kc+y;"},
kj:{"^":"m+t;"},
kk:{"^":"kj+y;"},
kl:{"^":"m+t;"},
km:{"^":"kl+y;"},
kn:{"^":"m+t;"},
ko:{"^":"kn+y;"},
kp:{"^":"m+t;"},
kq:{"^":"kp+y;"},
kr:{"^":"m+t;"},
ks:{"^":"kr+y;"}}],["","",,P,{"^":"",
kJ:function(a){var z,y
z=J.J(a)
if(!!z.$isca){y=z.gd5(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.f1(a.data,a.height,a.width)},
kI:function(a){if(a instanceof P.f1)return{data:a.a,height:a.b,width:a.c}
return a},
aL:function(a){var z,y,x,w,v
if(a==null)return
z=P.hf(P.o,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w){v=H.T(y[w])
z.Z(0,v,a[v])}return z},
kG:function(a,b){var z={}
a.L(0,new P.kH(z))
return z},
dE:function(){var z=$.dD
if(z==null){z=J.cs(window.navigator.userAgent,"Opera",0)
$.dD=z}return z},
fM:function(){var z,y
z=$.dA
if(z!=null)return z
y=$.dB
if(y==null){y=J.cs(window.navigator.userAgent,"Firefox",0)
$.dB=y}if(y)z="-moz-"
else{y=$.dC
if(y==null){y=!P.dE()&&J.cs(window.navigator.userAgent,"Trident/",0)
$.dC=y}if(y)z="-ms-"
else z=P.dE()?"-o-":"-webkit-"}$.dA=z
return z},
f1:{"^":"a;d5:a>,b,c",$isca:1},
kH:{"^":"u:13;a",
$2:function(a,b){this.a[a]=b}},
fX:{"^":"cd;a,b",
gbF:function(){var z,y,x
z=this.b
y=H.az(z,"t",0)
x=W.a0
return new H.hn(new H.j7(z,H.b(new P.fY(),{func:1,ret:P.a6,args:[y]}),[y]),H.b(new P.fZ(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.bb(this.gbF().a)},
j:function(a,b){var z=this.gbF()
return z.b.$1(J.dk(z.a,b))},
gX:function(a){var z=P.hj(this.gbF(),!1,W.a0)
return new J.am(z,z.length,0,[H.z(z,0)])},
$ast:function(){return[W.a0]},
$asd:function(){return[W.a0]},
$asf:function(){return[W.a0]}},
fY:{"^":"u:24;",
$1:function(a){return!!J.J(H.k(a,"$isK")).$isa0}},
fZ:{"^":"u:25;",
$1:function(a){return H.e(H.k(a,"$isK"),"$isa0")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
bF:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eP:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
bV:{"^":"a;n:a>,p:b>,$ti",
i:function(a){return"Point("+H.j(this.a)+", "+H.j(this.b)+")"},
u:function(a,b){var z,y,x
if(b==null)return!1
z=H.b6(b,"$isbV",[P.S],null)
if(!z)return!1
z=this.a
y=J.c0(b)
x=y.gn(b)
if(z==null?x==null:z===x){z=this.b
y=y.gp(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gS:function(a){var z,y
z=J.aA(this.a)
y=J.aA(this.b)
return P.eP(P.bF(P.bF(0,z),y))}},
jU:{"^":"a;$ti",
gaX:function(a){var z=this.a
if(typeof z!=="number")return z.F()
return H.C(z+this.c,H.z(this,0))},
gbU:function(a){var z=this.b
if(typeof z!=="number")return z.F()
return H.C(z+this.d,H.z(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.b6(b,"$isaa",[P.S],"$asaa")
if(!z)return!1
z=this.a
y=J.c0(b)
x=y.gaJ(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb1(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.F()
w=H.z(this,0)
if(H.C(z+this.c,w)===y.gaX(b)){if(typeof x!=="number")return x.F()
z=H.C(x+this.d,w)===y.gbU(b)}else z=!1}else z=!1}else z=!1
return z},
gS:function(a){var z,y,x,w,v
z=this.a
y=J.aA(z)
x=this.b
w=J.aA(x)
if(typeof z!=="number")return z.F()
v=H.z(this,0)
z=H.C(z+this.c,v)
if(typeof x!=="number")return x.F()
v=H.C(x+this.d,v)
return P.eP(P.bF(P.bF(P.bF(P.bF(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))},
d4:function(a,b){var z,y
H.w(b,"$isbV",[P.S],"$asbV")
z=b.a
y=this.a
if(typeof z!=="number")return z.dM()
if(typeof y!=="number")return H.p(y)
if(z>=y)if(z<=y+this.c){z=b.b
y=this.b
if(typeof z!=="number")return z.dM()
if(typeof y!=="number")return H.p(y)
z=z>=y&&z<=y+this.d}else z=!1
else z=!1
return z}},
aa:{"^":"jU;aJ:a>,b1:b>,ah:c>,ag:d>,$ti",q:{
hS:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.a9()
if(c<0)z=-c*0
else z=c
H.C(z,e)
if(typeof d!=="number")return d.a9()
if(d<0)y=-d*0
else y=d
return new P.aa(a,b,z,H.C(y,e),[e])}}}}],["","",,P,{"^":"",lA:{"^":"Q;0n:x=,0p:y=","%":"SVGFEBlendElement"},lB:{"^":"Q;0n:x=,0p:y=","%":"SVGFEColorMatrixElement"},lC:{"^":"Q;0n:x=,0p:y=","%":"SVGFEComponentTransferElement"},lD:{"^":"Q;0n:x=,0p:y=","%":"SVGFECompositeElement"},lE:{"^":"Q;0n:x=,0p:y=","%":"SVGFEConvolveMatrixElement"},lF:{"^":"Q;0n:x=,0p:y=","%":"SVGFEDiffuseLightingElement"},lG:{"^":"Q;0n:x=,0p:y=","%":"SVGFEDisplacementMapElement"},lH:{"^":"Q;0n:x=,0p:y=","%":"SVGFEFloodElement"},lI:{"^":"Q;0n:x=,0p:y=","%":"SVGFEGaussianBlurElement"},lJ:{"^":"Q;0n:x=,0p:y=","%":"SVGFEImageElement"},lK:{"^":"Q;0n:x=,0p:y=","%":"SVGFEMergeElement"},lL:{"^":"Q;0n:x=,0p:y=","%":"SVGFEMorphologyElement"},lM:{"^":"Q;0n:x=,0p:y=","%":"SVGFEOffsetElement"},lN:{"^":"Q;0n:x=,0p:y=","%":"SVGFEPointLightElement"},lO:{"^":"Q;0n:x=,0p:y=","%":"SVGFESpecularLightingElement"},lP:{"^":"Q;0n:x=,0p:y=","%":"SVGFESpotLightElement"},lQ:{"^":"Q;0n:x=,0p:y=","%":"SVGFETileElement"},lR:{"^":"Q;0n:x=,0p:y=","%":"SVGFETurbulenceElement"},lU:{"^":"Q;0n:x=,0p:y=","%":"SVGFilterElement"},lV:{"^":"bk;0n:x=,0p:y=","%":"SVGForeignObjectElement"},h1:{"^":"bk;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bk:{"^":"Q;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},m_:{"^":"bk;0n:x=,0p:y=","%":"SVGImageElement"},bS:{"^":"m;",$isbS:1,"%":"SVGLength"},m2:{"^":"jG;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.j(a,b)},
$ast:function(){return[P.bS]},
$isd:1,
$asd:function(){return[P.bS]},
$isf:1,
$asf:function(){return[P.bS]},
$asy:function(){return[P.bS]},
"%":"SVGLengthList"},m5:{"^":"Q;0n:x=,0p:y=","%":"SVGMaskElement"},bU:{"^":"m;",$isbU:1,"%":"SVGNumber"},mh:{"^":"jR;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.j(a,b)},
$ast:function(){return[P.bU]},
$isd:1,
$asd:function(){return[P.bU]},
$isf:1,
$asf:function(){return[P.bU]},
$asy:function(){return[P.bU]},
"%":"SVGNumberList"},mj:{"^":"Q;0n:x=,0p:y=","%":"SVGPatternElement"},ml:{"^":"m;0n:x=,0p:y=","%":"SVGPoint"},mm:{"^":"m;0k:length=","%":"SVGPointList"},mn:{"^":"m;0n:x=,0p:y=","%":"SVGRect"},mo:{"^":"h1;0n:x=,0p:y=","%":"SVGRectElement"},mv:{"^":"k5;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.j(a,b)},
$ast:function(){return[P.o]},
$isd:1,
$asd:function(){return[P.o]},
$isf:1,
$asf:function(){return[P.o]},
$asy:function(){return[P.o]},
"%":"SVGStringList"},Q:{"^":"a0;",
gd2:function(a){return new P.fX(a,new W.jg(a))},
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mw:{"^":"bk;0n:x=,0p:y=","%":"SVGSVGElement"},iq:{"^":"bk;","%":"SVGTextPathElement;SVGTextContentElement"},my:{"^":"iq;0n:x=,0p:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bY:{"^":"m;",$isbY:1,"%":"SVGTransform"},mE:{"^":"kf;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.j(a,b)},
$ast:function(){return[P.bY]},
$isd:1,
$asd:function(){return[P.bY]},
$isf:1,
$asf:function(){return[P.bY]},
$asy:function(){return[P.bY]},
"%":"SVGTransformList"},mH:{"^":"bk;0n:x=,0p:y=","%":"SVGUseElement"},jF:{"^":"m+t;"},jG:{"^":"jF+y;"},jQ:{"^":"m+t;"},jR:{"^":"jQ+y;"},k4:{"^":"m+t;"},k5:{"^":"k4+y;"},ke:{"^":"m+t;"},kf:{"^":"ke+y;"}}],["","",,P,{"^":"",le:{"^":"m;0k:length=","%":"AudioBuffer"},lf:{"^":"jf;",
j:function(a,b){return P.aL(a.get(H.T(b)))},
L:function(a,b){var z,y
H.b(b,{func:1,ret:-1,args:[P.o,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.aL(y.value[1]))}},
gar:function(a){var z=H.c([],[P.o])
this.L(a,new P.fv(z))
return z},
gk:function(a){return a.size},
$asab:function(){return[P.o,null]},
$isa4:1,
$asa4:function(){return[P.o,null]},
"%":"AudioParamMap"},fv:{"^":"u:7;a",
$2:function(a,b){return C.a.h(this.a,a)}},lg:{"^":"a3;0k:length=","%":"AudioTrackList"},fw:{"^":"a3;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},mi:{"^":"fw;0k:length=","%":"OfflineAudioContext"},jf:{"^":"m+ab;"}}],["","",,P,{"^":"",cR:{"^":"m;",
hr:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.J(g)
if(!!z.$isca)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.kI(g))
return}if(!!z.$isdJ)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.h(P.ft("Incorrect number or type of arguments"))},
dH:function(a,b,c,d,e,f,g){return this.hr(a,b,c,d,e,f,g,null,null,null)},
$iscR:1,
"%":"WebGLRenderingContext"},ir:{"^":"m;",$isir:1,"%":"WebGLTexture"},iO:{"^":"m;",$isiO:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",mt:{"^":"k2;",
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.M(b,a,null,null,null))
return P.aL(a.item(b))},
E:function(a,b){return this.j(a,b)},
$ast:function(){return[[P.a4,,,]]},
$isd:1,
$asd:function(){return[[P.a4,,,]]},
$isf:1,
$asf:function(){return[[P.a4,,,]]},
$asy:function(){return[[P.a4,,,]]},
"%":"SQLResultSetRowList"},k1:{"^":"m+t;"},k2:{"^":"k1+y;"}}],["","",,O,{"^":"",ag:{"^":"a;0a,0b,0c,0d,$ti",
b5:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
cp:function(a,b,c){var z=H.az(this,"ag",0)
H.b(b,{func:1,ret:P.a6,args:[[P.d,z]]})
z={func:1,ret:-1,args:[P.A,[P.d,z]]}
H.b(a,z)
H.b(c,z)
this.b=b
this.c=a
this.d=c},
aM:function(a,b){return this.cp(a,null,b)},
cP:function(a){var z
H.w(a,"$isd",[H.az(this,"ag",0)],"$asd")
z=this.b
if(z!=null)return z.$1(a)
return!0},
cw:function(a,b){var z
H.w(b,"$isd",[H.az(this,"ag",0)],"$asd")
z=this.c
if(z!=null)z.$2(a,b)},
gk:function(a){return this.a.length},
gX:function(a){var z=this.a
return new J.am(z,z.length,0,[H.z(z,0)])},
E:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.i(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.az(this,"ag",0)
H.C(b,z)
z=[z]
if(this.cP(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.cw(x,H.c([b],z))}},
bP:function(a,b){var z,y
H.w(b,"$isd",[H.az(this,"ag",0)],"$asd")
if(this.cP(b)){z=this.a
y=z.length
C.a.bP(z,b)
this.cw(y,b)}},
$isd:1,
q:{
cA:function(a){var z=new O.ag([a])
z.b5(a)
return z}}},cN:{"^":"a;0a,0b",
gk:function(a){return this.a.length},
gt:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
e1:function(a){var z=this.b
if(!(z==null))z.v(a)},
au:function(){return this.e1(null)},
gT:function(a){var z=this.a
if(z.length>0)return C.a.gcb(z)
else return V.aY()},
br:function(a){var z=this.a
if(a==null)C.a.h(z,V.aY())
else C.a.h(z,a)
this.au()},
as:function(){var z=this.a
if(z.length>0){z.pop()
this.au()}}}}],["","",,E,{"^":"",ct:{"^":"a;"},aC:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a_:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sbv:function(a,b){var z,y,x,w
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null){y=z.gt()
y.toString
x=H.b(this.gdE(),{func:1,ret:-1,args:[D.l]})
C.a.U(y.a,x)}y=this.c
if(y!=null){y=y.gt()
y.toString
x=H.b(this.gdE(),{func:1,ret:-1,args:[D.l]})
C.a.h(y.a,x)}w=new D.E("shape",z,this.c,this,[F.e9])
w.b=!0
this.aK(w)}},
ae:function(a,b){var z
for(z=this.y.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.D();)z.d.ae(0,b)},
a4:function(a){var z,y
z=a.dx
C.a.h(z.a,z.gT(z))
z.au()
a.cj(this.f)
z=a.dy
y=(z&&C.a).gcb(z)
if(y!=null&&this.d!=null)y.dF(a,this)
for(z=this.y.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.D();)z.d.a4(a)
a.ci()
a.dx.as()},
gt:function(){var z=this.z
if(z==null){z=D.D()
this.z=z}return z},
aK:function(a){var z=this.z
if(!(z==null))z.v(a)},
a1:function(){return this.aK(null)},
ha:[function(a){H.k(a,"$isl")
this.e=null
this.aK(a)},function(){return this.ha(null)},"ig","$1","$0","gdE",0,2,0],
h8:[function(a){this.aK(H.k(a,"$isl"))},function(){return this.h8(null)},"ic","$1","$0","gdD",0,2,0],
ib:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isd",[E.aC],"$asd")
for(z=b.length,y=this.gdD(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.ga_()==null){t=new D.aU()
t.a=H.c([],w)
t.c=0
u.sa_(t)}t=u.ga_()
t.toString
H.b(y,x)
C.a.h(t.a,y)}}this.a1()},"$2","gh7",8,0,8],
ie:[function(a,b){var z,y,x,w,v,u,t
H.w(b,"$isd",[E.aC],"$asd")
for(z=b.length,y=this.gdD(),x={func:1,ret:-1,args:[D.l]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.ga_()==null){t=new D.aU()
t.a=H.c([],w)
t.c=0
u.sa_(t)}t=u.ga_()
t.toString
H.b(y,x)
C.a.U(t.a,y)}}this.a1()},"$2","gh9",8,0,8],
$isau:1,
q:{
dG:function(a,b,c,d,e,f){var z,y
z=new E.aC()
z.a=d
z.b=!0
y=O.cA(E.aC)
z.y=y
y.aM(z.gh7(),z.gh9())
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
z.sbv(0,e)
return z}}},hW:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
dZ:function(a,b){var z,y,x,w,v
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
z=new O.cN()
y=[V.aD]
z.a=H.c([],y)
x=z.gt()
x.toString
w={func:1,ret:-1,args:[D.l]}
v=H.b(new E.hY(this),w)
C.a.h(x.a,v)
this.cy=z
z=new O.cN()
z.a=H.c([],y)
v=z.gt()
v.toString
x=H.b(new E.hZ(this),w)
C.a.h(v.a,x)
this.db=z
z=new O.cN()
z.a=H.c([],y)
y=z.gt()
y.toString
w=H.b(new E.i_(this),w)
C.a.h(y.a,w)
this.dx=z
z=H.c([],[O.bX])
this.dy=z
C.a.h(z,null)
this.fr=new H.aW(0,0,[P.o,A.cT])},
ghj:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.gT(z)
y=this.db
y=z.l(0,y.gT(y))
this.z=y
z=y}return z},
cj:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gcb(z):a;(z&&C.a).h(z,y)},
ci:function(){var z=this.dy
if(z.length>1)z.pop()},
d_:function(a){var z=a.b
if(z.length===0)throw H.h(P.q("May not cache a shader with no name."))
if(this.fr.d3(0,z))throw H.h(P.q('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.Z(0,z,a)},
q:{
hX:function(a,b){var z=new E.hW(a,b)
z.dZ(a,b)
return z}}},hY:{"^":"u:9;a",
$1:function(a){var z
H.k(a,"$isl")
z=this.a
z.z=null
z.ch=null}},hZ:{"^":"u:9;a",
$1:function(a){var z
H.k(a,"$isl")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},i_:{"^":"u:9;a",
$1:function(a){var z
H.k(a,"$isl")
z=this.a
z.ch=null
z.cx=null}},iy:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0a_:x@,0y,0z,0Q,0ch",
gt:function(){var z=this.x
if(z==null){z=D.D()
this.x=z}return z},
e3:[function(a){var z
H.k(a,"$isl")
z=this.x
if(!(z==null))z.v(a)
this.hm()},function(){return this.e3(null)},"e2","$1","$0","gcz",0,2,0],
gfV:function(){var z,y,x
z=Date.now()
y=C.e.a0(P.dF(0,0,0,z-this.Q.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.ch
this.ch=0
this.Q=new P.an(z,!1)
return x/y},
cS:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.l()
if(typeof z!=="number")return H.p(z)
x=C.j.c8(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.l()
w=C.j.c8(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}},
hm:function(){var z,y
if(!this.z){this.z=!0
z=window
y=H.b(new E.iA(this),{func:1,ret:-1,args:[P.S]})
C.u.ej(z)
C.u.eY(z,W.f7(y,P.S))}},
hl:function(){var z,y,x,w,v
try{++this.ch
this.z=!1
this.cS()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.an(w,!1)
x.y=P.dF(0,0,0,w-x.r.a,0,0).a*0.000001
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
this.d.a4(this.e)}}catch(v){z=H.aT(v)
y=H.b9(v)
P.dj("Error: "+H.j(z))
P.dj("Stack: "+H.j(y))
throw H.h(z)}},
q:{
iz:function(a,b,c,d,e){var z,y,x,w
z=J.J(a)
if(!!z.$iscx)return E.ei(a,!0,!0,!0,!1)
y=W.cy(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gd2(a).h(0,y)
w=E.ei(y,!0,!0,!0,!1)
w.a=a
return w},
ei:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.iy()
y=P.hg(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.o,null)
x=C.k.bu(a,"webgl",y)
x=H.k(x==null?C.k.bu(a,"experimental-webgl",y):x,"$iscR")
if(x==null)H.r(P.q("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hX(x,a)
w=new T.is(x)
w.b=H.Z(x.getParameter(3379))
w.c=H.Z(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.iU(a)
v=new X.hb()
v.c=new X.as(!1,!1,!1)
v.d=P.hh(null,null,null,P.A)
w.b=v
v=new X.hz(w)
v.f=0
v.r=new V.O(0,0)
v.x=new V.O(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.hk(w)
v.r=0
v.x=new V.O(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.iE(w)
v.e=0
v.f=new V.O(0,0)
v.r=new V.O(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.ed,P.a]])
w.z=v
u=document
t=W.at
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.V(u,"contextmenu",H.b(w.geC(),s),!1,t))
v=w.z
r=W.a2
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.V(a,"focus",H.b(w.geF(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.V(a,"blur",H.b(w.gey(),q),!1,r))
v=w.z
p=W.bn
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.V(u,"keyup",H.b(w.geH(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.V(u,"keydown",H.b(w.geG(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.V(a,"mousedown",H.b(w.geK(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.V(a,"mouseup",H.b(w.geM(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.V(a,"mousemove",H.b(w.geL(),s),!1,t))
p=w.z
o=W.bD;(p&&C.a).h(p,W.V(a,H.T(W.fS(a)),H.b(w.geN(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.V(u,"mousemove",H.b(w.geD(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.V(u,"mouseup",H.b(w.geE(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.V(u,"pointerlockchange",H.b(w.geO(),q),!1,r))
r=w.z
q=W.b0
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.V(a,"touchstart",H.b(w.geW(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.V(a,"touchend",H.b(w.geU(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.V(a,"touchmove",H.b(w.geV(),u),!1,q))
z.r=w
z.y=!0
z.z=!1
z.Q=new P.an(Date.now(),!1)
z.ch=0
z.cS()
return z}}},iA:{"^":"u:28;a",
$1:function(a){var z
H.l0(a)
z=this.a
if(z.z){z.z=!1
z.hl()}}}}],["","",,Z,{"^":"",eK:{"^":"a;a,b",q:{
d2:function(a,b,c){var z
H.w(c,"$isf",[P.A],"$asf")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bH(c)),35044)
a.bindBuffer(b,null)
return new Z.eK(b,z)}}},dq:{"^":"ct;a,b,c,d,e",
Y:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.aT(y)
x=P.q('Failed to bind buffer attribute "'+J.a7(this.a)+'": '+H.j(z))
throw H.h(x)}},
i:function(a){return"["+J.a7(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},eL:{"^":"a;a",$islh:1},cw:{"^":"a;a,0b,c,d",
aq:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
Y:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].Y(a)},
b3:function(a){var z,y,x
for(z=this.c,y=z.length-1;y>=0;--y){x=z[y]
a.a.disableVertexAttribArray(x.e)}a.a.bindBuffer(this.a.a,null)},
a4:function(a){var z,y,x,w,v
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
z=[P.o]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a7(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.B(y,", ")+"\nAttrs:   "+C.a.B(u,", ")},
$ismx:1},cb:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aZ(this.c)+"'")+"]"}},b1:{"^":"a;a",
gcq:function(a){var z,y
z=this.a
y=(z&$.$get$ap().a)!==0?3:0
if((z&$.$get$aH().a)!==0)y+=3
if((z&$.$get$aG().a)!==0)y+=3
if((z&$.$get$aI().a)!==0)y+=2
if((z&$.$get$aJ().a)!==0)y+=3
if((z&$.$get$bB().a)!==0)y+=3
if((z&$.$get$bC().a)!==0)y+=4
if((z&$.$get$b2().a)!==0)++y
return(z&$.$get$aF().a)!==0?y+4:y},
fI:function(a){var z,y,x
z=$.$get$ap()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aH()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aG()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aI()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aJ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bB()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bC()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b2()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aF()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eJ()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b1))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.o])
y=this.a
if((y&$.$get$ap().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aH().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aG().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aI().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aJ().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bB().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bC().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b2().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aF().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.B(z,"|")},
q:{
ak:function(a){return new Z.b1(a)}}}}],["","",,D,{"^":"",dt:{"^":"a;"},aU:{"^":"a;0a,0b,0c",
v:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y.length
if(a==null){a=new D.l(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.c>0){if(this.b==null)this.b=w}else C.a.L(y,new D.fW(z))
return x!==0},
d8:function(){return this.v(null)},
hn:function(a,b,c){var z,y
z=this.c
if(z>0){--z
this.c=z
if(z<=0)z=this.b!=null
else z=!1
if(z){y=this.b
this.b=null
this.v(y)}}},
at:function(a){return this.hn(a,!0,!1)},
q:{
D:function(){var z=new D.aU()
z.a=H.c([],[{func:1,ret:-1,args:[D.l]}])
z.c=0
return z}}},fW:{"^":"u:29;a",
$1:function(a){var z
H.b(a,{func:1,ret:-1,args:[D.l]})
z=this.a.a
z.b
a.$1(z)}},l:{"^":"a;a,0b"},bP:{"^":"l;c,d,a,0b,$ti"},bQ:{"^":"l;c,d,a,0b,$ti"},E:{"^":"l;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",dr:{"^":"a;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dr))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)},
q:{"^":"li<"}},dP:{"^":"a;a,b",
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dP))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},dQ:{"^":"l;c,a,0b"},hb:{"^":"a;0a,0b,0c,0d",
hg:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.dQ(a,this)
y.b=!0
return z.v(y)},
hc:function(a){var z,y
this.c=a.b
this.d.U(0,a.a)
z=this.b
if(z==null)return!1
y=new X.dQ(a,this)
y.b=!0
return z.v(y)}},dU:{"^":"ce;x,y,c,d,e,a,0b"},hk:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ak:function(a,b){var z,y,x,w,v,u,t,s
z=new P.an(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.l()
v=b.b
u=this.ch
if(typeof v!=="number")return v.l()
t=new V.O(y.a+x*w,y.b+v*u)
u=this.a.gaD()
s=new X.bp(a,new V.O(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cg:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.v(this.ak(a,b))
return!0},
aV:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dQ()
if(typeof z!=="number")return z.dK()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.v(this.ak(a,b))
return!0},
aU:function(a,b){var z=this.d
if(z==null)return!1
z.v(this.ak(a,b))
return!0},
hh:function(a){var z,y,x,w,v,u,t,s
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
w=new X.cO(new V.P(v*u,t*s),y,x,new P.an(w,!1),this)
w.b=!0
z.v(w)
return!0},
eJ:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.an(Date.now(),!1)
y=this.f
x=new X.dU(c,a,this.a.gaD(),b,z,this)
x.b=!0
y.v(x)
this.y=z
this.x=new V.O(0,0)}},as:{"^":"a;a,b,c",
u:function(a,b){var z,y
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
return z+(this.c?"Shift+":"")}},bp:{"^":"ce;x,y,z,Q,ch,c,d,e,a,0b"},hz:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bD:function(a,b,c){var z,y,x
z=new P.an(Date.now(),!1)
y=this.a.gaD()
x=new X.bp(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cg:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.v(this.bD(a,b,!0))
return!0},
aV:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dQ()
if(typeof z!=="number")return z.dK()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.v(this.bD(a,b,!0))
return!0},
aU:function(a,b){var z=this.d
if(z==null)return!1
z.v(this.bD(a,b,!1))
return!0},
hi:function(a,b){var z,y,x,w,v,u,t
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
x=new X.cO(new V.P(w*v,u*t),y,b,new P.an(x,!1),this)
x.b=!0
z.v(x)
return!0},
gd7:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
gbt:function(){var z=this.c
if(z==null){z=D.D()
this.c=z}return z},
gdC:function(){var z=this.d
if(z==null){z=D.D()
this.d=z}return z}},cO:{"^":"ce;x,c,d,e,a,0b"},ce:{"^":"l;"},em:{"^":"ce;x,y,z,Q,ch,c,d,e,a,0b"},iE:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
ak:function(a,b){var z,y,x,w
H.w(a,"$isf",[V.O],"$asf")
z=new P.an(Date.now(),!1)
y=a.length>0?a[0]:new V.O(0,0)
x=this.a.gaD()
w=new X.em(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hf:function(a){var z
H.w(a,"$isf",[V.O],"$asf")
z=this.b
if(z==null)return!1
z.v(this.ak(a,!0))
return!0},
hd:function(a){var z
H.w(a,"$isf",[V.O],"$asf")
z=this.c
if(z==null)return!1
z.v(this.ak(a,!0))
return!0},
he:function(a){var z
H.w(a,"$isf",[V.O],"$asf")
z=this.d
if(z==null)return!1
z.v(this.ak(a,!1))
return!0}},iU:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gaD:function(){var z=this.a
return V.e8(0,0,(z&&C.k).gbd(z).c,C.k.gbd(z).d)},
cK:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dP(z,new X.as(y,a.altKey,a.shiftKey))},
aC:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.as(y,a.altKey,a.shiftKey)},
bO:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.as(y,a.altKey,a.shiftKey)},
am:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.I()
v=z.top
if(typeof x!=="number")return x.I()
return new V.O(y-w,x-v)},
aO:function(a){return new V.P(a.movementX,a.movementY)},
bL:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.O])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
t=C.j.ad(u.pageX)
C.j.ad(u.pageY)
s=z.left
C.j.ad(u.pageX)
C.a.h(y,new V.O(t-s,C.j.ad(u.pageY)-z.top))}return y},
ai:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dr(z,new X.as(y,a.altKey,a.shiftKey))},
hO:[function(a){this.f=!0},"$1","geF",4,0,4],
hH:[function(a){this.f=!1},"$1","gey",4,0,4],
hL:[function(a){if(this.f)a.preventDefault()},"$1","geC",4,0,4],
hQ:[function(a){var z
H.k(a,"$isbn")
if(!this.f)return
z=this.cK(a)
if(this.b.hg(z))a.preventDefault()},"$1","geH",4,0,17],
hP:[function(a){var z
H.k(a,"$isbn")
if(!this.f)return
z=this.cK(a)
if(this.b.hc(z))a.preventDefault()},"$1","geG",4,0,17],
hS:[function(a){var z,y,x,w
H.k(a,"$isat")
z=this.a
z.focus()
this.f=!0
this.aC(a)
if(this.x){y=this.ai(a)
x=this.aO(a)
if(this.d.cg(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ai(a)
w=this.am(a)
if(this.c.cg(y,w))a.preventDefault()},"$1","geK",4,0,5],
hU:[function(a){var z,y,x
H.k(a,"$isat")
this.aC(a)
z=this.ai(a)
if(this.x){y=this.aO(a)
if(this.d.aV(z,y))a.preventDefault()
return}if(this.r)return
x=this.am(a)
if(this.c.aV(z,x))a.preventDefault()},"$1","geM",4,0,5],
hN:[function(a){var z,y,x,w
H.k(a,"$isat")
z=this.a
if(!(z&&C.k).gbd(z).d4(0,new P.bV(a.clientX,a.clientY,[P.S]))){this.aC(a)
y=this.ai(a)
if(this.x){x=this.aO(a)
if(this.d.aV(y,x))a.preventDefault()
return}if(this.r)return
w=this.am(a)
if(this.c.aV(y,w))a.preventDefault()}},"$1","geE",4,0,5],
hT:[function(a){var z,y,x
H.k(a,"$isat")
this.aC(a)
z=this.ai(a)
if(this.x){y=this.aO(a)
if(this.d.aU(z,y))a.preventDefault()
return}if(this.r)return
x=this.am(a)
if(this.c.aU(z,x))a.preventDefault()},"$1","geL",4,0,5],
hM:[function(a){var z,y,x,w
H.k(a,"$isat")
z=this.a
if(!(z&&C.k).gbd(z).d4(0,new P.bV(a.clientX,a.clientY,[P.S]))){this.aC(a)
y=this.ai(a)
if(this.x){x=this.aO(a)
if(this.d.aU(y,x))a.preventDefault()
return}if(this.r)return
w=this.am(a)
if(this.c.aU(y,w))a.preventDefault()}},"$1","geD",4,0,5],
hV:[function(a){var z,y
H.k(a,"$isbD")
this.aC(a)
z=new V.P((a&&C.t).gfQ(a),C.t.gfR(a)).w(0,180)
if(this.x){if(this.d.hh(z))a.preventDefault()
return}if(this.r)return
y=this.am(a)
if(this.c.hi(z,y))a.preventDefault()},"$1","geN",4,0,31],
hW:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.ai(this.y)
v=this.am(this.y)
this.d.eJ(w,v,x)}},"$1","geO",4,0,4],
i3:[function(a){var z
H.k(a,"$isb0")
this.a.focus()
this.f=!0
this.bO(a)
z=this.bL(a)
if(this.e.hf(z))a.preventDefault()},"$1","geW",4,0,10],
i1:[function(a){var z
H.k(a,"$isb0")
this.bO(a)
z=this.bL(a)
if(this.e.hd(z))a.preventDefault()},"$1","geU",4,0,10],
i2:[function(a){var z
H.k(a,"$isb0")
this.bO(a)
z=this.bL(a)
if(this.e.he(z))a.preventDefault()},"$1","geV",4,0,10]}}],["","",,D,{"^":"",c7:{"^":"a;0a,0b,0c,0d",
gt:function(){var z=this.d
if(z==null){z=D.D()
this.d=z}return z},
av:[function(a){var z
H.k(a,"$isl")
z=this.d
if(!(z==null))z.v(a)},function(){return this.av(null)},"hy","$1","$0","ge4",0,2,0],
$isW:1,
$isau:1},W:{"^":"a;",$isau:1},hc:{"^":"ag;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gt:function(){var z=this.Q
if(z==null){z=D.D()
this.Q=z}return z},
av:function(a){var z=this.Q
if(!(z==null))z.v(a)},
eI:[function(a){var z
H.k(a,"$isl")
z=this.ch
if(!(z==null))z.v(a)},function(){return this.eI(null)},"hR","$1","$0","gcO",0,2,0],
hX:[function(a){var z,y,x
H.w(a,"$isd",[D.W],"$asd")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.x)(a),++y){x=a[y]
if(x==null||this.ef(x))return!1}return!0},"$1","geP",4,0,33],
hE:[function(a,b){var z,y,x,w,v,u,t,s
z=D.W
H.w(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gcO(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.k(b[u],"$isW")
if(t instanceof D.c7)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aU()
s.a=H.c([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.h(s.a,x)}z=new D.bP(a,b,this,[z])
z.b=!0
this.av(z)},"$2","gev",8,0,18],
hZ:[function(a,b){var z,y,x,w,v,u,t,s
z=D.W
H.w(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gcO(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.k(b[u],"$isW")
if(t instanceof D.c7)C.a.U(this.e,t)
s=t.d
if(s==null){s=new D.aU()
s.a=H.c([],v)
s.c=0
t.d=s}H.b(x,w)
C.a.U(s.a,x)}z=new D.bQ(a,b,this,[z])
z.b=!0
this.av(z)},"$2","geR",8,0,18],
ef:function(a){var z=C.a.aR(this.e,a)
return z},
$asd:function(){return[D.W]},
$asag:function(){return[D.W]}},hI:{"^":"a;",$isW:1,$isau:1},ih:{"^":"a;",$isW:1,$isau:1},iv:{"^":"a;",$isW:1,$isau:1},iw:{"^":"a;",$isW:1,$isau:1},ix:{"^":"a;",$isW:1,$isau:1}}],["","",,V,{"^":"",
lk:[function(a,b){if(typeof b!=="number")return b.I()
if(typeof a!=="number")return H.p(a)
return Math.abs(b-a)<=1e-9},"$2","hw",8,0,32],
l9:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.j.dP(a-b,z)
return(a<0?a+z:a)+b},
L:function(a,b,c){if(a==null)return C.h.a8("null",c)
return C.h.a8(C.j.dJ($.n.$2(a,0)?0:a,b),c+b+1)},
b8:function(a,b,c){var z,y,x,w,v,u
H.w(a,"$isf",[P.v],"$asf")
z=H.c([],[P.o])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.x)(a),++w){v=V.L(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.i(z,u)
C.a.Z(z,u,C.h.a8(z[u],x))}return z},
di:function(a,b){return C.j.hu(Math.pow(b,C.z.c8(Math.log(H.kF(a))/Math.log(b))))},
X:{"^":"a;a,b,c",
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
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}},
aM:{"^":"a;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aM))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+", "+V.L(this.d,3,0)+"]"}},
dY:{"^":"a;a,b,c,d,e,f,r,x,y",
a5:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.v])
return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dY))return!1
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
y=V.b8(H.c([this.a,this.d,this.r],z),3,0)
x=V.b8(H.c([this.b,this.e,this.x],z),3,0)
w=V.b8(H.c([this.c,this.f,this.y],z),3,0)
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
aD:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a5:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.v])
return z},
ca:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.n.$2(a2,0))return V.aY()
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
cm:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
b2:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aD))return!1
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
i:function(a){return this.G()},
dw:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.v]
y=V.b8(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.b8(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.b8(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.b8(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
G:function(){return this.dw("",3,0)},
A:function(a){return this.dw(a,3,0)},
q:{
ar:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aY:function(){return V.ar(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
dZ:function(a,b,c){var z,y,x,w,v
z=c.w(0,Math.sqrt(c.C(c)))
y=b.aS(z)
x=y.w(0,Math.sqrt(y.C(y)))
w=z.aS(x)
v=new V.G(a.a,a.b,a.c)
return V.ar(x.a,w.a,z.a,x.J(0).C(v),x.b,w.b,z.b,w.J(0).C(v),x.c,w.c,z.c,z.J(0).C(v),0,0,0,1)}}},
O:{"^":"a;n:a>,p:b>",
I:function(a,b){return new V.O(this.a-b.a,this.b-b.b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}},
ac:{"^":"a;n:a>,p:b>,c",
I:function(a,b){return new V.ac(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ac))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}},
bs:{"^":"a;n:a>,p:b>,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bs))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+", "+V.L(this.d,3,0)+"]"}},
e7:{"^":"a;n:a>,p:b>,c,d",
ga3:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e7))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+", "+V.L(this.d,3,0)+"]"},
q:{
e8:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e7(a,b,c,d)}}},
P:{"^":"a;a,b",
h_:[function(a){return Math.sqrt(this.C(this))},"$0","gk",1,0,19],
C:function(a){var z,y,x,w
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
w:function(a,b){var z,y
if($.n.$2(b,0))return new V.P(0,0)
z=this.a
if(typeof z!=="number")return z.w()
y=this.b
if(typeof y!=="number")return y.w()
return new V.P(z/b,y/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.P))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}},
G:{"^":"a;a,b,c",
h_:[function(a){return Math.sqrt(this.C(this))},"$0","gk",1,0,19],
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cc:function(a,b){var z,y,x
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
F:function(a,b){return new V.G(this.a+b.a,this.b+b.b,this.c+b.c)},
J:function(a){return new V.G(-this.a,-this.b,-this.c)},
w:function(a,b){if($.n.$2(b,0))return new V.G(0,0,0)
return new V.G(this.a/b,this.b/b,this.c/b)},
dA:function(){if(!$.n.$2(0,this.a))return!1
if(!$.n.$2(0,this.b))return!1
if(!$.n.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.G))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}}],["","",,U,{"^":"",fE:{"^":"dt;0a,0b,0c,0d,0e,0f,0r,0x,0y",
by:function(a){var z=V.l9(a,this.c,this.b)
return z},
gt:function(){var z=this.y
if(z==null){z=D.D()
this.y=z}return z},
K:function(a){var z=this.y
if(!(z==null))z.v(a)},
scn:function(a,b){},
scd:function(a){var z,y
z=this.b
if(!$.n.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.by(z)}z=new D.E("maximumLocation",y,this.b,this,[P.v])
z.b=!0
this.K(z)}},
scf:function(a){var z,y
z=this.c
if(!$.n.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.by(z)}z=new D.E("minimumLocation",y,this.c,this,[P.v])
z.b=!0
this.K(z)}},
sa2:function(a,b){var z,y
b=this.by(b)
z=this.d
if(!$.n.$2(z,b)){y=this.d
this.d=b
z=new D.E("location",y,b,this,[P.v])
z.b=!0
this.K(z)}},
sce:function(a){var z,y,x
z=this.e
if(!$.n.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.E("maximumVelocity",y,a,this,[P.v])
z.b=!0
this.K(z)}},
sM:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.n.$2(z,a)){x=this.f
this.f=a
z=new D.E("velocity",x,a,this,[P.v])
z.b=!0
this.K(z)}},
sc_:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.n.$2(z,a)){y=this.x
this.x=a
z=new D.E("dampening",y,a,this,[P.v])
z.b=!0
this.K(z)}},
ae:function(a,b){var z,y,x,w
z=this.f
if($.n.$2(z,0)){z=this.r
z=!$.n.$2(z,0)}else z=!0
if(z){y=this.f+this.r*b
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa2(0,this.d+y*b)
z=this.x
if(!$.n.$2(z,0)){w=y*Math.pow(1-this.x,b)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sM(y)}},
q:{
cB:function(){var z=new U.fE()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dv:{"^":"a8;0a,0b",
gt:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
aL:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dv))return!1
return J.U(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")},
q:{
dw:function(a){var z=new U.dv()
z.a=a
return z}}},dI:{"^":"ag;0e,0f,0r,0a,0b,0c,0d",
gt:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
K:[function(a){var z
H.k(a,"$isl")
z=this.e
if(!(z==null))z.v(a)},function(){return this.K(null)},"ab","$1","$0","gaw",0,2,0],
hD:[function(a,b){var z,y,x,w,v,u,t
z=U.a8
H.w(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gaw(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gt()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.bP(a,b,this,[z])
z.b=!0
this.K(z)},"$2","geu",8,0,20],
hY:[function(a,b){var z,y,x,w,v,u,t
z=U.a8
H.w(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gaw(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gt()
t.toString
H.b(x,w)
C.a.U(t.a,x)}}z=new D.bQ(a,b,this,[z])
z.b=!0
this.K(z)},"$2","geQ",8,0,20],
aL:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.a9()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.c
for(z=this.a,z=new J.am(z,z.length,0,[H.z(z,0)]),x=null;z.D();){y=z.d
if(y!=null){w=y.aL(0,b,c)
if(w!=null)x=x==null?w:w.l(0,x)}}this.f=x==null?V.aY():x
z=this.e
if(!(z==null))z.at(0)}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dI))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.i(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.i(w,y)
if(!J.U(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asd:function(){return[U.a8]},
$asag:function(){return[U.a8]},
$isa8:1},a8:{"^":"dt;"},iV:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gt:function(){var z=this.cy
if(z==null){z=D.D()
this.cy=z}return z},
K:[function(a){var z
H.k(a,"$isl")
z=this.cy
if(!(z==null))z.v(a)},function(){return this.K(null)},"ab","$1","$0","gaw",0,2,0],
aP:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gd7()
z.toString
y={func:1,ret:-1,args:[D.l]}
x=H.b(this.gbG(),y)
C.a.h(z.a,x)
x=this.a.c.gdC()
x.toString
z=H.b(this.gbH(),y)
C.a.h(x.a,z)
z=this.a.c.gbt()
z.toString
y=H.b(this.gbI(),y)
C.a.h(z.a,y)
return!0},
ep:[function(a){H.k(a,"$isl")
if(!J.U(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbG",4,0,1],
eq:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$isl"),"$isbp")
if(!this.y)return
if(this.x){z=a.d.I(0,a.y)
z=new V.P(z.a,z.b)
z=z.C(z)
y=this.r
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.I(0,a.y)
z=new V.P(y.a,y.b).l(0,2).w(0,z.ga3())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.l()
x=this.e
if(typeof x!=="number")return H.p(x)
y.sM(z*10*x)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=new V.P(x.a,x.b).l(0,2).w(0,z.ga3())
x=this.b
v=w.a
if(typeof v!=="number")return v.J()
u=this.e
if(typeof u!=="number")return H.p(u)
t=this.z
if(typeof t!=="number")return H.p(t)
x.sa2(0,-v*u+t)
this.b.sM(0)
y=y.I(0,a.z)
this.Q=new V.P(y.a,y.b).l(0,2).w(0,z.ga3())}this.ab()},"$1","gbH",4,0,1],
er:[function(a){var z,y,x
H.k(a,"$isl")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.C(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.l()
x=this.e
if(typeof x!=="number")return H.p(x)
z.sM(y*10*x)
this.ab()}},"$1","gbI",4,0,1],
aL:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.a9()
if(z<y){this.ch=y
x=b.y
this.b.ae(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.ar(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa8:1},iW:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gt:function(){var z=this.fx
if(z==null){z=D.D()
this.fx=z}return z},
K:[function(a){var z
H.k(a,"$isl")
z=this.fx
if(!(z==null))z.v(a)},function(){return this.K(null)},"ab","$1","$0","gaw",0,2,0],
aP:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c.gd7()
z.toString
y={func:1,ret:-1,args:[D.l]}
x=H.b(this.gbG(),y)
C.a.h(z.a,x)
x=this.a.c.gdC()
x.toString
z=H.b(this.gbH(),y)
C.a.h(x.a,z)
z=this.a.c.gbt()
z.toString
x=H.b(this.gbI(),y)
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
x.b=z}x=H.b(this.gfd(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.d
if(z==null){z=D.D()
x.d=z}x=H.b(this.gfc(),y)
C.a.h(z.a,x)
x=this.a.e
z=x.c
if(z==null){z=D.D()
x.c=z}y=H.b(this.gfb(),y)
C.a.h(z.a,y)
return!0},
af:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.J()
z=-z}if(this.r){if(typeof y!=="number")return y.J()
y=-y}return new V.P(z,y)},
ep:[function(a){a=H.e(H.k(a,"$isl"),"$isbp")
if(!J.U(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbG",4,0,1],
eq:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$isl"),"$isbp")
if(!this.cx)return
if(this.ch){z=a.d.I(0,a.y)
z=new V.P(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.I(0,a.y)
z=this.af(new V.P(y.a,y.b).l(0,2).w(0,z.ga3()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.J()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sM(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.J()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sM(-z*10*y)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=this.af(new V.P(x.a,x.b).l(0,2).w(0,z.ga3()))
x=this.c
v=w.a
if(typeof v!=="number")return v.J()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.J()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa2(0,-u*v+x)
this.b.sM(0)
this.c.sM(0)
y=y.I(0,a.z)
this.dx=this.af(new V.P(y.a,y.b).l(0,2).w(0,z.ga3()))}this.ab()},"$1","gbH",4,0,1],
er:[function(a){var z,y,x
H.k(a,"$isl")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.J()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sM(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.J()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sM(-y*10*z)
this.ab()}},"$1","gbI",4,0,1],
hA:[function(a){if(H.e(H.k(a,"$isl"),"$isdU").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gem",4,0,1],
hB:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$isl"),"$isbp")
if(!J.U(this.d,a.x.b))return
z=a.c
y=a.d
x=y.I(0,a.y)
w=this.af(new V.P(x.a,x.b).l(0,2).w(0,z.ga3()))
x=this.c
v=w.a
if(typeof v!=="number")return v.J()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.J()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa2(0,-u*v+x)
this.b.sM(0)
this.c.sM(0)
y=y.I(0,a.z)
this.dx=this.af(new V.P(y.a,y.b).l(0,2).w(0,z.ga3()))
this.ab()},"$1","gen",4,0,1],
i7:[function(a){H.k(a,"$isl")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfd",4,0,1],
i6:[function(a){var z,y,x,w,v,u,t
a=H.e(H.k(a,"$isl"),"$isem")
if(!this.cx)return
if(this.ch){z=a.d.I(0,a.y)
z=new V.P(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.I(0,a.y)
z=this.af(new V.P(y.a,y.b).l(0,2).w(0,z.ga3()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.J()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sM(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.J()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sM(-z*10*y)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=this.af(new V.P(x.a,x.b).l(0,2).w(0,z.ga3()))
x=this.c
v=w.a
if(typeof v!=="number")return v.J()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.J()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sa2(0,-u*v+x)
this.b.sM(0)
this.c.sM(0)
y=y.I(0,a.z)
this.dx=this.af(new V.P(y.a,y.b).l(0,2).w(0,z.ga3()))}this.ab()},"$1","gfc",4,0,1],
i5:[function(a){var z,y,x
H.k(a,"$isl")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.J()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sM(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.J()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sM(-y*10*z)
this.ab()}},"$1","gfb",4,0,1],
aL:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.a9()
if(z<y){this.dy=y
x=b.y
this.c.ae(0,x)
this.b.ae(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.ar(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.l(0,V.ar(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isa8:1},iX:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gt:function(){var z=this.r
if(z==null){z=D.D()
this.r=z}return z},
K:function(a){var z=this.r
if(!(z==null))z.v(a)},
aP:function(a){var z,y,x
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
hC:[function(a){var z,y,x,w
H.k(a,"$isl")
if(!J.U(this.b,this.a.b.c))return
H.e(a,"$iscO")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.l()
w=z+y*x
if(z!==w){this.d=w
z=new D.E("zoom",z,w,this,[P.v])
z.b=!0
this.K(z)}},"$1","ges",4,0,1],
aL:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.ar(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa8:1}}],["","",,M,{"^":"",fF:{"^":"ag;0e,0f,0a,0b,0c,0d",
gt:function(){var z=this.f
if(z==null){z=D.D()
this.f=z}return z},
V:[function(a){var z
H.k(a,"$isl")
z=this.f
if(!(z==null))z.v(a)},function(){return this.V(null)},"cA","$1","$0","gP",0,2,0],
i_:[function(a,b){var z,y,x,w,v,u,t
z=M.av
H.w(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gP(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gt()
t.toString
H.b(x,w)
C.a.h(t.a,x)}}z=new D.bP(a,b,this,[z])
z.b=!0
this.V(z)},"$2","geS",8,0,21],
i0:[function(a,b){var z,y,x,w,v,u,t
z=M.av
H.w(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gP(),w={func:1,ret:-1,args:[D.l]},v=0;v<b.length;b.length===y||(0,H.x)(b),++v){u=b[v]
if(u!=null){t=u.gt()
t.toString
H.b(x,w)
C.a.U(t.a,x)}}z=new D.bQ(a,b,this,[z])
z.b=!0
this.V(z)},"$2","geT",8,0,21],
a4:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.D();){y=z.d
if(!(y==null))y.a4(a)}this.e=!1},
$asd:function(){return[M.av]},
$asag:function(){return[M.av]},
$isav:1},fH:{"^":"a;0a,0b,0c,0d,0e,0f",
gt:function(){var z=this.f
if(z==null){z=D.D()
this.f=z}return z},
V:[function(a){var z
H.k(a,"$isl")
z=this.f
if(!(z==null))z.v(a)},function(){return this.V(null)},"cA","$1","$0","gP",0,2,0],
saQ:function(a){var z,y,x
if(a==null)a=new X.h2()
z=this.a
if(z!==a){if(z!=null){z=z.gt()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.U(z.a,y)}x=this.a
this.a=a
z=a.gt()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.E("camera",x,this.a,this,[X.c4])
z.b=!0
this.V(z)}},
saY:function(a,b){var z,y,x
if(b==null)b=X.cD(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gt()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.U(z.a,y)}x=this.b
this.b=b
z=b.gt()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.E("target",x,this.b,this,[X.cX])
z.b=!0
this.V(z)}},
saZ:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gt()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.U(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gt()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.E("technique",x,this.c,this,[O.bX])
z.b=!0
this.V(z)}},
a4:function(a){a.cj(this.c)
this.b.Y(a)
this.a.Y(a)
this.d.ae(0,a)
this.d.a4(a)
this.a.b3(a)
this.b.toString
a.ci()},
$isav:1},fU:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
V:[function(a){var z
H.k(a,"$isl")
z=this.x
if(!(z==null))z.v(a)},function(){return this.V(null)},"cA","$1","$0","gP",0,2,0],
hJ:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aC
H.w(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gP(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.ga_()==null){s=new D.aU()
s.a=H.c([],v)
s.c=0
t.sa_(s)}s=t.ga_()
s.toString
H.b(x,w)
C.a.h(s.a,x)}}z=new D.bP(a,b,this,[z])
z.b=!0
this.V(z)},"$2","geA",8,0,8],
hK:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aC
H.w(b,"$isd",[z],"$asd")
for(y=b.length,x=this.gP(),w={func:1,ret:-1,args:[D.l]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.ga_()==null){s=new D.aU()
s.a=H.c([],v)
s.c=0
t.sa_(s)}s=t.ga_()
s.toString
H.b(x,w)
C.a.U(s.a,x)}}z=new D.bQ(a,b,this,[z])
z.b=!0
this.V(z)},"$2","geB",8,0,8],
saQ:function(a){var z,y,x
if(a==null)a=X.e2(2000,1.0471975511965976,null,0.1)
z=this.a
if(z!==a){if(z!=null){z=z.gt()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.U(z.a,y)}x=this.a
this.a=a
z=a.gt()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.E("camera",x,this.a,this,[X.c4])
z.b=!0
this.V(z)}},
saY:function(a,b){var z,y,x
if(b==null)b=X.cD(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null){z=z.gt()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.U(z.a,y)}x=this.b
this.b=b
z=b.gt()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)
z=new D.E("target",x,this.b,this,[X.cX])
z.b=!0
this.V(z)}},
saZ:function(a){var z,y,x
z=this.c
if(z==null?a!=null:z!==a){if(z!=null){z=z.gt()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.U(z.a,y)}x=this.c
this.c=a
if(a!=null){z=a.gt()
z.toString
y=H.b(this.gP(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.E("technique",x,this.c,this,[O.bX])
z.b=!0
this.V(z)}},
gt:function(){var z=this.x
if(z==null){z=D.D()
this.x=z}return z},
a4:function(a){var z
a.cj(this.c)
this.b.Y(a)
this.a.Y(a)
z=this.c
if(z!=null)z.ae(0,a)
for(z=this.d.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.D();)z.d.ae(0,a)
for(z=this.d.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.D();)z.d.a4(a)
this.a.toString
a.cy.as()
a.db.as()
this.b.toString
a.ci()},
$isav:1},av:{"^":"a;"}}],["","",,A,{"^":"",dm:{"^":"a;a,b,c"},fu:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
fS:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
d6:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},dX:{"^":"cT;0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aH,0ap,0aI,0be,0d9,0da,0bf,0bg,0dc,0dd,0bh,0bi,0de,0df,0bj,0dg,0dh,0bk,0di,0dj,0bl,0bm,0bn,0dk,0dl,0bo,0bp,0dm,0dn,0bq,0dq,0c2,0dr,0c3,0ds,0c4,0dt,0c5,0du,0c6,0dv,0c7,a,b,0c,0d,0e,0f,0r",
dY:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.x=a1
z=new P.bW("")
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
a1.fg(z)
a1.fn(z)
a1.fh(z)
a1.fw(z)
a1.fz(z)
a1.fp(z)
a1.fD(z)
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
z=new P.bW("")
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
v.fk(z)
v.ff(z)
v.fi(z)
v.fl(z)
v.fu(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.fs(z)
v.ft(z)}v.fo(z)
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
p=H.c([],[P.o])
if(v.b!==C.b)C.a.h(p,"ambient()")
if(v.c!==C.b)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.b)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.b)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.B(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.fj(z)
v.fq(z)
v.fv(z)
v.fA(z)
v.fB(z)
v.fC(z)
v.fm(z)}r=z.a+="// === Main ===\n"
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
o=H.c([],[P.o])
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
if(a1.x2)this.go=H.e(this.r.m(0,"txt2DMat"),"$isd0")
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
case C.f:break
case C.c:this.r1=H.e(this.r.m(0,"emissionTxt"),"$isaj")
this.rx=H.e(this.r.m(0,"nullEmissionTxt"),"$isH")
break
case C.d:this.r2=H.e(this.r.m(0,"emissionTxt"),"$isad")
this.rx=H.e(this.r.m(0,"nullEmissionTxt"),"$isH")
break}}y=a1.b
if(y!==C.b){this.ry=H.e(this.r.m(0,"ambientClr"),"$isF")
switch(y){case C.b:break
case C.f:break
case C.c:this.x1=H.e(this.r.m(0,"ambientTxt"),"$isaj")
this.y1=H.e(this.r.m(0,"nullAmbientTxt"),"$isH")
break
case C.d:this.x2=H.e(this.r.m(0,"ambientTxt"),"$isad")
this.y1=H.e(this.r.m(0,"nullAmbientTxt"),"$isH")
break}}y=a1.c
if(y!==C.b){this.y2=H.e(this.r.m(0,"diffuseClr"),"$isF")
switch(y){case C.b:break
case C.f:break
case C.c:this.aH=H.e(this.r.m(0,"diffuseTxt"),"$isaj")
this.aI=H.e(this.r.m(0,"nullDiffuseTxt"),"$isH")
break
case C.d:this.ap=H.e(this.r.m(0,"diffuseTxt"),"$isad")
this.aI=H.e(this.r.m(0,"nullDiffuseTxt"),"$isH")
break}}y=a1.d
if(y!==C.b){this.be=H.e(this.r.m(0,"invDiffuseClr"),"$isF")
switch(y){case C.b:break
case C.f:break
case C.c:this.d9=H.e(this.r.m(0,"invDiffuseTxt"),"$isaj")
this.bf=H.e(this.r.m(0,"nullInvDiffuseTxt"),"$isH")
break
case C.d:this.da=H.e(this.r.m(0,"invDiffuseTxt"),"$isad")
this.bf=H.e(this.r.m(0,"nullInvDiffuseTxt"),"$isH")
break}}y=a1.e
if(y!==C.b){this.bi=H.e(this.r.m(0,"shininess"),"$isR")
this.bg=H.e(this.r.m(0,"specularClr"),"$isF")
switch(y){case C.b:break
case C.f:break
case C.c:this.dc=H.e(this.r.m(0,"specularTxt"),"$isaj")
this.bh=H.e(this.r.m(0,"nullSpecularTxt"),"$isH")
break
case C.d:this.dd=H.e(this.r.m(0,"specularTxt"),"$isad")
this.bh=H.e(this.r.m(0,"nullSpecularTxt"),"$isH")
break}}switch(a1.f){case C.b:break
case C.f:break
case C.c:this.de=H.e(this.r.m(0,"bumpTxt"),"$isaj")
this.bj=H.e(this.r.m(0,"nullBumpTxt"),"$isH")
break
case C.d:this.df=H.e(this.r.m(0,"bumpTxt"),"$isad")
this.bj=H.e(this.r.m(0,"nullBumpTxt"),"$isH")
break}if(a1.dy){this.dg=H.e(this.r.m(0,"envSampler"),"$isad")
this.dh=H.e(this.r.m(0,"nullEnvTxt"),"$isH")
y=a1.r
if(y!==C.b){this.bk=H.e(this.r.m(0,"reflectClr"),"$isF")
switch(y){case C.b:break
case C.f:break
case C.c:this.di=H.e(this.r.m(0,"reflectTxt"),"$isaj")
this.bl=H.e(this.r.m(0,"nullReflectTxt"),"$isH")
break
case C.d:this.dj=H.e(this.r.m(0,"reflectTxt"),"$isad")
this.bl=H.e(this.r.m(0,"nullReflectTxt"),"$isH")
break}}y=a1.x
if(y!==C.b){this.bm=H.e(this.r.m(0,"refraction"),"$isR")
this.bn=H.e(this.r.m(0,"refractClr"),"$isF")
switch(y){case C.b:break
case C.f:break
case C.c:this.dk=H.e(this.r.m(0,"refractTxt"),"$isaj")
this.bo=H.e(this.r.m(0,"nullRefractTxt"),"$isH")
break
case C.d:this.dl=H.e(this.r.m(0,"refractTxt"),"$isad")
this.bo=H.e(this.r.m(0,"nullRefractTxt"),"$isH")
break}}}y=a1.y
if(y!==C.b){this.bp=H.e(this.r.m(0,"alpha"),"$isR")
switch(y){case C.b:break
case C.f:break
case C.c:this.dm=H.e(this.r.m(0,"alphaTxt"),"$isaj")
this.bq=H.e(this.r.m(0,"nullAlphaTxt"),"$isH")
break
case C.d:this.dn=H.e(this.r.m(0,"alphaTxt"),"$isad")
this.bq=H.e(this.r.m(0,"nullAlphaTxt"),"$isH")
break}}this.c2=H.c([],[A.ez])
this.c3=H.c([],[A.eA])
this.c4=H.c([],[A.eB])
this.c5=H.c([],[A.eC])
this.c6=H.c([],[A.eD])
this.c7=H.c([],[A.eE])
if(a1.k2){y=a1.z
if(y>0){this.dq=H.k(this.r.m(0,"dirLightCount"),"$isH")
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
x=this.c2;(x&&C.a).h(x,new A.ez(m,l,k))}}y=a1.Q
if(y>0){this.dr=H.k(this.r.m(0,"pntLightCount"),"$isH")
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
x=this.c3;(x&&C.a).h(x,new A.eA(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.ds=H.k(this.r.m(0,"spotLightCount"),"$isH")
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
x=this.c4;(x&&C.a).h(x,new A.eB(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.dt=H.k(this.r.m(0,"txtDirLightCount"),"$isH")
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
H.e(f,"$isaj")
x=this.c5;(x&&C.a).h(x,new A.eC(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.du=H.k(this.r.m(0,"txtPntLightCount"),"$isH")
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
H.e(j,"$isd0")
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
x=this.c6;(x&&C.a).h(x,new A.eD(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.dv=H.k(this.r.m(0,"txtSpotLightCount"),"$isH")
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
H.e(a0,"$isaj")
x=this.c7;(x&&C.a).h(x,new A.eE(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
ac:function(a,b,c){if(c==null||!c.d)b.a.uniform1i(b.d,1)
else{a.dR(c)
b.a.uniform1i(b.d,0)}},
a6:function(a,b,c){b.a.uniform1i(b.d,1)},
q:{
hq:function(a,b){var z,y
z=a.ap
y=new A.dX(b,z)
y.cv(b,z)
y.dY(a,b)
return y}}},ht:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aH,ap,aI",
fg:function(a){var z,y,x
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
fn:function(a){var z
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
fh:function(a){var z
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
fw:function(a){var z,y
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
fz:function(a){var z,y
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
fp:function(a){var z
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
fD:function(a){var z
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
if(0>=c.length)return H.i(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.h.cr(c,1))+"Txt;\n"
a.a=z
if(b===C.c)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
fk:function(a){var z,y
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
ff:function(a){var z,y
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
fi:function(a){var z,y
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
fl:function(a){var z,y
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
fu:function(a){var z,y
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
fo:function(a){var z,y
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
fs:function(a){var z,y
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
ft:function(a){var z,y
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
fj:function(a){var z,y
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
fq:function(a){var z,y
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
fv:function(a){var z,y
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
fA:function(a){var z,y,x
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
fB:function(a){var z,y,x
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
fC:function(a){var z,y,x
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
fm:function(a){var z
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
i:function(a){return this.ap}},ez:{"^":"a;a,b,c"},eC:{"^":"a;a,b,c,d,e,f,r,x"},eA:{"^":"a;a,b,c,d,e,f,r"},eD:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eB:{"^":"a;a,b,c,d,e,f,r,x,y,z"},eE:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cT:{"^":"ct;",
cv:function(a,b){this.c=null
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
if(!H.fb(z.getProgramParameter(this.e,35714))){x=z.getProgramInfoLog(this.e)
z.deleteProgram(this.e)
H.r(P.q("Failed to link shader: "+H.j(x)))}this.f6()
this.f8()},
Y:function(a){a.a.useProgram(this.e)
this.f.fS()},
cL:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.fb(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.h(P.q("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
f6:function(){var z,y,x,w,v,u
z=H.c([],[A.dm])
y=this.a
x=H.Z(y.getProgramParameter(this.e,35721))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.e,w)
u=y.getAttribLocation(this.e,v.name)
C.a.h(z,new A.dm(y,v.name,u))}this.f=new A.fu(z)},
f8:function(){var z,y,x,w,v,u
z=H.c([],[A.a5])
y=this.a
x=H.Z(y.getProgramParameter(this.e,35718))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.e,w)
u=y.getUniformLocation(this.e,v.name)
C.a.h(z,this.fP(v.type,v.size,v.name,u))}this.r=new A.iN(z)},
az:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.H(z,y,b,c)
else return A.d_(z,y,b,a,c)},
eg:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.aj(z,y,b,c)
else return A.d_(z,y,b,a,c)},
eh:function(a,b,c){var z,y
z=this.a
y=this.e
if(a===1)return new A.ad(z,y,b,c)
else return A.d_(z,y,b,a,c)},
ba:function(a,b){return new P.eN(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
fP:function(a,b,c,d){switch(a){case 5120:return this.az(b,c,d)
case 5121:return this.az(b,c,d)
case 5122:return this.az(b,c,d)
case 5123:return this.az(b,c,d)
case 5124:return this.az(b,c,d)
case 5125:return this.az(b,c,d)
case 5126:return new A.R(this.a,this.e,c,d)
case 35664:return new A.iI(this.a,this.e,c,d)
case 35665:return new A.F(this.a,this.e,c,d)
case 35666:return new A.iL(this.a,this.e,c,d)
case 35667:return new A.iJ(this.a,this.e,c,d)
case 35668:return new A.iK(this.a,this.e,c,d)
case 35669:return new A.iM(this.a,this.e,c,d)
case 35674:return new A.iP(this.a,this.e,c,d)
case 35675:return new A.d0(this.a,this.e,c,d)
case 35676:return new A.ay(this.a,this.e,c,d)
case 35678:return this.eg(b,c,d)
case 35680:return this.eh(b,c,d)
case 35670:throw H.h(this.ba("BOOL",c))
case 35671:throw H.h(this.ba("BOOL_VEC2",c))
case 35672:throw H.h(this.ba("BOOL_VEC3",c))
case 35673:throw H.h(this.ba("BOOL_VEC4",c))
default:throw H.h(P.q("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},c5:{"^":"a;a,b",
i:function(a){return this.b}},ea:{"^":"cT;0x,0y,0z,0Q,0ch,0cx,a,b,0c,0d,0e,0f,0r"},a5:{"^":"a;"},iN:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.j(0,b)
if(z==null)throw H.h(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.G()},
fU:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w)x+=z[w].i(0)+a
return x},
G:function(){return this.fU("\n")}},H:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},iJ:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},iK:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},iM:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},iH:{"^":"a5;0e,0f,a,b,c,d",
i:function(a){return"Uniform1iv: "+H.j(this.c)},
q:{
d_:function(a,b,c,d,e){var z=new A.iH(a,b,c,e)
z.f=d
z.e=P.hi(d,0,!1,P.A)
return z}}},R:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},iI:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},F:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},iL:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},iP:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},d0:{"^":"a5;a,b,c,d",
aa:function(a){var z=new Float32Array(H.bH(H.w(a,"$isf",[P.v],"$asf")))
this.a.uniformMatrix3fv(this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},ay:{"^":"a5;a,b,c,d",
aa:function(a){var z=new Float32Array(H.bH(H.w(a,"$isf",[P.v],"$asf")))
this.a.uniformMatrix4fv(this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},aj:{"^":"a5;a,b,c,d",
dR:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},ad:{"^":"a5;a,b,c,d",
dS:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
cl:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bG:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
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
j=F.l6(d,e,new F.kt(z,F.cl(z.c),F.cl(z.d),k,l,c),b)
if(j!=null)a.h5(j)},
l6:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.b(c,{func:1,ret:-1,args:[F.aE,P.v,P.v]})
if(a<1)return
if(b<1)return
z=F.cU()
y=H.c([],[F.aE])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cj(null,null,new V.aM(u,0,0,1),null,null,new V.O(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.bZ(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cj(null,null,new V.aM(o,n,m,1),null,null,new V.O(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.bZ(d))}}z.d.fF(a+1,b+1,y)
return z},
kt:{"^":"u:35;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cc(z.b,b).cc(z.d.cc(z.c,b),c)
z=new V.ac(y.a,y.b,y.c)
if(!J.U(a.f,z)){a.f=z
z=a.a
if(z!=null)z.a1()}a.shs(y.w(0,Math.sqrt(y.C(y))))
z=1-b
x=1-c
x=new V.bs(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.U(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.a1()}}},
ah:{"^":"a;0a,0b,0c,0d,0e",
gc1:function(){return this.a==null||this.b==null||this.c==null},
ea:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.G(0,0,0)
if(y!=null)v=v.F(0,y)
if(x!=null)v=v.F(0,x)
if(w!=null)v=v.F(0,w)
if(v.dA())return
return v.w(0,Math.sqrt(v.C(v)))},
ed:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.I(0,y)
z=new V.G(z.a,z.b,z.c)
v=z.w(0,Math.sqrt(z.C(z)))
z=w.I(0,y)
z=new V.G(z.a,z.b,z.c)
z=v.aS(z.w(0,Math.sqrt(z.C(z))))
return z.w(0,Math.sqrt(z.C(z)))},
bX:function(){if(this.d!=null)return!0
var z=this.ea()
if(z==null){z=this.ed()
if(z==null)return!1}this.d=z
this.a.a.a1()
return!0},
e9:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.G(0,0,0)
if(y!=null)v=v.F(0,y)
if(x!=null)v=v.F(0,x)
if(w!=null)v=v.F(0,w)
if(v.dA())return
return v.w(0,Math.sqrt(v.C(v)))},
ec:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
z=new V.G(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.C(z)))
if(o.a-p.a<0)m=m.J(0)}else{l=(z-q.b)/n
z=r.I(0,u)
z=new V.ac(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).I(0,x)
z=new V.G(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.C(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.J(0)}z=this.d
if(z!=null){k=z.w(0,Math.sqrt(z.C(z)))
z=k.aS(m)
z=z.w(0,Math.sqrt(z.C(z))).aS(k)
m=z.w(0,Math.sqrt(z.C(z)))}return m},
bV:function(){if(this.e!=null)return!0
var z=this.e9()
if(z==null){z=this.ec()
if(z==null)return!1}this.e=z
this.a.a.a1()
return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
A:function(a){var z,y
if(this.gc1())return a+"disposed"
z=a+C.h.a8(J.a7(this.a.e),0)+", "+C.h.a8(J.a7(this.b.e),0)+", "+C.h.a8(J.a7(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
G:function(){return this.A("")},
q:{
bg:function(a,b,c){var z,y,x
z=new F.ah()
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
z.a.a.a1()
return z}}},
cL:{"^":"a;0a,0b",
gc1:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
A:function(a){if(this.gc1())return a+"disposed"
return a+C.h.a8(J.a7(this.a.e),0)+", "+C.h.a8(J.a7(this.b.e),0)},
G:function(){return this.A("")}},
cQ:{"^":"a;0a",
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
A:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.h.a8(J.a7(z.e),0)},
G:function(){return this.A("")}},
e9:{"^":"a;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
h5:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.c
a.a.W()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){v=z[w]
this.a.h(0,v.fO())}this.a.W()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.W()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.cQ()
if(r.a==null)H.r(P.q("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.v(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.W()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.W()
t=t.e
if(typeof t!=="number")return t.F()
t+=y
s=s.c
if(t>=s.length)return H.i(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
t=new F.cL()
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
if(!(t==null))t.v(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.W()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.W()
t=t.e
if(typeof t!=="number")return t.F()
t+=y
s=s.c
if(t>=s.length)return H.i(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.W()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
l=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,l)
F.bg(p,o,l)}z=this.e
if(!(z==null))z.at(0)},
an:function(){var z,y
z=this.e
if(!(z==null))++z.c
y=this.d.an()||!1
if(!this.a.an())y=!1
z=this.e
if(!(z==null))z.at(0)
return y},
d1:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$ap()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aH().a)!==0)++w
if((x&$.$get$aG().a)!==0)++w
if((x&$.$get$aI().a)!==0)++w
if((x&$.$get$aJ().a)!==0)++w
if((x&$.$get$bB().a)!==0)++w
if((x&$.$get$bC().a)!==0)++w
if((x&$.$get$b2().a)!==0)++w
if((x&$.$get$aF().a)!==0)++w
v=b.gcq(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.v
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.dq])
for(r=0,q=0;q<w;++q){p=b.fI(q)
o=p.gcq(p)
C.a.Z(s,q,new Z.dq(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.i(y,n)
m=y[n].h0(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.Z(t,l,m[k]);++l}}r+=o}H.w(t,"$isf",[x],"$asf")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bH(t)),35044)
y.bindBuffer(34962,null)
i=new Z.cw(new Z.eK(34962,j),s,b)
i.b=H.c([],[Z.cb])
if(this.b.b.length!==0){x=P.A
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.W()
C.a.h(h,g.e)}f=Z.d2(y,34963,H.w(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.cb(0,h.length,f))}if(this.c.b.length!==0){x=P.A
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.W()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.W()
C.a.h(h,g.e)}f=Z.d2(y,34963,H.w(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.cb(1,h.length,f))}if(this.d.b.length!==0){x=P.A
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
C.a.h(h,g.e)}f=Z.d2(y,34963,H.w(h,"$isf",[x],"$asf"))
C.a.h(i.b,new Z.cb(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.o])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.A("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.A("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.A("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.A("   "))}return C.a.B(z,"\n")},
aK:function(a){var z=this.e
if(!(z==null))z.v(a)},
a1:function(){return this.aK(null)},
q:{
cU:function(){var z,y
z=new F.e9()
y=new F.j_(z)
y.b=!1
y.c=H.c([],[F.aE])
z.a=y
y=new F.i8(z)
y.b=H.c([],[F.cQ])
z.b=y
y=new F.i7(z)
y.b=H.c([],[F.cL])
z.c=y
y=new F.i6(z)
y.b=H.c([],[F.ah])
z.d=y
z.e=null
return z}}},
i6:{"^":"a;a,0b",
fE:function(a){var z,y,x,w,v
H.w(a,"$isf",[F.aE],"$asf")
z=H.c([],[F.ah])
y=a[0]
for(x=2;x<4;++x){w=a[x-1]
v=a[x]
this.a.a.h(0,y)
this.a.a.h(0,w)
this.a.a.h(0,v)
C.a.h(z,F.bg(y,w,v))}return z},
fF:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.w(c,"$isf",[F.aE],"$asf")
z=H.c([],[F.ah])
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
C.a.h(z,F.bg(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bg(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bg(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bg(q,n,r))}u=!u}w=!w}return z},
gk:function(a){return this.b.length},
an:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].bX())x=!1
return x},
bW:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].bV())x=!1
return x},
i:function(a){return this.G()},
A:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
G:function(){return this.A("")}},
i7:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.G()},
A:function(a){var z,y,x,w
z=H.c([],[P.o])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.i(w,x)
C.a.h(z,w[x].A(a+(""+x+". ")))}return C.a.B(z,"\n")},
G:function(){return this.A("")}},
i8:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.G()},
A:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
G:function(){return this.A("")}},
aE:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bZ:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cj(this.cx,x,u,z,y,w,v,a,t)},
fO:function(){return this.bZ(null)},
shs:function(a){var z
if(!J.U(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a1()}},
h0:function(a){var z,y
z=J.J(a)
if(z.u(a,$.$get$ap())){z=this.f
y=[P.v]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aH())){z=this.r
y=[P.v]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aG())){z=this.x
y=[P.v]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$aI())){z=this.y
y=[P.v]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.u(a,$.$get$aJ())){z=this.z
y=[P.v]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bB())){z=this.Q
y=[P.v]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.u(a,$.$get$bC())){z=this.Q
y=[P.v]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(z.u(a,$.$get$b2()))return H.c([this.ch],[P.v])
else if(z.u(a,$.$get$aF())){z=this.cx
y=[P.v]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.v])},
bX:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.L(0,new F.j6(z))
z=z.a
this.r=z.w(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.a1()
z=this.a.e
if(!(z==null))z.at(0)}return!0},
bV:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.c}z.a=new V.G(0,0,0)
this.d.L(0,new F.j5(z))
z=z.a
this.x=z.w(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.a1()
z=this.a.e
if(!(z==null))z.at(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
A:function(a){var z,y,x
z=H.c([],[P.o])
C.a.h(z,C.h.a8(J.a7(this.e),0))
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
G:function(){return this.A("")},
q:{
cj:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aE()
y=new F.j4(z)
y.b=H.c([],[F.cQ])
z.b=y
y=new F.j3(z)
x=[F.cL]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.j0(z)
x=[F.ah]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
z.d=y
h=$.$get$eH()
z.e=0
y=$.$get$ap()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aH().a)!==0?e:null
z.x=(x&$.$get$aG().a)!==0?b:null
z.y=(x&$.$get$aI().a)!==0?f:null
z.z=(x&$.$get$aJ().a)!==0?g:null
z.Q=(x&$.$get$eI().a)!==0?c:null
z.ch=(x&$.$get$b2().a)!==0?i:0
z.cx=(x&$.$get$aF().a)!==0?a:null
return z}}},
j6:{"^":"u:6;a",
$1:function(a){var z,y
H.k(a,"$isah")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
j5:{"^":"u:6;a",
$1:function(a){var z,y
H.k(a,"$isah")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
j_:{"^":"a;a,0b,0c",
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
this.a.a1()
return!0},
fG:function(a,b,c,d,e,f,g,h,i){var z=F.cj(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bb:function(a,b,c,d,e,f){return this.fG(a,null,b,c,null,d,e,f,0)},
gk:function(a){return this.c.length},
an:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].bX()
return!0},
bW:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].bV()
return!0},
fK:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.w(0,Math.sqrt(u*u+t*t+s*s))
if(!J.U(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.v(null)}}}}return!0},
i:function(a){return this.G()},
A:function(a){var z,y,x,w
this.W()
z=H.c([],[P.o])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
G:function(){return this.A("")}},
j0:{"^":"a;a,0b,0c,0d",
gk:function(a){return this.b.length+this.c.length+this.d.length},
L:function(a,b){H.b(b,{func:1,ret:-1,args:[F.ah]})
C.a.L(this.b,b)
C.a.L(this.c,new F.j1(this,b))
C.a.L(this.d,new F.j2(this,b))},
i:function(a){return this.G()},
A:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
G:function(){return this.A("")}},
j1:{"^":"u:6;a,b",
$1:function(a){H.k(a,"$isah")
if(!J.U(a.a,this.a))this.b.$1(a)}},
j2:{"^":"u:6;a,b",
$1:function(a){var z
H.k(a,"$isah")
z=this.a
if(!J.U(a.a,z)&&!J.U(a.b,z))this.b.$1(a)}},
j3:{"^":"a;a,0b,0c",
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.G()},
A:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
G:function(){return this.A("")}},
j4:{"^":"a;a,0b",
gk:function(a){return this.b.length},
i:function(a){return this.G()},
A:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.B(z,"\n")},
G:function(){return this.A("")}}}],["","",,O,{"^":"",hp:{"^":"bX;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gt:function(){var z=this.dy
if(z==null){z=D.D()
this.dy=z}return z},
R:[function(a){var z
H.k(a,"$isl")
z=this.dy
if(!(z==null))z.v(a)},function(){return this.R(null)},"cB","$1","$0","gax",0,2,0],
f_:[function(a){H.k(a,"$isl")
this.a=null
this.R(a)},function(){return this.f_(null)},"i4","$1","$0","geZ",0,2,0],
hF:[function(a,b){var z=V.aD
z=new D.bP(a,H.w(b,"$isd",[z],"$asd"),this,[z])
z.b=!0
this.R(z)},"$2","gew",8,0,22],
hG:[function(a,b){var z=V.aD
z=new D.bQ(a,H.w(b,"$isd",[z],"$asd"),this,[z])
z.b=!0
this.R(z)},"$2","gex",8,0,22],
cI:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.e.a0(z.e.length+3,4)*4
x=C.e.a0(z.f.length+3,4)*4
w=C.e.a0(z.r.length+3,4)*4
v=C.e.a0(z.x.length+3,4)*4
u=C.e.a0(z.y.length+3,4)*4
t=C.e.a0(z.z.length+3,4)*4
s=C.e.a0(this.e.a.length+3,4)*4
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
a6=$.$get$ap()
if(c){z=$.$get$aH()
a6=new Z.b1(a6.a|z.a)}if(b){z=$.$get$aG()
a6=new Z.b1(a6.a|z.a)}if(a){z=$.$get$aI()
a6=new Z.b1(a6.a|z.a)}if(a0){z=$.$get$aJ()
a6=new Z.b1(a6.a|z.a)}if(a2){z=$.$get$aF()
a6=new Z.b1(a6.a|z.a)}return new A.ht(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
O:function(a,b){H.w(a,"$isf",[T.ch],"$asf")
if(b!=null)if(!C.a.aR(a,b)){b.a=a.length
C.a.h(a,b)}},
ae:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.am(z,z.length,0,[H.z(z,0)]);z.D();){y=z.d
x=new V.G(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cm(x)}}},
dF:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.cI()
y=H.k(a.fr.j(0,z.ap),"$isdX")
if(y==null){y=A.hq(z,a.a)
a.d_(y)}this.a=y
b.e=null
z=y}x=z.x
w=x.aI
z=b.e
if(!(z instanceof Z.cw)){b.e=null
z=null}if(z==null||!z.d.u(0,w)){z=x.r1
if(z)b.d.an()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.c
u.d.bW()
u.a.bW()
u=u.e
if(!(u==null))u.at(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.c
t.a.fK()
t=t.e
if(!(t==null))t.at(0)}r=b.d.d1(new Z.eL(a.a),w)
r.aq($.$get$ap()).e=this.a.y.c
if(z)r.aq($.$get$aH()).e=this.a.Q.c
if(v)r.aq($.$get$aG()).e=this.a.z.c
if(x.rx)r.aq($.$get$aI()).e=this.a.ch.c
if(u)r.aq($.$get$aJ()).e=this.a.cx.c
if(x.x1)r.aq($.$get$aF()).e=this.a.cy.c
b.e=r}z=T.ch
q=H.c([],[z])
this.a.Y(a)
if(x.fx){v=this.a
u=a.dx
u=u.gT(u)
v=v.db
v.toString
v.aa(u.a5(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.gT(u)
t=a.dx
t=u.l(0,t.gT(t))
a.cx=t
u=t}v=v.dx
v.toString
v.aa(u.a5(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.ghj()
t=a.dx
t=u.l(0,t.gT(t))
a.ch=t
u=t}v=v.fr
v.toString
v.aa(u.a5(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.go
v.toString
v.aa(u.a5(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.id
v.toString
v.aa(u.a5(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k1
v.toString
v.aa(C.A.a5(u,!0))}if(x.aH>0){p=this.e.a.length
v=this.a.k2
v.a.uniform1i(v.d,p)
for(v=[P.v],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.i(t,o)
t=t[o]
u.toString
H.k(t,"$isaD")
u=u.k3
if(o>=u.length)return H.i(u,o)
u=u[o]
n=new Float32Array(H.bH(H.w(t.a5(0,!0),"$isf",v,"$asf")))
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
case C.c:this.O(q,this.f.d)
v=this.a
u=this.f.d
v.ac(v.r1,v.rx,u)
u=this.a
v=this.f.f
u=u.k4
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.O(q,this.f.e)
v=this.a
u=this.f.e
v.a6(v.r2,v.rx,u)
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
case C.c:this.O(q,this.r.d)
v=this.a
u=this.r.d
v.ac(v.x1,v.y1,u)
u=this.a
v=this.r.f
u=u.ry
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.O(q,this.r.e)
v=this.a
u=this.r.e
v.a6(v.x2,v.y1,u)
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
case C.c:this.O(q,this.x.d)
v=this.a
u=this.x.d
v.ac(v.aH,v.aI,u)
u=this.a
v=this.x.f
u=u.y2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.O(q,this.x.e)
v=this.a
u=this.x.e
v.a6(v.ap,v.aI,u)
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
v=v.be
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.c:this.O(q,this.y.d)
v=this.a
u=this.y.d
v.ac(v.d9,v.bf,u)
u=this.a
v=this.y.f
u=u.be
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.d:this.O(q,this.y.e)
v=this.a
u=this.y.e
v.a6(v.da,v.bf,u)
u=this.a
v=this.y.f
u=u.be
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.b:break
case C.f:v=this.a
u=this.z.f
v=v.bg
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bi
u.a.uniform1f(u.d,s)
break
case C.c:this.O(q,this.z.d)
v=this.a
u=this.z.d
v.ac(v.dc,v.bh,u)
u=this.a
v=this.z.f
u=u.bg
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bi
v.a.uniform1f(v.d,s)
break
case C.d:this.O(q,this.z.e)
v=this.a
u=this.z.e
v.a6(v.dd,v.bh,u)
u=this.a
v=this.z.f
u=u.bg
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bi
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.dq
v.a.uniform1i(v.d,p)
v=a.db
m=v.gT(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.c2
if(l>=t.length)return H.i(t,l)
i=t[l]
t=m.cm(j.a)
s=t.a
h=t.b
g=t.c
g=t.w(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.dr
v.a.uniform1i(v.d,p)
v=a.db
m=v.gT(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.c3
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gaW(j)
s=i.b
h=t.gn(t)
g=t.gp(t)
t=t.gco(t)
s.a.uniform3f(s.d,h,g,t)
t=m.b2(j.gaW(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gao(j)
g=i.d
h=t.gbs()
s=t.gb4()
t=t.gbc()
g.a.uniform3f(g.d,h,s,t)
t=j.gbQ()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gbR()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gbS()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.ds
v.a.uniform1i(v.d,p)
v=a.db
m=v.gT(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.c4
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gaW(j)
s=i.b
h=t.gn(t)
g=t.gp(t)
t=t.gco(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gc0(j).ia()
g=i.c
h=t.gaE(t)
s=t.gaF(t)
t=t.gaG()
g.a.uniform3f(g.d,h,s,t)
t=m.b2(j.gaW(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gao(j)
s=i.e
h=t.gbs()
g=t.gb4()
t=t.gbc()
s.a.uniform3f(s.d,h,g,t)
t=j.gi9()
g=i.f
g.a.uniform1f(g.d,t)
t=j.gi8()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gbQ()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gbR()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gbS()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.dt
v.a.uniform1i(v.d,p)
v=a.db
m=v.gT(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
s=this.a.c5
if(l>=s.length)return H.i(s,l)
i=s[l]
s=j.gb_()
H.w(q,"$isf",t,"$asf")
if(!C.a.aR(q,s)){s.saN(q.length)
C.a.h(q,s)}s=j.gc0(j)
h=i.d
g=s.gaE(s)
f=s.gaF(s)
s=s.gaG()
h.a.uniform3f(h.d,g,f,s)
s=j.gbt()
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
s=m.cm(j.gc0(j))
f=s.a
g=s.b
h=s.c
h=s.w(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gao(j)
g=i.f
f=h.gbs()
s=h.gb4()
h=h.gbc()
g.a.uniform3f(g.d,f,s,h)
h=j.gb_()
s=h.gdB(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gcN()
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.gaN())
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.du
v.a.uniform1i(v.d,p)
v=a.db
m=v.gT(v)
for(v=this.dx.y,u=v.length,t=[P.v],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
h=this.a.c6
if(l>=h.length)return H.i(h,l)
i=h[l]
h=j.gb_()
H.w(q,"$isf",s,"$asf")
if(!C.a.aR(q,h)){h.saN(q.length)
C.a.h(q,h)}e=m.l(0,j.gT(j))
h=j.gT(j).b2(new V.ac(0,0,0))
g=i.b
f=h.gn(h)
d=h.gp(h)
h=h.gco(h)
g.a.uniform3f(g.d,f,d,h)
h=e.b2(new V.ac(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.ca(0)
d=i.d
n=new Float32Array(H.bH(H.w(new V.dY(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a5(0,!0),"$isf",t,"$asf")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gao(j)
h=i.e
f=d.gbs()
g=d.gb4()
d=d.gbc()
h.a.uniform3f(h.d,f,g,d)
d=j.gb_()
h=d.gdB(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gcN()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gaN())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gbQ()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gbR()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gbS()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.dv
v.a.uniform1i(v.d,p)
v=a.db
m=v.gT(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.c7
if(l>=t.length)return H.i(t,l)
i=t[l]
t=j.gb_()
H.w(q,"$isf",z,"$asf")
if(!C.a.aR(q,t)){t.saN(q.length)
C.a.h(q,t)}t=j.gaW(j)
s=i.b
h=t.gn(t)
g=t.gp(t)
t=t.gco(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gc0(j)
g=i.c
h=t.gaE(t)
s=t.gaF(t)
t=t.gaG()
g.a.uniform3f(g.d,h,s,t)
t=j.gbt()
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
t=m.b2(j.gaW(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gb_()
s=t.gdB(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gcN()
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.gaN())
t=i.x
t.a.uniform1i(t.d,0)}t=j.gao(j)
s=i.y
h=t.gbs()
g=t.gb4()
t=t.gbc()
s.a.uniform3f(s.d,h,g,t)
t=j.gih()
g=i.z
g.a.uniform1f(g.d,t)
t=j.gii()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gbQ()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gbR()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gbS()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.b:break
case C.f:break
case C.c:this.O(q,this.Q.d)
z=this.a
v=this.Q.d
z.ac(z.de,z.bj,v)
break
case C.d:this.O(q,this.Q.e)
z=this.a
v=this.Q.e
z.a6(z.df,z.bj,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.gT(v).ca(0)
a.Q=v}z=z.fy
z.toString
z.aa(v.a5(0,!0))}if(x.dy){this.O(q,this.ch)
z=this.a
v=this.ch
z.a6(z.dg,z.dh,v)
switch(x.r){case C.b:break
case C.f:z=this.a
v=this.cx.f
z=z.bk
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.c:this.O(q,this.cx.d)
z=this.a
v=this.cx.d
z.ac(z.di,z.bl,v)
v=this.a
z=this.cx.f
v=v.bk
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.d:this.O(q,this.cx.e)
z=this.a
v=this.cx.e
z.a6(z.dj,z.bl,v)
v=this.a
z=this.cx.f
v=v.bk
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.b:break
case C.f:z=this.a
v=this.cy.f
z=z.bn
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bm
v.a.uniform1f(v.d,t)
break
case C.c:this.O(q,this.cy.d)
z=this.a
v=this.cy.d
z.ac(z.dk,z.bo,v)
v=this.a
z=this.cy.f
v=v.bn
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bm
z.a.uniform1f(z.d,t)
break
case C.d:this.O(q,this.cy.e)
z=this.a
v=this.cy.e
z.a6(z.dl,z.bo,v)
v=this.a
z=this.cy.f
v=v.bn
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bm
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.b
if(v){switch(z){case C.b:break
case C.f:z=this.a
u=this.db.f
z=z.bp
z.a.uniform1f(z.d,u)
break
case C.c:this.O(q,this.db.d)
z=this.a
u=this.db.d
z.ac(z.dm,z.bq,u)
u=this.a
z=this.db.f
u=u.bp
u.a.uniform1f(u.d,z)
break
case C.d:this.O(q,this.db.e)
z=this.a
u=this.db.e
z.a6(z.dn,z.bq,u)
u=this.a
z=this.db.f
u=u.bp
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o){z=q[o]
if(!z.c&&z.d){z.c=!0
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,z.b)}}z=b.e
z.Y(a)
z.a4(a)
z.b3(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o){z=q[o]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(3553,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.f.d6()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cI().ap}},hr:{"^":"cM;0f,a,b,0c,0d,0e",
f1:function(a){var z,y
z=this.f
if(!$.n.$2(z,a)){y=this.f
this.f=a
z=new D.E(this.b,y,a,this,[P.v])
z.b=!0
this.a.R(z)}},
aB:function(){this.ct()
this.f1(1)}},cM:{"^":"a;",
R:[function(a){this.a.R(H.k(a,"$isl"))},function(){return this.R(null)},"cB","$1","$0","gax",0,2,0],
aB:["ct",function(){}],
f4:function(a){var z,y,x
z=this.d
if(z==null?a!=null:z!==a){if(z!=null){z=z.y
y=H.b(this.gax(),{func:1,ret:-1,args:[D.l]})
C.a.U(z.a,y)}x=this.d
this.d=a
if(a!=null){z=a.y
y=H.b(this.gax(),{func:1,ret:-1,args:[D.l]})
C.a.h(z.a,y)}z=new D.E(this.b+".texture2D",x,this.d,this,[T.eg])
z.b=!0
this.a.R(z)}},
f5:function(a){},
scl:function(a){var z=this.c
if(z!==C.c){if(z===C.b)this.aB()
this.c=C.c
this.f5(null)
z=this.a
z.a=null
z.R(null)}this.f4(a)}},hs:{"^":"cM;a,b,0c,0d,0e"},aX:{"^":"cM;0f,a,b,0c,0d,0e",
cU:function(a){var z,y
if(!J.U(this.f,a)){z=this.f
this.f=a
y=new D.E(this.b+".color",z,a,this,[V.X])
y.b=!0
this.a.R(y)}},
aB:["cu",function(){this.ct()
this.cU(new V.X(1,1,1))}],
sao:function(a,b){var z
if(this.c===C.b){this.c=C.f
this.aB()
z=this.a
z.a=null
z.R(null)}this.cU(b)}},hu:{"^":"aX;0ch,0f,a,b,0c,0d,0e",
f2:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.E(this.b+".refraction",y,a,this,[P.v])
z.b=!0
this.a.R(z)}},
aB:function(){this.cu()
this.f2(1)}},hv:{"^":"aX;0ch,0f,a,b,0c,0d,0e",
f3:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.E(this.b+".shininess",y,a,this,[P.v])
z.b=!0
this.a.R(z)}},
aB:function(){this.cu()
this.f3(100)}},id:{"^":"bX;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
R:[function(a){var z
H.k(a,"$isl")
z=this.e
if(!(z==null))z.v(a)},function(){return this.R(null)},"cB","$1","$0","gax",0,2,0],
dF:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.k(a.fr.j(0,"Skybox"),"$isea")
if(z==null){y=a.a
z=new A.ea(y,"Skybox")
z.cv(y,"Skybox")
z.dz(0,$.ig,$.ie)
z.x=z.f.j(0,"posAttr")
z.y=H.e(z.r.j(0,"fov"),"$isR")
z.z=H.e(z.r.j(0,"ratio"),"$isR")
z.Q=H.e(z.r.j(0,"boxClr"),"$isF")
z.ch=H.e(z.r.j(0,"boxTxt"),"$isad")
z.cx=H.e(z.r.j(0,"viewMat"),"$isay")
a.d_(z)}this.a=z}if(b.e==null){y=b.d.d1(new Z.eL(a.a),$.$get$ap())
y.aq($.$get$ap()).e=this.a.x.c
b.e=y}y=this.c
if(y!=null){y.a=1
if(!y.c&&y.d>=6){y.c=!0
a.a.activeTexture(33985)
a.a.bindTexture(34067,y.b)}}y=a.d
x=a.c
w=this.a
w.Y(a)
v=this.b
u=w.y
u.a.uniform1f(u.d,v)
v=w.z
v.a.uniform1f(v.d,y/x)
x=this.c
w.ch.dS(x)
x=this.d
y=w.Q
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.gT(x).ca(0)
w=w.cx
w.toString
w.aa(x.a5(0,!0))
y=b.e
if(y instanceof Z.cw){y.Y(a)
y.a4(a)
y.b3(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.f.d6()
y=this.c
if(y!=null)if(y.c){y.c=!1
a.a.activeTexture(33984+y.a)
a.a.bindTexture(34067,null)}}},bX:{"^":"a;"}}],["","",,T,{"^":"",ch:{"^":"ct;"},eg:{"^":"ch;0b,0c,0d,0e,0f,0r,0x,0y,a"},eh:{"^":"ch;0b,0c,0d,0e,a"},is:{"^":"a;a,0b,0c,0d,0e",
h3:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
z.bindTexture(3553,y)
z.texParameteri(3553,10242,33071)
z.texParameteri(3553,10243,33071)
z.texParameteri(3553,10241,9729)
z.texParameteri(3553,10240,9729)
z.bindTexture(3553,null);++this.d
x=W.dK(null,a,null)
w=new T.eg(0)
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
w.y=D.D()
z=W.a2
W.V(x,"load",H.b(new T.iu(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
h2:function(a){return this.h3(a,!1,!1,!1,!1)},
aA:function(a,b,c,d,e,f){var z,y
z=W.dK(null,c,null);++this.d
y=W.a2
W.V(z,"load",H.b(new T.it(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
cT:function(a,b,c){var z,y,x,w
b=V.di(b,2)
z=V.di(a.width,2)
y=V.di(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cy(null,null)
x.width=z
x.height=y
w=H.k(C.k.dN(x,"2d"),"$isds")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.kJ(w.getImageData(0,0,x.width,x.height))}}},iu:{"^":"u:11;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.cT(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
y.bindTexture(3553,this.e)
y.pixelStorei(37440,this.f?1:0)
C.q.dH(y,3553,0,6408,6408,5121,w)
if(this.r)y.generateMipmap(3553)
y.bindTexture(3553,null)
if(!z.d){z.d=!0
z.y.d8()}++x.e}},it:{"^":"u:11;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.cT(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.q.dH(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6)x.e.d8();++z.e}}}],["","",,V,{"^":"",fs:{"^":"a;",
aT:function(a,b){return!0},
i:function(a){return"all"},
$isbT:1},bT:{"^":"a;"},dW:{"^":"a;",
aT:["dW",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)if(z[x].aT(0,b))return!0
return!1}],
i:["cs",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbT:1},bq:{"^":"dW;0a",
aT:function(a,b){return!this.dW(0,b)},
i:function(a){return"!["+this.cs(0)+"]"}},i4:{"^":"a;0a",
e_:function(a){var z,y
if(a.a.length<=0)throw H.h(P.q("May not create a SetMatcher with zero characters."))
z=new H.aW(0,0,[P.A,P.a6])
for(y=new H.dT(a,a.gk(a),0,[H.az(a,"t",0)]);y.D();)z.Z(0,y.d,!0)
this.a=z},
aT:function(a,b){return this.a.d3(0,b)},
i:function(a){var z=this.a
return P.cW(new H.dS(z,[H.z(z,0)]),0,null)},
$isbT:1,
q:{
a1:function(a){var z=new V.i4()
z.e_(a)
return z}}},ec:{"^":"a;a,b,0c,0d",
gh6:function(a){return this.b},
B:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.en(this.a.H(0,b))
w.a=H.c([],[V.bT])
w.c=!1
C.a.h(this.c,w)
return w},
fT:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.aT(0,a))return w}return},
i:function(a){return this.b}},ek:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.fm(this.b,"\n","\\n")
y=H.fm(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},el:{"^":"a;a,b,0c",
i:function(a){return this.b}},iD:{"^":"a;0a,0b,0c",
H:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.ec(this,b)
z.c=H.c([],[V.en])
this.a.Z(0,b,z)}return z},
b0:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.el(this,a)
y=P.o
z.c=new H.aW(0,0,[y,y])
this.b.Z(0,a,z)}return z},
hx:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.ek])
y=this.c
x=[P.A]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.h.b6(a,t)
r=y.fT(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cW(w,0,null)
throw H.h(P.q("Untokenizable string [state: "+y.gh6(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cW(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.ek(o==null?p.b:o,q,t)}++t}}}},en:{"^":"dW;b,0c,0a",
i:function(a){return this.b.b+": "+this.cs(0)}}}],["","",,X,{"^":"",c4:{"^":"a;",$isau:1},h0:{"^":"cX;0a,0b,0c,0d,0e,0f,0r,0x",
gt:function(){var z=this.x
if(z==null){z=D.D()
this.x=z}return z},
al:function(a){var z=this.x
if(!(z==null))z.v(a)},
Y:function(a){var z,y,x,w,v,u,t,s
a.a.bindFramebuffer(36160,null)
a.a.enable(2884)
a.a.enable(2929)
a.a.depthFunc(513)
z=a.a
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
if(typeof y!=="number")return H.p(y)
v=C.e.ad(w.a*y)
if(typeof x!=="number")return H.p(x)
u=C.e.ad(w.b*x)
t=C.e.ad(w.c*y)
a.c=t
w=C.e.ad(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
if(this.b){z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
s=16640}else s=256
a.a.clear(s)},
q:{
cD:function(a,b,c,d,e,f,g){var z,y
z=new X.h0()
y=new V.aM(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.e8(0,0,1,1)
z.r=y
return z}}},h2:{"^":"a;0a,0b",
gt:function(){var z=this.b
if(z==null){z=D.D()
this.b=z}return z},
Y:function(a){var z
a.cy.br(V.aY())
z=V.aY()
a.db.br(z)},
b3:function(a){a.cy.as()
a.db.as()},
$isau:1,
$isc4:1},hG:{"^":"a;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.D()
this.e=z}return z},
al:[function(a){var z
H.k(a,"$isl")
z=this.e
if(!(z==null))z.v(a)},function(){return this.al(null)},"hI","$1","$0","gez",0,2,0],
Y:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=a.cy
w=this.b
v=this.c
u=this.d
t=u-v
s=1/Math.tan(w*0.5)
x.br(V.ar(-s/(z/y),0,0,0,0,s,0,0,0,0,u/t,-u*v/t,0,0,1,0))
z=$.e3
if(z==null){z=V.dZ(new V.ac(0,0,0),new V.G(0,1,0),new V.G(0,0,-1))
$.e3=z
r=z}else r=z
z=this.a
if(z!=null){q=z.aL(0,a,this)
if(q!=null)r=q.l(0,r)}a.db.br(r)},
b3:function(a){a.cy.as()
a.db.as()},
$isau:1,
$isc4:1,
q:{
e2:function(a,b,c,d){var z,y,x,w
z=new X.hG()
z.b=1.0471975511965976
z.c=0.1
z.d=2000
if(null!=c){y=z.a
z.a=c
if(c!=null){x=c.gt()
x.toString
w=H.b(z.gez(),{func:1,ret:-1,args:[D.l]})
C.a.h(x.a,w)}x=new D.E("mover",y,z.a,z,[U.a8])
x.b=!0
z.al(x)}x=z.b
if(!$.n.$2(x,b)){y=z.b
z.b=b
x=new D.E("fov",y,b,z,[P.v])
x.b=!0
z.al(x)}x=z.c
if(!$.n.$2(x,d)){y=z.c
z.c=d
x=new D.E("near",y,d,z,[P.v])
x.b=!0
z.al(x)}x=z.d
if(!$.n.$2(x,a)){y=z.d
z.d=a
x=new D.E("far",y,a,z,[P.v])
x.b=!0
z.al(x)}return z}}},cX:{"^":"a;"}}],["","",,V,{"^":"",
l4:function(a){P.iC(C.x,new V.l5(a))},
l5:{"^":"u:37;a",
$1:function(a){H.k(a,"$isb_")
P.dj(C.j.dJ(this.a.gfV(),2)+" fps")}},
i9:{"^":"a;0a,0b",
e0:function(a,b){var z,y,x,w,v,u,t
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
t=W.a2
W.V(z,"scroll",H.b(new V.ic(x),{func:1,ret:-1,args:[t]}),!1,t)},
fH:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.w(a,"$isf",[P.o],"$asf")
this.f7()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.hx(C.a.fZ(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
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
if(H.fl(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.i(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.kg(C.I,s,C.r,!1)
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
f7:function(){var z,y,x,w
if(this.b!=null)return
z=new V.iD()
y=P.o
z.a=new H.aW(0,0,[y,V.ec])
z.b=new H.aW(0,0,[y,V.el])
z.c=z.H(0,"Start")
y=z.H(0,"Start").B(0,"Bold")
x=V.a1(new H.a_("*"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Bold").B(0,"Bold")
x=new V.bq()
w=[V.bT]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a1(new H.a_("*"))
C.a.h(x.a,y)
y=z.H(0,"Bold").B(0,"BoldEnd")
x=V.a1(new H.a_("*"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Start").B(0,"Italic")
x=V.a1(new H.a_("_"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Italic").B(0,"Italic")
x=new V.bq()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a1(new H.a_("_"))
C.a.h(x.a,y)
y=z.H(0,"Italic").B(0,"ItalicEnd")
x=V.a1(new H.a_("_"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Start").B(0,"Code")
x=V.a1(new H.a_("`"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Code").B(0,"Code")
x=new V.bq()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.a1(new H.a_("`"))
C.a.h(x.a,y)
y=z.H(0,"Code").B(0,"CodeEnd")
x=V.a1(new H.a_("`"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Start").B(0,"LinkHead")
x=V.a1(new H.a_("["))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"LinkHead").B(0,"LinkTail")
x=V.a1(new H.a_("|"))
C.a.h(y.a,x)
x=z.H(0,"LinkHead").B(0,"LinkEnd")
y=V.a1(new H.a_("]"))
C.a.h(x.a,y)
x.c=!0
x=z.H(0,"LinkHead").B(0,"LinkHead")
y=new V.bq()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a1(new H.a_("|]"))
C.a.h(y.a,x)
x=z.H(0,"LinkTail").B(0,"LinkEnd")
y=V.a1(new H.a_("]"))
C.a.h(x.a,y)
x.c=!0
x=z.H(0,"LinkTail").B(0,"LinkTail")
y=new V.bq()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a1(new H.a_("|]"))
C.a.h(y.a,x)
C.a.h(z.H(0,"Start").B(0,"Other").a,new V.fs())
x=z.H(0,"Other").B(0,"Other")
y=new V.bq()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.a1(new H.a_("*_`["))
C.a.h(y.a,x)
x=z.H(0,"BoldEnd")
x.d=x.a.b0("Bold")
x=z.H(0,"ItalicEnd")
x.d=x.a.b0("Italic")
x=z.H(0,"CodeEnd")
x.d=x.a.b0("Code")
x=z.H(0,"LinkEnd")
x.d=x.a.b0("Link")
x=z.H(0,"Other")
x.d=x.a.b0("Other")
this.b=z},
q:{
ia:function(a,b){var z=new V.i9()
z.e0(a,!0)
return z}}},
ic:{"^":"u:11;a",
$1:function(a){P.iB(C.m,new V.ib(this.a))}},
ib:{"^":"u:2;a",
$0:function(){var z,y,x
z=C.j.ad(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}}}],["","",,Q,{"^":"",
fh:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
z=V.ia("Test 019",!0)
y=W.cy(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
z.fH(H.c(["A test of the Material Lighting shader with an alpha texture. ","There are no mapped reflections, this is actually transparent."],[P.o]))
x=document.getElementById("testCanvas")
if(x==null)H.r(P.q("Failed to find an element with the identifier, testCanvas."))
w=E.iz(x,!0,!0,!0,!1)
v=E.dG(null,!0,null,"",null,null)
u=F.cU()
F.bG(u,null,null,1,1,1,0,0,1)
F.bG(u,null,null,1,1,0,1,0,3)
F.bG(u,null,null,1,1,0,0,1,2)
F.bG(u,null,null,1,1,-1,0,0,0)
F.bG(u,null,null,1,1,0,-1,0,0)
F.bG(u,null,null,1,1,0,0,-1,3)
u.an()
v.sbv(0,u)
t=X.cD(!0,!0,!1,null,2000,null,0)
if(t.b){t.b=!1
z=new D.E("clearColor",!0,!1,t,[P.a6])
z.b=!0
t.al(z)}z=w.f
s=z.a
r=s.createTexture()
s.bindTexture(34067,r)
s.texParameteri(34067,10242,10497)
s.texParameteri(34067,10243,10497)
s.texParameteri(34067,10241,9729)
s.texParameteri(34067,10240,9729)
s.bindTexture(34067,null)
q=new T.eh(0)
q.b=r
q.c=!1
q.d=0
q.e=D.D()
z.aA(q,r,"../resources/maskonaive/posx.jpg",34069,!1,!1)
z.aA(q,r,"../resources/maskonaive/negx.jpg",34070,!1,!1)
z.aA(q,r,"../resources/maskonaive/posy.jpg",34071,!1,!1)
z.aA(q,r,"../resources/maskonaive/negy.jpg",34072,!1,!1)
z.aA(q,r,"../resources/maskonaive/posz.jpg",34073,!1,!1)
z.aA(q,r,"../resources/maskonaive/negz.jpg",34074,!1,!1)
p=w.f.h2("../resources/AlphaWeave.png")
o=new O.hp()
z=O.cA(V.aD)
o.e=z
z.aM(o.gew(),o.gex())
z=new O.aX(o,"emission")
z.c=C.b
z.f=new V.X(0,0,0)
o.f=z
z=new O.aX(o,"ambient")
z.c=C.b
z.f=new V.X(0,0,0)
o.r=z
z=new O.aX(o,"diffuse")
z.c=C.b
z.f=new V.X(0,0,0)
o.x=z
z=new O.aX(o,"invDiffuse")
z.c=C.b
z.f=new V.X(0,0,0)
o.y=z
z=new O.hv(o,"specular")
z.c=C.b
z.f=new V.X(0,0,0)
z.ch=100
o.z=z
z=new O.hs(o,"bump")
z.c=C.b
o.Q=z
o.ch=null
z=new O.aX(o,"reflect")
z.c=C.b
z.f=new V.X(0,0,0)
o.cx=z
z=new O.hu(o,"refract")
z.c=C.b
z.f=new V.X(0,0,0)
z.ch=1
o.cy=z
z=new O.hr(o,"alpha")
z.c=C.b
z.f=1
o.db=z
z=new D.hc()
z.b5(D.W)
z.e=H.c([],[D.c7])
z.f=H.c([],[D.hI])
z.r=H.c([],[D.ih])
z.x=H.c([],[D.iv])
z.y=H.c([],[D.iw])
z.z=H.c([],[D.ix])
z.Q=null
z.ch=null
z.cp(z.gev(),z.geP(),z.geR())
o.dx=z
s=z.Q
if(s==null){s=D.D()
z.Q=s
z=s}else z=s
s={func:1,ret:-1,args:[D.l]}
n=H.b(o.geZ(),s)
C.a.h(z.a,n)
n=o.dx
z=n.ch
if(z==null){z=D.D()
n.ch=z}n=H.b(o.gax(),s)
C.a.h(z.a,n)
o.dy=null
n=o.dx
z=U.dw(V.dZ(new V.ac(0,0,0),new V.G(0,1,0),new V.G(1,-2,-3)))
m=new V.X(1,1,1)
l=new D.c7()
l.c=new V.X(1,1,1)
l.a=new V.G(0,0,1)
k=l.b
l.b=z
z=z.gt()
z.toString
j=H.b(l.ge4(),s)
C.a.h(z.a,j)
z=new D.E("mover",k,l.b,l,[U.a8])
z.b=!0
l.av(z)
if(!l.c.u(0,m)){k=l.c
l.c=m
z=new D.E("color",k,m,l,[V.X])
z.b=!0
l.av(z)}n.h(0,l)
z=o.r
z.sao(0,new V.X(0.5,0.5,0.5))
z=o.x
z.sao(0,new V.X(0.6,0.6,0.6))
o.r.scl(p)
o.x.scl(p)
o.db.scl(p)
i=new U.dI()
i.b5(U.a8)
i.aM(i.geu(),i.geQ())
i.e=null
i.f=V.aY()
i.r=0
z=w.r
n=new U.iW()
l=U.cB()
l.scn(0,!0)
l.scd(6.283185307179586)
l.scf(0)
l.sa2(0,0)
l.sce(100)
l.sM(0)
l.sc_(0.5)
n.b=l
l=l.gt()
l.toString
j=H.b(n.gaw(),s)
C.a.h(l.a,j)
l=U.cB()
l.scn(0,!0)
l.scd(6.283185307179586)
l.scf(0)
l.sa2(0,0)
l.sce(100)
l.sM(0)
l.sc_(0.5)
n.c=l
C.a.h(l.gt().a,j)
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
h=new X.as(!1,!1,!1)
k=n.d
n.d=h
l=[X.as]
j=new D.E("modifiers",k,h,n,l)
j.b=!0
n.K(j)
j=n.f
if(j!==!1){n.f=!1
j=new D.E("invertX",j,!1,n,[P.a6])
j.b=!0
n.K(j)}j=n.r
if(j!==!1){n.r=!1
j=new D.E("invertY",j,!1,n,[P.a6])
j.b=!0
n.K(j)}n.aP(z)
i.h(0,n)
z=w.r
n=new U.iV()
j=U.cB()
j.scn(0,!0)
j.scd(6.283185307179586)
j.scf(0)
j.sa2(0,0)
j.sce(100)
j.sM(0)
j.sc_(0.2)
n.b=j
j=j.gt()
j.toString
g=H.b(n.gaw(),s)
C.a.h(j.a,g)
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
h=new X.as(!0,!1,!1)
k=n.c
n.c=h
j=new D.E("modifiers",k,h,n,l)
j.b=!0
n.K(j)
n.aP(z)
i.h(0,n)
z=w.r
n=new U.iX()
n.c=0.01
n.d=0
n.e=0
h=new X.as(!1,!1,!1)
n.b=h
l=new D.E("modifiers",null,h,n,l)
l.b=!0
n.K(l)
n.aP(z)
i.h(0,n)
i.h(0,U.dw(V.ar(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
f=X.e2(2000,1.0471975511965976,i,0.1)
e=new M.fH()
e.saQ(null)
e.saY(0,null)
e.saZ(null)
z=E.dG(null,!0,null,"",null,null)
u=F.cU()
n=u.a
l=new V.G(-1,-1,1)
l=l.w(0,Math.sqrt(l.C(l)))
d=n.bb(new V.bs(1,2,4,6),new V.aM(1,0,0,1),new V.ac(-1,-1,0),new V.O(0,1),l,null)
n=u.a
l=new V.G(1,-1,1)
l=l.w(0,Math.sqrt(l.C(l)))
c=n.bb(new V.bs(0,3,4,6),new V.aM(0,0,1,1),new V.ac(1,-1,0),new V.O(1,1),l,null)
n=u.a
l=new V.G(1,1,1)
l=l.w(0,Math.sqrt(l.C(l)))
b=n.bb(new V.bs(0,2,5,6),new V.aM(0,1,0,1),new V.ac(1,1,0),new V.O(1,0),l,null)
n=u.a
l=new V.G(-1,1,1)
l=l.w(0,Math.sqrt(l.C(l)))
a=n.bb(new V.bs(0,2,4,7),new V.aM(1,1,0,1),new V.ac(-1,1,0),new V.O(0,0),l,null)
u.d.fE(H.c([d,c,b,a],[F.aE]))
u.an()
z.sbv(0,u)
e.d=z
e.e=null
z=new O.id()
z.b=1.0471975511965976
k=z.c
z.c=q
n=q.e
l=H.b(z.gax(),s)
C.a.h(n.a,l)
n=new D.E("boxTexture",k,z.c,z,[T.eh])
n.b=!0
z.R(n)
p=new V.X(1,1,1)
if(!J.U(z.d,p)){k=z.d
z.d=p
n=new D.E("boxColor",k,p,z,[V.X])
n.b=!0
z.R(n)}z.e=null
e.saZ(z)
e.saY(0,t)
e.saQ(f)
a0=new M.fU()
z=O.cA(E.aC)
a0.d=z
z.aM(a0.geA(),a0.geB())
a0.e=null
a0.f=null
a0.r=null
a0.x=null
a0.saQ(null)
a0.saY(0,null)
a0.saZ(null)
a0.saQ(f)
a0.saZ(o)
a0.saY(0,t)
a0.d.h(0,v)
z=M.av
n=H.c([e,a0],[z])
l=new M.fF()
l.b5(z)
l.e=!1
l.f=null
l.aM(l.geS(),l.geT())
l.bP(0,n)
z=w.d
if(z!==l){if(z!=null){z=z.gt()
z.toString
n=H.b(w.gcz(),s)
C.a.U(z.a,n)}w.d=l
z=l.gt()
z.toString
s=H.b(w.gcz(),s)
C.a.h(z.a,s)
w.e2()}V.l4(w)}},1]]
setupProgram(dart,0,0)
J.J=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dN.prototype
return J.dM.prototype}if(typeof a=="string")return J.cH.prototype
if(a==null)return J.dO.prototype
if(typeof a=="boolean")return J.h7.prototype
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.cp(a)}
J.c_=function(a){if(typeof a=="string")return J.cH.prototype
if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.cp(a)}
J.dd=function(a){if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.cp(a)}
J.kN=function(a){if(typeof a=="number")return J.cc.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.d1.prototype
return a}
J.c0=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.cp(a)}
J.U=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.J(a).u(a,b)}
J.fo=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kN(a).a9(a,b)}
J.fp=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kW(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c_(a).j(a,b)}
J.fq=function(a,b,c,d){return J.c0(a).cZ(a,b,c,d)}
J.cs=function(a,b,c){return J.c_(a).fL(a,b,c)}
J.dk=function(a,b){return J.dd(a).E(a,b)}
J.fr=function(a,b){return J.dd(a).L(a,b)}
J.aA=function(a){return J.J(a).gS(a)}
J.bN=function(a){return J.dd(a).gX(a)}
J.bb=function(a){return J.c_(a).gk(a)}
J.a7=function(a){return J.J(a).i(a)}
I.dg=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.k=W.cx.prototype
C.y=J.m.prototype
C.a=J.aV.prototype
C.z=J.dM.prototype
C.e=J.dN.prototype
C.A=J.dO.prototype
C.j=J.cc.prototype
C.h=J.cH.prototype
C.H=J.bR.prototype
C.J=H.hC.prototype
C.K=W.hD.prototype
C.p=J.hH.prototype
C.q=P.cR.prototype
C.l=J.d1.prototype
C.t=W.bD.prototype
C.u=W.j9.prototype
C.v=new P.hF()
C.w=new P.iZ()
C.i=new P.jV()
C.b=new A.c5(0,"ColorSourceType.None")
C.f=new A.c5(1,"ColorSourceType.Solid")
C.c=new A.c5(2,"ColorSourceType.Texture2D")
C.d=new A.c5(3,"ColorSourceType.TextureCube")
C.m=new P.bf(0)
C.x=new P.bf(5e6)
C.B=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.C=function(hooks) {
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

C.D=function(getTagFallback) {
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
C.E=function() {
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
C.F=function(hooks) {
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
C.G=function(hooks) {
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
C.I=H.c(I.dg([0,0,65498,45055,65535,34815,65534,18431]),[P.A])
C.r=new P.iY(!1)
$.aq=0
$.bc=null
$.dn=null
$.d6=!1
$.fe=null
$.f8=null
$.fk=null
$.co=null
$.cq=null
$.de=null
$.b4=null
$.bI=null
$.bJ=null
$.d7=!1
$.N=C.i
$.dD=null
$.dC=null
$.dB=null
$.dA=null
$.n=V.hw()
$.ig="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.ie="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.e3=null
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
I.$lazy(y,x,w)}})(["dz","$get$dz",function(){return H.fd("_$dart_dartClosure")},"cI","$get$cI",function(){return H.fd("_$dart_js")},"eo","$get$eo",function(){return H.aw(H.ci({
toString:function(){return"$receiver$"}}))},"ep","$get$ep",function(){return H.aw(H.ci({$method$:null,
toString:function(){return"$receiver$"}}))},"eq","$get$eq",function(){return H.aw(H.ci(null))},"er","$get$er",function(){return H.aw(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"ev","$get$ev",function(){return H.aw(H.ci(void 0))},"ew","$get$ew",function(){return H.aw(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"et","$get$et",function(){return H.aw(H.eu(null))},"es","$get$es",function(){return H.aw(function(){try{null.$method$}catch(z){return z.message}}())},"ey","$get$ey",function(){return H.aw(H.eu(void 0))},"ex","$get$ex",function(){return H.aw(function(){try{(void 0).$method$}catch(z){return z.message}}())},"d3","$get$d3",function(){return P.ja()},"bK","$get$bK",function(){return[]},"f2","$get$f2",function(){return P.hV("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dy","$get$dy",function(){return{}},"eJ","$get$eJ",function(){return Z.ak(0)},"eH","$get$eH",function(){return Z.ak(511)},"ap","$get$ap",function(){return Z.ak(1)},"aH","$get$aH",function(){return Z.ak(2)},"aG","$get$aG",function(){return Z.ak(4)},"aI","$get$aI",function(){return Z.ak(8)},"aJ","$get$aJ",function(){return Z.ak(16)},"bB","$get$bB",function(){return Z.ak(32)},"bC","$get$bC",function(){return Z.ak(64)},"eI","$get$eI",function(){return Z.ak(96)},"b2","$get$b2",function(){return Z.ak(128)},"aF","$get$aF",function(){return Z.ak(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.l]},{func:1,ret:-1,args:[D.l]},{func:1,ret:P.I},{func:1,ret:-1},{func:1,ret:-1,args:[W.a2]},{func:1,ret:-1,args:[W.at]},{func:1,ret:P.I,args:[F.ah]},{func:1,ret:-1,args:[P.o,,]},{func:1,ret:-1,args:[P.A,[P.d,E.aC]]},{func:1,ret:P.I,args:[D.l]},{func:1,ret:-1,args:[W.b0]},{func:1,ret:P.I,args:[W.a2]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.I,args:[,,]},{func:1,ret:P.o,args:[P.A]},{func:1,ret:P.I,args:[,]},{func:1,args:[,]},{func:1,ret:-1,args:[W.bn]},{func:1,ret:-1,args:[P.A,[P.d,D.W]]},{func:1,ret:P.v},{func:1,ret:-1,args:[P.A,[P.d,U.a8]]},{func:1,ret:-1,args:[P.A,[P.d,M.av]]},{func:1,ret:-1,args:[P.A,[P.d,V.aD]]},{func:1,ret:P.I,args:[{func:1,ret:-1}]},{func:1,ret:P.a6,args:[W.K]},{func:1,ret:W.a0,args:[W.K]},{func:1,args:[,P.o]},{func:1,args:[P.o]},{func:1,ret:P.I,args:[P.S]},{func:1,ret:P.I,args:[{func:1,ret:-1,args:[D.l]}]},{func:1,ret:-1,args:[P.a],opt:[P.ao]},{func:1,ret:-1,args:[W.bD]},{func:1,ret:P.a6,args:[P.v,P.v]},{func:1,ret:P.a6,args:[[P.d,D.W]]},{func:1,ret:P.I,args:[,],opt:[,]},{func:1,ret:P.I,args:[F.aE,P.v,P.v]},{func:1,ret:[P.aK,,],args:[,]},{func:1,ret:P.I,args:[P.b_]},{func:1,ret:-1,args:[P.o,P.o]}]
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
if(x==y)H.l7(d||a)
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
Isolate.dg=a.dg
Isolate.db=a.db
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
if(typeof dartMainRunner==="function")dartMainRunner(Q.fh,[])
else Q.fh([])})})()
//# sourceMappingURL=test.dart.js.map
