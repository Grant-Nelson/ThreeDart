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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.d3"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.d3"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.d3(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.d4=function(){}
var dart=[["","",,H,{"^":"",kC:{"^":"a;a"}}],["","",,J,{"^":"",
d8:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ci:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.d6==null){H.k8()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.k(P.eu("Return interceptor for "+H.i(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cA()]
if(v!=null)return v
v=H.kd(a)
if(v!=null)return v
if(typeof a=="function")return C.K
y=Object.getPrototypeOf(a)
if(y==null)return C.u
if(y===Object.prototype)return C.u
if(typeof w=="function"){Object.defineProperty(w,$.$get$cA(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
F:{"^":"a;",
u:function(a,b){return a===b},
gV:function(a){return H.bj(a)},
i:["eC",function(a){return"Instance of '"+H.aV(a)+"'"}],
"%":"CanvasRenderingContext2D|DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo"},
h0:{"^":"F;",
i:function(a){return String(a)},
gV:function(a){return a?519018:218159},
$isU:1},
dG:{"^":"F;",
u:function(a,b){return null==b},
i:function(a){return"null"},
gV:function(a){return 0},
$isD:1},
cB:{"^":"F;",
gV:function(a){return 0},
i:["eD",function(a){return String(a)}]},
hA:{"^":"cB;"},
c9:{"^":"cB;"},
bD:{"^":"cB;",
i:function(a){var z=a[$.$get$dr()]
if(z==null)return this.eD(a)
return"JavaScript function for "+H.i(J.aw(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscy:1},
aS:{"^":"F;$ti",
h:function(a,b){H.v(b,H.r(a,0))
if(!!a.fixed$length)H.o(P.a6("add"))
a.push(b)},
j2:function(a,b){var z
if(!!a.fixed$length)H.o(P.a6("removeAt"))
z=a.length
if(b>=z)throw H.k(P.bH(b,null,null))
return a.splice(b,1)[0]},
K:function(a,b){var z
if(!!a.fixed$length)H.o(P.a6("remove"))
for(z=0;z<a.length;++z)if(J.G(a[z],b)){a.splice(z,1)
return!0}return!1},
c4:function(a,b){var z,y
H.e(b,"$isj",[H.r(a,0)],"$asj")
if(!!a.fixed$length)H.o(P.a6("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.w)(b),++y)a.push(b[y])},
a9:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.r(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.k(P.b9(a))}},
C:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.a_(z,y,H.i(a[y]))
return z.join(b)},
iJ:function(a){return this.C(a,"")},
a8:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
eB:function(a,b,c){var z=a.length
if(b>z)throw H.k(P.ac(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.k(P.ac(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.r(a,0)])
return H.c(a.slice(b,c),[H.r(a,0)])},
giB:function(a){if(a.length>0)return a[0]
throw H.k(H.dC())},
gcq:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.k(H.dC())},
aK:function(a,b){var z
for(z=0;z<a.length;++z)if(J.G(a[z],b))return!0
return!1},
i:function(a){return P.cz(a,"[","]")},
gO:function(a){return new J.ah(a,a.length,0,[H.r(a,0)])},
gV:function(a){return H.bj(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.o(P.a6("set length"))
if(b<0)throw H.k(P.ac(b,0,null,"newLength",null))
a.length=b},
a_:function(a,b,c){H.v(c,H.r(a,0))
if(!!a.immutable$list)H.o(P.a6("indexed set"))
if(b>=a.length||b<0)throw H.k(H.bw(a,b))
a[b]=c},
$isj:1,
$isb:1,
m:{
h_:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.k(P.cp(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.k(P.ac(a,0,4294967295,"length",null))
return J.dD(new Array(a),b)},
dD:function(a,b){return J.bX(H.c(a,[b]))},
bX:function(a){H.cl(a)
a.fixed$length=Array
return a}}},
kB:{"^":"aS;$ti"},
ah:{"^":"a;a,b,c,0d,$ti",
scV:function(a){this.d=H.v(a,H.r(this,0))},
gF:function(){return this.d},
v:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.k(H.w(z))
x=this.c
if(x>=y){this.scV(null)
return!1}this.scV(z[x]);++this.c
return!0},
$isaJ:1},
bC:{"^":"F;",
je:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.k(P.a6(""+a+".toInt()"))},
cn:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.k(P.a6(""+a+".floor()"))},
U:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.k(P.a6(""+a+".round()"))},
ej:function(a,b){var z,y
if(b>20)throw H.k(P.ac(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gV:function(a){return a&0x1FFFFFFF},
p:function(a,b){if(typeof b!=="number")throw H.k(H.aH(b))
return a*b},
ey:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
eG:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.di(a,b)},
Y:function(a,b){return(a|0)===a?a/b|0:this.di(a,b)},
di:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.k(P.a6("Result of truncating division is "+H.i(z)+": "+H.i(a)+" ~/ "+b))},
bi:function(a,b){var z
if(a>0)z=this.hy(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
hy:function(a,b){return b>31?0:a>>>b},
ai:function(a,b){if(typeof b!=="number")throw H.k(H.aH(b))
return a<b},
$isq:1,
$isaa:1},
dF:{"^":"bC;",$isu:1},
dE:{"^":"bC;"},
bY:{"^":"F;",
cd:function(a,b){if(b<0)throw H.k(H.bw(a,b))
if(b>=a.length)H.o(H.bw(a,b))
return a.charCodeAt(b)},
be:function(a,b){if(b>=a.length)throw H.k(H.bw(a,b))
return a.charCodeAt(b)},
I:function(a,b){H.M(b)
if(typeof b!=="string")throw H.k(P.cp(b,null,null))
return a+b},
cP:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.k(P.bH(b,null,null))
if(b>c)throw H.k(P.bH(b,null,null))
if(c>a.length)throw H.k(P.bH(c,null,null))
return a.substring(b,c)},
cO:function(a,b){return this.cP(a,b,null)},
p:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.k(C.y)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
iU:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.p(c,z)+a},
az:function(a,b){return this.iU(a,b," ")},
io:function(a,b,c){if(c>a.length)throw H.k(P.ac(c,0,a.length,null,null))
return H.fe(a,b,c)},
i:function(a){return a},
gV:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gn:function(a){return a.length},
$isdS:1,
$isx:1}}],["","",,H,{"^":"",
dC:function(){return new P.i8("No element")},
V:{"^":"iG;a",
gn:function(a){return this.a.length},
j:function(a,b){return C.j.cd(this.a,b)},
$asev:function(){return[P.u]},
$asP:function(){return[P.u]},
$asj:function(){return[P.u]},
$asb:function(){return[P.u]}},
fI:{"^":"j;"},
dJ:{"^":"a;a,b,c,0d,$ti",
saS:function(a){this.d=H.v(a,H.r(this,0))},
gF:function(){return this.d},
v:function(){var z,y,x,w
z=this.a
y=J.ch(z)
x=y.gn(z)
if(this.b!==x)throw H.k(P.b9(z))
w=this.c
if(w>=x){this.saS(null)
return!1}this.saS(y.a8(z,w));++this.c
return!0},
$isaJ:1},
hi:{"^":"j;a,b,$ti",
gO:function(a){return new H.hj(J.bN(this.a),this.b,this.$ti)},
gn:function(a){return J.bx(this.a)},
a8:function(a,b){return this.b.$1(J.dd(this.a,b))},
$asj:function(a,b){return[b]}},
hj:{"^":"aJ;0a,b,c,$ti",
saS:function(a){this.a=H.v(a,H.r(this,1))},
v:function(){var z=this.b
if(z.v()){this.saS(this.c.$1(z.gF()))
return!0}this.saS(null)
return!1},
gF:function(){return this.a},
$asaJ:function(a,b){return[b]}},
iZ:{"^":"j;a,b,$ti",
gO:function(a){return new H.j_(J.bN(this.a),this.b,this.$ti)}},
j_:{"^":"aJ;a,b,$ti",
v:function(){var z,y
for(z=this.a,y=this.b;z.v();)if(y.$1(z.gF()))return!0
return!1},
gF:function(){return this.a.gF()}},
bV:{"^":"a;$ti"},
ev:{"^":"a;$ti"},
iG:{"^":"bZ+ev;"}}],["","",,H,{"^":"",
b7:function(a){var z,y
z=H.M(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
k3:function(a){return init.types[H.a0(a)]},
kb:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.O(a).$isax},
i:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.aw(a)
if(typeof z!=="string")throw H.k(H.aH(a))
return z},
bj:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aV:function(a){return H.hB(a)+H.d1(H.aN(a),0,null)},
hB:function(a){var z,y,x,w,v,u,t,s,r
z=J.O(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.C||!!z.$isc9){u=C.t(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.b7(w.length>1&&C.j.be(w,0)===36?C.j.cO(w,1):w)},
dY:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
hK:function(a){var z,y,x,w
z=H.c([],[P.u])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.w)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.k(H.aH(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.bi(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.k(H.aH(w))}return H.dY(z)},
dZ:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.k(H.aH(x))
if(x<0)throw H.k(H.aH(x))
if(x>65535)return H.hK(a)}return H.dY(a)},
hJ:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.bi(z,10))>>>0,56320|z&1023)}throw H.k(P.ac(a,0,1114111,null,null))},
aU:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hI:function(a){var z=H.aU(a).getFullYear()+0
return z},
hG:function(a){var z=H.aU(a).getMonth()+1
return z},
hC:function(a){var z=H.aU(a).getDate()+0
return z},
hD:function(a){var z=H.aU(a).getHours()+0
return z},
hF:function(a){var z=H.aU(a).getMinutes()+0
return z},
hH:function(a){var z=H.aU(a).getSeconds()+0
return z},
hE:function(a){var z=H.aU(a).getMilliseconds()+0
return z},
z:function(a){throw H.k(H.aH(a))},
f:function(a,b){if(a==null)J.bx(a)
throw H.k(H.bw(a,b))},
bw:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aQ(!0,b,"index",null)
z=H.a0(J.bx(a))
if(!(b<0)){if(typeof z!=="number")return H.z(z)
y=b>=z}else y=!0
if(y)return P.bc(b,a,"index",null,z)
return P.bH(b,"index",null)},
jZ:function(a,b,c){if(a>c)return new P.c2(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c2(a,c,!0,b,"end","Invalid value")
return new P.aQ(!0,b,"end",null)},
aH:function(a){return new P.aQ(!0,a,null,null)},
jU:function(a){if(typeof a!=="number")throw H.k(H.aH(a))
return a},
k:function(a){var z
if(a==null)a=new P.dR()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fg})
z.name=""}else z.toString=H.fg
return z},
fg:function(){return J.aw(this.dartException)},
o:function(a){throw H.k(a)},
w:function(a){throw H.k(P.b9(a))},
aO:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kq(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.bi(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cC(H.i(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dQ(H.i(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$ei()
u=$.$get$ej()
t=$.$get$ek()
s=$.$get$el()
r=$.$get$ep()
q=$.$get$eq()
p=$.$get$en()
$.$get$em()
o=$.$get$es()
n=$.$get$er()
m=v.aa(y)
if(m!=null)return z.$1(H.cC(H.M(y),m))
else{m=u.aa(y)
if(m!=null){m.method="call"
return z.$1(H.cC(H.M(y),m))}else{m=t.aa(y)
if(m==null){m=s.aa(y)
if(m==null){m=r.aa(y)
if(m==null){m=q.aa(y)
if(m==null){m=p.aa(y)
if(m==null){m=s.aa(y)
if(m==null){m=o.aa(y)
if(m==null){m=n.aa(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dQ(H.M(y),m))}}return z.$1(new H.iF(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.e4()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aQ(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.e4()
return a},
b5:function(a){var z
if(a==null)return new H.eT(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eT(a)},
k0:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.a_(0,a[y],a[x])}return b},
ka:function(a,b,c,d,e,f){H.h(a,"$iscy")
switch(H.a0(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.k(P.n("Unsupported number of arguments for wrapped closure"))},
b3:function(a,b){var z
H.a0(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ka)
a.$identity=z
return z},
fu:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.O(d).$isb){z.$reflectionInfo=d
x=H.hN(z).r}else x=d
w=e?Object.create(new H.i9().constructor.prototype):Object.create(new H.cr(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.an
if(typeof u!=="number")return u.I()
$.an=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.dl(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.k3,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.dg:H.cs
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.k("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.dl(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w["call*"]=q
w.$R=z.$R
w.$D=z.$D
return v},
fr:function(a,b,c,d){var z=H.cs
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dl:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.ft(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fr(y,!w,z,b)
if(y===0){w=$.an
if(typeof w!=="number")return w.I()
$.an=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.b8
if(v==null){v=H.bO("self")
$.b8=v}return new Function(w+H.i(v)+";return "+u+"."+H.i(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.an
if(typeof w!=="number")return w.I()
$.an=w+1
t+=w
w="return function("+t+"){return this."
v=$.b8
if(v==null){v=H.bO("self")
$.b8=v}return new Function(w+H.i(v)+"."+H.i(z)+"("+t+");}")()},
fs:function(a,b,c,d){var z,y
z=H.cs
y=H.dg
switch(b?-1:a){case 0:throw H.k(H.hW("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
ft:function(a,b){var z,y,x,w,v,u,t,s
z=$.b8
if(z==null){z=H.bO("self")
$.b8=z}y=$.df
if(y==null){y=H.bO("receiver")
$.df=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fs(w,!u,x,b)
if(w===1){z="return function(){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+");"
y=$.an
if(typeof y!=="number")return y.I()
$.an=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+", "+s+");"
y=$.an
if(typeof y!=="number")return y.I()
$.an=y+1
return new Function(z+y+"}")()},
d3:function(a,b,c,d,e,f,g){return H.fu(a,b,H.a0(c),d,!!e,!!f,g)},
M:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.k(H.al(a,"String"))},
kW:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.k(H.al(a,"double"))},
kg:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.k(H.al(a,"num"))},
f4:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.k(H.al(a,"bool"))},
a0:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.k(H.al(a,"int"))},
fc:function(a,b){throw H.k(H.al(a,H.b7(H.M(b).substring(3))))},
ki:function(a,b){throw H.k(H.fq(a,H.b7(H.M(b).substring(3))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.O(a)[b])return a
H.fc(a,b)},
d:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.O(a)[b]
else z=!0
if(z)return a
H.ki(a,b)},
cl:function(a){if(a==null)return a
if(!!J.O(a).$isb)return a
throw H.k(H.al(a,"List<dynamic>"))},
kc:function(a,b){var z
if(a==null)return a
z=J.O(a)
if(!!z.$isb)return a
if(z[b])return a
H.fc(a,b)},
f5:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.a0(z)]
else return a.$S()}return},
bL:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.f5(J.O(a))
if(z==null)return!1
return H.eW(z,null,b,null)},
l:function(a,b){var z,y
if(a==null)return a
if($.cZ)return a
$.cZ=!0
try{if(H.bL(a,b))return a
z=H.cn(b)
y=H.al(a,z)
throw H.k(y)}finally{$.cZ=!1}},
d5:function(a,b){if(a!=null&&!H.d2(a,b))H.o(H.al(a,H.cn(b)))
return a},
f_:function(a){var z,y
z=J.O(a)
if(!!z.$ist){y=H.f5(z)
if(y!=null)return H.cn(y)
return"Closure"}return H.aV(a)},
kn:function(a){throw H.k(new P.fA(H.M(a)))},
f7:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
aN:function(a){if(a==null)return
return a.$ti},
kX:function(a,b,c){return H.b6(a["$as"+H.i(c)],H.aN(b))},
cj:function(a,b,c,d){var z
H.M(c)
H.a0(d)
z=H.b6(a["$as"+H.i(c)],H.aN(b))
return z==null?null:z[d]},
a9:function(a,b,c){var z
H.M(b)
H.a0(c)
z=H.b6(a["$as"+H.i(b)],H.aN(a))
return z==null?null:z[c]},
r:function(a,b){var z
H.a0(b)
z=H.aN(a)
return z==null?null:z[b]},
cn:function(a){return H.aM(a,null)},
aM:function(a,b){var z,y
H.e(b,"$isb",[P.x],"$asb")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.b7(a[0].builtin$cls)+H.d1(a,1,b)
if(typeof a=="function")return H.b7(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a0(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.i(b[y])}if('func' in a)return H.jK(a,b)
if('futureOr' in a)return"FutureOr<"+H.aM("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jK:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.x]
H.e(b,"$isb",z,"$asb")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.f(b,r)
t=C.j.I(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aM(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aM(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aM(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aM(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.k_(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.M(z[l])
n=n+m+H.aM(i[h],b)+(" "+H.i(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
d1:function(a,b,c){var z,y,x,w,v,u
H.e(c,"$isb",[P.x],"$asb")
if(a==null)return""
z=new P.bJ("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aM(u,c)}return"<"+z.i(0)+">"},
b6:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bv:function(a,b,c,d){var z,y
H.M(b)
H.cl(c)
H.M(d)
if(a==null)return!1
z=H.aN(a)
y=J.O(a)
if(y[b]==null)return!1
return H.f2(H.b6(y[d],z),null,c,null)},
e:function(a,b,c,d){H.M(b)
H.cl(c)
H.M(d)
if(a==null)return a
if(H.bv(a,b,c,d))return a
throw H.k(H.al(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.b7(b.substring(3))+H.d1(c,0,null),init.mangledGlobalNames)))},
f2:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ag(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ag(a[y],b,c[y],d))return!1
return!0},
kU:function(a,b,c){return a.apply(b,H.b6(J.O(b)["$as"+H.i(c)],H.aN(b)))},
f9:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="D"||a===-1||a===-2||H.f9(z)}return!1},
d2:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="a"||b.builtin$cls==="D"||b===-1||b===-2||H.f9(b)
if(b==null||b===-1||b.builtin$cls==="a"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.d2(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bL(a,b)}z=J.O(a).constructor
y=H.aN(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.ag(z,null,b,null)},
v:function(a,b){if(a!=null&&!H.d2(a,b))throw H.k(H.al(a,H.cn(b)))
return a},
ag:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ag(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="D")return!0
if('func' in c)return H.eW(a,b,c,d)
if('func' in a)return c.builtin$cls==="cy"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ag("type" in a?a.type:null,b,x,d)
else if(H.ag(a,b,x,d))return!0
else{if(!('$is'+"bb" in y.prototype))return!1
w=y.prototype["$as"+"bb"]
v=H.b6(w,z?a.slice(1):null)
return H.ag(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.f2(H.b6(r,z),b,u,d)},
eW:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.kf(m,b,l,d)},
kf:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ag(c[w],d,a[w],b))return!1}return!0},
kV:function(a,b,c){Object.defineProperty(a,H.M(b),{value:c,enumerable:false,writable:true,configurable:true})},
kd:function(a){var z,y,x,w,v,u
z=H.M($.f8.$1(a))
y=$.cg[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ck[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.M($.f1.$2(a,z))
if(z!=null){y=$.cg[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ck[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cm(x)
$.cg[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.ck[z]=x
return x}if(v==="-"){u=H.cm(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fb(a,x)
if(v==="*")throw H.k(P.eu(z))
if(init.leafTags[z]===true){u=H.cm(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fb(a,x)},
fb:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.d8(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cm:function(a){return J.d8(a,!1,null,!!a.$isax)},
ke:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cm(z)
else return J.d8(z,c,null,null)},
k8:function(){if(!0===$.d6)return
$.d6=!0
H.k9()},
k9:function(){var z,y,x,w,v,u,t,s
$.cg=Object.create(null)
$.ck=Object.create(null)
H.k4()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fd.$1(v)
if(u!=null){t=H.ke(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
k4:function(){var z,y,x,w,v,u,t
z=C.H()
z=H.b2(C.E,H.b2(C.J,H.b2(C.r,H.b2(C.r,H.b2(C.I,H.b2(C.F,H.b2(C.G(C.t),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.f8=new H.k5(v)
$.f1=new H.k6(u)
$.fd=new H.k7(t)},
b2:function(a,b){return a(b)||b},
fe:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
ff:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hM:{"^":"a;a,b,c,d,e,f,r,0x",m:{
hN:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bX(z)
y=z[0]
x=z[1]
return new H.hM(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iu:{"^":"a;a,b,c,d,e,f",
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
au:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.x])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iu(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c8:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eo:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hx:{"^":"Q;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
m:{
dQ:function(a,b){return new H.hx(a,b==null?null:b.method)}}},
h3:{"^":"Q;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.i(this.a)+")"},
m:{
cC:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.h3(a,y,z?null:b.receiver)}}},
iF:{"^":"Q;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kq:{"^":"t:18;a",
$1:function(a){if(!!J.O(a).$isQ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eT:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaA:1},
t:{"^":"a;",
i:function(a){return"Closure '"+H.aV(this).trim()+"'"},
gen:function(){return this},
$iscy:1,
gen:function(){return this}},
e6:{"^":"t;"},
i9:{"^":"e6;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.b7(z)+"'"}},
cr:{"^":"e6;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cr))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gV:function(a){var z,y
z=this.c
if(z==null)y=H.bj(this.a)
else y=typeof z!=="object"?J.aP(z):H.bj(z)
return(y^H.bj(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.aV(z)+"'")},
m:{
cs:function(a){return a.a},
dg:function(a){return a.c},
bO:function(a){var z,y,x,w,v
z=new H.cr("self","target","receiver","name")
y=J.bX(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iv:{"^":"Q;a",
i:function(a){return this.a},
m:{
al:function(a,b){return new H.iv("TypeError: "+H.i(P.bT(a))+": type '"+H.f_(a)+"' is not a subtype of type '"+b+"'")}}},
fp:{"^":"Q;a",
i:function(a){return this.a},
m:{
fq:function(a,b){return new H.fp("CastError: "+H.i(P.bT(a))+": type '"+H.f_(a)+"' is not a subtype of type '"+b+"'")}}},
hV:{"^":"Q;a",
i:function(a){return"RuntimeError: "+H.i(this.a)},
m:{
hW:function(a){return new H.hV(a)}}},
bd:{"^":"hf;a,0b,0c,0d,0e,0f,r,$ti",
gn:function(a){return this.a},
dE:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.d3(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.d3(y,a)}else return this.iH(a)},
iH:function(a){var z=this.d
if(z==null)return!1
return this.cp(this.bP(z,J.aP(a)&0x3ffffff),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bf(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bf(w,b)
x=y==null?null:y.b
return x}else return this.iI(b)},
iI:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bP(z,J.aP(a)&0x3ffffff)
x=this.cp(y,a)
if(x<0)return
return y[x].b},
a_:function(a,b,c){var z,y,x,w,v,u
H.v(b,H.r(this,0))
H.v(c,H.r(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bW()
this.b=z}this.cX(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bW()
this.c=y}this.cX(y,b,c)}else{x=this.d
if(x==null){x=this.bW()
this.d=x}w=J.aP(b)&0x3ffffff
v=this.bP(x,w)
if(v==null)this.c2(x,w,[this.bX(b,c)])
else{u=this.cp(v,b)
if(u>=0)v[u].b=c
else v.push(this.bX(b,c))}}},
a9:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.k(P.b9(this))
z=z.c}},
cX:function(a,b,c){var z
H.v(b,H.r(this,0))
H.v(c,H.r(this,1))
z=this.bf(a,b)
if(z==null)this.c2(a,b,this.bX(b,c))
else z.b=c},
bX:function(a,b){var z,y
z=new H.h7(H.v(a,H.r(this,0)),H.v(b,H.r(this,1)))
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
for(y=0;y<z;++y)if(J.G(a[y].a,b))return y
return-1},
i:function(a){return P.dL(this)},
bf:function(a,b){return a[b]},
bP:function(a,b){return a[b]},
c2:function(a,b,c){a[b]=c},
fe:function(a,b){delete a[b]},
d3:function(a,b){return this.bf(a,b)!=null},
bW:function(){var z=Object.create(null)
this.c2(z,"<non-identifier-key>",z)
this.fe(z,"<non-identifier-key>")
return z},
$isdI:1},
h7:{"^":"a;a,b,0c,0d"},
h8:{"^":"fI;a,$ti",
gn:function(a){return this.a.a},
gO:function(a){var z,y
z=this.a
y=new H.h9(z,z.r,this.$ti)
y.c=z.e
return y}},
h9:{"^":"a;a,b,0c,0d,$ti",
scW:function(a){this.d=H.v(a,H.r(this,0))},
gF:function(){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.k(P.b9(z))
else{z=this.c
if(z==null){this.scW(null)
return!1}else{this.scW(z.a)
this.c=this.c.c
return!0}}},
$isaJ:1},
k5:{"^":"t:18;a",
$1:function(a){return this.a(a)}},
k6:{"^":"t:37;a",
$2:function(a,b){return this.a(a,b)}},
k7:{"^":"t:34;a",
$1:function(a){return this.a(H.M(a))}},
h1:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isdS:1,
m:{
h2:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.k(new P.fS("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
k_:function(a){return J.dD(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kh:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
b0:function(a){return a},
bK:function(a,b,c){if(a>>>0!==a||a>=c)throw H.k(H.bw(b,a))},
jJ:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.k(H.jZ(a,b,c))
return b},
hu:{"^":"F;",$iskM:1,"%":";ArrayBufferView;cG|eP|eQ|ht|eR|eS|bF"},
cG:{"^":"hu;",
gn:function(a){return a.length},
$isax:1,
$asax:I.d4},
ht:{"^":"eQ;",
j:function(a,b){H.bK(b,a,a.length)
return a[b]},
$asbV:function(){return[P.q]},
$asP:function(){return[P.q]},
$isj:1,
$asj:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]},
"%":"Float32Array"},
bF:{"^":"eS;",
$asbV:function(){return[P.u]},
$asP:function(){return[P.u]},
$isj:1,
$asj:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}},
kD:{"^":"bF;",
j:function(a,b){H.bK(b,a,a.length)
return a[b]},
"%":"Int16Array"},
kE:{"^":"bF;",
j:function(a,b){H.bK(b,a,a.length)
return a[b]},
"%":"Int32Array"},
kF:{"^":"bF;",
j:function(a,b){H.bK(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
kG:{"^":"bF;",
gn:function(a){return a.length},
j:function(a,b){H.bK(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
eP:{"^":"cG+P;"},
eQ:{"^":"eP+bV;"},
eR:{"^":"cG+P;"},
eS:{"^":"eR+bV;"}}],["","",,P,{"^":"",
j1:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jR()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b3(new P.j3(z),1)).observe(y,{childList:true})
return new P.j2(z,y,x)}else if(self.setImmediate!=null)return P.jS()
return P.jT()},
kO:[function(a){self.scheduleImmediate(H.b3(new P.j4(H.l(a,{func:1,ret:-1})),0))},"$1","jR",4,0,10],
kP:[function(a){self.setImmediate(H.b3(new P.j5(H.l(a,{func:1,ret:-1})),0))},"$1","jS",4,0,10],
kQ:[function(a){P.cL(C.n,H.l(a,{func:1,ret:-1}))},"$1","jT",4,0,10],
cL:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.h.Y(a.a,1000)
return P.jA(z<0?0:z,b)},
ef:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.aW]})
z=C.h.Y(a.a,1000)
return P.jB(z<0?0:z,b)},
jN:function(a,b){if(H.bL(a,{func:1,args:[P.a,P.aA]}))return H.l(a,{func:1,ret:null,args:[P.a,P.aA]})
if(H.bL(a,{func:1,args:[P.a]}))return H.l(a,{func:1,ret:null,args:[P.a]})
throw H.k(P.cp(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jM:function(){var z,y
for(;z=$.b1,z!=null;){$.bt=null
y=z.b
$.b1=y
if(y==null)$.bs=null
z.a.$0()}},
kT:[function(){$.d_=!0
try{P.jM()}finally{$.bt=null
$.d_=!1
if($.b1!=null)$.$get$cX().$1(P.f3())}},"$0","f3",0,0,3],
eZ:function(a){var z=new P.eJ(H.l(a,{func:1,ret:-1}))
if($.b1==null){$.bs=z
$.b1=z
if(!$.d_)$.$get$cX().$1(P.f3())}else{$.bs.b=z
$.bs=z}},
jQ:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.b1
if(z==null){P.eZ(a)
$.bt=$.bs
return}y=new P.eJ(a)
x=$.bt
if(x==null){y.b=z
$.bt=y
$.b1=y}else{y.b=x.b
x.b=y
$.bt=y
if(y.b==null)$.bs=y}},
kj:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.J
if(C.k===y){P.cf(null,null,C.k,a)
return}y.toString
P.cf(null,null,y,H.l(y.c8(a),z))},
ee:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.J
if(y===C.k){y.toString
return P.cL(a,b)}return P.cL(a,H.l(y.c8(b),z))},
ir:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aW]}
H.l(b,z)
y=$.J
if(y===C.k){y.toString
return P.ef(a,b)}x=y.ds(b,P.aW)
$.J.toString
return P.ef(a,H.l(x,z))},
ce:function(a,b,c,d,e){var z={}
z.a=d
P.jQ(new P.jO(z,e))},
eX:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.J
if(y===c)return d.$0()
$.J=c
z=y
try{y=d.$0()
return y}finally{$.J=z}},
eY:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.v(e,g)
y=$.J
if(y===c)return d.$1(e)
$.J=c
z=y
try{y=d.$1(e)
return y}finally{$.J=z}},
jP:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.v(e,h)
H.v(f,i)
y=$.J
if(y===c)return d.$2(e,f)
$.J=c
z=y
try{y=d.$2(e,f)
return y}finally{$.J=z}},
cf:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.k!==c
if(z)d=!(!z||!1)?c.c8(d):c.ii(d,-1)
P.eZ(d)},
j3:{"^":"t:13;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
j2:{"^":"t:33;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
j4:{"^":"t:2;a",
$0:function(){this.a.$0()}},
j5:{"^":"t:2;a",
$0:function(){this.a.$0()}},
eU:{"^":"a;a,0b,c",
eX:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b3(new P.jD(this,b),0),a)
else throw H.k(P.a6("`setTimeout()` not found."))},
eY:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b3(new P.jC(this,a,Date.now(),b),0),a)
else throw H.k(P.a6("Periodic timer."))},
$isaW:1,
m:{
jA:function(a,b){var z=new P.eU(!0,0)
z.eX(a,b)
return z},
jB:function(a,b){var z=new P.eU(!1,0)
z.eY(a,b)
return z}}},
jD:{"^":"t:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
jC:{"^":"t:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.eG(w,x)}z.c=y
this.d.$1(z)}},
b_:{"^":"a;0a,b,c,d,e,$ti",
iN:function(a){if(this.c!==6)return!0
return this.b.b.cC(H.l(this.d,{func:1,ret:P.U,args:[P.a]}),a.a,P.U,P.a)},
iG:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.r(this,1)}
w=this.b.b
if(H.bL(z,{func:1,args:[P.a,P.aA]}))return H.d5(w.j9(z,a.a,a.b,null,y,P.aA),x)
else return H.d5(w.cC(H.l(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aG:{"^":"a;dh:a<,b,0ho:c<,$ti",
ei:function(a,b,c){var z,y,x,w
z=H.r(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.J
if(y!==C.k){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.jN(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aG(0,$.J,[c])
w=b==null?1:3
this.cY(new P.b_(x,w,a,b,[z,c]))
return x},
jd:function(a,b){return this.ei(a,null,b)},
cY:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isb_")
this.c=a}else{if(z===2){y=H.h(this.c,"$isaG")
z=y.a
if(z<4){y.cY(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cf(null,null,z,H.l(new P.jc(this,a),{func:1,ret:-1}))}},
de:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isb_")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isaG")
y=u.a
if(y<4){u.de(a)
return}this.a=y
this.c=u.c}z.a=this.bh(a)
y=this.b
y.toString
P.cf(null,null,y,H.l(new P.jh(z,this),{func:1,ret:-1}))}},
c0:function(){var z=H.h(this.c,"$isb_")
this.c=null
return this.bh(z)},
bh:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
d_:function(a){var z,y,x
z=H.r(this,0)
H.d5(a,{futureOr:1,type:z})
y=this.$ti
if(H.bv(a,"$isbb",y,"$asbb"))if(H.bv(a,"$isaG",y,null))P.eL(a,this)
else P.jd(a,this)
else{x=this.c0()
H.v(a,z)
this.a=4
this.c=a
P.br(this,x)}},
d0:function(a,b){var z
H.h(b,"$isaA")
z=this.c0()
this.a=8
this.c=new P.ab(a,b)
P.br(this,z)},
$isbb:1,
m:{
jd:function(a,b){var z,y,x
b.a=1
try{a.ei(new P.je(b),new P.jf(b),null)}catch(x){z=H.aO(x)
y=H.b5(x)
P.kj(new P.jg(b,z,y))}},
eL:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isaG")
if(z>=4){y=b.c0()
b.a=a.a
b.c=a.c
P.br(b,y)}else{y=H.h(b.c,"$isb_")
b.a=2
b.c=a
a.de(y)}},
br:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isab")
y=y.b
u=v.a
t=v.b
y.toString
P.ce(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.br(z.a,b)}y=z.a
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
if(p){H.h(r,"$isab")
y=y.b
u=r.a
t=r.b
y.toString
P.ce(null,null,y,u,t)
return}o=$.J
if(o==null?q!=null:o!==q)$.J=q
else o=null
y=b.c
if(y===8)new P.jk(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jj(x,b,r).$0()}else if((y&2)!==0)new P.ji(z,x,b).$0()
if(o!=null)$.J=o
y=x.b
if(!!J.O(y).$isbb){if(y.a>=4){n=H.h(t.c,"$isb_")
t.c=null
b=t.bh(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eL(y,t)
return}}m=b.b
n=H.h(m.c,"$isb_")
m.c=null
b=m.bh(n)
y=x.a
u=x.b
if(!y){H.v(u,H.r(m,0))
m.a=4
m.c=u}else{H.h(u,"$isab")
m.a=8
m.c=u}z.a=m
y=m}}}},
jc:{"^":"t:2;a,b",
$0:function(){P.br(this.a,this.b)}},
jh:{"^":"t:2;a,b",
$0:function(){P.br(this.b,this.a.a)}},
je:{"^":"t:13;a",
$1:function(a){var z=this.a
z.a=0
z.d_(a)}},
jf:{"^":"t:29;a",
$2:function(a,b){this.a.d0(a,H.h(b,"$isaA"))},
$1:function(a){return this.$2(a,null)}},
jg:{"^":"t:2;a,b,c",
$0:function(){this.a.d0(this.b,this.c)}},
jk:{"^":"t:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.eh(H.l(w.d,{func:1}),null)}catch(v){y=H.aO(v)
x=H.b5(v)
if(this.d){w=H.h(this.a.a.c,"$isab").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isab")
else u.b=new P.ab(y,x)
u.a=!0
return}if(!!J.O(z).$isbb){if(z instanceof P.aG&&z.gdh()>=4){if(z.gdh()===8){w=this.b
w.b=H.h(z.gho(),"$isab")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.jd(new P.jl(t),null)
w.a=!1}}},
jl:{"^":"t:28;a",
$1:function(a){return this.a}},
jj:{"^":"t:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.r(x,0)
v=H.v(this.c,w)
u=H.r(x,1)
this.a.b=x.b.b.cC(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aO(t)
y=H.b5(t)
x=this.a
x.b=new P.ab(z,y)
x.a=!0}}},
ji:{"^":"t:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isab")
w=this.c
if(w.iN(z)&&w.e!=null){v=this.b
v.b=w.iG(z)
v.a=!1}}catch(u){y=H.aO(u)
x=H.b5(u)
w=H.h(this.a.a.c,"$isab")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ab(y,x)
s.a=!0}}},
eJ:{"^":"a;a,0b"},
ia:{"^":"a;$ti",
gn:function(a){var z,y,x,w
z={}
y=new P.aG(0,$.J,[P.u])
z.a=0
x=H.r(this,0)
w=H.l(new P.ic(z,this),{func:1,ret:-1,args:[x]})
H.l(new P.id(z,y),{func:1,ret:-1})
W.T(this.a,this.b,w,!1,x)
return y}},
ic:{"^":"t;a,b",
$1:function(a){H.v(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.D,args:[H.r(this.b,0)]}}},
id:{"^":"t:2;a,b",
$0:function(){this.b.d_(this.a.a)}},
cJ:{"^":"a;$ti"},
ib:{"^":"a;"},
aW:{"^":"a;"},
ab:{"^":"a;a,b",
i:function(a){return H.i(this.a)},
$isQ:1},
jI:{"^":"a;",$iskN:1},
jO:{"^":"t:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dR()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.k(z)
x=H.k(z)
x.stack=y.i(0)
throw x}},
jw:{"^":"jI;",
ja:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.k===$.J){a.$0()
return}P.eX(null,null,this,a,-1)}catch(x){z=H.aO(x)
y=H.b5(x)
P.ce(null,null,this,z,H.h(y,"$isaA"))}},
jb:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.v(b,c)
try{if(C.k===$.J){a.$1(b)
return}P.eY(null,null,this,a,b,-1,c)}catch(x){z=H.aO(x)
y=H.b5(x)
P.ce(null,null,this,z,H.h(y,"$isaA"))}},
ii:function(a,b){return new P.jy(this,H.l(a,{func:1,ret:b}),b)},
c8:function(a){return new P.jx(this,H.l(a,{func:1,ret:-1}))},
ds:function(a,b){return new P.jz(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
eh:function(a,b){H.l(a,{func:1,ret:b})
if($.J===C.k)return a.$0()
return P.eX(null,null,this,a,b)},
cC:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.v(b,d)
if($.J===C.k)return a.$1(b)
return P.eY(null,null,this,a,b,c,d)},
j9:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.v(b,e)
H.v(c,f)
if($.J===C.k)return a.$2(b,c)
return P.jP(null,null,this,a,b,c,d,e,f)}},
jy:{"^":"t;a,b,c",
$0:function(){return this.a.eh(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jx:{"^":"t:3;a,b",
$0:function(){return this.a.ja(this.b)}},
jz:{"^":"t;a,b,c",
$1:function(a){var z=this.c
return this.a.jb(this.b,H.v(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
ha:function(a,b,c){H.cl(a)
return H.e(H.k0(a,new H.bd(0,0,[b,c])),"$isdI",[b,c],"$asdI")},
hb:function(a,b,c,d){return new P.jq(0,0,[d])},
fZ:function(a,b,c){var z,y
if(P.d0(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bu()
C.a.h(y,a)
try{P.jL(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.e5(b,H.kc(z,"$isj"),", ")+c
return y.charCodeAt(0)==0?y:y},
cz:function(a,b,c){var z,y,x
if(P.d0(a))return b+"..."+c
z=new P.bJ(b)
y=$.$get$bu()
C.a.h(y,a)
try{x=z
x.a=P.e5(x.gaE(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gaE()+c
y=z.gaE()
return y.charCodeAt(0)==0?y:y},
d0:function(a){var z,y
for(z=0;y=$.$get$bu(),z<y.length;++z)if(a===y[z])return!0
return!1},
jL:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gO(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.v())return
w=H.i(z.gF())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.v()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gF();++x
if(!z.v()){if(x<=4){C.a.h(b,H.i(t))
return}v=H.i(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gF();++x
for(;z.v();t=s,s=r){r=z.gF();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.i(t)
v=H.i(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dL:function(a){var z,y,x
z={}
if(P.d0(a))return"{...}"
y=new P.bJ("")
try{C.a.h($.$get$bu(),a)
x=y
x.a=x.gaE()+"{"
z.a=!0
a.a9(0,new P.hg(z,y))
z=y
z.a=z.gaE()+"}"}finally{z=$.$get$bu()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gaE()
return z.charCodeAt(0)==0?z:z},
jq:{"^":"jm;a,0b,0c,0d,0e,0f,r,$ti",
gO:function(a){return P.eN(this,this.r,H.r(this,0))},
gn:function(a){return this.a},
h:function(a,b){var z
H.v(b,H.r(this,0))
if(typeof b==="number"&&(b&0x3ffffff)===b){z=this.c
if(z==null){z=P.eO()
this.c=z}return this.fa(z,b)}else return this.f_(b)},
f_:function(a){var z,y,x
H.v(a,H.r(this,0))
z=this.d
if(z==null){z=P.eO()
this.d=z}y=this.d1(a)
x=z[y]
if(x==null)z[y]=[this.bL(a)]
else{if(this.d7(x,a)>=0)return!1
x.push(this.bL(a))}return!0},
K:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.hg(this.c,b)
else return this.hf(b)},
hf:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.fs(z,a)
x=this.d7(y,a)
if(x<0)return!1
this.dj(y.splice(x,1)[0])
return!0},
fa:function(a,b){H.v(b,H.r(this,0))
if(H.h(a[b],"$iscY")!=null)return!1
a[b]=this.bL(b)
return!0},
hg:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$iscY")
if(z==null)return!1
this.dj(z)
delete a[b]
return!0},
d8:function(){this.r=this.r+1&67108863},
bL:function(a){var z,y
z=new P.cY(H.v(a,H.r(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.d8()
return z},
dj:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.d8()},
d1:function(a){return J.aP(a)&0x3ffffff},
fs:function(a,b){return a[this.d1(b)]},
d7:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(a[y].a==b)return y
return-1},
m:{
eO:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cY:{"^":"a;a,0b,0c"},
jr:{"^":"a;a,b,0c,0d,$ti",
scZ:function(a){this.d=H.v(a,H.r(this,0))},
gF:function(){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.k(P.b9(z))
else{z=this.c
if(z==null){this.scZ(null)
return!1}else{this.scZ(H.v(z.a,H.r(this,0)))
this.c=this.c.b
return!0}}},
$isaJ:1,
m:{
eN:function(a,b,c){var z=new P.jr(a,b,[c])
z.c=a.e
return z}}},
jm:{"^":"hX;"},
bZ:{"^":"js;",$isj:1,$isb:1},
P:{"^":"a;$ti",
gO:function(a){return new H.dJ(a,this.gn(a),0,[H.cj(this,a,"P",0)])},
a8:function(a,b){return this.j(a,b)},
jg:function(a,b){var z,y
z=H.c([],[H.cj(this,a,"P",0)])
C.a.sn(z,this.gn(a))
for(y=0;y<this.gn(a);++y)C.a.a_(z,y,this.j(a,y))
return z},
jf:function(a){return this.jg(a,!0)},
i:function(a){return P.cz(a,"[","]")}},
hf:{"^":"hh;"},
hg:{"^":"t:14;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.i(a)
z.a=y+": "
z.a+=H.i(b)}},
hh:{"^":"a;$ti",
gn:function(a){return this.a},
i:function(a){return P.dL(this)},
$isap:1},
hZ:{"^":"a;$ti",
i:function(a){return P.cz(this,"{","}")},
a8:function(a,b){var z,y,x
if(b<0)H.o(P.ac(b,0,null,"index",null))
for(z=P.eN(this,this.r,H.r(this,0)),y=0;z.v();){x=z.d
if(b===y)return x;++y}throw H.k(P.bc(b,this,"index",null,y))},
$isj:1,
$ise0:1},
hX:{"^":"hZ;"},
js:{"^":"a+P;"}}],["","",,P,{"^":"",cv:{"^":"a;$ti"},dp:{"^":"ib;$ti"},fK:{"^":"cv;",
$ascv:function(){return[P.x,[P.b,P.u]]}},iM:{"^":"fK;a"},iN:{"^":"dp;",
iq:function(a,b,c){var z,y,x,w
z=a.length
P.e_(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.jH(0,0,x)
if(w.fp(a,b,z)!==z)w.dk(C.j.cd(a,z-1),0)
return new Uint8Array(x.subarray(0,H.jJ(0,w.b,x.length)))},
ip:function(a){return this.iq(a,0,null)},
$asdp:function(){return[P.x,[P.b,P.u]]}},jH:{"^":"a;a,b,c",
dk:function(a,b){var z,y,x,w,v
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
fp:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.j.cd(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.j.be(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dk(w,C.j.be(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}}}],["","",,P,{"^":"",
fM:function(a){if(a instanceof H.t)return a.i(0)
return"Instance of '"+H.aV(a)+"'"},
hc:function(a,b,c,d){var z,y
H.v(b,d)
z=J.h_(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.a_(z,y,b)
return H.e(z,"$isb",[d],"$asb")},
hd:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gO(a);x.v();)C.a.h(y,H.v(x.gF(),c))
if(b)return y
return H.e(J.bX(y),"$isb",z,"$asb")},
cK:function(a,b,c){var z,y
z=P.u
H.e(a,"$isj",[z],"$asj")
if(a.constructor===Array){H.e(a,"$isaS",[z],"$asaS")
y=a.length
c=P.e_(b,c,y,null,null,null)
return H.dZ(b>0||c<y?C.a.eB(a,b,c):a)}return P.ie(a,b,c)},
ie:function(a,b,c){var z,y,x
H.e(a,"$isj",[P.u],"$asj")
z=J.bN(a)
for(y=0;y<b;++y)if(!z.v())throw H.k(P.ac(b,0,y,null,null))
x=[]
for(;z.v();)x.push(z.gF())
return H.dZ(x)},
hO:function(a,b,c){return new H.h1(a,H.h2(a,!1,!0,!1))},
jG:function(a,b,c,d){var z,y,x,w,v,u
H.e(a,"$isb",[P.u],"$asb")
if(c===C.v){z=$.$get$eV().b
z=z.test(b)}else z=!1
if(z)return b
y=C.z.ip(H.v(b,H.a9(c,"cv",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.f(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.hJ(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
bT:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aw(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fM(a)},
n:function(a){return new P.eK(a)},
da:function(a){H.kh(a)},
U:{"^":"a;"},
"+bool":0,
ai:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.ai))return!1
return this.a===b.a&&!0},
gV:function(a){var z=this.a
return(z^C.h.bi(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.fB(H.hI(this))
y=P.by(H.hG(this))
x=P.by(H.hC(this))
w=P.by(H.hD(this))
v=P.by(H.hF(this))
u=P.by(H.hH(this))
t=P.fC(H.hE(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
m:{
fB:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fC:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
by:function(a){if(a>=10)return""+a
return"0"+a}}},
q:{"^":"aa;"},
"+double":0,
ba:{"^":"a;a",
ai:function(a,b){return C.h.ai(this.a,H.h(b,"$isba").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.ba))return!1
return this.a===b.a},
gV:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fH()
y=this.a
if(y<0)return"-"+new P.ba(0-y).i(0)
x=z.$1(C.h.Y(y,6e7)%60)
w=z.$1(C.h.Y(y,1e6)%60)
v=new P.fG().$1(y%1e6)
return""+C.h.Y(y,36e8)+":"+H.i(x)+":"+H.i(w)+"."+H.i(v)},
m:{
dy:function(a,b,c,d,e,f){return new P.ba(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fG:{"^":"t:15;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fH:{"^":"t:15;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
Q:{"^":"a;"},
dR:{"^":"Q;",
i:function(a){return"Throw of null."}},
aQ:{"^":"Q;a,b,c,d",
gbN:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbM:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.i(z)
w=this.gbN()+y+x
if(!this.a)return w
v=this.gbM()
u=P.bT(this.b)
return w+v+": "+H.i(u)},
m:{
cp:function(a,b,c){return new P.aQ(!0,a,b,c)}}},
c2:{"^":"aQ;e,f,a,b,c,d",
gbN:function(){return"RangeError"},
gbM:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.i(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.i(z)
else if(x>z)y=": Not in range "+H.i(z)+".."+H.i(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.i(z)}return y},
m:{
bH:function(a,b,c){return new P.c2(null,null,!0,a,b,"Value not in range")},
ac:function(a,b,c,d,e){return new P.c2(b,c,!0,a,d,"Invalid value")},
e_:function(a,b,c,d,e,f){if(0>a||a>c)throw H.k(P.ac(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.k(P.ac(b,a,c,"end",f))
return b}return c}}},
fY:{"^":"aQ;e,n:f>,a,b,c,d",
gbN:function(){return"RangeError"},
gbM:function(){if(J.fh(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.i(z)},
m:{
bc:function(a,b,c,d,e){var z=H.a0(e!=null?e:J.bx(b))
return new P.fY(b,z,!0,a,c,"Index out of range")}}},
iH:{"^":"Q;a",
i:function(a){return"Unsupported operation: "+this.a},
m:{
a6:function(a){return new P.iH(a)}}},
iE:{"^":"Q;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
m:{
eu:function(a){return new P.iE(a)}}},
i8:{"^":"Q;a",
i:function(a){return"Bad state: "+this.a}},
fx:{"^":"Q;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.i(P.bT(z))+"."},
m:{
b9:function(a){return new P.fx(a)}}},
hy:{"^":"a;",
i:function(a){return"Out of Memory"},
$isQ:1},
e4:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isQ:1},
fA:{"^":"Q;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eK:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
fS:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.j.cP(x,0,75)+"..."
return y+"\n"+x}},
u:{"^":"aa;"},
"+int":0,
j:{"^":"a;$ti",
gn:function(a){var z,y
z=this.gO(this)
for(y=0;z.v();)++y
return y},
a8:function(a,b){var z,y,x
if(b<0)H.o(P.ac(b,0,null,"index",null))
for(z=this.gO(this),y=0;z.v();){x=z.gF()
if(b===y)return x;++y}throw H.k(P.bc(b,this,"index",null,y))},
i:function(a){return P.fZ(this,"(",")")}},
aJ:{"^":"a;$ti"},
b:{"^":"a;$ti",$isj:1},
"+List":0,
D:{"^":"a;",
gV:function(a){return P.a.prototype.gV.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
aa:{"^":"a;"},
"+num":0,
a:{"^":";",
u:function(a,b){return this===b},
gV:function(a){return H.bj(this)},
i:function(a){return"Instance of '"+H.aV(this)+"'"},
toString:function(){return this.i(this)}},
aA:{"^":"a;"},
x:{"^":"a;",$isdS:1},
"+String":0,
bJ:{"^":"a;aE:a<",
gn:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
m:{
e5:function(a,b,c){var z=J.bN(b)
if(!z.v())return a
if(c.length===0){do a+=H.i(z.gF())
while(z.v())}else{a+=H.i(z.gF())
for(;z.v();)a=a+c+H.i(z.gF())}return a}}}}],["","",,W,{"^":"",
dj:function(a,b){var z=document.createElement("canvas")
return z},
fJ:function(a){H.h(a,"$isbU")
return"wheel"},
cc:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eM:function(a,b,c,d){var z,y
z=W.cc(W.cc(W.cc(W.cc(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
f0:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.J
if(z===C.k)return a
return z.ds(a,b)},
aR:{"^":"X;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
ks:{"^":"aR;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kt:{"^":"aR;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
fn:{"^":"aR;","%":"HTMLBodyElement"},
cu:{"^":"aR;",
cK:function(a,b,c){var z=this.ft(a,b,P.jV(c,null))
return z},
ft:function(a,b,c){return a.getContext(b,c)},
$iscu:1,
"%":"HTMLCanvasElement"},
kw:{"^":"K;0n:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
ky:{"^":"j8;0n:length=",
eu:function(a,b){var z=this.fu(a,this.f5(a,b))
return z==null?"":z},
f5:function(a,b){var z,y
z=$.$get$dq()
y=z[b]
if(typeof y==="string")return y
y=this.hD(a,b)
z[b]=y
return y},
hD:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fD()+b
if(z in a)return z
return b},
fu:function(a,b){return a.getPropertyValue(b)},
gc9:function(a){return a.bottom},
gap:function(a){return a.height},
gaO:function(a){return a.left},
gb5:function(a){return a.right},
gb9:function(a){return a.top},
gaq:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fz:{"^":"a;",
gaO:function(a){return this.eu(a,"left")}},
dx:{"^":"aR;",$isdx:1,"%":"HTMLDivElement"},
fE:{"^":"K;",
er:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
kz:{"^":"F;",
i:function(a){return String(a)},
"%":"DOMException"},
fF:{"^":"F;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
u:function(a,b){var z
if(b==null)return!1
if(!H.bv(b,"$isaz",[P.aa],"$asaz"))return!1
z=J.bM(b)
return a.left===z.gaO(b)&&a.top===z.gb9(b)&&a.width===z.gaq(b)&&a.height===z.gap(b)},
gV:function(a){return W.eM(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gc9:function(a){return a.bottom},
gap:function(a){return a.height},
gaO:function(a){return a.left},
gb5:function(a){return a.right},
gb9:function(a){return a.top},
gaq:function(a){return a.width},
$isaz:1,
$asaz:function(){return[P.aa]},
"%":";DOMRectReadOnly"},
j7:{"^":"bZ;a,b",
gn:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.f(z,b)
return H.h(z[b],"$isX")},
h:function(a,b){J.dc(this.a,b)
return b},
gO:function(a){var z=this.jf(this)
return new J.ah(z,z.length,0,[H.r(z,0)])},
$asP:function(){return[W.X]},
$asj:function(){return[W.X]},
$asb:function(){return[W.X]}},
X:{"^":"K;",
gdw:function(a){return new W.j7(a,a.children)},
gdC:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.ai()
if(x<0)x=-x*0
if(typeof w!=="number")return w.ai()
if(w<0)w=-w*0
return new P.az(z,y,x,w,[P.aa])},
i:function(a){return a.localName},
$isX:1,
"%":";Element"},
a4:{"^":"F;",$isa4:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
bU:{"^":"F;",
f0:function(a,b,c,d){return a.addEventListener(b,H.b3(H.l(c,{func:1,args:[W.a4]}),1),!1)},
$isbU:1,
"%":";EventTarget"},
kA:{"^":"aR;0n:length=","%":"HTMLFormElement"},
fV:{"^":"jo;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bc(b,a,null,null,null))
return a[b]},
a8:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isax:1,
$asax:function(){return[W.K]},
$asP:function(){return[W.K]},
$isj:1,
$asj:function(){return[W.K]},
$isb:1,
$asb:function(){return[W.K]},
$isfV:1,
$asaI:function(){return[W.K]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
fW:{"^":"fE;","%":"HTMLDocument"},
be:{"^":"cO;",$isbe:1,"%":"KeyboardEvent"},
ak:{"^":"cO;",$isak:1,"%":"PointerEvent;DragEvent|MouseEvent"},
j6:{"^":"bZ;a",
gO:function(a){var z=this.a.childNodes
return new W.dA(z,z.length,-1,[H.cj(C.M,z,"aI",0)])},
gn:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
$asP:function(){return[W.K]},
$asj:function(){return[W.K]},
$asb:function(){return[W.K]}},
K:{"^":"bU;",
i:function(a){var z=a.nodeValue
return z==null?this.eC(a):z},
Z:function(a,b){return a.appendChild(b)},
$isK:1,
"%":"Attr|DocumentFragment|DocumentType|ShadowRoot;Node"},
hv:{"^":"ju;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bc(b,a,null,null,null))
return a[b]},
a8:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isax:1,
$asax:function(){return[W.K]},
$asP:function(){return[W.K]},
$isj:1,
$asj:function(){return[W.K]},
$isb:1,
$asb:function(){return[W.K]},
$asaI:function(){return[W.K]},
"%":"NodeList|RadioNodeList"},
kH:{"^":"aR;0n:length=","%":"HTMLSelectElement"},
bm:{"^":"F;",$isbm:1,"%":"Touch"},
aX:{"^":"cO;",$isaX:1,"%":"TouchEvent"},
kL:{"^":"jF;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bc(b,a,null,null,null))
return a[b]},
a8:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isax:1,
$asax:function(){return[W.bm]},
$asP:function(){return[W.bm]},
$isj:1,
$asj:function(){return[W.bm]},
$isb:1,
$asb:function(){return[W.bm]},
$asaI:function(){return[W.bm]},
"%":"TouchList"},
cO:{"^":"a4;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
bq:{"^":"ak;",
giw:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.k(P.a6("deltaY is not supported"))},
giv:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.k(P.a6("deltaX is not supported"))},
$isbq:1,
"%":"WheelEvent"},
j0:{"^":"bU;",
hl:function(a,b){return a.requestAnimationFrame(H.b3(H.l(b,{func:1,ret:-1,args:[P.aa]}),1))},
fi:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
kR:{"^":"fF;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
u:function(a,b){var z
if(b==null)return!1
if(!H.bv(b,"$isaz",[P.aa],"$asaz"))return!1
z=J.bM(b)
return a.left===z.gaO(b)&&a.top===z.gb9(b)&&a.width===z.gaq(b)&&a.height===z.gap(b)},
gV:function(a){return W.eM(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gap:function(a){return a.height},
gaq:function(a){return a.width},
"%":"ClientRect|DOMRect"},
j9:{"^":"ia;a,b,c,$ti"},
kS:{"^":"j9;a,b,c,$ti"},
ja:{"^":"cJ;a,b,c,d,e,$ti",m:{
T:function(a,b,c,d,e){var z,y
z=W.f0(new W.jb(c),W.a4)
y=z!=null
if(y&&!0){H.l(z,{func:1,args:[W.a4]})
if(y)J.fj(a,b,z,!1)}return new W.ja(0,a,b,z,!1,[e])}}},
jb:{"^":"t:27;a",
$1:function(a){return this.a.$1(H.h(a,"$isa4"))}},
aI:{"^":"a;$ti",
gO:function(a){return new W.dA(a,this.gn(a),-1,[H.cj(this,a,"aI",0)])}},
dA:{"^":"a;a,b,c,0d,$ti",
sd6:function(a){this.d=H.v(a,H.r(this,0))},
v:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sd6(J.fi(this.a,z))
this.c=z
return!0}this.sd6(null)
this.c=y
return!1},
gF:function(){return this.d},
$isaJ:1},
j8:{"^":"F+fz;"},
jn:{"^":"F+P;"},
jo:{"^":"jn+aI;"},
jt:{"^":"F+P;"},
ju:{"^":"jt+aI;"},
jE:{"^":"F+P;"},
jF:{"^":"jE+aI;"}}],["","",,P,{"^":"",
jV:function(a,b){var z={}
a.a9(0,new P.jW(z))
return z},
dw:function(){var z=$.dv
if(z==null){z=J.co(window.navigator.userAgent,"Opera",0)
$.dv=z}return z},
fD:function(){var z,y
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
jW:{"^":"t:14;a",
$2:function(a,b){this.a[a]=b}},
fP:{"^":"bZ;a,b",
gbQ:function(){var z,y,x
z=this.b
y=H.a9(z,"P",0)
x=W.X
return new H.hi(new H.iZ(z,H.l(new P.fQ(),{func:1,ret:P.U,args:[y]}),[y]),H.l(new P.fR(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){J.dc(this.b.a,b)},
gn:function(a){return J.bx(this.gbQ().a)},
j:function(a,b){var z=this.gbQ()
return z.b.$1(J.dd(z.a,b))},
gO:function(a){var z=P.hd(this.gbQ(),!1,W.X)
return new J.ah(z,z.length,0,[H.r(z,0)])},
$asP:function(){return[W.X]},
$asj:function(){return[W.X]},
$asb:function(){return[W.X]}},
fQ:{"^":"t:26;",
$1:function(a){return!!J.O(H.h(a,"$isK")).$isX}},
fR:{"^":"t:32;",
$1:function(a){return H.d(H.h(a,"$isK"),"$isX")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cd:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jp:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jv:{"^":"a;$ti",
gb5:function(a){var z=this.a
if(typeof z!=="number")return z.I()
return H.v(z+this.c,H.r(this,0))},
gc9:function(a){var z=this.b
if(typeof z!=="number")return z.I()
return H.v(z+this.d,H.r(this,0))},
i:function(a){return"Rectangle ("+H.i(this.a)+", "+H.i(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(!H.bv(b,"$isaz",[P.aa],"$asaz"))return!1
z=this.a
y=J.bM(b)
x=y.gaO(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb9(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.I()
w=H.r(this,0)
if(H.v(z+this.c,w)===y.gb5(b)){if(typeof x!=="number")return x.I()
z=H.v(x+this.d,w)===y.gc9(b)}else z=!1}else z=!1}else z=!1
return z},
gV:function(a){var z,y,x,w,v
z=this.a
y=J.aP(z)
x=this.b
w=J.aP(x)
if(typeof z!=="number")return z.I()
v=H.r(this,0)
z=H.v(z+this.c,v)
if(typeof x!=="number")return x.I()
v=H.v(x+this.d,v)
return P.jp(P.cd(P.cd(P.cd(P.cd(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
az:{"^":"jv;aO:a>,b9:b>,aq:c>,ap:d>,$ti"}}],["","",,P,{"^":"",kJ:{"^":"X;",
gdw:function(a){return new P.fP(a,new W.j6(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"}}],["","",,P,{"^":""}],["","",,P,{"^":"",fo:{"^":"F;",$isfo:1,"%":"WebGLBuffer"},fT:{"^":"F;",$isfT:1,"%":"WebGLFramebuffer"},hL:{"^":"F;",$ishL:1,"%":"WebGLProgram"},hU:{"^":"F;",$ishU:1,"%":"WebGLRenderbuffer"},cH:{"^":"F;",
dl:function(a,b){return a.activeTexture(b)},
dq:function(a,b,c){return a.attachShader(b,c)},
am:function(a,b,c){return a.bindBuffer(b,c)},
aX:function(a,b,c){return a.bindFramebuffer(b,c)},
dr:function(a,b,c){return a.bindRenderbuffer(b,c)},
aI:function(a,b,c){return a.bindTexture(b,c)},
ij:function(a,b,c){return a.blendFunc(b,c)},
dt:function(a,b,c,d){return a.bufferData(b,c,d)},
dz:function(a,b){return a.clear(b)},
dA:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
dB:function(a,b){return a.clearDepth(b)},
im:function(a,b){return a.compileShader(b)},
ir:function(a,b){return a.createShader(b)},
it:function(a,b){return a.deleteProgram(b)},
iu:function(a,b){return a.deleteShader(b)},
dG:function(a,b){return a.depthFunc(b)},
ix:function(a,b){return a.disable(b)},
dJ:function(a,b){return a.disableVertexAttribArray(b)},
iy:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
aZ:function(a,b){return a.enable(b)},
dN:function(a,b){return a.enableVertexAttribArray(b)},
iE:function(a,b,c,d,e){return a.framebufferRenderbuffer(b,c,d,e)},
iF:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
eo:function(a,b,c){return a.getActiveAttrib(b,c)},
ep:function(a,b,c){return a.getActiveUniform(b,c)},
eq:function(a,b,c){return a.getAttribLocation(b,c)},
bG:function(a,b){return a.getParameter(b)},
es:function(a,b){return a.getProgramInfoLog(b)},
bH:function(a,b,c){return a.getProgramParameter(b,c)},
ev:function(a,b){return a.getShaderInfoLog(b)},
ew:function(a,b,c){return a.getShaderParameter(b,c)},
ex:function(a,b,c){return a.getUniformLocation(b,c)},
iL:function(a,b){return a.linkProgram(b)},
j5:function(a,b,c,d,e){return a.renderbufferStorage(b,c,d,e)},
eA:function(a,b,c){return a.shaderSource(b,c)},
jc:function(a,b,c,d,e,f,g,h,i,j){this.hF(a,b,c,d,e,f,g,h,i,j)
return},
hF:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
bD:function(a,b,c,d){return a.texParameteri(b,c,d)},
G:function(a,b,c){return a.uniform1f(b,c)},
H:function(a,b,c){return a.uniform1i(b,c)},
bE:function(a,b,c,d){return a.uniform2f(b,c,d)},
q:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ji:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
ek:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cE:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cF:function(a,b){return a.useProgram(b)},
jj:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
el:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$iscH:1,
"%":"WebGLRenderingContext"},i_:{"^":"F;",$isi_:1,"%":"WebGLShader"},ig:{"^":"F;",$isig:1,"%":"WebGLTexture"},iC:{"^":"F;",$isiC:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",H:{"^":"a;0a,0b,0c,0d,$ti",
sfC:function(a){this.a=H.e(a,"$isb",[H.a9(this,"H",0)],"$asb")},
sdc:function(a){this.b=H.l(a,{func:1,ret:P.U,args:[[P.j,H.a9(this,"H",0)]]})},
sd9:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.u,[P.j,H.a9(this,"H",0)]]})},
sdd:function(a){this.d=H.l(a,{func:1,ret:-1,args:[P.u,[P.j,H.a9(this,"H",0)]]})},
bc:function(a){this.sfC(H.c([],[a]))
this.sdc(null)
this.sd9(null)
this.sdd(null)},
cL:function(a,b,c){var z=H.a9(this,"H",0)
H.l(b,{func:1,ret:P.U,args:[[P.j,z]]})
z={func:1,ret:-1,args:[P.u,[P.j,z]]}
H.l(a,z)
H.l(c,z)
this.sdc(b)
this.sd9(a)
this.sdd(c)},
aB:function(a,b){return this.cL(a,null,b)},
bY:function(a){var z
H.e(a,"$isj",[H.a9(this,"H",0)],"$asj")
z=this.b
if(z!=null)return z.$1(a)
return!0},
cS:function(a,b){var z
H.e(b,"$isj",[H.a9(this,"H",0)],"$asj")
z=this.c
if(z!=null)z.$2(a,b)},
gn:function(a){return this.a.length},
gO:function(a){var z=this.a
return new J.ah(z,z.length,0,[H.r(z,0)])},
a8:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.a9(this,"H",0)
H.v(b,z)
z=[z]
if(this.bY(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.cS(x,H.c([b],z))}},
c4:function(a,b){var z,y
H.e(b,"$isj",[H.a9(this,"H",0)],"$asj")
if(this.bY(b)){z=this.a
y=z.length
C.a.c4(z,b)
this.cS(y,b)}},
$isj:1,
m:{
bQ:function(a){var z=new O.H([a])
z.bc(a)
return z}}},cE:{"^":"a;0a,0b",
sbR:function(a){this.a=H.e(a,"$isb",[V.a5],"$asb")},
gn:function(a){return this.a.length},
gl:function(){var z=this.b
if(z==null){z=D.A()
this.b=z}return z},
eM:function(a){var z=this.b
if(!(z==null))z.B(a)},
aC:function(){return this.eM(null)},
gW:function(){var z=this.a
if(z.length>0)return C.a.gcq(z)
else return V.aK()},
bB:function(a){var z=this.a
if(a==null)C.a.h(z,V.aK())
else C.a.h(z,a)
this.aC()},
b3:function(){var z=this.a
if(z.length>0){z.pop()
this.aC()}}}}],["","",,E,{"^":"",cq:{"^":"a;"},aj:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0ab:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
seN:function(a,b){this.y=H.e(b,"$isH",[E.aj],"$asH")},
sab:function(a){this.z=H.h(a,"$isao")},
sbI:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gl().K(0,this.gef())
y=this.c
if(y!=null)y.gl().h(0,this.gef())
x=new D.y("shape",z,this.c,this,[F.e1])
x.b=!0
this.aP(x)}},
ah:function(a){var z
for(z=this.y.a,z=new J.ah(z,z.length,0,[H.r(z,0)]);z.v();)z.d.ah(a)},
a5:function(a){var z,y
z=a.dx
C.a.h(z.a,z.gW())
z.aC()
a.cz(this.f)
z=a.dy
y=(z&&C.a).gcq(z)
if(y!=null&&this.d!=null)y.eg(a,this)
for(z=this.y.a,z=new J.ah(z,z.length,0,[H.r(z,0)]);z.v();)z.d.a5(a)
a.cw()
a.dx.b3()},
gl:function(){var z=this.z
if(z==null){z=D.A()
this.z=z}return z},
aP:function(a){var z=this.z
if(!(z==null))z.B(a)},
a4:function(){return this.aP(null)},
iT:[function(a){H.h(a,"$isp")
this.e=null
this.aP(a)},function(){return this.iT(null)},"k6","$1","$0","gef",0,2,0],
iR:[function(a){this.aP(H.h(a,"$isp"))},function(){return this.iR(null)},"k0","$1","$0","gee",0,2,0],
k_:[function(a,b){var z,y,x,w,v,u,t
H.e(b,"$isj",[E.aj],"$asj")
for(z=b.length,y=this.gee(),x={func:1,ret:-1,args:[D.p]},w=[x],v=0;v<b.length;b.length===z||(0,H.w)(b),++v){u=b[v]
if(u!=null){if(u.gab()==null){t=new D.ao()
t.sa0(null)
t.saU(null)
t.c=null
t.d=0
u.sab(t)}t=u.gab()
t.toString
H.l(y,x)
if(t.a==null)t.sa0(H.c([],w))
t=t.a;(t&&C.a).h(t,y)}}this.a4()},"$2","giQ",8,0,6],
k5:[function(a,b){var z,y
H.e(b,"$isj",[E.aj],"$asj")
for(z=b.gO(b),y=this.gee();z.v();)z.gF().gl().K(0,y)
this.a4()},"$2","giS",8,0,6],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isas:1,
m:{
dz:function(a,b,c,d,e,f){var z=new E.aj()
z.a=d
z.b=!0
z.seN(0,O.bQ(E.aj))
z.y.aB(z.giQ(),z.giS())
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
z.sbI(0,e)
return z}}},hP:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
shE:function(a){this.dy=H.e(a,"$isb",[O.bl],"$asb")},
shx:function(a){this.fr=H.e(a,"$isap",[P.x,A.c5],"$asap")},
eI:function(a,b){var z,y
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
z=new O.cE()
y=[V.a5]
z.sbR(H.c([],y))
z.b=null
z.gl().h(0,new E.hR(this))
this.cy=z
z=new O.cE()
z.sbR(H.c([],y))
z.b=null
z.gl().h(0,new E.hS(this))
this.db=z
z=new O.cE()
z.sbR(H.c([],y))
z.b=null
z.gl().h(0,new E.hT(this))
this.dx=z
this.shE(H.c([],[O.bl]))
z=this.dy;(z&&C.a).h(z,null)
this.shx(new H.bd(0,0,[P.x,A.c5]))},
gj1:function(){var z=this.z
if(z==null){z=this.cy.gW().p(0,this.db.gW())
this.z=z}return z},
cz:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gcq(z):a;(z&&C.a).h(z,y)},
cw:function(){var z=this.dy
if(z.length>1)z.pop()},
dn:function(a){var z=a.b
if(z.length===0)throw H.k(P.n("May not cache a shader with no name."))
if(this.fr.dE(z))throw H.k(P.n('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.a_(0,z,a)},
m:{
hQ:function(a,b){var z=new E.hP(a,b)
z.eI(a,b)
return z}}},hR:{"^":"t:7;a",
$1:function(a){var z
H.h(a,"$isp")
z=this.a
z.z=null
z.ch=null}},hS:{"^":"t:7;a",
$1:function(a){var z
H.h(a,"$isp")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hT:{"^":"t:7;a",
$1:function(a){var z
H.h(a,"$isp")
z=this.a
z.ch=null
z.cx=null}},io:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0ab:x<,0y,0z,0Q,0ch,0cx,0cy",
sab:function(a){this.x=H.h(a,"$isao")},
eP:[function(a){H.h(a,"$isp")
this.j7()},function(){return this.eP(null)},"eO","$1","$0","gcT",0,2,0],
giD:function(){var z,y,x
z=Date.now()
y=C.h.Y(P.dy(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.ai(z,!1)
return x/y},
df:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.p()
if(typeof z!=="number")return H.z(z)
x=C.i.cn(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.p()
w=C.i.cn(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.ee(C.n,this.gj6())}},
j7:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.iq(this),{func:1,ret:-1,args:[P.aa]})
C.x.fi(z)
C.x.hl(z,W.f0(y,P.aa))}},"$0","gj6",0,0,3],
j4:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.df()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ai(w,!1)
x.y=P.dy(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sn(w.a,0)
w.aC()
w=x.db
C.a.sn(w.a,0)
w.aC()
w=x.dx
C.a.sn(w.a,0)
w.aC()
w=x.dy;(w&&C.a).sn(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a5(this.e)}}catch(v){z=H.aO(v)
y=H.b5(v)
P.da("Error: "+H.i(z))
P.da("Stack: "+H.i(y))
throw H.k(z)}},
m:{
ip:function(a,b,c,d,e){var z,y,x,w
z=J.O(a)
if(!!z.$iscu)return E.ed(a,!0,!0,!0,!1)
y=W.dj(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gdw(a).h(0,y)
w=E.ed(y,!0,!0,!0,!1)
w.a=a
return w},
ed:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.io()
y=P.ha(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.x,null)
x=C.m.cK(a,"webgl",y)
x=H.h(x==null?C.m.cK(a,"experimental-webgl",y):x,"$iscH")
if(x==null)H.o(P.n("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hQ(x,a)
w=new T.im(x)
w.b=H.a0((x&&C.b).bG(x,3379))
w.c=H.a0(C.b.bG(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.iI(a)
v=new X.h4()
v.c=new X.ar(!1,!1,!1)
v.she(P.hb(null,null,null,P.u))
w.b=v
v=new X.hs(w)
v.f=0
v.r=V.ay()
v.x=V.ay()
v.Q=1
v.ch=1
w.c=v
v=new X.he(w)
v.r=0
v.x=V.ay()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.it(w)
v.e=0
v.f=V.ay()
v.r=V.ay()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.sfk(H.c([],[[P.cJ,P.a]]))
v=w.z
u=document
t=W.ak
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.T(u,"contextmenu",H.l(w.gfR(),s),!1,t))
v=w.z
r=W.a4
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.T(a,"focus",H.l(w.gfW(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.T(a,"blur",H.l(w.gfO(),q),!1,r))
v=w.z
p=W.be
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.T(u,"keyup",H.l(w.gfY(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.T(u,"keydown",H.l(w.gfX(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.T(a,"mousedown",H.l(w.gh0(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.T(a,"mouseup",H.l(w.gh2(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.T(a,"mousemove",H.l(w.gh1(),s),!1,t))
p=w.z
o=W.bq;(p&&C.a).h(p,W.T(a,H.M(W.fJ(a)),H.l(w.gh3(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.T(u,"mousemove",H.l(w.gfS(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.T(u,"mouseup",H.l(w.gfT(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.T(u,"pointerlockchange",H.l(w.gh4(),q),!1,r))
r=w.z
q=W.aX
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.T(a,"touchstart",H.l(w.ghc(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.T(a,"touchend",H.l(w.gha(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.T(a,"touchmove",H.l(w.ghb(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.ai(Date.now(),!1)
z.cy=0
z.df()
return z}}},iq:{"^":"t:23;a",
$1:function(a){var z
H.kg(a)
z=this.a
if(z.ch){z.ch=!1
z.j4()}}}}],["","",,Z,{"^":"",eG:{"^":"a;a,b",$isku:1,m:{
eI:function(a,b,c){var z
H.e(c,"$isb",[P.u],"$asb")
z=a.createBuffer()
C.b.am(a,b,z)
C.b.dt(a,b,new Int16Array(H.b0(c)),35044)
C.b.am(a,b,null)
return new Z.eG(b,z)}}},dh:{"^":"cq;a,b,c,d,e",
a1:function(a){var z,y,x
try{y=a.a
C.b.dN(y,this.e)
C.b.jj(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.aO(x)
y=P.n('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.i(z))
throw H.k(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.i(this.e)+"]"}},eH:{"^":"a;a",$iskv:1},ct:{"^":"a;a,0b,c,d",
sfw:function(a){this.b=H.e(a,"$isb",[Z.bW],"$asb")},
ay:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
a1:function(a){var z,y
z=this.a
C.b.am(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].a1(a)},
aQ:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.b.dJ(x,z[y].e)
C.b.am(x,this.a.a,null)},
a5:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.f(w,x)
v=w[x]
w=v.c
u=w.a
C.b.am(y,u,w.b)
C.b.iy(y,v.a,v.b,5123,0)
C.b.am(y,u,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.x]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.w)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.aw(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.C(y,", ")+"\nAttrs:   "+C.a.C(u,", ")},
$iskK:1},bW:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aV(this.c)+"'")+"]"}},aY:{"^":"a;a",
gcM:function(a){var z,y
z=this.a
y=(z&$.$get$am().a)!==0?3:0
if((z&$.$get$aD().a)!==0)y+=3
if((z&$.$get$aC().a)!==0)y+=3
if((z&$.$get$aE().a)!==0)y+=2
if((z&$.$get$aF().a)!==0)y+=3
if((z&$.$get$bo().a)!==0)y+=3
if((z&$.$get$bp().a)!==0)y+=4
if((z&$.$get$aZ().a)!==0)++y
return(z&$.$get$aB().a)!==0?y+4:y},
ih:function(a){var z,y,x
z=$.$get$am()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aD()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aC()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aE()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aF()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bo()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bp()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aZ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aB()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eF()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aY))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.x])
y=this.a
if((y&$.$get$am().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aD().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aC().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aE().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aF().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bo().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bp().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aZ().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aB().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.C(z,"|")},
m:{
af:function(a){return new Z.aY(a)}}}}],["","",,D,{"^":"",dk:{"^":"a;"},ao:{"^":"a;0a,0b,0c,0d",
sa0:function(a){this.a=H.e(a,"$isb",[{func:1,ret:-1,args:[D.p]}],"$asb")},
saU:function(a){this.b=H.e(a,"$isb",[{func:1,ret:-1,args:[D.p]}],"$asb")},
h:function(a,b){var z={func:1,ret:-1,args:[D.p]}
H.l(b,z)
if(this.a==null)this.sa0(H.c([],[z]))
z=this.a;(z&&C.a).h(z,b)},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.p]})
z=this.a
z=z==null?null:C.a.aK(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).K(z,b)||!1}else y=!1
return y},
B:function(a){var z,y,x,w
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
return!0}if(!x)C.a.a9(y,new D.fN(z))
return!0},
dM:function(){return this.B(null)},
j8:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.B(y)}}},
aA:function(){return this.j8(!0,!1)},
m:{
A:function(){var z=new D.ao()
z.sa0(null)
z.saU(null)
z.c=null
z.d=0
return z}}},fN:{"^":"t:38;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.p]})
z=this.a.a
z.b
a.$1(z)}},p:{"^":"a;a,0b"},bA:{"^":"p;c,d,a,0b,$ti"},bB:{"^":"p;c,d,a,0b,$ti"},y:{"^":"p;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}}],["","",,X,{"^":"",di:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.di))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}},dH:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dH))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}},h4:{"^":"a;0a,0b,0c,0d",
she:function(a){this.d=H.e(a,"$ise0",[P.u],"$ase0")},
iZ:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
iV:function(a){this.c=a.b
this.d.K(0,a.a)
return!1}},dK:{"^":"c1;x,y,c,d,e,a,0b"},he:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aT:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ai(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.p()
v=b.b
u=this.ch
if(typeof v!=="number")return v.p()
t=new V.Z(y.a+x*w,y.b+v*u)
u=this.a.gaJ()
s=new X.bg(a,V.ay(),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cv:function(a,b){this.r=a.a
return!1},
b2:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.ez()
if(typeof z!=="number")return z.em()
this.r=(z&~y)>>>0
return!1},
b1:function(a,b){var z=this.d
if(z==null)return!1
z.B(this.aT(a,b))
return!0},
j_:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaJ()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.p()
t=a.b
s=this.cy
if(typeof t!=="number")return t.p()
w=new X.cF(new V.L(v*u,t*s),y,x,new P.ai(w,!1),this)
w.b=!0
z.B(w)
return!0},
h_:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ai(Date.now(),!1)
y=this.f
x=new X.dK(c,a,this.a.gaJ(),b,z,this)
x.b=!0
y.B(x)
this.y=z
this.x=V.ay()}},ar:{"^":"a;a,b,c",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ar))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},bg:{"^":"c1;x,y,z,Q,ch,c,d,e,a,0b"},hs:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bO:function(a,b,c){var z,y,x
z=new P.ai(Date.now(),!1)
y=this.a.gaJ()
x=new X.bg(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cv:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.B(this.bO(a,b,!0))
return!0},
b2:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.ez()
if(typeof z!=="number")return z.em()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.B(this.bO(a,b,!0))
return!0},
b1:function(a,b){var z=this.d
if(z==null)return!1
z.B(this.bO(a,b,!1))
return!0},
j0:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaJ()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.p()
u=a.b
t=this.ch
if(typeof u!=="number")return u.p()
x=new X.cF(new V.L(w*v,u*t),y,b,new P.ai(x,!1),this)
x.b=!0
z.B(x)
return!0},
gdL:function(){var z=this.b
if(z==null){z=D.A()
this.b=z}return z},
gbF:function(){var z=this.c
if(z==null){z=D.A()
this.c=z}return z},
ged:function(){var z=this.d
if(z==null){z=D.A()
this.d=z}return z}},cF:{"^":"c1;x,c,d,e,a,0b"},c1:{"^":"p;"},eh:{"^":"c1;x,y,z,Q,ch,c,d,e,a,0b"},it:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
aT:function(a,b){var z,y,x,w
H.e(a,"$isb",[V.Z],"$asb")
z=new P.ai(Date.now(),!1)
y=a.length>0?a[0]:V.ay()
x=this.a.gaJ()
w=new X.eh(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
iY:function(a){var z
H.e(a,"$isb",[V.Z],"$asb")
z=this.b
if(z==null)return!1
z.B(this.aT(a,!0))
return!0},
iW:function(a){var z
H.e(a,"$isb",[V.Z],"$asb")
z=this.c
if(z==null)return!1
z.B(this.aT(a,!0))
return!0},
iX:function(a){var z
H.e(a,"$isb",[V.Z],"$asb")
z=this.d
if(z==null)return!1
z.B(this.aT(a,!1))
return!0}},iI:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
sfk:function(a){this.z=H.e(a,"$isb",[[P.cJ,P.a]],"$asb")},
gaJ:function(){var z=this.a
return V.bI(0,0,C.m.gdC(z).c,C.m.gdC(z).d)},
d4:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dH(z,new X.ar(y,a.altKey,a.shiftKey))},
aH:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ar(y,a.altKey,a.shiftKey)},
c3:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ar(y,a.altKey,a.shiftKey)},
av:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.E()
v=z.top
if(typeof x!=="number")return x.E()
return new V.Z(y-w,x-v)},
aV:function(a){return new V.L(a.movementX,a.movementY)},
c_:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.Z])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.w)(x),++v){u=x[v]
t=C.i.U(u.pageX)
C.i.U(u.pageY)
s=z.left
C.i.U(u.pageX)
C.a.h(y,new V.Z(t-s,C.i.U(u.pageY)-z.top))}return y},
as:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.di(z,new X.ar(y,a.altKey,a.shiftKey))},
bS:function(a){var z,y,x,w,v,u
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
jC:[function(a){this.f=!0},"$1","gfW",4,0,9],
ju:[function(a){this.f=!1},"$1","gfO",4,0,9],
jx:[function(a){H.h(a,"$isak")
if(this.f&&this.bS(a))a.preventDefault()},"$1","gfR",4,0,4],
jE:[function(a){var z
H.h(a,"$isbe")
if(!this.f)return
z=this.d4(a)
this.b.iZ(z)},"$1","gfY",4,0,20],
jD:[function(a){var z
H.h(a,"$isbe")
if(!this.f)return
z=this.d4(a)
this.b.iV(z)},"$1","gfX",4,0,20],
jG:[function(a){var z,y,x,w
H.h(a,"$isak")
z=this.a
z.focus()
this.f=!0
this.aH(a)
if(this.x){y=this.as(a)
x=this.aV(a)
if(this.d.cv(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.as(a)
w=this.av(a)
if(this.c.cv(y,w))a.preventDefault()},"$1","gh0",4,0,4],
jI:[function(a){var z,y,x
H.h(a,"$isak")
this.aH(a)
z=this.as(a)
if(this.x){y=this.aV(a)
if(this.d.b2(z,y))a.preventDefault()
return}if(this.r)return
x=this.av(a)
if(this.c.b2(z,x))a.preventDefault()},"$1","gh2",4,0,4],
jz:[function(a){var z,y,x
H.h(a,"$isak")
if(!this.bS(a)){this.aH(a)
z=this.as(a)
if(this.x){y=this.aV(a)
if(this.d.b2(z,y))a.preventDefault()
return}if(this.r)return
x=this.av(a)
if(this.c.b2(z,x))a.preventDefault()}},"$1","gfT",4,0,4],
jH:[function(a){var z,y,x
H.h(a,"$isak")
this.aH(a)
z=this.as(a)
if(this.x){y=this.aV(a)
if(this.d.b1(z,y))a.preventDefault()
return}if(this.r)return
x=this.av(a)
if(this.c.b1(z,x))a.preventDefault()},"$1","gh1",4,0,4],
jy:[function(a){var z,y,x
H.h(a,"$isak")
if(!this.bS(a)){this.aH(a)
z=this.as(a)
if(this.x){y=this.aV(a)
if(this.d.b1(z,y))a.preventDefault()
return}if(this.r)return
x=this.av(a)
if(this.c.b1(z,x))a.preventDefault()}},"$1","gfS",4,0,4],
jJ:[function(a){var z,y
H.h(a,"$isbq")
this.aH(a)
z=new V.L((a&&C.w).giv(a),C.w.giw(a)).t(0,180)
if(this.x){if(this.d.j_(z))a.preventDefault()
return}if(this.r)return
y=this.av(a)
if(this.c.j0(z,y))a.preventDefault()},"$1","gh3",4,0,22],
jK:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.as(this.y)
x=this.av(this.y)
this.d.h_(y,x,z)}},"$1","gh4",4,0,9],
jS:[function(a){var z
H.h(a,"$isaX")
this.a.focus()
this.f=!0
this.c3(a)
z=this.c_(a)
if(this.e.iY(z))a.preventDefault()},"$1","ghc",4,0,8],
jQ:[function(a){var z
H.h(a,"$isaX")
this.c3(a)
z=this.c_(a)
if(this.e.iW(z))a.preventDefault()},"$1","gha",4,0,8],
jR:[function(a){var z
H.h(a,"$isaX")
this.c3(a)
z=this.c_(a)
if(this.e.iX(z))a.preventDefault()},"$1","ghb",4,0,8]}}],["","",,D,{"^":"",bS:{"^":"a;0a,0b,0c,0d",
gl:function(){var z=this.d
if(z==null){z=D.A()
this.d=z}return z},
aD:[function(a){var z
H.h(a,"$isp")
z=this.d
if(!(z==null))z.B(a)},function(){return this.aD(null)},"jl","$1","$0","geQ",0,2,0],
$isR:1,
$isas:1},R:{"^":"a;",$isas:1},h5:{"^":"H;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
sfh:function(a){this.e=H.e(a,"$isb",[D.bS],"$asb")},
shd:function(a){this.f=H.e(a,"$isb",[D.dV],"$asb")},
shz:function(a){this.r=H.e(a,"$isb",[D.e3],"$asb")},
shL:function(a){this.x=H.e(a,"$isb",[D.ea],"$asb")},
shM:function(a){this.y=H.e(a,"$isb",[D.eb],"$asb")},
shN:function(a){this.z=H.e(a,"$isb",[D.ec],"$asb")},
gl:function(){var z=this.Q
if(z==null){z=D.A()
this.Q=z}return z},
aD:function(a){var z=this.Q
if(!(z==null))z.B(a)},
fZ:[function(a){var z
H.h(a,"$isp")
z=this.ch
if(!(z==null))z.B(a)},function(){return this.fZ(null)},"jF","$1","$0","gda",0,2,0],
jL:[function(a){var z,y,x
H.e(a,"$isj",[D.R],"$asj")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.w)(a),++y){x=a[y]
if(x==null||this.fb(x))return!1}return!0},"$1","gh5",4,0,24],
jr:[function(a,b){var z,y,x,w,v,u,t,s
z=D.R
H.e(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gda(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.w)(b),++u){t=H.h(b[u],"$isR")
if(t instanceof D.bS)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.ao()
s.sa0(null)
s.saU(null)
s.c=null
s.d=0
t.d=s}H.l(x,w)
if(s.a==null)s.sa0(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}z=new D.bA(a,b,this,[z])
z.b=!0
this.aD(z)},"$2","gfL",8,0,21],
jN:[function(a,b){var z,y,x,w
z=D.R
H.e(b,"$isj",[z],"$asj")
for(y=b.gO(b),x=this.gda();y.v();){w=y.gF()
C.a.K(this.e,w)
w.gl().K(0,x)}z=new D.bB(a,b,this,[z])
z.b=!0
this.aD(z)},"$2","gh7",8,0,21],
fb:function(a){var z=C.a.aK(this.e,a)
return z},
$asj:function(){return[D.R]},
$asH:function(){return[D.R]}},dV:{"^":"a;",$isR:1,$isas:1},e3:{"^":"a;",$isR:1,$isas:1},ea:{"^":"a;",$isR:1,$isas:1},eb:{"^":"a;",$isR:1,$isas:1},ec:{"^":"a;",$isR:1,$isas:1}}],["","",,V,{"^":"",
kx:[function(a,b){if(typeof b!=="number")return b.E()
if(typeof a!=="number")return H.z(a)
return Math.abs(b-a)<=1e-9},"$2","hr",8,0,25],
kr:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.i.ey(a-b,z)
return(a<0?a+z:a)+b},
E:function(a,b,c){if(a==null)return C.j.az("null",c)
return C.j.az(C.i.ej($.m.$2(a,0)?0:a,b),c+b+1)},
b4:function(a,b,c){var z,y,x,w,v,u
H.e(a,"$isb",[P.q],"$asb")
z=H.c([],[P.x])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.w)(a),++w){v=V.E(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.f(z,u)
C.a.a_(z,u,C.j.az(z[u],x))}return z},
d9:function(a,b){return C.i.je(Math.pow(b,C.D.cn(Math.log(H.jU(a))/Math.log(b))))},
W:{"^":"a;a,b,c",
u:function(a,b){var z
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
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}},
a3:{"^":"a;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+", "+V.E(this.d,3,0)+"]"}},
dO:{"^":"a;a,b,c,d,e,f,r,x,y",
a6:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.q])
return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dO))return!1
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
z=[P.q]
y=V.b4(H.c([this.a,this.d,this.r],z),3,0)
x=V.b4(H.c([this.b,this.e,this.x],z),3,0)
w=V.b4(H.c([this.c,this.f,this.y],z),3,0)
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
a5:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a6:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.q])
return z},
eb:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.m.$2(a2,0))return V.aK()
a3=1/a2
a4=-w
a5=-i
return V.aq((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
p:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.h(a7,"$isa5")
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
return V.aq(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cD:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.I(this.a*z+this.b*y+this.c*x,this.e*z+this.f*y+this.r*x,this.y*z+this.z*y+this.Q*x)},
ba:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.S(this.a*z+this.b*y+this.c*x+this.d,this.e*z+this.f*y+this.r*x+this.x,this.y*z+this.z*y+this.Q*x+this.ch)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
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
i:function(a){return this.N()},
e9:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.q]
y=V.b4(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.b4(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.b4(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.b4(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
N:function(){return this.e9("",3,0)},
D:function(a){return this.e9(a,3,0)},
m:{
aK:function(){var z=$.c_
if(z==null){z=V.aq(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.c_=z}return z},
aq:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a5(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
dP:function(a,b,c){var z,y,x,w,v,u,t,s
z=c.t(0,Math.sqrt(c.w(c)))
y=b.ax(z)
x=y.t(0,Math.sqrt(y.w(y)))
w=z.ax(x)
v=new V.I(a.a,a.b,a.c)
u=x.L(0).w(v)
t=w.L(0).w(v)
s=z.L(0).w(v)
return V.aq(x.a,w.a,z.a,u,x.b,w.b,z.b,t,x.c,w.c,z.c,s,0,0,0,1)}}},
Z:{"^":"a;a,b",
E:function(a,b){return new V.Z(this.a-b.a,this.b-b.b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+"]"},
m:{
ay:function(){var z=$.dW
if(z==null){z=new V.Z(0,0)
$.dW=z}return z}}},
S:{"^":"a;a,b,c",
I:function(a,b){return new V.S(this.a+b.a,this.b+b.b,this.c+b.c)},
E:function(a,b){return new V.S(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){return new V.S(this.a*b,this.b*b,this.c*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"},
m:{
dX:function(){var z=$.bi
if(z==null){z=new V.S(0,0,0)
$.bi=z}return z}}},
bG:{"^":"a;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bG))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+", "+V.E(this.d,3,0)+"]"}},
c3:{"^":"a;a,b,c,d",
ga3:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
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
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+", "+V.E(this.d,3,0)+"]"},
m:{
c4:function(){var z=$.bk
if(z==null){z=V.bI(0,0,1,1)
$.bk=z}return z},
bI:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.c3(a,b,c,d)}}},
L:{"^":"a;a,b",
iK:[function(a){return Math.sqrt(this.w(this))},"$0","gn",1,0,17],
w:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.p()
if(typeof y!=="number")return H.z(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.p()
if(typeof w!=="number")return H.z(w)
return z*y+x*w},
p:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.p()
y=this.b
if(typeof y!=="number")return y.p()
return new V.L(z*b,y*b)},
t:function(a,b){var z,y
if($.m.$2(b,0)){z=$.ew
if(z==null){z=new V.L(0,0)
$.ew=z}return z}z=this.a
if(typeof z!=="number")return z.t()
y=this.b
if(typeof y!=="number")return y.t()
return new V.L(z/b,y/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.L))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+"]"}},
I:{"^":"a;a,b,c",
iK:[function(a){return Math.sqrt(this.w(this))},"$0","gn",1,0,17],
w:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ax:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.I(z*y-x*w,x*v-u*y,u*w-z*v)},
I:function(a,b){return new V.I(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a){return new V.I(-this.a,-this.b,-this.c)},
p:function(a,b){return new V.I(this.a*b,this.b*b,this.c*b)},
t:function(a,b){if($.m.$2(b,0))return V.bn()
return new V.I(this.a/b,this.b/b,this.c/b)},
ec:function(){if(!$.m.$2(0,this.a))return!1
if(!$.m.$2(0,this.b))return!1
if(!$.m.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.I))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"},
m:{
bn:function(){var z=$.eA
if(z==null){z=new V.I(0,0,0)
$.eA=z}return z},
eB:function(){var z=$.ez
if(z==null){z=new V.I(0,1,0)
$.ez=z}return z},
eC:function(){var z=$.ca
if(z==null){z=new V.I(0,0,1)
$.ca=z}return z}}}}],["","",,U,{"^":"",fv:{"^":"dk;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bK:function(a){var z=V.kr(a,this.c,this.b)
return z},
gl:function(){var z=this.y
if(z==null){z=D.A()
this.y=z}return z},
M:function(a){var z=this.y
if(!(z==null))z.B(a)},
scG:function(a,b){},
scs:function(a){var z,y
z=this.b
if(!$.m.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bK(z)}z=new D.y("maximumLocation",y,this.b,this,[P.q])
z.b=!0
this.M(z)}},
scu:function(a){var z,y
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bK(z)}z=new D.y("minimumLocation",y,this.c,this,[P.q])
z.b=!0
this.M(z)}},
sa2:function(a,b){var z,y
b=this.bK(b)
z=this.d
if(!$.m.$2(z,b)){y=this.d
this.d=b
z=new D.y("location",y,b,this,[P.q])
z.b=!0
this.M(z)}},
sct:function(a){var z,y,x
z=this.e
if(!$.m.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.y("maximumVelocity",y,a,this,[P.q])
z.b=!0
this.M(z)}},
sP:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.m.$2(z,a)){x=this.f
this.f=a
z=new D.y("velocity",x,a,this,[P.q])
z.b=!0
this.M(z)}},
sce:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.m.$2(z,a)){y=this.x
this.x=a
z=new D.y("dampening",y,a,this,[P.q])
z.b=!0
this.M(z)}},
ah:function(a){var z,y,x,w
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
y=w}this.sP(y)}},
m:{
cw:function(){var z=new U.fv()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dm:{"^":"a7;0a,0b",
gl:function(){var z=this.b
if(z==null){z=D.A()
this.b=z}return z},
aR:function(a,b){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dm))return!1
return J.G(this.a,b.a)},
i:function(a){return"Constant: "+this.a.D("          ")},
m:{
dn:function(a){var z=new U.dm()
z.a=a
return z}}},dB:{"^":"H;0e,0f,0r,0a,0b,0c,0d",
gl:function(){var z=this.e
if(z==null){z=D.A()
this.e=z}return z},
M:[function(a){var z
H.h(a,"$isp")
z=this.e
if(!(z==null))z.B(a)},function(){return this.M(null)},"ad","$1","$0","gaG",0,2,0],
jq:[function(a,b){var z,y,x,w,v,u,t,s
z=U.a7
H.e(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gaG(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.w)(b),++u){t=b[u]
if(t!=null){s=t.gl()
s.toString
H.l(x,w)
if(s.a==null)s.sa0(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.bA(a,b,this,[z])
z.b=!0
this.M(z)},"$2","gfK",8,0,16],
jM:[function(a,b){var z,y,x
z=U.a7
H.e(b,"$isj",[z],"$asj")
for(y=b.gO(b),x=this.gaG();y.v();)y.gF().gl().K(0,x)
z=new D.bB(a,b,this,[z])
z.b=!0
this.M(z)},"$2","gh6",8,0,16],
aR:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(typeof z!=="number")return z.ai()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.ah(z,z.length,0,[H.r(z,0)]),x=null;z.v();){y=z.d
if(y!=null){w=y.aR(a,b)
if(w!=null)x=x==null?w:w.p(0,x)}}this.f=x==null?V.aK():x
z=this.e
if(!(z==null))z.aA()}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dB))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.f(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.f(w,y)
if(!J.G(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asj:function(){return[U.a7]},
$asH:function(){return[U.a7]},
$isa7:1},a7:{"^":"dk;"},iJ:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gl:function(){var z=this.cy
if(z==null){z=D.A()
this.cy=z}return z},
M:[function(a){var z
H.h(a,"$isp")
z=this.cy
if(!(z==null))z.B(a)},function(){return this.M(null)},"ad","$1","$0","gaG",0,2,0],
aW:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdL().h(0,this.gbT())
this.a.c.ged().h(0,this.gbU())
this.a.c.gbF().h(0,this.gbV())
return!0},
fG:[function(a){H.h(a,"$isp")
if(!J.G(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbT",4,0,1],
fH:[function(a){var z,y,x,w,v,u,t
a=H.d(H.h(a,"$isp"),"$isbg")
if(!this.y)return
if(this.x){z=a.d.E(0,a.y)
z=new V.L(z.a,z.b)
z=z.w(z)
y=this.r
if(typeof y!=="number")return H.z(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.E(0,a.y)
z=new V.L(y.a,y.b).p(0,2).t(0,z.ga3())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.p()
x=this.e
if(typeof x!=="number")return H.z(x)
y.sP(z*10*x)}else{z=a.c
y=a.d
x=y.E(0,a.y)
w=new V.L(x.a,x.b).p(0,2).t(0,z.ga3())
x=this.b
v=w.a
if(typeof v!=="number")return v.L()
u=this.e
if(typeof u!=="number")return H.z(u)
t=this.z
if(typeof t!=="number")return H.z(t)
x.sa2(0,-v*u+t)
this.b.sP(0)
y=y.E(0,a.z)
this.Q=new V.L(y.a,y.b).p(0,2).t(0,z.ga3())}this.ad()},"$1","gbU",4,0,1],
fI:[function(a){var z,y,x
H.h(a,"$isp")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.w(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.p()
x=this.e
if(typeof x!=="number")return H.z(x)
z.sP(y*10*x)
this.ad()}},"$1","gbV",4,0,1],
aR:function(a,b){var z,y,x,w,v
z=this.ch
y=a.e
if(typeof z!=="number")return z.ai()
if(z<y){this.ch=y
x=a.y
this.b.ah(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aq(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa7:1},iK:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gl:function(){var z=this.fx
if(z==null){z=D.A()
this.fx=z}return z},
M:[function(a){var z
H.h(a,"$isp")
z=this.fx
if(!(z==null))z.B(a)},function(){return this.M(null)},"ad","$1","$0","gaG",0,2,0],
aW:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gdL().h(0,this.gbT())
this.a.c.ged().h(0,this.gbU())
this.a.c.gbF().h(0,this.gbV())
z=this.a.d
y=z.f
if(y==null){y=D.A()
z.f=y
z=y}else z=y
z.h(0,this.gfE())
z=this.a.d
y=z.d
if(y==null){y=D.A()
z.d=y
z=y}else z=y
z.h(0,this.gfF())
z=this.a.e
y=z.b
if(y==null){y=D.A()
z.b=y
z=y}else z=y
z.h(0,this.ghJ())
z=this.a.e
y=z.d
if(y==null){y=D.A()
z.d=y
z=y}else z=y
z.h(0,this.ghI())
z=this.a.e
y=z.c
if(y==null){y=D.A()
z.c=y
z=y}else z=y
z.h(0,this.ghH())
return!0},
al:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.L()
z=-z}if(this.r){if(typeof y!=="number")return y.L()
y=-y}return new V.L(z,y)},
fG:[function(a){a=H.d(H.h(a,"$isp"),"$isbg")
if(!J.G(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbT",4,0,1],
fH:[function(a){var z,y,x,w,v,u,t
a=H.d(H.h(a,"$isp"),"$isbg")
if(!this.cx)return
if(this.ch){z=a.d.E(0,a.y)
z=new V.L(z.a,z.b)
z=z.w(z)
y=this.Q
if(typeof y!=="number")return H.z(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.E(0,a.y)
z=this.al(new V.L(y.a,y.b).p(0,2).t(0,z.ga3()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.L()
x=this.y
if(typeof x!=="number")return H.z(x)
y.sP(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.L()
y=this.x
if(typeof y!=="number")return H.z(y)
x.sP(-z*10*y)}else{z=a.c
y=a.d
x=y.E(0,a.y)
w=this.al(new V.L(x.a,x.b).p(0,2).t(0,z.ga3()))
x=this.c
v=w.a
if(typeof v!=="number")return v.L()
u=this.y
if(typeof u!=="number")return H.z(u)
t=this.cy
if(typeof t!=="number")return H.z(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.L()
v=this.x
if(typeof v!=="number")return H.z(v)
x=this.db
if(typeof x!=="number")return H.z(x)
t.sa2(0,-u*v+x)
this.b.sP(0)
this.c.sP(0)
y=y.E(0,a.z)
this.dx=this.al(new V.L(y.a,y.b).p(0,2).t(0,z.ga3()))}this.ad()},"$1","gbU",4,0,1],
fI:[function(a){var z,y,x
H.h(a,"$isp")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.w(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.L()
x=this.y
if(typeof x!=="number")return H.z(x)
z.sP(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.L()
z=this.x
if(typeof z!=="number")return H.z(z)
x.sP(-y*10*z)
this.ad()}},"$1","gbV",4,0,1],
jn:[function(a){if(H.d(H.h(a,"$isp"),"$isdK").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfE",4,0,1],
jo:[function(a){var z,y,x,w,v,u,t
a=H.d(H.h(a,"$isp"),"$isbg")
if(!J.G(this.d,a.x.b))return
z=a.c
y=a.d
x=y.E(0,a.y)
w=this.al(new V.L(x.a,x.b).p(0,2).t(0,z.ga3()))
x=this.c
v=w.a
if(typeof v!=="number")return v.L()
u=this.y
if(typeof u!=="number")return H.z(u)
t=this.cy
if(typeof t!=="number")return H.z(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.L()
v=this.x
if(typeof v!=="number")return H.z(v)
x=this.db
if(typeof x!=="number")return H.z(x)
t.sa2(0,-u*v+x)
this.b.sP(0)
this.c.sP(0)
y=y.E(0,a.z)
this.dx=this.al(new V.L(y.a,y.b).p(0,2).t(0,z.ga3()))
this.ad()},"$1","gfF",4,0,1],
jW:[function(a){H.h(a,"$isp")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghJ",4,0,1],
jV:[function(a){var z,y,x,w,v,u,t
a=H.d(H.h(a,"$isp"),"$iseh")
if(!this.cx)return
if(this.ch){z=a.d.E(0,a.y)
z=new V.L(z.a,z.b)
z=z.w(z)
y=this.Q
if(typeof y!=="number")return H.z(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.E(0,a.y)
z=this.al(new V.L(y.a,y.b).p(0,2).t(0,z.ga3()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.L()
x=this.y
if(typeof x!=="number")return H.z(x)
y.sP(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.L()
y=this.x
if(typeof y!=="number")return H.z(y)
x.sP(-z*10*y)}else{z=a.c
y=a.d
x=y.E(0,a.y)
w=this.al(new V.L(x.a,x.b).p(0,2).t(0,z.ga3()))
x=this.c
v=w.a
if(typeof v!=="number")return v.L()
u=this.y
if(typeof u!=="number")return H.z(u)
t=this.cy
if(typeof t!=="number")return H.z(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.L()
v=this.x
if(typeof v!=="number")return H.z(v)
x=this.db
if(typeof x!=="number")return H.z(x)
t.sa2(0,-u*v+x)
this.b.sP(0)
this.c.sP(0)
y=y.E(0,a.z)
this.dx=this.al(new V.L(y.a,y.b).p(0,2).t(0,z.ga3()))}this.ad()},"$1","ghI",4,0,1],
jU:[function(a){var z,y,x
H.h(a,"$isp")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.w(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.L()
x=this.y
if(typeof x!=="number")return H.z(x)
z.sP(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.L()
z=this.x
if(typeof z!=="number")return H.z(z)
x.sP(-y*10*z)
this.ad()}},"$1","ghH",4,0,1],
aR:function(a,b){var z,y,x,w,v
z=this.dy
y=a.e
if(typeof z!=="number")return z.ai()
if(z<y){this.dy=y
x=a.y
this.c.ah(x)
this.b.ah(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aq(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.p(0,V.aq(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isa7:1},iL:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gl:function(){var z=this.r
if(z==null){z=D.A()
this.r=z}return z},
M:function(a){var z=this.r
if(!(z==null))z.B(a)},
aW:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.A()
z.e=y
z=y}else z=y
y=this.gfJ()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.A()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
jp:[function(a){var z,y,x,w
H.h(a,"$isp")
if(!J.G(this.b,this.a.b.c))return
H.d(a,"$iscF")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.p()
w=z+y*x
if(z!==w){this.d=w
z=new D.y("zoom",z,w,this,[P.q])
z.b=!0
this.M(z)}},"$1","gfJ",4,0,1],
aR:function(a,b){var z,y,x
z=this.e
y=a.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aq(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa7:1}}],["","",,M,{"^":"",fw:{"^":"H;0e,0f,0a,0b,0c,0d",
gl:function(){var z=this.f
if(z==null){z=D.A()
this.f=z}return z},
X:[function(a){var z
H.h(a,"$isp")
z=this.f
if(!(z==null))z.B(a)},function(){return this.X(null)},"cU","$1","$0","gT",0,2,0],
jO:[function(a,b){var z,y,x,w,v,u,t,s
z=M.at
H.e(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gT(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.w)(b),++u){t=b[u]
if(t!=null){s=t.gl()
s.toString
H.l(x,w)
if(s.a==null)s.sa0(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.bA(a,b,this,[z])
z.b=!0
this.X(z)},"$2","gh8",8,0,12],
jP:[function(a,b){var z,y,x
z=M.at
H.e(b,"$isj",[z],"$asj")
for(y=b.gO(b),x=this.gT();y.v();)y.gF().gl().K(0,x)
z=new D.bB(a,b,this,[z])
z.b=!0
this.X(z)},"$2","gh9",8,0,12],
a5:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.ah(z,z.length,0,[H.r(z,0)]);z.v();){y=z.d
if(!(y==null))y.a5(a)}this.e=!1},
$asj:function(){return[M.at]},
$asH:function(){return[M.at]},
$isat:1},fy:{"^":"a;0a,0b,0c,0d,0e,0f",
gl:function(){var z=this.f
if(z==null){z=D.A()
this.f=z}return z},
X:[function(a){var z
H.h(a,"$isp")
z=this.f
if(!(z==null))z.B(a)},function(){return this.X(null)},"cU","$1","$0","gT",0,2,0],
sb6:function(a,b){var z,y
if(b==null)b=X.cx(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gl().K(0,this.gT())
y=this.b
this.b=b
b.gl().h(0,this.gT())
z=new D.y("target",y,this.b,this,[X.c6])
z.b=!0
this.X(z)}},
sb7:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gl().K(0,this.gT())
y=this.c
this.c=a
if(a!=null)a.gl().h(0,this.gT())
z=new D.y("technique",y,this.c,this,[O.bl])
z.b=!0
this.X(z)}},
a5:function(a){var z,y
a.cz(this.c)
this.b.a1(a)
z=this.a
z.toString
a.cy.bB(V.aK())
y=V.aK()
z.a
a.db.bB(y)
this.d.ah(a)
this.d.a5(a)
this.a.toString
a.cy.b3()
a.db.b3()
this.b.toString
a.cw()},
$isat:1},fL:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
sf8:function(a,b){this.d=H.e(b,"$isH",[E.aj],"$asH")},
X:[function(a){var z
H.h(a,"$isp")
z=this.x
if(!(z==null))z.B(a)},function(){return this.X(null)},"cU","$1","$0","gT",0,2,0],
jv:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aj
H.e(b,"$isj",[z],"$asj")
for(y=b.length,x=this.gT(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.w)(b),++u){t=b[u]
if(t!=null){if(t.gab()==null){s=new D.ao()
s.sa0(null)
s.saU(null)
s.c=null
s.d=0
t.sab(s)}s=t.gab()
s.toString
H.l(x,w)
if(s.a==null)s.sa0(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.bA(a,b,this,[z])
z.b=!0
this.X(z)},"$2","gfP",8,0,6],
jw:[function(a,b){var z,y,x
z=E.aj
H.e(b,"$isj",[z],"$asj")
for(y=b.gO(b),x=this.gT();y.v();)y.gF().gl().K(0,x)
z=new D.bB(a,b,this,[z])
z.b=!0
this.X(z)},"$2","gfQ",8,0,6],
sdv:function(a){var z,y
if(a==null)a=X.dT(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null)z.gl().K(0,this.gT())
y=this.a
this.a=a
a.gl().h(0,this.gT())
z=new D.y("camera",y,this.a,this,[X.bP])
z.b=!0
this.X(z)}},
sb6:function(a,b){var z,y
if(b==null)b=X.cx(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gl().K(0,this.gT())
y=this.b
this.b=b
b.gl().h(0,this.gT())
z=new D.y("target",y,this.b,this,[X.c6])
z.b=!0
this.X(z)}},
sb7:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gl().K(0,this.gT())
y=this.c
this.c=a
if(a!=null)a.gl().h(0,this.gT())
z=new D.y("technique",y,this.c,this,[O.bl])
z.b=!0
this.X(z)}},
gl:function(){var z=this.x
if(z==null){z=D.A()
this.x=z}return z},
a5:function(a){var z,y,x,w,v,u,t,s,r,q,p
a.cz(this.c)
this.b.a1(a)
z=this.a
y=a.c
x=a.d
w=z.c
v=z.d
u=z.e
t=u-v
s=1/Math.tan(w*0.5)
r=V.aq(-s/(y/x),0,0,0,0,s,0,0,0,0,u/t,-u*v/t,0,0,1,0)
z.a
a.cy.bB(r)
y=$.dU
if(y==null){y=V.dX()
x=V.eB()
w=$.ex
if(w==null){w=new V.I(0,0,-1)
$.ex=w}w=V.dP(y,x,w)
$.dU=w
q=w}else q=y
y=z.b
if(y!=null){p=y.aR(a,z)
if(p!=null)q=p.p(0,q)}a.db.bB(q)
z=this.c
if(z!=null)z.ah(a)
for(z=this.d.a,z=new J.ah(z,z.length,0,[H.r(z,0)]);z.v();)z.d.ah(a)
for(z=this.d.a,z=new J.ah(z,z.length,0,[H.r(z,0)]);z.v();)z.d.a5(a)
this.a.toString
a.cy.b3()
a.db.b3()
this.b.aQ(a)
a.cw()},
$isat:1},at:{"^":"a;"}}],["","",,A,{"^":"",de:{"^":"a;a,b,c"},fl:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
iz:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x){w=z[x]
C.b.dN(w.a,w.c)}},
dI:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x){w=z[x]
C.b.dJ(w.a,w.c)}}},dN:{"^":"c5;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0ao,0af,0bm,0dO,0bn,0bo,0dP,0dQ,0bp,0bq,0dR,0dS,0br,0bs,0dT,0dU,0bt,0dV,0dW,0bu,0dX,0dY,0bv,0bw,0bx,0dZ,0e_,0by,0bz,0e0,0e1,0bA,0e2,0cg,0e3,0ci,0e4,0cj,0e5,0ck,0e6,0cl,0e7,0cm,a,b,0c,0d,0e,0f,0r,0x,0y",
sf3:function(a){this.r1=H.e(a,"$isb",[A.a8],"$asb")},
seR:function(a){this.cg=H.e(a,"$isb",[A.cQ],"$asb")},
seS:function(a){this.ci=H.e(a,"$isb",[A.cS],"$asb")},
seT:function(a){this.cj=H.e(a,"$isb",[A.cT],"$asb")},
seU:function(a){this.ck=H.e(a,"$isb",[A.cU],"$asb")},
seV:function(a){this.cl=H.e(a,"$isb",[A.cV],"$asb")},
seW:function(a){this.cm=H.e(a,"$isb",[A.cW],"$asb")},
eH:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.z=a1
z=new P.bJ("")
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
a1.hS(z)
a1.hZ(z)
a1.hT(z)
a1.i6(z)
a1.i7(z)
a1.i0(z)
a1.ib(z)
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
z=new P.bJ("")
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
v.hW(z)
v.hR(z)
v.hU(z)
v.hX(z)
v.i4(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.i2(z)
v.i3(z)}v.i_(z)
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
p=H.c([],[P.x])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.C(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.hV(z)
v.i1(z)
v.i5(z)
v.i8(z)
v.i9(z)
v.ia(z)
v.hY(z)}r=z.a+="// === Main ===\n"
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
o=H.c([],[P.x])
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
n="vec4("+C.a.C(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.ea(x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a1.fr)this.id=H.d(this.y.k(0,"invViewMat"),"$isa8")
if(y)this.dy=H.d(this.y.k(0,"objMat"),"$isa8")
if(w)this.fr=H.d(this.y.k(0,"viewObjMat"),"$isa8")
this.fy=H.d(this.y.k(0,"projViewObjMat"),"$isa8")
if(a1.x2)this.k1=H.d(this.y.k(0,"txt2DMat"),"$iscR")
if(a1.y1)this.k2=H.d(this.y.k(0,"txtCubeMat"),"$isa8")
if(a1.y2)this.k3=H.d(this.y.k(0,"colorMat"),"$isa8")
this.sf3(H.c([],[A.a8]))
y=a1.ao
if(y>0){this.k4=H.h(this.y.k(0,"bendMatCount"),"$isB")
for(m=0;m<y;++m){x=this.r1
w=this.y
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.o(P.n("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.d(l,"$isa8"))}}y=a1.a
if(y!==C.c){this.r2=H.d(this.y.k(0,"emissionClr"),"$isC")
switch(y){case C.c:break
case C.f:break
case C.d:this.rx=H.d(this.y.k(0,"emissionTxt"),"$isa2")
this.x1=H.d(this.y.k(0,"nullEmissionTxt"),"$isB")
break
case C.e:this.ry=H.d(this.y.k(0,"emissionTxt"),"$isad")
this.x1=H.d(this.y.k(0,"nullEmissionTxt"),"$isB")
break}}y=a1.b
if(y!==C.c){this.x2=H.d(this.y.k(0,"ambientClr"),"$isC")
switch(y){case C.c:break
case C.f:break
case C.d:this.y1=H.d(this.y.k(0,"ambientTxt"),"$isa2")
this.ao=H.d(this.y.k(0,"nullAmbientTxt"),"$isB")
break
case C.e:this.y2=H.d(this.y.k(0,"ambientTxt"),"$isad")
this.ao=H.d(this.y.k(0,"nullAmbientTxt"),"$isB")
break}}y=a1.c
if(y!==C.c){this.af=H.d(this.y.k(0,"diffuseClr"),"$isC")
switch(y){case C.c:break
case C.f:break
case C.d:this.bm=H.d(this.y.k(0,"diffuseTxt"),"$isa2")
this.bn=H.d(this.y.k(0,"nullDiffuseTxt"),"$isB")
break
case C.e:this.dO=H.d(this.y.k(0,"diffuseTxt"),"$isad")
this.bn=H.d(this.y.k(0,"nullDiffuseTxt"),"$isB")
break}}y=a1.d
if(y!==C.c){this.bo=H.d(this.y.k(0,"invDiffuseClr"),"$isC")
switch(y){case C.c:break
case C.f:break
case C.d:this.dP=H.d(this.y.k(0,"invDiffuseTxt"),"$isa2")
this.bp=H.d(this.y.k(0,"nullInvDiffuseTxt"),"$isB")
break
case C.e:this.dQ=H.d(this.y.k(0,"invDiffuseTxt"),"$isad")
this.bp=H.d(this.y.k(0,"nullInvDiffuseTxt"),"$isB")
break}}y=a1.e
if(y!==C.c){this.bs=H.d(this.y.k(0,"shininess"),"$isN")
this.bq=H.d(this.y.k(0,"specularClr"),"$isC")
switch(y){case C.c:break
case C.f:break
case C.d:this.dR=H.d(this.y.k(0,"specularTxt"),"$isa2")
this.br=H.d(this.y.k(0,"nullSpecularTxt"),"$isB")
break
case C.e:this.dS=H.d(this.y.k(0,"specularTxt"),"$isad")
this.br=H.d(this.y.k(0,"nullSpecularTxt"),"$isB")
break}}switch(a1.f){case C.c:break
case C.f:break
case C.d:this.dT=H.d(this.y.k(0,"bumpTxt"),"$isa2")
this.bt=H.d(this.y.k(0,"nullBumpTxt"),"$isB")
break
case C.e:this.dU=H.d(this.y.k(0,"bumpTxt"),"$isad")
this.bt=H.d(this.y.k(0,"nullBumpTxt"),"$isB")
break}if(a1.dy){this.dV=H.d(this.y.k(0,"envSampler"),"$isad")
this.dW=H.d(this.y.k(0,"nullEnvTxt"),"$isB")
y=a1.r
if(y!==C.c){this.bu=H.d(this.y.k(0,"reflectClr"),"$isC")
switch(y){case C.c:break
case C.f:break
case C.d:this.dX=H.d(this.y.k(0,"reflectTxt"),"$isa2")
this.bv=H.d(this.y.k(0,"nullReflectTxt"),"$isB")
break
case C.e:this.dY=H.d(this.y.k(0,"reflectTxt"),"$isad")
this.bv=H.d(this.y.k(0,"nullReflectTxt"),"$isB")
break}}y=a1.x
if(y!==C.c){this.bw=H.d(this.y.k(0,"refraction"),"$isN")
this.bx=H.d(this.y.k(0,"refractClr"),"$isC")
switch(y){case C.c:break
case C.f:break
case C.d:this.dZ=H.d(this.y.k(0,"refractTxt"),"$isa2")
this.by=H.d(this.y.k(0,"nullRefractTxt"),"$isB")
break
case C.e:this.e_=H.d(this.y.k(0,"refractTxt"),"$isad")
this.by=H.d(this.y.k(0,"nullRefractTxt"),"$isB")
break}}}y=a1.y
if(y!==C.c){this.bz=H.d(this.y.k(0,"alpha"),"$isN")
switch(y){case C.c:break
case C.f:break
case C.d:this.e0=H.d(this.y.k(0,"alphaTxt"),"$isa2")
this.bA=H.d(this.y.k(0,"nullAlphaTxt"),"$isB")
break
case C.e:this.e1=H.d(this.y.k(0,"alphaTxt"),"$isad")
this.bA=H.d(this.y.k(0,"nullAlphaTxt"),"$isB")
break}}this.seR(H.c([],[A.cQ]))
this.seS(H.c([],[A.cS]))
this.seT(H.c([],[A.cT]))
this.seU(H.c([],[A.cU]))
this.seV(H.c([],[A.cV]))
this.seW(H.c([],[A.cW]))
if(a1.k2){y=a1.z
if(y>0){this.e2=H.h(this.y.k(0,"dirLightCount"),"$isB")
for(m=0;m<y;++m){x=this.y
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isC")
x=this.y
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isC")
x=this.cg;(x&&C.a).h(x,new A.cQ(m,l,k))}}y=a1.Q
if(y>0){this.e3=H.h(this.y.k(0,"pntLightCount"),"$isB")
for(m=0;m<y;++m){x=this.y
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isC")
x=this.y
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isC")
x=this.y
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isC")
x=this.y
w="pntLights["+m+"].att0"
i=x.j(0,w)
if(i==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isN")
x=this.y
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isN")
x=this.y
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isN")
x=this.ci;(x&&C.a).h(x,new A.cS(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.e4=H.h(this.y.k(0,"spotLightCount"),"$isB")
for(m=0;m<y;++m){x=this.y
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isC")
x=this.y
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isC")
x=this.y
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isC")
x=this.y
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isC")
x=this.y
w="spotLights["+m+"].cutoff"
h=x.j(0,w)
if(h==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isN")
x=this.y
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isN")
x=this.y
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isN")
x=this.y
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isN")
x=this.y
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isN")
x=this.cj;(x&&C.a).h(x,new A.cT(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.e5=H.h(this.y.k(0,"txtDirLightCount"),"$isB")
for(m=0;m<y;++m){x=this.y
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isC")
x=this.y
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isC")
x=this.y
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isC")
x=this.y
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isC")
x=this.y
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isC")
x=this.y
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isB")
x=this.y
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isa2")
x=this.ck;(x&&C.a).h(x,new A.cU(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.e6=H.h(this.y.k(0,"txtPntLightCount"),"$isB")
for(m=0;m<y;++m){x=this.y
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isC")
x=this.y
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isC")
x=this.y
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$iscR")
x=this.y
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isC")
x=this.y
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isB")
x=this.y
w="txtPntLights["+m+"].att0"
g=x.j(0,w)
if(g==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isN")
x=this.y
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isN")
x=this.y
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isN")
x=this.y
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isad")
x=this.cl;(x&&C.a).h(x,new A.cV(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.e7=H.h(this.y.k(0,"txtSpotLightCount"),"$isB")
for(m=0;m<y;++m){x=this.y
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isC")
x=this.y
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isC")
x=this.y
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isC")
x=this.y
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isC")
x=this.y
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isC")
x=this.y
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isB")
x=this.y
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isC")
x=this.y
w="txtSpotLights["+m+"].tuScalar"
e=x.j(0,w)
if(e==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isN")
x=this.y
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isN")
x=this.y
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(c,"$isN")
x=this.y
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(b,"$isN")
x=this.y
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a,"$isN")
x=this.y
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a0,"$isa2")
x=this.cm;(x&&C.a).h(x,new A.cW(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
ae:function(a,b,c){C.b.H(b.a,b.d,1)},
a7:function(a,b,c){C.b.H(b.a,b.d,1)},
m:{
hl:function(a,b){var z,y
z=a.af
y=new A.dN(b,z)
y.cR(b,z)
y.eH(a,b)
return y}}},ho:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,ao,af,bm",
hS:function(a){var z,y,x
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
hZ:function(a){var z
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
hT:function(a){var z
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
i6:function(a){var z,y
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
i7:function(a){var z,y
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
i0:function(a){var z
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
ib:function(a){var z
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
if(0>=c.length)return H.f(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.j.cO(c,1))+"Txt;\n"
a.a=z
if(b===C.d)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
hW:function(a){var z,y
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
hR:function(a){var z,y
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
hU:function(a){var z,y
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
hX:function(a){var z,y
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
i4:function(a){var z,y
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
i_:function(a){var z,y
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
i2:function(a){var z,y
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
i3:function(a){var z,y
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
hV:function(a){var z,y
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
i1:function(a){var z,y
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
i5:function(a){var z,y
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
i8:function(a){var z,y,x
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
i9:function(a){var z,y,x
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
ia:function(a){var z,y,x
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
hY:function(a){var z
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
i:function(a){return this.af}},cQ:{"^":"a;a,b,c"},cU:{"^":"a;a,b,c,d,e,f,r,x"},cS:{"^":"a;a,b,c,d,e,f,r"},cV:{"^":"a;a,b,c,d,e,f,r,x,y,z"},cT:{"^":"a;a,b,c,d,e,f,r,x,y,z"},cW:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},c5:{"^":"cq;",
cR:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
ea:function(a,b){var z,y,x
this.c=a
this.d=b
this.e=this.d5(a,35633)
this.f=this.d5(this.d,35632)
z=this.a
y=z.createProgram()
this.r=y
C.b.dq(z,y,this.e)
C.b.dq(z,this.r,this.f)
C.b.iL(z,this.r)
if(!H.f4(C.b.bH(z,this.r,35714))){x=C.b.es(z,this.r)
C.b.it(z,this.r)
H.o(P.n("Failed to link shader: "+H.i(x)))}this.hu()
this.hw()},
a1:function(a){C.b.cF(a.a,this.r)
this.x.iz()},
d5:function(a,b){var z,y,x
z=this.a
y=C.b.ir(z,b)
C.b.eA(z,y,a)
C.b.im(z,y)
if(!H.f4(C.b.ew(z,y,35713))){x=C.b.ev(z,y)
C.b.iu(z,y)
throw H.k(P.n("Error compiling shader '"+H.i(y)+"': "+H.i(x)))}return y},
hu:function(){var z,y,x,w,v,u
z=H.c([],[A.de])
y=this.a
x=H.a0(C.b.bH(y,this.r,35721))
if(typeof x!=="number")return H.z(x)
w=0
for(;w<x;++w){v=C.b.eo(y,this.r,w)
u=C.b.eq(y,this.r,v.name)
C.a.h(z,new A.de(y,v.name,u))}this.x=new A.fl(z)},
hw:function(){var z,y,x,w,v,u
z=H.c([],[A.a1])
y=this.a
x=H.a0(C.b.bH(y,this.r,35718))
if(typeof x!=="number")return H.z(x)
w=0
for(;w<x;++w){v=C.b.ep(y,this.r,w)
u=C.b.ex(y,this.r,v.name)
C.a.h(z,this.is(v.type,v.size,v.name,u))}this.y=new A.iB(z)},
aF:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.B(z,y,b,c)
else return A.cP(z,y,b,a,c)},
fc:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.a2(z,y,b,c)
else return A.cP(z,y,b,a,c)},
fd:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ad(z,y,b,c)
else return A.cP(z,y,b,a,c)},
bj:function(a,b){return new P.eK(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
is:function(a,b,c,d){switch(a){case 5120:return this.aF(b,c,d)
case 5121:return this.aF(b,c,d)
case 5122:return this.aF(b,c,d)
case 5123:return this.aF(b,c,d)
case 5124:return this.aF(b,c,d)
case 5125:return this.aF(b,c,d)
case 5126:return new A.N(this.a,this.r,c,d)
case 35664:return new A.av(this.a,this.r,c,d)
case 35665:return new A.C(this.a,this.r,c,d)
case 35666:return new A.et(this.a,this.r,c,d)
case 35667:return new A.iy(this.a,this.r,c,d)
case 35668:return new A.iz(this.a,this.r,c,d)
case 35669:return new A.iA(this.a,this.r,c,d)
case 35674:return new A.iD(this.a,this.r,c,d)
case 35675:return new A.cR(this.a,this.r,c,d)
case 35676:return new A.a8(this.a,this.r,c,d)
case 35678:return this.fc(b,c,d)
case 35680:return this.fd(b,c,d)
case 35670:throw H.k(this.bj("BOOL",c))
case 35671:throw H.k(this.bj("BOOL_VEC2",c))
case 35672:throw H.k(this.bj("BOOL_VEC3",c))
case 35673:throw H.k(this.bj("BOOL_VEC4",c))
default:throw H.k(P.n("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}},bR:{"^":"a;a,b",
i:function(a){return this.b}},e9:{"^":"c5;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,a,b,0c,0d,0e,0f,0r,0x,0y",
shO:function(a){this.cx=H.e(a,"$isb",[A.a2],"$asb")},
sf9:function(a){this.cy=H.e(a,"$isb",[A.a8],"$asb")},
shA:function(a){this.db=H.e(a,"$isb",[A.av],"$asb")},
shB:function(a){this.dx=H.e(a,"$isb",[A.av],"$asb")},
sff:function(a){this.dy=H.e(a,"$isb",[A.av],"$asb")},
sfg:function(a){this.fr=H.e(a,"$isb",[A.av],"$asb")},
sfq:function(a){this.fx=H.e(a,"$isb",[A.B],"$asb")},
eL:function(a,b){var z,y,x,w,v
this.ea("attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.il(a))
this.z=this.x.j(0,"posAttr")
this.Q=H.d(this.y.k(0,"txtCount"),"$isB")
this.ch=H.d(this.y.k(0,"backClr"),"$iset")
this.shO(H.c([],[A.a2]))
this.sf9(H.c([],[A.a8]))
z=[A.av]
this.shA(H.c([],z))
this.shB(H.c([],z))
this.sff(H.c([],z))
this.sfg(H.c([],z))
this.sfq(H.c([],[A.B]))
for(y=0;y<a;++y){z=this.cx
x=this.y
w="txt"+y
v=x.j(0,w)
if(v==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.d(v,"$isa2"))
z=this.cy
x=this.y
w="clrMat"+y
v=x.j(0,w)
if(v==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.d(v,"$isa8"))
z=this.db
x=this.y
w="srcLoc"+y
v=x.j(0,w)
if(v==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.d(v,"$isav"))
z=this.dx
x=this.y
w="srcSize"+y
v=x.j(0,w)
if(v==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.d(v,"$isav"))
z=this.dy
x=this.y
w="destLoc"+y
v=x.j(0,w)
if(v==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.d(v,"$isav"))
z=this.fr
x=this.y
w="destSize"+y
v=x.j(0,w)
if(v==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.d(v,"$isav"))
z=this.fx
x=this.y
w="flip"+y
v=x.j(0,w)
if(v==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.d(v,"$isB"))}},
m:{
il:function(a){var z,y
for(z=0,y="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";z<a;++z)y=y+("uniform sampler2D txt"+z+";\n")+("uniform mat4 clrMat"+z+";\n")+("uniform vec2 srcLoc"+z+";\n")+("uniform vec2 srcSize"+z+";\n")+("uniform vec2 destLoc"+z+";\n")+("uniform vec2 destSize"+z+";\n")+("uniform int flip"+z+";\n")
y+"\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\nvec4 layoutAll()\n"
y+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\nvec4 layoutAll()\n{\n"
y+="\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\nvec4 layoutAll()\n{\n   vec4 clrAccum = backClr;\n"
for(z=0;z<a;++z)y=y+("   if(txtCount <= "+z+") return clrAccum;\n")+("   clrAccum = layout(clrAccum, txt"+z+", clrMat"+z+", srcLoc"+z+", srcSize"+z+", destLoc"+z+", destSize"+z+", flip"+z+");\n")
y+"   return clrAccum;\n"
y+"   return clrAccum;\n}\n"
y+"   return clrAccum;\n}\n\n"
y+"   return clrAccum;\n}\n\nvoid main()\n"
y+"   return clrAccum;\n}\n\nvoid main()\n{\n"
y+"   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n"
y+"   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n   if(color.a <= 0.0) discard;\n"
y+"   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n   if(color.a <= 0.0) discard;\n   gl_FragColor = color;\n"
y+="   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n   if(color.a <= 0.0) discard;\n   gl_FragColor = color;\n}\n"
return y.charCodeAt(0)==0?y:y},
ij:function(a,b){var z,y
z="TextureLayout_"+a
y=new A.e9(b,z)
y.cR(b,z)
y.eL(a,b)
return y}}},a1:{"^":"a;"},iB:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
k:function(a,b){var z=this.j(0,b)
if(z==null)throw H.k(P.n("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.N()},
iC:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.w)(z),++w)x+=z[w].i(0)+a
return x},
N:function(){return this.iC("\n")}},B:{"^":"a1;a,b,c,d",
i:function(a){return"Uniform1i: "+H.i(this.c)}},iy:{"^":"a1;a,b,c,d",
i:function(a){return"Uniform2i: "+H.i(this.c)}},iz:{"^":"a1;a,b,c,d",
i:function(a){return"Uniform3i: "+H.i(this.c)}},iA:{"^":"a1;a,b,c,d",
i:function(a){return"Uniform4i: "+H.i(this.c)}},ix:{"^":"a1;0e,0f,a,b,c,d",
shP:function(a){this.e=H.e(a,"$isb",[P.u],"$asb")},
i:function(a){return"Uniform1iv: "+H.i(this.c)},
m:{
cP:function(a,b,c,d,e){var z=new A.ix(a,b,c,e)
z.f=d
z.shP(P.hc(d,0,!1,P.u))
return z}}},N:{"^":"a1;a,b,c,d",
i:function(a){return"Uniform1f: "+H.i(this.c)}},av:{"^":"a1;a,b,c,d",
i:function(a){return"Uniform2f: "+H.i(this.c)}},C:{"^":"a1;a,b,c,d",
i:function(a){return"Uniform3f: "+H.i(this.c)}},et:{"^":"a1;a,b,c,d",
i:function(a){return"Uniform4f: "+H.i(this.c)}},iD:{"^":"a1;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}},cR:{"^":"a1;a,b,c,d",
aj:function(a){var z=new Float32Array(H.b0(H.e(a,"$isb",[P.q],"$asb")))
C.b.ek(this.a,this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.i(this.c)}},a8:{"^":"a1;a,b,c,d",
aj:function(a){var z=new Float32Array(H.b0(H.e(a,"$isb",[P.q],"$asb")))
C.b.cE(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.i(this.c)}},a2:{"^":"a1;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.i(this.c)}},ad:{"^":"a1;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}}],["","",,F,{"^":"",
ko:function(a,b,c,d){return F.jX(c,a,d,b,new F.kp())},
jX:function(a,b,c,d,e){var z=F.km(a,b,new F.jY(H.l(e,{func:1,ret:V.S,args:[P.q]}),d,b,c),null)
if(z==null)return
z.aw()
z.iP(new F.iT(),new F.hw())
return z},
km:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.ae,P.q,P.q]})
if(a<1)return
if(b<1)return
z=F.e2()
y=H.c([],[F.ae])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cb(null,null,new V.a3(u,0,0,1),null,null,new V.Z(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.dF(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cb(null,null,new V.a3(o,n,m,1),null,null,new V.Z(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.dF(d))}}z.d.ie(a+1,b+1,y)
return z},
kp:{"^":"t:30;",
$1:function(a){return new V.S(Math.cos(a),Math.sin(a),0)}},
jY:{"^":"t:31;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.db(y.$1(z),x)
x=J.db(y.$1(z+3.141592653589793/this.c),x).E(0,w)
x=new V.I(x.a,x.b,x.c)
v=x.t(0,Math.sqrt(x.w(x)))
y=$.ey
if(y==null){y=new V.I(1,0,0)
$.ey=y
u=y}else u=y
y=v.ax(!J.G(v,u)?V.eC():u)
t=y.t(0,Math.sqrt(y.w(y)))
y=t.ax(v)
u=y.t(0,Math.sqrt(y.w(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.p(0,y*x)
x=t.p(0,r*x)
x=w.I(0,new V.S(y.a-x.a,y.b-x.b,y.c-x.c))
if(!J.G(a.f,x)){a.f=x
y=a.a
if(y!=null)y.a4()}}},
Y:{"^":"a;0a,0b,0c,0d,0e",
aY:function(){if(!this.gdK()){C.a.K(this.a.a.d.b,this)
this.a.a.a4()}this.hh()
this.hi()
this.hj()},
hr:function(a){this.a=a
C.a.h(a.d.b,this)},
hs:function(a){this.b=a
C.a.h(a.d.c,this)},
ht:function(a){this.c=a
C.a.h(a.d.d,this)},
hh:function(){var z=this.a
if(z!=null){C.a.K(z.d.b,this)
this.a=null}},
hi:function(){var z=this.b
if(z!=null){C.a.K(z.d.c,this)
this.b=null}},
hj:function(){var z=this.c
if(z!=null){C.a.K(z.d.d,this)
this.c=null}},
gdK:function(){return this.a==null||this.b==null||this.c==null},
f2:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.bn()
if(y!=null)v=v.I(0,y)
if(x!=null)v=v.I(0,x)
if(w!=null)v=v.I(0,w)
if(v.ec())return
return v.t(0,Math.sqrt(v.w(v)))},
f7:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.E(0,y)
z=new V.I(z.a,z.b,z.c)
v=z.t(0,Math.sqrt(z.w(z)))
z=w.E(0,y)
z=new V.I(z.a,z.b,z.c)
z=v.ax(z.t(0,Math.sqrt(z.w(z))))
return z.t(0,Math.sqrt(z.w(z)))},
cc:function(){if(this.d!=null)return!0
var z=this.f2()
if(z==null){z=this.f7()
if(z==null)return!1}this.d=z
this.a.a.a4()
return!0},
f1:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=V.bn()
if(y!=null)v=v.I(0,y)
if(x!=null)v=v.I(0,x)
if(w!=null)v=v.I(0,w)
if(v.ec())return
return v.t(0,Math.sqrt(v.w(v)))},
f6:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
z=new V.I(z.a,z.b,z.c)
m=z.t(0,Math.sqrt(z.w(z)))
if(o.a-p.a<0)m=m.L(0)}else{l=(z-q.b)/n
z=r.E(0,u).p(0,l).I(0,u).E(0,x)
z=new V.I(z.a,z.b,z.c)
m=z.t(0,Math.sqrt(z.w(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.L(0)}z=this.d
if(z!=null){k=z.t(0,Math.sqrt(z.w(z)))
z=k.ax(m)
z=z.t(0,Math.sqrt(z.w(z))).ax(k)
m=z.t(0,Math.sqrt(z.w(z)))}return m},
ca:function(){if(this.e!=null)return!0
var z=this.f1()
if(z==null){z=this.f6()
if(z==null)return!1}this.e=z
this.a.a.a4()
return!0},
gil:function(){if(J.G(this.a,this.b))return!0
if(J.G(this.b,this.c))return!0
if(J.G(this.c,this.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
D:function(a){var z,y
if(this.gdK())return a+"disposed"
z=a+C.j.az(J.aw(this.a.e),0)+", "+C.j.az(J.aw(this.b.e),0)+", "+C.j.az(J.aw(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
N:function(){return this.D("")},
m:{
bz:function(a,b,c){var z,y,x
z=new F.Y()
y=a.a
if(y==null)H.o(P.n("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.o(P.n("May not create a face with vertices attached to different shapes."))
z.hr(a)
z.hs(b)
z.ht(c)
C.a.h(z.a.a.d.b,z)
z.a.a.a4()
return z}}},
fO:{"^":"a;"},
i7:{"^":"fO;",
b0:function(a,b,c){var z,y
z=b.a
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
if(z==y.e){z=b.b
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
if(z==y.e){z=b.c
z.a.a.A()
z=z.e
y=c.c
y.a.a.A()
y=z==y.e
z=y}else z=!1
return z}else{z=b.a
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
if(z==y.e){z=b.b
z.a.a.A()
z=z.e
y=c.c
y.a.a.A()
if(z==y.e){z=b.c
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
y=z==y.e
z=y}else z=!1
return z}else{z=b.a
z.a.a.A()
z=z.e
y=c.c
y.a.a.A()
if(z==y.e){z=b.b
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
if(z==y.e){z=b.c
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
y=z==y.e
z=y}else z=!1
return z}else return!1}}}},
bE:{"^":"a;"},
h6:{"^":"a;"},
iw:{"^":"h6;",
b0:function(a,b,c){var z,y
z=b.a
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
if(z==y.e){z=b.b
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
return z==y.e}else{z=b.a
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
if(z==y.e){z=b.b
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
return z==y.e}else return!1}}},
c0:{"^":"a;"},
e1:{"^":"a;0a,0b,0c,0d,0e",
gl:function(){var z=this.e
if(z==null){z=D.A()
this.e=z}return z},
aw:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aw()||!1
if(!this.a.aw())y=!1
z=this.e
if(!(z==null))z.aA()
return y},
iP:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.c(z.slice(0),[H.r(z,0)])
for(z=[F.ae];y.length!==0;){x=C.a.giB(y)
C.a.j2(y,0)
if(x!=null){w=H.c([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.w)(y),++u){t=y[u]
if(t!=null&&a.b0(0,x,t)){C.a.h(w,t)
C.a.K(y,t)}}if(w.length>1)b.iO(w)}}this.a.A()
this.c.cA()
this.d.cA()
this.b.j3()
this.c.cB(new F.iw())
this.d.cB(new F.i7())
z=this.e
if(!(z==null))z.aA()},
du:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$am()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aD().a)!==0)++w
if((x&$.$get$aC().a)!==0)++w
if((x&$.$get$aE().a)!==0)++w
if((x&$.$get$aF().a)!==0)++w
if((x&$.$get$bo().a)!==0)++w
if((x&$.$get$bp().a)!==0)++w
if((x&$.$get$aZ().a)!==0)++w
if((x&$.$get$aB().a)!==0)++w
v=b.gcM(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.q
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.dh])
for(r=0,q=0;q<w;++q){p=b.ih(q)
o=p.gcM(p)
C.a.a_(s,q,new Z.dh(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.f(y,n)
m=y[n].iM(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.a_(t,l,m[k]);++l}}r+=o}H.e(t,"$isb",[x],"$asb")
y=a.a
j=y.createBuffer()
C.b.am(y,34962,j)
C.b.dt(y,34962,new Float32Array(H.b0(t)),35044)
C.b.am(y,34962,null)
i=new Z.ct(new Z.eG(34962,j),s,b)
i.sfw(H.c([],[Z.bW]))
this.b.b
if(this.c.b.length!==0){x=P.u
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.A()
C.a.h(h,g.e)}f=Z.eI(y,34963,H.e(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bW(1,h.length,f))}if(this.d.b.length!==0){x=P.u
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.A()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].c
g.a.a.A()
C.a.h(h,g.e)}f=Z.eI(y,34963,H.e(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bW(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.x])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.D("   "))}this.b.b
if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.D("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.D("   "))}return C.a.C(z,"\n")},
aP:function(a){var z=this.e
if(!(z==null))z.B(a)},
a4:function(){return this.aP(null)},
$iskI:1,
m:{
e2:function(){var z,y
z=new F.e1()
y=new F.iO(z)
y.b=!1
y.shQ(H.c([],[F.ae]))
z.a=y
y=new F.i2(z)
y.sbZ(H.c([],[F.c0]))
z.b=y
y=new F.i1(z)
y.sfz(H.c([],[F.bE]))
z.c=y
y=new F.i0(z)
y.sfl(H.c([],[F.Y]))
z.d=y
z.e=null
return z}}},
i0:{"^":"a;a,0b",
sfl:function(a){this.b=H.e(a,"$isb",[F.Y],"$asb")},
ic:function(a){var z,y,x,w,v,u
H.e(a,"$isb",[F.ae],"$asb")
z=H.c([],[F.Y])
y=a[0]
for(x=this.a,w=2;w<4;++w){v=a[w-1]
u=a[w]
x.a.h(0,y)
x.a.h(0,v)
x.a.h(0,u)
C.a.h(z,F.bz(y,v,u))}return z},
ie:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.e(c,"$isb",[F.ae],"$asb")
z=H.c([],[F.Y])
for(y=this.a,x=b,w=0,v=!1,u=1;u<a;++u,++w,++x){for(t=v,s=1;s<b;++s,x=o){r=c.length
if(w<0||w>=r)return H.f(c,w)
q=c[w];++w
if(w>=r)return H.f(c,w)
p=c[w]
o=x+1
if(o<0||o>=r)return H.f(c,o)
n=c[o]
if(x<0||x>=r)return H.f(c,x)
m=c[x]
r=y.a
if(t){r.h(0,q)
y.a.h(0,p)
y.a.h(0,n)
C.a.h(z,F.bz(q,p,n))
y.a.h(0,q)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bz(q,n,m))}else{r.h(0,p)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bz(p,n,m))
y.a.h(0,p)
y.a.h(0,m)
y.a.h(0,q)
C.a.h(z,F.bz(p,m,q))}t=!t}v=!v}return z},
gn:function(a){return this.b.length},
cB:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.f(x,y)
w=x[y]
for(x=w.d,v=x.b.length+x.c.length+x.d.length-1;v>=0;--v){u=w.d.j(0,v)
for(t=v-1;t>=0;--t){s=w.d.j(0,t)
if(a.b0(0,u,s)){u.aY()
break}}}}},
cA:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=x.gil()
if(y)x.aY()}},
aw:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.w)(z),++w)if(!z[w].cc())x=!1
return x},
cb:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.w)(z),++w)if(!z[w].ca())x=!1
return x},
i:function(a){return this.N()},
D:function(a){var z,y,x,w
z=H.c([],[P.x])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].D(a))
return C.a.C(z,"\n")},
N:function(){return this.D("")}},
i1:{"^":"a;a,0b",
sfz:function(a){this.b=H.e(a,"$isb",[F.bE],"$asb")},
gn:function(a){return this.b.length},
cB:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.f(x,y)
w=x[y]
for(x=w.c,v=x.b.length+x.c.length-1;v>=0;--v){u=w.c.j(0,v)
for(t=v-1;t>=0;--t){s=w.c.j(0,t)
if(a.b0(0,u,s)){u.aY()
break}}}}},
cA:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=J.G(x.a,x.b)
if(y)x.aY()}},
i:function(a){return this.N()},
D:function(a){var z,y,x,w
z=H.c([],[P.x])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.f(w,x)
C.a.h(z,w[x].D(a+(""+x+". ")))}return C.a.C(z,"\n")},
N:function(){return this.D("")}},
i2:{"^":"a;a,0b",
sbZ:function(a){this.b=H.e(a,"$isb",[F.c0],"$asb")},
gn:function(a){return 0},
j3:function(){var z,y
for(z=-1;!1;--z){y=this.b
return H.f(y,z)
y=y[z].gka()
y=y.gk7(y)
if(y.gn(y).jk(0,1)){y=this.b
return H.f(y,z)
y[z].aY()}}},
i:function(a){return this.N()},
D:function(a){var z,y,x
z=H.c([],[P.x])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.f(y,x)
C.a.h(z,y[x].D(a))}return C.a.C(z,"\n")},
N:function(){return this.D("")}},
ae:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
dF:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cb(this.cx,x,u,z,y,w,v,a,t)},
iM:function(a){var z,y
if(a.u(0,$.$get$am())){z=this.f
y=[P.q]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$aD())){z=this.r
y=[P.q]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$aC())){z=this.x
y=[P.q]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$aE())){z=this.y
y=[P.q]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(a.u(0,$.$get$aF())){z=this.z
y=[P.q]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$bo())){z=this.Q
y=[P.q]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$bp())){z=this.Q
y=[P.q]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(a.u(0,$.$get$aZ()))return H.c([this.ch],[P.q])
else if(a.u(0,$.$get$aB())){z=this.cx
y=[P.q]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.q])},
cc:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bn()
this.d.a9(0,new F.iY(z))
z=z.a
this.r=z.t(0,Math.sqrt(z.w(z)))
z=this.a
if(z!=null){z.a4()
z=this.a.e
if(!(z==null))z.aA()}return!0},
ca:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bn()
this.d.a9(0,new F.iX(z))
z=z.a
this.x=z.t(0,Math.sqrt(z.w(z)))
z=this.a
if(z!=null){z.a4()
z=this.a.e
if(!(z==null))z.aA()}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
D:function(a){var z,y,x
z=H.c([],[P.x])
C.a.h(z,C.j.az(J.aw(this.e),0))
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
C.a.h(z,V.E(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.C(z,", ")
return a+"{"+x+"}"},
N:function(){return this.D("")},
m:{
cb:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ae()
y=new F.iW(z)
y.sbZ(H.c([],[F.c0]))
z.b=y
y=new F.iS(z)
x=[F.bE]
y.sfA(H.c([],x))
y.sfB(H.c([],x))
z.c=y
y=new F.iP(z)
x=[F.Y]
y.sfm(H.c([],x))
y.sfn(H.c([],x))
y.sfo(H.c([],x))
z.d=y
h=$.$get$eD()
z.e=0
y=$.$get$am()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aD().a)!==0?e:null
z.x=(x&$.$get$aC().a)!==0?b:null
z.y=(x&$.$get$aE().a)!==0?f:null
z.z=(x&$.$get$aF().a)!==0?g:null
z.Q=(x&$.$get$eE().a)!==0?c:null
z.ch=(x&$.$get$aZ().a)!==0?i:0
z.cx=(x&$.$get$aB().a)!==0?a:null
return z}}},
iY:{"^":"t:5;a",
$1:function(a){var z,y
H.h(a,"$isY")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.I(0,z)}}},
iX:{"^":"t:5;a",
$1:function(a){var z,y
H.h(a,"$isY")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.I(0,z)}}},
iO:{"^":"a;a,0b,0c",
shQ:function(a){this.c=H.e(a,"$isb",[F.ae],"$asb")},
A:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.f(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z,y
z=b.a
if(z!=null){if(z===this.a)return!1
throw H.k(P.n("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
y=this.a
b.a=y
C.a.h(z,b)
y.a4()
return!0},
ig:function(a,b,c,d,e,f,g,h,i){var z=F.cb(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bk:function(a,b,c,d,e,f){return this.ig(a,null,b,c,null,d,e,f,0)},
gn:function(a){return this.c.length},
aw:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x)z[x].cc()
return!0},
cb:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x)z[x].ca()
return!0},
ik:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.t(0,Math.sqrt(u*u+t*t+s*s))
if(!J.G(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.B(null)}}}}return!0},
i:function(a){return this.N()},
D:function(a){var z,y,x,w
this.A()
z=H.c([],[P.x])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].D(a))
return C.a.C(z,"\n")},
N:function(){return this.D("")}},
iP:{"^":"a;a,0b,0c,0d",
sfm:function(a){this.b=H.e(a,"$isb",[F.Y],"$asb")},
sfn:function(a){this.c=H.e(a,"$isb",[F.Y],"$asb")},
sfo:function(a){this.d=H.e(a,"$isb",[F.Y],"$asb")},
gn:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var z,y,x
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
a9:function(a,b){H.l(b,{func:1,ret:-1,args:[F.Y]})
C.a.a9(this.b,b)
C.a.a9(this.c,new F.iQ(this,b))
C.a.a9(this.d,new F.iR(this,b))},
i:function(a){return this.N()},
D:function(a){var z,y,x,w
z=H.c([],[P.x])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].D(a))
return C.a.C(z,"\n")},
N:function(){return this.D("")}},
iQ:{"^":"t:5;a,b",
$1:function(a){H.h(a,"$isY")
if(!J.G(a.a,this.a))this.b.$1(a)}},
iR:{"^":"t:5;a,b",
$1:function(a){var z
H.h(a,"$isY")
z=this.a
if(!J.G(a.a,z)&&!J.G(a.b,z))this.b.$1(a)}},
iS:{"^":"a;a,0b,0c",
sfA:function(a){this.b=H.e(a,"$isb",[F.bE],"$asb")},
sfB:function(a){this.c=H.e(a,"$isb",[F.bE],"$asb")},
gn:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.f(z,x)
return z[x]}else{if(b<0)return H.f(z,b)
return z[b]}},
i:function(a){return this.N()},
D:function(a){var z,y,x,w
z=H.c([],[P.x])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].D(a))
return C.a.C(z,"\n")},
N:function(){return this.D("")}},
iU:{"^":"a;"},
iT:{"^":"iU;",
b0:function(a,b,c){return J.G(b.f,c.f)}},
iV:{"^":"a;"},
hw:{"^":"iV;",
iO:function(a){var z,y,x,w,v,u,t,s,r
H.e(a,"$isb",[F.ae],"$asb")
z=V.bn()
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.I(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.t(0,Math.sqrt(z.w(z)))
for(y=a.length,w=z==null,x=0;x<a.length;a.length===y||(0,H.w)(a),++x){v=a[x]
if(w)u=null
else{t=z.a
s=z.b
r=z.c
u=z.t(0,Math.sqrt(t*t+s*s+r*r))}if(!J.G(v.r,u)){v.r=u
t=v.a
if(t!=null){t=t.e
if(!(t==null))t.B(null)}}}return}},
iW:{"^":"a;a,0b",
sbZ:function(a){this.b=H.e(a,"$isb",[F.c0],"$asb")},
gn:function(a){return 0},
i:function(a){return this.N()},
D:function(a){var z,y,x
z=H.c([],[P.x])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.f(y,x)
C.a.h(z,y[x].D(a))}return C.a.C(z,"\n")},
N:function(){return this.D("")}}}],["","",,O,{"^":"",hk:{"^":"bl;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0ak:dy<",
sf4:function(a){this.e=H.e(a,"$isH",[V.a5],"$asH")},
sak:function(a){this.dy=H.h(a,"$isao")},
gl:function(){var z=this.dy
if(z==null){z=D.A()
this.dy=z}return z},
R:[function(a){var z
H.h(a,"$isp")
z=this.dy
if(!(z==null))z.B(a)},function(){return this.R(null)},"bd","$1","$0","gar",0,2,0],
hn:[function(a){H.h(a,"$isp")
this.a=null
this.R(a)},function(){return this.hn(null)},"jT","$1","$0","ghm",0,2,0],
js:[function(a,b){var z=V.a5
z=new D.bA(a,H.e(b,"$isj",[z],"$asj"),this,[z])
z.b=!0
this.R(z)},"$2","gfM",8,0,19],
jt:[function(a,b){var z=V.a5
z=new D.bB(a,H.e(b,"$isj",[z],"$asj"),this,[z])
z.b=!0
this.R(z)},"$2","gfN",8,0,19],
d2:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
z=this.dx
y=C.h.Y(z.e.length+3,4)*4
x=C.h.Y(z.f.length+3,4)*4
w=C.h.Y(z.r.length+3,4)*4
v=C.h.Y(z.x.length+3,4)*4
u=C.h.Y(z.y.length+3,4)*4
t=C.h.Y(z.z.length+3,4)*4
s=C.h.Y(this.e.a.length+3,4)*4
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
a2=$.$get$am()
if(e){g=$.$get$aD()
a2=new Z.aY(a2.a|g.a)}if(d){g=$.$get$aC()
a2=new Z.aY(a2.a|g.a)}if(c){g=$.$get$aE()
a2=new Z.aY(a2.a|g.a)}if(b){g=$.$get$aF()
a2=new Z.aY(a2.a|g.a)}if(a0){g=$.$get$aB()
a2=new Z.aY(a2.a|g.a)}return new A.ho(z,r,q,p,o,n,m,l,k,y,x,w,v,u,t,y+x+w+v+u+t,i,i,a,a1,!0,!1,!1,h,a,f,e,d,c,b,a0,!1,!1,!1,s,j.charCodeAt(0)==0?j:j,a2)},
S:function(a,b){H.e(a,"$isb",[T.c7],"$asb")},
ah:function(a){var z,y,x,w,v
for(z=this.dx.a,z=new J.ah(z,z.length,0,[H.r(z,0)]);z.v();){y=z.d
y.toString
x=$.ca
if(x==null){x=new V.I(0,0,1)
$.ca=x}y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cD(x)}}},
eg:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.d2()
y=H.h(a.fr.j(0,z.af),"$isdN")
if(y==null){y=A.hl(z,a.a)
a.dn(y)}this.a=y
b.e=null
z=y}x=z.z
w=x.bm
z=b.e
if(!(z instanceof Z.ct)){b.e=null
z=null}if(z==null||!z.d.u(0,w)){z=x.r1
if(z)b.d.aw()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.d
u.d.cb()
u.a.cb()
u=u.e
if(!(u==null))u.aA()}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.a.ik()
t=t.e
if(!(t==null))t.aA()}r=b.d.du(new Z.eH(a.a),w)
r.ay($.$get$am()).e=this.a.Q.c
if(z)r.ay($.$get$aD()).e=this.a.cx.c
if(v)r.ay($.$get$aC()).e=this.a.ch.c
if(x.rx)r.ay($.$get$aE()).e=this.a.cy.c
if(u)r.ay($.$get$aF()).e=this.a.db.c
if(x.x1)r.ay($.$get$aB()).e=this.a.dx.c
b.e=r}z=T.c7
q=H.c([],[z])
this.a.a1(a)
if(x.fx){v=this.a
u=a.dx.gW()
v=v.dy
v.toString
v.aj(u.a6(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db.gW().p(0,a.dx.gW())
a.cx=u}v=v.fr
v.toString
v.aj(u.a6(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.gj1().p(0,a.dx.gW())
a.ch=u}v=v.fy
v.toString
v.aj(u.a6(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.k1
v.toString
v.aj(C.o.a6(u,!0))}if(x.y1){v=this.a
u=this.c
v=v.k2
v.toString
v.aj(C.o.a6(u,!0))}if(x.y2){v=this.a
u=this.d
v=v.k3
v.toString
v.aj(C.o.a6(u,!0))}if(x.ao>0){p=this.e.a.length
v=this.a.k4
C.b.H(v.a,v.d,p)
for(v=[P.q],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.f(t,o)
t=t[o]
u.toString
H.h(t,"$isa5")
u=u.r1
if(o>=u.length)return H.f(u,o)
u=u[o]
n=new Float32Array(H.b0(H.e(t.a6(0,!0),"$isb",v,"$asb")))
C.b.cE(u.a,u.d,!1,n)}}switch(x.a){case C.c:break
case C.f:v=this.a
u=this.f.f
v=v.r2
v.toString
t=u.a
s=u.b
u=u.c
C.b.q(v.a,v.d,t,s,u)
break
case C.d:this.S(q,this.f.d)
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
C.b.q(u.a,u.d,t,s,v)
break
case C.e:this.S(q,this.f.e)
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
case C.d:this.S(q,this.r.d)
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
C.b.q(u.a,u.d,t,s,v)
break
case C.e:this.S(q,this.r.e)
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
C.b.q(u.a,u.d,t,s,v)
break}switch(x.c){case C.c:break
case C.f:v=this.a
u=this.x.f
v=v.af
v.toString
t=u.a
s=u.b
u=u.c
C.b.q(v.a,v.d,t,s,u)
break
case C.d:this.S(q,this.x.d)
v=this.a
u=this.x.d
v.ae(v.bm,v.bn,u)
u=this.a
v=this.x.f
u=u.af
u.toString
t=v.a
s=v.b
v=v.c
C.b.q(u.a,u.d,t,s,v)
break
case C.e:this.S(q,this.x.e)
v=this.a
u=this.x.e
v.a7(v.dO,v.bn,u)
u=this.a
v=this.x.f
u=u.af
u.toString
t=v.a
s=v.b
v=v.c
C.b.q(u.a,u.d,t,s,v)
break}switch(x.d){case C.c:break
case C.f:v=this.a
u=this.y.f
v=v.bo
v.toString
t=u.a
s=u.b
u=u.c
C.b.q(v.a,v.d,t,s,u)
break
case C.d:this.S(q,this.y.d)
v=this.a
u=this.y.d
v.ae(v.dP,v.bp,u)
u=this.a
v=this.y.f
u=u.bo
u.toString
t=v.a
s=v.b
v=v.c
C.b.q(u.a,u.d,t,s,v)
break
case C.e:this.S(q,this.y.e)
v=this.a
u=this.y.e
v.a7(v.dQ,v.bp,u)
u=this.a
v=this.y.f
u=u.bo
u.toString
t=v.a
s=v.b
v=v.c
C.b.q(u.a,u.d,t,s,v)
break}switch(x.e){case C.c:break
case C.f:v=this.a
u=this.z.f
v=v.bq
v.toString
t=u.a
s=u.b
u=u.c
C.b.q(v.a,v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bs
C.b.G(u.a,u.d,s)
break
case C.d:this.S(q,this.z.d)
v=this.a
u=this.z.d
v.ae(v.dR,v.br,u)
u=this.a
v=this.z.f
u=u.bq
u.toString
t=v.a
s=v.b
v=v.c
C.b.q(u.a,u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bs
C.b.G(v.a,v.d,s)
break
case C.e:this.S(q,this.z.e)
v=this.a
u=this.z.e
v.a7(v.dS,v.br,u)
u=this.a
v=this.z.f
u=u.bq
u.toString
t=v.a
s=v.b
v=v.c
C.b.q(u.a,u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bs
C.b.G(v.a,v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.e2
C.b.H(v.a,v.d,p)
m=a.db.gW()
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.w)(v),++k){j=v[k]
t=this.a.cg
if(l>=t.length)return H.f(t,l)
i=t[l]
t=m.cD(j.a)
s=t.a
h=t.b
g=t.c
g=t.t(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
s=g.a
t=g.b
g=g.c
C.b.q(h.a,h.d,s,t,g)
g=j.c
t=i.c
C.b.q(t.a,t.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.e3
C.b.H(v.a,v.d,p)
m=a.db.gW()
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.w)(v),++k){j=v[k]
t=this.a.ci
if(l>=t.length)return H.f(t,l)
i=t[l]
t=j.gb4(j)
s=i.b
h=t.gcH(t)
g=t.gcI(t)
t=t.gcJ(t)
C.b.q(s.a,s.d,h,g,t)
t=m.ba(j.gb4(j))
g=i.c
C.b.q(g.a,g.d,t.a,t.b,t.c)
t=j.gan(j)
g=i.d
h=t.gbC()
s=t.gbb()
t=t.gbl()
C.b.q(g.a,g.d,h,s,t)
t=j.gc5()
s=i.e
C.b.G(s.a,s.d,t)
t=j.gc6()
s=i.f
C.b.G(s.a,s.d,t)
t=j.gc7()
s=i.r
C.b.G(s.a,s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.e4
C.b.H(v.a,v.d,p)
m=a.db.gW()
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.w)(v),++k){j=v[k]
t=this.a.cj
if(l>=t.length)return H.f(t,l)
i=t[l]
t=j.gb4(j)
s=i.b
h=t.gcH(t)
g=t.gcI(t)
t=t.gcJ(t)
C.b.q(s.a,s.d,h,g,t)
t=j.gcf(j).jZ()
g=i.c
h=t.gaL(t)
s=t.gaM(t)
t=t.gaN()
C.b.q(g.a,g.d,h,s,t)
t=m.ba(j.gb4(j))
s=i.d
C.b.q(s.a,s.d,t.a,t.b,t.c)
t=j.gan(j)
s=i.e
h=t.gbC()
g=t.gbb()
t=t.gbl()
C.b.q(s.a,s.d,h,g,t)
t=j.gjY()
g=i.f
C.b.G(g.a,g.d,t)
t=j.gjX()
g=i.r
C.b.G(g.a,g.d,t)
t=j.gc5()
g=i.x
C.b.G(g.a,g.d,t)
t=j.gc6()
g=i.y
C.b.G(g.a,g.d,t)
t=j.gc7()
g=i.z
C.b.G(g.a,g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.e5
C.b.H(v.a,v.d,p)
m=a.db.gW()
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.w)(v),++k){j=v[k]
s=this.a.ck
if(l>=s.length)return H.f(s,l)
i=s[l]
s=j.gag()
H.e(q,"$isb",t,"$asb")
if(!C.a.aK(q,s)){s.sco(0,q.length)
C.a.h(q,s)}s=j.gcf(j)
h=i.d
g=s.gaL(s)
f=s.gaM(s)
s=s.gaN()
C.b.q(h.a,h.d,g,f,s)
s=j.gbF()
f=i.b
g=s.gaL(s)
h=s.gaM(s)
s=s.gaN()
C.b.q(f.a,f.d,g,h,s)
s=j.gb5(j)
h=i.c
g=s.gaL(s)
f=s.gaM(s)
s=s.gaN()
C.b.q(h.a,h.d,g,f,s)
s=m.cD(j.gcf(j))
f=s.a
g=s.b
h=s.c
h=s.t(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
f=h.a
s=h.b
h=h.c
C.b.q(g.a,g.d,f,s,h)
h=j.gan(j)
s=i.f
f=h.gbC()
g=h.gbb()
h=h.gbl()
C.b.q(s.a,s.d,f,g,h)
h=j.gag()
s=h.gcr(h)
if(!s){s=i.x
C.b.H(s.a,s.d,1)}else{s=i.r
g=h.gfD()
f=s.a
s=s.d
if(!g)C.b.H(f,s,0)
else C.b.H(f,s,h.gfv())
s=i.x
C.b.H(s.a,s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.e6
C.b.H(v.a,v.d,p)
m=a.db.gW()
for(v=this.dx.y,u=v.length,t=[P.q],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.w)(v),++k){j=v[k]
h=this.a.cl
if(l>=h.length)return H.f(h,l)
i=h[l]
h=j.gag()
H.e(q,"$isb",s,"$asb")
if(!C.a.aK(q,h)){h.sco(0,q.length)
C.a.h(q,h)}e=m.p(0,j.gW())
h=j.gW()
g=$.bi
if(g==null){g=new V.S(0,0,0)
$.bi=g}g=h.ba(g)
h=i.b
f=g.gcH(g)
d=g.gcI(g)
g=g.gcJ(g)
C.b.q(h.a,h.d,f,d,g)
h=$.bi
if(h==null){h=new V.S(0,0,0)
$.bi=h}h=e.ba(h)
g=i.c
C.b.q(g.a,g.d,h.a,h.b,h.c)
h=e.eb()
g=i.d
n=new Float32Array(H.b0(H.e(new V.dO(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a6(0,!0),"$isb",t,"$asb")))
C.b.ek(g.a,g.d,!1,n)
g=j.gan(j)
h=i.e
f=g.gbC()
d=g.gbb()
g=g.gbl()
C.b.q(h.a,h.d,f,d,g)
g=j.gag()
h=g.gcr(g)
if(!h){h=i.r
C.b.H(h.a,h.d,1)}else{h=i.f
f=g.gcr(g)
d=h.a
h=h.d
if(!f)C.b.H(d,h,0)
else C.b.H(d,h,g.gco(g))
h=i.r
C.b.H(h.a,h.d,0)}h=j.gc5()
g=i.x
C.b.G(g.a,g.d,h)
h=j.gc6()
g=i.y
C.b.G(g.a,g.d,h)
h=j.gc7()
g=i.z
C.b.G(g.a,g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.e7
C.b.H(v.a,v.d,p)
m=a.db.gW()
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.w)(v),++k){j=v[k]
t=this.a.cm
if(l>=t.length)return H.f(t,l)
i=t[l]
t=j.gag()
H.e(q,"$isb",z,"$asb")
if(!C.a.aK(q,t)){t.sco(0,q.length)
C.a.h(q,t)}t=j.gb4(j)
s=i.b
h=t.gcH(t)
g=t.gcI(t)
t=t.gcJ(t)
C.b.q(s.a,s.d,h,g,t)
t=j.gcf(j)
g=i.c
h=t.gaL(t)
s=t.gaM(t)
t=t.gaN()
C.b.q(g.a,g.d,h,s,t)
t=j.gbF()
s=i.d
h=t.gaL(t)
g=t.gaM(t)
t=t.gaN()
C.b.q(s.a,s.d,h,g,t)
t=j.gb5(j)
g=i.e
h=t.gaL(t)
s=t.gaM(t)
t=t.gaN()
C.b.q(g.a,g.d,h,s,t)
t=m.ba(j.gb4(j))
s=i.f
C.b.q(s.a,s.d,t.a,t.b,t.c)
t=j.gag()
s=t.gcr(t)
if(!s){t=i.x
C.b.H(t.a,t.d,1)}else{s=i.r
h=t.gfD()
g=s.a
s=s.d
if(!h)C.b.H(g,s,0)
else C.b.H(g,s,t.gfv())
t=i.x
C.b.H(t.a,t.d,0)}t=j.gan(j)
s=i.y
h=t.gbC()
g=t.gbb()
t=t.gbl()
C.b.q(s.a,s.d,h,g,t)
t=j.gk8()
g=i.z
C.b.G(g.a,g.d,t)
t=j.gk9()
g=i.Q
C.b.G(g.a,g.d,t)
t=j.gc5()
g=i.ch
C.b.G(g.a,g.d,t)
t=j.gc6()
g=i.cx
C.b.G(g.a,g.d,t)
t=j.gc7()
g=i.cy
C.b.G(g.a,g.d,t);++l}}}switch(x.f){case C.c:break
case C.f:break
case C.d:this.S(q,this.Q.d)
z=this.a
v=this.Q.d
z.ae(z.dT,z.bt,v)
break
case C.e:this.S(q,this.Q.e)
z=this.a
v=this.Q.e
z.a7(z.dU,z.bt,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db.gW().eb()
a.Q=v}z=z.id
z.toString
z.aj(v.a6(0,!0))}if(x.dy){this.S(q,this.ch)
z=this.a
v=this.ch
z.a7(z.dV,z.dW,v)
switch(x.r){case C.c:break
case C.f:z=this.a
v=this.cx.f
z=z.bu
z.toString
u=v.a
t=v.b
v=v.c
C.b.q(z.a,z.d,u,t,v)
break
case C.d:this.S(q,this.cx.d)
z=this.a
v=this.cx.d
z.ae(z.dX,z.bv,v)
v=this.a
z=this.cx.f
v=v.bu
v.toString
u=z.a
t=z.b
z=z.c
C.b.q(v.a,v.d,u,t,z)
break
case C.e:this.S(q,this.cx.e)
z=this.a
v=this.cx.e
z.a7(z.dY,z.bv,v)
v=this.a
z=this.cx.f
v=v.bu
v.toString
u=z.a
t=z.b
z=z.c
C.b.q(v.a,v.d,u,t,z)
break}switch(x.x){case C.c:break
case C.f:z=this.a
v=this.cy.f
z=z.bx
z.toString
u=v.a
t=v.b
v=v.c
C.b.q(z.a,z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bw
C.b.G(v.a,v.d,t)
break
case C.d:this.S(q,this.cy.d)
z=this.a
v=this.cy.d
z.ae(z.dZ,z.by,v)
v=this.a
z=this.cy.f
v=v.bx
v.toString
u=z.a
t=z.b
z=z.c
C.b.q(v.a,v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bw
C.b.G(z.a,z.d,t)
break
case C.e:this.S(q,this.cy.e)
z=this.a
v=this.cy.e
z.a7(z.e_,z.by,v)
v=this.a
z=this.cy.f
v=v.bx
v.toString
u=z.a
t=z.b
z=z.c
C.b.q(v.a,v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bw
C.b.G(z.a,z.d,t)
break}}z=x.y
v=z!==C.c
if(v){switch(z){case C.c:break
case C.f:z=this.a
u=this.db.f
z=z.bz
C.b.G(z.a,z.d,u)
break
case C.d:this.S(q,this.db.d)
z=this.a
u=this.db.d
z.ae(z.e0,z.bA,u)
u=this.a
z=this.db.f
u=u.bz
C.b.G(u.a,u.d,z)
break
case C.e:this.S(q,this.db.e)
z=this.a
u=this.db.e
z.a7(z.e1,z.bA,u)
u=this.a
z=this.db.f
u=u.bz
C.b.G(u.a,u.d,z)
break}z=a.a
C.b.aZ(z,3042)
C.b.ij(z,770,771)}for(o=0;o<q.length;++o)q[o].a1(a)
z=b.e
z.a1(a)
z.a5(a)
z.aQ(a)
if(v)C.b.ix(a.a,3042)
for(o=0;o<q.length;++o)q[o].aQ(a)
z=this.a
z.toString
C.b.cF(a.a,null)
z.x.dI()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.d2().af}},hm:{"^":"cD;0f,a,b,0c,0d,0e"},cD:{"^":"a;",
bg:["eF",function(){}]},hn:{"^":"cD;a,b,0c,0d,0e"},aT:{"^":"cD;0f,a,b,0c,0d,0e",
dg:function(a){var z,y
if(!J.G(this.f,a)){z=this.f
this.f=a
y=new D.y(this.b+".color",z,a,this,[V.W])
y.b=!0
this.a.R(y)}},
bg:["bJ",function(){this.eF()
this.dg(new V.W(1,1,1))}],
san:function(a,b){var z
if(this.c===C.c){this.c=C.f
this.bg()
z=this.a
z.a=null
z.R(null)}this.dg(b)}},hp:{"^":"aT;0ch,0f,a,b,0c,0d,0e",
hq:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.y(this.b+".refraction",y,a,this,[P.q])
z.b=!0
this.a.R(z)}},
bg:function(){this.bJ()
this.hq(1)}},hq:{"^":"aT;0ch,0f,a,b,0c,0d,0e",
c1:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.y(this.b+".shininess",y,a,this,[P.q])
z.b=!0
this.a.R(z)}},
bg:function(){this.bJ()
this.c1(100)}},bl:{"^":"a;"},ii:{"^":"bl;0a,0b,0c,0d,0ak:e<",
sfj:function(a){this.c=H.e(a,"$isH",[O.aL],"$asH")},
sak:function(a){this.e=H.h(a,"$isao")},
gl:function(){var z=this.e
if(z==null){z=D.A()
this.e=z}return z},
R:[function(a){var z
H.h(a,"$isp")
z=this.e
if(!(z==null))z.B(a)},function(){return this.R(null)},"bd","$1","$0","gar",0,2,0],
jA:[function(a,b){var z,y,x,w,v,u,t
H.e(b,"$isj",[O.aL],"$asj")
for(z=b.length,y=this.gar(),x={func:1,ret:-1,args:[D.p]},w=[x],v=0;v<b.length;b.length===z||(0,H.w)(b),++v){u=b[v]
if(u!=null){if(u.gak()==null){t=new D.ao()
t.sa0(null)
t.saU(null)
t.c=null
t.d=0
u.sak(t)}t=u.gak()
t.toString
H.l(y,x)
if(t.a==null)t.sa0(H.c([],w))
t=t.a;(t&&C.a).h(t,y)}}this.bd()},"$2","gfU",8,0,11],
jB:[function(a,b){var z,y
H.e(b,"$isj",[O.aL],"$asj")
for(z=b.gO(b),y=this.gar();z.v();)z.gF().gl().K(0,y)
this.bd()},"$2","gfV",8,0,11],
eg:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=C.h.Y(this.c.a.length+3,4)*4
if(z!==this.d){this.d=z
this.b=null}y=this.b
if(y==null){y="TextureLayout_"+z
x=H.h(a.fr.j(0,y),"$ise9")
if(x==null){x=A.ij(z,a.a)
a.dn(x)}this.b=x
y=x}if(b.e==null){y=b.d.du(new Z.eH(a.a),$.$get$am())
w=y.ay($.$get$am())
v=this.b
w.e=v.z.c
b.e=y
y=v}y.a1(a)
y=T.c7
u=H.c([],[y])
for(w=[P.q],y=[y],t=0,s=0;v=this.c.a,s<v.length;++s){r=v[s]
if(r!=null&&r.a!=null){v=r.a
H.e(u,"$isb",y,"$asb")
if(v!=null)if(!C.a.aK(u,v)){v.a=u.length
C.a.h(u,v)}v=this.b
q=r.a
v=v.cx
if(t>=v.length)return H.f(v,t)
v=v[t]
p=q==null||!q.d
o=v.a
v=v.d
if(p)C.b.H(o,v,0)
else C.b.H(o,v,q.a)
v=this.b
q=r.b
v=v.cy
if(t>=v.length)return H.f(v,t)
v=v[t]
if(q==null){q=$.c_
if(q==null){q=new V.a5(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.c_=q}}n=new Float32Array(H.b0(H.e(q.a6(0,!0),"$isb",w,"$asb")))
C.b.cE(v.a,v.d,!1,n)
v=this.b
m=r.c
v.toString
if(m==null){q=$.bk
if(q==null){q=V.bI(0,0,1,1)
$.bk=q
m=q}else m=q}q=v.db
if(t>=q.length)return H.f(q,t)
q=q[t]
C.b.bE(q.a,q.d,m.a,m.b)
v=v.dx
if(t>=v.length)return H.f(v,t)
v=v[t]
C.b.bE(v.a,v.d,m.c,m.d)
v=this.b
m=r.d
v.toString
if(m==null){q=$.bk
if(q==null){q=V.bI(0,0,1,1)
$.bk=q
m=q}else m=q}q=v.dy
if(t>=q.length)return H.f(q,t)
q=q[t]
C.b.bE(q.a,q.d,m.a,m.b)
v=v.fr
if(t>=v.length)return H.f(v,t)
v=v[t]
C.b.bE(v.a,v.d,m.c,m.d)
v=this.b
q=r.e
v=v.fx
if(t>=v.length)return H.f(v,t)
v=v[t]
q=q?1:0
C.b.H(v.a,v.d,q);++t}}y=this.b.Q
C.b.H(y.a,y.d,t)
y=this.b
w=this.a
y=y.ch
y.toString
v=w.a
q=w.b
p=w.c
w=w.d
C.b.ji(y.a,y.d,v,q,p,w)
for(y=a.a,s=0;s<u.length;++s){w=u[s]
if(!w.c&&w.d){w.c=!0
C.b.dl(y,33984+w.a)
C.b.aI(y,3553,w.b)}}w=b.e
if(w instanceof Z.ct){w.a1(a)
w.a5(a)
w.aQ(a)}else b.e=null
w=this.b
w.toString
C.b.cF(y,null)
w.x.dI()
for(s=0;s<u.length;++s){w=u[s]
if(w.c){w.c=!1
C.b.dl(y,33984+w.a)
C.b.aI(y,3553,null)}}}},aL:{"^":"a;0a,0b,0c,0d,0e,0ak:f<",
sak:function(a){this.f=H.h(a,"$isao")},
gl:function(){var z=this.f
if(z==null){z=D.A()
this.f=z}return z},
R:[function(a){var z
H.h(a,"$isp")
z=this.f
if(!(z==null))z.B(a)},function(){return this.R(null)},"bd","$1","$0","gar",0,2,0],
sag:function(a){var z,y
z=this.a
if(z==null?a!=null:z!==a){if(z!=null)z.gl().K(0,this.gar())
y=this.a
this.a=a
if(a!=null)a.gl().h(0,this.gar())
z=new D.y("texture",y,this.a,this,[T.e7])
z.b=!0
this.R(z)}},
sdD:function(a){var z,y
a=V.aK()
if(!J.G(this.b,a)){z=this.b
this.b=a
y=new D.y("colorMatrix",z,a,this,[V.a5])
y.b=!0
this.R(y)}},
scN:function(a,b){var z,y
b=V.c4()
if(!J.G(this.c,b)){z=this.c
this.c=b
y=new D.y("source",z,b,this,[V.c3])
y.b=!0
this.R(y)}},
sdH:function(a){var z,y
if(a==null)a=V.c4()
if(!J.G(this.d,a)){z=this.d
this.d=a
y=new D.y("destination",z,a,this,[V.c3])
y.b=!0
this.R(y)}},
se8:function(a){var z
if(this.e!==!1){this.e=!1
z=new D.y("flip",!0,!1,this,[P.U])
z.b=!0
this.R(z)}},
m:{
ik:function(a,b,c,d,e){var z=new O.aL()
z.sag(e)
z.sdD(a)
z.scN(0,d)
z.sdH(b)
z.se8(!1)
z.f=null
return z}}}}],["","",,T,{"^":"",c7:{"^":"cq;"},e7:{"^":"c7;"},ih:{"^":"e7;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gl:function(){var z=this.y
if(z==null){z=D.A()
this.y=z}return z},
m:{
e8:function(a,b){var z=new T.ih()
z.a=a
z.b=b
z.c=!1
z.d=!1
z.e=0
z.f=0
z.r=0
z.x=0
return z}}},im:{"^":"a;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",fk:{"^":"a;",
b_:function(a){return!0},
i:function(a){return"all"},
$isbf:1},bf:{"^":"a;"},dM:{"^":"a;0a",
sau:function(a){this.a=H.e(a,"$isb",[V.bf],"$asb")},
b_:["eE",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x)if(z[x].b_(a))return!0
return!1}],
i:["cQ",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.w)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbf:1},bh:{"^":"dM;0a",
b_:function(a){return!this.eE(a)},
i:function(a){return"!["+this.cQ(0)+"]"}},hY:{"^":"a;0a",
shp:function(a){this.a=H.e(a,"$isap",[P.u,P.U],"$asap")},
eJ:function(a){var z,y
if(a.a.length<=0)throw H.k(P.n("May not create a SetMatcher with zero characters."))
z=new H.bd(0,0,[P.u,P.U])
for(y=new H.dJ(a,a.gn(a),0,[H.a9(a,"P",0)]);y.v();)z.a_(0,y.d,!0)
this.shp(z)},
b_:function(a){return this.a.dE(a)},
i:function(a){var z=this.a
return P.cK(new H.h8(z,[H.r(z,0)]),0,null)},
$isbf:1,
m:{
a_:function(a){var z=new V.hY()
z.eJ(a)
return z}}},cI:{"^":"a;a,b,0c,0d",
shK:function(a){this.c=H.e(a,"$isb",[V.cN],"$asb")},
C:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.cN(this.a.J(0,b))
w.sau(H.c([],[V.bf]))
w.c=!1
C.a.h(this.c,w)
return w},
iA:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x){w=z[x]
if(w.b_(a))return w}return},
i:function(a){return this.b}},eg:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.ff(this.b,"\n","\\n")
y=H.ff(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},cM:{"^":"a;a,b,0c",
shk:function(a){var z=P.x
this.c=H.e(a,"$isap",[z,z],"$asap")},
i:function(a){return this.b}},is:{"^":"a;0a,0b,0c",
shC:function(a){this.a=H.e(a,"$isap",[P.x,V.cI],"$asap")},
shG:function(a){this.b=H.e(a,"$isap",[P.x,V.cM],"$asap")},
J:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.cI(this,b)
z.shK(H.c([],[V.cN]))
z.d=null
this.a.a_(0,b,z)}return z},
b8:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.cM(this,a)
y=P.x
z.shk(new H.bd(0,0,[y,y]))
this.b.a_(0,a,z)}return z},
jh:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.eg])
y=this.c
x=[P.u]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.j.be(a,t)
r=y.iA(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cK(w,0,null)
throw H.k(P.n("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cK(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.eg(o==null?p.b:o,q,t)}++t}}}},cN:{"^":"dM;b,0c,0a",
i:function(a){return this.b.b+": "+this.cQ(0)}}}],["","",,X,{"^":"",fm:{"^":"c6;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
gl:function(){var z=this.fr
if(z==null){z=D.A()
this.fr=z}return z},
ac:function(a){var z=this.fr
if(!(z==null))z.B(a)},
saq:function(a,b){var z
if(b<1)b=1
z=this.a
if(z!==b){this.y=null
this.a=b
this.c=b
z=new D.y("width",z,b,this,[P.u])
z.b=!0
this.ac(z)}},
sap:function(a,b){var z
if(b<1)b=1
z=this.b
if(z!==b){this.y=null
this.b=b
this.d=b
z=new D.y("height",z,b,this,[P.u])
z.b=!0
this.ac(z)}},
a1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
if(this.f){z=a.a
y=z.drawingBufferWidth
x=this.r
if(typeof y!=="number")return y.p()
this.saq(0,C.h.U(y*x))
z=z.drawingBufferHeight
x=this.x
if(typeof z!=="number")return z.p()
this.sap(0,C.h.U(z*x))}if(this.y==null){z=a.a
y=this.ch
x=this.a
w=this.b
v=H.a0(C.b.bG(z,3379))
u=V.d9(x,2)
t=V.d9(w,2)
v=V.d9(v,2)
u=Math.min(u,v)
t=Math.min(t,v)
s=z.createTexture()
C.b.aI(z,3553,s)
C.b.bD(z,3553,10242,33071)
C.b.bD(z,3553,10243,33071)
C.b.bD(z,3553,10241,9729)
C.b.bD(z,3553,10240,9729)
C.b.jc(z,3553,0,6408,u,t,0,6408,5121,null)
C.b.aI(z,3553,null)
r=T.e8(0,s)
r.e=x
r.f=w
r.r=u
r.x=t
if(!r.d){r.d=!0
x=r.y
if(!(x==null))x.dM()}y.b=r.b
y.c=r.c
y.d=r.d
y.e=r.e
y.f=r.f
y.r=r.r
y.x=r.x
y=y.y
if(!(y==null))y.dM()
y=this.ch
x=y.b
this.z=x
this.c=y.r
this.d=y.x
C.b.aI(z,3553,x)
y=z.createRenderbuffer()
this.Q=y
C.b.dr(z,36161,y)
C.b.j5(z,36161,33189,this.c,this.d)
y=z.createFramebuffer()
this.y=y
C.b.aX(z,36160,y)
C.b.iF(z,36160,36064,3553,this.z,0)
C.b.iE(z,36160,36096,36161,this.Q)
C.b.aI(z,3553,null)
C.b.dr(z,36161,null)
C.b.aX(z,36160,null)}z=a.a
C.b.aX(z,36160,this.y)
C.b.aZ(z,2884)
C.b.aZ(z,2929)
C.b.dG(z,513)
y=this.dy
x=y.c
a.c=C.i.U(x*this.a)
w=y.d
a.d=C.i.U(w*this.b)
q=y.a
p=this.c
o=C.i.U(q*p)
y=y.b
q=this.d
C.b.el(z,o,C.i.U(y*q),C.i.U(x*p),C.i.U(w*q))
C.b.dB(z,this.db)
y=this.cx
C.b.dA(z,y.a,y.b,y.c,y.d)
C.b.dz(z,16640)},
aQ:function(a){C.b.aX(a.a,36160,null)}},bP:{"^":"a;",$isas:1},fU:{"^":"c6;0a,0b,0c,0d,0e,0f,0r,0x",
gl:function(){var z=this.x
if(z==null){z=D.A()
this.x=z}return z},
a1:function(a){var z,y,x,w,v,u,t
z=a.a
C.b.aX(z,36160,null)
C.b.aZ(z,2884)
C.b.aZ(z,2929)
C.b.dG(z,513)
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
v=w.a
if(typeof y!=="number")return H.z(y)
u=C.i.U(v*y)
v=w.b
if(typeof x!=="number")return H.z(x)
t=C.i.U(v*x)
v=C.i.U(w.c*y)
a.c=v
w=C.i.U(w.d*x)
a.d=w
C.b.el(z,u,t,v,w)
C.b.dB(z,this.c)
w=this.a
C.b.dA(z,w.a,w.b,w.c,w.d)
C.b.dz(z,16640)},
aQ:function(a){},
m:{
cx:function(a,b,c,d,e,f,g){var z,y
z=new X.fU()
if(d==null)y=new V.a3(0,0,0,1)
else y=d
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.c4()
z.r=y
return z}}},fX:{"^":"a;0a,0b",
gl:function(){var z=this.b
if(z==null){z=D.A()
this.b=z}return z},
$isas:1,
$isbP:1},hz:{"^":"a;0a,0b,0c,0d,0e,0f",
gl:function(){var z=this.f
if(z==null){z=D.A()
this.f=z}return z},
ac:[function(a){var z
H.h(a,"$isp")
z=this.f
if(!(z==null))z.B(a)},function(){return this.ac(null)},"jm","$1","$0","geZ",0,2,0],
$isas:1,
$isbP:1,
m:{
dT:function(a,b,c,d,e){var z,y,x
z=new X.hz()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
if(null!=c){y=z.b
z.b=c
if(c!=null)c.gl().h(0,z.geZ())
x=new D.y("mover",y,z.b,z,[U.a7])
x.b=!0
z.ac(x)}x=z.c
if(!$.m.$2(x,b)){y=z.c
z.c=b
x=new D.y("fov",y,b,z,[P.q])
x.b=!0
z.ac(x)}x=z.d
if(!$.m.$2(x,d)){y=z.d
z.d=d
x=new D.y("near",y,d,z,[P.q])
x.b=!0
z.ac(x)}x=z.e
if(!$.m.$2(x,a)){y=z.e
z.e=a
x=new D.y("far",y,a,z,[P.q])
x.b=!0
z.ac(x)}return z}}},c6:{"^":"a;"}}],["","",,V,{"^":"",
kk:function(a){P.ir(C.A,new V.kl(a))},
kl:{"^":"t:35;a",
$1:function(a){H.h(a,"$isaW")
P.da(C.i.ej(this.a.giD(),2)+" fps")}},
i3:{"^":"a;0a,0b",
eK:function(a,b){var z,y,x,w,v,u,t
z=document
y=z.body
x=z.createElement("div")
x.className="scrollTop";(y&&C.q).Z(y,x)
w=z.createElement("div")
w.className="scrollPage"
C.q.Z(y,w)
v=z.createElement("div")
v.className="pageCenter"
C.l.Z(w,v)
if(a.length!==0){z.title=a
u=z.createElement("div")
u.className="pageTitle"
u.textContent=a
C.l.Z(v,u)}t=z.createElement("div")
this.a=t
C.l.Z(v,t)
this.b=null
t=W.a4
W.T(z,"scroll",H.l(new V.i6(x),{func:1,ret:-1,args:[t]}),!1,t)},
dm:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.e(a,"$isb",[P.x],"$asb")
this.hv()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.jh(C.a.iJ(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.w)(x),++v){u=x[v]
switch(u.a){case"Bold":t=z.createElement("div")
t.className="boldPar"
t.textContent=u.b
C.l.Z(y,t)
break
case"Italic":t=z.createElement("div")
t.className="italicPar"
t.textContent=u.b
C.l.Z(y,t)
break
case"Code":t=z.createElement("div")
t.className="codePar"
t.textContent=u.b
C.l.Z(y,t)
break
case"Link":s=u.b
if(H.fe(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.f(r,1)
q.href=H.M(r[1])
q.textContent=H.M(r[0])
C.l.Z(y,q)}else{p=P.jG(C.L,s,C.v,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+p
q.textContent=s
C.l.Z(y,q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
C.l.Z(y,t)
break}}C.l.Z(this.a,y)},
hv:function(){var z,y,x,w
if(this.b!=null)return
z=new V.is()
y=P.x
z.shC(new H.bd(0,0,[y,V.cI]))
z.shG(new H.bd(0,0,[y,V.cM]))
z.c=null
z.c=z.J(0,"Start")
y=z.J(0,"Start").C(0,"Bold")
x=V.a_(new H.V("*"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Bold").C(0,"Bold")
x=new V.bh()
w=[V.bf]
x.sau(H.c([],w))
C.a.h(y.a,x)
y=V.a_(new H.V("*"))
C.a.h(x.a,y)
y=z.J(0,"Bold").C(0,"BoldEnd")
x=V.a_(new H.V("*"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Start").C(0,"Italic")
x=V.a_(new H.V("_"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Italic").C(0,"Italic")
x=new V.bh()
x.sau(H.c([],w))
C.a.h(y.a,x)
y=V.a_(new H.V("_"))
C.a.h(x.a,y)
y=z.J(0,"Italic").C(0,"ItalicEnd")
x=V.a_(new H.V("_"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Start").C(0,"Code")
x=V.a_(new H.V("`"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Code").C(0,"Code")
x=new V.bh()
x.sau(H.c([],w))
C.a.h(y.a,x)
y=V.a_(new H.V("`"))
C.a.h(x.a,y)
y=z.J(0,"Code").C(0,"CodeEnd")
x=V.a_(new H.V("`"))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"Start").C(0,"LinkHead")
x=V.a_(new H.V("["))
C.a.h(y.a,x)
y.c=!0
y=z.J(0,"LinkHead").C(0,"LinkTail")
x=V.a_(new H.V("|"))
C.a.h(y.a,x)
x=z.J(0,"LinkHead").C(0,"LinkEnd")
y=V.a_(new H.V("]"))
C.a.h(x.a,y)
x.c=!0
x=z.J(0,"LinkHead").C(0,"LinkHead")
y=new V.bh()
y.sau(H.c([],w))
C.a.h(x.a,y)
x=V.a_(new H.V("|]"))
C.a.h(y.a,x)
x=z.J(0,"LinkTail").C(0,"LinkEnd")
y=V.a_(new H.V("]"))
C.a.h(x.a,y)
x.c=!0
x=z.J(0,"LinkTail").C(0,"LinkTail")
y=new V.bh()
y.sau(H.c([],w))
C.a.h(x.a,y)
x=V.a_(new H.V("|]"))
C.a.h(y.a,x)
C.a.h(z.J(0,"Start").C(0,"Other").a,new V.fk())
x=z.J(0,"Other").C(0,"Other")
y=new V.bh()
y.sau(H.c([],w))
C.a.h(x.a,y)
x=V.a_(new H.V("*_`["))
C.a.h(y.a,x)
x=z.J(0,"BoldEnd")
x.d=x.a.b8("Bold")
x=z.J(0,"ItalicEnd")
x.d=x.a.b8("Italic")
x=z.J(0,"CodeEnd")
x.d=x.a.b8("Code")
x=z.J(0,"LinkEnd")
x.d=x.a.b8("Link")
x=z.J(0,"Other")
x.d=x.a.b8("Other")
this.b=z},
m:{
i4:function(a,b){var z=new V.i3()
z.eK(a,!0)
return z}}},
i6:{"^":"t:36;a",
$1:function(a){P.ee(C.n,new V.i5(this.a))}},
i5:{"^":"t:2;a",
$0:function(){var z,y,x
z=C.i.U(document.documentElement.scrollTop)
y=this.a.style
x=H.i(-0.01*z)+"px"
y.top=x}}}],["","",,S,{"^":"",
fa:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=V.i4("Test 036",!0)
y=W.dj(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
C.l.Z(z.a,y)
x=[P.x]
z.dm(H.c(["Test of the texture layout cover technique."],x))
z.dm(H.c(["\xab[Back to Tests|../]"],x))
w=C.B.er(document,"testCanvas")
if(w==null)H.o(P.n("Failed to find an element with the identifier, testCanvas."))
v=E.ip(w,!0,!0,!0,!1)
u=new U.dB()
z=U.a7
u.bc(z)
u.aB(u.gfK(),u.gh6())
u.e=null
u.f=V.aK()
u.r=0
x=v.r
t=new U.iK()
s=U.cw()
s.scG(0,!0)
s.scs(6.283185307179586)
s.scu(0)
s.sa2(0,0)
s.sct(100)
s.sP(0)
s.sce(0.5)
t.b=s
r=t.gaG()
s.gl().h(0,r)
s=U.cw()
s.scG(0,!0)
s.scs(6.283185307179586)
s.scu(0)
s.sa2(0,0)
s.sct(100)
s.sP(0)
s.sce(0.5)
t.c=s
s.gl().h(0,r)
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
q=new X.ar(!1,!1,!1)
p=t.d
t.d=q
s=[X.ar]
r=new D.y("modifiers",p,q,t,s)
r.b=!0
t.M(r)
r=t.f
if(r!==!1){t.f=!1
r=new D.y("invertX",r,!1,t,[P.U])
r.b=!0
t.M(r)}r=t.r
if(r!==!1){t.r=!1
r=new D.y("invertY",r,!1,t,[P.U])
r.b=!0
t.M(r)}t.aW(x)
u.h(0,t)
x=v.r
t=new U.iJ()
r=U.cw()
r.scG(0,!0)
r.scs(6.283185307179586)
r.scu(0)
r.sa2(0,0)
r.sct(100)
r.sP(0)
r.sce(0.2)
t.b=r
r.gl().h(0,t.gaG())
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
q=new X.ar(!0,!1,!1)
p=t.c
t.c=q
r=new D.y("modifiers",p,q,t,s)
r.b=!0
t.M(r)
t.aW(x)
u.h(0,t)
x=v.r
t=new U.iL()
t.c=0.01
t.d=0
t.e=0
q=new X.ar(!1,!1,!1)
t.b=q
s=new D.y("modifiers",null,q,t,s)
s.b=!0
t.M(s)
t.aW(x)
u.h(0,t)
u.h(0,U.dn(V.aq(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
o=X.dT(2000,1.0471975511965976,u,0.1,null)
n=new X.fm()
n.a=512
n.b=512
n.c=512
n.d=512
n.e=!0
n.f=!0
n.r=1
n.x=1
n.ch=T.e8(0,null)
n.cx=new V.a3(0,0,0,1)
n.cy=!0
n.db=2000
n.dx=!0
n.dy=V.c4()
n.saq(0,800)
n.sap(0,600)
m=new V.a3(0,0,0,0)
if(!n.cx.u(0,m)){p=n.cx
n.cx=m
x=new D.y("color",p,m,n,[V.a3])
x.b=!0
n.ac(x)}l=E.dz(null,!0,null,"",null,null)
l.sbI(0,F.ko(30,1,15,0.5))
k=new O.hk()
k.sf4(O.bQ(V.a5))
k.e.aB(k.gfM(),k.gfN())
x=new O.aT(k,"emission")
x.c=C.c
x.f=new V.W(0,0,0)
k.f=x
x=new O.aT(k,"ambient")
x.c=C.c
x.f=new V.W(0,0,0)
k.r=x
x=new O.aT(k,"diffuse")
x.c=C.c
x.f=new V.W(0,0,0)
k.x=x
x=new O.aT(k,"invDiffuse")
x.c=C.c
x.f=new V.W(0,0,0)
k.y=x
x=new O.hq(k,"specular")
x.c=C.c
x.f=new V.W(0,0,0)
x.ch=100
k.z=x
x=new O.hn(k,"bump")
x.c=C.c
k.Q=x
k.ch=null
x=new O.aT(k,"reflect")
x.c=C.c
x.f=new V.W(0,0,0)
k.cx=x
x=new O.hp(k,"refract")
x.c=C.c
x.f=new V.W(0,0,0)
x.ch=1
k.cy=x
x=new O.hm(k,"alpha")
x.c=C.c
x.f=1
k.db=x
x=new D.h5()
x.bc(D.R)
x.sfh(H.c([],[D.bS]))
x.shd(H.c([],[D.dV]))
x.shz(H.c([],[D.e3]))
x.shL(H.c([],[D.ea]))
x.shM(H.c([],[D.eb]))
x.shN(H.c([],[D.ec]))
x.Q=null
x.ch=null
x.cL(x.gfL(),x.gh5(),x.gh7())
k.dx=x
t=x.Q
if(t==null){t=D.A()
x.Q=t
x=t}else x=t
x.h(0,k.ghm())
x=k.dx
t=x.ch
if(t==null){t=D.A()
x.ch=t
x=t}else x=t
x.h(0,k.gar())
k.dy=null
x=k.dx
j=V.eB()
t=U.dn(V.dP(V.dX(),j,new V.I(0,-1,-1)))
m=new V.W(1,1,1)
s=new D.bS()
s.c=new V.W(1,1,1)
s.a=V.eC()
p=s.b
s.b=t
t.gl().h(0,s.geQ())
z=new D.y("mover",p,s.b,s,[z])
z.b=!0
s.aD(z)
if(!s.c.u(0,m)){p=s.c
s.c=m
z=new D.y("color",p,m,s,[V.W])
z.b=!0
s.aD(z)}x.h(0,s)
z=k.r
z.san(0,new V.W(0,0,1))
z=k.x
z.san(0,new V.W(0,1,0))
z=k.z
z.san(0,new V.W(1,0,0))
z=k.z
if(z.c===C.c){z.c=C.f
z.bJ()
z.c1(100)
x=z.a
x.a=null
x.R(null)}z.c1(10)
i=new M.fL()
i.sf8(0,O.bQ(E.aj))
i.d.aB(i.gfP(),i.gfQ())
i.e=null
i.f=null
i.r=null
i.x=null
i.sdv(null)
i.sb6(0,null)
i.sb7(null)
i.sdv(o)
i.sb7(k)
i.sb6(0,n)
i.d.h(0,l)
h=new V.a3(0,0,0,1)
g=new O.ii()
g.a=h
z=new D.y("backColor",null,h,g,[V.a3])
z.b=!0
g.R(z)
g.b=null
g.sfj(O.bQ(O.aL))
g.c.aB(g.gfU(),g.gfV())
g.d=0
g.e=null
for(f=0;f<3;++f){e=f*0.3333333333333333
for(d=0;d<3;++d){z=g.c
x=n.ch
t=V.bI(e,d*0.3333333333333333,0.3333333333333333,0.3333333333333333)
s=new O.aL()
s.sag(x)
s.sdD(null)
s.scN(0,null)
s.sdH(t)
s.se8(!1)
s.f=null
z.toString
t=H.a9(z,"H",0)
H.v(s,t)
x=[t]
if(z.bY(H.c([s],x))){r=z.a
c=r.length
C.a.h(r,s)
t=H.e(H.c([s],x),"$isj",[t],"$asj")
z=z.c
if(z!=null)z.$2(c,t)}}}z=g.c
x=O.ik(null,null,!1,null,null)
x.sag(n.ch)
z.h(0,x)
b=X.cx(!0,!0,!1,new V.a3(0,0,0,1),2000,null,0)
a=new M.fy()
a0=new X.fX()
p=a.a
a.a=a0
a0.gl().h(0,a.gT())
z=new D.y("camera",p,a.a,a,[X.bP])
z.b=!0
a.X(z)
a.sb6(0,null)
a.sb7(null)
z=E.dz(null,!0,null,"",null,null)
a1=F.e2()
x=a1.a
t=new V.I(-1,-1,1)
t=t.t(0,Math.sqrt(t.w(t)))
a2=x.bk(new V.bG(1,2,4,6),new V.a3(1,0,0,1),new V.S(-1,-1,0),new V.Z(0,1),t,null)
x=a1.a
t=new V.I(1,-1,1)
t=t.t(0,Math.sqrt(t.w(t)))
a3=x.bk(new V.bG(0,3,4,6),new V.a3(0,0,1,1),new V.S(1,-1,0),new V.Z(1,1),t,null)
x=a1.a
t=new V.I(1,1,1)
t=t.t(0,Math.sqrt(t.w(t)))
a4=x.bk(new V.bG(0,2,5,6),new V.a3(0,1,0,1),new V.S(1,1,0),new V.Z(1,0),t,null)
x=a1.a
t=V.ay()
s=new V.I(-1,1,1)
s=s.t(0,Math.sqrt(s.w(s)))
a5=x.bk(new V.bG(0,2,4,7),new V.a3(1,1,0,1),new V.S(-1,1,0),t,s,null)
a1.d.ic(H.c([a2,a3,a4,a5],[F.ae]))
a1.aw()
z.sbI(0,a1)
a.d=z
a.e=null
a.sb7(g)
a.sb6(0,b)
z=M.at
x=H.c([i,a],[z])
t=new M.fw()
t.bc(z)
t.e=!1
t.f=null
t.aB(t.gh8(),t.gh9())
t.c4(0,x)
z=v.d
if(z!==t){if(z!=null)z.gl().K(0,v.gcT())
v.d=t
t.gl().h(0,v.gcT())
v.eO()}V.kk(v)}},1]]
setupProgram(dart,0,0)
J.O=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dF.prototype
return J.dE.prototype}if(typeof a=="string")return J.bY.prototype
if(a==null)return J.dG.prototype
if(typeof a=="boolean")return J.h0.prototype
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bD.prototype
return a}if(a instanceof P.a)return a
return J.ci(a)}
J.ch=function(a){if(typeof a=="string")return J.bY.prototype
if(a==null)return a
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bD.prototype
return a}if(a instanceof P.a)return a
return J.ci(a)}
J.f6=function(a){if(a==null)return a
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bD.prototype
return a}if(a instanceof P.a)return a
return J.ci(a)}
J.k1=function(a){if(typeof a=="number")return J.bC.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.c9.prototype
return a}
J.k2=function(a){if(typeof a=="number")return J.bC.prototype
if(typeof a=="string")return J.bY.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.c9.prototype
return a}
J.bM=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bD.prototype
return a}if(a instanceof P.a)return a
return J.ci(a)}
J.G=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.O(a).u(a,b)}
J.fh=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.k1(a).ai(a,b)}
J.db=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.k2(a).p(a,b)}
J.fi=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kb(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ch(a).j(a,b)}
J.fj=function(a,b,c,d){return J.bM(a).f0(a,b,c,d)}
J.dc=function(a,b){return J.bM(a).Z(a,b)}
J.co=function(a,b,c){return J.ch(a).io(a,b,c)}
J.dd=function(a,b){return J.f6(a).a8(a,b)}
J.aP=function(a){return J.O(a).gV(a)}
J.bN=function(a){return J.f6(a).gO(a)}
J.bx=function(a){return J.ch(a).gn(a)}
J.aw=function(a){return J.O(a).i(a)}
I.d7=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.q=W.fn.prototype
C.m=W.cu.prototype
C.l=W.dx.prototype
C.B=W.fW.prototype
C.C=J.F.prototype
C.a=J.aS.prototype
C.D=J.dE.prototype
C.h=J.dF.prototype
C.o=J.dG.prototype
C.i=J.bC.prototype
C.j=J.bY.prototype
C.K=J.bD.prototype
C.M=W.hv.prototype
C.u=J.hA.prototype
C.b=P.cH.prototype
C.p=J.c9.prototype
C.w=W.bq.prototype
C.x=W.j0.prototype
C.y=new P.hy()
C.z=new P.iN()
C.k=new P.jw()
C.c=new A.bR(0,"ColorSourceType.None")
C.f=new A.bR(1,"ColorSourceType.Solid")
C.d=new A.bR(2,"ColorSourceType.Texture2D")
C.e=new A.bR(3,"ColorSourceType.TextureCube")
C.n=new P.ba(0)
C.A=new P.ba(5e6)
C.E=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.F=function(hooks) {
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
C.r=function(hooks) { return hooks; }

C.G=function(getTagFallback) {
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
C.H=function() {
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
C.I=function(hooks) {
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
C.J=function(hooks) {
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
C.t=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.L=H.c(I.d7([0,0,65498,45055,65535,34815,65534,18431]),[P.u])
C.v=new P.iM(!1)
$.an=0
$.b8=null
$.df=null
$.cZ=!1
$.f8=null
$.f1=null
$.fd=null
$.cg=null
$.ck=null
$.d6=null
$.b1=null
$.bs=null
$.bt=null
$.d_=!1
$.J=C.k
$.dv=null
$.du=null
$.dt=null
$.ds=null
$.m=V.hr()
$.c_=null
$.dW=null
$.bi=null
$.bk=null
$.ew=null
$.eA=null
$.ey=null
$.ez=null
$.ca=null
$.ex=null
$.dU=null
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
I.$lazy(y,x,w)}})(["dr","$get$dr",function(){return H.f7("_$dart_dartClosure")},"cA","$get$cA",function(){return H.f7("_$dart_js")},"ei","$get$ei",function(){return H.au(H.c8({
toString:function(){return"$receiver$"}}))},"ej","$get$ej",function(){return H.au(H.c8({$method$:null,
toString:function(){return"$receiver$"}}))},"ek","$get$ek",function(){return H.au(H.c8(null))},"el","$get$el",function(){return H.au(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"ep","$get$ep",function(){return H.au(H.c8(void 0))},"eq","$get$eq",function(){return H.au(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"en","$get$en",function(){return H.au(H.eo(null))},"em","$get$em",function(){return H.au(function(){try{null.$method$}catch(z){return z.message}}())},"es","$get$es",function(){return H.au(H.eo(void 0))},"er","$get$er",function(){return H.au(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cX","$get$cX",function(){return P.j1()},"bu","$get$bu",function(){return[]},"eV","$get$eV",function(){return P.hO("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dq","$get$dq",function(){return{}},"eF","$get$eF",function(){return Z.af(0)},"eD","$get$eD",function(){return Z.af(511)},"am","$get$am",function(){return Z.af(1)},"aD","$get$aD",function(){return Z.af(2)},"aC","$get$aC",function(){return Z.af(4)},"aE","$get$aE",function(){return Z.af(8)},"aF","$get$aF",function(){return Z.af(16)},"bo","$get$bo",function(){return Z.af(32)},"bp","$get$bp",function(){return Z.af(64)},"eE","$get$eE",function(){return Z.af(96)},"aZ","$get$aZ",function(){return Z.af(128)},"aB","$get$aB",function(){return Z.af(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.p]},{func:1,ret:-1,args:[D.p]},{func:1,ret:P.D},{func:1,ret:-1},{func:1,ret:-1,args:[W.ak]},{func:1,ret:P.D,args:[F.Y]},{func:1,ret:-1,args:[P.u,[P.j,E.aj]]},{func:1,ret:P.D,args:[D.p]},{func:1,ret:-1,args:[W.aX]},{func:1,ret:-1,args:[W.a4]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.u,[P.j,O.aL]]},{func:1,ret:-1,args:[P.u,[P.j,M.at]]},{func:1,ret:P.D,args:[,]},{func:1,ret:P.D,args:[,,]},{func:1,ret:P.x,args:[P.u]},{func:1,ret:-1,args:[P.u,[P.j,U.a7]]},{func:1,ret:P.q},{func:1,args:[,]},{func:1,ret:-1,args:[P.u,[P.j,V.a5]]},{func:1,ret:-1,args:[W.be]},{func:1,ret:-1,args:[P.u,[P.j,D.R]]},{func:1,ret:-1,args:[W.bq]},{func:1,ret:P.D,args:[P.aa]},{func:1,ret:P.U,args:[[P.j,D.R]]},{func:1,ret:P.U,args:[P.q,P.q]},{func:1,ret:P.U,args:[W.K]},{func:1,args:[W.a4]},{func:1,ret:[P.aG,,],args:[,]},{func:1,ret:P.D,args:[,],opt:[,]},{func:1,ret:V.S,args:[P.q]},{func:1,ret:P.D,args:[F.ae,P.q,P.q]},{func:1,ret:W.X,args:[W.K]},{func:1,ret:P.D,args:[{func:1,ret:-1}]},{func:1,args:[P.x]},{func:1,ret:P.D,args:[P.aW]},{func:1,ret:P.D,args:[W.a4]},{func:1,args:[,P.x]},{func:1,ret:P.D,args:[{func:1,ret:-1,args:[D.p]}]}]
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
if(x==y)H.kn(d||a)
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
Isolate.d7=a.d7
Isolate.d4=a.d4
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
if(typeof dartMainRunner==="function")dartMainRunner(S.fa,[])
else S.fa([])})})()
//# sourceMappingURL=test.dart.js.map
