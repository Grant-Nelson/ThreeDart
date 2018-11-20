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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.d1"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.d1"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.d1(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.d2=function(){}
var dart=[["","",,H,{"^":"",kv:{"^":"a;a"}}],["","",,J,{"^":"",
d6:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c8:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.d4==null){H.k4()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.i(P.es("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cu()]
if(v!=null)return v
v=H.k9(a)
if(v!=null)return v
if(typeof a=="function")return C.M
y=Object.getPrototypeOf(a)
if(y==null)return C.x
if(y===Object.prototype)return C.x
if(typeof w=="function"){Object.defineProperty(w,$.$get$cu(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
E:{"^":"a;",
t:function(a,b){return a===b},
gU:function(a){return H.bk(a)},
i:["ev",function(a){return"Instance of '"+H.aS(a)+"'"}],
"%":"DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo|WebGLRenderbuffer"},
fZ:{"^":"E;",
i:function(a){return String(a)},
gU:function(a){return a?519018:218159},
$isT:1},
dE:{"^":"E;",
t:function(a,b){return null==b},
i:function(a){return"null"},
gU:function(a){return 0},
$isC:1},
cv:{"^":"E;",
gU:function(a){return 0},
i:["ew",function(a){return String(a)}]},
hy:{"^":"cv;"},
cT:{"^":"cv;"},
bF:{"^":"cv;",
i:function(a){var z=a[$.$get$dm()]
if(z==null)return this.ew(a)
return"JavaScript function for "+H.e(J.a6(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscr:1},
aO:{"^":"E;$ti",
h:function(a,b){H.w(b,H.p(a,0))
if(!!a.fixed$length)H.o(P.a4("add"))
a.push(b)},
P:function(a,b){var z
if(!!a.fixed$length)H.o(P.a4("remove"))
for(z=0;z<a.length;++z)if(J.Q(a[z],b)){a.splice(z,1)
return!0}return!1},
bZ:function(a,b){var z,y
H.h(b,"$isk",[H.p(a,0)],"$ask")
if(!!a.fixed$length)H.o(P.a4("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.v)(b),++y)a.push(b[y])},
a8:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.p(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.i(P.b6(a))}},
A:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.a0(z,y,H.e(a[y]))
return z.join(b)},
is:function(a){return this.A(a,"")},
a7:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
eu:function(a,b,c){var z=a.length
if(b>z)throw H.i(P.a9(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.i(P.a9(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.p(a,0)])
return H.d(a.slice(b,c),[H.p(a,0)])},
gcl:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.i(H.fX())},
aI:function(a,b){var z
for(z=0;z<a.length;++z)if(J.Q(a[z],b))return!0
return!1},
i:function(a){return P.cs(a,"[","]")},
gN:function(a){return new J.ae(a,a.length,0,[H.p(a,0)])},
gU:function(a){return H.bk(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.o(P.a4("set length"))
if(b<0)throw H.i(P.a9(b,0,null,"newLength",null))
a.length=b},
a0:function(a,b,c){H.w(c,H.p(a,0))
if(!!a.immutable$list)H.o(P.a4("indexed set"))
if(b>=a.length||b<0)throw H.i(H.by(a,b))
a[b]=c},
$isk:1,
$isb:1,
m:{
fY:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.i(P.cf(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.i(P.a9(a,0,4294967295,"length",null))
return J.dB(new Array(a),b)},
dB:function(a,b){return J.bS(H.d(a,[b]))},
bS:function(a){H.cb(a)
a.fixed$length=Array
return a}}},
ku:{"^":"aO;$ti"},
ae:{"^":"a;a,b,c,0d,$ti",
scP:function(a){this.d=H.w(a,H.p(this,0))},
gJ:function(){return this.d},
w:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.i(H.v(z))
x=this.c
if(x>=y){this.scP(null)
return!1}this.scP(z[x]);++this.c
return!0},
$isaK:1},
bT:{"^":"E;",
iY:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.i(P.a4(""+a+".toInt()"))},
ci:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.i(P.a4(""+a+".floor()"))},
ak:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.i(P.a4(""+a+".round()"))},
e8:function(a,b){var z,y
if(b>20)throw H.i(P.a9(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gU:function(a){return a&0x1FFFFFFF},
p:function(a,b){if(typeof b!=="number")throw H.i(H.aF(b))
return a*b},
eo:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
ez:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dg(a,b)},
Z:function(a,b){return(a|0)===a?a/b|0:this.dg(a,b)},
dg:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.i(P.a4("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
bg:function(a,b){var z
if(a>0)z=this.hg(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
hg:function(a,b){return b>31?0:a>>>b},
al:function(a,b){if(typeof b!=="number")throw H.i(H.aF(b))
return a<b},
$ist:1,
$isa5:1},
dD:{"^":"bT;",$isu:1},
dC:{"^":"bT;"},
ct:{"^":"E;",
c7:function(a,b){if(b<0)throw H.i(H.by(a,b))
if(b>=a.length)H.o(H.by(a,b))
return a.charCodeAt(b)},
bd:function(a,b){if(b>=a.length)throw H.i(H.by(a,b))
return a.charCodeAt(b)},
D:function(a,b){H.N(b)
if(typeof b!=="string")throw H.i(P.cf(b,null,null))
return a+b},
cG:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.i(P.bX(b,null,null))
if(b>c)throw H.i(P.bX(b,null,null))
if(c>a.length)throw H.i(P.bX(c,null,null))
return a.substring(b,c)},
cF:function(a,b){return this.cG(a,b,null)},
p:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.i(C.B)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
iE:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.p(c,z)+a},
aa:function(a,b){return this.iE(a,b," ")},
i4:function(a,b,c){if(c>a.length)throw H.i(P.a9(c,0,a.length,null,null))
return H.f9(a,b,c)},
i:function(a){return a},
gU:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gn:function(a){return a.length},
$isdQ:1,
$isx:1}}],["","",,H,{"^":"",
fX:function(){return new P.i8("No element")},
V:{"^":"iF;a",
gn:function(a){return this.a.length},
j:function(a,b){return C.j.c7(this.a,b)},
$aset:function(){return[P.u]},
$asO:function(){return[P.u]},
$ask:function(){return[P.u]},
$asb:function(){return[P.u]}},
fG:{"^":"k;"},
dH:{"^":"a;a,b,c,0d,$ti",
saP:function(a){this.d=H.w(a,H.p(this,0))},
gJ:function(){return this.d},
w:function(){var z,y,x,w
z=this.a
y=J.c7(z)
x=y.gn(z)
if(this.b!==x)throw H.i(P.b6(z))
w=this.c
if(w>=x){this.saP(null)
return!1}this.saP(y.a7(z,w));++this.c
return!0},
$isaK:1},
hg:{"^":"k;a,b,$ti",
gN:function(a){return new H.hh(J.bK(this.a),this.b,this.$ti)},
gn:function(a){return J.bz(this.a)},
a7:function(a,b){return this.b.$1(J.da(this.a,b))},
$ask:function(a,b){return[b]}},
hh:{"^":"aK;0a,b,c,$ti",
saP:function(a){this.a=H.w(a,H.p(this,1))},
w:function(){var z=this.b
if(z.w()){this.saP(this.c.$1(z.gJ()))
return!0}this.saP(null)
return!1},
gJ:function(){return this.a},
$asaK:function(a,b){return[b]}},
iV:{"^":"k;a,b,$ti",
gN:function(a){return new H.iW(J.bK(this.a),this.b,this.$ti)}},
iW:{"^":"aK;a,b,$ti",
w:function(){var z,y
for(z=this.a,y=this.b;z.w();)if(y.$1(z.gJ()))return!0
return!1},
gJ:function(){return this.a.gJ()}},
bQ:{"^":"a;$ti"},
et:{"^":"a;$ti"},
iF:{"^":"bU+et;"}}],["","",,H,{"^":"",
b4:function(a){var z,y
z=H.N(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
k_:function(a){return init.types[H.U(a)]},
k7:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.M(a).$isav},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a6(a)
if(typeof z!=="string")throw H.i(H.aF(a))
return z},
bk:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aS:function(a){return H.hA(a)+H.d_(H.aM(a),0,null)},
hA:function(a){var z,y,x,w,v,u,t,s,r
z=J.M(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.E||!!z.$iscT){u=C.w(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.b4(w.length>1&&C.j.bd(w,0)===36?C.j.cF(w,1):w)},
dV:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
hJ:function(a){var z,y,x,w
z=H.d([],[P.u])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.v)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.i(H.aF(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.bg(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.i(H.aF(w))}return H.dV(z)},
dW:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.i(H.aF(x))
if(x<0)throw H.i(H.aF(x))
if(x>65535)return H.hJ(a)}return H.dV(a)},
hI:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.bg(z,10))>>>0,56320|z&1023)}throw H.i(P.a9(a,0,1114111,null,null))},
aR:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hH:function(a){var z=H.aR(a).getFullYear()+0
return z},
hF:function(a){var z=H.aR(a).getMonth()+1
return z},
hB:function(a){var z=H.aR(a).getDate()+0
return z},
hC:function(a){var z=H.aR(a).getHours()+0
return z},
hE:function(a){var z=H.aR(a).getMinutes()+0
return z},
hG:function(a){var z=H.aR(a).getSeconds()+0
return z},
hD:function(a){var z=H.aR(a).getMilliseconds()+0
return z},
y:function(a){throw H.i(H.aF(a))},
j:function(a,b){if(a==null)J.bz(a)
throw H.i(H.by(a,b))},
by:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aH(!0,b,"index",null)
z=H.U(J.bz(a))
if(!(b<0)){if(typeof z!=="number")return H.y(z)
y=b>=z}else y=!0
if(y)return P.ba(b,a,"index",null,z)
return P.bX(b,"index",null)},
jW:function(a,b,c){if(a>c)return new P.bW(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bW(a,c,!0,b,"end","Invalid value")
return new P.aH(!0,b,"end",null)},
aF:function(a){return new P.aH(!0,a,null,null)},
jR:function(a){if(typeof a!=="number")throw H.i(H.aF(a))
return a},
i:function(a){var z
if(a==null)a=new P.dP()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fb})
z.name=""}else z.toString=H.fb
return z},
fb:function(){return J.a6(this.dartException)},
o:function(a){throw H.i(a)},
v:function(a){throw H.i(P.b6(a))},
aG:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kk(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.bg(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cw(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dO(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eh()
u=$.$get$ei()
t=$.$get$ej()
s=$.$get$ek()
r=$.$get$eo()
q=$.$get$ep()
p=$.$get$em()
$.$get$el()
o=$.$get$er()
n=$.$get$eq()
m=v.a9(y)
if(m!=null)return z.$1(H.cw(H.N(y),m))
else{m=u.a9(y)
if(m!=null){m.method="call"
return z.$1(H.cw(H.N(y),m))}else{m=t.a9(y)
if(m==null){m=s.a9(y)
if(m==null){m=r.a9(y)
if(m==null){m=q.a9(y)
if(m==null){m=p.a9(y)
if(m==null){m=s.a9(y)
if(m==null){m=o.a9(y)
if(m==null){m=n.a9(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dO(H.N(y),m))}}return z.$1(new H.iE(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.e4()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aH(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.e4()
return a},
b2:function(a){var z
if(a==null)return new H.eN(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eN(a)},
jY:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.a0(0,a[y],a[x])}return b},
k6:function(a,b,c,d,e,f){H.f(a,"$iscr")
switch(H.U(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.i(P.n("Unsupported number of arguments for wrapped closure"))},
b_:function(a,b){var z
H.U(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.k6)
a.$identity=z
return z},
fr:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.M(d).$isb){z.$reflectionInfo=d
x=H.hM(z).r}else x=d
w=e?Object.create(new H.i9().constructor.prototype):Object.create(new H.ch(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.am
if(typeof u!=="number")return u.D()
$.am=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.di(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.k_,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.dd:H.ci
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.i("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.di(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w["call*"]=q
w.$R=z.$R
w.$D=z.$D
return v},
fo:function(a,b,c,d){var z=H.ci
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
di:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fq(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fo(y,!w,z,b)
if(y===0){w=$.am
if(typeof w!=="number")return w.D()
$.am=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b5
if(v==null){v=H.bL("self")
$.b5=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.am
if(typeof w!=="number")return w.D()
$.am=w+1
t+=w
w="return function("+t+"){return this."
v=$.b5
if(v==null){v=H.bL("self")
$.b5=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
fp:function(a,b,c,d){var z,y
z=H.ci
y=H.dd
switch(b?-1:a){case 0:throw H.i(H.hU("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fq:function(a,b){var z,y,x,w,v,u,t,s
z=$.b5
if(z==null){z=H.bL("self")
$.b5=z}y=$.dc
if(y==null){y=H.bL("receiver")
$.dc=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fp(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.am
if(typeof y!=="number")return y.D()
$.am=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.am
if(typeof y!=="number")return y.D()
$.am=y+1
return new Function(z+y+"}")()},
d1:function(a,b,c,d,e,f,g){return H.fr(a,b,H.U(c),d,!!e,!!f,g)},
N:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.i(H.aj(a,"String"))},
kS:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aj(a,"double"))},
kc:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aj(a,"num"))},
f_:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.i(H.aj(a,"bool"))},
U:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.i(H.aj(a,"int"))},
f7:function(a,b){throw H.i(H.aj(a,H.b4(H.N(b).substring(3))))},
ke:function(a,b){throw H.i(H.fn(a,H.b4(H.N(b).substring(3))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.M(a)[b])return a
H.f7(a,b)},
c:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.M(a)[b]
else z=!0
if(z)return a
H.ke(a,b)},
cb:function(a){if(a==null)return a
if(!!J.M(a).$isb)return a
throw H.i(H.aj(a,"List<dynamic>"))},
k8:function(a,b){var z
if(a==null)return a
z=J.M(a)
if(!!z.$isb)return a
if(z[b])return a
H.f7(a,b)},
f0:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.U(z)]
else return a.$S()}return},
bJ:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.f0(J.M(a))
if(z==null)return!1
return H.eR(z,null,b,null)},
l:function(a,b){var z,y
if(a==null)return a
if($.cX)return a
$.cX=!0
try{if(H.bJ(a,b))return a
z=H.cd(b)
y=H.aj(a,z)
throw H.i(y)}finally{$.cX=!1}},
d3:function(a,b){if(a!=null&&!H.d0(a,b))H.o(H.aj(a,H.cd(b)))
return a},
eV:function(a){var z,y
z=J.M(a)
if(!!z.$isr){y=H.f0(z)
if(y!=null)return H.cd(y)
return"Closure"}return H.aS(a)},
kj:function(a){throw H.i(new P.fy(H.N(a)))},
f2:function(a){return init.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
aM:function(a){if(a==null)return
return a.$ti},
kT:function(a,b,c){return H.b3(a["$as"+H.e(c)],H.aM(b))},
c9:function(a,b,c,d){var z
H.N(c)
H.U(d)
z=H.b3(a["$as"+H.e(c)],H.aM(b))
return z==null?null:z[d]},
ad:function(a,b,c){var z
H.N(b)
H.U(c)
z=H.b3(a["$as"+H.e(b)],H.aM(a))
return z==null?null:z[c]},
p:function(a,b){var z
H.U(b)
z=H.aM(a)
return z==null?null:z[b]},
cd:function(a){return H.aL(a,null)},
aL:function(a,b){var z,y
H.h(b,"$isb",[P.x],"$asb")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.b4(a[0].builtin$cls)+H.d_(a,1,b)
if(typeof a=="function")return H.b4(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.U(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.j(b,y)
return H.e(b[y])}if('func' in a)return H.jH(a,b)
if('futureOr' in a)return"FutureOr<"+H.aL("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jH:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.x]
H.h(b,"$isb",z,"$asb")
if("bounds" in a){y=a.bounds
if(b==null){b=H.d([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.j(b,r)
t=C.j.D(t,b[r])
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
for(z=H.jX(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.N(z[l])
n=n+m+H.aL(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
d_:function(a,b,c){var z,y,x,w,v,u
H.h(c,"$isb",[P.x],"$asb")
if(a==null)return""
z=new P.bH("")
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
H.N(b)
H.cb(c)
H.N(d)
if(a==null)return!1
z=H.aM(a)
y=J.M(a)
if(y[b]==null)return!1
return H.eY(H.b3(y[d],z),null,c,null)},
h:function(a,b,c,d){H.N(b)
H.cb(c)
H.N(d)
if(a==null)return a
if(H.bx(a,b,c,d))return a
throw H.i(H.aj(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.b4(b.substring(3))+H.d_(c,0,null),init.mangledGlobalNames)))},
eY:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ac(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ac(a[y],b,c[y],d))return!1
return!0},
kQ:function(a,b,c){return a.apply(b,H.b3(J.M(b)["$as"+H.e(c)],H.aM(b)))},
f4:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="C"||a===-1||a===-2||H.f4(z)}return!1},
d0:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="a"||b.builtin$cls==="C"||b===-1||b===-2||H.f4(b)
if(b==null||b===-1||b.builtin$cls==="a"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.d0(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bJ(a,b)}z=J.M(a).constructor
y=H.aM(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.ac(z,null,b,null)},
w:function(a,b){if(a!=null&&!H.d0(a,b))throw H.i(H.aj(a,H.cd(b)))
return a},
ac:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ac(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="C")return!0
if('func' in c)return H.eR(a,b,c,d)
if('func' in a)return c.builtin$cls==="cr"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ac("type" in a?a.type:null,b,x,d)
else if(H.ac(a,b,x,d))return!0
else{if(!('$is'+"b9" in y.prototype))return!1
w=y.prototype["$as"+"b9"]
v=H.b3(w,z?a.slice(1):null)
return H.ac(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eY(H.b3(r,z),b,u,d)},
eR:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ac(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ac(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ac(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ac(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kb(m,b,l,d)},
kb:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ac(c[w],d,a[w],b))return!1}return!0},
kR:function(a,b,c){Object.defineProperty(a,H.N(b),{value:c,enumerable:false,writable:true,configurable:true})},
k9:function(a){var z,y,x,w,v,u
z=H.N($.f3.$1(a))
y=$.c6[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ca[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.N($.eX.$2(a,z))
if(z!=null){y=$.c6[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ca[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cc(x)
$.c6[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.ca[z]=x
return x}if(v==="-"){u=H.cc(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.f6(a,x)
if(v==="*")throw H.i(P.es(z))
if(init.leafTags[z]===true){u=H.cc(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.f6(a,x)},
f6:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.d6(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cc:function(a){return J.d6(a,!1,null,!!a.$isav)},
ka:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cc(z)
else return J.d6(z,c,null,null)},
k4:function(){if(!0===$.d4)return
$.d4=!0
H.k5()},
k5:function(){var z,y,x,w,v,u,t,s
$.c6=Object.create(null)
$.ca=Object.create(null)
H.k0()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.f8.$1(v)
if(u!=null){t=H.ka(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
k0:function(){var z,y,x,w,v,u,t
z=C.J()
z=H.aZ(C.G,H.aZ(C.L,H.aZ(C.v,H.aZ(C.v,H.aZ(C.K,H.aZ(C.H,H.aZ(C.I(C.w),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.f3=new H.k1(v)
$.eX=new H.k2(u)
$.f8=new H.k3(t)},
aZ:function(a,b){return a(b)||b},
f9:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fa:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hL:{"^":"a;a,b,c,d,e,f,r,0x",m:{
hM:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bS(z)
y=z[0]
x=z[1]
return new H.hL(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
is:{"^":"a;a,b,c,d,e,f",
a9:function(a){var z,y,x
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
as:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.d([],[P.x])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.is(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c_:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
en:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hv:{"^":"R;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
m:{
dO:function(a,b){return new H.hv(a,b==null?null:b.method)}}},
h1:{"^":"R;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
m:{
cw:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.h1(a,y,z?null:b.receiver)}}},
iE:{"^":"R;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kk:{"^":"r:15;a",
$1:function(a){if(!!J.M(a).$isR)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eN:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isay:1},
r:{"^":"a;",
i:function(a){return"Closure '"+H.aS(this).trim()+"'"},
ged:function(){return this},
$iscr:1,
ged:function(){return this}},
e6:{"^":"r;"},
i9:{"^":"e6;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.b4(z)+"'"}},
ch:{"^":"e6;a,b,c,d",
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.ch))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gU:function(a){var z,y
z=this.c
if(z==null)y=H.bk(this.a)
else y=typeof z!=="object"?J.aN(z):H.bk(z)
return(y^H.bk(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.aS(z)+"'")},
m:{
ci:function(a){return a.a},
dd:function(a){return a.c},
bL:function(a){var z,y,x,w,v
z=new H.ch("self","target","receiver","name")
y=J.bS(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
it:{"^":"R;a",
i:function(a){return this.a},
m:{
aj:function(a,b){return new H.it("TypeError: "+H.e(P.bO(a))+": type '"+H.eV(a)+"' is not a subtype of type '"+b+"'")}}},
fm:{"^":"R;a",
i:function(a){return this.a},
m:{
fn:function(a,b){return new H.fm("CastError: "+H.e(P.bO(a))+": type '"+H.eV(a)+"' is not a subtype of type '"+b+"'")}}},
hT:{"^":"R;a",
i:function(a){return"RuntimeError: "+H.e(this.a)},
m:{
hU:function(a){return new H.hT(a)}}},
bb:{"^":"hd;a,0b,0c,0d,0e,0f,r,$ti",
gn:function(a){return this.a},
dt:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.cZ(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.cZ(y,a)}else return this.iq(a)},
iq:function(a){var z=this.d
if(z==null)return!1
return this.cj(this.bK(z,J.aN(a)&0x3ffffff),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.be(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.be(w,b)
x=y==null?null:y.b
return x}else return this.ir(b)},
ir:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bK(z,J.aN(a)&0x3ffffff)
x=this.cj(y,a)
if(x<0)return
return y[x].b},
a0:function(a,b,c){var z,y,x,w,v,u
H.w(b,H.p(this,0))
H.w(c,H.p(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bR()
this.b=z}this.cR(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bR()
this.c=y}this.cR(y,b,c)}else{x=this.d
if(x==null){x=this.bR()
this.d=x}w=J.aN(b)&0x3ffffff
v=this.bK(x,w)
if(v==null)this.bX(x,w,[this.bS(b,c)])
else{u=this.cj(v,b)
if(u>=0)v[u].b=c
else v.push(this.bS(b,c))}}},
a8:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.p(this,0),H.p(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.i(P.b6(this))
z=z.c}},
cR:function(a,b,c){var z
H.w(b,H.p(this,0))
H.w(c,H.p(this,1))
z=this.be(a,b)
if(z==null)this.bX(a,b,this.bS(b,c))
else z.b=c},
bS:function(a,b){var z,y
z=new H.h5(H.w(a,H.p(this,0)),H.w(b,H.p(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.r=this.r+1&67108863
return z},
cj:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.Q(a[y].a,b))return y
return-1},
i:function(a){return P.dJ(this)},
be:function(a,b){return a[b]},
bK:function(a,b){return a[b]},
bX:function(a,b,c){a[b]=c},
f3:function(a,b){delete a[b]},
cZ:function(a,b){return this.be(a,b)!=null},
bR:function(){var z=Object.create(null)
this.bX(z,"<non-identifier-key>",z)
this.f3(z,"<non-identifier-key>")
return z},
$isdG:1},
h5:{"^":"a;a,b,0c,0d"},
h6:{"^":"fG;a,$ti",
gn:function(a){return this.a.a},
gN:function(a){var z,y
z=this.a
y=new H.h7(z,z.r,this.$ti)
y.c=z.e
return y}},
h7:{"^":"a;a,b,0c,0d,$ti",
scQ:function(a){this.d=H.w(a,H.p(this,0))},
gJ:function(){return this.d},
w:function(){var z=this.a
if(this.b!==z.r)throw H.i(P.b6(z))
else{z=this.c
if(z==null){this.scQ(null)
return!1}else{this.scQ(z.a)
this.c=this.c.c
return!0}}},
$isaK:1},
k1:{"^":"r:15;a",
$1:function(a){return this.a(a)}},
k2:{"^":"r:33;a",
$2:function(a,b){return this.a(a,b)}},
k3:{"^":"r:31;a",
$1:function(a){return this.a(H.N(a))}},
h_:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isdQ:1,
m:{
h0:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.i(new P.fP("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
jX:function(a){return J.dB(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kd:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bt:function(a){return a},
bs:function(a,b,c){if(a>>>0!==a||a>=c)throw H.i(H.by(b,a))},
jG:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.i(H.jW(a,b,c))
return b},
ht:{"^":"E;",$iskG:1,"%":";ArrayBufferView;cA|eJ|eK|hs|eL|eM|bg"},
cA:{"^":"ht;",
gn:function(a){return a.length},
$isav:1,
$asav:I.d2},
hs:{"^":"eK;",
j:function(a,b){H.bs(b,a,a.length)
return a[b]},
$asbQ:function(){return[P.t]},
$asO:function(){return[P.t]},
$isk:1,
$ask:function(){return[P.t]},
$isb:1,
$asb:function(){return[P.t]},
"%":"Float32Array"},
bg:{"^":"eM;",
$asbQ:function(){return[P.u]},
$asO:function(){return[P.u]},
$isk:1,
$ask:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}},
kw:{"^":"bg;",
j:function(a,b){H.bs(b,a,a.length)
return a[b]},
"%":"Int16Array"},
kx:{"^":"bg;",
j:function(a,b){H.bs(b,a,a.length)
return a[b]},
"%":"Int32Array"},
ky:{"^":"bg;",
j:function(a,b){H.bs(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
kz:{"^":"bg;",
gn:function(a){return a.length},
j:function(a,b){H.bs(b,a,a.length)
return a[b]},
$iskH:1,
"%":"CanvasPixelArray|Uint8ClampedArray"},
kA:{"^":"bg;",
gn:function(a){return a.length},
j:function(a,b){H.bs(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
eJ:{"^":"cA+O;"},
eK:{"^":"eJ+bQ;"},
eL:{"^":"cA+O;"},
eM:{"^":"eL+bQ;"}}],["","",,P,{"^":"",
iY:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jO()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b_(new P.j_(z),1)).observe(y,{childList:true})
return new P.iZ(z,y,x)}else if(self.setImmediate!=null)return P.jP()
return P.jQ()},
kK:[function(a){self.scheduleImmediate(H.b_(new P.j0(H.l(a,{func:1,ret:-1})),0))},"$1","jO",4,0,7],
kL:[function(a){self.setImmediate(H.b_(new P.j1(H.l(a,{func:1,ret:-1})),0))},"$1","jP",4,0,7],
kM:[function(a){P.cH(C.n,H.l(a,{func:1,ret:-1}))},"$1","jQ",4,0,7],
cH:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.h.Z(a.a,1000)
return P.jw(z<0?0:z,b)},
ee:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.aT]})
z=C.h.Z(a.a,1000)
return P.jx(z<0?0:z,b)},
jK:function(a,b){if(H.bJ(a,{func:1,args:[P.a,P.ay]}))return H.l(a,{func:1,ret:null,args:[P.a,P.ay]})
if(H.bJ(a,{func:1,args:[P.a]}))return H.l(a,{func:1,ret:null,args:[P.a]})
throw H.i(P.cf(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jJ:function(){var z,y
for(;z=$.aY,z!=null;){$.bv=null
y=z.b
$.aY=y
if(y==null)$.bu=null
z.a.$0()}},
kP:[function(){$.cY=!0
try{P.jJ()}finally{$.bv=null
$.cY=!1
if($.aY!=null)$.$get$cV().$1(P.eZ())}},"$0","eZ",0,0,3],
eU:function(a){var z=new P.eD(H.l(a,{func:1,ret:-1}))
if($.aY==null){$.bu=z
$.aY=z
if(!$.cY)$.$get$cV().$1(P.eZ())}else{$.bu.b=z
$.bu=z}},
jN:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.aY
if(z==null){P.eU(a)
$.bv=$.bu
return}y=new P.eD(a)
x=$.bv
if(x==null){y.b=z
$.bv=y
$.aY=y}else{y.b=x.b
x.b=y
$.bv=y
if(y.b==null)$.bu=y}},
kf:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.G
if(C.k===y){P.c5(null,null,C.k,a)
return}y.toString
P.c5(null,null,y,H.l(y.c2(a),z))},
ed:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.G
if(y===C.k){y.toString
return P.cH(a,b)}return P.cH(a,H.l(y.c2(b),z))},
ip:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aT]}
H.l(b,z)
y=$.G
if(y===C.k){y.toString
return P.ee(a,b)}x=y.dm(b,P.aT)
$.G.toString
return P.ee(a,H.l(x,z))},
c4:function(a,b,c,d,e){var z={}
z.a=d
P.jN(new P.jL(z,e))},
eS:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.G
if(y===c)return d.$0()
$.G=c
z=y
try{y=d.$0()
return y}finally{$.G=z}},
eT:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.w(e,g)
y=$.G
if(y===c)return d.$1(e)
$.G=c
z=y
try{y=d.$1(e)
return y}finally{$.G=z}},
jM:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.w(e,h)
H.w(f,i)
y=$.G
if(y===c)return d.$2(e,f)
$.G=c
z=y
try{y=d.$2(e,f)
return y}finally{$.G=z}},
c5:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.k!==c
if(z)d=!(!z||!1)?c.c2(d):c.hX(d,-1)
P.eU(d)},
j_:{"^":"r:12;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iZ:{"^":"r:27;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
j0:{"^":"r:2;a",
$0:function(){this.a.$0()}},
j1:{"^":"r:2;a",
$0:function(){this.a.$0()}},
eO:{"^":"a;a,0b,c",
eO:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b_(new P.jz(this,b),0),a)
else throw H.i(P.a4("`setTimeout()` not found."))},
eP:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b_(new P.jy(this,a,Date.now(),b),0),a)
else throw H.i(P.a4("Periodic timer."))},
$isaT:1,
m:{
jw:function(a,b){var z=new P.eO(!0,0)
z.eO(a,b)
return z},
jx:function(a,b){var z=new P.eO(!1,0)
z.eP(a,b)
return z}}},
jz:{"^":"r:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
jy:{"^":"r:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.ez(w,x)}z.c=y
this.d.$1(z)}},
aX:{"^":"a;0a,b,c,d,e,$ti",
iy:function(a){if(this.c!==6)return!0
return this.b.b.ct(H.l(this.d,{func:1,ret:P.T,args:[P.a]}),a.a,P.T,P.a)},
ip:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.p(this,1)}
w=this.b.b
if(H.bJ(z,{func:1,args:[P.a,P.ay]}))return H.d3(w.iS(z,a.a,a.b,null,y,P.ay),x)
else return H.d3(w.ct(H.l(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aE:{"^":"a;df:a<,b,0h5:c<,$ti",
e7:function(a,b,c){var z,y,x,w
z=H.p(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.G
if(y!==C.k){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.jK(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aE(0,$.G,[c])
w=b==null?1:3
this.cS(new P.aX(x,w,a,b,[z,c]))
return x},
iX:function(a,b){return this.e7(a,null,b)},
cS:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isaX")
this.c=a}else{if(z===2){y=H.f(this.c,"$isaE")
z=y.a
if(z<4){y.cS(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.c5(null,null,z,H.l(new P.j8(this,a),{func:1,ret:-1}))}},
da:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isaX")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isaE")
y=u.a
if(y<4){u.da(a)
return}this.a=y
this.c=u.c}z.a=this.bf(a)
y=this.b
y.toString
P.c5(null,null,y,H.l(new P.jd(z,this),{func:1,ret:-1}))}},
bW:function(){var z=H.f(this.c,"$isaX")
this.c=null
return this.bf(z)},
bf:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cV:function(a){var z,y,x
z=H.p(this,0)
H.d3(a,{futureOr:1,type:z})
y=this.$ti
if(H.bx(a,"$isb9",y,"$asb9"))if(H.bx(a,"$isaE",y,null))P.eF(a,this)
else P.j9(a,this)
else{x=this.bW()
H.w(a,z)
this.a=4
this.c=a
P.bq(this,x)}},
cW:function(a,b){var z
H.f(b,"$isay")
z=this.bW()
this.a=8
this.c=new P.a7(a,b)
P.bq(this,z)},
$isb9:1,
m:{
j9:function(a,b){var z,y,x
b.a=1
try{a.e7(new P.ja(b),new P.jb(b),null)}catch(x){z=H.aG(x)
y=H.b2(x)
P.kf(new P.jc(b,z,y))}},
eF:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isaE")
if(z>=4){y=b.bW()
b.a=a.a
b.c=a.c
P.bq(b,y)}else{y=H.f(b.c,"$isaX")
b.a=2
b.c=a
a.da(y)}},
bq:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isa7")
y=y.b
u=v.a
t=v.b
y.toString
P.c4(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
if(p){H.f(r,"$isa7")
y=y.b
u=r.a
t=r.b
y.toString
P.c4(null,null,y,u,t)
return}o=$.G
if(o==null?q!=null:o!==q)$.G=q
else o=null
y=b.c
if(y===8)new P.jg(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jf(x,b,r).$0()}else if((y&2)!==0)new P.je(z,x,b).$0()
if(o!=null)$.G=o
y=x.b
if(!!J.M(y).$isb9){if(y.a>=4){n=H.f(t.c,"$isaX")
t.c=null
b=t.bf(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eF(y,t)
return}}m=b.b
n=H.f(m.c,"$isaX")
m.c=null
b=m.bf(n)
y=x.a
u=x.b
if(!y){H.w(u,H.p(m,0))
m.a=4
m.c=u}else{H.f(u,"$isa7")
m.a=8
m.c=u}z.a=m
y=m}}}},
j8:{"^":"r:2;a,b",
$0:function(){P.bq(this.a,this.b)}},
jd:{"^":"r:2;a,b",
$0:function(){P.bq(this.b,this.a.a)}},
ja:{"^":"r:12;a",
$1:function(a){var z=this.a
z.a=0
z.cV(a)}},
jb:{"^":"r:25;a",
$2:function(a,b){this.a.cW(a,H.f(b,"$isay"))},
$1:function(a){return this.$2(a,null)}},
jc:{"^":"r:2;a,b,c",
$0:function(){this.a.cW(this.b,this.c)}},
jg:{"^":"r:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.e5(H.l(w.d,{func:1}),null)}catch(v){y=H.aG(v)
x=H.b2(v)
if(this.d){w=H.f(this.a.a.c,"$isa7").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isa7")
else u.b=new P.a7(y,x)
u.a=!0
return}if(!!J.M(z).$isb9){if(z instanceof P.aE&&z.gdf()>=4){if(z.gdf()===8){w=this.b
w.b=H.f(z.gh5(),"$isa7")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.iX(new P.jh(t),null)
w.a=!1}}},
jh:{"^":"r:26;a",
$1:function(a){return this.a}},
jf:{"^":"r:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.p(x,0)
v=H.w(this.c,w)
u=H.p(x,1)
this.a.b=x.b.b.ct(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aG(t)
y=H.b2(t)
x=this.a
x.b=new P.a7(z,y)
x.a=!0}}},
je:{"^":"r:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isa7")
w=this.c
if(w.iy(z)&&w.e!=null){v=this.b
v.b=w.ip(z)
v.a=!1}}catch(u){y=H.aG(u)
x=H.b2(u)
w=H.f(this.a.a.c,"$isa7")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a7(y,x)
s.a=!0}}},
eD:{"^":"a;a,0b"},
ia:{"^":"a;$ti",
gn:function(a){var z,y,x,w
z={}
y=new P.aE(0,$.G,[P.u])
z.a=0
x=H.p(this,0)
w=H.l(new P.ic(z,this),{func:1,ret:-1,args:[x]})
H.l(new P.id(z,y),{func:1,ret:-1})
W.P(this.a,this.b,w,!1,x)
return y}},
ic:{"^":"r;a,b",
$1:function(a){H.w(a,H.p(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.C,args:[H.p(this.b,0)]}}},
id:{"^":"r:2;a,b",
$0:function(){this.b.cV(this.a.a)}},
cE:{"^":"a;$ti"},
ib:{"^":"a;"},
aT:{"^":"a;"},
a7:{"^":"a;a,b",
i:function(a){return H.e(this.a)},
$isR:1},
jE:{"^":"a;",$iskJ:1},
jL:{"^":"r:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dP()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.i(z)
x=H.i(z)
x.stack=y.i(0)
throw x}},
js:{"^":"jE;",
iT:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.k===$.G){a.$0()
return}P.eS(null,null,this,a,-1)}catch(x){z=H.aG(x)
y=H.b2(x)
P.c4(null,null,this,z,H.f(y,"$isay"))}},
iU:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.w(b,c)
try{if(C.k===$.G){a.$1(b)
return}P.eT(null,null,this,a,b,-1,c)}catch(x){z=H.aG(x)
y=H.b2(x)
P.c4(null,null,this,z,H.f(y,"$isay"))}},
hX:function(a,b){return new P.ju(this,H.l(a,{func:1,ret:b}),b)},
c2:function(a){return new P.jt(this,H.l(a,{func:1,ret:-1}))},
dm:function(a,b){return new P.jv(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
e5:function(a,b){H.l(a,{func:1,ret:b})
if($.G===C.k)return a.$0()
return P.eS(null,null,this,a,b)},
ct:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.w(b,d)
if($.G===C.k)return a.$1(b)
return P.eT(null,null,this,a,b,c,d)},
iS:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.w(b,e)
H.w(c,f)
if($.G===C.k)return a.$2(b,c)
return P.jM(null,null,this,a,b,c,d,e,f)}},
ju:{"^":"r;a,b,c",
$0:function(){return this.a.e5(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jt:{"^":"r:3;a,b",
$0:function(){return this.a.iT(this.b)}},
jv:{"^":"r;a,b,c",
$1:function(a){var z=this.c
return this.a.iU(this.b,H.w(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
h8:function(a,b,c){H.cb(a)
return H.h(H.jY(a,new H.bb(0,0,[b,c])),"$isdG",[b,c],"$asdG")},
h9:function(a,b,c,d){return new P.jm(0,0,[d])},
fW:function(a,b,c){var z,y
if(P.cZ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bw()
C.a.h(y,a)
try{P.jI(a,z)}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=P.e5(b,H.k8(z,"$isk"),", ")+c
return y.charCodeAt(0)==0?y:y},
cs:function(a,b,c){var z,y,x
if(P.cZ(a))return b+"..."+c
z=new P.bH(b)
y=$.$get$bw()
C.a.h(y,a)
try{x=z
x.a=P.e5(x.gaC(),a,", ")}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=z
y.a=y.gaC()+c
y=z.gaC()
return y.charCodeAt(0)==0?y:y},
cZ:function(a){var z,y
for(z=0;y=$.$get$bw(),z<y.length;++z)if(a===y[z])return!0
return!1},
jI:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gN(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.w())return
w=H.e(z.gJ())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.w()){if(x<=5)return
if(0>=b.length)return H.j(b,-1)
v=b.pop()
if(0>=b.length)return H.j(b,-1)
u=b.pop()}else{t=z.gJ();++x
if(!z.w()){if(x<=4){C.a.h(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.j(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gJ();++x
for(;z.w();t=s,s=r){r=z.gJ();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.j(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.e(t)
v=H.e(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.j(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dJ:function(a){var z,y,x
z={}
if(P.cZ(a))return"{...}"
y=new P.bH("")
try{C.a.h($.$get$bw(),a)
x=y
x.a=x.gaC()+"{"
z.a=!0
a.a8(0,new P.he(z,y))
z=y
z.a=z.gaC()+"}"}finally{z=$.$get$bw()
if(0>=z.length)return H.j(z,-1)
z.pop()}z=y.gaC()
return z.charCodeAt(0)==0?z:z},
jm:{"^":"ji;a,0b,0c,0d,0e,0f,r,$ti",
gN:function(a){return P.eH(this,this.r,H.p(this,0))},
gn:function(a){return this.a},
h:function(a,b){var z
H.w(b,H.p(this,0))
if(typeof b==="number"&&(b&0x3ffffff)===b){z=this.c
if(z==null){z=P.eI()
this.c=z}return this.f_(z,b)}else return this.eR(b)},
eR:function(a){var z,y,x
H.w(a,H.p(this,0))
z=this.d
if(z==null){z=P.eI()
this.d=z}y=this.cX(a)
x=z[y]
if(x==null)z[y]=[this.bG(a)]
else{if(this.d2(x,a)>=0)return!1
x.push(this.bG(a))}return!0},
P:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.h_(this.c,b)
else return this.fZ(b)},
fZ:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.fc(z,a)
x=this.d2(y,a)
if(x<0)return!1
this.dh(y.splice(x,1)[0])
return!0},
f_:function(a,b){H.w(b,H.p(this,0))
if(H.f(a[b],"$iscW")!=null)return!1
a[b]=this.bG(b)
return!0},
h_:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$iscW")
if(z==null)return!1
this.dh(z)
delete a[b]
return!0},
d4:function(){this.r=this.r+1&67108863},
bG:function(a){var z,y
z=new P.cW(H.w(a,H.p(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.d4()
return z},
dh:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.d4()},
cX:function(a){return J.aN(a)&0x3ffffff},
fc:function(a,b){return a[this.cX(b)]},
d2:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(a[y].a==b)return y
return-1},
m:{
eI:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cW:{"^":"a;a,0b,0c"},
jn:{"^":"a;a,b,0c,0d,$ti",
scU:function(a){this.d=H.w(a,H.p(this,0))},
gJ:function(){return this.d},
w:function(){var z=this.a
if(this.b!==z.r)throw H.i(P.b6(z))
else{z=this.c
if(z==null){this.scU(null)
return!1}else{this.scU(H.w(z.a,H.p(this,0)))
this.c=this.c.b
return!0}}},
$isaK:1,
m:{
eH:function(a,b,c){var z=new P.jn(a,b,[c])
z.c=a.e
return z}}},
ji:{"^":"hV;"},
bU:{"^":"jo;",$isk:1,$isb:1},
O:{"^":"a;$ti",
gN:function(a){return new H.dH(a,this.gn(a),0,[H.c9(this,a,"O",0)])},
a7:function(a,b){return this.j(a,b)},
j_:function(a,b){var z,y
z=H.d([],[H.c9(this,a,"O",0)])
C.a.sn(z,this.gn(a))
for(y=0;y<this.gn(a);++y)C.a.a0(z,y,this.j(a,y))
return z},
iZ:function(a){return this.j_(a,!0)},
i:function(a){return P.cs(a,"[","]")}},
hd:{"^":"hf;"},
he:{"^":"r:13;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
hf:{"^":"a;$ti",
gn:function(a){return this.a},
i:function(a){return P.dJ(this)},
$isan:1},
hX:{"^":"a;$ti",
i:function(a){return P.cs(this,"{","}")},
a7:function(a,b){var z,y,x
if(b<0)H.o(P.a9(b,0,null,"index",null))
for(z=P.eH(this,this.r,H.p(this,0)),y=0;z.w();){x=z.d
if(b===y)return x;++y}throw H.i(P.ba(b,this,"index",null,y))},
$isk:1,
$ise0:1},
hV:{"^":"hX;"},
jo:{"^":"a+O;"}}],["","",,P,{"^":"",cn:{"^":"a;$ti"},dk:{"^":"ib;$ti"},fI:{"^":"cn;",
$ascn:function(){return[P.x,[P.b,P.u]]}},iL:{"^":"fI;a"},iM:{"^":"dk;",
i6:function(a,b,c){var z,y,x,w
z=a.length
P.dX(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.jD(0,0,x)
if(w.fb(a,b,z)!==z)w.di(C.j.c7(a,z-1),0)
return new Uint8Array(x.subarray(0,H.jG(0,w.b,x.length)))},
i5:function(a){return this.i6(a,0,null)},
$asdk:function(){return[P.x,[P.b,P.u]]}},jD:{"^":"a;a,b,c",
di:function(a,b){var z,y,x,w,v
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
fb:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.j.c7(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.j.bd(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.di(w,C.j.bd(a,u)))x=u}else if(w<=2047){v=this.b
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
fK:function(a){if(a instanceof H.r)return a.i(0)
return"Instance of '"+H.aS(a)+"'"},
ha:function(a,b,c,d){var z,y
H.w(b,d)
z=J.fY(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.a0(z,y,b)
return H.h(z,"$isb",[d],"$asb")},
hb:function(a,b,c){var z,y,x
z=[c]
y=H.d([],z)
for(x=a.gN(a);x.w();)C.a.h(y,H.w(x.gJ(),c))
if(b)return y
return H.h(J.bS(y),"$isb",z,"$asb")},
cF:function(a,b,c){var z,y
z=P.u
H.h(a,"$isk",[z],"$ask")
if(a.constructor===Array){H.h(a,"$isaO",[z],"$asaO")
y=a.length
c=P.dX(b,c,y,null,null,null)
return H.dW(b>0||c<y?C.a.eu(a,b,c):a)}return P.ie(a,b,c)},
ie:function(a,b,c){var z,y,x
H.h(a,"$isk",[P.u],"$ask")
z=J.bK(a)
for(y=0;y<b;++y)if(!z.w())throw H.i(P.a9(b,0,y,null,null))
x=[]
for(;z.w();)x.push(z.gJ())
return H.dW(x)},
hN:function(a,b,c){return new H.h_(a,H.h0(a,!1,!0,!1))},
jC:function(a,b,c,d){var z,y,x,w,v,u
H.h(a,"$isb",[P.u],"$asb")
if(c===C.y){z=$.$get$eQ().b
z=z.test(b)}else z=!1
if(z)return b
y=C.C.i5(H.w(b,H.ad(c,"cn",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.j(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.hI(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
bO:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a6(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fK(a)},
n:function(a){return new P.eE(a)},
d8:function(a){H.kd(a)},
T:{"^":"a;"},
"+bool":0,
af:{"^":"a;a,b",
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.af))return!1
return this.a===b.a&&!0},
gU:function(a){var z=this.a
return(z^C.h.bg(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.fz(H.hH(this))
y=P.bA(H.hF(this))
x=P.bA(H.hB(this))
w=P.bA(H.hC(this))
v=P.bA(H.hE(this))
u=P.bA(H.hG(this))
t=P.fA(H.hD(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
m:{
fz:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fA:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bA:function(a){if(a>=10)return""+a
return"0"+a}}},
t:{"^":"a5;"},
"+double":0,
b7:{"^":"a;a",
al:function(a,b){return C.h.al(this.a,H.f(b,"$isb7").a)},
t:function(a,b){if(b==null)return!1
if(!(b instanceof P.b7))return!1
return this.a===b.a},
gU:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fF()
y=this.a
if(y<0)return"-"+new P.b7(0-y).i(0)
x=z.$1(C.h.Z(y,6e7)%60)
w=z.$1(C.h.Z(y,1e6)%60)
v=new P.fE().$1(y%1e6)
return""+C.h.Z(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
m:{
dv:function(a,b,c,d,e,f){return new P.b7(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fE:{"^":"r:14;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fF:{"^":"r:14;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
R:{"^":"a;"},
dP:{"^":"R;",
i:function(a){return"Throw of null."}},
aH:{"^":"R;a,b,c,d",
gbI:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbH:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.e(z)
w=this.gbI()+y+x
if(!this.a)return w
v=this.gbH()
u=P.bO(this.b)
return w+v+": "+H.e(u)},
m:{
fi:function(a){return new P.aH(!1,null,null,a)},
cf:function(a,b,c){return new P.aH(!0,a,b,c)}}},
bW:{"^":"aH;e,f,a,b,c,d",
gbI:function(){return"RangeError"},
gbH:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
m:{
bX:function(a,b,c){return new P.bW(null,null,!0,a,b,"Value not in range")},
a9:function(a,b,c,d,e){return new P.bW(b,c,!0,a,d,"Invalid value")},
dX:function(a,b,c,d,e,f){if(0>a||a>c)throw H.i(P.a9(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.i(P.a9(b,a,c,"end",f))
return b}return c}}},
fV:{"^":"aH;e,n:f>,a,b,c,d",
gbI:function(){return"RangeError"},
gbH:function(){if(J.fc(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.e(z)},
m:{
ba:function(a,b,c,d,e){var z=H.U(e!=null?e:J.bz(b))
return new P.fV(b,z,!0,a,c,"Index out of range")}}},
iG:{"^":"R;a",
i:function(a){return"Unsupported operation: "+this.a},
m:{
a4:function(a){return new P.iG(a)}}},
iD:{"^":"R;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
m:{
es:function(a){return new P.iD(a)}}},
i8:{"^":"R;a",
i:function(a){return"Bad state: "+this.a}},
fu:{"^":"R;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.bO(z))+"."},
m:{
b6:function(a){return new P.fu(a)}}},
hw:{"^":"a;",
i:function(a){return"Out of Memory"},
$isR:1},
e4:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isR:1},
fy:{"^":"R;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eE:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
fP:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.j.cG(x,0,75)+"..."
return y+"\n"+x}},
u:{"^":"a5;"},
"+int":0,
k:{"^":"a;$ti",
gn:function(a){var z,y
z=this.gN(this)
for(y=0;z.w();)++y
return y},
a7:function(a,b){var z,y,x
if(b<0)H.o(P.a9(b,0,null,"index",null))
for(z=this.gN(this),y=0;z.w();){x=z.gJ()
if(b===y)return x;++y}throw H.i(P.ba(b,this,"index",null,y))},
i:function(a){return P.fW(this,"(",")")}},
aK:{"^":"a;$ti"},
b:{"^":"a;$ti",$isk:1},
"+List":0,
C:{"^":"a;",
gU:function(a){return P.a.prototype.gU.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a5:{"^":"a;"},
"+num":0,
a:{"^":";",
t:function(a,b){return this===b},
gU:function(a){return H.bk(this)},
i:function(a){return"Instance of '"+H.aS(this)+"'"},
toString:function(){return this.i(this)}},
ay:{"^":"a;"},
x:{"^":"a;",$isdQ:1},
"+String":0,
bH:{"^":"a;aC:a<",
gn:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
m:{
e5:function(a,b,c){var z=J.bK(b)
if(!z.w())return a
if(c.length===0){do a+=H.e(z.gJ())
while(z.w())}else{a+=H.e(z.gJ())
for(;z.w();)a=a+c+H.e(z.gJ())}return a}}}}],["","",,W,{"^":"",
cl:function(a,b){var z=document.createElement("canvas")
return z},
fH:function(a){H.f(a,"$isbP")
return"wheel"},
dA:function(a,b,c){var z=document.createElement("img")
z.src=b
return z},
c1:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eG:function(a,b,c,d){var z,y
z=W.c1(W.c1(W.c1(W.c1(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eW:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.G
if(z===C.k)return a
return z.dm(a,b)},
au:{"^":"W;","%":"HTMLBRElement|HTMLBaseElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
km:{"^":"au;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kn:{"^":"au;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
fk:{"^":"au;","%":"HTMLBodyElement"},
ck:{"^":"au;",
bC:function(a,b,c){if(c!=null)return this.fd(a,b,P.jS(c,null))
return this.fe(a,b)},
ei:function(a,b){return this.bC(a,b,null)},
fd:function(a,b,c){return a.getContext(b,c)},
fe:function(a,b){return a.getContext(b)},
$isck:1,
$isdg:1,
"%":"HTMLCanvasElement"},
cm:{"^":"E;",
ff:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
ij:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$iscm:1,
"%":"CanvasRenderingContext2D"},
kq:{"^":"H;0n:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fw:{"^":"j4;0n:length=",
ek:function(a,b){var z=this.fg(a,this.cT(a,b))
return z==null?"":z},
cT:function(a,b){var z,y
z=$.$get$dl()
y=z[b]
if(typeof y==="string")return y
y=this.hj(a,b)
z[b]=y
return y},
hj:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fB()+b
if(z in a)return z
return b},
h7:function(a,b,c,d){a.setProperty(b,c,d)},
fg:function(a,b){return a.getPropertyValue(b)},
gc3:function(a){return a.bottom},
gaY:function(a){return a.height},
gaJ:function(a){return a.left},
gb3:function(a){return a.right},
gb8:function(a){return a.top},
gbb:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fx:{"^":"a;",
gaJ:function(a){return this.ek(a,"left")}},
du:{"^":"au;",$isdu:1,"%":"HTMLDivElement"},
fC:{"^":"H;",
cB:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
ks:{"^":"E;",
i:function(a){return String(a)},
"%":"DOMException"},
fD:{"^":"E;",
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
t:function(a,b){var z
if(b==null)return!1
if(!H.bx(b,"$isax",[P.a5],"$asax"))return!1
z=J.b1(b)
return a.left===z.gaJ(b)&&a.top===z.gb8(b)&&a.width===z.gbb(b)&&a.height===z.gaY(b)},
gU:function(a){return W.eG(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gc3:function(a){return a.bottom},
gaY:function(a){return a.height},
gaJ:function(a){return a.left},
gb3:function(a){return a.right},
gb8:function(a){return a.top},
gbb:function(a){return a.width},
$isax:1,
$asax:function(){return[P.a5]},
"%":";DOMRectReadOnly"},
j3:{"^":"bU;a,b",
gn:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.j(z,b)
return H.f(z[b],"$isW")},
h:function(a,b){J.d9(this.a,b)
return b},
gN:function(a){var z=this.iZ(this)
return new J.ae(z,z.length,0,[H.p(z,0)])},
$asO:function(){return[W.W]},
$ask:function(){return[W.W]},
$asb:function(){return[W.W]}},
W:{"^":"H;",
gdr:function(a){return new W.j3(a,a.children)},
gds:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.al()
if(x<0)x=-x*0
if(typeof w!=="number")return w.al()
if(w<0)w=-w*0
return new P.ax(z,y,x,w,[P.a5])},
i:function(a){return a.localName},
$isW:1,
"%":";Element"},
X:{"^":"E;",$isX:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
bP:{"^":"E;",
eS:function(a,b,c,d){return a.addEventListener(b,H.b_(H.l(c,{func:1,args:[W.X]}),1),!1)},
$isbP:1,
"%":";EventTarget"},
kt:{"^":"au;0n:length=","%":"HTMLFormElement"},
fS:{"^":"jk;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.ba(b,a,null,null,null))
return a[b]},
a7:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isav:1,
$asav:function(){return[W.H]},
$asO:function(){return[W.H]},
$isk:1,
$ask:function(){return[W.H]},
$isb:1,
$asb:function(){return[W.H]},
$isfS:1,
$asaJ:function(){return[W.H]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
fT:{"^":"fC;","%":"HTMLDocument"},
bR:{"^":"E;0du:data=",$isbR:1,"%":"ImageData"},
dz:{"^":"au;",$isdz:1,$isdg:1,"%":"HTMLImageElement"},
bc:{"^":"cK;",$isbc:1,"%":"KeyboardEvent"},
hq:{"^":"au;","%":"HTMLAudioElement;HTMLMediaElement"},
ai:{"^":"cK;",$isai:1,"%":"PointerEvent;DragEvent|MouseEvent"},
j2:{"^":"bU;a",
gN:function(a){var z=this.a.childNodes
return new W.dx(z,z.length,-1,[H.c9(C.O,z,"aJ",0)])},
gn:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.j(z,b)
return z[b]},
$asO:function(){return[W.H]},
$ask:function(){return[W.H]},
$asb:function(){return[W.H]}},
H:{"^":"bP;",
iO:function(a,b){var z,y
try{z=a.parentNode
J.ff(z,b,a)}catch(y){H.aG(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.ev(a):z},
X:function(a,b){return a.appendChild(b)},
h1:function(a,b,c){return a.replaceChild(b,c)},
$isH:1,
"%":"Attr|DocumentFragment|DocumentType|ShadowRoot;Node"},
hu:{"^":"jq;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.ba(b,a,null,null,null))
return a[b]},
a7:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isav:1,
$asav:function(){return[W.H]},
$asO:function(){return[W.H]},
$isk:1,
$ask:function(){return[W.H]},
$isb:1,
$asb:function(){return[W.H]},
$asaJ:function(){return[W.H]},
"%":"NodeList|RadioNodeList"},
kB:{"^":"au;0n:length=","%":"HTMLSelectElement"},
bm:{"^":"E;",$isbm:1,"%":"Touch"},
aU:{"^":"cK;",$isaU:1,"%":"TouchEvent"},
kF:{"^":"jB;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.ba(b,a,null,null,null))
return a[b]},
a7:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isav:1,
$asav:function(){return[W.bm]},
$asO:function(){return[W.bm]},
$isk:1,
$ask:function(){return[W.bm]},
$isb:1,
$asb:function(){return[W.bm]},
$asaJ:function(){return[W.bm]},
"%":"TouchList"},
cK:{"^":"X;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
kI:{"^":"hq;",$isdg:1,"%":"HTMLVideoElement"},
bp:{"^":"ai;",
gie:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.i(P.a4("deltaY is not supported"))},
gic:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.i(P.a4("deltaX is not supported"))},
$isbp:1,
"%":"WheelEvent"},
iX:{"^":"bP;",
h2:function(a,b){return a.requestAnimationFrame(H.b_(H.l(b,{func:1,ret:-1,args:[P.a5]}),1))},
f5:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
kN:{"^":"fD;",
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
t:function(a,b){var z
if(b==null)return!1
if(!H.bx(b,"$isax",[P.a5],"$asax"))return!1
z=J.b1(b)
return a.left===z.gaJ(b)&&a.top===z.gb8(b)&&a.width===z.gbb(b)&&a.height===z.gaY(b)},
gU:function(a){return W.eG(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gaY:function(a){return a.height},
gbb:function(a){return a.width},
"%":"ClientRect|DOMRect"},
j5:{"^":"ia;a,b,c,$ti"},
kO:{"^":"j5;a,b,c,$ti"},
j6:{"^":"cE;a,b,c,d,e,$ti",m:{
P:function(a,b,c,d,e){var z,y
z=W.eW(new W.j7(c),W.X)
y=z!=null
if(y&&!0){H.l(z,{func:1,args:[W.X]})
if(y)J.fe(a,b,z,!1)}return new W.j6(0,a,b,z,!1,[e])}}},
j7:{"^":"r:32;a",
$1:function(a){return this.a.$1(H.f(a,"$isX"))}},
aJ:{"^":"a;$ti",
gN:function(a){return new W.dx(a,this.gn(a),-1,[H.c9(this,a,"aJ",0)])}},
dx:{"^":"a;a,b,c,0d,$ti",
sd1:function(a){this.d=H.w(a,H.p(this,0))},
w:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sd1(J.fd(this.a,z))
this.c=z
return!0}this.sd1(null)
this.c=y
return!1},
gJ:function(){return this.d},
$isaK:1},
j4:{"^":"E+fx;"},
jj:{"^":"E+O;"},
jk:{"^":"jj+aJ;"},
jp:{"^":"E+O;"},
jq:{"^":"jp+aJ;"},
jA:{"^":"E+O;"},
jB:{"^":"jA+aJ;"}}],["","",,P,{"^":"",
jV:function(a){var z,y
z=J.M(a)
if(!!z.$isbR){y=z.gdu(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.eP(a.data,a.height,a.width)},
jU:function(a){if(a instanceof P.eP)return{data:a.a,height:a.b,width:a.c}
return a},
jS:function(a,b){var z={}
a.a8(0,new P.jT(z))
return z},
ds:function(){var z=$.dr
if(z==null){z=J.ce(window.navigator.userAgent,"Opera",0)
$.dr=z}return z},
fB:function(){var z,y
z=$.dn
if(z!=null)return z
y=$.dp
if(y==null){y=J.ce(window.navigator.userAgent,"Firefox",0)
$.dp=y}if(y)z="-moz-"
else{y=$.dq
if(y==null){y=!P.ds()&&J.ce(window.navigator.userAgent,"Trident/",0)
$.dq=y}if(y)z="-ms-"
else z=P.ds()?"-o-":"-webkit-"}$.dn=z
return z},
eP:{"^":"a;du:a>,b,c",$isbR:1},
jT:{"^":"r:13;a",
$2:function(a,b){this.a[a]=b}},
fM:{"^":"bU;a,b",
gbL:function(){var z,y,x
z=this.b
y=H.ad(z,"O",0)
x=W.W
return new H.hg(new H.iV(z,H.l(new P.fN(),{func:1,ret:P.T,args:[y]}),[y]),H.l(new P.fO(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){J.d9(this.b.a,b)},
gn:function(a){return J.bz(this.gbL().a)},
j:function(a,b){var z=this.gbL()
return z.b.$1(J.da(z.a,b))},
gN:function(a){var z=P.hb(this.gbL(),!1,W.W)
return new J.ae(z,z.length,0,[H.p(z,0)])},
$asO:function(){return[W.W]},
$ask:function(){return[W.W]},
$asb:function(){return[W.W]}},
fN:{"^":"r:22;",
$1:function(a){return!!J.M(H.f(a,"$isH")).$isW}},
fO:{"^":"r:23;",
$1:function(a){return H.c(H.f(a,"$isH"),"$isW")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
c2:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jl:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jr:{"^":"a;$ti",
gb3:function(a){var z=this.a
if(typeof z!=="number")return z.D()
return H.w(z+this.c,H.p(this,0))},
gc3:function(a){var z=this.b
if(typeof z!=="number")return z.D()
return H.w(z+this.d,H.p(this,0))},
i:function(a){return"Rectangle ("+H.e(this.a)+", "+H.e(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var z,y,x,w
if(b==null)return!1
if(!H.bx(b,"$isax",[P.a5],"$asax"))return!1
z=this.a
y=J.b1(b)
x=y.gaJ(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb8(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.D()
w=H.p(this,0)
if(H.w(z+this.c,w)===y.gb3(b)){if(typeof x!=="number")return x.D()
z=H.w(x+this.d,w)===y.gc3(b)}else z=!1}else z=!1}else z=!1
return z},
gU:function(a){var z,y,x,w,v
z=this.a
y=J.aN(z)
x=this.b
w=J.aN(x)
if(typeof z!=="number")return z.D()
v=H.p(this,0)
z=H.w(z+this.c,v)
if(typeof x!=="number")return x.D()
v=H.w(x+this.d,v)
return P.jl(P.c2(P.c2(P.c2(P.c2(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
ax:{"^":"jr;aJ:a>,b8:b>,bb:c>,aY:d>,$ti"}}],["","",,P,{"^":"",kD:{"^":"W;",
gdr:function(a){return new P.fM(a,new W.j2(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"}}],["","",,P,{"^":""}],["","",,P,{"^":"",fl:{"^":"E;",$isfl:1,"%":"WebGLBuffer"},fQ:{"^":"E;",$isfQ:1,"%":"WebGLFramebuffer"},hK:{"^":"E;",$ishK:1,"%":"WebGLProgram"},cB:{"^":"E;",
bi:function(a,b){return a.activeTexture(b)},
dl:function(a,b,c){return a.attachShader(b,c)},
ao:function(a,b,c){return a.bindBuffer(b,c)},
hY:function(a,b,c){return a.bindFramebuffer(b,c)},
a1:function(a,b,c){return a.bindTexture(b,c)},
hZ:function(a,b,c){return a.blendFunc(b,c)},
dn:function(a,b,c,d){return a.bufferData(b,c,d)},
i0:function(a,b){return a.clear(b)},
i1:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
i2:function(a,b){return a.clearDepth(b)},
i3:function(a,b){return a.compileShader(b)},
i8:function(a,b){return a.createShader(b)},
ia:function(a,b){return a.deleteProgram(b)},
ib:function(a,b){return a.deleteShader(b)},
ig:function(a,b){return a.depthFunc(b)},
ih:function(a,b){return a.disable(b)},
dw:function(a,b){return a.disableVertexAttribArray(b)},
ii:function(a,b,c,d,e){return a.drawElements(b,c,H.U(d),H.U(e))},
ca:function(a,b){return a.enable(b)},
dB:function(a,b){return a.enableVertexAttribArray(b)},
ee:function(a,b){return a.generateMipmap(b)},
ef:function(a,b,c){return a.getActiveAttrib(b,c)},
eg:function(a,b,c){return a.getActiveUniform(b,c)},
eh:function(a,b,c){return a.getAttribLocation(b,c)},
cC:function(a,b){return a.getParameter(b)},
ej:function(a,b){return a.getProgramInfoLog(b)},
bD:function(a,b,c){return a.getProgramParameter(b,c)},
el:function(a,b){return a.getShaderInfoLog(b)},
em:function(a,b,c){return a.getShaderParameter(b,c)},
en:function(a,b,c){return a.getUniformLocation(b,c)},
iu:function(a,b){return a.linkProgram(b)},
e3:function(a,b,c){return a.pixelStorei(b,c)},
es:function(a,b,c){return a.shaderSource(b,c)},
iV:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.M(g)
if(!!z.$isbR)y=!0
else y=!1
if(y){this.hl(a,b,c,d,e,f,P.jU(g))
return}if(!!z.$isdz)z=!0
else z=!1
if(z){this.hm(a,b,c,d,e,f,g)
return}throw H.i(P.fi("Incorrect number or type of arguments"))},
e6:function(a,b,c,d,e,f,g){return this.iV(a,b,c,d,e,f,g,null,null,null)},
hl:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
hm:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ar:function(a,b,c,d){return a.texParameteri(b,c,d)},
E:function(a,b,c){return a.uniform1f(b,c)},
F:function(a,b,c){return a.uniform1i(b,c)},
q:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ea:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eb:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cu:function(a,b){return a.useProgram(b)},
j1:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
j2:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$iscB:1,
"%":"WebGLRenderingContext"},hY:{"^":"E;",$ishY:1,"%":"WebGLShader"},ig:{"^":"E;",$isig:1,"%":"WebGLTexture"},iB:{"^":"E;",$isiB:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",K:{"^":"a;0a,0b,0c,0d,$ti",
sfl:function(a){this.a=H.h(a,"$isb",[H.ad(this,"K",0)],"$asb")},
sd8:function(a){this.b=H.l(a,{func:1,ret:P.T,args:[[P.k,H.ad(this,"K",0)]]})},
sd5:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.u,[P.k,H.ad(this,"K",0)]]})},
sd9:function(a){this.d=H.l(a,{func:1,ret:-1,args:[P.u,[P.k,H.ad(this,"K",0)]]})},
bc:function(a){this.sfl(H.d([],[a]))
this.sd8(null)
this.sd5(null)
this.sd9(null)},
cD:function(a,b,c){var z=H.ad(this,"K",0)
H.l(b,{func:1,ret:P.T,args:[[P.k,z]]})
z={func:1,ret:-1,args:[P.u,[P.k,z]]}
H.l(a,z)
H.l(c,z)
this.sd8(b)
this.sd5(a)
this.sd9(c)},
aN:function(a,b){return this.cD(a,null,b)},
d7:function(a){var z
H.h(a,"$isk",[H.ad(this,"K",0)],"$ask")
z=this.b
if(z!=null)return z.$1(a)
return!0},
cK:function(a,b){var z
H.h(b,"$isk",[H.ad(this,"K",0)],"$ask")
z=this.c
if(z!=null)z.$2(a,b)},
gn:function(a){return this.a.length},
gN:function(a){var z=this.a
return new J.ae(z,z.length,0,[H.p(z,0)])},
a7:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.j(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.ad(this,"K",0)
H.w(b,z)
z=[z]
if(this.d7(H.d([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.cK(x,H.d([b],z))}},
bZ:function(a,b){var z,y
H.h(b,"$isk",[H.ad(this,"K",0)],"$ask")
if(this.d7(b)){z=this.a
y=z.length
C.a.bZ(z,b)
this.cK(y,b)}},
$isk:1,
m:{
co:function(a){var z=new O.K([a])
z.bc(a)
return z}}},cy:{"^":"a;0a,0b",
sbM:function(a){this.a=H.h(a,"$isb",[V.ah],"$asb")},
gn:function(a){return this.a.length},
gl:function(){var z=this.b
if(z==null){z=D.z()
this.b=z}return z},
eE:function(a){var z=this.b
if(!(z==null))z.C(a)},
aA:function(){return this.eE(null)},
gS:function(){var z=this.a
if(z.length>0)return C.a.gcl(z)
else return V.aQ()},
bA:function(a){var z=this.a
if(a==null)C.a.h(z,V.aQ())
else C.a.h(z,a)
this.aA()},
ay:function(){var z=this.a
if(z.length>0){z.pop()
this.aA()}}}}],["","",,E,{"^":"",cg:{"^":"a;"},ag:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0ad:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
seF:function(a,b){this.y=H.h(b,"$isK",[E.ag],"$asK")},
sad:function(a){this.z=H.f(a,"$isbB")},
sbE:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gl().P(0,this.ge2())
y=this.c
if(y!=null)y.gl().h(0,this.ge2())
x=new D.D("shape",z,this.c,this,[F.e1])
x.b=!0
this.aK(x)}},
ab:function(a){var z
for(z=this.y.a,z=new J.ae(z,z.length,0,[H.p(z,0)]);z.w();)z.d.ab(a)},
a4:function(a){var z,y
z=a.dx
C.a.h(z.a,z.gS())
z.aA()
a.cs(this.f)
z=a.dy
y=(z&&C.a).gcl(z)
if(y!=null&&this.d!=null)y.e4(a,this)
for(z=this.y.a,z=new J.ae(z,z.length,0,[H.p(z,0)]);z.w();)z.d.a4(a)
a.cr()
a.dx.ay()},
gl:function(){var z=this.z
if(z==null){z=D.z()
this.z=z}return z},
aK:function(a){var z=this.z
if(!(z==null))z.C(a)},
a_:function(){return this.aK(null)},
iD:[function(a){H.f(a,"$isq")
this.e=null
this.aK(a)},function(){return this.iD(null)},"jI","$1","$0","ge2",0,2,0],
iB:[function(a){this.aK(H.f(a,"$isq"))},function(){return this.iB(null)},"jG","$1","$0","ge1",0,2,0],
jF:[function(a,b){var z,y,x,w,v,u,t
H.h(b,"$isk",[E.ag],"$ask")
for(z=b.length,y=this.ge1(),x={func:1,ret:-1,args:[D.q]},w=[x],v=0;v<b.length;b.length===z||(0,H.v)(b),++v){u=b[v]
if(u!=null){if(u.gad()==null){t=new D.bB()
t.san(null)
t.sbT(null)
t.c=null
t.d=0
u.sad(t)}t=u.gad()
t.toString
H.l(y,x)
if(t.a==null)t.san(H.d([],w))
t=t.a;(t&&C.a).h(t,y)}}this.a_()},"$2","giA",8,0,5],
jH:[function(a,b){var z,y
H.h(b,"$isk",[E.ag],"$ask")
for(z=b.gN(b),y=this.ge1();z.w();)z.gJ().gl().P(0,y)
this.a_()},"$2","giC",8,0,5],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaq:1,
m:{
dw:function(a,b,c,d,e,f){var z=new E.ag()
z.a=d
z.b=!0
z.seF(0,O.co(E.ag))
z.y.aN(z.giA(),z.giC())
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
z.sbE(0,e)
return z}}},hO:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
shk:function(a){this.dy=H.h(a,"$isb",[O.bl],"$asb")},
shf:function(a){this.fr=H.h(a,"$isan",[P.x,A.bY],"$asan")},
eB:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.af(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cy()
y=[V.ah]
z.sbM(H.d([],y))
z.b=null
z.gl().h(0,new E.hQ(this))
this.cy=z
z=new O.cy()
z.sbM(H.d([],y))
z.b=null
z.gl().h(0,new E.hR(this))
this.db=z
z=new O.cy()
z.sbM(H.d([],y))
z.b=null
z.gl().h(0,new E.hS(this))
this.dx=z
this.shk(H.d([],[O.bl]))
z=this.dy;(z&&C.a).h(z,null)
this.shf(new H.bb(0,0,[P.x,A.bY]))},
giM:function(){var z=this.z
if(z==null){z=this.cy.gS().p(0,this.db.gS())
this.z=z}return z},
cs:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gcl(z):a;(z&&C.a).h(z,y)},
cr:function(){var z=this.dy
if(z.length>1)z.pop()},
dk:function(a){var z=a.b
if(z.length===0)throw H.i(P.n("May not cache a shader with no name."))
if(this.fr.dt(z))throw H.i(P.n('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.a0(0,z,a)},
m:{
hP:function(a,b){var z=new E.hO(a,b)
z.eB(a,b)
return z}}},hQ:{"^":"r:8;a",
$1:function(a){var z
H.f(a,"$isq")
z=this.a
z.z=null
z.ch=null}},hR:{"^":"r:8;a",
$1:function(a){var z
H.f(a,"$isq")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hS:{"^":"r:8;a",
$1:function(a){var z
H.f(a,"$isq")
z=this.a
z.ch=null
z.cx=null}},il:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0ad:x<,0y,0z,0Q,0ch,0cx,0cy",
sad:function(a){this.x=H.f(a,"$isbB")},
eH:[function(a){H.f(a,"$isq")
this.iQ()},function(){return this.eH(null)},"eG","$1","$0","gcL",0,2,0],
gio:function(){var z,y,x
z=Date.now()
y=C.h.Z(P.dv(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.af(z,!1)
return x/y},
dc:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.p()
if(typeof z!=="number")return H.y(z)
x=C.i.ci(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.p()
w=C.i.ci(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.ed(C.n,this.giP())}},
iQ:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.io(this),{func:1,ret:-1,args:[P.a5]})
C.A.f5(z)
C.A.h2(z,W.eW(y,P.a5))}},"$0","giP",0,0,3],
iN:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dc()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.af(w,!1)
x.y=P.dv(0,0,0,w-x.r.a,0,0).a*0.000001
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
this.d.a4(this.e)}}catch(v){z=H.aG(v)
y=H.b2(v)
P.d8("Error: "+H.e(z))
P.d8("Stack: "+H.e(y))
throw H.i(z)}},
m:{
im:function(a,b,c,d,e){var z,y,x,w
z=J.M(a)
if(!!z.$isck)return E.ec(a,!0,!0,!0,!1)
y=W.cl(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gdr(a).h(0,y)
w=E.ec(y,!0,!0,!0,!1)
w.a=a
return w},
ec:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.il()
y=P.h8(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.x,null)
x=C.m.bC(a,"webgl",y)
x=H.f(x==null?C.m.bC(a,"experimental-webgl",y):x,"$iscB")
if(x==null)H.o(P.n("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hP(x,a)
w=new T.ii(x)
w.b=H.U((x&&C.b).cC(x,3379))
w.c=H.U(C.b.cC(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.iH(a)
v=new X.h2()
v.c=new X.ap(!1,!1,!1)
v.sfY(P.h9(null,null,null,P.u))
w.b=v
v=new X.hr(w)
v.f=0
v.r=V.aw()
v.x=V.aw()
v.Q=1
v.ch=1
w.c=v
v=new X.hc(w)
v.r=0
v.x=V.aw()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.ir(w)
v.e=0
v.f=V.aw()
v.r=V.aw()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.sf6(H.d([],[[P.cE,P.a]]))
v=w.z
u=document
t=W.ai
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.P(u,"contextmenu",H.l(w.gfC(),s),!1,t))
v=w.z
r=W.X
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.P(a,"focus",H.l(w.gfF(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.P(a,"blur",H.l(w.gfz(),q),!1,r))
v=w.z
p=W.bc
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.P(u,"keyup",H.l(w.gfH(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.P(u,"keydown",H.l(w.gfG(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.P(a,"mousedown",H.l(w.gfK(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.P(a,"mouseup",H.l(w.gfM(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.P(a,"mousemove",H.l(w.gfL(),s),!1,t))
p=w.z
o=W.bp;(p&&C.a).h(p,W.P(a,H.N(W.fH(a)),H.l(w.gfN(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.P(u,"mousemove",H.l(w.gfD(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.P(u,"mouseup",H.l(w.gfE(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.P(u,"pointerlockchange",H.l(w.gfO(),q),!1,r))
r=w.z
q=W.aU
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.P(a,"touchstart",H.l(w.gfW(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.P(a,"touchend",H.l(w.gfU(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.P(a,"touchmove",H.l(w.gfV(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.af(Date.now(),!1)
z.cy=0
z.dc()
return z}}},io:{"^":"r:28;a",
$1:function(a){var z
H.kc(a)
z=this.a
if(z.ch){z.ch=!1
z.iN()}}}}],["","",,Z,{"^":"",eB:{"^":"a;a,b",$isko:1,m:{
cU:function(a,b,c){var z
H.h(c,"$isb",[P.u],"$asb")
z=a.createBuffer()
C.b.ao(a,b,z)
C.b.dn(a,b,new Int16Array(H.bt(c)),35044)
C.b.ao(a,b,null)
return new Z.eB(b,z)}}},de:{"^":"cg;a,b,c,d,e",
Y:function(a){var z,y,x
try{y=a.a
C.b.dB(y,this.e)
C.b.j1(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.aG(x)
y=P.n('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.e(z))
throw H.i(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.e(this.e)+"]"}},eC:{"^":"a;a",$iskp:1},cj:{"^":"a;a,0b,c,d",
sfh:function(a){this.b=H.h(a,"$isb",[Z.bC],"$asb")},
ax:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
Y:function(a){var z,y
z=this.a
C.b.ao(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].Y(a)},
ba:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.b.dw(x,z[y].e)
C.b.ao(x,this.a.a,null)},
a4:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.j(w,x)
v=w[x]
w=v.c
u=w.a
C.b.ao(y,u,w.b)
C.b.ii(y,v.a,v.b,5123,0)
C.b.ao(y,u,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.x]
y=H.d([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.v)(x),++v)C.a.h(y,x[v].i(0))
u=H.d([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a6(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.A(y,", ")+"\nAttrs:   "+C.a.A(u,", ")},
$iskE:1},bC:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aS(this.c)+"'")+"]"}},aV:{"^":"a;a",
gcE:function(a){var z,y
z=this.a
y=(z&$.$get$al().a)!==0?3:0
if((z&$.$get$aB().a)!==0)y+=3
if((z&$.$get$aA().a)!==0)y+=3
if((z&$.$get$aC().a)!==0)y+=2
if((z&$.$get$aD().a)!==0)y+=3
if((z&$.$get$bn().a)!==0)y+=3
if((z&$.$get$bo().a)!==0)y+=4
if((z&$.$get$aW().a)!==0)++y
return(z&$.$get$az().a)!==0?y+4:y},
hW:function(a){var z,y,x
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
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aW()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$az()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eA()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aV))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.d([],[P.x])
y=this.a
if((y&$.$get$al().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aB().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aA().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aC().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aD().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bn().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bo().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aW().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$az().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.A(z,"|")},
m:{
ab:function(a){return new Z.aV(a)}}}}],["","",,D,{"^":"",dh:{"^":"a;"},bB:{"^":"a;0a,0b,0c,0d",
san:function(a){this.a=H.h(a,"$isb",[{func:1,ret:-1,args:[D.q]}],"$asb")},
sbT:function(a){this.b=H.h(a,"$isb",[{func:1,ret:-1,args:[D.q]}],"$asb")},
h:function(a,b){var z={func:1,ret:-1,args:[D.q]}
H.l(b,z)
if(this.a==null)this.san(H.d([],[z]))
z=this.a;(z&&C.a).h(z,b)},
P:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.q]})
z=this.a
z=z==null?null:C.a.aI(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).P(z,b)||!1}else y=!1
return y},
C:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w)w=!0
else w=!1
if(w)return!1
if(a==null){a=new D.q(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.a8(y,new D.fL(z))
return!0},
dA:function(){return this.C(null)},
iR:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.C(y)}}},
az:function(){return this.iR(!0,!1)},
m:{
z:function(){var z=new D.bB()
z.san(null)
z.sbT(null)
z.c=null
z.d=0
return z}}},fL:{"^":"r:29;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.q]})
z=this.a.a
z.b
a.$1(z)}},q:{"^":"a;a,0b"},bD:{"^":"q;c,d,a,0b,$ti"},bE:{"^":"q;c,d,a,0b,$ti"},D:{"^":"q;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}}],["","",,X,{"^":"",df:{"^":"a;a,b",
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.df))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}},dF:{"^":"a;a,b",
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dF))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}},h2:{"^":"a;0a,0b,0c,0d",
sfY:function(a){this.d=H.h(a,"$ise0",[P.u],"$ase0")},
iJ:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
iF:function(a){this.c=a.b
this.d.P(0,a.a)
return!1}},dI:{"^":"bV;x,y,c,d,e,a,0b"},hc:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aQ:function(a,b){var z,y,x,w,v,u,t,s
z=new P.af(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.p()
v=b.b
u=this.ch
if(typeof v!=="number")return v.p()
t=new V.Z(y.a+x*w,y.b+v*u)
u=this.a.gaH()
s=new X.bf(a,V.aw(),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cq:function(a,b){this.r=a.a
return!1},
b0:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.ep()
if(typeof z!=="number")return z.ec()
this.r=(z&~y)>>>0
return!1},
b_:function(a,b){var z=this.d
if(z==null)return!1
z.C(this.aQ(a,b))
return!0},
iK:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaH()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.p()
t=a.b
s=this.cy
if(typeof t!=="number")return t.p()
w=new X.cz(new V.I(v*u,t*s),y,x,new P.af(w,!1),this)
w.b=!0
z.C(w)
return!0},
fJ:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.af(Date.now(),!1)
y=this.f
x=new X.dI(c,a,this.a.gaH(),b,z,this)
x.b=!0
y.C(x)
this.y=z
this.x=V.aw()}},ap:{"^":"a;a,b,c",
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ap))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},bf:{"^":"bV;x,y,z,Q,ch,c,d,e,a,0b"},hr:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bJ:function(a,b,c){var z,y,x
z=new P.af(Date.now(),!1)
y=this.a.gaH()
x=new X.bf(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cq:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.C(this.bJ(a,b,!0))
return!0},
b0:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.ep()
if(typeof z!=="number")return z.ec()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.C(this.bJ(a,b,!0))
return!0},
b_:function(a,b){var z=this.d
if(z==null)return!1
z.C(this.bJ(a,b,!1))
return!0},
iL:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaH()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.p()
u=a.b
t=this.ch
if(typeof u!=="number")return u.p()
x=new X.cz(new V.I(w*v,u*t),y,b,new P.af(x,!1),this)
x.b=!0
z.C(x)
return!0},
gdz:function(){var z=this.b
if(z==null){z=D.z()
this.b=z}return z},
gbB:function(){var z=this.c
if(z==null){z=D.z()
this.c=z}return z},
ge0:function(){var z=this.d
if(z==null){z=D.z()
this.d=z}return z}},cz:{"^":"bV;x,c,d,e,a,0b"},bV:{"^":"q;"},eg:{"^":"bV;x,y,z,Q,ch,c,d,e,a,0b"},ir:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
aQ:function(a,b){var z,y,x,w
H.h(a,"$isb",[V.Z],"$asb")
z=new P.af(Date.now(),!1)
y=a.length>0?a[0]:V.aw()
x=this.a.gaH()
w=new X.eg(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
iI:function(a){var z
H.h(a,"$isb",[V.Z],"$asb")
z=this.b
if(z==null)return!1
z.C(this.aQ(a,!0))
return!0},
iG:function(a){var z
H.h(a,"$isb",[V.Z],"$asb")
z=this.c
if(z==null)return!1
z.C(this.aQ(a,!0))
return!0},
iH:function(a){var z
H.h(a,"$isb",[V.Z],"$asb")
z=this.d
if(z==null)return!1
z.C(this.aQ(a,!1))
return!0}},iH:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
sf6:function(a){this.z=H.h(a,"$isb",[[P.cE,P.a]],"$asb")},
gaH:function(){var z=this.a
return V.dZ(0,0,C.m.gds(z).c,C.m.gds(z).d)},
d_:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dF(z,new X.ap(y,a.altKey,a.shiftKey))},
aG:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ap(y,a.altKey,a.shiftKey)},
bY:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ap(y,a.altKey,a.shiftKey)},
av:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.G()
v=z.top
if(typeof x!=="number")return x.G()
return new V.Z(y-w,x-v)},
aT:function(a){return new V.I(a.movementX,a.movementY)},
bV:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.d([],[V.Z])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.v)(x),++v){u=x[v]
t=C.i.ak(u.pageX)
C.i.ak(u.pageY)
s=z.left
C.i.ak(u.pageX)
C.a.h(y,new V.Z(t-s,C.i.ak(u.pageY)-z.top))}return y},
as:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.df(z,new X.ap(y,a.altKey,a.shiftKey))},
bN:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.G()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.G()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
jh:[function(a){this.f=!0},"$1","gfF",4,0,9],
jb:[function(a){this.f=!1},"$1","gfz",4,0,9],
je:[function(a){H.f(a,"$isai")
if(this.f&&this.bN(a))a.preventDefault()},"$1","gfC",4,0,4],
jj:[function(a){var z
H.f(a,"$isbc")
if(!this.f)return
z=this.d_(a)
this.b.iJ(z)},"$1","gfH",4,0,16],
ji:[function(a){var z
H.f(a,"$isbc")
if(!this.f)return
z=this.d_(a)
this.b.iF(z)},"$1","gfG",4,0,16],
jl:[function(a){var z,y,x,w
H.f(a,"$isai")
z=this.a
z.focus()
this.f=!0
this.aG(a)
if(this.x){y=this.as(a)
x=this.aT(a)
if(this.d.cq(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.as(a)
w=this.av(a)
if(this.c.cq(y,w))a.preventDefault()},"$1","gfK",4,0,4],
jn:[function(a){var z,y,x
H.f(a,"$isai")
this.aG(a)
z=this.as(a)
if(this.x){y=this.aT(a)
if(this.d.b0(z,y))a.preventDefault()
return}if(this.r)return
x=this.av(a)
if(this.c.b0(z,x))a.preventDefault()},"$1","gfM",4,0,4],
jg:[function(a){var z,y,x
H.f(a,"$isai")
if(!this.bN(a)){this.aG(a)
z=this.as(a)
if(this.x){y=this.aT(a)
if(this.d.b0(z,y))a.preventDefault()
return}if(this.r)return
x=this.av(a)
if(this.c.b0(z,x))a.preventDefault()}},"$1","gfE",4,0,4],
jm:[function(a){var z,y,x
H.f(a,"$isai")
this.aG(a)
z=this.as(a)
if(this.x){y=this.aT(a)
if(this.d.b_(z,y))a.preventDefault()
return}if(this.r)return
x=this.av(a)
if(this.c.b_(z,x))a.preventDefault()},"$1","gfL",4,0,4],
jf:[function(a){var z,y,x
H.f(a,"$isai")
if(!this.bN(a)){this.aG(a)
z=this.as(a)
if(this.x){y=this.aT(a)
if(this.d.b_(z,y))a.preventDefault()
return}if(this.r)return
x=this.av(a)
if(this.c.b_(z,x))a.preventDefault()}},"$1","gfD",4,0,4],
jo:[function(a){var z,y
H.f(a,"$isbp")
this.aG(a)
z=new V.I((a&&C.z).gic(a),C.z.gie(a)).u(0,180)
if(this.x){if(this.d.iK(z))a.preventDefault()
return}if(this.r)return
y=this.av(a)
if(this.c.iL(z,y))a.preventDefault()},"$1","gfN",4,0,35],
jp:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.as(this.y)
x=this.av(this.y)
this.d.fJ(y,x,z)}},"$1","gfO",4,0,9],
jx:[function(a){var z
H.f(a,"$isaU")
this.a.focus()
this.f=!0
this.bY(a)
z=this.bV(a)
if(this.e.iI(z))a.preventDefault()},"$1","gfW",4,0,10],
jv:[function(a){var z
H.f(a,"$isaU")
this.bY(a)
z=this.bV(a)
if(this.e.iG(z))a.preventDefault()},"$1","gfU",4,0,10],
jw:[function(a){var z
H.f(a,"$isaU")
this.bY(a)
z=this.bV(a)
if(this.e.iH(z))a.preventDefault()},"$1","gfV",4,0,10]}}],["","",,D,{"^":"",dt:{"^":"a;",$isS:1,$isaq:1},S:{"^":"a;",$isaq:1},h3:{"^":"K;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
sf4:function(a){this.e=H.h(a,"$isb",[D.dt],"$asb")},
sfX:function(a){this.f=H.h(a,"$isb",[D.dT],"$asb")},
shh:function(a){this.r=H.h(a,"$isb",[D.e3],"$asb")},
shs:function(a){this.x=H.h(a,"$isb",[D.e9],"$asb")},
sht:function(a){this.y=H.h(a,"$isb",[D.ea],"$asb")},
shu:function(a){this.z=H.h(a,"$isb",[D.eb],"$asb")},
gl:function(){var z=this.Q
if(z==null){z=D.z()
this.Q=z}return z},
cM:function(a){var z=this.Q
if(!(z==null))z.C(a)},
fI:[function(a){var z=this.ch
if(!(z==null))z.C(a)},function(){return this.fI(null)},"jk","$1","$0","gd6",0,2,0],
jq:[function(a){var z,y,x
H.h(a,"$isk",[D.S],"$ask")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.v)(a),++y){x=a[y]
if(x==null||this.f0(x))return!1}return!0},"$1","gfP",4,0,36],
j8:[function(a,b){var z,y,x,w,v
z=D.S
H.h(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gd6(),w=0;w<b.length;b.length===y||(0,H.v)(b),++w){v=H.f(b[w],"$isS")
v.gl().h(0,x)}z=new D.bD(a,b,this,[z])
z.b=!0
this.cM(z)},"$2","gfu",8,0,17],
js:[function(a,b){var z,y,x,w
z=D.S
H.h(b,"$isk",[z],"$ask")
for(y=b.gN(b),x=this.gd6();y.w();){w=y.gJ()
C.a.P(this.e,w)
w.gl().P(0,x)}z=new D.bE(a,b,this,[z])
z.b=!0
this.cM(z)},"$2","gfR",8,0,17],
f0:function(a){var z=C.a.aI(this.e,a)
return z},
$ask:function(){return[D.S]},
$asK:function(){return[D.S]}},dT:{"^":"a;",$isS:1,$isaq:1},e3:{"^":"a;",$isS:1,$isaq:1},e9:{"^":"a;",$isS:1,$isaq:1},ea:{"^":"a;",$isS:1,$isaq:1},eb:{"^":"a;",$isS:1,$isaq:1}}],["","",,V,{"^":"",
kr:[function(a,b){if(typeof b!=="number")return b.G()
if(typeof a!=="number")return H.y(a)
return Math.abs(b-a)<=1e-9},"$2","hp",8,0,24],
kl:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.i.eo(a-b,z)
return(a<0?a+z:a)+b},
F:function(a,b,c){if(a==null)return C.j.aa("null",c)
return C.j.aa(C.i.e8($.m.$2(a,0)?0:a,b),c+b+1)},
b0:function(a,b,c){var z,y,x,w,v,u
H.h(a,"$isb",[P.t],"$asb")
z=H.d([],[P.x])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.v)(a),++w){v=V.F(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.j(z,u)
C.a.a0(z,u,C.j.aa(z[u],x))}return z},
d7:function(a,b){return C.i.iY(Math.pow(b,C.F.ci(Math.log(H.jR(a))/Math.log(b))))},
a1:{"^":"a;a,b,c",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}},
aI:{"^":"a;a,b,c,d",
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aI))return!1
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
dM:{"^":"a;a,b,c,d,e,f,r,x,y",
a5:function(a,b){var z=H.d([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.t])
return z},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dM))return!1
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
z=[P.t]
y=V.b0(H.d([this.a,this.d,this.r],z),3,0)
x=V.b0(H.d([this.b,this.e,this.x],z),3,0)
w=V.b0(H.d([this.c,this.f,this.y],z),3,0)
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
ah:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a5:function(a,b){var z=H.d([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.t])
return z},
ck:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.m.$2(a2,0))return V.aQ()
a3=1/a2
a4=-w
a5=-i
return V.ao((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
p:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
return V.ao(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
e9:function(a){return new V.J(C.i.p(this.a,a.gag(a))+C.i.p(this.b,a.gah(a))+C.i.p(this.c,a.gai()),C.i.p(this.e,a.gag(a))+C.i.p(this.f,a.gah(a))+C.i.p(this.r,a.gai()),C.i.p(this.y,a.gag(a))+C.i.p(this.z,a.gah(a))+C.i.p(this.Q,a.gai()))},
b9:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.a8(this.a*z+this.b*y+this.c*x+this.d,this.e*z+this.f*y+this.r*x+this.x,this.y*z+this.z*y+this.Q*x+this.ch)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ah))return!1
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
i:function(a){return this.H()},
dX:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.t]
y=V.b0(H.d([this.a,this.e,this.y,this.cx],z),b,c)
x=V.b0(H.d([this.b,this.f,this.z,this.cy],z),b,c)
w=V.b0(H.d([this.c,this.r,this.Q,this.db],z),b,c)
v=V.b0(H.d([this.d,this.x,this.ch,this.dx],z),b,c)
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
H:function(){return this.dX("",3,0)},
v:function(a){return this.dX(a,3,0)},
m:{
aQ:function(){var z=$.dN
if(z==null){z=V.ao(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.dN=z}return z},
ao:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ah(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)}}},
Z:{"^":"a;a,b",
G:function(a,b){return new V.Z(this.a-b.a,this.b-b.b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"},
m:{
aw:function(){var z=$.dU
if(z==null){z=new V.Z(0,0)
$.dU=z}return z}}},
a8:{"^":"a;a,b,c",
G:function(a,b){return new V.a8(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a8))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"},
m:{
hz:function(){var z=$.bi
if(z==null){z=new V.a8(0,0,0)
$.bi=z}return z}}},
bj:{"^":"a;a,b,c,d",
t:function(a,b){var z
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
dY:{"^":"a;a,b,c,d",
ga3:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dY))return!1
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
dZ:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dY(a,b,c,d)}}},
I:{"^":"a;a,b",
it:[function(a){return Math.sqrt(this.B(this))},"$0","gn",1,0,18],
B:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.p()
if(typeof y!=="number")return H.y(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.p()
if(typeof w!=="number")return H.y(w)
return z*y+x*w},
p:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.p()
y=this.b
if(typeof y!=="number")return y.p()
return new V.I(z*b,y*b)},
u:function(a,b){var z,y
if($.m.$2(b,0)){z=$.eu
if(z==null){z=new V.I(0,0)
$.eu=z}return z}z=this.a
if(typeof z!=="number")return z.u()
y=this.b
if(typeof y!=="number")return y.u()
return new V.I(z/b,y/b)},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.I))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}},
J:{"^":"a;a,b,c",
it:[function(a){return Math.sqrt(this.B(this))},"$0","gn",1,0,18],
B:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cm:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.J(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aX:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.J(z*y-x*w,x*v-u*y,u*w-z*v)},
D:function(a,b){return new V.J(this.a+b.a,this.b+b.b,this.c+b.c)},
K:function(a){return new V.J(-this.a,-this.b,-this.c)},
u:function(a,b){if($.m.$2(b,0))return V.bI()
return new V.J(this.a/b,this.b/b,this.c/b)},
dZ:function(){if(!$.m.$2(0,this.a))return!1
if(!$.m.$2(0,this.b))return!1
if(!$.m.$2(0,this.c))return!1
return!0},
t:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.J))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"},
m:{
bI:function(){var z=$.ex
if(z==null){z=new V.J(0,0,0)
$.ex=z}return z}}}}],["","",,U,{"^":"",fs:{"^":"dh;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bF:function(a){var z=V.kl(a,this.c,this.b)
return z},
gl:function(){var z=this.y
if(z==null){z=D.z()
this.y=z}return z},
L:function(a){var z=this.y
if(!(z==null))z.C(a)},
scv:function(a,b){},
scn:function(a){var z,y
z=this.b
if(!$.m.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bF(z)}z=new D.D("maximumLocation",y,this.b,this,[P.t])
z.b=!0
this.L(z)}},
scp:function(a){var z,y
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bF(z)}z=new D.D("minimumLocation",y,this.c,this,[P.t])
z.b=!0
this.L(z)}},
sa2:function(a,b){var z,y
b=this.bF(b)
z=this.d
if(!$.m.$2(z,b)){y=this.d
this.d=b
z=new D.D("location",y,b,this,[P.t])
z.b=!0
this.L(z)}},
sco:function(a){var z,y,x
z=this.e
if(!$.m.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.D("maximumVelocity",y,a,this,[P.t])
z.b=!0
this.L(z)}},
sM:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.m.$2(z,a)){x=this.f
this.f=a
z=new D.D("velocity",x,a,this,[P.t])
z.b=!0
this.L(z)}},
sc9:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.m.$2(z,a)){y=this.x
this.x=a
z=new D.D("dampening",y,a,this,[P.t])
z.b=!0
this.L(z)}},
ab:function(a){var z,y,x,w
z=this.f
if($.m.$2(z,0)){z=this.r
z=!$.m.$2(z,0)}else z=!0
if(z){y=this.f+this.r*a
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa2(0,this.d+y*a)
z=this.x
if(!$.m.$2(z,0)){w=y*Math.pow(1-this.x,a)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sM(y)}},
m:{
cp:function(){var z=new U.fs()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dj:{"^":"a2;0a,0b",
gl:function(){var z=this.b
if(z==null){z=D.z()
this.b=z}return z},
aL:function(a,b){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dj))return!1
return J.Q(this.a,b.a)},
i:function(a){return"Constant: "+this.a.v("          ")}},dy:{"^":"K;0e,0f,0r,0a,0b,0c,0d",
gl:function(){var z=this.e
if(z==null){z=D.z()
this.e=z}return z},
L:[function(a){var z
H.f(a,"$isq")
z=this.e
if(!(z==null))z.C(a)},function(){return this.L(null)},"ae","$1","$0","gaF",0,2,0],
j7:[function(a,b){var z,y,x,w,v,u,t,s
z=U.a2
H.h(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gaF(),w={func:1,ret:-1,args:[D.q]},v=[w],u=0;u<b.length;b.length===y||(0,H.v)(b),++u){t=b[u]
if(t!=null){s=t.gl()
s.toString
H.l(x,w)
if(s.a==null)s.san(H.d([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.bD(a,b,this,[z])
z.b=!0
this.L(z)},"$2","gft",8,0,19],
jr:[function(a,b){var z,y,x
z=U.a2
H.h(b,"$isk",[z],"$ask")
for(y=b.gN(b),x=this.gaF();y.w();)y.gJ().gl().P(0,x)
z=new D.bE(a,b,this,[z])
z.b=!0
this.L(z)},"$2","gfQ",8,0,19],
aL:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(typeof z!=="number")return z.al()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.ae(z,z.length,0,[H.p(z,0)]),x=null;z.w();){y=z.d
if(y!=null){w=y.aL(a,b)
if(w!=null)x=x==null?w:w.p(0,x)}}this.f=x==null?V.aQ():x
z=this.e
if(!(z==null))z.az()}return this.f},
t:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dy))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.j(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.j(w,y)
if(!J.Q(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$ask:function(){return[U.a2]},
$asK:function(){return[U.a2]},
$isa2:1},a2:{"^":"dh;"},iI:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gl:function(){var z=this.cy
if(z==null){z=D.z()
this.cy=z}return z},
L:[function(a){var z
H.f(a,"$isq")
z=this.cy
if(!(z==null))z.C(a)},function(){return this.L(null)},"ae","$1","$0","gaF",0,2,0],
aU:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdz().h(0,this.gbO())
this.a.c.ge0().h(0,this.gbP())
this.a.c.gbB().h(0,this.gbQ())
return!0},
fo:[function(a){H.f(a,"$isq")
if(!J.Q(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbO",4,0,1],
fp:[function(a){var z,y,x,w,v,u,t
a=H.c(H.f(a,"$isq"),"$isbf")
if(!this.y)return
if(this.x){z=a.d.G(0,a.y)
z=new V.I(z.a,z.b)
z=z.B(z)
y=this.r
if(typeof y!=="number")return H.y(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.G(0,a.y)
z=new V.I(y.a,y.b).p(0,2).u(0,z.ga3())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.p()
x=this.e
if(typeof x!=="number")return H.y(x)
y.sM(z*10*x)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=new V.I(x.a,x.b).p(0,2).u(0,z.ga3())
x=this.b
v=w.a
if(typeof v!=="number")return v.K()
u=this.e
if(typeof u!=="number")return H.y(u)
t=this.z
if(typeof t!=="number")return H.y(t)
x.sa2(0,-v*u+t)
this.b.sM(0)
y=y.G(0,a.z)
this.Q=new V.I(y.a,y.b).p(0,2).u(0,z.ga3())}this.ae()},"$1","gbP",4,0,1],
fq:[function(a){var z,y,x
H.f(a,"$isq")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.B(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.p()
x=this.e
if(typeof x!=="number")return H.y(x)
z.sM(y*10*x)
this.ae()}},"$1","gbQ",4,0,1],
aL:function(a,b){var z,y,x,w,v
z=this.ch
y=a.e
if(typeof z!=="number")return z.al()
if(z<y){this.ch=y
x=a.y
this.b.ab(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.ao(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa2:1},iJ:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gl:function(){var z=this.fx
if(z==null){z=D.z()
this.fx=z}return z},
L:[function(a){var z
H.f(a,"$isq")
z=this.fx
if(!(z==null))z.C(a)},function(){return this.L(null)},"ae","$1","$0","gaF",0,2,0],
aU:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gdz().h(0,this.gbO())
this.a.c.ge0().h(0,this.gbP())
this.a.c.gbB().h(0,this.gbQ())
z=this.a.d
y=z.f
if(y==null){y=D.z()
z.f=y
z=y}else z=y
z.h(0,this.gfm())
z=this.a.d
y=z.d
if(y==null){y=D.z()
z.d=y
z=y}else z=y
z.h(0,this.gfn())
z=this.a.e
y=z.b
if(y==null){y=D.z()
z.b=y
z=y}else z=y
z.h(0,this.ghq())
z=this.a.e
y=z.d
if(y==null){y=D.z()
z.d=y
z=y}else z=y
z.h(0,this.ghp())
z=this.a.e
y=z.c
if(y==null){y=D.z()
z.c=y
z=y}else z=y
z.h(0,this.gho())
return!0},
am:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.K()
z=-z}if(this.r){if(typeof y!=="number")return y.K()
y=-y}return new V.I(z,y)},
fo:[function(a){a=H.c(H.f(a,"$isq"),"$isbf")
if(!J.Q(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbO",4,0,1],
fp:[function(a){var z,y,x,w,v,u,t
a=H.c(H.f(a,"$isq"),"$isbf")
if(!this.cx)return
if(this.ch){z=a.d.G(0,a.y)
z=new V.I(z.a,z.b)
z=z.B(z)
y=this.Q
if(typeof y!=="number")return H.y(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.G(0,a.y)
z=this.am(new V.I(y.a,y.b).p(0,2).u(0,z.ga3()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.K()
x=this.y
if(typeof x!=="number")return H.y(x)
y.sM(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.K()
y=this.x
if(typeof y!=="number")return H.y(y)
x.sM(-z*10*y)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=this.am(new V.I(x.a,x.b).p(0,2).u(0,z.ga3()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.y(u)
t=this.cy
if(typeof t!=="number")return H.y(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.y(v)
x=this.db
if(typeof x!=="number")return H.y(x)
t.sa2(0,-u*v+x)
this.b.sM(0)
this.c.sM(0)
y=y.G(0,a.z)
this.dx=this.am(new V.I(y.a,y.b).p(0,2).u(0,z.ga3()))}this.ae()},"$1","gbP",4,0,1],
fq:[function(a){var z,y,x
H.f(a,"$isq")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.B(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.K()
x=this.y
if(typeof x!=="number")return H.y(x)
z.sM(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.K()
z=this.x
if(typeof z!=="number")return H.y(z)
x.sM(-y*10*z)
this.ae()}},"$1","gbQ",4,0,1],
j4:[function(a){if(H.c(H.f(a,"$isq"),"$isdI").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfm",4,0,1],
j5:[function(a){var z,y,x,w,v,u,t
a=H.c(H.f(a,"$isq"),"$isbf")
if(!J.Q(this.d,a.x.b))return
z=a.c
y=a.d
x=y.G(0,a.y)
w=this.am(new V.I(x.a,x.b).p(0,2).u(0,z.ga3()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.y(u)
t=this.cy
if(typeof t!=="number")return H.y(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.y(v)
x=this.db
if(typeof x!=="number")return H.y(x)
t.sa2(0,-u*v+x)
this.b.sM(0)
this.c.sM(0)
y=y.G(0,a.z)
this.dx=this.am(new V.I(y.a,y.b).p(0,2).u(0,z.ga3()))
this.ae()},"$1","gfn",4,0,1],
jB:[function(a){H.f(a,"$isq")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghq",4,0,1],
jA:[function(a){var z,y,x,w,v,u,t
a=H.c(H.f(a,"$isq"),"$iseg")
if(!this.cx)return
if(this.ch){z=a.d.G(0,a.y)
z=new V.I(z.a,z.b)
z=z.B(z)
y=this.Q
if(typeof y!=="number")return H.y(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.G(0,a.y)
z=this.am(new V.I(y.a,y.b).p(0,2).u(0,z.ga3()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.K()
x=this.y
if(typeof x!=="number")return H.y(x)
y.sM(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.K()
y=this.x
if(typeof y!=="number")return H.y(y)
x.sM(-z*10*y)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=this.am(new V.I(x.a,x.b).p(0,2).u(0,z.ga3()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.y(u)
t=this.cy
if(typeof t!=="number")return H.y(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.y(v)
x=this.db
if(typeof x!=="number")return H.y(x)
t.sa2(0,-u*v+x)
this.b.sM(0)
this.c.sM(0)
y=y.G(0,a.z)
this.dx=this.am(new V.I(y.a,y.b).p(0,2).u(0,z.ga3()))}this.ae()},"$1","ghp",4,0,1],
jz:[function(a){var z,y,x
H.f(a,"$isq")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.B(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.K()
x=this.y
if(typeof x!=="number")return H.y(x)
z.sM(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.K()
z=this.x
if(typeof z!=="number")return H.y(z)
x.sM(-y*10*z)
this.ae()}},"$1","gho",4,0,1],
aL:function(a,b){var z,y,x,w,v
z=this.dy
y=a.e
if(typeof z!=="number")return z.al()
if(z<y){this.dy=y
x=a.y
this.c.ab(x)
this.b.ab(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.ao(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.p(0,V.ao(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isa2:1},iK:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gl:function(){var z=this.r
if(z==null){z=D.z()
this.r=z}return z},
L:function(a){var z=this.r
if(!(z==null))z.C(a)},
aU:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.z()
z.e=y
z=y}else z=y
y=this.gfs()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.z()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
j6:[function(a){var z,y,x,w
H.f(a,"$isq")
if(!J.Q(this.b,this.a.b.c))return
H.c(a,"$iscz")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.p()
w=z+y*x
if(z!==w){this.d=w
z=new D.D("zoom",z,w,this,[P.t])
z.b=!0
this.L(z)}},"$1","gfs",4,0,1],
aL:function(a,b){var z,y,x
z=this.e
y=a.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.ao(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa2:1}}],["","",,M,{"^":"",ft:{"^":"K;0e,0f,0a,0b,0c,0d",
gl:function(){var z=this.f
if(z==null){z=D.z()
this.f=z}return z},
V:[function(a){var z
H.f(a,"$isq")
z=this.f
if(!(z==null))z.C(a)},function(){return this.V(null)},"cN","$1","$0","gR",0,2,0],
jt:[function(a,b){var z,y,x,w,v,u,t,s
z=M.ar
H.h(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gR(),w={func:1,ret:-1,args:[D.q]},v=[w],u=0;u<b.length;b.length===y||(0,H.v)(b),++u){t=b[u]
if(t!=null){s=t.gl()
s.toString
H.l(x,w)
if(s.a==null)s.san(H.d([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.bD(a,b,this,[z])
z.b=!0
this.V(z)},"$2","gfS",8,0,20],
ju:[function(a,b){var z,y,x
z=M.ar
H.h(b,"$isk",[z],"$ask")
for(y=b.gN(b),x=this.gR();y.w();)y.gJ().gl().P(0,x)
z=new D.bE(a,b,this,[z])
z.b=!0
this.V(z)},"$2","gfT",8,0,20],
a4:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.ae(z,z.length,0,[H.p(z,0)]);z.w();){y=z.d
if(!(y==null))y.a4(a)}this.e=!1},
$ask:function(){return[M.ar]},
$asK:function(){return[M.ar]},
$isar:1},fv:{"^":"a;0a,0b,0c,0d,0e,0f",
gl:function(){var z=this.f
if(z==null){z=D.z()
this.f=z}return z},
V:[function(a){var z
H.f(a,"$isq")
z=this.f
if(!(z==null))z.C(a)},function(){return this.V(null)},"cN","$1","$0","gR",0,2,0],
saW:function(a){var z,y
if(a==null)a=new X.fU()
z=this.a
if(z!==a){if(z!=null)z.gl().P(0,this.gR())
y=this.a
this.a=a
a.gl().h(0,this.gR())
z=new D.D("camera",y,this.a,this,[X.bM])
z.b=!0
this.V(z)}},
sb4:function(a,b){var z,y
if(b==null)b=X.cq(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gl().P(0,this.gR())
y=this.b
this.b=b
b.gl().h(0,this.gR())
z=new D.D("target",y,this.b,this,[X.cG])
z.b=!0
this.V(z)}},
sb5:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gl().P(0,this.gR())
y=this.c
this.c=a
if(a!=null)a.gl().h(0,this.gR())
z=new D.D("technique",y,this.c,this,[O.bl])
z.b=!0
this.V(z)}},
a4:function(a){a.cs(this.c)
this.b.Y(a)
this.a.Y(a)
this.d.ab(a)
this.d.a4(a)
this.a.ba(a)
this.b.toString
a.cr()},
$isar:1},fJ:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
seZ:function(a,b){this.d=H.h(b,"$isK",[E.ag],"$asK")},
V:[function(a){var z
H.f(a,"$isq")
z=this.x
if(!(z==null))z.C(a)},function(){return this.V(null)},"cN","$1","$0","gR",0,2,0],
jc:[function(a,b){var z,y,x,w,v,u,t,s
z=E.ag
H.h(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gR(),w={func:1,ret:-1,args:[D.q]},v=[w],u=0;u<b.length;b.length===y||(0,H.v)(b),++u){t=b[u]
if(t!=null){if(t.gad()==null){s=new D.bB()
s.san(null)
s.sbT(null)
s.c=null
s.d=0
t.sad(s)}s=t.gad()
s.toString
H.l(x,w)
if(s.a==null)s.san(H.d([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.bD(a,b,this,[z])
z.b=!0
this.V(z)},"$2","gfA",8,0,5],
jd:[function(a,b){var z,y,x
z=E.ag
H.h(b,"$isk",[z],"$ask")
for(y=b.gN(b),x=this.gR();y.w();)y.gJ().gl().P(0,x)
z=new D.bE(a,b,this,[z])
z.b=!0
this.V(z)},"$2","gfB",8,0,5],
saW:function(a){var z,y
if(a==null)a=X.dR(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null)z.gl().P(0,this.gR())
y=this.a
this.a=a
a.gl().h(0,this.gR())
z=new D.D("camera",y,this.a,this,[X.bM])
z.b=!0
this.V(z)}},
sb4:function(a,b){var z,y
if(b==null)b=X.cq(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gl().P(0,this.gR())
y=this.b
this.b=b
b.gl().h(0,this.gR())
z=new D.D("target",y,this.b,this,[X.cG])
z.b=!0
this.V(z)}},
sb5:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gl().P(0,this.gR())
y=this.c
this.c=a
if(a!=null)a.gl().h(0,this.gR())
z=new D.D("technique",y,this.c,this,[O.bl])
z.b=!0
this.V(z)}},
gl:function(){var z=this.x
if(z==null){z=D.z()
this.x=z}return z},
a4:function(a){var z
a.cs(this.c)
this.b.Y(a)
this.a.Y(a)
z=this.c
if(z!=null)z.ab(a)
for(z=this.d.a,z=new J.ae(z,z.length,0,[H.p(z,0)]);z.w();)z.d.ab(a)
for(z=this.d.a,z=new J.ae(z,z.length,0,[H.p(z,0)]);z.w();)z.d.a4(a)
this.a.toString
a.cy.ay()
a.db.ay()
this.b.toString
a.cr()},
$isar:1},ar:{"^":"a;"}}],["","",,A,{"^":"",db:{"^":"a;a,b,c"},fj:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
ik:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.v)(z),++x){w=z[x]
C.b.dB(w.a,w.c)}},
dv:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.v)(z),++x){w=z[x]
C.b.dw(w.a,w.c)}}},dL:{"^":"bY;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aq,0aj,0bl,0dC,0bm,0bn,0dD,0dE,0bo,0bp,0dF,0dG,0bq,0br,0dH,0dI,0bs,0dJ,0dK,0bt,0dL,0dM,0bu,0bv,0bw,0dN,0dO,0bx,0by,0dP,0dQ,0bz,0dR,0cb,0dS,0cc,0dT,0cd,0dU,0ce,0dV,0cf,0dW,0cg,a,b,0c,0d,0e,0f,0r,0x,0y",
seV:function(a){this.r1=H.h(a,"$isb",[A.ak],"$asb")},
seI:function(a){this.cb=H.h(a,"$isb",[A.cM],"$asb")},
seJ:function(a){this.cc=H.h(a,"$isb",[A.cO],"$asb")},
seK:function(a){this.cd=H.h(a,"$isb",[A.cP],"$asb")},
seL:function(a){this.ce=H.h(a,"$isb",[A.cQ],"$asb")},
seM:function(a){this.cf=H.h(a,"$isb",[A.cR],"$asb")},
seN:function(a){this.cg=H.h(a,"$isb",[A.cS],"$asb")},
eA:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.z=a1
z=new P.bH("")
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
a1.hy(z)
a1.hF(z)
a1.hz(z)
a1.hN(z)
a1.hO(z)
a1.hH(z)
a1.hS(z)
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
z=new P.bH("")
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
v.hC(z)
v.hx(z)
v.hA(z)
v.hD(z)
v.hL(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.hJ(z)
v.hK(z)}v.hG(z)
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
p=H.d([],[P.x])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.A(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.hB(z)
v.hI(z)
v.hM(z)
v.hP(z)
v.hQ(z)
v.hR(z)
v.hE(z)}r=z.a+="// === Main ===\n"
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
o=H.d([],[P.x])
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
this.dY(x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a1.fr)this.id=H.c(this.y.k(0,"invViewMat"),"$isak")
if(y)this.dy=H.c(this.y.k(0,"objMat"),"$isak")
if(w)this.fr=H.c(this.y.k(0,"viewObjMat"),"$isak")
this.fy=H.c(this.y.k(0,"projViewObjMat"),"$isak")
if(a1.x2)this.k1=H.c(this.y.k(0,"txt2DMat"),"$iscN")
if(a1.y1)this.k2=H.c(this.y.k(0,"txtCubeMat"),"$isak")
if(a1.y2)this.k3=H.c(this.y.k(0,"colorMat"),"$isak")
this.seV(H.d([],[A.ak]))
y=a1.aq
if(y>0){this.k4=H.f(this.y.k(0,"bendMatCount"),"$isB")
for(m=0;m<y;++m){x=this.r1
w=this.y
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.o(P.n("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.c(l,"$isak"))}}y=a1.a
if(y!==C.c){this.r2=H.c(this.y.k(0,"emissionClr"),"$isA")
switch(y){case C.c:break
case C.f:break
case C.d:this.rx=H.c(this.y.k(0,"emissionTxt"),"$isaa")
this.x1=H.c(this.y.k(0,"nullEmissionTxt"),"$isB")
break
case C.e:this.ry=H.c(this.y.k(0,"emissionTxt"),"$isa3")
this.x1=H.c(this.y.k(0,"nullEmissionTxt"),"$isB")
break}}y=a1.b
if(y!==C.c){this.x2=H.c(this.y.k(0,"ambientClr"),"$isA")
switch(y){case C.c:break
case C.f:break
case C.d:this.y1=H.c(this.y.k(0,"ambientTxt"),"$isaa")
this.aq=H.c(this.y.k(0,"nullAmbientTxt"),"$isB")
break
case C.e:this.y2=H.c(this.y.k(0,"ambientTxt"),"$isa3")
this.aq=H.c(this.y.k(0,"nullAmbientTxt"),"$isB")
break}}y=a1.c
if(y!==C.c){this.aj=H.c(this.y.k(0,"diffuseClr"),"$isA")
switch(y){case C.c:break
case C.f:break
case C.d:this.bl=H.c(this.y.k(0,"diffuseTxt"),"$isaa")
this.bm=H.c(this.y.k(0,"nullDiffuseTxt"),"$isB")
break
case C.e:this.dC=H.c(this.y.k(0,"diffuseTxt"),"$isa3")
this.bm=H.c(this.y.k(0,"nullDiffuseTxt"),"$isB")
break}}y=a1.d
if(y!==C.c){this.bn=H.c(this.y.k(0,"invDiffuseClr"),"$isA")
switch(y){case C.c:break
case C.f:break
case C.d:this.dD=H.c(this.y.k(0,"invDiffuseTxt"),"$isaa")
this.bo=H.c(this.y.k(0,"nullInvDiffuseTxt"),"$isB")
break
case C.e:this.dE=H.c(this.y.k(0,"invDiffuseTxt"),"$isa3")
this.bo=H.c(this.y.k(0,"nullInvDiffuseTxt"),"$isB")
break}}y=a1.e
if(y!==C.c){this.br=H.c(this.y.k(0,"shininess"),"$isL")
this.bp=H.c(this.y.k(0,"specularClr"),"$isA")
switch(y){case C.c:break
case C.f:break
case C.d:this.dF=H.c(this.y.k(0,"specularTxt"),"$isaa")
this.bq=H.c(this.y.k(0,"nullSpecularTxt"),"$isB")
break
case C.e:this.dG=H.c(this.y.k(0,"specularTxt"),"$isa3")
this.bq=H.c(this.y.k(0,"nullSpecularTxt"),"$isB")
break}}switch(a1.f){case C.c:break
case C.f:break
case C.d:this.dH=H.c(this.y.k(0,"bumpTxt"),"$isaa")
this.bs=H.c(this.y.k(0,"nullBumpTxt"),"$isB")
break
case C.e:this.dI=H.c(this.y.k(0,"bumpTxt"),"$isa3")
this.bs=H.c(this.y.k(0,"nullBumpTxt"),"$isB")
break}if(a1.dy){this.dJ=H.c(this.y.k(0,"envSampler"),"$isa3")
this.dK=H.c(this.y.k(0,"nullEnvTxt"),"$isB")
y=a1.r
if(y!==C.c){this.bt=H.c(this.y.k(0,"reflectClr"),"$isA")
switch(y){case C.c:break
case C.f:break
case C.d:this.dL=H.c(this.y.k(0,"reflectTxt"),"$isaa")
this.bu=H.c(this.y.k(0,"nullReflectTxt"),"$isB")
break
case C.e:this.dM=H.c(this.y.k(0,"reflectTxt"),"$isa3")
this.bu=H.c(this.y.k(0,"nullReflectTxt"),"$isB")
break}}y=a1.x
if(y!==C.c){this.bv=H.c(this.y.k(0,"refraction"),"$isL")
this.bw=H.c(this.y.k(0,"refractClr"),"$isA")
switch(y){case C.c:break
case C.f:break
case C.d:this.dN=H.c(this.y.k(0,"refractTxt"),"$isaa")
this.bx=H.c(this.y.k(0,"nullRefractTxt"),"$isB")
break
case C.e:this.dO=H.c(this.y.k(0,"refractTxt"),"$isa3")
this.bx=H.c(this.y.k(0,"nullRefractTxt"),"$isB")
break}}}y=a1.y
if(y!==C.c){this.by=H.c(this.y.k(0,"alpha"),"$isL")
switch(y){case C.c:break
case C.f:break
case C.d:this.dP=H.c(this.y.k(0,"alphaTxt"),"$isaa")
this.bz=H.c(this.y.k(0,"nullAlphaTxt"),"$isB")
break
case C.e:this.dQ=H.c(this.y.k(0,"alphaTxt"),"$isa3")
this.bz=H.c(this.y.k(0,"nullAlphaTxt"),"$isB")
break}}this.seI(H.d([],[A.cM]))
this.seJ(H.d([],[A.cO]))
this.seK(H.d([],[A.cP]))
this.seL(H.d([],[A.cQ]))
this.seM(H.d([],[A.cR]))
this.seN(H.d([],[A.cS]))
if(a1.k2){y=a1.z
if(y>0){this.dR=H.f(this.y.k(0,"dirLightCount"),"$isB")
for(m=0;m<y;++m){x=this.y
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isA")
x=this.y
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isA")
x=this.cb;(x&&C.a).h(x,new A.cM(m,l,k))}}y=a1.Q
if(y>0){this.dS=H.f(this.y.k(0,"pntLightCount"),"$isB")
for(m=0;m<y;++m){x=this.y
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isA")
x=this.y
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isA")
x=this.y
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$isA")
x=this.y
w="pntLights["+m+"].att0"
i=x.j(0,w)
if(i==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$isL")
x=this.y
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(h,"$isL")
x=this.y
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(g,"$isL")
x=this.cc;(x&&C.a).h(x,new A.cO(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.dT=H.f(this.y.k(0,"spotLightCount"),"$isB")
for(m=0;m<y;++m){x=this.y
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isA")
x=this.y
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isA")
x=this.y
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$isA")
x=this.y
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$isA")
x=this.y
w="spotLights["+m+"].cutoff"
h=x.j(0,w)
if(h==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(h,"$isL")
x=this.y
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(g,"$isL")
x=this.y
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(f,"$isL")
x=this.y
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(e,"$isL")
x=this.y
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(d,"$isL")
x=this.cd;(x&&C.a).h(x,new A.cP(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.dU=H.f(this.y.k(0,"txtDirLightCount"),"$isB")
for(m=0;m<y;++m){x=this.y
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isA")
x=this.y
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isA")
x=this.y
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$isA")
x=this.y
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$isA")
x=this.y
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(h,"$isA")
x=this.y
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(g,"$isB")
x=this.y
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(f,"$isaa")
x=this.ce;(x&&C.a).h(x,new A.cQ(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.dV=H.f(this.y.k(0,"txtPntLightCount"),"$isB")
for(m=0;m<y;++m){x=this.y
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isA")
x=this.y
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isA")
x=this.y
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$iscN")
x=this.y
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$isA")
x=this.y
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(h,"$isB")
x=this.y
w="txtPntLights["+m+"].att0"
g=x.j(0,w)
if(g==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(g,"$isL")
x=this.y
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(f,"$isL")
x=this.y
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(e,"$isL")
x=this.y
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(d,"$isa3")
x=this.cf;(x&&C.a).h(x,new A.cR(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.dW=H.f(this.y.k(0,"txtSpotLightCount"),"$isB")
for(m=0;m<y;++m){x=this.y
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isA")
x=this.y
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isA")
x=this.y
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$isA")
x=this.y
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$isA")
x=this.y
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(h,"$isA")
x=this.y
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(g,"$isB")
x=this.y
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(f,"$isA")
x=this.y
w="txtSpotLights["+m+"].tuScalar"
e=x.j(0,w)
if(e==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(e,"$isL")
x=this.y
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(d,"$isL")
x=this.y
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(c,"$isL")
x=this.y
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(b,"$isL")
x=this.y
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(a,"$isL")
x=this.y
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(a0,"$isaa")
x=this.cg;(x&&C.a).h(x,new A.cS(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
af:function(a,b,c){if(c==null||!c.d)C.b.F(b.a,b.d,1)
else{a.eq(c)
C.b.F(b.a,b.d,0)}},
a6:function(a,b,c){C.b.F(b.a,b.d,1)},
m:{
hj:function(a,b){var z,y
z=a.aj
y=new A.dL(b,z)
y.cJ(b,z)
y.eA(a,b)
return y}}},hm:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aq,aj,bl",
hy:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aq+"];\n"
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
hF:function(a){var z
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
hz:function(a){var z
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
hN:function(a){var z,y
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
hO:function(a){var z,y
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
hH:function(a){var z
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
hS:function(a){var z
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
z+="uniform int null"+(c[0].toUpperCase()+C.j.cF(c,1))+"Txt;\n"
a.a=z
if(b===C.d)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
hC:function(a){var z,y
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
hx:function(a){var z,y
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
hA:function(a){var z,y
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
hD:function(a){var z,y
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
hL:function(a){var z,y
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
hG:function(a){var z,y
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
hJ:function(a){var z,y
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
hK:function(a){var z,y
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
hB:function(a){var z,y
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
hI:function(a){var z,y
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
hM:function(a){var z,y
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
hP:function(a){var z,y,x
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
hQ:function(a){var z,y,x
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
hR:function(a){var z,y,x
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
hE:function(a){var z
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
i:function(a){return this.aj}},cM:{"^":"a;a,b,c"},cQ:{"^":"a;a,b,c,d,e,f,r,x"},cO:{"^":"a;a,b,c,d,e,f,r"},cR:{"^":"a;a,b,c,d,e,f,r,x,y,z"},cP:{"^":"a;a,b,c,d,e,f,r,x,y,z"},cS:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},bY:{"^":"cg;",
cJ:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dY:function(a,b){var z,y,x
this.c=a
this.d=b
this.e=this.d0(a,35633)
this.f=this.d0(this.d,35632)
z=this.a
y=z.createProgram()
this.r=y
C.b.dl(z,y,this.e)
C.b.dl(z,this.r,this.f)
C.b.iu(z,this.r)
if(!H.f_(C.b.bD(z,this.r,35714))){x=C.b.ej(z,this.r)
C.b.ia(z,this.r)
H.o(P.n("Failed to link shader: "+H.e(x)))}this.hc()
this.he()},
Y:function(a){C.b.cu(a.a,this.r)
this.x.ik()},
d0:function(a,b){var z,y,x
z=this.a
y=C.b.i8(z,b)
C.b.es(z,y,a)
C.b.i3(z,y)
if(!H.f_(C.b.em(z,y,35713))){x=C.b.el(z,y)
C.b.ib(z,y)
throw H.i(P.n("Error compiling shader '"+H.e(y)+"': "+H.e(x)))}return y},
hc:function(){var z,y,x,w,v,u
z=H.d([],[A.db])
y=this.a
x=H.U(C.b.bD(y,this.r,35721))
if(typeof x!=="number")return H.y(x)
w=0
for(;w<x;++w){v=C.b.ef(y,this.r,w)
u=C.b.eh(y,this.r,v.name)
C.a.h(z,new A.db(y,v.name,u))}this.x=new A.fj(z)},
he:function(){var z,y,x,w,v,u
z=H.d([],[A.a0])
y=this.a
x=H.U(C.b.bD(y,this.r,35718))
if(typeof x!=="number")return H.y(x)
w=0
for(;w<x;++w){v=C.b.eg(y,this.r,w)
u=C.b.en(y,this.r,v.name)
C.a.h(z,this.i9(v.type,v.size,v.name,u))}this.y=new A.iA(z)},
aD:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.B(z,y,b,c)
else return A.cL(z,y,b,a,c)},
f1:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.aa(z,y,b,c)
else return A.cL(z,y,b,a,c)},
f2:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.a3(z,y,b,c)
else return A.cL(z,y,b,a,c)},
bh:function(a,b){return new P.eE(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
i9:function(a,b,c,d){switch(a){case 5120:return this.aD(b,c,d)
case 5121:return this.aD(b,c,d)
case 5122:return this.aD(b,c,d)
case 5123:return this.aD(b,c,d)
case 5124:return this.aD(b,c,d)
case 5125:return this.aD(b,c,d)
case 5126:return new A.L(this.a,this.r,c,d)
case 35664:return new A.iv(this.a,this.r,c,d)
case 35665:return new A.A(this.a,this.r,c,d)
case 35666:return new A.iy(this.a,this.r,c,d)
case 35667:return new A.iw(this.a,this.r,c,d)
case 35668:return new A.ix(this.a,this.r,c,d)
case 35669:return new A.iz(this.a,this.r,c,d)
case 35674:return new A.iC(this.a,this.r,c,d)
case 35675:return new A.cN(this.a,this.r,c,d)
case 35676:return new A.ak(this.a,this.r,c,d)
case 35678:return this.f1(b,c,d)
case 35680:return this.f2(b,c,d)
case 35670:throw H.i(this.bh("BOOL",c))
case 35671:throw H.i(this.bh("BOOL_VEC2",c))
case 35672:throw H.i(this.bh("BOOL_VEC3",c))
case 35673:throw H.i(this.bh("BOOL_VEC4",c))
default:throw H.i(P.n("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}},bN:{"^":"a;a,b",
i:function(a){return this.b}},e2:{"^":"bY;0z,0Q,0ch,0cx,0cy,0db,a,b,0c,0d,0e,0f,0r,0x,0y"},a0:{"^":"a;"},iA:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
k:function(a,b){var z=this.j(0,b)
if(z==null)throw H.i(P.n("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.H()},
im:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.v)(z),++w)x+=z[w].i(0)+a
return x},
H:function(){return this.im("\n")}},B:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform1i: "+H.e(this.c)}},iw:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform2i: "+H.e(this.c)}},ix:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform3i: "+H.e(this.c)}},iz:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform4i: "+H.e(this.c)}},iu:{"^":"a0;0e,0f,a,b,c,d",
shv:function(a){this.e=H.h(a,"$isb",[P.u],"$asb")},
i:function(a){return"Uniform1iv: "+H.e(this.c)},
m:{
cL:function(a,b,c,d,e){var z=new A.iu(a,b,c,e)
z.f=d
z.shv(P.ha(d,0,!1,P.u))
return z}}},L:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform1f: "+H.e(this.c)}},iv:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform2f: "+H.e(this.c)}},A:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform3f: "+H.e(this.c)}},iy:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform4f: "+H.e(this.c)}},iC:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}},cN:{"^":"a0;a,b,c,d",
ac:function(a){var z=new Float32Array(H.bt(H.h(a,"$isb",[P.t],"$asb")))
C.b.ea(this.a,this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.e(this.c)}},ak:{"^":"a0;a,b,c,d",
ac:function(a){var z=new Float32Array(H.bt(H.h(a,"$isb",[P.t],"$asb")))
C.b.eb(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.e(this.c)}},aa:{"^":"a0;a,b,c,d",
eq:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)C.b.F(y,x,0)
else C.b.F(y,x,a.a)},
i:function(a){return"UniformSampler2D: "+H.e(this.c)}},a3:{"^":"a0;a,b,c,d",
er:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)C.b.F(y,x,0)
else C.b.F(y,x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}}],["","",,F,{"^":"",
c3:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
br:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.J(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.J(t+h,s+f,r+g)
z.b=q
p=new V.J(t-h,s-f,r-g)
z.c=p
o=new V.J(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.c3(y)
k=F.c3(z.b)
j=F.ki(d,e,new F.jF(z,F.c3(z.c),F.c3(z.d),k,l,c),b)
if(j!=null)a.iz(j)},
ki:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.at,P.t,P.t]})
if(a<1)return
if(b<1)return
z=F.cC()
y=H.d([],[F.at])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.c0(null,null,new V.aI(u,0,0,1),null,null,new V.Z(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.c8(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.c0(null,null,new V.aI(o,n,m,1),null,null,new V.Z(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.c8(d))}}z.d.hU(a+1,b+1,y)
return z},
jF:{"^":"r:30;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cm(z.b,b).cm(z.d.cm(z.c,b),c)
z=new V.a8(y.a,y.b,y.c)
if(!J.Q(a.f,z)){a.f=z
z=a.a
if(z!=null)z.a_()}a.siW(y.u(0,Math.sqrt(y.B(y))))
z=1-b
x=1-c
x=new V.bj(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.Q(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.a_()}}},
Y:{"^":"a;0a,0b,0c,0d,0e",
eU:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.bI()
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.dZ())return
return v.u(0,Math.sqrt(v.B(v)))},
eY:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.G(0,y)
z=new V.J(z.a,z.b,z.c)
v=z.u(0,Math.sqrt(z.B(z)))
z=w.G(0,y)
z=new V.J(z.a,z.b,z.c)
z=v.aX(z.u(0,Math.sqrt(z.B(z))))
return z.u(0,Math.sqrt(z.B(z)))},
c6:function(){if(this.d!=null)return!0
var z=this.eU()
if(z==null){z=this.eY()
if(z==null)return!1}this.d=z
this.a.a.a_()
return!0},
eT:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=V.bI()
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.dZ())return
return v.u(0,Math.sqrt(v.B(v)))},
eX:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.m.$2(n,0)){z=r.G(0,u)
z=new V.J(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.B(z)))
if(o.a-p.a<0)m=m.K(0)}else{l=(z-q.b)/n
z=r.G(0,u)
z=new V.a8(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).G(0,x)
z=new V.J(z.a,z.b,z.c)
m=z.u(0,Math.sqrt(z.B(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.K(0)}z=this.d
if(z!=null){k=z.u(0,Math.sqrt(z.B(z)))
z=k.aX(m)
z=z.u(0,Math.sqrt(z.B(z))).aX(k)
m=z.u(0,Math.sqrt(z.B(z)))}return m},
c4:function(){if(this.e!=null)return!0
var z=this.eT()
if(z==null){z=this.eX()
if(z==null)return!1}this.e=z
this.a.a.a_()
return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
v:function(a){var z,y
z=this.a
if(z==null||this.b==null||this.c==null)return a+"disposed"
y=a+C.j.aa(J.a6(z.e),0)+", "+C.j.aa(J.a6(this.b.e),0)+", "+C.j.aa(J.a6(this.c.e),0)+" {"
z=this.d
y=z!=null?y+(z.i(0)+", "):y+"-, "
z=this.e
return z!=null?y+(z.i(0)+"}"):y+"-}"},
H:function(){return this.v("")},
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
z.a.a.a_()
return z}}},
bd:{"^":"a;0a,0b",
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
v:function(a){var z=this.a
if(z==null||this.b==null)return a+"disposed"
return a+C.j.aa(J.a6(z.e),0)+", "+C.j.aa(J.a6(this.b.e),0)},
H:function(){return this.v("")},
m:{
h4:function(a,b){var z,y,x
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
z.a.a.a_()
return z}}},
bG:{"^":"a;0a",
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
v:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.j.aa(J.a6(z.e),0)},
H:function(){return this.v("")}},
e1:{"^":"a;0a,0b,0c,0d,0e",
gl:function(){var z=this.e
if(z==null){z=D.z()
this.e=z}return z},
iz:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.W()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.v)(z),++w){v=z[w]
this.a.h(0,v.i7())}this.a.W()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.v)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.W()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.j(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.bG()
if(r.a==null)H.o(P.n("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.C(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.v)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.W()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.j(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.W()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.j(s,t)
o=s[t]
t=this.c.a
t.a.h(0,p)
t.a.h(0,o)
F.h4(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.v)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.W()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.j(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.W()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.j(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.W()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.j(t,s)
m=t[s]
s=this.d.a
s.a.h(0,p)
s.a.h(0,o)
s.a.h(0,m)
F.b8(p,o,m)}z=this.e
if(!(z==null))z.az()},
aw:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aw()||!1
if(!this.a.aw())y=!1
z=this.e
if(!(z==null))z.az()
return y},
dq:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if((x&$.$get$aW().a)!==0)++w
if((x&$.$get$az().a)!==0)++w
v=b.gcE(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.t
t=H.d(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.d(y,[Z.de])
for(r=0,q=0;q<w;++q){p=b.hW(q)
o=p.gcE(p)
C.a.a0(s,q,new Z.de(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.j(y,n)
m=y[n].iv(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.a0(t,l,m[k]);++l}}r+=o}H.h(t,"$isb",[x],"$asb")
y=a.a
j=y.createBuffer()
C.b.ao(y,34962,j)
C.b.dn(y,34962,new Float32Array(H.bt(t)),35044)
C.b.ao(y,34962,null)
i=new Z.cj(new Z.eB(34962,j),s,b)
i.sfh(H.d([],[Z.bC]))
if(this.b.b.length!==0){x=P.u
h=H.d([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.W()
C.a.h(h,g.e)}f=Z.cU(y,34963,H.h(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bC(0,h.length,f))}if(this.c.b.length!==0){x=P.u
h=H.d([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.W()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.j(g,q)
g=g[q].b
g.a.a.W()
C.a.h(h,g.e)}f=Z.cU(y,34963,H.h(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bC(1,h.length,f))}if(this.d.b.length!==0){x=P.u
h=H.d([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.W()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.j(g,q)
g=g[q].b
g.a.a.W()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.j(g,q)
g=g[q].c
g.a.a.W()
C.a.h(h,g.e)}f=Z.cU(y,34963,H.h(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bC(4,h.length,f))}return i},
i:function(a){var z=H.d([],[P.x])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.v("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.v("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.v("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.v("   "))}return C.a.A(z,"\n")},
aK:function(a){var z=this.e
if(!(z==null))z.C(a)},
a_:function(){return this.aK(null)},
$iskC:1,
m:{
cC:function(){var z,y
z=new F.e1()
y=new F.iN(z)
y.b=!1
y.shw(H.d([],[F.at]))
z.a=y
y=new F.i0(z)
y.sbU(H.d([],[F.bG]))
z.b=y
y=new F.i_(z)
y.sfi(H.d([],[F.bd]))
z.c=y
y=new F.hZ(z)
y.sf7(H.d([],[F.Y]))
z.d=y
z.e=null
return z}}},
hZ:{"^":"a;a,0b",
sf7:function(a){this.b=H.h(a,"$isb",[F.Y],"$asb")},
hT:function(a){var z,y,x,w,v,u
H.h(a,"$isb",[F.at],"$asb")
z=H.d([],[F.Y])
y=a[0]
for(x=this.a,w=2;w<4;++w){v=a[w-1]
u=a[w]
x.a.h(0,y)
x.a.h(0,v)
x.a.h(0,u)
C.a.h(z,F.b8(y,v,u))}return z},
hU:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.h(c,"$isb",[F.at],"$asb")
z=H.d([],[F.Y])
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
aw:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.v)(z),++w)if(!z[w].c6())x=!1
return x},
c5:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.v)(z),++w)if(!z[w].c4())x=!1
return x},
i:function(a){return this.H()},
v:function(a){var z,y,x,w
z=H.d([],[P.x])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.v)(y),++w)C.a.h(z,y[w].v(a))
return C.a.A(z,"\n")},
H:function(){return this.v("")}},
i_:{"^":"a;a,0b",
sfi:function(a){this.b=H.h(a,"$isb",[F.bd],"$asb")},
gn:function(a){return this.b.length},
i:function(a){return this.H()},
v:function(a){var z,y,x,w
z=H.d([],[P.x])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.j(w,x)
C.a.h(z,w[x].v(a+(""+x+". ")))}return C.a.A(z,"\n")},
H:function(){return this.v("")}},
i0:{"^":"a;a,0b",
sbU:function(a){this.b=H.h(a,"$isb",[F.bG],"$asb")},
gn:function(a){return this.b.length},
i:function(a){return this.H()},
v:function(a){var z,y,x,w
z=H.d([],[P.x])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.v)(y),++w)C.a.h(z,y[w].v(a))
return C.a.A(z,"\n")},
H:function(){return this.v("")}},
at:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
c8:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.c0(this.cx,x,u,z,y,w,v,a,t)},
i7:function(){return this.c8(null)},
siW:function(a){var z
if(!J.Q(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a_()}},
iv:function(a){var z,y
if(a.t(0,$.$get$al())){z=this.f
y=[P.t]
if(z==null)return H.d([0,0,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(a.t(0,$.$get$aB())){z=this.r
y=[P.t]
if(z==null)return H.d([0,1,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(a.t(0,$.$get$aA())){z=this.x
y=[P.t]
if(z==null)return H.d([0,0,1],y)
else return H.d([z.a,z.b,z.c],y)}else if(a.t(0,$.$get$aC())){z=this.y
y=[P.t]
if(z==null)return H.d([0,0],y)
else return H.d([z.a,z.b],y)}else if(a.t(0,$.$get$aD())){z=this.z
y=[P.t]
if(z==null)return H.d([0,0,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(a.t(0,$.$get$bn())){z=this.Q
y=[P.t]
if(z==null)return H.d([1,1,1],y)
else return H.d([z.a,z.b,z.c],y)}else if(a.t(0,$.$get$bo())){z=this.Q
y=[P.t]
if(z==null)return H.d([1,1,1,1],y)
else return H.d([z.a,z.b,z.c,z.d],y)}else if(a.t(0,$.$get$aW()))return H.d([this.ch],[P.t])
else if(a.t(0,$.$get$az())){z=this.cx
y=[P.t]
if(z==null)return H.d([-1,-1,-1,-1],y)
else return H.d([z.a,z.b,z.c,z.d],y)}else return H.d([],[P.t])},
c6:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bI()
this.d.a8(0,new F.iU(z))
z=z.a
this.r=z.u(0,Math.sqrt(z.B(z)))
z=this.a
if(z!=null){z.a_()
z=this.a.e
if(!(z==null))z.az()}return!0},
c4:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bI()
this.d.a8(0,new F.iT(z))
z=z.a
this.x=z.u(0,Math.sqrt(z.B(z)))
z=this.a
if(z!=null){z.a_()
z=this.a.e
if(!(z==null))z.az()}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
v:function(a){var z,y,x
z=H.d([],[P.x])
C.a.h(z,C.j.aa(J.a6(this.e),0))
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
H:function(){return this.v("")},
m:{
c0:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.at()
y=new F.iS(z)
y.sbU(H.d([],[F.bG]))
z.b=y
y=new F.iR(z)
x=[F.bd]
y.sfj(H.d([],x))
y.sfk(H.d([],x))
z.c=y
y=new F.iO(z)
x=[F.Y]
y.sf8(H.d([],x))
y.sf9(H.d([],x))
y.sfa(H.d([],x))
z.d=y
h=$.$get$ey()
z.e=0
y=$.$get$al()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aB().a)!==0?e:null
z.x=(x&$.$get$aA().a)!==0?b:null
z.y=(x&$.$get$aC().a)!==0?f:null
z.z=(x&$.$get$aD().a)!==0?g:null
z.Q=(x&$.$get$ez().a)!==0?c:null
z.ch=(x&$.$get$aW().a)!==0?i:0
z.cx=(x&$.$get$az().a)!==0?a:null
return z}}},
iU:{"^":"r:6;a",
$1:function(a){var z,y
H.f(a,"$isY")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
iT:{"^":"r:6;a",
$1:function(a){var z,y
H.f(a,"$isY")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
iN:{"^":"a;a,0b,0c",
shw:function(a){this.c=H.h(a,"$isb",[F.at],"$asb")},
W:function(){},
h:function(a,b){var z,y
z=b.a
if(z!=null){if(z===this.a)return!1
throw H.i(P.n("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
y=this.a
b.a=y
C.a.h(z,b)
y.a_()
return!0},
hV:function(a,b,c,d,e,f,g,h,i){var z=F.c0(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bj:function(a,b,c,d,e,f){return this.hV(a,null,b,c,null,d,e,f,0)},
gn:function(a){return this.c.length},
aw:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.v)(z),++x)z[x].c6()
return!0},
c5:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.v)(z),++x)z[x].c4()
return!0},
i_:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.v)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.u(0,Math.sqrt(u*u+t*t+s*s))
if(!J.Q(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.C(null)}}}}return!0},
i:function(a){return this.H()},
v:function(a){var z,y,x,w
this.W()
z=H.d([],[P.x])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.v)(y),++w)C.a.h(z,y[w].v(a))
return C.a.A(z,"\n")},
H:function(){return this.v("")}},
iO:{"^":"a;a,0b,0c,0d",
sf8:function(a){this.b=H.h(a,"$isb",[F.Y],"$asb")},
sf9:function(a){this.c=H.h(a,"$isb",[F.Y],"$asb")},
sfa:function(a){this.d=H.h(a,"$isb",[F.Y],"$asb")},
gn:function(a){return this.b.length+this.c.length+this.d.length},
a8:function(a,b){H.l(b,{func:1,ret:-1,args:[F.Y]})
C.a.a8(this.b,b)
C.a.a8(this.c,new F.iP(this,b))
C.a.a8(this.d,new F.iQ(this,b))},
i:function(a){return this.H()},
v:function(a){var z,y,x,w
z=H.d([],[P.x])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.v)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.v)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.v)(y),++w)C.a.h(z,y[w].v(a))
return C.a.A(z,"\n")},
H:function(){return this.v("")}},
iP:{"^":"r:6;a,b",
$1:function(a){H.f(a,"$isY")
if(!J.Q(a.a,this.a))this.b.$1(a)}},
iQ:{"^":"r:6;a,b",
$1:function(a){var z
H.f(a,"$isY")
z=this.a
if(!J.Q(a.a,z)&&!J.Q(a.b,z))this.b.$1(a)}},
iR:{"^":"a;a,0b,0c",
sfj:function(a){this.b=H.h(a,"$isb",[F.bd],"$asb")},
sfk:function(a){this.c=H.h(a,"$isb",[F.bd],"$asb")},
gn:function(a){return this.b.length+this.c.length},
i:function(a){return this.H()},
v:function(a){var z,y,x,w
z=H.d([],[P.x])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.v)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.v)(y),++w)C.a.h(z,y[w].v(a))
return C.a.A(z,"\n")},
H:function(){return this.v("")}},
iS:{"^":"a;a,0b",
sbU:function(a){this.b=H.h(a,"$isb",[F.bG],"$asb")},
gn:function(a){return this.b.length},
i:function(a){return this.H()},
v:function(a){var z,y,x,w
z=H.d([],[P.x])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.v)(y),++w)C.a.h(z,y[w].v(a))
return C.a.A(z,"\n")},
H:function(){return this.v("")}}}],["","",,O,{"^":"",hi:{"^":"bl;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
seW:function(a){this.e=H.h(a,"$isK",[V.ah],"$asK")},
gl:function(){var z=this.dy
if(z==null){z=D.z()
this.dy=z}return z},
T:[function(a){var z
H.f(a,"$isq")
z=this.dy
if(!(z==null))z.C(a)},function(){return this.T(null)},"cO","$1","$0","gaB",0,2,0],
h4:[function(a){H.f(a,"$isq")
this.a=null
this.T(a)},function(){return this.h4(null)},"jy","$1","$0","gh3",0,2,0],
j9:[function(a,b){var z=V.ah
z=new D.bD(a,H.h(b,"$isk",[z],"$ask"),this,[z])
z.b=!0
this.T(z)},"$2","gfv",8,0,21],
ja:[function(a,b){var z=V.ah
z=new D.bE(a,H.h(b,"$isk",[z],"$ask"),this,[z])
z.b=!0
this.T(z)},"$2","gfw",8,0,21],
cY:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
z=this.dx
y=C.h.Z(z.e.length+3,4)*4
x=C.h.Z(z.f.length+3,4)*4
w=C.h.Z(z.r.length+3,4)*4
v=C.h.Z(z.x.length+3,4)*4
u=C.h.Z(z.y.length+3,4)*4
t=C.h.Z(z.z.length+3,4)*4
s=C.h.Z(this.e.a.length+3,4)*4
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
a2=$.$get$al()
if(e){g=$.$get$aB()
a2=new Z.aV(a2.a|g.a)}if(d){g=$.$get$aA()
a2=new Z.aV(a2.a|g.a)}if(c){g=$.$get$aC()
a2=new Z.aV(a2.a|g.a)}if(b){g=$.$get$aD()
a2=new Z.aV(a2.a|g.a)}if(a0){g=$.$get$az()
a2=new Z.aV(a2.a|g.a)}return new A.hm(z,r,q,p,o,n,m,l,k,y,x,w,v,u,t,y+x+w+v+u+t,i,i,a,a1,!0,!1,!1,h,a,f,e,d,c,b,a0,!1,!1,!1,s,j.charCodeAt(0)==0?j:j,a2)},
O:function(a,b){H.h(a,"$isb",[T.bZ],"$asb")
if(b!=null)if(!C.a.aI(a,b)){b.a=a.length
C.a.h(a,b)}},
ab:function(a){var z
for(z=this.dx.a,z=new J.ae(z,z.length,0,[H.p(z,0)]);z.w();)z.d.ab(a)},
e4:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.cY()
y=H.f(a.fr.j(0,z.aj),"$isdL")
if(y==null){y=A.hj(z,a.a)
a.dk(y)}this.a=y
b.e=null
z=y}x=z.z
w=x.bl
z=b.e
if(!(z instanceof Z.cj)){b.e=null
z=null}if(z==null||!z.d.t(0,w)){z=x.r1
if(z)b.d.aw()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.d
u.d.c5()
u.a.c5()
u=u.e
if(!(u==null))u.az()}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.a.i_()
t=t.e
if(!(t==null))t.az()}r=b.d.dq(new Z.eC(a.a),w)
r.ax($.$get$al()).e=this.a.Q.c
if(z)r.ax($.$get$aB()).e=this.a.cx.c
if(v)r.ax($.$get$aA()).e=this.a.ch.c
if(x.rx)r.ax($.$get$aC()).e=this.a.cy.c
if(u)r.ax($.$get$aD()).e=this.a.db.c
if(x.x1)r.ax($.$get$az()).e=this.a.dx.c
b.e=r}z=T.bZ
q=H.d([],[z])
this.a.Y(a)
if(x.fx){v=this.a
u=a.dx.gS()
v=v.dy
v.toString
v.ac(u.a5(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db.gS().p(0,a.dx.gS())
a.cx=u}v=v.fr
v.toString
v.ac(u.a5(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.giM().p(0,a.dx.gS())
a.ch=u}v=v.fy
v.toString
v.ac(u.a5(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.k1
v.toString
v.ac(C.o.a5(u,!0))}if(x.y1){v=this.a
u=this.c
v=v.k2
v.toString
v.ac(C.o.a5(u,!0))}if(x.y2){v=this.a
u=this.d
v=v.k3
v.toString
v.ac(C.o.a5(u,!0))}if(x.aq>0){p=this.e.a.length
v=this.a.k4
C.b.F(v.a,v.d,p)
for(v=[P.t],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.j(t,o)
t=t[o]
u.toString
H.f(t,"$isah")
u=u.r1
if(o>=u.length)return H.j(u,o)
u=u[o]
n=new Float32Array(H.bt(H.h(t.a5(0,!0),"$isb",v,"$asb")))
C.b.eb(u.a,u.d,!1,n)}}switch(x.a){case C.c:break
case C.f:v=this.a
u=this.f.f
v=v.r2
v.toString
t=u.a
s=u.b
u=u.c
C.b.q(v.a,v.d,t,s,u)
break
case C.d:this.O(q,this.f.d)
v=this.a
u=this.f.d
v.af(v.rx,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
t=v.a
s=v.b
v=v.c
C.b.q(u.a,u.d,t,s,v)
break
case C.e:this.O(q,this.f.e)
v=this.a
u=this.f.e
v.a6(v.ry,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
t=v.a
s=v.b
v=v.c
C.b.q(u.a,u.d,t,s,v)
break}if(x.k2){switch(x.b){case C.c:break
case C.f:v=this.a
u=this.r.f
v=v.x2
v.toString
t=u.a
s=u.b
u=u.c
C.b.q(v.a,v.d,t,s,u)
break
case C.d:this.O(q,this.r.d)
v=this.a
u=this.r.d
v.af(v.y1,v.aq,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
C.b.q(u.a,u.d,t,s,v)
break
case C.e:this.O(q,this.r.e)
v=this.a
u=this.r.e
v.a6(v.y2,v.aq,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
C.b.q(u.a,u.d,t,s,v)
break}switch(x.c){case C.c:break
case C.f:v=this.a
u=this.x.f
v=v.aj
v.toString
t=u.a
s=u.b
u=u.c
C.b.q(v.a,v.d,t,s,u)
break
case C.d:this.O(q,this.x.d)
v=this.a
u=this.x.d
v.af(v.bl,v.bm,u)
u=this.a
v=this.x.f
u=u.aj
u.toString
t=v.a
s=v.b
v=v.c
C.b.q(u.a,u.d,t,s,v)
break
case C.e:this.O(q,this.x.e)
v=this.a
u=this.x.e
v.a6(v.dC,v.bm,u)
u=this.a
v=this.x.f
u=u.aj
u.toString
t=v.a
s=v.b
v=v.c
C.b.q(u.a,u.d,t,s,v)
break}switch(x.d){case C.c:break
case C.f:v=this.a
u=this.y.f
v=v.bn
v.toString
t=u.a
s=u.b
u=u.c
C.b.q(v.a,v.d,t,s,u)
break
case C.d:this.O(q,this.y.d)
v=this.a
u=this.y.d
v.af(v.dD,v.bo,u)
u=this.a
v=this.y.f
u=u.bn
u.toString
t=v.a
s=v.b
v=v.c
C.b.q(u.a,u.d,t,s,v)
break
case C.e:this.O(q,this.y.e)
v=this.a
u=this.y.e
v.a6(v.dE,v.bo,u)
u=this.a
v=this.y.f
u=u.bn
u.toString
t=v.a
s=v.b
v=v.c
C.b.q(u.a,u.d,t,s,v)
break}switch(x.e){case C.c:break
case C.f:v=this.a
u=this.z.f
v=v.bp
v.toString
t=u.a
s=u.b
u=u.c
C.b.q(v.a,v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.br
C.b.E(u.a,u.d,s)
break
case C.d:this.O(q,this.z.d)
v=this.a
u=this.z.d
v.af(v.dF,v.bq,u)
u=this.a
v=this.z.f
u=u.bp
u.toString
t=v.a
s=v.b
v=v.c
C.b.q(u.a,u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.br
C.b.E(v.a,v.d,s)
break
case C.e:this.O(q,this.z.e)
v=this.a
u=this.z.e
v.a6(v.dG,v.bq,u)
u=this.a
v=this.z.f
u=u.bp
u.toString
t=v.a
s=v.b
v=v.c
C.b.q(u.a,u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.br
C.b.E(v.a,v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.dR
C.b.F(v.a,v.d,p)
m=a.db.gS()
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.v)(v),++k){j=v[k]
t=this.a.cb
if(l>=t.length)return H.j(t,l)
i=t[l]
t=m.e9(j.gbk(j))
s=t.a
h=t.b
g=t.c
g=t.u(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
s=g.a
t=g.b
g=g.c
C.b.q(h.a,h.d,s,t,g)
g=j.gap(j)
t=i.c
s=g.gb2()
h=g.gaM()
g=g.gaV()
C.b.q(t.a,t.d,s,h,g);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.dS
C.b.F(v.a,v.d,p)
m=a.db.gS()
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.v)(v),++k){j=v[k]
t=this.a.cc
if(l>=t.length)return H.j(t,l)
i=t[l]
t=j.gb1(j)
s=i.b
h=t.gcw(t)
g=t.gcz(t)
t=t.gcA(t)
C.b.q(s.a,s.d,h,g,t)
t=m.b9(j.gb1(j))
g=i.c
C.b.q(g.a,g.d,t.a,t.b,t.c)
t=j.gap(j)
g=i.d
h=t.gb2()
s=t.gaM()
t=t.gaV()
C.b.q(g.a,g.d,h,s,t)
t=j.gc_()
s=i.e
C.b.E(s.a,s.d,t)
t=j.gc0()
s=i.f
C.b.E(s.a,s.d,t)
t=j.gc1()
s=i.r
C.b.E(s.a,s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.dT
C.b.F(v.a,v.d,p)
m=a.db.gS()
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.v)(v),++k){j=v[k]
t=this.a.cd
if(l>=t.length)return H.j(t,l)
i=t[l]
t=j.gb1(j)
s=i.b
h=t.gcw(t)
g=t.gcz(t)
t=t.gcA(t)
C.b.q(s.a,s.d,h,g,t)
t=j.gbk(j).jE()
g=i.c
h=t.gag(t)
s=t.gah(t)
t=t.gai()
C.b.q(g.a,g.d,h,s,t)
t=m.b9(j.gb1(j))
s=i.d
C.b.q(s.a,s.d,t.a,t.b,t.c)
t=j.gap(j)
s=i.e
h=t.gb2()
g=t.gaM()
t=t.gaV()
C.b.q(s.a,s.d,h,g,t)
t=j.gjD()
g=i.f
C.b.E(g.a,g.d,t)
t=j.gjC()
g=i.r
C.b.E(g.a,g.d,t)
t=j.gc_()
g=i.x
C.b.E(g.a,g.d,t)
t=j.gc0()
g=i.y
C.b.E(g.a,g.d,t)
t=j.gc1()
g=i.z
C.b.E(g.a,g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.dU
C.b.F(v.a,v.d,p)
m=a.db.gS()
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.v)(v),++k){j=v[k]
s=this.a.ce
if(l>=s.length)return H.j(s,l)
i=s[l]
s=j.gb6()
H.h(q,"$isb",t,"$asb")
if(!C.a.aI(q,s)){s.saR(q.length)
C.a.h(q,s)}s=j.gbk(j)
h=i.d
g=s.gag(s)
f=s.gah(s)
s=s.gai()
C.b.q(h.a,h.d,g,f,s)
s=j.gbB()
f=i.b
g=s.gag(s)
h=s.gah(s)
s=s.gai()
C.b.q(f.a,f.d,g,h,s)
s=j.gb3(j)
h=i.c
g=s.gag(s)
f=s.gah(s)
s=s.gai()
C.b.q(h.a,h.d,g,f,s)
s=m.e9(j.gbk(j))
f=s.a
g=s.b
h=s.c
h=s.u(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
f=h.a
s=h.b
h=h.c
C.b.q(g.a,g.d,f,s,h)
h=j.gap(j)
s=i.f
f=h.gb2()
g=h.gaM()
h=h.gaV()
C.b.q(s.a,s.d,f,g,h)
h=j.gb6()
s=h.ge_(h)
if(!s){s=i.x
C.b.F(s.a,s.d,1)}else{s=i.r
g=h.gd3()
f=s.a
s=s.d
if(!g)C.b.F(f,s,0)
else C.b.F(f,s,h.gaR())
s=i.x
C.b.F(s.a,s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.dV
C.b.F(v.a,v.d,p)
m=a.db.gS()
for(v=this.dx.y,u=v.length,t=[P.t],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.v)(v),++k){j=v[k]
h=this.a.cf
if(l>=h.length)return H.j(h,l)
i=h[l]
h=j.gb6()
H.h(q,"$isb",s,"$asb")
if(!C.a.aI(q,h)){h.saR(q.length)
C.a.h(q,h)}e=m.p(0,j.gS())
h=j.gS()
g=$.bi
if(g==null){g=new V.a8(0,0,0)
$.bi=g}g=h.b9(g)
h=i.b
f=g.gcw(g)
d=g.gcz(g)
g=g.gcA(g)
C.b.q(h.a,h.d,f,d,g)
h=$.bi
if(h==null){h=new V.a8(0,0,0)
$.bi=h}h=e.b9(h)
g=i.c
C.b.q(g.a,g.d,h.a,h.b,h.c)
h=e.ck()
g=i.d
n=new Float32Array(H.bt(H.h(new V.dM(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a5(0,!0),"$isb",t,"$asb")))
C.b.ea(g.a,g.d,!1,n)
g=j.gap(j)
h=i.e
f=g.gb2()
d=g.gaM()
g=g.gaV()
C.b.q(h.a,h.d,f,d,g)
g=j.gb6()
h=g.ge_(g)
if(!h){h=i.r
C.b.F(h.a,h.d,1)}else{h=i.f
f=g.gd3()
d=h.a
h=h.d
if(!(f>=6))C.b.F(d,h,0)
else C.b.F(d,h,g.gaR())
h=i.r
C.b.F(h.a,h.d,0)}h=j.gc_()
g=i.x
C.b.E(g.a,g.d,h)
h=j.gc0()
g=i.y
C.b.E(g.a,g.d,h)
h=j.gc1()
g=i.z
C.b.E(g.a,g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.dW
C.b.F(v.a,v.d,p)
m=a.db.gS()
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.v)(v),++k){j=v[k]
t=this.a.cg
if(l>=t.length)return H.j(t,l)
i=t[l]
t=j.gb6()
H.h(q,"$isb",z,"$asb")
if(!C.a.aI(q,t)){t.saR(q.length)
C.a.h(q,t)}t=j.gb1(j)
s=i.b
h=t.gcw(t)
g=t.gcz(t)
t=t.gcA(t)
C.b.q(s.a,s.d,h,g,t)
t=j.gbk(j)
g=i.c
h=t.gag(t)
s=t.gah(t)
t=t.gai()
C.b.q(g.a,g.d,h,s,t)
t=j.gbB()
s=i.d
h=t.gag(t)
g=t.gah(t)
t=t.gai()
C.b.q(s.a,s.d,h,g,t)
t=j.gb3(j)
g=i.e
h=t.gag(t)
s=t.gah(t)
t=t.gai()
C.b.q(g.a,g.d,h,s,t)
t=m.b9(j.gb1(j))
s=i.f
C.b.q(s.a,s.d,t.a,t.b,t.c)
t=j.gb6()
s=t.ge_(t)
if(!s){t=i.x
C.b.F(t.a,t.d,1)}else{s=i.r
h=t.gd3()
g=s.a
s=s.d
if(!h)C.b.F(g,s,0)
else C.b.F(g,s,t.gaR())
t=i.x
C.b.F(t.a,t.d,0)}t=j.gap(j)
s=i.y
h=t.gb2()
g=t.gaM()
t=t.gaV()
C.b.q(s.a,s.d,h,g,t)
t=j.gjJ()
g=i.z
C.b.E(g.a,g.d,t)
t=j.gjK()
g=i.Q
C.b.E(g.a,g.d,t)
t=j.gc_()
g=i.ch
C.b.E(g.a,g.d,t)
t=j.gc0()
g=i.cx
C.b.E(g.a,g.d,t)
t=j.gc1()
g=i.cy
C.b.E(g.a,g.d,t);++l}}}switch(x.f){case C.c:break
case C.f:break
case C.d:this.O(q,this.Q.d)
z=this.a
v=this.Q.d
z.af(z.dH,z.bs,v)
break
case C.e:this.O(q,this.Q.e)
z=this.a
v=this.Q.e
z.a6(z.dI,z.bs,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db.gS().ck()
a.Q=v}z=z.id
z.toString
z.ac(v.a5(0,!0))}if(x.dy){this.O(q,this.ch)
z=this.a
v=this.ch
z.a6(z.dJ,z.dK,v)
switch(x.r){case C.c:break
case C.f:z=this.a
v=this.cx.f
z=z.bt
z.toString
u=v.a
t=v.b
v=v.c
C.b.q(z.a,z.d,u,t,v)
break
case C.d:this.O(q,this.cx.d)
z=this.a
v=this.cx.d
z.af(z.dL,z.bu,v)
v=this.a
z=this.cx.f
v=v.bt
v.toString
u=z.a
t=z.b
z=z.c
C.b.q(v.a,v.d,u,t,z)
break
case C.e:this.O(q,this.cx.e)
z=this.a
v=this.cx.e
z.a6(z.dM,z.bu,v)
v=this.a
z=this.cx.f
v=v.bt
v.toString
u=z.a
t=z.b
z=z.c
C.b.q(v.a,v.d,u,t,z)
break}switch(x.x){case C.c:break
case C.f:z=this.a
v=this.cy.f
z=z.bw
z.toString
u=v.a
t=v.b
v=v.c
C.b.q(z.a,z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bv
C.b.E(v.a,v.d,t)
break
case C.d:this.O(q,this.cy.d)
z=this.a
v=this.cy.d
z.af(z.dN,z.bx,v)
v=this.a
z=this.cy.f
v=v.bw
v.toString
u=z.a
t=z.b
z=z.c
C.b.q(v.a,v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bv
C.b.E(z.a,z.d,t)
break
case C.e:this.O(q,this.cy.e)
z=this.a
v=this.cy.e
z.a6(z.dO,z.bx,v)
v=this.a
z=this.cy.f
v=v.bw
v.toString
u=z.a
t=z.b
z=z.c
C.b.q(v.a,v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bv
C.b.E(z.a,z.d,t)
break}}z=x.y
v=z!==C.c
if(v){switch(z){case C.c:break
case C.f:z=this.a
u=this.db.f
z=z.by
C.b.E(z.a,z.d,u)
break
case C.d:this.O(q,this.db.d)
z=this.a
u=this.db.d
z.af(z.dP,z.bz,u)
u=this.a
z=this.db.f
u=u.by
C.b.E(u.a,u.d,z)
break
case C.e:this.O(q,this.db.e)
z=this.a
u=this.db.e
z.a6(z.dQ,z.bz,u)
u=this.a
z=this.db.f
u=u.by
C.b.E(u.a,u.d,z)
break}z=a.a
C.b.ca(z,3042)
C.b.hZ(z,770,771)}for(z=a.a,o=0;o<q.length;++o){u=q[o]
if(!u.c&&u.d){u.c=!0
C.b.bi(z,33984+u.a)
C.b.a1(z,3553,u.b)}}u=b.e
u.Y(a)
u.a4(a)
u.ba(a)
if(v)C.b.ih(z,3042)
for(o=0;o<q.length;++o){v=q[o]
if(v.c){v.c=!1
C.b.bi(z,33984+v.a)
C.b.a1(z,3553,null)}}v=this.a
v.toString
C.b.cu(z,null)
v.x.dv()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cY().aj}},hk:{"^":"cx;0f,a,b,0c,0d,0e"},cx:{"^":"a;",
T:[function(a){this.a.T(H.f(a,"$isq"))},function(){return this.T(null)},"cO","$1","$0","gaB",0,2,0],
aS:["ey",function(){}],
ha:function(a){var z,y
z=this.d
if(z==null?a!=null:z!==a){if(z!=null)z.gl().P(0,this.gaB())
y=this.d
this.d=a
if(a!=null)a.gl().h(0,this.gaB())
z=new D.D(this.b+".texture2D",y,this.d,this,[T.e7])
z.b=!0
this.a.T(z)}},
hb:function(a){}},hl:{"^":"cx;a,b,0c,0d,0e"},aP:{"^":"cx;0f,a,b,0c,0d,0e",
de:function(a){var z,y
if(!J.Q(this.f,a)){z=this.f
this.f=a
y=new D.D(this.b+".color",z,a,this,[V.a1])
y.b=!0
this.a.T(y)}},
aS:["cI",function(){this.ey()
this.de(new V.a1(1,1,1))}],
sap:function(a,b){var z
if(this.c===C.c){this.c=C.f
this.aS()
z=this.a
z.a=null
z.T(null)}this.de(b)}},hn:{"^":"aP;0ch,0f,a,b,0c,0d,0e",
h8:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.D(this.b+".refraction",y,a,this,[P.t])
z.b=!0
this.a.T(z)}},
aS:function(){this.cI()
this.h8(1)}},ho:{"^":"aP;0ch,0f,a,b,0c,0d,0e",
h9:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.D(this.b+".shininess",y,a,this,[P.t])
z.b=!0
this.a.T(z)}},
aS:function(){this.cI()
this.h9(100)}},i5:{"^":"bl;0a,0b,0c,0d,0e",
gl:function(){var z=this.e
if(z==null){z=D.z()
this.e=z}return z},
T:[function(a){var z
H.f(a,"$isq")
z=this.e
if(!(z==null))z.C(a)},function(){return this.T(null)},"cO","$1","$0","gaB",0,2,0],
e4:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.f(a.fr.j(0,"Skybox"),"$ise2")
if(z==null){y=a.a
z=new A.e2(y,"Skybox")
z.cJ(y,"Skybox")
z.dY($.i7,$.i6)
z.z=z.x.j(0,"posAttr")
z.Q=H.c(z.y.j(0,"fov"),"$isL")
z.ch=H.c(z.y.j(0,"ratio"),"$isL")
z.cx=H.c(z.y.j(0,"boxClr"),"$isA")
z.cy=H.c(z.y.j(0,"boxTxt"),"$isa3")
z.db=H.c(z.y.j(0,"viewMat"),"$isak")
a.dk(z)}this.a=z}if(b.e==null){y=b.d.dq(new Z.eC(a.a),$.$get$al())
y.ax($.$get$al()).e=this.a.z.c
b.e=y}y=this.c
if(y!=null){y.a=1
if(!y.c&&y.d>=6){y.c=!0
x=a.a
C.b.bi(x,33985)
C.b.a1(x,34067,y.b)}}y=a.d
x=a.c
w=this.a
w.Y(a)
v=this.b
u=w.Q
C.b.E(u.a,u.d,v)
v=w.ch
C.b.E(v.a,v.d,y/x)
x=this.c
w.cy.er(x)
x=this.d
y=w.cx
C.b.q(y.a,y.d,x.a,x.b,x.c)
x=a.db.gS().ck()
w=w.db
w.toString
w.ac(x.a5(0,!0))
y=b.e
if(y instanceof Z.cj){y.Y(a)
y.a4(a)
y.ba(a)}else b.e=null
y=this.a
y.toString
x=a.a
C.b.cu(x,null)
y.x.dv()
y=this.c
if(y!=null)if(y.c){y.c=!1
C.b.bi(x,33984+y.a)
C.b.a1(x,34067,null)}}},bl:{"^":"a;"}}],["","",,T,{"^":"",bZ:{"^":"cg;"},e7:{"^":"bZ;"},ih:{"^":"e7;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gl:function(){var z=this.y
if(z==null){z=D.z()
this.y=z}return z}},e8:{"^":"bZ;0a,0b,0c,0d,0e",
gl:function(){var z=this.e
if(z==null){z=D.z()
this.e=z}return z}},ii:{"^":"a;a,0b,0c,0d,0e",
ix:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
C.b.a1(z,3553,y)
C.b.ar(z,3553,10242,33071)
C.b.ar(z,3553,10243,33071)
C.b.ar(z,3553,10241,9729)
C.b.ar(z,3553,10240,9729)
C.b.a1(z,3553,null);++this.d
x=W.dA(null,a,null)
w=new T.ih()
w.a=0
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
z=W.X
W.P(x,"load",H.l(new T.ik(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
iw:function(a){return this.ix(a,!1,!1,!1,!1)},
aE:function(a,b,c,d,e,f){var z,y
z=W.dA(null,c,null);++this.d
y=W.X
W.P(z,"load",H.l(new T.ij(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
dd:function(a,b,c){var z,y,x,w
b=V.d7(b,2)
z=V.d7(a.width,2)
y=V.d7(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cl(null,null)
x.width=z
x.height=y
w=H.f(C.m.ei(x,"2d"),"$iscm")
w.imageSmoothingEnabled=!1;(w&&C.r).ij(w,a,0,0,x.width,x.height)
return P.jV(C.r.ff(w,0,0,x.width,x.height))}}},ik:{"^":"r:11;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.dd(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
C.b.a1(y,3553,this.e)
C.b.e3(y,37440,this.f?1:0)
C.b.e6(y,3553,0,6408,6408,5121,w)
if(this.r)C.b.ee(y,3553)
C.b.a1(y,3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.dA()}++x.e}},ij:{"^":"r:11;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.dd(this.b,z.c,this.c)
x=z.a
C.b.a1(x,34067,this.d)
C.b.e3(x,37440,this.e?1:0)
C.b.e6(x,this.f,0,6408,6408,5121,y)
C.b.a1(x,34067,null)
x=this.r
if(++x.d>=6){x=x.e
if(!(x==null))x.dA()}++z.e}}}],["","",,V,{"^":"",fh:{"^":"a;",
aZ:function(a){return!0},
i:function(a){return"all"},
$isbe:1},be:{"^":"a;"},dK:{"^":"a;0a",
sau:function(a){this.a=H.h(a,"$isb",[V.be],"$asb")},
aZ:["ex",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.v)(z),++x)if(z[x].aZ(a))return!0
return!1}],
i:["cH",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.v)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbe:1},bh:{"^":"dK;0a",
aZ:function(a){return!this.ex(a)},
i:function(a){return"!["+this.cH(0)+"]"}},hW:{"^":"a;0a",
sh6:function(a){this.a=H.h(a,"$isan",[P.u,P.T],"$asan")},
eC:function(a){var z,y
if(a.a.length<=0)throw H.i(P.n("May not create a SetMatcher with zero characters."))
z=new H.bb(0,0,[P.u,P.T])
for(y=new H.dH(a,a.gn(a),0,[H.ad(a,"O",0)]);y.w();)z.a0(0,y.d,!0)
this.sh6(z)},
aZ:function(a){return this.a.dt(a)},
i:function(a){var z=this.a
return P.cF(new H.h6(z,[H.p(z,0)]),0,null)},
$isbe:1,
m:{
a_:function(a){var z=new V.hW()
z.eC(a)
return z}}},cD:{"^":"a;a,b,0c,0d",
shr:function(a){this.c=H.h(a,"$isb",[V.cJ],"$asb")},
A:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.cJ(this.a.I(0,b))
w.sau(H.d([],[V.be]))
w.c=!1
C.a.h(this.c,w)
return w},
il:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.v)(z),++x){w=z[x]
if(w.aZ(a))return w}return},
i:function(a){return this.b}},ef:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.fa(this.b,"\n","\\n")
y=H.fa(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},cI:{"^":"a;a,b,0c",
sh0:function(a){var z=P.x
this.c=H.h(a,"$isan",[z,z],"$asan")},
i:function(a){return this.b}},iq:{"^":"a;0a,0b,0c",
shi:function(a){this.a=H.h(a,"$isan",[P.x,V.cD],"$asan")},
shn:function(a){this.b=H.h(a,"$isan",[P.x,V.cI],"$asan")},
I:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.cD(this,b)
z.shr(H.d([],[V.cJ]))
z.d=null
this.a.a0(0,b,z)}return z},
b7:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.cI(this,a)
y=P.x
z.sh0(new H.bb(0,0,[y,y]))
this.b.a0(0,a,z)}return z},
j0:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.d([],[V.ef])
y=this.c
x=[P.u]
w=H.d([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.j.bd(a,t)
r=y.il(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cF(w,0,null)
throw H.i(P.n("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.d([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cF(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.ef(o==null?p.b:o,q,t)}++t}}}},cJ:{"^":"dK;b,0c,0a",
i:function(a){return this.b.b+": "+this.cH(0)}}}],["","",,X,{"^":"",bM:{"^":"a;",$isaq:1},fR:{"^":"cG;0a,0b,0c,0d,0e,0f,0r,0x",
gl:function(){var z=this.x
if(z==null){z=D.z()
this.x=z}return z},
Y:function(a){var z,y,x,w,v,u,t,s
z=a.a
C.b.hY(z,36160,null)
C.b.ca(z,2884)
C.b.ca(z,2929)
C.b.ig(z,513)
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
v=w.a
if(typeof y!=="number")return H.y(y)
u=C.i.ak(v*y)
v=w.b
if(typeof x!=="number")return H.y(x)
t=C.i.ak(v*x)
v=C.i.ak(w.c*y)
a.c=v
w=C.i.ak(w.d*x)
a.d=w
C.b.j2(z,u,t,v,w)
C.b.i2(z,this.c)
if(this.b){w=this.a
C.b.i1(z,w.a,w.b,w.c,w.d)
s=16640}else s=256
C.b.i0(z,s)},
m:{
cq:function(a,b,c,d,e,f,g){var z,y
z=new X.fR()
y=new V.aI(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=$.e_
if(y==null){y=V.dZ(0,0,1,1)
$.e_=y}z.r=y
return z}}},fU:{"^":"a;0a,0b",
gl:function(){var z=this.b
if(z==null){z=D.z()
this.b=z}return z},
Y:function(a){var z
a.cy.bA(V.aQ())
z=V.aQ()
a.db.bA(z)},
ba:function(a){a.cy.ay()
a.db.ay()},
$isaq:1,
$isbM:1},hx:{"^":"a;0a,0b,0c,0d,0e,0f",
gl:function(){var z=this.f
if(z==null){z=D.z()
this.f=z}return z},
aO:[function(a){var z
H.f(a,"$isq")
z=this.f
if(!(z==null))z.C(a)},function(){return this.aO(null)},"j3","$1","$0","geQ",0,2,0],
Y:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z=a.c
y=a.d
x=this.c
w=this.d
v=this.e
u=v-w
t=1/Math.tan(x*0.5)
s=V.ao(-t/(z/y),0,0,0,0,t,0,0,0,0,v/u,-v*w/u,0,0,1,0)
a.cy.bA(s)
z=$.dS
if(z==null){z=V.hz()
y=$.ew
if(y==null){y=new V.J(0,1,0)
$.ew=y}x=$.ev
if(x==null){x=new V.J(0,0,-1)
$.ev=x}r=x.u(0,Math.sqrt(x.B(x)))
y=y.aX(r)
q=y.u(0,Math.sqrt(y.B(y)))
p=r.aX(q)
o=new V.J(z.a,z.b,z.c)
n=q.K(0).B(o)
m=p.K(0).B(o)
l=r.K(0).B(o)
z=V.ao(q.a,p.a,r.a,n,q.b,p.b,r.b,m,q.c,p.c,r.c,l,0,0,0,1)
$.dS=z
k=z}else k=z
z=this.b
if(z!=null){j=z.aL(a,this)
if(j!=null)k=j.p(0,k)}a.db.bA(k)},
ba:function(a){a.cy.ay()
a.db.ay()},
$isaq:1,
$isbM:1,
m:{
dR:function(a,b,c,d,e){var z,y,x
z=new X.hx()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
if(null!=c){y=z.b
z.b=c
if(c!=null)c.gl().h(0,z.geQ())
x=new D.D("mover",y,z.b,z,[U.a2])
x.b=!0
z.aO(x)}x=z.c
if(!$.m.$2(x,b)){y=z.c
z.c=b
x=new D.D("fov",y,b,z,[P.t])
x.b=!0
z.aO(x)}x=z.d
if(!$.m.$2(x,d)){y=z.d
z.d=d
x=new D.D("near",y,d,z,[P.t])
x.b=!0
z.aO(x)}x=z.e
if(!$.m.$2(x,a)){y=z.e
z.e=a
x=new D.D("far",y,a,z,[P.t])
x.b=!0
z.aO(x)}return z}}},cG:{"^":"a;"}}],["","",,V,{"^":"",
kg:function(a){P.ip(C.D,new V.kh(a))},
kh:{"^":"r:34;a",
$1:function(a){H.f(a,"$isaT")
P.d8(C.i.e8(this.a.gio(),2)+" fps")}},
i1:{"^":"a;0a,0b",
eD:function(a,b){var z,y,x,w,v,u,t
z=document
y=z.body
x=z.createElement("div")
x.className="scrollTop";(y&&C.q).X(y,x)
w=z.createElement("div")
w.className="scrollPage"
C.q.X(y,w)
v=z.createElement("div")
v.className="pageCenter"
C.l.X(w,v)
if(a.length!==0){z.title=a
u=z.createElement("div")
u.className="pageTitle"
u.textContent=a
C.l.X(v,u)}t=z.createElement("div")
this.a=t
C.l.X(v,t)
this.b=null
t=W.X
W.P(z,"scroll",H.l(new V.i4(x),{func:1,ret:-1,args:[t]}),!1,t)},
dj:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.h(a,"$isb",[P.x],"$asb")
this.hd()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.j0(C.a.is(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.v)(x),++v){u=x[v]
switch(u.a){case"Bold":t=z.createElement("div")
t.className="boldPar"
t.textContent=u.b
C.l.X(y,t)
break
case"Italic":t=z.createElement("div")
t.className="italicPar"
t.textContent=u.b
C.l.X(y,t)
break
case"Code":t=z.createElement("div")
t.className="codePar"
t.textContent=u.b
C.l.X(y,t)
break
case"Link":s=u.b
if(H.f9(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.j(r,1)
q.href=H.N(r[1])
q.textContent=H.N(r[0])
C.l.X(y,q)}else{p=P.jC(C.N,s,C.y,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+p
q.textContent=s
C.l.X(y,q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
C.l.X(y,t)
break}}C.l.X(this.a,y)},
hd:function(){var z,y,x,w
if(this.b!=null)return
z=new V.iq()
y=P.x
z.shi(new H.bb(0,0,[y,V.cD]))
z.shn(new H.bb(0,0,[y,V.cI]))
z.c=null
z.c=z.I(0,"Start")
y=z.I(0,"Start").A(0,"Bold")
x=V.a_(new H.V("*"))
C.a.h(y.a,x)
y.c=!0
y=z.I(0,"Bold").A(0,"Bold")
x=new V.bh()
w=[V.be]
x.sau(H.d([],w))
C.a.h(y.a,x)
y=V.a_(new H.V("*"))
C.a.h(x.a,y)
y=z.I(0,"Bold").A(0,"BoldEnd")
x=V.a_(new H.V("*"))
C.a.h(y.a,x)
y.c=!0
y=z.I(0,"Start").A(0,"Italic")
x=V.a_(new H.V("_"))
C.a.h(y.a,x)
y.c=!0
y=z.I(0,"Italic").A(0,"Italic")
x=new V.bh()
x.sau(H.d([],w))
C.a.h(y.a,x)
y=V.a_(new H.V("_"))
C.a.h(x.a,y)
y=z.I(0,"Italic").A(0,"ItalicEnd")
x=V.a_(new H.V("_"))
C.a.h(y.a,x)
y.c=!0
y=z.I(0,"Start").A(0,"Code")
x=V.a_(new H.V("`"))
C.a.h(y.a,x)
y.c=!0
y=z.I(0,"Code").A(0,"Code")
x=new V.bh()
x.sau(H.d([],w))
C.a.h(y.a,x)
y=V.a_(new H.V("`"))
C.a.h(x.a,y)
y=z.I(0,"Code").A(0,"CodeEnd")
x=V.a_(new H.V("`"))
C.a.h(y.a,x)
y.c=!0
y=z.I(0,"Start").A(0,"LinkHead")
x=V.a_(new H.V("["))
C.a.h(y.a,x)
y.c=!0
y=z.I(0,"LinkHead").A(0,"LinkTail")
x=V.a_(new H.V("|"))
C.a.h(y.a,x)
x=z.I(0,"LinkHead").A(0,"LinkEnd")
y=V.a_(new H.V("]"))
C.a.h(x.a,y)
x.c=!0
x=z.I(0,"LinkHead").A(0,"LinkHead")
y=new V.bh()
y.sau(H.d([],w))
C.a.h(x.a,y)
x=V.a_(new H.V("|]"))
C.a.h(y.a,x)
x=z.I(0,"LinkTail").A(0,"LinkEnd")
y=V.a_(new H.V("]"))
C.a.h(x.a,y)
x.c=!0
x=z.I(0,"LinkTail").A(0,"LinkTail")
y=new V.bh()
y.sau(H.d([],w))
C.a.h(x.a,y)
x=V.a_(new H.V("|]"))
C.a.h(y.a,x)
C.a.h(z.I(0,"Start").A(0,"Other").a,new V.fh())
x=z.I(0,"Other").A(0,"Other")
y=new V.bh()
y.sau(H.d([],w))
C.a.h(x.a,y)
x=V.a_(new H.V("*_`["))
C.a.h(y.a,x)
x=z.I(0,"BoldEnd")
x.d=x.a.b7("Bold")
x=z.I(0,"ItalicEnd")
x.d=x.a.b7("Italic")
x=z.I(0,"CodeEnd")
x.d=x.a.b7("Code")
x=z.I(0,"LinkEnd")
x.d=x.a.b7("Link")
x=z.I(0,"Other")
x.d=x.a.b7("Other")
this.b=z},
m:{
i2:function(a,b){var z=new V.i1()
z.eD(a,!0)
return z}}},
i4:{"^":"r:11;a",
$1:function(a){P.ed(C.n,new V.i3(this.a))}},
i3:{"^":"r:2;a",
$0:function(){var z,y,x
z=C.i.ak(document.documentElement.scrollTop)
y=this.a.style
x=H.e(-0.01*z)+"px"
y.top=x}}}],["","",,M,{"^":"",
f5:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=V.i2("Test 034",!0)
y=W.cl(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
C.l.X(z.a,y)
x=[P.x]
z.dj(H.d(["Test of resizing the render target. ","Resizing the canvas works better in Chrome."],x))
z.dj(H.d(["\xab[Back to Tests|../]"],x))
x=document
y=C.u.cB(x,"testCanvas")
z=y.style
z.width="100%"
z.height="100%"
z.margin="-4px"
w=x.createElement("div")
z=w.style
z.border="2px solid"
z.padding="10px"
C.t.h7(z,(z&&C.t).cT(z,"resize"),"both","")
z.overflow="auto"
J.fg(y,w)
C.l.X(w,y)
v=C.u.cB(x,"testCanvas")
if(v==null)H.o(P.n("Failed to find an element with the identifier, testCanvas."))
u=E.im(v,!0,!0,!0,!1)
t=new U.dy()
t.bc(U.a2)
t.aN(t.gft(),t.gfQ())
t.e=null
t.f=V.aQ()
t.r=0
z=u.r
x=new U.iJ()
s=U.cp()
s.scv(0,!0)
s.scn(6.283185307179586)
s.scp(0)
s.sa2(0,0)
s.sco(100)
s.sM(0)
s.sc9(0.5)
x.b=s
r=x.gaF()
s.gl().h(0,r)
s=U.cp()
s.scv(0,!0)
s.scn(6.283185307179586)
s.scp(0)
s.sa2(0,0)
s.sco(100)
s.sM(0)
s.sc9(0.5)
x.c=s
s.gl().h(0,r)
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
q=new X.ap(!1,!1,!1)
p=x.d
x.d=q
s=[X.ap]
r=new D.D("modifiers",p,q,x,s)
r.b=!0
x.L(r)
r=x.f
if(r!==!1){x.f=!1
r=new D.D("invertX",r,!1,x,[P.T])
r.b=!0
x.L(r)}r=x.r
if(r!==!1){x.r=!1
r=new D.D("invertY",r,!1,x,[P.T])
r.b=!0
x.L(r)}x.aU(z)
t.h(0,x)
z=u.r
x=new U.iI()
r=U.cp()
r.scv(0,!0)
r.scn(6.283185307179586)
r.scp(0)
r.sa2(0,0)
r.sco(100)
r.sM(0)
r.sc9(0.2)
x.b=r
r.gl().h(0,x.gaF())
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
q=new X.ap(!0,!1,!1)
p=x.c
x.c=q
r=new D.D("modifiers",p,q,x,s)
r.b=!0
x.L(r)
x.aU(z)
t.h(0,x)
z=u.r
x=new U.iK()
x.c=0.01
x.d=0
x.e=0
q=new X.ap(!1,!1,!1)
x.b=q
s=new D.D("modifiers",null,q,x,s)
s.b=!0
x.L(s)
x.aU(z)
t.h(0,x)
o=V.ao(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
z=new U.dj()
z.a=o
t.h(0,z)
n=X.dR(2000,1.0471975511965976,t,0.1,null)
m=new O.hi()
m.seW(O.co(V.ah))
m.e.aN(m.gfv(),m.gfw())
z=new O.aP(m,"emission")
z.c=C.c
z.f=new V.a1(0,0,0)
m.f=z
z=new O.aP(m,"ambient")
z.c=C.c
z.f=new V.a1(0,0,0)
m.r=z
z=new O.aP(m,"diffuse")
z.c=C.c
z.f=new V.a1(0,0,0)
m.x=z
z=new O.aP(m,"invDiffuse")
z.c=C.c
z.f=new V.a1(0,0,0)
m.y=z
z=new O.ho(m,"specular")
z.c=C.c
z.f=new V.a1(0,0,0)
z.ch=100
m.z=z
z=new O.hl(m,"bump")
z.c=C.c
m.Q=z
m.ch=null
z=new O.aP(m,"reflect")
z.c=C.c
z.f=new V.a1(0,0,0)
m.cx=z
z=new O.hn(m,"refract")
z.c=C.c
z.f=new V.a1(0,0,0)
z.ch=1
m.cy=z
z=new O.hk(m,"alpha")
z.c=C.c
z.f=1
m.db=z
z=new D.h3()
z.bc(D.S)
z.sf4(H.d([],[D.dt]))
z.sfX(H.d([],[D.dT]))
z.shh(H.d([],[D.e3]))
z.shs(H.d([],[D.e9]))
z.sht(H.d([],[D.ea]))
z.shu(H.d([],[D.eb]))
z.Q=null
z.ch=null
z.cD(z.gfu(),z.gfP(),z.gfR())
m.dx=z
x=z.Q
if(x==null){x=D.z()
z.Q=x
z=x}else z=x
z.h(0,m.gh3())
z=m.dx
x=z.ch
if(x==null){x=D.z()
z.ch=x
z=x}else z=x
z.h(0,m.gaB())
m.dy=null
z=m.r
z.sap(0,new V.a1(0.3,0.3,0.3))
z=m.x
z.sap(0,new V.a1(0.8,0.8,0.8))
z=m.x
x=u.f.iw("../resources/Test.png")
s=z.c
if(s!==C.d){if(s===C.c)z.aS()
z.c=C.d
z.hb(null)
s=z.a
s.a=null
s.T(null)}z.ha(x)
l=X.cq(!0,!0,!1,null,2000,null,0)
if(l.b){l.b=!1
z=new D.D("clearColor",!0,!1,l,[P.T])
z.b=!0
x=l.x
if(!(x==null))x.C(z)}k=E.dw(null,!0,null,"",null,null)
j=F.cC()
F.br(j,null,null,1,1,1,0,0,1)
F.br(j,null,null,1,1,0,1,0,3)
F.br(j,null,null,1,1,0,0,1,2)
F.br(j,null,null,1,1,-1,0,0,0)
F.br(j,null,null,1,1,0,-1,0,0)
F.br(j,null,null,1,1,0,0,-1,3)
j.aw()
k.sbE(0,j)
i=new M.fJ()
i.seZ(0,O.co(E.ag))
i.d.aN(i.gfA(),i.gfB())
i.e=null
i.f=null
i.r=null
i.x=null
i.saW(null)
i.sb4(0,null)
i.sb5(null)
i.d.h(0,k)
i.sb5(m)
i.sb4(0,l)
i.saW(n)
z=u.f
x=z.a
h=x.createTexture()
C.b.a1(x,34067,h)
C.b.ar(x,34067,10242,10497)
C.b.ar(x,34067,10243,10497)
C.b.ar(x,34067,10241,9729)
C.b.ar(x,34067,10240,9729)
C.b.a1(x,34067,null)
g=new T.e8()
g.a=0
g.b=h
g.c=!1
g.d=0
z.aE(g,h,"../resources/maskonaive/posx.jpg",34069,!1,!1)
z.aE(g,h,"../resources/maskonaive/negx.jpg",34070,!1,!1)
z.aE(g,h,"../resources/maskonaive/posy.jpg",34071,!1,!1)
z.aE(g,h,"../resources/maskonaive/negy.jpg",34072,!1,!1)
z.aE(g,h,"../resources/maskonaive/posz.jpg",34073,!1,!1)
z.aE(g,h,"../resources/maskonaive/negz.jpg",34074,!1,!1)
f=new M.fv()
f.saW(null)
f.sb4(0,null)
f.sb5(null)
z=E.dw(null,!0,null,"",null,null)
j=F.cC()
x=j.a
s=new V.J(-1,-1,1)
s=s.u(0,Math.sqrt(s.B(s)))
e=x.bj(new V.bj(1,2,4,6),new V.aI(1,0,0,1),new V.a8(-1,-1,0),new V.Z(0,1),s,null)
x=j.a
s=new V.J(1,-1,1)
s=s.u(0,Math.sqrt(s.B(s)))
d=x.bj(new V.bj(0,3,4,6),new V.aI(0,0,1,1),new V.a8(1,-1,0),new V.Z(1,1),s,null)
x=j.a
s=new V.J(1,1,1)
s=s.u(0,Math.sqrt(s.B(s)))
c=x.bj(new V.bj(0,2,5,6),new V.aI(0,1,0,1),new V.a8(1,1,0),new V.Z(1,0),s,null)
x=j.a
s=V.aw()
r=new V.J(-1,1,1)
r=r.u(0,Math.sqrt(r.B(r)))
b=x.bj(new V.bj(0,2,4,7),new V.aI(1,1,0,1),new V.a8(-1,1,0),s,r,null)
j.d.hT(H.d([e,d,c,b],[F.at]))
j.aw()
z.sbE(0,j)
f.d=z
f.e=null
z=new O.i5()
z.b=1.0471975511965976
z.d=new V.a1(1,1,1)
p=z.c
z.c=g
g.gl().h(0,z.gaB())
x=new D.D("boxTexture",p,z.c,z,[T.e8])
x.b=!0
z.T(x)
f.sb5(z)
f.sb4(0,l)
f.saW(n)
z=M.ar
x=H.d([f,i],[z])
s=new M.ft()
s.bc(z)
s.e=!1
s.f=null
s.aN(s.gfS(),s.gfT())
s.bZ(0,x)
z=u.d
if(z!==s){if(z!=null)z.gl().P(0,u.gcL())
u.d=s
s.gl().h(0,u.gcL())
u.eG()}V.kg(u)}},1]]
setupProgram(dart,0,0)
J.M=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dD.prototype
return J.dC.prototype}if(typeof a=="string")return J.ct.prototype
if(a==null)return J.dE.prototype
if(typeof a=="boolean")return J.fZ.prototype
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bF.prototype
return a}if(a instanceof P.a)return a
return J.c8(a)}
J.c7=function(a){if(typeof a=="string")return J.ct.prototype
if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bF.prototype
return a}if(a instanceof P.a)return a
return J.c8(a)}
J.f1=function(a){if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bF.prototype
return a}if(a instanceof P.a)return a
return J.c8(a)}
J.jZ=function(a){if(typeof a=="number")return J.bT.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cT.prototype
return a}
J.b1=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bF.prototype
return a}if(a instanceof P.a)return a
return J.c8(a)}
J.Q=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.M(a).t(a,b)}
J.fc=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.jZ(a).al(a,b)}
J.fd=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.k7(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c7(a).j(a,b)}
J.fe=function(a,b,c,d){return J.b1(a).eS(a,b,c,d)}
J.ff=function(a,b,c){return J.b1(a).h1(a,b,c)}
J.d9=function(a,b){return J.b1(a).X(a,b)}
J.ce=function(a,b,c){return J.c7(a).i4(a,b,c)}
J.da=function(a,b){return J.f1(a).a7(a,b)}
J.aN=function(a){return J.M(a).gU(a)}
J.bK=function(a){return J.f1(a).gN(a)}
J.bz=function(a){return J.c7(a).gn(a)}
J.fg=function(a,b){return J.b1(a).iO(a,b)}
J.a6=function(a){return J.M(a).i(a)}
I.d5=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.q=W.fk.prototype
C.m=W.ck.prototype
C.r=W.cm.prototype
C.t=W.fw.prototype
C.l=W.du.prototype
C.u=W.fT.prototype
C.E=J.E.prototype
C.a=J.aO.prototype
C.F=J.dC.prototype
C.h=J.dD.prototype
C.o=J.dE.prototype
C.i=J.bT.prototype
C.j=J.ct.prototype
C.M=J.bF.prototype
C.O=W.hu.prototype
C.x=J.hy.prototype
C.b=P.cB.prototype
C.p=J.cT.prototype
C.z=W.bp.prototype
C.A=W.iX.prototype
C.B=new P.hw()
C.C=new P.iM()
C.k=new P.js()
C.c=new A.bN(0,"ColorSourceType.None")
C.f=new A.bN(1,"ColorSourceType.Solid")
C.d=new A.bN(2,"ColorSourceType.Texture2D")
C.e=new A.bN(3,"ColorSourceType.TextureCube")
C.n=new P.b7(0)
C.D=new P.b7(5e6)
C.G=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.H=function(hooks) {
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
C.v=function(hooks) { return hooks; }

C.I=function(getTagFallback) {
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
C.J=function() {
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
C.K=function(hooks) {
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
C.L=function(hooks) {
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
C.w=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.N=H.d(I.d5([0,0,65498,45055,65535,34815,65534,18431]),[P.u])
C.y=new P.iL(!1)
$.am=0
$.b5=null
$.dc=null
$.cX=!1
$.f3=null
$.eX=null
$.f8=null
$.c6=null
$.ca=null
$.d4=null
$.aY=null
$.bu=null
$.bv=null
$.cY=!1
$.G=C.k
$.dr=null
$.dq=null
$.dp=null
$.dn=null
$.m=V.hp()
$.dN=null
$.dU=null
$.bi=null
$.e_=null
$.eu=null
$.ex=null
$.ew=null
$.ev=null
$.i7="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.i6="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.dS=null
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
I.$lazy(y,x,w)}})(["dm","$get$dm",function(){return H.f2("_$dart_dartClosure")},"cu","$get$cu",function(){return H.f2("_$dart_js")},"eh","$get$eh",function(){return H.as(H.c_({
toString:function(){return"$receiver$"}}))},"ei","$get$ei",function(){return H.as(H.c_({$method$:null,
toString:function(){return"$receiver$"}}))},"ej","$get$ej",function(){return H.as(H.c_(null))},"ek","$get$ek",function(){return H.as(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eo","$get$eo",function(){return H.as(H.c_(void 0))},"ep","$get$ep",function(){return H.as(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"em","$get$em",function(){return H.as(H.en(null))},"el","$get$el",function(){return H.as(function(){try{null.$method$}catch(z){return z.message}}())},"er","$get$er",function(){return H.as(H.en(void 0))},"eq","$get$eq",function(){return H.as(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cV","$get$cV",function(){return P.iY()},"bw","$get$bw",function(){return[]},"eQ","$get$eQ",function(){return P.hN("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dl","$get$dl",function(){return{}},"eA","$get$eA",function(){return Z.ab(0)},"ey","$get$ey",function(){return Z.ab(511)},"al","$get$al",function(){return Z.ab(1)},"aB","$get$aB",function(){return Z.ab(2)},"aA","$get$aA",function(){return Z.ab(4)},"aC","$get$aC",function(){return Z.ab(8)},"aD","$get$aD",function(){return Z.ab(16)},"bn","$get$bn",function(){return Z.ab(32)},"bo","$get$bo",function(){return Z.ab(64)},"ez","$get$ez",function(){return Z.ab(96)},"aW","$get$aW",function(){return Z.ab(128)},"az","$get$az",function(){return Z.ab(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.q]},{func:1,ret:-1,args:[D.q]},{func:1,ret:P.C},{func:1,ret:-1},{func:1,ret:-1,args:[W.ai]},{func:1,ret:-1,args:[P.u,[P.k,E.ag]]},{func:1,ret:P.C,args:[F.Y]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.C,args:[D.q]},{func:1,ret:-1,args:[W.X]},{func:1,ret:-1,args:[W.aU]},{func:1,ret:P.C,args:[W.X]},{func:1,ret:P.C,args:[,]},{func:1,ret:P.C,args:[,,]},{func:1,ret:P.x,args:[P.u]},{func:1,args:[,]},{func:1,ret:-1,args:[W.bc]},{func:1,ret:-1,args:[P.u,[P.k,D.S]]},{func:1,ret:P.t},{func:1,ret:-1,args:[P.u,[P.k,U.a2]]},{func:1,ret:-1,args:[P.u,[P.k,M.ar]]},{func:1,ret:-1,args:[P.u,[P.k,V.ah]]},{func:1,ret:P.T,args:[W.H]},{func:1,ret:W.W,args:[W.H]},{func:1,ret:P.T,args:[P.t,P.t]},{func:1,ret:P.C,args:[,],opt:[,]},{func:1,ret:[P.aE,,],args:[,]},{func:1,ret:P.C,args:[{func:1,ret:-1}]},{func:1,ret:P.C,args:[P.a5]},{func:1,ret:P.C,args:[{func:1,ret:-1,args:[D.q]}]},{func:1,ret:P.C,args:[F.at,P.t,P.t]},{func:1,args:[P.x]},{func:1,args:[W.X]},{func:1,args:[,P.x]},{func:1,ret:P.C,args:[P.aT]},{func:1,ret:-1,args:[W.bp]},{func:1,ret:P.T,args:[[P.k,D.S]]}]
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
if(x==y)H.kj(d||a)
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
Isolate.d5=a.d5
Isolate.d2=a.d2
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
if(typeof dartMainRunner==="function")dartMainRunner(M.f5,[])
else M.f5([])})})()
//# sourceMappingURL=test.dart.js.map
