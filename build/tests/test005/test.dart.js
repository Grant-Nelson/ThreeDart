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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isD)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.dk"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dk"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.dk(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dl=function(){}
var dart=[["","",,H,{"^":"",ln:{"^":"a;a"}}],["","",,J,{"^":"",
dr:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ck:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dq==null){H.kX()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.f(P.eU("Return interceptor for "+H.e(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cG()]
if(v!=null)return v
v=H.l1(a)
if(v!=null)return v
if(typeof a=="function")return C.V
y=Object.getPrototypeOf(a)
if(y==null)return C.D
if(y===Object.prototype)return C.D
if(typeof w=="function"){Object.defineProperty(w,$.$get$cG(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
D:{"^":"a;",
u:function(a,b){return a===b},
gU:function(a){return H.bk(a)},
i:["eu",function(a){return"Instance of '"+H.aV(a)+"'"}],
"%":"DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo|WebGLRenderbuffer"},
hA:{"^":"D;",
i:function(a){return String(a)},
gU:function(a){return a?519018:218159},
$isH:1},
e0:{"^":"D;",
u:function(a,b){return null==b},
i:function(a){return"null"},
gU:function(a){return 0},
$isG:1},
cH:{"^":"D;",
gU:function(a){return 0},
i:["ew",function(a){return String(a)}]},
ic:{"^":"cH;"},
cb:{"^":"cH;"},
bF:{"^":"cH;",
i:function(a){var z=a[$.$get$dM()]
if(z==null)return this.ew(a)
return"JavaScript function for "+H.e(J.a2(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbD:1},
aR:{"^":"D;$ti",
h:function(a,b){H.z(b,H.u(a,0))
if(!!a.fixed$length)H.p(P.a4("add"))
a.push(b)},
j3:function(a,b){var z
if(!!a.fixed$length)H.p(P.a4("removeAt"))
z=a.length
if(b>=z)throw H.f(P.bK(b,null,null))
return a.splice(b,1)[0]},
C:function(a,b){var z
if(!!a.fixed$length)H.p(P.a4("remove"))
for(z=0;z<a.length;++z)if(J.O(a[z],b)){a.splice(z,1)
return!0}return!1},
Y:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.u(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.f(P.aH(a))}},
k:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.R(z,y,H.e(a[y]))
return z.join(b)},
iG:function(a){return this.k(a,"")},
iA:function(a,b,c){var z,y,x
H.k(b,{func:1,ret:P.H,args:[H.u(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.f(P.aH(a))}throw H.f(H.c0())},
iz:function(a,b){return this.iA(a,b,null)},
a_:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
es:function(a,b,c){var z=a.length
if(b>z)throw H.f(P.a3(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.a3(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.u(a,0)])
return H.c(a.slice(b,c),[H.u(a,0)])},
giy:function(a){if(a.length>0)return a[0]
throw H.f(H.c0())},
gbq:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.f(H.c0())},
de:function(a,b){var z,y
H.k(b,{func:1,ret:P.H,args:[H.u(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.f(P.aH(a))}return!1},
M:function(a,b){var z
for(z=0;z<a.length;++z)if(J.O(a[z],b))return!0
return!1},
i:function(a){return P.cF(a,"[","]")},
gL:function(a){return new J.au(a,a.length,0,[H.u(a,0)])},
gU:function(a){return H.bk(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.p(P.a4("set length"))
if(b<0)throw H.f(P.a3(b,0,null,"newLength",null))
a.length=b},
R:function(a,b,c){H.z(c,H.u(a,0))
if(!!a.immutable$list)H.p(P.a4("indexed set"))
if(b>=a.length||b<0)throw H.f(H.by(a,b))
a[b]=c},
$ism:1,
$isb:1,
p:{
hz:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.ct(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.a3(a,0,4294967295,"length",null))
return J.dY(new Array(a),b)},
dY:function(a,b){return J.c1(H.c(a,[b]))},
c1:function(a){H.cn(a)
a.fixed$length=Array
return a}}},
lm:{"^":"aR;$ti"},
au:{"^":"a;a,b,c,0d,$ti",
scV:function(a){this.d=H.z(a,H.u(this,0))},
gE:function(){return this.d},
A:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.f(H.w(z))
x=this.c
if(x>=y){this.scV(null)
return!1}this.scV(z[x]);++this.c
return!0},
$isaJ:1},
c2:{"^":"D;",
jj:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.f(P.a4(""+a+".toInt()"))},
cf:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.f(P.a4(""+a+".floor()"))},
aa:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.a4(""+a+".round()"))},
e0:function(a,b){var z,y
if(b>20)throw H.f(P.a3(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gU:function(a){return a&0x1FFFFFFF},
ek:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
ez:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d7(a,b)},
X:function(a,b){return(a|0)===a?a/b|0:this.d7(a,b)},
d7:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.f(P.a4("Result of truncating division is "+H.e(z)+": "+H.e(a)+" ~/ "+b))},
b6:function(a,b){var z
if(a>0)z=this.hm(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
hm:function(a,b){return b>31?0:a>>>b},
bA:function(a,b){if(typeof b!=="number")throw H.f(H.aM(b))
return a<b},
$isv:1,
$isaj:1},
e_:{"^":"c2;",$isx:1},
dZ:{"^":"c2;"},
c3:{"^":"D;",
c5:function(a,b){if(b<0)throw H.f(H.by(a,b))
if(b>=a.length)H.p(H.by(a,b))
return a.charCodeAt(b)},
at:function(a,b){if(b>=a.length)throw H.f(H.by(a,b))
return a.charCodeAt(b)},
K:function(a,b){H.C(b)
if(typeof b!=="string")throw H.f(P.ct(b,null,null))
return a+b},
er:function(a,b,c){var z
if(c>a.length)throw H.f(P.a3(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
bC:function(a,b){return this.er(a,b,0)},
b0:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.bK(b,null,null))
if(b>c)throw H.f(P.bK(b,null,null))
if(c>a.length)throw H.f(P.bK(c,null,null))
return a.substring(b,c)},
b_:function(a,b){return this.b0(a,b,null)},
jm:function(a){return a.toLowerCase()},
V:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.H)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
iS:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.V(c,z)+a},
a3:function(a,b){return this.iS(a,b," ")},
ia:function(a,b,c){if(c>a.length)throw H.f(P.a3(c,0,a.length,null,null))
return H.fE(a,b,c)},
i:function(a){return a},
gU:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gn:function(a){return a.length},
$isee:1,
$isn:1}}],["","",,H,{"^":"",
c0:function(){return new P.cS("No element")},
hy:function(){return new P.cS("Too many elements")},
q:{"^":"jm;a",
gn:function(a){return this.a.length},
l:function(a,b){return C.i.c5(this.a,b)},
$aseV:function(){return[P.x]},
$asP:function(){return[P.x]},
$asm:function(){return[P.x]},
$asb:function(){return[P.x]}},
dT:{"^":"m;"},
c5:{"^":"dT;$ti",
gL:function(a){return new H.cJ(this,this.gn(this),0,[H.W(this,"c5",0)])},
ct:function(a,b){return this.ev(0,H.k(b,{func:1,ret:P.H,args:[H.W(this,"c5",0)]}))}},
cJ:{"^":"a;a,b,c,0d,$ti",
saL:function(a){this.d=H.z(a,H.u(this,0))},
gE:function(){return this.d},
A:function(){var z,y,x,w
z=this.a
y=J.cj(z)
x=y.gn(z)
if(this.b!==x)throw H.f(P.aH(z))
w=this.c
if(w>=x){this.saL(null)
return!1}this.saL(y.a_(z,w));++this.c
return!0},
$isaJ:1},
hQ:{"^":"m;a,b,$ti",
gL:function(a){return new H.hR(J.b8(this.a),this.b,this.$ti)},
gn:function(a){return J.aP(this.a)},
a_:function(a,b){return this.b.$1(J.cr(this.a,b))},
$asm:function(a,b){return[b]}},
hR:{"^":"aJ;0a,b,c,$ti",
saL:function(a){this.a=H.z(a,H.u(this,1))},
A:function(){var z=this.b
if(z.A()){this.saL(this.c.$1(z.gE()))
return!0}this.saL(null)
return!1},
gE:function(){return this.a},
$asaJ:function(a,b){return[b]}},
hS:{"^":"c5;a,b,$ti",
gn:function(a){return J.aP(this.a)},
a_:function(a,b){return this.b.$1(J.cr(this.a,b))},
$asc5:function(a,b){return[b]},
$asm:function(a,b){return[b]}},
da:{"^":"m;a,b,$ti",
gL:function(a){return new H.jE(J.b8(this.a),this.b,this.$ti)}},
jE:{"^":"aJ;a,b,$ti",
A:function(){var z,y
for(z=this.a,y=this.b;z.A();)if(y.$1(z.gE()))return!0
return!1},
gE:function(){return this.a.gE()}},
bZ:{"^":"a;$ti"},
eV:{"^":"a;$ti"},
jm:{"^":"c4+eV;"}}],["","",,H,{"^":"",
b7:function(a){var z,y
z=H.C(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
kQ:function(a){return init.types[H.a0(a)]},
l_:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.K(a).$isaf},
e:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a2(a)
if(typeof z!=="string")throw H.f(H.aM(a))
return z},
bk:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aV:function(a){return H.ie(a)+H.dh(H.aN(a),0,null)},
ie:function(a){var z,y,x,w,v,u,t,s,r
z=J.K(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.N||!!z.$iscb){u=C.B(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.b7(w.length>1&&C.i.at(w,0)===36?C.i.b_(w,1):w)},
ek:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
io:function(a){var z,y,x,w
z=H.c([],[P.x])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.w)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.f(H.aM(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.b6(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.f(H.aM(w))}return H.ek(z)},
el:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.f(H.aM(x))
if(x<0)throw H.f(H.aM(x))
if(x>65535)return H.io(a)}return H.ek(a)},
cO:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.b6(z,10))>>>0,56320|z&1023)}throw H.f(P.a3(a,0,1114111,null,null))},
aU:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
im:function(a){var z=H.aU(a).getFullYear()+0
return z},
ik:function(a){var z=H.aU(a).getMonth()+1
return z},
ig:function(a){var z=H.aU(a).getDate()+0
return z},
ih:function(a){var z=H.aU(a).getHours()+0
return z},
ij:function(a){var z=H.aU(a).getMinutes()+0
return z},
il:function(a){var z=H.aU(a).getSeconds()+0
return z},
ii:function(a){var z=H.aU(a).getMilliseconds()+0
return z},
b5:function(a){throw H.f(H.aM(a))},
h:function(a,b){if(a==null)J.aP(a)
throw H.f(H.by(a,b))},
by:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.at(!0,b,"index",null)
z=H.a0(J.aP(a))
if(!(b<0)){if(typeof z!=="number")return H.b5(z)
y=b>=z}else y=!0
if(y)return P.aQ(b,a,"index",null,z)
return P.bK(b,"index",null)},
kM:function(a,b,c){if(a>c)return new P.c7(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c7(a,c,!0,b,"end","Invalid value")
return new P.at(!0,b,"end",null)},
aM:function(a){return new P.at(!0,a,null,null)},
kH:function(a){if(typeof a!=="number")throw H.f(H.aM(a))
return a},
f:function(a){var z
if(a==null)a=new P.ed()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fF})
z.name=""}else z.toString=H.fF
return z},
fF:function(){return J.a2(this.dartException)},
p:function(a){throw H.f(a)},
w:function(a){throw H.f(P.aH(a))},
a5:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.ld(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.b6(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cI(H.e(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.ec(H.e(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eJ()
u=$.$get$eK()
t=$.$get$eL()
s=$.$get$eM()
r=$.$get$eQ()
q=$.$get$eR()
p=$.$get$eO()
$.$get$eN()
o=$.$get$eT()
n=$.$get$eS()
m=v.a2(y)
if(m!=null)return z.$1(H.cI(H.C(y),m))
else{m=u.a2(y)
if(m!=null){m.method="call"
return z.$1(H.cI(H.C(y),m))}else{m=t.a2(y)
if(m==null){m=s.a2(y)
if(m==null){m=r.a2(y)
if(m==null){m=q.a2(y)
if(m==null){m=p.a2(y)
if(m==null){m=s.a2(y)
if(m==null){m=o.a2(y)
if(m==null){m=n.a2(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.ec(H.C(y),m))}}return z.$1(new H.jl(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.ev()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.at(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.ev()
return a},
b4:function(a){var z
if(a==null)return new H.fg(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fg(a)},
kO:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.R(0,a[y],a[x])}return b},
kZ:function(a,b,c,d,e,f){H.i(a,"$isbD")
switch(H.a0(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.o("Unsupported number of arguments for wrapped closure"))},
b2:function(a,b){var z
H.a0(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kZ)
a.$identity=z
return z},
fY:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.K(d).$isb){z.$reflectionInfo=d
x=H.it(z).r}else x=d
w=e?Object.create(new H.iQ().constructor.prototype):Object.create(new H.cv(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.ak
if(typeof u!=="number")return u.K()
$.ak=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.dI(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.kQ,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.dC:H.cw
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.f("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.dI(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w["call*"]=q
w.$R=z.$R
w.$D=z.$D
return v},
fV:function(a,b,c,d){var z=H.cw
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dI:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fX(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fV(y,!w,z,b)
if(y===0){w=$.ak
if(typeof w!=="number")return w.K()
$.ak=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.ba
if(v==null){v=H.bS("self")
$.ba=v}return new Function(w+H.e(v)+";return "+u+"."+H.e(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ak
if(typeof w!=="number")return w.K()
$.ak=w+1
t+=w
w="return function("+t+"){return this."
v=$.ba
if(v==null){v=H.bS("self")
$.ba=v}return new Function(w+H.e(v)+"."+H.e(z)+"("+t+");}")()},
fW:function(a,b,c,d){var z,y
z=H.cw
y=H.dC
switch(b?-1:a){case 0:throw H.f(H.iC("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fX:function(a,b){var z,y,x,w,v,u,t,s
z=$.ba
if(z==null){z=H.bS("self")
$.ba=z}y=$.dB
if(y==null){y=H.bS("receiver")
$.dB=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fW(w,!u,x,b)
if(w===1){z="return function(){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+");"
y=$.ak
if(typeof y!=="number")return y.K()
$.ak=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.e(z)+"."+H.e(x)+"(this."+H.e(y)+", "+s+");"
y=$.ak
if(typeof y!=="number")return y.K()
$.ak=y+1
return new Function(z+y+"}")()},
dk:function(a,b,c,d,e,f,g){return H.fY(a,b,H.a0(c),d,!!e,!!f,g)},
C:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.ai(a,"String"))},
lQ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.ai(a,"double"))},
l5:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.ai(a,"num"))},
di:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.ai(a,"bool"))},
a0:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.ai(a,"int"))},
fC:function(a,b){throw H.f(H.ai(a,H.b7(H.C(b).substring(3))))},
l7:function(a,b){throw H.f(H.fT(a,H.b7(H.C(b).substring(3))))},
i:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.K(a)[b])return a
H.fC(a,b)},
d:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.K(a)[b]
else z=!0
if(z)return a
H.l7(a,b)},
cn:function(a){if(a==null)return a
if(!!J.K(a).$isb)return a
throw H.f(H.ai(a,"List<dynamic>"))},
l0:function(a,b){var z
if(a==null)return a
z=J.K(a)
if(!!z.$isb)return a
if(z[b])return a
H.fC(a,b)},
fw:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.a0(z)]
else return a.$S()}return},
bP:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fw(J.K(a))
if(z==null)return!1
return H.fn(z,null,b,null)},
k:function(a,b){var z,y
if(a==null)return a
if($.de)return a
$.de=!0
try{if(H.bP(a,b))return a
z=H.cp(b)
y=H.ai(a,z)
throw H.f(y)}finally{$.de=!1}},
dm:function(a,b){if(a!=null&&!H.dj(a,b))H.p(H.ai(a,H.cp(b)))
return a},
fr:function(a){var z,y
z=J.K(a)
if(!!z.$ist){y=H.fw(z)
if(y!=null)return H.cp(y)
return"Closure"}return H.aV(a)},
lc:function(a){throw H.f(new P.h0(H.C(a)))},
fx:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
aN:function(a){if(a==null)return
return a.$ti},
lR:function(a,b,c){return H.b6(a["$as"+H.e(c)],H.aN(b))},
cl:function(a,b,c,d){var z
H.C(c)
H.a0(d)
z=H.b6(a["$as"+H.e(c)],H.aN(b))
return z==null?null:z[d]},
W:function(a,b,c){var z
H.C(b)
H.a0(c)
z=H.b6(a["$as"+H.e(b)],H.aN(a))
return z==null?null:z[c]},
u:function(a,b){var z
H.a0(b)
z=H.aN(a)
return z==null?null:z[b]},
cp:function(a){return H.aL(a,null)},
aL:function(a,b){var z,y
H.j(b,"$isb",[P.n],"$asb")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.b7(a[0].builtin$cls)+H.dh(a,1,b)
if(typeof a=="function")return H.b7(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a0(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.h(b,y)
return H.e(b[y])}if('func' in a)return H.kx(a,b)
if('futureOr' in a)return"FutureOr<"+H.aL("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kx:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.n]
H.j(b,"$isb",z,"$asb")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.h(b,r)
t=C.i.K(t,b[r])
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
for(z=H.kN(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.C(z[l])
n=n+m+H.aL(i[h],b)+(" "+H.e(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dh:function(a,b,c){var z,y,x,w,v,u
H.j(c,"$isb",[P.n],"$asb")
if(a==null)return""
z=new P.bl("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aL(u,c)}return"<"+z.i(0)+">"},
b6:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bO:function(a,b,c,d){var z,y
H.C(b)
H.cn(c)
H.C(d)
if(a==null)return!1
z=H.aN(a)
y=J.K(a)
if(y[b]==null)return!1
return H.fu(H.b6(y[d],z),null,c,null)},
j:function(a,b,c,d){H.C(b)
H.cn(c)
H.C(d)
if(a==null)return a
if(H.bO(a,b,c,d))return a
throw H.f(H.ai(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.b7(b.substring(3))+H.dh(c,0,null),init.mangledGlobalNames)))},
fu:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ae(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ae(a[y],b,c[y],d))return!1
return!0},
lO:function(a,b,c){return a.apply(b,H.b6(J.K(b)["$as"+H.e(c)],H.aN(b)))},
fz:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="G"||a===-1||a===-2||H.fz(z)}return!1},
dj:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="a"||b.builtin$cls==="G"||b===-1||b===-2||H.fz(b)
if(b==null||b===-1||b.builtin$cls==="a"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dj(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bP(a,b)}z=J.K(a).constructor
y=H.aN(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.ae(z,null,b,null)},
z:function(a,b){if(a!=null&&!H.dj(a,b))throw H.f(H.ai(a,H.cp(b)))
return a},
ae:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ae(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="G")return!0
if('func' in c)return H.fn(a,b,c,d)
if('func' in a)return c.builtin$cls==="bD"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ae("type" in a?a.type:null,b,x,d)
else if(H.ae(a,b,x,d))return!0
else{if(!('$is'+"be" in y.prototype))return!1
w=y.prototype["$as"+"be"]
v=H.b6(w,z?a.slice(1):null)
return H.ae(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fu(H.b6(r,z),b,u,d)},
fn:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ae(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ae(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ae(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ae(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.l4(m,b,l,d)},
l4:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ae(c[w],d,a[w],b))return!1}return!0},
lP:function(a,b,c){Object.defineProperty(a,H.C(b),{value:c,enumerable:false,writable:true,configurable:true})},
l1:function(a){var z,y,x,w,v,u
z=H.C($.fy.$1(a))
y=$.ci[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cm[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.C($.ft.$2(a,z))
if(z!=null){y=$.ci[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cm[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.co(x)
$.ci[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cm[z]=x
return x}if(v==="-"){u=H.co(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fB(a,x)
if(v==="*")throw H.f(P.eU(z))
if(init.leafTags[z]===true){u=H.co(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fB(a,x)},
fB:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dr(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
co:function(a){return J.dr(a,!1,null,!!a.$isaf)},
l3:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.co(z)
else return J.dr(z,c,null,null)},
kX:function(){if(!0===$.dq)return
$.dq=!0
H.kY()},
kY:function(){var z,y,x,w,v,u,t,s
$.ci=Object.create(null)
$.cm=Object.create(null)
H.kT()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fD.$1(v)
if(u!=null){t=H.l3(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kT:function(){var z,y,x,w,v,u,t
z=C.S()
z=H.b1(C.P,H.b1(C.U,H.b1(C.A,H.b1(C.A,H.b1(C.T,H.b1(C.Q,H.b1(C.R(C.B),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fy=new H.kU(v)
$.ft=new H.kV(u)
$.fD=new H.kW(t)},
b1:function(a,b){return a(b)||b},
fE:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
du:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
is:{"^":"a;a,b,c,d,e,f,r,0x",p:{
it:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.c1(z)
y=z[0]
x=z[1]
return new H.is(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
j8:{"^":"a;a,b,c,d,e,f",
a2:function(a){var z,y,x
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
aq:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.n])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.j8(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
ca:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eP:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
i9:{"^":"T;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
ec:function(a,b){return new H.i9(a,b==null?null:b.method)}}},
hD:{"^":"T;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.e(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.e(this.a)+")"},
p:{
cI:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hD(a,y,z?null:b.receiver)}}},
jl:{"^":"T;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
ld:{"^":"t:16;a",
$1:function(a){if(!!J.K(a).$isT)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fg:{"^":"a;a,0b",
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
i:function(a){return"Closure '"+H.aV(this).trim()+"'"},
ge7:function(){return this},
$isbD:1,
ge7:function(){return this}},
ez:{"^":"t;"},
iQ:{"^":"ez;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.b7(z)+"'"}},
cv:{"^":"ez;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cv))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gU:function(a){var z,y
z=this.c
if(z==null)y=H.bk(this.a)
else y=typeof z!=="object"?J.bz(z):H.bk(z)
return(y^H.bk(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.aV(z)+"'")},
p:{
cw:function(a){return a.a},
dC:function(a){return a.c},
bS:function(a){var z,y,x,w,v
z=new H.cv("self","target","receiver","name")
y=J.c1(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
j9:{"^":"T;a",
i:function(a){return this.a},
p:{
ai:function(a,b){return new H.j9("TypeError: "+H.e(P.bX(a))+": type '"+H.fr(a)+"' is not a subtype of type '"+b+"'")}}},
fS:{"^":"T;a",
i:function(a){return this.a},
p:{
fT:function(a,b){return new H.fS("CastError: "+H.e(P.bX(a))+": type '"+H.fr(a)+"' is not a subtype of type '"+b+"'")}}},
iB:{"^":"T;a",
i:function(a){return"RuntimeError: "+H.e(this.a)},
p:{
iC:function(a){return new H.iB(a)}}},
aS:{"^":"e5;a,0b,0c,0d,0e,0f,r,$ti",
gn:function(a){return this.a},
gan:function(){return new H.e3(this,[H.u(this,0)])},
dj:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.cS(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.cS(y,a)}else return this.iE(a)},
iE:function(a){var z=this.d
if(z==null)return!1
return this.cg(this.bJ(z,J.bz(a)&0x3ffffff),a)>=0},
l:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.b3(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.b3(w,b)
x=y==null?null:y.b
return x}else return this.iF(b)},
iF:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bJ(z,J.bz(a)&0x3ffffff)
x=this.cg(y,a)
if(x<0)return
return y[x].b},
R:function(a,b,c){var z,y,x,w,v,u
H.z(b,H.u(this,0))
H.z(c,H.u(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bO()
this.b=z}this.cJ(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bO()
this.c=y}this.cJ(y,b,c)}else{x=this.d
if(x==null){x=this.bO()
this.d=x}w=J.bz(b)&0x3ffffff
v=this.bJ(x,w)
if(v==null)this.bW(x,w,[this.bF(b,c)])
else{u=this.cg(v,b)
if(u>=0)v[u].b=c
else v.push(this.bF(b,c))}}},
Y:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.f(P.aH(this))
z=z.c}},
cJ:function(a,b,c){var z
H.z(b,H.u(this,0))
H.z(c,H.u(this,1))
z=this.b3(a,b)
if(z==null)this.bW(a,b,this.bF(b,c))
else z.b=c},
eW:function(){this.r=this.r+1&67108863},
bF:function(a,b){var z,y
z=new H.hH(H.z(a,H.u(this,0)),H.z(b,H.u(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eW()
return z},
cg:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.O(a[y].a,b))return y
return-1},
i:function(a){return P.e6(this)},
b3:function(a,b){return a[b]},
bJ:function(a,b){return a[b]},
bW:function(a,b,c){a[b]=c},
fa:function(a,b){delete a[b]},
cS:function(a,b){return this.b3(a,b)!=null},
bO:function(){var z=Object.create(null)
this.bW(z,"<non-identifier-key>",z)
this.fa(z,"<non-identifier-key>")
return z},
$ise2:1},
hH:{"^":"a;a,b,0c,0d"},
e3:{"^":"dT;a,$ti",
gn:function(a){return this.a.a},
gL:function(a){var z,y
z=this.a
y=new H.hI(z,z.r,this.$ti)
y.c=z.e
return y}},
hI:{"^":"a;a,b,0c,0d,$ti",
scK:function(a){this.d=H.z(a,H.u(this,0))},
gE:function(){return this.d},
A:function(){var z=this.a
if(this.b!==z.r)throw H.f(P.aH(z))
else{z=this.c
if(z==null){this.scK(null)
return!1}else{this.scK(z.a)
this.c=this.c.c
return!0}}},
$isaJ:1},
kU:{"^":"t:16;a",
$1:function(a){return this.a(a)}},
kV:{"^":"t:38;a",
$2:function(a,b){return this.a(a,b)}},
kW:{"^":"t:37;a",
$1:function(a){return this.a(H.C(a))}},
hB:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isee:1,
p:{
hC:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.f(new P.hm("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
kN:function(a){return J.dY(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
l6:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bu:function(a){return a},
bt:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.by(b,a))},
kw:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.f(H.kM(a,b,c))
return b},
i4:{"^":"D;",$islA:1,"%":";ArrayBufferView;cN|fc|fd|i3|fe|ff|bi"},
cN:{"^":"i4;",
gn:function(a){return a.length},
$isaf:1,
$asaf:I.dl},
i3:{"^":"fd;",
l:function(a,b){H.bt(b,a,a.length)
return a[b]},
$asbZ:function(){return[P.v]},
$asP:function(){return[P.v]},
$ism:1,
$asm:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]},
"%":"Float32Array"},
bi:{"^":"ff;",
$asbZ:function(){return[P.x]},
$asP:function(){return[P.x]},
$ism:1,
$asm:function(){return[P.x]},
$isb:1,
$asb:function(){return[P.x]}},
lo:{"^":"bi;",
l:function(a,b){H.bt(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lp:{"^":"bi;",
l:function(a,b){H.bt(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lq:{"^":"bi;",
l:function(a,b){H.bt(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lr:{"^":"bi;",
gn:function(a){return a.length},
l:function(a,b){H.bt(b,a,a.length)
return a[b]},
$islB:1,
"%":"CanvasPixelArray|Uint8ClampedArray"},
ls:{"^":"bi;",
gn:function(a){return a.length},
l:function(a,b){H.bt(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
fc:{"^":"cN+P;"},
fd:{"^":"fc+bZ;"},
fe:{"^":"cN+P;"},
ff:{"^":"fe+bZ;"}}],["","",,P,{"^":"",
jG:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kE()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b2(new P.jI(z),1)).observe(y,{childList:true})
return new P.jH(z,y,x)}else if(self.setImmediate!=null)return P.kF()
return P.kG()},
lF:[function(a){self.scheduleImmediate(H.b2(new P.jJ(H.k(a,{func:1,ret:-1})),0))},"$1","kE",4,0,7],
lG:[function(a){self.setImmediate(H.b2(new P.jK(H.k(a,{func:1,ret:-1})),0))},"$1","kF",4,0,7],
lH:[function(a){P.cX(C.q,H.k(a,{func:1,ret:-1}))},"$1","kG",4,0,7],
cX:function(a,b){var z
H.k(b,{func:1,ret:-1})
z=C.h.X(a.a,1000)
return P.kk(z<0?0:z,b)},
eH:function(a,b){var z
H.k(b,{func:1,ret:-1,args:[P.aW]})
z=C.h.X(a.a,1000)
return P.kl(z<0?0:z,b)},
kA:function(a,b){if(H.bP(a,{func:1,args:[P.a,P.ay]}))return H.k(a,{func:1,ret:null,args:[P.a,P.ay]})
if(H.bP(a,{func:1,args:[P.a]}))return H.k(a,{func:1,ret:null,args:[P.a]})
throw H.f(P.ct(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kz:function(){var z,y
for(;z=$.b0,z!=null;){$.bw=null
y=z.b
$.b0=y
if(y==null)$.bv=null
z.a.$0()}},
lN:[function(){$.df=!0
try{P.kz()}finally{$.bw=null
$.df=!1
if($.b0!=null)$.$get$db().$1(P.fv())}},"$0","fv",0,0,2],
fq:function(a){var z=new P.f4(H.k(a,{func:1,ret:-1}))
if($.b0==null){$.bv=z
$.b0=z
if(!$.df)$.$get$db().$1(P.fv())}else{$.bv.b=z
$.bv=z}},
kD:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
z=$.b0
if(z==null){P.fq(a)
$.bw=$.bv
return}y=new P.f4(a)
x=$.bw
if(x==null){y.b=z
$.bw=y
$.b0=y}else{y.b=x.b
x.b=y
$.bw=y
if(y.b==null)$.bv=y}},
l8:function(a){var z,y
z={func:1,ret:-1}
H.k(a,z)
y=$.J
if(C.l===y){P.ch(null,null,C.l,a)
return}y.toString
P.ch(null,null,y,H.k(y.c1(a),z))},
eG:function(a,b){var z,y
z={func:1,ret:-1}
H.k(b,z)
y=$.J
if(y===C.l){y.toString
return P.cX(a,b)}return P.cX(a,H.k(y.c1(b),z))},
j5:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aW]}
H.k(b,z)
y=$.J
if(y===C.l){y.toString
return P.eH(a,b)}x=y.dg(b,P.aW)
$.J.toString
return P.eH(a,H.k(x,z))},
cg:function(a,b,c,d,e){var z={}
z.a=d
P.kD(new P.kB(z,e))},
fo:function(a,b,c,d,e){var z,y
H.k(d,{func:1,ret:e})
y=$.J
if(y===c)return d.$0()
$.J=c
z=y
try{y=d.$0()
return y}finally{$.J=z}},
fp:function(a,b,c,d,e,f,g){var z,y
H.k(d,{func:1,ret:f,args:[g]})
H.z(e,g)
y=$.J
if(y===c)return d.$1(e)
$.J=c
z=y
try{y=d.$1(e)
return y}finally{$.J=z}},
kC:function(a,b,c,d,e,f,g,h,i){var z,y
H.k(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
y=$.J
if(y===c)return d.$2(e,f)
$.J=c
z=y
try{y=d.$2(e,f)
return y}finally{$.J=z}},
ch:function(a,b,c,d){var z
H.k(d,{func:1,ret:-1})
z=C.l!==c
if(z)d=!(!z||!1)?c.c1(d):c.i0(d,-1)
P.fq(d)},
jI:{"^":"t:19;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jH:{"^":"t:34;a,b,c",
$1:function(a){var z,y
this.a.a=H.k(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jJ:{"^":"t:1;a",
$0:function(){this.a.$0()}},
jK:{"^":"t:1;a",
$0:function(){this.a.$0()}},
fi:{"^":"a;a,0b,c",
eU:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b2(new P.kn(this,b),0),a)
else throw H.f(P.a4("`setTimeout()` not found."))},
eV:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b2(new P.km(this,a,Date.now(),b),0),a)
else throw H.f(P.a4("Periodic timer."))},
$isaW:1,
p:{
kk:function(a,b){var z=new P.fi(!0,0)
z.eU(a,b)
return z},
kl:function(a,b){var z=new P.fi(!1,0)
z.eV(a,b)
return z}}},
kn:{"^":"t:2;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
km:{"^":"t:1;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.ez(w,x)}z.c=y
this.d.$1(z)}},
b_:{"^":"a;0a,b,c,d,e,$ti",
iL:function(a){if(this.c!==6)return!0
return this.b.b.cq(H.k(this.d,{func:1,ret:P.H,args:[P.a]}),a.a,P.H,P.a)},
iD:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.u(this,1)}
w=this.b.b
if(H.bP(z,{func:1,args:[P.a,P.ay]}))return H.dm(w.jb(z,a.a,a.b,null,y,P.ay),x)
else return H.dm(w.cq(H.k(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aF:{"^":"a;d6:a<,b,0h7:c<,$ti",
e_:function(a,b,c){var z,y,x,w
z=H.u(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.J
if(y!==C.l){y.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kA(b,y)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aF(0,$.J,[c])
w=b==null?1:3
this.cM(new P.b_(x,w,a,b,[z,c]))
return x},
ji:function(a,b){return this.e_(a,null,b)},
cM:function(a){var z,y
z=this.a
if(z<=1){a.a=H.i(this.c,"$isb_")
this.c=a}else{if(z===2){y=H.i(this.c,"$isaF")
z=y.a
if(z<4){y.cM(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.ch(null,null,z,H.k(new P.jS(this,a),{func:1,ret:-1}))}},
d3:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.i(this.c,"$isb_")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.i(this.c,"$isaF")
y=u.a
if(y<4){u.d3(a)
return}this.a=y
this.c=u.c}z.a=this.b5(a)
y=this.b
y.toString
P.ch(null,null,y,H.k(new P.jX(z,this),{func:1,ret:-1}))}},
bS:function(){var z=H.i(this.c,"$isb_")
this.c=null
return this.b5(z)},
b5:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cO:function(a){var z,y,x
z=H.u(this,0)
H.dm(a,{futureOr:1,type:z})
y=this.$ti
if(H.bO(a,"$isbe",y,"$asbe"))if(H.bO(a,"$isaF",y,null))P.f7(a,this)
else P.jT(a,this)
else{x=this.bS()
H.z(a,z)
this.a=4
this.c=a
P.br(this,x)}},
cP:function(a,b){var z
H.i(b,"$isay")
z=this.bS()
this.a=8
this.c=new P.a6(a,b)
P.br(this,z)},
$isbe:1,
p:{
jT:function(a,b){var z,y,x
b.a=1
try{a.e_(new P.jU(b),new P.jV(b),null)}catch(x){z=H.a5(x)
y=H.b4(x)
P.l8(new P.jW(b,z,y))}},
f7:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.i(a.c,"$isaF")
if(z>=4){y=b.bS()
b.a=a.a
b.c=a.c
P.br(b,y)}else{y=H.i(b.c,"$isb_")
b.a=2
b.c=a
a.d3(y)}},
br:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.i(y.c,"$isa6")
y=y.b
u=v.a
t=v.b
y.toString
P.cg(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
if(p){H.i(r,"$isa6")
y=y.b
u=r.a
t=r.b
y.toString
P.cg(null,null,y,u,t)
return}o=$.J
if(o==null?q!=null:o!==q)$.J=q
else o=null
y=b.c
if(y===8)new P.k_(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jZ(x,b,r).$0()}else if((y&2)!==0)new P.jY(z,x,b).$0()
if(o!=null)$.J=o
y=x.b
if(!!J.K(y).$isbe){if(y.a>=4){n=H.i(t.c,"$isb_")
t.c=null
b=t.b5(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.f7(y,t)
return}}m=b.b
n=H.i(m.c,"$isb_")
m.c=null
b=m.b5(n)
y=x.a
u=x.b
if(!y){H.z(u,H.u(m,0))
m.a=4
m.c=u}else{H.i(u,"$isa6")
m.a=8
m.c=u}z.a=m
y=m}}}},
jS:{"^":"t:1;a,b",
$0:function(){P.br(this.a,this.b)}},
jX:{"^":"t:1;a,b",
$0:function(){P.br(this.b,this.a.a)}},
jU:{"^":"t:19;a",
$1:function(a){var z=this.a
z.a=0
z.cO(a)}},
jV:{"^":"t:33;a",
$2:function(a,b){this.a.cP(a,H.i(b,"$isay"))},
$1:function(a){return this.$2(a,null)}},
jW:{"^":"t:1;a,b,c",
$0:function(){this.a.cP(this.b,this.c)}},
k_:{"^":"t:2;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dY(H.k(w.d,{func:1}),null)}catch(v){y=H.a5(v)
x=H.b4(v)
if(this.d){w=H.i(this.a.a.c,"$isa6").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.i(this.a.a.c,"$isa6")
else u.b=new P.a6(y,x)
u.a=!0
return}if(!!J.K(z).$isbe){if(z instanceof P.aF&&z.gd6()>=4){if(z.gd6()===8){w=this.b
w.b=H.i(z.gh7(),"$isa6")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ji(new P.k0(t),null)
w.a=!1}}},
k0:{"^":"t:32;a",
$1:function(a){return this.a}},
jZ:{"^":"t:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.u(x,0)
v=H.z(this.c,w)
u=H.u(x,1)
this.a.b=x.b.b.cq(H.k(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a5(t)
y=H.b4(t)
x=this.a
x.b=new P.a6(z,y)
x.a=!0}}},
jY:{"^":"t:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.i(this.a.a.c,"$isa6")
w=this.c
if(w.iL(z)&&w.e!=null){v=this.b
v.b=w.iD(z)
v.a=!1}}catch(u){y=H.a5(u)
x=H.b4(u)
w=H.i(this.a.a.c,"$isa6")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a6(y,x)
s.a=!0}}},
f4:{"^":"a;a,0b"},
iR:{"^":"a;$ti",
gn:function(a){var z,y,x,w
z={}
y=new P.aF(0,$.J,[P.x])
z.a=0
x=H.u(this,0)
w=H.k(new P.iT(z,this),{func:1,ret:-1,args:[x]})
H.k(new P.iU(z,y),{func:1,ret:-1})
W.R(this.a,this.b,w,!1,x)
return y}},
iT:{"^":"t;a,b",
$1:function(a){H.z(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.u(this.b,0)]}}},
iU:{"^":"t:1;a,b",
$0:function(){this.b.cO(this.a.a)}},
cT:{"^":"a;$ti"},
iS:{"^":"a;"},
aW:{"^":"a;"},
a6:{"^":"a;a,b",
i:function(a){return H.e(this.a)},
$isT:1},
ks:{"^":"a;",$islE:1},
kB:{"^":"t:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.ed()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.f(z)
x=H.f(z)
x.stack=y.i(0)
throw x}},
k9:{"^":"ks;",
jc:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
try{if(C.l===$.J){a.$0()
return}P.fo(null,null,this,a,-1)}catch(x){z=H.a5(x)
y=H.b4(x)
P.cg(null,null,this,z,H.i(y,"$isay"))}},
jd:function(a,b,c){var z,y,x
H.k(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.l===$.J){a.$1(b)
return}P.fp(null,null,this,a,b,-1,c)}catch(x){z=H.a5(x)
y=H.b4(x)
P.cg(null,null,this,z,H.i(y,"$isay"))}},
i0:function(a,b){return new P.kb(this,H.k(a,{func:1,ret:b}),b)},
c1:function(a){return new P.ka(this,H.k(a,{func:1,ret:-1}))},
dg:function(a,b){return new P.kc(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
dY:function(a,b){H.k(a,{func:1,ret:b})
if($.J===C.l)return a.$0()
return P.fo(null,null,this,a,b)},
cq:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.J===C.l)return a.$1(b)
return P.fp(null,null,this,a,b,c,d)},
jb:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.J===C.l)return a.$2(b,c)
return P.kC(null,null,this,a,b,c,d,e,f)}},
kb:{"^":"t;a,b,c",
$0:function(){return this.a.dY(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
ka:{"^":"t:2;a,b",
$0:function(){return this.a.jc(this.b)}},
kc:{"^":"t;a,b,c",
$1:function(a){var z=this.c
return this.a.jd(this.b,H.z(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hK:function(a,b,c){H.cn(a)
return H.j(H.kO(a,new H.aS(0,0,[b,c])),"$ise2",[b,c],"$ase2")},
hJ:function(a,b){return new H.aS(0,0,[a,b])},
bG:function(a,b,c,d){return new P.k4(0,0,[d])},
hx:function(a,b,c){var z,y
if(P.dg(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bx()
C.a.h(y,a)
try{P.ky(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.ex(b,H.l0(z,"$ism"),", ")+c
return y.charCodeAt(0)==0?y:y},
cF:function(a,b,c){var z,y,x
if(P.dg(a))return b+"..."+c
z=new P.bl(b)
y=$.$get$bx()
C.a.h(y,a)
try{x=z
x.a=P.ex(x.gau(),a,", ")}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.a=y.gau()+c
y=z.gau()
return y.charCodeAt(0)==0?y:y},
dg:function(a){var z,y
for(z=0;y=$.$get$bx(),z<y.length;++z)if(a===y[z])return!0
return!1},
ky:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gL(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.A())return
w=H.e(z.gE())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.A()){if(x<=5)return
if(0>=b.length)return H.h(b,-1)
v=b.pop()
if(0>=b.length)return H.h(b,-1)
u=b.pop()}else{t=z.gE();++x
if(!z.A()){if(x<=4){C.a.h(b,H.e(t))
return}v=H.e(t)
if(0>=b.length)return H.h(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gE();++x
for(;z.A();t=s,s=r){r=z.gE();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.e(t)
v=H.e(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
e4:function(a,b){var z,y,x
z=P.bG(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.w)(a),++x)z.h(0,H.z(a[x],b))
return z},
e6:function(a){var z,y,x
z={}
if(P.dg(a))return"{...}"
y=new P.bl("")
try{C.a.h($.$get$bx(),a)
x=y
x.a=x.gau()+"{"
z.a=!0
a.Y(0,new P.hP(z,y))
z=y
z.a=z.gau()+"}"}finally{z=$.$get$bx()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.gau()
return z.charCodeAt(0)==0?z:z},
k4:{"^":"k1;a,0b,0c,0d,0e,0f,r,$ti",
gL:function(a){var z=new P.fb(this,this.r,this.$ti)
z.c=this.e
return z},
gn:function(a){return this.a},
M:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.i(z[b],"$isce")!=null}else{y=this.f6(b)
return y}},
f6:function(a){var z=this.d
if(z==null)return!1
return this.bI(this.cX(z,a),a)>=0},
h:function(a,b){var z,y
H.z(b,H.u(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dd()
this.b=z}return this.cL(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dd()
this.c=y}return this.cL(y,b)}else return this.eX(b)},
eX:function(a){var z,y,x
H.z(a,H.u(this,0))
z=this.d
if(z==null){z=P.dd()
this.d=z}y=this.cQ(a)
x=z[y]
if(x==null)z[y]=[this.bP(a)]
else{if(this.bI(x,a)>=0)return!1
x.push(this.bP(a))}return!0},
C:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.h0(this.c,b)
else return this.fY(b)},
fY:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.cX(z,a)
x=this.bI(y,a)
if(x<0)return!1
this.d8(y.splice(x,1)[0])
return!0},
cL:function(a,b){H.z(b,H.u(this,0))
if(H.i(a[b],"$isce")!=null)return!1
a[b]=this.bP(b)
return!0},
h0:function(a,b){var z
if(a==null)return!1
z=H.i(a[b],"$isce")
if(z==null)return!1
this.d8(z)
delete a[b]
return!0},
cZ:function(){this.r=this.r+1&67108863},
bP:function(a){var z,y
z=new P.ce(H.z(a,H.u(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cZ()
return z},
d8:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cZ()},
cQ:function(a){return J.bz(a)&0x3ffffff},
cX:function(a,b){return a[this.cQ(b)]},
bI:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.O(a[y].a,b))return y
return-1},
p:{
dd:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
ce:{"^":"a;a,0b,0c"},
fb:{"^":"a;a,b,0c,0d,$ti",
scN:function(a){this.d=H.z(a,H.u(this,0))},
gE:function(){return this.d},
A:function(){var z=this.a
if(this.b!==z.r)throw H.f(P.aH(z))
else{z=this.c
if(z==null){this.scN(null)
return!1}else{this.scN(H.z(z.a,H.u(this,0)))
this.c=this.c.b
return!0}}},
$isaJ:1,
p:{
k5:function(a,b,c){var z=new P.fb(a,b,[c])
z.c=a.e
return z}}},
k1:{"^":"iD;"},
c4:{"^":"k6;",$ism:1,$isb:1},
P:{"^":"a;$ti",
gL:function(a){return new H.cJ(a,this.gn(a),0,[H.cl(this,a,"P",0)])},
a_:function(a,b){return this.l(a,b)},
jl:function(a,b){var z,y
z=H.c([],[H.cl(this,a,"P",0)])
C.a.sn(z,this.gn(a))
for(y=0;y<this.gn(a);++y)C.a.R(z,y,this.l(a,y))
return z},
jk:function(a){return this.jl(a,!0)},
i:function(a){return P.cF(a,"[","]")}},
e5:{"^":"c6;"},
hP:{"^":"t:12;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.e(a)
z.a=y+": "
z.a+=H.e(b)}},
c6:{"^":"a;$ti",
Y:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.W(this,"c6",0),H.W(this,"c6",1)]})
for(z=J.b8(this.gan());z.A();){y=z.gE()
b.$2(y,this.l(0,y))}},
gn:function(a){return J.aP(this.gan())},
i:function(a){return P.e6(this)},
$isa8:1},
iF:{"^":"a;$ti",
ae:function(a,b){var z
for(z=J.b8(H.j(b,"$ism",this.$ti,"$asm"));z.A();)this.h(0,z.gE())},
i:function(a){return P.cF(this,"{","}")},
a_:function(a,b){var z,y,x
if(b<0)H.p(P.a3(b,0,null,"index",null))
for(z=P.k5(this,this.r,H.u(this,0)),y=0;z.A();){x=z.d
if(b===y)return x;++y}throw H.f(P.aQ(b,this,"index",null,y))},
$ism:1,
$iser:1},
iD:{"^":"iF;"},
k6:{"^":"a+P;"}}],["","",,P,{"^":"",cA:{"^":"a;$ti"},bV:{"^":"iS;$ti"},hd:{"^":"cA;",
$ascA:function(){return[P.n,[P.b,P.x]]}},hv:{"^":"a;a,b,c,d,e",
i:function(a){return this.a}},hu:{"^":"bV;a",
f7:function(a,b,c){var z,y,x,w,v,u
for(z=this.a,y=z.e,x=z.d,z=z.c,w=b,v=null;w<c;++w){if(w>=a.length)return H.h(a,w)
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
default:u=null}if(u!=null){if(v==null)v=new P.bl("")
if(w>b)v.a+=C.i.b0(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.fM(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asbV:function(){return[P.n,P.n]}},jp:{"^":"hd;a"},jq:{"^":"bV;",
ic:function(a,b,c){var z,y,x,w
z=a.length
P.em(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.kq(0,0,x)
if(w.fi(a,b,z)!==z)w.d9(C.i.c5(a,z-1),0)
return new Uint8Array(x.subarray(0,H.kw(0,w.b,x.length)))},
ib:function(a){return this.ic(a,0,null)},
$asbV:function(){return[P.n,[P.b,P.x]]}},kq:{"^":"a;a,b,c",
d9:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.h(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.h(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.h(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.h(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.h(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.h(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.h(z,y)
z[y]=128|a&63
return!1}},
fi:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.i.c5(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.at(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.d9(w,C.i.at(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.h(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.h(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.h(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.h(z,v)
z[v]=128|w&63}}return x}}}],["","",,P,{"^":"",
hf:function(a){if(a instanceof H.t)return a.i(0)
return"Instance of '"+H.aV(a)+"'"},
hL:function(a,b,c,d){var z,y
H.z(b,d)
z=J.hz(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.R(z,y,b)
return H.j(z,"$isb",[d],"$asb")},
hM:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gL(a);x.A();)C.a.h(y,H.z(x.gE(),c))
if(b)return y
return H.j(J.c1(y),"$isb",z,"$asb")},
cU:function(a,b,c){var z,y
z=P.x
H.j(a,"$ism",[z],"$asm")
if(a.constructor===Array){H.j(a,"$isaR",[z],"$asaR")
y=a.length
c=P.em(b,c,y,null,null,null)
return H.el(b>0||c<y?C.a.es(a,b,c):a)}return P.iV(a,b,c)},
iV:function(a,b,c){var z,y,x
H.j(a,"$ism",[P.x],"$asm")
z=J.b8(a)
for(y=0;y<b;++y)if(!z.A())throw H.f(P.a3(b,0,y,null,null))
x=[]
for(;z.A();)x.push(z.gE())
return H.el(x)},
iu:function(a,b,c){return new H.hB(a,H.hC(a,!1,!0,!1))},
fl:function(a,b,c,d){var z,y,x,w,v,u
H.j(a,"$isb",[P.x],"$asb")
if(c===C.x){z=$.$get$fk().b
z=z.test(b)}else z=!1
if(z)return b
y=C.I.ib(H.z(b,H.W(c,"cA",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.h(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cO(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
bX:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a2(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hf(a)},
o:function(a){return new P.f6(a)},
dt:function(a){H.l6(a)},
H:{"^":"a;"},
"+bool":0,
bA:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.bA))return!1
return this.a===b.a&&!0},
gU:function(a){var z=this.a
return(z^C.h.b6(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.h2(H.im(this))
y=P.bB(H.ik(this))
x=P.bB(H.ig(this))
w=P.bB(H.ih(this))
v=P.bB(H.ij(this))
u=P.bB(H.il(this))
t=P.h3(H.ii(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
p:{
h2:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
h3:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bB:function(a){if(a>=10)return""+a
return"0"+a}}},
v:{"^":"aj;"},
"+double":0,
bb:{"^":"a;a",
bA:function(a,b){return C.h.bA(this.a,H.i(b,"$isbb").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.bb))return!1
return this.a===b.a},
gU:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.h9()
y=this.a
if(y<0)return"-"+new P.bb(0-y).i(0)
x=z.$1(C.h.X(y,6e7)%60)
w=z.$1(C.h.X(y,1e6)%60)
v=new P.h8().$1(y%1e6)
return""+C.h.X(y,36e8)+":"+H.e(x)+":"+H.e(w)+"."+H.e(v)},
p:{
dS:function(a,b,c,d,e,f){return new P.bb(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
h8:{"^":"t:13;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
h9:{"^":"t:13;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
T:{"^":"a;"},
ed:{"^":"T;",
i:function(a){return"Throw of null."}},
at:{"^":"T;a,b,c,d",
gbH:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbG:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.e(z)
w=this.gbH()+y+x
if(!this.a)return w
v=this.gbG()
u=P.bX(this.b)
return w+v+": "+H.e(u)},
p:{
fP:function(a){return new P.at(!1,null,null,a)},
ct:function(a,b,c){return new P.at(!0,a,b,c)}}},
c7:{"^":"at;e,f,a,b,c,d",
gbH:function(){return"RangeError"},
gbG:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.e(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.e(z)
else if(x>z)y=": Not in range "+H.e(z)+".."+H.e(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.e(z)}return y},
p:{
bK:function(a,b,c){return new P.c7(null,null,!0,a,b,"Value not in range")},
a3:function(a,b,c,d,e){return new P.c7(b,c,!0,a,d,"Invalid value")},
em:function(a,b,c,d,e,f){if(0>a||a>c)throw H.f(P.a3(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.f(P.a3(b,a,c,"end",f))
return b}return c}}},
hw:{"^":"at;e,n:f>,a,b,c,d",
gbH:function(){return"RangeError"},
gbG:function(){if(J.fG(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.e(z)},
p:{
aQ:function(a,b,c,d,e){var z=H.a0(e!=null?e:J.aP(b))
return new P.hw(b,z,!0,a,c,"Index out of range")}}},
jn:{"^":"T;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
a4:function(a){return new P.jn(a)}}},
jk:{"^":"T;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
eU:function(a){return new P.jk(a)}}},
cS:{"^":"T;a",
i:function(a){return"Bad state: "+this.a},
p:{
ew:function(a){return new P.cS(a)}}},
fZ:{"^":"T;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.bX(z))+"."},
p:{
aH:function(a){return new P.fZ(a)}}},
ia:{"^":"a;",
i:function(a){return"Out of Memory"},
$isT:1},
ev:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isT:1},
h0:{"^":"T;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
f6:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
hm:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.i.b0(x,0,75)+"..."
return y+"\n"+x}},
bD:{"^":"a;"},
x:{"^":"aj;"},
"+int":0,
m:{"^":"a;$ti",
ct:["ev",function(a,b){var z=H.W(this,"m",0)
return new H.da(this,H.k(b,{func:1,ret:P.H,args:[z]}),[z])}],
gn:function(a){var z,y
z=this.gL(this)
for(y=0;z.A();)++y
return y},
gap:function(a){var z,y
z=this.gL(this)
if(!z.A())throw H.f(H.c0())
y=z.gE()
if(z.A())throw H.f(H.hy())
return y},
a_:function(a,b){var z,y,x
if(b<0)H.p(P.a3(b,0,null,"index",null))
for(z=this.gL(this),y=0;z.A();){x=z.gE()
if(b===y)return x;++y}throw H.f(P.aQ(b,this,"index",null,y))},
i:function(a){return P.hx(this,"(",")")}},
aJ:{"^":"a;$ti"},
b:{"^":"a;$ti",$ism:1},
"+List":0,
G:{"^":"a;",
gU:function(a){return P.a.prototype.gU.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
aj:{"^":"a;"},
"+num":0,
a:{"^":";",
u:function(a,b){return this===b},
gU:function(a){return H.bk(this)},
i:function(a){return"Instance of '"+H.aV(this)+"'"},
toString:function(){return this.i(this)}},
ay:{"^":"a;"},
n:{"^":"a;",$isee:1},
"+String":0,
bl:{"^":"a;au:a<",
gn:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
ex:function(a,b,c){var z=J.b8(b)
if(!z.A())return a
if(c.length===0){do a+=H.e(z.gE())
while(z.A())}else{a+=H.e(z.gE())
for(;z.A();)a=a+c+H.e(z.gE())}return a}}}}],["","",,W,{"^":"",
dy:function(a){var z=document.createElement("a")
return z},
cy:function(a,b){var z=document.createElement("canvas")
return z},
ha:function(a,b,c){var z,y
z=document.body
y=(z&&C.n).a7(z,a,b,c)
y.toString
z=W.y
z=new H.da(new W.ad(y),H.k(new W.hb(),{func:1,ret:P.H,args:[z]}),[z])
return H.i(z.gap(z),"$isL")},
hc:function(a){H.i(a,"$isbY")
return"wheel"},
bc:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fL(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a5(x)}return z},
cd:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fa:function(a,b,c,d){var z,y
z=W.cd(W.cd(W.cd(W.cd(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fs:function(a,b){var z
H.k(a,{func:1,ret:-1,args:[b]})
z=$.J
if(z===C.l)return a
return z.dg(a,b)},
V:{"^":"L;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
fO:{"^":"V;",
i:function(a){return String(a)},
$isfO:1,
"%":"HTMLAnchorElement"},
le:{"^":"V;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
dA:{"^":"V;",$isdA:1,"%":"HTMLBaseElement"},
bR:{"^":"V;",$isbR:1,"%":"HTMLBodyElement"},
cx:{"^":"V;",
by:function(a,b,c){if(c!=null)return this.fj(a,b,P.kI(c,null))
return this.fk(a,b)},
ed:function(a,b){return this.by(a,b,null)},
fj:function(a,b,c){return a.getContext(b,c)},
fk:function(a,b){return a.getContext(b)},
$iscx:1,
$isdH:1,
"%":"HTMLCanvasElement"},
cz:{"^":"D;",
fl:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
iu:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$iscz:1,
"%":"CanvasRenderingContext2D"},
lh:{"^":"y;0n:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
lj:{"^":"jN;0n:length=",
eg:function(a,b){var z=this.fm(a,this.f2(a,b))
return z==null?"":z},
f2:function(a,b){var z,y
z=$.$get$dL()
y=z[b]
if(typeof y==="string")return y
y=this.hp(a,b)
z[b]=y
return y},
hp:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.h4()+b
if(z in a)return z
return b},
fm:function(a,b){return a.getPropertyValue(b)},
gbp:function(a){return a.height},
gbr:function(a){return a.left},
gcr:function(a){return a.top},
gbx:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
h_:{"^":"a;",
gbr:function(a){return this.eg(a,"left")}},
aI:{"^":"V;",$isaI:1,"%":"HTMLDivElement"},
h5:{"^":"y;",
hX:function(a,b){return a.adoptNode(b)},
ee:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
lk:{"^":"D;",
i:function(a){return String(a)},
"%":"DOMException"},
h6:{"^":"D;",
ii:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
h7:{"^":"D;",
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
u:function(a,b){var z
if(b==null)return!1
if(!H.bO(b,"$isbL",[P.aj],"$asbL"))return!1
z=J.a1(b)
return a.left===z.gbr(b)&&a.top===z.gcr(b)&&a.width===z.gbx(b)&&a.height===z.gbp(b)},
gU:function(a){return W.fa(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gbp:function(a){return a.height},
gbr:function(a){return a.left},
gcr:function(a){return a.top},
gbx:function(a){return a.width},
$isbL:1,
$asbL:function(){return[P.aj]},
"%":";DOMRectReadOnly"},
jM:{"^":"c4;cW:a<,b",
gn:function(a){return this.b.length},
l:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.h(z,b)
return H.i(z[b],"$isL")},
h:function(a,b){J.dw(this.a,b)
return b},
gL:function(a){var z=this.jk(this)
return new J.au(z,z.length,0,[H.u(z,0)])},
$asP:function(){return[W.L]},
$asm:function(){return[W.L]},
$asb:function(){return[W.L]}},
L:{"^":"y;0je:tagName=",
gi_:function(a){return new W.jO(a)},
gdi:function(a){return new W.jM(a,a.children)},
i:function(a){return a.localName},
a7:["bD",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dV
if(z==null){z=H.c([],[W.ao])
y=new W.eb(z)
C.a.h(z,W.f8(null))
C.a.h(z,W.fh())
$.dV=y
d=y}else d=z
z=$.dU
if(z==null){z=new W.fm(d)
$.dU=z
c=z}else{z.a=d
c=z}}if($.av==null){z=document
y=z.implementation
y=(y&&C.J).ii(y,"")
$.av=y
$.cC=y.createRange()
y=$.av
y.toString
y=y.createElement("base")
H.i(y,"$isdA")
y.href=z.baseURI
z=$.av.head;(z&&C.L).w(z,y)}z=$.av
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.i(y,"$isbR")}z=$.av
if(!!this.$isbR)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.av.body;(z&&C.n).w(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.M(C.X,a.tagName)){z=$.cC;(z&&C.E).em(z,x)
z=$.cC
w=(z&&C.E).ig(z,b)}else{x.innerHTML=b
w=$.av.createDocumentFragment()
for(z=J.a1(w);y=x.firstChild,y!=null;)z.w(w,y)}z=$.av.body
if(x==null?z!=null:x!==z)J.dx(x)
c.cA(w)
C.z.hX(document,w)
return w},function(a,b,c){return this.a7(a,b,c,null)},"ih",null,null,"gjT",5,5,null],
eo:function(a,b,c,d){a.textContent=null
this.w(a,this.a7(a,b,c,d))},
en:function(a,b){return this.eo(a,b,null,null)},
aI:function(a,b){return a.getAttribute(b)},
fZ:function(a,b){return a.removeAttribute(b)},
$isL:1,
"%":";Element"},
hb:{"^":"t:14;",
$1:function(a){return!!J.K(H.i(a,"$isy")).$isL}},
Y:{"^":"D;",$isY:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
bY:{"^":"D;",
eY:function(a,b,c,d){return a.addEventListener(b,H.b2(H.k(c,{func:1,args:[W.Y]}),1),!1)},
$isbY:1,
"%":";EventTarget"},
ll:{"^":"V;0n:length=","%":"HTMLFormElement"},
hr:{"^":"V;","%":"HTMLHeadElement"},
hs:{"^":"k3;",
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.aQ(b,a,null,null,null))
return a[b]},
a_:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isaf:1,
$asaf:function(){return[W.y]},
$asP:function(){return[W.y]},
$ism:1,
$asm:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]},
$ishs:1,
$asam:function(){return[W.y]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
ht:{"^":"h5;","%":"HTMLDocument"},
c_:{"^":"D;0dk:data=",$isc_:1,"%":"ImageData"},
dX:{"^":"V;",$isdX:1,$isdH:1,"%":"HTMLImageElement"},
bf:{"^":"d_;",$isbf:1,"%":"KeyboardEvent"},
hN:{"^":"D;",
i:function(a){return String(a)},
$ishN:1,
"%":"Location"},
i1:{"^":"V;","%":"HTMLAudioElement;HTMLMediaElement"},
ag:{"^":"d_;",$isag:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ad:{"^":"c4;a",
gap:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.f(P.ew("No elements"))
if(y>1)throw H.f(P.ew("More than one element"))
return z.firstChild},
ae:function(a,b){var z,y,x,w,v
H.j(b,"$ism",[W.y],"$asm")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.a1(y),v=0;v<x;++v)w.w(y,z.firstChild)
return},
gL:function(a){var z=this.a.childNodes
return new W.dW(z,z.length,-1,[H.cl(C.Z,z,"am",0)])},
gn:function(a){return this.a.childNodes.length},
l:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.h(z,b)
return z[b]},
$asP:function(){return[W.y]},
$asm:function(){return[W.y]},
$asb:function(){return[W.y]}},
y:{"^":"bY;0j0:previousSibling=",
j2:function(a){var z=a.parentNode
if(z!=null)J.bQ(z,a)},
i:function(a){var z=a.nodeValue
return z==null?this.eu(a):z},
w:function(a,b){return a.appendChild(b)},
h_:function(a,b){return a.removeChild(b)},
$isy:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
i5:{"^":"k8;",
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.aQ(b,a,null,null,null))
return a[b]},
a_:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isaf:1,
$asaf:function(){return[W.y]},
$asP:function(){return[W.y]},
$ism:1,
$asm:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]},
$asam:function(){return[W.y]},
"%":"NodeList|RadioNodeList"},
iq:{"^":"D;",
ig:function(a,b){return a.createContextualFragment(b)},
em:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
lv:{"^":"V;0n:length=","%":"HTMLSelectElement"},
iW:{"^":"V;","%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
iX:{"^":"V;",
a7:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.bD(a,b,c,d)
z=W.ha("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.ad(y).ae(0,new W.ad(z))
return y},
"%":"HTMLTableElement"},
iY:{"^":"V;",
a7:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.bD(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.o.a7(z.createElement("table"),b,c,d)
z.toString
z=new W.ad(z)
x=z.gap(z)
x.toString
z=new W.ad(x)
w=z.gap(z)
y.toString
w.toString
new W.ad(y).ae(0,new W.ad(w))
return y},
"%":"HTMLTableRowElement"},
lx:{"^":"V;",
a7:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.bD(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.o.a7(z.createElement("table"),b,c,d)
z.toString
z=new W.ad(z)
x=z.gap(z)
y.toString
x.toString
new W.ad(y).ae(0,new W.ad(x))
return y},
"%":"HTMLTableSectionElement"},
eA:{"^":"V;",$iseA:1,"%":"HTMLTemplateElement"},
bm:{"^":"D;",$isbm:1,"%":"Touch"},
aX:{"^":"d_;",$isaX:1,"%":"TouchEvent"},
lz:{"^":"kp;",
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.aQ(b,a,null,null,null))
return a[b]},
a_:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isaf:1,
$asaf:function(){return[W.bm]},
$asP:function(){return[W.bm]},
$ism:1,
$asm:function(){return[W.bm]},
$isb:1,
$asb:function(){return[W.bm]},
$asam:function(){return[W.bm]},
"%":"TouchList"},
d_:{"^":"Y;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
lD:{"^":"i1;",$isdH:1,"%":"HTMLVideoElement"},
bq:{"^":"ag;",
gip:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.a4("deltaY is not supported"))},
gio:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.a4("deltaX is not supported"))},
$isbq:1,
"%":"WheelEvent"},
jF:{"^":"bY;",
h3:function(a,b){return a.requestAnimationFrame(H.b2(H.k(b,{func:1,ret:-1,args:[P.aj]}),1))},
fc:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
f5:{"^":"y;",$isf5:1,"%":"Attr"},
lI:{"^":"h7;",
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
u:function(a,b){var z
if(b==null)return!1
if(!H.bO(b,"$isbL",[P.aj],"$asbL"))return!1
z=J.a1(b)
return a.left===z.gbr(b)&&a.top===z.gcr(b)&&a.width===z.gbx(b)&&a.height===z.gbp(b)},
gU:function(a){return W.fa(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gbp:function(a){return a.height},
gbx:function(a){return a.width},
"%":"ClientRect|DOMRect"},
lM:{"^":"ku;",
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.aQ(b,a,null,null,null))
return a[b]},
a_:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isaf:1,
$asaf:function(){return[W.y]},
$asP:function(){return[W.y]},
$ism:1,
$asm:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]},
$asam:function(){return[W.y]},
"%":"MozNamedAttrMap|NamedNodeMap"},
jL:{"^":"e5;cW:a<",
Y:function(a,b){var z,y,x,w,v,u
H.k(b,{func:1,ret:-1,args:[P.n,P.n]})
for(z=this.gan(),y=z.length,x=this.a,w=J.a1(x),v=0;v<z.length;z.length===y||(0,H.w)(z),++v){u=z[v]
b.$2(u,w.aI(x,u))}},
gan:function(){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.n])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.h(z,w)
v=H.i(z[w],"$isf5")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asc6:function(){return[P.n,P.n]},
$asa8:function(){return[P.n,P.n]}},
jO:{"^":"jL;a",
l:function(a,b){return J.cs(this.a,H.C(b))},
gn:function(a){return this.gan().length}},
jP:{"^":"iR;a,b,c,$ti"},
lJ:{"^":"jP;a,b,c,$ti"},
jQ:{"^":"cT;a,b,c,d,e,$ti",p:{
R:function(a,b,c,d,e){var z,y
z=W.fs(new W.jR(c),W.Y)
y=z!=null
if(y&&!0){H.k(z,{func:1,args:[W.Y]})
if(y)J.fI(a,b,z,!1)}return new W.jQ(0,a,b,z,!1,[e])}}},
jR:{"^":"t:30;a",
$1:function(a){return this.a.$1(H.i(a,"$isY"))}},
bN:{"^":"a;a",
eI:function(a){var z,y
z=$.$get$dc()
if(z.a===0){for(y=0;y<262;++y)z.R(0,C.W[y],W.kR())
for(y=0;y<12;++y)z.R(0,C.u[y],W.kS())}},
az:function(a){return $.$get$f9().M(0,W.bc(a))},
al:function(a,b,c){var z,y,x
z=W.bc(a)
y=$.$get$dc()
x=y.l(0,H.e(z)+"::"+b)
if(x==null)x=y.l(0,"*::"+b)
if(x==null)return!1
return H.di(x.$4(a,b,c,this))},
$isao:1,
p:{
f8:function(a){var z,y
z=W.dy(null)
y=window.location
z=new W.bN(new W.kd(z,y))
z.eI(a)
return z},
lK:[function(a,b,c,d){H.i(a,"$isL")
H.C(b)
H.C(c)
H.i(d,"$isbN")
return!0},"$4","kR",16,0,10],
lL:[function(a,b,c,d){var z,y,x
H.i(a,"$isL")
H.C(b)
H.C(c)
z=H.i(d,"$isbN").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","kS",16,0,10]}},
am:{"^":"a;$ti",
gL:function(a){return new W.dW(a,this.gn(a),-1,[H.cl(this,a,"am",0)])}},
eb:{"^":"a;a",
az:function(a){return C.a.de(this.a,new W.i7(a))},
al:function(a,b,c){return C.a.de(this.a,new W.i6(a,b,c))},
$isao:1},
i7:{"^":"t:21;a",
$1:function(a){return H.i(a,"$isao").az(this.a)}},
i6:{"^":"t:21;a,b,c",
$1:function(a){return H.i(a,"$isao").al(this.a,this.b,this.c)}},
ke:{"^":"a;",
eS:function(a,b,c,d){var z,y,x
this.a.ae(0,c)
z=b.ct(0,new W.kf())
y=b.ct(0,new W.kg())
this.b.ae(0,z)
x=this.c
x.ae(0,C.Y)
x.ae(0,y)},
az:function(a){return this.a.M(0,W.bc(a))},
al:["ey",function(a,b,c){var z,y
z=W.bc(a)
y=this.c
if(y.M(0,H.e(z)+"::"+b))return this.d.hY(c)
else if(y.M(0,"*::"+b))return this.d.hY(c)
else{y=this.b
if(y.M(0,H.e(z)+"::"+b))return!0
else if(y.M(0,"*::"+b))return!0
else if(y.M(0,H.e(z)+"::*"))return!0
else if(y.M(0,"*::*"))return!0}return!1}],
$isao:1},
kf:{"^":"t:17;",
$1:function(a){return!C.a.M(C.u,H.C(a))}},
kg:{"^":"t:17;",
$1:function(a){return C.a.M(C.u,H.C(a))}},
ki:{"^":"ke;e,a,b,c,d",
al:function(a,b,c){if(this.ey(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cs(a,"template")==="")return this.e.M(0,b)
return!1},
p:{
fh:function(){var z,y,x,w,v
z=P.n
y=P.e4(C.t,z)
x=H.u(C.t,0)
w=H.k(new W.kj(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.ki(y,P.bG(null,null,null,z),P.bG(null,null,null,z),P.bG(null,null,null,z),null)
y.eS(null,new H.hS(C.t,w,[x,z]),v,null)
return y}}},
kj:{"^":"t:29;",
$1:function(a){return"TEMPLATE::"+H.e(H.C(a))}},
kh:{"^":"a;",
az:function(a){var z=J.K(a)
if(!!z.$iseq)return!1
z=!!z.$iscV
if(z&&W.bc(a)==="foreignObject")return!1
if(z)return!0
return!1},
al:function(a,b,c){if(b==="is"||C.i.bC(b,"on"))return!1
return this.az(a)},
$isao:1},
dW:{"^":"a;a,b,c,0d,$ti",
scY:function(a){this.d=H.z(a,H.u(this,0))},
A:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.scY(J.fH(this.a,z))
this.c=z
return!0}this.scY(null)
this.c=y
return!1},
gE:function(){return this.d},
$isaJ:1},
ao:{"^":"a;"},
kd:{"^":"a;a,b",$islC:1},
fm:{"^":"a;a",
cA:function(a){new W.kr(this).$2(a,null)},
aO:function(a,b){if(b==null)J.dx(a)
else J.bQ(b,a)},
h9:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fJ(a)
x=J.cs(y.gcW(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a5(t)}v="element unprintable"
try{v=J.a2(a)}catch(t){H.a5(t)}try{u=W.bc(a)
this.h8(H.i(a,"$isL"),b,z,v,u,H.i(y,"$isa8"),H.C(x))}catch(t){if(H.a5(t) instanceof P.at)throw t
else{this.aO(a,b)
window
s="Removing corrupted element "+H.e(v)
if(typeof console!="undefined")window.console.warn(s)}}},
h8:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.aO(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.az(a)){this.aO(a,b)
window
z="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.al(a,"is",g)){this.aO(a,b)
window
z="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gan()
y=H.c(z.slice(0),[H.u(z,0)])
for(x=f.gan().length-1,z=f.a,w=J.a1(z);x>=0;--x){if(x>=y.length)return H.h(y,x)
v=y[x]
if(!this.a.al(a,J.fN(v),w.aI(z,v))){window
u="Removing disallowed attribute <"+H.e(e)+" "+v+'="'+H.e(w.aI(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.aI(z,v)
w.fZ(z,v)}}if(!!J.K(a).$iseA)this.cA(a.content)},
$islt:1},
kr:{"^":"t:27;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.h9(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.aO(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fK(z)}catch(w){H.a5(w)
v=H.i(z,"$isy")
if(x){u=v.parentNode
if(u!=null)J.bQ(u,v)}else J.bQ(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.i(y,"$isy")}}},
jN:{"^":"D+h_;"},
k2:{"^":"D+P;"},
k3:{"^":"k2+am;"},
k7:{"^":"D+P;"},
k8:{"^":"k7+am;"},
ko:{"^":"D+P;"},
kp:{"^":"ko+am;"},
kt:{"^":"D+P;"},
ku:{"^":"kt+am;"}}],["","",,P,{"^":"",
kL:function(a){var z,y
z=J.K(a)
if(!!z.$isc_){y=z.gdk(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fj(a.data,a.height,a.width)},
kK:function(a){if(a instanceof P.fj)return{data:a.a,height:a.b,width:a.c}
return a},
kI:function(a,b){var z={}
a.Y(0,new P.kJ(z))
return z},
dR:function(){var z=$.dQ
if(z==null){z=J.cq(window.navigator.userAgent,"Opera",0)
$.dQ=z}return z},
h4:function(){var z,y
z=$.dN
if(z!=null)return z
y=$.dO
if(y==null){y=J.cq(window.navigator.userAgent,"Firefox",0)
$.dO=y}if(y)z="-moz-"
else{y=$.dP
if(y==null){y=!P.dR()&&J.cq(window.navigator.userAgent,"Trident/",0)
$.dP=y}if(y)z="-ms-"
else z=P.dR()?"-o-":"-webkit-"}$.dN=z
return z},
fj:{"^":"a;dk:a>,b,c",$isc_:1},
kJ:{"^":"t:12;a",
$2:function(a,b){this.a[a]=b}},
hj:{"^":"c4;a,b",
gbK:function(){var z,y,x
z=this.b
y=H.W(z,"P",0)
x=W.L
return new H.hQ(new H.da(z,H.k(new P.hk(),{func:1,ret:P.H,args:[y]}),[y]),H.k(new P.hl(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){J.dw(this.b.a,b)},
gn:function(a){return J.aP(this.gbK().a)},
l:function(a,b){var z=this.gbK()
return z.b.$1(J.cr(z.a,b))},
gL:function(a){var z=P.hM(this.gbK(),!1,W.L)
return new J.au(z,z.length,0,[H.u(z,0)])},
$asP:function(){return[W.L]},
$asm:function(){return[W.L]},
$asb:function(){return[W.L]}},
hk:{"^":"t:14;",
$1:function(a){return!!J.K(H.i(a,"$isy")).$isL}},
hl:{"^":"t:24;",
$1:function(a){return H.d(H.i(a,"$isy"),"$isL")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",eq:{"^":"cV;",$iseq:1,"%":"SVGScriptElement"},cV:{"^":"L;",
gdi:function(a){return new P.hj(a,new W.ad(a))},
a7:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.ao])
C.a.h(z,W.f8(null))
C.a.h(z,W.fh())
C.a.h(z,new W.kh())
c=new W.fm(new W.eb(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.n).ih(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.ad(w)
u=z.gap(z)
for(z=J.a1(v);x=u.firstChild,x!=null;)z.w(v,x)
return v},
$iscV:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"}}],["","",,P,{"^":""}],["","",,P,{"^":"",fR:{"^":"D;",$isfR:1,"%":"WebGLBuffer"},hn:{"^":"D;",$ishn:1,"%":"WebGLFramebuffer"},ip:{"^":"D;",$isip:1,"%":"WebGLProgram"},cP:{"^":"D;",
da:function(a,b){return a.activeTexture(b)},
df:function(a,b,c){return a.attachShader(b,c)},
af:function(a,b,c){return a.bindBuffer(b,c)},
i1:function(a,b,c){return a.bindFramebuffer(b,c)},
aA:function(a,b,c){return a.bindTexture(b,c)},
i2:function(a,b,c){return a.blendFunc(b,c)},
dh:function(a,b,c,d){return a.bufferData(b,c,d)},
i5:function(a,b){return a.clear(b)},
i6:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
i7:function(a,b){return a.clearDepth(b)},
i9:function(a,b){return a.compileShader(b)},
ij:function(a,b){return a.createShader(b)},
il:function(a,b){return a.deleteProgram(b)},
im:function(a,b){return a.deleteShader(b)},
iq:function(a,b){return a.depthFunc(b)},
ir:function(a,b){return a.disable(b)},
dl:function(a,b){return a.disableVertexAttribArray(b)},
it:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c8:function(a,b){return a.enable(b)},
dm:function(a,b){return a.enableVertexAttribArray(b)},
e8:function(a,b){return a.generateMipmap(b)},
e9:function(a,b,c){return a.getActiveAttrib(b,c)},
ea:function(a,b,c){return a.getActiveUniform(b,c)},
eb:function(a,b,c){return a.getAttribLocation(b,c)},
cz:function(a,b){return a.getParameter(b)},
ef:function(a,b){return a.getProgramInfoLog(b)},
bz:function(a,b,c){return a.getProgramParameter(b,c)},
eh:function(a,b){return a.getShaderInfoLog(b)},
ei:function(a,b,c){return a.getShaderParameter(b,c)},
ej:function(a,b,c){return a.getUniformLocation(b,c)},
iI:function(a,b){return a.linkProgram(b)},
j_:function(a,b,c){return a.pixelStorei(b,c)},
eq:function(a,b,c){return a.shaderSource(b,c)},
jg:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.K(g)
if(!!z.$isc_)y=!0
else y=!1
if(y){this.hr(a,b,c,d,e,f,P.kK(g))
return}if(!!z.$isdX)z=!0
else z=!1
if(z){this.hs(a,b,c,d,e,f,g)
return}throw H.f(P.fP("Incorrect number or type of arguments"))},
jf:function(a,b,c,d,e,f,g){return this.jg(a,b,c,d,e,f,g,null,null,null)},
hr:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
hs:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bu:function(a,b,c,d){return a.texParameteri(b,c,d)},
H:function(a,b,c){return a.uniform1f(b,c)},
J:function(a,b,c){return a.uniform1i(b,c)},
q:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
e2:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
e3:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
e4:function(a,b){return a.useProgram(b)},
jp:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
jq:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$iscP:1,
"%":"WebGLRenderingContext"},iG:{"^":"D;",$isiG:1,"%":"WebGLShader"},iZ:{"^":"D;",$isiZ:1,"%":"WebGLTexture"},ji:{"^":"D;",$isji:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",S:{"^":"a;0a,0b,0c,0d,$ti",
sfs:function(a){this.a=H.j(a,"$isb",[H.W(this,"S",0)],"$asb")},
sd1:function(a){this.b=H.k(a,{func:1,ret:P.H,args:[[P.m,H.W(this,"S",0)]]})},
sd_:function(a){this.c=H.k(a,{func:1,ret:-1,args:[P.x,[P.m,H.W(this,"S",0)]]})},
sd2:function(a){this.d=H.k(a,{func:1,ret:-1,args:[P.x,[P.m,H.W(this,"S",0)]]})},
cG:function(a){this.sfs(H.c([],[a]))
this.sd1(null)
this.sd_(null)
this.sd2(null)},
cB:function(a,b,c){var z=H.W(this,"S",0)
H.k(b,{func:1,ret:P.H,args:[[P.m,z]]})
z={func:1,ret:-1,args:[P.x,[P.m,z]]}
H.k(a,z)
H.k(c,z)
this.sd1(b)
this.sd_(a)
this.sd2(c)},
bB:function(a,b){return this.cB(a,null,b)},
fQ:function(a){var z
H.j(a,"$ism",[H.W(this,"S",0)],"$asm")
z=this.b
if(z!=null)return z.$1(a)
return!0},
fu:function(a,b){var z
H.j(b,"$ism",[H.W(this,"S",0)],"$asm")
z=this.c
if(z!=null)z.$2(a,b)},
gn:function(a){return this.a.length},
gL:function(a){var z=this.a
return new J.au(z,z.length,0,[H.u(z,0)])},
a_:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.h(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.W(this,"S",0)
H.z(b,z)
z=[z]
if(this.fQ(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.fu(x,H.c([b],z))}},
$ism:1,
p:{
cB:function(a){var z=new O.S([a])
z.cG(a)
return z}}},cL:{"^":"a;0a,0b",
sbM:function(a){this.a=H.j(a,"$isb",[V.a9],"$asb")},
gn:function(a){return this.a.length},
gB:function(){var z=this.b
if(z==null){z=D.a7()
this.b=z}return z},
eF:function(a){var z=this.b
if(!(z==null))z.P(a)},
aq:function(){return this.eF(null)},
gS:function(){var z=this.a
if(z.length>0)return C.a.gbq(z)
else return V.cM()},
dV:function(a){var z=this.a
if(a==null)C.a.h(z,V.cM())
else C.a.h(z,a)
this.aq()},
cn:function(){var z=this.a
if(z.length>0){z.pop()
this.aq()}}}}],["","",,E,{"^":"",cu:{"^":"a;"},al:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a5:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sf5:function(a,b){this.y=H.j(b,"$isS",[E.al],"$asS")},
sa5:function(a){this.z=H.i(a,"$isbd")},
scC:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gB().C(0,this.gdR())
y=this.c
if(y!=null)y.gB().h(0,this.gdR())
x=new D.M("shape",z,this.c,this,[F.es])
x.b=!0
this.a9(x)}},
saT:function(a){var z,y
if(!J.O(this.r,a)){z=this.r
if(z!=null)z.gB().C(0,this.gdQ())
if(a!=null)a.gB().h(0,this.gdQ())
this.r=a
y=new D.M("mover",z,a,this,[U.bH])
y.b=!0
this.a9(y)}},
bw:function(a){var z,y,x,w,v,u,t,s
z=this.r
if(z!=null){y=z.r
x=a.e
if(y<x){z.r=x
y=z.y
if(!(y==null))++y.d
z.se5(z.a+z.d*a.y)
z.sdT(z.b+z.e*a.y)
z.sdX(z.c+z.f*a.y)
y=z.c
w=Math.cos(y)
v=Math.sin(y)
y=V.aw(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)
x=z.b
w=Math.cos(x)
v=Math.sin(x)
y=y.V(0,V.aw(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))
x=z.a
w=Math.cos(x)
v=Math.sin(x)
z.x=y.V(0,V.aw(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1))
y=z.y
if(!(y==null))y.ah()}u=z.x}else u=null
if(!J.O(u,this.x)){t=this.x
this.x=u
s=new D.M("matrix",t,u,this,[V.a9])
s.b=!0
this.a9(s)}for(z=this.y.a,z=new J.au(z,z.length,0,[H.u(z,0)]);z.A();)z.d.bw(a)},
aH:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gS())
else C.a.h(z.a,y.V(0,z.gS()))
z.aq()
a.dW(this.f)
z=a.dy
x=(z&&C.a).gbq(z)
if(x!=null&&this.d!=null)x.j6(a,this)
for(z=this.y.a,z=new J.au(z,z.length,0,[H.u(z,0)]);z.A();)z.d.aH(a)
a.dU()
a.dx.cn()},
a9:function(a){var z=this.z
if(!(z==null))z.P(a)},
W:function(){return this.a9(null)},
iR:[function(a){H.i(a,"$isA")
this.e=null
this.a9(a)},function(){return this.iR(null)},"k0","$1","$0","gdR",0,2,0],
iQ:[function(a){this.a9(H.i(a,"$isA"))},function(){return this.iQ(null)},"k_","$1","$0","gdQ",0,2,0],
iO:[function(a){this.a9(H.i(a,"$isA"))},function(){return this.iO(null)},"jY","$1","$0","gdP",0,2,0],
jX:[function(a,b){var z,y,x,w,v,u,t
H.j(b,"$ism",[E.al],"$asm")
for(z=b.length,y=this.gdP(),x={func:1,ret:-1,args:[D.A]},w=[x],v=0;v<b.length;b.length===z||(0,H.w)(b),++v){u=b[v]
if(u!=null){if(u.ga5()==null){t=new D.bd()
t.sad(null)
t.saM(null)
t.c=null
t.d=0
u.sa5(t)}t=u.ga5()
t.toString
H.k(y,x)
if(t.a==null)t.sad(H.c([],w))
t=t.a;(t&&C.a).h(t,y)}}this.W()},"$2","giN",8,0,4],
jZ:[function(a,b){var z,y
H.j(b,"$ism",[E.al],"$asm")
for(z=b.gL(b),y=this.gdP();z.A();)z.gE().gB().C(0,y)
this.W()},"$2","giP",8,0,4],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isax:1},iw:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
shq:function(a){this.dy=H.j(a,"$isb",[O.c8],"$asb")},
shl:function(a){this.fr=H.j(a,"$isa8",[P.n,A.cQ],"$asa8")},
eB:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.bA(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cL()
y=[V.a9]
z.sbM(H.c([],y))
z.b=null
z.gB().h(0,new E.iy(this))
this.cy=z
z=new O.cL()
z.sbM(H.c([],y))
z.b=null
z.gB().h(0,new E.iz(this))
this.db=z
z=new O.cL()
z.sbM(H.c([],y))
z.b=null
z.gB().h(0,new E.iA(this))
this.dx=z
this.shq(H.c([],[O.c8]))
z=this.dy;(z&&C.a).h(z,null)
this.shl(new H.aS(0,0,[P.n,A.cQ]))},
gj1:function(){var z=this.z
if(z==null){z=this.cy.gS().V(0,this.db.gS())
this.z=z}return z},
dW:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gbq(z):a;(z&&C.a).h(z,y)},
dU:function(){var z=this.dy
if(z.length>1)z.pop()},
p:{
ix:function(a,b){var z=new E.iw(a,b)
z.eB(a,b)
return z}}},iy:{"^":"t:6;a",
$1:function(a){var z
H.i(a,"$isA")
z=this.a
z.z=null
z.ch=null}},iz:{"^":"t:6;a",
$1:function(a){var z
H.i(a,"$isA")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},iA:{"^":"t:6;a",
$1:function(a){var z
H.i(a,"$isA")
z=this.a
z.ch=null
z.cx=null}},j2:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0a5:x<,0y,0z,0Q,0ch,0cx,0cy",
sa5:function(a){this.x=H.i(a,"$isbd")},
eH:[function(a){H.i(a,"$isA")
this.j8()},function(){return this.eH(null)},"eG","$1","$0","gcH",0,2,0],
giC:function(){var z,y,x
z=Date.now()
y=C.h.X(P.dS(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.bA(z,!1)
return x/y},
d4:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.V()
if(typeof z!=="number")return H.b5(z)
x=C.k.cf(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.V()
w=C.k.cf(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.eG(C.q,this.gj7())}},
j8:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.k(new E.j4(this),{func:1,ret:-1,args:[P.aj]})
C.G.fc(z)
C.G.h3(z,W.fs(y,P.aj))}},"$0","gj7",0,0,2],
j5:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.d4()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.bA(w,!1)
x.y=P.dS(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sn(w.a,0)
w.aq()
w=x.db
C.a.sn(w.a,0)
w.aq()
w=x.dx
C.a.sn(w.a,0)
w.aq()
w=x.dy;(w&&C.a).sn(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aH(this.e)}x=this.z
if(!(x==null))x.P(null)}catch(v){z=H.a5(v)
y=H.b4(v)
P.dt("Error: "+H.e(z))
P.dt("Stack: "+H.e(y))
throw H.f(z)}},
p:{
j3:function(a,b,c,d,e){var z,y,x,w
z=J.K(a)
if(!!z.$iscx)return E.eF(a,!0,!0,!0,!1)
y=W.cy(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gdi(a).h(0,y)
w=E.eF(y,!0,!0,!0,!1)
w.a=a
return w},
eF:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.j2()
y=P.hK(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.n,null)
x=C.p.by(a,"webgl",y)
x=H.i(x==null?C.p.by(a,"experimental-webgl",y):x,"$iscP")
if(x==null)H.p(P.o("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.ix(x,a)
w=new T.j0(x)
w.b=H.a0((x&&C.b).cz(x,3379))
w.c=H.a0(C.b.cz(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.jo(a)
v=new X.hE()
v.c=new X.bh(!1,!1,!1)
v.sfX(P.bG(null,null,null,P.x))
w.b=v
v=new X.i2(w)
v.f=0
v.r=V.bJ()
v.x=V.bJ()
v.Q=1
v.ch=1
w.c=v
v=new X.hO(w)
v.r=0
v.x=V.bJ()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.j7(w)
v.e=0
v.f=V.bJ()
v.r=V.bJ()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.sfd(H.c([],[[P.cT,P.a]]))
v=w.z
u=document
t=W.ag
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.R(u,"contextmenu",H.k(w.gfD(),s),!1,t))
v=w.z
r=W.Y
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.R(a,"focus",H.k(w.gfG(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.R(a,"blur",H.k(w.gfA(),q),!1,r))
v=w.z
p=W.bf
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.R(u,"keyup",H.k(w.gfI(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.R(u,"keydown",H.k(w.gfH(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.R(a,"mousedown",H.k(w.gfL(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.R(a,"mouseup",H.k(w.gfN(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.R(a,"mousemove",H.k(w.gfM(),s),!1,t))
p=w.z
o=W.bq;(p&&C.a).h(p,W.R(a,H.C(W.hc(a)),H.k(w.gfO(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.R(u,"mousemove",H.k(w.gfE(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.R(u,"mouseup",H.k(w.gfF(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.R(u,"pointerlockchange",H.k(w.gfP(),q),!1,r))
r=w.z
q=W.aX
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.R(a,"touchstart",H.k(w.gfV(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.R(a,"touchend",H.k(w.gfT(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.R(a,"touchmove",H.k(w.gfU(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.bA(Date.now(),!1)
z.cy=0
z.d4()
return z}}},j4:{"^":"t:39;a",
$1:function(a){var z
H.l5(a)
z=this.a
if(z.ch){z.ch=!1
z.j5()}}}}],["","",,Z,{"^":"",f3:{"^":"a;a,b",$islf:1,p:{
d9:function(a,b,c){var z
H.j(c,"$isb",[P.x],"$asb")
z=a.createBuffer()
C.b.af(a,b,z)
C.b.dh(a,b,new Int16Array(H.bu(c)),35044)
C.b.af(a,b,null)
return new Z.f3(b,z)}}},dD:{"^":"cu;a,b,c,d,e",
c0:function(a){var z,y,x
try{y=a.a
C.b.dm(y,this.e)
C.b.jp(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.a5(x)
y=P.o('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.e(z))
throw H.f(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.e(this.e)+"]"}},jD:{"^":"a;a",$islg:1},dE:{"^":"a;a,0b,c,d",
sfn:function(a){this.b=H.j(a,"$isb",[Z.bE],"$asb")},
aF:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
c0:function(a){var z,y
z=this.a
C.b.af(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].c0(a)},
jn:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.b.dl(x,z[y].e)
C.b.af(x,this.a.a,null)},
aH:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.h(w,x)
v=w[x]
w=v.c
u=w.a
C.b.af(y,u,w.b)
C.b.it(y,v.a,v.b,5123,0)
C.b.af(y,u,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.n]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.w)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a2(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(y,", ")+"\nAttrs:   "+C.a.k(u,", ")},
$isly:1},bE:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aV(this.c)+"'")+"]"}},aY:{"^":"a;a",
gcD:function(a){var z,y
z=this.a
y=(z&$.$get$aC().a)!==0?3:0
if((z&$.$get$aB().a)!==0)y+=3
if((z&$.$get$aA().a)!==0)y+=3
if((z&$.$get$aD().a)!==0)y+=2
if((z&$.$get$aE().a)!==0)y+=3
if((z&$.$get$bo().a)!==0)y+=3
if((z&$.$get$bp().a)!==0)y+=4
if((z&$.$get$aZ().a)!==0)++y
return(z&$.$get$az().a)!==0?y+4:y},
hZ:function(a){var z,y,x
z=$.$get$aC()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aB()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aA()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aD()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aE()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bo()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bp()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aZ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$az()
if((y&z.a)!==0)if(x===a)return z
return $.$get$f2()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aY))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.n])
y=this.a
if((y&$.$get$aC().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aB().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aA().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aD().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aE().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bo().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bp().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aZ().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$az().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.k(z,"|")},
p:{
ac:function(a){return new Z.aY(a)}}}}],["","",,D,{"^":"",fU:{"^":"a;"},bd:{"^":"a;0a,0b,0c,0d",
sad:function(a){this.a=H.j(a,"$isb",[{func:1,ret:-1,args:[D.A]}],"$asb")},
saM:function(a){this.b=H.j(a,"$isb",[{func:1,ret:-1,args:[D.A]}],"$asb")},
h:function(a,b){var z={func:1,ret:-1,args:[D.A]}
H.k(b,z)
if(this.a==null)this.sad(H.c([],[z]))
z=this.a;(z&&C.a).h(z,b)},
C:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[D.A]})
z=this.a
z=z==null?null:C.a.M(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).C(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.M(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).C(z,b)||y}return y},
P:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w){w=this.b
w=w==null?null:w.length===0
if(w==null)w=!0}else w=!1
if(w)return!1
if(a==null){a=new D.A(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.Y(y,new D.hg(z))
y=this.b
if(!(y==null))C.a.Y(y,new D.hh(z))
z=this.b
if(!(z==null))C.a.sn(z,0)
return!0},
iv:function(){return this.P(null)},
j9:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.P(y)}}},
ah:function(){return this.j9(!0,!1)},
p:{
a7:function(){var z=new D.bd()
z.sad(null)
z.saM(null)
z.c=null
z.d=0
return z}}},hg:{"^":"t:22;a",
$1:function(a){var z
H.k(a,{func:1,ret:-1,args:[D.A]})
z=this.a.a
z.b
a.$1(z)}},hh:{"^":"t:22;a",
$1:function(a){var z
H.k(a,{func:1,ret:-1,args:[D.A]})
z=this.a.a
z.b
a.$1(z)}},A:{"^":"a;a,0b"},cD:{"^":"A;c,d,a,0b,$ti"},cE:{"^":"A;c,d,a,0b,$ti"},M:{"^":"A;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}}],["","",,X,{"^":"",dF:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dF))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}},e1:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.e1))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}},hE:{"^":"a;0a,0b,0c,0d",
sfX:function(a){this.d=H.j(a,"$iser",[P.x],"$aser")},
iX:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
iT:function(a){this.c=a.b
this.d.C(0,a.a)
return!1}},hO:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
cm:function(a,b){this.r=a.a
return!1},
aV:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.el()
if(typeof z!=="number")return z.e6()
this.r=(z&~y)>>>0
return!1},
aU:function(a,b){return!1},
iY:function(a){return!1},
fK:function(a,b,c){return}},bh:{"^":"a;a,b,c",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.bh))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},i2:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
cm:function(a,b){this.f=a.a
return!1},
aV:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.el()
if(typeof z!=="number")return z.e6()
this.f=(z&~y)>>>0
return!1},
aU:function(a,b){return!1},
iZ:function(a,b){return!1}},j7:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
iW:function(a){H.j(a,"$isb",[V.ap],"$asb")
return!1},
iU:function(a){H.j(a,"$isb",[V.ap],"$asb")
return!1},
iV:function(a){H.j(a,"$isb",[V.ap],"$asb")
return!1}},jo:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
sfd:function(a){this.z=H.j(a,"$isb",[[P.cT,P.a]],"$asb")},
cT:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.e1(z,new X.bh(y,a.altKey,a.shiftKey))},
ay:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.bh(y,a.altKey,a.shiftKey)},
bX:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.bh(y,a.altKey,a.shiftKey)},
ak:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.a0()
v=z.top
if(typeof x!=="number")return x.a0()
return new V.ap(y-w,x-v)},
aN:function(a){return new V.bM(a.movementX,a.movementY)},
bR:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.ap])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.w)(x),++v){u=x[v]
t=C.k.aa(u.pageX)
C.k.aa(u.pageY)
s=z.left
C.k.aa(u.pageX)
C.a.h(y,new V.ap(t-s,C.k.aa(u.pageY)-z.top))}return y},
ai:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dF(z,new X.bh(y,a.altKey,a.shiftKey))},
bN:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.a0()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.a0()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
jD:[function(a){this.f=!0},"$1","gfG",4,0,9],
jx:[function(a){this.f=!1},"$1","gfA",4,0,9],
jA:[function(a){H.i(a,"$isag")
if(this.f&&this.bN(a))a.preventDefault()},"$1","gfD",4,0,3],
jF:[function(a){var z
H.i(a,"$isbf")
if(!this.f)return
z=this.cT(a)
this.b.iX(z)},"$1","gfI",4,0,23],
jE:[function(a){var z
H.i(a,"$isbf")
if(!this.f)return
z=this.cT(a)
this.b.iT(z)},"$1","gfH",4,0,23],
jH:[function(a){var z,y,x,w
H.i(a,"$isag")
z=this.a
z.focus()
this.f=!0
this.ay(a)
if(this.x){y=this.ai(a)
x=this.aN(a)
if(this.d.cm(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ai(a)
w=this.ak(a)
if(this.c.cm(y,w))a.preventDefault()},"$1","gfL",4,0,3],
jJ:[function(a){var z,y,x
H.i(a,"$isag")
this.ay(a)
z=this.ai(a)
if(this.x){y=this.aN(a)
if(this.d.aV(z,y))a.preventDefault()
return}if(this.r)return
x=this.ak(a)
if(this.c.aV(z,x))a.preventDefault()},"$1","gfN",4,0,3],
jC:[function(a){var z,y,x
H.i(a,"$isag")
if(!this.bN(a)){this.ay(a)
z=this.ai(a)
if(this.x){y=this.aN(a)
if(this.d.aV(z,y))a.preventDefault()
return}if(this.r)return
x=this.ak(a)
if(this.c.aV(z,x))a.preventDefault()}},"$1","gfF",4,0,3],
jI:[function(a){var z,y,x
H.i(a,"$isag")
this.ay(a)
z=this.ai(a)
if(this.x){y=this.aN(a)
if(this.d.aU(z,y))a.preventDefault()
return}if(this.r)return
x=this.ak(a)
if(this.c.aU(z,x))a.preventDefault()},"$1","gfM",4,0,3],
jB:[function(a){var z,y,x
H.i(a,"$isag")
if(!this.bN(a)){this.ay(a)
z=this.ai(a)
if(this.x){y=this.aN(a)
if(this.d.aU(z,y))a.preventDefault()
return}if(this.r)return
x=this.ak(a)
if(this.c.aU(z,x))a.preventDefault()}},"$1","gfE",4,0,3],
jK:[function(a){var z,y
H.i(a,"$isbq")
this.ay(a)
z=new V.bM((a&&C.F).gio(a),C.F.gip(a)).I(0,180)
if(this.x){if(this.d.iY(z))a.preventDefault()
return}if(this.r)return
y=this.ak(a)
if(this.c.iZ(z,y))a.preventDefault()},"$1","gfO",4,0,26],
jL:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.ai(this.y)
x=this.ak(this.y)
this.d.fK(y,x,z)}},"$1","gfP",4,0,9],
jQ:[function(a){var z
H.i(a,"$isaX")
this.a.focus()
this.f=!0
this.bX(a)
z=this.bR(a)
if(this.e.iW(z))a.preventDefault()},"$1","gfV",4,0,8],
jO:[function(a){var z
H.i(a,"$isaX")
this.bX(a)
z=this.bR(a)
if(this.e.iU(z))a.preventDefault()},"$1","gfT",4,0,8],
jP:[function(a){var z
H.i(a,"$isaX")
this.bX(a)
z=this.bR(a)
if(this.e.iV(z))a.preventDefault()},"$1","gfU",4,0,8]}}],["","",,D,{"^":"",bW:{"^":"a;0a,0b,0c,0d",
ar:[function(a){var z
H.i(a,"$isA")
z=this.d
if(!(z==null))z.P(a)},function(){return this.ar(null)},"jr","$1","$0","geK",0,2,0],
$isU:1,
$isax:1},U:{"^":"a;",$isax:1},hF:{"^":"S;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
sfb:function(a){this.e=H.j(a,"$isb",[D.bW],"$asb")},
sfW:function(a){this.f=H.j(a,"$isb",[D.eg],"$asb")},
shn:function(a){this.r=H.j(a,"$isb",[D.eu],"$asb")},
shv:function(a){this.x=H.j(a,"$isb",[D.eC],"$asb")},
shw:function(a){this.y=H.j(a,"$isb",[D.eD],"$asb")},
shx:function(a){this.z=H.j(a,"$isb",[D.eE],"$asb")},
ar:function(a){var z=this.Q
if(!(z==null))z.P(a)},
fJ:[function(a){var z
H.i(a,"$isA")
z=this.ch
if(!(z==null))z.P(a)},function(){return this.fJ(null)},"jG","$1","$0","gd0",0,2,0],
jM:[function(a){var z,y,x
H.j(a,"$ism",[D.U],"$asm")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.w)(a),++y){x=a[y]
if(x==null||this.eJ(x))return!1}return!0},"$1","gfR",4,0,28],
ju:[function(a,b){var z,y,x,w,v,u,t,s
z=D.U
H.j(b,"$ism",[z],"$asm")
for(y=b.length,x=this.gd0(),w={func:1,ret:-1,args:[D.A]},v=[w],u=0;u<b.length;b.length===y||(0,H.w)(b),++u){t=H.i(b[u],"$isU")
if(t instanceof D.bW)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bd()
s.sad(null)
s.saM(null)
s.c=null
s.d=0
t.d=s}H.k(x,w)
if(s.a==null)s.sad(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}z=new D.cD(a,b,this,[z])
z.b=!0
this.ar(z)},"$2","gfv",8,0,18],
jN:[function(a,b){var z,y,x,w
z=D.U
H.j(b,"$ism",[z],"$asm")
for(y=b.gL(b),x=this.gd0();y.A();){w=y.gE()
C.a.C(this.e,w)
w.gB().C(0,x)}z=new D.cE(a,b,this,[z])
z.b=!0
this.ar(z)},"$2","gfS",8,0,18],
eJ:function(a){var z=C.a.M(this.e,a)
return z},
$asm:function(){return[D.U]},
$asS:function(){return[D.U]}},eg:{"^":"a;",$isU:1,$isax:1},eu:{"^":"a;",$isU:1,$isax:1},eC:{"^":"a;",$isU:1,$isax:1},eD:{"^":"a;",$isU:1,$isax:1},eE:{"^":"a;",$isU:1,$isax:1}}],["","",,V,{"^":"",
li:[function(a,b){if(typeof b!=="number")return b.a0()
if(typeof a!=="number")return H.b5(a)
return Math.abs(b-a)<=1e-9},"$2","i0",8,0,25],
dv:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.k.ek(a-b,z)
return(a<0?a+z:a)+b},
B:function(a,b,c){if(a==null)return C.i.a3("null",c)
return C.i.a3(C.k.e0($.l.$2(a,0)?0:a,b),c+b+1)},
b3:function(a,b,c){var z,y,x,w,v,u
H.j(a,"$isb",[P.v],"$asb")
z=H.c([],[P.n])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.w)(a),++w){v=V.B(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.h(z,u)
C.a.R(z,u,C.i.a3(z[u],x))}return z},
ds:function(a,b){return C.k.jj(Math.pow(b,C.O.cf(Math.log(H.kH(a))/Math.log(b))))},
X:{"^":"a;a,b,c",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}},
bT:{"^":"a;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bT))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+", "+V.B(this.d,3,0)+"]"}},
e8:{"^":"a;a,b,c,d,e,f,r,x,y",
a4:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.v])
return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e8))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
z=b.e
if(!$.l.$2(z,this.e))return!1
z=b.f
if(!$.l.$2(z,this.f))return!1
z=b.r
if(!$.l.$2(z,this.r))return!1
z=b.x
if(!$.l.$2(z,this.x))return!1
z=b.y
if(!$.l.$2(z,this.y))return!1
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.v]
y=V.b3(H.c([this.a,this.d,this.r],z),3,0)
x=V.b3(H.c([this.b,this.e,this.x],z),3,0)
w=V.b3(H.c([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.h(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.h(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.h(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.h(y,1)
s=" "+y[1]+", "
if(1>=u)return H.h(x,1)
s=s+x[1]+", "
if(1>=t)return H.h(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.h(y,2)
z=" "+y[2]+", "
if(2>=u)return H.h(x,2)
z=z+x[2]+", "
if(2>=t)return H.h(w,2)
return s+(z+w[2]+"]")}},
a9:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a4:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.v])
return z},
dN:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.l.$2(a2,0))return V.cM()
a3=1/a2
a4=-w
a5=-i
return V.aw((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
V:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
return V.aw(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cs:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.N(this.a*z+this.b*y+this.c*x,this.e*z+this.f*y+this.r*x,this.y*z+this.z*y+this.Q*x)},
aY:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.aK(this.a*z+this.b*y+this.c*x+this.d,this.e*z+this.f*y+this.r*x+this.x,this.y*z+this.z*y+this.Q*x+this.ch)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a9))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
z=b.e
if(!$.l.$2(z,this.e))return!1
z=b.f
if(!$.l.$2(z,this.f))return!1
z=b.r
if(!$.l.$2(z,this.r))return!1
z=b.x
if(!$.l.$2(z,this.x))return!1
z=b.y
if(!$.l.$2(z,this.y))return!1
z=b.z
if(!$.l.$2(z,this.z))return!1
z=b.Q
if(!$.l.$2(z,this.Q))return!1
z=b.ch
if(!$.l.$2(z,this.ch))return!1
z=b.cx
if(!$.l.$2(z,this.cx))return!1
z=b.cy
if(!$.l.$2(z,this.cy))return!1
z=b.db
if(!$.l.$2(z,this.db))return!1
z=b.dx
if(!$.l.$2(z,this.dx))return!1
return!0},
i:function(a){return this.F()},
dM:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.v]
y=V.b3(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.b3(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.b3(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.b3(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.h(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.h(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.h(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.h(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.h(y,1)
q=q+y[1]+", "
if(1>=t)return H.h(x,1)
q=q+x[1]+", "
if(1>=s)return H.h(w,1)
q=q+w[1]+", "
if(1>=r)return H.h(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.h(y,2)
u=u+y[2]+", "
if(2>=t)return H.h(x,2)
u=u+x[2]+", "
if(2>=s)return H.h(w,2)
u=u+w[2]+", "
if(2>=r)return H.h(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.h(y,3)
q=q+y[3]+", "
if(3>=t)return H.h(x,3)
q=q+x[3]+", "
if(3>=s)return H.h(w,3)
q=q+w[3]+", "
if(3>=r)return H.h(v,3)
return u+(q+v[3]+"]")},
F:function(){return this.dM("",3,0)},
v:function(a){return this.dM(a,3,0)},
p:{
cM:function(){var z=$.ea
if(z==null){z=V.aw(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.ea=z}return z},
aw:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a9(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
e9:function(a,b,c){var z,y,x,w,v,u,t,s
z=c.I(0,Math.sqrt(c.N(c)))
y=b.aP(z)
x=y.I(0,Math.sqrt(y.N(y)))
w=z.aP(x)
v=new V.N(a.a,a.b,a.c)
u=x.aJ(0).N(v)
t=w.aJ(0).N(v)
s=z.aJ(0).N(v)
return V.aw(x.a,w.a,z.a,u,x.b,w.b,z.b,t,x.c,w.c,z.c,s,0,0,0,1)}}},
ap:{"^":"a;a,b",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ap))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"},
p:{
bJ:function(){var z=$.eh
if(z==null){z=new V.ap(0,0)
$.eh=z}return z}}},
aK:{"^":"a;a,b,c",
a0:function(a,b){return new V.aK(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aK))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"},
p:{
ei:function(){var z=$.bj
if(z==null){z=new V.aK(0,0,0)
$.bj=z}return z}}},
ej:{"^":"a;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ej))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+", "+V.B(this.d,3,0)+"]"}},
en:{"^":"a;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.en))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+", "+V.B(this.d,3,0)+"]"},
p:{
iv:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.en(a,b,c,d)}}},
bM:{"^":"a;a,b",
iH:[function(a){var z,y
z=this.a
if(typeof z!=="number")return z.V()
y=this.b
if(typeof y!=="number")return y.V()
return Math.sqrt(z*z+y*y)},"$0","gn",1,0,15],
I:function(a,b){var z,y
if($.l.$2(b,0)){z=$.eW
if(z==null){z=new V.bM(0,0)
$.eW=z}return z}z=this.a
if(typeof z!=="number")return z.I()
y=this.b
if(typeof y!=="number")return y.I()
return new V.bM(z/b,y/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bM))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"}},
N:{"^":"a;a,b,c",
iH:[function(a){return Math.sqrt(this.N(this))},"$0","gn",1,0,15],
N:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ci:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.N(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aP:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.N(z*y-x*w,x*v-u*y,u*w-z*v)},
K:function(a,b){return new V.N(this.a+b.a,this.b+b.b,this.c+b.c)},
aJ:function(a){return new V.N(-this.a,-this.b,-this.c)},
I:function(a,b){if($.l.$2(b,0))return V.bn()
return new V.N(this.a/b,this.b/b,this.c/b)},
dO:function(){if(!$.l.$2(0,this.a))return!1
if(!$.l.$2(0,this.b))return!1
if(!$.l.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.N))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"},
p:{
bn:function(){var z=$.eZ
if(z==null){z=new V.N(0,0,0)
$.eZ=z}return z},
f_:function(){var z=$.eY
if(z==null){z=new V.N(0,1,0)
$.eY=z}return z},
jr:function(){var z=$.cc
if(z==null){z=new V.N(0,0,1)
$.cc=z}return z}}}}],["","",,U,{"^":"",dJ:{"^":"bH;0a,0b",
gB:function(){var z=this.b
if(z==null){z=D.a7()
this.b=z}return z},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dJ))return!1
return J.O(this.a,b.a)},
i:function(a){return"Constant: "+this.a.v("          ")},
p:{
dK:function(a){var z=new U.dJ()
z.a=a
return z}}},bH:{"^":"fU;"},ep:{"^":"bH;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gB:function(){var z=this.y
if(z==null){z=D.a7()
this.y=z}return z},
aw:function(a){var z=this.y
if(!(z==null))z.P(a)},
se5:function(a){var z,y
a=V.dv(a,0,6.283185307179586)
z=this.a
if(!$.l.$2(z,a)){y=this.a
this.a=a
z=new D.M("yaw",y,a,this,[P.v])
z.b=!0
this.aw(z)}},
sdT:function(a){var z,y
a=V.dv(a,0,6.283185307179586)
z=this.b
if(!$.l.$2(z,a)){y=this.b
this.b=a
z=new D.M("pitch",y,a,this,[P.v])
z.b=!0
this.aw(z)}},
sdX:function(a){var z,y
a=V.dv(a,0,6.283185307179586)
z=this.c
if(!$.l.$2(z,a)){y=this.c
this.c=a
z=new D.M("roll",y,a,this,[P.v])
z.b=!0
this.aw(z)}},
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ep))return!1
z=this.a
y=b.a
if(!$.l.$2(z,y))return!1
z=this.b
y=b.b
if(!$.l.$2(z,y))return!1
z=this.c
y=b.c
if(!$.l.$2(z,y))return!1
z=this.d
y=b.d
if(!$.l.$2(z,y))return!1
z=this.e
y=b.e
if(!$.l.$2(z,y))return!1
z=this.f
y=b.f
if(!$.l.$2(z,y))return!1
return!0},
i:function(a){return"Rotater: ["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"], ["+V.B(this.d,3,0)+", "+V.B(this.e,3,0)+", "+V.B(this.f,3,0)+"]"}}}],["","",,M,{"^":"",he:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
seL:function(a,b){this.d=H.j(b,"$isS",[E.al],"$asS")},
as:[function(a){var z
H.i(a,"$isA")
z=this.x
if(!(z==null))z.P(a)},function(){return this.as(null)},"js","$1","$0","gac",0,2,0],
jy:[function(a,b){var z,y,x,w,v,u,t,s
z=E.al
H.j(b,"$ism",[z],"$asm")
for(y=b.length,x=this.gac(),w={func:1,ret:-1,args:[D.A]},v=[w],u=0;u<b.length;b.length===y||(0,H.w)(b),++u){t=b[u]
if(t!=null){if(t.ga5()==null){s=new D.bd()
s.sad(null)
s.saM(null)
s.c=null
s.d=0
t.sa5(s)}s=t.ga5()
s.toString
H.k(x,w)
if(s.a==null)s.sad(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.cD(a,b,this,[z])
z.b=!0
this.as(z)},"$2","gfB",8,0,4],
jz:[function(a,b){var z,y,x
z=E.al
H.j(b,"$ism",[z],"$asm")
for(y=b.gL(b),x=this.gac();y.A();)y.gE().gB().C(0,x)
z=new D.cE(a,b,this,[z])
z.b=!0
this.as(z)},"$2","gfC",8,0,4],
sdZ:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gB().C(0,this.gac())
y=this.c
this.c=a
if(a!=null)a.gB().h(0,this.gac())
z=new D.M("technique",y,this.c,this,[O.c8])
z.b=!0
this.as(z)}},
gB:function(){var z=this.x
if(z==null){z=D.a7()
this.x=z}return z},
aH:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.dW(this.c)
z=this.b
z.toString
y=a.a
C.b.i1(y,36160,null)
C.b.c8(y,2884)
C.b.c8(y,2929)
C.b.iq(y,513)
x=y.drawingBufferWidth
w=y.drawingBufferHeight
v=z.r
u=v.a
if(typeof x!=="number")return H.b5(x)
t=C.k.aa(u*x)
u=v.b
if(typeof w!=="number")return H.b5(w)
s=C.k.aa(u*w)
u=C.k.aa(v.c*x)
a.c=u
v=C.k.aa(v.d*w)
a.d=v
C.b.jq(y,t,s,u,v)
C.b.i7(y,z.c)
z=z.a
C.b.i6(y,z.a,z.b,z.c,z.d)
C.b.i5(y,16640)
z=this.a
y=a.c
v=a.d
u=z.c
r=z.d
q=z.e
p=q-r
o=1/Math.tan(u*0.5)
n=V.aw(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.dV(n)
y=$.ef
if(y==null){y=V.ei()
v=V.f_()
u=$.eX
if(u==null){u=new V.N(0,0,-1)
$.eX=u}u=V.e9(y,v,u)
$.ef=u
m=u}else m=y
z=z.b
if(z!=null){l=z.a
if(l!=null)m=l.V(0,m)}a.db.dV(m)
z=this.c
if(z!=null)z.bw(a)
for(z=this.d.a,z=new J.au(z,z.length,0,[H.u(z,0)]);z.A();)z.d.bw(a)
for(z=this.d.a,z=new J.au(z,z.length,0,[H.u(z,0)]);z.A();)z.d.aH(a)
this.a.toString
a.cy.cn()
a.db.cn()
this.b.toString
a.dU()},
$islu:1}}],["","",,A,{"^":"",dz:{"^":"a;a,b,c"},fQ:{"^":"a;a",
l:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
iw:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x){w=z[x]
C.b.dm(w.a,w.c)}},
is:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x){w=z[x]
C.b.dl(w.a,w.c)}}},hV:{"^":"cQ;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0ag,0a8,0ba,0dn,0bb,0bc,0dq,0dr,0bd,0be,0ds,0dt,0bf,0bg,0du,0dv,0bh,0dw,0dz,0bi,0dA,0dB,0bj,0bk,0bl,0dC,0dD,0bm,0bn,0dE,0dF,0bo,0dG,0c9,0dH,0ca,0dI,0cb,0dJ,0cc,0dK,0cd,0dL,0ce,a,b,0c,0d,0e,0f,0r,0x,0y",
sf0:function(a){this.r1=H.j(a,"$isb",[A.ar],"$asb")},
seM:function(a){this.c9=H.j(a,"$isb",[A.d1],"$asb")},
seN:function(a){this.ca=H.j(a,"$isb",[A.d3],"$asb")},
seO:function(a){this.cb=H.j(a,"$isb",[A.d4],"$asb")},
seP:function(a){this.cc=H.j(a,"$isb",[A.d5],"$asb")},
seQ:function(a){this.cd=H.j(a,"$isb",[A.d6],"$asb")},
seR:function(a){this.ce=H.j(a,"$isb",[A.d7],"$asb")},
eA:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.z=a2
z=new P.bl("")
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
a2.hB(z)
a2.hI(z)
a2.hC(z)
a2.hQ(z)
a2.hR(z)
a2.hK(z)
a2.hV(z)
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
s=x.charCodeAt(0)==0?x:x
x=this.z
z=new P.bl("")
z.a="precision mediump float;\n"
z.a="precision mediump float;\n\n"
v=x.r1
if(v){z.a="precision mediump float;\n\nvarying vec3 normalVec;\n"
u="precision mediump float;\n\nvarying vec3 normalVec;\n"}else u="precision mediump float;\n\n"
if(x.r2){u+="varying vec3 binormalVec;\n"
z.a=u}if(x.rx){u+="varying vec2 txt2D;\n"
z.a=u}if(x.ry){u+="varying vec3 txtCube;\n"
z.a=u}if(x.k3){u+="varying vec3 objPos;\n"
z.a=u}if(x.k4){u+="varying vec3 viewPos;\n"
z.a=u}u+="\n"
z.a=u
t=x.y2
if(t){u+="uniform mat4 colorMat;\n"
z.a=u}if(x.fr){u+="uniform mat4 invViewMat;\n"
z.a=u}z.a=u+"\n"
x.hF(z)
x.hA(z)
x.hD(z)
x.hG(z)
x.hO(z)
u=x.dy
if(u){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
x.hM(z)
x.hN(z)}x.hJ(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=x.y
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
q=x.k2
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
if(x.b!==C.c)C.a.h(p,"ambient()")
if(x.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(x.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(x.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.k(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
x.hE(z)
x.hL(z)
x.hP(z)
x.hS(z)
x.hT(z)
x.hU(z)
x.hH(z)}r=z.a+="// === Main ===\n"
r+="\n"
z.a=r
r+="void main()\n"
z.a=r
r+="{\n"
z.a=r
r+="   float alpha = alphaValue();\n"
z.a=r
if(v){v=r+"   vec3 norm = normal();\n"
z.a=v}else v=r
if(u)z.a=v+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
o=H.c([],[P.n])
if(q){z.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(o,"lightAccum")
if(x.c!==C.c)z.a+="   setDiffuseColor();\n"
if(x.d!==C.c)z.a+="   setInvDiffuseColor();\n"
if(x.e!==C.c)z.a+="   setSpecularColor();\n"
if(x.z>0)z.a+="   lightAccum += allDirLightValues(norm);\n"
if(x.Q>0)z.a+="   lightAccum += allPointLightValues(norm);\n"
if(x.ch>0)z.a+="   lightAccum += allSpotLightValues(norm);\n"
if(x.cx>0)z.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(x.cy>0)z.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(x.db>0)z.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(x.dx<=0)z.a+="   lightAccum += nonLightValues(norm);\n"}if(x.a!==C.c)C.a.h(o,"emission()")
if(x.r!==C.c)C.a.h(o,"reflect(refl)")
if(x.x!==C.c)C.a.h(o,"refract(refl)")
if(o.length<=0)C.a.h(o,"vec3(0.0, 0.0, 0.0)")
n="vec4("+C.a.k(o," + ")+", alpha);"
x=z.a
if(t){x+="   gl_FragColor = colorMat*"+n+"\n"
z.a=x}else{x+="   gl_FragColor = "+n+"\n"
z.a=x}x+="}\n"
z.a=x
this.c=s
this.d=x.charCodeAt(0)==0?x:x
this.e=this.cU(s,35633)
this.f=this.cU(this.d,35632)
x=this.a
v=x.createProgram()
this.r=v
C.b.df(x,v,this.e)
C.b.df(x,this.r,this.f)
C.b.iI(x,this.r)
if(!H.di(C.b.bz(x,this.r,35714))){m=C.b.ef(x,this.r)
C.b.il(x,this.r)
H.p(P.o("Failed to link shader: "+H.e(m)))}this.hi()
this.hk()
this.Q=this.x.l(0,"posAttr")
this.cx=this.x.l(0,"normAttr")
this.ch=this.x.l(0,"binmAttr")
this.cy=this.x.l(0,"txt2DAttr")
this.db=this.x.l(0,"txtCubeAttr")
this.dx=this.x.l(0,"bendAttr")
if(a2.fr)this.id=H.d(this.y.m(0,"invViewMat"),"$isar")
if(y)this.dy=H.d(this.y.m(0,"objMat"),"$isar")
if(w)this.fr=H.d(this.y.m(0,"viewObjMat"),"$isar")
this.fy=H.d(this.y.m(0,"projViewObjMat"),"$isar")
if(a2.x2)this.k1=H.d(this.y.m(0,"txt2DMat"),"$isd2")
if(a2.y1)this.k2=H.d(this.y.m(0,"txtCubeMat"),"$isar")
if(a2.y2)this.k3=H.d(this.y.m(0,"colorMat"),"$isar")
this.sf0(H.c([],[A.ar]))
y=a2.ag
if(y>0){this.k4=H.i(this.y.m(0,"bendMatCount"),"$isF")
for(l=0;l<y;++l){x=this.r1
w=this.y
v="bendValues["+l+"].mat"
k=w.l(0,v)
if(k==null)H.p(P.o("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.d(k,"$isar"))}}y=a2.a
if(y!==C.c){this.r2=H.d(this.y.m(0,"emissionClr"),"$isE")
switch(y){case C.c:break
case C.f:break
case C.d:this.rx=H.d(this.y.m(0,"emissionTxt"),"$isaa")
this.x1=H.d(this.y.m(0,"nullEmissionTxt"),"$isF")
break
case C.e:this.ry=H.d(this.y.m(0,"emissionTxt"),"$isab")
this.x1=H.d(this.y.m(0,"nullEmissionTxt"),"$isF")
break}}y=a2.b
if(y!==C.c){this.x2=H.d(this.y.m(0,"ambientClr"),"$isE")
switch(y){case C.c:break
case C.f:break
case C.d:this.y1=H.d(this.y.m(0,"ambientTxt"),"$isaa")
this.ag=H.d(this.y.m(0,"nullAmbientTxt"),"$isF")
break
case C.e:this.y2=H.d(this.y.m(0,"ambientTxt"),"$isab")
this.ag=H.d(this.y.m(0,"nullAmbientTxt"),"$isF")
break}}y=a2.c
if(y!==C.c){this.a8=H.d(this.y.m(0,"diffuseClr"),"$isE")
switch(y){case C.c:break
case C.f:break
case C.d:this.ba=H.d(this.y.m(0,"diffuseTxt"),"$isaa")
this.bb=H.d(this.y.m(0,"nullDiffuseTxt"),"$isF")
break
case C.e:this.dn=H.d(this.y.m(0,"diffuseTxt"),"$isab")
this.bb=H.d(this.y.m(0,"nullDiffuseTxt"),"$isF")
break}}y=a2.d
if(y!==C.c){this.bc=H.d(this.y.m(0,"invDiffuseClr"),"$isE")
switch(y){case C.c:break
case C.f:break
case C.d:this.dq=H.d(this.y.m(0,"invDiffuseTxt"),"$isaa")
this.bd=H.d(this.y.m(0,"nullInvDiffuseTxt"),"$isF")
break
case C.e:this.dr=H.d(this.y.m(0,"invDiffuseTxt"),"$isab")
this.bd=H.d(this.y.m(0,"nullInvDiffuseTxt"),"$isF")
break}}y=a2.e
if(y!==C.c){this.bg=H.d(this.y.m(0,"shininess"),"$isQ")
this.be=H.d(this.y.m(0,"specularClr"),"$isE")
switch(y){case C.c:break
case C.f:break
case C.d:this.ds=H.d(this.y.m(0,"specularTxt"),"$isaa")
this.bf=H.d(this.y.m(0,"nullSpecularTxt"),"$isF")
break
case C.e:this.dt=H.d(this.y.m(0,"specularTxt"),"$isab")
this.bf=H.d(this.y.m(0,"nullSpecularTxt"),"$isF")
break}}switch(a2.f){case C.c:break
case C.f:break
case C.d:this.du=H.d(this.y.m(0,"bumpTxt"),"$isaa")
this.bh=H.d(this.y.m(0,"nullBumpTxt"),"$isF")
break
case C.e:this.dv=H.d(this.y.m(0,"bumpTxt"),"$isab")
this.bh=H.d(this.y.m(0,"nullBumpTxt"),"$isF")
break}if(a2.dy){this.dw=H.d(this.y.m(0,"envSampler"),"$isab")
this.dz=H.d(this.y.m(0,"nullEnvTxt"),"$isF")
y=a2.r
if(y!==C.c){this.bi=H.d(this.y.m(0,"reflectClr"),"$isE")
switch(y){case C.c:break
case C.f:break
case C.d:this.dA=H.d(this.y.m(0,"reflectTxt"),"$isaa")
this.bj=H.d(this.y.m(0,"nullReflectTxt"),"$isF")
break
case C.e:this.dB=H.d(this.y.m(0,"reflectTxt"),"$isab")
this.bj=H.d(this.y.m(0,"nullReflectTxt"),"$isF")
break}}y=a2.x
if(y!==C.c){this.bk=H.d(this.y.m(0,"refraction"),"$isQ")
this.bl=H.d(this.y.m(0,"refractClr"),"$isE")
switch(y){case C.c:break
case C.f:break
case C.d:this.dC=H.d(this.y.m(0,"refractTxt"),"$isaa")
this.bm=H.d(this.y.m(0,"nullRefractTxt"),"$isF")
break
case C.e:this.dD=H.d(this.y.m(0,"refractTxt"),"$isab")
this.bm=H.d(this.y.m(0,"nullRefractTxt"),"$isF")
break}}}y=a2.y
if(y!==C.c){this.bn=H.d(this.y.m(0,"alpha"),"$isQ")
switch(y){case C.c:break
case C.f:break
case C.d:this.dE=H.d(this.y.m(0,"alphaTxt"),"$isaa")
this.bo=H.d(this.y.m(0,"nullAlphaTxt"),"$isF")
break
case C.e:this.dF=H.d(this.y.m(0,"alphaTxt"),"$isab")
this.bo=H.d(this.y.m(0,"nullAlphaTxt"),"$isF")
break}}this.seM(H.c([],[A.d1]))
this.seN(H.c([],[A.d3]))
this.seO(H.c([],[A.d4]))
this.seP(H.c([],[A.d5]))
this.seQ(H.c([],[A.d6]))
this.seR(H.c([],[A.d7]))
if(a2.k2){y=a2.z
if(y>0){this.dG=H.i(this.y.m(0,"dirLightCount"),"$isF")
for(l=0;l<y;++l){x=this.y
w="dirLights["+l+"].viewDir"
k=x.l(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isE")
x=this.y
w="dirLights["+l+"].color"
j=x.l(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isE")
x=this.c9;(x&&C.a).h(x,new A.d1(l,k,j))}}y=a2.Q
if(y>0){this.dH=H.i(this.y.m(0,"pntLightCount"),"$isF")
for(l=0;l<y;++l){x=this.y
w="pntLights["+l+"].point"
k=x.l(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isE")
x=this.y
w="pntLights["+l+"].viewPnt"
j=x.l(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isE")
x=this.y
w="pntLights["+l+"].color"
i=x.l(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isE")
x=this.y
w="pntLights["+l+"].att0"
h=x.l(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isQ")
x=this.y
w="pntLights["+l+"].att1"
g=x.l(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isQ")
x=this.y
w="pntLights["+l+"].att2"
f=x.l(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isQ")
x=this.ca;(x&&C.a).h(x,new A.d3(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.dI=H.i(this.y.m(0,"spotLightCount"),"$isF")
for(l=0;l<y;++l){x=this.y
w="spotLights["+l+"].objPnt"
k=x.l(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isE")
x=this.y
w="spotLights["+l+"].objDir"
j=x.l(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isE")
x=this.y
w="spotLights["+l+"].viewPnt"
i=x.l(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isE")
x=this.y
w="spotLights["+l+"].color"
h=x.l(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isE")
x=this.y
w="spotLights["+l+"].cutoff"
g=x.l(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isQ")
x=this.y
w="spotLights["+l+"].coneAngle"
f=x.l(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isQ")
x=this.y
w="spotLights["+l+"].att0"
e=x.l(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isQ")
x=this.y
w="spotLights["+l+"].att1"
d=x.l(0,w)
if(d==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isQ")
x=this.y
w="spotLights["+l+"].att2"
c=x.l(0,w)
if(c==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(c,"$isQ")
x=this.cb;(x&&C.a).h(x,new A.d4(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.dJ=H.i(this.y.m(0,"txtDirLightCount"),"$isF")
for(l=0;l<y;++l){x=this.y
w="txtDirLights["+l+"].objUp"
k=x.l(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isE")
x=this.y
w="txtDirLights["+l+"].objRight"
j=x.l(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isE")
x=this.y
w="txtDirLights["+l+"].objDir"
i=x.l(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isE")
x=this.y
w="txtDirLights["+l+"].viewDir"
h=x.l(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isE")
x=this.y
w="txtDirLights["+l+"].color"
g=x.l(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isE")
x=this.y
w="txtDirLights["+l+"].nullTxt"
f=x.l(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isF")
x=this.y
w="txtDirLightsTxt2D"+l
e=x.l(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isaa")
x=this.cc;(x&&C.a).h(x,new A.d5(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.dK=H.i(this.y.m(0,"txtPntLightCount"),"$isF")
for(l=0;l<y;++l){x=this.y
w="txtPntLights["+l+"].point"
k=x.l(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isE")
x=this.y
w="txtPntLights["+l+"].viewPnt"
j=x.l(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isE")
x=this.y
w="txtPntLights["+l+"].invViewRotMat"
i=x.l(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isd2")
x=this.y
w="txtPntLights["+l+"].color"
h=x.l(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isE")
x=this.y
w="txtPntLights["+l+"].nullTxt"
g=x.l(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isF")
x=this.y
w="txtPntLights["+l+"].att0"
f=x.l(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isQ")
x=this.y
w="txtPntLights["+l+"].att1"
e=x.l(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isQ")
x=this.y
w="txtPntLights["+l+"].att2"
d=x.l(0,w)
if(d==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isQ")
x=this.y
w="txtPntLightsTxtCube"+l
c=x.l(0,w)
if(c==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(c,"$isab")
x=this.cd;(x&&C.a).h(x,new A.d6(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.dL=H.i(this.y.m(0,"txtSpotLightCount"),"$isF")
for(l=0;l<y;++l){x=this.y
w="txtSpotLights["+l+"].objPnt"
k=x.l(0,w)
if(k==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isE")
x=this.y
w="txtSpotLights["+l+"].objDir"
j=x.l(0,w)
if(j==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isE")
x=this.y
w="txtSpotLights["+l+"].objUp"
i=x.l(0,w)
if(i==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isE")
x=this.y
w="txtSpotLights["+l+"].objRight"
h=x.l(0,w)
if(h==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isE")
x=this.y
w="txtSpotLights["+l+"].viewPnt"
g=x.l(0,w)
if(g==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isE")
x=this.y
w="txtSpotLights["+l+"].nullTxt"
f=x.l(0,w)
if(f==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isF")
x=this.y
w="txtSpotLights["+l+"].color"
e=x.l(0,w)
if(e==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isE")
x=this.y
w="txtSpotLights["+l+"].tuScalar"
d=x.l(0,w)
if(d==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isQ")
x=this.y
w="txtSpotLights["+l+"].tvScalar"
c=x.l(0,w)
if(c==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(c,"$isQ")
x=this.y
w="txtSpotLights["+l+"].att0"
b=x.l(0,w)
if(b==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(b,"$isQ")
x=this.y
w="txtSpotLights["+l+"].att1"
a=x.l(0,w)
if(a==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a,"$isQ")
x=this.y
w="txtSpotLights["+l+"].att2"
a0=x.l(0,w)
if(a0==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a0,"$isQ")
x=this.y
w="txtSpotLightsTxt2D"+l
a1=x.l(0,w)
if(a1==null)H.p(P.o("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a1,"$isaa")
x=this.ce;(x&&C.a).h(x,new A.d7(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
a6:function(a,b,c){if(c==null||!c.d)C.b.J(b.a,b.d,1)
else{a.ep(c)
C.b.J(b.a,b.d,0)}},
a1:function(a,b,c){C.b.J(b.a,b.d,1)},
p:{
hU:function(a,b){var z,y
z=a.a8
y=new A.hV(b,z)
y.eD(b,z)
y.eA(a,b)
return y}}},hY:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,ag,a8,ba",
hB:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.ag+"];\n"
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
hI:function(a){var z
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
hC:function(a){var z
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
hQ:function(a){var z,y
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
hR:function(a){var z,y
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
hK:function(a){var z
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
hV:function(a){var z
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
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.h(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.b_(c,1))+"Txt;\n"
a.a=z
if(b===C.d)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
hF:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aj(a,z,"emission")
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
hA:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aj(a,z,"ambient")
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
hD:function(a){var z,y
z=this.c
if(z===C.c)return
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
hG:function(a){var z,y
z=this.d
if(z===C.c)return
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
hO:function(a){var z,y
z=this.e
if(z===C.c)return
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
hJ:function(a){var z,y
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
hM:function(a){var z,y
z=this.r
if(z===C.c)return
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
hN:function(a){var z,y
z=this.x
if(z===C.c)return
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
hE:function(a){var z,y
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
hL:function(a){var z,y
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
hP:function(a){var z,y
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
hS:function(a){var z,y,x
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
hT:function(a){var z,y,x
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
hU:function(a){var z,y,x
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
hH:function(a){var z
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
i:function(a){return this.a8}},d1:{"^":"a;a,b,c"},d5:{"^":"a;a,b,c,d,e,f,r,x"},d3:{"^":"a;a,b,c,d,e,f,r"},d6:{"^":"a;a,b,c,d,e,f,r,x,y,z"},d4:{"^":"a;a,b,c,d,e,f,r,x,y,z"},d7:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cQ:{"^":"cu;",
eD:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
cU:function(a,b){var z,y,x
z=this.a
y=C.b.ij(z,b)
C.b.eq(z,y,a)
C.b.i9(z,y)
if(!H.di(C.b.ei(z,y,35713))){x=C.b.eh(z,y)
C.b.im(z,y)
throw H.f(P.o("Error compiling shader '"+H.e(y)+"': "+H.e(x)))}return y},
hi:function(){var z,y,x,w,v,u
z=H.c([],[A.dz])
y=this.a
x=H.a0(C.b.bz(y,this.r,35721))
if(typeof x!=="number")return H.b5(x)
w=0
for(;w<x;++w){v=C.b.e9(y,this.r,w)
u=C.b.eb(y,this.r,v.name)
C.a.h(z,new A.dz(y,v.name,u))}this.x=new A.fQ(z)},
hk:function(){var z,y,x,w,v,u
z=H.c([],[A.a_])
y=this.a
x=H.a0(C.b.bz(y,this.r,35718))
if(typeof x!=="number")return H.b5(x)
w=0
for(;w<x;++w){v=C.b.ea(y,this.r,w)
u=C.b.ej(y,this.r,v.name)
C.a.h(z,this.ik(v.type,v.size,v.name,u))}this.y=new A.jh(z)},
av:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.F(z,y,b,c)
else return A.d0(z,y,b,a,c)},
f8:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.aa(z,y,b,c)
else return A.d0(z,y,b,a,c)},
f9:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ab(z,y,b,c)
else return A.d0(z,y,b,a,c)},
b7:function(a,b){return new P.f6(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
ik:function(a,b,c,d){switch(a){case 5120:return this.av(b,c,d)
case 5121:return this.av(b,c,d)
case 5122:return this.av(b,c,d)
case 5123:return this.av(b,c,d)
case 5124:return this.av(b,c,d)
case 5125:return this.av(b,c,d)
case 5126:return new A.Q(this.a,this.r,c,d)
case 35664:return new A.jc(this.a,this.r,c,d)
case 35665:return new A.E(this.a,this.r,c,d)
case 35666:return new A.jf(this.a,this.r,c,d)
case 35667:return new A.jd(this.a,this.r,c,d)
case 35668:return new A.je(this.a,this.r,c,d)
case 35669:return new A.jg(this.a,this.r,c,d)
case 35674:return new A.jj(this.a,this.r,c,d)
case 35675:return new A.d2(this.a,this.r,c,d)
case 35676:return new A.ar(this.a,this.r,c,d)
case 35678:return this.f8(b,c,d)
case 35680:return this.f9(b,c,d)
case 35670:throw H.f(this.b7("BOOL",c))
case 35671:throw H.f(this.b7("BOOL_VEC2",c))
case 35672:throw H.f(this.b7("BOOL_VEC3",c))
case 35673:throw H.f(this.b7("BOOL_VEC4",c))
default:throw H.f(P.o("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}},bU:{"^":"a;a,b",
i:function(a){return this.b}},a_:{"^":"a;"},jh:{"^":"a;a",
l:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.l(0,b)
if(z==null)throw H.f(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.F()},
iB:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.w)(z),++w)x+=z[w].i(0)+a
return x},
F:function(){return this.iB("\n")}},F:{"^":"a_;a,b,c,d",
i:function(a){return"Uniform1i: "+H.e(this.c)}},jd:{"^":"a_;a,b,c,d",
i:function(a){return"Uniform2i: "+H.e(this.c)}},je:{"^":"a_;a,b,c,d",
i:function(a){return"Uniform3i: "+H.e(this.c)}},jg:{"^":"a_;a,b,c,d",
i:function(a){return"Uniform4i: "+H.e(this.c)}},jb:{"^":"a_;0e,0f,a,b,c,d",
shy:function(a){this.e=H.j(a,"$isb",[P.x],"$asb")},
i:function(a){return"Uniform1iv: "+H.e(this.c)},
p:{
d0:function(a,b,c,d,e){var z=new A.jb(a,b,c,e)
z.f=d
z.shy(P.hL(d,0,!1,P.x))
return z}}},Q:{"^":"a_;a,b,c,d",
i:function(a){return"Uniform1f: "+H.e(this.c)}},jc:{"^":"a_;a,b,c,d",
i:function(a){return"Uniform2f: "+H.e(this.c)}},E:{"^":"a_;a,b,c,d",
i:function(a){return"Uniform3f: "+H.e(this.c)}},jf:{"^":"a_;a,b,c,d",
i:function(a){return"Uniform4f: "+H.e(this.c)}},jj:{"^":"a_;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}},d2:{"^":"a_;a,b,c,d",
ab:function(a){var z=new Float32Array(H.bu(H.j(a,"$isb",[P.v],"$asb")))
C.b.e2(this.a,this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.e(this.c)}},ar:{"^":"a_;a,b,c,d",
ab:function(a){var z=new Float32Array(H.bu(H.j(a,"$isb",[P.v],"$asb")))
C.b.e3(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.e(this.c)}},aa:{"^":"a_;a,b,c,d",
ep:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)C.b.J(y,x,0)
else C.b.J(y,x,a.a)},
i:function(a){return"UniformSampler2D: "+H.e(this.c)}},ab:{"^":"a_;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}}],["","",,F,{"^":"",
cf:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bs:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.N(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.N(t+h,s+f,r+g)
z.b=q
p=new V.N(t-h,s-f,r-g)
z.c=p
o=new V.N(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cf(y)
k=F.cf(z.b)
j=F.lb(d,e,new F.kv(z,F.cf(z.c),F.cf(z.d),k,l,c),b)
if(j!=null)a.cl(j)},
lb:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.k(c,{func:1,ret:-1,args:[F.as,P.v,P.v]})
if(a<1)return
if(b<1)return
z=F.et()
y=H.c([],[F.as])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.d8(null,null,new V.bT(u,0,0,1),null,null,new V.ap(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.c6(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.d8(null,null,new V.bT(o,n,m,1),null,null,new V.ap(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.c6(d))}}z.d.hW(a+1,b+1,y)
return z},
kv:{"^":"t:31;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.ci(z.b,b).ci(z.d.ci(z.c,b),c)
z=new V.aK(y.a,y.b,y.c)
if(!J.O(a.f,z)){a.f=z
z=a.a
if(z!=null)z.W()}a.sjh(y.I(0,Math.sqrt(y.N(y))))
z=1-b
x=1-c
x=new V.ej(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.O(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.W()}}},
Z:{"^":"a;0a,0b,0c,0d,0e",
aQ:function(){if(!this.gaR()){C.a.C(this.a.a.d.b,this)
this.a.a.W()}this.bT()
this.bU()
this.h1()},
hf:function(a){this.a=a
C.a.h(a.d.b,this)},
hg:function(a){this.b=a
C.a.h(a.d.c,this)},
hh:function(a){this.c=a
C.a.h(a.d.d,this)},
bT:function(){var z=this.a
if(z!=null){C.a.C(z.d.b,this)
this.a=null}},
bU:function(){var z=this.b
if(z!=null){C.a.C(z.d.c,this)
this.b=null}},
h1:function(){var z=this.c
if(z!=null){C.a.C(z.d.d,this)
this.c=null}},
gaR:function(){return this.a==null||this.b==null||this.c==null},
f_:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.bn()
if(y!=null)v=v.K(0,y)
if(x!=null)v=v.K(0,x)
if(w!=null)v=v.K(0,w)
if(v.dO())return
return v.I(0,Math.sqrt(v.N(v)))},
f4:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.a0(0,y)
z=new V.N(z.a,z.b,z.c)
v=z.I(0,Math.sqrt(z.N(z)))
z=w.a0(0,y)
z=new V.N(z.a,z.b,z.c)
z=v.aP(z.I(0,Math.sqrt(z.N(z))))
return z.I(0,Math.sqrt(z.N(z)))},
c4:function(){if(this.d!=null)return!0
var z=this.f_()
if(z==null){z=this.f4()
if(z==null)return!1}this.d=z
this.a.a.W()
return!0},
eZ:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=V.bn()
if(y!=null)v=v.K(0,y)
if(x!=null)v=v.K(0,x)
if(w!=null)v=v.K(0,w)
if(v.dO())return
return v.I(0,Math.sqrt(v.N(v)))},
f3:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.l.$2(n,0)){z=r.a0(0,u)
z=new V.N(z.a,z.b,z.c)
m=z.I(0,Math.sqrt(z.N(z)))
if(o.a-p.a<0)m=m.aJ(0)}else{l=(z-q.b)/n
z=r.a0(0,u)
z=new V.aK(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).a0(0,x)
z=new V.N(z.a,z.b,z.c)
m=z.I(0,Math.sqrt(z.N(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.aJ(0)}z=this.d
if(z!=null){k=z.I(0,Math.sqrt(z.N(z)))
z=k.aP(m)
z=z.I(0,Math.sqrt(z.N(z))).aP(k)
m=z.I(0,Math.sqrt(z.N(z)))}return m},
c2:function(){if(this.e!=null)return!0
var z=this.eZ()
if(z==null){z=this.f3()
if(z==null)return!1}this.e=z
this.a.a.W()
return!0},
gi8:function(a){if(J.O(this.a,this.b))return!0
if(J.O(this.b,this.c))return!0
if(J.O(this.c,this.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
v:function(a){var z,y
if(this.gaR())return a+"disposed"
z=a+C.i.a3(J.a2(this.a.e),0)+", "+C.i.a3(J.a2(this.b.e),0)+", "+C.i.a3(J.a2(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
F:function(){return this.v("")},
p:{
bC:function(a,b,c){var z,y,x
z=new F.Z()
y=a.a
if(y==null)H.p(P.o("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.p(P.o("May not create a face with vertices attached to different shapes."))
z.hf(a)
z.hg(b)
z.hh(c)
C.a.h(z.a.a.d.b,z)
z.a.a.W()
return z}}},
hi:{"^":"a;"},
iP:{"^":"hi;",
aS:function(a,b,c){var z,y
z=b.a
z.a.a.t()
z=z.e
y=c.a
y.a.a.t()
if(z==y.e){z=b.b
z.a.a.t()
z=z.e
y=c.b
y.a.a.t()
if(z==y.e){z=b.c
z.a.a.t()
z=z.e
y=c.c
y.a.a.t()
y=z==y.e
z=y}else z=!1
return z}else{z=b.a
z.a.a.t()
z=z.e
y=c.b
y.a.a.t()
if(z==y.e){z=b.b
z.a.a.t()
z=z.e
y=c.c
y.a.a.t()
if(z==y.e){z=b.c
z.a.a.t()
z=z.e
y=c.a
y.a.a.t()
y=z==y.e
z=y}else z=!1
return z}else{z=b.a
z.a.a.t()
z=z.e
y=c.c
y.a.a.t()
if(z==y.e){z=b.b
z.a.a.t()
z=z.e
y=c.a
y.a.a.t()
if(z==y.e){z=b.c
z.a.a.t()
z=z.e
y=c.b
y.a.a.t()
y=z==y.e
z=y}else z=!1
return z}else return!1}}}},
bg:{"^":"a;0a,0b",
aQ:function(){if(!this.gaR()){C.a.C(this.a.a.c.b,this)
this.a.a.W()}this.bT()
this.bU()},
bT:function(){var z=this.a
if(z!=null){C.a.C(z.c.b,this)
this.a=null}},
bU:function(){var z=this.b
if(z!=null){C.a.C(z.c.c,this)
this.b=null}},
gaR:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
v:function(a){if(this.gaR())return a+"disposed"
return a+C.i.a3(J.a2(this.a.e),0)+", "+C.i.a3(J.a2(this.b.e),0)},
F:function(){return this.v("")}},
hG:{"^":"a;"},
ja:{"^":"hG;",
aS:function(a,b,c){var z,y
z=b.a
z.a.a.t()
z=z.e
y=c.a
y.a.a.t()
if(z==y.e){z=b.b
z.a.a.t()
z=z.e
y=c.b
y.a.a.t()
return z==y.e}else{z=b.a
z.a.a.t()
z=z.e
y=c.b
y.a.a.t()
if(z==y.e){z=b.b
z.a.a.t()
z=z.e
y=c.a
y.a.a.t()
return z==y.e}else return!1}}},
bI:{"^":"a;0a",
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
v:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.i.a3(J.a2(z.e),0)},
F:function(){return this.v("")}},
es:{"^":"a;0a,0b,0c,0d,0e",
gB:function(){var z=this.e
if(z==null){z=D.a7()
this.e=z}return z},
cl:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.d
a.a.t()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.w)(z),++w){v=z[w]
this.a.h(0,v.ie())}this.a.t()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.w)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.t()
s=s.e
if(typeof s!=="number")return s.K()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.bI()
if(r.a==null)H.p(P.o("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.P(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.w)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.t()
s=s.e
if(typeof s!=="number")return s.K()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.t()
t=t.e
if(typeof t!=="number")return t.K()
t+=y
s=s.c
if(t>=s.length)return H.h(s,t)
o=s[t]
t=this.c.a
t.a.h(0,p)
t.a.h(0,o)
t=new F.bg()
s=p.a
if(s==null)H.p(P.o("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.p(P.o("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.P(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.w)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.t()
s=s.e
if(typeof s!=="number")return s.K()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.t()
t=t.e
if(typeof t!=="number")return t.K()
t+=y
s=s.c
if(t>=s.length)return H.h(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.t()
s=s.e
if(typeof s!=="number")return s.K()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
l=t[s]
s=this.d.a
s.a.h(0,p)
s.a.h(0,o)
s.a.h(0,l)
F.bC(p,o,l)}z=this.e
if(!(z==null))z.ah()},
aB:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aB()||!1
if(!this.a.aB())y=!1
z=this.e
if(!(z==null))z.ah()
return y},
iM:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.c(z.slice(0),[H.u(z,0)])
for(z=[F.as];y.length!==0;){x=C.a.giy(y)
C.a.j3(y,0)
if(x!=null){w=H.c([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.w)(y),++u){t=y[u]
if(t!=null&&a.aS(0,x,t)){C.a.h(w,t)
C.a.C(y,t)}}if(w.length>1)b.cl(w)}}this.a.t()
this.c.co()
this.d.co()
this.b.j4()
this.c.cp(new F.ja())
this.d.cp(new F.iP())
z=this.e
if(!(z==null))z.ah()},
i3:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aC()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aB().a)!==0)++w
if((x&$.$get$aA().a)!==0)++w
if((x&$.$get$aD().a)!==0)++w
if((x&$.$get$aE().a)!==0)++w
if((x&$.$get$bo().a)!==0)++w
if((x&$.$get$bp().a)!==0)++w
if((x&$.$get$aZ().a)!==0)++w
if((x&$.$get$az().a)!==0)++w
v=b.gcD(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.v
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.dD])
for(r=0,q=0;q<w;++q){p=b.hZ(q)
o=p.gcD(p)
C.a.R(s,q,new Z.dD(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.h(y,n)
m=y[n].iJ(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.R(t,l,m[k]);++l}}r+=o}H.j(t,"$isb",[x],"$asb")
y=a.a
j=y.createBuffer()
C.b.af(y,34962,j)
C.b.dh(y,34962,new Float32Array(H.bu(t)),35044)
C.b.af(y,34962,null)
i=new Z.dE(new Z.f3(34962,j),s,b)
i.sfn(H.c([],[Z.bE]))
if(this.b.b.length!==0){x=P.x
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.t()
C.a.h(h,g.e)}f=Z.d9(y,34963,H.j(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bE(0,h.length,f))}if(this.c.b.length!==0){x=P.x
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.t()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.t()
C.a.h(h,g.e)}f=Z.d9(y,34963,H.j(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bE(1,h.length,f))}if(this.d.b.length!==0){x=P.x
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.t()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.t()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].c
g.a.a.t()
C.a.h(h,g.e)}f=Z.d9(y,34963,H.j(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bE(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.n])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.v("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.v("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.v("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.v("   "))}return C.a.k(z,"\n")},
a9:function(a){var z=this.e
if(!(z==null))z.P(a)},
W:function(){return this.a9(null)},
$islw:1,
p:{
et:function(){var z,y
z=new F.es()
y=new F.js(z)
y.b=!1
y.shz(H.c([],[F.as]))
z.a=y
y=new F.iJ(z)
y.sbQ(H.c([],[F.bI]))
z.b=y
y=new F.iI(z)
y.sfo(H.c([],[F.bg]))
z.c=y
y=new F.iH(z)
y.sfe(H.c([],[F.Z]))
z.d=y
z.e=null
return z}}},
iH:{"^":"a;a,0b",
sfe:function(a){this.b=H.j(a,"$isb",[F.Z],"$asb")},
hW:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.j(c,"$isb",[F.as],"$asb")
z=H.c([],[F.Z])
for(y=this.a,x=b,w=0,v=!1,u=1;u<a;++u,++w,++x){for(t=v,s=1;s<b;++s,x=o){r=c.length
if(w<0||w>=r)return H.h(c,w)
q=c[w];++w
if(w>=r)return H.h(c,w)
p=c[w]
o=x+1
if(o<0||o>=r)return H.h(c,o)
n=c[o]
if(x<0||x>=r)return H.h(c,x)
m=c[x]
r=y.a
if(t){r.h(0,q)
y.a.h(0,p)
y.a.h(0,n)
C.a.h(z,F.bC(q,p,n))
y.a.h(0,q)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bC(q,n,m))}else{r.h(0,p)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bC(p,n,m))
y.a.h(0,p)
y.a.h(0,m)
y.a.h(0,q)
C.a.h(z,F.bC(p,m,q))}t=!t}v=!v}return z},
gn:function(a){return this.b.length},
cp:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.h(x,y)
w=x[y]
for(x=w.d,v=x.b.length+x.c.length+x.d.length-1;v>=0;--v){u=w.d.l(0,v)
for(t=v-1;t>=0;--t){s=w.d.l(0,t)
if(a.aS(0,u,s)){u.aQ()
break}}}}},
co:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
x=y[z]
y=x.gi8(x)
if(y)x.aQ()}},
aB:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.w)(z),++w)if(!z[w].c4())x=!1
return x},
c3:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.w)(z),++w)if(!z[w].c2())x=!1
return x},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].v(a))
return C.a.k(z,"\n")},
F:function(){return this.v("")}},
iI:{"^":"a;a,0b",
sfo:function(a){this.b=H.j(a,"$isb",[F.bg],"$asb")},
gn:function(a){return this.b.length},
cp:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.h(x,y)
w=x[y]
for(x=w.c,v=x.b.length+x.c.length-1;v>=0;--v){u=w.c.l(0,v)
for(t=v-1;t>=0;--t){s=w.c.l(0,t)
if(a.aS(0,u,s)){u.aQ()
break}}}}},
co:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
x=y[z]
y=J.O(x.a,x.b)
if(y)x.aQ()}},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.h(w,x)
C.a.h(z,w[x].v(a+(""+x+". ")))}return C.a.k(z,"\n")},
F:function(){return this.v("")}},
iJ:{"^":"a;a,0b",
sbQ:function(a){this.b=H.j(a,"$isb",[F.bI],"$asb")},
gn:function(a){return this.b.length},
j4:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
y=y[z]
x=y.a
if(x.b.b.length>1){if(x!=null){C.a.C(x.a.b.b,y)
x=y.a.a.e
if(!(x==null))x.P(null)}x=y.a
if(x!=null){C.a.C(x.b.b,y)
y.a=null}}}},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].v(a))
return C.a.k(z,"\n")},
F:function(){return this.v("")}},
as:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
c6:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.d8(this.cx,x,u,z,y,w,v,a,t)},
ie:function(){return this.c6(null)},
sjh:function(a){var z
if(!J.O(this.z,a)){this.z=a
z=this.a
if(z!=null)z.W()}},
iJ:function(a){var z,y
if(a.u(0,$.$get$aC())){z=this.f
y=[P.v]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$aB())){z=this.r
y=[P.v]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$aA())){z=this.x
y=[P.v]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$aD())){z=this.y
y=[P.v]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(a.u(0,$.$get$aE())){z=this.z
y=[P.v]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$bo())){z=this.Q
y=[P.v]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$bp())){z=this.Q
y=[P.v]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(a.u(0,$.$get$aZ()))return H.c([this.ch],[P.v])
else if(a.u(0,$.$get$az())){z=this.cx
y=[P.v]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.v])},
c4:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bn()
this.d.Y(0,new F.jC(z))
z=z.a
this.r=z.I(0,Math.sqrt(z.N(z)))
z=this.a
if(z!=null){z.W()
z=this.a.e
if(!(z==null))z.ah()}return!0},
c2:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bn()
this.d.Y(0,new F.jB(z))
z=z.a
this.x=z.I(0,Math.sqrt(z.N(z)))
z=this.a
if(z!=null){z.W()
z=this.a.e
if(!(z==null))z.ah()}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
v:function(a){var z,y,x
z=H.c([],[P.n])
C.a.h(z,C.i.a3(J.a2(this.e),0))
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
C.a.h(z,V.B(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.k(z,", ")
return a+"{"+x+"}"},
F:function(){return this.v("")},
p:{
d8:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.as()
y=new F.jA(z)
y.sbQ(H.c([],[F.bI]))
z.b=y
y=new F.jw(z)
x=[F.bg]
y.sfp(H.c([],x))
y.sfq(H.c([],x))
z.c=y
y=new F.jt(z)
x=[F.Z]
y.sff(H.c([],x))
y.sfg(H.c([],x))
y.sfh(H.c([],x))
z.d=y
h=$.$get$f0()
z.e=0
y=$.$get$aC()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aB().a)!==0?e:null
z.x=(x&$.$get$aA().a)!==0?b:null
z.y=(x&$.$get$aD().a)!==0?f:null
z.z=(x&$.$get$aE().a)!==0?g:null
z.Q=(x&$.$get$f1().a)!==0?c:null
z.ch=(x&$.$get$aZ().a)!==0?i:0
z.cx=(x&$.$get$az().a)!==0?a:null
return z}}},
jC:{"^":"t:5;a",
$1:function(a){var z,y
H.i(a,"$isZ")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.K(0,z)}}},
jB:{"^":"t:5;a",
$1:function(a){var z,y
H.i(a,"$isZ")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.K(0,z)}}},
js:{"^":"a;a,0b,0c",
shz:function(a){this.c=H.j(a,"$isb",[F.as],"$asb")},
t:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.h(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z,y
z=b.a
if(z!=null){if(z===this.a)return!1
throw H.f(P.o("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
y=this.a
b.a=y
C.a.h(z,b)
y.W()
return!0},
gn:function(a){return this.c.length},
aB:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x)z[x].c4()
return!0},
c3:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x)z[x].c2()
return!0},
i4:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.I(0,Math.sqrt(u*u+t*t+s*s))
if(!J.O(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.P(null)}}}}return!0},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
this.t()
z=H.c([],[P.n])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].v(a))
return C.a.k(z,"\n")},
F:function(){return this.v("")}},
jt:{"^":"a;a,0b,0c,0d",
sff:function(a){this.b=H.j(a,"$isb",[F.Z],"$asb")},
sfg:function(a){this.c=H.j(a,"$isb",[F.Z],"$asb")},
sfh:function(a){this.d=H.j(a,"$isb",[F.Z],"$asb")},
gn:function(a){return this.b.length+this.c.length+this.d.length},
l:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.h(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.h(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.h(z,b)
return z[b]},
Y:function(a,b){H.k(b,{func:1,ret:-1,args:[F.Z]})
C.a.Y(this.b,b)
C.a.Y(this.c,new F.ju(this,b))
C.a.Y(this.d,new F.jv(this,b))},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].v(a))
return C.a.k(z,"\n")},
F:function(){return this.v("")}},
ju:{"^":"t:5;a,b",
$1:function(a){H.i(a,"$isZ")
if(!J.O(a.a,this.a))this.b.$1(a)}},
jv:{"^":"t:5;a,b",
$1:function(a){var z
H.i(a,"$isZ")
z=this.a
if(!J.O(a.a,z)&&!J.O(a.b,z))this.b.$1(a)}},
jw:{"^":"a;a,0b,0c",
sfp:function(a){this.b=H.j(a,"$isb",[F.bg],"$asb")},
sfq:function(a){this.c=H.j(a,"$isb",[F.bg],"$asb")},
gn:function(a){return this.b.length+this.c.length},
l:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.h(z,x)
return z[x]}else{if(b<0)return H.h(z,b)
return z[b]}},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].v(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].v(a))
return C.a.k(z,"\n")},
F:function(){return this.v("")}},
jy:{"^":"a;"},
jx:{"^":"jy;",
aS:function(a,b,c){return J.O(b.f,c.f)}},
jz:{"^":"a;"},
i8:{"^":"jz;",
cl:function(a){var z,y,x,w,v,u,t,s,r
H.j(a,"$isb",[F.as],"$asb")
z=V.bn()
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.N(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.I(0,Math.sqrt(z.N(z)))
for(y=a.length,w=z==null,x=0;x<a.length;a.length===y||(0,H.w)(a),++x){v=a[x]
if(w)u=null
else{t=z.a
s=z.b
r=z.c
u=z.I(0,Math.sqrt(t*t+s*s+r*r))}if(!J.O(v.r,u)){v.r=u
t=v.a
if(t!=null){t=t.e
if(!(t==null))t.P(null)}}}return}},
jA:{"^":"a;a,0b",
sbQ:function(a){this.b=H.j(a,"$isb",[F.bI],"$asb")},
gn:function(a){return this.b.length},
i:function(a){return this.F()},
v:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].v(a))
return C.a.k(z,"\n")},
F:function(){return this.v("")}}}],["","",,O,{"^":"",hT:{"^":"c8;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
sf1:function(a){this.e=H.j(a,"$isS",[V.a9],"$asS")},
gB:function(){var z=this.dy
if(z==null){z=D.a7()
this.dy=z}return z},
T:[function(a){var z
H.i(a,"$isA")
z=this.dy
if(!(z==null))z.P(a)},function(){return this.T(null)},"eT","$1","$0","gb2",0,2,0],
h5:[function(a){H.i(a,"$isA")
this.a=null
this.T(a)},function(){return this.h5(null)},"jR","$1","$0","gh4",0,2,0],
jv:[function(a,b){var z=V.a9
z=new D.cD(a,H.j(b,"$ism",[z],"$asm"),this,[z])
z.b=!0
this.T(z)},"$2","gfw",8,0,11],
jw:[function(a,b){var z=V.a9
z=new D.cE(a,H.j(b,"$ism",[z],"$asm"),this,[z])
z.b=!0
this.T(z)},"$2","gfz",8,0,11],
cR:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
z=this.dx
y=C.h.X(z.e.length+3,4)*4
x=C.h.X(z.f.length+3,4)*4
w=C.h.X(z.r.length+3,4)*4
v=C.h.X(z.x.length+3,4)*4
u=C.h.X(z.y.length+3,4)*4
t=C.h.X(z.z.length+3,4)*4
s=C.h.X(this.e.a.length+3,4)*4
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
a2=$.$get$aC()
if(e){g=$.$get$aB()
a2=new Z.aY(a2.a|g.a)}if(d){g=$.$get$aA()
a2=new Z.aY(a2.a|g.a)}if(c){g=$.$get$aD()
a2=new Z.aY(a2.a|g.a)}if(b){g=$.$get$aE()
a2=new Z.aY(a2.a|g.a)}if(a0){g=$.$get$az()
a2=new Z.aY(a2.a|g.a)}return new A.hY(z,r,q,p,o,n,m,l,k,y,x,w,v,u,t,y+x+w+v+u+t,i,i,a,a1,!0,!1,!1,h,a,f,e,d,c,b,a0,!1,!1,!1,s,j.charCodeAt(0)==0?j:j,a2)},
O:function(a,b){H.j(a,"$isb",[T.cW],"$asb")
if(b!=null)if(!C.a.M(a,b)){b.a=a.length
C.a.h(a,b)}},
bw:function(a){var z,y,x,w,v
for(z=this.dx.a,z=new J.au(z,z.length,0,[H.u(z,0)]);z.A();){y=z.d
y.toString
x=$.cc
if(x==null){x=new V.N(0,0,1)
$.cc=x}y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cs(x)}}},
j6:function(a,a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=this.a
if(z==null){z=this.cR()
y=a.fr.l(0,z.a8)
if(y==null){y=A.hU(z,a.a)
x=y.b
if(x.length===0)H.p(P.o("May not cache a shader with no name."))
if(a.fr.dj(x))H.p(P.o('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.R(0,x,y)}this.a=y
a0.e=null
z=y}w=z.z
v=w.ba
z=a0.e
if(!(z instanceof Z.dE)){a0.e=null
z=null}if(z==null||!z.d.u(0,v)){z=w.r1
if(z)a0.d.aB()
u=w.r2
if(u){t=a0.d
s=t.e
if(!(s==null))++s.d
t.d.c3()
t.a.c3()
t=t.e
if(!(t==null))t.ah()}t=w.ry
if(t){s=a0.d
r=s.e
if(!(r==null))++r.d
s.a.i4()
s=s.e
if(!(s==null))s.ah()}q=a0.d.i3(new Z.jD(a.a),v)
q.aF($.$get$aC()).e=this.a.Q.c
if(z)q.aF($.$get$aB()).e=this.a.cx.c
if(u)q.aF($.$get$aA()).e=this.a.ch.c
if(w.rx)q.aF($.$get$aD()).e=this.a.cy.c
if(t)q.aF($.$get$aE()).e=this.a.db.c
if(w.x1)q.aF($.$get$az()).e=this.a.dx.c
a0.e=q}z=T.cW
p=H.c([],[z])
u=this.a
t=a.a
C.b.e4(t,u.r)
u.x.iw()
if(w.fx){u=this.a
s=a.dx.gS()
u=u.dy
u.toString
u.ab(s.a4(0,!0))}if(w.fy){u=this.a
s=a.cx
if(s==null){s=a.db.gS().V(0,a.dx.gS())
a.cx=s}u=u.fr
u.toString
u.ab(s.a4(0,!0))}u=this.a
s=a.ch
if(s==null){s=a.gj1().V(0,a.dx.gS())
a.ch=s}u=u.fy
u.toString
u.ab(s.a4(0,!0))
if(w.x2){u=this.a
s=this.b
u=u.k1
u.toString
u.ab(C.r.a4(s,!0))}if(w.y1){u=this.a
s=this.c
u=u.k2
u.toString
u.ab(C.r.a4(s,!0))}if(w.y2){u=this.a
s=this.d
u=u.k3
u.toString
u.ab(C.r.a4(s,!0))}if(w.ag>0){o=this.e.a.length
u=this.a.k4
C.b.J(u.a,u.d,o)
for(u=[P.v],n=0;n<o;++n){s=this.a
r=this.e.a
if(n>=r.length)return H.h(r,n)
r=r[n]
s.toString
H.i(r,"$isa9")
s=s.r1
if(n>=s.length)return H.h(s,n)
s=s[n]
m=new Float32Array(H.bu(H.j(r.a4(0,!0),"$isb",u,"$asb")))
C.b.e3(s.a,s.d,!1,m)}}switch(w.a){case C.c:break
case C.f:u=this.a
s=this.f.f
u=u.r2
u.toString
r=s.a
l=s.b
s=s.c
C.b.q(u.a,u.d,r,l,s)
break
case C.d:this.O(p,this.f.d)
u=this.a
s=this.f.d
u.a6(u.rx,u.x1,s)
s=this.a
u=this.f.f
s=s.r2
s.toString
r=u.a
l=u.b
u=u.c
C.b.q(s.a,s.d,r,l,u)
break
case C.e:this.O(p,this.f.e)
u=this.a
s=this.f.e
u.a1(u.ry,u.x1,s)
s=this.a
u=this.f.f
s=s.r2
s.toString
r=u.a
l=u.b
u=u.c
C.b.q(s.a,s.d,r,l,u)
break}if(w.k2){switch(w.b){case C.c:break
case C.f:u=this.a
s=this.r.f
u=u.x2
u.toString
r=s.a
l=s.b
s=s.c
C.b.q(u.a,u.d,r,l,s)
break
case C.d:this.O(p,this.r.d)
u=this.a
s=this.r.d
u.a6(u.y1,u.ag,s)
s=this.a
u=this.r.f
s=s.x2
s.toString
r=u.a
l=u.b
u=u.c
C.b.q(s.a,s.d,r,l,u)
break
case C.e:this.O(p,this.r.e)
u=this.a
s=this.r.e
u.a1(u.y2,u.ag,s)
s=this.a
u=this.r.f
s=s.x2
s.toString
r=u.a
l=u.b
u=u.c
C.b.q(s.a,s.d,r,l,u)
break}switch(w.c){case C.c:break
case C.f:u=this.a
s=this.x.f
u=u.a8
u.toString
r=s.a
l=s.b
s=s.c
C.b.q(u.a,u.d,r,l,s)
break
case C.d:this.O(p,this.x.d)
u=this.a
s=this.x.d
u.a6(u.ba,u.bb,s)
s=this.a
u=this.x.f
s=s.a8
s.toString
r=u.a
l=u.b
u=u.c
C.b.q(s.a,s.d,r,l,u)
break
case C.e:this.O(p,this.x.e)
u=this.a
s=this.x.e
u.a1(u.dn,u.bb,s)
s=this.a
u=this.x.f
s=s.a8
s.toString
r=u.a
l=u.b
u=u.c
C.b.q(s.a,s.d,r,l,u)
break}switch(w.d){case C.c:break
case C.f:u=this.a
s=this.y.f
u=u.bc
u.toString
r=s.a
l=s.b
s=s.c
C.b.q(u.a,u.d,r,l,s)
break
case C.d:this.O(p,this.y.d)
u=this.a
s=this.y.d
u.a6(u.dq,u.bd,s)
s=this.a
u=this.y.f
s=s.bc
s.toString
r=u.a
l=u.b
u=u.c
C.b.q(s.a,s.d,r,l,u)
break
case C.e:this.O(p,this.y.e)
u=this.a
s=this.y.e
u.a1(u.dr,u.bd,s)
s=this.a
u=this.y.f
s=s.bc
s.toString
r=u.a
l=u.b
u=u.c
C.b.q(s.a,s.d,r,l,u)
break}switch(w.e){case C.c:break
case C.f:u=this.a
s=this.z.f
u=u.be
u.toString
r=s.a
l=s.b
s=s.c
C.b.q(u.a,u.d,r,l,s)
s=this.a
l=this.z.ch
s=s.bg
C.b.H(s.a,s.d,l)
break
case C.d:this.O(p,this.z.d)
u=this.a
s=this.z.d
u.a6(u.ds,u.bf,s)
s=this.a
u=this.z.f
s=s.be
s.toString
r=u.a
l=u.b
u=u.c
C.b.q(s.a,s.d,r,l,u)
u=this.a
l=this.z.ch
u=u.bg
C.b.H(u.a,u.d,l)
break
case C.e:this.O(p,this.z.e)
u=this.a
s=this.z.e
u.a1(u.dt,u.bf,s)
s=this.a
u=this.z.f
s=s.be
s.toString
r=u.a
l=u.b
u=u.c
C.b.q(s.a,s.d,r,l,u)
u=this.a
l=this.z.ch
u=u.bg
C.b.H(u.a,u.d,l)
break}if(w.z>0){o=this.dx.e.length
u=this.a.dG
C.b.J(u.a,u.d,o)
k=a.db.gS()
for(u=this.dx.e,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.w)(u),++i){h=u[i]
r=this.a.c9
if(j>=r.length)return H.h(r,j)
g=r[j]
r=k.cs(h.a)
l=r.a
f=r.b
e=r.c
e=r.I(0,Math.sqrt(l*l+f*f+e*e))
f=g.b
l=e.a
r=e.b
e=e.c
C.b.q(f.a,f.d,l,r,e)
e=h.c
r=g.c
C.b.q(r.a,r.d,e.a,e.b,e.c);++j}}if(w.Q>0){o=this.dx.f.length
u=this.a.dH
C.b.J(u.a,u.d,o)
k=a.db.gS()
for(u=this.dx.f,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.w)(u),++i){h=u[i]
r=this.a.ca
if(j>=r.length)return H.h(r,j)
g=r[j]
r=h.gaW(h)
l=g.b
f=r.gcu(r)
e=r.gcv(r)
r=r.gcw(r)
C.b.q(l.a,l.d,f,e,r)
r=k.aY(h.gaW(h))
e=g.c
C.b.q(e.a,e.d,r.a,r.b,r.c)
r=h.gam(h)
e=g.d
f=r.gbt()
l=r.gaZ()
r=r.gb8()
C.b.q(e.a,e.d,f,l,r)
r=h.gbY()
l=g.e
C.b.H(l.a,l.d,r)
r=h.gbZ()
l=g.f
C.b.H(l.a,l.d,r)
r=h.gc_()
l=g.r
C.b.H(l.a,l.d,r);++j}}if(w.ch>0){o=this.dx.r.length
u=this.a.dI
C.b.J(u.a,u.d,o)
k=a.db.gS()
for(u=this.dx.r,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.w)(u),++i){h=u[i]
r=this.a.cb
if(j>=r.length)return H.h(r,j)
g=r[j]
r=h.gaW(h)
l=g.b
f=r.gcu(r)
e=r.gcv(r)
r=r.gcw(r)
C.b.q(l.a,l.d,f,e,r)
r=h.gc7(h).jW()
e=g.c
f=r.gaC(r)
l=r.gaD(r)
r=r.gaE()
C.b.q(e.a,e.d,f,l,r)
r=k.aY(h.gaW(h))
l=g.d
C.b.q(l.a,l.d,r.a,r.b,r.c)
r=h.gam(h)
l=g.e
f=r.gbt()
e=r.gaZ()
r=r.gb8()
C.b.q(l.a,l.d,f,e,r)
r=h.gjU()
e=g.f
C.b.H(e.a,e.d,r)
r=h.gjS()
e=g.r
C.b.H(e.a,e.d,r)
r=h.gbY()
e=g.x
C.b.H(e.a,e.d,r)
r=h.gbZ()
e=g.y
C.b.H(e.a,e.d,r)
r=h.gc_()
e=g.z
C.b.H(e.a,e.d,r);++j}}if(w.cx>0){o=this.dx.x.length
u=this.a.dJ
C.b.J(u.a,u.d,o)
k=a.db.gS()
for(u=this.dx.x,s=u.length,r=[z],j=0,i=0;i<u.length;u.length===s||(0,H.w)(u),++i){h=u[i]
l=this.a.cc
if(j>=l.length)return H.h(l,j)
g=l[j]
l=h.gaX()
H.j(p,"$isb",r,"$asb")
if(!C.a.M(p,l)){l.sb4(p.length)
C.a.h(p,l)}l=h.gc7(h)
f=g.d
e=l.gaC(l)
d=l.gaD(l)
l=l.gaE()
C.b.q(f.a,f.d,e,d,l)
l=h.gjo()
d=g.b
e=l.gaC(l)
f=l.gaD(l)
l=l.gaE()
C.b.q(d.a,d.d,e,f,l)
l=h.gja(h)
f=g.c
e=l.gaC(l)
d=l.gaD(l)
l=l.gaE()
C.b.q(f.a,f.d,e,d,l)
l=k.cs(h.gc7(h))
d=l.a
e=l.b
f=l.c
f=l.I(0,Math.sqrt(d*d+e*e+f*f))
e=g.e
d=f.a
l=f.b
f=f.c
C.b.q(e.a,e.d,d,l,f)
f=h.gam(h)
l=g.f
d=f.gbt()
e=f.gaZ()
f=f.gb8()
C.b.q(l.a,l.d,d,e,f)
f=h.gaX()
l=f.gck(f)
if(!l){l=g.x
C.b.J(l.a,l.d,1)}else{l=g.r
e=f.gft()
d=l.a
l=l.d
if(!e)C.b.J(d,l,0)
else C.b.J(d,l,f.gb4())
l=g.x
C.b.J(l.a,l.d,0)}++j}}if(w.cy>0){o=this.dx.y.length
u=this.a.dK
C.b.J(u.a,u.d,o)
k=a.db.gS()
for(u=this.dx.y,s=u.length,r=[P.v],l=[z],j=0,i=0;i<u.length;u.length===s||(0,H.w)(u),++i){h=u[i]
f=this.a.cd
if(j>=f.length)return H.h(f,j)
g=f[j]
f=h.gaX()
H.j(p,"$isb",l,"$asb")
if(!C.a.M(p,f)){f.sb4(p.length)
C.a.h(p,f)}c=k.V(0,h.gS())
f=h.gS()
e=$.bj
if(e==null){e=new V.aK(0,0,0)
$.bj=e}e=f.aY(e)
f=g.b
d=e.gcu(e)
b=e.gcv(e)
e=e.gcw(e)
C.b.q(f.a,f.d,d,b,e)
f=$.bj
if(f==null){f=new V.aK(0,0,0)
$.bj=f}f=c.aY(f)
e=g.c
C.b.q(e.a,e.d,f.a,f.b,f.c)
f=c.dN()
e=g.d
m=new Float32Array(H.bu(H.j(new V.e8(f.a,f.b,f.c,f.e,f.f,f.r,f.y,f.z,f.Q).a4(0,!0),"$isb",r,"$asb")))
C.b.e2(e.a,e.d,!1,m)
e=h.gam(h)
f=g.e
d=e.gbt()
b=e.gaZ()
e=e.gb8()
C.b.q(f.a,f.d,d,b,e)
e=h.gaX()
f=e.gck(e)
if(!f){f=g.r
C.b.J(f.a,f.d,1)}else{f=g.f
d=e.gck(e)
b=f.a
f=f.d
if(!d)C.b.J(b,f,0)
else C.b.J(b,f,e.gjV(e))
f=g.r
C.b.J(f.a,f.d,0)}f=h.gbY()
e=g.x
C.b.H(e.a,e.d,f)
f=h.gbZ()
e=g.y
C.b.H(e.a,e.d,f)
f=h.gc_()
e=g.z
C.b.H(e.a,e.d,f);++j}}if(w.db>0){o=this.dx.z.length
u=this.a.dL
C.b.J(u.a,u.d,o)
k=a.db.gS()
for(u=this.dx.z,s=u.length,z=[z],j=0,i=0;i<u.length;u.length===s||(0,H.w)(u),++i){h=u[i]
r=this.a.ce
if(j>=r.length)return H.h(r,j)
g=r[j]
r=h.gaX()
H.j(p,"$isb",z,"$asb")
if(!C.a.M(p,r)){r.sb4(p.length)
C.a.h(p,r)}r=h.gaW(h)
l=g.b
f=r.gcu(r)
e=r.gcv(r)
r=r.gcw(r)
C.b.q(l.a,l.d,f,e,r)
r=h.gc7(h)
e=g.c
f=r.gaC(r)
l=r.gaD(r)
r=r.gaE()
C.b.q(e.a,e.d,f,l,r)
r=h.gjo()
l=g.d
f=r.gaC(r)
e=r.gaD(r)
r=r.gaE()
C.b.q(l.a,l.d,f,e,r)
r=h.gja(h)
e=g.e
f=r.gaC(r)
l=r.gaD(r)
r=r.gaE()
C.b.q(e.a,e.d,f,l,r)
r=k.aY(h.gaW(h))
l=g.f
C.b.q(l.a,l.d,r.a,r.b,r.c)
r=h.gaX()
l=r.gck(r)
if(!l){r=g.x
C.b.J(r.a,r.d,1)}else{l=g.r
f=r.gft()
e=l.a
l=l.d
if(!f)C.b.J(e,l,0)
else C.b.J(e,l,r.gb4())
r=g.x
C.b.J(r.a,r.d,0)}r=h.gam(h)
l=g.y
f=r.gbt()
e=r.gaZ()
r=r.gb8()
C.b.q(l.a,l.d,f,e,r)
r=h.gk5()
e=g.z
C.b.H(e.a,e.d,r)
r=h.gk6()
e=g.Q
C.b.H(e.a,e.d,r)
r=h.gbY()
e=g.ch
C.b.H(e.a,e.d,r)
r=h.gbZ()
e=g.cx
C.b.H(e.a,e.d,r)
r=h.gc_()
e=g.cy
C.b.H(e.a,e.d,r);++j}}}switch(w.f){case C.c:break
case C.f:break
case C.d:this.O(p,this.Q.d)
z=this.a
u=this.Q.d
z.a6(z.du,z.bh,u)
break
case C.e:this.O(p,this.Q.e)
z=this.a
u=this.Q.e
z.a1(z.dv,z.bh,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db.gS().dN()
a.Q=u}z=z.id
z.toString
z.ab(u.a4(0,!0))}if(w.dy){this.O(p,this.ch)
z=this.a
u=this.ch
z.a1(z.dw,z.dz,u)
switch(w.r){case C.c:break
case C.f:z=this.a
u=this.cx.f
z=z.bi
z.toString
s=u.a
r=u.b
u=u.c
C.b.q(z.a,z.d,s,r,u)
break
case C.d:this.O(p,this.cx.d)
z=this.a
u=this.cx.d
z.a6(z.dA,z.bj,u)
u=this.a
z=this.cx.f
u=u.bi
u.toString
s=z.a
r=z.b
z=z.c
C.b.q(u.a,u.d,s,r,z)
break
case C.e:this.O(p,this.cx.e)
z=this.a
u=this.cx.e
z.a1(z.dB,z.bj,u)
u=this.a
z=this.cx.f
u=u.bi
u.toString
s=z.a
r=z.b
z=z.c
C.b.q(u.a,u.d,s,r,z)
break}switch(w.x){case C.c:break
case C.f:z=this.a
u=this.cy.f
z=z.bl
z.toString
s=u.a
r=u.b
u=u.c
C.b.q(z.a,z.d,s,r,u)
u=this.a
r=this.cy.ch
u=u.bk
C.b.H(u.a,u.d,r)
break
case C.d:this.O(p,this.cy.d)
z=this.a
u=this.cy.d
z.a6(z.dC,z.bm,u)
u=this.a
z=this.cy.f
u=u.bl
u.toString
s=z.a
r=z.b
z=z.c
C.b.q(u.a,u.d,s,r,z)
z=this.a
r=this.cy.ch
z=z.bk
C.b.H(z.a,z.d,r)
break
case C.e:this.O(p,this.cy.e)
z=this.a
u=this.cy.e
z.a1(z.dD,z.bm,u)
u=this.a
z=this.cy.f
u=u.bl
u.toString
s=z.a
r=z.b
z=z.c
C.b.q(u.a,u.d,s,r,z)
z=this.a
r=this.cy.ch
z=z.bk
C.b.H(z.a,z.d,r)
break}}z=w.y
u=z!==C.c
if(u){switch(z){case C.c:break
case C.f:z=this.a
s=this.db.f
z=z.bn
C.b.H(z.a,z.d,s)
break
case C.d:this.O(p,this.db.d)
z=this.a
s=this.db.d
z.a6(z.dE,z.bo,s)
s=this.a
z=this.db.f
s=s.bn
C.b.H(s.a,s.d,z)
break
case C.e:this.O(p,this.db.e)
z=this.a
s=this.db.e
z.a1(z.dF,z.bo,s)
s=this.a
z=this.db.f
s=s.bn
C.b.H(s.a,s.d,z)
break}C.b.c8(t,3042)
C.b.i2(t,770,771)}for(n=0;n<p.length;++n){z=p[n]
if(!z.c&&z.d){z.c=!0
C.b.da(t,33984+z.a)
C.b.aA(t,3553,z.b)}}z=a0.e
z.c0(a)
z.aH(a)
z.jn(a)
if(u)C.b.ir(t,3042)
for(n=0;n<p.length;++n){z=p[n]
if(z.c){z.c=!1
C.b.da(t,33984+z.a)
C.b.aA(t,3553,null)}}z=this.a
z.toString
C.b.e4(t,null)
z.x.is()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cR().a8}},hW:{"^":"cK;0f,a,b,0c,0d,0e",
hb:function(a){var z,y
z=this.f
if(!$.l.$2(z,a)){y=this.f
this.f=a
z=new D.M(this.b,y,a,this,[P.v])
z.b=!0
this.a.T(z)}},
ax:function(){this.cF()
this.hb(1)}},cK:{"^":"a;",
T:[function(a){this.a.T(H.i(a,"$isA"))},function(){return this.T(null)},"eT","$1","$0","gb2",0,2,0],
ax:["cF",function(){}],
hd:function(a){var z,y
z=this.d
if(z==null?a!=null:z!==a){if(z!=null)z.gB().C(0,this.gb2())
y=this.d
this.d=a
if(a!=null)a.gB().h(0,this.gb2())
z=new D.M(this.b+".texture2D",y,this.d,this,[T.eB])
z.b=!0
this.a.T(z)}},
he:function(a){},
sbv:function(a){var z=this.c
if(z!==C.d){if(z===C.c)this.ax()
this.c=C.d
this.he(null)
z=this.a
z.a=null
z.T(null)}this.hd(a)}},hX:{"^":"cK;a,b,0c,0d,0e"},aT:{"^":"cK;0f,a,b,0c,0d,0e",
d5:function(a){var z,y
if(!J.O(this.f,a)){z=this.f
this.f=a
y=new D.M(this.b+".color",z,a,this,[V.X])
y.b=!0
this.a.T(y)}},
ax:["bE",function(){this.cF()
this.d5(new V.X(1,1,1))}],
sam:function(a,b){var z
if(this.c===C.c){this.c=C.f
this.ax()
z=this.a
z.a=null
z.T(null)}this.d5(b)}},hZ:{"^":"aT;0ch,0f,a,b,0c,0d,0e",
hc:function(a){var z,y
z=this.ch
if(!$.l.$2(z,a)){y=this.ch
this.ch=a
z=new D.M(this.b+".refraction",y,a,this,[P.v])
z.b=!0
this.a.T(z)}},
ax:function(){this.bE()
this.hc(1)}},i_:{"^":"aT;0ch,0f,a,b,0c,0d,0e",
bV:function(a){var z,y
z=this.ch
if(!$.l.$2(z,a)){y=this.ch
this.ch=a
z=new D.M(this.b+".shininess",y,a,this,[P.v])
z.b=!0
this.a.T(z)}},
ax:function(){this.bE()
this.bV(100)}},c8:{"^":"a;"}}],["","",,T,{"^":"",cW:{"^":"cu;"},eB:{"^":"cW;"},j_:{"^":"eB;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gB:function(){var z=this.y
if(z==null){z=D.a7()
this.y=z}return z}},j0:{"^":"a;a,0b,0c,0d,0e",
iK:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
C.b.aA(z,3553,y)
C.b.bu(z,3553,10242,33071)
C.b.bu(z,3553,10243,33071)
C.b.bu(z,3553,10241,9729)
C.b.bu(z,3553,10240,9729)
C.b.aA(z,3553,null);++this.d
x=document.createElement("img")
x.src=a
w=new T.j_()
w.a=0
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
z=W.Y
W.R(x,"load",H.k(new T.j1(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
cj:function(a){return this.iK(a,!1,!1,!1,!1)},
h6:function(a,b,c){var z,y,x,w
b=V.ds(b,2)
z=V.ds(a.width,2)
y=V.ds(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cy(null,null)
x.width=z
x.height=y
w=H.i(C.p.ed(x,"2d"),"$iscz")
w.imageSmoothingEnabled=!1;(w&&C.y).iu(w,a,0,0,x.width,x.height)
return P.kL(C.y.fl(w,0,0,x.width,x.height))}}},j1:{"^":"t:20;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.h6(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
C.b.aA(y,3553,this.e)
C.b.j_(y,37440,this.f?1:0)
C.b.jf(y,3553,0,6408,6408,5121,w)
if(this.r)C.b.e8(y,3553)
C.b.aA(y,3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.iv()}++x.e}}}],["","",,V,{"^":"",b9:{"^":"a;",
aG:function(a){return!0},
i:function(a){return"all"},
$isan:1},an:{"^":"a;"},e7:{"^":"a;0a",
sZ:function(a){this.a=H.j(a,"$isb",[V.an],"$asb")},
aG:["ex",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x)if(z[x].aG(a))return!0
return!1}],
i:["cE",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.w)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isan:1},ah:{"^":"e7;0a",
aG:function(a){return!this.ex(a)},
i:function(a){return"!["+this.cE(0)+"]"}},ir:{"^":"a;0a,0b",
aG:function(a){return this.a<=a&&this.b>=a},
i:function(a){var z,y
z=H.cO(this.a)
y=H.cO(this.b)
return z+".."+y},
$isan:1,
p:{
I:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.f(P.o("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.i.at(a,0)
y=C.i.at(b,0)
x=new V.ir()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},iE:{"^":"a;0a",
sha:function(a){this.a=H.j(a,"$isa8",[P.x,P.H],"$asa8")},
eC:function(a){var z,y
if(a.a.length<=0)throw H.f(P.o("May not create a SetMatcher with zero characters."))
z=new H.aS(0,0,[P.x,P.H])
for(y=new H.cJ(a,a.gn(a),0,[H.W(a,"P",0)]);y.A();)z.R(0,y.d,!0)
this.sha(z)},
aG:function(a){return this.a.dj(a)},
i:function(a){var z=this.a
return P.cU(new H.e3(z,[H.u(z,0)]),0,null)},
$isan:1,
p:{
r:function(a){var z=new V.iE()
z.eC(a)
return z}}},cR:{"^":"a;a,b,0c,0d",
shu:function(a){this.c=H.j(a,"$isb",[V.cZ],"$asb")},
k:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.cZ(this.a.j(0,b))
w.sZ(H.c([],[V.an]))
w.c=!1
C.a.h(this.c,w)
return w},
ix:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x){w=z[x]
if(w.aG(a))return w}return},
i:function(a){return this.b}},eI:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.du(this.b,"\n","\\n")
y=H.du(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},cY:{"^":"a;a,b,0c",
sh2:function(a){var z=P.n
this.c=H.j(a,"$isa8",[z,z],"$asa8")},
ao:function(a,b,c){var z,y,x
H.j(c,"$isb",[P.n],"$asb")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.w)(c),++y){x=c[y]
this.c.R(0,x,b)}},
i:function(a){return this.b}},j6:{"^":"a;0a,0b,0c",
sho:function(a){this.a=H.j(a,"$isa8",[P.n,V.cR],"$asa8")},
sht:function(a){this.b=H.j(a,"$isa8",[P.n,V.cY],"$asa8")},
j:function(a,b){var z=this.a.l(0,b)
if(z==null){z=new V.cR(this,b)
z.shu(H.c([],[V.cZ]))
z.d=null
this.a.R(0,b,z)}return z},
G:function(a){var z,y
z=this.b.l(0,a)
if(z==null){z=new V.cY(this,a)
y=P.n
z.sh2(new H.aS(0,0,[y,y]))
this.b.R(0,a,z)}return z},
e1:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.eI])
y=this.c
x=[P.x]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.at(a,t)
r=y.ix(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cU(w,0,null)
throw H.f(P.o("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cU(w,0,null)
p=y.d
o=p.c.l(0,q)
u=new V.eI(o==null?p.b:o,q,t)}++t}}},
p:{
c9:function(){var z,y
z=new V.j6()
y=P.n
z.sho(new H.aS(0,0,[y,V.cR]))
z.sht(new H.aS(0,0,[y,V.cY]))
z.c=null
return z}}},cZ:{"^":"e7;b,0c,0a",
i:function(a){return this.b.b+": "+this.cE(0)}}}],["","",,X,{"^":"",dG:{"^":"a;",$isax:1},ho:{"^":"ey;0a,0b,0c,0d,0e,0f,0r,0x",
gB:function(){var z=this.x
if(z==null){z=D.a7()
this.x=z}return z}},ib:{"^":"a;0a,0b,0c,0d,0e,0f",
gB:function(){var z=this.f
if(z==null){z=D.a7()
this.f=z}return z},
aK:[function(a){var z
H.i(a,"$isA")
z=this.f
if(!(z==null))z.P(a)},function(){return this.aK(null)},"jt","$1","$0","gcI",0,2,0],
saT:function(a){var z,y
if(!J.O(this.b,a)){z=this.b
if(z!=null)z.gB().C(0,this.gcI())
y=this.b
this.b=a
if(a!=null)a.gB().h(0,this.gcI())
z=new D.M("mover",y,this.b,this,[U.bH])
z.b=!0
this.aK(z)}},
$isax:1,
$isdG:1},ey:{"^":"a;"}}],["","",,V,{"^":"",
l9:function(a){P.j5(C.K,new V.la(a))},
aG:{"^":"a;0d",
sbL:function(a){this.d=H.j(a,"$isb",[[P.b,W.aI]],"$asb")},
b1:function(a){this.b=new P.hu(C.M)
this.c=null
this.sbL(H.c([],[[P.b,W.aI]]))},
D:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.c([],[W.aI]))
y=a.split("\n")
for(z=y.length,x=[W.aI],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.c([],x))
t=document.createElement("div")
t.className="codePart"
H.C(u)
s=this.b.f7(u,0,u.length)
r=s==null?u:s
C.j.en(t,H.du(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gbq(this.d),t)}},
dS:function(a){var z,y,x,w
H.j(a,"$isb",[P.n],"$asb")
this.sbL(H.c([],[[P.b,W.aI]]))
z=C.a.k(a,"\n")
y=this.c
if(y==null){y=this.b9()
this.c=y}for(y=y.e1(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)this.bs(y[w])}},
la:{"^":"t:35;a",
$1:function(a){H.i(a,"$isaW")
P.dt(C.k.e0(this.a.giC(),2)+" fps")}},
h1:{"^":"aG;a,0b,0c,0d",
bs:function(a){switch(a.a){case"Class":this.D(a.b,"#551")
break
case"Comment":this.D(a.b,"#777")
break
case"Id":this.D(a.b,"#111")
break
case"Num":this.D(a.b,"#191")
break
case"Reserved":this.D(a.b,"#119")
break
case"String":this.D(a.b,"#171")
break
case"Symbol":this.D(a.b,"#616")
break
case"Type":this.D(a.b,"#B11")
break
case"Whitespace":this.D(a.b,"#111")
break}},
b9:function(){var z,y,x,w
z=V.c9()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.r(new H.q("_"))
C.a.h(y.a,x)
x=V.I("a","z")
C.a.h(y.a,x)
x=V.I("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.r(new H.q("_"))
C.a.h(x.a,y)
y=V.I("0","9")
C.a.h(x.a,y)
y=V.I("a","z")
C.a.h(x.a,y)
y=V.I("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Int")
x=V.I("0","9")
C.a.h(y.a,x)
x=z.j(0,"Int").k(0,"Int")
y=V.I("0","9")
C.a.h(x.a,y)
y=z.j(0,"Int").k(0,"FloatDot")
x=V.r(new H.q("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").k(0,"Float")
y=V.I("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").k(0,"Float")
x=V.I("0","9")
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
C.a.h(z.j(0,"OpenDoubleStr").k(0,"OpenDoubleStr").a,new V.b9())
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
C.a.h(z.j(0,"OpenSingleStr").k(0,"OpenSingleStr").a,new V.b9())
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
x=new V.ah()
w=[V.an]
x.sZ(H.c([],w))
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
x=new V.ah()
x.sZ(H.c([],w))
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
x.d=x.a.G("Num")
x=z.j(0,"Float")
x.d=x.a.G("Num")
x=z.j(0,"Sym")
x.d=x.a.G("Symbol")
x=z.j(0,"CloseDoubleStr")
x.d=x.a.G("String")
x=z.j(0,"CloseSingleStr")
x.d=x.a.G("String")
x=z.j(0,"EndComment")
x.d=x.a.G("Comment")
x=z.j(0,"Whitespace")
x.d=x.a.G("Whitespace")
x=z.j(0,"Id")
y=x.a.G("Id")
x.d=y
x=[P.n]
y.ao(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.ao(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.ao(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
hp:{"^":"aG;a,0b,0c,0d",
bs:function(a){switch(a.a){case"Builtin":this.D(a.b,"#411")
break
case"Comment":this.D(a.b,"#777")
break
case"Id":this.D(a.b,"#111")
break
case"Num":this.D(a.b,"#191")
break
case"Preprocess":this.D(a.b,"#737")
break
case"Reserved":this.D(a.b,"#119")
break
case"Symbol":this.D(a.b,"#611")
break
case"Type":this.D(a.b,"#171")
break
case"Whitespace":this.D(a.b,"#111")
break}},
b9:function(){var z,y,x,w
z=V.c9()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.r(new H.q("_"))
C.a.h(y.a,x)
x=V.I("a","z")
C.a.h(y.a,x)
x=V.I("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.r(new H.q("_"))
C.a.h(x.a,y)
y=V.I("0","9")
C.a.h(x.a,y)
y=V.I("a","z")
C.a.h(x.a,y)
y=V.I("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Int")
x=V.I("0","9")
C.a.h(y.a,x)
x=z.j(0,"Int").k(0,"Int")
y=V.I("0","9")
C.a.h(x.a,y)
y=z.j(0,"Int").k(0,"FloatDot")
x=V.r(new H.q("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").k(0,"Float")
y=V.I("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").k(0,"Float")
x=V.I("0","9")
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
C.a.h(z.j(0,"Slash").k(0,"Sym").a,new V.b9())
x=z.j(0,"Comment").k(0,"EndComment")
y=V.r(new H.q("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").k(0,"Comment")
x=new V.ah()
w=[V.an]
x.sZ(H.c([],w))
C.a.h(y.a,x)
y=V.r(new H.q("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Preprocess")
x=V.r(new H.q("#"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").k(0,"Preprocess")
y=new V.ah()
y.sZ(H.c([],w))
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
y.d=y.a.G("Num")
y=z.j(0,"Float")
y.d=y.a.G("Num")
y=z.j(0,"Sym")
y.d=y.a.G("Symbol")
y=z.j(0,"EndComment")
y.d=y.a.G("Comment")
y=z.j(0,"EndPreprocess")
y.d=y.a.G("Preprocess")
y=z.j(0,"Whitespace")
y.d=y.a.G("Whitespace")
y=z.j(0,"Id")
x=y.a.G("Id")
y.d=x
y=[P.n]
x.ao(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.ao(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.ao(0,"Builtin",H.c(["gl_FragColor","gl_Position"],y))
return z}},
hq:{"^":"aG;a,0b,0c,0d",
bs:function(a){switch(a.a){case"Attr":this.D(a.b,"#911")
this.D("=","#111")
break
case"Id":this.D(a.b,"#111")
break
case"Other":this.D(a.b,"#111")
break
case"Reserved":this.D(a.b,"#119")
break
case"String":this.D(a.b,"#171")
break
case"Symbol":this.D(a.b,"#616")
break}},
b9:function(){var z,y,x
z=V.c9()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.r(new H.q("_"))
C.a.h(y.a,x)
x=V.I("a","z")
C.a.h(y.a,x)
x=V.I("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.r(new H.q("_"))
C.a.h(x.a,y)
y=V.I("0","9")
C.a.h(x.a,y)
y=V.I("a","z")
C.a.h(x.a,y)
y=V.I("A","Z")
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
C.a.h(z.j(0,"OpenStr").k(0,"OpenStr").a,new V.b9())
C.a.h(z.j(0,"Start").k(0,"Other").a,new V.b9())
y=z.j(0,"Other").k(0,"Other")
x=new V.ah()
x.sZ(H.c([],[V.an]))
C.a.h(y.a,x)
y=V.r(new H.q('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.I("a","z")
C.a.h(x.a,y)
y=V.I("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Sym")
y.d=y.a.G("Symbol")
y=z.j(0,"CloseStr")
y.d=y.a.G("String")
y=z.j(0,"Id")
x=y.a.G("Id")
y.d=x
x.ao(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.n]))
x=z.j(0,"Attr")
x.d=x.a.G("Attr")
x=z.j(0,"Other")
x.d=x.a.G("Other")
return z}},
id:{"^":"aG;a,0b,0c,0d",
dS:function(a){H.j(a,"$isb",[P.n],"$asb")
this.sbL(H.c([],[[P.b,W.aI]]))
this.D(C.a.k(a,"\n"),"#111")},
bs:function(a){},
b9:function(){return}},
iK:{"^":"a;0a,0b",
eE:function(a,b){var z,y,x,w,v,u,t
z=document
y=z.body
x=z.createElement("div")
x.className="scrollTop";(y&&C.n).w(y,x)
w=z.createElement("div")
w.className="scrollPage"
C.n.w(y,w)
v=z.createElement("div")
v.className="pageCenter"
C.j.w(w,v)
if(a.length!==0){z.title=a
u=z.createElement("div")
u.className="pageTitle"
u.textContent=a
C.j.w(v,u)}t=z.createElement("div")
this.a=t
C.j.w(v,t)
this.b=null
t=W.Y
W.R(z,"scroll",H.k(new V.iN(x),{func:1,ret:-1,args:[t]}),!1,t)},
dd:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.j(a,"$isb",[P.n],"$asb")
this.hj()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.e1(C.a.iG(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.w)(x),++v){u=x[v]
switch(u.a){case"Bold":t=z.createElement("div")
t.className="boldPar"
t.textContent=u.b
C.j.w(y,t)
break
case"Italic":t=z.createElement("div")
t.className="italicPar"
t.textContent=u.b
C.j.w(y,t)
break
case"Code":t=z.createElement("div")
t.className="codePar"
t.textContent=u.b
C.j.w(y,t)
break
case"Link":s=u.b
if(H.fE(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.h(r,1)
q.href=H.C(r[1])
q.textContent=H.C(r[0])
C.j.w(y,q)}else{p=P.fl(C.C,s,C.x,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+p
q.textContent=s
C.j.w(y,q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
C.j.w(y,t)
break}}C.j.w(this.a,y)},
ec:function(a){var z,y,x,w
z=new V.h1("dart")
z.b1("dart")
y=new V.hp("glsl")
y.b1("glsl")
x=new V.hq("html")
x.b1("html")
w=C.a.iz(H.c([z,y,x],[V.aG]),new V.iO(a))
if(w!=null)return w
z=new V.id("plain")
z.b1("plain")
return z},
dc:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.j(a2,"$isb",[P.n],"$asb")
z=H.c([],[P.x])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.dp(w).bC(w,"+")){C.a.R(a2,x,C.i.b_(w,1))
C.a.h(z,1)
y=!0}else if(C.i.bC(w,"-")){C.a.R(a2,x,C.i.b_(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.ec(a0)
v.dS(a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
C.j.w(t,s)
C.j.w(this.a,t)
r=P.fl(C.C,a,C.x,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.dy(null)
n.href="#"+r
n.textContent=a
C.j.w(o,n)
C.v.w(p,o)
C.m.w(q,p)
C.o.w(s,q)
if(y)for(m=a1,l=m,x=0;k=v.d,x<k.length;++x){w=k[x]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums codeLineLight"
h=u.createElement("td")
h.className="codeLineNums"
if(x>=z.length)return H.h(z,x)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.w)(w),++e)C.v.w(f,w[e])
C.m.w(j,i)
C.m.w(j,h)
C.m.w(j,f)
C.o.w(s,j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.w)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gL(w);b.A();)C.v.w(h,b.gE())
C.m.w(j,i)
C.m.w(j,h)
C.o.w(s,j)}},
hj:function(){var z,y,x,w
if(this.b!=null)return
z=V.c9()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Bold")
x=V.r(new H.q("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Bold").k(0,"Bold")
x=new V.ah()
w=[V.an]
x.sZ(H.c([],w))
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
x=new V.ah()
x.sZ(H.c([],w))
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
x=new V.ah()
x.sZ(H.c([],w))
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
y=new V.ah()
y.sZ(H.c([],w))
C.a.h(x.a,y)
x=V.r(new H.q("|]"))
C.a.h(y.a,x)
x=z.j(0,"LinkTail").k(0,"LinkEnd")
y=V.r(new H.q("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkTail").k(0,"LinkTail")
y=new V.ah()
y.sZ(H.c([],w))
C.a.h(x.a,y)
x=V.r(new H.q("|]"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Start").k(0,"Other").a,new V.b9())
x=z.j(0,"Other").k(0,"Other")
y=new V.ah()
y.sZ(H.c([],w))
C.a.h(x.a,y)
x=V.r(new H.q("*_`["))
C.a.h(y.a,x)
x=z.j(0,"BoldEnd")
x.d=x.a.G("Bold")
x=z.j(0,"ItalicEnd")
x.d=x.a.G("Italic")
x=z.j(0,"CodeEnd")
x.d=x.a.G("Code")
x=z.j(0,"LinkEnd")
x.d=x.a.G("Link")
x=z.j(0,"Other")
x.d=x.a.G("Other")
this.b=z},
p:{
iL:function(a,b){var z=new V.iK()
z.eE(a,!0)
return z}}},
iN:{"^":"t:20;a",
$1:function(a){P.eG(C.q,new V.iM(this.a))}},
iM:{"^":"t:1;a",
$0:function(){var z,y,x
z=C.k.aa(document.documentElement.scrollTop)
y=this.a.style
x=H.e(-0.01*z)+"px"
y.top=x}},
iO:{"^":"t:36;a",
$1:function(a){return H.i(a,"$isaG").a===this.a}}}],["","",,F,{"^":"",
fA:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z=V.iL("Test 005",!0)
y=W.cy(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
C.j.w(z.a,y)
x=[P.n]
z.dd(H.c(["A test of the Material Lighting shader with 2D textures and directional ","lighting. This test has texturing for emission, ambient, diffuse, and ","specular. The same texture is used for ambient and diffuse. ","The emission texture makes the lights on the panel glow. ","The specular texture makes specific parts shiny and other parts not."],x))
z.dd(H.c(["\xab[Back to Tests|../]"],x))
w=C.z.ee(document,"testCanvas")
if(w==null)H.p(P.o("Failed to find an element with the identifier, testCanvas."))
v=E.j3(w,!0,!0,!0,!1)
u=new E.al()
u.a=""
u.b=!0
x=E.al
u.sf5(0,O.cB(x))
u.y.bB(u.giN(),u.giP())
u.z=null
u.Q=null
u.ch=null
u.cx=null
u.cy=null
u.db=null
u.dx=null
u.dy=null
u.fr=null
u.fx=null
u.scC(0,null)
u.saT(null)
t=F.et()
F.bs(t,null,null,1,1,1,0,0,1)
F.bs(t,null,null,1,1,0,1,0,3)
F.bs(t,null,null,1,1,0,0,1,2)
F.bs(t,null,null,1,1,-1,0,0,0)
F.bs(t,null,null,1,1,0,-1,0,0)
F.bs(t,null,null,1,1,0,0,-1,3)
t.aB()
t.iM(new F.jx(),new F.i8())
u.scC(0,t)
s=new U.ep()
s.a=0
s.b=0
s.c=0
s.d=0
s.e=0
s.f=0
s.r=0
s.se5(0)
s.sdT(0)
s.sdX(0)
r=s.d
if(!$.l.$2(r,0.1)){q=s.d
s.d=0.1
r=new D.M("deltaYaw",q,0.1,s,[P.v])
r.b=!0
s.aw(r)}r=s.e
if(!$.l.$2(r,0.21)){q=s.e
s.e=0.21
r=new D.M("deltaPitch",q,0.21,s,[P.v])
r.b=!0
s.aw(r)}r=s.f
if(!$.l.$2(r,0.32)){q=s.f
s.f=0.32
r=new D.M("deltaRoll",q,0.32,s,[P.v])
r.b=!0
s.aw(r)}u.saT(s)
p=v.f.cj("../resources/CtrlPnlColor.png")
o=new O.hT()
o.sf1(O.cB(V.a9))
o.e.bB(o.gfw(),o.gfz())
s=new O.aT(o,"emission")
s.c=C.c
s.f=new V.X(0,0,0)
o.f=s
s=new O.aT(o,"ambient")
s.c=C.c
s.f=new V.X(0,0,0)
o.r=s
s=new O.aT(o,"diffuse")
s.c=C.c
s.f=new V.X(0,0,0)
o.x=s
s=new O.aT(o,"invDiffuse")
s.c=C.c
s.f=new V.X(0,0,0)
o.y=s
s=new O.i_(o,"specular")
s.c=C.c
s.f=new V.X(0,0,0)
s.ch=100
o.z=s
s=new O.hX(o,"bump")
s.c=C.c
o.Q=s
o.ch=null
s=new O.aT(o,"reflect")
s.c=C.c
s.f=new V.X(0,0,0)
o.cx=s
s=new O.hZ(o,"refract")
s.c=C.c
s.f=new V.X(0,0,0)
s.ch=1
o.cy=s
s=new O.hW(o,"alpha")
s.c=C.c
s.f=1
o.db=s
s=new D.hF()
s.cG(D.U)
s.sfb(H.c([],[D.bW]))
s.sfW(H.c([],[D.eg]))
s.shn(H.c([],[D.eu]))
s.shv(H.c([],[D.eC]))
s.shw(H.c([],[D.eD]))
s.shx(H.c([],[D.eE]))
s.Q=null
s.ch=null
s.cB(s.gfv(),s.gfR(),s.gfS())
o.dx=s
r=s.Q
if(r==null){r=D.a7()
s.Q=r
s=r}else s=r
s.h(0,o.gh4())
s=o.dx
r=s.ch
if(r==null){r=D.a7()
s.ch=r
s=r}else s=r
s.h(0,o.gb2())
o.dy=null
s=o.dx
n=V.f_()
r=U.dK(V.e9(V.ei(),n,new V.N(1,-1,-3)))
m=new V.X(1,1,1)
l=new D.bW()
l.c=new V.X(1,1,1)
l.a=V.jr()
q=l.b
l.b=r
r.gB().h(0,l.geK())
r=new D.M("mover",q,l.b,l,[U.bH])
r.b=!0
l.ar(r)
if(!l.c.u(0,m)){q=l.c
l.c=m
r=new D.M("color",q,m,l,[V.X])
r.b=!0
l.ar(r)}s.h(0,l)
o.f.sbv(v.f.cj("../resources/CtrlPnlEmission.png"))
s=o.r
s.sam(0,new V.X(0.2,0.2,0.2))
s=o.x
s.sam(0,new V.X(0.8,0.8,0.8))
o.r.sbv(p)
o.x.sbv(p)
o.z.sbv(v.f.cj("../resources/CtrlPnlSpecular.png"))
s=o.z
if(s.c===C.c){s.c=C.f
s.bE()
s.bV(100)
r=s.a
r.a=null
r.T(null)}s.bV(10)
s=new M.he()
s.seL(0,O.cB(x))
s.d.bB(s.gfB(),s.gfC())
s.e=null
s.f=null
s.r=null
s.x=null
k=new X.ib()
k.c=1.0471975511965976
k.d=0.1
k.e=2000
k.saT(null)
x=k.c
if(!$.l.$2(x,1.0471975511965976)){q=k.c
k.c=1.0471975511965976
x=new D.M("fov",q,1.0471975511965976,k,[P.v])
x.b=!0
k.aK(x)}x=k.d
if(!$.l.$2(x,0.1)){q=k.d
k.d=0.1
x=new D.M("near",q,0.1,k,[P.v])
x.b=!0
k.aK(x)}x=k.e
if(!$.l.$2(x,2000)){q=k.e
k.e=2000
x=new D.M("far",q,2000,k,[P.v])
x.b=!0
k.aK(x)}x=s.a
if(x!==k){if(x!=null)x.gB().C(0,s.gac())
q=s.a
s.a=k
k.gB().h(0,s.gac())
x=new D.M("camera",q,s.a,s,[X.dG])
x.b=!0
s.as(x)}j=new X.ho()
x=new V.bT(0,0,0,1)
j.a=x
j.b=!0
j.c=2000
j.d=!0
j.e=0
j.f=!1
x=$.eo
if(x==null){x=V.iv(0,0,1,1)
$.eo=x}j.r=x
x=s.b
if(x!==j){if(x!=null)x.gB().C(0,s.gac())
q=s.b
s.b=j
j.gB().h(0,s.gac())
x=new D.M("target",q,s.b,s,[X.ey])
x.b=!0
s.as(x)}s.sdZ(null)
s.sdZ(o)
s.d.h(0,u)
s.a.saT(U.dK(V.aw(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
x=v.d
if(x!==s){if(x!=null)x.gB().C(0,v.gcH())
v.d=s
s.gB().h(0,v.gcH())
v.eG()}x=v.z
if(x==null){x=D.a7()
v.z=x}s={func:1,ret:-1,args:[D.A]}
r=H.k(new F.l2(z,o),s)
if(x.b==null)x.saM(H.c([],[s]))
x=x.b;(x&&C.a).h(x,r)
V.l9(v)},
l2:{"^":"t:6;a,b",
$1:function(a){var z,y,x,w
H.i(a,"$isA")
z=this.a
y=this.b
x=y.a
w=[P.n]
z.dc("Vertex Shader","glsl",0,H.c((x==null?null:x.c).split("\n"),w))
y=y.a
z.dc("Fragment Shader","glsl",0,H.c((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.K=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.e_.prototype
return J.dZ.prototype}if(typeof a=="string")return J.c3.prototype
if(a==null)return J.e0.prototype
if(typeof a=="boolean")return J.hA.prototype
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bF.prototype
return a}if(a instanceof P.a)return a
return J.ck(a)}
J.cj=function(a){if(typeof a=="string")return J.c3.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bF.prototype
return a}if(a instanceof P.a)return a
return J.ck(a)}
J.dn=function(a){if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bF.prototype
return a}if(a instanceof P.a)return a
return J.ck(a)}
J.kP=function(a){if(typeof a=="number")return J.c2.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cb.prototype
return a}
J.dp=function(a){if(typeof a=="string")return J.c3.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cb.prototype
return a}
J.a1=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bF.prototype
return a}if(a instanceof P.a)return a
return J.ck(a)}
J.O=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.K(a).u(a,b)}
J.fG=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kP(a).bA(a,b)}
J.fH=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.l_(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cj(a).l(a,b)}
J.fI=function(a,b,c,d){return J.a1(a).eY(a,b,c,d)}
J.bQ=function(a,b){return J.a1(a).h_(a,b)}
J.dw=function(a,b){return J.a1(a).w(a,b)}
J.cq=function(a,b,c){return J.cj(a).ia(a,b,c)}
J.cr=function(a,b){return J.dn(a).a_(a,b)}
J.fJ=function(a){return J.a1(a).gi_(a)}
J.bz=function(a){return J.K(a).gU(a)}
J.b8=function(a){return J.dn(a).gL(a)}
J.aP=function(a){return J.cj(a).gn(a)}
J.fK=function(a){return J.a1(a).gj0(a)}
J.fL=function(a){return J.a1(a).gje(a)}
J.cs=function(a,b){return J.a1(a).aI(a,b)}
J.dx=function(a){return J.dn(a).j2(a)}
J.fM=function(a,b,c){return J.dp(a).b0(a,b,c)}
J.fN=function(a){return J.dp(a).jm(a)}
J.a2=function(a){return J.K(a).i(a)}
I.aO=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.n=W.bR.prototype
C.p=W.cx.prototype
C.y=W.cz.prototype
C.j=W.aI.prototype
C.J=W.h6.prototype
C.L=W.hr.prototype
C.z=W.ht.prototype
C.N=J.D.prototype
C.a=J.aR.prototype
C.O=J.dZ.prototype
C.h=J.e_.prototype
C.r=J.e0.prototype
C.k=J.c2.prototype
C.i=J.c3.prototype
C.V=J.bF.prototype
C.Z=W.i5.prototype
C.D=J.ic.prototype
C.E=W.iq.prototype
C.b=P.cP.prototype
C.v=W.iW.prototype
C.o=W.iX.prototype
C.m=W.iY.prototype
C.w=J.cb.prototype
C.F=W.bq.prototype
C.G=W.jF.prototype
C.H=new P.ia()
C.I=new P.jq()
C.l=new P.k9()
C.c=new A.bU(0,"ColorSourceType.None")
C.f=new A.bU(1,"ColorSourceType.Solid")
C.d=new A.bU(2,"ColorSourceType.Texture2D")
C.e=new A.bU(3,"ColorSourceType.TextureCube")
C.q=new P.bb(0)
C.K=new P.bb(5e6)
C.M=new P.hv("element",!0,!1,!1,!1)
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
C.W=H.c(I.aO(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.n])
C.X=H.c(I.aO(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.n])
C.Y=H.c(I.aO([]),[P.n])
C.C=H.c(I.aO([0,0,65498,45055,65535,34815,65534,18431]),[P.x])
C.t=H.c(I.aO(["bind","if","ref","repeat","syntax"]),[P.n])
C.u=H.c(I.aO(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.n])
C.x=new P.jp(!1)
$.ak=0
$.ba=null
$.dB=null
$.de=!1
$.fy=null
$.ft=null
$.fD=null
$.ci=null
$.cm=null
$.dq=null
$.b0=null
$.bv=null
$.bw=null
$.df=!1
$.J=C.l
$.av=null
$.cC=null
$.dV=null
$.dU=null
$.dQ=null
$.dP=null
$.dO=null
$.dN=null
$.l=V.i0()
$.ea=null
$.eh=null
$.bj=null
$.eo=null
$.eW=null
$.eZ=null
$.eY=null
$.cc=null
$.eX=null
$.ef=null
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
I.$lazy(y,x,w)}})(["dM","$get$dM",function(){return H.fx("_$dart_dartClosure")},"cG","$get$cG",function(){return H.fx("_$dart_js")},"eJ","$get$eJ",function(){return H.aq(H.ca({
toString:function(){return"$receiver$"}}))},"eK","$get$eK",function(){return H.aq(H.ca({$method$:null,
toString:function(){return"$receiver$"}}))},"eL","$get$eL",function(){return H.aq(H.ca(null))},"eM","$get$eM",function(){return H.aq(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eQ","$get$eQ",function(){return H.aq(H.ca(void 0))},"eR","$get$eR",function(){return H.aq(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eO","$get$eO",function(){return H.aq(H.eP(null))},"eN","$get$eN",function(){return H.aq(function(){try{null.$method$}catch(z){return z.message}}())},"eT","$get$eT",function(){return H.aq(H.eP(void 0))},"eS","$get$eS",function(){return H.aq(function(){try{(void 0).$method$}catch(z){return z.message}}())},"db","$get$db",function(){return P.jG()},"bx","$get$bx",function(){return[]},"fk","$get$fk",function(){return P.iu("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dL","$get$dL",function(){return{}},"f9","$get$f9",function(){return P.e4(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.n)},"dc","$get$dc",function(){return P.hJ(P.n,P.bD)},"f2","$get$f2",function(){return Z.ac(0)},"f0","$get$f0",function(){return Z.ac(511)},"aC","$get$aC",function(){return Z.ac(1)},"aB","$get$aB",function(){return Z.ac(2)},"aA","$get$aA",function(){return Z.ac(4)},"aD","$get$aD",function(){return Z.ac(8)},"aE","$get$aE",function(){return Z.ac(16)},"bo","$get$bo",function(){return Z.ac(32)},"bp","$get$bp",function(){return Z.ac(64)},"f1","$get$f1",function(){return Z.ac(96)},"aZ","$get$aZ",function(){return Z.ac(128)},"az","$get$az",function(){return Z.ac(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.A]},{func:1,ret:P.G},{func:1,ret:-1},{func:1,ret:-1,args:[W.ag]},{func:1,ret:-1,args:[P.x,[P.m,E.al]]},{func:1,ret:P.G,args:[F.Z]},{func:1,ret:P.G,args:[D.A]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aX]},{func:1,ret:-1,args:[W.Y]},{func:1,ret:P.H,args:[W.L,P.n,P.n,W.bN]},{func:1,ret:-1,args:[P.x,[P.m,V.a9]]},{func:1,ret:P.G,args:[,,]},{func:1,ret:P.n,args:[P.x]},{func:1,ret:P.H,args:[W.y]},{func:1,ret:P.v},{func:1,args:[,]},{func:1,ret:P.H,args:[P.n]},{func:1,ret:-1,args:[P.x,[P.m,D.U]]},{func:1,ret:P.G,args:[,]},{func:1,ret:P.G,args:[W.Y]},{func:1,ret:P.H,args:[W.ao]},{func:1,ret:P.G,args:[{func:1,ret:-1,args:[D.A]}]},{func:1,ret:-1,args:[W.bf]},{func:1,ret:W.L,args:[W.y]},{func:1,ret:P.H,args:[P.v,P.v]},{func:1,ret:-1,args:[W.bq]},{func:1,ret:-1,args:[W.y,W.y]},{func:1,ret:P.H,args:[[P.m,D.U]]},{func:1,ret:P.n,args:[P.n]},{func:1,args:[W.Y]},{func:1,ret:P.G,args:[F.as,P.v,P.v]},{func:1,ret:[P.aF,,],args:[,]},{func:1,ret:P.G,args:[,],opt:[,]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,ret:P.G,args:[P.aW]},{func:1,ret:P.H,args:[V.aG]},{func:1,args:[P.n]},{func:1,args:[,P.n]},{func:1,ret:P.G,args:[P.aj]}]
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
if(x==y)H.lc(d||a)
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
Isolate.aO=a.aO
Isolate.dl=a.dl
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
if(typeof dartMainRunner==="function")dartMainRunner(F.fA,[])
else F.fA([])})})()
//# sourceMappingURL=test.dart.js.map
