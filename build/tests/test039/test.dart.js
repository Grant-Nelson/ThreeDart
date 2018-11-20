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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isC)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.cU"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cU"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.cU(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.cV=function(){}
var dart=[["","",,H,{"^":"",kg:{"^":"a;a"}}],["","",,J,{"^":"",
cZ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c_:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cX==null){H.jP()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.h(P.ej("Return interceptor for "+H.f(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cl()]
if(v!=null)return v
v=H.jU(a)
if(v!=null)return v
if(typeof a=="function")return C.L
y=Object.getPrototypeOf(a)
if(y==null)return C.v
if(y===Object.prototype)return C.v
if(typeof w=="function"){Object.defineProperty(w,$.$get$cl(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
C:{"^":"a;",
q:function(a,b){return a===b},
gN:function(a){return H.b8(a)},
i:["e0",function(a){return"Instance of '"+H.aI(a)+"'"}],
"%":"DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo|WebGLRenderbuffer"},
fK:{"^":"C;",
i:function(a){return String(a)},
gN:function(a){return a?519018:218159},
$isY:1},
dv:{"^":"C;",
q:function(a,b){return null==b},
i:function(a){return"null"},
gN:function(a){return 0},
$isB:1},
cm:{"^":"C;",
gN:function(a){return 0},
i:["e1",function(a){return String(a)}]},
hk:{"^":"cm;"},
cK:{"^":"cm;"},
bu:{"^":"cm;",
i:function(a){var z=a[$.$get$dh()]
if(z==null)return this.e1(a)
return"JavaScript function for "+H.f(J.a_(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscg:1},
aF:{"^":"C;$ti",
h:function(a,b){H.w(b,H.r(a,0))
if(!!a.fixed$length)H.m(P.Z("add"))
a.push(b)},
ih:function(a,b){var z
if(!!a.fixed$length)H.m(P.Z("removeAt"))
z=a.length
if(b>=z)throw H.h(P.by(b,null,null))
return a.splice(b,1)[0]},
A:function(a,b){var z
if(!!a.fixed$length)H.m(P.Z("remove"))
for(z=0;z<a.length;++z)if(J.J(a[z],b)){a.splice(z,1)
return!0}return!1},
Z:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.r(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.h(P.aW(a))}},
u:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.U(z,y,H.f(a[y]))
return z.join(b)},
hU:function(a){return this.u(a,"")},
Y:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
e_:function(a,b,c){var z=a.length
if(b>z)throw H.h(P.a2(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.h(P.a2(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.r(a,0)])
return H.c(a.slice(b,c),[H.r(a,0)])},
ghO:function(a){if(a.length>0)return a[0]
throw H.h(H.dr())},
gbY:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.h(H.dr())},
at:function(a,b){var z
for(z=0;z<a.length;++z)if(J.J(a[z],b))return!0
return!1},
i:function(a){return P.cj(a,"[","]")},
gL:function(a){return new J.ak(a,a.length,0,[H.r(a,0)])},
gN:function(a){return H.b8(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.m(P.Z("set length"))
if(b<0)throw H.h(P.a2(b,0,null,"newLength",null))
a.length=b},
U:function(a,b,c){H.w(c,H.r(a,0))
if(!!a.immutable$list)H.m(P.Z("indexed set"))
if(b>=a.length||b<0)throw H.h(H.bm(a,b))
a[b]=c},
$iso:1,
$isb:1,
m:{
fJ:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.c6(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.a2(a,0,4294967295,"length",null))
return J.ds(new Array(a),b)},
ds:function(a,b){return J.bM(H.c(a,[b]))},
bM:function(a){H.c2(a)
a.fixed$length=Array
return a}}},
kf:{"^":"aF;$ti"},
ak:{"^":"a;a,b,c,0d,$ti",
scn:function(a){this.d=H.w(a,H.r(this,0))},
gG:function(){return this.d},
w:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.h(H.t(z))
x=this.c
if(x>=y){this.scn(null)
return!1}this.scn(z[x]);++this.c
return!0},
$isaz:1},
bN:{"^":"C;",
ix:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.h(P.Z(""+a+".toInt()"))},
bW:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.h(P.Z(""+a+".floor()"))},
a6:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.Z(""+a+".round()"))},
dE:function(a,b){var z,y
if(b>20)throw H.h(P.a2(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gN:function(a){return a&0x1FFFFFFF},
dW:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
e3:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cM(a,b)},
T:function(a,b){return(a|0)===a?a/b|0:this.cM(a,b)},
cM:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.h(P.Z("Result of truncating division is "+H.f(z)+": "+H.f(a)+" ~/ "+b))},
aY:function(a,b){var z
if(a>0)z=this.fL(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fL:function(a,b){return b>31?0:a>>>b},
bn:function(a,b){if(typeof b!=="number")throw H.h(H.aC(b))
return a<b},
$isq:1,
$isab:1},
du:{"^":"bN;",$isu:1},
dt:{"^":"bN;"},
ck:{"^":"C;",
bM:function(a,b){if(b<0)throw H.h(H.bm(a,b))
if(b>=a.length)H.m(H.bm(a,b))
return a.charCodeAt(b)},
aT:function(a,b){if(b>=a.length)throw H.h(H.bm(a,b))
return a.charCodeAt(b)},
H:function(a,b){H.I(b)
if(typeof b!=="string")throw H.h(P.c6(b,null,null))
return a+b},
cf:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.by(b,null,null))
if(b>c)throw H.h(P.by(b,null,null))
if(c>a.length)throw H.h(P.by(c,null,null))
return a.substring(b,c)},
ce:function(a,b){return this.cf(a,b,null)},
O:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.z)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
i5:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.O(c,z)+a},
a0:function(a,b){return this.i5(a,b," ")},
hx:function(a,b,c){if(c>a.length)throw H.h(P.a2(c,0,a.length,null,null))
return H.f0(a,b,c)},
i:function(a){return a},
gN:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$isdH:1,
$isv:1}}],["","",,H,{"^":"",
dr:function(){return new P.hT("No element")},
Q:{"^":"ip;a",
gl:function(a){return this.a.length},
j:function(a,b){return C.i.bM(this.a,b)},
$asek:function(){return[P.u]},
$asL:function(){return[P.u]},
$aso:function(){return[P.u]},
$asb:function(){return[P.u]}},
fs:{"^":"o;"},
dy:{"^":"a;a,b,c,0d,$ti",
saC:function(a){this.d=H.w(a,H.r(this,0))},
gG:function(){return this.d},
w:function(){var z,y,x,w
z=this.a
y=J.bY(z)
x=y.gl(z)
if(this.b!==x)throw H.h(P.aW(z))
w=this.c
if(w>=x){this.saC(null)
return!1}this.saC(y.Y(z,w));++this.c
return!0},
$isaz:1},
h0:{"^":"o;a,b,$ti",
gL:function(a){return new H.h1(J.bo(this.a),this.b,this.$ti)},
gl:function(a){return J.bp(this.a)},
Y:function(a,b){return this.b.$1(J.d3(this.a,b))},
$aso:function(a,b){return[b]}},
h1:{"^":"az;0a,b,c,$ti",
saC:function(a){this.a=H.w(a,H.r(this,1))},
w:function(){var z=this.b
if(z.w()){this.saC(this.c.$1(z.gG()))
return!0}this.saC(null)
return!1},
gG:function(){return this.a},
$asaz:function(a,b){return[b]}},
iH:{"^":"o;a,b,$ti",
gL:function(a){return new H.iI(J.bo(this.a),this.b,this.$ti)}},
iI:{"^":"az;a,b,$ti",
w:function(){var z,y
for(z=this.a,y=this.b;z.w();)if(y.$1(z.gG()))return!0
return!1},
gG:function(){return this.a.gG()}},
bK:{"^":"a;$ti"},
ek:{"^":"a;$ti"},
ip:{"^":"bO+ek;"}}],["","",,H,{"^":"",
aU:function(a){var z,y
z=H.I(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
jK:function(a){return init.types[H.X(a)]},
jS:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.H(a).$isam},
f:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a_(a)
if(typeof z!=="string")throw H.h(H.aC(a))
return z},
b8:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aI:function(a){return H.hl(a)+H.cS(H.aD(a),0,null)},
hl:function(a){var z,y,x,w,v,u,t,s,r
z=J.H(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.D||!!z.$iscK){u=C.u(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aU(w.length>1&&C.i.aT(w,0)===36?C.i.ce(w,1):w)},
dN:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
hu:function(a){var z,y,x,w
z=H.c([],[P.u])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.t)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.h(H.aC(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.aY(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.h(H.aC(w))}return H.dN(z)},
dO:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.h(H.aC(x))
if(x<0)throw H.h(H.aC(x))
if(x>65535)return H.hu(a)}return H.dN(a)},
ht:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.aY(z,10))>>>0,56320|z&1023)}throw H.h(P.a2(a,0,1114111,null,null))},
aH:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hs:function(a){var z=H.aH(a).getFullYear()+0
return z},
hq:function(a){var z=H.aH(a).getMonth()+1
return z},
hm:function(a){var z=H.aH(a).getDate()+0
return z},
hn:function(a){var z=H.aH(a).getHours()+0
return z},
hp:function(a){var z=H.aH(a).getMinutes()+0
return z},
hr:function(a){var z=H.aH(a).getSeconds()+0
return z},
ho:function(a){var z=H.aH(a).getMilliseconds()+0
return z},
aS:function(a){throw H.h(H.aC(a))},
e:function(a,b){if(a==null)J.bp(a)
throw H.h(H.bm(a,b))},
bm:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ax(!0,b,"index",null)
z=H.X(J.bp(a))
if(!(b<0)){if(typeof z!=="number")return H.aS(z)
y=b>=z}else y=!0
if(y)return P.b_(b,a,"index",null,z)
return P.by(b,"index",null)},
jG:function(a,b,c){if(a>c)return new P.bP(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bP(a,c,!0,b,"end","Invalid value")
return new P.ax(!0,b,"end",null)},
aC:function(a){return new P.ax(!0,a,null,null)},
jB:function(a){if(typeof a!=="number")throw H.h(H.aC(a))
return a},
h:function(a){var z
if(a==null)a=new P.dG()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.f2})
z.name=""}else z.toString=H.f2
return z},
f2:function(){return J.a_(this.dartException)},
m:function(a){throw H.h(a)},
t:function(a){throw H.h(P.aW(a))},
aE:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.k5(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.aY(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cn(H.f(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dF(H.f(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$e8()
u=$.$get$e9()
t=$.$get$ea()
s=$.$get$eb()
r=$.$get$ef()
q=$.$get$eg()
p=$.$get$ed()
$.$get$ec()
o=$.$get$ei()
n=$.$get$eh()
m=v.a_(y)
if(m!=null)return z.$1(H.cn(H.I(y),m))
else{m=u.a_(y)
if(m!=null){m.method="call"
return z.$1(H.cn(H.I(y),m))}else{m=t.a_(y)
if(m==null){m=s.a_(y)
if(m==null){m=r.a_(y)
if(m==null){m=q.a_(y)
if(m==null){m=p.a_(y)
if(m==null){m=s.a_(y)
if(m==null){m=o.a_(y)
if(m==null){m=n.a_(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dF(H.I(y),m))}}return z.$1(new H.io(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dX()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ax(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dX()
return a},
aR:function(a){var z
if(a==null)return new H.eE(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eE(a)},
jI:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.U(0,a[y],a[x])}return b},
jR:function(a,b,c,d,e,f){H.l(a,"$iscg")
switch(H.X(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.n("Unsupported number of arguments for wrapped closure"))},
aP:function(a,b){var z
H.X(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.jR)
a.$identity=z
return z},
fh:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.H(d).$isb){z.$reflectionInfo=d
x=H.hx(z).r}else x=d
w=e?Object.create(new H.hU().constructor.prototype):Object.create(new H.c8(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.ac
if(typeof u!=="number")return u.H()
$.ac=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.dc(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.jK,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.d6:H.c9
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.h("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.dc(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w["call*"]=q
w.$R=z.$R
w.$D=z.$D
return v},
fe:function(a,b,c,d){var z=H.c9
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dc:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fg(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fe(y,!w,z,b)
if(y===0){w=$.ac
if(typeof w!=="number")return w.H()
$.ac=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aV
if(v==null){v=H.bE("self")
$.aV=v}return new Function(w+H.f(v)+";return "+u+"."+H.f(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ac
if(typeof w!=="number")return w.H()
$.ac=w+1
t+=w
w="return function("+t+"){return this."
v=$.aV
if(v==null){v=H.bE("self")
$.aV=v}return new Function(w+H.f(v)+"."+H.f(z)+"("+t+");}")()},
ff:function(a,b,c,d){var z,y
z=H.c9
y=H.d6
switch(b?-1:a){case 0:throw H.h(H.hG("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fg:function(a,b){var z,y,x,w,v,u,t,s
z=$.aV
if(z==null){z=H.bE("self")
$.aV=z}y=$.d5
if(y==null){y=H.bE("receiver")
$.d5=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.ff(w,!u,x,b)
if(w===1){z="return function(){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+");"
y=$.ac
if(typeof y!=="number")return y.H()
$.ac=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+", "+s+");"
y=$.ac
if(typeof y!=="number")return y.H()
$.ac=y+1
return new Function(z+y+"}")()},
cU:function(a,b,c,d,e,f,g){return H.fh(a,b,H.X(c),d,!!e,!!f,g)},
I:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.a9(a,"String"))},
kE:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.a9(a,"double"))},
jY:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.a9(a,"num"))},
eR:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.a9(a,"bool"))},
X:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.a9(a,"int"))},
eZ:function(a,b){throw H.h(H.a9(a,H.aU(H.I(b).substring(3))))},
k_:function(a,b){throw H.h(H.fc(a,H.aU(H.I(b).substring(3))))},
l:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.H(a)[b])return a
H.eZ(a,b)},
d:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.H(a)[b]
else z=!0
if(z)return a
H.k_(a,b)},
c2:function(a){if(a==null)return a
if(!!J.H(a).$isb)return a
throw H.h(H.a9(a,"List<dynamic>"))},
jT:function(a,b){var z
if(a==null)return a
z=J.H(a)
if(!!z.$isb)return a
if(z[b])return a
H.eZ(a,b)},
eS:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.X(z)]
else return a.$S()}return},
bD:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.eS(J.H(a))
if(z==null)return!1
return H.eI(z,null,b,null)},
j:function(a,b){var z,y
if(a==null)return a
if($.cP)return a
$.cP=!0
try{if(H.bD(a,b))return a
z=H.c4(b)
y=H.a9(a,z)
throw H.h(y)}finally{$.cP=!1}},
cW:function(a,b){if(a!=null&&!H.cT(a,b))H.m(H.a9(a,H.c4(b)))
return a},
eM:function(a){var z,y
z=J.H(a)
if(!!z.$isp){y=H.eS(z)
if(y!=null)return H.c4(y)
return"Closure"}return H.aI(a)},
k4:function(a){throw H.h(new P.fk(H.I(a)))},
eU:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
aD:function(a){if(a==null)return
return a.$ti},
kF:function(a,b,c){return H.aT(a["$as"+H.f(c)],H.aD(b))},
c0:function(a,b,c,d){var z
H.I(c)
H.X(d)
z=H.aT(a["$as"+H.f(c)],H.aD(b))
return z==null?null:z[d]},
aa:function(a,b,c){var z
H.I(b)
H.X(c)
z=H.aT(a["$as"+H.f(b)],H.aD(a))
return z==null?null:z[c]},
r:function(a,b){var z
H.X(b)
z=H.aD(a)
return z==null?null:z[b]},
c4:function(a){return H.aB(a,null)},
aB:function(a,b){var z,y
H.i(b,"$isb",[P.v],"$asb")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aU(a[0].builtin$cls)+H.cS(a,1,b)
if(typeof a=="function")return H.aU(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.X(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.e(b,y)
return H.f(b[y])}if('func' in a)return H.jr(a,b)
if('futureOr' in a)return"FutureOr<"+H.aB("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jr:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.v]
H.i(b,"$isb",z,"$asb")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.e(b,r)
t=C.i.H(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aB(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aB(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aB(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aB(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.jH(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.I(z[l])
n=n+m+H.aB(i[h],b)+(" "+H.f(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
cS:function(a,b,c){var z,y,x,w,v,u
H.i(c,"$isb",[P.v],"$asb")
if(a==null)return""
z=new P.bA("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aB(u,c)}return"<"+z.i(0)+">"},
aT:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bC:function(a,b,c,d){var z,y
H.I(b)
H.c2(c)
H.I(d)
if(a==null)return!1
z=H.aD(a)
y=J.H(a)
if(y[b]==null)return!1
return H.eP(H.aT(y[d],z),null,c,null)},
i:function(a,b,c,d){H.I(b)
H.c2(c)
H.I(d)
if(a==null)return a
if(H.bC(a,b,c,d))return a
throw H.h(H.a9(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aU(b.substring(3))+H.cS(c,0,null),init.mangledGlobalNames)))},
eP:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a6(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a6(a[y],b,c[y],d))return!1
return!0},
kC:function(a,b,c){return a.apply(b,H.aT(J.H(b)["$as"+H.f(c)],H.aD(b)))},
eW:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="B"||a===-1||a===-2||H.eW(z)}return!1},
cT:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="a"||b.builtin$cls==="B"||b===-1||b===-2||H.eW(b)
if(b==null||b===-1||b.builtin$cls==="a"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cT(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bD(a,b)}z=J.H(a).constructor
y=H.aD(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a6(z,null,b,null)},
w:function(a,b){if(a!=null&&!H.cT(a,b))throw H.h(H.a9(a,H.c4(b)))
return a},
a6:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a6(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="B")return!0
if('func' in c)return H.eI(a,b,c,d)
if('func' in a)return c.builtin$cls==="cg"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a6("type" in a?a.type:null,b,x,d)
else if(H.a6(a,b,x,d))return!0
else{if(!('$is'+"aZ" in y.prototype))return!1
w=y.prototype["$as"+"aZ"]
v=H.aT(w,z?a.slice(1):null)
return H.a6(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eP(H.aT(r,z),b,u,d)},
eI:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.a6(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.a6(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.a6(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.a6(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.jX(m,b,l,d)},
jX:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a6(c[w],d,a[w],b))return!1}return!0},
kD:function(a,b,c){Object.defineProperty(a,H.I(b),{value:c,enumerable:false,writable:true,configurable:true})},
jU:function(a){var z,y,x,w,v,u
z=H.I($.eV.$1(a))
y=$.bX[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c1[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.I($.eO.$2(a,z))
if(z!=null){y=$.bX[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c1[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c3(x)
$.bX[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.c1[z]=x
return x}if(v==="-"){u=H.c3(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eY(a,x)
if(v==="*")throw H.h(P.ej(z))
if(init.leafTags[z]===true){u=H.c3(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eY(a,x)},
eY:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cZ(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c3:function(a){return J.cZ(a,!1,null,!!a.$isam)},
jW:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c3(z)
else return J.cZ(z,c,null,null)},
jP:function(){if(!0===$.cX)return
$.cX=!0
H.jQ()},
jQ:function(){var z,y,x,w,v,u,t,s
$.bX=Object.create(null)
$.c1=Object.create(null)
H.jL()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.f_.$1(v)
if(u!=null){t=H.jW(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
jL:function(){var z,y,x,w,v,u,t
z=C.I()
z=H.aO(C.F,H.aO(C.K,H.aO(C.t,H.aO(C.t,H.aO(C.J,H.aO(C.G,H.aO(C.H(C.u),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eV=new H.jM(v)
$.eO=new H.jN(u)
$.f_=new H.jO(t)},
aO:function(a,b){return a(b)||b},
f0:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
f1:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hw:{"^":"a;a,b,c,d,e,f,r,0x",m:{
hx:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bM(z)
y=z[0]
x=z[1]
return new H.hw(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
i9:{"^":"a;a,b,c,d,e,f",
a_:function(a){var z,y,x
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
ah:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.v])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.i9(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bR:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
ee:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hh:{"^":"O;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
m:{
dF:function(a,b){return new H.hh(a,b==null?null:b.method)}}},
fN:{"^":"O;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.f(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.f(this.a)+")"},
m:{
cn:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.fN(a,y,z?null:b.receiver)}}},
io:{"^":"O;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
k5:{"^":"p:11;a",
$1:function(a){if(!!J.H(a).$isO)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eE:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isap:1},
p:{"^":"a;",
i:function(a){return"Closure '"+H.aI(this).trim()+"'"},
gdK:function(){return this},
$iscg:1,
gdK:function(){return this}},
e_:{"^":"p;"},
hU:{"^":"e_;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aU(z)+"'"}},
c8:{"^":"e_;a,b,c,d",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c8))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gN:function(a){var z,y
z=this.c
if(z==null)y=H.b8(this.a)
else y=typeof z!=="object"?J.bn(z):H.b8(z)
return(y^H.b8(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.aI(z)+"'")},
m:{
c9:function(a){return a.a},
d6:function(a){return a.c},
bE:function(a){var z,y,x,w,v
z=new H.c8("self","target","receiver","name")
y=J.bM(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ia:{"^":"O;a",
i:function(a){return this.a},
m:{
a9:function(a,b){return new H.ia("TypeError: "+H.f(P.bI(a))+": type '"+H.eM(a)+"' is not a subtype of type '"+b+"'")}}},
fb:{"^":"O;a",
i:function(a){return this.a},
m:{
fc:function(a,b){return new H.fb("CastError: "+H.f(P.bI(a))+": type '"+H.eM(a)+"' is not a subtype of type '"+b+"'")}}},
hF:{"^":"O;a",
i:function(a){return"RuntimeError: "+H.f(this.a)},
m:{
hG:function(a){return new H.hF(a)}}},
b0:{"^":"fY;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
cV:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.cw(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.cw(y,a)}else return this.hS(a)},
hS:function(a){var z=this.d
if(z==null)return!1
return this.bX(this.bs(z,J.bn(a)&0x3ffffff),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.aU(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.aU(w,b)
x=y==null?null:y.b
return x}else return this.hT(b)},
hT:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bs(z,J.bn(a)&0x3ffffff)
x=this.bX(y,a)
if(x<0)return
return y[x].b},
U:function(a,b,c){var z,y,x,w,v,u
H.w(b,H.r(this,0))
H.w(c,H.r(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bw()
this.b=z}this.cp(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bw()
this.c=y}this.cp(y,b,c)}else{x=this.d
if(x==null){x=this.bw()
this.d=x}w=J.bn(b)&0x3ffffff
v=this.bs(x,w)
if(v==null)this.bD(x,w,[this.bx(b,c)])
else{u=this.bX(v,b)
if(u>=0)v[u].b=c
else v.push(this.bx(b,c))}}},
Z:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.h(P.aW(this))
z=z.c}},
cp:function(a,b,c){var z
H.w(b,H.r(this,0))
H.w(c,H.r(this,1))
z=this.aU(a,b)
if(z==null)this.bD(a,b,this.bx(b,c))
else z.b=c},
bx:function(a,b){var z,y
z=new H.fR(H.w(a,H.r(this,0)),H.w(b,H.r(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.r=this.r+1&67108863
return z},
bX:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.J(a[y].a,b))return y
return-1},
i:function(a){return P.dA(this)},
aU:function(a,b){return a[b]},
bs:function(a,b){return a[b]},
bD:function(a,b,c){a[b]=c},
eC:function(a,b){delete a[b]},
cw:function(a,b){return this.aU(a,b)!=null},
bw:function(){var z=Object.create(null)
this.bD(z,"<non-identifier-key>",z)
this.eC(z,"<non-identifier-key>")
return z},
$isdx:1},
fR:{"^":"a;a,b,0c,0d"},
fS:{"^":"fs;a,$ti",
gl:function(a){return this.a.a},
gL:function(a){var z,y
z=this.a
y=new H.fT(z,z.r,this.$ti)
y.c=z.e
return y}},
fT:{"^":"a;a,b,0c,0d,$ti",
sco:function(a){this.d=H.w(a,H.r(this,0))},
gG:function(){return this.d},
w:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.aW(z))
else{z=this.c
if(z==null){this.sco(null)
return!1}else{this.sco(z.a)
this.c=this.c.c
return!0}}},
$isaz:1},
jM:{"^":"p:11;a",
$1:function(a){return this.a(a)}},
jN:{"^":"p:22;a",
$2:function(a,b){return this.a(a,b)}},
jO:{"^":"p:25;a",
$1:function(a){return this.a(H.I(a))}},
fL:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isdH:1,
m:{
fM:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.h(new P.fC("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
jH:function(a){return J.ds(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
jZ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bi:function(a){return a},
bh:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.bm(b,a))},
jq:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.h(H.jG(a,b,c))
return b},
he:{"^":"C;",$isks:1,"%":";ArrayBufferView;cr|eA|eB|hd|eC|eD|b5"},
cr:{"^":"he;",
gl:function(a){return a.length},
$isam:1,
$asam:I.cV},
hd:{"^":"eB;",
j:function(a,b){H.bh(b,a,a.length)
return a[b]},
$asbK:function(){return[P.q]},
$asL:function(){return[P.q]},
$iso:1,
$aso:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]},
"%":"Float32Array"},
b5:{"^":"eD;",
$asbK:function(){return[P.u]},
$asL:function(){return[P.u]},
$iso:1,
$aso:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}},
kh:{"^":"b5;",
j:function(a,b){H.bh(b,a,a.length)
return a[b]},
"%":"Int16Array"},
ki:{"^":"b5;",
j:function(a,b){H.bh(b,a,a.length)
return a[b]},
"%":"Int32Array"},
kj:{"^":"b5;",
j:function(a,b){H.bh(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
kk:{"^":"b5;",
gl:function(a){return a.length},
j:function(a,b){H.bh(b,a,a.length)
return a[b]},
$iskt:1,
"%":"CanvasPixelArray|Uint8ClampedArray"},
kl:{"^":"b5;",
gl:function(a){return a.length},
j:function(a,b){H.bh(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
eA:{"^":"cr+L;"},
eB:{"^":"eA+bK;"},
eC:{"^":"cr+L;"},
eD:{"^":"eC+bK;"}}],["","",,P,{"^":"",
iK:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jy()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aP(new P.iM(z),1)).observe(y,{childList:true})
return new P.iL(z,y,x)}else if(self.setImmediate!=null)return P.jz()
return P.jA()},
kw:[function(a){self.scheduleImmediate(H.aP(new P.iN(H.j(a,{func:1,ret:-1})),0))},"$1","jy",4,0,6],
kx:[function(a){self.setImmediate(H.aP(new P.iO(H.j(a,{func:1,ret:-1})),0))},"$1","jz",4,0,6],
ky:[function(a){P.cy(C.n,H.j(a,{func:1,ret:-1}))},"$1","jA",4,0,6],
cy:function(a,b){var z
H.j(b,{func:1,ret:-1})
z=C.h.T(a.a,1000)
return P.jg(z<0?0:z,b)},
e6:function(a,b){var z
H.j(b,{func:1,ret:-1,args:[P.ag]})
z=C.h.T(a.a,1000)
return P.jh(z<0?0:z,b)},
ju:function(a,b){if(H.bD(a,{func:1,args:[P.a,P.ap]}))return H.j(a,{func:1,ret:null,args:[P.a,P.ap]})
if(H.bD(a,{func:1,args:[P.a]}))return H.j(a,{func:1,ret:null,args:[P.a]})
throw H.h(P.c6(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jt:function(){var z,y
for(;z=$.aN,z!=null;){$.bk=null
y=z.b
$.aN=y
if(y==null)$.bj=null
z.a.$0()}},
kB:[function(){$.cQ=!0
try{P.jt()}finally{$.bk=null
$.cQ=!1
if($.aN!=null)$.$get$cN().$1(P.eQ())}},"$0","eQ",0,0,2],
eL:function(a){var z=new P.eu(H.j(a,{func:1,ret:-1}))
if($.aN==null){$.bj=z
$.aN=z
if(!$.cQ)$.$get$cN().$1(P.eQ())}else{$.bj.b=z
$.bj=z}},
jx:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
z=$.aN
if(z==null){P.eL(a)
$.bk=$.bj
return}y=new P.eu(a)
x=$.bk
if(x==null){y.b=z
$.bk=y
$.aN=y}else{y.b=x.b
x.b=y
$.bk=y
if(y.b==null)$.bj=y}},
k0:function(a){var z,y
z={func:1,ret:-1}
H.j(a,z)
y=$.D
if(C.k===y){P.bW(null,null,C.k,a)
return}y.toString
P.bW(null,null,y,H.j(y.bI(a),z))},
e4:function(a,b){var z,y
z={func:1,ret:-1}
H.j(b,z)
y=$.D
if(y===C.k){y.toString
return P.cy(a,b)}return P.cy(a,H.j(y.bI(b),z))},
e5:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.ag]}
H.j(b,z)
y=$.D
if(y===C.k){y.toString
return P.e6(a,b)}x=y.cS(b,P.ag)
$.D.toString
return P.e6(a,H.j(x,z))},
bV:function(a,b,c,d,e){var z={}
z.a=d
P.jx(new P.jv(z,e))},
eJ:function(a,b,c,d,e){var z,y
H.j(d,{func:1,ret:e})
y=$.D
if(y===c)return d.$0()
$.D=c
z=y
try{y=d.$0()
return y}finally{$.D=z}},
eK:function(a,b,c,d,e,f,g){var z,y
H.j(d,{func:1,ret:f,args:[g]})
H.w(e,g)
y=$.D
if(y===c)return d.$1(e)
$.D=c
z=y
try{y=d.$1(e)
return y}finally{$.D=z}},
jw:function(a,b,c,d,e,f,g,h,i){var z,y
H.j(d,{func:1,ret:g,args:[h,i]})
H.w(e,h)
H.w(f,i)
y=$.D
if(y===c)return d.$2(e,f)
$.D=c
z=y
try{y=d.$2(e,f)
return y}finally{$.D=z}},
bW:function(a,b,c,d){var z
H.j(d,{func:1,ret:-1})
z=C.k!==c
if(z)d=!(!z||!1)?c.bI(d):c.hn(d,-1)
P.eL(d)},
iM:{"^":"p:12;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iL:{"^":"p:21;a,b,c",
$1:function(a){var z,y
this.a.a=H.j(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iN:{"^":"p:1;a",
$0:function(){this.a.$0()}},
iO:{"^":"p:1;a",
$0:function(){this.a.$0()}},
eF:{"^":"a;a,0b,c",
el:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aP(new P.jj(this,b),0),a)
else throw H.h(P.Z("`setTimeout()` not found."))},
em:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.aP(new P.ji(this,a,Date.now(),b),0),a)
else throw H.h(P.Z("Periodic timer."))},
$isag:1,
m:{
jg:function(a,b){var z=new P.eF(!0,0)
z.el(a,b)
return z},
jh:function(a,b){var z=new P.eF(!1,0)
z.em(a,b)
return z}}},
jj:{"^":"p:2;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
ji:{"^":"p:1;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.e3(w,x)}z.c=y
this.d.$1(z)}},
aM:{"^":"a;0a,b,c,d,e,$ti",
hZ:function(a){if(this.c!==6)return!0
return this.b.b.c4(H.j(this.d,{func:1,ret:P.Y,args:[P.a]}),a.a,P.Y,P.a)},
hR:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.r(this,1)}
w=this.b.b
if(H.bD(z,{func:1,args:[P.a,P.ap]}))return H.cW(w.iq(z,a.a,a.b,null,y,P.ap),x)
else return H.cW(w.c4(H.j(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aw:{"^":"a;cL:a<,b,0fv:c<,$ti",
dD:function(a,b,c){var z,y,x,w
z=H.r(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.D
if(y!==C.k){y.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.ju(b,y)}H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aw(0,$.D,[c])
w=b==null?1:3
this.cq(new P.aM(x,w,a,b,[z,c]))
return x},
iw:function(a,b){return this.dD(a,null,b)},
cq:function(a){var z,y
z=this.a
if(z<=1){a.a=H.l(this.c,"$isaM")
this.c=a}else{if(z===2){y=H.l(this.c,"$isaw")
z=y.a
if(z<4){y.cq(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bW(null,null,z,H.j(new P.iV(this,a),{func:1,ret:-1}))}},
cI:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.l(this.c,"$isaM")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.l(this.c,"$isaw")
y=u.a
if(y<4){u.cI(a)
return}this.a=y
this.c=u.c}z.a=this.aX(a)
y=this.b
y.toString
P.bW(null,null,y,H.j(new P.j_(z,this),{func:1,ret:-1}))}},
bA:function(){var z=H.l(this.c,"$isaM")
this.c=null
return this.aX(z)},
aX:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cs:function(a){var z,y,x
z=H.r(this,0)
H.cW(a,{futureOr:1,type:z})
y=this.$ti
if(H.bC(a,"$isaZ",y,"$asaZ"))if(H.bC(a,"$isaw",y,null))P.ew(a,this)
else P.iW(a,this)
else{x=this.bA()
H.w(a,z)
this.a=4
this.c=a
P.bf(this,x)}},
ct:function(a,b){var z
H.l(b,"$isap")
z=this.bA()
this.a=8
this.c=new P.a0(a,b)
P.bf(this,z)},
$isaZ:1,
m:{
iW:function(a,b){var z,y,x
b.a=1
try{a.dD(new P.iX(b),new P.iY(b),null)}catch(x){z=H.aE(x)
y=H.aR(x)
P.k0(new P.iZ(b,z,y))}},
ew:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.l(a.c,"$isaw")
if(z>=4){y=b.bA()
b.a=a.a
b.c=a.c
P.bf(b,y)}else{y=H.l(b.c,"$isaM")
b.a=2
b.c=a
a.cI(y)}},
bf:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.l(y.c,"$isa0")
y=y.b
u=v.a
t=v.b
y.toString
P.bV(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bf(z.a,b)}y=z.a
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
if(p){H.l(r,"$isa0")
y=y.b
u=r.a
t=r.b
y.toString
P.bV(null,null,y,u,t)
return}o=$.D
if(o==null?q!=null:o!==q)$.D=q
else o=null
y=b.c
if(y===8)new P.j2(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.j1(x,b,r).$0()}else if((y&2)!==0)new P.j0(z,x,b).$0()
if(o!=null)$.D=o
y=x.b
if(!!J.H(y).$isaZ){if(y.a>=4){n=H.l(t.c,"$isaM")
t.c=null
b=t.aX(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.ew(y,t)
return}}m=b.b
n=H.l(m.c,"$isaM")
m.c=null
b=m.aX(n)
y=x.a
u=x.b
if(!y){H.w(u,H.r(m,0))
m.a=4
m.c=u}else{H.l(u,"$isa0")
m.a=8
m.c=u}z.a=m
y=m}}}},
iV:{"^":"p:1;a,b",
$0:function(){P.bf(this.a,this.b)}},
j_:{"^":"p:1;a,b",
$0:function(){P.bf(this.b,this.a.a)}},
iX:{"^":"p:12;a",
$1:function(a){var z=this.a
z.a=0
z.cs(a)}},
iY:{"^":"p:26;a",
$2:function(a,b){this.a.ct(a,H.l(b,"$isap"))},
$1:function(a){return this.$2(a,null)}},
iZ:{"^":"p:1;a,b,c",
$0:function(){this.a.ct(this.b,this.c)}},
j2:{"^":"p:2;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dA(H.j(w.d,{func:1}),null)}catch(v){y=H.aE(v)
x=H.aR(v)
if(this.d){w=H.l(this.a.a.c,"$isa0").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.l(this.a.a.c,"$isa0")
else u.b=new P.a0(y,x)
u.a=!0
return}if(!!J.H(z).$isaZ){if(z instanceof P.aw&&z.gcL()>=4){if(z.gcL()===8){w=this.b
w.b=H.l(z.gfv(),"$isa0")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.iw(new P.j3(t),null)
w.a=!1}}},
j3:{"^":"p:28;a",
$1:function(a){return this.a}},
j1:{"^":"p:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.r(x,0)
v=H.w(this.c,w)
u=H.r(x,1)
this.a.b=x.b.b.c4(H.j(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aE(t)
y=H.aR(t)
x=this.a
x.b=new P.a0(z,y)
x.a=!0}}},
j0:{"^":"p:2;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.l(this.a.a.c,"$isa0")
w=this.c
if(w.hZ(z)&&w.e!=null){v=this.b
v.b=w.hR(z)
v.a=!1}}catch(u){y=H.aE(u)
x=H.aR(u)
w=H.l(this.a.a.c,"$isa0")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a0(y,x)
s.a=!0}}},
eu:{"^":"a;a,0b"},
hV:{"^":"a;$ti",
gl:function(a){var z,y,x,w
z={}
y=new P.aw(0,$.D,[P.u])
z.a=0
x=H.r(this,0)
w=H.j(new P.hX(z,this),{func:1,ret:-1,args:[x]})
H.j(new P.hY(z,y),{func:1,ret:-1})
W.M(this.a,this.b,w,!1,x)
return y}},
hX:{"^":"p;a,b",
$1:function(a){H.w(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.B,args:[H.r(this.b,0)]}}},
hY:{"^":"p:1;a,b",
$0:function(){this.b.cs(this.a.a)}},
cv:{"^":"a;$ti"},
hW:{"^":"a;"},
ag:{"^":"a;"},
a0:{"^":"a;a,b",
i:function(a){return H.f(this.a)},
$isO:1},
jo:{"^":"a;",$iskv:1},
jv:{"^":"p:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dG()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.h(z)
x=H.h(z)
x.stack=y.i(0)
throw x}},
jc:{"^":"jo;",
ir:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
try{if(C.k===$.D){a.$0()
return}P.eJ(null,null,this,a,-1)}catch(x){z=H.aE(x)
y=H.aR(x)
P.bV(null,null,this,z,H.l(y,"$isap"))}},
is:function(a,b,c){var z,y,x
H.j(a,{func:1,ret:-1,args:[c]})
H.w(b,c)
try{if(C.k===$.D){a.$1(b)
return}P.eK(null,null,this,a,b,-1,c)}catch(x){z=H.aE(x)
y=H.aR(x)
P.bV(null,null,this,z,H.l(y,"$isap"))}},
hn:function(a,b){return new P.je(this,H.j(a,{func:1,ret:b}),b)},
bI:function(a){return new P.jd(this,H.j(a,{func:1,ret:-1}))},
cS:function(a,b){return new P.jf(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
dA:function(a,b){H.j(a,{func:1,ret:b})
if($.D===C.k)return a.$0()
return P.eJ(null,null,this,a,b)},
c4:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.w(b,d)
if($.D===C.k)return a.$1(b)
return P.eK(null,null,this,a,b,c,d)},
iq:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.w(b,e)
H.w(c,f)
if($.D===C.k)return a.$2(b,c)
return P.jw(null,null,this,a,b,c,d,e,f)}},
je:{"^":"p;a,b,c",
$0:function(){return this.a.dA(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jd:{"^":"p:2;a,b",
$0:function(){return this.a.ir(this.b)}},
jf:{"^":"p;a,b,c",
$1:function(a){var z=this.c
return this.a.is(this.b,H.w(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
fU:function(a,b,c){H.c2(a)
return H.i(H.jI(a,new H.b0(0,0,[b,c])),"$isdx",[b,c],"$asdx")},
fV:function(a,b,c,d){return new P.j7(0,0,[d])},
fI:function(a,b,c){var z,y
if(P.cR(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bl()
C.a.h(y,a)
try{P.js(a,z)}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=P.dY(b,H.jT(z,"$iso"),", ")+c
return y.charCodeAt(0)==0?y:y},
cj:function(a,b,c){var z,y,x
if(P.cR(a))return b+"..."+c
z=new P.bA(b)
y=$.$get$bl()
C.a.h(y,a)
try{x=z
x.a=P.dY(x.gam(),a,", ")}finally{if(0>=y.length)return H.e(y,-1)
y.pop()}y=z
y.a=y.gam()+c
y=z.gam()
return y.charCodeAt(0)==0?y:y},
cR:function(a){var z,y
for(z=0;y=$.$get$bl(),z<y.length;++z)if(a===y[z])return!0
return!1},
js:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gL(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.w())return
w=H.f(z.gG())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.w()){if(x<=5)return
if(0>=b.length)return H.e(b,-1)
v=b.pop()
if(0>=b.length)return H.e(b,-1)
u=b.pop()}else{t=z.gG();++x
if(!z.w()){if(x<=4){C.a.h(b,H.f(t))
return}v=H.f(t)
if(0>=b.length)return H.e(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gG();++x
for(;z.w();t=s,s=r){r=z.gG();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.e(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.f(t)
v=H.f(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dA:function(a){var z,y,x
z={}
if(P.cR(a))return"{...}"
y=new P.bA("")
try{C.a.h($.$get$bl(),a)
x=y
x.a=x.gam()+"{"
z.a=!0
a.Z(0,new P.fZ(z,y))
z=y
z.a=z.gam()+"}"}finally{z=$.$get$bl()
if(0>=z.length)return H.e(z,-1)
z.pop()}z=y.gam()
return z.charCodeAt(0)==0?z:z},
j7:{"^":"j4;a,0b,0c,0d,0e,0f,r,$ti",
gL:function(a){return P.ey(this,this.r,H.r(this,0))},
gl:function(a){return this.a},
h:function(a,b){var z
H.w(b,H.r(this,0))
if(typeof b==="number"&&(b&0x3ffffff)===b){z=this.c
if(z==null){z=P.ez()
this.c=z}return this.ey(z,b)}else return this.en(b)},
en:function(a){var z,y,x
H.w(a,H.r(this,0))
z=this.d
if(z==null){z=P.ez()
this.d=z}y=this.cu(a)
x=z[y]
if(x==null)z[y]=[this.bp(a)]
else{if(this.cC(x,a)>=0)return!1
x.push(this.bp(a))}return!0},
A:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.fn(this.c,b)
else return this.fm(b)},
fm:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.eL(z,a)
x=this.cC(y,a)
if(x<0)return!1
this.cN(y.splice(x,1)[0])
return!0},
ey:function(a,b){H.w(b,H.r(this,0))
if(H.l(a[b],"$iscO")!=null)return!1
a[b]=this.bp(b)
return!0},
fn:function(a,b){var z
if(a==null)return!1
z=H.l(a[b],"$iscO")
if(z==null)return!1
this.cN(z)
delete a[b]
return!0},
cD:function(){this.r=this.r+1&67108863},
bp:function(a){var z,y
z=new P.cO(H.w(a,H.r(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cD()
return z},
cN:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cD()},
cu:function(a){return J.bn(a)&0x3ffffff},
eL:function(a,b){return a[this.cu(b)]},
cC:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(a[y].a==b)return y
return-1},
m:{
ez:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cO:{"^":"a;a,0b,0c"},
j8:{"^":"a;a,b,0c,0d,$ti",
scr:function(a){this.d=H.w(a,H.r(this,0))},
gG:function(){return this.d},
w:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.aW(z))
else{z=this.c
if(z==null){this.scr(null)
return!1}else{this.scr(H.w(z.a,H.r(this,0)))
this.c=this.c.b
return!0}}},
$isaz:1,
m:{
ey:function(a,b,c){var z=new P.j8(a,b,[c])
z.c=a.e
return z}}},
j4:{"^":"hH;"},
bO:{"^":"j9;",$iso:1,$isb:1},
L:{"^":"a;$ti",
gL:function(a){return new H.dy(a,this.gl(a),0,[H.c0(this,a,"L",0)])},
Y:function(a,b){return this.j(a,b)},
iz:function(a,b){var z,y
z=H.c([],[H.c0(this,a,"L",0)])
C.a.sl(z,this.gl(a))
for(y=0;y<this.gl(a);++y)C.a.U(z,y,this.j(a,y))
return z},
iy:function(a){return this.iz(a,!0)},
i:function(a){return P.cj(a,"[","]")}},
fY:{"^":"h_;"},
fZ:{"^":"p:16;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.f(a)
z.a=y+": "
z.a+=H.f(b)}},
h_:{"^":"a;$ti",
gl:function(a){return this.a},
i:function(a){return P.dA(this)},
$isae:1},
hJ:{"^":"a;$ti",
i:function(a){return P.cj(this,"{","}")},
Y:function(a,b){var z,y,x
if(b<0)H.m(P.a2(b,0,null,"index",null))
for(z=P.ey(this,this.r,H.r(this,0)),y=0;z.w();){x=z.d
if(b===y)return x;++y}throw H.h(P.b_(b,this,"index",null,y))},
$iso:1,
$isdT:1},
hH:{"^":"hJ;"},
j9:{"^":"a+L;"}}],["","",,P,{"^":"",cd:{"^":"a;$ti"},df:{"^":"hW;$ti"},fu:{"^":"cd;",
$ascd:function(){return[P.v,[P.b,P.u]]}},is:{"^":"fu;a"},it:{"^":"df;",
hz:function(a,b,c){var z,y,x,w
z=a.length
P.dP(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.jn(0,0,x)
if(w.eK(a,b,z)!==z)w.cO(C.i.bM(a,z-1),0)
return new Uint8Array(x.subarray(0,H.jq(0,w.b,x.length)))},
hy:function(a){return this.hz(a,0,null)},
$asdf:function(){return[P.v,[P.b,P.u]]}},jn:{"^":"a;a,b,c",
cO:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.e(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.e(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.e(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.e(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.e(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.e(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.e(z,y)
z[y]=128|a&63
return!1}},
eK:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.i.bM(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.aT(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.cO(w,C.i.aT(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.e(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.e(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.e(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.e(z,v)
z[v]=128|w&63}}return x}}}],["","",,P,{"^":"",
fw:function(a){if(a instanceof H.p)return a.i(0)
return"Instance of '"+H.aI(a)+"'"},
fW:function(a,b,c,d){var z,y
H.w(b,d)
z=J.fJ(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.U(z,y,b)
return H.i(z,"$isb",[d],"$asb")},
dz:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=J.bo(a);x.w();)C.a.h(y,H.w(x.gG(),c))
if(b)return y
return H.i(J.bM(y),"$isb",z,"$asb")},
cw:function(a,b,c){var z,y
z=P.u
H.i(a,"$iso",[z],"$aso")
if(a.constructor===Array){H.i(a,"$isaF",[z],"$asaF")
y=a.length
c=P.dP(b,c,y,null,null,null)
return H.dO(b>0||c<y?C.a.e_(a,b,c):a)}return P.hZ(a,b,c)},
hZ:function(a,b,c){var z,y,x
H.i(a,"$iso",[P.u],"$aso")
z=J.bo(a)
for(y=0;y<b;++y)if(!z.w())throw H.h(P.a2(b,0,y,null,null))
x=[]
for(;z.w();)x.push(z.gG())
return H.dO(x)},
hy:function(a,b,c){return new H.fL(a,H.fM(a,!1,!0,!1))},
jm:function(a,b,c,d){var z,y,x,w,v,u
H.i(a,"$isb",[P.u],"$asb")
if(c===C.w){z=$.$get$eH().b
z=z.test(b)}else z=!1
if(z)return b
y=C.A.hy(H.w(b,H.aa(c,"cd",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.e(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.ht(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
bI:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a_(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fw(a)},
n:function(a){return new P.ev(a)},
d0:function(a){H.jZ(a)},
Y:{"^":"a;"},
"+bool":0,
bq:{"^":"a;a,b",
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.bq))return!1
return this.a===b.a&&!0},
gN:function(a){var z=this.a
return(z^C.h.aY(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.fl(H.hs(this))
y=P.br(H.hq(this))
x=P.br(H.hm(this))
w=P.br(H.hn(this))
v=P.br(H.hp(this))
u=P.br(H.hr(this))
t=P.fm(H.ho(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
m:{
fl:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fm:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
br:function(a){if(a>=10)return""+a
return"0"+a}}},
q:{"^":"ab;"},
"+double":0,
aX:{"^":"a;a",
bn:function(a,b){return C.h.bn(this.a,H.l(b,"$isaX").a)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.aX))return!1
return this.a===b.a},
gN:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fr()
y=this.a
if(y<0)return"-"+new P.aX(0-y).i(0)
x=z.$1(C.h.T(y,6e7)%60)
w=z.$1(C.h.T(y,1e6)%60)
v=new P.fq().$1(y%1e6)
return""+C.h.T(y,36e8)+":"+H.f(x)+":"+H.f(w)+"."+H.f(v)},
m:{
cf:function(a,b,c,d,e,f){return new P.aX(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fq:{"^":"p:18;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fr:{"^":"p:18;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
O:{"^":"a;"},
dG:{"^":"O;",
i:function(a){return"Throw of null."}},
ax:{"^":"O;a,b,c,d",
gbr:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbq:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.f(z)
w=this.gbr()+y+x
if(!this.a)return w
v=this.gbq()
u=P.bI(this.b)
return w+v+": "+H.f(u)},
m:{
f7:function(a){return new P.ax(!1,null,null,a)},
c6:function(a,b,c){return new P.ax(!0,a,b,c)}}},
bP:{"^":"ax;e,f,a,b,c,d",
gbr:function(){return"RangeError"},
gbq:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.f(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.f(z)
else if(x>z)y=": Not in range "+H.f(z)+".."+H.f(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.f(z)}return y},
m:{
by:function(a,b,c){return new P.bP(null,null,!0,a,b,"Value not in range")},
a2:function(a,b,c,d,e){return new P.bP(b,c,!0,a,d,"Invalid value")},
dP:function(a,b,c,d,e,f){if(0>a||a>c)throw H.h(P.a2(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.h(P.a2(b,a,c,"end",f))
return b}return c}}},
fH:{"^":"ax;e,l:f>,a,b,c,d",
gbr:function(){return"RangeError"},
gbq:function(){if(J.f3(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.f(z)},
m:{
b_:function(a,b,c,d,e){var z=H.X(e!=null?e:J.bp(b))
return new P.fH(b,z,!0,a,c,"Index out of range")}}},
iq:{"^":"O;a",
i:function(a){return"Unsupported operation: "+this.a},
m:{
Z:function(a){return new P.iq(a)}}},
im:{"^":"O;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
m:{
ej:function(a){return new P.im(a)}}},
hT:{"^":"O;a",
i:function(a){return"Bad state: "+this.a}},
fi:{"^":"O;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.bI(z))+"."},
m:{
aW:function(a){return new P.fi(a)}}},
hi:{"^":"a;",
i:function(a){return"Out of Memory"},
$isO:1},
dX:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isO:1},
fk:{"^":"O;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
ev:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
fC:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.i.cf(x,0,75)+"..."
return y+"\n"+x}},
u:{"^":"ab;"},
"+int":0,
o:{"^":"a;$ti",
gl:function(a){var z,y
z=this.gL(this)
for(y=0;z.w();)++y
return y},
Y:function(a,b){var z,y,x
if(b<0)H.m(P.a2(b,0,null,"index",null))
for(z=this.gL(this),y=0;z.w();){x=z.gG()
if(b===y)return x;++y}throw H.h(P.b_(b,this,"index",null,y))},
i:function(a){return P.fI(this,"(",")")}},
az:{"^":"a;$ti"},
b:{"^":"a;$ti",$iso:1},
"+List":0,
B:{"^":"a;",
gN:function(a){return P.a.prototype.gN.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
ab:{"^":"a;"},
"+num":0,
a:{"^":";",
q:function(a,b){return this===b},
gN:function(a){return H.b8(this)},
i:function(a){return"Instance of '"+H.aI(this)+"'"},
toString:function(){return this.i(this)}},
ap:{"^":"a;"},
v:{"^":"a;",$isdH:1},
"+String":0,
bA:{"^":"a;am:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
m:{
dY:function(a,b,c){var z=J.bo(b)
if(!z.w())return a
if(c.length===0){do a+=H.f(z.gG())
while(z.w())}else{a+=H.f(z.gG())
for(;z.w();)a=a+c+H.f(z.gG())}return a}}}}],["","",,W,{"^":"",
cb:function(a,b){var z=document.createElement("canvas")
return z},
ft:function(a){H.l(a,"$isbJ")
return"wheel"},
bT:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ex:function(a,b,c,d){var z,y
z=W.bT(W.bT(W.bT(W.bT(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eN:function(a,b){var z
H.j(a,{func:1,ret:-1,args:[b]})
z=$.D
if(z===C.k)return a
return z.cS(a,b)},
al:{"^":"R;","%":"HTMLBRElement|HTMLBaseElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
k6:{"^":"al;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
k7:{"^":"al;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
f9:{"^":"al;","%":"HTMLBodyElement"},
ca:{"^":"al;",
bl:function(a,b,c){if(c!=null)return this.eM(a,b,P.jC(c,null))
return this.eN(a,b)},
dP:function(a,b){return this.bl(a,b,null)},
eM:function(a,b,c){return a.getContext(b,c)},
eN:function(a,b){return a.getContext(b)},
$isca:1,
$isdb:1,
"%":"HTMLCanvasElement"},
cc:{"^":"C;",
eO:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
hL:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$iscc:1,
"%":"CanvasRenderingContext2D"},
ka:{"^":"E;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kc:{"^":"iR;0l:length=",
dS:function(a,b){var z=this.eP(a,this.eu(a,b))
return z==null?"":z},
eu:function(a,b){var z,y
z=$.$get$dg()
y=z[b]
if(typeof y==="string")return y
y=this.fO(a,b)
z[b]=y
return y},
fO:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fn()+b
if(z in a)return z
return b},
eP:function(a,b){return a.getPropertyValue(b)},
gbf:function(a){return a.height},
gbg:function(a){return a.left},
gc5:function(a){return a.top},
gbk:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fj:{"^":"a;",
gbg:function(a){return this.dS(a,"left")}},
dn:{"^":"al;",$isdn:1,"%":"HTMLDivElement"},
fo:{"^":"E;",
dQ:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
kd:{"^":"C;",
i:function(a){return String(a)},
"%":"DOMException"},
fp:{"^":"C;",
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
q:function(a,b){var z
if(b==null)return!1
if(!H.bC(b,"$isbz",[P.ab],"$asbz"))return!1
z=J.bZ(b)
return a.left===z.gbg(b)&&a.top===z.gc5(b)&&a.width===z.gbk(b)&&a.height===z.gbf(b)},
gN:function(a){return W.ex(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gbf:function(a){return a.height},
gbg:function(a){return a.left},
gc5:function(a){return a.top},
gbk:function(a){return a.width},
$isbz:1,
$asbz:function(){return[P.ab]},
"%":";DOMRectReadOnly"},
iQ:{"^":"bO;a,b",
gl:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.e(z,b)
return H.l(z[b],"$isR")},
h:function(a,b){J.d2(this.a,b)
return b},
gL:function(a){var z=this.iy(this)
return new J.ak(z,z.length,0,[H.r(z,0)])},
$asL:function(){return[W.R]},
$aso:function(){return[W.R]},
$asb:function(){return[W.R]}},
R:{"^":"E;",
gcU:function(a){return new W.iQ(a,a.children)},
i:function(a){return a.localName},
$isR:1,
"%":";Element"},
U:{"^":"C;",$isU:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
bJ:{"^":"C;",
eo:function(a,b,c,d){return a.addEventListener(b,H.aP(H.j(c,{func:1,args:[W.U]}),1),!1)},
$isbJ:1,
"%":";EventTarget"},
ke:{"^":"al;0l:length=","%":"HTMLFormElement"},
fF:{"^":"j6;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.b_(b,a,null,null,null))
return a[b]},
Y:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isam:1,
$asam:function(){return[W.E]},
$asL:function(){return[W.E]},
$iso:1,
$aso:function(){return[W.E]},
$isb:1,
$asb:function(){return[W.E]},
$isfF:1,
$asay:function(){return[W.E]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
fG:{"^":"fo;","%":"HTMLDocument"},
bL:{"^":"C;0cW:data=",$isbL:1,"%":"ImageData"},
dq:{"^":"al;",$isdq:1,$isdb:1,"%":"HTMLImageElement"},
b1:{"^":"cB;",$isb1:1,"%":"KeyboardEvent"},
hb:{"^":"al;","%":"HTMLAudioElement;HTMLMediaElement"},
a8:{"^":"cB;",$isa8:1,"%":"PointerEvent;DragEvent|MouseEvent"},
iP:{"^":"bO;a",
gL:function(a){var z=this.a.childNodes
return new W.dp(z,z.length,-1,[H.c0(C.N,z,"ay",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.e(z,b)
return z[b]},
$asL:function(){return[W.E]},
$aso:function(){return[W.E]},
$asb:function(){return[W.E]}},
E:{"^":"bJ;",
i:function(a){var z=a.nodeValue
return z==null?this.e0(a):z},
R:function(a,b){return a.appendChild(b)},
$isE:1,
"%":"Attr|DocumentFragment|DocumentType|ShadowRoot;Node"},
hf:{"^":"jb;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.b_(b,a,null,null,null))
return a[b]},
Y:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isam:1,
$asam:function(){return[W.E]},
$asL:function(){return[W.E]},
$iso:1,
$aso:function(){return[W.E]},
$isb:1,
$asb:function(){return[W.E]},
$asay:function(){return[W.E]},
"%":"NodeList|RadioNodeList"},
kn:{"^":"al;0l:length=","%":"HTMLSelectElement"},
ba:{"^":"C;",$isba:1,"%":"Touch"},
aJ:{"^":"cB;",$isaJ:1,"%":"TouchEvent"},
kr:{"^":"jl;",
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.b_(b,a,null,null,null))
return a[b]},
Y:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$isam:1,
$asam:function(){return[W.ba]},
$asL:function(){return[W.ba]},
$iso:1,
$aso:function(){return[W.ba]},
$isb:1,
$asb:function(){return[W.ba]},
$asay:function(){return[W.ba]},
"%":"TouchList"},
cB:{"^":"U;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
ku:{"^":"hb;",$isdb:1,"%":"HTMLVideoElement"},
be:{"^":"a8;",
ghG:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.Z("deltaY is not supported"))},
ghF:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.Z("deltaX is not supported"))},
$isbe:1,
"%":"WheelEvent"},
iJ:{"^":"bJ;",
fq:function(a,b){return a.requestAnimationFrame(H.aP(H.j(b,{func:1,ret:-1,args:[P.ab]}),1))},
eE:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
kz:{"^":"fp;",
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
q:function(a,b){var z
if(b==null)return!1
if(!H.bC(b,"$isbz",[P.ab],"$asbz"))return!1
z=J.bZ(b)
return a.left===z.gbg(b)&&a.top===z.gc5(b)&&a.width===z.gbk(b)&&a.height===z.gbf(b)},
gN:function(a){return W.ex(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gbf:function(a){return a.height},
gbk:function(a){return a.width},
"%":"ClientRect|DOMRect"},
iS:{"^":"hV;a,b,c,$ti"},
kA:{"^":"iS;a,b,c,$ti"},
iT:{"^":"cv;a,b,c,d,e,$ti",m:{
M:function(a,b,c,d,e){var z,y
z=W.eN(new W.iU(c),W.U)
y=z!=null
if(y&&!0){H.j(z,{func:1,args:[W.U]})
if(y)J.f5(a,b,z,!1)}return new W.iT(0,a,b,z,!1,[e])}}},
iU:{"^":"p:19;a",
$1:function(a){return this.a.$1(H.l(a,"$isU"))}},
ay:{"^":"a;$ti",
gL:function(a){return new W.dp(a,this.gl(a),-1,[H.c0(this,a,"ay",0)])}},
dp:{"^":"a;a,b,c,0d,$ti",
scB:function(a){this.d=H.w(a,H.r(this,0))},
w:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.scB(J.f4(this.a,z))
this.c=z
return!0}this.scB(null)
this.c=y
return!1},
gG:function(){return this.d},
$isaz:1},
iR:{"^":"C+fj;"},
j5:{"^":"C+L;"},
j6:{"^":"j5+ay;"},
ja:{"^":"C+L;"},
jb:{"^":"ja+ay;"},
jk:{"^":"C+L;"},
jl:{"^":"jk+ay;"}}],["","",,P,{"^":"",
jF:function(a){var z,y
z=J.H(a)
if(!!z.$isbL){y=z.gcW(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.eG(a.data,a.height,a.width)},
jE:function(a){if(a instanceof P.eG)return{data:a.a,height:a.b,width:a.c}
return a},
jC:function(a,b){var z={}
a.Z(0,new P.jD(z))
return z},
dm:function(){var z=$.dl
if(z==null){z=J.c5(window.navigator.userAgent,"Opera",0)
$.dl=z}return z},
fn:function(){var z,y
z=$.di
if(z!=null)return z
y=$.dj
if(y==null){y=J.c5(window.navigator.userAgent,"Firefox",0)
$.dj=y}if(y)z="-moz-"
else{y=$.dk
if(y==null){y=!P.dm()&&J.c5(window.navigator.userAgent,"Trident/",0)
$.dk=y}if(y)z="-ms-"
else z=P.dm()?"-o-":"-webkit-"}$.di=z
return z},
eG:{"^":"a;cW:a>,b,c",$isbL:1},
jD:{"^":"p:16;a",
$2:function(a,b){this.a[a]=b}},
fz:{"^":"bO;a,b",
gbt:function(){var z,y,x
z=this.b
y=H.aa(z,"L",0)
x=W.R
return new H.h0(new H.iH(z,H.j(new P.fA(),{func:1,ret:P.Y,args:[y]}),[y]),H.j(new P.fB(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){J.d2(this.b.a,b)},
gl:function(a){return J.bp(this.gbt().a)},
j:function(a,b){var z=this.gbt()
return z.b.$1(J.d3(z.a,b))},
gL:function(a){var z=P.dz(this.gbt(),!1,W.R)
return new J.ak(z,z.length,0,[H.r(z,0)])},
$asL:function(){return[W.R]},
$aso:function(){return[W.R]},
$asb:function(){return[W.R]}},
fA:{"^":"p:23;",
$1:function(a){return!!J.H(H.l(a,"$isE")).$isR}},
fB:{"^":"p:20;",
$1:function(a){return H.d(H.l(a,"$isE"),"$isR")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",kp:{"^":"R;",
gcU:function(a){return new P.fz(a,new W.iP(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"}}],["","",,P,{"^":""}],["","",,P,{"^":"",fa:{"^":"C;",$isfa:1,"%":"WebGLBuffer"},fD:{"^":"C;",$isfD:1,"%":"WebGLFramebuffer"},hv:{"^":"C;",$ishv:1,"%":"WebGLProgram"},cs:{"^":"C;",
cP:function(a,b){return a.activeTexture(b)},
cR:function(a,b,c){return a.attachShader(b,c)},
aa:function(a,b,c){return a.bindBuffer(b,c)},
ho:function(a,b,c){return a.bindFramebuffer(b,c)},
ar:function(a,b,c){return a.bindTexture(b,c)},
hp:function(a,b,c){return a.blendFunc(b,c)},
cT:function(a,b,c,d){return a.bufferData(b,c,d)},
hs:function(a,b){return a.clear(b)},
ht:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
hu:function(a,b){return a.clearDepth(b)},
hw:function(a,b){return a.compileShader(b)},
hB:function(a,b){return a.createShader(b)},
hD:function(a,b){return a.deleteProgram(b)},
hE:function(a,b){return a.deleteShader(b)},
hH:function(a,b){return a.depthFunc(b)},
hI:function(a,b){return a.disable(b)},
cX:function(a,b){return a.disableVertexAttribArray(b)},
hK:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bP:function(a,b){return a.enable(b)},
cZ:function(a,b){return a.enableVertexAttribArray(b)},
dL:function(a,b){return a.generateMipmap(b)},
dM:function(a,b,c){return a.getActiveAttrib(b,c)},
dN:function(a,b,c){return a.getActiveUniform(b,c)},
dO:function(a,b,c){return a.getAttribLocation(b,c)},
ca:function(a,b){return a.getParameter(b)},
dR:function(a,b){return a.getProgramInfoLog(b)},
bm:function(a,b,c){return a.getProgramParameter(b,c)},
dT:function(a,b){return a.getShaderInfoLog(b)},
dU:function(a,b,c){return a.getShaderParameter(b,c)},
dV:function(a,b,c){return a.getUniformLocation(b,c)},
hW:function(a,b){return a.linkProgram(b)},
ie:function(a,b,c){return a.pixelStorei(b,c)},
dZ:function(a,b,c){return a.shaderSource(b,c)},
iu:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.H(g)
if(!!z.$isbL)y=!0
else y=!1
if(y){this.fQ(a,b,c,d,e,f,P.jE(g))
return}if(!!z.$isdq)z=!0
else z=!1
if(z){this.fR(a,b,c,d,e,f,g)
return}throw H.h(P.f7("Incorrect number or type of arguments"))},
it:function(a,b,c,d,e,f,g){return this.iu(a,b,c,d,e,f,g,null,null,null)},
fQ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
fR:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bi:function(a,b,c,d){return a.texParameteri(b,c,d)},
C:function(a,b,c){return a.uniform1f(b,c)},
F:function(a,b,c){return a.uniform1i(b,c)},
n:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
dF:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
dG:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
dH:function(a,b){return a.useProgram(b)},
iC:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
iD:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$iscs:1,
"%":"WebGLRenderingContext"},hK:{"^":"C;",$ishK:1,"%":"WebGLShader"},i_:{"^":"C;",$isi_:1,"%":"WebGLTexture"},ik:{"^":"C;",$isik:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",N:{"^":"a;0a,0b,0c,0d,$ti",
seU:function(a){this.a=H.i(a,"$isb",[H.aa(this,"N",0)],"$asb")},
scG:function(a){this.b=H.j(a,{func:1,ret:P.Y,args:[[P.o,H.aa(this,"N",0)]]})},
scE:function(a){this.c=H.j(a,{func:1,ret:-1,args:[P.u,[P.o,H.aa(this,"N",0)]]})},
scH:function(a){this.d=H.j(a,{func:1,ret:-1,args:[P.u,[P.o,H.aa(this,"N",0)]]})},
ck:function(a){this.seU(H.c([],[a]))
this.scG(null)
this.scE(null)
this.scH(null)},
cb:function(a,b,c){var z=H.aa(this,"N",0)
H.j(b,{func:1,ret:P.Y,args:[[P.o,z]]})
z={func:1,ret:-1,args:[P.u,[P.o,z]]}
H.j(a,z)
H.j(c,z)
this.scG(b)
this.scE(a)
this.scH(c)},
bo:function(a,b){return this.cb(a,null,b)},
fe:function(a){var z
H.i(a,"$iso",[H.aa(this,"N",0)],"$aso")
z=this.b
if(z!=null)return z.$1(a)
return!0},
eV:function(a,b){var z
H.i(b,"$iso",[H.aa(this,"N",0)],"$aso")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gL:function(a){var z=this.a
return new J.ak(z,z.length,0,[H.r(z,0)])},
Y:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.e(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.aa(this,"N",0)
H.w(b,z)
z=[z]
if(this.fe(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.eV(x,H.c([b],z))}},
$iso:1,
m:{
ce:function(a){var z=new O.N([a])
z.ck(a)
return z}}},cp:{"^":"a;0a,0b",
sbu:function(a){this.a=H.i(a,"$isb",[V.a1],"$asb")},
gl:function(a){return this.a.length},
gv:function(){var z=this.b
if(z==null){z=D.a7()
this.b=z}return z},
e9:function(a){var z=this.b
if(!(z==null))z.K(a)},
aj:function(){return this.e9(null)},
gM:function(){var z=this.a
if(z.length>0)return C.a.gbY(z)
else return V.cq()},
dv:function(a){var z=this.a
if(a==null)C.a.h(z,V.cq())
else C.a.h(z,a)
this.aj()},
c1:function(){var z=this.a
if(z.length>0){z.pop()
this.aj()}}}}],["","",,E,{"^":"",c7:{"^":"a;"},ad:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a2:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sex:function(a,b){this.y=H.i(b,"$isN",[E.ad],"$asN")},
sa2:function(a){this.z=H.l(a,"$isaY")},
scc:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gv().A(0,this.gds())
y=this.c
if(y!=null)y.gv().h(0,this.gds())
x=new D.F("shape",z,this.c,this,[F.dU])
x.b=!0
this.a5(x)}},
saJ:function(a){var z,y
if(!J.J(this.r,a)){z=this.r
if(z!=null)z.gv().A(0,this.gdr())
if(a!=null)a.gv().h(0,this.gdr())
this.r=a
y=new D.F("mover",z,a,this,[U.bv])
y.b=!0
this.a5(y)}},
bj:function(a){var z,y,x,w,v,u,t,s
z=this.r
if(z!=null){y=z.r
x=a.e
if(y<x){z.r=x
y=z.y
if(!(y==null))++y.d
z.sdI(z.a+z.d*a.y)
z.sdt(z.b+z.e*a.y)
z.sdz(z.c+z.f*a.y)
y=z.c
w=Math.cos(y)
v=Math.sin(y)
y=V.an(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)
x=z.b
w=Math.cos(x)
v=Math.sin(x)
y=y.O(0,V.an(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))
x=z.a
w=Math.cos(x)
v=Math.sin(x)
z.x=y.O(0,V.an(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1))
y=z.y
if(!(y==null))y.ac()}u=z.x}else u=null
if(!J.J(u,this.x)){t=this.x
this.x=u
s=new D.F("matrix",t,u,this,[V.a1])
s.b=!0
this.a5(s)}for(z=this.y.a,z=new J.ak(z,z.length,0,[H.r(z,0)]);z.w();)z.d.bj(a)},
az:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gM())
else C.a.h(z.a,y.O(0,z.gM()))
z.aj()
a.dw(this.f)
z=a.dy
x=(z&&C.a).gbY(z)
if(x!=null&&this.d!=null)x.ik(a,this)
for(z=this.y.a,z=new J.ak(z,z.length,0,[H.r(z,0)]);z.w();)z.d.az(a)
a.du()
a.dx.c1()},
a5:function(a){var z=this.z
if(!(z==null))z.K(a)},
S:function(){return this.a5(null)},
i4:[function(a){H.l(a,"$isy")
this.e=null
this.a5(a)},function(){return this.i4(null)},"jc","$1","$0","gds",0,2,0],
i3:[function(a){this.a5(H.l(a,"$isy"))},function(){return this.i3(null)},"jb","$1","$0","gdr",0,2,0],
i1:[function(a){this.a5(H.l(a,"$isy"))},function(){return this.i1(null)},"j9","$1","$0","gdq",0,2,0],
j8:[function(a,b){var z,y,x,w,v,u,t
H.i(b,"$iso",[E.ad],"$aso")
for(z=b.length,y=this.gdq(),x={func:1,ret:-1,args:[D.y]},w=[x],v=0;v<b.length;b.length===z||(0,H.t)(b),++v){u=b[v]
if(u!=null){if(u.ga2()==null){t=new D.aY()
t.sa9(null)
t.saW(null)
t.c=null
t.d=0
u.sa2(t)}t=u.ga2()
t.toString
H.j(y,x)
if(t.a==null)t.sa9(H.c([],w))
t=t.a;(t&&C.a).h(t,y)}}this.S()},"$2","gi0",8,0,4],
ja:[function(a,b){var z,y
H.i(b,"$iso",[E.ad],"$aso")
for(z=b.gL(b),y=this.gdq();z.w();)z.gG().gv().A(0,y)
this.S()},"$2","gi2",8,0,4],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isao:1},hA:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
sfP:function(a){this.dy=H.i(a,"$isb",[O.bQ],"$asb")},
sfK:function(a){this.fr=H.i(a,"$isae",[P.v,A.ct],"$asae")},
e5:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.bq(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cp()
y=[V.a1]
z.sbu(H.c([],y))
z.b=null
z.gv().h(0,new E.hC(this))
this.cy=z
z=new O.cp()
z.sbu(H.c([],y))
z.b=null
z.gv().h(0,new E.hD(this))
this.db=z
z=new O.cp()
z.sbu(H.c([],y))
z.b=null
z.gv().h(0,new E.hE(this))
this.dx=z
this.sfP(H.c([],[O.bQ]))
z=this.dy;(z&&C.a).h(z,null)
this.sfK(new H.b0(0,0,[P.v,A.ct]))},
gig:function(){var z=this.z
if(z==null){z=this.cy.gM().O(0,this.db.gM())
this.z=z}return z},
dw:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gbY(z):a;(z&&C.a).h(z,y)},
du:function(){var z=this.dy
if(z.length>1)z.pop()},
m:{
hB:function(a,b){var z=new E.hA(a,b)
z.e5(a,b)
return z}}},hC:{"^":"p:7;a",
$1:function(a){var z
H.l(a,"$isy")
z=this.a
z.z=null
z.ch=null}},hD:{"^":"p:7;a",
$1:function(a){var z
H.l(a,"$isy")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hE:{"^":"p:7;a",
$1:function(a){var z
H.l(a,"$isy")
z=this.a
z.ch=null
z.cx=null}},i4:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0a2:x<,0y,0z,0Q,0ch,0cx,0cy",
sa2:function(a){this.x=H.l(a,"$isaY")},
eb:[function(a){H.l(a,"$isy")
this.im()},function(){return this.eb(null)},"ea","$1","$0","gcl",0,2,0],
ghQ:function(){var z,y,x
z=Date.now()
y=C.h.T(P.cf(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.bq(z,!1)
return x/y},
cJ:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.O()
if(typeof z!=="number")return H.aS(z)
x=C.j.bW(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.O()
w=C.j.bW(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.e4(C.n,this.gil())}},
im:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.j(new E.i6(this),{func:1,ret:-1,args:[P.ab]})
C.y.eE(z)
C.y.fq(z,W.eN(y,P.ab))}},"$0","gil",0,0,2],
ij:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.cJ()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.bq(w,!1)
x.y=P.cf(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.aj()
w=x.db
C.a.sl(w.a,0)
w.aj()
w=x.dx
C.a.sl(w.a,0)
w.aj()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.az(this.e)}}catch(v){z=H.aE(v)
y=H.aR(v)
P.d0("Error: "+H.f(z))
P.d0("Stack: "+H.f(y))
throw H.h(z)}},
m:{
i5:function(a,b,c,d,e){var z,y,x,w
z=J.H(a)
if(!!z.$isca)return E.e3(a,!0,!0,!0,!1)
y=W.cb(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcU(a).h(0,y)
w=E.e3(y,!0,!0,!0,!1)
w.a=a
return w},
e3:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.i4()
y=P.fU(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.v,null)
x=C.m.bl(a,"webgl",y)
x=H.l(x==null?C.m.bl(a,"experimental-webgl",y):x,"$iscs")
if(x==null)H.m(P.n("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hB(x,a)
w=new T.i2(x)
w.b=H.X((x&&C.b).ca(x,3379))
w.c=H.X(C.b.ca(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.ir(a)
v=new X.fO()
v.c=new X.b4(!1,!1,!1)
v.sfl(P.fV(null,null,null,P.u))
w.b=v
v=new X.hc(w)
v.f=0
v.r=V.bx()
v.x=V.bx()
v.Q=1
v.ch=1
w.c=v
v=new X.fX(w)
v.r=0
v.x=V.bx()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.i8(w)
v.e=0
v.f=V.bx()
v.r=V.bx()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.seF(H.c([],[[P.cv,P.a]]))
v=w.z
u=document
t=W.a8
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.M(u,"contextmenu",H.j(w.gf1(),s),!1,t))
v=w.z
r=W.U
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.M(a,"focus",H.j(w.gf4(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.M(a,"blur",H.j(w.geZ(),q),!1,r))
v=w.z
p=W.b1
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.M(u,"keyup",H.j(w.gf6(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.M(u,"keydown",H.j(w.gf5(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.M(a,"mousedown",H.j(w.gf9(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.M(a,"mouseup",H.j(w.gfb(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.M(a,"mousemove",H.j(w.gfa(),s),!1,t))
p=w.z
o=W.be;(p&&C.a).h(p,W.M(a,H.I(W.ft(a)),H.j(w.gfc(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.M(u,"mousemove",H.j(w.gf2(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.M(u,"mouseup",H.j(w.gf3(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.M(u,"pointerlockchange",H.j(w.gfd(),q),!1,r))
r=w.z
q=W.aJ
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.M(a,"touchstart",H.j(w.gfj(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.M(a,"touchend",H.j(w.gfh(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.M(a,"touchmove",H.j(w.gfi(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.bq(Date.now(),!1)
z.cy=0
z.cJ()
return z}}},i6:{"^":"p:34;a",
$1:function(a){var z
H.jY(a)
z=this.a
if(z.ch){z.ch=!1
z.ij()}}}}],["","",,Z,{"^":"",et:{"^":"a;a,b",$isk8:1,m:{
cM:function(a,b,c){var z
H.i(c,"$isb",[P.u],"$asb")
z=a.createBuffer()
C.b.aa(a,b,z)
C.b.cT(a,b,new Int16Array(H.bi(c)),35044)
C.b.aa(a,b,null)
return new Z.et(b,z)}}},d7:{"^":"c7;a,b,c,d,e",
ah:function(a){var z,y,x
try{y=a.a
C.b.cZ(y,this.e)
C.b.iC(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.aE(x)
y=P.n('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.f(z))
throw H.h(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.f(this.e)+"]"}},iG:{"^":"a;a",$isk9:1},d8:{"^":"a;a,0b,c,d",
seQ:function(a){this.b=H.i(a,"$isb",[Z.bt],"$asb")},
ax:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
ah:function(a){var z,y
z=this.a
C.b.aa(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].ah(a)},
aQ:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.b.cX(x,z[y].e)
C.b.aa(x,this.a.a,null)},
az:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.e(w,x)
v=w[x]
w=v.c
u=w.a
C.b.aa(y,u,w.b)
C.b.hK(y,v.a,v.b,5123,0)
C.b.aa(y,u,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.v]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.t)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a_(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.u(y,", ")+"\nAttrs:   "+C.a.u(u,", ")},
$iskq:1},bt:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aI(this.c)+"'")+"]"}},aK:{"^":"a;a",
gcd:function(a){var z,y
z=this.a
y=(z&$.$get$at().a)!==0?3:0
if((z&$.$get$as().a)!==0)y+=3
if((z&$.$get$ar().a)!==0)y+=3
if((z&$.$get$au().a)!==0)y+=2
if((z&$.$get$av().a)!==0)y+=3
if((z&$.$get$bc().a)!==0)y+=3
if((z&$.$get$bd().a)!==0)y+=4
if((z&$.$get$aL().a)!==0)++y
return(z&$.$get$aq().a)!==0?y+4:y},
hm:function(a){var z,y,x
z=$.$get$at()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$as()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ar()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$au()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$av()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bc()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bd()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aL()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aq()
if((y&z.a)!==0)if(x===a)return z
return $.$get$es()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aK))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.v])
y=this.a
if((y&$.$get$at().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$as().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$ar().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$au().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$av().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bc().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bd().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aL().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aq().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.u(z,"|")},
m:{
a5:function(a){return new Z.aK(a)}}}}],["","",,D,{"^":"",fd:{"^":"a;"},aY:{"^":"a;0a,0b,0c,0d",
sa9:function(a){this.a=H.i(a,"$isb",[{func:1,ret:-1,args:[D.y]}],"$asb")},
saW:function(a){this.b=H.i(a,"$isb",[{func:1,ret:-1,args:[D.y]}],"$asb")},
h:function(a,b){var z={func:1,ret:-1,args:[D.y]}
H.j(b,z)
if(this.a==null)this.sa9(H.c([],[z]))
z=this.a;(z&&C.a).h(z,b)},
A:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[D.y]})
z=this.a
z=z==null?null:C.a.at(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).A(z,b)||!1}else y=!1
return y},
K:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w)w=!0
else w=!1
if(w)return!1
if(a==null){a=new D.y(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.Z(y,new D.fx(z))
return!0},
cY:function(){return this.K(null)},
io:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.K(y)}}},
ac:function(){return this.io(!0,!1)},
m:{
a7:function(){var z=new D.aY()
z.sa9(null)
z.saW(null)
z.c=null
z.d=0
return z}}},fx:{"^":"p:24;a",
$1:function(a){var z
H.j(a,{func:1,ret:-1,args:[D.y]})
z=this.a.a
z.b
a.$1(z)}},y:{"^":"a;a,0b"},ch:{"^":"y;c,d,a,0b,$ti"},ci:{"^":"y;c,d,a,0b,$ti"},F:{"^":"y;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}}],["","",,X,{"^":"",d9:{"^":"a;a,b",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d9))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}},dw:{"^":"a;a,b",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dw))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}},fO:{"^":"a;0a,0b,0c,0d",
sfl:function(a){this.d=H.i(a,"$isdT",[P.u],"$asdT")},
ia:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
i6:function(a){this.c=a.b
this.d.A(0,a.a)
return!1}},fX:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
c0:function(a,b){this.r=a.a
return!1},
aL:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dX()
if(typeof z!=="number")return z.dJ()
this.r=(z&~y)>>>0
return!1},
aK:function(a,b){return!1},
ib:function(a){return!1},
f8:function(a,b,c){return}},b4:{"^":"a;a,b,c",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.b4))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},hc:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
c0:function(a,b){this.f=a.a
return!1},
aL:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dX()
if(typeof z!=="number")return z.dJ()
this.f=(z&~y)>>>0
return!1},
aK:function(a,b){return!1},
ic:function(a,b){return!1}},i8:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
i9:function(a){H.i(a,"$isb",[V.af],"$asb")
return!1},
i7:function(a){H.i(a,"$isb",[V.af],"$asb")
return!1},
i8:function(a){H.i(a,"$isb",[V.af],"$asb")
return!1}},ir:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
seF:function(a){this.z=H.i(a,"$isb",[[P.cv,P.a]],"$asb")},
cz:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dw(z,new X.b4(y,a.altKey,a.shiftKey))},
aq:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.b4(y,a.altKey,a.shiftKey)},
bE:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.b4(y,a.altKey,a.shiftKey)},
ag:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.W()
v=z.top
if(typeof x!=="number")return x.W()
return new V.af(y-w,x-v)},
aD:function(a){return new V.bB(a.movementX,a.movementY)},
bz:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.af])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.t)(x),++v){u=x[v]
t=C.j.a6(u.pageX)
C.j.a6(u.pageY)
s=z.left
C.j.a6(u.pageX)
C.a.h(y,new V.af(t-s,C.j.a6(u.pageY)-z.top))}return y},
ad:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.d9(z,new X.b4(y,a.altKey,a.shiftKey))},
bv:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.W()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.W()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
iQ:[function(a){this.f=!0},"$1","gf4",4,0,8],
iK:[function(a){this.f=!1},"$1","geZ",4,0,8],
iN:[function(a){H.l(a,"$isa8")
if(this.f&&this.bv(a))a.preventDefault()},"$1","gf1",4,0,3],
iS:[function(a){var z
H.l(a,"$isb1")
if(!this.f)return
z=this.cz(a)
this.b.ia(z)},"$1","gf6",4,0,13],
iR:[function(a){var z
H.l(a,"$isb1")
if(!this.f)return
z=this.cz(a)
this.b.i6(z)},"$1","gf5",4,0,13],
iU:[function(a){var z,y,x,w
H.l(a,"$isa8")
z=this.a
z.focus()
this.f=!0
this.aq(a)
if(this.x){y=this.ad(a)
x=this.aD(a)
if(this.d.c0(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ad(a)
w=this.ag(a)
if(this.c.c0(y,w))a.preventDefault()},"$1","gf9",4,0,3],
iW:[function(a){var z,y,x
H.l(a,"$isa8")
this.aq(a)
z=this.ad(a)
if(this.x){y=this.aD(a)
if(this.d.aL(z,y))a.preventDefault()
return}if(this.r)return
x=this.ag(a)
if(this.c.aL(z,x))a.preventDefault()},"$1","gfb",4,0,3],
iP:[function(a){var z,y,x
H.l(a,"$isa8")
if(!this.bv(a)){this.aq(a)
z=this.ad(a)
if(this.x){y=this.aD(a)
if(this.d.aL(z,y))a.preventDefault()
return}if(this.r)return
x=this.ag(a)
if(this.c.aL(z,x))a.preventDefault()}},"$1","gf3",4,0,3],
iV:[function(a){var z,y,x
H.l(a,"$isa8")
this.aq(a)
z=this.ad(a)
if(this.x){y=this.aD(a)
if(this.d.aK(z,y))a.preventDefault()
return}if(this.r)return
x=this.ag(a)
if(this.c.aK(z,x))a.preventDefault()},"$1","gfa",4,0,3],
iO:[function(a){var z,y,x
H.l(a,"$isa8")
if(!this.bv(a)){this.aq(a)
z=this.ad(a)
if(this.x){y=this.aD(a)
if(this.d.aK(z,y))a.preventDefault()
return}if(this.r)return
x=this.ag(a)
if(this.c.aK(z,x))a.preventDefault()}},"$1","gf2",4,0,3],
iX:[function(a){var z,y
H.l(a,"$isbe")
this.aq(a)
z=new V.bB((a&&C.x).ghF(a),C.x.ghG(a)).D(0,180)
if(this.x){if(this.d.ib(z))a.preventDefault()
return}if(this.r)return
y=this.ag(a)
if(this.c.ic(z,y))a.preventDefault()},"$1","gfc",4,0,31],
iY:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.ad(this.y)
x=this.ag(this.y)
this.d.f8(y,x,z)}},"$1","gfd",4,0,8],
j2:[function(a){var z
H.l(a,"$isaJ")
this.a.focus()
this.f=!0
this.bE(a)
z=this.bz(a)
if(this.e.i9(z))a.preventDefault()},"$1","gfj",4,0,9],
j0:[function(a){var z
H.l(a,"$isaJ")
this.bE(a)
z=this.bz(a)
if(this.e.i7(z))a.preventDefault()},"$1","gfh",4,0,9],
j1:[function(a){var z
H.l(a,"$isaJ")
this.bE(a)
z=this.bz(a)
if(this.e.i8(z))a.preventDefault()},"$1","gfi",4,0,9]}}],["","",,D,{"^":"",bH:{"^":"a;0a,0b,0c,0d",
ak:[function(a){var z
H.l(a,"$isy")
z=this.d
if(!(z==null))z.K(a)},function(){return this.ak(null)},"iE","$1","$0","gec",0,2,0],
$isP:1,
$isao:1},P:{"^":"a;",$isao:1},fP:{"^":"N;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
seD:function(a){this.e=H.i(a,"$isb",[D.bH],"$asb")},
sfk:function(a){this.f=H.i(a,"$isb",[D.dJ],"$asb")},
sfM:function(a){this.r=H.i(a,"$isb",[D.dW],"$asb")},
sfV:function(a){this.x=H.i(a,"$isb",[D.e0],"$asb")},
sfW:function(a){this.y=H.i(a,"$isb",[D.e1],"$asb")},
sfX:function(a){this.z=H.i(a,"$isb",[D.e2],"$asb")},
ak:function(a){var z=this.Q
if(!(z==null))z.K(a)},
f7:[function(a){var z
H.l(a,"$isy")
z=this.ch
if(!(z==null))z.K(a)},function(){return this.f7(null)},"iT","$1","$0","gcF",0,2,0],
iZ:[function(a){var z,y,x
H.i(a,"$iso",[D.P],"$aso")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.t)(a),++y){x=a[y]
if(x==null||this.ez(x))return!1}return!0},"$1","gff",4,0,29],
iH:[function(a,b){var z,y,x,w,v,u,t,s
z=D.P
H.i(b,"$iso",[z],"$aso")
for(y=b.length,x=this.gcF(),w={func:1,ret:-1,args:[D.y]},v=[w],u=0;u<b.length;b.length===y||(0,H.t)(b),++u){t=H.l(b[u],"$isP")
if(t instanceof D.bH)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.aY()
s.sa9(null)
s.saW(null)
s.c=null
s.d=0
t.d=s}H.j(x,w)
if(s.a==null)s.sa9(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}z=new D.ch(a,b,this,[z])
z.b=!0
this.ak(z)},"$2","geW",8,0,14],
j_:[function(a,b){var z,y,x,w
z=D.P
H.i(b,"$iso",[z],"$aso")
for(y=b.gL(b),x=this.gcF();y.w();){w=y.gG()
C.a.A(this.e,w)
w.gv().A(0,x)}z=new D.ci(a,b,this,[z])
z.b=!0
this.ak(z)},"$2","gfg",8,0,14],
ez:function(a){var z=C.a.at(this.e,a)
return z},
$aso:function(){return[D.P]},
$asN:function(){return[D.P]}},dJ:{"^":"a;",$isP:1,$isao:1},dW:{"^":"a;",$isP:1,$isao:1},e0:{"^":"a;",$isP:1,$isao:1},e1:{"^":"a;",$isP:1,$isao:1},e2:{"^":"a;",$isP:1,$isao:1}}],["","",,V,{"^":"",
kb:[function(a,b){if(typeof b!=="number")return b.W()
if(typeof a!=="number")return H.aS(a)
return Math.abs(b-a)<=1e-9},"$2","ha",8,0,27],
d1:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.j.dW(a-b,z)
return(a<0?a+z:a)+b},
x:function(a,b,c){if(a==null)return C.i.a0("null",c)
return C.i.a0(C.j.dE($.k.$2(a,0)?0:a,b),c+b+1)},
aQ:function(a,b,c){var z,y,x,w,v,u
H.i(a,"$isb",[P.q],"$asb")
z=H.c([],[P.v])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.t)(a),++w){v=V.x(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.e(z,u)
C.a.U(z,u,C.i.a0(z[u],x))}return z},
d_:function(a,b){return C.j.ix(Math.pow(b,C.E.bW(Math.log(H.jB(a))/Math.log(b))))},
T:{"^":"a;a,b,c",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"}},
bF:{"^":"a;a,b,c,d",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bF))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
z=b.d
if(!$.k.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+", "+V.x(this.d,3,0)+"]"}},
dC:{"^":"a;a,b,c,d,e,f,r,x,y",
a1:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.q])
return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dC))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
z=b.d
if(!$.k.$2(z,this.d))return!1
z=b.e
if(!$.k.$2(z,this.e))return!1
z=b.f
if(!$.k.$2(z,this.f))return!1
z=b.r
if(!$.k.$2(z,this.r))return!1
z=b.x
if(!$.k.$2(z,this.x))return!1
z=b.y
if(!$.k.$2(z,this.y))return!1
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.q]
y=V.aQ(H.c([this.a,this.d,this.r],z),3,0)
x=V.aQ(H.c([this.b,this.e,this.x],z),3,0)
w=V.aQ(H.c([this.c,this.f,this.y],z),3,0)
z=y.length
if(0>=z)return H.e(y,0)
v="["+y[0]+", "
u=x.length
if(0>=u)return H.e(x,0)
v=v+x[0]+", "
t=w.length
if(0>=t)return H.e(w,0)
v=v+w[0]+",\n"
if(1>=z)return H.e(y,1)
s=" "+y[1]+", "
if(1>=u)return H.e(x,1)
s=s+x[1]+", "
if(1>=t)return H.e(w,1)
s=v+(s+w[1]+",\n")
if(2>=z)return H.e(y,2)
z=" "+y[2]+", "
if(2>=u)return H.e(x,2)
z=z+x[2]+", "
if(2>=t)return H.e(w,2)
return s+(z+w[2]+"]")}},
a1:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a1:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.q])
return z},
dm:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.k.$2(a2,0))return V.cq()
a3=1/a2
a4=-w
a5=-i
return V.an((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
O:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
return V.an(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
c6:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.G(this.a*z+this.b*y+this.c*x,this.e*z+this.f*y+this.r*x,this.y*z+this.z*y+this.Q*x)},
aP:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.aA(this.a*z+this.b*y+this.c*x+this.d,this.e*z+this.f*y+this.r*x+this.x,this.y*z+this.z*y+this.Q*x+this.ch)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
z=b.d
if(!$.k.$2(z,this.d))return!1
z=b.e
if(!$.k.$2(z,this.e))return!1
z=b.f
if(!$.k.$2(z,this.f))return!1
z=b.r
if(!$.k.$2(z,this.r))return!1
z=b.x
if(!$.k.$2(z,this.x))return!1
z=b.y
if(!$.k.$2(z,this.y))return!1
z=b.z
if(!$.k.$2(z,this.z))return!1
z=b.Q
if(!$.k.$2(z,this.Q))return!1
z=b.ch
if(!$.k.$2(z,this.ch))return!1
z=b.cx
if(!$.k.$2(z,this.cx))return!1
z=b.cy
if(!$.k.$2(z,this.cy))return!1
z=b.db
if(!$.k.$2(z,this.db))return!1
z=b.dx
if(!$.k.$2(z,this.dx))return!1
return!0},
i:function(a){return this.B()},
dl:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.q]
y=V.aQ(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.aQ(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.aQ(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.aQ(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.e(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.e(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.e(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.e(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.e(y,1)
q=q+y[1]+", "
if(1>=t)return H.e(x,1)
q=q+x[1]+", "
if(1>=s)return H.e(w,1)
q=q+w[1]+", "
if(1>=r)return H.e(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.e(y,2)
u=u+y[2]+", "
if(2>=t)return H.e(x,2)
u=u+x[2]+", "
if(2>=s)return H.e(w,2)
u=u+w[2]+", "
if(2>=r)return H.e(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.e(y,3)
q=q+y[3]+", "
if(3>=t)return H.e(x,3)
q=q+x[3]+", "
if(3>=s)return H.e(w,3)
q=q+w[3]+", "
if(3>=r)return H.e(v,3)
return u+(q+v[3]+"]")},
B:function(){return this.dl("",3,0)},
t:function(a){return this.dl(a,3,0)},
m:{
cq:function(){var z=$.dE
if(z==null){z=V.an(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.dE=z}return z},
an:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
dD:function(a,b,c){var z,y,x,w,v,u,t,s
z=c.D(0,Math.sqrt(c.I(c)))
y=b.aE(z)
x=y.D(0,Math.sqrt(y.I(y)))
w=z.aE(x)
v=new V.G(a.a,a.b,a.c)
u=x.aA(0).I(v)
t=w.aA(0).I(v)
s=z.aA(0).I(v)
return V.an(x.a,w.a,z.a,u,x.b,w.b,z.b,t,x.c,w.c,z.c,s,0,0,0,1)}}},
af:{"^":"a;a,b",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.af))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+"]"},
m:{
bx:function(){var z=$.dK
if(z==null){z=new V.af(0,0)
$.dK=z}return z}}},
aA:{"^":"a;a,b,c",
W:function(a,b){return new V.aA(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aA))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"},
m:{
dL:function(){var z=$.b7
if(z==null){z=new V.aA(0,0,0)
$.b7=z}return z}}},
dM:{"^":"a;a,b,c,d",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dM))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
z=b.d
if(!$.k.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+", "+V.x(this.d,3,0)+"]"}},
dQ:{"^":"a;a,b,c,d",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dQ))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
z=b.d
if(!$.k.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+", "+V.x(this.d,3,0)+"]"},
m:{
hz:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dQ(a,b,c,d)}}},
bB:{"^":"a;a,b",
hV:[function(a){var z,y
z=this.a
if(typeof z!=="number")return z.O()
y=this.b
if(typeof y!=="number")return y.O()
return Math.sqrt(z*z+y*y)},"$0","gl",1,0,15],
D:function(a,b){var z,y
if($.k.$2(b,0)){z=$.el
if(z==null){z=new V.bB(0,0)
$.el=z}return z}z=this.a
if(typeof z!=="number")return z.D()
y=this.b
if(typeof y!=="number")return y.D()
return new V.bB(z/b,y/b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bB))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+"]"}},
G:{"^":"a;a,b,c",
hV:[function(a){return Math.sqrt(this.I(this))},"$0","gl",1,0,15],
I:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bZ:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.G(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aE:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.G(z*y-x*w,x*v-u*y,u*w-z*v)},
H:function(a,b){return new V.G(this.a+b.a,this.b+b.b,this.c+b.c)},
aA:function(a){return new V.G(-this.a,-this.b,-this.c)},
D:function(a,b){if($.k.$2(b,0))return V.bb()
return new V.G(this.a/b,this.b/b,this.c/b)},
dn:function(){if(!$.k.$2(0,this.a))return!1
if(!$.k.$2(0,this.b))return!1
if(!$.k.$2(0,this.c))return!1
return!0},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.G))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"},
m:{
bb:function(){var z=$.eo
if(z==null){z=new V.G(0,0,0)
$.eo=z}return z},
ep:function(){var z=$.en
if(z==null){z=new V.G(0,1,0)
$.en=z}return z},
iu:function(){var z=$.bS
if(z==null){z=new V.G(0,0,1)
$.bS=z}return z}}}}],["","",,U,{"^":"",dd:{"^":"bv;0a,0b",
gv:function(){var z=this.b
if(z==null){z=D.a7()
this.b=z}return z},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dd))return!1
return J.J(this.a,b.a)},
i:function(a){return"Constant: "+this.a.t("          ")},
m:{
de:function(a){var z=new U.dd()
z.a=a
return z}}},bv:{"^":"fd;"},dS:{"^":"bv;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gv:function(){var z=this.y
if(z==null){z=D.a7()
this.y=z}return z},
ao:function(a){var z=this.y
if(!(z==null))z.K(a)},
sdI:function(a){var z,y
a=V.d1(a,0,6.283185307179586)
z=this.a
if(!$.k.$2(z,a)){y=this.a
this.a=a
z=new D.F("yaw",y,a,this,[P.q])
z.b=!0
this.ao(z)}},
sdt:function(a){var z,y
a=V.d1(a,0,6.283185307179586)
z=this.b
if(!$.k.$2(z,a)){y=this.b
this.b=a
z=new D.F("pitch",y,a,this,[P.q])
z.b=!0
this.ao(z)}},
sdz:function(a){var z,y
a=V.d1(a,0,6.283185307179586)
z=this.c
if(!$.k.$2(z,a)){y=this.c
this.c=a
z=new D.F("roll",y,a,this,[P.q])
z.b=!0
this.ao(z)}},
q:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dS))return!1
z=this.a
y=b.a
if(!$.k.$2(z,y))return!1
z=this.b
y=b.b
if(!$.k.$2(z,y))return!1
z=this.c
y=b.c
if(!$.k.$2(z,y))return!1
z=this.d
y=b.d
if(!$.k.$2(z,y))return!1
z=this.e
y=b.e
if(!$.k.$2(z,y))return!1
z=this.f
y=b.f
if(!$.k.$2(z,y))return!1
return!0},
i:function(a){return"Rotater: ["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"], ["+V.x(this.d,3,0)+", "+V.x(this.e,3,0)+", "+V.x(this.f,3,0)+"]"}}}],["","",,M,{"^":"",fv:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
sed:function(a,b){this.d=H.i(b,"$isN",[E.ad],"$asN")},
al:[function(a){var z
H.l(a,"$isy")
z=this.x
if(!(z==null))z.K(a)},function(){return this.al(null)},"iF","$1","$0","ga8",0,2,0],
iL:[function(a,b){var z,y,x,w,v,u,t,s
z=E.ad
H.i(b,"$iso",[z],"$aso")
for(y=b.length,x=this.ga8(),w={func:1,ret:-1,args:[D.y]},v=[w],u=0;u<b.length;b.length===y||(0,H.t)(b),++u){t=b[u]
if(t!=null){if(t.ga2()==null){s=new D.aY()
s.sa9(null)
s.saW(null)
s.c=null
s.d=0
t.sa2(s)}s=t.ga2()
s.toString
H.j(x,w)
if(s.a==null)s.sa9(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.ch(a,b,this,[z])
z.b=!0
this.al(z)},"$2","gf_",8,0,4],
iM:[function(a,b){var z,y,x
z=E.ad
H.i(b,"$iso",[z],"$aso")
for(y=b.gL(b),x=this.ga8();y.w();)y.gG().gv().A(0,x)
z=new D.ci(a,b,this,[z])
z.b=!0
this.al(z)},"$2","gf0",8,0,4],
sdB:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gv().A(0,this.ga8())
y=this.c
this.c=a
if(a!=null)a.gv().h(0,this.ga8())
z=new D.F("technique",y,this.c,this,[O.bQ])
z.b=!0
this.al(z)}},
gv:function(){var z=this.x
if(z==null){z=D.a7()
this.x=z}return z},
az:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.dw(this.c)
z=this.b
z.toString
y=a.a
C.b.ho(y,36160,null)
C.b.bP(y,2884)
C.b.bP(y,2929)
C.b.hH(y,513)
x=y.drawingBufferWidth
w=y.drawingBufferHeight
v=z.r
u=v.a
if(typeof x!=="number")return H.aS(x)
t=C.j.a6(u*x)
u=v.b
if(typeof w!=="number")return H.aS(w)
s=C.j.a6(u*w)
u=C.j.a6(v.c*x)
a.c=u
v=C.j.a6(v.d*w)
a.d=v
C.b.iD(y,t,s,u,v)
C.b.hu(y,z.c)
z=z.a
C.b.ht(y,z.a,z.b,z.c,z.d)
C.b.hs(y,16640)
z=this.a
y=a.c
v=a.d
u=z.c
r=z.d
q=z.e
p=q-r
o=1/Math.tan(u*0.5)
n=V.an(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.dv(n)
y=$.dI
if(y==null){y=V.dL()
v=V.ep()
u=$.em
if(u==null){u=new V.G(0,0,-1)
$.em=u}u=V.dD(y,v,u)
$.dI=u
m=u}else m=y
z=z.b
if(z!=null){l=z.a
if(l!=null)m=l.O(0,m)}a.db.dv(m)
z=this.c
if(z!=null)z.bj(a)
for(z=this.d.a,z=new J.ak(z,z.length,0,[H.r(z,0)]);z.w();)z.d.bj(a)
for(z=this.d.a,z=new J.ak(z,z.length,0,[H.r(z,0)]);z.w();)z.d.az(a)
this.a.toString
a.cy.c1()
a.db.c1()
this.b.toString
a.du()},
$iskm:1}}],["","",,A,{"^":"",d4:{"^":"a;a,b,c"},f8:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hM:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.t)(z),++x){w=z[x]
C.b.cZ(w.a,w.c)}},
hJ:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.t)(z),++x){w=z[x]
C.b.cX(w.a,w.c)}}},h4:{"^":"ct;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0ab,0a4,0b0,0d_,0b1,0b2,0d0,0d1,0b3,0b4,0d2,0d3,0b5,0b6,0d4,0d5,0b7,0d6,0d7,0b8,0d8,0d9,0b9,0ba,0bb,0da,0dc,0bc,0bd,0dd,0de,0be,0df,0bQ,0dg,0bR,0dh,0bS,0di,0bT,0dj,0bU,0dk,0bV,a,b,0c,0d,0e,0f,0r,0x,0y",
ser:function(a){this.r1=H.i(a,"$isb",[A.ai],"$asb")},
see:function(a){this.bQ=H.i(a,"$isb",[A.cD],"$asb")},
sef:function(a){this.bR=H.i(a,"$isb",[A.cF],"$asb")},
seg:function(a){this.bS=H.i(a,"$isb",[A.cG],"$asb")},
seh:function(a){this.bT=H.i(a,"$isb",[A.cH],"$asb")},
sei:function(a){this.bU=H.i(a,"$isb",[A.cI],"$asb")},
sej:function(a){this.bV=H.i(a,"$isb",[A.cJ],"$asb")},
e4:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.z=a2
z=new P.bA("")
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
a2.h0(z)
a2.h7(z)
a2.h1(z)
a2.hf(z)
a2.hg(z)
a2.h9(z)
a2.hk(z)
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
z=new P.bA("")
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
x.h4(z)
x.h_(z)
x.h2(z)
x.h5(z)
x.hd(z)
u=x.dy
if(u){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
x.hb(z)
x.hc(z)}x.h8(z)
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
p=H.c([],[P.v])
if(x.b!==C.c)C.a.h(p,"ambient()")
if(x.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(x.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(x.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.u(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
x.h3(z)
x.ha(z)
x.he(z)
x.hh(z)
x.hi(z)
x.hj(z)
x.h6(z)}r=z.a+="// === Main ===\n"
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
o=H.c([],[P.v])
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
n="vec4("+C.a.u(o," + ")+", alpha);"
x=z.a
if(t){x+="   gl_FragColor = colorMat*"+n+"\n"
z.a=x}else{x+="   gl_FragColor = "+n+"\n"
z.a=x}x+="}\n"
z.a=x
this.c=s
this.d=x.charCodeAt(0)==0?x:x
this.e=this.cA(s,35633)
this.f=this.cA(this.d,35632)
x=this.a
v=x.createProgram()
this.r=v
C.b.cR(x,v,this.e)
C.b.cR(x,this.r,this.f)
C.b.hW(x,this.r)
if(!H.eR(C.b.bm(x,this.r,35714))){m=C.b.dR(x,this.r)
C.b.hD(x,this.r)
H.m(P.n("Failed to link shader: "+H.f(m)))}this.fH()
this.fJ()
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a2.fr)this.id=H.d(this.y.k(0,"invViewMat"),"$isai")
if(y)this.dy=H.d(this.y.k(0,"objMat"),"$isai")
if(w)this.fr=H.d(this.y.k(0,"viewObjMat"),"$isai")
this.fy=H.d(this.y.k(0,"projViewObjMat"),"$isai")
if(a2.x2)this.k1=H.d(this.y.k(0,"txt2DMat"),"$iscE")
if(a2.y1)this.k2=H.d(this.y.k(0,"txtCubeMat"),"$isai")
if(a2.y2)this.k3=H.d(this.y.k(0,"colorMat"),"$isai")
this.ser(H.c([],[A.ai]))
y=a2.ab
if(y>0){this.k4=H.l(this.y.k(0,"bendMatCount"),"$isA")
for(l=0;l<y;++l){x=this.r1
w=this.y
v="bendValues["+l+"].mat"
k=w.j(0,v)
if(k==null)H.m(P.n("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.d(k,"$isai"))}}y=a2.a
if(y!==C.c){this.r2=H.d(this.y.k(0,"emissionClr"),"$isz")
switch(y){case C.c:break
case C.f:break
case C.d:this.rx=H.d(this.y.k(0,"emissionTxt"),"$isa3")
this.x1=H.d(this.y.k(0,"nullEmissionTxt"),"$isA")
break
case C.e:this.ry=H.d(this.y.k(0,"emissionTxt"),"$isa4")
this.x1=H.d(this.y.k(0,"nullEmissionTxt"),"$isA")
break}}y=a2.b
if(y!==C.c){this.x2=H.d(this.y.k(0,"ambientClr"),"$isz")
switch(y){case C.c:break
case C.f:break
case C.d:this.y1=H.d(this.y.k(0,"ambientTxt"),"$isa3")
this.ab=H.d(this.y.k(0,"nullAmbientTxt"),"$isA")
break
case C.e:this.y2=H.d(this.y.k(0,"ambientTxt"),"$isa4")
this.ab=H.d(this.y.k(0,"nullAmbientTxt"),"$isA")
break}}y=a2.c
if(y!==C.c){this.a4=H.d(this.y.k(0,"diffuseClr"),"$isz")
switch(y){case C.c:break
case C.f:break
case C.d:this.b0=H.d(this.y.k(0,"diffuseTxt"),"$isa3")
this.b1=H.d(this.y.k(0,"nullDiffuseTxt"),"$isA")
break
case C.e:this.d_=H.d(this.y.k(0,"diffuseTxt"),"$isa4")
this.b1=H.d(this.y.k(0,"nullDiffuseTxt"),"$isA")
break}}y=a2.d
if(y!==C.c){this.b2=H.d(this.y.k(0,"invDiffuseClr"),"$isz")
switch(y){case C.c:break
case C.f:break
case C.d:this.d0=H.d(this.y.k(0,"invDiffuseTxt"),"$isa3")
this.b3=H.d(this.y.k(0,"nullInvDiffuseTxt"),"$isA")
break
case C.e:this.d1=H.d(this.y.k(0,"invDiffuseTxt"),"$isa4")
this.b3=H.d(this.y.k(0,"nullInvDiffuseTxt"),"$isA")
break}}y=a2.e
if(y!==C.c){this.b6=H.d(this.y.k(0,"shininess"),"$isK")
this.b4=H.d(this.y.k(0,"specularClr"),"$isz")
switch(y){case C.c:break
case C.f:break
case C.d:this.d2=H.d(this.y.k(0,"specularTxt"),"$isa3")
this.b5=H.d(this.y.k(0,"nullSpecularTxt"),"$isA")
break
case C.e:this.d3=H.d(this.y.k(0,"specularTxt"),"$isa4")
this.b5=H.d(this.y.k(0,"nullSpecularTxt"),"$isA")
break}}switch(a2.f){case C.c:break
case C.f:break
case C.d:this.d4=H.d(this.y.k(0,"bumpTxt"),"$isa3")
this.b7=H.d(this.y.k(0,"nullBumpTxt"),"$isA")
break
case C.e:this.d5=H.d(this.y.k(0,"bumpTxt"),"$isa4")
this.b7=H.d(this.y.k(0,"nullBumpTxt"),"$isA")
break}if(a2.dy){this.d6=H.d(this.y.k(0,"envSampler"),"$isa4")
this.d7=H.d(this.y.k(0,"nullEnvTxt"),"$isA")
y=a2.r
if(y!==C.c){this.b8=H.d(this.y.k(0,"reflectClr"),"$isz")
switch(y){case C.c:break
case C.f:break
case C.d:this.d8=H.d(this.y.k(0,"reflectTxt"),"$isa3")
this.b9=H.d(this.y.k(0,"nullReflectTxt"),"$isA")
break
case C.e:this.d9=H.d(this.y.k(0,"reflectTxt"),"$isa4")
this.b9=H.d(this.y.k(0,"nullReflectTxt"),"$isA")
break}}y=a2.x
if(y!==C.c){this.ba=H.d(this.y.k(0,"refraction"),"$isK")
this.bb=H.d(this.y.k(0,"refractClr"),"$isz")
switch(y){case C.c:break
case C.f:break
case C.d:this.da=H.d(this.y.k(0,"refractTxt"),"$isa3")
this.bc=H.d(this.y.k(0,"nullRefractTxt"),"$isA")
break
case C.e:this.dc=H.d(this.y.k(0,"refractTxt"),"$isa4")
this.bc=H.d(this.y.k(0,"nullRefractTxt"),"$isA")
break}}}y=a2.y
if(y!==C.c){this.bd=H.d(this.y.k(0,"alpha"),"$isK")
switch(y){case C.c:break
case C.f:break
case C.d:this.dd=H.d(this.y.k(0,"alphaTxt"),"$isa3")
this.be=H.d(this.y.k(0,"nullAlphaTxt"),"$isA")
break
case C.e:this.de=H.d(this.y.k(0,"alphaTxt"),"$isa4")
this.be=H.d(this.y.k(0,"nullAlphaTxt"),"$isA")
break}}this.see(H.c([],[A.cD]))
this.sef(H.c([],[A.cF]))
this.seg(H.c([],[A.cG]))
this.seh(H.c([],[A.cH]))
this.sei(H.c([],[A.cI]))
this.sej(H.c([],[A.cJ]))
if(a2.k2){y=a2.z
if(y>0){this.df=H.l(this.y.k(0,"dirLightCount"),"$isA")
for(l=0;l<y;++l){x=this.y
w="dirLights["+l+"].viewDir"
k=x.j(0,w)
if(k==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isz")
x=this.y
w="dirLights["+l+"].color"
j=x.j(0,w)
if(j==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isz")
x=this.bQ;(x&&C.a).h(x,new A.cD(l,k,j))}}y=a2.Q
if(y>0){this.dg=H.l(this.y.k(0,"pntLightCount"),"$isA")
for(l=0;l<y;++l){x=this.y
w="pntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isz")
x=this.y
w="pntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isz")
x=this.y
w="pntLights["+l+"].color"
i=x.j(0,w)
if(i==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isz")
x=this.y
w="pntLights["+l+"].att0"
h=x.j(0,w)
if(h==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isK")
x=this.y
w="pntLights["+l+"].att1"
g=x.j(0,w)
if(g==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isK")
x=this.y
w="pntLights["+l+"].att2"
f=x.j(0,w)
if(f==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isK")
x=this.bR;(x&&C.a).h(x,new A.cF(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.dh=H.l(this.y.k(0,"spotLightCount"),"$isA")
for(l=0;l<y;++l){x=this.y
w="spotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isz")
x=this.y
w="spotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isz")
x=this.y
w="spotLights["+l+"].viewPnt"
i=x.j(0,w)
if(i==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isz")
x=this.y
w="spotLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isz")
x=this.y
w="spotLights["+l+"].cutoff"
g=x.j(0,w)
if(g==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isK")
x=this.y
w="spotLights["+l+"].coneAngle"
f=x.j(0,w)
if(f==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isK")
x=this.y
w="spotLights["+l+"].att0"
e=x.j(0,w)
if(e==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isK")
x=this.y
w="spotLights["+l+"].att1"
d=x.j(0,w)
if(d==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isK")
x=this.y
w="spotLights["+l+"].att2"
c=x.j(0,w)
if(c==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(c,"$isK")
x=this.bS;(x&&C.a).h(x,new A.cG(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.di=H.l(this.y.k(0,"txtDirLightCount"),"$isA")
for(l=0;l<y;++l){x=this.y
w="txtDirLights["+l+"].objUp"
k=x.j(0,w)
if(k==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isz")
x=this.y
w="txtDirLights["+l+"].objRight"
j=x.j(0,w)
if(j==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isz")
x=this.y
w="txtDirLights["+l+"].objDir"
i=x.j(0,w)
if(i==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isz")
x=this.y
w="txtDirLights["+l+"].viewDir"
h=x.j(0,w)
if(h==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isz")
x=this.y
w="txtDirLights["+l+"].color"
g=x.j(0,w)
if(g==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isz")
x=this.y
w="txtDirLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isA")
x=this.y
w="txtDirLightsTxt2D"+l
e=x.j(0,w)
if(e==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isa3")
x=this.bT;(x&&C.a).h(x,new A.cH(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.dj=H.l(this.y.k(0,"txtPntLightCount"),"$isA")
for(l=0;l<y;++l){x=this.y
w="txtPntLights["+l+"].point"
k=x.j(0,w)
if(k==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isz")
x=this.y
w="txtPntLights["+l+"].viewPnt"
j=x.j(0,w)
if(j==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isz")
x=this.y
w="txtPntLights["+l+"].invViewRotMat"
i=x.j(0,w)
if(i==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$iscE")
x=this.y
w="txtPntLights["+l+"].color"
h=x.j(0,w)
if(h==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isz")
x=this.y
w="txtPntLights["+l+"].nullTxt"
g=x.j(0,w)
if(g==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isA")
x=this.y
w="txtPntLights["+l+"].att0"
f=x.j(0,w)
if(f==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isK")
x=this.y
w="txtPntLights["+l+"].att1"
e=x.j(0,w)
if(e==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isK")
x=this.y
w="txtPntLights["+l+"].att2"
d=x.j(0,w)
if(d==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isK")
x=this.y
w="txtPntLightsTxtCube"+l
c=x.j(0,w)
if(c==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(c,"$isa4")
x=this.bU;(x&&C.a).h(x,new A.cI(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.dk=H.l(this.y.k(0,"txtSpotLightCount"),"$isA")
for(l=0;l<y;++l){x=this.y
w="txtSpotLights["+l+"].objPnt"
k=x.j(0,w)
if(k==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isz")
x=this.y
w="txtSpotLights["+l+"].objDir"
j=x.j(0,w)
if(j==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isz")
x=this.y
w="txtSpotLights["+l+"].objUp"
i=x.j(0,w)
if(i==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isz")
x=this.y
w="txtSpotLights["+l+"].objRight"
h=x.j(0,w)
if(h==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isz")
x=this.y
w="txtSpotLights["+l+"].viewPnt"
g=x.j(0,w)
if(g==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isz")
x=this.y
w="txtSpotLights["+l+"].nullTxt"
f=x.j(0,w)
if(f==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isA")
x=this.y
w="txtSpotLights["+l+"].color"
e=x.j(0,w)
if(e==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isz")
x=this.y
w="txtSpotLights["+l+"].tuScalar"
d=x.j(0,w)
if(d==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isK")
x=this.y
w="txtSpotLights["+l+"].tvScalar"
c=x.j(0,w)
if(c==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(c,"$isK")
x=this.y
w="txtSpotLights["+l+"].att0"
b=x.j(0,w)
if(b==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(b,"$isK")
x=this.y
w="txtSpotLights["+l+"].att1"
a=x.j(0,w)
if(a==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a,"$isK")
x=this.y
w="txtSpotLights["+l+"].att2"
a0=x.j(0,w)
if(a0==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a0,"$isK")
x=this.y
w="txtSpotLightsTxt2D"+l
a1=x.j(0,w)
if(a1==null)H.m(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a1,"$isa3")
x=this.bV;(x&&C.a).h(x,new A.cJ(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
a3:function(a,b,c){if(c==null||!c.gV(c))C.b.F(b.a,b.d,1)
else{a.dY(c)
C.b.F(b.a,b.d,0)}},
X:function(a,b,c){C.b.F(b.a,b.d,1)},
m:{
h3:function(a,b){var z,y
z=a.a4
y=new A.h4(b,z)
y.e7(b,z)
y.e4(a,b)
return y}}},h7:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,ab,a4,b0",
h0:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.ab+"];\n"
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
h7:function(a){var z
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
h1:function(a){var z
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
hf:function(a){var z,y
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
hg:function(a){var z,y
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
h9:function(a){var z
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
hk:function(a){var z
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
ae:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.e(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.ce(c,1))+"Txt;\n"
a.a=z
if(b===C.d)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
h4:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.ae(a,z,"emission")
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
h_:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.ae(a,z,"ambient")
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
h2:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.ae(a,z,"diffuse")
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
h5:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.ae(a,z,"invDiffuse")
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
hd:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.ae(a,z,"specular")
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
h8:function(a){var z,y
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
hb:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.ae(a,z,"reflect")
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
hc:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.ae(a,z,"refract")
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
h3:function(a){var z,y
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
ha:function(a){var z,y
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
he:function(a){var z,y
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
hh:function(a){var z,y,x
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
hi:function(a){var z,y,x
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
hj:function(a){var z,y,x
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
h6:function(a){var z
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
i:function(a){return this.a4}},cD:{"^":"a;a,b,c"},cH:{"^":"a;a,b,c,d,e,f,r,x"},cF:{"^":"a;a,b,c,d,e,f,r"},cI:{"^":"a;a,b,c,d,e,f,r,x,y,z"},cG:{"^":"a;a,b,c,d,e,f,r,x,y,z"},cJ:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},ct:{"^":"c7;",
e7:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
cA:function(a,b){var z,y,x
z=this.a
y=C.b.hB(z,b)
C.b.dZ(z,y,a)
C.b.hw(z,y)
if(!H.eR(C.b.dU(z,y,35713))){x=C.b.dT(z,y)
C.b.hE(z,y)
throw H.h(P.n("Error compiling shader '"+H.f(y)+"': "+H.f(x)))}return y},
fH:function(){var z,y,x,w,v,u
z=H.c([],[A.d4])
y=this.a
x=H.X(C.b.bm(y,this.r,35721))
if(typeof x!=="number")return H.aS(x)
w=0
for(;w<x;++w){v=C.b.dM(y,this.r,w)
u=C.b.dO(y,this.r,v.name)
C.a.h(z,new A.d4(y,v.name,u))}this.x=new A.f8(z)},
fJ:function(){var z,y,x,w,v,u
z=H.c([],[A.W])
y=this.a
x=H.X(C.b.bm(y,this.r,35718))
if(typeof x!=="number")return H.aS(x)
w=0
for(;w<x;++w){v=C.b.dN(y,this.r,w)
u=C.b.dV(y,this.r,v.name)
C.a.h(z,this.hC(v.type,v.size,v.name,u))}this.y=new A.ij(z)},
an:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.A(z,y,b,c)
else return A.cC(z,y,b,a,c)},
eA:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.a3(z,y,b,c)
else return A.cC(z,y,b,a,c)},
eB:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.a4(z,y,b,c)
else return A.cC(z,y,b,a,c)},
aZ:function(a,b){return new P.ev(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
hC:function(a,b,c,d){switch(a){case 5120:return this.an(b,c,d)
case 5121:return this.an(b,c,d)
case 5122:return this.an(b,c,d)
case 5123:return this.an(b,c,d)
case 5124:return this.an(b,c,d)
case 5125:return this.an(b,c,d)
case 5126:return new A.K(this.a,this.r,c,d)
case 35664:return new A.id(this.a,this.r,c,d)
case 35665:return new A.z(this.a,this.r,c,d)
case 35666:return new A.ih(this.a,this.r,c,d)
case 35667:return new A.ie(this.a,this.r,c,d)
case 35668:return new A.ig(this.a,this.r,c,d)
case 35669:return new A.ii(this.a,this.r,c,d)
case 35674:return new A.il(this.a,this.r,c,d)
case 35675:return new A.cE(this.a,this.r,c,d)
case 35676:return new A.ai(this.a,this.r,c,d)
case 35678:return this.eA(b,c,d)
case 35680:return this.eB(b,c,d)
case 35670:throw H.h(this.aZ("BOOL",c))
case 35671:throw H.h(this.aZ("BOOL_VEC2",c))
case 35672:throw H.h(this.aZ("BOOL_VEC3",c))
case 35673:throw H.h(this.aZ("BOOL_VEC4",c))
default:throw H.h(P.n("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}},bG:{"^":"a;a,b",
i:function(a){return this.b}},W:{"^":"a;"},ij:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
k:function(a,b){var z=this.j(0,b)
if(z==null)throw H.h(P.n("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.B()},
hP:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.t)(z),++w)x+=z[w].i(0)+a
return x},
B:function(){return this.hP("\n")}},A:{"^":"W;a,b,c,d",
i:function(a){return"Uniform1i: "+H.f(this.c)}},ie:{"^":"W;a,b,c,d",
i:function(a){return"Uniform2i: "+H.f(this.c)}},ig:{"^":"W;a,b,c,d",
i:function(a){return"Uniform3i: "+H.f(this.c)}},ii:{"^":"W;a,b,c,d",
i:function(a){return"Uniform4i: "+H.f(this.c)}},ic:{"^":"W;0e,0f,a,b,c,d",
sfY:function(a){this.e=H.i(a,"$isb",[P.u],"$asb")},
i:function(a){return"Uniform1iv: "+H.f(this.c)},
m:{
cC:function(a,b,c,d,e){var z=new A.ic(a,b,c,e)
z.f=d
z.sfY(P.fW(d,0,!1,P.u))
return z}}},K:{"^":"W;a,b,c,d",
i:function(a){return"Uniform1f: "+H.f(this.c)}},id:{"^":"W;a,b,c,d",
i:function(a){return"Uniform2f: "+H.f(this.c)}},z:{"^":"W;a,b,c,d",
i:function(a){return"Uniform3f: "+H.f(this.c)}},ih:{"^":"W;a,b,c,d",
i:function(a){return"Uniform4f: "+H.f(this.c)}},il:{"^":"W;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}},cE:{"^":"W;a,b,c,d",
a7:function(a){var z=new Float32Array(H.bi(H.i(a,"$isb",[P.q],"$asb")))
C.b.dF(this.a,this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.f(this.c)}},ai:{"^":"W;a,b,c,d",
a7:function(a){var z=new Float32Array(H.bi(H.i(a,"$isb",[P.q],"$asb")))
C.b.dG(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.f(this.c)}},a3:{"^":"W;a,b,c,d",
dY:function(a){var z,y,x
z=a==null||!a.gV(a)
y=this.a
x=this.d
if(z)C.b.F(y,x,0)
else C.b.F(y,x,a.a)},
i:function(a){return"UniformSampler2D: "+H.f(this.c)}},a4:{"^":"W;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}}],["","",,F,{"^":"",
bU:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bg:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
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
z.d=y}l=F.bU(y)
k=F.bU(z.b)
j=F.k3(d,e,new F.jp(z,F.bU(z.c),F.bU(z.d),k,l,c),b)
if(j!=null)a.c_(j)},
k3:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.j(c,{func:1,ret:-1,args:[F.aj,P.q,P.q]})
if(a<1)return
if(b<1)return
z=F.dV()
y=H.c([],[F.aj])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cL(null,null,new V.bF(u,0,0,1),null,null,new V.af(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.bN(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cL(null,null,new V.bF(o,n,m,1),null,null,new V.af(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.bN(d))}}z.d.hl(a+1,b+1,y)
return z},
jp:{"^":"p:30;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.bZ(z.b,b).bZ(z.d.bZ(z.c,b),c)
z=new V.aA(y.a,y.b,y.c)
if(!J.J(a.f,z)){a.f=z
z=a.a
if(z!=null)z.S()}a.siv(y.D(0,Math.sqrt(y.I(y))))
z=1-b
x=1-c
x=new V.dM(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.J(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.S()}}},
V:{"^":"a;0a,0b,0c,0d,0e",
aF:function(){if(!this.gaG()){C.a.A(this.a.a.d.b,this)
this.a.a.S()}this.bB()
this.bC()
this.fo()},
fE:function(a){this.a=a
C.a.h(a.d.b,this)},
fF:function(a){this.b=a
C.a.h(a.d.c,this)},
fG:function(a){this.c=a
C.a.h(a.d.d,this)},
bB:function(){var z=this.a
if(z!=null){C.a.A(z.d.b,this)
this.a=null}},
bC:function(){var z=this.b
if(z!=null){C.a.A(z.d.c,this)
this.b=null}},
fo:function(){var z=this.c
if(z!=null){C.a.A(z.d.d,this)
this.c=null}},
gaG:function(){return this.a==null||this.b==null||this.c==null},
eq:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.bb()
if(y!=null)v=v.H(0,y)
if(x!=null)v=v.H(0,x)
if(w!=null)v=v.H(0,w)
if(v.dn())return
return v.D(0,Math.sqrt(v.I(v)))},
ew:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.W(0,y)
z=new V.G(z.a,z.b,z.c)
v=z.D(0,Math.sqrt(z.I(z)))
z=w.W(0,y)
z=new V.G(z.a,z.b,z.c)
z=v.aE(z.D(0,Math.sqrt(z.I(z))))
return z.D(0,Math.sqrt(z.I(z)))},
bL:function(){if(this.d!=null)return!0
var z=this.eq()
if(z==null){z=this.ew()
if(z==null)return!1}this.d=z
this.a.a.S()
return!0},
ep:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=V.bb()
if(y!=null)v=v.H(0,y)
if(x!=null)v=v.H(0,x)
if(w!=null)v=v.H(0,w)
if(v.dn())return
return v.D(0,Math.sqrt(v.I(v)))},
ev:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.k.$2(n,0)){z=r.W(0,u)
z=new V.G(z.a,z.b,z.c)
m=z.D(0,Math.sqrt(z.I(z)))
if(o.a-p.a<0)m=m.aA(0)}else{l=(z-q.b)/n
z=r.W(0,u)
z=new V.aA(z.a*l+u.a,z.b*l+u.b,z.c*l+u.c).W(0,x)
z=new V.G(z.a,z.b,z.c)
m=z.D(0,Math.sqrt(z.I(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.aA(0)}z=this.d
if(z!=null){k=z.D(0,Math.sqrt(z.I(z)))
z=k.aE(m)
z=z.D(0,Math.sqrt(z.I(z))).aE(k)
m=z.D(0,Math.sqrt(z.I(z)))}return m},
bJ:function(){if(this.e!=null)return!0
var z=this.ep()
if(z==null){z=this.ev()
if(z==null)return!1}this.e=z
this.a.a.S()
return!0},
ghv:function(){if(J.J(this.a,this.b))return!0
if(J.J(this.b,this.c))return!0
if(J.J(this.c,this.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.B()},
t:function(a){var z,y
if(this.gaG())return a+"disposed"
z=a+C.i.a0(J.a_(this.a.e),0)+", "+C.i.a0(J.a_(this.b.e),0)+", "+C.i.a0(J.a_(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
B:function(){return this.t("")},
m:{
bs:function(a,b,c){var z,y,x
z=new F.V()
y=a.a
if(y==null)H.m(P.n("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.m(P.n("May not create a face with vertices attached to different shapes."))
z.fE(a)
z.fF(b)
z.fG(c)
C.a.h(z.a.a.d.b,z)
z.a.a.S()
return z}}},
fy:{"^":"a;"},
hS:{"^":"fy;",
aI:function(a,b,c){var z,y
z=b.a
z.a.a.p()
z=z.e
y=c.a
y.a.a.p()
if(z==y.e){z=b.b
z.a.a.p()
z=z.e
y=c.b
y.a.a.p()
if(z==y.e){z=b.c
z.a.a.p()
z=z.e
y=c.c
y.a.a.p()
y=z==y.e
z=y}else z=!1
return z}else{z=b.a
z.a.a.p()
z=z.e
y=c.b
y.a.a.p()
if(z==y.e){z=b.b
z.a.a.p()
z=z.e
y=c.c
y.a.a.p()
if(z==y.e){z=b.c
z.a.a.p()
z=z.e
y=c.a
y.a.a.p()
y=z==y.e
z=y}else z=!1
return z}else{z=b.a
z.a.a.p()
z=z.e
y=c.c
y.a.a.p()
if(z==y.e){z=b.b
z.a.a.p()
z=z.e
y=c.a
y.a.a.p()
if(z==y.e){z=b.c
z.a.a.p()
z=z.e
y=c.b
y.a.a.p()
y=z==y.e
z=y}else z=!1
return z}else return!1}}}},
b2:{"^":"a;0a,0b",
aF:function(){if(!this.gaG()){C.a.A(this.a.a.c.b,this)
this.a.a.S()}this.bB()
this.bC()},
bB:function(){var z=this.a
if(z!=null){C.a.A(z.c.b,this)
this.a=null}},
bC:function(){var z=this.b
if(z!=null){C.a.A(z.c.c,this)
this.b=null}},
gaG:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.B()},
t:function(a){if(this.gaG())return a+"disposed"
return a+C.i.a0(J.a_(this.a.e),0)+", "+C.i.a0(J.a_(this.b.e),0)},
B:function(){return this.t("")}},
fQ:{"^":"a;"},
ib:{"^":"fQ;",
aI:function(a,b,c){var z,y
z=b.a
z.a.a.p()
z=z.e
y=c.a
y.a.a.p()
if(z==y.e){z=b.b
z.a.a.p()
z=z.e
y=c.b
y.a.a.p()
return z==y.e}else{z=b.a
z.a.a.p()
z=z.e
y=c.b
y.a.a.p()
if(z==y.e){z=b.b
z.a.a.p()
z=z.e
y=c.a
y.a.a.p()
return z==y.e}else return!1}}},
bw:{"^":"a;0a",
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.B()},
t:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.i.a0(J.a_(z.e),0)},
B:function(){return this.t("")}},
dU:{"^":"a;0a,0b,0c,0d,0e",
gv:function(){var z=this.e
if(z==null){z=D.a7()
this.e=z}return z},
c_:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.d
a.a.p()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.t)(z),++w){v=z[w]
this.a.h(0,v.hA())}this.a.p()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.t)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.p()
s=s.e
if(typeof s!=="number")return s.H()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.bw()
if(r.a==null)H.m(P.n("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.K(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.t)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.p()
s=s.e
if(typeof s!=="number")return s.H()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.p()
t=t.e
if(typeof t!=="number")return t.H()
t+=y
s=s.c
if(t>=s.length)return H.e(s,t)
o=s[t]
t=this.c.a
t.a.h(0,p)
t.a.h(0,o)
t=new F.b2()
s=p.a
if(s==null)H.m(P.n("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.m(P.n("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.K(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.t)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.p()
s=s.e
if(typeof s!=="number")return s.H()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.p()
t=t.e
if(typeof t!=="number")return t.H()
t+=y
s=s.c
if(t>=s.length)return H.e(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.p()
s=s.e
if(typeof s!=="number")return s.H()
s+=y
t=t.c
if(s>=t.length)return H.e(t,s)
l=t[s]
s=this.d.a
s.a.h(0,p)
s.a.h(0,o)
s.a.h(0,l)
F.bs(p,o,l)}z=this.e
if(!(z==null))z.ac()},
as:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.as()||!1
if(!this.a.as())y=!1
z=this.e
if(!(z==null))z.ac()
return y},
i_:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.c(z.slice(0),[H.r(z,0)])
for(z=[F.aj];y.length!==0;){x=C.a.ghO(y)
C.a.ih(y,0)
if(x!=null){w=H.c([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.t)(y),++u){t=y[u]
if(t!=null&&a.aI(0,x,t)){C.a.h(w,t)
C.a.A(y,t)}}if(w.length>1)b.c_(w)}}this.a.p()
this.c.c2()
this.d.c2()
this.b.ii()
this.c.c3(new F.ib())
this.d.c3(new F.hS())
z=this.e
if(!(z==null))z.ac()},
hq:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$at()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$as().a)!==0)++w
if((x&$.$get$ar().a)!==0)++w
if((x&$.$get$au().a)!==0)++w
if((x&$.$get$av().a)!==0)++w
if((x&$.$get$bc().a)!==0)++w
if((x&$.$get$bd().a)!==0)++w
if((x&$.$get$aL().a)!==0)++w
if((x&$.$get$aq().a)!==0)++w
v=b.gcd(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.q
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.d7])
for(r=0,q=0;q<w;++q){p=b.hm(q)
o=p.gcd(p)
C.a.U(s,q,new Z.d7(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.e(y,n)
m=y[n].hX(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.U(t,l,m[k]);++l}}r+=o}H.i(t,"$isb",[x],"$asb")
y=a.a
j=y.createBuffer()
C.b.aa(y,34962,j)
C.b.cT(y,34962,new Float32Array(H.bi(t)),35044)
C.b.aa(y,34962,null)
i=new Z.d8(new Z.et(34962,j),s,b)
i.seQ(H.c([],[Z.bt]))
if(this.b.b.length!==0){x=P.u
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.p()
C.a.h(h,g.e)}f=Z.cM(y,34963,H.i(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bt(0,h.length,f))}if(this.c.b.length!==0){x=P.u
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.p()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.e(g,q)
g=g[q].b
g.a.a.p()
C.a.h(h,g.e)}f=Z.cM(y,34963,H.i(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bt(1,h.length,f))}if(this.d.b.length!==0){x=P.u
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.p()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.e(g,q)
g=g[q].b
g.a.a.p()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.e(g,q)
g=g[q].c
g.a.a.p()
C.a.h(h,g.e)}f=Z.cM(y,34963,H.i(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bt(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.v])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.t("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.t("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.t("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.t("   "))}return C.a.u(z,"\n")},
a5:function(a){var z=this.e
if(!(z==null))z.K(a)},
S:function(){return this.a5(null)},
$isko:1,
m:{
dV:function(){var z,y
z=new F.dU()
y=new F.iv(z)
y.b=!1
y.sfZ(H.c([],[F.aj]))
z.a=y
y=new F.hN(z)
y.sby(H.c([],[F.bw]))
z.b=y
y=new F.hM(z)
y.seR(H.c([],[F.b2]))
z.c=y
y=new F.hL(z)
y.seG(H.c([],[F.V]))
z.d=y
z.e=null
return z}}},
hL:{"^":"a;a,0b",
seG:function(a){this.b=H.i(a,"$isb",[F.V],"$asb")},
hl:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.i(c,"$isb",[F.aj],"$asb")
z=H.c([],[F.V])
for(y=this.a,x=b,w=0,v=!1,u=1;u<a;++u,++w,++x){for(t=v,s=1;s<b;++s,x=o){r=c.length
if(w<0||w>=r)return H.e(c,w)
q=c[w];++w
if(w>=r)return H.e(c,w)
p=c[w]
o=x+1
if(o<0||o>=r)return H.e(c,o)
n=c[o]
if(x<0||x>=r)return H.e(c,x)
m=c[x]
r=y.a
if(t){r.h(0,q)
y.a.h(0,p)
y.a.h(0,n)
C.a.h(z,F.bs(q,p,n))
y.a.h(0,q)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bs(q,n,m))}else{r.h(0,p)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bs(p,n,m))
y.a.h(0,p)
y.a.h(0,m)
y.a.h(0,q)
C.a.h(z,F.bs(p,m,q))}t=!t}v=!v}return z},
gl:function(a){return this.b.length},
c3:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.e(x,y)
w=x[y]
for(x=w.d,v=x.b.length+x.c.length+x.d.length-1;v>=0;--v){u=w.d.j(0,v)
for(t=v-1;t>=0;--t){s=w.d.j(0,t)
if(a.aI(0,u,s)){u.aF()
break}}}}},
c2:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=x.ghv()
if(y)x.aF()}},
as:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.t)(z),++w)if(!z[w].bL())x=!1
return x},
bK:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.t)(z),++w)if(!z[w].bJ())x=!1
return x},
i:function(a){return this.B()},
t:function(a){var z,y,x,w
z=H.c([],[P.v])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.t)(y),++w)C.a.h(z,y[w].t(a))
return C.a.u(z,"\n")},
B:function(){return this.t("")}},
hM:{"^":"a;a,0b",
seR:function(a){this.b=H.i(a,"$isb",[F.b2],"$asb")},
gl:function(a){return this.b.length},
c3:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.e(x,y)
w=x[y]
for(x=w.c,v=x.b.length+x.c.length-1;v>=0;--v){u=w.c.j(0,v)
for(t=v-1;t>=0;--t){s=w.c.j(0,t)
if(a.aI(0,u,s)){u.aF()
break}}}}},
c2:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
x=y[z]
y=J.J(x.a,x.b)
if(y)x.aF()}},
i:function(a){return this.B()},
t:function(a){var z,y,x,w
z=H.c([],[P.v])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.e(w,x)
C.a.h(z,w[x].t(a+(""+x+". ")))}return C.a.u(z,"\n")},
B:function(){return this.t("")}},
hN:{"^":"a;a,0b",
sby:function(a){this.b=H.i(a,"$isb",[F.bw],"$asb")},
gl:function(a){return this.b.length},
ii:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.e(y,z)
y=y[z]
x=y.a
if(x.b.b.length>1){if(x!=null){C.a.A(x.a.b.b,y)
x=y.a.a.e
if(!(x==null))x.K(null)}x=y.a
if(x!=null){C.a.A(x.b.b,y)
y.a=null}}}},
i:function(a){return this.B()},
t:function(a){var z,y,x,w
z=H.c([],[P.v])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.t)(y),++w)C.a.h(z,y[w].t(a))
return C.a.u(z,"\n")},
B:function(){return this.t("")}},
aj:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bN:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cL(this.cx,x,u,z,y,w,v,a,t)},
hA:function(){return this.bN(null)},
siv:function(a){var z
if(!J.J(this.z,a)){this.z=a
z=this.a
if(z!=null)z.S()}},
hX:function(a){var z,y
if(a.q(0,$.$get$at())){z=this.f
y=[P.q]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.q(0,$.$get$as())){z=this.r
y=[P.q]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.q(0,$.$get$ar())){z=this.x
y=[P.q]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.q(0,$.$get$au())){z=this.y
y=[P.q]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(a.q(0,$.$get$av())){z=this.z
y=[P.q]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.q(0,$.$get$bc())){z=this.Q
y=[P.q]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.q(0,$.$get$bd())){z=this.Q
y=[P.q]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(a.q(0,$.$get$aL()))return H.c([this.ch],[P.q])
else if(a.q(0,$.$get$aq())){z=this.cx
y=[P.q]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.q])},
bL:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bb()
this.d.Z(0,new F.iF(z))
z=z.a
this.r=z.D(0,Math.sqrt(z.I(z)))
z=this.a
if(z!=null){z.S()
z=this.a.e
if(!(z==null))z.ac()}return!0},
bJ:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bb()
this.d.Z(0,new F.iE(z))
z=z.a
this.x=z.D(0,Math.sqrt(z.I(z)))
z=this.a
if(z!=null){z.S()
z=this.a.e
if(!(z==null))z.ac()}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.B()},
t:function(a){var z,y,x
z=H.c([],[P.v])
C.a.h(z,C.i.a0(J.a_(this.e),0))
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
C.a.h(z,V.x(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.u(z,", ")
return a+"{"+x+"}"},
B:function(){return this.t("")},
m:{
cL:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aj()
y=new F.iD(z)
y.sby(H.c([],[F.bw]))
z.b=y
y=new F.iz(z)
x=[F.b2]
y.seS(H.c([],x))
y.seT(H.c([],x))
z.c=y
y=new F.iw(z)
x=[F.V]
y.seH(H.c([],x))
y.seI(H.c([],x))
y.seJ(H.c([],x))
z.d=y
h=$.$get$eq()
z.e=0
y=$.$get$at()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$as().a)!==0?e:null
z.x=(x&$.$get$ar().a)!==0?b:null
z.y=(x&$.$get$au().a)!==0?f:null
z.z=(x&$.$get$av().a)!==0?g:null
z.Q=(x&$.$get$er().a)!==0?c:null
z.ch=(x&$.$get$aL().a)!==0?i:0
z.cx=(x&$.$get$aq().a)!==0?a:null
return z}}},
iF:{"^":"p:5;a",
$1:function(a){var z,y
H.l(a,"$isV")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.H(0,z)}}},
iE:{"^":"p:5;a",
$1:function(a){var z,y
H.l(a,"$isV")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.H(0,z)}}},
iv:{"^":"a;a,0b,0c",
sfZ:function(a){this.c=H.i(a,"$isb",[F.aj],"$asb")},
p:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.e(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z,y
z=b.a
if(z!=null){if(z===this.a)return!1
throw H.h(P.n("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
y=this.a
b.a=y
C.a.h(z,b)
y.S()
return!0},
gl:function(a){return this.c.length},
as:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.t)(z),++x)z[x].bL()
return!0},
bK:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.t)(z),++x)z[x].bJ()
return!0},
hr:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.t)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.D(0,Math.sqrt(u*u+t*t+s*s))
if(!J.J(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.K(null)}}}}return!0},
i:function(a){return this.B()},
t:function(a){var z,y,x,w
this.p()
z=H.c([],[P.v])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.t)(y),++w)C.a.h(z,y[w].t(a))
return C.a.u(z,"\n")},
B:function(){return this.t("")}},
iw:{"^":"a;a,0b,0c,0d",
seH:function(a){this.b=H.i(a,"$isb",[F.V],"$asb")},
seI:function(a){this.c=H.i(a,"$isb",[F.V],"$asb")},
seJ:function(a){this.d=H.i(a,"$isb",[F.V],"$asb")},
gl:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.e(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.e(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.e(z,b)
return z[b]},
Z:function(a,b){H.j(b,{func:1,ret:-1,args:[F.V]})
C.a.Z(this.b,b)
C.a.Z(this.c,new F.ix(this,b))
C.a.Z(this.d,new F.iy(this,b))},
i:function(a){return this.B()},
t:function(a){var z,y,x,w
z=H.c([],[P.v])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.t)(y),++w)C.a.h(z,y[w].t(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.t)(y),++w)C.a.h(z,y[w].t(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.t)(y),++w)C.a.h(z,y[w].t(a))
return C.a.u(z,"\n")},
B:function(){return this.t("")}},
ix:{"^":"p:5;a,b",
$1:function(a){H.l(a,"$isV")
if(!J.J(a.a,this.a))this.b.$1(a)}},
iy:{"^":"p:5;a,b",
$1:function(a){var z
H.l(a,"$isV")
z=this.a
if(!J.J(a.a,z)&&!J.J(a.b,z))this.b.$1(a)}},
iz:{"^":"a;a,0b,0c",
seS:function(a){this.b=H.i(a,"$isb",[F.b2],"$asb")},
seT:function(a){this.c=H.i(a,"$isb",[F.b2],"$asb")},
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.e(z,x)
return z[x]}else{if(b<0)return H.e(z,b)
return z[b]}},
i:function(a){return this.B()},
t:function(a){var z,y,x,w
z=H.c([],[P.v])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.t)(y),++w)C.a.h(z,y[w].t(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.t)(y),++w)C.a.h(z,y[w].t(a))
return C.a.u(z,"\n")},
B:function(){return this.t("")}},
iB:{"^":"a;"},
iA:{"^":"iB;",
aI:function(a,b,c){return J.J(b.f,c.f)}},
iC:{"^":"a;"},
hg:{"^":"iC;",
c_:function(a){var z,y,x,w,v,u,t,s,r
H.i(a,"$isb",[F.aj],"$asb")
z=V.bb()
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.G(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.D(0,Math.sqrt(z.I(z)))
for(y=a.length,w=z==null,x=0;x<a.length;a.length===y||(0,H.t)(a),++x){v=a[x]
if(w)u=null
else{t=z.a
s=z.b
r=z.c
u=z.D(0,Math.sqrt(t*t+s*s+r*r))}if(!J.J(v.r,u)){v.r=u
t=v.a
if(t!=null){t=t.e
if(!(t==null))t.K(null)}}}return}},
iD:{"^":"a;a,0b",
sby:function(a){this.b=H.i(a,"$isb",[F.bw],"$asb")},
gl:function(a){return this.b.length},
i:function(a){return this.B()},
t:function(a){var z,y,x,w
z=H.c([],[P.v])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.t)(y),++w)C.a.h(z,y[w].t(a))
return C.a.u(z,"\n")},
B:function(){return this.t("")}}}],["","",,O,{"^":"",h2:{"^":"bQ;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
ses:function(a){this.e=H.i(a,"$isN",[V.a1],"$asN")},
gv:function(){var z=this.dy
if(z==null){z=D.a7()
this.dy=z}return z},
P:[function(a){var z
H.l(a,"$isy")
z=this.dy
if(!(z==null))z.K(a)},function(){return this.P(null)},"ek","$1","$0","gaS",0,2,0],
ft:[function(a){H.l(a,"$isy")
this.a=null
this.P(a)},function(){return this.ft(null)},"j3","$1","$0","gfs",0,2,0],
iI:[function(a,b){var z=V.a1
z=new D.ch(a,H.i(b,"$iso",[z],"$aso"),this,[z])
z.b=!0
this.P(z)},"$2","geX",8,0,10],
iJ:[function(a,b){var z=V.a1
z=new D.ci(a,H.i(b,"$iso",[z],"$aso"),this,[z])
z.b=!0
this.P(z)},"$2","geY",8,0,10],
cv:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
z=this.dx
y=C.h.T(z.e.length+3,4)*4
x=C.h.T(z.f.length+3,4)*4
w=C.h.T(z.r.length+3,4)*4
v=C.h.T(z.x.length+3,4)*4
u=C.h.T(z.y.length+3,4)*4
t=C.h.T(z.z.length+3,4)*4
s=C.h.T(this.e.a.length+3,4)*4
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
if(e){g=$.$get$as()
a2=new Z.aK(a2.a|g.a)}if(d){g=$.$get$ar()
a2=new Z.aK(a2.a|g.a)}if(c){g=$.$get$au()
a2=new Z.aK(a2.a|g.a)}if(b){g=$.$get$av()
a2=new Z.aK(a2.a|g.a)}if(a0){g=$.$get$aq()
a2=new Z.aK(a2.a|g.a)}return new A.h7(z,r,q,p,o,n,m,l,k,y,x,w,v,u,t,y+x+w+v+u+t,i,i,a,a1,!0,!1,!1,h,a,f,e,d,c,b,a0,!1,!1,!1,s,j.charCodeAt(0)==0?j:j,a2)},
J:function(a,b){H.i(a,"$isb",[T.cx],"$asb")
if(b!=null)if(!C.a.at(a,b)){b.a=a.length
C.a.h(a,b)}},
bj:function(a){var z,y,x,w,v
for(z=this.dx.a,z=new J.ak(z,z.length,0,[H.r(z,0)]);z.w();){y=z.d
y.toString
x=$.bS
if(x==null){x=new V.G(0,0,1)
$.bS=x}y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.c6(x)}}},
ik:function(a,a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=this.a
if(z==null){z=this.cv()
y=a.fr.j(0,z.a4)
if(y==null){y=A.h3(z,a.a)
x=y.b
if(x.length===0)H.m(P.n("May not cache a shader with no name."))
if(a.fr.cV(x))H.m(P.n('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.U(0,x,y)}this.a=y
a0.e=null
z=y}w=z.z
v=w.b0
z=a0.e
if(!(z instanceof Z.d8)){a0.e=null
z=null}if(z==null||!z.d.q(0,v)){z=w.r1
if(z)a0.d.as()
u=w.r2
if(u){t=a0.d
s=t.e
if(!(s==null))++s.d
t.d.bK()
t.a.bK()
t=t.e
if(!(t==null))t.ac()}t=w.ry
if(t){s=a0.d
r=s.e
if(!(r==null))++r.d
s.a.hr()
s=s.e
if(!(s==null))s.ac()}q=a0.d.hq(new Z.iG(a.a),v)
q.ax($.$get$at()).e=this.a.Q.c
if(z)q.ax($.$get$as()).e=this.a.cx.c
if(u)q.ax($.$get$ar()).e=this.a.ch.c
if(w.rx)q.ax($.$get$au()).e=this.a.cy.c
if(t)q.ax($.$get$av()).e=this.a.db.c
if(w.x1)q.ax($.$get$aq()).e=this.a.dx.c
a0.e=q}z=T.cx
p=H.c([],[z])
u=this.a
t=a.a
C.b.dH(t,u.r)
u.x.hM()
if(w.fx){u=this.a
s=a.dx.gM()
u=u.dy
u.toString
u.a7(s.a1(0,!0))}if(w.fy){u=this.a
s=a.cx
if(s==null){s=a.db.gM().O(0,a.dx.gM())
a.cx=s}u=u.fr
u.toString
u.a7(s.a1(0,!0))}u=this.a
s=a.ch
if(s==null){s=a.gig().O(0,a.dx.gM())
a.ch=s}u=u.fy
u.toString
u.a7(s.a1(0,!0))
if(w.x2){u=this.a
s=this.b
u=u.k1
u.toString
u.a7(C.o.a1(s,!0))}if(w.y1){u=this.a
s=this.c
u=u.k2
u.toString
u.a7(C.o.a1(s,!0))}if(w.y2){u=this.a
s=this.d
u=u.k3
u.toString
u.a7(C.o.a1(s,!0))}if(w.ab>0){o=this.e.a.length
u=this.a.k4
C.b.F(u.a,u.d,o)
for(u=[P.q],n=0;n<o;++n){s=this.a
r=this.e.a
if(n>=r.length)return H.e(r,n)
r=r[n]
s.toString
H.l(r,"$isa1")
s=s.r1
if(n>=s.length)return H.e(s,n)
s=s[n]
m=new Float32Array(H.bi(H.i(r.a1(0,!0),"$isb",u,"$asb")))
C.b.dG(s.a,s.d,!1,m)}}switch(w.a){case C.c:break
case C.f:u=this.a
s=this.f.f
u=u.r2
u.toString
r=s.a
l=s.b
s=s.c
C.b.n(u.a,u.d,r,l,s)
break
case C.d:this.J(p,this.f.d)
u=this.a
s=this.f.d
u.a3(u.rx,u.x1,s)
s=this.a
u=this.f.f
s=s.r2
s.toString
r=u.a
l=u.b
u=u.c
C.b.n(s.a,s.d,r,l,u)
break
case C.e:this.J(p,this.f.e)
u=this.a
s=this.f.e
u.X(u.ry,u.x1,s)
s=this.a
u=this.f.f
s=s.r2
s.toString
r=u.a
l=u.b
u=u.c
C.b.n(s.a,s.d,r,l,u)
break}if(w.k2){switch(w.b){case C.c:break
case C.f:u=this.a
s=this.r.f
u=u.x2
u.toString
r=s.a
l=s.b
s=s.c
C.b.n(u.a,u.d,r,l,s)
break
case C.d:this.J(p,this.r.d)
u=this.a
s=this.r.d
u.a3(u.y1,u.ab,s)
s=this.a
u=this.r.f
s=s.x2
s.toString
r=u.a
l=u.b
u=u.c
C.b.n(s.a,s.d,r,l,u)
break
case C.e:this.J(p,this.r.e)
u=this.a
s=this.r.e
u.X(u.y2,u.ab,s)
s=this.a
u=this.r.f
s=s.x2
s.toString
r=u.a
l=u.b
u=u.c
C.b.n(s.a,s.d,r,l,u)
break}switch(w.c){case C.c:break
case C.f:u=this.a
s=this.x.f
u=u.a4
u.toString
r=s.a
l=s.b
s=s.c
C.b.n(u.a,u.d,r,l,s)
break
case C.d:this.J(p,this.x.d)
u=this.a
s=this.x.d
u.a3(u.b0,u.b1,s)
s=this.a
u=this.x.f
s=s.a4
s.toString
r=u.a
l=u.b
u=u.c
C.b.n(s.a,s.d,r,l,u)
break
case C.e:this.J(p,this.x.e)
u=this.a
s=this.x.e
u.X(u.d_,u.b1,s)
s=this.a
u=this.x.f
s=s.a4
s.toString
r=u.a
l=u.b
u=u.c
C.b.n(s.a,s.d,r,l,u)
break}switch(w.d){case C.c:break
case C.f:u=this.a
s=this.y.f
u=u.b2
u.toString
r=s.a
l=s.b
s=s.c
C.b.n(u.a,u.d,r,l,s)
break
case C.d:this.J(p,this.y.d)
u=this.a
s=this.y.d
u.a3(u.d0,u.b3,s)
s=this.a
u=this.y.f
s=s.b2
s.toString
r=u.a
l=u.b
u=u.c
C.b.n(s.a,s.d,r,l,u)
break
case C.e:this.J(p,this.y.e)
u=this.a
s=this.y.e
u.X(u.d1,u.b3,s)
s=this.a
u=this.y.f
s=s.b2
s.toString
r=u.a
l=u.b
u=u.c
C.b.n(s.a,s.d,r,l,u)
break}switch(w.e){case C.c:break
case C.f:u=this.a
s=this.z.f
u=u.b4
u.toString
r=s.a
l=s.b
s=s.c
C.b.n(u.a,u.d,r,l,s)
s=this.a
l=this.z.ch
s=s.b6
C.b.C(s.a,s.d,l)
break
case C.d:this.J(p,this.z.d)
u=this.a
s=this.z.d
u.a3(u.d2,u.b5,s)
s=this.a
u=this.z.f
s=s.b4
s.toString
r=u.a
l=u.b
u=u.c
C.b.n(s.a,s.d,r,l,u)
u=this.a
l=this.z.ch
u=u.b6
C.b.C(u.a,u.d,l)
break
case C.e:this.J(p,this.z.e)
u=this.a
s=this.z.e
u.X(u.d3,u.b5,s)
s=this.a
u=this.z.f
s=s.b4
s.toString
r=u.a
l=u.b
u=u.c
C.b.n(s.a,s.d,r,l,u)
u=this.a
l=this.z.ch
u=u.b6
C.b.C(u.a,u.d,l)
break}if(w.z>0){o=this.dx.e.length
u=this.a.df
C.b.F(u.a,u.d,o)
k=a.db.gM()
for(u=this.dx.e,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.t)(u),++i){h=u[i]
r=this.a.bQ
if(j>=r.length)return H.e(r,j)
g=r[j]
r=k.c6(h.a)
l=r.a
f=r.b
e=r.c
e=r.D(0,Math.sqrt(l*l+f*f+e*e))
f=g.b
l=e.a
r=e.b
e=e.c
C.b.n(f.a,f.d,l,r,e)
e=h.c
r=g.c
C.b.n(r.a,r.d,e.a,e.b,e.c);++j}}if(w.Q>0){o=this.dx.f.length
u=this.a.dg
C.b.F(u.a,u.d,o)
k=a.db.gM()
for(u=this.dx.f,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.t)(u),++i){h=u[i]
r=this.a.bR
if(j>=r.length)return H.e(r,j)
g=r[j]
r=h.gaM(h)
l=g.b
f=r.gc7(r)
e=r.gc8(r)
r=r.gc9(r)
C.b.n(l.a,l.d,f,e,r)
r=k.aP(h.gaM(h))
e=g.c
C.b.n(e.a,e.d,r.a,r.b,r.c)
r=h.gai(h)
e=g.d
f=r.gbh()
l=r.gaR()
r=r.gb_()
C.b.n(e.a,e.d,f,l,r)
r=h.gbF()
l=g.e
C.b.C(l.a,l.d,r)
r=h.gbG()
l=g.f
C.b.C(l.a,l.d,r)
r=h.gbH()
l=g.r
C.b.C(l.a,l.d,r);++j}}if(w.ch>0){o=this.dx.r.length
u=this.a.dh
C.b.F(u.a,u.d,o)
k=a.db.gM()
for(u=this.dx.r,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.t)(u),++i){h=u[i]
r=this.a.bS
if(j>=r.length)return H.e(r,j)
g=r[j]
r=h.gaM(h)
l=g.b
f=r.gc7(r)
e=r.gc8(r)
r=r.gc9(r)
C.b.n(l.a,l.d,f,e,r)
r=h.gbO(h).j7()
e=g.c
f=r.gau(r)
l=r.gav(r)
r=r.gaw()
C.b.n(e.a,e.d,f,l,r)
r=k.aP(h.gaM(h))
l=g.d
C.b.n(l.a,l.d,r.a,r.b,r.c)
r=h.gai(h)
l=g.e
f=r.gbh()
e=r.gaR()
r=r.gb_()
C.b.n(l.a,l.d,f,e,r)
r=h.gj5()
e=g.f
C.b.C(e.a,e.d,r)
r=h.gj4()
e=g.r
C.b.C(e.a,e.d,r)
r=h.gbF()
e=g.x
C.b.C(e.a,e.d,r)
r=h.gbG()
e=g.y
C.b.C(e.a,e.d,r)
r=h.gbH()
e=g.z
C.b.C(e.a,e.d,r);++j}}if(w.cx>0){o=this.dx.x.length
u=this.a.di
C.b.F(u.a,u.d,o)
k=a.db.gM()
for(u=this.dx.x,s=u.length,r=[z],j=0,i=0;i<u.length;u.length===s||(0,H.t)(u),++i){h=u[i]
l=this.a.bT
if(j>=l.length)return H.e(l,j)
g=l[j]
l=h.gaN()
H.i(p,"$isb",r,"$asb")
if(!C.a.at(p,l)){l.saV(p.length)
C.a.h(p,l)}l=h.gbO(h)
f=g.d
e=l.gau(l)
d=l.gav(l)
l=l.gaw()
C.b.n(f.a,f.d,e,d,l)
l=h.giB()
d=g.b
e=l.gau(l)
f=l.gav(l)
l=l.gaw()
C.b.n(d.a,d.d,e,f,l)
l=h.gip(h)
f=g.c
e=l.gau(l)
d=l.gav(l)
l=l.gaw()
C.b.n(f.a,f.d,e,d,l)
l=k.c6(h.gbO(h))
d=l.a
e=l.b
f=l.c
f=l.D(0,Math.sqrt(d*d+e*e+f*f))
e=g.e
d=f.a
l=f.b
f=f.c
C.b.n(e.a,e.d,d,l,f)
f=h.gai(h)
l=g.f
d=f.gbh()
e=f.gaR()
f=f.gb_()
C.b.n(l.a,l.d,d,e,f)
f=h.gaN()
l=f.gV(f)
if(!l){l=g.x
C.b.F(l.a,l.d,1)}else{l=g.r
e=f.gV(f)
d=l.a
l=l.d
if(!e)C.b.F(d,l,0)
else C.b.F(d,l,f.gaV())
l=g.x
C.b.F(l.a,l.d,0)}++j}}if(w.cy>0){o=this.dx.y.length
u=this.a.dj
C.b.F(u.a,u.d,o)
k=a.db.gM()
for(u=this.dx.y,s=u.length,r=[P.q],l=[z],j=0,i=0;i<u.length;u.length===s||(0,H.t)(u),++i){h=u[i]
f=this.a.bU
if(j>=f.length)return H.e(f,j)
g=f[j]
f=h.gaN()
H.i(p,"$isb",l,"$asb")
if(!C.a.at(p,f)){f.saV(p.length)
C.a.h(p,f)}c=k.O(0,h.gM())
f=h.gM()
e=$.b7
if(e==null){e=new V.aA(0,0,0)
$.b7=e}e=f.aP(e)
f=g.b
d=e.gc7(e)
b=e.gc8(e)
e=e.gc9(e)
C.b.n(f.a,f.d,d,b,e)
f=$.b7
if(f==null){f=new V.aA(0,0,0)
$.b7=f}f=c.aP(f)
e=g.c
C.b.n(e.a,e.d,f.a,f.b,f.c)
f=c.dm()
e=g.d
m=new Float32Array(H.bi(H.i(new V.dC(f.a,f.b,f.c,f.e,f.f,f.r,f.y,f.z,f.Q).a1(0,!0),"$isb",r,"$asb")))
C.b.dF(e.a,e.d,!1,m)
e=h.gai(h)
f=g.e
d=e.gbh()
b=e.gaR()
e=e.gb_()
C.b.n(f.a,f.d,d,b,e)
e=h.gaN()
f=e.gV(e)
if(!f){f=g.r
C.b.F(f.a,f.d,1)}else{f=g.f
d=e.gV(e)
b=f.a
f=f.d
if(!d)C.b.F(b,f,0)
else C.b.F(b,f,e.gj6(e))
f=g.r
C.b.F(f.a,f.d,0)}f=h.gbF()
e=g.x
C.b.C(e.a,e.d,f)
f=h.gbG()
e=g.y
C.b.C(e.a,e.d,f)
f=h.gbH()
e=g.z
C.b.C(e.a,e.d,f);++j}}if(w.db>0){o=this.dx.z.length
u=this.a.dk
C.b.F(u.a,u.d,o)
k=a.db.gM()
for(u=this.dx.z,s=u.length,z=[z],j=0,i=0;i<u.length;u.length===s||(0,H.t)(u),++i){h=u[i]
r=this.a.bV
if(j>=r.length)return H.e(r,j)
g=r[j]
r=h.gaN()
H.i(p,"$isb",z,"$asb")
if(!C.a.at(p,r)){r.saV(p.length)
C.a.h(p,r)}r=h.gaM(h)
l=g.b
f=r.gc7(r)
e=r.gc8(r)
r=r.gc9(r)
C.b.n(l.a,l.d,f,e,r)
r=h.gbO(h)
e=g.c
f=r.gau(r)
l=r.gav(r)
r=r.gaw()
C.b.n(e.a,e.d,f,l,r)
r=h.giB()
l=g.d
f=r.gau(r)
e=r.gav(r)
r=r.gaw()
C.b.n(l.a,l.d,f,e,r)
r=h.gip(h)
e=g.e
f=r.gau(r)
l=r.gav(r)
r=r.gaw()
C.b.n(e.a,e.d,f,l,r)
r=k.aP(h.gaM(h))
l=g.f
C.b.n(l.a,l.d,r.a,r.b,r.c)
r=h.gaN()
l=r.gV(r)
if(!l){r=g.x
C.b.F(r.a,r.d,1)}else{l=g.r
f=r.gV(r)
e=l.a
l=l.d
if(!f)C.b.F(e,l,0)
else C.b.F(e,l,r.gaV())
r=g.x
C.b.F(r.a,r.d,0)}r=h.gai(h)
l=g.y
f=r.gbh()
e=r.gaR()
r=r.gb_()
C.b.n(l.a,l.d,f,e,r)
r=h.gjd()
e=g.z
C.b.C(e.a,e.d,r)
r=h.gje()
e=g.Q
C.b.C(e.a,e.d,r)
r=h.gbF()
e=g.ch
C.b.C(e.a,e.d,r)
r=h.gbG()
e=g.cx
C.b.C(e.a,e.d,r)
r=h.gbH()
e=g.cy
C.b.C(e.a,e.d,r);++j}}}switch(w.f){case C.c:break
case C.f:break
case C.d:this.J(p,this.Q.d)
z=this.a
u=this.Q.d
z.a3(z.d4,z.b7,u)
break
case C.e:this.J(p,this.Q.e)
z=this.a
u=this.Q.e
z.X(z.d5,z.b7,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db.gM().dm()
a.Q=u}z=z.id
z.toString
z.a7(u.a1(0,!0))}if(w.dy){this.J(p,this.ch)
z=this.a
u=this.ch
z.X(z.d6,z.d7,u)
switch(w.r){case C.c:break
case C.f:z=this.a
u=this.cx.f
z=z.b8
z.toString
s=u.a
r=u.b
u=u.c
C.b.n(z.a,z.d,s,r,u)
break
case C.d:this.J(p,this.cx.d)
z=this.a
u=this.cx.d
z.a3(z.d8,z.b9,u)
u=this.a
z=this.cx.f
u=u.b8
u.toString
s=z.a
r=z.b
z=z.c
C.b.n(u.a,u.d,s,r,z)
break
case C.e:this.J(p,this.cx.e)
z=this.a
u=this.cx.e
z.X(z.d9,z.b9,u)
u=this.a
z=this.cx.f
u=u.b8
u.toString
s=z.a
r=z.b
z=z.c
C.b.n(u.a,u.d,s,r,z)
break}switch(w.x){case C.c:break
case C.f:z=this.a
u=this.cy.f
z=z.bb
z.toString
s=u.a
r=u.b
u=u.c
C.b.n(z.a,z.d,s,r,u)
u=this.a
r=this.cy.ch
u=u.ba
C.b.C(u.a,u.d,r)
break
case C.d:this.J(p,this.cy.d)
z=this.a
u=this.cy.d
z.a3(z.da,z.bc,u)
u=this.a
z=this.cy.f
u=u.bb
u.toString
s=z.a
r=z.b
z=z.c
C.b.n(u.a,u.d,s,r,z)
z=this.a
r=this.cy.ch
z=z.ba
C.b.C(z.a,z.d,r)
break
case C.e:this.J(p,this.cy.e)
z=this.a
u=this.cy.e
z.X(z.dc,z.bc,u)
u=this.a
z=this.cy.f
u=u.bb
u.toString
s=z.a
r=z.b
z=z.c
C.b.n(u.a,u.d,s,r,z)
z=this.a
r=this.cy.ch
z=z.ba
C.b.C(z.a,z.d,r)
break}}z=w.y
u=z!==C.c
if(u){switch(z){case C.c:break
case C.f:z=this.a
s=this.db.f
z=z.bd
C.b.C(z.a,z.d,s)
break
case C.d:this.J(p,this.db.d)
z=this.a
s=this.db.d
z.a3(z.dd,z.be,s)
s=this.a
z=this.db.f
s=s.bd
C.b.C(s.a,s.d,z)
break
case C.e:this.J(p,this.db.e)
z=this.a
s=this.db.e
z.X(z.de,z.be,s)
s=this.a
z=this.db.f
s=s.bd
C.b.C(s.a,s.d,z)
break}C.b.bP(t,3042)
C.b.hp(t,770,771)}for(n=0;n<p.length;++n){z=p[n]
if(z.d==null){s=z.c
z.d=s
if(!(s==null))s.ah(a)}}z=a0.e
z.ah(a)
z.az(a)
z.aQ(a)
if(u)C.b.hI(t,3042)
for(n=0;n<p.length;++n){z=p[n]
u=z.d
if(u!=null){u.aQ(a)
z.d=null}}z=this.a
z.toString
C.b.dH(t,null)
z.x.hJ()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.cv().a4}},h5:{"^":"co;0f,a,b,0c,0d,0e",
fz:function(a){var z,y
z=this.f
if(!$.k.$2(z,a)){y=this.f
this.f=a
z=new D.F(this.b,y,a,this,[P.q])
z.b=!0
this.a.P(z)}},
ap:function(){this.ci()
this.fz(1)}},co:{"^":"a;",
P:[function(a){this.a.P(H.l(a,"$isy"))},function(){return this.P(null)},"ek","$1","$0","gaS",0,2,0],
ap:["ci",function(){}],
fC:function(a){var z,y
z=this.d
if(z==null?a!=null:z!==a){if(z!=null)z.gv().A(0,this.gaS())
y=this.d
this.d=a
if(a!=null)a.gv().h(0,this.gaS())
z=new D.F(this.b+".texture2D",y,this.d,this,[T.b9])
z.b=!0
this.a.P(z)}},
fD:function(a){},
sdC:function(a){var z=this.c
if(z!==C.d){if(z===C.c)this.ap()
this.c=C.d
this.fD(null)
z=this.a
z.a=null
z.P(null)}this.fC(a)}},h6:{"^":"co;a,b,0c,0d,0e"},aG:{"^":"co;0f,a,b,0c,0d,0e",
cK:function(a){var z,y
if(!J.J(this.f,a)){z=this.f
this.f=a
y=new D.F(this.b+".color",z,a,this,[V.T])
y.b=!0
this.a.P(y)}},
ap:["cj",function(){this.ci()
this.cK(new V.T(1,1,1))}],
sai:function(a,b){var z
if(this.c===C.c){this.c=C.f
this.ap()
z=this.a
z.a=null
z.P(null)}this.cK(b)}},h8:{"^":"aG;0ch,0f,a,b,0c,0d,0e",
fA:function(a){var z,y
z=this.ch
if(!$.k.$2(z,a)){y=this.ch
this.ch=a
z=new D.F(this.b+".refraction",y,a,this,[P.q])
z.b=!0
this.a.P(z)}},
ap:function(){this.cj()
this.fA(1)}},h9:{"^":"aG;0ch,0f,a,b,0c,0d,0e",
fB:function(a){var z,y
z=this.ch
if(!$.k.$2(z,a)){y=this.ch
this.ch=a
z=new D.F(this.b+".shininess",y,a,this,[P.q])
z.b=!0
this.a.P(z)}},
ap:function(){this.cj()
this.fB(100)}},bQ:{"^":"a;"}}],["","",,T,{"^":"",cx:{"^":"c7;"},b9:{"^":"cx;"},i0:{"^":"b9;0a,0b,0c,0d,0e,0f",
sfS:function(a){this.e=H.i(a,"$isb",[T.b9],"$asb")},
gV:function(a){var z=this.d
z=z==null?null:z.gV(z)
if(z==null){z=this.c
z=z==null?null:z.gV(z)}return z==null?!1:z},
gv:function(){var z=this.f
if(z==null){z=D.a7()
this.f=z}return z},
ah:function(a){var z
if(this.d==null){z=this.c
this.d=z
if(!(z==null))z.ah(a)}},
aQ:function(a){var z=this.d
if(z!=null){z.aQ(a)
this.d=null}}},i1:{"^":"b9;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gV:function(a){return this.d},
ah:function(a){var z
if(!this.c&&this.d){this.c=!0
z=a.a
C.b.cP(z,33984+this.a)
C.b.ar(z,3553,this.b)}},
aQ:function(a){var z
if(this.c){this.c=!1
z=a.a
C.b.cP(z,33984+this.a)
C.b.ar(z,3553,null)}}},i2:{"^":"a;a,0b,0c,0d,0e",
hY:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
C.b.ar(z,3553,y)
C.b.bi(z,3553,10242,33071)
C.b.bi(z,3553,10243,33071)
C.b.bi(z,3553,10241,9729)
C.b.bi(z,3553,10240,9729)
C.b.ar(z,3553,null);++this.d
x=document.createElement("img")
x.src=a
w=new T.i1()
w.a=0
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
z=W.U
W.M(x,"load",H.j(new T.i3(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
ay:function(a){return this.hY(a,!1,!1,!1,!1)},
fu:function(a,b,c){var z,y,x,w
b=V.d_(b,2)
z=V.d_(a.width,2)
y=V.d_(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cb(null,null)
x.width=z
x.height=y
w=H.l(C.m.dP(x,"2d"),"$iscc")
w.imageSmoothingEnabled=!1;(w&&C.r).hL(w,a,0,0,x.width,x.height)
return P.jF(C.r.eO(w,0,0,x.width,x.height))}}},i3:{"^":"p:17;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.fu(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
C.b.ar(y,3553,this.e)
C.b.ie(y,37440,this.f?1:0)
C.b.it(y,3553,0,6408,6408,5121,w)
if(this.r)C.b.dL(y,3553)
C.b.ar(y,3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.cY()}++x.e}}}],["","",,V,{"^":"",f6:{"^":"a;",
aH:function(a){return!0},
i:function(a){return"all"},
$isb3:1},b3:{"^":"a;"},dB:{"^":"a;0a",
saf:function(a){this.a=H.i(a,"$isb",[V.b3],"$asb")},
aH:["e2",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.t)(z),++x)if(z[x].aH(a))return!0
return!1}],
i:["cg",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.t)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isb3:1},b6:{"^":"dB;0a",
aH:function(a){return!this.e2(a)},
i:function(a){return"!["+this.cg(0)+"]"}},hI:{"^":"a;0a",
sfw:function(a){this.a=H.i(a,"$isae",[P.u,P.Y],"$asae")},
e6:function(a){var z,y
if(a.a.length<=0)throw H.h(P.n("May not create a SetMatcher with zero characters."))
z=new H.b0(0,0,[P.u,P.Y])
for(y=new H.dy(a,a.gl(a),0,[H.aa(a,"L",0)]);y.w();)z.U(0,y.d,!0)
this.sfw(z)},
aH:function(a){return this.a.cV(a)},
i:function(a){var z=this.a
return P.cw(new H.fS(z,[H.r(z,0)]),0,null)},
$isb3:1,
m:{
S:function(a){var z=new V.hI()
z.e6(a)
return z}}},cu:{"^":"a;a,b,0c,0d",
sfU:function(a){this.c=H.i(a,"$isb",[V.cA],"$asb")},
u:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.cA(this.a.E(0,b))
w.saf(H.c([],[V.b3]))
w.c=!1
C.a.h(this.c,w)
return w},
hN:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.t)(z),++x){w=z[x]
if(w.aH(a))return w}return},
i:function(a){return this.b}},e7:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.f1(this.b,"\n","\\n")
y=H.f1(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},cz:{"^":"a;a,b,0c",
sfp:function(a){var z=P.v
this.c=H.i(a,"$isae",[z,z],"$asae")},
i:function(a){return this.b}},i7:{"^":"a;0a,0b,0c",
sfN:function(a){this.a=H.i(a,"$isae",[P.v,V.cu],"$asae")},
sfT:function(a){this.b=H.i(a,"$isae",[P.v,V.cz],"$asae")},
E:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.cu(this,b)
z.sfU(H.c([],[V.cA]))
z.d=null
this.a.U(0,b,z)}return z},
aO:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.cz(this,a)
y=P.v
z.sfp(new H.b0(0,0,[y,y]))
this.b.U(0,a,z)}return z},
iA:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.e7])
y=this.c
x=[P.u]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.aT(a,t)
r=y.hN(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cw(w,0,null)
throw H.h(P.n("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cw(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.e7(o==null?p.b:o,q,t)}++t}}}},cA:{"^":"dB;b,0c,0a",
i:function(a){return this.b.b+": "+this.cg(0)}}}],["","",,X,{"^":"",da:{"^":"a;",$isao:1},fE:{"^":"dZ;0a,0b,0c,0d,0e,0f,0r,0x",
gv:function(){var z=this.x
if(z==null){z=D.a7()
this.x=z}return z}},hj:{"^":"a;0a,0b,0c,0d,0e,0f",
gv:function(){var z=this.f
if(z==null){z=D.a7()
this.f=z}return z},
aB:[function(a){var z
H.l(a,"$isy")
z=this.f
if(!(z==null))z.K(a)},function(){return this.aB(null)},"iG","$1","$0","gcm",0,2,0],
saJ:function(a){var z,y
if(!J.J(this.b,a)){z=this.b
if(z!=null)z.gv().A(0,this.gcm())
y=this.b
this.b=a
if(a!=null)a.gv().h(0,this.gcm())
z=new D.F("mover",y,this.b,this,[U.bv])
z.b=!0
this.aB(z)}},
$isao:1,
$isda:1},dZ:{"^":"a;"}}],["","",,V,{"^":"",
k1:function(a){P.e5(C.B,new V.k2(a))},
k2:{"^":"p:32;a",
$1:function(a){H.l(a,"$isag")
P.d0(C.j.dE(this.a.ghQ(),2)+" fps")}},
hO:{"^":"a;0a,0b",
e8:function(a,b){var z,y,x,w,v,u,t
z=document
y=z.body
x=z.createElement("div")
x.className="scrollTop";(y&&C.q).R(y,x)
w=z.createElement("div")
w.className="scrollPage"
C.q.R(y,w)
v=z.createElement("div")
v.className="pageCenter"
C.l.R(w,v)
if(a.length!==0){z.title=a
u=z.createElement("div")
u.className="pageTitle"
u.textContent=a
C.l.R(v,u)}t=z.createElement("div")
this.a=t
C.l.R(v,t)
this.b=null
t=W.U
W.M(z,"scroll",H.j(new V.hR(x),{func:1,ret:-1,args:[t]}),!1,t)},
cQ:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.i(a,"$isb",[P.v],"$asb")
this.fI()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.iA(C.a.hU(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.t)(x),++v){u=x[v]
switch(u.a){case"Bold":t=z.createElement("div")
t.className="boldPar"
t.textContent=u.b
C.l.R(y,t)
break
case"Italic":t=z.createElement("div")
t.className="italicPar"
t.textContent=u.b
C.l.R(y,t)
break
case"Code":t=z.createElement("div")
t.className="codePar"
t.textContent=u.b
C.l.R(y,t)
break
case"Link":s=u.b
if(H.f0(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.e(r,1)
q.href=H.I(r[1])
q.textContent=H.I(r[0])
C.l.R(y,q)}else{p=P.jm(C.M,s,C.w,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+p
q.textContent=s
C.l.R(y,q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
C.l.R(y,t)
break}}C.l.R(this.a,y)},
fI:function(){var z,y,x,w
if(this.b!=null)return
z=new V.i7()
y=P.v
z.sfN(new H.b0(0,0,[y,V.cu]))
z.sfT(new H.b0(0,0,[y,V.cz]))
z.c=null
z.c=z.E(0,"Start")
y=z.E(0,"Start").u(0,"Bold")
x=V.S(new H.Q("*"))
C.a.h(y.a,x)
y.c=!0
y=z.E(0,"Bold").u(0,"Bold")
x=new V.b6()
w=[V.b3]
x.saf(H.c([],w))
C.a.h(y.a,x)
y=V.S(new H.Q("*"))
C.a.h(x.a,y)
y=z.E(0,"Bold").u(0,"BoldEnd")
x=V.S(new H.Q("*"))
C.a.h(y.a,x)
y.c=!0
y=z.E(0,"Start").u(0,"Italic")
x=V.S(new H.Q("_"))
C.a.h(y.a,x)
y.c=!0
y=z.E(0,"Italic").u(0,"Italic")
x=new V.b6()
x.saf(H.c([],w))
C.a.h(y.a,x)
y=V.S(new H.Q("_"))
C.a.h(x.a,y)
y=z.E(0,"Italic").u(0,"ItalicEnd")
x=V.S(new H.Q("_"))
C.a.h(y.a,x)
y.c=!0
y=z.E(0,"Start").u(0,"Code")
x=V.S(new H.Q("`"))
C.a.h(y.a,x)
y.c=!0
y=z.E(0,"Code").u(0,"Code")
x=new V.b6()
x.saf(H.c([],w))
C.a.h(y.a,x)
y=V.S(new H.Q("`"))
C.a.h(x.a,y)
y=z.E(0,"Code").u(0,"CodeEnd")
x=V.S(new H.Q("`"))
C.a.h(y.a,x)
y.c=!0
y=z.E(0,"Start").u(0,"LinkHead")
x=V.S(new H.Q("["))
C.a.h(y.a,x)
y.c=!0
y=z.E(0,"LinkHead").u(0,"LinkTail")
x=V.S(new H.Q("|"))
C.a.h(y.a,x)
x=z.E(0,"LinkHead").u(0,"LinkEnd")
y=V.S(new H.Q("]"))
C.a.h(x.a,y)
x.c=!0
x=z.E(0,"LinkHead").u(0,"LinkHead")
y=new V.b6()
y.saf(H.c([],w))
C.a.h(x.a,y)
x=V.S(new H.Q("|]"))
C.a.h(y.a,x)
x=z.E(0,"LinkTail").u(0,"LinkEnd")
y=V.S(new H.Q("]"))
C.a.h(x.a,y)
x.c=!0
x=z.E(0,"LinkTail").u(0,"LinkTail")
y=new V.b6()
y.saf(H.c([],w))
C.a.h(x.a,y)
x=V.S(new H.Q("|]"))
C.a.h(y.a,x)
C.a.h(z.E(0,"Start").u(0,"Other").a,new V.f6())
x=z.E(0,"Other").u(0,"Other")
y=new V.b6()
y.saf(H.c([],w))
C.a.h(x.a,y)
x=V.S(new H.Q("*_`["))
C.a.h(y.a,x)
x=z.E(0,"BoldEnd")
x.d=x.a.aO("Bold")
x=z.E(0,"ItalicEnd")
x.d=x.a.aO("Italic")
x=z.E(0,"CodeEnd")
x.d=x.a.aO("Code")
x=z.E(0,"LinkEnd")
x.d=x.a.aO("Link")
x=z.E(0,"Other")
x.d=x.a.aO("Other")
this.b=z},
m:{
hP:function(a,b){var z=new V.hO()
z.e8(a,!0)
return z}}},
hR:{"^":"p:17;a",
$1:function(a){P.e4(C.n,new V.hQ(this.a))}},
hQ:{"^":"p:1;a",
$0:function(){var z,y,x
z=C.j.a6(document.documentElement.scrollTop)
y=this.a.style
x=H.f(-0.01*z)+"px"
y.top=x}}}],["","",,N,{"^":"",
eX:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=V.hP("Test 039",!0)
y=W.cb(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
C.l.R(z.a,y)
x=[P.v]
z.cQ(H.c(["Test of an animated texture on a square."],x))
z.cQ(H.c(["\xab[Back to Tests|../]"],x))
w=C.C.dQ(document,"testCanvas")
if(w==null)H.m(P.n("Failed to find an element with the identifier, testCanvas."))
v=E.i5(w,!0,!0,!0,!1)
u=new E.ad()
u.a=""
u.b=!0
z=E.ad
u.sex(0,O.ce(z))
u.y.bo(u.gi0(),u.gi2())
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
u.scc(0,null)
u.saJ(null)
t=F.dV()
F.bg(t,null,null,1,1,1,0,0,1)
F.bg(t,null,null,1,1,0,1,0,3)
F.bg(t,null,null,1,1,0,0,1,2)
F.bg(t,null,null,1,1,-1,0,0,0)
F.bg(t,null,null,1,1,0,-1,0,0)
F.bg(t,null,null,1,1,0,0,-1,3)
t.as()
t.i_(new F.iA(),new F.hg())
u.scc(0,t)
x=new U.dS()
x.a=0
x.b=0
x.c=0
x.d=0
x.e=0
x.f=0
x.r=0
x.sdI(0)
x.sdt(0)
x.sdz(0)
s=x.d
if(!$.k.$2(s,0.1)){r=x.d
x.d=0.1
s=new D.F("deltaYaw",r,0.1,x,[P.q])
s.b=!0
x.ao(s)}s=x.e
if(!$.k.$2(s,0.21)){r=x.e
x.e=0.21
s=new D.F("deltaPitch",r,0.21,x,[P.q])
s.b=!0
x.ao(s)}s=x.f
if(!$.k.$2(s,0.32)){r=x.f
x.f=0.32
s=new D.F("deltaRoll",r,0.32,x,[P.q])
s.b=!0
x.ao(s)}u.saJ(x)
x=T.b9
s=P.dz([v.f.ay("../resources/diceColor/posx.png"),v.f.ay("../resources/diceColor/posz.png"),v.f.ay("../resources/diceColor/negx.png"),v.f.ay("../resources/diceColor/negy.png"),v.f.ay("../resources/diceColor/posy.png"),v.f.ay("../resources/diceColor/negz.png")],!0,x)
q=new T.i0()
q.a=0
q.b=0
q.sfS(H.i(s,"$isb",[x],"$asb"))
q.f=null
P.e5(P.cf(0,0,0,500,0,0),new N.jV(q))
p=new O.h2()
p.ses(O.ce(V.a1))
p.e.bo(p.geX(),p.geY())
x=new O.aG(p,"emission")
x.c=C.c
x.f=new V.T(0,0,0)
p.f=x
x=new O.aG(p,"ambient")
x.c=C.c
x.f=new V.T(0,0,0)
p.r=x
x=new O.aG(p,"diffuse")
x.c=C.c
x.f=new V.T(0,0,0)
p.x=x
x=new O.aG(p,"invDiffuse")
x.c=C.c
x.f=new V.T(0,0,0)
p.y=x
x=new O.h9(p,"specular")
x.c=C.c
x.f=new V.T(0,0,0)
x.ch=100
p.z=x
x=new O.h6(p,"bump")
x.c=C.c
p.Q=x
p.ch=null
x=new O.aG(p,"reflect")
x.c=C.c
x.f=new V.T(0,0,0)
p.cx=x
x=new O.h8(p,"refract")
x.c=C.c
x.f=new V.T(0,0,0)
x.ch=1
p.cy=x
x=new O.h5(p,"alpha")
x.c=C.c
x.f=1
p.db=x
x=new D.fP()
x.ck(D.P)
x.seD(H.c([],[D.bH]))
x.sfk(H.c([],[D.dJ]))
x.sfM(H.c([],[D.dW]))
x.sfV(H.c([],[D.e0]))
x.sfW(H.c([],[D.e1]))
x.sfX(H.c([],[D.e2]))
x.Q=null
x.ch=null
x.cb(x.geW(),x.gff(),x.gfg())
p.dx=x
s=x.Q
if(s==null){s=D.a7()
x.Q=s
x=s}else x=s
x.h(0,p.gfs())
x=p.dx
s=x.ch
if(s==null){s=D.a7()
x.ch=s
x=s}else x=s
x.h(0,p.gaS())
p.dy=null
x=p.dx
o=V.ep()
s=U.de(V.dD(V.dL(),o,new V.G(1,-1,-3)))
n=new V.T(1,1,1)
m=new D.bH()
m.c=new V.T(1,1,1)
m.a=V.iu()
r=m.b
m.b=s
s.gv().h(0,m.gec())
s=new D.F("mover",r,m.b,m,[U.bv])
s.b=!0
m.ak(s)
if(!m.c.q(0,n)){r=m.c
m.c=n
s=new D.F("color",r,n,m,[V.T])
s.b=!0
m.ak(s)}x.h(0,m)
x=p.r
x.sai(0,new V.T(0.2,0.2,0.2))
x=p.x
x.sai(0,new V.T(0.8,0.8,0.8))
p.r.sdC(q)
p.x.sdC(q)
x=new M.fv()
x.sed(0,O.ce(z))
x.d.bo(x.gf_(),x.gf0())
x.e=null
x.f=null
x.r=null
x.x=null
l=new X.hj()
l.c=1.0471975511965976
l.d=0.1
l.e=2000
l.saJ(null)
z=l.c
if(!$.k.$2(z,1.0471975511965976)){r=l.c
l.c=1.0471975511965976
z=new D.F("fov",r,1.0471975511965976,l,[P.q])
z.b=!0
l.aB(z)}z=l.d
if(!$.k.$2(z,0.1)){r=l.d
l.d=0.1
z=new D.F("near",r,0.1,l,[P.q])
z.b=!0
l.aB(z)}z=l.e
if(!$.k.$2(z,2000)){r=l.e
l.e=2000
z=new D.F("far",r,2000,l,[P.q])
z.b=!0
l.aB(z)}z=x.a
if(z!==l){if(z!=null)z.gv().A(0,x.ga8())
r=x.a
x.a=l
l.gv().h(0,x.ga8())
z=new D.F("camera",r,x.a,x,[X.da])
z.b=!0
x.al(z)}k=new X.fE()
z=new V.bF(0,0,0,1)
k.a=z
k.b=!0
k.c=2000
k.d=!0
k.e=0
k.f=!1
z=$.dR
if(z==null){z=V.hz(0,0,1,1)
$.dR=z}k.r=z
z=x.b
if(z!==k){if(z!=null)z.gv().A(0,x.ga8())
r=x.b
x.b=k
k.gv().h(0,x.ga8())
z=new D.F("target",r,x.b,x,[X.dZ])
z.b=!0
x.al(z)}x.sdB(null)
x.sdB(p)
x.d.h(0,u)
x.a.saJ(U.de(V.an(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
z=v.d
if(z!==x){if(z!=null)z.gv().A(0,v.gcl())
v.d=x
x.gv().h(0,v.gcl())
v.ea()}V.k1(v)},
jV:{"^":"p:33;a",
$1:function(a){var z,y,x,w
H.l(a,"$isag")
z=this.a
y=z.b
x=z.e
w=x.length
y=(y+1)%w
if(y<w){z.b=y
z.c=H.l(x[y],"$isb9")
z=z.f
if(!(z==null))z.cY()}return}}},1]]
setupProgram(dart,0,0)
J.H=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.du.prototype
return J.dt.prototype}if(typeof a=="string")return J.ck.prototype
if(a==null)return J.dv.prototype
if(typeof a=="boolean")return J.fK.prototype
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.a)return a
return J.c_(a)}
J.bY=function(a){if(typeof a=="string")return J.ck.prototype
if(a==null)return a
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.a)return a
return J.c_(a)}
J.eT=function(a){if(a==null)return a
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.a)return a
return J.c_(a)}
J.jJ=function(a){if(typeof a=="number")return J.bN.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cK.prototype
return a}
J.bZ=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.a)return a
return J.c_(a)}
J.J=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.H(a).q(a,b)}
J.f3=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.jJ(a).bn(a,b)}
J.f4=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.jS(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bY(a).j(a,b)}
J.f5=function(a,b,c,d){return J.bZ(a).eo(a,b,c,d)}
J.d2=function(a,b){return J.bZ(a).R(a,b)}
J.c5=function(a,b,c){return J.bY(a).hx(a,b,c)}
J.d3=function(a,b){return J.eT(a).Y(a,b)}
J.bn=function(a){return J.H(a).gN(a)}
J.bo=function(a){return J.eT(a).gL(a)}
J.bp=function(a){return J.bY(a).gl(a)}
J.a_=function(a){return J.H(a).i(a)}
I.cY=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.q=W.f9.prototype
C.m=W.ca.prototype
C.r=W.cc.prototype
C.l=W.dn.prototype
C.C=W.fG.prototype
C.D=J.C.prototype
C.a=J.aF.prototype
C.E=J.dt.prototype
C.h=J.du.prototype
C.o=J.dv.prototype
C.j=J.bN.prototype
C.i=J.ck.prototype
C.L=J.bu.prototype
C.N=W.hf.prototype
C.v=J.hk.prototype
C.b=P.cs.prototype
C.p=J.cK.prototype
C.x=W.be.prototype
C.y=W.iJ.prototype
C.z=new P.hi()
C.A=new P.it()
C.k=new P.jc()
C.c=new A.bG(0,"ColorSourceType.None")
C.f=new A.bG(1,"ColorSourceType.Solid")
C.d=new A.bG(2,"ColorSourceType.Texture2D")
C.e=new A.bG(3,"ColorSourceType.TextureCube")
C.n=new P.aX(0)
C.B=new P.aX(5e6)
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
C.M=H.c(I.cY([0,0,65498,45055,65535,34815,65534,18431]),[P.u])
C.w=new P.is(!1)
$.ac=0
$.aV=null
$.d5=null
$.cP=!1
$.eV=null
$.eO=null
$.f_=null
$.bX=null
$.c1=null
$.cX=null
$.aN=null
$.bj=null
$.bk=null
$.cQ=!1
$.D=C.k
$.dl=null
$.dk=null
$.dj=null
$.di=null
$.k=V.ha()
$.dE=null
$.dK=null
$.b7=null
$.dR=null
$.el=null
$.eo=null
$.en=null
$.bS=null
$.em=null
$.dI=null
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
I.$lazy(y,x,w)}})(["dh","$get$dh",function(){return H.eU("_$dart_dartClosure")},"cl","$get$cl",function(){return H.eU("_$dart_js")},"e8","$get$e8",function(){return H.ah(H.bR({
toString:function(){return"$receiver$"}}))},"e9","$get$e9",function(){return H.ah(H.bR({$method$:null,
toString:function(){return"$receiver$"}}))},"ea","$get$ea",function(){return H.ah(H.bR(null))},"eb","$get$eb",function(){return H.ah(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"ef","$get$ef",function(){return H.ah(H.bR(void 0))},"eg","$get$eg",function(){return H.ah(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"ed","$get$ed",function(){return H.ah(H.ee(null))},"ec","$get$ec",function(){return H.ah(function(){try{null.$method$}catch(z){return z.message}}())},"ei","$get$ei",function(){return H.ah(H.ee(void 0))},"eh","$get$eh",function(){return H.ah(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cN","$get$cN",function(){return P.iK()},"bl","$get$bl",function(){return[]},"eH","$get$eH",function(){return P.hy("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dg","$get$dg",function(){return{}},"es","$get$es",function(){return Z.a5(0)},"eq","$get$eq",function(){return Z.a5(511)},"at","$get$at",function(){return Z.a5(1)},"as","$get$as",function(){return Z.a5(2)},"ar","$get$ar",function(){return Z.a5(4)},"au","$get$au",function(){return Z.a5(8)},"av","$get$av",function(){return Z.a5(16)},"bc","$get$bc",function(){return Z.a5(32)},"bd","$get$bd",function(){return Z.a5(64)},"er","$get$er",function(){return Z.a5(96)},"aL","$get$aL",function(){return Z.a5(128)},"aq","$get$aq",function(){return Z.a5(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.y]},{func:1,ret:P.B},{func:1,ret:-1},{func:1,ret:-1,args:[W.a8]},{func:1,ret:-1,args:[P.u,[P.o,E.ad]]},{func:1,ret:P.B,args:[F.V]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.B,args:[D.y]},{func:1,ret:-1,args:[W.U]},{func:1,ret:-1,args:[W.aJ]},{func:1,ret:-1,args:[P.u,[P.o,V.a1]]},{func:1,args:[,]},{func:1,ret:P.B,args:[,]},{func:1,ret:-1,args:[W.b1]},{func:1,ret:-1,args:[P.u,[P.o,D.P]]},{func:1,ret:P.q},{func:1,ret:P.B,args:[,,]},{func:1,ret:P.B,args:[W.U]},{func:1,ret:P.v,args:[P.u]},{func:1,args:[W.U]},{func:1,ret:W.R,args:[W.E]},{func:1,ret:P.B,args:[{func:1,ret:-1}]},{func:1,args:[,P.v]},{func:1,ret:P.Y,args:[W.E]},{func:1,ret:P.B,args:[{func:1,ret:-1,args:[D.y]}]},{func:1,args:[P.v]},{func:1,ret:P.B,args:[,],opt:[,]},{func:1,ret:P.Y,args:[P.q,P.q]},{func:1,ret:[P.aw,,],args:[,]},{func:1,ret:P.Y,args:[[P.o,D.P]]},{func:1,ret:P.B,args:[F.aj,P.q,P.q]},{func:1,ret:-1,args:[W.be]},{func:1,ret:P.B,args:[P.ag]},{func:1,ret:-1,args:[P.ag]},{func:1,ret:P.B,args:[P.ab]}]
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
if(x==y)H.k4(d||a)
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
Isolate.cY=a.cY
Isolate.cV=a.cV
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
if(typeof dartMainRunner==="function")dartMainRunner(N.eX,[])
else N.eX([])})})()
//# sourceMappingURL=test.dart.js.map
