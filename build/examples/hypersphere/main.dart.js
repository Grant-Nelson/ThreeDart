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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isL)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.dd"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dd"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.dd(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.de=function(){}
var dart=[["","",,H,{"^":"",kS:{"^":"a;a"}}],["","",,J,{"^":"",
dj:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ck:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dg==null){H.kg()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.h(P.eA("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cE()]
if(v!=null)return v
v=H.kl(a)
if(v!=null)return v
if(typeof a=="function")return C.J
y=Object.getPrototypeOf(a)
if(y==null)return C.w
if(y===Object.prototype)return C.w
if(typeof w=="function"){Object.defineProperty(w,$.$get$cE(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
L:{"^":"a;",
v:function(a,b){return a===b},
gZ:function(a){return H.bw(a)},
i:["f2",function(a){return"Instance of '"+H.b9(a)+"'"}],
"%":"CanvasRenderingContext2D|DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo|WebGLRenderbuffer|WebGLTexture"},
hh:{"^":"L;",
i:function(a){return String(a)},
gZ:function(a){return a?519018:218159},
$isY:1},
dP:{"^":"L;",
v:function(a,b){return null==b},
i:function(a){return"null"},
gZ:function(a){return 0},
$isE:1},
cF:{"^":"L;",
gZ:function(a){return 0},
i:["f3",function(a){return String(a)}]},
hR:{"^":"cF;"},
d4:{"^":"cF;"},
bR:{"^":"cF;",
i:function(a){var z=a[$.$get$dA()]
if(z==null)return this.f3(a)
return"JavaScript function for "+H.j(J.af(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscB:1},
b2:{"^":"L;$ti",
h:function(a,b){H.x(b,H.t(a,0))
if(!!a.fixed$length)H.o(P.ao("add"))
a.push(b)},
jm:function(a,b){var z
if(!!a.fixed$length)H.o(P.ao("removeAt"))
z=a.length
if(b>=z)throw H.h(P.bU(b,null,null))
return a.splice(b,1)[0]},
A:function(a,b){var z
if(!!a.fixed$length)H.o(P.ao("remove"))
for(z=0;z<a.length;++z)if(J.A(a[z],b)){a.splice(z,1)
return!0}return!1},
cj:function(a,b){var z,y
H.i(b,"$isl",[H.t(a,0)],"$asl")
if(!!a.fixed$length)H.o(P.ao("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.u)(b),++y)a.push(b[y])},
a_:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.h(P.bl(a))}},
E:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.a2(z,y,H.j(a[y]))
return z.join(b)},
j1:function(a){return this.E(a,"")},
ad:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
f1:function(a,b,c){var z=a.length
if(b>z)throw H.h(P.ak(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.h(P.ak(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.t(a,0)])
return H.c(a.slice(b,c),[H.t(a,0)])},
giW:function(a){if(a.length>0)return a[0]
throw H.h(H.dM())},
gcI:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.h(H.dM())},
b5:function(a,b){var z
for(z=0;z<a.length;++z)if(J.A(a[z],b))return!0
return!1},
i:function(a){return P.cC(a,"[","]")},
gS:function(a){return new J.ag(a,a.length,0,[H.t(a,0)])},
gZ:function(a){return H.bw(a)},
gq:function(a){return a.length},
sq:function(a,b){if(!!a.fixed$length)H.o(P.ao("set length"))
if(b<0)throw H.h(P.ak(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.aX(a,b))
if(b>=a.length||b<0)throw H.h(H.aX(a,b))
return a[b]},
a2:function(a,b,c){H.x(c,H.t(a,0))
if(!!a.immutable$list)H.o(P.ao("indexed set"))
if(b>=a.length||b<0)throw H.h(H.aX(a,b))
a[b]=c},
$isl:1,
$isb:1,
m:{
hg:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.cs(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.ak(a,0,4294967295,"length",null))
return J.dN(new Array(a),b)},
dN:function(a,b){return J.c6(H.c(a,[b]))},
c6:function(a){H.cn(a)
a.fixed$length=Array
return a}}},
kR:{"^":"b2;$ti"},
ag:{"^":"a;a,b,c,0d,$ti",
sdi:function(a){this.d=H.x(a,H.t(this,0))},
gL:function(){return this.d},
C:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.h(H.u(z))
x=this.c
if(x>=y){this.sdi(null)
return!1}this.sdi(z[x]);++this.c
return!0},
$isaS:1},
c7:{"^":"L;",
cu:function(a,b){var z
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=C.h.gbP(b)
if(this.gbP(a)===z)return 0
if(this.gbP(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbP:function(a){return a===0?1/a<0:a<0},
eq:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.h(P.ao(""+a+".floor()"))},
aq:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.ao(""+a+".round()"))},
iA:function(a,b,c){if(C.h.cu(b,c)>0)throw H.h(H.aQ(b))
if(this.cu(a,b)<0)return b
if(this.cu(a,c)>0)return c
return a},
jx:function(a,b){var z
if(b>20)throw H.h(P.ak(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gbP(a))return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gZ:function(a){return a&0x1FFFFFFF},
n:function(a,b){if(typeof b!=="number")throw H.h(H.aQ(b))
return a*b},
eZ:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
a8:function(a,b){return(a|0)===a?a/b|0:this.hP(a,b)},
hP:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.h(P.ao("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
bv:function(a,b){var z
if(a>0)z=this.hL(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
hL:function(a,b){return b>31?0:a>>>b},
ar:function(a,b){if(typeof b!=="number")throw H.h(H.aQ(b))
return a<b},
$isr:1,
$isae:1},
dO:{"^":"c7;",$isw:1},
hi:{"^":"c7;"},
cD:{"^":"L;",
ct:function(a,b){if(b<0)throw H.h(H.aX(a,b))
if(b>=a.length)H.o(H.aX(a,b))
return a.charCodeAt(b)},
br:function(a,b){if(b>=a.length)throw H.h(H.aX(a,b))
return a.charCodeAt(b)},
D:function(a,b){H.R(b)
if(typeof b!=="string")throw H.h(P.cs(b,null,null))
return a+b},
d8:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.bU(b,null,null))
if(b>c)throw H.h(P.bU(b,null,null))
if(c>a.length)throw H.h(P.bU(c,null,null))
return a.substring(b,c)},
d7:function(a,b){return this.d8(a,b,null)},
n:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.z)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
jd:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.n(c,z)+a},
ag:function(a,b){return this.jd(a,b," ")},
iH:function(a,b,c){if(c>a.length)throw H.h(P.ak(c,0,a.length,null,null))
return H.fn(a,b,c)},
i:function(a){return a},
gZ:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gq:function(a){return a.length},
$ise0:1,
$isz:1}}],["","",,H,{"^":"",
dM:function(){return new P.ir("No element")},
a1:{"^":"iS;a",
gq:function(a){return this.a.length},
j:function(a,b){return C.j.ct(this.a,b)},
$aseB:function(){return[P.w]},
$asW:function(){return[P.w]},
$asl:function(){return[P.w]},
$asb:function(){return[P.w]}},
fR:{"^":"l;"},
dS:{"^":"a;a,b,c,0d,$ti",
saY:function(a){this.d=H.x(a,H.t(this,0))},
gL:function(){return this.d},
C:function(){var z,y,x,w
z=this.a
y=J.cj(z)
x=y.gq(z)
if(this.b!==x)throw H.h(P.bl(z))
w=this.c
if(w>=x){this.saY(null)
return!1}this.saY(y.ad(z,w));++this.c
return!0},
$isaS:1},
hA:{"^":"l;a,b,$ti",
gS:function(a){return new H.hB(J.c_(this.a),this.b,this.$ti)},
gq:function(a){return J.bJ(this.a)},
ad:function(a,b){return this.b.$1(J.dl(this.a,b))},
$asl:function(a,b){return[b]}},
hB:{"^":"aS;0a,b,c,$ti",
saY:function(a){this.a=H.x(a,H.t(this,1))},
C:function(){var z=this.b
if(z.C()){this.saY(this.c.$1(z.gL()))
return!0}this.saY(null)
return!1},
gL:function(){return this.a},
$asaS:function(a,b){return[b]}},
ja:{"^":"l;a,b,$ti",
gS:function(a){return new H.jb(J.c_(this.a),this.b,this.$ti)}},
jb:{"^":"aS;a,b,$ti",
C:function(){var z,y
for(z=this.a,y=this.b;z.C();)if(y.$1(z.gL()))return!0
return!1},
gL:function(){return this.a.gL()}},
c4:{"^":"a;$ti"},
eB:{"^":"a;$ti"},
iS:{"^":"c8+eB;"}}],["","",,H,{"^":"",
bj:function(a){var z,y
z=H.R(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
kb:function(a){return init.types[H.a5(a)]},
kj:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.V(a).$isaG},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.af(a)
if(typeof z!=="string")throw H.h(H.aQ(a))
return z},
bw:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b9:function(a){return H.hT(a)+H.db(H.aY(a),0,null)},
hT:function(a){var z,y,x,w,v,u,t,s,r
z=J.V(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.C||!!z.$isd4){u=C.u(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.bj(w.length>1&&C.j.br(w,0)===36?C.j.d7(w,1):w)},
e5:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
i1:function(a){var z,y,x,w
z=H.c([],[P.w])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.u)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.h(H.aQ(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.bv(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.h(H.aQ(w))}return H.e5(z)},
e6:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.h(H.aQ(x))
if(x<0)throw H.h(H.aQ(x))
if(x>65535)return H.i1(a)}return H.e5(a)},
i0:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.bv(z,10))>>>0,56320|z&1023)}throw H.h(P.ak(a,0,1114111,null,null))},
b8:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
i_:function(a){var z=H.b8(a).getFullYear()+0
return z},
hY:function(a){var z=H.b8(a).getMonth()+1
return z},
hU:function(a){var z=H.b8(a).getDate()+0
return z},
hV:function(a){var z=H.b8(a).getHours()+0
return z},
hX:function(a){var z=H.b8(a).getMinutes()+0
return z},
hZ:function(a){var z=H.b8(a).getSeconds()+0
return z},
hW:function(a){var z=H.b8(a).getMilliseconds()+0
return z},
y:function(a){throw H.h(H.aQ(a))},
f:function(a,b){if(a==null)J.bJ(a)
throw H.h(H.aX(a,b))},
aX:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.b0(!0,b,"index",null)
z=H.a5(J.bJ(a))
if(!(b<0)){if(typeof z!=="number")return H.y(z)
y=b>=z}else y=!0
if(y)return P.bp(b,a,"index",null,z)
return P.bU(b,"index",null)},
k6:function(a,b,c){if(a>c)return new P.ca(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.ca(a,c,!0,b,"end","Invalid value")
return new P.b0(!0,b,"end",null)},
aQ:function(a){return new P.b0(!0,a,null,null)},
h:function(a){var z
if(a==null)a=new P.e_()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fp})
z.name=""}else z.toString=H.fp
return z},
fp:function(){return J.af(this.dartException)},
o:function(a){throw H.h(a)},
u:function(a){throw H.h(P.bl(a))},
aZ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kG(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.bv(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cG(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dZ(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$ep()
u=$.$get$eq()
t=$.$get$er()
s=$.$get$es()
r=$.$get$ew()
q=$.$get$ex()
p=$.$get$eu()
$.$get$et()
o=$.$get$ez()
n=$.$get$ey()
m=v.af(y)
if(m!=null)return z.$1(H.cG(H.R(y),m))
else{m=u.af(y)
if(m!=null){m.method="call"
return z.$1(H.cG(H.R(y),m))}else{m=t.af(y)
if(m==null){m=s.af(y)
if(m==null){m=r.af(y)
if(m==null){m=q.af(y)
if(m==null){m=p.af(y)
if(m==null){m=s.af(y)
if(m==null){m=o.af(y)
if(m==null){m=n.af(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dZ(H.R(y),m))}}return z.$1(new H.iR(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.ed()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.b0(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.ed()
return a},
bh:function(a){var z
if(a==null)return new H.eY(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eY(a)},
k9:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.a2(0,a[y],a[x])}return b},
ki:function(a,b,c,d,e,f){H.e(a,"$iscB")
switch(H.a5(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.k("Unsupported number of arguments for wrapped closure"))},
bI:function(a,b){var z
H.a5(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ki)
a.$identity=z
return z},
fD:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.V(d).$isb){z.$reflectionInfo=d
x=H.i4(z).r}else x=d
w=e?Object.create(new H.is().constructor.prototype):Object.create(new H.cu(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.aA
if(typeof u!=="number")return u.D()
$.aA=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.dw(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.kb,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.dp:H.cv
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.h("Error in reflectionInfo.")
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
fA:function(a,b,c,d){var z=H.cv
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dw:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fC(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fA(y,!w,z,b)
if(y===0){w=$.aA
if(typeof w!=="number")return w.D()
$.aA=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bk
if(v==null){v=H.c0("self")
$.bk=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aA
if(typeof w!=="number")return w.D()
$.aA=w+1
t+=w
w="return function("+t+"){return this."
v=$.bk
if(v==null){v=H.c0("self")
$.bk=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
fB:function(a,b,c,d){var z,y
z=H.cv
y=H.dp
switch(b?-1:a){case 0:throw H.h(H.ic("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fC:function(a,b){var z,y,x,w,v,u,t,s
z=$.bk
if(z==null){z=H.c0("self")
$.bk=z}y=$.dn
if(y==null){y=H.c0("receiver")
$.dn=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fB(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.aA
if(typeof y!=="number")return y.D()
$.aA=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.aA
if(typeof y!=="number")return y.D()
$.aA=y+1
return new Function(z+y+"}")()},
dd:function(a,b,c,d,e,f,g){return H.fD(a,b,H.a5(c),d,!!e,!!f,g)},
R:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.aw(a,"String"))},
l9:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aw(a,"double"))},
ko:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aw(a,"num"))},
f9:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.aw(a,"bool"))},
a5:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.aw(a,"int"))},
fl:function(a,b){throw H.h(H.aw(a,H.bj(H.R(b).substring(3))))},
kq:function(a,b){throw H.h(H.fz(a,H.bj(H.R(b).substring(3))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.V(a)[b])return a
H.fl(a,b)},
d:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.V(a)[b]
else z=!0
if(z)return a
H.kq(a,b)},
cn:function(a){if(a==null)return a
if(!!J.V(a).$isb)return a
throw H.h(H.aw(a,"List<dynamic>"))},
kk:function(a,b){var z
if(a==null)return a
z=J.V(a)
if(!!z.$isb)return a
if(z[b])return a
H.fl(a,b)},
fc:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.a5(z)]
else return a.$S()}return},
bY:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fc(J.V(a))
if(z==null)return!1
return H.f0(z,null,b,null)},
m:function(a,b){var z,y
if(a==null)return a
if($.d8)return a
$.d8=!0
try{if(H.bY(a,b))return a
z=H.cp(b)
y=H.aw(a,z)
throw H.h(y)}finally{$.d8=!1}},
df:function(a,b){if(a!=null&&!H.dc(a,b))H.o(H.aw(a,H.cp(b)))
return a},
f4:function(a){var z,y
z=J.V(a)
if(!!z.$isp){y=H.fc(z)
if(y!=null)return H.cp(y)
return"Closure"}return H.b9(a)},
kF:function(a){throw H.h(new P.fI(H.R(a)))},
fe:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
aY:function(a){if(a==null)return
return a.$ti},
la:function(a,b,c){return H.bi(a["$as"+H.j(c)],H.aY(b))},
cl:function(a,b,c,d){var z
H.R(c)
H.a5(d)
z=H.bi(a["$as"+H.j(c)],H.aY(b))
return z==null?null:z[d]},
ar:function(a,b,c){var z
H.R(b)
H.a5(c)
z=H.bi(a["$as"+H.j(b)],H.aY(a))
return z==null?null:z[c]},
t:function(a,b){var z
H.a5(b)
z=H.aY(a)
return z==null?null:z[b]},
cp:function(a){return H.aW(a,null)},
aW:function(a,b){var z,y
H.i(b,"$isb",[P.z],"$asb")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bj(a[0].builtin$cls)+H.db(a,1,b)
if(typeof a=="function")return H.bj(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a5(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.j(b[y])}if('func' in a)return H.jV(a,b)
if('futureOr' in a)return"FutureOr<"+H.aW("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jV:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.z]
H.i(b,"$isb",z,"$asb")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.f(b,r)
t=C.j.D(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aW(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aW(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aW(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aW(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.k8(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.R(z[l])
n=n+m+H.aW(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
db:function(a,b,c){var z,y,x,w,v,u
H.i(c,"$isb",[P.z],"$asb")
if(a==null)return""
z=new P.bV("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aW(u,c)}return"<"+z.i(0)+">"},
bi:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bH:function(a,b,c,d){var z,y
H.R(b)
H.cn(c)
H.R(d)
if(a==null)return!1
z=H.aY(a)
y=J.V(a)
if(y[b]==null)return!1
return H.f7(H.bi(y[d],z),null,c,null)},
i:function(a,b,c,d){H.R(b)
H.cn(c)
H.R(d)
if(a==null)return a
if(H.bH(a,b,c,d))return a
throw H.h(H.aw(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bj(b.substring(3))+H.db(c,0,null),init.mangledGlobalNames)))},
f7:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aq(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aq(a[y],b,c[y],d))return!1
return!0},
l7:function(a,b,c){return a.apply(b,H.bi(J.V(b)["$as"+H.j(c)],H.aY(b)))},
fg:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="E"||a===-1||a===-2||H.fg(z)}return!1},
dc:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="a"||b.builtin$cls==="E"||b===-1||b===-2||H.fg(b)
if(b==null||b===-1||b.builtin$cls==="a"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dc(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bY(a,b)}z=J.V(a).constructor
y=H.aY(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.aq(z,null,b,null)},
x:function(a,b){if(a!=null&&!H.dc(a,b))throw H.h(H.aw(a,H.cp(b)))
return a},
aq:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aq(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="E")return!0
if('func' in c)return H.f0(a,b,c,d)
if('func' in a)return c.builtin$cls==="cB"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aq("type" in a?a.type:null,b,x,d)
else if(H.aq(a,b,x,d))return!0
else{if(!('$is'+"bo" in y.prototype))return!1
w=y.prototype["$as"+"bo"]
v=H.bi(w,z?a.slice(1):null)
return H.aq(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.f7(H.bi(r,z),b,u,d)},
f0:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.aq(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.aq(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.aq(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.aq(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kn(m,b,l,d)},
kn:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aq(c[w],d,a[w],b))return!1}return!0},
l8:function(a,b,c){Object.defineProperty(a,H.R(b),{value:c,enumerable:false,writable:true,configurable:true})},
kl:function(a){var z,y,x,w,v,u
z=H.R($.ff.$1(a))
y=$.ci[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cm[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.R($.f6.$2(a,z))
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
return u.i}if(v==="+")return H.fj(a,x)
if(v==="*")throw H.h(P.eA(z))
if(init.leafTags[z]===true){u=H.co(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fj(a,x)},
fj:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dj(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
co:function(a){return J.dj(a,!1,null,!!a.$isaG)},
km:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.co(z)
else return J.dj(z,c,null,null)},
kg:function(){if(!0===$.dg)return
$.dg=!0
H.kh()},
kh:function(){var z,y,x,w,v,u,t,s
$.ci=Object.create(null)
$.cm=Object.create(null)
H.kc()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fm.$1(v)
if(u!=null){t=H.km(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kc:function(){var z,y,x,w,v,u,t
z=C.G()
z=H.bf(C.D,H.bf(C.I,H.bf(C.t,H.bf(C.t,H.bf(C.H,H.bf(C.E,H.bf(C.F(C.u),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.ff=new H.kd(v)
$.f6=new H.ke(u)
$.fm=new H.kf(t)},
bf:function(a,b){return a(b)||b},
fn:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fo:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
i3:{"^":"a;a,b,c,d,e,f,r,0x",m:{
i4:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.c6(z)
y=z[0]
x=z[1]
return new H.i3(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
iF:{"^":"a;a,b,c,d,e,f",
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
m:{
aF:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.z])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iF(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cc:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
ev:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hO:{"^":"Z;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
m:{
dZ:function(a,b){return new H.hO(a,b==null?null:b.method)}}},
hl:{"^":"Z;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
m:{
cG:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hl(a,y,z?null:b.receiver)}}},
iR:{"^":"Z;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kG:{"^":"p:13;a",
$1:function(a){if(!!J.V(a).$isZ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eY:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaL:1},
p:{"^":"a;",
i:function(a){return"Closure '"+H.b9(this).trim()+"'"},
geP:function(){return this},
$iscB:1,
geP:function(){return this}},
eg:{"^":"p;"},
is:{"^":"eg;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.bj(z)+"'"}},
cu:{"^":"eg;a,b,c,d",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cu))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gZ:function(a){var z,y
z=this.c
if(z==null)y=H.bw(this.a)
else y=typeof z!=="object"?J.b_(z):H.bw(z)
return(y^H.bw(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.b9(z)+"'")},
m:{
cv:function(a){return a.a},
dp:function(a){return a.c},
c0:function(a){var z,y,x,w,v
z=new H.cu("self","target","receiver","name")
y=J.c6(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iG:{"^":"Z;a",
i:function(a){return this.a},
m:{
aw:function(a,b){return new H.iG("TypeError: "+H.j(P.c2(a))+": type '"+H.f4(a)+"' is not a subtype of type '"+b+"'")}}},
fy:{"^":"Z;a",
i:function(a){return this.a},
m:{
fz:function(a,b){return new H.fy("CastError: "+H.j(P.c2(a))+": type '"+H.f4(a)+"' is not a subtype of type '"+b+"'")}}},
ib:{"^":"Z;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
m:{
ic:function(a){return new H.ib(a)}}},
b3:{"^":"hx;a,0b,0c,0d,0e,0f,r,$ti",
gq:function(a){return this.a},
e_:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.du(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.du(y,a)}else return this.j_(a)},
j_:function(a){var z=this.d
if(z==null)return!1
return this.cH(this.bZ(z,J.b_(a)&0x3ffffff),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bs(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bs(w,b)
x=y==null?null:y.b
return x}else return this.j0(b)},
j0:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bZ(z,J.b_(a)&0x3ffffff)
x=this.cH(y,a)
if(x<0)return
return y[x].b},
a2:function(a,b,c){var z,y,x,w,v,u
H.x(b,H.t(this,0))
H.x(c,H.t(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.c5()
this.b=z}this.dk(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c5()
this.c=y}this.dk(y,b,c)}else{x=this.d
if(x==null){x=this.c5()
this.d=x}w=J.b_(b)&0x3ffffff
v=this.bZ(x,w)
if(v==null)this.cf(x,w,[this.c6(b,c)])
else{u=this.cH(v,b)
if(u>=0)v[u].b=c
else v.push(this.c6(b,c))}}},
a_:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.h(P.bl(this))
z=z.c}},
dk:function(a,b,c){var z
H.x(b,H.t(this,0))
H.x(c,H.t(this,1))
z=this.bs(a,b)
if(z==null)this.cf(a,b,this.c6(b,c))
else z.b=c},
c6:function(a,b){var z,y
z=new H.hp(H.x(a,H.t(this,0)),H.x(b,H.t(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.r=this.r+1&67108863
return z},
cH:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.A(a[y].a,b))return y
return-1},
i:function(a){return P.dU(this)},
bs:function(a,b){return a[b]},
bZ:function(a,b){return a[b]},
cf:function(a,b,c){a[b]=c},
fF:function(a,b){delete a[b]},
du:function(a,b){return this.bs(a,b)!=null},
c5:function(){var z=Object.create(null)
this.cf(z,"<non-identifier-key>",z)
this.fF(z,"<non-identifier-key>")
return z},
$isdR:1},
hp:{"^":"a;a,b,0c,0d"},
hq:{"^":"fR;a,$ti",
gq:function(a){return this.a.a},
gS:function(a){var z,y
z=this.a
y=new H.hr(z,z.r,this.$ti)
y.c=z.e
return y}},
hr:{"^":"a;a,b,0c,0d,$ti",
sdj:function(a){this.d=H.x(a,H.t(this,0))},
gL:function(){return this.d},
C:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.bl(z))
else{z=this.c
if(z==null){this.sdj(null)
return!1}else{this.sdj(z.a)
this.c=this.c.c
return!0}}},
$isaS:1},
kd:{"^":"p:13;a",
$1:function(a){return this.a(a)}},
ke:{"^":"p:23;a",
$2:function(a,b){return this.a(a,b)}},
kf:{"^":"p:24;a",
$1:function(a){return this.a(H.R(a))}},
hj:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$ise0:1,
m:{
hk:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.h(new P.h0("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
k8:function(a){return J.dN(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kp:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bD:function(a){return a},
bX:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.aX(b,a))},
jU:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.h(H.k6(a,b,c))
return b},
hM:{"^":"L;","%":";ArrayBufferView;cM|eU|eV|hL|eW|eX|bS"},
cM:{"^":"hM;",
gq:function(a){return a.length},
$isaG:1,
$asaG:I.de},
hL:{"^":"eV;",
j:function(a,b){H.bX(b,a,a.length)
return a[b]},
$asc4:function(){return[P.r]},
$asW:function(){return[P.r]},
$isl:1,
$asl:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]},
"%":"Float32Array"},
bS:{"^":"eX;",
$asc4:function(){return[P.w]},
$asW:function(){return[P.w]},
$isl:1,
$asl:function(){return[P.w]},
$isb:1,
$asb:function(){return[P.w]}},
kT:{"^":"bS;",
j:function(a,b){H.bX(b,a,a.length)
return a[b]},
"%":"Int16Array"},
kU:{"^":"bS;",
j:function(a,b){H.bX(b,a,a.length)
return a[b]},
"%":"Int32Array"},
kV:{"^":"bS;",
j:function(a,b){H.bX(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
kW:{"^":"bS;",
gq:function(a){return a.length},
j:function(a,b){H.bX(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
eU:{"^":"cM+W;"},
eV:{"^":"eU+c4;"},
eW:{"^":"cM+W;"},
eX:{"^":"eW+c4;"}}],["","",,P,{"^":"",
jd:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.k1()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bI(new P.jf(z),1)).observe(y,{childList:true})
return new P.je(z,y,x)}else if(self.setImmediate!=null)return P.k2()
return P.k3()},
l1:[function(a){self.scheduleImmediate(H.bI(new P.jg(H.m(a,{func:1,ret:-1})),0))},"$1","k1",4,0,8],
l2:[function(a){self.setImmediate(H.bI(new P.jh(H.m(a,{func:1,ret:-1})),0))},"$1","k2",4,0,8],
l3:[function(a){P.cS(C.n,H.m(a,{func:1,ret:-1}))},"$1","k3",4,0,8],
cS:function(a,b){var z
H.m(b,{func:1,ret:-1})
z=C.h.a8(a.a,1000)
return P.jN(z<0?0:z,b)},
jY:function(a,b){if(H.bY(a,{func:1,args:[P.a,P.aL]}))return H.m(a,{func:1,ret:null,args:[P.a,P.aL]})
if(H.bY(a,{func:1,args:[P.a]}))return H.m(a,{func:1,ret:null,args:[P.a]})
throw H.h(P.cs(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jX:function(){var z,y
for(;z=$.be,z!=null;){$.bF=null
y=z.b
$.be=y
if(y==null)$.bE=null
z.a.$0()}},
l6:[function(){$.d9=!0
try{P.jX()}finally{$.bF=null
$.d9=!1
if($.be!=null)$.$get$d6().$1(P.f8())}},"$0","f8",0,0,4],
f3:function(a){var z=new P.eO(H.m(a,{func:1,ret:-1}))
if($.be==null){$.bE=z
$.be=z
if(!$.d9)$.$get$d6().$1(P.f8())}else{$.bE.b=z
$.bE=z}},
k0:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
z=$.be
if(z==null){P.f3(a)
$.bF=$.bE
return}y=new P.eO(a)
x=$.bF
if(x==null){y.b=z
$.bF=y
$.be=y}else{y.b=x.b
x.b=y
$.bF=y
if(y.b==null)$.bE=y}},
kr:function(a){var z,y
z={func:1,ret:-1}
H.m(a,z)
y=$.P
if(C.l===y){P.ch(null,null,C.l,a)
return}y.toString
P.ch(null,null,y,H.m(y.cp(a),z))},
em:function(a,b){var z,y
z={func:1,ret:-1}
H.m(b,z)
y=$.P
if(y===C.l){y.toString
return P.cS(a,b)}return P.cS(a,H.m(y.cp(b),z))},
cg:function(a,b,c,d,e){var z={}
z.a=d
P.k0(new P.jZ(z,e))},
f1:function(a,b,c,d,e){var z,y
H.m(d,{func:1,ret:e})
y=$.P
if(y===c)return d.$0()
$.P=c
z=y
try{y=d.$0()
return y}finally{$.P=z}},
f2:function(a,b,c,d,e,f,g){var z,y
H.m(d,{func:1,ret:f,args:[g]})
H.x(e,g)
y=$.P
if(y===c)return d.$1(e)
$.P=c
z=y
try{y=d.$1(e)
return y}finally{$.P=z}},
k_:function(a,b,c,d,e,f,g,h,i){var z,y
H.m(d,{func:1,ret:g,args:[h,i]})
H.x(e,h)
H.x(f,i)
y=$.P
if(y===c)return d.$2(e,f)
$.P=c
z=y
try{y=d.$2(e,f)
return y}finally{$.P=z}},
ch:function(a,b,c,d){var z
H.m(d,{func:1,ret:-1})
z=C.l!==c
if(z)d=!(!z||!1)?c.cp(d):c.ix(d,-1)
P.f3(d)},
jf:{"^":"p:14;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
je:{"^":"p:22;a,b,c",
$1:function(a){var z,y
this.a.a=H.m(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jg:{"^":"p:3;a",
$0:function(){this.a.$0()}},
jh:{"^":"p:3;a",
$0:function(){this.a.$0()}},
jM:{"^":"a;a,0b,c",
fm:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bI(new P.jO(this,b),0),a)
else throw H.h(P.ao("`setTimeout()` not found."))},
m:{
jN:function(a,b){var z=new P.jM(!0,0)
z.fm(a,b)
return z}}},
jO:{"^":"p:4;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
bd:{"^":"a;0a,b,c,d,e,$ti",
j4:function(a){if(this.c!==6)return!0
return this.b.b.cR(H.m(this.d,{func:1,ret:P.Y,args:[P.a]}),a.a,P.Y,P.a)},
iZ:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.t(this,1)}
w=this.b.b
if(H.bY(z,{func:1,args:[P.a,P.aL]}))return H.df(w.js(z,a.a,a.b,null,y,P.aL),x)
else return H.df(w.cR(H.m(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aP:{"^":"a;dO:a<,b,0hD:c<,$ti",
eI:function(a,b,c){var z,y,x,w
z=H.t(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.P
if(y!==C.l){y.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.jY(b,y)}H.m(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aP(0,$.P,[c])
w=b==null?1:3
this.dl(new P.bd(x,w,a,b,[z,c]))
return x},
jv:function(a,b){return this.eI(a,null,b)},
dl:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isbd")
this.c=a}else{if(z===2){y=H.e(this.c,"$isaP")
z=y.a
if(z<4){y.dl(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.ch(null,null,z,H.m(new P.jo(this,a),{func:1,ret:-1}))}},
dI:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isbd")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isaP")
y=u.a
if(y<4){u.dI(a)
return}this.a=y
this.c=u.c}z.a=this.bu(a)
y=this.b
y.toString
P.ch(null,null,y,H.m(new P.jt(z,this),{func:1,ret:-1}))}},
ca:function(){var z=H.e(this.c,"$isbd")
this.c=null
return this.bu(z)},
bu:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
dq:function(a){var z,y,x
z=H.t(this,0)
H.df(a,{futureOr:1,type:z})
y=this.$ti
if(H.bH(a,"$isbo",y,"$asbo"))if(H.bH(a,"$isaP",y,null))P.eQ(a,this)
else P.jp(a,this)
else{x=this.ca()
H.x(a,z)
this.a=4
this.c=a
P.bB(this,x)}},
dr:function(a,b){var z
H.e(b,"$isaL")
z=this.ca()
this.a=8
this.c=new P.ah(a,b)
P.bB(this,z)},
$isbo:1,
m:{
jp:function(a,b){var z,y,x
b.a=1
try{a.eI(new P.jq(b),new P.jr(b),null)}catch(x){z=H.aZ(x)
y=H.bh(x)
P.kr(new P.js(b,z,y))}},
eQ:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isaP")
if(z>=4){y=b.ca()
b.a=a.a
b.c=a.c
P.bB(b,y)}else{y=H.e(b.c,"$isbd")
b.a=2
b.c=a
a.dI(y)}},
bB:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isah")
y=y.b
u=v.a
t=v.b
y.toString
P.cg(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
if(p){H.e(r,"$isah")
y=y.b
u=r.a
t=r.b
y.toString
P.cg(null,null,y,u,t)
return}o=$.P
if(o==null?q!=null:o!==q)$.P=q
else o=null
y=b.c
if(y===8)new P.jw(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jv(x,b,r).$0()}else if((y&2)!==0)new P.ju(z,x,b).$0()
if(o!=null)$.P=o
y=x.b
if(!!J.V(y).$isbo){if(y.a>=4){n=H.e(t.c,"$isbd")
t.c=null
b=t.bu(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.eQ(y,t)
return}}m=b.b
n=H.e(m.c,"$isbd")
m.c=null
b=m.bu(n)
y=x.a
u=x.b
if(!y){H.x(u,H.t(m,0))
m.a=4
m.c=u}else{H.e(u,"$isah")
m.a=8
m.c=u}z.a=m
y=m}}}},
jo:{"^":"p:3;a,b",
$0:function(){P.bB(this.a,this.b)}},
jt:{"^":"p:3;a,b",
$0:function(){P.bB(this.b,this.a.a)}},
jq:{"^":"p:14;a",
$1:function(a){var z=this.a
z.a=0
z.dq(a)}},
jr:{"^":"p:41;a",
$2:function(a,b){this.a.dr(a,H.e(b,"$isaL"))},
$1:function(a){return this.$2(a,null)}},
js:{"^":"p:3;a,b,c",
$0:function(){this.a.dr(this.b,this.c)}},
jw:{"^":"p:4;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.eH(H.m(w.d,{func:1}),null)}catch(v){y=H.aZ(v)
x=H.bh(v)
if(this.d){w=H.e(this.a.a.c,"$isah").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isah")
else u.b=new P.ah(y,x)
u.a=!0
return}if(!!J.V(z).$isbo){if(z instanceof P.aP&&z.gdO()>=4){if(z.gdO()===8){w=this.b
w.b=H.e(z.ghD(),"$isah")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.jv(new P.jx(t),null)
w.a=!1}}},
jx:{"^":"p:29;a",
$1:function(a){return this.a}},
jv:{"^":"p:4;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.t(x,0)
v=H.x(this.c,w)
u=H.t(x,1)
this.a.b=x.b.b.cR(H.m(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aZ(t)
y=H.bh(t)
x=this.a
x.b=new P.ah(z,y)
x.a=!0}}},
ju:{"^":"p:4;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isah")
w=this.c
if(w.j4(z)&&w.e!=null){v=this.b
v.b=w.iZ(z)
v.a=!1}}catch(u){y=H.aZ(u)
x=H.bh(u)
w=H.e(this.a.a.c,"$isah")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ah(y,x)
s.a=!0}}},
eO:{"^":"a;a,0b"},
it:{"^":"a;$ti",
gq:function(a){var z,y,x,w
z={}
y=new P.aP(0,$.P,[P.w])
z.a=0
x=H.t(this,0)
w=H.m(new P.iv(z,this),{func:1,ret:-1,args:[x]})
H.m(new P.iw(z,y),{func:1,ret:-1})
W.a0(this.a,this.b,w,!1,x)
return y}},
iv:{"^":"p;a,b",
$1:function(a){H.x(a,H.t(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.E,args:[H.t(this.b,0)]}}},
iw:{"^":"p:3;a,b",
$0:function(){this.b.dq(this.a.a)}},
cP:{"^":"a;$ti"},
iu:{"^":"a;"},
ah:{"^":"a;a,b",
i:function(a){return H.j(this.a)},
$isZ:1},
jS:{"^":"a;",$isl0:1},
jZ:{"^":"p:3;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.e_()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.h(z)
x=H.h(z)
x.stack=y.i(0)
throw x}},
jI:{"^":"jS;",
jt:function(a){var z,y,x
H.m(a,{func:1,ret:-1})
try{if(C.l===$.P){a.$0()
return}P.f1(null,null,this,a,-1)}catch(x){z=H.aZ(x)
y=H.bh(x)
P.cg(null,null,this,z,H.e(y,"$isaL"))}},
ju:function(a,b,c){var z,y,x
H.m(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.l===$.P){a.$1(b)
return}P.f2(null,null,this,a,b,-1,c)}catch(x){z=H.aZ(x)
y=H.bh(x)
P.cg(null,null,this,z,H.e(y,"$isaL"))}},
ix:function(a,b){return new P.jK(this,H.m(a,{func:1,ret:b}),b)},
cp:function(a){return new P.jJ(this,H.m(a,{func:1,ret:-1}))},
iz:function(a,b){return new P.jL(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
eH:function(a,b){H.m(a,{func:1,ret:b})
if($.P===C.l)return a.$0()
return P.f1(null,null,this,a,b)},
cR:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.P===C.l)return a.$1(b)
return P.f2(null,null,this,a,b,c,d)},
js:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.P===C.l)return a.$2(b,c)
return P.k_(null,null,this,a,b,c,d,e,f)}},
jK:{"^":"p;a,b,c",
$0:function(){return this.a.eH(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jJ:{"^":"p:4;a,b",
$0:function(){return this.a.jt(this.b)}},
jL:{"^":"p;a,b,c",
$1:function(a){var z=this.c
return this.a.ju(this.b,H.x(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hs:function(a,b,c){H.cn(a)
return H.i(H.k9(a,new H.b3(0,0,[b,c])),"$isdR",[b,c],"$asdR")},
ht:function(a,b,c,d){return new P.jC(0,0,[d])},
hf:function(a,b,c){var z,y
if(P.da(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bG()
C.a.h(y,a)
try{P.jW(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.ee(b,H.kk(z,"$isl"),", ")+c
return y.charCodeAt(0)==0?y:y},
cC:function(a,b,c){var z,y,x
if(P.da(a))return b+"..."+c
z=new P.bV(b)
y=$.$get$bG()
C.a.h(y,a)
try{x=z
x.a=P.ee(x.gaM(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gaM()+c
y=z.gaM()
return y.charCodeAt(0)==0?y:y},
da:function(a){var z,y
for(z=0;y=$.$get$bG(),z<y.length;++z)if(a===y[z])return!0
return!1},
jW:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gS(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.C())return
w=H.j(z.gL())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.C()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gL();++x
if(!z.C()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gL();++x
for(;z.C();t=s,s=r){r=z.gL();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.j(t)
v=H.j(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dU:function(a){var z,y,x
z={}
if(P.da(a))return"{...}"
y=new P.bV("")
try{C.a.h($.$get$bG(),a)
x=y
x.a=x.gaM()+"{"
z.a=!0
a.a_(0,new P.hy(z,y))
z=y
z.a=z.gaM()+"}"}finally{z=$.$get$bG()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gaM()
return z.charCodeAt(0)==0?z:z},
jC:{"^":"jy;a,0b,0c,0d,0e,0f,r,$ti",
gS:function(a){return P.eS(this,this.r,H.t(this,0))},
gq:function(a){return this.a},
h:function(a,b){var z
H.x(b,H.t(this,0))
if(typeof b==="number"&&(b&0x3ffffff)===b){z=this.c
if(z==null){z=P.eT()
this.c=z}return this.fB(z,b)}else return this.fn(b)},
fn:function(a){var z,y,x
H.x(a,H.t(this,0))
z=this.d
if(z==null){z=P.eT()
this.d=z}y=this.ds(a)
x=z[y]
if(x==null)z[y]=[this.bV(a)]
else{if(this.dA(x,a)>=0)return!1
x.push(this.bV(a))}return!0},
A:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.hw(this.c,b)
else return this.hv(b)},
hv:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.fO(z,a)
x=this.dA(y,a)
if(x<0)return!1
this.dP(y.splice(x,1)[0])
return!0},
fB:function(a,b){H.x(b,H.t(this,0))
if(H.e(a[b],"$isd7")!=null)return!1
a[b]=this.bV(b)
return!0},
hw:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$isd7")
if(z==null)return!1
this.dP(z)
delete a[b]
return!0},
dB:function(){this.r=this.r+1&67108863},
bV:function(a){var z,y
z=new P.d7(H.x(a,H.t(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dB()
return z},
dP:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dB()},
ds:function(a){return J.b_(a)&0x3ffffff},
fO:function(a,b){return a[this.ds(b)]},
dA:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(a[y].a==b)return y
return-1},
m:{
eT:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
d7:{"^":"a;a,0b,0c"},
jD:{"^":"a;a,b,0c,0d,$ti",
sdn:function(a){this.d=H.x(a,H.t(this,0))},
gL:function(){return this.d},
C:function(){var z=this.a
if(this.b!==z.r)throw H.h(P.bl(z))
else{z=this.c
if(z==null){this.sdn(null)
return!1}else{this.sdn(H.x(z.a,H.t(this,0)))
this.c=this.c.b
return!0}}},
$isaS:1,
m:{
eS:function(a,b,c){var z=new P.jD(a,b,[c])
z.c=a.e
return z}}},
jy:{"^":"id;"},
c8:{"^":"jE;",$isl:1,$isb:1},
W:{"^":"a;$ti",
gS:function(a){return new H.dS(a,this.gq(a),0,[H.cl(this,a,"W",0)])},
ad:function(a,b){return this.j(a,b)},
jw:function(a,b){var z,y
z=H.c([],[H.cl(this,a,"W",0)])
C.a.sq(z,this.gq(a))
for(y=0;y<this.gq(a);++y)C.a.a2(z,y,this.j(a,y))
return z},
cU:function(a){return this.jw(a,!0)},
i:function(a){return P.cC(a,"[","]")}},
hx:{"^":"hz;"},
hy:{"^":"p:17;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
hz:{"^":"a;$ti",
gq:function(a){return this.a},
i:function(a){return P.dU(this)},
$isaj:1},
ig:{"^":"a;$ti",
i:function(a){return P.cC(this,"{","}")},
ad:function(a,b){var z,y,x
if(b<0)H.o(P.ak(b,0,null,"index",null))
for(z=P.eS(this,this.r,H.t(this,0)),y=0;z.C();){x=z.d
if(b===y)return x;++y}throw H.h(P.bp(b,this,"index",null,y))},
$isl:1,
$iseb:1},
id:{"^":"ig;"},
jE:{"^":"a+W;"}}],["","",,P,{"^":"",cx:{"^":"a;$ti"},dy:{"^":"iu;$ti"},fT:{"^":"cx;",
$ascx:function(){return[P.z,[P.b,P.w]]}},iY:{"^":"fT;a"},iZ:{"^":"dy;",
iJ:function(a,b,c){var z,y,x,w
z=a.length
P.e7(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.jR(0,0,x)
if(w.fN(a,b,z)!==z)w.dQ(C.j.ct(a,z-1),0)
return new Uint8Array(x.subarray(0,H.jU(0,w.b,x.length)))},
iI:function(a){return this.iJ(a,0,null)},
$asdy:function(){return[P.z,[P.b,P.w]]}},jR:{"^":"a;a,b,c",
dQ:function(a,b){var z,y,x,w,v
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
fN:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.j.ct(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.j.br(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dQ(w,C.j.br(a,u)))x=u}else if(w<=2047){v=this.b
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
fV:function(a){if(a instanceof H.p)return a.i(0)
return"Instance of '"+H.b9(a)+"'"},
hu:function(a,b,c,d){var z,y
H.x(b,d)
z=J.hg(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.a2(z,y,b)
return H.i(z,"$isb",[d],"$asb")},
hv:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gS(a);x.C();)C.a.h(y,H.x(x.gL(),c))
if(b)return y
return H.i(J.c6(y),"$isb",z,"$asb")},
cQ:function(a,b,c){var z,y
z=P.w
H.i(a,"$isl",[z],"$asl")
if(a.constructor===Array){H.i(a,"$isb2",[z],"$asb2")
y=a.length
c=P.e7(b,c,y,null,null,null)
return H.e6(b>0||c<y?C.a.f1(a,b,c):a)}return P.ix(a,b,c)},
ix:function(a,b,c){var z,y,x
H.i(a,"$isl",[P.w],"$asl")
z=J.c_(a)
for(y=0;y<b;++y)if(!z.C())throw H.h(P.ak(b,0,y,null,null))
x=[]
for(;z.C();)x.push(z.gL())
return H.e6(x)},
i5:function(a,b,c){return new H.hj(a,H.hk(a,!1,!0,!1))},
f_:function(a,b,c,d){var z,y,x,w,v,u
H.i(a,"$isb",[P.w],"$asb")
if(c===C.q){z=$.$get$eZ().b
z=z.test(b)}else z=!1
if(z)return b
y=C.A.iI(H.x(b,H.ar(c,"cx",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.f(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.i0(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
c2:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.af(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fV(a)},
k:function(a){return new P.eP(a)},
fk:function(a){H.kp(a)},
Y:{"^":"a;"},
"+bool":0,
aB:{"^":"a;a,b",
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.aB))return!1
return this.a===b.a&&!0},
gZ:function(a){var z=this.a
return(z^C.h.bv(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.fJ(H.i_(this))
y=P.bL(H.hY(this))
x=P.bL(H.hU(this))
w=P.bL(H.hV(this))
v=P.bL(H.hX(this))
u=P.bL(H.hZ(this))
t=P.fK(H.hW(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
m:{
fJ:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fK:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bL:function(a){if(a>=10)return""+a
return"0"+a}}},
r:{"^":"ae;"},
"+double":0,
bM:{"^":"a;a",
ar:function(a,b){return C.h.ar(this.a,H.e(b,"$isbM").a)},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.bM))return!1
return this.a===b.a},
gZ:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fQ()
y=this.a
if(y<0)return"-"+new P.bM(0-y).i(0)
x=z.$1(C.h.a8(y,6e7)%60)
w=z.$1(C.h.a8(y,1e6)%60)
v=new P.fP().$1(y%1e6)
return""+C.h.a8(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
m:{
fO:function(a,b,c,d,e,f){return new P.bM(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fP:{"^":"p:18;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fQ:{"^":"p:18;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
Z:{"^":"a;"},
e_:{"^":"Z;",
i:function(a){return"Throw of null."}},
b0:{"^":"Z;a,b,c,d",
gbX:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbW:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gbX()+y+x
if(!this.a)return w
v=this.gbW()
u=P.c2(this.b)
return w+v+": "+H.j(u)},
m:{
cs:function(a,b,c){return new P.b0(!0,a,b,c)}}},
ca:{"^":"b0;e,f,a,b,c,d",
gbX:function(){return"RangeError"},
gbW:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
m:{
bU:function(a,b,c){return new P.ca(null,null,!0,a,b,"Value not in range")},
ak:function(a,b,c,d,e){return new P.ca(b,c,!0,a,d,"Invalid value")},
e7:function(a,b,c,d,e,f){if(0>a||a>c)throw H.h(P.ak(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.h(P.ak(b,a,c,"end",f))
return b}return c}}},
h5:{"^":"b0;e,q:f>,a,b,c,d",
gbX:function(){return"RangeError"},
gbW:function(){if(J.fq(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
m:{
bp:function(a,b,c,d,e){var z=H.a5(e!=null?e:J.bJ(b))
return new P.h5(b,z,!0,a,c,"Index out of range")}}},
iT:{"^":"Z;a",
i:function(a){return"Unsupported operation: "+this.a},
m:{
ao:function(a){return new P.iT(a)}}},
iQ:{"^":"Z;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
m:{
eA:function(a){return new P.iQ(a)}}},
ir:{"^":"Z;a",
i:function(a){return"Bad state: "+this.a}},
fG:{"^":"Z;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.c2(z))+"."},
m:{
bl:function(a){return new P.fG(a)}}},
hP:{"^":"a;",
i:function(a){return"Out of Memory"},
$isZ:1},
ed:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isZ:1},
fI:{"^":"Z;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eP:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
h0:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.j.d8(x,0,75)+"..."
return y+"\n"+x}},
w:{"^":"ae;"},
"+int":0,
l:{"^":"a;$ti",
gq:function(a){var z,y
z=this.gS(this)
for(y=0;z.C();)++y
return y},
ad:function(a,b){var z,y,x
if(b<0)H.o(P.ak(b,0,null,"index",null))
for(z=this.gS(this),y=0;z.C();){x=z.gL()
if(b===y)return x;++y}throw H.h(P.bp(b,this,"index",null,y))},
i:function(a){return P.hf(this,"(",")")}},
aS:{"^":"a;$ti"},
b:{"^":"a;$ti",$isl:1},
"+List":0,
E:{"^":"a;",
gZ:function(a){return P.a.prototype.gZ.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
ae:{"^":"a;"},
"+num":0,
a:{"^":";",
v:function(a,b){return this===b},
gZ:function(a){return H.bw(this)},
i:function(a){return"Instance of '"+H.b9(this)+"'"},
toString:function(){return this.i(this)}},
aL:{"^":"a;"},
z:{"^":"a;",$ise0:1},
"+String":0,
bV:{"^":"a;aM:a<",
gq:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
m:{
ee:function(a,b,c){var z=J.c_(b)
if(!z.C())return a
if(c.length===0){do a+=H.j(z.gL())
while(z.C())}else{a+=H.j(z.gL())
for(;z.C();)a=a+c+H.j(z.gL())}return a}}}}],["","",,W,{"^":"",
fu:function(a){var z=document.createElement("a")
return z},
du:function(a,b){var z=document.createElement("canvas")
return z},
fS:function(a){H.e(a,"$isc3")
return"wheel"},
cd:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eR:function(a,b,c,d){var z,y
z=W.cd(W.cd(W.cd(W.cd(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
f5:function(a,b){var z
H.m(a,{func:1,ret:-1,args:[b]})
z=$.P
if(z===C.l)return a
return z.iz(a,b)},
b1:{"^":"a2;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
kI:{"^":"b1;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
kJ:{"^":"b1;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
fw:{"^":"b1;","%":"HTMLBodyElement"},
cw:{"^":"b1;",
d0:function(a,b,c){var z=this.fP(a,b,P.k4(c,null))
return z},
fP:function(a,b,c){return a.getContext(b,c)},
$iscw:1,
"%":"HTMLCanvasElement"},
kM:{"^":"N;0q:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kO:{"^":"jk;0q:length=",
eV:function(a,b){var z=this.fQ(a,this.fu(a,b))
return z==null?"":z},
fu:function(a,b){var z,y
z=$.$get$dz()
y=z[b]
if(typeof y==="string")return y
y=this.hO(a,b)
z[b]=y
return y},
hO:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fL()+b
if(z in a)return z
return b},
fQ:function(a,b){return a.getPropertyValue(b)},
gcq:function(a){return a.bottom},
gba:function(a){return a.height},
gaT:function(a){return a.left},
gbj:function(a){return a.right},
gbm:function(a){return a.top},
gbo:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fH:{"^":"a;",
gaT:function(a){return this.eV(a,"left")}},
dH:{"^":"b1;",$isdH:1,"%":"HTMLDivElement"},
fM:{"^":"N;",
eT:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
kP:{"^":"L;",
i:function(a){return String(a)},
"%":"DOMException"},
fN:{"^":"L;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
v:function(a,b){var z
if(b==null)return!1
if(!H.bH(b,"$isaK",[P.ae],"$asaK"))return!1
z=J.bZ(b)
return a.left===z.gaT(b)&&a.top===z.gbm(b)&&a.width===z.gbo(b)&&a.height===z.gba(b)},
gZ:function(a){return W.eR(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gcq:function(a){return a.bottom},
gba:function(a){return a.height},
gaT:function(a){return a.left},
gbj:function(a){return a.right},
gbm:function(a){return a.top},
gbo:function(a){return a.width},
$isaK:1,
$asaK:function(){return[P.ae]},
"%":";DOMRectReadOnly"},
jj:{"^":"c8;a,b",
gq:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.f(z,b)
return H.e(z[b],"$isa2")},
h:function(a,b){J.dk(this.a,b)
return b},
gS:function(a){var z=this.cU(this)
return new J.ag(z,z.length,0,[H.t(z,0)])},
$asW:function(){return[W.a2]},
$asl:function(){return[W.a2]},
$asb:function(){return[W.a2]}},
a2:{"^":"N;",
gdY:function(a){return new W.jj(a,a.children)},
gdZ:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.ar()
if(x<0)x=-x*0
if(typeof w!=="number")return w.ar()
if(w<0)w=-w*0
return new P.aK(z,y,x,w,[P.ae])},
i:function(a){return a.localName},
$isa2:1,
"%":";Element"},
a9:{"^":"L;",$isa9:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
c3:{"^":"L;",
fo:function(a,b,c,d){return a.addEventListener(b,H.bI(H.m(c,{func:1,args:[W.a9]}),1),!1)},
$isc3:1,
"%":";EventTarget"},
kQ:{"^":"b1;0q:length=","%":"HTMLFormElement"},
h3:{"^":"jA;",
gq:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bp(b,a,null,null,null))
return a[b]},
ad:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isaG:1,
$asaG:function(){return[W.N]},
$asW:function(){return[W.N]},
$isl:1,
$asl:function(){return[W.N]},
$isb:1,
$asb:function(){return[W.N]},
$ish3:1,
$asaR:function(){return[W.N]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
h4:{"^":"fM;","%":"HTMLDocument"},
bq:{"^":"cV;",$isbq:1,"%":"KeyboardEvent"},
at:{"^":"cV;",$isat:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ji:{"^":"c8;a",
gS:function(a){var z=this.a.childNodes
return new W.dI(z,z.length,-1,[H.cl(C.K,z,"aR",0)])},
gq:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
$asW:function(){return[W.N]},
$asl:function(){return[W.N]},
$asb:function(){return[W.N]}},
N:{"^":"c3;",
i:function(a){var z=a.nodeValue
return z==null?this.f2(a):z},
Y:function(a,b){return a.appendChild(b)},
$isN:1,
"%":"Attr|DocumentFragment|DocumentType|ShadowRoot;Node"},
hN:{"^":"jG;",
gq:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bp(b,a,null,null,null))
return a[b]},
ad:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isaG:1,
$asaG:function(){return[W.N]},
$asW:function(){return[W.N]},
$isl:1,
$asl:function(){return[W.N]},
$isb:1,
$asb:function(){return[W.N]},
$asaR:function(){return[W.N]},
"%":"NodeList|RadioNodeList"},
kX:{"^":"b1;0q:length=","%":"HTMLSelectElement"},
by:{"^":"L;",$isby:1,"%":"Touch"},
ba:{"^":"cV;",$isba:1,"%":"TouchEvent"},
l_:{"^":"jQ;",
gq:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bp(b,a,null,null,null))
return a[b]},
ad:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isaG:1,
$asaG:function(){return[W.by]},
$asW:function(){return[W.by]},
$isl:1,
$asl:function(){return[W.by]},
$isb:1,
$asb:function(){return[W.by]},
$asaR:function(){return[W.by]},
"%":"TouchList"},
cV:{"^":"a9;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
bA:{"^":"at;",
giP:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.ao("deltaY is not supported"))},
giO:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.ao("deltaX is not supported"))},
$isbA:1,
"%":"WheelEvent"},
jc:{"^":"c3;",
hA:function(a,b){return a.requestAnimationFrame(H.bI(H.m(b,{func:1,ret:-1,args:[P.ae]}),1))},
fH:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
l4:{"^":"fN;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
v:function(a,b){var z
if(b==null)return!1
if(!H.bH(b,"$isaK",[P.ae],"$asaK"))return!1
z=J.bZ(b)
return a.left===z.gaT(b)&&a.top===z.gbm(b)&&a.width===z.gbo(b)&&a.height===z.gba(b)},
gZ:function(a){return W.eR(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gba:function(a){return a.height},
gbo:function(a){return a.width},
"%":"ClientRect|DOMRect"},
jl:{"^":"it;a,b,c,$ti"},
l5:{"^":"jl;a,b,c,$ti"},
jm:{"^":"cP;a,b,c,d,e,$ti",m:{
a0:function(a,b,c,d,e){var z,y
z=W.f5(new W.jn(c),W.a9)
y=z!=null
if(y&&!0){H.m(z,{func:1,args:[W.a9]})
if(y)J.fs(a,b,z,!1)}return new W.jm(0,a,b,z,!1,[e])}}},
jn:{"^":"p:34;a",
$1:function(a){return this.a.$1(H.e(a,"$isa9"))}},
aR:{"^":"a;$ti",
gS:function(a){return new W.dI(a,this.gq(a),-1,[H.cl(this,a,"aR",0)])}},
dI:{"^":"a;a,b,c,0d,$ti",
sdz:function(a){this.d=H.x(a,H.t(this,0))},
C:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sdz(J.fr(this.a,z))
this.c=z
return!0}this.sdz(null)
this.c=y
return!1},
gL:function(){return this.d},
$isaS:1},
jk:{"^":"L+fH;"},
jz:{"^":"L+W;"},
jA:{"^":"jz+aR;"},
jF:{"^":"L+W;"},
jG:{"^":"jF+aR;"},
jP:{"^":"L+W;"},
jQ:{"^":"jP+aR;"}}],["","",,P,{"^":"",
k4:function(a,b){var z={}
a.a_(0,new P.k5(z))
return z},
dF:function(){var z=$.dE
if(z==null){z=J.cr(window.navigator.userAgent,"Opera",0)
$.dE=z}return z},
fL:function(){var z,y
z=$.dB
if(z!=null)return z
y=$.dC
if(y==null){y=J.cr(window.navigator.userAgent,"Firefox",0)
$.dC=y}if(y)z="-moz-"
else{y=$.dD
if(y==null){y=!P.dF()&&J.cr(window.navigator.userAgent,"Trident/",0)
$.dD=y}if(y)z="-ms-"
else z=P.dF()?"-o-":"-webkit-"}$.dB=z
return z},
k5:{"^":"p:17;a",
$2:function(a,b){this.a[a]=b}},
fY:{"^":"c8;a,b",
gc_:function(){var z,y,x
z=this.b
y=H.ar(z,"W",0)
x=W.a2
return new H.hA(new H.ja(z,H.m(new P.fZ(),{func:1,ret:P.Y,args:[y]}),[y]),H.m(new P.h_(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){J.dk(this.b.a,b)},
gq:function(a){return J.bJ(this.gc_().a)},
j:function(a,b){var z=this.gc_()
return z.b.$1(J.dl(z.a,b))},
gS:function(a){var z=P.hv(this.gc_(),!1,W.a2)
return new J.ag(z,z.length,0,[H.t(z,0)])},
$asW:function(){return[W.a2]},
$asl:function(){return[W.a2]},
$asb:function(){return[W.a2]}},
fZ:{"^":"p:40;",
$1:function(a){return!!J.V(H.e(a,"$isN")).$isa2}},
h_:{"^":"p:27;",
$1:function(a){return H.d(H.e(a,"$isN"),"$isa2")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
ce:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jB:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jH:{"^":"a;$ti",
gbj:function(a){var z=this.a
if(typeof z!=="number")return z.D()
return H.x(z+this.c,H.t(this,0))},
gcq:function(a){var z=this.b
if(typeof z!=="number")return z.D()
return H.x(z+this.d,H.t(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
v:function(a,b){var z,y,x,w
if(b==null)return!1
if(!H.bH(b,"$isaK",[P.ae],"$asaK"))return!1
z=this.a
y=J.bZ(b)
x=y.gaT(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbm(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.D()
w=H.t(this,0)
if(H.x(z+this.c,w)===y.gbj(b)){if(typeof x!=="number")return x.D()
z=H.x(x+this.d,w)===y.gcq(b)}else z=!1}else z=!1}else z=!1
return z},
gZ:function(a){var z,y,x,w,v
z=this.a
y=J.b_(z)
x=this.b
w=J.b_(x)
if(typeof z!=="number")return z.D()
v=H.t(this,0)
z=H.x(z+this.c,v)
if(typeof x!=="number")return x.D()
v=H.x(x+this.d,v)
return P.jB(P.ce(P.ce(P.ce(P.ce(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
aK:{"^":"jH;aT:a>,bm:b>,bo:c>,ba:d>,$ti"}}],["","",,P,{"^":"",kZ:{"^":"a2;",
gdY:function(a){return new P.fY(a,new W.ji(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"}}],["","",,P,{"^":""}],["","",,P,{"^":"",fx:{"^":"L;",$isfx:1,"%":"WebGLBuffer"},h1:{"^":"L;",$ish1:1,"%":"WebGLFramebuffer"},i2:{"^":"L;",$isi2:1,"%":"WebGLProgram"},cN:{"^":"L;",
dV:function(a,b,c){return a.attachShader(b,c)},
av:function(a,b,c){return a.bindBuffer(b,c)},
iy:function(a,b,c){return a.bindFramebuffer(b,c)},
aE:function(a,b,c){return a.blendFunc(b,c)},
dW:function(a,b,c,d){return a.bufferData(b,c,d)},
iC:function(a,b){return a.clear(b)},
iD:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
iE:function(a,b){return a.clearDepth(b)},
iG:function(a,b){return a.compileShader(b)},
iK:function(a,b){return a.createShader(b)},
iM:function(a,b){return a.deleteProgram(b)},
iN:function(a,b){return a.deleteShader(b)},
iQ:function(a,b){return a.depthFunc(b)},
cA:function(a,b){return a.disable(b)},
e2:function(a,b){return a.disableVertexAttribArray(b)},
iR:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
ax:function(a,b){return a.enable(b)},
e3:function(a,b){return a.enableVertexAttribArray(b)},
eQ:function(a,b,c){return a.getActiveAttrib(b,c)},
eR:function(a,b,c){return a.getActiveUniform(b,c)},
eS:function(a,b,c){return a.getAttribLocation(b,c)},
d1:function(a,b){return a.getParameter(b)},
eU:function(a,b){return a.getProgramInfoLog(b)},
bS:function(a,b,c){return a.getProgramParameter(b,c)},
eW:function(a,b){return a.getShaderInfoLog(b)},
eX:function(a,b,c){return a.getShaderParameter(b,c)},
eY:function(a,b,c){return a.getUniformLocation(b,c)},
j2:function(a,b){return a.linkProgram(b)},
f0:function(a,b,c){return a.shaderSource(b,c)},
I:function(a,b,c){return a.uniform1f(b,c)},
P:function(a,b,c){return a.uniform1i(b,c)},
u:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
jz:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
eK:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eL:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cW:function(a,b){return a.useProgram(b)},
jA:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
jB:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$iscN:1,
"%":"WebGLRenderingContext"},ih:{"^":"L;",$isih:1,"%":"WebGLShader"},iO:{"^":"L;",$isiO:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",Q:{"^":"a;0a,0b,0c,0d,$ti",
sfV:function(a){this.a=H.i(a,"$isb",[H.ar(this,"Q",0)],"$asb")},
sdG:function(a){this.b=H.m(a,{func:1,ret:P.Y,args:[[P.l,H.ar(this,"Q",0)]]})},
sdD:function(a){this.c=H.m(a,{func:1,ret:-1,args:[P.w,[P.l,H.ar(this,"Q",0)]]})},
sdH:function(a){this.d=H.m(a,{func:1,ret:-1,args:[P.w,[P.l,H.ar(this,"Q",0)]]})},
bp:function(a){this.sfV(H.c([],[a]))
this.sdG(null)
this.sdD(null)
this.sdH(null)},
d3:function(a,b,c){var z=H.ar(this,"Q",0)
H.m(b,{func:1,ret:P.Y,args:[[P.l,z]]})
z={func:1,ret:-1,args:[P.w,[P.l,z]]}
H.m(a,z)
H.m(c,z)
this.sdG(b)
this.sdD(a)
this.sdH(c)},
aX:function(a,b){return this.d3(a,null,b)},
dF:function(a){var z
H.i(a,"$isl",[H.ar(this,"Q",0)],"$asl")
z=this.b
if(z!=null)return z.$1(a)
return!0},
dC:function(a,b){var z
H.i(b,"$isl",[H.ar(this,"Q",0)],"$asl")
z=this.c
if(z!=null)z.$2(a,b)},
gq:function(a){return this.a.length},
gS:function(a){var z=this.a
return new J.ag(z,z.length,0,[H.t(z,0)])},
ad:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.ar(this,"Q",0)
H.x(b,z)
z=[z]
if(this.dF(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.dC(x,H.c([b],z))}},
cj:function(a,b){var z,y
H.i(b,"$isl",[H.ar(this,"Q",0)],"$asl")
if(this.dF(b)){z=this.a
y=z.length
C.a.cj(z,b)
this.dC(y,b)}},
$isl:1,
m:{
cy:function(a){var z=new O.Q([a])
z.bp(a)
return z}}},cJ:{"^":"a;0a,0b",
sc0:function(a){this.a=H.i(a,"$isb",[V.ab],"$asb")},
gq:function(a){return this.a.length},
gt:function(){var z=this.b
if(z==null){z=D.I()
this.b=z}return z},
f9:function(a){var z=this.b
if(!(z==null))z.F(a)},
aJ:function(){return this.f9(null)},
gH:function(){var z=this.a
if(z.length>0)return C.a.gcI(z)
else return V.bt()},
eE:function(a){var z=this.a
if(a==null)C.a.h(z,V.bt())
else C.a.h(z,a)
this.aJ()},
cO:function(){var z=this.a
if(z.length>0){z.pop()
this.aJ()}}}}],["","",,E,{"^":"",ct:{"^":"a;"},as:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0ah:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sfa:function(a,b){this.y=H.i(b,"$isQ",[E.as],"$asQ")},
sah:function(a){this.z=H.e(a,"$isbN")},
dm:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.ag(z,z.length,0,[H.t(z,0)]);z.C();){y=z.d
if(y.f==null)y.dm()}},
sa3:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gt().A(0,this.geA())
y=this.c
if(y!=null)y.gt().h(0,this.geA())
x=new D.B("shape",z,this.c,this,[F.ac])
x.b=!0
this.a9(x)}},
sa5:function(a){var z,y,x
z=this.f
if(z==null?a!=null:z!==a){if(z!=null)z.gt().A(0,this.geB())
y=this.f
this.f=a
if(a!=null)a.gt().h(0,this.geB())
this.dm()
x=new D.B("technique",y,this.f,this,[O.bx])
x.b=!0
this.a9(x)}},
sV:function(a){var z,y
if(!J.A(this.r,a)){z=this.r
if(z!=null)z.gt().A(0,this.gez())
if(a!=null)a.gt().h(0,this.gez())
this.r=a
y=new D.B("mover",z,a,this,[U.a6])
y.b=!0
this.a9(y)}},
aa:function(a){var z,y,x,w
z=this.r
y=z!=null?z.aV(a,this):null
if(!J.A(y,this.x)){x=this.x
this.x=y
w=new D.B("matrix",x,y,this,[V.ab])
w.b=!0
this.a9(w)}z=this.f
if(z!=null)z.aa(a)
for(z=this.y.a,z=new J.ag(z,z.length,0,[H.t(z,0)]);z.C();)z.d.aa(a)},
ap:function(a){var z,y,x
if(!this.b)return
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gH())
else C.a.h(z.a,y.n(0,z.gH()))
z.aJ()
a.eF(this.f)
z=a.dy
x=(z&&C.a).gcI(z)
if(x!=null&&this.d!=null)x.eG(a,this)
for(z=this.y.a,z=new J.ag(z,z.length,0,[H.t(z,0)]);z.C();)z.d.ap(a)
a.eC()
a.dx.cO()},
gt:function(){var z=this.z
if(z==null){z=D.I()
this.z=z}return z},
a9:function(a){var z=this.z
if(!(z==null))z.F(a)},
M:function(){return this.a9(null)},
ja:[function(a){H.e(a,"$isq")
this.e=null
this.a9(a)},function(){return this.ja(null)},"ko","$1","$0","geA",0,2,0],
jb:[function(a){this.a9(H.e(a,"$isq"))},function(){return this.jb(null)},"kp","$1","$0","geB",0,2,0],
j9:[function(a){this.a9(H.e(a,"$isq"))},function(){return this.j9(null)},"kn","$1","$0","gez",0,2,0],
j7:[function(a){this.a9(H.e(a,"$isq"))},function(){return this.j7(null)},"kl","$1","$0","gey",0,2,0],
kk:[function(a,b){var z,y,x,w,v,u,t
H.i(b,"$isl",[E.as],"$asl")
for(z=b.length,y=this.gey(),x={func:1,ret:-1,args:[D.q]},w=[x],v=0;v<b.length;b.length===z||(0,H.u)(b),++v){u=b[v]
if(u!=null){if(u.gah()==null){t=new D.bN()
t.sat(null)
t.sc7(null)
t.c=null
t.d=0
u.sah(t)}t=u.gah()
t.toString
H.m(y,x)
if(t.a==null)t.sat(H.c([],w))
t=t.a;(t&&C.a).h(t,y)}}this.M()},"$2","gj6",8,0,7],
km:[function(a,b){var z,y
H.i(b,"$isl",[E.as],"$asl")
for(z=b.gS(b),y=this.gey();z.C();)z.gL().gt().A(0,y)
this.M()},"$2","gj8",8,0,7],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaI:1,
m:{
ai:function(a,b,c,d,e,f){var z=new E.as()
z.a=d
z.b=!0
z.sfa(0,O.cy(E.as))
z.y.aX(z.gj6(),z.gj8())
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
z.sa3(0,e)
z.sa5(f)
z.sV(c)
return z}}},i6:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
shQ:function(a){this.dy=H.i(a,"$isb",[O.bx],"$asb")},
shJ:function(a){this.fr=H.i(a,"$isaj",[P.z,A.cb],"$asaj")},
f6:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.aB(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cJ()
y=[V.ab]
z.sc0(H.c([],y))
z.b=null
z.gt().h(0,new E.i8(this))
this.cy=z
z=new O.cJ()
z.sc0(H.c([],y))
z.b=null
z.gt().h(0,new E.i9(this))
this.db=z
z=new O.cJ()
z.sc0(H.c([],y))
z.b=null
z.gt().h(0,new E.ia(this))
this.dx=z
this.shQ(H.c([],[O.bx]))
z=this.dy;(z&&C.a).h(z,null)
this.shJ(new H.b3(0,0,[P.z,A.cb]))},
gjl:function(){var z=this.z
if(z==null){z=this.cy.gH().n(0,this.db.gH())
this.z=z}return z},
geD:function(){var z=this.ch
if(z==null){z=this.gjl().n(0,this.dx.gH())
this.ch=z}return z},
geM:function(){var z=this.cx
if(z==null){z=this.db.gH().n(0,this.dx.gH())
this.cx=z}return z},
eF:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gcI(z):a;(z&&C.a).h(z,y)},
eC:function(){var z=this.dy
if(z.length>1)z.pop()},
dT:function(a){var z=a.b
if(z.length===0)throw H.h(P.k("May not cache a shader with no name."))
if(this.fr.e_(z))throw H.h(P.k('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.a2(0,z,a)},
m:{
i7:function(a,b){var z=new E.i6(a,b)
z.f6(a,b)
return z}}},i8:{"^":"p:1;a",
$1:function(a){var z
H.e(a,"$isq")
z=this.a
z.z=null
z.ch=null}},i9:{"^":"p:1;a",
$1:function(a){var z
H.e(a,"$isq")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},ia:{"^":"p:1;a",
$1:function(a){var z
H.e(a,"$isq")
z=this.a
z.ch=null
z.cx=null}},iA:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0ah:x<,0y,0z,0Q,0ch,0cx,0cy",
sah:function(a){this.x=H.e(a,"$isbN")},
fc:[function(a){H.e(a,"$isq")
this.jq()},function(){return this.fc(null)},"fb","$1","$0","gdg",0,2,0],
sbT:function(a){var z=this.d
if(z!==a){if(z!=null)z.gt().A(0,this.gdg())
this.d=a
a.gt().h(0,this.gdg())
this.fb()}},
dK:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.n()
if(typeof z!=="number")return H.y(z)
x=C.i.eq(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.n()
w=C.i.eq(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.em(C.n,this.gjp())}},
jq:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.m(new E.iC(this),{func:1,ret:-1,args:[P.ae]})
C.y.fH(z)
C.y.hA(z,W.f5(y,P.ae))}},"$0","gjp",0,0,4],
jo:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dK()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.aB(w,!1)
x.y=P.fO(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sq(w.a,0)
w.aJ()
w=x.db
C.a.sq(w.a,0)
w.aJ()
w=x.dx
C.a.sq(w.a,0)
w.aJ()
w=x.dy;(w&&C.a).sq(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.ap(this.e)}}catch(v){z=H.aZ(v)
y=H.bh(v)
P.fk("Error: "+H.j(z))
P.fk("Stack: "+H.j(y))
throw H.h(z)}},
m:{
cR:function(a,b,c,d,e){var z=C.B.eT(document,a)
if(z==null)throw H.h(P.k("Failed to find an element with the identifier, "+a+"."))
return E.iB(z,!0,!0,!0,!1)},
iB:function(a,b,c,d,e){var z,y,x,w
z=J.V(a)
if(!!z.$iscw)return E.el(a,!0,!0,!0,!1)
y=W.du(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gdY(a).h(0,y)
w=E.el(y,!0,!0,!0,!1)
w.a=a
return w},
el:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.iA()
y=P.hs(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.z,null)
x=C.m.d0(a,"webgl",y)
x=H.e(x==null?C.m.d0(a,"experimental-webgl",y):x,"$iscN")
if(x==null)H.o(P.k("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.i7(x,a)
w=new T.iz(x)
w.b=H.a5((x&&C.b).d1(x,3379))
w.c=H.a5(C.b.d1(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.iU(a)
v=new X.hm()
v.c=new X.aE(!1,!1,!1)
v.shu(P.ht(null,null,null,P.w))
w.b=v
v=new X.hK(w)
v.f=0
v.r=V.au()
v.x=V.au()
v.Q=1
v.ch=1
w.c=v
v=new X.hw(w)
v.r=0
v.x=V.au()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.iE(w)
v.e=0
v.f=V.au()
v.r=V.au()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.sfI(H.c([],[[P.cP,P.a]]))
v=w.z
u=document
t=W.at
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.a0(u,"contextmenu",H.m(w.gh8(),s),!1,t))
v=w.z
r=W.a9
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a0(a,"focus",H.m(w.ghb(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a0(a,"blur",H.m(w.gh5(),q),!1,r))
v=w.z
p=W.bq
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a0(u,"keyup",H.m(w.ghd(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a0(u,"keydown",H.m(w.ghc(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a0(a,"mousedown",H.m(w.ghg(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a0(a,"mouseup",H.m(w.ghi(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a0(a,"mousemove",H.m(w.ghh(),s),!1,t))
p=w.z
o=W.bA;(p&&C.a).h(p,W.a0(a,H.R(W.fS(a)),H.m(w.ghj(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a0(u,"mousemove",H.m(w.gh9(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a0(u,"mouseup",H.m(w.gha(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a0(u,"pointerlockchange",H.m(w.ghk(),q),!1,r))
r=w.z
q=W.ba
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a0(a,"touchstart",H.m(w.ghs(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a0(a,"touchend",H.m(w.ghq(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a0(a,"touchmove",H.m(w.ghr(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.aB(Date.now(),!1)
z.cy=0
z.dK()
return z}}},iC:{"^":"p:25;a",
$1:function(a){var z
H.ko(a)
z=this.a
if(z.ch){z.ch=!1
z.jo()}}}}],["","",,Z,{"^":"",eM:{"^":"a;a,b",$iskK:1,m:{
d5:function(a,b,c){var z
H.i(c,"$isb",[P.w],"$asb")
z=a.createBuffer()
C.b.av(a,b,z)
C.b.dW(a,b,new Int16Array(H.bD(c)),35044)
C.b.av(a,b,null)
return new Z.eM(b,z)}}},dq:{"^":"ct;a,b,c,d,e",
au:function(a){var z,y,x
try{y=a.a
C.b.e3(y,this.e)
C.b.jA(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.aZ(x)
y=P.k('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.j(z))
throw H.h(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},eN:{"^":"a;a",$iskL:1},bK:{"^":"a;a,0b,c,d",
sfR:function(a){this.b=H.i(a,"$isb",[Z.bO],"$asb")},
ae:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
au:function(a){var z,y
z=this.a
C.b.av(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].au(a)},
cV:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.b.e2(x,z[y].e)
C.b.av(x,this.a.a,null)},
ap:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.f(w,x)
v=w[x]
w=v.c
u=w.a
C.b.av(y,u,w.b)
C.b.iR(y,v.a,v.b,5123,0)
C.b.av(y,u,null)}},
jc:function(a){this.au(a)
this.ap(a)
this.cV(a)},
i:function(a){var z,y,x,w,v,u
z=[P.z]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.u)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.af(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.E(y,", ")+"\nAttrs:   "+C.a.E(u,", ")},
$isiy:1},dr:{"^":"a;0a",
sfY:function(a){this.a=H.i(a,"$isaj",[P.z,Z.bK],"$asaj")},
$isiy:1},bO:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b9(this.c)+"'")+"]"}},aU:{"^":"a;a",
gd6:function(a){var z,y
z=this.a
y=(z&$.$get$az().a)!==0?3:0
if((z&$.$get$ay().a)!==0)y+=3
if((z&$.$get$ax().a)!==0)y+=3
if((z&$.$get$aN().a)!==0)y+=2
if((z&$.$get$aO().a)!==0)y+=3
if((z&$.$get$aV().a)!==0)y+=3
if((z&$.$get$bz().a)!==0)y+=4
if((z&$.$get$bc().a)!==0)++y
return(z&$.$get$aM().a)!==0?y+4:y},
iw:function(a){var z,y,x
z=$.$get$az()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$ay()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$ax()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aN()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aO()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aV()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bz()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bc()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aM()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eL()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aU))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.z])
y=this.a
if((y&$.$get$az().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$ay().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$ax().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aN().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aO().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$aV().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bz().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bc().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aM().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.E(z,"|")},
m:{
ap:function(a){return new Z.aU(a)}}}}],["","",,D,{"^":"",dv:{"^":"a;"},bN:{"^":"a;0a,0b,0c,0d",
sat:function(a){this.a=H.i(a,"$isb",[{func:1,ret:-1,args:[D.q]}],"$asb")},
sc7:function(a){this.b=H.i(a,"$isb",[{func:1,ret:-1,args:[D.q]}],"$asb")},
h:function(a,b){var z={func:1,ret:-1,args:[D.q]}
H.m(b,z)
if(this.a==null)this.sat(H.c([],[z]))
z=this.a;(z&&C.a).h(z,b)},
A:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[D.q]})
z=this.a
z=z==null?null:C.a.b5(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).A(z,b)||!1}else y=!1
return y},
F:function(a){var z,y,x,w
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
return!0}if(!x)C.a.a_(y,new D.fW(z))
return!0},
jr:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.F(y)}}},
az:function(){return this.jr(!0,!1)},
m:{
I:function(){var z=new D.bN()
z.sat(null)
z.sc7(null)
z.c=null
z.d=0
return z}}},fW:{"^":"p:26;a",
$1:function(a){var z
H.m(a,{func:1,ret:-1,args:[D.q]})
z=this.a.a
if(z.b)a.$1(z)}},q:{"^":"a;a,0b"},bP:{"^":"q;c,d,a,0b,$ti"},bQ:{"^":"q;c,d,a,0b,$ti"},B:{"^":"q;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",ds:{"^":"a;a,b",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ds))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},dQ:{"^":"a;a,b",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dQ))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},hm:{"^":"a;0a,0b,0c,0d",
shu:function(a){this.d=H.i(a,"$iseb",[P.w],"$aseb")},
ji:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
je:function(a){this.c=a.b
this.d.A(0,a.a)
return!1}},dT:{"^":"c9;x,y,c,d,e,a,0b"},hw:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aZ:function(a,b){var z,y,x,w,v,u,t,s
z=new P.aB(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.n()
v=b.b
u=this.ch
if(typeof v!=="number")return v.n()
t=y.D(0,new V.O(x*w,v*u))
u=this.a.gaS()
s=new X.aH(a,V.au(),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cN:function(a,b){this.r=a.a
return!1},
bg:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.f_()
if(typeof z!=="number")return z.eO()
this.r=(z&~y)>>>0
return!1},
bf:function(a,b){var z=this.d
if(z==null)return!1
z.F(this.aZ(a,b))
return!0},
jj:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaS()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.n()
t=a.b
s=this.cy
if(typeof t!=="number")return t.n()
w=new X.cL(new V.K(v*u,t*s),y,x,new P.aB(w,!1),this)
w.b=!0
z.F(w)
return!0},
hf:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.aB(Date.now(),!1)
y=this.f
x=new X.dT(c,a,this.a.gaS(),b,z,this)
x.b=!0
y.F(x)
this.y=z
this.x=V.au()}},aE:{"^":"a;a,b,c",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aE))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},aH:{"^":"c9;x,y,z,Q,ch,c,d,e,a,0b"},hK:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bY:function(a,b,c){var z,y,x
z=new P.aB(Date.now(),!1)
y=this.a.gaS()
x=new X.aH(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cN:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.F(this.bY(a,b,!0))
return!0},
bg:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.f_()
if(typeof z!=="number")return z.eO()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.F(this.bY(a,b,!0))
return!0},
bf:function(a,b){var z=this.d
if(z==null)return!1
z.F(this.bY(a,b,!1))
return!0},
jk:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaS()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.n()
u=a.b
t=this.ch
if(typeof u!=="number")return u.n()
x=new X.cL(new V.K(w*v,u*t),y,b,new P.aB(x,!1),this)
x.b=!0
z.F(x)
return!0},
gb9:function(){var z=this.b
if(z==null){z=D.I()
this.b=z}return z},
gaI:function(){var z=this.c
if(z==null){z=D.I()
this.c=z}return z},
gbe:function(){var z=this.d
if(z==null){z=D.I()
this.d=z}return z}},cL:{"^":"c9;x,c,d,e,a,0b"},c9:{"^":"q;"},eo:{"^":"c9;x,y,z,Q,ch,c,d,e,a,0b"},iE:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
aZ:function(a,b){var z,y,x,w
H.i(a,"$isb",[V.O],"$asb")
z=new P.aB(Date.now(),!1)
y=a.length>0?a[0]:V.au()
x=this.a.gaS()
w=new X.eo(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
jh:function(a){var z
H.i(a,"$isb",[V.O],"$asb")
z=this.b
if(z==null)return!1
z.F(this.aZ(a,!0))
return!0},
jf:function(a){var z
H.i(a,"$isb",[V.O],"$asb")
z=this.c
if(z==null)return!1
z.F(this.aZ(a,!0))
return!0},
jg:function(a){var z
H.i(a,"$isb",[V.O],"$asb")
z=this.d
if(z==null)return!1
z.F(this.aZ(a,!1))
return!0}},iU:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
sfI:function(a){this.z=H.i(a,"$isb",[[P.cP,P.a]],"$asb")},
gaS:function(){var z=this.a
return V.e9(0,0,C.m.gdZ(z).c,C.m.gdZ(z).d)},
dv:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dQ(z,new X.aE(y,a.altKey,a.shiftKey))},
aP:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aE(y,a.altKey,a.shiftKey)},
cg:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aE(y,a.altKey,a.shiftKey)},
aD:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.G()
v=z.top
if(typeof x!=="number")return x.G()
return new V.O(y-w,x-v)},
b0:function(a){return new V.K(a.movementX,a.movementY)},
c9:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.O])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.u)(x),++v){u=x[v]
t=C.i.aq(u.pageX)
C.i.aq(u.pageY)
s=z.left
C.i.aq(u.pageX)
C.a.h(y,new V.O(t-s,C.i.aq(u.pageY)-z.top))}return y},
aA:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.ds(z,new X.aE(y,a.altKey,a.shiftKey))},
c1:function(a){var z,y,x,w,v,u
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
jR:[function(a){this.f=!0},"$1","ghb",4,0,9],
jL:[function(a){this.f=!1},"$1","gh5",4,0,9],
jO:[function(a){H.e(a,"$isat")
if(this.f&&this.c1(a))a.preventDefault()},"$1","gh8",4,0,5],
jT:[function(a){var z
H.e(a,"$isbq")
if(!this.f)return
z=this.dv(a)
this.b.ji(z)},"$1","ghd",4,0,15],
jS:[function(a){var z
H.e(a,"$isbq")
if(!this.f)return
z=this.dv(a)
this.b.je(z)},"$1","ghc",4,0,15],
jV:[function(a){var z,y,x,w
H.e(a,"$isat")
z=this.a
z.focus()
this.f=!0
this.aP(a)
if(this.x){y=this.aA(a)
x=this.b0(a)
if(this.d.cN(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aA(a)
w=this.aD(a)
if(this.c.cN(y,w))a.preventDefault()},"$1","ghg",4,0,5],
jX:[function(a){var z,y,x
H.e(a,"$isat")
this.aP(a)
z=this.aA(a)
if(this.x){y=this.b0(a)
if(this.d.bg(z,y))a.preventDefault()
return}if(this.r)return
x=this.aD(a)
if(this.c.bg(z,x))a.preventDefault()},"$1","ghi",4,0,5],
jQ:[function(a){var z,y,x
H.e(a,"$isat")
if(!this.c1(a)){this.aP(a)
z=this.aA(a)
if(this.x){y=this.b0(a)
if(this.d.bg(z,y))a.preventDefault()
return}if(this.r)return
x=this.aD(a)
if(this.c.bg(z,x))a.preventDefault()}},"$1","gha",4,0,5],
jW:[function(a){var z,y,x
H.e(a,"$isat")
this.aP(a)
z=this.aA(a)
if(this.x){y=this.b0(a)
if(this.d.bf(z,y))a.preventDefault()
return}if(this.r)return
x=this.aD(a)
if(this.c.bf(z,x))a.preventDefault()},"$1","ghh",4,0,5],
jP:[function(a){var z,y,x
H.e(a,"$isat")
if(!this.c1(a)){this.aP(a)
z=this.aA(a)
if(this.x){y=this.b0(a)
if(this.d.bf(z,y))a.preventDefault()
return}if(this.r)return
x=this.aD(a)
if(this.c.bf(z,x))a.preventDefault()}},"$1","gh9",4,0,5],
jY:[function(a){var z,y
H.e(a,"$isbA")
this.aP(a)
z=new V.K((a&&C.x).giO(a),C.x.giP(a)).l(0,180)
if(this.x){if(this.d.jj(z))a.preventDefault()
return}if(this.r)return
y=this.aD(a)
if(this.c.jk(z,y))a.preventDefault()},"$1","ghj",4,0,28],
jZ:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.aA(this.y)
x=this.aD(this.y)
this.d.hf(y,x,z)}},"$1","ghk",4,0,9],
ka:[function(a){var z
H.e(a,"$isba")
this.a.focus()
this.f=!0
this.cg(a)
z=this.c9(a)
if(this.e.jh(z))a.preventDefault()},"$1","ghs",4,0,10],
k8:[function(a){var z
H.e(a,"$isba")
this.cg(a)
z=this.c9(a)
if(this.e.jf(z))a.preventDefault()},"$1","ghq",4,0,10],
k9:[function(a){var z
H.e(a,"$isba")
this.cg(a)
z=this.c9(a)
if(this.e.jg(z))a.preventDefault()},"$1","ghr",4,0,10]}}],["","",,D,{"^":"",dG:{"^":"a;",$isa_:1,$isaI:1},a_:{"^":"a;",$isaI:1},hn:{"^":"Q;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
sfd:function(a){this.e=H.i(a,"$isb",[D.dG],"$asb")},
sfe:function(a){this.f=H.i(a,"$isb",[D.e2],"$asb")},
sff:function(a){this.r=H.i(a,"$isb",[D.ec],"$asb")},
sfg:function(a){this.x=H.i(a,"$isb",[D.ei],"$asb")},
sfh:function(a){this.y=H.i(a,"$isb",[D.ej],"$asb")},
sfi:function(a){this.z=H.i(a,"$isb",[D.ek],"$asb")},
gt:function(){var z=this.Q
if(z==null){z=D.I()
this.Q=z}return z},
dh:function(a){var z=this.Q
if(!(z==null))z.F(a)},
he:[function(a){var z=this.ch
if(!(z==null))z.F(a)},function(){return this.he(null)},"jU","$1","$0","gdE",0,2,0],
k_:[function(a){var z,y,x
H.i(a,"$isl",[D.a_],"$asl")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.u)(a),++y){x=a[y]
if(x==null||this.fC(x))return!1}return!0},"$1","ghl",4,0,30],
jI:[function(a,b){var z,y,x,w,v
z=D.a_
H.i(b,"$isl",[z],"$asl")
for(y=b.length,x=this.gdE(),w=0;w<b.length;b.length===y||(0,H.u)(b),++w){v=H.e(b[w],"$isa_")
v.gt().h(0,x)}z=new D.bP(a,b,this,[z])
z.b=!0
this.dh(z)},"$2","gh2",8,0,16],
k5:[function(a,b){var z,y,x,w
z=D.a_
H.i(b,"$isl",[z],"$asl")
for(y=b.gS(b),x=this.gdE();y.C();){w=y.gL()
C.a.A(this.e,w)
w.gt().A(0,x)}z=new D.bQ(a,b,this,[z])
z.b=!0
this.dh(z)},"$2","ghn",8,0,16],
fC:function(a){var z=C.a.b5(this.e,a)
return z},
$asl:function(){return[D.a_]},
$asQ:function(){return[D.a_]}},e2:{"^":"a;",$isa_:1,$isaI:1},ec:{"^":"a;",$isa_:1,$isaI:1},ei:{"^":"a;",$isa_:1,$isaI:1},ej:{"^":"a;",$isa_:1,$isaI:1},ek:{"^":"a;",$isa_:1,$isaI:1}}],["","",,V,{"^":"",
kN:[function(a,b){if(typeof b!=="number")return b.G()
if(typeof a!=="number")return H.y(a)
return Math.abs(b-a)<=1e-9},"$2","hJ",8,0,31],
kH:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.i.eZ(a-b,z)
return(a<0?a+z:a)+b},
F:function(a,b,c){if(a==null)return C.j.ag("null",c)
return C.j.ag(C.i.jx($.n.$2(a,0)?0:a,b),c+b+1)},
bg:function(a,b,c){var z,y,x,w,v,u
H.i(a,"$isb",[P.r],"$asb")
z=H.c([],[P.z])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.u)(a),++w){v=V.F(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.f(z,u)
C.a.a2(z,u,C.j.ag(z[u],x))}return z},
X:{"^":"a;a,b,c",
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}},
D:{"^":"a;a,b,c,d",
cU:function(a){return H.c([this.a,this.b,this.c,this.d],[P.r])},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.D))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+", "+V.F(this.d,3,0)+"]"}},
dX:{"^":"a;a,b,c,d,e,f,r,x,y",
a4:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.r])
return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dX))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
z=b.e
if(!$.n.$2(z,this.e))return!1
z=b.f
if(!$.n.$2(z,this.f))return!1
z=b.r
if(!$.n.$2(z,this.r))return!1
z=b.x
if(!$.n.$2(z,this.x))return!1
z=b.y
if(!$.n.$2(z,this.y))return!1
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.r]
y=V.bg(H.c([this.a,this.d,this.r],z),3,0)
x=V.bg(H.c([this.b,this.e,this.x],z),3,0)
w=V.bg(H.c([this.c,this.f,this.y],z),3,0)
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
ab:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a4:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.r])
return z},
eu:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.n.$2(a2,0))return V.bt()
a3=1/a2
a4=-w
a5=-i
return V.aD((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
n:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
return V.aD(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
eJ:function(a){return new V.v(C.i.n(this.a,a.gal(a))+C.i.n(this.b,a.gam(a))+C.i.n(this.c,a.gan()),C.i.n(this.e,a.gal(a))+C.i.n(this.f,a.gam(a))+C.i.n(this.r,a.gan()),C.i.n(this.y,a.gal(a))+C.i.n(this.z,a.gam(a))+C.i.n(this.Q,a.gan()))},
bn:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.U(this.a*z+this.b*y+this.c*x+this.d,this.e*z+this.f*y+this.r*x+this.x,this.y*z+this.z*y+this.Q*x+this.ch)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ab))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
z=b.e
if(!$.n.$2(z,this.e))return!1
z=b.f
if(!$.n.$2(z,this.f))return!1
z=b.r
if(!$.n.$2(z,this.r))return!1
z=b.x
if(!$.n.$2(z,this.x))return!1
z=b.y
if(!$.n.$2(z,this.y))return!1
z=b.z
if(!$.n.$2(z,this.z))return!1
z=b.Q
if(!$.n.$2(z,this.Q))return!1
z=b.ch
if(!$.n.$2(z,this.ch))return!1
z=b.cx
if(!$.n.$2(z,this.cx))return!1
z=b.cy
if(!$.n.$2(z,this.cy))return!1
z=b.db
if(!$.n.$2(z,this.db))return!1
z=b.dx
if(!$.n.$2(z,this.dx))return!1
return!0},
i:function(a){return this.J()},
er:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.r]
y=V.bg(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bg(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bg(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bg(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
J:function(){return this.er("",3,0)},
B:function(a){return this.er(a,3,0)},
m:{
bt:function(){var z=$.dY
if(z==null){z=V.aD(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.dY=z}return z},
aD:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ab(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
a3:function(a,b,c){return V.aD(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
b6:function(a,b,c,d){return V.aD(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
bs:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aD(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
cK:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aD(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)}}},
O:{"^":"a;a,b",
D:function(a,b){return new V.O(this.a+b.a,this.b+b.b)},
G:function(a,b){return new V.O(this.a-b.a,this.b-b.b)},
l:function(a,b){if($.n.$2(b,0))return V.au()
return new V.O(this.a/b,this.b/b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"},
m:{
au:function(){var z=$.e3
if(z==null){z=new V.O(0,0)
$.e3=z}return z}}},
U:{"^":"a;a,b,c",
D:function(a,b){return new V.U(this.a+b.a,this.b+b.b,this.c+b.c)},
G:function(a,b){return new V.U(this.a-b.a,this.b-b.b,this.c-b.c)},
l:function(a,b){if($.n.$2(b,0))return V.e4()
return new V.U(this.a/b,this.b/b,this.c/b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"},
m:{
e4:function(){var z=$.bv
if(z==null){z=new V.U(0,0,0)
$.bv=z}return z}}},
aJ:{"^":"a;a,b,c,d",
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aJ))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+", "+V.F(this.d,3,0)+"]"}},
e8:{"^":"a;a,b,c,d",
ga1:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e8))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+", "+V.F(this.d,3,0)+"]"},
m:{
e9:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e8(a,b,c,d)}}},
K:{"^":"a;a,b",
ew:[function(a){return Math.sqrt(this.w(this))},"$0","gq",1,0,11],
w:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.n()
if(typeof y!=="number")return H.y(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.n()
if(typeof w!=="number")return H.y(w)
return z*y+x*w},
n:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.n()
y=this.b
if(typeof y!=="number")return y.n()
return new V.K(z*b,y*b)},
l:function(a,b){var z,y
if($.n.$2(b,0)){z=$.eC
if(z==null){z=new V.K(0,0)
$.eC=z}return z}z=this.a
if(typeof z!=="number")return z.l()
y=this.b
if(typeof y!=="number")return y.l()
return new V.K(z/b,y/b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.K))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}},
v:{"^":"a;a,b,c",
ew:[function(a){return Math.sqrt(this.w(this))},"$0","gq",1,0,11],
w:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cJ:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.v(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
b6:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.v(z*y-x*w,x*v-u*y,u*w-z*v)},
D:function(a,b){return new V.v(this.a+b.a,this.b+b.b,this.c+b.c)},
N:function(a){return new V.v(-this.a,-this.b,-this.c)},
n:function(a,b){return new V.v(this.a*b,this.b*b,this.c*b)},
l:function(a,b){if($.n.$2(b,0))return V.bb()
return new V.v(this.a/b,this.b/b,this.c/b)},
ev:function(){if(!$.n.$2(0,this.a))return!1
if(!$.n.$2(0,this.b))return!1
if(!$.n.$2(0,this.c))return!1
return!0},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.v))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"},
m:{
bb:function(){var z=$.eF
if(z==null){z=new V.v(0,0,0)
$.eF=z}return z},
eG:function(){var z=$.eD
if(z==null){z=new V.v(0,0,-1)
$.eD=z}return z}}},
bW:{"^":"a;a,b,c,d",
ew:[function(a){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=this.d
return Math.sqrt(z*z+y*y+x*x+w*w)},"$0","gq",1,0,11],
l:function(a,b){var z
if($.n.$2(b,0)){z=$.eH
if(z==null){z=new V.bW(0,0,0,0)
$.eH=z}return z}return new V.bW(this.a/b,this.b/b,this.c/b,this.d/b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bW))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+", "+V.F(this.d,3,0)+"]"}}}],["","",,U,{"^":"",fE:{"^":"dv;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bU:function(a){var z=V.kH(a,this.c,this.b)
return z},
gt:function(){var z=this.y
if(z==null){z=D.I()
this.y=z}return z},
O:function(a){var z=this.y
if(!(z==null))z.F(a)},
scX:function(a,b){},
scK:function(a){var z,y
z=this.b
if(!$.n.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bU(z)}z=new D.B("maximumLocation",y,this.b,this,[P.r])
z.b=!0
this.O(z)}},
scM:function(a){var z,y
z=this.c
if(!$.n.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bU(z)}z=new D.B("minimumLocation",y,this.c,this,[P.r])
z.b=!0
this.O(z)}},
sa0:function(a,b){var z,y
b=this.bU(b)
z=this.d
if(!$.n.$2(z,b)){y=this.d
this.d=b
z=new D.B("location",y,b,this,[P.r])
z.b=!0
this.O(z)}},
scL:function(a){var z,y,x
z=this.e
if(!$.n.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.B("maximumVelocity",y,a,this,[P.r])
z.b=!0
this.O(z)}},
sR:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.n.$2(z,a)){x=this.f
this.f=a
z=new D.B("velocity",x,a,this,[P.r])
z.b=!0
this.O(z)}},
scz:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.n.$2(z,a)){y=this.x
this.x=a
z=new D.B("dampening",y,a,this,[P.r])
z.b=!0
this.O(z)}},
aa:function(a){var z,y,x,w
z=this.f
if($.n.$2(z,0)){z=this.r
z=!$.n.$2(z,0)}else z=!0
if(z){y=this.f+this.r*a
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa0(0,this.d+y*a)
z=this.x
if(!$.n.$2(z,0)){w=y*Math.pow(1-this.x,a)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sR(y)}},
m:{
cz:function(){var z=new U.fE()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dx:{"^":"a6;0a,0b",
gt:function(){var z=this.b
if(z==null){z=D.I()
this.b=z}return z},
sH:function(a){var z,y,x
if(a==null)a=V.bt()
if(!J.A(this.a,a)){z=this.a
this.a=a
y=new D.B("matrix",z,a,this,[V.ab])
y.b=!0
x=this.b
if(!(x==null))x.F(y)}},
aV:function(a,b){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dx))return!1
return J.A(this.a,b.a)},
i:function(a){return"Constant: "+this.a.B("          ")},
m:{
H:function(a){var z=new U.dx()
z.sH(a)
return z}}},dJ:{"^":"Q;0e,0f,0r,0a,0b,0c,0d",
gt:function(){var z=this.e
if(z==null){z=D.I()
this.e=z}return z},
O:[function(a){var z
H.e(a,"$isq")
z=this.e
if(!(z==null))z.F(a)},function(){return this.O(null)},"ai","$1","$0","gaO",0,2,0],
jC:[function(a,b){var z,y,x,w,v,u,t,s
z=U.a6
H.i(b,"$isl",[z],"$asl")
for(y=b.length,x=this.gaO(),w={func:1,ret:-1,args:[D.q]},v=[w],u=0;u<b.length;b.length===y||(0,H.u)(b),++u){t=b[u]
if(t!=null){s=t.gt()
s.toString
H.m(x,w)
if(s.a==null)s.sat(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.bP(a,b,this,[z])
z.b=!0
this.O(z)},"$2","gfj",8,0,12],
k0:[function(a,b){var z,y,x
z=U.a6
H.i(b,"$isl",[z],"$asl")
for(y=b.gS(b),x=this.gaO();y.C();)y.gL().gt().A(0,x)
z=new D.bQ(a,b,this,[z])
z.b=!0
this.O(z)},"$2","ghm",8,0,12],
aV:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(typeof z!=="number")return z.ar()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.ag(z,z.length,0,[H.t(z,0)]),x=null;z.C();){y=z.d
if(y!=null){w=y.aV(a,b)
if(w!=null)x=x==null?w:w.n(0,x)}}this.f=x==null?V.bt():x
z=this.e
if(!(z==null))z.az()}return this.f},
v:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dJ))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.f(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.f(w,y)
if(!J.A(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asl:function(){return[U.a6]},
$asQ:function(){return[U.a6]},
$isa6:1,
m:{
aC:function(a){var z=new U.dJ()
z.bp(U.a6)
z.aX(z.gfj(),z.ghm())
z.e=null
z.f=V.bt()
z.r=0
return z}}},a6:{"^":"dv;"},iV:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gt:function(){var z=this.cy
if(z==null){z=D.I()
this.cy=z}return z},
O:[function(a){var z
H.e(a,"$isq")
z=this.cy
if(!(z==null))z.F(a)},function(){return this.O(null)},"ai","$1","$0","gaO",0,2,0],
b3:function(a){if(this.a!=null)return!1
this.a=a
a.c.gb9().h(0,this.gc2())
this.a.c.gbe().h(0,this.gc3())
this.a.c.gaI().h(0,this.gc4())
return!0},
fZ:[function(a){H.e(a,"$isq")
if(!J.A(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gc2",4,0,2],
h_:[function(a){var z,y,x,w,v,u,t
a=H.d(H.e(a,"$isq"),"$isaH")
if(!this.y)return
if(this.x){z=a.d.G(0,a.y)
z=new V.K(z.a,z.b)
z=z.w(z)
y=this.r
if(typeof y!=="number")return H.y(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.G(0,a.y)
z=new V.K(y.a,y.b).n(0,2).l(0,z.ga1())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.n()
x=this.e
if(typeof x!=="number")return H.y(x)
y.sR(z*10*x)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=new V.K(x.a,x.b).n(0,2).l(0,z.ga1())
x=this.b
v=w.a
if(typeof v!=="number")return v.N()
u=this.e
if(typeof u!=="number")return H.y(u)
t=this.z
if(typeof t!=="number")return H.y(t)
x.sa0(0,-v*u+t)
this.b.sR(0)
y=y.G(0,a.z)
this.Q=new V.K(y.a,y.b).n(0,2).l(0,z.ga1())}this.ai()},"$1","gc3",4,0,2],
h0:[function(a){var z,y,x
H.e(a,"$isq")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.w(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.n()
x=this.e
if(typeof x!=="number")return H.y(x)
z.sR(y*10*x)
this.ai()}},"$1","gc4",4,0,2],
aV:function(a,b){var z,y,x,w,v
z=this.ch
y=a.e
if(typeof z!=="number")return z.ar()
if(z<y){this.ch=y
x=a.y
this.b.aa(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aD(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa6:1},iW:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gt:function(){var z=this.fx
if(z==null){z=D.I()
this.fx=z}return z},
O:[function(a){var z
H.e(a,"$isq")
z=this.fx
if(!(z==null))z.F(a)},function(){return this.O(null)},"ai","$1","$0","gaO",0,2,0],
b3:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gb9().h(0,this.gc2())
this.a.c.gbe().h(0,this.gc3())
this.a.c.gaI().h(0,this.gc4())
z=this.a.d
y=z.f
if(y==null){y=D.I()
z.f=y
z=y}else z=y
z.h(0,this.gfW())
z=this.a.d
y=z.d
if(y==null){y=D.I()
z.d=y
z=y}else z=y
z.h(0,this.gfX())
z=this.a.e
y=z.b
if(y==null){y=D.I()
z.b=y
z=y}else z=y
z.h(0,this.ghU())
z=this.a.e
y=z.d
if(y==null){y=D.I()
z.d=y
z=y}else z=y
z.h(0,this.ghT())
z=this.a.e
y=z.c
if(y==null){y=D.I()
z.c=y
z=y}else z=y
z.h(0,this.ghS())
return!0},
as:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.N()
z=-z}if(this.r){if(typeof y!=="number")return y.N()
y=-y}return new V.K(z,y)},
fZ:[function(a){a=H.d(H.e(a,"$isq"),"$isaH")
if(!J.A(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gc2",4,0,2],
h_:[function(a){var z,y,x,w,v,u,t
a=H.d(H.e(a,"$isq"),"$isaH")
if(!this.cx)return
if(this.ch){z=a.d.G(0,a.y)
z=new V.K(z.a,z.b)
z=z.w(z)
y=this.Q
if(typeof y!=="number")return H.y(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.G(0,a.y)
z=this.as(new V.K(y.a,y.b).n(0,2).l(0,z.ga1()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.N()
x=this.y
if(typeof x!=="number")return H.y(x)
y.sR(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.N()
y=this.x
if(typeof y!=="number")return H.y(y)
x.sR(-z*10*y)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=this.as(new V.K(x.a,x.b).n(0,2).l(0,z.ga1()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.y(u)
t=this.cy
if(typeof t!=="number")return H.y(t)
x.sa0(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.y(v)
x=this.db
if(typeof x!=="number")return H.y(x)
t.sa0(0,-u*v+x)
this.b.sR(0)
this.c.sR(0)
y=y.G(0,a.z)
this.dx=this.as(new V.K(y.a,y.b).n(0,2).l(0,z.ga1()))}this.ai()},"$1","gc3",4,0,2],
h0:[function(a){var z,y,x
H.e(a,"$isq")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.w(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.N()
x=this.y
if(typeof x!=="number")return H.y(x)
z.sR(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.N()
z=this.x
if(typeof z!=="number")return H.y(z)
x.sR(-y*10*z)
this.ai()}},"$1","gc4",4,0,2],
jF:[function(a){if(H.d(H.e(a,"$isq"),"$isdT").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfW",4,0,2],
jG:[function(a){var z,y,x,w,v,u,t
a=H.d(H.e(a,"$isq"),"$isaH")
if(!J.A(this.d,a.x.b))return
z=a.c
y=a.d
x=y.G(0,a.y)
w=this.as(new V.K(x.a,x.b).n(0,2).l(0,z.ga1()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.y(u)
t=this.cy
if(typeof t!=="number")return H.y(t)
x.sa0(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.y(v)
x=this.db
if(typeof x!=="number")return H.y(x)
t.sa0(0,-u*v+x)
this.b.sR(0)
this.c.sR(0)
y=y.G(0,a.z)
this.dx=this.as(new V.K(y.a,y.b).n(0,2).l(0,z.ga1()))
this.ai()},"$1","gfX",4,0,2],
kf:[function(a){H.e(a,"$isq")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghU",4,0,2],
ke:[function(a){var z,y,x,w,v,u,t
a=H.d(H.e(a,"$isq"),"$iseo")
if(!this.cx)return
if(this.ch){z=a.d.G(0,a.y)
z=new V.K(z.a,z.b)
z=z.w(z)
y=this.Q
if(typeof y!=="number")return H.y(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.G(0,a.y)
z=this.as(new V.K(y.a,y.b).n(0,2).l(0,z.ga1()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.N()
x=this.y
if(typeof x!=="number")return H.y(x)
y.sR(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.N()
y=this.x
if(typeof y!=="number")return H.y(y)
x.sR(-z*10*y)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=this.as(new V.K(x.a,x.b).n(0,2).l(0,z.ga1()))
x=this.c
v=w.a
if(typeof v!=="number")return v.N()
u=this.y
if(typeof u!=="number")return H.y(u)
t=this.cy
if(typeof t!=="number")return H.y(t)
x.sa0(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.N()
v=this.x
if(typeof v!=="number")return H.y(v)
x=this.db
if(typeof x!=="number")return H.y(x)
t.sa0(0,-u*v+x)
this.b.sR(0)
this.c.sR(0)
y=y.G(0,a.z)
this.dx=this.as(new V.K(y.a,y.b).n(0,2).l(0,z.ga1()))}this.ai()},"$1","ghT",4,0,2],
kd:[function(a){var z,y,x
H.e(a,"$isq")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.w(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.N()
x=this.y
if(typeof x!=="number")return H.y(x)
z.sR(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.N()
z=this.x
if(typeof z!=="number")return H.y(z)
x.sR(-y*10*z)
this.ai()}},"$1","ghS",4,0,2],
aV:function(a,b){var z,y,x
z=this.dy
y=a.e
if(typeof z!=="number")return z.ar()
if(z<y){this.dy=y
x=a.y
this.c.aa(x)
this.b.aa(x)
this.fr=V.bs(this.b.d).n(0,V.cK(this.c.d))}return this.fr},
$isa6:1},iX:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gt:function(){var z=this.r
if(z==null){z=D.I()
this.r=z}return z},
O:function(a){var z=this.r
if(!(z==null))z.F(a)},
b3:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.I()
z.e=y
z=y}else z=y
y=this.gh1()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.I()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
jH:[function(a){var z,y,x,w
H.e(a,"$isq")
if(!J.A(this.b,this.a.b.c))return
H.d(a,"$iscL")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.n()
w=z+y*x
if(z!==w){this.d=w
z=new D.B("zoom",z,w,this,[P.r])
z.b=!0
this.O(z)}},"$1","gh1",4,0,2],
aV:function(a,b){var z,y,x
z=this.e
y=a.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.b6(x,x,x,1)}return this.f},
$isa6:1}}],["","",,M,{"^":"",fF:{"^":"Q;0e,0f,0a,0b,0c,0d",
gt:function(){var z=this.f
if(z==null){z=D.I()
this.f=z}return z},
ab:[function(a){var z
H.e(a,"$isq")
z=this.f
if(!(z==null))z.F(a)},function(){return this.ab(null)},"fk","$1","$0","ga7",0,2,0],
k6:[function(a,b){var z,y,x,w,v,u,t,s
z=M.al
H.i(b,"$isl",[z],"$asl")
for(y=b.length,x=this.ga7(),w={func:1,ret:-1,args:[D.q]},v=[w],u=0;u<b.length;b.length===y||(0,H.u)(b),++u){t=b[u]
if(t!=null){s=t.gt()
s.toString
H.m(x,w)
if(s.a==null)s.sat(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.bP(a,b,this,[z])
z.b=!0
this.ab(z)},"$2","gho",8,0,19],
k7:[function(a,b){var z,y,x
z=M.al
H.i(b,"$isl",[z],"$asl")
for(y=b.gS(b),x=this.ga7();y.C();)y.gL().gt().A(0,x)
z=new D.bQ(a,b,this,[z])
z.b=!0
this.ab(z)},"$2","ghp",8,0,19],
ap:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.ag(z,z.length,0,[H.t(z,0)]);z.C();){y=z.d
if(!(y==null))y.ap(a)}this.e=!1},
$asl:function(){return[M.al]},
$asQ:function(){return[M.al]},
$isal:1,
m:{
cA:function(a){var z=new M.fF()
z.bp(M.al)
z.e=!1
z.f=null
z.aX(z.gho(),z.ghp())
z.cj(0,a)
return z}}},fU:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
sfA:function(a,b){this.d=H.i(b,"$isQ",[E.as],"$asQ")},
ab:[function(a){var z
H.e(a,"$isq")
z=this.x
if(!(z==null))z.F(a)},function(){return this.ab(null)},"fk","$1","$0","ga7",0,2,0],
jM:[function(a,b){var z,y,x,w,v,u,t,s
z=E.as
H.i(b,"$isl",[z],"$asl")
for(y=b.length,x=this.ga7(),w={func:1,ret:-1,args:[D.q]},v=[w],u=0;u<b.length;b.length===y||(0,H.u)(b),++u){t=b[u]
if(t!=null){if(t.gah()==null){s=new D.bN()
s.sat(null)
s.sc7(null)
s.c=null
s.d=0
t.sah(s)}s=t.gah()
s.toString
H.m(x,w)
if(s.a==null)s.sat(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.bP(a,b,this,[z])
z.b=!0
this.ab(z)},"$2","gh6",8,0,7],
jN:[function(a,b){var z,y,x
z=E.as
H.i(b,"$isl",[z],"$asl")
for(y=b.gS(b),x=this.ga7();y.C();)y.gL().gt().A(0,x)
z=new D.bQ(a,b,this,[z])
z.b=!0
this.ab(z)},"$2","gh7",8,0,7],
saF:function(a){var z,y
if(a==null)a=X.b7(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null)z.gt().A(0,this.ga7())
y=this.a
this.a=a
a.gt().h(0,this.ga7())
z=new D.B("camera",y,this.a,this,[X.dt])
z.b=!0
this.ab(z)}},
sbQ:function(a,b){var z,y
if(b==null)b=X.c5(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gt().A(0,this.ga7())
y=this.b
this.b=b
b.gt().h(0,this.ga7())
z=new D.B("target",y,this.b,this,[X.ef])
z.b=!0
this.ab(z)}},
sa5:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gt().A(0,this.ga7())
y=this.c
this.c=a
if(a!=null)a.gt().h(0,this.ga7())
z=new D.B("technique",y,this.c,this,[O.bx])
z.b=!0
this.ab(z)}},
gt:function(){var z=this.x
if(z==null){z=D.I()
this.x=z}return z},
ap:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
a.eF(this.c)
z=this.b
z.toString
y=a.a
C.b.iy(y,36160,null)
C.b.ax(y,2884)
C.b.ax(y,2929)
C.b.iQ(y,513)
x=y.drawingBufferWidth
w=y.drawingBufferHeight
v=z.r
u=v.a
if(typeof x!=="number")return H.y(x)
t=C.i.aq(u*x)
u=v.b
if(typeof w!=="number")return H.y(w)
s=C.i.aq(u*w)
u=C.i.aq(v.c*x)
a.c=u
v=C.i.aq(v.d*w)
a.d=v
C.b.jB(y,t,s,u,v)
C.b.iE(y,z.c)
if(z.b){z=z.a
C.b.iD(y,z.a,z.b,z.c,z.d)
r=16640}else r=256
C.b.iC(y,r)
z=this.a
y=a.c
v=a.d
u=z.c
q=z.d
p=z.e
o=p-q
n=1/Math.tan(u*0.5)
m=V.aD(-n/(y/v),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0)
y=z.a
if(y!=null){l=y.a
if(l!=null)m=l.n(0,m)}a.cy.eE(m)
y=$.e1
if(y==null){y=V.e4()
v=$.eE
if(v==null){v=new V.v(0,1,0)
$.eE=v}u=V.eG()
k=u.l(0,Math.sqrt(u.w(u)))
v=v.b6(k)
j=v.l(0,Math.sqrt(v.w(v)))
i=k.b6(j)
h=new V.v(y.a,y.b,y.c)
g=j.N(0).w(h)
f=i.N(0).w(h)
e=k.N(0).w(h)
y=V.aD(j.a,i.a,k.a,g,j.b,i.b,k.b,f,j.c,i.c,k.c,e,0,0,0,1)
$.e1=y
d=y}else d=y
z=z.b
if(z!=null){l=z.a
if(l!=null)d=l.n(0,d)}a.db.eE(d)
z=this.c
if(z!=null)z.aa(a)
for(z=this.d.a,z=new J.ag(z,z.length,0,[H.t(z,0)]);z.C();)z.d.aa(a)
for(z=this.d.a,z=new J.ag(z,z.length,0,[H.t(z,0)]);z.C();)z.d.ap(a)
this.a.toString
a.cy.cO()
a.db.cO()
this.b.toString
a.eC()},
$isal:1,
m:{
bm:function(a,b,c,d){var z=new M.fU()
z.sfA(0,O.cy(E.as))
z.d.aX(z.gh6(),z.gh7())
z.e=null
z.f=null
z.r=null
z.x=null
z.saF(a)
z.sbQ(0,c)
z.sa5(d)
return z}}},al:{"^":"a;"}}],["","",,A,{"^":"",dm:{"^":"a;a,b,c"},fv:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
iS:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.u)(z),++x){w=z[x]
C.b.e3(w.a,w.c)}},
e1:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.u)(z),++x){w=z[x]
C.b.e2(w.a,w.c)}}},dK:{"^":"cb;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,a,b,0c,0d,0e,0f,0r,0x,0y"},dW:{"^":"cb;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0ay,0ao,0bA,0e4,0bB,0bC,0e5,0e6,0bD,0bE,0e7,0e8,0bF,0bG,0e9,0ea,0bH,0eb,0ec,0bI,0ed,0ee,0bJ,0bK,0bL,0ef,0eg,0bM,0bN,0eh,0ei,0bO,0ej,0cB,0ek,0cC,0el,0cD,0em,0cE,0en,0cF,0eo,0cG,a,b,0c,0d,0e,0f,0r,0x,0y",
sfs:function(a){this.r1=H.i(a,"$isb",[A.ad],"$asb")},
sfG:function(a){this.cB=H.i(a,"$isb",[A.cY],"$asb")},
sht:function(a){this.cC=H.i(a,"$isb",[A.d_],"$asb")},
shM:function(a){this.cD=H.i(a,"$isb",[A.d0],"$asb")},
shW:function(a){this.cE=H.i(a,"$isb",[A.d1],"$asb")},
shX:function(a){this.cF=H.i(a,"$isb",[A.d2],"$asb")},
shY:function(a){this.cG=H.i(a,"$isb",[A.d3],"$asb")},
f5:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.z=a1
z=new P.bV("")
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
a1.i3(z)
a1.ia(z)
a1.i4(z)
a1.ik(z)
a1.il(z)
a1.ic(z)
a1.iq(z)
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
z=new P.bV("")
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
v.i7(z)
v.i2(z)
v.i5(z)
v.i8(z)
v.ii(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.ig(z)
v.ih(z)}v.ib(z)
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
p=H.c([],[P.z])
if(v.b!==C.c)C.a.h(p,"ambient()")
if(v.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.E(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.i6(z)
v.ie(z)
v.ij(z)
v.im(z)
v.io(z)
v.ip(z)
v.i9(z)}r=z.a+="// === Main ===\n"
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
n="vec4("+C.a.E(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.es(x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a1.fr)this.id=H.d(this.y.k(0,"invViewMat"),"$isad")
if(y)this.dy=H.d(this.y.k(0,"objMat"),"$isad")
if(w)this.fr=H.d(this.y.k(0,"viewObjMat"),"$isad")
this.fy=H.d(this.y.k(0,"projViewObjMat"),"$isad")
if(a1.x2)this.k1=H.d(this.y.k(0,"txt2DMat"),"$iscZ")
if(a1.y1)this.k2=H.d(this.y.k(0,"txtCubeMat"),"$isad")
if(a1.y2)this.k3=H.d(this.y.k(0,"colorMat"),"$isad")
this.sfs(H.c([],[A.ad]))
y=a1.ay
if(y>0){this.k4=H.e(this.y.k(0,"bendMatCount"),"$isG")
for(m=0;m<y;++m){x=this.r1
w=this.y
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.o(P.k("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.d(l,"$isad"))}}y=a1.a
if(y!==C.c){this.r2=H.d(this.y.k(0,"emissionClr"),"$isC")
switch(y){case C.c:break
case C.f:break
case C.d:this.rx=H.d(this.y.k(0,"emissionTxt"),"$isam")
this.x1=H.d(this.y.k(0,"nullEmissionTxt"),"$isG")
break
case C.e:this.ry=H.d(this.y.k(0,"emissionTxt"),"$isan")
this.x1=H.d(this.y.k(0,"nullEmissionTxt"),"$isG")
break}}y=a1.b
if(y!==C.c){this.x2=H.d(this.y.k(0,"ambientClr"),"$isC")
switch(y){case C.c:break
case C.f:break
case C.d:this.y1=H.d(this.y.k(0,"ambientTxt"),"$isam")
this.ay=H.d(this.y.k(0,"nullAmbientTxt"),"$isG")
break
case C.e:this.y2=H.d(this.y.k(0,"ambientTxt"),"$isan")
this.ay=H.d(this.y.k(0,"nullAmbientTxt"),"$isG")
break}}y=a1.c
if(y!==C.c){this.ao=H.d(this.y.k(0,"diffuseClr"),"$isC")
switch(y){case C.c:break
case C.f:break
case C.d:this.bA=H.d(this.y.k(0,"diffuseTxt"),"$isam")
this.bB=H.d(this.y.k(0,"nullDiffuseTxt"),"$isG")
break
case C.e:this.e4=H.d(this.y.k(0,"diffuseTxt"),"$isan")
this.bB=H.d(this.y.k(0,"nullDiffuseTxt"),"$isG")
break}}y=a1.d
if(y!==C.c){this.bC=H.d(this.y.k(0,"invDiffuseClr"),"$isC")
switch(y){case C.c:break
case C.f:break
case C.d:this.e5=H.d(this.y.k(0,"invDiffuseTxt"),"$isam")
this.bD=H.d(this.y.k(0,"nullInvDiffuseTxt"),"$isG")
break
case C.e:this.e6=H.d(this.y.k(0,"invDiffuseTxt"),"$isan")
this.bD=H.d(this.y.k(0,"nullInvDiffuseTxt"),"$isG")
break}}y=a1.e
if(y!==C.c){this.bG=H.d(this.y.k(0,"shininess"),"$isT")
this.bE=H.d(this.y.k(0,"specularClr"),"$isC")
switch(y){case C.c:break
case C.f:break
case C.d:this.e7=H.d(this.y.k(0,"specularTxt"),"$isam")
this.bF=H.d(this.y.k(0,"nullSpecularTxt"),"$isG")
break
case C.e:this.e8=H.d(this.y.k(0,"specularTxt"),"$isan")
this.bF=H.d(this.y.k(0,"nullSpecularTxt"),"$isG")
break}}switch(a1.f){case C.c:break
case C.f:break
case C.d:this.e9=H.d(this.y.k(0,"bumpTxt"),"$isam")
this.bH=H.d(this.y.k(0,"nullBumpTxt"),"$isG")
break
case C.e:this.ea=H.d(this.y.k(0,"bumpTxt"),"$isan")
this.bH=H.d(this.y.k(0,"nullBumpTxt"),"$isG")
break}if(a1.dy){this.eb=H.d(this.y.k(0,"envSampler"),"$isan")
this.ec=H.d(this.y.k(0,"nullEnvTxt"),"$isG")
y=a1.r
if(y!==C.c){this.bI=H.d(this.y.k(0,"reflectClr"),"$isC")
switch(y){case C.c:break
case C.f:break
case C.d:this.ed=H.d(this.y.k(0,"reflectTxt"),"$isam")
this.bJ=H.d(this.y.k(0,"nullReflectTxt"),"$isG")
break
case C.e:this.ee=H.d(this.y.k(0,"reflectTxt"),"$isan")
this.bJ=H.d(this.y.k(0,"nullReflectTxt"),"$isG")
break}}y=a1.x
if(y!==C.c){this.bK=H.d(this.y.k(0,"refraction"),"$isT")
this.bL=H.d(this.y.k(0,"refractClr"),"$isC")
switch(y){case C.c:break
case C.f:break
case C.d:this.ef=H.d(this.y.k(0,"refractTxt"),"$isam")
this.bM=H.d(this.y.k(0,"nullRefractTxt"),"$isG")
break
case C.e:this.eg=H.d(this.y.k(0,"refractTxt"),"$isan")
this.bM=H.d(this.y.k(0,"nullRefractTxt"),"$isG")
break}}}y=a1.y
if(y!==C.c){this.bN=H.d(this.y.k(0,"alpha"),"$isT")
switch(y){case C.c:break
case C.f:break
case C.d:this.eh=H.d(this.y.k(0,"alphaTxt"),"$isam")
this.bO=H.d(this.y.k(0,"nullAlphaTxt"),"$isG")
break
case C.e:this.ei=H.d(this.y.k(0,"alphaTxt"),"$isan")
this.bO=H.d(this.y.k(0,"nullAlphaTxt"),"$isG")
break}}this.sfG(H.c([],[A.cY]))
this.sht(H.c([],[A.d_]))
this.shM(H.c([],[A.d0]))
this.shW(H.c([],[A.d1]))
this.shX(H.c([],[A.d2]))
this.shY(H.c([],[A.d3]))
if(a1.k2){y=a1.z
if(y>0){this.ej=H.e(this.y.k(0,"dirLightCount"),"$isG")
for(m=0;m<y;++m){x=this.y
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isC")
x=this.y
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isC")
x=this.cB;(x&&C.a).h(x,new A.cY(m,l,k))}}y=a1.Q
if(y>0){this.ek=H.e(this.y.k(0,"pntLightCount"),"$isG")
for(m=0;m<y;++m){x=this.y
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isC")
x=this.y
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isC")
x=this.y
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isC")
x=this.y
w="pntLights["+m+"].att0"
i=x.j(0,w)
if(i==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isT")
x=this.y
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isT")
x=this.y
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isT")
x=this.cC;(x&&C.a).h(x,new A.d_(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.el=H.e(this.y.k(0,"spotLightCount"),"$isG")
for(m=0;m<y;++m){x=this.y
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isC")
x=this.y
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isC")
x=this.y
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isC")
x=this.y
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isC")
x=this.y
w="spotLights["+m+"].cutoff"
h=x.j(0,w)
if(h==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isT")
x=this.y
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isT")
x=this.y
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isT")
x=this.y
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isT")
x=this.y
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isT")
x=this.cD;(x&&C.a).h(x,new A.d0(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.em=H.e(this.y.k(0,"txtDirLightCount"),"$isG")
for(m=0;m<y;++m){x=this.y
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isC")
x=this.y
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isC")
x=this.y
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isC")
x=this.y
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isC")
x=this.y
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isC")
x=this.y
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isG")
x=this.y
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isam")
x=this.cE;(x&&C.a).h(x,new A.d1(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.en=H.e(this.y.k(0,"txtPntLightCount"),"$isG")
for(m=0;m<y;++m){x=this.y
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isC")
x=this.y
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isC")
x=this.y
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$iscZ")
x=this.y
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isC")
x=this.y
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isG")
x=this.y
w="txtPntLights["+m+"].att0"
g=x.j(0,w)
if(g==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isT")
x=this.y
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isT")
x=this.y
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isT")
x=this.y
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isan")
x=this.cF;(x&&C.a).h(x,new A.d2(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.eo=H.e(this.y.k(0,"txtSpotLightCount"),"$isG")
for(m=0;m<y;++m){x=this.y
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(l,"$isC")
x=this.y
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isC")
x=this.y
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isC")
x=this.y
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isC")
x=this.y
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isC")
x=this.y
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isG")
x=this.y
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isC")
x=this.y
w="txtSpotLights["+m+"].tuScalar"
e=x.j(0,w)
if(e==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isT")
x=this.y
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isT")
x=this.y
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(c,"$isT")
x=this.y
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(b,"$isT")
x=this.y
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a,"$isT")
x=this.y
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.o(P.k("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a0,"$isam")
x=this.cG;(x&&C.a).h(x,new A.d3(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
aj:function(a,b,c){C.b.P(b.a,b.d,1)},
ac:function(a,b,c){C.b.P(b.a,b.d,1)},
m:{
hC:function(a,b){var z,y
z=a.ao
y=new A.dW(b,z)
y.df(b,z)
y.f5(a,b)
return y}}},hG:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,ay,ao,bA",
i3:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.ay+"];\n"
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
ia:function(a){var z
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
i4:function(a){var z
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
ik:function(a){var z,y
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
il:function(a){var z,y
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
ic:function(a){var z
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
iq:function(a){var z
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
aB:function(a,b,c){var z
if(b===C.c)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.f(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.j.d7(c,1))+"Txt;\n"
a.a=z
if(b===C.d)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
i7:function(a){var z,y
z=this.a
if(z===C.c)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aB(a,z,"emission")
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
i2:function(a){var z,y
z=this.b
if(z===C.c)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aB(a,z,"ambient")
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
i5:function(a){var z,y
z=this.c
if(z===C.c)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aB(a,z,"diffuse")
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
i8:function(a){var z,y
z=this.d
if(z===C.c)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aB(a,z,"invDiffuse")
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
ii:function(a){var z,y
z=this.e
if(z===C.c)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aB(a,z,"specular")
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
ib:function(a){var z,y
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
ig:function(a){var z,y
z=this.r
if(z===C.c)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aB(a,z,"reflect")
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
ih:function(a){var z,y
z=this.x
if(z===C.c)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aB(a,z,"refract")
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
i6:function(a){var z,y
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
ie:function(a){var z,y
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
ij:function(a){var z,y
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
im:function(a){var z,y,x
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
io:function(a){var z,y,x
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
ip:function(a){var z,y,x
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
i9:function(a){var z
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
i:function(a){return this.ao}},cY:{"^":"a;a,b,c"},d1:{"^":"a;a,b,c,d,e,f,r,x"},d_:{"^":"a;a,b,c,d,e,f,r"},d2:{"^":"a;a,b,c,d,e,f,r,x,y,z"},d0:{"^":"a;a,b,c,d,e,f,r,x,y,z"},d3:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cb:{"^":"ct;",
df:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
es:function(a,b){var z,y,x
this.c=a
this.d=b
this.e=this.dw(a,35633)
this.f=this.dw(this.d,35632)
z=this.a
y=z.createProgram()
this.r=y
C.b.dV(z,y,this.e)
C.b.dV(z,this.r,this.f)
C.b.j2(z,this.r)
if(!H.f9(C.b.bS(z,this.r,35714))){x=C.b.eU(z,this.r)
C.b.iM(z,this.r)
H.o(P.k("Failed to link shader: "+H.j(x)))}this.hG()
this.hI()},
au:function(a){C.b.cW(a.a,this.r)
this.x.iS()},
dw:function(a,b){var z,y,x
z=this.a
y=C.b.iK(z,b)
C.b.f0(z,y,a)
C.b.iG(z,y)
if(!H.f9(C.b.eX(z,y,35713))){x=C.b.eW(z,y)
C.b.iN(z,y)
throw H.h(P.k("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
hG:function(){var z,y,x,w,v,u
z=H.c([],[A.dm])
y=this.a
x=H.a5(C.b.bS(y,this.r,35721))
if(typeof x!=="number")return H.y(x)
w=0
for(;w<x;++w){v=C.b.eQ(y,this.r,w)
u=C.b.eS(y,this.r,v.name)
C.a.h(z,new A.dm(y,v.name,u))}this.x=new A.fv(z)},
hI:function(){var z,y,x,w,v,u
z=H.c([],[A.a7])
y=this.a
x=H.a5(C.b.bS(y,this.r,35718))
if(typeof x!=="number")return H.y(x)
w=0
for(;w<x;++w){v=C.b.eR(y,this.r,w)
u=C.b.eY(y,this.r,v.name)
C.a.h(z,this.iL(v.type,v.size,v.name,u))}this.y=new A.iN(z)},
aN:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.G(z,y,b,c)
else return A.cW(z,y,b,a,c)},
fD:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.am(z,y,b,c)
else return A.cW(z,y,b,a,c)},
fE:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.an(z,y,b,c)
else return A.cW(z,y,b,a,c)},
bw:function(a,b){return new P.eP(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
iL:function(a,b,c,d){switch(a){case 5120:return this.aN(b,c,d)
case 5121:return this.aN(b,c,d)
case 5122:return this.aN(b,c,d)
case 5123:return this.aN(b,c,d)
case 5124:return this.aN(b,c,d)
case 5125:return this.aN(b,c,d)
case 5126:return new A.T(this.a,this.r,c,d)
case 35664:return new A.iJ(this.a,this.r,c,d)
case 35665:return new A.C(this.a,this.r,c,d)
case 35666:return new A.cX(this.a,this.r,c,d)
case 35667:return new A.iK(this.a,this.r,c,d)
case 35668:return new A.iL(this.a,this.r,c,d)
case 35669:return new A.iM(this.a,this.r,c,d)
case 35674:return new A.iP(this.a,this.r,c,d)
case 35675:return new A.cZ(this.a,this.r,c,d)
case 35676:return new A.ad(this.a,this.r,c,d)
case 35678:return this.fD(b,c,d)
case 35680:return this.fE(b,c,d)
case 35670:throw H.h(this.bw("BOOL",c))
case 35671:throw H.h(this.bw("BOOL_VEC2",c))
case 35672:throw H.h(this.bw("BOOL_VEC3",c))
case 35673:throw H.h(this.bw("BOOL_VEC4",c))
default:throw H.h(P.k("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},c1:{"^":"a;a,b",
i:function(a){return this.b}},a7:{"^":"a;"},iN:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
k:function(a,b){var z=this.j(0,b)
if(z==null)throw H.h(P.k("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.J()},
iY:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.u)(z),++w)x+=z[w].i(0)+a
return x},
J:function(){return this.iY("\n")}},G:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},iK:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},iL:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},iM:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},iI:{"^":"a7;0e,0f,a,b,c,d",
shZ:function(a){this.e=H.i(a,"$isb",[P.w],"$asb")},
i:function(a){return"Uniform1iv: "+H.j(this.c)},
m:{
cW:function(a,b,c,d,e){var z=new A.iI(a,b,c,e)
z.f=d
z.shZ(P.hu(d,0,!1,P.w))
return z}}},T:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},iJ:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},C:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},cX:{"^":"a7;a,b,c,d",
d2:function(a){return C.b.jz(this.a,this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.j(this.c)}},iP:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},cZ:{"^":"a7;a,b,c,d",
a6:function(a){var z=new Float32Array(H.bD(H.i(a,"$isb",[P.r],"$asb")))
C.b.eK(this.a,this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},ad:{"^":"a7;a,b,c,d",
a6:function(a){var z=new Float32Array(H.bD(H.i(a,"$isb",[P.r],"$asb")))
C.b.eL(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},am:{"^":"a7;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},an:{"^":"a7;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
dh:function(a){var z,y,x,w,v,u
z=F.av()
y=z.a
x=V.au()
w=new V.v(-1,-1,0)
w=w.l(0,Math.sqrt(w.w(w)))
v=y.aQ(new V.aJ(1,2,4,6),new V.D(1,0,0,1),new V.U(-1,0,0),x,w,a)
y=z.a
x=new V.v(1,-1,0)
x=x.l(0,Math.sqrt(x.w(x)))
u=y.aQ(new V.aJ(0,3,4,6),new V.D(0,0,1,1),new V.U(1,0,0),new V.O(1,0),x,a)
z.c.ci(0,v,u)
return z},
cq:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q
z=F.av()
y=z.a
x=-d*0.5
w=-b*0.5
v=new V.v(-1,-1,1)
v=v.l(0,Math.sqrt(v.w(v)))
u=y.aQ(new V.aJ(1,2,4,6),new V.D(1,0,0,1),new V.U(x,w,e),new V.O(0,1),v,c)
y=z.a
v=d*0.5
t=new V.v(1,-1,1)
t=t.l(0,Math.sqrt(t.w(t)))
s=y.aQ(new V.aJ(0,3,4,6),new V.D(0,0,1,1),new V.U(v,w,e),new V.O(1,1),t,c)
y=z.a
w=b*0.5
t=new V.v(1,1,1)
t=t.l(0,Math.sqrt(t.w(t)))
r=y.aQ(new V.aJ(0,2,5,6),new V.D(0,1,0,1),new V.U(v,w,e),new V.O(1,0),t,c)
y=z.a
v=V.au()
t=new V.v(-1,1,1)
t=t.l(0,Math.sqrt(t.w(t)))
q=y.aQ(new V.aJ(0,2,4,7),new V.D(1,1,0,1),new V.U(x,w,e),v,t,c)
y=[F.J]
if(a)z.c.dS(H.c([u,s,r,q],y))
else z.d.ir(H.c([u,s,r,q],y))
z.aw()
return z},
fa:function(a,b,c,d){var z=F.av()
F.bC(z,b,c,d,a,1,0,0,1)
F.bC(z,b,c,d,a,0,1,0,3)
F.bC(z,b,c,d,a,0,0,1,2)
F.bC(z,b,c,d,a,-1,0,0,0)
F.bC(z,b,c,d,a,0,-1,0,0)
F.bC(z,b,c,d,a,0,0,-1,3)
z.aw()
return z},
cf:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bC:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.v(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.v(t+h,s+f,r+g)
z.b=q
p=new V.v(t-h,s-f,r-g)
z.c=p
o=new V.v(y-h,w-f,v-g)
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
j=F.kE(d,e,new F.jT(z,F.cf(z.c),F.cf(z.d),k,l,c),b)
if(j!=null)a.aG(j)},
fb:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
e=new F.k7()
if(f<3)return
z=F.av()
y=-6.283185307179586/f
x=H.c([],[F.J])
for(w=0;w<=f;++w){v=y*w
u=Math.sin(v)
t=Math.cos(v)
s=e.$1(w/f)
r=z.a
if(typeof s!=="number")return H.y(s)
q=new V.v(u,t,1).l(0,Math.sqrt(u*u+t*t+1))
if(u<0)p=0
else p=u>1?1:u
o=t<0
if(o)n=0
else n=t>1?1:t
if(o)o=0
else o=t>1?1:t
r.toString
m=F.aT(new V.aJ(a,-1,-1,-1),null,new V.D(p,n,o,1),new V.U(u*s,t*s,d),new V.v(0,0,1),new V.O(u*0.5+0.5,t*0.5+0.5),q,null,0)
r.h(0,m)
C.a.h(x,m)}z.c.dS(x)
return z},
fh:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=F.av()
y=Math.sqrt(5)/2+0.5
x=F.a8(z,new V.v(-1,y,0))
w=F.a8(z,new V.v(1,y,0))
v=-y
u=F.a8(z,new V.v(-1,v,0))
t=F.a8(z,new V.v(1,v,0))
s=F.a8(z,new V.v(0,-1,v))
r=F.a8(z,new V.v(0,1,v))
q=F.a8(z,new V.v(0,-1,y))
p=F.a8(z,new V.v(0,1,y))
o=F.a8(z,new V.v(y,0,1))
n=F.a8(z,new V.v(y,0,-1))
m=F.a8(z,new V.v(v,0,1))
l=F.a8(z,new V.v(v,0,-1))
F.M(z,x,l,r,a)
F.M(z,x,r,w,a)
F.M(z,x,w,p,a)
F.M(z,x,p,m,a)
F.M(z,x,m,l,a)
F.M(z,w,r,n,a)
F.M(z,r,l,s,a)
F.M(z,l,m,u,a)
F.M(z,m,p,q,a)
F.M(z,p,w,o,a)
F.M(z,t,n,s,a)
F.M(z,t,s,u,a)
F.M(z,t,u,q,a)
F.M(z,t,q,o,a)
F.M(z,t,o,n,a)
F.M(z,s,n,r,a)
F.M(z,u,s,l,a)
F.M(z,q,u,m,a)
F.M(z,o,q,p,a)
F.M(z,n,o,w,a)
z.j5(new F.eI(),new F.j3())
return z},
a8:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
b=b.l(0,Math.sqrt(b.w(b)))
z=b.a
y=b.b
x=b.c
w=F.aT(null,null,null,new V.U(z,y,x),b,null,null,null,0)
v=a.iT(w,new F.eI())
if(v!=null)return v
u=z*0.5+0.5
t=y*0.5+0.5
s=x*0.5+0.5
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
w.sU(0,new V.D(u,t,s,1))
r=Math.sqrt(z*z+y*y)
q=Math.atan2(y,z)/1.5707963267948966
if(q<0)q=-q
p=Math.atan2(r,x)/3.141592653589793
w.scS(new V.O(q,p<0?-p:p))
a.a.h(0,w)
return w},
M:function(a,b,c,d,e){var z,y,x,w
if(e<=0)a.d.dR(0,b,d,c)
else{z=F.a8(a,b.r.D(0,c.r).n(0,0.5))
y=F.a8(a,c.r.D(0,d.r).n(0,0.5))
x=F.a8(a,d.r.D(0,b.r).n(0,0.5))
w=e-1
F.M(a,b,z,x,w)
F.M(a,z,c,y,w)
F.M(a,y,x,z,w)
F.M(a,x,y,d,w)}},
kE:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.m(c,{func:1,ret:-1,args:[F.J,P.r,P.r]})
if(a<1)return
if(b<1)return
z=F.av()
y=H.c([],[F.J])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.aT(null,null,new V.D(u,0,0,1),null,null,new V.O(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cw(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.aT(null,null,new V.D(o,n,m,1),null,null,new V.O(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cw(d))}}z.d.is(a+1,b+1,y)
return z},
jT:{"^":"p:32;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cJ(z.b,b).cJ(z.d.cJ(z.c,b),c)
a.sa0(0,new V.U(y.a,y.b,y.c))
a.scT(y.l(0,Math.sqrt(y.w(y))))
z=1-b
x=1-c
x=new V.aJ(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.A(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.M()}}},
k7:{"^":"p:33;",
$1:function(a){return 1}},
S:{"^":"a;0a,0b,0c,0d,0e",
b7:function(){if(!this.gb8()){C.a.A(this.a.a.d.b,this)
this.a.a.M()}this.cb()
this.cc()
this.hx()},
b1:function(a){this.a=a
C.a.h(a.d.b,this)},
b2:function(a){this.b=a
C.a.h(a.d.c,this)},
dN:function(a){this.c=a
C.a.h(a.d.d,this)},
cb:function(){var z=this.a
if(z!=null){C.a.A(z.d.b,this)
this.a=null}},
cc:function(){var z=this.b
if(z!=null){C.a.A(z.d.c,this)
this.b=null}},
hx:function(){var z=this.c
if(z!=null){C.a.A(z.d.d,this)
this.c=null}},
gb8:function(){return this.a==null||this.b==null||this.c==null},
fq:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.bb()
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.ev())return
return v.l(0,Math.sqrt(v.w(v)))},
fz:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.G(0,y)
z=new V.v(z.a,z.b,z.c)
v=z.l(0,Math.sqrt(z.w(z)))
z=w.G(0,y)
z=new V.v(z.a,z.b,z.c)
z=v.b6(z.l(0,Math.sqrt(z.w(z))))
return z.l(0,Math.sqrt(z.w(z)))},
cs:function(){if(this.d!=null)return!0
var z=this.fq()
if(z==null){z=this.fz()
if(z==null)return!1}this.d=z
this.a.a.M()
return!0},
fp:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=V.bb()
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.ev())return
return v.l(0,Math.sqrt(v.w(v)))},
fw:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.n.$2(n,0)){z=r.G(0,u)
z=new V.v(z.a,z.b,z.c)
m=z.l(0,Math.sqrt(z.w(z)))
if(o.a-p.a<0)m=m.N(0)}else{l=(z-q.b)/n
z=r.G(0,u)
z=new V.U(z.a*l,z.b*l,z.c*l).D(0,u).G(0,x)
z=new V.v(z.a,z.b,z.c)
m=z.l(0,Math.sqrt(z.w(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.N(0)}z=this.d
if(z!=null){k=z.l(0,Math.sqrt(z.w(z)))
z=k.b6(m)
z=z.l(0,Math.sqrt(z.w(z))).b6(k)
m=z.l(0,Math.sqrt(z.w(z)))}return m},
cr:function(){if(this.e!=null)return!0
var z=this.fp()
if(z==null){z=this.fw()
if(z==null)return!1}this.e=z
this.a.a.M()
return!0},
aL:function(a,b){var z=b.a
if(z==null)throw H.h(P.k("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.h(P.k("May not replace a face's vertex with a vertex attached to a different shape."))},
giF:function(){if(J.A(this.a,this.b))return!0
if(J.A(this.b,this.c))return!0
if(J.A(this.c,this.a))return!0
return!1},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
B:function(a){var z,y
if(this.gb8())return a+"disposed"
z=a+C.j.ag(J.af(this.a.e),0)+", "+C.j.ag(J.af(this.b.e),0)+", "+C.j.ag(J.af(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
J:function(){return this.B("")},
m:{
bn:function(a,b,c){var z,y,x
z=new F.S()
y=a.a
if(y==null)H.o(P.k("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.o(P.k("May not create a face with vertices attached to different shapes."))
z.b1(a)
z.b2(b)
z.dN(c)
C.a.h(z.a.a.d.b,z)
z.a.a.M()
return z}}},
fX:{"^":"a;"},
iq:{"^":"fX;",
aU:function(a,b,c){var z,y
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
aa:{"^":"a;0a,0b",
b7:function(){if(!this.gb8()){C.a.A(this.a.a.c.b,this)
this.a.a.M()}this.cb()
this.cc()},
b1:function(a){this.a=a
C.a.h(a.c.b,this)},
b2:function(a){this.b=a
C.a.h(a.c.c,this)},
cb:function(){var z=this.a
if(z!=null){C.a.A(z.c.b,this)
this.a=null}},
cc:function(){var z=this.b
if(z!=null){C.a.A(z.c.c,this)
this.b=null}},
gb8:function(){return this.a==null||this.b==null},
aL:function(a,b){var z=b.a
if(z==null)throw H.h(P.k("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.h(P.k("May not replace a line's vertex with a vertex attached to a different shape."))},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
B:function(a){if(this.gb8())return a+"disposed"
return a+C.j.ag(J.af(this.a.e),0)+", "+C.j.ag(J.af(this.b.e),0)},
J:function(){return this.B("")},
m:{
cH:function(a,b){var z,y,x
z=new F.aa()
if(a==null)H.o(P.k("May not create a line with a null start vertex."))
if(b==null)H.o(P.k("May not create a line with a null end vertex."))
y=a.a
if(y==null)H.o(P.k("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.o(P.k("May not create a line with vertices attached to different shapes."))
z.b1(a)
z.b2(b)
C.a.h(z.a.a.c.b,z)
z.a.a.M()
return z}}},
ho:{"^":"a;"},
iH:{"^":"ho;",
aU:function(a,b,c){var z,y
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
bT:{"^":"a;0a",
hF:function(a){this.a=a
C.a.h(a.b.b,this)},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
B:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.j.ag(J.af(z.e),0)},
J:function(){return this.B("")},
m:{
hS:function(a){var z=new F.bT()
if(a.a==null)H.o(P.k("May not create a point with a vertex which is not attached to a shape."))
z.hF(a)
C.a.h(z.a.a.b.b,z)
z.a.a.M()
return z}}},
ac:{"^":"a;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.I()
this.e=z}return z},
aG:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.p()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.u)(z),++w){v=z[w]
this.a.h(0,v.cv())}this.a.p()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.u)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.p()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
r=t[s]
this.b.a.a.h(0,r)
F.hS(r)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.u)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.p()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.p()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.c.a
t.a.h(0,p)
t.a.h(0,o)
F.cH(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.u)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.p()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.p()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.p()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
m=t[s]
s=this.d.a
s.a.h(0,p)
s.a.h(0,o)
s.a.h(0,m)
F.bn(p,o,m)}z=this.e
if(!(z==null))z.az()},
aw:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aw()||!1
if(!this.a.aw())y=!1
z=this.e
if(!(z==null))z.az()
return y},
aR:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aR()||!1
if(!this.a.aR())y=!1
z=this.e
if(!(z==null))z.az()
return y},
by:function(){var z=this.e
if(!(z==null))++z.d
this.a.by()
z=this.e
if(!(z==null))z.az()
return!0},
iU:function(a,b,c){var z,y,x,w
z=this.a.c.length
for(y=c;y<z;++y){x=this.a.c
if(y>=x.length)return H.f(x,y)
w=x[y]
if(b.aU(0,a,w))return w}return},
iT:function(a,b){return this.iU(a,b,0)},
hz:function(a,b){var z,y,x,w,v,u
H.i(b,"$isb",[F.J],"$asb")
this.a.h(0,a)
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.u)(b),++y){x=b[y]
for(;w=x.d,w.b.length+w.c.length+w.d.length>0;){w=w.j(0,0)
v=w.a
if(v==null||w.b==null||w.c==null)H.o(P.k("May not replace a face's vertex when the point has been disposed."))
if(J.A(v,x)){w.aL(x,a)
v=w.a
if(v!=null){C.a.A(v.d.b,w)
w.a=null}w.a=a
C.a.h(a.d.b,w)
u=1}else u=0
if(J.A(w.b,x)){w.aL(x,a)
v=w.b
if(v!=null){C.a.A(v.d.c,w)
w.b=null}w.b=a
C.a.h(a.d.c,w);++u}if(J.A(w.c,x)){w.aL(x,a)
v=w.c
if(v!=null){C.a.A(v.d.d,w)
w.c=null}w.c=a
C.a.h(a.d.d,w);++u}if(u>0){w=w.a.a.e
if(!(w==null))w.F(null)}}for(;w=x.c,w.b.length+w.c.length>0;){w=w.j(0,0)
v=w.a
if(v==null||w.b==null)H.o(P.k("May not replace a line's vertex when the point has been disposed."))
if(J.A(v,x)){w.aL(x,a)
v=w.a
if(v!=null){C.a.A(v.c.b,w)
w.a=null}w.a=a
C.a.h(a.c.b,w)
u=1}else u=0
if(J.A(w.b,x)){w.aL(x,a)
v=w.b
if(v!=null){C.a.A(v.c.c,w)
w.b=null}w.b=a
C.a.h(a.c.c,w);++u}if(u>0){w=w.a.a.e
if(!(w==null))w.F(null)}}for(;w=x.b.b,w.length>0;){w=w[0]
v=w.a
if(v==null)H.o(P.k("May not replace a point's vertex when the point has been disposed."))
if(J.A(v,x)){if(a.a==null)H.o(P.k("May not replace a point's vertex with a vertex which is not attached to a shape."))
v=w.a
if(v!=null){C.a.A(v.b.b,w)
w.a=null}w.a=a
C.a.h(a.b.b,w)
u=1}else u=0
if(u>0){w=w.a.a.e
if(!(w==null))w.F(null)}}this.a.A(0,x)}},
j5:function(a,b){var z,y,x,w,v,u,t,s
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.c(z.slice(0),[H.t(z,0)])
for(z=[F.J];y.length!==0;){x=C.a.giW(y)
C.a.jm(y,0)
if(x!=null){w=H.c([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.u)(y),++u){t=y[u]
if(t!=null&&a.aU(0,x,t)){C.a.h(w,t)
C.a.A(y,t)}}if(w.length>1){s=b.aG(w)
this.hz(s,w)
C.a.h(y,s)}}}this.a.p()
this.c.cP()
this.d.cP()
this.b.jn()
this.c.cQ(new F.iH())
this.d.cQ(new F.iq())
z=this.e
if(!(z==null))z.az()},
dX:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$az()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$ay().a)!==0)++w
if((x&$.$get$ax().a)!==0)++w
if((x&$.$get$aN().a)!==0)++w
if((x&$.$get$aO().a)!==0)++w
if((x&$.$get$aV().a)!==0)++w
if((x&$.$get$bz().a)!==0)++w
if((x&$.$get$bc().a)!==0)++w
if((x&$.$get$aM().a)!==0)++w
v=b.gd6(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.r
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.dq])
for(r=0,q=0;q<w;++q){p=b.iw(q)
o=p.gd6(p)
C.a.a2(s,q,new Z.dq(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.f(y,n)
m=y[n].j3(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.a2(t,l,m[k]);++l}}r+=o}H.i(t,"$isb",[x],"$asb")
y=a.a
j=y.createBuffer()
C.b.av(y,34962,j)
C.b.dW(y,34962,new Float32Array(H.bD(t)),35044)
C.b.av(y,34962,null)
i=new Z.bK(new Z.eM(34962,j),s,b)
i.sfR(H.c([],[Z.bO]))
if(this.b.b.length!==0){x=P.w
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.p()
C.a.h(h,g.e)}f=Z.d5(y,34963,H.i(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bO(0,h.length,f))}if(this.c.b.length!==0){x=P.w
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.p()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.p()
C.a.h(h,g.e)}f=Z.d5(y,34963,H.i(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bO(1,h.length,f))}if(this.d.b.length!==0){x=P.w
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.p()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.p()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].c
g.a.a.p()
C.a.h(h,g.e)}f=Z.d5(y,34963,H.i(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bO(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.z])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.B("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.B("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.B("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.B("   "))}return C.a.E(z,"\n")},
a9:function(a){var z=this.e
if(!(z==null))z.F(a)},
M:function(){return this.a9(null)},
$iskY:1,
m:{
av:function(){var z,y
z=new F.ac()
y=new F.j_(z)
y.b=!1
y.si_(H.c([],[F.J]))
z.a=y
y=new F.ik(z)
y.sc8(H.c([],[F.bT]))
z.b=y
y=new F.ij(z)
y.sfS(H.c([],[F.aa]))
z.c=y
y=new F.ii(z)
y.sfJ(H.c([],[F.S]))
z.d=y
z.e=null
return z}}},
ii:{"^":"a;a,0b",
sfJ:function(a){this.b=H.i(a,"$isb",[F.S],"$asb")},
dR:function(a,b,c,d){var z,y,x
z=this.a
z.a.h(0,b)
z.a.h(0,c)
z.a.h(0,d)
y=new F.S()
z=b.a
if(z==null)H.o(P.k("May not create a face with a first vertex which is not attached to a shape."))
x=c.a
if(z==null?x==null:z===x){x=d.a
x=z==null?x!=null:z!==x
z=x}else z=!0
if(z)H.o(P.k("May not create a face with vertices attached to different shapes."))
y.b1(b)
y.b2(c)
y.dN(d)
C.a.h(y.a.a.d.b,y)
y.a.a.M()
return y},
ir:function(a){var z,y,x,w,v,u,t
H.i(a,"$isb",[F.J],"$asb")
z=H.c([],[F.S])
y=a.length
if(y>0){x=a[0]
for(w=this.a,v=2;v<y;++v){u=v-1
t=a.length
if(u>=t)return H.f(a,u)
u=a[u]
if(v>=t)return H.f(a,v)
t=a[v]
w.a.h(0,x)
w.a.h(0,u)
w.a.h(0,t)
C.a.h(z,F.bn(x,u,t))}}return z},
is:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.i(c,"$isb",[F.J],"$asb")
z=H.c([],[F.S])
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
C.a.h(z,F.bn(q,p,n))
y.a.h(0,q)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bn(q,n,m))}else{r.h(0,p)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bn(p,n,m))
y.a.h(0,p)
y.a.h(0,m)
y.a.h(0,q)
C.a.h(z,F.bn(p,m,q))}t=!t}v=!v}return z},
gq:function(a){return this.b.length},
cQ:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.f(x,y)
w=x[y]
for(x=w.d,v=x.b.length+x.c.length+x.d.length-1;v>=0;--v){u=w.d.j(0,v)
for(t=v-1;t>=0;--t){s=w.d.j(0,t)
if(a.aU(0,u,s)){u.b7()
break}}}}},
cP:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=x.giF()
if(y)x.b7()}},
aw:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.u)(z),++w)if(!z[w].cs())x=!1
return x},
aR:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.u)(z),++w)if(!z[w].cr())x=!1
return x},
i:function(a){return this.J()},
B:function(a){var z,y,x,w
z=H.c([],[P.z])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.u)(y),++w)C.a.h(z,y[w].B(a))
return C.a.E(z,"\n")},
J:function(){return this.B("")}},
ij:{"^":"a;a,0b",
sfS:function(a){this.b=H.i(a,"$isb",[F.aa],"$asb")},
ci:function(a,b,c){var z,y,x
z=this.a
z.a.h(0,b)
z.a.h(0,c)
z=new F.aa()
if(b==null)H.o(P.k("May not create a line with a null start vertex."))
if(c==null)H.o(P.k("May not create a line with a null end vertex."))
y=b.a
if(y==null)H.o(P.k("May not create a line with a start vertex which is not attached to a shape."))
x=c.a
if(y==null?x!=null:y!==x)H.o(P.k("May not create a line with vertices attached to different shapes."))
z.b1(b)
z.b2(c)
C.a.h(z.a.a.c.b,z)
z.a.a.M()
return z},
dS:function(a){var z,y,x,w,v,u
H.i(a,"$isb",[F.J],"$asb")
z=H.c([],[F.aa])
y=a.length
if(y>0){for(x=this.a,w=1;w<y;++w){v=w-1
u=a.length
if(v>=u)return H.f(a,v)
v=a[v]
if(w>=u)return H.f(a,w)
u=a[w]
x.a.h(0,v)
x.a.h(0,u)
C.a.h(z,F.cH(v,u))}x=y-1
v=a.length
if(x>=v)return H.f(a,x)
x=a[x]
if(0>=v)return H.f(a,0)
C.a.h(z,this.ci(0,x,a[0]))}return z},
iu:function(a){var z,y,x,w,v
H.i(a,"$isb",[F.J],"$asb")
z=H.c([],[F.aa])
for(y=this.a,x=1;x<64;x+=2){w=a[x-1]
v=a[x]
y.a.h(0,w)
y.a.h(0,v)
C.a.h(z,F.cH(w,v))}return z},
gq:function(a){return this.b.length},
cQ:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.f(x,y)
w=x[y]
for(x=w.c,v=x.b.length+x.c.length-1;v>=0;--v){u=w.c.j(0,v)
for(t=v-1;t>=0;--t){s=w.c.j(0,t)
if(a.aU(0,u,s)){u.b7()
break}}}}},
cP:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=J.A(x.a,x.b)
if(y)x.b7()}},
i:function(a){return this.J()},
B:function(a){var z,y,x,w
z=H.c([],[P.z])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.f(w,x)
C.a.h(z,w[x].B(a+(""+x+". ")))}return C.a.E(z,"\n")},
J:function(){return this.B("")}},
ik:{"^":"a;a,0b",
sc8:function(a){this.b=H.i(a,"$isb",[F.bT],"$asb")},
gq:function(a){return this.b.length},
jn:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
y=y[z]
x=y.a
if(x.b.b.length>1){if(x!=null){C.a.A(x.a.b.b,y)
x=y.a.a.e
if(!(x==null))x.F(null)}x=y.a
if(x!=null){C.a.A(x.b.b,y)
y.a=null}}}},
i:function(a){return this.J()},
B:function(a){var z,y,x,w
z=H.c([],[P.z])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.u)(y),++w)C.a.h(z,y[w].B(a))
return C.a.E(z,"\n")},
J:function(){return this.B("")}},
J:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cw:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.aT(this.cx,x,u,z,y,w,v,a,t)},
cv:function(){return this.cw(null)},
sa0:function(a,b){var z
if(!J.A(this.f,b)){this.f=b
z=this.a
if(z!=null)z.M()}},
sex:function(a){var z
a=a==null?null:a.l(0,Math.sqrt(a.w(a)))
if(!J.A(this.r,a)){this.r=a
z=this.a
if(z!=null)z.M()}},
sbx:function(a){var z
a=a==null?null:a.l(0,Math.sqrt(a.w(a)))
if(!J.A(this.x,a)){this.x=a
z=this.a
if(z!=null)z.M()}},
scS:function(a){var z
if(!J.A(this.y,a)){this.y=a
z=this.a
if(z!=null)z.M()}},
scT:function(a){var z
if(!J.A(this.z,a)){this.z=a
z=this.a
if(z!=null)z.M()}},
sU:function(a,b){var z
if(!J.A(this.Q,b)){this.Q=b
z=this.a
if(z!=null)z.M()}},
seN:function(a){var z
if(this.ch!==a){this.ch=a
z=this.a
if(z!=null)z.M()}},
j3:function(a){var z,y
if(a.v(0,$.$get$az())){z=this.f
y=[P.r]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.v(0,$.$get$ay())){z=this.r
y=[P.r]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.v(0,$.$get$ax())){z=this.x
y=[P.r]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.v(0,$.$get$aN())){z=this.y
y=[P.r]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(a.v(0,$.$get$aO())){z=this.z
y=[P.r]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.v(0,$.$get$aV())){z=this.Q
y=[P.r]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.v(0,$.$get$bz())){z=this.Q
if(z==null)return H.c([1,1,1,1],[P.r])
else return z.cU(0)}else if(a.v(0,$.$get$bc()))return H.c([this.ch],[P.r])
else if(a.v(0,$.$get$aM())){z=this.cx
y=[P.r]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.r])},
cs:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bb()
this.d.a_(0,new F.j9(z))
z=z.a
this.r=z.l(0,Math.sqrt(z.w(z)))
z=this.a
if(z!=null){z.M()
z=this.a.e
if(!(z==null))z.az()}return!0},
cr:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bb()
this.d.a_(0,new F.j8(z))
z=z.a
this.x=z.l(0,Math.sqrt(z.w(z)))
z=this.a
if(z!=null){z.M()
z=this.a.e
if(!(z==null))z.az()}return!0},
ep:function(a){var z,y,x,w
z=this.c.b.length
for(y=0;y<z;++y){x=this.c.b
if(y>=x.length)return H.f(x,y)
w=x[y]
x=w.b
x.a.a.p()
x=x.e
a.a.a.p()
if(x==a.e)return w}return},
iX:function(a){var z=this.ep(a)
if(z!=null)return z
return a.ep(this)},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
B:function(a){var z,y,x
z=H.c([],[P.z])
C.a.h(z,C.j.ag(J.af(this.e),0))
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
x=C.a.E(z,", ")
return a+"{"+x+"}"},
J:function(){return this.B("")},
m:{
aT:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.J()
y=new F.j7(z)
y.sc8(H.c([],[F.bT]))
z.b=y
y=new F.j4(z)
x=[F.aa]
y.sfT(H.c([],x))
y.sfU(H.c([],x))
z.c=y
y=new F.j0(z)
x=[F.S]
y.sfK(H.c([],x))
y.sfL(H.c([],x))
y.sfM(H.c([],x))
z.d=y
h=$.$get$eJ()
z.e=0
y=$.$get$az()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$ay().a)!==0?e:null
z.x=(x&$.$get$ax().a)!==0?b:null
z.y=(x&$.$get$aN().a)!==0?f:null
z.z=(x&$.$get$aO().a)!==0?g:null
z.Q=(x&$.$get$eK().a)!==0?c:null
z.ch=(x&$.$get$bc().a)!==0?i:0
z.cx=(x&$.$get$aM().a)!==0?a:null
return z}}},
j9:{"^":"p:6;a",
$1:function(a){var z,y
H.e(a,"$isS")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
j8:{"^":"p:6;a",
$1:function(a){var z,y
H.e(a,"$isS")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
j_:{"^":"a;a,0b,0c",
si_:function(a){this.c=H.i(a,"$isb",[F.J],"$asb")},
p:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.f(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z,y
z=b.a
if(z!=null){if(z===this.a)return!1
throw H.h(P.k("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
y=this.a
b.a=y
C.a.h(z,b)
y.M()
return!0},
iv:function(a,b,c,d,e,f,g,h,i){var z=F.aT(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
aQ:function(a,b,c,d,e,f){return this.iv(a,null,b,c,null,d,e,f,0)},
X:function(a,b,c){var z=F.aT(null,null,null,new V.U(a,b,c),null,null,null,null,0)
this.h(0,z)
return z},
gq:function(a){return this.c.length},
A:function(a,b){var z,y
if(b==null)return!1
z=this.a
if(b.a!==z)return!1
if(b.b.b.length===0){y=b.c
if(y.b.length===0&&y.c.length===0){y=b.d
y=y.b.length===0&&y.c.length===0&&y.d.length===0}else y=!1}else y=!1
if(!y)throw H.h(P.k("May not remove a vertex without first making it empty."))
b.a=null
C.a.A(this.c,b)
z.M()
this.b=!0
return!0},
aw:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.u)(z),++x)z[x].cs()
return!0},
aR:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.u)(z),++x)z[x].cr()
return!0},
by:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.u)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.l(0,Math.sqrt(u*u+t*t+s*s))
if(!J.A(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.F(null)}}}}return!0},
i:function(a){return this.J()},
B:function(a){var z,y,x,w
this.p()
z=H.c([],[P.z])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.u)(y),++w)C.a.h(z,y[w].B(a))
return C.a.E(z,"\n")},
J:function(){return this.B("")}},
j0:{"^":"a;a,0b,0c,0d",
sfK:function(a){this.b=H.i(a,"$isb",[F.S],"$asb")},
sfL:function(a){this.c=H.i(a,"$isb",[F.S],"$asb")},
sfM:function(a){this.d=H.i(a,"$isb",[F.S],"$asb")},
gq:function(a){return this.b.length+this.c.length+this.d.length},
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
a_:function(a,b){H.m(b,{func:1,ret:-1,args:[F.S]})
C.a.a_(this.b,b)
C.a.a_(this.c,new F.j1(this,b))
C.a.a_(this.d,new F.j2(this,b))},
i:function(a){return this.J()},
B:function(a){var z,y,x,w
z=H.c([],[P.z])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.u)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.u)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.u)(y),++w)C.a.h(z,y[w].B(a))
return C.a.E(z,"\n")},
J:function(){return this.B("")}},
j1:{"^":"p:6;a,b",
$1:function(a){H.e(a,"$isS")
if(!J.A(a.a,this.a))this.b.$1(a)}},
j2:{"^":"p:6;a,b",
$1:function(a){var z
H.e(a,"$isS")
z=this.a
if(!J.A(a.a,z)&&!J.A(a.b,z))this.b.$1(a)}},
j4:{"^":"a;a,0b,0c",
sfT:function(a){this.b=H.i(a,"$isb",[F.aa],"$asb")},
sfU:function(a){this.c=H.i(a,"$isb",[F.aa],"$asb")},
gq:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.f(z,x)
return z[x]}else{if(b<0)return H.f(z,b)
return z[b]}},
i:function(a){return this.J()},
B:function(a){var z,y,x,w
z=H.c([],[P.z])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.u)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.u)(y),++w)C.a.h(z,y[w].B(a))
return C.a.E(z,"\n")},
J:function(){return this.B("")}},
j5:{"^":"a;"},
eI:{"^":"j5;",
aU:function(a,b,c){return J.A(b.f,c.f)}},
j6:{"^":"a;"},
j3:{"^":"j6;",
aG:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.i(a,"$isb",[F.J],"$asb")
for(z=a.length,y=0,x=null,w=null,v=null,u=0,t=null,s=0,r=null,q=0,p=null,o=0,n=0,m=0;m<z;++m){l=a[m]
k=l.f
if(k!=null){x=x==null?k:new V.U(x.a+k.a,x.b+k.b,x.c+k.c);++y}j=l.r
if(j!=null)w=w==null?j:new V.v(w.a+j.a,w.b+j.b,w.c+j.c)
i=l.x
if(i!=null)v=v==null?i:new V.v(v.a+i.a,v.b+i.b,v.c+i.c)
h=l.y
if(h!=null){r=r==null?h:new V.O(r.a+h.a,r.b+h.b);++s}g=l.z
if(g!=null){p=p==null?g:new V.v(p.a+g.a,p.b+g.b,p.c+g.c);++q}f=l.Q
if(f!=null){e=f.a
d=f.b
c=f.c
f=f.d
if(t==null){f=[e,d,c,f]
t=new V.bW(f[0],f[1],f[2],f[3])}else{f=[e,d,c,f]
e=f[0]
d=f[1]
c=f[2]
f=f[3]
t=new V.bW(t.a+e,t.b+d,t.c+c,t.d+f)}++u}f=l.ch
if(typeof f!=="number")return H.y(f)
n+=f;++o}b=F.aT(null,null,null,null,null,null,null,null,0)
if(y<=0||x==null)b.sa0(0,null)
else b.sa0(0,x.l(0,y))
if(w==null)b.sex(null)
else b.sex(w.l(0,Math.sqrt(w.w(w))))
if(v==null)b.sbx(null)
else b.sbx(v.l(0,Math.sqrt(v.w(v))))
if(s<=0||r==null)b.scS(null)
else b.scS(r.l(0,s))
if(q<=0||p==null)b.scT(null)
else b.scT(p.l(0,q))
if(u<=0||t==null)b.sU(0,null)
else{z=t.l(0,u)
z=[z.a,z.b,z.c,z.d]
f=z[0]
e=z[1]
d=z[2]
z=z[3]
if(f<0)f=0
else if(f>1)f=1
if(e<0)e=0
else if(e>1)e=1
if(d<0)d=0
else if(d>1)d=1
if(z<0)z=0
else if(z>1)z=1
b.sU(0,new V.D(f,e,d,z))}if(o<=0)b.seN(0)
else b.seN(n/o)
return b}},
j7:{"^":"a;a,0b",
sc8:function(a){this.b=H.i(a,"$isb",[F.bT],"$asb")},
gq:function(a){return this.b.length},
i:function(a){return this.J()},
B:function(a){var z,y,x,w
z=H.c([],[P.z])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.u)(y),++w)C.a.h(z,y[w].B(a))
return C.a.E(z,"\n")},
J:function(){return this.B("")}}}],["","",,O,{"^":"",h6:{"^":"bx;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx",
gt:function(){var z=this.rx
if(z==null){z=D.I()
this.rx=z}return z},
W:function(a){var z=this.rx
if(!(z==null))z.F(a)},
sd4:function(a){var z
if(!this.Q){this.Q=!0
z=new D.B("showFilled",!1,!0,this,[P.Y])
z.b=!0
this.W(z)}},
sd5:function(a){var z
if(!this.ch){this.ch=!0
z=new D.B("showWireFrame",!1,!0,this,[P.Y])
z.b=!0
this.W(z)}},
se0:function(a){var z,y
if(!this.c.v(0,a)){z=this.c
this.c=a
y=new D.B("diffuse1",z,a,this,[V.D])
y.b=!0
this.W(y)}},
sdU:function(a){var z,y
if(!this.d.v(0,a)){z=this.d
this.d=a
y=new D.B("ambient1",z,a,this,[V.D])
y.b=!0
this.W(y)}},
aa:function(a){},
eG:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.e(a.fr.j(0,"Inspection"),"$isdK")
if(z==null){y=a.a
z=new A.dK(y,"Inspection")
z.df(y,"Inspection")
z.es($.ha,$.h7)
z.z=z.x.j(0,"posAttr")
z.Q=z.x.j(0,"normAttr")
z.ch=z.x.j(0,"clrAttr")
z.cx=z.x.j(0,"binmAttr")
z.cy=H.d(z.y.j(0,"lightVec"),"$isC")
z.db=H.d(z.y.j(0,"ambientClr"),"$iscX")
z.dx=H.d(z.y.j(0,"diffuseClr"),"$iscX")
z.dy=H.d(z.y.j(0,"weightScalar"),"$isT")
z.fr=H.d(z.y.j(0,"viewMat"),"$isad")
z.fx=H.d(z.y.j(0,"viewObjMatrix"),"$isad")
z.fy=H.d(z.y.j(0,"projViewObjMatrix"),"$isad")
a.dT(z)}this.a=z}if(b.e==null){b.d.aw()
b.d.aR()
b.d.by()
y=new Z.dr()
y.sfY(new H.b3(0,0,[P.z,Z.bK]))
b.e=y}y=this.a
y.au(a)
x=this.r2
w=y.dy
C.b.I(w.a,w.d,x)
x=this.b
w=y.cy
w.toString
v=x.a
u=x.b
x=x.c
C.b.u(w.a,w.d,v,u,x)
x=a.db.gH()
u=y.fr
u.toString
u.a6(x.a4(0,!0))
x=a.geM()
u=y.fx
u.toString
u.a6(x.a4(0,!0))
x=a.geD()
y=y.fy
y.toString
y.a6(x.a4(0,!0))
y=b.e
if(y instanceof Z.dr){x=a.a
C.b.aE(x,1,1)
if(b.c==null){C.b.cA(x,2929)
C.b.ax(x,3042)
C.b.aE(x,1,1)
C.b.ax(x,2929)
C.b.aE(x,770,771)}else{C.b.ax(x,2929)
C.b.ax(x,3042)
C.b.aE(x,770,771)
if(this.Q)this.dJ(a,y,b.c,"shapeFill",this.ghK(),this.d,this.c)
C.b.cA(x,2929)
C.b.aE(x,1,1)
if(this.ch)this.dJ(a,y,b.c,"wireFrame",this.gi0(),this.f,this.e)
C.b.ax(x,2929)
C.b.aE(x,770,771)}}else b.e=null
y=this.a
y.toString
C.b.cW(a.a,null)
y.x.e1()},
dJ:function(a,b,c,d,e,f,g){var z,y
H.m(e,{func:1,ret:F.ac,args:[F.ac]})
z=b.a.j(0,d)
if(z==null){z=this.fv(a,e.$1(c))
b.a.a2(0,d,z)}y=this.a
y.db.d2(f)
y.dx.d2(g)
z.jc(a)},
fv:function(a,b){var z,y,x
H.e(b,"$isac")
z=$.$get$az()
y=$.$get$ay()
x=b.dX(new Z.eN(a.a),new Z.aU(z.a|y.a|$.$get$ax().a|$.$get$aV().a))
x.ae($.$get$az()).e=this.a.z.c
x.ae($.$get$ay()).e=this.a.Q.c
x.ae($.$get$aV()).e=this.a.ch.c
x.ae($.$get$ax()).e=this.a.cx.c
return x},
kc:[function(a){var z,y,x
z=F.av()
y=a.a
y.toString
x=H.m(new O.h8(z,new V.D(1,1,1,1)),{func:1,ret:-1,args:[F.J]})
C.a.a_(y.c,x)
x=a.d
x.toString
y=H.m(new O.h9(z),{func:1,ret:-1,args:[F.S]})
C.a.a_(x.b,y)
return z},"$1","ghK",4,0,35],
i1:[function(a,b){var z,y,x,w
z={}
z.a=b
y=F.av()
z.a=new V.D(0,0.7,1,1)
x=a.a
x.toString
z=H.m(new O.hc(z,y),{func:1,ret:-1,args:[F.J]})
C.a.a_(x.c,z)
z=new O.hb(y)
x=a.c
x.toString
w=H.m(new O.hd(y,z),{func:1,ret:-1,args:[F.aa]})
C.a.a_(x.b,w)
w=a.d
w.toString
z=H.m(new O.he(y,z),{func:1,ret:-1,args:[F.S]})
C.a.a_(w.b,z)
return y},function(a){return this.i1(a,null)},"kg","$2$color","$1","gi0",4,3,36],
m:{
dL:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var z=new O.h6()
z.b=V.eG()
z.c=new V.D(0.2,0.3,0.4,1)
z.d=new V.D(0.1,0.2,0.3,1)
z.e=new V.D(0.7,0.7,0.7,1)
z.f=new V.D(0.3,0.3,0.3,1)
z.r=new V.D(0.5,0.5,0.5,1)
z.x=new V.D(0.5,0.5,0.5,1)
z.y=new V.D(1,1,1,1)
z.z=new V.D(0.8,0.8,0.8,1)
z.Q=!1
z.ch=!1
z.cx=!1
z.cy=!1
z.db=!1
z.dx=!1
z.dy=!1
z.fr=!1
z.fx=!1
z.fy=!1
z.go=!1
z.id=!1
z.k1=!1
z.k2=!1
z.k3=!1
z.k4=!1
z.r1=!1
z.r2=r
return z}}},h8:{"^":"p:20;a,b",
$1:function(a){var z,y
H.e(a,"$isJ")
z=this.a.a
y=a.cv()
y.sU(0,this.b)
y.sbx(V.bb())
z.h(0,y)}},h9:{"^":"p:6;a",
$1:function(a){var z,y,x,w,v,u
H.e(a,"$isS")
z=this.a
y=z.a
x=a.a
x.a.a.p()
x=x.e
w=C.a.j(y.c,x)
x=z.a
y=a.b
y.a.a.p()
y=y.e
v=C.a.j(x.c,y)
y=z.a
x=a.c
x.a.a.p()
x=x.e
u=C.a.j(y.c,x)
z.d.dR(0,w,v,u)}},hc:{"^":"p:20;a,b",
$1:function(a){var z,y
H.e(a,"$isJ")
z=this.b.a
y=a.cv()
y.sU(0,this.a.a)
y.sbx(V.bb())
z.h(0,y)}},hb:{"^":"p:37;a",
$2:function(a,b){if(a.iX(b)==null)this.a.c.ci(0,a,b)}},hd:{"^":"p:38;a,b",
$1:function(a){var z,y,x,w
H.e(a,"$isaa")
z=this.a
y=z.a
x=a.a
x.a.a.p()
x=x.e
w=C.a.j(y.c,x)
z=z.a
x=a.b
x.a.a.p()
x=x.e
this.b.$2(w,C.a.j(z.c,x))}},he:{"^":"p:6;a,b",
$1:function(a){var z,y,x,w,v,u
H.e(a,"$isS")
z=this.a
y=z.a
x=a.a
x.a.a.p()
x=x.e
w=C.a.j(y.c,x)
x=z.a
y=a.b
y.a.a.p()
y=y.e
v=C.a.j(x.c,y)
z=z.a
y=a.c
y.a.a.p()
y=y.e
u=C.a.j(z.c,y)
y=this.b
y.$2(w,v)
y.$2(v,u)
y.$2(u,w)}},hD:{"^":"bx;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
sft:function(a){this.e=H.i(a,"$isQ",[V.ab],"$asQ")},
gt:function(){var z=this.dy
if(z==null){z=D.I()
this.dy=z}return z},
W:[function(a){var z
H.e(a,"$isq")
z=this.dy
if(!(z==null))z.F(a)},function(){return this.W(null)},"jD","$1","$0","gfl",0,2,0],
hC:[function(a){H.e(a,"$isq")
this.a=null
this.W(a)},function(){return this.hC(null)},"kb","$1","$0","ghB",0,2,0],
jJ:[function(a,b){var z=V.ab
z=new D.bP(a,H.i(b,"$isl",[z],"$asl"),this,[z])
z.b=!0
this.W(z)},"$2","gh3",8,0,21],
jK:[function(a,b){var z=V.ab
z=new D.bQ(a,H.i(b,"$isl",[z],"$asl"),this,[z])
z.b=!0
this.W(z)},"$2","gh4",8,0,21],
dt:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
z=this.dx
y=C.h.a8(z.e.length+3,4)*4
x=C.h.a8(z.f.length+3,4)*4
w=C.h.a8(z.r.length+3,4)*4
v=C.h.a8(z.x.length+3,4)*4
u=C.h.a8(z.y.length+3,4)*4
t=C.h.a8(z.z.length+3,4)*4
s=C.h.a8(this.e.a.length+3,4)*4
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
a2=$.$get$az()
if(e){g=$.$get$ay()
a2=new Z.aU(a2.a|g.a)}if(d){g=$.$get$ax()
a2=new Z.aU(a2.a|g.a)}if(c){g=$.$get$aN()
a2=new Z.aU(a2.a|g.a)}if(b){g=$.$get$aO()
a2=new Z.aU(a2.a|g.a)}if(a0){g=$.$get$aM()
a2=new Z.aU(a2.a|g.a)}return new A.hG(z,r,q,p,o,n,m,l,k,y,x,w,v,u,t,y+x+w+v+u+t,i,i,a,a1,!0,!1,!1,h,a,f,e,d,c,b,a0,!1,!1,!1,s,j.charCodeAt(0)==0?j:j,a2)},
T:function(a,b){H.i(a,"$isb",[T.eh],"$asb")},
aa:function(a){var z
for(z=this.dx.a,z=new J.ag(z,z.length,0,[H.t(z,0)]);z.C();)z.d.aa(a)},
eG:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.dt()
y=H.e(a.fr.j(0,z.ao),"$isdW")
if(y==null){y=A.hC(z,a.a)
a.dT(y)}this.a=y
b.e=null
z=y}x=z.z
w=x.bA
z=b.e
if(!(z instanceof Z.bK)){b.e=null
z=null}if(z==null||!z.d.v(0,w)){z=x.r1
if(z)b.d.aw()
v=x.r2
if(v)b.d.aR()
u=x.ry
if(u)b.d.by()
t=b.d.dX(new Z.eN(a.a),w)
t.ae($.$get$az()).e=this.a.Q.c
if(z)t.ae($.$get$ay()).e=this.a.cx.c
if(v)t.ae($.$get$ax()).e=this.a.ch.c
if(x.rx)t.ae($.$get$aN()).e=this.a.cy.c
if(u)t.ae($.$get$aO()).e=this.a.db.c
if(x.x1)t.ae($.$get$aM()).e=this.a.dx.c
b.e=t}z=T.eh
s=H.c([],[z])
this.a.au(a)
if(x.fx){v=this.a
u=a.dx.gH()
v=v.dy
v.toString
v.a6(u.a4(0,!0))}if(x.fy){v=this.a
u=a.geM()
v=v.fr
v.toString
v.a6(u.a4(0,!0))}v=this.a
u=a.geD()
v=v.fy
v.toString
v.a6(u.a4(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.k1
v.toString
v.a6(C.o.a4(u,!0))}if(x.y1){v=this.a
u=this.c
v=v.k2
v.toString
v.a6(C.o.a4(u,!0))}if(x.y2){v=this.a
u=this.d
v=v.k3
v.toString
v.a6(C.o.a4(u,!0))}if(x.ay>0){r=this.e.a.length
v=this.a.k4
C.b.P(v.a,v.d,r)
for(v=[P.r],q=0;q<r;++q){u=this.a
p=this.e.a
if(q>=p.length)return H.f(p,q)
p=p[q]
u.toString
H.e(p,"$isab")
u=u.r1
if(q>=u.length)return H.f(u,q)
u=u[q]
o=new Float32Array(H.bD(H.i(p.a4(0,!0),"$isb",v,"$asb")))
C.b.eL(u.a,u.d,!1,o)}}switch(x.a){case C.c:break
case C.f:v=this.a
u=this.f.f
v=v.r2
v.toString
p=u.a
n=u.b
u=u.c
C.b.u(v.a,v.d,p,n,u)
break
case C.d:this.T(s,this.f.d)
v=this.a
u=this.f.d
v.aj(v.rx,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
p=v.a
n=v.b
v=v.c
C.b.u(u.a,u.d,p,n,v)
break
case C.e:this.T(s,this.f.e)
v=this.a
u=this.f.e
v.ac(v.ry,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
p=v.a
n=v.b
v=v.c
C.b.u(u.a,u.d,p,n,v)
break}if(x.k2){switch(x.b){case C.c:break
case C.f:v=this.a
u=this.r.f
v=v.x2
v.toString
p=u.a
n=u.b
u=u.c
C.b.u(v.a,v.d,p,n,u)
break
case C.d:this.T(s,this.r.d)
v=this.a
u=this.r.d
v.aj(v.y1,v.ay,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
p=v.a
n=v.b
v=v.c
C.b.u(u.a,u.d,p,n,v)
break
case C.e:this.T(s,this.r.e)
v=this.a
u=this.r.e
v.ac(v.y2,v.ay,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
p=v.a
n=v.b
v=v.c
C.b.u(u.a,u.d,p,n,v)
break}switch(x.c){case C.c:break
case C.f:v=this.a
u=this.x.f
v=v.ao
v.toString
p=u.a
n=u.b
u=u.c
C.b.u(v.a,v.d,p,n,u)
break
case C.d:this.T(s,this.x.d)
v=this.a
u=this.x.d
v.aj(v.bA,v.bB,u)
u=this.a
v=this.x.f
u=u.ao
u.toString
p=v.a
n=v.b
v=v.c
C.b.u(u.a,u.d,p,n,v)
break
case C.e:this.T(s,this.x.e)
v=this.a
u=this.x.e
v.ac(v.e4,v.bB,u)
u=this.a
v=this.x.f
u=u.ao
u.toString
p=v.a
n=v.b
v=v.c
C.b.u(u.a,u.d,p,n,v)
break}switch(x.d){case C.c:break
case C.f:v=this.a
u=this.y.f
v=v.bC
v.toString
p=u.a
n=u.b
u=u.c
C.b.u(v.a,v.d,p,n,u)
break
case C.d:this.T(s,this.y.d)
v=this.a
u=this.y.d
v.aj(v.e5,v.bD,u)
u=this.a
v=this.y.f
u=u.bC
u.toString
p=v.a
n=v.b
v=v.c
C.b.u(u.a,u.d,p,n,v)
break
case C.e:this.T(s,this.y.e)
v=this.a
u=this.y.e
v.ac(v.e6,v.bD,u)
u=this.a
v=this.y.f
u=u.bC
u.toString
p=v.a
n=v.b
v=v.c
C.b.u(u.a,u.d,p,n,v)
break}switch(x.e){case C.c:break
case C.f:v=this.a
u=this.z.f
v=v.bE
v.toString
p=u.a
n=u.b
u=u.c
C.b.u(v.a,v.d,p,n,u)
u=this.a
n=this.z.ch
u=u.bG
C.b.I(u.a,u.d,n)
break
case C.d:this.T(s,this.z.d)
v=this.a
u=this.z.d
v.aj(v.e7,v.bF,u)
u=this.a
v=this.z.f
u=u.bE
u.toString
p=v.a
n=v.b
v=v.c
C.b.u(u.a,u.d,p,n,v)
v=this.a
n=this.z.ch
v=v.bG
C.b.I(v.a,v.d,n)
break
case C.e:this.T(s,this.z.e)
v=this.a
u=this.z.e
v.ac(v.e8,v.bF,u)
u=this.a
v=this.z.f
u=u.bE
u.toString
p=v.a
n=v.b
v=v.c
C.b.u(u.a,u.d,p,n,v)
v=this.a
n=this.z.ch
v=v.bG
C.b.I(v.a,v.d,n)
break}if(x.z>0){r=this.dx.e.length
v=this.a.ej
C.b.P(v.a,v.d,r)
m=a.db.gH()
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.u)(v),++k){j=v[k]
p=this.a.cB
if(l>=p.length)return H.f(p,l)
i=p[l]
p=m.eJ(j.gbz(j))
n=p.a
h=p.b
g=p.c
g=p.l(0,Math.sqrt(n*n+h*h+g*g))
h=i.b
n=g.a
p=g.b
g=g.c
C.b.u(h.a,h.d,n,p,g)
g=j.gU(j)
p=i.c
n=g.gbi()
h=g.gaW()
g=g.gb4()
C.b.u(p.a,p.d,n,h,g);++l}}if(x.Q>0){r=this.dx.f.length
v=this.a.ek
C.b.P(v.a,v.d,r)
m=a.db.gH()
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.u)(v),++k){j=v[k]
p=this.a.cC
if(l>=p.length)return H.f(p,l)
i=p[l]
p=j.gbh(j)
n=i.b
h=p.gcY(p)
g=p.gcZ(p)
p=p.gd_(p)
C.b.u(n.a,n.d,h,g,p)
p=m.bn(j.gbh(j))
g=i.c
C.b.u(g.a,g.d,p.a,p.b,p.c)
p=j.gU(j)
g=i.d
h=p.gbi()
n=p.gaW()
p=p.gb4()
C.b.u(g.a,g.d,h,n,p)
p=j.gcm()
n=i.e
C.b.I(n.a,n.d,p)
p=j.gcn()
n=i.f
C.b.I(n.a,n.d,p)
p=j.gco()
n=i.r
C.b.I(n.a,n.d,p);++l}}if(x.ch>0){r=this.dx.r.length
v=this.a.el
C.b.P(v.a,v.d,r)
m=a.db.gH()
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.u)(v),++k){j=v[k]
p=this.a.cD
if(l>=p.length)return H.f(p,l)
i=p[l]
p=j.gbh(j)
n=i.b
h=p.gcY(p)
g=p.gcZ(p)
p=p.gd_(p)
C.b.u(n.a,n.d,h,g,p)
p=j.gbz(j).kj()
g=i.c
h=p.gal(p)
n=p.gam(p)
p=p.gan()
C.b.u(g.a,g.d,h,n,p)
p=m.bn(j.gbh(j))
n=i.d
C.b.u(n.a,n.d,p.a,p.b,p.c)
p=j.gU(j)
n=i.e
h=p.gbi()
g=p.gaW()
p=p.gb4()
C.b.u(n.a,n.d,h,g,p)
p=j.gki()
g=i.f
C.b.I(g.a,g.d,p)
p=j.gkh()
g=i.r
C.b.I(g.a,g.d,p)
p=j.gcm()
g=i.x
C.b.I(g.a,g.d,p)
p=j.gcn()
g=i.y
C.b.I(g.a,g.d,p)
p=j.gco()
g=i.z
C.b.I(g.a,g.d,p);++l}}if(x.cx>0){r=this.dx.x.length
v=this.a.em
C.b.P(v.a,v.d,r)
m=a.db.gH()
for(v=this.dx.x,u=v.length,p=[z],l=0,k=0;k<v.length;v.length===u||(0,H.u)(v),++k){j=v[k]
n=this.a.cE
if(l>=n.length)return H.f(n,l)
i=n[l]
n=j.gbk()
H.i(s,"$isb",p,"$asb")
if(!C.a.b5(s,n)){n.sbb(0,s.length)
C.a.h(s,n)}n=j.gbz(j)
h=i.d
g=n.gal(n)
f=n.gam(n)
n=n.gan()
C.b.u(h.a,h.d,g,f,n)
n=j.gaI()
f=i.b
g=n.gal(n)
h=n.gam(n)
n=n.gan()
C.b.u(f.a,f.d,g,h,n)
n=j.gbj(j)
h=i.c
g=n.gal(n)
f=n.gam(n)
n=n.gan()
C.b.u(h.a,h.d,g,f,n)
n=m.eJ(j.gbz(j))
f=n.a
g=n.b
h=n.c
h=n.l(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
f=h.a
n=h.b
h=h.c
C.b.u(g.a,g.d,f,n,h)
h=j.gU(j)
n=i.f
f=h.gbi()
g=h.gaW()
h=h.gb4()
C.b.u(n.a,n.d,f,g,h)
h=j.gbk()
n=h.gbc(h)
if(!n){n=i.x
C.b.P(n.a,n.d,1)}else{n=i.r
g=h.gbc(h)
f=n.a
n=n.d
if(!g)C.b.P(f,n,0)
else C.b.P(f,n,h.gbb(h))
n=i.x
C.b.P(n.a,n.d,0)}++l}}if(x.cy>0){r=this.dx.y.length
v=this.a.en
C.b.P(v.a,v.d,r)
m=a.db.gH()
for(v=this.dx.y,u=v.length,p=[P.r],n=[z],l=0,k=0;k<v.length;v.length===u||(0,H.u)(v),++k){j=v[k]
h=this.a.cF
if(l>=h.length)return H.f(h,l)
i=h[l]
h=j.gbk()
H.i(s,"$isb",n,"$asb")
if(!C.a.b5(s,h)){h.sbb(0,s.length)
C.a.h(s,h)}e=m.n(0,j.gH())
h=j.gH()
g=$.bv
if(g==null){g=new V.U(0,0,0)
$.bv=g}g=h.bn(g)
h=i.b
f=g.gcY(g)
d=g.gcZ(g)
g=g.gd_(g)
C.b.u(h.a,h.d,f,d,g)
h=$.bv
if(h==null){h=new V.U(0,0,0)
$.bv=h}h=e.bn(h)
g=i.c
C.b.u(g.a,g.d,h.a,h.b,h.c)
h=e.eu()
g=i.d
o=new Float32Array(H.bD(H.i(new V.dX(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a4(0,!0),"$isb",p,"$asb")))
C.b.eK(g.a,g.d,!1,o)
g=j.gU(j)
h=i.e
f=g.gbi()
d=g.gaW()
g=g.gb4()
C.b.u(h.a,h.d,f,d,g)
g=j.gbk()
h=g.gbc(g)
if(!h){h=i.r
C.b.P(h.a,h.d,1)}else{h=i.f
f=g.gbc(g)
d=h.a
h=h.d
if(!f)C.b.P(d,h,0)
else C.b.P(d,h,g.gbb(g))
h=i.r
C.b.P(h.a,h.d,0)}h=j.gcm()
g=i.x
C.b.I(g.a,g.d,h)
h=j.gcn()
g=i.y
C.b.I(g.a,g.d,h)
h=j.gco()
g=i.z
C.b.I(g.a,g.d,h);++l}}if(x.db>0){r=this.dx.z.length
v=this.a.eo
C.b.P(v.a,v.d,r)
m=a.db.gH()
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.u)(v),++k){j=v[k]
p=this.a.cG
if(l>=p.length)return H.f(p,l)
i=p[l]
p=j.gbk()
H.i(s,"$isb",z,"$asb")
if(!C.a.b5(s,p)){p.sbb(0,s.length)
C.a.h(s,p)}p=j.gbh(j)
n=i.b
h=p.gcY(p)
g=p.gcZ(p)
p=p.gd_(p)
C.b.u(n.a,n.d,h,g,p)
p=j.gbz(j)
g=i.c
h=p.gal(p)
n=p.gam(p)
p=p.gan()
C.b.u(g.a,g.d,h,n,p)
p=j.gaI()
n=i.d
h=p.gal(p)
g=p.gam(p)
p=p.gan()
C.b.u(n.a,n.d,h,g,p)
p=j.gbj(j)
g=i.e
h=p.gal(p)
n=p.gam(p)
p=p.gan()
C.b.u(g.a,g.d,h,n,p)
p=m.bn(j.gbh(j))
n=i.f
C.b.u(n.a,n.d,p.a,p.b,p.c)
p=j.gbk()
n=p.gbc(p)
if(!n){p=i.x
C.b.P(p.a,p.d,1)}else{n=i.r
h=p.gbc(p)
g=n.a
n=n.d
if(!h)C.b.P(g,n,0)
else C.b.P(g,n,p.gbb(p))
p=i.x
C.b.P(p.a,p.d,0)}p=j.gU(j)
n=i.y
h=p.gbi()
g=p.gaW()
p=p.gb4()
C.b.u(n.a,n.d,h,g,p)
p=j.gkq()
g=i.z
C.b.I(g.a,g.d,p)
p=j.gkr()
g=i.Q
C.b.I(g.a,g.d,p)
p=j.gcm()
g=i.ch
C.b.I(g.a,g.d,p)
p=j.gcn()
g=i.cx
C.b.I(g.a,g.d,p)
p=j.gco()
g=i.cy
C.b.I(g.a,g.d,p);++l}}}switch(x.f){case C.c:break
case C.f:break
case C.d:this.T(s,this.Q.d)
z=this.a
v=this.Q.d
z.aj(z.e9,z.bH,v)
break
case C.e:this.T(s,this.Q.e)
z=this.a
v=this.Q.e
z.ac(z.ea,z.bH,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db.gH().eu()
a.Q=v}z=z.id
z.toString
z.a6(v.a4(0,!0))}if(x.dy){this.T(s,this.ch)
z=this.a
v=this.ch
z.ac(z.eb,z.ec,v)
switch(x.r){case C.c:break
case C.f:z=this.a
v=this.cx.f
z=z.bI
z.toString
u=v.a
p=v.b
v=v.c
C.b.u(z.a,z.d,u,p,v)
break
case C.d:this.T(s,this.cx.d)
z=this.a
v=this.cx.d
z.aj(z.ed,z.bJ,v)
v=this.a
z=this.cx.f
v=v.bI
v.toString
u=z.a
p=z.b
z=z.c
C.b.u(v.a,v.d,u,p,z)
break
case C.e:this.T(s,this.cx.e)
z=this.a
v=this.cx.e
z.ac(z.ee,z.bJ,v)
v=this.a
z=this.cx.f
v=v.bI
v.toString
u=z.a
p=z.b
z=z.c
C.b.u(v.a,v.d,u,p,z)
break}switch(x.x){case C.c:break
case C.f:z=this.a
v=this.cy.f
z=z.bL
z.toString
u=v.a
p=v.b
v=v.c
C.b.u(z.a,z.d,u,p,v)
v=this.a
p=this.cy.ch
v=v.bK
C.b.I(v.a,v.d,p)
break
case C.d:this.T(s,this.cy.d)
z=this.a
v=this.cy.d
z.aj(z.ef,z.bM,v)
v=this.a
z=this.cy.f
v=v.bL
v.toString
u=z.a
p=z.b
z=z.c
C.b.u(v.a,v.d,u,p,z)
z=this.a
p=this.cy.ch
z=z.bK
C.b.I(z.a,z.d,p)
break
case C.e:this.T(s,this.cy.e)
z=this.a
v=this.cy.e
z.ac(z.eg,z.bM,v)
v=this.a
z=this.cy.f
v=v.bL
v.toString
u=z.a
p=z.b
z=z.c
C.b.u(v.a,v.d,u,p,z)
z=this.a
p=this.cy.ch
z=z.bK
C.b.I(z.a,z.d,p)
break}}z=x.y
v=z!==C.c
if(v){switch(z){case C.c:break
case C.f:z=this.a
u=this.db.f
z=z.bN
C.b.I(z.a,z.d,u)
break
case C.d:this.T(s,this.db.d)
z=this.a
u=this.db.d
z.aj(z.eh,z.bO,u)
u=this.a
z=this.db.f
u=u.bN
C.b.I(u.a,u.d,z)
break
case C.e:this.T(s,this.db.e)
z=this.a
u=this.db.e
z.ac(z.ei,z.bO,u)
u=this.a
z=this.db.f
u=u.bN
C.b.I(u.a,u.d,z)
break}z=a.a
C.b.ax(z,3042)
C.b.aE(z,770,771)}for(q=0;q<s.length;++q)s[q].au(a)
z=H.d(b.e,"$isbK")
z.au(a)
z.ap(a)
z.cV(a)
if(v)C.b.cA(a.a,3042)
for(q=0;q<s.length;++q)s[q].cV(a)
z=this.a
z.toString
C.b.cW(a.a,null)
z.x.e1()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dt().ao},
m:{
b4:function(){var z,y,x
z=new O.hD()
z.sft(O.cy(V.ab))
z.e.aX(z.gh3(),z.gh4())
y=new O.b5(z,"emission")
y.c=C.c
y.f=new V.X(0,0,0)
z.f=y
y=new O.b5(z,"ambient")
y.c=C.c
y.f=new V.X(0,0,0)
z.r=y
y=new O.b5(z,"diffuse")
y.c=C.c
y.f=new V.X(0,0,0)
z.x=y
y=new O.b5(z,"invDiffuse")
y.c=C.c
y.f=new V.X(0,0,0)
z.y=y
y=new O.hI(z,"specular")
y.c=C.c
y.f=new V.X(0,0,0)
y.ch=100
z.z=y
y=new O.hF(z,"bump")
y.c=C.c
z.Q=y
z.ch=null
y=new O.b5(z,"reflect")
y.c=C.c
y.f=new V.X(0,0,0)
z.cx=y
y=new O.hH(z,"refract")
y.c=C.c
y.f=new V.X(0,0,0)
y.ch=1
z.cy=y
y=new O.hE(z,"alpha")
y.c=C.c
y.f=1
z.db=y
y=new D.hn()
y.bp(D.a_)
y.sfd(H.c([],[D.dG]))
y.sfe(H.c([],[D.e2]))
y.sff(H.c([],[D.ec]))
y.sfg(H.c([],[D.ei]))
y.sfh(H.c([],[D.ej]))
y.sfi(H.c([],[D.ek]))
y.Q=null
y.ch=null
y.d3(y.gh2(),y.ghl(),y.ghn())
z.dx=y
x=y.Q
if(x==null){x=D.I()
y.Q=x
y=x}else y=x
y.h(0,z.ghB())
y=z.dx
x=y.ch
if(x==null){x=D.I()
y.ch=x
y=x}else y=x
y.h(0,z.gfl())
z.dy=null
return z}}},hE:{"^":"cI;0f,a,b,0c,0d,0e",
cd:function(a){var z,y
z=this.f
if(!$.n.$2(z,a)){y=this.f
this.f=a
z=new D.B(this.b,y,a,this,[P.r])
z.b=!0
this.a.W(z)}},
b_:function(){this.da()
this.cd(1)},
sbR:function(a,b){var z
if(b<=0)this.iB(0)
else if(this.c===C.c){this.c=C.f
this.dc()
this.cd(1)
z=this.a
z.a=null
z.W(null)}this.cd(b)}},cI:{"^":"a;",
b_:["da",function(){}],
bt:["dc",function(){}],
iB:function(a){var z
if(this.c!==C.c){this.c=C.c
z=this.a
z.a=null
z.W(null)}this.b_()
this.a.W(null)}},hF:{"^":"cI;a,b,0c,0d,0e"},b5:{"^":"cI;0f,a,b,0c,0d,0e",
ce:function(a){var z,y
if(!J.A(this.f,a)){z=this.f
this.f=a
y=new D.B(this.b+".color",z,a,this,[V.X])
y.b=!0
this.a.W(y)}},
b_:["dd",function(){this.da()
this.ce(new V.X(0,0,0))}],
bt:["de",function(){this.dc()
this.ce(new V.X(1,1,1))}],
sU:function(a,b){var z
if(this.c===C.c){this.c=C.f
this.bt()
z=this.a
z.a=null
z.W(null)}this.ce(b)}},hH:{"^":"b5;0ch,0f,a,b,0c,0d,0e",
dL:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.B(this.b+".refraction",y,a,this,[P.r])
z.b=!0
this.a.W(z)}},
b_:function(){this.dd()
this.dL(1)},
bt:function(){this.de()
this.dL(1)}},hI:{"^":"b5;0ch,0f,a,b,0c,0d,0e",
dM:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.B(this.b+".shininess",y,a,this,[P.r])
z.b=!0
this.a.W(z)}},
b_:function(){this.dd()
this.dM(100)},
bt:function(){this.de()
this.dM(100)}},bx:{"^":"a;"}}],["","",,T,{"^":"",eh:{"^":"ct;"},iz:{"^":"a;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",ft:{"^":"a;",
bd:function(a){return!0},
i:function(a){return"all"},
$isbr:1},br:{"^":"a;"},dV:{"^":"a;0a",
saC:function(a){this.a=H.i(a,"$isb",[V.br],"$asb")},
bd:["f4",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.u)(z),++x)if(z[x].bd(a))return!0
return!1}],
i:["d9",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.u)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbr:1},bu:{"^":"dV;0a",
bd:function(a){return!this.f4(a)},
i:function(a){return"!["+this.d9(0)+"]"}},ie:{"^":"a;0a",
shE:function(a){this.a=H.i(a,"$isaj",[P.w,P.Y],"$asaj")},
f7:function(a){var z,y
if(a.a.length<=0)throw H.h(P.k("May not create a SetMatcher with zero characters."))
z=new H.b3(0,0,[P.w,P.Y])
for(y=new H.dS(a,a.gq(a),0,[H.ar(a,"W",0)]);y.C();)z.a2(0,y.d,!0)
this.shE(z)},
bd:function(a){return this.a.e_(a)},
i:function(a){var z=this.a
return P.cQ(new H.hq(z,[H.t(z,0)]),0,null)},
$isbr:1,
m:{
a4:function(a){var z=new V.ie()
z.f7(a)
return z}}},cO:{"^":"a;a,b,0c,0d",
shV:function(a){this.c=H.i(a,"$isb",[V.cU],"$asb")},
E:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.cU(this.a.K(0,b))
w.saC(H.c([],[V.br]))
w.c=!1
C.a.h(this.c,w)
return w},
iV:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.u)(z),++x){w=z[x]
if(w.bd(a))return w}return},
i:function(a){return this.b}},en:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.fo(this.b,"\n","\\n")
y=H.fo(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},cT:{"^":"a;a,b,0c",
shy:function(a){var z=P.z
this.c=H.i(a,"$isaj",[z,z],"$asaj")},
i:function(a){return this.b}},iD:{"^":"a;0a,0b,0c",
shN:function(a){this.a=H.i(a,"$isaj",[P.z,V.cO],"$asaj")},
shR:function(a){this.b=H.i(a,"$isaj",[P.z,V.cT],"$asaj")},
K:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.cO(this,b)
z.shV(H.c([],[V.cU]))
z.d=null
this.a.a2(0,b,z)}return z},
bl:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.cT(this,a)
y=P.z
z.shy(new H.b3(0,0,[y,y]))
this.b.a2(0,a,z)}return z},
jy:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.en])
y=this.c
x=[P.w]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.j.br(a,t)
r=y.iV(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cQ(w,0,null)
throw H.h(P.k("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cQ(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.en(o==null?p.b:o,q,t)}++t}}}},cU:{"^":"dV;b,0c,0a",
i:function(a){return this.b.b+": "+this.d9(0)}}}],["","",,X,{"^":"",dt:{"^":"a;",$isaI:1},h2:{"^":"ef;0a,0b,0c,0d,0e,0f,0r,0x",
gt:function(){var z=this.x
if(z==null){z=D.I()
this.x=z}return z},
m:{
c5:function(a,b,c,d,e,f,g){var z,y
z=new X.h2()
y=new V.D(0,0,0,1)
z.a=y
z.b=a
z.c=e
z.d=!0
z.e=g
z.f=!1
y=$.ea
if(y==null){y=V.e9(0,0,1,1)
$.ea=y}z.r=y
return z}}},hQ:{"^":"a;0a,0b,0c,0d,0e,0f",
gt:function(){var z=this.f
if(z==null){z=D.I()
this.f=z}return z},
aK:[function(a){var z
H.e(a,"$isq")
z=this.f
if(!(z==null))z.F(a)},function(){return this.aK(null)},"jE","$1","$0","gbq",0,2,0],
sV:function(a){var z,y
if(!J.A(this.b,a)){z=this.b
if(z!=null)z.gt().A(0,this.gbq())
y=this.b
this.b=a
if(a!=null)a.gt().h(0,this.gbq())
z=new D.B("mover",y,this.b,this,[U.a6])
z.b=!0
this.aK(z)}},
saH:function(a){var z,y
if(!J.A(this.a,a)){z=this.a
if(z!=null)z.gt().A(0,this.gbq())
y=this.a
this.a=a
if(a!=null)a.gt().h(0,this.gbq())
z=new D.B("premover",y,this.a,this,[U.a6])
z.b=!0
this.aK(z)}},
$isaI:1,
$isdt:1,
m:{
b7:function(a,b,c,d,e){var z,y,x
z=new X.hQ()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
z.saH(e)
z.sV(c)
y=z.c
if(!$.n.$2(y,b)){x=z.c
z.c=b
y=new D.B("fov",x,b,z,[P.r])
y.b=!0
z.aK(y)}y=z.d
if(!$.n.$2(y,d)){x=z.d
z.d=d
y=new D.B("near",x,d,z,[P.r])
y.b=!0
z.aK(y)}y=z.e
if(!$.n.$2(y,a)){x=z.e
z.e=a
y=new D.B("far",x,a,z,[P.r])
y.b=!0
z.aK(y)}return z}}},ef:{"^":"a;"}}],["","",,V,{"^":"",il:{"^":"a;0a,0b",
f8:function(a,b){var z,y,x,w,v,u,t
z=document
y=z.body
x=z.createElement("div")
x.className="scrollTop";(y&&C.r).Y(y,x)
w=z.createElement("div")
w.className="scrollPage"
C.r.Y(y,w)
v=z.createElement("div")
v.className="pageCenter"
C.k.Y(w,v)
if(a.length!==0){z.title=a
u=z.createElement("div")
u.className="pageTitle"
u.textContent=a
C.k.Y(v,u)}t=z.createElement("div")
this.a=t
C.k.Y(v,t)
this.b=null
t=W.a9
W.a0(z,"scroll",H.m(new V.ip(x),{func:1,ret:-1,args:[t]}),!1,t)},
it:function(a,b,c){var z,y,x,w
a=H.a5(C.h.iA(a,0,4))
if(c.length===0)c=P.f_(C.v,b,C.q,!1)
z=document.createElement("div")
z.className="textHeader"
z.id=c
y=z.style
x=""+(28-a*3)+"px"
y.fontSize=x
w=W.fu(null)
w.href="#"+c
w.textContent=b
C.k.Y(z,w)
C.k.Y(this.a,z)},
ck:function(a,b){return this.it(a,b,"")},
ak:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.i(a,"$isb",[P.z],"$asb")
this.hH()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.jy(C.a.j1(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.u)(x),++v){u=x[v]
switch(u.a){case"Bold":t=z.createElement("div")
t.className="boldPar"
t.textContent=u.b
C.k.Y(y,t)
break
case"Italic":t=z.createElement("div")
t.className="italicPar"
t.textContent=u.b
C.k.Y(y,t)
break
case"Code":t=z.createElement("div")
t.className="codePar"
t.textContent=u.b
C.k.Y(y,t)
break
case"Link":s=u.b
if(H.fn(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.f(r,1)
q.href=H.R(r[1])
q.textContent=H.R(r[0])
C.k.Y(y,q)}else{p=P.f_(C.v,s,C.q,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+p
q.textContent=s
C.k.Y(y,q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
C.k.Y(y,t)
break}}C.k.Y(this.a,y)},
cl:function(a){var z=W.du(null,null)
z.className="pageLargeCanvas"
z.id=a
C.k.Y(this.a,z)},
hH:function(){var z,y,x,w
if(this.b!=null)return
z=new V.iD()
y=P.z
z.shN(new H.b3(0,0,[y,V.cO]))
z.shR(new H.b3(0,0,[y,V.cT]))
z.c=null
z.c=z.K(0,"Start")
y=z.K(0,"Start").E(0,"Bold")
x=V.a4(new H.a1("*"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Bold").E(0,"Bold")
x=new V.bu()
w=[V.br]
x.saC(H.c([],w))
C.a.h(y.a,x)
y=V.a4(new H.a1("*"))
C.a.h(x.a,y)
y=z.K(0,"Bold").E(0,"BoldEnd")
x=V.a4(new H.a1("*"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Start").E(0,"Italic")
x=V.a4(new H.a1("_"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Italic").E(0,"Italic")
x=new V.bu()
x.saC(H.c([],w))
C.a.h(y.a,x)
y=V.a4(new H.a1("_"))
C.a.h(x.a,y)
y=z.K(0,"Italic").E(0,"ItalicEnd")
x=V.a4(new H.a1("_"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Start").E(0,"Code")
x=V.a4(new H.a1("`"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Code").E(0,"Code")
x=new V.bu()
x.saC(H.c([],w))
C.a.h(y.a,x)
y=V.a4(new H.a1("`"))
C.a.h(x.a,y)
y=z.K(0,"Code").E(0,"CodeEnd")
x=V.a4(new H.a1("`"))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"Start").E(0,"LinkHead")
x=V.a4(new H.a1("["))
C.a.h(y.a,x)
y.c=!0
y=z.K(0,"LinkHead").E(0,"LinkTail")
x=V.a4(new H.a1("|"))
C.a.h(y.a,x)
x=z.K(0,"LinkHead").E(0,"LinkEnd")
y=V.a4(new H.a1("]"))
C.a.h(x.a,y)
x.c=!0
x=z.K(0,"LinkHead").E(0,"LinkHead")
y=new V.bu()
y.saC(H.c([],w))
C.a.h(x.a,y)
x=V.a4(new H.a1("|]"))
C.a.h(y.a,x)
x=z.K(0,"LinkTail").E(0,"LinkEnd")
y=V.a4(new H.a1("]"))
C.a.h(x.a,y)
x.c=!0
x=z.K(0,"LinkTail").E(0,"LinkTail")
y=new V.bu()
y.saC(H.c([],w))
C.a.h(x.a,y)
x=V.a4(new H.a1("|]"))
C.a.h(y.a,x)
C.a.h(z.K(0,"Start").E(0,"Other").a,new V.ft())
x=z.K(0,"Other").E(0,"Other")
y=new V.bu()
y.saC(H.c([],w))
C.a.h(x.a,y)
x=V.a4(new H.a1("*_`["))
C.a.h(y.a,x)
x=z.K(0,"BoldEnd")
x.d=x.a.bl("Bold")
x=z.K(0,"ItalicEnd")
x.d=x.a.bl("Italic")
x=z.K(0,"CodeEnd")
x.d=x.a.bl("Code")
x=z.K(0,"LinkEnd")
x.d=x.a.bl("Link")
x=z.K(0,"Other")
x.d=x.a.bl("Other")
this.b=z},
m:{
im:function(a,b){var z=new V.il()
z.f8(a,!0)
return z}}},ip:{"^":"p:39;a",
$1:function(a){P.em(C.n,new V.io(this.a))}},io:{"^":"p:3;a",
$0:function(){var z,y,x
z=C.i.aq(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}}}],["","",,M,{"^":"",
ks:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
y=E.cR(a,!0,!0,!0,!1)
x=O.b4()
w=x.f
w.sU(0,new V.X(0.4,0.6,0.8))
v=O.b4()
w=v.f
w.sU(0,new V.X(0.8,0.6,0.4))
v.db.sbR(0,0.3)
u=O.b4()
w=u.f
w.sU(0,new V.X(0.4,0.6,0.8))
u.db.sbR(0,0.3)
t=U.H(null)
s=U.H(null)
r=E.ai(null,!0,null,"",null,null)
r.sa5(x)
w=F.av()
w.aG(F.cq(!0,2,null,2,0))
w.aG(F.fb(-1,!1,!0,0,null,36))
r.sa3(0,w)
q=E.ai(null,!0,null,"",null,null)
q.sa5(v)
q.sa3(0,F.dh(null))
w=U.aC(null)
w.h(0,U.H(V.b6(1.3,1.3,1.3,1)))
w.h(0,U.H(V.bs(-1.5707963267948966)))
w.h(0,t)
q.sV(w)
p=E.ai(null,!0,null,"",null,null)
p.sa3(0,F.dh(null))
w=U.aC(null)
w.h(0,U.H(V.a3(0,0,0.1)))
p.sV(w)
o=E.ai(null,!0,null,"",null,null)
o.sa3(0,F.dh(null))
w=U.aC(null)
w.h(0,s)
o.sV(w)
n=M.bm(null,null,null,null)
n.sbQ(0,X.c5(!1,!0,!1,null,2000,null,0))
w=X.b7(2000,1.0471975511965976,null,0.1,null)
w.saH(U.H(V.a3(-0.5,0,0)))
w.sV(U.H(V.a3(0,0,5)))
n.saF(w)
n.d.h(0,q)
n.d.h(0,r)
m=M.bm(null,null,null,null)
w=X.b7(2000,1.0471975511965976,null,0.1,null)
w.saH(U.H(V.a3(0.5,0,0)))
w.sV(U.H(V.a3(0,0,5)))
m.saF(w)
m.sa5(u)
m.d.h(0,o)
m.d.h(0,p)
z.a=0.5
z.b=!1
y.r.c.gb9().h(0,new M.kt(z))
y.r.c.gaI().h(0,new M.ku(z))
y.r.c.gbe().h(0,new M.kv(z,t,p,o,s))
y.sbT(M.cA(H.c([m,n],[M.al])))},
kw:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z={}
y=E.cR(a,!0,!0,!0,!1)
x=O.dL(!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,1)
x.sd5(!0)
x.sd4(!0)
x.se0(new V.D(0.2,0.3,0.4,0.2))
x.sdU(new V.D(0.1,0.2,0.3,0.2))
w=O.b4()
v=w.f
v.sU(0,new V.X(0.8,0.6,0.4))
w.db.sbR(0,0.3)
u=O.b4()
v=u.f
v.sU(0,new V.X(0.4,0.6,0.8))
t=U.H(null)
s=U.H(null)
r=U.aC(null)
r.h(0,U.H(V.bs(0.4)))
r.h(0,U.H(V.cK(0.4)))
q=E.ai(null,!0,null,"",null,null)
q.sa5(x)
v=F.av()
v.aG(F.fa(1,null,null,1))
v.aG(F.fh(2))
q.sa3(0,v)
q.sV(r)
p=E.ai(null,!0,null,"",null,null)
p.sa5(w)
p.sa3(0,F.cq(!1,2,null,2,0))
v=U.aC(null)
v.h(0,U.H(V.b6(1.3,1.3,1.3,1)))
v.h(0,U.H(V.bs(-1.5707963267948966)))
v.h(0,t)
v.h(0,r)
p.sV(v)
o=E.ai(null,!0,null,"",null,null)
o.sa3(0,F.cq(!0,2,null,2,0))
n=E.ai(null,!0,null,"",null,null)
n.sa3(0,F.fb(-1,!1,!0,0,null,36))
v=U.aC(null)
v.h(0,s)
n.sV(v)
m=M.bm(null,null,null,null)
m.sbQ(0,X.c5(!1,!0,!1,null,2000,null,0))
v=X.b7(2000,1.0471975511965976,null,0.1,null)
v.saH(U.H(V.a3(-0.5,0,0)))
v.sV(U.H(V.a3(0,0,5)))
m.saF(v)
m.d.h(0,p)
m.d.h(0,q)
l=M.bm(null,null,null,null)
v=X.b7(2000,1.0471975511965976,null,0.1,null)
v.saH(U.H(V.a3(0.5,0,0)))
v.sV(U.H(V.a3(0,0,5)))
l.saF(v)
l.sa5(u)
l.d.h(0,n)
l.d.h(0,o)
z.a=0.5
z.b=!1
y.r.c.gb9().h(0,new M.kx(z))
y.r.c.gaI().h(0,new M.ky(z))
y.r.c.gbe().h(0,new M.kz(z,t,o,n,s))
y.sbT(M.cA(H.c([l,m],[M.al])))},
kA:function(b1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
z={}
y=E.cR(b1,!0,!0,!0,!1)
x=O.b4()
w=x.f
w.sU(0,new V.X(0.4,0.6,0.8))
v=O.b4()
w=v.f
w.sU(0,new V.X(0.8,0.6,0.4))
v.db.sbR(0,0.3)
u=O.dL(!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,1)
u.sd5(!0)
u.sd4(!0)
u.se0(new V.D(0.2,0.3,0.4,0.2))
u.sdU(new V.D(0.1,0.2,0.3,0.2))
t=U.H(null)
s=U.H(null)
r=U.aC(null)
r.h(0,U.H(V.bs(0.4)))
r.h(0,U.H(V.cK(0.4)))
q=U.aC(null)
p=F.av()
o=p.a.X(1,-1,1)
n=p.a.X(1,1,1)
m=p.a.X(1,1,-1)
l=p.a.X(1,-1,-1)
k=p.a.X(-1,-1,1)
j=p.a.X(-1,1,1)
i=p.a.X(-1,1,-1)
h=p.a.X(-1,-1,-1)
g=p.a.X(0.5,-0.5,0.5)
f=p.a.X(0.5,0.5,0.5)
e=p.a.X(0.5,0.5,-0.5)
d=p.a.X(0.5,-0.5,-0.5)
c=p.a.X(-0.5,-0.5,0.5)
b=p.a.X(-0.5,0.5,0.5)
a=p.a.X(-0.5,0.5,-0.5)
a0=p.a.X(-0.5,-0.5,-0.5)
p.c.iu(H.c([o,n,n,m,m,l,l,o,k,j,j,i,i,h,h,k,g,f,f,e,e,d,d,g,c,b,b,a,a,a0,a0,c,o,k,n,j,m,i,l,h,g,c,f,b,e,a,d,a0,o,g,n,f,m,e,l,d,k,c,j,b,i,a,h,a0],[F.J]))
a1=E.ai(null,!0,null,"",null,null)
a1.sa5(x)
a1.sa3(0,p)
a1.sV(r)
a2=E.ai(null,!0,null,"",null,null)
a2.sa5(v)
a2.sa3(0,F.cq(!1,2,null,2,0))
w=U.aC(null)
w.h(0,U.H(V.b6(1.1,1.1,1.1,1)))
w.h(0,U.H(V.bs(-1.5707963267948966)))
w.h(0,t)
w.h(0,r)
a2.sV(w)
a3=E.ai(null,!0,null,"",null,null)
a3.sa3(0,F.fa(1,null,null,1))
a3.sV(q)
a4=E.ai(null,!0,null,"",null,null)
a4.sa3(0,F.fh(2))
w=U.aC(null)
w.h(0,s)
w.h(0,q)
a4.sV(w)
a5=M.bm(null,null,null,null)
a5.sbQ(0,X.c5(!1,!0,!1,null,2000,null,0))
w=X.b7(2000,1.0471975511965976,null,0.1,null)
w.saH(U.H(V.a3(-0.5,0,0)))
w.sV(U.H(V.a3(0,0,5)))
a5.saF(w)
a5.d.h(0,a1)
a5.d.h(0,a2)
a6=M.bm(null,null,null,null)
w=X.b7(2000,1.0471975511965976,null,0.1,null)
w.saH(U.H(V.a3(0.5,0,0)))
w.sV(U.H(V.a3(0,0,5)))
a6.saF(w)
a6.sa5(u)
a6.d.h(0,a4)
a6.d.h(0,a3)
z.a=0.5
z.b=!1
y.r.c.gb9().h(0,new M.kB(z))
y.r.c.gaI().h(0,new M.kC(z))
y.r.c.gbe().h(0,new M.kD(z,t,a3,a4,s))
z=y.r
w=new U.iW()
a7=U.cz()
a7.scX(0,!0)
a7.scK(6.283185307179586)
a7.scM(0)
a7.sa0(0,0)
a7.scL(100)
a7.sR(0)
a7.scz(0.5)
w.b=a7
a8=w.gaO()
a7.gt().h(0,a8)
a7=U.cz()
a7.scX(0,!0)
a7.scK(6.283185307179586)
a7.scM(0)
a7.sa0(0,0)
a7.scL(100)
a7.sR(0)
a7.scz(0.5)
w.c=a7
a7.gt().h(0,a8)
w.d=null
w.e=!1
w.f=!1
w.r=!1
w.x=2.5
w.y=2.5
w.z=2
w.Q=4
w.cx=!1
w.ch=!1
w.cy=0
w.db=0
w.dx=null
w.dy=0
w.fr=null
w.fx=null
a9=new X.aE(!1,!1,!1)
b0=w.d
w.d=a9
a7=[X.aE]
a8=new D.B("modifiers",b0,a9,w,a7)
a8.b=!0
w.O(a8)
a8=w.f
if(a8!==!1){w.f=!1
a8=new D.B("invertX",a8,!1,w,[P.Y])
a8.b=!0
w.O(a8)}a8=w.r
if(a8!==!0){w.r=!0
a8=new D.B("invertY",a8,!0,w,[P.Y])
a8.b=!0
w.O(a8)}w.b3(z)
q.h(0,w)
z=y.r
w=new U.iV()
a8=U.cz()
a8.scX(0,!0)
a8.scK(6.283185307179586)
a8.scM(0)
a8.sa0(0,0)
a8.scL(100)
a8.sR(0)
a8.scz(0.2)
w.b=a8
a8.gt().h(0,w.gaO())
w.c=null
w.d=!1
w.e=2.5
w.f=2
w.r=4
w.y=!1
w.x=!1
w.z=0
w.Q=null
w.ch=0
w.cx=null
w.cy=null
a9=new X.aE(!0,!1,!1)
b0=w.c
w.c=a9
a8=new D.B("modifiers",b0,a9,w,a7)
a8.b=!0
w.O(a8)
w.b3(z)
q.h(0,w)
z=y.r
w=new U.iX()
w.c=0.01
w.d=0
w.e=0
a9=new X.aE(!1,!1,!1)
w.b=a9
a7=new D.B("modifiers",null,a9,w,a7)
a7.b=!0
w.O(a7)
w.b3(z)
q.h(0,w)
y.sbT(M.cA(H.c([a6,a5],[M.al])))},
fi:function(){var z,y
z=V.im("Hypersphere",!0)
y=[P.z]
z.ak(H.c(["This is a simple example to help demonstrate why a hypersphere takes up ","so little space of the hypercube."],y))
z.ck(3,"2D: circle and square")
z.ak(H.c(["Imagine taking slices out of a circle inscribed in a square. Each slice is ","two lines, one from the circle and one from the square. When the slices ","are near the top, the line caused by the circle is small compared to the square. ","The corners of the square aren't covered by the circle."],y))
z.cl("target2D")
z.ak(H.c(["_Click and drag to move the location of the slice._"],y))
z.ck(3,"3D: sphere and cube")
z.ak(H.c(["Now imagine taking slices out of a sphere inscribed in a cube. Each slice is ","a circle inside a square. When the slice is in the middle, the circle touches ","the sides of the square. When the slice is near a side, the circle is almost a ","point but the square is still the same size. That is a lot of extra space for ","for the square not used by the circle."],y))
z.cl("target3D")
z.ak(H.c(["_Click and drag to move the location of the slice._"],y))
z.ck(3,"4D: hypersphere and hypercube")
z.ak(H.c(["Now imagine taking a slice out of a hypersphere inscribed in a hypercube. ","Each slice is a sphere and a cube (as shown in the graphics below). ","When the slice is near the edges, the sphere is a small point in the middle ","of a cube. As the slice moves down the sphere gets bigger until it touches all ","the sides of the cube, then it shrinks again. Once again, that's a lot of ","space in the cube not filled by the sphere."],y))
z.cl("target4D")
z.ak(H.c(["_The shape on the left is an artistic representation of a 4D hypercube._ ","_Click and drag on the left to move the location of the slice._","_Click and drag on the right to rotate the resulting 3D slice._"],y))
z.ak(H.c(["With each new dimension the hypersphere is small near the edges and only touching ","the sides of the hypersphere in the very middle."],y))
z.ak(H.c(["\xab[Back to Examples|../]"],y))
M.ks("target2D")
M.kw("target3D")
M.kA("target4D")},
kt:{"^":"p:1;a",
$1:function(a){H.e(a,"$isq")
this.a.b=!0}},
ku:{"^":"p:1;a",
$1:function(a){H.e(a,"$isq")
this.a.b=!1}},
kv:{"^":"p:1;a,b,c,d,e",
$1:function(a){var z,y,x,w,v,u
a=H.d(H.e(a,"$isq"),"$isaH")
z=this.a
if(!z.b)return
y=z.a
x=a.c
w=a.d.G(0,a.z)
x=new V.K(w.a,w.b).n(0,2).l(0,x.ga1()).b
if(typeof x!=="number")return H.y(x)
v=y+x
z.a=v
if(v<-0.1)v=-0.1
else if(v>1.1)v=1.1
z.a=v
this.b.sH(V.a3(0,1-2*v,0))
z=z.a
y=z<=0||z>=1
x=this.c
w=this.d
if(y){x.b=!1
w.b=!1}else{u=Math.sin(z*3.141592653589793)
this.e.sH(V.b6(u,u,u,1))
x.b=!0
w.b=!0}}},
kx:{"^":"p:1;a",
$1:function(a){H.e(a,"$isq")
this.a.b=!0}},
ky:{"^":"p:1;a",
$1:function(a){H.e(a,"$isq")
this.a.b=!1}},
kz:{"^":"p:1;a,b,c,d,e",
$1:function(a){var z,y,x,w,v,u
a=H.d(H.e(a,"$isq"),"$isaH")
z=this.a
if(!z.b)return
y=z.a
x=a.c
w=a.d.G(0,a.z)
x=new V.K(w.a,w.b).n(0,2).l(0,x.ga1()).b
if(typeof x!=="number")return H.y(x)
v=y+x
z.a=v
if(v<-0.1)v=-0.1
else if(v>1.1)v=1.1
z.a=v
this.b.sH(V.a3(0,1-2*v,0))
z=z.a
y=z<=0||z>=1
x=this.c
w=this.d
if(y){x.b=!1
w.b=!1}else{u=Math.sin(z*3.141592653589793)
this.e.sH(V.b6(u,u,u,1))
x.b=!0
w.b=!0}}},
kB:{"^":"p:1;a",
$1:function(a){H.e(a,"$isq")
this.a.b=!0}},
kC:{"^":"p:1;a",
$1:function(a){H.e(a,"$isq")
this.a.b=!1}},
kD:{"^":"p:1;a,b,c,d,e",
$1:function(a){var z,y,x,w,v,u
a=H.d(H.e(a,"$isq"),"$isaH")
z=this.a
if(!z.b)return
y=a.c
x=a.d
if(new V.O((x.a-y.a-y.c*0.5)*2,(x.b-y.b-y.d*0.5)*2).l(0,y.ga1()).a>0)return
w=z.a
x=x.G(0,a.z)
y=new V.K(x.a,x.b).n(0,2).l(0,y.ga1()).b
if(typeof y!=="number")return H.y(y)
v=w+y
z.a=v
if(v<-0.1)v=-0.1
else if(v>1.1)v=1.1
z.a=v
this.b.sH(V.a3(0,1-2*v,0))
z=z.a
y=z<=0||z>=1
x=this.c
w=this.d
if(y){x.b=!1
w.b=!1}else{u=Math.sin(z*3.141592653589793)
this.e.sH(V.b6(u,u,u,1))
x.b=!0
w.b=!0}a.b=!1}}},1]]
setupProgram(dart,0,0)
J.V=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dO.prototype
return J.hi.prototype}if(typeof a=="string")return J.cD.prototype
if(a==null)return J.dP.prototype
if(typeof a=="boolean")return J.hh.prototype
if(a.constructor==Array)return J.b2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.ck(a)}
J.cj=function(a){if(typeof a=="string")return J.cD.prototype
if(a==null)return a
if(a.constructor==Array)return J.b2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.ck(a)}
J.fd=function(a){if(a==null)return a
if(a.constructor==Array)return J.b2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.ck(a)}
J.ka=function(a){if(typeof a=="number")return J.c7.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.d4.prototype
return a}
J.bZ=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
return a}if(a instanceof P.a)return a
return J.ck(a)}
J.A=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.V(a).v(a,b)}
J.fq=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.ka(a).ar(a,b)}
J.fr=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kj(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cj(a).j(a,b)}
J.fs=function(a,b,c,d){return J.bZ(a).fo(a,b,c,d)}
J.dk=function(a,b){return J.bZ(a).Y(a,b)}
J.cr=function(a,b,c){return J.cj(a).iH(a,b,c)}
J.dl=function(a,b){return J.fd(a).ad(a,b)}
J.b_=function(a){return J.V(a).gZ(a)}
J.c_=function(a){return J.fd(a).gS(a)}
J.bJ=function(a){return J.cj(a).gq(a)}
J.af=function(a){return J.V(a).i(a)}
I.di=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.r=W.fw.prototype
C.m=W.cw.prototype
C.k=W.dH.prototype
C.B=W.h4.prototype
C.C=J.L.prototype
C.a=J.b2.prototype
C.h=J.dO.prototype
C.o=J.dP.prototype
C.i=J.c7.prototype
C.j=J.cD.prototype
C.J=J.bR.prototype
C.K=W.hN.prototype
C.w=J.hR.prototype
C.b=P.cN.prototype
C.p=J.d4.prototype
C.x=W.bA.prototype
C.y=W.jc.prototype
C.z=new P.hP()
C.A=new P.iZ()
C.l=new P.jI()
C.c=new A.c1(0,"ColorSourceType.None")
C.f=new A.c1(1,"ColorSourceType.Solid")
C.d=new A.c1(2,"ColorSourceType.Texture2D")
C.e=new A.c1(3,"ColorSourceType.TextureCube")
C.n=new P.bM(0)
C.D=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.E=function(hooks) {
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

C.F=function(getTagFallback) {
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
C.G=function() {
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
C.H=function(hooks) {
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
C.I=function(hooks) {
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
C.v=H.c(I.di([0,0,65498,45055,65535,34815,65534,18431]),[P.w])
C.q=new P.iY(!1)
$.aA=0
$.bk=null
$.dn=null
$.d8=!1
$.ff=null
$.f6=null
$.fm=null
$.ci=null
$.cm=null
$.dg=null
$.be=null
$.bE=null
$.bF=null
$.d9=!1
$.P=C.l
$.dE=null
$.dD=null
$.dC=null
$.dB=null
$.n=V.hJ()
$.dY=null
$.e3=null
$.bv=null
$.ea=null
$.eC=null
$.eF=null
$.eE=null
$.eD=null
$.eH=null
$.ha="uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n"
$.h7="precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n"
$.e1=null
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
I.$lazy(y,x,w)}})(["dA","$get$dA",function(){return H.fe("_$dart_dartClosure")},"cE","$get$cE",function(){return H.fe("_$dart_js")},"ep","$get$ep",function(){return H.aF(H.cc({
toString:function(){return"$receiver$"}}))},"eq","$get$eq",function(){return H.aF(H.cc({$method$:null,
toString:function(){return"$receiver$"}}))},"er","$get$er",function(){return H.aF(H.cc(null))},"es","$get$es",function(){return H.aF(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"ew","$get$ew",function(){return H.aF(H.cc(void 0))},"ex","$get$ex",function(){return H.aF(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eu","$get$eu",function(){return H.aF(H.ev(null))},"et","$get$et",function(){return H.aF(function(){try{null.$method$}catch(z){return z.message}}())},"ez","$get$ez",function(){return H.aF(H.ev(void 0))},"ey","$get$ey",function(){return H.aF(function(){try{(void 0).$method$}catch(z){return z.message}}())},"d6","$get$d6",function(){return P.jd()},"bG","$get$bG",function(){return[]},"eZ","$get$eZ",function(){return P.i5("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dz","$get$dz",function(){return{}},"eL","$get$eL",function(){return Z.ap(0)},"eJ","$get$eJ",function(){return Z.ap(511)},"az","$get$az",function(){return Z.ap(1)},"ay","$get$ay",function(){return Z.ap(2)},"ax","$get$ax",function(){return Z.ap(4)},"aN","$get$aN",function(){return Z.ap(8)},"aO","$get$aO",function(){return Z.ap(16)},"aV","$get$aV",function(){return Z.ap(32)},"bz","$get$bz",function(){return Z.ap(64)},"eK","$get$eK",function(){return Z.ap(96)},"bc","$get$bc",function(){return Z.ap(128)},"aM","$get$aM",function(){return Z.ap(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.q]},{func:1,ret:P.E,args:[D.q]},{func:1,ret:-1,args:[D.q]},{func:1,ret:P.E},{func:1,ret:-1},{func:1,ret:-1,args:[W.at]},{func:1,ret:P.E,args:[F.S]},{func:1,ret:-1,args:[P.w,[P.l,E.as]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.a9]},{func:1,ret:-1,args:[W.ba]},{func:1,ret:P.r},{func:1,ret:-1,args:[P.w,[P.l,U.a6]]},{func:1,args:[,]},{func:1,ret:P.E,args:[,]},{func:1,ret:-1,args:[W.bq]},{func:1,ret:-1,args:[P.w,[P.l,D.a_]]},{func:1,ret:P.E,args:[,,]},{func:1,ret:P.z,args:[P.w]},{func:1,ret:-1,args:[P.w,[P.l,M.al]]},{func:1,ret:P.E,args:[F.J]},{func:1,ret:-1,args:[P.w,[P.l,V.ab]]},{func:1,ret:P.E,args:[{func:1,ret:-1}]},{func:1,args:[,P.z]},{func:1,args:[P.z]},{func:1,ret:P.E,args:[P.ae]},{func:1,ret:P.E,args:[{func:1,ret:-1,args:[D.q]}]},{func:1,ret:W.a2,args:[W.N]},{func:1,ret:-1,args:[W.bA]},{func:1,ret:[P.aP,,],args:[,]},{func:1,ret:P.Y,args:[[P.l,D.a_]]},{func:1,ret:P.Y,args:[P.r,P.r]},{func:1,ret:P.E,args:[F.J,P.r,P.r]},{func:1,ret:P.r,args:[P.r]},{func:1,args:[W.a9]},{func:1,ret:F.ac,args:[F.ac]},{func:1,ret:F.ac,args:[F.ac],named:{color:V.D}},{func:1,ret:-1,args:[F.J,F.J]},{func:1,ret:P.E,args:[F.aa]},{func:1,ret:P.E,args:[W.a9]},{func:1,ret:P.Y,args:[W.N]},{func:1,ret:P.E,args:[,],opt:[,]}]
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
if(x==y)H.kF(d||a)
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
Isolate.de=a.de
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
if(typeof dartMainRunner==="function")dartMainRunner(M.fi,[])
else M.fi([])})})()
//# sourceMappingURL=main.dart.js.map
