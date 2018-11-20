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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.dI"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dI"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.dI(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dJ=function(){}
var dart=[["","",,H,{"^":"",mV:{"^":"b;a"}}],["","",,J,{"^":"",
dN:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cG:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dM==null){H.mm()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.f(P.cu("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$d0()]
if(v!=null)return v
v=H.mq(a)
if(v!=null)return v
if(typeof a=="function")return C.X
y=Object.getPrototypeOf(a)
if(y==null)return C.F
if(y===Object.prototype)return C.F
if(typeof w=="function"){Object.defineProperty(w,$.$get$d0(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
G:{"^":"b;",
v:function(a,b){return a===b},
gW:function(a){return H.by(a)},
i:["fu",function(a){return"Instance of '"+H.b9(a)+"'"}],
"%":"DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo"},
ie:{"^":"G;",
i:function(a){return String(a)},
gW:function(a){return a?519018:218159},
$isT:1},
eq:{"^":"G;",
v:function(a,b){return null==b},
i:function(a){return"null"},
gW:function(a){return 0},
$isC:1},
d1:{"^":"G;",
gW:function(a){return 0},
i:["fv",function(a){return String(a)}]},
iZ:{"^":"d1;"},
cv:{"^":"d1;"},
c0:{"^":"d1;",
i:function(a){var z=a[$.$get$e5()]
if(z==null)return this.fv(a)
return"JavaScript function for "+H.j(J.af(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscZ:1},
b4:{"^":"G;$ti",
h:function(a,b){H.x(b,H.u(a,0))
if(!!a.fixed$length)H.p(P.Q("add"))
a.push(b)},
kf:function(a,b){var z
if(!!a.fixed$length)H.p(P.Q("removeAt"))
z=a.length
if(b>=z)throw H.f(P.c4(b,null,null))
return a.splice(b,1)[0]},
H:function(a,b){var z
if(!!a.fixed$length)H.p(P.Q("remove"))
for(z=0;z<a.length;++z)if(J.F(a[z],b)){a.splice(z,1)
return!0}return!1},
ba:function(a,b){var z,y
H.i(b,"$ism",[H.u(a,0)],"$asm")
if(!!a.fixed$length)H.p(P.Q("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.z)(b),++y)a.push(b[y])},
a1:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[H.u(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.f(P.b3(a))}},
G:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.q(z,y,H.j(a[y]))
return z.join(b)},
jN:function(a){return this.G(a,"")},
jF:function(a,b,c,d){var z,y,x
H.x(b,d)
H.n(c,{func:1,ret:d,args:[d,H.u(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.f(P.b3(a))}return y},
an:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
ft:function(a,b,c){if(b<0||b>a.length)throw H.f(P.W(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.W(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.u(a,0)])
return H.c(a.slice(b,c),[H.u(a,0)])},
gjE:function(a){if(a.length>0)return a[0]
throw H.f(H.em())},
gaQ:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.f(H.em())},
aD:function(a,b){var z
for(z=0;z<a.length;++z)if(J.F(a[z],b))return!0
return!1},
i:function(a){return P.d_(a,"[","]")},
gU:function(a){return new J.ak(a,a.length,0,[H.u(a,0)])},
gW:function(a){return H.by(a)},
gp:function(a){return a.length},
sp:function(a,b){if(!!a.fixed$length)H.p(P.Q("set length"))
if(b<0)throw H.f(P.W(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.f(H.bi(a,b))
return a[b]},
q:function(a,b,c){H.x(c,H.u(a,0))
if(!!a.immutable$list)H.p(P.Q("indexed set"))
if(b>=a.length||b<0)throw H.f(H.bi(a,b))
a[b]=c},
$ism:1,
$isa:1,
n:{
id:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.cP(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.W(a,0,4294967295,"length",null))
return J.en(new Array(a),b)},
en:function(a,b){return J.ch(H.c(a,[b]))},
ch:function(a){H.ca(a)
a.fixed$length=Array
return a}}},
mU:{"^":"b4;$ti"},
ak:{"^":"b;a,b,c,0d,$ti",
sdz:function(a){this.d=H.x(a,H.u(this,0))},
gM:function(){return this.d},
C:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.f(H.z(z))
x=this.c
if(x>=y){this.sdz(null)
return!1}this.sdz(z[x]);++this.c
return!0},
$isaV:1},
ci:{"^":"G;",
ks:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.f(P.Q(""+a+".toInt()"))},
bg:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.f(P.Q(""+a+".floor()"))},
a2:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.Q(""+a+".round()"))},
f3:function(a,b){var z,y
if(b>20)throw H.f(P.W(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
bp:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.f(P.W(b,2,36,"radix",null))
z=a.toString(b)
if(C.c.Z(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.p(P.Q("Unexpected toString result: "+z))
x=y.length
if(1>=x)return H.d(y,1)
z=y[1]
if(3>=x)return H.d(y,3)
w=+y[3]
x=y[2]
if(x!=null){z+=x
w-=x.length}return z+C.c.k("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gW:function(a){return a&0x1FFFFFFF},
k:function(a,b){if(typeof b!=="number")throw H.f(H.ac(b))
return a*b},
ay:function(a,b){var z
if(typeof b!=="number")throw H.f(H.ac(b))
z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
fz:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dT(a,b)},
a8:function(a,b){return(a|0)===a?a/b|0:this.dT(a,b)},
dT:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.f(P.Q("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
b_:function(a,b){var z
if(a>0)z=this.dR(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
ix:function(a,b){if(b<0)throw H.f(H.ac(b))
return this.dR(a,b)},
dR:function(a,b){return b>31?0:a>>>b},
V:function(a,b){if(typeof b!=="number")throw H.f(H.ac(b))
return a<b},
$isr:1,
$isaj:1},
ep:{"^":"ci;",$isk:1},
eo:{"^":"ci;"},
cj:{"^":"G;",
Z:function(a,b){if(b<0)throw H.f(H.bi(a,b))
if(b>=a.length)H.p(H.bi(a,b))
return a.charCodeAt(b)},
K:function(a,b){if(b>=a.length)throw H.f(H.bi(a,b))
return a.charCodeAt(b)},
D:function(a,b){H.I(b)
if(typeof b!=="string")throw H.f(P.cP(b,null,null))
return a+b},
b3:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.ac(b))
c=P.aZ(b,c,a.length,null,null,null)
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
al:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.p(H.ac(c))
if(typeof c!=="number")return c.V()
if(c<0||c>a.length)throw H.f(P.W(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
ak:function(a,b){return this.al(a,b,0)},
t:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.ac(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.V()
if(b<0)throw H.f(P.c4(b,null,null))
if(b>c)throw H.f(P.c4(b,null,null))
if(c>a.length)throw H.f(P.c4(c,null,null))
return a.substring(b,c)},
aK:function(a,b){return this.t(a,b,null)},
k:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.L)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
k0:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.k(c,z)+a},
aq:function(a,b){return this.k0(a,b," ")},
k5:function(a,b,c){var z=b-a.length
if(z<=0)return a
return a+this.k(c,z)},
eL:function(a,b,c){var z
if(c<0||c>a.length)throw H.f(P.W(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
eK:function(a,b){return this.eL(a,b,0)},
jo:function(a,b,c){if(c>a.length)throw H.f(P.W(c,0,a.length,null,null))
return H.h7(a,b,c)},
i:function(a){return a},
gW:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gp:function(a){return a.length},
$iseF:1,
$iso:1}}],["","",,H,{"^":"",
cH:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
em:function(){return new P.jA("No element")},
Z:{"^":"k9;a",
gp:function(a){return this.a.length},
j:function(a,b){return C.c.Z(this.a,b)},
$asds:function(){return[P.k]},
$asS:function(){return[P.k]},
$asm:function(){return[P.k]},
$asa:function(){return[P.k]}},
hR:{"^":"m;"},
et:{"^":"b;a,b,c,0d,$ti",
sb6:function(a){this.d=H.x(a,H.u(this,0))},
gM:function(){return this.d},
C:function(){var z,y,x,w
z=this.a
y=J.bk(z)
x=y.gp(z)
if(this.b!==x)throw H.f(P.b3(z))
w=this.c
if(w>=x){this.sb6(null)
return!1}this.sb6(y.an(z,w));++this.c
return!0},
$isaV:1},
iG:{"^":"m;a,b,$ti",
gU:function(a){return new H.iH(J.bR(this.a),this.b,this.$ti)},
gp:function(a){return J.aJ(this.a)},
an:function(a,b){return this.b.$1(J.cO(this.a,b))},
$asm:function(a,b){return[b]}},
iH:{"^":"aV;0a,b,c,$ti",
sb6:function(a){this.a=H.x(a,H.u(this,1))},
C:function(){var z=this.b
if(z.C()){this.sb6(this.c.$1(z.gM()))
return!0}this.sb6(null)
return!1},
gM:function(){return this.a},
$asaV:function(a,b){return[b]}},
kE:{"^":"m;a,b,$ti",
gU:function(a){return new H.kF(J.bR(this.a),this.b,this.$ti)}},
kF:{"^":"aV;a,b,$ti",
C:function(){var z,y
for(z=this.a,y=this.b;z.C();)if(y.$1(z.gM()))return!0
return!1},
gM:function(){return this.a.gM()}},
cg:{"^":"b;$ti"},
ds:{"^":"b;$ti",
q:function(a,b,c){H.x(c,H.ah(this,"ds",0))
throw H.f(P.Q("Cannot modify an unmodifiable list"))}},
k9:{"^":"ck+ds;"}}],["","",,H,{"^":"",
hC:function(){throw H.f(P.Q("Cannot modify unmodifiable Map"))},
bn:function(a){var z,y
z=H.I(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
me:function(a){return init.types[H.a3(a)]},
mp:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.N(a).$isaK},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.af(a)
if(typeof z!=="string")throw H.f(H.ac(a))
return z},
by:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
j8:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.d(z,3)
y=H.I(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.f(P.W(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.c.K(w,u)|32)>x)return}return parseInt(a,b)},
b9:function(a){return H.j_(a)+H.dG(H.b2(a),0,null)},
j_:function(a){var z,y,x,w,v,u,t,s,r
z=J.N(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.P||!!z.$iscv){u=C.A(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.bn(w.length>1&&C.c.K(w,0)===36?C.c.aK(w,1):w)},
j0:function(){if(!!self.location)return self.location.href
return},
eK:function(a){var z,y,x,w,v
H.ca(a)
z=J.aJ(a)
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
j9:function(a){var z,y,x,w
z=H.c([],[P.k])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.z)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.f(H.ac(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.e.b_(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.f(H.ac(w))}return H.eK(z)},
eL:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.f(H.ac(x))
if(x<0)throw H.f(H.ac(x))
if(x>65535)return H.j9(a)}return H.eK(a)},
ja:function(a,b,c){var z,y,x,w
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
w=x<c?x:c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
c3:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.e.b_(z,10))>>>0,56320|z&1023)}}throw H.f(P.W(a,0,1114111,null,null))},
b8:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
j7:function(a){var z=H.b8(a).getFullYear()+0
return z},
j5:function(a){var z=H.b8(a).getMonth()+1
return z},
j1:function(a){var z=H.b8(a).getDate()+0
return z},
j2:function(a){var z=H.b8(a).getHours()+0
return z},
j4:function(a){var z=H.b8(a).getMinutes()+0
return z},
j6:function(a){var z=H.b8(a).getSeconds()+0
return z},
j3:function(a){var z=H.b8(a).getMilliseconds()+0
return z},
y:function(a){throw H.f(H.ac(a))},
d:function(a,b){if(a==null)J.aJ(a)
throw H.f(H.bi(a,b))},
bi:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aT(!0,b,"index",null)
z=H.a3(J.aJ(a))
if(!(b<0)){if(typeof z!=="number")return H.y(z)
y=b>=z}else y=!0
if(y)return P.bt(b,a,"index",null,z)
return P.c4(b,"index",null)},
m9:function(a,b,c){if(a>c)return new P.co(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.co(a,c,!0,b,"end","Invalid value")
return new P.aT(!0,b,"end",null)},
ac:function(a){return new P.aT(!0,a,null,null)},
m4:function(a){if(typeof a!=="number")throw H.f(H.ac(a))
return a},
f:function(a){var z
if(a==null)a=new P.eE()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.ha})
z.name=""}else z.toString=H.ha
return z},
ha:function(){return J.af(this.dartException)},
p:function(a){throw H.f(a)},
z:function(a){throw H.f(P.b3(a))},
au:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.mK(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.e.b_(x,16)&8191)===10)switch(w){case 438:return z.$1(H.d2(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eD(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$f2()
u=$.$get$f3()
t=$.$get$f4()
s=$.$get$f5()
r=$.$get$f9()
q=$.$get$fa()
p=$.$get$f7()
$.$get$f6()
o=$.$get$fc()
n=$.$get$fb()
m=v.ap(y)
if(m!=null)return z.$1(H.d2(H.I(y),m))
else{m=u.ap(y)
if(m!=null){m.method="call"
return z.$1(H.d2(H.I(y),m))}else{m=t.ap(y)
if(m==null){m=s.ap(y)
if(m==null){m=r.ap(y)
if(m==null){m=q.ap(y)
if(m==null){m=p.ap(y)
if(m==null){m=s.ap(y)
if(m==null){m=o.ap(y)
if(m==null){m=n.ap(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eD(H.I(y),m))}}return z.$1(new H.k8(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.eQ()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aT(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.eQ()
return a},
bl:function(a){var z
if(a==null)return new H.fA(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fA(a)},
mc:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.q(0,a[y],a[x])}return b},
mo:function(a,b,c,d,e,f){H.h(a,"$iscZ")
switch(H.a3(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.t("Unsupported number of arguments for wrapped closure"))},
bh:function(a,b){var z
H.a3(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mo)
a.$identity=z
return z},
hx:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.N(d).$isa){z.$reflectionInfo=d
x=H.jd(z).r}else x=d
w=e?Object.create(new H.jB().constructor.prototype):Object.create(new H.cR(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.az
if(typeof u!=="number")return u.D()
$.az=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.e_(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.me,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.dV:H.cS
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.f("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.e_(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w["call*"]=q
w.$R=z.$R
w.$D=z.$D
return v},
hu:function(a,b,c,d){var z=H.cS
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
e_:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hw(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hu(y,!w,z,b)
if(y===0){w=$.az
if(typeof w!=="number")return w.D()
$.az=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bo
if(v==null){v=H.cb("self")
$.bo=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.az
if(typeof w!=="number")return w.D()
$.az=w+1
t+=w
w="return function("+t+"){return this."
v=$.bo
if(v==null){v=H.cb("self")
$.bo=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
hv:function(a,b,c,d){var z,y
z=H.cS
y=H.dV
switch(b?-1:a){case 0:throw H.f(H.jn("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hw:function(a,b){var z,y,x,w,v,u,t,s
z=$.bo
if(z==null){z=H.cb("self")
$.bo=z}y=$.dU
if(y==null){y=H.cb("receiver")
$.dU=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hv(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.az
if(typeof y!=="number")return y.D()
$.az=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.az
if(typeof y!=="number")return y.D()
$.az=y+1
return new Function(z+y+"}")()},
dI:function(a,b,c,d,e,f,g){return H.hx(a,b,H.a3(c),d,!!e,!!f,g)},
I:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.ax(a,"String"))},
ma:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.ax(a,"double"))},
mA:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.ax(a,"num"))},
fW:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.ax(a,"bool"))},
a3:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.ax(a,"int"))},
h4:function(a,b){throw H.f(H.ax(a,H.bn(H.I(b).substring(3))))},
mC:function(a,b){throw H.f(H.hr(a,H.bn(H.I(b).substring(3))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.N(a)[b])return a
H.h4(a,b)},
e:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.N(a)[b]
else z=!0
if(z)return a
H.mC(a,b)},
ca:function(a){if(a==null)return a
if(!!J.N(a).$isa)return a
throw H.f(H.ax(a,"List<dynamic>"))},
h1:function(a,b){var z
if(a==null)return a
z=J.N(a)
if(!!z.$isa)return a
if(z[b])return a
H.h4(a,b)},
fX:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.a3(z)]
else return a.$S()}return},
c7:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fX(J.N(a))
if(z==null)return!1
return H.fL(z,null,b,null)},
n:function(a,b){var z,y
if(a==null)return a
if($.dD)return a
$.dD=!0
try{if(H.c7(a,b))return a
z=H.cK(b)
y=H.ax(a,z)
throw H.f(y)}finally{$.dD=!1}},
dK:function(a,b){if(a!=null&&!H.dH(a,b))H.p(H.ax(a,H.cK(b)))
return a},
fR:function(a){var z,y
z=J.N(a)
if(!!z.$isq){y=H.fX(z)
if(y!=null)return H.cK(y)
return"Closure"}return H.b9(a)},
mJ:function(a){throw H.f(new P.hG(H.I(a)))},
fZ:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
b2:function(a){if(a==null)return
return a.$ti},
nh:function(a,b,c){return H.bm(a["$as"+H.j(c)],H.b2(b))},
c8:function(a,b,c,d){var z
H.I(c)
H.a3(d)
z=H.bm(a["$as"+H.j(c)],H.b2(b))
return z==null?null:z[d]},
ah:function(a,b,c){var z
H.I(b)
H.a3(c)
z=H.bm(a["$as"+H.j(b)],H.b2(a))
return z==null?null:z[c]},
u:function(a,b){var z
H.a3(b)
z=H.b2(a)
return z==null?null:z[b]},
cK:function(a){return H.b1(a,null)},
b1:function(a,b){var z,y
H.i(b,"$isa",[P.o],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bn(a[0].builtin$cls)+H.dG(a,1,b)
if(typeof a=="function")return H.bn(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a3(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.d(b,y)
return H.j(b[y])}if('func' in a)return H.lV(a,b)
if('futureOr' in a)return"FutureOr<"+H.b1("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lV:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.o]
H.i(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.d(b,r)
t=C.c.D(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.b1(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b1(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b1(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b1(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.mb(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.I(z[l])
n=n+m+H.b1(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dG:function(a,b,c){var z,y,x,w,v,u
H.i(c,"$isa",[P.o],"$asa")
if(a==null)return""
z=new P.ap("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b1(u,c)}return"<"+z.i(0)+">"},
bm:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bO:function(a,b,c,d){var z,y
H.I(b)
H.ca(c)
H.I(d)
if(a==null)return!1
z=H.b2(a)
y=J.N(a)
if(y[b]==null)return!1
return H.fU(H.bm(y[d],z),null,c,null)},
i:function(a,b,c,d){H.I(b)
H.ca(c)
H.I(d)
if(a==null)return a
if(H.bO(a,b,c,d))return a
throw H.f(H.ax(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bn(b.substring(3))+H.dG(c,0,null),init.mangledGlobalNames)))},
fU:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.at(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.at(a[y],b,c[y],d))return!1
return!0},
nf:function(a,b,c){return a.apply(b,H.bm(J.N(b)["$as"+H.j(c)],H.b2(b)))},
h0:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="C"||a===-1||a===-2||H.h0(z)}return!1},
dH:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="C"||b===-1||b===-2||H.h0(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dH(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c7(a,b)}z=J.N(a).constructor
y=H.b2(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.at(z,null,b,null)},
x:function(a,b){if(a!=null&&!H.dH(a,b))throw H.f(H.ax(a,H.cK(b)))
return a},
at:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.at(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="C")return!0
if('func' in c)return H.fL(a,b,c,d)
if('func' in a)return c.builtin$cls==="cZ"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.at("type" in a?a.type:null,b,x,d)
else if(H.at(a,b,x,d))return!0
else{if(!('$is'+"bs" in y.prototype))return!1
w=y.prototype["$as"+"bs"]
v=H.bm(w,z?a.slice(1):null)
return H.at(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fU(H.bm(r,z),b,u,d)},
fL:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.at(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.at(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.at(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.at(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.mz(m,b,l,d)},
mz:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.at(c[w],d,a[w],b))return!1}return!0},
ng:function(a,b,c){Object.defineProperty(a,H.I(b),{value:c,enumerable:false,writable:true,configurable:true})},
mq:function(a){var z,y,x,w,v,u
z=H.I($.h_.$1(a))
y=$.cF[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cI[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.I($.fT.$2(a,z))
if(z!=null){y=$.cF[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cI[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cJ(x)
$.cF[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cI[z]=x
return x}if(v==="-"){u=H.cJ(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.h3(a,x)
if(v==="*")throw H.f(P.cu(z))
if(init.leafTags[z]===true){u=H.cJ(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.h3(a,x)},
h3:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dN(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cJ:function(a){return J.dN(a,!1,null,!!a.$isaK)},
my:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cJ(z)
else return J.dN(z,c,null,null)},
mm:function(){if(!0===$.dM)return
$.dM=!0
H.mn()},
mn:function(){var z,y,x,w,v,u,t,s
$.cF=Object.create(null)
$.cI=Object.create(null)
H.mi()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.h5.$1(v)
if(u!=null){t=H.my(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mi:function(){var z,y,x,w,v,u,t
z=C.U()
z=H.bg(C.R,H.bg(C.W,H.bg(C.z,H.bg(C.z,H.bg(C.V,H.bg(C.S,H.bg(C.T(C.A),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.h_=new H.mj(v)
$.fT=new H.mk(u)
$.h5=new H.ml(t)},
bg:function(a,b){return a(b)||b},
h7:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
h8:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hB:{"^":"b;$ti",
i:function(a){return P.d3(this)},
q:function(a,b,c){H.x(b,H.u(this,0))
H.x(c,H.u(this,1))
return H.hC()},
$isH:1},
hD:{"^":"hB;a,b,c,$ti",
gp:function(a){return this.a},
bH:function(a){if(typeof a!=="string")return!1
if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
j:function(a,b){if(!this.bH(b))return
return this.dA(b)},
dA:function(a){return this.b[H.I(a)]},
a1:function(a,b){var z,y,x,w,v
z=H.u(this,1)
H.n(b,{func:1,ret:-1,args:[H.u(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.x(this.dA(v),z))}}},
jc:{"^":"b;a,b,c,d,e,f,r,0x",n:{
jd:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.ch(z)
y=z[0]
x=z[1]
return new H.jc(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jX:{"^":"b;a,b,c,d,e,f",
ap:function(a){var z,y,x
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
if(z==null)z=H.c([],[P.o])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jX(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cs:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
f8:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iW:{"^":"a_;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
n:{
eD:function(a,b){return new H.iW(a,b==null?null:b.method)}}},
ii:{"^":"a_;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
n:{
d2:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.ii(a,y,z?null:b.receiver)}}},
k8:{"^":"a_;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
mK:{"^":"q:17;a",
$1:function(a){if(!!J.N(a).$isa_)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fA:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaO:1},
q:{"^":"b;",
i:function(a){return"Closure '"+H.b9(this).trim()+"'"},
gff:function(){return this},
$iscZ:1,
gff:function(){return this}},
eS:{"^":"q;"},
jB:{"^":"eS;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.bn(z)+"'"}},
cR:{"^":"eS;a,b,c,d",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cR))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gW:function(a){var z,y
z=this.c
if(z==null)y=H.by(this.a)
else y=typeof z!=="object"?J.bQ(z):H.by(z)
return(y^H.by(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.b9(z)+"'")},
n:{
cS:function(a){return a.a},
dV:function(a){return a.c},
cb:function(a){var z,y,x,w,v
z=new H.cR("self","target","receiver","name")
y=J.ch(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jY:{"^":"a_;a",
i:function(a){return this.a},
n:{
ax:function(a,b){return new H.jY("TypeError: "+H.j(P.cf(a))+": type '"+H.fR(a)+"' is not a subtype of type '"+b+"'")}}},
hq:{"^":"a_;a",
i:function(a){return this.a},
n:{
hr:function(a,b){return new H.hq("CastError: "+H.j(P.cf(a))+": type '"+H.fR(a)+"' is not a subtype of type '"+b+"'")}}},
jm:{"^":"a_;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
n:{
jn:function(a){return new H.jm(a)}}},
aW:{"^":"iC;a,0b,0c,0d,0e,0f,r,$ti",
gp:function(a){return this.a},
gcV:function(){return new H.iq(this,[H.u(this,0)])},
bH:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.du(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.du(y,a)}else return this.jK(a)},
jK:function(a){var z=this.d
if(z==null)return!1
return this.cU(this.cl(z,this.cT(a)),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bw(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bw(w,b)
x=y==null?null:y.b
return x}else return this.jL(b)},
jL:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cl(z,this.cT(a))
x=this.cU(y,a)
if(x<0)return
return y[x].b},
q:function(a,b,c){var z,y
H.x(b,H.u(this,0))
H.x(c,H.u(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.co()
this.b=z}this.dk(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.co()
this.c=y}this.dk(y,b,c)}else this.jM(b,c)},
jM:function(a,b){var z,y,x,w
H.x(a,H.u(this,0))
H.x(b,H.u(this,1))
z=this.d
if(z==null){z=this.co()
this.d=z}y=this.cT(a)
x=this.cl(z,y)
if(x==null)this.cw(z,y,[this.cp(a,b)])
else{w=this.cU(x,a)
if(w>=0)x[w].b=b
else x.push(this.cp(a,b))}},
a1:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.f(P.b3(this))
z=z.c}},
dk:function(a,b,c){var z
H.x(b,H.u(this,0))
H.x(c,H.u(this,1))
z=this.bw(a,b)
if(z==null)this.cw(a,b,this.cp(b,c))
else z.b=c},
cp:function(a,b){var z,y
z=new H.ip(H.x(a,H.u(this,0)),H.x(b,H.u(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.r=this.r+1&67108863
return z},
cT:function(a){return J.bQ(a)&0x3ffffff},
cU:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.F(a[y].a,b))return y
return-1},
i:function(a){return P.d3(this)},
bw:function(a,b){return a[b]},
cl:function(a,b){return a[b]},
cw:function(a,b,c){a[b]=c},
h8:function(a,b){delete a[b]},
du:function(a,b){return this.bw(a,b)!=null},
co:function(){var z=Object.create(null)
this.cw(z,"<non-identifier-key>",z)
this.h8(z,"<non-identifier-key>")
return z},
$ises:1},
ip:{"^":"b;a,b,0c,0d"},
iq:{"^":"hR;a,$ti",
gp:function(a){return this.a.a},
gU:function(a){var z,y
z=this.a
y=new H.ir(z,z.r,this.$ti)
y.c=z.e
return y}},
ir:{"^":"b;a,b,0c,0d,$ti",
sdj:function(a){this.d=H.x(a,H.u(this,0))},
gM:function(){return this.d},
C:function(){var z=this.a
if(this.b!==z.r)throw H.f(P.b3(z))
else{z=this.c
if(z==null){this.sdj(null)
return!1}else{this.sdj(z.a)
this.c=this.c.c
return!0}}},
$isaV:1},
mj:{"^":"q:17;a",
$1:function(a){return this.a(a)}},
mk:{"^":"q:27;a",
$2:function(a,b){return this.a(a,b)}},
ml:{"^":"q:45;a",
$1:function(a){return this.a(H.I(a))}},
ig:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseF:1,
$isje:1,
n:{
ih:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.f(P.R("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mb:function(a){return J.en(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
mB:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
b0:function(a){return a},
iS:function(a){return new Int8Array(a)},
aS:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.bi(b,a))},
lP:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.f(H.m9(a,b,c))
return b},
d9:{"^":"G;",$isd9:1,$isjZ:1,"%":";ArrayBufferView;d8|fw|fx|iT|fy|fz|b6"},
d8:{"^":"d9;",
gp:function(a){return a.length},
$isaK:1,
$asaK:I.dJ},
iT:{"^":"fx;",
j:function(a,b){H.aS(b,a,a.length)
return a[b]},
q:function(a,b,c){H.ma(c)
H.aS(b,a,a.length)
a[b]=c},
$ascg:function(){return[P.r]},
$asS:function(){return[P.r]},
$ism:1,
$asm:function(){return[P.r]},
$isa:1,
$asa:function(){return[P.r]},
"%":"Float32Array"},
b6:{"^":"fz;",
q:function(a,b,c){H.a3(c)
H.aS(b,a,a.length)
a[b]=c},
$ascg:function(){return[P.k]},
$asS:function(){return[P.k]},
$ism:1,
$asm:function(){return[P.k]},
$isa:1,
$asa:function(){return[P.k]}},
mW:{"^":"b6;",
j:function(a,b){H.aS(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mX:{"^":"b6;",
j:function(a,b){H.aS(b,a,a.length)
return a[b]},
"%":"Int32Array"},
mY:{"^":"b6;",
j:function(a,b){H.aS(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mZ:{"^":"b6;",
j:function(a,b){H.aS(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
n_:{"^":"b6;",
gp:function(a){return a.length},
j:function(a,b){H.aS(b,a,a.length)
return a[b]},
$isn6:1,
"%":"CanvasPixelArray|Uint8ClampedArray"},
eC:{"^":"b6;",
gp:function(a){return a.length},
j:function(a,b){H.aS(b,a,a.length)
return a[b]},
$iseC:1,
$isJ:1,
"%":";Uint8Array"},
fw:{"^":"d8+S;"},
fx:{"^":"fw+cg;"},
fy:{"^":"d8+S;"},
fz:{"^":"fy+cg;"}}],["","",,P,{"^":"",
kH:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.m1()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bh(new P.kJ(z),1)).observe(y,{childList:true})
return new P.kI(z,y,x)}else if(self.setImmediate!=null)return P.m2()
return P.m3()},
n9:[function(a){self.scheduleImmediate(H.bh(new P.kK(H.n(a,{func:1,ret:-1})),0))},"$1","m1",4,0,10],
na:[function(a){self.setImmediate(H.bh(new P.kL(H.n(a,{func:1,ret:-1})),0))},"$1","m2",4,0,10],
nb:[function(a){P.dg(C.u,H.n(a,{func:1,ret:-1}))},"$1","m3",4,0,10],
dg:function(a,b){var z
H.n(b,{func:1,ret:-1})
z=C.e.a8(a.a,1000)
return P.lk(z<0?0:z,b)},
f_:function(a,b){var z
H.n(b,{func:1,ret:-1,args:[P.bb]})
z=C.e.a8(a.a,1000)
return P.ll(z<0?0:z,b)},
lY:function(a,b){if(H.c7(a,{func:1,args:[P.b,P.aO]}))return H.n(a,{func:1,ret:null,args:[P.b,P.aO]})
if(H.c7(a,{func:1,args:[P.b]}))return H.n(a,{func:1,ret:null,args:[P.b]})
throw H.f(P.cP(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lX:function(){var z,y
for(;z=$.bf,z!=null;){$.bM=null
y=z.b
$.bf=y
if(y==null)$.bL=null
z.a.$0()}},
ne:[function(){$.dE=!0
try{P.lX()}finally{$.bM=null
$.dE=!1
if($.bf!=null)$.$get$dz().$1(P.fV())}},"$0","fV",0,0,3],
fQ:function(a){var z=new P.fp(H.n(a,{func:1,ret:-1}))
if($.bf==null){$.bL=z
$.bf=z
if(!$.dE)$.$get$dz().$1(P.fV())}else{$.bL.b=z
$.bL=z}},
m0:function(a){var z,y,x
H.n(a,{func:1,ret:-1})
z=$.bf
if(z==null){P.fQ(a)
$.bM=$.bL
return}y=new P.fp(a)
x=$.bM
if(x==null){y.b=z
$.bM=y
$.bf=y}else{y.b=x.b
x.b=y
$.bM=y
if(y.b==null)$.bL=y}},
mD:function(a){var z,y
z={func:1,ret:-1}
H.n(a,z)
y=$.O
if(C.k===y){P.cE(null,null,C.k,a)
return}y.toString
P.cE(null,null,y,H.n(y.cD(a),z))},
eZ:function(a,b){var z,y
z={func:1,ret:-1}
H.n(b,z)
y=$.O
if(y===C.k){y.toString
return P.dg(a,b)}return P.dg(a,H.n(y.cD(b),z))},
jU:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bb]}
H.n(b,z)
y=$.O
if(y===C.k){y.toString
return P.f_(a,b)}x=y.e3(b,P.bb)
$.O.toString
return P.f_(a,H.n(x,z))},
cD:function(a,b,c,d,e){var z={}
z.a=d
P.m0(new P.lZ(z,e))},
fM:function(a,b,c,d,e){var z,y
H.n(d,{func:1,ret:e})
y=$.O
if(y===c)return d.$0()
$.O=c
z=y
try{y=d.$0()
return y}finally{$.O=z}},
fN:function(a,b,c,d,e,f,g){var z,y
H.n(d,{func:1,ret:f,args:[g]})
H.x(e,g)
y=$.O
if(y===c)return d.$1(e)
$.O=c
z=y
try{y=d.$1(e)
return y}finally{$.O=z}},
m_:function(a,b,c,d,e,f,g,h,i){var z,y
H.n(d,{func:1,ret:g,args:[h,i]})
H.x(e,h)
H.x(f,i)
y=$.O
if(y===c)return d.$2(e,f)
$.O=c
z=y
try{y=d.$2(e,f)
return y}finally{$.O=z}},
cE:function(a,b,c,d){var z
H.n(d,{func:1,ret:-1})
z=C.k!==c
if(z)d=!(!z||!1)?c.cD(d):c.jj(d,-1)
P.fQ(d)},
kJ:{"^":"q:24;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kI:{"^":"q:26;a,b,c",
$1:function(a){var z,y
this.a.a=H.n(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kK:{"^":"q:1;a",
$0:function(){this.a.$0()}},
kL:{"^":"q:1;a",
$0:function(){this.a.$0()}},
fB:{"^":"b;a,0b,c",
fR:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bh(new P.ln(this,b),0),a)
else throw H.f(P.Q("`setTimeout()` not found."))},
fS:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bh(new P.lm(this,a,Date.now(),b),0),a)
else throw H.f(P.Q("Periodic timer."))},
$isbb:1,
n:{
lk:function(a,b){var z=new P.fB(!0,0)
z.fR(a,b)
return z},
ll:function(a,b){var z=new P.fB(!1,0)
z.fS(a,b)
return z}}},
ln:{"^":"q:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lm:{"^":"q:1;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.e.fz(w,x)}z.c=y
this.d.$1(z)}},
be:{"^":"b;0a,b,c,d,e,$ti",
jS:function(a){if(this.c!==6)return!0
return this.b.b.d6(H.n(this.d,{func:1,ret:P.T,args:[P.b]}),a.a,P.T,P.b)},
jJ:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.u(this,1)}
w=this.b.b
if(H.c7(z,{func:1,args:[P.b,P.aO]}))return H.dK(w.kn(z,a.a,a.b,null,y,P.aO),x)
else return H.dK(w.d6(H.n(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aR:{"^":"b;dS:a<,b,0il:c<,$ti",
f2:function(a,b,c){var z,y,x,w
z=H.u(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.O
if(y!==C.k){y.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.lY(b,y)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aR(0,$.O,[c])
w=b==null?1:3
this.dl(new P.be(x,w,a,b,[z,c]))
return x},
kr:function(a,b){return this.f2(a,null,b)},
dl:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isbe")
this.c=a}else{if(z===2){y=H.h(this.c,"$isaR")
z=y.a
if(z<4){y.dl(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cE(null,null,z,H.n(new P.kT(this,a),{func:1,ret:-1}))}},
dN:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isbe")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isaR")
y=u.a
if(y<4){u.dN(a)
return}this.a=y
this.c=u.c}z.a=this.bA(a)
y=this.b
y.toString
P.cE(null,null,y,H.n(new P.kY(z,this),{func:1,ret:-1}))}},
cs:function(){var z=H.h(this.c,"$isbe")
this.c=null
return this.bA(z)},
bA:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
dq:function(a){var z,y,x
z=H.u(this,0)
H.dK(a,{futureOr:1,type:z})
y=this.$ti
if(H.bO(a,"$isbs",y,"$asbs"))if(H.bO(a,"$isaR",y,null))P.fs(a,this)
else P.kU(a,this)
else{x=this.cs()
H.x(a,z)
this.a=4
this.c=a
P.bH(this,x)}},
dr:function(a,b){var z
H.h(b,"$isaO")
z=this.cs()
this.a=8
this.c=new P.al(a,b)
P.bH(this,z)},
$isbs:1,
n:{
kU:function(a,b){var z,y,x
b.a=1
try{a.f2(new P.kV(b),new P.kW(b),null)}catch(x){z=H.au(x)
y=H.bl(x)
P.mD(new P.kX(b,z,y))}},
fs:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isaR")
if(z>=4){y=b.cs()
b.a=a.a
b.c=a.c
P.bH(b,y)}else{y=H.h(b.c,"$isbe")
b.a=2
b.c=a
a.dN(y)}},
bH:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isal")
y=y.b
u=v.a
t=v.b
y.toString
P.cD(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bH(z.a,b)}y=z.a
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
if(p){H.h(r,"$isal")
y=y.b
u=r.a
t=r.b
y.toString
P.cD(null,null,y,u,t)
return}o=$.O
if(o==null?q!=null:o!==q)$.O=q
else o=null
y=b.c
if(y===8)new P.l0(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.l_(x,b,r).$0()}else if((y&2)!==0)new P.kZ(z,x,b).$0()
if(o!=null)$.O=o
y=x.b
if(!!J.N(y).$isbs){if(y.a>=4){n=H.h(t.c,"$isbe")
t.c=null
b=t.bA(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fs(y,t)
return}}m=b.b
n=H.h(m.c,"$isbe")
m.c=null
b=m.bA(n)
y=x.a
u=x.b
if(!y){H.x(u,H.u(m,0))
m.a=4
m.c=u}else{H.h(u,"$isal")
m.a=8
m.c=u}z.a=m
y=m}}}},
kT:{"^":"q:1;a,b",
$0:function(){P.bH(this.a,this.b)}},
kY:{"^":"q:1;a,b",
$0:function(){P.bH(this.b,this.a.a)}},
kV:{"^":"q:24;a",
$1:function(a){var z=this.a
z.a=0
z.dq(a)}},
kW:{"^":"q:31;a",
$2:function(a,b){this.a.dr(a,H.h(b,"$isaO"))},
$1:function(a){return this.$2(a,null)}},
kX:{"^":"q:1;a,b,c",
$0:function(){this.a.dr(this.b,this.c)}},
l0:{"^":"q:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.f_(H.n(w.d,{func:1}),null)}catch(v){y=H.au(v)
x=H.bl(v)
if(this.d){w=H.h(this.a.a.c,"$isal").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isal")
else u.b=new P.al(y,x)
u.a=!0
return}if(!!J.N(z).$isbs){if(z instanceof P.aR&&z.gdS()>=4){if(z.gdS()===8){w=this.b
w.b=H.h(z.gil(),"$isal")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.kr(new P.l1(t),null)
w.a=!1}}},
l1:{"^":"q:51;a",
$1:function(a){return this.a}},
l_:{"^":"q:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.u(x,0)
v=H.x(this.c,w)
u=H.u(x,1)
this.a.b=x.b.b.d6(H.n(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.au(t)
y=H.bl(t)
x=this.a
x.b=new P.al(z,y)
x.a=!0}}},
kZ:{"^":"q:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isal")
w=this.c
if(w.jS(z)&&w.e!=null){v=this.b
v.b=w.jJ(z)
v.a=!1}}catch(u){y=H.au(u)
x=H.bl(u)
w=H.h(this.a.a.c,"$isal")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.al(y,x)
s.a=!0}}},
fp:{"^":"b;a,0b"},
jC:{"^":"b;$ti",
gp:function(a){var z,y,x,w
z={}
y=new P.aR(0,$.O,[P.k])
z.a=0
x=H.u(this,0)
w=H.n(new P.jE(z,this),{func:1,ret:-1,args:[x]})
H.n(new P.jF(z,y),{func:1,ret:-1})
W.Y(this.a,this.b,w,!1,x)
return y}},
jE:{"^":"q;a,b",
$1:function(a){H.x(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.C,args:[H.u(this.b,0)]}}},
jF:{"^":"q:1;a,b",
$0:function(){this.b.dq(this.a.a)}},
de:{"^":"b;$ti"},
jD:{"^":"b;"},
bb:{"^":"b;"},
al:{"^":"b;a,b",
i:function(a){return H.j(this.a)},
$isa_:1},
lN:{"^":"b;",$isn8:1},
lZ:{"^":"q:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eE()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.f(z)
x=H.f(z)
x.stack=y.i(0)
throw x}},
lc:{"^":"lN;",
ko:function(a){var z,y,x
H.n(a,{func:1,ret:-1})
try{if(C.k===$.O){a.$0()
return}P.fM(null,null,this,a,-1)}catch(x){z=H.au(x)
y=H.bl(x)
P.cD(null,null,this,z,H.h(y,"$isaO"))}},
kp:function(a,b,c){var z,y,x
H.n(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.k===$.O){a.$1(b)
return}P.fN(null,null,this,a,b,-1,c)}catch(x){z=H.au(x)
y=H.bl(x)
P.cD(null,null,this,z,H.h(y,"$isaO"))}},
jj:function(a,b){return new P.le(this,H.n(a,{func:1,ret:b}),b)},
cD:function(a){return new P.ld(this,H.n(a,{func:1,ret:-1}))},
e3:function(a,b){return new P.lf(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
f_:function(a,b){H.n(a,{func:1,ret:b})
if($.O===C.k)return a.$0()
return P.fM(null,null,this,a,b)},
d6:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.O===C.k)return a.$1(b)
return P.fN(null,null,this,a,b,c,d)},
kn:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.O===C.k)return a.$2(b,c)
return P.m_(null,null,this,a,b,c,d,e,f)}},
le:{"^":"q;a,b,c",
$0:function(){return this.a.f_(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
ld:{"^":"q:3;a,b",
$0:function(){return this.a.ko(this.b)}},
lf:{"^":"q;a,b,c",
$1:function(a){var z=this.c
return this.a.kp(this.b,H.x(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
is:function(a,b,c,d,e){return new H.aW(0,0,[d,e])},
iu:function(a,b,c){H.ca(a)
return H.i(H.mc(a,new H.aW(0,0,[b,c])),"$ises",[b,c],"$ases")},
it:function(a,b){return new H.aW(0,0,[a,b])},
ix:function(a,b,c,d){return new P.l6(0,0,[d])},
ic:function(a,b,c){var z,y
if(P.dF(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bN()
C.a.h(y,a)
try{P.lW(a,z)}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=P.eR(b,H.h1(z,"$ism"),", ")+c
return y.charCodeAt(0)==0?y:y},
d_:function(a,b,c){var z,y,x
if(P.dF(a))return b+"..."+c
z=new P.ap(b)
y=$.$get$bN()
C.a.h(y,a)
try{x=z
x.a=P.eR(x.gaV(),a,", ")}finally{if(0>=y.length)return H.d(y,-1)
y.pop()}y=z
y.a=y.gaV()+c
y=z.gaV()
return y.charCodeAt(0)==0?y:y},
dF:function(a){var z,y
for(z=0;y=$.$get$bN(),z<y.length;++z)if(a===y[z])return!0
return!1},
lW:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gU(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.C())return
w=H.j(z.gM())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.C()){if(x<=5)return
if(0>=b.length)return H.d(b,-1)
v=b.pop()
if(0>=b.length)return H.d(b,-1)
u=b.pop()}else{t=z.gM();++x
if(!z.C()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.d(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gM();++x
for(;z.C();t=s,s=r){r=z.gM();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.d(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.j(t)
v=H.j(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
iv:function(a,b,c){var z=P.is(null,null,null,b,c)
a.a1(0,new P.iw(z,b,c))
return z},
d3:function(a){var z,y,x
z={}
if(P.dF(a))return"{...}"
y=new P.ap("")
try{C.a.h($.$get$bN(),a)
x=y
x.a=x.gaV()+"{"
z.a=!0
a.a1(0,new P.iD(z,y))
z=y
z.a=z.gaV()+"}"}finally{z=$.$get$bN()
if(0>=z.length)return H.d(z,-1)
z.pop()}z=y.gaV()
return z.charCodeAt(0)==0?z:z},
l6:{"^":"l2;a,0b,0c,0d,0e,0f,r,$ti",
gU:function(a){return P.fu(this,this.r,H.u(this,0))},
gp:function(a){return this.a},
h:function(a,b){var z
H.x(b,H.u(this,0))
if(typeof b==="number"&&(b&0x3ffffff)===b){z=this.c
if(z==null){z=P.fv()
this.c=z}return this.h4(z,b)}else return this.fT(b)},
fT:function(a){var z,y,x
H.x(a,H.u(this,0))
z=this.d
if(z==null){z=P.fv()
this.d=z}y=this.ds(a)
x=z[y]
if(x==null)z[y]=[this.cg(a)]
else{if(this.dB(x,a)>=0)return!1
x.push(this.cg(a))}return!0},
H:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.ia(this.c,b)
else return this.i9(b)},
i9:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.hl(z,a)
x=this.dB(y,a)
if(x<0)return!1
this.dU(y.splice(x,1)[0])
return!0},
h4:function(a,b){H.x(b,H.u(this,0))
if(H.h(a[b],"$isdA")!=null)return!1
a[b]=this.cg(b)
return!0},
ia:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$isdA")
if(z==null)return!1
this.dU(z)
delete a[b]
return!0},
dG:function(){this.r=this.r+1&67108863},
cg:function(a){var z,y
z=new P.dA(H.x(a,H.u(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dG()
return z},
dU:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dG()},
ds:function(a){return J.bQ(a)&0x3ffffff},
hl:function(a,b){return a[this.ds(b)]},
dB:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(a[y].a==b)return y
return-1},
n:{
fv:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
dA:{"^":"b;a,0b,0c"},
l7:{"^":"b;a,b,0c,0d,$ti",
sdn:function(a){this.d=H.x(a,H.u(this,0))},
gM:function(){return this.d},
C:function(){var z=this.a
if(this.b!==z.r)throw H.f(P.b3(z))
else{z=this.c
if(z==null){this.sdn(null)
return!1}else{this.sdn(H.x(z.a,H.u(this,0)))
this.c=this.c.b
return!0}}},
$isaV:1,
n:{
fu:function(a,b,c){var z=new P.l7(a,b,[c])
z.c=a.e
return z}}},
l2:{"^":"jo;"},
iw:{"^":"q:6;a,b,c",
$2:function(a,b){this.a.q(0,H.x(a,this.b),H.x(b,this.c))}},
ck:{"^":"l8;",$ism:1,$isa:1},
S:{"^":"b;$ti",
gU:function(a){return new H.et(a,this.gp(a),0,[H.c8(this,a,"S",0)])},
an:function(a,b){return this.j(a,b)},
ku:function(a,b){var z,y
z=H.c([],[H.c8(this,a,"S",0)])
C.a.sp(z,this.gp(a))
for(y=0;y<this.gp(a);++y)C.a.q(z,y,this.j(a,y))
return z},
kt:function(a){return this.ku(a,!0)},
jC:function(a,b,c,d){var z
H.x(d,H.c8(this,a,"S",0))
P.aZ(b,c,this.gp(a),null,null,null)
for(z=b;z<c;++z)this.q(a,z,d)},
i:function(a){return P.d_(a,"[","]")}},
iC:{"^":"iE;"},
iD:{"^":"q:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
iE:{"^":"b;$ti",
a1:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]})
for(z=this.gcV(),z=z.gU(z);z.C();){y=z.gM()
b.$2(y,this.j(0,y))}},
gp:function(a){var z=this.gcV()
return z.gp(z)},
i:function(a){return P.d3(this)},
$isH:1},
lq:{"^":"b;$ti",
q:function(a,b,c){H.x(b,H.u(this,0))
H.x(c,H.u(this,1))
throw H.f(P.Q("Cannot modify unmodifiable map"))}},
iF:{"^":"b;$ti",
j:function(a,b){return this.a.j(0,b)},
q:function(a,b,c){this.a.q(0,H.x(b,H.u(this,0)),H.x(c,H.u(this,1)))},
a1:function(a,b){this.a.a1(0,H.n(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]}))},
gp:function(a){var z=this.a
return z.gp(z)},
i:function(a){return J.af(this.a)},
$isH:1},
fe:{"^":"lr;a,$ti"},
jq:{"^":"b;$ti",
i:function(a){return P.d_(this,"{","}")},
an:function(a,b){var z,y,x
if(b<0)H.p(P.W(b,0,null,"index",null))
for(z=P.fu(this,this.r,H.u(this,0)),y=0;z.C();){x=z.d
if(b===y)return x;++y}throw H.f(P.bt(b,this,"index",null,y))},
$ism:1,
$iseN:1},
jo:{"^":"jq;"},
l8:{"^":"b+S;"},
lr:{"^":"iF+lq;$ti"}}],["","",,P,{"^":"",hm:{"^":"bU;a",
jU:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
c=P.aZ(b,c,a.length,null,null,null)
z=$.$get$fq()
for(y=b,x=y,w=null,v=-1,u=-1,t=0;y<c;y=s){s=y+1
r=C.c.K(a,y)
if(r===37){q=s+2
if(q<=c){p=H.cH(C.c.K(a,s))
o=H.cH(C.c.K(a,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.d(z,n)
m=z[n]
if(m>=0){n=C.c.Z("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.ap("")
l=w.a+=C.c.t(a,x,y)
w.a=l+H.c3(r)
x=s
continue}}throw H.f(P.R("Invalid base64 data",a,y))}if(w!=null){l=w.a+=C.c.t(a,x,c)
k=l.length
if(v>=0)P.dT(a,u,c,v,t,k)
else{j=C.e.ay(k-1,4)+1
if(j===1)throw H.f(P.R("Invalid base64 encoding length ",a,c))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.c.b3(a,b,c,l.charCodeAt(0)==0?l:l)}i=c-b
if(v>=0)P.dT(a,u,c,v,t,i)
else{j=C.e.ay(i,4)
if(j===1)throw H.f(P.R("Invalid base64 encoding length ",a,c))
if(j>1)a=C.c.b3(a,c,c,j===2?"==":"=")}return a},
$asbU:function(){return[[P.a,P.k],P.o]},
n:{
dT:function(a,b,c,d,e,f){if(C.e.ay(f,4)!==0)throw H.f(P.R("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.f(P.R("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.f(P.R("Invalid base64 padding, more than two '=' characters",a,b))}}},hn:{"^":"bp;a",
$asbp:function(){return[[P.a,P.k],P.o]}},bU:{"^":"b;$ti"},bp:{"^":"jD;$ti"},hT:{"^":"bU;",
$asbU:function(){return[P.o,[P.a,P.k]]}},kl:{"^":"hT;a",
gjB:function(){return C.M}},ks:{"^":"bp;",
bb:function(a,b,c){var z,y,x,w
z=a.length
P.aZ(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.lM(0,0,x)
if(w.hj(a,b,z)!==z)w.dW(J.hf(a,z-1),0)
return new Uint8Array(x.subarray(0,H.lP(0,w.b,x.length)))},
cK:function(a){return this.bb(a,0,null)},
$asbp:function(){return[P.o,[P.a,P.k]]}},lM:{"^":"b;a,b,c",
dW:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.d(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.d(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.d(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.d(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.d(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.d(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.d(z,y)
z[y]=128|a&63
return!1}},
hj:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.c.Z(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.c.K(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dW(w,C.c.K(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.d(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.d(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.d(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.d(z,v)
z[v]=128|w&63}}return x}},km:{"^":"bp;a",
bb:function(a,b,c){var z,y,x,w,v
H.i(a,"$isa",[P.k],"$asa")
z=P.kn(!1,a,b,c)
if(z!=null)return z
y=J.aJ(a)
P.aZ(b,c,y,null,null,null)
x=new P.ap("")
w=new P.lJ(!1,x,!0,0,0,0)
w.bb(a,b,y)
if(w.e>0){H.p(P.R("Unfinished UTF-8 octet sequence",a,y))
x.a+=H.c3(65533)
w.d=0
w.e=0
w.f=0}v=x.a
return v.charCodeAt(0)==0?v:v},
cK:function(a){return this.bb(a,0,null)},
$asbp:function(){return[[P.a,P.k],P.o]},
n:{
kn:function(a,b,c,d){H.i(b,"$isa",[P.k],"$asa")
if(b instanceof Uint8Array)return P.ko(!1,b,c,d)
return},
ko:function(a,b,c,d){var z,y,x
z=$.$get$fi()
if(z==null)return
y=0===c
if(y&&!0)return P.dv(z,b)
x=b.length
d=P.aZ(c,d,x,null,null,null)
if(y&&d===x)return P.dv(z,b)
return P.dv(z,b.subarray(c,d))},
dv:function(a,b){if(P.kq(b))return
return P.kr(a,b)},
kr:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.au(y)}return},
kq:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
kp:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.au(y)}return}}},lJ:{"^":"b;a,b,c,d,e,f",
bb:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.i(a,"$isa",[P.k],"$asa")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.lL(c)
v=new P.lK(this,b,c,a)
$label0$0:for(u=J.bk(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.c7()
if((r&192)!==128){q=P.R("Bad UTF-8 encoding 0x"+C.e.bp(r,16),a,s)
throw H.f(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.d(C.C,q)
if(z<=C.C[q]){q=P.R("Overlong encoding of 0x"+C.e.bp(z,16),a,s-x-1)
throw H.f(q)}if(z>1114111){q=P.R("Character outside valid Unicode range: 0x"+C.e.bp(z,16),a,s-x-1)
throw H.f(q)}if(!this.c||z!==65279)t.a+=H.c3(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.cb()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.V()
if(r<0){m=P.R("Negative UTF-8 code unit: -0x"+C.e.bp(-r,16),a,n-1)
throw H.f(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.R("Bad UTF-8 encoding 0x"+C.e.bp(r,16),a,n-1)
throw H.f(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},lL:{"^":"q:40;a",
$2:function(a,b){var z,y,x,w
H.i(a,"$isa",[P.k],"$asa")
z=this.a
for(y=J.bk(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.c7()
if((w&127)!==w)return x-b}return z-b}},lK:{"^":"q:42;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.c5(this.d,a,b)}}}],["","",,P,{"^":"",
c9:function(a,b,c){var z
H.n(b,{func:1,ret:P.k,args:[P.o]})
z=H.j8(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.f(P.R(a,null,null))},
hV:function(a){if(a instanceof H.q)return a.i(0)
return"Instance of '"+H.b9(a)+"'"},
iy:function(a,b,c,d){var z,y
H.x(b,d)
z=J.id(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.q(z,y,b)
return H.i(z,"$isa",[d],"$asa")},
iz:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gU(a);x.C();)C.a.h(y,H.x(x.gM(),c))
if(b)return y
return H.i(J.ch(y),"$isa",z,"$asa")},
c5:function(a,b,c){var z,y
z=P.k
H.i(a,"$ism",[z],"$asm")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.i(a,"$isb4",[z],"$asb4")
y=a.length
c=P.aZ(b,c,y,null,null,null)
return H.eL(b>0||c<y?C.a.ft(a,b,c):a)}if(!!J.N(a).$iseC)return H.ja(a,b,P.aZ(b,c,a.length,null,null,null))
return P.jG(a,b,c)},
jG:function(a,b,c){var z,y,x,w
H.i(a,"$ism",[P.k],"$asm")
if(b<0)throw H.f(P.W(b,0,J.aJ(a),null,null))
z=c==null
if(!z&&c<b)throw H.f(P.W(c,b,J.aJ(a),null,null))
y=J.bR(a)
for(x=0;x<b;++x)if(!y.C())throw H.f(P.W(b,0,x,null,null))
w=[]
if(z)for(;y.C();)w.push(y.gM())
else for(x=b;x<c;++x){if(!y.C())throw H.f(P.W(c,b,x,null,null))
w.push(y.gM())}return H.eL(w)},
jf:function(a,b,c){return new H.ig(a,H.ih(a,!1,!0,!1))},
du:function(){var z=H.j0()
if(z!=null)return P.ke(z,0,null)
throw H.f(P.Q("'Uri.base' is not supported"))},
cf:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.af(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hV(a)},
t:function(a){return new P.fr(a)},
iA:function(a,b,c,d){var z,y
H.n(b,{func:1,ret:d,args:[P.k]})
z=H.c([],[d])
C.a.sp(z,a)
for(y=0;y<a;++y)C.a.q(z,y,b.$1(y))
return z},
dO:function(a){H.mB(a)},
ke:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.c.K(a,b+4)^58)*3|C.c.K(a,b)^100|C.c.K(a,b+1)^97|C.c.K(a,b+2)^116|C.c.K(a,b+3)^97)>>>0
if(y===0)return P.ff(b>0||c<c?C.c.t(a,b,c):a,5,null).gf6()
else if(y===32)return P.ff(C.c.t(a,z,c),0,null).gf6()}x=new Array(8)
x.fixed$length=Array
w=H.c(x,[P.k])
C.a.q(w,0,0)
x=b-1
C.a.q(w,1,x)
C.a.q(w,2,x)
C.a.q(w,7,x)
C.a.q(w,3,b)
C.a.q(w,4,b)
C.a.q(w,5,c)
C.a.q(w,6,c)
if(P.fO(a,b,c,0,w)>=14)C.a.q(w,7,c)
v=w[1]
if(typeof v!=="number")return v.kD()
if(v>=b)if(P.fO(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.D()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.V()
if(typeof r!=="number")return H.y(r)
if(q<r)r=q
if(typeof s!=="number")return s.V()
if(s<u)s=r
else if(s<=v)s=v+1
if(typeof t!=="number")return t.V()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.V()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.c.al(a,"..",s)))n=r>s+2&&C.c.al(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.c.al(a,"file",b)){if(u<=b){if(!C.c.al(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.c.t(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.c.b3(a,s,r,"/");++r;++q;++c}else{a=C.c.t(a,b,s)+"/"+C.c.t(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.c.al(a,"http",b)){if(x&&t+3===s&&C.c.al(a,"80",t+1))if(b===0&&!0){a=C.c.b3(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.c.t(a,b,t)+C.c.t(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.c.al(a,"https",b)){if(x&&t+4===s&&C.c.al(a,"443",t+1))if(b===0&&!0){a=C.c.b3(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.c.t(a,b,t)+C.c.t(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.c.t(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.lg(a,v,u,t,s,r,q,o)}return P.ls(a,b,c,v,u,t,s,r,q,o)},
fh:function(a,b){var z=P.o
return C.a.jF(H.c(a.split("&"),[z]),P.it(z,z),new P.kh(b),[P.H,P.o,P.o])},
kc:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.kd(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.c.Z(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.c9(C.c.t(a,v,w),null,null)
if(typeof s!=="number")return s.cb()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.d(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.c9(C.c.t(a,v,c),null,null)
if(typeof s!=="number")return s.cb()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.d(y,u)
y[u]=s
return y},
fg:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.kf(a)
y=new P.kg(z,a)
if(a.length<2)z.$1("address is too short")
x=H.c([],[P.k])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.c.Z(a,w)
if(s===58){if(w===b){++w
if(C.c.Z(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaQ(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.kc(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.d(o,l)
o[l]=0
i=l+1
if(i>=n)return H.d(o,i)
o[i]=0
l+=2}else{i=C.e.b_(k,8)
if(l<0||l>=n)return H.d(o,l)
o[l]=i
i=l+1
if(i>=n)return H.d(o,i)
o[i]=k&255
l+=2}}return o},
lQ:function(){var z,y,x,w,v
z=P.iA(22,new P.lS(),!0,P.J)
y=new P.lR(z)
x=new P.lT()
w=new P.lU()
v=H.h(y.$2(0,225),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(14,225),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(15,225),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(1,225),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(2,235),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(3,235),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(4,229),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(5,229),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(6,231),"$isJ")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(7,231),"$isJ")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.h(y.$2(8,8),"$isJ"),"]",5)
v=H.h(y.$2(9,235),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(16,235),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(17,235),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(10,235),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(18,235),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(19,235),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(11,235),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.h(y.$2(12,236),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.h(y.$2(13,237),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.h(y.$2(20,245),"$isJ"),"az",21)
v=H.h(y.$2(21,245),"$isJ")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fO:function(a,b,c,d,e){var z,y,x,w,v
H.i(e,"$isa",[P.k],"$asa")
z=$.$get$fP()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.d(z,d)
x=z[d]
w=C.c.K(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.d(x,w)
v=x[w]
d=v&31
C.a.q(e,v>>>5,y)}return d},
T:{"^":"b;"},
"+bool":0,
am:{"^":"b;a,b",
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.am))return!1
return this.a===b.a&&!0},
gW:function(a){var z=this.a
return(z^C.e.b_(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.hH(H.j7(this))
y=P.bV(H.j5(this))
x=P.bV(H.j1(this))
w=P.bV(H.j2(this))
v=P.bV(H.j4(this))
u=P.bV(H.j6(this))
t=P.hI(H.j3(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
n:{
hH:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hI:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bV:function(a){if(a>=10)return""+a
return"0"+a}}},
r:{"^":"aj;"},
"+double":0,
bq:{"^":"b;a",
V:function(a,b){return C.e.V(this.a,H.h(b,"$isbq").a)},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.bq))return!1
return this.a===b.a},
gW:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hQ()
y=this.a
if(y<0)return"-"+new P.bq(0-y).i(0)
x=z.$1(C.e.a8(y,6e7)%60)
w=z.$1(C.e.a8(y,1e6)%60)
v=new P.hP().$1(y%1e6)
return""+C.e.a8(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
n:{
ee:function(a,b,c,d,e,f){return new P.bq(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hP:{"^":"q:19;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hQ:{"^":"q:19;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a_:{"^":"b;"},
eE:{"^":"a_;",
i:function(a){return"Throw of null."}},
aT:{"^":"a_;a,b,c,d",
gcj:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gci:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gcj()+y+x
if(!this.a)return w
v=this.gci()
u=P.cf(this.b)
return w+v+": "+H.j(u)},
n:{
bS:function(a){return new P.aT(!1,null,null,a)},
cP:function(a,b,c){return new P.aT(!0,a,b,c)}}},
co:{"^":"aT;e,f,a,b,c,d",
gcj:function(){return"RangeError"},
gci:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
n:{
c4:function(a,b,c){return new P.co(null,null,!0,a,b,"Value not in range")},
W:function(a,b,c,d,e){return new P.co(b,c,!0,a,d,"Invalid value")},
aZ:function(a,b,c,d,e,f){if(typeof a!=="number")return H.y(a)
if(0>a||a>c)throw H.f(P.W(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.f(P.W(b,a,c,"end",f))
return b}return c}}},
ia:{"^":"aT;e,p:f>,a,b,c,d",
gcj:function(){return"RangeError"},
gci:function(){if(J.hb(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
n:{
bt:function(a,b,c,d,e){var z=H.a3(e!=null?e:J.aJ(b))
return new P.ia(b,z,!0,a,c,"Index out of range")}}},
ka:{"^":"a_;a",
i:function(a){return"Unsupported operation: "+this.a},
n:{
Q:function(a){return new P.ka(a)}}},
k7:{"^":"a_;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
n:{
cu:function(a){return new P.k7(a)}}},
jA:{"^":"a_;a",
i:function(a){return"Bad state: "+this.a}},
hA:{"^":"a_;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.cf(z))+"."},
n:{
b3:function(a){return new P.hA(a)}}},
iX:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa_:1},
eQ:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa_:1},
hG:{"^":"a_;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fr:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
i0:{"^":"b;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.j(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.c.t(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.c.K(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.c.Z(w,s)
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
m=""}l=C.c.t(w,o,p)
return y+n+l+m+"\n"+C.c.k(" ",x-o+n.length)+"^\n"},
n:{
R:function(a,b,c){return new P.i0(a,b,c)}}},
k:{"^":"aj;"},
"+int":0,
m:{"^":"b;$ti",
gp:function(a){var z,y
z=this.gU(this)
for(y=0;z.C();)++y
return y},
an:function(a,b){var z,y,x
if(b<0)H.p(P.W(b,0,null,"index",null))
for(z=this.gU(this),y=0;z.C();){x=z.gM()
if(b===y)return x;++y}throw H.f(P.bt(b,this,"index",null,y))},
i:function(a){return P.ic(this,"(",")")}},
aV:{"^":"b;$ti"},
a:{"^":"b;$ti",$ism:1},
"+List":0,
H:{"^":"b;$ti"},
C:{"^":"b;",
gW:function(a){return P.b.prototype.gW.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
aj:{"^":"b;"},
"+num":0,
b:{"^":";",
v:function(a,b){return this===b},
gW:function(a){return H.by(this)},
i:function(a){return"Instance of '"+H.b9(this)+"'"},
toString:function(){return this.i(this)}},
aO:{"^":"b;"},
o:{"^":"b;",$iseF:1},
"+String":0,
ap:{"^":"b;aV:a<",
gp:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isn2:1,
n:{
eR:function(a,b,c){var z=J.bR(b)
if(!z.C())return a
if(c.length===0){do a+=H.j(z.gM())
while(z.C())}else{a+=H.j(z.gM())
for(;z.C();)a=a+c+H.j(z.gM())}return a}}},
kh:{"^":"q:47;a",
$2:function(a,b){var z,y,x,w
z=P.o
H.i(a,"$isH",[z,z],"$asH")
H.I(b)
y=J.dL(b).eK(b,"=")
if(y===-1){if(b!=="")a.q(0,P.dC(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.c.t(b,0,y)
w=C.c.aK(b,y+1)
z=this.a
a.q(0,P.dC(x,0,x.length,z,!0),P.dC(w,0,w.length,z,!0))}return a}},
kd:{"^":"q:49;a",
$2:function(a,b){throw H.f(P.R("Illegal IPv4 address, "+a,this.a,b))}},
kf:{"^":"q:38;a",
$2:function(a,b){throw H.f(P.R("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
kg:{"^":"q:28;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.c9(C.c.t(this.b,a,b),null,16)
if(typeof z!=="number")return z.V()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cA:{"^":"b;cc:a<,b,c,d,eV:e>,f,r,0x,0y,0z,0Q,0ch",
si7:function(a){var z=P.o
this.Q=H.i(a,"$isH",[z,z],"$asH")},
gf7:function(){return this.b},
gcS:function(a){var z=this.c
if(z==null)return""
if(C.c.ak(z,"["))return C.c.t(z,1,z.length-1)
return z},
gc0:function(a){var z=this.d
if(z==null)return P.fD(this.a)
return z},
gd2:function(){var z=this.f
return z==null?"":z},
geE:function(){var z=this.r
return z==null?"":z},
d5:function(a,b,c,d,e,f,g,h,i){var z,y,x
H.i(g,"$isH",[P.o,null],"$asH")
h=this.a
z=h==="file"
i=this.b
e=this.d
y=this.c
if(y!=null)b=y
else if(i.length!==0||e!=null||z)b=""
c=this.e
if(!z)x=b!=null&&c.length!==0
else x=!0
if(x&&!C.c.ak(c,"/"))c="/"+c
f=P.dB(f,0,0,g)
return new P.cA(h,i,b,e,c,f,this.r)},
eY:function(a){return this.d5(null,null,null,null,null,null,a,null,null)},
gc2:function(){var z,y
if(this.Q==null){z=this.f
y=P.o
this.si7(new P.fe(P.fh(z==null?"":z,C.m),[y,y]))}return this.Q},
geG:function(){return this.c!=null},
geJ:function(){return this.f!=null},
geH:function(){return this.r!=null},
i:function(a){var z,y,x,w
z=this.y
if(z==null){z=this.a
y=z.length!==0?H.j(z)+":":""
x=this.c
w=x==null
if(!w||z==="file"){z=y+"//"
y=this.b
if(y.length!==0)z=z+H.j(y)+"@"
if(!w)z+=x
y=this.d
if(y!=null)z=z+":"+H.j(y)}else z=y
z+=this.e
y=this.f
if(y!=null)z=z+"?"+y
y=this.r
if(y!=null)z=z+"#"+y
z=z.charCodeAt(0)==0?z:z
this.y=z}return z},
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!!J.N(b).$isdt){if(this.a==b.gcc())if(this.c!=null===b.geG())if(this.b==b.gf7())if(this.gcS(this)==b.gcS(b))if(this.gc0(this)==b.gc0(b))if(this.e===b.geV(b)){z=this.f
y=z==null
if(!y===b.geJ()){if(y)z=""
if(z===b.gd2()){z=this.r
y=z==null
if(!y===b.geH()){if(y)z=""
z=z===b.geE()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
return z}return!1},
gW:function(a){var z=this.z
if(z==null){z=C.c.gW(this.i(0))
this.z=z}return z},
$isdt:1,
n:{
cB:function(a,b,c,d){var z,y,x,w,v,u
H.i(a,"$isa",[P.k],"$asa")
if(c===C.m){z=$.$get$fI().b
if(typeof b!=="string")H.p(H.ac(b))
z=z.test(b)}else z=!1
if(z)return b
H.x(b,H.ah(c,"bU",0))
y=c.gjB().cK(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.d(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.c3(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
ls:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.lD(a,b,d)
else{if(d===b)P.bI(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.lE(a,z,e-1):""
x=P.lx(a,e,f,!1)
if(typeof f!=="number")return f.D()
w=f+1
if(typeof g!=="number")return H.y(g)
v=w<g?P.lA(P.c9(C.c.t(a,w,g),new P.lt(a,f),null),j):null}else{y=""
x=null
v=null}u=P.ly(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.V()
t=h<i?P.dB(a,h+1,i,null):null
return new P.cA(j,y,x,v,u,t,i<c?P.lw(a,i+1,c):null)},
fD:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bI:function(a,b,c){throw H.f(P.R(c,a,b))},
lA:function(a,b){if(a!=null&&a===P.fD(b))return
return a},
lx:function(a,b,c,d){var z,y
if(b===c)return""
if(C.c.Z(a,b)===91){if(typeof c!=="number")return c.N()
z=c-1
if(C.c.Z(a,z)!==93)P.bI(a,b,"Missing end `]` to match `[` in host")
P.fg(a,b+1,z)
return C.c.t(a,b,c).toLowerCase()}if(typeof c!=="number")return H.y(c)
y=b
for(;y<c;++y)if(C.c.Z(a,y)===58){P.fg(a,b,c)
return"["+a+"]"}return P.lG(a,b,c)},
lG:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.y(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.c.Z(a,z)
if(v===37){u=P.fK(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.ap("")
s=C.c.t(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.c.t(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.d(C.D,t)
t=(C.D[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.ap("")
if(y<z){x.a+=C.c.t(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.d(C.p,t)
t=(C.p[t]&1<<(v&15))!==0}else t=!1
if(t)P.bI(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.c.Z(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.ap("")
s=C.c.t(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fE(v)
z+=q
y=z}}}}if(x==null)return C.c.t(a,b,c)
if(y<c){s=C.c.t(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
lD:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fG(C.c.K(a,b)))P.bI(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.c.K(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.d(C.r,w)
w=(C.r[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bI(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.c.t(a,b,c)
return P.lu(y?a.toLowerCase():a)},
lu:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lE:function(a,b,c){return P.bJ(a,b,c,C.Z,!1)},
ly:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bJ(a,b,c,C.E,!0):C.o.ll(d,new P.lz(),P.o).G(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.c.ak(w,"/"))w="/"+w
return P.lF(w,e,f)},
lF:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.c.ak(a,"/"))return P.lH(a,!z||c)
return P.lI(a)},
dB:function(a,b,c,d){var z,y
z={}
H.i(d,"$isH",[P.o,null],"$asH")
if(a!=null){if(d!=null)throw H.f(P.bS("Both query and queryParameters specified"))
return P.bJ(a,b,c,C.q,!0)}if(d==null)return
y=new P.ap("")
z.a=""
d.a1(0,new P.lB(new P.lC(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
lw:function(a,b,c){return P.bJ(a,b,c,C.q,!0)},
fK:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.c.Z(a,b+1)
x=C.c.Z(a,z)
w=H.cH(y)
v=H.cH(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.e.b_(u,4)
if(z>=8)return H.d(C.t,z)
z=(C.t[z]&1<<(u&15))!==0}else z=!1
if(z)return H.c3(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.c.t(a,b,b+3).toUpperCase()
return},
fE:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.c(z,[P.k])
C.a.q(y,0,37)
C.a.q(y,1,C.c.K("0123456789ABCDEF",a>>>4))
C.a.q(y,2,C.c.K("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.c(z,[P.k])
for(v=0;--w,w>=0;x=128){u=C.e.ix(a,6*w)&63|x
C.a.q(y,v,37)
C.a.q(y,v+1,C.c.K("0123456789ABCDEF",u>>>4))
C.a.q(y,v+2,C.c.K("0123456789ABCDEF",u&15))
v+=3}}return P.c5(y,0,null)},
bJ:function(a,b,c,d,e){var z=P.fJ(a,b,c,H.i(d,"$isa",[P.k],"$asa"),e)
return z==null?C.c.t(a,b,c):z},
fJ:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.i(d,"$isa",[P.k],"$asa")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.V()
if(typeof c!=="number")return H.y(c)
if(!(y<c))break
c$0:{v=C.c.Z(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.d(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fK(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.d(C.p,u)
u=(C.p[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bI(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.c.Z(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fE(v)}}if(w==null)w=new P.ap("")
w.a+=C.c.t(a,x,y)
w.a+=H.j(t)
if(typeof s!=="number")return H.y(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.V()
if(x<c)w.a+=C.c.t(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fH:function(a){if(C.c.ak(a,"."))return!0
return C.c.eK(a,"/.")!==-1},
lI:function(a){var z,y,x,w,v,u,t
if(!P.fH(a))return a
z=H.c([],[P.o])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.F(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.d(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.G(z,"/")},
lH:function(a,b){var z,y,x,w,v,u
if(!P.fH(a))return!b?P.fF(a):a
z=H.c([],[P.o])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaQ(z)!==".."){if(0>=z.length)return H.d(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.d(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaQ(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.d(z,0)
C.a.q(z,0,P.fF(z[0]))}return C.a.G(z,"/")},
fF:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fG(J.he(a,0)))for(y=1;y<z;++y){x=C.c.K(a,y)
if(x===58)return C.c.t(a,0,y)+"%3A"+C.c.aK(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.d(C.r,w)
w=(C.r[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
lv:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.c.K(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.f(P.bS("Invalid URL encoding"))}}return z},
dC:function(a,b,c,d,e){var z,y,x,w,v
y=b
while(!0){if(!(y<c)){z=!0
break}x=C.c.K(a,y)
if(x<=127)if(x!==37)w=x===43
else w=!0
else w=!0
if(w){z=!1
break}++y}if(z){if(C.m!==d)w=!1
else w=!0
if(w)return C.c.t(a,b,c)
else v=new H.Z(C.c.t(a,b,c))}else{v=H.c([],[P.k])
for(w=a.length,y=b;y<c;++y){x=C.c.K(a,y)
if(x>127)throw H.f(P.bS("Illegal percent encoding in URI"))
if(x===37){if(y+3>w)throw H.f(P.bS("Truncated URI"))
C.a.h(v,P.lv(a,y+1))
y+=2}else if(x===43)C.a.h(v,32)
else C.a.h(v,x)}}H.i(v,"$isa",[P.k],"$asa")
return new P.km(!1).cK(v)},
fG:function(a){var z=a|32
return 97<=z&&z<=122}}},
lt:{"^":"q:43;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.D()
throw H.f(P.R("Invalid port",this.a,z+1))}},
lz:{"^":"q:46;",
$1:function(a){return P.cB(C.a0,a,C.m,!1)}},
lC:{"^":"q:44;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.j(P.cB(C.t,a,C.m,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.j(P.cB(C.t,b,C.m,!0))}}},
lB:{"^":"q:41;a",
$2:function(a,b){var z,y
H.I(a)
if(b==null||typeof b==="string")this.a.$2(a,H.I(b))
else for(z=J.bR(H.h1(b,"$ism")),y=this.a;z.C();)y.$2(a,H.I(z.gM()))}},
kb:{"^":"b;a,b,c",
gf6:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
z=z[0]+1
x=C.c.eL(y,"?",z)
w=y.length
if(x>=0){v=P.bJ(y,x+1,w,C.q,!1)
w=x}else v=null
z=new P.kP(this,"data",null,null,null,P.bJ(y,z,w,C.E,!1),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.d(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
n:{
ff:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.c([b-1],[P.k])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.c.K(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.f(P.R("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.f(P.R("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.c.K(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaQ(z)
if(v!==44||x!==t+7||!C.c.al(a,"base64",t+1))throw H.f(P.R("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.J.jU(a,s,y)
else{r=P.fJ(a,s,y,C.q,!0)
if(r!=null)a=C.c.b3(a,s,y,r)}return new P.kb(a,z,c)}}},
lS:{"^":"q:50;",
$1:function(a){return new Uint8Array(96)}},
lR:{"^":"q:39;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.d(z,a)
z=z[a]
J.hg(z,0,96,b)
return z}},
lT:{"^":"q;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.c.K(b,y)^96
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
lU:{"^":"q;",
$3:function(a,b,c){var z,y,x
for(z=C.c.K(b,0),y=C.c.K(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.d(a,x)
a[x]=c}}},
lg:{"^":"b;a,b,c,d,e,f,r,x,0y",
geG:function(){return this.c>0},
geI:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.D()
y=this.e
if(typeof y!=="number")return H.y(y)
y=z+1<y
z=y}else z=!1
return z},
geJ:function(){var z=this.f
if(typeof z!=="number")return z.V()
return z<this.r},
geH:function(){return this.r<this.a.length},
gdE:function(){return this.b===4&&C.c.ak(this.a,"http")},
gdF:function(){return this.b===5&&C.c.ak(this.a,"https")},
gcc:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdE()){this.x="http"
z="http"}else if(this.gdF()){this.x="https"
z="https"}else if(z===4&&C.c.ak(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.c.ak(this.a,"package")){this.x="package"
z="package"}else{z=C.c.t(this.a,0,z)
this.x=z}return z},
gf7:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.c.t(this.a,y,z-1):""},
gcS:function(a){var z=this.c
return z>0?C.c.t(this.a,z,this.d):""},
gc0:function(a){var z
if(this.geI()){z=this.d
if(typeof z!=="number")return z.D()
return P.c9(C.c.t(this.a,z+1,this.e),null,null)}if(this.gdE())return 80
if(this.gdF())return 443
return 0},
geV:function(a){return C.c.t(this.a,this.e,this.f)},
gd2:function(){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.V()
return z<y?C.c.t(this.a,z+1,y):""},
geE:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.c.aK(y,z+1):""},
gc2:function(){var z=this.f
if(typeof z!=="number")return z.V()
if(z>=this.r)return C.a1
z=P.o
return new P.fe(P.fh(this.gd2(),C.m),[z,z])},
d5:function(a,b,c,d,e,f,g,h,i){var z,y,x
H.i(g,"$isH",[P.o,null],"$asH")
h=this.gcc()
z=h==="file"
y=this.c
i=y>0?C.c.t(this.a,this.b+3,y):""
e=this.geI()?this.gc0(this):null
y=this.c
if(y>0)b=C.c.t(this.a,y,this.d)
else if(i.length!==0||e!=null||z)b=""
y=this.a
c=C.c.t(y,this.e,this.f)
if(!z)x=b!=null&&c.length!==0
else x=!0
if(x&&!C.c.ak(c,"/"))c="/"+c
f=P.dB(f,0,0,g)
x=this.r
if(x<y.length)a=C.c.aK(y,x+1)
return new P.cA(h,i,b,e,c,f,a)},
eY:function(a){return this.d5(null,null,null,null,null,null,a,null,null)},
gW:function(a){var z=this.y
if(z==null){z=C.c.gW(this.a)
this.y=z}return z},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!!J.N(b).$isdt)return this.a===b.i(0)
return!1},
i:function(a){return this.a},
$isdt:1},
kP:{"^":"cA;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
cU:function(a,b){var z=document.createElement("canvas")
return z},
hS:function(a){H.h(a,"$isbW")
return"wheel"},
ib:function(a){var z,y,x
y=document.createElement("input")
z=H.h(y,"$isel")
try{J.hi(z,a)}catch(x){H.au(x)}return z},
cy:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ft:function(a,b,c,d){var z,y
z=W.cy(W.cy(W.cy(W.cy(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fS:function(a,b){var z
H.n(a,{func:1,ret:-1,args:[b]})
z=$.O
if(z===C.k)return a
return z.e3(a,b)},
ad:{"^":"V;","%":"HTMLBRElement|HTMLBaseElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
mL:{"^":"ad;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
mM:{"^":"ad;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
ho:{"^":"ad;","%":"HTMLBodyElement"},
cT:{"^":"ad;",
c8:function(a,b,c){if(c!=null)return this.hm(a,b,P.m5(c,null))
return this.hn(a,b)},
fk:function(a,b){return this.c8(a,b,null)},
hm:function(a,b,c){return a.getContext(b,c)},
hn:function(a,b){return a.getContext(b)},
$iscT:1,
$isdY:1,
"%":"HTMLCanvasElement"},
cV:{"^":"G;",
ho:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
jz:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$iscV:1,
"%":"CanvasRenderingContext2D"},
mP:{"^":"K;0p:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
mR:{"^":"kO;0p:length=",
fm:function(a,b){var z=this.hp(a,this.fZ(a,b))
return z==null?"":z},
fZ:function(a,b){var z,y
z=$.$get$e4()
y=z[b]
if(typeof y==="string")return y
y=this.iC(a,b)
z[b]=y
return y},
iC:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hM()+b
if(z in a)return z
return b},
hp:function(a,b){return a.getPropertyValue(b)},
gcE:function(a){return a.bottom},
gaF:function(a){return a.height},
gb2:function(a){return a.left},
gbn:function(a){return a.right},
gbr:function(a){return a.top},
gaJ:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hF:{"^":"b;",
gb2:function(a){return this.fm(a,"left")}},
ed:{"^":"ad;",$ised:1,"%":"HTMLDivElement"},
hN:{"^":"K;",
d9:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
mS:{"^":"G;",
i:function(a){return String(a)},
"%":"DOMException"},
hO:{"^":"G;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
v:function(a,b){var z
if(b==null)return!1
if(!H.bO(b,"$isaN",[P.aj],"$asaN"))return!1
z=J.aI(b)
return a.left===z.gb2(b)&&a.top===z.gbr(b)&&a.width===z.gaJ(b)&&a.height===z.gaF(b)},
gW:function(a){return W.ft(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gcE:function(a){return a.bottom},
gaF:function(a){return a.height},
gb2:function(a){return a.left},
gbn:function(a){return a.right},
gbr:function(a){return a.top},
gaJ:function(a){return a.width},
$isaN:1,
$asaN:function(){return[P.aj]},
"%":";DOMRectReadOnly"},
kN:{"^":"ck;a,b",
gp:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.d(z,b)
return H.h(z[b],"$isV")},
q:function(a,b,c){var z
H.h(c,"$isV")
z=this.b
if(b<0||b>=z.length)return H.d(z,b)
J.cM(this.a,c,z[b])},
h:function(a,b){J.dP(this.a,b)
return b},
gU:function(a){var z=this.kt(this)
return new J.ak(z,z.length,0,[H.u(z,0)])},
$asS:function(){return[W.V]},
$asm:function(){return[W.V]},
$asa:function(){return[W.V]}},
V:{"^":"K;",
gcJ:function(a){return new W.kN(a,a.children)},
ge8:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.V()
if(x<0)x=-x*0
if(typeof w!=="number")return w.V()
if(w<0)w=-w*0
return new P.aN(z,y,x,w,[P.aj])},
i:function(a){return a.localName},
$isV:1,
"%":";Element"},
a4:{"^":"G;",$isa4:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
bW:{"^":"G;",
fU:function(a,b,c,d){return a.addEventListener(b,H.bh(H.n(c,{func:1,args:[W.a4]}),1),!1)},
$isbW:1,
"%":";EventTarget"},
mT:{"^":"ad;0p:length=","%":"HTMLFormElement"},
i6:{"^":"G;0p:length=",
ig:function(a,b,c,d){return a.replaceState(b,c,d)},
"%":"History"},
i7:{"^":"l4;",
gp:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.bt(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.h(c,"$isK")
throw H.f(P.Q("Cannot assign element of immutable List."))},
an:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isaK:1,
$asaK:function(){return[W.K]},
$asS:function(){return[W.K]},
$ism:1,
$asm:function(){return[W.K]},
$isa:1,
$asa:function(){return[W.K]},
$isi7:1,
$asaU:function(){return[W.K]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
i8:{"^":"hN;","%":"HTMLDocument"},
bX:{"^":"G;0ea:data=",$isbX:1,"%":"ImageData"},
ek:{"^":"ad;",$isek:1,$isdY:1,"%":"HTMLImageElement"},
el:{"^":"ad;0type",
skz:function(a,b){a.type=H.I(b)},
$isel:1,
$iscW:1,
"%":"HTMLInputElement"},
cW:{"^":"b;",$isV:1,$isbW:1,$isK:1},
bu:{"^":"dj;",$isbu:1,"%":"KeyboardEvent"},
ik:{"^":"ad;","%":"HTMLLabelElement"},
iQ:{"^":"ad;","%":"HTMLAudioElement;HTMLMediaElement"},
aw:{"^":"dj;",$isaw:1,"%":"PointerEvent;DragEvent|MouseEvent"},
kM:{"^":"ck;a",
q:function(a,b,c){var z,y
H.h(c,"$isK")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.d(y,b)
J.cM(z,c,y[b])},
gU:function(a){var z=this.a.childNodes
return new W.eg(z,z.length,-1,[H.c8(C.a2,z,"aU",0)])},
gp:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.d(z,b)
return z[b]},
$asS:function(){return[W.K]},
$asm:function(){return[W.K]},
$asa:function(){return[W.K]}},
K:{"^":"bW;",
kj:function(a,b){var z,y
try{z=a.parentNode
J.cM(z,b,a)}catch(y){H.au(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.fu(a):z},
Y:function(a,b){return a.appendChild(b)},
ie:function(a,b,c){return a.replaceChild(b,c)},
$isK:1,
"%":"Attr|DocumentFragment|DocumentType|ShadowRoot;Node"},
iU:{"^":"la;",
gp:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.bt(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.h(c,"$isK")
throw H.f(P.Q("Cannot assign element of immutable List."))},
an:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isaK:1,
$asaK:function(){return[W.K]},
$asS:function(){return[W.K]},
$ism:1,
$asm:function(){return[W.K]},
$isa:1,
$asa:function(){return[W.K]},
$asaU:function(){return[W.K]},
"%":"NodeList|RadioNodeList"},
n0:{"^":"ad;0p:length=","%":"HTMLSelectElement"},
cq:{"^":"ad;",$iscq:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
jH:{"^":"ad;",
hr:function(a,b){return a.insertRow(b)},
"%":"HTMLTableElement"},
jI:{"^":"ad;",
dD:function(a,b){return a.insertCell(b)},
"%":"HTMLTableRowElement"},
bc:{"^":"G;",$isbc:1,"%":"Touch"},
bd:{"^":"dj;",$isbd:1,"%":"TouchEvent"},
n5:{"^":"lp;",
gp:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.bt(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.h(c,"$isbc")
throw H.f(P.Q("Cannot assign element of immutable List."))},
an:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$isaK:1,
$asaK:function(){return[W.bc]},
$asS:function(){return[W.bc]},
$ism:1,
$asm:function(){return[W.bc]},
$isa:1,
$asa:function(){return[W.bc]},
$asaU:function(){return[W.bc]},
"%":"TouchList"},
dj:{"^":"a4;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
n7:{"^":"iQ;",$isdY:1,"%":"HTMLVideoElement"},
bG:{"^":"aw;",
gjw:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.Q("deltaY is not supported"))},
gjv:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.Q("deltaX is not supported"))},
$isbG:1,
"%":"WheelEvent"},
kG:{"^":"bW;",
ih:function(a,b){return a.requestAnimationFrame(H.bh(H.n(b,{func:1,ret:-1,args:[P.aj]}),1))},
hc:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
nc:{"^":"hO;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
v:function(a,b){var z
if(b==null)return!1
if(!H.bO(b,"$isaN",[P.aj],"$asaN"))return!1
z=J.aI(b)
return a.left===z.gb2(b)&&a.top===z.gbr(b)&&a.width===z.gaJ(b)&&a.height===z.gaF(b)},
gW:function(a){return W.ft(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gaF:function(a){return a.height},
gaJ:function(a){return a.width},
"%":"ClientRect|DOMRect"},
kQ:{"^":"jC;a,b,c,$ti"},
nd:{"^":"kQ;a,b,c,$ti"},
kR:{"^":"de;a,b,c,d,e,$ti",n:{
Y:function(a,b,c,d,e){var z,y
z=W.fS(new W.kS(c),W.a4)
y=z!=null
if(y&&!0){H.n(z,{func:1,args:[W.a4]})
if(y)J.hd(a,b,z,!1)}return new W.kR(0,a,b,z,!1,[e])}}},
kS:{"^":"q:37;a",
$1:function(a){return this.a.$1(H.h(a,"$isa4"))}},
aU:{"^":"b;$ti",
gU:function(a){return new W.eg(a,this.gp(a),-1,[H.c8(this,a,"aU",0)])}},
eg:{"^":"b;a,b,c,0d,$ti",
sdC:function(a){this.d=H.x(a,H.u(this,0))},
C:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sdC(J.hc(this.a,z))
this.c=z
return!0}this.sdC(null)
this.c=y
return!1},
gM:function(){return this.d},
$isaV:1},
kO:{"^":"G+hF;"},
l3:{"^":"G+S;"},
l4:{"^":"l3+aU;"},
l9:{"^":"G+S;"},
la:{"^":"l9+aU;"},
lo:{"^":"G+S;"},
lp:{"^":"lo+aU;"}}],["","",,P,{"^":"",
m8:function(a){var z,y
z=J.N(a)
if(!!z.$isbX){y=z.gea(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fC(a.data,a.height,a.width)},
m7:function(a){if(a instanceof P.fC)return{data:a.a,height:a.b,width:a.c}
return a},
m5:function(a,b){var z={}
a.a1(0,new P.m6(z))
return z},
eb:function(){var z=$.ea
if(z==null){z=J.cN(window.navigator.userAgent,"Opera",0)
$.ea=z}return z},
hM:function(){var z,y
z=$.e7
if(z!=null)return z
y=$.e8
if(y==null){y=J.cN(window.navigator.userAgent,"Firefox",0)
$.e8=y}if(y)z="-moz-"
else{y=$.e9
if(y==null){y=!P.eb()&&J.cN(window.navigator.userAgent,"Trident/",0)
$.e9=y}if(y)z="-ms-"
else z=P.eb()?"-o-":"-webkit-"}$.e7=z
return z},
lh:{"^":"b;",
eC:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
d8:function(a){var z,y,x,w
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.N(a)
if(!!y.$isam)return new Date(a.a)
if(!!y.$isje)throw H.f(P.cu("structured clone of RegExp"))
if(!!y.$isbX)return a
if(!!y.$isd9)return a
if(!!y.$isH){x=this.eC(a)
y=this.b
if(x>=y.length)return H.d(y,x)
w=y[x]
z.a=w
if(w!=null)return w
w={}
z.a=w
C.a.q(y,x,w)
a.a1(0,new P.lj(z,this))
return z.a}if(!!y.$isa){x=this.eC(a)
z=this.b
if(x>=z.length)return H.d(z,x)
w=z[x]
if(w!=null)return w
return this.jq(a,x)}throw H.f(P.cu("structured clone of other type"))},
jq:function(a,b){var z,y,x,w
z=J.bk(a)
y=z.gp(a)
x=new Array(y)
C.a.q(this.b,b,x)
for(w=0;w<y;++w)C.a.q(x,w,this.d8(z.j(a,w)))
return x}},
lj:{"^":"q:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.d8(b)}},
fC:{"^":"b;ea:a>,b,c",$isbX:1},
m6:{"^":"q:6;a",
$2:function(a,b){this.a[a]=b}},
li:{"^":"lh;a,b"},
hY:{"^":"ck;a,b",
gby:function(){var z,y,x
z=this.b
y=H.ah(z,"S",0)
x=W.V
return new H.iG(new H.kE(z,H.n(new P.hZ(),{func:1,ret:P.T,args:[y]}),[y]),H.n(new P.i_(),{func:1,ret:x,args:[y]}),[y,x])},
q:function(a,b,c){var z
H.h(c,"$isV")
z=this.gby()
J.hh(z.b.$1(J.cO(z.a,b)),c)},
h:function(a,b){J.dP(this.b.a,b)},
gp:function(a){return J.aJ(this.gby().a)},
j:function(a,b){var z=this.gby()
return z.b.$1(J.cO(z.a,b))},
gU:function(a){var z=P.iz(this.gby(),!1,W.V)
return new J.ak(z,z.length,0,[H.u(z,0)])},
$asS:function(){return[W.V]},
$asm:function(){return[W.V]},
$asa:function(){return[W.V]}},
hZ:{"^":"q:35;",
$1:function(a){return!!J.N(H.h(a,"$isK")).$isV}},
i_:{"^":"q:32;",
$1:function(a){return H.e(H.h(a,"$isK"),"$isV")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cz:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l5:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
lb:{"^":"b;$ti",
gbn:function(a){var z=this.a
if(typeof z!=="number")return z.D()
return H.x(z+this.c,H.u(this,0))},
gcE:function(a){var z=this.b
if(typeof z!=="number")return z.D()
return H.x(z+this.d,H.u(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
v:function(a,b){var z,y,x,w
if(b==null)return!1
if(!H.bO(b,"$isaN",[P.aj],"$asaN"))return!1
z=this.a
y=J.aI(b)
x=y.gb2(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbr(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.D()
w=H.u(this,0)
if(H.x(z+this.c,w)===y.gbn(b)){if(typeof x!=="number")return x.D()
z=H.x(x+this.d,w)===y.gcE(b)}else z=!1}else z=!1}else z=!1
return z},
gW:function(a){var z,y,x,w,v
z=this.a
y=J.bQ(z)
x=this.b
w=J.bQ(x)
if(typeof z!=="number")return z.D()
v=H.u(this,0)
z=H.x(z+this.c,v)
if(typeof x!=="number")return x.D()
v=H.x(x+this.d,v)
return P.l5(P.cz(P.cz(P.cz(P.cz(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
aN:{"^":"lb;b2:a>,br:b>,aJ:c>,aF:d>,$ti"}}],["","",,P,{"^":"",n3:{"^":"V;",
gcJ:function(a){return new P.hY(a,new W.kM(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"}}],["","",,P,{"^":"",J:{"^":"b;",$ism:1,
$asm:function(){return[P.k]},
$isa:1,
$asa:function(){return[P.k]},
$isjZ:1}}],["","",,P,{"^":""}],["","",,P,{"^":"",hp:{"^":"G;",$ishp:1,"%":"WebGLBuffer"},i1:{"^":"G;",$isi1:1,"%":"WebGLFramebuffer"},jb:{"^":"G;",$isjb:1,"%":"WebGLProgram"},jl:{"^":"G;",$isjl:1,"%":"WebGLRenderbuffer"},db:{"^":"G;",
bC:function(a,b){return a.activeTexture(b)},
dY:function(a,b,c){return a.attachShader(b,c)},
aB:function(a,b,c){return a.bindBuffer(b,c)},
aP:function(a,b,c){return a.bindFramebuffer(b,c)},
e2:function(a,b,c){return a.bindRenderbuffer(b,c)},
ag:function(a,b,c){return a.bindTexture(b,c)},
jk:function(a,b,c){return a.blendFunc(b,c)},
e4:function(a,b,c,d){return a.bufferData(b,c,d)},
e5:function(a,b){return a.clear(b)},
e6:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
e7:function(a,b){return a.clearDepth(b)},
jn:function(a,b){return a.compileShader(b)},
jr:function(a,b){return a.createShader(b)},
jt:function(a,b){return a.deleteProgram(b)},
ju:function(a,b){return a.deleteShader(b)},
eb:function(a,b){return a.depthFunc(b)},
jx:function(a,b){return a.disable(b)},
ed:function(a,b){return a.disableVertexAttribArray(b)},
jy:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bf:function(a,b){return a.enable(b)},
ef:function(a,b){return a.enableVertexAttribArray(b)},
jI:function(a,b,c,d,e){return a.framebufferRenderbuffer(b,c,d,e)},
eF:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
fg:function(a,b){return a.generateMipmap(b)},
fh:function(a,b,c){return a.getActiveAttrib(b,c)},
fi:function(a,b,c){return a.getActiveUniform(b,c)},
fj:function(a,b,c){return a.getAttribLocation(b,c)},
c9:function(a,b){return a.getParameter(b)},
fl:function(a,b){return a.getProgramInfoLog(b)},
ca:function(a,b,c){return a.getProgramParameter(b,c)},
fn:function(a,b){return a.getShaderInfoLog(b)},
fo:function(a,b,c){return a.getShaderParameter(b,c)},
fp:function(a,b,c){return a.getUniformLocation(b,c)},
jP:function(a,b){return a.linkProgram(b)},
kd:function(a,b,c){return a.pixelStorei(b,c)},
i8:function(a,b,c,d,e,f,g,h){return a.readPixels(b,c,d,e,f,g,h)},
ki:function(a,b,c,d,e){return a.renderbufferStorage(b,c,d,e)},
fs:function(a,b,c){return a.shaderSource(b,c)},
f0:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=i==null
if(!z&&h!=null&&typeof g==="number"&&Math.floor(g)===g){this.iE(a,b,c,d,e,f,g,h,i,j)
return}y=J.N(g)
if(!!y.$isbX&&h==null&&z&&!0){this.iF(a,b,c,d,e,f,P.m7(g))
return}if(!!y.$isek&&h==null&&z&&!0){this.iG(a,b,c,d,e,f,g)
return}throw H.f(P.bS("Incorrect number or type of arguments"))},
kq:function(a,b,c,d,e,f,g){return this.f0(a,b,c,d,e,f,g,null,null,null)},
iE:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
iF:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
iG:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aH:function(a,b,c,d){return a.texParameteri(b,c,d)},
J:function(a,b,c){return a.uniform1f(b,c)},
L:function(a,b,c){return a.uniform1i(b,c)},
c6:function(a,b,c,d){return a.uniform2f(b,c,d)},
u:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
kA:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
f5:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
d7:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bs:function(a,b){return a.useProgram(b)},
kC:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
f9:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isdb:1,
"%":"WebGLRenderingContext"},jr:{"^":"G;",$isjr:1,"%":"WebGLShader"},jJ:{"^":"G;",$isjJ:1,"%":"WebGLTexture"},k5:{"^":"G;",$isk5:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",P:{"^":"b;0a,0b,0c,0d,$ti",
shv:function(a){this.a=H.i(a,"$isa",[H.ah(this,"P",0)],"$asa")},
sdL:function(a){this.b=H.n(a,{func:1,ret:P.T,args:[[P.m,H.ah(this,"P",0)]]})},
sdI:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.k,[P.m,H.ah(this,"P",0)]]})},
sdM:function(a){this.d=H.n(a,{func:1,ret:-1,args:[P.k,[P.m,H.ah(this,"P",0)]]})},
bu:function(a){this.shv(H.c([],[a]))
this.sdL(null)
this.sdI(null)
this.sdM(null)},
da:function(a,b,c){var z=H.ah(this,"P",0)
H.n(b,{func:1,ret:P.T,args:[[P.m,z]]})
z={func:1,ret:-1,args:[P.k,[P.m,z]]}
H.n(a,z)
H.n(c,z)
this.sdL(b)
this.sdI(a)
this.sdM(c)},
aS:function(a,b){return this.da(a,null,b)},
dK:function(a){var z
H.i(a,"$ism",[H.ah(this,"P",0)],"$asm")
z=this.b
if(z!=null)return z.$1(a)
return!0},
dH:function(a,b){var z
H.i(b,"$ism",[H.ah(this,"P",0)],"$asm")
z=this.c
if(z!=null)z.$2(a,b)},
gp:function(a){return this.a.length},
gU:function(a){var z=this.a
return new J.ak(z,z.length,0,[H.u(z,0)])},
an:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.d(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.ah(this,"P",0)
H.x(b,z)
z=[z]
if(this.dK(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dH(x,H.c([b],z))}},
ba:function(a,b){var z,y
H.i(b,"$ism",[H.ah(this,"P",0)],"$asm")
if(this.dK(b)){z=this.a
y=z.length
C.a.ba(z,b)
this.dH(y,b)}},
$ism:1,
n:{
cd:function(a){var z=new O.P([a])
z.bu(a)
return z}}},d6:{"^":"b;0a,0b",
scm:function(a){this.a=H.i(a,"$isa",[V.ae],"$asa")},
gp:function(a){return this.a.length},
gl:function(){var z=this.b
if(z==null){z=D.A()
this.b=z}return z},
fF:function(a){var z=this.b
if(!(z==null))z.E(a)},
aT:function(){return this.fF(null)},
ga_:function(){var z=this.a
if(z.length>0)return C.a.gaQ(z)
else return V.aX()},
c1:function(a){var z=this.a
if(a==null)C.a.h(z,V.aX())
else C.a.h(z,a)
this.aT()},
bm:function(){var z=this.a
if(z.length>0){z.pop()
this.aT()}}}}],["","",,E,{"^":"",cQ:{"^":"b;"},an:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0ar:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sfG:function(a,b){this.y=H.i(b,"$isP",[E.an],"$asP")},
sar:function(a){this.z=H.h(a,"$isao")},
dm:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.ak(z,z.length,0,[H.u(z,0)]);z.C();){y=z.d
if(y.f==null)y.dm()}},
scd:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gl().H(0,this.geT())
y=this.c
if(y!=null)y.gl().h(0,this.geT())
x=new D.v("shape",z,this.c,this,[F.eO])
x.b=!0
this.ai(x)}},
saj:function(a){var z,y,x
z=this.f
if(z==null?a!=null:z!==a){if(z!=null)z.gl().H(0,this.geU())
y=this.f
this.f=a
if(a!=null)a.gl().h(0,this.geU())
this.dm()
x=new D.v("technique",y,this.f,this,[O.aP])
x.b=!0
this.ai(x)}},
sbj:function(a){var z,y
if(!J.F(this.r,a)){z=this.r
if(z!=null)z.gl().H(0,this.geS())
if(a!=null)a.gl().h(0,this.geS())
this.r=a
y=new D.v("mover",z,a,this,[U.aa])
y.b=!0
this.ai(y)}},
ab:function(a){var z,y,x,w
z=this.r
y=z!=null?z.aI(a,this):null
if(!J.F(y,this.x)){x=this.x
this.x=y
w=new D.v("matrix",x,y,this,[V.ae])
w.b=!0
this.ai(w)}z=this.f
if(z!=null)z.ab(a)
for(z=this.y.a,z=new J.ak(z,z.length,0,[H.u(z,0)]);z.C();)z.d.ab(a)},
aa:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.ga_())
else C.a.h(z.a,y.k(0,z.ga_()))
z.aT()
a.d1(this.f)
z=a.dy
x=(z&&C.a).gaQ(z)
if(x!=null&&this.d!=null)x.c4(a,this)
for(z=this.y.a,z=new J.ak(z,z.length,0,[H.u(z,0)]);z.C();)z.d.aa(a)
a.d_()
a.dx.bm()},
gl:function(){var z=this.z
if(z==null){z=D.A()
this.z=z}return z},
ai:function(a){var z=this.z
if(!(z==null))z.E(a)},
a5:function(){return this.ai(null)},
jZ:[function(a){H.h(a,"$isw")
this.e=null
this.ai(a)},function(){return this.jZ(null)},"lr","$1","$0","geT",0,2,0],
k_:[function(a){this.ai(H.h(a,"$isw"))},function(){return this.k_(null)},"ls","$1","$0","geU",0,2,0],
jY:[function(a){this.ai(H.h(a,"$isw"))},function(){return this.jY(null)},"lq","$1","$0","geS",0,2,0],
jW:[function(a){this.ai(H.h(a,"$isw"))},function(){return this.jW(null)},"lo","$1","$0","geR",0,2,0],
ln:[function(a,b){var z,y,x,w,v,u,t
H.i(b,"$ism",[E.an],"$asm")
for(z=b.length,y=this.geR(),x={func:1,ret:-1,args:[D.w]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.gar()==null){t=new D.ao()
t.sae(null)
t.sb8(null)
t.c=null
t.d=0
u.sar(t)}t=u.gar()
t.toString
H.n(y,x)
if(t.a==null)t.sae(H.c([],w))
t=t.a;(t&&C.a).h(t,y)}}this.a5()},"$2","gjV",8,0,7],
lp:[function(a,b){var z,y
H.i(b,"$ism",[E.an],"$asm")
for(z=b.gU(b),y=this.geR();z.C();)z.gM().gl().H(0,y)
this.a5()},"$2","gjX",8,0,7],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaB:1,
n:{
cX:function(a,b,c,d,e,f){var z=new E.an()
z.a=d
z.b=!0
z.sfG(0,O.cd(E.an))
z.y.aS(z.gjV(),z.gjX())
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
z.scd(0,e)
z.saj(f)
z.sbj(c)
return z}}},jg:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
siD:function(a){this.dy=H.i(a,"$isa",[O.aP],"$asa")},
siw:function(a){this.fr=H.i(a,"$isH",[P.o,A.bB],"$asH")},
fB:function(a,b){var z,y
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
z=new O.d6()
y=[V.ae]
z.scm(H.c([],y))
z.b=null
z.gl().h(0,new E.ji(this))
this.cy=z
z=new O.d6()
z.scm(H.c([],y))
z.b=null
z.gl().h(0,new E.jj(this))
this.db=z
z=new O.d6()
z.scm(H.c([],y))
z.b=null
z.gl().h(0,new E.jk(this))
this.dx=z
this.siD(H.c([],[O.aP]))
z=this.dy;(z&&C.a).h(z,null)
this.siw(new H.aW(0,0,[P.o,A.bB]))},
gke:function(){var z=this.z
if(z==null){z=this.cy.ga_().k(0,this.db.ga_())
this.z=z}return z},
geX:function(){var z=this.ch
if(z==null){z=this.gke().k(0,this.dx.ga_())
this.ch=z}return z},
gf8:function(){var z=this.cx
if(z==null){z=this.db.ga_().k(0,this.dx.ga_())
this.cx=z}return z},
d1:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaQ(z):a;(z&&C.a).h(z,y)},
d_:function(){var z=this.dy
if(z.length>1)z.pop()},
bE:function(a){var z=a.b
if(z.length===0)throw H.f(P.t("May not cache a shader with no name."))
if(this.fr.bH(z))throw H.f(P.t('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.q(0,z,a)},
n:{
jh:function(a,b){var z=new E.jg(a,b)
z.fB(a,b)
return z}}},ji:{"^":"q:8;a",
$1:function(a){var z
H.h(a,"$isw")
z=this.a
z.z=null
z.ch=null}},jj:{"^":"q:8;a",
$1:function(a){var z
H.h(a,"$isw")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jk:{"^":"q:8;a",
$1:function(a){var z
H.h(a,"$isw")
z=this.a
z.ch=null
z.cx=null}},jR:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0ar:x<,0y,0z,0Q,0ch,0cx,0cy",
sar:function(a){this.x=H.h(a,"$isao")},
fI:[function(a){H.h(a,"$isw")
this.kl()},function(){return this.fI(null)},"fH","$1","$0","gdg",0,2,0],
gjH:function(){var z,y,x
z=Date.now()
y=C.e.a8(P.ee(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.am(z,!1)
return x/y},
dO:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.k()
if(typeof z!=="number")return H.y(z)
x=C.i.bg(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.k()
w=C.i.bg(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.eZ(C.u,this.gkk())}},
kl:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.n(new E.jT(this),{func:1,ret:-1,args:[P.aj]})
C.I.hc(z)
C.I.ih(z,W.fS(y,P.aj))}},"$0","gkk",0,0,3],
kh:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dO()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.am(w,!1)
x.y=P.ee(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sp(w.a,0)
w.aT()
w=x.db
C.a.sp(w.a,0)
w.aT()
w=x.dx
C.a.sp(w.a,0)
w.aT()
w=x.dy;(w&&C.a).sp(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aa(this.e)}}catch(v){z=H.au(v)
y=H.bl(v)
P.dO("Error: "+H.j(z))
P.dO("Stack: "+H.j(y))
throw H.f(z)}},
n:{
jS:function(a,b,c,d,e){var z,y,x,w
z=J.N(a)
if(!!z.$iscT)return E.eY(a,!0,!0,!0,!1)
y=W.cU(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcJ(a).h(0,y)
w=E.eY(y,!0,!0,!0,!1)
w.a=a
return w},
eY:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jR()
y=P.iu(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.o,null)
x=C.n.c8(a,"webgl",y)
x=H.h(x==null?C.n.c8(a,"experimental-webgl",y):x,"$isdb")
if(x==null)H.p(P.t("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.jh(x,a)
w=new T.jO(x)
w.b=H.a3((x&&C.b).c9(x,3379))
w.c=H.a3(C.b.c9(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.ki(a)
v=new X.ij()
v.c=new X.aL(!1,!1,!1)
v.si6(P.ix(null,null,null,P.k))
w.b=v
v=new X.iR(w)
v.f=0
v.r=V.aM()
v.x=V.aM()
v.Q=1
v.ch=1
w.c=v
v=new X.iB(w)
v.r=0
v.x=V.aM()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jW(w)
v.e=0
v.f=V.aM()
v.r=V.aM()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.she(H.c([],[[P.de,P.b]]))
v=w.z
u=document
t=W.aw
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.Y(u,"contextmenu",H.n(w.ghJ(),s),!1,t))
v=w.z
r=W.a4
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.Y(a,"focus",H.n(w.ghO(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.Y(a,"blur",H.n(w.ghG(),q),!1,r))
v=w.z
p=W.bu
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.Y(u,"keyup",H.n(w.ghQ(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.Y(u,"keydown",H.n(w.ghP(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.Y(a,"mousedown",H.n(w.ghT(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Y(a,"mouseup",H.n(w.ghV(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Y(a,"mousemove",H.n(w.ghU(),s),!1,t))
p=w.z
o=W.bG;(p&&C.a).h(p,W.Y(a,H.I(W.hS(a)),H.n(w.ghW(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.Y(u,"mousemove",H.n(w.ghK(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.Y(u,"mouseup",H.n(w.ghL(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.Y(u,"pointerlockchange",H.n(w.ghX(),q),!1,r))
r=w.z
q=W.bd
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.Y(a,"touchstart",H.n(w.gi4(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Y(a,"touchend",H.n(w.gi2(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Y(a,"touchmove",H.n(w.gi3(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.am(Date.now(),!1)
z.cy=0
z.dO()
return z}}},jT:{"^":"q:29;a",
$1:function(a){var z
H.mA(a)
z=this.a
if(z.ch){z.ch=!1
z.kh()}}}}],["","",,Z,{"^":"",fo:{"^":"b;a,b",$ismN:1,n:{
dy:function(a,b,c){var z
H.i(c,"$isa",[P.k],"$asa")
z=a.createBuffer()
C.b.aB(a,b,z)
C.b.e4(a,b,new Int16Array(H.b0(c)),35044)
C.b.aB(a,b,null)
return new Z.fo(b,z)}}},dW:{"^":"cQ;a,b,c,d,e",
X:function(a){var z,y,x
try{y=a.a
C.b.ef(y,this.e)
C.b.kC(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.au(x)
y=P.t('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.j(z))
throw H.f(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},cx:{"^":"b;a",$ismO:1},bT:{"^":"b;a,0b,c,d",
shq:function(a){this.b=H.i(a,"$isa",[Z.bY],"$asa")},
ao:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
X:function(a){var z,y
z=this.a
C.b.aB(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].X(a)},
aR:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.b.ed(x,z[y].e)
C.b.aB(x,this.a.a,null)},
aa:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.d(w,x)
v=w[x]
w=v.c
u=w.a
C.b.aB(y,u,w.b)
C.b.jy(y,v.a,v.b,5123,0)
C.b.aB(y,u,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.o]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.af(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.G(y,", ")+"\nAttrs:   "+C.a.G(u,", ")},
$isn4:1},bY:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b9(this.c)+"'")+"]"}},aQ:{"^":"b;a",
gdd:function(a){var z,y
z=this.a
y=(z&$.$get$a9().a)!==0?3:0
if((z&$.$get$ay().a)!==0)y+=3
if((z&$.$get$aG().a)!==0)y+=3
if((z&$.$get$as().a)!==0)y+=2
if((z&$.$get$aH().a)!==0)y+=3
if((z&$.$get$bE().a)!==0)y+=3
if((z&$.$get$bF().a)!==0)y+=4
if((z&$.$get$b_().a)!==0)++y
return(z&$.$get$aF().a)!==0?y+4:y},
ji:function(a){var z,y,x
z=$.$get$a9()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$ay()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aG()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$as()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aH()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bE()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bF()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b_()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aF()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fn()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aQ))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.o])
y=this.a
if((y&$.$get$a9().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$ay().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aG().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$as().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aH().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bE().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bF().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b_().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aF().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.G(z,"|")},
n:{
ar:function(a){return new Z.aQ(a)}}}}],["","",,D,{"^":"",dZ:{"^":"b;"},ao:{"^":"b;0a,0b,0c,0d",
sae:function(a){this.a=H.i(a,"$isa",[{func:1,ret:-1,args:[D.w]}],"$asa")},
sb8:function(a){this.b=H.i(a,"$isa",[{func:1,ret:-1,args:[D.w]}],"$asa")},
h:function(a,b){var z={func:1,ret:-1,args:[D.w]}
H.n(b,z)
if(this.a==null)this.sae(H.c([],[z]))
z=this.a;(z&&C.a).h(z,b)},
H:function(a,b){var z,y
H.n(b,{func:1,ret:-1,args:[D.w]})
z=this.a
z=z==null?null:C.a.aD(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).H(z,b)||!1}else y=!1
return y},
E:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w)w=!0
else w=!1
if(w)return!1
if(a==null){a=new D.w(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.a1(y,new D.hW(z))
return!0},
ee:function(){return this.E(null)},
km:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.E(y)}}},
ah:function(){return this.km(!0,!1)},
n:{
A:function(){var z=new D.ao()
z.sae(null)
z.sb8(null)
z.c=null
z.d=0
return z}}},hW:{"^":"q:30;a",
$1:function(a){var z
H.n(a,{func:1,ret:-1,args:[D.w]})
z=this.a.a
z.b
a.$1(z)}},w:{"^":"b;a,0b"},bZ:{"^":"w;c,d,a,0b,$ti"},c_:{"^":"w;c,d,a,0b,$ti"},v:{"^":"w;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",dX:{"^":"b;a,b",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dX))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},er:{"^":"b;a,b",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.er))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},ij:{"^":"b;0a,0b,0c,0d",
si6:function(a){this.d=H.i(a,"$iseN",[P.k],"$aseN")},
ka:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
k6:function(a){this.c=a.b
this.d.H(0,a.a)
return!1}},eu:{"^":"cn;x,y,c,d,e,a,0b"},iB:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
b7:function(a,b){var z,y,x,w,v,u,t,s
z=new P.am(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.k()
v=b.b
u=this.ch
if(typeof v!=="number")return v.k()
t=new V.a6(y.a+x*w,y.b+v*u)
u=this.a.gb1()
s=new X.c1(a,V.aM(),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cZ:function(a,b){this.r=a.a
return!1},
bl:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.fq()
if(typeof z!=="number")return z.c7()
this.r=(z&~y)>>>0
return!1},
bk:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.b7(a,b))
return!0},
kb:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gb1()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.k()
t=a.b
s=this.cy
if(typeof t!=="number")return t.k()
w=new X.d7(new V.X(v*u,t*s),y,x,new P.am(w,!1),this)
w.b=!0
z.E(w)
return!0},
hS:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.am(Date.now(),!1)
y=this.f
x=new X.eu(c,a,this.a.gb1(),b,z,this)
x.b=!0
y.E(x)
this.y=z
this.x=V.aM()}},aL:{"^":"b;a,b,c",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aL))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},c1:{"^":"cn;x,y,z,Q,ch,c,d,e,a,0b"},iR:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
ck:function(a,b,c){var z,y,x
z=new P.am(Date.now(),!1)
y=this.a.gb1()
x=new X.c1(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cZ:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.E(this.ck(a,b,!0))
return!0},
bl:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.fq()
if(typeof z!=="number")return z.c7()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.E(this.ck(a,b,!0))
return!0},
bk:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.ck(a,b,!1))
return!0},
kc:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gb1()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.k()
u=a.b
t=this.ch
if(typeof u!=="number")return u.k()
x=new X.d7(new V.X(w*v,u*t),y,b,new P.am(x,!1),this)
x.b=!0
z.E(x)
return!0}},d7:{"^":"cn;x,c,d,e,a,0b"},cn:{"^":"w;"},f1:{"^":"cn;x,y,z,Q,ch,c,d,e,a,0b"},jW:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
b7:function(a,b){var z,y,x,w
H.i(a,"$isa",[V.a6],"$asa")
z=new P.am(Date.now(),!1)
y=a.length>0?a[0]:V.aM()
x=this.a.gb1()
w=new X.f1(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
k9:function(a){var z
H.i(a,"$isa",[V.a6],"$asa")
z=this.b
if(z==null)return!1
z.E(this.b7(a,!0))
return!0},
k7:function(a){var z
H.i(a,"$isa",[V.a6],"$asa")
z=this.c
if(z==null)return!1
z.E(this.b7(a,!0))
return!0},
k8:function(a){var z
H.i(a,"$isa",[V.a6],"$asa")
z=this.d
if(z==null)return!1
z.E(this.b7(a,!1))
return!0}},ki:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
she:function(a){this.z=H.i(a,"$isa",[[P.de,P.b]],"$asa")},
gb1:function(){var z=this.a
return V.bz(0,0,C.n.ge8(z).c,C.n.ge8(z).d)},
dv:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.er(z,new X.aL(y,a.altKey,a.shiftKey))},
aZ:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aL(y,a.altKey,a.shiftKey)},
cz:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aL(y,a.altKey,a.shiftKey)},
aO:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.N()
v=z.top
if(typeof x!=="number")return x.N()
return new V.a6(y-w,x-v)},
b9:function(a){return new V.X(a.movementX,a.movementY)},
cr:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.a6])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
t=C.i.a2(u.pageX)
C.i.a2(u.pageY)
s=z.left
C.i.a2(u.pageX)
C.a.h(y,new V.a6(t-s,C.i.a2(u.pageY)-z.top))}return y},
aL:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dX(z,new X.aL(y,a.altKey,a.shiftKey))},
cn:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.N()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.N()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
kY:[function(a){this.f=!0},"$1","ghO",4,0,11],
kQ:[function(a){this.f=!1},"$1","ghG",4,0,11],
kT:[function(a){H.h(a,"$isaw")
if(this.f&&this.cn(a))a.preventDefault()},"$1","ghJ",4,0,4],
l_:[function(a){var z
H.h(a,"$isbu")
if(!this.f)return
z=this.dv(a)
this.b.ka(z)},"$1","ghQ",4,0,25],
kZ:[function(a){var z
H.h(a,"$isbu")
if(!this.f)return
z=this.dv(a)
this.b.k6(z)},"$1","ghP",4,0,25],
l1:[function(a){var z,y,x,w
H.h(a,"$isaw")
z=this.a
z.focus()
this.f=!0
this.aZ(a)
if(this.x){y=this.aL(a)
x=this.b9(a)
if(this.d.cZ(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aL(a)
w=this.aO(a)
if(this.c.cZ(y,w))a.preventDefault()},"$1","ghT",4,0,4],
l3:[function(a){var z,y,x
H.h(a,"$isaw")
this.aZ(a)
z=this.aL(a)
if(this.x){y=this.b9(a)
if(this.d.bl(z,y))a.preventDefault()
return}if(this.r)return
x=this.aO(a)
if(this.c.bl(z,x))a.preventDefault()},"$1","ghV",4,0,4],
kV:[function(a){var z,y,x
H.h(a,"$isaw")
if(!this.cn(a)){this.aZ(a)
z=this.aL(a)
if(this.x){y=this.b9(a)
if(this.d.bl(z,y))a.preventDefault()
return}if(this.r)return
x=this.aO(a)
if(this.c.bl(z,x))a.preventDefault()}},"$1","ghL",4,0,4],
l2:[function(a){var z,y,x
H.h(a,"$isaw")
this.aZ(a)
z=this.aL(a)
if(this.x){y=this.b9(a)
if(this.d.bk(z,y))a.preventDefault()
return}if(this.r)return
x=this.aO(a)
if(this.c.bk(z,x))a.preventDefault()},"$1","ghU",4,0,4],
kU:[function(a){var z,y,x
H.h(a,"$isaw")
if(!this.cn(a)){this.aZ(a)
z=this.aL(a)
if(this.x){y=this.b9(a)
if(this.d.bk(z,y))a.preventDefault()
return}if(this.r)return
x=this.aO(a)
if(this.c.bk(z,x))a.preventDefault()}},"$1","ghK",4,0,4],
l4:[function(a){var z,y
H.h(a,"$isbG")
this.aZ(a)
z=new V.X((a&&C.H).gjv(a),C.H.gjw(a)).A(0,180)
if(this.x){if(this.d.kb(z))a.preventDefault()
return}if(this.r)return
y=this.aO(a)
if(this.c.kc(z,y))a.preventDefault()},"$1","ghW",4,0,34],
l5:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.aL(this.y)
x=this.aO(this.y)
this.d.hS(y,x,z)}},"$1","ghX",4,0,11],
ld:[function(a){var z
H.h(a,"$isbd")
this.a.focus()
this.f=!0
this.cz(a)
z=this.cr(a)
if(this.e.k9(z))a.preventDefault()},"$1","gi4",4,0,12],
lb:[function(a){var z
H.h(a,"$isbd")
this.cz(a)
z=this.cr(a)
if(this.e.k7(z))a.preventDefault()},"$1","gi2",4,0,12],
lc:[function(a){var z
H.h(a,"$isbd")
this.cz(a)
z=this.cr(a)
if(this.e.k8(z))a.preventDefault()},"$1","gi3",4,0,12]}}],["","",,D,{"^":"",ec:{"^":"b;",$isa0:1,$isaB:1},a0:{"^":"b;",$isaB:1},il:{"^":"P;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
sfJ:function(a){this.e=H.i(a,"$isa",[D.ec],"$asa")},
sfL:function(a){this.f=H.i(a,"$isa",[D.cm],"$asa")},
sfM:function(a){this.r=H.i(a,"$isa",[D.eP],"$asa")},
sfN:function(a){this.x=H.i(a,"$isa",[D.eV],"$asa")},
sfO:function(a){this.y=H.i(a,"$isa",[D.eW],"$asa")},
sfP:function(a){this.z=H.i(a,"$isa",[D.eX],"$asa")},
gl:function(){var z=this.Q
if(z==null){z=D.A()
this.Q=z}return z},
as:function(a){var z=this.Q
if(!(z==null))z.E(a)},
hR:[function(a){var z
H.h(a,"$isw")
z=this.ch
if(!(z==null))z.E(a)},function(){return this.hR(null)},"l0","$1","$0","gdJ",0,2,0],
l6:[function(a){var z,y,x
H.i(a,"$ism",[D.a0],"$asm")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.z)(a),++y){x=a[y]
if(x==null||this.h5(x))return!1}return!0},"$1","ghY",4,0,36],
kN:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a0
H.i(b,"$ism",[z],"$asm")
for(y=b.length,x=this.gdJ(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=H.h(b[u],"$isa0")
if(t instanceof D.cm)C.a.h(this.f,t)
s=t.r
if(s==null){s=new D.ao()
s.sae(null)
s.sb8(null)
s.c=null
s.d=0
t.r=s}H.n(x,w)
if(s.a==null)s.sae(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}z=new D.bZ(a,b,this,[z])
z.b=!0
this.as(z)},"$2","ghD",8,0,23],
l8:[function(a,b){var z,y,x,w
z=D.a0
H.i(b,"$ism",[z],"$asm")
for(y=b.gU(b),x=this.gdJ();y.C();){w=y.gM()
C.a.H(this.e,w)
w.gl().H(0,x)}z=new D.c_(a,b,this,[z])
z.b=!0
this.as(z)},"$2","gi_",8,0,23],
h5:function(a){var z=C.a.aD(this.f,a)
return z},
$asm:function(){return[D.a0]},
$asP:function(){return[D.a0]}},cm:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gl:function(){var z=this.r
if(z==null){z=D.A()
this.r=z}return z},
as:[function(a){var z
H.h(a,"$isw")
z=this.r
if(!(z==null))z.E(a)},function(){return this.as(null)},"kE","$1","$0","gfK",0,2,0],
$isa0:1,
$isaB:1},eP:{"^":"b;",$isa0:1,$isaB:1},eV:{"^":"b;",$isa0:1,$isaB:1},eW:{"^":"b;",$isa0:1,$isaB:1},eX:{"^":"b;",$isa0:1,$isaB:1}}],["","",,V,{"^":"",
mQ:[function(a,b){if(typeof b!=="number")return b.N()
if(typeof a!=="number")return H.y(a)
return Math.abs(b-a)<=1e-9},"$2","iP",8,0,33],
cL:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.i.ay(a-b,z)
return(a<0?a+z:a)+b},
E:function(a,b,c){if(a==null)return C.c.aq("null",c)
return C.c.aq(C.i.f3($.l.$2(a,0)?0:a,b),c+b+1)},
bj:function(a,b,c){var z,y,x,w,v,u
H.i(a,"$isa",[P.r],"$asa")
z=H.c([],[P.o])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.z)(a),++w){v=V.E(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.d(z,u)
C.a.q(z,u,C.c.aq(z[u],x))}return z},
bP:function(a,b){return C.i.ks(Math.pow(b,C.Q.bg(Math.log(H.m4(a))/Math.log(b))))},
U:{"^":"b;a,b,c",
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}},
av:{"^":"b;a,b,c,d",
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.av))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+", "+V.E(this.d,3,0)+"]"}},
d5:{"^":"b;a,b,c,d,e,f,r,x,y",
a6:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.r])
return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.d5))return!1
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
z=[P.r]
y=V.bj(H.c([this.a,this.d,this.r],z),3,0)
x=V.bj(H.c([this.b,this.e,this.x],z),3,0)
w=V.bj(H.c([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.d(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.d(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.d(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.d(y,1)
s=" "+y[1]+", "
if(1>=u)return H.d(x,1)
s=s+x[1]+", "
if(1>=t)return H.d(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.d(y,2)
z=" "+y[2]+", "
if(2>=u)return H.d(x,2)
z=z+x[2]+", "
if(2>=t)return H.d(w,2)
return s+(z+w[2]+"]")}},
ae:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a6:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.r])
return z},
eM:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if(typeof l!=="number")return l.k()
j=this.z
i=this.cx
if(typeof j!=="number")return j.k()
h=l*k-j*i
g=this.db
f=this.Q
if(typeof f!=="number")return f.k()
e=l*g-f*i
d=this.dx
c=this.ch
b=l*d-c*i
a=j*g-f*k
a0=j*d-c*k
a1=f*d-c*g
a2=v*a1-s*a0+p*a+o*b-n*e+m*h
if($.l.$2(a2,0))return V.aX()
a3=1/a2
a4=-w
a5=-i
return V.aA((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
k:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
x=this.b
w=a7.e
v=this.c
u=a7.y
if(typeof u!=="number")return H.y(u)
t=this.d
s=a7.cx
r=a7.b
q=a7.f
p=a7.z
if(typeof p!=="number")return H.y(p)
o=a7.cy
n=a7.c
m=a7.r
l=a7.Q
if(typeof l!=="number")return H.y(l)
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
if(typeof b!=="number")return b.k()
a=this.z
if(typeof a!=="number")return a.k()
a0=this.Q
if(typeof a0!=="number")return a0.k()
a1=this.ch
a2=this.cx
a3=this.cy
a4=this.db
a5=this.dx
return V.aA(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
f4:function(a){var z,y,x,w,v,u,t,s,r,q
z=C.i.k(this.a,a.gau(a))
y=C.i.k(this.b,a.gav(a))
x=C.i.k(this.c,a.gaw())
w=C.i.k(this.e,a.gau(a))
v=C.i.k(this.f,a.gav(a))
u=C.i.k(this.r,a.gaw())
t=this.y
s=a.gau(a)
if(typeof t!=="number")return t.k()
s=C.i.k(t,s)
t=this.z
r=a.gav(a)
if(typeof t!=="number")return t.k()
r=C.i.k(t,r)
t=this.Q
q=a.gaw()
if(typeof t!=="number")return t.k()
return new V.M(z+y+x,w+v+u,s+r+C.i.k(t,q))},
b5:function(a){var z,y,x,w,v,u
z=a.a
y=a.b
x=a.c
if(typeof x!=="number")return H.y(x)
w=this.y
if(typeof w!=="number")return w.k()
v=this.z
if(typeof v!=="number")return v.k()
u=this.Q
if(typeof u!=="number")return u.k()
return new V.a1(this.a*z+this.b*y+this.c*x+this.d,this.e*z+this.f*y+this.r*x+this.x,w*z+v*y+u*x+this.ch)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ae))return!1
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
i:function(a){return this.P()},
eD:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.r]
y=V.bj(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bj(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bj(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bj(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.d(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.d(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.d(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.d(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.d(y,1)
q=q+y[1]+", "
if(1>=t)return H.d(x,1)
q=q+x[1]+", "
if(1>=s)return H.d(w,1)
q=q+w[1]+", "
if(1>=r)return H.d(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.d(y,2)
u=u+y[2]+", "
if(2>=t)return H.d(x,2)
u=u+x[2]+", "
if(2>=s)return H.d(w,2)
u=u+w[2]+", "
if(2>=r)return H.d(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.d(y,3)
q=q+y[3]+", "
if(3>=t)return H.d(x,3)
q=q+x[3]+", "
if(3>=s)return H.d(w,3)
q=q+w[3]+", "
if(3>=r)return H.d(v,3)
return u+(q+v[3]+"]")},
P:function(){return this.eD("",3,0)},
F:function(a){return this.eD(a,3,0)},
n:{
aX:function(){var z=$.cl
if(z==null){z=V.aA(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.cl=z}return z},
aA:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ae(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
eB:function(a,b,c){return V.aA(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
ez:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aA(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
eA:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aA(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)}}},
a6:{"^":"b;a,b",
N:function(a,b){return new V.a6(this.a-b.a,this.b-b.b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+"]"},
n:{
aM:function(){var z=$.eI
if(z==null){z=new V.a6(0,0)
$.eI=z}return z}}},
a1:{"^":"b;a,b,c",
D:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.D()
if(typeof w!=="number")return H.y(w)
return new V.a1(this.a+z,this.b+y,x+w)},
N:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.N()
if(typeof w!=="number")return H.y(w)
return new V.a1(this.a-z,this.b-y,x-w)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"},
n:{
eJ:function(){var z=$.aY
if(z==null){z=new V.a1(0,0,0)
$.aY=z}return z}}},
b7:{"^":"b;a,b,c,d",
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b7))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+", "+V.E(this.d,3,0)+"]"}},
cp:{"^":"b;a,b,c,d",
gaG:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cp))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
z=b.d
if(!$.l.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+", "+V.E(this.d,3,0)+"]"},
n:{
da:function(){var z=$.bA
if(z==null){z=V.bz(0,0,1,1)
$.bA=z}return z},
bz:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cp(a,b,c,d)}}},
X:{"^":"b;a,b",
jO:[function(a){return Math.sqrt(this.I(this))},"$0","gp",1,0,18],
I:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.y(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.y(w)
return z*y+x*w},
k:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.k()
y=this.b
if(typeof y!=="number")return y.k()
return new V.X(z*b,y*b)},
A:function(a,b){var z,y
if($.l.$2(b,0)){z=$.fj
if(z==null){z=new V.X(0,0)
$.fj=z}return z}z=this.a
if(typeof z!=="number")return z.A()
y=this.b
if(typeof y!=="number")return y.A()
return new V.X(z/b,y/b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+"]"}},
M:{"^":"b;a,b,c",
jO:[function(a){return Math.sqrt(this.I(this))},"$0","gp",1,0,18],
I:function(a){var z,y
z=this.c
y=a.c
if(typeof z!=="number")return z.k()
if(typeof y!=="number")return H.y(y)
return this.a*a.a+this.b*a.b+z*y},
cW:function(a,b){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=a.c
if(typeof w!=="number")return w.N()
if(typeof x!=="number")return H.y(x)
return new V.M(z+b*(a.a-z),y+b*(a.b-y),x+b*(w-x))},
bc:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
if(typeof y!=="number")return H.y(y)
x=this.c
w=a.b
if(typeof x!=="number")return x.k()
v=a.a
u=this.a
return new V.M(z*y-x*w,x*v-u*y,u*w-z*v)},
D:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.D()
if(typeof w!=="number")return H.y(w)
return new V.M(this.a+z,this.b+y,x+w)},
S:function(a){var z=this.c
if(typeof z!=="number")return z.S()
return new V.M(-this.a,-this.b,-z)},
k:function(a,b){var z=this.c
if(typeof z!=="number")return z.k()
return new V.M(this.a*b,this.b*b,z*b)},
A:function(a,b){var z
if($.l.$2(b,0))return V.bD()
z=this.c
if(typeof z!=="number")return z.A()
return new V.M(this.a/b,this.b/b,z/b)},
eN:function(){if(!$.l.$2(0,this.a))return!1
if(!$.l.$2(0,this.b))return!1
if(!$.l.$2(0,this.c))return!1
return!0},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.M))return!1
z=b.a
if(!$.l.$2(z,this.a))return!1
z=b.b
if(!$.l.$2(z,this.b))return!1
z=b.c
if(!$.l.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"},
n:{
bD:function(){var z=$.fm
if(z==null){z=new V.M(0,0,0)
$.fm=z}return z}}}}],["","",,U,{"^":"",hy:{"^":"dZ;0a,0b,0c,0d,0e,0f,0r,0x,0y",
cf:function(a){var z=V.cL(a,this.c,this.b)
return z},
gl:function(){var z=this.y
if(z==null){z=D.A()
this.y=z}return z},
O:function(a){var z=this.y
if(!(z==null))z.E(a)},
sfa:function(a,b){},
seO:function(a){var z,y
z=this.b
if(!$.l.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.cf(z)}z=new D.v("maximumLocation",y,this.b,this,[P.r])
z.b=!0
this.O(z)}},
seQ:function(a){var z,y
z=this.c
if(!$.l.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.cf(z)}z=new D.v("minimumLocation",y,this.c,this,[P.r])
z.b=!0
this.O(z)}},
sa9:function(a,b){var z,y
b=this.cf(b)
z=this.d
if(!$.l.$2(z,b)){y=this.d
this.d=b
z=new D.v("location",y,b,this,[P.r])
z.b=!0
this.O(z)}},
seP:function(a){var z,y,x
z=this.e
if(!$.l.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.v("maximumVelocity",y,a,this,[P.r])
z.b=!0
this.O(z)}},
sa3:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.l.$2(z,a)){x=this.f
this.f=a
z=new D.v("velocity",x,a,this,[P.r])
z.b=!0
this.O(z)}},
se9:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.l.$2(z,a)){y=this.x
this.x=a
z=new D.v("dampening",y,a,this,[P.r])
z.b=!0
this.O(z)}},
ab:function(a){var z,y,x,w
z=this.f
if($.l.$2(z,0)){z=this.r
z=!$.l.$2(z,0)}else z=!0
if(z){y=this.f+this.r*a
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa9(0,this.d+y*a)
z=this.x
if(!$.l.$2(z,0)){w=y*Math.pow(1-this.x,a)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sa3(y)}},
n:{
e0:function(){var z=new U.hy()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},e1:{"^":"aa;0a,0b",
gl:function(){var z=this.b
if(z==null){z=D.A()
this.b=z}return z},
aI:function(a,b){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e1))return!1
return J.F(this.a,b.a)},
i:function(a){return"Constant: "+this.a.F("          ")},
n:{
e2:function(a){var z=new U.e1()
z.a=a
return z}}},ei:{"^":"P;0e,0f,0r,0a,0b,0c,0d",
gl:function(){var z=this.e
if(z==null){z=D.A()
this.e=z}return z},
O:[function(a){var z
H.h(a,"$isw")
z=this.e
if(!(z==null))z.E(a)},function(){return this.O(null)},"aX","$1","$0","gbz",0,2,0],
kF:[function(a,b){var z,y,x,w,v,u,t,s
z=U.aa
H.i(b,"$ism",[z],"$asm")
for(y=b.length,x=this.gbz(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){s=t.gl()
s.toString
H.n(x,w)
if(s.a==null)s.sae(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.bZ(a,b,this,[z])
z.b=!0
this.O(z)},"$2","gfQ",8,0,22],
l7:[function(a,b){var z,y,x
z=U.aa
H.i(b,"$ism",[z],"$asm")
for(y=b.gU(b),x=this.gbz();y.C();)y.gM().gl().H(0,x)
z=new D.c_(a,b,this,[z])
z.b=!0
this.O(z)},"$2","ghZ",8,0,22],
aI:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(typeof z!=="number")return z.V()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.ak(z,z.length,0,[H.u(z,0)]),x=null;z.C();){y=z.d
if(y!=null){w=y.aI(a,b)
if(w!=null)x=x==null?w:w.k(0,x)}}this.f=x==null?V.aX():x
z=this.e
if(!(z==null))z.ah()}return this.f},
v:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ei))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.d(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.d(w,y)
if(!J.F(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asm:function(){return[U.aa]},
$asP:function(){return[U.aa]},
$isaa:1,
n:{
ej:function(a){var z=new U.ei()
z.bu(U.aa)
z.aS(z.gfQ(),z.ghZ())
z.ba(0,a)
z.e=null
z.f=V.aX()
z.r=0
return z}}},aa:{"^":"dZ;"},eM:{"^":"aa;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gl:function(){var z=this.y
if(z==null){z=D.A()
this.y=z}return z},
O:function(a){var z=this.y
if(!(z==null))z.E(a)},
sfd:function(a){var z,y
a=V.cL(a,0,6.283185307179586)
z=this.a
if(!$.l.$2(z,a)){y=this.a
this.a=a
z=new D.v("yaw",y,a,this,[P.r])
z.b=!0
this.O(z)}},
seW:function(a){var z,y
a=V.cL(a,0,6.283185307179586)
z=this.b
if(!$.l.$2(z,a)){y=this.b
this.b=a
z=new D.v("pitch",y,a,this,[P.r])
z.b=!0
this.O(z)}},
seZ:function(a){var z,y
a=V.cL(a,0,6.283185307179586)
z=this.c
if(!$.l.$2(z,a)){y=this.c
this.c=a
z=new D.v("roll",y,a,this,[P.r])
z.b=!0
this.O(z)}},
aI:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.d
this.sfd(this.a+this.d*a.y)
this.seW(this.b+this.e*a.y)
this.seZ(this.c+this.f*a.y)
z=this.c
x=Math.cos(z)
w=Math.sin(z)
this.x=V.aA(x,-w,0,0,w,x,0,0,0,0,1,0,0,0,0,1).k(0,V.eA(this.b)).k(0,V.ez(this.a))
z=this.y
if(!(z==null))z.ah()}return this.x},
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eM))return!1
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
i:function(a){return"Rotater: ["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"], ["+V.E(this.d,3,0)+", "+V.E(this.e,3,0)+", "+V.E(this.f,3,0)+"]"}},kj:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gl:function(){var z=this.fx
if(z==null){z=D.A()
this.fx=z}return z},
O:[function(a){var z
H.h(a,"$isw")
z=this.fx
if(!(z==null))z.E(a)},function(){return this.O(null)},"aX","$1","$0","gbz",0,2,0],
cC:function(a){var z,y
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.b
if(y==null){y=D.A()
z.b=y
z=y}else z=y
z.h(0,this.ghz())
z=this.a.c
y=z.d
if(y==null){y=D.A()
z.d=y
z=y}else z=y
z.h(0,this.ghA())
z=this.a.c
y=z.c
if(y==null){y=D.A()
z.c=y
z=y}else z=y
z.h(0,this.ghB())
z=this.a.d
y=z.f
if(y==null){y=D.A()
z.f=y
z=y}else z=y
z.h(0,this.ghx())
z=this.a.d
y=z.d
if(y==null){y=D.A()
z.d=y
z=y}else z=y
z.h(0,this.ghy())
z=this.a.e
y=z.b
if(y==null){y=D.A()
z.b=y
z=y}else z=y
z.h(0,this.giK())
z=this.a.e
y=z.d
if(y==null){y=D.A()
z.d=y
z=y}else z=y
z.h(0,this.giJ())
z=this.a.e
y=z.c
if(y==null){y=D.A()
z.c=y
z=y}else z=y
z.h(0,this.giI())
return!0},
aA:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.S()
z=-z}if(this.r){if(typeof y!=="number")return y.S()
y=-y}return new V.X(z,y)},
kJ:[function(a){a=H.e(H.h(a,"$isw"),"$isc1")
if(!J.F(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghz",4,0,2],
kK:[function(a){var z,y,x,w,v,u,t
a=H.e(H.h(a,"$isw"),"$isc1")
if(!this.cx)return
if(this.ch){z=a.d.N(0,a.y)
z=new V.X(z.a,z.b)
z=z.I(z)
y=this.Q
if(typeof y!=="number")return H.y(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.N(0,a.y)
z=this.aA(new V.X(y.a,y.b).k(0,2).A(0,z.gaG()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.S()
x=this.y
if(typeof x!=="number")return H.y(x)
y.sa3(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.S()
y=this.x
if(typeof y!=="number")return H.y(y)
x.sa3(-z*10*y)}else{z=a.c
y=a.d
x=y.N(0,a.y)
w=this.aA(new V.X(x.a,x.b).k(0,2).A(0,z.gaG()))
x=this.c
v=w.a
if(typeof v!=="number")return v.S()
u=this.y
if(typeof u!=="number")return H.y(u)
t=this.cy
if(typeof t!=="number")return H.y(t)
x.sa9(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.S()
v=this.x
if(typeof v!=="number")return H.y(v)
x=this.db
if(typeof x!=="number")return H.y(x)
t.sa9(0,-u*v+x)
this.b.sa3(0)
this.c.sa3(0)
y=y.N(0,a.z)
this.dx=this.aA(new V.X(y.a,y.b).k(0,2).A(0,z.gaG()))}this.aX()},"$1","ghA",4,0,2],
kL:[function(a){var z,y,x
H.h(a,"$isw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.I(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.S()
x=this.y
if(typeof x!=="number")return H.y(x)
z.sa3(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.S()
z=this.x
if(typeof z!=="number")return H.y(z)
x.sa3(-y*10*z)
this.aX()}},"$1","ghB",4,0,2],
kH:[function(a){if(H.e(H.h(a,"$isw"),"$iseu").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","ghx",4,0,2],
kI:[function(a){var z,y,x,w,v,u,t
a=H.e(H.h(a,"$isw"),"$isc1")
if(!J.F(this.d,a.x.b))return
z=a.c
y=a.d
x=y.N(0,a.y)
w=this.aA(new V.X(x.a,x.b).k(0,2).A(0,z.gaG()))
x=this.c
v=w.a
if(typeof v!=="number")return v.S()
u=this.y
if(typeof u!=="number")return H.y(u)
t=this.cy
if(typeof t!=="number")return H.y(t)
x.sa9(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.S()
v=this.x
if(typeof v!=="number")return H.y(v)
x=this.db
if(typeof x!=="number")return H.y(x)
t.sa9(0,-u*v+x)
this.b.sa3(0)
this.c.sa3(0)
y=y.N(0,a.z)
this.dx=this.aA(new V.X(y.a,y.b).k(0,2).A(0,z.gaG()))
this.aX()},"$1","ghy",4,0,2],
lh:[function(a){H.h(a,"$isw")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","giK",4,0,2],
lg:[function(a){var z,y,x,w,v,u,t
a=H.e(H.h(a,"$isw"),"$isf1")
if(!this.cx)return
if(this.ch){z=a.d.N(0,a.y)
z=new V.X(z.a,z.b)
z=z.I(z)
y=this.Q
if(typeof y!=="number")return H.y(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.N(0,a.y)
z=this.aA(new V.X(y.a,y.b).k(0,2).A(0,z.gaG()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.S()
x=this.y
if(typeof x!=="number")return H.y(x)
y.sa3(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.S()
y=this.x
if(typeof y!=="number")return H.y(y)
x.sa3(-z*10*y)}else{z=a.c
y=a.d
x=y.N(0,a.y)
w=this.aA(new V.X(x.a,x.b).k(0,2).A(0,z.gaG()))
x=this.c
v=w.a
if(typeof v!=="number")return v.S()
u=this.y
if(typeof u!=="number")return H.y(u)
t=this.cy
if(typeof t!=="number")return H.y(t)
x.sa9(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.S()
v=this.x
if(typeof v!=="number")return H.y(v)
x=this.db
if(typeof x!=="number")return H.y(x)
t.sa9(0,-u*v+x)
this.b.sa3(0)
this.c.sa3(0)
y=y.N(0,a.z)
this.dx=this.aA(new V.X(y.a,y.b).k(0,2).A(0,z.gaG()))}this.aX()},"$1","giJ",4,0,2],
lf:[function(a){var z,y,x
H.h(a,"$isw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.I(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.S()
x=this.y
if(typeof x!=="number")return H.y(x)
z.sa3(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.S()
z=this.x
if(typeof z!=="number")return H.y(z)
x.sa3(-y*10*z)
this.aX()}},"$1","giI",4,0,2],
aI:function(a,b){var z,y,x
z=this.dy
y=a.e
if(typeof z!=="number")return z.V()
if(z<y){this.dy=y
x=a.y
this.c.ab(x)
this.b.ab(x)
this.fr=V.ez(this.b.d).k(0,V.eA(this.c.d))}return this.fr},
$isaa:1},kk:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gl:function(){var z=this.r
if(z==null){z=D.A()
this.r=z}return z},
O:function(a){var z=this.r
if(!(z==null))z.E(a)},
cC:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.A()
z.e=y
z=y}else z=y
y=this.ghC()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.A()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
kM:[function(a){var z,y,x,w
H.h(a,"$isw")
if(!J.F(this.b,this.a.b.c))return
H.e(a,"$isd7")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.k()
w=z+y*x
if(z!==w){this.d=w
z=new D.v("zoom",z,w,this,[P.r])
z.b=!0
this.O(z)}},"$1","ghC",4,0,2],
aI:function(a,b){var z,y,x
z=this.e
y=a.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aA(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isaa:1}}],["","",,M,{"^":"",hz:{"^":"P;0e,0f,0a,0b,0c,0d",
gl:function(){var z=this.f
if(z==null){z=D.A()
this.f=z}return z},
a4:[function(a){var z
H.h(a,"$isw")
z=this.f
if(!(z==null))z.E(a)},function(){return this.a4(null)},"dh","$1","$0","ga0",0,2,0],
l9:[function(a,b){var z,y,x,w,v,u,t,s
z=M.aC
H.i(b,"$ism",[z],"$asm")
for(y=b.length,x=this.ga0(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){s=t.gl()
s.toString
H.n(x,w)
if(s.a==null)s.sae(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.bZ(a,b,this,[z])
z.b=!0
this.a4(z)},"$2","gi0",8,0,20],
la:[function(a,b){var z,y,x
z=M.aC
H.i(b,"$ism",[z],"$asm")
for(y=b.gU(b),x=this.ga0();y.C();)y.gM().gl().H(0,x)
z=new D.c_(a,b,this,[z])
z.b=!0
this.a4(z)},"$2","gi1",8,0,20],
aa:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.ak(z,z.length,0,[H.u(z,0)]);z.C();){y=z.d
if(!(y==null))y.aa(a)}this.e=!1},
$asm:function(){return[M.aC]},
$asP:function(){return[M.aC]},
$isaC:1},hE:{"^":"b;0a,0b,0c,0d,0e,0f",
gl:function(){var z=this.f
if(z==null){z=D.A()
this.f=z}return z},
a4:[function(a){var z
H.h(a,"$isw")
z=this.f
if(!(z==null))z.E(a)},function(){return this.a4(null)},"dh","$1","$0","ga0",0,2,0],
sb4:function(a,b){var z,y
if(b==null)b=X.cY(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gl().H(0,this.ga0())
y=this.b
this.b=b
b.gl().h(0,this.ga0())
z=new D.v("target",y,this.b,this,[X.cr])
z.b=!0
this.a4(z)}},
saj:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gl().H(0,this.ga0())
y=this.c
this.c=a
if(a!=null)a.gl().h(0,this.ga0())
z=new D.v("technique",y,this.c,this,[O.aP])
z.b=!0
this.a4(z)}},
aa:function(a){var z,y
a.d1(this.c)
this.b.X(a)
z=this.a
z.toString
a.cy.c1(V.aX())
y=V.aX()
z.a
a.db.c1(y)
z=this.c
if(z!=null)z.ab(a)
this.d.ab(a)
this.d.aa(a)
this.a.toString
a.cy.bm()
a.db.bm()
this.b.toString
a.d_()},
$isaC:1,
n:{
e3:function(a,b,c){var z,y,x
z=new M.hE()
a=new X.i9()
y=z.a
z.a=a
a.gl().h(0,z.ga0())
x=new D.v("camera",y,z.a,z,[X.cc])
x.b=!0
z.a4(x)
z.sb4(0,b)
z.saj(c)
x=E.cX(null,!0,null,"",null,null)
x.scd(0,F.h6(!1,2,null,2,0))
z.d=x
z.e=null
return z}}},hU:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
sh2:function(a,b){this.d=H.i(b,"$isP",[E.an],"$asP")},
a4:[function(a){var z
H.h(a,"$isw")
z=this.x
if(!(z==null))z.E(a)},function(){return this.a4(null)},"dh","$1","$0","ga0",0,2,0],
kR:[function(a,b){var z,y,x,w,v,u,t,s
z=E.an
H.i(b,"$ism",[z],"$asm")
for(y=b.length,x=this.ga0(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){if(t.gar()==null){s=new D.ao()
s.sae(null)
s.sb8(null)
s.c=null
s.d=0
t.sar(s)}s=t.gar()
s.toString
H.n(x,w)
if(s.a==null)s.sae(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.bZ(a,b,this,[z])
z.b=!0
this.a4(z)},"$2","ghH",8,0,7],
kS:[function(a,b){var z,y,x
z=E.an
H.i(b,"$ism",[z],"$asm")
for(y=b.gU(b),x=this.ga0();y.C();)y.gM().gl().H(0,x)
z=new D.c_(a,b,this,[z])
z.b=!0
this.a4(z)},"$2","ghI",8,0,7],
scI:function(a){var z,y
if(a==null)a=X.eG(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null)z.gl().H(0,this.ga0())
y=this.a
this.a=a
a.gl().h(0,this.ga0())
z=new D.v("camera",y,this.a,this,[X.cc])
z.b=!0
this.a4(z)}},
sb4:function(a,b){var z,y
if(b==null)b=X.cY(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gl().H(0,this.ga0())
y=this.b
this.b=b
b.gl().h(0,this.ga0())
z=new D.v("target",y,this.b,this,[X.cr])
z.b=!0
this.a4(z)}},
saj:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gl().H(0,this.ga0())
y=this.c
this.c=a
if(a!=null)a.gl().h(0,this.ga0())
z=new D.v("technique",y,this.c,this,[O.aP])
z.b=!0
this.a4(z)}},
gl:function(){var z=this.x
if(z==null){z=D.A()
this.x=z}return z},
aa:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
a.d1(this.c)
this.b.X(a)
z=this.a
y=a.c
x=a.d
w=z.c
v=z.d
u=z.e
t=u-v
s=1/Math.tan(w*0.5)
r=V.aA(-s/(y/x),0,0,0,0,s,0,0,0,0,u/t,-u*v/t,0,0,1,0)
z.a
a.cy.c1(r)
y=$.eH
if(y==null){y=V.eJ()
x=$.fl
if(x==null){x=new V.M(0,1,0)
$.fl=x}w=$.fk
if(w==null){w=new V.M(0,0,-1)
$.fk=w}q=w.A(0,Math.sqrt(w.I(w)))
x=x.bc(q)
p=x.A(0,Math.sqrt(x.I(x)))
o=q.bc(p)
n=new V.M(y.a,y.b,y.c)
m=p.S(0).I(n)
l=o.S(0).I(n)
k=q.S(0).I(n)
y=V.aA(p.a,o.a,q.a,m,p.b,o.b,q.b,l,p.c,o.c,q.c,k,0,0,0,1)
$.eH=y
j=y}else j=y
y=z.b
if(y!=null){i=y.aI(a,z)
if(i!=null)j=i.k(0,j)}a.db.c1(j)
z=this.c
if(z!=null)z.ab(a)
for(z=this.d.a,z=new J.ak(z,z.length,0,[H.u(z,0)]);z.C();)z.d.ab(a)
for(z=this.d.a,z=new J.ak(z,z.length,0,[H.u(z,0)]);z.C();)z.d.aa(a)
this.a.toString
a.cy.bm()
a.db.bm()
this.b.aR(a)
a.d_()},
$isaC:1,
n:{
ef:function(a,b,c,d){var z=new M.hU()
z.sh2(0,O.cd(E.an))
z.d.aS(z.ghH(),z.ghI())
z.e=null
z.f=null
z.r=null
z.x=null
z.scI(a)
z.sb4(0,c)
z.saj(d)
z.d.ba(0,b)
return z}}},aC:{"^":"b;"}}],["","",,A,{"^":"",dR:{"^":"b;a,b,c"},hk:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
jA:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
C.b.ef(w.a,w.c)}},
bJ:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
C.b.ed(w.a,w.c)}}},e6:{"^":"bB;0z,0Q,0ch,0cx,0cy,0db,0dx,a,b,0c,0d,0e,0f,0r,0x,0y"},eh:{"^":"bB;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,a,b,0c,0d,0e,0f,0r,0x,0y",
af:function(a,b,c){if(c==null||!c.d)C.b.L(b.a,b.d,1)
else{a.dc(c)
C.b.L(b.a,b.d,0)}}},ew:{"^":"bB;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aE,0ax,0bK,0eg,0bL,0bM,0eh,0ei,0bN,0bO,0ej,0ek,0bP,0bQ,0el,0em,0bR,0en,0eo,0bS,0ep,0eq,0bT,0bU,0bV,0er,0es,0bW,0bX,0eu,0ev,0bY,0ew,0cM,0ex,0cN,0ey,0cO,0ez,0cP,0eA,0cQ,0eB,0cR,a,b,0c,0d,0e,0f,0r,0x,0y",
sfX:function(a){this.r1=H.i(a,"$isa",[A.a8],"$asa")},
shb:function(a){this.cM=H.i(a,"$isa",[A.dl],"$asa")},
si5:function(a){this.cN=H.i(a,"$isa",[A.dm],"$asa")},
siy:function(a){this.cO=H.i(a,"$isa",[A.dn],"$asa")},
siM:function(a){this.cP=H.i(a,"$isa",[A.dp],"$asa")},
siN:function(a){this.cQ=H.i(a,"$isa",[A.dq],"$asa")},
siO:function(a){this.cR=H.i(a,"$isa",[A.dr],"$asa")},
fA:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.z=a1
z=new P.ap("")
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
a1.iT(z)
a1.j_(z)
a1.iU(z)
a1.j7(z)
a1.j8(z)
a1.j1(z)
a1.jc(z)
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
z=new P.ap("")
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
v.iX(z)
v.iS(z)
v.iV(z)
v.iY(z)
v.j5(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.j3(z)
v.j4(z)}v.j0(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
if(q!==C.d){r+="uniform float alpha;\n"
z.a=r
if(q!==C.j){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.f){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.h){r+="uniform samplerCube alphaTxt;\n"
z.a=r}}r+="\n"
z.a=r}r+="float alphaValue()\n"
z.a=r
r+="{\n"
z.a=r
switch(q){case C.d:r+="   return 1.0;\n"
z.a=r
break
case C.j:r+="   return alpha;\n"
z.a=r
break
case C.f:r+="   if(nullAlphaTxt > 0) return alpha;\n"
z.a=r
r+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
z.a=r
r+="   if (a <= 0.000001) discard;\n"
z.a=r
r+="   return a;\n"
z.a=r
break
case C.h:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
if(v.b!==C.d)C.a.h(p,"ambient()")
if(v.c!==C.d)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.d)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.d)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.G(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.iW(z)
v.j2(z)
v.j6(z)
v.j9(z)
v.ja(z)
v.jb(z)
v.iZ(z)}r=z.a+="// === Main ===\n"
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
if(v.c!==C.d)z.a+="   setDiffuseColor();\n"
if(v.d!==C.d)z.a+="   setInvDiffuseColor();\n"
if(v.e!==C.d)z.a+="   setSpecularColor();\n"
if(v.z>0)z.a+="   lightAccum += allDirLightValues(norm);\n"
if(v.Q>0)z.a+="   lightAccum += allPointLightValues(norm);\n"
if(v.ch>0)z.a+="   lightAccum += allSpotLightValues(norm);\n"
if(v.cx>0)z.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(v.cy>0)z.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(v.db>0)z.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(v.dx<=0)z.a+="   lightAccum += nonLightValues(norm);\n"}if(v.a!==C.d)C.a.h(o,"emission()")
if(v.r!==C.d)C.a.h(o,"reflect(refl)")
if(v.x!==C.d)C.a.h(o,"refract(refl)")
if(o.length<=0)C.a.h(o,"vec3(0.0, 0.0, 0.0)")
n="vec4("+C.a.G(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.bZ(x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a1.fr)this.id=H.e(this.y.m(0,"invViewMat"),"$isa8")
if(y)this.dy=H.e(this.y.m(0,"objMat"),"$isa8")
if(w)this.fr=H.e(this.y.m(0,"viewObjMat"),"$isa8")
this.fy=H.e(this.y.m(0,"projViewObjMat"),"$isa8")
if(a1.x2)this.k1=H.e(this.y.m(0,"txt2DMat"),"$isct")
if(a1.y1)this.k2=H.e(this.y.m(0,"txtCubeMat"),"$isa8")
if(a1.y2)this.k3=H.e(this.y.m(0,"colorMat"),"$isa8")
this.sfX(H.c([],[A.a8]))
y=a1.aE
if(y>0){this.k4=H.h(this.y.m(0,"bendMatCount"),"$isB")
for(m=0;m<y;++m){x=this.r1
w=this.y
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.p(P.t("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.e(l,"$isa8"))}}y=a1.a
if(y!==C.d){this.r2=H.e(this.y.m(0,"emissionClr"),"$isD")
switch(y){case C.d:break
case C.j:break
case C.f:this.rx=H.e(this.y.m(0,"emissionTxt"),"$isa2")
this.x1=H.e(this.y.m(0,"nullEmissionTxt"),"$isB")
break
case C.h:this.ry=H.e(this.y.m(0,"emissionTxt"),"$isaq")
this.x1=H.e(this.y.m(0,"nullEmissionTxt"),"$isB")
break}}y=a1.b
if(y!==C.d){this.x2=H.e(this.y.m(0,"ambientClr"),"$isD")
switch(y){case C.d:break
case C.j:break
case C.f:this.y1=H.e(this.y.m(0,"ambientTxt"),"$isa2")
this.aE=H.e(this.y.m(0,"nullAmbientTxt"),"$isB")
break
case C.h:this.y2=H.e(this.y.m(0,"ambientTxt"),"$isaq")
this.aE=H.e(this.y.m(0,"nullAmbientTxt"),"$isB")
break}}y=a1.c
if(y!==C.d){this.ax=H.e(this.y.m(0,"diffuseClr"),"$isD")
switch(y){case C.d:break
case C.j:break
case C.f:this.bK=H.e(this.y.m(0,"diffuseTxt"),"$isa2")
this.bL=H.e(this.y.m(0,"nullDiffuseTxt"),"$isB")
break
case C.h:this.eg=H.e(this.y.m(0,"diffuseTxt"),"$isaq")
this.bL=H.e(this.y.m(0,"nullDiffuseTxt"),"$isB")
break}}y=a1.d
if(y!==C.d){this.bM=H.e(this.y.m(0,"invDiffuseClr"),"$isD")
switch(y){case C.d:break
case C.j:break
case C.f:this.eh=H.e(this.y.m(0,"invDiffuseTxt"),"$isa2")
this.bN=H.e(this.y.m(0,"nullInvDiffuseTxt"),"$isB")
break
case C.h:this.ei=H.e(this.y.m(0,"invDiffuseTxt"),"$isaq")
this.bN=H.e(this.y.m(0,"nullInvDiffuseTxt"),"$isB")
break}}y=a1.e
if(y!==C.d){this.bQ=H.e(this.y.m(0,"shininess"),"$isL")
this.bO=H.e(this.y.m(0,"specularClr"),"$isD")
switch(y){case C.d:break
case C.j:break
case C.f:this.ej=H.e(this.y.m(0,"specularTxt"),"$isa2")
this.bP=H.e(this.y.m(0,"nullSpecularTxt"),"$isB")
break
case C.h:this.ek=H.e(this.y.m(0,"specularTxt"),"$isaq")
this.bP=H.e(this.y.m(0,"nullSpecularTxt"),"$isB")
break}}switch(a1.f){case C.d:break
case C.j:break
case C.f:this.el=H.e(this.y.m(0,"bumpTxt"),"$isa2")
this.bR=H.e(this.y.m(0,"nullBumpTxt"),"$isB")
break
case C.h:this.em=H.e(this.y.m(0,"bumpTxt"),"$isaq")
this.bR=H.e(this.y.m(0,"nullBumpTxt"),"$isB")
break}if(a1.dy){this.en=H.e(this.y.m(0,"envSampler"),"$isaq")
this.eo=H.e(this.y.m(0,"nullEnvTxt"),"$isB")
y=a1.r
if(y!==C.d){this.bS=H.e(this.y.m(0,"reflectClr"),"$isD")
switch(y){case C.d:break
case C.j:break
case C.f:this.ep=H.e(this.y.m(0,"reflectTxt"),"$isa2")
this.bT=H.e(this.y.m(0,"nullReflectTxt"),"$isB")
break
case C.h:this.eq=H.e(this.y.m(0,"reflectTxt"),"$isaq")
this.bT=H.e(this.y.m(0,"nullReflectTxt"),"$isB")
break}}y=a1.x
if(y!==C.d){this.bU=H.e(this.y.m(0,"refraction"),"$isL")
this.bV=H.e(this.y.m(0,"refractClr"),"$isD")
switch(y){case C.d:break
case C.j:break
case C.f:this.er=H.e(this.y.m(0,"refractTxt"),"$isa2")
this.bW=H.e(this.y.m(0,"nullRefractTxt"),"$isB")
break
case C.h:this.es=H.e(this.y.m(0,"refractTxt"),"$isaq")
this.bW=H.e(this.y.m(0,"nullRefractTxt"),"$isB")
break}}}y=a1.y
if(y!==C.d){this.bX=H.e(this.y.m(0,"alpha"),"$isL")
switch(y){case C.d:break
case C.j:break
case C.f:this.eu=H.e(this.y.m(0,"alphaTxt"),"$isa2")
this.bY=H.e(this.y.m(0,"nullAlphaTxt"),"$isB")
break
case C.h:this.ev=H.e(this.y.m(0,"alphaTxt"),"$isaq")
this.bY=H.e(this.y.m(0,"nullAlphaTxt"),"$isB")
break}}this.shb(H.c([],[A.dl]))
this.si5(H.c([],[A.dm]))
this.siy(H.c([],[A.dn]))
this.siM(H.c([],[A.dp]))
this.siN(H.c([],[A.dq]))
this.siO(H.c([],[A.dr]))
if(a1.k2){y=a1.z
if(y>0){this.ew=H.h(this.y.m(0,"dirLightCount"),"$isB")
for(m=0;m<y;++m){x=this.y
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isD")
x=this.y
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isD")
x=this.cM;(x&&C.a).h(x,new A.dl(m,l,k))}}y=a1.Q
if(y>0){this.ex=H.h(this.y.m(0,"pntLightCount"),"$isB")
for(m=0;m<y;++m){x=this.y
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isD")
x=this.y
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isD")
x=this.y
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isD")
x=this.y
w="pntLights["+m+"].att0"
i=x.j(0,w)
if(i==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isL")
x=this.y
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isL")
x=this.y
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isL")
x=this.cN;(x&&C.a).h(x,new A.dm(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.ey=H.h(this.y.m(0,"spotLightCount"),"$isB")
for(m=0;m<y;++m){x=this.y
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isD")
x=this.y
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isD")
x=this.y
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isD")
x=this.y
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isD")
x=this.y
w="spotLights["+m+"].cutoff"
h=x.j(0,w)
if(h==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isL")
x=this.y
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isL")
x=this.y
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isL")
x=this.y
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isL")
x=this.y
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isL")
x=this.cO;(x&&C.a).h(x,new A.dn(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.ez=H.h(this.y.m(0,"txtDirLightCount"),"$isB")
for(m=0;m<y;++m){x=this.y
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isD")
x=this.y
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isD")
x=this.y
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isD")
x=this.y
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isD")
x=this.y
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isD")
x=this.y
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isB")
x=this.y
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isa2")
x=this.cP;(x&&C.a).h(x,new A.dp(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.eA=H.h(this.y.m(0,"txtPntLightCount"),"$isB")
for(m=0;m<y;++m){x=this.y
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isD")
x=this.y
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isD")
x=this.y
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isct")
x=this.y
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isD")
x=this.y
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isB")
x=this.y
w="txtPntLights["+m+"].att0"
g=x.j(0,w)
if(g==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isL")
x=this.y
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isL")
x=this.y
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isL")
x=this.y
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isaq")
x=this.cQ;(x&&C.a).h(x,new A.dq(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.eB=H.h(this.y.m(0,"txtSpotLightCount"),"$isB")
for(m=0;m<y;++m){x=this.y
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(l,"$isD")
x=this.y
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(k,"$isD")
x=this.y
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(j,"$isD")
x=this.y
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(i,"$isD")
x=this.y
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(h,"$isD")
x=this.y
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(g,"$isB")
x=this.y
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(f,"$isD")
x=this.y
w="txtSpotLights["+m+"].tuScalar"
e=x.j(0,w)
if(e==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(e,"$isL")
x=this.y
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(d,"$isL")
x=this.y
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(c,"$isL")
x=this.y
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(b,"$isL")
x=this.y
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(a,"$isL")
x=this.y
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."))
H.e(a0,"$isa2")
x=this.cR;(x&&C.a).h(x,new A.dr(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
af:function(a,b,c){if(c==null||!c.d)C.b.L(b.a,b.d,1)
else{a.dc(c)
C.b.L(b.a,b.d,0)}},
am:function(a,b,c){C.b.L(b.a,b.d,1)},
n:{
iI:function(a,b){var z,y
z=a.ax
y=new A.ew(b,z)
y.bv(b,z)
y.fA(a,b)
return y}}},iM:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aE,ax,bK",
iT:function(a){var z,y,x
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
j_:function(a){var z
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
iU:function(a){var z
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
j7:function(a){var z,y
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
j8:function(a){var z,y
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
j1:function(a){var z
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
jc:function(a){var z
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
aM:function(a,b,c){var z
if(b===C.d)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.j)return
if(0>=c.length)return H.d(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.c.aK(c,1))+"Txt;\n"
a.a=z
if(b===C.f)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
iX:function(a){var z,y
z=this.a
if(z===C.d)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aM(a,z,"emission")
y=a.a+="\n"
y+="vec3 emission()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.d:z=y
break
case C.j:z=y+"   return emissionClr;\n"
a.a=z
break
case C.f:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
iS:function(a){var z,y
z=this.b
if(z===C.d)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aM(a,z,"ambient")
y=a.a+="\n"
y+="vec3 ambient()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.d:z=y
break
case C.j:z=y+"   return ambientClr;\n"
a.a=z
break
case C.f:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
iV:function(a){var z,y
z=this.c
if(z===C.d)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aM(a,z,"diffuse")
y=a.a+="vec3 diffuseColor;\n"
y+="\n"
a.a=y
y+="void setDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.d:z=y
break
case C.j:z=y+"   diffuseColor = diffuseClr;\n"
a.a=z
break
case C.f:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=z
z+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
iY:function(a){var z,y
z=this.d
if(z===C.d)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aM(a,z,"invDiffuse")
y=a.a+="vec3 invDiffuseColor;\n"
y+="\n"
a.a=y
y+="void setInvDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.d:z=y
break
case C.j:z=y+"   invDiffuseColor = invDiffuseClr;\n"
a.a=z
break
case C.f:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=z
z+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
j5:function(a){var z,y
z=this.e
if(z===C.d)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aM(a,z,"specular")
y=a.a+="uniform float shininess;\n"
y+="vec3 specularColor;\n"
a.a=y
y+="\n"
a.a=y
y+="void setSpecularColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.d:z=y
break
case C.j:z=y+"   specularColor = specularClr;\n"
a.a=z
break
case C.f:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=z
z+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
j0:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.d:break
case C.j:break
case C.f:z+="uniform sampler2D bumpTxt;\n"
a.a=z
z+="uniform int nullBumpTxt;\n"
a.a=z
z+="\n"
a.a=z
break
case C.h:z+="uniform samplerCube bumpTxt;\n"
a.a=z
z+="uniform int nullBumpTxt;\n"
a.a=z
z+="\n"
a.a=z
break}z+="vec3 normal()\n"
a.a=z
z+="{\n"
a.a=z
switch(y){case C.d:z+="   return normalize(normalVec);\n"
a.a=z
break
case C.j:z+="   return normalize(normalVec);\n"
a.a=z
break
case C.f:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
case C.h:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
j3:function(a){var z,y
z=this.r
if(z===C.d)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aM(a,z,"reflect")
y=a.a+="\n"
y+="vec3 reflect(vec3 refl)\n"
a.a=y
y+="{\n"
a.a=y
y+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=y
switch(z){case C.d:z=y
break
case C.j:z=y+"   vec3 scalar = reflectClr;\n"
a.a=z
break
case C.f:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
j4:function(a){var z,y
z=this.x
if(z===C.d)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aM(a,z,"refract")
y=a.a+="uniform float refraction;\n"
y+="\n"
a.a=y
y+="vec3 refract(vec3 refl)\n"
a.a=y
y+="{\n"
a.a=y
y+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=y
switch(z){case C.d:z=y
break
case C.j:z=y+"   vec3 scalar = refractClr;\n"
a.a=z
break
case C.f:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=z
break
case C.h:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
iW:function(a){var z,y
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
j2:function(a){var z,y
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
j6:function(a){var z,y
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
j9:function(a){var z,y,x
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
ja:function(a){var z,y,x
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
jb:function(a){var z,y,x
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
iZ:function(a){var z
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
i:function(a){return this.ax}},dl:{"^":"b;a,b,c"},dp:{"^":"b;a,b,c,d,e,f,r,x"},dm:{"^":"b;a,b,c,d,e,f,r"},dq:{"^":"b;a,b,c,d,e,f,r,x,y,z"},dn:{"^":"b;a,b,c,d,e,f,r,x,y,z"},dr:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},bB:{"^":"cQ;",
bv:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
bZ:function(a,b){var z,y,x
this.c=a
this.d=b
this.e=this.dw(a,35633)
this.f=this.dw(this.d,35632)
z=this.a
y=z.createProgram()
this.r=y
C.b.dY(z,y,this.e)
C.b.dY(z,this.r,this.f)
C.b.jP(z,this.r)
if(!H.fW(C.b.ca(z,this.r,35714))){x=C.b.fl(z,this.r)
C.b.jt(z,this.r)
H.p(P.t("Failed to link shader: "+H.j(x)))}this.it()
this.iv()},
X:function(a){C.b.bs(a.a,this.r)
this.x.jA()},
dw:function(a,b){var z,y,x
z=this.a
y=C.b.jr(z,b)
C.b.fs(z,y,a)
C.b.jn(z,y)
if(!H.fW(C.b.fo(z,y,35713))){x=C.b.fn(z,y)
C.b.ju(z,y)
throw H.f(P.t("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
it:function(){var z,y,x,w,v,u
z=H.c([],[A.dR])
y=this.a
x=H.a3(C.b.ca(y,this.r,35721))
if(typeof x!=="number")return H.y(x)
w=0
for(;w<x;++w){v=C.b.fh(y,this.r,w)
u=C.b.fj(y,this.r,v.name)
C.a.h(z,new A.dR(y,v.name,u))}this.x=new A.hk(z)},
iv:function(){var z,y,x,w,v,u
z=H.c([],[A.ab])
y=this.a
x=H.a3(C.b.ca(y,this.r,35718))
if(typeof x!=="number")return H.y(x)
w=0
for(;w<x;++w){v=C.b.fi(y,this.r,w)
u=C.b.fp(y,this.r,v.name)
C.a.h(z,this.js(v.type,v.size,v.name,u))}this.y=new A.k4(z)},
aW:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.B(z,y,b,c)
else return A.dk(z,y,b,a,c)},
h6:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.a2(z,y,b,c)
else return A.dk(z,y,b,a,c)},
h7:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.aq(z,y,b,c)
else return A.dk(z,y,b,a,c)},
bB:function(a,b){return new P.fr(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
js:function(a,b,c,d){switch(a){case 5120:return this.aW(b,c,d)
case 5121:return this.aW(b,c,d)
case 5122:return this.aW(b,c,d)
case 5123:return this.aW(b,c,d)
case 5124:return this.aW(b,c,d)
case 5125:return this.aW(b,c,d)
case 5126:return new A.L(this.a,this.r,c,d)
case 35664:return new A.aE(this.a,this.r,c,d)
case 35665:return new A.D(this.a,this.r,c,d)
case 35666:return new A.fd(this.a,this.r,c,d)
case 35667:return new A.k1(this.a,this.r,c,d)
case 35668:return new A.k2(this.a,this.r,c,d)
case 35669:return new A.k3(this.a,this.r,c,d)
case 35674:return new A.k6(this.a,this.r,c,d)
case 35675:return new A.ct(this.a,this.r,c,d)
case 35676:return new A.a8(this.a,this.r,c,d)
case 35678:return this.h6(b,c,d)
case 35680:return this.h7(b,c,d)
case 35670:throw H.f(this.bB("BOOL",c))
case 35671:throw H.f(this.bB("BOOL_VEC2",c))
case 35672:throw H.f(this.bB("BOOL_VEC3",c))
case 35673:throw H.f(this.bB("BOOL_VEC4",c))
default:throw H.f(P.t("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},ce:{"^":"b;a,b",
i:function(a){return this.b}},eT:{"^":"bB;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,a,b,0c,0d,0e,0f,0r,0x,0y",
siP:function(a){this.cx=H.i(a,"$isa",[A.a2],"$asa")},
sh3:function(a){this.cy=H.i(a,"$isa",[A.a8],"$asa")},
siz:function(a){this.db=H.i(a,"$isa",[A.aE],"$asa")},
siA:function(a){this.dx=H.i(a,"$isa",[A.aE],"$asa")},
sh9:function(a){this.dy=H.i(a,"$isa",[A.aE],"$asa")},
sha:function(a){this.fr=H.i(a,"$isa",[A.aE],"$asa")},
shk:function(a){this.fx=H.i(a,"$isa",[A.B],"$asa")},
fE:function(a,b){var z,y,x,w,v
this.bZ("attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.jN(a))
this.z=this.x.j(0,"posAttr")
this.Q=H.e(this.y.m(0,"txtCount"),"$isB")
this.ch=H.e(this.y.m(0,"backClr"),"$isfd")
this.siP(H.c([],[A.a2]))
this.sh3(H.c([],[A.a8]))
z=[A.aE]
this.siz(H.c([],z))
this.siA(H.c([],z))
this.sh9(H.c([],z))
this.sha(H.c([],z))
this.shk(H.c([],[A.B]))
for(y=0;y<a;++y){z=this.cx
x=this.y
w="txt"+y
v=x.j(0,w)
if(v==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.e(v,"$isa2"))
z=this.cy
x=this.y
w="clrMat"+y
v=x.j(0,w)
if(v==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.e(v,"$isa8"))
z=this.db
x=this.y
w="srcLoc"+y
v=x.j(0,w)
if(v==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.e(v,"$isaE"))
z=this.dx
x=this.y
w="srcSize"+y
v=x.j(0,w)
if(v==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.e(v,"$isaE"))
z=this.dy
x=this.y
w="destLoc"+y
v=x.j(0,w)
if(v==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.e(v,"$isaE"))
z=this.fr
x=this.y
w="destSize"+y
v=x.j(0,w)
if(v==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.e(v,"$isaE"))
z=this.fx
x=this.y
w="flip"+y
v=x.j(0,w)
if(v==null)H.p(P.t("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.e(v,"$isB"))}},
n:{
jN:function(a){var z,y
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
jM:function(a,b){var z,y
z="TextureLayout_"+a
y=new A.eT(b,z)
y.bv(b,z)
y.fE(a,b)
return y}}},ab:{"^":"b;"},k4:{"^":"b;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.j(0,b)
if(z==null)throw H.f(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.P()},
jG:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w)x+=z[w].i(0)+a
return x},
P:function(){return this.jG("\n")}},B:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},k1:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},k2:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},k3:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},k0:{"^":"ab;0e,0f,a,b,c,d",
siQ:function(a){this.e=H.i(a,"$isa",[P.k],"$asa")},
i:function(a){return"Uniform1iv: "+H.j(this.c)},
n:{
dk:function(a,b,c,d,e){var z=new A.k0(a,b,c,e)
z.f=d
z.siQ(P.iy(d,0,!1,P.k))
return z}}},L:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},aE:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},D:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},fd:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},k6:{"^":"ab;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},ct:{"^":"ab;a,b,c,d",
ac:function(a){var z=new Float32Array(H.b0(H.i(a,"$isa",[P.r],"$asa")))
C.b.f5(this.a,this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},a8:{"^":"ab;a,b,c,d",
ac:function(a){var z=new Float32Array(H.b0(H.i(a,"$isa",[P.r],"$asa")))
C.b.d7(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},a2:{"^":"ab;a,b,c,d",
dc:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)C.b.L(y,x,0)
else C.b.L(y,x,a.a)},
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},aq:{"^":"ab;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
h6:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q
z=F.dc()
y=z.a
x=-d*0.5
w=-b*0.5
v=new V.M(-1,-1,1)
v=v.A(0,Math.sqrt(v.I(v)))
u=y.bD(new V.b7(1,2,4,6),new V.av(1,0,0,1),new V.a1(x,w,e),new V.a6(0,1),v,c)
y=z.a
v=d*0.5
t=new V.M(1,-1,1)
t=t.A(0,Math.sqrt(t.I(t)))
s=y.bD(new V.b7(0,3,4,6),new V.av(0,0,1,1),new V.a1(v,w,e),new V.a6(1,1),t,c)
y=z.a
w=b*0.5
t=new V.M(1,1,1)
t=t.A(0,Math.sqrt(t.I(t)))
r=y.bD(new V.b7(0,2,5,6),new V.av(0,1,0,1),new V.a1(v,w,e),new V.a6(1,0),t,c)
y=z.a
v=V.aM()
t=new V.M(-1,1,1)
t=t.A(0,Math.sqrt(t.I(t)))
q=y.bD(new V.b7(0,2,4,7),new V.av(1,1,0,1),new V.a1(x,w,e),v,t,c)
z.d.je(H.c([u,s,r,q],[F.ag]))
z.at()
return z},
cC:function(a){var z,y
z=a.a>0?1:0
if(a.b>0)z+=2
y=a.c
if(typeof y!=="number")return y.cb()
return(y>0?z+4:z)*2},
bK:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.n(c,{func:1,ret:-1,args:[F.ag,P.r,P.r]})
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
z.d=y}l=F.cC(y)
k=F.cC(z.b)
j=F.h9(d,e,new F.lO(z,F.cC(z.c),F.cC(z.d),k,l,c),b)
if(j!=null)a.cY(j)},
mG:function(a,b,c,d){var z,y
z={}
z.a=b
z.a=new F.mH()
z=new F.mI(z,c)
y=F.dc()
F.bK(y,null,z,d,a,1,0,0,1)
F.bK(y,null,z,d,a,0,1,0,3)
F.bK(y,null,z,d,a,0,0,1,2)
F.bK(y,null,z,d,a,-1,0,0,0)
F.bK(y,null,z,d,a,0,-1,0,0)
F.bK(y,null,z,d,a,0,0,-1,3)
y.at()
y.jT(new F.ky(),new F.iV())
return y},
mf:function(a,b,c){var z={}
z.a=b
z.a=new F.mg()
return F.h9(c,a,new F.mh(z),null)},
h9:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.n(c,{func:1,ret:-1,args:[F.ag,P.r,P.r]})
if(a<1)return
if(b<1)return
z=F.dc()
y=H.c([],[F.ag])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cw(null,null,new V.av(u,0,0,1),null,null,new V.a6(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cL(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cw(null,null,new V.av(o,n,m,1),null,null,new V.a6(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cL(d))}}z.d.jf(a+1,b+1,y)
return z},
lO:{"^":"q:13;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cW(z.b,b).cW(z.d.cW(z.c,b),c)
a.sa9(0,new V.a1(y.a,y.b,y.c))
a.sf1(y.A(0,Math.sqrt(y.I(y))))
z=1-b
x=1-c
a.se1(new V.b7(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
this.f.$3(a,b,c)}},
mH:{"^":"q:15;",
$2:function(a,b){return 0}},
mI:{"^":"q:13;a,b",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.y(z)
y=a.f
x=new V.M(y.a,y.b,y.c)
z=x.A(0,Math.sqrt(x.I(x))).k(0,this.b+z)
a.sa9(0,new V.a1(z.a,z.b,z.c))}},
mg:{"^":"q:15;",
$2:function(a,b){return 0}},
mh:{"^":"q:13;a",
$3:function(a,b,c){var z,y,x,w
z=b*2-1
y=c*2-1
a.sa9(0,new V.a1(z,y,this.a.a.$2(b,c)))
x=new V.M(z,y,1)
a.sf1(x.A(0,Math.sqrt(x.I(x))))
x=1-b
w=1-c
a.se1(new V.b7(b*c,2+x*c,4+b*w,6+x*w))}},
a5:{"^":"b;0a,0b,0c,0d,0e",
bd:function(){if(!this.gbe()){C.a.H(this.a.a.d.b,this)
this.a.a.a5()}this.ct()
this.cu()
this.ib()},
cA:function(a){this.a=a
C.a.h(a.d.b,this)},
cB:function(a){this.b=a
C.a.h(a.d.c,this)},
is:function(a){this.c=a
C.a.h(a.d.d,this)},
ct:function(){var z=this.a
if(z!=null){C.a.H(z.d.b,this)
this.a=null}},
cu:function(){var z=this.b
if(z!=null){C.a.H(z.d.c,this)
this.b=null}},
ib:function(){var z=this.c
if(z!=null){C.a.H(z.d.d,this)
this.c=null}},
gbe:function(){return this.a==null||this.b==null||this.c==null},
fW:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.bD()
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.eN())return
return v.A(0,Math.sqrt(v.I(v)))},
h0:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.N(0,y)
z=new V.M(z.a,z.b,z.c)
v=z.A(0,Math.sqrt(z.I(z)))
z=w.N(0,y)
z=new V.M(z.a,z.b,z.c)
z=v.bc(z.A(0,Math.sqrt(z.I(z))))
return z.A(0,Math.sqrt(z.I(z)))},
cH:function(){if(this.d!=null)return!0
var z=this.fW()
if(z==null){z=this.h0()
if(z==null)return!1}this.d=z
this.a.a.a5()
return!0},
fV:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=V.bD()
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.eN())return
return v.A(0,Math.sqrt(v.I(v)))},
h_:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.l.$2(n,0)){z=r.N(0,u)
z=new V.M(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.I(z)))
if(o.a-p.a<0)m=m.S(0)}else{l=(z-q.b)/n
z=r.N(0,u)
y=z.c
if(typeof y!=="number")return y.k()
y=new V.a1(z.a*l,z.b*l,y*l).D(0,u).N(0,x)
y=new V.M(y.a,y.b,y.c)
m=y.A(0,Math.sqrt(y.I(y)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.S(0)}z=this.d
if(z!=null){k=z.A(0,Math.sqrt(z.I(z)))
z=k.bc(m)
z=z.A(0,Math.sqrt(z.I(z))).bc(k)
m=z.A(0,Math.sqrt(z.I(z)))}return m},
cF:function(){if(this.e!=null)return!0
var z=this.fV()
if(z==null){z=this.h_()
if(z==null)return!1}this.e=z
this.a.a.a5()
return!0},
gjm:function(){if(J.F(this.a,this.b))return!0
if(J.F(this.b,this.c))return!0
if(J.F(this.c,this.a))return!0
return!1},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
F:function(a){var z,y
if(this.gbe())return a+"disposed"
z=a+C.c.aq(J.af(this.a.e),0)+", "+C.c.aq(J.af(this.b.e),0)+", "+C.c.aq(J.af(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
P:function(){return this.F("")},
n:{
br:function(a,b,c){var z,y,x
z=new F.a5()
y=a.a
if(y==null)H.p(P.t("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.p(P.t("May not create a face with vertices attached to different shapes."))
z.cA(a)
z.cB(b)
z.is(c)
C.a.h(z.a.a.d.b,z)
z.a.a.a5()
return z}}},
hX:{"^":"b;"},
jz:{"^":"hX;",
bi:function(a,b,c){var z,y
z=b.a
z.a.a.w()
z=z.e
y=c.a
y.a.a.w()
if(z==y.e){z=b.b
z.a.a.w()
z=z.e
y=c.b
y.a.a.w()
if(z==y.e){z=b.c
z.a.a.w()
z=z.e
y=c.c
y.a.a.w()
y=z==y.e
z=y}else z=!1
return z}else{z=b.a
z.a.a.w()
z=z.e
y=c.b
y.a.a.w()
if(z==y.e){z=b.b
z.a.a.w()
z=z.e
y=c.c
y.a.a.w()
if(z==y.e){z=b.c
z.a.a.w()
z=z.e
y=c.a
y.a.a.w()
y=z==y.e
z=y}else z=!1
return z}else{z=b.a
z.a.a.w()
z=z.e
y=c.c
y.a.a.w()
if(z==y.e){z=b.b
z.a.a.w()
z=z.e
y=c.a
y.a.a.w()
if(z==y.e){z=b.c
z.a.a.w()
z=z.e
y=c.b
y.a.a.w()
y=z==y.e
z=y}else z=!1
return z}else return!1}}}},
bv:{"^":"b;0a,0b",
bd:function(){if(!this.gbe()){C.a.H(this.a.a.c.b,this)
this.a.a.a5()}this.ct()
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
gbe:function(){return this.a==null||this.b==null},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
F:function(a){if(this.gbe())return a+"disposed"
return a+C.c.aq(J.af(this.a.e),0)+", "+C.c.aq(J.af(this.b.e),0)},
P:function(){return this.F("")},
n:{
im:function(a,b){var z,y,x
z=new F.bv()
y=a.a
if(y==null)H.p(P.t("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.p(P.t("May not create a line with vertices attached to different shapes."))
z.cA(a)
z.cB(b)
C.a.h(z.a.a.c.b,z)
z.a.a.a5()
return z}}},
io:{"^":"b;"},
k_:{"^":"io;",
bi:function(a,b,c){var z,y
z=b.a
z.a.a.w()
z=z.e
y=c.a
y.a.a.w()
if(z==y.e){z=b.b
z.a.a.w()
z=z.e
y=c.b
y.a.a.w()
return z==y.e}else{z=b.a
z.a.a.w()
z=z.e
y=c.b
y.a.a.w()
if(z==y.e){z=b.b
z.a.a.w()
z=z.e
y=c.a
y.a.a.w()
return z==y.e}else return!1}}},
c2:{"^":"b;0a",
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
F:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.c.aq(J.af(z.e),0)},
P:function(){return this.F("")}},
eO:{"^":"b;0a,0b,0c,0d,0e",
gl:function(){var z=this.e
if(z==null){z=D.A()
this.e=z}return z},
cY:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.w()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){v=z[w]
this.a.h(0,v.jp())}this.a.w()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.w()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.c2()
if(r.a==null)H.p(P.t("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.E(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.w()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.w()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.d(s,t)
o=s[t]
t=this.c.a
t.a.h(0,p)
t.a.h(0,o)
F.im(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.w()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.w()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.d(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.w()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.d(t,s)
m=t[s]
s=this.d.a
s.a.h(0,p)
s.a.h(0,o)
s.a.h(0,m)
F.br(p,o,m)}z=this.e
if(!(z==null))z.ah()},
at:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.at()||!1
if(!this.a.at())y=!1
z=this.e
if(!(z==null))z.ah()
return y},
jh:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=this.e
if(!(z==null))++z.d
for(y=this.a.c.length-1,z=a.b,x=a.a,w=x.length,v=a.c,u=z-1;y>=0;--y){t=this.a.c
if(y>=t.length)return H.d(t,y)
s=t[y]
t=s.y
r=C.i.bg(t.a*u)
t=t.b
if(typeof v!=="number")return v.N()
q=C.i.bg(t*(v-1))
r=r>=0?C.e.ay(r,z):z+C.e.ay(r,z)
p=(r+(q>=0?C.e.ay(q,v):v+C.e.ay(q,v))*z)*4
if(p<0||p>=w)return H.d(x,p)
t=x[p]/255
o=p+1
if(o>=w)return H.d(x,o)
o=x[o]/255
n=p+2
if(n>=w)return H.d(x,n)
n=x[n]/255
m=p+3
if(m>=w)return H.d(x,m)
m=x[m]/255
if(t<0)t=0
else if(t>1)t=1
if(o<0)o=0
else if(o>1)o=1
if(n<0)n=0
else if(n>1)n=1
if(!(m<0))if(m>1)m=1
l=(t+o+n)*b/3
t=s.f
o=s.r
n=o.a
m=o.b
o=o.c
if(typeof o!=="number")return o.k()
k=t.a
j=t.b
i=t.c
if(typeof i!=="number")return i.D()
o=new V.a1(k+n*l,j+m*l,i+o*l)
if(!J.F(t,o)){s.f=o
t=s.a
if(t!=null){t=t.e
if(!(t==null))t.E(null)}}}z=this.e
if(!(z==null))z.ah()},
ky:function(a){var z,y,x,w,v
z=this.e
if(!(z==null))++z.d
for(z=this.a,y=z.c.length-1,x=a.a;y>=0;--y){w=z.c
if(y>=w.length)return H.d(w,y)
v=w[y]
if((x&$.$get$a9().a)===0)v.f=null
if((x&$.$get$ay().a)===0)v.r=null
if((x&$.$get$aG().a)===0)v.x=null
if((x&$.$get$as().a)===0)v.y=null
if((x&$.$get$aH().a)===0)v.z=null
if((x&$.$get$dx().a)===0)v.Q=null
if((x&$.$get$b_().a)===0)v.ch=0
if((x&$.$get$aF().a)===0)v.cx=null}z=this.e
if(!(z==null))z.ah()},
kx:function(a,b){var z,y,x,w
z=this.e
if(!(z==null))++z.d
for(z=this.d,y=z.b.length-1;y>=0;--y){x=z.b
if(y>=x.length)return H.d(x,y)
w=x[y]
w.d=null}z=this.e
if(!(z==null))z.ah()},
kw:function(a){return this.kx(!0,a)},
jT:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.c(z.slice(0),[H.u(z,0)])
for(z=[F.ag];y.length!==0;){x=C.a.gjE(y)
C.a.kf(y,0)
if(x!=null){w=H.c([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.z)(y),++u){t=y[u]
if(t!=null&&a.bi(0,x,t)){C.a.h(w,t)
C.a.H(y,t)}}if(w.length>1)b.cY(w)}}this.a.w()
this.c.d3()
this.d.d3()
this.b.kg()
this.c.d4(new F.k_())
this.d.d4(new F.jz())
z=this.e
if(!(z==null))z.ah()},
bG:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$a9()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$ay().a)!==0)++w
if((x&$.$get$aG().a)!==0)++w
if((x&$.$get$as().a)!==0)++w
if((x&$.$get$aH().a)!==0)++w
if((x&$.$get$bE().a)!==0)++w
if((x&$.$get$bF().a)!==0)++w
if((x&$.$get$b_().a)!==0)++w
if((x&$.$get$aF().a)!==0)++w
v=b.gdd(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.r
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.dW])
for(r=0,q=0;q<w;++q){p=b.ji(q)
o=p.gdd(p)
C.a.q(s,q,new Z.dW(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.d(y,n)
m=y[n].jQ(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.q(t,l,m[k]);++l}}r+=o}H.i(t,"$isa",[x],"$asa")
y=a.a
j=y.createBuffer()
C.b.aB(y,34962,j)
C.b.e4(y,34962,new Float32Array(H.b0(t)),35044)
C.b.aB(y,34962,null)
i=new Z.bT(new Z.fo(34962,j),s,b)
i.shq(H.c([],[Z.bY]))
if(this.b.b.length!==0){x=P.k
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)}f=Z.dy(y,34963,H.i(h,"$isa",[x],"$asa"))
C.a.h(i.b,new Z.bY(0,h.length,f))}if(this.c.b.length!==0){x=P.k
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.d(g,q)
g=g[q].b
g.a.a.w()
C.a.h(h,g.e)}f=Z.dy(y,34963,H.i(h,"$isa",[x],"$asa"))
C.a.h(i.b,new Z.bY(1,h.length,f))}if(this.d.b.length!==0){x=P.k
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.w()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.d(g,q)
g=g[q].b
g.a.a.w()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.d(g,q)
g=g[q].c
g.a.a.w()
C.a.h(h,g.e)}f=Z.dy(y,34963,H.i(h,"$isa",[x],"$asa"))
C.a.h(i.b,new Z.bY(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.o])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.F("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.F("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.F("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.F("   "))}return C.a.G(z,"\n")},
ai:function(a){var z=this.e
if(!(z==null))z.E(a)},
a5:function(){return this.ai(null)},
$isn1:1,
n:{
dc:function(){var z,y
z=new F.eO()
y=new F.kt(z)
y.b=!1
y.siR(H.c([],[F.ag]))
z.a=y
y=new F.ju(z)
y.scq(H.c([],[F.c2]))
z.b=y
y=new F.jt(z)
y.shs(H.c([],[F.bv]))
z.c=y
y=new F.js(z)
y.shf(H.c([],[F.a5]))
z.d=y
z.e=null
return z}}},
js:{"^":"b;a,0b",
shf:function(a){this.b=H.i(a,"$isa",[F.a5],"$asa")},
je:function(a){var z,y,x,w,v,u
H.i(a,"$isa",[F.ag],"$asa")
z=H.c([],[F.a5])
y=a[0]
for(x=this.a,w=2;w<4;++w){v=a[w-1]
u=a[w]
x.a.h(0,y)
x.a.h(0,v)
x.a.h(0,u)
C.a.h(z,F.br(y,v,u))}return z},
jf:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.i(c,"$isa",[F.ag],"$asa")
z=H.c([],[F.a5])
for(y=this.a,x=b,w=0,v=!1,u=1;u<a;++u,++w,++x){for(t=v,s=1;s<b;++s,x=o){r=c.length
if(w<0||w>=r)return H.d(c,w)
q=c[w];++w
if(w>=r)return H.d(c,w)
p=c[w]
o=x+1
if(o<0||o>=r)return H.d(c,o)
n=c[o]
if(x<0||x>=r)return H.d(c,x)
m=c[x]
r=y.a
if(t){r.h(0,q)
y.a.h(0,p)
y.a.h(0,n)
C.a.h(z,F.br(q,p,n))
y.a.h(0,q)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.br(q,n,m))}else{r.h(0,p)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.br(p,n,m))
y.a.h(0,p)
y.a.h(0,m)
y.a.h(0,q)
C.a.h(z,F.br(p,m,q))}t=!t}v=!v}return z},
gp:function(a){return this.b.length},
d4:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.d(x,y)
w=x[y]
for(x=w.d,v=x.b.length+x.c.length+x.d.length-1;v>=0;--v){u=w.d.j(0,v)
for(t=v-1;t>=0;--t){s=w.d.j(0,t)
if(a.bi(0,u,s)){u.bd()
break}}}}},
d3:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=x.gjm()
if(y)x.bd()}},
at:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].cH())x=!1
return x},
cG:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].cF())x=!1
return x},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
return C.a.G(z,"\n")},
P:function(){return this.F("")}},
jt:{"^":"b;a,0b",
shs:function(a){this.b=H.i(a,"$isa",[F.bv],"$asa")},
gp:function(a){return this.b.length},
d4:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.d(x,y)
w=x[y]
for(x=w.c,v=x.b.length+x.c.length-1;v>=0;--v){u=w.c.j(0,v)
for(t=v-1;t>=0;--t){s=w.c.j(0,t)
if(a.bi(0,u,s)){u.bd()
break}}}}},
d3:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
x=y[z]
y=J.F(x.a,x.b)
if(y)x.bd()}},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.o])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.d(w,x)
C.a.h(z,w[x].F(a+(""+x+". ")))}return C.a.G(z,"\n")},
P:function(){return this.F("")}},
ju:{"^":"b;a,0b",
scq:function(a){this.b=H.i(a,"$isa",[F.c2],"$asa")},
gp:function(a){return this.b.length},
kg:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.d(y,z)
y=y[z]
x=y.a
if(x.b.b.length>1){if(x!=null){C.a.H(x.a.b.b,y)
x=y.a.a.e
if(!(x==null))x.E(null)}x=y.a
if(x!=null){C.a.H(x.b.b,y)
y.a=null}}}},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
return C.a.G(z,"\n")},
P:function(){return this.F("")}},
ag:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cL:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cw(this.cx,x,u,z,y,w,v,a,t)},
jp:function(){return this.cL(null)},
sa9:function(a,b){var z
if(!J.F(this.f,b)){this.f=b
z=this.a
if(z!=null)z.a5()}},
sf1:function(a){var z
if(!J.F(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a5()}},
se1:function(a){var z
if(!J.F(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.a5()}},
jQ:function(a){var z,y
if(a.v(0,$.$get$a9())){z=this.f
y=[P.r]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.v(0,$.$get$ay())){z=this.r
y=[P.r]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.v(0,$.$get$aG())){z=this.x
y=[P.r]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.v(0,$.$get$as())){z=this.y
y=[P.r]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(a.v(0,$.$get$aH())){z=this.z
y=[P.r]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.v(0,$.$get$bE())){z=this.Q
y=[P.r]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.v(0,$.$get$bF())){z=this.Q
y=[P.r]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(a.v(0,$.$get$b_()))return H.c([this.ch],[P.r])
else if(a.v(0,$.$get$aF())){z=this.cx
y=[P.r]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.r])},
cH:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bD()
this.d.a1(0,new F.kD(z))
z=z.a
this.r=z.A(0,Math.sqrt(z.I(z)))
z=this.a
if(z!=null){z.a5()
z=this.a.e
if(!(z==null))z.ah()}return!0},
cF:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bD()
this.d.a1(0,new F.kC(z))
z=z.a
this.x=z.A(0,Math.sqrt(z.I(z)))
z=this.a
if(z!=null){z.a5()
z=this.a.e
if(!(z==null))z.ah()}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
F:function(a){var z,y,x
z=H.c([],[P.o])
C.a.h(z,C.c.aq(J.af(this.e),0))
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
x=C.a.G(z,", ")
return a+"{"+x+"}"},
P:function(){return this.F("")},
n:{
cw:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ag()
y=new F.kB(z)
y.scq(H.c([],[F.c2]))
z.b=y
y=new F.kx(z)
x=[F.bv]
y.sht(H.c([],x))
y.shu(H.c([],x))
z.c=y
y=new F.ku(z)
x=[F.a5]
y.shg(H.c([],x))
y.shh(H.c([],x))
y.shi(H.c([],x))
z.d=y
h=$.$get$dw()
z.e=0
y=$.$get$a9()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$ay().a)!==0?e:null
z.x=(x&$.$get$aG().a)!==0?b:null
z.y=(x&$.$get$as().a)!==0?f:null
z.z=(x&$.$get$aH().a)!==0?g:null
z.Q=(x&$.$get$dx().a)!==0?c:null
z.ch=(x&$.$get$b_().a)!==0?i:0
z.cx=(x&$.$get$aF().a)!==0?a:null
return z}}},
kD:{"^":"q:9;a",
$1:function(a){var z,y
H.h(a,"$isa5")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
kC:{"^":"q:9;a",
$1:function(a){var z,y
H.h(a,"$isa5")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
kt:{"^":"b;a,0b,0c",
siR:function(a){this.c=H.i(a,"$isa",[F.ag],"$asa")},
w:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.d(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z,y
z=b.a
if(z!=null){if(z===this.a)return!1
throw H.f(P.t("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
y=this.a
b.a=y
C.a.h(z,b)
y.a5()
return!0},
jg:function(a,b,c,d,e,f,g,h,i){var z=F.cw(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bD:function(a,b,c,d,e,f){return this.jg(a,null,b,c,null,d,e,f,0)},
gp:function(a){return this.c.length},
at:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].cH()
return!0},
cG:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].cF()
return!0},
jl:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
if(typeof s!=="number")return s.k()
s=v.A(0,Math.sqrt(u*u+t*t+s*s))
if(!J.F(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.E(null)}}}}return!0},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
this.w()
z=H.c([],[P.o])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
return C.a.G(z,"\n")},
P:function(){return this.F("")}},
ku:{"^":"b;a,0b,0c,0d",
shg:function(a){this.b=H.i(a,"$isa",[F.a5],"$asa")},
shh:function(a){this.c=H.i(a,"$isa",[F.a5],"$asa")},
shi:function(a){this.d=H.i(a,"$isa",[F.a5],"$asa")},
gp:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.d(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.d(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.d(z,b)
return z[b]},
a1:function(a,b){H.n(b,{func:1,ret:-1,args:[F.a5]})
C.a.a1(this.b,b)
C.a.a1(this.c,new F.kv(this,b))
C.a.a1(this.d,new F.kw(this,b))},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
return C.a.G(z,"\n")},
P:function(){return this.F("")}},
kv:{"^":"q:9;a,b",
$1:function(a){H.h(a,"$isa5")
if(!J.F(a.a,this.a))this.b.$1(a)}},
kw:{"^":"q:9;a,b",
$1:function(a){var z
H.h(a,"$isa5")
z=this.a
if(!J.F(a.a,z)&&!J.F(a.b,z))this.b.$1(a)}},
kx:{"^":"b;a,0b,0c",
sht:function(a){this.b=H.i(a,"$isa",[F.bv],"$asa")},
shu:function(a){this.c=H.i(a,"$isa",[F.bv],"$asa")},
gp:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.d(z,x)
return z[x]}else{if(b<0)return H.d(z,b)
return z[b]}},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
return C.a.G(z,"\n")},
P:function(){return this.F("")}},
kz:{"^":"b;"},
ky:{"^":"kz;",
bi:function(a,b,c){return J.F(b.f,c.f)}},
kA:{"^":"b;"},
iV:{"^":"kA;",
cY:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.i(a,"$isa",[F.ag],"$asa")
z=V.bD()
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null){v=z.a
u=w.a
t=z.b
s=w.b
r=z.c
w=w.c
if(typeof r!=="number")return r.D()
if(typeof w!=="number")return H.y(w)
z=new V.M(v+u,t+s,r+w)}}z=z.A(0,Math.sqrt(z.I(z)))
for(y=a.length,w=z==null,x=0;x<a.length;a.length===y||(0,H.z)(a),++x){q=a[x]
if(w)p=null
else{v=z.a
u=z.b
t=z.c
if(typeof t!=="number")return t.k()
p=z.A(0,Math.sqrt(v*v+u*u+t*t))}if(!J.F(q.r,p)){q.r=p
v=q.a
if(v!=null){v=v.e
if(!(v==null))v.E(null)}}}return}},
kB:{"^":"b;a,0b",
scq:function(a){this.b=H.i(a,"$isa",[F.c2],"$asa")},
gp:function(a){return this.b.length},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.o])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
return C.a.G(z,"\n")},
P:function(){return this.F("")}}}],["","",,O,{"^":"",hJ:{"^":"aP;0a,0b,0c,0d,0e,0ad:f<",
sad:function(a){this.f=H.h(a,"$isao")},
gl:function(){var z=this.f
if(z==null){z=D.A()
this.f=z}return z},
B:function(a){var z=this.f
if(!(z==null))z.E(a)},
ab:function(a){},
c4:function(a,b){var z,y,x,w,v,u
z=this.a
if(z==null){y=H.h(a.fr.j(0,"Depth"),"$ise6")
if(y==null){z=a.a
y=new A.e6(z,"Depth")
y.bv(z,"Depth")
y.bZ($.hL,$.hK)
y.z=y.x.j(0,"posAttr")
y.Q=H.e(y.y.j(0,"objClr"),"$isD")
y.ch=H.e(y.y.j(0,"fogClr"),"$isD")
y.cx=H.e(y.y.j(0,"fogStart"),"$isL")
y.cy=H.e(y.y.j(0,"fogStop"),"$isL")
y.db=H.e(y.y.j(0,"viewObjMat"),"$isa8")
y.dx=H.e(y.y.j(0,"projMat"),"$isa8")
a.bE(y)}this.a=y
z=y}x=b.e
if(!(x instanceof Z.bT)){b.e=null
x=null}if(x==null){z=b.d.bG(new Z.cx(a.a),$.$get$a9())
x=z.ao($.$get$a9())
w=this.a
x.e=w.z.c
b.e=z
z=w}z.X(a)
x=this.b
w=z.Q
w.toString
v=x.a
u=x.b
x=x.c
C.b.u(w.a,w.d,v,u,x)
x=this.c
u=z.ch
u.toString
v=x.a
w=x.b
x=x.c
C.b.u(u.a,u.d,v,w,x)
x=this.d
w=z.cx
C.b.J(w.a,w.d,x)
x=this.e
w=z.cy
C.b.J(w.a,w.d,x)
x=a.cy.ga_()
w=z.dx
w.toString
w.ac(x.a6(0,!0))
x=a.gf8()
z=z.db
z.toString
z.ac(x.a6(0,!0))
x=b.e
x.X(a)
x.aa(a)
x.aR(a)
x=this.a
x.toString
C.b.bs(a.a,null)
x.x.bJ()}},i3:{"^":"aP;0a,0b,0c,0d,0e,0f,0r,0ad:x<",
sad:function(a){this.x=H.h(a,"$isao")},
gl:function(){var z=this.x
if(z==null){z=D.A()
this.x=z}return z},
B:[function(a){var z
H.h(a,"$isw")
z=this.x
if(!(z==null))z.E(a)},function(){return this.B(null)},"aU","$1","$0","ga7",0,2,0],
sec:function(a){var z,y
z=this.d
if(z==null?a!=null:z!==a){if(z!=null)z.gl().H(0,this.ga7())
y=this.d
this.d=a
if(a!=null)a.gl().h(0,this.ga7())
z=new D.v("depthTexture",y,this.d,this,[T.c6])
z.b=!0
this.B(z)}},
ab:function(a){},
T:function(a,b){H.i(a,"$isa",[T.bC],"$asa")
if(b!=null)if(!C.a.aD(a,b)){b.a=a.length
C.a.h(a,b)}},
c4:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.h(a.fr.j(0,"GaussianBlur"),"$iseh")
if(z==null){y=a.a
z=new A.eh(y,"GaussianBlur")
z.bv(y,"GaussianBlur")
z.bZ($.i5,$.i4)
z.z=z.x.j(0,"posAttr")
z.Q=z.x.j(0,"txtAttr")
z.ch=H.e(z.y.j(0,"projViewObjMat"),"$isa8")
z.cx=H.e(z.y.j(0,"txt2DMat"),"$isct")
z.cy=H.e(z.y.j(0,"colorTxt"),"$isa2")
z.db=H.e(z.y.j(0,"depthTxt"),"$isa2")
z.dx=H.e(z.y.j(0,"nullColorTxt"),"$isB")
z.dy=H.e(z.y.j(0,"nullDepthTxt"),"$isB")
z.fr=H.e(z.y.j(0,"width"),"$isL")
z.fx=H.e(z.y.j(0,"height"),"$isL")
z.fy=H.e(z.y.j(0,"highOffset"),"$isL")
z.go=H.e(z.y.j(0,"lowOffset"),"$isL")
z.id=H.e(z.y.j(0,"depthLimit"),"$isL")
a.bE(z)}this.a=z}if(b.e==null){y=b.d
x=$.$get$a9()
w=$.$get$as()
w=y.bG(new Z.cx(a.a),new Z.aQ(x.a|w.a))
w.ao($.$get$a9()).e=this.a.z.c
w.ao($.$get$as()).e=this.a.Q.c
b.e=w}v=H.c([],[T.bC])
this.T(v,this.c)
this.T(v,this.d)
for(u=0;u<v.length;++u)v[u].X(a)
y=this.a
y.X(a)
x=this.c
y.af(y.cy,y.dx,x)
x=this.d
y.af(y.db,y.dy,x)
x=this.b
w=y.cx
w.toString
w.ac(x.a6(0,!0))
x=a.geX()
w=y.ch
w.toString
w.ac(x.a6(0,!0))
x=a.c
w=y.fr
C.b.J(w.a,w.d,x)
x=a.d
w=y.fx
C.b.J(w.a,w.d,x)
x=this.e
w=y.fy
C.b.J(w.a,w.d,x)
x=this.f
w=y.go
C.b.J(w.a,w.d,x)
x=this.r
y=y.id
C.b.J(y.a,y.d,x)
y=b.e
if(y instanceof Z.bT){y.X(a)
y.aa(a)
y.aR(a)}else b.e=null
y=this.a
y.toString
x=a.a
C.b.bs(x,null)
y.x.bJ()
for(u=0;u<v.length;++u){y=v[u]
if(y.c){y.c=!1
C.b.bC(x,33984+y.a)
C.b.ag(x,3553,null)}}}},iJ:{"^":"aP;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0ad:dy<",
sfY:function(a){this.e=H.i(a,"$isP",[V.ae],"$asP")},
sad:function(a){this.dy=H.h(a,"$isao")},
gl:function(){var z=this.dy
if(z==null){z=D.A()
this.dy=z}return z},
B:[function(a){var z
H.h(a,"$isw")
z=this.dy
if(!(z==null))z.E(a)},function(){return this.B(null)},"aU","$1","$0","ga7",0,2,0],
ij:[function(a){H.h(a,"$isw")
this.a=null
this.B(a)},function(){return this.ij(null)},"le","$1","$0","gii",0,2,0],
kO:[function(a,b){var z=V.ae
z=new D.bZ(a,H.i(b,"$ism",[z],"$asm"),this,[z])
z.b=!0
this.B(z)},"$2","ghE",8,0,16],
kP:[function(a,b){var z=V.ae
z=new D.c_(a,H.i(b,"$ism",[z],"$asm"),this,[z])
z.b=!0
this.B(z)},"$2","ghF",8,0,16],
dt:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
z=this.dx
y=C.e.a8(z.e.length+3,4)*4
x=C.e.a8(z.f.length+3,4)*4
w=C.e.a8(z.r.length+3,4)*4
v=C.e.a8(z.x.length+3,4)*4
u=C.e.a8(z.y.length+3,4)*4
t=C.e.a8(z.z.length+3,4)*4
s=C.e.a8(this.e.a.length+3,4)*4
z=this.f.c
r=this.r.c
q=this.x.c
p=this.y.c
o=this.z.c
n=this.Q.c
m=this.cx.c
l=this.cy.c
k=this.db.c
j="MaterialLight_"+C.e.i(z.a)+C.e.i(r.a)+C.e.i(q.a)+C.e.i(p.a)+C.e.i(o.a)+C.e.i(n.a)+C.e.i(m.a)+C.e.i(l.a)+C.e.i(k.a)
j+"_"
j+"_0"
j+"_00"
j+"_000"
j=j+"_000_"+s+"_"+y+"_"+x+"_"+w+"_"+v+"_"+u+"_"+t
i=m!==C.d||l!==C.d
h=r!==C.d||q!==C.d||p!==C.d||o!==C.d
g=o===C.d
f=!g||i
e=q!==C.d||p!==C.d||!g||n!==C.d||i
g=n===C.d
d=!g
c=z===C.f||r===C.f||q===C.f||p===C.f||o===C.f||n===C.f||m===C.f||l===C.f||k===C.f
b=z===C.h||r===C.h||q===C.h||p===C.h||o===C.h||n===C.h||m===C.h||l===C.h||k===C.h
a=x+u+v+w+t>0
a0=s>0
a1=e||!g||f
a2=$.$get$a9()
if(e){g=$.$get$ay()
a2=new Z.aQ(a2.a|g.a)}if(d){g=$.$get$aG()
a2=new Z.aQ(a2.a|g.a)}if(c){g=$.$get$as()
a2=new Z.aQ(a2.a|g.a)}if(b){g=$.$get$aH()
a2=new Z.aQ(a2.a|g.a)}if(a0){g=$.$get$aF()
a2=new Z.aQ(a2.a|g.a)}return new A.iM(z,r,q,p,o,n,m,l,k,y,x,w,v,u,t,y+x+w+v+u+t,i,i,a,a1,!0,!1,!1,h,a,f,e,d,c,b,a0,!1,!1,!1,s,j.charCodeAt(0)==0?j:j,a2)},
T:function(a,b){H.i(a,"$isa",[T.bC],"$asa")
if(b!=null)if(!C.a.aD(a,b)){b.a=a.length
C.a.h(a,b)}},
ab:function(a){var z,y,x,w
for(z=this.dx.a,z=new J.ak(z,z.length,0,[H.u(z,0)]);z.C();){y=z.d
y.toString
x=$.aY
if(x==null){x=new V.a1(0,0,0)
$.aY=x}y.a=x
x=y.b
if(x!=null){w=x.aI(a,y)
if(w!=null)y.a=w.b5(y.a)}}},
c4:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.dt()
y=H.h(a.fr.j(0,z.ax),"$isew")
if(y==null){y=A.iI(z,a.a)
a.bE(y)}this.a=y
b.e=null
z=y}x=z.z
w=x.bK
z=b.e
if(!(z instanceof Z.bT)){b.e=null
z=null}if(z==null||!z.d.v(0,w)){z=x.r1
if(z)b.d.at()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.d
u.d.cG()
u.a.cG()
u=u.e
if(!(u==null))u.ah()}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.a.jl()
t=t.e
if(!(t==null))t.ah()}r=b.d.bG(new Z.cx(a.a),w)
r.ao($.$get$a9()).e=this.a.Q.c
if(z)r.ao($.$get$ay()).e=this.a.cx.c
if(v)r.ao($.$get$aG()).e=this.a.ch.c
if(x.rx)r.ao($.$get$as()).e=this.a.cy.c
if(u)r.ao($.$get$aH()).e=this.a.db.c
if(x.x1)r.ao($.$get$aF()).e=this.a.dx.c
b.e=r}z=T.bC
q=H.c([],[z])
this.a.X(a)
if(x.fx){v=this.a
u=a.dx.ga_()
v=v.dy
v.toString
v.ac(u.a6(0,!0))}if(x.fy){v=this.a
u=a.gf8()
v=v.fr
v.toString
v.ac(u.a6(0,!0))}v=this.a
u=a.geX()
v=v.fy
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
v.ac(C.o.a6(u,!0))}if(x.aE>0){p=this.e.a.length
v=this.a.k4
C.b.L(v.a,v.d,p)
for(v=[P.r],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.d(t,o)
t=t[o]
u.toString
H.h(t,"$isae")
u=u.r1
if(o>=u.length)return H.d(u,o)
u=u[o]
n=new Float32Array(H.b0(H.i(t.a6(0,!0),"$isa",v,"$asa")))
C.b.d7(u.a,u.d,!1,n)}}switch(x.a){case C.d:break
case C.j:v=this.a
u=this.f.f
v=v.r2
v.toString
t=u.a
s=u.b
u=u.c
C.b.u(v.a,v.d,t,s,u)
break
case C.f:this.T(q,this.f.d)
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
C.b.u(u.a,u.d,t,s,v)
break
case C.h:this.T(q,this.f.e)
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
C.b.u(u.a,u.d,t,s,v)
break}if(x.k2){switch(x.b){case C.d:break
case C.j:v=this.a
u=this.r.f
v=v.x2
v.toString
t=u.a
s=u.b
u=u.c
C.b.u(v.a,v.d,t,s,u)
break
case C.f:this.T(q,this.r.d)
v=this.a
u=this.r.d
v.af(v.y1,v.aE,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
C.b.u(u.a,u.d,t,s,v)
break
case C.h:this.T(q,this.r.e)
v=this.a
u=this.r.e
v.am(v.y2,v.aE,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
C.b.u(u.a,u.d,t,s,v)
break}switch(x.c){case C.d:break
case C.j:v=this.a
u=this.x.f
v=v.ax
v.toString
t=u.a
s=u.b
u=u.c
C.b.u(v.a,v.d,t,s,u)
break
case C.f:this.T(q,this.x.d)
v=this.a
u=this.x.d
v.af(v.bK,v.bL,u)
u=this.a
v=this.x.f
u=u.ax
u.toString
t=v.a
s=v.b
v=v.c
C.b.u(u.a,u.d,t,s,v)
break
case C.h:this.T(q,this.x.e)
v=this.a
u=this.x.e
v.am(v.eg,v.bL,u)
u=this.a
v=this.x.f
u=u.ax
u.toString
t=v.a
s=v.b
v=v.c
C.b.u(u.a,u.d,t,s,v)
break}switch(x.d){case C.d:break
case C.j:v=this.a
u=this.y.f
v=v.bM
v.toString
t=u.a
s=u.b
u=u.c
C.b.u(v.a,v.d,t,s,u)
break
case C.f:this.T(q,this.y.d)
v=this.a
u=this.y.d
v.af(v.eh,v.bN,u)
u=this.a
v=this.y.f
u=u.bM
u.toString
t=v.a
s=v.b
v=v.c
C.b.u(u.a,u.d,t,s,v)
break
case C.h:this.T(q,this.y.e)
v=this.a
u=this.y.e
v.am(v.ei,v.bN,u)
u=this.a
v=this.y.f
u=u.bM
u.toString
t=v.a
s=v.b
v=v.c
C.b.u(u.a,u.d,t,s,v)
break}switch(x.e){case C.d:break
case C.j:v=this.a
u=this.z.f
v=v.bO
v.toString
t=u.a
s=u.b
u=u.c
C.b.u(v.a,v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bQ
C.b.J(u.a,u.d,s)
break
case C.f:this.T(q,this.z.d)
v=this.a
u=this.z.d
v.af(v.ej,v.bP,u)
u=this.a
v=this.z.f
u=u.bO
u.toString
t=v.a
s=v.b
v=v.c
C.b.u(u.a,u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bQ
C.b.J(v.a,v.d,s)
break
case C.h:this.T(q,this.z.e)
v=this.a
u=this.z.e
v.am(v.ek,v.bP,u)
u=this.a
v=this.z.f
u=u.bO
u.toString
t=v.a
s=v.b
v=v.c
C.b.u(u.a,u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bQ
C.b.J(v.a,v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.ew
C.b.L(v.a,v.d,p)
m=a.db.ga_()
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.cM
if(l>=t.length)return H.d(t,l)
i=t[l]
t=m.f4(j.gbI(j))
s=t.a
h=t.b
g=t.c
if(typeof g!=="number")return g.k()
g=t.A(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
s=g.a
t=g.b
g=g.c
C.b.u(h.a,h.d,s,t,g)
g=j.gaC(j)
t=i.c
s=g.gc3()
h=g.gbt()
g=g.gbF()
C.b.u(t.a,t.d,s,h,g);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.ex
C.b.L(v.a,v.d,p)
m=a.db.ga_()
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.cN
if(l>=t.length)return H.d(t,l)
i=t[l]
t=j.a
s=i.b
h=t.a
g=t.b
t=t.c
C.b.u(s.a,s.d,h,g,t)
t=m.b5(j.a)
g=i.c
C.b.u(g.a,g.d,t.a,t.b,t.c)
t=j.c
g=i.d
C.b.u(g.a,g.d,t.a,t.b,t.c)
t=j.d
g=i.e
C.b.J(g.a,g.d,t)
t=j.e
g=i.f
C.b.J(g.a,g.d,t)
t=j.f
g=i.r
C.b.J(g.a,g.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.ey
C.b.L(v.a,v.d,p)
m=a.db.ga_()
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.cO
if(l>=t.length)return H.d(t,l)
i=t[l]
t=j.gd0(j)
s=i.b
h=t.gfb(t)
g=t.gfc(t)
t=t.gfe(t)
C.b.u(s.a,s.d,h,g,t)
t=j.gbI(j).lm()
g=i.c
h=t.gau(t)
s=t.gav(t)
t=t.gaw()
C.b.u(g.a,g.d,h,s,t)
t=m.b5(j.gd0(j))
s=i.d
C.b.u(s.a,s.d,t.a,t.b,t.c)
t=j.gaC(j)
s=i.e
h=t.gc3()
g=t.gbt()
t=t.gbF()
C.b.u(s.a,s.d,h,g,t)
t=j.glj()
g=i.f
C.b.J(g.a,g.d,t)
t=j.gli()
g=i.r
C.b.J(g.a,g.d,t)
t=j.gdZ()
g=i.x
C.b.J(g.a,g.d,t)
t=j.ge_()
g=i.y
C.b.J(g.a,g.d,t)
t=j.ge0()
g=i.z
C.b.J(g.a,g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.ez
C.b.L(v.a,v.d,p)
m=a.db.ga_()
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
s=this.a.cP
if(l>=s.length)return H.d(s,l)
i=s[l]
s=j.gbo()
H.i(q,"$isa",t,"$asa")
if(!C.a.aD(q,s)){s.sbx(q.length)
C.a.h(q,s)}s=j.gbI(j)
h=i.d
g=s.gau(s)
f=s.gav(s)
s=s.gaw()
C.b.u(h.a,h.d,g,f,s)
s=j.gkB()
f=i.b
g=s.gau(s)
h=s.gav(s)
s=s.gaw()
C.b.u(f.a,f.d,g,h,s)
s=j.gbn(j)
h=i.c
g=s.gau(s)
f=s.gav(s)
s=s.gaw()
C.b.u(h.a,h.d,g,f,s)
s=m.f4(j.gbI(j))
f=s.a
g=s.b
h=s.c
if(typeof h!=="number")return h.k()
h=s.A(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
f=h.a
s=h.b
h=h.c
C.b.u(g.a,g.d,f,s,h)
h=j.gaC(j)
s=i.f
f=h.gc3()
g=h.gbt()
h=h.gbF()
C.b.u(s.a,s.d,f,g,h)
h=j.gbo()
s=h.gcX(h)
if(!s){s=i.x
C.b.L(s.a,s.d,1)}else{s=i.r
g=h.ghw()
f=s.a
s=s.d
if(!g)C.b.L(f,s,0)
else C.b.L(f,s,h.gbx())
s=i.x
C.b.L(s.a,s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.eA
C.b.L(v.a,v.d,p)
m=a.db.ga_()
for(v=this.dx.y,u=v.length,t=[P.r],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
h=this.a.cQ
if(l>=h.length)return H.d(h,l)
i=h[l]
h=j.gbo()
H.i(q,"$isa",s,"$asa")
if(!C.a.aD(q,h)){h.sbx(q.length)
C.a.h(q,h)}e=m.k(0,j.ga_())
h=j.ga_()
g=$.aY
if(g==null){g=new V.a1(0,0,0)
$.aY=g}g=h.b5(g)
h=i.b
f=g.gfb(g)
d=g.gfc(g)
g=g.gfe(g)
C.b.u(h.a,h.d,f,d,g)
h=$.aY
if(h==null){h=new V.a1(0,0,0)
$.aY=h}h=e.b5(h)
g=i.c
C.b.u(g.a,g.d,h.a,h.b,h.c)
h=e.eM()
g=i.d
n=new Float32Array(H.b0(H.i(new V.d5(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a6(0,!0),"$isa",t,"$asa")))
C.b.f5(g.a,g.d,!1,n)
g=j.gaC(j)
h=i.e
f=g.gc3()
d=g.gbt()
g=g.gbF()
C.b.u(h.a,h.d,f,d,g)
g=j.gbo()
h=g.gcX(g)
if(!h){h=i.r
C.b.L(h.a,h.d,1)}else{h=i.f
f=g.gcX(g)
d=h.a
h=h.d
if(!f)C.b.L(d,h,0)
else C.b.L(d,h,g.glk(g))
h=i.r
C.b.L(h.a,h.d,0)}h=j.gdZ()
g=i.x
C.b.J(g.a,g.d,h)
h=j.ge_()
g=i.y
C.b.J(g.a,g.d,h)
h=j.ge0()
g=i.z
C.b.J(g.a,g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.eB
C.b.L(v.a,v.d,p)
m=a.db.ga_()
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.cR
if(l>=t.length)return H.d(t,l)
i=t[l]
t=j.gbo()
H.i(q,"$isa",z,"$asa")
if(!C.a.aD(q,t)){t.sbx(q.length)
C.a.h(q,t)}t=j.gd0(j)
s=i.b
h=t.gfb(t)
g=t.gfc(t)
t=t.gfe(t)
C.b.u(s.a,s.d,h,g,t)
t=j.gbI(j)
g=i.c
h=t.gau(t)
s=t.gav(t)
t=t.gaw()
C.b.u(g.a,g.d,h,s,t)
t=j.gkB()
s=i.d
h=t.gau(t)
g=t.gav(t)
t=t.gaw()
C.b.u(s.a,s.d,h,g,t)
t=j.gbn(j)
g=i.e
h=t.gau(t)
s=t.gav(t)
t=t.gaw()
C.b.u(g.a,g.d,h,s,t)
t=m.b5(j.gd0(j))
s=i.f
C.b.u(s.a,s.d,t.a,t.b,t.c)
t=j.gbo()
s=t.gcX(t)
if(!s){t=i.x
C.b.L(t.a,t.d,1)}else{s=i.r
h=t.ghw()
g=s.a
s=s.d
if(!h)C.b.L(g,s,0)
else C.b.L(g,s,t.gbx())
t=i.x
C.b.L(t.a,t.d,0)}t=j.gaC(j)
s=i.y
h=t.gc3()
g=t.gbt()
t=t.gbF()
C.b.u(s.a,s.d,h,g,t)
t=j.glt()
g=i.z
C.b.J(g.a,g.d,t)
t=j.glu()
g=i.Q
C.b.J(g.a,g.d,t)
t=j.gdZ()
g=i.ch
C.b.J(g.a,g.d,t)
t=j.ge_()
g=i.cx
C.b.J(g.a,g.d,t)
t=j.ge0()
g=i.cy
C.b.J(g.a,g.d,t);++l}}}switch(x.f){case C.d:break
case C.j:break
case C.f:this.T(q,this.Q.d)
z=this.a
v=this.Q.d
z.af(z.el,z.bR,v)
break
case C.h:this.T(q,this.Q.e)
z=this.a
v=this.Q.e
z.am(z.em,z.bR,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db.ga_().eM()
a.Q=v}z=z.id
z.toString
z.ac(v.a6(0,!0))}if(x.dy){this.T(q,this.ch)
z=this.a
v=this.ch
z.am(z.en,z.eo,v)
switch(x.r){case C.d:break
case C.j:z=this.a
v=this.cx.f
z=z.bS
z.toString
u=v.a
t=v.b
v=v.c
C.b.u(z.a,z.d,u,t,v)
break
case C.f:this.T(q,this.cx.d)
z=this.a
v=this.cx.d
z.af(z.ep,z.bT,v)
v=this.a
z=this.cx.f
v=v.bS
v.toString
u=z.a
t=z.b
z=z.c
C.b.u(v.a,v.d,u,t,z)
break
case C.h:this.T(q,this.cx.e)
z=this.a
v=this.cx.e
z.am(z.eq,z.bT,v)
v=this.a
z=this.cx.f
v=v.bS
v.toString
u=z.a
t=z.b
z=z.c
C.b.u(v.a,v.d,u,t,z)
break}switch(x.x){case C.d:break
case C.j:z=this.a
v=this.cy.f
z=z.bV
z.toString
u=v.a
t=v.b
v=v.c
C.b.u(z.a,z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.bU
C.b.J(v.a,v.d,t)
break
case C.f:this.T(q,this.cy.d)
z=this.a
v=this.cy.d
z.af(z.er,z.bW,v)
v=this.a
z=this.cy.f
v=v.bV
v.toString
u=z.a
t=z.b
z=z.c
C.b.u(v.a,v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bU
C.b.J(z.a,z.d,t)
break
case C.h:this.T(q,this.cy.e)
z=this.a
v=this.cy.e
z.am(z.es,z.bW,v)
v=this.a
z=this.cy.f
v=v.bV
v.toString
u=z.a
t=z.b
z=z.c
C.b.u(v.a,v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.bU
C.b.J(z.a,z.d,t)
break}}z=x.y
v=z!==C.d
if(v){switch(z){case C.d:break
case C.j:z=this.a
u=this.db.f
z=z.bX
C.b.J(z.a,z.d,u)
break
case C.f:this.T(q,this.db.d)
z=this.a
u=this.db.d
z.af(z.eu,z.bY,u)
u=this.a
z=this.db.f
u=u.bX
C.b.J(u.a,u.d,z)
break
case C.h:this.T(q,this.db.e)
z=this.a
u=this.db.e
z.am(z.ev,z.bY,u)
u=this.a
z=this.db.f
u=u.bX
C.b.J(u.a,u.d,z)
break}z=a.a
C.b.bf(z,3042)
C.b.jk(z,770,771)}for(o=0;o<q.length;++o)q[o].X(a)
z=b.e
z.X(a)
z.aa(a)
z.aR(a)
if(v)C.b.jx(a.a,3042)
for(z=a.a,o=0;o<q.length;++o){v=q[o]
if(v.c){v.c=!1
C.b.bC(z,33984+v.a)
C.b.ag(z,3553,null)}}v=this.a
v.toString
C.b.bs(z,null)
v.x.bJ()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dt().ax},
n:{
ex:function(){var z,y,x
z=new O.iJ()
z.sfY(O.cd(V.ae))
z.e.aS(z.ghE(),z.ghF())
y=new O.b5(z,"emission")
y.c=C.d
y.f=new V.U(0,0,0)
z.f=y
y=new O.b5(z,"ambient")
y.c=C.d
y.f=new V.U(0,0,0)
z.r=y
y=new O.b5(z,"diffuse")
y.c=C.d
y.f=new V.U(0,0,0)
z.x=y
y=new O.b5(z,"invDiffuse")
y.c=C.d
y.f=new V.U(0,0,0)
z.y=y
y=new O.iO(z,"specular")
y.c=C.d
y.f=new V.U(0,0,0)
y.ch=100
z.z=y
y=new O.iL(z,"bump")
y.c=C.d
z.Q=y
z.ch=null
y=new O.b5(z,"reflect")
y.c=C.d
y.f=new V.U(0,0,0)
z.cx=y
y=new O.iN(z,"refract")
y.c=C.d
y.f=new V.U(0,0,0)
y.ch=1
z.cy=y
y=new O.iK(z,"alpha")
y.c=C.d
y.f=1
z.db=y
y=new D.il()
y.bu(D.a0)
y.sfJ(H.c([],[D.ec]))
y.sfL(H.c([],[D.cm]))
y.sfM(H.c([],[D.eP]))
y.sfN(H.c([],[D.eV]))
y.sfO(H.c([],[D.eW]))
y.sfP(H.c([],[D.eX]))
y.Q=null
y.ch=null
y.da(y.ghD(),y.ghY(),y.gi_())
z.dx=y
x=y.Q
if(x==null){x=D.A()
y.Q=x
y=x}else y=x
y.h(0,z.gii())
y=z.dx
x=y.ch
if(x==null){x=D.A()
y.ch=x
y=x}else y=x
y.h(0,z.ga7())
z.dy=null
return z}}},iK:{"^":"d4;0f,a,b,0c,0d,0e",
io:function(a){var z,y
z=this.f
if(!$.l.$2(z,a)){y=this.f
this.f=a
z=new D.v(this.b,y,a,this,[P.r])
z.b=!0
this.a.B(z)}},
aY:function(){this.df()
this.io(1)}},d4:{"^":"b;",
B:[function(a){this.a.B(H.h(a,"$isw"))},function(){return this.B(null)},"aU","$1","$0","ga7",0,2,0],
aY:["df",function(){}],
iq:function(a){var z,y
z=this.d
if(z==null?a!=null:z!==a){if(z!=null)z.gl().H(0,this.ga7())
y=this.d
this.d=a
if(a!=null)a.gl().h(0,this.ga7())
z=new D.v(this.b+".texture2D",y,this.d,this,[T.c6])
z.b=!0
this.a.B(z)}},
ir:function(a){},
sc5:function(a){var z
if(a==null){if(this.c===C.f){this.c=C.j
z=this.a
z.a=null
z.B(null)}}else{z=this.c
if(z!==C.f){if(z===C.d)this.aY()
this.c=C.f
this.ir(null)
z=this.a
z.a=null
z.B(null)}}this.iq(a)}},iL:{"^":"d4;a,b,0c,0d,0e"},b5:{"^":"d4;0f,a,b,0c,0d,0e",
dP:function(a){var z,y
if(!J.F(this.f,a)){z=this.f
this.f=a
y=new D.v(this.b+".color",z,a,this,[V.U])
y.b=!0
this.a.B(y)}},
aY:["ce",function(){this.df()
this.dP(new V.U(1,1,1))}],
saC:function(a,b){var z
if(this.c===C.d){this.c=C.j
this.aY()
z=this.a
z.a=null
z.B(null)}this.dP(b)}},iN:{"^":"b5;0ch,0f,a,b,0c,0d,0e",
ip:function(a){var z,y
z=this.ch
if(!$.l.$2(z,a)){y=this.ch
this.ch=a
z=new D.v(this.b+".refraction",y,a,this,[P.r])
z.b=!0
this.a.B(z)}},
aY:function(){this.ce()
this.ip(1)}},iO:{"^":"b5;0ch,0f,a,b,0c,0d,0e",
cv:function(a){var z,y
z=this.ch
if(!$.l.$2(z,a)){y=this.ch
this.ch=a
z=new D.v(this.b+".shininess",y,a,this,[P.r])
z.b=!0
this.a.B(z)}},
aY:function(){this.ce()
this.cv(100)}},aP:{"^":"b;"},jL:{"^":"aP;0a,0b,0c,0d,0ad:e<",
shd:function(a){this.c=H.i(a,"$isP",[O.ba],"$asP")},
sad:function(a){this.e=H.h(a,"$isao")},
gl:function(){var z=this.e
if(z==null){z=D.A()
this.e=z}return z},
B:[function(a){var z
H.h(a,"$isw")
z=this.e
if(!(z==null))z.E(a)},function(){return this.B(null)},"aU","$1","$0","ga7",0,2,0],
kW:[function(a,b){var z,y,x,w,v,u,t
H.i(b,"$ism",[O.ba],"$asm")
for(z=b.length,y=this.ga7(),x={func:1,ret:-1,args:[D.w]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.gad()==null){t=new D.ao()
t.sae(null)
t.sb8(null)
t.c=null
t.d=0
u.sad(t)}t=u.gad()
t.toString
H.n(y,x)
if(t.a==null)t.sae(H.c([],w))
t=t.a;(t&&C.a).h(t,y)}}this.aU()},"$2","ghM",8,0,21],
kX:[function(a,b){var z,y
H.i(b,"$ism",[O.ba],"$asm")
for(z=b.gU(b),y=this.ga7();z.C();)z.gM().gl().H(0,y)
this.aU()},"$2","ghN",8,0,21],
ab:function(a){},
c4:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=C.e.a8(this.c.a.length+3,4)*4
if(z!==this.d){this.d=z
this.b=null}y=this.b
if(y==null){y="TextureLayout_"+z
x=H.h(a.fr.j(0,y),"$iseT")
if(x==null){x=A.jM(z,a.a)
a.bE(x)}this.b=x
y=x}if(b.e==null){y=b.d.bG(new Z.cx(a.a),$.$get$a9())
w=y.ao($.$get$a9())
v=this.b
w.e=v.z.c
b.e=y
y=v}y.X(a)
y=T.bC
u=H.c([],[y])
for(w=[P.r],y=[y],t=0,s=0;v=this.c.a,s<v.length;++s){r=v[s]
if(r!=null&&r.a!=null){v=r.a
H.i(u,"$isa",y,"$asa")
if(v!=null)if(!C.a.aD(u,v)){v.a=u.length
C.a.h(u,v)}v=this.b
q=r.a
v=v.cx
if(t>=v.length)return H.d(v,t)
v=v[t]
p=q==null||!q.d
o=v.a
v=v.d
if(p)C.b.L(o,v,0)
else C.b.L(o,v,q.a)
v=this.b
q=r.b
v=v.cy
if(t>=v.length)return H.d(v,t)
v=v[t]
if(q==null){q=$.cl
if(q==null){q=new V.ae(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.cl=q}}n=new Float32Array(H.b0(H.i(q.a6(0,!0),"$isa",w,"$asa")))
C.b.d7(v.a,v.d,!1,n)
v=this.b
m=r.c
v.toString
if(m==null){q=$.bA
if(q==null){q=V.bz(0,0,1,1)
$.bA=q
m=q}else m=q}q=v.db
if(t>=q.length)return H.d(q,t)
q=q[t]
C.b.c6(q.a,q.d,m.a,m.b)
v=v.dx
if(t>=v.length)return H.d(v,t)
v=v[t]
C.b.c6(v.a,v.d,m.c,m.d)
v=this.b
m=r.d
v.toString
if(m==null){q=$.bA
if(q==null){q=V.bz(0,0,1,1)
$.bA=q
m=q}else m=q}q=v.dy
if(t>=q.length)return H.d(q,t)
q=q[t]
C.b.c6(q.a,q.d,m.a,m.b)
v=v.fr
if(t>=v.length)return H.d(v,t)
v=v[t]
C.b.c6(v.a,v.d,m.c,m.d)
v=this.b
q=r.e
v=v.fx
if(t>=v.length)return H.d(v,t)
v=v[t]
q=q?1:0
C.b.L(v.a,v.d,q);++t}}y=this.b.Q
C.b.L(y.a,y.d,t)
y=this.b
w=this.a
y=y.ch
y.toString
v=w.a
q=w.b
p=w.c
w=w.d
C.b.kA(y.a,y.d,v,q,p,w)
for(s=0;s<u.length;++s)u[s].X(a)
y=b.e
if(y instanceof Z.bT){y.X(a)
y.aa(a)
y.aR(a)}else b.e=null
y=this.b
y.toString
w=a.a
C.b.bs(w,null)
y.x.bJ()
for(s=0;s<u.length;++s){y=u[s]
if(y.c){y.c=!1
C.b.bC(w,33984+y.a)
C.b.ag(w,3553,null)}}}},ba:{"^":"b;0a,0b,0c,0d,0e,0ad:f<",
sad:function(a){this.f=H.h(a,"$isao")},
gl:function(){var z=this.f
if(z==null){z=D.A()
this.f=z}return z},
B:[function(a){var z
H.h(a,"$isw")
z=this.f
if(!(z==null))z.E(a)},function(){return this.B(null)},"aU","$1","$0","ga7",0,2,0],
n:{
eU:function(a,b,c,d,e){var z,y,x,w,v
z=new O.ba()
y=z.a
z.a=e
e.gl().h(0,z.ga7())
x=new D.v("texture",y,z.a,z,[T.c6])
x.b=!0
z.B(x)
w=V.aX()
if(!J.F(z.b,w)){y=z.b
z.b=w
x=new D.v("colorMatrix",y,w,z,[V.ae])
x.b=!0
z.B(x)}v=V.da()
if(!J.F(z.c,v)){y=z.c
z.c=v
x=new D.v("source",y,v,z,[V.cp])
x.b=!0
z.B(x)}if(!J.F(z.d,b)){y=z.d
z.d=b
x=new D.v("destination",y,b,z,[V.cp])
x.b=!0
z.B(x)}if(z.e!==!1){z.e=!1
x=new D.v("flip",!0,!1,z,[P.T])
x.b=!0
z.B(x)}z.f=null
return z}}}}],["","",,T,{"^":"",bC:{"^":"cQ;"},c6:{"^":"bC;"},jK:{"^":"c6;0a,0b,0c,0d,0e,0f,0r,0x,0y",
dQ:function(){if(!this.d){this.d=!0
var z=this.y
if(!(z==null))z.ee()}},
gl:function(){var z=this.y
if(z==null){z=D.A()
this.y=z}return z},
X:function(a){var z
if(!this.c&&this.d){this.c=!0
z=a.a
C.b.bC(z,33984+this.a)
C.b.ag(z,3553,this.b)}},
n:{
df:function(a,b){var z=new T.jK()
z.a=a
z.b=b
z.c=!1
z.d=!1
z.e=0
z.f=0
z.r=0
z.x=0
return z}}},jO:{"^":"b;a,0b,0c,0d,0e",
jR:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
C.b.ag(z,3553,y)
C.b.aH(z,3553,10242,33071)
C.b.aH(z,3553,10243,33071)
C.b.aH(z,3553,10241,9729)
C.b.aH(z,3553,10240,9729)
C.b.ag(z,3553,null);++this.d
x=document.createElement("img")
x.src=a
w=T.df(0,y)
z=W.a4
W.Y(x,"load",H.n(new T.jP(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
c_:function(a){return this.jR(a,!1,!1,!1,!1)},
ik:function(a,b,c){var z,y,x,w
b=V.bP(b,2)
z=V.bP(a.width,2)
y=V.bP(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cU(null,null)
x.width=z
x.height=y
w=H.h(C.n.fk(x,"2d"),"$iscV")
w.imageSmoothingEnabled=!1;(w&&C.x).jz(w,a,0,0,x.width,x.height)
return P.m8(C.x.ho(w,0,0,x.width,x.height))}}},jP:{"^":"q:14;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.ik(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
C.b.ag(y,3553,this.e)
C.b.kd(y,37440,this.f?1:0)
C.b.kq(y,3553,0,6408,6408,5121,w)
if(this.r)C.b.fg(y,3553)
C.b.ag(y,3553,null)
z.dQ();++x.e}},jQ:{"^":"b;a,b,c"}}],["","",,V,{"^":"",hj:{"^":"b;",
bh:function(a){return!0},
i:function(a){return"all"},
$isbw:1},bw:{"^":"b;"},ev:{"^":"b;0a",
saN:function(a){this.a=H.i(a,"$isa",[V.bw],"$asa")},
bh:["fw",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)if(z[x].bh(a))return!0
return!1}],
i:["de",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbw:1},bx:{"^":"ev;0a",
bh:function(a){return!this.fw(a)},
i:function(a){return"!["+this.de(0)+"]"}},jp:{"^":"b;0a",
sim:function(a){this.a=H.i(a,"$isH",[P.k,P.T],"$asH")},
fC:function(a){var z,y
if(a.a.length<=0)throw H.f(P.t("May not create a SetMatcher with zero characters."))
z=new H.aW(0,0,[P.k,P.T])
for(y=new H.et(a,a.gp(a),0,[H.ah(a,"S",0)]);y.C();)z.q(0,y.d,!0)
this.sim(z)},
bh:function(a){return this.a.bH(a)},
i:function(a){return P.c5(this.a.gcV(),0,null)},
$isbw:1,
n:{
a7:function(a){var z=new V.jp()
z.fC(a)
return z}}},dd:{"^":"b;a,b,0c,0d",
siL:function(a){this.c=H.i(a,"$isa",[V.di],"$asa")},
G:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.di(this.a.R(0,b))
w.saN(H.c([],[V.bw]))
w.c=!1
C.a.h(this.c,w)
return w},
jD:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.bh(a))return w}return},
i:function(a){return this.b}},f0:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.h8(this.b,"\n","\\n")
y=H.h8(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},dh:{"^":"b;a,b,0c",
sic:function(a){var z=P.o
this.c=H.i(a,"$isH",[z,z],"$asH")},
i:function(a){return this.b}},jV:{"^":"b;0a,0b,0c",
siB:function(a){this.a=H.i(a,"$isH",[P.o,V.dd],"$asH")},
siH:function(a){this.b=H.i(a,"$isH",[P.o,V.dh],"$asH")},
R:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.dd(this,b)
z.siL(H.c([],[V.di]))
z.d=null
this.a.q(0,b,z)}return z},
bq:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.dh(this,a)
y=P.o
z.sic(new H.aW(0,0,[y,y]))
this.b.q(0,a,z)}return z},
kv:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.f0])
y=this.c
x=[P.k]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.c.K(a,t)
r=y.jD(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.c5(w,0,null)
throw H.f(P.t("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.c5(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.f0(o==null?p.b:o,q,t)}++t}}}},di:{"^":"ev;b,0c,0a",
i:function(a){return this.b.b+": "+this.de(0)}}}],["","",,X,{"^":"",hl:{"^":"cr;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
gl:function(){var z=this.fr
if(z==null){z=D.A()
this.fr=z}return z},
az:function(a){var z=this.fr
if(!(z==null))z.E(a)},
saJ:function(a,b){var z
if(b<1)b=1
z=this.a
if(z!==b){this.y=null
this.a=b
this.c=b
z=new D.v("width",z,b,this,[P.k])
z.b=!0
this.az(z)}},
saF:function(a,b){var z
if(b<1)b=1
z=this.b
if(z!==b){this.y=null
this.b=b
this.d=b
z=new D.v("height",z,b,this,[P.k])
z.b=!0
this.az(z)}},
X:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
if(this.f){z=a.a
y=z.drawingBufferWidth
x=this.r
if(typeof y!=="number")return y.k()
this.saJ(0,C.i.a2(y*x))
z=z.drawingBufferHeight
x=this.x
if(typeof z!=="number")return z.k()
this.saF(0,C.i.a2(z*x))}if(this.y==null){z=a.a
y=this.ch
x=this.a
w=this.b
v=H.a3(C.b.c9(z,3379))
u=V.bP(x,2)
t=V.bP(w,2)
v=V.bP(v,2)
u=Math.min(u,v)
t=Math.min(t,v)
s=z.createTexture()
C.b.ag(z,3553,s)
C.b.aH(z,3553,10242,33071)
C.b.aH(z,3553,10243,33071)
C.b.aH(z,3553,10241,9729)
C.b.aH(z,3553,10240,9729)
C.b.f0(z,3553,0,6408,u,t,0,6408,5121,null)
C.b.ag(z,3553,null)
r=T.df(0,s)
r.e=x
r.f=w
r.r=u
r.x=t
r.dQ()
y.b=r.b
y.c=r.c
y.d=r.d
y.e=r.e
y.f=r.f
y.r=r.r
y.x=r.x
y=y.y
if(!(y==null))y.ee()
y=this.ch
x=y.b
this.z=x
this.c=y.r
this.d=y.x
C.b.ag(z,3553,x)
y=z.createRenderbuffer()
this.Q=y
C.b.e2(z,36161,y)
C.b.ki(z,36161,33189,this.c,this.d)
y=z.createFramebuffer()
this.y=y
C.b.aP(z,36160,y)
C.b.eF(z,36160,36064,3553,this.z,0)
C.b.jI(z,36160,36096,36161,this.Q)
C.b.ag(z,3553,null)
C.b.e2(z,36161,null)
C.b.aP(z,36160,null)}z=a.a
C.b.aP(z,36160,this.y)
C.b.bf(z,2884)
C.b.bf(z,2929)
C.b.eb(z,513)
y=this.dy
x=y.c
a.c=C.i.a2(x*this.a)
w=y.d
a.d=C.i.a2(w*this.b)
q=y.a
p=this.c
if(typeof p!=="number")return H.y(p)
o=C.i.a2(q*p)
y=y.b
q=this.d
if(typeof q!=="number")return H.y(q)
C.b.f9(z,o,C.i.a2(y*q),C.i.a2(x*p),C.i.a2(w*q))
C.b.e7(z,this.db)
y=this.cx
C.b.e6(z,y.a,y.b,y.c,y.d)
C.b.e5(z,16640)},
aR:function(a){C.b.aP(a.a,36160,null)},
n:{
dS:function(a,b,c,d,e,f){var z=new X.hl()
z.a=512
z.b=512
z.c=512
z.d=512
z.e=!0
z.f=!0
z.r=d
z.x=e
z.ch=T.df(0,null)
z.cx=new V.av(0,0,0,1)
z.cy=!0
z.db=2000
z.dx=!0
z.dy=V.da()
z.saJ(0,a)
z.saF(0,b)
return z}}},cc:{"^":"b;",$isaB:1},i2:{"^":"cr;0a,0b,0c,0d,0e,0f,0r,0x",
gl:function(){var z=this.x
if(z==null){z=D.A()
this.x=z}return z},
X:function(a){var z,y,x,w,v,u,t,s
z=a.a
C.b.aP(z,36160,null)
C.b.bf(z,2884)
C.b.bf(z,2929)
C.b.eb(z,513)
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
v=w.a
if(typeof y!=="number")return H.y(y)
u=C.i.a2(v*y)
v=w.b
if(typeof x!=="number")return H.y(x)
t=C.i.a2(v*x)
v=C.i.a2(w.c*y)
a.c=v
w=C.i.a2(w.d*x)
a.d=w
C.b.f9(z,u,t,v,w)
C.b.e7(z,this.c)
if(this.b){w=this.a
C.b.e6(z,w.a,w.b,w.c,w.d)
s=16640}else s=256
C.b.e5(z,s)},
aR:function(a){},
n:{
cY:function(a,b,c,d,e,f,g){var z,y
z=new X.i2()
y=new V.av(0,0,0,1)
z.a=y
z.b=a
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.da()
z.r=y
return z}}},i9:{"^":"b;0a,0b",
gl:function(){var z=this.b
if(z==null){z=D.A()
this.b=z}return z},
$isaB:1,
$iscc:1},iY:{"^":"b;0a,0b,0c,0d,0e,0f",
gl:function(){var z=this.f
if(z==null){z=D.A()
this.f=z}return z},
az:[function(a){var z
H.h(a,"$isw")
z=this.f
if(!(z==null))z.E(a)},function(){return this.az(null)},"kG","$1","$0","gdi",0,2,0],
sbj:function(a){var z,y
if(!J.F(this.b,a)){z=this.b
if(z!=null)z.gl().H(0,this.gdi())
y=this.b
this.b=a
if(a!=null)a.gl().h(0,this.gdi())
z=new D.v("mover",y,this.b,this,[U.aa])
z.b=!0
this.az(z)}},
$isaB:1,
$iscc:1,
n:{
eG:function(a,b,c,d,e){var z,y,x
z=new X.iY()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
z.sbj(c)
y=z.c
if(!$.l.$2(y,b)){x=z.c
z.c=b
y=new D.v("fov",x,b,z,[P.r])
y.b=!0
z.az(y)}y=z.d
if(!$.l.$2(y,d)){x=z.d
z.d=d
y=new D.v("near",x,d,z,[P.r])
y.b=!0
z.az(y)}y=z.e
if(!$.l.$2(y,a)){x=z.e
z.e=a
y=new D.v("far",x,a,z,[P.r])
y.b=!0
z.az(y)}return z}}},cr:{"^":"b;"}}],["","",,V,{"^":"",
mE:function(a){P.jU(C.N,new V.mF(a))},
hs:{"^":"b;a,b,0c,0d",
sh1:function(a){this.d=H.i(a,"$isa",[W.cW],"$asa")},
b0:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
H.n(c,{func:1,ret:-1,args:[P.T]})
if(this.c==null)return
z=this.d.length
y=P.du().gc2().j(0,this.a)
if(y==null||y.length<=z){x=d
w=!0}else{if(z>=y.length)return H.d(y,z)
x=y[z]==="1"
w=!1}c.$1(x)
v=document
u=v.createElement("label")
t=u.style
t.whiteSpace="nowrap"
J.dQ(this.c).h(0,u)
s=W.ib("checkbox")
s.checked=x
t=W.a4
W.Y(s,"change",H.n(new V.ht(this,c,s,z),{func:1,ret:-1,args:[t]}),!1,t)
C.B.Y(u,s)
r=v.createElement("span")
r.textContent=b
C.B.Y(u,r)
J.dQ(this.c).h(0,v.createElement("br"))
C.a.h(this.d,s)
if(w)this.dV(z,x)},
dV:function(a,b){var z,y,x,w,v,u,t
z=this.a
y=P.du().gc2().j(0,z)
if(y==null)y=""
x=y.length
if(x<a)y=C.c.k5(y,a-x+1,"0")
w=a>0?C.c.t(y,0,a):""
w+=b?"1":"0"
x=a+1
if(x<y.length)w+=C.c.aK(y,x)
v=P.du()
x=P.o
u=P.iv(v.gc2(),x,x)
u.q(0,z,w)
t=v.eY(u)
z=window.history
x=t.i(0)
z.toString;(z&&C.O).ig(z,new P.li([],[]).d8(""),"",x)}},
ht:{"^":"q:14;a,b,c,d",
$1:function(a){var z=this.c
this.b.$1(z.checked)
this.a.dV(this.d,z.checked)}},
mF:{"^":"q:48;a",
$1:function(a){H.h(a,"$isbb")
P.dO(C.i.f3(this.a.gjH(),2)+" fps")}},
jv:{"^":"b;0a,0b",
fD:function(a,b){var z,y,x,w,v,u,t
z=document
y=z.body
x=z.createElement("div")
x.className="scrollTop";(y&&C.w).Y(y,x)
w=z.createElement("div")
w.className="scrollPage"
C.w.Y(y,w)
v=z.createElement("div")
v.className="pageCenter"
C.l.Y(w,v)
if(a.length!==0){z.title=a
u=z.createElement("div")
u.className="pageTitle"
u.textContent=a
C.l.Y(v,u)}t=z.createElement("div")
this.a=t
C.l.Y(v,t)
this.b=null
t=W.a4
W.Y(z,"scroll",H.n(new V.jy(x),{func:1,ret:-1,args:[t]}),!1,t)},
dX:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.i(a,"$isa",[P.o],"$asa")
this.iu()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.kv(C.a.jN(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
switch(u.a){case"Bold":t=z.createElement("div")
t.className="boldPar"
t.textContent=u.b
C.l.Y(y,t)
break
case"Italic":t=z.createElement("div")
t.className="italicPar"
t.textContent=u.b
C.l.Y(y,t)
break
case"Code":t=z.createElement("div")
t.className="codePar"
t.textContent=u.b
C.l.Y(y,t)
break
case"Link":s=u.b
if(H.h7(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.d(r,1)
q.href=H.I(r[1])
q.textContent=H.I(r[0])
C.l.Y(y,q)}else{p=P.cB(C.a_,s,C.m,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.j(p)
q.textContent=s
C.l.Y(y,q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
C.l.Y(y,t)
break}}C.l.Y(this.a,y)},
jd:function(a){var z,y,x,w,v,u,t
H.i(a,"$isa",[P.o],"$asa")
z=document
y=z.createElement("table")
y.id="shellTable"
x=y.style
x.width="100%"
x.padding="0px"
x.marginLeft="auto"
x.marginRight="auto"
C.l.Y(this.a,y)
w=C.a4.hr(y,-1)
x=H.h((w&&C.G).dD(w,-1),"$iscq").style
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
t=H.h(C.G.dD(w,-1),"$iscq")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto";(t&&C.a3).Y(t,u)}},
iu:function(){var z,y,x,w
if(this.b!=null)return
z=new V.jV()
y=P.o
z.siB(new H.aW(0,0,[y,V.dd]))
z.siH(new H.aW(0,0,[y,V.dh]))
z.c=null
z.c=z.R(0,"Start")
y=z.R(0,"Start").G(0,"Bold")
x=V.a7(new H.Z("*"))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"Bold").G(0,"Bold")
x=new V.bx()
w=[V.bw]
x.saN(H.c([],w))
C.a.h(y.a,x)
y=V.a7(new H.Z("*"))
C.a.h(x.a,y)
y=z.R(0,"Bold").G(0,"BoldEnd")
x=V.a7(new H.Z("*"))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"Start").G(0,"Italic")
x=V.a7(new H.Z("_"))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"Italic").G(0,"Italic")
x=new V.bx()
x.saN(H.c([],w))
C.a.h(y.a,x)
y=V.a7(new H.Z("_"))
C.a.h(x.a,y)
y=z.R(0,"Italic").G(0,"ItalicEnd")
x=V.a7(new H.Z("_"))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"Start").G(0,"Code")
x=V.a7(new H.Z("`"))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"Code").G(0,"Code")
x=new V.bx()
x.saN(H.c([],w))
C.a.h(y.a,x)
y=V.a7(new H.Z("`"))
C.a.h(x.a,y)
y=z.R(0,"Code").G(0,"CodeEnd")
x=V.a7(new H.Z("`"))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"Start").G(0,"LinkHead")
x=V.a7(new H.Z("["))
C.a.h(y.a,x)
y.c=!0
y=z.R(0,"LinkHead").G(0,"LinkTail")
x=V.a7(new H.Z("|"))
C.a.h(y.a,x)
x=z.R(0,"LinkHead").G(0,"LinkEnd")
y=V.a7(new H.Z("]"))
C.a.h(x.a,y)
x.c=!0
x=z.R(0,"LinkHead").G(0,"LinkHead")
y=new V.bx()
y.saN(H.c([],w))
C.a.h(x.a,y)
x=V.a7(new H.Z("|]"))
C.a.h(y.a,x)
x=z.R(0,"LinkTail").G(0,"LinkEnd")
y=V.a7(new H.Z("]"))
C.a.h(x.a,y)
x.c=!0
x=z.R(0,"LinkTail").G(0,"LinkTail")
y=new V.bx()
y.saN(H.c([],w))
C.a.h(x.a,y)
x=V.a7(new H.Z("|]"))
C.a.h(y.a,x)
C.a.h(z.R(0,"Start").G(0,"Other").a,new V.hj())
x=z.R(0,"Other").G(0,"Other")
y=new V.bx()
y.saN(H.c([],w))
C.a.h(x.a,y)
x=V.a7(new H.Z("*_`["))
C.a.h(y.a,x)
x=z.R(0,"BoldEnd")
x.d=x.a.bq("Bold")
x=z.R(0,"ItalicEnd")
x.d=x.a.bq("Italic")
x=z.R(0,"CodeEnd")
x.d=x.a.bq("Code")
x=z.R(0,"LinkEnd")
x.d=x.a.bq("Link")
x=z.R(0,"Other")
x.d=x.a.bq("Other")
this.b=z},
n:{
jw:function(a,b){var z=new V.jv()
z.fD(a,!0)
return z}}},
jy:{"^":"q:14;a",
$1:function(a){P.eZ(C.u,new V.jx(this.a))}},
jx:{"^":"q:1;a",
$0:function(){var z,y,x
z=C.i.a2(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}}}],["","",,K,{"^":"",
h2:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
z={}
y=V.jw("Test 040",!0)
x=W.cU(null,null)
x.className="pageLargeCanvas"
x.id="testCanvas"
C.l.Y(y.a,x)
w=[P.o]
y.dX(H.c(["A combination of bump mapping with height map and specular map."],w))
y.jd(H.c(["controls"],w))
y.dX(H.c(["\xab[Back to Tests|../]"],w))
w=document
v=C.y.d9(w,"testCanvas")
if(v==null)H.p(P.t("Failed to find an element with the identifier, testCanvas."))
u=E.jS(v,!0,!0,!0,!1)
t=u.f.c_("../resources/gravel/colorLarge.png")
s=u.f.c_("../resources/gravel/bumpLarge.png")
r=u.f.c_("../resources/gravel/specularSmall.png")
q=u.f.c_("../resources/gravel/heightSmall.png")
y=U.e2(V.eB(0,0,2))
p=new U.eM()
p.a=0
p.b=0
p.c=0
p.d=0
p.e=0
p.f=0
p.r=0
p.sfd(0)
p.seW(0)
p.seZ(0)
o=p.d
if(!$.l.$2(o,0.6)){n=p.d
p.d=0.6
o=new D.v("deltaYaw",n,0.6,p,[P.r])
o.b=!0
p.O(o)}o=p.e
if(!$.l.$2(o,0.1)){n=p.e
p.e=0.1
o=new D.v("deltaPitch",n,0.1,p,[P.r])
o.b=!0
p.O(o)}o=p.f
if(!$.l.$2(o,0)){n=p.f
p.f=0
o=new D.v("deltaRoll",n,0,p,[P.r])
o.b=!0
p.O(o)}o=U.aa
m=[o]
l=U.ej(H.c([y,p],m))
k=E.cX(null,!0,null,"",F.mG(8,null,0.03,8),null)
k.sbj(l)
p=O.ex()
y=p.f
y.saC(0,new V.U(1,1,1))
k.saj(p)
y=new V.U(1,1,1)
j=new D.cm()
j.c=new V.U(1,1,1)
j.d=1
j.e=0
j.f=0
j.a=V.eJ()
n=j.b
j.b=l
l.gl().h(0,j.gfK())
p=new D.v("mover",n,j.b,j,[o])
p.b=!0
j.as(p)
j.c=y
if(!y.v(0,y)){n=j.c
j.c=y
y=new D.v("color",n,y,j,[V.U])
y.b=!0
j.as(y)}y=j.d
if(!$.l.$2(y,0.5)){n=j.d
j.d=0.5
y=new D.v("attenuation0",n,0.5,j,[P.r])
y.b=!0
j.as(y)}y=j.e
if(!$.l.$2(y,0.1)){n=j.e
j.e=0.1
y=new D.v("attenuation1",n,0.1,j,[P.r])
y.b=!0
j.as(y)}y=j.f
if(!$.l.$2(y,0)){n=j.f
j.f=0
y=new D.v("attenuation2",n,0,j,[P.r])
y.b=!0
j.as(y)}i=F.h6(!1,2,null,2,0)
h=E.cX(null,!0,null,"",i,null)
z.a=null
q.gl().h(0,new K.mr(z,u,q))
g=X.eG(2000,1.0471975511965976,null,0.1,null)
y=u.r
p=new U.kj()
o=U.e0()
o.sfa(0,!0)
o.seO(6.283185307179586)
o.seQ(0)
o.sa9(0,0)
o.seP(100)
o.sa3(0)
o.se9(0.5)
p.b=o
f=p.gbz()
o.gl().h(0,f)
o=U.e0()
o.sfa(0,!0)
o.seO(6.283185307179586)
o.seQ(0)
o.sa9(0,0)
o.seP(100)
o.sa3(0)
o.se9(0.5)
p.c=o
o.gl().h(0,f)
p.d=null
p.e=!1
p.f=!1
p.r=!1
p.x=2.5
p.y=2.5
p.z=2
p.Q=4
p.cx=!1
p.ch=!1
p.cy=0
p.db=0
p.dx=null
p.dy=0
p.fr=null
p.fx=null
e=new X.aL(!1,!1,!1)
n=p.d
p.d=e
o=[X.aL]
f=new D.v("modifiers",n,e,p,o)
f.b=!0
p.O(f)
f=p.f
if(f!==!1){p.f=!1
f=new D.v("invertX",f,!1,p,[P.T])
f.b=!0
p.O(f)}f=p.r
if(f!==!1){p.r=!1
f=new D.v("invertY",f,!1,p,[P.T])
f.b=!0
p.O(f)}p.cC(y)
y=u.r
f=new U.kk()
f.c=0.01
f.d=0
f.e=0
e=new X.aL(!1,!1,!1)
f.b=e
o=new D.v("modifiers",null,e,f,o)
o.b=!0
f.O(o)
f.cC(y)
g.sbj(U.ej(H.c([p,f,U.e2(V.eB(0,0,5))],m)))
d=O.ex()
d.dx.h(0,j)
y=d.r
y.saC(0,new V.U(0.3,0.3,0.3))
d.x.saC(0,new V.U(1,1,1))
y=d.z
if(y.c===C.d){y.c=C.j
y.ce()
y.cv(100)
p=y.a
p.a=null
p.B(null)}y.cv(40)
c=X.dS(800,600,!0,1,1,!0)
y=[E.an]
b=M.ef(null,H.c([h,k],y),null,null)
b.saj(d)
b.scI(g)
b.sb4(0,c)
a=X.dS(400,300,!0,0.5,0.5,!0)
a0=M.ef(null,H.c([h,k],y),null,null)
a0.scI(g)
a0.sb4(0,a)
y=new O.hJ()
y.d=1
y.e=10
a1=new V.U(1,1,1)
y.b=a1
p=[V.U]
o=new D.v("objectColor",null,a1,y,p)
o.b=!0
y.B(o)
a1=new V.U(0,0,0)
if(!J.F(y.c,a1)){n=y.c
y.c=a1
p=new D.v("fogColor",n,a1,y,p)
p.b=!0
y.B(p)}p=y.d
if(!$.l.$2(p,1)){n=y.d
y.d=1
p=new D.v("fogStart",n,1,y,[P.r])
p.b=!0
y.B(p)}p=y.e
if(!$.l.$2(p,4)){n=y.e
y.e=4
p=new D.v("fogStop",n,4,y,[P.r])
p.b=!0
y.B(p)}a0.saj(y)
y=c.ch
p=a.ch
a2=new O.i3()
a2.e=0
a2.f=4
a2.r=0.001
o=$.ey
if(o==null){o=new V.d5(1,0,0,0,1,0,0,0,1)
$.ey=o
a3=o}else a3=o
a2.b=a3
o=new D.v("textureMatrix",null,null,a2,[P.b])
o.b=!0
a2.B(o)
o=a2.c
if(o!==y){if(o!=null)o.gl().H(0,a2.ga7())
n=a2.c
a2.c=y
y.gl().h(0,a2.ga7())
y=new D.v("colorTexture",n,a2.c,a2,[T.c6])
y.b=!0
a2.B(y)}a2.sec(p)
y=a2.e
if(!$.l.$2(y,0)){n=a2.e
a2.e=0
y=new D.v("highOffset",n,0,a2,[P.r])
y.b=!0
a2.B(y)}y=a2.f
if(!$.l.$2(y,3)){n=a2.f
a2.f=3
y=new D.v("lowOffset",n,3,a2,[P.r])
y.b=!0
a2.B(y)}y=a2.r
if(!$.l.$2(y,0.001)){n=a2.r
a2.r=0.001
y=new D.v("depthLimit",n,0.001,a2,[P.r])
y.b=!0
a2.B(y)}a4=M.e3(null,null,null)
a4.saj(a2)
a5=new O.jL()
a1=new V.av(0,0,0,0)
a5.a=a1
y=new D.v("backColor",null,a1,a5,[V.av])
y.b=!0
a5.B(y)
a5.b=null
a5.shd(O.cd(O.ba))
a5.c.aS(a5.ghM(),a5.ghN())
a5.d=0
a5.e=null
y=a5.c
p=a.ch
y.h(0,O.eU(null,V.bz(0,0.8,0.2,0.2),!1,null,p))
p=a5.c
y=c.ch
p.h(0,O.eU(null,V.bz(0,0.6,0.2,0.2),!1,null,y))
a6=M.e3(null,null,null)
a6.sb4(0,X.cY(!1,!0,!1,null,2000,null,0))
a6.saj(a5)
y=M.aC
p=H.c([b,a0,a4,a6],[y])
o=new M.hz()
o.bu(y)
o.e=!1
o.f=null
o.aS(o.gi0(),o.gi1())
o.ba(0,p)
y=u.d
if(y!==o){if(y!=null)y.gl().H(0,u.gdg())
u.d=o
o.gl().h(0,u.gdg())
u.fH()}y=new V.hs("controls",!0)
w=C.y.d9(w,"controls")
y.c=w
if(w==null)H.p("Failed to find controls for CheckGroup")
y.sh1(H.c([],[W.cW]))
y.b0(0,"Color",new K.ms(d,t),!0)
y.b0(0,"Specular",new K.mt(d,r),!1)
y.b0(0,"Bump",new K.mu(d,s),!1)
y.b0(0,"Height",new K.mv(z,h,i),!1)
y.b0(0,"Blur",new K.mw(a2,a),!1)
y.b0(0,"Passes",new K.mx(a6,a5),!1)
V.mE(u)},
mr:{"^":"q:8;a,b,c",
$1:function(a){var z,y,x,w,v,u
H.h(a,"$isw")
z=this.b.f
y=this.c
x=y.r
w=y.x
z=z.a
C.b.aP(z,36160,z.createFramebuffer())
C.b.eF(z,36160,36064,3553,y.b,0)
if(typeof x!=="number")return x.k()
if(typeof w!=="number")return H.y(w)
v=new Uint8Array(x*w*4)
C.b.i8(z,0,0,x,w,6408,5121,v)
C.b.aP(z,36160,null)
u=F.mf(150,null,150)
z=this.a
z.a=u
u.at()
z.a.jh(new T.jQ(v,x,w),0.05)
w=z.a
x=$.$get$ay()
x.toString
w.ky(new Z.aQ($.$get$dw().a&~x.a))
z.a.kw(!1)
z.a.at()}},
ms:{"^":"q:5;a,b",
$1:function(a){var z,y
z=this.a
y=z.r
y.sc5(a?this.b:null)
z=z.x
z.sc5(a?this.b:null)}},
mt:{"^":"q:5;a,b",
$1:function(a){var z=this.a.z
z.sc5(a?this.b:null)}},
mu:{"^":"q:5;a,b",
$1:function(a){var z=this.a.Q
z.sc5(a?this.b:null)}},
mv:{"^":"q:5;a,b,c",
$1:function(a){var z=a?this.a.a:this.c
this.b.scd(0,z)}},
mw:{"^":"q:5;a,b",
$1:function(a){var z=a?this.b.ch:null
this.a.sec(z)}},
mx:{"^":"q:5;a,b",
$1:function(a){var z=a?this.b:null
this.a.saj(z)}}},1]]
setupProgram(dart,0,0)
J.N=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ep.prototype
return J.eo.prototype}if(typeof a=="string")return J.cj.prototype
if(a==null)return J.eq.prototype
if(typeof a=="boolean")return J.ie.prototype
if(a.constructor==Array)return J.b4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c0.prototype
return a}if(a instanceof P.b)return a
return J.cG(a)}
J.bk=function(a){if(typeof a=="string")return J.cj.prototype
if(a==null)return a
if(a.constructor==Array)return J.b4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c0.prototype
return a}if(a instanceof P.b)return a
return J.cG(a)}
J.fY=function(a){if(a==null)return a
if(a.constructor==Array)return J.b4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c0.prototype
return a}if(a instanceof P.b)return a
return J.cG(a)}
J.md=function(a){if(typeof a=="number")return J.ci.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cv.prototype
return a}
J.dL=function(a){if(typeof a=="string")return J.cj.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.cv.prototype
return a}
J.aI=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c0.prototype
return a}if(a instanceof P.b)return a
return J.cG(a)}
J.F=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.N(a).v(a,b)}
J.hb=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.md(a).V(a,b)}
J.hc=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mp(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bk(a).j(a,b)}
J.hd=function(a,b,c,d){return J.aI(a).fU(a,b,c,d)}
J.he=function(a,b){return J.dL(a).K(a,b)}
J.cM=function(a,b,c){return J.aI(a).ie(a,b,c)}
J.dP=function(a,b){return J.aI(a).Y(a,b)}
J.hf=function(a,b){return J.dL(a).Z(a,b)}
J.cN=function(a,b,c){return J.bk(a).jo(a,b,c)}
J.cO=function(a,b){return J.fY(a).an(a,b)}
J.hg=function(a,b,c,d){return J.aI(a).jC(a,b,c,d)}
J.dQ=function(a){return J.aI(a).gcJ(a)}
J.bQ=function(a){return J.N(a).gW(a)}
J.bR=function(a){return J.fY(a).gU(a)}
J.aJ=function(a){return J.bk(a).gp(a)}
J.hh=function(a,b){return J.aI(a).kj(a,b)}
J.hi=function(a,b){return J.aI(a).skz(a,b)}
J.af=function(a){return J.N(a).i(a)}
I.ai=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.w=W.ho.prototype
C.n=W.cT.prototype
C.x=W.cV.prototype
C.l=W.ed.prototype
C.O=W.i6.prototype
C.y=W.i8.prototype
C.P=J.G.prototype
C.a=J.b4.prototype
C.Q=J.eo.prototype
C.e=J.ep.prototype
C.o=J.eq.prototype
C.i=J.ci.prototype
C.c=J.cj.prototype
C.X=J.c0.prototype
C.B=W.ik.prototype
C.a2=W.iU.prototype
C.F=J.iZ.prototype
C.b=P.db.prototype
C.a3=W.cq.prototype
C.a4=W.jH.prototype
C.G=W.jI.prototype
C.v=J.cv.prototype
C.H=W.bG.prototype
C.I=W.kG.prototype
C.K=new P.hn(!1)
C.J=new P.hm(C.K)
C.L=new P.iX()
C.M=new P.ks()
C.k=new P.lc()
C.d=new A.ce(0,"ColorSourceType.None")
C.j=new A.ce(1,"ColorSourceType.Solid")
C.f=new A.ce(2,"ColorSourceType.Texture2D")
C.h=new A.ce(3,"ColorSourceType.TextureCube")
C.u=new P.bq(0)
C.N=new P.bq(5e6)
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
C.z=function(hooks) { return hooks; }

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
C.A=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.C=H.c(I.ai([127,2047,65535,1114111]),[P.k])
C.p=H.c(I.ai([0,0,32776,33792,1,10240,0,0]),[P.k])
C.q=H.c(I.ai([0,0,65490,45055,65535,34815,65534,18431]),[P.k])
C.r=H.c(I.ai([0,0,26624,1023,65534,2047,65534,2047]),[P.k])
C.Z=H.c(I.ai([0,0,32722,12287,65534,34815,65534,18431]),[P.k])
C.a_=H.c(I.ai([0,0,65498,45055,65535,34815,65534,18431]),[P.k])
C.t=H.c(I.ai([0,0,24576,1023,65534,34815,65534,18431]),[P.k])
C.D=H.c(I.ai([0,0,32754,11263,65534,34815,65534,18431]),[P.k])
C.a0=H.c(I.ai([0,0,32722,12287,65535,34815,65534,18431]),[P.k])
C.E=H.c(I.ai([0,0,65490,12287,65535,34815,65534,18431]),[P.k])
C.Y=H.c(I.ai([]),[P.o])
C.a1=new H.hD(0,{},C.Y,[P.o,P.o])
C.m=new P.kl(!1)
$.az=0
$.bo=null
$.dU=null
$.dD=!1
$.h_=null
$.fT=null
$.h5=null
$.cF=null
$.cI=null
$.dM=null
$.bf=null
$.bL=null
$.bM=null
$.dE=!1
$.O=C.k
$.ea=null
$.e9=null
$.e8=null
$.e7=null
$.l=V.iP()
$.ey=null
$.cl=null
$.eI=null
$.aY=null
$.bA=null
$.fj=null
$.fm=null
$.fl=null
$.fk=null
$.hL="uniform mat4 viewObjMat;                    \nuniform mat4 projMat;                       \n                                            \nattribute vec3 posAttr;                     \n                                            \nvarying float depth;                        \n                                            \nvoid main()                                 \n{                                           \n  vec4 pos = viewObjMat*vec4(posAttr, 1.0); \n  depth = pos.z;                            \n  gl_Position = projMat*pos;                \n}                                           \n"
$.hK="precision mediump float;                                  \n                                                          \nuniform vec3 objClr;                                      \nuniform vec3 fogClr;                                      \nuniform float fogStart;                                   \nuniform float fogStop;                                    \n                                                          \nvarying float depth;                                      \n                                                          \nvoid main()                                               \n{                                                         \n   float factor = (depth-fogStop)/(fogStart-fogStop);     \n   factor = clamp(factor, 0.0, 1.0);                      \n   gl_FragColor = vec4(mix(fogClr, objClr, factor), 1.0); \n}                                                         \n"
$.i5="uniform mat4 projViewObjMat;                                 \nuniform mat3 txt2DMat;                                       \n                                                             \nattribute vec3 posAttr;                                      \nattribute vec2 txtAttr;                                      \n                                                             \nvarying vec2 txt2D;                                          \n                                                             \nvoid main()                                                  \n{                                                            \n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy; \n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);           \n}                                                            \n"
$.i4="precision mediump float;                                  \n                                                          \n#define MAX_BLUR_RANGE 10.0                               \n#define BLUR_STEP 0.3333                                  \n                                                          \nuniform sampler2D colorTxt;                               \nuniform sampler2D depthTxt;                               \nuniform int nullColorTxt;                                 \nuniform int nullDepthTxt;                                 \nuniform float width;                                      \nuniform float height;                                     \nuniform float highOffset;                                 \nuniform float lowOffset;                                  \nuniform float depthLimit;                                 \n                                                          \nvarying vec2 txt2D;                                       \n                                                          \nfloat div;                                                \nvec4 color;                                               \n                                                          \nvoid offsetColor(float baseDepth, float tu, float tv)     \n{                                                         \n   vec2 txtOffset = vec2(txt2D.x + tu/width,              \n                         txt2D.y + tv/height);            \n   float depth = texture2D(depthTxt, txtOffset).r;        \n   if (depth - depthLimit > baseDepth) return;            \n   div += 1.0;                                            \n   color += texture2D(colorTxt, txtOffset);               \n}                                                         \n                                                          \nvoid main()                                               \n{                                                         \n   if(nullColorTxt > 0)                                   \n   {                                                      \n      gl_FragColor = vec4(1.0);                           \n      return;                                             \n   }                                                      \n   color = texture2D(colorTxt, txt2D);                    \n   float baseDepth;                                       \n   if(nullDepthTxt > 0) baseDepth = 1.0;                  \n   else baseDepth = texture2D(depthTxt, txt2D).r;         \n   float offset = mix(lowOffset, highOffset, baseDepth);  \n   offset = abs(offset);                                  \n   div = 1.0;                                             \n   if(offset >= 1.0)                                      \n   {                                                      \n      for(float x=0.0; x<MAX_BLUR_RANGE; x+=BLUR_STEP)    \n      {                                                   \n         if(x > offset) break;                            \n         for(float y=0.0; y<MAX_BLUR_RANGE; y+=BLUR_STEP) \n         {                                                \n            if(y > offset) break;                         \n            offsetColor(baseDepth,  x,  y);               \n            offsetColor(baseDepth,  x, -y);               \n            offsetColor(baseDepth, -x,  y);               \n            offsetColor(baseDepth, -x, -y);               \n         }                                                \n      }                                                   \n   }                                                      \n   gl_FragColor = color / div;                            \n}                                                         \n"
$.eH=null
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
I.$lazy(y,x,w)}})(["e5","$get$e5",function(){return H.fZ("_$dart_dartClosure")},"d0","$get$d0",function(){return H.fZ("_$dart_js")},"f2","$get$f2",function(){return H.aD(H.cs({
toString:function(){return"$receiver$"}}))},"f3","$get$f3",function(){return H.aD(H.cs({$method$:null,
toString:function(){return"$receiver$"}}))},"f4","$get$f4",function(){return H.aD(H.cs(null))},"f5","$get$f5",function(){return H.aD(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"f9","$get$f9",function(){return H.aD(H.cs(void 0))},"fa","$get$fa",function(){return H.aD(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"f7","$get$f7",function(){return H.aD(H.f8(null))},"f6","$get$f6",function(){return H.aD(function(){try{null.$method$}catch(z){return z.message}}())},"fc","$get$fc",function(){return H.aD(H.f8(void 0))},"fb","$get$fb",function(){return H.aD(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dz","$get$dz",function(){return P.kH()},"bN","$get$bN",function(){return[]},"fi","$get$fi",function(){return P.kp()},"fq","$get$fq",function(){return H.iS(H.b0(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.k])))},"fI","$get$fI",function(){return P.jf("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fP","$get$fP",function(){return P.lQ()},"e4","$get$e4",function(){return{}},"fn","$get$fn",function(){return Z.ar(0)},"dw","$get$dw",function(){return Z.ar(511)},"a9","$get$a9",function(){return Z.ar(1)},"ay","$get$ay",function(){return Z.ar(2)},"aG","$get$aG",function(){return Z.ar(4)},"as","$get$as",function(){return Z.ar(8)},"aH","$get$aH",function(){return Z.ar(16)},"bE","$get$bE",function(){return Z.ar(32)},"bF","$get$bF",function(){return Z.ar(64)},"dx","$get$dx",function(){return Z.ar(96)},"b_","$get$b_",function(){return Z.ar(128)},"aF","$get$aF",function(){return Z.ar(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.w]},{func:1,ret:P.C},{func:1,ret:-1,args:[D.w]},{func:1,ret:-1},{func:1,ret:-1,args:[W.aw]},{func:1,ret:P.C,args:[P.T]},{func:1,ret:P.C,args:[,,]},{func:1,ret:-1,args:[P.k,[P.m,E.an]]},{func:1,ret:P.C,args:[D.w]},{func:1,ret:P.C,args:[F.a5]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.a4]},{func:1,ret:-1,args:[W.bd]},{func:1,ret:P.C,args:[F.ag,P.r,P.r]},{func:1,ret:P.C,args:[W.a4]},{func:1,ret:P.r,args:[P.r,P.r]},{func:1,ret:-1,args:[P.k,[P.m,V.ae]]},{func:1,args:[,]},{func:1,ret:P.r},{func:1,ret:P.o,args:[P.k]},{func:1,ret:-1,args:[P.k,[P.m,M.aC]]},{func:1,ret:-1,args:[P.k,[P.m,O.ba]]},{func:1,ret:-1,args:[P.k,[P.m,U.aa]]},{func:1,ret:-1,args:[P.k,[P.m,D.a0]]},{func:1,ret:P.C,args:[,]},{func:1,ret:-1,args:[W.bu]},{func:1,ret:P.C,args:[{func:1,ret:-1}]},{func:1,args:[,P.o]},{func:1,ret:P.k,args:[P.k,P.k]},{func:1,ret:P.C,args:[P.aj]},{func:1,ret:P.C,args:[{func:1,ret:-1,args:[D.w]}]},{func:1,ret:P.C,args:[,],opt:[,]},{func:1,ret:W.V,args:[W.K]},{func:1,ret:P.T,args:[P.r,P.r]},{func:1,ret:-1,args:[W.bG]},{func:1,ret:P.T,args:[W.K]},{func:1,ret:P.T,args:[[P.m,D.a0]]},{func:1,args:[W.a4]},{func:1,ret:-1,args:[P.o],opt:[,]},{func:1,ret:P.J,args:[,,]},{func:1,ret:P.k,args:[[P.a,P.k],P.k]},{func:1,ret:P.C,args:[P.o,,]},{func:1,ret:-1,args:[P.k,P.k]},{func:1,ret:P.C,args:[P.o]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,args:[P.o]},{func:1,ret:P.o,args:[P.o]},{func:1,ret:[P.H,P.o,P.o],args:[[P.H,P.o,P.o],P.o]},{func:1,ret:P.C,args:[P.bb]},{func:1,ret:-1,args:[P.o,P.k]},{func:1,ret:P.J,args:[P.k]},{func:1,ret:[P.aR,,],args:[,]}]
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
if(x==y)H.mJ(d||a)
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
Isolate.ai=a.ai
Isolate.dJ=a.dJ
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
if(typeof dartMainRunner==="function")dartMainRunner(K.h2,[])
else K.h2([])})})()
//# sourceMappingURL=test.dart.js.map
