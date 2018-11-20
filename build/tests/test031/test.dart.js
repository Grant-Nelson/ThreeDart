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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.dh"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dh"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.dh(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.di=function(){}
var dart=[["","",,H,{"^":"",lb:{"^":"a;a"}}],["","",,J,{"^":"",
dm:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
co:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dk==null){H.kJ()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.j(P.eQ("Return interceptor for "+H.i(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cJ()]
if(v!=null)return v
v=H.kO(a)
if(v!=null)return v
if(typeof a=="function")return C.L
y=Object.getPrototypeOf(a)
if(y==null)return C.v
if(y===Object.prototype)return C.v
if(typeof w=="function"){Object.defineProperty(w,$.$get$cJ(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
G:{"^":"a;",
q:function(a,b){return a===b},
gZ:function(a){return H.bq(a)},
i:["eS",function(a){return"Instance of '"+H.aX(a)+"'"}],
"%":"DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo"},
hs:{"^":"G;",
i:function(a){return String(a)},
gZ:function(a){return a?519018:218159},
$isU:1},
dX:{"^":"G;",
q:function(a,b){return null==b},
i:function(a){return"null"},
gZ:function(a){return 0},
$isF:1},
cK:{"^":"G;",
gZ:function(a){return 0},
i:["eT",function(a){return String(a)}]},
i5:{"^":"cK;"},
ce:{"^":"cK;"},
bO:{"^":"cK;",
i:function(a){var z=a[$.$get$dF()]
if(z==null)return this.eT(a)
return"JavaScript function for "+H.i(J.ae(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscH:1},
aU:{"^":"G;$ti",
h:function(a,b){H.x(b,H.r(a,0))
if(!!a.fixed$length)H.o(P.a9("add"))
a.push(b)},
jk:function(a,b){var z
if(!!a.fixed$length)H.o(P.a9("removeAt"))
z=a.length
if(b>=z)throw H.j(P.bR(b,null,null))
return a.splice(b,1)[0]},
F:function(a,b){var z
if(!!a.fixed$length)H.o(P.a9("remove"))
for(z=0;z<a.length;++z)if(J.B(a[z],b)){a.splice(z,1)
return!0}return!1},
ci:function(a,b){var z,y
H.e(b,"$isk",[H.r(a,0)],"$ask")
if(!!a.fixed$length)H.o(P.a9("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.v)(b),++y)a.push(b[y])},
ai:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.r(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.j(P.bd(a))}},
E:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.aa(z,y,H.i(a[y]))
return z.join(b)},
iY:function(a){return this.E(a,"")},
ah:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
eR:function(a,b,c){var z=a.length
if(b>z)throw H.j(P.ag(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.j(P.ag(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.r(a,0)])
return H.d(a.slice(b,c),[H.r(a,0)])},
giQ:function(a){if(a.length>0)return a[0]
throw H.j(H.dT())},
gcG:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.j(H.dT())},
as:function(a,b){var z
for(z=0;z<a.length;++z)if(J.B(a[z],b))return!0
return!1},
i:function(a){return P.cI(a,"[","]")},
gR:function(a){return new J.am(a,a.length,0,[H.r(a,0)])},
gZ:function(a){return H.bq(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.o(P.a9("set length"))
if(b<0)throw H.j(P.ag(b,0,null,"newLength",null))
a.length=b},
aa:function(a,b,c){H.x(c,H.r(a,0))
if(!!a.immutable$list)H.o(P.a9("indexed set"))
if(b>=a.length||b<0)throw H.j(H.bG(a,b))
a[b]=c},
$isk:1,
$isb:1,
m:{
hr:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.j(P.cv(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.j(P.ag(a,0,4294967295,"length",null))
return J.dU(new Array(a),b)},
dU:function(a,b){return J.c5(H.d(a,[b]))},
c5:function(a){H.cr(a)
a.fixed$length=Array
return a}}},
la:{"^":"aU;$ti"},
am:{"^":"a;a,b,c,0d,$ti",
sd3:function(a){this.d=H.x(a,H.r(this,0))},
gL:function(){return this.d},
B:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.j(H.v(z))
x=this.c
if(x>=y){this.sd3(null)
return!1}this.sd3(z[x]);++this.c
return!0},
$isaP:1},
bN:{"^":"G;",
jx:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.j(P.a9(""+a+".toInt()"))},
cD:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.j(P.a9(""+a+".floor()"))},
X:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.j(P.a9(""+a+".round()"))},
ew:function(a,b){var z,y
if(b>20)throw H.j(P.ag(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gZ:function(a){return a&0x1FFFFFFF},
u:function(a,b){if(typeof b!=="number")throw H.j(H.aM(b))
return a*b},
eN:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
eW:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dB(a,b)},
a4:function(a,b){return(a|0)===a?a/b|0:this.dB(a,b)},
dB:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.j(P.a9("Result of truncating division is "+H.i(z)+": "+H.i(a)+" ~/ "+b))},
bw:function(a,b){var z
if(a>0)z=this.hK(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
hK:function(a,b){return b>31?0:a>>>b},
aA:function(a,b){if(typeof b!=="number")throw H.j(H.aM(b))
return a<b},
$isq:1,
$isad:1},
dW:{"^":"bN;",$isu:1},
dV:{"^":"bN;"},
c6:{"^":"G;",
cr:function(a,b){if(b<0)throw H.j(H.bG(a,b))
if(b>=a.length)H.o(H.bG(a,b))
return a.charCodeAt(b)},
bs:function(a,b){if(b>=a.length)throw H.j(H.bG(a,b))
return a.charCodeAt(b)},
G:function(a,b){H.N(b)
if(typeof b!=="string")throw H.j(P.cv(b,null,null))
return a+b},
cZ:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.j(P.bR(b,null,null))
if(b>c)throw H.j(P.bR(b,null,null))
if(c>a.length)throw H.j(P.bR(c,null,null))
return a.substring(b,c)},
cY:function(a,b){return this.cZ(a,b,null)},
u:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.j(C.z)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
ja:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.u(c,z)+a},
ak:function(a,b){return this.ja(a,b," ")},
iB:function(a,b,c){if(c>a.length)throw H.j(P.ag(c,0,a.length,null,null))
return H.fB(a,b,c)},
i:function(a){return a},
gZ:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gn:function(a){return a.length},
$isec:1,
$isA:1}}],["","",,H,{"^":"",
dT:function(){return new P.iJ("No element")},
Z:{"^":"je;a",
gn:function(a){return this.a.length},
j:function(a,b){return C.j.cr(this.a,b)},
$aseR:function(){return[P.u]},
$asO:function(){return[P.u]},
$ask:function(){return[P.u]},
$asb:function(){return[P.u]}},
h9:{"^":"k;"},
e_:{"^":"a;a,b,c,0d,$ti",
sb_:function(a){this.d=H.x(a,H.r(this,0))},
gL:function(){return this.d},
B:function(){var z,y,x,w
z=this.a
y=J.cn(z)
x=y.gn(z)
if(this.b!==x)throw H.j(P.bd(z))
w=this.c
if(w>=x){this.sb_(null)
return!1}this.sb_(y.ah(z,w));++this.c
return!0},
$isaP:1},
hL:{"^":"k;a,b,$ti",
gR:function(a){return new H.hM(J.bW(this.a),this.b,this.$ti)},
gn:function(a){return J.bI(this.a)},
ah:function(a,b){return this.b.$1(J.dr(this.a,b))},
$ask:function(a,b){return[b]}},
hM:{"^":"aP;0a,b,c,$ti",
sb_:function(a){this.a=H.x(a,H.r(this,1))},
B:function(){var z=this.b
if(z.B()){this.sb_(this.c.$1(z.gL()))
return!0}this.sb_(null)
return!1},
gL:function(){return this.a},
$asaP:function(a,b){return[b]}},
jw:{"^":"k;a,b,$ti",
gR:function(a){return new H.jx(J.bW(this.a),this.b,this.$ti)}},
jx:{"^":"aP;a,b,$ti",
B:function(){var z,y
for(z=this.a,y=this.b;z.B();)if(y.$1(z.gL()))return!0
return!1},
gL:function(){return this.a.gL()}},
c3:{"^":"a;$ti"},
eR:{"^":"a;$ti"},
je:{"^":"c7+eR;"}}],["","",,H,{"^":"",
ba:function(a){var z,y
z=H.N(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
kE:function(a){return init.types[H.a3(a)]},
kM:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.M(a).$isaD},
i:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ae(a)
if(typeof z!=="string")throw H.j(H.aM(a))
return z},
bq:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aX:function(a){return H.i6(a)+H.df(H.aR(a),0,null)},
i6:function(a){var z,y,x,w,v,u,t,s,r
z=J.M(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.D||!!z.$isce){u=C.u(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.ba(w.length>1&&C.j.bs(w,0)===36?C.j.cY(w,1):w)},
ei:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
ig:function(a){var z,y,x,w
z=H.d([],[P.u])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.v)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.j(H.aM(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.bw(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.j(H.aM(w))}return H.ei(z)},
ej:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.j(H.aM(x))
if(x<0)throw H.j(H.aM(x))
if(x>65535)return H.ig(a)}return H.ei(a)},
ie:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.bw(z,10))>>>0,56320|z&1023)}throw H.j(P.ag(a,0,1114111,null,null))},
aW:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
id:function(a){var z=H.aW(a).getFullYear()+0
return z},
ib:function(a){var z=H.aW(a).getMonth()+1
return z},
i7:function(a){var z=H.aW(a).getDate()+0
return z},
i8:function(a){var z=H.aW(a).getHours()+0
return z},
ia:function(a){var z=H.aW(a).getMinutes()+0
return z},
ic:function(a){var z=H.aW(a).getSeconds()+0
return z},
i9:function(a){var z=H.aW(a).getMilliseconds()+0
return z},
D:function(a){throw H.j(H.aM(a))},
h:function(a,b){if(a==null)J.bI(a)
throw H.j(H.bG(a,b))},
bG:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aN(!0,b,"index",null)
z=H.a3(J.bI(a))
if(!(b<0)){if(typeof z!=="number")return H.D(z)
y=b>=z}else y=!0
if(y)return P.bh(b,a,"index",null,z)
return P.bR(b,"index",null)},
kz:function(a,b,c){if(a>c)return new P.ca(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.ca(a,c,!0,b,"end","Invalid value")
return new P.aN(!0,b,"end",null)},
aM:function(a){return new P.aN(!0,a,null,null)},
ks:function(a){if(typeof a!=="number")throw H.j(H.aM(a))
return a},
j:function(a){var z
if(a==null)a=new P.eb()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fE})
z.name=""}else z.toString=H.fE
return z},
fE:function(){return J.ae(this.dartException)},
o:function(a){throw H.j(a)},
v:function(a){throw H.j(P.bd(a))},
aS:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.l_(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.bw(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cL(H.i(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.ea(H.i(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eE()
u=$.$get$eF()
t=$.$get$eG()
s=$.$get$eH()
r=$.$get$eL()
q=$.$get$eM()
p=$.$get$eJ()
$.$get$eI()
o=$.$get$eO()
n=$.$get$eN()
m=v.aj(y)
if(m!=null)return z.$1(H.cL(H.N(y),m))
else{m=u.aj(y)
if(m!=null){m.method="call"
return z.$1(H.cL(H.N(y),m))}else{m=t.aj(y)
if(m==null){m=s.aj(y)
if(m==null){m=r.aj(y)
if(m==null){m=q.aj(y)
if(m==null){m=p.aj(y)
if(m==null){m=s.aj(y)
if(m==null){m=o.aj(y)
if(m==null){m=n.aj(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.ea(H.N(y),m))}}return z.$1(new H.jd(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.ep()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aN(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.ep()
return a},
b8:function(a){var z
if(a==null)return new H.fe(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fe(a)},
kB:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.aa(0,a[y],a[x])}return b},
kL:function(a,b,c,d,e,f){H.f(a,"$iscH")
switch(H.a3(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.j(P.n("Unsupported number of arguments for wrapped closure"))},
b6:function(a,b){var z
H.a3(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kL)
a.$identity=z
return z},
fT:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.M(d).$isb){z.$reflectionInfo=d
x=H.ij(z).r}else x=d
w=e?Object.create(new H.iK().constructor.prototype):Object.create(new H.cx(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.au
if(typeof u!=="number")return u.G()
$.au=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.dA(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.kE,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.dv:H.cy
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.j("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.dA(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w["call*"]=q
w.$R=z.$R
w.$D=z.$D
return v},
fQ:function(a,b,c,d){var z=H.cy
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dA:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fS(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fQ(y,!w,z,b)
if(y===0){w=$.au
if(typeof w!=="number")return w.G()
$.au=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bb
if(v==null){v=H.bX("self")
$.bb=v}return new Function(w+H.i(v)+";return "+u+"."+H.i(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.au
if(typeof w!=="number")return w.G()
$.au=w+1
t+=w
w="return function("+t+"){return this."
v=$.bb
if(v==null){v=H.bX("self")
$.bb=v}return new Function(w+H.i(v)+"."+H.i(z)+"("+t+");}")()},
fR:function(a,b,c,d){var z,y
z=H.cy
y=H.dv
switch(b?-1:a){case 0:throw H.j(H.it("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fS:function(a,b){var z,y,x,w,v,u,t,s
z=$.bb
if(z==null){z=H.bX("self")
$.bb=z}y=$.du
if(y==null){y=H.bX("receiver")
$.du=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fR(w,!u,x,b)
if(w===1){z="return function(){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+");"
y=$.au
if(typeof y!=="number")return y.G()
$.au=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+", "+s+");"
y=$.au
if(typeof y!=="number")return y.G()
$.au=y+1
return new Function(z+y+"}")()},
dh:function(a,b,c,d,e,f,g){return H.fT(a,b,H.a3(c),d,!!e,!!f,g)},
N:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.j(H.aq(a,"String"))},
ly:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.j(H.aq(a,"double"))},
kR:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.j(H.aq(a,"num"))},
fr:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.j(H.aq(a,"bool"))},
a3:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.j(H.aq(a,"int"))},
fz:function(a,b){throw H.j(H.aq(a,H.ba(H.N(b).substring(3))))},
kT:function(a,b){throw H.j(H.fP(a,H.ba(H.N(b).substring(3))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.M(a)[b])return a
H.fz(a,b)},
c:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.M(a)[b]
else z=!0
if(z)return a
H.kT(a,b)},
cr:function(a){if(a==null)return a
if(!!J.M(a).$isb)return a
throw H.j(H.aq(a,"List<dynamic>"))},
kN:function(a,b){var z
if(a==null)return a
z=J.M(a)
if(!!z.$isb)return a
if(z[b])return a
H.fz(a,b)},
fs:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.a3(z)]
else return a.$S()}return},
bU:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fs(J.M(a))
if(z==null)return!1
return H.fi(z,null,b,null)},
l:function(a,b){var z,y
if(a==null)return a
if($.dc)return a
$.dc=!0
try{if(H.bU(a,b))return a
z=H.ct(b)
y=H.aq(a,z)
throw H.j(y)}finally{$.dc=!1}},
dj:function(a,b){if(a!=null&&!H.dg(a,b))H.o(H.aq(a,H.ct(b)))
return a},
fm:function(a){var z,y
z=J.M(a)
if(!!z.$ist){y=H.fs(z)
if(y!=null)return H.ct(y)
return"Closure"}return H.aX(a)},
kX:function(a){throw H.j(new P.fZ(H.N(a)))},
fu:function(a){return init.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
aR:function(a){if(a==null)return
return a.$ti},
lz:function(a,b,c){return H.b9(a["$as"+H.i(c)],H.aR(b))},
cp:function(a,b,c,d){var z
H.N(c)
H.a3(d)
z=H.b9(a["$as"+H.i(c)],H.aR(b))
return z==null?null:z[d]},
al:function(a,b,c){var z
H.N(b)
H.a3(c)
z=H.b9(a["$as"+H.i(b)],H.aR(a))
return z==null?null:z[c]},
r:function(a,b){var z
H.a3(b)
z=H.aR(a)
return z==null?null:z[b]},
ct:function(a){return H.aQ(a,null)},
aQ:function(a,b){var z,y
H.e(b,"$isb",[P.A],"$asb")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ba(a[0].builtin$cls)+H.df(a,1,b)
if(typeof a=="function")return H.ba(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a3(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.h(b,y)
return H.i(b[y])}if('func' in a)return H.ki(a,b)
if('futureOr' in a)return"FutureOr<"+H.aQ("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ki:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.A]
H.e(b,"$isb",z,"$asb")
if("bounds" in a){y=a.bounds
if(b==null){b=H.d([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.h(b,r)
t=C.j.G(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aQ(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aQ(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aQ(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aQ(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kA(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.N(z[l])
n=n+m+H.aQ(i[h],b)+(" "+H.i(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
df:function(a,b,c){var z,y,x,w,v,u
H.e(c,"$isb",[P.A],"$asb")
if(a==null)return""
z=new P.bS("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aQ(u,c)}return"<"+z.i(0)+">"},
b9:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bF:function(a,b,c,d){var z,y
H.N(b)
H.cr(c)
H.N(d)
if(a==null)return!1
z=H.aR(a)
y=J.M(a)
if(y[b]==null)return!1
return H.fp(H.b9(y[d],z),null,c,null)},
e:function(a,b,c,d){H.N(b)
H.cr(c)
H.N(d)
if(a==null)return a
if(H.bF(a,b,c,d))return a
throw H.j(H.aq(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.ba(b.substring(3))+H.df(c,0,null),init.mangledGlobalNames)))},
fp:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ak(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ak(a[y],b,c[y],d))return!1
return!0},
lw:function(a,b,c){return a.apply(b,H.b9(J.M(b)["$as"+H.i(c)],H.aR(b)))},
fw:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="F"||a===-1||a===-2||H.fw(z)}return!1},
dg:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="a"||b.builtin$cls==="F"||b===-1||b===-2||H.fw(b)
if(b==null||b===-1||b.builtin$cls==="a"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dg(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bU(a,b)}z=J.M(a).constructor
y=H.aR(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.ak(z,null,b,null)},
x:function(a,b){if(a!=null&&!H.dg(a,b))throw H.j(H.aq(a,H.ct(b)))
return a},
ak:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ak(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="F")return!0
if('func' in c)return H.fi(a,b,c,d)
if('func' in a)return c.builtin$cls==="cH"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ak("type" in a?a.type:null,b,x,d)
else if(H.ak(a,b,x,d))return!0
else{if(!('$is'+"bg" in y.prototype))return!1
w=y.prototype["$as"+"bg"]
v=H.b9(w,z?a.slice(1):null)
return H.ak(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fp(H.b9(r,z),b,u,d)},
fi:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.kQ(m,b,l,d)},
kQ:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ak(c[w],d,a[w],b))return!1}return!0},
lx:function(a,b,c){Object.defineProperty(a,H.N(b),{value:c,enumerable:false,writable:true,configurable:true})},
kO:function(a){var z,y,x,w,v,u
z=H.N($.fv.$1(a))
y=$.cm[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cq[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.N($.fo.$2(a,z))
if(z!=null){y=$.cm[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cq[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cs(x)
$.cm[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cq[z]=x
return x}if(v==="-"){u=H.cs(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fy(a,x)
if(v==="*")throw H.j(P.eQ(z))
if(init.leafTags[z]===true){u=H.cs(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fy(a,x)},
fy:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dm(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cs:function(a){return J.dm(a,!1,null,!!a.$isaD)},
kP:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cs(z)
else return J.dm(z,c,null,null)},
kJ:function(){if(!0===$.dk)return
$.dk=!0
H.kK()},
kK:function(){var z,y,x,w,v,u,t,s
$.cm=Object.create(null)
$.cq=Object.create(null)
H.kF()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fA.$1(v)
if(u!=null){t=H.kP(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kF:function(){var z,y,x,w,v,u,t
z=C.I()
z=H.b5(C.F,H.b5(C.K,H.b5(C.t,H.b5(C.t,H.b5(C.J,H.b5(C.G,H.b5(C.H(C.u),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fv=new H.kG(v)
$.fo=new H.kH(u)
$.fA=new H.kI(t)},
b5:function(a,b){return a(b)||b},
fB:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fC:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
ii:{"^":"a;a,b,c,d,e,f,r,0x",m:{
ij:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.c5(z)
y=z[0]
x=z[1]
return new H.ii(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
j2:{"^":"a;a,b,c,d,e,f",
aj:function(a){var z,y,x
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
aA:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.d([],[P.A])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.j2(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cd:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eK:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
i2:{"^":"W;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
m:{
ea:function(a,b){return new H.i2(a,b==null?null:b.method)}}},
hv:{"^":"W;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.i(this.a)+")"},
m:{
cL:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hv(a,y,z?null:b.receiver)}}},
jd:{"^":"W;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
l_:{"^":"t:18;a",
$1:function(a){if(!!J.M(a).$isW)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fe:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaH:1},
t:{"^":"a;",
i:function(a){return"Closure '"+H.aX(this).trim()+"'"},
geC:function(){return this},
$iscH:1,
geC:function(){return this}},
er:{"^":"t;"},
iK:{"^":"er;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.ba(z)+"'"}},
cx:{"^":"er;a,b,c,d",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cx))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gZ:function(a){var z,y
z=this.c
if(z==null)y=H.bq(this.a)
else y=typeof z!=="object"?J.aT(z):H.bq(z)
return(y^H.bq(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.aX(z)+"'")},
m:{
cy:function(a){return a.a},
dv:function(a){return a.c},
bX:function(a){var z,y,x,w,v
z=new H.cx("self","target","receiver","name")
y=J.c5(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
j3:{"^":"W;a",
i:function(a){return this.a},
m:{
aq:function(a,b){return new H.j3("TypeError: "+H.i(P.c1(a))+": type '"+H.fm(a)+"' is not a subtype of type '"+b+"'")}}},
fO:{"^":"W;a",
i:function(a){return this.a},
m:{
fP:function(a,b){return new H.fO("CastError: "+H.i(P.c1(a))+": type '"+H.fm(a)+"' is not a subtype of type '"+b+"'")}}},
is:{"^":"W;a",
i:function(a){return"RuntimeError: "+H.i(this.a)},
m:{
it:function(a){return new H.is(a)}}},
bi:{"^":"hI;a,0b,0c,0d,0e,0f,r,$ti",
gn:function(a){return this.a},
dR:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.dd(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.dd(y,a)}else return this.iW(a)},
iW:function(a){var z=this.d
if(z==null)return!1
return this.cE(this.c1(z,J.aT(a)&0x3ffffff),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bt(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bt(w,b)
x=y==null?null:y.b
return x}else return this.iX(b)},
iX:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.c1(z,J.aT(a)&0x3ffffff)
x=this.cE(y,a)
if(x<0)return
return y[x].b},
aa:function(a,b,c){var z,y,x,w,v,u
H.x(b,H.r(this,0))
H.x(c,H.r(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.c5()
this.b=z}this.d5(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c5()
this.c=y}this.d5(y,b,c)}else{x=this.d
if(x==null){x=this.c5()
this.d=x}w=J.aT(b)&0x3ffffff
v=this.c1(x,w)
if(v==null)this.cd(x,w,[this.c6(b,c)])
else{u=this.cE(v,b)
if(u>=0)v[u].b=c
else v.push(this.c6(b,c))}}},
ai:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.j(P.bd(this))
z=z.c}},
d5:function(a,b,c){var z
H.x(b,H.r(this,0))
H.x(c,H.r(this,1))
z=this.bt(a,b)
if(z==null)this.cd(a,b,this.c6(b,c))
else z.b=c},
c6:function(a,b){var z,y
z=new H.hA(H.x(a,H.r(this,0)),H.x(b,H.r(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.r=this.r+1&67108863
return z},
cE:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.B(a[y].a,b))return y
return-1},
i:function(a){return P.e1(this)},
bt:function(a,b){return a[b]},
c1:function(a,b){return a[b]},
cd:function(a,b,c){a[b]=c},
fv:function(a,b){delete a[b]},
dd:function(a,b){return this.bt(a,b)!=null},
c5:function(){var z=Object.create(null)
this.cd(z,"<non-identifier-key>",z)
this.fv(z,"<non-identifier-key>")
return z},
$isdZ:1},
hA:{"^":"a;a,b,0c,0d"},
hB:{"^":"h9;a,$ti",
gn:function(a){return this.a.a},
gR:function(a){var z,y
z=this.a
y=new H.hC(z,z.r,this.$ti)
y.c=z.e
return y}},
hC:{"^":"a;a,b,0c,0d,$ti",
sd4:function(a){this.d=H.x(a,H.r(this,0))},
gL:function(){return this.d},
B:function(){var z=this.a
if(this.b!==z.r)throw H.j(P.bd(z))
else{z=this.c
if(z==null){this.sd4(null)
return!1}else{this.sd4(z.a)
this.c=this.c.c
return!0}}},
$isaP:1},
kG:{"^":"t:18;a",
$1:function(a){return this.a(a)}},
kH:{"^":"t:37;a",
$2:function(a,b){return this.a(a,b)}},
kI:{"^":"t:35;a",
$1:function(a){return this.a(H.N(a))}},
ht:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isec:1,
m:{
hu:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.j(new P.hj("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
kA:function(a){return J.dU(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kS:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
b3:function(a){return a},
bB:function(a,b,c){if(a>>>0!==a||a>=c)throw H.j(H.bG(b,a))},
kh:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.j(H.kz(a,b,c))
return b},
hY:{"^":"G;",$islm:1,"%":";ArrayBufferView;cR|fa|fb|hX|fc|fd|bm"},
cR:{"^":"hY;",
gn:function(a){return a.length},
$isaD:1,
$asaD:I.di},
hX:{"^":"fb;",
j:function(a,b){H.bB(b,a,a.length)
return a[b]},
$asc3:function(){return[P.q]},
$asO:function(){return[P.q]},
$isk:1,
$ask:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]},
"%":"Float32Array"},
bm:{"^":"fd;",
$asc3:function(){return[P.u]},
$asO:function(){return[P.u]},
$isk:1,
$ask:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}},
lc:{"^":"bm;",
j:function(a,b){H.bB(b,a,a.length)
return a[b]},
"%":"Int16Array"},
ld:{"^":"bm;",
j:function(a,b){H.bB(b,a,a.length)
return a[b]},
"%":"Int32Array"},
le:{"^":"bm;",
j:function(a,b){H.bB(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lf:{"^":"bm;",
gn:function(a){return a.length},
j:function(a,b){H.bB(b,a,a.length)
return a[b]},
$isln:1,
"%":"CanvasPixelArray|Uint8ClampedArray"},
lg:{"^":"bm;",
gn:function(a){return a.length},
j:function(a,b){H.bB(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
fa:{"^":"cR+O;"},
fb:{"^":"fa+c3;"},
fc:{"^":"cR+O;"},
fd:{"^":"fc+c3;"}}],["","",,P,{"^":"",
jz:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kp()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b6(new P.jB(z),1)).observe(y,{childList:true})
return new P.jA(z,y,x)}else if(self.setImmediate!=null)return P.kq()
return P.kr()},
lq:[function(a){self.scheduleImmediate(H.b6(new P.jC(H.l(a,{func:1,ret:-1})),0))},"$1","kp",4,0,9],
lr:[function(a){self.setImmediate(H.b6(new P.jD(H.l(a,{func:1,ret:-1})),0))},"$1","kq",4,0,9],
ls:[function(a){P.cZ(C.n,H.l(a,{func:1,ret:-1}))},"$1","kr",4,0,9],
cZ:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.h.a4(a.a,1000)
return P.k7(z<0?0:z,b)},
eB:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.b_]})
z=C.h.a4(a.a,1000)
return P.k8(z<0?0:z,b)},
kl:function(a,b){if(H.bU(a,{func:1,args:[P.a,P.aH]}))return H.l(a,{func:1,ret:null,args:[P.a,P.aH]})
if(H.bU(a,{func:1,args:[P.a]}))return H.l(a,{func:1,ret:null,args:[P.a]})
throw H.j(P.cv(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kk:function(){var z,y
for(;z=$.b4,z!=null;){$.bD=null
y=z.b
$.b4=y
if(y==null)$.bC=null
z.a.$0()}},
lv:[function(){$.dd=!0
try{P.kk()}finally{$.bD=null
$.dd=!1
if($.b4!=null)$.$get$da().$1(P.fq())}},"$0","fq",0,0,3],
fl:function(a){var z=new P.f4(H.l(a,{func:1,ret:-1}))
if($.b4==null){$.bC=z
$.b4=z
if(!$.dd)$.$get$da().$1(P.fq())}else{$.bC.b=z
$.bC=z}},
ko:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.b4
if(z==null){P.fl(a)
$.bD=$.bC
return}y=new P.f4(a)
x=$.bD
if(x==null){y.b=z
$.bD=y
$.b4=y}else{y.b=x.b
x.b=y
$.bD=y
if(y.b==null)$.bC=y}},
kU:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.I
if(C.k===y){P.cl(null,null,C.k,a)
return}y.toString
P.cl(null,null,y,H.l(y.cn(a),z))},
eA:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.I
if(y===C.k){y.toString
return P.cZ(a,b)}return P.cZ(a,H.l(y.cn(b),z))},
j_:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.b_]}
H.l(b,z)
y=$.I
if(y===C.k){y.toString
return P.eB(a,b)}x=y.dH(b,P.b_)
$.I.toString
return P.eB(a,H.l(x,z))},
ck:function(a,b,c,d,e){var z={}
z.a=d
P.ko(new P.km(z,e))},
fj:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.I
if(y===c)return d.$0()
$.I=c
z=y
try{y=d.$0()
return y}finally{$.I=z}},
fk:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.x(e,g)
y=$.I
if(y===c)return d.$1(e)
$.I=c
z=y
try{y=d.$1(e)
return y}finally{$.I=z}},
kn:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.x(e,h)
H.x(f,i)
y=$.I
if(y===c)return d.$2(e,f)
$.I=c
z=y
try{y=d.$2(e,f)
return y}finally{$.I=z}},
cl:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.k!==c
if(z)d=!(!z||!1)?c.cn(d):c.ix(d,-1)
P.fl(d)},
jB:{"^":"t:17;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jA:{"^":"t:34;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jC:{"^":"t:1;a",
$0:function(){this.a.$0()}},
jD:{"^":"t:1;a",
$0:function(){this.a.$0()}},
ff:{"^":"a;a,0b,c",
fd:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b6(new P.ka(this,b),0),a)
else throw H.j(P.a9("`setTimeout()` not found."))},
fe:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b6(new P.k9(this,a,Date.now(),b),0),a)
else throw H.j(P.a9("Periodic timer."))},
$isb_:1,
m:{
k7:function(a,b){var z=new P.ff(!0,0)
z.fd(a,b)
return z},
k8:function(a,b){var z=new P.ff(!1,0)
z.fe(a,b)
return z}}},
ka:{"^":"t:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
k9:{"^":"t:1;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.eW(w,x)}z.c=y
this.d.$1(z)}},
b2:{"^":"a;0a,b,c,d,e,$ti",
j3:function(a){if(this.c!==6)return!0
return this.b.b.cP(H.l(this.d,{func:1,ret:P.U,args:[P.a]}),a.a,P.U,P.a)},
iV:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.r(this,1)}
w=this.b.b
if(H.bU(z,{func:1,args:[P.a,P.aH]}))return H.dj(w.jr(z,a.a,a.b,null,y,P.aH),x)
else return H.dj(w.cP(H.l(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aL:{"^":"a;dA:a<,b,0hC:c<,$ti",
ev:function(a,b,c){var z,y,x,w
z=H.r(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.I
if(y!==C.k){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kl(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aL(0,$.I,[c])
w=b==null?1:3
this.d6(new P.b2(x,w,a,b,[z,c]))
return x},
jw:function(a,b){return this.ev(a,null,b)},
d6:function(a){var z,y
z=this.a
if(z<=1){a.a=H.f(this.c,"$isb2")
this.c=a}else{if(z===2){y=H.f(this.c,"$isaL")
z=y.a
if(z<4){y.d6(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cl(null,null,z,H.l(new P.jK(this,a),{func:1,ret:-1}))}},
dt:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.f(this.c,"$isb2")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.f(this.c,"$isaL")
y=u.a
if(y<4){u.dt(a)
return}this.a=y
this.c=u.c}z.a=this.bv(a)
y=this.b
y.toString
P.cl(null,null,y,H.l(new P.jP(z,this),{func:1,ret:-1}))}},
c9:function(){var z=H.f(this.c,"$isb2")
this.c=null
return this.bv(z)},
bv:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
d8:function(a){var z,y,x
z=H.r(this,0)
H.dj(a,{futureOr:1,type:z})
y=this.$ti
if(H.bF(a,"$isbg",y,"$asbg"))if(H.bF(a,"$isaL",y,null))P.f6(a,this)
else P.jL(a,this)
else{x=this.c9()
H.x(a,z)
this.a=4
this.c=a
P.bz(this,x)}},
d9:function(a,b){var z
H.f(b,"$isaH")
z=this.c9()
this.a=8
this.c=new P.af(a,b)
P.bz(this,z)},
$isbg:1,
m:{
jL:function(a,b){var z,y,x
b.a=1
try{a.ev(new P.jM(b),new P.jN(b),null)}catch(x){z=H.aS(x)
y=H.b8(x)
P.kU(new P.jO(b,z,y))}},
f6:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.f(a.c,"$isaL")
if(z>=4){y=b.c9()
b.a=a.a
b.c=a.c
P.bz(b,y)}else{y=H.f(b.c,"$isb2")
b.a=2
b.c=a
a.dt(y)}},
bz:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.f(y.c,"$isaf")
y=y.b
u=v.a
t=v.b
y.toString
P.ck(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bz(z.a,b)}y=z.a
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
if(p){H.f(r,"$isaf")
y=y.b
u=r.a
t=r.b
y.toString
P.ck(null,null,y,u,t)
return}o=$.I
if(o==null?q!=null:o!==q)$.I=q
else o=null
y=b.c
if(y===8)new P.jS(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jR(x,b,r).$0()}else if((y&2)!==0)new P.jQ(z,x,b).$0()
if(o!=null)$.I=o
y=x.b
if(!!J.M(y).$isbg){if(y.a>=4){n=H.f(t.c,"$isb2")
t.c=null
b=t.bv(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.f6(y,t)
return}}m=b.b
n=H.f(m.c,"$isb2")
m.c=null
b=m.bv(n)
y=x.a
u=x.b
if(!y){H.x(u,H.r(m,0))
m.a=4
m.c=u}else{H.f(u,"$isaf")
m.a=8
m.c=u}z.a=m
y=m}}}},
jK:{"^":"t:1;a,b",
$0:function(){P.bz(this.a,this.b)}},
jP:{"^":"t:1;a,b",
$0:function(){P.bz(this.b,this.a.a)}},
jM:{"^":"t:17;a",
$1:function(a){var z=this.a
z.a=0
z.d8(a)}},
jN:{"^":"t:33;a",
$2:function(a,b){this.a.d9(a,H.f(b,"$isaH"))},
$1:function(a){return this.$2(a,null)}},
jO:{"^":"t:1;a,b,c",
$0:function(){this.a.d9(this.b,this.c)}},
jS:{"^":"t:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.es(H.l(w.d,{func:1}),null)}catch(v){y=H.aS(v)
x=H.b8(v)
if(this.d){w=H.f(this.a.a.c,"$isaf").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.f(this.a.a.c,"$isaf")
else u.b=new P.af(y,x)
u.a=!0
return}if(!!J.M(z).$isbg){if(z instanceof P.aL&&z.gdA()>=4){if(z.gdA()===8){w=this.b
w.b=H.f(z.ghC(),"$isaf")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.jw(new P.jT(t),null)
w.a=!1}}},
jT:{"^":"t:30;a",
$1:function(a){return this.a}},
jR:{"^":"t:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.r(x,0)
v=H.x(this.c,w)
u=H.r(x,1)
this.a.b=x.b.b.cP(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aS(t)
y=H.b8(t)
x=this.a
x.b=new P.af(z,y)
x.a=!0}}},
jQ:{"^":"t:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.f(this.a.a.c,"$isaf")
w=this.c
if(w.j3(z)&&w.e!=null){v=this.b
v.b=w.iV(z)
v.a=!1}}catch(u){y=H.aS(u)
x=H.b8(u)
w=H.f(this.a.a.c,"$isaf")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.af(y,x)
s.a=!0}}},
f4:{"^":"a;a,0b"},
iL:{"^":"a;$ti",
gn:function(a){var z,y,x,w
z={}
y=new P.aL(0,$.I,[P.u])
z.a=0
x=H.r(this,0)
w=H.l(new P.iN(z,this),{func:1,ret:-1,args:[x]})
H.l(new P.iO(z,y),{func:1,ret:-1})
W.T(this.a,this.b,w,!1,x)
return y}},
iN:{"^":"t;a,b",
$1:function(a){H.x(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.r(this.b,0)]}}},
iO:{"^":"t:1;a,b",
$0:function(){this.b.d8(this.a.a)}},
cW:{"^":"a;$ti"},
iM:{"^":"a;"},
b_:{"^":"a;"},
af:{"^":"a;a,b",
i:function(a){return H.i(this.a)},
$isW:1},
kf:{"^":"a;",$islp:1},
km:{"^":"t:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eb()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.j(z)
x=H.j(z)
x.stack=y.i(0)
throw x}},
k3:{"^":"kf;",
js:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.k===$.I){a.$0()
return}P.fj(null,null,this,a,-1)}catch(x){z=H.aS(x)
y=H.b8(x)
P.ck(null,null,this,z,H.f(y,"$isaH"))}},
jt:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.k===$.I){a.$1(b)
return}P.fk(null,null,this,a,b,-1,c)}catch(x){z=H.aS(x)
y=H.b8(x)
P.ck(null,null,this,z,H.f(y,"$isaH"))}},
ix:function(a,b){return new P.k5(this,H.l(a,{func:1,ret:b}),b)},
cn:function(a){return new P.k4(this,H.l(a,{func:1,ret:-1}))},
dH:function(a,b){return new P.k6(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
es:function(a,b){H.l(a,{func:1,ret:b})
if($.I===C.k)return a.$0()
return P.fj(null,null,this,a,b)},
cP:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.I===C.k)return a.$1(b)
return P.fk(null,null,this,a,b,c,d)},
jr:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.I===C.k)return a.$2(b,c)
return P.kn(null,null,this,a,b,c,d,e,f)}},
k5:{"^":"t;a,b,c",
$0:function(){return this.a.es(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
k4:{"^":"t:3;a,b",
$0:function(){return this.a.js(this.b)}},
k6:{"^":"t;a,b,c",
$1:function(a){var z=this.c
return this.a.jt(this.b,H.x(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hD:function(a,b,c){H.cr(a)
return H.e(H.kB(a,new H.bi(0,0,[b,c])),"$isdZ",[b,c],"$asdZ")},
hE:function(a,b,c,d){return new P.jY(0,0,[d])},
hq:function(a,b,c){var z,y
if(P.de(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bE()
C.a.h(y,a)
try{P.kj(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.eq(b,H.kN(z,"$isk"),", ")+c
return y.charCodeAt(0)==0?y:y},
cI:function(a,b,c){var z,y,x
if(P.de(a))return b+"..."+c
z=new P.bS(b)
y=$.$get$bE()
C.a.h(y,a)
try{x=z
x.a=P.eq(x.gaM(),a,", ")}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.a=y.gaM()+c
y=z.gaM()
return y.charCodeAt(0)==0?y:y},
de:function(a){var z,y
for(z=0;y=$.$get$bE(),z<y.length;++z)if(a===y[z])return!0
return!1},
kj:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gR(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.B())return
w=H.i(z.gL())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.B()){if(x<=5)return
if(0>=b.length)return H.h(b,-1)
v=b.pop()
if(0>=b.length)return H.h(b,-1)
u=b.pop()}else{t=z.gL();++x
if(!z.B()){if(x<=4){C.a.h(b,H.i(t))
return}v=H.i(t)
if(0>=b.length)return H.h(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gL();++x
for(;z.B();t=s,s=r){r=z.gL();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.i(t)
v=H.i(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
e1:function(a){var z,y,x
z={}
if(P.de(a))return"{...}"
y=new P.bS("")
try{C.a.h($.$get$bE(),a)
x=y
x.a=x.gaM()+"{"
z.a=!0
a.ai(0,new P.hJ(z,y))
z=y
z.a=z.gaM()+"}"}finally{z=$.$get$bE()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.gaM()
return z.charCodeAt(0)==0?z:z},
jY:{"^":"jU;a,0b,0c,0d,0e,0f,r,$ti",
gR:function(a){return P.f8(this,this.r,H.r(this,0))},
gn:function(a){return this.a},
h:function(a,b){var z
H.x(b,H.r(this,0))
if(typeof b==="number"&&(b&0x3ffffff)===b){z=this.c
if(z==null){z=P.f9()
this.c=z}return this.fq(z,b)}else return this.ff(b)},
ff:function(a){var z,y,x
H.x(a,H.r(this,0))
z=this.d
if(z==null){z=P.f9()
this.d=z}y=this.da(a)
x=z[y]
if(x==null)z[y]=[this.bY(a)]
else{if(this.dh(x,a)>=0)return!1
x.push(this.bY(a))}return!0},
F:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.hv(this.c,b)
else return this.hu(b)},
hu:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.fK(z,a)
x=this.dh(y,a)
if(x<0)return!1
this.dC(y.splice(x,1)[0])
return!0},
fq:function(a,b){H.x(b,H.r(this,0))
if(H.f(a[b],"$isdb")!=null)return!1
a[b]=this.bY(b)
return!0},
hv:function(a,b){var z
if(a==null)return!1
z=H.f(a[b],"$isdb")
if(z==null)return!1
this.dC(z)
delete a[b]
return!0},
dk:function(){this.r=this.r+1&67108863},
bY:function(a){var z,y
z=new P.db(H.x(a,H.r(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dk()
return z},
dC:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dk()},
da:function(a){return J.aT(a)&0x3ffffff},
fK:function(a,b){return a[this.da(b)]},
dh:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(a[y].a==b)return y
return-1},
m:{
f9:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
db:{"^":"a;a,0b,0c"},
jZ:{"^":"a;a,b,0c,0d,$ti",
sd7:function(a){this.d=H.x(a,H.r(this,0))},
gL:function(){return this.d},
B:function(){var z=this.a
if(this.b!==z.r)throw H.j(P.bd(z))
else{z=this.c
if(z==null){this.sd7(null)
return!1}else{this.sd7(H.x(z.a,H.r(this,0)))
this.c=this.c.b
return!0}}},
$isaP:1,
m:{
f8:function(a,b,c){var z=new P.jZ(a,b,[c])
z.c=a.e
return z}}},
jU:{"^":"iu;"},
c7:{"^":"k_;",$isk:1,$isb:1},
O:{"^":"a;$ti",
gR:function(a){return new H.e_(a,this.gn(a),0,[H.cp(this,a,"O",0)])},
ah:function(a,b){return this.j(a,b)},
jz:function(a,b){var z,y
z=H.d([],[H.cp(this,a,"O",0)])
C.a.sn(z,this.gn(a))
for(y=0;y<this.gn(a);++y)C.a.aa(z,y,this.j(a,y))
return z},
jy:function(a){return this.jz(a,!0)},
i:function(a){return P.cI(a,"[","]")}},
hI:{"^":"hK;"},
hJ:{"^":"t:14;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.i(a)
z.a=y+": "
z.a+=H.i(b)}},
hK:{"^":"a;$ti",
gn:function(a){return this.a},
i:function(a){return P.e1(this)},
$isav:1},
iw:{"^":"a;$ti",
i:function(a){return P.cI(this,"{","}")},
ah:function(a,b){var z,y,x
if(b<0)H.o(P.ag(b,0,null,"index",null))
for(z=P.f8(this,this.r,H.r(this,0)),y=0;z.B();){x=z.d
if(b===y)return x;++y}throw H.j(P.bh(b,this,"index",null,y))},
$isk:1,
$isel:1},
iu:{"^":"iw;"},
k_:{"^":"a+O;"}}],["","",,P,{"^":"",cC:{"^":"a;$ti"},dD:{"^":"iM;$ti"},hb:{"^":"cC;",
$ascC:function(){return[P.A,[P.b,P.u]]}},jj:{"^":"hb;a"},jk:{"^":"dD;",
iD:function(a,b,c){var z,y,x,w
z=a.length
P.ek(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.ke(0,0,x)
if(w.fI(a,b,z)!==z)w.dD(C.j.cr(a,z-1),0)
return new Uint8Array(x.subarray(0,H.kh(0,w.b,x.length)))},
iC:function(a){return this.iD(a,0,null)},
$asdD:function(){return[P.A,[P.b,P.u]]}},ke:{"^":"a;a,b,c",
dD:function(a,b){var z,y,x,w,v
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
fI:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.j.cr(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.j.bs(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dD(w,C.j.bs(a,u)))x=u}else if(w<=2047){v=this.b
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
hd:function(a){if(a instanceof H.t)return a.i(0)
return"Instance of '"+H.aX(a)+"'"},
hF:function(a,b,c,d){var z,y
H.x(b,d)
z=J.hr(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.aa(z,y,b)
return H.e(z,"$isb",[d],"$asb")},
hG:function(a,b,c){var z,y,x
z=[c]
y=H.d([],z)
for(x=a.gR(a);x.B();)C.a.h(y,H.x(x.gL(),c))
if(b)return y
return H.e(J.c5(y),"$isb",z,"$asb")},
cX:function(a,b,c){var z,y
z=P.u
H.e(a,"$isk",[z],"$ask")
if(a.constructor===Array){H.e(a,"$isaU",[z],"$asaU")
y=a.length
c=P.ek(b,c,y,null,null,null)
return H.ej(b>0||c<y?C.a.eR(a,b,c):a)}return P.iP(a,b,c)},
iP:function(a,b,c){var z,y,x
H.e(a,"$isk",[P.u],"$ask")
z=J.bW(a)
for(y=0;y<b;++y)if(!z.B())throw H.j(P.ag(b,0,y,null,null))
x=[]
for(;z.B();)x.push(z.gL())
return H.ej(x)},
ik:function(a,b,c){return new H.ht(a,H.hu(a,!1,!0,!1))},
kd:function(a,b,c,d){var z,y,x,w,v,u
H.e(a,"$isb",[P.u],"$asb")
if(c===C.w){z=$.$get$fh().b
z=z.test(b)}else z=!1
if(z)return b
y=C.A.iC(H.x(b,H.al(c,"cC",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.h(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.ie(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
c1:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ae(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hd(a)},
n:function(a){return new P.f5(a)},
dn:function(a){H.kS(a)},
U:{"^":"a;"},
"+bool":0,
an:{"^":"a;a,b",
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.an))return!1
return this.a===b.a&&!0},
gZ:function(a){var z=this.a
return(z^C.h.bw(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.h_(H.id(this))
y=P.bJ(H.ib(this))
x=P.bJ(H.i7(this))
w=P.bJ(H.i8(this))
v=P.bJ(H.ia(this))
u=P.bJ(H.ic(this))
t=P.h0(H.i9(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
m:{
h_:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
h0:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bJ:function(a){if(a>=10)return""+a
return"0"+a}}},
q:{"^":"ad;"},
"+double":0,
be:{"^":"a;a",
aA:function(a,b){return C.h.aA(this.a,H.f(b,"$isbe").a)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof P.be))return!1
return this.a===b.a},
gZ:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.h8()
y=this.a
if(y<0)return"-"+new P.be(0-y).i(0)
x=z.$1(C.h.a4(y,6e7)%60)
w=z.$1(C.h.a4(y,1e6)%60)
v=new P.h7().$1(y%1e6)
return""+C.h.a4(y,36e8)+":"+H.i(x)+":"+H.i(w)+"."+H.i(v)},
m:{
dN:function(a,b,c,d,e,f){return new P.be(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
h7:{"^":"t:15;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
h8:{"^":"t:15;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
W:{"^":"a;"},
eb:{"^":"W;",
i:function(a){return"Throw of null."}},
aN:{"^":"W;a,b,c,d",
gc_:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbZ:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.i(z)
w=this.gc_()+y+x
if(!this.a)return w
v=this.gbZ()
u=P.c1(this.b)
return w+v+": "+H.i(u)},
m:{
fJ:function(a){return new P.aN(!1,null,null,a)},
cv:function(a,b,c){return new P.aN(!0,a,b,c)}}},
ca:{"^":"aN;e,f,a,b,c,d",
gc_:function(){return"RangeError"},
gbZ:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.i(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.i(z)
else if(x>z)y=": Not in range "+H.i(z)+".."+H.i(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.i(z)}return y},
m:{
bR:function(a,b,c){return new P.ca(null,null,!0,a,b,"Value not in range")},
ag:function(a,b,c,d,e){return new P.ca(b,c,!0,a,d,"Invalid value")},
ek:function(a,b,c,d,e,f){if(0>a||a>c)throw H.j(P.ag(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.j(P.ag(b,a,c,"end",f))
return b}return c}}},
hp:{"^":"aN;e,n:f>,a,b,c,d",
gc_:function(){return"RangeError"},
gbZ:function(){if(J.fF(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.i(z)},
m:{
bh:function(a,b,c,d,e){var z=H.a3(e!=null?e:J.bI(b))
return new P.hp(b,z,!0,a,c,"Index out of range")}}},
jf:{"^":"W;a",
i:function(a){return"Unsupported operation: "+this.a},
m:{
a9:function(a){return new P.jf(a)}}},
jc:{"^":"W;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
m:{
eQ:function(a){return new P.jc(a)}}},
iJ:{"^":"W;a",
i:function(a){return"Bad state: "+this.a}},
fW:{"^":"W;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.i(P.c1(z))+"."},
m:{
bd:function(a){return new P.fW(a)}}},
i3:{"^":"a;",
i:function(a){return"Out of Memory"},
$isW:1},
ep:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isW:1},
fZ:{"^":"W;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
f5:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
hj:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.j.cZ(x,0,75)+"..."
return y+"\n"+x}},
u:{"^":"ad;"},
"+int":0,
k:{"^":"a;$ti",
gn:function(a){var z,y
z=this.gR(this)
for(y=0;z.B();)++y
return y},
ah:function(a,b){var z,y,x
if(b<0)H.o(P.ag(b,0,null,"index",null))
for(z=this.gR(this),y=0;z.B();){x=z.gL()
if(b===y)return x;++y}throw H.j(P.bh(b,this,"index",null,y))},
i:function(a){return P.hq(this,"(",")")}},
aP:{"^":"a;$ti"},
b:{"^":"a;$ti",$isk:1},
"+List":0,
F:{"^":"a;",
gZ:function(a){return P.a.prototype.gZ.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
ad:{"^":"a;"},
"+num":0,
a:{"^":";",
q:function(a,b){return this===b},
gZ:function(a){return H.bq(this)},
i:function(a){return"Instance of '"+H.aX(this)+"'"},
toString:function(){return this.i(this)}},
aH:{"^":"a;"},
A:{"^":"a;",$isec:1},
"+String":0,
bS:{"^":"a;aM:a<",
gn:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
m:{
eq:function(a,b,c){var z=J.bW(b)
if(!z.B())return a
if(c.length===0){do a+=H.i(z.gL())
while(z.B())}else{a+=H.i(z.gL())
for(;z.B();)a=a+c+H.i(z.gL())}return a}}}}],["","",,W,{"^":"",
cA:function(a,b){var z=document.createElement("canvas")
return z},
ha:function(a){H.f(a,"$isc2")
return"wheel"},
ch:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
f7:function(a,b,c,d){var z,y
z=W.ch(W.ch(W.ch(W.ch(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fn:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.I
if(z===C.k)return a
return z.dH(a,b)},
aC:{"^":"a_;","%":"HTMLBRElement|HTMLBaseElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
l1:{"^":"aC;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
l2:{"^":"aC;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
fM:{"^":"aC;","%":"HTMLBodyElement"},
cz:{"^":"aC;",
bT:function(a,b,c){if(c!=null)return this.fL(a,b,P.kt(c,null))
return this.fM(a,b)},
eG:function(a,b){return this.bT(a,b,null)},
fL:function(a,b,c){return a.getContext(b,c)},
fM:function(a,b){return a.getContext(b)},
$iscz:1,
$isdy:1,
"%":"HTMLCanvasElement"},
cB:{"^":"G;",
fN:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
iN:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$iscB:1,
"%":"CanvasRenderingContext2D"},
l5:{"^":"K;0n:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
l7:{"^":"jG;0n:length=",
eJ:function(a,b){var z=this.fO(a,this.fl(a,b))
return z==null?"":z},
fl:function(a,b){var z,y
z=$.$get$dE()
y=z[b]
if(typeof y==="string")return y
y=this.hP(a,b)
z[b]=y
return y},
hP:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.h1()+b
if(z in a)return z
return b},
fO:function(a,b){return a.getPropertyValue(b)},
gco:function(a){return a.bottom},
gau:function(a){return a.height},
gaW:function(a){return a.left},
gbj:function(a){return a.right},
gbm:function(a){return a.top},
gaz:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fY:{"^":"a;",
gaW:function(a){return this.eJ(a,"left")}},
dM:{"^":"aC;",$isdM:1,"%":"HTMLDivElement"},
h5:{"^":"K;",
eH:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
l8:{"^":"G;",
i:function(a){return String(a)},
"%":"DOMException"},
h6:{"^":"G;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
q:function(a,b){var z
if(b==null)return!1
if(!H.bF(b,"$isaG",[P.ad],"$asaG"))return!1
z=J.bV(b)
return a.left===z.gaW(b)&&a.top===z.gbm(b)&&a.width===z.gaz(b)&&a.height===z.gau(b)},
gZ:function(a){return W.f7(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gco:function(a){return a.bottom},
gau:function(a){return a.height},
gaW:function(a){return a.left},
gbj:function(a){return a.right},
gbm:function(a){return a.top},
gaz:function(a){return a.width},
$isaG:1,
$asaG:function(){return[P.ad]},
"%":";DOMRectReadOnly"},
jF:{"^":"c7;a,b",
gn:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.h(z,b)
return H.f(z[b],"$isa_")},
h:function(a,b){J.dq(this.a,b)
return b},
gR:function(a){var z=this.jy(this)
return new J.am(z,z.length,0,[H.r(z,0)])},
$asO:function(){return[W.a_]},
$ask:function(){return[W.a_]},
$asb:function(){return[W.a_]}},
a_:{"^":"K;",
gdL:function(a){return new W.jF(a,a.children)},
gdP:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.aA()
if(x<0)x=-x*0
if(typeof w!=="number")return w.aA()
if(w<0)w=-w*0
return new P.aG(z,y,x,w,[P.ad])},
i:function(a){return a.localName},
$isa_:1,
"%":";Element"},
a4:{"^":"G;",$isa4:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
c2:{"^":"G;",
fg:function(a,b,c,d){return a.addEventListener(b,H.b6(H.l(c,{func:1,args:[W.a4]}),1),!1)},
$isc2:1,
"%":";EventTarget"},
l9:{"^":"aC;0n:length=","%":"HTMLFormElement"},
hm:{"^":"jW;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bh(b,a,null,null,null))
return a[b]},
ah:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isaD:1,
$asaD:function(){return[W.K]},
$asO:function(){return[W.K]},
$isk:1,
$ask:function(){return[W.K]},
$isb:1,
$asb:function(){return[W.K]},
$ishm:1,
$asaO:function(){return[W.K]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hn:{"^":"h5;","%":"HTMLDocument"},
c4:{"^":"G;0dT:data=",$isc4:1,"%":"ImageData"},
dS:{"^":"aC;",$isdS:1,$isdy:1,"%":"HTMLImageElement"},
bj:{"^":"d1;",$isbj:1,"%":"KeyboardEvent"},
hV:{"^":"aC;","%":"HTMLAudioElement;HTMLMediaElement"},
ap:{"^":"d1;",$isap:1,"%":"PointerEvent;DragEvent|MouseEvent"},
jE:{"^":"c7;a",
gR:function(a){var z=this.a.childNodes
return new W.dP(z,z.length,-1,[H.cp(C.N,z,"aO",0)])},
gn:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.h(z,b)
return z[b]},
$asO:function(){return[W.K]},
$ask:function(){return[W.K]},
$asb:function(){return[W.K]}},
K:{"^":"c2;",
i:function(a){var z=a.nodeValue
return z==null?this.eS(a):z},
a5:function(a,b){return a.appendChild(b)},
$isK:1,
"%":"Attr|DocumentFragment|DocumentType|ShadowRoot;Node"},
hZ:{"^":"k1;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bh(b,a,null,null,null))
return a[b]},
ah:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isaD:1,
$asaD:function(){return[W.K]},
$asO:function(){return[W.K]},
$isk:1,
$ask:function(){return[W.K]},
$isb:1,
$asb:function(){return[W.K]},
$asaO:function(){return[W.K]},
"%":"NodeList|RadioNodeList"},
lh:{"^":"aC;0n:length=","%":"HTMLSelectElement"},
bt:{"^":"G;",$isbt:1,"%":"Touch"},
b0:{"^":"d1;",$isb0:1,"%":"TouchEvent"},
ll:{"^":"kc;",
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.bh(b,a,null,null,null))
return a[b]},
ah:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isaD:1,
$asaD:function(){return[W.bt]},
$asO:function(){return[W.bt]},
$isk:1,
$ask:function(){return[W.bt]},
$isb:1,
$asb:function(){return[W.bt]},
$asaO:function(){return[W.bt]},
"%":"TouchList"},
d1:{"^":"a4;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
lo:{"^":"hV;",$isdy:1,"%":"HTMLVideoElement"},
by:{"^":"ap;",
giK:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.j(P.a9("deltaY is not supported"))},
giJ:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.j(P.a9("deltaX is not supported"))},
$isby:1,
"%":"WheelEvent"},
jy:{"^":"c2;",
hy:function(a,b){return a.requestAnimationFrame(H.b6(H.l(b,{func:1,ret:-1,args:[P.ad]}),1))},
fB:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
lt:{"^":"h6;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
q:function(a,b){var z
if(b==null)return!1
if(!H.bF(b,"$isaG",[P.ad],"$asaG"))return!1
z=J.bV(b)
return a.left===z.gaW(b)&&a.top===z.gbm(b)&&a.width===z.gaz(b)&&a.height===z.gau(b)},
gZ:function(a){return W.f7(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gau:function(a){return a.height},
gaz:function(a){return a.width},
"%":"ClientRect|DOMRect"},
jH:{"^":"iL;a,b,c,$ti"},
lu:{"^":"jH;a,b,c,$ti"},
jI:{"^":"cW;a,b,c,d,e,$ti",m:{
T:function(a,b,c,d,e){var z,y
z=W.fn(new W.jJ(c),W.a4)
y=z!=null
if(y&&!0){H.l(z,{func:1,args:[W.a4]})
if(y)J.fH(a,b,z,!1)}return new W.jI(0,a,b,z,!1,[e])}}},
jJ:{"^":"t:29;a",
$1:function(a){return this.a.$1(H.f(a,"$isa4"))}},
aO:{"^":"a;$ti",
gR:function(a){return new W.dP(a,this.gn(a),-1,[H.cp(this,a,"aO",0)])}},
dP:{"^":"a;a,b,c,0d,$ti",
sdg:function(a){this.d=H.x(a,H.r(this,0))},
B:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sdg(J.fG(this.a,z))
this.c=z
return!0}this.sdg(null)
this.c=y
return!1},
gL:function(){return this.d},
$isaP:1},
jG:{"^":"G+fY;"},
jV:{"^":"G+O;"},
jW:{"^":"jV+aO;"},
k0:{"^":"G+O;"},
k1:{"^":"k0+aO;"},
kb:{"^":"G+O;"},
kc:{"^":"kb+aO;"}}],["","",,P,{"^":"",
kw:function(a){var z,y
z=J.M(a)
if(!!z.$isc4){y=z.gdT(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fg(a.data,a.height,a.width)},
kv:function(a){if(a instanceof P.fg)return{data:a.a,height:a.b,width:a.c}
return a},
kt:function(a,b){var z={}
a.ai(0,new P.ku(z))
return z},
dK:function(){var z=$.dJ
if(z==null){z=J.cu(window.navigator.userAgent,"Opera",0)
$.dJ=z}return z},
h1:function(){var z,y
z=$.dG
if(z!=null)return z
y=$.dH
if(y==null){y=J.cu(window.navigator.userAgent,"Firefox",0)
$.dH=y}if(y)z="-moz-"
else{y=$.dI
if(y==null){y=!P.dK()&&J.cu(window.navigator.userAgent,"Trident/",0)
$.dI=y}if(y)z="-ms-"
else z=P.dK()?"-o-":"-webkit-"}$.dG=z
return z},
fg:{"^":"a;dT:a>,b,c",$isc4:1},
ku:{"^":"t:14;a",
$2:function(a,b){this.a[a]=b}},
hg:{"^":"c7;a,b",
gc2:function(){var z,y,x
z=this.b
y=H.al(z,"O",0)
x=W.a_
return new H.hL(new H.jw(z,H.l(new P.hh(),{func:1,ret:P.U,args:[y]}),[y]),H.l(new P.hi(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){J.dq(this.b.a,b)},
gn:function(a){return J.bI(this.gc2().a)},
j:function(a,b){var z=this.gc2()
return z.b.$1(J.dr(z.a,b))},
gR:function(a){var z=P.hG(this.gc2(),!1,W.a_)
return new J.am(z,z.length,0,[H.r(z,0)])},
$asO:function(){return[W.a_]},
$ask:function(){return[W.a_]},
$asb:function(){return[W.a_]}},
hh:{"^":"t:28;",
$1:function(a){return!!J.M(H.f(a,"$isK")).$isa_}},
hi:{"^":"t:32;",
$1:function(a){return H.c(H.f(a,"$isK"),"$isa_")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
ci:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jX:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
k2:{"^":"a;$ti",
gbj:function(a){var z=this.a
if(typeof z!=="number")return z.G()
return H.x(z+this.c,H.r(this,0))},
gco:function(a){var z=this.b
if(typeof z!=="number")return z.G()
return H.x(z+this.d,H.r(this,0))},
i:function(a){return"Rectangle ("+H.i(this.a)+", "+H.i(this.b)+") "+this.c+" x "+this.d},
q:function(a,b){var z,y,x,w
if(b==null)return!1
if(!H.bF(b,"$isaG",[P.ad],"$asaG"))return!1
z=this.a
y=J.bV(b)
x=y.gaW(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbm(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.G()
w=H.r(this,0)
if(H.x(z+this.c,w)===y.gbj(b)){if(typeof x!=="number")return x.G()
z=H.x(x+this.d,w)===y.gco(b)}else z=!1}else z=!1}else z=!1
return z},
gZ:function(a){var z,y,x,w,v
z=this.a
y=J.aT(z)
x=this.b
w=J.aT(x)
if(typeof z!=="number")return z.G()
v=H.r(this,0)
z=H.x(z+this.c,v)
if(typeof x!=="number")return x.G()
v=H.x(x+this.d,v)
return P.jX(P.ci(P.ci(P.ci(P.ci(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
aG:{"^":"k2;aW:a>,bm:b>,az:c>,au:d>,$ti"}}],["","",,P,{"^":"",lj:{"^":"a_;",
gdL:function(a){return new P.hg(a,new W.jE(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"}}],["","",,P,{"^":""}],["","",,P,{"^":"",fN:{"^":"G;",$isfN:1,"%":"WebGLBuffer"},hk:{"^":"G;",$ishk:1,"%":"WebGLFramebuffer"},ih:{"^":"G;",$isih:1,"%":"WebGLProgram"},ir:{"^":"G;",$isir:1,"%":"WebGLRenderbuffer"},cT:{"^":"G;",
aQ:function(a,b){return a.activeTexture(b)},
dF:function(a,b,c){return a.attachShader(b,c)},
aq:function(a,b,c){return a.bindBuffer(b,c)},
b4:function(a,b,c){return a.bindFramebuffer(b,c)},
dG:function(a,b,c){return a.bindRenderbuffer(b,c)},
a6:function(a,b,c){return a.bindTexture(b,c)},
iy:function(a,b,c){return a.blendFunc(b,c)},
dI:function(a,b,c,d){return a.bufferData(b,c,d)},
dM:function(a,b){return a.clear(b)},
dN:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
dO:function(a,b){return a.clearDepth(b)},
iA:function(a,b){return a.compileShader(b)},
iF:function(a,b){return a.createShader(b)},
iH:function(a,b){return a.deleteProgram(b)},
iI:function(a,b){return a.deleteShader(b)},
dU:function(a,b){return a.depthFunc(b)},
iL:function(a,b){return a.disable(b)},
dV:function(a,b){return a.disableVertexAttribArray(b)},
iM:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
ba:function(a,b){return a.enable(b)},
dW:function(a,b){return a.enableVertexAttribArray(b)},
iT:function(a,b,c,d,e){return a.framebufferRenderbuffer(b,c,d,e)},
iU:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
eD:function(a,b,c){return a.getActiveAttrib(b,c)},
eE:function(a,b,c){return a.getActiveUniform(b,c)},
eF:function(a,b,c){return a.getAttribLocation(b,c)},
bU:function(a,b){return a.getParameter(b)},
eI:function(a,b){return a.getProgramInfoLog(b)},
bV:function(a,b,c){return a.getProgramParameter(b,c)},
eK:function(a,b){return a.getShaderInfoLog(b)},
eL:function(a,b,c){return a.getShaderParameter(b,c)},
eM:function(a,b,c){return a.getUniformLocation(b,c)},
j_:function(a,b){return a.linkProgram(b)},
ji:function(a,b,c){return a.pixelStorei(b,c)},
jn:function(a,b,c,d,e){return a.renderbufferStorage(b,c,d,e)},
eQ:function(a,b,c){return a.shaderSource(b,c)},
eu:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=i==null
if(!z&&h!=null&&typeof g==="number"&&Math.floor(g)===g){this.hR(a,b,c,d,e,f,g,h,i,j)
return}y=J.M(g)
if(!!y.$isc4&&h==null&&z&&!0){this.hS(a,b,c,d,e,f,P.kv(g))
return}if(!!y.$isdS&&h==null&&z&&!0){this.hT(a,b,c,d,e,f,g)
return}throw H.j(P.fJ("Incorrect number or type of arguments"))},
ju:function(a,b,c,d,e,f,g){return this.eu(a,b,c,d,e,f,g,null,null,null)},
hR:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
hS:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
hT:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ay:function(a,b,c,d){return a.texParameteri(b,c,d)},
J:function(a,b,c){return a.uniform1f(b,c)},
C:function(a,b,c){return a.uniform1i(b,c)},
bS:function(a,b,c,d){return a.uniform2f(b,c,d)},
p:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
jB:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
ex:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cR:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
aY:function(a,b){return a.useProgram(b)},
jD:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
ez:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$iscT:1,
"%":"WebGLRenderingContext"},ix:{"^":"G;",$isix:1,"%":"WebGLShader"},iQ:{"^":"G;",$isiQ:1,"%":"WebGLTexture"},ja:{"^":"G;",$isja:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",J:{"^":"a;0a,0b,0c,0d,$ti",
sfT:function(a){this.a=H.e(a,"$isb",[H.al(this,"J",0)],"$asb")},
sdr:function(a){this.b=H.l(a,{func:1,ret:P.U,args:[[P.k,H.al(this,"J",0)]]})},
sdm:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.u,[P.k,H.al(this,"J",0)]]})},
sds:function(a){this.d=H.l(a,{func:1,ret:-1,args:[P.u,[P.k,H.al(this,"J",0)]]})},
bq:function(a){this.sfT(H.d([],[a]))
this.sdr(null)
this.sdm(null)
this.sds(null)},
cV:function(a,b,c){var z=H.al(this,"J",0)
H.l(b,{func:1,ret:P.U,args:[[P.k,z]]})
z={func:1,ret:-1,args:[P.u,[P.k,z]]}
H.l(a,z)
H.l(c,z)
this.sdr(b)
this.sdm(a)
this.sds(c)},
aI:function(a,b){return this.cV(a,null,b)},
dq:function(a){var z
H.e(a,"$isk",[H.al(this,"J",0)],"$ask")
z=this.b
if(z!=null)return z.$1(a)
return!0},
dl:function(a,b){var z
H.e(b,"$isk",[H.al(this,"J",0)],"$ask")
z=this.c
if(z!=null)z.$2(a,b)},
gn:function(a){return this.a.length},
gR:function(a){var z=this.a
return new J.am(z,z.length,0,[H.r(z,0)])},
ah:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.h(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.al(this,"J",0)
H.x(b,z)
z=[z]
if(this.dq(H.d([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dl(x,H.d([b],z))}},
ci:function(a,b){var z,y
H.e(b,"$isk",[H.al(this,"J",0)],"$ask")
if(this.dq(b)){z=this.a
y=z.length
C.a.ci(z,b)
this.dl(y,b)}},
$isk:1,
m:{
bZ:function(a){var z=new O.J([a])
z.bq(a)
return z}}},cP:{"^":"a;0a,0b",
sc3:function(a){this.a=H.e(a,"$isb",[V.a5],"$asb")},
gn:function(a){return this.a.length},
gl:function(){var z=this.b
if(z==null){z=D.z()
this.b=z}return z},
f1:function(a){var z=this.b
if(!(z==null))z.w(a)},
aJ:function(){return this.f1(null)},
gV:function(){var z=this.a
if(z.length>0)return C.a.gcG(z)
else return V.aw()},
bQ:function(a){var z=this.a
if(a==null)C.a.h(z,V.aw())
else C.a.h(z,a)
this.aJ()},
aG:function(){var z=this.a
if(z.length>0){z.pop()
this.aJ()}}}}],["","",,E,{"^":"",cw:{"^":"a;"},ao:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0al:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sf2:function(a,b){this.y=H.e(b,"$isJ",[E.ao],"$asJ")},
sal:function(a){this.z=H.f(a,"$isab")},
sbp:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gl().F(0,this.ger())
y=this.c
if(y!=null)y.gl().h(0,this.ger())
x=new D.w("shape",z,this.c,this,[F.em])
x.b=!0
this.ao(x)}},
sbe:function(a){var z,y
if(!J.B(this.r,a)){z=this.r
if(z!=null)z.gl().F(0,this.geq())
if(a!=null)a.gl().h(0,this.geq())
this.r=a
y=new D.w("mover",z,a,this,[U.a7])
y.b=!0
this.ao(y)}},
a9:function(a){var z,y,x,w
z=this.r
y=z!=null?z.aX(a,this):null
if(!J.B(y,this.x)){x=this.x
this.x=y
w=new D.w("matrix",x,y,this,[V.a5])
w.b=!0
this.ao(w)}for(z=this.y.a,z=new J.am(z,z.length,0,[H.r(z,0)]);z.B();)z.d.a9(a)},
a7:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gV())
else C.a.h(z.a,y.u(0,z.gV()))
z.aJ()
a.cM(this.f)
z=a.dy
x=(z&&C.a).gcG(z)
if(x!=null&&this.d!=null)x.bi(a,this)
for(z=this.y.a,z=new J.am(z,z.length,0,[H.r(z,0)]);z.B();)z.d.a7(a)
a.cK()
a.dx.aG()},
gl:function(){var z=this.z
if(z==null){z=D.z()
this.z=z}return z},
ao:function(a){var z=this.z
if(!(z==null))z.w(a)},
a1:function(){return this.ao(null)},
j9:[function(a){H.f(a,"$isp")
this.e=null
this.ao(a)},function(){return this.j9(null)},"kt","$1","$0","ger",0,2,0],
j8:[function(a){this.ao(H.f(a,"$isp"))},function(){return this.j8(null)},"ks","$1","$0","geq",0,2,0],
j6:[function(a){this.ao(H.f(a,"$isp"))},function(){return this.j6(null)},"kq","$1","$0","gep",0,2,0],
kp:[function(a,b){var z,y,x,w,v,u,t
H.e(b,"$isk",[E.ao],"$ask")
for(z=b.length,y=this.gep(),x={func:1,ret:-1,args:[D.p]},w=[x],v=0;v<b.length;b.length===z||(0,H.v)(b),++v){u=b[v]
if(u!=null){if(u.gal()==null){t=new D.ab()
t.sab(null)
t.sb1(null)
t.c=null
t.d=0
u.sal(t)}t=u.gal()
t.toString
H.l(y,x)
if(t.a==null)t.sab(H.d([],w))
t=t.a;(t&&C.a).h(t,y)}}this.a1()},"$2","gj5",8,0,6],
kr:[function(a,b){var z,y
H.e(b,"$isk",[E.ao],"$ask")
for(z=b.gR(b),y=this.gep();z.B();)z.gL().gl().F(0,y)
this.a1()},"$2","gj7",8,0,6],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isay:1,
m:{
cF:function(a,b,c,d,e,f){var z=new E.ao()
z.a=d
z.b=!0
z.sf2(0,O.bZ(E.ao))
z.y.aI(z.gj5(),z.gj7())
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
z.sbp(0,e)
z.sbe(c)
return z}}},il:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
shQ:function(a){this.dy=H.e(a,"$isb",[O.aI],"$asb")},
shJ:function(a){this.fr=H.e(a,"$isav",[P.A,A.aY],"$asav")},
eY:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.an(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cP()
y=[V.a5]
z.sc3(H.d([],y))
z.b=null
z.gl().h(0,new E.io(this))
this.cy=z
z=new O.cP()
z.sc3(H.d([],y))
z.b=null
z.gl().h(0,new E.ip(this))
this.db=z
z=new O.cP()
z.sc3(H.d([],y))
z.b=null
z.gl().h(0,new E.iq(this))
this.dx=z
this.shQ(H.d([],[O.aI]))
z=this.dy;(z&&C.a).h(z,null)
this.shJ(new H.bi(0,0,[P.A,A.aY]))},
gjj:function(){var z=this.z
if(z==null){z=this.cy.gV().u(0,this.db.gV())
this.z=z}return z},
gcL:function(){var z=this.ch
if(z==null){z=this.gjj().u(0,this.dx.gV())
this.ch=z}return z},
gey:function(){var z=this.cx
if(z==null){z=this.db.gV().u(0,this.dx.gV())
this.cx=z}return z},
cM:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gcG(z):a;(z&&C.a).h(z,y)},
cK:function(){var z=this.dy
if(z.length>1)z.pop()},
b3:function(a){var z=a.b
if(z.length===0)throw H.j(P.n("May not cache a shader with no name."))
if(this.fr.dR(z))throw H.j(P.n('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.aa(0,z,a)},
m:{
im:function(a,b){var z=new E.il(a,b)
z.eY(a,b)
return z}}},io:{"^":"t:7;a",
$1:function(a){var z
H.f(a,"$isp")
z=this.a
z.z=null
z.ch=null}},ip:{"^":"t:7;a",
$1:function(a){var z
H.f(a,"$isp")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},iq:{"^":"t:7;a",
$1:function(a){var z
H.f(a,"$isp")
z=this.a
z.ch=null
z.cx=null}},iX:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0al:x<,0y,0z,0Q,0ch,0cx,0cy",
sal:function(a){this.x=H.f(a,"$isab")},
f4:[function(a){H.f(a,"$isp")
this.jp()},function(){return this.f4(null)},"f3","$1","$0","gd0",0,2,0],
giS:function(){var z,y,x
z=Date.now()
y=C.h.a4(P.dN(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.an(z,!1)
return x/y},
du:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.u()
if(typeof z!=="number")return H.D(z)
x=C.i.cD(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.u()
w=C.i.cD(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.eA(C.n,this.gjo())}},
jp:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.iZ(this),{func:1,ret:-1,args:[P.ad]})
C.y.fB(z)
C.y.hy(z,W.fn(y,P.ad))}},"$0","gjo",0,0,3],
jm:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.du()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.an(w,!1)
x.y=P.dN(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sn(w.a,0)
w.aJ()
w=x.db
C.a.sn(w.a,0)
w.aJ()
w=x.dx
C.a.sn(w.a,0)
w.aJ()
w=x.dy;(w&&C.a).sn(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.a7(this.e)}}catch(v){z=H.aS(v)
y=H.b8(v)
P.dn("Error: "+H.i(z))
P.dn("Stack: "+H.i(y))
throw H.j(z)}},
m:{
iY:function(a,b,c,d,e){var z,y,x,w
z=J.M(a)
if(!!z.$iscz)return E.ez(a,!0,!0,!0,!1)
y=W.cA(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gdL(a).h(0,y)
w=E.ez(y,!0,!0,!0,!1)
w.a=a
return w},
ez:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.iX()
y=P.hD(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.A,null)
x=C.m.bT(a,"webgl",y)
x=H.f(x==null?C.m.bT(a,"experimental-webgl",y):x,"$iscT")
if(x==null)H.o(P.n("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.im(x,a)
w=new T.iV(x)
w.b=H.a3((x&&C.b).bU(x,3379))
w.c=H.a3(C.b.bU(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.jg(a)
v=new X.hw()
v.c=new X.ax(!1,!1,!1)
v.sht(P.hE(null,null,null,P.u))
w.b=v
v=new X.hW(w)
v.f=0
v.r=V.aF()
v.x=V.aF()
v.Q=1
v.ch=1
w.c=v
v=new X.hH(w)
v.r=0
v.x=V.aF()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.j1(w)
v.e=0
v.f=V.aF()
v.r=V.aF()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.sfD(H.d([],[[P.cW,P.a]]))
v=w.z
u=document
t=W.ap
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.T(u,"contextmenu",H.l(w.gh5(),s),!1,t))
v=w.z
r=W.a4
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.T(a,"focus",H.l(w.gha(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.T(a,"blur",H.l(w.gh2(),q),!1,r))
v=w.z
p=W.bj
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.T(u,"keyup",H.l(w.ghc(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.T(u,"keydown",H.l(w.ghb(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.T(a,"mousedown",H.l(w.ghf(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.T(a,"mouseup",H.l(w.ghh(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.T(a,"mousemove",H.l(w.ghg(),s),!1,t))
p=w.z
o=W.by;(p&&C.a).h(p,W.T(a,H.N(W.ha(a)),H.l(w.ghi(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.T(u,"mousemove",H.l(w.gh6(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.T(u,"mouseup",H.l(w.gh7(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.T(u,"pointerlockchange",H.l(w.ghj(),q),!1,r))
r=w.z
q=W.b0
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.T(a,"touchstart",H.l(w.ghr(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.T(a,"touchend",H.l(w.ghp(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.T(a,"touchmove",H.l(w.ghq(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.an(Date.now(),!1)
z.cy=0
z.du()
return z}}},iZ:{"^":"t:27;a",
$1:function(a){var z
H.kR(a)
z=this.a
if(z.ch){z.ch=!1
z.jm()}}}}],["","",,Z,{"^":"",f3:{"^":"a;a,b",$isl3:1,m:{
d9:function(a,b,c){var z
H.e(c,"$isb",[P.u],"$asb")
z=a.createBuffer()
C.b.aq(a,b,z)
C.b.dI(a,b,new Int16Array(H.b3(c)),35044)
C.b.aq(a,b,null)
return new Z.f3(b,z)}}},dw:{"^":"cw;a,b,c,d,e",
H:function(a){var z,y,x
try{y=a.a
C.b.dW(y,this.e)
C.b.jD(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.aS(x)
y=P.n('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.i(z))
throw H.j(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.i(this.e)+"]"}},bT:{"^":"a;a",$isl4:1},bc:{"^":"a;a,0b,c,d",
sfP:function(a){this.b=H.e(a,"$isb",[Z.bK],"$asb")},
a0:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
H:function(a){var z,y
z=this.a
C.b.aq(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].H(a)},
a2:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.b.dV(x,z[y].e)
C.b.aq(x,this.a.a,null)},
a7:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.h(w,x)
v=w[x]
w=v.c
u=w.a
C.b.aq(y,u,w.b)
C.b.iM(y,v.a,v.b,5123,0)
C.b.aq(y,u,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.A]
y=H.d([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.v)(x),++v)C.a.h(y,x[v].i(0))
u=H.d([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ae(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.E(y,", ")+"\nAttrs:   "+C.a.E(u,", ")},
$islk:1},bK:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aX(this.c)+"'")+"]"}},ai:{"^":"a;a",
gcX:function(a){var z,y
z=this.a
y=(z&$.$get$Y().a)!==0?3:0
if((z&$.$get$as().a)!==0)y+=3
if((z&$.$get$ar().a)!==0)y+=3
if((z&$.$get$ac().a)!==0)y+=2
if((z&$.$get$at().a)!==0)y+=3
if((z&$.$get$bw().a)!==0)y+=3
if((z&$.$get$bx().a)!==0)y+=4
if((z&$.$get$b1().a)!==0)++y
return(z&$.$get$aK().a)!==0?y+4:y},
iw:function(a){var z,y,x
z=$.$get$Y()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$as()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ar()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ac()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$at()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bw()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bx()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b1()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aK()
if((y&z.a)!==0)if(x===a)return z
return $.$get$f2()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.ai))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.d([],[P.A])
y=this.a
if((y&$.$get$Y().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$as().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$ar().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$ac().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$at().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bw().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bx().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b1().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aK().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.E(z,"|")},
m:{
aj:function(a){return new Z.ai(a)}}}}],["","",,D,{"^":"",dz:{"^":"a;"},ab:{"^":"a;0a,0b,0c,0d",
sab:function(a){this.a=H.e(a,"$isb",[{func:1,ret:-1,args:[D.p]}],"$asb")},
sb1:function(a){this.b=H.e(a,"$isb",[{func:1,ret:-1,args:[D.p]}],"$asb")},
h:function(a,b){var z={func:1,ret:-1,args:[D.p]}
H.l(b,z)
if(this.a==null)this.sab(H.d([],[z]))
z=this.a;(z&&C.a).h(z,b)},
F:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.p]})
z=this.a
z=z==null?null:C.a.as(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).F(z,b)||!1}else y=!1
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
return!0}if(!x)C.a.ai(y,new D.he(z))
return!0},
cu:function(){return this.w(null)},
jq:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.w(y)}}},
aw:function(){return this.jq(!0,!1)},
m:{
z:function(){var z=new D.ab()
z.sab(null)
z.sb1(null)
z.c=null
z.d=0
return z}}},he:{"^":"t:26;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.p]})
z=this.a.a
z.b
a.$1(z)}},p:{"^":"a;a,0b"},bL:{"^":"p;c,d,a,0b,$ti"},bM:{"^":"p;c,d,a,0b,$ti"},w:{"^":"p;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}}],["","",,X,{"^":"",dx:{"^":"a;a,b",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dx))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}},dY:{"^":"a;a,b",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dY))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}},hw:{"^":"a;0a,0b,0c,0d",
sht:function(a){this.d=H.e(a,"$isel",[P.u],"$asel")},
jf:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jb:function(a){this.c=a.b
this.d.F(0,a.a)
return!1}},e0:{"^":"c9;x,y,c,d,e,a,0b"},hH:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
b0:function(a,b){var z,y,x,w,v,u,t,s
z=new P.an(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.u()
v=b.b
u=this.ch
if(typeof v!=="number")return v.u()
t=new V.a1(y.a+x*w,y.b+v*u)
u=this.a.gaS()
s=new X.bP(a,V.aF(),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cJ:function(a,b){this.r=a.a
return!1},
bg:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.eO()
if(typeof z!=="number")return z.eB()
this.r=(z&~y)>>>0
return!1},
bf:function(a,b){var z=this.d
if(z==null)return!1
z.w(this.b0(a,b))
return!0},
jg:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaS()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.u()
t=a.b
s=this.cy
if(typeof t!=="number")return t.u()
w=new X.cQ(new V.Q(v*u,t*s),y,x,new P.an(w,!1),this)
w.b=!0
z.w(w)
return!0},
he:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.an(Date.now(),!1)
y=this.f
x=new X.e0(c,a,this.a.gaS(),b,z,this)
x.b=!0
y.w(x)
this.y=z
this.x=V.aF()}},ax:{"^":"a;a,b,c",
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ax))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},bP:{"^":"c9;x,y,z,Q,ch,c,d,e,a,0b"},hW:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
c0:function(a,b,c){var z,y,x
z=new P.an(Date.now(),!1)
y=this.a.gaS()
x=new X.bP(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cJ:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.w(this.c0(a,b,!0))
return!0},
bg:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.eO()
if(typeof z!=="number")return z.eB()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.w(this.c0(a,b,!0))
return!0},
bf:function(a,b){var z=this.d
if(z==null)return!1
z.w(this.c0(a,b,!1))
return!0},
jh:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaS()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.u()
u=a.b
t=this.ch
if(typeof u!=="number")return u.u()
x=new X.cQ(new V.Q(w*v,u*t),y,b,new P.an(x,!1),this)
x.b=!0
z.w(x)
return!0}},cQ:{"^":"c9;x,c,d,e,a,0b"},c9:{"^":"p;"},eD:{"^":"c9;x,y,z,Q,ch,c,d,e,a,0b"},j1:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
b0:function(a,b){var z,y,x,w
H.e(a,"$isb",[V.a1],"$asb")
z=new P.an(Date.now(),!1)
y=a.length>0?a[0]:V.aF()
x=this.a.gaS()
w=new X.eD(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
je:function(a){var z
H.e(a,"$isb",[V.a1],"$asb")
z=this.b
if(z==null)return!1
z.w(this.b0(a,!0))
return!0},
jc:function(a){var z
H.e(a,"$isb",[V.a1],"$asb")
z=this.c
if(z==null)return!1
z.w(this.b0(a,!0))
return!0},
jd:function(a){var z
H.e(a,"$isb",[V.a1],"$asb")
z=this.d
if(z==null)return!1
z.w(this.b0(a,!1))
return!0}},jg:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
sfD:function(a){this.z=H.e(a,"$isb",[[P.cW,P.a]],"$asb")},
gaS:function(){var z=this.a
return V.br(0,0,C.m.gdP(z).c,C.m.gdP(z).d)},
de:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dY(z,new X.ax(y,a.altKey,a.shiftKey))},
aP:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ax(y,a.altKey,a.shiftKey)},
ce:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.ax(y,a.altKey,a.shiftKey)},
aE:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.O()
v=z.top
if(typeof x!=="number")return x.O()
return new V.a1(y-w,x-v)},
b2:function(a){return new V.Q(a.movementX,a.movementY)},
c8:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.d([],[V.a1])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.v)(x),++v){u=x[v]
t=C.i.X(u.pageX)
C.i.X(u.pageY)
s=z.left
C.i.X(u.pageX)
C.a.h(y,new V.a1(t-s,C.i.X(u.pageY)-z.top))}return y},
aB:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dx(z,new X.ax(y,a.altKey,a.shiftKey))},
c4:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.O()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.O()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
jY:[function(a){this.f=!0},"$1","gha",4,0,8],
jQ:[function(a){this.f=!1},"$1","gh2",4,0,8],
jT:[function(a){H.f(a,"$isap")
if(this.f&&this.c4(a))a.preventDefault()},"$1","gh5",4,0,4],
k_:[function(a){var z
H.f(a,"$isbj")
if(!this.f)return
z=this.de(a)
this.b.jf(z)},"$1","ghc",4,0,22],
jZ:[function(a){var z
H.f(a,"$isbj")
if(!this.f)return
z=this.de(a)
this.b.jb(z)},"$1","ghb",4,0,22],
k5:[function(a){var z,y,x,w
H.f(a,"$isap")
z=this.a
z.focus()
this.f=!0
this.aP(a)
if(this.x){y=this.aB(a)
x=this.b2(a)
if(this.d.cJ(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aB(a)
w=this.aE(a)
if(this.c.cJ(y,w))a.preventDefault()},"$1","ghf",4,0,4],
k7:[function(a){var z,y,x
H.f(a,"$isap")
this.aP(a)
z=this.aB(a)
if(this.x){y=this.b2(a)
if(this.d.bg(z,y))a.preventDefault()
return}if(this.r)return
x=this.aE(a)
if(this.c.bg(z,x))a.preventDefault()},"$1","ghh",4,0,4],
jV:[function(a){var z,y,x
H.f(a,"$isap")
if(!this.c4(a)){this.aP(a)
z=this.aB(a)
if(this.x){y=this.b2(a)
if(this.d.bg(z,y))a.preventDefault()
return}if(this.r)return
x=this.aE(a)
if(this.c.bg(z,x))a.preventDefault()}},"$1","gh7",4,0,4],
k6:[function(a){var z,y,x
H.f(a,"$isap")
this.aP(a)
z=this.aB(a)
if(this.x){y=this.b2(a)
if(this.d.bf(z,y))a.preventDefault()
return}if(this.r)return
x=this.aE(a)
if(this.c.bf(z,x))a.preventDefault()},"$1","ghg",4,0,4],
jU:[function(a){var z,y,x
H.f(a,"$isap")
if(!this.c4(a)){this.aP(a)
z=this.aB(a)
if(this.x){y=this.b2(a)
if(this.d.bf(z,y))a.preventDefault()
return}if(this.r)return
x=this.aE(a)
if(this.c.bf(z,x))a.preventDefault()}},"$1","gh6",4,0,4],
k8:[function(a){var z,y
H.f(a,"$isby")
this.aP(a)
z=new V.Q((a&&C.x).giJ(a),C.x.giK(a)).v(0,180)
if(this.x){if(this.d.jg(z))a.preventDefault()
return}if(this.r)return
y=this.aE(a)
if(this.c.jh(z,y))a.preventDefault()},"$1","ghi",4,0,38],
k9:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.aB(this.y)
x=this.aE(this.y)
this.d.he(y,x,z)}},"$1","ghj",4,0,8],
kh:[function(a){var z
H.f(a,"$isb0")
this.a.focus()
this.f=!0
this.ce(a)
z=this.c8(a)
if(this.e.je(z))a.preventDefault()},"$1","ghr",4,0,10],
kf:[function(a){var z
H.f(a,"$isb0")
this.ce(a)
z=this.c8(a)
if(this.e.jc(z))a.preventDefault()},"$1","ghp",4,0,10],
kg:[function(a){var z
H.f(a,"$isb0")
this.ce(a)
z=this.c8(a)
if(this.e.jd(z))a.preventDefault()},"$1","ghq",4,0,10]}}],["","",,D,{"^":"",c0:{"^":"a;0a,0b,0c,0d",
gl:function(){var z=this.d
if(z==null){z=D.z()
this.d=z}return z},
aK:[function(a){var z
H.f(a,"$isp")
z=this.d
if(!(z==null))z.w(a)},function(){return this.aK(null)},"jE","$1","$0","gf5",0,2,0],
$isX:1,
$isay:1},X:{"^":"a;",$isay:1},hx:{"^":"J;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
sfA:function(a){this.e=H.e(a,"$isb",[D.c0],"$asb")},
shs:function(a){this.f=H.e(a,"$isb",[D.ef],"$asb")},
shL:function(a){this.r=H.e(a,"$isb",[D.eo],"$asb")},
shZ:function(a){this.x=H.e(a,"$isb",[D.ew],"$asb")},
si_:function(a){this.y=H.e(a,"$isb",[D.ex],"$asb")},
si0:function(a){this.z=H.e(a,"$isb",[D.ey],"$asb")},
gl:function(){var z=this.Q
if(z==null){z=D.z()
this.Q=z}return z},
aK:function(a){var z=this.Q
if(!(z==null))z.w(a)},
hd:[function(a){var z
H.f(a,"$isp")
z=this.ch
if(!(z==null))z.w(a)},function(){return this.hd(null)},"k0","$1","$0","gdn",0,2,0],
ka:[function(a){var z,y,x
H.e(a,"$isk",[D.X],"$ask")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.v)(a),++y){x=a[y]
if(x==null||this.fs(x))return!1}return!0},"$1","ghk",4,0,24],
jN:[function(a,b){var z,y,x,w,v,u,t,s
z=D.X
H.e(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gdn(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.v)(b),++u){t=H.f(b[u],"$isX")
if(t instanceof D.c0)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.ab()
s.sab(null)
s.sb1(null)
s.c=null
s.d=0
t.d=s}H.l(x,w)
if(s.a==null)s.sab(H.d([],v))
s=s.a;(s&&C.a).h(s,x)}z=new D.bL(a,b,this,[z])
z.b=!0
this.aK(z)},"$2","gh_",8,0,23],
kc:[function(a,b){var z,y,x,w
z=D.X
H.e(b,"$isk",[z],"$ask")
for(y=b.gR(b),x=this.gdn();y.B();){w=y.gL()
C.a.F(this.e,w)
w.gl().F(0,x)}z=new D.bM(a,b,this,[z])
z.b=!0
this.aK(z)},"$2","ghm",8,0,23],
fs:function(a){var z=C.a.as(this.e,a)
return z},
$ask:function(){return[D.X]},
$asJ:function(){return[D.X]}},ef:{"^":"a;",$isX:1,$isay:1},eo:{"^":"a;",$isX:1,$isay:1},ew:{"^":"a;",$isX:1,$isay:1},ex:{"^":"a;",$isX:1,$isay:1},ey:{"^":"a;",$isX:1,$isay:1}}],["","",,V,{"^":"",
l6:[function(a,b){if(typeof b!=="number")return b.O()
if(typeof a!=="number")return H.D(a)
return Math.abs(b-a)<=1e-9},"$2","hU",8,0,25],
l0:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.i.eN(a-b,z)
return(a<0?a+z:a)+b},
H:function(a,b,c){if(a==null)return C.j.ak("null",c)
return C.j.ak(C.i.ew($.m.$2(a,0)?0:a,b),c+b+1)},
b7:function(a,b,c){var z,y,x,w,v,u
H.e(a,"$isb",[P.q],"$asb")
z=H.d([],[P.A])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.v)(a),++w){v=V.H(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.h(z,u)
C.a.aa(z,u,C.j.ak(z[u],x))}return z},
bH:function(a,b){return C.i.jx(Math.pow(b,C.E.cD(Math.log(H.ks(a))/Math.log(b))))},
V:{"^":"a;a,b,c",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}},
aa:{"^":"a;a,b,c,d",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aa))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+", "+V.H(this.d,3,0)+"]"}},
cN:{"^":"a;a,b,c,d,e,f,r,x,y",
S:function(a,b){var z=H.d([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.q])
return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cN))return!1
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
y=V.b7(H.d([this.a,this.d,this.r],z),3,0)
x=V.b7(H.d([this.b,this.e,this.x],z),3,0)
w=V.b7(H.d([this.c,this.f,this.y],z),3,0)
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
return s+(z+w[2]+"]")},
m:{
cO:function(){var z=$.e4
if(z==null){z=new V.cN(1,0,0,0,1,0,0,0,1)
$.e4=z}return z}}},
a5:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
S:function(a,b){var z=H.d([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.q])
return z},
cF:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.m.$2(a2,0))return V.aw()
a3=1/a2
a4=-w
a5=-i
return V.aE((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
u:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.f(a7,"$isa5")
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
return V.aE(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cQ:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.E(this.a*z+this.b*y+this.c*x,this.e*z+this.f*y+this.r*x,this.y*z+this.z*y+this.Q*x)},
bn:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.R(this.a*z+this.b*y+this.c*x+this.d,this.e*z+this.f*y+this.r*x+this.x,this.y*z+this.z*y+this.Q*x+this.ch)},
q:function(a,b){var z
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
i:function(a){return this.M()},
eh:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.q]
y=V.b7(H.d([this.a,this.e,this.y,this.cx],z),b,c)
x=V.b7(H.d([this.b,this.f,this.z,this.cy],z),b,c)
w=V.b7(H.d([this.c,this.r,this.Q,this.db],z),b,c)
v=V.b7(H.d([this.d,this.x,this.ch,this.dx],z),b,c)
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
M:function(){return this.eh("",3,0)},
A:function(a){return this.eh(a,3,0)},
m:{
aw:function(){var z=$.c8
if(z==null){z=V.aE(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.c8=z}return z},
aE:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a5(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
e7:function(a,b,c){return V.aE(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
e6:function(a,b,c,d){return V.aE(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
e5:function(a,b,c){var z,y,x,w,v,u,t,s
z=c.v(0,Math.sqrt(c.D(c)))
y=b.aF(z)
x=y.v(0,Math.sqrt(y.D(y)))
w=z.aF(x)
v=new V.E(a.a,a.b,a.c)
u=x.P(0).D(v)
t=w.P(0).D(v)
s=z.P(0).D(v)
return V.aE(x.a,w.a,z.a,u,x.b,w.b,z.b,t,x.c,w.c,z.c,s,0,0,0,1)}}},
a1:{"^":"a;a,b",
O:function(a,b){return new V.a1(this.a-b.a,this.b-b.b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"},
m:{
aF:function(){var z=$.eg
if(z==null){z=new V.a1(0,0)
$.eg=z}return z}}},
R:{"^":"a;a,b,c",
G:function(a,b){return new V.R(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a,b){return new V.R(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){return new V.R(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"},
m:{
eh:function(){var z=$.bo
if(z==null){z=new V.R(0,0,0)
$.bo=z}return z}}},
bp:{"^":"a;a,b,c,d",
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bp))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+", "+V.H(this.d,3,0)+"]"}},
cb:{"^":"a;a,b,c,d",
gav:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cb))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
z=b.d
if(!$.m.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+", "+V.H(this.d,3,0)+"]"},
m:{
cS:function(){var z=$.bs
if(z==null){z=V.br(0,0,1,1)
$.bs=z}return z},
br:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cb(a,b,c,d)}}},
Q:{"^":"a;a,b",
iZ:[function(a){return Math.sqrt(this.D(this))},"$0","gn",1,0,21],
D:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.u()
if(typeof y!=="number")return H.D(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.u()
if(typeof w!=="number")return H.D(w)
return z*y+x*w},
u:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.u()
y=this.b
if(typeof y!=="number")return y.u()
return new V.Q(z*b,y*b)},
v:function(a,b){var z,y
if($.m.$2(b,0)){z=$.eU
if(z==null){z=new V.Q(0,0)
$.eU=z}return z}z=this.a
if(typeof z!=="number")return z.v()
y=this.b
if(typeof y!=="number")return y.v()
return new V.Q(z/b,y/b)},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}},
E:{"^":"a;a,b,c",
iZ:[function(a){return Math.sqrt(this.D(this))},"$0","gn",1,0,21],
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cH:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.E(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aF:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.E(z*y-x*w,x*v-u*y,u*w-z*v)},
G:function(a,b){return new V.E(this.a+b.a,this.b+b.b,this.c+b.c)},
P:function(a){return new V.E(-this.a,-this.b,-this.c)},
u:function(a,b){return new V.E(this.a*b,this.b*b,this.c*b)},
v:function(a,b){if($.m.$2(b,0))return V.bv()
return new V.E(this.a/b,this.b/b,this.c/b)},
ej:function(){if(!$.m.$2(0,this.a))return!1
if(!$.m.$2(0,this.b))return!1
if(!$.m.$2(0,this.c))return!1
return!0},
q:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.E))return!1
z=b.a
if(!$.m.$2(z,this.a))return!1
z=b.b
if(!$.m.$2(z,this.b))return!1
z=b.c
if(!$.m.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"},
m:{
bv:function(){var z=$.eY
if(z==null){z=new V.E(0,0,0)
$.eY=z}return z},
eZ:function(){var z=$.eX
if(z==null){z=new V.E(0,1,0)
$.eX=z}return z},
f_:function(){var z=$.cf
if(z==null){z=new V.E(0,0,1)
$.cf=z}return z}}}}],["","",,U,{"^":"",fU:{"^":"dz;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bX:function(a){var z=V.l0(a,this.c,this.b)
return z},
gl:function(){var z=this.y
if(z==null){z=D.z()
this.y=z}return z},
T:function(a){var z=this.y
if(!(z==null))z.w(a)},
seA:function(a,b){},
sem:function(a){var z,y
z=this.b
if(!$.m.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bX(z)}z=new D.w("maximumLocation",y,this.b,this,[P.q])
z.b=!0
this.T(z)}},
seo:function(a){var z,y
z=this.c
if(!$.m.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bX(z)}z=new D.w("minimumLocation",y,this.c,this,[P.q])
z.b=!0
this.T(z)}},
sad:function(a,b){var z,y
b=this.bX(b)
z=this.d
if(!$.m.$2(z,b)){y=this.d
this.d=b
z=new D.w("location",y,b,this,[P.q])
z.b=!0
this.T(z)}},
sen:function(a){var z,y,x
z=this.e
if(!$.m.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.w("maximumVelocity",y,a,this,[P.q])
z.b=!0
this.T(z)}},
sY:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.m.$2(z,a)){x=this.f
this.f=a
z=new D.w("velocity",x,a,this,[P.q])
z.b=!0
this.T(z)}},
sdS:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.m.$2(z,a)){y=this.x
this.x=a
z=new D.w("dampening",y,a,this,[P.q])
z.b=!0
this.T(z)}},
a9:function(a){var z,y,x,w
z=this.f
if($.m.$2(z,0)){z=this.r
z=!$.m.$2(z,0)}else z=!0
if(z){y=this.f+this.r*a
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sad(0,this.d+y*a)
z=this.x
if(!$.m.$2(z,0)){w=y*Math.pow(1-this.x,a)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sY(y)}},
m:{
dB:function(){var z=new U.fU()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dC:{"^":"a7;0a,0b",
gl:function(){var z=this.b
if(z==null){z=D.z()
this.b=z}return z},
aX:function(a,b){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dC))return!1
return J.B(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")},
m:{
cD:function(a){var z=new U.dC()
z.a=a
return z}}},dQ:{"^":"J;0e,0f,0r,0a,0b,0c,0d",
gl:function(){var z=this.e
if(z==null){z=D.z()
this.e=z}return z},
T:[function(a){var z
H.f(a,"$isp")
z=this.e
if(!(z==null))z.w(a)},function(){return this.T(null)},"aL","$1","$0","gbr",0,2,0],
jF:[function(a,b){var z,y,x,w,v,u,t,s
z=U.a7
H.e(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gbr(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.v)(b),++u){t=b[u]
if(t!=null){s=t.gl()
s.toString
H.l(x,w)
if(s.a==null)s.sab(H.d([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.bL(a,b,this,[z])
z.b=!0
this.T(z)},"$2","gf6",8,0,20],
kb:[function(a,b){var z,y,x
z=U.a7
H.e(b,"$isk",[z],"$ask")
for(y=b.gR(b),x=this.gbr();y.B();)y.gL().gl().F(0,x)
z=new D.bM(a,b,this,[z])
z.b=!0
this.T(z)},"$2","ghl",8,0,20],
aX:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(typeof z!=="number")return z.aA()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.am(z,z.length,0,[H.r(z,0)]),x=null;z.B();){y=z.d
if(y!=null){w=y.aX(a,b)
if(w!=null)x=x==null?w:w.u(0,x)}}this.f=x==null?V.aw():x
z=this.e
if(!(z==null))z.aw()}return this.f},
q:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dQ))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.h(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.h(w,y)
if(!J.B(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$ask:function(){return[U.a7]},
$asJ:function(){return[U.a7]},
$isa7:1,
m:{
dR:function(a){var z=new U.dQ()
z.bq(U.a7)
z.aI(z.gf6(),z.ghl())
z.e=null
z.f=V.aw()
z.r=0
return z}}},a7:{"^":"dz;"},jh:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gl:function(){var z=this.fx
if(z==null){z=D.z()
this.fx=z}return z},
T:[function(a){var z
H.f(a,"$isp")
z=this.fx
if(!(z==null))z.w(a)},function(){return this.T(null)},"aL","$1","$0","gbr",0,2,0],
cj:function(a){var z,y
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.b
if(y==null){y=D.z()
z.b=y
z=y}else z=y
z.h(0,this.gfW())
z=this.a.c
y=z.d
if(y==null){y=D.z()
z.d=y
z=y}else z=y
z.h(0,this.gfX())
z=this.a.c
y=z.c
if(y==null){y=D.z()
z.c=y
z=y}else z=y
z.h(0,this.gfY())
z=this.a.d
y=z.f
if(y==null){y=D.z()
z.f=y
z=y}else z=y
z.h(0,this.gfU())
z=this.a.d
y=z.d
if(y==null){y=D.z()
z.d=y
z=y}else z=y
z.h(0,this.gfV())
z=this.a.e
y=z.b
if(y==null){y=D.z()
z.b=y
z=y}else z=y
z.h(0,this.ghX())
z=this.a.e
y=z.d
if(y==null){y=D.z()
z.d=y
z=y}else z=y
z.h(0,this.ghW())
z=this.a.e
y=z.c
if(y==null){y=D.z()
z.c=y
z=y}else z=y
z.h(0,this.ghV())
return!0},
ap:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.P()
z=-z}if(this.r){if(typeof y!=="number")return y.P()
y=-y}return new V.Q(z,y)},
jJ:[function(a){a=H.c(H.f(a,"$isp"),"$isbP")
if(!J.B(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfW",4,0,2],
jK:[function(a){var z,y,x,w,v,u,t
a=H.c(H.f(a,"$isp"),"$isbP")
if(!this.cx)return
if(this.ch){z=a.d.O(0,a.y)
z=new V.Q(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.D(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.O(0,a.y)
z=this.ap(new V.Q(y.a,y.b).u(0,2).v(0,z.gav()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.P()
x=this.y
if(typeof x!=="number")return H.D(x)
y.sY(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.P()
y=this.x
if(typeof y!=="number")return H.D(y)
x.sY(-z*10*y)}else{z=a.c
y=a.d
x=y.O(0,a.y)
w=this.ap(new V.Q(x.a,x.b).u(0,2).v(0,z.gav()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.D(u)
t=this.cy
if(typeof t!=="number")return H.D(t)
x.sad(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.D(v)
x=this.db
if(typeof x!=="number")return H.D(x)
t.sad(0,-u*v+x)
this.b.sY(0)
this.c.sY(0)
y=y.O(0,a.z)
this.dx=this.ap(new V.Q(y.a,y.b).u(0,2).v(0,z.gav()))}this.aL()},"$1","gfX",4,0,2],
jL:[function(a){var z,y,x
H.f(a,"$isp")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.P()
x=this.y
if(typeof x!=="number")return H.D(x)
z.sY(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.P()
z=this.x
if(typeof z!=="number")return H.D(z)
x.sY(-y*10*z)
this.aL()}},"$1","gfY",4,0,2],
jH:[function(a){if(H.c(H.f(a,"$isp"),"$ise0").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfU",4,0,2],
jI:[function(a){var z,y,x,w,v,u,t
a=H.c(H.f(a,"$isp"),"$isbP")
if(!J.B(this.d,a.x.b))return
z=a.c
y=a.d
x=y.O(0,a.y)
w=this.ap(new V.Q(x.a,x.b).u(0,2).v(0,z.gav()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.D(u)
t=this.cy
if(typeof t!=="number")return H.D(t)
x.sad(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.D(v)
x=this.db
if(typeof x!=="number")return H.D(x)
t.sad(0,-u*v+x)
this.b.sY(0)
this.c.sY(0)
y=y.O(0,a.z)
this.dx=this.ap(new V.Q(y.a,y.b).u(0,2).v(0,z.gav()))
this.aL()},"$1","gfV",4,0,2],
kl:[function(a){H.f(a,"$isp")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghX",4,0,2],
kk:[function(a){var z,y,x,w,v,u,t
a=H.c(H.f(a,"$isp"),"$iseD")
if(!this.cx)return
if(this.ch){z=a.d.O(0,a.y)
z=new V.Q(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.D(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.O(0,a.y)
z=this.ap(new V.Q(y.a,y.b).u(0,2).v(0,z.gav()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.P()
x=this.y
if(typeof x!=="number")return H.D(x)
y.sY(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.P()
y=this.x
if(typeof y!=="number")return H.D(y)
x.sY(-z*10*y)}else{z=a.c
y=a.d
x=y.O(0,a.y)
w=this.ap(new V.Q(x.a,x.b).u(0,2).v(0,z.gav()))
x=this.c
v=w.a
if(typeof v!=="number")return v.P()
u=this.y
if(typeof u!=="number")return H.D(u)
t=this.cy
if(typeof t!=="number")return H.D(t)
x.sad(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.P()
v=this.x
if(typeof v!=="number")return H.D(v)
x=this.db
if(typeof x!=="number")return H.D(x)
t.sad(0,-u*v+x)
this.b.sY(0)
this.c.sY(0)
y=y.O(0,a.z)
this.dx=this.ap(new V.Q(y.a,y.b).u(0,2).v(0,z.gav()))}this.aL()},"$1","ghW",4,0,2],
kj:[function(a){var z,y,x
H.f(a,"$isp")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.P()
x=this.y
if(typeof x!=="number")return H.D(x)
z.sY(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.P()
z=this.x
if(typeof z!=="number")return H.D(z)
x.sY(-y*10*z)
this.aL()}},"$1","ghV",4,0,2],
aX:function(a,b){var z,y,x,w,v
z=this.dy
y=a.e
if(typeof z!=="number")return z.aA()
if(z<y){this.dy=y
x=a.y
this.c.a9(x)
this.b.a9(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aE(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.u(0,V.aE(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isa7:1,
m:{
eS:function(a,b,c,d,e,f,g,h){var z,y,x,w,v
z=new U.jh()
y=U.dB()
y.seA(0,!0)
y.sem(6.283185307179586)
y.seo(0)
y.sad(0,0)
y.sen(100)
y.sY(0)
y.sdS(0.5)
z.b=y
x=z.gbr()
y.gl().h(0,x)
y=U.dB()
y.seA(0,!0)
y.sem(6.283185307179586)
y.seo(0)
y.sad(0,0)
y.sen(100)
y.sY(0)
y.sdS(0.5)
z.c=y
y.gl().h(0,x)
z.d=null
z.e=!1
z.f=!1
z.r=!1
z.x=2.5
z.y=2.5
z.z=2
z.Q=4
z.cx=!1
z.ch=!1
z.cy=0
z.db=0
z.dx=null
z.dy=0
z.fr=null
z.fx=null
w=new X.ax(b,!1,!1)
v=z.d
z.d=w
y=new D.w("modifiers",v,w,z,[X.ax])
y.b=!0
z.T(y)
y=z.f
if(y!==!1){z.f=!1
y=new D.w("invertX",y,!1,z,[P.U])
y.b=!0
z.T(y)}y=z.r
if(y!==!1){z.r=!1
y=new D.w("invertY",y,!1,z,[P.U])
y.b=!0
z.T(y)}z.cj(c)
return z}}},ji:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gl:function(){var z=this.r
if(z==null){z=D.z()
this.r=z}return z},
T:function(a){var z=this.r
if(!(z==null))z.w(a)},
cj:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.z()
z.e=y
z=y}else z=y
y=this.gfZ()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.z()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
jM:[function(a){var z,y,x,w
H.f(a,"$isp")
if(!J.B(this.b,this.a.b.c))return
H.c(a,"$iscQ")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.u()
w=z+y*x
if(z!==w){this.d=w
z=new D.w("zoom",z,w,this,[P.q])
z.b=!0
this.T(z)}},"$1","gfZ",4,0,2],
aX:function(a,b){var z,y,x
z=this.e
y=a.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.e6(x,x,x,1)}return this.f},
$isa7:1,
m:{
eT:function(a,b,c,d,e){var z,y,x
z=new U.ji()
z.c=0.01
z.d=0
z.e=0
y=new X.ax(b,!1,!1)
z.b=y
x=new D.w("modifiers",null,y,z,[X.ax])
x.b=!0
z.T(x)
z.cj(c)
return z}}}}],["","",,M,{"^":"",fV:{"^":"J;0e,0f,0a,0b,0c,0d",
gl:function(){var z=this.f
if(z==null){z=D.z()
this.f=z}return z},
a_:[function(a){var z
H.f(a,"$isp")
z=this.f
if(!(z==null))z.w(a)},function(){return this.a_(null)},"d1","$1","$0","gU",0,2,0],
kd:[function(a,b){var z,y,x,w,v,u,t,s
z=M.az
H.e(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gU(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.v)(b),++u){t=b[u]
if(t!=null){s=t.gl()
s.toString
H.l(x,w)
if(s.a==null)s.sab(H.d([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.bL(a,b,this,[z])
z.b=!0
this.a_(z)},"$2","ghn",8,0,16],
ke:[function(a,b){var z,y,x
z=M.az
H.e(b,"$isk",[z],"$ask")
for(y=b.gR(b),x=this.gU();y.B();)y.gL().gl().F(0,x)
z=new D.bM(a,b,this,[z])
z.b=!0
this.a_(z)},"$2","gho",8,0,16],
a7:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.am(z,z.length,0,[H.r(z,0)]);z.B();){y=z.d
if(!(y==null))y.a7(a)}this.e=!1},
$ask:function(){return[M.az]},
$asJ:function(){return[M.az]},
$isaz:1},fX:{"^":"a;0a,0b,0c,0d,0e,0f",
gl:function(){var z=this.f
if(z==null){z=D.z()
this.f=z}return z},
a_:[function(a){var z
H.f(a,"$isp")
z=this.f
if(!(z==null))z.w(a)},function(){return this.a_(null)},"d1","$1","$0","gU",0,2,0],
sb6:function(a){var z,y
if(a==null)a=new X.ho()
z=this.a
if(z!==a){if(z!=null)z.gl().F(0,this.gU())
y=this.a
this.a=a
a.gl().h(0,this.gU())
z=new D.w("camera",y,this.a,this,[X.bY])
z.b=!0
this.a_(z)}},
saH:function(a,b){var z,y
if(b==null)b=X.cG(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gl().F(0,this.gU())
y=this.b
this.b=b
b.gl().h(0,this.gU())
z=new D.w("target",y,this.b,this,[X.cc])
z.b=!0
this.a_(z)}},
sax:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gl().F(0,this.gU())
y=this.c
this.c=a
if(a!=null)a.gl().h(0,this.gU())
z=new D.w("technique",y,this.c,this,[O.aI])
z.b=!0
this.a_(z)}},
a7:function(a){var z
a.cM(this.c)
this.b.H(a)
this.a.H(a)
z=this.c
if(z!=null)z.a9(a)
this.d.a9(a)
this.d.a7(a)
this.a.a2(a)
this.b.a2(a)
a.cK()},
$isaz:1,
m:{
cE:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=new M.fX()
z.sb6(a)
z.saH(0,b)
z.sax(c)
y=E.cF(null,!0,null,"",null,null)
x=F.cU()
w=x.a
v=new V.E(-1,-1,1)
v=v.v(0,Math.sqrt(v.D(v)))
u=w.by(new V.bp(1,2,4,6),new V.aa(1,0,0,1),new V.R(-1,-1,0),new V.a1(0,1),v,null)
w=x.a
v=new V.E(1,-1,1)
v=v.v(0,Math.sqrt(v.D(v)))
t=w.by(new V.bp(0,3,4,6),new V.aa(0,0,1,1),new V.R(1,-1,0),new V.a1(1,1),v,null)
w=x.a
v=new V.E(1,1,1)
v=v.v(0,Math.sqrt(v.D(v)))
s=w.by(new V.bp(0,2,5,6),new V.aa(0,1,0,1),new V.R(1,1,0),new V.a1(1,0),v,null)
w=x.a
v=V.aF()
r=new V.E(-1,1,1)
r=r.v(0,Math.sqrt(r.D(r)))
q=w.by(new V.bp(0,2,4,7),new V.aa(1,1,0,1),new V.R(-1,1,0),v,r,null)
x.d.it(H.d([u,t,s,q],[F.ah]))
x.am()
y.sbp(0,x)
z.d=y
z.e=null
return z}}},hc:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
sfo:function(a,b){this.d=H.e(b,"$isJ",[E.ao],"$asJ")},
a_:[function(a){var z
H.f(a,"$isp")
z=this.x
if(!(z==null))z.w(a)},function(){return this.a_(null)},"d1","$1","$0","gU",0,2,0],
jR:[function(a,b){var z,y,x,w,v,u,t,s
z=E.ao
H.e(b,"$isk",[z],"$ask")
for(y=b.length,x=this.gU(),w={func:1,ret:-1,args:[D.p]},v=[w],u=0;u<b.length;b.length===y||(0,H.v)(b),++u){t=b[u]
if(t!=null){if(t.gal()==null){s=new D.ab()
s.sab(null)
s.sb1(null)
s.c=null
s.d=0
t.sal(s)}s=t.gal()
s.toString
H.l(x,w)
if(s.a==null)s.sab(H.d([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.bL(a,b,this,[z])
z.b=!0
this.a_(z)},"$2","gh3",8,0,6],
jS:[function(a,b){var z,y,x
z=E.ao
H.e(b,"$isk",[z],"$ask")
for(y=b.gR(b),x=this.gU();y.B();)y.gL().gl().F(0,x)
z=new D.bM(a,b,this,[z])
z.b=!0
this.a_(z)},"$2","gh4",8,0,6],
sb6:function(a){var z,y
if(a==null)a=X.ed(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null)z.gl().F(0,this.gU())
y=this.a
this.a=a
a.gl().h(0,this.gU())
z=new D.w("camera",y,this.a,this,[X.bY])
z.b=!0
this.a_(z)}},
saH:function(a,b){var z,y
if(b==null)b=X.cG(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gl().F(0,this.gU())
y=this.b
this.b=b
b.gl().h(0,this.gU())
z=new D.w("target",y,this.b,this,[X.cc])
z.b=!0
this.a_(z)}},
sax:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gl().F(0,this.gU())
y=this.c
this.c=a
if(a!=null)a.gl().h(0,this.gU())
z=new D.w("technique",y,this.c,this,[O.aI])
z.b=!0
this.a_(z)}},
gl:function(){var z=this.x
if(z==null){z=D.z()
this.x=z}return z},
a7:function(a){var z
a.cM(this.c)
this.b.H(a)
this.a.H(a)
z=this.c
if(z!=null)z.a9(a)
for(z=this.d.a,z=new J.am(z,z.length,0,[H.r(z,0)]);z.B();)z.d.a9(a)
for(z=this.d.a,z=new J.am(z,z.length,0,[H.r(z,0)]);z.B();)z.d.a7(a)
this.a.toString
a.cy.aG()
a.db.aG()
this.b.a2(a)
a.cK()},
$isaz:1,
m:{
dO:function(a,b,c,d){var z=new M.hc()
z.sfo(0,O.bZ(E.ao))
z.d.aI(z.gh3(),z.gh4())
z.e=null
z.f=null
z.r=null
z.x=null
z.sb6(a)
z.saH(0,c)
z.sax(d)
return z}}},az:{"^":"a;"}}],["","",,A,{"^":"",ds:{"^":"a;a,b,c"},fK:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
iO:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.v)(z),++x){w=z[x]
C.b.dW(w.a,w.c)}},
b7:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.v)(z),++x){w=z[x]
C.b.dV(w.a,w.c)}}},dL:{"^":"aY;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,a,b,0c,0d,0e,0f,0r,0x,0y",
ac:function(a,b,c){if(c==null||!c.d)C.b.C(b.a,b.d,1)
else{a.eP(c)
C.b.C(b.a,b.d,0)}}},e3:{"^":"aY;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0at,0an,0bB,0dX,0bC,0bD,0dY,0dZ,0bE,0bF,0e_,0e0,0bG,0bH,0e1,0e2,0bI,0e3,0e4,0bJ,0e5,0e6,0bK,0bL,0bM,0e7,0e8,0bN,0bO,0e9,0ea,0bP,0eb,0cv,0ec,0cw,0ed,0cz,0ee,0cA,0ef,0cB,0eg,0cC,a,b,0c,0d,0e,0f,0r,0x,0y",
sfj:function(a){this.r1=H.e(a,"$isb",[A.P],"$asb")},
sf7:function(a){this.cv=H.e(a,"$isb",[A.d3],"$asb")},
sf8:function(a){this.cw=H.e(a,"$isb",[A.d4],"$asb")},
sf9:function(a){this.cz=H.e(a,"$isb",[A.d5],"$asb")},
sfa:function(a){this.cA=H.e(a,"$isb",[A.d6],"$asb")},
sfb:function(a){this.cB=H.e(a,"$isb",[A.d7],"$asb")},
sfc:function(a){this.cC=H.e(a,"$isb",[A.d8],"$asb")},
eX:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.z=a1
z=new P.bS("")
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
a1.i5(z)
a1.ic(z)
a1.i6(z)
a1.im(z)
a1.io(z)
a1.ig(z)
a1.is(z)
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
z=new P.bS("")
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
v.i9(z)
v.i4(z)
v.i7(z)
v.ia(z)
v.ik(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.ii(z)
v.ij(z)}v.ie(z)
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
p=H.d([],[P.A])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.E(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.i8(z)
v.ih(z)
v.il(z)
v.ip(z)
v.iq(z)
v.ir(z)
v.ib(z)}r=z.a+="// === Main ===\n"
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
o=H.d([],[P.A])
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
n="vec4("+C.a.E(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.bb(x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a1.fr)this.id=H.c(this.y.k(0,"invViewMat"),"$isP")
if(y)this.dy=H.c(this.y.k(0,"objMat"),"$isP")
if(w)this.fr=H.c(this.y.k(0,"viewObjMat"),"$isP")
this.fy=H.c(this.y.k(0,"projViewObjMat"),"$isP")
if(a1.x2)this.k1=H.c(this.y.k(0,"txt2DMat"),"$isbu")
if(a1.y1)this.k2=H.c(this.y.k(0,"txtCubeMat"),"$isP")
if(a1.y2)this.k3=H.c(this.y.k(0,"colorMat"),"$isP")
this.sfj(H.d([],[A.P]))
y=a1.at
if(y>0){this.k4=H.f(this.y.k(0,"bendMatCount"),"$isy")
for(m=0;m<y;++m){x=this.r1
w=this.y
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.o(P.n("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.c(l,"$isP"))}}y=a1.a
if(y!==C.c){this.r2=H.c(this.y.k(0,"emissionClr"),"$isC")
switch(y){case C.c:break
case C.f:break
case C.e:this.rx=H.c(this.y.k(0,"emissionTxt"),"$isS")
this.x1=H.c(this.y.k(0,"nullEmissionTxt"),"$isy")
break
case C.d:this.ry=H.c(this.y.k(0,"emissionTxt"),"$isa8")
this.x1=H.c(this.y.k(0,"nullEmissionTxt"),"$isy")
break}}y=a1.b
if(y!==C.c){this.x2=H.c(this.y.k(0,"ambientClr"),"$isC")
switch(y){case C.c:break
case C.f:break
case C.e:this.y1=H.c(this.y.k(0,"ambientTxt"),"$isS")
this.at=H.c(this.y.k(0,"nullAmbientTxt"),"$isy")
break
case C.d:this.y2=H.c(this.y.k(0,"ambientTxt"),"$isa8")
this.at=H.c(this.y.k(0,"nullAmbientTxt"),"$isy")
break}}y=a1.c
if(y!==C.c){this.an=H.c(this.y.k(0,"diffuseClr"),"$isC")
switch(y){case C.c:break
case C.f:break
case C.e:this.bB=H.c(this.y.k(0,"diffuseTxt"),"$isS")
this.bC=H.c(this.y.k(0,"nullDiffuseTxt"),"$isy")
break
case C.d:this.dX=H.c(this.y.k(0,"diffuseTxt"),"$isa8")
this.bC=H.c(this.y.k(0,"nullDiffuseTxt"),"$isy")
break}}y=a1.d
if(y!==C.c){this.bD=H.c(this.y.k(0,"invDiffuseClr"),"$isC")
switch(y){case C.c:break
case C.f:break
case C.e:this.dY=H.c(this.y.k(0,"invDiffuseTxt"),"$isS")
this.bE=H.c(this.y.k(0,"nullInvDiffuseTxt"),"$isy")
break
case C.d:this.dZ=H.c(this.y.k(0,"invDiffuseTxt"),"$isa8")
this.bE=H.c(this.y.k(0,"nullInvDiffuseTxt"),"$isy")
break}}y=a1.e
if(y!==C.c){this.bH=H.c(this.y.k(0,"shininess"),"$isL")
this.bF=H.c(this.y.k(0,"specularClr"),"$isC")
switch(y){case C.c:break
case C.f:break
case C.e:this.e_=H.c(this.y.k(0,"specularTxt"),"$isS")
this.bG=H.c(this.y.k(0,"nullSpecularTxt"),"$isy")
break
case C.d:this.e0=H.c(this.y.k(0,"specularTxt"),"$isa8")
this.bG=H.c(this.y.k(0,"nullSpecularTxt"),"$isy")
break}}switch(a1.f){case C.c:break
case C.f:break
case C.e:this.e1=H.c(this.y.k(0,"bumpTxt"),"$isS")
this.bI=H.c(this.y.k(0,"nullBumpTxt"),"$isy")
break
case C.d:this.e2=H.c(this.y.k(0,"bumpTxt"),"$isa8")
this.bI=H.c(this.y.k(0,"nullBumpTxt"),"$isy")
break}if(a1.dy){this.e3=H.c(this.y.k(0,"envSampler"),"$isa8")
this.e4=H.c(this.y.k(0,"nullEnvTxt"),"$isy")
y=a1.r
if(y!==C.c){this.bJ=H.c(this.y.k(0,"reflectClr"),"$isC")
switch(y){case C.c:break
case C.f:break
case C.e:this.e5=H.c(this.y.k(0,"reflectTxt"),"$isS")
this.bK=H.c(this.y.k(0,"nullReflectTxt"),"$isy")
break
case C.d:this.e6=H.c(this.y.k(0,"reflectTxt"),"$isa8")
this.bK=H.c(this.y.k(0,"nullReflectTxt"),"$isy")
break}}y=a1.x
if(y!==C.c){this.bL=H.c(this.y.k(0,"refraction"),"$isL")
this.bM=H.c(this.y.k(0,"refractClr"),"$isC")
switch(y){case C.c:break
case C.f:break
case C.e:this.e7=H.c(this.y.k(0,"refractTxt"),"$isS")
this.bN=H.c(this.y.k(0,"nullRefractTxt"),"$isy")
break
case C.d:this.e8=H.c(this.y.k(0,"refractTxt"),"$isa8")
this.bN=H.c(this.y.k(0,"nullRefractTxt"),"$isy")
break}}}y=a1.y
if(y!==C.c){this.bO=H.c(this.y.k(0,"alpha"),"$isL")
switch(y){case C.c:break
case C.f:break
case C.e:this.e9=H.c(this.y.k(0,"alphaTxt"),"$isS")
this.bP=H.c(this.y.k(0,"nullAlphaTxt"),"$isy")
break
case C.d:this.ea=H.c(this.y.k(0,"alphaTxt"),"$isa8")
this.bP=H.c(this.y.k(0,"nullAlphaTxt"),"$isy")
break}}this.sf7(H.d([],[A.d3]))
this.sf8(H.d([],[A.d4]))
this.sf9(H.d([],[A.d5]))
this.sfa(H.d([],[A.d6]))
this.sfb(H.d([],[A.d7]))
this.sfc(H.d([],[A.d8]))
if(a1.k2){y=a1.z
if(y>0){this.eb=H.f(this.y.k(0,"dirLightCount"),"$isy")
for(m=0;m<y;++m){x=this.y
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isC")
x=this.y
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isC")
x=this.cv;(x&&C.a).h(x,new A.d3(m,l,k))}}y=a1.Q
if(y>0){this.ec=H.f(this.y.k(0,"pntLightCount"),"$isy")
for(m=0;m<y;++m){x=this.y
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isC")
x=this.y
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isC")
x=this.y
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$isC")
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
x=this.cw;(x&&C.a).h(x,new A.d4(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.ed=H.f(this.y.k(0,"spotLightCount"),"$isy")
for(m=0;m<y;++m){x=this.y
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isC")
x=this.y
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isC")
x=this.y
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$isC")
x=this.y
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$isC")
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
x=this.cz;(x&&C.a).h(x,new A.d5(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.ee=H.f(this.y.k(0,"txtDirLightCount"),"$isy")
for(m=0;m<y;++m){x=this.y
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isC")
x=this.y
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isC")
x=this.y
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$isC")
x=this.y
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$isC")
x=this.y
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(h,"$isC")
x=this.y
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(g,"$isy")
x=this.y
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(f,"$isS")
x=this.cA;(x&&C.a).h(x,new A.d6(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.ef=H.f(this.y.k(0,"txtPntLightCount"),"$isy")
for(m=0;m<y;++m){x=this.y
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isC")
x=this.y
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isC")
x=this.y
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$isbu")
x=this.y
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$isC")
x=this.y
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(h,"$isy")
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
H.c(d,"$isa8")
x=this.cB;(x&&C.a).h(x,new A.d7(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.eg=H.f(this.y.k(0,"txtSpotLightCount"),"$isy")
for(m=0;m<y;++m){x=this.y
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(l,"$isC")
x=this.y
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(k,"$isC")
x=this.y
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(j,"$isC")
x=this.y
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(i,"$isC")
x=this.y
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(h,"$isC")
x=this.y
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(g,"$isy")
x=this.y
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."))
H.c(f,"$isC")
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
H.c(a0,"$isS")
x=this.cC;(x&&C.a).h(x,new A.d8(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
ac:function(a,b,c){C.b.C(b.a,b.d,1)},
ag:function(a,b,c){C.b.C(b.a,b.d,1)},
m:{
hO:function(a,b){var z,y
z=a.an
y=new A.e3(b,z)
y.aZ(b,z)
y.eX(a,b)
return y}}},hR:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,at,an,bB",
i5:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.at+"];\n"
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
ic:function(a){var z
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
i6:function(a){var z
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
im:function(a){var z,y
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
io:function(a){var z,y
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
ig:function(a){var z
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
is:function(a){var z
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
aC:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.h(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.j.cY(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
i9:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aC(a,z,"emission")
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
i4:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aC(a,z,"ambient")
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
i7:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aC(a,z,"diffuse")
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
ia:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aC(a,z,"invDiffuse")
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
ik:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aC(a,z,"specular")
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
ie:function(a){var z,y
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
ii:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aC(a,z,"reflect")
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
ij:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aC(a,z,"refract")
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
i8:function(a){var z,y
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
ih:function(a){var z,y
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
il:function(a){var z,y
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
ip:function(a){var z,y,x
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
iq:function(a){var z,y,x
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
ir:function(a){var z,y,x
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
ib:function(a){var z
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
i:function(a){return this.an}},d3:{"^":"a;a,b,c"},d6:{"^":"a;a,b,c,d,e,f,r,x"},d4:{"^":"a;a,b,c,d,e,f,r"},d7:{"^":"a;a,b,c,d,e,f,r,x,y,z"},d5:{"^":"a;a,b,c,d,e,f,r,x,y,z"},d8:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},e8:{"^":"aY;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,a,b,0c,0d,0e,0f,0r,0x,0y"},i1:{"^":"a;a,b,c,d,e,f",
i:function(a){return this.e},
m:{
e9:function(a){var z,y,x,w,v,u,t
z=a!==C.c
y=a===C.e
x=a===C.d
w="Normal_"+C.h.i(a.a)
v=$.$get$Y()
u=$.$get$as()
u=v.a|u.a
t=new Z.ai(u)
if(z)t=new Z.ai(u|$.$get$ar().a)
if(y)t=new Z.ai(t.a|$.$get$ac().a)
return new A.i1(a,z,y,x,w,x?new Z.ai(t.a|$.$get$at().a):t)}}},aY:{"^":"cw;",
aZ:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
bb:function(a,b){var z,y,x
this.c=a
this.d=b
this.e=this.df(a,35633)
this.f=this.df(this.d,35632)
z=this.a
y=z.createProgram()
this.r=y
C.b.dF(z,y,this.e)
C.b.dF(z,this.r,this.f)
C.b.j_(z,this.r)
if(!H.fr(C.b.bV(z,this.r,35714))){x=C.b.eI(z,this.r)
C.b.iH(z,this.r)
H.o(P.n("Failed to link shader: "+H.i(x)))}this.hG()
this.hI()},
H:function(a){C.b.aY(a.a,this.r)
this.x.iO()},
df:function(a,b){var z,y,x
z=this.a
y=C.b.iF(z,b)
C.b.eQ(z,y,a)
C.b.iA(z,y)
if(!H.fr(C.b.eL(z,y,35713))){x=C.b.eK(z,y)
C.b.iI(z,y)
throw H.j(P.n("Error compiling shader '"+H.i(y)+"': "+H.i(x)))}return y},
hG:function(){var z,y,x,w,v,u
z=H.d([],[A.ds])
y=this.a
x=H.a3(C.b.bV(y,this.r,35721))
if(typeof x!=="number")return H.D(x)
w=0
for(;w<x;++w){v=C.b.eD(y,this.r,w)
u=C.b.eF(y,this.r,v.name)
C.a.h(z,new A.ds(y,v.name,u))}this.x=new A.fK(z)},
hI:function(){var z,y,x,w,v,u
z=H.d([],[A.a6])
y=this.a
x=H.a3(C.b.bV(y,this.r,35718))
if(typeof x!=="number")return H.D(x)
w=0
for(;w<x;++w){v=C.b.eE(y,this.r,w)
u=C.b.eM(y,this.r,v.name)
C.a.h(z,this.iG(v.type,v.size,v.name,u))}this.y=new A.j9(z)},
aN:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.y(z,y,b,c)
else return A.d2(z,y,b,a,c)},
ft:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.S(z,y,b,c)
else return A.d2(z,y,b,a,c)},
fu:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.a8(z,y,b,c)
else return A.d2(z,y,b,a,c)},
bx:function(a,b){return new P.f5(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
iG:function(a,b,c,d){switch(a){case 5120:return this.aN(b,c,d)
case 5121:return this.aN(b,c,d)
case 5122:return this.aN(b,c,d)
case 5123:return this.aN(b,c,d)
case 5124:return this.aN(b,c,d)
case 5125:return this.aN(b,c,d)
case 5126:return new A.L(this.a,this.r,c,d)
case 35664:return new A.aB(this.a,this.r,c,d)
case 35665:return new A.C(this.a,this.r,c,d)
case 35666:return new A.eP(this.a,this.r,c,d)
case 35667:return new A.j6(this.a,this.r,c,d)
case 35668:return new A.j7(this.a,this.r,c,d)
case 35669:return new A.j8(this.a,this.r,c,d)
case 35674:return new A.jb(this.a,this.r,c,d)
case 35675:return new A.bu(this.a,this.r,c,d)
case 35676:return new A.P(this.a,this.r,c,d)
case 35678:return this.ft(b,c,d)
case 35680:return this.fu(b,c,d)
case 35670:throw H.j(this.bx("BOOL",c))
case 35671:throw H.j(this.bx("BOOL_VEC2",c))
case 35672:throw H.j(this.bx("BOOL_VEC3",c))
case 35673:throw H.j(this.bx("BOOL_VEC4",c))
default:throw H.j(P.n("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}},c_:{"^":"a;a,b",
i:function(a){return this.b}},en:{"^":"aY;0z,0Q,0ch,0cx,0cy,0db,a,b,0c,0d,0e,0f,0r,0x,0y"},eu:{"^":"aY;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,a,b,0c,0d,0e,0f,0r,0x,0y",
si1:function(a){this.cx=H.e(a,"$isb",[A.S],"$asb")},
sfp:function(a){this.cy=H.e(a,"$isb",[A.P],"$asb")},
shM:function(a){this.db=H.e(a,"$isb",[A.aB],"$asb")},
shN:function(a){this.dx=H.e(a,"$isb",[A.aB],"$asb")},
sfw:function(a){this.dy=H.e(a,"$isb",[A.aB],"$asb")},
sfz:function(a){this.fr=H.e(a,"$isb",[A.aB],"$asb")},
sfJ:function(a){this.fx=H.e(a,"$isb",[A.y],"$asb")},
f0:function(a,b){var z,y,x,w,v
this.bb("attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.iU(a))
this.z=this.x.j(0,"posAttr")
this.Q=H.c(this.y.k(0,"txtCount"),"$isy")
this.ch=H.c(this.y.k(0,"backClr"),"$iseP")
this.si1(H.d([],[A.S]))
this.sfp(H.d([],[A.P]))
z=[A.aB]
this.shM(H.d([],z))
this.shN(H.d([],z))
this.sfw(H.d([],z))
this.sfz(H.d([],z))
this.sfJ(H.d([],[A.y]))
for(y=0;y<a;++y){z=this.cx
x=this.y
w="txt"+y
v=x.j(0,w)
if(v==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.c(v,"$isS"))
z=this.cy
x=this.y
w="clrMat"+y
v=x.j(0,w)
if(v==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.c(v,"$isP"))
z=this.db
x=this.y
w="srcLoc"+y
v=x.j(0,w)
if(v==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.c(v,"$isaB"))
z=this.dx
x=this.y
w="srcSize"+y
v=x.j(0,w)
if(v==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.c(v,"$isaB"))
z=this.dy
x=this.y
w="destLoc"+y
v=x.j(0,w)
if(v==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.c(v,"$isaB"))
z=this.fr
x=this.y
w="destSize"+y
v=x.j(0,w)
if(v==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.c(v,"$isaB"))
z=this.fx
x=this.y
w="flip"+y
v=x.j(0,w)
if(v==null)H.o(P.n("Required uniform value, "+w+", was not defined or used in shader."));(z&&C.a).h(z,H.c(v,"$isy"))}},
m:{
iU:function(a){var z,y
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
iT:function(a,b){var z,y
z="TextureLayout_"+a
y=new A.eu(b,z)
y.aZ(b,z)
y.f0(a,b)
return y}}},a6:{"^":"a;"},j9:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
k:function(a,b){var z=this.j(0,b)
if(z==null)throw H.j(P.n("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.M()},
iR:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.v)(z),++w)x+=z[w].i(0)+a
return x},
M:function(){return this.iR("\n")}},y:{"^":"a6;a,b,c,d",
i:function(a){return"Uniform1i: "+H.i(this.c)}},j6:{"^":"a6;a,b,c,d",
i:function(a){return"Uniform2i: "+H.i(this.c)}},j7:{"^":"a6;a,b,c,d",
i:function(a){return"Uniform3i: "+H.i(this.c)}},j8:{"^":"a6;a,b,c,d",
i:function(a){return"Uniform4i: "+H.i(this.c)}},j5:{"^":"a6;0e,0f,a,b,c,d",
si2:function(a){this.e=H.e(a,"$isb",[P.u],"$asb")},
i:function(a){return"Uniform1iv: "+H.i(this.c)},
m:{
d2:function(a,b,c,d,e){var z=new A.j5(a,b,c,e)
z.f=d
z.si2(P.hF(d,0,!1,P.u))
return z}}},L:{"^":"a6;a,b,c,d",
i:function(a){return"Uniform1f: "+H.i(this.c)}},aB:{"^":"a6;a,b,c,d",
i:function(a){return"Uniform2f: "+H.i(this.c)}},C:{"^":"a6;a,b,c,d",
i:function(a){return"Uniform3f: "+H.i(this.c)}},eP:{"^":"a6;a,b,c,d",
i:function(a){return"Uniform4f: "+H.i(this.c)}},jb:{"^":"a6;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}},bu:{"^":"a6;a,b,c,d",
W:function(a){var z=new Float32Array(H.b3(H.e(a,"$isb",[P.q],"$asb")))
C.b.ex(this.a,this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.i(this.c)}},P:{"^":"a6;a,b,c,d",
W:function(a){var z=new Float32Array(H.b3(H.e(a,"$isb",[P.q],"$asb")))
C.b.cR(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.i(this.c)}},S:{"^":"a6;a,b,c,d",
eP:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)C.b.C(y,x,0)
else C.b.C(y,x,a.a)},
i:function(a){return"UniformSampler2D: "+H.i(this.c)}},a8:{"^":"a6;a,b,c,d",
cW:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)C.b.C(y,x,0)
else C.b.C(y,x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}}],["","",,F,{"^":"",
cj:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bA:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.E(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.E(t+h,s+f,r+g)
z.b=q
p=new V.E(t-h,s-f,r-g)
z.c=p
o=new V.E(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cj(y)
k=F.cj(z.b)
j=F.fD(d,e,new F.kg(z,F.cj(z.c),F.cj(z.d),k,l,c),b)
if(j!=null)a.cI(j)},
kY:function(a,b,c,d){return F.kx(c,a,d,b,new F.kZ())},
kx:function(a,b,c,d,e){var z=F.fD(a,b,new F.ky(H.l(e,{func:1,ret:V.R,args:[P.q]}),d,b,c),null)
if(z==null)return
z.am()
z.j4(new F.jq(),new F.i0())
return z},
fD:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.ah,P.q,P.q]})
if(a<1)return
if(b<1)return
z=F.cU()
y=H.d([],[F.ah])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cg(null,null,new V.aa(u,0,0,1),null,null,new V.a1(w,1),null,null,0)
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
t=F.cg(null,null,new V.aa(o,n,m,1),null,null,new V.a1(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cs(d))}}z.d.iu(a+1,b+1,y)
return z},
kg:{"^":"t:13;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cH(z.b,b).cH(z.d.cH(z.c,b),c)
a.sad(0,new V.R(y.a,y.b,y.c))
a.sjv(y.v(0,Math.sqrt(y.D(y))))
z=1-b
x=1-c
x=new V.bp(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.B(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.a1()}}},
kZ:{"^":"t:31;",
$1:function(a){return new V.R(Math.cos(a),Math.sin(a),0)}},
ky:{"^":"t:13;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dp(y.$1(z),x)
x=J.dp(y.$1(z+3.141592653589793/this.c),x).O(0,w)
x=new V.E(x.a,x.b,x.c)
v=x.v(0,Math.sqrt(x.D(x)))
y=$.eW
if(y==null){y=new V.E(1,0,0)
$.eW=y
u=y}else u=y
y=v.aF(!J.B(v,u)?V.f_():u)
t=y.v(0,Math.sqrt(y.D(y)))
y=t.aF(v)
u=y.v(0,Math.sqrt(y.D(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.u(0,y*x)
x=t.u(0,r*x)
a.sad(0,w.G(0,new V.R(y.a-x.a,y.b-x.b,y.c-x.c)))}},
a0:{"^":"a;0a,0b,0c,0d,0e",
b8:function(){if(!this.gb9()){C.a.F(this.a.a.d.b,this)
this.a.a.a1()}this.ca()
this.cb()
this.hw()},
cf:function(a){this.a=a
C.a.h(a.d.b,this)},
cg:function(a){this.b=a
C.a.h(a.d.c,this)},
hF:function(a){this.c=a
C.a.h(a.d.d,this)},
ca:function(){var z=this.a
if(z!=null){C.a.F(z.d.b,this)
this.a=null}},
cb:function(){var z=this.b
if(z!=null){C.a.F(z.d.c,this)
this.b=null}},
hw:function(){var z=this.c
if(z!=null){C.a.F(z.d.d,this)
this.c=null}},
gb9:function(){return this.a==null||this.b==null||this.c==null},
fi:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.bv()
if(y!=null)v=v.G(0,y)
if(x!=null)v=v.G(0,x)
if(w!=null)v=v.G(0,w)
if(v.ej())return
return v.v(0,Math.sqrt(v.D(v)))},
fn:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.O(0,y)
z=new V.E(z.a,z.b,z.c)
v=z.v(0,Math.sqrt(z.D(z)))
z=w.O(0,y)
z=new V.E(z.a,z.b,z.c)
z=v.aF(z.v(0,Math.sqrt(z.D(z))))
return z.v(0,Math.sqrt(z.D(z)))},
cq:function(){if(this.d!=null)return!0
var z=this.fi()
if(z==null){z=this.fn()
if(z==null)return!1}this.d=z
this.a.a.a1()
return!0},
fh:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=V.bv()
if(y!=null)v=v.G(0,y)
if(x!=null)v=v.G(0,x)
if(w!=null)v=v.G(0,w)
if(v.ej())return
return v.v(0,Math.sqrt(v.D(v)))},
fm:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.m.$2(n,0)){z=r.O(0,u)
z=new V.E(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.D(z)))
if(o.a-p.a<0)m=m.P(0)}else{l=(z-q.b)/n
z=r.O(0,u).u(0,l).G(0,u).O(0,x)
z=new V.E(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.D(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.P(0)}z=this.d
if(z!=null){k=z.v(0,Math.sqrt(z.D(z)))
z=k.aF(m)
z=z.v(0,Math.sqrt(z.D(z))).aF(k)
m=z.v(0,Math.sqrt(z.D(z)))}return m},
cp:function(){if(this.e!=null)return!0
var z=this.fh()
if(z==null){z=this.fm()
if(z==null)return!1}this.e=z
this.a.a.a1()
return!0},
giz:function(){if(J.B(this.a,this.b))return!0
if(J.B(this.b,this.c))return!0
if(J.B(this.c,this.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
A:function(a){var z,y
if(this.gb9())return a+"disposed"
z=a+C.j.ak(J.ae(this.a.e),0)+", "+C.j.ak(J.ae(this.b.e),0)+", "+C.j.ak(J.ae(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
M:function(){return this.A("")},
m:{
bf:function(a,b,c){var z,y,x
z=new F.a0()
y=a.a
if(y==null)H.o(P.n("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.o(P.n("May not create a face with vertices attached to different shapes."))
z.cf(a)
z.cg(b)
z.hF(c)
C.a.h(z.a.a.d.b,z)
z.a.a.a1()
return z}}},
hf:{"^":"a;"},
iF:{"^":"hf;",
bd:function(a,b,c){var z,y
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
bk:{"^":"a;0a,0b",
b8:function(){if(!this.gb9()){C.a.F(this.a.a.c.b,this)
this.a.a.a1()}this.ca()
this.cb()},
cf:function(a){this.a=a
C.a.h(a.c.b,this)},
cg:function(a){this.b=a
C.a.h(a.c.c,this)},
ca:function(){var z=this.a
if(z!=null){C.a.F(z.c.b,this)
this.a=null}},
cb:function(){var z=this.b
if(z!=null){C.a.F(z.c.c,this)
this.b=null}},
gb9:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
A:function(a){if(this.gb9())return a+"disposed"
return a+C.j.ak(J.ae(this.a.e),0)+", "+C.j.ak(J.ae(this.b.e),0)},
M:function(){return this.A("")},
m:{
hy:function(a,b){var z,y,x
z=new F.bk()
y=a.a
if(y==null)H.o(P.n("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.o(P.n("May not create a line with vertices attached to different shapes."))
z.cf(a)
z.cg(b)
C.a.h(z.a.a.c.b,z)
z.a.a.a1()
return z}}},
hz:{"^":"a;"},
j4:{"^":"hz;",
bd:function(a,b,c){var z,y
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
bQ:{"^":"a;0a",
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
A:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.j.ak(J.ae(z.e),0)},
M:function(){return this.A("")}},
em:{"^":"a;0a,0b,0c,0d,0e",
gl:function(){var z=this.e
if(z==null){z=D.z()
this.e=z}return z},
cI:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.t()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.v)(z),++w){v=z[w]
this.a.h(0,v.iE())}this.a.t()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.v)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.t()
s=s.e
if(typeof s!=="number")return s.G()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.bQ()
if(r.a==null)H.o(P.n("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.w(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.v)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.t()
s=s.e
if(typeof s!=="number")return s.G()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.t()
t=t.e
if(typeof t!=="number")return t.G()
t+=y
s=s.c
if(t>=s.length)return H.h(s,t)
o=s[t]
t=this.c.a
t.a.h(0,p)
t.a.h(0,o)
F.hy(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.v)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.t()
s=s.e
if(typeof s!=="number")return s.G()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.t()
t=t.e
if(typeof t!=="number")return t.G()
t+=y
s=s.c
if(t>=s.length)return H.h(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.t()
s=s.e
if(typeof s!=="number")return s.G()
s+=y
t=t.c
if(s>=t.length)return H.h(t,s)
m=t[s]
s=this.d.a
s.a.h(0,p)
s.a.h(0,o)
s.a.h(0,m)
F.bf(p,o,m)}z=this.e
if(!(z==null))z.aw()},
am:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.am()||!1
if(!this.a.am())y=!1
z=this.e
if(!(z==null))z.aw()
return y},
aR:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aR()||!1
if(!this.a.aR())y=!1
z=this.e
if(!(z==null))z.aw()
return y},
bA:function(){var z=this.e
if(!(z==null))++z.d
this.a.bA()
z=this.e
if(!(z==null))z.aw()
return!0},
j4:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.d(z.slice(0),[H.r(z,0)])
for(z=[F.ah];y.length!==0;){x=C.a.giQ(y)
C.a.jk(y,0)
if(x!=null){w=H.d([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.v)(y),++u){t=y[u]
if(t!=null&&a.bd(0,x,t)){C.a.h(w,t)
C.a.F(y,t)}}if(w.length>1)b.cI(w)}}this.a.t()
this.c.cN()
this.d.cN()
this.b.jl()
this.c.cO(new F.j4())
this.d.cO(new F.iF())
z=this.e
if(!(z==null))z.aw()},
b5:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$Y()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$as().a)!==0)++w
if((x&$.$get$ar().a)!==0)++w
if((x&$.$get$ac().a)!==0)++w
if((x&$.$get$at().a)!==0)++w
if((x&$.$get$bw().a)!==0)++w
if((x&$.$get$bx().a)!==0)++w
if((x&$.$get$b1().a)!==0)++w
if((x&$.$get$aK().a)!==0)++w
v=b.gcX(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.q
t=H.d(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.d(y,[Z.dw])
for(r=0,q=0;q<w;++q){p=b.iw(q)
o=p.gcX(p)
C.a.aa(s,q,new Z.dw(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.h(y,n)
m=y[n].j0(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.aa(t,l,m[k]);++l}}r+=o}H.e(t,"$isb",[x],"$asb")
y=a.a
j=y.createBuffer()
C.b.aq(y,34962,j)
C.b.dI(y,34962,new Float32Array(H.b3(t)),35044)
C.b.aq(y,34962,null)
i=new Z.bc(new Z.f3(34962,j),s,b)
i.sfP(H.d([],[Z.bK]))
if(this.b.b.length!==0){x=P.u
h=H.d([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.t()
C.a.h(h,g.e)}f=Z.d9(y,34963,H.e(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bK(0,h.length,f))}if(this.c.b.length!==0){x=P.u
h=H.d([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.t()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.t()
C.a.h(h,g.e)}f=Z.d9(y,34963,H.e(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bK(1,h.length,f))}if(this.d.b.length!==0){x=P.u
h=H.d([],[x])
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
C.a.h(h,g.e)}f=Z.d9(y,34963,H.e(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bK(4,h.length,f))}return i},
i:function(a){var z=H.d([],[P.A])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.A("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.A("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.A("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.A("   "))}return C.a.E(z,"\n")},
ao:function(a){var z=this.e
if(!(z==null))z.w(a)},
a1:function(){return this.ao(null)},
$isli:1,
m:{
cU:function(){var z,y
z=new F.em()
y=new F.jl(z)
y.b=!1
y.si3(H.d([],[F.ah]))
z.a=y
y=new F.iA(z)
y.sc7(H.d([],[F.bQ]))
z.b=y
y=new F.iz(z)
y.sfQ(H.d([],[F.bk]))
z.c=y
y=new F.iy(z)
y.sfE(H.d([],[F.a0]))
z.d=y
z.e=null
return z}}},
iy:{"^":"a;a,0b",
sfE:function(a){this.b=H.e(a,"$isb",[F.a0],"$asb")},
it:function(a){var z,y,x,w,v,u
H.e(a,"$isb",[F.ah],"$asb")
z=H.d([],[F.a0])
y=a[0]
for(x=this.a,w=2;w<4;++w){v=a[w-1]
u=a[w]
x.a.h(0,y)
x.a.h(0,v)
x.a.h(0,u)
C.a.h(z,F.bf(y,v,u))}return z},
iu:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.e(c,"$isb",[F.ah],"$asb")
z=H.d([],[F.a0])
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
C.a.h(z,F.bf(q,p,n))
y.a.h(0,q)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bf(q,n,m))}else{r.h(0,p)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bf(p,n,m))
y.a.h(0,p)
y.a.h(0,m)
y.a.h(0,q)
C.a.h(z,F.bf(p,m,q))}t=!t}v=!v}return z},
gn:function(a){return this.b.length},
cO:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.h(x,y)
w=x[y]
for(x=w.d,v=x.b.length+x.c.length+x.d.length-1;v>=0;--v){u=w.d.j(0,v)
for(t=v-1;t>=0;--t){s=w.d.j(0,t)
if(a.bd(0,u,s)){u.b8()
break}}}}},
cN:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
x=y[z]
y=x.giz()
if(y)x.b8()}},
am:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.v)(z),++w)if(!z[w].cq())x=!1
return x},
aR:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.v)(z),++w)if(!z[w].cp())x=!1
return x},
i:function(a){return this.M()},
A:function(a){var z,y,x,w
z=H.d([],[P.A])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.v)(y),++w)C.a.h(z,y[w].A(a))
return C.a.E(z,"\n")},
M:function(){return this.A("")}},
iz:{"^":"a;a,0b",
sfQ:function(a){this.b=H.e(a,"$isb",[F.bk],"$asb")},
gn:function(a){return this.b.length},
cO:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.h(x,y)
w=x[y]
for(x=w.c,v=x.b.length+x.c.length-1;v>=0;--v){u=w.c.j(0,v)
for(t=v-1;t>=0;--t){s=w.c.j(0,t)
if(a.bd(0,u,s)){u.b8()
break}}}}},
cN:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
x=y[z]
y=J.B(x.a,x.b)
if(y)x.b8()}},
i:function(a){return this.M()},
A:function(a){var z,y,x,w
z=H.d([],[P.A])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.h(w,x)
C.a.h(z,w[x].A(a+(""+x+". ")))}return C.a.E(z,"\n")},
M:function(){return this.A("")}},
iA:{"^":"a;a,0b",
sc7:function(a){this.b=H.e(a,"$isb",[F.bQ],"$asb")},
gn:function(a){return this.b.length},
jl:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
y=y[z]
x=y.a
if(x.b.b.length>1){if(x!=null){C.a.F(x.a.b.b,y)
x=y.a.a.e
if(!(x==null))x.w(null)}x=y.a
if(x!=null){C.a.F(x.b.b,y)
y.a=null}}}},
i:function(a){return this.M()},
A:function(a){var z,y,x,w
z=H.d([],[P.A])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.v)(y),++w)C.a.h(z,y[w].A(a))
return C.a.E(z,"\n")},
M:function(){return this.A("")}},
ah:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cs:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cg(this.cx,x,u,z,y,w,v,a,t)},
iE:function(){return this.cs(null)},
sad:function(a,b){var z
if(!J.B(this.f,b)){this.f=b
z=this.a
if(z!=null)z.a1()}},
sjv:function(a){var z
if(!J.B(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a1()}},
j0:function(a){var z,y
if(a.q(0,$.$get$Y())){z=this.f
y=[P.q]
if(z==null)return H.d([0,0,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(a.q(0,$.$get$as())){z=this.r
y=[P.q]
if(z==null)return H.d([0,1,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(a.q(0,$.$get$ar())){z=this.x
y=[P.q]
if(z==null)return H.d([0,0,1],y)
else return H.d([z.a,z.b,z.c],y)}else if(a.q(0,$.$get$ac())){z=this.y
y=[P.q]
if(z==null)return H.d([0,0],y)
else return H.d([z.a,z.b],y)}else if(a.q(0,$.$get$at())){z=this.z
y=[P.q]
if(z==null)return H.d([0,0,0],y)
else return H.d([z.a,z.b,z.c],y)}else if(a.q(0,$.$get$bw())){z=this.Q
y=[P.q]
if(z==null)return H.d([1,1,1],y)
else return H.d([z.a,z.b,z.c],y)}else if(a.q(0,$.$get$bx())){z=this.Q
y=[P.q]
if(z==null)return H.d([1,1,1,1],y)
else return H.d([z.a,z.b,z.c,z.d],y)}else if(a.q(0,$.$get$b1()))return H.d([this.ch],[P.q])
else if(a.q(0,$.$get$aK())){z=this.cx
y=[P.q]
if(z==null)return H.d([-1,-1,-1,-1],y)
else return H.d([z.a,z.b,z.c,z.d],y)}else return H.d([],[P.q])},
cq:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bv()
this.d.ai(0,new F.jv(z))
z=z.a
this.r=z.v(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.a1()
z=this.a.e
if(!(z==null))z.aw()}return!0},
cp:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bv()
this.d.ai(0,new F.ju(z))
z=z.a
this.x=z.v(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.a1()
z=this.a.e
if(!(z==null))z.aw()}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
A:function(a){var z,y,x
z=H.d([],[P.A])
C.a.h(z,C.j.ak(J.ae(this.e),0))
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
C.a.h(z,V.H(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.E(z,", ")
return a+"{"+x+"}"},
M:function(){return this.A("")},
m:{
cg:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ah()
y=new F.jt(z)
y.sc7(H.d([],[F.bQ]))
z.b=y
y=new F.jp(z)
x=[F.bk]
y.sfR(H.d([],x))
y.sfS(H.d([],x))
z.c=y
y=new F.jm(z)
x=[F.a0]
y.sfF(H.d([],x))
y.sfG(H.d([],x))
y.sfH(H.d([],x))
z.d=y
h=$.$get$f0()
z.e=0
y=$.$get$Y()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$as().a)!==0?e:null
z.x=(x&$.$get$ar().a)!==0?b:null
z.y=(x&$.$get$ac().a)!==0?f:null
z.z=(x&$.$get$at().a)!==0?g:null
z.Q=(x&$.$get$f1().a)!==0?c:null
z.ch=(x&$.$get$b1().a)!==0?i:0
z.cx=(x&$.$get$aK().a)!==0?a:null
return z}}},
jv:{"^":"t:5;a",
$1:function(a){var z,y
H.f(a,"$isa0")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.G(0,z)}}},
ju:{"^":"t:5;a",
$1:function(a){var z,y
H.f(a,"$isa0")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.G(0,z)}}},
jl:{"^":"a;a,0b,0c",
si3:function(a){this.c=H.e(a,"$isb",[F.ah],"$asb")},
t:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.h(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z,y
z=b.a
if(z!=null){if(z===this.a)return!1
throw H.j(P.n("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
y=this.a
b.a=y
C.a.h(z,b)
y.a1()
return!0},
iv:function(a,b,c,d,e,f,g,h,i){var z=F.cg(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
by:function(a,b,c,d,e,f){return this.iv(a,null,b,c,null,d,e,f,0)},
gn:function(a){return this.c.length},
am:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.v)(z),++x)z[x].cq()
return!0},
aR:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.v)(z),++x)z[x].cp()
return!0},
bA:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.v)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.v(0,Math.sqrt(u*u+t*t+s*s))
if(!J.B(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.w(null)}}}}return!0},
i:function(a){return this.M()},
A:function(a){var z,y,x,w
this.t()
z=H.d([],[P.A])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.v)(y),++w)C.a.h(z,y[w].A(a))
return C.a.E(z,"\n")},
M:function(){return this.A("")}},
jm:{"^":"a;a,0b,0c,0d",
sfF:function(a){this.b=H.e(a,"$isb",[F.a0],"$asb")},
sfG:function(a){this.c=H.e(a,"$isb",[F.a0],"$asb")},
sfH:function(a){this.d=H.e(a,"$isb",[F.a0],"$asb")},
gn:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var z,y,x
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
ai:function(a,b){H.l(b,{func:1,ret:-1,args:[F.a0]})
C.a.ai(this.b,b)
C.a.ai(this.c,new F.jn(this,b))
C.a.ai(this.d,new F.jo(this,b))},
i:function(a){return this.M()},
A:function(a){var z,y,x,w
z=H.d([],[P.A])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.v)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.v)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.v)(y),++w)C.a.h(z,y[w].A(a))
return C.a.E(z,"\n")},
M:function(){return this.A("")}},
jn:{"^":"t:5;a,b",
$1:function(a){H.f(a,"$isa0")
if(!J.B(a.a,this.a))this.b.$1(a)}},
jo:{"^":"t:5;a,b",
$1:function(a){var z
H.f(a,"$isa0")
z=this.a
if(!J.B(a.a,z)&&!J.B(a.b,z))this.b.$1(a)}},
jp:{"^":"a;a,0b,0c",
sfR:function(a){this.b=H.e(a,"$isb",[F.bk],"$asb")},
sfS:function(a){this.c=H.e(a,"$isb",[F.bk],"$asb")},
gn:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.h(z,x)
return z[x]}else{if(b<0)return H.h(z,b)
return z[b]}},
i:function(a){return this.M()},
A:function(a){var z,y,x,w
z=H.d([],[P.A])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.v)(y),++w)C.a.h(z,y[w].A(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.v)(y),++w)C.a.h(z,y[w].A(a))
return C.a.E(z,"\n")},
M:function(){return this.A("")}},
jr:{"^":"a;"},
jq:{"^":"jr;",
bd:function(a,b,c){return J.B(b.f,c.f)}},
js:{"^":"a;"},
i0:{"^":"js;",
cI:function(a){var z,y,x,w,v,u,t,s,r
H.e(a,"$isb",[F.ah],"$asb")
z=V.bv()
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.E(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.v(0,Math.sqrt(z.D(z)))
for(y=a.length,w=z==null,x=0;x<a.length;a.length===y||(0,H.v)(a),++x){v=a[x]
if(w)u=null
else{t=z.a
s=z.b
r=z.c
u=z.v(0,Math.sqrt(t*t+s*s+r*r))}if(!J.B(v.r,u)){v.r=u
t=v.a
if(t!=null){t=t.e
if(!(t==null))t.w(null)}}}return}},
jt:{"^":"a;a,0b",
sc7:function(a){this.b=H.e(a,"$isb",[F.bQ],"$asb")},
gn:function(a){return this.b.length},
i:function(a){return this.M()},
A:function(a){var z,y,x,w
z=H.d([],[P.A])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.v)(y),++w)C.a.h(z,y[w].A(a))
return C.a.E(z,"\n")},
M:function(){return this.A("")}}}],["","",,O,{"^":"",h2:{"^":"aI;0a,0b,0c,0d,0e,0f,0a3:r<",
sa3:function(a){this.r=H.f(a,"$isab")},
gl:function(){var z=this.r
if(z==null){z=D.z()
this.r=z}return z},
I:function(a){var z=this.r
if(!(z==null))z.w(a)},
a8:function(){return this.I(null)},
sdQ:function(a){var z=this.b
if(z==null?a!=null:z!==a){this.b=a
this.a8()}},
sdK:function(a){var z=this.c
if(z==null?a!=null:z!==a){this.c=a
this.a8()}},
sdJ:function(a){var z=a==null?V.aw():a
this.f=z
if(!J.B(z,a)){this.f=a
this.a8()}},
a9:function(a){},
K:function(a,b){H.e(a,"$isb",[T.aJ],"$asb")
if(b!=null)if(!C.a.as(a,b)){b.a=a.length
C.a.h(a,b)}},
bi:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.f(a.fr.j(0,"Distort"),"$isdL")
if(z==null){y=a.a
z=new A.dL(y,"Distort")
z.aZ(y,"Distort")
z.bb($.h4,$.h3)
z.z=z.x.j(0,"posAttr")
z.Q=z.x.j(0,"txt2DAttr")
z.ch=H.c(z.y.k(0,"projViewObjMat"),"$isP")
z.cx=H.c(z.y.k(0,"colorTxt2DMat"),"$isbu")
z.cy=H.c(z.y.k(0,"bumpTxt2DMat"),"$isbu")
z.db=H.c(z.y.k(0,"colorTxt"),"$isS")
z.dx=H.c(z.y.k(0,"bumpTxt"),"$isS")
z.dy=H.c(z.y.k(0,"nullColorTxt"),"$isy")
z.fr=H.c(z.y.k(0,"nullBumpTxt"),"$isy")
z.fx=H.c(z.y.k(0,"bumpMat"),"$isP")
a.b3(z)}this.a=z}if(b.e==null){y=b.d
x=$.$get$Y()
w=$.$get$ac()
w=y.b5(new Z.bT(a.a),new Z.ai(x.a|w.a))
w.a0($.$get$Y()).e=this.a.z.c
w.a0($.$get$ac()).e=this.a.Q.c
b.e=w}v=H.d([],[T.aJ])
this.K(v,this.b)
this.K(v,this.c)
for(u=0;u<v.length;++u)v[u].H(a)
y=this.a
y.H(a)
x=this.b
y.ac(y.db,y.dy,x)
x=this.c
y.ac(y.dx,y.fr,x)
x=a.gcL()
w=y.ch
w.toString
w.W(x.S(0,!0))
x=this.d
w=y.cx
w.toString
w.W(x.S(0,!0))
x=this.e
w=y.cy
w.toString
w.W(x.S(0,!0))
x=this.f
y=y.fx
y.toString
y.W(x.S(0,!0))
y=b.e
if(y instanceof Z.bc){y.H(a)
y.a7(a)
y.a2(a)}else b.e=null
y=this.a
y.toString
x=a.a
C.b.aY(x,null)
y.x.b7()
for(u=0;u<v.length;++u){y=v[u]
if(y.c){y.c=!1
C.b.aQ(x,33984+y.a)
C.b.a6(x,3553,null)}}}},hN:{"^":"aI;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0a3:dy<",
sfk:function(a){this.e=H.e(a,"$isJ",[V.a5],"$asJ")},
sa3:function(a){this.dy=H.f(a,"$isab")},
gl:function(){var z=this.dy
if(z==null){z=D.z()
this.dy=z}return z},
I:[function(a){var z
H.f(a,"$isp")
z=this.dy
if(!(z==null))z.w(a)},function(){return this.I(null)},"a8","$1","$0","gae",0,2,0],
hA:[function(a){H.f(a,"$isp")
this.a=null
this.I(a)},function(){return this.hA(null)},"ki","$1","$0","ghz",0,2,0],
jO:[function(a,b){var z=V.a5
z=new D.bL(a,H.e(b,"$isk",[z],"$ask"),this,[z])
z.b=!0
this.I(z)},"$2","gh0",8,0,12],
jP:[function(a,b){var z=V.a5
z=new D.bM(a,H.e(b,"$isk",[z],"$ask"),this,[z])
z.b=!0
this.I(z)},"$2","gh1",8,0,12],
dc:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
z=this.dx
y=C.h.a4(z.e.length+3,4)*4
x=C.h.a4(z.f.length+3,4)*4
w=C.h.a4(z.r.length+3,4)*4
v=C.h.a4(z.x.length+3,4)*4
u=C.h.a4(z.y.length+3,4)*4
t=C.h.a4(z.z.length+3,4)*4
s=C.h.a4(this.e.a.length+3,4)*4
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
a2=$.$get$Y()
if(e){g=$.$get$as()
a2=new Z.ai(a2.a|g.a)}if(d){g=$.$get$ar()
a2=new Z.ai(a2.a|g.a)}if(c){g=$.$get$ac()
a2=new Z.ai(a2.a|g.a)}if(b){g=$.$get$at()
a2=new Z.ai(a2.a|g.a)}if(a0){g=$.$get$aK()
a2=new Z.ai(a2.a|g.a)}return new A.hR(z,r,q,p,o,n,m,l,k,y,x,w,v,u,t,y+x+w+v+u+t,i,i,a,a1,!0,!1,!1,h,a,f,e,d,c,b,a0,!1,!1,!1,s,j.charCodeAt(0)==0?j:j,a2)},
K:function(a,b){H.e(a,"$isb",[T.aJ],"$asb")},
a9:function(a){var z,y,x,w,v
for(z=this.dx.a,z=new J.am(z,z.length,0,[H.r(z,0)]);z.B();){y=z.d
y.toString
x=$.cf
if(x==null){x=new V.E(0,0,1)
$.cf=x}y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cQ(x)}}},
bi:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.dc()
y=H.f(a.fr.j(0,z.an),"$ise3")
if(y==null){y=A.hO(z,a.a)
a.b3(y)}this.a=y
b.e=null
z=y}x=z.z
w=x.bB
z=b.e
if(!(z instanceof Z.bc)){b.e=null
z=null}if(z==null||!z.d.q(0,w)){z=x.r1
if(z)b.d.am()
v=x.r2
if(v)b.d.aR()
u=x.ry
if(u)b.d.bA()
t=b.d.b5(new Z.bT(a.a),w)
t.a0($.$get$Y()).e=this.a.Q.c
if(z)t.a0($.$get$as()).e=this.a.cx.c
if(v)t.a0($.$get$ar()).e=this.a.ch.c
if(x.rx)t.a0($.$get$ac()).e=this.a.cy.c
if(u)t.a0($.$get$at()).e=this.a.db.c
if(x.x1)t.a0($.$get$aK()).e=this.a.dx.c
b.e=t}z=T.aJ
s=H.d([],[z])
this.a.H(a)
if(x.fx){v=this.a
u=a.dx.gV()
v=v.dy
v.toString
v.W(u.S(0,!0))}if(x.fy){v=this.a
u=a.gey()
v=v.fr
v.toString
v.W(u.S(0,!0))}v=this.a
u=a.gcL()
v=v.fy
v.toString
v.W(u.S(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.k1
v.toString
v.W(C.o.S(u,!0))}if(x.y1){v=this.a
u=this.c
v=v.k2
v.toString
v.W(C.o.S(u,!0))}if(x.y2){v=this.a
u=this.d
v=v.k3
v.toString
v.W(C.o.S(u,!0))}if(x.at>0){r=this.e.a.length
v=this.a.k4
C.b.C(v.a,v.d,r)
for(v=[P.q],q=0;q<r;++q){u=this.a
p=this.e.a
if(q>=p.length)return H.h(p,q)
p=p[q]
u.toString
H.f(p,"$isa5")
u=u.r1
if(q>=u.length)return H.h(u,q)
u=u[q]
o=new Float32Array(H.b3(H.e(p.S(0,!0),"$isb",v,"$asb")))
C.b.cR(u.a,u.d,!1,o)}}switch(x.a){case C.c:break
case C.f:v=this.a
u=this.f.f
v=v.r2
v.toString
p=u.a
n=u.b
u=u.c
C.b.p(v.a,v.d,p,n,u)
break
case C.e:this.K(s,this.f.d)
v=this.a
u=this.f.d
v.ac(v.rx,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
p=v.a
n=v.b
v=v.c
C.b.p(u.a,u.d,p,n,v)
break
case C.d:this.K(s,this.f.e)
v=this.a
u=this.f.e
v.ag(v.ry,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
p=v.a
n=v.b
v=v.c
C.b.p(u.a,u.d,p,n,v)
break}if(x.k2){switch(x.b){case C.c:break
case C.f:v=this.a
u=this.r.f
v=v.x2
v.toString
p=u.a
n=u.b
u=u.c
C.b.p(v.a,v.d,p,n,u)
break
case C.e:this.K(s,this.r.d)
v=this.a
u=this.r.d
v.ac(v.y1,v.at,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
p=v.a
n=v.b
v=v.c
C.b.p(u.a,u.d,p,n,v)
break
case C.d:this.K(s,this.r.e)
v=this.a
u=this.r.e
v.ag(v.y2,v.at,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
p=v.a
n=v.b
v=v.c
C.b.p(u.a,u.d,p,n,v)
break}switch(x.c){case C.c:break
case C.f:v=this.a
u=this.x.f
v=v.an
v.toString
p=u.a
n=u.b
u=u.c
C.b.p(v.a,v.d,p,n,u)
break
case C.e:this.K(s,this.x.d)
v=this.a
u=this.x.d
v.ac(v.bB,v.bC,u)
u=this.a
v=this.x.f
u=u.an
u.toString
p=v.a
n=v.b
v=v.c
C.b.p(u.a,u.d,p,n,v)
break
case C.d:this.K(s,this.x.e)
v=this.a
u=this.x.e
v.ag(v.dX,v.bC,u)
u=this.a
v=this.x.f
u=u.an
u.toString
p=v.a
n=v.b
v=v.c
C.b.p(u.a,u.d,p,n,v)
break}switch(x.d){case C.c:break
case C.f:v=this.a
u=this.y.f
v=v.bD
v.toString
p=u.a
n=u.b
u=u.c
C.b.p(v.a,v.d,p,n,u)
break
case C.e:this.K(s,this.y.d)
v=this.a
u=this.y.d
v.ac(v.dY,v.bE,u)
u=this.a
v=this.y.f
u=u.bD
u.toString
p=v.a
n=v.b
v=v.c
C.b.p(u.a,u.d,p,n,v)
break
case C.d:this.K(s,this.y.e)
v=this.a
u=this.y.e
v.ag(v.dZ,v.bE,u)
u=this.a
v=this.y.f
u=u.bD
u.toString
p=v.a
n=v.b
v=v.c
C.b.p(u.a,u.d,p,n,v)
break}switch(x.e){case C.c:break
case C.f:v=this.a
u=this.z.f
v=v.bF
v.toString
p=u.a
n=u.b
u=u.c
C.b.p(v.a,v.d,p,n,u)
u=this.a
n=this.z.ch
u=u.bH
C.b.J(u.a,u.d,n)
break
case C.e:this.K(s,this.z.d)
v=this.a
u=this.z.d
v.ac(v.e_,v.bG,u)
u=this.a
v=this.z.f
u=u.bF
u.toString
p=v.a
n=v.b
v=v.c
C.b.p(u.a,u.d,p,n,v)
v=this.a
n=this.z.ch
v=v.bH
C.b.J(v.a,v.d,n)
break
case C.d:this.K(s,this.z.e)
v=this.a
u=this.z.e
v.ag(v.e0,v.bG,u)
u=this.a
v=this.z.f
u=u.bF
u.toString
p=v.a
n=v.b
v=v.c
C.b.p(u.a,u.d,p,n,v)
v=this.a
n=this.z.ch
v=v.bH
C.b.J(v.a,v.d,n)
break}if(x.z>0){r=this.dx.e.length
v=this.a.eb
C.b.C(v.a,v.d,r)
m=a.db.gV()
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.v)(v),++k){j=v[k]
p=this.a.cv
if(l>=p.length)return H.h(p,l)
i=p[l]
p=m.cQ(j.a)
n=p.a
h=p.b
g=p.c
g=p.v(0,Math.sqrt(n*n+h*h+g*g))
h=i.b
n=g.a
p=g.b
g=g.c
C.b.p(h.a,h.d,n,p,g)
g=j.c
p=i.c
C.b.p(p.a,p.d,g.a,g.b,g.c);++l}}if(x.Q>0){r=this.dx.f.length
v=this.a.ec
C.b.C(v.a,v.d,r)
m=a.db.gV()
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.v)(v),++k){j=v[k]
p=this.a.cw
if(l>=p.length)return H.h(p,l)
i=p[l]
p=j.gbh(j)
n=i.b
h=p.gcS(p)
g=p.gcT(p)
p=p.gcU(p)
C.b.p(n.a,n.d,h,g,p)
p=m.bn(j.gbh(j))
g=i.c
C.b.p(g.a,g.d,p.a,p.b,p.c)
p=j.gar(j)
g=i.d
h=p.gbR()
n=p.gbo()
p=p.gbz()
C.b.p(g.a,g.d,h,n,p)
p=j.gck()
n=i.e
C.b.J(n.a,n.d,p)
p=j.gcl()
n=i.f
C.b.J(n.a,n.d,p)
p=j.gcm()
n=i.r
C.b.J(n.a,n.d,p);++l}}if(x.ch>0){r=this.dx.r.length
v=this.a.ed
C.b.C(v.a,v.d,r)
m=a.db.gV()
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.v)(v),++k){j=v[k]
p=this.a.cz
if(l>=p.length)return H.h(p,l)
i=p[l]
p=j.gbh(j)
n=i.b
h=p.gcS(p)
g=p.gcT(p)
p=p.gcU(p)
C.b.p(n.a,n.d,h,g,p)
p=j.gct(j).ko()
g=i.c
h=p.gaT(p)
n=p.gaU(p)
p=p.gaV()
C.b.p(g.a,g.d,h,n,p)
p=m.bn(j.gbh(j))
n=i.d
C.b.p(n.a,n.d,p.a,p.b,p.c)
p=j.gar(j)
n=i.e
h=p.gbR()
g=p.gbo()
p=p.gbz()
C.b.p(n.a,n.d,h,g,p)
p=j.gkn()
g=i.f
C.b.J(g.a,g.d,p)
p=j.gkm()
g=i.r
C.b.J(g.a,g.d,p)
p=j.gck()
g=i.x
C.b.J(g.a,g.d,p)
p=j.gcl()
g=i.y
C.b.J(g.a,g.d,p)
p=j.gcm()
g=i.z
C.b.J(g.a,g.d,p);++l}}if(x.cx>0){r=this.dx.x.length
v=this.a.ee
C.b.C(v.a,v.d,r)
m=a.db.gV()
for(v=this.dx.x,u=v.length,p=[z],l=0,k=0;k<v.length;v.length===u||(0,H.v)(v),++k){j=v[k]
n=this.a.cA
if(l>=n.length)return H.h(n,l)
i=n[l]
n=j.gbk()
H.e(s,"$isb",p,"$asb")
if(!C.a.as(s,n)){n.sei(0,s.length)
C.a.h(s,n)}n=j.gct(j)
h=i.d
g=n.gaT(n)
f=n.gaU(n)
n=n.gaV()
C.b.p(h.a,h.d,g,f,n)
n=j.gjC()
f=i.b
g=n.gaT(n)
h=n.gaU(n)
n=n.gaV()
C.b.p(f.a,f.d,g,h,n)
n=j.gbj(j)
h=i.c
g=n.gaT(n)
f=n.gaU(n)
n=n.gaV()
C.b.p(h.a,h.d,g,f,n)
n=m.cQ(j.gct(j))
f=n.a
g=n.b
h=n.c
h=n.v(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
f=h.a
n=h.b
h=h.c
C.b.p(g.a,g.d,f,n,h)
h=j.gar(j)
n=i.f
f=h.gbR()
g=h.gbo()
h=h.gbz()
C.b.p(n.a,n.d,f,g,h)
h=j.gbk()
n=h.gel(h)
if(!n){n=i.x
C.b.C(n.a,n.d,1)}else{n=i.r
g=h.gdj()
f=n.a
n=n.d
if(!g)C.b.C(f,n,0)
else C.b.C(f,n,h.gdi())
n=i.x
C.b.C(n.a,n.d,0)}++l}}if(x.cy>0){r=this.dx.y.length
v=this.a.ef
C.b.C(v.a,v.d,r)
m=a.db.gV()
for(v=this.dx.y,u=v.length,p=[P.q],n=[z],l=0,k=0;k<v.length;v.length===u||(0,H.v)(v),++k){j=v[k]
h=this.a.cB
if(l>=h.length)return H.h(h,l)
i=h[l]
h=j.gbk()
H.e(s,"$isb",n,"$asb")
if(!C.a.as(s,h)){h.sei(0,s.length)
C.a.h(s,h)}e=m.u(0,j.gV())
h=j.gV()
g=$.bo
if(g==null){g=new V.R(0,0,0)
$.bo=g}g=h.bn(g)
h=i.b
f=g.gcS(g)
d=g.gcT(g)
g=g.gcU(g)
C.b.p(h.a,h.d,f,d,g)
h=$.bo
if(h==null){h=new V.R(0,0,0)
$.bo=h}h=e.bn(h)
g=i.c
C.b.p(g.a,g.d,h.a,h.b,h.c)
h=e.cF()
g=i.d
o=new Float32Array(H.b3(H.e(new V.cN(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).S(0,!0),"$isb",p,"$asb")))
C.b.ex(g.a,g.d,!1,o)
g=j.gar(j)
h=i.e
f=g.gbR()
d=g.gbo()
g=g.gbz()
C.b.p(h.a,h.d,f,d,g)
g=j.gbk()
h=g.gel(g)
if(!h){h=i.r
C.b.C(h.a,h.d,1)}else{h=i.f
f=g.gdj()
d=h.a
h=h.d
if(!(f>=6))C.b.C(d,h,0)
else C.b.C(d,h,g.gdi())
h=i.r
C.b.C(h.a,h.d,0)}h=j.gck()
g=i.x
C.b.J(g.a,g.d,h)
h=j.gcl()
g=i.y
C.b.J(g.a,g.d,h)
h=j.gcm()
g=i.z
C.b.J(g.a,g.d,h);++l}}if(x.db>0){r=this.dx.z.length
v=this.a.eg
C.b.C(v.a,v.d,r)
m=a.db.gV()
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.v)(v),++k){j=v[k]
p=this.a.cC
if(l>=p.length)return H.h(p,l)
i=p[l]
p=j.gbk()
H.e(s,"$isb",z,"$asb")
if(!C.a.as(s,p)){p.sei(0,s.length)
C.a.h(s,p)}p=j.gbh(j)
n=i.b
h=p.gcS(p)
g=p.gcT(p)
p=p.gcU(p)
C.b.p(n.a,n.d,h,g,p)
p=j.gct(j)
g=i.c
h=p.gaT(p)
n=p.gaU(p)
p=p.gaV()
C.b.p(g.a,g.d,h,n,p)
p=j.gjC()
n=i.d
h=p.gaT(p)
g=p.gaU(p)
p=p.gaV()
C.b.p(n.a,n.d,h,g,p)
p=j.gbj(j)
g=i.e
h=p.gaT(p)
n=p.gaU(p)
p=p.gaV()
C.b.p(g.a,g.d,h,n,p)
p=m.bn(j.gbh(j))
n=i.f
C.b.p(n.a,n.d,p.a,p.b,p.c)
p=j.gbk()
n=p.gel(p)
if(!n){p=i.x
C.b.C(p.a,p.d,1)}else{n=i.r
h=p.gdj()
g=n.a
n=n.d
if(!h)C.b.C(g,n,0)
else C.b.C(g,n,p.gdi())
p=i.x
C.b.C(p.a,p.d,0)}p=j.gar(j)
n=i.y
h=p.gbR()
g=p.gbo()
p=p.gbz()
C.b.p(n.a,n.d,h,g,p)
p=j.gku()
g=i.z
C.b.J(g.a,g.d,p)
p=j.gkv()
g=i.Q
C.b.J(g.a,g.d,p)
p=j.gck()
g=i.ch
C.b.J(g.a,g.d,p)
p=j.gcl()
g=i.cx
C.b.J(g.a,g.d,p)
p=j.gcm()
g=i.cy
C.b.J(g.a,g.d,p);++l}}}switch(x.f){case C.c:break
case C.f:break
case C.e:this.K(s,this.Q.d)
z=this.a
v=this.Q.d
z.ac(z.e1,z.bI,v)
break
case C.d:this.K(s,this.Q.e)
z=this.a
v=this.Q.e
z.ag(z.e2,z.bI,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db.gV().cF()
a.Q=v}z=z.id
z.toString
z.W(v.S(0,!0))}if(x.dy){this.K(s,this.ch)
z=this.a
v=this.ch
z.ag(z.e3,z.e4,v)
switch(x.r){case C.c:break
case C.f:z=this.a
v=this.cx.f
z=z.bJ
z.toString
u=v.a
p=v.b
v=v.c
C.b.p(z.a,z.d,u,p,v)
break
case C.e:this.K(s,this.cx.d)
z=this.a
v=this.cx.d
z.ac(z.e5,z.bK,v)
v=this.a
z=this.cx.f
v=v.bJ
v.toString
u=z.a
p=z.b
z=z.c
C.b.p(v.a,v.d,u,p,z)
break
case C.d:this.K(s,this.cx.e)
z=this.a
v=this.cx.e
z.ag(z.e6,z.bK,v)
v=this.a
z=this.cx.f
v=v.bJ
v.toString
u=z.a
p=z.b
z=z.c
C.b.p(v.a,v.d,u,p,z)
break}switch(x.x){case C.c:break
case C.f:z=this.a
v=this.cy.f
z=z.bM
z.toString
u=v.a
p=v.b
v=v.c
C.b.p(z.a,z.d,u,p,v)
v=this.a
p=this.cy.ch
v=v.bL
C.b.J(v.a,v.d,p)
break
case C.e:this.K(s,this.cy.d)
z=this.a
v=this.cy.d
z.ac(z.e7,z.bN,v)
v=this.a
z=this.cy.f
v=v.bM
v.toString
u=z.a
p=z.b
z=z.c
C.b.p(v.a,v.d,u,p,z)
z=this.a
p=this.cy.ch
z=z.bL
C.b.J(z.a,z.d,p)
break
case C.d:this.K(s,this.cy.e)
z=this.a
v=this.cy.e
z.ag(z.e8,z.bN,v)
v=this.a
z=this.cy.f
v=v.bM
v.toString
u=z.a
p=z.b
z=z.c
C.b.p(v.a,v.d,u,p,z)
z=this.a
p=this.cy.ch
z=z.bL
C.b.J(z.a,z.d,p)
break}}z=x.y
v=z!==C.c
if(v){switch(z){case C.c:break
case C.f:z=this.a
u=this.db.f
z=z.bO
C.b.J(z.a,z.d,u)
break
case C.e:this.K(s,this.db.d)
z=this.a
u=this.db.d
z.ac(z.e9,z.bP,u)
u=this.a
z=this.db.f
u=u.bO
C.b.J(u.a,u.d,z)
break
case C.d:this.K(s,this.db.e)
z=this.a
u=this.db.e
z.ag(z.ea,z.bP,u)
u=this.a
z=this.db.f
u=u.bO
C.b.J(u.a,u.d,z)
break}z=a.a
C.b.ba(z,3042)
C.b.iy(z,770,771)}for(q=0;q<s.length;++q)s[q].H(a)
z=b.e
z.H(a)
z.a7(a)
z.a2(a)
if(v)C.b.iL(a.a,3042)
for(q=0;q<s.length;++q)s[q].a2(a)
z=this.a
z.toString
C.b.aY(a.a,null)
z.x.b7()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dc().an}},hP:{"^":"cM;0f,a,b,0c,0d,0e"},cM:{"^":"a;",
bu:["eV",function(){}]},hQ:{"^":"cM;a,b,0c,0d,0e"},aV:{"^":"cM;0f,a,b,0c,0d,0e",
dz:function(a){var z,y
if(!J.B(this.f,a)){z=this.f
this.f=a
y=new D.w(this.b+".color",z,a,this,[V.V])
y.b=!0
this.a.I(y)}},
bu:["bW",function(){this.eV()
this.dz(new V.V(1,1,1))}],
sar:function(a,b){var z
if(this.c===C.c){this.c=C.f
this.bu()
z=this.a
z.a=null
z.I(null)}this.dz(b)}},hS:{"^":"aV;0ch,0f,a,b,0c,0d,0e",
hE:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.w(this.b+".refraction",y,a,this,[P.q])
z.b=!0
this.a.I(z)}},
bu:function(){this.bW()
this.hE(1)}},hT:{"^":"aV;0ch,0f,a,b,0c,0d,0e",
cc:function(a){var z,y
z=this.ch
if(!$.m.$2(z,a)){y=this.ch
this.ch=a
z=new D.w(this.b+".shininess",y,a,this,[P.q])
z.b=!0
this.a.I(z)}},
bu:function(){this.bW()
this.cc(100)}},i_:{"^":"aI;0a,0b,0c,0d,0e,0f,0a3:r<",
sa3:function(a){this.r=H.f(a,"$isab")},
gl:function(){var z=this.r
if(z==null){z=D.z()
this.r=z}return z},
I:[function(a){var z
H.f(a,"$isp")
z=this.r
if(!(z==null))z.w(a)},function(){return this.I(null)},"a8","$1","$0","gae",0,2,0],
dv:function(a){},
dw:function(a){var z,y
z=this.f
if(z==null?a!=null:z!==a){if(z!=null)z.gl().F(0,this.gae())
y=this.f
this.f=a
if(a!=null)a.gl().h(0,this.gae())
z=new D.w("bumpyTextureCube",y,this.f,this,[T.cY])
z.b=!0
this.I(z)}},
K:function(a,b){H.e(a,"$isb",[T.aJ],"$asb")
if(b!=null)if(!C.a.as(a,b)){b.a=a.length
C.a.h(a,b)}},
a9:function(a){},
bi:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o
z=this.a
if(z==null){y=A.e9(this.d)
z=y.e
x=H.f(a.fr.j(0,z),"$ise8")
if(x==null){w=a.a
x=new A.e8(w,z)
x.aZ(w,z)
x.z=y
z=y.c
v=z?"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n":"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\n"
u=y.d
v=(u?v+"uniform mat4 txtCubeMat;\n":v)+"\nattribute vec3 posAttr;\nattribute vec3 normAttr;\n"
t=y.b
if(t)v+="attribute vec3 binmAttr;\n"
if(z)v+="attribute vec2 txt2DAttr;\n"
v=(u?v+"attribute vec3 txtCubeAttr;\n":v)+"\nvarying vec3 normalVec;\n"
if(t)v+="varying vec3 binormalVec;\n"
if(z)v+="varying vec2 txt2D;\n"
v=(u?v+"varying vec3 txtCube;\n":v)+"\nvoid main()\n{\n   normalVec = normalize(viewObjMat*vec4(normAttr, 0.0)).xyz;\n"
if(t)v+="   binormalVec = normalize(viewObjMat*vec4(binmAttr, 0.0)).xyz;\n"
if(z)v+="   txt2D = (txt2DMat*vec3(txt2DAttr, 1.0)).xy;\n"
v=(u?v+"   txtCube = (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n":v)+"   gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n"
t=t?"precision mediump float;\n\nvarying vec3 normalVec;\nvarying vec3 binormalVec;\n":"precision mediump float;\n\nvarying vec3 normalVec;\n"
if(z)t+="varying vec2 txt2D;\n"
t=(u?t+"varying vec3 txtCube;\n":t)+"\n"
s=y.a
switch(s){case C.c:break
case C.f:break
case C.e:t+="uniform sampler2D bumpTxt;\nuniform int nullBumpTxt;\n"
break
case C.d:t+="uniform samplerCube bumpTxt;\nuniform int nullBumpTxt;\n"
break}t+="\nvec3 normal()\n{\n"
if(s===C.c||s===C.f)t+="   return normalize(normalVec);\n"
else{t+="   if(nullBumpTxt > 0) return normalVec;\n"
t=(s===C.e?t+"   vec3 color = texture2D(bumpTxt, txt2D).rgb;\n":t+"   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n")+"   vec3 n = normalize(normalVec);\n   vec3 b = normalize(binormalVec);\n   vec3 c = normalize(cross(b, n));\n   b = cross(n, c);\n   mat3 mat = mat3( b.x,  b.y,  b.z,\n                   -c.x, -c.y, -c.z,\n                    n.x,  n.y,  n.z);\n   return mat * normalize(2.0*color - 1.0);\n"}t+="}\n\nvoid main()\n{\n   vec3 norm = normal();\n   norm = -norm*0.5 + 0.5;\n   gl_FragColor = vec4(norm.x, 1.0-norm.y, norm.z, 1.0);\n}\n"
x.bb(v.charCodeAt(0)==0?v:v,t.charCodeAt(0)==0?t:t)
x.Q=x.x.j(0,"posAttr")
x.cx=x.x.j(0,"normAttr")
x.ch=x.x.j(0,"binmAttr")
x.cy=x.x.j(0,"txt2DAttr")
x.db=x.x.j(0,"txtCubeAttr")
x.dx=H.c(x.y.k(0,"viewObjMat"),"$isP")
x.dy=H.c(x.y.k(0,"projViewObjMat"),"$isP")
if(z)x.fr=H.c(x.y.k(0,"txt2DMat"),"$isbu")
if(u)x.fx=H.c(x.y.k(0,"txtCubeMat"),"$isP")
switch(s){case C.c:break
case C.f:break
case C.e:x.fy=H.c(x.y.k(0,"bumpTxt"),"$isS")
x.id=H.c(x.y.k(0,"nullBumpTxt"),"$isy")
break
case C.d:x.go=H.c(x.y.k(0,"bumpTxt"),"$isa8")
x.id=H.c(x.y.k(0,"nullBumpTxt"),"$isy")
break}a.b3(x)}this.a=x
b.e=null
z=x}y=z.z
r=y.f
z=b.e
if(!(z instanceof Z.bc)){b.e=null
z=null}if(z==null||!z.d.q(0,r)){b.d.am()
z=y.b
if(z)b.d.aR()
v=y.d
if(v)b.d.bA()
q=b.d.b5(new Z.bT(a.a),r)
q.a0($.$get$Y()).e=this.a.Q.c
q.a0($.$get$as()).e=this.a.cx.c
if(z)q.a0($.$get$ar()).e=this.a.ch.c
if(y.c)q.a0($.$get$ac()).e=this.a.cy.c
if(v)q.a0($.$get$at()).e=this.a.db.c
b.e=q}p=H.d([],[T.aJ])
this.a.H(a)
z=this.a
v=a.gey()
z=z.dx
z.toString
z.W(v.S(0,!0))
v=this.a
z=a.gcL()
v=v.dy
v.toString
v.W(z.S(0,!0))
if(y.c){z=this.a
v=this.b
z=z.fr
z.toString
z.W(v.S(0,!0))}if(y.d){z=this.a
v=this.c
z=z.fx
z.toString
z.W(v.S(0,!0))}switch(y.a){case C.c:break
case C.f:break
case C.e:this.K(p,this.e)
z=this.a.id
C.b.C(z.a,z.d,1)
break
case C.d:this.K(p,this.f)
z=this.a
v=this.f
u=z.go
z=z.id
if(v==null||v.d<6)C.b.C(z.a,z.d,1)
else{u.cW(v)
C.b.C(z.a,z.d,0)}break}for(o=0;o<p.length;++o)p[o].H(a)
z=b.e
z.H(a)
z.a7(a)
z.a2(a)
for(z=a.a,o=0;o<p.length;++o){v=p[o]
if(v.c){v.c=!1
C.b.aQ(z,33984+v.a)
C.b.a6(z,34067,null)}}v=this.a
v.toString
C.b.aY(z,null)
v.x.b7()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return A.e9(this.d).e}},iG:{"^":"aI;0a,0b,0c,0d,0a3:e<",
sa3:function(a){this.e=H.f(a,"$isab")},
gl:function(){var z=this.e
if(z==null){z=D.z()
this.e=z}return z},
I:[function(a){var z
H.f(a,"$isp")
z=this.e
if(!(z==null))z.w(a)},function(){return this.I(null)},"a8","$1","$0","gae",0,2,0],
a9:function(a){},
bi:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.f(a.fr.j(0,"Skybox"),"$isen")
if(z==null){y=a.a
z=new A.en(y,"Skybox")
z.aZ(y,"Skybox")
z.bb($.iI,$.iH)
z.z=z.x.j(0,"posAttr")
z.Q=H.c(z.y.j(0,"fov"),"$isL")
z.ch=H.c(z.y.j(0,"ratio"),"$isL")
z.cx=H.c(z.y.j(0,"boxClr"),"$isC")
z.cy=H.c(z.y.j(0,"boxTxt"),"$isa8")
z.db=H.c(z.y.j(0,"viewMat"),"$isP")
a.b3(z)}this.a=z}if(b.e==null){y=b.d.b5(new Z.bT(a.a),$.$get$Y())
y.a0($.$get$Y()).e=this.a.z.c
b.e=y}y=this.c
if(y!=null){y.a=1
y.H(a)}y=a.d
x=a.c
w=this.a
w.H(a)
v=this.b
u=w.Q
C.b.J(u.a,u.d,v)
v=w.ch
C.b.J(v.a,v.d,y/x)
x=this.c
w.cy.cW(x)
x=this.d
y=w.cx
C.b.p(y.a,y.d,x.a,x.b,x.c)
x=a.db.gV().cF()
w=w.db
w.toString
w.W(x.S(0,!0))
y=b.e
if(y instanceof Z.bc){y.H(a)
y.a7(a)
y.a2(a)}else b.e=null
y=this.a
y.toString
C.b.aY(a.a,null)
y.x.b7()
y=this.c
if(y!=null)y.a2(a)}},aI:{"^":"a;"},iS:{"^":"aI;0a,0b,0c,0d,0a3:e<",
sfC:function(a){this.c=H.e(a,"$isJ",[O.aZ],"$asJ")},
sa3:function(a){this.e=H.f(a,"$isab")},
gl:function(){var z=this.e
if(z==null){z=D.z()
this.e=z}return z},
I:[function(a){var z
H.f(a,"$isp")
z=this.e
if(!(z==null))z.w(a)},function(){return this.I(null)},"a8","$1","$0","gae",0,2,0],
jW:[function(a,b){var z,y,x,w,v,u,t
H.e(b,"$isk",[O.aZ],"$ask")
for(z=b.length,y=this.gae(),x={func:1,ret:-1,args:[D.p]},w=[x],v=0;v<b.length;b.length===z||(0,H.v)(b),++v){u=b[v]
if(u!=null){if(u.ga3()==null){t=new D.ab()
t.sab(null)
t.sb1(null)
t.c=null
t.d=0
u.sa3(t)}t=u.ga3()
t.toString
H.l(y,x)
if(t.a==null)t.sab(H.d([],w))
t=t.a;(t&&C.a).h(t,y)}}this.a8()},"$2","gh8",8,0,19],
jX:[function(a,b){var z,y
H.e(b,"$isk",[O.aZ],"$ask")
for(z=b.gR(b),y=this.gae();z.B();)z.gL().gl().F(0,y)
this.a8()},"$2","gh9",8,0,19],
a9:function(a){},
bi:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=C.h.a4(this.c.a.length+3,4)*4
if(z!==this.d){this.d=z
this.b=null}y=this.b
if(y==null){y="TextureLayout_"+z
x=H.f(a.fr.j(0,y),"$iseu")
if(x==null){x=A.iT(z,a.a)
a.b3(x)}this.b=x
y=x}if(b.e==null){y=b.d.b5(new Z.bT(a.a),$.$get$Y())
w=y.a0($.$get$Y())
v=this.b
w.e=v.z.c
b.e=y
y=v}y.H(a)
y=T.aJ
u=H.d([],[y])
for(w=[P.q],y=[y],t=0,s=0;v=this.c.a,s<v.length;++s){r=v[s]
if(r!=null&&r.a!=null){v=r.a
H.e(u,"$isb",y,"$asb")
if(v!=null)if(!C.a.as(u,v)){v.a=u.length
C.a.h(u,v)}v=this.b
q=r.a
v=v.cx
if(t>=v.length)return H.h(v,t)
v=v[t]
p=q==null||!q.d
o=v.a
v=v.d
if(p)C.b.C(o,v,0)
else C.b.C(o,v,q.a)
v=this.b
q=r.b
v=v.cy
if(t>=v.length)return H.h(v,t)
v=v[t]
if(q==null){q=$.c8
if(q==null){q=new V.a5(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.c8=q}}n=new Float32Array(H.b3(H.e(q.S(0,!0),"$isb",w,"$asb")))
C.b.cR(v.a,v.d,!1,n)
v=this.b
m=r.c
v.toString
if(m==null){q=$.bs
if(q==null){q=V.br(0,0,1,1)
$.bs=q
m=q}else m=q}q=v.db
if(t>=q.length)return H.h(q,t)
q=q[t]
C.b.bS(q.a,q.d,m.a,m.b)
v=v.dx
if(t>=v.length)return H.h(v,t)
v=v[t]
C.b.bS(v.a,v.d,m.c,m.d)
v=this.b
m=r.d
v.toString
if(m==null){q=$.bs
if(q==null){q=V.br(0,0,1,1)
$.bs=q
m=q}else m=q}q=v.dy
if(t>=q.length)return H.h(q,t)
q=q[t]
C.b.bS(q.a,q.d,m.a,m.b)
v=v.fr
if(t>=v.length)return H.h(v,t)
v=v[t]
C.b.bS(v.a,v.d,m.c,m.d)
v=this.b
q=r.e
v=v.fx
if(t>=v.length)return H.h(v,t)
v=v[t]
q=q?1:0
C.b.C(v.a,v.d,q);++t}}y=this.b.Q
C.b.C(y.a,y.d,t)
y=this.b
w=this.a
y=y.ch
y.toString
v=w.a
q=w.b
p=w.c
w=w.d
C.b.jB(y.a,y.d,v,q,p,w)
for(s=0;s<u.length;++s)u[s].H(a)
y=b.e
if(y instanceof Z.bc){y.H(a)
y.a7(a)
y.a2(a)}else b.e=null
y=this.b
y.toString
w=a.a
C.b.aY(w,null)
y.x.b7()
for(s=0;s<u.length;++s){y=u[s]
if(y.c){y.c=!1
C.b.aQ(w,33984+y.a)
C.b.a6(w,3553,null)}}}},aZ:{"^":"a;0a,0b,0c,0d,0e,0a3:f<",
sa3:function(a){this.f=H.f(a,"$isab")},
gl:function(){var z=this.f
if(z==null){z=D.z()
this.f=z}return z},
I:[function(a){var z
H.f(a,"$isp")
z=this.f
if(!(z==null))z.w(a)},function(){return this.I(null)},"a8","$1","$0","gae",0,2,0],
m:{
ev:function(a,b,c,d,e){var z,y,x,w,v
z=new O.aZ()
y=z.a
z.a=e
e.gl().h(0,z.gae())
x=new D.w("texture",y,z.a,z,[T.es])
x.b=!0
z.I(x)
w=V.aw()
if(!J.B(z.b,w)){y=z.b
z.b=w
x=new D.w("colorMatrix",y,w,z,[V.a5])
x.b=!0
z.I(x)}v=V.cS()
if(!J.B(z.c,v)){y=z.c
z.c=v
x=new D.w("source",y,v,z,[V.cb])
x.b=!0
z.I(x)}if(!J.B(z.d,b)){y=z.d
z.d=b
x=new D.w("destination",y,b,z,[V.cb])
x.b=!0
z.I(x)}if(z.e!==c){z.e=c
x=new D.w("flip",!c,c,z,[P.U])
x.b=!0
z.I(x)}z.f=null
return z}}}}],["","",,T,{"^":"",aJ:{"^":"cw;"},es:{"^":"aJ;"},iR:{"^":"es;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gl:function(){var z=this.y
if(z==null){z=D.z()
this.y=z}return z},
H:function(a){var z
if(!this.c&&this.d){this.c=!0
z=a.a
C.b.aQ(z,33984+this.a)
C.b.a6(z,3553,this.b)}},
m:{
et:function(a,b){var z=new T.iR()
z.a=a
z.b=b
z.c=!1
z.d=!1
z.e=0
z.f=0
z.r=0
z.x=0
return z}}},cY:{"^":"aJ;0a,0b,0c,0d,0e",
gl:function(){var z=this.e
if(z==null){z=D.z()
this.e=z}return z},
H:function(a){var z
if(!this.c&&this.d>=6){this.c=!0
z=a.a
C.b.aQ(z,33984+this.a)
C.b.a6(z,34067,this.b)}},
a2:function(a){var z
if(this.c){this.c=!1
z=a.a
C.b.aQ(z,33984+this.a)
C.b.a6(z,34067,null)}}},iV:{"^":"a;a,0b,0c,0d,0e",
ek:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
z=a+"/"+d+"posx"+b
y=a+"/"+d+"posy"+b
x=a+"/"+d+"posz"+b
w=a+"/"+d+"negx"+b
v=a+"/"+d+"negy"+b
u=a+"/"+d+"negz"+b
t=this.a
s=t.createTexture()
C.b.a6(t,34067,s)
C.b.ay(t,34067,10242,10497)
C.b.ay(t,34067,10243,10497)
C.b.ay(t,34067,10241,9729)
C.b.ay(t,34067,10240,9729)
C.b.a6(t,34067,null)
r=new T.cY()
r.a=0
r.b=s
r.c=!1
r.d=0
this.aO(r,s,z,34069,!1,!1)
this.aO(r,s,w,34070,!1,!1)
this.aO(r,s,y,34071,!1,!1)
this.aO(r,s,v,34072,!1,!1)
this.aO(r,s,x,34073,!1,!1)
this.aO(r,s,u,34074,!1,!1)
return r},
j1:function(a){return this.ek(a,".png",!1,"")},
j2:function(a,b){return this.ek(a,b,!1,"")},
aO:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.a4
W.T(z,"load",H.l(new T.iW(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
hB:function(a,b,c){var z,y,x,w
b=V.bH(b,2)
z=V.bH(a.width,2)
y=V.bH(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cA(null,null)
x.width=z
x.height=y
w=H.f(C.m.eG(x,"2d"),"$iscB")
w.imageSmoothingEnabled=!1;(w&&C.r).iN(w,a,0,0,x.width,x.height)
return P.kw(C.r.fN(w,0,0,x.width,x.height))}}},iW:{"^":"t:11;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.hB(this.b,z.c,this.c)
x=z.a
C.b.a6(x,34067,this.d)
C.b.ji(x,37440,this.e?1:0)
C.b.ju(x,this.f,0,6408,6408,5121,y)
C.b.a6(x,34067,null)
x=this.r
if(++x.d>=6){x=x.e
if(!(x==null))x.cu()}++z.e}}}],["","",,V,{"^":"",fI:{"^":"a;",
bc:function(a){return!0},
i:function(a){return"all"},
$isbl:1},bl:{"^":"a;"},e2:{"^":"a;0a",
saD:function(a){this.a=H.e(a,"$isb",[V.bl],"$asb")},
bc:["eU",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.v)(z),++x)if(z[x].bc(a))return!0
return!1}],
i:["d_",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.v)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbl:1},bn:{"^":"e2;0a",
bc:function(a){return!this.eU(a)},
i:function(a){return"!["+this.d_(0)+"]"}},iv:{"^":"a;0a",
shD:function(a){this.a=H.e(a,"$isav",[P.u,P.U],"$asav")},
eZ:function(a){var z,y
if(a.a.length<=0)throw H.j(P.n("May not create a SetMatcher with zero characters."))
z=new H.bi(0,0,[P.u,P.U])
for(y=new H.e_(a,a.gn(a),0,[H.al(a,"O",0)]);y.B();)z.aa(0,y.d,!0)
this.shD(z)},
bc:function(a){return this.a.dR(a)},
i:function(a){var z=this.a
return P.cX(new H.hB(z,[H.r(z,0)]),0,null)},
$isbl:1,
m:{
a2:function(a){var z=new V.iv()
z.eZ(a)
return z}}},cV:{"^":"a;a,b,0c,0d",
shY:function(a){this.c=H.e(a,"$isb",[V.d0],"$asb")},
E:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.d0(this.a.N(0,b))
w.saD(H.d([],[V.bl]))
w.c=!1
C.a.h(this.c,w)
return w},
iP:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.v)(z),++x){w=z[x]
if(w.bc(a))return w}return},
i:function(a){return this.b}},eC:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.fC(this.b,"\n","\\n")
y=H.fC(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},d_:{"^":"a;a,b,0c",
shx:function(a){var z=P.A
this.c=H.e(a,"$isav",[z,z],"$asav")},
i:function(a){return this.b}},j0:{"^":"a;0a,0b,0c",
shO:function(a){this.a=H.e(a,"$isav",[P.A,V.cV],"$asav")},
shU:function(a){this.b=H.e(a,"$isav",[P.A,V.d_],"$asav")},
N:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.cV(this,b)
z.shY(H.d([],[V.d0]))
z.d=null
this.a.aa(0,b,z)}return z},
bl:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.d_(this,a)
y=P.A
z.shx(new H.bi(0,0,[y,y]))
this.b.aa(0,a,z)}return z},
jA:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.d([],[V.eC])
y=this.c
x=[P.u]
w=H.d([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.j.bs(a,t)
r=y.iP(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cX(w,0,null)
throw H.j(P.n("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.d([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cX(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.eC(o==null?p.b:o,q,t)}++t}}}},d0:{"^":"e2;b,0c,0a",
i:function(a){return this.b.b+": "+this.d_(0)}}}],["","",,X,{"^":"",fL:{"^":"cc;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
gl:function(){var z=this.fr
if(z==null){z=D.z()
this.fr=z}return z},
af:function(a){var z=this.fr
if(!(z==null))z.w(a)},
saz:function(a,b){var z
if(b<1)b=1
z=this.a
if(z!==b){this.y=null
this.a=b
this.c=b
z=new D.w("width",z,b,this,[P.u])
z.b=!0
this.af(z)}},
sau:function(a,b){var z
if(b<1)b=1
z=this.b
if(z!==b){this.y=null
this.b=b
this.d=b
z=new D.w("height",z,b,this,[P.u])
z.b=!0
this.af(z)}},
H:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n
if(this.f){z=a.a
y=z.drawingBufferWidth
x=this.r
if(typeof y!=="number")return y.u()
this.saz(0,C.h.X(y*x))
z=z.drawingBufferHeight
x=this.x
if(typeof z!=="number")return z.u()
this.sau(0,C.h.X(z*x))}if(this.y==null){z=a.a
y=this.ch
x=this.a
w=this.b
v=H.a3(C.b.bU(z,3379))
u=V.bH(x,2)
t=V.bH(w,2)
v=V.bH(v,2)
u=Math.min(u,v)
t=Math.min(t,v)
s=z.createTexture()
C.b.a6(z,3553,s)
C.b.ay(z,3553,10242,33071)
C.b.ay(z,3553,10243,33071)
C.b.ay(z,3553,10241,9729)
C.b.ay(z,3553,10240,9729)
C.b.eu(z,3553,0,6408,u,t,0,6408,5121,null)
C.b.a6(z,3553,null)
r=T.et(0,s)
r.e=x
r.f=w
r.r=u
r.x=t
if(!r.d){r.d=!0
x=r.y
if(!(x==null))x.cu()}y.b=r.b
y.c=r.c
y.d=r.d
y.e=r.e
y.f=r.f
y.r=r.r
y.x=r.x
y=y.y
if(!(y==null))y.cu()
y=this.ch
x=y.b
this.z=x
this.c=y.r
this.d=y.x
C.b.a6(z,3553,x)
y=z.createRenderbuffer()
this.Q=y
C.b.dG(z,36161,y)
C.b.jn(z,36161,33189,this.c,this.d)
y=z.createFramebuffer()
this.y=y
C.b.b4(z,36160,y)
C.b.iU(z,36160,36064,3553,this.z,0)
C.b.iT(z,36160,36096,36161,this.Q)
C.b.a6(z,3553,null)
C.b.dG(z,36161,null)
C.b.b4(z,36160,null)}z=a.a
C.b.b4(z,36160,this.y)
C.b.ba(z,2884)
C.b.ba(z,2929)
C.b.dU(z,513)
y=this.dy
x=y.c
a.c=C.i.X(x*this.a)
w=y.d
a.d=C.i.X(w*this.b)
q=y.a
p=this.c
o=C.i.X(q*p)
y=y.b
q=this.d
C.b.ez(z,o,C.i.X(y*q),C.i.X(x*p),C.i.X(w*q))
C.b.dO(z,this.db)
if(this.cy){y=this.cx
C.b.dN(z,y.a,y.b,y.c,y.d)
n=16640}else n=256
if(n>0)C.b.dM(z,n)},
a2:function(a){C.b.b4(a.a,36160,null)},
m:{
dt:function(a,b,c,d,e,f){var z=new X.fL()
z.a=512
z.b=512
z.c=512
z.d=512
z.e=!0
z.f=!0
z.r=d
z.x=e
z.ch=T.et(0,null)
z.cx=new V.aa(0,0,0,1)
z.cy=!0
z.db=2000
z.dx=!0
z.dy=V.cS()
z.saz(0,a)
z.sau(0,b)
return z}}},bY:{"^":"a;",$isay:1},hl:{"^":"cc;0a,0b,0c,0d,0e,0f,0r,0x",
gl:function(){var z=this.x
if(z==null){z=D.z()
this.x=z}return z},
H:function(a){var z,y,x,w,v,u,t,s
z=a.a
C.b.b4(z,36160,null)
C.b.ba(z,2884)
C.b.ba(z,2929)
C.b.dU(z,513)
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
v=w.a
if(typeof y!=="number")return H.D(y)
u=C.i.X(v*y)
v=w.b
if(typeof x!=="number")return H.D(x)
t=C.i.X(v*x)
v=C.i.X(w.c*y)
a.c=v
w=C.i.X(w.d*x)
a.d=w
C.b.ez(z,u,t,v,w)
C.b.dO(z,this.c)
if(this.b){w=this.a
C.b.dN(z,w.a,w.b,w.c,w.d)
s=16640}else s=256
C.b.dM(z,s)},
a2:function(a){},
m:{
cG:function(a,b,c,d,e,f,g){var z,y
z=new X.hl()
y=new V.aa(0,0,0,1)
z.a=y
z.b=a
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.cS()
z.r=y
return z}}},ho:{"^":"a;0a,0b",
gl:function(){var z=this.b
if(z==null){z=D.z()
this.b=z}return z},
H:function(a){var z
a.cy.bQ(V.aw())
z=V.aw()
a.db.bQ(z)},
a2:function(a){a.cy.aG()
a.db.aG()},
$isay:1,
$isbY:1},i4:{"^":"a;0a,0b,0c,0d,0e,0f",
gl:function(){var z=this.f
if(z==null){z=D.z()
this.f=z}return z},
af:[function(a){var z
H.f(a,"$isp")
z=this.f
if(!(z==null))z.w(a)},function(){return this.af(null)},"jG","$1","$0","gd2",0,2,0],
sbe:function(a){var z,y
if(!J.B(this.b,a)){z=this.b
if(z!=null)z.gl().F(0,this.gd2())
y=this.b
this.b=a
if(a!=null)a.gl().h(0,this.gd2())
z=new D.w("mover",y,this.b,this,[U.a7])
z.b=!0
this.af(z)}},
H:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=this.c
w=this.d
v=this.e
u=v-w
t=1/Math.tan(x*0.5)
s=V.aE(-t/(z/y),0,0,0,0,t,0,0,0,0,v/u,-v*w/u,0,0,1,0)
a.cy.bQ(s)
z=$.ee
if(z==null){z=V.eh()
y=V.eZ()
x=$.eV
if(x==null){x=new V.E(0,0,-1)
$.eV=x}x=V.e5(z,y,x)
$.ee=x
r=x}else r=z
z=this.b
if(z!=null){q=z.aX(a,this)
if(q!=null)r=q.u(0,r)}a.db.bQ(r)},
a2:function(a){a.cy.aG()
a.db.aG()},
$isay:1,
$isbY:1,
m:{
ed:function(a,b,c,d,e){var z,y,x
z=new X.i4()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
z.sbe(c)
y=z.c
if(!$.m.$2(y,b)){x=z.c
z.c=b
y=new D.w("fov",x,b,z,[P.q])
y.b=!0
z.af(y)}y=z.d
if(!$.m.$2(y,d)){x=z.d
z.d=d
y=new D.w("near",x,d,z,[P.q])
y.b=!0
z.af(y)}y=z.e
if(!$.m.$2(y,a)){x=z.e
z.e=a
y=new D.w("far",x,a,z,[P.q])
y.b=!0
z.af(y)}return z}}},cc:{"^":"a;"}}],["","",,V,{"^":"",
kV:function(a){P.j_(C.B,new V.kW(a))},
kW:{"^":"t:36;a",
$1:function(a){H.f(a,"$isb_")
P.dn(C.i.ew(this.a.giS(),2)+" fps")}},
iB:{"^":"a;0a,0b",
f_:function(a,b){var z,y,x,w,v,u,t
z=document
y=z.body
x=z.createElement("div")
x.className="scrollTop";(y&&C.q).a5(y,x)
w=z.createElement("div")
w.className="scrollPage"
C.q.a5(y,w)
v=z.createElement("div")
v.className="pageCenter"
C.l.a5(w,v)
if(a.length!==0){z.title=a
u=z.createElement("div")
u.className="pageTitle"
u.textContent=a
C.l.a5(v,u)}t=z.createElement("div")
this.a=t
C.l.a5(v,t)
this.b=null
t=W.a4
W.T(z,"scroll",H.l(new V.iE(x),{func:1,ret:-1,args:[t]}),!1,t)},
dE:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.e(a,"$isb",[P.A],"$asb")
this.hH()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.jA(C.a.iY(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.v)(x),++v){u=x[v]
switch(u.a){case"Bold":t=z.createElement("div")
t.className="boldPar"
t.textContent=u.b
C.l.a5(y,t)
break
case"Italic":t=z.createElement("div")
t.className="italicPar"
t.textContent=u.b
C.l.a5(y,t)
break
case"Code":t=z.createElement("div")
t.className="codePar"
t.textContent=u.b
C.l.a5(y,t)
break
case"Link":s=u.b
if(H.fB(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.h(r,1)
q.href=H.N(r[1])
q.textContent=H.N(r[0])
C.l.a5(y,q)}else{p=P.kd(C.M,s,C.w,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+p
q.textContent=s
C.l.a5(y,q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
C.l.a5(y,t)
break}}C.l.a5(this.a,y)},
hH:function(){var z,y,x,w
if(this.b!=null)return
z=new V.j0()
y=P.A
z.shO(new H.bi(0,0,[y,V.cV]))
z.shU(new H.bi(0,0,[y,V.d_]))
z.c=null
z.c=z.N(0,"Start")
y=z.N(0,"Start").E(0,"Bold")
x=V.a2(new H.Z("*"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Bold").E(0,"Bold")
x=new V.bn()
w=[V.bl]
x.saD(H.d([],w))
C.a.h(y.a,x)
y=V.a2(new H.Z("*"))
C.a.h(x.a,y)
y=z.N(0,"Bold").E(0,"BoldEnd")
x=V.a2(new H.Z("*"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Start").E(0,"Italic")
x=V.a2(new H.Z("_"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Italic").E(0,"Italic")
x=new V.bn()
x.saD(H.d([],w))
C.a.h(y.a,x)
y=V.a2(new H.Z("_"))
C.a.h(x.a,y)
y=z.N(0,"Italic").E(0,"ItalicEnd")
x=V.a2(new H.Z("_"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Start").E(0,"Code")
x=V.a2(new H.Z("`"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Code").E(0,"Code")
x=new V.bn()
x.saD(H.d([],w))
C.a.h(y.a,x)
y=V.a2(new H.Z("`"))
C.a.h(x.a,y)
y=z.N(0,"Code").E(0,"CodeEnd")
x=V.a2(new H.Z("`"))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"Start").E(0,"LinkHead")
x=V.a2(new H.Z("["))
C.a.h(y.a,x)
y.c=!0
y=z.N(0,"LinkHead").E(0,"LinkTail")
x=V.a2(new H.Z("|"))
C.a.h(y.a,x)
x=z.N(0,"LinkHead").E(0,"LinkEnd")
y=V.a2(new H.Z("]"))
C.a.h(x.a,y)
x.c=!0
x=z.N(0,"LinkHead").E(0,"LinkHead")
y=new V.bn()
y.saD(H.d([],w))
C.a.h(x.a,y)
x=V.a2(new H.Z("|]"))
C.a.h(y.a,x)
x=z.N(0,"LinkTail").E(0,"LinkEnd")
y=V.a2(new H.Z("]"))
C.a.h(x.a,y)
x.c=!0
x=z.N(0,"LinkTail").E(0,"LinkTail")
y=new V.bn()
y.saD(H.d([],w))
C.a.h(x.a,y)
x=V.a2(new H.Z("|]"))
C.a.h(y.a,x)
C.a.h(z.N(0,"Start").E(0,"Other").a,new V.fI())
x=z.N(0,"Other").E(0,"Other")
y=new V.bn()
y.saD(H.d([],w))
C.a.h(x.a,y)
x=V.a2(new H.Z("*_`["))
C.a.h(y.a,x)
x=z.N(0,"BoldEnd")
x.d=x.a.bl("Bold")
x=z.N(0,"ItalicEnd")
x.d=x.a.bl("Italic")
x=z.N(0,"CodeEnd")
x.d=x.a.bl("Code")
x=z.N(0,"LinkEnd")
x.d=x.a.bl("Link")
x=z.N(0,"Other")
x.d=x.a.bl("Other")
this.b=z},
m:{
iC:function(a,b){var z=new V.iB()
z.f_(a,!0)
return z}}},
iE:{"^":"t:11;a",
$1:function(a){P.eA(C.n,new V.iD(this.a))}},
iD:{"^":"t:1;a",
$0:function(){var z,y,x
z=C.i.X(document.documentElement.scrollTop)
y=this.a.style
x=H.i(-0.01*z)+"px"
y.top=x}}}],["","",,S,{"^":"",
fx:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
z=V.iC("Test 031",!0)
y=W.cA(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
C.l.a5(z.a,y)
x=[P.A]
z.dE(H.d(["A test of the Distortion cover with a dynamic normal map. ","The distortion map is generated into one back buffer. ","The scene is generated into another back buffer. ","The two parts are combined with a Distortion cover. ","Use mouse to rotate cube in normal map and Ctrl plus mouse ","to rotate scene."],x))
z.dE(H.d(["\xab[Back to Tests|../]"],x))
w=C.C.eH(document,"testCanvas")
if(w==null)H.o(P.n("Failed to find an element with the identifier, testCanvas."))
v=E.iY(w,!0,!0,!0,!1)
u=E.cF(null,!0,null,"",null,null)
t=F.cU()
F.bA(t,null,null,1,1,1,0,0,1)
F.bA(t,null,null,1,1,0,1,0,3)
F.bA(t,null,null,1,1,0,0,1,2)
F.bA(t,null,null,1,1,-1,0,0,0)
F.bA(t,null,null,1,1,0,-1,0,0)
F.bA(t,null,null,1,1,0,0,-1,3)
t.am()
u.sbp(0,t)
z=U.dR(null)
z.h(0,U.eS(!1,!1,v.r,!1,!1,!1,null,!1))
z.h(0,U.eT(!1,!1,v.r,null,!1))
u.sbe(z)
s=new O.i_()
s.b=V.cO()
s.c=V.aw()
s.d=C.c
s.dv(null)
s.dw(null)
s.a8()
s.r=null
z=v.f.j1("../resources/diceBumpMap")
if(s.d!==C.d){s.d=C.d
s.dv(null)
s.a=null}s.dw(z)
r=X.dt(800,600,!0,1,1,!0)
q=new V.aa(0.5,0.5,1,1)
if(!r.cx.q(0,q)){p=r.cx
r.cx=q
z=new D.w("color",p,q,r,[V.aa])
z.b=!0
r.af(z)}o=M.dO(null,null,null,null)
o.sax(s)
o.saH(0,r)
o.d.h(0,u)
o.a.sbe(U.cD(V.e7(0,0,5)))
n=U.dR(null)
n.h(0,U.eS(!1,!0,v.r,!1,!1,!1,null,!1))
n.h(0,U.eT(!1,!0,v.r,null,!1))
n.h(0,U.cD(V.e7(0,0,5)))
m=X.ed(2000,1.0471975511965976,n,0.1,null)
l=X.dt(800,600,!0,1,1,!0)
if(l.cy){l.cy=!1
z=new D.w("clearColor",!0,!1,l,[P.U])
z.b=!0
l.af(z)}k=E.cF(null,!0,null,"",null,null)
k.sbp(0,F.kY(30,1,15,0.5))
j=new O.hN()
j.sfk(O.bZ(V.a5))
j.e.aI(j.gh0(),j.gh1())
z=new O.aV(j,"emission")
z.c=C.c
z.f=new V.V(0,0,0)
j.f=z
z=new O.aV(j,"ambient")
z.c=C.c
z.f=new V.V(0,0,0)
j.r=z
z=new O.aV(j,"diffuse")
z.c=C.c
z.f=new V.V(0,0,0)
j.x=z
z=new O.aV(j,"invDiffuse")
z.c=C.c
z.f=new V.V(0,0,0)
j.y=z
z=new O.hT(j,"specular")
z.c=C.c
z.f=new V.V(0,0,0)
z.ch=100
j.z=z
z=new O.hQ(j,"bump")
z.c=C.c
j.Q=z
j.ch=null
z=new O.aV(j,"reflect")
z.c=C.c
z.f=new V.V(0,0,0)
j.cx=z
z=new O.hS(j,"refract")
z.c=C.c
z.f=new V.V(0,0,0)
z.ch=1
j.cy=z
z=new O.hP(j,"alpha")
z.c=C.c
z.f=1
j.db=z
z=new D.hx()
z.bq(D.X)
z.sfA(H.d([],[D.c0]))
z.shs(H.d([],[D.ef]))
z.shL(H.d([],[D.eo]))
z.shZ(H.d([],[D.ew]))
z.si_(H.d([],[D.ex]))
z.si0(H.d([],[D.ey]))
z.Q=null
z.ch=null
z.cV(z.gh_(),z.ghk(),z.ghm())
j.dx=z
x=z.Q
if(x==null){x=D.z()
z.Q=x
z=x}else z=x
z.h(0,j.ghz())
z=j.dx
x=z.ch
if(x==null){x=D.z()
z.ch=x
z=x}else z=x
z.h(0,j.gae())
j.dy=null
z=j.dx
i=V.eZ()
x=U.cD(V.e5(V.eh(),i,new V.E(0,-1,-1)))
q=new V.V(1,1,1)
h=new D.c0()
h.c=new V.V(1,1,1)
h.a=V.f_()
p=h.b
h.b=x
x.gl().h(0,h.gf5())
x=new D.w("mover",p,h.b,h,[U.a7])
x.b=!0
h.aK(x)
if(!h.c.q(0,q)){p=h.c
h.c=q
x=new D.w("color",p,q,h,[V.V])
x.b=!0
h.aK(x)}z.h(0,h)
z=j.r
z.sar(0,new V.V(0,0,1))
z=j.x
z.sar(0,new V.V(0,1,0))
z=j.z
z.sar(0,new V.V(1,0,0))
z=j.z
if(z.c===C.c){z.c=C.f
z.bW()
z.cc(100)
x=z.a
x.a=null
x.I(null)}z.cc(10)
z=v.f.j2("../resources/maskonaive",".jpg")
g=M.cE(null,null,null)
x=new O.iG()
x.b=1.0471975511965976
x.d=new V.V(1,1,1)
p=x.c
x.c=z
z.gl().h(0,x.gae())
z=new D.w("boxTexture",p,x.c,x,[T.cY])
z.b=!0
x.I(z)
g.sax(x)
g.saH(0,l)
g.sb6(m)
f=M.dO(null,null,null,null)
f.sb6(m)
f.sax(j)
f.saH(0,l)
f.d.h(0,k)
e=new O.h2()
e.sdQ(null)
e.sdK(null)
d=V.cO()
if(!J.B(e.d,d)){e.d=d
e.a8()}d=V.cO()
if(!J.B(e.e,d)){e.e=d
e.a8()}e.sdJ(null)
e.sdQ(l.ch)
e.sdK(r.ch)
e.sdJ(V.e6(0.05,0.05,0.05,1))
c=M.cE(null,null,null)
c.sax(e)
b=new O.iS()
a=new V.aa(0,0,0,0)
b.a=a
z=new D.w("backColor",null,a,b,[V.aa])
z.b=!0
b.I(z)
b.b=null
b.sfC(O.bZ(O.aZ))
b.c.aI(b.gh8(),b.gh9())
b.d=0
b.e=null
z=b.c
x=r.ch
z.h(0,O.ev(null,V.br(0,0.8,0.2,0.2),!0,null,x))
x=b.c
z=l.ch
x.h(0,O.ev(null,V.br(0,0.6,0.2,0.2),!1,null,z))
a0=M.cE(null,null,null)
a0.saH(0,X.cG(!1,!0,!1,null,2000,null,0))
a0.sax(b)
z=M.az
x=H.d([g,f,o,c,a0],[z])
h=new M.fV()
h.bq(z)
h.e=!1
h.f=null
h.aI(h.ghn(),h.gho())
h.ci(0,x)
z=v.d
if(z!==h){if(z!=null)z.gl().F(0,v.gd0())
v.d=h
h.gl().h(0,v.gd0())
v.f3()}V.kV(v)}},1]]
setupProgram(dart,0,0)
J.M=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dW.prototype
return J.dV.prototype}if(typeof a=="string")return J.c6.prototype
if(a==null)return J.dX.prototype
if(typeof a=="boolean")return J.hs.prototype
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bO.prototype
return a}if(a instanceof P.a)return a
return J.co(a)}
J.cn=function(a){if(typeof a=="string")return J.c6.prototype
if(a==null)return a
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bO.prototype
return a}if(a instanceof P.a)return a
return J.co(a)}
J.ft=function(a){if(a==null)return a
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bO.prototype
return a}if(a instanceof P.a)return a
return J.co(a)}
J.kC=function(a){if(typeof a=="number")return J.bN.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.ce.prototype
return a}
J.kD=function(a){if(typeof a=="number")return J.bN.prototype
if(typeof a=="string")return J.c6.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.ce.prototype
return a}
J.bV=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bO.prototype
return a}if(a instanceof P.a)return a
return J.co(a)}
J.B=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.M(a).q(a,b)}
J.fF=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kC(a).aA(a,b)}
J.dp=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kD(a).u(a,b)}
J.fG=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kM(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cn(a).j(a,b)}
J.fH=function(a,b,c,d){return J.bV(a).fg(a,b,c,d)}
J.dq=function(a,b){return J.bV(a).a5(a,b)}
J.cu=function(a,b,c){return J.cn(a).iB(a,b,c)}
J.dr=function(a,b){return J.ft(a).ah(a,b)}
J.aT=function(a){return J.M(a).gZ(a)}
J.bW=function(a){return J.ft(a).gR(a)}
J.bI=function(a){return J.cn(a).gn(a)}
J.ae=function(a){return J.M(a).i(a)}
I.dl=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.q=W.fM.prototype
C.m=W.cz.prototype
C.r=W.cB.prototype
C.l=W.dM.prototype
C.C=W.hn.prototype
C.D=J.G.prototype
C.a=J.aU.prototype
C.E=J.dV.prototype
C.h=J.dW.prototype
C.o=J.dX.prototype
C.i=J.bN.prototype
C.j=J.c6.prototype
C.L=J.bO.prototype
C.N=W.hZ.prototype
C.v=J.i5.prototype
C.b=P.cT.prototype
C.p=J.ce.prototype
C.x=W.by.prototype
C.y=W.jy.prototype
C.z=new P.i3()
C.A=new P.jk()
C.k=new P.k3()
C.c=new A.c_(0,"ColorSourceType.None")
C.f=new A.c_(1,"ColorSourceType.Solid")
C.e=new A.c_(2,"ColorSourceType.Texture2D")
C.d=new A.c_(3,"ColorSourceType.TextureCube")
C.n=new P.be(0)
C.B=new P.be(5e6)
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
C.M=H.d(I.dl([0,0,65498,45055,65535,34815,65534,18431]),[P.u])
C.w=new P.jj(!1)
$.au=0
$.bb=null
$.du=null
$.dc=!1
$.fv=null
$.fo=null
$.fA=null
$.cm=null
$.cq=null
$.dk=null
$.b4=null
$.bC=null
$.bD=null
$.dd=!1
$.I=C.k
$.dJ=null
$.dI=null
$.dH=null
$.dG=null
$.m=V.hU()
$.e4=null
$.c8=null
$.eg=null
$.bo=null
$.bs=null
$.eU=null
$.eY=null
$.eW=null
$.eX=null
$.cf=null
$.eV=null
$.h4="uniform mat4 projViewObjMat;                             \nuniform mat3 colorTxt2DMat;                              \nuniform mat3 bumpTxt2DMat;                               \n                                                         \nattribute vec3 posAttr;                                  \nattribute vec2 txt2DAttr;                                \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvoid main()                                              \n{                                                        \n   vec3 txt2D = vec3(txt2DAttr.x, 1.0-txt2DAttr.y, 1.0); \n   colorTxt2D = (colorTxt2DMat * txt2D).xy;              \n   bumpTxt2D = (bumpTxt2DMat * vec3(txt2DAttr, 1.0)).xy; \n   gl_Position = projViewObjMat * vec4(posAttr, 1.0);    \n}                                                        \n"
$.h3="precision mediump float;                                 \n                                                         \nuniform sampler2D colorTxt;                              \nuniform sampler2D bumpTxt;                               \nuniform int nullColorTxt;                                \nuniform int nullBumpTxt;                                 \nuniform mat4 bumpMat;                                    \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvec2 offset()                                            \n{                                                        \n   if(nullBumpTxt > 0) return vec2(0.0, 0.0);            \n   vec3 txt2D = texture2D(bumpTxt, bumpTxt2D).rgb;       \n   txt2D = normalize(txt2D*2.0 - 1.0);                   \n   return (bumpMat * vec4(txt2D, 1.0)).xy;               \n}                                                        \n                                                         \nvoid main()                                              \n{                                                        \n   if(nullColorTxt > 0) gl_FragColor = vec4(1.0);        \n   else                                                  \n   {                                                     \n      vec2 txt2D = colorTxt2D + offset();                \n      gl_FragColor = texture2D(colorTxt, txt2D);         \n   }                                                     \n}                                                        \n"
$.iI="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.iH="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.ee=null
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
I.$lazy(y,x,w)}})(["dF","$get$dF",function(){return H.fu("_$dart_dartClosure")},"cJ","$get$cJ",function(){return H.fu("_$dart_js")},"eE","$get$eE",function(){return H.aA(H.cd({
toString:function(){return"$receiver$"}}))},"eF","$get$eF",function(){return H.aA(H.cd({$method$:null,
toString:function(){return"$receiver$"}}))},"eG","$get$eG",function(){return H.aA(H.cd(null))},"eH","$get$eH",function(){return H.aA(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eL","$get$eL",function(){return H.aA(H.cd(void 0))},"eM","$get$eM",function(){return H.aA(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eJ","$get$eJ",function(){return H.aA(H.eK(null))},"eI","$get$eI",function(){return H.aA(function(){try{null.$method$}catch(z){return z.message}}())},"eO","$get$eO",function(){return H.aA(H.eK(void 0))},"eN","$get$eN",function(){return H.aA(function(){try{(void 0).$method$}catch(z){return z.message}}())},"da","$get$da",function(){return P.jz()},"bE","$get$bE",function(){return[]},"fh","$get$fh",function(){return P.ik("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dE","$get$dE",function(){return{}},"f2","$get$f2",function(){return Z.aj(0)},"f0","$get$f0",function(){return Z.aj(511)},"Y","$get$Y",function(){return Z.aj(1)},"as","$get$as",function(){return Z.aj(2)},"ar","$get$ar",function(){return Z.aj(4)},"ac","$get$ac",function(){return Z.aj(8)},"at","$get$at",function(){return Z.aj(16)},"bw","$get$bw",function(){return Z.aj(32)},"bx","$get$bx",function(){return Z.aj(64)},"f1","$get$f1",function(){return Z.aj(96)},"b1","$get$b1",function(){return Z.aj(128)},"aK","$get$aK",function(){return Z.aj(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.p]},{func:1,ret:P.F},{func:1,ret:-1,args:[D.p]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ap]},{func:1,ret:P.F,args:[F.a0]},{func:1,ret:-1,args:[P.u,[P.k,E.ao]]},{func:1,ret:P.F,args:[D.p]},{func:1,ret:-1,args:[W.a4]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.b0]},{func:1,ret:P.F,args:[W.a4]},{func:1,ret:-1,args:[P.u,[P.k,V.a5]]},{func:1,ret:P.F,args:[F.ah,P.q,P.q]},{func:1,ret:P.F,args:[,,]},{func:1,ret:P.A,args:[P.u]},{func:1,ret:-1,args:[P.u,[P.k,M.az]]},{func:1,ret:P.F,args:[,]},{func:1,args:[,]},{func:1,ret:-1,args:[P.u,[P.k,O.aZ]]},{func:1,ret:-1,args:[P.u,[P.k,U.a7]]},{func:1,ret:P.q},{func:1,ret:-1,args:[W.bj]},{func:1,ret:-1,args:[P.u,[P.k,D.X]]},{func:1,ret:P.U,args:[[P.k,D.X]]},{func:1,ret:P.U,args:[P.q,P.q]},{func:1,ret:P.F,args:[{func:1,ret:-1,args:[D.p]}]},{func:1,ret:P.F,args:[P.ad]},{func:1,ret:P.U,args:[W.K]},{func:1,args:[W.a4]},{func:1,ret:[P.aL,,],args:[,]},{func:1,ret:V.R,args:[P.q]},{func:1,ret:W.a_,args:[W.K]},{func:1,ret:P.F,args:[,],opt:[,]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,args:[P.A]},{func:1,ret:P.F,args:[P.b_]},{func:1,args:[,P.A]},{func:1,ret:-1,args:[W.by]}]
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
if(x==y)H.kX(d||a)
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
Isolate.dl=a.dl
Isolate.di=a.di
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
if(typeof dartMainRunner==="function")dartMainRunner(S.fx,[])
else S.fx([])})})()
//# sourceMappingURL=test.dart.js.map
