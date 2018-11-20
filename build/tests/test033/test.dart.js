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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isE)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
if(a1==="m"){processStatics(init.statics[b2]=b3.m,b4)
delete b3.m}else if(a2===43){w[g]=a1.substring(1)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.de"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.de"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.de(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.df=function(){}
var dart=[["","",,H,{"^":"",kC:{"^":"a;a"}}],["","",,J,{"^":"",
dj:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cf:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dh==null){H.ka()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.i(P.eA("Return interceptor for "+H.h(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cC()]
if(v!=null)return v
v=H.kf(a)
if(v!=null)return v
if(typeof a=="function")return C.L
y=Object.getPrototypeOf(a)
if(y==null)return C.v
if(y===Object.prototype)return C.v
if(typeof w=="function"){Object.defineProperty(w,$.$get$cC(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
E:{"^":"a;",
q:function(a,b){return a===b},
gW:function(a){return H.bk(a)},
i:["ev",function(a){return"Instance of '"+H.aT(a)+"'"}],
"%":"DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo|WebGLRenderbuffer"},
h3:{"^":"E;",
i:function(a){return String(a)},
gW:function(a){return a?519018:218159},
$isU:1},
dO:{"^":"E;",
q:function(a,b){return null==b},
i:function(a){return"null"},
gW:function(a){return 0},
$isD:1},
cD:{"^":"E;",
gW:function(a){return 0},
i:["ew",function(a){return String(a)}]},
hE:{"^":"cD;"},
d5:{"^":"cD;"},
bG:{"^":"cD;",
i:function(a){var z=a[$.$get$dz()]
if(z==null)return this.ew(a)
return"JavaScript function for "+H.h(J.a8(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscy:1},
aQ:{"^":"E;$ti",
h:function(a,b){H.v(b,H.q(a,0))
if(!!a.fixed$length)H.o(P.a5("add"))
a.push(b)},
M:function(a,b){var z
if(!!a.fixed$length)H.o(P.a5("remove"))
for(z=0;z<a.length;++z)if(J.I(a[z],b)){a.splice(z,1)
return!0}return!1},
aV:function(a,b){var z,y
H.f(b,"$isj",[H.q(a,0)],"$asj")
if(!!a.fixed$length)H.o(P.a5("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.u)(b),++y)a.push(b[y])},
a9:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.q(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.i(P.b6(a))}},
A:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.V(z,y,H.h(a[y]))
return z.join(b)},
iv:function(a){return this.A(a,"")},
a8:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
eu:function(a,b,c){var z=a.length
if(b>z)throw H.i(P.ac(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.i(P.ac(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.q(a,0)])
return H.c(a.slice(b,c),[H.q(a,0)])},
gcr:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.i(H.h1())},
aK:function(a,b){var z
for(z=0;z<a.length;++z)if(J.I(a[z],b))return!0
return!1},
i:function(a){return P.cA(a,"[","]")},
gZ:function(a){return new J.a9(a,a.length,0,[H.q(a,0)])},
gW:function(a){return H.bk(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.o(P.a5("set length"))
if(b<0)throw H.i(P.ac(b,0,null,"newLength",null))
a.length=b},
V:function(a,b,c){H.v(c,H.q(a,0))
if(!!a.immutable$list)H.o(P.a5("indexed set"))
if(b>=a.length||b<0)throw H.i(H.by(a,b))
a[b]=c},
$isj:1,
$isb:1,
m:{
h2:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.i(P.cm(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.i(P.ac(a,0,4294967295,"length",null))
return J.dL(new Array(a),b)},
dL:function(a,b){return J.bW(H.c(a,[b]))},
bW:function(a){H.ci(a)
a.fixed$length=Array
return a}}},
kB:{"^":"aQ;$ti"},
a9:{"^":"a;a,b,c,0d,$ti",
scU:function(a){this.d=H.v(a,H.q(this,0))},
gR:function(){return this.d},
C:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.i(H.u(z))
x=this.c
if(x>=y){this.scU(null)
return!1}this.scU(z[x]);++this.c
return!0},
$isaI:1},
bX:{"^":"E;",
j0:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.i(P.a5(""+a+".toInt()"))},
co:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.i(P.a5(""+a+".floor()"))},
ah:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.i(P.a5(""+a+".round()"))},
eb:function(a,b){var z,y
if(b>20)throw H.i(P.ac(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gW:function(a){return a&0x1FFFFFFF},
eq:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
ey:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.di(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.di(a,b)},
di:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.i(P.a5("Result of truncating division is "+H.h(z)+": "+H.h(a)+" ~/ "+b))},
bg:function(a,b){var z
if(a>0)z=this.hh(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
hh:function(a,b){return b>31?0:a>>>b},
aj:function(a,b){if(typeof b!=="number")throw H.i(H.aM(b))
return a<b},
$isr:1,
$isa7:1},
dN:{"^":"bX;",$isw:1},
dM:{"^":"bX;"},
cB:{"^":"E;",
cc:function(a,b){if(b<0)throw H.i(H.by(a,b))
if(b>=a.length)H.o(H.by(a,b))
return a.charCodeAt(b)},
bd:function(a,b){if(b>=a.length)throw H.i(H.by(a,b))
return a.charCodeAt(b)},
D:function(a,b){H.O(b)
if(typeof b!=="string")throw H.i(P.cm(b,null,null))
return a+b},
cO:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.i(P.c0(b,null,null))
if(b>c)throw H.i(P.c0(b,null,null))
if(c>a.length)throw H.i(P.c0(c,null,null))
return a.substring(b,c)},
cN:function(a,b){return this.cO(a,b,null)},
t:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.i(C.z)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
iH:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.t(c,z)+a},
ab:function(a,b){return this.iH(a,b," ")},
i5:function(a,b,c){if(c>a.length)throw H.i(P.ac(c,0,a.length,null,null))
return H.fi(a,b,c)},
i:function(a){return a},
gW:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gn:function(a){return a.length},
$ise1:1,
$isz:1}}],["","",,H,{"^":"",
h1:function(){return new P.ie("No element")},
W:{"^":"iK;a",
gn:function(a){return this.a.length},
j:function(a,b){return C.i.cc(this.a,b)},
$aseB:function(){return[P.w]},
$asP:function(){return[P.w]},
$asj:function(){return[P.w]},
$asb:function(){return[P.w]}},
fL:{"^":"j;"},
dR:{"^":"a;a,b,c,0d,$ti",
saR:function(a){this.d=H.v(a,H.q(this,0))},
gR:function(){return this.d},
C:function(){var z,y,x,w
z=this.a
y=J.ce(z)
x=y.gn(z)
if(this.b!==x)throw H.i(P.b6(z))
w=this.c
if(w>=x){this.saR(null)
return!1}this.saR(y.a8(z,w));++this.c
return!0},
$isaI:1},
hl:{"^":"j;a,b,$ti",
gZ:function(a){return new H.hm(J.bM(this.a),this.b,this.$ti)},
gn:function(a){return J.bz(this.a)},
a8:function(a,b){return this.b.$1(J.dn(this.a,b))},
$asj:function(a,b){return[b]}},
hm:{"^":"aI;0a,b,c,$ti",
saR:function(a){this.a=H.v(a,H.q(this,1))},
C:function(){var z=this.b
if(z.C()){this.saR(this.c.$1(z.gR()))
return!0}this.saR(null)
return!1},
gR:function(){return this.a},
$asaI:function(a,b){return[b]}},
j0:{"^":"j;a,b,$ti",
gZ:function(a){return new H.j1(J.bM(this.a),this.b,this.$ti)}},
j1:{"^":"aI;a,b,$ti",
C:function(){var z,y
for(z=this.a,y=this.b;z.C();)if(y.$1(z.gR()))return!0
return!1},
gR:function(){return this.a.gR()}},
bU:{"^":"a;$ti"},
eB:{"^":"a;$ti"},
iK:{"^":"bY+eB;"}}],["","",,H,{"^":"",
b4:function(a){var z,y
z=H.O(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
k5:function(a){return init.types[H.V(a)]},
kd:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.N(a).$isav},
h:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a8(a)
if(typeof z!=="string")throw H.i(H.aM(a))
return z},
bk:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aT:function(a){return H.hF(a)+H.dc(H.aN(a),0,null)},
hF:function(a){var z,y,x,w,v,u,t,s,r
z=J.N(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.D||!!z.$isd5){u=C.u(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.b4(w.length>1&&C.i.bd(w,0)===36?C.i.cN(w,1):w)},
e6:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
hO:function(a){var z,y,x,w
z=H.c([],[P.w])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.u)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.i(H.aM(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.bg(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.i(H.aM(w))}return H.e6(z)},
e7:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.i(H.aM(x))
if(x<0)throw H.i(H.aM(x))
if(x>65535)return H.hO(a)}return H.e6(a)},
hN:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.bg(z,10))>>>0,56320|z&1023)}throw H.i(P.ac(a,0,1114111,null,null))},
aS:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hM:function(a){var z=H.aS(a).getFullYear()+0
return z},
hK:function(a){var z=H.aS(a).getMonth()+1
return z},
hG:function(a){var z=H.aS(a).getDate()+0
return z},
hH:function(a){var z=H.aS(a).getHours()+0
return z},
hJ:function(a){var z=H.aS(a).getMinutes()+0
return z},
hL:function(a){var z=H.aS(a).getSeconds()+0
return z},
hI:function(a){var z=H.aS(a).getMilliseconds()+0
return z},
y:function(a){throw H.i(H.aM(a))},
k:function(a,b){if(a==null)J.bz(a)
throw H.i(H.by(a,b))},
by:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aF(!0,b,"index",null)
z=H.V(J.bz(a))
if(!(b<0)){if(typeof z!=="number")return H.y(z)
y=b>=z}else y=!0
if(y)return P.ba(b,a,"index",null,z)
return P.c0(b,"index",null)},
k1:function(a,b,c){if(a>c)return new P.c_(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c_(a,c,!0,b,"end","Invalid value")
return new P.aF(!0,b,"end",null)},
aM:function(a){return new P.aF(!0,a,null,null)},
jX:function(a){if(typeof a!=="number")throw H.i(H.aM(a))
return a},
i:function(a){var z
if(a==null)a=new P.e0()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fk})
z.name=""}else z.toString=H.fk
return z},
fk:function(){return J.a8(this.dartException)},
o:function(a){throw H.i(a)},
u:function(a){throw H.i(P.b6(a))},
aO:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kq(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.bg(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cE(H.h(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.e_(H.h(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$ep()
u=$.$get$eq()
t=$.$get$er()
s=$.$get$es()
r=$.$get$ew()
q=$.$get$ex()
p=$.$get$eu()
$.$get$et()
o=$.$get$ez()
n=$.$get$ey()
m=v.aa(y)
if(m!=null)return z.$1(H.cE(H.O(y),m))
else{m=u.aa(y)
if(m!=null){m.method="call"
return z.$1(H.cE(H.O(y),m))}else{m=t.aa(y)
if(m==null){m=s.aa(y)
if(m==null){m=r.aa(y)
if(m==null){m=q.aa(y)
if(m==null){m=p.aa(y)
if(m==null){m=s.aa(y)
if(m==null){m=o.aa(y)
if(m==null){m=n.aa(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.e_(H.O(y),m))}}return z.$1(new H.iJ(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.ee()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aF(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.ee()
return a},
b2:function(a){var z
if(a==null)return new H.eW(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eW(a)},
k3:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.V(0,a[y],a[x])}return b},
kc:function(a,b,c,d,e,f){H.e(a,"$iscy")
switch(H.V(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.i(P.n("Unsupported number of arguments for wrapped closure"))},
b0:function(a,b){var z
H.V(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kc)
a.$identity=z
return z},
fy:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.N(d).$isb){z.$reflectionInfo=d
x=H.hR(z).r}else x=d
w=e?Object.create(new H.ig().constructor.prototype):Object.create(new H.co(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.am
if(typeof u!=="number")return u.D()
$.am=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.dw(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.k5,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.dr:H.cp
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.i("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.dw(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w["call*"]=q
w.$R=z.$R
w.$D=z.$D
return v},
fv:function(a,b,c,d){var z=H.cp
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dw:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fx(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fv(y,!w,z,b)
if(y===0){w=$.am
if(typeof w!=="number")return w.D()
$.am=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b5
if(v==null){v=H.bN("self")
$.b5=v}return new Function(w+H.h(v)+";return "+u+"."+H.h(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.am
if(typeof w!=="number")return w.D()
$.am=w+1
t+=w
w="return function("+t+"){return this."
v=$.b5
if(v==null){v=H.bN("self")
$.b5=v}return new Function(w+H.h(v)+"."+H.h(z)+"("+t+");}")()},
fw:function(a,b,c,d){var z,y
z=H.cp
y=H.dr
switch(b?-1:a){case 0:throw H.i(H.i_("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fx:function(a,b){var z,y,x,w,v,u,t,s
z=$.b5
if(z==null){z=H.bN("self")
$.b5=z}y=$.dq
if(y==null){y=H.bN("receiver")
$.dq=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fw(w,!u,x,b)
if(w===1){z="return function(){return this."+H.h(z)+"."+H.h(x)+"(this."+H.h(y)+");"
y=$.am
if(typeof y!=="number")return y.D()
$.am=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.h(z)+"."+H.h(x)+"(this."+H.h(y)+", "+s+");"
y=$.am
if(typeof y!=="number")return y.D()
$.am=y+1
return new Function(z+y+"}")()},
de:function(a,b,c,d,e,f,g){return H.fy(a,b,H.V(c),d,!!e,!!f,g)},
O:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.i(H.aj(a,"String"))},
kZ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aj(a,"double"))},
ki:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aj(a,"num"))},
f8:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.i(H.aj(a,"bool"))},
V:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.i(H.aj(a,"int"))},
fg:function(a,b){throw H.i(H.aj(a,H.b4(H.O(b).substring(3))))},
kk:function(a,b){throw H.i(H.fu(a,H.b4(H.O(b).substring(3))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.N(a)[b])return a
H.fg(a,b)},
d:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.N(a)[b]
else z=!0
if(z)return a
H.kk(a,b)},
ci:function(a){if(a==null)return a
if(!!J.N(a).$isb)return a
throw H.i(H.aj(a,"List<dynamic>"))},
ke:function(a,b){var z
if(a==null)return a
z=J.N(a)
if(!!z.$isb)return a
if(z[b])return a
H.fg(a,b)},
f9:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.V(z)]
else return a.$S()}return},
bK:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.f9(J.N(a))
if(z==null)return!1
return H.f_(z,null,b,null)},
l:function(a,b){var z,y
if(a==null)return a
if($.d9)return a
$.d9=!0
try{if(H.bK(a,b))return a
z=H.ck(b)
y=H.aj(a,z)
throw H.i(y)}finally{$.d9=!1}},
dg:function(a,b){if(a!=null&&!H.dd(a,b))H.o(H.aj(a,H.ck(b)))
return a},
f3:function(a){var z,y
z=J.N(a)
if(!!z.$ist){y=H.f9(z)
if(y!=null)return H.ck(y)
return"Closure"}return H.aT(a)},
kp:function(a){throw H.i(new P.fD(H.O(a)))},
fb:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
aN:function(a){if(a==null)return
return a.$ti},
l_:function(a,b,c){return H.b3(a["$as"+H.h(c)],H.aN(b))},
cg:function(a,b,c,d){var z
H.O(c)
H.V(d)
z=H.b3(a["$as"+H.h(c)],H.aN(b))
return z==null?null:z[d]},
a6:function(a,b,c){var z
H.O(b)
H.V(c)
z=H.b3(a["$as"+H.h(b)],H.aN(a))
return z==null?null:z[c]},
q:function(a,b){var z
H.V(b)
z=H.aN(a)
return z==null?null:z[b]},
ck:function(a){return H.aL(a,null)},
aL:function(a,b){var z,y
H.f(b,"$isb",[P.z],"$asb")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.b4(a[0].builtin$cls)+H.dc(a,1,b)
if(typeof a=="function")return H.b4(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.V(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.k(b,y)
return H.h(b[y])}if('func' in a)return H.jN(a,b)
if('futureOr' in a)return"FutureOr<"+H.aL("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jN:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.z]
H.f(b,"$isb",z,"$asb")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.k(b,r)
t=C.i.D(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aL(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aL(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aL(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aL(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.k2(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.O(z[l])
n=n+m+H.aL(i[h],b)+(" "+H.h(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dc:function(a,b,c){var z,y,x,w,v,u
H.f(c,"$isb",[P.z],"$asb")
if(a==null)return""
z=new P.bI("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aL(u,c)}return"<"+z.i(0)+">"},
b3:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bx:function(a,b,c,d){var z,y
H.O(b)
H.ci(c)
H.O(d)
if(a==null)return!1
z=H.aN(a)
y=J.N(a)
if(y[b]==null)return!1
return H.f6(H.b3(y[d],z),null,c,null)},
f:function(a,b,c,d){H.O(b)
H.ci(c)
H.O(d)
if(a==null)return a
if(H.bx(a,b,c,d))return a
throw H.i(H.aj(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.b4(b.substring(3))+H.dc(c,0,null),init.mangledGlobalNames)))},
f6:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.af(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.af(a[y],b,c[y],d))return!1
return!0},
kX:function(a,b,c){return a.apply(b,H.b3(J.N(b)["$as"+H.h(c)],H.aN(b)))},
fd:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="D"||a===-1||a===-2||H.fd(z)}return!1},
dd:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="a"||b.builtin$cls==="D"||b===-1||b===-2||H.fd(b)
if(b==null||b===-1||b.builtin$cls==="a"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dd(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bK(a,b)}z=J.N(a).constructor
y=H.aN(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.af(z,null,b,null)},
v:function(a,b){if(a!=null&&!H.dd(a,b))throw H.i(H.aj(a,H.ck(b)))
return a},
af:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.af(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="D")return!0
if('func' in c)return H.f_(a,b,c,d)
if('func' in a)return c.builtin$cls==="cy"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.af("type" in a?a.type:null,b,x,d)
else if(H.af(a,b,x,d))return!0
else{if(!('$is'+"b9" in y.prototype))return!1
w=y.prototype["$as"+"b9"]
v=H.b3(w,z?a.slice(1):null)
return H.af(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.f6(H.b3(r,z),b,u,d)},
f_:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.af(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.af(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.af(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.af(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kh(m,b,l,d)},
kh:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.af(c[w],d,a[w],b))return!1}return!0},
kY:function(a,b,c){Object.defineProperty(a,H.O(b),{value:c,enumerable:false,writable:true,configurable:true})},
kf:function(a){var z,y,x,w,v,u
z=H.O($.fc.$1(a))
y=$.cd[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ch[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.O($.f5.$2(a,z))
if(z!=null){y=$.cd[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ch[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cj(x)
$.cd[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.ch[z]=x
return x}if(v==="-"){u=H.cj(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.ff(a,x)
if(v==="*")throw H.i(P.eA(z))
if(init.leafTags[z]===true){u=H.cj(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.ff(a,x)},
ff:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dj(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cj:function(a){return J.dj(a,!1,null,!!a.$isav)},
kg:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cj(z)
else return J.dj(z,c,null,null)},
ka:function(){if(!0===$.dh)return
$.dh=!0
H.kb()},
kb:function(){var z,y,x,w,v,u,t,s
$.cd=Object.create(null)
$.ch=Object.create(null)
H.k6()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fh.$1(v)
if(u!=null){t=H.kg(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
k6:function(){var z,y,x,w,v,u,t
z=C.I()
z=H.b_(C.F,H.b_(C.K,H.b_(C.t,H.b_(C.t,H.b_(C.J,H.b_(C.G,H.b_(C.H(C.u),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fc=new H.k7(v)
$.f5=new H.k8(u)
$.fh=new H.k9(t)},
b_:function(a,b){return a(b)||b},
fi:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fj:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hQ:{"^":"a;a,b,c,d,e,f,r,0x",m:{
hR:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bW(z)
y=z[0]
x=z[1]
return new H.hQ(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ix:{"^":"a;a,b,c,d,e,f",
aa:function(a){var z,y,x
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
m:{
ar:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.z])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ix(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c5:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
ev:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hB:{"^":"T;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.h(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
m:{
e_:function(a,b){return new H.hB(a,b==null?null:b.method)}}},
h6:{"^":"T;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.h(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.h(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.h(this.a)+")"},
m:{
cE:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.h6(a,y,z?null:b.receiver)}}},
iJ:{"^":"T;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kq:{"^":"t:14;a",
$1:function(a){if(!!J.N(a).$isT)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eW:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isay:1},
t:{"^":"a;",
i:function(a){return"Closure '"+H.aT(this).trim()+"'"},
gef:function(){return this},
$iscy:1,
gef:function(){return this}},
eg:{"^":"t;"},
ig:{"^":"eg;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.b4(z)+"'"}},
co:{"^":"eg;a,b,c,d",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.co))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gW:function(a){var z,y
z=this.c
if(z==null)y=H.bk(this.a)
else y=typeof z!=="object"?J.aP(z):H.bk(z)
return(y^H.bk(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.h(this.d)+"' of "+("Instance of '"+H.aT(z)+"'")},
m:{
cp:function(a){return a.a},
dr:function(a){return a.c},
bN:function(a){var z,y,x,w,v
z=new H.co("self","target","receiver","name")
y=J.bW(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iy:{"^":"T;a",
i:function(a){return this.a},
m:{
aj:function(a,b){return new H.iy("TypeError: "+H.h(P.bS(a))+": type '"+H.f3(a)+"' is not a subtype of type '"+b+"'")}}},
ft:{"^":"T;a",
i:function(a){return this.a},
m:{
fu:function(a,b){return new H.ft("CastError: "+H.h(P.bS(a))+": type '"+H.f3(a)+"' is not a subtype of type '"+b+"'")}}},
hZ:{"^":"T;a",
i:function(a){return"RuntimeError: "+H.h(this.a)},
m:{
i_:function(a){return new H.hZ(a)}}},
bb:{"^":"hi;a,0b,0c,0d,0e,0f,r,$ti",
gn:function(a){return this.a},
dv:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.d2(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.d2(y,a)}else return this.it(a)},
it:function(a){var z=this.d
if(z==null)return!1
return this.cp(this.bN(z,J.aP(a)&0x3ffffff),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.be(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.be(w,b)
x=y==null?null:y.b
return x}else return this.iu(b)},
iu:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bN(z,J.aP(a)&0x3ffffff)
x=this.cp(y,a)
if(x<0)return
return y[x].b},
V:function(a,b,c){var z,y,x,w,v,u
H.v(b,H.q(this,0))
H.v(c,H.q(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bV()
this.b=z}this.cW(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bV()
this.c=y}this.cW(y,b,c)}else{x=this.d
if(x==null){x=this.bV()
this.d=x}w=J.aP(b)&0x3ffffff
v=this.bN(x,w)
if(v==null)this.c1(x,w,[this.bW(b,c)])
else{u=this.cp(v,b)
if(u>=0)v[u].b=c
else v.push(this.bW(b,c))}}},
a9:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.i(P.b6(this))
z=z.c}},
cW:function(a,b,c){var z
H.v(b,H.q(this,0))
H.v(c,H.q(this,1))
z=this.be(a,b)
if(z==null)this.c1(a,b,this.bW(b,c))
else z.b=c},
bW:function(a,b){var z,y
z=new H.ha(H.v(a,H.q(this,0)),H.v(b,H.q(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.r=this.r+1&67108863
return z},
cp:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.I(a[y].a,b))return y
return-1},
i:function(a){return P.dT(this)},
be:function(a,b){return a[b]},
bN:function(a,b){return a[b]},
c1:function(a,b,c){a[b]=c},
f5:function(a,b){delete a[b]},
d2:function(a,b){return this.be(a,b)!=null},
bV:function(){var z=Object.create(null)
this.c1(z,"<non-identifier-key>",z)
this.f5(z,"<non-identifier-key>")
return z},
$isdQ:1},
ha:{"^":"a;a,b,0c,0d"},
hb:{"^":"fL;a,$ti",
gn:function(a){return this.a.a},
gZ:function(a){var z,y
z=this.a
y=new H.hc(z,z.r,this.$ti)
y.c=z.e
return y}},
hc:{"^":"a;a,b,0c,0d,$ti",
scV:function(a){this.d=H.v(a,H.q(this,0))},
gR:function(){return this.d},
C:function(){var z=this.a
if(this.b!==z.r)throw H.i(P.b6(z))
else{z=this.c
if(z==null){this.scV(null)
return!1}else{this.scV(z.a)
this.c=this.c.c
return!0}}},
$isaI:1},
k7:{"^":"t:14;a",
$1:function(a){return this.a(a)}},
k8:{"^":"t:33;a",
$2:function(a,b){return this.a(a,b)}},
k9:{"^":"t:31;a",
$1:function(a){return this.a(H.O(a))}},
h4:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$ise1:1,
m:{
h5:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.i(new P.fU("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
k2:function(a){return J.dL(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kj:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bt:function(a){return a},
bs:function(a,b,c){if(a>>>0!==a||a>=c)throw H.i(H.by(b,a))},
jM:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.i(H.k1(a,b,c))
return b},
hz:{"^":"E;",$iskN:1,"%":";ArrayBufferView;cK|eS|eT|hy|eU|eV|bg"},
cK:{"^":"hz;",
gn:function(a){return a.length},
$isav:1,
$asav:I.df},
hy:{"^":"eT;",
j:function(a,b){H.bs(b,a,a.length)
return a[b]},
$asbU:function(){return[P.r]},
$asP:function(){return[P.r]},
$isj:1,
$asj:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]},
"%":"Float32Array"},
bg:{"^":"eV;",
$asbU:function(){return[P.w]},
$asP:function(){return[P.w]},
$isj:1,
$asj:function(){return[P.w]},
$isb:1,
$asb:function(){return[P.w]}},
kD:{"^":"bg;",
j:function(a,b){H.bs(b,a,a.length)
return a[b]},
"%":"Int16Array"},
kE:{"^":"bg;",
j:function(a,b){H.bs(b,a,a.length)
return a[b]},
"%":"Int32Array"},
kF:{"^":"bg;",
j:function(a,b){H.bs(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
kG:{"^":"bg;",
gn:function(a){return a.length},
j:function(a,b){H.bs(b,a,a.length)
return a[b]},
$iskO:1,
"%":"CanvasPixelArray|Uint8ClampedArray"},
kH:{"^":"bg;",
gn:function(a){return a.length},
j:function(a,b){H.bs(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
eS:{"^":"cK+P;"},
eT:{"^":"eS+bU;"},
eU:{"^":"cK+P;"},
eV:{"^":"eU+bU;"}}],["","",,P,{"^":"",
j3:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jU()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b0(new P.j5(z),1)).observe(y,{childList:true})
return new P.j4(z,y,x)}else if(self.setImmediate!=null)return P.jV()
return P.jW()},
kR:[function(a){self.scheduleImmediate(H.b0(new P.j6(H.l(a,{func:1,ret:-1})),0))},"$1","jU",4,0,7],
kS:[function(a){self.setImmediate(H.b0(new P.j7(H.l(a,{func:1,ret:-1})),0))},"$1","jV",4,0,7],
kT:[function(a){P.cU(C.n,H.l(a,{func:1,ret:-1}))},"$1","jW",4,0,7],
cU:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.h.a1(a.a,1000)
return P.jC(z<0?0:z,b)},
em:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.aU]})
z=C.h.a1(a.a,1000)
return P.jD(z<0?0:z,b)},
jQ:function(a,b){if(H.bK(a,{func:1,args:[P.a,P.ay]}))return H.l(a,{func:1,ret:null,args:[P.a,P.ay]})
if(H.bK(a,{func:1,args:[P.a]}))return H.l(a,{func:1,ret:null,args:[P.a]})
throw H.i(P.cm(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jP:function(){var z,y
for(;z=$.aZ,z!=null;){$.bv=null
y=z.b
$.aZ=y
if(y==null)$.bu=null
z.a.$0()}},
kW:[function(){$.da=!0
try{P.jP()}finally{$.bv=null
$.da=!1
if($.aZ!=null)$.$get$d7().$1(P.f7())}},"$0","f7",0,0,3],
f2:function(a){var z=new P.eM(H.l(a,{func:1,ret:-1}))
if($.aZ==null){$.bu=z
$.aZ=z
if(!$.da)$.$get$d7().$1(P.f7())}else{$.bu.b=z
$.bu=z}},
jT:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.aZ
if(z==null){P.f2(a)
$.bv=$.bu
return}y=new P.eM(a)
x=$.bv
if(x==null){y.b=z
$.bv=y
$.aZ=y}else{y.b=x.b
x.b=y
$.bv=y
if(y.b==null)$.bu=y}},
kl:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.H
if(C.k===y){P.cc(null,null,C.k,a)
return}y.toString
P.cc(null,null,y,H.l(y.c7(a),z))},
el:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.H
if(y===C.k){y.toString
return P.cU(a,b)}return P.cU(a,H.l(y.c7(b),z))},
iu:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aU]}
H.l(b,z)
y=$.H
if(y===C.k){y.toString
return P.em(a,b)}x=y.dq(b,P.aU)
$.H.toString
return P.em(a,H.l(x,z))},
cb:function(a,b,c,d,e){var z={}
z.a=d
P.jT(new P.jR(z,e))},
f0:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.H
if(y===c)return d.$0()
$.H=c
z=y
try{y=d.$0()
return y}finally{$.H=z}},
f1:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.v(e,g)
y=$.H
if(y===c)return d.$1(e)
$.H=c
z=y
try{y=d.$1(e)
return y}finally{$.H=z}},
jS:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.v(e,h)
H.v(f,i)
y=$.H
if(y===c)return d.$2(e,f)
$.H=c
z=y
try{y=d.$2(e,f)
return y}finally{$.H=z}},
cc:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.k!==c
if(z)d=!(!z||!1)?c.c7(d):c.hY(d,-1)
P.f2(d)},
j5:{"^":"t:11;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
j4:{"^":"t:27;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
j6:{"^":"t:2;a",
$0:function(){this.a.$0()}},
j7:{"^":"t:2;a",
$0:function(){this.a.$0()}},
eX:{"^":"a;a,0b,c",
eP:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b0(new P.jF(this,b),0),a)
else throw H.i(P.a5("`setTimeout()` not found."))},
eQ:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b0(new P.jE(this,a,Date.now(),b),0),a)
else throw H.i(P.a5("Periodic timer."))},
$isaU:1,
m:{
jC:function(a,b){var z=new P.eX(!0,0)
z.eP(a,b)
return z},
jD:function(a,b){var z=new P.eX(!1,0)
z.eQ(a,b)
return z}}},
jF:{"^":"t:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
jE:{"^":"t:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.ey(w,x)}z.c=y
this.d.$1(z)}},
aY:{"^":"a;0a,b,c,d,e,$ti",
iA:function(a){if(this.c!==6)return!0
return this.b.b.cB(H.l(this.d,{func:1,ret:P.U,args:[P.a]}),a.a,P.U,P.a)},
ir:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.q(this,1)}
w=this.b.b
if(H.bK(z,{func:1,args:[P.a,P.ay]}))return H.dg(w.iV(z,a.a,a.b,null,y,P.ay),x)
else return H.dg(w.cB(H.l(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aE:{"^":"a;dh:a<,b,0h7:c<,$ti",
ea:function(a,b,c){var z,y,x,w
z=H.q(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.H
if(y!==C.k){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.jQ(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aE(0,$.H,[c])
w=b==null?1:3
this.cX(new P.aY(x,w,a,b,[z,c]))
return x},
j_:function(a,b){return this.ea(a,null,b)},
cX:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isaY")
this.c=a}else{if(z===2){y=H.e(this.c,"$isaE")
z=y.a
if(z<4){y.cX(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cc(null,null,z,H.l(new P.je(this,a),{func:1,ret:-1}))}},
de:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isaY")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isaE")
y=u.a
if(y<4){u.de(a)
return}this.a=y
this.c=u.c}z.a=this.bf(a)
y=this.b
y.toString
P.cc(null,null,y,H.l(new P.jj(z,this),{func:1,ret:-1}))}},
c_:function(){var z=H.e(this.c,"$isaY")
this.c=null
return this.bf(z)},
bf:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cZ:function(a){var z,y,x
z=H.q(this,0)
H.dg(a,{futureOr:1,type:z})
y=this.$ti
if(H.bx(a,"$isb9",y,"$asb9"))if(H.bx(a,"$isaE",y,null))P.eO(a,this)
else P.jf(a,this)
else{x=this.c_()
H.v(a,z)
this.a=4
this.c=a
P.bq(this,x)}},
d_:function(a,b){var z
H.e(b,"$isay")
z=this.c_()
this.a=8
this.c=new P.aa(a,b)
P.bq(this,z)},
$isb9:1,
m:{
jf:function(a,b){var z,y,x
b.a=1
try{a.ea(new P.jg(b),new P.jh(b),null)}catch(x){z=H.aO(x)
y=H.b2(x)
P.kl(new P.ji(b,z,y))}},
eO:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isaE")
if(z>=4){y=b.c_()
b.a=a.a
b.c=a.c
P.bq(b,y)}else{y=H.e(b.c,"$isaY")
b.a=2
b.c=a
a.de(y)}},
bq:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isaa")
y=y.b
u=v.a
t=v.b
y.toString
P.cb(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bq(z.a,b)}y=z.a
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
if(p){H.e(r,"$isaa")
y=y.b
u=r.a
t=r.b
y.toString
P.cb(null,null,y,u,t)
return}o=$.H
if(o==null?q!=null:o!==q)$.H=q
else o=null
y=b.c
if(y===8)new P.jm(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jl(x,b,r).$0()}else if((y&2)!==0)new P.jk(z,x,b).$0()
if(o!=null)$.H=o
y=x.b
if(!!J.N(y).$isb9){if(y.a>=4){n=H.e(t.c,"$isaY")
t.c=null
b=t.bf(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eO(y,t)
return}}m=b.b
n=H.e(m.c,"$isaY")
m.c=null
b=m.bf(n)
y=x.a
u=x.b
if(!y){H.v(u,H.q(m,0))
m.a=4
m.c=u}else{H.e(u,"$isaa")
m.a=8
m.c=u}z.a=m
y=m}}}},
je:{"^":"t:2;a,b",
$0:function(){P.bq(this.a,this.b)}},
jj:{"^":"t:2;a,b",
$0:function(){P.bq(this.b,this.a.a)}},
jg:{"^":"t:11;a",
$1:function(a){var z=this.a
z.a=0
z.cZ(a)}},
jh:{"^":"t:25;a",
$2:function(a,b){this.a.d_(a,H.e(b,"$isay"))},
$1:function(a){return this.$2(a,null)}},
ji:{"^":"t:2;a,b,c",
$0:function(){this.a.d_(this.b,this.c)}},
jm:{"^":"t:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.e9(H.l(w.d,{func:1}),null)}catch(v){y=H.aO(v)
x=H.b2(v)
if(this.d){w=H.e(this.a.a.c,"$isaa").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isaa")
else u.b=new P.aa(y,x)
u.a=!0
return}if(!!J.N(z).$isb9){if(z instanceof P.aE&&z.gdh()>=4){if(z.gdh()===8){w=this.b
w.b=H.e(z.gh7(),"$isaa")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.j_(new P.jn(t),null)
w.a=!1}}},
jn:{"^":"t:26;a",
$1:function(a){return this.a}},
jl:{"^":"t:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.q(x,0)
v=H.v(this.c,w)
u=H.q(x,1)
this.a.b=x.b.b.cB(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aO(t)
y=H.b2(t)
x=this.a
x.b=new P.aa(z,y)
x.a=!0}}},
jk:{"^":"t:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isaa")
w=this.c
if(w.iA(z)&&w.e!=null){v=this.b
v.b=w.ir(z)
v.a=!1}}catch(u){y=H.aO(u)
x=H.b2(u)
w=H.e(this.a.a.c,"$isaa")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.aa(y,x)
s.a=!0}}},
eM:{"^":"a;a,0b"},
ii:{"^":"a;$ti",
gn:function(a){var z,y,x,w
z={}
y=new P.aE(0,$.H,[P.w])
z.a=0
x=H.q(this,0)
w=H.l(new P.ik(z,this),{func:1,ret:-1,args:[x]})
H.l(new P.il(z,y),{func:1,ret:-1})
W.S(this.a,this.b,w,!1,x)
return y}},
ik:{"^":"t;a,b",
$1:function(a){H.v(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.D,args:[H.q(this.b,0)]}}},
il:{"^":"t:2;a,b",
$0:function(){this.b.cZ(this.a.a)}},
cQ:{"^":"a;$ti"},
ij:{"^":"a;"},
aU:{"^":"a;"},
aa:{"^":"a;a,b",
i:function(a){return H.h(this.a)},
$isT:1},
jK:{"^":"a;",$iskQ:1},
jR:{"^":"t:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.e0()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.i(z)
x=H.i(z)
x.stack=y.i(0)
throw x}},
jy:{"^":"jK;",
iW:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.k===$.H){a.$0()
return}P.f0(null,null,this,a,-1)}catch(x){z=H.aO(x)
y=H.b2(x)
P.cb(null,null,this,z,H.e(y,"$isay"))}},
iX:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.v(b,c)
try{if(C.k===$.H){a.$1(b)
return}P.f1(null,null,this,a,b,-1,c)}catch(x){z=H.aO(x)
y=H.b2(x)
P.cb(null,null,this,z,H.e(y,"$isay"))}},
hY:function(a,b){return new P.jA(this,H.l(a,{func:1,ret:b}),b)},
c7:function(a){return new P.jz(this,H.l(a,{func:1,ret:-1}))},
dq:function(a,b){return new P.jB(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
e9:function(a,b){H.l(a,{func:1,ret:b})
if($.H===C.k)return a.$0()
return P.f0(null,null,this,a,b)},
cB:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.v(b,d)
if($.H===C.k)return a.$1(b)
return P.f1(null,null,this,a,b,c,d)},
iV:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.v(b,e)
H.v(c,f)
if($.H===C.k)return a.$2(b,c)
return P.jS(null,null,this,a,b,c,d,e,f)}},
jA:{"^":"t;a,b,c",
$0:function(){return this.a.e9(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jz:{"^":"t:3;a,b",
$0:function(){return this.a.iW(this.b)}},
jB:{"^":"t;a,b,c",
$1:function(a){var z=this.c
return this.a.iX(this.b,H.v(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hd:function(a,b,c){H.ci(a)
return H.f(H.k3(a,new H.bb(0,0,[b,c])),"$isdQ",[b,c],"$asdQ")},
he:function(a,b,c,d){return new P.js(0,0,[d])},
h0:function(a,b,c){var z,y
if(P.db(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bw()
C.a.h(y,a)
try{P.jO(a,z)}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=P.ef(b,H.ke(z,"$isj"),", ")+c
return y.charCodeAt(0)==0?y:y},
cA:function(a,b,c){var z,y,x
if(P.db(a))return b+"..."+c
z=new P.bI(b)
y=$.$get$bw()
C.a.h(y,a)
try{x=z
x.a=P.ef(x.gaD(),a,", ")}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=z
y.a=y.gaD()+c
y=z.gaD()
return y.charCodeAt(0)==0?y:y},
db:function(a){var z,y
for(z=0;y=$.$get$bw(),z<y.length;++z)if(a===y[z])return!0
return!1},
jO:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gZ(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.C())return
w=H.h(z.gR())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.C()){if(x<=5)return
if(0>=b.length)return H.k(b,-1)
v=b.pop()
if(0>=b.length)return H.k(b,-1)
u=b.pop()}else{t=z.gR();++x
if(!z.C()){if(x<=4){C.a.h(b,H.h(t))
return}v=H.h(t)
if(0>=b.length)return H.k(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gR();++x
for(;z.C();t=s,s=r){r=z.gR();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.k(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.h(t)
v=H.h(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.k(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dT:function(a){var z,y,x
z={}
if(P.db(a))return"{...}"
y=new P.bI("")
try{C.a.h($.$get$bw(),a)
x=y
x.a=x.gaD()+"{"
z.a=!0
a.a9(0,new P.hj(z,y))
z=y
z.a=z.gaD()+"}"}finally{z=$.$get$bw()
if(0>=z.length)return H.k(z,-1)
z.pop()}z=y.gaD()
return z.charCodeAt(0)==0?z:z},
js:{"^":"jo;a,0b,0c,0d,0e,0f,r,$ti",
gZ:function(a){return P.eQ(this,this.r,H.q(this,0))},
gn:function(a){return this.a},
h:function(a,b){var z
H.v(b,H.q(this,0))
if(typeof b==="number"&&(b&0x3ffffff)===b){z=this.c
if(z==null){z=P.eR()
this.c=z}return this.f1(z,b)}else return this.eS(b)},
eS:function(a){var z,y,x
H.v(a,H.q(this,0))
z=this.d
if(z==null){z=P.eR()
this.d=z}y=this.d0(a)
x=z[y]
if(x==null)z[y]=[this.bJ(a)]
else{if(this.d6(x,a)>=0)return!1
x.push(this.bJ(a))}return!0},
M:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.h1(this.c,b)
else return this.h0(b)},
h0:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.fe(z,a)
x=this.d6(y,a)
if(x<0)return!1
this.dj(y.splice(x,1)[0])
return!0},
f1:function(a,b){H.v(b,H.q(this,0))
if(H.e(a[b],"$isd8")!=null)return!1
a[b]=this.bJ(b)
return!0},
h1:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$isd8")
if(z==null)return!1
this.dj(z)
delete a[b]
return!0},
d7:function(){this.r=this.r+1&67108863},
bJ:function(a){var z,y
z=new P.d8(H.v(a,H.q(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.d7()
return z},
dj:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.d7()},
d0:function(a){return J.aP(a)&0x3ffffff},
fe:function(a,b){return a[this.d0(b)]},
d6:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(a[y].a==b)return y
return-1},
m:{
eR:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
d8:{"^":"a;a,0b,0c"},
jt:{"^":"a;a,b,0c,0d,$ti",
scY:function(a){this.d=H.v(a,H.q(this,0))},
gR:function(){return this.d},
C:function(){var z=this.a
if(this.b!==z.r)throw H.i(P.b6(z))
else{z=this.c
if(z==null){this.scY(null)
return!1}else{this.scY(H.v(z.a,H.q(this,0)))
this.c=this.c.b
return!0}}},
$isaI:1,
m:{
eQ:function(a,b,c){var z=new P.jt(a,b,[c])
z.c=a.e
return z}}},
jo:{"^":"i0;"},
bY:{"^":"ju;",$isj:1,$isb:1},
P:{"^":"a;$ti",
gZ:function(a){return new H.dR(a,this.gn(a),0,[H.cg(this,a,"P",0)])},
a8:function(a,b){return this.j(a,b)},
j2:function(a,b){var z,y
z=H.c([],[H.cg(this,a,"P",0)])
C.a.sn(z,this.gn(a))
for(y=0;y<this.gn(a);++y)C.a.V(z,y,this.j(a,y))
return z},
j1:function(a){return this.j2(a,!0)},
i:function(a){return P.cA(a,"[","]")}},
hi:{"^":"hk;"},
hj:{"^":"t:12;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.h(a)
z.a=y+": "
z.a+=H.h(b)}},
hk:{"^":"a;$ti",
gn:function(a){return this.a},
i:function(a){return P.dT(this)},
$isan:1},
i2:{"^":"a;$ti",
i:function(a){return P.cA(this,"{","}")},
a8:function(a,b){var z,y,x
if(b<0)H.o(P.ac(b,0,null,"index",null))
for(z=P.eQ(this,this.r,H.q(this,0)),y=0;z.C();){x=z.d
if(b===y)return x;++y}throw H.i(P.ba(b,this,"index",null,y))},
$isj:1,
$isea:1},
i0:{"^":"i2;"},
ju:{"^":"a+P;"}}],["","",,P,{"^":"",cu:{"^":"a;$ti"},dx:{"^":"ij;$ti"},fN:{"^":"cu;",
$ascu:function(){return[P.z,[P.b,P.w]]}},iQ:{"^":"fN;a"},iR:{"^":"dx;",
i7:function(a,b,c){var z,y,x,w
z=a.length
P.e8(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.jJ(0,0,x)
if(w.fd(a,b,z)!==z)w.dk(C.i.cc(a,z-1),0)
return new Uint8Array(x.subarray(0,H.jM(0,w.b,x.length)))},
i6:function(a){return this.i7(a,0,null)},
$asdx:function(){return[P.z,[P.b,P.w]]}},jJ:{"^":"a;a,b,c",
dk:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.k(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.k(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.k(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.k(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.k(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.k(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.k(z,y)
z[y]=128|a&63
return!1}},
fd:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.i.cc(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.bd(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dk(w,C.i.bd(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.k(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.k(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.k(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.k(z,v)
z[v]=128|w&63}}return x}}}],["","",,P,{"^":"",
fP:function(a){if(a instanceof H.t)return a.i(0)
return"Instance of '"+H.aT(a)+"'"},
hf:function(a,b,c,d){var z,y
H.v(b,d)
z=J.h2(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.V(z,y,b)
return H.f(z,"$isb",[d],"$asb")},
hg:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gZ(a);x.C();)C.a.h(y,H.v(x.gR(),c))
if(b)return y
return H.f(J.bW(y),"$isb",z,"$asb")},
cR:function(a,b,c){var z,y
z=P.w
H.f(a,"$isj",[z],"$asj")
if(a.constructor===Array){H.f(a,"$isaQ",[z],"$asaQ")
y=a.length
c=P.e8(b,c,y,null,null,null)
return H.e7(b>0||c<y?C.a.eu(a,b,c):a)}return P.im(a,b,c)},
im:function(a,b,c){var z,y,x
H.f(a,"$isj",[P.w],"$asj")
z=J.bM(a)
for(y=0;y<b;++y)if(!z.C())throw H.i(P.ac(b,0,y,null,null))
x=[]
for(;z.C();)x.push(z.gR())
return H.e7(x)},
hS:function(a,b,c){return new H.h4(a,H.h5(a,!1,!0,!1))},
jI:function(a,b,c,d){var z,y,x,w,v,u
H.f(a,"$isb",[P.w],"$asb")
if(c===C.w){z=$.$get$eZ().b
z=z.test(b)}else z=!1
if(z)return b
y=C.A.i6(H.v(b,H.a6(c,"cu",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.k(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.hN(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
bS:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a8(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fP(a)},
n:function(a){return new P.eN(a)},
dl:function(a){H.kj(a)},
U:{"^":"a;"},
"+bool":0,
ag:{"^":"a;a,b",
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.ag))return!1
return this.a===b.a&&!0},
gW:function(a){var z=this.a
return(z^C.h.bg(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.fE(H.hM(this))
y=P.bB(H.hK(this))
x=P.bB(H.hG(this))
w=P.bB(H.hH(this))
v=P.bB(H.hJ(this))
u=P.bB(H.hL(this))
t=P.fF(H.hI(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
m:{
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
bB:function(a){if(a>=10)return""+a
return"0"+a}}},
r:{"^":"a7;"},
"+double":0,
b7:{"^":"a;a",
aj:function(a,b){return C.h.aj(this.a,H.e(b,"$isb7").a)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.b7))return!1
return this.a===b.a},
gW:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fK()
y=this.a
if(y<0)return"-"+new P.b7(0-y).i(0)
x=z.$1(C.h.a1(y,6e7)%60)
w=z.$1(C.h.a1(y,1e6)%60)
v=new P.fJ().$1(y%1e6)
return""+C.h.a1(y,36e8)+":"+H.h(x)+":"+H.h(w)+"."+H.h(v)},
m:{
dH:function(a,b,c,d,e,f){return new P.b7(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fJ:{"^":"t:13;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fK:{"^":"t:13;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
T:{"^":"a;"},
e0:{"^":"T;",
i:function(a){return"Throw of null."}},
aF:{"^":"T;a,b,c,d",
gbL:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbK:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.h(z)
w=this.gbL()+y+x
if(!this.a)return w
v=this.gbK()
u=P.bS(this.b)
return w+v+": "+H.h(u)},
m:{
fp:function(a){return new P.aF(!1,null,null,a)},
cm:function(a,b,c){return new P.aF(!0,a,b,c)}}},
c_:{"^":"aF;e,f,a,b,c,d",
gbL:function(){return"RangeError"},
gbK:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.h(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.h(z)
else if(x>z)y=": Not in range "+H.h(z)+".."+H.h(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.h(z)}return y},
m:{
c0:function(a,b,c){return new P.c_(null,null,!0,a,b,"Value not in range")},
ac:function(a,b,c,d,e){return new P.c_(b,c,!0,a,d,"Invalid value")},
e8:function(a,b,c,d,e,f){if(0>a||a>c)throw H.i(P.ac(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.i(P.ac(b,a,c,"end",f))
return b}return c}}},
h_:{"^":"aF;e,n:f>,a,b,c,d",
gbL:function(){return"RangeError"},
gbK:function(){if(J.fl(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.h(z)},
m:{
ba:function(a,b,c,d,e){var z=H.V(e!=null?e:J.bz(b))
return new P.h_(b,z,!0,a,c,"Index out of range")}}},
iL:{"^":"T;a",
i:function(a){return"Unsupported operation: "+this.a},
m:{
a5:function(a){return new P.iL(a)}}},
iI:{"^":"T;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
m:{
eA:function(a){return new P.iI(a)}}},
ie:{"^":"T;a",
i:function(a){return"Bad state: "+this.a}},
fA:{"^":"T;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.h(P.bS(z))+"."},
m:{
b6:function(a){return new P.fA(a)}}},
hC:{"^":"a;",
i:function(a){return"Out of Memory"},
$isT:1},
ee:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isT:1},
fD:{"^":"T;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eN:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
fU:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.i.cO(x,0,75)+"..."
return y+"\n"+x}},
w:{"^":"a7;"},
"+int":0,
j:{"^":"a;$ti",
gn:function(a){var z,y
z=this.gZ(this)
for(y=0;z.C();)++y
return y},
a8:function(a,b){var z,y,x
if(b<0)H.o(P.ac(b,0,null,"index",null))
for(z=this.gZ(this),y=0;z.C();){x=z.gR()
if(b===y)return x;++y}throw H.i(P.ba(b,this,"index",null,y))},
i:function(a){return P.h0(this,"(",")")}},
aI:{"^":"a;$ti"},
b:{"^":"a;$ti",$isj:1},
"+List":0,
D:{"^":"a;",
gW:function(a){return P.a.prototype.gW.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a7:{"^":"a;"},
"+num":0,
a:{"^":";",
q:function(a,b){return this===b},
gW:function(a){return H.bk(this)},
i:function(a){return"Instance of '"+H.aT(this)+"'"},
toString:function(){return this.i(this)}},
ay:{"^":"a;"},
z:{"^":"a;",$ise1:1},
"+String":0,
bI:{"^":"a;aD:a<",
gn:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
m:{
ef:function(a,b,c){var z=J.bM(b)
if(!z.C())return a
if(c.length===0){do a+=H.h(z.gR())
while(z.C())}else{a+=H.h(z.gR())
for(;z.C();)a=a+c+H.h(z.gR())}return a}}}}],["","",,W,{"^":"",
cs:function(a,b){var z=document.createElement("canvas")
return z},
fM:function(a){H.e(a,"$isbT")
return"wheel"},
c8:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eP:function(a,b,c,d){var z,y
z=W.c8(W.c8(W.c8(W.c8(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
f4:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.H
if(z===C.k)return a
return z.dq(a,b)},
au:{"^":"X;","%":"HTMLBRElement|HTMLBaseElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
ks:{"^":"au;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kt:{"^":"au;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
fr:{"^":"au;","%":"HTMLBodyElement"},
cr:{"^":"au;",
bE:function(a,b,c){if(c!=null)return this.ff(a,b,P.jY(c,null))
return this.fg(a,b)},
ej:function(a,b){return this.bE(a,b,null)},
ff:function(a,b,c){return a.getContext(b,c)},
fg:function(a,b){return a.getContext(b)},
$iscr:1,
$isdu:1,
"%":"HTMLCanvasElement"},
ct:{"^":"E;",
fh:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
ik:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$isct:1,
"%":"CanvasRenderingContext2D"},
kw:{"^":"K;0n:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
ky:{"^":"ja;0n:length=",
em:function(a,b){var z=this.fi(a,this.eY(a,b))
return z==null?"":z},
eY:function(a,b){var z,y
z=$.$get$dy()
y=z[b]
if(typeof y==="string")return y
y=this.hk(a,b)
z[b]=y
return y},
hk:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fG()+b
if(z in a)return z
return b},
fi:function(a,b){return a.getPropertyValue(b)},
gc8:function(a){return a.bottom},
gaZ:function(a){return a.height},
gaO:function(a){return a.left},
gb3:function(a){return a.right},
gb9:function(a){return a.top},
gbb:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fC:{"^":"a;",
gaO:function(a){return this.em(a,"left")}},
dG:{"^":"au;",$isdG:1,"%":"HTMLDivElement"},
fH:{"^":"K;",
ek:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
kz:{"^":"E;",
i:function(a){return String(a)},
"%":"DOMException"},
fI:{"^":"E;",
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
q:function(a,b){var z
if(b==null)return!1
if(!H.bx(b,"$isax",[P.a7],"$asax"))return!1
z=J.bL(b)
return a.left===z.gaO(b)&&a.top===z.gb9(b)&&a.width===z.gbb(b)&&a.height===z.gaZ(b)},
gW:function(a){return W.eP(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gc8:function(a){return a.bottom},
gaZ:function(a){return a.height},
gaO:function(a){return a.left},
gb3:function(a){return a.right},
gb9:function(a){return a.top},
gbb:function(a){return a.width},
$isax:1,
$asax:function(){return[P.a7]},
"%":";DOMRectReadOnly"},
j9:{"^":"bY;a,b",
gn:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.k(z,b)
return H.e(z[b],"$isX")},
h:function(a,b){J.dm(this.a,b)
return b},
gZ:function(a){var z=this.j1(this)
return new J.a9(z,z.length,0,[H.q(z,0)])},
$asP:function(){return[W.X]},
$asj:function(){return[W.X]},
$asb:function(){return[W.X]}},
X:{"^":"K;",
gdt:function(a){return new W.j9(a,a.children)},
gdu:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.aj()
if(x<0)x=-x*0
if(typeof w!=="number")return w.aj()
if(w<0)w=-w*0
return new P.ax(z,y,x,w,[P.a7])},
i:function(a){return a.localName},
$isX:1,
"%":";Element"},
a1:{"^":"E;",$isa1:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
bT:{"^":"E;",
eT:function(a,b,c,d){return a.addEventListener(b,H.b0(H.l(c,{func:1,args:[W.a1]}),1),!1)},
$isbT:1,
"%":";EventTarget"},
kA:{"^":"au;0n:length=","%":"HTMLFormElement"},
fX:{"^":"jq;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.ba(b,a,null,null,null))
return a[b]},
a8:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isav:1,
$asav:function(){return[W.K]},
$asP:function(){return[W.K]},
$isj:1,
$asj:function(){return[W.K]},
$isb:1,
$asb:function(){return[W.K]},
$isfX:1,
$asaH:function(){return[W.K]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
fY:{"^":"fH;","%":"HTMLDocument"},
bV:{"^":"E;0dw:data=",$isbV:1,"%":"ImageData"},
dK:{"^":"au;",$isdK:1,$isdu:1,"%":"HTMLImageElement"},
bc:{"^":"cX;",$isbc:1,"%":"KeyboardEvent"},
hw:{"^":"au;","%":"HTMLAudioElement;HTMLMediaElement"},
ai:{"^":"cX;",$isai:1,"%":"PointerEvent;DragEvent|MouseEvent"},
j8:{"^":"bY;a",
gZ:function(a){var z=this.a.childNodes
return new W.dI(z,z.length,-1,[H.cg(C.N,z,"aH",0)])},
gn:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.k(z,b)
return z[b]},
$asP:function(){return[W.K]},
$asj:function(){return[W.K]},
$asb:function(){return[W.K]}},
K:{"^":"bT;",
i:function(a){var z=a.nodeValue
return z==null?this.ev(a):z},
a_:function(a,b){return a.appendChild(b)},
$isK:1,
"%":"Attr|DocumentFragment|DocumentType|ShadowRoot;Node"},
hA:{"^":"jw;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.ba(b,a,null,null,null))
return a[b]},
a8:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isav:1,
$asav:function(){return[W.K]},
$asP:function(){return[W.K]},
$isj:1,
$asj:function(){return[W.K]},
$isb:1,
$asb:function(){return[W.K]},
$asaH:function(){return[W.K]},
"%":"NodeList|RadioNodeList"},
kI:{"^":"au;0n:length=","%":"HTMLSelectElement"},
bm:{"^":"E;",$isbm:1,"%":"Touch"},
aV:{"^":"cX;",$isaV:1,"%":"TouchEvent"},
kM:{"^":"jH;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.ba(b,a,null,null,null))
return a[b]},
a8:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isav:1,
$asav:function(){return[W.bm]},
$asP:function(){return[W.bm]},
$isj:1,
$asj:function(){return[W.bm]},
$isb:1,
$asb:function(){return[W.bm]},
$asaH:function(){return[W.bm]},
"%":"TouchList"},
cX:{"^":"a1;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
kP:{"^":"hw;",$isdu:1,"%":"HTMLVideoElement"},
bp:{"^":"ai;",
gig:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.i(P.a5("deltaY is not supported"))},
gie:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.i(P.a5("deltaX is not supported"))},
$isbp:1,
"%":"WheelEvent"},
j2:{"^":"bT;",
h3:function(a,b){return a.requestAnimationFrame(H.b0(H.l(b,{func:1,ret:-1,args:[P.a7]}),1))},
f7:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
kU:{"^":"fI;",
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
q:function(a,b){var z
if(b==null)return!1
if(!H.bx(b,"$isax",[P.a7],"$asax"))return!1
z=J.bL(b)
return a.left===z.gaO(b)&&a.top===z.gb9(b)&&a.width===z.gbb(b)&&a.height===z.gaZ(b)},
gW:function(a){return W.eP(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gaZ:function(a){return a.height},
gbb:function(a){return a.width},
"%":"ClientRect|DOMRect"},
jb:{"^":"ii;a,b,c,$ti"},
kV:{"^":"jb;a,b,c,$ti"},
jc:{"^":"cQ;a,b,c,d,e,$ti",m:{
S:function(a,b,c,d,e){var z,y
z=W.f4(new W.jd(c),W.a1)
y=z!=null
if(y&&!0){H.l(z,{func:1,args:[W.a1]})
if(y)J.fn(a,b,z,!1)}return new W.jc(0,a,b,z,!1,[e])}}},
jd:{"^":"t:32;a",
$1:function(a){return this.a.$1(H.e(a,"$isa1"))}},
aH:{"^":"a;$ti",
gZ:function(a){return new W.dI(a,this.gn(a),-1,[H.cg(this,a,"aH",0)])}},
dI:{"^":"a;a,b,c,0d,$ti",
sd5:function(a){this.d=H.v(a,H.q(this,0))},
C:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sd5(J.fm(this.a,z))
this.c=z
return!0}this.sd5(null)
this.c=y
return!1},
gR:function(){return this.d},
$isaI:1},
ja:{"^":"E+fC;"},
jp:{"^":"E+P;"},
jq:{"^":"jp+aH;"},
jv:{"^":"E+P;"},
jw:{"^":"jv+aH;"},
jG:{"^":"E+P;"},
jH:{"^":"jG+aH;"}}],["","",,P,{"^":"",
k0:function(a){var z,y
z=J.N(a)
if(!!z.$isbV){y=z.gdw(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.eY(a.data,a.height,a.width)},
k_:function(a){if(a instanceof P.eY)return{data:a.a,height:a.b,width:a.c}
return a},
jY:function(a,b){var z={}
a.a9(0,new P.jZ(z))
return z},
dE:function(){var z=$.dD
if(z==null){z=J.cl(window.navigator.userAgent,"Opera",0)
$.dD=z}return z},
fG:function(){var z,y
z=$.dA
if(z!=null)return z
y=$.dB
if(y==null){y=J.cl(window.navigator.userAgent,"Firefox",0)
$.dB=y}if(y)z="-moz-"
else{y=$.dC
if(y==null){y=!P.dE()&&J.cl(window.navigator.userAgent,"Trident/",0)
$.dC=y}if(y)z="-ms-"
else z=P.dE()?"-o-":"-webkit-"}$.dA=z
return z},
eY:{"^":"a;dw:a>,b,c",$isbV:1},
jZ:{"^":"t:12;a",
$2:function(a,b){this.a[a]=b}},
fR:{"^":"bY;a,b",
gbP:function(){var z,y,x
z=this.b
y=H.a6(z,"P",0)
x=W.X
return new H.hl(new H.j0(z,H.l(new P.fS(),{func:1,ret:P.U,args:[y]}),[y]),H.l(new P.fT(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){J.dm(this.b.a,b)},
gn:function(a){return J.bz(this.gbP().a)},
j:function(a,b){var z=this.gbP()
return z.b.$1(J.dn(z.a,b))},
gZ:function(a){var z=P.hg(this.gbP(),!1,W.X)
return new J.a9(z,z.length,0,[H.q(z,0)])},
$asP:function(){return[W.X]},
$asj:function(){return[W.X]},
$asb:function(){return[W.X]}},
fS:{"^":"t:22;",
$1:function(a){return!!J.N(H.e(a,"$isK")).$isX}},
fT:{"^":"t:23;",
$1:function(a){return H.d(H.e(a,"$isK"),"$isX")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
c9:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jr:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jx:{"^":"a;$ti",
gb3:function(a){var z=this.a
if(typeof z!=="number")return z.D()
return H.v(z+this.c,H.q(this,0))},
gc8:function(a){var z=this.b
if(typeof z!=="number")return z.D()
return H.v(z+this.d,H.q(this,0))},
i:function(a){return"Rectangle ("+H.h(this.a)+", "+H.h(this.b)+") "+this.c+" x "+this.d},
q:function(a,b){var z,y,x,w
if(b==null)return!1
if(!H.bx(b,"$isax",[P.a7],"$asax"))return!1
z=this.a
y=J.bL(b)
x=y.gaO(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb9(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.D()
w=H.q(this,0)
if(H.v(z+this.c,w)===y.gb3(b)){if(typeof x!=="number")return x.D()
z=H.v(x+this.d,w)===y.gc8(b)}else z=!1}else z=!1}else z=!1
return z},
gW:function(a){var z,y,x,w,v
z=this.a
y=J.aP(z)
x=this.b
w=J.aP(x)
if(typeof z!=="number")return z.D()
v=H.q(this,0)
z=H.v(z+this.c,v)
if(typeof x!=="number")return x.D()
v=H.v(x+this.d,v)
return P.jr(P.c9(P.c9(P.c9(P.c9(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
ax:{"^":"jx;aO:a>,b9:b>,bb:c>,aZ:d>,$ti"}}],["","",,P,{"^":"",kK:{"^":"X;",
gdt:function(a){return new P.fR(a,new W.j8(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"}}],["","",,P,{"^":""}],["","",,P,{"^":"",fs:{"^":"E;",$isfs:1,"%":"WebGLBuffer"},fV:{"^":"E;",$isfV:1,"%":"WebGLFramebuffer"},hP:{"^":"E;",$ishP:1,"%":"WebGLProgram"},cN:{"^":"E;",
c3:function(a,b){return a.activeTexture(b)},
dn:function(a,b,c){return a.attachShader(b,c)},
am:function(a,b,c){return a.bindBuffer(b,c)},
hZ:function(a,b,c){return a.bindFramebuffer(b,c)},
au:function(a,b,c){return a.bindTexture(b,c)},
i_:function(a,b,c){return a.blendFunc(b,c)},
dr:function(a,b,c,d){return a.bufferData(b,c,d)},
i1:function(a,b){return a.clear(b)},
i2:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
i3:function(a,b){return a.clearDepth(b)},
i4:function(a,b){return a.compileShader(b)},
i9:function(a,b){return a.createShader(b)},
ib:function(a,b){return a.deleteProgram(b)},
ic:function(a,b){return a.deleteShader(b)},
ih:function(a,b){return a.depthFunc(b)},
ii:function(a,b){return a.disable(b)},
dA:function(a,b){return a.disableVertexAttribArray(b)},
ij:function(a,b,c,d,e){return a.drawElements(b,c,H.V(d),H.V(e))},
cg:function(a,b){return a.enable(b)},
dC:function(a,b){return a.enableVertexAttribArray(b)},
eg:function(a,b,c){return a.getActiveAttrib(b,c)},
eh:function(a,b,c){return a.getActiveUniform(b,c)},
ei:function(a,b,c){return a.getAttribLocation(b,c)},
cI:function(a,b){return a.getParameter(b)},
el:function(a,b){return a.getProgramInfoLog(b)},
bF:function(a,b,c){return a.getProgramParameter(b,c)},
en:function(a,b){return a.getShaderInfoLog(b)},
eo:function(a,b,c){return a.getShaderParameter(b,c)},
ep:function(a,b,c){return a.getUniformLocation(b,c)},
ix:function(a,b){return a.linkProgram(b)},
iP:function(a,b,c){return a.pixelStorei(b,c)},
es:function(a,b,c){return a.shaderSource(b,c)},
iZ:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.N(g)
if(!!z.$isbV)y=!0
else y=!1
if(y){this.hm(a,b,c,d,e,f,P.k_(g))
return}if(!!z.$isdK)z=!0
else z=!1
if(z){this.hn(a,b,c,d,e,f,g)
return}throw H.i(P.fp("Incorrect number or type of arguments"))},
iY:function(a,b,c,d,e,f,g){return this.iZ(a,b,c,d,e,f,g,null,null,null)},
hm:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
hn:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bC:function(a,b,c,d){return a.texParameteri(b,c,d)},
E:function(a,b,c){return a.uniform1f(b,c)},
I:function(a,b,c){return a.uniform1i(b,c)},
p:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ec:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ed:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cD:function(a,b){return a.useProgram(b)},
j4:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
j5:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$iscN:1,
"%":"WebGLRenderingContext"},i3:{"^":"E;",$isi3:1,"%":"WebGLShader"},io:{"^":"E;",$isio:1,"%":"WebGLTexture"},iG:{"^":"E;",$isiG:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",J:{"^":"a;0a,0b,0c,0d,$ti",
sfn:function(a){this.a=H.f(a,"$isb",[H.a6(this,"J",0)],"$asb")},
sdc:function(a){this.b=H.l(a,{func:1,ret:P.U,args:[[P.j,H.a6(this,"J",0)]]})},
sd8:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.w,[P.j,H.a6(this,"J",0)]]})},
sdd:function(a){this.d=H.l(a,{func:1,ret:-1,args:[P.w,[P.j,H.a6(this,"J",0)]]})},
bH:function(a){this.sfn(H.c([],[a]))
this.sdc(null)
this.sd8(null)
this.sdd(null)},
cJ:function(a,b,c){var z=H.a6(this,"J",0)
H.l(b,{func:1,ret:P.U,args:[[P.j,z]]})
z={func:1,ret:-1,args:[P.w,[P.j,z]]}
H.l(a,z)
H.l(c,z)
this.sdc(b)
this.sd8(a)
this.sdd(c)},
aQ:function(a,b){return this.cJ(a,null,b)},
aT:function(a){var z
H.f(a,"$isj",[H.a6(this,"J",0)],"$asj")
z=this.b
if(z!=null)return z.$1(a)
return!0},
bX:function(a,b){var z
H.f(b,"$isj",[H.a6(this,"J",0)],"$asj")
z=this.c
if(z!=null)z.$2(a,b)},
gn:function(a){return this.a.length},
gZ:function(a){var z=this.a
return new J.a9(z,z.length,0,[H.q(z,0)])},
a8:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.k(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.a6(this,"J",0)
H.v(b,z)
z=[z]
if(this.aT(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.bX(x,H.c([b],z))}},
aV:function(a,b){var z,y
H.f(b,"$isj",[H.a6(this,"J",0)],"$asj")
if(this.aT(b)){z=this.a
y=z.length
C.a.aV(z,b)
this.bX(y,b)}},
V:function(a,b,c){var z,y,x,w
z=H.a6(this,"J",0)
H.v(c,z)
y=this.a
if(b>=y.length)return H.k(y,b)
x=y[b]
if(!J.I(x,c)&&this.aT(H.c([c],[z]))){C.a.V(this.a,b,c)
y=[z]
z=H.f(H.c([x],y),"$isj",[z],"$asj")
w=this.d
if(w!=null)w.$2(b,z)
this.bX(b,H.c([c],y))}},
$isj:1,
m:{
bP:function(a){var z=new O.J([a])
z.bH(a)
return z}}},cG:{"^":"a;0a,0b",
sbQ:function(a){this.a=H.f(a,"$isb",[V.a2],"$asb")},
gn:function(a){return this.a.length},
gl:function(){var z=this.b
if(z==null){z=D.A()
this.b=z}return z},
eD:function(a){var z=this.b
if(!(z==null))z.w(a)},
aA:function(){return this.eD(null)},
gK:function(){var z=this.a
if(z.length>0)return C.a.gcr(z)
else return V.aJ()},
bA:function(a){var z=this.a
if(a==null)C.a.h(z,V.aJ())
else C.a.h(z,a)
this.aA()},
ax:function(){var z=this.a
if(z.length>0){z.pop()
this.aA()}}}}],["","",,E,{"^":"",cn:{"^":"a;"},ah:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0X:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
seE:function(a,b){this.y=H.f(b,"$isJ",[E.ah],"$asJ")},
sX:function(a){this.z=H.e(a,"$isat")},
scL:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gl().M(0,this.ge6())
y=this.c
if(y!=null)y.gl().h(0,this.ge6())
x=new D.x("shape",z,this.c,this,[F.eb])
x.b=!0
this.ag(x)}},
se3:function(a){var z,y
if(!J.I(this.r,a)){z=this.r
if(z!=null)z.gl().M(0,this.ge5())
if(a!=null)a.gl().h(0,this.ge5())
this.r=a
y=new D.x("mover",z,a,this,[U.Z])
y.b=!0
this.ag(y)}},
ai:function(a){var z,y,x,w
z=this.r
y=z!=null?z.a:null
if(!J.I(y,this.x)){x=this.x
this.x=y
w=new D.x("matrix",x,y,this,[V.a2])
w.b=!0
this.ag(w)}for(z=this.y.a,z=new J.a9(z,z.length,0,[H.q(z,0)]);z.C();)z.d.ai(a)},
a3:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gK())
else C.a.h(z.a,y.t(0,z.gK()))
z.aA()
a.cA(this.f)
z=a.dy
x=(z&&C.a).gcr(z)
if(x!=null&&this.d!=null)x.e8(a,this)
for(z=this.y.a,z=new J.a9(z,z.length,0,[H.q(z,0)]);z.C();)z.d.a3(a)
a.cz()
a.dx.ax()},
gl:function(){var z=this.z
if(z==null){z=D.A()
this.z=z}return z},
ag:function(a){var z=this.z
if(!(z==null))z.w(a)},
a2:function(){return this.ag(null)},
iG:[function(a){H.e(a,"$isp")
this.e=null
this.ag(a)},function(){return this.iG(null)},"jO","$1","$0","ge6",0,2,0],
iF:[function(a){this.ag(H.e(a,"$isp"))},function(){return this.iF(null)},"jN","$1","$0","ge5",0,2,0],
iD:[function(a){this.ag(H.e(a,"$isp"))},function(){return this.iD(null)},"jL","$1","$0","ge4",0,2,0],
jK:[function(a,b){var z,y,x,w,v,u,t
H.f(b,"$isj",[E.ah],"$asj")
for(z=b.length,y=this.ge4(),x={func:1,ret:-1,args:[D.p]},w=[x],v=0;v<b.length;b.length===z||(0,H.u)(b),++v){u=b[v]
if(u!=null){if(u.gX()==null){t=new D.at()
t.sa0(null)
t.sas(null)
t.c=null
t.d=0
u.sX(t)}t=u.gX()
t.toString
H.l(y,x)
if(t.a==null)t.sa0(H.c([],w))
t=t.a;(t&&C.a).h(t,y)}}this.a2()},"$2","giC",8,0,5],
jM:[function(a,b){var z,y,x,w,v
H.f(b,"$isj",[E.ah],"$asj")
for(z=b.length,y=this.ge4(),x=0;x<b.length;b.length===z||(0,H.u)(b),++x){w=b[x]
if(w!=null){if(w.gX()==null){v=new D.at()
v.sa0(null)
v.sas(null)
v.c=null
v.d=0
w.sX(v)}w.gX().M(0,y)}}this.a2()},"$2","giE",8,0,5],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaq:1,
m:{
bR:function(a,b,c,d,e,f){var z=new E.ah()
z.a=d
z.b=!0
z.seE(0,O.bP(E.ah))
z.y.aQ(z.giC(),z.giE())
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
z.scL(0,e)
z.se3(c)
return z}}},hU:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
shl:function(a){this.dy=H.f(a,"$isb",[O.bl],"$asb")},
shg:function(a){this.fr=H.f(a,"$isan",[P.z,A.c3],"$asan")},
eA:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.ag(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cG()
y=[V.a2]
z.sbQ(H.c([],y))
z.b=null
z.gl().h(0,new E.hW(this))
this.cy=z
z=new O.cG()
z.sbQ(H.c([],y))
z.b=null
z.gl().h(0,new E.hX(this))
this.db=z
z=new O.cG()
z.sbQ(H.c([],y))
z.b=null
z.gl().h(0,new E.hY(this))
this.dx=z
this.shl(H.c([],[O.bl]))
z=this.dy;(z&&C.a).h(z,null)
this.shg(new H.bb(0,0,[P.z,A.c3]))},
giQ:function(){var z=this.z
if(z==null){z=this.cy.gK().t(0,this.db.gK())
this.z=z}return z},
cA:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gcr(z):a;(z&&C.a).h(z,y)},
cz:function(){var z=this.dy
if(z.length>1)z.pop()},
dm:function(a){var z=a.b
if(z.length===0)throw H.i(P.n("May not cache a shader with no name."))
if(this.fr.dv(z))throw H.i(P.n('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.V(0,z,a)},
m:{
hV:function(a,b){var z=new E.hU(a,b)
z.eA(a,b)
return z}}},hW:{"^":"t:8;a",
$1:function(a){var z
H.e(a,"$isp")
z=this.a
z.z=null
z.ch=null}},hX:{"^":"t:8;a",
$1:function(a){var z
H.e(a,"$isp")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hY:{"^":"t:8;a",
$1:function(a){var z
H.e(a,"$isp")
z=this.a
z.ch=null
z.cx=null}},ir:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0X:x<,0y,0z,0Q,0ch,0cx,0cy",
sX:function(a){this.x=H.e(a,"$isat")},
eG:[function(a){H.e(a,"$isp")
this.iT()},function(){return this.eG(null)},"eF","$1","$0","gcS",0,2,0],
giq:function(){var z,y,x
z=Date.now()
y=C.h.a1(P.dH(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.ag(z,!1)
return x/y},
df:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.t()
if(typeof z!=="number")return H.y(z)
x=C.j.co(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.t()
w=C.j.co(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.el(C.n,this.giS())}},
iT:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.it(this),{func:1,ret:-1,args:[P.a7]})
C.y.f7(z)
C.y.h3(z,W.f4(y,P.a7))}},"$0","giS",0,0,3],
iR:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.df()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ag(w,!1)
x.y=P.dH(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sn(w.a,0)
w.aA()
w=x.db
C.a.sn(w.a,0)
w.aA()
w=x.dx
C.a.sn(w.a,0)
w.aA()
w=x.dy;(w&&C.a).sn(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a3(this.e)}}catch(v){z=H.aO(v)
y=H.b2(v)
P.dl("Error: "+H.h(z))
P.dl("Stack: "+H.h(y))
throw H.i(z)}},
m:{
is:function(a,b,c,d,e){var z,y,x,w
z=J.N(a)
if(!!z.$iscr)return E.ek(a,!0,!0,!0,!1)
y=W.cs(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gdt(a).h(0,y)
w=E.ek(y,!0,!0,!0,!1)
w.a=a
return w},
ek:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.ir()
y=P.hd(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.z,null)
x=C.m.bE(a,"webgl",y)
x=H.e(x==null?C.m.bE(a,"experimental-webgl",y):x,"$iscN")
if(x==null)H.o(P.n("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hV(x,a)
w=new T.ip(x)
w.b=H.V((x&&C.b).cI(x,3379))
w.c=H.V(C.b.cI(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.iM(a)
v=new X.h7()
v.c=new X.ap(!1,!1,!1)
v.sh_(P.he(null,null,null,P.w))
w.b=v
v=new X.hx(w)
v.f=0
v.r=V.aw()
v.x=V.aw()
v.Q=1
v.ch=1
w.c=v
v=new X.hh(w)
v.r=0
v.x=V.aw()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.iw(w)
v.e=0
v.f=V.aw()
v.r=V.aw()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.sf8(H.c([],[[P.cQ,P.a]]))
v=w.z
u=document
t=W.ai
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.S(u,"contextmenu",H.l(w.gfE(),s),!1,t))
v=w.z
r=W.a1
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.S(a,"focus",H.l(w.gfH(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.S(a,"blur",H.l(w.gfB(),q),!1,r))
v=w.z
p=W.bc
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.S(u,"keyup",H.l(w.gfJ(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.S(u,"keydown",H.l(w.gfI(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.S(a,"mousedown",H.l(w.gfM(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.S(a,"mouseup",H.l(w.gfO(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.S(a,"mousemove",H.l(w.gfN(),s),!1,t))
p=w.z
o=W.bp;(p&&C.a).h(p,W.S(a,H.O(W.fM(a)),H.l(w.gfP(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.S(u,"mousemove",H.l(w.gfF(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.S(u,"mouseup",H.l(w.gfG(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.S(u,"pointerlockchange",H.l(w.gfQ(),q),!1,r))
r=w.z
q=W.aV
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.S(a,"touchstart",H.l(w.gfX(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.S(a,"touchend",H.l(w.gfV(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.S(a,"touchmove",H.l(w.gfW(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.ag(Date.now(),!1)
z.cy=0
z.df()
return z}}},it:{"^":"t:28;a",
$1:function(a){var z
H.ki(a)
z=this.a
if(z.ch){z.ch=!1
z.iR()}}}}],["","",,Z,{"^":"",eK:{"^":"a;a,b",$isku:1,m:{
d6:function(a,b,c){var z
H.f(c,"$isb",[P.w],"$asb")
z=a.createBuffer()
C.b.am(a,b,z)
C.b.dr(a,b,new Int16Array(H.bt(c)),35044)
C.b.am(a,b,null)
return new Z.eK(b,z)}}},ds:{"^":"cn;a,b,c,d,e",
U:function(a){var z,y,x
try{y=a.a
C.b.dC(y,this.e)
C.b.j4(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.aO(x)
y=P.n('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.h(z))
throw H.i(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.h(this.e)+"]"}},eL:{"^":"a;a",$iskv:1},cq:{"^":"a;a,0b,c,d",
sfj:function(a){this.b=H.f(a,"$isb",[Z.bD],"$asb")},
aw:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
U:function(a){var z,y
z=this.a
C.b.am(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].U(a)},
az:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.b.dA(x,z[y].e)
C.b.am(x,this.a.a,null)},
a3:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.k(w,x)
v=w[x]
w=v.c
u=w.a
C.b.am(y,u,w.b)
C.b.ij(y,v.a,v.b,5123,0)
C.b.am(y,u,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.z]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.u)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a8(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.A(y,", ")+"\nAttrs:   "+C.a.A(u,", ")},
$iskL:1},bD:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aT(this.c)+"'")+"]"}},aW:{"^":"a;a",
gcM:function(a){var z,y
z=this.a
y=(z&$.$get$al().a)!==0?3:0
if((z&$.$get$aB().a)!==0)y+=3
if((z&$.$get$aA().a)!==0)y+=3
if((z&$.$get$aC().a)!==0)y+=2
if((z&$.$get$aD().a)!==0)y+=3
if((z&$.$get$bn().a)!==0)y+=3
if((z&$.$get$bo().a)!==0)y+=4
if((z&$.$get$aX().a)!==0)++y
return(z&$.$get$az().a)!==0?y+4:y},
hX:function(a){var z,y,x
z=$.$get$al()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aB()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aA()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aC()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aD()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bn()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bo()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aX()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$az()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eJ()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aW))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.z])
y=this.a
if((y&$.$get$al().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aB().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aA().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aC().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aD().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bn().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bo().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aX().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$az().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.A(z,"|")},
m:{
ae:function(a){return new Z.aW(a)}}}}],["","",,D,{"^":"",dv:{"^":"a;"},at:{"^":"a;0a,0b,0c,0d",
sa0:function(a){this.a=H.f(a,"$isb",[{func:1,ret:-1,args:[D.p]}],"$asb")},
sas:function(a){this.b=H.f(a,"$isb",[{func:1,ret:-1,args:[D.p]}],"$asb")},
h:function(a,b){var z={func:1,ret:-1,args:[D.p]}
H.l(b,z)
if(this.a==null)this.sa0(H.c([],[z]))
z=this.a;(z&&C.a).h(z,b)},
M:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.p]})
z=this.a
z=z==null?null:C.a.aK(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).M(z,b)||!1}else y=!1
return y},
w:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w)w=!0
else w=!1
if(w)return!1
if(a==null){a=new D.p(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.a9(y,new D.fQ(z))
return!0},
il:function(){return this.w(null)},
iU:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.w(y)}}},
ay:function(){return this.iU(!0,!1)},
m:{
A:function(){var z=new D.at()
z.sa0(null)
z.sas(null)
z.c=null
z.d=0
return z}}},fQ:{"^":"t:29;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.p]})
z=this.a.a
z.b
a.$1(z)}},p:{"^":"a;a,0b"},bE:{"^":"p;c,d,a,0b,$ti"},bF:{"^":"p;c,d,a,0b,$ti"},x:{"^":"p;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.h(this.d)+" => "+H.h(this.e)}}}],["","",,X,{"^":"",dt:{"^":"a;a,b",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dt))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}},dP:{"^":"a;a,b",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dP))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}},h7:{"^":"a;0a,0b,0c,0d",
sh_:function(a){this.d=H.f(a,"$isea",[P.w],"$asea")},
iM:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
iI:function(a){this.c=a.b
this.d.M(0,a.a)
return!1}},dS:{"^":"bZ;x,y,c,d,e,a,0b"},hh:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aS:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ag(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.t()
v=b.b
u=this.ch
if(typeof v!=="number")return v.t()
t=new V.a_(y.a+x*w,y.b+v*u)
u=this.a.gaJ()
s=new X.bf(a,V.aw(),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cw:function(a,b){this.r=a.a
return!1},
b1:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.er()
if(typeof z!=="number")return z.ee()
this.r=(z&~y)>>>0
return!1},
b0:function(a,b){var z=this.d
if(z==null)return!1
z.w(this.aS(a,b))
return!0},
iN:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaJ()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.t()
t=a.b
s=this.cy
if(typeof t!=="number")return t.t()
w=new X.cJ(new V.L(v*u,t*s),y,x,new P.ag(w,!1),this)
w.b=!0
z.w(w)
return!0},
fL:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ag(Date.now(),!1)
y=this.f
x=new X.dS(c,a,this.a.gaJ(),b,z,this)
x.b=!0
y.w(x)
this.y=z
this.x=V.aw()}},ap:{"^":"a;a,b,c",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ap))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},bf:{"^":"bZ;x,y,z,Q,ch,c,d,e,a,0b"},hx:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bM:function(a,b,c){var z,y,x
z=new P.ag(Date.now(),!1)
y=this.a.gaJ()
x=new X.bf(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cw:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.w(this.bM(a,b,!0))
return!0},
b1:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.er()
if(typeof z!=="number")return z.ee()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.w(this.bM(a,b,!0))
return!0},
b0:function(a,b){var z=this.d
if(z==null)return!1
z.w(this.bM(a,b,!1))
return!0},
iO:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaJ()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.t()
u=a.b
t=this.ch
if(typeof u!=="number")return u.t()
x=new X.cJ(new V.L(w*v,u*t),y,b,new P.ag(x,!1),this)
x.b=!0
z.w(x)
return!0},
gdB:function(){var z=this.b
if(z==null){z=D.A()
this.b=z}return z},
gbD:function(){var z=this.c
if(z==null){z=D.A()
this.c=z}return z},
ge2:function(){var z=this.d
if(z==null){z=D.A()
this.d=z}return z}},cJ:{"^":"bZ;x,c,d,e,a,0b"},bZ:{"^":"p;"},eo:{"^":"bZ;x,y,z,Q,ch,c,d,e,a,0b"},iw:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
aS:function(a,b){var z,y,x,w
H.f(a,"$isb",[V.a_],"$asb")
z=new P.ag(Date.now(),!1)
y=a.length>0?a[0]:V.aw()
x=this.a.gaJ()
w=new X.eo(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
iL:function(a){var z
H.f(a,"$isb",[V.a_],"$asb")
z=this.b
if(z==null)return!1
z.w(this.aS(a,!0))
return!0},
iJ:function(a){var z
H.f(a,"$isb",[V.a_],"$asb")
z=this.c
if(z==null)return!1
z.w(this.aS(a,!0))
return!0},
iK:function(a){var z
H.f(a,"$isb",[V.a_],"$asb")
z=this.d
if(z==null)return!1
z.w(this.aS(a,!1))
return!0}},iM:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
sf8:function(a){this.z=H.f(a,"$isb",[[P.cQ,P.a]],"$asb")},
gaJ:function(){var z=this.a
return V.c1(0,0,C.m.gdu(z).c,C.m.gdu(z).d)},
d3:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dP(z,new X.ap(y,a.altKey,a.shiftKey))},
aI:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ap(y,a.altKey,a.shiftKey)},
c2:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ap(y,a.altKey,a.shiftKey)},
at:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.F()
v=z.top
if(typeof x!=="number")return x.F()
return new V.a_(y-w,x-v)},
aU:function(a){return new V.L(a.movementX,a.movementY)},
bZ:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.a_])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.u)(x),++v){u=x[v]
t=C.j.ah(u.pageX)
C.j.ah(u.pageY)
s=z.left
C.j.ah(u.pageX)
C.a.h(y,new V.a_(t-s,C.j.ah(u.pageY)-z.top))}return y},
ap:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dt(z,new X.ap(y,a.altKey,a.shiftKey))},
bR:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.F()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.F()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
jn:[function(a){this.f=!0},"$1","gfH",4,0,9],
jh:[function(a){this.f=!1},"$1","gfB",4,0,9],
jk:[function(a){H.e(a,"$isai")
if(this.f&&this.bR(a))a.preventDefault()},"$1","gfE",4,0,4],
jp:[function(a){var z
H.e(a,"$isbc")
if(!this.f)return
z=this.d3(a)
this.b.iM(z)},"$1","gfJ",4,0,15],
jo:[function(a){var z
H.e(a,"$isbc")
if(!this.f)return
z=this.d3(a)
this.b.iI(z)},"$1","gfI",4,0,15],
jr:[function(a){var z,y,x,w
H.e(a,"$isai")
z=this.a
z.focus()
this.f=!0
this.aI(a)
if(this.x){y=this.ap(a)
x=this.aU(a)
if(this.d.cw(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ap(a)
w=this.at(a)
if(this.c.cw(y,w))a.preventDefault()},"$1","gfM",4,0,4],
jt:[function(a){var z,y,x
H.e(a,"$isai")
this.aI(a)
z=this.ap(a)
if(this.x){y=this.aU(a)
if(this.d.b1(z,y))a.preventDefault()
return}if(this.r)return
x=this.at(a)
if(this.c.b1(z,x))a.preventDefault()},"$1","gfO",4,0,4],
jm:[function(a){var z,y,x
H.e(a,"$isai")
if(!this.bR(a)){this.aI(a)
z=this.ap(a)
if(this.x){y=this.aU(a)
if(this.d.b1(z,y))a.preventDefault()
return}if(this.r)return
x=this.at(a)
if(this.c.b1(z,x))a.preventDefault()}},"$1","gfG",4,0,4],
js:[function(a){var z,y,x
H.e(a,"$isai")
this.aI(a)
z=this.ap(a)
if(this.x){y=this.aU(a)
if(this.d.b0(z,y))a.preventDefault()
return}if(this.r)return
x=this.at(a)
if(this.c.b0(z,x))a.preventDefault()},"$1","gfN",4,0,4],
jl:[function(a){var z,y,x
H.e(a,"$isai")
if(!this.bR(a)){this.aI(a)
z=this.ap(a)
if(this.x){y=this.aU(a)
if(this.d.b0(z,y))a.preventDefault()
return}if(this.r)return
x=this.at(a)
if(this.c.b0(z,x))a.preventDefault()}},"$1","gfF",4,0,4],
ju:[function(a){var z,y
H.e(a,"$isbp")
this.aI(a)
z=new V.L((a&&C.x).gie(a),C.x.gig(a)).u(0,180)
if(this.x){if(this.d.iN(z))a.preventDefault()
return}if(this.r)return
y=this.at(a)
if(this.c.iO(z,y))a.preventDefault()},"$1","gfP",4,0,35],
jv:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.ap(this.y)
x=this.at(this.y)
this.d.fL(y,x,z)}},"$1","gfQ",4,0,9],
jC:[function(a){var z
H.e(a,"$isaV")
this.a.focus()
this.f=!0
this.c2(a)
z=this.bZ(a)
if(this.e.iL(z))a.preventDefault()},"$1","gfX",4,0,10],
jA:[function(a){var z
H.e(a,"$isaV")
this.c2(a)
z=this.bZ(a)
if(this.e.iJ(z))a.preventDefault()},"$1","gfV",4,0,10],
jB:[function(a){var z
H.e(a,"$isaV")
this.c2(a)
z=this.bZ(a)
if(this.e.iK(z))a.preventDefault()},"$1","gfW",4,0,10]}}],["","",,D,{"^":"",bC:{"^":"a;0a,0b,0c,0d",
gl:function(){var z=this.d
if(z==null){z=D.A()
this.d=z}return z},
aB:[function(a){var z
H.e(a,"$isp")
z=this.d
if(!(z==null))z.w(a)},function(){return this.aB(null)},"j6","$1","$0","geH",0,2,0],
$isR:1,
$isaq:1,
m:{
dF:function(a,b){var z,y,x
z=new D.bC()
z.c=new V.Q(1,1,1)
z.a=V.iS()
y=z.b
z.b=b
b.gl().h(0,z.geH())
x=new D.x("mover",y,z.b,z,[U.Z])
x.b=!0
z.aB(x)
if(!z.c.q(0,a)){y=z.c
z.c=a
x=new D.x("color",y,a,z,[V.Q])
x.b=!0
z.aB(x)}return z}}},R:{"^":"a;",$isaq:1},h8:{"^":"J;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
sf6:function(a){this.e=H.f(a,"$isb",[D.bC],"$asb")},
sfZ:function(a){this.f=H.f(a,"$isb",[D.e3],"$asb")},
shi:function(a){this.r=H.f(a,"$isb",[D.ed],"$asb")},
sht:function(a){this.x=H.f(a,"$isb",[D.eh],"$asb")},
shu:function(a){this.y=H.f(a,"$isb",[D.ei],"$asb")},
shv:function(a){this.z=H.f(a,"$isb",[D.ej],"$asb")},
gl:function(){var z=this.Q
if(z==null){z=D.A()
this.Q=z}return z},
aB:function(a){var z=this.Q
if(!(z==null))z.w(a)},
fK:[function(a){var z
H.e(a,"$isp")
z=this.ch
if(!(z==null))z.w(a)},function(){return this.fK(null)},"jq","$1","$0","gda",0,2,0],
jw:[function(a){var z,y,x
H.f(a,"$isj",[D.R],"$asj")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.u)(a),++y){x=a[y]
if(x==null||this.f2(x))return!1}return!0},"$1","gfR",4,0,36],
jd:[function(a,b){var z,y,x,w,v,u,t,s
z=D.R
H.f(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gda(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.u)(b),++u){t=H.e(b[u],"$isR")
if(t instanceof D.bC)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.at()
s.sa0(null)
s.sas(null)
s.c=null
s.d=0
t.d=s}H.l(x,w)
if(s.a==null)s.sa0(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}z=new D.bE(a,b,this,[z])
z.b=!0
this.aB(z)},"$2","gfv",8,0,16],
jy:[function(a,b){var z,y,x,w,v,u
z=D.R
H.f(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gda(),w=0;w<b.length;b.length===y||(0,H.u)(b),++w){v=H.e(b[w],"$isR")
if(v instanceof D.bC)C.a.M(this.e,v)
u=v.d
if(u==null){u=new D.at()
u.sa0(null)
u.sas(null)
u.c=null
u.d=0
v.d=u}u.M(0,x)}z=new D.bF(a,b,this,[z])
z.b=!0
this.aB(z)},"$2","gfT",8,0,16],
f2:function(a){var z=C.a.aK(this.e,a)
return z},
$asj:function(){return[D.R]},
$asJ:function(){return[D.R]}},e3:{"^":"a;",$isR:1,$isaq:1},ed:{"^":"a;",$isR:1,$isaq:1},eh:{"^":"a;",$isR:1,$isaq:1},ei:{"^":"a;",$isR:1,$isaq:1},ej:{"^":"a;",$isR:1,$isaq:1}}],["","",,V,{"^":"",
kx:[function(a,b){if(typeof b!=="number")return b.F()
if(typeof a!=="number")return H.y(a)
return Math.abs(b-a)<=1e-9},"$2","hu",8,0,24],
kr:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.j.eq(a-b,z)
return(a<0?a+z:a)+b},
F:function(a,b,c){if(a==null)return C.i.ab("null",c)
return C.i.ab(C.j.eb($.m.$2(a,0)?0:a,b),c+b+1)},
b1:function(a,b,c){var z,y,x,w,v,u
H.f(a,"$isb",[P.r],"$asb")
z=H.c([],[P.z])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.u)(a),++w){v=V.F(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.k(z,u)
C.a.V(z,u,C.i.ab(z[u],x))}return z},
dk:function(a,b){return C.j.j0(Math.pow(b,C.E.co(Math.log(H.jX(a))/Math.log(b))))},
Q:{"^":"a;a,b,c",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}},
aG:{"^":"a;a,b,c,d",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aG))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+", "+V.F(this.d,3,0)+"]"}},
dW:{"^":"a;a,b,c,d,e,f,r,x,y",
a6:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.r])
return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dW))return!1
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
z=[P.r]
y=V.b1(H.c([this.a,this.d,this.r],z),3,0)
x=V.b1(H.c([this.b,this.e,this.x],z),3,0)
w=V.b1(H.c([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.k(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.k(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.k(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.k(y,1)
s=" "+y[1]+", "
if(1>=u)return H.k(x,1)
s=s+x[1]+", "
if(1>=t)return H.k(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.k(y,2)
z=" "+y[2]+", "
if(2>=u)return H.k(x,2)
z=z+x[2]+", "
if(2>=t)return H.k(w,2)
return s+(z+w[2]+"]")}},
a2:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a6:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.r])
return z},
cq:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if(typeof q!=="number")return q.t()
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
if($.m.$2(a2,0))return V.aJ()
a3=1/a2
a4=-w
a5=-i
return V.ao((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
t:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
x=this.b
w=a7.e
v=this.c
u=a7.y
t=this.d
s=a7.cx
if(typeof t!=="number")return t.t()
r=a7.b
q=a7.f
p=a7.z
o=a7.cy
n=a7.c
m=a7.r
l=a7.Q
k=a7.db
j=a7.d
if(typeof j!=="number")return H.y(j)
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
return V.ao(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cC:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.G(this.a*z+this.b*y+this.c*x,this.e*z+this.f*y+this.r*x,this.y*z+this.z*y+this.Q*x)},
ba:function(a){var z,y,x,w
z=a.a
y=a.b
x=a.c
w=this.d
if(typeof w!=="number")return H.y(w)
return new V.ab(this.a*z+this.b*y+this.c*x+w,this.e*z+this.f*y+this.r*x+this.x,this.y*z+this.z*y+this.Q*x+this.ch)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
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
i:function(a){return this.G()},
dY:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.r]
y=V.b1(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.b1(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.b1(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.b1(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.k(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.k(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.k(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.k(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.k(y,1)
q=q+y[1]+", "
if(1>=t)return H.k(x,1)
q=q+x[1]+", "
if(1>=s)return H.k(w,1)
q=q+w[1]+", "
if(1>=r)return H.k(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.k(y,2)
u=u+y[2]+", "
if(2>=t)return H.k(x,2)
u=u+x[2]+", "
if(2>=s)return H.k(w,2)
u=u+w[2]+", "
if(2>=r)return H.k(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.k(y,3)
q=q+y[3]+", "
if(3>=t)return H.k(x,3)
q=q+x[3]+", "
if(3>=s)return H.k(w,3)
q=q+w[3]+", "
if(3>=r)return H.k(v,3)
return u+(q+v[3]+"]")},
v:function(a){return this.dY(a,3,0)},
G:function(){return this.dY("",3,0)},
m:{
aJ:function(){var z=$.dZ
if(z==null){z=V.ao(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.dZ=z}return z},
ao:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
cI:function(a,b,c){return V.ao(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
hv:function(a,b,c,d){return V.ao(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
cH:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.ao(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
dY:function(a,b,c,d){d=V.eG()
return V.dX(V.e5(),d,new V.G(a,b,c))},
dX:function(a,b,c){var z,y,x,w,v,u,t,s
z=c.u(0,Math.sqrt(c.B(c)))
y=b.aY(z)
x=y.u(0,Math.sqrt(y.B(y)))
w=z.aY(x)
v=new V.G(a.a,a.b,a.c)
u=x.J(0).B(v)
t=w.J(0).B(v)
s=z.J(0).B(v)
return V.ao(x.a,w.a,z.a,u,x.b,w.b,z.b,t,x.c,w.c,z.c,s,0,0,0,1)}}},
a_:{"^":"a;a,b",
F:function(a,b){return new V.a_(this.a-b.a,this.b-b.b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"},
m:{
aw:function(){var z=$.e4
if(z==null){z=new V.a_(0,0)
$.e4=z}return z}}},
ab:{"^":"a;a,b,c",
F:function(a,b){return new V.ab(this.a-b.a,this.b-b.b,this.c-b.c)},
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
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"},
m:{
e5:function(){var z=$.bi
if(z==null){z=new V.ab(0,0,0)
$.bi=z}return z}}},
bj:{"^":"a;a,b,c,d",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bj))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+", "+V.F(this.d,3,0)+"]"}},
cM:{"^":"a;a,b,c,d",
ga5:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cM))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+", "+V.F(this.d,3,0)+"]"},
m:{
hT:function(){var z=$.e9
if(z==null){z=V.c1(0,0,1,1)
$.e9=z}return z},
c1:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cM(a,b,c,d)}}},
L:{"^":"a;a,b",
iw:[function(a){return Math.sqrt(this.B(this))},"$0","gn",1,0,17],
B:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.t()
if(typeof y!=="number")return H.y(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.t()
if(typeof w!=="number")return H.y(w)
return z*y+x*w},
t:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.t()
y=this.b
if(typeof y!=="number")return y.t()
return new V.L(z*b,y*b)},
u:function(a,b){var z,y
if($.m.$2(b,0)){z=$.eC
if(z==null){z=new V.L(0,0)
$.eC=z}return z}z=this.a
if(typeof z!=="number")return z.u()
y=this.b
if(typeof y!=="number")return y.u()
return new V.L(z/b,y/b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.L))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}},
G:{"^":"a;a,b,c",
iw:[function(a){return Math.sqrt(this.B(this))},"$0","gn",1,0,17],
B:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cs:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.G(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aY:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.G(z*y-x*w,x*v-u*y,u*w-z*v)},
D:function(a,b){return new V.G(this.a+b.a,this.b+b.b,this.c+b.c)},
J:function(a){return new V.G(-this.a,-this.b,-this.c)},
u:function(a,b){if($.m.$2(b,0))return V.bJ()
return new V.G(this.a/b,this.b/b,this.c/b)},
e_:function(){if(!$.m.$2(0,this.a))return!1
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
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"},
m:{
bJ:function(){var z=$.eF
if(z==null){z=new V.G(0,0,0)
$.eF=z}return z},
eG:function(){var z=$.eE
if(z==null){z=new V.G(0,1,0)
$.eE=z}return z},
iS:function(){var z=$.c6
if(z==null){z=new V.G(0,0,1)
$.c6=z}return z}}}}],["","",,U,{"^":"",fz:{"^":"dv;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bI:function(a){var z=V.kr(a,this.c,this.b)
return z},
gl:function(){var z=this.y
if(z==null){z=D.A()
this.y=z}return z},
L:function(a){var z=this.y
if(!(z==null))z.w(a)},
scE:function(a,b){},
sct:function(a){var z,y
z=this.b
if(!$.m.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bI(z)}z=new D.x("maximumLocation",y,this.b,this,[P.r])
z.b=!0
this.L(z)}},
scv:function(a){var z,y
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bI(z)}z=new D.x("minimumLocation",y,this.c,this,[P.r])
z.b=!0
this.L(z)}},
sa4:function(a,b){var z,y
b=this.bI(b)
z=this.d
if(!$.m.$2(z,b)){y=this.d
this.d=b
z=new D.x("location",y,b,this,[P.r])
z.b=!0
this.L(z)}},
scu:function(a){var z,y,x
z=this.e
if(!$.m.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.x("maximumVelocity",y,a,this,[P.r])
z.b=!0
this.L(z)}},
sN:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.m.$2(z,a)){x=this.f
this.f=a
z=new D.x("velocity",x,a,this,[P.r])
z.b=!0
this.L(z)}},
sce:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.m.$2(z,a)){y=this.x
this.x=a
z=new D.x("dampening",y,a,this,[P.r])
z.b=!0
this.L(z)}},
ai:function(a){var z,y,x,w
z=this.f
if($.m.$2(z,0)){z=this.r
z=!$.m.$2(z,0)}else z=!0
if(z){y=this.f+this.r*a
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa4(0,this.d+y*a)
z=this.x
if(!$.m.$2(z,0)){w=y*Math.pow(1-this.x,a)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sN(y)}},
m:{
cv:function(){var z=new U.fz()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},cw:{"^":"Z;0a,0b",
gl:function(){var z=this.b
if(z==null){z=D.A()
this.b=z}return z},
sK:function(a){var z,y,x
if(a==null)a=V.aJ()
if(!J.I(this.a,a)){z=this.a
this.a=a
y=new D.x("matrix",z,a,this,[V.a2])
y.b=!0
x=this.b
if(!(x==null))x.w(y)}},
aP:function(a,b){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cw))return!1
return J.I(this.a,b.a)},
i:function(a){return"Constant: "+this.a.v("          ")},
m:{
bA:function(a){var z=new U.cw()
z.sK(a)
return z}}},dJ:{"^":"J;0e,0f,0r,0a,0b,0c,0d",
gl:function(){var z=this.e
if(z==null){z=D.A()
this.e=z}return z},
L:[function(a){var z
H.e(a,"$isp")
z=this.e
if(!(z==null))z.w(a)},function(){return this.L(null)},"ad","$1","$0","gaC",0,2,0],
j7:[function(a,b){var z,y,x,w,v,u,t,s
z=U.Z
H.f(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gaC(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.u)(b),++u){t=b[u]
if(t!=null){s=t.gl()
s.toString
H.l(x,w)
if(s.a==null)s.sa0(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.bE(a,b,this,[z])
z.b=!0
this.L(z)},"$2","geI",8,0,18],
jx:[function(a,b){var z,y,x,w,v
z=U.Z
H.f(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gaC(),w=0;w<b.length;b.length===y||(0,H.u)(b),++w){v=b[w]
if(v!=null)v.gl().M(0,x)}z=new D.bF(a,b,this,[z])
z.b=!0
this.L(z)},"$2","gfS",8,0,18],
aP:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(typeof z!=="number")return z.aj()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.a9(z,z.length,0,[H.q(z,0)]),x=null;z.C();){y=z.d
if(y!=null){w=y.aP(a,b)
if(w!=null)x=x==null?w:w.t(0,x)}}this.f=x==null?V.aJ():x
z=this.e
if(!(z==null))z.ay()}return this.f},
q:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dJ))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.k(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.k(w,y)
if(!J.I(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asj:function(){return[U.Z]},
$asJ:function(){return[U.Z]},
$isZ:1,
m:{
cz:function(a){var z=new U.dJ()
z.bH(U.Z)
z.aQ(z.geI(),z.gfS())
if(a!=null)z.aV(0,a)
z.e=null
z.f=V.aJ()
z.r=0
return z}}},Z:{"^":"dv;"},iN:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gl:function(){var z=this.cy
if(z==null){z=D.A()
this.cy=z}return z},
L:[function(a){var z
H.e(a,"$isp")
z=this.cy
if(!(z==null))z.w(a)},function(){return this.L(null)},"ad","$1","$0","gaC",0,2,0],
aW:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdB().h(0,this.gbS())
this.a.c.ge2().h(0,this.gbT())
this.a.c.gbD().h(0,this.gbU())
return!0},
fq:[function(a){H.e(a,"$isp")
if(!J.I(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbS",4,0,1],
fs:[function(a){var z,y,x,w,v,u,t
a=H.d(H.e(a,"$isp"),"$isbf")
if(!this.y)return
if(this.x){z=a.d.F(0,a.y)
z=new V.L(z.a,z.b)
z=z.B(z)
y=this.r
if(typeof y!=="number")return H.y(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.F(0,a.y)
z=new V.L(y.a,y.b).t(0,2).u(0,z.ga5())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.t()
x=this.e
if(typeof x!=="number")return H.y(x)
y.sN(z*10*x)}else{z=a.c
y=a.d
x=y.F(0,a.y)
w=new V.L(x.a,x.b).t(0,2).u(0,z.ga5())
x=this.b
v=w.a
if(typeof v!=="number")return v.J()
u=this.e
if(typeof u!=="number")return H.y(u)
t=this.z
if(typeof t!=="number")return H.y(t)
x.sa4(0,-v*u+t)
this.b.sN(0)
y=y.F(0,a.z)
this.Q=new V.L(y.a,y.b).t(0,2).u(0,z.ga5())}this.ad()},"$1","gbT",4,0,1],
ft:[function(a){var z,y,x
H.e(a,"$isp")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.B(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.t()
x=this.e
if(typeof x!=="number")return H.y(x)
z.sN(y*10*x)
this.ad()}},"$1","gbU",4,0,1],
aP:function(a,b){var z,y,x,w,v
z=this.ch
y=a.e
if(typeof z!=="number")return z.aj()
if(z<y){this.ch=y
x=a.y
this.b.ai(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.ao(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isZ:1},iO:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gl:function(){var z=this.fx
if(z==null){z=D.A()
this.fx=z}return z},
L:[function(a){var z
H.e(a,"$isp")
z=this.fx
if(!(z==null))z.w(a)},function(){return this.L(null)},"ad","$1","$0","gaC",0,2,0],
aW:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gdB().h(0,this.gbS())
this.a.c.ge2().h(0,this.gbT())
this.a.c.gbD().h(0,this.gbU())
z=this.a.d
y=z.f
if(y==null){y=D.A()
z.f=y
z=y}else z=y
z.h(0,this.gfo())
z=this.a.d
y=z.d
if(y==null){y=D.A()
z.d=y
z=y}else z=y
z.h(0,this.gfp())
z=this.a.e
y=z.b
if(y==null){y=D.A()
z.b=y
z=y}else z=y
z.h(0,this.ghr())
z=this.a.e
y=z.d
if(y==null){y=D.A()
z.d=y
z=y}else z=y
z.h(0,this.ghq())
z=this.a.e
y=z.c
if(y==null){y=D.A()
z.c=y
z=y}else z=y
z.h(0,this.ghp())
return!0},
al:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.J()
z=-z}if(this.r){if(typeof y!=="number")return y.J()
y=-y}return new V.L(z,y)},
fq:[function(a){a=H.d(H.e(a,"$isp"),"$isbf")
if(!J.I(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbS",4,0,1],
fs:[function(a){var z,y,x,w,v,u,t
a=H.d(H.e(a,"$isp"),"$isbf")
if(!this.cx)return
if(this.ch){z=a.d.F(0,a.y)
z=new V.L(z.a,z.b)
z=z.B(z)
y=this.Q
if(typeof y!=="number")return H.y(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.F(0,a.y)
z=this.al(new V.L(y.a,y.b).t(0,2).u(0,z.ga5()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.J()
x=this.y
if(typeof x!=="number")return H.y(x)
y.sN(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.J()
y=this.x
if(typeof y!=="number")return H.y(y)
x.sN(-z*10*y)}else{z=a.c
y=a.d
x=y.F(0,a.y)
w=this.al(new V.L(x.a,x.b).t(0,2).u(0,z.ga5()))
x=this.c
v=w.a
if(typeof v!=="number")return v.J()
u=this.y
if(typeof u!=="number")return H.y(u)
t=this.cy
if(typeof t!=="number")return H.y(t)
x.sa4(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.J()
v=this.x
if(typeof v!=="number")return H.y(v)
x=this.db
if(typeof x!=="number")return H.y(x)
t.sa4(0,-u*v+x)
this.b.sN(0)
this.c.sN(0)
y=y.F(0,a.z)
this.dx=this.al(new V.L(y.a,y.b).t(0,2).u(0,z.ga5()))}this.ad()},"$1","gbT",4,0,1],
ft:[function(a){var z,y,x
H.e(a,"$isp")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.B(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.J()
x=this.y
if(typeof x!=="number")return H.y(x)
z.sN(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.J()
z=this.x
if(typeof z!=="number")return H.y(z)
x.sN(-y*10*z)
this.ad()}},"$1","gbU",4,0,1],
ja:[function(a){if(H.d(H.e(a,"$isp"),"$isdS").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfo",4,0,1],
jb:[function(a){var z,y,x,w,v,u,t
a=H.d(H.e(a,"$isp"),"$isbf")
if(!J.I(this.d,a.x.b))return
z=a.c
y=a.d
x=y.F(0,a.y)
w=this.al(new V.L(x.a,x.b).t(0,2).u(0,z.ga5()))
x=this.c
v=w.a
if(typeof v!=="number")return v.J()
u=this.y
if(typeof u!=="number")return H.y(u)
t=this.cy
if(typeof t!=="number")return H.y(t)
x.sa4(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.J()
v=this.x
if(typeof v!=="number")return H.y(v)
x=this.db
if(typeof x!=="number")return H.y(x)
t.sa4(0,-u*v+x)
this.b.sN(0)
this.c.sN(0)
y=y.F(0,a.z)
this.dx=this.al(new V.L(y.a,y.b).t(0,2).u(0,z.ga5()))
this.ad()},"$1","gfp",4,0,1],
jG:[function(a){H.e(a,"$isp")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghr",4,0,1],
jF:[function(a){var z,y,x,w,v,u,t
a=H.d(H.e(a,"$isp"),"$iseo")
if(!this.cx)return
if(this.ch){z=a.d.F(0,a.y)
z=new V.L(z.a,z.b)
z=z.B(z)
y=this.Q
if(typeof y!=="number")return H.y(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.F(0,a.y)
z=this.al(new V.L(y.a,y.b).t(0,2).u(0,z.ga5()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.J()
x=this.y
if(typeof x!=="number")return H.y(x)
y.sN(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.J()
y=this.x
if(typeof y!=="number")return H.y(y)
x.sN(-z*10*y)}else{z=a.c
y=a.d
x=y.F(0,a.y)
w=this.al(new V.L(x.a,x.b).t(0,2).u(0,z.ga5()))
x=this.c
v=w.a
if(typeof v!=="number")return v.J()
u=this.y
if(typeof u!=="number")return H.y(u)
t=this.cy
if(typeof t!=="number")return H.y(t)
x.sa4(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.J()
v=this.x
if(typeof v!=="number")return H.y(v)
x=this.db
if(typeof x!=="number")return H.y(x)
t.sa4(0,-u*v+x)
this.b.sN(0)
this.c.sN(0)
y=y.F(0,a.z)
this.dx=this.al(new V.L(y.a,y.b).t(0,2).u(0,z.ga5()))}this.ad()},"$1","ghq",4,0,1],
jE:[function(a){var z,y,x
H.e(a,"$isp")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.B(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.J()
x=this.y
if(typeof x!=="number")return H.y(x)
z.sN(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.J()
z=this.x
if(typeof z!=="number")return H.y(z)
x.sN(-y*10*z)
this.ad()}},"$1","ghp",4,0,1],
aP:function(a,b){var z,y,x,w,v
z=this.dy
y=a.e
if(typeof z!=="number")return z.aj()
if(z<y){this.dy=y
x=a.y
this.c.ai(x)
this.b.ai(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.fr=V.ao(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1).t(0,V.cH(this.c.d))}return this.fr},
$isZ:1},iP:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gl:function(){var z=this.r
if(z==null){z=D.A()
this.r=z}return z},
L:function(a){var z=this.r
if(!(z==null))z.w(a)},
aW:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.A()
z.e=y
z=y}else z=y
y=this.gfu()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.A()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
jc:[function(a){var z,y,x,w
H.e(a,"$isp")
if(!J.I(this.b,this.a.b.c))return
H.d(a,"$iscJ")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.t()
w=z+y*x
if(z!==w){this.d=w
z=new D.x("zoom",z,w,this,[P.r])
z.b=!0
this.L(z)}},"$1","gfu",4,0,1],
aP:function(a,b){var z,y,x
z=this.e
y=a.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.hv(x,x,x,1)}return this.f},
$isZ:1}}],["","",,M,{"^":"",fB:{"^":"a;0a,0b,0c,0d,0e,0f",
gl:function(){var z=this.f
if(z==null){z=D.A()
this.f=z}return z},
T:[function(a){var z
H.e(a,"$isp")
z=this.f
if(!(z==null))z.w(a)},function(){return this.T(null)},"cT","$1","$0","gO",0,2,0],
saX:function(a){var z,y
if(a==null)a=new X.fZ()
z=this.a
if(z!==a){if(z!=null)z.gl().M(0,this.gO())
y=this.a
this.a=a
a.gl().h(0,this.gO())
z=new D.x("camera",y,this.a,this,[X.bO])
z.b=!0
this.T(z)}},
sb4:function(a,b){var z,y
if(b==null)b=X.cx(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gl().M(0,this.gO())
y=this.b
this.b=b
b.gl().h(0,this.gO())
z=new D.x("target",y,this.b,this,[X.c4])
z.b=!0
this.T(z)}},
sb5:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gl().M(0,this.gO())
y=this.c
this.c=a
if(a!=null)a.gl().h(0,this.gO())
z=new D.x("technique",y,this.c,this,[O.bl])
z.b=!0
this.T(z)}},
a3:function(a){a.cA(this.c)
this.b.U(a)
this.a.U(a)
this.d.ai(a)
this.d.a3(a)
this.a.az(a)
this.b.toString
a.cz()},
$isaK:1,
$isc2:1},fO:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
sf0:function(a,b){this.d=H.f(b,"$isJ",[E.ah],"$asJ")},
T:[function(a){var z
H.e(a,"$isp")
z=this.x
if(!(z==null))z.w(a)},function(){return this.T(null)},"cT","$1","$0","gO",0,2,0],
ji:[function(a,b){var z,y,x,w,v,u,t,s
z=E.ah
H.f(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gO(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.u)(b),++u){t=b[u]
if(t!=null){if(t.gX()==null){s=new D.at()
s.sa0(null)
s.sas(null)
s.c=null
s.d=0
t.sX(s)}s=t.gX()
s.toString
H.l(x,w)
if(s.a==null)s.sa0(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.bE(a,b,this,[z])
z.b=!0
this.T(z)},"$2","gfC",8,0,5],
jj:[function(a,b){var z,y,x,w,v,u
z=E.ah
H.f(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gO(),w=0;w<b.length;b.length===y||(0,H.u)(b),++w){v=b[w]
if(v!=null){if(v.gX()==null){u=new D.at()
u.sa0(null)
u.sas(null)
u.c=null
u.d=0
v.sX(u)}v.gX().M(0,x)}}z=new D.bF(a,b,this,[z])
z.b=!0
this.T(z)},"$2","gfD",8,0,5],
saX:function(a){var z,y
if(a==null)a=X.cL(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null)z.gl().M(0,this.gO())
y=this.a
this.a=a
a.gl().h(0,this.gO())
z=new D.x("camera",y,this.a,this,[X.bO])
z.b=!0
this.T(z)}},
sb4:function(a,b){var z,y
if(b==null)b=X.cx(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gl().M(0,this.gO())
y=this.b
this.b=b
b.gl().h(0,this.gO())
z=new D.x("target",y,this.b,this,[X.c4])
z.b=!0
this.T(z)}},
sb5:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gl().M(0,this.gO())
y=this.c
this.c=a
if(a!=null)a.gl().h(0,this.gO())
z=new D.x("technique",y,this.c,this,[O.bl])
z.b=!0
this.T(z)}},
gl:function(){var z=this.x
if(z==null){z=D.A()
this.x=z}return z},
a3:function(a){var z
a.cA(this.c)
this.b.U(a)
this.a.U(a)
z=this.c
if(z!=null)z.ai(a)
for(z=this.d.a,z=new J.a9(z,z.length,0,[H.q(z,0)]);z.C();)z.d.ai(a)
for(z=this.d.a,z=new J.a9(z,z.length,0,[H.q(z,0)]);z.C();)z.d.a3(a)
this.a.toString
a.cy.ax()
a.db.ax()
this.b.toString
a.cz()},
$isaK:1,
$isc2:1},aK:{"^":"c2;"},c2:{"^":"a;"},ih:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
sfY:function(a){this.z=H.f(a,"$isJ",[M.aK],"$asJ")},
gl:function(){var z=this.cy
if(z==null){z=D.A()
this.cy=z}return z},
T:[function(a){var z
H.e(a,"$isp")
z=this.cy
if(!(z==null))z.w(a)},function(){return this.T(null)},"cT","$1","$0","gO",0,2,0],
je:[function(a,b){var z,y,x,w,v,u,t,s
z=M.aK
H.f(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gO(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.u)(b),++u){t=b[u]
if(t!=null){s=t.gl()
s.toString
H.l(x,w)
if(s.a==null)s.sa0(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.bE(a,b,this,[z])
z.b=!0
this.T(z)},"$2","gfw",8,0,19],
jz:[function(a,b){var z,y,x,w,v
z=M.aK
H.f(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gO(),w=0;w<b.length;b.length===y||(0,H.u)(b),++w){v=b[w]
if(v!=null)v.gl().M(0,x)}z=new D.bF(a,b,this,[z])
z.b=!0
this.T(z)},"$2","gfU",8,0,19],
a3:function(a){var z,y
this.y.se7(0,this.r)
for(z=this.z.a,z=new J.a9(z,z.length,0,[H.q(z,0)]);z.C();){y=z.d
y.sb4(0,this.y)
y.saX(this.e)
y.a3(a)}this.y.se7(0,this.x)
for(z=this.z.a,z=new J.a9(z,z.length,0,[H.q(z,0)]);z.C();){y=z.d
y.sb4(0,this.y)
y.saX(this.f)
y.a3(a)}},
$isc2:1}}],["","",,A,{"^":"",dp:{"^":"a;a,b,c"},fq:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
im:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.u)(z),++x){w=z[x]
C.b.dC(w.a,w.c)}},
dz:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.u)(z),++x){w=z[x]
C.b.dA(w.a,w.c)}}},dV:{"^":"c3;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0ao,0af,0bk,0dD,0bl,0bm,0dE,0dF,0bn,0bo,0dG,0dH,0bp,0bq,0dI,0dJ,0br,0dK,0dL,0bs,0dM,0dN,0bt,0bu,0bv,0dO,0dP,0bw,0bx,0dQ,0dR,0by,0dS,0ci,0dT,0cj,0dU,0ck,0dV,0cl,0dW,0cm,0dX,0cn,a,b,0c,0d,0e,0f,0r,0x,0y",
seW:function(a){this.r1=H.f(a,"$isb",[A.ak],"$asb")},
seJ:function(a){this.ci=H.f(a,"$isb",[A.cZ],"$asb")},
seK:function(a){this.cj=H.f(a,"$isb",[A.d0],"$asb")},
seL:function(a){this.ck=H.f(a,"$isb",[A.d1],"$asb")},
seM:function(a){this.cl=H.f(a,"$isb",[A.d2],"$asb")},
seN:function(a){this.cm=H.f(a,"$isb",[A.d3],"$asb")},
seO:function(a){this.cn=H.f(a,"$isb",[A.d4],"$asb")},
ez:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.z=a1
z=new P.bI("")
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
a1.hz(z)
a1.hG(z)
a1.hA(z)
a1.hO(z)
a1.hP(z)
a1.hI(z)
a1.hT(z)
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
z=new P.bI("")
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
v.hD(z)
v.hy(z)
v.hB(z)
v.hE(z)
v.hM(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.hK(z)
v.hL(z)}v.hH(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.c){r+="uniform float alpha;\n"
z.a=r
if(q!==C.f){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.e){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.d){r+="uniform samplerCube alphaTxt;\n"
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
case C.e:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
p=H.c([],[P.z])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.A(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.hC(z)
v.hJ(z)
v.hN(z)
v.hQ(z)
v.hR(z)
v.hS(z)
v.hF(z)}r=z.a+="// === Main ===\n"
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
o=H.c([],[P.z])
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
n="vec4("+C.a.A(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.dZ(x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a1.fr)this.id=H.d(this.y.k(0,"invViewMat"),"$isak")
if(y)this.dy=H.d(this.y.k(0,"objMat"),"$isak")
if(w)this.fr=H.d(this.y.k(0,"viewObjMat"),"$isak")
this.fy=H.d(this.y.k(0,"projViewObjMat"),"$isak")
if(a1.x2)this.k1=H.d(this.y.k(0,"txt2DMat"),"$isd_")
if(a1.y1)this.k2=H.d(this.y.k(0,"txtCubeMat"),"$isak")
if(a1.y2)this.k3=H.d(this.y.k(0,"colorMat"),"$isak")
this.seW(H.c([],[A.ak]))
y=a1.ao
if(y>0){this.k4=H.e(this.y.k(0,"bendMatCount"),"$isC")
for(m=0;m<y;++m){x=this.r1
w=this.y
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.o(P.n("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.d(l,"$isak"))}}y=a1.a
if(y!==C.c){this.r2=H.d(this.y.k(0,"emissionClr"),"$isB")
switch(y){case C.c:break
case C.f:break
case C.e:this.rx=H.d(this.y.k(0,"emissionTxt"),"$isad")
this.x1=H.d(this.y.k(0,"nullEmissionTxt"),"$isC")
break
case C.d:this.ry=H.d(this.y.k(0,"emissionTxt"),"$isa4")
this.x1=H.d(this.y.k(0,"nullEmissionTxt"),"$isC")
break}}y=a1.b
if(y!==C.c){this.x2=H.d(this.y.k(0,"ambientClr"),"$isB")
switch(y){case C.c:break
case C.f:break
case C.e:this.y1=H.d(this.y.k(0,"ambientTxt"),"$isad")
this.ao=H.d(this.y.k(0,"nullAmbientTxt"),"$isC")
break
case C.d:this.y2=H.d(this.y.k(0,"ambientTxt"),"$isa4")
this.ao=H.d(this.y.k(0,"nullAmbientTxt"),"$isC")
break}}y=a1.c
if(y!==C.c){this.af=H.d(this.y.k(0,"diffuseClr"),"$isB")
switch(y){case C.c:break
case C.f:break
case C.e:this.bk=H.d(this.y.k(0,"diffuseTxt"),"$isad")
this.bl=H.d(this.y.k(0,"nullDiffuseTxt"),"$isC")
break
case C.d:this.dD=H.d(this.y.k(0,"diffuseTxt"),"$isa4")
this.bl=H.d(this.y.k(0,"nullDiffuseTxt"),"$isC")
break}}y=a1.d
if(y!==C.c){this.bm=H.d(this.y.k(0,"invDiffuseClr"),"$isB")
switch(y){case C.c:break
case C.f:break
case C.e:this.dE=H.d(this.y.k(0,"invDiffuseTxt"),"$isad")
this.bn=H.d(this.y.k(0,"nullInvDiffuseTxt"),"$isC")
break
case C.d:this.dF=H.d(this.y.k(0,"invDiffuseTxt"),"$isa4")
this.bn=H.d(this.y.k(0,"nullInvDiffuseTxt"),"$isC")
break}}y=a1.e
if(y!==C.c){this.bq=H.d(this.y.k(0,"shininess"),"$isM")
this.bo=H.d(this.y.k(0,"specularClr"),"$isB")
switch(y){case C.c:break
case C.f:break
case C.e:this.dG=H.d(this.y.k(0,"specularTxt"),"$isad")
this.bp=H.d(this.y.k(0,"nullSpecularTxt"),"$isC")
break
case C.d:this.dH=H.d(this.y.k(0,"specularTxt"),"$isa4")
this.bp=H.d(this.y.k(0,"nullSpecularTxt"),"$isC")
break}}switch(a1.f){case C.c:break
case C.f:break
case C.e:this.dI=H.d(this.y.k(0,"bumpTxt"),"$isad")
this.br=H.d(this.y.k(0,"nullBumpTxt"),"$isC")
break
case C.d:this.dJ=H.d(this.y.k(0,"bumpTxt"),"$isa4")
this.br=H.d(this.y.k(0,"nullBumpTxt"),"$isC")
break}if(a1.dy){this.dK=H.d(this.y.k(0,"envSampler"),"$isa4")
this.dL=H.d(this.y.k(0,"nullEnvTxt"),"$isC")
y=a1.r
if(y!==C.c){this.bs=H.d(this.y.k(0,"reflectClr"),"$isB")
switch(y){case C.c:break
case C.f:break
case C.e:this.dM=H.d(this.y.k(0,"reflectTxt"),"$isad")
this.bt=H.d(this.y.k(0,"nullReflectTxt"),"$isC")
break
case C.d:this.dN=H.d(this.y.k(0,"reflectTxt"),"$isa4")
this.bt=H.d(this.y.k(0,"nullReflectTxt"),"$isC")
break}}y=a1.x
if(y!==C.c){this.bu=H.d(this.y.k(0,"refraction"),"$isM")
this.bv=H.d(this.y.k(0,"refractClr"),"$isB")
switch(y){case C.c:break
case C.f:break
case C.e:this.dO=H.d(this.y.k(0,"refractTxt"),"$isad")
this.bw=H.d(this.y.k(0,"nullRefractTxt"),"$isC")
break
case C.d:this.dP=H.d(this.y.k(0,"refractTxt"),"$isa4")
this.bw=H.d(this.y.k(0,"nullRefractTxt"),"$isC")
break}}}y=a1.y
if(y!==C.c){this.bx=H.d(this.y.k(0,"alpha"),"$isM")
switch(y){case C.c:break
case C.f:break
case C.e:this.dQ=H.d(this.y.k(0,"alphaTxt"),"$isad")
this.by=H.d(this.y.k(0,"nullAlphaTxt"),"$isC")
break
case C.d:this.dR=H.d(this.y.k(0,"alphaTxt"),"$isa4")
this.by=H.d(this.y.k(0,"nullAlphaTxt"),"$isC")
break}}this.seJ(H.c([],[A.cZ]))
this.seK(H.c([],[A.d0]))
this.seL(H.c([],[A.d1]))
this.seM(H.c([],[A.d2]))
this.seN(H.c([],[A.d3]))
this.seO(H.c([],[A.d4]))
if(a1.k2){y=a1.z
if(y>0){this.dS=H.e(this.y.k(0,"dirLightCount"),"$isC")
for(m=0;m<y;++m){x=this.y
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isB")
x=this.y
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isB")
x=this.ci;(x&&C.a).h(x,new A.cZ(m,l,k))}}y=a1.Q
if(y>0){this.dT=H.e(this.y.k(0,"pntLightCount"),"$isC")
for(m=0;m<y;++m){x=this.y
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isB")
x=this.y
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isB")
x=this.y
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isB")
x=this.y
w="pntLights["+m+"].att0"
i=x.j(0,w)
if(i==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isM")
x=this.y
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isM")
x=this.y
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isM")
x=this.cj;(x&&C.a).h(x,new A.d0(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.dU=H.e(this.y.k(0,"spotLightCount"),"$isC")
for(m=0;m<y;++m){x=this.y
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isB")
x=this.y
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isB")
x=this.y
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isB")
x=this.y
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isB")
x=this.y
w="spotLights["+m+"].cutoff"
h=x.j(0,w)
if(h==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isM")
x=this.y
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isM")
x=this.y
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isM")
x=this.y
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isM")
x=this.y
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isM")
x=this.ck;(x&&C.a).h(x,new A.d1(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.dV=H.e(this.y.k(0,"txtDirLightCount"),"$isC")
for(m=0;m<y;++m){x=this.y
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isB")
x=this.y
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isB")
x=this.y
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isB")
x=this.y
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isB")
x=this.y
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isB")
x=this.y
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isC")
x=this.y
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isad")
x=this.cl;(x&&C.a).h(x,new A.d2(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.dW=H.e(this.y.k(0,"txtPntLightCount"),"$isC")
for(m=0;m<y;++m){x=this.y
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isB")
x=this.y
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isB")
x=this.y
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isd_")
x=this.y
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isB")
x=this.y
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isC")
x=this.y
w="txtPntLights["+m+"].att0"
g=x.j(0,w)
if(g==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isM")
x=this.y
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isM")
x=this.y
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isM")
x=this.y
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isa4")
x=this.cm;(x&&C.a).h(x,new A.d3(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.dX=H.e(this.y.k(0,"txtSpotLightCount"),"$isC")
for(m=0;m<y;++m){x=this.y
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isB")
x=this.y
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isB")
x=this.y
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isB")
x=this.y
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isB")
x=this.y
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isB")
x=this.y
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isC")
x=this.y
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isB")
x=this.y
w="txtSpotLights["+m+"].tuScalar"
e=x.j(0,w)
if(e==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isM")
x=this.y
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isM")
x=this.y
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(c,"$isM")
x=this.y
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(b,"$isM")
x=this.y
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a,"$isM")
x=this.y
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a0,"$isad")
x=this.cn;(x&&C.a).h(x,new A.d4(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
ae:function(a,b,c){C.b.I(b.a,b.d,1)},
a7:function(a,b,c){if(c==null||c.d<6)C.b.I(b.a,b.d,1)
else{a.cK(c)
C.b.I(b.a,b.d,0)}},
m:{
ho:function(a,b){var z,y
z=a.af
y=new A.dV(b,z)
y.cR(b,z)
y.ez(a,b)
return y}}},hr:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,ao,af,bk",
hz:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.ao+"];\n"
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
hG:function(a){var z
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
hA:function(a){var z
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
hO:function(a){var z,y
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
hP:function(a){var z,y
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
hI:function(a){var z
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
hT:function(a){var z
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
aq:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.k(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.cN(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
hD:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aq(a,z,"emission")
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
case C.e:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
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
hy:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aq(a,z,"ambient")
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
case C.e:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
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
hB:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aq(a,z,"diffuse")
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
case C.e:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
hE:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aq(a,z,"invDiffuse")
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
case C.e:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
hM:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aq(a,z,"specular")
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
case C.e:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
hH:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.c:break
case C.f:break
case C.e:z+="uniform sampler2D bumpTxt;\n"
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
switch(y){case C.c:z+="   return normalize(normalVec);\n"
a.a=z
break
case C.f:z+="   return normalize(normalVec);\n"
a.a=z
break
case C.e:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
hK:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aq(a,z,"reflect")
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
case C.e:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
hL:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aq(a,z,"refract")
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
case C.e:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
hC:function(a){var z,y
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
hJ:function(a){var z,y
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
hN:function(a){var z,y
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
hQ:function(a){var z,y,x
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
hR:function(a){var z,y,x
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
hS:function(a){var z,y,x
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
hF:function(a){var z
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
i:function(a){return this.af}},cZ:{"^":"a;a,b,c"},d2:{"^":"a;a,b,c,d,e,f,r,x"},d0:{"^":"a;a,b,c,d,e,f,r"},d3:{"^":"a;a,b,c,d,e,f,r,x,y,z"},d1:{"^":"a;a,b,c,d,e,f,r,x,y,z"},d4:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},c3:{"^":"cn;",
cR:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dZ:function(a,b){var z,y,x
this.c=a
this.d=b
this.e=this.d4(a,35633)
this.f=this.d4(this.d,35632)
z=this.a
y=z.createProgram()
this.r=y
C.b.dn(z,y,this.e)
C.b.dn(z,this.r,this.f)
C.b.ix(z,this.r)
if(!H.f8(C.b.bF(z,this.r,35714))){x=C.b.el(z,this.r)
C.b.ib(z,this.r)
H.o(P.n("Failed to link shader: "+H.h(x)))}this.hd()
this.hf()},
U:function(a){C.b.cD(a.a,this.r)
this.x.im()},
d4:function(a,b){var z,y,x
z=this.a
y=C.b.i9(z,b)
C.b.es(z,y,a)
C.b.i4(z,y)
if(!H.f8(C.b.eo(z,y,35713))){x=C.b.en(z,y)
C.b.ic(z,y)
throw H.i(P.n("Error compiling shader '"+H.h(y)+"': "+H.h(x)))}return y},
hd:function(){var z,y,x,w,v,u
z=H.c([],[A.dp])
y=this.a
x=H.V(C.b.bF(y,this.r,35721))
if(typeof x!=="number")return H.y(x)
w=0
for(;w<x;++w){v=C.b.eg(y,this.r,w)
u=C.b.ei(y,this.r,v.name)
C.a.h(z,new A.dp(y,v.name,u))}this.x=new A.fq(z)},
hf:function(){var z,y,x,w,v,u
z=H.c([],[A.a3])
y=this.a
x=H.V(C.b.bF(y,this.r,35718))
if(typeof x!=="number")return H.y(x)
w=0
for(;w<x;++w){v=C.b.eh(y,this.r,w)
u=C.b.ep(y,this.r,v.name)
C.a.h(z,this.ia(v.type,v.size,v.name,u))}this.y=new A.iF(z)},
aE:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.C(z,y,b,c)
else return A.cY(z,y,b,a,c)},
f3:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ad(z,y,b,c)
else return A.cY(z,y,b,a,c)},
f4:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.a4(z,y,b,c)
else return A.cY(z,y,b,a,c)},
bh:function(a,b){return new P.eN(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.h(b)+"."))},
ia:function(a,b,c,d){switch(a){case 5120:return this.aE(b,c,d)
case 5121:return this.aE(b,c,d)
case 5122:return this.aE(b,c,d)
case 5123:return this.aE(b,c,d)
case 5124:return this.aE(b,c,d)
case 5125:return this.aE(b,c,d)
case 5126:return new A.M(this.a,this.r,c,d)
case 35664:return new A.iA(this.a,this.r,c,d)
case 35665:return new A.B(this.a,this.r,c,d)
case 35666:return new A.iD(this.a,this.r,c,d)
case 35667:return new A.iB(this.a,this.r,c,d)
case 35668:return new A.iC(this.a,this.r,c,d)
case 35669:return new A.iE(this.a,this.r,c,d)
case 35674:return new A.iH(this.a,this.r,c,d)
case 35675:return new A.d_(this.a,this.r,c,d)
case 35676:return new A.ak(this.a,this.r,c,d)
case 35678:return this.f3(b,c,d)
case 35680:return this.f4(b,c,d)
case 35670:throw H.i(this.bh("BOOL",c))
case 35671:throw H.i(this.bh("BOOL_VEC2",c))
case 35672:throw H.i(this.bh("BOOL_VEC3",c))
case 35673:throw H.i(this.bh("BOOL_VEC4",c))
default:throw H.i(P.n("Unknown uniform variable type "+H.h(a)+" for "+H.h(c)+"."))}}},bQ:{"^":"a;a,b",
i:function(a){return this.b}},ec:{"^":"c3;0z,0Q,0ch,0cx,0cy,0db,a,b,0c,0d,0e,0f,0r,0x,0y"},a3:{"^":"a;"},iF:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
k:function(a,b){var z=this.j(0,b)
if(z==null)throw H.i(P.n("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.G()},
ip:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.u)(z),++w)x+=z[w].i(0)+a
return x},
G:function(){return this.ip("\n")}},C:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform1i: "+H.h(this.c)}},iB:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform2i: "+H.h(this.c)}},iC:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform3i: "+H.h(this.c)}},iE:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform4i: "+H.h(this.c)}},iz:{"^":"a3;0e,0f,a,b,c,d",
shw:function(a){this.e=H.f(a,"$isb",[P.w],"$asb")},
i:function(a){return"Uniform1iv: "+H.h(this.c)},
m:{
cY:function(a,b,c,d,e){var z=new A.iz(a,b,c,e)
z.f=d
z.shw(P.hf(d,0,!1,P.w))
return z}}},M:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform1f: "+H.h(this.c)}},iA:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform2f: "+H.h(this.c)}},B:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform3f: "+H.h(this.c)}},iD:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform4f: "+H.h(this.c)}},iH:{"^":"a3;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.h(this.c)}},d_:{"^":"a3;a,b,c,d",
ac:function(a){var z=new Float32Array(H.bt(H.f(a,"$isb",[P.r],"$asb")))
C.b.ec(this.a,this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.h(this.c)}},ak:{"^":"a3;a,b,c,d",
ac:function(a){var z=new Float32Array(H.bt(H.f(a,"$isb",[P.r],"$asb")))
C.b.ed(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.h(this.c)}},ad:{"^":"a3;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.h(this.c)}},a4:{"^":"a3;a,b,c,d",
cK:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)C.b.I(y,x,0)
else C.b.I(y,x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.h(this.c)}}}],["","",,F,{"^":"",
ca:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
br:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
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
z.d=y}l=F.ca(y)
k=F.ca(z.b)
j=F.ko(d,e,new F.jL(z,F.ca(z.c),F.ca(z.d),k,l,c),b)
if(j!=null)a.iB(j)},
ko:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.as,P.r,P.r]})
if(a<1)return
if(b<1)return
z=F.cO()
y=H.c([],[F.as])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.c7(null,null,new V.aG(u,0,0,1),null,null,new V.a_(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cd(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.c7(null,null,new V.aG(o,n,m,1),null,null,new V.a_(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cd(d))}}z.d.hV(a+1,b+1,y)
return z},
jL:{"^":"t:30;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cs(z.b,b).cs(z.d.cs(z.c,b),c)
z=new V.ab(y.a,y.b,y.c)
if(!J.I(a.f,z)){a.f=z
z=a.a
if(z!=null)z.a2()}a.sb7(y.u(0,Math.sqrt(y.B(y))))
z=1-b
x=1-c
x=new V.bj(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.I(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.a2()}}},
Y:{"^":"a;0a,0b,0c,0d,0e",
eV:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.bJ()
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.e_())return
return v.u(0,Math.sqrt(v.B(v)))},
f_:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.F(0,y)
z=new V.G(z.a,z.b,z.c)
v=z.u(0,Math.sqrt(z.B(z)))
z=w.F(0,y)
z=new V.G(z.a,z.b,z.c)
z=v.aY(z.u(0,Math.sqrt(z.B(z))))
return z.u(0,Math.sqrt(z.B(z)))},
cb:function(){if(this.d!=null)return!0
var z=this.eV()
if(z==null){z=this.f_()
if(z==null)return!1}this.d=z
this.a.a.a2()
return!0},
eU:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=V.bJ()
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.e_())return
return v.u(0,Math.sqrt(v.B(v)))},
eZ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.m.$2(n,0)){z=r.F(0,u)
z=new V.G(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.B(z)))
if(o.a-p.a<0)m=m.J(0)}else{l=(z-q.b)/n
z=r.F(0,u)
z=new V.ab(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).F(0,x)
z=new V.G(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.B(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.J(0)}z=this.d
if(z!=null){k=z.u(0,Math.sqrt(z.B(z)))
z=k.aY(m)
z=z.u(0,Math.sqrt(z.B(z))).aY(k)
m=z.u(0,Math.sqrt(z.B(z)))}return m},
c9:function(){if(this.e!=null)return!0
var z=this.eU()
if(z==null){z=this.eZ()
if(z==null)return!1}this.e=z
this.a.a.a2()
return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
v:function(a){var z,y
z=this.a
if(z==null||this.b==null||this.c==null)return a+"disposed"
y=a+C.i.ab(J.a8(z.e),0)+", "+C.i.ab(J.a8(this.b.e),0)+", "+C.i.ab(J.a8(this.c.e),0)+" {"
z=this.d
y=z!=null?y+(z.i(0)+", "):y+"-, "
z=this.e
return z!=null?y+(z.i(0)+"}"):y+"-}"},
G:function(){return this.v("")},
m:{
b8:function(a,b,c){var z,y,x
z=new F.Y()
y=a.a
if(y==null)H.o(P.n("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.o(P.n("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.a2()
return z}}},
bd:{"^":"a;0a,0b",
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
v:function(a){var z=this.a
if(z==null||this.b==null)return a+"disposed"
return a+C.i.ab(J.a8(z.e),0)+", "+C.i.ab(J.a8(this.b.e),0)},
G:function(){return this.v("")},
m:{
h9:function(a,b){var z,y,x
z=new F.bd()
y=a.a
if(y==null)H.o(P.n("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.o(P.n("May not create a line with vertices attached to different shapes."))
z.a=a
C.a.h(a.c.b,z)
z.b=b
C.a.h(b.c.c,z)
C.a.h(z.a.a.c.b,z)
z.a.a.a2()
return z}}},
bH:{"^":"a;0a",
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
v:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.i.ab(J.a8(z.e),0)},
G:function(){return this.v("")}},
eb:{"^":"a;0a,0b,0c,0d,0e",
gl:function(){var z=this.e
if(z==null){z=D.A()
this.e=z}return z},
iB:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.Y()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.u)(z),++w){v=z[w]
this.a.h(0,v.i8())}this.a.Y()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.u)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.Y()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.bH()
if(r.a==null)H.o(P.n("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.w(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.u)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.Y()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.Y()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.k(s,t)
o=s[t]
t=this.c.a
t.a.h(0,p)
t.a.h(0,o)
F.h9(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.u)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.Y()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.Y()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.k(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.Y()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
m=t[s]
s=this.d.a
s.a.h(0,p)
s.a.h(0,o)
s.a.h(0,m)
F.b8(p,o,m)}z=this.e
if(!(z==null))z.ay()},
av:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.av()||!1
if(!this.a.av())y=!1
z=this.e
if(!(z==null))z.ay()
return y},
ds:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$al()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aB().a)!==0)++w
if((x&$.$get$aA().a)!==0)++w
if((x&$.$get$aC().a)!==0)++w
if((x&$.$get$aD().a)!==0)++w
if((x&$.$get$bn().a)!==0)++w
if((x&$.$get$bo().a)!==0)++w
if((x&$.$get$aX().a)!==0)++w
if((x&$.$get$az().a)!==0)++w
v=b.gcM(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.r
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.ds])
for(r=0,q=0;q<w;++q){p=b.hX(q)
o=p.gcM(p)
C.a.V(s,q,new Z.ds(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.k(y,n)
m=y[n].iy(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.V(t,l,m[k]);++l}}r+=o}H.f(t,"$isb",[x],"$asb")
y=a.a
j=y.createBuffer()
C.b.am(y,34962,j)
C.b.dr(y,34962,new Float32Array(H.bt(t)),35044)
C.b.am(y,34962,null)
i=new Z.cq(new Z.eK(34962,j),s,b)
i.sfj(H.c([],[Z.bD]))
if(this.b.b.length!==0){x=P.w
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.Y()
C.a.h(h,g.e)}f=Z.d6(y,34963,H.f(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bD(0,h.length,f))}if(this.c.b.length!==0){x=P.w
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.Y()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.k(g,q)
g=g[q].b
g.a.a.Y()
C.a.h(h,g.e)}f=Z.d6(y,34963,H.f(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bD(1,h.length,f))}if(this.d.b.length!==0){x=P.w
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.Y()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.k(g,q)
g=g[q].b
g.a.a.Y()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.k(g,q)
g=g[q].c
g.a.a.Y()
C.a.h(h,g.e)}f=Z.d6(y,34963,H.f(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bD(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.z])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.v("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.v("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.v("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.v("   "))}return C.a.A(z,"\n")},
ag:function(a){var z=this.e
if(!(z==null))z.w(a)},
a2:function(){return this.ag(null)},
$iskJ:1,
m:{
cO:function(){var z,y
z=new F.eb()
y=new F.iT(z)
y.b=!1
y.shx(H.c([],[F.as]))
z.a=y
y=new F.i6(z)
y.sbY(H.c([],[F.bH]))
z.b=y
y=new F.i5(z)
y.sfk(H.c([],[F.bd]))
z.c=y
y=new F.i4(z)
y.sf9(H.c([],[F.Y]))
z.d=y
z.e=null
return z}}},
i4:{"^":"a;a,0b",
sf9:function(a){this.b=H.f(a,"$isb",[F.Y],"$asb")},
hU:function(a){var z,y,x,w,v,u
H.f(a,"$isb",[F.as],"$asb")
z=H.c([],[F.Y])
y=a[0]
for(x=this.a,w=2;w<4;++w){v=a[w-1]
u=a[w]
x.a.h(0,y)
x.a.h(0,v)
x.a.h(0,u)
C.a.h(z,F.b8(y,v,u))}return z},
hV:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.f(c,"$isb",[F.as],"$asb")
z=H.c([],[F.Y])
for(y=this.a,x=b,w=0,v=!1,u=1;u<a;++u,++w,++x){for(t=v,s=1;s<b;++s,x=o){r=c.length
if(w<0||w>=r)return H.k(c,w)
q=c[w];++w
if(w>=r)return H.k(c,w)
p=c[w]
o=x+1
if(o<0||o>=r)return H.k(c,o)
n=c[o]
if(x<0||x>=r)return H.k(c,x)
m=c[x]
r=y.a
if(t){r.h(0,q)
y.a.h(0,p)
y.a.h(0,n)
C.a.h(z,F.b8(q,p,n))
y.a.h(0,q)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.b8(q,n,m))}else{r.h(0,p)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.b8(p,n,m))
y.a.h(0,p)
y.a.h(0,m)
y.a.h(0,q)
C.a.h(z,F.b8(p,m,q))}t=!t}v=!v}return z},
gn:function(a){return this.b.length},
av:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.u)(z),++w)if(!z[w].cb())x=!1
return x},
ca:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.u)(z),++w)if(!z[w].c9())x=!1
return x},
i:function(a){return this.G()},
v:function(a){var z,y,x,w
z=H.c([],[P.z])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.u)(y),++w)C.a.h(z,y[w].v(a))
return C.a.A(z,"\n")},
G:function(){return this.v("")}},
i5:{"^":"a;a,0b",
sfk:function(a){this.b=H.f(a,"$isb",[F.bd],"$asb")},
gn:function(a){return this.b.length},
i:function(a){return this.G()},
v:function(a){var z,y,x,w
z=H.c([],[P.z])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.k(w,x)
C.a.h(z,w[x].v(a+(""+x+". ")))}return C.a.A(z,"\n")},
G:function(){return this.v("")}},
i6:{"^":"a;a,0b",
sbY:function(a){this.b=H.f(a,"$isb",[F.bH],"$asb")},
gn:function(a){return this.b.length},
i:function(a){return this.G()},
v:function(a){var z,y,x,w
z=H.c([],[P.z])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.u)(y),++w)C.a.h(z,y[w].v(a))
return C.a.A(z,"\n")},
G:function(){return this.v("")}},
as:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cd:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.c7(this.cx,x,u,z,y,w,v,a,t)},
i8:function(){return this.cd(null)},
sb7:function(a){var z
if(!J.I(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a2()}},
iy:function(a){var z,y
if(a.q(0,$.$get$al())){z=this.f
y=[P.r]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.q(0,$.$get$aB())){z=this.r
y=[P.r]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.q(0,$.$get$aA())){z=this.x
y=[P.r]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.q(0,$.$get$aC())){z=this.y
y=[P.r]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(a.q(0,$.$get$aD())){z=this.z
y=[P.r]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.q(0,$.$get$bn())){z=this.Q
y=[P.r]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.q(0,$.$get$bo())){z=this.Q
y=[P.r]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(a.q(0,$.$get$aX()))return H.c([this.ch],[P.r])
else if(a.q(0,$.$get$az())){z=this.cx
y=[P.r]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.r])},
cb:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bJ()
this.d.a9(0,new F.j_(z))
z=z.a
this.r=z.u(0,Math.sqrt(z.B(z)))
z=this.a
if(z!=null){z.a2()
z=this.a.e
if(!(z==null))z.ay()}return!0},
c9:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bJ()
this.d.a9(0,new F.iZ(z))
z=z.a
this.x=z.u(0,Math.sqrt(z.B(z)))
z=this.a
if(z!=null){z.a2()
z=this.a.e
if(!(z==null))z.ay()}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
v:function(a){var z,y,x
z=H.c([],[P.z])
C.a.h(z,C.i.ab(J.a8(this.e),0))
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
C.a.h(z,V.F(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.A(z,", ")
return a+"{"+x+"}"},
G:function(){return this.v("")},
m:{
c7:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.as()
y=new F.iY(z)
y.sbY(H.c([],[F.bH]))
z.b=y
y=new F.iX(z)
x=[F.bd]
y.sfl(H.c([],x))
y.sfm(H.c([],x))
z.c=y
y=new F.iU(z)
x=[F.Y]
y.sfa(H.c([],x))
y.sfb(H.c([],x))
y.sfc(H.c([],x))
z.d=y
h=$.$get$eH()
z.e=0
y=$.$get$al()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aB().a)!==0?e:null
z.x=(x&$.$get$aA().a)!==0?b:null
z.y=(x&$.$get$aC().a)!==0?f:null
z.z=(x&$.$get$aD().a)!==0?g:null
z.Q=(x&$.$get$eI().a)!==0?c:null
z.ch=(x&$.$get$aX().a)!==0?i:0
z.cx=(x&$.$get$az().a)!==0?a:null
return z}}},
j_:{"^":"t:6;a",
$1:function(a){var z,y
H.e(a,"$isY")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
iZ:{"^":"t:6;a",
$1:function(a){var z,y
H.e(a,"$isY")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
iT:{"^":"a;a,0b,0c",
shx:function(a){this.c=H.f(a,"$isb",[F.as],"$asb")},
Y:function(){},
h:function(a,b){var z,y
z=b.a
if(z!=null){if(z===this.a)return!1
throw H.i(P.n("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
y=this.a
b.a=y
C.a.h(z,b)
y.a2()
return!0},
hW:function(a,b,c,d,e,f,g,h,i){var z=F.c7(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bi:function(a,b,c,d,e,f){return this.hW(a,null,b,c,null,d,e,f,0)},
gn:function(a){return this.c.length},
av:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.u)(z),++x)z[x].cb()
return!0},
ca:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.u)(z),++x)z[x].c9()
return!0},
i0:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.u)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.u(0,Math.sqrt(u*u+t*t+s*s))
if(!J.I(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.w(null)}}}}return!0},
i:function(a){return this.G()},
v:function(a){var z,y,x,w
this.Y()
z=H.c([],[P.z])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.u)(y),++w)C.a.h(z,y[w].v(a))
return C.a.A(z,"\n")},
G:function(){return this.v("")}},
iU:{"^":"a;a,0b,0c,0d",
sfa:function(a){this.b=H.f(a,"$isb",[F.Y],"$asb")},
sfb:function(a){this.c=H.f(a,"$isb",[F.Y],"$asb")},
sfc:function(a){this.d=H.f(a,"$isb",[F.Y],"$asb")},
gn:function(a){return this.b.length+this.c.length+this.d.length},
a9:function(a,b){H.l(b,{func:1,ret:-1,args:[F.Y]})
C.a.a9(this.b,b)
C.a.a9(this.c,new F.iV(this,b))
C.a.a9(this.d,new F.iW(this,b))},
i:function(a){return this.G()},
v:function(a){var z,y,x,w
z=H.c([],[P.z])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.u)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.u)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.u)(y),++w)C.a.h(z,y[w].v(a))
return C.a.A(z,"\n")},
G:function(){return this.v("")}},
iV:{"^":"t:6;a,b",
$1:function(a){H.e(a,"$isY")
if(!J.I(a.a,this.a))this.b.$1(a)}},
iW:{"^":"t:6;a,b",
$1:function(a){var z
H.e(a,"$isY")
z=this.a
if(!J.I(a.a,z)&&!J.I(a.b,z))this.b.$1(a)}},
iX:{"^":"a;a,0b,0c",
sfl:function(a){this.b=H.f(a,"$isb",[F.bd],"$asb")},
sfm:function(a){this.c=H.f(a,"$isb",[F.bd],"$asb")},
gn:function(a){return this.b.length+this.c.length},
i:function(a){return this.G()},
v:function(a){var z,y,x,w
z=H.c([],[P.z])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.u)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.u)(y),++w)C.a.h(z,y[w].v(a))
return C.a.A(z,"\n")},
G:function(){return this.v("")}},
iY:{"^":"a;a,0b",
sbY:function(a){this.b=H.f(a,"$isb",[F.bH],"$asb")},
gn:function(a){return this.b.length},
i:function(a){return this.G()},
v:function(a){var z,y,x,w
z=H.c([],[P.z])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.u)(y),++w)C.a.h(z,y[w].v(a))
return C.a.A(z,"\n")},
G:function(){return this.v("")}}}],["","",,O,{"^":"",hn:{"^":"bl;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
seX:function(a){this.e=H.f(a,"$isJ",[V.a2],"$asJ")},
gl:function(){var z=this.dy
if(z==null){z=D.A()
this.dy=z}return z},
S:[function(a){var z
H.e(a,"$isp")
z=this.dy
if(!(z==null))z.w(a)},function(){return this.S(null)},"d9","$1","$0","gaG",0,2,0],
h5:[function(a){H.e(a,"$isp")
this.a=null
this.S(a)},function(){return this.h5(null)},"jD","$1","$0","gh4",0,2,0],
jf:[function(a,b){var z=V.a2
z=new D.bE(a,H.f(b,"$isj",[z],"$asj"),this,[z])
z.b=!0
this.S(z)},"$2","gfz",8,0,20],
jg:[function(a,b){var z=V.a2
z=new D.bF(a,H.f(b,"$isj",[z],"$asj"),this,[z])
z.b=!0
this.S(z)},"$2","gfA",8,0,20],
d1:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
c=z===C.e||r===C.e||q===C.e||p===C.e||o===C.e||n===C.e||m===C.e||l===C.e||k===C.e
b=z===C.d||r===C.d||q===C.d||p===C.d||o===C.d||n===C.d||m===C.d||l===C.d||k===C.d
a=x+u+v+w+t>0
a0=s>0
a1=e||!g||f
a2=$.$get$al()
if(e){g=$.$get$aB()
a2=new Z.aW(a2.a|g.a)}if(d){g=$.$get$aA()
a2=new Z.aW(a2.a|g.a)}if(c){g=$.$get$aC()
a2=new Z.aW(a2.a|g.a)}if(b){g=$.$get$aD()
a2=new Z.aW(a2.a|g.a)}if(a0){g=$.$get$az()
a2=new Z.aW(a2.a|g.a)}return new A.hr(z,r,q,p,o,n,m,l,k,y,x,w,v,u,t,y+x+w+v+u+t,i,i,a,a1,!0,!1,!1,h,a,f,e,d,c,b,a0,!1,!1,!1,s,j.charCodeAt(0)==0?j:j,a2)},
P:function(a,b){H.f(a,"$isb",[T.cS],"$asb")
if(b!=null)if(!C.a.aK(a,b)){b.a=a.length
C.a.h(a,b)}},
ai:function(a){var z,y,x,w,v
for(z=this.dx.a,z=new J.a9(z,z.length,0,[H.q(z,0)]);z.C();){y=z.d
y.toString
x=$.c6
if(x==null){x=new V.G(0,0,1)
$.c6=x}y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cC(x)}}},
e8:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.d1()
y=H.e(a.fr.j(0,z.af),"$isdV")
if(y==null){y=A.ho(z,a.a)
a.dm(y)}this.a=y
b.e=null
z=y}x=z.z
w=x.bk
z=b.e
if(!(z instanceof Z.cq)){b.e=null
z=null}if(z==null||!z.d.q(0,w)){z=x.r1
if(z)b.d.av()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.d
u.d.ca()
u.a.ca()
u=u.e
if(!(u==null))u.ay()}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.a.i0()
t=t.e
if(!(t==null))t.ay()}r=b.d.ds(new Z.eL(a.a),w)
r.aw($.$get$al()).e=this.a.Q.c
if(z)r.aw($.$get$aB()).e=this.a.cx.c
if(v)r.aw($.$get$aA()).e=this.a.ch.c
if(x.rx)r.aw($.$get$aC()).e=this.a.cy.c
if(u)r.aw($.$get$aD()).e=this.a.db.c
if(x.x1)r.aw($.$get$az()).e=this.a.dx.c
b.e=r}z=T.cS
q=H.c([],[z])
this.a.U(a)
if(x.fx){v=this.a
u=a.dx.gK()
v=v.dy
v.toString
v.ac(u.a6(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db.gK().t(0,a.dx.gK())
a.cx=u}v=v.fr
v.toString
v.ac(u.a6(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.giQ().t(0,a.dx.gK())
a.ch=u}v=v.fy
v.toString
v.ac(u.a6(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.k1
v.toString
v.ac(C.o.a6(u,!0))}if(x.y1){v=this.a
u=this.c
v=v.k2
v.toString
v.ac(C.o.a6(u,!0))}if(x.y2){v=this.a
u=this.d
v=v.k3
v.toString
v.ac(C.o.a6(u,!0))}if(x.ao>0){p=this.e.a.length
v=this.a.k4
C.b.I(v.a,v.d,p)
for(v=[P.r],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.k(t,o)
t=t[o]
u.toString
H.e(t,"$isa2")
u=u.r1
if(o>=u.length)return H.k(u,o)
u=u[o]
n=new Float32Array(H.bt(H.f(t.a6(0,!0),"$isb",v,"$asb")))
C.b.ed(u.a,u.d,!1,n)}}switch(x.a){case C.c:break
case C.f:v=this.a
u=this.f.f
v=v.r2
v.toString
t=u.a
s=u.b
u=u.c
C.b.p(v.a,v.d,t,s,u)
break
case C.e:this.P(q,this.f.d)
v=this.a
u=this.f.d
v.ae(v.rx,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
t=v.a
s=v.b
v=v.c
C.b.p(u.a,u.d,t,s,v)
break
case C.d:this.P(q,this.f.e)
v=this.a
u=this.f.e
v.a7(v.ry,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
t=v.a
s=v.b
v=v.c
C.b.p(u.a,u.d,t,s,v)
break}if(x.k2){switch(x.b){case C.c:break
case C.f:v=this.a
u=this.r.f
v=v.x2
v.toString
t=u.a
s=u.b
u=u.c
C.b.p(v.a,v.d,t,s,u)
break
case C.e:this.P(q,this.r.d)
v=this.a
u=this.r.d
v.ae(v.y1,v.ao,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
C.b.p(u.a,u.d,t,s,v)
break
case C.d:this.P(q,this.r.e)
v=this.a
u=this.r.e
v.a7(v.y2,v.ao,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
C.b.p(u.a,u.d,t,s,v)
break}switch(x.c){case C.c:break
case C.f:v=this.a
u=this.x.f
v=v.af
v.toString
t=u.a
s=u.b
u=u.c
C.b.p(v.a,v.d,t,s,u)
break
case C.e:this.P(q,this.x.d)
v=this.a
u=this.x.d
v.ae(v.bk,v.bl,u)
u=this.a
v=this.x.f
u=u.af
u.toString
t=v.a
s=v.b
v=v.c
C.b.p(u.a,u.d,t,s,v)
break
case C.d:this.P(q,this.x.e)
v=this.a
u=this.x.e
v.a7(v.dD,v.bl,u)
u=this.a
v=this.x.f
u=u.af
u.toString
t=v.a
s=v.b
v=v.c
C.b.p(u.a,u.d,t,s,v)
break}switch(x.d){case C.c:break
case C.f:v=this.a
u=this.y.f
v=v.bm
v.toString
t=u.a
s=u.b
u=u.c
C.b.p(v.a,v.d,t,s,u)
break
case C.e:this.P(q,this.y.d)
v=this.a
u=this.y.d
v.ae(v.dE,v.bn,u)
u=this.a
v=this.y.f
u=u.bm
u.toString
t=v.a
s=v.b
v=v.c
C.b.p(u.a,u.d,t,s,v)
break
case C.d:this.P(q,this.y.e)
v=this.a
u=this.y.e
v.a7(v.dF,v.bn,u)
u=this.a
v=this.y.f
u=u.bm
u.toString
t=v.a
s=v.b
v=v.c
C.b.p(u.a,u.d,t,s,v)
break}switch(x.e){case C.c:break
case C.f:v=this.a
u=this.z.f
v=v.bo
v.toString
t=u.a
s=u.b
u=u.c
C.b.p(v.a,v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bq
C.b.E(u.a,u.d,s)
break
case C.e:this.P(q,this.z.d)
v=this.a
u=this.z.d
v.ae(v.dG,v.bp,u)
u=this.a
v=this.z.f
u=u.bo
u.toString
t=v.a
s=v.b
v=v.c
C.b.p(u.a,u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bq
C.b.E(v.a,v.d,s)
break
case C.d:this.P(q,this.z.e)
v=this.a
u=this.z.e
v.a7(v.dH,v.bp,u)
u=this.a
v=this.z.f
u=u.bo
u.toString
t=v.a
s=v.b
v=v.c
C.b.p(u.a,u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bq
C.b.E(v.a,v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.dS
C.b.I(v.a,v.d,p)
m=a.db.gK()
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.u)(v),++k){j=v[k]
t=this.a.ci
if(l>=t.length)return H.k(t,l)
i=t[l]
t=m.cC(j.a)
s=t.a
h=t.b
g=t.c
g=t.u(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
s=g.a
t=g.b
g=g.c
C.b.p(h.a,h.d,s,t,g)
g=j.c
t=i.c
C.b.p(t.a,t.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.dT
C.b.I(v.a,v.d,p)
m=a.db.gK()
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.u)(v),++k){j=v[k]
t=this.a.cj
if(l>=t.length)return H.k(t,l)
i=t[l]
t=j.gb2(j)
s=i.b
h=t.gcF(t)
g=t.gcG(t)
t=t.gcH(t)
C.b.p(s.a,s.d,h,g,t)
t=m.ba(j.gb2(j))
g=i.c
C.b.p(g.a,g.d,t.a,t.b,t.c)
t=j.gan(j)
g=i.d
h=t.gbB()
s=t.gbc()
t=t.gbj()
C.b.p(g.a,g.d,h,s,t)
t=j.gc4()
s=i.e
C.b.E(s.a,s.d,t)
t=j.gc5()
s=i.f
C.b.E(s.a,s.d,t)
t=j.gc6()
s=i.r
C.b.E(s.a,s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.dU
C.b.I(v.a,v.d,p)
m=a.db.gK()
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.u)(v),++k){j=v[k]
t=this.a.ck
if(l>=t.length)return H.k(t,l)
i=t[l]
t=j.gb2(j)
s=i.b
h=t.gcF(t)
g=t.gcG(t)
t=t.gcH(t)
C.b.p(s.a,s.d,h,g,t)
t=j.gcf(j).jJ()
g=i.c
h=t.gaL(t)
s=t.gaM(t)
t=t.gaN()
C.b.p(g.a,g.d,h,s,t)
t=m.ba(j.gb2(j))
s=i.d
C.b.p(s.a,s.d,t.a,t.b,t.c)
t=j.gan(j)
s=i.e
h=t.gbB()
g=t.gbc()
t=t.gbj()
C.b.p(s.a,s.d,h,g,t)
t=j.gjI()
g=i.f
C.b.E(g.a,g.d,t)
t=j.gjH()
g=i.r
C.b.E(g.a,g.d,t)
t=j.gc4()
g=i.x
C.b.E(g.a,g.d,t)
t=j.gc5()
g=i.y
C.b.E(g.a,g.d,t)
t=j.gc6()
g=i.z
C.b.E(g.a,g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.dV
C.b.I(v.a,v.d,p)
m=a.db.gK()
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.u)(v),++k){j=v[k]
s=this.a.cl
if(l>=s.length)return H.k(s,l)
i=s[l]
s=j.gb6()
H.f(q,"$isb",t,"$asb")
if(!C.a.aK(q,s)){s.sbO(q.length)
C.a.h(q,s)}s=j.gcf(j)
h=i.d
g=s.gaL(s)
f=s.gaM(s)
s=s.gaN()
C.b.p(h.a,h.d,g,f,s)
s=j.gbD()
f=i.b
g=s.gaL(s)
h=s.gaM(s)
s=s.gaN()
C.b.p(f.a,f.d,g,h,s)
s=j.gb3(j)
h=i.c
g=s.gaL(s)
f=s.gaM(s)
s=s.gaN()
C.b.p(h.a,h.d,g,f,s)
s=m.cC(j.gcf(j))
f=s.a
g=s.b
h=s.c
h=s.u(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
f=h.a
s=h.b
h=h.c
C.b.p(g.a,g.d,f,s,h)
h=j.gan(j)
s=i.f
f=h.gbB()
g=h.gbc()
h=h.gbj()
C.b.p(s.a,s.d,f,g,h)
h=j.gb6()
s=h.gbz(h)
if(!s){s=i.x
C.b.I(s.a,s.d,1)}else{s=i.r
g=h.gbz(h)
f=s.a
s=s.d
if(!g)C.b.I(f,s,0)
else C.b.I(f,s,h.gis(h))
s=i.x
C.b.I(s.a,s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.dW
C.b.I(v.a,v.d,p)
m=a.db.gK()
for(v=this.dx.y,u=v.length,t=[P.r],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.u)(v),++k){j=v[k]
h=this.a.cm
if(l>=h.length)return H.k(h,l)
i=h[l]
h=j.gb6()
H.f(q,"$isb",s,"$asb")
if(!C.a.aK(q,h)){h.sbO(q.length)
C.a.h(q,h)}e=m.t(0,j.gK())
h=j.gK()
g=$.bi
if(g==null){g=new V.ab(0,0,0)
$.bi=g}g=h.ba(g)
h=i.b
f=g.gcF(g)
d=g.gcG(g)
g=g.gcH(g)
C.b.p(h.a,h.d,f,d,g)
h=$.bi
if(h==null){h=new V.ab(0,0,0)
$.bi=h}h=e.ba(h)
g=i.c
C.b.p(g.a,g.d,h.a,h.b,h.c)
h=e.cq()
g=i.d
n=new Float32Array(H.bt(H.f(new V.dW(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a6(0,!0),"$isb",t,"$asb")))
C.b.ec(g.a,g.d,!1,n)
g=j.gan(j)
h=i.e
f=g.gbB()
d=g.gbc()
g=g.gbj()
C.b.p(h.a,h.d,f,d,g)
g=j.gb6()
h=g.gbz(g)
if(!h){h=i.r
C.b.I(h.a,h.d,1)}else{h=i.f
f=g.gj9()
d=h.a
h=h.d
if(!(f>=6))C.b.I(d,h,0)
else C.b.I(d,h,g.gbO())
h=i.r
C.b.I(h.a,h.d,0)}h=j.gc4()
g=i.x
C.b.E(g.a,g.d,h)
h=j.gc5()
g=i.y
C.b.E(g.a,g.d,h)
h=j.gc6()
g=i.z
C.b.E(g.a,g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.dX
C.b.I(v.a,v.d,p)
m=a.db.gK()
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.u)(v),++k){j=v[k]
t=this.a.cn
if(l>=t.length)return H.k(t,l)
i=t[l]
t=j.gb6()
H.f(q,"$isb",z,"$asb")
if(!C.a.aK(q,t)){t.sbO(q.length)
C.a.h(q,t)}t=j.gb2(j)
s=i.b
h=t.gcF(t)
g=t.gcG(t)
t=t.gcH(t)
C.b.p(s.a,s.d,h,g,t)
t=j.gcf(j)
g=i.c
h=t.gaL(t)
s=t.gaM(t)
t=t.gaN()
C.b.p(g.a,g.d,h,s,t)
t=j.gbD()
s=i.d
h=t.gaL(t)
g=t.gaM(t)
t=t.gaN()
C.b.p(s.a,s.d,h,g,t)
t=j.gb3(j)
g=i.e
h=t.gaL(t)
s=t.gaM(t)
t=t.gaN()
C.b.p(g.a,g.d,h,s,t)
t=m.ba(j.gb2(j))
s=i.f
C.b.p(s.a,s.d,t.a,t.b,t.c)
t=j.gb6()
s=t.gbz(t)
if(!s){t=i.x
C.b.I(t.a,t.d,1)}else{s=i.r
h=t.gbz(t)
g=s.a
s=s.d
if(!h)C.b.I(g,s,0)
else C.b.I(g,s,t.gis(t))
t=i.x
C.b.I(t.a,t.d,0)}t=j.gan(j)
s=i.y
h=t.gbB()
g=t.gbc()
t=t.gbj()
C.b.p(s.a,s.d,h,g,t)
t=j.gjP()
g=i.z
C.b.E(g.a,g.d,t)
t=j.gjQ()
g=i.Q
C.b.E(g.a,g.d,t)
t=j.gc4()
g=i.ch
C.b.E(g.a,g.d,t)
t=j.gc5()
g=i.cx
C.b.E(g.a,g.d,t)
t=j.gc6()
g=i.cy
C.b.E(g.a,g.d,t);++l}}}switch(x.f){case C.c:break
case C.f:break
case C.e:this.P(q,this.Q.d)
z=this.a
v=this.Q.d
z.ae(z.dI,z.br,v)
break
case C.d:this.P(q,this.Q.e)
z=this.a
v=this.Q.e
z.a7(z.dJ,z.br,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db.gK().cq()
a.Q=v}z=z.id
z.toString
z.ac(v.a6(0,!0))}if(x.dy){this.P(q,this.ch)
z=this.a
v=this.ch
z.a7(z.dK,z.dL,v)
switch(x.r){case C.c:break
case C.f:z=this.a
v=this.cx.f
z=z.bs
z.toString
u=v.a
t=v.b
v=v.c
C.b.p(z.a,z.d,u,t,v)
break
case C.e:this.P(q,this.cx.d)
z=this.a
v=this.cx.d
z.ae(z.dM,z.bt,v)
v=this.a
z=this.cx.f
v=v.bs
v.toString
u=z.a
t=z.b
z=z.c
C.b.p(v.a,v.d,u,t,z)
break
case C.d:this.P(q,this.cx.e)
z=this.a
v=this.cx.e
z.a7(z.dN,z.bt,v)
v=this.a
z=this.cx.f
v=v.bs
v.toString
u=z.a
t=z.b
z=z.c
C.b.p(v.a,v.d,u,t,z)
break}switch(x.x){case C.c:break
case C.f:z=this.a
v=this.cy.f
z=z.bv
z.toString
u=v.a
t=v.b
v=v.c
C.b.p(z.a,z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bu
C.b.E(v.a,v.d,t)
break
case C.e:this.P(q,this.cy.d)
z=this.a
v=this.cy.d
z.ae(z.dO,z.bw,v)
v=this.a
z=this.cy.f
v=v.bv
v.toString
u=z.a
t=z.b
z=z.c
C.b.p(v.a,v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bu
C.b.E(z.a,z.d,t)
break
case C.d:this.P(q,this.cy.e)
z=this.a
v=this.cy.e
z.a7(z.dP,z.bw,v)
v=this.a
z=this.cy.f
v=v.bv
v.toString
u=z.a
t=z.b
z=z.c
C.b.p(v.a,v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bu
C.b.E(z.a,z.d,t)
break}}z=x.y
v=z!==C.c
if(v){switch(z){case C.c:break
case C.f:z=this.a
u=this.db.f
z=z.bx
C.b.E(z.a,z.d,u)
break
case C.e:this.P(q,this.db.d)
z=this.a
u=this.db.d
z.ae(z.dQ,z.by,u)
u=this.a
z=this.db.f
u=u.bx
C.b.E(u.a,u.d,z)
break
case C.d:this.P(q,this.db.e)
z=this.a
u=this.db.e
z.a7(z.dR,z.by,u)
u=this.a
z=this.db.f
u=u.bx
C.b.E(u.a,u.d,z)
break}z=a.a
C.b.cg(z,3042)
C.b.i_(z,770,771)}for(o=0;o<q.length;++o)q[o].U(a)
z=b.e
z.U(a)
z.a3(a)
z.az(a)
if(v)C.b.ii(a.a,3042)
for(z=a.a,o=0;o<q.length;++o){v=q[o]
if(v.c){v.c=!1
C.b.c3(z,33984+v.a)
C.b.au(z,34067,null)}}v=this.a
v.toString
C.b.cD(z,null)
v.x.dz()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.d1().af}},hp:{"^":"cF;0f,a,b,0c,0d,0e",
h9:function(a){var z,y
z=this.f
if(!$.m.$2(z,a)){y=this.f
this.f=a
z=new D.x(this.b,y,a,this,[P.r])
z.b=!0
this.a.S(z)}},
aH:function(){this.cQ()
this.h9(1)}},cF:{"^":"a;",
S:[function(a){this.a.S(H.e(a,"$isp"))},function(){return this.S(null)},"d9","$1","$0","gaG",0,2,0],
aH:["cQ",function(){}],
hb:function(a){},
hc:function(a){var z,y
z=this.e
if(z==null?a!=null:z!==a){if(z!=null)z.gl().M(0,this.gaG())
y=this.e
this.e=a
if(a!=null)a.gl().h(0,this.gaG())
z=new D.x(this.b+".textureCube",y,this.e,this,[T.cT])
z.b=!0
this.a.S(z)}},
sb7:function(a){var z=this.c
if(z!==C.d){if(z===C.c)this.aH()
this.c=C.d
this.hb(null)
z=this.a
z.a=null
z.S(null)}this.hc(a)}},hq:{"^":"cF;a,b,0c,0d,0e"},aR:{"^":"cF;0f,a,b,0c,0d,0e",
dg:function(a){var z,y
if(!J.I(this.f,a)){z=this.f
this.f=a
y=new D.x(this.b+".color",z,a,this,[V.Q])
y.b=!0
this.a.S(y)}},
aH:["bG",function(){this.cQ()
this.dg(new V.Q(1,1,1))}],
san:function(a,b){var z
if(this.c===C.c){this.c=C.f
this.aH()
z=this.a
z.a=null
z.S(null)}this.dg(b)}},hs:{"^":"aR;0ch,0f,a,b,0c,0d,0e",
ha:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.x(this.b+".refraction",y,a,this,[P.r])
z.b=!0
this.a.S(z)}},
aH:function(){this.bG()
this.ha(1)}},ht:{"^":"aR;0ch,0f,a,b,0c,0d,0e",
c0:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.x(this.b+".shininess",y,a,this,[P.r])
z.b=!0
this.a.S(z)}},
aH:function(){this.bG()
this.c0(100)}},ib:{"^":"bl;0a,0b,0c,0d,0e",
gl:function(){var z=this.e
if(z==null){z=D.A()
this.e=z}return z},
S:[function(a){var z
H.e(a,"$isp")
z=this.e
if(!(z==null))z.w(a)},function(){return this.S(null)},"d9","$1","$0","gaG",0,2,0],
e8:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.e(a.fr.j(0,"Skybox"),"$isec")
if(z==null){y=a.a
z=new A.ec(y,"Skybox")
z.cR(y,"Skybox")
z.dZ($.id,$.ic)
z.z=z.x.j(0,"posAttr")
z.Q=H.d(z.y.j(0,"fov"),"$isM")
z.ch=H.d(z.y.j(0,"ratio"),"$isM")
z.cx=H.d(z.y.j(0,"boxClr"),"$isB")
z.cy=H.d(z.y.j(0,"boxTxt"),"$isa4")
z.db=H.d(z.y.j(0,"viewMat"),"$isak")
a.dm(z)}this.a=z}if(b.e==null){y=b.d.ds(new Z.eL(a.a),$.$get$al())
y.aw($.$get$al()).e=this.a.z.c
b.e=y}y=this.c
if(y!=null){y.a=1
y.U(a)}y=a.d
x=a.c
w=this.a
w.U(a)
v=this.b
u=w.Q
C.b.E(u.a,u.d,v)
v=w.ch
C.b.E(v.a,v.d,y/x)
x=this.c
w.cy.cK(x)
x=this.d
y=w.cx
C.b.p(y.a,y.d,x.a,x.b,x.c)
x=a.db.gK().cq()
w=w.db
w.toString
w.ac(x.a6(0,!0))
y=b.e
if(y instanceof Z.cq){y.U(a)
y.a3(a)
y.az(a)}else b.e=null
y=this.a
y.toString
C.b.cD(a.a,null)
y.x.dz()
y=this.c
if(y!=null)y.az(a)}},bl:{"^":"a;"}}],["","",,T,{"^":"",cS:{"^":"cn;"},cT:{"^":"cS;0a,0b,0c,0d,0e",
gl:function(){var z=this.e
if(z==null){z=D.A()
this.e=z}return z},
U:function(a){var z
if(!this.c&&this.d>=6){this.c=!0
z=a.a
C.b.c3(z,33984+this.a)
C.b.au(z,34067,this.b)}},
az:function(a){var z
if(this.c){this.c=!1
z=a.a
C.b.c3(z,33984+this.a)
C.b.au(z,34067,null)}}},ip:{"^":"a;a,0b,0c,0d,0e",
e1:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
z=a+"/"+d+"posx"+b
y=a+"/"+d+"posy"+b
x=a+"/"+d+"posz"+b
w=a+"/"+d+"negx"+b
v=a+"/"+d+"negy"+b
u=a+"/"+d+"negz"+b
t=this.a
s=t.createTexture()
C.b.au(t,34067,s)
C.b.bC(t,34067,10242,10497)
C.b.bC(t,34067,10243,10497)
C.b.bC(t,34067,10241,9729)
C.b.bC(t,34067,10240,9729)
C.b.au(t,34067,null)
r=new T.cT()
r.a=0
r.b=s
r.c=!1
r.d=0
this.aF(r,s,z,34069,!1,!1)
this.aF(r,s,w,34070,!1,!1)
this.aF(r,s,y,34071,!1,!1)
this.aF(r,s,v,34072,!1,!1)
this.aF(r,s,x,34073,!1,!1)
this.aF(r,s,u,34074,!1,!1)
return r},
e0:function(a){return this.e1(a,".png",!1,"")},
iz:function(a,b){return this.e1(a,b,!1,"")},
aF:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.a1
W.S(z,"load",H.l(new T.iq(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
h6:function(a,b,c){var z,y,x,w
b=V.dk(b,2)
z=V.dk(a.width,2)
y=V.dk(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cs(null,null)
x.width=z
x.height=y
w=H.e(C.m.ej(x,"2d"),"$isct")
w.imageSmoothingEnabled=!1;(w&&C.r).ik(w,a,0,0,x.width,x.height)
return P.k0(C.r.fh(w,0,0,x.width,x.height))}}},iq:{"^":"t:21;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.h6(this.b,z.c,this.c)
x=z.a
C.b.au(x,34067,this.d)
C.b.iP(x,37440,this.e?1:0)
C.b.iY(x,this.f,0,6408,6408,5121,y)
C.b.au(x,34067,null)
x=this.r
if(++x.d>=6){x=x.e
if(!(x==null))x.il()}++z.e}}}],["","",,V,{"^":"",fo:{"^":"a;",
b_:function(a){return!0},
i:function(a){return"all"},
$isbe:1},be:{"^":"a;"},dU:{"^":"a;0a",
sar:function(a){this.a=H.f(a,"$isb",[V.be],"$asb")},
b_:["ex",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.u)(z),++x)if(z[x].b_(a))return!0
return!1}],
i:["cP",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.u)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbe:1},bh:{"^":"dU;0a",
b_:function(a){return!this.ex(a)},
i:function(a){return"!["+this.cP(0)+"]"}},i1:{"^":"a;0a",
sh8:function(a){this.a=H.f(a,"$isan",[P.w,P.U],"$asan")},
eB:function(a){var z,y
if(a.a.length<=0)throw H.i(P.n("May not create a SetMatcher with zero characters."))
z=new H.bb(0,0,[P.w,P.U])
for(y=new H.dR(a,a.gn(a),0,[H.a6(a,"P",0)]);y.C();)z.V(0,y.d,!0)
this.sh8(z)},
b_:function(a){return this.a.dv(a)},
i:function(a){var z=this.a
return P.cR(new H.hb(z,[H.q(z,0)]),0,null)},
$isbe:1,
m:{
a0:function(a){var z=new V.i1()
z.eB(a)
return z}}},cP:{"^":"a;a,b,0c,0d",
shs:function(a){this.c=H.f(a,"$isb",[V.cW],"$asb")},
A:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.cW(this.a.H(0,b))
w.sar(H.c([],[V.be]))
w.c=!1
C.a.h(this.c,w)
return w},
io:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.u)(z),++x){w=z[x]
if(w.b_(a))return w}return},
i:function(a){return this.b}},en:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.fj(this.b,"\n","\\n")
y=H.fj(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},cV:{"^":"a;a,b,0c",
sh2:function(a){var z=P.z
this.c=H.f(a,"$isan",[z,z],"$asan")},
i:function(a){return this.b}},iv:{"^":"a;0a,0b,0c",
shj:function(a){this.a=H.f(a,"$isan",[P.z,V.cP],"$asan")},
sho:function(a){this.b=H.f(a,"$isan",[P.z,V.cV],"$asan")},
H:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.cP(this,b)
z.shs(H.c([],[V.cW]))
z.d=null
this.a.V(0,b,z)}return z},
b8:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.cV(this,a)
y=P.z
z.sh2(new H.bb(0,0,[y,y]))
this.b.V(0,a,z)}return z},
j3:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.en])
y=this.c
x=[P.w]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.bd(a,t)
r=y.io(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cR(w,0,null)
throw H.i(P.n("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cR(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.en(o==null?p.b:o,q,t)}++t}}}},cW:{"^":"dU;b,0c,0a",
i:function(a){return this.b.b+": "+this.cP(0)}}}],["","",,X,{"^":"",bO:{"^":"a;",$isaq:1},fW:{"^":"c4;0a,0b,0c,0d,0e,0f,0r,0x",
gl:function(){var z=this.x
if(z==null){z=D.A()
this.x=z}return z},
ak:function(a){var z=this.x
if(!(z==null))z.w(a)},
se7:function(a,b){var z,y
if(!J.I(this.r,b)){z=this.r
this.r=b
y=new D.x("region",z,b,this,[V.cM])
y.b=!0
this.ak(y)}},
U:function(a){var z,y,x,w,v,u,t,s
z=a.a
C.b.hZ(z,36160,null)
C.b.cg(z,2884)
C.b.cg(z,2929)
C.b.ih(z,513)
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
v=w.a
if(typeof y!=="number")return H.y(y)
u=C.j.ah(v*y)
v=w.b
if(typeof x!=="number")return H.y(x)
t=C.j.ah(v*x)
v=C.j.ah(w.c*y)
a.c=v
w=C.j.ah(w.d*x)
a.d=w
C.b.j5(z,u,t,v,w)
C.b.i3(z,this.c)
if(this.b){w=this.a
C.b.i2(z,w.a,w.b,w.c,w.d)
s=16640}else s=256
C.b.i1(z,s)},
m:{
cx:function(a,b,c,d,e,f,g){var z,y
z=new X.fW()
y=new V.aG(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.hT()
z.r=y
return z}}},fZ:{"^":"a;0a,0b",
gl:function(){var z=this.b
if(z==null){z=D.A()
this.b=z}return z},
U:function(a){var z
a.cy.bA(V.aJ())
z=V.aJ()
a.db.bA(z)},
az:function(a){a.cy.ax()
a.db.ax()},
$isaq:1,
$isbO:1},hD:{"^":"a;0a,0b,0c,0d,0e,0f",
gl:function(){var z=this.f
if(z==null){z=D.A()
this.f=z}return z},
ak:[function(a){var z
H.e(a,"$isp")
z=this.f
if(!(z==null))z.w(a)},function(){return this.ak(null)},"j8","$1","$0","geR",0,2,0],
U:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=this.c
w=this.d
v=this.e
u=v-w
t=1/Math.tan(x*0.5)
s=V.ao(-t/(z/y),0,0,0,0,t,0,0,0,0,v/u,-v*w/u,0,0,1,0)
a.cy.bA(s)
z=$.e2
if(z==null){z=V.e5()
y=V.eG()
x=$.eD
if(x==null){x=new V.G(0,0,-1)
$.eD=x}x=V.dX(z,y,x)
$.e2=x
r=x}else r=z
z=this.b
if(z!=null){q=z.aP(a,this)
if(q!=null)r=q.t(0,r)}a.db.bA(r)},
az:function(a){a.cy.ax()
a.db.ax()},
$isaq:1,
$isbO:1,
m:{
cL:function(a,b,c,d,e){var z,y,x
z=new X.hD()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
if(null!=c){y=z.b
z.b=c
if(c!=null)c.gl().h(0,z.geR())
x=new D.x("mover",y,z.b,z,[U.Z])
x.b=!0
z.ak(x)}x=z.c
if(!$.m.$2(x,b)){y=z.c
z.c=b
x=new D.x("fov",y,b,z,[P.r])
x.b=!0
z.ak(x)}x=z.d
if(!$.m.$2(x,d)){y=z.d
z.d=d
x=new D.x("near",y,d,z,[P.r])
x.b=!0
z.ak(x)}x=z.e
if(!$.m.$2(x,a)){y=z.e
z.e=a
x=new D.x("far",y,a,z,[P.r])
x.b=!0
z.ak(x)}return z}}},c4:{"^":"a;"}}],["","",,V,{"^":"",
km:function(a){P.iu(C.B,new V.kn(a))},
kn:{"^":"t:34;a",
$1:function(a){H.e(a,"$isaU")
P.dl(C.j.eb(this.a.giq(),2)+" fps")}},
i7:{"^":"a;0a,0b",
eC:function(a,b){var z,y,x,w,v,u,t
z=document
y=z.body
x=z.createElement("div")
x.className="scrollTop";(y&&C.q).a_(y,x)
w=z.createElement("div")
w.className="scrollPage"
C.q.a_(y,w)
v=z.createElement("div")
v.className="pageCenter"
C.l.a_(w,v)
if(a.length!==0){z.title=a
u=z.createElement("div")
u.className="pageTitle"
u.textContent=a
C.l.a_(v,u)}t=z.createElement("div")
this.a=t
C.l.a_(v,t)
this.b=null
t=W.a1
W.S(z,"scroll",H.l(new V.ia(x),{func:1,ret:-1,args:[t]}),!1,t)},
dl:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.f(a,"$isb",[P.z],"$asb")
this.he()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.j3(C.a.iv(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.u)(x),++v){u=x[v]
switch(u.a){case"Bold":t=z.createElement("div")
t.className="boldPar"
t.textContent=u.b
C.l.a_(y,t)
break
case"Italic":t=z.createElement("div")
t.className="italicPar"
t.textContent=u.b
C.l.a_(y,t)
break
case"Code":t=z.createElement("div")
t.className="codePar"
t.textContent=u.b
C.l.a_(y,t)
break
case"Link":s=u.b
if(H.fi(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.k(r,1)
q.href=H.O(r[1])
q.textContent=H.O(r[0])
C.l.a_(y,q)}else{p=P.jI(C.M,s,C.w,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+p
q.textContent=s
C.l.a_(y,q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
C.l.a_(y,t)
break}}C.l.a_(this.a,y)},
he:function(){var z,y,x,w
if(this.b!=null)return
z=new V.iv()
y=P.z
z.shj(new H.bb(0,0,[y,V.cP]))
z.sho(new H.bb(0,0,[y,V.cV]))
z.c=null
z.c=z.H(0,"Start")
y=z.H(0,"Start").A(0,"Bold")
x=V.a0(new H.W("*"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Bold").A(0,"Bold")
x=new V.bh()
w=[V.be]
x.sar(H.c([],w))
C.a.h(y.a,x)
y=V.a0(new H.W("*"))
C.a.h(x.a,y)
y=z.H(0,"Bold").A(0,"BoldEnd")
x=V.a0(new H.W("*"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Start").A(0,"Italic")
x=V.a0(new H.W("_"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Italic").A(0,"Italic")
x=new V.bh()
x.sar(H.c([],w))
C.a.h(y.a,x)
y=V.a0(new H.W("_"))
C.a.h(x.a,y)
y=z.H(0,"Italic").A(0,"ItalicEnd")
x=V.a0(new H.W("_"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Start").A(0,"Code")
x=V.a0(new H.W("`"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Code").A(0,"Code")
x=new V.bh()
x.sar(H.c([],w))
C.a.h(y.a,x)
y=V.a0(new H.W("`"))
C.a.h(x.a,y)
y=z.H(0,"Code").A(0,"CodeEnd")
x=V.a0(new H.W("`"))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"Start").A(0,"LinkHead")
x=V.a0(new H.W("["))
C.a.h(y.a,x)
y.c=!0
y=z.H(0,"LinkHead").A(0,"LinkTail")
x=V.a0(new H.W("|"))
C.a.h(y.a,x)
x=z.H(0,"LinkHead").A(0,"LinkEnd")
y=V.a0(new H.W("]"))
C.a.h(x.a,y)
x.c=!0
x=z.H(0,"LinkHead").A(0,"LinkHead")
y=new V.bh()
y.sar(H.c([],w))
C.a.h(x.a,y)
x=V.a0(new H.W("|]"))
C.a.h(y.a,x)
x=z.H(0,"LinkTail").A(0,"LinkEnd")
y=V.a0(new H.W("]"))
C.a.h(x.a,y)
x.c=!0
x=z.H(0,"LinkTail").A(0,"LinkTail")
y=new V.bh()
y.sar(H.c([],w))
C.a.h(x.a,y)
x=V.a0(new H.W("|]"))
C.a.h(y.a,x)
C.a.h(z.H(0,"Start").A(0,"Other").a,new V.fo())
x=z.H(0,"Other").A(0,"Other")
y=new V.bh()
y.sar(H.c([],w))
C.a.h(x.a,y)
x=V.a0(new H.W("*_`["))
C.a.h(y.a,x)
x=z.H(0,"BoldEnd")
x.d=x.a.b8("Bold")
x=z.H(0,"ItalicEnd")
x.d=x.a.b8("Italic")
x=z.H(0,"CodeEnd")
x.d=x.a.b8("Code")
x=z.H(0,"LinkEnd")
x.d=x.a.b8("Link")
x=z.H(0,"Other")
x.d=x.a.b8("Other")
this.b=z},
m:{
i8:function(a,b){var z=new V.i7()
z.eC(a,!0)
return z}}},
ia:{"^":"t:21;a",
$1:function(a){P.el(C.n,new V.i9(this.a))}},
i9:{"^":"t:2;a",
$0:function(){var z,y,x
z=C.j.ah(document.documentElement.scrollTop)
y=this.a.style
x=H.h(-0.01*z)+"px"
y.top=x}}}],["","",,K,{"^":"",
fe:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=V.i8("Test 033",!0)
y=W.cs(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
C.l.a_(z.a,y)
x=[P.z]
z.dl(H.c(["Test of a sterioscopic scene."],x))
z.dl(H.c(["\xab[Back to Tests|../]"],x))
w=C.C.ek(document,"testCanvas")
if(w==null)H.o(P.n("Failed to find an element with the identifier, testCanvas."))
v=E.is(w,!0,!0,!0,!1)
u=F.cO()
F.br(u,null,null,1,1,1,0,0,1)
F.br(u,null,null,1,1,0,1,0,3)
F.br(u,null,null,1,1,0,0,1,2)
F.br(u,null,null,1,1,-1,0,0,0)
F.br(u,null,null,1,1,0,-1,0,0)
F.br(u,null,null,1,1,0,0,-1,3)
u.av()
t=E.bR(null,!0,null,"",u,null)
s=E.bR(null,!0,null,"",null,null)
for(r=-1.6;r<=1.7;r+=0.8)for(q=-1.6;q<=1.7;q+=0.8)for(p=-1.6;p<=1.7;p+=0.8){o=new V.a2(1,0,0,r,0,1,0,q,0,0,1,p,0,0,0,1).t(0,new V.a2(0.2,0,0,0,0,0.2,0,0,0,0,0.2,0,0,0,0,1))
n=E.bR(null,!0,null,"",null,null)
z=new U.cw()
z.sK(o)
n.se3(z)
z=n.y
x=H.q(z,0)
H.v(t,x)
m=[x]
if(z.aT(H.c([t],m))){l=z.a
k=l.length
C.a.h(l,t)
x=H.f(H.c([t],m),"$isj",[x],"$asj")
z=z.c
if(z!=null)z.$2(k,x)}z=s.y
x=H.q(z,0)
H.v(n,x)
m=[x]
if(z.aT(H.c([n],m))){l=z.a
k=l.length
C.a.h(l,n)
x=H.f(H.c([n],m),"$isj",[x],"$asj")
z=z.c
if(z!=null)z.$2(k,x)}}j=v.f.e0("../resources/diceColor")
i=new O.hn()
i.seX(O.bP(V.a2))
i.e.aQ(i.gfz(),i.gfA())
z=new O.aR(i,"emission")
z.c=C.c
z.f=new V.Q(0,0,0)
i.f=z
z=new O.aR(i,"ambient")
z.c=C.c
z.f=new V.Q(0,0,0)
i.r=z
z=new O.aR(i,"diffuse")
z.c=C.c
z.f=new V.Q(0,0,0)
i.x=z
z=new O.aR(i,"invDiffuse")
z.c=C.c
z.f=new V.Q(0,0,0)
i.y=z
z=new O.ht(i,"specular")
z.c=C.c
z.f=new V.Q(0,0,0)
z.ch=100
i.z=z
z=new O.hq(i,"bump")
z.c=C.c
i.Q=z
i.ch=null
z=new O.aR(i,"reflect")
z.c=C.c
z.f=new V.Q(0,0,0)
i.cx=z
z=new O.hs(i,"refract")
z.c=C.c
z.f=new V.Q(0,0,0)
z.ch=1
i.cy=z
z=new O.hp(i,"alpha")
z.c=C.c
z.f=1
i.db=z
z=new D.h8()
z.bH(D.R)
z.sf6(H.c([],[D.bC]))
z.sfZ(H.c([],[D.e3]))
z.shi(H.c([],[D.ed]))
z.sht(H.c([],[D.eh]))
z.shu(H.c([],[D.ei]))
z.shv(H.c([],[D.ej]))
z.Q=null
z.ch=null
z.cJ(z.gfv(),z.gfR(),z.gfT())
i.dx=z
x=z.Q
if(x==null){x=D.A()
z.Q=x
z=x}else z=x
z.h(0,i.gh4())
z=i.dx
x=z.ch
if(x==null){x=D.A()
z.ch=x
z=x}else z=x
z.h(0,i.gaG())
i.dy=null
z=i.dx
x=U.bA(V.dY(-1,-1,-1,null))
z.h(0,D.dF(new V.Q(1,0.9,0.9),x))
z=i.dx
x=U.bA(V.dY(1,1,2,null))
z.h(0,D.dF(new V.Q(0.2,0.2,0.35),x))
z=i.r
z.san(0,new V.Q(0.2,0.2,0.2))
i.r.sb7(j)
z=i.x
z.san(0,new V.Q(0.8,0.8,0.8))
i.x.sb7(j)
z=i.z
z.san(0,new V.Q(0.7,0.7,0.7))
z=i.z
if(z.c===C.c){z.c=C.f
z.bG()
z.c0(100)
x=z.a
x.a=null
x.S(null)}z.c0(10)
i.Q.sb7(v.f.e0("../resources/diceBumpMap"))
h=U.cz(null)
z=v.r
x=new U.iO()
m=U.cv()
m.scE(0,!0)
m.sct(6.283185307179586)
m.scv(0)
m.sa4(0,0)
m.scu(100)
m.sN(0)
m.sce(0.5)
x.b=m
l=x.gaC()
m.gl().h(0,l)
m=U.cv()
m.scE(0,!0)
m.sct(6.283185307179586)
m.scv(0)
m.sa4(0,0)
m.scu(100)
m.sN(0)
m.sce(0.5)
x.c=m
m.gl().h(0,l)
x.d=null
x.e=!1
x.f=!1
x.r=!1
x.x=2.5
x.y=2.5
x.z=2
x.Q=4
x.cx=!1
x.ch=!1
x.cy=0
x.db=0
x.dx=null
x.dy=0
x.fr=null
x.fx=null
g=new X.ap(!1,!1,!1)
f=x.d
x.d=g
m=[X.ap]
l=new D.x("modifiers",f,g,x,m)
l.b=!0
x.L(l)
l=x.f
if(l!==!1){x.f=!1
l=new D.x("invertX",l,!1,x,[P.U])
l.b=!0
x.L(l)}l=x.r
if(l!==!1){x.r=!1
l=new D.x("invertY",l,!1,x,[P.U])
l.b=!0
x.L(l)}x.aW(z)
h.h(0,x)
z=v.r
x=new U.iN()
l=U.cv()
l.scE(0,!0)
l.sct(6.283185307179586)
l.scv(0)
l.sa4(0,0)
l.scu(100)
l.sN(0)
l.sce(0.2)
x.b=l
l.gl().h(0,x.gaC())
x.c=null
x.d=!1
x.e=2.5
x.f=2
x.r=4
x.y=!1
x.x=!1
x.z=0
x.Q=null
x.ch=0
x.cx=null
x.cy=null
g=new X.ap(!0,!1,!1)
f=x.c
x.c=g
l=new D.x("modifiers",f,g,x,m)
l.b=!0
x.L(l)
x.aW(z)
h.h(0,x)
z=v.r
x=new U.iP()
x.c=0.01
x.d=0
x.e=0
g=new X.ap(!1,!1,!1)
x.b=g
m=new D.x("modifiers",null,g,x,m)
m.b=!0
x.L(m)
x.aW(z)
h.h(0,x)
h.h(0,U.bA(V.cI(0,0,6)))
e=X.cx(!0,!0,!1,null,2000,null,0)
if(e.b){e.b=!1
z=new D.x("clearColor",!0,!1,e,[P.U])
z.b=!0
e.ak(z)}z=v.f.iz("../resources/maskonaive",".jpg")
d=new M.fB()
d.saX(null)
d.sb4(0,null)
d.sb5(null)
x=E.bR(null,!0,null,"",null,null)
u=F.cO()
m=u.a
l=new V.G(-1,-1,1)
l=l.u(0,Math.sqrt(l.B(l)))
c=m.bi(new V.bj(1,2,4,6),new V.aG(1,0,0,1),new V.ab(-1,-1,0),new V.a_(0,1),l,null)
m=u.a
l=new V.G(1,-1,1)
l=l.u(0,Math.sqrt(l.B(l)))
b=m.bi(new V.bj(0,3,4,6),new V.aG(0,0,1,1),new V.ab(1,-1,0),new V.a_(1,1),l,null)
m=u.a
l=new V.G(1,1,1)
l=l.u(0,Math.sqrt(l.B(l)))
a=m.bi(new V.bj(0,2,5,6),new V.aG(0,1,0,1),new V.ab(1,1,0),new V.a_(1,0),l,null)
m=u.a
l=V.aw()
a0=new V.G(-1,1,1)
a0=a0.u(0,Math.sqrt(a0.B(a0)))
a1=m.bi(new V.bj(0,2,4,7),new V.aG(1,1,0,1),new V.ab(-1,1,0),l,a0,null)
u.d.hU(H.c([c,b,a,a1],[F.as]))
u.av()
x.scL(0,u)
d.d=x
d.e=null
x=new O.ib()
x.b=1.0471975511965976
x.d=new V.Q(1,1,1)
f=x.c
x.c=z
z.gl().h(0,x.gaG())
z=new D.x("boxTexture",f,x.c,x,[T.cT])
z.b=!0
x.S(z)
d.sb5(x)
a2=new M.fO()
a2.sf0(0,O.bP(E.ah))
a2.d.aQ(a2.gfC(),a2.gfD())
a2.e=null
a2.f=null
a2.r=null
a2.x=null
a2.saX(null)
a2.sb4(0,null)
a2.sb5(null)
a2.sb5(i)
a2.d.h(0,s)
z=M.aK
x=H.c([d,a2],[z])
m=new M.ih()
l=U.bA(null)
m.a=l
a0=U.bA(null)
m.b=a0
a3=U.Z
a4=[a3]
l=U.cz(H.c([null,l],a4))
m.c=l
a4=U.cz(H.c([null,a0],a4))
m.d=a4
m.e=X.cL(2000,1.0471975511965976,l,0.1,null)
m.f=X.cL(2000,1.0471975511965976,a4,0.1,null)
m.r=V.c1(0,0,0.5,1)
m.x=V.c1(0.5,0,0.5,1)
m.sfY(O.bP(z))
m.z.aQ(m.gfw(),m.gfU())
m.z.aV(0,x)
m.Q=0.1
m.ch=12
m.cx=null
m.cy=null
z=m.c.a
if(0>=z.length)return H.k(z,0)
if(!J.I(z[0],h)){z=m.c
l=z.a
if(0>=l.length)return H.k(l,0)
f=l[0]
z.V(0,0,h)
m.d.V(0,0,h)
a3=new D.x("cameraMover",f,h,m,[a3])
a3.b=!0
m.T(a3)}z=m.y
if(z!==e){if(z!=null)z.gl().M(0,m.gO())
f=m.y
m.y=e
e.gl().h(0,m.gO())
z=new D.x("target",f,m.y,m,[X.c4])
z.b=!0
m.T(z)}m.z.aV(0,x)
m.Q=0.1
m.ch=12
a5=Math.atan2(0.1,12)
z=m.a
x=m.Q
if(typeof x!=="number")return x.J()
z.sK(V.cI(-x,0,0).t(0,V.cH(a5)))
m.b.sK(V.cI(m.Q,0,0).t(0,V.cH(-a5)))
z=v.d
if(z!==m){if(z!=null)z.gl().M(0,v.gcS())
v.d=m
m.gl().h(0,v.gcS())
v.eF()}V.km(v)}},1]]
setupProgram(dart,0,0)
J.N=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dN.prototype
return J.dM.prototype}if(typeof a=="string")return J.cB.prototype
if(a==null)return J.dO.prototype
if(typeof a=="boolean")return J.h3.prototype
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof P.a)return a
return J.cf(a)}
J.ce=function(a){if(typeof a=="string")return J.cB.prototype
if(a==null)return a
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof P.a)return a
return J.cf(a)}
J.fa=function(a){if(a==null)return a
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof P.a)return a
return J.cf(a)}
J.k4=function(a){if(typeof a=="number")return J.bX.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.d5.prototype
return a}
J.bL=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof P.a)return a
return J.cf(a)}
J.I=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.N(a).q(a,b)}
J.fl=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.k4(a).aj(a,b)}
J.fm=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kd(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ce(a).j(a,b)}
J.fn=function(a,b,c,d){return J.bL(a).eT(a,b,c,d)}
J.dm=function(a,b){return J.bL(a).a_(a,b)}
J.cl=function(a,b,c){return J.ce(a).i5(a,b,c)}
J.dn=function(a,b){return J.fa(a).a8(a,b)}
J.aP=function(a){return J.N(a).gW(a)}
J.bM=function(a){return J.fa(a).gZ(a)}
J.bz=function(a){return J.ce(a).gn(a)}
J.a8=function(a){return J.N(a).i(a)}
I.di=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.q=W.fr.prototype
C.m=W.cr.prototype
C.r=W.ct.prototype
C.l=W.dG.prototype
C.C=W.fY.prototype
C.D=J.E.prototype
C.a=J.aQ.prototype
C.E=J.dM.prototype
C.h=J.dN.prototype
C.o=J.dO.prototype
C.j=J.bX.prototype
C.i=J.cB.prototype
C.L=J.bG.prototype
C.N=W.hA.prototype
C.v=J.hE.prototype
C.b=P.cN.prototype
C.p=J.d5.prototype
C.x=W.bp.prototype
C.y=W.j2.prototype
C.z=new P.hC()
C.A=new P.iR()
C.k=new P.jy()
C.c=new A.bQ(0,"ColorSourceType.None")
C.f=new A.bQ(1,"ColorSourceType.Solid")
C.e=new A.bQ(2,"ColorSourceType.Texture2D")
C.d=new A.bQ(3,"ColorSourceType.TextureCube")
C.n=new P.b7(0)
C.B=new P.b7(5e6)
C.F=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.G=function(hooks) {
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
C.t=function(hooks) { return hooks; }

C.H=function(getTagFallback) {
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
C.I=function() {
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
C.J=function(hooks) {
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
C.K=function(hooks) {
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
C.u=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.M=H.c(I.di([0,0,65498,45055,65535,34815,65534,18431]),[P.w])
C.w=new P.iQ(!1)
$.am=0
$.b5=null
$.dq=null
$.d9=!1
$.fc=null
$.f5=null
$.fh=null
$.cd=null
$.ch=null
$.dh=null
$.aZ=null
$.bu=null
$.bv=null
$.da=!1
$.H=C.k
$.dD=null
$.dC=null
$.dB=null
$.dA=null
$.m=V.hu()
$.dZ=null
$.e4=null
$.bi=null
$.e9=null
$.eC=null
$.eF=null
$.eE=null
$.c6=null
$.eD=null
$.id="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.ic="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.e2=null
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
I.$lazy(y,x,w)}})(["dz","$get$dz",function(){return H.fb("_$dart_dartClosure")},"cC","$get$cC",function(){return H.fb("_$dart_js")},"ep","$get$ep",function(){return H.ar(H.c5({
toString:function(){return"$receiver$"}}))},"eq","$get$eq",function(){return H.ar(H.c5({$method$:null,
toString:function(){return"$receiver$"}}))},"er","$get$er",function(){return H.ar(H.c5(null))},"es","$get$es",function(){return H.ar(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"ew","$get$ew",function(){return H.ar(H.c5(void 0))},"ex","$get$ex",function(){return H.ar(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eu","$get$eu",function(){return H.ar(H.ev(null))},"et","$get$et",function(){return H.ar(function(){try{null.$method$}catch(z){return z.message}}())},"ez","$get$ez",function(){return H.ar(H.ev(void 0))},"ey","$get$ey",function(){return H.ar(function(){try{(void 0).$method$}catch(z){return z.message}}())},"d7","$get$d7",function(){return P.j3()},"bw","$get$bw",function(){return[]},"eZ","$get$eZ",function(){return P.hS("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dy","$get$dy",function(){return{}},"eJ","$get$eJ",function(){return Z.ae(0)},"eH","$get$eH",function(){return Z.ae(511)},"al","$get$al",function(){return Z.ae(1)},"aB","$get$aB",function(){return Z.ae(2)},"aA","$get$aA",function(){return Z.ae(4)},"aC","$get$aC",function(){return Z.ae(8)},"aD","$get$aD",function(){return Z.ae(16)},"bn","$get$bn",function(){return Z.ae(32)},"bo","$get$bo",function(){return Z.ae(64)},"eI","$get$eI",function(){return Z.ae(96)},"aX","$get$aX",function(){return Z.ae(128)},"az","$get$az",function(){return Z.ae(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.p]},{func:1,ret:-1,args:[D.p]},{func:1,ret:P.D},{func:1,ret:-1},{func:1,ret:-1,args:[W.ai]},{func:1,ret:-1,args:[P.w,[P.j,E.ah]]},{func:1,ret:P.D,args:[F.Y]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.D,args:[D.p]},{func:1,ret:-1,args:[W.a1]},{func:1,ret:-1,args:[W.aV]},{func:1,ret:P.D,args:[,]},{func:1,ret:P.D,args:[,,]},{func:1,ret:P.z,args:[P.w]},{func:1,args:[,]},{func:1,ret:-1,args:[W.bc]},{func:1,ret:-1,args:[P.w,[P.j,D.R]]},{func:1,ret:P.r},{func:1,ret:-1,args:[P.w,[P.j,U.Z]]},{func:1,ret:-1,args:[P.w,[P.j,M.aK]]},{func:1,ret:-1,args:[P.w,[P.j,V.a2]]},{func:1,ret:P.D,args:[W.a1]},{func:1,ret:P.U,args:[W.K]},{func:1,ret:W.X,args:[W.K]},{func:1,ret:P.U,args:[P.r,P.r]},{func:1,ret:P.D,args:[,],opt:[,]},{func:1,ret:[P.aE,,],args:[,]},{func:1,ret:P.D,args:[{func:1,ret:-1}]},{func:1,ret:P.D,args:[P.a7]},{func:1,ret:P.D,args:[{func:1,ret:-1,args:[D.p]}]},{func:1,ret:P.D,args:[F.as,P.r,P.r]},{func:1,args:[P.z]},{func:1,args:[W.a1]},{func:1,args:[,P.z]},{func:1,ret:P.D,args:[P.aU]},{func:1,ret:-1,args:[W.bp]},{func:1,ret:P.U,args:[[P.j,D.R]]}]
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
if(x==y)H.kp(d||a)
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
Isolate.di=a.di
Isolate.df=a.df
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
if(typeof dartMainRunner==="function")dartMainRunner(K.fe,[])
else K.fe([])})})()
//# sourceMappingURL=test.dart.js.map
