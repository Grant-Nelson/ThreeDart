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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isF)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.dt"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dt"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.dt(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.du=function(){}
var dart=[["","",,H,{"^":"",lO:{"^":"a;a"}}],["","",,J,{"^":"",
dz:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ct:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dy==null){H.lk()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.h(P.f5("Return interceptor for "+H.f(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cQ()]
if(v!=null)return v
v=H.lp(a)
if(v!=null)return v
if(typeof a=="function")return C.V
y=Object.getPrototypeOf(a)
if(y==null)return C.D
if(y===Object.prototype)return C.D
if(typeof w=="function"){Object.defineProperty(w,$.$get$cQ(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
F:{"^":"a;",
w:function(a,b){return a===b},
gZ:function(a){return H.bt(a)},
i:["eU",function(a){return"Instance of '"+H.b5(a)+"'"}],
"%":"DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo|WebGLRenderbuffer"},
hT:{"^":"F;",
i:function(a){return String(a)},
gZ:function(a){return a?519018:218159},
$isI:1},
e9:{"^":"F;",
w:function(a,b){return null==b},
i:function(a){return"null"},
gZ:function(a){return 0},
$isJ:1},
cR:{"^":"F;",
gZ:function(a){return 0},
i:["eW",function(a){return String(a)}]},
iw:{"^":"cR;"},
bV:{"^":"cR;"},
bQ:{"^":"cR;",
i:function(a){var z=a[$.$get$dT()]
if(z==null)return this.eW(a)
return"JavaScript function for "+H.f(J.au(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbL:1},
b0:{"^":"F;$ti",
h:function(a,b){H.z(b,H.u(a,0))
if(!!a.fixed$length)H.r(P.a7("add"))
a.push(b)},
jB:function(a,b){var z
if(!!a.fixed$length)H.r(P.a7("removeAt"))
z=a.length
if(b>=z)throw H.h(P.bU(b,null,null))
return a.splice(b,1)[0]},
M:function(a,b){var z
if(!!a.fixed$length)H.r(P.a7("remove"))
for(z=0;z<a.length;++z)if(J.P(a[z],b)){a.splice(z,1)
return!0}return!1},
a5:function(a,b){var z,y
H.i(b,"$isl",[H.u(a,0)],"$asl")
if(!!a.fixed$length)H.r(P.a7("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.x)(b),++y)a.push(b[y])},
a2:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.u(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.h(P.aS(a))}},
k:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.X(z,y,H.f(a[y]))
return z.join(b)},
je:function(a){return this.k(a,"")},
j8:function(a,b,c){var z,y,x
H.k(b,{func:1,ret:P.I,args:[H.u(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.h(P.aS(a))}throw H.h(H.c9())},
j7:function(a,b){return this.j8(a,b,null)},
a6:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
eT:function(a,b,c){var z=a.length
if(b>z)throw H.h(P.a9(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.h(P.a9(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.u(a,0)])
return H.c(a.slice(b,c),[H.u(a,0)])},
gj6:function(a){if(a.length>0)return a[0]
throw H.h(H.c9())},
gbN:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.h(H.c9())},
dK:function(a,b){var z,y
H.k(b,{func:1,ret:P.I,args:[H.u(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.h(P.aS(a))}return!1},
V:function(a,b){var z
for(z=0;z<a.length;++z)if(J.P(a[z],b))return!0
return!1},
i:function(a){return P.cP(a,"[","]")},
gN:function(a){return new J.al(a,a.length,0,[H.u(a,0)])},
gZ:function(a){return H.bt(a)},
gp:function(a){return a.length},
sp:function(a,b){if(!!a.fixed$length)H.r(P.a7("set length"))
if(b<0)throw H.h(P.a9(b,0,null,"newLength",null))
a.length=b},
X:function(a,b,c){H.z(c,H.u(a,0))
if(!!a.immutable$list)H.r(P.a7("indexed set"))
if(b>=a.length||b<0)throw H.h(H.bI(a,b))
a[b]=c},
$isl:1,
$isb:1,
n:{
hS:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.cC(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.a9(a,0,4294967295,"length",null))
return J.e6(new Array(a),b)},
e6:function(a,b){return J.ca(H.c(a,[b]))},
ca:function(a){H.cw(a)
a.fixed$length=Array
return a}}},
lN:{"^":"b0;$ti"},
al:{"^":"a;a,b,c,0d,$ti",
sdl:function(a){this.d=H.z(a,H.u(this,0))},
gG:function(){return this.d},
A:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.h(H.x(z))
x=this.c
if(x>=y){this.sdl(null)
return!1}this.sdl(z[x]);++this.c
return!0},
$isaU:1},
bO:{"^":"F;",
jO:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.h(P.a7(""+a+".toInt()"))},
cH:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.h(P.a7(""+a+".floor()"))},
al:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.a7(""+a+".round()"))},
eu:function(a,b){var z,y
if(b>20)throw H.h(P.a9(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gZ:function(a){return a&0x1FFFFFFF},
u:function(a,b){if(typeof b!=="number")throw H.h(H.aP(b))
return a*b},
eL:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
f_:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dD(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.dD(a,b)},
dD:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.h(P.a7("Result of truncating division is "+H.f(z)+": "+H.f(a)+" ~/ "+b))},
bs:function(a,b){var z
if(a>0)z=this.hT(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
hT:function(a,b){return b>31?0:a>>>b},
an:function(a,b){if(typeof b!=="number")throw H.h(H.aP(b))
return a<b},
$isw:1,
$isab:1},
e8:{"^":"bO;",$isy:1},
e7:{"^":"bO;"},
bP:{"^":"F;",
cv:function(a,b){if(b<0)throw H.h(H.bI(a,b))
if(b>=a.length)H.r(H.bI(a,b))
return a.charCodeAt(b)},
aH:function(a,b){if(b>=a.length)throw H.h(H.bI(a,b))
return a.charCodeAt(b)},
L:function(a,b){H.E(b)
if(typeof b!=="string")throw H.h(P.cC(b,null,null))
return a+b},
eS:function(a,b,c){var z
if(c>a.length)throw H.h(P.a9(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
bX:function(a,b){return this.eS(a,b,0)},
bm:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.bU(b,null,null))
if(b>c)throw H.h(P.bU(b,null,null))
if(c>a.length)throw H.h(P.bU(c,null,null))
return a.substring(b,c)},
bl:function(a,b){return this.bm(a,b,null)},
jR:function(a){return a.toLowerCase()},
u:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.H)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
jp:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.u(c,z)+a},
aA:function(a,b){return this.jp(a,b," ")},
iO:function(a,b,c){if(c>a.length)throw H.h(P.a9(c,0,a.length,null,null))
return H.fU(a,b,c)},
i:function(a){return a},
gZ:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gp:function(a){return a.length},
$isep:1,
$isn:1}}],["","",,H,{"^":"",
c9:function(){return new P.d0("No element")},
hR:function(){return new P.d0("Too many elements")},
o:{"^":"jF;a",
gp:function(a){return this.a.length},
l:function(a,b){return C.i.cv(this.a,b)},
$asf6:function(){return[P.y]},
$asU:function(){return[P.y]},
$asl:function(){return[P.y]},
$asb:function(){return[P.y]}},
e_:{"^":"l;"},
cc:{"^":"e_;$ti",
gN:function(a){return new H.cT(this,this.gp(this),0,[H.a_(this,"cc",0)])},
cV:function(a,b){return this.eV(0,H.k(b,{func:1,ret:P.I,args:[H.a_(this,"cc",0)]}))}},
cT:{"^":"a;a,b,c,0d,$ti",
sb0:function(a){this.d=H.z(a,H.u(this,0))},
gG:function(){return this.d},
A:function(){var z,y,x,w
z=this.a
y=J.cs(z)
x=y.gp(z)
if(this.b!==x)throw H.h(P.aS(z))
w=this.c
if(w>=x){this.sb0(null)
return!1}this.sb0(y.a6(z,w));++this.c
return!0},
$isaU:1},
i8:{"^":"l;a,b,$ti",
gN:function(a){return new H.i9(J.bi(this.a),this.b,this.$ti)},
gp:function(a){return J.aZ(this.a)},
a6:function(a,b){return this.b.$1(J.cA(this.a,b))},
$asl:function(a,b){return[b]}},
i9:{"^":"aU;0a,b,c,$ti",
sb0:function(a){this.a=H.z(a,H.u(this,1))},
A:function(){var z=this.b
if(z.A()){this.sb0(this.c.$1(z.gG()))
return!0}this.sb0(null)
return!1},
gG:function(){return this.a},
$asaU:function(a,b){return[b]}},
ia:{"^":"cc;a,b,$ti",
gp:function(a){return J.aZ(this.a)},
a6:function(a,b){return this.b.$1(J.cA(this.a,b))},
$ascc:function(a,b){return[b]},
$asl:function(a,b){return[b]}},
di:{"^":"l;a,b,$ti",
gN:function(a){return new H.jY(J.bi(this.a),this.b,this.$ti)}},
jY:{"^":"aU;a,b,$ti",
A:function(){var z,y
for(z=this.a,y=this.b;z.A();)if(y.$1(z.gG()))return!0
return!1},
gG:function(){return this.a.gG()}},
c6:{"^":"a;$ti"},
f6:{"^":"a;$ti"},
jF:{"^":"cb+f6;"}}],["","",,H,{"^":"",
bh:function(a){var z,y
z=H.E(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
ld:function(a){return init.types[H.a0(a)]},
ln:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.O(a).$isao},
f:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.au(a)
if(typeof z!=="string")throw H.h(H.aP(a))
return z},
bt:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b5:function(a){return H.iy(a)+H.dq(H.aW(a),0,null)},
iy:function(a){var z,y,x,w,v,u,t,s,r
z=J.O(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.N||!!z.$isbV){u=C.B(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.bh(w.length>1&&C.i.aH(w,0)===36?C.i.bl(w,1):w)},
ev:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iG:function(a){var z,y,x,w
z=H.c([],[P.y])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.x)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.h(H.aP(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.bs(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.h(H.aP(w))}return H.ev(z)},
ew:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.h(H.aP(x))
if(x<0)throw H.h(H.aP(x))
if(x>65535)return H.iG(a)}return H.ev(a)},
cY:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.bs(z,10))>>>0,56320|z&1023)}throw H.h(P.a9(a,0,1114111,null,null))},
b4:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iF:function(a){var z=H.b4(a).getFullYear()+0
return z},
iD:function(a){var z=H.b4(a).getMonth()+1
return z},
iz:function(a){var z=H.b4(a).getDate()+0
return z},
iA:function(a){var z=H.b4(a).getHours()+0
return z},
iC:function(a){var z=H.b4(a).getMinutes()+0
return z},
iE:function(a){var z=H.b4(a).getSeconds()+0
return z},
iB:function(a){var z=H.b4(a).getMilliseconds()+0
return z},
B:function(a){throw H.h(H.aP(a))},
j:function(a,b){if(a==null)J.aZ(a)
throw H.h(H.bI(a,b))},
bI:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aE(!0,b,"index",null)
z=H.a0(J.aZ(a))
if(!(b<0)){if(typeof z!=="number")return H.B(z)
y=b>=z}else y=!0
if(y)return P.b_(b,a,"index",null,z)
return P.bU(b,"index",null)},
l8:function(a,b,c){if(a>c)return new P.cg(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cg(a,c,!0,b,"end","Invalid value")
return new P.aE(!0,b,"end",null)},
aP:function(a){return new P.aE(!0,a,null,null)},
l1:function(a){if(typeof a!=="number")throw H.h(H.aP(a))
return a},
h:function(a){var z
if(a==null)a=new P.eo()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fV})
z.name=""}else z.toString=H.fV
return z},
fV:function(){return J.au(this.dartException)},
r:function(a){throw H.h(a)},
x:function(a){throw H.h(P.aS(a))},
ac:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lD(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.bs(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cS(H.f(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.en(H.f(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eV()
u=$.$get$eW()
t=$.$get$eX()
s=$.$get$eY()
r=$.$get$f1()
q=$.$get$f2()
p=$.$get$f_()
$.$get$eZ()
o=$.$get$f4()
n=$.$get$f3()
m=v.ae(y)
if(m!=null)return z.$1(H.cS(H.E(y),m))
else{m=u.ae(y)
if(m!=null){m.method="call"
return z.$1(H.cS(H.E(y),m))}else{m=t.ae(y)
if(m==null){m=s.ae(y)
if(m==null){m=r.ae(y)
if(m==null){m=q.ae(y)
if(m==null){m=p.ae(y)
if(m==null){m=s.ae(y)
if(m==null){m=o.ae(y)
if(m==null){m=n.ae(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.en(H.E(y),m))}}return z.$1(new H.jE(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eH()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aE(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eH()
return a},
bf:function(a){var z
if(a==null)return new H.fw(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fw(a)},
la:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.X(0,a[y],a[x])}return b},
lm:function(a,b,c,d,e,f){H.e(a,"$isbL")
switch(H.a0(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.p("Unsupported number of arguments for wrapped closure"))},
bd:function(a,b){var z
H.a0(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lm)
a.$identity=z
return z},
hc:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.O(d).$isb){z.$reflectionInfo=d
x=H.iL(z).r}else x=d
w=e?Object.create(new H.j9().constructor.prototype):Object.create(new H.cE(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.av
if(typeof u!=="number")return u.L()
$.av=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.dP(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.ld,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.dK:H.cF
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.h("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.dP(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w["call*"]=q
w.$R=z.$R
w.$D=z.$D
return v},
h9:function(a,b,c,d){var z=H.cF
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dP:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hb(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.h9(y,!w,z,b)
if(y===0){w=$.av
if(typeof w!=="number")return w.L()
$.av=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bk
if(v==null){v=H.c_("self")
$.bk=v}return new Function(w+H.f(v)+";return "+u+"."+H.f(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.av
if(typeof w!=="number")return w.L()
$.av=w+1
t+=w
w="return function("+t+"){return this."
v=$.bk
if(v==null){v=H.c_("self")
$.bk=v}return new Function(w+H.f(v)+"."+H.f(z)+"("+t+");}")()},
ha:function(a,b,c,d){var z,y
z=H.cF
y=H.dK
switch(b?-1:a){case 0:throw H.h(H.iT("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hb:function(a,b){var z,y,x,w,v,u,t,s
z=$.bk
if(z==null){z=H.c_("self")
$.bk=z}y=$.dJ
if(y==null){y=H.c_("receiver")
$.dJ=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.ha(w,!u,x,b)
if(w===1){z="return function(){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+");"
y=$.av
if(typeof y!=="number")return y.L()
$.av=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+", "+s+");"
y=$.av
if(typeof y!=="number")return y.L()
$.av=y+1
return new Function(z+y+"}")()},
dt:function(a,b,c,d,e,f,g){return H.hc(a,b,H.a0(c),d,!!e,!!f,g)},
E:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.ar(a,"String"))},
mf:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.ar(a,"double"))},
lt:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.ar(a,"num"))},
dr:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.ar(a,"bool"))},
a0:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.ar(a,"int"))},
fS:function(a,b){throw H.h(H.ar(a,H.bh(H.E(b).substring(3))))},
lv:function(a,b){throw H.h(H.h8(a,H.bh(H.E(b).substring(3))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.O(a)[b])return a
H.fS(a,b)},
d:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.O(a)[b]
else z=!0
if(z)return a
H.lv(a,b)},
cw:function(a){if(a==null)return a
if(!!J.O(a).$isb)return a
throw H.h(H.ar(a,"List<dynamic>"))},
lo:function(a,b){var z
if(a==null)return a
z=J.O(a)
if(!!z.$isb)return a
if(z[b])return a
H.fS(a,b)},
fM:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.a0(z)]
else return a.$S()}return},
bX:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fM(J.O(a))
if(z==null)return!1
return H.fD(z,null,b,null)},
k:function(a,b){var z,y
if(a==null)return a
if($.dm)return a
$.dm=!0
try{if(H.bX(a,b))return a
z=H.cy(b)
y=H.ar(a,z)
throw H.h(y)}finally{$.dm=!1}},
dv:function(a,b){if(a!=null&&!H.ds(a,b))H.r(H.ar(a,H.cy(b)))
return a},
fH:function(a){var z,y
z=J.O(a)
if(!!z.$ist){y=H.fM(z)
if(y!=null)return H.cy(y)
return"Closure"}return H.b5(a)},
lA:function(a){throw H.h(new P.hi(H.E(a)))},
fN:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
aW:function(a){if(a==null)return
return a.$ti},
mg:function(a,b,c){return H.bg(a["$as"+H.f(c)],H.aW(b))},
cu:function(a,b,c,d){var z
H.E(c)
H.a0(d)
z=H.bg(a["$as"+H.f(c)],H.aW(b))
return z==null?null:z[d]},
a_:function(a,b,c){var z
H.E(b)
H.a0(c)
z=H.bg(a["$as"+H.f(b)],H.aW(a))
return z==null?null:z[c]},
u:function(a,b){var z
H.a0(b)
z=H.aW(a)
return z==null?null:z[b]},
cy:function(a){return H.aV(a,null)},
aV:function(a,b){var z,y
H.i(b,"$isb",[P.n],"$asb")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bh(a[0].builtin$cls)+H.dq(a,1,b)
if(typeof a=="function")return H.bh(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a0(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.j(b,y)
return H.f(b[y])}if('func' in a)return H.kS(a,b)
if('futureOr' in a)return"FutureOr<"+H.aV("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kS:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
if(r<0)return H.j(b,r)
t=C.i.L(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aV(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aV(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aV(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aV(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.l9(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.E(z[l])
n=n+m+H.aV(i[h],b)+(" "+H.f(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dq:function(a,b,c){var z,y,x,w,v,u
H.i(c,"$isb",[P.n],"$asb")
if(a==null)return""
z=new P.bu("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aV(u,c)}return"<"+z.i(0)+">"},
bg:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bH:function(a,b,c,d){var z,y
H.E(b)
H.cw(c)
H.E(d)
if(a==null)return!1
z=H.aW(a)
y=J.O(a)
if(y[b]==null)return!1
return H.fK(H.bg(y[d],z),null,c,null)},
i:function(a,b,c,d){H.E(b)
H.cw(c)
H.E(d)
if(a==null)return a
if(H.bH(a,b,c,d))return a
throw H.h(H.ar(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bh(b.substring(3))+H.dq(c,0,null),init.mangledGlobalNames)))},
fK:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ak(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ak(a[y],b,c[y],d))return!1
return!0},
md:function(a,b,c){return a.apply(b,H.bg(J.O(b)["$as"+H.f(c)],H.aW(b)))},
fP:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="J"||a===-1||a===-2||H.fP(z)}return!1},
ds:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="a"||b.builtin$cls==="J"||b===-1||b===-2||H.fP(b)
if(b==null||b===-1||b.builtin$cls==="a"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.ds(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bX(a,b)}z=J.O(a).constructor
y=H.aW(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.ak(z,null,b,null)},
z:function(a,b){if(a!=null&&!H.ds(a,b))throw H.h(H.ar(a,H.cy(b)))
return a},
ak:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ak(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="J")return!0
if('func' in c)return H.fD(a,b,c,d)
if('func' in a)return c.builtin$cls==="bL"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ak("type" in a?a.type:null,b,x,d)
else if(H.ak(a,b,x,d))return!0
else{if(!('$is'+"bo" in y.prototype))return!1
w=y.prototype["$as"+"bo"]
v=H.bg(w,z?a.slice(1):null)
return H.ak(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fK(H.bg(r,z),b,u,d)},
fD:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.ls(m,b,l,d)},
ls:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ak(c[w],d,a[w],b))return!1}return!0},
me:function(a,b,c){Object.defineProperty(a,H.E(b),{value:c,enumerable:false,writable:true,configurable:true})},
lp:function(a){var z,y,x,w,v,u
z=H.E($.fO.$1(a))
y=$.cr[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cv[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.E($.fJ.$2(a,z))
if(z!=null){y=$.cr[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cv[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cx(x)
$.cr[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cv[z]=x
return x}if(v==="-"){u=H.cx(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fR(a,x)
if(v==="*")throw H.h(P.f5(z))
if(init.leafTags[z]===true){u=H.cx(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fR(a,x)},
fR:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dz(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cx:function(a){return J.dz(a,!1,null,!!a.$isao)},
lr:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cx(z)
else return J.dz(z,c,null,null)},
lk:function(){if(!0===$.dy)return
$.dy=!0
H.ll()},
ll:function(){var z,y,x,w,v,u,t,s
$.cr=Object.create(null)
$.cv=Object.create(null)
H.lg()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fT.$1(v)
if(u!=null){t=H.lr(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
lg:function(){var z,y,x,w,v,u,t
z=C.S()
z=H.bc(C.P,H.bc(C.U,H.bc(C.A,H.bc(C.A,H.bc(C.T,H.bc(C.Q,H.bc(C.R(C.B),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fO=new H.lh(v)
$.fJ=new H.li(u)
$.fT=new H.lj(t)},
bc:function(a,b){return a(b)||b},
fU:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
dC:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
iK:{"^":"a;a,b,c,d,e,f,r,0x",n:{
iL:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.ca(z)
y=z[0]
x=z[1]
return new H.iK(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jr:{"^":"a;a,b,c,d,e,f",
ae:function(a){var z,y,x
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
aD:function(a){var z,y,x,w,v,u
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
f0:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
it:{"^":"X;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
n:{
en:function(a,b){return new H.it(a,b==null?null:b.method)}}},
hW:{"^":"X;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.f(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.f(this.a)+")"},
n:{
cS:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hW(a,y,z?null:b.receiver)}}},
jE:{"^":"X;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lD:{"^":"t:13;a",
$1:function(a){if(!!J.O(a).$isX)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fw:{"^":"a;a,0b",
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
gez:function(){return this},
$isbL:1,
gez:function(){return this}},
eK:{"^":"t;"},
j9:{"^":"eK;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.bh(z)+"'"}},
cE:{"^":"eK;a,b,c,d",
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cE))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gZ:function(a){var z,y
z=this.c
if(z==null)y=H.bt(this.a)
else y=typeof z!=="object"?J.aY(z):H.bt(z)
return(y^H.bt(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.b5(z)+"'")},
n:{
cF:function(a){return a.a},
dK:function(a){return a.c},
c_:function(a){var z,y,x,w,v
z=new H.cE("self","target","receiver","name")
y=J.ca(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
js:{"^":"X;a",
i:function(a){return this.a},
n:{
ar:function(a,b){return new H.js("TypeError: "+H.f(P.c4(a))+": type '"+H.fH(a)+"' is not a subtype of type '"+b+"'")}}},
h7:{"^":"X;a",
i:function(a){return this.a},
n:{
h8:function(a,b){return new H.h7("CastError: "+H.f(P.c4(a))+": type '"+H.fH(a)+"' is not a subtype of type '"+b+"'")}}},
iS:{"^":"X;a",
i:function(a){return"RuntimeError: "+H.f(this.a)},
n:{
iT:function(a){return new H.iS(a)}}},
b1:{"^":"ef;a,0b,0c,0d,0e,0f,r,$ti",
gp:function(a){return this.a},
gaz:function(){return new H.ec(this,[H.u(this,0)])},
dR:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.di(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.di(y,a)}else return this.jc(a)},
jc:function(a){var z=this.d
if(z==null)return!1
return this.cI(this.c6(z,J.aY(a)&0x3ffffff),a)>=0},
l:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bp(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bp(w,b)
x=y==null?null:y.b
return x}else return this.jd(b)},
jd:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.c6(z,J.aY(a)&0x3ffffff)
x=this.cI(y,a)
if(x<0)return
return y[x].b},
X:function(a,b,c){var z,y,x,w,v,u
H.z(b,H.u(this,0))
H.z(c,H.u(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.ce()
this.b=z}this.d8(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.ce()
this.c=y}this.d8(y,b,c)}else{x=this.d
if(x==null){x=this.ce()
this.d=x}w=J.aY(b)&0x3ffffff
v=this.c6(x,w)
if(v==null)this.cl(x,w,[this.c0(b,c)])
else{u=this.cI(v,b)
if(u>=0)v[u].b=c
else v.push(this.c0(b,c))}}},
a2:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.h(P.aS(this))
z=z.c}},
d8:function(a,b,c){var z
H.z(b,H.u(this,0))
H.z(c,H.u(this,1))
z=this.bp(a,b)
if(z==null)this.cl(a,b,this.c0(b,c))
else z.b=c},
fm:function(){this.r=this.r+1&67108863},
c0:function(a,b){var z,y
z=new H.i_(H.z(a,H.u(this,0)),H.z(b,H.u(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fm()
return z},
cI:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.P(a[y].a,b))return y
return-1},
i:function(a){return P.eg(this)},
bp:function(a,b){return a[b]},
c6:function(a,b){return a[b]},
cl:function(a,b,c){a[b]=c},
fE:function(a,b){delete a[b]},
di:function(a,b){return this.bp(a,b)!=null},
ce:function(){var z=Object.create(null)
this.cl(z,"<non-identifier-key>",z)
this.fE(z,"<non-identifier-key>")
return z},
$iseb:1},
i_:{"^":"a;a,b,0c,0d"},
ec:{"^":"e_;a,$ti",
gp:function(a){return this.a.a},
gN:function(a){var z,y
z=this.a
y=new H.i0(z,z.r,this.$ti)
y.c=z.e
return y}},
i0:{"^":"a;a,b,0c,0d,$ti",
sd9:function(a){this.d=H.z(a,H.u(this,0))},
gG:function(){return this.d},
A:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.aS(z))
else{z=this.c
if(z==null){this.sd9(null)
return!1}else{this.sd9(z.a)
this.c=this.c.c
return!0}}},
$isaU:1},
lh:{"^":"t:13;a",
$1:function(a){return this.a(a)}},
li:{"^":"t:32;a",
$2:function(a,b){return this.a(a,b)}},
lj:{"^":"t:33;a",
$1:function(a){return this.a(H.E(a))}},
hU:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isep:1,
n:{
hV:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.h(new P.hE("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
l9:function(a){return J.e6(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
lu:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bD:function(a){return a},
bC:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.bI(b,a))},
kR:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.h(H.l8(a,b,c))
return b},
io:{"^":"F;",$ism_:1,"%":";ArrayBufferView;cX|fs|ft|im|fu|fv|br"},
cX:{"^":"io;",
gp:function(a){return a.length},
$isao:1,
$asao:I.du},
im:{"^":"ft;",
l:function(a,b){H.bC(b,a,a.length)
return a[b]},
$asc6:function(){return[P.w]},
$asU:function(){return[P.w]},
$isl:1,
$asl:function(){return[P.w]},
$isb:1,
$asb:function(){return[P.w]},
"%":"Float32Array"},
br:{"^":"fv;",
$asc6:function(){return[P.y]},
$asU:function(){return[P.y]},
$isl:1,
$asl:function(){return[P.y]},
$isb:1,
$asb:function(){return[P.y]}},
lP:{"^":"br;",
l:function(a,b){H.bC(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lQ:{"^":"br;",
l:function(a,b){H.bC(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lR:{"^":"br;",
l:function(a,b){H.bC(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lS:{"^":"br;",
gp:function(a){return a.length},
l:function(a,b){H.bC(b,a,a.length)
return a[b]},
$ism0:1,
"%":"CanvasPixelArray|Uint8ClampedArray"},
lT:{"^":"br;",
gp:function(a){return a.length},
l:function(a,b){H.bC(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
fs:{"^":"cX+U;"},
ft:{"^":"fs+c6;"},
fu:{"^":"cX+U;"},
fv:{"^":"fu+c6;"}}],["","",,P,{"^":"",
k_:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kZ()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bd(new P.k1(z),1)).observe(y,{childList:true})
return new P.k0(z,y,x)}else if(self.setImmediate!=null)return P.l_()
return P.l0()},
m4:[function(a){self.scheduleImmediate(H.bd(new P.k2(H.k(a,{func:1,ret:-1})),0))},"$1","kZ",4,0,8],
m5:[function(a){self.setImmediate(H.bd(new P.k3(H.k(a,{func:1,ret:-1})),0))},"$1","l_",4,0,8],
m6:[function(a){P.d6(C.q,H.k(a,{func:1,ret:-1}))},"$1","l0",4,0,8],
d6:function(a,b){var z
H.k(b,{func:1,ret:-1})
z=C.h.a1(a.a,1000)
return P.kG(z<0?0:z,b)},
eS:function(a,b){var z
H.k(b,{func:1,ret:-1,args:[P.b6]})
z=C.h.a1(a.a,1000)
return P.kH(z<0?0:z,b)},
kV:function(a,b){if(H.bX(a,{func:1,args:[P.a,P.aI]}))return H.k(a,{func:1,ret:null,args:[P.a,P.aI]})
if(H.bX(a,{func:1,args:[P.a]}))return H.k(a,{func:1,ret:null,args:[P.a]})
throw H.h(P.cC(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kU:function(){var z,y
for(;z=$.bb,z!=null;){$.bF=null
y=z.b
$.bb=y
if(y==null)$.bE=null
z.a.$0()}},
mc:[function(){$.dn=!0
try{P.kU()}finally{$.bF=null
$.dn=!1
if($.bb!=null)$.$get$dj().$1(P.fL())}},"$0","fL",0,0,3],
fG:function(a){var z=new P.fk(H.k(a,{func:1,ret:-1}))
if($.bb==null){$.bE=z
$.bb=z
if(!$.dn)$.$get$dj().$1(P.fL())}else{$.bE.b=z
$.bE=z}},
kY:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
z=$.bb
if(z==null){P.fG(a)
$.bF=$.bE
return}y=new P.fk(a)
x=$.bF
if(x==null){y.b=z
$.bF=y
$.bb=y}else{y.b=x.b
x.b=y
$.bF=y
if(y.b==null)$.bE=y}},
lw:function(a){var z,y
z={func:1,ret:-1}
H.k(a,z)
y=$.N
if(C.l===y){P.cq(null,null,C.l,a)
return}y.toString
P.cq(null,null,y,H.k(y.cq(a),z))},
eR:function(a,b){var z,y
z={func:1,ret:-1}
H.k(b,z)
y=$.N
if(y===C.l){y.toString
return P.d6(a,b)}return P.d6(a,H.k(y.cq(b),z))},
jo:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.b6]}
H.k(b,z)
y=$.N
if(y===C.l){y.toString
return P.eS(a,b)}x=y.dM(b,P.b6)
$.N.toString
return P.eS(a,H.k(x,z))},
cp:function(a,b,c,d,e){var z={}
z.a=d
P.kY(new P.kW(z,e))},
fE:function(a,b,c,d,e){var z,y
H.k(d,{func:1,ret:e})
y=$.N
if(y===c)return d.$0()
$.N=c
z=y
try{y=d.$0()
return y}finally{$.N=z}},
fF:function(a,b,c,d,e,f,g){var z,y
H.k(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.N
if(y===c)return d.$1(e)
$.N=c
z=y
try{y=d.$1(e)
return y}finally{$.N=z}},
kX:function(a,b,c,d,e,f,g,h,i){var z,y
H.k(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.N
if(y===c)return d.$2(e,f)
$.N=c
z=y
try{y=d.$2(e,f)
return y}finally{$.N=z}},
cq:function(a,b,c,d){var z
H.k(d,{func:1,ret:-1})
z=C.l!==c
if(z)d=!(!z||!1)?c.cq(d):c.iF(d,-1)
P.fG(d)},
k1:{"^":"t:15;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
k0:{"^":"t:31;a,b,c",
$1:function(a){var z,y
this.a.a=H.k(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
k2:{"^":"t:2;a",
$0:function(){this.a.$0()}},
k3:{"^":"t:2;a",
$0:function(){this.a.$0()}},
fy:{"^":"a;a,0b,c",
fj:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bd(new P.kJ(this,b),0),a)
else throw H.h(P.a7("`setTimeout()` not found."))},
fk:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bd(new P.kI(this,a,Date.now(),b),0),a)
else throw H.h(P.a7("Periodic timer."))},
$isb6:1,
n:{
kG:function(a,b){var z=new P.fy(!0,0)
z.fj(a,b)
return z},
kH:function(a,b){var z=new P.fy(!1,0)
z.fk(a,b)
return z}}},
kJ:{"^":"t:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
kI:{"^":"t:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.f_(w,x)}z.c=y
this.d.$1(z)}},
ba:{"^":"a;0a,b,c,d,e,$ti",
ji:function(a){if(this.c!==6)return!0
return this.b.b.cS(H.k(this.d,{func:1,ret:P.I,args:[P.a]}),a.a,P.I,P.a)},
jb:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.u(this,1)}
w=this.b.b
if(H.bX(z,{func:1,args:[P.a,P.aI]}))return H.dv(w.jH(z,a.a,a.b,null,y,P.aI),x)
else return H.dv(w.cS(H.k(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aO:{"^":"a;dC:a<,b,0hH:c<,$ti",
es:function(a,b,c){var z,y,x,w
z=H.u(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.N
if(y!==C.l){y.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kV(b,y)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aO(0,$.N,[c])
w=b==null?1:3
this.dc(new P.ba(x,w,a,b,[z,c]))
return x},
jN:function(a,b){return this.es(a,null,b)},
dc:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isba")
this.c=a}else{if(z===2){y=H.e(this.c,"$isaO")
z=y.a
if(z<4){y.dc(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cq(null,null,z,H.k(new P.kb(this,a),{func:1,ret:-1}))}},
dz:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isba")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isaO")
y=u.a
if(y<4){u.dz(a)
return}this.a=y
this.c=u.c}z.a=this.br(a)
y=this.b
y.toString
P.cq(null,null,y,H.k(new P.kg(z,this),{func:1,ret:-1}))}},
cj:function(){var z=H.e(this.c,"$isba")
this.c=null
return this.br(z)},
br:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
de:function(a){var z,y,x
z=H.u(this,0)
H.dv(a,{futureOr:1,type:z})
y=this.$ti
if(H.bH(a,"$isbo",y,"$asbo"))if(H.bH(a,"$isaO",y,null))P.fn(a,this)
else P.kc(a,this)
else{x=this.cj()
H.z(a,z)
this.a=4
this.c=a
P.bB(this,x)}},
df:function(a,b){var z
H.e(b,"$isaI")
z=this.cj()
this.a=8
this.c=new P.ad(a,b)
P.bB(this,z)},
$isbo:1,
n:{
kc:function(a,b){var z,y,x
b.a=1
try{a.es(new P.kd(b),new P.ke(b),null)}catch(x){z=H.ac(x)
y=H.bf(x)
P.lw(new P.kf(b,z,y))}},
fn:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isaO")
if(z>=4){y=b.cj()
b.a=a.a
b.c=a.c
P.bB(b,y)}else{y=H.e(b.c,"$isba")
b.a=2
b.c=a
a.dz(y)}},
bB:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isad")
y=y.b
u=v.a
t=v.b
y.toString
P.cp(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
if(p){H.e(r,"$isad")
y=y.b
u=r.a
t=r.b
y.toString
P.cp(null,null,y,u,t)
return}o=$.N
if(o==null?q!=null:o!==q)$.N=q
else o=null
y=b.c
if(y===8)new P.kj(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.ki(x,b,r).$0()}else if((y&2)!==0)new P.kh(z,x,b).$0()
if(o!=null)$.N=o
y=x.b
if(!!J.O(y).$isbo){if(y.a>=4){n=H.e(t.c,"$isba")
t.c=null
b=t.br(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fn(y,t)
return}}m=b.b
n=H.e(m.c,"$isba")
m.c=null
b=m.br(n)
y=x.a
u=x.b
if(!y){H.z(u,H.u(m,0))
m.a=4
m.c=u}else{H.e(u,"$isad")
m.a=8
m.c=u}z.a=m
y=m}}}},
kb:{"^":"t:2;a,b",
$0:function(){P.bB(this.a,this.b)}},
kg:{"^":"t:2;a,b",
$0:function(){P.bB(this.b,this.a.a)}},
kd:{"^":"t:15;a",
$1:function(a){var z=this.a
z.a=0
z.de(a)}},
ke:{"^":"t:34;a",
$2:function(a,b){this.a.df(a,H.e(b,"$isaI"))},
$1:function(a){return this.$2(a,null)}},
kf:{"^":"t:2;a,b,c",
$0:function(){this.a.df(this.b,this.c)}},
kj:{"^":"t:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.er(H.k(w.d,{func:1}),null)}catch(v){y=H.ac(v)
x=H.bf(v)
if(this.d){w=H.e(this.a.a.c,"$isad").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isad")
else u.b=new P.ad(y,x)
u.a=!0
return}if(!!J.O(z).$isbo){if(z instanceof P.aO&&z.gdC()>=4){if(z.gdC()===8){w=this.b
w.b=H.e(z.ghH(),"$isad")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.jN(new P.kk(t),null)
w.a=!1}}},
kk:{"^":"t:35;a",
$1:function(a){return this.a}},
ki:{"^":"t:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.u(x,0)
v=H.z(this.c,w)
u=H.u(x,1)
this.a.b=x.b.b.cS(H.k(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ac(t)
y=H.bf(t)
x=this.a
x.b=new P.ad(z,y)
x.a=!0}}},
kh:{"^":"t:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isad")
w=this.c
if(w.ji(z)&&w.e!=null){v=this.b
v.b=w.jb(z)
v.a=!1}}catch(u){y=H.ac(u)
x=H.bf(u)
w=H.e(this.a.a.c,"$isad")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ad(y,x)
s.a=!0}}},
fk:{"^":"a;a,0b"},
ja:{"^":"a;$ti",
gp:function(a){var z,y,x,w
z={}
y=new P.aO(0,$.N,[P.y])
z.a=0
x=H.u(this,0)
w=H.k(new P.jc(z,this),{func:1,ret:-1,args:[x]})
H.k(new P.jd(z,y),{func:1,ret:-1})
W.V(this.a,this.b,w,!1,x)
return y}},
jc:{"^":"t;a,b",
$1:function(a){H.z(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.J,args:[H.u(this.b,0)]}}},
jd:{"^":"t:2;a,b",
$0:function(){this.b.de(this.a.a)}},
d1:{"^":"a;$ti"},
jb:{"^":"a;"},
b6:{"^":"a;"},
ad:{"^":"a;a,b",
i:function(a){return H.f(this.a)},
$isX:1},
kO:{"^":"a;",$ism3:1},
kW:{"^":"t:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eo()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.h(z)
x=H.h(z)
x.stack=y.i(0)
throw x}},
kv:{"^":"kO;",
jI:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
try{if(C.l===$.N){a.$0()
return}P.fE(null,null,this,a,-1)}catch(x){z=H.ac(x)
y=H.bf(x)
P.cp(null,null,this,z,H.e(y,"$isaI"))}},
jJ:function(a,b,c){var z,y,x
H.k(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.l===$.N){a.$1(b)
return}P.fF(null,null,this,a,b,-1,c)}catch(x){z=H.ac(x)
y=H.bf(x)
P.cp(null,null,this,z,H.e(y,"$isaI"))}},
iF:function(a,b){return new P.kx(this,H.k(a,{func:1,ret:b}),b)},
cq:function(a){return new P.kw(this,H.k(a,{func:1,ret:-1}))},
dM:function(a,b){return new P.ky(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
er:function(a,b){H.k(a,{func:1,ret:b})
if($.N===C.l)return a.$0()
return P.fE(null,null,this,a,b)},
cS:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.N===C.l)return a.$1(b)
return P.fF(null,null,this,a,b,c,d)},
jH:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.N===C.l)return a.$2(b,c)
return P.kX(null,null,this,a,b,c,d,e,f)}},
kx:{"^":"t;a,b,c",
$0:function(){return this.a.er(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
kw:{"^":"t:3;a,b",
$0:function(){return this.a.jI(this.b)}},
ky:{"^":"t;a,b,c",
$1:function(a){var z=this.c
return this.a.jJ(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
i2:function(a,b,c){H.cw(a)
return H.i(H.la(a,new H.b1(0,0,[b,c])),"$iseb",[b,c],"$aseb")},
i1:function(a,b){return new H.b1(0,0,[a,b])},
bS:function(a,b,c,d){return new P.kp(0,0,[d])},
hQ:function(a,b,c){var z,y
if(P.dp(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bG()
C.a.h(y,a)
try{P.kT(a,z)}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=P.eJ(b,H.lo(z,"$isl"),", ")+c
return y.charCodeAt(0)==0?y:y},
cP:function(a,b,c){var z,y,x
if(P.dp(a))return b+"..."+c
z=new P.bu(b)
y=$.$get$bG()
C.a.h(y,a)
try{x=z
x.a=P.eJ(x.gaI(),a,", ")}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=z
y.a=y.gaI()+c
y=z.gaI()
return y.charCodeAt(0)==0?y:y},
dp:function(a){var z,y
for(z=0;y=$.$get$bG(),z<y.length;++z)if(a===y[z])return!0
return!1},
kT:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gN(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.A())return
w=H.f(z.gG())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.A()){if(x<=5)return
if(0>=b.length)return H.j(b,-1)
v=b.pop()
if(0>=b.length)return H.j(b,-1)
u=b.pop()}else{t=z.gG();++x
if(!z.A()){if(x<=4){C.a.h(b,H.f(t))
return}v=H.f(t)
if(0>=b.length)return H.j(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gG();++x
for(;z.A();t=s,s=r){r=z.gG();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.j(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.f(t)
v=H.f(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.j(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
ed:function(a,b){var z,y,x
z=P.bS(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.x)(a),++x)z.h(0,H.z(a[x],b))
return z},
eg:function(a){var z,y,x
z={}
if(P.dp(a))return"{...}"
y=new P.bu("")
try{C.a.h($.$get$bG(),a)
x=y
x.a=x.gaI()+"{"
z.a=!0
a.a2(0,new P.i7(z,y))
z=y
z.a=z.gaI()+"}"}finally{z=$.$get$bG()
if(0>=z.length)return H.j(z,-1)
z.pop()}z=y.gaI()
return z.charCodeAt(0)==0?z:z},
kp:{"^":"kl;a,0b,0c,0d,0e,0f,r,$ti",
gN:function(a){var z=new P.fr(this,this.r,this.$ti)
z.c=this.e
return z},
gp:function(a){return this.a},
V:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.e(z[b],"$isco")!=null}else{y=this.fA(b)
return y}},
fA:function(a){var z=this.d
if(z==null)return!1
return this.c4(this.dn(z,a),a)>=0},
h:function(a,b){var z,y
H.z(b,H.u(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dl()
this.b=z}return this.da(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dl()
this.c=y}return this.da(y,b)}else return this.fn(b)},
fn:function(a){var z,y,x
H.z(a,H.u(this,0))
z=this.d
if(z==null){z=P.dl()
this.d=z}y=this.dg(a)
x=z[y]
if(x==null)z[y]=[this.cf(a)]
else{if(this.c4(x,a)>=0)return!1
x.push(this.cf(a))}return!0},
M:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.hy(this.c,b)
else return this.hv(b)},
hv:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.dn(z,a)
x=this.c4(y,a)
if(x<0)return!1
this.dE(y.splice(x,1)[0])
return!0},
da:function(a,b){H.z(b,H.u(this,0))
if(H.e(a[b],"$isco")!=null)return!1
a[b]=this.cf(b)
return!0},
hy:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$isco")
if(z==null)return!1
this.dE(z)
delete a[b]
return!0},
dr:function(){this.r=this.r+1&67108863},
cf:function(a){var z,y
z=new P.co(H.z(a,H.u(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dr()
return z},
dE:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dr()},
dg:function(a){return J.aY(a)&0x3ffffff},
dn:function(a,b){return a[this.dg(b)]},
c4:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.P(a[y].a,b))return y
return-1},
n:{
dl:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
co:{"^":"a;a,0b,0c"},
fr:{"^":"a;a,b,0c,0d,$ti",
sdd:function(a){this.d=H.z(a,H.u(this,0))},
gG:function(){return this.d},
A:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.aS(z))
else{z=this.c
if(z==null){this.sdd(null)
return!1}else{this.sdd(H.z(z.a,H.u(this,0)))
this.c=this.c.b
return!0}}},
$isaU:1,
n:{
kq:function(a,b,c){var z=new P.fr(a,b,[c])
z.c=a.e
return z}}},
kl:{"^":"iU;"},
cb:{"^":"kr;",$isl:1,$isb:1},
U:{"^":"a;$ti",
gN:function(a){return new H.cT(a,this.gp(a),0,[H.cu(this,a,"U",0)])},
a6:function(a,b){return this.l(a,b)},
jQ:function(a,b){var z,y
z=H.c([],[H.cu(this,a,"U",0)])
C.a.sp(z,this.gp(a))
for(y=0;y<this.gp(a);++y)C.a.X(z,y,this.l(a,y))
return z},
jP:function(a){return this.jQ(a,!0)},
i:function(a){return P.cP(a,"[","]")}},
ef:{"^":"cd;"},
i7:{"^":"t:17;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.f(a)
z.a=y+": "
z.a+=H.f(b)}},
cd:{"^":"a;$ti",
a2:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.a_(this,"cd",0),H.a_(this,"cd",1)]})
for(z=J.bi(this.gaz());z.A();){y=z.gG()
b.$2(y,this.l(0,y))}},
gp:function(a){return J.aZ(this.gaz())},
i:function(a){return P.eg(this)},
$isae:1},
iW:{"^":"a;$ti",
a5:function(a,b){var z
for(z=J.bi(H.i(b,"$isl",this.$ti,"$asl"));z.A();)this.h(0,z.gG())},
i:function(a){return P.cP(this,"{","}")},
a6:function(a,b){var z,y,x
if(b<0)H.r(P.a9(b,0,null,"index",null))
for(z=P.kq(this,this.r,H.u(this,0)),y=0;z.A();){x=z.d
if(b===y)return x;++y}throw H.h(P.b_(b,this,"index",null,y))},
$isl:1,
$iseC:1},
iU:{"^":"iW;"},
kr:{"^":"a+U;"}}],["","",,P,{"^":"",cK:{"^":"a;$ti"},c2:{"^":"jb;$ti"},hv:{"^":"cK;",
$ascK:function(){return[P.n,[P.b,P.y]]}},hN:{"^":"a;a,b,c,d,e",
i:function(a){return this.a}},hM:{"^":"c2;a",
fB:function(a,b,c){var z,y,x,w,v,u
for(z=this.a,y=z.e,x=z.d,z=z.c,w=b,v=null;w<c;++w){if(w>=a.length)return H.j(a,w)
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
default:u=null}if(u!=null){if(v==null)v=new P.bu("")
if(w>b)v.a+=C.i.bm(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.h1(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asc2:function(){return[P.n,P.n]}},jL:{"^":"hv;a"},jM:{"^":"c2;",
iQ:function(a,b,c){var z,y,x,w
z=a.length
P.ex(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.kM(0,0,x)
if(w.fM(a,b,z)!==z)w.dF(C.i.cv(a,z-1),0)
return new Uint8Array(x.subarray(0,H.kR(0,w.b,x.length)))},
iP:function(a){return this.iQ(a,0,null)},
$asc2:function(){return[P.n,[P.b,P.y]]}},kM:{"^":"a;a,b,c",
dF:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.j(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.j(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.j(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.j(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.j(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.j(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.j(z,y)
z[y]=128|a&63
return!1}},
fM:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.i.cv(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.aH(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dF(w,C.i.aH(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.j(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.j(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.j(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.j(z,v)
z[v]=128|w&63}}return x}}}],["","",,P,{"^":"",
hx:function(a){if(a instanceof H.t)return a.i(0)
return"Instance of '"+H.b5(a)+"'"},
i3:function(a,b,c,d){var z,y
H.z(b,d)
z=J.hS(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.X(z,y,b)
return H.i(z,"$isb",[d],"$asb")},
i4:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gN(a);x.A();)C.a.h(y,H.z(x.gG(),c))
if(b)return y
return H.i(J.ca(y),"$isb",z,"$asb")},
d2:function(a,b,c){var z,y
z=P.y
H.i(a,"$isl",[z],"$asl")
if(a.constructor===Array){H.i(a,"$isb0",[z],"$asb0")
y=a.length
c=P.ex(b,c,y,null,null,null)
return H.ew(b>0||c<y?C.a.eT(a,b,c):a)}return P.je(a,b,c)},
je:function(a,b,c){var z,y,x
H.i(a,"$isl",[P.y],"$asl")
z=J.bi(a)
for(y=0;y<b;++y)if(!z.A())throw H.h(P.a9(b,0,y,null,null))
x=[]
for(;z.A();)x.push(z.gG())
return H.ew(x)},
iM:function(a,b,c){return new H.hU(a,H.hV(a,!1,!0,!1))},
fB:function(a,b,c,d){var z,y,x,w,v,u
H.i(a,"$isb",[P.y],"$asb")
if(c===C.x){z=$.$get$fA().b
z=z.test(b)}else z=!1
if(z)return b
y=C.I.iP(H.z(b,H.a_(c,"cK",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.j(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cY(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
c4:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.au(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hx(a)},
p:function(a){return new P.fm(a)},
dB:function(a){H.lu(a)},
I:{"^":"a;"},
"+bool":0,
am:{"^":"a;a,b",
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.am))return!1
return this.a===b.a&&!0},
gZ:function(a){var z=this.a
return(z^C.h.bs(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.hk(H.iF(this))
y=P.bJ(H.iD(this))
x=P.bJ(H.iz(this))
w=P.bJ(H.iA(this))
v=P.bJ(H.iC(this))
u=P.bJ(H.iE(this))
t=P.hl(H.iB(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
n:{
hk:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hl:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bJ:function(a){if(a>=10)return""+a
return"0"+a}}},
w:{"^":"ab;"},
"+double":0,
bl:{"^":"a;a",
an:function(a,b){return C.h.an(this.a,H.e(b,"$isbl").a)},
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.bl))return!1
return this.a===b.a},
gZ:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hr()
y=this.a
if(y<0)return"-"+new P.bl(0-y).i(0)
x=z.$1(C.h.a1(y,6e7)%60)
w=z.$1(C.h.a1(y,1e6)%60)
v=new P.hq().$1(y%1e6)
return""+C.h.a1(y,36e8)+":"+H.f(x)+":"+H.f(w)+"."+H.f(v)},
n:{
dZ:function(a,b,c,d,e,f){return new P.bl(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hq:{"^":"t:21;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hr:{"^":"t:21;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
X:{"^":"a;"},
eo:{"^":"X;",
i:function(a){return"Throw of null."}},
aE:{"^":"X;a,b,c,d",
gc3:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc2:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.f(z)
w=this.gc3()+y+x
if(!this.a)return w
v=this.gc2()
u=P.c4(this.b)
return w+v+": "+H.f(u)},
n:{
h4:function(a){return new P.aE(!1,null,null,a)},
cC:function(a,b,c){return new P.aE(!0,a,b,c)}}},
cg:{"^":"aE;e,f,a,b,c,d",
gc3:function(){return"RangeError"},
gc2:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.f(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.f(z)
else if(x>z)y=": Not in range "+H.f(z)+".."+H.f(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.f(z)}return y},
n:{
bU:function(a,b,c){return new P.cg(null,null,!0,a,b,"Value not in range")},
a9:function(a,b,c,d,e){return new P.cg(b,c,!0,a,d,"Invalid value")},
ex:function(a,b,c,d,e,f){if(0>a||a>c)throw H.h(P.a9(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.h(P.a9(b,a,c,"end",f))
return b}return c}}},
hP:{"^":"aE;e,p:f>,a,b,c,d",
gc3:function(){return"RangeError"},
gc2:function(){if(J.fW(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.f(z)},
n:{
b_:function(a,b,c,d,e){var z=H.a0(e!=null?e:J.aZ(b))
return new P.hP(b,z,!0,a,c,"Index out of range")}}},
jG:{"^":"X;a",
i:function(a){return"Unsupported operation: "+this.a},
n:{
a7:function(a){return new P.jG(a)}}},
jD:{"^":"X;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
n:{
f5:function(a){return new P.jD(a)}}},
d0:{"^":"X;a",
i:function(a){return"Bad state: "+this.a},
n:{
eI:function(a){return new P.d0(a)}}},
hf:{"^":"X;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.c4(z))+"."},
n:{
aS:function(a){return new P.hf(a)}}},
iu:{"^":"a;",
i:function(a){return"Out of Memory"},
$isX:1},
eH:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isX:1},
hi:{"^":"X;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fm:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
hE:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.i.bm(x,0,75)+"..."
return y+"\n"+x}},
bL:{"^":"a;"},
y:{"^":"ab;"},
"+int":0,
l:{"^":"a;$ti",
cV:["eV",function(a,b){var z=H.a_(this,"l",0)
return new H.di(this,H.k(b,{func:1,ret:P.I,args:[z]}),[z])}],
gp:function(a){var z,y
z=this.gN(this)
for(y=0;z.A();)++y
return y},
gaE:function(a){var z,y
z=this.gN(this)
if(!z.A())throw H.h(H.c9())
y=z.gG()
if(z.A())throw H.h(H.hR())
return y},
a6:function(a,b){var z,y,x
if(b<0)H.r(P.a9(b,0,null,"index",null))
for(z=this.gN(this),y=0;z.A();){x=z.gG()
if(b===y)return x;++y}throw H.h(P.b_(b,this,"index",null,y))},
i:function(a){return P.hQ(this,"(",")")}},
aU:{"^":"a;$ti"},
b:{"^":"a;$ti",$isl:1},
"+List":0,
J:{"^":"a;",
gZ:function(a){return P.a.prototype.gZ.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
ab:{"^":"a;"},
"+num":0,
a:{"^":";",
w:function(a,b){return this===b},
gZ:function(a){return H.bt(this)},
i:function(a){return"Instance of '"+H.b5(this)+"'"},
toString:function(){return this.i(this)}},
aI:{"^":"a;"},
n:{"^":"a;",$isep:1},
"+String":0,
bu:{"^":"a;aI:a<",
gp:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
n:{
eJ:function(a,b,c){var z=J.bi(b)
if(!z.A())return a
if(c.length===0){do a+=H.f(z.gG())
while(z.A())}else{a+=H.f(z.gG())
for(;z.A();)a=a+c+H.f(z.gG())}return a}}}}],["","",,W,{"^":"",
dG:function(a){var z=document.createElement("a")
return z},
cI:function(a,b){var z=document.createElement("canvas")
return z},
hs:function(a,b,c){var z,y
z=document.body
y=(z&&C.n).aj(z,a,b,c)
y.toString
z=W.A
z=new H.di(new W.aj(y),H.k(new W.ht(),{func:1,ret:P.I,args:[z]}),[z])
return H.e(z.gaE(z),"$isQ")},
hu:function(a){H.e(a,"$isc5")
return"wheel"},
bm:function(a){var z,y,x
z="element tag unavailable"
try{y=J.h0(a)
if(typeof y==="string")z=a.tagName}catch(x){H.ac(x)}return z},
cm:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fq:function(a,b,c,d){var z,y
z=W.cm(W.cm(W.cm(W.cm(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fI:function(a,b){var z
H.k(a,{func:1,ret:-1,args:[b]})
z=$.N
if(z===C.l)return a
return z.dM(a,b)},
a2:{"^":"Q;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
h3:{"^":"a2;",
i:function(a){return String(a)},
$ish3:1,
"%":"HTMLAnchorElement"},
lF:{"^":"a2;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
dI:{"^":"a2;",$isdI:1,"%":"HTMLBaseElement"},
bZ:{"^":"a2;",$isbZ:1,"%":"HTMLBodyElement"},
cH:{"^":"a2;",
bU:function(a,b,c){if(c!=null)return this.fN(a,b,P.l2(c,null))
return this.fO(a,b)},
eE:function(a,b){return this.bU(a,b,null)},
fN:function(a,b,c){return a.getContext(b,c)},
fO:function(a,b){return a.getContext(b)},
$iscH:1,
$isdN:1,
"%":"HTMLCanvasElement"},
cJ:{"^":"F;",
fP:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
j2:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$iscJ:1,
"%":"CanvasRenderingContext2D"},
lI:{"^":"A;0p:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
lK:{"^":"k6;0p:length=",
eH:function(a,b){var z=this.fQ(a,this.fu(a,b))
return z==null?"":z},
fu:function(a,b){var z,y
z=$.$get$dS()
y=z[b]
if(typeof y==="string")return y
y=this.hW(a,b)
z[b]=y
return y},
hW:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hm()+b
if(z in a)return z
return b},
fQ:function(a,b){return a.getPropertyValue(b)},
gcr:function(a){return a.bottom},
gb8:function(a){return a.height},
gaT:function(a){return a.left},
gbd:function(a){return a.right},
gbh:function(a){return a.top},
gbj:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hh:{"^":"a;",
gaT:function(a){return this.eH(a,"left")}},
aT:{"^":"a2;",$isaT:1,"%":"HTMLDivElement"},
hn:{"^":"A;",
iB:function(a,b){return a.adoptNode(b)},
eF:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
lL:{"^":"F;",
i:function(a){return String(a)},
"%":"DOMException"},
ho:{"^":"F;",
iT:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
hp:{"^":"F;",
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
w:function(a,b){var z
if(b==null)return!1
if(!H.bH(b,"$isaH",[P.ab],"$asaH"))return!1
z=J.a6(b)
return a.left===z.gaT(b)&&a.top===z.gbh(b)&&a.width===z.gbj(b)&&a.height===z.gb8(b)},
gZ:function(a){return W.fq(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gcr:function(a){return a.bottom},
gb8:function(a){return a.height},
gaT:function(a){return a.left},
gbd:function(a){return a.right},
gbh:function(a){return a.top},
gbj:function(a){return a.width},
$isaH:1,
$asaH:function(){return[P.ab]},
"%":";DOMRectReadOnly"},
k5:{"^":"cb;dm:a<,b",
gp:function(a){return this.b.length},
l:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.j(z,b)
return H.e(z[b],"$isQ")},
h:function(a,b){J.dE(this.a,b)
return b},
gN:function(a){var z=this.jP(this)
return new J.al(z,z.length,0,[H.u(z,0)])},
$asU:function(){return[W.Q]},
$asl:function(){return[W.Q]},
$asb:function(){return[W.Q]}},
Q:{"^":"A;0jK:tagName=",
giE:function(a){return new W.k7(a)},
gdP:function(a){return new W.k5(a,a.children)},
gdQ:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.an()
if(x<0)x=-x*0
if(typeof w!=="number")return w.an()
if(w<0)w=-w*0
return new P.aH(z,y,x,w,[P.ab])},
i:function(a){return a.localName},
aj:["bY",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.e1
if(z==null){z=H.c([],[W.aB])
y=new W.em(z)
C.a.h(z,W.fo(null))
C.a.h(z,W.fx())
$.e1=y
d=y}else d=z
z=$.e0
if(z==null){z=new W.fC(d)
$.e0=z
c=z}else{z.a=d
c=z}}if($.aF==null){z=document
y=z.implementation
y=(y&&C.J).iT(y,"")
$.aF=y
$.cN=y.createRange()
y=$.aF
y.toString
y=y.createElement("base")
H.e(y,"$isdI")
y.href=z.baseURI
z=$.aF.head;(z&&C.L).B(z,y)}z=$.aF
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.e(y,"$isbZ")}z=$.aF
if(!!this.$isbZ)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.aF.body;(z&&C.n).B(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.V(C.X,a.tagName)){z=$.cN;(z&&C.E).eN(z,x)
z=$.cN
w=(z&&C.E).iR(z,b)}else{x.innerHTML=b
w=$.aF.createDocumentFragment()
for(z=J.a6(w);y=x.firstChild,y!=null;)z.B(w,y)}z=$.aF.body
if(x==null?z!=null:x!==z)J.dF(x)
c.d0(w)
C.z.iB(document,w)
return w},function(a,b,c){return this.aj(a,b,c,null)},"iS",null,null,"gkB",5,5,null],
eP:function(a,b,c,d){a.textContent=null
this.B(a,this.aj(a,b,c,d))},
eO:function(a,b){return this.eP(a,b,null,null)},
aY:function(a,b){return a.getAttribute(b)},
hw:function(a,b){return a.removeAttribute(b)},
$isQ:1,
"%":";Element"},
ht:{"^":"t:25;",
$1:function(a){return!!J.O(H.e(a,"$isA")).$isQ}},
a4:{"^":"F;",$isa4:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
c5:{"^":"F;",
fo:function(a,b,c,d){return a.addEventListener(b,H.bd(H.k(c,{func:1,args:[W.a4]}),1),!1)},
$isc5:1,
"%":";EventTarget"},
lM:{"^":"a2;0p:length=","%":"HTMLFormElement"},
hJ:{"^":"a2;","%":"HTMLHeadElement"},
hK:{"^":"kn;",
gp:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.b_(b,a,null,null,null))
return a[b]},
a6:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isao:1,
$asao:function(){return[W.A]},
$asU:function(){return[W.A]},
$isl:1,
$asl:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]},
$ishK:1,
$asaw:function(){return[W.A]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hL:{"^":"hn;","%":"HTMLDocument"},
c7:{"^":"F;0dT:data=",$isc7:1,"%":"ImageData"},
e5:{"^":"a2;",$ise5:1,$isdN:1,"%":"HTMLImageElement"},
bp:{"^":"d9;",$isbp:1,"%":"KeyboardEvent"},
i5:{"^":"F;",
i:function(a){return String(a)},
$isi5:1,
"%":"Location"},
ik:{"^":"a2;","%":"HTMLAudioElement;HTMLMediaElement"},
ap:{"^":"d9;",$isap:1,"%":"PointerEvent;DragEvent|MouseEvent"},
aj:{"^":"cb;a",
gaE:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.h(P.eI("No elements"))
if(y>1)throw H.h(P.eI("More than one element"))
return z.firstChild},
a5:function(a,b){var z,y,x,w,v
H.i(b,"$isl",[W.A],"$asl")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.a6(y),v=0;v<x;++v)w.B(y,z.firstChild)
return},
gN:function(a){var z=this.a.childNodes
return new W.e3(z,z.length,-1,[H.cu(C.Z,z,"aw",0)])},
gp:function(a){return this.a.childNodes.length},
l:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.j(z,b)
return z[b]},
$asU:function(){return[W.A]},
$asl:function(){return[W.A]},
$asb:function(){return[W.A]}},
A:{"^":"c5;0jy:previousSibling=",
jA:function(a){var z=a.parentNode
if(z!=null)J.bY(z,a)},
i:function(a){var z=a.nodeValue
return z==null?this.eU(a):z},
B:function(a,b){return a.appendChild(b)},
hx:function(a,b){return a.removeChild(b)},
$isA:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
ip:{"^":"kt;",
gp:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.b_(b,a,null,null,null))
return a[b]},
a6:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isao:1,
$asao:function(){return[W.A]},
$asU:function(){return[W.A]},
$isl:1,
$asl:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]},
$asaw:function(){return[W.A]},
"%":"NodeList|RadioNodeList"},
iI:{"^":"F;",
iR:function(a,b){return a.createContextualFragment(b)},
eN:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
lV:{"^":"a2;0p:length=","%":"HTMLSelectElement"},
jf:{"^":"a2;","%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
jg:{"^":"a2;",
aj:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.bY(a,b,c,d)
z=W.hs("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.aj(y).a5(0,new W.aj(z))
return y},
"%":"HTMLTableElement"},
jh:{"^":"a2;",
aj:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.bY(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.p.aj(z.createElement("table"),b,c,d)
z.toString
z=new W.aj(z)
x=z.gaE(z)
x.toString
z=new W.aj(x)
w=z.gaE(z)
y.toString
w.toString
new W.aj(y).a5(0,new W.aj(w))
return y},
"%":"HTMLTableRowElement"},
lX:{"^":"a2;",
aj:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.bY(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.p.aj(z.createElement("table"),b,c,d)
z.toString
z=new W.aj(z)
x=z.gaE(z)
y.toString
x.toString
new W.aj(y).a5(0,new W.aj(x))
return y},
"%":"HTMLTableSectionElement"},
eL:{"^":"a2;",$iseL:1,"%":"HTMLTemplateElement"},
bw:{"^":"F;",$isbw:1,"%":"Touch"},
b7:{"^":"d9;",$isb7:1,"%":"TouchEvent"},
lZ:{"^":"kL;",
gp:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.b_(b,a,null,null,null))
return a[b]},
a6:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isao:1,
$asao:function(){return[W.bw]},
$asU:function(){return[W.bw]},
$isl:1,
$asl:function(){return[W.bw]},
$isb:1,
$asb:function(){return[W.bw]},
$asaw:function(){return[W.bw]},
"%":"TouchList"},
d9:{"^":"a4;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
m2:{"^":"ik;",$isdN:1,"%":"HTMLVideoElement"},
bA:{"^":"ap;",
giZ:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.a7("deltaY is not supported"))},
giY:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.a7("deltaX is not supported"))},
$isbA:1,
"%":"WheelEvent"},
jZ:{"^":"c5;",
hD:function(a,b){return a.requestAnimationFrame(H.bd(H.k(b,{func:1,ret:-1,args:[P.ab]}),1))},
fG:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fl:{"^":"A;",$isfl:1,"%":"Attr"},
m7:{"^":"hp;",
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
w:function(a,b){var z
if(b==null)return!1
if(!H.bH(b,"$isaH",[P.ab],"$asaH"))return!1
z=J.a6(b)
return a.left===z.gaT(b)&&a.top===z.gbh(b)&&a.width===z.gbj(b)&&a.height===z.gb8(b)},
gZ:function(a){return W.fq(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gb8:function(a){return a.height},
gbj:function(a){return a.width},
"%":"ClientRect|DOMRect"},
mb:{"^":"kQ;",
gp:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.b_(b,a,null,null,null))
return a[b]},
a6:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isao:1,
$asao:function(){return[W.A]},
$asU:function(){return[W.A]},
$isl:1,
$asl:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]},
$asaw:function(){return[W.A]},
"%":"MozNamedAttrMap|NamedNodeMap"},
k4:{"^":"ef;dm:a<",
a2:function(a,b){var z,y,x,w,v,u
H.k(b,{func:1,ret:-1,args:[P.n,P.n]})
for(z=this.gaz(),y=z.length,x=this.a,w=J.a6(x),v=0;v<z.length;z.length===y||(0,H.x)(z),++v){u=z[v]
b.$2(u,w.aY(x,u))}},
gaz:function(){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.n])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.j(z,w)
v=H.e(z[w],"$isfl")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$ascd:function(){return[P.n,P.n]},
$asae:function(){return[P.n,P.n]}},
k7:{"^":"k4;a",
l:function(a,b){return J.cB(this.a,H.E(b))},
gp:function(a){return this.gaz().length}},
k8:{"^":"ja;a,b,c,$ti"},
m8:{"^":"k8;a,b,c,$ti"},
k9:{"^":"d1;a,b,c,d,e,$ti",n:{
V:function(a,b,c,d,e){var z,y
z=W.fI(new W.ka(c),W.a4)
y=z!=null
if(y&&!0){H.k(z,{func:1,args:[W.a4]})
if(y)J.fY(a,b,z,!1)}return new W.k9(0,a,b,z,!1,[e])}}},
ka:{"^":"t:27;a",
$1:function(a){return this.a.$1(H.e(a,"$isa4"))}},
bW:{"^":"a;a",
f8:function(a){var z,y
z=$.$get$dk()
if(z.a===0){for(y=0;y<262;++y)z.X(0,C.W[y],W.le())
for(y=0;y<12;++y)z.X(0,C.u[y],W.lf())}},
aN:function(a){return $.$get$fp().V(0,W.bm(a))},
av:function(a,b,c){var z,y,x
z=W.bm(a)
y=$.$get$dk()
x=y.l(0,H.f(z)+"::"+b)
if(x==null)x=y.l(0,"*::"+b)
if(x==null)return!1
return H.dr(x.$4(a,b,c,this))},
$isaB:1,
n:{
fo:function(a){var z,y
z=W.dG(null)
y=window.location
z=new W.bW(new W.kz(z,y))
z.f8(a)
return z},
m9:[function(a,b,c,d){H.e(a,"$isQ")
H.E(b)
H.E(c)
H.e(d,"$isbW")
return!0},"$4","le",16,0,26],
ma:[function(a,b,c,d){var z,y,x
H.e(a,"$isQ")
H.E(b)
H.E(c)
z=H.e(d,"$isbW").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","lf",16,0,26]}},
aw:{"^":"a;$ti",
gN:function(a){return new W.e3(a,this.gp(a),-1,[H.cu(this,a,"aw",0)])}},
em:{"^":"a;a",
aN:function(a){return C.a.dK(this.a,new W.ir(a))},
av:function(a,b,c){return C.a.dK(this.a,new W.iq(a,b,c))},
$isaB:1},
ir:{"^":"t:12;a",
$1:function(a){return H.e(a,"$isaB").aN(this.a)}},
iq:{"^":"t:12;a,b,c",
$1:function(a){return H.e(a,"$isaB").av(this.a,this.b,this.c)}},
kA:{"^":"a;",
fh:function(a,b,c,d){var z,y,x
this.a.a5(0,c)
z=b.cV(0,new W.kB())
y=b.cV(0,new W.kC())
this.b.a5(0,z)
x=this.c
x.a5(0,C.Y)
x.a5(0,y)},
aN:function(a){return this.a.V(0,W.bm(a))},
av:["eZ",function(a,b,c){var z,y
z=W.bm(a)
y=this.c
if(y.V(0,H.f(z)+"::"+b))return this.d.iC(c)
else if(y.V(0,"*::"+b))return this.d.iC(c)
else{y=this.b
if(y.V(0,H.f(z)+"::"+b))return!0
else if(y.V(0,"*::"+b))return!0
else if(y.V(0,H.f(z)+"::*"))return!0
else if(y.V(0,"*::*"))return!0}return!1}],
$isaB:1},
kB:{"^":"t:11;",
$1:function(a){return!C.a.V(C.u,H.E(a))}},
kC:{"^":"t:11;",
$1:function(a){return C.a.V(C.u,H.E(a))}},
kE:{"^":"kA;e,a,b,c,d",
av:function(a,b,c){if(this.eZ(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cB(a,"template")==="")return this.e.V(0,b)
return!1},
n:{
fx:function(){var z,y,x,w,v
z=P.n
y=P.ed(C.t,z)
x=H.u(C.t,0)
w=H.k(new W.kF(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.kE(y,P.bS(null,null,null,z),P.bS(null,null,null,z),P.bS(null,null,null,z),null)
y.fh(null,new H.ia(C.t,w,[x,z]),v,null)
return y}}},
kF:{"^":"t:28;",
$1:function(a){return"TEMPLATE::"+H.f(H.E(a))}},
kD:{"^":"a;",
aN:function(a){var z=J.O(a)
if(!!z.$iseB)return!1
z=!!z.$isd3
if(z&&W.bm(a)==="foreignObject")return!1
if(z)return!0
return!1},
av:function(a,b,c){if(b==="is"||C.i.bX(b,"on"))return!1
return this.aN(a)},
$isaB:1},
e3:{"^":"a;a,b,c,0d,$ti",
sdq:function(a){this.d=H.z(a,H.u(this,0))},
A:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sdq(J.fX(this.a,z))
this.c=z
return!0}this.sdq(null)
this.c=y
return!1},
gG:function(){return this.d},
$isaU:1},
aB:{"^":"a;"},
kz:{"^":"a;a,b",$ism1:1},
fC:{"^":"a;a",
d0:function(a){new W.kN(this).$2(a,null)},
b4:function(a,b){if(b==null)J.dF(a)
else J.bY(b,a)},
hJ:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fZ(a)
x=J.cB(y.gdm(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.ac(t)}v="element unprintable"
try{v=J.au(a)}catch(t){H.ac(t)}try{u=W.bm(a)
this.hI(H.e(a,"$isQ"),b,z,v,u,H.e(y,"$isae"),H.E(x))}catch(t){if(H.ac(t) instanceof P.aE)throw t
else{this.b4(a,b)
window
s="Removing corrupted element "+H.f(v)
if(typeof console!="undefined")window.console.warn(s)}}},
hI:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.b4(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aN(a)){this.b4(a,b)
window
z="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.av(a,"is",g)){this.b4(a,b)
window
z="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gaz()
y=H.c(z.slice(0),[H.u(z,0)])
for(x=f.gaz().length-1,z=f.a,w=J.a6(z);x>=0;--x){if(x>=y.length)return H.j(y,x)
v=y[x]
if(!this.a.av(a,J.h2(v),w.aY(z,v))){window
u="Removing disallowed attribute <"+H.f(e)+" "+v+'="'+H.f(w.aY(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.aY(z,v)
w.hw(z,v)}}if(!!J.O(a).$iseL)this.d0(a.content)},
$islU:1},
kN:{"^":"t:29;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.hJ(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.b4(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.h_(z)}catch(w){H.ac(w)
v=H.e(z,"$isA")
if(x){u=v.parentNode
if(u!=null)J.bY(u,v)}else J.bY(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.e(y,"$isA")}}},
k6:{"^":"F+hh;"},
km:{"^":"F+U;"},
kn:{"^":"km+aw;"},
ks:{"^":"F+U;"},
kt:{"^":"ks+aw;"},
kK:{"^":"F+U;"},
kL:{"^":"kK+aw;"},
kP:{"^":"F+U;"},
kQ:{"^":"kP+aw;"}}],["","",,P,{"^":"",
l5:function(a){var z,y
z=J.O(a)
if(!!z.$isc7){y=z.gdT(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fz(a.data,a.height,a.width)},
l4:function(a){if(a instanceof P.fz)return{data:a.a,height:a.b,width:a.c}
return a},
l2:function(a,b){var z={}
a.a2(0,new P.l3(z))
return z},
dY:function(){var z=$.dX
if(z==null){z=J.cz(window.navigator.userAgent,"Opera",0)
$.dX=z}return z},
hm:function(){var z,y
z=$.dU
if(z!=null)return z
y=$.dV
if(y==null){y=J.cz(window.navigator.userAgent,"Firefox",0)
$.dV=y}if(y)z="-moz-"
else{y=$.dW
if(y==null){y=!P.dY()&&J.cz(window.navigator.userAgent,"Trident/",0)
$.dW=y}if(y)z="-ms-"
else z=P.dY()?"-o-":"-webkit-"}$.dU=z
return z},
fz:{"^":"a;dT:a>,b,c",$isc7:1},
l3:{"^":"t:17;a",
$2:function(a,b){this.a[a]=b}},
hB:{"^":"cb;a,b",
gc7:function(){var z,y,x
z=this.b
y=H.a_(z,"U",0)
x=W.Q
return new H.i8(new H.di(z,H.k(new P.hC(),{func:1,ret:P.I,args:[y]}),[y]),H.k(new P.hD(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){J.dE(this.b.a,b)},
gp:function(a){return J.aZ(this.gc7().a)},
l:function(a,b){var z=this.gc7()
return z.b.$1(J.cA(z.a,b))},
gN:function(a){var z=P.i4(this.gc7(),!1,W.Q)
return new J.al(z,z.length,0,[H.u(z,0)])},
$asU:function(){return[W.Q]},
$asl:function(){return[W.Q]},
$asb:function(){return[W.Q]}},
hC:{"^":"t:25;",
$1:function(a){return!!J.O(H.e(a,"$isA")).$isQ}},
hD:{"^":"t:30;",
$1:function(a){return H.d(H.e(a,"$isA"),"$isQ")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cn:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ko:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ku:{"^":"a;$ti",
gbd:function(a){var z=this.a
if(typeof z!=="number")return z.L()
return H.z(z+this.c,H.u(this,0))},
gcr:function(a){var z=this.b
if(typeof z!=="number")return z.L()
return H.z(z+this.d,H.u(this,0))},
i:function(a){return"Rectangle ("+H.f(this.a)+", "+H.f(this.b)+") "+this.c+" x "+this.d},
w:function(a,b){var z,y,x,w
if(b==null)return!1
if(!H.bH(b,"$isaH",[P.ab],"$asaH"))return!1
z=this.a
y=J.a6(b)
x=y.gaT(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbh(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.L()
w=H.u(this,0)
if(H.z(z+this.c,w)===y.gbd(b)){if(typeof x!=="number")return x.L()
z=H.z(x+this.d,w)===y.gcr(b)}else z=!1}else z=!1}else z=!1
return z},
gZ:function(a){var z,y,x,w,v
z=this.a
y=J.aY(z)
x=this.b
w=J.aY(x)
if(typeof z!=="number")return z.L()
v=H.u(this,0)
z=H.z(z+this.c,v)
if(typeof x!=="number")return x.L()
v=H.z(x+this.d,v)
return P.ko(P.cn(P.cn(P.cn(P.cn(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
aH:{"^":"ku;aT:a>,bh:b>,bj:c>,b8:d>,$ti"}}],["","",,P,{"^":"",eB:{"^":"d3;",$iseB:1,"%":"SVGScriptElement"},d3:{"^":"Q;",
gdP:function(a){return new P.hB(a,new W.aj(a))},
aj:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.aB])
C.a.h(z,W.fo(null))
C.a.h(z,W.fx())
C.a.h(z,new W.kD())
c=new W.fC(new W.em(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.n).iS(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.aj(w)
u=z.gaE(z)
for(z=J.a6(v);x=u.firstChild,x!=null;)z.B(v,x)
return v},
$isd3:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"}}],["","",,P,{"^":""}],["","",,P,{"^":"",h6:{"^":"F;",$ish6:1,"%":"WebGLBuffer"},hF:{"^":"F;",$ishF:1,"%":"WebGLFramebuffer"},iH:{"^":"F;",$isiH:1,"%":"WebGLProgram"},cZ:{"^":"F;",
dG:function(a,b){return a.activeTexture(b)},
dL:function(a,b,c){return a.attachShader(b,c)},
ap:function(a,b,c){return a.bindBuffer(b,c)},
iG:function(a,b,c){return a.bindFramebuffer(b,c)},
aO:function(a,b,c){return a.bindTexture(b,c)},
iH:function(a,b,c){return a.blendFunc(b,c)},
dN:function(a,b,c,d){return a.bufferData(b,c,d)},
iJ:function(a,b){return a.clear(b)},
iK:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
iL:function(a,b){return a.clearDepth(b)},
iN:function(a,b){return a.compileShader(b)},
iU:function(a,b){return a.createShader(b)},
iW:function(a,b){return a.deleteProgram(b)},
iX:function(a,b){return a.deleteShader(b)},
j_:function(a,b){return a.depthFunc(b)},
j0:function(a,b){return a.disable(b)},
dV:function(a,b){return a.disableVertexAttribArray(b)},
j1:function(a,b,c,d,e){return a.drawElements(b,c,H.a0(d),H.a0(e))},
cA:function(a,b){return a.enable(b)},
dY:function(a,b){return a.enableVertexAttribArray(b)},
eA:function(a,b,c){return a.getActiveAttrib(b,c)},
eB:function(a,b,c){return a.getActiveUniform(b,c)},
eC:function(a,b,c){return a.getAttribLocation(b,c)},
d_:function(a,b){return a.getParameter(b)},
eG:function(a,b){return a.getProgramInfoLog(b)},
bV:function(a,b,c){return a.getProgramParameter(b,c)},
eI:function(a,b){return a.getShaderInfoLog(b)},
eJ:function(a,b,c){return a.getShaderParameter(b,c)},
eK:function(a,b,c){return a.getUniformLocation(b,c)},
jg:function(a,b){return a.linkProgram(b)},
jx:function(a,b,c){return a.pixelStorei(b,c)},
eR:function(a,b,c){return a.shaderSource(b,c)},
jM:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.O(g)
if(!!z.$isc7)y=!0
else y=!1
if(y){this.hY(a,b,c,d,e,f,P.l4(g))
return}if(!!z.$ise5)z=!0
else z=!1
if(z){this.hZ(a,b,c,d,e,f,g)
return}throw H.h(P.h4("Incorrect number or type of arguments"))},
jL:function(a,b,c,d,e,f,g){return this.jM(a,b,c,d,e,f,g,null,null,null)},
hY:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
hZ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bS:function(a,b,c,d){return a.texParameteri(b,c,d)},
H:function(a,b,c){return a.uniform1f(b,c)},
O:function(a,b,c){return a.uniform1i(b,c)},
t:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ew:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ex:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cU:function(a,b){return a.useProgram(b)},
jS:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
jT:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$iscZ:1,
"%":"WebGLRenderingContext"},iX:{"^":"F;",$isiX:1,"%":"WebGLShader"},ji:{"^":"F;",$isji:1,"%":"WebGLTexture"},jB:{"^":"F;",$isjB:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",S:{"^":"a;0a,0b,0c,0d,$ti",
sfV:function(a){this.a=H.i(a,"$isb",[H.a_(this,"S",0)],"$asb")},
sdv:function(a){this.b=H.k(a,{func:1,ret:P.I,args:[[P.l,H.a_(this,"S",0)]]})},
sds:function(a){this.c=H.k(a,{func:1,ret:-1,args:[P.y,[P.l,H.a_(this,"S",0)]]})},
sdw:function(a){this.d=H.k(a,{func:1,ret:-1,args:[P.y,[P.l,H.a_(this,"S",0)]]})},
bo:function(a){this.sfV(H.c([],[a]))
this.sdv(null)
this.sds(null)
this.sdw(null)},
d1:function(a,b,c){var z=H.a_(this,"S",0)
H.k(b,{func:1,ret:P.I,args:[[P.l,z]]})
z={func:1,ret:-1,args:[P.y,[P.l,z]]}
H.k(a,z)
H.k(c,z)
this.sdv(b)
this.sds(a)
this.sdw(c)},
aZ:function(a,b){return this.d1(a,null,b)},
du:function(a){var z
H.i(a,"$isl",[H.a_(this,"S",0)],"$asl")
z=this.b
if(z!=null)return z.$1(a)
return!0},
d5:function(a,b){var z
H.i(b,"$isl",[H.a_(this,"S",0)],"$asl")
z=this.c
if(z!=null)z.$2(a,b)},
gp:function(a){return this.a.length},
gN:function(a){var z=this.a
return new J.al(z,z.length,0,[H.u(z,0)])},
a6:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.j(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.a_(this,"S",0)
H.z(b,z)
z=[z]
if(this.du(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.d5(x,H.c([b],z))}},
a5:function(a,b){var z,y
H.i(b,"$isl",[H.a_(this,"S",0)],"$asl")
if(this.du(b)){z=this.a
y=z.length
C.a.a5(z,b)
this.d5(y,b)}},
$isl:1,
n:{
cL:function(a){var z=new O.S([a])
z.bo(a)
return z}}},cV:{"^":"a;0a,0b",
sc9:function(a){this.a=H.i(a,"$isb",[V.af],"$asb")},
gp:function(a){return this.a.length},
gq:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
f4:function(a){var z=this.b
if(!(z==null))z.E(a)},
aF:function(){return this.f4(null)},
gY:function(){var z=this.a
if(z.length>0)return C.a.gbN(z)
else return V.b3()},
bQ:function(a){var z=this.a
if(a==null)C.a.h(z,V.b3())
else C.a.h(z,a)
this.aF()},
aB:function(){var z=this.a
if(z.length>0){z.pop()
this.aF()}}}}],["","",,E,{"^":"",cD:{"^":"a;"},an:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0ag:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sf5:function(a,b){this.y=H.i(b,"$isS",[E.an],"$asS")},
sag:function(a){this.z=H.e(a,"$isbn")},
sbW:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gq().M(0,this.geo())
y=this.c
if(y!=null)y.gq().h(0,this.geo())
x=new D.H("shape",z,this.c,this,[F.eD])
x.b=!0
this.aV(x)}},
am:function(a){var z
for(z=this.y.a,z=new J.al(z,z.length,0,[H.u(z,0)]);z.A();)z.d.am(a)},
aa:function(a){var z,y
z=a.dx
C.a.h(z.a,z.gY())
z.aF()
a.cP(this.f)
z=a.dy
y=(z&&C.a).gbN(z)
if(y!=null&&this.d!=null)y.eq(a,this)
for(z=this.y.a,z=new J.al(z,z.length,0,[H.u(z,0)]);z.A();)z.d.aa(a)
a.cO()
a.dx.aB()},
gq:function(){var z=this.z
if(z==null){z=D.C()
this.z=z}return z},
aV:function(a){var z=this.z
if(!(z==null))z.E(a)},
a9:function(){return this.aV(null)},
jo:[function(a){H.e(a,"$isv")
this.e=null
this.aV(a)},function(){return this.jo(null)},"kH","$1","$0","geo",0,2,0],
jm:[function(a){this.aV(H.e(a,"$isv"))},function(){return this.jm(null)},"kF","$1","$0","gen",0,2,0],
kE:[function(a,b){var z,y,x,w,v,u,t
H.i(b,"$isl",[E.an],"$asl")
for(z=b.length,y=this.gen(),x={func:1,ret:-1,args:[D.v]},w=[x],v=0;v<b.length;b.length===z||(0,H.x)(b),++v){u=b[v]
if(u!=null){if(u.gag()==null){t=new D.bn()
t.sac(null)
t.sb2(null)
t.c=null
t.d=0
u.sag(t)}t=u.gag()
t.toString
H.k(y,x)
if(t.a==null)t.sac(H.c([],w))
t=t.a;(t&&C.a).h(t,y)}}this.a9()},"$2","gjl",8,0,6],
kG:[function(a,b){var z,y
H.i(b,"$isl",[E.an],"$asl")
for(z=b.gN(b),y=this.gen();z.A();)z.gG().gq().M(0,y)
this.a9()},"$2","gjn",8,0,6],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaA:1,
n:{
e2:function(a,b,c,d,e,f){var z=new E.an()
z.a=d
z.b=!0
z.sf5(0,O.cL(E.an))
z.y.aZ(z.gjl(),z.gjn())
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
z.sbW(0,e)
return z}}},iN:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
shX:function(a){this.dy=H.i(a,"$isb",[O.bv],"$asb")},
shS:function(a){this.fr=H.i(a,"$isae",[P.n,A.ch],"$asae")},
f1:function(a,b){var z,y
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
z=new O.cV()
y=[V.af]
z.sc9(H.c([],y))
z.b=null
z.gq().h(0,new E.iP(this))
this.cy=z
z=new O.cV()
z.sc9(H.c([],y))
z.b=null
z.gq().h(0,new E.iQ(this))
this.db=z
z=new O.cV()
z.sc9(H.c([],y))
z.b=null
z.gq().h(0,new E.iR(this))
this.dx=z
this.shX(H.c([],[O.bv]))
z=this.dy;(z&&C.a).h(z,null)
this.shS(new H.b1(0,0,[P.n,A.ch]))},
gjz:function(){var z=this.z
if(z==null){z=this.cy.gY().u(0,this.db.gY())
this.z=z}return z},
cP:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gbN(z):a;(z&&C.a).h(z,y)},
cO:function(){var z=this.dy
if(z.length>1)z.pop()},
dJ:function(a){var z=a.b
if(z.length===0)throw H.h(P.p("May not cache a shader with no name."))
if(this.fr.dR(z))throw H.h(P.p('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.X(0,z,a)},
n:{
iO:function(a,b){var z=new E.iN(a,b)
z.f1(a,b)
return z}}},iP:{"^":"t:7;a",
$1:function(a){var z
H.e(a,"$isv")
z=this.a
z.z=null
z.ch=null}},iQ:{"^":"t:7;a",
$1:function(a){var z
H.e(a,"$isv")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},iR:{"^":"t:7;a",
$1:function(a){var z
H.e(a,"$isv")
z=this.a
z.ch=null
z.cx=null}},jl:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0ag:x<,0y,0z,0Q,0ch,0cx,0cy",
sag:function(a){this.x=H.e(a,"$isbn")},
f7:[function(a){H.e(a,"$isv")
this.jF()},function(){return this.f7(null)},"f6","$1","$0","gd6",0,2,0],
gja:function(){var z,y,x
z=Date.now()
y=C.h.a1(P.dZ(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.am(z,!1)
return x/y},
dA:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.u()
if(typeof z!=="number")return H.B(z)
x=C.k.cH(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.u()
w=C.k.cH(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.eR(C.q,this.gjE())}},
jF:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.k(new E.jn(this),{func:1,ret:-1,args:[P.ab]})
C.G.fG(z)
C.G.hD(z,W.fI(y,P.ab))}},"$0","gjE",0,0,3],
jD:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dA()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.am(w,!1)
x.y=P.dZ(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sp(w.a,0)
w.aF()
w=x.db
C.a.sp(w.a,0)
w.aF()
w=x.dx
C.a.sp(w.a,0)
w.aF()
w=x.dy;(w&&C.a).sp(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aa(this.e)}x=this.z
if(!(x==null))x.E(null)}catch(v){z=H.ac(v)
y=H.bf(v)
P.dB("Error: "+H.f(z))
P.dB("Stack: "+H.f(y))
throw H.h(z)}},
n:{
jm:function(a,b,c,d,e){var z,y,x,w
z=J.O(a)
if(!!z.$iscH)return E.eQ(a,!0,!0,!0,!1)
y=W.cI(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gdP(a).h(0,y)
w=E.eQ(y,!0,!0,!0,!1)
w.a=a
return w},
eQ:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jl()
y=P.i2(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.n,null)
x=C.o.bU(a,"webgl",y)
x=H.e(x==null?C.o.bU(a,"experimental-webgl",y):x,"$iscZ")
if(x==null)H.r(P.p("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.iO(x,a)
w=new T.jj(x)
w.b=H.a0((x&&C.b).d_(x,3379))
w.c=H.a0(C.b.d_(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.jH(a)
v=new X.hX()
v.c=new X.az(!1,!1,!1)
v.shu(P.bS(null,null,null,P.y))
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
w.sfH(H.c([],[[P.d1,P.a]]))
v=w.z
u=document
t=W.ap
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.V(u,"contextmenu",H.k(w.gh8(),s),!1,t))
v=w.z
r=W.a4
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.V(a,"focus",H.k(w.ghb(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.V(a,"blur",H.k(w.gh5(),q),!1,r))
v=w.z
p=W.bp
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.V(u,"keyup",H.k(w.ghd(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.V(u,"keydown",H.k(w.ghc(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.V(a,"mousedown",H.k(w.ghg(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.V(a,"mouseup",H.k(w.ghi(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.V(a,"mousemove",H.k(w.ghh(),s),!1,t))
p=w.z
o=W.bA;(p&&C.a).h(p,W.V(a,H.E(W.hu(a)),H.k(w.ghj(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.V(u,"mousemove",H.k(w.gh9(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.V(u,"mouseup",H.k(w.gha(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.V(u,"pointerlockchange",H.k(w.ghk(),q),!1,r))
r=w.z
q=W.b7
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.V(a,"touchstart",H.k(w.ghs(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.V(a,"touchend",H.k(w.ghq(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.V(a,"touchmove",H.k(w.ghr(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.am(Date.now(),!1)
z.cy=0
z.dA()
return z}}},jn:{"^":"t:43;a",
$1:function(a){var z
H.lt(a)
z=this.a
if(z.ch){z.ch=!1
z.jD()}}}}],["","",,Z,{"^":"",fh:{"^":"a;a,b",$islG:1,n:{
fj:function(a,b,c){var z
H.i(c,"$isb",[P.y],"$asb")
z=a.createBuffer()
C.b.ap(a,b,z)
C.b.dN(a,b,new Int16Array(H.bD(c)),35044)
C.b.ap(a,b,null)
return new Z.fh(b,z)}}},dL:{"^":"cD;a,b,c,d,e",
a0:function(a){var z,y,x
try{y=a.a
C.b.dY(y,this.e)
C.b.jS(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.ac(x)
y=P.p('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.f(z))
throw H.h(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.f(this.e)+"]"}},fi:{"^":"a;a",$islH:1},cG:{"^":"a;a,0b,c,d",
sfR:function(a){this.b=H.i(a,"$isb",[Z.c8],"$asb")},
ay:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
a0:function(a){var z,y
z=this.a
C.b.ap(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].a0(a)},
aW:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.b.dV(x,z[y].e)
C.b.ap(x,this.a.a,null)},
aa:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.j(w,x)
v=w[x]
w=v.c
u=w.a
C.b.ap(y,u,w.b)
C.b.j1(y,v.a,v.b,5123,0)
C.b.ap(y,u,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.n]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.au(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(y,", ")+"\nAttrs:   "+C.a.k(u,", ")},
$islY:1},c8:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b5(this.c)+"'")+"]"}},b8:{"^":"a;a",
gd2:function(a){var z,y
z=this.a
y=(z&$.$get$at().a)!==0?3:0
if((z&$.$get$aL().a)!==0)y+=3
if((z&$.$get$aK().a)!==0)y+=3
if((z&$.$get$aM().a)!==0)y+=2
if((z&$.$get$aN().a)!==0)y+=3
if((z&$.$get$by().a)!==0)y+=3
if((z&$.$get$bz().a)!==0)y+=4
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
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$by()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bz()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b9()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aJ()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fg()},
w:function(a,b){if(b==null)return!1
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
if((y&$.$get$by().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bz().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b9().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aJ().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.k(z,"|")},
n:{
ai:function(a){return new Z.b8(a)}}}}],["","",,D,{"^":"",dO:{"^":"a;"},bn:{"^":"a;0a,0b,0c,0d",
sac:function(a){this.a=H.i(a,"$isb",[{func:1,ret:-1,args:[D.v]}],"$asb")},
sb2:function(a){this.b=H.i(a,"$isb",[{func:1,ret:-1,args:[D.v]}],"$asb")},
h:function(a,b){var z={func:1,ret:-1,args:[D.v]}
H.k(b,z)
if(this.a==null)this.sac(H.c([],[z]))
z=this.a;(z&&C.a).h(z,b)},
M:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[D.v]})
z=this.a
z=z==null?null:C.a.V(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).M(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.V(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).M(z,b)||y}return y},
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
if(a==null){a=new D.v(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.a2(y,new D.hy(z))
y=this.b
if(!(y==null))C.a.a2(y,new D.hz(z))
z=this.b
if(!(z==null))C.a.sp(z,0)
return!0},
j3:function(){return this.E(null)},
jG:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.E(y)}}},
aD:function(){return this.jG(!0,!1)},
n:{
C:function(){var z=new D.bn()
z.sac(null)
z.sb2(null)
z.c=null
z.d=0
return z}}},hy:{"^":"t:14;a",
$1:function(a){var z
H.k(a,{func:1,ret:-1,args:[D.v]})
z=this.a.a
z.b
a.$1(z)}},hz:{"^":"t:14;a",
$1:function(a){var z
H.k(a,{func:1,ret:-1,args:[D.v]})
z=this.a.a
z.b
a.$1(z)}},v:{"^":"a;a,0b"},bM:{"^":"v;c,d,a,0b,$ti"},bN:{"^":"v;c,d,a,0b,$ti"},H:{"^":"v;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}}],["","",,X,{"^":"",dM:{"^":"a;a,b",
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dM))return!1
if(this.a!=b.a)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}},ea:{"^":"a;a,b",
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ea))return!1
if(this.a!=b.a)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}},hX:{"^":"a;0a,0b,0c,0d",
shu:function(a){this.d=H.i(a,"$iseC",[P.y],"$aseC")},
ju:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jq:function(a){this.c=a.b
this.d.M(0,a.a)
return!1}},ee:{"^":"cf;x,y,c,d,e,a,0b"},i6:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
b1:function(a,b){var z,y,x,w,v,u,t,s
z=new P.am(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.u()
v=b.b
u=this.ch
if(typeof v!=="number")return v.u()
t=new V.a3(y.a+x*w,y.b+v*u)
u=this.a.gaP()
s=new X.bq(a,V.aG(),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cN:function(a,b){this.r=a.a
return!1},
bb:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.eM()
if(typeof z!=="number")return z.ey()
this.r=(z&~y)>>>0
return!1},
ba:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.b1(a,b))
return!0},
jv:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaP()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.u()
t=a.b
s=this.cy
if(typeof t!=="number")return t.u()
w=new X.cW(new V.R(v*u,t*s),y,x,new P.am(w,!1),this)
w.b=!0
z.E(w)
return!0},
hf:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.am(Date.now(),!1)
y=this.f
x=new X.ee(c,a,this.a.gaP(),b,z,this)
x.b=!0
y.E(x)
this.y=z
this.x=V.aG()}},az:{"^":"a;a,b,c",
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.az))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},bq:{"^":"cf;x,y,z,Q,ch,c,d,e,a,0b"},il:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
c5:function(a,b,c){var z,y,x
z=new P.am(Date.now(),!1)
y=this.a.gaP()
x=new X.bq(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cN:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.E(this.c5(a,b,!0))
return!0},
bb:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.eM()
if(typeof z!=="number")return z.ey()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.E(this.c5(a,b,!0))
return!0},
ba:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.c5(a,b,!1))
return!0},
jw:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaP()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.u()
u=a.b
t=this.ch
if(typeof u!=="number")return u.u()
x=new X.cW(new V.R(w*v,u*t),y,b,new P.am(x,!1),this)
x.b=!0
z.E(x)
return!0},
gdX:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
gbT:function(){var z=this.c
if(z==null){z=D.C()
this.c=z}return z},
gem:function(){var z=this.d
if(z==null){z=D.C()
this.d=z}return z}},cW:{"^":"cf;x,c,d,e,a,0b"},cf:{"^":"v;"},eU:{"^":"cf;x,y,z,Q,ch,c,d,e,a,0b"},jq:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
b1:function(a,b){var z,y,x,w
H.i(a,"$isb",[V.a3],"$asb")
z=new P.am(Date.now(),!1)
y=a.length>0?a[0]:V.aG()
x=this.a.gaP()
w=new X.eU(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
jt:function(a){var z
H.i(a,"$isb",[V.a3],"$asb")
z=this.b
if(z==null)return!1
z.E(this.b1(a,!0))
return!0},
jr:function(a){var z
H.i(a,"$isb",[V.a3],"$asb")
z=this.c
if(z==null)return!1
z.E(this.b1(a,!0))
return!0},
js:function(a){var z
H.i(a,"$isb",[V.a3],"$asb")
z=this.d
if(z==null)return!1
z.E(this.b1(a,!1))
return!0}},jH:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
sfH:function(a){this.z=H.i(a,"$isb",[[P.d1,P.a]],"$asb")},
gaP:function(){var z=this.a
return V.ez(0,0,C.o.gdQ(z).c,C.o.gdQ(z).d)},
dj:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.ea(z,new X.az(y,a.altKey,a.shiftKey))},
aM:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.az(y,a.altKey,a.shiftKey)},
cm:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.az(y,a.altKey,a.shiftKey)},
au:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.I()
v=z.top
if(typeof x!=="number")return x.I()
return new V.a3(y-w,x-v)},
b3:function(a){return new V.R(a.movementX,a.movementY)},
ci:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.a3])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
t=C.k.al(u.pageX)
C.k.al(u.pageY)
s=z.left
C.k.al(u.pageX)
C.a.h(y,new V.a3(t-s,C.k.al(u.pageY)-z.top))}return y},
as:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dM(z,new X.az(y,a.altKey,a.shiftKey))},
ca:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.I()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.I()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
kf:[function(a){this.f=!0},"$1","ghb",4,0,9],
k9:[function(a){this.f=!1},"$1","gh5",4,0,9],
kc:[function(a){H.e(a,"$isap")
if(this.f&&this.ca(a))a.preventDefault()},"$1","gh8",4,0,4],
kh:[function(a){var z
H.e(a,"$isbp")
if(!this.f)return
z=this.dj(a)
this.b.ju(z)},"$1","ghd",4,0,16],
kg:[function(a){var z
H.e(a,"$isbp")
if(!this.f)return
z=this.dj(a)
this.b.jq(z)},"$1","ghc",4,0,16],
kj:[function(a){var z,y,x,w
H.e(a,"$isap")
z=this.a
z.focus()
this.f=!0
this.aM(a)
if(this.x){y=this.as(a)
x=this.b3(a)
if(this.d.cN(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.as(a)
w=this.au(a)
if(this.c.cN(y,w))a.preventDefault()},"$1","ghg",4,0,4],
kl:[function(a){var z,y,x
H.e(a,"$isap")
this.aM(a)
z=this.as(a)
if(this.x){y=this.b3(a)
if(this.d.bb(z,y))a.preventDefault()
return}if(this.r)return
x=this.au(a)
if(this.c.bb(z,x))a.preventDefault()},"$1","ghi",4,0,4],
ke:[function(a){var z,y,x
H.e(a,"$isap")
if(!this.ca(a)){this.aM(a)
z=this.as(a)
if(this.x){y=this.b3(a)
if(this.d.bb(z,y))a.preventDefault()
return}if(this.r)return
x=this.au(a)
if(this.c.bb(z,x))a.preventDefault()}},"$1","gha",4,0,4],
kk:[function(a){var z,y,x
H.e(a,"$isap")
this.aM(a)
z=this.as(a)
if(this.x){y=this.b3(a)
if(this.d.ba(z,y))a.preventDefault()
return}if(this.r)return
x=this.au(a)
if(this.c.ba(z,x))a.preventDefault()},"$1","ghh",4,0,4],
kd:[function(a){var z,y,x
H.e(a,"$isap")
if(!this.ca(a)){this.aM(a)
z=this.as(a)
if(this.x){y=this.b3(a)
if(this.d.ba(z,y))a.preventDefault()
return}if(this.r)return
x=this.au(a)
if(this.c.ba(z,x))a.preventDefault()}},"$1","gh9",4,0,4],
km:[function(a){var z,y
H.e(a,"$isbA")
this.aM(a)
z=new V.R((a&&C.F).giY(a),C.F.giZ(a)).v(0,180)
if(this.x){if(this.d.jv(z))a.preventDefault()
return}if(this.r)return
y=this.au(a)
if(this.c.jw(z,y))a.preventDefault()},"$1","ghj",4,0,36],
kn:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.as(this.y)
x=this.au(this.y)
this.d.hf(y,x,z)}},"$1","ghk",4,0,9],
kv:[function(a){var z
H.e(a,"$isb7")
this.a.focus()
this.f=!0
this.cm(a)
z=this.ci(a)
if(this.e.jt(z))a.preventDefault()},"$1","ghs",4,0,10],
kt:[function(a){var z
H.e(a,"$isb7")
this.cm(a)
z=this.ci(a)
if(this.e.jr(z))a.preventDefault()},"$1","ghq",4,0,10],
ku:[function(a){var z
H.e(a,"$isb7")
this.cm(a)
z=this.ci(a)
if(this.e.js(z))a.preventDefault()},"$1","ghr",4,0,10]}}],["","",,D,{"^":"",c3:{"^":"a;0a,0b,0c,0d",
gq:function(){var z=this.d
if(z==null){z=D.C()
this.d=z}return z},
aG:[function(a){var z
H.e(a,"$isv")
z=this.d
if(!(z==null))z.E(a)},function(){return this.aG(null)},"jV","$1","$0","gfa",0,2,0],
$isY:1,
$isaA:1},Y:{"^":"a;",$isaA:1},hY:{"^":"S;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
sfF:function(a){this.e=H.i(a,"$isb",[D.c3],"$asb")},
sht:function(a){this.f=H.i(a,"$isb",[D.es],"$asb")},
shU:function(a){this.r=H.i(a,"$isb",[D.eG],"$asb")},
si4:function(a){this.x=H.i(a,"$isb",[D.eN],"$asb")},
si5:function(a){this.y=H.i(a,"$isb",[D.eO],"$asb")},
si6:function(a){this.z=H.i(a,"$isb",[D.eP],"$asb")},
gq:function(){var z=this.Q
if(z==null){z=D.C()
this.Q=z}return z},
aG:function(a){var z=this.Q
if(!(z==null))z.E(a)},
he:[function(a){var z
H.e(a,"$isv")
z=this.ch
if(!(z==null))z.E(a)},function(){return this.he(null)},"ki","$1","$0","gdt",0,2,0],
ko:[function(a){var z,y,x
H.i(a,"$isl",[D.Y],"$asl")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.x)(a),++y){x=a[y]
if(x==null||this.f9(x))return!1}return!0},"$1","ghl",4,0,40],
k6:[function(a,b){var z,y,x,w,v,u,t,s
z=D.Y
H.i(b,"$isl",[z],"$asl")
for(y=b.length,x=this.gdt(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=H.e(b[u],"$isY")
if(t instanceof D.c3)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bn()
s.sac(null)
s.sb2(null)
s.c=null
s.d=0
t.d=s}H.k(x,w)
if(s.a==null)s.sac(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}z=new D.bM(a,b,this,[z])
z.b=!0
this.aG(z)},"$2","gh2",8,0,18],
kq:[function(a,b){var z,y,x,w
z=D.Y
H.i(b,"$isl",[z],"$asl")
for(y=b.gN(b),x=this.gdt();y.A();){w=y.gG()
C.a.M(this.e,w)
w.gq().M(0,x)}z=new D.bN(a,b,this,[z])
z.b=!0
this.aG(z)},"$2","ghn",8,0,18],
f9:function(a){var z=C.a.V(this.e,a)
return z},
$asl:function(){return[D.Y]},
$asS:function(){return[D.Y]}},es:{"^":"a;",$isY:1,$isaA:1},eG:{"^":"a;",$isY:1,$isaA:1},eN:{"^":"a;",$isY:1,$isaA:1},eO:{"^":"a;",$isY:1,$isaA:1},eP:{"^":"a;",$isY:1,$isaA:1}}],["","",,V,{"^":"",
lJ:[function(a,b){if(typeof b!=="number")return b.I()
if(typeof a!=="number")return H.B(a)
return Math.abs(b-a)<=1e-9},"$2","ij",8,0,37],
lE:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.k.eL(a-b,z)
return(a<0?a+z:a)+b},
K:function(a,b,c){if(a==null)return C.i.aA("null",c)
return C.i.aA(C.k.eu($.m.$2(a,0)?0:a,b),c+b+1)},
be:function(a,b,c){var z,y,x,w,v,u
H.i(a,"$isb",[P.w],"$asb")
z=H.c([],[P.n])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.x)(a),++w){v=V.K(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.j(z,u)
C.a.X(z,u,C.i.aA(z[u],x))}return z},
dA:function(a,b){return C.k.jO(Math.pow(b,C.O.cH(Math.log(H.l1(a))/Math.log(b))))},
W:{"^":"a;a,b,c",
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}},
aR:{"^":"a;a,b,c,d",
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aR))return!1
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
ej:{"^":"a;a,b,c,d,e,f,r,x,y",
ab:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.w])
return z},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ej))return!1
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
if(0>=z)return H.j(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.j(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.j(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.j(y,1)
s=" "+y[1]+", "
if(1>=u)return H.j(x,1)
s=s+x[1]+", "
if(1>=t)return H.j(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.j(y,2)
z=" "+y[2]+", "
if(2>=u)return H.j(x,2)
z=z+x[2]+", "
if(2>=t)return H.j(w,2)
return s+(z+w[2]+"]")}},
af:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ab:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.w])
return z},
cJ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
return V.ay((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
u:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.e(a7,"$isaf")
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
return V.ay(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cT:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.M(this.a*z+this.b*y+this.c*x,this.e*z+this.f*y+this.r*x,this.y*z+this.z*y+this.Q*x)},
bi:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.Z(this.a*z+this.b*y+this.c*x+this.d,this.e*z+this.f*y+this.r*x+this.x,this.y*z+this.z*y+this.Q*x+this.ch)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.af))return!1
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
i:function(a){return this.S()},
ej:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.w]
y=V.be(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.be(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.be(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.be(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.j(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.j(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.j(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.j(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.j(y,1)
q=q+y[1]+", "
if(1>=t)return H.j(x,1)
q=q+x[1]+", "
if(1>=s)return H.j(w,1)
q=q+w[1]+", "
if(1>=r)return H.j(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.j(y,2)
u=u+y[2]+", "
if(2>=t)return H.j(x,2)
u=u+x[2]+", "
if(2>=s)return H.j(w,2)
u=u+w[2]+", "
if(2>=r)return H.j(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.j(y,3)
q=q+y[3]+", "
if(3>=t)return H.j(x,3)
q=q+x[3]+", "
if(3>=s)return H.j(w,3)
q=q+w[3]+", "
if(3>=r)return H.j(v,3)
return u+(q+v[3]+"]")},
S:function(){return this.ej("",3,0)},
F:function(a){return this.ej(a,3,0)},
n:{
b3:function(){var z=$.el
if(z==null){z=V.ay(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.el=z}return z},
ay:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.af(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ek:function(a,b,c){var z,y,x,w,v,u,t,s
z=c.v(0,Math.sqrt(c.C(c)))
y=b.ax(z)
x=y.v(0,Math.sqrt(y.C(y)))
w=z.ax(x)
v=new V.M(a.a,a.b,a.c)
u=x.P(0).C(v)
t=w.P(0).C(v)
s=z.P(0).C(v)
return V.ay(x.a,w.a,z.a,u,x.b,w.b,z.b,t,x.c,w.c,z.c,s,0,0,0,1)}}},
a3:{"^":"a;a,b",
I:function(a,b){return new V.a3(this.a-b.a,this.b-b.b)},
w:function(a,b){var z
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
aG:function(){var z=$.et
if(z==null){z=new V.a3(0,0)
$.et=z}return z}}},
Z:{"^":"a;a,b,c",
L:function(a,b){return new V.Z(this.a+b.a,this.b+b.b,this.c+b.c)},
I:function(a,b){return new V.Z(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){return new V.Z(this.a*b,this.b*b,this.c*b)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"},
n:{
eu:function(){var z=$.bs
if(z==null){z=new V.Z(0,0,0)
$.bs=z}return z}}},
bT:{"^":"a;a,b,c,d",
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bT))return!1
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
ey:{"^":"a;a,b,c,d",
ga8:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ey))return!1
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
ez:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ey(a,b,c,d)}}},
R:{"^":"a;a,b",
jf:[function(a){return Math.sqrt(this.C(this))},"$0","gp",1,0,19],
C:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.u()
if(typeof y!=="number")return H.B(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.u()
if(typeof w!=="number")return H.B(w)
return z*y+x*w},
u:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.u()
y=this.b
if(typeof y!=="number")return y.u()
return new V.R(z*b,y*b)},
v:function(a,b){var z,y
if($.m.$2(b,0)){z=$.f7
if(z==null){z=new V.R(0,0)
$.f7=z}return z}z=this.a
if(typeof z!=="number")return z.v()
y=this.b
if(typeof y!=="number")return y.v()
return new V.R(z/b,y/b)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}},
M:{"^":"a;a,b,c",
jf:[function(a){return Math.sqrt(this.C(this))},"$0","gp",1,0,19],
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ax:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.M(z*y-x*w,x*v-u*y,u*w-z*v)},
L:function(a,b){return new V.M(this.a+b.a,this.b+b.b,this.c+b.c)},
P:function(a){return new V.M(-this.a,-this.b,-this.c)},
u:function(a,b){return new V.M(this.a*b,this.b*b,this.c*b)},
v:function(a,b){if($.m.$2(b,0))return V.bx()
return new V.M(this.a/b,this.b/b,this.c/b)},
el:function(){if(!$.m.$2(0,this.a))return!1
if(!$.m.$2(0,this.b))return!1
if(!$.m.$2(0,this.c))return!1
return!0},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.M))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"},
n:{
bx:function(){var z=$.fb
if(z==null){z=new V.M(0,0,0)
$.fb=z}return z},
fc:function(){var z=$.fa
if(z==null){z=new V.M(0,1,0)
$.fa=z}return z},
fd:function(){var z=$.ck
if(z==null){z=new V.M(0,0,1)
$.ck=z}return z}}}}],["","",,U,{"^":"",hd:{"^":"dO;0a,0b,0c,0d,0e,0f,0r,0x,0y",
c1:function(a){var z=V.lE(a,this.c,this.b)
return z},
gq:function(){var z=this.y
if(z==null){z=D.C()
this.y=z}return z},
R:function(a){var z=this.y
if(!(z==null))z.E(a)},
scW:function(a,b){},
scK:function(a){var z,y
z=this.b
if(!$.m.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.c1(z)}z=new D.H("maximumLocation",y,this.b,this,[P.w])
z.b=!0
this.R(z)}},
scM:function(a){var z,y
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.c1(z)}z=new D.H("minimumLocation",y,this.c,this,[P.w])
z.b=!0
this.R(z)}},
sa7:function(a,b){var z,y
b=this.c1(b)
z=this.d
if(!$.m.$2(z,b)){y=this.d
this.d=b
z=new D.H("location",y,b,this,[P.w])
z.b=!0
this.R(z)}},
scL:function(a){var z,y,x
z=this.e
if(!$.m.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.H("maximumVelocity",y,a,this,[P.w])
z.b=!0
this.R(z)}},
sT:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.m.$2(z,a)){x=this.f
this.f=a
z=new D.H("velocity",x,a,this,[P.w])
z.b=!0
this.R(z)}},
scw:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.m.$2(z,a)){y=this.x
this.x=a
z=new D.H("dampening",y,a,this,[P.w])
z.b=!0
this.R(z)}},
am:function(a){var z,y,x,w
z=this.f
if($.m.$2(z,0)){z=this.r
z=!$.m.$2(z,0)}else z=!0
if(z){y=this.f+this.r*a
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa7(0,this.d+y*a)
z=this.x
if(!$.m.$2(z,0)){w=y*Math.pow(1-this.x,a)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sT(y)}},
n:{
cM:function(){var z=new U.hd()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dQ:{"^":"a8;0a,0b",
gq:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
aX:function(a,b){return this.a},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dQ))return!1
return J.P(this.a,b.a)},
i:function(a){return"Constant: "+this.a.F("          ")},
n:{
dR:function(a){var z=new U.dQ()
z.a=a
return z}}},e4:{"^":"S;0e,0f,0r,0a,0b,0c,0d",
gq:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
R:[function(a){var z
H.e(a,"$isv")
z=this.e
if(!(z==null))z.E(a)},function(){return this.R(null)},"ah","$1","$0","gaL",0,2,0],
k5:[function(a,b){var z,y,x,w,v,u,t,s
z=U.a8
H.i(b,"$isl",[z],"$asl")
for(y=b.length,x=this.gaL(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){s=t.gq()
s.toString
H.k(x,w)
if(s.a==null)s.sac(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.bM(a,b,this,[z])
z.b=!0
this.R(z)},"$2","gh1",8,0,20],
kp:[function(a,b){var z,y,x
z=U.a8
H.i(b,"$isl",[z],"$asl")
for(y=b.gN(b),x=this.gaL();y.A();)y.gG().gq().M(0,x)
z=new D.bN(a,b,this,[z])
z.b=!0
this.R(z)},"$2","ghm",8,0,20],
aX:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(typeof z!=="number")return z.an()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.al(z,z.length,0,[H.u(z,0)]),x=null;z.A();){y=z.d
if(y!=null){w=y.aX(a,b)
if(w!=null)x=x==null?w:w.u(0,x)}}this.f=x==null?V.b3():x
z=this.e
if(!(z==null))z.aD()}return this.f},
w:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e4))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.j(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.j(w,y)
if(!J.P(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asl:function(){return[U.a8]},
$asS:function(){return[U.a8]},
$isa8:1},a8:{"^":"dO;"},jI:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gq:function(){var z=this.cy
if(z==null){z=D.C()
this.cy=z}return z},
R:[function(a){var z
H.e(a,"$isv")
z=this.cy
if(!(z==null))z.E(a)},function(){return this.R(null)},"ah","$1","$0","gaL",0,2,0],
b5:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdX().h(0,this.gcb())
this.a.c.gem().h(0,this.gcc())
this.a.c.gbT().h(0,this.gcd())
return!0},
fY:[function(a){H.e(a,"$isv")
if(!J.P(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gcb",4,0,1],
fZ:[function(a){var z,y,x,w,v,u,t
a=H.d(H.e(a,"$isv"),"$isbq")
if(!this.y)return
if(this.x){z=a.d.I(0,a.y)
z=new V.R(z.a,z.b)
z=z.C(z)
y=this.r
if(typeof y!=="number")return H.B(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.I(0,a.y)
z=new V.R(y.a,y.b).u(0,2).v(0,z.ga8())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.u()
x=this.e
if(typeof x!=="number")return H.B(x)
y.sT(z*10*x)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=new V.R(x.a,x.b).u(0,2).v(0,z.ga8())
x=this.b
v=w.a
if(typeof v!=="number")return v.P()
u=this.e
if(typeof u!=="number")return H.B(u)
t=this.z
if(typeof t!=="number")return H.B(t)
x.sa7(0,-v*u+t)
this.b.sT(0)
y=y.I(0,a.z)
this.Q=new V.R(y.a,y.b).u(0,2).v(0,z.ga8())}this.ah()},"$1","gcc",4,0,1],
h_:[function(a){var z,y,x
H.e(a,"$isv")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.C(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.u()
x=this.e
if(typeof x!=="number")return H.B(x)
z.sT(y*10*x)
this.ah()}},"$1","gcd",4,0,1],
aX:function(a,b){var z,y,x,w,v
z=this.ch
y=a.e
if(typeof z!=="number")return z.an()
if(z<y){this.ch=y
x=a.y
this.b.am(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.ay(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa8:1},jJ:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gq:function(){var z=this.fx
if(z==null){z=D.C()
this.fx=z}return z},
R:[function(a){var z
H.e(a,"$isv")
z=this.fx
if(!(z==null))z.E(a)},function(){return this.R(null)},"ah","$1","$0","gaL",0,2,0],
b5:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gdX().h(0,this.gcb())
this.a.c.gem().h(0,this.gcc())
this.a.c.gbT().h(0,this.gcd())
z=this.a.d
y=z.f
if(y==null){y=D.C()
z.f=y
z=y}else z=y
z.h(0,this.gfW())
z=this.a.d
y=z.d
if(y==null){y=D.C()
z.d=y
z=y}else z=y
z.h(0,this.gfX())
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
ao:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.P()
z=-z}if(this.r){if(typeof y!=="number")return y.P()
y=-y}return new V.R(z,y)},
fY:[function(a){a=H.d(H.e(a,"$isv"),"$isbq")
if(!J.P(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gcb",4,0,1],
fZ:[function(a){var z,y,x,w,v,u,t
a=H.d(H.e(a,"$isv"),"$isbq")
if(!this.cx)return
if(this.ch){z=a.d.I(0,a.y)
z=new V.R(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.B(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.I(0,a.y)
z=this.ao(new V.R(y.a,y.b).u(0,2).v(0,z.ga8()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.P()
x=this.y
if(typeof x!=="number")return H.B(x)
y.sT(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.P()
y=this.x
if(typeof y!=="number")return H.B(y)
x.sT(-z*10*y)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=this.ao(new V.R(x.a,x.b).u(0,2).v(0,z.ga8()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.B(u)
t=this.cy
if(typeof t!=="number")return H.B(t)
x.sa7(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.B(v)
x=this.db
if(typeof x!=="number")return H.B(x)
t.sa7(0,-u*v+x)
this.b.sT(0)
this.c.sT(0)
y=y.I(0,a.z)
this.dx=this.ao(new V.R(y.a,y.b).u(0,2).v(0,z.ga8()))}this.ah()},"$1","gcc",4,0,1],
h_:[function(a){var z,y,x
H.e(a,"$isv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.P()
x=this.y
if(typeof x!=="number")return H.B(x)
z.sT(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.P()
z=this.x
if(typeof z!=="number")return H.B(z)
x.sT(-y*10*z)
this.ah()}},"$1","gcd",4,0,1],
jZ:[function(a){if(H.d(H.e(a,"$isv"),"$isee").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfW",4,0,1],
k_:[function(a){var z,y,x,w,v,u,t
a=H.d(H.e(a,"$isv"),"$isbq")
if(!J.P(this.d,a.x.b))return
z=a.c
y=a.d
x=y.I(0,a.y)
w=this.ao(new V.R(x.a,x.b).u(0,2).v(0,z.ga8()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.B(u)
t=this.cy
if(typeof t!=="number")return H.B(t)
x.sa7(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.B(v)
x=this.db
if(typeof x!=="number")return H.B(x)
t.sa7(0,-u*v+x)
this.b.sT(0)
this.c.sT(0)
y=y.I(0,a.z)
this.dx=this.ao(new V.R(y.a,y.b).u(0,2).v(0,z.ga8()))
this.ah()},"$1","gfX",4,0,1],
kz:[function(a){H.e(a,"$isv")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gi2",4,0,1],
ky:[function(a){var z,y,x,w,v,u,t
a=H.d(H.e(a,"$isv"),"$iseU")
if(!this.cx)return
if(this.ch){z=a.d.I(0,a.y)
z=new V.R(z.a,z.b)
z=z.C(z)
y=this.Q
if(typeof y!=="number")return H.B(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.I(0,a.y)
z=this.ao(new V.R(y.a,y.b).u(0,2).v(0,z.ga8()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.P()
x=this.y
if(typeof x!=="number")return H.B(x)
y.sT(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.P()
y=this.x
if(typeof y!=="number")return H.B(y)
x.sT(-z*10*y)}else{z=a.c
y=a.d
x=y.I(0,a.y)
w=this.ao(new V.R(x.a,x.b).u(0,2).v(0,z.ga8()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.B(u)
t=this.cy
if(typeof t!=="number")return H.B(t)
x.sa7(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.B(v)
x=this.db
if(typeof x!=="number")return H.B(x)
t.sa7(0,-u*v+x)
this.b.sT(0)
this.c.sT(0)
y=y.I(0,a.z)
this.dx=this.ao(new V.R(y.a,y.b).u(0,2).v(0,z.ga8()))}this.ah()},"$1","gi1",4,0,1],
kx:[function(a){var z,y,x
H.e(a,"$isv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.C(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.P()
x=this.y
if(typeof x!=="number")return H.B(x)
z.sT(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.P()
z=this.x
if(typeof z!=="number")return H.B(z)
x.sT(-y*10*z)
this.ah()}},"$1","gi0",4,0,1],
aX:function(a,b){var z,y,x,w,v
z=this.dy
y=a.e
if(typeof z!=="number")return z.an()
if(z<y){this.dy=y
x=a.y
this.c.am(x)
this.b.am(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.ay(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.u(0,V.ay(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isa8:1},jK:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gq:function(){var z=this.r
if(z==null){z=D.C()
this.r=z}return z},
R:function(a){var z=this.r
if(!(z==null))z.E(a)},
b5:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.C()
z.e=y
z=y}else z=y
y=this.gh0()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.C()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
k0:[function(a){var z,y,x,w
H.e(a,"$isv")
if(!J.P(this.b,this.a.b.c))return
H.d(a,"$iscW")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.u()
w=z+y*x
if(z!==w){this.d=w
z=new D.H("zoom",z,w,this,[P.w])
z.b=!0
this.R(z)}},"$1","gh0",4,0,1],
aX:function(a,b){var z,y,x
z=this.e
y=a.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.ay(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa8:1}}],["","",,M,{"^":"",he:{"^":"S;0e,0f,0a,0b,0c,0d",
gq:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
a_:[function(a){var z
H.e(a,"$isv")
z=this.f
if(!(z==null))z.E(a)},function(){return this.a_(null)},"d7","$1","$0","gW",0,2,0],
kr:[function(a,b){var z,y,x,w,v,u,t,s
z=M.aC
H.i(b,"$isl",[z],"$asl")
for(y=b.length,x=this.gW(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){s=t.gq()
s.toString
H.k(x,w)
if(s.a==null)s.sac(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.bM(a,b,this,[z])
z.b=!0
this.a_(z)},"$2","gho",8,0,22],
ks:[function(a,b){var z,y,x
z=M.aC
H.i(b,"$isl",[z],"$asl")
for(y=b.gN(b),x=this.gW();y.A();)y.gG().gq().M(0,x)
z=new D.bN(a,b,this,[z])
z.b=!0
this.a_(z)},"$2","ghp",8,0,22],
aa:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.al(z,z.length,0,[H.u(z,0)]);z.A();){y=z.d
if(!(y==null))y.aa(a)}this.e=!1},
$asl:function(){return[M.aC]},
$asS:function(){return[M.aC]},
$isaC:1},hg:{"^":"a;0a,0b,0c,0d,0e,0f",
gq:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
a_:[function(a){var z
H.e(a,"$isv")
z=this.f
if(!(z==null))z.E(a)},function(){return this.a_(null)},"d7","$1","$0","gW",0,2,0],
sb6:function(a){var z,y
if(a==null)a=new X.hO()
z=this.a
if(z!==a){if(z!=null)z.gq().M(0,this.gW())
y=this.a
this.a=a
a.gq().h(0,this.gW())
z=new D.H("camera",y,this.a,this,[X.c0])
z.b=!0
this.a_(z)}},
sbe:function(a,b){var z,y
if(b==null)b=X.cO(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gq().M(0,this.gW())
y=this.b
this.b=b
b.gq().h(0,this.gW())
z=new D.H("target",y,this.b,this,[X.d4])
z.b=!0
this.a_(z)}},
sbf:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gq().M(0,this.gW())
y=this.c
this.c=a
if(a!=null)a.gq().h(0,this.gW())
z=new D.H("technique",y,this.c,this,[O.bv])
z.b=!0
this.a_(z)}},
aa:function(a){a.cP(this.c)
this.b.a0(a)
this.a.a0(a)
this.d.am(a)
this.d.aa(a)
this.a.aW(a)
this.b.toString
a.cO()},
$isaC:1},hw:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
sfz:function(a,b){this.d=H.i(b,"$isS",[E.an],"$asS")},
a_:[function(a){var z
H.e(a,"$isv")
z=this.x
if(!(z==null))z.E(a)},function(){return this.a_(null)},"d7","$1","$0","gW",0,2,0],
ka:[function(a,b){var z,y,x,w,v,u,t,s
z=E.an
H.i(b,"$isl",[z],"$asl")
for(y=b.length,x=this.gW(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.x)(b),++u){t=b[u]
if(t!=null){if(t.gag()==null){s=new D.bn()
s.sac(null)
s.sb2(null)
s.c=null
s.d=0
t.sag(s)}s=t.gag()
s.toString
H.k(x,w)
if(s.a==null)s.sac(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.bM(a,b,this,[z])
z.b=!0
this.a_(z)},"$2","gh6",8,0,6],
kb:[function(a,b){var z,y,x
z=E.an
H.i(b,"$isl",[z],"$asl")
for(y=b.gN(b),x=this.gW();y.A();)y.gG().gq().M(0,x)
z=new D.bN(a,b,this,[z])
z.b=!0
this.a_(z)},"$2","gh7",8,0,6],
sb6:function(a){var z,y
if(a==null)a=X.eq(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null)z.gq().M(0,this.gW())
y=this.a
this.a=a
a.gq().h(0,this.gW())
z=new D.H("camera",y,this.a,this,[X.c0])
z.b=!0
this.a_(z)}},
sbe:function(a,b){var z,y
if(b==null)b=X.cO(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gq().M(0,this.gW())
y=this.b
this.b=b
b.gq().h(0,this.gW())
z=new D.H("target",y,this.b,this,[X.d4])
z.b=!0
this.a_(z)}},
sbf:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gq().M(0,this.gW())
y=this.c
this.c=a
if(a!=null)a.gq().h(0,this.gW())
z=new D.H("technique",y,this.c,this,[O.bv])
z.b=!0
this.a_(z)}},
gq:function(){var z=this.x
if(z==null){z=D.C()
this.x=z}return z},
aa:function(a){var z
a.cP(this.c)
this.b.a0(a)
this.a.a0(a)
z=this.c
if(z!=null)z.am(a)
for(z=this.d.a,z=new J.al(z,z.length,0,[H.u(z,0)]);z.A();)z.d.am(a)
for(z=this.d.a,z=new J.al(z,z.length,0,[H.u(z,0)]);z.A();)z.d.aa(a)
this.a.toString
a.cy.aB()
a.db.aB()
this.b.toString
a.cO()},
$isaC:1},aC:{"^":"a;"}}],["","",,A,{"^":"",dH:{"^":"a;a,b,c"},h5:{"^":"a;a",
l:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
j4:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
C.b.dY(w.a,w.c)}},
dU:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
C.b.dV(w.a,w.c)}}},ei:{"^":"ch;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0ar,0ak,0bx,0dZ,0by,0bz,0e_,0e0,0bA,0bB,0e1,0e2,0bC,0bD,0e3,0e4,0bE,0e5,0e6,0bF,0e7,0e8,0bG,0bH,0bI,0e9,0ea,0bJ,0bK,0eb,0ec,0bL,0ed,0cB,0ee,0cC,0ef,0cD,0eg,0cE,0eh,0cF,0ei,0cG,a,b,0c,0d,0e,0f,0r,0x,0y",
sfs:function(a){this.r1=H.i(a,"$isb",[A.as],"$asb")},
sfb:function(a){this.cB=H.i(a,"$isb",[A.db],"$asb")},
sfc:function(a){this.cC=H.i(a,"$isb",[A.dd],"$asb")},
sfd:function(a){this.cD=H.i(a,"$isb",[A.de],"$asb")},
sfe:function(a){this.cE=H.i(a,"$isb",[A.df],"$asb")},
sff:function(a){this.cF=H.i(a,"$isb",[A.dg],"$asb")},
sfg:function(a){this.cG=H.i(a,"$isb",[A.dh],"$asb")},
f0:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.z=a1
z=new P.bu("")
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
z=new P.bu("")
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
if(a1.x2)this.k1=H.d(this.y.m(0,"txt2DMat"),"$isdc")
if(a1.y1)this.k2=H.d(this.y.m(0,"txtCubeMat"),"$isas")
if(a1.y2)this.k3=H.d(this.y.m(0,"colorMat"),"$isas")
this.sfs(H.c([],[A.as]))
y=a1.ar
if(y>0){this.k4=H.e(this.y.m(0,"bendMatCount"),"$isG")
for(m=0;m<y;++m){x=this.r1
w=this.y
v="bendValues["+m+"].mat"
l=w.l(0,v)
if(l==null)H.r(P.p("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.d(l,"$isas"))}}y=a1.a
if(y!==C.c){this.r2=H.d(this.y.m(0,"emissionClr"),"$isD")
switch(y){case C.c:break
case C.f:break
case C.d:this.rx=H.d(this.y.m(0,"emissionTxt"),"$isag")
this.x1=H.d(this.y.m(0,"nullEmissionTxt"),"$isG")
break
case C.e:this.ry=H.d(this.y.m(0,"emissionTxt"),"$isaa")
this.x1=H.d(this.y.m(0,"nullEmissionTxt"),"$isG")
break}}y=a1.b
if(y!==C.c){this.x2=H.d(this.y.m(0,"ambientClr"),"$isD")
switch(y){case C.c:break
case C.f:break
case C.d:this.y1=H.d(this.y.m(0,"ambientTxt"),"$isag")
this.ar=H.d(this.y.m(0,"nullAmbientTxt"),"$isG")
break
case C.e:this.y2=H.d(this.y.m(0,"ambientTxt"),"$isaa")
this.ar=H.d(this.y.m(0,"nullAmbientTxt"),"$isG")
break}}y=a1.c
if(y!==C.c){this.ak=H.d(this.y.m(0,"diffuseClr"),"$isD")
switch(y){case C.c:break
case C.f:break
case C.d:this.bx=H.d(this.y.m(0,"diffuseTxt"),"$isag")
this.by=H.d(this.y.m(0,"nullDiffuseTxt"),"$isG")
break
case C.e:this.dZ=H.d(this.y.m(0,"diffuseTxt"),"$isaa")
this.by=H.d(this.y.m(0,"nullDiffuseTxt"),"$isG")
break}}y=a1.d
if(y!==C.c){this.bz=H.d(this.y.m(0,"invDiffuseClr"),"$isD")
switch(y){case C.c:break
case C.f:break
case C.d:this.e_=H.d(this.y.m(0,"invDiffuseTxt"),"$isag")
this.bA=H.d(this.y.m(0,"nullInvDiffuseTxt"),"$isG")
break
case C.e:this.e0=H.d(this.y.m(0,"invDiffuseTxt"),"$isaa")
this.bA=H.d(this.y.m(0,"nullInvDiffuseTxt"),"$isG")
break}}y=a1.e
if(y!==C.c){this.bD=H.d(this.y.m(0,"shininess"),"$isT")
this.bB=H.d(this.y.m(0,"specularClr"),"$isD")
switch(y){case C.c:break
case C.f:break
case C.d:this.e1=H.d(this.y.m(0,"specularTxt"),"$isag")
this.bC=H.d(this.y.m(0,"nullSpecularTxt"),"$isG")
break
case C.e:this.e2=H.d(this.y.m(0,"specularTxt"),"$isaa")
this.bC=H.d(this.y.m(0,"nullSpecularTxt"),"$isG")
break}}switch(a1.f){case C.c:break
case C.f:break
case C.d:this.e3=H.d(this.y.m(0,"bumpTxt"),"$isag")
this.bE=H.d(this.y.m(0,"nullBumpTxt"),"$isG")
break
case C.e:this.e4=H.d(this.y.m(0,"bumpTxt"),"$isaa")
this.bE=H.d(this.y.m(0,"nullBumpTxt"),"$isG")
break}if(a1.dy){this.e5=H.d(this.y.m(0,"envSampler"),"$isaa")
this.e6=H.d(this.y.m(0,"nullEnvTxt"),"$isG")
y=a1.r
if(y!==C.c){this.bF=H.d(this.y.m(0,"reflectClr"),"$isD")
switch(y){case C.c:break
case C.f:break
case C.d:this.e7=H.d(this.y.m(0,"reflectTxt"),"$isag")
this.bG=H.d(this.y.m(0,"nullReflectTxt"),"$isG")
break
case C.e:this.e8=H.d(this.y.m(0,"reflectTxt"),"$isaa")
this.bG=H.d(this.y.m(0,"nullReflectTxt"),"$isG")
break}}y=a1.x
if(y!==C.c){this.bH=H.d(this.y.m(0,"refraction"),"$isT")
this.bI=H.d(this.y.m(0,"refractClr"),"$isD")
switch(y){case C.c:break
case C.f:break
case C.d:this.e9=H.d(this.y.m(0,"refractTxt"),"$isag")
this.bJ=H.d(this.y.m(0,"nullRefractTxt"),"$isG")
break
case C.e:this.ea=H.d(this.y.m(0,"refractTxt"),"$isaa")
this.bJ=H.d(this.y.m(0,"nullRefractTxt"),"$isG")
break}}}y=a1.y
if(y!==C.c){this.bK=H.d(this.y.m(0,"alpha"),"$isT")
switch(y){case C.c:break
case C.f:break
case C.d:this.eb=H.d(this.y.m(0,"alphaTxt"),"$isag")
this.bL=H.d(this.y.m(0,"nullAlphaTxt"),"$isG")
break
case C.e:this.ec=H.d(this.y.m(0,"alphaTxt"),"$isaa")
this.bL=H.d(this.y.m(0,"nullAlphaTxt"),"$isG")
break}}this.sfb(H.c([],[A.db]))
this.sfc(H.c([],[A.dd]))
this.sfd(H.c([],[A.de]))
this.sfe(H.c([],[A.df]))
this.sff(H.c([],[A.dg]))
this.sfg(H.c([],[A.dh]))
if(a1.k2){y=a1.z
if(y>0){this.ed=H.e(this.y.m(0,"dirLightCount"),"$isG")
for(m=0;m<y;++m){x=this.y
w="dirLights["+m+"].viewDir"
l=x.l(0,w)
if(l==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isD")
x=this.y
w="dirLights["+m+"].color"
k=x.l(0,w)
if(k==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isD")
x=this.cB;(x&&C.a).h(x,new A.db(m,l,k))}}y=a1.Q
if(y>0){this.ee=H.e(this.y.m(0,"pntLightCount"),"$isG")
for(m=0;m<y;++m){x=this.y
w="pntLights["+m+"].point"
l=x.l(0,w)
if(l==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isD")
x=this.y
w="pntLights["+m+"].viewPnt"
k=x.l(0,w)
if(k==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isD")
x=this.y
w="pntLights["+m+"].color"
j=x.l(0,w)
if(j==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isD")
x=this.y
w="pntLights["+m+"].att0"
i=x.l(0,w)
if(i==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isT")
x=this.y
w="pntLights["+m+"].att1"
h=x.l(0,w)
if(h==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isT")
x=this.y
w="pntLights["+m+"].att2"
g=x.l(0,w)
if(g==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isT")
x=this.cC;(x&&C.a).h(x,new A.dd(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.ef=H.e(this.y.m(0,"spotLightCount"),"$isG")
for(m=0;m<y;++m){x=this.y
w="spotLights["+m+"].objPnt"
l=x.l(0,w)
if(l==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isD")
x=this.y
w="spotLights["+m+"].objDir"
k=x.l(0,w)
if(k==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isD")
x=this.y
w="spotLights["+m+"].viewPnt"
j=x.l(0,w)
if(j==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isD")
x=this.y
w="spotLights["+m+"].color"
i=x.l(0,w)
if(i==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isD")
x=this.y
w="spotLights["+m+"].cutoff"
h=x.l(0,w)
if(h==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isT")
x=this.y
w="spotLights["+m+"].coneAngle"
g=x.l(0,w)
if(g==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isT")
x=this.y
w="spotLights["+m+"].att0"
f=x.l(0,w)
if(f==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isT")
x=this.y
w="spotLights["+m+"].att1"
e=x.l(0,w)
if(e==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isT")
x=this.y
w="spotLights["+m+"].att2"
d=x.l(0,w)
if(d==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isT")
x=this.cD;(x&&C.a).h(x,new A.de(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.eg=H.e(this.y.m(0,"txtDirLightCount"),"$isG")
for(m=0;m<y;++m){x=this.y
w="txtDirLights["+m+"].objUp"
l=x.l(0,w)
if(l==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isD")
x=this.y
w="txtDirLights["+m+"].objRight"
k=x.l(0,w)
if(k==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isD")
x=this.y
w="txtDirLights["+m+"].objDir"
j=x.l(0,w)
if(j==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isD")
x=this.y
w="txtDirLights["+m+"].viewDir"
i=x.l(0,w)
if(i==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isD")
x=this.y
w="txtDirLights["+m+"].color"
h=x.l(0,w)
if(h==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isD")
x=this.y
w="txtDirLights["+m+"].nullTxt"
g=x.l(0,w)
if(g==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isG")
x=this.y
w="txtDirLightsTxt2D"+m
f=x.l(0,w)
if(f==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isag")
x=this.cE;(x&&C.a).h(x,new A.df(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.eh=H.e(this.y.m(0,"txtPntLightCount"),"$isG")
for(m=0;m<y;++m){x=this.y
w="txtPntLights["+m+"].point"
l=x.l(0,w)
if(l==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isD")
x=this.y
w="txtPntLights["+m+"].viewPnt"
k=x.l(0,w)
if(k==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isD")
x=this.y
w="txtPntLights["+m+"].invViewRotMat"
j=x.l(0,w)
if(j==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isdc")
x=this.y
w="txtPntLights["+m+"].color"
i=x.l(0,w)
if(i==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isD")
x=this.y
w="txtPntLights["+m+"].nullTxt"
h=x.l(0,w)
if(h==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isG")
x=this.y
w="txtPntLights["+m+"].att0"
g=x.l(0,w)
if(g==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isT")
x=this.y
w="txtPntLights["+m+"].att1"
f=x.l(0,w)
if(f==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isT")
x=this.y
w="txtPntLights["+m+"].att2"
e=x.l(0,w)
if(e==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isT")
x=this.y
w="txtPntLightsTxtCube"+m
d=x.l(0,w)
if(d==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isaa")
x=this.cF;(x&&C.a).h(x,new A.dg(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.ei=H.e(this.y.m(0,"txtSpotLightCount"),"$isG")
for(m=0;m<y;++m){x=this.y
w="txtSpotLights["+m+"].objPnt"
l=x.l(0,w)
if(l==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isD")
x=this.y
w="txtSpotLights["+m+"].objDir"
k=x.l(0,w)
if(k==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isD")
x=this.y
w="txtSpotLights["+m+"].objUp"
j=x.l(0,w)
if(j==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isD")
x=this.y
w="txtSpotLights["+m+"].objRight"
i=x.l(0,w)
if(i==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isD")
x=this.y
w="txtSpotLights["+m+"].viewPnt"
h=x.l(0,w)
if(h==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isD")
x=this.y
w="txtSpotLights["+m+"].nullTxt"
g=x.l(0,w)
if(g==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isG")
x=this.y
w="txtSpotLights["+m+"].color"
f=x.l(0,w)
if(f==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isD")
x=this.y
w="txtSpotLights["+m+"].tuScalar"
e=x.l(0,w)
if(e==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isT")
x=this.y
w="txtSpotLights["+m+"].tvScalar"
d=x.l(0,w)
if(d==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isT")
x=this.y
w="txtSpotLights["+m+"].att0"
c=x.l(0,w)
if(c==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(c,"$isT")
x=this.y
w="txtSpotLights["+m+"].att1"
b=x.l(0,w)
if(b==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(b,"$isT")
x=this.y
w="txtSpotLights["+m+"].att2"
a=x.l(0,w)
if(a==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a,"$isT")
x=this.y
w="txtSpotLightsTxt2D"+m
a0=x.l(0,w)
if(a0==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a0,"$isag")
x=this.cG;(x&&C.a).h(x,new A.dh(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
ai:function(a,b,c){C.b.O(b.a,b.d,1)},
ad:function(a,b,c){C.b.O(b.a,b.d,1)},
n:{
ic:function(a,b){var z,y
z=a.ak
y=new A.ei(b,z)
y.d4(b,z)
y.f0(a,b)
return y}}},ig:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,ar,ak,bx",
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
z=a.a+="uniform BendingValue bendValues["+this.ar+"];\n"
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
at:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.j(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.bl(c,1))+"Txt;\n"
a.a=z
if(b===C.d)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
ig:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.at(a,z,"emission")
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
this.at(a,z,"ambient")
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
this.at(a,z,"diffuse")
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
this.at(a,z,"invDiffuse")
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
this.at(a,z,"specular")
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
this.at(a,z,"reflect")
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
this.at(a,z,"refract")
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
i:function(a){return this.ak}},db:{"^":"a;a,b,c"},df:{"^":"a;a,b,c,d,e,f,r,x"},dd:{"^":"a;a,b,c,d,e,f,r"},dg:{"^":"a;a,b,c,d,e,f,r,x,y,z"},de:{"^":"a;a,b,c,d,e,f,r,x,y,z"},dh:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},ch:{"^":"cD;",
d4:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
ek:function(a,b){var z,y,x
this.c=a
this.d=b
this.e=this.dk(a,35633)
this.f=this.dk(this.d,35632)
z=this.a
y=z.createProgram()
this.r=y
C.b.dL(z,y,this.e)
C.b.dL(z,this.r,this.f)
C.b.jg(z,this.r)
if(!H.dr(C.b.bV(z,this.r,35714))){x=C.b.eG(z,this.r)
C.b.iW(z,this.r)
H.r(P.p("Failed to link shader: "+H.f(x)))}this.hP()
this.hR()},
a0:function(a){C.b.cU(a.a,this.r)
this.x.j4()},
dk:function(a,b){var z,y,x
z=this.a
y=C.b.iU(z,b)
C.b.eR(z,y,a)
C.b.iN(z,y)
if(!H.dr(C.b.eJ(z,y,35713))){x=C.b.eI(z,y)
C.b.iX(z,y)
throw H.h(P.p("Error compiling shader '"+H.f(y)+"': "+H.f(x)))}return y},
hP:function(){var z,y,x,w,v,u
z=H.c([],[A.dH])
y=this.a
x=H.a0(C.b.bV(y,this.r,35721))
if(typeof x!=="number")return H.B(x)
w=0
for(;w<x;++w){v=C.b.eA(y,this.r,w)
u=C.b.eC(y,this.r,v.name)
C.a.h(z,new A.dH(y,v.name,u))}this.x=new A.h5(z)},
hR:function(){var z,y,x,w,v,u
z=H.c([],[A.a5])
y=this.a
x=H.a0(C.b.bV(y,this.r,35718))
if(typeof x!=="number")return H.B(x)
w=0
for(;w<x;++w){v=C.b.eB(y,this.r,w)
u=C.b.eK(y,this.r,v.name)
C.a.h(z,this.iV(v.type,v.size,v.name,u))}this.y=new A.jA(z)},
aJ:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.G(z,y,b,c)
else return A.da(z,y,b,a,c)},
fC:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ag(z,y,b,c)
else return A.da(z,y,b,a,c)},
fD:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.aa(z,y,b,c)
else return A.da(z,y,b,a,c)},
bt:function(a,b){return new P.fm(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
iV:function(a,b,c,d){switch(a){case 5120:return this.aJ(b,c,d)
case 5121:return this.aJ(b,c,d)
case 5122:return this.aJ(b,c,d)
case 5123:return this.aJ(b,c,d)
case 5124:return this.aJ(b,c,d)
case 5125:return this.aJ(b,c,d)
case 5126:return new A.T(this.a,this.r,c,d)
case 35664:return new A.jv(this.a,this.r,c,d)
case 35665:return new A.D(this.a,this.r,c,d)
case 35666:return new A.jy(this.a,this.r,c,d)
case 35667:return new A.jw(this.a,this.r,c,d)
case 35668:return new A.jx(this.a,this.r,c,d)
case 35669:return new A.jz(this.a,this.r,c,d)
case 35674:return new A.jC(this.a,this.r,c,d)
case 35675:return new A.dc(this.a,this.r,c,d)
case 35676:return new A.as(this.a,this.r,c,d)
case 35678:return this.fC(b,c,d)
case 35680:return this.fD(b,c,d)
case 35670:throw H.h(this.bt("BOOL",c))
case 35671:throw H.h(this.bt("BOOL_VEC2",c))
case 35672:throw H.h(this.bt("BOOL_VEC3",c))
case 35673:throw H.h(this.bt("BOOL_VEC4",c))
default:throw H.h(P.p("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}},c1:{"^":"a;a,b",
i:function(a){return this.b}},eF:{"^":"ch;0z,0Q,0ch,0cx,0cy,0db,a,b,0c,0d,0e,0f,0r,0x,0y"},a5:{"^":"a;"},jA:{"^":"a;a",
l:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.l(0,b)
if(z==null)throw H.h(P.p("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.S()},
j9:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w)x+=z[w].i(0)+a
return x},
S:function(){return this.j9("\n")}},G:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform1i: "+H.f(this.c)}},jw:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform2i: "+H.f(this.c)}},jx:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform3i: "+H.f(this.c)}},jz:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform4i: "+H.f(this.c)}},ju:{"^":"a5;0e,0f,a,b,c,d",
si7:function(a){this.e=H.i(a,"$isb",[P.y],"$asb")},
i:function(a){return"Uniform1iv: "+H.f(this.c)},
n:{
da:function(a,b,c,d,e){var z=new A.ju(a,b,c,e)
z.f=d
z.si7(P.i3(d,0,!1,P.y))
return z}}},T:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform1f: "+H.f(this.c)}},jv:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform2f: "+H.f(this.c)}},D:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform3f: "+H.f(this.c)}},jy:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform4f: "+H.f(this.c)}},jC:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}},dc:{"^":"a5;a,b,c,d",
af:function(a){var z=new Float32Array(H.bD(H.i(a,"$isb",[P.w],"$asb")))
C.b.ew(this.a,this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.f(this.c)}},as:{"^":"a5;a,b,c,d",
af:function(a){var z=new Float32Array(H.bD(H.i(a,"$isb",[P.w],"$asb")))
C.b.ex(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.f(this.c)}},ag:{"^":"a5;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.f(this.c)}},aa:{"^":"a5;a,b,c,d",
eQ:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)C.b.O(y,x,0)
else C.b.O(y,x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}}],["","",,F,{"^":"",
lB:function(a,b,c,d){return F.l6(c,a,d,b,new F.lC())},
l6:function(a,b,c,d,e){var z=F.lz(a,b,new F.l7(H.k(e,{func:1,ret:V.Z,args:[P.w]}),d,b,c),null)
if(z==null)return
z.aw()
z.jk(new F.jS(),new F.is())
return z},
lz:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.k(c,{func:1,ret:-1,args:[F.ah,P.w,P.w]})
if(a<1)return
if(b<1)return
z=F.eE()
y=H.c([],[F.ah])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cl(null,null,new V.aR(u,0,0,1),null,null,new V.a3(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.dS(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cl(null,null,new V.aR(o,n,m,1),null,null,new V.a3(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.dS(d))}}z.d.iz(a+1,b+1,y)
return z},
lC:{"^":"t:38;",
$1:function(a){return new V.Z(Math.cos(a),Math.sin(a),0)}},
l7:{"^":"t:39;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dD(y.$1(z),x)
x=J.dD(y.$1(z+3.141592653589793/this.c),x).I(0,w)
x=new V.M(x.a,x.b,x.c)
v=x.v(0,Math.sqrt(x.C(x)))
y=$.f9
if(y==null){y=new V.M(1,0,0)
$.f9=y
u=y}else u=y
y=v.ax(!J.P(v,u)?V.fd():u)
t=y.v(0,Math.sqrt(y.C(y)))
y=t.ax(v)
u=y.v(0,Math.sqrt(y.C(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.u(0,y*x)
x=t.u(0,r*x)
x=w.L(0,new V.Z(y.a-x.a,y.b-x.b,y.c-x.c))
if(!J.P(a.f,x)){a.f=x
y=a.a
if(y!=null)y.a9()}}},
a1:{"^":"a;0a,0b,0c,0d,0e",
b7:function(){if(!this.gdW()){C.a.M(this.a.a.d.b,this)
this.a.a.a9()}this.hz()
this.hA()
this.hB()},
hM:function(a){this.a=a
C.a.h(a.d.b,this)},
hN:function(a){this.b=a
C.a.h(a.d.c,this)},
hO:function(a){this.c=a
C.a.h(a.d.d,this)},
hz:function(){var z=this.a
if(z!=null){C.a.M(z.d.b,this)
this.a=null}},
hA:function(){var z=this.b
if(z!=null){C.a.M(z.d.c,this)
this.b=null}},
hB:function(){var z=this.c
if(z!=null){C.a.M(z.d.d,this)
this.c=null}},
gdW:function(){return this.a==null||this.b==null||this.c==null},
fq:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.bx()
if(y!=null)v=v.L(0,y)
if(x!=null)v=v.L(0,x)
if(w!=null)v=v.L(0,w)
if(v.el())return
return v.v(0,Math.sqrt(v.C(v)))},
fw:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.I(0,y)
z=new V.M(z.a,z.b,z.c)
v=z.v(0,Math.sqrt(z.C(z)))
z=w.I(0,y)
z=new V.M(z.a,z.b,z.c)
z=v.ax(z.v(0,Math.sqrt(z.C(z))))
return z.v(0,Math.sqrt(z.C(z)))},
cu:function(){if(this.d!=null)return!0
var z=this.fq()
if(z==null){z=this.fw()
if(z==null)return!1}this.d=z
this.a.a.a9()
return!0},
fp:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=V.bx()
if(y!=null)v=v.L(0,y)
if(x!=null)v=v.L(0,x)
if(w!=null)v=v.L(0,w)
if(v.el())return
return v.v(0,Math.sqrt(v.C(v)))},
fv:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.m.$2(n,0)){z=r.I(0,u)
z=new V.M(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.C(z)))
if(o.a-p.a<0)m=m.P(0)}else{l=(z-q.b)/n
z=r.I(0,u).u(0,l).L(0,u).I(0,x)
z=new V.M(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.C(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.P(0)}z=this.d
if(z!=null){k=z.v(0,Math.sqrt(z.C(z)))
z=k.ax(m)
z=z.v(0,Math.sqrt(z.C(z))).ax(k)
m=z.v(0,Math.sqrt(z.C(z)))}return m},
cs:function(){if(this.e!=null)return!0
var z=this.fp()
if(z==null){z=this.fv()
if(z==null)return!1}this.e=z
this.a.a.a9()
return!0},
giM:function(a){if(J.P(this.a,this.b))return!0
if(J.P(this.b,this.c))return!0
if(J.P(this.c,this.a))return!0
return!1},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
F:function(a){var z,y
if(this.gdW())return a+"disposed"
z=a+C.i.aA(J.au(this.a.e),0)+", "+C.i.aA(J.au(this.b.e),0)+", "+C.i.aA(J.au(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
S:function(){return this.F("")},
n:{
bK:function(a,b,c){var z,y,x
z=new F.a1()
y=a.a
if(y==null)H.r(P.p("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.p("May not create a face with vertices attached to different shapes."))
z.hM(a)
z.hN(b)
z.hO(c)
C.a.h(z.a.a.d.b,z)
z.a.a.a9()
return z}}},
hA:{"^":"a;"},
j5:{"^":"hA;",
b9:function(a,b,c){var z,y
z=b.a
z.a.a.D()
z=z.e
y=c.a
y.a.a.D()
if(z==y.e){z=b.b
z.a.a.D()
z=z.e
y=c.b
y.a.a.D()
if(z==y.e){z=b.c
z.a.a.D()
z=z.e
y=c.c
y.a.a.D()
y=z==y.e
z=y}else z=!1
return z}else{z=b.a
z.a.a.D()
z=z.e
y=c.b
y.a.a.D()
if(z==y.e){z=b.b
z.a.a.D()
z=z.e
y=c.c
y.a.a.D()
if(z==y.e){z=b.c
z.a.a.D()
z=z.e
y=c.a
y.a.a.D()
y=z==y.e
z=y}else z=!1
return z}else{z=b.a
z.a.a.D()
z=z.e
y=c.c
y.a.a.D()
if(z==y.e){z=b.b
z.a.a.D()
z=z.e
y=c.a
y.a.a.D()
if(z==y.e){z=b.c
z.a.a.D()
z=z.e
y=c.b
y.a.a.D()
y=z==y.e
z=y}else z=!1
return z}else return!1}}}},
bR:{"^":"a;"},
hZ:{"^":"a;"},
jt:{"^":"hZ;",
b9:function(a,b,c){var z,y
z=b.a
z.a.a.D()
z=z.e
y=c.a
y.a.a.D()
if(z==y.e){z=b.b
z.a.a.D()
z=z.e
y=c.b
y.a.a.D()
return z==y.e}else{z=b.a
z.a.a.D()
z=z.e
y=c.b
y.a.a.D()
if(z==y.e){z=b.b
z.a.a.D()
z=z.e
y=c.a
y.a.a.D()
return z==y.e}else return!1}}},
ce:{"^":"a;"},
eD:{"^":"a;0a,0b,0c,0d,0e",
gq:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
aw:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aw()||!1
if(!this.a.aw())y=!1
z=this.e
if(!(z==null))z.aD()
return y},
jk:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.c(z.slice(0),[H.u(z,0)])
for(z=[F.ah];y.length!==0;){x=C.a.gj6(y)
C.a.jB(y,0)
if(x!=null){w=H.c([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.x)(y),++u){t=y[u]
if(t!=null&&a.b9(0,x,t)){C.a.h(w,t)
C.a.M(y,t)}}if(w.length>1)b.jj(w)}}this.a.D()
this.c.cQ()
this.d.cQ()
this.b.jC()
this.c.cR(new F.jt())
this.d.cR(new F.j5())
z=this.e
if(!(z==null))z.aD()},
dO:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$at()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aL().a)!==0)++w
if((x&$.$get$aK().a)!==0)++w
if((x&$.$get$aM().a)!==0)++w
if((x&$.$get$aN().a)!==0)++w
if((x&$.$get$by().a)!==0)++w
if((x&$.$get$bz().a)!==0)++w
if((x&$.$get$b9().a)!==0)++w
if((x&$.$get$aJ().a)!==0)++w
v=b.gd2(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.w
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.dL])
for(r=0,q=0;q<w;++q){p=b.iD(q)
o=p.gd2(p)
C.a.X(s,q,new Z.dL(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.j(y,n)
m=y[n].jh(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.X(t,l,m[k]);++l}}r+=o}H.i(t,"$isb",[x],"$asb")
y=a.a
j=y.createBuffer()
C.b.ap(y,34962,j)
C.b.dN(y,34962,new Float32Array(H.bD(t)),35044)
C.b.ap(y,34962,null)
i=new Z.cG(new Z.fh(34962,j),s,b)
i.sfR(H.c([],[Z.c8]))
this.b.b
if(this.c.b.length!==0){x=P.y
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.D()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.j(g,q)
g=g[q].b
g.a.a.D()
C.a.h(h,g.e)}f=Z.fj(y,34963,H.i(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.c8(1,h.length,f))}if(this.d.b.length!==0){x=P.y
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.D()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.j(g,q)
g=g[q].b
g.a.a.D()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.j(g,q)
g=g[q].c
g.a.a.D()
C.a.h(h,g.e)}f=Z.fj(y,34963,H.i(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.c8(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.n])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.F("   "))}this.b.b
if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.F("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.F("   "))}return C.a.k(z,"\n")},
aV:function(a){var z=this.e
if(!(z==null))z.E(a)},
a9:function(){return this.aV(null)},
$islW:1,
n:{
eE:function(){var z,y
z=new F.eD()
y=new F.jN(z)
y.b=!1
y.si8(H.c([],[F.ah]))
z.a=y
y=new F.j_(z)
y.scg(H.c([],[F.ce]))
z.b=y
y=new F.iZ(z)
y.sfS(H.c([],[F.bR]))
z.c=y
y=new F.iY(z)
y.sfI(H.c([],[F.a1]))
z.d=y
z.e=null
return z}}},
iY:{"^":"a;a,0b",
sfI:function(a){this.b=H.i(a,"$isb",[F.a1],"$asb")},
iy:function(a){var z,y,x,w,v,u
H.i(a,"$isb",[F.ah],"$asb")
z=H.c([],[F.a1])
y=a[0]
for(x=this.a,w=2;w<4;++w){v=a[w-1]
u=a[w]
x.a.h(0,y)
x.a.h(0,v)
x.a.h(0,u)
C.a.h(z,F.bK(y,v,u))}return z},
iz:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.i(c,"$isb",[F.ah],"$asb")
z=H.c([],[F.a1])
for(y=this.a,x=b,w=0,v=!1,u=1;u<a;++u,++w,++x){for(t=v,s=1;s<b;++s,x=o){r=c.length
if(w<0||w>=r)return H.j(c,w)
q=c[w];++w
if(w>=r)return H.j(c,w)
p=c[w]
o=x+1
if(o<0||o>=r)return H.j(c,o)
n=c[o]
if(x<0||x>=r)return H.j(c,x)
m=c[x]
r=y.a
if(t){r.h(0,q)
y.a.h(0,p)
y.a.h(0,n)
C.a.h(z,F.bK(q,p,n))
y.a.h(0,q)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bK(q,n,m))}else{r.h(0,p)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bK(p,n,m))
y.a.h(0,p)
y.a.h(0,m)
y.a.h(0,q)
C.a.h(z,F.bK(p,m,q))}t=!t}v=!v}return z},
gp:function(a){return this.b.length},
cR:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.j(x,y)
w=x[y]
for(x=w.d,v=x.b.length+x.c.length+x.d.length-1;v>=0;--v){u=w.d.l(0,v)
for(t=v-1;t>=0;--t){s=w.d.l(0,t)
if(a.b9(0,u,s)){u.b7()
break}}}}},
cQ:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.j(y,z)
x=y[z]
y=x.giM(x)
if(y)x.b7()}},
aw:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].cu())x=!1
return x},
ct:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.x)(z),++w)if(!z[w].cs())x=!1
return x},
i:function(a){return this.S()},
F:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
S:function(){return this.F("")}},
iZ:{"^":"a;a,0b",
sfS:function(a){this.b=H.i(a,"$isb",[F.bR],"$asb")},
gp:function(a){return this.b.length},
cR:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.j(x,y)
w=x[y]
for(x=w.c,v=x.b.length+x.c.length-1;v>=0;--v){u=w.c.l(0,v)
for(t=v-1;t>=0;--t){s=w.c.l(0,t)
if(a.b9(0,u,s)){u.b7()
break}}}}},
cQ:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.j(y,z)
x=y[z]
y=J.P(x.a,x.b)
if(y)x.b7()}},
i:function(a){return this.S()},
F:function(a){var z,y,x,w
z=H.c([],[P.n])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.j(w,x)
C.a.h(z,w[x].F(a+(""+x+". ")))}return C.a.k(z,"\n")},
S:function(){return this.F("")}},
j_:{"^":"a;a,0b",
scg:function(a){this.b=H.i(a,"$isb",[F.ce],"$asb")},
gp:function(a){return 0},
jC:function(){var z,y
for(z=-1;!1;--z){y=this.b
return H.j(y,z)
y=y[z].gkL()
y=y.gkI(y)
if(y.gp(y).jU(0,1)){y=this.b
return H.j(y,z)
y[z].b7()}}},
i:function(a){return this.S()},
F:function(a){var z,y,x
z=H.c([],[P.n])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.j(y,x)
C.a.h(z,y[x].F(a))}return C.a.k(z,"\n")},
S:function(){return this.F("")}},
ah:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
dS:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cl(this.cx,x,u,z,y,w,v,a,t)},
jh:function(a){var z,y
if(a.w(0,$.$get$at())){z=this.f
y=[P.w]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.w(0,$.$get$aL())){z=this.r
y=[P.w]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.w(0,$.$get$aK())){z=this.x
y=[P.w]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.w(0,$.$get$aM())){z=this.y
y=[P.w]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(a.w(0,$.$get$aN())){z=this.z
y=[P.w]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.w(0,$.$get$by())){z=this.Q
y=[P.w]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.w(0,$.$get$bz())){z=this.Q
y=[P.w]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(a.w(0,$.$get$b9()))return H.c([this.ch],[P.w])
else if(a.w(0,$.$get$aJ())){z=this.cx
y=[P.w]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.w])},
cu:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bx()
this.d.a2(0,new F.jX(z))
z=z.a
this.r=z.v(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.a9()
z=this.a.e
if(!(z==null))z.aD()}return!0},
cs:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bx()
this.d.a2(0,new F.jW(z))
z=z.a
this.x=z.v(0,Math.sqrt(z.C(z)))
z=this.a
if(z!=null){z.a9()
z=this.a.e
if(!(z==null))z.aD()}return!0},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
F:function(a){var z,y,x
z=H.c([],[P.n])
C.a.h(z,C.i.aA(J.au(this.e),0))
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
S:function(){return this.F("")},
n:{
cl:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ah()
y=new F.jV(z)
y.scg(H.c([],[F.ce]))
z.b=y
y=new F.jR(z)
x=[F.bR]
y.sfT(H.c([],x))
y.sfU(H.c([],x))
z.c=y
y=new F.jO(z)
x=[F.a1]
y.sfJ(H.c([],x))
y.sfK(H.c([],x))
y.sfL(H.c([],x))
z.d=y
h=$.$get$fe()
z.e=0
y=$.$get$at()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aL().a)!==0?e:null
z.x=(x&$.$get$aK().a)!==0?b:null
z.y=(x&$.$get$aM().a)!==0?f:null
z.z=(x&$.$get$aN().a)!==0?g:null
z.Q=(x&$.$get$ff().a)!==0?c:null
z.ch=(x&$.$get$b9().a)!==0?i:0
z.cx=(x&$.$get$aJ().a)!==0?a:null
return z}}},
jX:{"^":"t:5;a",
$1:function(a){var z,y
H.e(a,"$isa1")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.L(0,z)}}},
jW:{"^":"t:5;a",
$1:function(a){var z,y
H.e(a,"$isa1")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.L(0,z)}}},
jN:{"^":"a;a,0b,0c",
si8:function(a){this.c=H.i(a,"$isb",[F.ah],"$asb")},
D:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.j(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z,y
z=b.a
if(z!=null){if(z===this.a)return!1
throw H.h(P.p("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
y=this.a
b.a=y
C.a.h(z,b)
y.a9()
return!0},
iA:function(a,b,c,d,e,f,g,h,i){var z=F.cl(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bu:function(a,b,c,d,e,f){return this.iA(a,null,b,c,null,d,e,f,0)},
gp:function(a){return this.c.length},
aw:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].cu()
return!0},
ct:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)z[x].cs()
return!0},
iI:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.v(0,Math.sqrt(u*u+t*t+s*s))
if(!J.P(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.E(null)}}}}return!0},
i:function(a){return this.S()},
F:function(a){var z,y,x,w
this.D()
z=H.c([],[P.n])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
S:function(){return this.F("")}},
jO:{"^":"a;a,0b,0c,0d",
sfJ:function(a){this.b=H.i(a,"$isb",[F.a1],"$asb")},
sfK:function(a){this.c=H.i(a,"$isb",[F.a1],"$asb")},
sfL:function(a){this.d=H.i(a,"$isb",[F.a1],"$asb")},
gp:function(a){return this.b.length+this.c.length+this.d.length},
l:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.j(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.j(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.j(z,b)
return z[b]},
a2:function(a,b){H.k(b,{func:1,ret:-1,args:[F.a1]})
C.a.a2(this.b,b)
C.a.a2(this.c,new F.jP(this,b))
C.a.a2(this.d,new F.jQ(this,b))},
i:function(a){return this.S()},
F:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
S:function(){return this.F("")}},
jP:{"^":"t:5;a,b",
$1:function(a){H.e(a,"$isa1")
if(!J.P(a.a,this.a))this.b.$1(a)}},
jQ:{"^":"t:5;a,b",
$1:function(a){var z
H.e(a,"$isa1")
z=this.a
if(!J.P(a.a,z)&&!J.P(a.b,z))this.b.$1(a)}},
jR:{"^":"a;a,0b,0c",
sfT:function(a){this.b=H.i(a,"$isb",[F.bR],"$asb")},
sfU:function(a){this.c=H.i(a,"$isb",[F.bR],"$asb")},
gp:function(a){return this.b.length+this.c.length},
l:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.j(z,x)
return z[x]}else{if(b<0)return H.j(z,b)
return z[b]}},
i:function(a){return this.S()},
F:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
S:function(){return this.F("")}},
jT:{"^":"a;"},
jS:{"^":"jT;",
b9:function(a,b,c){return J.P(b.f,c.f)}},
jU:{"^":"a;"},
is:{"^":"jU;",
jj:function(a){var z,y,x,w,v,u,t,s,r
H.i(a,"$isb",[F.ah],"$asb")
z=V.bx()
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.M(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.v(0,Math.sqrt(z.C(z)))
for(y=a.length,w=z==null,x=0;x<a.length;a.length===y||(0,H.x)(a),++x){v=a[x]
if(w)u=null
else{t=z.a
s=z.b
r=z.c
u=z.v(0,Math.sqrt(t*t+s*s+r*r))}if(!J.P(v.r,u)){v.r=u
t=v.a
if(t!=null){t=t.e
if(!(t==null))t.E(null)}}}return}},
jV:{"^":"a;a,0b",
scg:function(a){this.b=H.i(a,"$isb",[F.ce],"$asb")},
gp:function(a){return 0},
i:function(a){return this.S()},
F:function(a){var z,y,x
z=H.c([],[P.n])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.j(y,x)
C.a.h(z,y[x].F(a))}return C.a.k(z,"\n")},
S:function(){return this.F("")}}}],["","",,O,{"^":"",ib:{"^":"bv;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
sft:function(a){this.e=H.i(a,"$isS",[V.af],"$asS")},
gq:function(){var z=this.dy
if(z==null){z=D.C()
this.dy=z}return z},
a3:[function(a){var z
H.e(a,"$isv")
z=this.dy
if(!(z==null))z.E(a)},function(){return this.a3(null)},"fi","$1","$0","gc_",0,2,0],
hF:[function(a){H.e(a,"$isv")
this.a=null
this.a3(a)},function(){return this.hF(null)},"kw","$1","$0","ghE",0,2,0],
k7:[function(a,b){var z=V.af
z=new D.bM(a,H.i(b,"$isl",[z],"$asl"),this,[z])
z.b=!0
this.a3(z)},"$2","gh3",8,0,23],
k8:[function(a,b){var z=V.af
z=new D.bN(a,H.i(b,"$isl",[z],"$asl"),this,[z])
z.b=!0
this.a3(z)},"$2","gh4",8,0,23],
dh:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
z=this.dx
y=C.h.a1(z.e.length+3,4)*4
x=C.h.a1(z.f.length+3,4)*4
w=C.h.a1(z.r.length+3,4)*4
v=C.h.a1(z.x.length+3,4)*4
u=C.h.a1(z.y.length+3,4)*4
t=C.h.a1(z.z.length+3,4)*4
s=C.h.a1(this.e.a.length+3,4)*4
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
U:function(a,b){H.i(a,"$isb",[T.d5],"$asb")},
am:function(a){var z,y,x,w,v
for(z=this.dx.a,z=new J.al(z,z.length,0,[H.u(z,0)]);z.A();){y=z.d
y.toString
x=$.ck
if(x==null){x=new V.M(0,0,1)
$.ck=x}y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cT(x)}}},
eq:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.dh()
y=H.e(a.fr.l(0,z.ak),"$isei")
if(y==null){y=A.ic(z,a.a)
a.dJ(y)}this.a=y
b.e=null
z=y}x=z.z
w=x.bx
z=b.e
if(!(z instanceof Z.cG)){b.e=null
z=null}if(z==null||!z.d.w(0,w)){z=x.r1
if(z)b.d.aw()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.d
u.d.ct()
u.a.ct()
u=u.e
if(!(u==null))u.aD()}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.a.iI()
t=t.e
if(!(t==null))t.aD()}r=b.d.dO(new Z.fi(a.a),w)
r.ay($.$get$at()).e=this.a.Q.c
if(z)r.ay($.$get$aL()).e=this.a.cx.c
if(v)r.ay($.$get$aK()).e=this.a.ch.c
if(x.rx)r.ay($.$get$aM()).e=this.a.cy.c
if(u)r.ay($.$get$aN()).e=this.a.db.c
if(x.x1)r.ay($.$get$aJ()).e=this.a.dx.c
b.e=r}z=T.d5
q=H.c([],[z])
this.a.a0(a)
if(x.fx){v=this.a
u=a.dx.gY()
v=v.dy
v.toString
v.af(u.ab(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db.gY().u(0,a.dx.gY())
a.cx=u}v=v.fr
v.toString
v.af(u.ab(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.gjz().u(0,a.dx.gY())
a.ch=u}v=v.fy
v.toString
v.af(u.ab(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.k1
v.toString
v.af(C.r.ab(u,!0))}if(x.y1){v=this.a
u=this.c
v=v.k2
v.toString
v.af(C.r.ab(u,!0))}if(x.y2){v=this.a
u=this.d
v=v.k3
v.toString
v.af(C.r.ab(u,!0))}if(x.ar>0){p=this.e.a.length
v=this.a.k4
C.b.O(v.a,v.d,p)
for(v=[P.w],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.j(t,o)
t=t[o]
u.toString
H.e(t,"$isaf")
u=u.r1
if(o>=u.length)return H.j(u,o)
u=u[o]
n=new Float32Array(H.bD(H.i(t.ab(0,!0),"$isb",v,"$asb")))
C.b.ex(u.a,u.d,!1,n)}}switch(x.a){case C.c:break
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
v.ai(v.rx,v.x1,u)
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
v.ad(v.ry,v.x1,u)
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
v.ai(v.y1,v.ar,u)
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
v.ad(v.y2,v.ar,u)
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
v=v.ak
v.toString
t=u.a
s=u.b
u=u.c
C.b.t(v.a,v.d,t,s,u)
break
case C.d:this.U(q,this.x.d)
v=this.a
u=this.x.d
v.ai(v.bx,v.by,u)
u=this.a
v=this.x.f
u=u.ak
u.toString
t=v.a
s=v.b
v=v.c
C.b.t(u.a,u.d,t,s,v)
break
case C.e:this.U(q,this.x.e)
v=this.a
u=this.x.e
v.ad(v.dZ,v.by,u)
u=this.a
v=this.x.f
u=u.ak
u.toString
t=v.a
s=v.b
v=v.c
C.b.t(u.a,u.d,t,s,v)
break}switch(x.d){case C.c:break
case C.f:v=this.a
u=this.y.f
v=v.bz
v.toString
t=u.a
s=u.b
u=u.c
C.b.t(v.a,v.d,t,s,u)
break
case C.d:this.U(q,this.y.d)
v=this.a
u=this.y.d
v.ai(v.e_,v.bA,u)
u=this.a
v=this.y.f
u=u.bz
u.toString
t=v.a
s=v.b
v=v.c
C.b.t(u.a,u.d,t,s,v)
break
case C.e:this.U(q,this.y.e)
v=this.a
u=this.y.e
v.ad(v.e0,v.bA,u)
u=this.a
v=this.y.f
u=u.bz
u.toString
t=v.a
s=v.b
v=v.c
C.b.t(u.a,u.d,t,s,v)
break}switch(x.e){case C.c:break
case C.f:v=this.a
u=this.z.f
v=v.bB
v.toString
t=u.a
s=u.b
u=u.c
C.b.t(v.a,v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bD
C.b.H(u.a,u.d,s)
break
case C.d:this.U(q,this.z.d)
v=this.a
u=this.z.d
v.ai(v.e1,v.bC,u)
u=this.a
v=this.z.f
u=u.bB
u.toString
t=v.a
s=v.b
v=v.c
C.b.t(u.a,u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bD
C.b.H(v.a,v.d,s)
break
case C.e:this.U(q,this.z.e)
v=this.a
u=this.z.e
v.ad(v.e2,v.bC,u)
u=this.a
v=this.z.f
u=u.bB
u.toString
t=v.a
s=v.b
v=v.c
C.b.t(u.a,u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bD
C.b.H(v.a,v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.ed
C.b.O(v.a,v.d,p)
m=a.db.gY()
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.cB
if(l>=t.length)return H.j(t,l)
i=t[l]
t=m.cT(j.a)
s=t.a
h=t.b
g=t.c
g=t.v(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
s=g.a
t=g.b
g=g.c
C.b.t(h.a,h.d,s,t,g)
g=j.c
t=i.c
C.b.t(t.a,t.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.ee
C.b.O(v.a,v.d,p)
m=a.db.gY()
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.cC
if(l>=t.length)return H.j(t,l)
i=t[l]
t=j.gbc(j)
s=i.b
h=t.gcX(t)
g=t.gcY(t)
t=t.gcZ(t)
C.b.t(s.a,s.d,h,g,t)
t=m.bi(j.gbc(j))
g=i.c
C.b.t(g.a,g.d,t.a,t.b,t.c)
t=j.gaq(j)
g=i.d
h=t.gbR()
s=t.gbk()
t=t.gbv()
C.b.t(g.a,g.d,h,s,t)
t=j.gcn()
s=i.e
C.b.H(s.a,s.d,t)
t=j.gco()
s=i.f
C.b.H(s.a,s.d,t)
t=j.gcp()
s=i.r
C.b.H(s.a,s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.ef
C.b.O(v.a,v.d,p)
m=a.db.gY()
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.cD
if(l>=t.length)return H.j(t,l)
i=t[l]
t=j.gbc(j)
s=i.b
h=t.gcX(t)
g=t.gcY(t)
t=t.gcZ(t)
C.b.t(s.a,s.d,h,g,t)
t=j.gcz(j).kD()
g=i.c
h=t.gaQ(t)
s=t.gaR(t)
t=t.gaS()
C.b.t(g.a,g.d,h,s,t)
t=m.bi(j.gbc(j))
s=i.d
C.b.t(s.a,s.d,t.a,t.b,t.c)
t=j.gaq(j)
s=i.e
h=t.gbR()
g=t.gbk()
t=t.gbv()
C.b.t(s.a,s.d,h,g,t)
t=j.gkC()
g=i.f
C.b.H(g.a,g.d,t)
t=j.gkA()
g=i.r
C.b.H(g.a,g.d,t)
t=j.gcn()
g=i.x
C.b.H(g.a,g.d,t)
t=j.gco()
g=i.y
C.b.H(g.a,g.d,t)
t=j.gcp()
g=i.z
C.b.H(g.a,g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.eg
C.b.O(v.a,v.d,p)
m=a.db.gY()
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
s=this.a.cE
if(l>=s.length)return H.j(s,l)
i=s[l]
s=j.gbg()
H.i(q,"$isb",t,"$asb")
if(!C.a.V(q,s)){s.sbM(0,q.length)
C.a.h(q,s)}s=j.gcz(j)
h=i.d
g=s.gaQ(s)
f=s.gaR(s)
s=s.gaS()
C.b.t(h.a,h.d,g,f,s)
s=j.gbT()
f=i.b
g=s.gaQ(s)
h=s.gaR(s)
s=s.gaS()
C.b.t(f.a,f.d,g,h,s)
s=j.gbd(j)
h=i.c
g=s.gaQ(s)
f=s.gaR(s)
s=s.gaS()
C.b.t(h.a,h.d,g,f,s)
s=m.cT(j.gcz(j))
f=s.a
g=s.b
h=s.c
h=s.v(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
f=h.a
s=h.b
h=h.c
C.b.t(g.a,g.d,f,s,h)
h=j.gaq(j)
s=i.f
f=h.gbR()
g=h.gbk()
h=h.gbv()
C.b.t(s.a,s.d,f,g,h)
h=j.gbg()
s=h.gbO(h)
if(!s){s=i.x
C.b.O(s.a,s.d,1)}else{s=i.r
g=h.gbO(h)
f=s.a
s=s.d
if(!g)C.b.O(f,s,0)
else C.b.O(f,s,h.gbM(h))
s=i.x
C.b.O(s.a,s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.eh
C.b.O(v.a,v.d,p)
m=a.db.gY()
for(v=this.dx.y,u=v.length,t=[P.w],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
h=this.a.cF
if(l>=h.length)return H.j(h,l)
i=h[l]
h=j.gbg()
H.i(q,"$isb",s,"$asb")
if(!C.a.V(q,h)){h.sbM(0,q.length)
C.a.h(q,h)}e=m.u(0,j.gY())
h=j.gY()
g=$.bs
if(g==null){g=new V.Z(0,0,0)
$.bs=g}g=h.bi(g)
h=i.b
f=g.gcX(g)
d=g.gcY(g)
g=g.gcZ(g)
C.b.t(h.a,h.d,f,d,g)
h=$.bs
if(h==null){h=new V.Z(0,0,0)
$.bs=h}h=e.bi(h)
g=i.c
C.b.t(g.a,g.d,h.a,h.b,h.c)
h=e.cJ()
g=i.d
n=new Float32Array(H.bD(H.i(new V.ej(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).ab(0,!0),"$isb",t,"$asb")))
C.b.ew(g.a,g.d,!1,n)
g=j.gaq(j)
h=i.e
f=g.gbR()
d=g.gbk()
g=g.gbv()
C.b.t(h.a,h.d,f,d,g)
g=j.gbg()
h=g.gbO(g)
if(!h){h=i.r
C.b.O(h.a,h.d,1)}else{h=i.f
f=g.gjY()
d=h.a
h=h.d
if(!(f>=6))C.b.O(d,h,0)
else C.b.O(d,h,g.gjX())
h=i.r
C.b.O(h.a,h.d,0)}h=j.gcn()
g=i.x
C.b.H(g.a,g.d,h)
h=j.gco()
g=i.y
C.b.H(g.a,g.d,h)
h=j.gcp()
g=i.z
C.b.H(g.a,g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.ei
C.b.O(v.a,v.d,p)
m=a.db.gY()
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.x)(v),++k){j=v[k]
t=this.a.cG
if(l>=t.length)return H.j(t,l)
i=t[l]
t=j.gbg()
H.i(q,"$isb",z,"$asb")
if(!C.a.V(q,t)){t.sbM(0,q.length)
C.a.h(q,t)}t=j.gbc(j)
s=i.b
h=t.gcX(t)
g=t.gcY(t)
t=t.gcZ(t)
C.b.t(s.a,s.d,h,g,t)
t=j.gcz(j)
g=i.c
h=t.gaQ(t)
s=t.gaR(t)
t=t.gaS()
C.b.t(g.a,g.d,h,s,t)
t=j.gbT()
s=i.d
h=t.gaQ(t)
g=t.gaR(t)
t=t.gaS()
C.b.t(s.a,s.d,h,g,t)
t=j.gbd(j)
g=i.e
h=t.gaQ(t)
s=t.gaR(t)
t=t.gaS()
C.b.t(g.a,g.d,h,s,t)
t=m.bi(j.gbc(j))
s=i.f
C.b.t(s.a,s.d,t.a,t.b,t.c)
t=j.gbg()
s=t.gbO(t)
if(!s){t=i.x
C.b.O(t.a,t.d,1)}else{s=i.r
h=t.gbO(t)
g=s.a
s=s.d
if(!h)C.b.O(g,s,0)
else C.b.O(g,s,t.gbM(t))
t=i.x
C.b.O(t.a,t.d,0)}t=j.gaq(j)
s=i.y
h=t.gbR()
g=t.gbk()
t=t.gbv()
C.b.t(s.a,s.d,h,g,t)
t=j.gkJ()
g=i.z
C.b.H(g.a,g.d,t)
t=j.gkK()
g=i.Q
C.b.H(g.a,g.d,t)
t=j.gcn()
g=i.ch
C.b.H(g.a,g.d,t)
t=j.gco()
g=i.cx
C.b.H(g.a,g.d,t)
t=j.gcp()
g=i.cy
C.b.H(g.a,g.d,t);++l}}}switch(x.f){case C.c:break
case C.f:break
case C.d:this.U(q,this.Q.d)
z=this.a
v=this.Q.d
z.ai(z.e3,z.bE,v)
break
case C.e:this.U(q,this.Q.e)
z=this.a
v=this.Q.e
z.ad(z.e4,z.bE,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db.gY().cJ()
a.Q=v}z=z.id
z.toString
z.af(v.ab(0,!0))}if(x.dy){this.U(q,this.ch)
z=this.a
v=this.ch
z.ad(z.e5,z.e6,v)
switch(x.r){case C.c:break
case C.f:z=this.a
v=this.cx.f
z=z.bF
z.toString
u=v.a
t=v.b
v=v.c
C.b.t(z.a,z.d,u,t,v)
break
case C.d:this.U(q,this.cx.d)
z=this.a
v=this.cx.d
z.ai(z.e7,z.bG,v)
v=this.a
z=this.cx.f
v=v.bF
v.toString
u=z.a
t=z.b
z=z.c
C.b.t(v.a,v.d,u,t,z)
break
case C.e:this.U(q,this.cx.e)
z=this.a
v=this.cx.e
z.ad(z.e8,z.bG,v)
v=this.a
z=this.cx.f
v=v.bF
v.toString
u=z.a
t=z.b
z=z.c
C.b.t(v.a,v.d,u,t,z)
break}switch(x.x){case C.c:break
case C.f:z=this.a
v=this.cy.f
z=z.bI
z.toString
u=v.a
t=v.b
v=v.c
C.b.t(z.a,z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bH
C.b.H(v.a,v.d,t)
break
case C.d:this.U(q,this.cy.d)
z=this.a
v=this.cy.d
z.ai(z.e9,z.bJ,v)
v=this.a
z=this.cy.f
v=v.bI
v.toString
u=z.a
t=z.b
z=z.c
C.b.t(v.a,v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bH
C.b.H(z.a,z.d,t)
break
case C.e:this.U(q,this.cy.e)
z=this.a
v=this.cy.e
z.ad(z.ea,z.bJ,v)
v=this.a
z=this.cy.f
v=v.bI
v.toString
u=z.a
t=z.b
z=z.c
C.b.t(v.a,v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bH
C.b.H(z.a,z.d,t)
break}}z=x.y
v=z!==C.c
if(v){switch(z){case C.c:break
case C.f:z=this.a
u=this.db.f
z=z.bK
C.b.H(z.a,z.d,u)
break
case C.d:this.U(q,this.db.d)
z=this.a
u=this.db.d
z.ai(z.eb,z.bL,u)
u=this.a
z=this.db.f
u=u.bK
C.b.H(u.a,u.d,z)
break
case C.e:this.U(q,this.db.e)
z=this.a
u=this.db.e
z.ad(z.ec,z.bL,u)
u=this.a
z=this.db.f
u=u.bK
C.b.H(u.a,u.d,z)
break}z=a.a
C.b.cA(z,3042)
C.b.iH(z,770,771)}for(o=0;o<q.length;++o)q[o].a0(a)
z=b.e
z.a0(a)
z.aa(a)
z.aW(a)
if(v)C.b.j0(a.a,3042)
for(o=0;o<q.length;++o)q[o].aW(a)
z=this.a
z.toString
C.b.cU(a.a,null)
z.x.dU()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dh().ak}},id:{"^":"cU;0f,a,b,0c,0d,0e"},cU:{"^":"a;",
bq:["eY",function(){}]},ie:{"^":"cU;a,b,0c,0d,0e"},b2:{"^":"cU;0f,a,b,0c,0d,0e",
dB:function(a){var z,y
if(!J.P(this.f,a)){z=this.f
this.f=a
y=new D.H(this.b+".color",z,a,this,[V.W])
y.b=!0
this.a.a3(y)}},
bq:["bZ",function(){this.eY()
this.dB(new V.W(1,1,1))}],
saq:function(a,b){var z
if(this.c===C.c){this.c=C.f
this.bq()
z=this.a
z.a=null
z.a3(null)}this.dB(b)}},ih:{"^":"b2;0ch,0f,a,b,0c,0d,0e",
hL:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.H(this.b+".refraction",y,a,this,[P.w])
z.b=!0
this.a.a3(z)}},
bq:function(){this.bZ()
this.hL(1)}},ii:{"^":"b2;0ch,0f,a,b,0c,0d,0e",
ck:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.H(this.b+".shininess",y,a,this,[P.w])
z.b=!0
this.a.a3(z)}},
bq:function(){this.bZ()
this.ck(100)}},j6:{"^":"bv;0a,0b,0c,0d,0e",
gq:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z},
a3:[function(a){var z
H.e(a,"$isv")
z=this.e
if(!(z==null))z.E(a)},function(){return this.a3(null)},"fi","$1","$0","gc_",0,2,0],
eq:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.e(a.fr.l(0,"Skybox"),"$iseF")
if(z==null){y=a.a
z=new A.eF(y,"Skybox")
z.d4(y,"Skybox")
z.ek($.j8,$.j7)
z.z=z.x.l(0,"posAttr")
z.Q=H.d(z.y.l(0,"fov"),"$isT")
z.ch=H.d(z.y.l(0,"ratio"),"$isT")
z.cx=H.d(z.y.l(0,"boxClr"),"$isD")
z.cy=H.d(z.y.l(0,"boxTxt"),"$isaa")
z.db=H.d(z.y.l(0,"viewMat"),"$isas")
a.dJ(z)}this.a=z}if(b.e==null){y=b.d.dO(new Z.fi(a.a),$.$get$at())
y.ay($.$get$at()).e=this.a.z.c
b.e=y}y=this.c
if(y!=null){y.a=1
if(!y.c&&y.d>=6){y.c=!0
x=a.a
C.b.dG(x,33985)
C.b.aO(x,34067,y.b)}}y=a.d
x=a.c
w=this.a
w.a0(a)
v=this.b
u=w.Q
C.b.H(u.a,u.d,v)
v=w.ch
C.b.H(v.a,v.d,y/x)
x=this.c
w.cy.eQ(x)
x=this.d
y=w.cx
C.b.t(y.a,y.d,x.a,x.b,x.c)
x=a.db.gY().cJ()
w=w.db
w.toString
w.af(x.ab(0,!0))
y=b.e
if(y instanceof Z.cG){y.a0(a)
y.aa(a)
y.aW(a)}else b.e=null
y=this.a
y.toString
x=a.a
C.b.cU(x,null)
y.x.dU()
y=this.c
if(y!=null)if(y.c){y.c=!1
C.b.dG(x,33984+y.a)
C.b.aO(x,34067,null)}}},bv:{"^":"a;"}}],["","",,T,{"^":"",d5:{"^":"cD;"},eM:{"^":"d5;0a,0b,0c,0d,0e",
gq:function(){var z=this.e
if(z==null){z=D.C()
this.e=z}return z}},jj:{"^":"a;a,0b,0c,0d,0e",
aK:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.a4
W.V(z,"load",H.k(new T.jk(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
hG:function(a,b,c){var z,y,x,w
b=V.dA(b,2)
z=V.dA(a.width,2)
y=V.dA(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cI(null,null)
x.width=z
x.height=y
w=H.e(C.o.eE(x,"2d"),"$iscJ")
w.imageSmoothingEnabled=!1;(w&&C.y).j2(w,a,0,0,x.width,x.height)
return P.l5(C.y.fP(w,0,0,x.width,x.height))}}},jk:{"^":"t:24;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.hG(this.b,z.c,this.c)
x=z.a
C.b.aO(x,34067,this.d)
C.b.jx(x,37440,this.e?1:0)
C.b.jL(x,this.f,0,6408,6408,5121,y)
C.b.aO(x,34067,null)
x=this.r
if(++x.d>=6){x=x.e
if(!(x==null))x.j3()}++z.e}}}],["","",,V,{"^":"",bj:{"^":"a;",
aU:function(a){return!0},
i:function(a){return"all"},
$isax:1},ax:{"^":"a;"},eh:{"^":"a;0a",
sa4:function(a){this.a=H.i(a,"$isb",[V.ax],"$asb")},
aU:["eX",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x)if(z[x].aU(a))return!0
return!1}],
i:["d3",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.x)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isax:1},aq:{"^":"eh;0a",
aU:function(a){return!this.eX(a)},
i:function(a){return"!["+this.d3(0)+"]"}},iJ:{"^":"a;0a,0b",
aU:function(a){return this.a<=a&&this.b>=a},
i:function(a){var z,y
z=H.cY(this.a)
y=H.cY(this.b)
return z+".."+y},
$isax:1,
n:{
L:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.h(P.p("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.i.aH(a,0)
y=C.i.aH(b,0)
x=new V.iJ()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},iV:{"^":"a;0a",
shK:function(a){this.a=H.i(a,"$isae",[P.y,P.I],"$asae")},
f2:function(a){var z,y
if(a.a.length<=0)throw H.h(P.p("May not create a SetMatcher with zero characters."))
z=new H.b1(0,0,[P.y,P.I])
for(y=new H.cT(a,a.gp(a),0,[H.a_(a,"U",0)]);y.A();)z.X(0,y.d,!0)
this.shK(z)},
aU:function(a){return this.a.dR(a)},
i:function(a){var z=this.a
return P.d2(new H.ec(z,[H.u(z,0)]),0,null)},
$isax:1,
n:{
q:function(a){var z=new V.iV()
z.f2(a)
return z}}},d_:{"^":"a;a,b,0c,0d",
si3:function(a){this.c=H.i(a,"$isb",[V.d8],"$asb")},
k:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.d8(this.a.j(0,b))
w.sa4(H.c([],[V.ax]))
w.c=!1
C.a.h(this.c,w)
return w},
j5:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.x)(z),++x){w=z[x]
if(w.aU(a))return w}return},
i:function(a){return this.b}},eT:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.dC(this.b,"\n","\\n")
y=H.dC(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},d7:{"^":"a;a,b,0c",
shC:function(a){var z=P.n
this.c=H.i(a,"$isae",[z,z],"$asae")},
aC:function(a,b,c){var z,y,x
H.i(c,"$isb",[P.n],"$asb")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.x)(c),++y){x=c[y]
this.c.X(0,x,b)}},
i:function(a){return this.b}},jp:{"^":"a;0a,0b,0c",
shV:function(a){this.a=H.i(a,"$isae",[P.n,V.d_],"$asae")},
si_:function(a){this.b=H.i(a,"$isae",[P.n,V.d7],"$asae")},
j:function(a,b){var z=this.a.l(0,b)
if(z==null){z=new V.d_(this,b)
z.si3(H.c([],[V.d8]))
z.d=null
this.a.X(0,b,z)}return z},
K:function(a){var z,y
z=this.b.l(0,a)
if(z==null){z=new V.d7(this,a)
y=P.n
z.shC(new H.b1(0,0,[y,y]))
this.b.X(0,a,z)}return z},
ev:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.eT])
y=this.c
x=[P.y]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.aH(a,t)
r=y.j5(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.d2(w,0,null)
throw H.h(P.p("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.d2(w,0,null)
p=y.d
o=p.c.l(0,q)
u=new V.eT(o==null?p.b:o,q,t)}++t}}},
n:{
ci:function(){var z,y
z=new V.jp()
y=P.n
z.shV(new H.b1(0,0,[y,V.d_]))
z.si_(new H.b1(0,0,[y,V.d7]))
z.c=null
return z}}},d8:{"^":"eh;b,0c,0a",
i:function(a){return this.b.b+": "+this.d3(0)}}}],["","",,X,{"^":"",c0:{"^":"a;",$isaA:1},hG:{"^":"d4;0a,0b,0c,0d,0e,0f,0r,0x",
gq:function(){var z=this.x
if(z==null){z=D.C()
this.x=z}return z},
a0:function(a){var z,y,x,w,v,u,t,s
z=a.a
C.b.iG(z,36160,null)
C.b.cA(z,2884)
C.b.cA(z,2929)
C.b.j_(z,513)
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
v=w.a
if(typeof y!=="number")return H.B(y)
u=C.k.al(v*y)
v=w.b
if(typeof x!=="number")return H.B(x)
t=C.k.al(v*x)
v=C.k.al(w.c*y)
a.c=v
w=C.k.al(w.d*x)
a.d=w
C.b.jT(z,u,t,v,w)
C.b.iL(z,this.c)
if(this.b){w=this.a
C.b.iK(z,w.a,w.b,w.c,w.d)
s=16640}else s=256
C.b.iJ(z,s)},
n:{
cO:function(a,b,c,d,e,f,g){var z,y
z=new X.hG()
y=new V.aR(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=$.eA
if(y==null){y=V.ez(0,0,1,1)
$.eA=y}z.r=y
return z}}},hO:{"^":"a;0a,0b",
gq:function(){var z=this.b
if(z==null){z=D.C()
this.b=z}return z},
a0:function(a){var z
a.cy.bQ(V.b3())
z=V.b3()
a.db.bQ(z)},
aW:function(a){a.cy.aB()
a.db.aB()},
$isaA:1,
$isc0:1},iv:{"^":"a;0a,0b,0c,0d,0e,0f",
gq:function(){var z=this.f
if(z==null){z=D.C()
this.f=z}return z},
b_:[function(a){var z
H.e(a,"$isv")
z=this.f
if(!(z==null))z.E(a)},function(){return this.b_(null)},"jW","$1","$0","gfl",0,2,0],
a0:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=this.c
w=this.d
v=this.e
u=v-w
t=1/Math.tan(x*0.5)
s=V.ay(-t/(z/y),0,0,0,0,t,0,0,0,0,v/u,-v*w/u,0,0,1,0)
a.cy.bQ(s)
z=$.er
if(z==null){z=V.eu()
y=V.fc()
x=$.f8
if(x==null){x=new V.M(0,0,-1)
$.f8=x}x=V.ek(z,y,x)
$.er=x
r=x}else r=z
z=this.b
if(z!=null){q=z.aX(a,this)
if(q!=null)r=q.u(0,r)}a.db.bQ(r)},
aW:function(a){a.cy.aB()
a.db.aB()},
$isaA:1,
$isc0:1,
n:{
eq:function(a,b,c,d,e){var z,y,x
z=new X.iv()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
if(null!=c){y=z.b
z.b=c
if(c!=null)c.gq().h(0,z.gfl())
x=new D.H("mover",y,z.b,z,[U.a8])
x.b=!0
z.b_(x)}x=z.c
if(!$.m.$2(x,b)){y=z.c
z.c=b
x=new D.H("fov",y,b,z,[P.w])
x.b=!0
z.b_(x)}x=z.d
if(!$.m.$2(x,d)){y=z.d
z.d=d
x=new D.H("near",y,d,z,[P.w])
x.b=!0
z.b_(x)}x=z.e
if(!$.m.$2(x,a)){y=z.e
z.e=a
x=new D.H("far",y,a,z,[P.w])
x.b=!0
z.b_(x)}return z}}},d4:{"^":"a;"}}],["","",,V,{"^":"",
lx:function(a){P.jo(C.K,new V.ly(a))},
aQ:{"^":"a;0d",
sc8:function(a){this.d=H.i(a,"$isb",[[P.b,W.aT]],"$asb")},
bn:function(a){this.b=new P.hM(C.M)
this.c=null
this.sc8(H.c([],[[P.b,W.aT]]))},
J:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.c([],[W.aT]))
y=a.split("\n")
for(z=y.length,x=[W.aT],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.c([],x))
t=document.createElement("div")
t.className="codePart"
H.E(u)
s=this.b.fB(u,0,u.length)
r=s==null?u:s
C.j.eO(t,H.dC(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gbN(this.d),t)}},
ep:function(a){var z,y,x,w
H.i(a,"$isb",[P.n],"$asb")
this.sc8(H.c([],[[P.b,W.aT]]))
z=C.a.k(a,"\n")
y=this.c
if(y==null){y=this.bw()
this.c=y}for(y=y.ev(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.x)(y),++w)this.bP(y[w])}},
ly:{"^":"t:41;a",
$1:function(a){H.e(a,"$isb6")
P.dB(C.k.eu(this.a.gja(),2)+" fps")}},
hj:{"^":"aQ;a,0b,0c,0d",
bP:function(a){switch(a.a){case"Class":this.J(a.b,"#551")
break
case"Comment":this.J(a.b,"#777")
break
case"Id":this.J(a.b,"#111")
break
case"Num":this.J(a.b,"#191")
break
case"Reserved":this.J(a.b,"#119")
break
case"String":this.J(a.b,"#171")
break
case"Symbol":this.J(a.b,"#616")
break
case"Type":this.J(a.b,"#B11")
break
case"Whitespace":this.J(a.b,"#111")
break}},
bw:function(){var z,y,x,w
z=V.ci()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.q(new H.o("_"))
C.a.h(y.a,x)
x=V.L("a","z")
C.a.h(y.a,x)
x=V.L("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.q(new H.o("_"))
C.a.h(x.a,y)
y=V.L("0","9")
C.a.h(x.a,y)
y=V.L("a","z")
C.a.h(x.a,y)
y=V.L("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Int")
x=V.L("0","9")
C.a.h(y.a,x)
x=z.j(0,"Int").k(0,"Int")
y=V.L("0","9")
C.a.h(x.a,y)
y=z.j(0,"Int").k(0,"FloatDot")
x=V.q(new H.o("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").k(0,"Float")
y=V.L("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").k(0,"Float")
x=V.L("0","9")
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"Sym")
y=V.q(new H.o("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.j(0,"Sym").k(0,"Sym")
x=V.q(new H.o("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"OpenDoubleStr")
y=V.q(new H.o('"'))
C.a.h(x.a,y)
y=z.j(0,"OpenDoubleStr").k(0,"CloseDoubleStr")
x=V.q(new H.o('"'))
C.a.h(y.a,x)
x=z.j(0,"OpenDoubleStr").k(0,"EscDoubleStr")
y=V.q(new H.o("\\"))
C.a.h(x.a,y)
y=z.j(0,"EscDoubleStr").k(0,"OpenDoubleStr")
x=V.q(new H.o('"'))
C.a.h(y.a,x)
C.a.h(z.j(0,"OpenDoubleStr").k(0,"OpenDoubleStr").a,new V.bj())
x=z.j(0,"Start").k(0,"OpenSingleStr")
y=V.q(new H.o("'"))
C.a.h(x.a,y)
y=z.j(0,"OpenSingleStr").k(0,"CloseSingleStr")
x=V.q(new H.o("'"))
C.a.h(y.a,x)
x=z.j(0,"OpenSingleStr").k(0,"EscSingleStr")
y=V.q(new H.o("\\"))
C.a.h(x.a,y)
y=z.j(0,"EscSingleStr").k(0,"OpenSingleStr")
x=V.q(new H.o("'"))
C.a.h(y.a,x)
C.a.h(z.j(0,"OpenSingleStr").k(0,"OpenSingleStr").a,new V.bj())
x=z.j(0,"Start").k(0,"Slash")
y=V.q(new H.o("/"))
C.a.h(x.a,y)
y=z.j(0,"Slash").k(0,"Comment")
x=V.q(new H.o("/"))
C.a.h(y.a,x)
x=z.j(0,"Comment").k(0,"EndComment")
y=V.q(new H.o("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").k(0,"Comment")
x=new V.aq()
w=[V.ax]
x.sa4(H.c([],w))
C.a.h(y.a,x)
y=V.q(new H.o("\n"))
C.a.h(x.a,y)
y=z.j(0,"Slash").k(0,"MLComment")
x=V.q(new H.o("*"))
C.a.h(y.a,x)
x=z.j(0,"MLComment").k(0,"MLCStar")
y=V.q(new H.o("*"))
C.a.h(x.a,y)
y=z.j(0,"MLCStar").k(0,"MLComment")
x=new V.aq()
x.sa4(H.c([],w))
C.a.h(y.a,x)
y=V.q(new H.o("*"))
C.a.h(x.a,y)
y=z.j(0,"MLCStar").k(0,"EndComment")
x=V.q(new H.o("/"))
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"Whitespace")
y=V.q(new H.o(" \n\t"))
C.a.h(x.a,y)
y=z.j(0,"Whitespace").k(0,"Whitespace")
x=V.q(new H.o(" \n\t"))
C.a.h(y.a,x)
x=z.j(0,"Int")
x.d=x.a.K("Num")
x=z.j(0,"Float")
x.d=x.a.K("Num")
x=z.j(0,"Sym")
x.d=x.a.K("Symbol")
x=z.j(0,"CloseDoubleStr")
x.d=x.a.K("String")
x=z.j(0,"CloseSingleStr")
x.d=x.a.K("String")
x=z.j(0,"EndComment")
x.d=x.a.K("Comment")
x=z.j(0,"Whitespace")
x.d=x.a.K("Whitespace")
x=z.j(0,"Id")
y=x.a.K("Id")
x.d=y
x=[P.n]
y.aC(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.aC(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.aC(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
hH:{"^":"aQ;a,0b,0c,0d",
bP:function(a){switch(a.a){case"Builtin":this.J(a.b,"#411")
break
case"Comment":this.J(a.b,"#777")
break
case"Id":this.J(a.b,"#111")
break
case"Num":this.J(a.b,"#191")
break
case"Preprocess":this.J(a.b,"#737")
break
case"Reserved":this.J(a.b,"#119")
break
case"Symbol":this.J(a.b,"#611")
break
case"Type":this.J(a.b,"#171")
break
case"Whitespace":this.J(a.b,"#111")
break}},
bw:function(){var z,y,x,w
z=V.ci()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.q(new H.o("_"))
C.a.h(y.a,x)
x=V.L("a","z")
C.a.h(y.a,x)
x=V.L("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.q(new H.o("_"))
C.a.h(x.a,y)
y=V.L("0","9")
C.a.h(x.a,y)
y=V.L("a","z")
C.a.h(x.a,y)
y=V.L("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Int")
x=V.L("0","9")
C.a.h(y.a,x)
x=z.j(0,"Int").k(0,"Int")
y=V.L("0","9")
C.a.h(x.a,y)
y=z.j(0,"Int").k(0,"FloatDot")
x=V.q(new H.o("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").k(0,"Float")
y=V.L("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").k(0,"Float")
x=V.L("0","9")
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"Sym")
y=V.q(new H.o("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.j(0,"Sym").k(0,"Sym")
x=V.q(new H.o("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"Slash")
y=V.q(new H.o("/"))
C.a.h(x.a,y)
y=z.j(0,"Slash").k(0,"Comment")
x=V.q(new H.o("/"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Slash").k(0,"Sym").a,new V.bj())
x=z.j(0,"Comment").k(0,"EndComment")
y=V.q(new H.o("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").k(0,"Comment")
x=new V.aq()
w=[V.ax]
x.sa4(H.c([],w))
C.a.h(y.a,x)
y=V.q(new H.o("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Preprocess")
x=V.q(new H.o("#"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").k(0,"Preprocess")
y=new V.aq()
y.sa4(H.c([],w))
C.a.h(x.a,y)
x=V.q(new H.o("\n"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").k(0,"EndPreprocess")
y=V.q(new H.o("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Whitespace")
x=V.q(new H.o(" \n\t"))
C.a.h(y.a,x)
x=z.j(0,"Whitespace").k(0,"Whitespace")
y=V.q(new H.o(" \n\t"))
C.a.h(x.a,y)
y=z.j(0,"Int")
y.d=y.a.K("Num")
y=z.j(0,"Float")
y.d=y.a.K("Num")
y=z.j(0,"Sym")
y.d=y.a.K("Symbol")
y=z.j(0,"EndComment")
y.d=y.a.K("Comment")
y=z.j(0,"EndPreprocess")
y.d=y.a.K("Preprocess")
y=z.j(0,"Whitespace")
y.d=y.a.K("Whitespace")
y=z.j(0,"Id")
x=y.a.K("Id")
y.d=x
y=[P.n]
x.aC(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.aC(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.aC(0,"Builtin",H.c(["gl_FragColor","gl_Position"],y))
return z}},
hI:{"^":"aQ;a,0b,0c,0d",
bP:function(a){switch(a.a){case"Attr":this.J(a.b,"#911")
this.J("=","#111")
break
case"Id":this.J(a.b,"#111")
break
case"Other":this.J(a.b,"#111")
break
case"Reserved":this.J(a.b,"#119")
break
case"String":this.J(a.b,"#171")
break
case"Symbol":this.J(a.b,"#616")
break}},
bw:function(){var z,y,x
z=V.ci()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.q(new H.o("_"))
C.a.h(y.a,x)
x=V.L("a","z")
C.a.h(y.a,x)
x=V.L("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.q(new H.o("_"))
C.a.h(x.a,y)
y=V.L("0","9")
C.a.h(x.a,y)
y=V.L("a","z")
C.a.h(x.a,y)
y=V.L("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Id").k(0,"Attr")
x=V.q(new H.o("="))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").k(0,"Sym")
x=V.q(new H.o("</\\-!>="))
C.a.h(y.a,x)
x=z.j(0,"Sym").k(0,"Sym")
y=V.q(new H.o("</\\-!>="))
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"OpenStr")
x=V.q(new H.o('"'))
C.a.h(y.a,x)
x=z.j(0,"OpenStr").k(0,"CloseStr")
y=V.q(new H.o('"'))
C.a.h(x.a,y)
y=z.j(0,"OpenStr").k(0,"EscStr")
x=V.q(new H.o("\\"))
C.a.h(y.a,x)
x=z.j(0,"EscStr").k(0,"OpenStr")
y=V.q(new H.o('"'))
C.a.h(x.a,y)
C.a.h(z.j(0,"OpenStr").k(0,"OpenStr").a,new V.bj())
C.a.h(z.j(0,"Start").k(0,"Other").a,new V.bj())
y=z.j(0,"Other").k(0,"Other")
x=new V.aq()
x.sa4(H.c([],[V.ax]))
C.a.h(y.a,x)
y=V.q(new H.o('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.L("a","z")
C.a.h(x.a,y)
y=V.L("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Sym")
y.d=y.a.K("Symbol")
y=z.j(0,"CloseStr")
y.d=y.a.K("String")
y=z.j(0,"Id")
x=y.a.K("Id")
y.d=x
x.aC(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.n]))
x=z.j(0,"Attr")
x.d=x.a.K("Attr")
x=z.j(0,"Other")
x.d=x.a.K("Other")
return z}},
ix:{"^":"aQ;a,0b,0c,0d",
ep:function(a){H.i(a,"$isb",[P.n],"$asb")
this.sc8(H.c([],[[P.b,W.aT]]))
this.J(C.a.k(a,"\n"),"#111")},
bP:function(a){},
bw:function(){return}},
j0:{"^":"a;0a,0b",
f3:function(a,b){var z,y,x,w,v,u,t
z=document
y=z.body
x=z.createElement("div")
x.className="scrollTop";(y&&C.n).B(y,x)
w=z.createElement("div")
w.className="scrollPage"
C.n.B(y,w)
v=z.createElement("div")
v.className="pageCenter"
C.j.B(w,v)
if(a.length!==0){z.title=a
u=z.createElement("div")
u.className="pageTitle"
u.textContent=a
C.j.B(v,u)}t=z.createElement("div")
this.a=t
C.j.B(v,t)
this.b=null
t=W.a4
W.V(z,"scroll",H.k(new V.j3(x),{func:1,ret:-1,args:[t]}),!1,t)},
dI:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.i(a,"$isb",[P.n],"$asb")
this.hQ()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.ev(C.a.je(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.x)(x),++v){u=x[v]
switch(u.a){case"Bold":t=z.createElement("div")
t.className="boldPar"
t.textContent=u.b
C.j.B(y,t)
break
case"Italic":t=z.createElement("div")
t.className="italicPar"
t.textContent=u.b
C.j.B(y,t)
break
case"Code":t=z.createElement("div")
t.className="codePar"
t.textContent=u.b
C.j.B(y,t)
break
case"Link":s=u.b
if(H.fU(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.j(r,1)
q.href=H.E(r[1])
q.textContent=H.E(r[0])
C.j.B(y,q)}else{p=P.fB(C.C,s,C.x,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+p
q.textContent=s
C.j.B(y,q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
C.j.B(y,t)
break}}C.j.B(this.a,y)},
eD:function(a){var z,y,x,w
z=new V.hj("dart")
z.bn("dart")
y=new V.hH("glsl")
y.bn("glsl")
x=new V.hI("html")
x.bn("html")
w=C.a.j7(H.c([z,y,x],[V.aQ]),new V.j4(a))
if(w!=null)return w
z=new V.ix("plain")
z.bn("plain")
return z},
dH:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.i(a2,"$isb",[P.n],"$asb")
z=H.c([],[P.y])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.dx(w).bX(w,"+")){C.a.X(a2,x,C.i.bl(w,1))
C.a.h(z,1)
y=!0}else if(C.i.bX(w,"-")){C.a.X(a2,x,C.i.bl(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.eD(a0)
v.ep(a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
C.j.B(t,s)
C.j.B(this.a,t)
r=P.fB(C.C,a,C.x,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.dG(null)
n.href="#"+r
n.textContent=a
C.j.B(o,n)
C.v.B(p,o)
C.m.B(q,p)
C.p.B(s,q)
if(y)for(m=a1,l=m,x=0;k=v.d,x<k.length;++x){w=k[x]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums codeLineLight"
h=u.createElement("td")
h.className="codeLineNums"
if(x>=z.length)return H.j(z,x)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.x)(w),++e)C.v.B(f,w[e])
C.m.B(j,i)
C.m.B(j,h)
C.m.B(j,f)
C.p.B(s,j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.x)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gN(w);b.A();)C.v.B(h,b.gG())
C.m.B(j,i)
C.m.B(j,h)
C.p.B(s,j)}},
hQ:function(){var z,y,x,w
if(this.b!=null)return
z=V.ci()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Bold")
x=V.q(new H.o("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Bold").k(0,"Bold")
x=new V.aq()
w=[V.ax]
x.sa4(H.c([],w))
C.a.h(y.a,x)
y=V.q(new H.o("*"))
C.a.h(x.a,y)
y=z.j(0,"Bold").k(0,"BoldEnd")
x=V.q(new H.o("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").k(0,"Italic")
x=V.q(new H.o("_"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Italic").k(0,"Italic")
x=new V.aq()
x.sa4(H.c([],w))
C.a.h(y.a,x)
y=V.q(new H.o("_"))
C.a.h(x.a,y)
y=z.j(0,"Italic").k(0,"ItalicEnd")
x=V.q(new H.o("_"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").k(0,"Code")
x=V.q(new H.o("`"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Code").k(0,"Code")
x=new V.aq()
x.sa4(H.c([],w))
C.a.h(y.a,x)
y=V.q(new H.o("`"))
C.a.h(x.a,y)
y=z.j(0,"Code").k(0,"CodeEnd")
x=V.q(new H.o("`"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").k(0,"LinkHead")
x=V.q(new H.o("["))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"LinkHead").k(0,"LinkTail")
x=V.q(new H.o("|"))
C.a.h(y.a,x)
x=z.j(0,"LinkHead").k(0,"LinkEnd")
y=V.q(new H.o("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkHead").k(0,"LinkHead")
y=new V.aq()
y.sa4(H.c([],w))
C.a.h(x.a,y)
x=V.q(new H.o("|]"))
C.a.h(y.a,x)
x=z.j(0,"LinkTail").k(0,"LinkEnd")
y=V.q(new H.o("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkTail").k(0,"LinkTail")
y=new V.aq()
y.sa4(H.c([],w))
C.a.h(x.a,y)
x=V.q(new H.o("|]"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Start").k(0,"Other").a,new V.bj())
x=z.j(0,"Other").k(0,"Other")
y=new V.aq()
y.sa4(H.c([],w))
C.a.h(x.a,y)
x=V.q(new H.o("*_`["))
C.a.h(y.a,x)
x=z.j(0,"BoldEnd")
x.d=x.a.K("Bold")
x=z.j(0,"ItalicEnd")
x.d=x.a.K("Italic")
x=z.j(0,"CodeEnd")
x.d=x.a.K("Code")
x=z.j(0,"LinkEnd")
x.d=x.a.K("Link")
x=z.j(0,"Other")
x.d=x.a.K("Other")
this.b=z},
n:{
j1:function(a,b){var z=new V.j0()
z.f3(a,!0)
return z}}},
j3:{"^":"t:24;a",
$1:function(a){P.eR(C.q,new V.j2(this.a))}},
j2:{"^":"t:2;a",
$0:function(){var z,y,x
z=C.k.al(document.documentElement.scrollTop)
y=this.a.style
x=H.f(-0.01*z)+"px"
y.top=x}},
j4:{"^":"t:42;a",
$1:function(a){return H.e(a,"$isaQ").a===this.a}}}],["","",,B,{"^":"",
fQ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
z=V.j1("Test 013",!0)
y=W.cI(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
C.j.B(z.a,y)
x=[P.n]
z.dI(H.c(["Test of sky box and cover pass."],x))
z.dI(H.c(["\xab[Back to Tests|../]"],x))
w=C.z.eF(document,"testCanvas")
if(w==null)H.r(P.p("Failed to find an element with the identifier, testCanvas."))
v=E.jm(w,!0,!0,!0,!1)
u=new U.e4()
x=U.a8
u.bo(x)
u.aZ(u.gh1(),u.ghm())
u.e=null
u.f=V.b3()
u.r=0
t=v.r
s=new U.jJ()
r=U.cM()
r.scW(0,!0)
r.scK(6.283185307179586)
r.scM(0)
r.sa7(0,0)
r.scL(100)
r.sT(0)
r.scw(0.5)
s.b=r
q=s.gaL()
r.gq().h(0,q)
r=U.cM()
r.scW(0,!0)
r.scK(6.283185307179586)
r.scM(0)
r.sa7(0,0)
r.scL(100)
r.sT(0)
r.scw(0.5)
s.c=r
r.gq().h(0,q)
s.d=null
s.e=!1
s.f=!1
s.r=!1
s.x=2.5
s.y=2.5
s.z=2
s.Q=4
s.cx=!1
s.ch=!1
s.cy=0
s.db=0
s.dx=null
s.dy=0
s.fr=null
s.fx=null
p=new X.az(!1,!1,!1)
o=s.d
s.d=p
r=[X.az]
q=new D.H("modifiers",o,p,s,r)
q.b=!0
s.R(q)
q=s.f
if(q!==!1){s.f=!1
q=new D.H("invertX",q,!1,s,[P.I])
q.b=!0
s.R(q)}q=s.r
if(q!==!1){s.r=!1
q=new D.H("invertY",q,!1,s,[P.I])
q.b=!0
s.R(q)}s.b5(t)
u.h(0,s)
t=v.r
s=new U.jI()
q=U.cM()
q.scW(0,!0)
q.scK(6.283185307179586)
q.scM(0)
q.sa7(0,0)
q.scL(100)
q.sT(0)
q.scw(0.2)
s.b=q
q.gq().h(0,s.gaL())
s.c=null
s.d=!1
s.e=2.5
s.f=2
s.r=4
s.y=!1
s.x=!1
s.z=0
s.Q=null
s.ch=0
s.cx=null
s.cy=null
p=new X.az(!0,!1,!1)
o=s.c
s.c=p
q=new D.H("modifiers",o,p,s,r)
q.b=!0
s.R(q)
s.b5(t)
u.h(0,s)
t=v.r
s=new U.jK()
s.c=0.01
s.d=0
s.e=0
p=new X.az(!1,!1,!1)
s.b=p
r=new D.H("modifiers",null,p,s,r)
r.b=!0
s.R(r)
s.b5(t)
u.h(0,s)
u.h(0,U.dR(V.ay(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
n=X.eq(2000,1.0471975511965976,u,0.1,null)
m=X.cO(!0,!0,!1,null,2000,null,0)
if(m.b){m.b=!1
t=new D.H("clearColor",!0,!1,m,[P.I])
t.b=!0
s=m.x
if(!(s==null))s.E(t)}l=E.e2(null,!0,null,"",null,null)
l.sbW(0,F.lB(30,1,15,0.5))
k=new O.ib()
k.sft(O.cL(V.af))
k.e.aZ(k.gh3(),k.gh4())
t=new O.b2(k,"emission")
t.c=C.c
t.f=new V.W(0,0,0)
k.f=t
t=new O.b2(k,"ambient")
t.c=C.c
t.f=new V.W(0,0,0)
k.r=t
t=new O.b2(k,"diffuse")
t.c=C.c
t.f=new V.W(0,0,0)
k.x=t
t=new O.b2(k,"invDiffuse")
t.c=C.c
t.f=new V.W(0,0,0)
k.y=t
t=new O.ii(k,"specular")
t.c=C.c
t.f=new V.W(0,0,0)
t.ch=100
k.z=t
t=new O.ie(k,"bump")
t.c=C.c
k.Q=t
k.ch=null
t=new O.b2(k,"reflect")
t.c=C.c
t.f=new V.W(0,0,0)
k.cx=t
t=new O.ih(k,"refract")
t.c=C.c
t.f=new V.W(0,0,0)
t.ch=1
k.cy=t
t=new O.id(k,"alpha")
t.c=C.c
t.f=1
k.db=t
t=new D.hY()
t.bo(D.Y)
t.sfF(H.c([],[D.c3]))
t.sht(H.c([],[D.es]))
t.shU(H.c([],[D.eG]))
t.si4(H.c([],[D.eN]))
t.si5(H.c([],[D.eO]))
t.si6(H.c([],[D.eP]))
t.Q=null
t.ch=null
t.d1(t.gh2(),t.ghl(),t.ghn())
k.dx=t
s=t.Q
if(s==null){s=D.C()
t.Q=s
t=s}else t=s
t.h(0,k.ghE())
t=k.dx
s=t.ch
if(s==null){s=D.C()
t.ch=s
t=s}else t=s
t.h(0,k.gc_())
k.dy=null
t=k.dx
j=V.fc()
s=U.dR(V.ek(V.eu(),j,new V.M(0,-1,-1)))
i=new V.W(1,1,1)
r=new D.c3()
r.c=new V.W(1,1,1)
r.a=V.fd()
o=r.b
r.b=s
s.gq().h(0,r.gfa())
x=new D.H("mover",o,r.b,r,[x])
x.b=!0
r.aG(x)
if(!r.c.w(0,i)){o=r.c
r.c=i
x=new D.H("color",o,i,r,[V.W])
x.b=!0
r.aG(x)}t.h(0,r)
x=k.r
x.saq(0,new V.W(0,0,1))
x=k.x
x.saq(0,new V.W(0,1,0))
x=k.z
x.saq(0,new V.W(1,0,0))
x=k.z
if(x.c===C.c){x.c=C.f
x.bZ()
x.ck(100)
t=x.a
t.a=null
t.a3(null)}x.ck(10)
x=v.f
t=x.a
h=t.createTexture()
C.b.aO(t,34067,h)
C.b.bS(t,34067,10242,10497)
C.b.bS(t,34067,10243,10497)
C.b.bS(t,34067,10241,9729)
C.b.bS(t,34067,10240,9729)
C.b.aO(t,34067,null)
g=new T.eM()
g.a=0
g.b=h
g.c=!1
g.d=0
x.aK(g,h,"../resources/maskonaive/posx.jpg",34069,!1,!1)
x.aK(g,h,"../resources/maskonaive/negx.jpg",34070,!1,!1)
x.aK(g,h,"../resources/maskonaive/posy.jpg",34071,!1,!1)
x.aK(g,h,"../resources/maskonaive/negy.jpg",34072,!1,!1)
x.aK(g,h,"../resources/maskonaive/posz.jpg",34073,!1,!1)
x.aK(g,h,"../resources/maskonaive/negz.jpg",34074,!1,!1)
f=new M.hg()
f.sb6(null)
f.sbe(0,null)
f.sbf(null)
x=E.e2(null,!0,null,"",null,null)
e=F.eE()
t=e.a
s=new V.M(-1,-1,1)
s=s.v(0,Math.sqrt(s.C(s)))
d=t.bu(new V.bT(1,2,4,6),new V.aR(1,0,0,1),new V.Z(-1,-1,0),new V.a3(0,1),s,null)
t=e.a
s=new V.M(1,-1,1)
s=s.v(0,Math.sqrt(s.C(s)))
c=t.bu(new V.bT(0,3,4,6),new V.aR(0,0,1,1),new V.Z(1,-1,0),new V.a3(1,1),s,null)
t=e.a
s=new V.M(1,1,1)
s=s.v(0,Math.sqrt(s.C(s)))
b=t.bu(new V.bT(0,2,5,6),new V.aR(0,1,0,1),new V.Z(1,1,0),new V.a3(1,0),s,null)
t=e.a
s=V.aG()
r=new V.M(-1,1,1)
r=r.v(0,Math.sqrt(r.C(r)))
a=t.bu(new V.bT(0,2,4,7),new V.aR(1,1,0,1),new V.Z(-1,1,0),s,r,null)
e.d.iy(H.c([d,c,b,a],[F.ah]))
e.aw()
x.sbW(0,e)
f.d=x
f.e=null
x=new O.j6()
x.b=1.0471975511965976
x.d=new V.W(1,1,1)
o=x.c
x.c=g
g.gq().h(0,x.gc_())
t=new D.H("boxTexture",o,x.c,x,[T.eM])
t.b=!0
x.a3(t)
f.sbf(x)
f.sbe(0,m)
f.sb6(n)
a0=new M.hw()
a0.sfz(0,O.cL(E.an))
a0.d.aZ(a0.gh6(),a0.gh7())
a0.e=null
a0.f=null
a0.r=null
a0.x=null
a0.sb6(null)
a0.sbe(0,null)
a0.sbf(null)
a0.sb6(n)
a0.sbf(k)
a0.sbe(0,m)
a0.d.h(0,l)
x=M.aC
t=H.c([f,a0],[x])
s=new M.he()
s.bo(x)
s.e=!1
s.f=null
s.aZ(s.gho(),s.ghp())
s.a5(0,t)
x=v.d
if(x!==s){if(x!=null)x.gq().M(0,v.gd6())
v.d=s
s.gq().h(0,v.gd6())
v.f6()}x=v.z
if(x==null){x=D.C()
v.z=x}t={func:1,ret:-1,args:[D.v]}
s=H.k(new B.lq(f,z),t)
if(x.b==null)x.sb2(H.c([],[t]))
x=x.b;(x&&C.a).h(x,s)
V.lx(v)},
lq:{"^":"t:7;a,b",
$1:function(a){var z,y,x,w
H.e(a,"$isv")
z=this.a.c
y=this.b
x=z.a
w=[P.n]
y.dH("Vertex Shader for Skybox","glsl",0,H.c((x==null?null:x.c).split("\n"),w))
x=z.a
y.dH("Fragment Shader for Skybox","glsl",0,H.c((x==null?null:x.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.O=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.e8.prototype
return J.e7.prototype}if(typeof a=="string")return J.bP.prototype
if(a==null)return J.e9.prototype
if(typeof a=="boolean")return J.hT.prototype
if(a.constructor==Array)return J.b0.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bQ.prototype
return a}if(a instanceof P.a)return a
return J.ct(a)}
J.cs=function(a){if(typeof a=="string")return J.bP.prototype
if(a==null)return a
if(a.constructor==Array)return J.b0.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bQ.prototype
return a}if(a instanceof P.a)return a
return J.ct(a)}
J.dw=function(a){if(a==null)return a
if(a.constructor==Array)return J.b0.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bQ.prototype
return a}if(a instanceof P.a)return a
return J.ct(a)}
J.lb=function(a){if(typeof a=="number")return J.bO.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bV.prototype
return a}
J.lc=function(a){if(typeof a=="number")return J.bO.prototype
if(typeof a=="string")return J.bP.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bV.prototype
return a}
J.dx=function(a){if(typeof a=="string")return J.bP.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bV.prototype
return a}
J.a6=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bQ.prototype
return a}if(a instanceof P.a)return a
return J.ct(a)}
J.P=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.O(a).w(a,b)}
J.fW=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.lb(a).an(a,b)}
J.dD=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.lc(a).u(a,b)}
J.fX=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ln(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cs(a).l(a,b)}
J.fY=function(a,b,c,d){return J.a6(a).fo(a,b,c,d)}
J.bY=function(a,b){return J.a6(a).hx(a,b)}
J.dE=function(a,b){return J.a6(a).B(a,b)}
J.cz=function(a,b,c){return J.cs(a).iO(a,b,c)}
J.cA=function(a,b){return J.dw(a).a6(a,b)}
J.fZ=function(a){return J.a6(a).giE(a)}
J.aY=function(a){return J.O(a).gZ(a)}
J.bi=function(a){return J.dw(a).gN(a)}
J.aZ=function(a){return J.cs(a).gp(a)}
J.h_=function(a){return J.a6(a).gjy(a)}
J.h0=function(a){return J.a6(a).gjK(a)}
J.cB=function(a,b){return J.a6(a).aY(a,b)}
J.dF=function(a){return J.dw(a).jA(a)}
J.h1=function(a,b,c){return J.dx(a).bm(a,b,c)}
J.h2=function(a){return J.dx(a).jR(a)}
J.au=function(a){return J.O(a).i(a)}
I.aX=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.n=W.bZ.prototype
C.o=W.cH.prototype
C.y=W.cJ.prototype
C.j=W.aT.prototype
C.J=W.ho.prototype
C.L=W.hJ.prototype
C.z=W.hL.prototype
C.N=J.F.prototype
C.a=J.b0.prototype
C.O=J.e7.prototype
C.h=J.e8.prototype
C.r=J.e9.prototype
C.k=J.bO.prototype
C.i=J.bP.prototype
C.V=J.bQ.prototype
C.Z=W.ip.prototype
C.D=J.iw.prototype
C.E=W.iI.prototype
C.b=P.cZ.prototype
C.v=W.jf.prototype
C.p=W.jg.prototype
C.m=W.jh.prototype
C.w=J.bV.prototype
C.F=W.bA.prototype
C.G=W.jZ.prototype
C.H=new P.iu()
C.I=new P.jM()
C.l=new P.kv()
C.c=new A.c1(0,"ColorSourceType.None")
C.f=new A.c1(1,"ColorSourceType.Solid")
C.d=new A.c1(2,"ColorSourceType.Texture2D")
C.e=new A.c1(3,"ColorSourceType.TextureCube")
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
C.x=new P.jL(!1)
$.av=0
$.bk=null
$.dJ=null
$.dm=!1
$.fO=null
$.fJ=null
$.fT=null
$.cr=null
$.cv=null
$.dy=null
$.bb=null
$.bE=null
$.bF=null
$.dn=!1
$.N=C.l
$.aF=null
$.cN=null
$.e1=null
$.e0=null
$.dX=null
$.dW=null
$.dV=null
$.dU=null
$.m=V.ij()
$.el=null
$.et=null
$.bs=null
$.eA=null
$.f7=null
$.fb=null
$.f9=null
$.fa=null
$.ck=null
$.f8=null
$.j8="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.j7="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.er=null
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
I.$lazy(y,x,w)}})(["dT","$get$dT",function(){return H.fN("_$dart_dartClosure")},"cQ","$get$cQ",function(){return H.fN("_$dart_js")},"eV","$get$eV",function(){return H.aD(H.cj({
toString:function(){return"$receiver$"}}))},"eW","$get$eW",function(){return H.aD(H.cj({$method$:null,
toString:function(){return"$receiver$"}}))},"eX","$get$eX",function(){return H.aD(H.cj(null))},"eY","$get$eY",function(){return H.aD(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"f1","$get$f1",function(){return H.aD(H.cj(void 0))},"f2","$get$f2",function(){return H.aD(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"f_","$get$f_",function(){return H.aD(H.f0(null))},"eZ","$get$eZ",function(){return H.aD(function(){try{null.$method$}catch(z){return z.message}}())},"f4","$get$f4",function(){return H.aD(H.f0(void 0))},"f3","$get$f3",function(){return H.aD(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dj","$get$dj",function(){return P.k_()},"bG","$get$bG",function(){return[]},"fA","$get$fA",function(){return P.iM("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dS","$get$dS",function(){return{}},"fp","$get$fp",function(){return P.ed(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.n)},"dk","$get$dk",function(){return P.i1(P.n,P.bL)},"fg","$get$fg",function(){return Z.ai(0)},"fe","$get$fe",function(){return Z.ai(511)},"at","$get$at",function(){return Z.ai(1)},"aL","$get$aL",function(){return Z.ai(2)},"aK","$get$aK",function(){return Z.ai(4)},"aM","$get$aM",function(){return Z.ai(8)},"aN","$get$aN",function(){return Z.ai(16)},"by","$get$by",function(){return Z.ai(32)},"bz","$get$bz",function(){return Z.ai(64)},"ff","$get$ff",function(){return Z.ai(96)},"b9","$get$b9",function(){return Z.ai(128)},"aJ","$get$aJ",function(){return Z.ai(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.v]},{func:1,ret:-1,args:[D.v]},{func:1,ret:P.J},{func:1,ret:-1},{func:1,ret:-1,args:[W.ap]},{func:1,ret:P.J,args:[F.a1]},{func:1,ret:-1,args:[P.y,[P.l,E.an]]},{func:1,ret:P.J,args:[D.v]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.a4]},{func:1,ret:-1,args:[W.b7]},{func:1,ret:P.I,args:[P.n]},{func:1,ret:P.I,args:[W.aB]},{func:1,args:[,]},{func:1,ret:P.J,args:[{func:1,ret:-1,args:[D.v]}]},{func:1,ret:P.J,args:[,]},{func:1,ret:-1,args:[W.bp]},{func:1,ret:P.J,args:[,,]},{func:1,ret:-1,args:[P.y,[P.l,D.Y]]},{func:1,ret:P.w},{func:1,ret:-1,args:[P.y,[P.l,U.a8]]},{func:1,ret:P.n,args:[P.y]},{func:1,ret:-1,args:[P.y,[P.l,M.aC]]},{func:1,ret:-1,args:[P.y,[P.l,V.af]]},{func:1,ret:P.J,args:[W.a4]},{func:1,ret:P.I,args:[W.A]},{func:1,ret:P.I,args:[W.Q,P.n,P.n,W.bW]},{func:1,args:[W.a4]},{func:1,ret:P.n,args:[P.n]},{func:1,ret:-1,args:[W.A,W.A]},{func:1,ret:W.Q,args:[W.A]},{func:1,ret:P.J,args:[{func:1,ret:-1}]},{func:1,args:[,P.n]},{func:1,args:[P.n]},{func:1,ret:P.J,args:[,],opt:[,]},{func:1,ret:[P.aO,,],args:[,]},{func:1,ret:-1,args:[W.bA]},{func:1,ret:P.I,args:[P.w,P.w]},{func:1,ret:V.Z,args:[P.w]},{func:1,ret:P.J,args:[F.ah,P.w,P.w]},{func:1,ret:P.I,args:[[P.l,D.Y]]},{func:1,ret:P.J,args:[P.b6]},{func:1,ret:P.I,args:[V.aQ]},{func:1,ret:P.J,args:[P.ab]}]
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
if(x==y)H.lA(d||a)
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
Isolate.du=a.du
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
if(typeof dartMainRunner==="function")dartMainRunner(B.fQ,[])
else B.fQ([])})})()
//# sourceMappingURL=test.dart.js.map
