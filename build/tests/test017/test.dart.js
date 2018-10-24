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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isu)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.e2"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.e2"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.e2(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.e4=function(){}
var dart=[["","",,H,{"^":"",oY:{"^":"b;a"}}],["","",,J,{"^":"",
L:function(a){return void 0},
e8:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
d3:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.e6==null){H.o0()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.a(P.cv("Return interceptor for "+H.k(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$dp()]
if(v!=null)return v
v=H.o7(a)
if(v!=null)return v
if(typeof a=="function")return C.X
y=Object.getPrototypeOf(a)
if(y==null)return C.E
if(y===Object.prototype)return C.E
if(typeof w=="function"){Object.defineProperty(w,$.$get$dp(),{value:C.u,enumerable:false,writable:true,configurable:true})
return C.u}return C.u},
u:{"^":"b;",
A:function(a,b){return a===b},
gY:function(a){return H.bX(a)},
j:["fe",function(a){return"Instance of '"+H.bt(a)+"'"}],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationEffectTimingReadOnly|AnimationTimeline|AnimationWorkletGlobalScope|AudioListener|AudioParam|AudioTrack|AudioWorkletGlobalScope|AudioWorkletProcessor|AuthenticatorAssertionResponse|AuthenticatorAttestationResponse|AuthenticatorResponse|BackgroundFetchFetch|BackgroundFetchManager|BackgroundFetchSettledFetch|BarProp|BarcodeDetector|Bluetooth|BluetoothCharacteristicProperties|BluetoothRemoteGATTDescriptor|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|Body|BudgetService|BudgetState|CSS|CSSVariableReferenceValue|Cache|CacheStorage|CanvasGradient|CanvasPattern|Client|Clients|CookieStore|Coordinates|Credential|CredentialUserData|CredentialsContainer|Crypto|CryptoKey|CustomElementRegistry|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMPoint|DOMPointReadOnly|DOMQuad|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeprecationReport|DetectedBarcode|DetectedFace|DetectedText|DeviceAcceleration|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|DocumentOrShadowRoot|DocumentTimeline|EXTBlendMinMax|EXTColorBufferFloat|EXTColorBufferHalfFloat|EXTDisjointTimerQuery|EXTDisjointTimerQueryWebGL2|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|Entry|EntrySync|External|FaceDetector|FederatedCredential|FileEntry|FileEntrySync|FileReaderSync|FileWriterSync|FontFace|FontFaceSource|FormData|GamepadButton|GamepadPose|Geolocation|HTMLAllCollection|HTMLHyperlinkElementUtils|Headers|IDBCursor|IDBCursorWithValue|IDBFactory|IDBIndex|IDBKeyRange|IDBObjectStore|IDBObservation|IDBObserver|IDBObserverChanges|IdleDeadline|ImageBitmap|ImageBitmapRenderingContext|ImageCapture|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|InterventionReport|Iterator|KeyframeEffect|KeyframeEffectReadOnly|MediaCapabilities|MediaCapabilitiesInfo|MediaDeviceInfo|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaKeysPolicy|MediaMetadata|MediaSession|MediaSettingsRange|MemoryInfo|MessageChannel|Metadata|Mojo|MojoHandle|MojoWatcher|MutationObserver|MutationRecord|NFC|NavigationPreloadManager|Navigator|NavigatorAutomationInformation|NavigatorConcurrentHardware|NavigatorCookies|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|NoncedElement|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|OffscreenCanvasRenderingContext2D|OverconstrainedError|PagePopupController|PaintRenderingContext2D|PaintSize|PaintWorkletGlobalScope|PasswordCredential|Path2D|PaymentAddress|PaymentInstruments|PaymentManager|PaymentResponse|PerformanceEntry|PerformanceLongTaskTiming|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList|PerformancePaintTiming|PerformanceResourceTiming|PerformanceServerTiming|PerformanceTiming|PeriodicWave|Permissions|PhotoCapabilities|Position|PositionError|Presentation|PresentationReceiver|PublicKeyCredential|PushManager|PushMessageData|PushSubscription|PushSubscriptionOptions|RTCCertificate|RTCIceCandidate|RTCLegacyStatsReport|RTCRtpContributingSource|RTCRtpReceiver|RTCRtpSender|RTCStatsResponse|Range|RelatedApplication|Report|ReportBody|ReportingObserver|Request|ResizeObserver|ResizeObserverEntry|Response|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPoint|SVGPreserveAspectRatio|SVGRect|SVGUnitTypes|Screen|ScrollState|ScrollTimeline|Selection|SharedArrayBuffer|SpeechRecognitionAlternative|SpeechSynthesisVoice|StaticRange|StorageManager|StyleMedia|StylePropertyMap|StylePropertyMapReadonly|SubtleCrypto|SyncManager|TaskAttributionTiming|TextDetector|TextMetrics|TrackDefault|TrustedHTML|TrustedScriptURL|TrustedURL|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRCoordinateSystem|VRDisplayCapabilities|VREyeParameters|VRFrameData|VRFrameOfReference|VRPose|VRStageBounds|VRStageBoundsPoint|VRStageParameters|VTTRegion|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGL|WebGL2RenderingContext|WebGL2RenderingContextBase|WebGLActiveInfo|WebGLBuffer|WebGLCanvas|WebGLColorBufferFloat|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLCompressedTextureS3TCsRGB|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLGetBufferSubDataAsync|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitMutationObserver|WindowClient|WorkerLocation|WorkerNavigator|Worklet|WorkletAnimation|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate"},
iZ:{"^":"u;",
j:function(a){return String(a)},
gY:function(a){return a?519018:218159},
$isW:1},
eS:{"^":"u;",
A:function(a,b){return null==b},
j:function(a){return"null"},
gY:function(a){return 0},
$isP:1},
dq:{"^":"u;",
gY:function(a){return 0},
j:["fg",function(a){return String(a)}]},
jG:{"^":"dq;"},
cw:{"^":"dq;"},
co:{"^":"dq;",
j:function(a){var z=a[$.$get$ez()]
if(z==null)return this.fg(a)
return"JavaScript function for "+H.k(J.ae(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isci:1},
bo:{"^":"u;$ti",
h:function(a,b){H.C(b,H.y(a,0))
if(!!a.fixed$length)H.r(P.E("add"))
a.push(b)},
j8:function(a,b){if(!!a.fixed$length)H.r(P.E("removeAt"))
if(b<0||b>=a.length)throw H.a(P.cq(b,null,null))
return a.splice(b,1)[0]},
H:function(a,b){var z
if(!!a.fixed$length)H.r(P.E("remove"))
for(z=0;z<a.length;++z)if(J.J(a[z],b)){a.splice(z,1)
return!0}return!1},
ac:function(a,b){var z,y
H.q(b,"$isi",[H.y(a,0)],"$asi")
if(!!a.fixed$length)H.r(P.E("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.D)(b),++y)a.push(b[y])},
M:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.a(P.aZ(a))}},
p:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.l(z,y,H.k(a[y]))
return z.join(b)},
iM:function(a){return this.p(a,"")},
iD:function(a,b,c,d){var z,y,x
H.C(b,d)
H.l(c,{func:1,ret:d,args:[d,H.y(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.a(P.aZ(a))}return y},
iB:function(a,b,c){var z,y,x
H.l(b,{func:1,ret:P.W,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.a(P.aZ(a))}throw H.a(H.dm())},
iA:function(a,b){return this.iB(a,b,null)},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
c8:function(a,b,c){if(b<0||b>a.length)throw H.a(P.a7(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.a(P.a7(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.y(a,0)])
return H.c(a.slice(b,c),[H.y(a,0)])},
gaA:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.a(H.dm())},
aL:function(a,b,c,d){var z
H.C(d,H.y(a,0))
if(!!a.immutable$list)H.r(P.E("fill range"))
P.b2(b,c,a.length,null,null,null)
for(z=b;z.K(0,c);z=z.E(0,1))a[z]=d},
e8:function(a,b){var z,y
H.l(b,{func:1,ret:P.W,args:[H.y(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.a(P.aZ(a))}return!1},
X:function(a,b){var z
for(z=0;z<a.length;++z)if(J.J(a[z],b))return!0
return!1},
j:function(a){return P.dl(a,"[","]")},
ga2:function(a){return new J.aD(a,a.length,0,[H.y(a,0)])},
gY:function(a){return H.bX(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.r(P.E("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.cD(b,"newLength",null))
if(b<0)throw H.a(P.a7(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aY(a,b))
if(b>=a.length||b<0)throw H.a(H.aY(a,b))
return a[b]},
l:function(a,b,c){H.G(b)
H.C(c,H.y(a,0))
if(!!a.immutable$list)H.r(P.E("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aY(a,b))
if(b>=a.length||b<0)throw H.a(H.aY(a,b))
a[b]=c},
$isi:1,
$isd:1,
u:{
iY:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.a(P.cD(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.a(P.a7(a,0,4294967295,"length",null))
return J.eP(new Array(a),b)},
eP:function(a,b){return J.bS(H.c(a,[b]))},
bS:function(a){H.cd(a)
a.fixed$length=Array
return a},
oW:[function(a,b){return J.hY(H.hN(a,"$isas"),H.hN(b,"$isas"))},"$2","nv",8,0,56]}},
oX:{"^":"bo;$ti"},
aD:{"^":"b;a,b,c,0d,$ti",
gO:function(a){return this.d},
G:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.a(H.D(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
cm:{"^":"u;",
b3:function(a,b){var z
H.hM(b)
if(typeof b!=="number")throw H.a(H.aa(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=this.gbY(b)
if(this.gbY(a)===z)return 0
if(this.gbY(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbY:function(a){return a===0?1/a<0:a<0},
jm:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.a(P.E(""+a+".toInt()"))},
cV:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.a(P.E(""+a+".floor()"))},
am:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.E(""+a+".round()"))},
f0:function(a,b){var z
if(b>20)throw H.a(P.a7(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gbY(a))return"-"+z
return z},
bs:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.a(P.a7(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.a1(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.r(P.E("Unexpected toString result: "+z))
x=J.aB(y)
z=x.i(y,1)
w=+x.i(y,3)
if(x.i(y,2)!=null){z+=x.i(y,2)
w-=x.i(y,2).length}return z+C.b.k("0",w)},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gY:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.a(H.aa(b))
return a*b},
bw:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
fj:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dZ(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.dZ(a,b)},
dZ:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.a(P.E("Result of truncating division is "+H.k(z)+": "+H.k(a)+" ~/ "+b))},
b0:function(a,b){var z
if(a>0)z=this.dX(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
hJ:function(a,b){if(b<0)throw H.a(H.aa(b))
return this.dX(a,b)},
dX:function(a,b){return b>31?0:a>>>b},
K:function(a,b){if(typeof b!=="number")throw H.a(H.aa(b))
return a<b},
an:function(a,b){if(typeof b!=="number")throw H.a(H.aa(b))
return a>b},
$isas:1,
$asas:function(){return[P.a5]},
$isv:1,
$isa5:1},
eR:{"^":"cm;",$isn:1},
eQ:{"^":"cm;"},
cn:{"^":"u;",
a1:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(H.aY(a,b))
if(b<0)throw H.a(H.aY(a,b))
if(b>=a.length)H.r(H.aY(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(b>=a.length)throw H.a(H.aY(a,b))
return a.charCodeAt(b)},
E:function(a,b){H.I(b)
if(typeof b!=="string")throw H.a(P.cD(b,null,null))
return a+b},
bc:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.aa(b))
c=P.b2(b,c,a.length,null,null,null)
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.aa(c))
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
ah:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.aa(c))
if(typeof c!=="number")return c.K()
if(c<0||c>a.length)throw H.a(P.a7(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a8:function(a,b){return this.ah(a,b,0)},
w:function(a,b,c){H.G(c)
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.aa(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.K()
if(b<0)throw H.a(P.cq(b,null,null))
if(b>c)throw H.a(P.cq(b,null,null))
if(c>a.length)throw H.a(P.cq(c,null,null))
return a.substring(b,c)},
av:function(a,b){return this.w(a,b,null)},
jo:function(a){return a.toLowerCase()},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.K)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
iX:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
al:function(a,b){return this.iX(a,b," ")},
eL:function(a,b,c){var z
if(c<0||c>a.length)throw H.a(P.a7(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
eK:function(a,b){return this.eL(a,b,0)},
im:function(a,b,c){if(c>a.length)throw H.a(P.a7(c,0,a.length,null,null))
return H.hR(a,b,c)},
b3:function(a,b){var z
H.I(b)
if(typeof b!=="string")throw H.a(H.aa(b))
if(a===b)z=0
else z=a<b?-1:1
return z},
j:function(a){return a},
gY:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gn:function(a){return a.length},
$isas:1,
$asas:function(){return[P.h]},
$isf5:1,
$ish:1}}],["","",,H,{"^":"",
d4:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
dm:function(){return new P.dF("No element")},
iX:function(){return new P.dF("Too many elements")},
kq:function(a,b,c){var z
H.q(a,"$isd",[c],"$asd")
H.l(b,{func:1,ret:P.n,args:[c,c]})
z=J.aq(a)
if(typeof z!=="number")return z.L()
H.cs(a,0,z-1,b,c)},
cs:function(a,b,c,d,e){H.q(a,"$isd",[e],"$asd")
H.l(d,{func:1,ret:P.n,args:[e,e]})
if(c-b<=32)H.kp(a,b,c,d,e)
else H.ko(a,b,c,d,e)},
kp:function(a,b,c,d,e){var z,y,x,w,v
H.q(a,"$isd",[e],"$asd")
H.l(d,{func:1,ret:P.n,args:[e,e]})
for(z=b+1,y=J.aB(a);z<=c;++z){x=y.i(a,z)
w=z
while(!0){if(!(w>b&&J.aK(d.$2(y.i(a,w-1),x),0)))break
v=w-1
y.l(a,w,y.i(a,v))
w=v}y.l(a,w,x)}},
ko:function(a,b,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
H.q(a,"$isd",[a2],"$asd")
H.l(a1,{func:1,ret:P.n,args:[a2,a2]})
z=C.d.a6(a0-b+1,6)
y=b+z
x=a0-z
w=C.d.a6(b+a0,2)
v=w-z
u=w+z
t=J.aB(a)
s=t.i(a,y)
r=t.i(a,v)
q=t.i(a,w)
p=t.i(a,u)
o=t.i(a,x)
if(J.aK(a1.$2(s,r),0)){n=r
r=s
s=n}if(J.aK(a1.$2(p,o),0)){n=o
o=p
p=n}if(J.aK(a1.$2(s,q),0)){n=q
q=s
s=n}if(J.aK(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.aK(a1.$2(s,p),0)){n=p
p=s
s=n}if(J.aK(a1.$2(q,p),0)){n=p
p=q
q=n}if(J.aK(a1.$2(r,o),0)){n=o
o=r
r=n}if(J.aK(a1.$2(r,q),0)){n=q
q=r
r=n}if(J.aK(a1.$2(p,o),0)){n=o
o=p
p=n}t.l(a,y,s)
t.l(a,w,q)
t.l(a,x,o)
t.l(a,v,t.i(a,b))
t.l(a,u,t.i(a,a0))
m=b+1
l=a0-1
if(J.J(a1.$2(r,p),0)){for(k=m;k<=l;++k){j=t.i(a,k)
i=a1.$2(j,r)
if(i===0)continue
if(typeof i!=="number")return i.K()
if(i<0){if(k!==m){t.l(a,k,t.i(a,m))
t.l(a,m,j)}++m}else for(;!0;){i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.an()
if(i>0){--l
continue}else{h=l-1
if(i<0){t.l(a,k,t.i(a,m))
g=m+1
t.l(a,m,t.i(a,l))
t.l(a,l,j)
l=h
m=g
break}else{t.l(a,k,t.i(a,l))
t.l(a,l,j)
l=h
break}}}}f=!0}else{for(k=m;k<=l;++k){j=t.i(a,k)
e=a1.$2(j,r)
if(typeof e!=="number")return e.K()
if(e<0){if(k!==m){t.l(a,k,t.i(a,m))
t.l(a,m,j)}++m}else{d=a1.$2(j,p)
if(typeof d!=="number")return d.an()
if(d>0)for(;!0;){i=a1.$2(t.i(a,l),p)
if(typeof i!=="number")return i.an()
if(i>0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.K()
h=l-1
if(i<0){t.l(a,k,t.i(a,m))
g=m+1
t.l(a,m,t.i(a,l))
t.l(a,l,j)
m=g}else{t.l(a,k,t.i(a,l))
t.l(a,l,j)}l=h
break}}}}f=!1}c=m-1
t.l(a,b,t.i(a,c))
t.l(a,c,r)
c=l+1
t.l(a,a0,t.i(a,c))
t.l(a,c,p)
H.cs(a,b,m-2,a1,a2)
H.cs(a,l+2,a0,a1,a2)
if(f)return
if(m<y&&l>x){for(;J.J(a1.$2(t.i(a,m),r),0);)++m
for(;J.J(a1.$2(t.i(a,l),p),0);)--l
for(k=m;k<=l;++k){j=t.i(a,k)
if(a1.$2(j,r)===0){if(k!==m){t.l(a,k,t.i(a,m))
t.l(a,m,j)}++m}else if(a1.$2(j,p)===0)for(;!0;)if(a1.$2(t.i(a,l),p)===0){--l
if(l<k)break
continue}else{i=a1.$2(t.i(a,l),r)
if(typeof i!=="number")return i.K()
h=l-1
if(i<0){t.l(a,k,t.i(a,m))
g=m+1
t.l(a,m,t.i(a,l))
t.l(a,l,j)
m=g}else{t.l(a,k,t.i(a,l))
t.l(a,l,j)}l=h
break}}H.cs(a,m,l,a1,a2)}else H.cs(a,m,l,a1,a2)},
w:{"^":"l_;a",
gn:function(a){return this.a.length},
i:function(a,b){return C.b.a1(this.a,b)},
$ascV:function(){return[P.n]},
$asA:function(){return[P.n]},
$asi:function(){return[P.n]},
$asd:function(){return[P.n]}},
eG:{"^":"i;"},
cN:{"^":"eG;$ti",
ga2:function(a){return new H.du(this,this.gn(this),0,[H.al(this,"cN",0)])},
di:function(a,b){return this.ff(0,H.l(b,{func:1,ret:P.W,args:[H.al(this,"cN",0)]}))}},
du:{"^":"b;a,b,c,0d,$ti",
gO:function(a){return this.d},
G:function(){var z,y,x,w
z=this.a
y=J.aB(z)
x=y.gn(z)
w=this.b
if(w==null?x!=null:w!==x)throw H.a(P.aZ(z))
w=this.c
if(typeof x!=="number")return H.o(x)
if(w>=x){this.d=null
return!1}this.d=y.J(z,w);++this.c
return!0}},
jj:{"^":"i;a,b,$ti",
ga2:function(a){return new H.jk(J.ba(this.a),this.b,this.$ti)},
gn:function(a){return J.aq(this.a)},
J:function(a,b){return this.b.$1(J.cC(this.a,b))},
$asi:function(a,b){return[b]}},
jk:{"^":"dn;0a,b,c,$ti",
G:function(){var z=this.b
if(z.G()){this.a=this.c.$1(z.gO(z))
return!0}this.a=null
return!1},
gO:function(a){return this.a},
$asdn:function(a,b){return[b]}},
jl:{"^":"cN;a,b,$ti",
gn:function(a){return J.aq(this.a)},
J:function(a,b){return this.b.$1(J.cC(this.a,b))},
$ascN:function(a,b){return[b]},
$asi:function(a,b){return[b]}},
dS:{"^":"i;a,b,$ti",
ga2:function(a){return new H.lu(J.ba(this.a),this.b,this.$ti)}},
lu:{"^":"dn;a,b,$ti",
G:function(){var z,y
for(z=this.a,y=this.b;z.G();)if(y.$1(z.gO(z)))return!0
return!1},
gO:function(a){var z=this.a
return z.gO(z)}},
cK:{"^":"b;$ti"},
cV:{"^":"b;$ti",
l:function(a,b,c){H.G(b)
H.C(c,H.al(this,"cV",0))
throw H.a(P.E("Cannot modify an unmodifiable list"))},
aL:function(a,b,c,d){H.C(d,H.al(this,"cV",0))
throw H.a(P.E("Cannot modify an unmodifiable list"))}},
l_:{"^":"cM+cV;"}}],["","",,H,{"^":"",
io:function(){throw H.a(P.E("Cannot modify unmodifiable Map"))},
nU:function(a){return init.types[H.G(a)]},
hI:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.L(a).$isK},
k:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ae(a)
if(typeof z!=="string")throw H.a(H.aa(a))
return z},
bX:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
jR:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.f(z,3)
y=H.I(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.a(P.a7(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.I(w,u)|32)>x)return}return parseInt(a,b)},
bt:function(a){var z,y,x,w,v,u,t,s,r
z=J.L(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.P||!!J.L(a).$iscw){v=C.y(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.b.I(w,0)===36)w=C.b.av(w,1)
r=H.e7(H.cd(H.bh(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
jJ:function(){if(!!self.location)return self.location.href
return},
f8:function(a){var z,y,x,w,v
H.cd(a)
z=J.aq(a)
if(typeof z!=="number")return z.f9()
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
if(w<z)v=w
else v=z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
jS:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.D)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.a(H.aa(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.d.b0(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.a(H.aa(w))}return H.f8(z)},
f9:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.a(H.aa(x))
if(x<0)throw H.a(H.aa(x))
if(x>65535)return H.jS(a)}return H.f8(a)},
jT:function(a,b,c){var z,y,x,w
if(typeof c!=="number")return c.f9()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
if(x<c)w=x
else w=c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
bY:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.d.b0(z,10))>>>0,56320|z&1023)}}throw H.a(P.a7(a,0,1114111,null,null))},
ap:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jQ:function(a){return a.b?H.ap(a).getUTCFullYear()+0:H.ap(a).getFullYear()+0},
jO:function(a){return a.b?H.ap(a).getUTCMonth()+1:H.ap(a).getMonth()+1},
jK:function(a){return a.b?H.ap(a).getUTCDate()+0:H.ap(a).getDate()+0},
jL:function(a){return a.b?H.ap(a).getUTCHours()+0:H.ap(a).getHours()+0},
jN:function(a){return a.b?H.ap(a).getUTCMinutes()+0:H.ap(a).getMinutes()+0},
jP:function(a){return a.b?H.ap(a).getUTCSeconds()+0:H.ap(a).getSeconds()+0},
jM:function(a){return a.b?H.ap(a).getUTCMilliseconds()+0:H.ap(a).getMilliseconds()+0},
o:function(a){throw H.a(H.aa(a))},
f:function(a,b){if(a==null)J.aq(a)
throw H.a(H.aY(a,b))},
aY:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aL(!0,b,"index",null)
z=H.G(J.aq(a))
if(!(b<0)){if(typeof z!=="number")return H.o(z)
y=b>=z}else y=!0
if(y)return P.Y(b,a,"index",null,z)
return P.cq(b,"index",null)},
nQ:function(a,b,c){if(a>c)return new P.cQ(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cQ(a,c,!0,b,"end","Invalid value")
return new P.aL(!0,b,"end",null)},
aa:function(a){return new P.aL(!0,a,null,null)},
nF:function(a){if(typeof a!=="number")throw H.a(H.aa(a))
return a},
a:function(a){var z
if(a==null)a=new P.f4()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hS})
z.name=""}else z.toString=H.hS
return z},
hS:function(){return J.ae(this.dartException)},
r:function(a){throw H.a(a)},
D:function(a){throw H.a(P.aZ(a))},
ad:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.ou(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.b0(x,16)&8191)===10)switch(w){case 438:return z.$1(H.dr(H.k(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.f3(H.k(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$ft()
u=$.$get$fu()
t=$.$get$fv()
s=$.$get$fw()
r=$.$get$fA()
q=$.$get$fB()
p=$.$get$fy()
$.$get$fx()
o=$.$get$fD()
n=$.$get$fC()
m=v.ak(y)
if(m!=null)return z.$1(H.dr(H.I(y),m))
else{m=u.ak(y)
if(m!=null){m.method="call"
return z.$1(H.dr(H.I(y),m))}else{m=t.ak(y)
if(m==null){m=s.ak(y)
if(m==null){m=r.ak(y)
if(m==null){m=q.ak(y)
if(m==null){m=p.ak(y)
if(m==null){m=s.ak(y)
if(m==null){m=o.ak(y)
if(m==null){m=n.ak(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.f3(H.I(y),m))}}return z.$1(new H.kZ(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.ff()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aL(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.ff()
return a},
bM:function(a){var z
if(a==null)return new H.ha(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.ha(a)},
nT:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.l(0,a[y],a[x])}return b},
o2:function(a,b,c,d,e,f){H.e(a,"$isci")
switch(H.G(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.t("Unsupported number of arguments for wrapped closure"))},
bK:function(a,b){var z
H.G(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.o2)
a.$identity=z
return z},
ii:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.L(d).$isd){z.$reflectionInfo=d
x=H.jZ(z).r}else x=d
w=e?Object.create(new H.ks().constructor.prototype):Object.create(new H.dc(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.aM
if(typeof u!=="number")return u.E()
$.aM=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.eu(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.nU,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.ep:H.dd
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.a("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.eu(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
ie:function(a,b,c,d){var z=H.dd
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
eu:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.ih(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.ie(y,!w,z,b)
if(y===0){w=$.aM
if(typeof w!=="number")return w.E()
$.aM=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bP
if(v==null){v=H.cF("self")
$.bP=v}return new Function(w+H.k(v)+";return "+u+"."+H.k(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aM
if(typeof w!=="number")return w.E()
$.aM=w+1
t+=w
w="return function("+t+"){return this."
v=$.bP
if(v==null){v=H.cF("self")
$.bP=v}return new Function(w+H.k(v)+"."+H.k(z)+"("+t+");}")()},
ig:function(a,b,c,d){var z,y
z=H.dd
y=H.ep
switch(b?-1:a){case 0:throw H.a(H.k8("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
ih:function(a,b){var z,y,x,w,v,u,t,s
z=$.bP
if(z==null){z=H.cF("self")
$.bP=z}y=$.eo
if(y==null){y=H.cF("receiver")
$.eo=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.ig(w,!u,x,b)
if(w===1){z="return function(){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+");"
y=$.aM
if(typeof y!=="number")return y.E()
$.aM=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.k(z)+"."+H.k(x)+"(this."+H.k(y)+", "+s+");"
y=$.aM
if(typeof y!=="number")return y.E()
$.aM=y+1
return new Function(z+y+"}")()},
e2:function(a,b,c,d,e,f,g){var z,y
z=J.bS(H.cd(b))
H.G(c)
y=!!J.L(d).$isd?J.bS(d):d
return H.ii(a,z,c,y,!!e,f,g)},
I:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.a(H.aH(a,"String"))},
nR:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aH(a,"double"))},
hM:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.a(H.aH(a,"num"))},
e0:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.a(H.aH(a,"bool"))},
G:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.a(H.aH(a,"int"))},
eb:function(a,b){throw H.a(H.aH(a,H.I(b).substring(3)))},
ol:function(a,b){var z=J.aB(b)
throw H.a(H.id(a,z.w(b,3,z.gn(b))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.L(a)[b])return a
H.eb(a,b)},
j:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.L(a)[b]
else z=!0
if(z)return a
H.ol(a,b)},
hN:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.L(a)[b])return a
H.eb(a,b)},
cd:function(a){if(a==null)return a
if(!!J.L(a).$isd)return a
throw H.a(H.aH(a,"List"))},
hK:function(a,b){if(a==null)return a
if(!!J.L(a).$isd)return a
if(J.L(a)[b])return a
H.eb(a,b)},
hC:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.G(z)]
else return a.$S()}return},
cz:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.hC(J.L(a))
if(z==null)return!1
y=H.hH(z,null,b,null)
return y},
l:function(a,b){var z,y
if(a==null)return a
if($.dY)return a
$.dY=!0
try{if(H.cz(a,b))return a
z=H.cB(b)
y=H.aH(a,z)
throw H.a(y)}finally{$.dY=!1}},
e5:function(a,b){if(a!=null&&!H.e1(a,b))H.r(H.aH(a,H.cB(b)))
return a},
hu:function(a){var z
if(a instanceof H.m){z=H.hC(J.L(a))
if(z!=null)return H.cB(z)
return"Closure"}return H.bt(a)},
or:function(a){throw H.a(new P.it(H.I(a)))},
hF:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bh:function(a){if(a==null)return
return a.$ti},
q0:function(a,b,c){return H.bN(a["$as"+H.k(c)],H.bh(b))},
bg:function(a,b,c,d){var z
H.I(c)
H.G(d)
z=H.bN(a["$as"+H.k(c)],H.bh(b))
return z==null?null:z[d]},
al:function(a,b,c){var z
H.I(b)
H.G(c)
z=H.bN(a["$as"+H.k(b)],H.bh(a))
return z==null?null:z[c]},
y:function(a,b){var z
H.G(b)
z=H.bh(a)
return z==null?null:z[b]},
cB:function(a){var z=H.bi(a,null)
return z},
bi:function(a,b){var z,y
H.q(b,"$isd",[P.h],"$asd")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.e7(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.G(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.k(b[y])}if('func' in a)return H.nu(a,b)
if('futureOr' in a)return"FutureOr<"+H.bi("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nu:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.h]
H.q(b,"$isd",z,"$asd")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.f(b,r)
t=C.b.E(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.bi(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.bi(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.bi(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.bi(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.nS(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.I(z[l])
n=n+m+H.bi(i[h],b)+(" "+H.k(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
e7:function(a,b,c){var z,y,x,w,v,u
H.q(c,"$isd",[P.h],"$asd")
if(a==null)return""
z=new P.at("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.bi(u,c)}v="<"+z.j(0)+">"
return v},
bN:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ca:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.bh(a)
y=J.L(a)
if(y[b]==null)return!1
return H.hx(H.bN(y[d],z),null,c,null)},
q:function(a,b,c,d){var z,y
H.I(b)
H.cd(c)
H.I(d)
if(a==null)return a
z=H.ca(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.e7(c,0,null)
throw H.a(H.aH(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
hx:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aC(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aC(a[y],b,c[y],d))return!1
return!0},
pZ:function(a,b,c){return a.apply(b,H.bN(J.L(b)["$as"+H.k(c)],H.bh(b)))},
hJ:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="P"||a===-1||a===-2||H.hJ(z)}return!1},
e1:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="b"||b.builtin$cls==="P"||b===-1||b===-2||H.hJ(b)
return z}z=b==null||b===-1||b.builtin$cls==="b"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.e1(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cz(a,b)}y=J.L(a).constructor
x=H.bh(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.aC(y,null,b,null)
return z},
C:function(a,b){if(a!=null&&!H.e1(a,b))throw H.a(H.aH(a,H.cB(b)))
return a},
aC:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aC(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="P")return!0
if('func' in c)return H.hH(a,b,c,d)
if('func' in a)return c.builtin$cls==="ci"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aC("type" in a?a.type:null,b,x,d)
else if(H.aC(a,b,x,d))return!0
else{if(!('$is'+"bR" in y.prototype))return!1
w=y.prototype["$as"+"bR"]
v=H.bN(w,z?a.slice(1):null)
return H.aC(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.cB(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.hx(H.bN(r,z),b,u,d)},
hH:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.aC(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.aC(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.aC(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.aC(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.oj(m,b,l,d)},
oj:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aC(c[w],d,a[w],b))return!1}return!0},
q_:function(a,b,c){Object.defineProperty(a,H.I(b),{value:c,enumerable:false,writable:true,configurable:true})},
o7:function(a){var z,y,x,w,v,u
z=H.I($.hG.$1(a))
y=$.d2[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.d5[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.I($.hw.$2(a,z))
if(z!=null){y=$.d2[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.d5[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.d6(x)
$.d2[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.d5[z]=x
return x}if(v==="-"){u=H.d6(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.hO(a,x)
if(v==="*")throw H.a(P.cv(z))
if(init.leafTags[z]===true){u=H.d6(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.hO(a,x)},
hO:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.e8(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
d6:function(a){return J.e8(a,!1,null,!!a.$isK)},
oi:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.d6(z)
else return J.e8(z,c,null,null)},
o0:function(){if(!0===$.e6)return
$.e6=!0
H.o1()},
o1:function(){var z,y,x,w,v,u,t,s
$.d2=Object.create(null)
$.d5=Object.create(null)
H.nX()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hP.$1(v)
if(u!=null){t=H.oi(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
nX:function(){var z,y,x,w,v,u,t
z=C.U()
z=H.bJ(C.R,H.bJ(C.W,H.bJ(C.x,H.bJ(C.x,H.bJ(C.V,H.bJ(C.S,H.bJ(C.T(C.y),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.hG=new H.nY(v)
$.hw=new H.nZ(u)
$.hP=new H.o_(t)},
bJ:function(a,b){return a(b)||b},
hR:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
ec:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
im:{"^":"b;$ti",
j:function(a){return P.dv(this)},
l:function(a,b,c){H.C(b,H.y(this,0))
H.C(c,H.y(this,1))
return H.io()},
$isN:1},
ip:{"^":"im;a,b,c,$ti",
gn:function(a){return this.a},
bH:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.bH(0,b))return
return this.dN(b)},
dN:function(a){return this.b[H.I(a)]},
M:function(a,b){var z,y,x,w,v
z=H.y(this,1)
H.l(b,{func:1,ret:-1,args:[H.y(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.C(this.dN(v),z))}}},
jY:{"^":"b;a,b,c,d,e,f,r,0x",u:{
jZ:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bS(z)
y=z[0]
x=z[1]
return new H.jY(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
kL:{"^":"b;a,b,c,d,e,f",
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
aV:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.h])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.kL(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cU:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fz:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
jD:{"^":"ab;a,b",
j:function(a){var z=this.b
if(z==null)return"NullError: "+H.k(this.a)
return"NullError: method not found: '"+z+"' on null"},
u:{
f3:function(a,b){return new H.jD(a,b==null?null:b.method)}}},
j1:{"^":"ab;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.k(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.k(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.k(this.a)+")"},
u:{
dr:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.j1(a,y,z?null:b.receiver)}}},
kZ:{"^":"ab;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
ou:{"^":"m:19;a",
$1:function(a){if(!!J.L(a).$isab)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
ha:{"^":"b;a,0b",
j:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaG:1},
m:{"^":"b;",
j:function(a){return"Closure '"+H.bt(this).trim()+"'"},
gf5:function(){return this},
$isci:1,
gf5:function(){return this}},
fk:{"^":"m;"},
ks:{"^":"fk;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
dc:{"^":"fk;a,b,c,d",
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.dc))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gY:function(a){var z,y
z=this.c
if(z==null)y=H.bX(this.a)
else y=typeof z!=="object"?J.ce(z):H.bX(z)
return(y^H.bX(this.b))>>>0},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.bt(z)+"'")},
u:{
dd:function(a){return a.a},
ep:function(a){return a.c},
cF:function(a){var z,y,x,w,v
z=new H.dc("self","target","receiver","name")
y=J.bS(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
kM:{"^":"ab;a",
j:function(a){return this.a},
u:{
aH:function(a,b){return new H.kM("TypeError: "+H.k(P.cJ(a))+": type '"+H.hu(a)+"' is not a subtype of type '"+b+"'")}}},
ic:{"^":"ab;a",
j:function(a){return this.a},
u:{
id:function(a,b){return new H.ic("CastError: "+H.k(P.cJ(a))+": type '"+H.hu(a)+"' is not a subtype of type '"+b+"'")}}},
k7:{"^":"ab;a",
j:function(a){return"RuntimeError: "+H.k(this.a)},
u:{
k8:function(a){return new H.k7(a)}}},
be:{"^":"eY;a,0b,0c,0d,0e,0f,r,$ti",
gn:function(a){return this.a},
giL:function(a){return this.a===0},
gaa:function(a){return new H.j7(this,[H.y(this,0)])},
bH:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.dJ(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.dJ(y,b)}else return this.iI(b)},
iI:function(a){var z=this.d
if(z==null)return!1
return this.cY(this.cj(z,this.cX(a)),a)>=0},
i:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bz(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bz(w,b)
x=y==null?null:y.b
return x}else return this.iJ(b)},
iJ:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cj(z,this.cX(a))
x=this.cY(y,a)
if(x<0)return
return y[x].b},
l:function(a,b,c){var z,y
H.C(b,H.y(this,0))
H.C(c,H.y(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.cp()
this.b=z}this.dC(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.cp()
this.c=y}this.dC(y,b,c)}else this.iK(b,c)},
iK:function(a,b){var z,y,x,w
H.C(a,H.y(this,0))
H.C(b,H.y(this,1))
z=this.d
if(z==null){z=this.cp()
this.d=z}y=this.cX(a)
x=this.cj(z,y)
if(x==null)this.cw(z,y,[this.cq(a,b)])
else{w=this.cY(x,a)
if(w>=0)x[w].b=b
else x.push(this.cq(a,b))}},
M:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.a(P.aZ(this))
z=z.c}},
dC:function(a,b,c){var z
H.C(b,H.y(this,0))
H.C(c,H.y(this,1))
z=this.bz(a,b)
if(z==null)this.cw(a,b,this.cq(b,c))
else z.b=c},
fS:function(){this.r=this.r+1&67108863},
cq:function(a,b){var z,y
z=new H.j6(H.C(a,H.y(this,0)),H.C(b,H.y(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fS()
return z},
cX:function(a){return J.ce(a)&0x3ffffff},
cY:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.J(a[y].a,b))return y
return-1},
j:function(a){return P.dv(this)},
bz:function(a,b){return a[b]},
cj:function(a,b){return a[b]},
cw:function(a,b,c){a[b]=c},
fM:function(a,b){delete a[b]},
dJ:function(a,b){return this.bz(a,b)!=null},
cp:function(){var z=Object.create(null)
this.cw(z,"<non-identifier-key>",z)
this.fM(z,"<non-identifier-key>")
return z},
$iseV:1},
j6:{"^":"b;a,b,0c,0d"},
j7:{"^":"eG;a,$ti",
gn:function(a){return this.a.a},
ga2:function(a){var z,y
z=this.a
y=new H.j8(z,z.r,this.$ti)
y.c=z.e
return y}},
j8:{"^":"b;a,b,0c,0d,$ti",
gO:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aZ(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
nY:{"^":"m:19;a",
$1:function(a){return this.a(a)}},
nZ:{"^":"m:58;a",
$2:function(a,b){return this.a(a,b)}},
o_:{"^":"m:57;a",
$1:function(a){return this.a(H.I(a))}},
j_:{"^":"b;a,b,0c,0d",
j:function(a){return"RegExp/"+this.a+"/"},
$isf5:1,
$isk_:1,
u:{
j0:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.a(P.a4("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
nS:function(a){return J.eP(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
ok:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bH:function(a){return a},
jx:function(a){return new Int8Array(a)},
aX:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.aY(b,a))},
no:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.a(H.nQ(a,b,c))
return b},
f1:{"^":"u;",$isf1:1,"%":"ArrayBuffer"},
dA:{"^":"u;",$isdA:1,$iskN:1,"%":"DataView;ArrayBufferView;dz|h4|h5|jy|h6|h7|bf"},
dz:{"^":"dA;",
gn:function(a){return a.length},
$isK:1,
$asK:I.e4},
jy:{"^":"h5;",
i:function(a,b){H.aX(b,a,a.length)
return a[b]},
l:function(a,b,c){H.G(b)
H.nR(c)
H.aX(b,a,a.length)
a[b]=c},
$ascK:function(){return[P.v]},
$asA:function(){return[P.v]},
$isi:1,
$asi:function(){return[P.v]},
$isd:1,
$asd:function(){return[P.v]},
"%":"Float32Array|Float64Array"},
bf:{"^":"h7;",
l:function(a,b,c){H.G(b)
H.G(c)
H.aX(b,a,a.length)
a[b]=c},
$ascK:function(){return[P.n]},
$asA:function(){return[P.n]},
$isi:1,
$asi:function(){return[P.n]},
$isd:1,
$asd:function(){return[P.n]}},
p6:{"^":"bf;",
i:function(a,b){H.aX(b,a,a.length)
return a[b]},
"%":"Int16Array"},
p7:{"^":"bf;",
i:function(a,b){H.aX(b,a,a.length)
return a[b]},
"%":"Int32Array"},
p8:{"^":"bf;",
i:function(a,b){H.aX(b,a,a.length)
return a[b]},
"%":"Int8Array"},
p9:{"^":"bf;",
i:function(a,b){H.aX(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
pa:{"^":"bf;",
i:function(a,b){H.aX(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
pb:{"^":"bf;",
gn:function(a){return a.length},
i:function(a,b){H.aX(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
dB:{"^":"bf;",
gn:function(a){return a.length},
i:function(a,b){H.aX(b,a,a.length)
return a[b]},
c8:function(a,b,c){return new Uint8Array(a.subarray(b,H.no(b,c,a.length)))},
$isdB:1,
$isV:1,
"%":";Uint8Array"},
h4:{"^":"dz+A;"},
h5:{"^":"h4+cK;"},
h6:{"^":"dz+A;"},
h7:{"^":"h6+cK;"}}],["","",,P,{"^":"",
lw:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.nC()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bK(new P.ly(z),1)).observe(y,{childList:true})
return new P.lx(z,y,x)}else if(self.setImmediate!=null)return P.nD()
return P.nE()},
pM:[function(a){self.scheduleImmediate(H.bK(new P.lz(H.l(a,{func:1,ret:-1})),0))},"$1","nC",4,0,12],
pN:[function(a){self.setImmediate(H.bK(new P.lA(H.l(a,{func:1,ret:-1})),0))},"$1","nD",4,0,12],
pO:[function(a){P.dK(C.q,H.l(a,{func:1,ret:-1}))},"$1","nE",4,0,12],
dK:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.d.a6(a.a,1000)
return P.mH(z<0?0:z,b)},
fo:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.bA]})
z=C.d.a6(a.a,1000)
return P.mI(z<0?0:z,b)},
ny:function(a,b){if(H.cz(a,{func:1,args:[P.b,P.aG]}))return b.j6(a,null,P.b,P.aG)
if(H.cz(a,{func:1,args:[P.b]}))return H.l(a,{func:1,ret:null,args:[P.b]})
throw H.a(P.cD(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
nx:function(){var z,y
for(;z=$.bI,z!=null;){$.c8=null
y=z.b
$.bI=y
if(y==null)$.c7=null
z.a.$0()}},
pY:[function(){$.dZ=!0
try{P.nx()}finally{$.c8=null
$.dZ=!1
if($.bI!=null)$.$get$dT().$1(P.hy())}},"$0","hy",0,0,3],
ht:function(a){var z=new P.fW(H.l(a,{func:1,ret:-1}))
if($.bI==null){$.c7=z
$.bI=z
if(!$.dZ)$.$get$dT().$1(P.hy())}else{$.c7.b=z
$.c7=z}},
nB:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.bI
if(z==null){P.ht(a)
$.c8=$.c7
return}y=new P.fW(a)
x=$.c8
if(x==null){y.b=z
$.c8=y
$.bI=y}else{y.b=x.b
x.b=y
$.c8=y
if(y.b==null)$.c7=y}},
om:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.a_
if(C.j===y){P.d1(null,null,C.j,a)
return}y.toString
P.d1(null,null,y,H.l(y.cF(a),z))},
fn:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.a_
if(y===C.j){y.toString
return P.dK(a,b)}return P.dK(a,H.l(y.cF(b),z))},
kI:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bA]}
H.l(b,z)
y=$.a_
if(y===C.j){y.toString
return P.fo(a,b)}x=y.ea(b,P.bA)
$.a_.toString
return P.fo(a,H.l(x,z))},
d0:function(a,b,c,d,e){var z={}
z.a=d
P.nB(new P.nz(z,e))},
hp:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.a_
if(y===c)return d.$0()
$.a_=c
z=y
try{y=d.$0()
return y}finally{$.a_=z}},
hq:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.C(e,g)
y=$.a_
if(y===c)return d.$1(e)
$.a_=c
z=y
try{y=d.$1(e)
return y}finally{$.a_=z}},
nA:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.C(e,h)
H.C(f,i)
y=$.a_
if(y===c)return d.$2(e,f)
$.a_=c
z=y
try{y=d.$2(e,f)
return y}finally{$.a_=z}},
d1:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.j!==c
if(z)d=!(!z||!1)?c.cF(d):c.ij(d,-1)
P.ht(d)},
ly:{"^":"m:32;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
lx:{"^":"m:53;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
lz:{"^":"m:0;a",
$0:function(){this.a.$0()}},
lA:{"^":"m:0;a",
$0:function(){this.a.$0()}},
he:{"^":"b;a,0b,c",
fw:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bK(new P.mK(this,b),0),a)
else throw H.a(P.E("`setTimeout()` not found."))},
fz:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bK(new P.mJ(this,a,Date.now(),b),0),a)
else throw H.a(P.E("Periodic timer."))},
$isbA:1,
u:{
mH:function(a,b){var z=new P.he(!0,0)
z.fw(a,b)
return z},
mI:function(a,b){var z=new P.he(!1,0)
z.fz(a,b)
return z}}},
mK:{"^":"m:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
mJ:{"^":"m:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.d.fj(w,x)}z.c=y
this.d.$1(z)}},
bG:{"^":"b;0a,b,c,d,e,$ti",
iQ:function(a){if(this.c!==6)return!0
return this.b.b.dd(H.l(this.d,{func:1,ret:P.W,args:[P.b]}),a.a,P.W,P.b)},
iG:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.y(this,1)}
w=this.b.b
if(H.cz(z,{func:1,args:[P.b,P.aG]}))return H.e5(w.jf(z,a.a,a.b,null,y,P.aG),x)
else return H.e5(w.dd(H.l(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
b8:{"^":"b;dY:a<,b,0hy:c<,$ti",
f_:function(a,b,c){var z,y,x,w
z=H.y(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.a_
if(y!==C.j){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.ny(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.b8(0,$.a_,[c])
w=b==null?1:3
this.dD(new P.bG(x,w,a,b,[z,c]))
return x},
jl:function(a,b){return this.f_(a,null,b)},
dD:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isbG")
this.c=a}else{if(z===2){y=H.e(this.c,"$isb8")
z=y.a
if(z<4){y.dD(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.d1(null,null,z,H.l(new P.lQ(this,a),{func:1,ret:-1}))}},
dT:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isbG")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isb8")
y=u.a
if(y<4){u.dT(a)
return}this.a=y
this.c=u.c}z.a=this.bB(a)
y=this.b
y.toString
P.d1(null,null,y,H.l(new P.lV(z,this),{func:1,ret:-1}))}},
cs:function(){var z=H.e(this.c,"$isbG")
this.c=null
return this.bB(z)},
bB:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
dG:function(a){var z,y,x,w
z=H.y(this,0)
H.e5(a,{futureOr:1,type:z})
y=this.$ti
x=H.ca(a,"$isbR",y,"$asbR")
if(x){z=H.ca(a,"$isb8",y,null)
if(z)P.h_(a,this)
else P.lR(a,this)}else{w=this.cs()
H.C(a,z)
this.a=4
this.c=a
P.c3(this,w)}},
cd:[function(a,b){var z
H.e(b,"$isaG")
z=this.cs()
this.a=8
this.c=new P.av(a,b)
P.c3(this,z)},function(a){return this.cd(a,null)},"jr","$2","$1","gfH",4,2,52],
$isbR:1,
u:{
lR:function(a,b){var z,y,x
b.a=1
try{a.f_(new P.lS(b),new P.lT(b),null)}catch(x){z=H.ad(x)
y=H.bM(x)
P.om(new P.lU(b,z,y))}},
h_:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isb8")
if(z>=4){y=b.cs()
b.a=a.a
b.c=a.c
P.c3(b,y)}else{y=H.e(b.c,"$isbG")
b.a=2
b.c=a
a.dT(y)}},
c3:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isav")
y=y.b
u=v.a
t=v.b
y.toString
P.d0(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.c3(z.a,b)}y=z.a
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
if(p){H.e(r,"$isav")
y=y.b
u=r.a
t=r.b
y.toString
P.d0(null,null,y,u,t)
return}o=$.a_
if(o==null?q!=null:o!==q)$.a_=q
else o=null
y=b.c
if(y===8)new P.lY(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.lX(x,b,r).$0()}else if((y&2)!==0)new P.lW(z,x,b).$0()
if(o!=null)$.a_=o
y=x.b
if(!!J.L(y).$isbR){if(y.a>=4){n=H.e(t.c,"$isbG")
t.c=null
b=t.bB(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.h_(y,t)
return}}m=b.b
n=H.e(m.c,"$isbG")
m.c=null
b=m.bB(n)
y=x.a
u=x.b
if(!y){H.C(u,H.y(m,0))
m.a=4
m.c=u}else{H.e(u,"$isav")
m.a=8
m.c=u}z.a=m
y=m}}}},
lQ:{"^":"m:0;a,b",
$0:function(){P.c3(this.a,this.b)}},
lV:{"^":"m:0;a,b",
$0:function(){P.c3(this.b,this.a.a)}},
lS:{"^":"m:32;a",
$1:function(a){var z=this.a
z.a=0
z.dG(a)}},
lT:{"^":"m:51;a",
$2:function(a,b){this.a.cd(a,H.e(b,"$isaG"))},
$1:function(a){return this.$2(a,null)}},
lU:{"^":"m:0;a,b,c",
$0:function(){this.a.cd(this.b,this.c)}},
lY:{"^":"m:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.eZ(H.l(w.d,{func:1}),null)}catch(v){y=H.ad(v)
x=H.bM(v)
if(this.d){w=H.e(this.a.a.c,"$isav").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isav")
else u.b=new P.av(y,x)
u.a=!0
return}if(!!J.L(z).$isbR){if(z instanceof P.b8&&z.gdY()>=4){if(z.gdY()===8){w=this.b
w.b=H.e(z.ghy(),"$isav")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.jl(new P.lZ(t),null)
w.a=!1}}},
lZ:{"^":"m:50;a",
$1:function(a){return this.a}},
lX:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.y(x,0)
v=H.C(this.c,w)
u=H.y(x,1)
this.a.b=x.b.b.dd(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ad(t)
y=H.bM(t)
x=this.a
x.b=new P.av(z,y)
x.a=!0}}},
lW:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isav")
w=this.c
if(w.iQ(z)&&w.e!=null){v=this.b
v.b=w.iG(z)
v.a=!1}}catch(u){y=H.ad(u)
x=H.bM(u)
w=H.e(this.a.a.c,"$isav")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.av(y,x)
s.a=!0}}},
fW:{"^":"b;a,0b"},
dG:{"^":"b;$ti",
gn:function(a){var z,y
z={}
y=new P.b8(0,$.a_,[P.n])
z.a=0
this.iO(new P.kv(z,this),!0,new P.kw(z,y),y.gfH())
return y}},
kv:{"^":"m;a,b",
$1:function(a){H.C(a,H.al(this.b,"dG",0));++this.a.a},
$S:function(){return{func:1,ret:P.P,args:[H.al(this.b,"dG",0)]}}},
kw:{"^":"m:0;a,b",
$0:function(){this.b.dG(this.a.a)}},
fi:{"^":"b;$ti"},
ku:{"^":"b;"},
bA:{"^":"b;"},
av:{"^":"b;a,b",
j:function(a){return H.k(this.a)},
$isab:1},
nc:{"^":"b;",$ispL:1},
nz:{"^":"m:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.f4()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.a(z)
x=H.a(z)
x.stack=y.j(0)
throw x}},
mi:{"^":"nc;",
jg:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.j===$.a_){a.$0()
return}P.hp(null,null,this,a,-1)}catch(x){z=H.ad(x)
y=H.bM(x)
P.d0(null,null,this,z,H.e(y,"$isaG"))}},
jh:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.C(b,c)
try{if(C.j===$.a_){a.$1(b)
return}P.hq(null,null,this,a,b,-1,c)}catch(x){z=H.ad(x)
y=H.bM(x)
P.d0(null,null,this,z,H.e(y,"$isaG"))}},
ij:function(a,b){return new P.mk(this,H.l(a,{func:1,ret:b}),b)},
cF:function(a){return new P.mj(this,H.l(a,{func:1,ret:-1}))},
ea:function(a,b){return new P.ml(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
eZ:function(a,b){H.l(a,{func:1,ret:b})
if($.a_===C.j)return a.$0()
return P.hp(null,null,this,a,b)},
dd:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.C(b,d)
if($.a_===C.j)return a.$1(b)
return P.hq(null,null,this,a,b,c,d)},
jf:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.C(b,e)
H.C(c,f)
if($.a_===C.j)return a.$2(b,c)
return P.nA(null,null,this,a,b,c,d,e,f)},
j6:function(a,b,c,d){return H.l(a,{func:1,ret:b,args:[c,d]})}},
mk:{"^":"m;a,b,c",
$0:function(){return this.a.eZ(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
mj:{"^":"m:3;a,b",
$0:function(){return this.a.jg(this.b)}},
ml:{"^":"m;a,b,c",
$1:function(a){var z=this.c
return this.a.jh(this.b,H.C(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
j9:function(a,b,c,d,e){return new H.be(0,0,[d,e])},
ja:function(a,b,c){H.cd(a)
return H.q(H.nT(a,new H.be(0,0,[b,c])),"$iseV",[b,c],"$aseV")},
dt:function(a,b){return new H.be(0,0,[a,b])},
cp:function(a,b,c,d){return new P.m5(0,0,[d])},
iW:function(a,b,c){var z,y
if(P.e_(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$c9()
C.a.h(y,a)
try{P.nw(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.fj(b,H.hK(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
dl:function(a,b,c){var z,y,x
if(P.e_(a))return b+"..."+c
z=new P.at(b)
y=$.$get$c9()
C.a.h(y,a)
try{x=z
x.a=P.fj(x.gaW(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gaW()+c
y=z.gaW()
return y.charCodeAt(0)==0?y:y},
e_:function(a){var z,y
for(z=0;y=$.$get$c9(),z<y.length;++z)if(a===y[z])return!0
return!1},
nw:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.ga2(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.G())return
w=H.k(z.gO(z))
C.a.h(b,w)
y+=w.length+2;++x}if(!z.G()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gO(z);++x
if(!z.G()){if(x<=4){C.a.h(b,H.k(t))
return}v=H.k(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gO(z);++x
for(;z.G();t=s,s=r){r=z.gO(z);++x
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
jb:function(a,b,c){var z=P.j9(null,null,null,b,c)
a.M(0,new P.jc(z,b,c))
return z},
eW:function(a,b){var z,y
z=P.cp(null,null,null,b)
for(y=J.ba(a);y.G();)z.h(0,H.C(y.gO(y),b))
return z},
dv:function(a){var z,y,x
z={}
if(P.e_(a))return"{...}"
y=new P.at("")
try{C.a.h($.$get$c9(),a)
x=y
x.a=x.gaW()+"{"
z.a=!0
J.ef(a,new P.jh(z,y))
z=y
z.a=z.gaW()+"}"}finally{z=$.$get$c9()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gaW()
return z.charCodeAt(0)==0?z:z},
m5:{"^":"m_;a,0b,0c,0d,0e,0f,r,$ti",
ga2:function(a){var z=new P.h3(this,this.r,this.$ti)
z.c=this.e
return z},
gn:function(a){return this.a},
X:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.e(z[b],"$iscY")!=null}else{y=this.fI(b)
return y}},
fI:function(a){var z=this.d
if(z==null)return!1
return this.cg(this.dO(z,a),a)>=0},
h:function(a,b){var z,y
H.C(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dV()
this.b=z}return this.dE(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dV()
this.c=y}return this.dE(y,b)}else return this.fA(0,b)},
fA:function(a,b){var z,y,x
H.C(b,H.y(this,0))
z=this.d
if(z==null){z=P.dV()
this.d=z}y=this.dH(b)
x=z[y]
if(x==null)z[y]=[this.cc(b)]
else{if(this.cg(x,b)>=0)return!1
x.push(this.cc(b))}return!0},
H:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.dU(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dU(this.c,b)
else return this.hp(0,b)},
hp:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=this.dO(z,b)
x=this.cg(y,b)
if(x<0)return!1
this.e_(y.splice(x,1)[0])
return!0},
dE:function(a,b){H.C(b,H.y(this,0))
if(H.e(a[b],"$iscY")!=null)return!1
a[b]=this.cc(b)
return!0},
dU:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$iscY")
if(z==null)return!1
this.e_(z)
delete a[b]
return!0},
dF:function(){this.r=this.r+1&67108863},
cc:function(a){var z,y
z=new P.cY(H.C(a,H.y(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dF()
return z},
e_:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dF()},
dH:function(a){return J.ce(a)&0x3ffffff},
dO:function(a,b){return a[this.dH(b)]},
cg:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.J(a[y].a,b))return y
return-1},
u:{
dV:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cY:{"^":"b;a,0b,0c"},
h3:{"^":"b;a,b,0c,0d,$ti",
gO:function(a){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.a(P.aZ(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=H.C(z.a,H.y(this,0))
this.c=z.b
return!0}}}},
m_:{"^":"k9;"},
jc:{"^":"m:8;a,b,c",
$2:function(a,b){this.a.l(0,H.C(a,this.b),H.C(b,this.c))}},
cM:{"^":"m6;",$isi:1,$isd:1},
A:{"^":"b;$ti",
ga2:function(a){return new H.du(a,this.gn(a),0,[H.bg(this,a,"A",0)])},
J:function(a,b){return this.i(a,b)},
jn:function(a,b){var z,y,x
z=H.c([],[H.bg(this,a,"A",0)])
C.a.sn(z,this.gn(a))
y=0
while(!0){x=this.gn(a)
if(typeof x!=="number")return H.o(x)
if(!(y<x))break
C.a.l(z,y,this.i(a,y));++y}return z},
df:function(a){return this.jn(a,!0)},
aL:function(a,b,c,d){var z
H.C(d,H.bg(this,a,"A",0))
P.b2(b,c,this.gn(a),null,null,null)
for(z=b;z<c;++z)this.l(a,z,d)},
j:function(a){return P.dl(a,"[","]")}},
eY:{"^":"an;"},
jh:{"^":"m:8;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.k(a)
z.a=y+": "
z.a+=H.k(b)}},
an:{"^":"b;$ti",
M:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.bg(this,a,"an",0),H.bg(this,a,"an",1)]})
for(z=J.ba(this.gaa(a));z.G();){y=z.gO(z)
b.$2(y,this.i(a,y))}},
gn:function(a){return J.aq(this.gaa(a))},
j:function(a){return P.dv(a)},
$isN:1},
mP:{"^":"b;$ti",
l:function(a,b,c){H.C(b,H.y(this,0))
H.C(c,H.y(this,1))
throw H.a(P.E("Cannot modify unmodifiable map"))}},
ji:{"^":"b;$ti",
i:function(a,b){return J.ee(this.a,b)},
l:function(a,b,c){J.d8(this.a,H.C(b,H.y(this,0)),H.C(c,H.y(this,1)))},
M:function(a,b){J.ef(this.a,H.l(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]}))},
gn:function(a){return J.aq(this.a)},
j:function(a){return J.ae(this.a)},
$isN:1},
fK:{"^":"mQ;a,$ti"},
kb:{"^":"b;$ti",
ac:function(a,b){var z
for(z=J.ba(H.q(b,"$isi",this.$ti,"$asi"));z.G();)this.h(0,z.gO(z))},
j:function(a){return P.dl(this,"{","}")},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.ej("index"))
if(b<0)H.r(P.a7(b,0,null,"index",null))
for(z=new P.h3(this,this.r,this.$ti),z.c=this.e,y=0;z.G();){x=z.d
if(b===y)return x;++y}throw H.a(P.Y(b,this,"index",null,y))},
$isi:1},
k9:{"^":"kb;"},
m6:{"^":"b+A;"},
mQ:{"^":"ji+mP;$ti"}}],["","",,P,{"^":"",i9:{"^":"cg;a",
iS:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
d=P.b2(c,d,b.length,null,null,null)
z=$.$get$fY()
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
if(q<=d){p=H.d4(C.b.I(b,s))
o=H.d4(C.b.I(b,s+1))
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
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.at("")
w.a+=C.b.w(b,x,y)
w.a+=H.bY(r)
x=s
continue}}throw H.a(P.a4("Invalid base64 data",b,y))}if(w!=null){l=w.a+=C.b.w(b,x,d)
k=l.length
if(v>=0)P.em(b,u,d,v,t,k)
else{j=C.d.bw(k-1,4)+1
if(j===1)throw H.a(P.a4("Invalid base64 encoding length ",b,d))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.bc(b,c,d,l.charCodeAt(0)==0?l:l)}i=d-c
if(v>=0)P.em(b,u,d,v,t,i)
else{j=C.d.bw(i,4)
if(j===1)throw H.a(P.a4("Invalid base64 encoding length ",b,d))
if(j>1)b=C.b.bc(b,d,d,j===2?"==":"=")}return b},
$ascg:function(){return[[P.d,P.n],P.h]},
u:{
em:function(a,b,c,d,e,f){if(C.d.bw(f,4)!==0)throw H.a(P.a4("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.a(P.a4("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.a(P.a4("Invalid base64 padding, more than two '=' characters",a,b))}}},ia:{"^":"bc;a",
$asbc:function(){return[[P.d,P.n],P.h]}},cg:{"^":"b;$ti"},bc:{"^":"ku;$ti"},iE:{"^":"cg;",
$ascg:function(){return[P.h,[P.d,P.n]]}},iS:{"^":"b;a,b,c,d,e",
j:function(a){return this.a}},iR:{"^":"bc;a",
fJ:function(a,b,c){var z,y,x,w,v,u
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
default:u=null}if(u!=null){if(v==null)v=new P.at("")
if(w>b)v.a+=C.b.w(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.i4(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asbc:function(){return[P.h,P.h]}},lc:{"^":"iE;a",
giw:function(){return C.L}},lj:{"^":"bc;",
bj:function(a,b,c){var z,y,x,w
z=a.length
P.b2(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.na(0,0,x)
if(w.fO(a,b,z)!==z)w.e1(J.hX(a,z-1),0)
return C.a2.c8(x,0,w.b)},
cL:function(a){return this.bj(a,0,null)},
$asbc:function(){return[P.h,[P.d,P.n]]}},na:{"^":"b;a,b,c",
e1:function(a,b){var z,y,x,w,v
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
fO:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.a1(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.I(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.e1(w,C.b.I(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},ld:{"^":"bc;a",
bj:function(a,b,c){var z,y,x,w,v
H.q(a,"$isd",[P.n],"$asd")
z=P.le(!1,a,b,c)
if(z!=null)return z
y=J.aq(a)
P.b2(b,c,y,null,null,null)
x=new P.at("")
w=new P.n7(!1,x,!0,0,0,0)
w.bj(a,b,y)
w.iC(0,a,y)
v=x.a
return v.charCodeAt(0)==0?v:v},
cL:function(a){return this.bj(a,0,null)},
$asbc:function(){return[[P.d,P.n],P.h]},
u:{
le:function(a,b,c,d){H.q(b,"$isd",[P.n],"$asd")
if(b instanceof Uint8Array)return P.lf(!1,b,c,d)
return},
lf:function(a,b,c,d){var z,y,x
z=$.$get$fP()
if(z==null)return
y=0===c
if(y&&!0)return P.dP(z,b)
x=b.length
d=P.b2(c,d,x,null,null,null)
if(y&&d===x)return P.dP(z,b)
return P.dP(z,b.subarray(c,d))},
dP:function(a,b){if(P.lh(b))return
return P.li(a,b)},
li:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.ad(y)}return},
lh:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
lg:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.ad(y)}return}}},n7:{"^":"b;a,b,c,d,e,f",
iC:function(a,b,c){var z
H.q(b,"$isd",[P.n],"$asd")
if(this.e>0){z=P.a4("Unfinished UTF-8 octet sequence",b,c)
throw H.a(z)}},
bj:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.q(a,"$isd",[P.n],"$asd")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.n9(c)
v=new P.n8(this,b,c,a)
$label0$0:for(u=J.aB(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.i(a,s)
if(typeof r!=="number")return r.c5()
if((r&192)!==128){q=P.a4("Bad UTF-8 encoding 0x"+C.d.bs(r,16),a,s)
throw H.a(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.f(C.z,q)
if(z<=C.z[q]){q=P.a4("Overlong encoding of 0x"+C.d.bs(z,16),a,s-x-1)
throw H.a(q)}if(z>1114111){q=P.a4("Character outside valid Unicode range: 0x"+C.d.bs(z,16),a,s-x-1)
throw H.a(q)}if(!this.c||z!==65279)t.a+=H.bY(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.an()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.i(a,o)
if(typeof r!=="number")return r.K()
if(r<0){m=P.a4("Negative UTF-8 code unit: -0x"+C.d.bs(-r,16),a,n-1)
throw H.a(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.a4("Bad UTF-8 encoding 0x"+C.d.bs(r,16),a,n-1)
throw H.a(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},n9:{"^":"m:48;a",
$2:function(a,b){var z,y,x,w
H.q(a,"$isd",[P.n],"$asd")
z=this.a
for(y=J.aB(a),x=b;x<z;++x){w=y.i(a,x)
if(typeof w!=="number")return w.c5()
if((w&127)!==w)return x-b}return z-b}},n8:{"^":"m:47;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.ct(this.d,a,b)}}}],["","",,P,{"^":"",
cA:function(a,b,c){var z
H.l(b,{func:1,ret:P.n,args:[P.h]})
z=H.jR(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.a(P.a4(a,null,null))},
iG:function(a){var z=J.L(a)
if(!!z.$ism)return z.j(a)
return"Instance of '"+H.bt(a)+"'"},
jd:function(a,b,c,d){var z,y
H.C(b,d)
z=J.iY(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.l(z,y,b)
return H.q(z,"$isd",[d],"$asd")},
je:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.ga2(a);x.G();)C.a.h(y,H.C(x.gO(x),c))
if(b)return y
return H.q(J.bS(y),"$isd",z,"$asd")},
ct:function(a,b,c){var z,y
z=P.n
H.q(a,"$isi",[z],"$asi")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.q(a,"$isbo",[z],"$asbo")
y=a.length
c=P.b2(b,c,y,null,null,null)
if(b<=0){if(typeof c!=="number")return c.K()
z=c<y}else z=!0
return H.f9(z?C.a.c8(a,b,c):a)}if(!!J.L(a).$isdB)return H.jT(a,b,P.b2(b,c,a.length,null,null,null))
return P.kx(a,b,c)},
kx:function(a,b,c){var z,y,x,w
H.q(a,"$isi",[P.n],"$asi")
if(b<0)throw H.a(P.a7(b,0,J.aq(a),null,null))
z=c==null
if(!z&&c<b)throw H.a(P.a7(c,b,J.aq(a),null,null))
y=J.ba(a)
for(x=0;x<b;++x)if(!y.G())throw H.a(P.a7(b,0,x,null,null))
w=[]
if(z)for(;y.G();)w.push(y.gO(y))
else for(x=b;x<c;++x){if(!y.G())throw H.a(P.a7(c,b,x,null,null))
w.push(y.gO(y))}return H.f9(w)},
k0:function(a,b,c){return new H.j_(a,H.j0(a,!1,!0,!1))},
fM:function(){var z=H.jJ()
if(z!=null)return P.l4(z,0,null)
throw H.a(P.E("'Uri.base' is not supported"))},
cJ:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ae(a)
if(typeof a==="string")return JSON.stringify(a)
return P.iG(a)},
t:function(a){return new P.fZ(a)},
jf:function(a,b,c,d){var z,y
H.l(b,{func:1,ret:d,args:[P.n]})
z=H.c([],[d])
C.a.sn(z,a)
for(y=0;y<a;++y)C.a.l(z,y,b.$1(y))
return z},
ea:function(a){H.ok(a)},
l4:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.I(a,b+4)^58)*3|C.b.I(a,b)^100|C.b.I(a,b+1)^97|C.b.I(a,b+2)^116|C.b.I(a,b+3)^97)>>>0
if(y===0)return P.fL(b>0||c<c?C.b.w(a,b,c):a,5,null).gf2()
else if(y===32)return P.fL(C.b.w(a,z,c),0,null).gf2()}x=new Array(8)
x.fixed$length=Array
w=H.c(x,[P.n])
C.a.l(w,0,0)
x=b-1
C.a.l(w,1,x)
C.a.l(w,2,x)
C.a.l(w,7,x)
C.a.l(w,3,b)
C.a.l(w,4,b)
C.a.l(w,5,c)
C.a.l(w,6,c)
if(P.hr(a,b,c,0,w)>=14)C.a.l(w,7,c)
v=w[1]
if(typeof v!=="number")return v.jp()
if(v>=b)if(P.hr(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.E()
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
s=7}else if(s===r)if(b===0&&!0){a=C.b.bc(a,s,r,"/");++r;++q;++c}else{a=C.b.w(a,b,s)+"/"+C.b.w(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.ah(a,"http",b)){if(x&&t+3===s&&C.b.ah(a,"80",t+1))if(b===0&&!0){a=C.b.bc(a,t,s,"")
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
else if(v===z&&C.b.ah(a,"https",b)){if(x&&t+4===s&&C.b.ah(a,"443",t+1))if(b===0&&!0){a=C.b.bc(a,t,s,"")
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
q-=b}return new P.mr(a,v,u,t,s,r,q,o)}return P.mR(a,b,c,v,u,t,s,r,q,o)},
fO:function(a,b){var z=P.h
return C.a.iD(H.c(a.split("&"),[z]),P.dt(z,z),new P.l7(b),[P.N,P.h,P.h])},
l2:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.l3(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.a1(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.cA(C.b.w(a,v,w),null,null)
if(typeof s!=="number")return s.an()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.f(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.cA(C.b.w(a,v,c),null,null)
if(typeof s!=="number")return s.an()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.f(y,u)
y[u]=s
return y},
fN:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.l5(a)
y=new P.l6(z,a)
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
q=C.a.gaA(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.l2(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.f(o,l)
o[l]=0
i=l+1
if(i>=n)return H.f(o,i)
o[i]=0
l+=2}else{i=C.d.b0(k,8)
if(l<0||l>=n)return H.f(o,l)
o[l]=i
i=l+1
if(i>=n)return H.f(o,i)
o[i]=k&255
l+=2}}return o},
np:function(){var z,y,x,w,v
z=P.jf(22,new P.nr(),!0,P.V)
y=new P.nq(z)
x=new P.ns()
w=new P.nt()
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
hr:function(a,b,c,d,e){var z,y,x,w,v
H.q(e,"$isd",[P.n],"$asd")
z=$.$get$hs()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.f(z,d)
x=z[d]
w=C.b.I(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.f(x,w)
v=x[w]
d=v&31
C.a.l(e,v>>>5,y)}return d},
W:{"^":"b;"},
"+bool":0,
am:{"^":"b;a,b",
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.am))return!1
return this.a===b.a&&this.b===b.b},
b3:function(a,b){return C.d.b3(this.a,H.e(b,"$isam").a)},
gY:function(a){var z=this.a
return(z^C.d.b0(z,30))&1073741823},
j:function(a){var z,y,x,w,v,u,t
z=P.iv(H.jQ(this))
y=P.ch(H.jO(this))
x=P.ch(H.jK(this))
w=P.ch(H.jL(this))
v=P.ch(H.jN(this))
u=P.ch(H.jP(this))
t=P.iw(H.jM(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
$isas:1,
$asas:function(){return[P.am]},
u:{
iv:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
iw:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ch:function(a){if(a>=10)return""+a
return"0"+a}}},
v:{"^":"a5;"},
"+double":0,
aN:{"^":"b;a",
k:function(a,b){return new P.aN(C.d.am(this.a*b))},
K:function(a,b){return C.d.K(this.a,H.e(b,"$isaN").a)},
an:function(a,b){return C.d.an(this.a,H.e(b,"$isaN").a)},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.aN))return!1
return this.a===b.a},
gY:function(a){return this.a&0x1FFFFFFF},
b3:function(a,b){return C.d.b3(this.a,H.e(b,"$isaN").a)},
j:function(a){var z,y,x,w,v
z=new P.iA()
y=this.a
if(y<0)return"-"+new P.aN(0-y).j(0)
x=z.$1(C.d.a6(y,6e7)%60)
w=z.$1(C.d.a6(y,1e6)%60)
v=new P.iz().$1(y%1e6)
return""+C.d.a6(y,36e8)+":"+H.k(x)+":"+H.k(w)+"."+H.k(v)},
$isas:1,
$asas:function(){return[P.aN]},
u:{
eF:function(a,b,c,d,e,f){return new P.aN(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
iz:{"^":"m:27;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
iA:{"^":"m:27;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
ab:{"^":"b;"},
f4:{"^":"ab;",
j:function(a){return"Throw of null."}},
aL:{"^":"ab;a,b,c,d",
gcf:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gce:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.k(z)
w=this.gcf()+y+x
if(!this.a)return w
v=this.gce()
u=P.cJ(this.b)
return w+v+": "+H.k(u)},
u:{
cf:function(a){return new P.aL(!1,null,null,a)},
cD:function(a,b,c){return new P.aL(!0,a,b,c)},
ej:function(a){return new P.aL(!1,null,a,"Must not be null")}}},
cQ:{"^":"aL;e,f,a,b,c,d",
gcf:function(){return"RangeError"},
gce:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.k(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.k(z)
else if(x>z)y=": Not in range "+H.k(z)+".."+H.k(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.k(z)}return y},
u:{
cq:function(a,b,c){return new P.cQ(null,null,!0,a,b,"Value not in range")},
a7:function(a,b,c,d,e){return new P.cQ(b,c,!0,a,d,"Invalid value")},
b2:function(a,b,c,d,e,f){var z
if(typeof a!=="number")return H.o(a)
if(0<=a){if(typeof c!=="number")return H.o(c)
z=a>c}else z=!0
if(z)throw H.a(P.a7(a,0,c,"start",f))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
z=b>c}else z=!0
if(z)throw H.a(P.a7(b,a,c,"end",f))
return b}return c}}},
iU:{"^":"aL;e,n:f>,a,b,c,d",
gcf:function(){return"RangeError"},
gce:function(){if(J.hT(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.k(z)},
u:{
Y:function(a,b,c,d,e){var z=H.G(e!=null?e:J.aq(b))
return new P.iU(b,z,!0,a,c,"Index out of range")}}},
l0:{"^":"ab;a",
j:function(a){return"Unsupported operation: "+this.a},
u:{
E:function(a){return new P.l0(a)}}},
kY:{"^":"ab;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
u:{
cv:function(a){return new P.kY(a)}}},
dF:{"^":"ab;a",
j:function(a){return"Bad state: "+this.a},
u:{
fh:function(a){return new P.dF(a)}}},
il:{"^":"ab;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.k(P.cJ(z))+"."},
u:{
aZ:function(a){return new P.il(a)}}},
jE:{"^":"b;",
j:function(a){return"Out of Memory"},
$isab:1},
ff:{"^":"b;",
j:function(a){return"Stack Overflow"},
$isab:1},
it:{"^":"ab;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fZ:{"^":"b;a",
j:function(a){return"Exception: "+this.a}},
iN:{"^":"b;a,b,c",
j:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
a4:function(a,b,c){return new P.iN(a,b,c)}}},
ci:{"^":"b;"},
n:{"^":"a5;"},
"+int":0,
i:{"^":"b;$ti",
di:["ff",function(a,b){var z=H.al(this,"i",0)
return new H.dS(this,H.l(b,{func:1,ret:P.W,args:[z]}),[z])}],
gn:function(a){var z,y
z=this.ga2(this)
for(y=0;z.G();)++y
return y},
gaQ:function(a){var z,y
z=this.ga2(this)
if(!z.G())throw H.a(H.dm())
y=z.gO(z)
if(z.G())throw H.a(H.iX())
return y},
J:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.a(P.ej("index"))
if(b<0)H.r(P.a7(b,0,null,"index",null))
for(z=this.ga2(this),y=0;z.G();){x=z.gO(z)
if(b===y)return x;++y}throw H.a(P.Y(b,this,"index",null,y))},
j:function(a){return P.iW(this,"(",")")}},
dn:{"^":"b;$ti"},
d:{"^":"b;$ti",$isi:1},
"+List":0,
N:{"^":"b;$ti"},
P:{"^":"b;",
gY:function(a){return P.b.prototype.gY.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
a5:{"^":"b;",$isas:1,
$asas:function(){return[P.a5]}},
"+num":0,
b:{"^":";",
A:function(a,b){return this===b},
gY:function(a){return H.bX(this)},
j:function(a){return"Instance of '"+H.bt(this)+"'"},
toString:function(){return this.j(this)}},
aG:{"^":"b;"},
h:{"^":"b;",$isas:1,
$asas:function(){return[P.h]},
$isf5:1},
"+String":0,
at:{"^":"b;aW:a<",
gn:function(a){return this.a.length},
j:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$ispv:1,
u:{
fj:function(a,b,c){var z=J.ba(b)
if(!z.G())return a
if(c.length===0){do a+=H.k(z.gO(z))
while(z.G())}else{a+=H.k(z.gO(z))
for(;z.G();)a=a+c+H.k(z.gO(z))}return a}}},
l7:{"^":"m:46;a",
$2:function(a,b){var z,y,x,w
z=P.h
H.q(a,"$isN",[z,z],"$asN")
H.I(b)
y=J.aB(b).eK(b,"=")
if(y===-1){if(b!=="")J.d8(a,P.dX(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.w(b,0,y)
w=C.b.av(b,y+1)
z=this.a
J.d8(a,P.dX(x,0,x.length,z,!0),P.dX(w,0,w.length,z,!0))}return a}},
l3:{"^":"m:45;a",
$2:function(a,b){throw H.a(P.a4("Illegal IPv4 address, "+a,this.a,b))}},
l5:{"^":"m:44;a",
$2:function(a,b){throw H.a(P.a4("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
l6:{"^":"m:43;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.cA(C.b.w(this.b,a,b),null,16)
if(typeof z!=="number")return z.K()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cZ:{"^":"b;c7:a<,b,c,d,eW:e>,f,r,0x,0y,0z,0Q,0ch",
gf3:function(){return this.b},
gcW:function(a){var z=this.c
if(z==null)return""
if(C.b.a8(z,"["))return C.b.w(z,1,z.length-1)
return z},
gc_:function(a){var z=this.d
if(z==null)return P.hg(this.a)
return z},
gd8:function(a){var z=this.f
return z==null?"":z},
geF:function(){var z=this.r
return z==null?"":z},
dc:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.q(h,"$isN",[P.h,null],"$asN")
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
if(x&&!C.b.a8(d,"/"))d="/"+d
g=P.dW(g,0,0,h)
return new P.cZ(i,j,c,f,d,g,this.r)},
eY:function(a,b){return this.dc(a,null,null,null,null,null,null,b,null,null)},
gd9:function(){var z,y
z=this.Q
if(z==null){z=this.f
y=P.h
y=new P.fK(P.fO(z==null?"":z,C.k),[y,y])
this.Q=y
z=y}return z},
geG:function(){return this.c!=null},
geJ:function(){return this.f!=null},
geH:function(){return this.r!=null},
j:function(a){var z,y,x,w
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
if(!!z.$isdO){y=this.a
x=b.gc7()
if(y==null?x==null:y===x)if(this.c!=null===b.geG()){y=this.b
x=b.gf3()
if(y==null?x==null:y===x){y=this.gcW(this)
x=z.gcW(b)
if(y==null?x==null:y===x){y=this.gc_(this)
x=z.gc_(b)
if(y==null?x==null:y===x)if(this.e===z.geW(b)){y=this.f
x=y==null
if(!x===b.geJ()){if(x)y=""
if(y===z.gd8(b)){z=this.r
y=z==null
if(!y===b.geH()){if(y)z=""
z=z===b.geF()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
return z}return!1},
gY:function(a){var z=this.z
if(z==null){z=C.b.gY(this.j(0))
this.z=z}return z},
$isdO:1,
u:{
cy:function(a,b,c,d){var z,y,x,w,v,u
H.q(a,"$isd",[P.n],"$asd")
if(c===C.k){z=$.$get$hl().b
if(typeof b!=="string")H.r(H.aa(b))
z=z.test(b)}else z=!1
if(z)return b
H.C(b,H.al(c,"cg",0))
y=c.giw().cL(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.f(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.bY(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
mR:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.n1(a,b,d)
else{if(d===b)P.c4(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.n2(a,z,e-1):""
x=P.mW(a,e,f,!1)
if(typeof f!=="number")return f.E()
w=f+1
if(typeof g!=="number")return H.o(g)
v=w<g?P.mZ(P.cA(C.b.w(a,w,g),new P.mS(a,f),null),j):null}else{y=""
x=null
v=null}u=P.mX(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.K()
t=h<i?P.dW(a,h+1,i,null):null
return new P.cZ(j,y,x,v,u,t,i<c?P.mV(a,i+1,c):null)},
hg:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
c4:function(a,b,c){throw H.a(P.a4(c,a,b))},
mZ:function(a,b){if(a!=null&&a===P.hg(b))return
return a},
mW:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.a1(a,b)===91){if(typeof c!=="number")return c.L()
z=c-1
if(C.b.a1(a,z)!==93)P.c4(a,b,"Missing end `]` to match `[` in host")
P.fN(a,b+1,z)
return C.b.w(a,b,c).toLowerCase()}if(typeof c!=="number")return H.o(c)
y=b
for(;y<c;++y)if(C.b.a1(a,y)===58){P.fN(a,b,c)
return"["+a+"]"}return P.n4(a,b,c)},
n4:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.o(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.a1(a,z)
if(v===37){u=P.hn(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.at("")
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
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.at("")
if(y<z){x.a+=C.b.w(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.f(C.m,t)
t=(C.m[t]&1<<(v&15))!==0}else t=!1
if(t)P.c4(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.a1(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.at("")
s=C.b.w(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.hh(v)
z+=q
y=z}}}}if(x==null)return C.b.w(a,b,c)
if(y<c){s=C.b.w(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
n1:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.hj(C.b.I(a,b)))P.c4(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.I(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.f(C.o,w)
w=(C.o[w]&1<<(x&15))!==0}else w=!1
if(!w)P.c4(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.w(a,b,c)
return P.mT(y?a.toLowerCase():a)},
mT:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
n2:function(a,b,c){return P.c5(a,b,c,C.a_)},
mX:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.c5(a,b,c,C.D):C.w.k8(d,new P.mY(),P.h).p(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a8(w,"/"))w="/"+w
return P.n3(w,e,f)},
n3:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a8(a,"/"))return P.n5(a,!z||c)
return P.n6(a)},
dW:function(a,b,c,d){var z,y
z={}
H.q(d,"$isN",[P.h,null],"$asN")
if(a!=null){if(d!=null)throw H.a(P.cf("Both query and queryParameters specified"))
return P.c5(a,b,c,C.n)}if(d==null)return
y=new P.at("")
z.a=""
d.M(0,new P.n_(new P.n0(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
mV:function(a,b,c){return P.c5(a,b,c,C.n)},
hn:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.a1(a,b+1)
x=C.b.a1(a,z)
w=H.d4(y)
v=H.d4(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.d.b0(u,4)
if(z>=8)return H.f(C.p,z)
z=(C.p[z]&1<<(u&15))!==0}else z=!1
if(z)return H.bY(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.w(a,b,b+3).toUpperCase()
return},
hh:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.c(z,[P.n])
C.a.l(y,0,37)
C.a.l(y,1,C.b.I("0123456789ABCDEF",a>>>4))
C.a.l(y,2,C.b.I("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.c(z,[P.n])
for(v=0;--w,w>=0;x=128){u=C.d.hJ(a,6*w)&63|x
C.a.l(y,v,37)
C.a.l(y,v+1,C.b.I("0123456789ABCDEF",u>>>4))
C.a.l(y,v+2,C.b.I("0123456789ABCDEF",u&15))
v+=3}}return P.ct(y,0,null)},
c5:function(a,b,c,d){var z=P.hm(a,b,c,H.q(d,"$isd",[P.n],"$asd"),!1)
return z==null?C.b.w(a,b,c):z},
hm:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.q(d,"$isd",[P.n],"$asd")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.K()
if(typeof c!=="number")return H.o(c)
if(!(y<c))break
c$0:{v=C.b.a1(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.f(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.hn(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.f(C.m,u)
u=(C.m[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.c4(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.a1(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.hh(v)}}if(w==null)w=new P.at("")
w.a+=C.b.w(a,x,y)
w.a+=H.k(t)
if(typeof s!=="number")return H.o(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.K()
if(x<c)w.a+=C.b.w(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
hk:function(a){if(C.b.a8(a,"."))return!0
return C.b.eK(a,"/.")!==-1},
n6:function(a){var z,y,x,w,v,u,t
if(!P.hk(a))return a
z=H.c([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.J(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.f(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.p(z,"/")},
n5:function(a,b){var z,y,x,w,v,u
if(!P.hk(a))return!b?P.hi(a):a
z=H.c([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaA(z)!==".."){if(0>=z.length)return H.f(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.f(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaA(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.f(z,0)
C.a.l(z,0,P.hi(z[0]))}return C.a.p(z,"/")},
hi:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.hj(J.hU(a,0)))for(y=1;y<z;++y){x=C.b.I(a,y)
if(x===58)return C.b.w(a,0,y)+"%3A"+C.b.av(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.f(C.o,w)
w=(C.o[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
mU:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.I(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.a(P.cf("Invalid URL encoding"))}}return z},
dX:function(a,b,c,d,e){var z,y,x,w,v,u
y=J.cc(a)
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
if(w>127)throw H.a(P.cf("Illegal percent encoding in URI"))
if(w===37){if(x+3>a.length)throw H.a(P.cf("Truncated URI"))
C.a.h(u,P.mU(a,x+1))
x+=2}else if(w===43)C.a.h(u,32)
else C.a.h(u,w)}}H.q(u,"$isd",[P.n],"$asd")
return new P.ld(!1).cL(u)},
hj:function(a){var z=a|32
return 97<=z&&z<=122}}},
mS:{"^":"m:42;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.E()
throw H.a(P.a4("Invalid port",this.a,z+1))}},
mY:{"^":"m:16;",
$1:function(a){return P.cy(C.a0,a,C.k,!1)}},
n0:{"^":"m:20;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.k(P.cy(C.p,a,C.k,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.k(P.cy(C.p,b,C.k,!0))}}},
n_:{"^":"m:40;a",
$2:function(a,b){var z,y
H.I(a)
if(b==null||typeof b==="string")this.a.$2(a,H.I(b))
else for(z=J.ba(H.hK(b,"$isi")),y=this.a;z.G();)y.$2(a,H.I(z.gO(z)))}},
l1:{"^":"b;a,b,c",
gf2:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
z=z[0]+1
x=C.b.eL(y,"?",z)
w=y.length
if(x>=0){v=P.c5(y,x+1,w,C.n)
w=x}else v=null
z=new P.lF(this,"data",null,null,null,P.c5(y,z,w,C.D),v,null)
this.c=z
return z},
j:function(a){var z,y
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
u:{
fL:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.c([b-1],[P.n])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.I(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.a(P.a4("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.a(P.a4("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.I(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaA(z)
if(v!==44||x!==t+7||!C.b.ah(a,"base64",t+1))throw H.a(P.a4("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.I.iS(0,a,s,y)
else{r=P.hm(a,s,y,C.n,!0)
if(r!=null)a=C.b.bc(a,s,y,r)}return new P.l1(a,z,c)}}},
nr:{"^":"m:38;",
$1:function(a){return new Uint8Array(96)}},
nq:{"^":"m:37;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.f(z,a)
z=z[a]
J.hZ(z,0,96,b)
return z}},
ns:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.I(b,y)^96
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
nt:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=C.b.I(b,0),y=C.b.I(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
mr:{"^":"b;a,b,c,d,e,f,r,x,0y",
geG:function(){return this.c>0},
geI:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.E()
y=this.e
if(typeof y!=="number")return H.o(y)
y=z+1<y
z=y}else z=!1
return z},
geJ:function(){var z=this.f
if(typeof z!=="number")return z.K()
return z<this.r},
geH:function(){return this.r<this.a.length},
gdP:function(){return this.b===4&&C.b.a8(this.a,"http")},
gdQ:function(){return this.b===5&&C.b.a8(this.a,"https")},
gc7:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdP()){this.x="http"
z="http"}else if(this.gdQ()){this.x="https"
z="https"}else if(z===4&&C.b.a8(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a8(this.a,"package")){this.x="package"
z="package"}else{z=C.b.w(this.a,0,z)
this.x=z}return z},
gf3:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.w(this.a,y,z-1):""},
gcW:function(a){var z=this.c
return z>0?C.b.w(this.a,z,this.d):""},
gc_:function(a){var z
if(this.geI()){z=this.d
if(typeof z!=="number")return z.E()
return P.cA(C.b.w(this.a,z+1,this.e),null,null)}if(this.gdP())return 80
if(this.gdQ())return 443
return 0},
geW:function(a){return C.b.w(this.a,this.e,this.f)},
gd8:function(a){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.K()
return z<y?C.b.w(this.a,z+1,y):""},
geF:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.av(y,z+1):""},
gd9:function(){var z=this.f
if(typeof z!=="number")return z.K()
if(z>=this.r)return C.a1
z=P.h
return new P.fK(P.fO(this.gd8(this),C.k),[z,z])},
dc:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.q(h,"$isN",[P.h,null],"$asN")
i=this.gc7()
z=i==="file"
y=this.c
j=y>0?C.b.w(this.a,this.b+3,y):""
f=this.geI()?this.gc_(this):null
y=this.c
if(y>0)c=C.b.w(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.w(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a8(d,"/"))d="/"+d
g=P.dW(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.av(y,x+1)
return new P.cZ(i,j,c,f,d,g,b)},
eY:function(a,b){return this.dc(a,null,null,null,null,null,null,b,null,null)},
gY:function(a){var z=this.y
if(z==null){z=C.b.gY(this.a)
this.y=z}return z},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
z=J.L(b)
if(!!z.$isdO)return this.a===z.j(b)
return!1},
j:function(a){return this.a},
$isdO:1},
lF:{"^":"cZ;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
ei:function(a){var z=document.createElement("a")
return z},
dg:function(a,b){var z=document.createElement("canvas")
return z},
iB:function(a,b,c){var z,y
z=document.body
y=(z&&C.v).ar(z,a,b,c)
y.toString
z=W.H
z=new H.dS(new W.aA(y),H.l(new W.iC(),{func:1,ret:P.W,args:[z]}),[z])
return H.e(z.gaQ(z),"$isX")},
iD:function(a){H.e(a,"$isai")
return"wheel"},
bQ:function(a){var z,y,x
z="element tag unavailable"
try{y=J.i1(a)
if(typeof y==="string")z=a.tagName}catch(x){H.ad(x)}return z},
iV:function(a){var z,y,x
y=document.createElement("input")
z=H.e(y,"$iseO")
try{J.i3(z,a)}catch(x){H.ad(x)}return z},
cW:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
h2:function(a,b,c,d){var z,y
z=W.cW(W.cW(W.cW(W.cW(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
hv:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.a_
if(z===C.j)return a
return z.ea(a,b)},
a1:{"^":"X;","%":"HTMLAudioElement|HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
ow:{"^":"u;0n:length=","%":"AccessibleNodeList"},
ox:{"^":"a1;0a7:type}",
j:function(a){return String(a)},
"%":"HTMLAnchorElement"},
oy:{"^":"a1;",
j:function(a){return String(a)},
"%":"HTMLAreaElement"},
en:{"^":"a1;",$isen:1,"%":"HTMLBaseElement"},
db:{"^":"u;",$isdb:1,"%":";Blob"},
cE:{"^":"a1;",$iscE:1,"%":"HTMLBodyElement"},
oE:{"^":"a1;0a7:type}","%":"HTMLButtonElement"},
df:{"^":"a1;",
c6:function(a,b,c){if(c!=null)return a.getContext(b,P.nG(c,null))
return a.getContext(b)},
f7:function(a,b){return this.c6(a,b,null)},
$isdf:1,
"%":"HTMLCanvasElement"},
es:{"^":"u;",$ises:1,"%":"CanvasRenderingContext2D"},
oG:{"^":"H;0n:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
oI:{"^":"is;0n:length=","%":"CSSPerspective"},
bj:{"^":"u;",$isbj:1,"%":"CSSCharsetRule|CSSConditionRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
oJ:{"^":"lE;0n:length=",
f8:function(a,b){var z=a.getPropertyValue(this.fE(a,b))
return z==null?"":z},
fE:function(a,b){var z,y
z=$.$get$ex()
y=z[b]
if(typeof y==="string")return y
y=this.hK(a,b)
z[b]=y
return y},
hK:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.ix()+b
if(z in a)return z
return b},
gcG:function(a){return a.bottom},
gaz:function(a){return a.height},
gb7:function(a){return a.left},
gbo:function(a){return a.right},
gbt:function(a){return a.top},
gaC:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
ir:{"^":"b;",
gb7:function(a){return this.f8(a,"left")}},
ey:{"^":"u;","%":"CSSImageValue|CSSKeywordValue|CSSNumericValue|CSSPositionValue|CSSResourceValue|CSSURLImageValue|CSSUnitValue;CSSStyleValue"},
is:{"^":"u;","%":"CSSMatrixComponent|CSSRotation|CSSScale|CSSSkew|CSSTranslation;CSSTransformComponent"},
oK:{"^":"ey;0n:length=","%":"CSSTransformValue"},
oL:{"^":"ey;0n:length=","%":"CSSUnparsedValue"},
oM:{"^":"u;0n:length=","%":"DataTransferItemList"},
bk:{"^":"a1;",$isbk:1,"%":"HTMLDivElement"},
oN:{"^":"u;",
j:function(a){return String(a)},
"%":"DOMException"},
oO:{"^":"lH;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.G(b)
H.q(c,"$isaf",[P.a5],"$asaf")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[[P.af,P.a5]]},
$asA:function(){return[[P.af,P.a5]]},
$isi:1,
$asi:function(){return[[P.af,P.a5]]},
$isd:1,
$asd:function(){return[[P.af,P.a5]]},
$asF:function(){return[[P.af,P.a5]]},
"%":"ClientRectList|DOMRectList"},
iy:{"^":"u;",
j:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gaC(a))+" x "+H.k(this.gaz(a))},
A:function(a,b){var z
if(b==null)return!1
z=H.ca(b,"$isaf",[P.a5],"$asaf")
if(!z)return!1
z=J.aJ(b)
return a.left===z.gb7(b)&&a.top===z.gbt(b)&&this.gaC(a)===z.gaC(b)&&this.gaz(a)===z.gaz(b)},
gY:function(a){return W.h2(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,this.gaC(a)&0x1FFFFFFF,this.gaz(a)&0x1FFFFFFF)},
gcG:function(a){return a.bottom},
gaz:function(a){return a.height},
gb7:function(a){return a.left},
gbo:function(a){return a.right},
gbt:function(a){return a.top},
gaC:function(a){return a.width},
$isaf:1,
$asaf:function(){return[P.a5]},
"%":";DOMRectReadOnly"},
oP:{"^":"lJ;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.G(b)
H.I(c)
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[P.h]},
$asA:function(){return[P.h]},
$isi:1,
$asi:function(){return[P.h]},
$isd:1,
$asd:function(){return[P.h]},
$asF:function(){return[P.h]},
"%":"DOMStringList"},
oQ:{"^":"u;0n:length=","%":"DOMTokenList"},
lD:{"^":"cM;dM:a<,b",
gn:function(a){return this.b.length},
i:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return H.e(z[b],"$isX")},
l:function(a,b,c){var z
H.G(b)
H.e(c,"$isX")
z=this.b
if(b>>>0!==b||b>=z.length)return H.f(z,b)
this.a.replaceChild(c,z[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga2:function(a){var z=this.df(this)
return new J.aD(z,z.length,0,[H.y(z,0)])},
aL:function(a,b,c,d){throw H.a(P.cv(null))},
$asA:function(){return[W.X]},
$asi:function(){return[W.X]},
$asd:function(){return[W.X]}},
X:{"^":"H;0ji:tagName=",
gii:function(a){return new W.lK(a)},
gcK:function(a){return new W.lD(a,a.children)},
ged:function(a){return P.jX(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,P.a5)},
j:function(a){return a.localName},
ar:["c9",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.eI
if(z==null){z=H.c([],[W.aS])
y=new W.f2(z)
C.a.h(z,W.h0(null))
C.a.h(z,W.hb())
$.eI=y
d=y}else d=z
z=$.eH
if(z==null){z=new W.ho(d)
$.eH=z
c=z}else{z.a=d
c=z}}if($.b_==null){z=document
y=z.implementation.createHTMLDocument("")
$.b_=y
$.dj=y.createRange()
y=$.b_
y.toString
y=y.createElement("base")
H.e(y,"$isen")
y.href=z.baseURI
$.b_.head.appendChild(y)}z=$.b_
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.e(y,"$iscE")}z=$.b_
if(!!this.$iscE)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
$.b_.body.appendChild(x)}if("createContextualFragment" in window.Range.prototype&&!C.a.X(C.Z,a.tagName)){$.dj.selectNodeContents(x)
w=$.dj.createContextualFragment(b)}else{x.innerHTML=b
w=$.b_.createDocumentFragment()
for(;z=x.firstChild,z!=null;)w.appendChild(z)}z=$.b_.body
if(x==null?z!=null:x!==z)J.eh(x)
c.dn(w)
document.adoptNode(w)
return w},function(a,b,c){return this.ar(a,b,c,null)},"iq",null,null,"gk6",5,5,null],
fc:function(a,b,c,d){a.textContent=null
a.appendChild(this.ar(a,b,c,d))},
fb:function(a,b){return this.fc(a,b,null,null)},
$isX:1,
"%":";Element"},
iC:{"^":"m:24;",
$1:function(a){return!!J.L(H.e(a,"$isH")).$isX}},
oR:{"^":"a1;0a7:type}","%":"HTMLEmbedElement"},
ah:{"^":"u;",$isah:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
ai:{"^":"u;",
e3:["fd",function(a,b,c,d){H.l(c,{func:1,args:[W.ah]})
if(c!=null)this.fB(a,b,c,!1)}],
fB:function(a,b,c,d){return a.addEventListener(b,H.bK(H.l(c,{func:1,args:[W.ah]}),1),!1)},
$isai:1,
"%":"AbsoluteOrientationSensor|Accelerometer|AccessibleNode|AmbientLightSensor|Animation|ApplicationCache|BackgroundFetchRegistration|BatteryManager|BluetoothDevice|BluetoothRemoteGATTCharacteristic|BroadcastChannel|CanvasCaptureMediaStreamTrack|Clipboard|DOMApplicationCache|DataChannel|DedicatedWorkerGlobalScope|EventSource|FileReader|FontFaceSet|Gyroscope|IDBDatabase|IDBOpenDBRequest|IDBRequest|IDBTransaction|IDBVersionChangeRequest|LinearAccelerationSensor|MIDIAccess|MIDIInput|MIDIOutput|MIDIPort|Magnetometer|MediaDevices|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStream|MediaStreamTrack|MojoInterfaceInterceptor|NetworkInformation|Notification|OfflineResourceList|OffscreenCanvas|OrientationSensor|PaymentRequest|Performance|PermissionStatus|PresentationAvailability|PresentationConnection|PresentationConnectionList|PresentationRequest|RTCDTMFSender|RTCDataChannel|RTCPeerConnection|RelativeOrientationSensor|RemotePlayback|ScreenOrientation|Sensor|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|SharedWorker|SharedWorkerGlobalScope|SpeechRecognition|SpeechSynthesis|SpeechSynthesisUtterance|USB|VR|VRDevice|VRDisplay|VRSession|VisualViewport|WebSocket|Worker|WorkerGlobalScope|WorkerPerformance|XMLHttpRequest|XMLHttpRequestEventTarget|XMLHttpRequestUpload|mozRTCPeerConnection|webkitRTCPeerConnection;EventTarget;h8|h9|hc|hd"},
bd:{"^":"db;",$isbd:1,"%":"File"},
eK:{"^":"lP;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.G(b)
H.e(c,"$isbd")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.bd]},
$asA:function(){return[W.bd]},
$isi:1,
$asi:function(){return[W.bd]},
$isd:1,
$asd:function(){return[W.bd]},
$iseK:1,
$asF:function(){return[W.bd]},
"%":"FileList"},
oS:{"^":"ai;0n:length=","%":"FileWriter"},
oT:{"^":"a1;0n:length=","%":"HTMLFormElement"},
bn:{"^":"u;",$isbn:1,"%":"Gamepad"},
oU:{"^":"u;0n:length=","%":"History"},
oV:{"^":"m1;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.G(b)
H.e(c,"$isH")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.H]},
$asA:function(){return[W.H]},
$isi:1,
$asi:function(){return[W.H]},
$isd:1,
$asd:function(){return[W.H]},
$asF:function(){return[W.H]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
cj:{"^":"u;0ee:data=",$iscj:1,"%":"ImageData"},
eN:{"^":"a1;",$iseN:1,"%":"HTMLImageElement"},
eO:{"^":"a1;0a7:type}",$iseO:1,"%":"HTMLInputElement"},
bT:{"^":"dL;",$isbT:1,"%":"KeyboardEvent"},
p_:{"^":"a1;0a7:type}","%":"HTMLLinkElement"},
p0:{"^":"u;",
j:function(a){return String(a)},
"%":"Location"},
p1:{"^":"u;0n:length=","%":"MediaList"},
p2:{"^":"ai;",
e3:function(a,b,c,d){H.l(c,{func:1,args:[W.ah]})
if(b==="message")a.start()
this.fd(a,b,c,!1)},
"%":"MessagePort"},
p3:{"^":"m7;",
i:function(a,b){return P.b9(a.get(H.I(b)))},
M:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b9(y.value[1]))}},
gaa:function(a){var z=H.c([],[P.h])
this.M(a,new W.ju(z))
return z},
gn:function(a){return a.size},
l:function(a,b,c){throw H.a(P.E("Not supported"))},
$asan:function(){return[P.h,null]},
$isN:1,
$asN:function(){return[P.h,null]},
"%":"MIDIInputMap"},
ju:{"^":"m:9;a",
$2:function(a,b){return C.a.h(this.a,a)}},
p4:{"^":"m8;",
i:function(a,b){return P.b9(a.get(H.I(b)))},
M:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b9(y.value[1]))}},
gaa:function(a){var z=H.c([],[P.h])
this.M(a,new W.jv(z))
return z},
gn:function(a){return a.size},
l:function(a,b,c){throw H.a(P.E("Not supported"))},
$asan:function(){return[P.h,null]},
$isN:1,
$asN:function(){return[P.h,null]},
"%":"MIDIOutputMap"},
jv:{"^":"m:9;a",
$2:function(a,b){return C.a.h(this.a,a)}},
br:{"^":"u;",$isbr:1,"%":"MimeType"},
p5:{"^":"ma;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.G(b)
H.e(c,"$isbr")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.br]},
$asA:function(){return[W.br]},
$isi:1,
$asi:function(){return[W.br]},
$isd:1,
$asd:function(){return[W.br]},
$asF:function(){return[W.br]},
"%":"MimeTypeArray"},
aE:{"^":"dL;",$isaE:1,"%":"PointerEvent;DragEvent|MouseEvent"},
aA:{"^":"cM;a",
gaQ:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.a(P.fh("No elements"))
if(y>1)throw H.a(P.fh("More than one element"))
return z.firstChild},
ac:function(a,b){var z,y,x,w
H.q(b,"$isi",[W.H],"$asi")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
l:function(a,b,c){var z,y
H.G(b)
H.e(c,"$isH")
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.f(y,b)
z.replaceChild(c,y[b])},
ga2:function(a){var z=this.a.childNodes
return new W.eL(z,z.length,-1,[H.bg(C.a3,z,"F",0)])},
aL:function(a,b,c,d){throw H.a(P.E("Cannot fillRange on Node list"))},
gn:function(a){return this.a.childNodes.length},
i:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return z[b]},
$asA:function(){return[W.H]},
$asi:function(){return[W.H]},
$asd:function(){return[W.H]}},
H:{"^":"ai;0d6:previousSibling=",
j7:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
jb:function(a,b){var z,y
try{z=a.parentNode
J.hV(z,b,a)}catch(y){H.ad(y)}return a},
j:function(a){var z=a.nodeValue
return z==null?this.fe(a):z},
hs:function(a,b,c){return a.replaceChild(b,c)},
$isH:1,
"%":"Document|DocumentFragment|DocumentType|HTMLDocument|ShadowRoot|XMLDocument;Node"},
pc:{"^":"u;",
j4:[function(a){return a.previousNode()},"$0","gd6",1,0,26],
"%":"NodeIterator"},
jz:{"^":"mc;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.G(b)
H.e(c,"$isH")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.H]},
$asA:function(){return[W.H]},
$isi:1,
$asi:function(){return[W.H]},
$isd:1,
$asd:function(){return[W.H]},
$asF:function(){return[W.H]},
"%":"NodeList|RadioNodeList"},
pf:{"^":"a1;0a7:type}","%":"HTMLOListElement"},
pg:{"^":"a1;0a7:type}","%":"HTMLObjectElement"},
bs:{"^":"u;0n:length=",$isbs:1,"%":"Plugin"},
pj:{"^":"mg;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.G(b)
H.e(c,"$isbs")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.bs]},
$asA:function(){return[W.bs]},
$isi:1,
$asi:function(){return[W.bs]},
$isd:1,
$asd:function(){return[W.bs]},
$asF:function(){return[W.bs]},
"%":"PluginArray"},
pl:{"^":"u;0a7:type}","%":"RTCSessionDescription|mozRTCSessionDescription"},
pm:{"^":"mm;",
i:function(a,b){return P.b9(a.get(H.I(b)))},
M:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b9(y.value[1]))}},
gaa:function(a){var z=H.c([],[P.h])
this.M(a,new W.k6(z))
return z},
gn:function(a){return a.size},
l:function(a,b,c){throw H.a(P.E("Not supported"))},
$asan:function(){return[P.h,null]},
$isN:1,
$asN:function(){return[P.h,null]},
"%":"RTCStatsReport"},
k6:{"^":"m:9;a",
$2:function(a,b){return C.a.h(this.a,a)}},
pn:{"^":"a1;0a7:type}","%":"HTMLScriptElement"},
po:{"^":"a1;0n:length=","%":"HTMLSelectElement"},
bu:{"^":"ai;",$isbu:1,"%":"SourceBuffer"},
pp:{"^":"h9;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.G(b)
H.e(c,"$isbu")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.bu]},
$asA:function(){return[W.bu]},
$isi:1,
$asi:function(){return[W.bu]},
$isd:1,
$asd:function(){return[W.bu]},
$asF:function(){return[W.bu]},
"%":"SourceBufferList"},
pq:{"^":"a1;0a7:type}","%":"HTMLSourceElement"},
bv:{"^":"u;",$isbv:1,"%":"SpeechGrammar"},
pr:{"^":"mt;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.G(b)
H.e(c,"$isbv")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.bv]},
$asA:function(){return[W.bv]},
$isi:1,
$asi:function(){return[W.bv]},
$isd:1,
$asd:function(){return[W.bv]},
$asF:function(){return[W.bv]},
"%":"SpeechGrammarList"},
bw:{"^":"u;0n:length=",$isbw:1,"%":"SpeechRecognitionResult"},
pt:{"^":"mw;",
i:function(a,b){return a.getItem(H.I(b))},
l:function(a,b,c){a.setItem(b,H.I(c))},
M:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gaa:function(a){var z=H.c([],[P.h])
this.M(a,new W.kt(z))
return z},
gn:function(a){return a.length},
$asan:function(){return[P.h,P.h]},
$isN:1,
$asN:function(){return[P.h,P.h]},
"%":"Storage"},
kt:{"^":"m:20;a",
$2:function(a,b){return C.a.h(this.a,a)}},
pw:{"^":"a1;0a7:type}","%":"HTMLStyleElement"},
bx:{"^":"u;",$isbx:1,"%":"CSSStyleSheet|StyleSheet"},
dH:{"^":"a1;",$isdH:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
ky:{"^":"a1;",
ar:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.c9(a,b,c,d)
z=W.iB("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.aA(y).ac(0,new W.aA(z))
return y},
"%":"HTMLTableElement"},
py:{"^":"a1;",
ar:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.c9(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.F.ar(z.createElement("table"),b,c,d)
z.toString
z=new W.aA(z)
x=z.gaQ(z)
x.toString
z=new W.aA(x)
w=z.gaQ(z)
y.toString
w.toString
new W.aA(y).ac(0,new W.aA(w))
return y},
"%":"HTMLTableRowElement"},
pz:{"^":"a1;",
ar:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.c9(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.F.ar(z.createElement("table"),b,c,d)
z.toString
z=new W.aA(z)
x=z.gaQ(z)
y.toString
x.toString
new W.aA(y).ac(0,new W.aA(x))
return y},
"%":"HTMLTableSectionElement"},
fl:{"^":"a1;",$isfl:1,"%":"HTMLTemplateElement"},
by:{"^":"ai;",$isby:1,"%":"TextTrack"},
bz:{"^":"ai;",$isbz:1,"%":"TextTrackCue|VTTCue"},
pB:{"^":"mG;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.G(b)
H.e(c,"$isbz")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.bz]},
$asA:function(){return[W.bz]},
$isi:1,
$asi:function(){return[W.bz]},
$isd:1,
$asd:function(){return[W.bz]},
$asF:function(){return[W.bz]},
"%":"TextTrackCueList"},
pC:{"^":"hd;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.G(b)
H.e(c,"$isby")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.by]},
$asA:function(){return[W.by]},
$isi:1,
$asi:function(){return[W.by]},
$isd:1,
$asd:function(){return[W.by]},
$asF:function(){return[W.by]},
"%":"TextTrackList"},
pD:{"^":"u;0n:length=","%":"TimeRanges"},
bB:{"^":"u;",$isbB:1,"%":"Touch"},
bC:{"^":"dL;",$isbC:1,"%":"TouchEvent"},
pE:{"^":"mM;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.G(b)
H.e(c,"$isbB")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.bB]},
$asA:function(){return[W.bB]},
$isi:1,
$asi:function(){return[W.bB]},
$isd:1,
$asd:function(){return[W.bB]},
$asF:function(){return[W.bB]},
"%":"TouchList"},
pF:{"^":"u;0n:length=","%":"TrackDefaultList"},
pH:{"^":"u;",
j4:[function(a){return a.previousNode()},"$0","gd6",1,0,26],
"%":"TreeWalker"},
dL:{"^":"ah;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
pJ:{"^":"u;",
j:function(a){return String(a)},
"%":"URL"},
pK:{"^":"ai;0n:length=","%":"VideoTrackList"},
c2:{"^":"aE;",
git:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.a(P.E("deltaY is not supported"))},
gis:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.a(P.E("deltaX is not supported"))},
$isc2:1,
"%":"WheelEvent"},
lv:{"^":"ai;",
hu:function(a,b){return a.requestAnimationFrame(H.bK(H.l(b,{func:1,ret:-1,args:[P.a5]}),1))},
fN:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fX:{"^":"H;",$isfX:1,"%":"Attr"},
pP:{"^":"ne;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.G(b)
H.e(c,"$isbj")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.bj]},
$asA:function(){return[W.bj]},
$isi:1,
$asi:function(){return[W.bj]},
$isd:1,
$asd:function(){return[W.bj]},
$asF:function(){return[W.bj]},
"%":"CSSRuleList"},
pQ:{"^":"iy;",
j:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
A:function(a,b){var z
if(b==null)return!1
z=H.ca(b,"$isaf",[P.a5],"$asaf")
if(!z)return!1
z=J.aJ(b)
return a.left===z.gb7(b)&&a.top===z.gbt(b)&&a.width===z.gaC(b)&&a.height===z.gaz(b)},
gY:function(a){return W.h2(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gaz:function(a){return a.height},
gaC:function(a){return a.width},
"%":"ClientRect|DOMRect"},
pS:{"^":"ng;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.G(b)
H.e(c,"$isbn")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.bn]},
$asA:function(){return[W.bn]},
$isi:1,
$asi:function(){return[W.bn]},
$isd:1,
$asd:function(){return[W.bn]},
$asF:function(){return[W.bn]},
"%":"GamepadList"},
pV:{"^":"ni;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.G(b)
H.e(c,"$isH")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.H]},
$asA:function(){return[W.H]},
$isi:1,
$asi:function(){return[W.H]},
$isd:1,
$asd:function(){return[W.H]},
$asF:function(){return[W.H]},
"%":"MozNamedAttrMap|NamedNodeMap"},
pW:{"^":"nk;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.G(b)
H.e(c,"$isbw")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.bw]},
$asA:function(){return[W.bw]},
$isi:1,
$asi:function(){return[W.bw]},
$isd:1,
$asd:function(){return[W.bw]},
$asF:function(){return[W.bw]},
"%":"SpeechRecognitionResultList"},
pX:{"^":"nm;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.G(b)
H.e(c,"$isbx")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){if(b>>>0!==b||b>=a.length)return H.f(a,b)
return a[b]},
$isK:1,
$asK:function(){return[W.bx]},
$asA:function(){return[W.bx]},
$isi:1,
$asi:function(){return[W.bx]},
$isd:1,
$asd:function(){return[W.bx]},
$asF:function(){return[W.bx]},
"%":"StyleSheetList"},
lB:{"^":"eY;dM:a<",
M:function(a,b){var z,y,x,w,v
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(z=this.gaa(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.D)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gaa:function(a){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.h])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
v=H.e(z[w],"$isfX")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asan:function(){return[P.h,P.h]},
$asN:function(){return[P.h,P.h]}},
lK:{"^":"lB;a",
i:function(a,b){return this.a.getAttribute(H.I(b))},
l:function(a,b,c){this.a.setAttribute(b,H.I(c))},
gn:function(a){return this.gaa(this).length}},
lL:{"^":"dG;a,b,c,$ti",
iO:function(a,b,c,d){var z=H.y(this,0)
H.l(a,{func:1,ret:-1,args:[z]})
H.l(c,{func:1,ret:-1})
return W.a8(this.a,this.b,a,!1,z)}},
pR:{"^":"lL;a,b,c,$ti"},
lM:{"^":"fi;a,b,c,d,e,$ti",
hO:function(){var z=this.d
if(z!=null&&this.a<=0)J.hW(this.b,this.c,z,!1)},
u:{
a8:function(a,b,c,d,e){var z=c==null?null:W.hv(new W.lN(c),W.ah)
z=new W.lM(0,a,b,z,!1,[e])
z.hO()
return z}}},
lN:{"^":"m:10;a",
$1:function(a){return this.a.$1(H.e(a,"$isah"))}},
cx:{"^":"b;a",
fs:function(a){var z,y
z=$.$get$dU()
if(z.giL(z)){for(y=0;y<262;++y)z.l(0,C.Y[y],W.nV())
for(y=0;y<12;++y)z.l(0,C.t[y],W.nW())}},
b1:function(a){return $.$get$h1().X(0,W.bQ(a))},
aI:function(a,b,c){var z,y,x
z=W.bQ(a)
y=$.$get$dU()
x=y.i(0,H.k(z)+"::"+b)
if(x==null)x=y.i(0,"*::"+b)
if(x==null)return!1
return H.e0(x.$4(a,b,c,this))},
$isaS:1,
u:{
h0:function(a){var z,y
z=W.ei(null)
y=window.location
z=new W.cx(new W.mn(z,y))
z.fs(a)
return z},
pT:[function(a,b,c,d){H.e(a,"$isX")
H.I(b)
H.I(c)
H.e(d,"$iscx")
return!0},"$4","nV",16,0,21],
pU:[function(a,b,c,d){var z,y,x,w,v
H.e(a,"$isX")
H.I(b)
H.I(c)
z=H.e(d,"$iscx").a
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
return z},"$4","nW",16,0,21]}},
F:{"^":"b;$ti",
ga2:function(a){return new W.eL(a,this.gn(a),-1,[H.bg(this,a,"F",0)])},
aL:function(a,b,c,d){H.C(d,H.bg(this,a,"F",0))
throw H.a(P.E("Cannot modify an immutable List."))}},
f2:{"^":"b;a",
b1:function(a){return C.a.e8(this.a,new W.jB(a))},
aI:function(a,b,c){return C.a.e8(this.a,new W.jA(a,b,c))},
$isaS:1},
jB:{"^":"m:28;a",
$1:function(a){return H.e(a,"$isaS").b1(this.a)}},
jA:{"^":"m:28;a,b,c",
$1:function(a){return H.e(a,"$isaS").aI(this.a,this.b,this.c)}},
mo:{"^":"b;",
fv:function(a,b,c,d){var z,y,x
this.a.ac(0,c)
z=b.di(0,new W.mp())
y=b.di(0,new W.mq())
this.b.ac(0,z)
x=this.c
x.ac(0,C.A)
x.ac(0,y)},
b1:function(a){return this.a.X(0,W.bQ(a))},
aI:["fi",function(a,b,c){var z,y
z=W.bQ(a)
y=this.c
if(y.X(0,H.k(z)+"::"+b))return this.d.ig(c)
else if(y.X(0,"*::"+b))return this.d.ig(c)
else{y=this.b
if(y.X(0,H.k(z)+"::"+b))return!0
else if(y.X(0,"*::"+b))return!0
else if(y.X(0,H.k(z)+"::*"))return!0
else if(y.X(0,"*::*"))return!0}return!1}],
$isaS:1},
mp:{"^":"m:29;",
$1:function(a){return!C.a.X(C.t,H.I(a))}},
mq:{"^":"m:29;",
$1:function(a){return C.a.X(C.t,H.I(a))}},
mD:{"^":"mo;e,a,b,c,d",
aI:function(a,b,c){if(this.fi(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.X(0,b)
return!1},
u:{
hb:function(){var z,y,x,w,v
z=P.h
y=P.eW(C.r,z)
x=H.y(C.r,0)
w=H.l(new W.mE(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.mD(y,P.cp(null,null,null,z),P.cp(null,null,null,z),P.cp(null,null,null,z),null)
y.fv(null,new H.jl(C.r,w,[x,z]),v,null)
return y}}},
mE:{"^":"m:16;",
$1:function(a){return"TEMPLATE::"+H.k(H.I(a))}},
mC:{"^":"b;",
b1:function(a){var z=J.L(a)
if(!!z.$isfc)return!1
z=!!z.$iscR
if(z&&W.bQ(a)==="foreignObject")return!1
if(z)return!0
return!1},
aI:function(a,b,c){if(b==="is"||C.b.a8(b,"on"))return!1
return this.b1(a)},
$isaS:1},
eL:{"^":"b;a,b,c,0d,$ti",
G:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.ee(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gO:function(a){return this.d}},
aS:{"^":"b;"},
mn:{"^":"b;a,b",$ispI:1},
ho:{"^":"b;a",
dn:function(a){new W.nb(this).$2(a,null)},
bg:function(a,b){if(b==null)J.eh(a)
else b.removeChild(a)},
hA:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.i_(a)
x=y.gdM().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.ad(t)}v="element unprintable"
try{v=J.ae(a)}catch(t){H.ad(t)}try{u=W.bQ(a)
this.hz(H.e(a,"$isX"),b,z,v,u,H.e(y,"$isN"),H.I(x))}catch(t){if(H.ad(t) instanceof P.aL)throw t
else{this.bg(a,b)
window
s="Removing corrupted element "+H.k(v)
if(typeof console!="undefined")window.console.warn(s)}}},
hz:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.bg(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.b1(a)){this.bg(a,b)
window
z="Removing disallowed element <"+H.k(e)+"> from "+H.k(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.aI(a,"is",g)){this.bg(a,b)
window
z="Removing disallowed type extension <"+H.k(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gaa(f)
y=H.c(z.slice(0),[H.y(z,0)])
for(x=f.gaa(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.f(y,x)
w=y[x]
if(!this.a.aI(a,J.i5(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.k(e)+" "+w+'="'+H.k(z.getAttribute(w))+'">'
if(typeof console!="undefined")window.console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.L(a).$isfl)this.dn(a.content)},
$ispd:1},
nb:{"^":"m:36;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.hA(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.bg(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.i0(z)}catch(w){H.ad(w)
v=H.e(z,"$isH")
if(x){u=v.parentNode
if(u!=null)u.removeChild(v)}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.e(y,"$isH")}}},
lE:{"^":"u+ir;"},
lG:{"^":"u+A;"},
lH:{"^":"lG+F;"},
lI:{"^":"u+A;"},
lJ:{"^":"lI+F;"},
lO:{"^":"u+A;"},
lP:{"^":"lO+F;"},
m0:{"^":"u+A;"},
m1:{"^":"m0+F;"},
m7:{"^":"u+an;"},
m8:{"^":"u+an;"},
m9:{"^":"u+A;"},
ma:{"^":"m9+F;"},
mb:{"^":"u+A;"},
mc:{"^":"mb+F;"},
mf:{"^":"u+A;"},
mg:{"^":"mf+F;"},
mm:{"^":"u+an;"},
h8:{"^":"ai+A;"},
h9:{"^":"h8+F;"},
ms:{"^":"u+A;"},
mt:{"^":"ms+F;"},
mw:{"^":"u+an;"},
mF:{"^":"u+A;"},
mG:{"^":"mF+F;"},
hc:{"^":"ai+A;"},
hd:{"^":"hc+F;"},
mL:{"^":"u+A;"},
mM:{"^":"mL+F;"},
nd:{"^":"u+A;"},
ne:{"^":"nd+F;"},
nf:{"^":"u+A;"},
ng:{"^":"nf+F;"},
nh:{"^":"u+A;"},
ni:{"^":"nh+F;"},
nj:{"^":"u+A;"},
nk:{"^":"nj+F;"},
nl:{"^":"u+A;"},
nm:{"^":"nl+F;"}}],["","",,P,{"^":"",
nJ:function(a){var z,y
z=J.L(a)
if(!!z.$iscj){y=z.gee(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.hf(a.data,a.height,a.width)},
nI:function(a){if(a instanceof P.hf)return{data:a.a,height:a.b,width:a.c}
return a},
b9:function(a){var z,y,x,w,v
if(a==null)return
z=P.dt(P.h,null)
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w){v=H.I(y[w])
z.l(0,v,a[v])}return z},
nG:function(a,b){var z={}
a.M(0,new P.nH(z))
return z},
eE:function(){var z=$.eD
if(z==null){z=J.d9(window.navigator.userAgent,"Opera",0)
$.eD=z}return z},
ix:function(){var z,y
z=$.eA
if(z!=null)return z
y=$.eB
if(y==null){y=J.d9(window.navigator.userAgent,"Firefox",0)
$.eB=y}if(y)z="-moz-"
else{y=$.eC
if(y==null){y=!P.eE()&&J.d9(window.navigator.userAgent,"Trident/",0)
$.eC=y}if(y)z="-ms-"
else z=P.eE()?"-o-":"-webkit-"}$.eA=z
return z},
mz:{"^":"b;",
eD:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
dh:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.L(a)
if(!!y.$isam)return new Date(a.a)
if(!!y.$isk_)throw H.a(P.cv("structured clone of RegExp"))
if(!!y.$isbd)return a
if(!!y.$isdb)return a
if(!!y.$iseK)return a
if(!!y.$iscj)return a
if(!!y.$isf1||!!y.$isdA)return a
if(!!y.$isN){x=this.eD(a)
w=this.b
if(x>=w.length)return H.f(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v={}
z.a=v
C.a.l(w,x,v)
y.M(a,new P.mB(z,this))
return z.a}if(!!y.$isd){x=this.eD(a)
z=this.b
if(x>=z.length)return H.f(z,x)
v=z[x]
if(v!=null)return v
return this.ip(a,x)}throw H.a(P.cv("structured clone of other type"))},
ip:function(a,b){var z,y,x,w
z=J.aB(a)
y=z.gn(a)
x=new Array(y)
C.a.l(this.b,b,x)
if(typeof y!=="number")return H.o(y)
w=0
for(;w<y;++w)C.a.l(x,w,this.dh(z.i(a,w)))
return x}},
mB:{"^":"m:8;a,b",
$2:function(a,b){this.a.a[a]=this.b.dh(b)}},
hf:{"^":"b;ee:a>,b,c",$iscj:1},
nH:{"^":"m:8;a",
$2:function(a,b){this.a[a]=b}},
mA:{"^":"mz;a,b"},
iK:{"^":"cM;a,b",
gbA:function(){var z,y,x
z=this.b
y=H.al(z,"A",0)
x=W.X
return new H.jj(new H.dS(z,H.l(new P.iL(),{func:1,ret:P.W,args:[y]}),[y]),H.l(new P.iM(),{func:1,ret:x,args:[y]}),[y,x])},
l:function(a,b,c){var z
H.G(b)
H.e(c,"$isX")
z=this.gbA()
J.i2(z.b.$1(J.cC(z.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
aL:function(a,b,c,d){throw H.a(P.E("Cannot fillRange on filtered list"))},
gn:function(a){return J.aq(this.gbA().a)},
i:function(a,b){var z=this.gbA()
return z.b.$1(J.cC(z.a,b))},
ga2:function(a){var z=P.je(this.gbA(),!1,W.X)
return new J.aD(z,z.length,0,[H.y(z,0)])},
$asA:function(){return[W.X]},
$asi:function(){return[W.X]},
$asd:function(){return[W.X]}},
iL:{"^":"m:24;",
$1:function(a){return!!J.L(H.e(a,"$isH")).$isX}},
iM:{"^":"m:59;",
$1:function(a){return H.j(H.e(a,"$isH"),"$isX")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cX:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
m2:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
mh:{"^":"b;$ti",
gbo:function(a){var z=this.a
if(typeof z!=="number")return z.E()
return H.C(z+this.c,H.y(this,0))},
gcG:function(a){var z=this.b
if(typeof z!=="number")return z.E()
return H.C(z+this.d,H.y(this,0))},
j:function(a){return"Rectangle ("+H.k(this.a)+", "+H.k(this.b)+") "+this.c+" x "+this.d},
A:function(a,b){var z,y,x,w
if(b==null)return!1
z=H.ca(b,"$isaf",[P.a5],"$asaf")
if(!z)return!1
z=this.a
y=J.aJ(b)
x=y.gb7(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbt(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.E()
w=H.y(this,0)
if(H.C(z+this.c,w)===y.gbo(b)){if(typeof x!=="number")return x.E()
z=H.C(x+this.d,w)===y.gcG(b)}else z=!1}else z=!1}else z=!1
return z},
gY:function(a){var z,y,x,w,v
z=this.a
y=J.ce(z)
x=this.b
w=J.ce(x)
if(typeof z!=="number")return z.E()
v=H.y(this,0)
z=H.C(z+this.c,v)
if(typeof x!=="number")return x.E()
v=H.C(x+this.d,v)
return P.m2(P.cX(P.cX(P.cX(P.cX(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
af:{"^":"mh;b7:a>,bt:b>,aC:c>,az:d>,$ti",u:{
jX:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.K()
if(c<0)z=-c*0
else z=c
H.C(z,e)
if(typeof d!=="number")return d.K()
if(d<0)y=-d*0
else y=d
return new P.af(a,b,z,H.C(y,e),[e])}}}}],["","",,P,{"^":"",bU:{"^":"u;",$isbU:1,"%":"SVGLength"},oZ:{"^":"m4;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.G(b)
H.e(c,"$isbU")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$asA:function(){return[P.bU]},
$isi:1,
$asi:function(){return[P.bU]},
$isd:1,
$asd:function(){return[P.bU]},
$asF:function(){return[P.bU]},
"%":"SVGLengthList"},bW:{"^":"u;",$isbW:1,"%":"SVGNumber"},pe:{"^":"me;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.G(b)
H.e(c,"$isbW")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$asA:function(){return[P.bW]},
$isi:1,
$asi:function(){return[P.bW]},
$isd:1,
$asd:function(){return[P.bW]},
$asF:function(){return[P.bW]},
"%":"SVGNumberList"},pk:{"^":"u;0n:length=","%":"SVGPointList"},fc:{"^":"cR;0a7:type}",$isfc:1,"%":"SVGScriptElement"},pu:{"^":"my;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.G(b)
H.I(c)
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$asA:function(){return[P.h]},
$isi:1,
$asi:function(){return[P.h]},
$isd:1,
$asd:function(){return[P.h]},
$asF:function(){return[P.h]},
"%":"SVGStringList"},px:{"^":"cR;0a7:type}","%":"SVGStyleElement"},cR:{"^":"X;",
gcK:function(a){return new P.iK(a,new W.aA(a))},
ar:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.aS])
C.a.h(z,W.h0(null))
C.a.h(z,W.hb())
C.a.h(z,new W.mC())
c=new W.ho(new W.f2(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.v).iq(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.aA(w)
u=z.gaQ(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
$iscR:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"},bZ:{"^":"u;",$isbZ:1,"%":"SVGTransform"},pG:{"^":"mO;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.G(b)
H.e(c,"$isbZ")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$asA:function(){return[P.bZ]},
$isi:1,
$asi:function(){return[P.bZ]},
$isd:1,
$asd:function(){return[P.bZ]},
$asF:function(){return[P.bZ]},
"%":"SVGTransformList"},m3:{"^":"u+A;"},m4:{"^":"m3+F;"},md:{"^":"u+A;"},me:{"^":"md+F;"},mx:{"^":"u+A;"},my:{"^":"mx+F;"},mN:{"^":"u+A;"},mO:{"^":"mN+F;"}}],["","",,P,{"^":"",V:{"^":"b;",$isi:1,
$asi:function(){return[P.n]},
$isd:1,
$asd:function(){return[P.n]},
$iskN:1}}],["","",,P,{"^":"",oz:{"^":"u;0n:length=","%":"AudioBuffer"},el:{"^":"ai;","%":"AnalyserNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioPannerNode|AudioWorkletNode|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|DelayNode|DynamicsCompressorNode|GainNode|IIRFilterNode|JavaScriptAudioNode|MediaElementAudioSourceNode|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|PannerNode|RealtimeAnalyserNode|ScriptProcessorNode|StereoPannerNode|WaveShaperNode|webkitAudioPannerNode;AudioNode"},oA:{"^":"lC;",
i:function(a,b){return P.b9(a.get(H.I(b)))},
M:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[P.h,,]})
z=a.entries()
for(;!0;){y=z.next()
if(y.done)return
b.$2(y.value[0],P.b9(y.value[1]))}},
gaa:function(a){var z=H.c([],[P.h])
this.M(a,new P.i7(z))
return z},
gn:function(a){return a.size},
l:function(a,b,c){throw H.a(P.E("Not supported"))},
$asan:function(){return[P.h,null]},
$isN:1,
$asN:function(){return[P.h,null]},
"%":"AudioParamMap"},i7:{"^":"m:9;a",
$2:function(a,b){return C.a.h(this.a,a)}},i8:{"^":"el;","%":"AudioBufferSourceNode|ConstantSourceNode;AudioScheduledSourceNode"},oB:{"^":"ai;0n:length=","%":"AudioTrackList"},ib:{"^":"ai;","%":"AudioContext|webkitAudioContext;BaseAudioContext"},oC:{"^":"el;0a7:type}","%":"BiquadFilterNode"},ph:{"^":"ib;0n:length=","%":"OfflineAudioContext"},pi:{"^":"i8;0a7:type}","%":"Oscillator|OscillatorNode"},lC:{"^":"u+an;"}}],["","",,P,{"^":"",dD:{"^":"u;",
jk:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.L(g)
if(!!z.$iscj)y=!0
else y=!1
if(y){a.texImage2D(b,c,d,e,f,P.nI(g))
return}if(!!z.$iseN)z=!0
else z=!1
if(z){a.texImage2D(b,c,d,e,f,g)
return}throw H.a(P.cf("Incorrect number or type of arguments"))},
jj:function(a,b,c,d,e,f,g){return this.jk(a,b,c,d,e,f,g,null,null,null)},
$isdD:1,
"%":"WebGLRenderingContext"},kz:{"^":"u;",$iskz:1,"%":"WebGLTexture"},kW:{"^":"u;",$iskW:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":"",ps:{"^":"mv;",
gn:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.a(P.Y(b,a,null,null,null))
return P.b9(a.item(b))},
l:function(a,b,c){H.G(b)
H.e(c,"$isN")
throw H.a(P.E("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$asA:function(){return[[P.N,,,]]},
$isi:1,
$asi:function(){return[[P.N,,,]]},
$isd:1,
$asd:function(){return[[P.N,,,]]},
$asF:function(){return[[P.N,,,]]},
"%":"SQLResultSetRowList"},mu:{"^":"u+A;"},mv:{"^":"mu+F;"}}],["","",,O,{"^":"",aw:{"^":"b;0a,0b,0c,0d,$ti",
by:function(a){this.a=H.c([],[a])
this.b=null
this.c=null
this.d=null},
dq:function(a,b,c){var z=H.al(this,"aw",0)
H.l(b,{func:1,ret:P.W,args:[[P.i,z]]})
z={func:1,ret:-1,args:[P.n,[P.i,z]]}
H.l(a,z)
H.l(c,z)
this.b=b
this.c=a
this.d=c},
be:function(a,b){return this.dq(a,null,b)},
dS:function(a){var z
H.q(a,"$isi",[H.al(this,"aw",0)],"$asi")
z=this.b
if(z!=null)return z.$1(a)
return!0},
dw:function(a,b){var z
H.q(b,"$isi",[H.al(this,"aw",0)],"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gn:function(a){return this.a.length},
ga2:function(a){var z=this.a
return new J.aD(z,z.length,0,[H.y(z,0)])},
J:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.f(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.al(this,"aw",0)
H.C(b,z)
z=[z]
if(this.dS(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dw(x,H.c([b],z))}},
ac:function(a,b){var z,y
H.q(b,"$isi",[H.al(this,"aw",0)],"$asi")
if(this.dS(b)){z=this.a
y=z.length
C.a.ac(z,b)
this.dw(y,b)}},
$isi:1,
u:{
dh:function(a){var z=new O.aw([a])
z.by(a)
return z}}},dx:{"^":"b;0a,0b",
gn:function(a){return this.a.length},
gv:function(){var z=this.b
if(z==null){z=D.M()
this.b=z}return z},
fo:function(a){var z=this.b
if(!(z==null))z.D(a)},
aR:function(){return this.fo(null)},
ga4:function(a){var z=this.a
if(z.length>0)return C.a.gaA(z)
else return V.bq()},
c1:function(a){var z=this.a
if(a==null)C.a.h(z,V.bq())
else C.a.h(z,a)
this.aR()},
aN:function(){var z=this.a
if(z.length>0){z.pop()
this.aR()}}}}],["","",,E,{"^":"",da:{"^":"b;"},b0:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a9:z@,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sab:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gv().H(0,this.geU())
y=this.c
if(y!=null)y.gv().h(0,this.geU())
x=new D.O("shape",z,this.c,this,[F.fd])
x.b=!0
this.bb(x)}},
au:function(a,b){var z
for(z=this.y.a,z=new J.aD(z,z.length,0,[H.y(z,0)]);z.G();)z.d.au(0,b)},
af:function(a){var z,y
z=a.dx
C.a.h(z.a,z.ga4(z))
z.aR()
a.d7(this.f)
z=a.dy
y=(z&&C.a).gaA(z)
if(y!=null&&this.d!=null)y.eX(a,this)
for(z=this.y.a,z=new J.aD(z,z.length,0,[H.y(z,0)]);z.G();)z.d.af(a)
a.d5()
a.dx.aN()},
gv:function(){var z=this.z
if(z==null){z=D.M()
this.z=z}return z},
bb:function(a){var z=this.z
if(!(z==null))z.D(a)},
U:function(){return this.bb(null)},
iW:[function(a){H.e(a,"$isB")
this.e=null
this.bb(a)},function(){return this.iW(null)},"kd","$1","$0","geU",0,2,1],
iU:[function(a){this.bb(H.e(a,"$isB"))},function(){return this.iU(null)},"kb","$1","$0","geT",0,2,1],
ka:[function(a,b){var z,y,x,w,v,u,t,s
H.q(b,"$isi",[E.b0],"$asi")
for(z=b.length,y=this.geT(),x={func:1,ret:-1,args:[D.B]},w=[x],v=0;v<b.length;b.length===z||(0,H.D)(b),++v){u=b[v]
if(u!=null){if(u.ga9()==null){t=new D.bl()
t.d=0
u.sa9(t)}t=u.ga9()
t.toString
H.l(y,x)
s=t.a
if(s==null){s=H.c([],w)
t.a=s
t=s}else t=s
C.a.h(t,y)}}this.U()},"$2","giT",8,0,6],
kc:[function(a,b){var z,y,x,w,v
H.q(b,"$isi",[E.b0],"$asi")
for(z=b.length,y=this.geT(),x=0;x<b.length;b.length===z||(0,H.D)(b),++x){w=b[x]
if(w!=null){if(w.ga9()==null){v=new D.bl()
v.d=0
w.sa9(v)}w.ga9().H(0,y)}}this.U()},"$2","giV",8,0,6],
$isaR:1,
u:{
eJ:function(a,b,c,d,e,f){var z,y
z=new E.b0()
z.a=d
z.b=!0
y=O.dh(E.b0)
z.y=y
y.be(z.giT(),z.giV())
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
return z}}},k1:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
fl:function(a,b){var z,y
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
z=new O.dx()
y=[V.aO]
z.a=H.c([],y)
z.gv().h(0,new E.k3(this))
this.cy=z
z=new O.dx()
z.a=H.c([],y)
z.gv().h(0,new E.k4(this))
this.db=z
z=new O.dx()
z.a=H.c([],y)
z.gv().h(0,new E.k5(this))
this.dx=z
z=H.c([],[O.cu])
this.dy=z
C.a.h(z,null)
this.fr=new H.be(0,0,[P.h,A.dE])},
gj5:function(){var z,y
z=this.z
if(z==null){z=this.cy
z=z.ga4(z)
y=this.db
y=z.k(0,y.ga4(y))
this.z=y
z=y}return z},
d7:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaA(z):a;(z&&C.a).h(z,y)},
d5:function(){var z=this.dy
if(z.length>1)z.pop()},
e7:function(a){var z=a.b
if(z.length===0)throw H.a(P.t("May not cache a shader with no name."))
if(this.fr.bH(0,z))throw H.a(P.t('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.l(0,z,a)},
u:{
k2:function(a,b){var z=new E.k1(a,b)
z.fl(a,b)
return z}}},k3:{"^":"m:11;a",
$1:function(a){var z
H.e(a,"$isB")
z=this.a
z.z=null
z.ch=null}},k4:{"^":"m:11;a",
$1:function(a){var z
H.e(a,"$isB")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},k5:{"^":"m:11;a",
$1:function(a){var z
H.e(a,"$isB")
z=this.a
z.ch=null
z.cx=null}},kF:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0a9:x@,0y,0z,0Q,0ch,0cx,0cy",
gv:function(){var z=this.x
if(z==null){z=D.M()
this.x=z}return z},
fq:[function(a){var z
H.e(a,"$isB")
z=this.x
if(!(z==null))z.D(a)
this.jd()},function(){return this.fq(null)},"fp","$1","$0","gdz",0,2,1],
giF:function(){var z,y,x
z=Date.now()
y=C.d.a6(P.eF(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.am(z,!1)
return x/y},
dV:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.o(z)
x=C.e.cV(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.e.cV(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w}P.fn(C.q,this.gjc())},
jd:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.kH(this),{func:1,ret:-1,args:[P.a5]})
C.H.fN(z)
C.H.hu(z,W.hv(y,P.a5))}},"$0","gjc",0,0,3],
ja:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dV()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.am(w,!1)
x.y=P.eF(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sn(w.a,0)
w.aR()
w=x.db
C.a.sn(w.a,0)
w.aR()
w=x.dx
C.a.sn(w.a,0)
w.aR()
w=x.dy;(w&&C.a).sn(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.af(this.e)}x=this.z
if(!(x==null))x.D(null)}catch(v){z=H.ad(v)
y=H.bM(v)
P.ea("Error: "+H.k(z))
P.ea("Stack: "+H.k(y))
throw H.a(z)}},
u:{
kG:function(a,b,c,d,e){var z,y,x,w
z=J.L(a)
if(!!z.$isdf)return E.fm(a,!0,!0,!0,!1)
y=W.dg(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcK(a).h(0,y)
w=E.fm(y,!0,!0,!0,!1)
w.a=a
return w},
fm:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.kF()
y=P.ja(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.h,null)
x=C.l.c6(a,"webgl",y)
x=H.e(x==null?C.l.c6(a,"experimental-webgl",y):x,"$isdD")
if(x==null)H.r(P.t("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.k2(x,a)
w=new T.kA(x)
w.b=H.G(x.getParameter(3379))
w.c=H.G(x.getParameter(34076))
w.d=0
w.e=0
z.f=w
w=new X.l8(a)
v=new X.j2()
v.c=new X.aQ(!1,!1,!1)
v.d=P.cp(null,null,null,P.n)
w.b=v
v=new X.jw(w)
v.f=0
v.r=new V.Q(0,0)
v.x=new V.Q(0,0)
v.Q=1
v.ch=1
w.c=v
v=new X.jg(w)
v.r=0
v.x=new V.Q(0,0)
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.kK(w)
v.e=0
v.f=new V.Q(0,0)
v.r=new V.Q(0,0)
w.e=v
w.f=!1
w.r=!1
w.x=!1
v=H.c([],[[P.fi,P.b]])
w.z=v
u=document
t=W.aE
s={func:1,ret:-1,args:[t]}
C.a.h(v,W.a8(u,"contextmenu",H.l(w.gh4(),s),!1,t))
v=w.z
r=W.ah
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a8(a,"focus",H.l(w.gh7(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a8(a,"blur",H.l(w.gh0(),q),!1,r))
v=w.z
p=W.bT
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a8(u,"keyup",H.l(w.gh9(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a8(u,"keydown",H.l(w.gh8(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a8(a,"mousedown",H.l(w.ghc(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a8(a,"mouseup",H.l(w.ghe(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a8(a,"mousemove",H.l(w.ghd(),s),!1,t))
p=w.z
o=W.c2;(p&&C.a).h(p,W.a8(a,H.I(W.iD(a)),H.l(w.ghf(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a8(u,"mousemove",H.l(w.gh5(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a8(u,"mouseup",H.l(w.gh6(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a8(u,"pointerlockchange",H.l(w.ghg(),q),!1,r))
r=w.z
q=W.bC
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a8(a,"touchstart",H.l(w.gho(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a8(a,"touchend",H.l(w.ghm(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a8(a,"touchmove",H.l(w.ghn(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.am(Date.now(),!1)
z.cy=0
z.dV()
return z}}},kH:{"^":"m:35;a",
$1:function(a){var z
H.hM(a)
z=this.a
if(z.ch){z.ch=!1
z.ja()}}}}],["","",,Z,{"^":"",fU:{"^":"b;a,b",u:{
dR:function(a,b,c){var z
H.q(c,"$isd",[P.n],"$asd")
z=a.createBuffer()
a.bindBuffer(b,z)
a.bufferData(b,new Int16Array(H.bH(c)),35044)
a.bindBuffer(b,null)
return new Z.fU(b,z)}}},eq:{"^":"da;a,b,c,d,e",
a3:function(a){var z,y,x
try{a.a.enableVertexAttribArray(this.e)
a.a.vertexAttribPointer(this.e,this.b,5126,!1,this.d,this.c)}catch(y){z=H.ad(y)
x=P.t('Failed to bind buffer attribute "'+J.ae(this.a)+'": '+H.k(z))
throw H.a(x)}},
j:function(a){return"["+J.ae(this.a)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.k(this.e)+"]"}},fV:{"^":"b;a",$isoD:1},de:{"^":"b;a,0b,c,d",
aM:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
a3:function(a){var z,y
z=this.a
a.a.bindBuffer(z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].a3(a)},
aP:function(a){var z,y,x
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
j:function(a){var z,y,x,w,v,u
z=[P.h]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v)C.a.h(y,x[v].j(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ae(z[v]))
return"Buffer:  ["+this.a.j(0)+"]\nIndices: "+C.a.p(y,", ")+"\nAttrs:   "+C.a.p(u,", ")},
$ispA:1},cL:{"^":"b;a,b,c",
j:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bt(this.c)+"'")+"]"}},bE:{"^":"b;a",
gds:function(a){var z,y
z=this.a
y=(z&$.$get$aI().a)!==0?3:0
if((z&$.$get$b5().a)!==0)y+=3
if((z&$.$get$b4().a)!==0)y+=3
if((z&$.$get$b6().a)!==0)y+=2
if((z&$.$get$b7().a)!==0)y+=3
if((z&$.$get$c0().a)!==0)y+=3
if((z&$.$get$c1().a)!==0)y+=4
if((z&$.$get$bF().a)!==0)++y
return(z&$.$get$b3().a)!==0?y+4:y},
ih:function(a){var z,y,x
z=$.$get$aI()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$b5()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b4()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b6()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b7()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$c0()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$c1()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bF()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b3()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fT()},
A:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bE))return!1
return this.a===b.a},
j:function(a){var z,y
z=H.c([],[P.h])
y=this.a
if((y&$.$get$aI().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$b5().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$b4().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$b6().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$b7().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$c0().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$c1().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bF().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$b3().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.p(z,"|")},
u:{
az:function(a){return new Z.bE(a)}}}}],["","",,D,{"^":"",et:{"^":"b;"},bl:{"^":"b;0a,0b,0c,0d",
h:function(a,b){var z,y
z={func:1,ret:-1,args:[D.B]}
H.l(b,z)
y=this.a
if(y==null){z=H.c([],[z])
this.a=z}else z=y
C.a.h(z,b)},
H:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.B]})
z=this.a
z=z==null?null:C.a.X(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).H(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.X(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).H(z,b)||y}return y},
D:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w){w=this.b
w=w==null?null:w.length===0
if(w==null)w=!0}else w=!1
if(w)return!1
if(a==null){a=new D.B(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.M(y,new D.iH(z))
y=this.b
if(!(y==null))C.a.M(y,new D.iI(z))
z=this.b
if(!(z==null))C.a.sn(z,0)
return!0},
iu:function(){return this.D(null)},
je:function(a,b,c){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.D(y)}}},
aB:function(a){return this.je(a,!0,!1)},
u:{
M:function(){var z=new D.bl()
z.d=0
return z}}},iH:{"^":"m:30;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.B]})
z=this.a.a
z.b
a.$1(z)}},iI:{"^":"m:30;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.B]})
z=this.a.a
z.b
a.$1(z)}},B:{"^":"b;a,0b"},ck:{"^":"B;c,d,a,0b,$ti"},cl:{"^":"B;c,d,a,0b,$ti"},O:{"^":"B;c,d,e,a,0b,$ti",
j:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}}],["","",,X,{"^":"",er:{"^":"b;a,b",
A:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.er))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.A(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.k(this.a)},
u:{"^":"oF<"}},eT:{"^":"b;a,b",
A:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eT))return!1
z=this.a
y=b.a
if(z==null?y!=null:z!==y)return!1
if(!this.b.A(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.k(this.a)}},eU:{"^":"B;c,a,0b"},j2:{"^":"b;0a,0b,0c,0d",
j1:function(a){var z,y
this.c=a.b
this.d.h(0,a.a)
z=this.a
if(z==null)return!1
y=new X.eU(a,this)
y.b=!0
return z.D(y)},
iY:function(a){var z,y
this.c=a.b
this.d.H(0,a.a)
z=this.b
if(z==null)return!1
y=new X.eU(a,this)
y.b=!0
return z.D(y)}},eX:{"^":"cP;x,y,c,d,e,a,0b"},jg:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aF:function(a,b){var z,y,x,w,v,u,t,s
z=new P.am(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=y.E(0,new V.Q(x*w,v*u))
u=this.a.gb2()
s=new X.bV(a,new V.Q(0,0),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
d4:function(a,b){var z
this.r=a.a
z=this.b
if(z==null)return!1
z.D(this.aF(a,b))
return!0},
bm:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.fa()
if(typeof z!=="number")return z.c5()
this.r=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.D(this.aF(a,b))
return!0},
bl:function(a,b){var z=this.d
if(z==null)return!1
z.D(this.aF(a,b))
return!0},
j2:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gb2()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.k()
t=a.b
s=this.cy
if(typeof t!=="number")return t.k()
w=new X.dy(new V.a2(v*u,t*s),y,x,new P.am(w,!1),this)
w.b=!0
z.D(w)
return!0},
hb:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.am(Date.now(),!1)
y=this.f
x=new X.eX(c,a,this.a.gb2(),b,z,this)
x.b=!0
y.D(x)
this.y=z
this.x=new V.Q(0,0)}},aQ:{"^":"b;a,b,c",
A:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aQ))return!1
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
return z+(this.c?"Shift+":"")}},bV:{"^":"cP;x,y,z,Q,ch,c,d,e,a,0b"},jw:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
ci:function(a,b,c){var z,y,x
z=new P.am(Date.now(),!1)
y=this.a.gb2()
x=new X.bV(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
d4:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.D(this.ci(a,b,!0))
return!0},
bm:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.fa()
if(typeof z!=="number")return z.c5()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.D(this.ci(a,b,!0))
return!0},
bl:function(a,b){var z=this.d
if(z==null)return!1
z.D(this.ci(a,b,!1))
return!0},
j3:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gb2()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.k()
u=a.b
t=this.ch
if(typeof u!=="number")return u.k()
x=new X.dy(new V.a2(w*v,u*t),y,b,new P.am(x,!1),this)
x.b=!0
z.D(x)
return!0},
geg:function(){var z=this.b
if(z==null){z=D.M()
this.b=z}return z},
gc4:function(){var z=this.c
if(z==null){z=D.M()
this.c=z}return z},
geS:function(){var z=this.d
if(z==null){z=D.M()
this.d=z}return z}},dy:{"^":"cP;x,c,d,e,a,0b"},cP:{"^":"B;"},fr:{"^":"cP;x,y,z,Q,ch,c,d,e,a,0b"},kK:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
aF:function(a,b){var z,y,x,w
H.q(a,"$isd",[V.Q],"$asd")
z=new P.am(Date.now(),!1)
y=a.length>0?a[0]:new V.Q(0,0)
x=this.a.gb2()
w=new X.fr(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
j0:function(a){var z
H.q(a,"$isd",[V.Q],"$asd")
z=this.b
if(z==null)return!1
z.D(this.aF(a,!0))
return!0},
iZ:function(a){var z
H.q(a,"$isd",[V.Q],"$asd")
z=this.c
if(z==null)return!1
z.D(this.aF(a,!0))
return!0},
j_:function(a){var z
H.q(a,"$isd",[V.Q],"$asd")
z=this.d
if(z==null)return!1
z.D(this.aF(a,!1))
return!0}},l8:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
gb2:function(){var z=this.a
return V.fb(0,0,(z&&C.l).ged(z).c,C.l.ged(z).d)},
dK:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eT(z,new X.aQ(y,a.altKey,a.shiftKey))},
b_:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aQ(y,a.altKey,a.shiftKey)},
cz:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aQ(y,a.altKey,a.shiftKey)},
aH:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.L()
v=z.top
if(typeof x!=="number")return x.L()
return new V.Q(y-w,x-v)},
bf:function(a){return new V.a2(a.movementX,a.movementY)},
cr:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.Q])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v){u=x[v]
t=C.e.am(u.pageX)
C.e.am(u.pageY)
s=z.left
C.e.am(u.pageX)
C.a.h(y,new V.Q(t-s,C.e.am(u.pageY)-z.top))}return y},
aD:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.er(z,new X.aQ(y,a.altKey,a.shiftKey))},
cl:function(a){var z,y,x,w,v,u
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
jH:[function(a){this.f=!0},"$1","gh7",4,0,10],
jA:[function(a){this.f=!1},"$1","gh0",4,0,10],
jE:[function(a){H.e(a,"$isaE")
if(this.f&&this.cl(a))a.preventDefault()},"$1","gh4",4,0,4],
jJ:[function(a){var z
H.e(a,"$isbT")
if(!this.f)return
z=this.dK(a)
if(this.b.j1(z))a.preventDefault()},"$1","gh9",4,0,22],
jI:[function(a){var z
H.e(a,"$isbT")
if(!this.f)return
z=this.dK(a)
if(this.b.iY(z))a.preventDefault()},"$1","gh8",4,0,22],
jL:[function(a){var z,y,x,w
H.e(a,"$isaE")
z=this.a
z.focus()
this.f=!0
this.b_(a)
if(this.x){y=this.aD(a)
x=this.bf(a)
if(this.d.d4(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aD(a)
w=this.aH(a)
if(this.c.d4(y,w))a.preventDefault()},"$1","ghc",4,0,4],
jN:[function(a){var z,y,x
H.e(a,"$isaE")
this.b_(a)
z=this.aD(a)
if(this.x){y=this.bf(a)
if(this.d.bm(z,y))a.preventDefault()
return}if(this.r)return
x=this.aH(a)
if(this.c.bm(z,x))a.preventDefault()},"$1","ghe",4,0,4],
jG:[function(a){var z,y,x
H.e(a,"$isaE")
if(!this.cl(a)){this.b_(a)
z=this.aD(a)
if(this.x){y=this.bf(a)
if(this.d.bm(z,y))a.preventDefault()
return}if(this.r)return
x=this.aH(a)
if(this.c.bm(z,x))a.preventDefault()}},"$1","gh6",4,0,4],
jM:[function(a){var z,y,x
H.e(a,"$isaE")
this.b_(a)
z=this.aD(a)
if(this.x){y=this.bf(a)
if(this.d.bl(z,y))a.preventDefault()
return}if(this.r)return
x=this.aH(a)
if(this.c.bl(z,x))a.preventDefault()},"$1","ghd",4,0,4],
jF:[function(a){var z,y,x
H.e(a,"$isaE")
if(!this.cl(a)){this.b_(a)
z=this.aD(a)
if(this.x){y=this.bf(a)
if(this.d.bl(z,y))a.preventDefault()
return}if(this.r)return
x=this.aH(a)
if(this.c.bl(z,x))a.preventDefault()}},"$1","gh5",4,0,4],
jO:[function(a){var z,y
H.e(a,"$isc2")
this.b_(a)
z=new V.a2((a&&C.G).gis(a),C.G.git(a)).t(0,180)
if(this.x){if(this.d.j2(z))a.preventDefault()
return}if(this.r)return
y=this.aH(a)
if(this.c.j3(z,y))a.preventDefault()},"$1","ghf",4,0,49],
jP:[function(a){var z,y,x,w,v
z=document.pointerLockElement
y=this.a
x=z==null?y==null:z===y
if(x!==this.x){this.x=x
w=this.aD(this.y)
v=this.aH(this.y)
this.d.hb(w,v,x)}},"$1","ghg",4,0,10],
jX:[function(a){var z
H.e(a,"$isbC")
this.a.focus()
this.f=!0
this.cz(a)
z=this.cr(a)
if(this.e.j0(z))a.preventDefault()},"$1","gho",4,0,15],
jV:[function(a){var z
H.e(a,"$isbC")
this.cz(a)
z=this.cr(a)
if(this.e.iZ(z))a.preventDefault()},"$1","ghm",4,0,15],
jW:[function(a){var z
H.e(a,"$isbC")
this.cz(a)
z=this.cr(a)
if(this.e.j_(z))a.preventDefault()},"$1","ghn",4,0,15]}}],["","",,D,{"^":"",cI:{"^":"b;0a,0b,0c,0d",
gv:function(){var z=this.d
if(z==null){z=D.M()
this.d=z}return z},
aS:[function(a){var z
H.e(a,"$isB")
z=this.d
if(!(z==null))z.D(a)},function(){return this.aS(null)},"jq","$1","$0","gfu",0,2,1],
$isa9:1,
$isaR:1},a9:{"^":"b;",$isaR:1},j3:{"^":"aw;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
gv:function(){var z=this.Q
if(z==null){z=D.M()
this.Q=z}return z},
aS:function(a){var z=this.Q
if(!(z==null))z.D(a)},
ha:[function(a){var z
H.e(a,"$isB")
z=this.ch
if(!(z==null))z.D(a)},function(){return this.ha(null)},"jK","$1","$0","gdR",0,2,1],
jQ:[function(a){var z,y,x
H.q(a,"$isi",[D.a9],"$asi")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.D)(a),++y){x=a[y]
if(x==null||this.ft(x))return!1}return!0},"$1","ghh",4,0,41],
jx:[function(a,b){var z,y,x,w,v,u,t,s,r
z=D.a9
H.q(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdR(),w={func:1,ret:-1,args:[D.B]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=H.e(b[u],"$isa9")
if(t instanceof D.cI)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bl()
s.d=0
t.d=s}H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}z=new D.ck(a,b,this,[z])
z.b=!0
this.aS(z)},"$2","gfY",8,0,18],
jS:[function(a,b){var z,y,x,w,v,u
z=D.a9
H.q(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdR(),w=0;w<b.length;b.length===y||(0,H.D)(b),++w){v=H.e(b[w],"$isa9")
if(v instanceof D.cI)C.a.H(this.e,v)
u=v.d
if(u==null){u=new D.bl()
u.d=0
v.d=u}u.H(0,x)}z=new D.cl(a,b,this,[z])
z.b=!0
this.aS(z)},"$2","ghj",8,0,18],
ft:function(a){var z=C.a.X(this.e,a)
return z},
$asi:function(){return[D.a9]},
$asaw:function(){return[D.a9]}},jI:{"^":"b;",$isa9:1,$isaR:1},kr:{"^":"b;",$isa9:1,$isaR:1},kC:{"^":"b;",$isa9:1,$isaR:1},kD:{"^":"b;",$isa9:1,$isaR:1},kE:{"^":"b;",$isa9:1,$isaR:1}}],["","",,V,{"^":"",
oH:[function(a,b){if(typeof b!=="number")return b.L()
if(typeof a!=="number")return H.o(a)
return Math.abs(b-a)<=1e-9},"$2","jt",8,0,39],
ov:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.e.bw(a-b,z)
return(a<0?a+z:a)+b},
S:function(a,b,c){if(a==null)return C.b.al("null",c)
return C.b.al(C.e.f0($.p.$2(a,0)?0:a,b),c+b+1)},
bL:function(a,b,c){var z,y,x,w,v,u
H.q(a,"$isd",[P.v],"$asd")
z=H.c([],[P.h])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.D)(a),++w){v=V.S(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.f(z,u)
C.a.l(z,u,C.b.al(z[u],x))}return z},
e9:function(a,b){return C.e.jm(Math.pow(b,C.Q.cV(Math.log(H.nF(a))/Math.log(b))))},
a6:{"^":"b;a,b,c",
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
return new V.a6(z,y,x)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
j:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}},
ar:{"^":"b;a,b,c,d",
df:function(a){return H.c([this.a,this.b,this.c,this.d],[P.v])},
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
return new V.ar(z,y,x,w)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ar))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+", "+V.S(this.d,3,0)+"]"}},
cO:{"^":"b;a,b,c,d,e,f,r,x,y",
ag:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.v])
return z},
k:function(a4,a5){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.e(a5,"$iscO")
z=this.a
y=a5.a
if(typeof z!=="number")return z.k()
x=C.e.k(z,y)
w=this.b
v=a5.d
if(typeof w!=="number")return w.k()
u=C.e.k(w,v)
t=this.c
s=a5.r
if(typeof t!=="number")return t.k()
r=C.e.k(t,s)
q=a5.b
p=C.e.k(z,q)
o=a5.e
n=C.e.k(w,o)
m=a5.x
l=C.e.k(t,m)
k=a5.c
z=C.e.k(z,k)
j=a5.f
w=C.e.k(w,j)
i=a5.y
t=C.e.k(t,i)
h=this.d
if(typeof h!=="number")return h.k()
g=C.e.k(h,y)
f=this.e
if(typeof f!=="number")return f.k()
e=C.e.k(f,v)
d=this.f
if(typeof d!=="number")return d.k()
c=C.e.k(d,s)
b=C.e.k(h,q)
a=C.e.k(f,o)
a0=C.e.k(d,m)
h=C.e.k(h,k)
f=C.e.k(f,j)
d=C.e.k(d,i)
a1=this.r
if(typeof a1!=="number")return a1.k()
y=C.e.k(a1,y)
a2=this.x
if(typeof a2!=="number")return a2.k()
v=C.e.k(a2,v)
a3=this.y
if(typeof a3!=="number")return a3.k()
return new V.cO(x+u+r,p+n+l,z+w+t,g+e+c,b+a+a0,h+f+d,y+v+C.e.k(a3,s),C.e.k(a1,q)+C.e.k(a2,o)+C.e.k(a3,m),C.e.k(a1,k)+C.e.k(a2,j)+C.e.k(a3,i))},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cO))return!1
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
j:function(a){var z,y,x,w,v,u,t,s
z=[P.v]
y=V.bL(H.c([this.a,this.d,this.r],z),3,0)
x=V.bL(H.c([this.b,this.e,this.x],z),3,0)
w=V.bL(H.c([this.c,this.f,this.y],z),3,0)
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
aO:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ag:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.v])
return z},
cZ:function(a6){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.p.$2(a2,0))return V.bq()
a3=1/a2
a4=-w
a5=-i
return V.aP((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.e(a7,"$isaO")
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
return V.aP(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
dg:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
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
bu:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
if(!(b instanceof V.aO))return!1
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
j:function(a){return this.P()},
eE:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.v]
y=V.bL(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bL(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bL(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bL(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
P:function(){return this.eE("",3,0)},
F:function(a){return this.eE(a,3,0)},
u:{
aP:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aO(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bq:function(){return V.aP(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},
f0:function(a,b,c){var z,y,x,w,v
z=c.t(0,Math.sqrt(c.B(c)))
y=b.aJ(z)
x=y.t(0,Math.sqrt(y.B(y)))
w=z.aJ(x)
v=new V.z(a.a,a.b,a.c)
return V.aP(x.a,w.a,z.a,x.S(0).B(v),x.b,w.b,z.b,w.S(0).B(v),x.c,w.c,z.c,z.S(0).B(v),0,0,0,1)}}},
Q:{"^":"b;a,b",
E:function(a,b){return new V.Q(this.a+b.a,this.b+b.b)},
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
j:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+"]"}},
U:{"^":"b;a,b,c",
E:function(a,b){return new V.U(this.a+b.a,this.b+b.b,this.c+b.c)},
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
j:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}},
aT:{"^":"b;a,b,c,d",
k:function(a,b){return new V.aT(this.a*b,this.b*b,this.c*b,this.d*b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aT))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+", "+V.S(this.d,3,0)+"]"}},
fa:{"^":"b;a,b,c,d",
gae:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.fa))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+", "+V.S(this.d,3,0)+"]"},
u:{
fb:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.fa(a,b,c,d)}}},
a2:{"^":"b;a,b",
eO:[function(a){return Math.sqrt(this.B(this))},"$0","gn",1,0,14],
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
j:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+"]"}},
z:{"^":"b;a,b,c",
eO:[function(a){return Math.sqrt(this.B(this))},"$0","gn",1,0,14],
B:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
d_:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.z(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aJ:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.z(z*y-x*w,x*v-u*y,u*w-z*v)},
E:function(a,b){return new V.z(this.a+b.a,this.b+b.b,this.c+b.c)},
S:function(a){return new V.z(-this.a,-this.b,-this.c)},
k:function(a,b){return new V.z(this.a*b,this.b*b,this.c*b)},
t:function(a,b){if($.p.$2(b,0))return new V.z(0,0,0)
return new V.z(this.a/b,this.b/b,this.c/b)},
eN:function(){if(!$.p.$2(0,this.a))return!1
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
j:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}},
c_:{"^":"b;a,b,c,d",
eO:[function(a){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=this.d
return Math.sqrt(z*z+y*y+x*x+w*w)},"$0","gn",1,0,14],
k:function(a,b){return new V.c_(this.a*b,this.b*b,this.c*b,this.d*b)},
t:function(a,b){if($.p.$2(b,0))return new V.c_(0,0,0,0)
return new V.c_(this.a/b,this.b/b,this.c/b,this.d/b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c_))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
j:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+", "+V.S(this.d,3,0)+"]"}}}],["","",,U,{"^":"",ij:{"^":"et;0a,0b,0c,0d,0e,0f,0r,0x,0y",
cb:function(a){var z=V.ov(a,this.c,this.b)
return z},
gv:function(){var z=this.y
if(z==null){z=D.M()
this.y=z}return z},
T:function(a){var z=this.y
if(!(z==null))z.D(a)},
sdj:function(a,b){},
sd0:function(a){var z,y
z=this.b
if(!$.p.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.cb(z)}z=new D.O("maximumLocation",y,this.b,this,[P.v])
z.b=!0
this.T(z)}},
sd2:function(a){var z,y
z=this.c
if(!$.p.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.cb(z)}z=new D.O("minimumLocation",y,this.c,this,[P.v])
z.b=!0
this.T(z)}},
sa_:function(a,b){var z,y
b=this.cb(b)
z=this.d
if(!$.p.$2(z,b)){y=this.d
this.d=b
z=new D.O("location",y,b,this,[P.v])
z.b=!0
this.T(z)}},
sd1:function(a){var z,y,x
z=this.e
if(!$.p.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.O("maximumVelocity",y,a,this,[P.v])
z.b=!0
this.T(z)}},
sV:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.p.$2(z,a)){x=this.f
this.f=a
z=new D.O("velocity",x,a,this,[P.v])
z.b=!0
this.T(z)}},
scN:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.p.$2(z,a)){y=this.x
this.x=a
z=new D.O("dampening",y,a,this,[P.v])
z.b=!0
this.T(z)}},
au:function(a,b){var z,y,x,w
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
di:function(){var z=new U.ij()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},ev:{"^":"ao;0a,0b",
gv:function(){var z=this.b
if(z==null){z=D.M()
this.b=z}return z},
bd:function(a,b,c){return this.a},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ev))return!1
return J.J(this.a,b.a)},
j:function(a){return"Constant: "+this.a.F("          ")},
u:{
ew:function(a){var z=new U.ev()
z.a=a
return z}}},eM:{"^":"aw;0e,0f,0r,0a,0b,0c,0d",
gv:function(){var z=this.e
if(z==null){z=D.M()
this.e=z}return z},
T:[function(a){var z
H.e(a,"$isB")
z=this.e
if(!(z==null))z.D(a)},function(){return this.T(null)},"ap","$1","$0","gaT",0,2,1],
jw:[function(a,b){var z,y,x,w,v,u,t,s,r
z=U.ao
H.q(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaT(),w={func:1,ret:-1,args:[D.B]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=b[u]
if(t!=null){s=t.gv()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.ck(a,b,this,[z])
z.b=!0
this.T(z)},"$2","gfX",8,0,33],
jR:[function(a,b){var z,y,x,w,v
z=U.ao
H.q(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaT(),w=0;w<b.length;b.length===y||(0,H.D)(b),++w){v=b[w]
if(v!=null)v.gv().H(0,x)}z=new D.cl(a,b,this,[z])
z.b=!0
this.T(z)},"$2","ghi",8,0,33],
bd:function(a,b,c){var z,y,x,w
z=this.r
y=b.e
if(typeof z!=="number")return z.K()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.aD(z,z.length,0,[H.y(z,0)]),x=null;z.G();){y=z.d
if(y!=null){w=y.bd(0,b,c)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.bq():x
z=this.e
if(!(z==null))z.aB(0)}return this.f},
A:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eM))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.f(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.f(w,y)
if(!J.J(x,w[y]))return!1}return!0},
j:function(a){return"Group"},
$asi:function(){return[U.ao]},
$asaw:function(){return[U.ao]},
$isao:1},ao:{"^":"et;"},l9:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gv:function(){var z=this.cy
if(z==null){z=D.M()
this.cy=z}return z},
T:[function(a){var z
H.e(a,"$isB")
z=this.cy
if(!(z==null))z.D(a)},function(){return this.T(null)},"ap","$1","$0","gaT",0,2,1],
bh:function(a){if(this.a!=null)return!1
this.a=a
a.c.geg().h(0,this.gcm())
this.a.c.geS().h(0,this.gcn())
this.a.c.gc4().h(0,this.gco())
return!0},
fT:[function(a){H.e(a,"$isB")
if(!J.J(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gcm",4,0,2],
fU:[function(a){var z,y,x,w,v,u,t
a=H.j(H.e(a,"$isB"),"$isbV")
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
this.Q=new V.a2(y.a,y.b).k(0,2).t(0,z.gae())}this.ap()},"$1","gcn",4,0,2],
fV:[function(a){var z,y,x
H.e(a,"$isB")
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
this.ap()}},"$1","gco",4,0,2],
bd:function(a,b,c){var z,y,x,w,v
z=this.ch
y=b.e
if(typeof z!=="number")return z.K()
if(z<y){this.ch=y
x=b.y
this.b.au(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aP(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isao:1},la:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gv:function(){var z=this.fx
if(z==null){z=D.M()
this.fx=z}return z},
T:[function(a){var z
H.e(a,"$isB")
z=this.fx
if(!(z==null))z.D(a)},function(){return this.T(null)},"ap","$1","$0","gaT",0,2,1],
bh:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.geg().h(0,this.gcm())
this.a.c.geS().h(0,this.gcn())
this.a.c.gc4().h(0,this.gco())
z=this.a.d
y=z.f
if(y==null){y=D.M()
z.f=y
z=y}else z=y
z.h(0,this.gfQ())
z=this.a.d
y=z.d
if(y==null){y=D.M()
z.d=y
z=y}else z=y
z.h(0,this.gfR())
z=this.a.e
y=z.b
if(y==null){y=D.M()
z.b=y
z=y}else z=y
z.h(0,this.ghN())
z=this.a.e
y=z.d
if(y==null){y=D.M()
z.d=y
z=y}else z=y
z.h(0,this.ghM())
z=this.a.e
y=z.c
if(y==null){y=D.M()
z.c=y
z=y}else z=y
z.h(0,this.ghL())
return!0},
aw:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.S()
z=-z}if(this.r){if(typeof y!=="number")return y.S()
y=-y}return new V.a2(z,y)},
fT:[function(a){a=H.j(H.e(a,"$isB"),"$isbV")
if(!J.J(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gcm",4,0,2],
fU:[function(a){var z,y,x,w,v,u,t
a=H.j(H.e(a,"$isB"),"$isbV")
if(!this.cx)return
if(this.ch){z=a.d.L(0,a.y)
z=new V.a2(z.a,z.b)
z=z.B(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.L(0,a.y)
z=this.aw(new V.a2(y.a,y.b).k(0,2).t(0,z.gae()))
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
w=this.aw(new V.a2(x.a,x.b).k(0,2).t(0,z.gae()))
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
this.dx=this.aw(new V.a2(y.a,y.b).k(0,2).t(0,z.gae()))}this.ap()},"$1","gcn",4,0,2],
fV:[function(a){var z,y,x
H.e(a,"$isB")
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
this.ap()}},"$1","gco",4,0,2],
jt:[function(a){if(H.j(H.e(a,"$isB"),"$iseX").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfQ",4,0,2],
ju:[function(a){var z,y,x,w,v,u,t
a=H.j(H.e(a,"$isB"),"$isbV")
if(!J.J(this.d,a.x.b))return
z=a.c
y=a.d
x=y.L(0,a.y)
w=this.aw(new V.a2(x.a,x.b).k(0,2).t(0,z.gae()))
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
this.dx=this.aw(new V.a2(y.a,y.b).k(0,2).t(0,z.gae()))
this.ap()},"$1","gfR",4,0,2],
k0:[function(a){H.e(a,"$isB")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghN",4,0,2],
k_:[function(a){var z,y,x,w,v,u,t
a=H.j(H.e(a,"$isB"),"$isfr")
if(!this.cx)return
if(this.ch){z=a.d.L(0,a.y)
z=new V.a2(z.a,z.b)
z=z.B(z)
y=this.Q
if(typeof y!=="number")return H.o(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.L(0,a.y)
z=this.aw(new V.a2(y.a,y.b).k(0,2).t(0,z.gae()))
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
w=this.aw(new V.a2(x.a,x.b).k(0,2).t(0,z.gae()))
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
this.dx=this.aw(new V.a2(y.a,y.b).k(0,2).t(0,z.gae()))}this.ap()},"$1","ghM",4,0,2],
jZ:[function(a){var z,y,x
H.e(a,"$isB")
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
this.ap()}},"$1","ghL",4,0,2],
bd:function(a,b,c){var z,y,x,w,v
z=this.dy
y=b.e
if(typeof z!=="number")return z.K()
if(z<y){this.dy=y
x=b.y
this.c.au(0,x)
this.b.au(0,x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aP(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.k(0,V.aP(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isao:1},lb:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gv:function(){var z=this.r
if(z==null){z=D.M()
this.r=z}return z},
T:function(a){var z=this.r
if(!(z==null))z.D(a)},
bh:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.M()
z.e=y
z=y}else z=y
y=this.gfW()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.M()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
jv:[function(a){var z,y,x,w
H.e(a,"$isB")
if(!J.J(this.b,this.a.b.c))return
H.j(a,"$isdy")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.k()
w=z+y*x
if(z!==w){this.d=w
z=new D.O("zoom",z,w,this,[P.v])
z.b=!0
this.T(z)}},"$1","gfW",4,0,2],
bd:function(a,b,c){var z,y,x
z=this.e
y=b.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aP(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isao:1}}],["","",,M,{"^":"",ik:{"^":"aw;0e,0f,0a,0b,0c,0d",
gv:function(){var z=this.f
if(z==null){z=D.M()
this.f=z}return z},
a5:[function(a){var z
H.e(a,"$isB")
z=this.f
if(!(z==null))z.D(a)},function(){return this.a5(null)},"dA","$1","$0","ga0",0,2,1],
jT:[function(a,b){var z,y,x,w,v,u,t,s,r
z=M.aU
H.q(b,"$isi",[z],"$asi")
for(y=b.length,x=this.ga0(),w={func:1,ret:-1,args:[D.B]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=b[u]
if(t!=null){s=t.gv()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.ck(a,b,this,[z])
z.b=!0
this.a5(z)},"$2","ghk",8,0,31],
jU:[function(a,b){var z,y,x,w,v
z=M.aU
H.q(b,"$isi",[z],"$asi")
for(y=b.length,x=this.ga0(),w=0;w<b.length;b.length===y||(0,H.D)(b),++w){v=b[w]
if(v!=null)v.gv().H(0,x)}z=new D.cl(a,b,this,[z])
z.b=!0
this.a5(z)},"$2","ghl",8,0,31],
af:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.aD(z,z.length,0,[H.y(z,0)]);z.G();){y=z.d
if(!(y==null))y.af(a)}this.e=!1},
$asi:function(){return[M.aU]},
$asaw:function(){return[M.aU]},
$isaU:1},iq:{"^":"b;0a,0b,0c,0d,0e,0f",
gv:function(){var z=this.f
if(z==null){z=D.M()
this.f=z}return z},
a5:[function(a){var z
H.e(a,"$isB")
z=this.f
if(!(z==null))z.D(a)},function(){return this.a5(null)},"dA","$1","$0","ga0",0,2,1],
sbi:function(a){var z,y
if(a==null)a=new X.iT()
z=this.a
if(z!==a){if(z!=null)z.gv().H(0,this.ga0())
y=this.a
this.a=a
a.gv().h(0,this.ga0())
z=new D.O("camera",y,this.a,this,[X.cG])
z.b=!0
this.a5(z)}},
sbp:function(a,b){var z,y
if(b==null)b=X.dk(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gv().H(0,this.ga0())
y=this.b
this.b=b
b.gv().h(0,this.ga0())
z=new D.O("target",y,this.b,this,[X.dI])
z.b=!0
this.a5(z)}},
sbq:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gv().H(0,this.ga0())
y=this.c
this.c=a
if(a!=null)a.gv().h(0,this.ga0())
z=new D.O("technique",y,this.c,this,[O.cu])
z.b=!0
this.a5(z)}},
af:function(a){a.d7(this.c)
this.b.a3(a)
this.a.a3(a)
this.d.au(0,a)
this.d.af(a)
this.a.aP(a)
this.b.toString
a.d5()},
$isaU:1},iF:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
a5:[function(a){var z
H.e(a,"$isB")
z=this.x
if(!(z==null))z.D(a)},function(){return this.a5(null)},"dA","$1","$0","ga0",0,2,1],
jC:[function(a,b){var z,y,x,w,v,u,t,s,r
z=E.b0
H.q(b,"$isi",[z],"$asi")
for(y=b.length,x=this.ga0(),w={func:1,ret:-1,args:[D.B]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=b[u]
if(t!=null){if(t.ga9()==null){s=new D.bl()
s.d=0
t.sa9(s)}s=t.ga9()
s.toString
H.l(x,w)
r=s.a
if(r==null){r=H.c([],v)
s.a=r
s=r}else s=r
C.a.h(s,x)}}z=new D.ck(a,b,this,[z])
z.b=!0
this.a5(z)},"$2","gh2",8,0,6],
jD:[function(a,b){var z,y,x,w,v,u
z=E.b0
H.q(b,"$isi",[z],"$asi")
for(y=b.length,x=this.ga0(),w=0;w<b.length;b.length===y||(0,H.D)(b),++w){v=b[w]
if(v!=null){if(v.ga9()==null){u=new D.bl()
u.d=0
v.sa9(u)}v.ga9().H(0,x)}}z=new D.cl(a,b,this,[z])
z.b=!0
this.a5(z)},"$2","gh3",8,0,6],
sbi:function(a){var z,y
if(a==null)a=X.f6(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null)z.gv().H(0,this.ga0())
y=this.a
this.a=a
a.gv().h(0,this.ga0())
z=new D.O("camera",y,this.a,this,[X.cG])
z.b=!0
this.a5(z)}},
sbp:function(a,b){var z,y
if(b==null)b=X.dk(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gv().H(0,this.ga0())
y=this.b
this.b=b
b.gv().h(0,this.ga0())
z=new D.O("target",y,this.b,this,[X.dI])
z.b=!0
this.a5(z)}},
sbq:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gv().H(0,this.ga0())
y=this.c
this.c=a
if(a!=null)a.gv().h(0,this.ga0())
z=new D.O("technique",y,this.c,this,[O.cu])
z.b=!0
this.a5(z)}},
gv:function(){var z=this.x
if(z==null){z=D.M()
this.x=z}return z},
af:function(a){var z
a.d7(this.c)
this.b.a3(a)
this.a.a3(a)
z=this.c
if(z!=null)z.au(0,a)
for(z=this.d.a,z=new J.aD(z,z.length,0,[H.y(z,0)]);z.G();)z.d.au(0,a)
for(z=this.d.a,z=new J.aD(z,z.length,0,[H.y(z,0)]);z.G();)z.d.af(a)
this.a.toString
a.cy.aN()
a.db.aN()
this.b.toString
a.d5()},
$isaU:1},aU:{"^":"b;"}}],["","",,A,{"^":"",ek:{"^":"b;a,b,c"},i6:{"^":"b;a",
i:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
iv:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
w.a.enableVertexAttribArray(w.c)}},
ef:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
w.a.disableVertexAttribArray(w.c)}}},f_:{"^":"dE;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0ay,0as,0bJ,0eh,0bK,0bL,0ei,0ej,0bM,0bN,0ek,0el,0bO,0bP,0em,0en,0bQ,0eo,0ep,0bR,0eq,0er,0bS,0bT,0bU,0es,0eu,0bV,0bW,0ev,0ew,0bX,0ex,0cP,0ey,0cQ,0ez,0cR,0eA,0cS,0eB,0cT,0eC,0cU,a,b,0c,0d,0e,0f,0r,0x,0y",
fk:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.z=a1
z=new P.at("")
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
a1.hQ(z)
a1.hX(z)
a1.hR(z)
a1.i4(z)
a1.i5(z)
a1.hZ(z)
a1.i9(z)
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
z=new P.at("")
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
v.hU(z)
v.hP(z)
v.hS(z)
v.hV(z)
v.i2(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.i0(z)
v.i1(z)}v.hY(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.c){r+="uniform float alpha;\n"
z.a=r
if(q!==C.i){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.h){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.f){r+="uniform samplerCube alphaTxt;\n"
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
case C.f:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
r=z.a+="   return litClr*("+C.a.p(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.hT(z)
v.i_(z)
v.i3(z)
v.i6(z)
v.i7(z)
v.i8(z)
v.hW(z)}r=z.a+="// === Main ===\n"
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
n="vec4("+C.a.p(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.eM(0,x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.Q=this.x.i(0,"posAttr")
this.cx=this.x.i(0,"normAttr")
this.ch=this.x.i(0,"binmAttr")
this.cy=this.x.i(0,"txt2DAttr")
this.db=this.x.i(0,"txtCubeAttr")
this.dx=this.x.i(0,"bendAttr")
if(a1.fr)this.id=H.j(this.y.q(0,"invViewMat"),"$isaW")
if(y)this.dy=H.j(this.y.q(0,"objMat"),"$isaW")
if(w)this.fr=H.j(this.y.q(0,"viewObjMat"),"$isaW")
this.fy=H.j(this.y.q(0,"projViewObjMat"),"$isaW")
if(a1.x2)this.k1=H.j(this.y.q(0,"txt2DMat"),"$isdN")
if(a1.y1)this.k2=H.j(this.y.q(0,"txtCubeMat"),"$isaW")
if(a1.y2)this.k3=H.j(this.y.q(0,"colorMat"),"$isaW")
this.r1=H.c([],[A.aW])
y=a1.ay
if(y>0){this.k4=H.e(this.y.q(0,"bendMatCount"),"$isT")
for(m=0;m<y;++m){x=this.r1
w=this.y
v="bendValues["+m+"].mat"
l=w.i(0,v)
if(l==null)H.r(P.t("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.j(l,"$isaW"))}}y=a1.a
if(y!==C.c){this.r2=H.j(this.y.q(0,"emissionClr"),"$isR")
switch(y){case C.c:break
case C.i:break
case C.h:this.rx=H.j(this.y.q(0,"emissionTxt"),"$isay")
this.x1=H.j(this.y.q(0,"nullEmissionTxt"),"$isT")
break
case C.f:this.ry=H.j(this.y.q(0,"emissionTxt"),"$isau")
this.x1=H.j(this.y.q(0,"nullEmissionTxt"),"$isT")
break}}y=a1.b
if(y!==C.c){this.x2=H.j(this.y.q(0,"ambientClr"),"$isR")
switch(y){case C.c:break
case C.i:break
case C.h:this.y1=H.j(this.y.q(0,"ambientTxt"),"$isay")
this.ay=H.j(this.y.q(0,"nullAmbientTxt"),"$isT")
break
case C.f:this.y2=H.j(this.y.q(0,"ambientTxt"),"$isau")
this.ay=H.j(this.y.q(0,"nullAmbientTxt"),"$isT")
break}}y=a1.c
if(y!==C.c){this.as=H.j(this.y.q(0,"diffuseClr"),"$isR")
switch(y){case C.c:break
case C.i:break
case C.h:this.bJ=H.j(this.y.q(0,"diffuseTxt"),"$isay")
this.bK=H.j(this.y.q(0,"nullDiffuseTxt"),"$isT")
break
case C.f:this.eh=H.j(this.y.q(0,"diffuseTxt"),"$isau")
this.bK=H.j(this.y.q(0,"nullDiffuseTxt"),"$isT")
break}}y=a1.d
if(y!==C.c){this.bL=H.j(this.y.q(0,"invDiffuseClr"),"$isR")
switch(y){case C.c:break
case C.i:break
case C.h:this.ei=H.j(this.y.q(0,"invDiffuseTxt"),"$isay")
this.bM=H.j(this.y.q(0,"nullInvDiffuseTxt"),"$isT")
break
case C.f:this.ej=H.j(this.y.q(0,"invDiffuseTxt"),"$isau")
this.bM=H.j(this.y.q(0,"nullInvDiffuseTxt"),"$isT")
break}}y=a1.e
if(y!==C.c){this.bP=H.j(this.y.q(0,"shininess"),"$isa3")
this.bN=H.j(this.y.q(0,"specularClr"),"$isR")
switch(y){case C.c:break
case C.i:break
case C.h:this.ek=H.j(this.y.q(0,"specularTxt"),"$isay")
this.bO=H.j(this.y.q(0,"nullSpecularTxt"),"$isT")
break
case C.f:this.el=H.j(this.y.q(0,"specularTxt"),"$isau")
this.bO=H.j(this.y.q(0,"nullSpecularTxt"),"$isT")
break}}switch(a1.f){case C.c:break
case C.i:break
case C.h:this.em=H.j(this.y.q(0,"bumpTxt"),"$isay")
this.bQ=H.j(this.y.q(0,"nullBumpTxt"),"$isT")
break
case C.f:this.en=H.j(this.y.q(0,"bumpTxt"),"$isau")
this.bQ=H.j(this.y.q(0,"nullBumpTxt"),"$isT")
break}if(a1.dy){this.eo=H.j(this.y.q(0,"envSampler"),"$isau")
this.ep=H.j(this.y.q(0,"nullEnvTxt"),"$isT")
y=a1.r
if(y!==C.c){this.bR=H.j(this.y.q(0,"reflectClr"),"$isR")
switch(y){case C.c:break
case C.i:break
case C.h:this.eq=H.j(this.y.q(0,"reflectTxt"),"$isay")
this.bS=H.j(this.y.q(0,"nullReflectTxt"),"$isT")
break
case C.f:this.er=H.j(this.y.q(0,"reflectTxt"),"$isau")
this.bS=H.j(this.y.q(0,"nullReflectTxt"),"$isT")
break}}y=a1.x
if(y!==C.c){this.bT=H.j(this.y.q(0,"refraction"),"$isa3")
this.bU=H.j(this.y.q(0,"refractClr"),"$isR")
switch(y){case C.c:break
case C.i:break
case C.h:this.es=H.j(this.y.q(0,"refractTxt"),"$isay")
this.bV=H.j(this.y.q(0,"nullRefractTxt"),"$isT")
break
case C.f:this.eu=H.j(this.y.q(0,"refractTxt"),"$isau")
this.bV=H.j(this.y.q(0,"nullRefractTxt"),"$isT")
break}}}y=a1.y
if(y!==C.c){this.bW=H.j(this.y.q(0,"alpha"),"$isa3")
switch(y){case C.c:break
case C.i:break
case C.h:this.ev=H.j(this.y.q(0,"alphaTxt"),"$isay")
this.bX=H.j(this.y.q(0,"nullAlphaTxt"),"$isT")
break
case C.f:this.ew=H.j(this.y.q(0,"alphaTxt"),"$isau")
this.bX=H.j(this.y.q(0,"nullAlphaTxt"),"$isT")
break}}this.cP=H.c([],[A.fE])
this.cQ=H.c([],[A.fF])
this.cR=H.c([],[A.fG])
this.cS=H.c([],[A.fH])
this.cT=H.c([],[A.fI])
this.cU=H.c([],[A.fJ])
if(a1.k2){y=a1.z
if(y>0){this.ex=H.e(this.y.q(0,"dirLightCount"),"$isT")
for(m=0;m<y;++m){x=this.y
w="dirLights["+m+"].viewDir"
l=x.i(0,w)
if(l==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isR")
x=this.y
w="dirLights["+m+"].color"
k=x.i(0,w)
if(k==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isR")
x=this.cP;(x&&C.a).h(x,new A.fE(m,l,k))}}y=a1.Q
if(y>0){this.ey=H.e(this.y.q(0,"pntLightCount"),"$isT")
for(m=0;m<y;++m){x=this.y
w="pntLights["+m+"].point"
l=x.i(0,w)
if(l==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isR")
x=this.y
w="pntLights["+m+"].viewPnt"
k=x.i(0,w)
if(k==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isR")
x=this.y
w="pntLights["+m+"].color"
j=x.i(0,w)
if(j==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isR")
x=this.y
w="pntLights["+m+"].att0"
i=x.i(0,w)
if(i==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isa3")
x=this.y
w="pntLights["+m+"].att1"
h=x.i(0,w)
if(h==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isa3")
x=this.y
w="pntLights["+m+"].att2"
g=x.i(0,w)
if(g==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isa3")
x=this.cQ;(x&&C.a).h(x,new A.fF(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.ez=H.e(this.y.q(0,"spotLightCount"),"$isT")
for(m=0;m<y;++m){x=this.y
w="spotLights["+m+"].objPnt"
l=x.i(0,w)
if(l==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isR")
x=this.y
w="spotLights["+m+"].objDir"
k=x.i(0,w)
if(k==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isR")
x=this.y
w="spotLights["+m+"].viewPnt"
j=x.i(0,w)
if(j==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isR")
x=this.y
w="spotLights["+m+"].color"
i=x.i(0,w)
if(i==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isR")
x=this.y
w="spotLights["+m+"].cutoff"
h=x.i(0,w)
if(h==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isa3")
x=this.y
w="spotLights["+m+"].coneAngle"
g=x.i(0,w)
if(g==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isa3")
x=this.y
w="spotLights["+m+"].att0"
f=x.i(0,w)
if(f==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isa3")
x=this.y
w="spotLights["+m+"].att1"
e=x.i(0,w)
if(e==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isa3")
x=this.y
w="spotLights["+m+"].att2"
d=x.i(0,w)
if(d==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isa3")
x=this.cR;(x&&C.a).h(x,new A.fG(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.eA=H.e(this.y.q(0,"txtDirLightCount"),"$isT")
for(m=0;m<y;++m){x=this.y
w="txtDirLights["+m+"].objUp"
l=x.i(0,w)
if(l==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isR")
x=this.y
w="txtDirLights["+m+"].objRight"
k=x.i(0,w)
if(k==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isR")
x=this.y
w="txtDirLights["+m+"].objDir"
j=x.i(0,w)
if(j==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isR")
x=this.y
w="txtDirLights["+m+"].viewDir"
i=x.i(0,w)
if(i==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isR")
x=this.y
w="txtDirLights["+m+"].color"
h=x.i(0,w)
if(h==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isR")
x=this.y
w="txtDirLights["+m+"].nullTxt"
g=x.i(0,w)
if(g==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isT")
x=this.y
w="txtDirLightsTxt2D"+m
f=x.i(0,w)
if(f==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isay")
x=this.cS;(x&&C.a).h(x,new A.fH(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.eB=H.e(this.y.q(0,"txtPntLightCount"),"$isT")
for(m=0;m<y;++m){x=this.y
w="txtPntLights["+m+"].point"
l=x.i(0,w)
if(l==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isR")
x=this.y
w="txtPntLights["+m+"].viewPnt"
k=x.i(0,w)
if(k==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isR")
x=this.y
w="txtPntLights["+m+"].invViewRotMat"
j=x.i(0,w)
if(j==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isdN")
x=this.y
w="txtPntLights["+m+"].color"
i=x.i(0,w)
if(i==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isR")
x=this.y
w="txtPntLights["+m+"].nullTxt"
h=x.i(0,w)
if(h==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isT")
x=this.y
w="txtPntLights["+m+"].att0"
g=x.i(0,w)
if(g==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isa3")
x=this.y
w="txtPntLights["+m+"].att1"
f=x.i(0,w)
if(f==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isa3")
x=this.y
w="txtPntLights["+m+"].att2"
e=x.i(0,w)
if(e==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isa3")
x=this.y
w="txtPntLightsTxtCube"+m
d=x.i(0,w)
if(d==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isau")
x=this.cT;(x&&C.a).h(x,new A.fI(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.eC=H.e(this.y.q(0,"txtSpotLightCount"),"$isT")
for(m=0;m<y;++m){x=this.y
w="txtSpotLights["+m+"].objPnt"
l=x.i(0,w)
if(l==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(l,"$isR")
x=this.y
w="txtSpotLights["+m+"].objDir"
k=x.i(0,w)
if(k==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isR")
x=this.y
w="txtSpotLights["+m+"].objUp"
j=x.i(0,w)
if(j==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isR")
x=this.y
w="txtSpotLights["+m+"].objRight"
i=x.i(0,w)
if(i==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isR")
x=this.y
w="txtSpotLights["+m+"].viewPnt"
h=x.i(0,w)
if(h==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isR")
x=this.y
w="txtSpotLights["+m+"].nullTxt"
g=x.i(0,w)
if(g==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isT")
x=this.y
w="txtSpotLights["+m+"].color"
f=x.i(0,w)
if(f==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isR")
x=this.y
w="txtSpotLights["+m+"].tuScalar"
e=x.i(0,w)
if(e==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isa3")
x=this.y
w="txtSpotLights["+m+"].tvScalar"
d=x.i(0,w)
if(d==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isa3")
x=this.y
w="txtSpotLights["+m+"].att0"
c=x.i(0,w)
if(c==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isa3")
x=this.y
w="txtSpotLights["+m+"].att1"
b=x.i(0,w)
if(b==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(b,"$isa3")
x=this.y
w="txtSpotLights["+m+"].att2"
a=x.i(0,w)
if(a==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a,"$isa3")
x=this.y
w="txtSpotLightsTxt2D"+m
a0=x.i(0,w)
if(a0==null)H.r(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a0,"$isay")
x=this.cU;(x&&C.a).h(x,new A.fJ(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
aq:function(a,b,c){b.a.uniform1i(b.d,1)},
ai:function(a,b,c){if(c==null||c.d<6)b.a.uniform1i(b.d,1)
else{a.dr(c)
b.a.uniform1i(b.d,0)}},
u:{
jn:function(a,b){var z,y
z=a.as
y=new A.f_(b,z)
y.dv(b,z)
y.fk(a,b)
return y}}},jq:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,ay,as,bJ",
hQ:function(a){var z,y,x
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
hX:function(a){var z
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
hR:function(a){var z
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
i4:function(a){var z,y
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
i5:function(a){var z,y
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
hZ:function(a){var z
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
i9:function(a){var z
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
aE:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.f(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.av(c,1))+"Txt;\n"
a.a=z
if(b===C.h)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
hU:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aE(a,z,"emission")
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
case C.f:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
hP:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aE(a,z,"ambient")
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
case C.f:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
hS:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aE(a,z,"diffuse")
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
case C.f:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
hV:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aE(a,z,"invDiffuse")
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
case C.f:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
i2:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aE(a,z,"specular")
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
case C.f:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
hY:function(a){var z,y
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
case C.f:z+="uniform samplerCube bumpTxt;\n"
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
case C.f:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
i0:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aE(a,z,"reflect")
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
case C.f:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
i1:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aE(a,z,"refract")
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
case C.f:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
hT:function(a){var z,y
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
i_:function(a){var z,y
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
i3:function(a){var z,y
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
i6:function(a){var z,y,x
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
i7:function(a){var z,y,x
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
i8:function(a){var z,y,x
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
hW:function(a){var z
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
j:function(a){return this.as}},fE:{"^":"b;a,b,c"},fH:{"^":"b;a,b,c,d,e,f,r,x"},fF:{"^":"b;a,b,c,d,e,f,r"},fI:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fG:{"^":"b;a,b,c,d,e,f,r,x,y,z"},fJ:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},dE:{"^":"da;",
dv:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
eM:function(a,b,c){var z,y,x
this.c=b
this.d=c
this.e=this.dL(b,35633)
this.f=this.dL(this.d,35632)
z=this.a
y=z.createProgram()
this.r=y
z.attachShader(y,this.e)
z.attachShader(this.r,this.f)
z.linkProgram(this.r)
if(!H.e0(z.getProgramParameter(this.r,35714))){x=z.getProgramInfoLog(this.r)
z.deleteProgram(this.r)
H.r(P.t("Failed to link shader: "+H.k(x)))}this.hG()
this.hI()},
a3:function(a){a.a.useProgram(this.r)
this.x.iv()},
dL:function(a,b){var z,y,x
z=this.a
y=z.createShader(b)
z.shaderSource(y,a)
z.compileShader(y)
if(!H.e0(z.getShaderParameter(y,35713))){x=z.getShaderInfoLog(y)
z.deleteShader(y)
throw H.a(P.t("Error compiling shader '"+H.k(y)+"': "+H.k(x)))}return y},
hG:function(){var z,y,x,w,v,u
z=H.c([],[A.ek])
y=this.a
x=H.G(y.getProgramParameter(this.r,35721))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveAttrib(this.r,w)
u=y.getAttribLocation(this.r,v.name)
C.a.h(z,new A.ek(y,v.name,u))}this.x=new A.i6(z)},
hI:function(){var z,y,x,w,v,u
z=H.c([],[A.aj])
y=this.a
x=H.G(y.getProgramParameter(this.r,35718))
if(typeof x!=="number")return H.o(x)
w=0
for(;w<x;++w){v=y.getActiveUniform(this.r,w)
u=y.getUniformLocation(this.r,v.name)
C.a.h(z,this.ir(v.type,v.size,v.name,u))}this.y=new A.kV(z)},
aX:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.T(z,y,b,c)
else return A.dM(z,y,b,a,c)},
fK:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ay(z,y,b,c)
else return A.dM(z,y,b,a,c)},
fL:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.au(z,y,b,c)
else return A.dM(z,y,b,a,c)},
bC:function(a,b){return new P.fZ(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
ir:function(a,b,c,d){switch(a){case 5120:return this.aX(b,c,d)
case 5121:return this.aX(b,c,d)
case 5122:return this.aX(b,c,d)
case 5123:return this.aX(b,c,d)
case 5124:return this.aX(b,c,d)
case 5125:return this.aX(b,c,d)
case 5126:return new A.a3(this.a,this.r,c,d)
case 35664:return new A.kQ(this.a,this.r,c,d)
case 35665:return new A.R(this.a,this.r,c,d)
case 35666:return new A.kT(this.a,this.r,c,d)
case 35667:return new A.kR(this.a,this.r,c,d)
case 35668:return new A.kS(this.a,this.r,c,d)
case 35669:return new A.kU(this.a,this.r,c,d)
case 35674:return new A.kX(this.a,this.r,c,d)
case 35675:return new A.dN(this.a,this.r,c,d)
case 35676:return new A.aW(this.a,this.r,c,d)
case 35678:return this.fK(b,c,d)
case 35680:return this.fL(b,c,d)
case 35670:throw H.a(this.bC("BOOL",c))
case 35671:throw H.a(this.bC("BOOL_VEC2",c))
case 35672:throw H.a(this.bC("BOOL_VEC3",c))
case 35673:throw H.a(this.bC("BOOL_VEC4",c))
default:throw H.a(P.t("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}},cH:{"^":"b;a,b",
j:function(a){return this.b}},fe:{"^":"dE;0z,0Q,0ch,0cx,0cy,0db,a,b,0c,0d,0e,0f,0r,0x,0y"},aj:{"^":"b;"},kV:{"^":"b;a",
i:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
q:function(a,b){var z=this.i(0,b)
if(z==null)throw H.a(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return z},
j:function(a){return this.P()},
iE:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.D)(z),++w)x+=z[w].j(0)+a
return x},
P:function(){return this.iE("\n")}},T:{"^":"aj;a,b,c,d",
j:function(a){return"Uniform1i: "+H.k(this.c)}},kR:{"^":"aj;a,b,c,d",
j:function(a){return"Uniform2i: "+H.k(this.c)}},kS:{"^":"aj;a,b,c,d",
j:function(a){return"Uniform3i: "+H.k(this.c)}},kU:{"^":"aj;a,b,c,d",
j:function(a){return"Uniform4i: "+H.k(this.c)}},kP:{"^":"aj;0e,0f,a,b,c,d",
j:function(a){return"Uniform1iv: "+H.k(this.c)},
u:{
dM:function(a,b,c,d,e){var z=new A.kP(a,b,c,e)
z.f=d
z.e=P.jd(d,0,!1,P.n)
return z}}},a3:{"^":"aj;a,b,c,d",
j:function(a){return"Uniform1f: "+H.k(this.c)}},kQ:{"^":"aj;a,b,c,d",
j:function(a){return"Uniform2f: "+H.k(this.c)}},R:{"^":"aj;a,b,c,d",
j:function(a){return"Uniform3f: "+H.k(this.c)}},kT:{"^":"aj;a,b,c,d",
j:function(a){return"Uniform4f: "+H.k(this.c)}},kX:{"^":"aj;a,b,c,d",
j:function(a){return"Uniform1Mat2 "+H.k(this.c)}},dN:{"^":"aj;a,b,c,d",
ao:function(a){var z=new Float32Array(H.bH(H.q(a,"$isd",[P.v],"$asd")))
this.a.uniformMatrix3fv(this.d,!1,z)},
j:function(a){return"UniformMat3: "+H.k(this.c)}},aW:{"^":"aj;a,b,c,d",
ao:function(a){var z=new Float32Array(H.bH(H.q(a,"$isd",[P.v],"$asd")))
this.a.uniformMatrix4fv(this.d,!1,z)},
j:function(a){return"UniformMat4: "+H.k(this.c)}},ay:{"^":"aj;a,b,c,d",
j:function(a){return"UniformSampler2D: "+H.k(this.c)}},au:{"^":"aj;a,b,c,d",
dr:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)y.uniform1i(x,0)
else y.uniform1i(x,a.a)},
j:function(a){return"UniformSamplerCube: "+H.k(this.c)}}}],["","",,F,{"^":"",
e3:function(a,b,c,d){var z
H.l(c,{func:1,ret:-1,args:[F.ag,P.v,P.v]})
z=F.cr()
F.c6(z,b,c,d,a,1,0,0,1)
F.c6(z,b,c,d,a,0,1,0,3)
F.c6(z,b,c,d,a,0,0,1,2)
F.c6(z,b,c,d,a,-1,0,0,0)
F.c6(z,b,c,d,a,0,-1,0,0)
F.c6(z,b,c,d,a,0,0,-1,3)
z.aj()
return z},
d_:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
c6:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.l(c,{func:1,ret:-1,args:[F.ag,P.v,P.v]})
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
z.d=y}l=F.d_(y)
k=F.d_(z.b)
j=F.d7(d,e,new F.nn(z,F.d_(z.c),F.d_(z.d),k,l,c),b)
if(j!=null)a.ba(j)},
hB:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.l(e,{func:1,ret:P.v,args:[P.v]})
if(f<3)return
z=F.cr()
y=b?-1:1
x=-6.283185307179586/f
w=H.c([],[F.ag])
v=z.a
u=new V.z(0,0,y)
u=u.t(0,Math.sqrt(u.B(u)))
C.a.h(w,v.ic(new V.aT(a,-1,-1,-1),new V.ar(1,1,1,1),new V.U(0,0,d),new V.z(0,0,y),new V.Q(0.5,0.5),u))
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
k=F.bD(new V.aT(a,-1,-1,-1),null,new V.ar(n,l,m,1),new V.U(r*p,q*p,d),new V.z(0,0,y),new V.Q(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.e4(w)
return z},
hz:function(a,b,c,d,e,f){return F.nL(!0,c,d,new F.nK(a,f),e)},
nL:function(a,b,c,d,e){var z
H.l(d,{func:1,ret:P.v,args:[P.v,P.v]})
if(e<3)return
if(c<1)return
z=F.d7(c,e,new F.nN(d),null)
if(z==null)return
z.aj()
z.bF()
if(b)z.ba(F.hB(3,!1,!1,1,new F.nO(d),e))
z.ba(F.hB(1,!0,!1,-1,new F.nP(d),e))
return z},
o5:function(a,b){var z=F.d7(a,b,new F.o6(),null)
z.d.c3()
z.aj()
z.bF()
return z},
ak:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
b=b.t(0,Math.sqrt(b.B(b)))
z=b.a
y=b.b
x=b.c
w=F.bD(null,null,null,new V.U(z,y,x),b,null,null,null,0)
v=a.ix(w,new F.dQ())
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
w.sad(0,new V.ar(u,t,s,1))
r=Math.sqrt(z*z+y*y)
q=Math.atan2(y,z)/1.5707963267948966
if(q<0)q=-q
p=Math.atan2(r,x)/3.141592653589793
w.sde(new V.Q(q,p<0?-p:p))
a.a.h(0,w)
return w},
a0:function(a,b,c,d,e){var z,y,x,w
if(e<=0)a.d.bD(0,b,d,c)
else{z=F.ak(a,b.r.E(0,c.r).k(0,0.5))
y=F.ak(a,c.r.E(0,d.r).k(0,0.5))
x=F.ak(a,d.r.E(0,b.r).k(0,0.5))
w=e-1
F.a0(a,b,z,x,w)
F.a0(a,z,c,y,w)
F.a0(a,y,x,z,w)
F.a0(a,x,y,d,w)}},
hQ:function(a,b,c){var z,y
z={}
z.a=b
z.a=new F.op()
y=F.e3(a,null,new F.oq(z),c)
y.bF()
return y},
os:function(a,b,c,d){return F.hA(c,a,d,b,new F.ot())},
o3:function(a,b,c,d,e,f){return F.hA(d,a,e,b,new F.o4(f,c))},
hA:function(a,b,c,d,e){var z=F.d7(a,b,new F.nM(H.l(e,{func:1,ret:V.U,args:[P.v]}),d,b,c),null)
if(z==null)return
z.aj()
z.bF()
return z},
d7:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.ag,P.v,P.v]})
if(a<1)return
if(b<1)return
z=F.cr()
y=H.c([],[F.ag])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.bD(null,null,new V.ar(u,0,0,1),null,null,new V.Q(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cM(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.bD(null,null,new V.ar(o,n,m,1),null,null,new V.Q(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cM(d))}}z.d.ib(a+1,b+1,y)
return z},
nn:{"^":"m:5;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.d_(z.b,b).d_(z.d.d_(z.c,b),c)
a.sa_(0,new V.U(y.a,y.b,y.c))
a.sat(y.t(0,Math.sqrt(y.B(y))))
z=1-b
x=1-c
a.se9(new V.aT(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
nK:{"^":"m:23;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
nN:{"^":"m:5;a",
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
a.sat(u.t(0,Math.sqrt(u.B(u))))
a.se9(new V.aT(1-c,2+c,-1,-1))}},
nO:{"^":"m:34;a",
$1:function(a){return this.a.$2(a,1)}},
nP:{"^":"m:34;a",
$1:function(a){return this.a.$2(1-a,0)}},
o6:{"^":"m:5;",
$3:function(a,b,c){var z,y,x,w
z=c*3.141592653589793
y=Math.sin(z)
x=b*6.283185307179586
w=new V.z(Math.cos(x)*y,Math.cos(z),Math.sin(x)*y)
x=w.t(0,Math.sqrt(w.B(w)))
a.sa_(0,new V.U(x.a,x.b,x.c))}},
op:{"^":"m:23;",
$2:function(a,b){return 0}},
oq:{"^":"m:5;a",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.o(z)
y=a.f
x=new V.z(y.a,y.b,y.c)
z=x.t(0,Math.sqrt(x.B(x))).k(0,1+z)
a.sa_(0,new V.U(z.a,z.b,z.c))}},
ot:{"^":"m:17;",
$1:function(a){return new V.U(Math.cos(a),Math.sin(a),0)}},
o4:{"^":"m:17;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.U(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
nM:{"^":"m:5;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.ed(y.$1(z),x)
x=J.ed(y.$1(z+3.141592653589793/this.c),x).L(0,w)
x=new V.z(x.a,x.b,x.c)
v=x.t(0,Math.sqrt(x.B(x)))
u=new V.z(1,0,0)
y=v.aJ(!v.A(0,u)?new V.z(0,0,1):u)
t=y.t(0,Math.sqrt(y.B(y)))
y=t.aJ(v)
u=y.t(0,Math.sqrt(y.B(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.k(0,y*x)
x=t.k(0,r*x)
a.sa_(0,w.E(0,new V.U(y.a-x.a,y.b-x.b,y.c-x.c)))}},
ax:{"^":"b;0a,0b,0c,0d,0e",
aK:function(){if(!this.gbk()){C.a.H(this.a.a.d.b,this)
this.a.a.U()}this.ct()
this.cu()
this.hr()},
cA:function(a){this.a=a
C.a.h(a.d.b,this)},
cB:function(a){this.b=a
C.a.h(a.d.c,this)},
hF:function(a){this.c=a
C.a.h(a.d.d,this)},
ct:function(){var z=this.a
if(z!=null){C.a.H(z.d.b,this)
this.a=null}},
cu:function(){var z=this.b
if(z!=null){C.a.H(z.d.c,this)
this.b=null}},
hr:function(){var z=this.c
if(z!=null){C.a.H(z.d.d,this)
this.c=null}},
gbk:function(){return this.a==null||this.b==null||this.c==null},
fD:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=new V.z(0,0,0)
if(y!=null)v=v.E(0,y)
if(x!=null)v=v.E(0,x)
if(w!=null)v=v.E(0,w)
if(v.eN())return
return v.t(0,Math.sqrt(v.B(v)))},
fG:function(){var z,y,x,w,v
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
z=v.aJ(z.t(0,Math.sqrt(z.B(z))))
return z.t(0,Math.sqrt(z.B(z)))},
cJ:function(){if(this.d!=null)return!0
var z=this.fD()
if(z==null){z=this.fG()
if(z==null)return!1}this.d=z
this.a.a.U()
return!0},
fC:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=new V.z(0,0,0)
if(y!=null)v=v.E(0,y)
if(x!=null)v=v.E(0,x)
if(w!=null)v=v.E(0,w)
if(v.eN())return
return v.t(0,Math.sqrt(v.B(v)))},
fF:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
z=r.L(0,u).k(0,l).E(0,u).L(0,x)
z=new V.z(z.a,z.b,z.c)
m=z.t(0,Math.sqrt(z.B(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.S(0)}z=this.d
if(z!=null){k=z.t(0,Math.sqrt(z.B(z)))
z=k.aJ(m)
z=z.t(0,Math.sqrt(z.B(z))).aJ(k)
m=z.t(0,Math.sqrt(z.B(z)))}return m},
cH:function(){if(this.e!=null)return!0
var z=this.fC()
if(z==null){z=this.fF()
if(z==null)return!1}this.e=z
this.a.a.U()
return!0},
aV:function(a,b){var z=b.a
if(z==null)throw H.a(P.t("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.a(P.t("May not replace a face's vertex with a vertex attached to a different shape."))},
gil:function(a){if(J.J(this.a,this.b))return!0
if(J.J(this.b,this.c))return!0
if(J.J(this.c,this.a))return!0
return!1},
A:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.P()},
F:function(a){var z,y
if(this.gbk())return a+"disposed"
z=a+C.b.al(J.ae(this.a.e),0)+", "+C.b.al(J.ae(this.b.e),0)+", "+C.b.al(J.ae(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.j(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.j(0)+"}"):z+"-}"},
P:function(){return this.F("")},
u:{
bm:function(a,b,c){var z,y,x
z=new F.ax()
y=a.a
if(y==null)H.r(P.t("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.t("May not create a face with vertices attached to different shapes."))
z.cA(a)
z.cB(b)
z.hF(c)
C.a.h(z.a.a.d.b,z)
z.a.a.U()
return z}}},
iJ:{"^":"b;"},
kk:{"^":"iJ;",
b9:function(a,b,c){var z,y
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
ds:{"^":"b;0a,0b",
aK:function(){if(!this.gbk()){C.a.H(this.a.a.c.b,this)
this.a.a.U()}this.ct()
this.cu()},
cA:function(a){this.a=a
C.a.h(a.c.b,this)},
cB:function(a){this.b=a
C.a.h(a.c.c,this)},
ct:function(){var z=this.a
if(z!=null){C.a.H(z.c.b,this)
this.a=null}},
cu:function(){var z=this.b
if(z!=null){C.a.H(z.c.c,this)
this.b=null}},
gbk:function(){return this.a==null||this.b==null},
aV:function(a,b){var z=b.a
if(z==null)throw H.a(P.t("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.a(P.t("May not replace a line's vertex with a vertex attached to a different shape."))},
A:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.P()},
F:function(a){if(this.gbk())return a+"disposed"
return a+C.b.al(J.ae(this.a.e),0)+", "+C.b.al(J.ae(this.b.e),0)},
P:function(){return this.F("")},
u:{
j4:function(a,b){var z,y,x
z=new F.ds()
y=a.a
if(y==null)H.r(P.t("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.r(P.t("May not create a line with vertices attached to different shapes."))
z.cA(a)
z.cB(b)
C.a.h(z.a.a.c.b,z)
z.a.a.U()
return z}}},
j5:{"^":"b;"},
kO:{"^":"j5;",
b9:function(a,b,c){var z,y
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
dC:{"^":"b;0a",
aK:function(){var z=this.a
if(z!=null){C.a.H(z.a.b.b,this)
this.a.a.U()}this.hq()},
hq:function(){var z=this.a
if(z!=null){C.a.H(z.b.b,this)
this.a=null}},
A:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.P()},
F:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.al(J.ae(z.e),0)},
P:function(){return this.F("")}},
fd:{"^":"b;0a,0b,0c,0d,0e",
gv:function(){var z=this.e
if(z==null){z=D.M()
this.e=z}return z},
ba:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.C()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){v=z[w]
this.a.h(0,v.io())}this.a.C()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.dC()
if(r.a==null)H.r(P.t("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.D(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.C()
t=t.e
if(typeof t!=="number")return t.E()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.c
t.a.a.h(0,p)
t.a.a.h(0,o)
F.j4(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.C()
t=t.e
if(typeof t!=="number")return t.E()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
m=t[s]
s=this.d
s.a.a.h(0,p)
s.a.a.h(0,o)
s.a.a.h(0,m)
F.bm(p,o,m)}z=this.e
if(!(z==null))z.aB(0)},
aj:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aj()||!1
if(!this.a.aj())y=!1
z=this.e
if(!(z==null))z.aB(0)
return y},
iy:function(a,b,c){var z,y,x,w
z=this.a.c.length
for(y=c;y<z;++y){x=this.a.c
if(y>=x.length)return H.f(x,y)
w=x[y]
if(b.b9(0,a,w))return w}return},
ix:function(a,b){return this.iy(a,b,0)},
fP:function(a,b,c,d,e){var z,y,x
H.q(d,"$isd",[F.ag],"$asd")
H.q(e,"$isd",[P.n],"$asd")
C.a.h(d,b)
C.a.h(e,c)
for(z=c-1;z>=0;--z){y=this.a.c
if(z>=y.length)return H.f(y,z)
x=y[z]
if(a.b9(0,b,x)){C.a.h(d,x)
C.a.h(e,z)}}return this.a.c.length>1},
ht:function(a,b){var z,y,x,w,v,u,t,s
H.q(b,"$isd",[P.n],"$asd")
H.kq(b,J.nv(),H.y(b,0))
this.a.h(0,a)
for(z=b.length-1;z>=0;--z){if(z>=b.length)return H.f(b,z)
y=b[z]
x=this.a.c
if(y<0||y>=x.length)return H.f(x,y)
w=x[y]
for(;x=w.d,x.b.length+x.c.length+x.d.length>0;){x=x.i(0,0)
v=x.a
if(v==null||x.b==null||x.c==null)H.r(P.t("May not replace a face's vertex when the point has been disposed."))
if(J.J(v,w)){x.aV(w,a)
v=x.a
if(v!=null){C.a.H(v.d.b,x)
x.a=null}x.a=a
C.a.h(a.d.b,x)
u=1}else u=0
if(J.J(x.b,w)){x.aV(w,a)
v=x.b
if(v!=null){C.a.H(v.d.c,x)
x.b=null}x.b=a
C.a.h(a.d.c,x);++u}if(J.J(x.c,w)){x.aV(w,a)
v=x.c
if(v!=null){C.a.H(v.d.d,x)
x.c=null}x.c=a
C.a.h(a.d.d,x);++u}if(u>0){x=x.a.a.e
if(!(x==null))x.D(null)}}for(;x=w.c,x.b.length+x.c.length>0;){x=x.i(0,0)
v=x.a
if(v==null||x.b==null)H.r(P.t("May not replace a line's vertex when the point has been disposed."))
if(J.J(v,w)){x.aV(w,a)
v=x.a
if(v!=null){C.a.H(v.c.b,x)
x.a=null}x.a=a
C.a.h(a.c.b,x)
u=1}else u=0
if(J.J(x.b,w)){x.aV(w,a)
v=x.b
if(v!=null){C.a.H(v.c.c,x)
x.b=null}x.b=a
C.a.h(a.c.c,x);++u}if(u>0){x=x.a.a.e
if(!(x==null))x.D(null)}}for(;x=w.b.b,x.length>0;){x=x[0]
v=x.a
if(v==null)H.r(P.t("May not replace a point's vertex when the point has been disposed."))
if(J.J(v,w)){if(a.a==null)H.r(P.t("May not replace a point's vertex with a vertex which is not attached to a shape."))
v=x.a
if(v!=null){C.a.H(v.b.b,x)
x.a=null}x.a=a
C.a.h(a.b.b,x)
u=1}else u=0
if(u>0){x=x.a.a.e
if(!(x==null))x.D(null)}}x=this.a
v=x.c
if(y>=v.length)return H.f(v,y)
t=v[y]
if(t.b.b.length===0){s=t.c
if(s.b.length===0&&s.c.length===0){s=t.d
s=s.b.length===0&&s.c.length===0&&s.d.length===0}else s=!1}else s=!1
if(!s)H.r(P.t("May not remove a vertex without first making it empty."))
t.a=null
C.a.j8(v,y)
v=x.a.e
if(!(v==null))v.D(null)
x.b=!0}},
eR:function(a,b){var z,y,x,w,v,u,t,s
z=this.e
if(!(z==null))++z.d
for(y=this.a.c.length-1,z=[F.ag],x=[P.n];y>=0;--y){w=this.a.c
if(y>=w.length)return H.f(w,y)
v=w[y]
u=H.c([],z)
t=H.c([],x)
if(this.fP(a,v,y,u,t)){s=b.ba(u)
if(s!=null){this.ht(s,t)
y-=t.length}}}this.a.C()
this.c.c3()
this.d.c3()
this.b.j9()
this.c.da(new F.kO())
this.d.da(new F.kk())
z=this.e
if(!(z==null))z.aB(0)},
ie:function(a){this.eR(new F.dQ(),new F.jC())},
bF:function(){return this.ie(null)},
ec:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aI()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$b5().a)!==0)++w
if((x&$.$get$b4().a)!==0)++w
if((x&$.$get$b6().a)!==0)++w
if((x&$.$get$b7().a)!==0)++w
if((x&$.$get$c0().a)!==0)++w
if((x&$.$get$c1().a)!==0)++w
if((x&$.$get$bF().a)!==0)++w
if((x&$.$get$b3().a)!==0)++w
v=b.gds(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.v
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.eq])
for(r=0,q=0;q<w;++q){p=b.ih(q)
o=p.gds(p)
C.a.l(s,q,new Z.eq(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.f(y,n)
m=y[n].iN(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.l(t,l,m[k]);++l}}r+=o}H.q(t,"$isd",[x],"$asd")
y=a.a
j=y.createBuffer()
y.bindBuffer(34962,j)
y.bufferData(34962,new Float32Array(H.bH(t)),35044)
y.bindBuffer(34962,null)
i=new Z.de(new Z.fU(34962,j),s,b)
i.b=H.c([],[Z.cL])
if(this.b.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.C()
C.a.h(h,g.e)}f=Z.dR(y,34963,H.q(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cL(0,h.length,f))}if(this.c.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.C()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.C()
C.a.h(h,g.e)}f=Z.dR(y,34963,H.q(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cL(1,h.length,f))}if(this.d.b.length!==0){x=P.n
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
C.a.h(h,g.e)}f=Z.dR(y,34963,H.q(h,"$isd",[x],"$asd"))
C.a.h(i.b,new Z.cL(4,h.length,f))}return i},
j:function(a){var z=H.c([],[P.h])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.F("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.F("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.F("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.F("   "))}return C.a.p(z,"\n")},
bb:function(a){var z=this.e
if(!(z==null))z.D(a)},
U:function(){return this.bb(null)},
u:{
cr:function(){var z,y
z=new F.fd()
y=new F.lk(z)
y.b=!1
y.c=H.c([],[F.ag])
z.a=y
y=new F.ke(z)
y.b=H.c([],[F.dC])
z.b=y
y=new F.kd(z)
y.b=H.c([],[F.ds])
z.c=y
y=new F.kc(z)
y.b=H.c([],[F.ax])
z.d=y
z.e=null
return z}}},
kc:{"^":"b;a,0b",
bD:function(a,b,c,d){this.a.a.h(0,b)
this.a.a.h(0,c)
this.a.a.h(0,d)
return F.bm(b,c,d)},
e4:function(a){var z,y,x,w,v,u
H.q(a,"$isd",[F.ag],"$asd")
z=H.c([],[F.ax])
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
C.a.h(z,F.bm(x,v,u))}}return z},
ib:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n
H.q(c,"$isd",[F.ag],"$asd")
z=H.c([],[F.ax])
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
C.a.h(z,F.bm(r,q,o))
this.a.a.h(0,r)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bm(r,o,n))}else{s.h(0,q)
this.a.a.h(0,o)
this.a.a.h(0,n)
C.a.h(z,F.bm(q,o,n))
this.a.a.h(0,q)
this.a.a.h(0,n)
this.a.a.h(0,r)
C.a.h(z,F.bm(q,n,r))}u=!u}w=!w}return z},
gn:function(a){return this.b.length},
da:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.f(y,z)
x=y[z]
for(y=x.d,w=y.b.length+y.c.length+y.d.length-1;w>=0;--w){v=x.d.i(0,w)
for(u=w-1;u>=0;--u){t=x.d.i(0,u)
if(a.b9(0,v,t)){v.aK()
break}}}}},
c3:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=x.gil(x)
if(y)x.aK()}},
aj:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.D)(z),++w)if(!z[w].cJ())x=!1
return x},
cI:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.D)(z),++w)if(!z[w].cH())x=!1
return x},
j:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].F(a))
return C.a.p(z,"\n")},
P:function(){return this.F("")}},
kd:{"^":"b;a,0b",
gn:function(a){return this.b.length},
da:function(a){var z,y,x,w,v,u,t
for(z=this.a.a.c.length-1;z>=0;--z){y=this.a.a.c
if(z>=y.length)return H.f(y,z)
x=y[z]
for(y=x.c,w=y.b.length+y.c.length-1;w>=0;--w){v=x.c.i(0,w)
for(u=w-1;u>=0;--u){t=x.c.i(0,u)
if(a.b9(0,v,t)){v.aK()
break}}}}},
c3:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=J.J(x.a,x.b)
if(y)x.aK()}},
j:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.f(w,x)
C.a.h(z,w[x].F(a+(""+x+". ")))}return C.a.p(z,"\n")},
P:function(){return this.F("")}},
ke:{"^":"b;a,0b",
gn:function(a){return this.b.length},
j9:function(){var z,y
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
y=y[z]
if(y.a.b.b.length>1)y.aK()}},
j:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].F(a))
return C.a.p(z,"\n")},
P:function(){return this.F("")}},
ag:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cM:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.bD(this.cx,x,u,z,y,w,v,a,t)},
io:function(){return this.cM(null)},
sa_:function(a,b){var z
if(!J.J(this.f,b)){this.f=b
z=this.a
if(z!=null)z.U()}},
sd3:function(a){var z
a=a==null?null:a.t(0,Math.sqrt(a.B(a)))
if(!J.J(this.r,a)){this.r=a
z=this.a
if(z!=null)z.U()}},
seb:function(a){var z
a=a==null?null:a.t(0,Math.sqrt(a.B(a)))
if(!J.J(this.x,a)){this.x=a
z=this.a
if(z!=null)z.U()}},
sde:function(a){var z
if(!J.J(this.y,a)){this.y=a
z=this.a
if(z!=null)z.U()}},
sat:function(a){var z
if(!J.J(this.z,a)){this.z=a
z=this.a
if(z!=null)z.U()}},
sad:function(a,b){var z
if(!J.J(this.Q,b)){this.Q=b
z=this.a
if(z!=null)z.U()}},
sf4:function(a,b){var z
if(this.ch!==b){this.ch=b
z=this.a
if(z!=null)z.U()}},
se9:function(a){var z
if(!J.J(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.U()}},
iN:function(a){var z,y
z=J.L(a)
if(z.A(a,$.$get$aI())){z=this.f
y=[P.v]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$b5())){z=this.r
y=[P.v]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$b4())){z=this.x
y=[P.v]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$b6())){z=this.y
y=[P.v]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(z.A(a,$.$get$b7())){z=this.z
y=[P.v]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$c0())){z=this.Q
y=[P.v]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(z.A(a,$.$get$c1())){z=this.Q
if(z==null)return H.c([1,1,1,1],[P.v])
else return z.df(0)}else if(z.A(a,$.$get$bF()))return H.c([this.ch],[P.v])
else if(z.A(a,$.$get$b3())){z=this.cx
y=[P.v]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.v])},
cJ:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.z(0,0,0)
this.d.M(0,new F.lt(z))
z=z.a
this.r=z.t(0,Math.sqrt(z.B(z)))
z=this.a
if(z!=null){z.U()
z=this.a.e
if(!(z==null))z.aB(0)}return!0},
cH:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=new V.z(0,0,0)
this.d.M(0,new F.ls(z))
z=z.a
this.x=z.t(0,Math.sqrt(z.B(z)))
z=this.a
if(z!=null){z.U()
z=this.a.e
if(!(z==null))z.aB(0)}return!0},
A:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.P()},
F:function(a){var z,y,x
z=H.c([],[P.h])
C.a.h(z,C.b.al(J.ae(this.e),0))
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
C.a.h(z,V.S(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.j(0))
else C.a.h(z,"-")
x=C.a.p(z,", ")
return a+"{"+x+"}"},
P:function(){return this.F("")},
u:{
bD:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ag()
y=new F.lr(z)
y.b=H.c([],[F.dC])
z.b=y
y=new F.lp(z)
x=[F.ds]
y.b=H.c([],x)
y.c=H.c([],x)
z.c=y
y=new F.ll(z)
x=[F.ax]
y.b=H.c([],x)
y.c=H.c([],x)
y.d=H.c([],x)
z.d=y
h=$.$get$fR()
z.e=0
y=$.$get$aI()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$b5().a)!==0?e:null
z.x=(x&$.$get$b4().a)!==0?b:null
z.y=(x&$.$get$b6().a)!==0?f:null
z.z=(x&$.$get$b7().a)!==0?g:null
z.Q=(x&$.$get$fS().a)!==0?c:null
z.ch=(x&$.$get$bF().a)!==0?i:0
z.cx=(x&$.$get$b3().a)!==0?a:null
return z}}},
lt:{"^":"m:7;a",
$1:function(a){var z,y
H.e(a,"$isax")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
ls:{"^":"m:7;a",
$1:function(a){var z,y
H.e(a,"$isax")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
lk:{"^":"b;a,0b,0c",
C:function(){var z,y,x,w
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
this.a.U()
return!0},
e5:function(a,b,c,d,e,f,g,h,i){var z=F.bD(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bE:function(a,b,c,d,e,f){return this.e5(a,null,b,c,null,d,e,f,0)},
ic:function(a,b,c,d,e,f){return this.e5(a,null,b,c,d,e,f,null,0)},
gn:function(a){return this.c.length},
aj:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)z[x].cJ()
return!0},
cI:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)z[x].cH()
return!0},
ik:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.t(0,Math.sqrt(u*u+t*t+s*s))
if(!J.J(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.D(null)}}}}return!0},
j:function(a){return this.P()},
F:function(a){var z,y,x,w
this.C()
z=H.c([],[P.h])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].F(a))
return C.a.p(z,"\n")},
P:function(){return this.F("")}},
ll:{"^":"b;a,0b,0c,0d",
gn:function(a){return this.b.length+this.c.length+this.d.length},
i:function(a,b){var z,y,x
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
M:function(a,b){H.l(b,{func:1,ret:-1,args:[F.ax]})
C.a.M(this.b,b)
C.a.M(this.c,new F.lm(this,b))
C.a.M(this.d,new F.ln(this,b))},
j:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].F(a))
return C.a.p(z,"\n")},
P:function(){return this.F("")}},
lm:{"^":"m:7;a,b",
$1:function(a){H.e(a,"$isax")
if(!J.J(a.a,this.a))this.b.$1(a)}},
ln:{"^":"m:7;a,b",
$1:function(a){var z
H.e(a,"$isax")
z=this.a
if(!J.J(a.a,z)&&!J.J(a.b,z))this.b.$1(a)}},
lp:{"^":"b;a,0b,0c",
gn:function(a){return this.b.length+this.c.length},
i:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.f(z,x)
return z[x]}else{if(b<0)return H.f(z,b)
return z[b]}},
j:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].F(a))
return C.a.p(z,"\n")},
P:function(){return this.F("")}},
lq:{"^":"b;"},
dQ:{"^":"lq;",
b9:function(a,b,c){return J.J(b.f,c.f)}},
fQ:{"^":"b;"},
lo:{"^":"fQ;",
ba:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.q(a,"$isd",[F.ag],"$asd")
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
t=new V.c_(f[0],f[1],f[2],f[3])}else{f=[e,d,c,f]
e=f[0]
d=f[1]
c=f[2]
f=f[3]
t=new V.c_(t.a+e,t.b+d,t.c+c,t.d+f)}++u}f=l.ch
if(typeof f!=="number")return H.o(f)
n+=f;++o}b=F.bD(null,null,null,null,null,null,null,null,0)
if(y<=0||x==null)b.sa_(0,null)
else b.sa_(0,x.t(0,y))
if(w==null)b.sd3(null)
else b.sd3(w.t(0,Math.sqrt(w.B(w))))
if(v==null)b.seb(null)
else b.seb(v.t(0,Math.sqrt(v.B(v))))
if(s<=0||r==null)b.sde(null)
else b.sde(r.t(0,s))
if(q<=0||p==null)b.sat(null)
else b.sat(p.t(0,q))
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
b.sad(0,new V.ar(f,e,d,z))}if(o<=0)b.sf4(0,0)
else b.sf4(0,n/o)
return b}},
jC:{"^":"fQ;",
ba:function(a){var z,y,x,w
H.q(a,"$isd",[F.ag],"$asd")
z=new V.z(0,0,0)
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.z(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.t(0,Math.sqrt(z.B(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.D)(a),++x)a[x].sd3(z)
return}},
lr:{"^":"b;a,0b",
gn:function(a){return this.b.length},
j:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].F(a))
return C.a.p(z,"\n")},
P:function(){return this.F("")}}}],["","",,O,{"^":"",jm:{"^":"cu;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
gv:function(){var z=this.dy
if(z==null){z=D.M()
this.dy=z}return z},
W:[function(a){var z
H.e(a,"$isB")
z=this.dy
if(!(z==null))z.D(a)},function(){return this.W(null)},"dB","$1","$0","gaU",0,2,1],
hw:[function(a){H.e(a,"$isB")
this.a=null
this.W(a)},function(){return this.hw(null)},"jY","$1","$0","ghv",0,2,1],
jy:[function(a,b){var z=V.aO
z=new D.ck(a,H.q(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.W(z)},"$2","gfZ",8,0,25],
jz:[function(a,b){var z=V.aO
z=new D.cl(a,H.q(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.W(z)},"$2","gh_",8,0,25],
dI:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=this.dx
y=C.d.a6(z.e.length+3,4)*4
x=C.d.a6(z.f.length+3,4)*4
w=C.d.a6(z.r.length+3,4)*4
v=C.d.a6(z.x.length+3,4)*4
u=C.d.a6(z.y.length+3,4)*4
t=C.d.a6(z.z.length+3,4)*4
s=C.d.a6(this.e.a.length+3,4)*4
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
h="MaterialLight_"+C.d.j(q.a)+C.d.j(p.a)+C.d.j(o.a)+C.d.j(n.a)+C.d.j(m.a)+C.d.j(l.a)+C.d.j(k.a)+C.d.j(j.a)+C.d.j(i.a)+"_"
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
a0=q===C.f||p===C.f||o===C.f||n===C.f||m===C.f||l===C.f||k===C.f||j===C.f||i===C.f
a1=x+u+v+w+t>0
a2=s>0
a3=c||!e||d
a4=z&&a
a5=r&&a0
a6=$.$get$aI()
if(c){z=$.$get$b5()
a6=new Z.bE(a6.a|z.a)}if(b){z=$.$get$b4()
a6=new Z.bE(a6.a|z.a)}if(a){z=$.$get$b6()
a6=new Z.bE(a6.a|z.a)}if(a0){z=$.$get$b7()
a6=new Z.bE(a6.a|z.a)}if(a2){z=$.$get$b3()
a6=new Z.bE(a6.a|z.a)}return new A.jq(q,p,o,n,m,l,k,j,i,y,x,w,v,u,t,y+x+w+v+u+t,g,g,a1,a3,!0,!1,!1,f,a1,d,c,b,a,a0,a2,a4,a5,!1,s,h.charCodeAt(0)==0?h:h,a6)},
Z:function(a,b){H.q(a,"$isd",[T.dJ],"$asd")
if(b!=null)if(!C.a.X(a,b)){b.a=a.length
C.a.h(a,b)}},
au:function(a,b){var z,y,x,w,v
for(z=this.dx.a,z=new J.aD(z,z.length,0,[H.y(z,0)]);z.G();){y=z.d
x=new V.z(0,0,1)
y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.dg(x)}}},
eX:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.dI()
y=H.e(a.fr.i(0,z.as),"$isf_")
if(y==null){y=A.jn(z,a.a)
a.e7(y)}this.a=y
b.e=null
z=y}x=z.z
w=x.bJ
z=b.e
if(!(z instanceof Z.de)){b.e=null
z=null}if(z==null||!z.d.A(0,w)){z=x.r1
if(z)b.d.aj()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.d
u.d.cI()
u.a.cI()
u=u.e
if(!(u==null))u.aB(0)}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.a.ik()
t=t.e
if(!(t==null))t.aB(0)}r=b.d.ec(new Z.fV(a.a),w)
r.aM($.$get$aI()).e=this.a.Q.c
if(z)r.aM($.$get$b5()).e=this.a.cx.c
if(v)r.aM($.$get$b4()).e=this.a.ch.c
if(x.rx)r.aM($.$get$b6()).e=this.a.cy.c
if(u)r.aM($.$get$b7()).e=this.a.db.c
if(x.x1)r.aM($.$get$b3()).e=this.a.dx.c
b.e=r}z=T.dJ
q=H.c([],[z])
this.a.a3(a)
if(x.fx){v=this.a
u=a.dx
u=u.ga4(u)
v=v.dy
v.toString
v.ao(u.ag(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db
u=u.ga4(u)
t=a.dx
t=u.k(0,t.ga4(t))
a.cx=t
u=t}v=v.fr
v.toString
v.ao(u.ag(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.gj5()
t=a.dx
t=u.k(0,t.ga4(t))
a.ch=t
u=t}v=v.fy
v.toString
v.ao(u.ag(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.k1
v.toString
v.ao(u.ag(0,!0))}if(x.y1){v=this.a
u=this.c
v=v.k2
v.toString
v.ao(u.ag(0,!0))}if(x.y2){v=this.a
u=this.d
v=v.k3
v.toString
v.ao(C.w.ag(u,!0))}if(x.ay>0){p=this.e.a.length
v=this.a.k4
v.a.uniform1i(v.d,p)
for(v=[P.v],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.f(t,o)
t=t[o]
u.toString
H.e(t,"$isaO")
u=u.r1
if(o>=u.length)return H.f(u,o)
u=u[o]
n=new Float32Array(H.bH(H.q(t.ag(0,!0),"$isd",v,"$asd")))
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
v.aq(v.rx,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.f:this.Z(q,this.f.e)
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
v.aq(v.y1,v.ay,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.f:this.Z(q,this.r.e)
v=this.a
u=this.r.e
v.ai(v.y2,v.ay,u)
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
v=v.as
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.h:this.Z(q,this.x.d)
v=this.a
u=this.x.d
v.aq(v.bJ,v.bK,u)
u=this.a
v=this.x.f
u=u.as
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.f:this.Z(q,this.x.e)
v=this.a
u=this.x.e
v.ai(v.eh,v.bK,u)
u=this.a
v=this.x.f
u=u.as
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.d){case C.c:break
case C.i:v=this.a
u=this.y.f
v=v.bL
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
break
case C.h:this.Z(q,this.y.d)
v=this.a
u=this.y.d
v.aq(v.ei,v.bM,u)
u=this.a
v=this.y.f
u=u.bL
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break
case C.f:this.Z(q,this.y.e)
v=this.a
u=this.y.e
v.ai(v.ej,v.bM,u)
u=this.a
v=this.y.f
u=u.bL
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
break}switch(x.e){case C.c:break
case C.i:v=this.a
u=this.z.f
v=v.bN
v.toString
t=u.a
s=u.b
u=u.c
v.a.uniform3f(v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bP
u.a.uniform1f(u.d,s)
break
case C.h:this.Z(q,this.z.d)
v=this.a
u=this.z.d
v.aq(v.ek,v.bO,u)
u=this.a
v=this.z.f
u=u.bN
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bP
v.a.uniform1f(v.d,s)
break
case C.f:this.Z(q,this.z.e)
v=this.a
u=this.z.e
v.ai(v.el,v.bO,u)
u=this.a
v=this.z.f
u=u.bN
u.toString
t=v.a
s=v.b
v=v.c
u.a.uniform3f(u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bP
v.a.uniform1f(v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.ex
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga4(v)
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.D)(v),++k){j=v[k]
t=this.a.cP
if(l>=t.length)return H.f(t,l)
i=t[l]
t=m.dg(j.a)
s=t.a
h=t.b
g=t.c
g=t.t(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
h.a.uniform3f(h.d,g.a,g.b,g.c)
g=j.c
h=i.c
h.a.uniform3f(h.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.ey
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga4(v)
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.D)(v),++k){j=v[k]
t=this.a.cQ
if(l>=t.length)return H.f(t,l)
i=t[l]
t=j.gbn(j)
s=i.b
h=t.gdk(t)
g=t.gdl(t)
t=t.gdm(t)
s.a.uniform3f(s.d,h,g,t)
t=m.bu(j.gbn(j))
g=i.c
g.a.uniform3f(g.d,t.a,t.b,t.c)
t=j.gad(j)
g=i.d
h=t.gc2()
s=t.gbv()
t=t.gbG()
g.a.uniform3f(g.d,h,s,t)
t=j.gcC()
s=i.e
s.a.uniform1f(s.d,t)
t=j.gcD()
s=i.f
s.a.uniform1f(s.d,t)
t=j.gcE()
s=i.r
s.a.uniform1f(s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.ez
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga4(v)
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.D)(v),++k){j=v[k]
t=this.a.cR
if(l>=t.length)return H.f(t,l)
i=t[l]
t=j.gbn(j)
s=i.b
h=t.gdk(t)
g=t.gdl(t)
t=t.gdm(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gcO(j).k9()
g=i.c
h=t.gb4(t)
s=t.gb5(t)
t=t.gb6()
g.a.uniform3f(g.d,h,s,t)
t=m.bu(j.gbn(j))
s=i.d
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gad(j)
s=i.e
h=t.gc2()
g=t.gbv()
t=t.gbG()
s.a.uniform3f(s.d,h,g,t)
t=j.gk7()
g=i.f
g.a.uniform1f(g.d,t)
t=j.gk5()
g=i.r
g.a.uniform1f(g.d,t)
t=j.gcC()
g=i.x
g.a.uniform1f(g.d,t)
t=j.gcD()
g=i.y
g.a.uniform1f(g.d,t)
t=j.gcE()
g=i.z
g.a.uniform1f(g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.eA
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga4(v)
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.D)(v),++k){j=v[k]
s=this.a.cS
if(l>=s.length)return H.f(s,l)
i=s[l]
s=j.gbr()
H.q(q,"$isd",t,"$asd")
if(!C.a.X(q,s)){s.sck(q.length)
C.a.h(q,s)}s=j.gcO(j)
h=i.d
g=s.gb4(s)
f=s.gb5(s)
s=s.gb6()
h.a.uniform3f(h.d,g,f,s)
s=j.gc4()
f=i.b
g=s.gb4(s)
h=s.gb5(s)
s=s.gb6()
f.a.uniform3f(f.d,g,h,s)
s=j.gbo(j)
h=i.c
g=s.gb4(s)
f=s.gb5(s)
s=s.gb6()
h.a.uniform3f(h.d,g,f,s)
s=m.dg(j.gcO(j))
f=s.a
g=s.b
h=s.c
h=s.t(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
g.a.uniform3f(g.d,h.a,h.b,h.c)
h=j.gad(j)
g=i.f
f=h.gc2()
s=h.gbv()
h=h.gbG()
g.a.uniform3f(g.d,f,s,h)
h=j.gbr()
s=h.gbZ(h)
if(!s){s=i.x
s.a.uniform1i(s.d,1)}else{s=i.r
g=h.gbZ(h)
f=s.a
s=s.d
if(!g)f.uniform1i(s,0)
else f.uniform1i(s,h.giH(h))
s=i.x
s.a.uniform1i(s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.eB
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga4(v)
for(v=this.dx.y,u=v.length,t=[P.v],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.D)(v),++k){j=v[k]
h=this.a.cT
if(l>=h.length)return H.f(h,l)
i=h[l]
h=j.gbr()
H.q(q,"$isd",s,"$asd")
if(!C.a.X(q,h)){h.sck(q.length)
C.a.h(q,h)}e=m.k(0,j.ga4(j))
h=j.ga4(j).bu(new V.U(0,0,0))
g=i.b
f=h.gdk(h)
d=h.gdl(h)
h=h.gdm(h)
g.a.uniform3f(g.d,f,d,h)
h=e.bu(new V.U(0,0,0))
d=i.c
d.a.uniform3f(d.d,h.a,h.b,h.c)
h=e.cZ(0)
d=i.d
n=new Float32Array(H.bH(H.q(new V.cO(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).ag(0,!0),"$isd",t,"$asd")))
d.a.uniformMatrix3fv(d.d,!1,n)
d=j.gad(j)
h=i.e
f=d.gc2()
g=d.gbv()
d=d.gbG()
h.a.uniform3f(h.d,f,g,d)
d=j.gbr()
h=d.gbZ(d)
if(!h){h=i.r
h.a.uniform1i(h.d,1)}else{h=i.f
g=d.gjs()
f=h.a
h=h.d
if(!(g>=6))f.uniform1i(h,0)
else f.uniform1i(h,d.gck())
h=i.r
h.a.uniform1i(h.d,0)}h=j.gcC()
g=i.x
g.a.uniform1f(g.d,h)
h=j.gcD()
g=i.y
g.a.uniform1f(g.d,h)
h=j.gcE()
g=i.z
g.a.uniform1f(g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.eC
v.a.uniform1i(v.d,p)
v=a.db
m=v.ga4(v)
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.D)(v),++k){j=v[k]
t=this.a.cU
if(l>=t.length)return H.f(t,l)
i=t[l]
t=j.gbr()
H.q(q,"$isd",z,"$asd")
if(!C.a.X(q,t)){t.sck(q.length)
C.a.h(q,t)}t=j.gbn(j)
s=i.b
h=t.gdk(t)
g=t.gdl(t)
t=t.gdm(t)
s.a.uniform3f(s.d,h,g,t)
t=j.gcO(j)
g=i.c
h=t.gb4(t)
s=t.gb5(t)
t=t.gb6()
g.a.uniform3f(g.d,h,s,t)
t=j.gc4()
s=i.d
h=t.gb4(t)
g=t.gb5(t)
t=t.gb6()
s.a.uniform3f(s.d,h,g,t)
t=j.gbo(j)
g=i.e
h=t.gb4(t)
s=t.gb5(t)
t=t.gb6()
g.a.uniform3f(g.d,h,s,t)
t=m.bu(j.gbn(j))
s=i.f
s.a.uniform3f(s.d,t.a,t.b,t.c)
t=j.gbr()
s=t.gbZ(t)
if(!s){t=i.x
t.a.uniform1i(t.d,1)}else{s=i.r
h=t.gbZ(t)
g=s.a
s=s.d
if(!h)g.uniform1i(s,0)
else g.uniform1i(s,t.giH(t))
t=i.x
t.a.uniform1i(t.d,0)}t=j.gad(j)
s=i.y
h=t.gc2()
g=t.gbv()
t=t.gbG()
s.a.uniform3f(s.d,h,g,t)
t=j.gke()
g=i.z
g.a.uniform1f(g.d,t)
t=j.gkf()
g=i.Q
g.a.uniform1f(g.d,t)
t=j.gcC()
g=i.ch
g.a.uniform1f(g.d,t)
t=j.gcD()
g=i.cx
g.a.uniform1f(g.d,t)
t=j.gcE()
g=i.cy
g.a.uniform1f(g.d,t);++l}}}switch(x.f){case C.c:break
case C.i:break
case C.h:this.Z(q,this.Q.d)
z=this.a
v=this.Q.d
z.aq(z.em,z.bQ,v)
break
case C.f:this.Z(q,this.Q.e)
z=this.a
v=this.Q.e
z.ai(z.en,z.bQ,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db
v=v.ga4(v).cZ(0)
a.Q=v}z=z.id
z.toString
z.ao(v.ag(0,!0))}if(x.dy){this.Z(q,this.ch)
z=this.a
v=this.ch
z.ai(z.eo,z.ep,v)
switch(x.r){case C.c:break
case C.i:z=this.a
v=this.cx.f
z=z.bR
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
break
case C.h:this.Z(q,this.cx.d)
z=this.a
v=this.cx.d
z.aq(z.eq,z.bS,v)
v=this.a
z=this.cx.f
v=v.bR
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break
case C.f:this.Z(q,this.cx.e)
z=this.a
v=this.cx.e
z.ai(z.er,z.bS,v)
v=this.a
z=this.cx.f
v=v.bR
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
break}switch(x.x){case C.c:break
case C.i:z=this.a
v=this.cy.f
z=z.bU
z.toString
u=v.a
t=v.b
v=v.c
z.a.uniform3f(z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bT
v.a.uniform1f(v.d,t)
break
case C.h:this.Z(q,this.cy.d)
z=this.a
v=this.cy.d
z.aq(z.es,z.bV,v)
v=this.a
z=this.cy.f
v=v.bU
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bT
z.a.uniform1f(z.d,t)
break
case C.f:this.Z(q,this.cy.e)
z=this.a
v=this.cy.e
z.ai(z.eu,z.bV,v)
v=this.a
z=this.cy.f
v=v.bU
v.toString
u=z.a
t=z.b
z=z.c
v.a.uniform3f(v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bT
z.a.uniform1f(z.d,t)
break}}z=x.y
v=z!==C.c
if(v){switch(z){case C.c:break
case C.i:z=this.a
u=this.db.f
z=z.bW
z.a.uniform1f(z.d,u)
break
case C.h:this.Z(q,this.db.d)
z=this.a
u=this.db.d
z.aq(z.ev,z.bX,u)
u=this.a
z=this.db.f
u=u.bW
u.a.uniform1f(u.d,z)
break
case C.f:this.Z(q,this.db.e)
z=this.a
u=this.db.e
z.ai(z.ew,z.bX,u)
u=this.a
z=this.db.f
u=u.bW
u.a.uniform1f(u.d,z)
break}a.a.enable(3042)
a.a.blendFunc(770,771)}for(o=0;o<q.length;++o)q[o].a3(a)
z=b.e
z.a3(a)
z.af(a)
z.aP(a)
if(v)a.a.disable(3042)
for(o=0;o<q.length;++o){z=q[o]
if(z.c){z.c=!1
a.a.activeTexture(33984+z.a)
a.a.bindTexture(34067,null)}}z=this.a
z.toString
a.a.useProgram(null)
z.x.ef()},
j:function(a){var z=this.a
if(z!=null)return z.b
else return this.dI().as}},jo:{"^":"dw;0f,a,b,0c,0d,0e",
hB:function(a){var z,y
z=this.f
if(!$.p.$2(z,a)){y=this.f
this.f=a
z=new D.O(this.b,y,a,this,[P.v])
z.b=!0
this.a.W(z)}},
aZ:function(){this.du()
this.hB(1)}},dw:{"^":"b;",
W:[function(a){this.a.W(H.e(a,"$isB"))},function(){return this.W(null)},"dB","$1","$0","gaU",0,2,1],
aZ:["du",function(){}],
hD:function(a){},
hE:function(a){var z,y
z=this.e
if(z==null?a!=null:z!==a){if(z!=null)z.gv().H(0,this.gaU())
y=this.e
this.e=a
if(a!=null)a.gv().h(0,this.gaU())
z=new D.O(this.b+".textureCube",y,this.e,this,[T.cS])
z.b=!0
this.a.W(z)}},
sat:function(a){var z=this.c
if(z!==C.f){if(z===C.c)this.aZ()
this.c=C.f
this.hD(null)
z=this.a
z.a=null
z.W(null)}this.hE(a)}},jp:{"^":"dw;a,b,0c,0d,0e"},bp:{"^":"dw;0f,a,b,0c,0d,0e",
dW:function(a){var z,y
if(!J.J(this.f,a)){z=this.f
this.f=a
y=new D.O(this.b+".color",z,a,this,[V.a6])
y.b=!0
this.a.W(y)}},
aZ:["ca",function(){this.du()
this.dW(new V.a6(1,1,1))}],
sad:function(a,b){var z
if(this.c===C.c){this.c=C.i
this.aZ()
z=this.a
z.a=null
z.W(null)}this.dW(b)}},jr:{"^":"bp;0ch,0f,a,b,0c,0d,0e",
hC:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.O(this.b+".refraction",y,a,this,[P.v])
z.b=!0
this.a.W(z)}},
aZ:function(){this.ca()
this.hC(1)}},js:{"^":"bp;0ch,0f,a,b,0c,0d,0e",
cv:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.O(this.b+".shininess",y,a,this,[P.v])
z.b=!0
this.a.W(z)}},
aZ:function(){this.ca()
this.cv(100)}},kl:{"^":"cu;0a,0b,0c,0d,0e",
gv:function(){var z=this.e
if(z==null){z=D.M()
this.e=z}return z},
W:[function(a){var z
H.e(a,"$isB")
z=this.e
if(!(z==null))z.D(a)},function(){return this.W(null)},"dB","$1","$0","gaU",0,2,1],
eX:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.e(a.fr.i(0,"Skybox"),"$isfe")
if(z==null){y=a.a
z=new A.fe(y,"Skybox")
z.dv(y,"Skybox")
z.eM(0,$.kn,$.km)
z.z=z.x.i(0,"posAttr")
z.Q=H.j(z.y.i(0,"fov"),"$isa3")
z.ch=H.j(z.y.i(0,"ratio"),"$isa3")
z.cx=H.j(z.y.i(0,"boxClr"),"$isR")
z.cy=H.j(z.y.i(0,"boxTxt"),"$isau")
z.db=H.j(z.y.i(0,"viewMat"),"$isaW")
a.e7(z)}this.a=z}if(b.e==null){y=b.d.ec(new Z.fV(a.a),$.$get$aI())
y.aM($.$get$aI()).e=this.a.z.c
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
w.cy.dr(x)
x=this.d
y=w.cx
y.toString
v=x.a
u=x.b
x=x.c
y.a.uniform3f(y.d,v,u,x)
x=a.db
x=x.ga4(x).cZ(0)
w=w.db
w.toString
w.ao(x.ag(0,!0))
y=b.e
if(y instanceof Z.de){y.a3(a)
y.af(a)
y.aP(a)}else b.e=null
y=this.a
y.toString
a.a.useProgram(null)
y.x.ef()
y=this.c
if(y!=null)y.aP(a)}},cu:{"^":"b;"}}],["","",,T,{"^":"",dJ:{"^":"da;"},cS:{"^":"dJ;0a,0b,0c,0d,0e",
gv:function(){var z=this.e
if(z==null){z=D.M()
this.e=z}return z},
a3:function(a){if(!this.c&&this.d>=6){this.c=!0
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,this.b)}},
aP:function(a){if(this.c){this.c=!1
a.a.activeTexture(33984+this.a)
a.a.bindTexture(34067,null)}}},kA:{"^":"b;a,0b,0c,0d,0e",
eQ:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
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
r=new T.cS()
r.a=0
r.b=s
r.c=!1
r.d=0
this.aY(r,s,z,34069,!1,!1)
this.aY(r,s,w,34070,!1,!1)
this.aY(r,s,y,34071,!1,!1)
this.aY(r,s,v,34072,!1,!1)
this.aY(r,s,x,34073,!1,!1)
this.aY(r,s,u,34074,!1,!1)
return r},
iP:function(a,b){return this.eQ(a,b,!1,"")},
eP:function(a){return this.eQ(a,".png",!1,"")},
aY:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.ah
W.a8(z,"load",H.l(new T.kB(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
hx:function(a,b,c){var z,y,x,w
b=V.e9(b,2)
z=V.e9(a.width,2)
y=V.e9(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.dg(null,null)
x.width=z
x.height=y
w=H.e(C.l.f7(x,"2d"),"$ises")
w.imageSmoothingEnabled=!1
w.drawImage(a,0,0,x.width,x.height)
return P.nJ(w.getImageData(0,0,x.width,x.height))}}},kB:{"^":"m:13;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.hx(this.b,z.c,this.c)
x=z.a
x.bindTexture(34067,this.d)
x.pixelStorei(37440,this.e?1:0)
C.a4.jj(x,this.f,0,6408,6408,5121,y)
x.bindTexture(34067,null)
x=this.r
if(++x.d===6){x=x.e
if(!(x==null))x.iu()}++z.e}}}],["","",,V,{"^":"",bO:{"^":"b;",
b8:function(a,b){return!0},
j:function(a){return"all"},
$isb1:1},b1:{"^":"b;"},eZ:{"^":"b;",
b8:["fh",function(a,b){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)if(z[x].b8(0,b))return!0
return!1}],
j:["dt",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.D)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.j(0)}return x}],
$isb1:1},aF:{"^":"eZ;0a",
b8:function(a,b){return!this.fh(0,b)},
j:function(a){return"!["+this.dt(0)+"]"}},jW:{"^":"b;0a,0b",
b8:function(a,b){return this.a<=b&&this.b>=b},
j:function(a){var z,y
z=H.bY(this.a)
y=H.bY(this.b)
return z+".."+y},
$isb1:1,
u:{
Z:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.a(P.t("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.b.I(a,0)
y=C.b.I(b,0)
x=new V.jW()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},ka:{"^":"b;0a",
fm:function(a){var z,y
if(a.a.length<=0)throw H.a(P.t("May not create a SetMatcher with zero characters."))
z=new H.be(0,0,[P.n,P.W])
for(y=new H.du(a,a.gn(a),0,[H.al(a,"A",0)]);y.G();)z.l(0,y.d,!0)
this.a=z},
b8:function(a,b){return this.a.bH(0,b)},
j:function(a){var z=this.a
return P.ct(z.gaa(z),0,null)},
$isb1:1,
u:{
x:function(a){var z=new V.ka()
z.fm(a)
return z}}},fg:{"^":"b;a,b,0c,0d",
giR:function(a){return this.b},
p:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.fs(this.a.m(0,b))
w.a=H.c([],[V.b1])
w.c=!1
C.a.h(this.c,w)
return w},
iz:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
if(w.b8(0,a))return w}return},
j:function(a){return this.b}},fp:{"^":"b;a,b,c",
j:function(a){var z,y
z=H.ec(this.b,"\n","\\n")
y=H.ec(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},fq:{"^":"b;a,b,0c",
aO:function(a,b,c){var z,y,x
H.q(c,"$isd",[P.h],"$asd")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.D)(c),++y){x=c[y]
this.c.l(0,x,b)}},
j:function(a){return this.b}},kJ:{"^":"b;0a,0b,0c",
m:function(a,b){var z=this.a.i(0,b)
if(z==null){z=new V.fg(this,b)
z.c=H.c([],[V.fs])
this.a.l(0,b,z)}return z},
R:function(a){var z,y
z=this.b.i(0,a)
if(z==null){z=new V.fq(this,a)
y=P.h
z.c=new H.be(0,0,[y,y])
this.b.l(0,a,z)}return z},
f1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.fp])
y=this.c
x=[P.n]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.I(a,t)
r=y.iz(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.ct(w,0,null)
throw H.a(P.t("Untokenizable string [state: "+y.giR(y)+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.ct(w,0,null)
p=y.d
o=p.c.i(0,q)
u=new V.fp(o==null?p.b:o,q,t)}++t}}},
u:{
cT:function(){var z,y
z=new V.kJ()
y=P.h
z.a=new H.be(0,0,[y,V.fg])
z.b=new H.be(0,0,[y,V.fq])
return z}}},fs:{"^":"eZ;b,0c,0a",
j:function(a){return this.b.b+": "+this.dt(0)}}}],["","",,X,{"^":"",cG:{"^":"b;",$isaR:1},iO:{"^":"dI;0a,0b,0c,0d,0e,0f,0r,0x",
gv:function(){var z=this.x
if(z==null){z=D.M()
this.x=z}return z},
aG:function(a){var z=this.x
if(!(z==null))z.D(a)},
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
v=C.e.am(w.a*y)
if(typeof x!=="number")return H.o(x)
u=C.e.am(w.b*x)
t=C.e.am(w.c*y)
a.c=t
w=C.e.am(w.d*x)
a.d=w
z.viewport(v,u,t,w)
a.a.clearDepth(this.c)
if(this.b){z=a.a
w=this.a
z.clearColor(w.a,w.b,w.c,w.d)
s=16640}else s=256
a.a.clear(s)},
u:{
dk:function(a,b,c,d,e,f,g){var z,y
z=new X.iO()
y=new V.ar(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.fb(0,0,1,1)
z.r=y
return z}}},iT:{"^":"b;0a,0b",
gv:function(){var z=this.b
if(z==null){z=D.M()
this.b=z}return z},
a3:function(a){var z
a.cy.c1(V.bq())
z=V.bq()
a.db.c1(z)},
aP:function(a){a.cy.aN()
a.db.aN()},
$isaR:1,
$iscG:1},jF:{"^":"b;0a,0b,0c,0d,0e,0f",
gv:function(){var z=this.f
if(z==null){z=D.M()
this.f=z}return z},
aG:[function(a){var z
H.e(a,"$isB")
z=this.f
if(!(z==null))z.D(a)},function(){return this.aG(null)},"jB","$1","$0","gh1",0,2,1],
a3:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=this.c
w=this.d
v=this.e
u=v-w
t=1/Math.tan(x*0.5)
s=V.aP(-t/(z/y),0,0,0,0,t,0,0,0,0,v/u,-v*w/u,0,0,1,0)
a.cy.c1(s)
z=$.f7
if(z==null){z=V.f0(new V.U(0,0,0),new V.z(0,1,0),new V.z(0,0,-1))
$.f7=z
r=z}else r=z
z=this.b
if(z!=null){q=z.bd(0,a,this)
if(q!=null)r=q.k(0,r)}a.db.c1(r)},
aP:function(a){a.cy.aN()
a.db.aN()},
$isaR:1,
$iscG:1,
u:{
f6:function(a,b,c,d,e){var z,y,x
z=new X.jF()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
if(null!=c){y=z.b
z.b=c
if(c!=null)c.gv().h(0,z.gh1())
x=new D.O("mover",y,z.b,z,[U.ao])
x.b=!0
z.aG(x)}x=z.c
if(!$.p.$2(x,b)){y=z.c
z.c=b
x=new D.O("fov",y,b,z,[P.v])
x.b=!0
z.aG(x)}x=z.d
if(!$.p.$2(x,d)){y=z.d
z.d=d
x=new D.O("near",y,d,z,[P.v])
x.b=!0
z.aG(x)}x=z.e
if(!$.p.$2(x,a)){y=z.e
z.e=a
x=new D.O("far",y,a,z,[P.v])
x.b=!0
z.aG(x)}return z}}},dI:{"^":"b;"}}],["","",,V,{"^":"",
on:function(a){P.kI(C.N,new V.oo(a))},
bb:{"^":"b;",
bx:function(a){this.b=new P.iR(C.O)
this.c=null
this.d=H.c([],[[P.d,W.bk]])},
N:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.c([],[W.bk]))
y=a.split("\n")
for(z=y.length,x=[W.bk],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.c([],x))
t=document.createElement("div")
t.className="codePart"
H.I(u)
s=this.b.fJ(u,0,u.length)
r=s==null?u:s
C.M.fb(t,H.ec(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gaA(this.d),t)}},
eV:function(a,b){var z,y,x,w
H.q(b,"$isd",[P.h],"$asd")
this.d=H.c([],[[P.d,W.bk]])
z=C.a.p(b,"\n")
y=this.c
if(y==null){y=this.bI()
this.c=y}for(y=y.f1(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)this.c0(y[w])}},
oo:{"^":"m:54;a",
$1:function(a){H.e(a,"$isbA")
P.ea(C.e.f0(this.a.giF(),2)+" fps")}},
iu:{"^":"bb;a,0b,0c,0d",
c0:function(a){switch(a.a){case"Class":this.N(a.b,"#551")
break
case"Comment":this.N(a.b,"#777")
break
case"Id":this.N(a.b,"#111")
break
case"Num":this.N(a.b,"#191")
break
case"Reserved":this.N(a.b,"#119")
break
case"String":this.N(a.b,"#171")
break
case"Symbol":this.N(a.b,"#616")
break
case"Type":this.N(a.b,"#B11")
break
case"Whitespace":this.N(a.b,"#111")
break}},
bI:function(){var z,y,x,w
z=V.cT()
z.c=z.m(0,"Start")
y=z.m(0,"Start").p(0,"Id")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
x=V.Z("a","z")
C.a.h(y.a,x)
x=V.Z("A","Z")
C.a.h(y.a,x)
x=z.m(0,"Id").p(0,"Id")
y=V.x(new H.w("_"))
C.a.h(x.a,y)
y=V.Z("0","9")
C.a.h(x.a,y)
y=V.Z("a","z")
C.a.h(x.a,y)
y=V.Z("A","Z")
C.a.h(x.a,y)
y=z.m(0,"Start").p(0,"Int")
x=V.Z("0","9")
C.a.h(y.a,x)
x=z.m(0,"Int").p(0,"Int")
y=V.Z("0","9")
C.a.h(x.a,y)
y=z.m(0,"Int").p(0,"FloatDot")
x=V.x(new H.w("."))
C.a.h(y.a,x)
x=z.m(0,"FloatDot").p(0,"Float")
y=V.Z("0","9")
C.a.h(x.a,y)
y=z.m(0,"Float").p(0,"Float")
x=V.Z("0","9")
C.a.h(y.a,x)
x=z.m(0,"Start").p(0,"Sym")
y=V.x(new H.w("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.m(0,"Sym").p(0,"Sym")
x=V.x(new H.w("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.m(0,"Start").p(0,"OpenDoubleStr")
y=V.x(new H.w('"'))
C.a.h(x.a,y)
y=z.m(0,"OpenDoubleStr").p(0,"CloseDoubleStr")
x=V.x(new H.w('"'))
C.a.h(y.a,x)
x=z.m(0,"OpenDoubleStr").p(0,"EscDoubleStr")
y=V.x(new H.w("\\"))
C.a.h(x.a,y)
y=z.m(0,"EscDoubleStr").p(0,"OpenDoubleStr")
x=V.x(new H.w('"'))
C.a.h(y.a,x)
C.a.h(z.m(0,"OpenDoubleStr").p(0,"OpenDoubleStr").a,new V.bO())
x=z.m(0,"Start").p(0,"OpenSingleStr")
y=V.x(new H.w("'"))
C.a.h(x.a,y)
y=z.m(0,"OpenSingleStr").p(0,"CloseSingleStr")
x=V.x(new H.w("'"))
C.a.h(y.a,x)
x=z.m(0,"OpenSingleStr").p(0,"EscSingleStr")
y=V.x(new H.w("\\"))
C.a.h(x.a,y)
y=z.m(0,"EscSingleStr").p(0,"OpenSingleStr")
x=V.x(new H.w("'"))
C.a.h(y.a,x)
C.a.h(z.m(0,"OpenSingleStr").p(0,"OpenSingleStr").a,new V.bO())
x=z.m(0,"Start").p(0,"Slash")
y=V.x(new H.w("/"))
C.a.h(x.a,y)
y=z.m(0,"Slash").p(0,"Comment")
x=V.x(new H.w("/"))
C.a.h(y.a,x)
x=z.m(0,"Comment").p(0,"EndComment")
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.m(0,"Comment").p(0,"Comment")
x=new V.aF()
w=[V.b1]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.m(0,"Slash").p(0,"MLComment")
x=V.x(new H.w("*"))
C.a.h(y.a,x)
x=z.m(0,"MLComment").p(0,"MLCStar")
y=V.x(new H.w("*"))
C.a.h(x.a,y)
y=z.m(0,"MLCStar").p(0,"MLComment")
x=new V.aF()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("*"))
C.a.h(x.a,y)
y=z.m(0,"MLCStar").p(0,"EndComment")
x=V.x(new H.w("/"))
C.a.h(y.a,x)
x=z.m(0,"Start").p(0,"Whitespace")
y=V.x(new H.w(" \n\t"))
C.a.h(x.a,y)
y=z.m(0,"Whitespace").p(0,"Whitespace")
x=V.x(new H.w(" \n\t"))
C.a.h(y.a,x)
x=z.m(0,"Int")
x.d=x.a.R("Num")
x=z.m(0,"Float")
x.d=x.a.R("Num")
x=z.m(0,"Sym")
x.d=x.a.R("Symbol")
x=z.m(0,"CloseDoubleStr")
x.d=x.a.R("String")
x=z.m(0,"CloseSingleStr")
x.d=x.a.R("String")
x=z.m(0,"EndComment")
x.d=x.a.R("Comment")
x=z.m(0,"Whitespace")
x.d=x.a.R("Whitespace")
x=z.m(0,"Id")
y=x.a.R("Id")
x.d=y
x=[P.h]
y.aO(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.aO(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.aO(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
iP:{"^":"bb;a,0b,0c,0d",
c0:function(a){switch(a.a){case"Builtin":this.N(a.b,"#411")
break
case"Comment":this.N(a.b,"#777")
break
case"Id":this.N(a.b,"#111")
break
case"Num":this.N(a.b,"#191")
break
case"Preprocess":this.N(a.b,"#737")
break
case"Reserved":this.N(a.b,"#119")
break
case"Symbol":this.N(a.b,"#611")
break
case"Type":this.N(a.b,"#171")
break
case"Whitespace":this.N(a.b,"#111")
break}},
bI:function(){var z,y,x,w
z=V.cT()
z.c=z.m(0,"Start")
y=z.m(0,"Start").p(0,"Id")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
x=V.Z("a","z")
C.a.h(y.a,x)
x=V.Z("A","Z")
C.a.h(y.a,x)
x=z.m(0,"Id").p(0,"Id")
y=V.x(new H.w("_"))
C.a.h(x.a,y)
y=V.Z("0","9")
C.a.h(x.a,y)
y=V.Z("a","z")
C.a.h(x.a,y)
y=V.Z("A","Z")
C.a.h(x.a,y)
y=z.m(0,"Start").p(0,"Int")
x=V.Z("0","9")
C.a.h(y.a,x)
x=z.m(0,"Int").p(0,"Int")
y=V.Z("0","9")
C.a.h(x.a,y)
y=z.m(0,"Int").p(0,"FloatDot")
x=V.x(new H.w("."))
C.a.h(y.a,x)
x=z.m(0,"FloatDot").p(0,"Float")
y=V.Z("0","9")
C.a.h(x.a,y)
y=z.m(0,"Float").p(0,"Float")
x=V.Z("0","9")
C.a.h(y.a,x)
x=z.m(0,"Start").p(0,"Sym")
y=V.x(new H.w("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.m(0,"Sym").p(0,"Sym")
x=V.x(new H.w("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.m(0,"Start").p(0,"Slash")
y=V.x(new H.w("/"))
C.a.h(x.a,y)
y=z.m(0,"Slash").p(0,"Comment")
x=V.x(new H.w("/"))
C.a.h(y.a,x)
C.a.h(z.m(0,"Slash").p(0,"Sym").a,new V.bO())
x=z.m(0,"Comment").p(0,"EndComment")
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.m(0,"Comment").p(0,"Comment")
x=new V.aF()
w=[V.b1]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.m(0,"Start").p(0,"Preprocess")
x=V.x(new H.w("#"))
C.a.h(y.a,x)
x=z.m(0,"Preprocess").p(0,"Preprocess")
y=new V.aF()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.x(new H.w("\n"))
C.a.h(y.a,x)
x=z.m(0,"Preprocess").p(0,"EndPreprocess")
y=V.x(new H.w("\n"))
C.a.h(x.a,y)
y=z.m(0,"Start").p(0,"Whitespace")
x=V.x(new H.w(" \n\t"))
C.a.h(y.a,x)
x=z.m(0,"Whitespace").p(0,"Whitespace")
y=V.x(new H.w(" \n\t"))
C.a.h(x.a,y)
y=z.m(0,"Int")
y.d=y.a.R("Num")
y=z.m(0,"Float")
y.d=y.a.R("Num")
y=z.m(0,"Sym")
y.d=y.a.R("Symbol")
y=z.m(0,"EndComment")
y.d=y.a.R("Comment")
y=z.m(0,"EndPreprocess")
y.d=y.a.R("Preprocess")
y=z.m(0,"Whitespace")
y.d=y.a.R("Whitespace")
y=z.m(0,"Id")
x=y.a.R("Id")
y.d=x
y=[P.h]
x.aO(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.aO(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.aO(0,"Builtin",H.c(["gl_FragColor","gl_Position"],y))
return z}},
iQ:{"^":"bb;a,0b,0c,0d",
c0:function(a){switch(a.a){case"Attr":this.N(a.b,"#911")
this.N("=","#111")
break
case"Id":this.N(a.b,"#111")
break
case"Other":this.N(a.b,"#111")
break
case"Reserved":this.N(a.b,"#119")
break
case"String":this.N(a.b,"#171")
break
case"Symbol":this.N(a.b,"#616")
break}},
bI:function(){var z,y,x
z=V.cT()
z.c=z.m(0,"Start")
y=z.m(0,"Start").p(0,"Id")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
x=V.Z("a","z")
C.a.h(y.a,x)
x=V.Z("A","Z")
C.a.h(y.a,x)
x=z.m(0,"Id").p(0,"Id")
y=V.x(new H.w("_"))
C.a.h(x.a,y)
y=V.Z("0","9")
C.a.h(x.a,y)
y=V.Z("a","z")
C.a.h(x.a,y)
y=V.Z("A","Z")
C.a.h(x.a,y)
y=z.m(0,"Id").p(0,"Attr")
x=V.x(new H.w("="))
C.a.h(y.a,x)
y.c=!0
y=z.m(0,"Start").p(0,"Sym")
x=V.x(new H.w("</\\-!>="))
C.a.h(y.a,x)
x=z.m(0,"Sym").p(0,"Sym")
y=V.x(new H.w("</\\-!>="))
C.a.h(x.a,y)
y=z.m(0,"Start").p(0,"OpenStr")
x=V.x(new H.w('"'))
C.a.h(y.a,x)
x=z.m(0,"OpenStr").p(0,"CloseStr")
y=V.x(new H.w('"'))
C.a.h(x.a,y)
y=z.m(0,"OpenStr").p(0,"EscStr")
x=V.x(new H.w("\\"))
C.a.h(y.a,x)
x=z.m(0,"EscStr").p(0,"OpenStr")
y=V.x(new H.w('"'))
C.a.h(x.a,y)
C.a.h(z.m(0,"OpenStr").p(0,"OpenStr").a,new V.bO())
C.a.h(z.m(0,"Start").p(0,"Other").a,new V.bO())
y=z.m(0,"Other").p(0,"Other")
x=new V.aF()
x.a=H.c([],[V.b1])
C.a.h(y.a,x)
y=V.x(new H.w('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.Z("a","z")
C.a.h(x.a,y)
y=V.Z("A","Z")
C.a.h(x.a,y)
y=z.m(0,"Sym")
y.d=y.a.R("Symbol")
y=z.m(0,"CloseStr")
y.d=y.a.R("String")
y=z.m(0,"Id")
x=y.a.R("Id")
y.d=x
x.aO(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
x=z.m(0,"Attr")
x.d=x.a.R("Attr")
x=z.m(0,"Other")
x.d=x.a.R("Other")
return z}},
jH:{"^":"bb;a,0b,0c,0d",
eV:function(a,b){H.q(b,"$isd",[P.h],"$asd")
this.d=H.c([],[[P.d,W.bk]])
this.N(C.a.p(b,"\n"),"#111")},
c0:function(a){},
bI:function(){return}},
jU:{"^":"b;a,b,0c",
bD:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.l(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.fM().gd9().i(0,H.k(z))
if(y==null)if(d){c.$0()
this.e0(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.eg(this.c).h(0,v)
t=W.iV("radio")
t.checked=x
t.name=z
z=W.ah
W.a8(t,"change",H.l(new V.jV(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
v.appendChild(t)
s=w.createElement("span")
s.textContent=b
v.appendChild(s)
J.eg(this.c).h(0,w.createElement("br"))},
ax:function(a,b,c){return this.bD(a,b,c,!1)},
e0:function(a){var z,y,x,w,v
z=P.fM()
y=P.h
x=P.jb(z.gd9(),y,y)
x.l(0,this.a,a)
w=z.eY(0,x)
y=window.history
v=w.j(0)
y.toString
y.replaceState(new P.mA([],[]).dh(""),"",v)}},
jV:{"^":"m:13;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.e0(this.d)}}},
kf:{"^":"b;0a,0b",
fn:function(a,b){var z,y,x,w,v,u,t
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
t=W.ah
W.a8(z,"scroll",H.l(new V.ki(x),{func:1,ret:-1,args:[t]}),!1,t)},
e6:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.q(a,"$isd",[P.h],"$asd")
this.hH()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.f1(C.a.iM(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v){u=x[v]
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
if(H.hR(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.f(r,1)
q.href=r[1]
q.textContent=r[0]
y.appendChild(q)}else{p=P.cy(C.B,s,C.k,!1)
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
f6:function(a){var z,y,x,w
z=new V.iu("dart")
z.bx("dart")
y=new V.iP("glsl")
y.bx("glsl")
x=new V.iQ("html")
x.bx("html")
w=C.a.iA(H.c([z,y,x],[V.bb]),new V.kj(a))
if(w!=null)return w
z=new V.jH("plain")
z.bx("plain")
return z},
e2:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.q(a2,"$isd",[P.h],"$asd")
z=H.c([],[P.n])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.cc(w).a8(w,"+")){C.a.l(a2,x,C.b.av(w,1))
C.a.h(z,1)
y=!0}else if(C.b.a8(w,"-")){C.a.l(a2,x,C.b.av(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.f6(a0)
v.eV(0,a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
t.appendChild(s)
this.a.appendChild(t)
r=P.cy(C.B,a,C.k,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.ei(null)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.D)(w),++e)f.appendChild(w[e])
j.appendChild(i)
j.appendChild(h)
j.appendChild(f)
s.appendChild(j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.D)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.ga2(w);b.G();)h.appendChild(b.gO(b))
j.appendChild(i)
j.appendChild(h)
s.appendChild(j)}},
ia:function(a){var z,y,x,w,v,u,t
H.q(a,"$isd",[P.h],"$asd")
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
x=H.e(w.insertCell(-1),"$isdH").style
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
t=H.e(w.insertCell(-1),"$isdH")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
t.appendChild(u)}},
hH:function(){var z,y,x,w
if(this.b!=null)return
z=V.cT()
z.c=z.m(0,"Start")
y=z.m(0,"Start").p(0,"Bold")
x=V.x(new H.w("*"))
C.a.h(y.a,x)
y.c=!0
y=z.m(0,"Bold").p(0,"Bold")
x=new V.aF()
w=[V.b1]
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("*"))
C.a.h(x.a,y)
y=z.m(0,"Bold").p(0,"BoldEnd")
x=V.x(new H.w("*"))
C.a.h(y.a,x)
y.c=!0
y=z.m(0,"Start").p(0,"Italic")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
y.c=!0
y=z.m(0,"Italic").p(0,"Italic")
x=new V.aF()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("_"))
C.a.h(x.a,y)
y=z.m(0,"Italic").p(0,"ItalicEnd")
x=V.x(new H.w("_"))
C.a.h(y.a,x)
y.c=!0
y=z.m(0,"Start").p(0,"Code")
x=V.x(new H.w("`"))
C.a.h(y.a,x)
y.c=!0
y=z.m(0,"Code").p(0,"Code")
x=new V.aF()
x.a=H.c([],w)
C.a.h(y.a,x)
y=V.x(new H.w("`"))
C.a.h(x.a,y)
y=z.m(0,"Code").p(0,"CodeEnd")
x=V.x(new H.w("`"))
C.a.h(y.a,x)
y.c=!0
y=z.m(0,"Start").p(0,"LinkHead")
x=V.x(new H.w("["))
C.a.h(y.a,x)
y.c=!0
y=z.m(0,"LinkHead").p(0,"LinkTail")
x=V.x(new H.w("|"))
C.a.h(y.a,x)
x=z.m(0,"LinkHead").p(0,"LinkEnd")
y=V.x(new H.w("]"))
C.a.h(x.a,y)
x.c=!0
x=z.m(0,"LinkHead").p(0,"LinkHead")
y=new V.aF()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.x(new H.w("|]"))
C.a.h(y.a,x)
x=z.m(0,"LinkTail").p(0,"LinkEnd")
y=V.x(new H.w("]"))
C.a.h(x.a,y)
x.c=!0
x=z.m(0,"LinkTail").p(0,"LinkTail")
y=new V.aF()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.x(new H.w("|]"))
C.a.h(y.a,x)
C.a.h(z.m(0,"Start").p(0,"Other").a,new V.bO())
x=z.m(0,"Other").p(0,"Other")
y=new V.aF()
y.a=H.c([],w)
C.a.h(x.a,y)
x=V.x(new H.w("*_`["))
C.a.h(y.a,x)
x=z.m(0,"BoldEnd")
x.d=x.a.R("Bold")
x=z.m(0,"ItalicEnd")
x.d=x.a.R("Italic")
x=z.m(0,"CodeEnd")
x.d=x.a.R("Code")
x=z.m(0,"LinkEnd")
x.d=x.a.R("Link")
x=z.m(0,"Other")
x.d=x.a.R("Other")
this.b=z},
u:{
kg:function(a,b){var z=new V.kf()
z.fn(a,!0)
return z}}},
ki:{"^":"m:13;a",
$1:function(a){P.fn(C.q,new V.kh(this.a))}},
kh:{"^":"m:0;a",
$0:function(){var z,y,x
z=C.e.am(document.documentElement.scrollTop)
y=this.a.style
x=H.k(-0.01*z)+"px"
y.top=x}},
kj:{"^":"m:55;a",
$1:function(a){return H.e(a,"$isbb").a===this.a}}}],["","",,T,{"^":"",
hL:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
z=V.kg("Test 017",!0)
y=W.dg(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
z.a.appendChild(y)
x=[P.h]
z.e6(H.c(["A test of the Material Lighting shader with solid color directional light, cube mapped textures, and a reflection map. The specular map is also used to define where reflections are painted."],x))
z.ia(H.c(["shapes"],x))
z.e6(H.c(["\xab[Back to Tests|../]"],x))
x=document
w=x.getElementById("testCanvas")
if(w==null)H.r(P.t("Failed to find an element with the identifier, testCanvas."))
v=E.kG(w,!0,!0,!0,!1)
u=E.eJ(null,!0,null,"",null,null)
u.sab(0,F.hQ(8,null,8))
t=X.dk(!0,!0,!1,null,2000,null,0)
if(t.b){t.b=!1
s=new D.O("clearColor",!0,!1,t,[P.W])
s.b=!0
t.aG(s)}r=v.f.iP("../resources/maskonaive",".jpg")
q=v.f.eP("../resources/earthSpecular")
p=v.f.eP("../resources/earthColor")
o=new O.jm()
s=O.dh(V.aO)
o.e=s
s.be(o.gfZ(),o.gh_())
s=new O.bp(o,"emission")
s.c=C.c
s.f=new V.a6(0,0,0)
o.f=s
s=new O.bp(o,"ambient")
s.c=C.c
s.f=new V.a6(0,0,0)
o.r=s
s=new O.bp(o,"diffuse")
s.c=C.c
s.f=new V.a6(0,0,0)
o.x=s
s=new O.bp(o,"invDiffuse")
s.c=C.c
s.f=new V.a6(0,0,0)
o.y=s
s=new O.js(o,"specular")
s.c=C.c
s.f=new V.a6(0,0,0)
s.ch=100
o.z=s
s=new O.jp(o,"bump")
s.c=C.c
o.Q=s
o.ch=null
s=new O.bp(o,"reflect")
s.c=C.c
s.f=new V.a6(0,0,0)
o.cx=s
s=new O.jr(o,"refract")
s.c=C.c
s.f=new V.a6(0,0,0)
s.ch=1
o.cy=s
s=new O.jo(o,"alpha")
s.c=C.c
s.f=1
o.db=s
s=new D.j3()
s.by(D.a9)
s.e=H.c([],[D.cI])
s.f=H.c([],[D.jI])
s.r=H.c([],[D.kr])
s.x=H.c([],[D.kC])
s.y=H.c([],[D.kD])
s.z=H.c([],[D.kE])
s.Q=null
s.ch=null
s.dq(s.gfY(),s.ghh(),s.ghj())
o.dx=s
n=s.Q
if(n==null){n=D.M()
s.Q=n
s=n}else s=n
s.h(0,o.ghv())
s=o.dx
n=s.ch
if(n==null){n=D.M()
s.ch=n
s=n}else s=n
n=o.gaU()
s.h(0,n)
o.dy=null
s=o.dx
m=U.ew(V.f0(new V.U(0,0,0),new V.z(0,1,0),new V.z(-1,-1,-1)))
l=new V.a6(1,1,1)
k=new D.cI()
k.c=new V.a6(1,1,1)
k.a=new V.z(0,0,1)
j=k.b
k.b=m
m.gv().h(0,k.gfu())
m=new D.O("mover",j,k.b,k,[U.ao])
m.b=!0
k.aS(m)
if(!k.c.A(0,l)){j=k.c
k.c=l
m=new D.O("color",j,l,k,[V.a6])
m.b=!0
k.aS(m)}s.h(0,k)
s=o.r
s.sad(0,new V.a6(0.5,0.5,0.5))
s=o.x
s.sad(0,new V.a6(0.5,0.5,0.5))
o.r.sat(p)
o.x.sat(p)
o.z.sat(q)
s=o.ch
if(s!==r){if(s!=null)s.gv().H(0,n)
j=o.ch
o.ch=r
r.gv().h(0,n)
s=new D.O("environment",j,o.ch,o,[T.cS])
s.b=!0
o.W(s)}o.cx.sat(q)
s=o.cx
s.sad(0,new V.a6(0.5,0.5,0.5))
s=o.z
if(s.c===C.c){s.c=C.i
s.ca()
s.cv(100)
n=s.a
n.a=null
n.W(null)}s.cv(10)
i=new U.eM()
i.by(U.ao)
i.be(i.gfX(),i.ghi())
i.e=null
i.f=V.bq()
i.r=0
s=v.r
n=new U.la()
m=U.di()
m.sdj(0,!0)
m.sd0(6.283185307179586)
m.sd2(0)
m.sa_(0,0)
m.sd1(100)
m.sV(0)
m.scN(0.5)
n.b=m
k=n.gaT()
m.gv().h(0,k)
m=U.di()
m.sdj(0,!0)
m.sd0(6.283185307179586)
m.sd2(0)
m.sa_(0,0)
m.sd1(100)
m.sV(0)
m.scN(0.5)
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
h=new X.aQ(!1,!1,!1)
j=n.d
n.d=h
m=[X.aQ]
k=new D.O("modifiers",j,h,n,m)
k.b=!0
n.T(k)
k=n.f
if(k!==!1){n.f=!1
k=new D.O("invertX",k,!1,n,[P.W])
k.b=!0
n.T(k)}k=n.r
if(k!==!1){n.r=!1
k=new D.O("invertY",k,!1,n,[P.W])
k.b=!0
n.T(k)}n.bh(s)
i.h(0,n)
s=v.r
n=new U.l9()
k=U.di()
k.sdj(0,!0)
k.sd0(6.283185307179586)
k.sd2(0)
k.sa_(0,0)
k.sd1(100)
k.sV(0)
k.scN(0.2)
n.b=k
k.gv().h(0,n.gaT())
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
h=new X.aQ(!0,!1,!1)
j=n.c
n.c=h
k=new D.O("modifiers",j,h,n,m)
k.b=!0
n.T(k)
n.bh(s)
i.h(0,n)
s=v.r
n=new U.lb()
n.c=0.01
n.d=0
n.e=0
h=new X.aQ(!1,!1,!1)
n.b=h
m=new D.O("modifiers",null,h,n,m)
m.b=!0
n.T(m)
n.bh(s)
i.h(0,n)
i.h(0,U.ew(V.aP(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
g=X.f6(2000,1.0471975511965976,i,0.1,null)
f=new M.iq()
f.sbi(null)
f.sbp(0,null)
f.sbq(null)
s=E.eJ(null,!0,null,"",null,null)
e=F.cr()
n=e.a
m=new V.z(-1,-1,1)
m=m.t(0,Math.sqrt(m.B(m)))
d=n.bE(new V.aT(1,2,4,6),new V.ar(1,0,0,1),new V.U(-1,-1,0),new V.Q(0,1),m,null)
n=e.a
m=new V.z(1,-1,1)
m=m.t(0,Math.sqrt(m.B(m)))
c=n.bE(new V.aT(0,3,4,6),new V.ar(0,0,1,1),new V.U(1,-1,0),new V.Q(1,1),m,null)
n=e.a
m=new V.z(1,1,1)
m=m.t(0,Math.sqrt(m.B(m)))
b=n.bE(new V.aT(0,2,5,6),new V.ar(0,1,0,1),new V.U(1,1,0),new V.Q(1,0),m,null)
n=e.a
m=new V.z(-1,1,1)
m=m.t(0,Math.sqrt(m.B(m)))
a=n.bE(new V.aT(0,2,4,7),new V.ar(1,1,0,1),new V.U(-1,1,0),new V.Q(0,0),m,null)
e.d.e4(H.c([d,c,b,a],[F.ag]))
e.aj()
s.sab(0,e)
f.d=s
f.e=null
s=new O.kl()
s.b=1.0471975511965976
j=s.c
s.c=r
r.gv().h(0,s.gaU())
n=new D.O("boxTexture",j,s.c,s,[T.cS])
n.b=!0
s.W(n)
p=new V.a6(1,1,1)
if(!J.J(s.d,p)){j=s.d
s.d=p
n=new D.O("boxColor",j,p,s,[V.a6])
n.b=!0
s.W(n)}s.e=null
f.sbq(s)
f.sbp(0,t)
f.sbi(g)
a0=new M.iF()
s=O.dh(E.b0)
a0.d=s
s.be(a0.gh2(),a0.gh3())
a0.e=null
a0.f=null
a0.r=null
a0.x=null
a0.sbi(null)
a0.sbp(0,null)
a0.sbq(null)
a0.sbi(g)
a0.sbq(o)
a0.sbp(0,t)
a0.d.h(0,u)
s=M.aU
n=H.c([f,a0],[s])
m=new M.ik()
m.by(s)
m.e=!1
m.f=null
m.be(m.ghk(),m.ghl())
m.ac(0,n)
s=v.d
if(s!==m){if(s!=null)s.gv().H(0,v.gdz())
v.d=m
m.gv().h(0,v.gdz())
v.fp()}s=new V.jU("shapes",!0)
x=x.getElementById("shapes")
s.c=x
if(x==null)H.r("Failed to find shapes for RadioGroup")
s.ax(0,"Cube",new T.o8(u))
s.ax(0,"Cuboid",new T.o9(u))
s.ax(0,"Cylinder",new T.oa(u))
s.ax(0,"Cone",new T.ob(u))
s.ax(0,"LatLonSphere",new T.oc(u))
s.ax(0,"IsoSphere",new T.od(u))
s.bD(0,"Sphere",new T.oe(u),!0)
s.ax(0,"Toroid",new T.of(u))
s.ax(0,"Knot",new T.og(u))
x=v.z
if(x==null){x=D.M()
v.z=x}s={func:1,ret:-1,args:[D.B]}
n=H.l(new T.oh(z,o),s)
m=x.b
if(m==null){s=H.c([],[s])
x.b=s
x=s}else x=m
C.a.h(x,n)
V.on(v)},
o8:{"^":"m:0;a",
$0:function(){this.a.sab(0,F.e3(1,null,null,1))}},
o9:{"^":"m:0;a",
$0:function(){this.a.sab(0,F.e3(8,null,null,8))}},
oa:{"^":"m:0;a",
$0:function(){this.a.sab(0,F.hz(1,!0,!0,1,40,1))}},
ob:{"^":"m:0;a",
$0:function(){this.a.sab(0,F.hz(1,!0,!1,1,40,0))}},
oc:{"^":"m:0;a",
$0:function(){this.a.sab(0,F.o5(10,20))}},
od:{"^":"m:0;a",
$0:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=F.cr()
y=Math.sqrt(5)/2+0.5
x=F.ak(z,new V.z(-1,y,0))
w=F.ak(z,new V.z(1,y,0))
v=-y
u=F.ak(z,new V.z(-1,v,0))
t=F.ak(z,new V.z(1,v,0))
s=F.ak(z,new V.z(0,-1,v))
r=F.ak(z,new V.z(0,1,v))
q=F.ak(z,new V.z(0,-1,y))
p=F.ak(z,new V.z(0,1,y))
o=F.ak(z,new V.z(y,0,1))
n=F.ak(z,new V.z(y,0,-1))
m=F.ak(z,new V.z(v,0,1))
l=F.ak(z,new V.z(v,0,-1))
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
z.eR(new F.dQ(),new F.lo())
this.a.sab(0,z)}},
oe:{"^":"m:0;a",
$0:function(){this.a.sab(0,F.hQ(6,null,6))}},
of:{"^":"m:0;a",
$0:function(){this.a.sab(0,F.os(30,1,15,0.5))}},
og:{"^":"m:0;a",
$0:function(){this.a.sab(0,F.o3(120,1,2,12,0.3,3))}},
oh:{"^":"m:11;a,b",
$1:function(a){var z,y,x,w
H.e(a,"$isB")
z=this.a
y=this.b
x=y.a
w=[P.h]
z.e2("Vertex Shader","glsl",0,H.c((x==null?null:x.c).split("\n"),w))
y=y.a
z.e2("Fragment Shader","glsl",0,H.c((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.L=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eR.prototype
return J.eQ.prototype}if(typeof a=="string")return J.cn.prototype
if(a==null)return J.eS.prototype
if(typeof a=="boolean")return J.iZ.prototype
if(a.constructor==Array)return J.bo.prototype
if(typeof a!="object"){if(typeof a=="function")return J.co.prototype
return a}if(a instanceof P.b)return a
return J.d3(a)}
J.aB=function(a){if(typeof a=="string")return J.cn.prototype
if(a==null)return a
if(a.constructor==Array)return J.bo.prototype
if(typeof a!="object"){if(typeof a=="function")return J.co.prototype
return a}if(a instanceof P.b)return a
return J.d3(a)}
J.cb=function(a){if(a==null)return a
if(a.constructor==Array)return J.bo.prototype
if(typeof a!="object"){if(typeof a=="function")return J.co.prototype
return a}if(a instanceof P.b)return a
return J.d3(a)}
J.hD=function(a){if(typeof a=="number")return J.cm.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cw.prototype
return a}
J.hE=function(a){if(typeof a=="number")return J.cm.prototype
if(typeof a=="string")return J.cn.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cw.prototype
return a}
J.cc=function(a){if(typeof a=="string")return J.cn.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cw.prototype
return a}
J.aJ=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.co.prototype
return a}if(a instanceof P.b)return a
return J.d3(a)}
J.J=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.L(a).A(a,b)}
J.aK=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.hD(a).an(a,b)}
J.hT=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.hD(a).K(a,b)}
J.ed=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.hE(a).k(a,b)}
J.ee=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.hI(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aB(a).i(a,b)}
J.d8=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.hI(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.cb(a).l(a,b,c)}
J.hU=function(a,b){return J.cc(a).I(a,b)}
J.hV=function(a,b,c){return J.aJ(a).hs(a,b,c)}
J.hW=function(a,b,c,d){return J.aJ(a).e3(a,b,c,d)}
J.hX=function(a,b){return J.cc(a).a1(a,b)}
J.hY=function(a,b){return J.hE(a).b3(a,b)}
J.d9=function(a,b,c){return J.aB(a).im(a,b,c)}
J.cC=function(a,b){return J.cb(a).J(a,b)}
J.hZ=function(a,b,c,d){return J.cb(a).aL(a,b,c,d)}
J.ef=function(a,b){return J.cb(a).M(a,b)}
J.i_=function(a){return J.aJ(a).gii(a)}
J.eg=function(a){return J.aJ(a).gcK(a)}
J.ce=function(a){return J.L(a).gY(a)}
J.ba=function(a){return J.cb(a).ga2(a)}
J.aq=function(a){return J.aB(a).gn(a)}
J.i0=function(a){return J.aJ(a).gd6(a)}
J.i1=function(a){return J.aJ(a).gji(a)}
J.eh=function(a){return J.cb(a).j7(a)}
J.i2=function(a,b){return J.aJ(a).jb(a,b)}
J.i3=function(a,b){return J.aJ(a).sa7(a,b)}
J.i4=function(a,b,c){return J.cc(a).w(a,b,c)}
J.i5=function(a){return J.cc(a).jo(a)}
J.ae=function(a){return J.L(a).j(a)}
I.ac=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.v=W.cE.prototype
C.l=W.df.prototype
C.M=W.bk.prototype
C.P=J.u.prototype
C.a=J.bo.prototype
C.Q=J.eQ.prototype
C.d=J.eR.prototype
C.w=J.eS.prototype
C.e=J.cm.prototype
C.b=J.cn.prototype
C.X=J.co.prototype
C.a2=H.dB.prototype
C.a3=W.jz.prototype
C.E=J.jG.prototype
C.a4=P.dD.prototype
C.F=W.ky.prototype
C.u=J.cw.prototype
C.G=W.c2.prototype
C.H=W.lv.prototype
C.J=new P.ia(!1)
C.I=new P.i9(C.J)
C.K=new P.jE()
C.L=new P.lj()
C.j=new P.mi()
C.c=new A.cH(0,"ColorSourceType.None")
C.i=new A.cH(1,"ColorSourceType.Solid")
C.h=new A.cH(2,"ColorSourceType.Texture2D")
C.f=new A.cH(3,"ColorSourceType.TextureCube")
C.q=new P.aN(0)
C.N=new P.aN(5e6)
C.O=new P.iS("element",!0,!1,!1,!1)
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
C.z=H.c(I.ac([127,2047,65535,1114111]),[P.n])
C.m=H.c(I.ac([0,0,32776,33792,1,10240,0,0]),[P.n])
C.Y=H.c(I.ac(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.n=H.c(I.ac([0,0,65490,45055,65535,34815,65534,18431]),[P.n])
C.o=H.c(I.ac([0,0,26624,1023,65534,2047,65534,2047]),[P.n])
C.Z=H.c(I.ac(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.A=H.c(I.ac([]),[P.h])
C.a_=H.c(I.ac([0,0,32722,12287,65534,34815,65534,18431]),[P.n])
C.B=H.c(I.ac([0,0,65498,45055,65535,34815,65534,18431]),[P.n])
C.p=H.c(I.ac([0,0,24576,1023,65534,34815,65534,18431]),[P.n])
C.C=H.c(I.ac([0,0,32754,11263,65534,34815,65534,18431]),[P.n])
C.a0=H.c(I.ac([0,0,32722,12287,65535,34815,65534,18431]),[P.n])
C.D=H.c(I.ac([0,0,65490,12287,65535,34815,65534,18431]),[P.n])
C.r=H.c(I.ac(["bind","if","ref","repeat","syntax"]),[P.h])
C.t=H.c(I.ac(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.a1=new H.ip(0,{},C.A,[P.h,P.h])
C.k=new P.lc(!1)
$.aM=0
$.bP=null
$.eo=null
$.dY=!1
$.hG=null
$.hw=null
$.hP=null
$.d2=null
$.d5=null
$.e6=null
$.bI=null
$.c7=null
$.c8=null
$.dZ=!1
$.a_=C.j
$.b_=null
$.dj=null
$.eI=null
$.eH=null
$.eD=null
$.eC=null
$.eB=null
$.eA=null
$.p=V.jt()
$.kn="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.km="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.f7=null
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
I.$lazy(y,x,w)}})(["ez","$get$ez",function(){return H.hF("_$dart_dartClosure")},"dp","$get$dp",function(){return H.hF("_$dart_js")},"ft","$get$ft",function(){return H.aV(H.cU({
toString:function(){return"$receiver$"}}))},"fu","$get$fu",function(){return H.aV(H.cU({$method$:null,
toString:function(){return"$receiver$"}}))},"fv","$get$fv",function(){return H.aV(H.cU(null))},"fw","$get$fw",function(){return H.aV(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"fA","$get$fA",function(){return H.aV(H.cU(void 0))},"fB","$get$fB",function(){return H.aV(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fy","$get$fy",function(){return H.aV(H.fz(null))},"fx","$get$fx",function(){return H.aV(function(){try{null.$method$}catch(z){return z.message}}())},"fD","$get$fD",function(){return H.aV(H.fz(void 0))},"fC","$get$fC",function(){return H.aV(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dT","$get$dT",function(){return P.lw()},"c9","$get$c9",function(){return[]},"fP","$get$fP",function(){return P.lg()},"fY","$get$fY",function(){return H.jx(H.bH(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.n])))},"hl","$get$hl",function(){return P.k0("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"hs","$get$hs",function(){return P.np()},"ex","$get$ex",function(){return{}},"h1","$get$h1",function(){return P.eW(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)},"dU","$get$dU",function(){return P.dt(P.h,P.ci)},"fT","$get$fT",function(){return Z.az(0)},"fR","$get$fR",function(){return Z.az(511)},"aI","$get$aI",function(){return Z.az(1)},"b5","$get$b5",function(){return Z.az(2)},"b4","$get$b4",function(){return Z.az(4)},"b6","$get$b6",function(){return Z.az(8)},"b7","$get$b7",function(){return Z.az(16)},"c0","$get$c0",function(){return Z.az(32)},"c1","$get$c1",function(){return Z.az(64)},"fS","$get$fS",function(){return Z.az(96)},"bF","$get$bF",function(){return Z.az(128)},"b3","$get$b3",function(){return Z.az(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.P},{func:1,ret:-1,opt:[D.B]},{func:1,ret:-1,args:[D.B]},{func:1,ret:-1},{func:1,ret:-1,args:[W.aE]},{func:1,ret:P.P,args:[F.ag,P.v,P.v]},{func:1,ret:-1,args:[P.n,[P.i,E.b0]]},{func:1,ret:P.P,args:[F.ax]},{func:1,ret:P.P,args:[,,]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:-1,args:[W.ah]},{func:1,ret:P.P,args:[D.B]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.P,args:[W.ah]},{func:1,ret:P.v},{func:1,ret:-1,args:[W.bC]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:V.U,args:[P.v]},{func:1,ret:-1,args:[P.n,[P.i,D.a9]]},{func:1,args:[,]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:P.W,args:[W.X,P.h,P.h,W.cx]},{func:1,ret:-1,args:[W.bT]},{func:1,ret:P.v,args:[P.v,P.v]},{func:1,ret:P.W,args:[W.H]},{func:1,ret:-1,args:[P.n,[P.i,V.aO]]},{func:1,ret:W.H},{func:1,ret:P.h,args:[P.n]},{func:1,ret:P.W,args:[W.aS]},{func:1,ret:P.W,args:[P.h]},{func:1,ret:P.P,args:[{func:1,ret:-1,args:[D.B]}]},{func:1,ret:-1,args:[P.n,[P.i,M.aU]]},{func:1,ret:P.P,args:[,]},{func:1,ret:-1,args:[P.n,[P.i,U.ao]]},{func:1,ret:P.v,args:[P.v]},{func:1,ret:P.P,args:[P.a5]},{func:1,ret:-1,args:[W.H,W.H]},{func:1,ret:P.V,args:[,,]},{func:1,ret:P.V,args:[P.n]},{func:1,ret:P.W,args:[P.v,P.v]},{func:1,ret:P.P,args:[P.h,,]},{func:1,ret:P.W,args:[[P.i,D.a9]]},{func:1,ret:P.P,args:[P.h]},{func:1,ret:P.n,args:[P.n,P.n]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:-1,args:[P.h,P.n]},{func:1,ret:[P.N,P.h,P.h],args:[[P.N,P.h,P.h],P.h]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,ret:P.n,args:[[P.d,P.n],P.n]},{func:1,ret:-1,args:[W.c2]},{func:1,ret:[P.b8,,],args:[,]},{func:1,ret:P.P,args:[,],opt:[,]},{func:1,ret:-1,args:[P.b],opt:[P.aG]},{func:1,ret:P.P,args:[{func:1,ret:-1}]},{func:1,ret:P.P,args:[P.bA]},{func:1,ret:P.W,args:[V.bb]},{func:1,ret:P.n,args:[,,]},{func:1,args:[P.h]},{func:1,args:[,P.h]},{func:1,ret:W.X,args:[W.H]}]
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
if(x==y)H.or(d||a)
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
Isolate.ac=a.ac
Isolate.e4=a.e4
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
if(typeof dartMainRunner==="function")dartMainRunner(T.hL,[])
else T.hL([])})})()
//# sourceMappingURL=test.dart.js.map
