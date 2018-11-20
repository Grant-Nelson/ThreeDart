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
var d=supportsDirectProtoAccess&&b2!="b"
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.dN"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dN"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.dN(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dO=function(){}
var dart=[["","",,H,{"^":"",m4:{"^":"b;a"}}],["","",,J,{"^":"",
dT:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cJ:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dS==null){H.lD()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.j(P.fo("Return interceptor for "+H.h(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$d7()]
if(v!=null)return v
v=H.lI(a)
if(v!=null)return v
if(typeof a=="function")return C.V
y=Object.getPrototypeOf(a)
if(y==null)return C.D
if(y===Object.prototype)return C.D
if(typeof w=="function"){Object.defineProperty(w,$.$get$d7(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
G:{"^":"b;",
u:function(a,b){return a===b},
ga1:function(a){return H.bD(a)},
i:["fb",function(a){return"Instance of '"+H.b9(a)+"'"}],
"%":"DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo"},
id:{"^":"G;",
i:function(a){return String(a)},
ga1:function(a){return a?519018:218159},
$isI:1},
et:{"^":"G;",
u:function(a,b){return null==b},
i:function(a){return"null"},
ga1:function(a){return 0},
$isJ:1},
d8:{"^":"G;",
ga1:function(a){return 0},
i:["fd",function(a){return String(a)}]},
iS:{"^":"d8;"},
cy:{"^":"d8;"},
bZ:{"^":"d8;",
i:function(a){var z=a[$.$get$e9()]
if(z==null)return this.fd(a)
return"JavaScript function for "+H.h(J.ab(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbV:1},
b5:{"^":"G;$ti",
h:function(a,b){H.A(b,H.v(a,0))
if(!!a.fixed$length)H.p(P.af("add"))
a.push(b)},
R:function(a,b){var z
if(!!a.fixed$length)H.p(P.af("remove"))
for(z=0;z<a.length;++z)if(J.N(a[z],b)){a.splice(z,1)
return!0}return!1},
ah:function(a,b){var z,y
H.f(b,"$isi",[H.v(a,0)],"$asi")
if(!!a.fixed$length)H.p(P.af("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.y)(b),++y)a.push(b[y])},
ac:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.v(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.j(P.aU(a))}},
l:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.Z(z,y,H.h(a[y]))
return z.join(b)},
jy:function(a){return this.l(a,"")},
jq:function(a,b,c){var z,y,x
H.l(b,{func:1,ret:P.I,args:[H.v(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.j(P.aU(a))}throw H.j(H.d6())},
jp:function(a,b){return this.jq(a,b,null)},
ai:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
fa:function(a,b,c){var z=a.length
if(b>z)throw H.j(P.ad(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.j(P.ad(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.v(a,0)])
return H.c(a.slice(b,c),[H.v(a,0)])},
gc0:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.j(H.d6())},
dV:function(a,b){var z,y
H.l(b,{func:1,ret:P.I,args:[H.v(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.j(P.aU(a))}return!1},
U:function(a,b){var z
for(z=0;z<a.length;++z)if(J.N(a[z],b))return!0
return!1},
i:function(a){return P.d5(a,"[","]")},
gP:function(a){return new J.ao(a,a.length,0,[H.v(a,0)])},
ga1:function(a){return H.bD(a)},
gq:function(a){return a.length},
sq:function(a,b){if(!!a.fixed$length)H.p(P.af("set length"))
if(b<0)throw H.j(P.ad(b,0,null,"newLength",null))
a.length=b},
Z:function(a,b,c){H.A(c,H.v(a,0))
if(!!a.immutable$list)H.p(P.af("indexed set"))
if(b>=a.length||b<0)throw H.j(H.bS(a,b))
a[b]=c},
$isi:1,
$isa:1,
p:{
ic:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.j(P.cS(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.j(P.ad(a,0,4294967295,"length",null))
return J.eq(new Array(a),b)},
eq:function(a,b){return J.ci(H.c(a,[b]))},
ci:function(a){H.cM(a)
a.fixed$length=Array
return a}}},
m3:{"^":"b5;$ti"},
ao:{"^":"b;a,b,c,0d,$ti",
sdC:function(a){this.d=H.A(a,H.v(this,0))},
gI:function(){return this.d},
A:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.j(H.y(z))
x=this.c
if(x>=y){this.sdC(null)
return!1}this.sdC(z[x]);++this.c
return!0},
$isaW:1},
cj:{"^":"G;",
ka:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.j(P.af(""+a+".toInt()"))},
cU:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.j(P.af(""+a+".floor()"))},
a_:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.j(P.af(""+a+".round()"))},
eL:function(a,b){var z,y
if(b>20)throw H.j(P.ad(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga1:function(a){return a&0x1FFFFFFF},
f2:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
fg:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dQ(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.dQ(a,b)},
dQ:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.j(P.af("Result of truncating division is "+H.h(z)+": "+H.h(a)+" ~/ "+b))},
bH:function(a,b){var z
if(a>0)z=this.ie(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
ie:function(a,b){return b>31?0:a>>>b},
av:function(a,b){if(typeof b!=="number")throw H.j(H.b_(b))
return a<b},
$isw:1,
$isag:1},
es:{"^":"cj;",$isz:1},
er:{"^":"cj;"},
ck:{"^":"G;",
cJ:function(a,b){if(b<0)throw H.j(H.bS(a,b))
if(b>=a.length)H.p(H.bS(a,b))
return a.charCodeAt(b)},
aT:function(a,b){if(b>=a.length)throw H.j(H.bS(a,b))
return a.charCodeAt(b)},
J:function(a,b){H.H(b)
if(typeof b!=="string")throw H.j(P.cS(b,null,null))
return a+b},
f9:function(a,b,c){var z
if(c>a.length)throw H.j(P.ad(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
c9:function(a,b){return this.f9(a,b,0)},
bB:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.j(P.cr(b,null,null))
if(b>c)throw H.j(P.cr(b,null,null))
if(c>a.length)throw H.j(P.cr(c,null,null))
return a.substring(b,c)},
bA:function(a,b){return this.bB(a,b,null)},
kd:function(a){return a.toLowerCase()},
w:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.j(C.H)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
jK:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.w(c,z)+a},
ao:function(a,b){return this.jK(a,b," ")},
j7:function(a,b,c){if(c>a.length)throw H.j(P.ad(c,0,a.length,null,null))
return H.h8(a,b,c)},
i:function(a){return a},
ga1:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gq:function(a){return a.length},
$iseJ:1,
$iso:1}}],["","",,H,{"^":"",
d6:function(){return new P.dl("No element")},
ib:function(){return new P.dl("Too many elements")},
q:{"^":"k1;a",
gq:function(a){return this.a.length},
j:function(a,b){return C.i.cJ(this.a,b)},
$asfp:function(){return[P.z]},
$asV:function(){return[P.z]},
$asi:function(){return[P.z]},
$asa:function(){return[P.z]}},
ei:{"^":"i;"},
cm:{"^":"ei;$ti",
gP:function(a){return new H.da(this,this.gq(this),0,[H.a3(this,"cm",0)])},
d6:function(a,b){return this.fc(0,H.l(b,{func:1,ret:P.I,args:[H.a3(this,"cm",0)]}))}},
da:{"^":"b;a,b,c,0d,$ti",
sbd:function(a){this.d=H.A(a,H.v(this,0))},
gI:function(){return this.d},
A:function(){var z,y,x,w
z=this.a
y=J.cI(z)
x=y.gq(z)
if(this.b!==x)throw H.j(P.aU(z))
w=this.c
if(w>=x){this.sbd(null)
return!1}this.sbd(y.ai(z,w));++this.c
return!0},
$isaW:1},
iv:{"^":"i;a,b,$ti",
gP:function(a){return new H.iw(J.bp(this.a),this.b,this.$ti)},
gq:function(a){return J.b3(this.a)},
ai:function(a,b){return this.b.$1(J.cQ(this.a,b))},
$asi:function(a,b){return[b]}},
iw:{"^":"aW;0a,b,c,$ti",
sbd:function(a){this.a=H.A(a,H.v(this,1))},
A:function(){var z=this.b
if(z.A()){this.sbd(this.c.$1(z.gI()))
return!0}this.sbd(null)
return!1},
gI:function(){return this.a},
$asaW:function(a,b){return[b]}},
ix:{"^":"cm;a,b,$ti",
gq:function(a){return J.b3(this.a)},
ai:function(a,b){return this.b.$1(J.cQ(this.a,b))},
$ascm:function(a,b){return[b]},
$asi:function(a,b){return[b]}},
dD:{"^":"i;a,b,$ti",
gP:function(a){return new H.ki(J.bp(this.a),this.b,this.$ti)}},
ki:{"^":"aW;a,b,$ti",
A:function(){var z,y
for(z=this.a,y=this.b;z.A();)if(y.$1(z.gI()))return!0
return!1},
gI:function(){return this.a.gI()}},
cg:{"^":"b;$ti"},
fp:{"^":"b;$ti"},
k1:{"^":"cl+fp;"}}],["","",,H,{"^":"",
bo:function(a){var z,y
z=H.H(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
lw:function(a){return init.types[H.X(a)]},
lG:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.Q(a).$isas},
h:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ab(a)
if(typeof z!=="string")throw H.j(H.b_(a))
return z},
bD:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b9:function(a){return H.iU(a)+H.dK(H.b0(a),0,null)},
iU:function(a){var z,y,x,w,v,u,t,s,r
z=J.Q(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.N||!!z.$iscy){u=C.B(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.bo(w.length>1&&C.i.aT(w,0)===36?C.i.bA(w,1):w)},
eP:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
j1:function(a){var z,y,x,w
z=H.c([],[P.z])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.y)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.j(H.b_(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.bH(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.j(H.b_(w))}return H.eP(z)},
eQ:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.j(H.b_(x))
if(x<0)throw H.j(H.b_(x))
if(x>65535)return H.j1(a)}return H.eP(a)},
dg:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.bH(z,10))>>>0,56320|z&1023)}throw H.j(P.ad(a,0,1114111,null,null))},
b8:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
j0:function(a){var z=H.b8(a).getFullYear()+0
return z},
iZ:function(a){var z=H.b8(a).getMonth()+1
return z},
iV:function(a){var z=H.b8(a).getDate()+0
return z},
iW:function(a){var z=H.b8(a).getHours()+0
return z},
iY:function(a){var z=H.b8(a).getMinutes()+0
return z},
j_:function(a){var z=H.b8(a).getSeconds()+0
return z},
iX:function(a){var z=H.b8(a).getMilliseconds()+0
return z},
E:function(a){throw H.j(H.b_(a))},
k:function(a,b){if(a==null)J.b3(a)
throw H.j(H.bS(a,b))},
bS:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aI(!0,b,"index",null)
z=H.X(J.b3(a))
if(!(b<0)){if(typeof z!=="number")return H.E(z)
y=b>=z}else y=!0
if(y)return P.b4(b,a,"index",null,z)
return P.cr(b,"index",null)},
ls:function(a,b,c){if(a>c)return new P.cq(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cq(a,c,!0,b,"end","Invalid value")
return new P.aI(!0,b,"end",null)},
b_:function(a){return new P.aI(!0,a,null,null)},
ln:function(a){if(typeof a!=="number")throw H.j(H.b_(a))
return a},
j:function(a){var z
if(a==null)a=new P.eI()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.h9})
z.name=""}else z.toString=H.h9
return z},
h9:function(){return J.ab(this.dartException)},
p:function(a){throw H.j(a)},
y:function(a){throw H.j(P.aU(a))},
ah:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lU(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.bH(x,16)&8191)===10)switch(w){case 438:return z.$1(H.d9(H.h(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eH(H.h(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fc()
u=$.$get$fd()
t=$.$get$fe()
s=$.$get$ff()
r=$.$get$fj()
q=$.$get$fk()
p=$.$get$fh()
$.$get$fg()
o=$.$get$fm()
n=$.$get$fl()
m=v.an(y)
if(m!=null)return z.$1(H.d9(H.H(y),m))
else{m=u.an(y)
if(m!=null){m.method="call"
return z.$1(H.d9(H.H(y),m))}else{m=t.an(y)
if(m==null){m=s.an(y)
if(m==null){m=r.an(y)
if(m==null){m=q.an(y)
if(m==null){m=p.an(y)
if(m==null){m=s.an(y)
if(m==null){m=o.an(y)
if(m==null){m=n.an(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eH(H.H(y),m))}}return z.$1(new H.k0(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eX()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aI(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eX()
return a},
bm:function(a){var z
if(a==null)return new H.fL(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fL(a)},
lu:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.Z(0,a[y],a[x])}return b},
lF:function(a,b,c,d,e,f){H.e(a,"$isbV")
switch(H.X(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.j(P.n("Unsupported number of arguments for wrapped closure"))},
bk:function(a,b){var z
H.X(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lF)
a.$identity=z
return z},
hs:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.Q(d).$isa){z.$reflectionInfo=d
x=H.j6(z).r}else x=d
w=e?Object.create(new H.jv().constructor.prototype):Object.create(new H.cU(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.ax
if(typeof u!=="number")return u.J()
$.ax=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.e7(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.lw,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.e2:H.cV
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.j("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.e7(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w["call*"]=q
w.$R=z.$R
w.$D=z.$D
return v},
hp:function(a,b,c,d){var z=H.cV
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
e7:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hr(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hp(y,!w,z,b)
if(y===0){w=$.ax
if(typeof w!=="number")return w.J()
$.ax=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.br
if(v==null){v=H.c7("self")
$.br=v}return new Function(w+H.h(v)+";return "+u+"."+H.h(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ax
if(typeof w!=="number")return w.J()
$.ax=w+1
t+=w
w="return function("+t+"){return this."
v=$.br
if(v==null){v=H.c7("self")
$.br=v}return new Function(w+H.h(v)+"."+H.h(z)+"("+t+");}")()},
hq:function(a,b,c,d){var z,y
z=H.cV
y=H.e2
switch(b?-1:a){case 0:throw H.j(H.jf("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hr:function(a,b){var z,y,x,w,v,u,t,s
z=$.br
if(z==null){z=H.c7("self")
$.br=z}y=$.e1
if(y==null){y=H.c7("receiver")
$.e1=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hq(w,!u,x,b)
if(w===1){z="return function(){return this."+H.h(z)+"."+H.h(x)+"(this."+H.h(y)+");"
y=$.ax
if(typeof y!=="number")return y.J()
$.ax=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.h(z)+"."+H.h(x)+"(this."+H.h(y)+", "+s+");"
y=$.ax
if(typeof y!=="number")return y.J()
$.ax=y+1
return new Function(z+y+"}")()},
dN:function(a,b,c,d,e,f,g){return H.hs(a,b,H.X(c),d,!!e,!!f,g)},
H:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.j(H.av(a,"String"))},
mw:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.j(H.av(a,"double"))},
lM:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.j(H.av(a,"num"))},
dL:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.j(H.av(a,"bool"))},
X:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.j(H.av(a,"int"))},
h6:function(a,b){throw H.j(H.av(a,H.bo(H.H(b).substring(3))))},
lO:function(a,b){throw H.j(H.ho(a,H.bo(H.H(b).substring(3))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.Q(a)[b])return a
H.h6(a,b)},
d:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.Q(a)[b]
else z=!0
if(z)return a
H.lO(a,b)},
cM:function(a){if(a==null)return a
if(!!J.Q(a).$isa)return a
throw H.j(H.av(a,"List<dynamic>"))},
lH:function(a,b){var z
if(a==null)return a
z=J.Q(a)
if(!!z.$isa)return a
if(z[b])return a
H.h6(a,b)},
h0:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.X(z)]
else return a.$S()}return},
c4:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.h0(J.Q(a))
if(z==null)return!1
return H.fS(z,null,b,null)},
l:function(a,b){var z,y
if(a==null)return a
if($.dH)return a
$.dH=!0
try{if(H.c4(a,b))return a
z=H.cO(b)
y=H.av(a,z)
throw H.j(y)}finally{$.dH=!1}},
dP:function(a,b){if(a!=null&&!H.dM(a,b))H.p(H.av(a,H.cO(b)))
return a},
fW:function(a){var z,y
z=J.Q(a)
if(!!z.$isu){y=H.h0(z)
if(y!=null)return H.cO(y)
return"Closure"}return H.b9(a)},
lT:function(a){throw H.j(new P.hy(H.H(a)))},
h1:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
b0:function(a){if(a==null)return
return a.$ti},
mx:function(a,b,c){return H.bn(a["$as"+H.h(c)],H.b0(b))},
cK:function(a,b,c,d){var z
H.H(c)
H.X(d)
z=H.bn(a["$as"+H.h(c)],H.b0(b))
return z==null?null:z[d]},
a3:function(a,b,c){var z
H.H(b)
H.X(c)
z=H.bn(a["$as"+H.h(b)],H.b0(a))
return z==null?null:z[c]},
v:function(a,b){var z
H.X(b)
z=H.b0(a)
return z==null?null:z[b]},
cO:function(a){return H.aZ(a,null)},
aZ:function(a,b){var z,y
H.f(b,"$isa",[P.o],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bo(a[0].builtin$cls)+H.dK(a,1,b)
if(typeof a=="function")return H.bo(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.X(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.k(b,y)
return H.h(b[y])}if('func' in a)return H.ld(a,b)
if('futureOr' in a)return"FutureOr<"+H.aZ("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ld:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.o]
H.f(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.k(b,r)
t=C.i.J(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.aZ(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aZ(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aZ(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aZ(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.lt(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.H(z[l])
n=n+m+H.aZ(i[h],b)+(" "+H.h(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dK:function(a,b,c){var z,y,x,w,v,u
H.f(c,"$isa",[P.o],"$asa")
if(a==null)return""
z=new P.bG("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aZ(u,c)}return"<"+z.i(0)+">"},
bn:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bR:function(a,b,c,d){var z,y
H.H(b)
H.cM(c)
H.H(d)
if(a==null)return!1
z=H.b0(a)
y=J.Q(a)
if(y[b]==null)return!1
return H.fZ(H.bn(y[d],z),null,c,null)},
f:function(a,b,c,d){H.H(b)
H.cM(c)
H.H(d)
if(a==null)return a
if(H.bR(a,b,c,d))return a
throw H.j(H.av(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bo(b.substring(3))+H.dK(c,0,null),init.mangledGlobalNames)))},
fZ:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.an(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.an(a[y],b,c[y],d))return!1
return!0},
mu:function(a,b,c){return a.apply(b,H.bn(J.Q(b)["$as"+H.h(c)],H.b0(b)))},
h3:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="J"||a===-1||a===-2||H.h3(z)}return!1},
dM:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="J"||b===-1||b===-2||H.h3(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dM(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c4(a,b)}z=J.Q(a).constructor
y=H.b0(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.an(z,null,b,null)},
A:function(a,b){if(a!=null&&!H.dM(a,b))throw H.j(H.av(a,H.cO(b)))
return a},
an:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.an(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="J")return!0
if('func' in c)return H.fS(a,b,c,d)
if('func' in a)return c.builtin$cls==="bV"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.an("type" in a?a.type:null,b,x,d)
else if(H.an(a,b,x,d))return!0
else{if(!('$is'+"bw" in y.prototype))return!1
w=y.prototype["$as"+"bw"]
v=H.bn(w,z?a.slice(1):null)
return H.an(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fZ(H.bn(r,z),b,u,d)},
fS:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.an(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.an(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.an(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.an(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.lL(m,b,l,d)},
lL:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.an(c[w],d,a[w],b))return!1}return!0},
mv:function(a,b,c){Object.defineProperty(a,H.H(b),{value:c,enumerable:false,writable:true,configurable:true})},
lI:function(a){var z,y,x,w,v,u
z=H.H($.h2.$1(a))
y=$.cH[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cL[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.H($.fY.$2(a,z))
if(z!=null){y=$.cH[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cL[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cN(x)
$.cH[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cL[z]=x
return x}if(v==="-"){u=H.cN(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.h5(a,x)
if(v==="*")throw H.j(P.fo(z))
if(init.leafTags[z]===true){u=H.cN(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.h5(a,x)},
h5:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dT(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cN:function(a){return J.dT(a,!1,null,!!a.$isas)},
lK:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cN(z)
else return J.dT(z,c,null,null)},
lD:function(){if(!0===$.dS)return
$.dS=!0
H.lE()},
lE:function(){var z,y,x,w,v,u,t,s
$.cH=Object.create(null)
$.cL=Object.create(null)
H.lz()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.h7.$1(v)
if(u!=null){t=H.lK(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
lz:function(){var z,y,x,w,v,u,t
z=C.S()
z=H.bj(C.P,H.bj(C.U,H.bj(C.A,H.bj(C.A,H.bj(C.T,H.bj(C.Q,H.bj(C.R(C.B),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.h2=new H.lA(v)
$.fY=new H.lB(u)
$.h7=new H.lC(t)},
bj:function(a,b){return a(b)||b},
h8:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
dV:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
j5:{"^":"b;a,b,c,d,e,f,r,0x",p:{
j6:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.ci(z)
y=z[0]
x=z[1]
return new H.j5(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jR:{"^":"b;a,b,c,d,e,f",
an:function(a){var z,y,x
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
aF:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.o])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jR(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cw:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fi:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iP:{"^":"Y;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.h(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
eH:function(a,b){return new H.iP(a,b==null?null:b.method)}}},
ih:{"^":"Y;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.h(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.h(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.h(this.a)+")"},
p:{
d9:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.ih(a,y,z?null:b.receiver)}}},
k0:{"^":"Y;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lU:{"^":"u:13;a",
$1:function(a){if(!!J.Q(a).$isY)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fL:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaM:1},
u:{"^":"b;",
i:function(a){return"Closure '"+H.b9(this).trim()+"'"},
geR:function(){return this},
$isbV:1,
geR:function(){return this}},
f_:{"^":"u;"},
jv:{"^":"f_;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.bo(z)+"'"}},
cU:{"^":"f_;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cU))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga1:function(a){var z,y
z=this.c
if(z==null)y=H.bD(this.a)
else y=typeof z!=="object"?J.b2(z):H.bD(z)
return(y^H.bD(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.h(this.d)+"' of "+("Instance of '"+H.b9(z)+"'")},
p:{
cV:function(a){return a.a},
e2:function(a){return a.c},
c7:function(a){var z,y,x,w,v
z=new H.cU("self","target","receiver","name")
y=J.ci(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jS:{"^":"Y;a",
i:function(a){return this.a},
p:{
av:function(a,b){return new H.jS("TypeError: "+H.h(P.ce(a))+": type '"+H.fW(a)+"' is not a subtype of type '"+b+"'")}}},
hn:{"^":"Y;a",
i:function(a){return this.a},
p:{
ho:function(a,b){return new H.hn("CastError: "+H.h(P.ce(a))+": type '"+H.fW(a)+"' is not a subtype of type '"+b+"'")}}},
je:{"^":"Y;a",
i:function(a){return"RuntimeError: "+H.h(this.a)},
p:{
jf:function(a){return new H.je(a)}}},
b6:{"^":"ez;a,0b,0c,0d,0e,0f,r,$ti",
gq:function(a){return this.a},
gaK:function(){return new H.ew(this,[H.v(this,0)])},
e4:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.dz(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.dz(y,a)}else return this.jw(a)},
jw:function(a){var z=this.d
if(z==null)return!1
return this.cV(this.cj(z,J.b2(a)&0x3ffffff),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bE(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bE(w,b)
x=y==null?null:y.b
return x}else return this.jx(b)},
jx:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cj(z,J.b2(a)&0x3ffffff)
x=this.cV(y,a)
if(x<0)return
return y[x].b},
Z:function(a,b,c){var z,y,x,w,v,u
H.A(b,H.v(this,0))
H.A(c,H.v(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.cr()
this.b=z}this.dm(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.cr()
this.c=y}this.dm(y,b,c)}else{x=this.d
if(x==null){x=this.cr()
this.d=x}w=J.b2(b)&0x3ffffff
v=this.cj(x,w)
if(v==null)this.cz(x,w,[this.cc(b,c)])
else{u=this.cV(v,b)
if(u>=0)v[u].b=c
else v.push(this.cc(b,c))}}},
ac:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.v(this,0),H.v(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.j(P.aU(this))
z=z.c}},
dm:function(a,b,c){var z
H.A(b,H.v(this,0))
H.A(c,H.v(this,1))
z=this.bE(a,b)
if(z==null)this.cz(a,b,this.cc(b,c))
else z.b=c},
fG:function(){this.r=this.r+1&67108863},
cc:function(a,b){var z,y
z=new H.il(H.A(a,H.v(this,0)),H.A(b,H.v(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fG()
return z},
cV:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.N(a[y].a,b))return y
return-1},
i:function(a){return P.eA(this)},
bE:function(a,b){return a[b]},
cj:function(a,b){return a[b]},
cz:function(a,b,c){a[b]=c},
fW:function(a,b){delete a[b]},
dz:function(a,b){return this.bE(a,b)!=null},
cr:function(){var z=Object.create(null)
this.cz(z,"<non-identifier-key>",z)
this.fW(z,"<non-identifier-key>")
return z},
$isev:1},
il:{"^":"b;a,b,0c,0d"},
ew:{"^":"ei;a,$ti",
gq:function(a){return this.a.a},
gP:function(a){var z,y
z=this.a
y=new H.im(z,z.r,this.$ti)
y.c=z.e
return y}},
im:{"^":"b;a,b,0c,0d,$ti",
sdn:function(a){this.d=H.A(a,H.v(this,0))},
gI:function(){return this.d},
A:function(){var z=this.a
if(this.b!==z.r)throw H.j(P.aU(z))
else{z=this.c
if(z==null){this.sdn(null)
return!1}else{this.sdn(z.a)
this.c=this.c.c
return!0}}},
$isaW:1},
lA:{"^":"u:13;a",
$1:function(a){return this.a(a)}},
lB:{"^":"u:33;a",
$2:function(a,b){return this.a(a,b)}},
lC:{"^":"u:35;a",
$1:function(a){return this.a(H.H(a))}},
ie:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseJ:1,
p:{
ig:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.j(new P.hW("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
lt:function(a){return J.eq(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
lN:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bh:function(a){return a},
bN:function(a,b,c){if(a>>>0!==a||a>=c)throw H.j(H.bS(b,a))},
lc:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.j(H.ls(a,b,c))
return b},
iL:{"^":"G;",$ismg:1,"%":";ArrayBufferView;df|fH|fI|iK|fJ|fK|bA"},
df:{"^":"iL;",
gq:function(a){return a.length},
$isas:1,
$asas:I.dO},
iK:{"^":"fI;",
j:function(a,b){H.bN(b,a,a.length)
return a[b]},
$ascg:function(){return[P.w]},
$asV:function(){return[P.w]},
$isi:1,
$asi:function(){return[P.w]},
$isa:1,
$asa:function(){return[P.w]},
"%":"Float32Array"},
bA:{"^":"fK;",
$ascg:function(){return[P.z]},
$asV:function(){return[P.z]},
$isi:1,
$asi:function(){return[P.z]},
$isa:1,
$asa:function(){return[P.z]}},
m5:{"^":"bA;",
j:function(a,b){H.bN(b,a,a.length)
return a[b]},
"%":"Int16Array"},
m6:{"^":"bA;",
j:function(a,b){H.bN(b,a,a.length)
return a[b]},
"%":"Int32Array"},
m7:{"^":"bA;",
j:function(a,b){H.bN(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
m8:{"^":"bA;",
gq:function(a){return a.length},
j:function(a,b){H.bN(b,a,a.length)
return a[b]},
$ismh:1,
"%":"CanvasPixelArray|Uint8ClampedArray"},
m9:{"^":"bA;",
gq:function(a){return a.length},
j:function(a,b){H.bN(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
fH:{"^":"df+V;"},
fI:{"^":"fH+cg;"},
fJ:{"^":"df+V;"},
fK:{"^":"fJ+cg;"}}],["","",,P,{"^":"",
kk:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.lk()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bk(new P.km(z),1)).observe(y,{childList:true})
return new P.kl(z,y,x)}else if(self.setImmediate!=null)return P.ll()
return P.lm()},
ml:[function(a){self.scheduleImmediate(H.bk(new P.kn(H.l(a,{func:1,ret:-1})),0))},"$1","lk",4,0,8],
mm:[function(a){self.setImmediate(H.bk(new P.ko(H.l(a,{func:1,ret:-1})),0))},"$1","ll",4,0,8],
mn:[function(a){P.dr(C.q,H.l(a,{func:1,ret:-1}))},"$1","lm",4,0,8],
dr:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.h.a6(a.a,1000)
return P.l0(z<0?0:z,b)},
f9:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.bd]})
z=C.h.a6(a.a,1000)
return P.l1(z<0?0:z,b)},
lg:function(a,b){if(H.c4(a,{func:1,args:[P.b,P.aM]}))return H.l(a,{func:1,ret:null,args:[P.b,P.aM]})
if(H.c4(a,{func:1,args:[P.b]}))return H.l(a,{func:1,ret:null,args:[P.b]})
throw H.j(P.cS(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lf:function(){var z,y
for(;z=$.bi,z!=null;){$.bP=null
y=z.b
$.bi=y
if(y==null)$.bO=null
z.a.$0()}},
mt:[function(){$.dI=!0
try{P.lf()}finally{$.bP=null
$.dI=!1
if($.bi!=null)$.$get$dE().$1(P.h_())}},"$0","h_",0,0,3],
fV:function(a){var z=new P.fz(H.l(a,{func:1,ret:-1}))
if($.bi==null){$.bO=z
$.bi=z
if(!$.dI)$.$get$dE().$1(P.h_())}else{$.bO.b=z
$.bO=z}},
lj:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.bi
if(z==null){P.fV(a)
$.bP=$.bO
return}y=new P.fz(a)
x=$.bP
if(x==null){y.b=z
$.bP=y
$.bi=y}else{y.b=x.b
x.b=y
$.bP=y
if(y.b==null)$.bO=y}},
lP:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.P
if(C.l===y){P.cG(null,null,C.l,a)
return}y.toString
P.cG(null,null,y,H.l(y.cE(a),z))},
f8:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.P
if(y===C.l){y.toString
return P.dr(a,b)}return P.dr(a,H.l(y.cE(b),z))},
jO:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bd]}
H.l(b,z)
y=$.P
if(y===C.l){y.toString
return P.f9(a,b)}x=y.dY(b,P.bd)
$.P.toString
return P.f9(a,H.l(x,z))},
cF:function(a,b,c,d,e){var z={}
z.a=d
P.lj(new P.lh(z,e))},
fT:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.P
if(y===c)return d.$0()
$.P=c
z=y
try{y=d.$0()
return y}finally{$.P=z}},
fU:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.A(e,g)
y=$.P
if(y===c)return d.$1(e)
$.P=c
z=y
try{y=d.$1(e)
return y}finally{$.P=z}},
li:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
y=$.P
if(y===c)return d.$2(e,f)
$.P=c
z=y
try{y=d.$2(e,f)
return y}finally{$.P=z}},
cG:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.l!==c
if(z)d=!(!z||!1)?c.cE(d):c.j3(d,-1)
P.fV(d)},
km:{"^":"u:14;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kl:{"^":"u:32;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kn:{"^":"u:2;a",
$0:function(){this.a.$0()}},
ko:{"^":"u:2;a",
$0:function(){this.a.$0()}},
fN:{"^":"b;a,0b,c",
fD:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bk(new P.l3(this,b),0),a)
else throw H.j(P.af("`setTimeout()` not found."))},
fE:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bk(new P.l2(this,a,Date.now(),b),0),a)
else throw H.j(P.af("Periodic timer."))},
$isbd:1,
p:{
l0:function(a,b){var z=new P.fN(!0,0)
z.fD(a,b)
return z},
l1:function(a,b){var z=new P.fN(!1,0)
z.fE(a,b)
return z}}},
l3:{"^":"u:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
l2:{"^":"u:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.fg(w,x)}z.c=y
this.d.$1(z)}},
bg:{"^":"b;0a,b,c,d,e,$ti",
jD:function(a){if(this.c!==6)return!0
return this.b.b.d3(H.l(this.d,{func:1,ret:P.I,args:[P.b]}),a.a,P.I,P.b)},
jv:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.v(this,1)}
w=this.b.b
if(H.c4(z,{func:1,args:[P.b,P.aM]}))return H.dP(w.k0(z,a.a,a.b,null,y,P.aM),x)
else return H.dP(w.d3(H.l(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aS:{"^":"b;dP:a<,b,0i1:c<,$ti",
eK:function(a,b,c){var z,y,x,w
z=H.v(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.P
if(y!==C.l){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.lg(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aS(0,$.P,[c])
w=b==null?1:3
this.dr(new P.bg(x,w,a,b,[z,c]))
return x},
k9:function(a,b){return this.eK(a,null,b)},
dr:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isbg")
this.c=a}else{if(z===2){y=H.e(this.c,"$isaS")
z=y.a
if(z<4){y.dr(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cG(null,null,z,H.l(new P.kw(this,a),{func:1,ret:-1}))}},
dM:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isbg")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isaS")
y=u.a
if(y<4){u.dM(a)
return}this.a=y
this.c=u.c}z.a=this.bG(a)
y=this.b
y.toString
P.cG(null,null,y,H.l(new P.kB(z,this),{func:1,ret:-1}))}},
cv:function(){var z=H.e(this.c,"$isbg")
this.c=null
return this.bG(z)},
bG:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
dt:function(a){var z,y,x
z=H.v(this,0)
H.dP(a,{futureOr:1,type:z})
y=this.$ti
if(H.bR(a,"$isbw",y,"$asbw"))if(H.bR(a,"$isaS",y,null))P.fC(a,this)
else P.kx(a,this)
else{x=this.cv()
H.A(a,z)
this.a=4
this.c=a
P.bL(this,x)}},
du:function(a,b){var z
H.e(b,"$isaM")
z=this.cv()
this.a=8
this.c=new P.ai(a,b)
P.bL(this,z)},
$isbw:1,
p:{
kx:function(a,b){var z,y,x
b.a=1
try{a.eK(new P.ky(b),new P.kz(b),null)}catch(x){z=H.ah(x)
y=H.bm(x)
P.lP(new P.kA(b,z,y))}},
fC:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isaS")
if(z>=4){y=b.cv()
b.a=a.a
b.c=a.c
P.bL(b,y)}else{y=H.e(b.c,"$isbg")
b.a=2
b.c=a
a.dM(y)}},
bL:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isai")
y=y.b
u=v.a
t=v.b
y.toString
P.cF(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bL(z.a,b)}y=z.a
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
if(p){H.e(r,"$isai")
y=y.b
u=r.a
t=r.b
y.toString
P.cF(null,null,y,u,t)
return}o=$.P
if(o==null?q!=null:o!==q)$.P=q
else o=null
y=b.c
if(y===8)new P.kE(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kD(x,b,r).$0()}else if((y&2)!==0)new P.kC(z,x,b).$0()
if(o!=null)$.P=o
y=x.b
if(!!J.Q(y).$isbw){if(y.a>=4){n=H.e(t.c,"$isbg")
t.c=null
b=t.bG(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fC(y,t)
return}}m=b.b
n=H.e(m.c,"$isbg")
m.c=null
b=m.bG(n)
y=x.a
u=x.b
if(!y){H.A(u,H.v(m,0))
m.a=4
m.c=u}else{H.e(u,"$isai")
m.a=8
m.c=u}z.a=m
y=m}}}},
kw:{"^":"u:2;a,b",
$0:function(){P.bL(this.a,this.b)}},
kB:{"^":"u:2;a,b",
$0:function(){P.bL(this.b,this.a.a)}},
ky:{"^":"u:14;a",
$1:function(a){var z=this.a
z.a=0
z.dt(a)}},
kz:{"^":"u:34;a",
$2:function(a,b){this.a.du(a,H.e(b,"$isaM"))},
$1:function(a){return this.$2(a,null)}},
kA:{"^":"u:2;a,b,c",
$0:function(){this.a.du(this.b,this.c)}},
kE:{"^":"u:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.eI(H.l(w.d,{func:1}),null)}catch(v){y=H.ah(v)
x=H.bm(v)
if(this.d){w=H.e(this.a.a.c,"$isai").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isai")
else u.b=new P.ai(y,x)
u.a=!0
return}if(!!J.Q(z).$isbw){if(z instanceof P.aS&&z.gdP()>=4){if(z.gdP()===8){w=this.b
w.b=H.e(z.gi1(),"$isai")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.k9(new P.kF(t),null)
w.a=!1}}},
kF:{"^":"u:37;a",
$1:function(a){return this.a}},
kD:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.v(x,0)
v=H.A(this.c,w)
u=H.v(x,1)
this.a.b=x.b.b.d3(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ah(t)
y=H.bm(t)
x=this.a
x.b=new P.ai(z,y)
x.a=!0}}},
kC:{"^":"u:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isai")
w=this.c
if(w.jD(z)&&w.e!=null){v=this.b
v.b=w.jv(z)
v.a=!1}}catch(u){y=H.ah(u)
x=H.bm(u)
w=H.e(this.a.a.c,"$isai")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ai(y,x)
s.a=!0}}},
fz:{"^":"b;a,0b"},
jw:{"^":"b;$ti",
gq:function(a){var z,y,x,w
z={}
y=new P.aS(0,$.P,[P.z])
z.a=0
x=H.v(this,0)
w=H.l(new P.jy(z,this),{func:1,ret:-1,args:[x]})
H.l(new P.jz(z,y),{func:1,ret:-1})
W.W(this.a,this.b,w,!1,x)
return y}},
jy:{"^":"u;a,b",
$1:function(a){H.A(a,H.v(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.J,args:[H.v(this.b,0)]}}},
jz:{"^":"u:2;a,b",
$0:function(){this.b.dt(this.a.a)}},
dm:{"^":"b;$ti"},
jx:{"^":"b;"},
bd:{"^":"b;"},
ai:{"^":"b;a,b",
i:function(a){return H.h(this.a)},
$isY:1},
l8:{"^":"b;",$ismk:1},
lh:{"^":"u:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eI()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.j(z)
x=H.j(z)
x.stack=y.i(0)
throw x}},
kQ:{"^":"l8;",
k5:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.l===$.P){a.$0()
return}P.fT(null,null,this,a,-1)}catch(x){z=H.ah(x)
y=H.bm(x)
P.cF(null,null,this,z,H.e(y,"$isaM"))}},
k6:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.l===$.P){a.$1(b)
return}P.fU(null,null,this,a,b,-1,c)}catch(x){z=H.ah(x)
y=H.bm(x)
P.cF(null,null,this,z,H.e(y,"$isaM"))}},
j3:function(a,b){return new P.kS(this,H.l(a,{func:1,ret:b}),b)},
cE:function(a){return new P.kR(this,H.l(a,{func:1,ret:-1}))},
dY:function(a,b){return new P.kT(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
eI:function(a,b){H.l(a,{func:1,ret:b})
if($.P===C.l)return a.$0()
return P.fT(null,null,this,a,b)},
d3:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.P===C.l)return a.$1(b)
return P.fU(null,null,this,a,b,c,d)},
k0:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.P===C.l)return a.$2(b,c)
return P.li(null,null,this,a,b,c,d,e,f)}},
kS:{"^":"u;a,b,c",
$0:function(){return this.a.eI(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
kR:{"^":"u:3;a,b",
$0:function(){return this.a.k5(this.b)}},
kT:{"^":"u;a,b,c",
$1:function(a){var z=this.c
return this.a.k6(this.b,H.A(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
ip:function(a,b,c){H.cM(a)
return H.f(H.lu(a,new H.b6(0,0,[b,c])),"$isev",[b,c],"$asev")},
io:function(a,b){return new H.b6(0,0,[a,b])},
c_:function(a,b,c,d){return new P.kK(0,0,[d])},
ia:function(a,b,c){var z,y
if(P.dJ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bQ()
C.a.h(y,a)
try{P.le(a,z)}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=P.eZ(b,H.lH(z,"$isi"),", ")+c
return y.charCodeAt(0)==0?y:y},
d5:function(a,b,c){var z,y,x
if(P.dJ(a))return b+"..."+c
z=new P.bG(b)
y=$.$get$bQ()
C.a.h(y,a)
try{x=z
x.a=P.eZ(x.gaU(),a,", ")}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=z
y.a=y.gaU()+c
y=z.gaU()
return y.charCodeAt(0)==0?y:y},
dJ:function(a){var z,y
for(z=0;y=$.$get$bQ(),z<y.length;++z)if(a===y[z])return!0
return!1},
le:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gP(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.A())return
w=H.h(z.gI())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.A()){if(x<=5)return
if(0>=b.length)return H.k(b,-1)
v=b.pop()
if(0>=b.length)return H.k(b,-1)
u=b.pop()}else{t=z.gI();++x
if(!z.A()){if(x<=4){C.a.h(b,H.h(t))
return}v=H.h(t)
if(0>=b.length)return H.k(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gI();++x
for(;z.A();t=s,s=r){r=z.gI();++x
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
ex:function(a,b){var z,y,x
z=P.c_(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.y)(a),++x)z.h(0,H.A(a[x],b))
return z},
eA:function(a){var z,y,x
z={}
if(P.dJ(a))return"{...}"
y=new P.bG("")
try{C.a.h($.$get$bQ(),a)
x=y
x.a=x.gaU()+"{"
z.a=!0
a.ac(0,new P.iu(z,y))
z=y
z.a=z.gaU()+"}"}finally{z=$.$get$bQ()
if(0>=z.length)return H.k(z,-1)
z.pop()}z=y.gaU()
return z.charCodeAt(0)==0?z:z},
kK:{"^":"kG;a,0b,0c,0d,0e,0f,r,$ti",
gP:function(a){var z=new P.fG(this,this.r,this.$ti)
z.c=this.e
return z},
gq:function(a){return this.a},
U:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.e(z[b],"$iscD")!=null}else{y=this.fS(b)
return y}},
fS:function(a){var z=this.d
if(z==null)return!1
return this.cg(this.dE(z,a),a)>=0},
h:function(a,b){var z,y
H.A(b,H.v(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dG()
this.b=z}return this.dq(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dG()
this.c=y}return this.dq(y,b)}else return this.fH(b)},
fH:function(a){var z,y,x
H.A(a,H.v(this,0))
z=this.d
if(z==null){z=P.dG()
this.d=z}y=this.dv(a)
x=z[y]
if(x==null)z[y]=[this.cs(a)]
else{if(this.cg(x,a)>=0)return!1
x.push(this.cs(a))}return!0},
R:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.hW(this.c,b)
else return this.hT(b)},
hT:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.dE(z,a)
x=this.cg(y,a)
if(x<0)return!1
this.dR(y.splice(x,1)[0])
return!0},
dq:function(a,b){H.A(b,H.v(this,0))
if(H.e(a[b],"$iscD")!=null)return!1
a[b]=this.cs(b)
return!0},
hW:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$iscD")
if(z==null)return!1
this.dR(z)
delete a[b]
return!0},
dH:function(){this.r=this.r+1&67108863},
cs:function(a){var z,y
z=new P.cD(H.A(a,H.v(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dH()
return z},
dR:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dH()},
dv:function(a){return J.b2(a)&0x3ffffff},
dE:function(a,b){return a[this.dv(b)]},
cg:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.N(a[y].a,b))return y
return-1},
p:{
dG:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cD:{"^":"b;a,0b,0c"},
fG:{"^":"b;a,b,0c,0d,$ti",
sds:function(a){this.d=H.A(a,H.v(this,0))},
gI:function(){return this.d},
A:function(){var z=this.a
if(this.b!==z.r)throw H.j(P.aU(z))
else{z=this.c
if(z==null){this.sds(null)
return!1}else{this.sds(H.A(z.a,H.v(this,0)))
this.c=this.c.b
return!0}}},
$isaW:1,
p:{
kL:function(a,b,c){var z=new P.fG(a,b,[c])
z.c=a.e
return z}}},
kG:{"^":"jg;"},
cl:{"^":"kM;",$isi:1,$isa:1},
V:{"^":"b;$ti",
gP:function(a){return new H.da(a,this.gq(a),0,[H.cK(this,a,"V",0)])},
ai:function(a,b){return this.j(a,b)},
kc:function(a,b){var z,y
z=H.c([],[H.cK(this,a,"V",0)])
C.a.sq(z,this.gq(a))
for(y=0;y<this.gq(a);++y)C.a.Z(z,y,this.j(a,y))
return z},
kb:function(a){return this.kc(a,!0)},
i:function(a){return P.d5(a,"[","]")}},
ez:{"^":"cn;"},
iu:{"^":"u:21;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.h(a)
z.a=y+": "
z.a+=H.h(b)}},
cn:{"^":"b;$ti",
ac:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.a3(this,"cn",0),H.a3(this,"cn",1)]})
for(z=J.bp(this.gaK());z.A();){y=z.gI()
b.$2(y,this.j(0,y))}},
gq:function(a){return J.b3(this.gaK())},
i:function(a){return P.eA(this)},
$isaj:1},
ji:{"^":"b;$ti",
ah:function(a,b){var z
for(z=J.bp(H.f(b,"$isi",this.$ti,"$asi"));z.A();)this.h(0,z.gI())},
i:function(a){return P.d5(this,"{","}")},
ai:function(a,b){var z,y,x
if(b<0)H.p(P.ad(b,0,null,"index",null))
for(z=P.kL(this,this.r,H.v(this,0)),y=0;z.A();){x=z.d
if(b===y)return x;++y}throw H.j(P.b4(b,this,"index",null,y))},
$isi:1,
$iseT:1},
jg:{"^":"ji;"},
kM:{"^":"b+V;"}}],["","",,P,{"^":"",cZ:{"^":"b;$ti"},cb:{"^":"jx;$ti"},hO:{"^":"cZ;",
$ascZ:function(){return[P.o,[P.a,P.z]]}},i7:{"^":"b;a,b,c,d,e",
i:function(a){return this.a}},i6:{"^":"cb;a",
fT:function(a,b,c){var z,y,x,w,v,u
for(z=this.a,y=z.e,x=z.d,z=z.c,w=b,v=null;w<c;++w){if(w>=a.length)return H.k(a,w)
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
default:u=null}if(u!=null){if(v==null)v=new P.bG("")
if(w>b)v.a+=C.i.bB(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.hg(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$ascb:function(){return[P.o,P.o]}},k7:{"^":"hO;a"},k8:{"^":"cb;",
j9:function(a,b,c){var z,y,x,w
z=a.length
P.eR(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.l6(0,0,x)
if(w.h6(a,b,z)!==z)w.dS(C.i.cJ(a,z-1),0)
return new Uint8Array(x.subarray(0,H.lc(0,w.b,x.length)))},
j8:function(a){return this.j9(a,0,null)},
$ascb:function(){return[P.o,[P.a,P.z]]}},l6:{"^":"b;a,b,c",
dS:function(a,b){var z,y,x,w,v
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
h6:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.i.cJ(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.aT(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dS(w,C.i.aT(a,u)))x=u}else if(w<=2047){v=this.b
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
hQ:function(a){if(a instanceof H.u)return a.i(0)
return"Instance of '"+H.b9(a)+"'"},
iq:function(a,b,c,d){var z,y
H.A(b,d)
z=J.ic(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.Z(z,y,b)
return H.f(z,"$isa",[d],"$asa")},
ir:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gP(a);x.A();)C.a.h(y,H.A(x.gI(),c))
if(b)return y
return H.f(J.ci(y),"$isa",z,"$asa")},
dn:function(a,b,c){var z,y
z=P.z
H.f(a,"$isi",[z],"$asi")
if(a.constructor===Array){H.f(a,"$isb5",[z],"$asb5")
y=a.length
c=P.eR(b,c,y,null,null,null)
return H.eQ(b>0||c<y?C.a.fa(a,b,c):a)}return P.jA(a,b,c)},
jA:function(a,b,c){var z,y,x
H.f(a,"$isi",[P.z],"$asi")
z=J.bp(a)
for(y=0;y<b;++y)if(!z.A())throw H.j(P.ad(b,0,y,null,null))
x=[]
for(;z.A();)x.push(z.gI())
return H.eQ(x)},
j7:function(a,b,c){return new H.ie(a,H.ig(a,!1,!0,!1))},
fQ:function(a,b,c,d){var z,y,x,w,v,u
H.f(a,"$isa",[P.z],"$asa")
if(c===C.x){z=$.$get$fP().b
z=z.test(b)}else z=!1
if(z)return b
y=C.I.j8(H.A(b,H.a3(c,"cZ",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.k(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.dg(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
ce:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ab(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hQ(a)},
n:function(a){return new P.fB(a)},
dU:function(a){H.lN(a)},
I:{"^":"b;"},
"+bool":0,
aq:{"^":"b;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.aq))return!1
return this.a===b.a&&!0},
ga1:function(a){var z=this.a
return(z^C.h.bH(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.hA(H.j0(this))
y=P.bU(H.iZ(this))
x=P.bU(H.iV(this))
w=P.bU(H.iW(this))
v=P.bU(H.iY(this))
u=P.bU(H.j_(this))
t=P.hB(H.iX(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
p:{
hA:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hB:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bU:function(a){if(a>=10)return""+a
return"0"+a}}},
w:{"^":"ag;"},
"+double":0,
bt:{"^":"b;a",
av:function(a,b){return C.h.av(this.a,H.e(b,"$isbt").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.bt))return!1
return this.a===b.a},
ga1:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hK()
y=this.a
if(y<0)return"-"+new P.bt(0-y).i(0)
x=z.$1(C.h.a6(y,6e7)%60)
w=z.$1(C.h.a6(y,1e6)%60)
v=new P.hJ().$1(y%1e6)
return""+C.h.a6(y,36e8)+":"+H.h(x)+":"+H.h(w)+"."+H.h(v)},
p:{
eh:function(a,b,c,d,e,f){return new P.bt(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hJ:{"^":"u:23;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hK:{"^":"u:23;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
Y:{"^":"b;"},
eI:{"^":"Y;",
i:function(a){return"Throw of null."}},
aI:{"^":"Y;a,b,c,d",
gcf:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gce:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.h(z)
w=this.gcf()+y+x
if(!this.a)return w
v=this.gce()
u=P.ce(this.b)
return w+v+": "+H.h(u)},
p:{
hj:function(a){return new P.aI(!1,null,null,a)},
cS:function(a,b,c){return new P.aI(!0,a,b,c)}}},
cq:{"^":"aI;e,f,a,b,c,d",
gcf:function(){return"RangeError"},
gce:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.h(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.h(z)
else if(x>z)y=": Not in range "+H.h(z)+".."+H.h(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.h(z)}return y},
p:{
cr:function(a,b,c){return new P.cq(null,null,!0,a,b,"Value not in range")},
ad:function(a,b,c,d,e){return new P.cq(b,c,!0,a,d,"Invalid value")},
eR:function(a,b,c,d,e,f){if(0>a||a>c)throw H.j(P.ad(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.j(P.ad(b,a,c,"end",f))
return b}return c}}},
i9:{"^":"aI;e,q:f>,a,b,c,d",
gcf:function(){return"RangeError"},
gce:function(){if(J.ha(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.h(z)},
p:{
b4:function(a,b,c,d,e){var z=H.X(e!=null?e:J.b3(b))
return new P.i9(b,z,!0,a,c,"Index out of range")}}},
k2:{"^":"Y;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
af:function(a){return new P.k2(a)}}},
k_:{"^":"Y;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
fo:function(a){return new P.k_(a)}}},
dl:{"^":"Y;a",
i:function(a){return"Bad state: "+this.a},
p:{
eY:function(a){return new P.dl(a)}}},
hv:{"^":"Y;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.h(P.ce(z))+"."},
p:{
aU:function(a){return new P.hv(a)}}},
iQ:{"^":"b;",
i:function(a){return"Out of Memory"},
$isY:1},
eX:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isY:1},
hy:{"^":"Y;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fB:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
hW:{"^":"b;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.i.bB(x,0,75)+"..."
return y+"\n"+x}},
bV:{"^":"b;"},
z:{"^":"ag;"},
"+int":0,
i:{"^":"b;$ti",
d6:["fc",function(a,b){var z=H.a3(this,"i",0)
return new H.dD(this,H.l(b,{func:1,ret:P.I,args:[z]}),[z])}],
gq:function(a){var z,y
z=this.gP(this)
for(y=0;z.A();)++y
return y},
gaQ:function(a){var z,y
z=this.gP(this)
if(!z.A())throw H.j(H.d6())
y=z.gI()
if(z.A())throw H.j(H.ib())
return y},
ai:function(a,b){var z,y,x
if(b<0)H.p(P.ad(b,0,null,"index",null))
for(z=this.gP(this),y=0;z.A();){x=z.gI()
if(b===y)return x;++y}throw H.j(P.b4(b,this,"index",null,y))},
i:function(a){return P.ia(this,"(",")")}},
aW:{"^":"b;$ti"},
a:{"^":"b;$ti",$isi:1},
"+List":0,
J:{"^":"b;",
ga1:function(a){return P.b.prototype.ga1.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
ag:{"^":"b;"},
"+num":0,
b:{"^":";",
u:function(a,b){return this===b},
ga1:function(a){return H.bD(this)},
i:function(a){return"Instance of '"+H.b9(this)+"'"},
toString:function(){return this.i(this)}},
aM:{"^":"b;"},
o:{"^":"b;",$iseJ:1},
"+String":0,
bG:{"^":"b;aU:a<",
gq:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
eZ:function(a,b,c){var z=J.bp(b)
if(!z.A())return a
if(c.length===0){do a+=H.h(z.gI())
while(z.A())}else{a+=H.h(z.gI())
for(;z.A();)a=a+c+H.h(z.gI())}return a}}}}],["","",,W,{"^":"",
dY:function(a){var z=document.createElement("a")
return z},
cX:function(a,b){var z=document.createElement("canvas")
return z},
hL:function(a,b,c){var z,y
z=document.body
y=(z&&C.n).as(z,a,b,c)
y.toString
z=W.C
z=new H.dD(new W.am(y),H.l(new W.hM(),{func:1,ret:P.I,args:[z]}),[z])
return H.e(z.gaQ(z),"$isS")},
hN:function(a){H.e(a,"$iscf")
return"wheel"},
bu:function(a){var z,y,x
z="element tag unavailable"
try{y=J.hf(a)
if(typeof y==="string")z=a.tagName}catch(x){H.ah(x)}return z},
cB:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fF:function(a,b,c,d){var z,y
z=W.cB(W.cB(W.cB(W.cB(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fX:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.P
if(z===C.l)return a
return z.dY(a,b)},
a5:{"^":"S;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
hi:{"^":"a5;",
i:function(a){return String(a)},
$ishi:1,
"%":"HTMLAnchorElement"},
lW:{"^":"a5;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
e0:{"^":"a5;",$ise0:1,"%":"HTMLBaseElement"},
c6:{"^":"a5;",$isc6:1,"%":"HTMLBodyElement"},
cW:{"^":"a5;",
c6:function(a,b,c){if(c!=null)return this.h8(a,b,P.lo(c,null))
return this.h9(a,b)},
eW:function(a,b){return this.c6(a,b,null)},
h8:function(a,b,c){return a.getContext(b,c)},
h9:function(a,b){return a.getContext(b)},
$iscW:1,
$ise5:1,
"%":"HTMLCanvasElement"},
cY:{"^":"G;",
ha:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
jm:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$iscY:1,
"%":"CanvasRenderingContext2D"},
lZ:{"^":"C;0q:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
m0:{"^":"kr;0q:length=",
eZ:function(a,b){var z=this.hb(a,this.fN(a,b))
return z==null?"":z},
fN:function(a,b){var z,y
z=$.$get$e8()
y=z[b]
if(typeof y==="string")return y
y=this.ik(a,b)
z[b]=y
return y},
ik:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hF()+b
if(z in a)return z
return b},
hb:function(a,b){return a.getPropertyValue(b)},
gcF:function(a){return a.bottom},
gaA:function(a){return a.height},
gb7:function(a){return a.left},
gbu:function(a){return a.right},
gbx:function(a){return a.top},
gaD:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hx:{"^":"b;",
gb7:function(a){return this.eZ(a,"left")}},
aV:{"^":"a5;",$isaV:1,"%":"HTMLDivElement"},
hG:{"^":"C;",
j_:function(a,b){return a.adoptNode(b)},
eX:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
m1:{"^":"G;",
i:function(a){return String(a)},
"%":"DOMException"},
hH:{"^":"G;",
jd:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
hI:{"^":"G;",
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
u:function(a,b){var z
if(b==null)return!1
if(!H.bR(b,"$isaL",[P.ag],"$asaL"))return!1
z=J.aa(b)
return a.left===z.gb7(b)&&a.top===z.gbx(b)&&a.width===z.gaD(b)&&a.height===z.gaA(b)},
ga1:function(a){return W.fF(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gcF:function(a){return a.bottom},
gaA:function(a){return a.height},
gb7:function(a){return a.left},
gbu:function(a){return a.right},
gbx:function(a){return a.top},
gaD:function(a){return a.width},
$isaL:1,
$asaL:function(){return[P.ag]},
"%":";DOMRectReadOnly"},
kq:{"^":"cl;dD:a<,b",
gq:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.k(z,b)
return H.e(z[b],"$isS")},
h:function(a,b){J.dW(this.a,b)
return b},
gP:function(a){var z=this.kb(this)
return new J.ao(z,z.length,0,[H.v(z,0)])},
$asV:function(){return[W.S]},
$asi:function(){return[W.S]},
$asa:function(){return[W.S]}},
S:{"^":"C;0k7:tagName=",
gj2:function(a){return new W.ks(a)},
ge_:function(a){return new W.kq(a,a.children)},
ge3:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.av()
if(x<0)x=-x*0
if(typeof w!=="number")return w.av()
if(w<0)w=-w*0
return new P.aL(z,y,x,w,[P.ag])},
i:function(a){return a.localName},
as:["ca",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.ek
if(z==null){z=H.c([],[W.aD])
y=new W.eG(z)
C.a.h(z,W.fD(null))
C.a.h(z,W.fM())
$.ek=y
d=y}else d=z
z=$.ej
if(z==null){z=new W.fR(d)
$.ej=z
c=z}else{z.a=d
c=z}}if($.aJ==null){z=document
y=z.implementation
y=(y&&C.J).jd(y,"")
$.aJ=y
$.d3=y.createRange()
y=$.aJ
y.toString
y=y.createElement("base")
H.e(y,"$ise0")
y.href=z.baseURI
z=$.aJ.head;(z&&C.L).E(z,y)}z=$.aJ
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.e(y,"$isc6")}z=$.aJ
if(!!this.$isc6)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.aJ.body;(z&&C.n).E(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.U(C.X,a.tagName)){z=$.d3;(z&&C.E).f4(z,x)
z=$.d3
w=(z&&C.E).jb(z,b)}else{x.innerHTML=b
w=$.aJ.createDocumentFragment()
for(z=J.aa(w);y=x.firstChild,y!=null;)z.E(w,y)}z=$.aJ.body
if(x==null?z!=null:x!==z)J.dX(x)
c.dc(w)
C.z.j_(document,w)
return w},function(a,b,c){return this.as(a,b,c,null)},"jc",null,null,"gkT",5,5,null],
f6:function(a,b,c,d){a.textContent=null
this.E(a,this.as(a,b,c,d))},
f5:function(a,b){return this.f6(a,b,null,null)},
bb:function(a,b){return a.getAttribute(b)},
hU:function(a,b){return a.removeAttribute(b)},
$isS:1,
"%":";Element"},
hM:{"^":"u:26;",
$1:function(a){return!!J.Q(H.e(a,"$isC")).$isS}},
a7:{"^":"G;",$isa7:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
cf:{"^":"G;",
fI:function(a,b,c,d){return a.addEventListener(b,H.bk(H.l(c,{func:1,args:[W.a7]}),1),!1)},
$iscf:1,
"%":";EventTarget"},
m2:{"^":"a5;0q:length=","%":"HTMLFormElement"},
i3:{"^":"a5;","%":"HTMLHeadElement"},
i4:{"^":"kI;",
gq:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.b4(b,a,null,null,null))
return a[b]},
ai:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isas:1,
$asas:function(){return[W.C]},
$asV:function(){return[W.C]},
$isi:1,
$asi:function(){return[W.C]},
$isa:1,
$asa:function(){return[W.C]},
$isi4:1,
$asay:function(){return[W.C]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
i5:{"^":"hG;","%":"HTMLDocument"},
ch:{"^":"G;0e5:data=",$isch:1,"%":"ImageData"},
ep:{"^":"a5;",$isep:1,$ise5:1,"%":"HTMLImageElement"},
bx:{"^":"du;",$isbx:1,"%":"KeyboardEvent"},
is:{"^":"G;",
i:function(a){return String(a)},
$isis:1,
"%":"Location"},
iI:{"^":"a5;","%":"HTMLAudioElement;HTMLMediaElement"},
at:{"^":"du;",$isat:1,"%":"PointerEvent;DragEvent|MouseEvent"},
am:{"^":"cl;a",
gaQ:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.j(P.eY("No elements"))
if(y>1)throw H.j(P.eY("More than one element"))
return z.firstChild},
ah:function(a,b){var z,y,x,w,v
H.f(b,"$isi",[W.C],"$asi")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.aa(y),v=0;v<x;++v)w.E(y,z.firstChild)
return},
gP:function(a){var z=this.a.childNodes
return new W.em(z,z.length,-1,[H.cK(C.Z,z,"ay",0)])},
gq:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.k(z,b)
return z[b]},
$asV:function(){return[W.C]},
$asi:function(){return[W.C]},
$asa:function(){return[W.C]}},
C:{"^":"cf;0jT:previousSibling=",
jV:function(a){var z=a.parentNode
if(z!=null)J.c5(z,a)},
i:function(a){var z=a.nodeValue
return z==null?this.fb(a):z},
E:function(a,b){return a.appendChild(b)},
hV:function(a,b){return a.removeChild(b)},
$isC:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
iM:{"^":"kO;",
gq:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.b4(b,a,null,null,null))
return a[b]},
ai:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isas:1,
$asas:function(){return[W.C]},
$asV:function(){return[W.C]},
$isi:1,
$asi:function(){return[W.C]},
$isa:1,
$asa:function(){return[W.C]},
$asay:function(){return[W.C]},
"%":"NodeList|RadioNodeList"},
j3:{"^":"G;",
jb:function(a,b){return a.createContextualFragment(b)},
f4:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
mb:{"^":"a5;0q:length=","%":"HTMLSelectElement"},
jB:{"^":"a5;","%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
jC:{"^":"a5;",
as:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ca(a,b,c,d)
z=W.hL("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.am(y).ah(0,new W.am(z))
return y},
"%":"HTMLTableElement"},
jD:{"^":"a5;",
as:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ca(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.p.as(z.createElement("table"),b,c,d)
z.toString
z=new W.am(z)
x=z.gaQ(z)
x.toString
z=new W.am(x)
w=z.gaQ(z)
y.toString
w.toString
new W.am(y).ah(0,new W.am(w))
return y},
"%":"HTMLTableRowElement"},
md:{"^":"a5;",
as:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ca(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.p.as(z.createElement("table"),b,c,d)
z.toString
z=new W.am(z)
x=z.gaQ(z)
y.toString
x.toString
new W.am(y).ah(0,new W.am(x))
return y},
"%":"HTMLTableSectionElement"},
f0:{"^":"a5;",$isf0:1,"%":"HTMLTemplateElement"},
bH:{"^":"G;",$isbH:1,"%":"Touch"},
be:{"^":"du;",$isbe:1,"%":"TouchEvent"},
mf:{"^":"l5;",
gq:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.b4(b,a,null,null,null))
return a[b]},
ai:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isas:1,
$asas:function(){return[W.bH]},
$asV:function(){return[W.bH]},
$isi:1,
$asi:function(){return[W.bH]},
$isa:1,
$asa:function(){return[W.bH]},
$asay:function(){return[W.bH]},
"%":"TouchList"},
du:{"^":"a7;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
mj:{"^":"iI;",$ise5:1,"%":"HTMLVideoElement"},
bK:{"^":"at;",
gjj:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.j(P.af("deltaY is not supported"))},
gji:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.j(P.af("deltaX is not supported"))},
$isbK:1,
"%":"WheelEvent"},
kj:{"^":"cf;",
hY:function(a,b){return a.requestAnimationFrame(H.bk(H.l(b,{func:1,ret:-1,args:[P.ag]}),1))},
h_:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fA:{"^":"C;",$isfA:1,"%":"Attr"},
mo:{"^":"hI;",
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
u:function(a,b){var z
if(b==null)return!1
if(!H.bR(b,"$isaL",[P.ag],"$asaL"))return!1
z=J.aa(b)
return a.left===z.gb7(b)&&a.top===z.gbx(b)&&a.width===z.gaD(b)&&a.height===z.gaA(b)},
ga1:function(a){return W.fF(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gaA:function(a){return a.height},
gaD:function(a){return a.width},
"%":"ClientRect|DOMRect"},
ms:{"^":"la;",
gq:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.b4(b,a,null,null,null))
return a[b]},
ai:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$isas:1,
$asas:function(){return[W.C]},
$asV:function(){return[W.C]},
$isi:1,
$asi:function(){return[W.C]},
$isa:1,
$asa:function(){return[W.C]},
$asay:function(){return[W.C]},
"%":"MozNamedAttrMap|NamedNodeMap"},
kp:{"^":"ez;dD:a<",
ac:function(a,b){var z,y,x,w,v,u
H.l(b,{func:1,ret:-1,args:[P.o,P.o]})
for(z=this.gaK(),y=z.length,x=this.a,w=J.aa(x),v=0;v<z.length;z.length===y||(0,H.y)(z),++v){u=z[v]
b.$2(u,w.bb(x,u))}},
gaK:function(){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.o])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.k(z,w)
v=H.e(z[w],"$isfA")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$ascn:function(){return[P.o,P.o]},
$asaj:function(){return[P.o,P.o]}},
ks:{"^":"kp;a",
j:function(a,b){return J.cR(this.a,H.H(b))},
gq:function(a){return this.gaK().length}},
kt:{"^":"jw;a,b,c,$ti"},
mp:{"^":"kt;a,b,c,$ti"},
ku:{"^":"dm;a,b,c,d,e,$ti",p:{
W:function(a,b,c,d,e){var z,y
z=W.fX(new W.kv(c),W.a7)
y=z!=null
if(y&&!0){H.l(z,{func:1,args:[W.a7]})
if(y)J.hc(a,b,z,!1)}return new W.ku(0,a,b,z,!1,[e])}}},
kv:{"^":"u:28;a",
$1:function(a){return this.a.$1(H.e(a,"$isa7"))}},
c3:{"^":"b;a",
fq:function(a){var z,y
z=$.$get$dF()
if(z.a===0){for(y=0;y<262;++y)z.Z(0,C.W[y],W.lx())
for(y=0;y<12;++y)z.Z(0,C.u[y],W.ly())}},
b1:function(a){return $.$get$fE().U(0,W.bu(a))},
aI:function(a,b,c){var z,y,x
z=W.bu(a)
y=$.$get$dF()
x=y.j(0,H.h(z)+"::"+b)
if(x==null)x=y.j(0,"*::"+b)
if(x==null)return!1
return H.dL(x.$4(a,b,c,this))},
$isaD:1,
p:{
fD:function(a){var z,y
z=W.dY(null)
y=window.location
z=new W.c3(new W.kU(z,y))
z.fq(a)
return z},
mq:[function(a,b,c,d){H.e(a,"$isS")
H.H(b)
H.H(c)
H.e(d,"$isc3")
return!0},"$4","lx",16,0,27],
mr:[function(a,b,c,d){var z,y,x
H.e(a,"$isS")
H.H(b)
H.H(c)
z=H.e(d,"$isc3").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","ly",16,0,27]}},
ay:{"^":"b;$ti",
gP:function(a){return new W.em(a,this.gq(a),-1,[H.cK(this,a,"ay",0)])}},
eG:{"^":"b;a",
b1:function(a){return C.a.dV(this.a,new W.iO(a))},
aI:function(a,b,c){return C.a.dV(this.a,new W.iN(a,b,c))},
$isaD:1},
iO:{"^":"u:12;a",
$1:function(a){return H.e(a,"$isaD").b1(this.a)}},
iN:{"^":"u:12;a,b,c",
$1:function(a){return H.e(a,"$isaD").aI(this.a,this.b,this.c)}},
kV:{"^":"b;",
fC:function(a,b,c,d){var z,y,x
this.a.ah(0,c)
z=b.d6(0,new W.kW())
y=b.d6(0,new W.kX())
this.b.ah(0,z)
x=this.c
x.ah(0,C.Y)
x.ah(0,y)},
b1:function(a){return this.a.U(0,W.bu(a))},
aI:["ff",function(a,b,c){var z,y
z=W.bu(a)
y=this.c
if(y.U(0,H.h(z)+"::"+b))return this.d.j0(c)
else if(y.U(0,"*::"+b))return this.d.j0(c)
else{y=this.b
if(y.U(0,H.h(z)+"::"+b))return!0
else if(y.U(0,"*::"+b))return!0
else if(y.U(0,H.h(z)+"::*"))return!0
else if(y.U(0,"*::*"))return!0}return!1}],
$isaD:1},
kW:{"^":"u:16;",
$1:function(a){return!C.a.U(C.u,H.H(a))}},
kX:{"^":"u:16;",
$1:function(a){return C.a.U(C.u,H.H(a))}},
kZ:{"^":"kV;e,a,b,c,d",
aI:function(a,b,c){if(this.ff(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cR(a,"template")==="")return this.e.U(0,b)
return!1},
p:{
fM:function(){var z,y,x,w,v
z=P.o
y=P.ex(C.t,z)
x=H.v(C.t,0)
w=H.l(new W.l_(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.kZ(y,P.c_(null,null,null,z),P.c_(null,null,null,z),P.c_(null,null,null,z),null)
y.fC(null,new H.ix(C.t,w,[x,z]),v,null)
return y}}},
l_:{"^":"u:29;",
$1:function(a){return"TEMPLATE::"+H.h(H.H(a))}},
kY:{"^":"b;",
b1:function(a){var z=J.Q(a)
if(!!z.$iseS)return!1
z=!!z.$isdp
if(z&&W.bu(a)==="foreignObject")return!1
if(z)return!0
return!1},
aI:function(a,b,c){if(b==="is"||C.i.c9(b,"on"))return!1
return this.b1(a)},
$isaD:1},
em:{"^":"b;a,b,c,0d,$ti",
sdF:function(a){this.d=H.A(a,H.v(this,0))},
A:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sdF(J.hb(this.a,z))
this.c=z
return!0}this.sdF(null)
this.c=y
return!1},
gI:function(){return this.d},
$isaW:1},
aD:{"^":"b;"},
kU:{"^":"b;a,b",$ismi:1},
fR:{"^":"b;a",
dc:function(a){new W.l7(this).$2(a,null)},
bh:function(a,b){if(b==null)J.dX(a)
else J.c5(b,a)},
i3:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.hd(a)
x=J.cR(y.gdD(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.ah(t)}v="element unprintable"
try{v=J.ab(a)}catch(t){H.ah(t)}try{u=W.bu(a)
this.i2(H.e(a,"$isS"),b,z,v,u,H.e(y,"$isaj"),H.H(x))}catch(t){if(H.ah(t) instanceof P.aI)throw t
else{this.bh(a,b)
window
s="Removing corrupted element "+H.h(v)
if(typeof console!="undefined")window.console.warn(s)}}},
i2:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.bh(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.b1(a)){this.bh(a,b)
window
z="Removing disallowed element <"+H.h(e)+"> from "+H.h(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.aI(a,"is",g)){this.bh(a,b)
window
z="Removing disallowed type extension <"+H.h(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gaK()
y=H.c(z.slice(0),[H.v(z,0)])
for(x=f.gaK().length-1,z=f.a,w=J.aa(z);x>=0;--x){if(x>=y.length)return H.k(y,x)
v=y[x]
if(!this.a.aI(a,J.hh(v),w.bb(z,v))){window
u="Removing disallowed attribute <"+H.h(e)+" "+v+'="'+H.h(w.bb(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.bb(z,v)
w.hU(z,v)}}if(!!J.Q(a).$isf0)this.dc(a.content)},
$isma:1},
l7:{"^":"u:30;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.i3(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.bh(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.he(z)}catch(w){H.ah(w)
v=H.e(z,"$isC")
if(x){u=v.parentNode
if(u!=null)J.c5(u,v)}else J.c5(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.e(y,"$isC")}}},
kr:{"^":"G+hx;"},
kH:{"^":"G+V;"},
kI:{"^":"kH+ay;"},
kN:{"^":"G+V;"},
kO:{"^":"kN+ay;"},
l4:{"^":"G+V;"},
l5:{"^":"l4+ay;"},
l9:{"^":"G+V;"},
la:{"^":"l9+ay;"}}],["","",,P,{"^":"",
lr:function(a){var z,y
z=J.Q(a)
if(!!z.$isch){y=z.ge5(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fO(a.data,a.height,a.width)},
lq:function(a){if(a instanceof P.fO)return{data:a.a,height:a.b,width:a.c}
return a},
lo:function(a,b){var z={}
a.ac(0,new P.lp(z))
return z},
ef:function(){var z=$.ee
if(z==null){z=J.cP(window.navigator.userAgent,"Opera",0)
$.ee=z}return z},
hF:function(){var z,y
z=$.eb
if(z!=null)return z
y=$.ec
if(y==null){y=J.cP(window.navigator.userAgent,"Firefox",0)
$.ec=y}if(y)z="-moz-"
else{y=$.ed
if(y==null){y=!P.ef()&&J.cP(window.navigator.userAgent,"Trident/",0)
$.ed=y}if(y)z="-ms-"
else z=P.ef()?"-o-":"-webkit-"}$.eb=z
return z},
fO:{"^":"b;e5:a>,b,c",$isch:1},
lp:{"^":"u:21;a",
$2:function(a,b){this.a[a]=b}},
hT:{"^":"cl;a,b",
gck:function(){var z,y,x
z=this.b
y=H.a3(z,"V",0)
x=W.S
return new H.iv(new H.dD(z,H.l(new P.hU(),{func:1,ret:P.I,args:[y]}),[y]),H.l(new P.hV(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){J.dW(this.b.a,b)},
gq:function(a){return J.b3(this.gck().a)},
j:function(a,b){var z=this.gck()
return z.b.$1(J.cQ(z.a,b))},
gP:function(a){var z=P.ir(this.gck(),!1,W.S)
return new J.ao(z,z.length,0,[H.v(z,0)])},
$asV:function(){return[W.S]},
$asi:function(){return[W.S]},
$asa:function(){return[W.S]}},
hU:{"^":"u:26;",
$1:function(a){return!!J.Q(H.e(a,"$isC")).$isS}},
hV:{"^":"u:31;",
$1:function(a){return H.d(H.e(a,"$isC"),"$isS")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cC:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kJ:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
kP:{"^":"b;$ti",
gbu:function(a){var z=this.a
if(typeof z!=="number")return z.J()
return H.A(z+this.c,H.v(this,0))},
gcF:function(a){var z=this.b
if(typeof z!=="number")return z.J()
return H.A(z+this.d,H.v(this,0))},
i:function(a){return"Rectangle ("+H.h(this.a)+", "+H.h(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(!H.bR(b,"$isaL",[P.ag],"$asaL"))return!1
z=this.a
y=J.aa(b)
x=y.gb7(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbx(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.J()
w=H.v(this,0)
if(H.A(z+this.c,w)===y.gbu(b)){if(typeof x!=="number")return x.J()
z=H.A(x+this.d,w)===y.gcF(b)}else z=!1}else z=!1}else z=!1
return z},
ga1:function(a){var z,y,x,w,v
z=this.a
y=J.b2(z)
x=this.b
w=J.b2(x)
if(typeof z!=="number")return z.J()
v=H.v(this,0)
z=H.A(z+this.c,v)
if(typeof x!=="number")return x.J()
v=H.A(x+this.d,v)
return P.kJ(P.cC(P.cC(P.cC(P.cC(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
aL:{"^":"kP;b7:a>,bx:b>,aD:c>,aA:d>,$ti"}}],["","",,P,{"^":"",eS:{"^":"dp;",$iseS:1,"%":"SVGScriptElement"},dp:{"^":"S;",
ge_:function(a){return new P.hT(a,new W.am(a))},
as:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.aD])
C.a.h(z,W.fD(null))
C.a.h(z,W.fM())
C.a.h(z,new W.kY())
c=new W.fR(new W.eG(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.n).jc(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.am(w)
u=z.gaQ(z)
for(z=J.aa(v);x=u.firstChild,x!=null;)z.E(v,x)
return v},
$isdp:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"}}],["","",,P,{"^":""}],["","",,P,{"^":"",hm:{"^":"G;",$ishm:1,"%":"WebGLBuffer"},hX:{"^":"G;",$ishX:1,"%":"WebGLFramebuffer"},j2:{"^":"G;",$isj2:1,"%":"WebGLProgram"},jd:{"^":"G;",$isjd:1,"%":"WebGLRenderbuffer"},di:{"^":"G;",
b0:function(a,b){return a.activeTexture(b)},
dW:function(a,b,c){return a.attachShader(b,c)},
ax:function(a,b,c){return a.bindBuffer(b,c)},
bk:function(a,b,c){return a.bindFramebuffer(b,c)},
dX:function(a,b,c){return a.bindRenderbuffer(b,c)},
a7:function(a,b,c){return a.bindTexture(b,c)},
j4:function(a,b,c){return a.blendFunc(b,c)},
dZ:function(a,b,c,d){return a.bufferData(b,c,d)},
e0:function(a,b){return a.clear(b)},
e1:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
e2:function(a,b){return a.clearDepth(b)},
j6:function(a,b){return a.compileShader(b)},
je:function(a,b){return a.createShader(b)},
jg:function(a,b){return a.deleteProgram(b)},
jh:function(a,b){return a.deleteShader(b)},
e6:function(a,b){return a.depthFunc(b)},
jk:function(a,b){return a.disable(b)},
e7:function(a,b){return a.disableVertexAttribArray(b)},
jl:function(a,b,c,d,e){return a.drawElements(b,c,H.X(d),H.X(e))},
bo:function(a,b){return a.enable(b)},
e9:function(a,b){return a.enableVertexAttribArray(b)},
jt:function(a,b,c,d,e){return a.framebufferRenderbuffer(b,c,d,e)},
ju:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
eS:function(a,b,c){return a.getActiveAttrib(b,c)},
eT:function(a,b,c){return a.getActiveUniform(b,c)},
eU:function(a,b,c){return a.getAttribLocation(b,c)},
c7:function(a,b){return a.getParameter(b)},
eY:function(a,b){return a.getProgramInfoLog(b)},
c8:function(a,b,c){return a.getProgramParameter(b,c)},
f_:function(a,b){return a.getShaderInfoLog(b)},
f0:function(a,b,c){return a.getShaderParameter(b,c)},
f1:function(a,b,c){return a.getUniformLocation(b,c)},
jA:function(a,b){return a.linkProgram(b)},
jS:function(a,b,c){return a.pixelStorei(b,c)},
jX:function(a,b,c,d,e){return a.renderbufferStorage(b,c,d,e)},
f8:function(a,b,c){return a.shaderSource(b,c)},
eJ:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=i==null
if(!z&&h!=null&&typeof g==="number"&&Math.floor(g)===g){this.im(a,b,c,d,e,f,g,h,i,j)
return}y=J.Q(g)
if(!!y.$isch&&h==null&&z&&!0){this.io(a,b,c,d,e,f,P.lq(g))
return}if(!!y.$isep&&h==null&&z&&!0){this.ip(a,b,c,d,e,f,g)
return}throw H.j(P.hj("Incorrect number or type of arguments"))},
k8:function(a,b,c,d,e,f,g){return this.eJ(a,b,c,d,e,f,g,null,null,null)},
im:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
io:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ip:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aC:function(a,b,c,d){return a.texParameteri(b,c,d)},
F:function(a,b,c){return a.uniform1f(b,c)},
G:function(a,b,c){return a.uniform1i(b,c)},
c4:function(a,b,c,d){return a.uniform2f(b,c,d)},
t:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ke:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
eN:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
d5:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
ba:function(a,b){return a.useProgram(b)},
kf:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
eP:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isdi:1,
"%":"WebGLRenderingContext"},jj:{"^":"G;",$isjj:1,"%":"WebGLShader"},jE:{"^":"G;",$isjE:1,"%":"WebGLTexture"},jY:{"^":"G;",$isjY:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",R:{"^":"b;0a,0b,0c,0d,$ti",
shg:function(a){this.a=H.f(a,"$isa",[H.a3(this,"R",0)],"$asa")},
sdK:function(a){this.b=H.l(a,{func:1,ret:P.I,args:[[P.i,H.a3(this,"R",0)]]})},
sdI:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.z,[P.i,H.a3(this,"R",0)]]})},
sdL:function(a){this.d=H.l(a,{func:1,ret:-1,args:[P.z,[P.i,H.a3(this,"R",0)]]})},
bD:function(a){this.shg(H.c([],[a]))
this.sdK(null)
this.sdI(null)
this.sdL(null)},
dd:function(a,b,c){var z=H.a3(this,"R",0)
H.l(b,{func:1,ret:P.I,args:[[P.i,z]]})
z={func:1,ret:-1,args:[P.z,[P.i,z]]}
H.l(a,z)
H.l(c,z)
this.sdK(b)
this.sdI(a)
this.sdL(c)},
aP:function(a,b){return this.dd(a,null,b)},
bF:function(a){var z
H.f(a,"$isi",[H.a3(this,"R",0)],"$asi")
z=this.b
if(z!=null)return z.$1(a)
return!0},
dj:function(a,b){var z
H.f(b,"$isi",[H.a3(this,"R",0)],"$asi")
z=this.c
if(z!=null)z.$2(a,b)},
gq:function(a){return this.a.length},
gP:function(a){var z=this.a
return new J.ao(z,z.length,0,[H.v(z,0)])},
ai:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.k(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.a3(this,"R",0)
H.A(b,z)
z=[z]
if(this.bF(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dj(x,H.c([b],z))}},
ah:function(a,b){var z,y
H.f(b,"$isi",[H.a3(this,"R",0)],"$asi")
if(this.bF(b)){z=this.a
y=z.length
C.a.ah(z,b)
this.dj(y,b)}},
$isi:1,
p:{
c9:function(a){var z=new O.R([a])
z.bD(a)
return z}}},dd:{"^":"b;0a,0b",
scm:function(a){this.a=H.f(a,"$isa",[V.a_],"$asa")},
gq:function(a){return this.a.length},
gm:function(){var z=this.b
if(z==null){z=D.B()
this.b=z}return z},
fm:function(a){var z=this.b
if(!(z==null))z.B(a)},
aR:function(){return this.fm(null)},
gV:function(){var z=this.a
if(z.length>0)return C.a.gc0(z)
else return V.aX()},
c2:function(a){var z=this.a
if(a==null)C.a.h(z,V.aX())
else C.a.h(z,a)
this.aR()},
aL:function(){var z=this.a
if(z.length>0){z.pop()
this.aR()}}}}],["","",,E,{"^":"",cT:{"^":"b;"},ar:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0ap:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sfn:function(a,b){this.y=H.f(b,"$isR",[E.ar],"$asR")},
sap:function(a){this.z=H.e(a,"$isac")},
sdf:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gm().R(0,this.geF())
y=this.c
if(y!=null)y.gm().h(0,this.geF())
x=new D.x("shape",z,this.c,this,[F.eU])
x.b=!0
this.au(x)}},
seC:function(a){var z,y
if(!J.N(this.r,a)){z=this.r
if(z!=null)z.gm().R(0,this.geE())
if(a!=null)a.gm().h(0,this.geE())
this.r=a
y=new D.x("mover",z,a,this,[U.a8])
y.b=!0
this.au(y)}},
aa:function(a){var z,y,x,w
z=this.r
y=z!=null?z.a:null
if(!J.N(y,this.x)){x=this.x
this.x=y
w=new D.x("matrix",x,y,this,[V.a_])
w.b=!0
this.au(w)}for(z=this.y.a,z=new J.ao(z,z.length,0,[H.v(z,0)]);z.A();)z.d.aa(a)},
a8:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gV())
else C.a.h(z.a,y.w(0,z.gV()))
z.aR()
a.d2(this.f)
z=a.dy
x=(z&&C.a).gc0(z)
if(x!=null&&this.d!=null)x.bt(a,this)
for(z=this.y.a,z=new J.ao(z,z.length,0,[H.v(z,0)]);z.A();)z.d.a8(a)
a.d1()
a.dx.aL()},
gm:function(){var z=this.z
if(z==null){z=D.B()
this.z=z}return z},
au:function(a){var z=this.z
if(!(z==null))z.B(a)},
ad:function(){return this.au(null)},
jJ:[function(a){H.e(a,"$ist")
this.e=null
this.au(a)},function(){return this.jJ(null)},"l_","$1","$0","geF",0,2,0],
jI:[function(a){this.au(H.e(a,"$ist"))},function(){return this.jI(null)},"kZ","$1","$0","geE",0,2,0],
jG:[function(a){this.au(H.e(a,"$ist"))},function(){return this.jG(null)},"kX","$1","$0","geD",0,2,0],
kW:[function(a,b){var z,y,x,w,v,u,t
H.f(b,"$isi",[E.ar],"$asi")
for(z=b.length,y=this.geD(),x={func:1,ret:-1,args:[D.t]},w=[x],v=0;v<b.length;b.length===z||(0,H.y)(b),++v){u=b[v]
if(u!=null){if(u.gap()==null){t=new D.ac()
t.sae(null)
t.saZ(null)
t.c=null
t.d=0
u.sap(t)}t=u.gap()
t.toString
H.l(y,x)
if(t.a==null)t.sae(H.c([],w))
t=t.a;(t&&C.a).h(t,y)}}this.ad()},"$2","gjF",8,0,5],
kY:[function(a,b){var z,y
H.f(b,"$isi",[E.ar],"$asi")
for(z=b.gP(b),y=this.geD();z.A();)z.gI().gm().R(0,y)
this.ad()},"$2","gjH",8,0,5],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaC:1,
p:{
cd:function(a,b,c,d,e,f){var z=new E.ar()
z.a=d
z.b=!0
z.sfn(0,O.c9(E.ar))
z.y.aP(z.gjF(),z.gjH())
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
z.sdf(0,e)
z.seC(c)
return z}}},j8:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
sil:function(a){this.dy=H.f(a,"$isa",[O.aN],"$asa")},
sic:function(a){this.fr=H.f(a,"$isaj",[P.o,A.ba],"$asaj")},
fi:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.aq(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.dd()
y=[V.a_]
z.scm(H.c([],y))
z.b=null
z.gm().h(0,new E.ja(this))
this.cy=z
z=new O.dd()
z.scm(H.c([],y))
z.b=null
z.gm().h(0,new E.jb(this))
this.db=z
z=new O.dd()
z.scm(H.c([],y))
z.b=null
z.gm().h(0,new E.jc(this))
this.dx=z
this.sil(H.c([],[O.aN]))
z=this.dy;(z&&C.a).h(z,null)
this.sic(new H.b6(0,0,[P.o,A.ba]))},
gjU:function(){var z=this.z
if(z==null){z=this.cy.gV().w(0,this.db.gV())
this.z=z}return z},
geH:function(){var z=this.ch
if(z==null){z=this.gjU().w(0,this.dx.gV())
this.ch=z}return z},
geO:function(){var z=this.cx
if(z==null){z=this.db.gV().w(0,this.dx.gV())
this.cx=z}return z},
d2:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gc0(z):a;(z&&C.a).h(z,y)},
d1:function(){var z=this.dy
if(z.length>1)z.pop()},
bi:function(a){var z=a.b
if(z.length===0)throw H.j(P.n("May not cache a shader with no name."))
if(this.fr.e4(z))throw H.j(P.n('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.Z(0,z,a)},
p:{
j9:function(a,b){var z=new E.j8(a,b)
z.fi(a,b)
return z}}},ja:{"^":"u:6;a",
$1:function(a){var z
H.e(a,"$ist")
z=this.a
z.z=null
z.ch=null}},jb:{"^":"u:6;a",
$1:function(a){var z
H.e(a,"$ist")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jc:{"^":"u:6;a",
$1:function(a){var z
H.e(a,"$ist")
z=this.a
z.ch=null
z.cx=null}},jL:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0ap:x<,0y,0z,0Q,0ch,0cx,0cy",
sap:function(a){this.x=H.e(a,"$isac")},
fp:[function(a){H.e(a,"$ist")
this.jZ()},function(){return this.fp(null)},"fo","$1","$0","gdk",0,2,0],
gjs:function(){var z,y,x
z=Date.now()
y=C.h.a6(P.eh(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.aq(z,!1)
return x/y},
dN:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.w()
if(typeof z!=="number")return H.E(z)
x=C.j.cU(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.w()
w=C.j.cU(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.f8(C.q,this.gjY())}},
jZ:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.jN(this),{func:1,ret:-1,args:[P.ag]})
C.G.h_(z)
C.G.hY(z,W.fX(y,P.ag))}},"$0","gjY",0,0,3],
jW:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dN()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aq(w,!1)
x.y=P.eh(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sq(w.a,0)
w.aR()
w=x.db
C.a.sq(w.a,0)
w.aR()
w=x.dx
C.a.sq(w.a,0)
w.aR()
w=x.dy;(w&&C.a).sq(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a8(this.e)}x=this.z
if(!(x==null))x.B(null)}catch(v){z=H.ah(v)
y=H.bm(v)
P.dU("Error: "+H.h(z))
P.dU("Stack: "+H.h(y))
throw H.j(z)}},
p:{
jM:function(a,b,c,d,e){var z,y,x,w
z=J.Q(a)
if(!!z.$iscW)return E.f7(a,!0,!0,!0,!1)
y=W.cX(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.ge_(a).h(0,y)
w=E.f7(y,!0,!0,!0,!1)
w.a=a
return w},
f7:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jL()
y=P.ip(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.o,null)
x=C.o.c6(a,"webgl",y)
x=H.e(x==null?C.o.c6(a,"experimental-webgl",y):x,"$isdi")
if(x==null)H.p(P.n("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.j9(x,a)
w=new T.jJ(x)
w.b=H.X((x&&C.b).c7(x,3379))
w.c=H.X(C.b.c7(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.k3(a)
v=new X.ii()
v.c=new X.aB(!1,!1,!1)
v.shS(P.c_(null,null,null,P.z))
w.b=v
v=new X.iJ(w)
v.f=0
v.r=V.aK()
v.x=V.aK()
v.Q=1
v.ch=1
w.c=v
v=new X.it(w)
v.r=0
v.x=V.aK()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jQ(w)
v.e=0
v.f=V.aK()
v.r=V.aK()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.sh1(H.c([],[[P.dm,P.b]]))
v=w.z
u=document
t=W.at
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.W(u,"contextmenu",H.l(w.ghu(),s),!1,t))
v=w.z
r=W.a7
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.W(a,"focus",H.l(w.ghz(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.W(a,"blur",H.l(w.ghr(),q),!1,r))
v=w.z
p=W.bx
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.W(u,"keyup",H.l(w.ghB(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.W(u,"keydown",H.l(w.ghA(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.W(a,"mousedown",H.l(w.ghE(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.W(a,"mouseup",H.l(w.ghG(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.W(a,"mousemove",H.l(w.ghF(),s),!1,t))
p=w.z
o=W.bK;(p&&C.a).h(p,W.W(a,H.H(W.hN(a)),H.l(w.ghH(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.W(u,"mousemove",H.l(w.ghv(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.W(u,"mouseup",H.l(w.ghw(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.W(u,"pointerlockchange",H.l(w.ghI(),q),!1,r))
r=w.z
q=W.be
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.W(a,"touchstart",H.l(w.ghQ(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.W(a,"touchend",H.l(w.ghO(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.W(a,"touchmove",H.l(w.ghP(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.aq(Date.now(),!1)
z.cy=0
z.dN()
return z}}},jN:{"^":"u:43;a",
$1:function(a){var z
H.lM(a)
z=this.a
if(z.ch){z.ch=!1
z.jW()}}}}],["","",,Z,{"^":"",fy:{"^":"b;a,b",$islX:1,p:{
dC:function(a,b,c){var z
H.f(c,"$isa",[P.z],"$asa")
z=a.createBuffer()
C.b.ax(a,b,z)
C.b.dZ(a,b,new Int16Array(H.bh(c)),35044)
C.b.ax(a,b,null)
return new Z.fy(b,z)}}},e3:{"^":"cT;a,b,c,d,e",
K:function(a){var z,y,x
try{y=a.a
C.b.e9(y,this.e)
C.b.kf(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.ah(x)
y=P.n('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.h(z))
throw H.j(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.h(this.e)+"]"}},c2:{"^":"b;a",$islY:1},bs:{"^":"b;a,0b,c,d",
shc:function(a){this.b=H.f(a,"$isa",[Z.bW],"$asa")},
aj:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
K:function(a){var z,y
z=this.a
C.b.ax(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].K(a)},
a9:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.b.e7(x,z[y].e)
C.b.ax(x,this.a.a,null)},
a8:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.k(w,x)
v=w[x]
w=v.c
u=w.a
C.b.ax(y,u,w.b)
C.b.jl(y,v.a,v.b,5123,0)
C.b.ax(y,u,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.o]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ab(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(y,", ")+"\nAttrs:   "+C.a.l(u,", ")},
$isme:1},bW:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b9(this.c)+"'")+"]"}},aY:{"^":"b;a",
gdg:function(a){var z,y
z=this.a
y=(z&$.$get$a2().a)!==0?3:0
if((z&$.$get$aQ().a)!==0)y+=3
if((z&$.$get$aP().a)!==0)y+=3
if((z&$.$get$aw().a)!==0)y+=2
if((z&$.$get$aR().a)!==0)y+=3
if((z&$.$get$bI().a)!==0)y+=3
if((z&$.$get$bJ().a)!==0)y+=4
if((z&$.$get$bf().a)!==0)++y
return(z&$.$get$aO().a)!==0?y+4:y},
j1:function(a){var z,y,x
z=$.$get$a2()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aQ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aP()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aw()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bI()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bJ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bf()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aO()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fx()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aY))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.o])
y=this.a
if((y&$.$get$a2().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aQ().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aP().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aw().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aR().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bI().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bJ().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bf().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aO().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.l(z,"|")},
p:{
al:function(a){return new Z.aY(a)}}}}],["","",,D,{"^":"",e6:{"^":"b;"},ac:{"^":"b;0a,0b,0c,0d",
sae:function(a){this.a=H.f(a,"$isa",[{func:1,ret:-1,args:[D.t]}],"$asa")},
saZ:function(a){this.b=H.f(a,"$isa",[{func:1,ret:-1,args:[D.t]}],"$asa")},
h:function(a,b){var z={func:1,ret:-1,args:[D.t]}
H.l(b,z)
if(this.a==null)this.sae(H.c([],[z]))
z=this.a;(z&&C.a).h(z,b)},
R:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.t]})
z=this.a
z=z==null?null:C.a.U(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).R(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.U(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).R(z,b)||y}return y},
B:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w){w=this.b
w=w==null?null:w.length===0
if(w==null)w=!0}else w=!1
if(w)return!1
if(a==null){a=new D.t(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.ac(y,new D.hR(z))
y=this.b
if(!(y==null))C.a.ac(y,new D.hS(z))
z=this.b
if(!(z==null))C.a.sq(z,0)
return!0},
cN:function(){return this.B(null)},
k_:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.B(y)}}},
aN:function(){return this.k_(!0,!1)},
p:{
B:function(){var z=new D.ac()
z.sae(null)
z.saZ(null)
z.c=null
z.d=0
return z}}},hR:{"^":"u:15;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.t]})
z=this.a.a
z.b
a.$1(z)}},hS:{"^":"u:15;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.t]})
z=this.a.a
z.b
a.$1(z)}},t:{"^":"b;a,0b"},bX:{"^":"t;c,d,a,0b,$ti"},bY:{"^":"t;c,d,a,0b,$ti"},x:{"^":"t;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.h(this.d)+" => "+H.h(this.e)}}}],["","",,X,{"^":"",e4:{"^":"b;a,b",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.e4))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}},eu:{"^":"b;a,b",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eu))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}},ii:{"^":"b;0a,0b,0c,0d",
shS:function(a){this.d=H.f(a,"$iseT",[P.z],"$aseT")},
jP:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jL:function(a){this.c=a.b
this.d.R(0,a.a)
return!1}},ey:{"^":"cp;x,y,c,d,e,a,0b"},it:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
be:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aq(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.w()
v=b.b
u=this.ch
if(typeof v!=="number")return v.w()
t=new V.a6(y.a+x*w,y.b+v*u)
u=this.a.gb3()
s=new X.bz(a,V.aK(),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
d0:function(a,b){this.r=a.a
return!1},
br:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.f3()
if(typeof z!=="number")return z.eQ()
this.r=(z&~y)>>>0
return!1},
bq:function(a,b){var z=this.d
if(z==null)return!1
z.B(this.be(a,b))
return!0},
jQ:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gb3()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.w()
t=a.b
s=this.cy
if(typeof t!=="number")return t.w()
w=new X.de(new V.T(v*u,t*s),y,x,new P.aq(w,!1),this)
w.b=!0
z.B(w)
return!0},
hD:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aq(Date.now(),!1)
y=this.f
x=new X.ey(c,a,this.a.gb3(),b,z,this)
x.b=!0
y.B(x)
this.y=z
this.x=V.aK()}},aB:{"^":"b;a,b,c",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aB))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},bz:{"^":"cp;x,y,z,Q,ch,c,d,e,a,0b"},iJ:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
ci:function(a,b,c){var z,y,x
z=new P.aq(Date.now(),!1)
y=this.a.gb3()
x=new X.bz(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
d0:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.B(this.ci(a,b,!0))
return!0},
br:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.f3()
if(typeof z!=="number")return z.eQ()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.B(this.ci(a,b,!0))
return!0},
bq:function(a,b){var z=this.d
if(z==null)return!1
z.B(this.ci(a,b,!1))
return!0},
jR:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gb3()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.w()
u=a.b
t=this.ch
if(typeof u!=="number")return u.w()
x=new X.de(new V.T(w*v,u*t),y,b,new P.aq(x,!1),this)
x.b=!0
z.B(x)
return!0},
ge8:function(){var z=this.b
if(z==null){z=D.B()
this.b=z}return z},
gc5:function(){var z=this.c
if(z==null){z=D.B()
this.c=z}return z},
geB:function(){var z=this.d
if(z==null){z=D.B()
this.d=z}return z}},de:{"^":"cp;x,c,d,e,a,0b"},cp:{"^":"t;"},fb:{"^":"cp;x,y,z,Q,ch,c,d,e,a,0b"},jQ:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
be:function(a,b){var z,y,x,w
H.f(a,"$isa",[V.a6],"$asa")
z=new P.aq(Date.now(),!1)
y=a.length>0?a[0]:V.aK()
x=this.a.gb3()
w=new X.fb(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
jO:function(a){var z
H.f(a,"$isa",[V.a6],"$asa")
z=this.b
if(z==null)return!1
z.B(this.be(a,!0))
return!0},
jM:function(a){var z
H.f(a,"$isa",[V.a6],"$asa")
z=this.c
if(z==null)return!1
z.B(this.be(a,!0))
return!0},
jN:function(a){var z
H.f(a,"$isa",[V.a6],"$asa")
z=this.d
if(z==null)return!1
z.B(this.be(a,!1))
return!0}},k3:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
sh1:function(a){this.z=H.f(a,"$isa",[[P.dm,P.b]],"$asa")},
gb3:function(){var z=this.a
return V.bE(0,0,C.o.ge3(z).c,C.o.ge3(z).d)},
dA:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eu(z,new X.aB(y,a.altKey,a.shiftKey))},
b_:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aB(y,a.altKey,a.shiftKey)},
cA:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aB(y,a.altKey,a.shiftKey)},
aH:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.M()
v=z.top
if(typeof x!=="number")return x.M()
return new V.a6(y-w,x-v)},
bg:function(a){return new V.T(a.movementX,a.movementY)},
cu:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.a6])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v){u=x[v]
t=C.j.a_(u.pageX)
C.j.a_(u.pageY)
s=z.left
C.j.a_(u.pageX)
C.a.h(y,new V.a6(t-s,C.j.a_(u.pageY)-z.top))}return y},
aF:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.e4(z,new X.aB(y,a.altKey,a.shiftKey))},
cn:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.M()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.M()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
kx:[function(a){this.f=!0},"$1","ghz",4,0,9],
kp:[function(a){this.f=!1},"$1","ghr",4,0,9],
ks:[function(a){H.e(a,"$isat")
if(this.f&&this.cn(a))a.preventDefault()},"$1","ghu",4,0,4],
kz:[function(a){var z
H.e(a,"$isbx")
if(!this.f)return
z=this.dA(a)
this.b.jP(z)},"$1","ghB",4,0,17],
ky:[function(a){var z
H.e(a,"$isbx")
if(!this.f)return
z=this.dA(a)
this.b.jL(z)},"$1","ghA",4,0,17],
kB:[function(a){var z,y,x,w
H.e(a,"$isat")
z=this.a
z.focus()
this.f=!0
this.b_(a)
if(this.x){y=this.aF(a)
x=this.bg(a)
if(this.d.d0(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aF(a)
w=this.aH(a)
if(this.c.d0(y,w))a.preventDefault()},"$1","ghE",4,0,4],
kD:[function(a){var z,y,x
H.e(a,"$isat")
this.b_(a)
z=this.aF(a)
if(this.x){y=this.bg(a)
if(this.d.br(z,y))a.preventDefault()
return}if(this.r)return
x=this.aH(a)
if(this.c.br(z,x))a.preventDefault()},"$1","ghG",4,0,4],
ku:[function(a){var z,y,x
H.e(a,"$isat")
if(!this.cn(a)){this.b_(a)
z=this.aF(a)
if(this.x){y=this.bg(a)
if(this.d.br(z,y))a.preventDefault()
return}if(this.r)return
x=this.aH(a)
if(this.c.br(z,x))a.preventDefault()}},"$1","ghw",4,0,4],
kC:[function(a){var z,y,x
H.e(a,"$isat")
this.b_(a)
z=this.aF(a)
if(this.x){y=this.bg(a)
if(this.d.bq(z,y))a.preventDefault()
return}if(this.r)return
x=this.aH(a)
if(this.c.bq(z,x))a.preventDefault()},"$1","ghF",4,0,4],
kt:[function(a){var z,y,x
H.e(a,"$isat")
if(!this.cn(a)){this.b_(a)
z=this.aF(a)
if(this.x){y=this.bg(a)
if(this.d.bq(z,y))a.preventDefault()
return}if(this.r)return
x=this.aH(a)
if(this.c.bq(z,x))a.preventDefault()}},"$1","ghv",4,0,4],
kE:[function(a){var z,y
H.e(a,"$isbK")
this.b_(a)
z=new V.T((a&&C.F).gji(a),C.F.gjj(a)).C(0,180)
if(this.x){if(this.d.jQ(z))a.preventDefault()
return}if(this.r)return
y=this.aH(a)
if(this.c.jR(z,y))a.preventDefault()},"$1","ghH",4,0,36],
kF:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.aF(this.y)
x=this.aH(this.y)
this.d.hD(y,x,z)}},"$1","ghI",4,0,9],
kN:[function(a){var z
H.e(a,"$isbe")
this.a.focus()
this.f=!0
this.cA(a)
z=this.cu(a)
if(this.e.jO(z))a.preventDefault()},"$1","ghQ",4,0,10],
kL:[function(a){var z
H.e(a,"$isbe")
this.cA(a)
z=this.cu(a)
if(this.e.jM(z))a.preventDefault()},"$1","ghO",4,0,10],
kM:[function(a){var z
H.e(a,"$isbe")
this.cA(a)
z=this.cu(a)
if(this.e.jN(z))a.preventDefault()},"$1","ghP",4,0,10]}}],["","",,D,{"^":"",cc:{"^":"b;0a,0b,0c,0d",
gm:function(){var z=this.d
if(z==null){z=D.B()
this.d=z}return z},
aS:[function(a){var z
H.e(a,"$ist")
z=this.d
if(!(z==null))z.B(a)},function(){return this.aS(null)},"kg","$1","$0","gft",0,2,0],
$isZ:1,
$isaC:1,
p:{
eg:function(a,b){var z,y,x
z=new D.cc()
z.c=new V.U(1,1,1)
z.a=V.k9()
y=z.b
z.b=b
b.gm().h(0,z.gft())
x=new D.x("mover",y,z.b,z,[U.a8])
x.b=!0
z.aS(x)
if(!z.c.u(0,a)){y=z.c
z.c=a
x=new D.x("color",y,a,z,[V.U])
x.b=!0
z.aS(x)}return z}}},Z:{"^":"b;",$isaC:1},ij:{"^":"R;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
sfZ:function(a){this.e=H.f(a,"$isa",[D.cc],"$asa")},
shR:function(a){this.f=H.f(a,"$isa",[D.eM],"$asa")},
sig:function(a){this.r=H.f(a,"$isa",[D.eW],"$asa")},
siv:function(a){this.x=H.f(a,"$isa",[D.f4],"$asa")},
siw:function(a){this.y=H.f(a,"$isa",[D.f5],"$asa")},
six:function(a){this.z=H.f(a,"$isa",[D.f6],"$asa")},
gm:function(){var z=this.Q
if(z==null){z=D.B()
this.Q=z}return z},
aS:function(a){var z=this.Q
if(!(z==null))z.B(a)},
hC:[function(a){var z
H.e(a,"$ist")
z=this.ch
if(!(z==null))z.B(a)},function(){return this.hC(null)},"kA","$1","$0","gdJ",0,2,0],
kG:[function(a){var z,y,x
H.f(a,"$isi",[D.Z],"$asi")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.y)(a),++y){x=a[y]
if(x==null||this.fs(x))return!1}return!0},"$1","ghJ",4,0,40],
km:[function(a,b){var z,y,x,w,v,u,t,s
z=D.Z
H.f(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gdJ(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=H.e(b[u],"$isZ")
if(t instanceof D.cc)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.ac()
s.sae(null)
s.saZ(null)
s.c=null
s.d=0
t.d=s}H.l(x,w)
if(s.a==null)s.sae(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}z=new D.bX(a,b,this,[z])
z.b=!0
this.aS(z)},"$2","gho",8,0,18],
kI:[function(a,b){var z,y,x,w
z=D.Z
H.f(b,"$isi",[z],"$asi")
for(y=b.gP(b),x=this.gdJ();y.A();){w=y.gI()
C.a.R(this.e,w)
w.gm().R(0,x)}z=new D.bY(a,b,this,[z])
z.b=!0
this.aS(z)},"$2","ghL",8,0,18],
fs:function(a){var z=C.a.U(this.e,a)
return z},
$asi:function(){return[D.Z]},
$asR:function(){return[D.Z]}},eM:{"^":"b;",$isZ:1,$isaC:1},eW:{"^":"b;",$isZ:1,$isaC:1},f4:{"^":"b;",$isZ:1,$isaC:1},f5:{"^":"b;",$isZ:1,$isaC:1},f6:{"^":"b;",$isZ:1,$isaC:1}}],["","",,V,{"^":"",
m_:[function(a,b){if(typeof b!=="number")return b.M()
if(typeof a!=="number")return H.E(a)
return Math.abs(b-a)<=1e-9},"$2","iF",8,0,38],
lV:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.j.f2(a-b,z)
return(a<0?a+z:a)+b},
L:function(a,b,c){if(a==null)return C.i.ao("null",c)
return C.i.ao(C.j.eL($.m.$2(a,0)?0:a,b),c+b+1)},
bl:function(a,b,c){var z,y,x,w,v,u
H.f(a,"$isa",[P.w],"$asa")
z=H.c([],[P.o])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.y)(a),++w){v=V.L(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.k(z,u)
C.a.Z(z,u,C.i.ao(z[u],x))}return z},
bT:function(a,b){return C.j.ka(Math.pow(b,C.O.cU(Math.log(H.ln(a))/Math.log(b))))},
U:{"^":"b;a,b,c",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}},
ap:{"^":"b;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ap))return!1
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
dc:{"^":"b;a,b,c,d,e,f,r,x,y",
a2:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.w])
return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dc))return!1
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
y=V.bl(H.c([this.a,this.d,this.r],z),3,0)
x=V.bl(H.c([this.b,this.e,this.x],z),3,0)
w=V.bl(H.c([this.c,this.f,this.y],z),3,0)
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
a_:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a2:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.w])
return z},
cW:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.m.$2(a2,0))return V.aX()
a3=1/a2
a4=-w
a5=-i
return V.aA((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
w:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
return V.aA(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
d4:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.M(this.a*z+this.b*y+this.c*x,this.e*z+this.f*y+this.r*x,this.y*z+this.z*y+this.Q*x)},
by:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.ak(this.a*z+this.b*y+this.c*x+this.d,this.e*z+this.f*y+this.r*x+this.x,this.y*z+this.z*y+this.Q*x+this.ch)},
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
ew:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.w]
y=V.bl(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bl(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bl(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bl(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
N:function(){return this.ew("",3,0)},
D:function(a){return this.ew(a,3,0)},
p:{
aX:function(){var z=$.co
if(z==null){z=V.aA(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.co=z}return z},
aA:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a_(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
iH:function(a,b,c){return V.aA(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
iG:function(a,b,c,d){return V.aA(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
eF:function(a,b,c,d){d=V.fu()
return V.eE(V.eO(),d,new V.M(a,b,c))},
eE:function(a,b,c){var z,y,x,w,v,u,t,s
z=c.C(0,Math.sqrt(c.H(c)))
y=b.bm(z)
x=y.C(0,Math.sqrt(y.H(y)))
w=z.bm(x)
v=new V.M(a.a,a.b,a.c)
u=x.S(0).H(v)
t=w.S(0).H(v)
s=z.S(0).H(v)
return V.aA(x.a,w.a,z.a,u,x.b,w.b,z.b,t,x.c,w.c,z.c,s,0,0,0,1)}}},
a6:{"^":"b;a,b",
M:function(a,b){return new V.a6(this.a-b.a,this.b-b.b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"},
p:{
aK:function(){var z=$.eN
if(z==null){z=new V.a6(0,0)
$.eN=z}return z}}},
ak:{"^":"b;a,b,c",
M:function(a,b){return new V.ak(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ak))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"},
p:{
eO:function(){var z=$.bB
if(z==null){z=new V.ak(0,0,0)
$.bB=z}return z}}},
bC:{"^":"b;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bC))return!1
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
cs:{"^":"b;a,b,c,d",
gal:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cs))return!1
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
dh:function(){var z=$.bF
if(z==null){z=V.bE(0,0,1,1)
$.bF=z}return z},
bE:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cs(a,b,c,d)}}},
T:{"^":"b;a,b",
jz:[function(a){return Math.sqrt(this.H(this))},"$0","gq",1,0,19],
H:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.w()
if(typeof y!=="number")return H.E(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.w()
if(typeof w!=="number")return H.E(w)
return z*y+x*w},
w:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.w()
y=this.b
if(typeof y!=="number")return y.w()
return new V.T(z*b,y*b)},
C:function(a,b){var z,y
if($.m.$2(b,0)){z=$.fq
if(z==null){z=new V.T(0,0)
$.fq=z}return z}z=this.a
if(typeof z!=="number")return z.C()
y=this.b
if(typeof y!=="number")return y.C()
return new V.T(z/b,y/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}},
M:{"^":"b;a,b,c",
jz:[function(a){return Math.sqrt(this.H(this))},"$0","gq",1,0,19],
H:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cX:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.M(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
bm:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.M(z*y-x*w,x*v-u*y,u*w-z*v)},
J:function(a,b){return new V.M(this.a+b.a,this.b+b.b,this.c+b.c)},
S:function(a){return new V.M(-this.a,-this.b,-this.c)},
C:function(a,b){if($.m.$2(b,0))return V.c1()
return new V.M(this.a/b,this.b/b,this.c/b)},
ex:function(){if(!$.m.$2(0,this.a))return!1
if(!$.m.$2(0,this.b))return!1
if(!$.m.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
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
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"},
p:{
c1:function(){var z=$.ft
if(z==null){z=new V.M(0,0,0)
$.ft=z}return z},
fu:function(){var z=$.fs
if(z==null){z=new V.M(0,1,0)
$.fs=z}return z},
k9:function(){var z=$.cz
if(z==null){z=new V.M(0,0,1)
$.cz=z}return z}}}}],["","",,U,{"^":"",ht:{"^":"e6;0a,0b,0c,0d,0e,0f,0r,0x,0y",
cd:function(a){var z=V.lV(a,this.c,this.b)
return z},
gm:function(){var z=this.y
if(z==null){z=D.B()
this.y=z}return z},
W:function(a){var z=this.y
if(!(z==null))z.B(a)},
sd7:function(a,b){},
scY:function(a){var z,y
z=this.b
if(!$.m.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.cd(z)}z=new D.x("maximumLocation",y,this.b,this,[P.w])
z.b=!0
this.W(z)}},
sd_:function(a){var z,y
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.cd(z)}z=new D.x("minimumLocation",y,this.c,this,[P.w])
z.b=!0
this.W(z)}},
sak:function(a,b){var z,y
b=this.cd(b)
z=this.d
if(!$.m.$2(z,b)){y=this.d
this.d=b
z=new D.x("location",y,b,this,[P.w])
z.b=!0
this.W(z)}},
scZ:function(a){var z,y,x
z=this.e
if(!$.m.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.x("maximumVelocity",y,a,this,[P.w])
z.b=!0
this.W(z)}},
sX:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.m.$2(z,a)){x=this.f
this.f=a
z=new D.x("velocity",x,a,this,[P.w])
z.b=!0
this.W(z)}},
scL:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.m.$2(z,a)){y=this.x
this.x=a
z=new D.x("dampening",y,a,this,[P.w])
z.b=!0
this.W(z)}},
aa:function(a){var z,y,x,w
z=this.f
if($.m.$2(z,0)){z=this.r
z=!$.m.$2(z,0)}else z=!0
if(z){y=this.f+this.r*a
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sak(0,this.d+y*a)
z=this.x
if(!$.m.$2(z,0)){w=y*Math.pow(1-this.x,a)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sX(y)}},
p:{
d_:function(){var z=new U.ht()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},d0:{"^":"a8;0a,0b",
gm:function(){var z=this.b
if(z==null){z=D.B()
this.b=z}return z},
sV:function(a){var z,y,x
if(!J.N(this.a,a)){z=this.a
this.a=a
y=new D.x("matrix",z,a,this,[V.a_])
y.b=!0
x=this.b
if(!(x==null))x.B(y)}},
b9:function(a,b){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d0))return!1
return J.N(this.a,b.a)},
i:function(a){return"Constant: "+this.a.D("          ")},
p:{
d1:function(a){var z=new U.d0()
z.sV(a)
return z}}},eo:{"^":"R;0e,0f,0r,0a,0b,0c,0d",
gm:function(){var z=this.e
if(z==null){z=D.B()
this.e=z}return z},
W:[function(a){var z
H.e(a,"$ist")
z=this.e
if(!(z==null))z.B(a)},function(){return this.W(null)},"ar","$1","$0","gaX",0,2,0],
kl:[function(a,b){var z,y,x,w,v,u,t,s
z=U.a8
H.f(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gaX(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){s=t.gm()
s.toString
H.l(x,w)
if(s.a==null)s.sae(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.bX(a,b,this,[z])
z.b=!0
this.W(z)},"$2","ghn",8,0,20],
kH:[function(a,b){var z,y,x
z=U.a8
H.f(b,"$isi",[z],"$asi")
for(y=b.gP(b),x=this.gaX();y.A();)y.gI().gm().R(0,x)
z=new D.bY(a,b,this,[z])
z.b=!0
this.W(z)},"$2","ghK",8,0,20],
b9:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(typeof z!=="number")return z.av()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.ao(z,z.length,0,[H.v(z,0)]),x=null;z.A();){y=z.d
if(y!=null){w=y.b9(a,b)
if(w!=null)x=x==null?w:w.w(0,x)}}this.f=x==null?V.aX():x
z=this.e
if(!(z==null))z.aN()}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eo))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.k(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.k(w,y)
if(!J.N(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asi:function(){return[U.a8]},
$asR:function(){return[U.a8]},
$isa8:1},a8:{"^":"e6;"},k4:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gm:function(){var z=this.cy
if(z==null){z=D.B()
this.cy=z}return z},
W:[function(a){var z
H.e(a,"$ist")
z=this.cy
if(!(z==null))z.B(a)},function(){return this.W(null)},"ar","$1","$0","gaX",0,2,0],
bj:function(a){if(this.a!=null)return!1
this.a=a
a.c.ge8().h(0,this.gco())
this.a.c.geB().h(0,this.gcp())
this.a.c.gc5().h(0,this.gcq())
return!0},
hj:[function(a){H.e(a,"$ist")
if(!J.N(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gco",4,0,1],
hk:[function(a){var z,y,x,w,v,u,t
a=H.d(H.e(a,"$ist"),"$isbz")
if(!this.y)return
if(this.x){z=a.d.M(0,a.y)
z=new V.T(z.a,z.b)
z=z.H(z)
y=this.r
if(typeof y!=="number")return H.E(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.M(0,a.y)
z=new V.T(y.a,y.b).w(0,2).C(0,z.gal())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.w()
x=this.e
if(typeof x!=="number")return H.E(x)
y.sX(z*10*x)}else{z=a.c
y=a.d
x=y.M(0,a.y)
w=new V.T(x.a,x.b).w(0,2).C(0,z.gal())
x=this.b
v=w.a
if(typeof v!=="number")return v.S()
u=this.e
if(typeof u!=="number")return H.E(u)
t=this.z
if(typeof t!=="number")return H.E(t)
x.sak(0,-v*u+t)
this.b.sX(0)
y=y.M(0,a.z)
this.Q=new V.T(y.a,y.b).w(0,2).C(0,z.gal())}this.ar()},"$1","gcp",4,0,1],
hl:[function(a){var z,y,x
H.e(a,"$ist")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.H(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.w()
x=this.e
if(typeof x!=="number")return H.E(x)
z.sX(y*10*x)
this.ar()}},"$1","gcq",4,0,1],
b9:function(a,b){var z,y,x,w,v
z=this.ch
y=a.e
if(typeof z!=="number")return z.av()
if(z<y){this.ch=y
x=a.y
this.b.aa(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aA(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa8:1},k5:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gm:function(){var z=this.fx
if(z==null){z=D.B()
this.fx=z}return z},
W:[function(a){var z
H.e(a,"$ist")
z=this.fx
if(!(z==null))z.B(a)},function(){return this.W(null)},"ar","$1","$0","gaX",0,2,0],
bj:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.ge8().h(0,this.gco())
this.a.c.geB().h(0,this.gcp())
this.a.c.gc5().h(0,this.gcq())
z=this.a.d
y=z.f
if(y==null){y=D.B()
z.f=y
z=y}else z=y
z.h(0,this.ghh())
z=this.a.d
y=z.d
if(y==null){y=D.B()
z.d=y
z=y}else z=y
z.h(0,this.ghi())
z=this.a.e
y=z.b
if(y==null){y=D.B()
z.b=y
z=y}else z=y
z.h(0,this.git())
z=this.a.e
y=z.d
if(y==null){y=D.B()
z.d=y
z=y}else z=y
z.h(0,this.gis())
z=this.a.e
y=z.c
if(y==null){y=D.B()
z.c=y
z=y}else z=y
z.h(0,this.gir())
return!0},
aw:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.S()
z=-z}if(this.r){if(typeof y!=="number")return y.S()
y=-y}return new V.T(z,y)},
hj:[function(a){a=H.d(H.e(a,"$ist"),"$isbz")
if(!J.N(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gco",4,0,1],
hk:[function(a){var z,y,x,w,v,u,t
a=H.d(H.e(a,"$ist"),"$isbz")
if(!this.cx)return
if(this.ch){z=a.d.M(0,a.y)
z=new V.T(z.a,z.b)
z=z.H(z)
y=this.Q
if(typeof y!=="number")return H.E(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.M(0,a.y)
z=this.aw(new V.T(y.a,y.b).w(0,2).C(0,z.gal()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.S()
x=this.y
if(typeof x!=="number")return H.E(x)
y.sX(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.S()
y=this.x
if(typeof y!=="number")return H.E(y)
x.sX(-z*10*y)}else{z=a.c
y=a.d
x=y.M(0,a.y)
w=this.aw(new V.T(x.a,x.b).w(0,2).C(0,z.gal()))
x=this.c
v=w.a
if(typeof v!=="number")return v.S()
u=this.y
if(typeof u!=="number")return H.E(u)
t=this.cy
if(typeof t!=="number")return H.E(t)
x.sak(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.S()
v=this.x
if(typeof v!=="number")return H.E(v)
x=this.db
if(typeof x!=="number")return H.E(x)
t.sak(0,-u*v+x)
this.b.sX(0)
this.c.sX(0)
y=y.M(0,a.z)
this.dx=this.aw(new V.T(y.a,y.b).w(0,2).C(0,z.gal()))}this.ar()},"$1","gcp",4,0,1],
hl:[function(a){var z,y,x
H.e(a,"$ist")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.H(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.S()
x=this.y
if(typeof x!=="number")return H.E(x)
z.sX(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.S()
z=this.x
if(typeof z!=="number")return H.E(z)
x.sX(-y*10*z)
this.ar()}},"$1","gcq",4,0,1],
ki:[function(a){if(H.d(H.e(a,"$ist"),"$isey").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","ghh",4,0,1],
kj:[function(a){var z,y,x,w,v,u,t
a=H.d(H.e(a,"$ist"),"$isbz")
if(!J.N(this.d,a.x.b))return
z=a.c
y=a.d
x=y.M(0,a.y)
w=this.aw(new V.T(x.a,x.b).w(0,2).C(0,z.gal()))
x=this.c
v=w.a
if(typeof v!=="number")return v.S()
u=this.y
if(typeof u!=="number")return H.E(u)
t=this.cy
if(typeof t!=="number")return H.E(t)
x.sak(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.S()
v=this.x
if(typeof v!=="number")return H.E(v)
x=this.db
if(typeof x!=="number")return H.E(x)
t.sak(0,-u*v+x)
this.b.sX(0)
this.c.sX(0)
y=y.M(0,a.z)
this.dx=this.aw(new V.T(y.a,y.b).w(0,2).C(0,z.gal()))
this.ar()},"$1","ghi",4,0,1],
kR:[function(a){H.e(a,"$ist")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","git",4,0,1],
kQ:[function(a){var z,y,x,w,v,u,t
a=H.d(H.e(a,"$ist"),"$isfb")
if(!this.cx)return
if(this.ch){z=a.d.M(0,a.y)
z=new V.T(z.a,z.b)
z=z.H(z)
y=this.Q
if(typeof y!=="number")return H.E(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.M(0,a.y)
z=this.aw(new V.T(y.a,y.b).w(0,2).C(0,z.gal()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.S()
x=this.y
if(typeof x!=="number")return H.E(x)
y.sX(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.S()
y=this.x
if(typeof y!=="number")return H.E(y)
x.sX(-z*10*y)}else{z=a.c
y=a.d
x=y.M(0,a.y)
w=this.aw(new V.T(x.a,x.b).w(0,2).C(0,z.gal()))
x=this.c
v=w.a
if(typeof v!=="number")return v.S()
u=this.y
if(typeof u!=="number")return H.E(u)
t=this.cy
if(typeof t!=="number")return H.E(t)
x.sak(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.S()
v=this.x
if(typeof v!=="number")return H.E(v)
x=this.db
if(typeof x!=="number")return H.E(x)
t.sak(0,-u*v+x)
this.b.sX(0)
this.c.sX(0)
y=y.M(0,a.z)
this.dx=this.aw(new V.T(y.a,y.b).w(0,2).C(0,z.gal()))}this.ar()},"$1","gis",4,0,1],
kP:[function(a){var z,y,x
H.e(a,"$ist")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.H(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.S()
x=this.y
if(typeof x!=="number")return H.E(x)
z.sX(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.S()
z=this.x
if(typeof z!=="number")return H.E(z)
x.sX(-y*10*z)
this.ar()}},"$1","gir",4,0,1],
b9:function(a,b){var z,y,x,w,v
z=this.dy
y=a.e
if(typeof z!=="number")return z.av()
if(z<y){this.dy=y
x=a.y
this.c.aa(x)
this.b.aa(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aA(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.w(0,V.aA(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isa8:1},k6:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gm:function(){var z=this.r
if(z==null){z=D.B()
this.r=z}return z},
W:function(a){var z=this.r
if(!(z==null))z.B(a)},
bj:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.B()
z.e=y
z=y}else z=y
y=this.ghm()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.B()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
kk:[function(a){var z,y,x,w
H.e(a,"$ist")
if(!J.N(this.b,this.a.b.c))return
H.d(a,"$isde")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.w()
w=z+y*x
if(z!==w){this.d=w
z=new D.x("zoom",z,w,this,[P.w])
z.b=!0
this.W(z)}},"$1","ghm",4,0,1],
b9:function(a,b){var z,y,x
z=this.e
y=a.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.iG(x,x,x,1)}return this.f},
$isa8:1}}],["","",,M,{"^":"",hu:{"^":"R;0e,0f,0a,0b,0c,0d",
gm:function(){var z=this.f
if(z==null){z=D.B()
this.f=z}return z},
a3:[function(a){var z
H.e(a,"$ist")
z=this.f
if(!(z==null))z.B(a)},function(){return this.a3(null)},"dl","$1","$0","gY",0,2,0],
kJ:[function(a,b){var z,y,x,w,v,u,t,s
z=M.aE
H.f(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gY(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){s=t.gm()
s.toString
H.l(x,w)
if(s.a==null)s.sae(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.bX(a,b,this,[z])
z.b=!0
this.a3(z)},"$2","ghM",8,0,22],
kK:[function(a,b){var z,y,x
z=M.aE
H.f(b,"$isi",[z],"$asi")
for(y=b.gP(b),x=this.gY();y.A();)y.gI().gm().R(0,x)
z=new D.bY(a,b,this,[z])
z.b=!0
this.a3(z)},"$2","ghN",8,0,22],
a8:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.ao(z,z.length,0,[H.v(z,0)]);z.A();){y=z.d
if(!(y==null))y.a8(a)}this.e=!1},
$asi:function(){return[M.aE]},
$asR:function(){return[M.aE]},
$isaE:1},hw:{"^":"b;0a,0b,0c,0d,0e,0f",
gm:function(){var z=this.f
if(z==null){z=D.B()
this.f=z}return z},
a3:[function(a){var z
H.e(a,"$ist")
z=this.f
if(!(z==null))z.B(a)},function(){return this.a3(null)},"dl","$1","$0","gY",0,2,0],
sb2:function(a){var z,y
if(a==null)a=new X.i8()
z=this.a
if(z!==a){if(z!=null)z.gm().R(0,this.gY())
y=this.a
this.a=a
a.gm().h(0,this.gY())
z=new D.x("camera",y,this.a,this,[X.c8])
z.b=!0
this.a3(z)}},
saO:function(a,b){var z,y
if(b==null)b=X.d4(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gm().R(0,this.gY())
y=this.b
this.b=b
b.gm().h(0,this.gY())
z=new D.x("target",y,this.b,this,[X.ct])
z.b=!0
this.a3(z)}},
saB:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gm().R(0,this.gY())
y=this.c
this.c=a
if(a!=null)a.gm().h(0,this.gY())
z=new D.x("technique",y,this.c,this,[O.aN])
z.b=!0
this.a3(z)}},
a8:function(a){var z
a.d2(this.c)
this.b.K(a)
this.a.K(a)
z=this.c
if(z!=null)z.aa(a)
this.d.aa(a)
this.d.a8(a)
this.a.a9(a)
this.b.a9(a)
a.d1()},
$isaE:1,
p:{
d2:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=new M.hw()
z.sb2(a)
z.saO(0,b)
z.saB(c)
y=E.cd(null,!0,null,"",null,null)
x=F.dj()
w=x.a
v=new V.M(-1,-1,1)
v=v.C(0,Math.sqrt(v.H(v)))
u=w.bJ(new V.bC(1,2,4,6),new V.ap(1,0,0,1),new V.ak(-1,-1,0),new V.a6(0,1),v,null)
w=x.a
v=new V.M(1,-1,1)
v=v.C(0,Math.sqrt(v.H(v)))
t=w.bJ(new V.bC(0,3,4,6),new V.ap(0,0,1,1),new V.ak(1,-1,0),new V.a6(1,1),v,null)
w=x.a
v=new V.M(1,1,1)
v=v.C(0,Math.sqrt(v.H(v)))
s=w.bJ(new V.bC(0,2,5,6),new V.ap(0,1,0,1),new V.ak(1,1,0),new V.a6(1,0),v,null)
w=x.a
v=V.aK()
r=new V.M(-1,1,1)
r=r.C(0,Math.sqrt(r.H(r)))
q=w.bJ(new V.bC(0,2,4,7),new V.ap(1,1,0,1),new V.ak(-1,1,0),v,r,null)
x.d.iX(H.c([u,t,s,q],[F.aH]))
x.aJ()
y.sdf(0,x)
z.d=y
z.e=null
return z}}},hP:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
sfQ:function(a,b){this.d=H.f(b,"$isR",[E.ar],"$asR")},
a3:[function(a){var z
H.e(a,"$ist")
z=this.x
if(!(z==null))z.B(a)},function(){return this.a3(null)},"dl","$1","$0","gY",0,2,0],
kq:[function(a,b){var z,y,x,w,v,u,t,s
z=E.ar
H.f(b,"$isi",[z],"$asi")
for(y=b.length,x=this.gY(),w={func:1,ret:-1,args:[D.t]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){if(t.gap()==null){s=new D.ac()
s.sae(null)
s.saZ(null)
s.c=null
s.d=0
t.sap(s)}s=t.gap()
s.toString
H.l(x,w)
if(s.a==null)s.sae(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.bX(a,b,this,[z])
z.b=!0
this.a3(z)},"$2","ghs",8,0,5],
kr:[function(a,b){var z,y,x
z=E.ar
H.f(b,"$isi",[z],"$asi")
for(y=b.gP(b),x=this.gY();y.A();)y.gI().gm().R(0,x)
z=new D.bY(a,b,this,[z])
z.b=!0
this.a3(z)},"$2","ght",8,0,5],
sb2:function(a){var z,y
if(a==null)a=X.eK(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null)z.gm().R(0,this.gY())
y=this.a
this.a=a
a.gm().h(0,this.gY())
z=new D.x("camera",y,this.a,this,[X.c8])
z.b=!0
this.a3(z)}},
saO:function(a,b){var z,y
if(b==null)b=X.d4(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gm().R(0,this.gY())
y=this.b
this.b=b
b.gm().h(0,this.gY())
z=new D.x("target",y,this.b,this,[X.ct])
z.b=!0
this.a3(z)}},
saB:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gm().R(0,this.gY())
y=this.c
this.c=a
if(a!=null)a.gm().h(0,this.gY())
z=new D.x("technique",y,this.c,this,[O.aN])
z.b=!0
this.a3(z)}},
gm:function(){var z=this.x
if(z==null){z=D.B()
this.x=z}return z},
a8:function(a){var z
a.d2(this.c)
this.b.K(a)
this.a.K(a)
z=this.c
if(z!=null)z.aa(a)
for(z=this.d.a,z=new J.ao(z,z.length,0,[H.v(z,0)]);z.A();)z.d.aa(a)
for(z=this.d.a,z=new J.ao(z,z.length,0,[H.v(z,0)]);z.A();)z.d.a8(a)
this.a.toString
a.cy.aL()
a.db.aL()
this.b.a9(a)
a.d1()},
$isaE:1,
p:{
el:function(a,b,c,d){var z=new M.hP()
z.sfQ(0,O.c9(E.ar))
z.d.aP(z.ghs(),z.ght())
z.e=null
z.f=null
z.r=null
z.x=null
z.sb2(a)
z.saO(0,c)
z.saB(d)
return z}}},aE:{"^":"b;"}}],["","",,A,{"^":"",dZ:{"^":"b;a,b,c"},hk:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
jn:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
C.b.e9(w.a,w.c)}},
bn:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
C.b.e7(w.a,w.c)}}},ea:{"^":"ba;0z,0Q,0ch,0cx,0cy,0db,0dx,a,b,0c,0d,0e,0f,0r,0x,0y"},en:{"^":"ba;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,a,b,0c,0d,0e,0f,0r,0x,0y",
ag:function(a,b,c){if(c==null||!c.d)C.b.G(b.a,b.d,1)
else{a.f7(c)
C.b.G(b.a,b.d,0)}}},eC:{"^":"ba;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0az,0at,0bM,0ea,0bN,0bO,0eb,0ec,0bP,0bQ,0ed,0ee,0bR,0bS,0ef,0eg,0bT,0eh,0ei,0bU,0ej,0ek,0bV,0bW,0bX,0el,0em,0bY,0bZ,0en,0eo,0c_,0ep,0cO,0eq,0cP,0er,0cQ,0es,0cR,0eu,0cS,0ev,0cT,a,b,0c,0d,0e,0f,0r,0x,0y",
sfL:function(a){this.r1=H.f(a,"$isa",[A.a0],"$asa")},
sfu:function(a){this.cO=H.f(a,"$isa",[A.dw],"$asa")},
sfv:function(a){this.cP=H.f(a,"$isa",[A.dx],"$asa")},
sfw:function(a){this.cQ=H.f(a,"$isa",[A.dy],"$asa")},
sfz:function(a){this.cR=H.f(a,"$isa",[A.dz],"$asa")},
sfA:function(a){this.cS=H.f(a,"$isa",[A.dA],"$asa")},
sfB:function(a){this.cT=H.f(a,"$isa",[A.dB],"$asa")},
fh:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.z=a1
z=new P.bG("")
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
a1.iC(z)
a1.iJ(z)
a1.iD(z)
a1.iR(z)
a1.iS(z)
a1.iL(z)
a1.iW(z)
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
z=new P.bG("")
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
v.iG(z)
v.iB(z)
v.iE(z)
v.iH(z)
v.iP(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.iN(z)
v.iO(z)}v.iK(z)
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
p=H.c([],[P.o])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.l(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.iF(z)
v.iM(z)
v.iQ(z)
v.iT(z)
v.iU(z)
v.iV(z)
v.iI(z)}r=z.a+="// === Main ===\n"
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
n="vec4("+C.a.l(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.bp(x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a1.fr)this.id=H.d(this.y.n(0,"invViewMat"),"$isa0")
if(y)this.dy=H.d(this.y.n(0,"objMat"),"$isa0")
if(w)this.fr=H.d(this.y.n(0,"viewObjMat"),"$isa0")
this.fy=H.d(this.y.n(0,"projViewObjMat"),"$isa0")
if(a1.x2)this.k1=H.d(this.y.n(0,"txt2DMat"),"$iscx")
if(a1.y1)this.k2=H.d(this.y.n(0,"txtCubeMat"),"$isa0")
if(a1.y2)this.k3=H.d(this.y.n(0,"colorMat"),"$isa0")
this.sfL(H.c([],[A.a0]))
y=a1.az
if(y>0){this.k4=H.e(this.y.n(0,"bendMatCount"),"$isD")
for(m=0;m<y;++m){x=this.r1
w=this.y
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.p(P.n("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.d(l,"$isa0"))}}y=a1.a
if(y!==C.c){this.r2=H.d(this.y.n(0,"emissionClr"),"$isF")
switch(y){case C.c:break
case C.f:break
case C.e:this.rx=H.d(this.y.n(0,"emissionTxt"),"$isa1")
this.x1=H.d(this.y.n(0,"nullEmissionTxt"),"$isD")
break
case C.d:this.ry=H.d(this.y.n(0,"emissionTxt"),"$isae")
this.x1=H.d(this.y.n(0,"nullEmissionTxt"),"$isD")
break}}y=a1.b
if(y!==C.c){this.x2=H.d(this.y.n(0,"ambientClr"),"$isF")
switch(y){case C.c:break
case C.f:break
case C.e:this.y1=H.d(this.y.n(0,"ambientTxt"),"$isa1")
this.az=H.d(this.y.n(0,"nullAmbientTxt"),"$isD")
break
case C.d:this.y2=H.d(this.y.n(0,"ambientTxt"),"$isae")
this.az=H.d(this.y.n(0,"nullAmbientTxt"),"$isD")
break}}y=a1.c
if(y!==C.c){this.at=H.d(this.y.n(0,"diffuseClr"),"$isF")
switch(y){case C.c:break
case C.f:break
case C.e:this.bM=H.d(this.y.n(0,"diffuseTxt"),"$isa1")
this.bN=H.d(this.y.n(0,"nullDiffuseTxt"),"$isD")
break
case C.d:this.ea=H.d(this.y.n(0,"diffuseTxt"),"$isae")
this.bN=H.d(this.y.n(0,"nullDiffuseTxt"),"$isD")
break}}y=a1.d
if(y!==C.c){this.bO=H.d(this.y.n(0,"invDiffuseClr"),"$isF")
switch(y){case C.c:break
case C.f:break
case C.e:this.eb=H.d(this.y.n(0,"invDiffuseTxt"),"$isa1")
this.bP=H.d(this.y.n(0,"nullInvDiffuseTxt"),"$isD")
break
case C.d:this.ec=H.d(this.y.n(0,"invDiffuseTxt"),"$isae")
this.bP=H.d(this.y.n(0,"nullInvDiffuseTxt"),"$isD")
break}}y=a1.e
if(y!==C.c){this.bS=H.d(this.y.n(0,"shininess"),"$isK")
this.bQ=H.d(this.y.n(0,"specularClr"),"$isF")
switch(y){case C.c:break
case C.f:break
case C.e:this.ed=H.d(this.y.n(0,"specularTxt"),"$isa1")
this.bR=H.d(this.y.n(0,"nullSpecularTxt"),"$isD")
break
case C.d:this.ee=H.d(this.y.n(0,"specularTxt"),"$isae")
this.bR=H.d(this.y.n(0,"nullSpecularTxt"),"$isD")
break}}switch(a1.f){case C.c:break
case C.f:break
case C.e:this.ef=H.d(this.y.n(0,"bumpTxt"),"$isa1")
this.bT=H.d(this.y.n(0,"nullBumpTxt"),"$isD")
break
case C.d:this.eg=H.d(this.y.n(0,"bumpTxt"),"$isae")
this.bT=H.d(this.y.n(0,"nullBumpTxt"),"$isD")
break}if(a1.dy){this.eh=H.d(this.y.n(0,"envSampler"),"$isae")
this.ei=H.d(this.y.n(0,"nullEnvTxt"),"$isD")
y=a1.r
if(y!==C.c){this.bU=H.d(this.y.n(0,"reflectClr"),"$isF")
switch(y){case C.c:break
case C.f:break
case C.e:this.ej=H.d(this.y.n(0,"reflectTxt"),"$isa1")
this.bV=H.d(this.y.n(0,"nullReflectTxt"),"$isD")
break
case C.d:this.ek=H.d(this.y.n(0,"reflectTxt"),"$isae")
this.bV=H.d(this.y.n(0,"nullReflectTxt"),"$isD")
break}}y=a1.x
if(y!==C.c){this.bW=H.d(this.y.n(0,"refraction"),"$isK")
this.bX=H.d(this.y.n(0,"refractClr"),"$isF")
switch(y){case C.c:break
case C.f:break
case C.e:this.el=H.d(this.y.n(0,"refractTxt"),"$isa1")
this.bY=H.d(this.y.n(0,"nullRefractTxt"),"$isD")
break
case C.d:this.em=H.d(this.y.n(0,"refractTxt"),"$isae")
this.bY=H.d(this.y.n(0,"nullRefractTxt"),"$isD")
break}}}y=a1.y
if(y!==C.c){this.bZ=H.d(this.y.n(0,"alpha"),"$isK")
switch(y){case C.c:break
case C.f:break
case C.e:this.en=H.d(this.y.n(0,"alphaTxt"),"$isa1")
this.c_=H.d(this.y.n(0,"nullAlphaTxt"),"$isD")
break
case C.d:this.eo=H.d(this.y.n(0,"alphaTxt"),"$isae")
this.c_=H.d(this.y.n(0,"nullAlphaTxt"),"$isD")
break}}this.sfu(H.c([],[A.dw]))
this.sfv(H.c([],[A.dx]))
this.sfw(H.c([],[A.dy]))
this.sfz(H.c([],[A.dz]))
this.sfA(H.c([],[A.dA]))
this.sfB(H.c([],[A.dB]))
if(a1.k2){y=a1.z
if(y>0){this.ep=H.e(this.y.n(0,"dirLightCount"),"$isD")
for(m=0;m<y;++m){x=this.y
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isF")
x=this.y
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isF")
x=this.cO;(x&&C.a).h(x,new A.dw(m,l,k))}}y=a1.Q
if(y>0){this.eq=H.e(this.y.n(0,"pntLightCount"),"$isD")
for(m=0;m<y;++m){x=this.y
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isF")
x=this.y
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isF")
x=this.y
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isF")
x=this.y
w="pntLights["+m+"].att0"
i=x.j(0,w)
if(i==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isK")
x=this.y
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isK")
x=this.y
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isK")
x=this.cP;(x&&C.a).h(x,new A.dx(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.er=H.e(this.y.n(0,"spotLightCount"),"$isD")
for(m=0;m<y;++m){x=this.y
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isF")
x=this.y
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isF")
x=this.y
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isF")
x=this.y
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isF")
x=this.y
w="spotLights["+m+"].cutoff"
h=x.j(0,w)
if(h==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isK")
x=this.y
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isK")
x=this.y
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isK")
x=this.y
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isK")
x=this.y
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isK")
x=this.cQ;(x&&C.a).h(x,new A.dy(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.es=H.e(this.y.n(0,"txtDirLightCount"),"$isD")
for(m=0;m<y;++m){x=this.y
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isF")
x=this.y
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isF")
x=this.y
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isF")
x=this.y
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isF")
x=this.y
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isF")
x=this.y
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isD")
x=this.y
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isa1")
x=this.cR;(x&&C.a).h(x,new A.dz(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.eu=H.e(this.y.n(0,"txtPntLightCount"),"$isD")
for(m=0;m<y;++m){x=this.y
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isF")
x=this.y
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isF")
x=this.y
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$iscx")
x=this.y
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isF")
x=this.y
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isD")
x=this.y
w="txtPntLights["+m+"].att0"
g=x.j(0,w)
if(g==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isK")
x=this.y
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isK")
x=this.y
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isK")
x=this.y
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isae")
x=this.cS;(x&&C.a).h(x,new A.dA(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.ev=H.e(this.y.n(0,"txtSpotLightCount"),"$isD")
for(m=0;m<y;++m){x=this.y
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isF")
x=this.y
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isF")
x=this.y
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isF")
x=this.y
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isF")
x=this.y
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isF")
x=this.y
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isD")
x=this.y
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isF")
x=this.y
w="txtSpotLights["+m+"].tuScalar"
e=x.j(0,w)
if(e==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isK")
x=this.y
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isK")
x=this.y
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(c,"$isK")
x=this.y
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(b,"$isK")
x=this.y
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a,"$isK")
x=this.y
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a0,"$isa1")
x=this.cT;(x&&C.a).h(x,new A.dB(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
ag:function(a,b,c){C.b.G(b.a,b.d,1)},
am:function(a,b,c){if(c==null||c.d<6)C.b.G(b.a,b.d,1)
else{a.de(c)
C.b.G(b.a,b.d,0)}},
p:{
iz:function(a,b){var z,y
z=a.at
y=new A.eC(b,z)
y.bc(b,z)
y.fh(a,b)
return y}}},iC:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,az,at,bM",
iC:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.az+"];\n"
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
iJ:function(a){var z
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
iD:function(a){var z
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
iR:function(a){var z,y
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
iS:function(a){var z,y
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
iL:function(a){var z
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
iW:function(a){var z
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
aG:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.k(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.bA(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
iG:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aG(a,z,"emission")
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
iB:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aG(a,z,"ambient")
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
iE:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aG(a,z,"diffuse")
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
iH:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aG(a,z,"invDiffuse")
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
iP:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aG(a,z,"specular")
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
iK:function(a){var z,y
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
iN:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aG(a,z,"reflect")
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
iO:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aG(a,z,"refract")
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
iF:function(a){var z,y
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
iM:function(a){var z,y
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
iQ:function(a){var z,y
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
iT:function(a){var z,y,x
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
iU:function(a){var z,y,x
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
iV:function(a){var z,y,x
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
iI:function(a){var z
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
i:function(a){return this.at}},dw:{"^":"b;a,b,c"},dz:{"^":"b;a,b,c,d,e,f,r,x"},dx:{"^":"b;a,b,c,d,e,f,r"},dA:{"^":"b;a,b,c,d,e,f,r,x,y,z"},dy:{"^":"b;a,b,c,d,e,f,r,x,y,z"},dB:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},ba:{"^":"cT;",
bc:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
bp:function(a,b){var z,y,x
this.c=a
this.d=b
this.e=this.dB(a,35633)
this.f=this.dB(this.d,35632)
z=this.a
y=z.createProgram()
this.r=y
C.b.dW(z,y,this.e)
C.b.dW(z,this.r,this.f)
C.b.jA(z,this.r)
if(!H.dL(C.b.c8(z,this.r,35714))){x=C.b.eY(z,this.r)
C.b.jg(z,this.r)
H.p(P.n("Failed to link shader: "+H.h(x)))}this.i9()
this.ib()},
K:function(a){C.b.ba(a.a,this.r)
this.x.jn()},
dB:function(a,b){var z,y,x
z=this.a
y=C.b.je(z,b)
C.b.f8(z,y,a)
C.b.j6(z,y)
if(!H.dL(C.b.f0(z,y,35713))){x=C.b.f_(z,y)
C.b.jh(z,y)
throw H.j(P.n("Error compiling shader '"+H.h(y)+"': "+H.h(x)))}return y},
i9:function(){var z,y,x,w,v,u
z=H.c([],[A.dZ])
y=this.a
x=H.X(C.b.c8(y,this.r,35721))
if(typeof x!=="number")return H.E(x)
w=0
for(;w<x;++w){v=C.b.eS(y,this.r,w)
u=C.b.eU(y,this.r,v.name)
C.a.h(z,new A.dZ(y,v.name,u))}this.x=new A.hk(z)},
ib:function(){var z,y,x,w,v,u
z=H.c([],[A.a9])
y=this.a
x=H.X(C.b.c8(y,this.r,35718))
if(typeof x!=="number")return H.E(x)
w=0
for(;w<x;++w){v=C.b.eT(y,this.r,w)
u=C.b.f1(y,this.r,v.name)
C.a.h(z,this.jf(v.type,v.size,v.name,u))}this.y=new A.jX(z)},
aV:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.D(z,y,b,c)
else return A.dv(z,y,b,a,c)},
fU:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.a1(z,y,b,c)
else return A.dv(z,y,b,a,c)},
fV:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ae(z,y,b,c)
else return A.dv(z,y,b,a,c)},
bI:function(a,b){return new P.fB(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.h(b)+"."))},
jf:function(a,b,c,d){switch(a){case 5120:return this.aV(b,c,d)
case 5121:return this.aV(b,c,d)
case 5122:return this.aV(b,c,d)
case 5123:return this.aV(b,c,d)
case 5124:return this.aV(b,c,d)
case 5125:return this.aV(b,c,d)
case 5126:return new A.K(this.a,this.r,c,d)
case 35664:return new A.aG(this.a,this.r,c,d)
case 35665:return new A.F(this.a,this.r,c,d)
case 35666:return new A.fn(this.a,this.r,c,d)
case 35667:return new A.jU(this.a,this.r,c,d)
case 35668:return new A.jV(this.a,this.r,c,d)
case 35669:return new A.jW(this.a,this.r,c,d)
case 35674:return new A.jZ(this.a,this.r,c,d)
case 35675:return new A.cx(this.a,this.r,c,d)
case 35676:return new A.a0(this.a,this.r,c,d)
case 35678:return this.fU(b,c,d)
case 35680:return this.fV(b,c,d)
case 35670:throw H.j(this.bI("BOOL",c))
case 35671:throw H.j(this.bI("BOOL_VEC2",c))
case 35672:throw H.j(this.bI("BOOL_VEC3",c))
case 35673:throw H.j(this.bI("BOOL_VEC4",c))
default:throw H.j(P.n("Unknown uniform variable type "+H.h(a)+" for "+H.h(c)+"."))}}},ca:{"^":"b;a,b",
i:function(a){return this.b}},eV:{"^":"ba;0z,0Q,0ch,0cx,0cy,0db,a,b,0c,0d,0e,0f,0r,0x,0y"},f2:{"^":"ba;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,a,b,0c,0d,0e,0f,0r,0x,0y",
siy:function(a){this.cx=H.f(a,"$isa",[A.a1],"$asa")},
sfR:function(a){this.cy=H.f(a,"$isa",[A.a0],"$asa")},
sih:function(a){this.db=H.f(a,"$isa",[A.aG],"$asa")},
sii:function(a){this.dx=H.f(a,"$isa",[A.aG],"$asa")},
sfX:function(a){this.dy=H.f(a,"$isa",[A.aG],"$asa")},
sfY:function(a){this.fr=H.f(a,"$isa",[A.aG],"$asa")},
sh7:function(a){this.fx=H.f(a,"$isa",[A.D],"$asa")},
fl:function(a,b){var z,y,x,w,v
this.bp("attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.jI(a))
this.z=this.x.j(0,"posAttr")
this.Q=H.d(this.y.n(0,"txtCount"),"$isD")
this.ch=H.d(this.y.n(0,"backClr"),"$isfn")
this.siy(H.c([],[A.a1]))
this.sfR(H.c([],[A.a0]))
z=[A.aG]
this.sih(H.c([],z))
this.sii(H.c([],z))
this.sfX(H.c([],z))
this.sfY(H.c([],z))
this.sh7(H.c([],[A.D]))
for(y=0;y<a;++y){z=this.cx
x=this.y
w="txt"+y
v=x.j(0,w)
if(v==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.d(v,"$isa1"))
z=this.cy
x=this.y
w="clrMat"+y
v=x.j(0,w)
if(v==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.d(v,"$isa0"))
z=this.db
x=this.y
w="srcLoc"+y
v=x.j(0,w)
if(v==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.d(v,"$isaG"))
z=this.dx
x=this.y
w="srcSize"+y
v=x.j(0,w)
if(v==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.d(v,"$isaG"))
z=this.dy
x=this.y
w="destLoc"+y
v=x.j(0,w)
if(v==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.d(v,"$isaG"))
z=this.fr
x=this.y
w="destSize"+y
v=x.j(0,w)
if(v==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.d(v,"$isaG"))
z=this.fx
x=this.y
w="flip"+y
v=x.j(0,w)
if(v==null)H.p(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.d(v,"$isD"))}},
p:{
jI:function(a){var z,y
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
jH:function(a,b){var z,y
z="TextureLayout_"+a
y=new A.f2(b,z)
y.bc(b,z)
y.fl(a,b)
return y}}},a9:{"^":"b;"},jX:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.j(0,b)
if(z==null)throw H.j(P.n("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.N()},
jr:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.y)(z),++w)x+=z[w].i(0)+a
return x},
N:function(){return this.jr("\n")}},D:{"^":"a9;a,b,c,d",
i:function(a){return"Uniform1i: "+H.h(this.c)}},jU:{"^":"a9;a,b,c,d",
i:function(a){return"Uniform2i: "+H.h(this.c)}},jV:{"^":"a9;a,b,c,d",
i:function(a){return"Uniform3i: "+H.h(this.c)}},jW:{"^":"a9;a,b,c,d",
i:function(a){return"Uniform4i: "+H.h(this.c)}},jT:{"^":"a9;0e,0f,a,b,c,d",
siz:function(a){this.e=H.f(a,"$isa",[P.z],"$asa")},
i:function(a){return"Uniform1iv: "+H.h(this.c)},
p:{
dv:function(a,b,c,d,e){var z=new A.jT(a,b,c,e)
z.f=d
z.siz(P.iq(d,0,!1,P.z))
return z}}},K:{"^":"a9;a,b,c,d",
i:function(a){return"Uniform1f: "+H.h(this.c)}},aG:{"^":"a9;a,b,c,d",
i:function(a){return"Uniform2f: "+H.h(this.c)}},F:{"^":"a9;a,b,c,d",
i:function(a){return"Uniform3f: "+H.h(this.c)}},fn:{"^":"a9;a,b,c,d",
i:function(a){return"Uniform4f: "+H.h(this.c)}},jZ:{"^":"a9;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.h(this.c)}},cx:{"^":"a9;a,b,c,d",
ab:function(a){var z=new Float32Array(H.bh(H.f(a,"$isa",[P.w],"$asa")))
C.b.eN(this.a,this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.h(this.c)}},a0:{"^":"a9;a,b,c,d",
ab:function(a){var z=new Float32Array(H.bh(H.f(a,"$isa",[P.w],"$asa")))
C.b.d5(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.h(this.c)}},a1:{"^":"a9;a,b,c,d",
f7:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)C.b.G(y,x,0)
else C.b.G(y,x,a.a)},
i:function(a){return"UniformSampler2D: "+H.h(this.c)}},ae:{"^":"a9;a,b,c,d",
de:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)C.b.G(y,x,0)
else C.b.G(y,x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.h(this.c)}}}],["","",,F,{"^":"",
cE:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bM:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.M(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.M(t+h,s+f,r+g)
z.b=q
p=new V.M(t-h,s-f,r-g)
z.c=p
o=new V.M(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cE(y)
k=F.cE(z.b)
j=F.lS(d,e,new F.lb(z,F.cE(z.c),F.cE(z.d),k,l,c),b)
if(j!=null)a.jE(j)},
lS:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.aH,P.w,P.w]})
if(a<1)return
if(b<1)return
z=F.dj()
y=H.c([],[F.aH])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cA(null,null,new V.ap(u,0,0,1),null,null,new V.a6(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cK(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cA(null,null,new V.ap(o,n,m,1),null,null,new V.a6(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cK(d))}}z.d.iY(a+1,b+1,y)
return z},
lb:{"^":"u:39;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cX(z.b,b).cX(z.d.cX(z.c,b),c)
z=new V.ak(y.a,y.b,y.c)
if(!J.N(a.f,z)){a.f=z
z=a.a
if(z!=null)z.ad()}a.sbw(y.C(0,Math.sqrt(y.H(y))))
z=1-b
x=1-c
x=new V.bC(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.N(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.ad()}}},
a4:{"^":"b;0a,0b,0c,0d,0e",
fK:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.c1()
if(y!=null)v=v.J(0,y)
if(x!=null)v=v.J(0,x)
if(w!=null)v=v.J(0,w)
if(v.ex())return
return v.C(0,Math.sqrt(v.H(v)))},
fP:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.M(0,y)
z=new V.M(z.a,z.b,z.c)
v=z.C(0,Math.sqrt(z.H(z)))
z=w.M(0,y)
z=new V.M(z.a,z.b,z.c)
z=v.bm(z.C(0,Math.sqrt(z.H(z))))
return z.C(0,Math.sqrt(z.H(z)))},
cI:function(){if(this.d!=null)return!0
var z=this.fK()
if(z==null){z=this.fP()
if(z==null)return!1}this.d=z
this.a.a.ad()
return!0},
fJ:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=V.c1()
if(y!=null)v=v.J(0,y)
if(x!=null)v=v.J(0,x)
if(w!=null)v=v.J(0,w)
if(v.ex())return
return v.C(0,Math.sqrt(v.H(v)))},
fO:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.m.$2(n,0)){z=r.M(0,u)
z=new V.M(z.a,z.b,z.c)
m=z.C(0,Math.sqrt(z.H(z)))
if(o.a-p.a<0)m=m.S(0)}else{l=(z-q.b)/n
z=r.M(0,u)
z=new V.ak(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).M(0,x)
z=new V.M(z.a,z.b,z.c)
m=z.C(0,Math.sqrt(z.H(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.S(0)}z=this.d
if(z!=null){k=z.C(0,Math.sqrt(z.H(z)))
z=k.bm(m)
z=z.C(0,Math.sqrt(z.H(z))).bm(k)
m=z.C(0,Math.sqrt(z.H(z)))}return m},
cG:function(){if(this.e!=null)return!0
var z=this.fJ()
if(z==null){z=this.fO()
if(z==null)return!1}this.e=z
this.a.a.ad()
return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
D:function(a){var z,y
z=this.a
if(z==null||this.b==null||this.c==null)return a+"disposed"
y=a+C.i.ao(J.ab(z.e),0)+", "+C.i.ao(J.ab(this.b.e),0)+", "+C.i.ao(J.ab(this.c.e),0)+" {"
z=this.d
y=z!=null?y+(z.i(0)+", "):y+"-, "
z=this.e
return z!=null?y+(z.i(0)+"}"):y+"-}"},
N:function(){return this.D("")},
p:{
bv:function(a,b,c){var z,y,x
z=new F.a4()
y=a.a
if(y==null)H.p(P.n("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.p(P.n("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.ad()
return z}}},
by:{"^":"b;0a,0b",
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
D:function(a){var z=this.a
if(z==null||this.b==null)return a+"disposed"
return a+C.i.ao(J.ab(z.e),0)+", "+C.i.ao(J.ab(this.b.e),0)},
N:function(){return this.D("")},
p:{
ik:function(a,b){var z,y,x
z=new F.by()
y=a.a
if(y==null)H.p(P.n("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.p(P.n("May not create a line with vertices attached to different shapes."))
z.a=a
C.a.h(a.c.b,z)
z.b=b
C.a.h(b.c.c,z)
C.a.h(z.a.a.c.b,z)
z.a.a.ad()
return z}}},
c0:{"^":"b;0a",
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
D:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.i.ao(J.ab(z.e),0)},
N:function(){return this.D("")}},
eU:{"^":"b;0a,0b,0c,0d,0e",
gm:function(){var z=this.e
if(z==null){z=D.B()
this.e=z}return z},
jE:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.a4()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){v=z[w]
this.a.h(0,v.ja())}this.a.a4()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.a4()
s=s.e
if(typeof s!=="number")return s.J()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.c0()
if(r.a==null)H.p(P.n("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.B(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.a4()
s=s.e
if(typeof s!=="number")return s.J()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.a4()
t=t.e
if(typeof t!=="number")return t.J()
t+=y
s=s.c
if(t>=s.length)return H.k(s,t)
o=s[t]
t=this.c.a
t.a.h(0,p)
t.a.h(0,o)
F.ik(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.a4()
s=s.e
if(typeof s!=="number")return s.J()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.a4()
t=t.e
if(typeof t!=="number")return t.J()
t+=y
s=s.c
if(t>=s.length)return H.k(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.a4()
s=s.e
if(typeof s!=="number")return s.J()
s+=y
t=t.c
if(s>=t.length)return H.k(t,s)
m=t[s]
s=this.d.a
s.a.h(0,p)
s.a.h(0,o)
s.a.h(0,m)
F.bv(p,o,m)}z=this.e
if(!(z==null))z.aN()},
aJ:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aJ()||!1
if(!this.a.aJ())y=!1
z=this.e
if(!(z==null))z.aN()
return y},
bl:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$a2()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aQ().a)!==0)++w
if((x&$.$get$aP().a)!==0)++w
if((x&$.$get$aw().a)!==0)++w
if((x&$.$get$aR().a)!==0)++w
if((x&$.$get$bI().a)!==0)++w
if((x&$.$get$bJ().a)!==0)++w
if((x&$.$get$bf().a)!==0)++w
if((x&$.$get$aO().a)!==0)++w
v=b.gdg(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.w
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.e3])
for(r=0,q=0;q<w;++q){p=b.j1(q)
o=p.gdg(p)
C.a.Z(s,q,new Z.e3(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.k(y,n)
m=y[n].jB(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.Z(t,l,m[k]);++l}}r+=o}H.f(t,"$isa",[x],"$asa")
y=a.a
j=y.createBuffer()
C.b.ax(y,34962,j)
C.b.dZ(y,34962,new Float32Array(H.bh(t)),35044)
C.b.ax(y,34962,null)
i=new Z.bs(new Z.fy(34962,j),s,b)
i.shc(H.c([],[Z.bW]))
if(this.b.b.length!==0){x=P.z
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.a4()
C.a.h(h,g.e)}f=Z.dC(y,34963,H.f(h,"$isa",[x],"$asa"))
C.a.h(i.b,new Z.bW(0,h.length,f))}if(this.c.b.length!==0){x=P.z
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.a4()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.k(g,q)
g=g[q].b
g.a.a.a4()
C.a.h(h,g.e)}f=Z.dC(y,34963,H.f(h,"$isa",[x],"$asa"))
C.a.h(i.b,new Z.bW(1,h.length,f))}if(this.d.b.length!==0){x=P.z
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.a4()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.k(g,q)
g=g[q].b
g.a.a.a4()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.k(g,q)
g=g[q].c
g.a.a.a4()
C.a.h(h,g.e)}f=Z.dC(y,34963,H.f(h,"$isa",[x],"$asa"))
C.a.h(i.b,new Z.bW(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.o])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.D("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.D("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.D("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.D("   "))}return C.a.l(z,"\n")},
au:function(a){var z=this.e
if(!(z==null))z.B(a)},
ad:function(){return this.au(null)},
$ismc:1,
p:{
dj:function(){var z,y
z=new F.eU()
y=new F.ka(z)
y.b=!1
y.siA(H.c([],[F.aH]))
z.a=y
y=new F.jm(z)
y.sct(H.c([],[F.c0]))
z.b=y
y=new F.jl(z)
y.shd(H.c([],[F.by]))
z.c=y
y=new F.jk(z)
y.sh2(H.c([],[F.a4]))
z.d=y
z.e=null
return z}}},
jk:{"^":"b;a,0b",
sh2:function(a){this.b=H.f(a,"$isa",[F.a4],"$asa")},
iX:function(a){var z,y,x,w,v,u
H.f(a,"$isa",[F.aH],"$asa")
z=H.c([],[F.a4])
y=a[0]
for(x=this.a,w=2;w<4;++w){v=a[w-1]
u=a[w]
x.a.h(0,y)
x.a.h(0,v)
x.a.h(0,u)
C.a.h(z,F.bv(y,v,u))}return z},
iY:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.f(c,"$isa",[F.aH],"$asa")
z=H.c([],[F.a4])
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
C.a.h(z,F.bv(q,p,n))
y.a.h(0,q)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bv(q,n,m))}else{r.h(0,p)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bv(p,n,m))
y.a.h(0,p)
y.a.h(0,m)
y.a.h(0,q)
C.a.h(z,F.bv(p,m,q))}t=!t}v=!v}return z},
gq:function(a){return this.b.length},
aJ:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.y)(z),++w)if(!z[w].cI())x=!1
return x},
cH:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.y)(z),++w)if(!z[w].cG())x=!1
return x},
i:function(a){return this.N()},
D:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].D(a))
return C.a.l(z,"\n")},
N:function(){return this.D("")}},
jl:{"^":"b;a,0b",
shd:function(a){this.b=H.f(a,"$isa",[F.by],"$asa")},
gq:function(a){return this.b.length},
i:function(a){return this.N()},
D:function(a){var z,y,x,w
z=H.c([],[P.o])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.k(w,x)
C.a.h(z,w[x].D(a+(""+x+". ")))}return C.a.l(z,"\n")},
N:function(){return this.D("")}},
jm:{"^":"b;a,0b",
sct:function(a){this.b=H.f(a,"$isa",[F.c0],"$asa")},
gq:function(a){return this.b.length},
i:function(a){return this.N()},
D:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].D(a))
return C.a.l(z,"\n")},
N:function(){return this.D("")}},
aH:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cK:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cA(this.cx,x,u,z,y,w,v,a,t)},
ja:function(){return this.cK(null)},
sbw:function(a){var z
if(!J.N(this.z,a)){this.z=a
z=this.a
if(z!=null)z.ad()}},
jB:function(a){var z,y
if(a.u(0,$.$get$a2())){z=this.f
y=[P.w]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$aQ())){z=this.r
y=[P.w]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$aP())){z=this.x
y=[P.w]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$aw())){z=this.y
y=[P.w]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(a.u(0,$.$get$aR())){z=this.z
y=[P.w]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$bI())){z=this.Q
y=[P.w]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$bJ())){z=this.Q
y=[P.w]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(a.u(0,$.$get$bf()))return H.c([this.ch],[P.w])
else if(a.u(0,$.$get$aO())){z=this.cx
y=[P.w]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.w])},
cI:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.c1()
this.d.ac(0,new F.kh(z))
z=z.a
this.r=z.C(0,Math.sqrt(z.H(z)))
z=this.a
if(z!=null){z.ad()
z=this.a.e
if(!(z==null))z.aN()}return!0},
cG:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.c1()
this.d.ac(0,new F.kg(z))
z=z.a
this.x=z.C(0,Math.sqrt(z.H(z)))
z=this.a
if(z!=null){z.ad()
z=this.a.e
if(!(z==null))z.aN()}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
D:function(a){var z,y,x
z=H.c([],[P.o])
C.a.h(z,C.i.ao(J.ab(this.e),0))
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
x=C.a.l(z,", ")
return a+"{"+x+"}"},
N:function(){return this.D("")},
p:{
cA:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aH()
y=new F.kf(z)
y.sct(H.c([],[F.c0]))
z.b=y
y=new F.ke(z)
x=[F.by]
y.she(H.c([],x))
y.shf(H.c([],x))
z.c=y
y=new F.kb(z)
x=[F.a4]
y.sh3(H.c([],x))
y.sh4(H.c([],x))
y.sh5(H.c([],x))
z.d=y
h=$.$get$fv()
z.e=0
y=$.$get$a2()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aQ().a)!==0?e:null
z.x=(x&$.$get$aP().a)!==0?b:null
z.y=(x&$.$get$aw().a)!==0?f:null
z.z=(x&$.$get$aR().a)!==0?g:null
z.Q=(x&$.$get$fw().a)!==0?c:null
z.ch=(x&$.$get$bf().a)!==0?i:0
z.cx=(x&$.$get$aO().a)!==0?a:null
return z}}},
kh:{"^":"u:7;a",
$1:function(a){var z,y
H.e(a,"$isa4")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.J(0,z)}}},
kg:{"^":"u:7;a",
$1:function(a){var z,y
H.e(a,"$isa4")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.J(0,z)}}},
ka:{"^":"b;a,0b,0c",
siA:function(a){this.c=H.f(a,"$isa",[F.aH],"$asa")},
a4:function(){},
h:function(a,b){var z,y
z=b.a
if(z!=null){if(z===this.a)return!1
throw H.j(P.n("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
y=this.a
b.a=y
C.a.h(z,b)
y.ad()
return!0},
iZ:function(a,b,c,d,e,f,g,h,i){var z=F.cA(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bJ:function(a,b,c,d,e,f){return this.iZ(a,null,b,c,null,d,e,f,0)},
gq:function(a){return this.c.length},
aJ:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)z[x].cI()
return!0},
cH:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)z[x].cG()
return!0},
j5:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.C(0,Math.sqrt(u*u+t*t+s*s))
if(!J.N(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.B(null)}}}}return!0},
i:function(a){return this.N()},
D:function(a){var z,y,x,w
this.a4()
z=H.c([],[P.o])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].D(a))
return C.a.l(z,"\n")},
N:function(){return this.D("")}},
kb:{"^":"b;a,0b,0c,0d",
sh3:function(a){this.b=H.f(a,"$isa",[F.a4],"$asa")},
sh4:function(a){this.c=H.f(a,"$isa",[F.a4],"$asa")},
sh5:function(a){this.d=H.f(a,"$isa",[F.a4],"$asa")},
gq:function(a){return this.b.length+this.c.length+this.d.length},
ac:function(a,b){H.l(b,{func:1,ret:-1,args:[F.a4]})
C.a.ac(this.b,b)
C.a.ac(this.c,new F.kc(this,b))
C.a.ac(this.d,new F.kd(this,b))},
i:function(a){return this.N()},
D:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].D(a))
return C.a.l(z,"\n")},
N:function(){return this.D("")}},
kc:{"^":"u:7;a,b",
$1:function(a){H.e(a,"$isa4")
if(!J.N(a.a,this.a))this.b.$1(a)}},
kd:{"^":"u:7;a,b",
$1:function(a){var z
H.e(a,"$isa4")
z=this.a
if(!J.N(a.a,z)&&!J.N(a.b,z))this.b.$1(a)}},
ke:{"^":"b;a,0b,0c",
she:function(a){this.b=H.f(a,"$isa",[F.by],"$asa")},
shf:function(a){this.c=H.f(a,"$isa",[F.by],"$asa")},
gq:function(a){return this.b.length+this.c.length},
i:function(a){return this.N()},
D:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].D(a))
return C.a.l(z,"\n")},
N:function(){return this.D("")}},
kf:{"^":"b;a,0b",
sct:function(a){this.b=H.f(a,"$isa",[F.c0],"$asa")},
gq:function(a){return this.b.length},
i:function(a){return this.N()},
D:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].D(a))
return C.a.l(z,"\n")},
N:function(){return this.D("")}}}],["","",,O,{"^":"",hC:{"^":"aN;0a,0b,0c,0d,0e,0a5:f<",
sa5:function(a){this.f=H.e(a,"$isac")},
gm:function(){var z=this.f
if(z==null){z=D.B()
this.f=z}return z},
v:function(a){var z=this.f
if(!(z==null))z.B(a)},
aa:function(a){},
bt:function(a,b){var z,y,x,w,v,u
z=this.a
if(z==null){y=H.e(a.fr.j(0,"Depth"),"$isea")
if(y==null){z=a.a
y=new A.ea(z,"Depth")
y.bc(z,"Depth")
y.bp($.hE,$.hD)
y.z=y.x.j(0,"posAttr")
y.Q=H.d(y.y.j(0,"objClr"),"$isF")
y.ch=H.d(y.y.j(0,"fogClr"),"$isF")
y.cx=H.d(y.y.j(0,"fogStart"),"$isK")
y.cy=H.d(y.y.j(0,"fogStop"),"$isK")
y.db=H.d(y.y.j(0,"viewObjMat"),"$isa0")
y.dx=H.d(y.y.j(0,"projMat"),"$isa0")
a.bi(y)}this.a=y
z=y}x=b.e
if(!(x instanceof Z.bs)){b.e=null
x=null}if(x==null){z=b.d.bl(new Z.c2(a.a),$.$get$a2())
x=z.aj($.$get$a2())
w=this.a
x.e=w.z.c
b.e=z
z=w}z.K(a)
x=this.b
w=z.Q
w.toString
v=x.a
u=x.b
x=x.c
C.b.t(w.a,w.d,v,u,x)
x=this.c
u=z.ch
u.toString
v=x.a
w=x.b
x=x.c
C.b.t(u.a,u.d,v,w,x)
x=this.d
w=z.cx
C.b.F(w.a,w.d,x)
x=this.e
w=z.cy
C.b.F(w.a,w.d,x)
x=a.cy.gV()
w=z.dx
w.toString
w.ab(x.a2(0,!0))
x=a.geO()
z=z.db
z.toString
z.ab(x.a2(0,!0))
x=b.e
x.K(a)
x.a8(a)
x.a9(a)
x=this.a
x.toString
C.b.ba(a.a,null)
x.x.bn()}},i_:{"^":"aN;0a,0b,0c,0d,0e,0f,0r,0a5:x<",
sa5:function(a){this.x=H.e(a,"$isac")},
gm:function(){var z=this.x
if(z==null){z=D.B()
this.x=z}return z},
v:[function(a){var z
H.e(a,"$ist")
z=this.x
if(!(z==null))z.B(a)},function(){return this.v(null)},"aE","$1","$0","ga0",0,2,0],
aa:function(a){},
T:function(a,b){H.f(a,"$isa",[T.bb],"$asa")
if(b!=null)if(!C.a.U(a,b)){b.a=a.length
C.a.h(a,b)}},
bt:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.e(a.fr.j(0,"GaussianBlur"),"$isen")
if(z==null){y=a.a
z=new A.en(y,"GaussianBlur")
z.bc(y,"GaussianBlur")
z.bp($.i1,$.i0)
z.z=z.x.j(0,"posAttr")
z.Q=z.x.j(0,"txtAttr")
z.ch=H.d(z.y.j(0,"projViewObjMat"),"$isa0")
z.cx=H.d(z.y.j(0,"txt2DMat"),"$iscx")
z.cy=H.d(z.y.j(0,"colorTxt"),"$isa1")
z.db=H.d(z.y.j(0,"depthTxt"),"$isa1")
z.dx=H.d(z.y.j(0,"nullColorTxt"),"$isD")
z.dy=H.d(z.y.j(0,"nullDepthTxt"),"$isD")
z.fr=H.d(z.y.j(0,"width"),"$isK")
z.fx=H.d(z.y.j(0,"height"),"$isK")
z.fy=H.d(z.y.j(0,"highOffset"),"$isK")
z.go=H.d(z.y.j(0,"lowOffset"),"$isK")
z.id=H.d(z.y.j(0,"depthLimit"),"$isK")
a.bi(z)}this.a=z}if(b.e==null){y=b.d
x=$.$get$a2()
w=$.$get$aw()
w=y.bl(new Z.c2(a.a),new Z.aY(x.a|w.a))
w.aj($.$get$a2()).e=this.a.z.c
w.aj($.$get$aw()).e=this.a.Q.c
b.e=w}v=H.c([],[T.bb])
this.T(v,this.c)
this.T(v,this.d)
for(u=0;u<v.length;++u)v[u].K(a)
y=this.a
y.K(a)
x=this.c
y.ag(y.cy,y.dx,x)
x=this.d
y.ag(y.db,y.dy,x)
x=this.b
w=y.cx
w.toString
w.ab(x.a2(0,!0))
x=a.geH()
w=y.ch
w.toString
w.ab(x.a2(0,!0))
x=a.c
w=y.fr
C.b.F(w.a,w.d,x)
x=a.d
w=y.fx
C.b.F(w.a,w.d,x)
x=this.e
w=y.fy
C.b.F(w.a,w.d,x)
x=this.f
w=y.go
C.b.F(w.a,w.d,x)
x=this.r
y=y.id
C.b.F(y.a,y.d,x)
y=b.e
if(y instanceof Z.bs){y.K(a)
y.a8(a)
y.a9(a)}else b.e=null
y=this.a
y.toString
x=a.a
C.b.ba(x,null)
y.x.bn()
for(u=0;u<v.length;++u){y=v[u]
if(y.c){y.c=!1
C.b.b0(x,33984+y.a)
C.b.a7(x,3553,null)}}}},iy:{"^":"aN;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0a5:dy<",
sfM:function(a){this.e=H.f(a,"$isR",[V.a_],"$asR")},
sa5:function(a){this.dy=H.e(a,"$isac")},
gm:function(){var z=this.dy
if(z==null){z=D.B()
this.dy=z}return z},
v:[function(a){var z
H.e(a,"$ist")
z=this.dy
if(!(z==null))z.B(a)},function(){return this.v(null)},"aE","$1","$0","ga0",0,2,0],
i_:[function(a){H.e(a,"$ist")
this.a=null
this.v(a)},function(){return this.i_(null)},"kO","$1","$0","ghZ",0,2,0],
kn:[function(a,b){var z=V.a_
z=new D.bX(a,H.f(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.v(z)},"$2","ghp",8,0,11],
ko:[function(a,b){var z=V.a_
z=new D.bY(a,H.f(b,"$isi",[z],"$asi"),this,[z])
z.b=!0
this.v(z)},"$2","ghq",8,0,11],
dw:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
z=this.dx
y=C.h.a6(z.e.length+3,4)*4
x=C.h.a6(z.f.length+3,4)*4
w=C.h.a6(z.r.length+3,4)*4
v=C.h.a6(z.x.length+3,4)*4
u=C.h.a6(z.y.length+3,4)*4
t=C.h.a6(z.z.length+3,4)*4
s=C.h.a6(this.e.a.length+3,4)*4
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
a2=$.$get$a2()
if(e){g=$.$get$aQ()
a2=new Z.aY(a2.a|g.a)}if(d){g=$.$get$aP()
a2=new Z.aY(a2.a|g.a)}if(c){g=$.$get$aw()
a2=new Z.aY(a2.a|g.a)}if(b){g=$.$get$aR()
a2=new Z.aY(a2.a|g.a)}if(a0){g=$.$get$aO()
a2=new Z.aY(a2.a|g.a)}return new A.iC(z,r,q,p,o,n,m,l,k,y,x,w,v,u,t,y+x+w+v+u+t,i,i,a,a1,!0,!1,!1,h,a,f,e,d,c,b,a0,!1,!1,!1,s,j.charCodeAt(0)==0?j:j,a2)},
T:function(a,b){H.f(a,"$isa",[T.bb],"$asa")
if(b!=null)if(!C.a.U(a,b)){b.a=a.length
C.a.h(a,b)}},
aa:function(a){var z,y,x,w,v
for(z=this.dx.a,z=new J.ao(z,z.length,0,[H.v(z,0)]);z.A();){y=z.d
y.toString
x=$.cz
if(x==null){x=new V.M(0,0,1)
$.cz=x}y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.d4(x)}}},
bt:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.dw()
y=H.e(a.fr.j(0,z.at),"$iseC")
if(y==null){y=A.iz(z,a.a)
a.bi(y)}this.a=y
b.e=null
z=y}x=z.z
w=x.bM
z=b.e
if(!(z instanceof Z.bs)){b.e=null
z=null}if(z==null||!z.d.u(0,w)){z=x.r1
if(z)b.d.aJ()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.d
u.d.cH()
u.a.cH()
u=u.e
if(!(u==null))u.aN()}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.a.j5()
t=t.e
if(!(t==null))t.aN()}r=b.d.bl(new Z.c2(a.a),w)
r.aj($.$get$a2()).e=this.a.Q.c
if(z)r.aj($.$get$aQ()).e=this.a.cx.c
if(v)r.aj($.$get$aP()).e=this.a.ch.c
if(x.rx)r.aj($.$get$aw()).e=this.a.cy.c
if(u)r.aj($.$get$aR()).e=this.a.db.c
if(x.x1)r.aj($.$get$aO()).e=this.a.dx.c
b.e=r}z=T.bb
q=H.c([],[z])
this.a.K(a)
if(x.fx){v=this.a
u=a.dx.gV()
v=v.dy
v.toString
v.ab(u.a2(0,!0))}if(x.fy){v=this.a
u=a.geO()
v=v.fr
v.toString
v.ab(u.a2(0,!0))}v=this.a
u=a.geH()
v=v.fy
v.toString
v.ab(u.a2(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.k1
v.toString
v.ab(C.r.a2(u,!0))}if(x.y1){v=this.a
u=this.c
v=v.k2
v.toString
v.ab(C.r.a2(u,!0))}if(x.y2){v=this.a
u=this.d
v=v.k3
v.toString
v.ab(C.r.a2(u,!0))}if(x.az>0){p=this.e.a.length
v=this.a.k4
C.b.G(v.a,v.d,p)
for(v=[P.w],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.k(t,o)
t=t[o]
u.toString
H.e(t,"$isa_")
u=u.r1
if(o>=u.length)return H.k(u,o)
u=u[o]
n=new Float32Array(H.bh(H.f(t.a2(0,!0),"$isa",v,"$asa")))
C.b.d5(u.a,u.d,!1,n)}}switch(x.a){case C.c:break
case C.f:v=this.a
u=this.f.f
v=v.r2
v.toString
t=u.a
s=u.b
u=u.c
C.b.t(v.a,v.d,t,s,u)
break
case C.e:this.T(q,this.f.d)
v=this.a
u=this.f.d
v.ag(v.rx,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
t=v.a
s=v.b
v=v.c
C.b.t(u.a,u.d,t,s,v)
break
case C.d:this.T(q,this.f.e)
v=this.a
u=this.f.e
v.am(v.ry,v.x1,u)
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
case C.e:this.T(q,this.r.d)
v=this.a
u=this.r.d
v.ag(v.y1,v.az,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
C.b.t(u.a,u.d,t,s,v)
break
case C.d:this.T(q,this.r.e)
v=this.a
u=this.r.e
v.am(v.y2,v.az,u)
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
v=v.at
v.toString
t=u.a
s=u.b
u=u.c
C.b.t(v.a,v.d,t,s,u)
break
case C.e:this.T(q,this.x.d)
v=this.a
u=this.x.d
v.ag(v.bM,v.bN,u)
u=this.a
v=this.x.f
u=u.at
u.toString
t=v.a
s=v.b
v=v.c
C.b.t(u.a,u.d,t,s,v)
break
case C.d:this.T(q,this.x.e)
v=this.a
u=this.x.e
v.am(v.ea,v.bN,u)
u=this.a
v=this.x.f
u=u.at
u.toString
t=v.a
s=v.b
v=v.c
C.b.t(u.a,u.d,t,s,v)
break}switch(x.d){case C.c:break
case C.f:v=this.a
u=this.y.f
v=v.bO
v.toString
t=u.a
s=u.b
u=u.c
C.b.t(v.a,v.d,t,s,u)
break
case C.e:this.T(q,this.y.d)
v=this.a
u=this.y.d
v.ag(v.eb,v.bP,u)
u=this.a
v=this.y.f
u=u.bO
u.toString
t=v.a
s=v.b
v=v.c
C.b.t(u.a,u.d,t,s,v)
break
case C.d:this.T(q,this.y.e)
v=this.a
u=this.y.e
v.am(v.ec,v.bP,u)
u=this.a
v=this.y.f
u=u.bO
u.toString
t=v.a
s=v.b
v=v.c
C.b.t(u.a,u.d,t,s,v)
break}switch(x.e){case C.c:break
case C.f:v=this.a
u=this.z.f
v=v.bQ
v.toString
t=u.a
s=u.b
u=u.c
C.b.t(v.a,v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bS
C.b.F(u.a,u.d,s)
break
case C.e:this.T(q,this.z.d)
v=this.a
u=this.z.d
v.ag(v.ed,v.bR,u)
u=this.a
v=this.z.f
u=u.bQ
u.toString
t=v.a
s=v.b
v=v.c
C.b.t(u.a,u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bS
C.b.F(v.a,v.d,s)
break
case C.d:this.T(q,this.z.e)
v=this.a
u=this.z.e
v.am(v.ee,v.bR,u)
u=this.a
v=this.z.f
u=u.bQ
u.toString
t=v.a
s=v.b
v=v.c
C.b.t(u.a,u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bS
C.b.F(v.a,v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.ep
C.b.G(v.a,v.d,p)
m=a.db.gV()
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
t=this.a.cO
if(l>=t.length)return H.k(t,l)
i=t[l]
t=m.d4(j.a)
s=t.a
h=t.b
g=t.c
g=t.C(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
s=g.a
t=g.b
g=g.c
C.b.t(h.a,h.d,s,t,g)
g=j.c
t=i.c
C.b.t(t.a,t.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.eq
C.b.G(v.a,v.d,p)
m=a.db.gV()
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
t=this.a.cP
if(l>=t.length)return H.k(t,l)
i=t[l]
t=j.gbs(j)
s=i.b
h=t.gd8(t)
g=t.gd9(t)
t=t.gda(t)
C.b.t(s.a,s.d,h,g,t)
t=m.by(j.gbs(j))
g=i.c
C.b.t(g.a,g.d,t.a,t.b,t.c)
t=j.gay(j)
g=i.d
h=t.gc3()
s=t.gbz()
t=t.gbK()
C.b.t(g.a,g.d,h,s,t)
t=j.gcB()
s=i.e
C.b.F(s.a,s.d,t)
t=j.gcC()
s=i.f
C.b.F(s.a,s.d,t)
t=j.gcD()
s=i.r
C.b.F(s.a,s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.er
C.b.G(v.a,v.d,p)
m=a.db.gV()
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
t=this.a.cQ
if(l>=t.length)return H.k(t,l)
i=t[l]
t=j.gbs(j)
s=i.b
h=t.gd8(t)
g=t.gd9(t)
t=t.gda(t)
C.b.t(s.a,s.d,h,g,t)
t=j.gcM(j).kV()
g=i.c
h=t.gb4(t)
s=t.gb5(t)
t=t.gb6()
C.b.t(g.a,g.d,h,s,t)
t=m.by(j.gbs(j))
s=i.d
C.b.t(s.a,s.d,t.a,t.b,t.c)
t=j.gay(j)
s=i.e
h=t.gc3()
g=t.gbz()
t=t.gbK()
C.b.t(s.a,s.d,h,g,t)
t=j.gkU()
g=i.f
C.b.F(g.a,g.d,t)
t=j.gkS()
g=i.r
C.b.F(g.a,g.d,t)
t=j.gcB()
g=i.x
C.b.F(g.a,g.d,t)
t=j.gcC()
g=i.y
C.b.F(g.a,g.d,t)
t=j.gcD()
g=i.z
C.b.F(g.a,g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.es
C.b.G(v.a,v.d,p)
m=a.db.gV()
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
s=this.a.cR
if(l>=s.length)return H.k(s,l)
i=s[l]
s=j.gbv()
H.f(q,"$isa",t,"$asa")
if(!C.a.U(q,s)){s.sbf(q.length)
C.a.h(q,s)}s=j.gcM(j)
h=i.d
g=s.gb4(s)
f=s.gb5(s)
s=s.gb6()
C.b.t(h.a,h.d,g,f,s)
s=j.gc5()
f=i.b
g=s.gb4(s)
h=s.gb5(s)
s=s.gb6()
C.b.t(f.a,f.d,g,h,s)
s=j.gbu(j)
h=i.c
g=s.gb4(s)
f=s.gb5(s)
s=s.gb6()
C.b.t(h.a,h.d,g,f,s)
s=m.d4(j.gcM(j))
f=s.a
g=s.b
h=s.c
h=s.C(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
f=h.a
s=h.b
h=h.c
C.b.t(g.a,g.d,f,s,h)
h=j.gay(j)
s=i.f
f=h.gc3()
g=h.gbz()
h=h.gbK()
C.b.t(s.a,s.d,f,g,h)
h=j.gbv()
s=h.geA(h)
if(!s){s=i.x
C.b.G(s.a,s.d,1)}else{s=i.r
g=h.gdG()
f=s.a
s=s.d
if(!g)C.b.G(f,s,0)
else C.b.G(f,s,h.gbf())
s=i.x
C.b.G(s.a,s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.eu
C.b.G(v.a,v.d,p)
m=a.db.gV()
for(v=this.dx.y,u=v.length,t=[P.w],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
h=this.a.cS
if(l>=h.length)return H.k(h,l)
i=h[l]
h=j.gbv()
H.f(q,"$isa",s,"$asa")
if(!C.a.U(q,h)){h.sbf(q.length)
C.a.h(q,h)}e=m.w(0,j.gV())
h=j.gV()
g=$.bB
if(g==null){g=new V.ak(0,0,0)
$.bB=g}g=h.by(g)
h=i.b
f=g.gd8(g)
d=g.gd9(g)
g=g.gda(g)
C.b.t(h.a,h.d,f,d,g)
h=$.bB
if(h==null){h=new V.ak(0,0,0)
$.bB=h}h=e.by(h)
g=i.c
C.b.t(g.a,g.d,h.a,h.b,h.c)
h=e.cW()
g=i.d
n=new Float32Array(H.bh(H.f(new V.dc(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a2(0,!0),"$isa",t,"$asa")))
C.b.eN(g.a,g.d,!1,n)
g=j.gay(j)
h=i.e
f=g.gc3()
d=g.gbz()
g=g.gbK()
C.b.t(h.a,h.d,f,d,g)
g=j.gbv()
h=g.geA(g)
if(!h){h=i.r
C.b.G(h.a,h.d,1)}else{h=i.f
f=g.gdG()
d=h.a
h=h.d
if(!(f>=6))C.b.G(d,h,0)
else C.b.G(d,h,g.gbf())
h=i.r
C.b.G(h.a,h.d,0)}h=j.gcB()
g=i.x
C.b.F(g.a,g.d,h)
h=j.gcC()
g=i.y
C.b.F(g.a,g.d,h)
h=j.gcD()
g=i.z
C.b.F(g.a,g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.ev
C.b.G(v.a,v.d,p)
m=a.db.gV()
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.y)(v),++k){j=v[k]
t=this.a.cT
if(l>=t.length)return H.k(t,l)
i=t[l]
t=j.gbv()
H.f(q,"$isa",z,"$asa")
if(!C.a.U(q,t)){t.sbf(q.length)
C.a.h(q,t)}t=j.gbs(j)
s=i.b
h=t.gd8(t)
g=t.gd9(t)
t=t.gda(t)
C.b.t(s.a,s.d,h,g,t)
t=j.gcM(j)
g=i.c
h=t.gb4(t)
s=t.gb5(t)
t=t.gb6()
C.b.t(g.a,g.d,h,s,t)
t=j.gc5()
s=i.d
h=t.gb4(t)
g=t.gb5(t)
t=t.gb6()
C.b.t(s.a,s.d,h,g,t)
t=j.gbu(j)
g=i.e
h=t.gb4(t)
s=t.gb5(t)
t=t.gb6()
C.b.t(g.a,g.d,h,s,t)
t=m.by(j.gbs(j))
s=i.f
C.b.t(s.a,s.d,t.a,t.b,t.c)
t=j.gbv()
s=t.geA(t)
if(!s){t=i.x
C.b.G(t.a,t.d,1)}else{s=i.r
h=t.gdG()
g=s.a
s=s.d
if(!h)C.b.G(g,s,0)
else C.b.G(g,s,t.gbf())
t=i.x
C.b.G(t.a,t.d,0)}t=j.gay(j)
s=i.y
h=t.gc3()
g=t.gbz()
t=t.gbK()
C.b.t(s.a,s.d,h,g,t)
t=j.gl0()
g=i.z
C.b.F(g.a,g.d,t)
t=j.gl1()
g=i.Q
C.b.F(g.a,g.d,t)
t=j.gcB()
g=i.ch
C.b.F(g.a,g.d,t)
t=j.gcC()
g=i.cx
C.b.F(g.a,g.d,t)
t=j.gcD()
g=i.cy
C.b.F(g.a,g.d,t);++l}}}switch(x.f){case C.c:break
case C.f:break
case C.e:this.T(q,this.Q.d)
z=this.a
v=this.Q.d
z.ag(z.ef,z.bT,v)
break
case C.d:this.T(q,this.Q.e)
z=this.a
v=this.Q.e
z.am(z.eg,z.bT,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db.gV().cW()
a.Q=v}z=z.id
z.toString
z.ab(v.a2(0,!0))}if(x.dy){this.T(q,this.ch)
z=this.a
v=this.ch
z.am(z.eh,z.ei,v)
switch(x.r){case C.c:break
case C.f:z=this.a
v=this.cx.f
z=z.bU
z.toString
u=v.a
t=v.b
v=v.c
C.b.t(z.a,z.d,u,t,v)
break
case C.e:this.T(q,this.cx.d)
z=this.a
v=this.cx.d
z.ag(z.ej,z.bV,v)
v=this.a
z=this.cx.f
v=v.bU
v.toString
u=z.a
t=z.b
z=z.c
C.b.t(v.a,v.d,u,t,z)
break
case C.d:this.T(q,this.cx.e)
z=this.a
v=this.cx.e
z.am(z.ek,z.bV,v)
v=this.a
z=this.cx.f
v=v.bU
v.toString
u=z.a
t=z.b
z=z.c
C.b.t(v.a,v.d,u,t,z)
break}switch(x.x){case C.c:break
case C.f:z=this.a
v=this.cy.f
z=z.bX
z.toString
u=v.a
t=v.b
v=v.c
C.b.t(z.a,z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bW
C.b.F(v.a,v.d,t)
break
case C.e:this.T(q,this.cy.d)
z=this.a
v=this.cy.d
z.ag(z.el,z.bY,v)
v=this.a
z=this.cy.f
v=v.bX
v.toString
u=z.a
t=z.b
z=z.c
C.b.t(v.a,v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bW
C.b.F(z.a,z.d,t)
break
case C.d:this.T(q,this.cy.e)
z=this.a
v=this.cy.e
z.am(z.em,z.bY,v)
v=this.a
z=this.cy.f
v=v.bX
v.toString
u=z.a
t=z.b
z=z.c
C.b.t(v.a,v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bW
C.b.F(z.a,z.d,t)
break}}z=x.y
v=z!==C.c
if(v){switch(z){case C.c:break
case C.f:z=this.a
u=this.db.f
z=z.bZ
C.b.F(z.a,z.d,u)
break
case C.e:this.T(q,this.db.d)
z=this.a
u=this.db.d
z.ag(z.en,z.c_,u)
u=this.a
z=this.db.f
u=u.bZ
C.b.F(u.a,u.d,z)
break
case C.d:this.T(q,this.db.e)
z=this.a
u=this.db.e
z.am(z.eo,z.c_,u)
u=this.a
z=this.db.f
u=u.bZ
C.b.F(u.a,u.d,z)
break}z=a.a
C.b.bo(z,3042)
C.b.j4(z,770,771)}for(o=0;o<q.length;++o)q[o].K(a)
z=b.e
z.K(a)
z.a8(a)
z.a9(a)
if(v)C.b.jk(a.a,3042)
for(z=a.a,o=0;o<q.length;++o){v=q[o]
if(v.c){v.c=!1
C.b.b0(z,33984+v.a)
C.b.a7(z,34067,null)}}v=this.a
v.toString
C.b.ba(z,null)
v.x.bn()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dw().at}},iA:{"^":"db;0f,a,b,0c,0d,0e",
i5:function(a){var z,y
z=this.f
if(!$.m.$2(z,a)){y=this.f
this.f=a
z=new D.x(this.b,y,a,this,[P.w])
z.b=!0
this.a.v(z)}},
aY:function(){this.di()
this.i5(1)}},db:{"^":"b;",
v:[function(a){this.a.v(H.e(a,"$ist"))},function(){return this.v(null)},"aE","$1","$0","ga0",0,2,0],
aY:["di",function(){}],
i7:function(a){},
i8:function(a){var z,y
z=this.e
if(z==null?a!=null:z!==a){if(z!=null)z.gm().R(0,this.ga0())
y=this.e
this.e=a
if(a!=null)a.gm().h(0,this.ga0())
z=new D.x(this.b+".textureCube",y,this.e,this,[T.dq])
z.b=!0
this.a.v(z)}},
sbw:function(a){var z=this.c
if(z!==C.d){if(z===C.c)this.aY()
this.c=C.d
this.i7(null)
z=this.a
z.a=null
z.v(null)}this.i8(a)}},iB:{"^":"db;a,b,0c,0d,0e"},b7:{"^":"db;0f,a,b,0c,0d,0e",
dO:function(a){var z,y
if(!J.N(this.f,a)){z=this.f
this.f=a
y=new D.x(this.b+".color",z,a,this,[V.U])
y.b=!0
this.a.v(y)}},
aY:["cb",function(){this.di()
this.dO(new V.U(1,1,1))}],
say:function(a,b){var z
if(this.c===C.c){this.c=C.f
this.aY()
z=this.a
z.a=null
z.v(null)}this.dO(b)}},iD:{"^":"b7;0ch,0f,a,b,0c,0d,0e",
i6:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.x(this.b+".refraction",y,a,this,[P.w])
z.b=!0
this.a.v(z)}},
aY:function(){this.cb()
this.i6(1)}},iE:{"^":"b7;0ch,0f,a,b,0c,0d,0e",
cw:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.x(this.b+".shininess",y,a,this,[P.w])
z.b=!0
this.a.v(z)}},
aY:function(){this.cb()
this.cw(100)}},js:{"^":"aN;0a,0b,0c,0d,0a5:e<",
sa5:function(a){this.e=H.e(a,"$isac")},
gm:function(){var z=this.e
if(z==null){z=D.B()
this.e=z}return z},
v:[function(a){var z
H.e(a,"$ist")
z=this.e
if(!(z==null))z.B(a)},function(){return this.v(null)},"aE","$1","$0","ga0",0,2,0],
aa:function(a){},
bt:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.e(a.fr.j(0,"Skybox"),"$iseV")
if(z==null){y=a.a
z=new A.eV(y,"Skybox")
z.bc(y,"Skybox")
z.bp($.ju,$.jt)
z.z=z.x.j(0,"posAttr")
z.Q=H.d(z.y.j(0,"fov"),"$isK")
z.ch=H.d(z.y.j(0,"ratio"),"$isK")
z.cx=H.d(z.y.j(0,"boxClr"),"$isF")
z.cy=H.d(z.y.j(0,"boxTxt"),"$isae")
z.db=H.d(z.y.j(0,"viewMat"),"$isa0")
a.bi(z)}this.a=z}if(b.e==null){y=b.d.bl(new Z.c2(a.a),$.$get$a2())
y.aj($.$get$a2()).e=this.a.z.c
b.e=y}y=this.c
if(y!=null){y.a=1
y.K(a)}y=a.d
x=a.c
w=this.a
w.K(a)
v=this.b
u=w.Q
C.b.F(u.a,u.d,v)
v=w.ch
C.b.F(v.a,v.d,y/x)
x=this.c
w.cy.de(x)
x=this.d
y=w.cx
C.b.t(y.a,y.d,x.a,x.b,x.c)
x=a.db.gV().cW()
w=w.db
w.toString
w.ab(x.a2(0,!0))
y=b.e
if(y instanceof Z.bs){y.K(a)
y.a8(a)
y.a9(a)}else b.e=null
y=this.a
y.toString
C.b.ba(a.a,null)
y.x.bn()
y=this.c
if(y!=null)y.a9(a)}},aN:{"^":"b;"},jG:{"^":"aN;0a,0b,0c,0d,0a5:e<",
sh0:function(a){this.c=H.f(a,"$isR",[O.bc],"$asR")},
sa5:function(a){this.e=H.e(a,"$isac")},
gm:function(){var z=this.e
if(z==null){z=D.B()
this.e=z}return z},
v:[function(a){var z
H.e(a,"$ist")
z=this.e
if(!(z==null))z.B(a)},function(){return this.v(null)},"aE","$1","$0","ga0",0,2,0],
kv:[function(a,b){var z,y,x,w,v,u,t
H.f(b,"$isi",[O.bc],"$asi")
for(z=b.length,y=this.ga0(),x={func:1,ret:-1,args:[D.t]},w=[x],v=0;v<b.length;b.length===z||(0,H.y)(b),++v){u=b[v]
if(u!=null){if(u.ga5()==null){t=new D.ac()
t.sae(null)
t.saZ(null)
t.c=null
t.d=0
u.sa5(t)}t=u.ga5()
t.toString
H.l(y,x)
if(t.a==null)t.sae(H.c([],w))
t=t.a;(t&&C.a).h(t,y)}}this.aE()},"$2","ghx",8,0,24],
kw:[function(a,b){var z,y
H.f(b,"$isi",[O.bc],"$asi")
for(z=b.gP(b),y=this.ga0();z.A();)z.gI().gm().R(0,y)
this.aE()},"$2","ghy",8,0,24],
aa:function(a){},
bt:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=C.h.a6(this.c.a.length+3,4)*4
if(z!==this.d){this.d=z
this.b=null}y=this.b
if(y==null){y="TextureLayout_"+z
x=H.e(a.fr.j(0,y),"$isf2")
if(x==null){x=A.jH(z,a.a)
a.bi(x)}this.b=x
y=x}if(b.e==null){y=b.d.bl(new Z.c2(a.a),$.$get$a2())
w=y.aj($.$get$a2())
v=this.b
w.e=v.z.c
b.e=y
y=v}y.K(a)
y=T.bb
u=H.c([],[y])
for(w=[P.w],y=[y],t=0,s=0;v=this.c.a,s<v.length;++s){r=v[s]
if(r!=null&&r.a!=null){v=r.a
H.f(u,"$isa",y,"$asa")
if(v!=null)if(!C.a.U(u,v)){v.a=u.length
C.a.h(u,v)}v=this.b
q=r.a
v=v.cx
if(t>=v.length)return H.k(v,t)
v=v[t]
p=q==null||!q.d
o=v.a
v=v.d
if(p)C.b.G(o,v,0)
else C.b.G(o,v,q.a)
v=this.b
q=r.b
v=v.cy
if(t>=v.length)return H.k(v,t)
v=v[t]
if(q==null){q=$.co
if(q==null){q=new V.a_(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.co=q}}n=new Float32Array(H.bh(H.f(q.a2(0,!0),"$isa",w,"$asa")))
C.b.d5(v.a,v.d,!1,n)
v=this.b
m=r.c
v.toString
if(m==null){q=$.bF
if(q==null){q=V.bE(0,0,1,1)
$.bF=q
m=q}else m=q}q=v.db
if(t>=q.length)return H.k(q,t)
q=q[t]
C.b.c4(q.a,q.d,m.a,m.b)
v=v.dx
if(t>=v.length)return H.k(v,t)
v=v[t]
C.b.c4(v.a,v.d,m.c,m.d)
v=this.b
m=r.d
v.toString
if(m==null){q=$.bF
if(q==null){q=V.bE(0,0,1,1)
$.bF=q
m=q}else m=q}q=v.dy
if(t>=q.length)return H.k(q,t)
q=q[t]
C.b.c4(q.a,q.d,m.a,m.b)
v=v.fr
if(t>=v.length)return H.k(v,t)
v=v[t]
C.b.c4(v.a,v.d,m.c,m.d)
v=this.b
q=r.e
v=v.fx
if(t>=v.length)return H.k(v,t)
v=v[t]
q=q?1:0
C.b.G(v.a,v.d,q);++t}}y=this.b.Q
C.b.G(y.a,y.d,t)
y=this.b
w=this.a
y=y.ch
y.toString
v=w.a
q=w.b
p=w.c
w=w.d
C.b.ke(y.a,y.d,v,q,p,w)
for(s=0;s<u.length;++s)u[s].K(a)
y=b.e
if(y instanceof Z.bs){y.K(a)
y.a8(a)
y.a9(a)}else b.e=null
y=this.b
y.toString
w=a.a
C.b.ba(w,null)
y.x.bn()
for(s=0;s<u.length;++s){y=u[s]
if(y.c){y.c=!1
C.b.b0(w,33984+y.a)
C.b.a7(w,3553,null)}}}},bc:{"^":"b;0a,0b,0c,0d,0e,0a5:f<",
sa5:function(a){this.f=H.e(a,"$isac")},
gm:function(){var z=this.f
if(z==null){z=D.B()
this.f=z}return z},
v:[function(a){var z
H.e(a,"$ist")
z=this.f
if(!(z==null))z.B(a)},function(){return this.v(null)},"aE","$1","$0","ga0",0,2,0],
p:{
f3:function(a,b,c,d,e){var z,y,x,w,v
z=new O.bc()
y=z.a
z.a=e
e.gm().h(0,z.ga0())
x=new D.x("texture",y,z.a,z,[T.cu])
x.b=!0
z.v(x)
w=V.aX()
if(!J.N(z.b,w)){y=z.b
z.b=w
x=new D.x("colorMatrix",y,w,z,[V.a_])
x.b=!0
z.v(x)}v=V.dh()
if(!J.N(z.c,v)){y=z.c
z.c=v
x=new D.x("source",y,v,z,[V.cs])
x.b=!0
z.v(x)}if(!J.N(z.d,b)){y=z.d
z.d=b
x=new D.x("destination",y,b,z,[V.cs])
x.b=!0
z.v(x)}if(z.e!==!1){z.e=!1
x=new D.x("flip",!0,!1,z,[P.I])
x.b=!0
z.v(x)}z.f=null
return z}}}}],["","",,T,{"^":"",bb:{"^":"cT;"},cu:{"^":"bb;"},jF:{"^":"cu;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gm:function(){var z=this.y
if(z==null){z=D.B()
this.y=z}return z},
K:function(a){var z
if(!this.c&&this.d){this.c=!0
z=a.a
C.b.b0(z,33984+this.a)
C.b.a7(z,3553,this.b)}},
p:{
f1:function(a,b){var z=new T.jF()
z.a=a
z.b=b
z.c=!1
z.d=!1
z.e=0
z.f=0
z.r=0
z.x=0
return z}}},dq:{"^":"bb;0a,0b,0c,0d,0e",
gm:function(){var z=this.e
if(z==null){z=D.B()
this.e=z}return z},
K:function(a){var z
if(!this.c&&this.d>=6){this.c=!0
z=a.a
C.b.b0(z,33984+this.a)
C.b.a7(z,34067,this.b)}},
a9:function(a){var z
if(this.c){this.c=!1
z=a.a
C.b.b0(z,33984+this.a)
C.b.a7(z,34067,null)}}},jJ:{"^":"b;a,0b,0c,0d,0e",
ez:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
z=a+"/"+d+"posx"+b
y=a+"/"+d+"posy"+b
x=a+"/"+d+"posz"+b
w=a+"/"+d+"negx"+b
v=a+"/"+d+"negy"+b
u=a+"/"+d+"negz"+b
t=this.a
s=t.createTexture()
C.b.a7(t,34067,s)
C.b.aC(t,34067,10242,10497)
C.b.aC(t,34067,10243,10497)
C.b.aC(t,34067,10241,9729)
C.b.aC(t,34067,10240,9729)
C.b.a7(t,34067,null)
r=new T.dq()
r.a=0
r.b=s
r.c=!1
r.d=0
this.aW(r,s,z,34069,!1,!1)
this.aW(r,s,w,34070,!1,!1)
this.aW(r,s,y,34071,!1,!1)
this.aW(r,s,v,34072,!1,!1)
this.aW(r,s,x,34073,!1,!1)
this.aW(r,s,u,34074,!1,!1)
return r},
ey:function(a){return this.ez(a,".png",!1,"")},
jC:function(a,b){return this.ez(a,b,!1,"")},
aW:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.a7
W.W(z,"load",H.l(new T.jK(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
i0:function(a,b,c){var z,y,x,w
b=V.bT(b,2)
z=V.bT(a.width,2)
y=V.bT(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cX(null,null)
x.width=z
x.height=y
w=H.e(C.o.eW(x,"2d"),"$iscY")
w.imageSmoothingEnabled=!1;(w&&C.y).jm(w,a,0,0,x.width,x.height)
return P.lr(C.y.ha(w,0,0,x.width,x.height))}}},jK:{"^":"u:25;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.i0(this.b,z.c,this.c)
x=z.a
C.b.a7(x,34067,this.d)
C.b.jS(x,37440,this.e?1:0)
C.b.k8(x,this.f,0,6408,6408,5121,y)
C.b.a7(x,34067,null)
x=this.r
if(++x.d>=6){x=x.e
if(!(x==null))x.cN()}++z.e}}}],["","",,V,{"^":"",bq:{"^":"b;",
b8:function(a){return!0},
i:function(a){return"all"},
$isaz:1},az:{"^":"b;"},eB:{"^":"b;0a",
saf:function(a){this.a=H.f(a,"$isa",[V.az],"$asa")},
b8:["fe",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)if(z[x].b8(a))return!0
return!1}],
i:["dh",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.y)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isaz:1},au:{"^":"eB;0a",
b8:function(a){return!this.fe(a)},
i:function(a){return"!["+this.dh(0)+"]"}},j4:{"^":"b;0a,0b",
b8:function(a){return this.a<=a&&this.b>=a},
i:function(a){var z,y
z=H.dg(this.a)
y=H.dg(this.b)
return z+".."+y},
$isaz:1,
p:{
O:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.j(P.n("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.i.aT(a,0)
y=C.i.aT(b,0)
x=new V.j4()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},jh:{"^":"b;0a",
si4:function(a){this.a=H.f(a,"$isaj",[P.z,P.I],"$asaj")},
fj:function(a){var z,y
if(a.a.length<=0)throw H.j(P.n("May not create a SetMatcher with zero characters."))
z=new H.b6(0,0,[P.z,P.I])
for(y=new H.da(a,a.gq(a),0,[H.a3(a,"V",0)]);y.A();)z.Z(0,y.d,!0)
this.si4(z)},
b8:function(a){return this.a.e4(a)},
i:function(a){var z=this.a
return P.dn(new H.ew(z,[H.v(z,0)]),0,null)},
$isaz:1,
p:{
r:function(a){var z=new V.jh()
z.fj(a)
return z}}},dk:{"^":"b;a,b,0c,0d",
siu:function(a){this.c=H.f(a,"$isa",[V.dt],"$asa")},
l:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.dt(this.a.k(0,b))
w.saf(H.c([],[V.az]))
w.c=!1
C.a.h(this.c,w)
return w},
jo:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
if(w.b8(a))return w}return},
i:function(a){return this.b}},fa:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.dV(this.b,"\n","\\n")
y=H.dV(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},ds:{"^":"b;a,b,0c",
shX:function(a){var z=P.o
this.c=H.f(a,"$isaj",[z,z],"$asaj")},
aM:function(a,b,c){var z,y,x
H.f(c,"$isa",[P.o],"$asa")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.y)(c),++y){x=c[y]
this.c.Z(0,x,b)}},
i:function(a){return this.b}},jP:{"^":"b;0a,0b,0c",
sij:function(a){this.a=H.f(a,"$isaj",[P.o,V.dk],"$asaj")},
siq:function(a){this.b=H.f(a,"$isaj",[P.o,V.ds],"$asaj")},
k:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.dk(this,b)
z.siu(H.c([],[V.dt]))
z.d=null
this.a.Z(0,b,z)}return z},
O:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.ds(this,a)
y=P.o
z.shX(new H.b6(0,0,[y,y]))
this.b.Z(0,a,z)}return z},
eM:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.fa])
y=this.c
x=[P.z]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.aT(a,t)
r=y.jo(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.dn(w,0,null)
throw H.j(P.n("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.dn(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.fa(o==null?p.b:o,q,t)}++t}}},
p:{
cv:function(){var z,y
z=new V.jP()
y=P.o
z.sij(new H.b6(0,0,[y,V.dk]))
z.siq(new H.b6(0,0,[y,V.ds]))
z.c=null
return z}}},dt:{"^":"eB;b,0c,0a",
i:function(a){return this.b.b+": "+this.dh(0)}}}],["","",,X,{"^":"",hl:{"^":"ct;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
gm:function(){var z=this.fr
if(z==null){z=D.B()
this.fr=z}return z},
aq:function(a){var z=this.fr
if(!(z==null))z.B(a)},
saD:function(a,b){var z
if(b<1)b=1
z=this.a
if(z!==b){this.y=null
this.a=b
this.c=b
z=new D.x("width",z,b,this,[P.z])
z.b=!0
this.aq(z)}},
saA:function(a,b){var z
if(b<1)b=1
z=this.b
if(z!==b){this.y=null
this.b=b
this.d=b
z=new D.x("height",z,b,this,[P.z])
z.b=!0
this.aq(z)}},
K:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n
if(this.f){z=a.a
y=z.drawingBufferWidth
x=this.r
if(typeof y!=="number")return y.w()
this.saD(0,C.j.a_(y*x))
z=z.drawingBufferHeight
x=this.x
if(typeof z!=="number")return z.w()
this.saA(0,C.j.a_(z*x))}if(this.y==null){z=a.a
y=this.ch
x=this.a
w=this.b
v=H.X(C.b.c7(z,3379))
u=V.bT(x,2)
t=V.bT(w,2)
v=V.bT(v,2)
u=Math.min(u,v)
t=Math.min(t,v)
s=z.createTexture()
C.b.a7(z,3553,s)
C.b.aC(z,3553,10242,33071)
C.b.aC(z,3553,10243,33071)
C.b.aC(z,3553,10241,9729)
C.b.aC(z,3553,10240,9729)
C.b.eJ(z,3553,0,6408,u,t,0,6408,5121,null)
C.b.a7(z,3553,null)
r=T.f1(0,s)
r.e=x
r.f=w
r.r=u
r.x=t
if(!r.d){r.d=!0
x=r.y
if(!(x==null))x.cN()}y.b=r.b
y.c=r.c
y.d=r.d
y.e=r.e
y.f=r.f
y.r=r.r
y.x=r.x
y=y.y
if(!(y==null))y.cN()
y=this.ch
x=y.b
this.z=x
this.c=y.r
this.d=y.x
C.b.a7(z,3553,x)
y=z.createRenderbuffer()
this.Q=y
C.b.dX(z,36161,y)
C.b.jX(z,36161,33189,this.c,this.d)
y=z.createFramebuffer()
this.y=y
C.b.bk(z,36160,y)
C.b.ju(z,36160,36064,3553,this.z,0)
C.b.jt(z,36160,36096,36161,this.Q)
C.b.a7(z,3553,null)
C.b.dX(z,36161,null)
C.b.bk(z,36160,null)}z=a.a
C.b.bk(z,36160,this.y)
C.b.bo(z,2884)
C.b.bo(z,2929)
C.b.e6(z,513)
y=this.dy
x=y.c
a.c=C.j.a_(x*this.a)
w=y.d
a.d=C.j.a_(w*this.b)
q=y.a
p=this.c
o=C.j.a_(q*p)
y=y.b
q=this.d
C.b.eP(z,o,C.j.a_(y*q),C.j.a_(x*p),C.j.a_(w*q))
C.b.e2(z,this.db)
if(this.cy){y=this.cx
C.b.e1(z,y.a,y.b,y.c,y.d)
n=16640}else n=256
if(n>0)C.b.e0(z,n)},
a9:function(a){C.b.bk(a.a,36160,null)},
p:{
e_:function(a,b,c,d,e,f){var z=new X.hl()
z.a=512
z.b=512
z.c=512
z.d=512
z.e=!0
z.f=!0
z.r=d
z.x=e
z.ch=T.f1(0,null)
z.cx=new V.ap(0,0,0,1)
z.cy=!0
z.db=2000
z.dx=!0
z.dy=V.dh()
z.saD(0,a)
z.saA(0,b)
return z}}},c8:{"^":"b;",$isaC:1},hY:{"^":"ct;0a,0b,0c,0d,0e,0f,0r,0x",
gm:function(){var z=this.x
if(z==null){z=D.B()
this.x=z}return z},
K:function(a){var z,y,x,w,v,u,t,s
z=a.a
C.b.bk(z,36160,null)
C.b.bo(z,2884)
C.b.bo(z,2929)
C.b.e6(z,513)
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
v=w.a
if(typeof y!=="number")return H.E(y)
u=C.j.a_(v*y)
v=w.b
if(typeof x!=="number")return H.E(x)
t=C.j.a_(v*x)
v=C.j.a_(w.c*y)
a.c=v
w=C.j.a_(w.d*x)
a.d=w
C.b.eP(z,u,t,v,w)
C.b.e2(z,this.c)
if(this.b){w=this.a
C.b.e1(z,w.a,w.b,w.c,w.d)
s=16640}else s=256
C.b.e0(z,s)},
a9:function(a){},
p:{
d4:function(a,b,c,d,e,f,g){var z,y
z=new X.hY()
y=new V.ap(0,0,0,1)
z.a=y
z.b=a
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.dh()
z.r=y
return z}}},i8:{"^":"b;0a,0b",
gm:function(){var z=this.b
if(z==null){z=D.B()
this.b=z}return z},
K:function(a){var z
a.cy.c2(V.aX())
z=V.aX()
a.db.c2(z)},
a9:function(a){a.cy.aL()
a.db.aL()},
$isaC:1,
$isc8:1},iR:{"^":"b;0a,0b,0c,0d,0e,0f",
gm:function(){var z=this.f
if(z==null){z=D.B()
this.f=z}return z},
aq:[function(a){var z
H.e(a,"$ist")
z=this.f
if(!(z==null))z.B(a)},function(){return this.aq(null)},"kh","$1","$0","gfF",0,2,0],
K:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=this.c
w=this.d
v=this.e
u=v-w
t=1/Math.tan(x*0.5)
s=V.aA(-t/(z/y),0,0,0,0,t,0,0,0,0,v/u,-v*w/u,0,0,1,0)
a.cy.c2(s)
z=$.eL
if(z==null){z=V.eO()
y=V.fu()
x=$.fr
if(x==null){x=new V.M(0,0,-1)
$.fr=x}x=V.eE(z,y,x)
$.eL=x
r=x}else r=z
z=this.b
if(z!=null){q=z.b9(a,this)
if(q!=null)r=q.w(0,r)}a.db.c2(r)},
a9:function(a){a.cy.aL()
a.db.aL()},
$isaC:1,
$isc8:1,
p:{
eK:function(a,b,c,d,e){var z,y,x
z=new X.iR()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
if(null!=c){y=z.b
z.b=c
if(c!=null)c.gm().h(0,z.gfF())
x=new D.x("mover",y,z.b,z,[U.a8])
x.b=!0
z.aq(x)}x=z.c
if(!$.m.$2(x,b)){y=z.c
z.c=b
x=new D.x("fov",y,b,z,[P.w])
x.b=!0
z.aq(x)}x=z.d
if(!$.m.$2(x,d)){y=z.d
z.d=d
x=new D.x("near",y,d,z,[P.w])
x.b=!0
z.aq(x)}x=z.e
if(!$.m.$2(x,a)){y=z.e
z.e=a
x=new D.x("far",y,a,z,[P.w])
x.b=!0
z.aq(x)}return z}}},ct:{"^":"b;"}}],["","",,V,{"^":"",
lQ:function(a){P.jO(C.K,new V.lR(a))},
aT:{"^":"b;0d",
scl:function(a){this.d=H.f(a,"$isa",[[P.a,W.aV]],"$asa")},
bC:function(a){this.b=new P.i6(C.M)
this.c=null
this.scl(H.c([],[[P.a,W.aV]]))},
L:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.c([],[W.aV]))
y=a.split("\n")
for(z=y.length,x=[W.aV],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.c([],x))
t=document.createElement("div")
t.className="codePart"
H.H(u)
s=this.b.fT(u,0,u.length)
r=s==null?u:s
C.k.f5(t,H.dV(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gc0(this.d),t)}},
eG:function(a){var z,y,x,w
H.f(a,"$isa",[P.o],"$asa")
this.scl(H.c([],[[P.a,W.aV]]))
z=C.a.l(a,"\n")
y=this.c
if(y==null){y=this.bL()
this.c=y}for(y=y.eM(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)this.c1(y[w])}},
lR:{"^":"u:41;a",
$1:function(a){H.e(a,"$isbd")
P.dU(C.j.eL(this.a.gjs(),2)+" fps")}},
hz:{"^":"aT;a,0b,0c,0d",
c1:function(a){switch(a.a){case"Class":this.L(a.b,"#551")
break
case"Comment":this.L(a.b,"#777")
break
case"Id":this.L(a.b,"#111")
break
case"Num":this.L(a.b,"#191")
break
case"Reserved":this.L(a.b,"#119")
break
case"String":this.L(a.b,"#171")
break
case"Symbol":this.L(a.b,"#616")
break
case"Type":this.L(a.b,"#B11")
break
case"Whitespace":this.L(a.b,"#111")
break}},
bL:function(){var z,y,x,w
z=V.cv()
z.c=z.k(0,"Start")
y=z.k(0,"Start").l(0,"Id")
x=V.r(new H.q("_"))
C.a.h(y.a,x)
x=V.O("a","z")
C.a.h(y.a,x)
x=V.O("A","Z")
C.a.h(y.a,x)
x=z.k(0,"Id").l(0,"Id")
y=V.r(new H.q("_"))
C.a.h(x.a,y)
y=V.O("0","9")
C.a.h(x.a,y)
y=V.O("a","z")
C.a.h(x.a,y)
y=V.O("A","Z")
C.a.h(x.a,y)
y=z.k(0,"Start").l(0,"Int")
x=V.O("0","9")
C.a.h(y.a,x)
x=z.k(0,"Int").l(0,"Int")
y=V.O("0","9")
C.a.h(x.a,y)
y=z.k(0,"Int").l(0,"FloatDot")
x=V.r(new H.q("."))
C.a.h(y.a,x)
x=z.k(0,"FloatDot").l(0,"Float")
y=V.O("0","9")
C.a.h(x.a,y)
y=z.k(0,"Float").l(0,"Float")
x=V.O("0","9")
C.a.h(y.a,x)
x=z.k(0,"Start").l(0,"Sym")
y=V.r(new H.q("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.k(0,"Sym").l(0,"Sym")
x=V.r(new H.q("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.k(0,"Start").l(0,"OpenDoubleStr")
y=V.r(new H.q('"'))
C.a.h(x.a,y)
y=z.k(0,"OpenDoubleStr").l(0,"CloseDoubleStr")
x=V.r(new H.q('"'))
C.a.h(y.a,x)
x=z.k(0,"OpenDoubleStr").l(0,"EscDoubleStr")
y=V.r(new H.q("\\"))
C.a.h(x.a,y)
y=z.k(0,"EscDoubleStr").l(0,"OpenDoubleStr")
x=V.r(new H.q('"'))
C.a.h(y.a,x)
C.a.h(z.k(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.bq())
x=z.k(0,"Start").l(0,"OpenSingleStr")
y=V.r(new H.q("'"))
C.a.h(x.a,y)
y=z.k(0,"OpenSingleStr").l(0,"CloseSingleStr")
x=V.r(new H.q("'"))
C.a.h(y.a,x)
x=z.k(0,"OpenSingleStr").l(0,"EscSingleStr")
y=V.r(new H.q("\\"))
C.a.h(x.a,y)
y=z.k(0,"EscSingleStr").l(0,"OpenSingleStr")
x=V.r(new H.q("'"))
C.a.h(y.a,x)
C.a.h(z.k(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.bq())
x=z.k(0,"Start").l(0,"Slash")
y=V.r(new H.q("/"))
C.a.h(x.a,y)
y=z.k(0,"Slash").l(0,"Comment")
x=V.r(new H.q("/"))
C.a.h(y.a,x)
x=z.k(0,"Comment").l(0,"EndComment")
y=V.r(new H.q("\n"))
C.a.h(x.a,y)
y=z.k(0,"Comment").l(0,"Comment")
x=new V.au()
w=[V.az]
x.saf(H.c([],w))
C.a.h(y.a,x)
y=V.r(new H.q("\n"))
C.a.h(x.a,y)
y=z.k(0,"Slash").l(0,"MLComment")
x=V.r(new H.q("*"))
C.a.h(y.a,x)
x=z.k(0,"MLComment").l(0,"MLCStar")
y=V.r(new H.q("*"))
C.a.h(x.a,y)
y=z.k(0,"MLCStar").l(0,"MLComment")
x=new V.au()
x.saf(H.c([],w))
C.a.h(y.a,x)
y=V.r(new H.q("*"))
C.a.h(x.a,y)
y=z.k(0,"MLCStar").l(0,"EndComment")
x=V.r(new H.q("/"))
C.a.h(y.a,x)
x=z.k(0,"Start").l(0,"Whitespace")
y=V.r(new H.q(" \n\t"))
C.a.h(x.a,y)
y=z.k(0,"Whitespace").l(0,"Whitespace")
x=V.r(new H.q(" \n\t"))
C.a.h(y.a,x)
x=z.k(0,"Int")
x.d=x.a.O("Num")
x=z.k(0,"Float")
x.d=x.a.O("Num")
x=z.k(0,"Sym")
x.d=x.a.O("Symbol")
x=z.k(0,"CloseDoubleStr")
x.d=x.a.O("String")
x=z.k(0,"CloseSingleStr")
x.d=x.a.O("String")
x=z.k(0,"EndComment")
x.d=x.a.O("Comment")
x=z.k(0,"Whitespace")
x.d=x.a.O("Whitespace")
x=z.k(0,"Id")
y=x.a.O("Id")
x.d=y
x=[P.o]
y.aM(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.aM(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.aM(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
hZ:{"^":"aT;a,0b,0c,0d",
c1:function(a){switch(a.a){case"Builtin":this.L(a.b,"#411")
break
case"Comment":this.L(a.b,"#777")
break
case"Id":this.L(a.b,"#111")
break
case"Num":this.L(a.b,"#191")
break
case"Preprocess":this.L(a.b,"#737")
break
case"Reserved":this.L(a.b,"#119")
break
case"Symbol":this.L(a.b,"#611")
break
case"Type":this.L(a.b,"#171")
break
case"Whitespace":this.L(a.b,"#111")
break}},
bL:function(){var z,y,x,w
z=V.cv()
z.c=z.k(0,"Start")
y=z.k(0,"Start").l(0,"Id")
x=V.r(new H.q("_"))
C.a.h(y.a,x)
x=V.O("a","z")
C.a.h(y.a,x)
x=V.O("A","Z")
C.a.h(y.a,x)
x=z.k(0,"Id").l(0,"Id")
y=V.r(new H.q("_"))
C.a.h(x.a,y)
y=V.O("0","9")
C.a.h(x.a,y)
y=V.O("a","z")
C.a.h(x.a,y)
y=V.O("A","Z")
C.a.h(x.a,y)
y=z.k(0,"Start").l(0,"Int")
x=V.O("0","9")
C.a.h(y.a,x)
x=z.k(0,"Int").l(0,"Int")
y=V.O("0","9")
C.a.h(x.a,y)
y=z.k(0,"Int").l(0,"FloatDot")
x=V.r(new H.q("."))
C.a.h(y.a,x)
x=z.k(0,"FloatDot").l(0,"Float")
y=V.O("0","9")
C.a.h(x.a,y)
y=z.k(0,"Float").l(0,"Float")
x=V.O("0","9")
C.a.h(y.a,x)
x=z.k(0,"Start").l(0,"Sym")
y=V.r(new H.q("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.k(0,"Sym").l(0,"Sym")
x=V.r(new H.q("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.k(0,"Start").l(0,"Slash")
y=V.r(new H.q("/"))
C.a.h(x.a,y)
y=z.k(0,"Slash").l(0,"Comment")
x=V.r(new H.q("/"))
C.a.h(y.a,x)
C.a.h(z.k(0,"Slash").l(0,"Sym").a,new V.bq())
x=z.k(0,"Comment").l(0,"EndComment")
y=V.r(new H.q("\n"))
C.a.h(x.a,y)
y=z.k(0,"Comment").l(0,"Comment")
x=new V.au()
w=[V.az]
x.saf(H.c([],w))
C.a.h(y.a,x)
y=V.r(new H.q("\n"))
C.a.h(x.a,y)
y=z.k(0,"Start").l(0,"Preprocess")
x=V.r(new H.q("#"))
C.a.h(y.a,x)
x=z.k(0,"Preprocess").l(0,"Preprocess")
y=new V.au()
y.saf(H.c([],w))
C.a.h(x.a,y)
x=V.r(new H.q("\n"))
C.a.h(y.a,x)
x=z.k(0,"Preprocess").l(0,"EndPreprocess")
y=V.r(new H.q("\n"))
C.a.h(x.a,y)
y=z.k(0,"Start").l(0,"Whitespace")
x=V.r(new H.q(" \n\t"))
C.a.h(y.a,x)
x=z.k(0,"Whitespace").l(0,"Whitespace")
y=V.r(new H.q(" \n\t"))
C.a.h(x.a,y)
y=z.k(0,"Int")
y.d=y.a.O("Num")
y=z.k(0,"Float")
y.d=y.a.O("Num")
y=z.k(0,"Sym")
y.d=y.a.O("Symbol")
y=z.k(0,"EndComment")
y.d=y.a.O("Comment")
y=z.k(0,"EndPreprocess")
y.d=y.a.O("Preprocess")
y=z.k(0,"Whitespace")
y.d=y.a.O("Whitespace")
y=z.k(0,"Id")
x=y.a.O("Id")
y.d=x
y=[P.o]
x.aM(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.aM(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.aM(0,"Builtin",H.c(["gl_FragColor","gl_Position"],y))
return z}},
i2:{"^":"aT;a,0b,0c,0d",
c1:function(a){switch(a.a){case"Attr":this.L(a.b,"#911")
this.L("=","#111")
break
case"Id":this.L(a.b,"#111")
break
case"Other":this.L(a.b,"#111")
break
case"Reserved":this.L(a.b,"#119")
break
case"String":this.L(a.b,"#171")
break
case"Symbol":this.L(a.b,"#616")
break}},
bL:function(){var z,y,x
z=V.cv()
z.c=z.k(0,"Start")
y=z.k(0,"Start").l(0,"Id")
x=V.r(new H.q("_"))
C.a.h(y.a,x)
x=V.O("a","z")
C.a.h(y.a,x)
x=V.O("A","Z")
C.a.h(y.a,x)
x=z.k(0,"Id").l(0,"Id")
y=V.r(new H.q("_"))
C.a.h(x.a,y)
y=V.O("0","9")
C.a.h(x.a,y)
y=V.O("a","z")
C.a.h(x.a,y)
y=V.O("A","Z")
C.a.h(x.a,y)
y=z.k(0,"Id").l(0,"Attr")
x=V.r(new H.q("="))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Start").l(0,"Sym")
x=V.r(new H.q("</\\-!>="))
C.a.h(y.a,x)
x=z.k(0,"Sym").l(0,"Sym")
y=V.r(new H.q("</\\-!>="))
C.a.h(x.a,y)
y=z.k(0,"Start").l(0,"OpenStr")
x=V.r(new H.q('"'))
C.a.h(y.a,x)
x=z.k(0,"OpenStr").l(0,"CloseStr")
y=V.r(new H.q('"'))
C.a.h(x.a,y)
y=z.k(0,"OpenStr").l(0,"EscStr")
x=V.r(new H.q("\\"))
C.a.h(y.a,x)
x=z.k(0,"EscStr").l(0,"OpenStr")
y=V.r(new H.q('"'))
C.a.h(x.a,y)
C.a.h(z.k(0,"OpenStr").l(0,"OpenStr").a,new V.bq())
C.a.h(z.k(0,"Start").l(0,"Other").a,new V.bq())
y=z.k(0,"Other").l(0,"Other")
x=new V.au()
x.saf(H.c([],[V.az]))
C.a.h(y.a,x)
y=V.r(new H.q('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.O("a","z")
C.a.h(x.a,y)
y=V.O("A","Z")
C.a.h(x.a,y)
y=z.k(0,"Sym")
y.d=y.a.O("Symbol")
y=z.k(0,"CloseStr")
y.d=y.a.O("String")
y=z.k(0,"Id")
x=y.a.O("Id")
y.d=x
x.aM(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.o]))
x=z.k(0,"Attr")
x.d=x.a.O("Attr")
x=z.k(0,"Other")
x.d=x.a.O("Other")
return z}},
iT:{"^":"aT;a,0b,0c,0d",
eG:function(a){H.f(a,"$isa",[P.o],"$asa")
this.scl(H.c([],[[P.a,W.aV]]))
this.L(C.a.l(a,"\n"),"#111")},
c1:function(a){},
bL:function(){return}},
jn:{"^":"b;0a,0b",
fk:function(a,b){var z,y,x,w,v,u,t
z=document
y=z.body
x=z.createElement("div")
x.className="scrollTop";(y&&C.n).E(y,x)
w=z.createElement("div")
w.className="scrollPage"
C.n.E(y,w)
v=z.createElement("div")
v.className="pageCenter"
C.k.E(w,v)
if(a.length!==0){z.title=a
u=z.createElement("div")
u.className="pageTitle"
u.textContent=a
C.k.E(v,u)}t=z.createElement("div")
this.a=t
C.k.E(v,t)
this.b=null
t=W.a7
W.W(z,"scroll",H.l(new V.jq(x),{func:1,ret:-1,args:[t]}),!1,t)},
dU:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.f(a,"$isa",[P.o],"$asa")
this.ia()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.eM(C.a.jy(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v){u=x[v]
switch(u.a){case"Bold":t=z.createElement("div")
t.className="boldPar"
t.textContent=u.b
C.k.E(y,t)
break
case"Italic":t=z.createElement("div")
t.className="italicPar"
t.textContent=u.b
C.k.E(y,t)
break
case"Code":t=z.createElement("div")
t.className="codePar"
t.textContent=u.b
C.k.E(y,t)
break
case"Link":s=u.b
if(H.h8(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.k(r,1)
q.href=H.H(r[1])
q.textContent=H.H(r[0])
C.k.E(y,q)}else{p=P.fQ(C.C,s,C.x,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+p
q.textContent=s
C.k.E(y,q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
C.k.E(y,t)
break}}C.k.E(this.a,y)},
eV:function(a){var z,y,x,w
z=new V.hz("dart")
z.bC("dart")
y=new V.hZ("glsl")
y.bC("glsl")
x=new V.i2("html")
x.bC("html")
w=C.a.jp(H.c([z,y,x],[V.aT]),new V.jr(a))
if(w!=null)return w
z=new V.iT("plain")
z.bC("plain")
return z},
dT:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.f(a2,"$isa",[P.o],"$asa")
z=H.c([],[P.z])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.dR(w).c9(w,"+")){C.a.Z(a2,x,C.i.bA(w,1))
C.a.h(z,1)
y=!0}else if(C.i.c9(w,"-")){C.a.Z(a2,x,C.i.bA(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.eV(a0)
v.eG(a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
C.k.E(t,s)
C.k.E(this.a,t)
r=P.fQ(C.C,a,C.x,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.dY(null)
n.href="#"+r
n.textContent=a
C.k.E(o,n)
C.v.E(p,o)
C.m.E(q,p)
C.p.E(s,q)
if(y)for(m=a1,l=m,x=0;k=v.d,x<k.length;++x){w=k[x]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums codeLineLight"
h=u.createElement("td")
h.className="codeLineNums"
if(x>=z.length)return H.k(z,x)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.y)(w),++e)C.v.E(f,w[e])
C.m.E(j,i)
C.m.E(j,h)
C.m.E(j,f)
C.p.E(s,j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.y)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gP(w);b.A();)C.v.E(h,b.gI())
C.m.E(j,i)
C.m.E(j,h)
C.p.E(s,j)}},
ia:function(){var z,y,x,w
if(this.b!=null)return
z=V.cv()
z.c=z.k(0,"Start")
y=z.k(0,"Start").l(0,"Bold")
x=V.r(new H.q("*"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Bold").l(0,"Bold")
x=new V.au()
w=[V.az]
x.saf(H.c([],w))
C.a.h(y.a,x)
y=V.r(new H.q("*"))
C.a.h(x.a,y)
y=z.k(0,"Bold").l(0,"BoldEnd")
x=V.r(new H.q("*"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Start").l(0,"Italic")
x=V.r(new H.q("_"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Italic").l(0,"Italic")
x=new V.au()
x.saf(H.c([],w))
C.a.h(y.a,x)
y=V.r(new H.q("_"))
C.a.h(x.a,y)
y=z.k(0,"Italic").l(0,"ItalicEnd")
x=V.r(new H.q("_"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Start").l(0,"Code")
x=V.r(new H.q("`"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Code").l(0,"Code")
x=new V.au()
x.saf(H.c([],w))
C.a.h(y.a,x)
y=V.r(new H.q("`"))
C.a.h(x.a,y)
y=z.k(0,"Code").l(0,"CodeEnd")
x=V.r(new H.q("`"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Start").l(0,"LinkHead")
x=V.r(new H.q("["))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"LinkHead").l(0,"LinkTail")
x=V.r(new H.q("|"))
C.a.h(y.a,x)
x=z.k(0,"LinkHead").l(0,"LinkEnd")
y=V.r(new H.q("]"))
C.a.h(x.a,y)
x.c=!0
x=z.k(0,"LinkHead").l(0,"LinkHead")
y=new V.au()
y.saf(H.c([],w))
C.a.h(x.a,y)
x=V.r(new H.q("|]"))
C.a.h(y.a,x)
x=z.k(0,"LinkTail").l(0,"LinkEnd")
y=V.r(new H.q("]"))
C.a.h(x.a,y)
x.c=!0
x=z.k(0,"LinkTail").l(0,"LinkTail")
y=new V.au()
y.saf(H.c([],w))
C.a.h(x.a,y)
x=V.r(new H.q("|]"))
C.a.h(y.a,x)
C.a.h(z.k(0,"Start").l(0,"Other").a,new V.bq())
x=z.k(0,"Other").l(0,"Other")
y=new V.au()
y.saf(H.c([],w))
C.a.h(x.a,y)
x=V.r(new H.q("*_`["))
C.a.h(y.a,x)
x=z.k(0,"BoldEnd")
x.d=x.a.O("Bold")
x=z.k(0,"ItalicEnd")
x.d=x.a.O("Italic")
x=z.k(0,"CodeEnd")
x.d=x.a.O("Code")
x=z.k(0,"LinkEnd")
x.d=x.a.O("Link")
x=z.k(0,"Other")
x.d=x.a.O("Other")
this.b=z},
p:{
jo:function(a,b){var z=new V.jn()
z.fk(a,!0)
return z}}},
jq:{"^":"u:25;a",
$1:function(a){P.f8(C.q,new V.jp(this.a))}},
jp:{"^":"u:2;a",
$0:function(){var z,y,x
z=C.j.a_(document.documentElement.scrollTop)
y=this.a.style
x=H.h(-0.01*z)+"px"
y.top=x}},
jr:{"^":"u:42;a",
$1:function(a){return H.e(a,"$isaT").a===this.a}}}],["","",,N,{"^":"",
h4:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z=V.jo("Test 028",!0)
y=W.cX(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
C.k.E(z.a,y)
x=[P.o]
z.dU(H.c(["Test of a Gaussian blur cover pass. ","Notice the depth of field causing things further away to be blurry."],x))
z.dU(H.c(["\xab[Back to Tests|../]"],x))
w=C.z.eX(document,"testCanvas")
if(w==null)H.p(P.n("Failed to find an element with the identifier, testCanvas."))
v=E.jM(w,!0,!0,!0,!1)
u=new U.eo()
u.bD(U.a8)
u.aP(u.ghn(),u.ghK())
u.e=null
u.f=V.aX()
u.r=0
x=v.r
t=new U.k5()
s=U.d_()
s.sd7(0,!0)
s.scY(6.283185307179586)
s.sd_(0)
s.sak(0,0)
s.scZ(100)
s.sX(0)
s.scL(0.5)
t.b=s
r=t.gaX()
s.gm().h(0,r)
s=U.d_()
s.sd7(0,!0)
s.scY(6.283185307179586)
s.sd_(0)
s.sak(0,0)
s.scZ(100)
s.sX(0)
s.scL(0.5)
t.c=s
s.gm().h(0,r)
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
q=new X.aB(!1,!1,!1)
p=t.d
t.d=q
s=[X.aB]
r=new D.x("modifiers",p,q,t,s)
r.b=!0
t.W(r)
r=t.f
if(r!==!1){t.f=!1
r=new D.x("invertX",r,!1,t,[P.I])
r.b=!0
t.W(r)}r=t.r
if(r!==!1){t.r=!1
r=new D.x("invertY",r,!1,t,[P.I])
r.b=!0
t.W(r)}t.bj(x)
u.h(0,t)
x=v.r
t=new U.k4()
r=U.d_()
r.sd7(0,!0)
r.scY(6.283185307179586)
r.sd_(0)
r.sak(0,0)
r.scZ(100)
r.sX(0)
r.scL(0.2)
t.b=r
r.gm().h(0,t.gaX())
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
q=new X.aB(!0,!1,!1)
p=t.c
t.c=q
r=new D.x("modifiers",p,q,t,s)
r.b=!0
t.W(r)
t.bj(x)
u.h(0,t)
x=v.r
t=new U.k6()
t.c=0.01
t.d=0
t.e=0
q=new X.aB(!1,!1,!1)
t.b=q
s=new D.x("modifiers",null,q,t,s)
s.b=!0
t.W(s)
t.bj(x)
u.h(0,t)
u.h(0,U.d1(V.iH(0,0,5)))
o=X.eK(2000,1.0471975511965976,u,0.1,null)
n=F.dj()
F.bM(n,null,null,1,1,1,0,0,1)
F.bM(n,null,null,1,1,0,1,0,3)
F.bM(n,null,null,1,1,0,0,1,2)
F.bM(n,null,null,1,1,-1,0,0,0)
F.bM(n,null,null,1,1,0,-1,0,0)
F.bM(n,null,null,1,1,0,0,-1,3)
n.aJ()
m=E.cd(null,!0,null,"",n,null)
l=E.cd(null,!0,null,"",null,null)
for(k=-1.6;k<=1.7;k+=0.8)for(j=-1.6;j<=1.7;j+=0.8)for(i=-1.6;i<=1.7;i+=0.8){h=new V.a_(1,0,0,k,0,1,0,j,0,0,1,i,0,0,0,1).w(0,new V.a_(0.2,0,0,0,0,0.2,0,0,0,0,0.2,0,0,0,0,1))
g=E.cd(null,!0,null,"",null,null)
x=new U.d0()
x.sV(h)
g.seC(x)
x=g.y
t=H.v(x,0)
H.A(m,t)
s=[t]
if(x.bF(H.c([m],s))){r=x.a
f=r.length
C.a.h(r,m)
t=H.f(H.c([m],s),"$isi",[t],"$asi")
x=x.c
if(x!=null)x.$2(f,t)}x=l.y
t=H.v(x,0)
H.A(g,t)
s=[t]
if(x.bF(H.c([g],s))){r=x.a
f=r.length
C.a.h(r,g)
t=H.f(H.c([g],s),"$isi",[t],"$asi")
x=x.c
if(x!=null)x.$2(f,t)}}e=v.f.ey("../resources/diceColor")
d=new O.iy()
d.sfM(O.c9(V.a_))
d.e.aP(d.ghp(),d.ghq())
x=new O.b7(d,"emission")
x.c=C.c
x.f=new V.U(0,0,0)
d.f=x
x=new O.b7(d,"ambient")
x.c=C.c
x.f=new V.U(0,0,0)
d.r=x
x=new O.b7(d,"diffuse")
x.c=C.c
x.f=new V.U(0,0,0)
d.x=x
x=new O.b7(d,"invDiffuse")
x.c=C.c
x.f=new V.U(0,0,0)
d.y=x
x=new O.iE(d,"specular")
x.c=C.c
x.f=new V.U(0,0,0)
x.ch=100
d.z=x
x=new O.iB(d,"bump")
x.c=C.c
d.Q=x
d.ch=null
x=new O.b7(d,"reflect")
x.c=C.c
x.f=new V.U(0,0,0)
d.cx=x
x=new O.iD(d,"refract")
x.c=C.c
x.f=new V.U(0,0,0)
x.ch=1
d.cy=x
x=new O.iA(d,"alpha")
x.c=C.c
x.f=1
d.db=x
x=new D.ij()
x.bD(D.Z)
x.sfZ(H.c([],[D.cc]))
x.shR(H.c([],[D.eM]))
x.sig(H.c([],[D.eW]))
x.siv(H.c([],[D.f4]))
x.siw(H.c([],[D.f5]))
x.six(H.c([],[D.f6]))
x.Q=null
x.ch=null
x.dd(x.gho(),x.ghJ(),x.ghL())
d.dx=x
t=x.Q
if(t==null){t=D.B()
x.Q=t
x=t}else x=t
x.h(0,d.ghZ())
x=d.dx
t=x.ch
if(t==null){t=D.B()
x.ch=t
x=t}else x=t
x.h(0,d.ga0())
d.dy=null
x=d.dx
t=U.d1(V.eF(-1,-1,-1,null))
x.h(0,D.eg(new V.U(1,0.9,0.9),t))
x=d.dx
t=U.d1(V.eF(1,1,2,null))
x.h(0,D.eg(new V.U(0.2,0.2,0.35),t))
x=d.r
x.say(0,new V.U(0.2,0.2,0.2))
d.r.sbw(e)
x=d.x
x.say(0,new V.U(0.8,0.8,0.8))
d.x.sbw(e)
x=d.z
x.say(0,new V.U(0.7,0.7,0.7))
x=d.z
if(x.c===C.c){x.c=C.f
x.cb()
x.cw(100)
t=x.a
t.a=null
t.v(null)}x.cw(10)
d.Q.sbw(v.f.ey("../resources/diceBumpMap"))
c=X.e_(800,600,!0,1,1,!0)
if(c.cy){c.cy=!1
x=new D.x("clearColor",!0,!1,c,[P.I])
x.b=!0
c.aq(x)}x=v.f.jC("../resources/maskonaive",".jpg")
b=M.d2(null,null,null)
t=new O.js()
t.b=1.0471975511965976
t.d=new V.U(1,1,1)
p=t.c
t.c=x
x.gm().h(0,t.ga0())
x=new D.x("boxTexture",p,t.c,t,[T.dq])
x.b=!0
t.v(x)
b.saB(t)
b.sb2(o)
b.saO(0,c)
a=M.el(null,null,null,null)
a.sb2(o)
a.saO(0,c)
a.saB(d)
a.d.h(0,l)
a0=X.e_(400,300,!0,0.5,0.5,!0)
a1=M.el(null,null,null,null)
a1.sb2(o)
a1.saO(0,a0)
x=new O.hC()
x.d=1
x.e=10
a2=new V.U(1,1,1)
x.b=a2
t=[V.U]
s=new D.x("objectColor",null,a2,x,t)
s.b=!0
x.v(s)
a2=new V.U(0,0,0)
if(!J.N(x.c,a2)){p=x.c
x.c=a2
t=new D.x("fogColor",p,a2,x,t)
t.b=!0
x.v(t)}t=x.d
if(!$.m.$2(t,3.5)){p=x.d
x.d=3.5
t=new D.x("fogStart",p,3.5,x,[P.w])
t.b=!0
x.v(t)}t=x.e
if(!$.m.$2(t,5.5)){p=x.e
x.e=5.5
t=new D.x("fogStop",p,5.5,x,[P.w])
t.b=!0
x.v(t)}a1.saB(x)
a1.d.h(0,l)
x=c.ch
t=a0.ch
a3=new O.i_()
a3.e=0
a3.f=4
a3.r=0.001
s=$.eD
if(s==null){s=new V.dc(1,0,0,0,1,0,0,0,1)
$.eD=s
h=s}else h=s
a3.b=h
s=new D.x("textureMatrix",null,null,a3,[P.b])
s.b=!0
a3.v(s)
s=a3.c
if(s!==x){if(s!=null)s.gm().R(0,a3.ga0())
p=a3.c
a3.c=x
x.gm().h(0,a3.ga0())
x=new D.x("colorTexture",p,a3.c,a3,[T.cu])
x.b=!0
a3.v(x)}x=a3.d
if(x!==t){if(x!=null)x.gm().R(0,a3.ga0())
p=a3.d
a3.d=t
t.gm().h(0,a3.ga0())
x=new D.x("depthTexture",p,a3.d,a3,[T.cu])
x.b=!0
a3.v(x)}x=a3.e
if(!$.m.$2(x,0)){p=a3.e
a3.e=0
x=new D.x("highOffset",p,0,a3,[P.w])
x.b=!0
a3.v(x)}x=a3.f
if(!$.m.$2(x,3)){p=a3.f
a3.f=3
x=new D.x("lowOffset",p,3,a3,[P.w])
x.b=!0
a3.v(x)}x=a3.r
if(!$.m.$2(x,0.001)){p=a3.r
a3.r=0.001
x=new D.x("depthLimit",p,0.001,a3,[P.w])
x.b=!0
a3.v(x)}a4=M.d2(null,null,null)
a4.saB(a3)
a5=new O.jG()
a2=new V.ap(0,0,0,0)
a5.a=a2
x=new D.x("backColor",null,a2,a5,[V.ap])
x.b=!0
a5.v(x)
a5.b=null
a5.sh0(O.c9(O.bc))
a5.c.aP(a5.ghx(),a5.ghy())
a5.d=0
a5.e=null
x=a5.c
t=a0.ch
x.h(0,O.f3(null,V.bE(0,0.8,0.2,0.2),!1,null,t))
t=a5.c
x=c.ch
t.h(0,O.f3(null,V.bE(0,0.6,0.2,0.2),!1,null,x))
a6=M.d2(null,null,null)
a6.saO(0,X.d4(!1,!0,!1,null,2000,null,0))
a6.saB(a5)
x=M.aE
t=H.c([b,a,a1,a4,a6],[x])
s=new M.hu()
s.bD(x)
s.e=!1
s.f=null
s.aP(s.ghM(),s.ghN())
s.ah(0,t)
x=v.d
if(x!==s){if(x!=null)x.gm().R(0,v.gdk())
v.d=s
s.gm().h(0,v.gdk())
v.fo()}x=v.z
if(x==null){x=D.B()
v.z=x}t={func:1,ret:-1,args:[D.t]}
s=H.l(new N.lJ(z,a3),t)
if(x.b==null)x.saZ(H.c([],[t]))
x=x.b;(x&&C.a).h(x,s)
V.lQ(v)},
lJ:{"^":"u:6;a,b",
$1:function(a){var z,y,x,w
H.e(a,"$ist")
z=this.a
y=this.b
x=y.a
w=[P.o]
z.dT("Vertex Shader for blur","glsl",0,H.c((x==null?null:x.c).split("\n"),w))
y=y.a
z.dT("Fragment Shader for blur","glsl",0,H.c((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.Q=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.es.prototype
return J.er.prototype}if(typeof a=="string")return J.ck.prototype
if(a==null)return J.et.prototype
if(typeof a=="boolean")return J.id.prototype
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bZ.prototype
return a}if(a instanceof P.b)return a
return J.cJ(a)}
J.cI=function(a){if(typeof a=="string")return J.ck.prototype
if(a==null)return a
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bZ.prototype
return a}if(a instanceof P.b)return a
return J.cJ(a)}
J.dQ=function(a){if(a==null)return a
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bZ.prototype
return a}if(a instanceof P.b)return a
return J.cJ(a)}
J.lv=function(a){if(typeof a=="number")return J.cj.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cy.prototype
return a}
J.dR=function(a){if(typeof a=="string")return J.ck.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cy.prototype
return a}
J.aa=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bZ.prototype
return a}if(a instanceof P.b)return a
return J.cJ(a)}
J.N=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Q(a).u(a,b)}
J.ha=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.lv(a).av(a,b)}
J.hb=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lG(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cI(a).j(a,b)}
J.hc=function(a,b,c,d){return J.aa(a).fI(a,b,c,d)}
J.c5=function(a,b){return J.aa(a).hV(a,b)}
J.dW=function(a,b){return J.aa(a).E(a,b)}
J.cP=function(a,b,c){return J.cI(a).j7(a,b,c)}
J.cQ=function(a,b){return J.dQ(a).ai(a,b)}
J.hd=function(a){return J.aa(a).gj2(a)}
J.b2=function(a){return J.Q(a).ga1(a)}
J.bp=function(a){return J.dQ(a).gP(a)}
J.b3=function(a){return J.cI(a).gq(a)}
J.he=function(a){return J.aa(a).gjT(a)}
J.hf=function(a){return J.aa(a).gk7(a)}
J.cR=function(a,b){return J.aa(a).bb(a,b)}
J.dX=function(a){return J.dQ(a).jV(a)}
J.hg=function(a,b,c){return J.dR(a).bB(a,b,c)}
J.hh=function(a){return J.dR(a).kd(a)}
J.ab=function(a){return J.Q(a).i(a)}
I.b1=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.n=W.c6.prototype
C.o=W.cW.prototype
C.y=W.cY.prototype
C.k=W.aV.prototype
C.J=W.hH.prototype
C.L=W.i3.prototype
C.z=W.i5.prototype
C.N=J.G.prototype
C.a=J.b5.prototype
C.O=J.er.prototype
C.h=J.es.prototype
C.r=J.et.prototype
C.j=J.cj.prototype
C.i=J.ck.prototype
C.V=J.bZ.prototype
C.Z=W.iM.prototype
C.D=J.iS.prototype
C.E=W.j3.prototype
C.b=P.di.prototype
C.v=W.jB.prototype
C.p=W.jC.prototype
C.m=W.jD.prototype
C.w=J.cy.prototype
C.F=W.bK.prototype
C.G=W.kj.prototype
C.H=new P.iQ()
C.I=new P.k8()
C.l=new P.kQ()
C.c=new A.ca(0,"ColorSourceType.None")
C.f=new A.ca(1,"ColorSourceType.Solid")
C.e=new A.ca(2,"ColorSourceType.Texture2D")
C.d=new A.ca(3,"ColorSourceType.TextureCube")
C.q=new P.bt(0)
C.K=new P.bt(5e6)
C.M=new P.i7("element",!0,!1,!1,!1)
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
C.W=H.c(I.b1(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.o])
C.X=H.c(I.b1(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.o])
C.Y=H.c(I.b1([]),[P.o])
C.C=H.c(I.b1([0,0,65498,45055,65535,34815,65534,18431]),[P.z])
C.t=H.c(I.b1(["bind","if","ref","repeat","syntax"]),[P.o])
C.u=H.c(I.b1(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.o])
C.x=new P.k7(!1)
$.ax=0
$.br=null
$.e1=null
$.dH=!1
$.h2=null
$.fY=null
$.h7=null
$.cH=null
$.cL=null
$.dS=null
$.bi=null
$.bO=null
$.bP=null
$.dI=!1
$.P=C.l
$.aJ=null
$.d3=null
$.ek=null
$.ej=null
$.ee=null
$.ed=null
$.ec=null
$.eb=null
$.m=V.iF()
$.eD=null
$.co=null
$.eN=null
$.bB=null
$.bF=null
$.fq=null
$.ft=null
$.fs=null
$.cz=null
$.fr=null
$.hE="uniform mat4 viewObjMat;                    \nuniform mat4 projMat;                       \n                                            \nattribute vec3 posAttr;                     \n                                            \nvarying float depth;                        \n                                            \nvoid main()                                 \n{                                           \n  vec4 pos = viewObjMat*vec4(posAttr, 1.0); \n  depth = pos.z;                            \n  gl_Position = projMat*pos;                \n}                                           \n"
$.hD="precision mediump float;                                  \n                                                          \nuniform vec3 objClr;                                      \nuniform vec3 fogClr;                                      \nuniform float fogStart;                                   \nuniform float fogStop;                                    \n                                                          \nvarying float depth;                                      \n                                                          \nvoid main()                                               \n{                                                         \n   float factor = (depth-fogStop)/(fogStart-fogStop);     \n   factor = clamp(factor, 0.0, 1.0);                      \n   gl_FragColor = vec4(mix(fogClr, objClr, factor), 1.0); \n}                                                         \n"
$.i1="uniform mat4 projViewObjMat;                                 \nuniform mat3 txt2DMat;                                       \n                                                             \nattribute vec3 posAttr;                                      \nattribute vec2 txtAttr;                                      \n                                                             \nvarying vec2 txt2D;                                          \n                                                             \nvoid main()                                                  \n{                                                            \n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy; \n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);           \n}                                                            \n"
$.i0="precision mediump float;                                  \n                                                          \n#define MAX_BLUR_RANGE 10.0                               \n#define BLUR_STEP 0.3333                                  \n                                                          \nuniform sampler2D colorTxt;                               \nuniform sampler2D depthTxt;                               \nuniform int nullColorTxt;                                 \nuniform int nullDepthTxt;                                 \nuniform float width;                                      \nuniform float height;                                     \nuniform float highOffset;                                 \nuniform float lowOffset;                                  \nuniform float depthLimit;                                 \n                                                          \nvarying vec2 txt2D;                                       \n                                                          \nfloat div;                                                \nvec4 color;                                               \n                                                          \nvoid offsetColor(float baseDepth, float tu, float tv)     \n{                                                         \n   vec2 txtOffset = vec2(txt2D.x + tu/width,              \n                         txt2D.y + tv/height);            \n   float depth = texture2D(depthTxt, txtOffset).r;        \n   if (depth - depthLimit > baseDepth) return;            \n   div += 1.0;                                            \n   color += texture2D(colorTxt, txtOffset);               \n}                                                         \n                                                          \nvoid main()                                               \n{                                                         \n   if(nullColorTxt > 0)                                   \n   {                                                      \n      gl_FragColor = vec4(1.0);                           \n      return;                                             \n   }                                                      \n   color = texture2D(colorTxt, txt2D);                    \n   float baseDepth;                                       \n   if(nullDepthTxt > 0) baseDepth = 1.0;                  \n   else baseDepth = texture2D(depthTxt, txt2D).r;         \n   float offset = mix(lowOffset, highOffset, baseDepth);  \n   offset = abs(offset);                                  \n   div = 1.0;                                             \n   if(offset >= 1.0)                                      \n   {                                                      \n      for(float x=0.0; x<MAX_BLUR_RANGE; x+=BLUR_STEP)    \n      {                                                   \n         if(x > offset) break;                            \n         for(float y=0.0; y<MAX_BLUR_RANGE; y+=BLUR_STEP) \n         {                                                \n            if(y > offset) break;                         \n            offsetColor(baseDepth,  x,  y);               \n            offsetColor(baseDepth,  x, -y);               \n            offsetColor(baseDepth, -x,  y);               \n            offsetColor(baseDepth, -x, -y);               \n         }                                                \n      }                                                   \n   }                                                      \n   gl_FragColor = color / div;                            \n}                                                         \n"
$.ju="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.jt="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.eL=null
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
I.$lazy(y,x,w)}})(["e9","$get$e9",function(){return H.h1("_$dart_dartClosure")},"d7","$get$d7",function(){return H.h1("_$dart_js")},"fc","$get$fc",function(){return H.aF(H.cw({
toString:function(){return"$receiver$"}}))},"fd","$get$fd",function(){return H.aF(H.cw({$method$:null,
toString:function(){return"$receiver$"}}))},"fe","$get$fe",function(){return H.aF(H.cw(null))},"ff","$get$ff",function(){return H.aF(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"fj","$get$fj",function(){return H.aF(H.cw(void 0))},"fk","$get$fk",function(){return H.aF(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fh","$get$fh",function(){return H.aF(H.fi(null))},"fg","$get$fg",function(){return H.aF(function(){try{null.$method$}catch(z){return z.message}}())},"fm","$get$fm",function(){return H.aF(H.fi(void 0))},"fl","$get$fl",function(){return H.aF(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dE","$get$dE",function(){return P.kk()},"bQ","$get$bQ",function(){return[]},"fP","$get$fP",function(){return P.j7("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"e8","$get$e8",function(){return{}},"fE","$get$fE",function(){return P.ex(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.o)},"dF","$get$dF",function(){return P.io(P.o,P.bV)},"fx","$get$fx",function(){return Z.al(0)},"fv","$get$fv",function(){return Z.al(511)},"a2","$get$a2",function(){return Z.al(1)},"aQ","$get$aQ",function(){return Z.al(2)},"aP","$get$aP",function(){return Z.al(4)},"aw","$get$aw",function(){return Z.al(8)},"aR","$get$aR",function(){return Z.al(16)},"bI","$get$bI",function(){return Z.al(32)},"bJ","$get$bJ",function(){return Z.al(64)},"fw","$get$fw",function(){return Z.al(96)},"bf","$get$bf",function(){return Z.al(128)},"aO","$get$aO",function(){return Z.al(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.t]},{func:1,ret:-1,args:[D.t]},{func:1,ret:P.J},{func:1,ret:-1},{func:1,ret:-1,args:[W.at]},{func:1,ret:-1,args:[P.z,[P.i,E.ar]]},{func:1,ret:P.J,args:[D.t]},{func:1,ret:P.J,args:[F.a4]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.a7]},{func:1,ret:-1,args:[W.be]},{func:1,ret:-1,args:[P.z,[P.i,V.a_]]},{func:1,ret:P.I,args:[W.aD]},{func:1,args:[,]},{func:1,ret:P.J,args:[,]},{func:1,ret:P.J,args:[{func:1,ret:-1,args:[D.t]}]},{func:1,ret:P.I,args:[P.o]},{func:1,ret:-1,args:[W.bx]},{func:1,ret:-1,args:[P.z,[P.i,D.Z]]},{func:1,ret:P.w},{func:1,ret:-1,args:[P.z,[P.i,U.a8]]},{func:1,ret:P.J,args:[,,]},{func:1,ret:-1,args:[P.z,[P.i,M.aE]]},{func:1,ret:P.o,args:[P.z]},{func:1,ret:-1,args:[P.z,[P.i,O.bc]]},{func:1,ret:P.J,args:[W.a7]},{func:1,ret:P.I,args:[W.C]},{func:1,ret:P.I,args:[W.S,P.o,P.o,W.c3]},{func:1,args:[W.a7]},{func:1,ret:P.o,args:[P.o]},{func:1,ret:-1,args:[W.C,W.C]},{func:1,ret:W.S,args:[W.C]},{func:1,ret:P.J,args:[{func:1,ret:-1}]},{func:1,args:[,P.o]},{func:1,ret:P.J,args:[,],opt:[,]},{func:1,args:[P.o]},{func:1,ret:-1,args:[W.bK]},{func:1,ret:[P.aS,,],args:[,]},{func:1,ret:P.I,args:[P.w,P.w]},{func:1,ret:P.J,args:[F.aH,P.w,P.w]},{func:1,ret:P.I,args:[[P.i,D.Z]]},{func:1,ret:P.J,args:[P.bd]},{func:1,ret:P.I,args:[V.aT]},{func:1,ret:P.J,args:[P.ag]}]
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
if(x==y)H.lT(d||a)
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
Isolate.b1=a.b1
Isolate.dO=a.dO
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
if(typeof dartMainRunner==="function")dartMainRunner(N.h4,[])
else N.h4([])})})()
//# sourceMappingURL=test.dart.js.map
