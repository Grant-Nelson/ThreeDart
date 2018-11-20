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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isG)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.dx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.dx(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dy=function(){}
var dart=[["","",,H,{"^":"",lH:{"^":"a;a"}}],["","",,J,{"^":"",
dD:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cv:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dC==null){H.lf()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.h(P.f9("Return interceptor for "+H.f(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cT()]
if(v!=null)return v
v=H.lk(a)
if(v!=null)return v
if(typeof a=="function")return C.V
y=Object.getPrototypeOf(a)
if(y==null)return C.D
if(y===Object.prototype)return C.D
if(typeof w=="function"){Object.defineProperty(w,$.$get$cT(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
G:{"^":"a;",
u:function(a,b){return a===b},
gZ:function(a){return H.bw(a)},
i:["eZ",function(a){return"Instance of '"+H.b5(a)+"'"}],
"%":"DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo|WebGLRenderbuffer"},
hT:{"^":"G;",
i:function(a){return String(a)},
gZ:function(a){return a?519018:218159},
$isI:1},
ed:{"^":"G;",
u:function(a,b){return null==b},
i:function(a){return"null"},
gZ:function(a){return 0},
$isJ:1},
cU:{"^":"G;",
gZ:function(a){return 0},
i:["f0",function(a){return String(a)}]},
iv:{"^":"cU;"},
ck:{"^":"cU;"},
bR:{"^":"cU;",
i:function(a){var z=a[$.$get$dW()]
if(z==null)return this.f0(a)
return"JavaScript function for "+H.f(J.a7(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbN:1},
b0:{"^":"G;$ti",
h:function(a,b){H.z(b,H.v(a,0))
if(!!a.fixed$length)H.p(P.aa("add"))
a.push(b)},
T:function(a,b){var z
if(!!a.fixed$length)H.p(P.aa("remove"))
for(z=0;z<a.length;++z)if(J.V(a[z],b)){a.splice(z,1)
return!0}return!1},
a6:function(a,b){var z,y
H.i(b,"$isk",[H.v(a,0)],"$ask")
if(!!a.fixed$length)H.p(P.aa("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.x)(b),++y)a.push(b[y])},
a3:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.v(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.h(P.aR(a))}},
k:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.W(z,y,H.f(a[y]))
return z.join(b)},
jc:function(a){return this.k(a,"")},
j6:function(a,b,c){var z,y,x
H.j(b,{func:1,ret:P.I,args:[H.v(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.h(P.aR(a))}throw H.h(H.cS())},
j5:function(a,b){return this.j6(a,b,null)},
a8:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
eY:function(a,b,c){var z=a.length
if(b>z)throw H.h(P.a8(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.h(P.a8(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.v(a,0)])
return H.c(a.slice(b,c),[H.v(a,0)])},
gbO:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.h(H.cS())},
dL:function(a,b){var z,y
H.j(b,{func:1,ret:P.I,args:[H.v(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.h(P.aR(a))}return!1},
S:function(a,b){var z
for(z=0;z<a.length;++z)if(J.V(a[z],b))return!0
return!1},
i:function(a){return P.cR(a,"[","]")},
gN:function(a){return new J.ak(a,a.length,0,[H.v(a,0)])},
gZ:function(a){return H.bw(a)},
gq:function(a){return a.length},
sq:function(a,b){if(!!a.fixed$length)H.p(P.aa("set length"))
if(b<0)throw H.h(P.a8(b,0,null,"newLength",null))
a.length=b},
W:function(a,b,c){H.z(c,H.v(a,0))
if(!!a.immutable$list)H.p(P.aa("indexed set"))
if(b>=a.length||b<0)throw H.h(H.bL(a,b))
a[b]=c},
$isk:1,
$isb:1,
n:{
hS:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.cE(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.a8(a,0,4294967295,"length",null))
return J.ea(new Array(a),b)},
ea:function(a,b){return J.c7(H.c(a,[b]))},
c7:function(a){H.cy(a)
a.fixed$length=Array
return a}}},
lG:{"^":"b0;$ti"},
ak:{"^":"a;a,b,c,0d,$ti",
sdk:function(a){this.d=H.z(a,H.v(this,0))},
gF:function(){return this.d},
v:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.h(H.x(z))
x=this.c
if(x>=y){this.sdk(null)
return!1}this.sdk(z[x]);++this.c
return!0},
$isaT:1},
c8:{"^":"G;",
jK:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.h(P.aa(""+a+".toInt()"))},
cE:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.h(P.aa(""+a+".floor()"))},
an:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.aa(""+a+".round()"))},
ex:function(a,b){var z,y
if(b>20)throw H.h(P.a8(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gZ:function(a){return a&0x1FFFFFFF},
eP:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
f3:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dF(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.dF(a,b)},
dF:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.h(P.aa("Result of truncating division is "+H.f(z)+": "+H.f(a)+" ~/ "+b))},
bt:function(a,b){var z
if(a>0)z=this.hT(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
hT:function(a,b){return b>31?0:a>>>b},
ap:function(a,b){if(typeof b!=="number")throw H.h(H.aV(b))
return a<b},
$isw:1,
$isab:1},
ec:{"^":"c8;",$isy:1},
eb:{"^":"c8;"},
c9:{"^":"G;",
cr:function(a,b){if(b<0)throw H.h(H.bL(a,b))
if(b>=a.length)H.p(H.bL(a,b))
return a.charCodeAt(b)},
aJ:function(a,b){if(b>=a.length)throw H.h(H.bL(a,b))
return a.charCodeAt(b)},
G:function(a,b){H.F(b)
if(typeof b!=="string")throw H.h(P.cE(b,null,null))
return a+b},
eX:function(a,b,c){var z
if(c>a.length)throw H.h(P.a8(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
bW:function(a,b){return this.eX(a,b,0)},
bo:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.cf(b,null,null))
if(b>c)throw H.h(P.cf(b,null,null))
if(c>a.length)throw H.h(P.cf(c,null,null))
return a.substring(b,c)},
bn:function(a,b){return this.bo(a,b,null)},
jN:function(a){return a.toLowerCase()},
B:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.H)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
jo:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.B(c,z)+a},
ag:function(a,b){return this.jo(a,b," ")},
iN:function(a,b,c){if(c>a.length)throw H.h(P.a8(c,0,a.length,null,null))
return H.fV(a,b,c)},
i:function(a){return a},
gZ:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gq:function(a){return a.length},
$iset:1,
$isn:1}}],["","",,H,{"^":"",
cS:function(){return new P.d4("No element")},
hR:function(){return new P.d4("Too many elements")},
q:{"^":"jE;a",
gq:function(a){return this.a.length},
l:function(a,b){return C.i.cr(this.a,b)},
$asfa:function(){return[P.y]},
$asT:function(){return[P.y]},
$ask:function(){return[P.y]},
$asb:function(){return[P.y]}},
e2:{"^":"k;"},
cb:{"^":"e2;$ti",
gN:function(a){return new H.cW(this,this.gq(this),0,[H.Y(this,"cb",0)])},
cS:function(a,b){return this.f_(0,H.j(b,{func:1,ret:P.I,args:[H.Y(this,"cb",0)]}))}},
cW:{"^":"a;a,b,c,0d,$ti",
sb1:function(a){this.d=H.z(a,H.v(this,0))},
gF:function(){return this.d},
v:function(){var z,y,x,w
z=this.a
y=J.cu(z)
x=y.gq(z)
if(this.b!==x)throw H.h(P.aR(z))
w=this.c
if(w>=x){this.sb1(null)
return!1}this.sb1(y.a8(z,w));++this.c
return!0},
$isaT:1},
i8:{"^":"k;a,b,$ti",
gN:function(a){return new H.i9(J.bi(this.a),this.b,this.$ti)},
gq:function(a){return J.aZ(this.a)},
a8:function(a,b){return this.b.$1(J.cC(this.a,b))},
$ask:function(a,b){return[b]}},
i9:{"^":"aT;0a,b,c,$ti",
sb1:function(a){this.a=H.z(a,H.v(this,1))},
v:function(){var z=this.b
if(z.v()){this.sb1(this.c.$1(z.gF()))
return!0}this.sb1(null)
return!1},
gF:function(){return this.a},
$asaT:function(a,b){return[b]}},
ia:{"^":"cb;a,b,$ti",
gq:function(a){return J.aZ(this.a)},
a8:function(a,b){return this.b.$1(J.cC(this.a,b))},
$ascb:function(a,b){return[b]},
$ask:function(a,b){return[b]}},
dm:{"^":"k;a,b,$ti",
gN:function(a){return new H.jV(J.bi(this.a),this.b,this.$ti)}},
jV:{"^":"aT;a,b,$ti",
v:function(){var z,y
for(z=this.a,y=this.b;z.v();)if(y.$1(z.gF()))return!0
return!1},
gF:function(){return this.a.gF()}},
c5:{"^":"a;$ti"},
fa:{"^":"a;$ti"},
jE:{"^":"ca+fa;"}}],["","",,H,{"^":"",
bh:function(a){var z,y
z=H.F(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
l8:function(a){return init.types[H.Z(a)]},
li:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.O(a).$isan},
f:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a7(a)
if(typeof z!=="string")throw H.h(H.aV(a))
return z},
bw:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b5:function(a){return H.ix(a)+H.du(H.aW(a),0,null)},
ix:function(a){var z,y,x,w,v,u,t,s,r
z=J.O(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.N||!!z.$isck){u=C.B(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.bh(w.length>1&&C.i.aJ(w,0)===36?C.i.bn(w,1):w)},
ez:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iF:function(a){var z,y,x,w
z=H.c([],[P.y])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.x)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.h(H.aV(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.bt(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.h(H.aV(w))}return H.ez(z)},
eA:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.h(H.aV(x))
if(x<0)throw H.h(H.aV(x))
if(x>65535)return H.iF(a)}return H.ez(a)},
d0:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.bt(z,10))>>>0,56320|z&1023)}throw H.h(P.a8(a,0,1114111,null,null))},
b4:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iE:function(a){var z=H.b4(a).getFullYear()+0
return z},
iC:function(a){var z=H.b4(a).getMonth()+1
return z},
iy:function(a){var z=H.b4(a).getDate()+0
return z},
iz:function(a){var z=H.b4(a).getHours()+0
return z},
iB:function(a){var z=H.b4(a).getMinutes()+0
return z},
iD:function(a){var z=H.b4(a).getSeconds()+0
return z},
iA:function(a){var z=H.b4(a).getMilliseconds()+0
return z},
B:function(a){throw H.h(H.aV(a))},
l:function(a,b){if(a==null)J.aZ(a)
throw H.h(H.bL(a,b))},
bL:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aE(!0,b,"index",null)
z=H.Z(J.aZ(a))
if(!(b<0)){if(typeof z!=="number")return H.B(z)
y=b>=z}else y=!0
if(y)return P.b_(b,a,"index",null,z)
return P.cf(b,"index",null)},
l4:function(a,b,c){if(a>c)return new P.ce(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.ce(a,c,!0,b,"end","Invalid value")
return new P.aE(!0,b,"end",null)},
aV:function(a){return new P.aE(!0,a,null,null)},
l_:function(a){if(typeof a!=="number")throw H.h(H.aV(a))
return a},
h:function(a){var z
if(a==null)a=new P.es()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fW})
z.name=""}else z.toString=H.fW
return z},
fW:function(){return J.a7(this.dartException)},
p:function(a){throw H.h(a)},
x:function(a){throw H.h(P.aR(a))},
ac:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lw(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.bt(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cV(H.f(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.er(H.f(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eZ()
u=$.$get$f_()
t=$.$get$f0()
s=$.$get$f1()
r=$.$get$f5()
q=$.$get$f6()
p=$.$get$f3()
$.$get$f2()
o=$.$get$f8()
n=$.$get$f7()
m=v.af(y)
if(m!=null)return z.$1(H.cV(H.F(y),m))
else{m=u.af(y)
if(m!=null){m.method="call"
return z.$1(H.cV(H.F(y),m))}else{m=t.af(y)
if(m==null){m=s.af(y)
if(m==null){m=r.af(y)
if(m==null){m=q.af(y)
if(m==null){m=p.af(y)
if(m==null){m=s.af(y)
if(m==null){m=o.af(y)
if(m==null){m=n.af(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.er(H.F(y),m))}}return z.$1(new H.jD(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eK()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aE(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eK()
return a},
bf:function(a){var z
if(a==null)return new H.fx(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fx(a)},
l6:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.W(0,a[y],a[x])}return b},
lh:function(a,b,c,d,e,f){H.e(a,"$isbN")
switch(H.Z(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.o("Unsupported number of arguments for wrapped closure"))},
bd:function(a,b){var z
H.Z(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lh)
a.$identity=z
return z},
hd:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.O(d).$isb){z.$reflectionInfo=d
x=H.iK(z).r}else x=d
w=e?Object.create(new H.j7().constructor.prototype):Object.create(new H.cG(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.au
if(typeof u!=="number")return u.G()
$.au=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.dS(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.l8,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.dN:H.cH
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.h("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.dS(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w["call*"]=q
w.$R=z.$R
w.$D=z.$D
return v},
ha:function(a,b,c,d){var z=H.cH
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dS:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hc(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.ha(y,!w,z,b)
if(y===0){w=$.au
if(typeof w!=="number")return w.G()
$.au=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bk
if(v==null){v=H.bZ("self")
$.bk=v}return new Function(w+H.f(v)+";return "+u+"."+H.f(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.au
if(typeof w!=="number")return w.G()
$.au=w+1
t+=w
w="return function("+t+"){return this."
v=$.bk
if(v==null){v=H.bZ("self")
$.bk=v}return new Function(w+H.f(v)+"."+H.f(z)+"("+t+");}")()},
hb:function(a,b,c,d){var z,y
z=H.cH
y=H.dN
switch(b?-1:a){case 0:throw H.h(H.iS("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hc:function(a,b){var z,y,x,w,v,u,t,s
z=$.bk
if(z==null){z=H.bZ("self")
$.bk=z}y=$.dM
if(y==null){y=H.bZ("receiver")
$.dM=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hb(w,!u,x,b)
if(w===1){z="return function(){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+");"
y=$.au
if(typeof y!=="number")return y.G()
$.au=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+", "+s+");"
y=$.au
if(typeof y!=="number")return y.G()
$.au=y+1
return new Function(z+y+"}")()},
dx:function(a,b,c,d,e,f,g){return H.hd(a,b,H.Z(c),d,!!e,!!f,g)},
F:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.ar(a,"String"))},
m8:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.ar(a,"double"))},
lo:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.ar(a,"num"))},
dv:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.ar(a,"bool"))},
Z:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.ar(a,"int"))},
fT:function(a,b){throw H.h(H.ar(a,H.bh(H.F(b).substring(3))))},
lq:function(a,b){throw H.h(H.h9(a,H.bh(H.F(b).substring(3))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.O(a)[b])return a
H.fT(a,b)},
d:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.O(a)[b]
else z=!0
if(z)return a
H.lq(a,b)},
cy:function(a){if(a==null)return a
if(!!J.O(a).$isb)return a
throw H.h(H.ar(a,"List<dynamic>"))},
lj:function(a,b){var z
if(a==null)return a
z=J.O(a)
if(!!z.$isb)return a
if(z[b])return a
H.fT(a,b)},
fN:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.Z(z)]
else return a.$S()}return},
bW:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fN(J.O(a))
if(z==null)return!1
return H.fE(z,null,b,null)},
j:function(a,b){var z,y
if(a==null)return a
if($.dr)return a
$.dr=!0
try{if(H.bW(a,b))return a
z=H.cA(b)
y=H.ar(a,z)
throw H.h(y)}finally{$.dr=!1}},
dz:function(a,b){if(a!=null&&!H.dw(a,b))H.p(H.ar(a,H.cA(b)))
return a},
fI:function(a){var z,y
z=J.O(a)
if(!!z.$ist){y=H.fN(z)
if(y!=null)return H.cA(y)
return"Closure"}return H.b5(a)},
lv:function(a){throw H.h(new P.hj(H.F(a)))},
fO:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
aW:function(a){if(a==null)return
return a.$ti},
m9:function(a,b,c){return H.bg(a["$as"+H.f(c)],H.aW(b))},
cw:function(a,b,c,d){var z
H.F(c)
H.Z(d)
z=H.bg(a["$as"+H.f(c)],H.aW(b))
return z==null?null:z[d]},
Y:function(a,b,c){var z
H.F(b)
H.Z(c)
z=H.bg(a["$as"+H.f(b)],H.aW(a))
return z==null?null:z[c]},
v:function(a,b){var z
H.Z(b)
z=H.aW(a)
return z==null?null:z[b]},
cA:function(a){return H.aU(a,null)},
aU:function(a,b){var z,y
H.i(b,"$isb",[P.n],"$asb")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bh(a[0].builtin$cls)+H.du(a,1,b)
if(typeof a=="function")return H.bh(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Z(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.l(b,y)
return H.f(b[y])}if('func' in a)return H.kQ(a,b)
if('futureOr' in a)return"FutureOr<"+H.aU("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kQ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.n]
H.i(b,"$isb",z,"$asb")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.l(b,r)
t=C.i.G(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aU(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aU(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aU(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aU(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.l5(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.F(z[l])
n=n+m+H.aU(i[h],b)+(" "+H.f(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
du:function(a,b,c){var z,y,x,w,v,u
H.i(c,"$isb",[P.n],"$asb")
if(a==null)return""
z=new P.bx("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aU(u,c)}return"<"+z.i(0)+">"},
bg:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bK:function(a,b,c,d){var z,y
H.F(b)
H.cy(c)
H.F(d)
if(a==null)return!1
z=H.aW(a)
y=J.O(a)
if(y[b]==null)return!1
return H.fL(H.bg(y[d],z),null,c,null)},
i:function(a,b,c,d){H.F(b)
H.cy(c)
H.F(d)
if(a==null)return a
if(H.bK(a,b,c,d))return a
throw H.h(H.ar(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bh(b.substring(3))+H.du(c,0,null),init.mangledGlobalNames)))},
fL:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aj(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aj(a[y],b,c[y],d))return!1
return!0},
m6:function(a,b,c){return a.apply(b,H.bg(J.O(b)["$as"+H.f(c)],H.aW(b)))},
fQ:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="J"||a===-1||a===-2||H.fQ(z)}return!1},
dw:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="a"||b.builtin$cls==="J"||b===-1||b===-2||H.fQ(b)
if(b==null||b===-1||b.builtin$cls==="a"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dw(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bW(a,b)}z=J.O(a).constructor
y=H.aW(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.aj(z,null,b,null)},
z:function(a,b){if(a!=null&&!H.dw(a,b))throw H.h(H.ar(a,H.cA(b)))
return a},
aj:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aj(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="J")return!0
if('func' in c)return H.fE(a,b,c,d)
if('func' in a)return c.builtin$cls==="bN"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aj("type" in a?a.type:null,b,x,d)
else if(H.aj(a,b,x,d))return!0
else{if(!('$is'+"bp" in y.prototype))return!1
w=y.prototype["$as"+"bp"]
v=H.bg(w,z?a.slice(1):null)
return H.aj(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fL(H.bg(r,z),b,u,d)},
fE:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.aj(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.aj(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.aj(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.aj(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.ln(m,b,l,d)},
ln:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aj(c[w],d,a[w],b))return!1}return!0},
m7:function(a,b,c){Object.defineProperty(a,H.F(b),{value:c,enumerable:false,writable:true,configurable:true})},
lk:function(a){var z,y,x,w,v,u
z=H.F($.fP.$1(a))
y=$.ct[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cx[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.F($.fK.$2(a,z))
if(z!=null){y=$.ct[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cx[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cz(x)
$.ct[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cx[z]=x
return x}if(v==="-"){u=H.cz(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fS(a,x)
if(v==="*")throw H.h(P.f9(z))
if(init.leafTags[z]===true){u=H.cz(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fS(a,x)},
fS:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dD(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cz:function(a){return J.dD(a,!1,null,!!a.$isan)},
lm:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cz(z)
else return J.dD(z,c,null,null)},
lf:function(){if(!0===$.dC)return
$.dC=!0
H.lg()},
lg:function(){var z,y,x,w,v,u,t,s
$.ct=Object.create(null)
$.cx=Object.create(null)
H.lb()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fU.$1(v)
if(u!=null){t=H.lm(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
lb:function(){var z,y,x,w,v,u,t
z=C.S()
z=H.bc(C.P,H.bc(C.U,H.bc(C.A,H.bc(C.A,H.bc(C.T,H.bc(C.Q,H.bc(C.R(C.B),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fP=new H.lc(v)
$.fK=new H.ld(u)
$.fU=new H.le(t)},
bc:function(a,b){return a(b)||b},
fV:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
dG:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
iJ:{"^":"a;a,b,c,d,e,f,r,0x",n:{
iK:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.c7(z)
y=z[0]
x=z[1]
return new H.iJ(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jr:{"^":"a;a,b,c,d,e,f",
af:function(a){var z,y,x
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
aC:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.n])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jr(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cj:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
f4:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
is:{"^":"W;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
n:{
er:function(a,b){return new H.is(a,b==null?null:b.method)}}},
hW:{"^":"W;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.f(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.f(this.a)+")"},
n:{
cV:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hW(a,y,z?null:b.receiver)}}},
jD:{"^":"W;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lw:{"^":"t:14;a",
$1:function(a){if(!!J.O(a).$isW)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fx:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaI:1},
t:{"^":"a;",
i:function(a){return"Closure '"+H.b5(this).trim()+"'"},
geC:function(){return this},
$isbN:1,
geC:function(){return this}},
eN:{"^":"t;"},
j7:{"^":"eN;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.bh(z)+"'"}},
cG:{"^":"eN;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cG))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gZ:function(a){var z,y
z=this.c
if(z==null)y=H.bw(this.a)
else y=typeof z!=="object"?J.aY(z):H.bw(z)
return(y^H.bw(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.b5(z)+"'")},
n:{
cH:function(a){return a.a},
dN:function(a){return a.c},
bZ:function(a){var z,y,x,w,v
z=new H.cG("self","target","receiver","name")
y=J.c7(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
js:{"^":"W;a",
i:function(a){return this.a},
n:{
ar:function(a,b){return new H.js("TypeError: "+H.f(P.c3(a))+": type '"+H.fI(a)+"' is not a subtype of type '"+b+"'")}}},
h8:{"^":"W;a",
i:function(a){return this.a},
n:{
h9:function(a,b){return new H.h8("CastError: "+H.f(P.c3(a))+": type '"+H.fI(a)+"' is not a subtype of type '"+b+"'")}}},
iR:{"^":"W;a",
i:function(a){return"RuntimeError: "+H.f(this.a)},
n:{
iS:function(a){return new H.iR(a)}}},
b1:{"^":"ej;a,0b,0c,0d,0e,0f,r,$ti",
gq:function(a){return this.a},
gaB:function(){return new H.eg(this,[H.v(this,0)])},
dS:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.dh(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.dh(y,a)}else return this.ja(a)},
ja:function(a){var z=this.d
if(z==null)return!1
return this.cF(this.c3(z,J.aY(a)&0x3ffffff),a)>=0},
l:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.br(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.br(w,b)
x=y==null?null:y.b
return x}else return this.jb(b)},
jb:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.c3(z,J.aY(a)&0x3ffffff)
x=this.cF(y,a)
if(x<0)return
return y[x].b},
W:function(a,b,c){var z,y,x,w,v,u
H.z(b,H.v(this,0))
H.z(c,H.v(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.cb()
this.b=z}this.d7(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.cb()
this.c=y}this.d7(y,b,c)}else{x=this.d
if(x==null){x=this.cb()
this.d=x}w=J.aY(b)&0x3ffffff
v=this.c3(x,w)
if(v==null)this.cg(x,w,[this.bY(b,c)])
else{u=this.cF(v,b)
if(u>=0)v[u].b=c
else v.push(this.bY(b,c))}}},
a3:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.v(this,0),H.v(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.h(P.aR(this))
z=z.c}},
d7:function(a,b,c){var z
H.z(b,H.v(this,0))
H.z(c,H.v(this,1))
z=this.br(a,b)
if(z==null)this.cg(a,b,this.bY(b,c))
else z.b=c},
fp:function(){this.r=this.r+1&67108863},
bY:function(a,b){var z,y
z=new H.i_(H.z(a,H.v(this,0)),H.z(b,H.v(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fp()
return z},
cF:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.V(a[y].a,b))return y
return-1},
i:function(a){return P.ek(this)},
br:function(a,b){return a[b]},
c3:function(a,b){return a[b]},
cg:function(a,b,c){a[b]=c},
fH:function(a,b){delete a[b]},
dh:function(a,b){return this.br(a,b)!=null},
cb:function(){var z=Object.create(null)
this.cg(z,"<non-identifier-key>",z)
this.fH(z,"<non-identifier-key>")
return z},
$isef:1},
i_:{"^":"a;a,b,0c,0d"},
eg:{"^":"e2;a,$ti",
gq:function(a){return this.a.a},
gN:function(a){var z,y
z=this.a
y=new H.i0(z,z.r,this.$ti)
y.c=z.e
return y}},
i0:{"^":"a;a,b,0c,0d,$ti",
sd8:function(a){this.d=H.z(a,H.v(this,0))},
gF:function(){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.aR(z))
else{z=this.c
if(z==null){this.sd8(null)
return!1}else{this.sd8(z.a)
this.c=this.c.c
return!0}}},
$isaT:1},
lc:{"^":"t:14;a",
$1:function(a){return this.a(a)}},
ld:{"^":"t:31;a",
$2:function(a,b){return this.a(a,b)}},
le:{"^":"t:32;a",
$1:function(a){return this.a(H.F(a))}},
hU:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iset:1,
n:{
hV:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.h(new P.hE("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
l5:function(a){return J.ea(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
lp:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bG:function(a){return a},
bF:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.bL(b,a))},
kP:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.h(H.l4(a,b,c))
return b},
io:{"^":"G;",$islT:1,"%":";ArrayBufferView;d_|ft|fu|im|fv|fw|bt"},
d_:{"^":"io;",
gq:function(a){return a.length},
$isan:1,
$asan:I.dy},
im:{"^":"fu;",
l:function(a,b){H.bF(b,a,a.length)
return a[b]},
$asc5:function(){return[P.w]},
$asT:function(){return[P.w]},
$isk:1,
$ask:function(){return[P.w]},
$isb:1,
$asb:function(){return[P.w]},
"%":"Float32Array"},
bt:{"^":"fw;",
$asc5:function(){return[P.y]},
$asT:function(){return[P.y]},
$isk:1,
$ask:function(){return[P.y]},
$isb:1,
$asb:function(){return[P.y]}},
lI:{"^":"bt;",
l:function(a,b){H.bF(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lJ:{"^":"bt;",
l:function(a,b){H.bF(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lK:{"^":"bt;",
l:function(a,b){H.bF(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lL:{"^":"bt;",
gq:function(a){return a.length},
l:function(a,b){H.bF(b,a,a.length)
return a[b]},
$islU:1,
"%":"CanvasPixelArray|Uint8ClampedArray"},
lM:{"^":"bt;",
gq:function(a){return a.length},
l:function(a,b){H.bF(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
ft:{"^":"d_+T;"},
fu:{"^":"ft+c5;"},
fv:{"^":"d_+T;"},
fw:{"^":"fv+c5;"}}],["","",,P,{"^":"",
jX:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kX()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bd(new P.jZ(z),1)).observe(y,{childList:true})
return new P.jY(z,y,x)}else if(self.setImmediate!=null)return P.kY()
return P.kZ()},
lY:[function(a){self.scheduleImmediate(H.bd(new P.k_(H.j(a,{func:1,ret:-1})),0))},"$1","kX",4,0,8],
lZ:[function(a){self.setImmediate(H.bd(new P.k0(H.j(a,{func:1,ret:-1})),0))},"$1","kY",4,0,8],
m_:[function(a){P.d9(C.q,H.j(a,{func:1,ret:-1}))},"$1","kZ",4,0,8],
d9:function(a,b){var z
H.j(b,{func:1,ret:-1})
z=C.h.a2(a.a,1000)
return P.kD(z<0?0:z,b)},
eW:function(a,b){var z
H.j(b,{func:1,ret:-1,args:[P.b6]})
z=C.h.a2(a.a,1000)
return P.kE(z<0?0:z,b)},
kT:function(a,b){if(H.bW(a,{func:1,args:[P.a,P.aI]}))return H.j(a,{func:1,ret:null,args:[P.a,P.aI]})
if(H.bW(a,{func:1,args:[P.a]}))return H.j(a,{func:1,ret:null,args:[P.a]})
throw H.h(P.cE(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kS:function(){var z,y
for(;z=$.bb,z!=null;){$.bI=null
y=z.b
$.bb=y
if(y==null)$.bH=null
z.a.$0()}},
m5:[function(){$.ds=!0
try{P.kS()}finally{$.bI=null
$.ds=!1
if($.bb!=null)$.$get$dn().$1(P.fM())}},"$0","fM",0,0,3],
fH:function(a){var z=new P.fl(H.j(a,{func:1,ret:-1}))
if($.bb==null){$.bH=z
$.bb=z
if(!$.ds)$.$get$dn().$1(P.fM())}else{$.bH.b=z
$.bH=z}},
kW:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
z=$.bb
if(z==null){P.fH(a)
$.bI=$.bH
return}y=new P.fl(a)
x=$.bI
if(x==null){y.b=z
$.bI=y
$.bb=y}else{y.b=x.b
x.b=y
$.bI=y
if(y.b==null)$.bH=y}},
lr:function(a){var z,y
z={func:1,ret:-1}
H.j(a,z)
y=$.N
if(C.l===y){P.cs(null,null,C.l,a)
return}y.toString
P.cs(null,null,y,H.j(y.cm(a),z))},
eV:function(a,b){var z,y
z={func:1,ret:-1}
H.j(b,z)
y=$.N
if(y===C.l){y.toString
return P.d9(a,b)}return P.d9(a,H.j(y.cm(b),z))},
jo:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.b6]}
H.j(b,z)
y=$.N
if(y===C.l){y.toString
return P.eW(a,b)}x=y.dN(b,P.b6)
$.N.toString
return P.eW(a,H.j(x,z))},
cr:function(a,b,c,d,e){var z={}
z.a=d
P.kW(new P.kU(z,e))},
fF:function(a,b,c,d,e){var z,y
H.j(d,{func:1,ret:e})
y=$.N
if(y===c)return d.$0()
$.N=c
z=y
try{y=d.$0()
return y}finally{$.N=z}},
fG:function(a,b,c,d,e,f,g){var z,y
H.j(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.N
if(y===c)return d.$1(e)
$.N=c
z=y
try{y=d.$1(e)
return y}finally{$.N=z}},
kV:function(a,b,c,d,e,f,g,h,i){var z,y
H.j(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.N
if(y===c)return d.$2(e,f)
$.N=c
z=y
try{y=d.$2(e,f)
return y}finally{$.N=z}},
cs:function(a,b,c,d){var z
H.j(d,{func:1,ret:-1})
z=C.l!==c
if(z)d=!(!z||!1)?c.cm(d):c.iF(d,-1)
P.fH(d)},
jZ:{"^":"t:16;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jY:{"^":"t:30;a,b,c",
$1:function(a){var z,y
this.a.a=H.j(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
k_:{"^":"t:2;a",
$0:function(){this.a.$0()}},
k0:{"^":"t:2;a",
$0:function(){this.a.$0()}},
fz:{"^":"a;a,0b,c",
fm:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bd(new P.kG(this,b),0),a)
else throw H.h(P.aa("`setTimeout()` not found."))},
fn:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bd(new P.kF(this,a,Date.now(),b),0),a)
else throw H.h(P.aa("Periodic timer."))},
$isb6:1,
n:{
kD:function(a,b){var z=new P.fz(!0,0)
z.fm(a,b)
return z},
kE:function(a,b){var z=new P.fz(!1,0)
z.fn(a,b)
return z}}},
kG:{"^":"t:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
kF:{"^":"t:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.f3(w,x)}z.c=y
this.d.$1(z)}},
ba:{"^":"a;0a,b,c,d,e,$ti",
ji:function(a){if(this.c!==6)return!0
return this.b.b.cO(H.j(this.d,{func:1,ret:P.I,args:[P.a]}),a.a,P.I,P.a)},
j9:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.v(this,1)}
w=this.b.b
if(H.bW(z,{func:1,args:[P.a,P.aI]}))return H.dz(w.jD(z,a.a,a.b,null,y,P.aI),x)
else return H.dz(w.cO(H.j(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aO:{"^":"a;dE:a<,b,0hG:c<,$ti",
ew:function(a,b,c){var z,y,x,w
z=H.v(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.N
if(y!==C.l){y.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kT(b,y)}H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aO(0,$.N,[c])
w=b==null?1:3
this.da(new P.ba(x,w,a,b,[z,c]))
return x},
jJ:function(a,b){return this.ew(a,null,b)},
da:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isba")
this.c=a}else{if(z===2){y=H.e(this.c,"$isaO")
z=y.a
if(z<4){y.da(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cs(null,null,z,H.j(new P.k8(this,a),{func:1,ret:-1}))}},
dA:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isba")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isaO")
y=u.a
if(y<4){u.dA(a)
return}this.a=y
this.c=u.c}z.a=this.bs(a)
y=this.b
y.toString
P.cs(null,null,y,H.j(new P.kd(z,this),{func:1,ret:-1}))}},
cf:function(){var z=H.e(this.c,"$isba")
this.c=null
return this.bs(z)},
bs:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
dd:function(a){var z,y,x
z=H.v(this,0)
H.dz(a,{futureOr:1,type:z})
y=this.$ti
if(H.bK(a,"$isbp",y,"$asbp"))if(H.bK(a,"$isaO",y,null))P.fo(a,this)
else P.k9(a,this)
else{x=this.cf()
H.z(a,z)
this.a=4
this.c=a
P.bD(this,x)}},
de:function(a,b){var z
H.e(b,"$isaI")
z=this.cf()
this.a=8
this.c=new P.ad(a,b)
P.bD(this,z)},
$isbp:1,
n:{
k9:function(a,b){var z,y,x
b.a=1
try{a.ew(new P.ka(b),new P.kb(b),null)}catch(x){z=H.ac(x)
y=H.bf(x)
P.lr(new P.kc(b,z,y))}},
fo:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isaO")
if(z>=4){y=b.cf()
b.a=a.a
b.c=a.c
P.bD(b,y)}else{y=H.e(b.c,"$isba")
b.a=2
b.c=a
a.dA(y)}},
bD:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isad")
y=y.b
u=v.a
t=v.b
y.toString
P.cr(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bD(z.a,b)}y=z.a
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
if(p){H.e(r,"$isad")
y=y.b
u=r.a
t=r.b
y.toString
P.cr(null,null,y,u,t)
return}o=$.N
if(o==null?q!=null:o!==q)$.N=q
else o=null
y=b.c
if(y===8)new P.kg(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kf(x,b,r).$0()}else if((y&2)!==0)new P.ke(z,x,b).$0()
if(o!=null)$.N=o
y=x.b
if(!!J.O(y).$isbp){if(y.a>=4){n=H.e(t.c,"$isba")
t.c=null
b=t.bs(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fo(y,t)
return}}m=b.b
n=H.e(m.c,"$isba")
m.c=null
b=m.bs(n)
y=x.a
u=x.b
if(!y){H.z(u,H.v(m,0))
m.a=4
m.c=u}else{H.e(u,"$isad")
m.a=8
m.c=u}z.a=m
y=m}}}},
k8:{"^":"t:2;a,b",
$0:function(){P.bD(this.a,this.b)}},
kd:{"^":"t:2;a,b",
$0:function(){P.bD(this.b,this.a.a)}},
ka:{"^":"t:16;a",
$1:function(a){var z=this.a
z.a=0
z.dd(a)}},
kb:{"^":"t:33;a",
$2:function(a,b){this.a.de(a,H.e(b,"$isaI"))},
$1:function(a){return this.$2(a,null)}},
kc:{"^":"t:2;a,b,c",
$0:function(){this.a.de(this.b,this.c)}},
kg:{"^":"t:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.eu(H.j(w.d,{func:1}),null)}catch(v){y=H.ac(v)
x=H.bf(v)
if(this.d){w=H.e(this.a.a.c,"$isad").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isad")
else u.b=new P.ad(y,x)
u.a=!0
return}if(!!J.O(z).$isbp){if(z instanceof P.aO&&z.gdE()>=4){if(z.gdE()===8){w=this.b
w.b=H.e(z.ghG(),"$isad")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.jJ(new P.kh(t),null)
w.a=!1}}},
kh:{"^":"t:34;a",
$1:function(a){return this.a}},
kf:{"^":"t:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.v(x,0)
v=H.z(this.c,w)
u=H.v(x,1)
this.a.b=x.b.b.cO(H.j(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ac(t)
y=H.bf(t)
x=this.a
x.b=new P.ad(z,y)
x.a=!0}}},
ke:{"^":"t:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isad")
w=this.c
if(w.ji(z)&&w.e!=null){v=this.b
v.b=w.j9(z)
v.a=!1}}catch(u){y=H.ac(u)
x=H.bf(u)
w=H.e(this.a.a.c,"$isad")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ad(y,x)
s.a=!0}}},
fl:{"^":"a;a,0b"},
j8:{"^":"a;$ti",
gq:function(a){var z,y,x,w
z={}
y=new P.aO(0,$.N,[P.y])
z.a=0
x=H.v(this,0)
w=H.j(new P.ja(z,this),{func:1,ret:-1,args:[x]})
H.j(new P.jb(z,y),{func:1,ret:-1})
W.U(this.a,this.b,w,!1,x)
return y}},
ja:{"^":"t;a,b",
$1:function(a){H.z(a,H.v(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.J,args:[H.v(this.b,0)]}}},
jb:{"^":"t:2;a,b",
$0:function(){this.b.dd(this.a.a)}},
d5:{"^":"a;$ti"},
j9:{"^":"a;"},
b6:{"^":"a;"},
ad:{"^":"a;a,b",
i:function(a){return H.f(this.a)},
$isW:1},
kL:{"^":"a;",$islX:1},
kU:{"^":"t:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.es()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.h(z)
x=H.h(z)
x.stack=y.i(0)
throw x}},
ks:{"^":"kL;",
jE:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
try{if(C.l===$.N){a.$0()
return}P.fF(null,null,this,a,-1)}catch(x){z=H.ac(x)
y=H.bf(x)
P.cr(null,null,this,z,H.e(y,"$isaI"))}},
jF:function(a,b,c){var z,y,x
H.j(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.l===$.N){a.$1(b)
return}P.fG(null,null,this,a,b,-1,c)}catch(x){z=H.ac(x)
y=H.bf(x)
P.cr(null,null,this,z,H.e(y,"$isaI"))}},
iF:function(a,b){return new P.ku(this,H.j(a,{func:1,ret:b}),b)},
cm:function(a){return new P.kt(this,H.j(a,{func:1,ret:-1}))},
dN:function(a,b){return new P.kv(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
eu:function(a,b){H.j(a,{func:1,ret:b})
if($.N===C.l)return a.$0()
return P.fF(null,null,this,a,b)},
cO:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.N===C.l)return a.$1(b)
return P.fG(null,null,this,a,b,c,d)},
jD:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.N===C.l)return a.$2(b,c)
return P.kV(null,null,this,a,b,c,d,e,f)}},
ku:{"^":"t;a,b,c",
$0:function(){return this.a.eu(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
kt:{"^":"t:3;a,b",
$0:function(){return this.a.jE(this.b)}},
kv:{"^":"t;a,b,c",
$1:function(a){var z=this.c
return this.a.jF(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
i2:function(a,b,c){H.cy(a)
return H.i(H.l6(a,new H.b1(0,0,[b,c])),"$isef",[b,c],"$asef")},
i1:function(a,b){return new H.b1(0,0,[a,b])},
bS:function(a,b,c,d){return new P.km(0,0,[d])},
hQ:function(a,b,c){var z,y
if(P.dt(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bJ()
C.a.h(y,a)
try{P.kR(a,z)}finally{if(0>=y.length)return H.l(y,-1)
y.pop()}y=P.eM(b,H.lj(z,"$isk"),", ")+c
return y.charCodeAt(0)==0?y:y},
cR:function(a,b,c){var z,y,x
if(P.dt(a))return b+"..."+c
z=new P.bx(b)
y=$.$get$bJ()
C.a.h(y,a)
try{x=z
x.a=P.eM(x.gaK(),a,", ")}finally{if(0>=y.length)return H.l(y,-1)
y.pop()}y=z
y.a=y.gaK()+c
y=z.gaK()
return y.charCodeAt(0)==0?y:y},
dt:function(a){var z,y
for(z=0;y=$.$get$bJ(),z<y.length;++z)if(a===y[z])return!0
return!1},
kR:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gN(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.v())return
w=H.f(z.gF())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.v()){if(x<=5)return
if(0>=b.length)return H.l(b,-1)
v=b.pop()
if(0>=b.length)return H.l(b,-1)
u=b.pop()}else{t=z.gF();++x
if(!z.v()){if(x<=4){C.a.h(b,H.f(t))
return}v=H.f(t)
if(0>=b.length)return H.l(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gF();++x
for(;z.v();t=s,s=r){r=z.gF();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.l(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.f(t)
v=H.f(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.l(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
eh:function(a,b){var z,y,x
z=P.bS(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.x)(a),++x)z.h(0,H.z(a[x],b))
return z},
ek:function(a){var z,y,x
z={}
if(P.dt(a))return"{...}"
y=new P.bx("")
try{C.a.h($.$get$bJ(),a)
x=y
x.a=x.gaK()+"{"
z.a=!0
a.a3(0,new P.i7(z,y))
z=y
z.a=z.gaK()+"}"}finally{z=$.$get$bJ()
if(0>=z.length)return H.l(z,-1)
z.pop()}z=y.gaK()
return z.charCodeAt(0)==0?z:z},
km:{"^":"ki;a,0b,0c,0d,0e,0f,r,$ti",
gN:function(a){var z=new P.fs(this,this.r,this.$ti)
z.c=this.e
return z},
gq:function(a){return this.a},
S:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.e(z[b],"$iscp")!=null}else{y=this.fD(b)
return y}},
fD:function(a){var z=this.d
if(z==null)return!1
return this.c1(this.dm(z,a),a)>=0},
h:function(a,b){var z,y
H.z(b,H.v(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dq()
this.b=z}return this.d9(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dq()
this.c=y}return this.d9(y,b)}else return this.fq(b)},
fq:function(a){var z,y,x
H.z(a,H.v(this,0))
z=this.d
if(z==null){z=P.dq()
this.d=z}y=this.df(a)
x=z[y]
if(x==null)z[y]=[this.cc(a)]
else{if(this.c1(x,a)>=0)return!1
x.push(this.cc(a))}return!0},
T:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.hB(this.c,b)
else return this.hy(b)},
hy:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.dm(z,a)
x=this.c1(y,a)
if(x<0)return!1
this.dG(y.splice(x,1)[0])
return!0},
d9:function(a,b){H.z(b,H.v(this,0))
if(H.e(a[b],"$iscp")!=null)return!1
a[b]=this.cc(b)
return!0},
hB:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$iscp")
if(z==null)return!1
this.dG(z)
delete a[b]
return!0},
dr:function(){this.r=this.r+1&67108863},
cc:function(a){var z,y
z=new P.cp(H.z(a,H.v(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dr()
return z},
dG:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dr()},
df:function(a){return J.aY(a)&0x3ffffff},
dm:function(a,b){return a[this.df(b)]},
c1:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.V(a[y].a,b))return y
return-1},
n:{
dq:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cp:{"^":"a;a,0b,0c"},
fs:{"^":"a;a,b,0c,0d,$ti",
sdc:function(a){this.d=H.z(a,H.v(this,0))},
gF:function(){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.aR(z))
else{z=this.c
if(z==null){this.sdc(null)
return!1}else{this.sdc(H.z(z.a,H.v(this,0)))
this.c=this.c.b
return!0}}},
$isaT:1,
n:{
kn:function(a,b,c){var z=new P.fs(a,b,[c])
z.c=a.e
return z}}},
ki:{"^":"iT;"},
ca:{"^":"ko;",$isk:1,$isb:1},
T:{"^":"a;$ti",
gN:function(a){return new H.cW(a,this.gq(a),0,[H.cw(this,a,"T",0)])},
a8:function(a,b){return this.l(a,b)},
jM:function(a,b){var z,y
z=H.c([],[H.cw(this,a,"T",0)])
C.a.sq(z,this.gq(a))
for(y=0;y<this.gq(a);++y)C.a.W(z,y,this.l(a,y))
return z},
jL:function(a){return this.jM(a,!0)},
i:function(a){return P.cR(a,"[","]")}},
ej:{"^":"cc;"},
i7:{"^":"t:18;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.f(a)
z.a=y+": "
z.a+=H.f(b)}},
cc:{"^":"a;$ti",
a3:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.Y(this,"cc",0),H.Y(this,"cc",1)]})
for(z=J.bi(this.gaB());z.v();){y=z.gF()
b.$2(y,this.l(0,y))}},
gq:function(a){return J.aZ(this.gaB())},
i:function(a){return P.ek(this)},
$isae:1},
iV:{"^":"a;$ti",
a6:function(a,b){var z
for(z=J.bi(H.i(b,"$isk",this.$ti,"$ask"));z.v();)this.h(0,z.gF())},
i:function(a){return P.cR(this,"{","}")},
a8:function(a,b){var z,y,x
if(b<0)H.p(P.a8(b,0,null,"index",null))
for(z=P.kn(this,this.r,H.v(this,0)),y=0;z.v();){x=z.d
if(b===y)return x;++y}throw H.h(P.b_(b,this,"index",null,y))},
$isk:1,
$iseG:1},
iT:{"^":"iV;"},
ko:{"^":"a+T;"}}],["","",,P,{"^":"",cM:{"^":"a;$ti"},c1:{"^":"j9;$ti"},hw:{"^":"cM;",
$ascM:function(){return[P.n,[P.b,P.y]]}},hN:{"^":"a;a,b,c,d,e",
i:function(a){return this.a}},hM:{"^":"c1;a",
fE:function(a,b,c){var z,y,x,w,v,u
for(z=this.a,y=z.e,x=z.d,z=z.c,w=b,v=null;w<c;++w){if(w>=a.length)return H.l(a,w)
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
default:u=null}if(u!=null){if(v==null)v=new P.bx("")
if(w>b)v.a+=C.i.bo(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.h2(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asc1:function(){return[P.n,P.n]}},jK:{"^":"hw;a"},jL:{"^":"c1;",
iP:function(a,b,c){var z,y,x,w
z=a.length
P.eB(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.kJ(0,0,x)
if(w.fP(a,b,z)!==z)w.dH(C.i.cr(a,z-1),0)
return new Uint8Array(x.subarray(0,H.kP(0,w.b,x.length)))},
iO:function(a){return this.iP(a,0,null)},
$asc1:function(){return[P.n,[P.b,P.y]]}},kJ:{"^":"a;a,b,c",
dH:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.l(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.l(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.l(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.l(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.l(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.l(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.l(z,y)
z[y]=128|a&63
return!1}},
fP:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.i.cr(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.aJ(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dH(w,C.i.aJ(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.l(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.l(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.l(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.l(z,v)
z[v]=128|w&63}}return x}}}],["","",,P,{"^":"",
hy:function(a){if(a instanceof H.t)return a.i(0)
return"Instance of '"+H.b5(a)+"'"},
i3:function(a,b,c,d){var z,y
H.z(b,d)
z=J.hS(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.W(z,y,b)
return H.i(z,"$isb",[d],"$asb")},
i4:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gN(a);x.v();)C.a.h(y,H.z(x.gF(),c))
if(b)return y
return H.i(J.c7(y),"$isb",z,"$asb")},
d6:function(a,b,c){var z,y
z=P.y
H.i(a,"$isk",[z],"$ask")
if(a.constructor===Array){H.i(a,"$isb0",[z],"$asb0")
y=a.length
c=P.eB(b,c,y,null,null,null)
return H.eA(b>0||c<y?C.a.eY(a,b,c):a)}return P.jc(a,b,c)},
jc:function(a,b,c){var z,y,x
H.i(a,"$isk",[P.y],"$ask")
z=J.bi(a)
for(y=0;y<b;++y)if(!z.v())throw H.h(P.a8(b,0,y,null,null))
x=[]
for(;z.v();)x.push(z.gF())
return H.eA(x)},
iL:function(a,b,c){return new H.hU(a,H.hV(a,!1,!0,!1))},
fC:function(a,b,c,d){var z,y,x,w,v,u
H.i(a,"$isb",[P.y],"$asb")
if(c===C.x){z=$.$get$fB().b
z=z.test(b)}else z=!1
if(z)return b
y=C.I.iO(H.z(b,H.Y(c,"cM",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.l(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.d0(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
c3:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a7(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hy(a)},
o:function(a){return new P.fn(a)},
dF:function(a){H.lp(a)},
I:{"^":"a;"},
"+bool":0,
al:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.al))return!1
return this.a===b.a&&!0},
gZ:function(a){var z=this.a
return(z^C.h.bt(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.hl(H.iE(this))
y=P.bM(H.iC(this))
x=P.bM(H.iy(this))
w=P.bM(H.iz(this))
v=P.bM(H.iB(this))
u=P.bM(H.iD(this))
t=P.hm(H.iA(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
n:{
hl:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hm:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bM:function(a){if(a>=10)return""+a
return"0"+a}}},
w:{"^":"ab;"},
"+double":0,
bl:{"^":"a;a",
ap:function(a,b){return C.h.ap(this.a,H.e(b,"$isbl").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.bl))return!1
return this.a===b.a},
gZ:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hs()
y=this.a
if(y<0)return"-"+new P.bl(0-y).i(0)
x=z.$1(C.h.a2(y,6e7)%60)
w=z.$1(C.h.a2(y,1e6)%60)
v=new P.hr().$1(y%1e6)
return""+C.h.a2(y,36e8)+":"+H.f(x)+":"+H.f(w)+"."+H.f(v)},
n:{
e1:function(a,b,c,d,e,f){return new P.bl(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hr:{"^":"t:22;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hs:{"^":"t:22;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
W:{"^":"a;"},
es:{"^":"W;",
i:function(a){return"Throw of null."}},
aE:{"^":"W;a,b,c,d",
gc0:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc_:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.f(z)
w=this.gc0()+y+x
if(!this.a)return w
v=this.gc_()
u=P.c3(this.b)
return w+v+": "+H.f(u)},
n:{
h5:function(a){return new P.aE(!1,null,null,a)},
cE:function(a,b,c){return new P.aE(!0,a,b,c)}}},
ce:{"^":"aE;e,f,a,b,c,d",
gc0:function(){return"RangeError"},
gc_:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.f(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.f(z)
else if(x>z)y=": Not in range "+H.f(z)+".."+H.f(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.f(z)}return y},
n:{
cf:function(a,b,c){return new P.ce(null,null,!0,a,b,"Value not in range")},
a8:function(a,b,c,d,e){return new P.ce(b,c,!0,a,d,"Invalid value")},
eB:function(a,b,c,d,e,f){if(0>a||a>c)throw H.h(P.a8(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.h(P.a8(b,a,c,"end",f))
return b}return c}}},
hP:{"^":"aE;e,q:f>,a,b,c,d",
gc0:function(){return"RangeError"},
gc_:function(){if(J.fX(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.f(z)},
n:{
b_:function(a,b,c,d,e){var z=H.Z(e!=null?e:J.aZ(b))
return new P.hP(b,z,!0,a,c,"Index out of range")}}},
jF:{"^":"W;a",
i:function(a){return"Unsupported operation: "+this.a},
n:{
aa:function(a){return new P.jF(a)}}},
jC:{"^":"W;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
n:{
f9:function(a){return new P.jC(a)}}},
d4:{"^":"W;a",
i:function(a){return"Bad state: "+this.a},
n:{
eL:function(a){return new P.d4(a)}}},
hg:{"^":"W;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.c3(z))+"."},
n:{
aR:function(a){return new P.hg(a)}}},
it:{"^":"a;",
i:function(a){return"Out of Memory"},
$isW:1},
eK:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isW:1},
hj:{"^":"W;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fn:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
hE:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.i.bo(x,0,75)+"..."
return y+"\n"+x}},
bN:{"^":"a;"},
y:{"^":"ab;"},
"+int":0,
k:{"^":"a;$ti",
cS:["f_",function(a,b){var z=H.Y(this,"k",0)
return new H.dm(this,H.j(b,{func:1,ret:P.I,args:[z]}),[z])}],
gq:function(a){var z,y
z=this.gN(this)
for(y=0;z.v();)++y
return y},
gaF:function(a){var z,y
z=this.gN(this)
if(!z.v())throw H.h(H.cS())
y=z.gF()
if(z.v())throw H.h(H.hR())
return y},
a8:function(a,b){var z,y,x
if(b<0)H.p(P.a8(b,0,null,"index",null))
for(z=this.gN(this),y=0;z.v();){x=z.gF()
if(b===y)return x;++y}throw H.h(P.b_(b,this,"index",null,y))},
i:function(a){return P.hQ(this,"(",")")}},
aT:{"^":"a;$ti"},
b:{"^":"a;$ti",$isk:1},
"+List":0,
J:{"^":"a;",
gZ:function(a){return P.a.prototype.gZ.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
ab:{"^":"a;"},
"+num":0,
a:{"^":";",
u:function(a,b){return this===b},
gZ:function(a){return H.bw(this)},
i:function(a){return"Instance of '"+H.b5(this)+"'"},
toString:function(){return this.i(this)}},
aI:{"^":"a;"},
n:{"^":"a;",$iset:1},
"+String":0,
bx:{"^":"a;aK:a<",
gq:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
n:{
eM:function(a,b,c){var z=J.bi(b)
if(!z.v())return a
if(c.length===0){do a+=H.f(z.gF())
while(z.v())}else{a+=H.f(z.gF())
for(;z.v();)a=a+c+H.f(z.gF())}return a}}}}],["","",,W,{"^":"",
dJ:function(a){var z=document.createElement("a")
return z},
cK:function(a,b){var z=document.createElement("canvas")
return z},
ht:function(a,b,c){var z,y
z=document.body
y=(z&&C.n).al(z,a,b,c)
y.toString
z=W.A
z=new H.dm(new W.ai(y),H.j(new W.hu(),{func:1,ret:P.I,args:[z]}),[z])
return H.e(z.gaF(z),"$isP")},
hv:function(a){H.e(a,"$isc4")
return"wheel"},
bm:function(a){var z,y,x
z="element tag unavailable"
try{y=J.h1(a)
if(typeof y==="string")z=a.tagName}catch(x){H.ac(x)}return z},
e9:function(a,b,c){var z=document.createElement("img")
z.src=b
return z},
cn:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fr:function(a,b,c,d){var z,y
z=W.cn(W.cn(W.cn(W.cn(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fJ:function(a,b){var z
H.j(a,{func:1,ret:-1,args:[b]})
z=$.N
if(z===C.l)return a
return z.dN(a,b)},
a2:{"^":"P;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
h4:{"^":"a2;",
i:function(a){return String(a)},
$ish4:1,
"%":"HTMLAnchorElement"},
ly:{"^":"a2;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
dL:{"^":"a2;",$isdL:1,"%":"HTMLBaseElement"},
bY:{"^":"a2;",$isbY:1,"%":"HTMLBodyElement"},
cJ:{"^":"a2;",
bT:function(a,b,c){if(c!=null)return this.fQ(a,b,P.l0(c,null))
return this.fR(a,b)},
eI:function(a,b){return this.bT(a,b,null)},
fQ:function(a,b,c){return a.getContext(b,c)},
fR:function(a,b){return a.getContext(b)},
$iscJ:1,
$isdQ:1,
"%":"HTMLCanvasElement"},
cL:{"^":"G;",
fS:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
j2:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$iscL:1,
"%":"CanvasRenderingContext2D"},
lB:{"^":"A;0q:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
lD:{"^":"k3;0q:length=",
eL:function(a,b){var z=this.fT(a,this.fz(a,b))
return z==null?"":z},
fz:function(a,b){var z,y
z=$.$get$dV()
y=z[b]
if(typeof y==="string")return y
y=this.hW(a,b)
z[b]=y
return y},
hW:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hn()+b
if(z in a)return z
return b},
fT:function(a,b){return a.getPropertyValue(b)},
gcn:function(a){return a.bottom},
gba:function(a){return a.height},
gaV:function(a){return a.left},
gbe:function(a){return a.right},
gbi:function(a){return a.top},
gbl:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hi:{"^":"a;",
gaV:function(a){return this.eL(a,"left")}},
aS:{"^":"a2;",$isaS:1,"%":"HTMLDivElement"},
ho:{"^":"A;",
iB:function(a,b){return a.adoptNode(b)},
eJ:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
lE:{"^":"G;",
i:function(a){return String(a)},
"%":"DOMException"},
hp:{"^":"G;",
iT:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
hq:{"^":"G;",
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
u:function(a,b){var z
if(b==null)return!1
if(!H.bK(b,"$isaH",[P.ab],"$asaH"))return!1
z=J.a5(b)
return a.left===z.gaV(b)&&a.top===z.gbi(b)&&a.width===z.gbl(b)&&a.height===z.gba(b)},
gZ:function(a){return W.fr(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gcn:function(a){return a.bottom},
gba:function(a){return a.height},
gaV:function(a){return a.left},
gbe:function(a){return a.right},
gbi:function(a){return a.top},
gbl:function(a){return a.width},
$isaH:1,
$asaH:function(){return[P.ab]},
"%":";DOMRectReadOnly"},
k2:{"^":"ca;dl:a<,b",
gq:function(a){return this.b.length},
l:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.l(z,b)
return H.e(z[b],"$isP")},
h:function(a,b){J.dH(this.a,b)
return b},
gN:function(a){var z=this.jL(this)
return new J.ak(z,z.length,0,[H.v(z,0)])},
$asT:function(){return[W.P]},
$ask:function(){return[W.P]},
$asb:function(){return[W.P]}},
P:{"^":"A;0jG:tagName=",
giE:function(a){return new W.k4(a)},
gdQ:function(a){return new W.k2(a,a.children)},
gdR:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.ap()
if(x<0)x=-x*0
if(typeof w!=="number")return w.ap()
if(w<0)w=-w*0
return new P.aH(z,y,x,w,[P.ab])},
i:function(a){return a.localName},
al:["bX",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.e4
if(z==null){z=H.c([],[W.aA])
y=new W.eq(z)
C.a.h(z,W.fp(null))
C.a.h(z,W.fy())
$.e4=y
d=y}else d=z
z=$.e3
if(z==null){z=new W.fD(d)
$.e3=z
c=z}else{z.a=d
c=z}}if($.aF==null){z=document
y=z.implementation
y=(y&&C.J).iT(y,"")
$.aF=y
$.cP=y.createRange()
y=$.aF
y.toString
y=y.createElement("base")
H.e(y,"$isdL")
y.href=z.baseURI
z=$.aF.head;(z&&C.L).C(z,y)}z=$.aF
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.e(y,"$isbY")}z=$.aF
if(!!this.$isbY)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.aF.body;(z&&C.n).C(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.S(C.X,a.tagName)){z=$.cP;(z&&C.E).eR(z,x)
z=$.cP
w=(z&&C.E).iR(z,b)}else{x.innerHTML=b
w=$.aF.createDocumentFragment()
for(z=J.a5(w);y=x.firstChild,y!=null;)z.C(w,y)}z=$.aF.body
if(x==null?z!=null:x!==z)J.dI(x)
c.cY(w)
C.z.iB(document,w)
return w},function(a,b,c){return this.al(a,b,c,null)},"iS",null,null,"gku",5,5,null],
eT:function(a,b,c,d){a.textContent=null
this.C(a,this.al(a,b,c,d))},
eS:function(a,b){return this.eT(a,b,null,null)},
aZ:function(a,b){return a.getAttribute(b)},
hz:function(a,b){return a.removeAttribute(b)},
$isP:1,
"%":";Element"},
hu:{"^":"t:25;",
$1:function(a){return!!J.O(H.e(a,"$isA")).$isP}},
a0:{"^":"G;",$isa0:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
c4:{"^":"G;",
fs:function(a,b,c,d){return a.addEventListener(b,H.bd(H.j(c,{func:1,args:[W.a0]}),1),!1)},
$isc4:1,
"%":";EventTarget"},
lF:{"^":"a2;0q:length=","%":"HTMLFormElement"},
hJ:{"^":"a2;","%":"HTMLHeadElement"},
hK:{"^":"kk;",
gq:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.b_(b,a,null,null,null))
return a[b]},
a8:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isan:1,
$asan:function(){return[W.A]},
$asT:function(){return[W.A]},
$isk:1,
$ask:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]},
$ishK:1,
$asav:function(){return[W.A]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hL:{"^":"ho;","%":"HTMLDocument"},
c6:{"^":"G;0dT:data=",$isc6:1,"%":"ImageData"},
e8:{"^":"a2;",$ise8:1,$isdQ:1,"%":"HTMLImageElement"},
bq:{"^":"dc;",$isbq:1,"%":"KeyboardEvent"},
i5:{"^":"G;",
i:function(a){return String(a)},
$isi5:1,
"%":"Location"},
ik:{"^":"a2;","%":"HTMLAudioElement;HTMLMediaElement"},
ap:{"^":"dc;",$isap:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ai:{"^":"ca;a",
gaF:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.h(P.eL("No elements"))
if(y>1)throw H.h(P.eL("More than one element"))
return z.firstChild},
a6:function(a,b){var z,y,x,w,v
H.i(b,"$isk",[W.A],"$ask")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.a5(y),v=0;v<x;++v)w.C(y,z.firstChild)
return},
gN:function(a){var z=this.a.childNodes
return new W.e6(z,z.length,-1,[H.cw(C.Z,z,"av",0)])},
gq:function(a){return this.a.childNodes.length},
l:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.l(z,b)
return z[b]},
$asT:function(){return[W.A]},
$ask:function(){return[W.A]},
$asb:function(){return[W.A]}},
A:{"^":"c4;0jw:previousSibling=",
jy:function(a){var z=a.parentNode
if(z!=null)J.bX(z,a)},
i:function(a){var z=a.nodeValue
return z==null?this.eZ(a):z},
C:function(a,b){return a.appendChild(b)},
hA:function(a,b){return a.removeChild(b)},
$isA:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
ip:{"^":"kq;",
gq:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.b_(b,a,null,null,null))
return a[b]},
a8:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isan:1,
$asan:function(){return[W.A]},
$asT:function(){return[W.A]},
$isk:1,
$ask:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]},
$asav:function(){return[W.A]},
"%":"NodeList|RadioNodeList"},
iH:{"^":"G;",
iR:function(a,b){return a.createContextualFragment(b)},
eR:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
lO:{"^":"a2;0q:length=","%":"HTMLSelectElement"},
jd:{"^":"a2;","%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
je:{"^":"a2;",
al:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.bX(a,b,c,d)
z=W.ht("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.ai(y).a6(0,new W.ai(z))
return y},
"%":"HTMLTableElement"},
jf:{"^":"a2;",
al:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.bX(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.p.al(z.createElement("table"),b,c,d)
z.toString
z=new W.ai(z)
x=z.gaF(z)
x.toString
z=new W.ai(x)
w=z.gaF(z)
y.toString
w.toString
new W.ai(y).a6(0,new W.ai(w))
return y},
"%":"HTMLTableRowElement"},
lQ:{"^":"a2;",
al:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.bX(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.p.al(z.createElement("table"),b,c,d)
z.toString
z=new W.ai(z)
x=z.gaF(z)
y.toString
x.toString
new W.ai(y).a6(0,new W.ai(x))
return y},
"%":"HTMLTableSectionElement"},
eO:{"^":"a2;",$iseO:1,"%":"HTMLTemplateElement"},
bz:{"^":"G;",$isbz:1,"%":"Touch"},
b7:{"^":"dc;",$isb7:1,"%":"TouchEvent"},
lS:{"^":"kI;",
gq:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.b_(b,a,null,null,null))
return a[b]},
a8:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isan:1,
$asan:function(){return[W.bz]},
$asT:function(){return[W.bz]},
$isk:1,
$ask:function(){return[W.bz]},
$isb:1,
$asb:function(){return[W.bz]},
$asav:function(){return[W.bz]},
"%":"TouchList"},
dc:{"^":"a0;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
lW:{"^":"ik;",$isdQ:1,"%":"HTMLVideoElement"},
bC:{"^":"ap;",
giZ:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.aa("deltaY is not supported"))},
giY:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.aa("deltaX is not supported"))},
$isbC:1,
"%":"WheelEvent"},
jW:{"^":"c4;",
hD:function(a,b){return a.requestAnimationFrame(H.bd(H.j(b,{func:1,ret:-1,args:[P.ab]}),1))},
fJ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fm:{"^":"A;",$isfm:1,"%":"Attr"},
m0:{"^":"hq;",
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
u:function(a,b){var z
if(b==null)return!1
if(!H.bK(b,"$isaH",[P.ab],"$asaH"))return!1
z=J.a5(b)
return a.left===z.gaV(b)&&a.top===z.gbi(b)&&a.width===z.gbl(b)&&a.height===z.gba(b)},
gZ:function(a){return W.fr(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gba:function(a){return a.height},
gbl:function(a){return a.width},
"%":"ClientRect|DOMRect"},
m4:{"^":"kN;",
gq:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.b_(b,a,null,null,null))
return a[b]},
a8:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$isan:1,
$asan:function(){return[W.A]},
$asT:function(){return[W.A]},
$isk:1,
$ask:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]},
$asav:function(){return[W.A]},
"%":"MozNamedAttrMap|NamedNodeMap"},
k1:{"^":"ej;dl:a<",
a3:function(a,b){var z,y,x,w,v,u
H.j(b,{func:1,ret:-1,args:[P.n,P.n]})
for(z=this.gaB(),y=z.length,x=this.a,w=J.a5(x),v=0;v<z.length;z.length===y||(0,H.x)(z),++v){u=z[v]
b.$2(u,w.aZ(x,u))}},
gaB:function(){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.n])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.l(z,w)
v=H.e(z[w],"$isfm")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$ascc:function(){return[P.n,P.n]},
$asae:function(){return[P.n,P.n]}},
k4:{"^":"k1;a",
l:function(a,b){return J.cD(this.a,H.F(b))},
gq:function(a){return this.gaB().length}},
k5:{"^":"j8;a,b,c,$ti"},
m1:{"^":"k5;a,b,c,$ti"},
k6:{"^":"d5;a,b,c,d,e,$ti",n:{
U:function(a,b,c,d,e){var z,y
z=W.fJ(new W.k7(c),W.a0)
y=z!=null
if(y&&!0){H.j(z,{func:1,args:[W.a0]})
if(y)J.fZ(a,b,z,!1)}return new W.k6(0,a,b,z,!1,[e])}}},
k7:{"^":"t:41;a",
$1:function(a){return this.a.$1(H.e(a,"$isa0"))}},
bV:{"^":"a;a",
fc:function(a){var z,y
z=$.$get$dp()
if(z.a===0){for(y=0;y<262;++y)z.W(0,C.W[y],W.l9())
for(y=0;y<12;++y)z.W(0,C.u[y],W.la())}},
aQ:function(a){return $.$get$fq().S(0,W.bm(a))},
ax:function(a,b,c){var z,y,x
z=W.bm(a)
y=$.$get$dp()
x=y.l(0,H.f(z)+"::"+b)
if(x==null)x=y.l(0,"*::"+b)
if(x==null)return!1
return H.dv(x.$4(a,b,c,this))},
$isaA:1,
n:{
fp:function(a){var z,y
z=W.dJ(null)
y=window.location
z=new W.bV(new W.kw(z,y))
z.fc(a)
return z},
m2:[function(a,b,c,d){H.e(a,"$isP")
H.F(b)
H.F(c)
H.e(d,"$isbV")
return!0},"$4","l9",16,0,26],
m3:[function(a,b,c,d){var z,y,x
H.e(a,"$isP")
H.F(b)
H.F(c)
z=H.e(d,"$isbV").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","la",16,0,26]}},
av:{"^":"a;$ti",
gN:function(a){return new W.e6(a,this.gq(a),-1,[H.cw(this,a,"av",0)])}},
eq:{"^":"a;a",
aQ:function(a){return C.a.dL(this.a,new W.ir(a))},
ax:function(a,b,c){return C.a.dL(this.a,new W.iq(a,b,c))},
$isaA:1},
ir:{"^":"t:13;a",
$1:function(a){return H.e(a,"$isaA").aQ(this.a)}},
iq:{"^":"t:13;a,b,c",
$1:function(a){return H.e(a,"$isaA").ax(this.a,this.b,this.c)}},
kx:{"^":"a;",
fl:function(a,b,c,d){var z,y,x
this.a.a6(0,c)
z=b.cS(0,new W.ky())
y=b.cS(0,new W.kz())
this.b.a6(0,z)
x=this.c
x.a6(0,C.Y)
x.a6(0,y)},
aQ:function(a){return this.a.S(0,W.bm(a))},
ax:["f2",function(a,b,c){var z,y
z=W.bm(a)
y=this.c
if(y.S(0,H.f(z)+"::"+b))return this.d.iC(c)
else if(y.S(0,"*::"+b))return this.d.iC(c)
else{y=this.b
if(y.S(0,H.f(z)+"::"+b))return!0
else if(y.S(0,"*::"+b))return!0
else if(y.S(0,H.f(z)+"::*"))return!0
else if(y.S(0,"*::*"))return!0}return!1}],
$isaA:1},
ky:{"^":"t:12;",
$1:function(a){return!C.a.S(C.u,H.F(a))}},
kz:{"^":"t:12;",
$1:function(a){return C.a.S(C.u,H.F(a))}},
kB:{"^":"kx;e,a,b,c,d",
ax:function(a,b,c){if(this.f2(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cD(a,"template")==="")return this.e.S(0,b)
return!1},
n:{
fy:function(){var z,y,x,w,v
z=P.n
y=P.eh(C.t,z)
x=H.v(C.t,0)
w=H.j(new W.kC(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.kB(y,P.bS(null,null,null,z),P.bS(null,null,null,z),P.bS(null,null,null,z),null)
y.fl(null,new H.ia(C.t,w,[x,z]),v,null)
return y}}},
kC:{"^":"t:27;",
$1:function(a){return"TEMPLATE::"+H.f(H.F(a))}},
kA:{"^":"a;",
aQ:function(a){var z=J.O(a)
if(!!z.$iseF)return!1
z=!!z.$isd7
if(z&&W.bm(a)==="foreignObject")return!1
if(z)return!0
return!1},
ax:function(a,b,c){if(b==="is"||C.i.bW(b,"on"))return!1
return this.aQ(a)},
$isaA:1},
e6:{"^":"a;a,b,c,0d,$ti",
sdn:function(a){this.d=H.z(a,H.v(this,0))},
v:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sdn(J.fY(this.a,z))
this.c=z
return!0}this.sdn(null)
this.c=y
return!1},
gF:function(){return this.d},
$isaT:1},
aA:{"^":"a;"},
kw:{"^":"a;a,b",$islV:1},
fD:{"^":"a;a",
cY:function(a){new W.kK(this).$2(a,null)},
b6:function(a,b){if(b==null)J.dI(a)
else J.bX(b,a)},
hI:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.h_(a)
x=J.cD(y.gdl(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.ac(t)}v="element unprintable"
try{v=J.a7(a)}catch(t){H.ac(t)}try{u=W.bm(a)
this.hH(H.e(a,"$isP"),b,z,v,u,H.e(y,"$isae"),H.F(x))}catch(t){if(H.ac(t) instanceof P.aE)throw t
else{this.b6(a,b)
window
s="Removing corrupted element "+H.f(v)
if(typeof console!="undefined")window.console.warn(s)}}},
hH:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.b6(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aQ(a)){this.b6(a,b)
window
z="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.ax(a,"is",g)){this.b6(a,b)
window
z="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gaB()
y=H.c(z.slice(0),[H.v(z,0)])
for(x=f.gaB().length-1,z=f.a,w=J.a5(z);x>=0;--x){if(x>=y.length)return H.l(y,x)
v=y[x]
if(!this.a.ax(a,J.h3(v),w.aZ(z,v))){window
u="Removing disallowed attribute <"+H.f(e)+" "+v+'="'+H.f(w.aZ(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.aZ(z,v)
w.hz(z,v)}}if(!!J.O(a).$iseO)this.cY(a.content)},
$islN:1},
kK:{"^":"t:28;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.hI(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.b6(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.h0(z)}catch(w){H.ac(w)
v=H.e(z,"$isA")
if(x){u=v.parentNode
if(u!=null)J.bX(u,v)}else J.bX(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.e(y,"$isA")}}},
k3:{"^":"G+hi;"},
kj:{"^":"G+T;"},
kk:{"^":"kj+av;"},
kp:{"^":"G+T;"},
kq:{"^":"kp+av;"},
kH:{"^":"G+T;"},
kI:{"^":"kH+av;"},
kM:{"^":"G+T;"},
kN:{"^":"kM+av;"}}],["","",,P,{"^":"",
l3:function(a){var z,y
z=J.O(a)
if(!!z.$isc6){y=z.gdT(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fA(a.data,a.height,a.width)},
l2:function(a){if(a instanceof P.fA)return{data:a.a,height:a.b,width:a.c}
return a},
l0:function(a,b){var z={}
a.a3(0,new P.l1(z))
return z},
e0:function(){var z=$.e_
if(z==null){z=J.cB(window.navigator.userAgent,"Opera",0)
$.e_=z}return z},
hn:function(){var z,y
z=$.dX
if(z!=null)return z
y=$.dY
if(y==null){y=J.cB(window.navigator.userAgent,"Firefox",0)
$.dY=y}if(y)z="-moz-"
else{y=$.dZ
if(y==null){y=!P.e0()&&J.cB(window.navigator.userAgent,"Trident/",0)
$.dZ=y}if(y)z="-ms-"
else z=P.e0()?"-o-":"-webkit-"}$.dX=z
return z},
fA:{"^":"a;dT:a>,b,c",$isc6:1},
l1:{"^":"t:18;a",
$2:function(a,b){this.a[a]=b}},
hB:{"^":"ca;a,b",
gc4:function(){var z,y,x
z=this.b
y=H.Y(z,"T",0)
x=W.P
return new H.i8(new H.dm(z,H.j(new P.hC(),{func:1,ret:P.I,args:[y]}),[y]),H.j(new P.hD(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){J.dH(this.b.a,b)},
gq:function(a){return J.aZ(this.gc4().a)},
l:function(a,b){var z=this.gc4()
return z.b.$1(J.cC(z.a,b))},
gN:function(a){var z=P.i4(this.gc4(),!1,W.P)
return new J.ak(z,z.length,0,[H.v(z,0)])},
$asT:function(){return[W.P]},
$ask:function(){return[W.P]},
$asb:function(){return[W.P]}},
hC:{"^":"t:25;",
$1:function(a){return!!J.O(H.e(a,"$isA")).$isP}},
hD:{"^":"t:29;",
$1:function(a){return H.d(H.e(a,"$isA"),"$isP")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
co:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kl:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
kr:{"^":"a;$ti",
gbe:function(a){var z=this.a
if(typeof z!=="number")return z.G()
return H.z(z+this.c,H.v(this,0))},
gcn:function(a){var z=this.b
if(typeof z!=="number")return z.G()
return H.z(z+this.d,H.v(this,0))},
i:function(a){return"Rectangle ("+H.f(this.a)+", "+H.f(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(!H.bK(b,"$isaH",[P.ab],"$asaH"))return!1
z=this.a
y=J.a5(b)
x=y.gaV(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbi(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.G()
w=H.v(this,0)
if(H.z(z+this.c,w)===y.gbe(b)){if(typeof x!=="number")return x.G()
z=H.z(x+this.d,w)===y.gcn(b)}else z=!1}else z=!1}else z=!1
return z},
gZ:function(a){var z,y,x,w,v
z=this.a
y=J.aY(z)
x=this.b
w=J.aY(x)
if(typeof z!=="number")return z.G()
v=H.v(this,0)
z=H.z(z+this.c,v)
if(typeof x!=="number")return x.G()
v=H.z(x+this.d,v)
return P.kl(P.co(P.co(P.co(P.co(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
aH:{"^":"kr;aV:a>,bi:b>,bl:c>,ba:d>,$ti"}}],["","",,P,{"^":"",eF:{"^":"d7;",$iseF:1,"%":"SVGScriptElement"},d7:{"^":"P;",
gdQ:function(a){return new P.hB(a,new W.ai(a))},
al:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.aA])
C.a.h(z,W.fp(null))
C.a.h(z,W.fy())
C.a.h(z,new W.kA())
c=new W.fD(new W.eq(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.n).iS(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.ai(w)
u=z.gaF(z)
for(z=J.a5(v);x=u.firstChild,x!=null;)z.C(v,x)
return v},
$isd7:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"}}],["","",,P,{"^":""}],["","",,P,{"^":"",h7:{"^":"G;",$ish7:1,"%":"WebGLBuffer"},hF:{"^":"G;",$ishF:1,"%":"WebGLFramebuffer"},iG:{"^":"G;",$isiG:1,"%":"WebGLProgram"},d1:{"^":"G;",
bv:function(a,b){return a.activeTexture(b)},
dM:function(a,b,c){return a.attachShader(b,c)},
ar:function(a,b,c){return a.bindBuffer(b,c)},
iG:function(a,b,c){return a.bindFramebuffer(b,c)},
a7:function(a,b,c){return a.bindTexture(b,c)},
iH:function(a,b,c){return a.blendFunc(b,c)},
dO:function(a,b,c,d){return a.bufferData(b,c,d)},
iJ:function(a,b){return a.clear(b)},
iK:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
iL:function(a,b){return a.clearDepth(b)},
iM:function(a,b){return a.compileShader(b)},
iU:function(a,b){return a.createShader(b)},
iW:function(a,b){return a.deleteProgram(b)},
iX:function(a,b){return a.deleteShader(b)},
j_:function(a,b){return a.depthFunc(b)},
j0:function(a,b){return a.disable(b)},
dV:function(a,b){return a.disableVertexAttribArray(b)},
j1:function(a,b,c,d,e){return a.drawElements(b,c,H.Z(d),H.Z(e))},
cv:function(a,b){return a.enable(b)},
dY:function(a,b){return a.enableVertexAttribArray(b)},
eD:function(a,b){return a.generateMipmap(b)},
eE:function(a,b,c){return a.getActiveAttrib(b,c)},
eF:function(a,b,c){return a.getActiveUniform(b,c)},
eG:function(a,b,c){return a.getAttribLocation(b,c)},
cX:function(a,b){return a.getParameter(b)},
eK:function(a,b){return a.getProgramInfoLog(b)},
bU:function(a,b,c){return a.getProgramParameter(b,c)},
eM:function(a,b){return a.getShaderInfoLog(b)},
eN:function(a,b,c){return a.getShaderParameter(b,c)},
eO:function(a,b,c){return a.getUniformLocation(b,c)},
je:function(a,b){return a.linkProgram(b)},
er:function(a,b,c){return a.pixelStorei(b,c)},
eW:function(a,b,c){return a.shaderSource(b,c)},
jH:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.O(g)
if(!!z.$isc6)y=!0
else y=!1
if(y){this.hY(a,b,c,d,e,f,P.l2(g))
return}if(!!z.$ise8)z=!0
else z=!1
if(z){this.hZ(a,b,c,d,e,f,g)
return}throw H.h(P.h5("Incorrect number or type of arguments"))},
ev:function(a,b,c,d,e,f,g){return this.jH(a,b,c,d,e,f,g,null,null,null)},
hY:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
hZ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
at:function(a,b,c,d){return a.texParameteri(b,c,d)},
H:function(a,b,c){return a.uniform1f(b,c)},
J:function(a,b,c){return a.uniform1i(b,c)},
t:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ez:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eA:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cR:function(a,b){return a.useProgram(b)},
jO:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
jP:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isd1:1,
"%":"WebGLRenderingContext"},iW:{"^":"G;",$isiW:1,"%":"WebGLShader"},jg:{"^":"G;",$isjg:1,"%":"WebGLTexture"},jA:{"^":"G;",$isjA:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",R:{"^":"a;0a,0b,0c,0d,$ti",
sfY:function(a){this.a=H.i(a,"$isb",[H.Y(this,"R",0)],"$asb")},
sdw:function(a){this.b=H.j(a,{func:1,ret:P.I,args:[[P.k,H.Y(this,"R",0)]]})},
sds:function(a){this.c=H.j(a,{func:1,ret:-1,args:[P.y,[P.k,H.Y(this,"R",0)]]})},
sdz:function(a){this.d=H.j(a,{func:1,ret:-1,args:[P.y,[P.k,H.Y(this,"R",0)]]})},
bq:function(a){this.sfY(H.c([],[a]))
this.sdw(null)
this.sds(null)
this.sdz(null)},
cZ:function(a,b,c){var z=H.Y(this,"R",0)
H.j(b,{func:1,ret:P.I,args:[[P.k,z]]})
z={func:1,ret:-1,args:[P.y,[P.k,z]]}
H.j(a,z)
H.j(c,z)
this.sdw(b)
this.sds(a)
this.sdz(c)},
b_:function(a,b){return this.cZ(a,null,b)},
dv:function(a){var z
H.i(a,"$isk",[H.Y(this,"R",0)],"$ask")
z=this.b
if(z!=null)return z.$1(a)
return!0},
d4:function(a,b){var z
H.i(b,"$isk",[H.Y(this,"R",0)],"$ask")
z=this.c
if(z!=null)z.$2(a,b)},
gq:function(a){return this.a.length},
gN:function(a){var z=this.a
return new J.ak(z,z.length,0,[H.v(z,0)])},
a8:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.l(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.Y(this,"R",0)
H.z(b,z)
z=[z]
if(this.dv(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.d4(x,H.c([b],z))}},
a6:function(a,b){var z,y
H.i(b,"$isk",[H.Y(this,"R",0)],"$ask")
if(this.dv(b)){z=this.a
y=z.length
C.a.a6(z,b)
this.d4(y,b)}},
$isk:1,
n:{
cN:function(a){var z=new O.R([a])
z.bq(a)
return z}}},cY:{"^":"a;0a,0b",
sc6:function(a){this.a=H.i(a,"$isb",[V.ao],"$asb")},
gq:function(a){return this.a.length},
gp:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
f8:function(a){var z=this.b
if(!(z==null))z.D(a)},
aG:function(){return this.f8(null)},
gY:function(){var z=this.a
if(z.length>0)return C.a.gbO(z)
else return V.b3()},
bQ:function(a){var z=this.a
if(a==null)C.a.h(z,V.b3())
else C.a.h(z,a)
this.aG()},
aC:function(){var z=this.a
if(z.length>0){z.pop()
this.aG()}}}}],["","",,E,{"^":"",cF:{"^":"a;"},am:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0aj:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sf9:function(a,b){this.y=H.i(b,"$isR",[E.am],"$asR")},
saj:function(a){this.z=H.e(a,"$isbn")},
sbV:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gp().T(0,this.gep())
y=this.c
if(y!=null)y.gp().h(0,this.gep())
x=new D.E("shape",z,this.c,this,[F.eH])
x.b=!0
this.aX(x)}},
ao:function(a){var z
for(z=this.y.a,z=new J.ak(z,z.length,0,[H.v(z,0)]);z.v();)z.d.ao(a)},
ab:function(a){var z,y
z=a.dx
C.a.h(z.a,z.gY())
z.aG()
a.cN(this.f)
z=a.dy
y=(z&&C.a).gbO(z)
if(y!=null&&this.d!=null)y.es(a,this)
for(z=this.y.a,z=new J.ak(z,z.length,0,[H.v(z,0)]);z.v();)z.d.ab(a)
a.cM()
a.dx.aC()},
gp:function(){var z=this.z
if(z==null){z=D.C()
this.z=z}return z},
aX:function(a){var z=this.z
if(!(z==null))z.D(a)},
a4:function(){return this.aX(null)},
jn:[function(a){H.e(a,"$isu")
this.e=null
this.aX(a)},function(){return this.jn(null)},"kA","$1","$0","gep",0,2,0],
jl:[function(a){this.aX(H.e(a,"$isu"))},function(){return this.jl(null)},"ky","$1","$0","geo",0,2,0],
kx:[function(a,b){var z,y,x,w,v,u,t
H.i(b,"$isk",[E.am],"$ask")
for(z=b.length,y=this.geo(),x={func:1,ret:-1,args:[D.u]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gaj()==null){t=new D.bn()
t.sad(null)
t.sb4(null)
t.c=null
t.d=0
u.saj(t)}t=u.gaj()
t.toString
H.j(y,x)
if(t.a==null)t.sad(H.c([],w))
t=t.a;(t&&C.a).h(t,y)}}this.a4()},"$2","gjk",8,0,6],
kz:[function(a,b){var z,y
H.i(b,"$isk",[E.am],"$ask")
for(z=b.gN(b),y=this.geo();z.v();)z.gF().gp().T(0,y)
this.a4()},"$2","gjm",8,0,6],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaz:1,
n:{
e5:function(a,b,c,d,e,f){var z=new E.am()
z.a=d
z.b=!0
z.sf9(0,O.cN(E.am))
z.y.b_(z.gjk(),z.gjm())
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
return z}}},iM:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
shX:function(a){this.dy=H.i(a,"$isb",[O.by],"$asb")},
shS:function(a){this.fr=H.i(a,"$isae",[P.n,A.cg],"$asae")},
f5:function(a,b){var z,y
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
z=new O.cY()
y=[V.ao]
z.sc6(H.c([],y))
z.b=null
z.gp().h(0,new E.iO(this))
this.cy=z
z=new O.cY()
z.sc6(H.c([],y))
z.b=null
z.gp().h(0,new E.iP(this))
this.db=z
z=new O.cY()
z.sc6(H.c([],y))
z.b=null
z.gp().h(0,new E.iQ(this))
this.dx=z
this.shX(H.c([],[O.by]))
z=this.dy;(z&&C.a).h(z,null)
this.shS(new H.b1(0,0,[P.n,A.cg]))},
gjx:function(){var z=this.z
if(z==null){z=this.cy.gY().B(0,this.db.gY())
this.z=z}return z},
cN:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gbO(z):a;(z&&C.a).h(z,y)},
cM:function(){var z=this.dy
if(z.length>1)z.pop()},
dK:function(a){var z=a.b
if(z.length===0)throw H.h(P.o("May not cache a shader with no name."))
if(this.fr.dS(z))throw H.h(P.o('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.W(0,z,a)},
n:{
iN:function(a,b){var z=new E.iM(a,b)
z.f5(a,b)
return z}}},iO:{"^":"t:7;a",
$1:function(a){var z
H.e(a,"$isu")
z=this.a
z.z=null
z.ch=null}},iP:{"^":"t:7;a",
$1:function(a){var z
H.e(a,"$isu")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},iQ:{"^":"t:7;a",
$1:function(a){var z
H.e(a,"$isu")
z=this.a
z.ch=null
z.cx=null}},jl:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0aj:x<,0y,0z,0Q,0ch,0cx,0cy",
saj:function(a){this.x=H.e(a,"$isbn")},
fb:[function(a){H.e(a,"$isu")
this.jB()},function(){return this.fb(null)},"fa","$1","$0","gd5",0,2,0],
gj8:function(){var z,y,x
z=Date.now()
y=C.h.a2(P.e1(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.al(z,!1)
return x/y},
dB:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.B()
if(typeof z!=="number")return H.B(z)
x=C.k.cE(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.B()
w=C.k.cE(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.eV(C.q,this.gjA())}},
jB:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.j(new E.jn(this),{func:1,ret:-1,args:[P.ab]})
C.G.fJ(z)
C.G.hD(z,W.fJ(y,P.ab))}},"$0","gjA",0,0,3],
jz:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dB()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.al(w,!1)
x.y=P.e1(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sq(w.a,0)
w.aG()
w=x.db
C.a.sq(w.a,0)
w.aG()
w=x.dx
C.a.sq(w.a,0)
w.aG()
w=x.dy;(w&&C.a).sq(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.ab(this.e)}x=this.z
if(!(x==null))x.D(null)}catch(v){z=H.ac(v)
y=H.bf(v)
P.dF("Error: "+H.f(z))
P.dF("Stack: "+H.f(y))
throw H.h(z)}},
n:{
jm:function(a,b,c,d,e){var z,y,x,w
z=J.O(a)
if(!!z.$iscJ)return E.eU(a,!0,!0,!0,!1)
y=W.cK(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gdQ(a).h(0,y)
w=E.eU(y,!0,!0,!0,!1)
w.a=a
return w},
eU:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jl()
y=P.i2(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.n,null)
x=C.o.bT(a,"webgl",y)
x=H.e(x==null?C.o.bT(a,"experimental-webgl",y):x,"$isd1")
if(x==null)H.p(P.o("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.iN(x,a)
w=new T.ji(x)
w.b=H.Z((x&&C.b).cX(x,3379))
w.c=H.Z(C.b.cX(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.jG(a)
v=new X.hX()
v.c=new X.ay(!1,!1,!1)
v.shx(P.bS(null,null,null,P.y))
w.b=v
v=new X.il(w)
v.f=0
v.r=V.aG()
v.x=V.aG()
v.Q=1
v.ch=1
w.c=v
v=new X.i6(w)
v.r=0
v.x=V.aG()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jq(w)
v.e=0
v.f=V.aG()
v.r=V.aG()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.sfK(H.c([],[[P.d5,P.a]]))
v=w.z
u=document
t=W.ap
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.U(u,"contextmenu",H.j(w.ghb(),s),!1,t))
v=w.z
r=W.a0
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.U(a,"focus",H.j(w.ghe(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.U(a,"blur",H.j(w.gh8(),q),!1,r))
v=w.z
p=W.bq
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.U(u,"keyup",H.j(w.ghg(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.U(u,"keydown",H.j(w.ghf(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.U(a,"mousedown",H.j(w.ghj(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.U(a,"mouseup",H.j(w.ghl(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.U(a,"mousemove",H.j(w.ghk(),s),!1,t))
p=w.z
o=W.bC;(p&&C.a).h(p,W.U(a,H.F(W.hv(a)),H.j(w.ghm(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.U(u,"mousemove",H.j(w.ghc(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.U(u,"mouseup",H.j(w.ghd(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.U(u,"pointerlockchange",H.j(w.ghn(),q),!1,r))
r=w.z
q=W.b7
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.U(a,"touchstart",H.j(w.ghv(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.U(a,"touchend",H.j(w.ght(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.U(a,"touchmove",H.j(w.ghu(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.al(Date.now(),!1)
z.cy=0
z.dB()
return z}}},jn:{"^":"t:42;a",
$1:function(a){var z
H.lo(a)
z=this.a
if(z.ch){z.ch=!1
z.jz()}}}}],["","",,Z,{"^":"",fj:{"^":"a;a,b",$islz:1,n:{
dl:function(a,b,c){var z
H.i(c,"$isb",[P.y],"$asb")
z=a.createBuffer()
C.b.ar(a,b,z)
C.b.dO(a,b,new Int16Array(H.bG(c)),35044)
C.b.ar(a,b,null)
return new Z.fj(b,z)}}},dO:{"^":"cF;a,b,c,d,e",
a1:function(a){var z,y,x
try{y=a.a
C.b.dY(y,this.e)
C.b.jO(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.ac(x)
y=P.o('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.f(z))
throw H.h(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.f(this.e)+"]"}},fk:{"^":"a;a",$islA:1},cI:{"^":"a;a,0b,c,d",
sfU:function(a){this.b=H.i(a,"$isb",[Z.bO],"$asb")},
aA:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
a1:function(a){var z,y
z=this.a
C.b.ar(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].a1(a)},
bk:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.b.dV(x,z[y].e)
C.b.ar(x,this.a.a,null)},
ab:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.l(w,x)
v=w[x]
w=v.c
u=w.a
C.b.ar(y,u,w.b)
C.b.j1(y,v.a,v.b,5123,0)
C.b.ar(y,u,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.n]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a7(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(y,", ")+"\nAttrs:   "+C.a.k(u,", ")},
$islR:1},bO:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b5(this.c)+"'")+"]"}},b8:{"^":"a;a",
gd_:function(a){var z,y
z=this.a
y=(z&$.$get$at().a)!==0?3:0
if((z&$.$get$aL().a)!==0)y+=3
if((z&$.$get$aK().a)!==0)y+=3
if((z&$.$get$aM().a)!==0)y+=2
if((z&$.$get$aN().a)!==0)y+=3
if((z&$.$get$bA().a)!==0)y+=3
if((z&$.$get$bB().a)!==0)y+=4
if((z&$.$get$b9().a)!==0)++y
return(z&$.$get$aJ().a)!==0?y+4:y},
iD:function(a){var z,y,x
z=$.$get$at()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aL()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aK()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aM()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aN()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bA()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bB()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b9()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aJ()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fi()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b8))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.n])
y=this.a
if((y&$.$get$at().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aL().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aK().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aM().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aN().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bA().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bB().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b9().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aJ().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.k(z,"|")},
n:{
ah:function(a){return new Z.b8(a)}}}}],["","",,D,{"^":"",dR:{"^":"a;"},bn:{"^":"a;0a,0b,0c,0d",
sad:function(a){this.a=H.i(a,"$isb",[{func:1,ret:-1,args:[D.u]}],"$asb")},
sb4:function(a){this.b=H.i(a,"$isb",[{func:1,ret:-1,args:[D.u]}],"$asb")},
h:function(a,b){var z={func:1,ret:-1,args:[D.u]}
H.j(b,z)
if(this.a==null)this.sad(H.c([],[z]))
z=this.a;(z&&C.a).h(z,b)},
T:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[D.u]})
z=this.a
z=z==null?null:C.a.S(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).T(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.S(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).T(z,b)||y}return y},
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
if(a==null){a=new D.u(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.a3(y,new D.hz(z))
y=this.b
if(!(y==null))C.a.a3(y,new D.hA(z))
z=this.b
if(!(z==null))C.a.sq(z,0)
return!0},
dX:function(){return this.D(null)},
jC:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.D(y)}}},
aE:function(){return this.jC(!0,!1)},
n:{
C:function(){var z=new D.bn()
z.sad(null)
z.sb4(null)
z.c=null
z.d=0
return z}}},hz:{"^":"t:15;a",
$1:function(a){var z
H.j(a,{func:1,ret:-1,args:[D.u]})
z=this.a.a
z.b
a.$1(z)}},hA:{"^":"t:15;a",
$1:function(a){var z
H.j(a,{func:1,ret:-1,args:[D.u]})
z=this.a.a
z.b
a.$1(z)}},u:{"^":"a;a,0b"},bP:{"^":"u;c,d,a,0b,$ti"},bQ:{"^":"u;c,d,a,0b,$ti"},E:{"^":"u;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}}],["","",,X,{"^":"",dP:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dP))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}},ee:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ee))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}},hX:{"^":"a;0a,0b,0c,0d",
shx:function(a){this.d=H.i(a,"$iseG",[P.y],"$aseG")},
jt:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jp:function(a){this.c=a.b
this.d.T(0,a.a)
return!1}},ei:{"^":"cd;x,y,c,d,e,a,0b"},i6:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
b2:function(a,b){var z,y,x,w,v,u,t,s
z=new P.al(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.B()
v=b.b
u=this.ch
if(typeof v!=="number")return v.B()
t=new V.a3(y.a+x*w,y.b+v*u)
u=this.a.gaR()
s=new X.bs(a,V.aG(),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cL:function(a,b){this.r=a.a
return!1},
bc:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.eQ()
if(typeof z!=="number")return z.eB()
this.r=(z&~y)>>>0
return!1},
bb:function(a,b){var z=this.d
if(z==null)return!1
z.D(this.b2(a,b))
return!0},
ju:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaR()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.B()
t=a.b
s=this.cy
if(typeof t!=="number")return t.B()
w=new X.cZ(new V.Q(v*u,t*s),y,x,new P.al(w,!1),this)
w.b=!0
z.D(w)
return!0},
hi:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.al(Date.now(),!1)
y=this.f
x=new X.ei(c,a,this.a.gaR(),b,z,this)
x.b=!0
y.D(x)
this.y=z
this.x=V.aG()}},ay:{"^":"a;a,b,c",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ay))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},bs:{"^":"cd;x,y,z,Q,ch,c,d,e,a,0b"},il:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
c2:function(a,b,c){var z,y,x
z=new P.al(Date.now(),!1)
y=this.a.gaR()
x=new X.bs(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cL:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.D(this.c2(a,b,!0))
return!0},
bc:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.eQ()
if(typeof z!=="number")return z.eB()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.D(this.c2(a,b,!0))
return!0},
bb:function(a,b){var z=this.d
if(z==null)return!1
z.D(this.c2(a,b,!1))
return!0},
jv:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaR()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.B()
u=a.b
t=this.ch
if(typeof u!=="number")return u.B()
x=new X.cZ(new V.Q(w*v,u*t),y,b,new P.al(x,!1),this)
x.b=!0
z.D(x)
return!0},
gdW:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
gbS:function(){var z=this.c
if(z==null){z=D.C()
this.c=z}return z},
gen:function(){var z=this.d
if(z==null){z=D.C()
this.d=z}return z}},cZ:{"^":"cd;x,c,d,e,a,0b"},cd:{"^":"u;"},eY:{"^":"cd;x,y,z,Q,ch,c,d,e,a,0b"},jq:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
b2:function(a,b){var z,y,x,w
H.i(a,"$isb",[V.a3],"$asb")
z=new P.al(Date.now(),!1)
y=a.length>0?a[0]:V.aG()
x=this.a.gaR()
w=new X.eY(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
js:function(a){var z
H.i(a,"$isb",[V.a3],"$asb")
z=this.b
if(z==null)return!1
z.D(this.b2(a,!0))
return!0},
jq:function(a){var z
H.i(a,"$isb",[V.a3],"$asb")
z=this.c
if(z==null)return!1
z.D(this.b2(a,!0))
return!0},
jr:function(a){var z
H.i(a,"$isb",[V.a3],"$asb")
z=this.d
if(z==null)return!1
z.D(this.b2(a,!1))
return!0}},jG:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
sfK:function(a){this.z=H.i(a,"$isb",[[P.d5,P.a]],"$asb")},
gaR:function(){var z=this.a
return V.eD(0,0,C.o.gdR(z).c,C.o.gdR(z).d)},
di:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.ee(z,new X.ay(y,a.altKey,a.shiftKey))},
aP:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ay(y,a.altKey,a.shiftKey)},
ci:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ay(y,a.altKey,a.shiftKey)},
aw:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.K()
v=z.top
if(typeof x!=="number")return x.K()
return new V.a3(y-w,x-v)},
b5:function(a){return new V.Q(a.movementX,a.movementY)},
ce:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.a3])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
t=C.k.an(u.pageX)
C.k.an(u.pageY)
s=z.left
C.k.an(u.pageX)
C.a.h(y,new V.a3(t-s,C.k.an(u.pageY)-z.top))}return y},
au:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dP(z,new X.ay(y,a.altKey,a.shiftKey))},
c7:function(a){var z,y,x,w,v,u
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
k8:[function(a){this.f=!0},"$1","ghe",4,0,9],
jZ:[function(a){this.f=!1},"$1","gh8",4,0,9],
k5:[function(a){H.e(a,"$isap")
if(this.f&&this.c7(a))a.preventDefault()},"$1","ghb",4,0,4],
ka:[function(a){var z
H.e(a,"$isbq")
if(!this.f)return
z=this.di(a)
this.b.jt(z)},"$1","ghg",4,0,17],
k9:[function(a){var z
H.e(a,"$isbq")
if(!this.f)return
z=this.di(a)
this.b.jp(z)},"$1","ghf",4,0,17],
kc:[function(a){var z,y,x,w
H.e(a,"$isap")
z=this.a
z.focus()
this.f=!0
this.aP(a)
if(this.x){y=this.au(a)
x=this.b5(a)
if(this.d.cL(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.au(a)
w=this.aw(a)
if(this.c.cL(y,w))a.preventDefault()},"$1","ghj",4,0,4],
ke:[function(a){var z,y,x
H.e(a,"$isap")
this.aP(a)
z=this.au(a)
if(this.x){y=this.b5(a)
if(this.d.bc(z,y))a.preventDefault()
return}if(this.r)return
x=this.aw(a)
if(this.c.bc(z,x))a.preventDefault()},"$1","ghl",4,0,4],
k7:[function(a){var z,y,x
H.e(a,"$isap")
if(!this.c7(a)){this.aP(a)
z=this.au(a)
if(this.x){y=this.b5(a)
if(this.d.bc(z,y))a.preventDefault()
return}if(this.r)return
x=this.aw(a)
if(this.c.bc(z,x))a.preventDefault()}},"$1","ghd",4,0,4],
kd:[function(a){var z,y,x
H.e(a,"$isap")
this.aP(a)
z=this.au(a)
if(this.x){y=this.b5(a)
if(this.d.bb(z,y))a.preventDefault()
return}if(this.r)return
x=this.aw(a)
if(this.c.bb(z,x))a.preventDefault()},"$1","ghk",4,0,4],
k6:[function(a){var z,y,x
H.e(a,"$isap")
if(!this.c7(a)){this.aP(a)
z=this.au(a)
if(this.x){y=this.b5(a)
if(this.d.bb(z,y))a.preventDefault()
return}if(this.r)return
x=this.aw(a)
if(this.c.bb(z,x))a.preventDefault()}},"$1","ghc",4,0,4],
kf:[function(a){var z,y
H.e(a,"$isbC")
this.aP(a)
z=new V.Q((a&&C.F).giY(a),C.F.giZ(a)).w(0,180)
if(this.x){if(this.d.ju(z))a.preventDefault()
return}if(this.r)return
y=this.aw(a)
if(this.c.jv(z,y))a.preventDefault()},"$1","ghm",4,0,35],
kg:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.au(this.y)
x=this.aw(this.y)
this.d.hi(y,x,z)}},"$1","ghn",4,0,9],
ko:[function(a){var z
H.e(a,"$isb7")
this.a.focus()
this.f=!0
this.ci(a)
z=this.ce(a)
if(this.e.js(z))a.preventDefault()},"$1","ghv",4,0,10],
km:[function(a){var z
H.e(a,"$isb7")
this.ci(a)
z=this.ce(a)
if(this.e.jq(z))a.preventDefault()},"$1","ght",4,0,10],
kn:[function(a){var z
H.e(a,"$isb7")
this.ci(a)
z=this.ce(a)
if(this.e.jr(z))a.preventDefault()},"$1","ghu",4,0,10]}}],["","",,D,{"^":"",c2:{"^":"a;0a,0b,0c,0d",
gp:function(){var z=this.d
if(z==null){z=D.C()
this.d=z}return z},
aH:[function(a){var z
H.e(a,"$isu")
z=this.d
if(!(z==null))z.D(a)},function(){return this.aH(null)},"jQ","$1","$0","gfe",0,2,0],
$isX:1,
$isaz:1},X:{"^":"a;",$isaz:1},hY:{"^":"R;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
sfI:function(a){this.e=H.i(a,"$isb",[D.c2],"$asb")},
shw:function(a){this.f=H.i(a,"$isb",[D.ew],"$asb")},
shU:function(a){this.r=H.i(a,"$isb",[D.eJ],"$asb")},
si4:function(a){this.x=H.i(a,"$isb",[D.eR],"$asb")},
si5:function(a){this.y=H.i(a,"$isb",[D.eS],"$asb")},
si6:function(a){this.z=H.i(a,"$isb",[D.eT],"$asb")},
gp:function(){var z=this.Q
if(z==null){z=D.C()
this.Q=z}return z},
aH:function(a){var z=this.Q
if(!(z==null))z.D(a)},
hh:[function(a){var z
H.e(a,"$isu")
z=this.ch
if(!(z==null))z.D(a)},function(){return this.hh(null)},"kb","$1","$0","gdu",0,2,0],
kh:[function(a){var z,y,x
H.i(a,"$isk",[D.X],"$ask")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.x)(a),++y){x=a[y]
if(x==null||this.fd(x))return!1}return!0},"$1","gho",4,0,38],
jW:[function(a,b){var z,y,x,w,v,u,t,s
z=D.X
H.i(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gdu(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.e(b[u],"$isX")
if(t instanceof D.c2)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bn()
s.sad(null)
s.sb4(null)
s.c=null
s.d=0
t.d=s}H.j(x,w)
if(s.a==null)s.sad(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}z=new D.bP(a,b,this,[z])
z.b=!0
this.aH(z)},"$2","gh5",8,0,19],
kj:[function(a,b){var z,y,x,w
z=D.X
H.i(b,"$isk",[z],"$ask")
for(y=b.gN(b),x=this.gdu();y.v();){w=y.gF()
C.a.T(this.e,w)
w.gp().T(0,x)}z=new D.bQ(a,b,this,[z])
z.b=!0
this.aH(z)},"$2","ghq",8,0,19],
fd:function(a){var z=C.a.S(this.e,a)
return z},
$ask:function(){return[D.X]},
$asR:function(){return[D.X]}},ew:{"^":"a;",$isX:1,$isaz:1},eJ:{"^":"a;",$isX:1,$isaz:1},eR:{"^":"a;",$isX:1,$isaz:1},eS:{"^":"a;",$isX:1,$isaz:1},eT:{"^":"a;",$isX:1,$isaz:1}}],["","",,V,{"^":"",
lC:[function(a,b){if(typeof b!=="number")return b.K()
if(typeof a!=="number")return H.B(a)
return Math.abs(b-a)<=1e-9},"$2","ij",8,0,36],
lx:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.k.eP(a-b,z)
return(a<0?a+z:a)+b},
K:function(a,b,c){if(a==null)return C.i.ag("null",c)
return C.i.ag(C.k.ex($.m.$2(a,0)?0:a,b),c+b+1)},
be:function(a,b,c){var z,y,x,w,v,u
H.i(a,"$isb",[P.w],"$asb")
z=H.c([],[P.n])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.x)(a),++w){v=V.K(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.l(z,u)
C.a.W(z,u,C.i.ag(z[u],x))}return z},
dE:function(a,b){return C.k.jK(Math.pow(b,C.O.cE(Math.log(H.l_(a))/Math.log(b))))},
a_:{"^":"a;a,b,c",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}},
aQ:{"^":"a;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aQ))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}},
en:{"^":"a;a,b,c,d,e,f,r,x,y",
ac:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.w])
return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.en))return!1
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
y=V.be(H.c([this.a,this.d,this.r],z),3,0)
x=V.be(H.c([this.b,this.e,this.x],z),3,0)
w=V.be(H.c([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.l(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.l(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.l(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.l(y,1)
s=" "+y[1]+", "
if(1>=u)return H.l(x,1)
s=s+x[1]+", "
if(1>=t)return H.l(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.l(y,2)
z=" "+y[2]+", "
if(2>=u)return H.l(x,2)
z=z+x[2]+", "
if(2>=t)return H.l(w,2)
return s+(z+w[2]+"]")}},
ao:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ac:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.w])
return z},
cG:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=this.f
x=this.b
w=this.e
v=z*y-x*w
u=this.r
t=this.c
s=z*u-t*w
r=this.x
q=this.d
p=z*r-q*w
o=x*u-t*y
n=x*r-q*y
m=t*r-q*u
l=this.y
k=this.cy
j=this.z
i=this.cx
h=l*k-j*i
g=this.db
f=this.Q
e=l*g-f*i
d=this.dx
c=this.ch
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.m.$2(a2,0))return V.b3()
a3=1/a2
a4=-w
a5=-i
return V.ax((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
B:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
x=this.b
w=a7.e
v=this.c
u=a7.y
t=this.d
s=a7.cx
r=a7.b
q=a7.f
p=a7.z
o=a7.cy
n=a7.c
m=a7.r
l=a7.Q
k=a7.db
j=a7.d
i=a7.x
h=a7.ch
g=a7.dx
f=this.e
e=this.f
d=this.r
c=this.x
b=this.y
a=this.z
a0=this.Q
a1=this.ch
a2=this.cx
a3=this.cy
a4=this.db
a5=this.dx
return V.ax(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cQ:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.L(this.a*z+this.b*y+this.c*x,this.e*z+this.f*y+this.r*x,this.y*z+this.z*y+this.Q*x)},
bj:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.af(this.a*z+this.b*y+this.c*x+this.d,this.e*z+this.f*y+this.r*x+this.x,this.y*z+this.z*y+this.Q*x+this.ch)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ao))return!1
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
i:function(a){return this.L()},
ej:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.w]
y=V.be(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.be(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.be(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.be(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.l(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.l(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.l(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.l(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.l(y,1)
q=q+y[1]+", "
if(1>=t)return H.l(x,1)
q=q+x[1]+", "
if(1>=s)return H.l(w,1)
q=q+w[1]+", "
if(1>=r)return H.l(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.l(y,2)
u=u+y[2]+", "
if(2>=t)return H.l(x,2)
u=u+x[2]+", "
if(2>=s)return H.l(w,2)
u=u+w[2]+", "
if(2>=r)return H.l(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.l(y,3)
q=q+y[3]+", "
if(3>=t)return H.l(x,3)
q=q+x[3]+", "
if(3>=s)return H.l(w,3)
q=q+w[3]+", "
if(3>=r)return H.l(v,3)
return u+(q+v[3]+"]")},
L:function(){return this.ej("",3,0)},
A:function(a){return this.ej(a,3,0)},
n:{
b3:function(){var z=$.ep
if(z==null){z=V.ax(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.ep=z}return z},
ax:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ao(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
eo:function(a,b,c){var z,y,x,w,v,u,t,s
z=c.w(0,Math.sqrt(c.E(c)))
y=b.b9(z)
x=y.w(0,Math.sqrt(y.E(y)))
w=z.b9(x)
v=new V.L(a.a,a.b,a.c)
u=x.O(0).E(v)
t=w.O(0).E(v)
s=z.O(0).E(v)
return V.ax(x.a,w.a,z.a,u,x.b,w.b,z.b,t,x.c,w.c,z.c,s,0,0,0,1)}}},
a3:{"^":"a;a,b",
K:function(a,b){return new V.a3(this.a-b.a,this.b-b.b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"},
n:{
aG:function(){var z=$.ex
if(z==null){z=new V.a3(0,0)
$.ex=z}return z}}},
af:{"^":"a;a,b,c",
K:function(a,b){return new V.af(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.af))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"},
n:{
ey:function(){var z=$.bu
if(z==null){z=new V.af(0,0,0)
$.bu=z}return z}}},
bv:{"^":"a;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bv))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"}},
eC:{"^":"a;a,b,c,d",
gaa:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eC))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+", "+V.K(this.d,3,0)+"]"},
n:{
eD:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eC(a,b,c,d)}}},
Q:{"^":"a;a,b",
jd:[function(a){return Math.sqrt(this.E(this))},"$0","gq",1,0,20],
E:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.B()
if(typeof y!=="number")return H.B(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.B()
if(typeof w!=="number")return H.B(w)
return z*y+x*w},
B:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.B()
y=this.b
if(typeof y!=="number")return y.B()
return new V.Q(z*b,y*b)},
w:function(a,b){var z,y
if($.m.$2(b,0)){z=$.fb
if(z==null){z=new V.Q(0,0)
$.fb=z}return z}z=this.a
if(typeof z!=="number")return z.w()
y=this.b
if(typeof y!=="number")return y.w()
return new V.Q(z/b,y/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}},
L:{"^":"a;a,b,c",
jd:[function(a){return Math.sqrt(this.E(this))},"$0","gq",1,0,20],
E:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cH:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.L(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
b9:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.L(z*y-x*w,x*v-u*y,u*w-z*v)},
G:function(a,b){return new V.L(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a){return new V.L(-this.a,-this.b,-this.c)},
w:function(a,b){if($.m.$2(b,0))return V.bU()
return new V.L(this.a/b,this.b/b,this.c/b)},
el:function(){if(!$.m.$2(0,this.a))return!1
if(!$.m.$2(0,this.b))return!1
if(!$.m.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.L))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"},
n:{
bU:function(){var z=$.fe
if(z==null){z=new V.L(0,0,0)
$.fe=z}return z},
ff:function(){var z=$.fd
if(z==null){z=new V.L(0,1,0)
$.fd=z}return z},
jM:function(){var z=$.cl
if(z==null){z=new V.L(0,0,1)
$.cl=z}return z}}}}],["","",,U,{"^":"",he:{"^":"dR;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bZ:function(a){var z=V.lx(a,this.c,this.b)
return z},
gp:function(){var z=this.y
if(z==null){z=D.C()
this.y=z}return z},
P:function(a){var z=this.y
if(!(z==null))z.D(a)},
scT:function(a,b){},
scI:function(a){var z,y
z=this.b
if(!$.m.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bZ(z)}z=new D.E("maximumLocation",y,this.b,this,[P.w])
z.b=!0
this.P(z)}},
scK:function(a){var z,y
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bZ(z)}z=new D.E("minimumLocation",y,this.c,this,[P.w])
z.b=!0
this.P(z)}},
sa9:function(a,b){var z,y
b=this.bZ(b)
z=this.d
if(!$.m.$2(z,b)){y=this.d
this.d=b
z=new D.E("location",y,b,this,[P.w])
z.b=!0
this.P(z)}},
scJ:function(a){var z,y,x
z=this.e
if(!$.m.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.E("maximumVelocity",y,a,this,[P.w])
z.b=!0
this.P(z)}},
sR:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.m.$2(z,a)){x=this.f
this.f=a
z=new D.E("velocity",x,a,this,[P.w])
z.b=!0
this.P(z)}},
sct:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.m.$2(z,a)){y=this.x
this.x=a
z=new D.E("dampening",y,a,this,[P.w])
z.b=!0
this.P(z)}},
ao:function(a){var z,y,x,w
z=this.f
if($.m.$2(z,0)){z=this.r
z=!$.m.$2(z,0)}else z=!0
if(z){y=this.f+this.r*a
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa9(0,this.d+y*a)
z=this.x
if(!$.m.$2(z,0)){w=y*Math.pow(1-this.x,a)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sR(y)}},
n:{
cO:function(){var z=new U.he()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dT:{"^":"a6;0a,0b",
gp:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
aY:function(a,b){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dT))return!1
return J.V(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")},
n:{
dU:function(a){var z=new U.dT()
z.a=a
return z}}},e7:{"^":"R;0e,0f,0r,0a,0b,0c,0d",
gp:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
P:[function(a){var z
H.e(a,"$isu")
z=this.e
if(!(z==null))z.D(a)},function(){return this.P(null)},"ai","$1","$0","gaI",0,2,0],
jV:[function(a,b){var z,y,x,w,v,u,t,s
z=U.a6
H.i(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaI(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){s=t.gp()
s.toString
H.j(x,w)
if(s.a==null)s.sad(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.bP(a,b,this,[z])
z.b=!0
this.P(z)},"$2","gh4",8,0,21],
ki:[function(a,b){var z,y,x
z=U.a6
H.i(b,"$isk",[z],"$ask")
for(y=b.gN(b),x=this.gaI();y.v();)y.gF().gp().T(0,x)
z=new D.bQ(a,b,this,[z])
z.b=!0
this.P(z)},"$2","ghp",8,0,21],
aY:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(typeof z!=="number")return z.ap()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.ak(z,z.length,0,[H.v(z,0)]),x=null;z.v();){y=z.d
if(y!=null){w=y.aY(a,b)
if(w!=null)x=x==null?w:w.B(0,x)}}this.f=x==null?V.b3():x
z=this.e
if(!(z==null))z.aE()}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e7))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.l(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.l(w,y)
if(!J.V(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$ask:function(){return[U.a6]},
$asR:function(){return[U.a6]},
$isa6:1},a6:{"^":"dR;"},jH:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gp:function(){var z=this.cy
if(z==null){z=D.C()
this.cy=z}return z},
P:[function(a){var z
H.e(a,"$isu")
z=this.cy
if(!(z==null))z.D(a)},function(){return this.P(null)},"ai","$1","$0","gaI",0,2,0],
b7:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdW().h(0,this.gc8())
this.a.c.gen().h(0,this.gc9())
this.a.c.gbS().h(0,this.gca())
return!0},
h0:[function(a){H.e(a,"$isu")
if(!J.V(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gc8",4,0,1],
h1:[function(a){var z,y,x,w,v,u,t
a=H.d(H.e(a,"$isu"),"$isbs")
if(!this.y)return
if(this.x){z=a.d.K(0,a.y)
z=new V.Q(z.a,z.b)
z=z.E(z)
y=this.r
if(typeof y!=="number")return H.B(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.K(0,a.y)
z=new V.Q(y.a,y.b).B(0,2).w(0,z.gaa())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.B()
x=this.e
if(typeof x!=="number")return H.B(x)
y.sR(z*10*x)}else{z=a.c
y=a.d
x=y.K(0,a.y)
w=new V.Q(x.a,x.b).B(0,2).w(0,z.gaa())
x=this.b
v=w.a
if(typeof v!=="number")return v.O()
u=this.e
if(typeof u!=="number")return H.B(u)
t=this.z
if(typeof t!=="number")return H.B(t)
x.sa9(0,-v*u+t)
this.b.sR(0)
y=y.K(0,a.z)
this.Q=new V.Q(y.a,y.b).B(0,2).w(0,z.gaa())}this.ai()},"$1","gc9",4,0,1],
h2:[function(a){var z,y,x
H.e(a,"$isu")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.E(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.B()
x=this.e
if(typeof x!=="number")return H.B(x)
z.sR(y*10*x)
this.ai()}},"$1","gca",4,0,1],
aY:function(a,b){var z,y,x,w,v
z=this.ch
y=a.e
if(typeof z!=="number")return z.ap()
if(z<y){this.ch=y
x=a.y
this.b.ao(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.ax(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa6:1},jI:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gp:function(){var z=this.fx
if(z==null){z=D.C()
this.fx=z}return z},
P:[function(a){var z
H.e(a,"$isu")
z=this.fx
if(!(z==null))z.D(a)},function(){return this.P(null)},"ai","$1","$0","gaI",0,2,0],
b7:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gdW().h(0,this.gc8())
this.a.c.gen().h(0,this.gc9())
this.a.c.gbS().h(0,this.gca())
z=this.a.d
y=z.f
if(y==null){y=D.C()
z.f=y
z=y}else z=y
z.h(0,this.gfZ())
z=this.a.d
y=z.d
if(y==null){y=D.C()
z.d=y
z=y}else z=y
z.h(0,this.gh_())
z=this.a.e
y=z.b
if(y==null){y=D.C()
z.b=y
z=y}else z=y
z.h(0,this.gi2())
z=this.a.e
y=z.d
if(y==null){y=D.C()
z.d=y
z=y}else z=y
z.h(0,this.gi1())
z=this.a.e
y=z.c
if(y==null){y=D.C()
z.c=y
z=y}else z=y
z.h(0,this.gi0())
return!0},
aq:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.O()
z=-z}if(this.r){if(typeof y!=="number")return y.O()
y=-y}return new V.Q(z,y)},
h0:[function(a){a=H.d(H.e(a,"$isu"),"$isbs")
if(!J.V(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gc8",4,0,1],
h1:[function(a){var z,y,x,w,v,u,t
a=H.d(H.e(a,"$isu"),"$isbs")
if(!this.cx)return
if(this.ch){z=a.d.K(0,a.y)
z=new V.Q(z.a,z.b)
z=z.E(z)
y=this.Q
if(typeof y!=="number")return H.B(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.K(0,a.y)
z=this.aq(new V.Q(y.a,y.b).B(0,2).w(0,z.gaa()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.O()
x=this.y
if(typeof x!=="number")return H.B(x)
y.sR(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.O()
y=this.x
if(typeof y!=="number")return H.B(y)
x.sR(-z*10*y)}else{z=a.c
y=a.d
x=y.K(0,a.y)
w=this.aq(new V.Q(x.a,x.b).B(0,2).w(0,z.gaa()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.B(u)
t=this.cy
if(typeof t!=="number")return H.B(t)
x.sa9(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.B(v)
x=this.db
if(typeof x!=="number")return H.B(x)
t.sa9(0,-u*v+x)
this.b.sR(0)
this.c.sR(0)
y=y.K(0,a.z)
this.dx=this.aq(new V.Q(y.a,y.b).B(0,2).w(0,z.gaa()))}this.ai()},"$1","gc9",4,0,1],
h2:[function(a){var z,y,x
H.e(a,"$isu")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.E(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.O()
x=this.y
if(typeof x!=="number")return H.B(x)
z.sR(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.O()
z=this.x
if(typeof z!=="number")return H.B(z)
x.sR(-y*10*z)
this.ai()}},"$1","gca",4,0,1],
jS:[function(a){if(H.d(H.e(a,"$isu"),"$isei").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfZ",4,0,1],
jT:[function(a){var z,y,x,w,v,u,t
a=H.d(H.e(a,"$isu"),"$isbs")
if(!J.V(this.d,a.x.b))return
z=a.c
y=a.d
x=y.K(0,a.y)
w=this.aq(new V.Q(x.a,x.b).B(0,2).w(0,z.gaa()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.B(u)
t=this.cy
if(typeof t!=="number")return H.B(t)
x.sa9(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.B(v)
x=this.db
if(typeof x!=="number")return H.B(x)
t.sa9(0,-u*v+x)
this.b.sR(0)
this.c.sR(0)
y=y.K(0,a.z)
this.dx=this.aq(new V.Q(y.a,y.b).B(0,2).w(0,z.gaa()))
this.ai()},"$1","gh_",4,0,1],
ks:[function(a){H.e(a,"$isu")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gi2",4,0,1],
kr:[function(a){var z,y,x,w,v,u,t
a=H.d(H.e(a,"$isu"),"$iseY")
if(!this.cx)return
if(this.ch){z=a.d.K(0,a.y)
z=new V.Q(z.a,z.b)
z=z.E(z)
y=this.Q
if(typeof y!=="number")return H.B(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.K(0,a.y)
z=this.aq(new V.Q(y.a,y.b).B(0,2).w(0,z.gaa()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.O()
x=this.y
if(typeof x!=="number")return H.B(x)
y.sR(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.O()
y=this.x
if(typeof y!=="number")return H.B(y)
x.sR(-z*10*y)}else{z=a.c
y=a.d
x=y.K(0,a.y)
w=this.aq(new V.Q(x.a,x.b).B(0,2).w(0,z.gaa()))
x=this.c
v=w.a
if(typeof v!=="number")return v.O()
u=this.y
if(typeof u!=="number")return H.B(u)
t=this.cy
if(typeof t!=="number")return H.B(t)
x.sa9(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.O()
v=this.x
if(typeof v!=="number")return H.B(v)
x=this.db
if(typeof x!=="number")return H.B(x)
t.sa9(0,-u*v+x)
this.b.sR(0)
this.c.sR(0)
y=y.K(0,a.z)
this.dx=this.aq(new V.Q(y.a,y.b).B(0,2).w(0,z.gaa()))}this.ai()},"$1","gi1",4,0,1],
kq:[function(a){var z,y,x
H.e(a,"$isu")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.E(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.O()
x=this.y
if(typeof x!=="number")return H.B(x)
z.sR(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.O()
z=this.x
if(typeof z!=="number")return H.B(z)
x.sR(-y*10*z)
this.ai()}},"$1","gi0",4,0,1],
aY:function(a,b){var z,y,x,w,v
z=this.dy
y=a.e
if(typeof z!=="number")return z.ap()
if(z<y){this.dy=y
x=a.y
this.c.ao(x)
this.b.ao(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.ax(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.B(0,V.ax(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isa6:1},jJ:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gp:function(){var z=this.r
if(z==null){z=D.C()
this.r=z}return z},
P:function(a){var z=this.r
if(!(z==null))z.D(a)},
b7:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.C()
z.e=y
z=y}else z=y
y=this.gh3()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.C()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
jU:[function(a){var z,y,x,w
H.e(a,"$isu")
if(!J.V(this.b,this.a.b.c))return
H.d(a,"$iscZ")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.B()
w=z+y*x
if(z!==w){this.d=w
z=new D.E("zoom",z,w,this,[P.w])
z.b=!0
this.P(z)}},"$1","gh3",4,0,1],
aY:function(a,b){var z,y,x
z=this.e
y=a.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.ax(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa6:1}}],["","",,M,{"^":"",hf:{"^":"R;0e,0f,0a,0b,0c,0d",
gp:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
a_:[function(a){var z
H.e(a,"$isu")
z=this.f
if(!(z==null))z.D(a)},function(){return this.a_(null)},"d6","$1","$0","gV",0,2,0],
kk:[function(a,b){var z,y,x,w,v,u,t,s
z=M.aB
H.i(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gV(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){s=t.gp()
s.toString
H.j(x,w)
if(s.a==null)s.sad(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.bP(a,b,this,[z])
z.b=!0
this.a_(z)},"$2","ghr",8,0,23],
kl:[function(a,b){var z,y,x
z=M.aB
H.i(b,"$isk",[z],"$ask")
for(y=b.gN(b),x=this.gV();y.v();)y.gF().gp().T(0,x)
z=new D.bQ(a,b,this,[z])
z.b=!0
this.a_(z)},"$2","ghs",8,0,23],
ab:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.ak(z,z.length,0,[H.v(z,0)]);z.v();){y=z.d
if(!(y==null))y.ab(a)}this.e=!1},
$ask:function(){return[M.aB]},
$asR:function(){return[M.aB]},
$isaB:1},hh:{"^":"a;0a,0b,0c,0d,0e,0f",
gp:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
a_:[function(a){var z
H.e(a,"$isu")
z=this.f
if(!(z==null))z.D(a)},function(){return this.a_(null)},"d6","$1","$0","gV",0,2,0],
sb8:function(a){var z,y
if(a==null)a=new X.hO()
z=this.a
if(z!==a){if(z!=null)z.gp().T(0,this.gV())
y=this.a
this.a=a
a.gp().h(0,this.gV())
z=new D.E("camera",y,this.a,this,[X.c_])
z.b=!0
this.a_(z)}},
sbf:function(a,b){var z,y
if(b==null)b=X.cQ(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gp().T(0,this.gV())
y=this.b
this.b=b
b.gp().h(0,this.gV())
z=new D.E("target",y,this.b,this,[X.d8])
z.b=!0
this.a_(z)}},
sbg:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gp().T(0,this.gV())
y=this.c
this.c=a
if(a!=null)a.gp().h(0,this.gV())
z=new D.E("technique",y,this.c,this,[O.by])
z.b=!0
this.a_(z)}},
ab:function(a){a.cN(this.c)
this.b.a1(a)
this.a.a1(a)
this.d.ao(a)
this.d.ab(a)
this.a.bk(a)
this.b.toString
a.cM()},
$isaB:1},hx:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
sfC:function(a,b){this.d=H.i(b,"$isR",[E.am],"$asR")},
a_:[function(a){var z
H.e(a,"$isu")
z=this.x
if(!(z==null))z.D(a)},function(){return this.a_(null)},"d6","$1","$0","gV",0,2,0],
k_:[function(a,b){var z,y,x,w,v,u,t,s
z=E.am
H.i(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gV(),w={func:1,ret:-1,args:[D.u]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.gaj()==null){s=new D.bn()
s.sad(null)
s.sb4(null)
s.c=null
s.d=0
t.saj(s)}s=t.gaj()
s.toString
H.j(x,w)
if(s.a==null)s.sad(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.bP(a,b,this,[z])
z.b=!0
this.a_(z)},"$2","gh9",8,0,6],
k0:[function(a,b){var z,y,x
z=E.am
H.i(b,"$isk",[z],"$ask")
for(y=b.gN(b),x=this.gV();y.v();)y.gF().gp().T(0,x)
z=new D.bQ(a,b,this,[z])
z.b=!0
this.a_(z)},"$2","gha",8,0,6],
sb8:function(a){var z,y
if(a==null)a=X.eu(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null)z.gp().T(0,this.gV())
y=this.a
this.a=a
a.gp().h(0,this.gV())
z=new D.E("camera",y,this.a,this,[X.c_])
z.b=!0
this.a_(z)}},
sbf:function(a,b){var z,y
if(b==null)b=X.cQ(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gp().T(0,this.gV())
y=this.b
this.b=b
b.gp().h(0,this.gV())
z=new D.E("target",y,this.b,this,[X.d8])
z.b=!0
this.a_(z)}},
sbg:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gp().T(0,this.gV())
y=this.c
this.c=a
if(a!=null)a.gp().h(0,this.gV())
z=new D.E("technique",y,this.c,this,[O.by])
z.b=!0
this.a_(z)}},
gp:function(){var z=this.x
if(z==null){z=D.C()
this.x=z}return z},
ab:function(a){var z
a.cN(this.c)
this.b.a1(a)
this.a.a1(a)
z=this.c
if(z!=null)z.ao(a)
for(z=this.d.a,z=new J.ak(z,z.length,0,[H.v(z,0)]);z.v();)z.d.ao(a)
for(z=this.d.a,z=new J.ak(z,z.length,0,[H.v(z,0)]);z.v();)z.d.ab(a)
this.a.toString
a.cy.aC()
a.db.aC()
this.b.toString
a.cM()},
$isaB:1},aB:{"^":"a;"}}],["","",,A,{"^":"",dK:{"^":"a;a,b,c"},h6:{"^":"a;a",
l:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
j3:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
C.b.dY(w.a,w.c)}},
dU:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
C.b.dV(w.a,w.c)}}},em:{"^":"cg;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0as,0am,0bz,0dZ,0bA,0bB,0e_,0e0,0bC,0bD,0e1,0e2,0bE,0bF,0e3,0e4,0bG,0e5,0e6,0bH,0e7,0e8,0bI,0bJ,0bK,0e9,0ea,0bL,0bM,0eb,0ec,0bN,0ed,0cw,0ee,0cz,0ef,0cA,0eg,0cB,0eh,0cC,0ei,0cD,a,b,0c,0d,0e,0f,0r,0x,0y",
sfv:function(a){this.r1=H.i(a,"$isb",[A.as],"$asb")},
sff:function(a){this.cw=H.i(a,"$isb",[A.de],"$asb")},
sfg:function(a){this.cz=H.i(a,"$isb",[A.dg],"$asb")},
sfh:function(a){this.cA=H.i(a,"$isb",[A.dh],"$asb")},
sfi:function(a){this.cB=H.i(a,"$isb",[A.di],"$asb")},
sfj:function(a){this.cC=H.i(a,"$isb",[A.dj],"$asb")},
sfk:function(a){this.cD=H.i(a,"$isb",[A.dk],"$asb")},
f4:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.z=a1
z=new P.bx("")
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
a1.ia(z)
a1.ij(z)
a1.ib(z)
a1.is(z)
a1.it(z)
a1.il(z)
a1.ix(z)
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
z=new P.bx("")
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
v.ig(z)
v.i9(z)
v.ic(z)
v.ih(z)
v.iq(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.io(z)
v.ip(z)}v.ik(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.c){r+="uniform float alpha;\n"
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
switch(q){case C.c:r+="   return 1.0;\n"
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
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.k(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.ie(z)
v.im(z)
v.ir(z)
v.iu(z)
v.iv(z)
v.iw(z)
v.ii(z)}r=z.a+="// === Main ===\n"
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
n="vec4("+C.a.k(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.ek(x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.Q=this.x.l(0,"posAttr")
this.cx=this.x.l(0,"normAttr")
this.ch=this.x.l(0,"binmAttr")
this.cy=this.x.l(0,"txt2DAttr")
this.db=this.x.l(0,"txtCubeAttr")
this.dx=this.x.l(0,"bendAttr")
if(a1.fr)this.id=H.d(this.y.m(0,"invViewMat"),"$isas")
if(y)this.dy=H.d(this.y.m(0,"objMat"),"$isas")
if(w)this.fr=H.d(this.y.m(0,"viewObjMat"),"$isas")
this.fy=H.d(this.y.m(0,"projViewObjMat"),"$isas")
if(a1.x2)this.k1=H.d(this.y.m(0,"txt2DMat"),"$isdf")
if(a1.y1)this.k2=H.d(this.y.m(0,"txtCubeMat"),"$isas")
if(a1.y2)this.k3=H.d(this.y.m(0,"colorMat"),"$isas")
this.sfv(H.c([],[A.as]))
y=a1.as
if(y>0){this.k4=H.e(this.y.m(0,"bendMatCount"),"$isH")
for(m=0;m<y;++m){x=this.r1
w=this.y
v="bendValues["+m+"].mat"
l=w.l(0,v)
if(l==null)H.p(P.o("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.d(l,"$isas"))}}y=a1.a
if(y!==C.c){this.r2=H.d(this.y.m(0,"emissionClr"),"$isD")
switch(y){case C.c:break
case C.f:break
case C.d:this.rx=H.d(this.y.m(0,"emissionTxt"),"$isag")
this.x1=H.d(this.y.m(0,"nullEmissionTxt"),"$isH")
break
case C.e:this.ry=H.d(this.y.m(0,"emissionTxt"),"$isa9")
this.x1=H.d(this.y.m(0,"nullEmissionTxt"),"$isH")
break}}y=a1.b
if(y!==C.c){this.x2=H.d(this.y.m(0,"ambientClr"),"$isD")
switch(y){case C.c:break
case C.f:break
case C.d:this.y1=H.d(this.y.m(0,"ambientTxt"),"$isag")
this.as=H.d(this.y.m(0,"nullAmbientTxt"),"$isH")
break
case C.e:this.y2=H.d(this.y.m(0,"ambientTxt"),"$isa9")
this.as=H.d(this.y.m(0,"nullAmbientTxt"),"$isH")
break}}y=a1.c
if(y!==C.c){this.am=H.d(this.y.m(0,"diffuseClr"),"$isD")
switch(y){case C.c:break
case C.f:break
case C.d:this.bz=H.d(this.y.m(0,"diffuseTxt"),"$isag")
this.bA=H.d(this.y.m(0,"nullDiffuseTxt"),"$isH")
break
case C.e:this.dZ=H.d(this.y.m(0,"diffuseTxt"),"$isa9")
this.bA=H.d(this.y.m(0,"nullDiffuseTxt"),"$isH")
break}}y=a1.d
if(y!==C.c){this.bB=H.d(this.y.m(0,"invDiffuseClr"),"$isD")
switch(y){case C.c:break
case C.f:break
case C.d:this.e_=H.d(this.y.m(0,"invDiffuseTxt"),"$isag")
this.bC=H.d(this.y.m(0,"nullInvDiffuseTxt"),"$isH")
break
case C.e:this.e0=H.d(this.y.m(0,"invDiffuseTxt"),"$isa9")
this.bC=H.d(this.y.m(0,"nullInvDiffuseTxt"),"$isH")
break}}y=a1.e
if(y!==C.c){this.bF=H.d(this.y.m(0,"shininess"),"$isS")
this.bD=H.d(this.y.m(0,"specularClr"),"$isD")
switch(y){case C.c:break
case C.f:break
case C.d:this.e1=H.d(this.y.m(0,"specularTxt"),"$isag")
this.bE=H.d(this.y.m(0,"nullSpecularTxt"),"$isH")
break
case C.e:this.e2=H.d(this.y.m(0,"specularTxt"),"$isa9")
this.bE=H.d(this.y.m(0,"nullSpecularTxt"),"$isH")
break}}switch(a1.f){case C.c:break
case C.f:break
case C.d:this.e3=H.d(this.y.m(0,"bumpTxt"),"$isag")
this.bG=H.d(this.y.m(0,"nullBumpTxt"),"$isH")
break
case C.e:this.e4=H.d(this.y.m(0,"bumpTxt"),"$isa9")
this.bG=H.d(this.y.m(0,"nullBumpTxt"),"$isH")
break}if(a1.dy){this.e5=H.d(this.y.m(0,"envSampler"),"$isa9")
this.e6=H.d(this.y.m(0,"nullEnvTxt"),"$isH")
y=a1.r
if(y!==C.c){this.bH=H.d(this.y.m(0,"reflectClr"),"$isD")
switch(y){case C.c:break
case C.f:break
case C.d:this.e7=H.d(this.y.m(0,"reflectTxt"),"$isag")
this.bI=H.d(this.y.m(0,"nullReflectTxt"),"$isH")
break
case C.e:this.e8=H.d(this.y.m(0,"reflectTxt"),"$isa9")
this.bI=H.d(this.y.m(0,"nullReflectTxt"),"$isH")
break}}y=a1.x
if(y!==C.c){this.bJ=H.d(this.y.m(0,"refraction"),"$isS")
this.bK=H.d(this.y.m(0,"refractClr"),"$isD")
switch(y){case C.c:break
case C.f:break
case C.d:this.e9=H.d(this.y.m(0,"refractTxt"),"$isag")
this.bL=H.d(this.y.m(0,"nullRefractTxt"),"$isH")
break
case C.e:this.ea=H.d(this.y.m(0,"refractTxt"),"$isa9")
this.bL=H.d(this.y.m(0,"nullRefractTxt"),"$isH")
break}}}y=a1.y
if(y!==C.c){this.bM=H.d(this.y.m(0,"alpha"),"$isS")
switch(y){case C.c:break
case C.f:break
case C.d:this.eb=H.d(this.y.m(0,"alphaTxt"),"$isag")
this.bN=H.d(this.y.m(0,"nullAlphaTxt"),"$isH")
break
case C.e:this.ec=H.d(this.y.m(0,"alphaTxt"),"$isa9")
this.bN=H.d(this.y.m(0,"nullAlphaTxt"),"$isH")
break}}this.sff(H.c([],[A.de]))
this.sfg(H.c([],[A.dg]))
this.sfh(H.c([],[A.dh]))
this.sfi(H.c([],[A.di]))
this.sfj(H.c([],[A.dj]))
this.sfk(H.c([],[A.dk]))
if(a1.k2){y=a1.z
if(y>0){this.ed=H.e(this.y.m(0,"dirLightCount"),"$isH")
for(m=0;m<y;++m){x=this.y
w="dirLights["+m+"].viewDir"
l=x.l(0,w)
if(l==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isD")
x=this.y
w="dirLights["+m+"].color"
k=x.l(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isD")
x=this.cw;(x&&C.a).h(x,new A.de(m,l,k))}}y=a1.Q
if(y>0){this.ee=H.e(this.y.m(0,"pntLightCount"),"$isH")
for(m=0;m<y;++m){x=this.y
w="pntLights["+m+"].point"
l=x.l(0,w)
if(l==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isD")
x=this.y
w="pntLights["+m+"].viewPnt"
k=x.l(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isD")
x=this.y
w="pntLights["+m+"].color"
j=x.l(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isD")
x=this.y
w="pntLights["+m+"].att0"
i=x.l(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isS")
x=this.y
w="pntLights["+m+"].att1"
h=x.l(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isS")
x=this.y
w="pntLights["+m+"].att2"
g=x.l(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isS")
x=this.cz;(x&&C.a).h(x,new A.dg(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.ef=H.e(this.y.m(0,"spotLightCount"),"$isH")
for(m=0;m<y;++m){x=this.y
w="spotLights["+m+"].objPnt"
l=x.l(0,w)
if(l==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isD")
x=this.y
w="spotLights["+m+"].objDir"
k=x.l(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isD")
x=this.y
w="spotLights["+m+"].viewPnt"
j=x.l(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isD")
x=this.y
w="spotLights["+m+"].color"
i=x.l(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isD")
x=this.y
w="spotLights["+m+"].cutoff"
h=x.l(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isS")
x=this.y
w="spotLights["+m+"].coneAngle"
g=x.l(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isS")
x=this.y
w="spotLights["+m+"].att0"
f=x.l(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isS")
x=this.y
w="spotLights["+m+"].att1"
e=x.l(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isS")
x=this.y
w="spotLights["+m+"].att2"
d=x.l(0,w)
if(d==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isS")
x=this.cA;(x&&C.a).h(x,new A.dh(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.eg=H.e(this.y.m(0,"txtDirLightCount"),"$isH")
for(m=0;m<y;++m){x=this.y
w="txtDirLights["+m+"].objUp"
l=x.l(0,w)
if(l==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isD")
x=this.y
w="txtDirLights["+m+"].objRight"
k=x.l(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isD")
x=this.y
w="txtDirLights["+m+"].objDir"
j=x.l(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isD")
x=this.y
w="txtDirLights["+m+"].viewDir"
i=x.l(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isD")
x=this.y
w="txtDirLights["+m+"].color"
h=x.l(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isD")
x=this.y
w="txtDirLights["+m+"].nullTxt"
g=x.l(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isH")
x=this.y
w="txtDirLightsTxt2D"+m
f=x.l(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isag")
x=this.cB;(x&&C.a).h(x,new A.di(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.eh=H.e(this.y.m(0,"txtPntLightCount"),"$isH")
for(m=0;m<y;++m){x=this.y
w="txtPntLights["+m+"].point"
l=x.l(0,w)
if(l==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isD")
x=this.y
w="txtPntLights["+m+"].viewPnt"
k=x.l(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isD")
x=this.y
w="txtPntLights["+m+"].invViewRotMat"
j=x.l(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isdf")
x=this.y
w="txtPntLights["+m+"].color"
i=x.l(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isD")
x=this.y
w="txtPntLights["+m+"].nullTxt"
h=x.l(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isH")
x=this.y
w="txtPntLights["+m+"].att0"
g=x.l(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isS")
x=this.y
w="txtPntLights["+m+"].att1"
f=x.l(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isS")
x=this.y
w="txtPntLights["+m+"].att2"
e=x.l(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isS")
x=this.y
w="txtPntLightsTxtCube"+m
d=x.l(0,w)
if(d==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isa9")
x=this.cC;(x&&C.a).h(x,new A.dj(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.ei=H.e(this.y.m(0,"txtSpotLightCount"),"$isH")
for(m=0;m<y;++m){x=this.y
w="txtSpotLights["+m+"].objPnt"
l=x.l(0,w)
if(l==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isD")
x=this.y
w="txtSpotLights["+m+"].objDir"
k=x.l(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isD")
x=this.y
w="txtSpotLights["+m+"].objUp"
j=x.l(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isD")
x=this.y
w="txtSpotLights["+m+"].objRight"
i=x.l(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isD")
x=this.y
w="txtSpotLights["+m+"].viewPnt"
h=x.l(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isD")
x=this.y
w="txtSpotLights["+m+"].nullTxt"
g=x.l(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isH")
x=this.y
w="txtSpotLights["+m+"].color"
f=x.l(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isD")
x=this.y
w="txtSpotLights["+m+"].tuScalar"
e=x.l(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isS")
x=this.y
w="txtSpotLights["+m+"].tvScalar"
d=x.l(0,w)
if(d==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isS")
x=this.y
w="txtSpotLights["+m+"].att0"
c=x.l(0,w)
if(c==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(c,"$isS")
x=this.y
w="txtSpotLights["+m+"].att1"
b=x.l(0,w)
if(b==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(b,"$isS")
x=this.y
w="txtSpotLights["+m+"].att2"
a=x.l(0,w)
if(a==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a,"$isS")
x=this.y
w="txtSpotLightsTxt2D"+m
a0=x.l(0,w)
if(a0==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a0,"$isag")
x=this.cD;(x&&C.a).h(x,new A.dk(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
ak:function(a,b,c){if(c==null||!c.d)C.b.J(b.a,b.d,1)
else{a.eU(c)
C.b.J(b.a,b.d,0)}},
ae:function(a,b,c){C.b.J(b.a,b.d,1)},
n:{
ic:function(a,b){var z,y
z=a.am
y=new A.em(b,z)
y.d3(b,z)
y.f4(a,b)
return y}}},ig:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,as,am,bz",
ia:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.as+"];\n"
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
ij:function(a){var z
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
ib:function(a){var z
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
is:function(a){var z,y
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
it:function(a){var z,y
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
il:function(a){var z
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
ix:function(a){var z
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
av:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.l(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.bn(c,1))+"Txt;\n"
a.a=z
if(b===C.d)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
ig:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.av(a,z,"emission")
y=a.a+="\n"
y+="vec3 emission()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
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
i9:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.av(a,z,"ambient")
y=a.a+="\n"
y+="vec3 ambient()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
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
ic:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.av(a,z,"diffuse")
y=a.a+="vec3 diffuseColor;\n"
y+="\n"
a.a=y
y+="void setDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
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
ih:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.av(a,z,"invDiffuse")
y=a.a+="vec3 invDiffuseColor;\n"
y+="\n"
a.a=y
y+="void setInvDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.c:z=y
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
iq:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.av(a,z,"specular")
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
ik:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.c:break
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
switch(y){case C.c:z+="   return normalize(normalVec);\n"
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
io:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.av(a,z,"reflect")
y=a.a+="\n"
y+="vec3 reflect(vec3 refl)\n"
a.a=y
y+="{\n"
a.a=y
y+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=y
switch(z){case C.c:z=y
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
ip:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.av(a,z,"refract")
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
ie:function(a){var z,y
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
im:function(a){var z,y
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
ir:function(a){var z,y
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
iu:function(a){var z,y,x
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
iv:function(a){var z,y,x
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
iw:function(a){var z,y,x
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
ii:function(a){var z
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
i:function(a){return this.am}},de:{"^":"a;a,b,c"},di:{"^":"a;a,b,c,d,e,f,r,x"},dg:{"^":"a;a,b,c,d,e,f,r"},dj:{"^":"a;a,b,c,d,e,f,r,x,y,z"},dh:{"^":"a;a,b,c,d,e,f,r,x,y,z"},dk:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cg:{"^":"cF;",
d3:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
ek:function(a,b){var z,y,x
this.c=a
this.d=b
this.e=this.dj(a,35633)
this.f=this.dj(this.d,35632)
z=this.a
y=z.createProgram()
this.r=y
C.b.dM(z,y,this.e)
C.b.dM(z,this.r,this.f)
C.b.je(z,this.r)
if(!H.dv(C.b.bU(z,this.r,35714))){x=C.b.eK(z,this.r)
C.b.iW(z,this.r)
H.p(P.o("Failed to link shader: "+H.f(x)))}this.hP()
this.hR()},
a1:function(a){C.b.cR(a.a,this.r)
this.x.j3()},
dj:function(a,b){var z,y,x
z=this.a
y=C.b.iU(z,b)
C.b.eW(z,y,a)
C.b.iM(z,y)
if(!H.dv(C.b.eN(z,y,35713))){x=C.b.eM(z,y)
C.b.iX(z,y)
throw H.h(P.o("Error compiling shader '"+H.f(y)+"': "+H.f(x)))}return y},
hP:function(){var z,y,x,w,v,u
z=H.c([],[A.dK])
y=this.a
x=H.Z(C.b.bU(y,this.r,35721))
if(typeof x!=="number")return H.B(x)
w=0
for(;w<x;++w){v=C.b.eE(y,this.r,w)
u=C.b.eG(y,this.r,v.name)
C.a.h(z,new A.dK(y,v.name,u))}this.x=new A.h6(z)},
hR:function(){var z,y,x,w,v,u
z=H.c([],[A.a4])
y=this.a
x=H.Z(C.b.bU(y,this.r,35718))
if(typeof x!=="number")return H.B(x)
w=0
for(;w<x;++w){v=C.b.eF(y,this.r,w)
u=C.b.eO(y,this.r,v.name)
C.a.h(z,this.iV(v.type,v.size,v.name,u))}this.y=new A.jz(z)},
aL:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.H(z,y,b,c)
else return A.dd(z,y,b,a,c)},
fF:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ag(z,y,b,c)
else return A.dd(z,y,b,a,c)},
fG:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.a9(z,y,b,c)
else return A.dd(z,y,b,a,c)},
bu:function(a,b){return new P.fn(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
iV:function(a,b,c,d){switch(a){case 5120:return this.aL(b,c,d)
case 5121:return this.aL(b,c,d)
case 5122:return this.aL(b,c,d)
case 5123:return this.aL(b,c,d)
case 5124:return this.aL(b,c,d)
case 5125:return this.aL(b,c,d)
case 5126:return new A.S(this.a,this.r,c,d)
case 35664:return new A.ju(this.a,this.r,c,d)
case 35665:return new A.D(this.a,this.r,c,d)
case 35666:return new A.jx(this.a,this.r,c,d)
case 35667:return new A.jv(this.a,this.r,c,d)
case 35668:return new A.jw(this.a,this.r,c,d)
case 35669:return new A.jy(this.a,this.r,c,d)
case 35674:return new A.jB(this.a,this.r,c,d)
case 35675:return new A.df(this.a,this.r,c,d)
case 35676:return new A.as(this.a,this.r,c,d)
case 35678:return this.fF(b,c,d)
case 35680:return this.fG(b,c,d)
case 35670:throw H.h(this.bu("BOOL",c))
case 35671:throw H.h(this.bu("BOOL_VEC2",c))
case 35672:throw H.h(this.bu("BOOL_VEC3",c))
case 35673:throw H.h(this.bu("BOOL_VEC4",c))
default:throw H.h(P.o("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}},c0:{"^":"a;a,b",
i:function(a){return this.b}},eI:{"^":"cg;0z,0Q,0ch,0cx,0cy,0db,a,b,0c,0d,0e,0f,0r,0x,0y"},a4:{"^":"a;"},jz:{"^":"a;a",
l:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.l(0,b)
if(z==null)throw H.h(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.L()},
j7:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w)x+=z[w].i(0)+a
return x},
L:function(){return this.j7("\n")}},H:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform1i: "+H.f(this.c)}},jv:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform2i: "+H.f(this.c)}},jw:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform3i: "+H.f(this.c)}},jy:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform4i: "+H.f(this.c)}},jt:{"^":"a4;0e,0f,a,b,c,d",
si7:function(a){this.e=H.i(a,"$isb",[P.y],"$asb")},
i:function(a){return"Uniform1iv: "+H.f(this.c)},
n:{
dd:function(a,b,c,d,e){var z=new A.jt(a,b,c,e)
z.f=d
z.si7(P.i3(d,0,!1,P.y))
return z}}},S:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform1f: "+H.f(this.c)}},ju:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform2f: "+H.f(this.c)}},D:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform3f: "+H.f(this.c)}},jx:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform4f: "+H.f(this.c)}},jB:{"^":"a4;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}},df:{"^":"a4;a,b,c,d",
ah:function(a){var z=new Float32Array(H.bG(H.i(a,"$isb",[P.w],"$asb")))
C.b.ez(this.a,this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.f(this.c)}},as:{"^":"a4;a,b,c,d",
ah:function(a){var z=new Float32Array(H.bG(H.i(a,"$isb",[P.w],"$asb")))
C.b.eA(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.f(this.c)}},ag:{"^":"a4;a,b,c,d",
eU:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)C.b.J(y,x,0)
else C.b.J(y,x,a.a)},
i:function(a){return"UniformSampler2D: "+H.f(this.c)}},a9:{"^":"a4;a,b,c,d",
eV:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)C.b.J(y,x,0)
else C.b.J(y,x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}}],["","",,F,{"^":"",
cq:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bE:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.L(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.L(t+h,s+f,r+g)
z.b=q
p=new V.L(t-h,s-f,r-g)
z.c=p
o=new V.L(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cq(y)
k=F.cq(z.b)
j=F.lu(d,e,new F.kO(z,F.cq(z.c),F.cq(z.d),k,l,c),b)
if(j!=null)a.jj(j)},
lu:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.j(c,{func:1,ret:-1,args:[F.aD,P.w,P.w]})
if(a<1)return
if(b<1)return
z=F.d2()
y=H.c([],[F.aD])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cm(null,null,new V.aQ(u,0,0,1),null,null,new V.a3(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cs(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cm(null,null,new V.aQ(o,n,m,1),null,null,new V.a3(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cs(d))}}z.d.iz(a+1,b+1,y)
return z},
kO:{"^":"t:37;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cH(z.b,b).cH(z.d.cH(z.c,b),c)
z=new V.af(y.a,y.b,y.c)
if(!J.V(a.f,z)){a.f=z
z=a.a
if(z!=null)z.a4()}a.sjI(y.w(0,Math.sqrt(y.E(y))))
z=1-b
x=1-c
x=new V.bv(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.V(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.a4()}}},
a1:{"^":"a;0a,0b,0c,0d,0e",
fu:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.bU()
if(y!=null)v=v.G(0,y)
if(x!=null)v=v.G(0,x)
if(w!=null)v=v.G(0,w)
if(v.el())return
return v.w(0,Math.sqrt(v.E(v)))},
fB:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.K(0,y)
z=new V.L(z.a,z.b,z.c)
v=z.w(0,Math.sqrt(z.E(z)))
z=w.K(0,y)
z=new V.L(z.a,z.b,z.c)
z=v.b9(z.w(0,Math.sqrt(z.E(z))))
return z.w(0,Math.sqrt(z.E(z)))},
cq:function(){if(this.d!=null)return!0
var z=this.fu()
if(z==null){z=this.fB()
if(z==null)return!1}this.d=z
this.a.a.a4()
return!0},
ft:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=V.bU()
if(y!=null)v=v.G(0,y)
if(x!=null)v=v.G(0,x)
if(w!=null)v=v.G(0,w)
if(v.el())return
return v.w(0,Math.sqrt(v.E(v)))},
fA:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.m.$2(n,0)){z=r.K(0,u)
z=new V.L(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.E(z)))
if(o.a-p.a<0)m=m.O(0)}else{l=(z-q.b)/n
z=r.K(0,u)
z=new V.af(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).K(0,x)
z=new V.L(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.E(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.O(0)}z=this.d
if(z!=null){k=z.w(0,Math.sqrt(z.E(z)))
z=k.b9(m)
z=z.w(0,Math.sqrt(z.E(z))).b9(k)
m=z.w(0,Math.sqrt(z.E(z)))}return m},
co:function(){if(this.e!=null)return!0
var z=this.ft()
if(z==null){z=this.fA()
if(z==null)return!1}this.e=z
this.a.a.a4()
return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
A:function(a){var z,y
z=this.a
if(z==null||this.b==null||this.c==null)return a+"disposed"
y=a+C.i.ag(J.a7(z.e),0)+", "+C.i.ag(J.a7(this.b.e),0)+", "+C.i.ag(J.a7(this.c.e),0)+" {"
z=this.d
y=z!=null?y+(z.i(0)+", "):y+"-, "
z=this.e
return z!=null?y+(z.i(0)+"}"):y+"-}"},
L:function(){return this.A("")},
n:{
bo:function(a,b,c){var z,y,x
z=new F.a1()
y=a.a
if(y==null)H.p(P.o("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.p(P.o("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.a4()
return z}}},
br:{"^":"a;0a,0b",
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
A:function(a){var z=this.a
if(z==null||this.b==null)return a+"disposed"
return a+C.i.ag(J.a7(z.e),0)+", "+C.i.ag(J.a7(this.b.e),0)},
L:function(){return this.A("")},
n:{
hZ:function(a,b){var z,y,x
z=new F.br()
y=a.a
if(y==null)H.p(P.o("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.p(P.o("May not create a line with vertices attached to different shapes."))
z.a=a
C.a.h(a.c.b,z)
z.b=b
C.a.h(b.c.c,z)
C.a.h(z.a.a.c.b,z)
z.a.a.a4()
return z}}},
bT:{"^":"a;0a",
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
A:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.i.ag(J.a7(z.e),0)},
L:function(){return this.A("")}},
eH:{"^":"a;0a,0b,0c,0d,0e",
gp:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
jj:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.a0()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){v=z[w]
this.a.h(0,v.iQ())}this.a.a0()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.a0()
s=s.e
if(typeof s!=="number")return s.G()
s+=y
t=t.c
if(s>=t.length)return H.l(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.bT()
if(r.a==null)H.p(P.o("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.D(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.a0()
s=s.e
if(typeof s!=="number")return s.G()
s+=y
t=t.c
if(s>=t.length)return H.l(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.a0()
t=t.e
if(typeof t!=="number")return t.G()
t+=y
s=s.c
if(t>=s.length)return H.l(s,t)
o=s[t]
t=this.c.a
t.a.h(0,p)
t.a.h(0,o)
F.hZ(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.x)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.a0()
s=s.e
if(typeof s!=="number")return s.G()
s+=y
t=t.c
if(s>=t.length)return H.l(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.a0()
t=t.e
if(typeof t!=="number")return t.G()
t+=y
s=s.c
if(t>=s.length)return H.l(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.a0()
s=s.e
if(typeof s!=="number")return s.G()
s+=y
t=t.c
if(s>=t.length)return H.l(t,s)
m=t[s]
s=this.d.a
s.a.h(0,p)
s.a.h(0,o)
s.a.h(0,m)
F.bo(p,o,m)}z=this.e
if(!(z==null))z.aE()},
ay:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.ay()||!1
if(!this.a.ay())y=!1
z=this.e
if(!(z==null))z.aE()
return y},
dP:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$at()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aL().a)!==0)++w
if((x&$.$get$aK().a)!==0)++w
if((x&$.$get$aM().a)!==0)++w
if((x&$.$get$aN().a)!==0)++w
if((x&$.$get$bA().a)!==0)++w
if((x&$.$get$bB().a)!==0)++w
if((x&$.$get$b9().a)!==0)++w
if((x&$.$get$aJ().a)!==0)++w
v=b.gd_(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.w
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.dO])
for(r=0,q=0;q<w;++q){p=b.iD(q)
o=p.gd_(p)
C.a.W(s,q,new Z.dO(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.l(y,n)
m=y[n].jf(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.W(t,l,m[k]);++l}}r+=o}H.i(t,"$isb",[x],"$asb")
y=a.a
j=y.createBuffer()
C.b.ar(y,34962,j)
C.b.dO(y,34962,new Float32Array(H.bG(t)),35044)
C.b.ar(y,34962,null)
i=new Z.cI(new Z.fj(34962,j),s,b)
i.sfU(H.c([],[Z.bO]))
if(this.b.b.length!==0){x=P.y
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.a0()
C.a.h(h,g.e)}f=Z.dl(y,34963,H.i(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bO(0,h.length,f))}if(this.c.b.length!==0){x=P.y
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.a0()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.l(g,q)
g=g[q].b
g.a.a.a0()
C.a.h(h,g.e)}f=Z.dl(y,34963,H.i(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bO(1,h.length,f))}if(this.d.b.length!==0){x=P.y
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.a0()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.l(g,q)
g=g[q].b
g.a.a.a0()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.l(g,q)
g=g[q].c
g.a.a.a0()
C.a.h(h,g.e)}f=Z.dl(y,34963,H.i(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bO(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.n])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.A("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.A("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.A("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.A("   "))}return C.a.k(z,"\n")},
aX:function(a){var z=this.e
if(!(z==null))z.D(a)},
a4:function(){return this.aX(null)},
$islP:1,
n:{
d2:function(){var z,y
z=new F.eH()
y=new F.jN(z)
y.b=!1
y.si8(H.c([],[F.aD]))
z.a=y
y=new F.iZ(z)
y.scd(H.c([],[F.bT]))
z.b=y
y=new F.iY(z)
y.sfV(H.c([],[F.br]))
z.c=y
y=new F.iX(z)
y.sfL(H.c([],[F.a1]))
z.d=y
z.e=null
return z}}},
iX:{"^":"a;a,0b",
sfL:function(a){this.b=H.i(a,"$isb",[F.a1],"$asb")},
iy:function(a){var z,y,x,w,v,u
H.i(a,"$isb",[F.aD],"$asb")
z=H.c([],[F.a1])
y=a[0]
for(x=this.a,w=2;w<4;++w){v=a[w-1]
u=a[w]
x.a.h(0,y)
x.a.h(0,v)
x.a.h(0,u)
C.a.h(z,F.bo(y,v,u))}return z},
iz:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.i(c,"$isb",[F.aD],"$asb")
z=H.c([],[F.a1])
for(y=this.a,x=b,w=0,v=!1,u=1;u<a;++u,++w,++x){for(t=v,s=1;s<b;++s,x=o){r=c.length
if(w<0||w>=r)return H.l(c,w)
q=c[w];++w
if(w>=r)return H.l(c,w)
p=c[w]
o=x+1
if(o<0||o>=r)return H.l(c,o)
n=c[o]
if(x<0||x>=r)return H.l(c,x)
m=c[x]
r=y.a
if(t){r.h(0,q)
y.a.h(0,p)
y.a.h(0,n)
C.a.h(z,F.bo(q,p,n))
y.a.h(0,q)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bo(q,n,m))}else{r.h(0,p)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bo(p,n,m))
y.a.h(0,p)
y.a.h(0,m)
y.a.h(0,q)
C.a.h(z,F.bo(p,m,q))}t=!t}v=!v}return z},
gq:function(a){return this.b.length},
ay:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].cq())x=!1
return x},
cp:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].co())x=!1
return x},
i:function(a){return this.L()},
A:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.k(z,"\n")},
L:function(){return this.A("")}},
iY:{"^":"a;a,0b",
sfV:function(a){this.b=H.i(a,"$isb",[F.br],"$asb")},
gq:function(a){return this.b.length},
i:function(a){return this.L()},
A:function(a){var z,y,x,w
z=H.c([],[P.n])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.l(w,x)
C.a.h(z,w[x].A(a+(""+x+". ")))}return C.a.k(z,"\n")},
L:function(){return this.A("")}},
iZ:{"^":"a;a,0b",
scd:function(a){this.b=H.i(a,"$isb",[F.bT],"$asb")},
gq:function(a){return this.b.length},
i:function(a){return this.L()},
A:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.k(z,"\n")},
L:function(){return this.A("")}},
aD:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cs:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cm(this.cx,x,u,z,y,w,v,a,t)},
iQ:function(){return this.cs(null)},
sjI:function(a){var z
if(!J.V(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a4()}},
jf:function(a){var z,y
if(a.u(0,$.$get$at())){z=this.f
y=[P.w]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$aL())){z=this.r
y=[P.w]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$aK())){z=this.x
y=[P.w]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$aM())){z=this.y
y=[P.w]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(a.u(0,$.$get$aN())){z=this.z
y=[P.w]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$bA())){z=this.Q
y=[P.w]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$bB())){z=this.Q
y=[P.w]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(a.u(0,$.$get$b9()))return H.c([this.ch],[P.w])
else if(a.u(0,$.$get$aJ())){z=this.cx
y=[P.w]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.w])},
cq:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bU()
this.d.a3(0,new F.jU(z))
z=z.a
this.r=z.w(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.a4()
z=this.a.e
if(!(z==null))z.aE()}return!0},
co:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bU()
this.d.a3(0,new F.jT(z))
z=z.a
this.x=z.w(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.a4()
z=this.a.e
if(!(z==null))z.aE()}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
A:function(a){var z,y,x
z=H.c([],[P.n])
C.a.h(z,C.i.ag(J.a7(this.e),0))
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
C.a.h(z,V.K(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.k(z,", ")
return a+"{"+x+"}"},
L:function(){return this.A("")},
n:{
cm:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aD()
y=new F.jS(z)
y.scd(H.c([],[F.bT]))
z.b=y
y=new F.jR(z)
x=[F.br]
y.sfW(H.c([],x))
y.sfX(H.c([],x))
z.c=y
y=new F.jO(z)
x=[F.a1]
y.sfM(H.c([],x))
y.sfN(H.c([],x))
y.sfO(H.c([],x))
z.d=y
h=$.$get$fg()
z.e=0
y=$.$get$at()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aL().a)!==0?e:null
z.x=(x&$.$get$aK().a)!==0?b:null
z.y=(x&$.$get$aM().a)!==0?f:null
z.z=(x&$.$get$aN().a)!==0?g:null
z.Q=(x&$.$get$fh().a)!==0?c:null
z.ch=(x&$.$get$b9().a)!==0?i:0
z.cx=(x&$.$get$aJ().a)!==0?a:null
return z}}},
jU:{"^":"t:5;a",
$1:function(a){var z,y
H.e(a,"$isa1")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.G(0,z)}}},
jT:{"^":"t:5;a",
$1:function(a){var z,y
H.e(a,"$isa1")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.G(0,z)}}},
jN:{"^":"a;a,0b,0c",
si8:function(a){this.c=H.i(a,"$isb",[F.aD],"$asb")},
a0:function(){},
h:function(a,b){var z,y
z=b.a
if(z!=null){if(z===this.a)return!1
throw H.h(P.o("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
y=this.a
b.a=y
C.a.h(z,b)
y.a4()
return!0},
iA:function(a,b,c,d,e,f,g,h,i){var z=F.cm(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bw:function(a,b,c,d,e,f){return this.iA(a,null,b,c,null,d,e,f,0)},
gq:function(a){return this.c.length},
ay:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].cq()
return!0},
cp:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].co()
return!0},
iI:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.w(0,Math.sqrt(u*u+t*t+s*s))
if(!J.V(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.D(null)}}}}return!0},
i:function(a){return this.L()},
A:function(a){var z,y,x,w
this.a0()
z=H.c([],[P.n])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.k(z,"\n")},
L:function(){return this.A("")}},
jO:{"^":"a;a,0b,0c,0d",
sfM:function(a){this.b=H.i(a,"$isb",[F.a1],"$asb")},
sfN:function(a){this.c=H.i(a,"$isb",[F.a1],"$asb")},
sfO:function(a){this.d=H.i(a,"$isb",[F.a1],"$asb")},
gq:function(a){return this.b.length+this.c.length+this.d.length},
a3:function(a,b){H.j(b,{func:1,ret:-1,args:[F.a1]})
C.a.a3(this.b,b)
C.a.a3(this.c,new F.jP(this,b))
C.a.a3(this.d,new F.jQ(this,b))},
i:function(a){return this.L()},
A:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.k(z,"\n")},
L:function(){return this.A("")}},
jP:{"^":"t:5;a,b",
$1:function(a){H.e(a,"$isa1")
if(!J.V(a.a,this.a))this.b.$1(a)}},
jQ:{"^":"t:5;a,b",
$1:function(a){var z
H.e(a,"$isa1")
z=this.a
if(!J.V(a.a,z)&&!J.V(a.b,z))this.b.$1(a)}},
jR:{"^":"a;a,0b,0c",
sfW:function(a){this.b=H.i(a,"$isb",[F.br],"$asb")},
sfX:function(a){this.c=H.i(a,"$isb",[F.br],"$asb")},
gq:function(a){return this.b.length+this.c.length},
i:function(a){return this.L()},
A:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.k(z,"\n")},
L:function(){return this.A("")}},
jS:{"^":"a;a,0b",
scd:function(a){this.b=H.i(a,"$isb",[F.bT],"$asb")},
gq:function(a){return this.b.length},
i:function(a){return this.L()},
A:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].A(a))
return C.a.k(z,"\n")},
L:function(){return this.A("")}}}],["","",,O,{"^":"",ib:{"^":"by;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
sfw:function(a){this.e=H.i(a,"$isR",[V.ao],"$asR")},
gp:function(){var z=this.dy
if(z==null){z=D.C()
this.dy=z}return z},
X:[function(a){var z
H.e(a,"$isu")
z=this.dy
if(!(z==null))z.D(a)},function(){return this.X(null)},"dt","$1","$0","gaN",0,2,0],
hF:[function(a){H.e(a,"$isu")
this.a=null
this.X(a)},function(){return this.hF(null)},"kp","$1","$0","ghE",0,2,0],
jX:[function(a,b){var z=V.ao
z=new D.bP(a,H.i(b,"$isk",[z],"$ask"),this,[z])
z.b=!0
this.X(z)},"$2","gh6",8,0,24],
jY:[function(a,b){var z=V.ao
z=new D.bQ(a,H.i(b,"$isk",[z],"$ask"),this,[z])
z.b=!0
this.X(z)},"$2","gh7",8,0,24],
dg:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
z=this.dx
y=C.h.a2(z.e.length+3,4)*4
x=C.h.a2(z.f.length+3,4)*4
w=C.h.a2(z.r.length+3,4)*4
v=C.h.a2(z.x.length+3,4)*4
u=C.h.a2(z.y.length+3,4)*4
t=C.h.a2(z.z.length+3,4)*4
s=C.h.a2(this.e.a.length+3,4)*4
z=this.f.c
r=this.r.c
q=this.x.c
p=this.y.c
o=this.z.c
n=this.Q.c
m=this.cx.c
l=this.cy.c
k=this.db.c
j="MaterialLight_"+C.h.i(z.a)+C.h.i(r.a)+C.h.i(q.a)+C.h.i(p.a)+C.h.i(o.a)+C.h.i(n.a)+C.h.i(m.a)+C.h.i(l.a)+C.h.i(k.a)
j+"_"
j+"_0"
j+"_00"
j+"_000"
j=j+"_000_"+s+"_"+y+"_"+x+"_"+w+"_"+v+"_"+u+"_"+t
i=m!==C.c||l!==C.c
h=r!==C.c||q!==C.c||p!==C.c||o!==C.c
g=o===C.c
f=!g||i
e=q!==C.c||p!==C.c||!g||n!==C.c||i
g=n===C.c
d=!g
c=z===C.d||r===C.d||q===C.d||p===C.d||o===C.d||n===C.d||m===C.d||l===C.d||k===C.d
b=z===C.e||r===C.e||q===C.e||p===C.e||o===C.e||n===C.e||m===C.e||l===C.e||k===C.e
a=x+u+v+w+t>0
a0=s>0
a1=e||!g||f
a2=$.$get$at()
if(e){g=$.$get$aL()
a2=new Z.b8(a2.a|g.a)}if(d){g=$.$get$aK()
a2=new Z.b8(a2.a|g.a)}if(c){g=$.$get$aM()
a2=new Z.b8(a2.a|g.a)}if(b){g=$.$get$aN()
a2=new Z.b8(a2.a|g.a)}if(a0){g=$.$get$aJ()
a2=new Z.b8(a2.a|g.a)}return new A.ig(z,r,q,p,o,n,m,l,k,y,x,w,v,u,t,y+x+w+v+u+t,i,i,a,a1,!0,!1,!1,h,a,f,e,d,c,b,a0,!1,!1,!1,s,j.charCodeAt(0)==0?j:j,a2)},
U:function(a,b){H.i(a,"$isb",[T.ch],"$asb")
if(b!=null)if(!C.a.S(a,b)){b.a=a.length
C.a.h(a,b)}},
ao:function(a){var z,y,x,w,v
for(z=this.dx.a,z=new J.ak(z,z.length,0,[H.v(z,0)]);z.v();){y=z.d
y.toString
x=$.cl
if(x==null){x=new V.L(0,0,1)
$.cl=x}y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cQ(x)}}},
es:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.dg()
y=H.e(a.fr.l(0,z.am),"$isem")
if(y==null){y=A.ic(z,a.a)
a.dK(y)}this.a=y
b.e=null
z=y}x=z.z
w=x.bz
z=b.e
if(!(z instanceof Z.cI)){b.e=null
z=null}if(z==null||!z.d.u(0,w)){z=x.r1
if(z)b.d.ay()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.d
u.d.cp()
u.a.cp()
u=u.e
if(!(u==null))u.aE()}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.a.iI()
t=t.e
if(!(t==null))t.aE()}r=b.d.dP(new Z.fk(a.a),w)
r.aA($.$get$at()).e=this.a.Q.c
if(z)r.aA($.$get$aL()).e=this.a.cx.c
if(v)r.aA($.$get$aK()).e=this.a.ch.c
if(x.rx)r.aA($.$get$aM()).e=this.a.cy.c
if(u)r.aA($.$get$aN()).e=this.a.db.c
if(x.x1)r.aA($.$get$aJ()).e=this.a.dx.c
b.e=r}z=T.ch
q=H.c([],[z])
this.a.a1(a)
if(x.fx){v=this.a
u=a.dx.gY()
v=v.dy
v.toString
v.ah(u.ac(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db.gY().B(0,a.dx.gY())
a.cx=u}v=v.fr
v.toString
v.ah(u.ac(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.gjx().B(0,a.dx.gY())
a.ch=u}v=v.fy
v.toString
v.ah(u.ac(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.k1
v.toString
v.ah(C.r.ac(u,!0))}if(x.y1){v=this.a
u=this.c
v=v.k2
v.toString
v.ah(C.r.ac(u,!0))}if(x.y2){v=this.a
u=this.d
v=v.k3
v.toString
v.ah(C.r.ac(u,!0))}if(x.as>0){p=this.e.a.length
v=this.a.k4
C.b.J(v.a,v.d,p)
for(v=[P.w],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.l(t,o)
t=t[o]
u.toString
H.e(t,"$isao")
u=u.r1
if(o>=u.length)return H.l(u,o)
u=u[o]
n=new Float32Array(H.bG(H.i(t.ac(0,!0),"$isb",v,"$asb")))
C.b.eA(u.a,u.d,!1,n)}}switch(x.a){case C.c:break
case C.f:v=this.a
u=this.f.f
v=v.r2
v.toString
t=u.a
s=u.b
u=u.c
C.b.t(v.a,v.d,t,s,u)
break
case C.d:this.U(q,this.f.d)
v=this.a
u=this.f.d
v.ak(v.rx,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
t=v.a
s=v.b
v=v.c
C.b.t(u.a,u.d,t,s,v)
break
case C.e:this.U(q,this.f.e)
v=this.a
u=this.f.e
v.ae(v.ry,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
t=v.a
s=v.b
v=v.c
C.b.t(u.a,u.d,t,s,v)
break}if(x.k2){switch(x.b){case C.c:break
case C.f:v=this.a
u=this.r.f
v=v.x2
v.toString
t=u.a
s=u.b
u=u.c
C.b.t(v.a,v.d,t,s,u)
break
case C.d:this.U(q,this.r.d)
v=this.a
u=this.r.d
v.ak(v.y1,v.as,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
C.b.t(u.a,u.d,t,s,v)
break
case C.e:this.U(q,this.r.e)
v=this.a
u=this.r.e
v.ae(v.y2,v.as,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
C.b.t(u.a,u.d,t,s,v)
break}switch(x.c){case C.c:break
case C.f:v=this.a
u=this.x.f
v=v.am
v.toString
t=u.a
s=u.b
u=u.c
C.b.t(v.a,v.d,t,s,u)
break
case C.d:this.U(q,this.x.d)
v=this.a
u=this.x.d
v.ak(v.bz,v.bA,u)
u=this.a
v=this.x.f
u=u.am
u.toString
t=v.a
s=v.b
v=v.c
C.b.t(u.a,u.d,t,s,v)
break
case C.e:this.U(q,this.x.e)
v=this.a
u=this.x.e
v.ae(v.dZ,v.bA,u)
u=this.a
v=this.x.f
u=u.am
u.toString
t=v.a
s=v.b
v=v.c
C.b.t(u.a,u.d,t,s,v)
break}switch(x.d){case C.c:break
case C.f:v=this.a
u=this.y.f
v=v.bB
v.toString
t=u.a
s=u.b
u=u.c
C.b.t(v.a,v.d,t,s,u)
break
case C.d:this.U(q,this.y.d)
v=this.a
u=this.y.d
v.ak(v.e_,v.bC,u)
u=this.a
v=this.y.f
u=u.bB
u.toString
t=v.a
s=v.b
v=v.c
C.b.t(u.a,u.d,t,s,v)
break
case C.e:this.U(q,this.y.e)
v=this.a
u=this.y.e
v.ae(v.e0,v.bC,u)
u=this.a
v=this.y.f
u=u.bB
u.toString
t=v.a
s=v.b
v=v.c
C.b.t(u.a,u.d,t,s,v)
break}switch(x.e){case C.c:break
case C.f:v=this.a
u=this.z.f
v=v.bD
v.toString
t=u.a
s=u.b
u=u.c
C.b.t(v.a,v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bF
C.b.H(u.a,u.d,s)
break
case C.d:this.U(q,this.z.d)
v=this.a
u=this.z.d
v.ak(v.e1,v.bE,u)
u=this.a
v=this.z.f
u=u.bD
u.toString
t=v.a
s=v.b
v=v.c
C.b.t(u.a,u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bF
C.b.H(v.a,v.d,s)
break
case C.e:this.U(q,this.z.e)
v=this.a
u=this.z.e
v.ae(v.e2,v.bE,u)
u=this.a
v=this.z.f
u=u.bD
u.toString
t=v.a
s=v.b
v=v.c
C.b.t(u.a,u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bF
C.b.H(v.a,v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.ed
C.b.J(v.a,v.d,p)
m=a.db.gY()
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.cw
if(l>=t.length)return H.l(t,l)
i=t[l]
t=m.cQ(j.a)
s=t.a
h=t.b
g=t.c
g=t.w(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
s=g.a
t=g.b
g=g.c
C.b.t(h.a,h.d,s,t,g)
g=j.c
t=i.c
C.b.t(t.a,t.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.ee
C.b.J(v.a,v.d,p)
m=a.db.gY()
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.cz
if(l>=t.length)return H.l(t,l)
i=t[l]
t=j.gbd(j)
s=i.b
h=t.gcU(t)
g=t.gcV(t)
t=t.gcW(t)
C.b.t(s.a,s.d,h,g,t)
t=m.bj(j.gbd(j))
g=i.c
C.b.t(g.a,g.d,t.a,t.b,t.c)
t=j.gaz(j)
g=i.d
h=t.gbR()
s=t.gbm()
t=t.gbx()
C.b.t(g.a,g.d,h,s,t)
t=j.gcj()
s=i.e
C.b.H(s.a,s.d,t)
t=j.gck()
s=i.f
C.b.H(s.a,s.d,t)
t=j.gcl()
s=i.r
C.b.H(s.a,s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.ef
C.b.J(v.a,v.d,p)
m=a.db.gY()
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.cA
if(l>=t.length)return H.l(t,l)
i=t[l]
t=j.gbd(j)
s=i.b
h=t.gcU(t)
g=t.gcV(t)
t=t.gcW(t)
C.b.t(s.a,s.d,h,g,t)
t=j.gcu(j).kw()
g=i.c
h=t.gaS(t)
s=t.gaT(t)
t=t.gaU()
C.b.t(g.a,g.d,h,s,t)
t=m.bj(j.gbd(j))
s=i.d
C.b.t(s.a,s.d,t.a,t.b,t.c)
t=j.gaz(j)
s=i.e
h=t.gbR()
g=t.gbm()
t=t.gbx()
C.b.t(s.a,s.d,h,g,t)
t=j.gkv()
g=i.f
C.b.H(g.a,g.d,t)
t=j.gkt()
g=i.r
C.b.H(g.a,g.d,t)
t=j.gcj()
g=i.x
C.b.H(g.a,g.d,t)
t=j.gck()
g=i.y
C.b.H(g.a,g.d,t)
t=j.gcl()
g=i.z
C.b.H(g.a,g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.eg
C.b.J(v.a,v.d,p)
m=a.db.gY()
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
s=this.a.cB
if(l>=s.length)return H.l(s,l)
i=s[l]
s=j.gbh()
H.i(q,"$isb",t,"$asb")
if(!C.a.S(q,s)){s.sb3(q.length)
C.a.h(q,s)}s=j.gcu(j)
h=i.d
g=s.gaS(s)
f=s.gaT(s)
s=s.gaU()
C.b.t(h.a,h.d,g,f,s)
s=j.gbS()
f=i.b
g=s.gaS(s)
h=s.gaT(s)
s=s.gaU()
C.b.t(f.a,f.d,g,h,s)
s=j.gbe(j)
h=i.c
g=s.gaS(s)
f=s.gaT(s)
s=s.gaU()
C.b.t(h.a,h.d,g,f,s)
s=m.cQ(j.gcu(j))
f=s.a
g=s.b
h=s.c
h=s.w(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
f=h.a
s=h.b
h=h.c
C.b.t(g.a,g.d,f,s,h)
h=j.gaz(j)
s=i.f
f=h.gbR()
g=h.gbm()
h=h.gbx()
C.b.t(s.a,s.d,f,g,h)
h=j.gbh()
s=h.gem(h)
if(!s){s=i.x
C.b.J(s.a,s.d,1)}else{s=i.r
g=h.gdq()
f=s.a
s=s.d
if(!g)C.b.J(f,s,0)
else C.b.J(f,s,h.gb3())
s=i.x
C.b.J(s.a,s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.eh
C.b.J(v.a,v.d,p)
m=a.db.gY()
for(v=this.dx.y,u=v.length,t=[P.w],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
h=this.a.cC
if(l>=h.length)return H.l(h,l)
i=h[l]
h=j.gbh()
H.i(q,"$isb",s,"$asb")
if(!C.a.S(q,h)){h.sb3(q.length)
C.a.h(q,h)}e=m.B(0,j.gY())
h=j.gY()
g=$.bu
if(g==null){g=new V.af(0,0,0)
$.bu=g}g=h.bj(g)
h=i.b
f=g.gcU(g)
d=g.gcV(g)
g=g.gcW(g)
C.b.t(h.a,h.d,f,d,g)
h=$.bu
if(h==null){h=new V.af(0,0,0)
$.bu=h}h=e.bj(h)
g=i.c
C.b.t(g.a,g.d,h.a,h.b,h.c)
h=e.cG()
g=i.d
n=new Float32Array(H.bG(H.i(new V.en(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).ac(0,!0),"$isb",t,"$asb")))
C.b.ez(g.a,g.d,!1,n)
g=j.gaz(j)
h=i.e
f=g.gbR()
d=g.gbm()
g=g.gbx()
C.b.t(h.a,h.d,f,d,g)
g=j.gbh()
h=g.gem(g)
if(!h){h=i.r
C.b.J(h.a,h.d,1)}else{h=i.f
f=g.gdq()
d=h.a
h=h.d
if(!(f>=6))C.b.J(d,h,0)
else C.b.J(d,h,g.gb3())
h=i.r
C.b.J(h.a,h.d,0)}h=j.gcj()
g=i.x
C.b.H(g.a,g.d,h)
h=j.gck()
g=i.y
C.b.H(g.a,g.d,h)
h=j.gcl()
g=i.z
C.b.H(g.a,g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.ei
C.b.J(v.a,v.d,p)
m=a.db.gY()
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.cD
if(l>=t.length)return H.l(t,l)
i=t[l]
t=j.gbh()
H.i(q,"$isb",z,"$asb")
if(!C.a.S(q,t)){t.sb3(q.length)
C.a.h(q,t)}t=j.gbd(j)
s=i.b
h=t.gcU(t)
g=t.gcV(t)
t=t.gcW(t)
C.b.t(s.a,s.d,h,g,t)
t=j.gcu(j)
g=i.c
h=t.gaS(t)
s=t.gaT(t)
t=t.gaU()
C.b.t(g.a,g.d,h,s,t)
t=j.gbS()
s=i.d
h=t.gaS(t)
g=t.gaT(t)
t=t.gaU()
C.b.t(s.a,s.d,h,g,t)
t=j.gbe(j)
g=i.e
h=t.gaS(t)
s=t.gaT(t)
t=t.gaU()
C.b.t(g.a,g.d,h,s,t)
t=m.bj(j.gbd(j))
s=i.f
C.b.t(s.a,s.d,t.a,t.b,t.c)
t=j.gbh()
s=t.gem(t)
if(!s){t=i.x
C.b.J(t.a,t.d,1)}else{s=i.r
h=t.gdq()
g=s.a
s=s.d
if(!h)C.b.J(g,s,0)
else C.b.J(g,s,t.gb3())
t=i.x
C.b.J(t.a,t.d,0)}t=j.gaz(j)
s=i.y
h=t.gbR()
g=t.gbm()
t=t.gbx()
C.b.t(s.a,s.d,h,g,t)
t=j.gkB()
g=i.z
C.b.H(g.a,g.d,t)
t=j.gkC()
g=i.Q
C.b.H(g.a,g.d,t)
t=j.gcj()
g=i.ch
C.b.H(g.a,g.d,t)
t=j.gck()
g=i.cx
C.b.H(g.a,g.d,t)
t=j.gcl()
g=i.cy
C.b.H(g.a,g.d,t);++l}}}switch(x.f){case C.c:break
case C.f:break
case C.d:this.U(q,this.Q.d)
z=this.a
v=this.Q.d
z.ak(z.e3,z.bG,v)
break
case C.e:this.U(q,this.Q.e)
z=this.a
v=this.Q.e
z.ae(z.e4,z.bG,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db.gY().cG()
a.Q=v}z=z.id
z.toString
z.ah(v.ac(0,!0))}if(x.dy){this.U(q,this.ch)
z=this.a
v=this.ch
z.ae(z.e5,z.e6,v)
switch(x.r){case C.c:break
case C.f:z=this.a
v=this.cx.f
z=z.bH
z.toString
u=v.a
t=v.b
v=v.c
C.b.t(z.a,z.d,u,t,v)
break
case C.d:this.U(q,this.cx.d)
z=this.a
v=this.cx.d
z.ak(z.e7,z.bI,v)
v=this.a
z=this.cx.f
v=v.bH
v.toString
u=z.a
t=z.b
z=z.c
C.b.t(v.a,v.d,u,t,z)
break
case C.e:this.U(q,this.cx.e)
z=this.a
v=this.cx.e
z.ae(z.e8,z.bI,v)
v=this.a
z=this.cx.f
v=v.bH
v.toString
u=z.a
t=z.b
z=z.c
C.b.t(v.a,v.d,u,t,z)
break}switch(x.x){case C.c:break
case C.f:z=this.a
v=this.cy.f
z=z.bK
z.toString
u=v.a
t=v.b
v=v.c
C.b.t(z.a,z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bJ
C.b.H(v.a,v.d,t)
break
case C.d:this.U(q,this.cy.d)
z=this.a
v=this.cy.d
z.ak(z.e9,z.bL,v)
v=this.a
z=this.cy.f
v=v.bK
v.toString
u=z.a
t=z.b
z=z.c
C.b.t(v.a,v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bJ
C.b.H(z.a,z.d,t)
break
case C.e:this.U(q,this.cy.e)
z=this.a
v=this.cy.e
z.ae(z.ea,z.bL,v)
v=this.a
z=this.cy.f
v=v.bK
v.toString
u=z.a
t=z.b
z=z.c
C.b.t(v.a,v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bJ
C.b.H(z.a,z.d,t)
break}}z=x.y
v=z!==C.c
if(v){switch(z){case C.c:break
case C.f:z=this.a
u=this.db.f
z=z.bM
C.b.H(z.a,z.d,u)
break
case C.d:this.U(q,this.db.d)
z=this.a
u=this.db.d
z.ak(z.eb,z.bN,u)
u=this.a
z=this.db.f
u=u.bM
C.b.H(u.a,u.d,z)
break
case C.e:this.U(q,this.db.e)
z=this.a
u=this.db.e
z.ae(z.ec,z.bN,u)
u=this.a
z=this.db.f
u=u.bM
C.b.H(u.a,u.d,z)
break}z=a.a
C.b.cv(z,3042)
C.b.iH(z,770,771)}for(z=a.a,o=0;o<q.length;++o){u=q[o]
if(!u.c&&u.d){u.c=!0
C.b.bv(z,33984+u.a)
C.b.a7(z,3553,u.b)}}u=b.e
u.a1(a)
u.ab(a)
u.bk(a)
if(v)C.b.j0(z,3042)
for(o=0;o<q.length;++o){v=q[o]
if(v.c){v.c=!1
C.b.bv(z,33984+v.a)
C.b.a7(z,3553,null)}}v=this.a
v.toString
C.b.cR(z,null)
v.x.dU()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dg().am}},id:{"^":"cX;0f,a,b,0c,0d,0e",
hK:function(a){var z,y
z=this.f
if(!$.m.$2(z,a)){y=this.f
this.f=a
z=new D.E(this.b,y,a,this,[P.w])
z.b=!0
this.a.X(z)}},
aO:function(){this.d1()
this.hK(1)}},cX:{"^":"a;",
X:[function(a){this.a.X(H.e(a,"$isu"))},function(){return this.X(null)},"dt","$1","$0","gaN",0,2,0],
aO:["d1",function(){}],
hN:function(a){var z,y
z=this.d
if(z==null?a!=null:z!==a){if(z!=null)z.gp().T(0,this.gaN())
y=this.d
this.d=a
if(a!=null)a.gp().h(0,this.gaN())
z=new D.E(this.b+".texture2D",y,this.d,this,[T.eP])
z.b=!0
this.a.X(z)}},
hO:function(a){},
scP:function(a){var z=this.c
if(z!==C.d){if(z===C.c)this.aO()
this.c=C.d
this.hO(null)
z=this.a
z.a=null
z.X(null)}this.hN(a)}},ie:{"^":"cX;a,b,0c,0d,0e"},b2:{"^":"cX;0f,a,b,0c,0d,0e",
dD:function(a){var z,y
if(!J.V(this.f,a)){z=this.f
this.f=a
y=new D.E(this.b+".color",z,a,this,[V.a_])
y.b=!0
this.a.X(y)}},
aO:["d2",function(){this.d1()
this.dD(new V.a_(1,1,1))}],
saz:function(a,b){var z
if(this.c===C.c){this.c=C.f
this.aO()
z=this.a
z.a=null
z.X(null)}this.dD(b)}},ih:{"^":"b2;0ch,0f,a,b,0c,0d,0e",
hL:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.E(this.b+".refraction",y,a,this,[P.w])
z.b=!0
this.a.X(z)}},
aO:function(){this.d2()
this.hL(1)}},ii:{"^":"b2;0ch,0f,a,b,0c,0d,0e",
hM:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.E(this.b+".shininess",y,a,this,[P.w])
z.b=!0
this.a.X(z)}},
aO:function(){this.d2()
this.hM(100)}},j4:{"^":"by;0a,0b,0c,0d,0e",
gp:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
X:[function(a){var z
H.e(a,"$isu")
z=this.e
if(!(z==null))z.D(a)},function(){return this.X(null)},"dt","$1","$0","gaN",0,2,0],
es:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.e(a.fr.l(0,"Skybox"),"$iseI")
if(z==null){y=a.a
z=new A.eI(y,"Skybox")
z.d3(y,"Skybox")
z.ek($.j6,$.j5)
z.z=z.x.l(0,"posAttr")
z.Q=H.d(z.y.l(0,"fov"),"$isS")
z.ch=H.d(z.y.l(0,"ratio"),"$isS")
z.cx=H.d(z.y.l(0,"boxClr"),"$isD")
z.cy=H.d(z.y.l(0,"boxTxt"),"$isa9")
z.db=H.d(z.y.l(0,"viewMat"),"$isas")
a.dK(z)}this.a=z}if(b.e==null){y=b.d.dP(new Z.fk(a.a),$.$get$at())
y.aA($.$get$at()).e=this.a.z.c
b.e=y}y=this.c
if(y!=null){y.a=1
if(!y.c&&y.d>=6){y.c=!0
x=a.a
C.b.bv(x,33985)
C.b.a7(x,34067,y.b)}}y=a.d
x=a.c
w=this.a
w.a1(a)
v=this.b
u=w.Q
C.b.H(u.a,u.d,v)
v=w.ch
C.b.H(v.a,v.d,y/x)
x=this.c
w.cy.eV(x)
x=this.d
y=w.cx
C.b.t(y.a,y.d,x.a,x.b,x.c)
x=a.db.gY().cG()
w=w.db
w.toString
w.ah(x.ac(0,!0))
y=b.e
if(y instanceof Z.cI){y.a1(a)
y.ab(a)
y.bk(a)}else b.e=null
y=this.a
y.toString
x=a.a
C.b.cR(x,null)
y.x.dU()
y=this.c
if(y!=null)if(y.c){y.c=!1
C.b.bv(x,33984+y.a)
C.b.a7(x,34067,null)}}},by:{"^":"a;"}}],["","",,T,{"^":"",ch:{"^":"cF;"},eP:{"^":"ch;"},jh:{"^":"eP;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gp:function(){var z=this.y
if(z==null){z=D.C()
this.y=z}return z}},eQ:{"^":"ch;0a,0b,0c,0d,0e",
gp:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z}},ji:{"^":"a;a,0b,0c,0d,0e",
jh:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
C.b.a7(z,3553,y)
C.b.at(z,3553,10242,33071)
C.b.at(z,3553,10243,33071)
C.b.at(z,3553,10241,9729)
C.b.at(z,3553,10240,9729)
C.b.a7(z,3553,null);++this.d
x=W.e9(null,a,null)
w=new T.jh()
w.a=0
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
z=W.a0
W.U(x,"load",H.j(new T.jk(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
jg:function(a){return this.jh(a,!1,!1,!1,!1)},
aM:function(a,b,c,d,e,f){var z,y
z=W.e9(null,c,null);++this.d
y=W.a0
W.U(z,"load",H.j(new T.jj(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
dC:function(a,b,c){var z,y,x,w
b=V.dE(b,2)
z=V.dE(a.width,2)
y=V.dE(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cK(null,null)
x.width=z
x.height=y
w=H.e(C.o.eI(x,"2d"),"$iscL")
w.imageSmoothingEnabled=!1;(w&&C.y).j2(w,a,0,0,x.width,x.height)
return P.l3(C.y.fS(w,0,0,x.width,x.height))}}},jk:{"^":"t:11;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.dC(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
C.b.a7(y,3553,this.e)
C.b.er(y,37440,this.f?1:0)
C.b.ev(y,3553,0,6408,6408,5121,w)
if(this.r)C.b.eD(y,3553)
C.b.a7(y,3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.dX()}++x.e}},jj:{"^":"t:11;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.dC(this.b,z.c,this.c)
x=z.a
C.b.a7(x,34067,this.d)
C.b.er(x,37440,this.e?1:0)
C.b.ev(x,this.f,0,6408,6408,5121,y)
C.b.a7(x,34067,null)
x=this.r
if(++x.d>=6){x=x.e
if(!(x==null))x.dX()}++z.e}}}],["","",,V,{"^":"",bj:{"^":"a;",
aW:function(a){return!0},
i:function(a){return"all"},
$isaw:1},aw:{"^":"a;"},el:{"^":"a;0a",
sa5:function(a){this.a=H.i(a,"$isb",[V.aw],"$asb")},
aW:["f1",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)if(z[x].aW(a))return!0
return!1}],
i:["d0",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isaw:1},aq:{"^":"el;0a",
aW:function(a){return!this.f1(a)},
i:function(a){return"!["+this.d0(0)+"]"}},iI:{"^":"a;0a,0b",
aW:function(a){return this.a<=a&&this.b>=a},
i:function(a){var z,y
z=H.d0(this.a)
y=H.d0(this.b)
return z+".."+y},
$isaw:1,
n:{
M:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.h(P.o("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.i.aJ(a,0)
y=C.i.aJ(b,0)
x=new V.iI()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},iU:{"^":"a;0a",
shJ:function(a){this.a=H.i(a,"$isae",[P.y,P.I],"$asae")},
f6:function(a){var z,y
if(a.a.length<=0)throw H.h(P.o("May not create a SetMatcher with zero characters."))
z=new H.b1(0,0,[P.y,P.I])
for(y=new H.cW(a,a.gq(a),0,[H.Y(a,"T",0)]);y.v();)z.W(0,y.d,!0)
this.shJ(z)},
aW:function(a){return this.a.dS(a)},
i:function(a){var z=this.a
return P.d6(new H.eg(z,[H.v(z,0)]),0,null)},
$isaw:1,
n:{
r:function(a){var z=new V.iU()
z.f6(a)
return z}}},d3:{"^":"a;a,b,0c,0d",
si3:function(a){this.c=H.i(a,"$isb",[V.db],"$asb")},
k:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.db(this.a.j(0,b))
w.sa5(H.c([],[V.aw]))
w.c=!1
C.a.h(this.c,w)
return w},
j4:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.aW(a))return w}return},
i:function(a){return this.b}},eX:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.dG(this.b,"\n","\\n")
y=H.dG(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},da:{"^":"a;a,b,0c",
shC:function(a){var z=P.n
this.c=H.i(a,"$isae",[z,z],"$asae")},
aD:function(a,b,c){var z,y,x
H.i(c,"$isb",[P.n],"$asb")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.x)(c),++y){x=c[y]
this.c.W(0,x,b)}},
i:function(a){return this.b}},jp:{"^":"a;0a,0b,0c",
shV:function(a){this.a=H.i(a,"$isae",[P.n,V.d3],"$asae")},
si_:function(a){this.b=H.i(a,"$isae",[P.n,V.da],"$asae")},
j:function(a,b){var z=this.a.l(0,b)
if(z==null){z=new V.d3(this,b)
z.si3(H.c([],[V.db]))
z.d=null
this.a.W(0,b,z)}return z},
M:function(a){var z,y
z=this.b.l(0,a)
if(z==null){z=new V.da(this,a)
y=P.n
z.shC(new H.b1(0,0,[y,y]))
this.b.W(0,a,z)}return z},
ey:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.eX])
y=this.c
x=[P.y]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.aJ(a,t)
r=y.j4(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.d6(w,0,null)
throw H.h(P.o("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.d6(w,0,null)
p=y.d
o=p.c.l(0,q)
u=new V.eX(o==null?p.b:o,q,t)}++t}}},
n:{
ci:function(){var z,y
z=new V.jp()
y=P.n
z.shV(new H.b1(0,0,[y,V.d3]))
z.si_(new H.b1(0,0,[y,V.da]))
z.c=null
return z}}},db:{"^":"el;b,0c,0a",
i:function(a){return this.b.b+": "+this.d0(0)}}}],["","",,X,{"^":"",c_:{"^":"a;",$isaz:1},hG:{"^":"d8;0a,0b,0c,0d,0e,0f,0r,0x",
gp:function(){var z=this.x
if(z==null){z=D.C()
this.x=z}return z},
a1:function(a){var z,y,x,w,v,u,t,s
z=a.a
C.b.iG(z,36160,null)
C.b.cv(z,2884)
C.b.cv(z,2929)
C.b.j_(z,513)
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
v=w.a
if(typeof y!=="number")return H.B(y)
u=C.k.an(v*y)
v=w.b
if(typeof x!=="number")return H.B(x)
t=C.k.an(v*x)
v=C.k.an(w.c*y)
a.c=v
w=C.k.an(w.d*x)
a.d=w
C.b.jP(z,u,t,v,w)
C.b.iL(z,this.c)
if(this.b){w=this.a
C.b.iK(z,w.a,w.b,w.c,w.d)
s=16640}else s=256
C.b.iJ(z,s)},
n:{
cQ:function(a,b,c,d,e,f,g){var z,y
z=new X.hG()
y=new V.aQ(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=$.eE
if(y==null){y=V.eD(0,0,1,1)
$.eE=y}z.r=y
return z}}},hO:{"^":"a;0a,0b",
gp:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
a1:function(a){var z
a.cy.bQ(V.b3())
z=V.b3()
a.db.bQ(z)},
bk:function(a){a.cy.aC()
a.db.aC()},
$isaz:1,
$isc_:1},iu:{"^":"a;0a,0b,0c,0d,0e,0f",
gp:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
b0:[function(a){var z
H.e(a,"$isu")
z=this.f
if(!(z==null))z.D(a)},function(){return this.b0(null)},"jR","$1","$0","gfo",0,2,0],
a1:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=this.c
w=this.d
v=this.e
u=v-w
t=1/Math.tan(x*0.5)
s=V.ax(-t/(z/y),0,0,0,0,t,0,0,0,0,v/u,-v*w/u,0,0,1,0)
a.cy.bQ(s)
z=$.ev
if(z==null){z=V.ey()
y=V.ff()
x=$.fc
if(x==null){x=new V.L(0,0,-1)
$.fc=x}x=V.eo(z,y,x)
$.ev=x
r=x}else r=z
z=this.b
if(z!=null){q=z.aY(a,this)
if(q!=null)r=q.B(0,r)}a.db.bQ(r)},
bk:function(a){a.cy.aC()
a.db.aC()},
$isaz:1,
$isc_:1,
n:{
eu:function(a,b,c,d,e){var z,y,x
z=new X.iu()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
if(null!=c){y=z.b
z.b=c
if(c!=null)c.gp().h(0,z.gfo())
x=new D.E("mover",y,z.b,z,[U.a6])
x.b=!0
z.b0(x)}x=z.c
if(!$.m.$2(x,b)){y=z.c
z.c=b
x=new D.E("fov",y,b,z,[P.w])
x.b=!0
z.b0(x)}x=z.d
if(!$.m.$2(x,d)){y=z.d
z.d=d
x=new D.E("near",y,d,z,[P.w])
x.b=!0
z.b0(x)}x=z.e
if(!$.m.$2(x,a)){y=z.e
z.e=a
x=new D.E("far",y,a,z,[P.w])
x.b=!0
z.b0(x)}return z}}},d8:{"^":"a;"}}],["","",,V,{"^":"",
ls:function(a){P.jo(C.K,new V.lt(a))},
aP:{"^":"a;0d",
sc5:function(a){this.d=H.i(a,"$isb",[[P.b,W.aS]],"$asb")},
bp:function(a){this.b=new P.hM(C.M)
this.c=null
this.sc5(H.c([],[[P.b,W.aS]]))},
I:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.c([],[W.aS]))
y=a.split("\n")
for(z=y.length,x=[W.aS],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.c([],x))
t=document.createElement("div")
t.className="codePart"
H.F(u)
s=this.b.fE(u,0,u.length)
r=s==null?u:s
C.j.eS(t,H.dG(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gbO(this.d),t)}},
eq:function(a){var z,y,x,w
H.i(a,"$isb",[P.n],"$asb")
this.sc5(H.c([],[[P.b,W.aS]]))
z=C.a.k(a,"\n")
y=this.c
if(y==null){y=this.by()
this.c=y}for(y=y.ey(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)this.bP(y[w])}},
lt:{"^":"t:39;a",
$1:function(a){H.e(a,"$isb6")
P.dF(C.k.ex(this.a.gj8(),2)+" fps")}},
hk:{"^":"aP;a,0b,0c,0d",
bP:function(a){switch(a.a){case"Class":this.I(a.b,"#551")
break
case"Comment":this.I(a.b,"#777")
break
case"Id":this.I(a.b,"#111")
break
case"Num":this.I(a.b,"#191")
break
case"Reserved":this.I(a.b,"#119")
break
case"String":this.I(a.b,"#171")
break
case"Symbol":this.I(a.b,"#616")
break
case"Type":this.I(a.b,"#B11")
break
case"Whitespace":this.I(a.b,"#111")
break}},
by:function(){var z,y,x,w
z=V.ci()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.r(new H.q("_"))
C.a.h(y.a,x)
x=V.M("a","z")
C.a.h(y.a,x)
x=V.M("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.r(new H.q("_"))
C.a.h(x.a,y)
y=V.M("0","9")
C.a.h(x.a,y)
y=V.M("a","z")
C.a.h(x.a,y)
y=V.M("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Int")
x=V.M("0","9")
C.a.h(y.a,x)
x=z.j(0,"Int").k(0,"Int")
y=V.M("0","9")
C.a.h(x.a,y)
y=z.j(0,"Int").k(0,"FloatDot")
x=V.r(new H.q("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").k(0,"Float")
y=V.M("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").k(0,"Float")
x=V.M("0","9")
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"Sym")
y=V.r(new H.q("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.j(0,"Sym").k(0,"Sym")
x=V.r(new H.q("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"OpenDoubleStr")
y=V.r(new H.q('"'))
C.a.h(x.a,y)
y=z.j(0,"OpenDoubleStr").k(0,"CloseDoubleStr")
x=V.r(new H.q('"'))
C.a.h(y.a,x)
x=z.j(0,"OpenDoubleStr").k(0,"EscDoubleStr")
y=V.r(new H.q("\\"))
C.a.h(x.a,y)
y=z.j(0,"EscDoubleStr").k(0,"OpenDoubleStr")
x=V.r(new H.q('"'))
C.a.h(y.a,x)
C.a.h(z.j(0,"OpenDoubleStr").k(0,"OpenDoubleStr").a,new V.bj())
x=z.j(0,"Start").k(0,"OpenSingleStr")
y=V.r(new H.q("'"))
C.a.h(x.a,y)
y=z.j(0,"OpenSingleStr").k(0,"CloseSingleStr")
x=V.r(new H.q("'"))
C.a.h(y.a,x)
x=z.j(0,"OpenSingleStr").k(0,"EscSingleStr")
y=V.r(new H.q("\\"))
C.a.h(x.a,y)
y=z.j(0,"EscSingleStr").k(0,"OpenSingleStr")
x=V.r(new H.q("'"))
C.a.h(y.a,x)
C.a.h(z.j(0,"OpenSingleStr").k(0,"OpenSingleStr").a,new V.bj())
x=z.j(0,"Start").k(0,"Slash")
y=V.r(new H.q("/"))
C.a.h(x.a,y)
y=z.j(0,"Slash").k(0,"Comment")
x=V.r(new H.q("/"))
C.a.h(y.a,x)
x=z.j(0,"Comment").k(0,"EndComment")
y=V.r(new H.q("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").k(0,"Comment")
x=new V.aq()
w=[V.aw]
x.sa5(H.c([],w))
C.a.h(y.a,x)
y=V.r(new H.q("\n"))
C.a.h(x.a,y)
y=z.j(0,"Slash").k(0,"MLComment")
x=V.r(new H.q("*"))
C.a.h(y.a,x)
x=z.j(0,"MLComment").k(0,"MLCStar")
y=V.r(new H.q("*"))
C.a.h(x.a,y)
y=z.j(0,"MLCStar").k(0,"MLComment")
x=new V.aq()
x.sa5(H.c([],w))
C.a.h(y.a,x)
y=V.r(new H.q("*"))
C.a.h(x.a,y)
y=z.j(0,"MLCStar").k(0,"EndComment")
x=V.r(new H.q("/"))
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"Whitespace")
y=V.r(new H.q(" \n\t"))
C.a.h(x.a,y)
y=z.j(0,"Whitespace").k(0,"Whitespace")
x=V.r(new H.q(" \n\t"))
C.a.h(y.a,x)
x=z.j(0,"Int")
x.d=x.a.M("Num")
x=z.j(0,"Float")
x.d=x.a.M("Num")
x=z.j(0,"Sym")
x.d=x.a.M("Symbol")
x=z.j(0,"CloseDoubleStr")
x.d=x.a.M("String")
x=z.j(0,"CloseSingleStr")
x.d=x.a.M("String")
x=z.j(0,"EndComment")
x.d=x.a.M("Comment")
x=z.j(0,"Whitespace")
x.d=x.a.M("Whitespace")
x=z.j(0,"Id")
y=x.a.M("Id")
x.d=y
x=[P.n]
y.aD(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.aD(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.aD(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
hH:{"^":"aP;a,0b,0c,0d",
bP:function(a){switch(a.a){case"Builtin":this.I(a.b,"#411")
break
case"Comment":this.I(a.b,"#777")
break
case"Id":this.I(a.b,"#111")
break
case"Num":this.I(a.b,"#191")
break
case"Preprocess":this.I(a.b,"#737")
break
case"Reserved":this.I(a.b,"#119")
break
case"Symbol":this.I(a.b,"#611")
break
case"Type":this.I(a.b,"#171")
break
case"Whitespace":this.I(a.b,"#111")
break}},
by:function(){var z,y,x,w
z=V.ci()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.r(new H.q("_"))
C.a.h(y.a,x)
x=V.M("a","z")
C.a.h(y.a,x)
x=V.M("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.r(new H.q("_"))
C.a.h(x.a,y)
y=V.M("0","9")
C.a.h(x.a,y)
y=V.M("a","z")
C.a.h(x.a,y)
y=V.M("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Int")
x=V.M("0","9")
C.a.h(y.a,x)
x=z.j(0,"Int").k(0,"Int")
y=V.M("0","9")
C.a.h(x.a,y)
y=z.j(0,"Int").k(0,"FloatDot")
x=V.r(new H.q("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").k(0,"Float")
y=V.M("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").k(0,"Float")
x=V.M("0","9")
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"Sym")
y=V.r(new H.q("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.j(0,"Sym").k(0,"Sym")
x=V.r(new H.q("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"Slash")
y=V.r(new H.q("/"))
C.a.h(x.a,y)
y=z.j(0,"Slash").k(0,"Comment")
x=V.r(new H.q("/"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Slash").k(0,"Sym").a,new V.bj())
x=z.j(0,"Comment").k(0,"EndComment")
y=V.r(new H.q("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").k(0,"Comment")
x=new V.aq()
w=[V.aw]
x.sa5(H.c([],w))
C.a.h(y.a,x)
y=V.r(new H.q("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Preprocess")
x=V.r(new H.q("#"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").k(0,"Preprocess")
y=new V.aq()
y.sa5(H.c([],w))
C.a.h(x.a,y)
x=V.r(new H.q("\n"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").k(0,"EndPreprocess")
y=V.r(new H.q("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Whitespace")
x=V.r(new H.q(" \n\t"))
C.a.h(y.a,x)
x=z.j(0,"Whitespace").k(0,"Whitespace")
y=V.r(new H.q(" \n\t"))
C.a.h(x.a,y)
y=z.j(0,"Int")
y.d=y.a.M("Num")
y=z.j(0,"Float")
y.d=y.a.M("Num")
y=z.j(0,"Sym")
y.d=y.a.M("Symbol")
y=z.j(0,"EndComment")
y.d=y.a.M("Comment")
y=z.j(0,"EndPreprocess")
y.d=y.a.M("Preprocess")
y=z.j(0,"Whitespace")
y.d=y.a.M("Whitespace")
y=z.j(0,"Id")
x=y.a.M("Id")
y.d=x
y=[P.n]
x.aD(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.aD(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.aD(0,"Builtin",H.c(["gl_FragColor","gl_Position"],y))
return z}},
hI:{"^":"aP;a,0b,0c,0d",
bP:function(a){switch(a.a){case"Attr":this.I(a.b,"#911")
this.I("=","#111")
break
case"Id":this.I(a.b,"#111")
break
case"Other":this.I(a.b,"#111")
break
case"Reserved":this.I(a.b,"#119")
break
case"String":this.I(a.b,"#171")
break
case"Symbol":this.I(a.b,"#616")
break}},
by:function(){var z,y,x
z=V.ci()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.r(new H.q("_"))
C.a.h(y.a,x)
x=V.M("a","z")
C.a.h(y.a,x)
x=V.M("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.r(new H.q("_"))
C.a.h(x.a,y)
y=V.M("0","9")
C.a.h(x.a,y)
y=V.M("a","z")
C.a.h(x.a,y)
y=V.M("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Id").k(0,"Attr")
x=V.r(new H.q("="))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").k(0,"Sym")
x=V.r(new H.q("</\\-!>="))
C.a.h(y.a,x)
x=z.j(0,"Sym").k(0,"Sym")
y=V.r(new H.q("</\\-!>="))
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"OpenStr")
x=V.r(new H.q('"'))
C.a.h(y.a,x)
x=z.j(0,"OpenStr").k(0,"CloseStr")
y=V.r(new H.q('"'))
C.a.h(x.a,y)
y=z.j(0,"OpenStr").k(0,"EscStr")
x=V.r(new H.q("\\"))
C.a.h(y.a,x)
x=z.j(0,"EscStr").k(0,"OpenStr")
y=V.r(new H.q('"'))
C.a.h(x.a,y)
C.a.h(z.j(0,"OpenStr").k(0,"OpenStr").a,new V.bj())
C.a.h(z.j(0,"Start").k(0,"Other").a,new V.bj())
y=z.j(0,"Other").k(0,"Other")
x=new V.aq()
x.sa5(H.c([],[V.aw]))
C.a.h(y.a,x)
y=V.r(new H.q('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.M("a","z")
C.a.h(x.a,y)
y=V.M("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Sym")
y.d=y.a.M("Symbol")
y=z.j(0,"CloseStr")
y.d=y.a.M("String")
y=z.j(0,"Id")
x=y.a.M("Id")
y.d=x
x.aD(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.n]))
x=z.j(0,"Attr")
x.d=x.a.M("Attr")
x=z.j(0,"Other")
x.d=x.a.M("Other")
return z}},
iw:{"^":"aP;a,0b,0c,0d",
eq:function(a){H.i(a,"$isb",[P.n],"$asb")
this.sc5(H.c([],[[P.b,W.aS]]))
this.I(C.a.k(a,"\n"),"#111")},
bP:function(a){},
by:function(){return}},
j_:{"^":"a;0a,0b",
f7:function(a,b){var z,y,x,w,v,u,t
z=document
y=z.body
x=z.createElement("div")
x.className="scrollTop";(y&&C.n).C(y,x)
w=z.createElement("div")
w.className="scrollPage"
C.n.C(y,w)
v=z.createElement("div")
v.className="pageCenter"
C.j.C(w,v)
if(a.length!==0){z.title=a
u=z.createElement("div")
u.className="pageTitle"
u.textContent=a
C.j.C(v,u)}t=z.createElement("div")
this.a=t
C.j.C(v,t)
this.b=null
t=W.a0
W.U(z,"scroll",H.j(new V.j2(x),{func:1,ret:-1,args:[t]}),!1,t)},
dJ:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.i(a,"$isb",[P.n],"$asb")
this.hQ()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.ey(C.a.jc(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
switch(u.a){case"Bold":t=z.createElement("div")
t.className="boldPar"
t.textContent=u.b
C.j.C(y,t)
break
case"Italic":t=z.createElement("div")
t.className="italicPar"
t.textContent=u.b
C.j.C(y,t)
break
case"Code":t=z.createElement("div")
t.className="codePar"
t.textContent=u.b
C.j.C(y,t)
break
case"Link":s=u.b
if(H.fV(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.l(r,1)
q.href=H.F(r[1])
q.textContent=H.F(r[0])
C.j.C(y,q)}else{p=P.fC(C.C,s,C.x,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+p
q.textContent=s
C.j.C(y,q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
C.j.C(y,t)
break}}C.j.C(this.a,y)},
eH:function(a){var z,y,x,w
z=new V.hk("dart")
z.bp("dart")
y=new V.hH("glsl")
y.bp("glsl")
x=new V.hI("html")
x.bp("html")
w=C.a.j5(H.c([z,y,x],[V.aP]),new V.j3(a))
if(w!=null)return w
z=new V.iw("plain")
z.bp("plain")
return z},
dI:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.i(a2,"$isb",[P.n],"$asb")
z=H.c([],[P.y])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.dB(w).bW(w,"+")){C.a.W(a2,x,C.i.bn(w,1))
C.a.h(z,1)
y=!0}else if(C.i.bW(w,"-")){C.a.W(a2,x,C.i.bn(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.eH(a0)
v.eq(a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
C.j.C(t,s)
C.j.C(this.a,t)
r=P.fC(C.C,a,C.x,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.dJ(null)
n.href="#"+r
n.textContent=a
C.j.C(o,n)
C.v.C(p,o)
C.m.C(q,p)
C.p.C(s,q)
if(y)for(m=a1,l=m,x=0;k=v.d,x<k.length;++x){w=k[x]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums codeLineLight"
h=u.createElement("td")
h.className="codeLineNums"
if(x>=z.length)return H.l(z,x)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.x)(w),++e)C.v.C(f,w[e])
C.m.C(j,i)
C.m.C(j,h)
C.m.C(j,f)
C.p.C(s,j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.x)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gN(w);b.v();)C.v.C(h,b.gF())
C.m.C(j,i)
C.m.C(j,h)
C.p.C(s,j)}},
hQ:function(){var z,y,x,w
if(this.b!=null)return
z=V.ci()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Bold")
x=V.r(new H.q("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Bold").k(0,"Bold")
x=new V.aq()
w=[V.aw]
x.sa5(H.c([],w))
C.a.h(y.a,x)
y=V.r(new H.q("*"))
C.a.h(x.a,y)
y=z.j(0,"Bold").k(0,"BoldEnd")
x=V.r(new H.q("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").k(0,"Italic")
x=V.r(new H.q("_"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Italic").k(0,"Italic")
x=new V.aq()
x.sa5(H.c([],w))
C.a.h(y.a,x)
y=V.r(new H.q("_"))
C.a.h(x.a,y)
y=z.j(0,"Italic").k(0,"ItalicEnd")
x=V.r(new H.q("_"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").k(0,"Code")
x=V.r(new H.q("`"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Code").k(0,"Code")
x=new V.aq()
x.sa5(H.c([],w))
C.a.h(y.a,x)
y=V.r(new H.q("`"))
C.a.h(x.a,y)
y=z.j(0,"Code").k(0,"CodeEnd")
x=V.r(new H.q("`"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").k(0,"LinkHead")
x=V.r(new H.q("["))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"LinkHead").k(0,"LinkTail")
x=V.r(new H.q("|"))
C.a.h(y.a,x)
x=z.j(0,"LinkHead").k(0,"LinkEnd")
y=V.r(new H.q("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkHead").k(0,"LinkHead")
y=new V.aq()
y.sa5(H.c([],w))
C.a.h(x.a,y)
x=V.r(new H.q("|]"))
C.a.h(y.a,x)
x=z.j(0,"LinkTail").k(0,"LinkEnd")
y=V.r(new H.q("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkTail").k(0,"LinkTail")
y=new V.aq()
y.sa5(H.c([],w))
C.a.h(x.a,y)
x=V.r(new H.q("|]"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Start").k(0,"Other").a,new V.bj())
x=z.j(0,"Other").k(0,"Other")
y=new V.aq()
y.sa5(H.c([],w))
C.a.h(x.a,y)
x=V.r(new H.q("*_`["))
C.a.h(y.a,x)
x=z.j(0,"BoldEnd")
x.d=x.a.M("Bold")
x=z.j(0,"ItalicEnd")
x.d=x.a.M("Italic")
x=z.j(0,"CodeEnd")
x.d=x.a.M("Code")
x=z.j(0,"LinkEnd")
x.d=x.a.M("Link")
x=z.j(0,"Other")
x.d=x.a.M("Other")
this.b=z},
n:{
j0:function(a,b){var z=new V.j_()
z.f7(a,!0)
return z}}},
j2:{"^":"t:11;a",
$1:function(a){P.eV(C.q,new V.j1(this.a))}},
j1:{"^":"t:2;a",
$0:function(){var z,y,x
z=C.k.an(document.documentElement.scrollTop)
y=this.a.style
x=H.f(-0.01*z)+"px"
y.top=x}},
j3:{"^":"t:40;a",
$1:function(a){return H.e(a,"$isaP").a===this.a}}}],["","",,Q,{"^":"",
fR:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
z=V.j0("Test 019",!0)
y=W.cK(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
C.j.C(z.a,y)
x=[P.n]
z.dJ(H.c(["A test of the Material Lighting shader with an alpha texture. ","There are no mapped reflections, this is actually transparent."],x))
z.dJ(H.c(["\xab[Back to Tests|../]"],x))
w=C.z.eJ(document,"testCanvas")
if(w==null)H.p(P.o("Failed to find an element with the identifier, testCanvas."))
v=E.jm(w,!0,!0,!0,!1)
u=E.e5(null,!0,null,"",null,null)
t=F.d2()
F.bE(t,null,null,1,1,1,0,0,1)
F.bE(t,null,null,1,1,0,1,0,3)
F.bE(t,null,null,1,1,0,0,1,2)
F.bE(t,null,null,1,1,-1,0,0,0)
F.bE(t,null,null,1,1,0,-1,0,0)
F.bE(t,null,null,1,1,0,0,-1,3)
t.ay()
u.sbV(0,t)
s=X.cQ(!0,!0,!1,null,2000,null,0)
if(s.b){s.b=!1
x=new D.E("clearColor",!0,!1,s,[P.I])
x.b=!0
r=s.x
if(!(r==null))r.D(x)}x=v.f
r=x.a
q=r.createTexture()
C.b.a7(r,34067,q)
C.b.at(r,34067,10242,10497)
C.b.at(r,34067,10243,10497)
C.b.at(r,34067,10241,9729)
C.b.at(r,34067,10240,9729)
C.b.a7(r,34067,null)
p=new T.eQ()
p.a=0
p.b=q
p.c=!1
p.d=0
x.aM(p,q,"../resources/maskonaive/posx.jpg",34069,!1,!1)
x.aM(p,q,"../resources/maskonaive/negx.jpg",34070,!1,!1)
x.aM(p,q,"../resources/maskonaive/posy.jpg",34071,!1,!1)
x.aM(p,q,"../resources/maskonaive/negy.jpg",34072,!1,!1)
x.aM(p,q,"../resources/maskonaive/posz.jpg",34073,!1,!1)
x.aM(p,q,"../resources/maskonaive/negz.jpg",34074,!1,!1)
o=v.f.jg("../resources/AlphaWeave.png")
n=new O.ib()
n.sfw(O.cN(V.ao))
n.e.b_(n.gh6(),n.gh7())
x=new O.b2(n,"emission")
x.c=C.c
x.f=new V.a_(0,0,0)
n.f=x
x=new O.b2(n,"ambient")
x.c=C.c
x.f=new V.a_(0,0,0)
n.r=x
x=new O.b2(n,"diffuse")
x.c=C.c
x.f=new V.a_(0,0,0)
n.x=x
x=new O.b2(n,"invDiffuse")
x.c=C.c
x.f=new V.a_(0,0,0)
n.y=x
x=new O.ii(n,"specular")
x.c=C.c
x.f=new V.a_(0,0,0)
x.ch=100
n.z=x
x=new O.ie(n,"bump")
x.c=C.c
n.Q=x
n.ch=null
x=new O.b2(n,"reflect")
x.c=C.c
x.f=new V.a_(0,0,0)
n.cx=x
x=new O.ih(n,"refract")
x.c=C.c
x.f=new V.a_(0,0,0)
x.ch=1
n.cy=x
x=new O.id(n,"alpha")
x.c=C.c
x.f=1
n.db=x
x=new D.hY()
x.bq(D.X)
x.sfI(H.c([],[D.c2]))
x.shw(H.c([],[D.ew]))
x.shU(H.c([],[D.eJ]))
x.si4(H.c([],[D.eR]))
x.si5(H.c([],[D.eS]))
x.si6(H.c([],[D.eT]))
x.Q=null
x.ch=null
x.cZ(x.gh5(),x.gho(),x.ghq())
n.dx=x
r=x.Q
if(r==null){r=D.C()
x.Q=r
x=r}else x=r
x.h(0,n.ghE())
x=n.dx
r=x.ch
if(r==null){r=D.C()
x.ch=r
x=r}else x=r
x.h(0,n.gaN())
n.dy=null
x=n.dx
m=V.ff()
r=U.dU(V.eo(V.ey(),m,new V.L(1,-2,-3)))
l=new V.a_(1,1,1)
k=new D.c2()
k.c=new V.a_(1,1,1)
k.a=V.jM()
j=k.b
k.b=r
r.gp().h(0,k.gfe())
r=new D.E("mover",j,k.b,k,[U.a6])
r.b=!0
k.aH(r)
if(!k.c.u(0,l)){j=k.c
k.c=l
r=new D.E("color",j,l,k,[V.a_])
r.b=!0
k.aH(r)}x.h(0,k)
x=n.r
x.saz(0,new V.a_(0.5,0.5,0.5))
x=n.x
x.saz(0,new V.a_(0.6,0.6,0.6))
n.r.scP(o)
n.x.scP(o)
n.db.scP(o)
i=new U.e7()
i.bq(U.a6)
i.b_(i.gh4(),i.ghp())
i.e=null
i.f=V.b3()
i.r=0
x=v.r
r=new U.jI()
k=U.cO()
k.scT(0,!0)
k.scI(6.283185307179586)
k.scK(0)
k.sa9(0,0)
k.scJ(100)
k.sR(0)
k.sct(0.5)
r.b=k
h=r.gaI()
k.gp().h(0,h)
k=U.cO()
k.scT(0,!0)
k.scI(6.283185307179586)
k.scK(0)
k.sa9(0,0)
k.scJ(100)
k.sR(0)
k.sct(0.5)
r.c=k
k.gp().h(0,h)
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
g=new X.ay(!1,!1,!1)
j=r.d
r.d=g
k=[X.ay]
h=new D.E("modifiers",j,g,r,k)
h.b=!0
r.P(h)
h=r.f
if(h!==!1){r.f=!1
h=new D.E("invertX",h,!1,r,[P.I])
h.b=!0
r.P(h)}h=r.r
if(h!==!1){r.r=!1
h=new D.E("invertY",h,!1,r,[P.I])
h.b=!0
r.P(h)}r.b7(x)
i.h(0,r)
x=v.r
r=new U.jH()
h=U.cO()
h.scT(0,!0)
h.scI(6.283185307179586)
h.scK(0)
h.sa9(0,0)
h.scJ(100)
h.sR(0)
h.sct(0.2)
r.b=h
h.gp().h(0,r.gaI())
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
g=new X.ay(!0,!1,!1)
j=r.c
r.c=g
h=new D.E("modifiers",j,g,r,k)
h.b=!0
r.P(h)
r.b7(x)
i.h(0,r)
x=v.r
r=new U.jJ()
r.c=0.01
r.d=0
r.e=0
g=new X.ay(!1,!1,!1)
r.b=g
k=new D.E("modifiers",null,g,r,k)
k.b=!0
r.P(k)
r.b7(x)
i.h(0,r)
i.h(0,U.dU(V.ax(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
f=X.eu(2000,1.0471975511965976,i,0.1,null)
e=new M.hh()
e.sb8(null)
e.sbf(0,null)
e.sbg(null)
x=E.e5(null,!0,null,"",null,null)
t=F.d2()
r=t.a
k=new V.L(-1,-1,1)
k=k.w(0,Math.sqrt(k.E(k)))
d=r.bw(new V.bv(1,2,4,6),new V.aQ(1,0,0,1),new V.af(-1,-1,0),new V.a3(0,1),k,null)
r=t.a
k=new V.L(1,-1,1)
k=k.w(0,Math.sqrt(k.E(k)))
c=r.bw(new V.bv(0,3,4,6),new V.aQ(0,0,1,1),new V.af(1,-1,0),new V.a3(1,1),k,null)
r=t.a
k=new V.L(1,1,1)
k=k.w(0,Math.sqrt(k.E(k)))
b=r.bw(new V.bv(0,2,5,6),new V.aQ(0,1,0,1),new V.af(1,1,0),new V.a3(1,0),k,null)
r=t.a
k=V.aG()
h=new V.L(-1,1,1)
h=h.w(0,Math.sqrt(h.E(h)))
a=r.bw(new V.bv(0,2,4,7),new V.aQ(1,1,0,1),new V.af(-1,1,0),k,h,null)
t.d.iy(H.c([d,c,b,a],[F.aD]))
t.ay()
x.sbV(0,t)
e.d=x
e.e=null
x=new O.j4()
x.b=1.0471975511965976
x.d=new V.a_(1,1,1)
j=x.c
x.c=p
p.gp().h(0,x.gaN())
r=new D.E("boxTexture",j,x.c,x,[T.eQ])
r.b=!0
x.X(r)
e.sbg(x)
e.sbf(0,s)
e.sb8(f)
a0=new M.hx()
a0.sfC(0,O.cN(E.am))
a0.d.b_(a0.gh9(),a0.gha())
a0.e=null
a0.f=null
a0.r=null
a0.x=null
a0.sb8(null)
a0.sbf(0,null)
a0.sbg(null)
a0.sb8(f)
a0.sbg(n)
a0.sbf(0,s)
a0.d.h(0,u)
x=M.aB
r=H.c([e,a0],[x])
k=new M.hf()
k.bq(x)
k.e=!1
k.f=null
k.b_(k.ghr(),k.ghs())
k.a6(0,r)
x=v.d
if(x!==k){if(x!=null)x.gp().T(0,v.gd5())
v.d=k
k.gp().h(0,v.gd5())
v.fa()}x=v.z
if(x==null){x=D.C()
v.z=x}r={func:1,ret:-1,args:[D.u]}
k=H.j(new Q.ll(z,n),r)
if(x.b==null)x.sb4(H.c([],[r]))
x=x.b;(x&&C.a).h(x,k)
V.ls(v)},
ll:{"^":"t:7;a,b",
$1:function(a){var z,y,x,w
H.e(a,"$isu")
z=this.a
y=this.b
x=y.a
w=[P.n]
z.dI("Vertex Shader","glsl",0,H.c((x==null?null:x.c).split("\n"),w))
y=y.a
z.dI("Fragment Shader","glsl",0,H.c((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.O=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ec.prototype
return J.eb.prototype}if(typeof a=="string")return J.c9.prototype
if(a==null)return J.ed.prototype
if(typeof a=="boolean")return J.hT.prototype
if(a.constructor==Array)return J.b0.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.cv(a)}
J.cu=function(a){if(typeof a=="string")return J.c9.prototype
if(a==null)return a
if(a.constructor==Array)return J.b0.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.cv(a)}
J.dA=function(a){if(a==null)return a
if(a.constructor==Array)return J.b0.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.cv(a)}
J.l7=function(a){if(typeof a=="number")return J.c8.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.ck.prototype
return a}
J.dB=function(a){if(typeof a=="string")return J.c9.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.ck.prototype
return a}
J.a5=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.cv(a)}
J.V=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.O(a).u(a,b)}
J.fX=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.l7(a).ap(a,b)}
J.fY=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.li(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cu(a).l(a,b)}
J.fZ=function(a,b,c,d){return J.a5(a).fs(a,b,c,d)}
J.bX=function(a,b){return J.a5(a).hA(a,b)}
J.dH=function(a,b){return J.a5(a).C(a,b)}
J.cB=function(a,b,c){return J.cu(a).iN(a,b,c)}
J.cC=function(a,b){return J.dA(a).a8(a,b)}
J.h_=function(a){return J.a5(a).giE(a)}
J.aY=function(a){return J.O(a).gZ(a)}
J.bi=function(a){return J.dA(a).gN(a)}
J.aZ=function(a){return J.cu(a).gq(a)}
J.h0=function(a){return J.a5(a).gjw(a)}
J.h1=function(a){return J.a5(a).gjG(a)}
J.cD=function(a,b){return J.a5(a).aZ(a,b)}
J.dI=function(a){return J.dA(a).jy(a)}
J.h2=function(a,b,c){return J.dB(a).bo(a,b,c)}
J.h3=function(a){return J.dB(a).jN(a)}
J.a7=function(a){return J.O(a).i(a)}
I.aX=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.n=W.bY.prototype
C.o=W.cJ.prototype
C.y=W.cL.prototype
C.j=W.aS.prototype
C.J=W.hp.prototype
C.L=W.hJ.prototype
C.z=W.hL.prototype
C.N=J.G.prototype
C.a=J.b0.prototype
C.O=J.eb.prototype
C.h=J.ec.prototype
C.r=J.ed.prototype
C.k=J.c8.prototype
C.i=J.c9.prototype
C.V=J.bR.prototype
C.Z=W.ip.prototype
C.D=J.iv.prototype
C.E=W.iH.prototype
C.b=P.d1.prototype
C.v=W.jd.prototype
C.p=W.je.prototype
C.m=W.jf.prototype
C.w=J.ck.prototype
C.F=W.bC.prototype
C.G=W.jW.prototype
C.H=new P.it()
C.I=new P.jL()
C.l=new P.ks()
C.c=new A.c0(0,"ColorSourceType.None")
C.f=new A.c0(1,"ColorSourceType.Solid")
C.d=new A.c0(2,"ColorSourceType.Texture2D")
C.e=new A.c0(3,"ColorSourceType.TextureCube")
C.q=new P.bl(0)
C.K=new P.bl(5e6)
C.M=new P.hN("element",!0,!1,!1,!1)
C.P=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.Q=function(hooks) {
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
C.A=function(hooks) { return hooks; }

C.R=function(getTagFallback) {
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
C.S=function() {
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
C.T=function(hooks) {
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
C.U=function(hooks) {
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
C.B=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.W=H.c(I.aX(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.n])
C.X=H.c(I.aX(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.n])
C.Y=H.c(I.aX([]),[P.n])
C.C=H.c(I.aX([0,0,65498,45055,65535,34815,65534,18431]),[P.y])
C.t=H.c(I.aX(["bind","if","ref","repeat","syntax"]),[P.n])
C.u=H.c(I.aX(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.n])
C.x=new P.jK(!1)
$.au=0
$.bk=null
$.dM=null
$.dr=!1
$.fP=null
$.fK=null
$.fU=null
$.ct=null
$.cx=null
$.dC=null
$.bb=null
$.bH=null
$.bI=null
$.ds=!1
$.N=C.l
$.aF=null
$.cP=null
$.e4=null
$.e3=null
$.e_=null
$.dZ=null
$.dY=null
$.dX=null
$.m=V.ij()
$.ep=null
$.ex=null
$.bu=null
$.eE=null
$.fb=null
$.fe=null
$.fd=null
$.cl=null
$.fc=null
$.j6="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.j5="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
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
I.$lazy(y,x,w)}})(["dW","$get$dW",function(){return H.fO("_$dart_dartClosure")},"cT","$get$cT",function(){return H.fO("_$dart_js")},"eZ","$get$eZ",function(){return H.aC(H.cj({
toString:function(){return"$receiver$"}}))},"f_","$get$f_",function(){return H.aC(H.cj({$method$:null,
toString:function(){return"$receiver$"}}))},"f0","$get$f0",function(){return H.aC(H.cj(null))},"f1","$get$f1",function(){return H.aC(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"f5","$get$f5",function(){return H.aC(H.cj(void 0))},"f6","$get$f6",function(){return H.aC(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"f3","$get$f3",function(){return H.aC(H.f4(null))},"f2","$get$f2",function(){return H.aC(function(){try{null.$method$}catch(z){return z.message}}())},"f8","$get$f8",function(){return H.aC(H.f4(void 0))},"f7","$get$f7",function(){return H.aC(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dn","$get$dn",function(){return P.jX()},"bJ","$get$bJ",function(){return[]},"fB","$get$fB",function(){return P.iL("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dV","$get$dV",function(){return{}},"fq","$get$fq",function(){return P.eh(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.n)},"dp","$get$dp",function(){return P.i1(P.n,P.bN)},"fi","$get$fi",function(){return Z.ah(0)},"fg","$get$fg",function(){return Z.ah(511)},"at","$get$at",function(){return Z.ah(1)},"aL","$get$aL",function(){return Z.ah(2)},"aK","$get$aK",function(){return Z.ah(4)},"aM","$get$aM",function(){return Z.ah(8)},"aN","$get$aN",function(){return Z.ah(16)},"bA","$get$bA",function(){return Z.ah(32)},"bB","$get$bB",function(){return Z.ah(64)},"fh","$get$fh",function(){return Z.ah(96)},"b9","$get$b9",function(){return Z.ah(128)},"aJ","$get$aJ",function(){return Z.ah(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.u]},{func:1,ret:-1,args:[D.u]},{func:1,ret:P.J},{func:1,ret:-1},{func:1,ret:-1,args:[W.ap]},{func:1,ret:P.J,args:[F.a1]},{func:1,ret:-1,args:[P.y,[P.k,E.am]]},{func:1,ret:P.J,args:[D.u]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.a0]},{func:1,ret:-1,args:[W.b7]},{func:1,ret:P.J,args:[W.a0]},{func:1,ret:P.I,args:[P.n]},{func:1,ret:P.I,args:[W.aA]},{func:1,args:[,]},{func:1,ret:P.J,args:[{func:1,ret:-1,args:[D.u]}]},{func:1,ret:P.J,args:[,]},{func:1,ret:-1,args:[W.bq]},{func:1,ret:P.J,args:[,,]},{func:1,ret:-1,args:[P.y,[P.k,D.X]]},{func:1,ret:P.w},{func:1,ret:-1,args:[P.y,[P.k,U.a6]]},{func:1,ret:P.n,args:[P.y]},{func:1,ret:-1,args:[P.y,[P.k,M.aB]]},{func:1,ret:-1,args:[P.y,[P.k,V.ao]]},{func:1,ret:P.I,args:[W.A]},{func:1,ret:P.I,args:[W.P,P.n,P.n,W.bV]},{func:1,ret:P.n,args:[P.n]},{func:1,ret:-1,args:[W.A,W.A]},{func:1,ret:W.P,args:[W.A]},{func:1,ret:P.J,args:[{func:1,ret:-1}]},{func:1,args:[,P.n]},{func:1,args:[P.n]},{func:1,ret:P.J,args:[,],opt:[,]},{func:1,ret:[P.aO,,],args:[,]},{func:1,ret:-1,args:[W.bC]},{func:1,ret:P.I,args:[P.w,P.w]},{func:1,ret:P.J,args:[F.aD,P.w,P.w]},{func:1,ret:P.I,args:[[P.k,D.X]]},{func:1,ret:P.J,args:[P.b6]},{func:1,ret:P.I,args:[V.aP]},{func:1,args:[W.a0]},{func:1,ret:P.J,args:[P.ab]}]
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
if(x==y)H.lv(d||a)
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
Isolate.aX=a.aX
Isolate.dy=a.dy
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
if(typeof dartMainRunner==="function")dartMainRunner(Q.fR,[])
else Q.fR([])})})()
//# sourceMappingURL=test.dart.js.map
