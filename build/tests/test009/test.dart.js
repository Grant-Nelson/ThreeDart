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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isI)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.di"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.di"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.di(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dj=function(){}
var dart=[["","",,H,{"^":"",ln:{"^":"a;a"}}],["","",,J,{"^":"",
dp:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cm:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dn==null){H.kU()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.i(P.eR("Return interceptor for "+H.f(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cG()]
if(v!=null)return v
v=H.kZ(a)
if(v!=null)return v
if(typeof a=="function")return C.T
y=Object.getPrototypeOf(a)
if(y==null)return C.C
if(y===Object.prototype)return C.C
if(typeof w=="function"){Object.defineProperty(w,$.$get$cG(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
I:{"^":"a;",
u:function(a,b){return a===b},
gX:function(a){return H.bp(a)},
i:["eD",function(a){return"Instance of '"+H.b2(a)+"'"}],
"%":"CanvasRenderingContext2D|DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo|WebGLRenderbuffer|WebGLTexture"},
hx:{"^":"I;",
i:function(a){return String(a)},
gX:function(a){return a?519018:218159},
$isG:1},
dY:{"^":"I;",
u:function(a,b){return null==b},
i:function(a){return"null"},
gX:function(a){return 0},
$isF:1},
cH:{"^":"I;",
gX:function(a){return 0},
i:["eF",function(a){return String(a)}]},
i9:{"^":"cH;"},
bN:{"^":"cH;"},
bH:{"^":"cH;",
i:function(a){var z=a[$.$get$dK()]
if(z==null)return this.eF(a)
return"JavaScript function for "+H.f(J.ap(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbE:1},
aZ:{"^":"I;$ti",
h:function(a,b){H.x(b,H.u(a,0))
if(!!a.fixed$length)H.r(P.ag("add"))
a.push(b)},
jb:function(a,b){var z
if(!!a.fixed$length)H.r(P.ag("removeAt"))
z=a.length
if(b>=z)throw H.i(P.bM(b,null,null))
return a.splice(b,1)[0]},
R:function(a,b){var z
if(!!a.fixed$length)H.r(P.ag("remove"))
for(z=0;z<a.length;++z)if(J.M(a[z],b)){a.splice(z,1)
return!0}return!1},
a_:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.u(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.i(P.aO(a))}},
k:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.W(z,y,H.f(a[y]))
return z.join(b)},
iQ:function(a){return this.k(a,"")},
iK:function(a,b,c){var z,y,x
H.k(b,{func:1,ret:P.G,args:[H.u(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.i(P.aO(a))}throw H.i(H.c3())},
iJ:function(a,b){return this.iK(a,b,null)},
a1:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
eC:function(a,b,c){var z=a.length
if(b>z)throw H.i(P.a8(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.i(P.a8(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.u(a,0)])
return H.c(a.slice(b,c),[H.u(a,0)])},
giI:function(a){if(a.length>0)return a[0]
throw H.i(H.c3())},
gbE:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.i(H.c3())},
dm:function(a,b){var z,y
H.k(b,{func:1,ret:P.G,args:[H.u(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.i(P.aO(a))}return!1},
V:function(a,b){var z
for(z=0;z<a.length;++z)if(J.M(a[z],b))return!0
return!1},
i:function(a){return P.cF(a,"[","]")},
gN:function(a){return new J.aq(a,a.length,0,[H.u(a,0)])},
gX:function(a){return H.bp(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.r(P.ag("set length"))
if(b<0)throw H.i(P.a8(b,0,null,"newLength",null))
a.length=b},
W:function(a,b,c){H.x(c,H.u(a,0))
if(!!a.immutable$list)H.r(P.ag("indexed set"))
if(b>=a.length||b<0)throw H.i(H.bC(a,b))
a[b]=c},
$isl:1,
$isb:1,
p:{
hw:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.i(P.cv(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.i(P.a8(a,0,4294967295,"length",null))
return J.dW(new Array(a),b)},
dW:function(a,b){return J.c4(H.c(a,[b]))},
c4:function(a){H.cp(a)
a.fixed$length=Array
return a}}},
lm:{"^":"aZ;$ti"},
aq:{"^":"a;a,b,c,0d,$ti",
sd3:function(a){this.d=H.x(a,H.u(this,0))},
gF:function(){return this.d},
A:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.i(H.y(z))
x=this.c
if(x>=y){this.sd3(null)
return!1}this.sd3(z[x]);++this.c
return!0},
$isaQ:1},
bF:{"^":"I;",
dY:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.i(P.ag(""+a+".floor()"))},
ag:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.i(P.ag(""+a+".round()"))},
ec:function(a,b){var z,y
if(b>20)throw H.i(P.a8(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gX:function(a){return a&0x1FFFFFFF},
t:function(a,b){if(typeof b!=="number")throw H.i(H.aT(b))
return a*b},
ev:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
eJ:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dh(a,b)},
Z:function(a,b){return(a|0)===a?a/b|0:this.dh(a,b)},
dh:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.i(P.ag("Result of truncating division is "+H.f(z)+": "+H.f(a)+" ~/ "+b))},
bj:function(a,b){var z
if(a>0)z=this.hz(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
hz:function(a,b){return b>31?0:a>>>b},
ah:function(a,b){if(typeof b!=="number")throw H.i(H.aT(b))
return a<b},
$isw:1,
$isa9:1},
dX:{"^":"bF;",$isz:1},
hy:{"^":"bF;"},
bG:{"^":"I;",
cg:function(a,b){if(b<0)throw H.i(H.bC(a,b))
if(b>=a.length)H.r(H.bC(a,b))
return a.charCodeAt(b)},
aD:function(a,b){if(b>=a.length)throw H.i(H.bC(a,b))
return a.charCodeAt(b)},
K:function(a,b){H.C(b)
if(typeof b!=="string")throw H.i(P.cv(b,null,null))
return a+b},
eB:function(a,b,c){var z
if(c>a.length)throw H.i(P.a8(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
bJ:function(a,b){return this.eB(a,b,0)},
be:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.i(P.bM(b,null,null))
if(b>c)throw H.i(P.bM(b,null,null))
if(c>a.length)throw H.i(P.bM(c,null,null))
return a.substring(b,c)},
bd:function(a,b){return this.be(a,b,null)},
jp:function(a){return a.toLowerCase()},
t:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.i(C.G)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
j0:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.t(c,z)+a},
av:function(a,b){return this.j0(a,b," ")},
iq:function(a,b,c){if(c>a.length)throw H.i(P.a8(c,0,a.length,null,null))
return H.fC(a,b,c)},
i:function(a){return a},
gX:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gn:function(a){return a.length},
$isec:1,
$ism:1}}],["","",,H,{"^":"",
c3:function(){return new P.cS("No element")},
hv:function(){return new P.cS("Too many elements")},
o:{"^":"jf;a",
gn:function(a){return this.a.length},
l:function(a,b){return C.i.cg(this.a,b)},
$aseS:function(){return[P.z]},
$asR:function(){return[P.z]},
$asl:function(){return[P.z]},
$asb:function(){return[P.z]}},
dR:{"^":"l;"},
c6:{"^":"dR;$ti",
gN:function(a){return new H.cJ(this,this.gn(this),0,[H.Z(this,"c6",0)])},
cE:function(a,b){return this.eE(0,H.k(b,{func:1,ret:P.G,args:[H.Z(this,"c6",0)]}))}},
cJ:{"^":"a;a,b,c,0d,$ti",
saV:function(a){this.d=H.x(a,H.u(this,0))},
gF:function(){return this.d},
A:function(){var z,y,x,w
z=this.a
y=J.cl(z)
x=y.gn(z)
if(this.b!==x)throw H.i(P.aO(z))
w=this.c
if(w>=x){this.saV(null)
return!1}this.saV(y.a1(z,w));++this.c
return!0},
$isaQ:1},
hO:{"^":"l;a,b,$ti",
gN:function(a){return new H.hP(J.bf(this.a),this.b,this.$ti)},
gn:function(a){return J.aX(this.a)},
a1:function(a,b){return this.b.$1(J.ct(this.a,b))},
$asl:function(a,b){return[b]}},
hP:{"^":"aQ;0a,b,c,$ti",
saV:function(a){this.a=H.x(a,H.u(this,1))},
A:function(){var z=this.b
if(z.A()){this.saV(this.c.$1(z.gF()))
return!0}this.saV(null)
return!1},
gF:function(){return this.a},
$asaQ:function(a,b){return[b]}},
hQ:{"^":"c6;a,b,$ti",
gn:function(a){return J.aX(this.a)},
a1:function(a,b){return this.b.$1(J.ct(this.a,b))},
$asc6:function(a,b){return[b]},
$asl:function(a,b){return[b]}},
d8:{"^":"l;a,b,$ti",
gN:function(a){return new H.jA(J.bf(this.a),this.b,this.$ti)}},
jA:{"^":"aQ;a,b,$ti",
A:function(){var z,y
for(z=this.a,y=this.b;z.A();)if(y.$1(z.gF()))return!0
return!1},
gF:function(){return this.a.gF()}},
c0:{"^":"a;$ti"},
eS:{"^":"a;$ti"},
jf:{"^":"c5+eS;"}}],["","",,H,{"^":"",
be:function(a){var z,y
z=H.C(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
kN:function(a){return init.types[H.a2(a)]},
kX:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.Q(a).$isal},
f:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ap(a)
if(typeof z!=="string")throw H.i(H.aT(a))
return z},
bp:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
b2:function(a){return H.ib(a)+H.df(H.aU(a),0,null)},
ib:function(a){var z,y,x,w,v,u,t,s,r
z=J.Q(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.M||!!z.$isbN){u=C.A(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.be(w.length>1&&C.i.aD(w,0)===36?C.i.bd(w,1):w)},
eh:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
ik:function(a){var z,y,x,w
z=H.c([],[P.z])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.y)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.i(H.aT(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.bj(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.i(H.aT(w))}return H.eh(z)},
ei:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.i(H.aT(x))
if(x<0)throw H.i(H.aT(x))
if(x>65535)return H.ik(a)}return H.eh(a)},
cO:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.bj(z,10))>>>0,56320|z&1023)}throw H.i(P.a8(a,0,1114111,null,null))},
b1:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ij:function(a){var z=H.b1(a).getFullYear()+0
return z},
ih:function(a){var z=H.b1(a).getMonth()+1
return z},
ic:function(a){var z=H.b1(a).getDate()+0
return z},
id:function(a){var z=H.b1(a).getHours()+0
return z},
ig:function(a){var z=H.b1(a).getMinutes()+0
return z},
ii:function(a){var z=H.b1(a).getSeconds()+0
return z},
ie:function(a){var z=H.b1(a).getMilliseconds()+0
return z},
B:function(a){throw H.i(H.aT(a))},
h:function(a,b){if(a==null)J.aX(a)
throw H.i(H.bC(a,b))},
bC:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aM(!0,b,"index",null)
z=H.a2(J.aX(a))
if(!(b<0)){if(typeof z!=="number")return H.B(z)
y=b>=z}else y=!0
if(y)return P.aY(b,a,"index",null,z)
return P.bM(b,"index",null)},
kI:function(a,b,c){if(a>c)return new P.ca(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.ca(a,c,!0,b,"end","Invalid value")
return new P.aM(!0,b,"end",null)},
aT:function(a){return new P.aM(!0,a,null,null)},
i:function(a){var z
if(a==null)a=new P.eb()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fD})
z.name=""}else z.toString=H.fD
return z},
fD:function(){return J.ap(this.dartException)},
r:function(a){throw H.i(a)},
y:function(a){throw H.i(P.aO(a))},
aa:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lc(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.bj(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cI(H.f(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.ea(H.f(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eG()
u=$.$get$eH()
t=$.$get$eI()
s=$.$get$eJ()
r=$.$get$eN()
q=$.$get$eO()
p=$.$get$eL()
$.$get$eK()
o=$.$get$eQ()
n=$.$get$eP()
m=v.a6(y)
if(m!=null)return z.$1(H.cI(H.C(y),m))
else{m=u.a6(y)
if(m!=null){m.method="call"
return z.$1(H.cI(H.C(y),m))}else{m=t.a6(y)
if(m==null){m=s.a6(y)
if(m==null){m=r.a6(y)
if(m==null){m=q.a6(y)
if(m==null){m=p.a6(y)
if(m==null){m=s.a6(y)
if(m==null){m=o.a6(y)
if(m==null){m=n.a6(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.ea(H.C(y),m))}}return z.$1(new H.je(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.er()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aM(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.er()
return a},
bc:function(a){var z
if(a==null)return new H.ff(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.ff(a)},
kK:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.W(0,a[y],a[x])}return b},
kW:function(a,b,c,d,e,f){H.e(a,"$isbE")
switch(H.a2(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.i(P.p("Unsupported number of arguments for wrapped closure"))},
ba:function(a,b){var z
H.a2(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kW)
a.$identity=z
return z},
fU:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.Q(d).$isb){z.$reflectionInfo=d
x=H.iq(z).r}else x=d
w=e?Object.create(new H.iM().constructor.prototype):Object.create(new H.cx(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.ar
if(typeof u!=="number")return u.K()
$.ar=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.dG(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.kN,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.dz:H.cy
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.i("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.dG(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w["call*"]=q
w.$R=z.$R
w.$D=z.$D
return v},
fR:function(a,b,c,d){var z=H.cy
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dG:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fT(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fR(y,!w,z,b)
if(y===0){w=$.ar
if(typeof w!=="number")return w.K()
$.ar=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bh
if(v==null){v=H.bT("self")
$.bh=v}return new Function(w+H.f(v)+";return "+u+"."+H.f(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ar
if(typeof w!=="number")return w.K()
$.ar=w+1
t+=w
w="return function("+t+"){return this."
v=$.bh
if(v==null){v=H.bT("self")
$.bh=v}return new Function(w+H.f(v)+"."+H.f(z)+"("+t+");}")()},
fS:function(a,b,c,d){var z,y
z=H.cy
y=H.dz
switch(b?-1:a){case 0:throw H.i(H.iy("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fT:function(a,b){var z,y,x,w,v,u,t,s
z=$.bh
if(z==null){z=H.bT("self")
$.bh=z}y=$.dy
if(y==null){y=H.bT("receiver")
$.dy=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fS(w,!u,x,b)
if(w===1){z="return function(){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+");"
y=$.ar
if(typeof y!=="number")return y.K()
$.ar=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+", "+s+");"
y=$.ar
if(typeof y!=="number")return y.K()
$.ar=y+1
return new Function(z+y+"}")()},
di:function(a,b,c,d,e,f,g){return H.fU(a,b,H.a2(c),d,!!e,!!f,g)},
C:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.i(H.ao(a,"String"))},
lM:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.ao(a,"double"))},
l2:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.ao(a,"num"))},
dg:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.i(H.ao(a,"bool"))},
a2:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.i(H.ao(a,"int"))},
fA:function(a,b){throw H.i(H.ao(a,H.be(H.C(b).substring(3))))},
l4:function(a,b){throw H.i(H.fQ(a,H.be(H.C(b).substring(3))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.Q(a)[b])return a
H.fA(a,b)},
d:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.Q(a)[b]
else z=!0
if(z)return a
H.l4(a,b)},
cp:function(a){if(a==null)return a
if(!!J.Q(a).$isb)return a
throw H.i(H.ao(a,"List<dynamic>"))},
kY:function(a,b){var z
if(a==null)return a
z=J.Q(a)
if(!!z.$isb)return a
if(z[b])return a
H.fA(a,b)},
fu:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.a2(z)]
else return a.$S()}return},
bQ:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fu(J.Q(a))
if(z==null)return!1
return H.fl(z,null,b,null)},
k:function(a,b){var z,y
if(a==null)return a
if($.dc)return a
$.dc=!0
try{if(H.bQ(a,b))return a
z=H.cr(b)
y=H.ao(a,z)
throw H.i(y)}finally{$.dc=!1}},
dk:function(a,b){if(a!=null&&!H.dh(a,b))H.r(H.ao(a,H.cr(b)))
return a},
fp:function(a){var z,y
z=J.Q(a)
if(!!z.$ist){y=H.fu(z)
if(y!=null)return H.cr(y)
return"Closure"}return H.b2(a)},
l9:function(a){throw H.i(new P.fY(H.C(a)))},
fv:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
aU:function(a){if(a==null)return
return a.$ti},
lN:function(a,b,c){return H.bd(a["$as"+H.f(c)],H.aU(b))},
cn:function(a,b,c,d){var z
H.C(c)
H.a2(d)
z=H.bd(a["$as"+H.f(c)],H.aU(b))
return z==null?null:z[d]},
Z:function(a,b,c){var z
H.C(b)
H.a2(c)
z=H.bd(a["$as"+H.f(b)],H.aU(a))
return z==null?null:z[c]},
u:function(a,b){var z
H.a2(b)
z=H.aU(a)
return z==null?null:z[b]},
cr:function(a){return H.aS(a,null)},
aS:function(a,b){var z,y
H.j(b,"$isb",[P.m],"$asb")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.be(a[0].builtin$cls)+H.df(a,1,b)
if(typeof a=="function")return H.be(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a2(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.h(b,y)
return H.f(b[y])}if('func' in a)return H.ku(a,b)
if('futureOr' in a)return"FutureOr<"+H.aS("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ku:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.m]
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
if(q!=null&&q!==P.a)t+=" extends "+H.aS(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aS(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aS(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aS(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kJ(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.C(z[l])
n=n+m+H.aS(i[h],b)+(" "+H.f(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
df:function(a,b,c){var z,y,x,w,v,u
H.j(c,"$isb",[P.m],"$asb")
if(a==null)return""
z=new P.bq("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aS(u,c)}return"<"+z.i(0)+">"},
bd:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bB:function(a,b,c,d){var z,y
H.C(b)
H.cp(c)
H.C(d)
if(a==null)return!1
z=H.aU(a)
y=J.Q(a)
if(y[b]==null)return!1
return H.fs(H.bd(y[d],z),null,c,null)},
j:function(a,b,c,d){H.C(b)
H.cp(c)
H.C(d)
if(a==null)return a
if(H.bB(a,b,c,d))return a
throw H.i(H.ao(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.be(b.substring(3))+H.df(c,0,null),init.mangledGlobalNames)))},
fs:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aj(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aj(a[y],b,c[y],d))return!1
return!0},
lK:function(a,b,c){return a.apply(b,H.bd(J.Q(b)["$as"+H.f(c)],H.aU(b)))},
fx:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="F"||a===-1||a===-2||H.fx(z)}return!1},
dh:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="a"||b.builtin$cls==="F"||b===-1||b===-2||H.fx(b)
if(b==null||b===-1||b.builtin$cls==="a"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dh(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bQ(a,b)}z=J.Q(a).constructor
y=H.aU(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.aj(z,null,b,null)},
x:function(a,b){if(a!=null&&!H.dh(a,b))throw H.i(H.ao(a,H.cr(b)))
return a},
aj:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aj(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="F")return!0
if('func' in c)return H.fl(a,b,c,d)
if('func' in a)return c.builtin$cls==="bE"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aj("type" in a?a.type:null,b,x,d)
else if(H.aj(a,b,x,d))return!0
else{if(!('$is'+"bl" in y.prototype))return!1
w=y.prototype["$as"+"bl"]
v=H.bd(w,z?a.slice(1):null)
return H.aj(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fs(H.bd(r,z),b,u,d)},
fl:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.aj(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.aj(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.aj(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.aj(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.l1(m,b,l,d)},
l1:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aj(c[w],d,a[w],b))return!1}return!0},
lL:function(a,b,c){Object.defineProperty(a,H.C(b),{value:c,enumerable:false,writable:true,configurable:true})},
kZ:function(a){var z,y,x,w,v,u
z=H.C($.fw.$1(a))
y=$.ck[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.co[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.C($.fr.$2(a,z))
if(z!=null){y=$.ck[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.co[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cq(x)
$.ck[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.co[z]=x
return x}if(v==="-"){u=H.cq(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fz(a,x)
if(v==="*")throw H.i(P.eR(z))
if(init.leafTags[z]===true){u=H.cq(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fz(a,x)},
fz:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dp(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cq:function(a){return J.dp(a,!1,null,!!a.$isal)},
l0:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cq(z)
else return J.dp(z,c,null,null)},
kU:function(){if(!0===$.dn)return
$.dn=!0
H.kV()},
kV:function(){var z,y,x,w,v,u,t,s
$.ck=Object.create(null)
$.co=Object.create(null)
H.kQ()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fB.$1(v)
if(u!=null){t=H.l0(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kQ:function(){var z,y,x,w,v,u,t
z=C.Q()
z=H.b9(C.N,H.b9(C.S,H.b9(C.z,H.b9(C.z,H.b9(C.R,H.b9(C.O,H.b9(C.P(C.A),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fw=new H.kR(v)
$.fr=new H.kS(u)
$.fB=new H.kT(t)},
b9:function(a,b){return a(b)||b},
fC:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
dr:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
ip:{"^":"a;a,b,c,d,e,f,r,0x",p:{
iq:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.c4(z)
y=z[0]
x=z[1]
return new H.ip(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
j1:{"^":"a;a,b,c,d,e,f",
a6:function(a){var z,y,x
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
ay:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.m])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.j1(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cd:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eM:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
i6:{"^":"W;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
p:{
ea:function(a,b){return new H.i6(a,b==null?null:b.method)}}},
hB:{"^":"W;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.f(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.f(this.a)+")"},
p:{
cI:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hB(a,y,z?null:b.receiver)}}},
je:{"^":"W;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lc:{"^":"t:13;a",
$1:function(a){if(!!J.Q(a).$isW)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
ff:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaD:1},
t:{"^":"a;",
i:function(a){return"Closure '"+H.b2(this).trim()+"'"},
gej:function(){return this},
$isbE:1,
gej:function(){return this}},
ev:{"^":"t;"},
iM:{"^":"ev;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.be(z)+"'"}},
cx:{"^":"ev;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cx))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gX:function(a){var z,y
z=this.c
if(z==null)y=H.bp(this.a)
else y=typeof z!=="object"?J.aW(z):H.bp(z)
return(y^H.bp(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.b2(z)+"'")},
p:{
cy:function(a){return a.a},
dz:function(a){return a.c},
bT:function(a){var z,y,x,w,v
z=new H.cx("self","target","receiver","name")
y=J.c4(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
j2:{"^":"W;a",
i:function(a){return this.a},
p:{
ao:function(a,b){return new H.j2("TypeError: "+H.f(P.bY(a))+": type '"+H.fp(a)+"' is not a subtype of type '"+b+"'")}}},
fP:{"^":"W;a",
i:function(a){return this.a},
p:{
fQ:function(a,b){return new H.fP("CastError: "+H.f(P.bY(a))+": type '"+H.fp(a)+"' is not a subtype of type '"+b+"'")}}},
ix:{"^":"W;a",
i:function(a){return"RuntimeError: "+H.f(this.a)},
p:{
iy:function(a){return new H.ix(a)}}},
b_:{"^":"e3;a,0b,0c,0d,0e,0f,r,$ti",
gn:function(a){return this.a},
gau:function(){return new H.e0(this,[H.u(this,0)])},
dv:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.d0(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.d0(y,a)}else return this.iO(a)},
iO:function(a){var z=this.d
if(z==null)return!1
return this.cr(this.bT(z,J.aW(a)&0x3ffffff),a)>=0},
l:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bg(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bg(w,b)
x=y==null?null:y.b
return x}else return this.iP(b)},
iP:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bT(z,J.aW(a)&0x3ffffff)
x=this.cr(y,a)
if(x<0)return
return y[x].b},
W:function(a,b,c){var z,y,x,w,v,u
H.x(b,H.u(this,0))
H.x(c,H.u(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.c0()
this.b=z}this.cS(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c0()
this.c=y}this.cS(y,b,c)}else{x=this.d
if(x==null){x=this.c0()
this.d=x}w=J.aW(b)&0x3ffffff
v=this.bT(x,w)
if(v==null)this.c6(x,w,[this.bN(b,c)])
else{u=this.cr(v,b)
if(u>=0)v[u].b=c
else v.push(this.bN(b,c))}}},
a_:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.i(P.aO(this))
z=z.c}},
cS:function(a,b,c){var z
H.x(b,H.u(this,0))
H.x(c,H.u(this,1))
z=this.bg(a,b)
if(z==null)this.c6(a,b,this.bN(b,c))
else z.b=c},
f5:function(){this.r=this.r+1&67108863},
bN:function(a,b){var z,y
z=new H.hF(H.x(a,H.u(this,0)),H.x(b,H.u(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.f5()
return z},
cr:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.M(a[y].a,b))return y
return-1},
i:function(a){return P.e4(this)},
bg:function(a,b){return a[b]},
bT:function(a,b){return a[b]},
c6:function(a,b,c){a[b]=c},
fk:function(a,b){delete a[b]},
d0:function(a,b){return this.bg(a,b)!=null},
c0:function(){var z=Object.create(null)
this.c6(z,"<non-identifier-key>",z)
this.fk(z,"<non-identifier-key>")
return z},
$ise_:1},
hF:{"^":"a;a,b,0c,0d"},
e0:{"^":"dR;a,$ti",
gn:function(a){return this.a.a},
gN:function(a){var z,y
z=this.a
y=new H.hG(z,z.r,this.$ti)
y.c=z.e
return y}},
hG:{"^":"a;a,b,0c,0d,$ti",
scT:function(a){this.d=H.x(a,H.u(this,0))},
gF:function(){return this.d},
A:function(){var z=this.a
if(this.b!==z.r)throw H.i(P.aO(z))
else{z=this.c
if(z==null){this.scT(null)
return!1}else{this.scT(z.a)
this.c=this.c.c
return!0}}},
$isaQ:1},
kR:{"^":"t:13;a",
$1:function(a){return this.a(a)}},
kS:{"^":"t:30;a",
$2:function(a,b){return this.a(a,b)}},
kT:{"^":"t:31;a",
$1:function(a){return this.a(H.C(a))}},
hz:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isec:1,
p:{
hA:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.i(new P.hj("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
kJ:function(a){return J.dW(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
l3:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bx:function(a){return a},
bP:function(a,b,c){if(a>>>0!==a||a>=c)throw H.i(H.bC(b,a))},
kt:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.i(H.kI(a,b,c))
return b},
i1:{"^":"I;","%":";ArrayBufferView;cN|fb|fc|i0|fd|fe|bL"},
cN:{"^":"i1;",
gn:function(a){return a.length},
$isal:1,
$asal:I.dj},
i0:{"^":"fc;",
l:function(a,b){H.bP(b,a,a.length)
return a[b]},
$asc0:function(){return[P.w]},
$asR:function(){return[P.w]},
$isl:1,
$asl:function(){return[P.w]},
$isb:1,
$asb:function(){return[P.w]},
"%":"Float32Array"},
bL:{"^":"fe;",
$asc0:function(){return[P.z]},
$asR:function(){return[P.z]},
$isl:1,
$asl:function(){return[P.z]},
$isb:1,
$asb:function(){return[P.z]}},
lo:{"^":"bL;",
l:function(a,b){H.bP(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lp:{"^":"bL;",
l:function(a,b){H.bP(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lq:{"^":"bL;",
l:function(a,b){H.bP(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lr:{"^":"bL;",
gn:function(a){return a.length},
l:function(a,b){H.bP(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
fb:{"^":"cN+R;"},
fc:{"^":"fb+c0;"},
fd:{"^":"cN+R;"},
fe:{"^":"fd+c0;"}}],["","",,P,{"^":"",
jC:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kB()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.ba(new P.jE(z),1)).observe(y,{childList:true})
return new P.jD(z,y,x)}else if(self.setImmediate!=null)return P.kC()
return P.kD()},
lB:[function(a){self.scheduleImmediate(H.ba(new P.jF(H.k(a,{func:1,ret:-1})),0))},"$1","kB",4,0,8],
lC:[function(a){self.setImmediate(H.ba(new P.jG(H.k(a,{func:1,ret:-1})),0))},"$1","kC",4,0,8],
lD:[function(a){P.cW(C.q,H.k(a,{func:1,ret:-1}))},"$1","kD",4,0,8],
cW:function(a,b){var z
H.k(b,{func:1,ret:-1})
z=C.h.Z(a.a,1000)
return P.ki(z<0?0:z,b)},
eD:function(a,b){var z
H.k(b,{func:1,ret:-1,args:[P.b3]})
z=C.h.Z(a.a,1000)
return P.kj(z<0?0:z,b)},
kx:function(a,b){if(H.bQ(a,{func:1,args:[P.a,P.aD]}))return H.k(a,{func:1,ret:null,args:[P.a,P.aD]})
if(H.bQ(a,{func:1,args:[P.a]}))return H.k(a,{func:1,ret:null,args:[P.a]})
throw H.i(P.cv(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kw:function(){var z,y
for(;z=$.b8,z!=null;){$.bz=null
y=z.b
$.b8=y
if(y==null)$.by=null
z.a.$0()}},
lJ:[function(){$.dd=!0
try{P.kw()}finally{$.bz=null
$.dd=!1
if($.b8!=null)$.$get$d9().$1(P.ft())}},"$0","ft",0,0,3],
fo:function(a){var z=new P.f3(H.k(a,{func:1,ret:-1}))
if($.b8==null){$.by=z
$.b8=z
if(!$.dd)$.$get$d9().$1(P.ft())}else{$.by.b=z
$.by=z}},
kA:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
z=$.b8
if(z==null){P.fo(a)
$.bz=$.by
return}y=new P.f3(a)
x=$.bz
if(x==null){y.b=z
$.bz=y
$.b8=y}else{y.b=x.b
x.b=y
$.bz=y
if(y.b==null)$.by=y}},
l5:function(a){var z,y
z={func:1,ret:-1}
H.k(a,z)
y=$.L
if(C.l===y){P.cj(null,null,C.l,a)
return}y.toString
P.cj(null,null,y,H.k(y.cb(a),z))},
eC:function(a,b){var z,y
z={func:1,ret:-1}
H.k(b,z)
y=$.L
if(y===C.l){y.toString
return P.cW(a,b)}return P.cW(a,H.k(y.cb(b),z))},
iZ:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.b3]}
H.k(b,z)
y=$.L
if(y===C.l){y.toString
return P.eD(a,b)}x=y.dq(b,P.b3)
$.L.toString
return P.eD(a,H.k(x,z))},
ci:function(a,b,c,d,e){var z={}
z.a=d
P.kA(new P.ky(z,e))},
fm:function(a,b,c,d,e){var z,y
H.k(d,{func:1,ret:e})
y=$.L
if(y===c)return d.$0()
$.L=c
z=y
try{y=d.$0()
return y}finally{$.L=z}},
fn:function(a,b,c,d,e,f,g){var z,y
H.k(d,{func:1,ret:f,args:[g]})
H.x(e,g)
y=$.L
if(y===c)return d.$1(e)
$.L=c
z=y
try{y=d.$1(e)
return y}finally{$.L=z}},
kz:function(a,b,c,d,e,f,g,h,i){var z,y
H.k(d,{func:1,ret:g,args:[h,i]})
H.x(e,h)
H.x(f,i)
y=$.L
if(y===c)return d.$2(e,f)
$.L=c
z=y
try{y=d.$2(e,f)
return y}finally{$.L=z}},
cj:function(a,b,c,d){var z
H.k(d,{func:1,ret:-1})
z=C.l!==c
if(z)d=!(!z||!1)?c.cb(d):c.ig(d,-1)
P.fo(d)},
jE:{"^":"t:15;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
jD:{"^":"t:29;a,b,c",
$1:function(a){var z,y
this.a.a=H.k(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jF:{"^":"t:2;a",
$0:function(){this.a.$0()}},
jG:{"^":"t:2;a",
$0:function(){this.a.$0()}},
fh:{"^":"a;a,0b,c",
f3:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.ba(new P.kl(this,b),0),a)
else throw H.i(P.ag("`setTimeout()` not found."))},
f4:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.ba(new P.kk(this,a,Date.now(),b),0),a)
else throw H.i(P.ag("Periodic timer."))},
$isb3:1,
p:{
ki:function(a,b){var z=new P.fh(!0,0)
z.f3(a,b)
return z},
kj:function(a,b){var z=new P.fh(!1,0)
z.f4(a,b)
return z}}},
kl:{"^":"t:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
kk:{"^":"t:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.eJ(w,x)}z.c=y
this.d.$1(z)}},
b7:{"^":"a;0a,b,c,d,e,$ti",
iU:function(a){if(this.c!==6)return!0
return this.b.b.cC(H.k(this.d,{func:1,ret:P.G,args:[P.a]}),a.a,P.G,P.a)},
iN:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.u(this,1)}
w=this.b.b
if(H.bQ(z,{func:1,args:[P.a,P.aD]}))return H.dk(w.ji(z,a.a,a.b,null,y,P.aD),x)
else return H.dk(w.cC(H.k(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aL:{"^":"a;dg:a<,b,0hn:c<,$ti",
eb:function(a,b,c){var z,y,x,w
z=H.u(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.L
if(y!==C.l){y.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kx(b,y)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aL(0,$.L,[c])
w=b==null?1:3
this.cV(new P.b7(x,w,a,b,[z,c]))
return x},
jm:function(a,b){return this.eb(a,null,b)},
cV:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isb7")
this.c=a}else{if(z===2){y=H.e(this.c,"$isaL")
z=y.a
if(z<4){y.cV(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cj(null,null,z,H.k(new P.jO(this,a),{func:1,ret:-1}))}},
dd:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isb7")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isaL")
y=u.a
if(y<4){u.dd(a)
return}this.a=y
this.c=u.c}z.a=this.bi(a)
y=this.b
y.toString
P.cj(null,null,y,H.k(new P.jT(z,this),{func:1,ret:-1}))}},
c4:function(){var z=H.e(this.c,"$isb7")
this.c=null
return this.bi(z)},
bi:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cX:function(a){var z,y,x
z=H.u(this,0)
H.dk(a,{futureOr:1,type:z})
y=this.$ti
if(H.bB(a,"$isbl",y,"$asbl"))if(H.bB(a,"$isaL",y,null))P.f6(a,this)
else P.jP(a,this)
else{x=this.c4()
H.x(a,z)
this.a=4
this.c=a
P.bw(this,x)}},
cY:function(a,b){var z
H.e(b,"$isaD")
z=this.c4()
this.a=8
this.c=new P.ab(a,b)
P.bw(this,z)},
$isbl:1,
p:{
jP:function(a,b){var z,y,x
b.a=1
try{a.eb(new P.jQ(b),new P.jR(b),null)}catch(x){z=H.aa(x)
y=H.bc(x)
P.l5(new P.jS(b,z,y))}},
f6:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isaL")
if(z>=4){y=b.c4()
b.a=a.a
b.c=a.c
P.bw(b,y)}else{y=H.e(b.c,"$isb7")
b.a=2
b.c=a
a.dd(y)}},
bw:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isab")
y=y.b
u=v.a
t=v.b
y.toString
P.ci(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bw(z.a,b)}y=z.a
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
if(p){H.e(r,"$isab")
y=y.b
u=r.a
t=r.b
y.toString
P.ci(null,null,y,u,t)
return}o=$.L
if(o==null?q!=null:o!==q)$.L=q
else o=null
y=b.c
if(y===8)new P.jW(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jV(x,b,r).$0()}else if((y&2)!==0)new P.jU(z,x,b).$0()
if(o!=null)$.L=o
y=x.b
if(!!J.Q(y).$isbl){if(y.a>=4){n=H.e(t.c,"$isb7")
t.c=null
b=t.bi(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.f6(y,t)
return}}m=b.b
n=H.e(m.c,"$isb7")
m.c=null
b=m.bi(n)
y=x.a
u=x.b
if(!y){H.x(u,H.u(m,0))
m.a=4
m.c=u}else{H.e(u,"$isab")
m.a=8
m.c=u}z.a=m
y=m}}}},
jO:{"^":"t:2;a,b",
$0:function(){P.bw(this.a,this.b)}},
jT:{"^":"t:2;a,b",
$0:function(){P.bw(this.b,this.a.a)}},
jQ:{"^":"t:15;a",
$1:function(a){var z=this.a
z.a=0
z.cX(a)}},
jR:{"^":"t:32;a",
$2:function(a,b){this.a.cY(a,H.e(b,"$isaD"))},
$1:function(a){return this.$2(a,null)}},
jS:{"^":"t:2;a,b,c",
$0:function(){this.a.cY(this.b,this.c)}},
jW:{"^":"t:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.e9(H.k(w.d,{func:1}),null)}catch(v){y=H.aa(v)
x=H.bc(v)
if(this.d){w=H.e(this.a.a.c,"$isab").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isab")
else u.b=new P.ab(y,x)
u.a=!0
return}if(!!J.Q(z).$isbl){if(z instanceof P.aL&&z.gdg()>=4){if(z.gdg()===8){w=this.b
w.b=H.e(z.ghn(),"$isab")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.jm(new P.jX(t),null)
w.a=!1}}},
jX:{"^":"t:33;a",
$1:function(a){return this.a}},
jV:{"^":"t:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.u(x,0)
v=H.x(this.c,w)
u=H.u(x,1)
this.a.b=x.b.b.cC(H.k(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aa(t)
y=H.bc(t)
x=this.a
x.b=new P.ab(z,y)
x.a=!0}}},
jU:{"^":"t:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isab")
w=this.c
if(w.iU(z)&&w.e!=null){v=this.b
v.b=w.iN(z)
v.a=!1}}catch(u){y=H.aa(u)
x=H.bc(u)
w=H.e(this.a.a.c,"$isab")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ab(y,x)
s.a=!0}}},
f3:{"^":"a;a,0b"},
iN:{"^":"a;$ti",
gn:function(a){var z,y,x,w
z={}
y=new P.aL(0,$.L,[P.z])
z.a=0
x=H.u(this,0)
w=H.k(new P.iP(z,this),{func:1,ret:-1,args:[x]})
H.k(new P.iQ(z,y),{func:1,ret:-1})
W.Y(this.a,this.b,w,!1,x)
return y}},
iP:{"^":"t;a,b",
$1:function(a){H.x(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.u(this.b,0)]}}},
iQ:{"^":"t:2;a,b",
$0:function(){this.b.cX(this.a.a)}},
cT:{"^":"a;$ti"},
iO:{"^":"a;"},
b3:{"^":"a;"},
ab:{"^":"a;a,b",
i:function(a){return H.f(this.a)},
$isW:1},
kq:{"^":"a;",$islA:1},
ky:{"^":"t:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eb()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.i(z)
x=H.i(z)
x.stack=y.i(0)
throw x}},
k7:{"^":"kq;",
jj:function(a){var z,y,x
H.k(a,{func:1,ret:-1})
try{if(C.l===$.L){a.$0()
return}P.fm(null,null,this,a,-1)}catch(x){z=H.aa(x)
y=H.bc(x)
P.ci(null,null,this,z,H.e(y,"$isaD"))}},
jk:function(a,b,c){var z,y,x
H.k(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.l===$.L){a.$1(b)
return}P.fn(null,null,this,a,b,-1,c)}catch(x){z=H.aa(x)
y=H.bc(x)
P.ci(null,null,this,z,H.e(y,"$isaD"))}},
ig:function(a,b){return new P.k9(this,H.k(a,{func:1,ret:b}),b)},
cb:function(a){return new P.k8(this,H.k(a,{func:1,ret:-1}))},
dq:function(a,b){return new P.ka(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
e9:function(a,b){H.k(a,{func:1,ret:b})
if($.L===C.l)return a.$0()
return P.fm(null,null,this,a,b)},
cC:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.L===C.l)return a.$1(b)
return P.fn(null,null,this,a,b,c,d)},
ji:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.L===C.l)return a.$2(b,c)
return P.kz(null,null,this,a,b,c,d,e,f)}},
k9:{"^":"t;a,b,c",
$0:function(){return this.a.e9(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
k8:{"^":"t:3;a,b",
$0:function(){return this.a.jj(this.b)}},
ka:{"^":"t;a,b,c",
$1:function(a){var z=this.c
return this.a.jk(this.b,H.x(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hI:function(a,b,c){H.cp(a)
return H.j(H.kK(a,new H.b_(0,0,[b,c])),"$ise_",[b,c],"$ase_")},
hH:function(a,b){return new H.b_(0,0,[a,b])},
bJ:function(a,b,c,d){return new P.k1(0,0,[d])},
hu:function(a,b,c){var z,y
if(P.de(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bA()
C.a.h(y,a)
try{P.kv(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.et(b,H.kY(z,"$isl"),", ")+c
return y.charCodeAt(0)==0?y:y},
cF:function(a,b,c){var z,y,x
if(P.de(a))return b+"..."+c
z=new P.bq(b)
y=$.$get$bA()
C.a.h(y,a)
try{x=z
x.a=P.et(x.gaE(),a,", ")}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.a=y.gaE()+c
y=z.gaE()
return y.charCodeAt(0)==0?y:y},
de:function(a){var z,y
for(z=0;y=$.$get$bA(),z<y.length;++z)if(a===y[z])return!0
return!1},
kv:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gN(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.A())return
w=H.f(z.gF())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.A()){if(x<=5)return
if(0>=b.length)return H.h(b,-1)
v=b.pop()
if(0>=b.length)return H.h(b,-1)
u=b.pop()}else{t=z.gF();++x
if(!z.A()){if(x<=4){C.a.h(b,H.f(t))
return}v=H.f(t)
if(0>=b.length)return H.h(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gF();++x
for(;z.A();t=s,s=r){r=z.gF();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.f(t)
v=H.f(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
e1:function(a,b){var z,y,x
z=P.bJ(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.y)(a),++x)z.h(0,H.x(a[x],b))
return z},
e4:function(a){var z,y,x
z={}
if(P.de(a))return"{...}"
y=new P.bq("")
try{C.a.h($.$get$bA(),a)
x=y
x.a=x.gaE()+"{"
z.a=!0
a.a_(0,new P.hN(z,y))
z=y
z.a=z.gaE()+"}"}finally{z=$.$get$bA()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.gaE()
return z.charCodeAt(0)==0?z:z},
k1:{"^":"jY;a,0b,0c,0d,0e,0f,r,$ti",
gN:function(a){var z=new P.fa(this,this.r,this.$ti)
z.c=this.e
return z},
gn:function(a){return this.a},
V:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.e(z[b],"$isch")!=null}else{y=this.fg(b)
return y}},
fg:function(a){var z=this.d
if(z==null)return!1
return this.bR(this.d5(z,a),a)>=0},
h:function(a,b){var z,y
H.x(b,H.u(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.db()
this.b=z}return this.cU(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.db()
this.c=y}return this.cU(y,b)}else return this.f6(b)},
f6:function(a){var z,y,x
H.x(a,H.u(this,0))
z=this.d
if(z==null){z=P.db()
this.d=z}y=this.cZ(a)
x=z[y]
if(x==null)z[y]=[this.c1(a)]
else{if(this.bR(x,a)>=0)return!1
x.push(this.c1(a))}return!0},
R:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.hf(this.c,b)
else return this.hc(b)},
hc:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.d5(z,a)
x=this.bR(y,a)
if(x<0)return!1
this.di(y.splice(x,1)[0])
return!0},
cU:function(a,b){H.x(b,H.u(this,0))
if(H.e(a[b],"$isch")!=null)return!1
a[b]=this.c1(b)
return!0},
hf:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$isch")
if(z==null)return!1
this.di(z)
delete a[b]
return!0},
d7:function(){this.r=this.r+1&67108863},
c1:function(a){var z,y
z=new P.ch(H.x(a,H.u(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.d7()
return z},
di:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.d7()},
cZ:function(a){return J.aW(a)&0x3ffffff},
d5:function(a,b){return a[this.cZ(b)]},
bR:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.M(a[y].a,b))return y
return-1},
p:{
db:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
ch:{"^":"a;a,0b,0c"},
fa:{"^":"a;a,b,0c,0d,$ti",
scW:function(a){this.d=H.x(a,H.u(this,0))},
gF:function(){return this.d},
A:function(){var z=this.a
if(this.b!==z.r)throw H.i(P.aO(z))
else{z=this.c
if(z==null){this.scW(null)
return!1}else{this.scW(H.x(z.a,H.u(this,0)))
this.c=this.c.b
return!0}}},
$isaQ:1,
p:{
k2:function(a,b,c){var z=new P.fa(a,b,[c])
z.c=a.e
return z}}},
jY:{"^":"iz;"},
c5:{"^":"k3;",$isl:1,$isb:1},
R:{"^":"a;$ti",
gN:function(a){return new H.cJ(a,this.gn(a),0,[H.cn(this,a,"R",0)])},
a1:function(a,b){return this.l(a,b)},
jo:function(a,b){var z,y
z=H.c([],[H.cn(this,a,"R",0)])
C.a.sn(z,this.gn(a))
for(y=0;y<this.gn(a);++y)C.a.W(z,y,this.l(a,y))
return z},
jn:function(a){return this.jo(a,!0)},
i:function(a){return P.cF(a,"[","]")}},
e3:{"^":"c7;"},
hN:{"^":"t:17;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.f(a)
z.a=y+": "
z.a+=H.f(b)}},
c7:{"^":"a;$ti",
a_:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[H.Z(this,"c7",0),H.Z(this,"c7",1)]})
for(z=J.bf(this.gau());z.A();){y=z.gF()
b.$2(y,this.l(0,y))}},
gn:function(a){return J.aX(this.gau())},
i:function(a){return P.e4(this)},
$isac:1},
iB:{"^":"a;$ti",
al:function(a,b){var z
for(z=J.bf(H.j(b,"$isl",this.$ti,"$asl"));z.A();)this.h(0,z.gF())},
i:function(a){return P.cF(this,"{","}")},
a1:function(a,b){var z,y,x
if(b<0)H.r(P.a8(b,0,null,"index",null))
for(z=P.k2(this,this.r,H.u(this,0)),y=0;z.A();){x=z.d
if(b===y)return x;++y}throw H.i(P.aY(b,this,"index",null,y))},
$isl:1,
$iseo:1},
iz:{"^":"iB;"},
k3:{"^":"a+R;"}}],["","",,P,{"^":"",cA:{"^":"a;$ti"},bW:{"^":"iO;$ti"},ha:{"^":"cA;",
$ascA:function(){return[P.m,[P.b,P.z]]}},hs:{"^":"a;a,b,c,d,e",
i:function(a){return this.a}},hr:{"^":"bW;a",
fh:function(a,b,c){var z,y,x,w,v,u
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
default:u=null}if(u!=null){if(v==null)v=new P.bq("")
if(w>b)v.a+=C.i.be(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.fK(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asbW:function(){return[P.m,P.m]}},jl:{"^":"ha;a"},jm:{"^":"bW;",
is:function(a,b,c){var z,y,x,w
z=a.length
P.ej(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.ko(0,0,x)
if(w.ft(a,b,z)!==z)w.dj(C.i.cg(a,z-1),0)
return new Uint8Array(x.subarray(0,H.kt(0,w.b,x.length)))},
ir:function(a){return this.is(a,0,null)},
$asbW:function(){return[P.m,[P.b,P.z]]}},ko:{"^":"a;a,b,c",
dj:function(a,b){var z,y,x,w,v
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
ft:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.i.cg(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.i.aD(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dj(w,C.i.aD(a,u)))x=u}else if(w<=2047){v=this.b
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
hc:function(a){if(a instanceof H.t)return a.i(0)
return"Instance of '"+H.b2(a)+"'"},
hJ:function(a,b,c,d){var z,y
H.x(b,d)
z=J.hw(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.W(z,y,b)
return H.j(z,"$isb",[d],"$asb")},
hK:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gN(a);x.A();)C.a.h(y,H.x(x.gF(),c))
if(b)return y
return H.j(J.c4(y),"$isb",z,"$asb")},
cU:function(a,b,c){var z,y
z=P.z
H.j(a,"$isl",[z],"$asl")
if(a.constructor===Array){H.j(a,"$isaZ",[z],"$asaZ")
y=a.length
c=P.ej(b,c,y,null,null,null)
return H.ei(b>0||c<y?C.a.eC(a,b,c):a)}return P.iR(a,b,c)},
iR:function(a,b,c){var z,y,x
H.j(a,"$isl",[P.z],"$asl")
z=J.bf(a)
for(y=0;y<b;++y)if(!z.A())throw H.i(P.a8(b,0,y,null,null))
x=[]
for(;z.A();)x.push(z.gF())
return H.ei(x)},
ir:function(a,b,c){return new H.hz(a,H.hA(a,!1,!0,!1))},
fj:function(a,b,c,d){var z,y,x,w,v,u
H.j(a,"$isb",[P.z],"$asb")
if(c===C.x){z=$.$get$fi().b
z=z.test(b)}else z=!1
if(z)return b
y=C.H.ir(H.x(b,H.Z(c,"cA",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.h(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cO(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
bY:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ap(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hc(a)},
p:function(a){return new P.f5(a)},
dq:function(a){H.l3(a)},
G:{"^":"a;"},
"+bool":0,
ak:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.ak))return!1
return this.a===b.a&&!0},
gX:function(a){var z=this.a
return(z^C.h.bj(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.h_(H.ij(this))
y=P.bD(H.ih(this))
x=P.bD(H.ic(this))
w=P.bD(H.id(this))
v=P.bD(H.ig(this))
u=P.bD(H.ii(this))
t=P.h0(H.ie(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
p:{
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
bD:function(a){if(a>=10)return""+a
return"0"+a}}},
w:{"^":"a9;"},
"+double":0,
bi:{"^":"a;a",
ah:function(a,b){return C.h.ah(this.a,H.e(b,"$isbi").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.bi))return!1
return this.a===b.a},
gX:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.h6()
y=this.a
if(y<0)return"-"+new P.bi(0-y).i(0)
x=z.$1(C.h.Z(y,6e7)%60)
w=z.$1(C.h.Z(y,1e6)%60)
v=new P.h5().$1(y%1e6)
return""+C.h.Z(y,36e8)+":"+H.f(x)+":"+H.f(w)+"."+H.f(v)},
p:{
dQ:function(a,b,c,d,e,f){return new P.bi(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
h5:{"^":"t:21;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
h6:{"^":"t:21;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
W:{"^":"a;"},
eb:{"^":"W;",
i:function(a){return"Throw of null."}},
aM:{"^":"W;a,b,c,d",
gbQ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbP:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.f(z)
w=this.gbQ()+y+x
if(!this.a)return w
v=this.gbP()
u=P.bY(this.b)
return w+v+": "+H.f(u)},
p:{
cv:function(a,b,c){return new P.aM(!0,a,b,c)}}},
ca:{"^":"aM;e,f,a,b,c,d",
gbQ:function(){return"RangeError"},
gbP:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.f(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.f(z)
else if(x>z)y=": Not in range "+H.f(z)+".."+H.f(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.f(z)}return y},
p:{
bM:function(a,b,c){return new P.ca(null,null,!0,a,b,"Value not in range")},
a8:function(a,b,c,d,e){return new P.ca(b,c,!0,a,d,"Invalid value")},
ej:function(a,b,c,d,e,f){if(0>a||a>c)throw H.i(P.a8(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.i(P.a8(b,a,c,"end",f))
return b}return c}}},
ht:{"^":"aM;e,n:f>,a,b,c,d",
gbQ:function(){return"RangeError"},
gbP:function(){if(J.fE(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.f(z)},
p:{
aY:function(a,b,c,d,e){var z=H.a2(e!=null?e:J.aX(b))
return new P.ht(b,z,!0,a,c,"Index out of range")}}},
jg:{"^":"W;a",
i:function(a){return"Unsupported operation: "+this.a},
p:{
ag:function(a){return new P.jg(a)}}},
jd:{"^":"W;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
p:{
eR:function(a){return new P.jd(a)}}},
cS:{"^":"W;a",
i:function(a){return"Bad state: "+this.a},
p:{
es:function(a){return new P.cS(a)}}},
fW:{"^":"W;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.bY(z))+"."},
p:{
aO:function(a){return new P.fW(a)}}},
i7:{"^":"a;",
i:function(a){return"Out of Memory"},
$isW:1},
er:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isW:1},
fY:{"^":"W;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
f5:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
hj:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.i.be(x,0,75)+"..."
return y+"\n"+x}},
bE:{"^":"a;"},
z:{"^":"a9;"},
"+int":0,
l:{"^":"a;$ti",
cE:["eE",function(a,b){var z=H.Z(this,"l",0)
return new H.d8(this,H.k(b,{func:1,ret:P.G,args:[z]}),[z])}],
gn:function(a){var z,y
z=this.gN(this)
for(y=0;z.A();)++y
return y},
gay:function(a){var z,y
z=this.gN(this)
if(!z.A())throw H.i(H.c3())
y=z.gF()
if(z.A())throw H.i(H.hv())
return y},
a1:function(a,b){var z,y,x
if(b<0)H.r(P.a8(b,0,null,"index",null))
for(z=this.gN(this),y=0;z.A();){x=z.gF()
if(b===y)return x;++y}throw H.i(P.aY(b,this,"index",null,y))},
i:function(a){return P.hu(this,"(",")")}},
aQ:{"^":"a;$ti"},
b:{"^":"a;$ti",$isl:1},
"+List":0,
F:{"^":"a;",
gX:function(a){return P.a.prototype.gX.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a9:{"^":"a;"},
"+num":0,
a:{"^":";",
u:function(a,b){return this===b},
gX:function(a){return H.bp(this)},
i:function(a){return"Instance of '"+H.b2(this)+"'"},
toString:function(){return this.i(this)}},
aD:{"^":"a;"},
m:{"^":"a;",$isec:1},
"+String":0,
bq:{"^":"a;aE:a<",
gn:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
p:{
et:function(a,b,c){var z=J.bf(b)
if(!z.A())return a
if(c.length===0){do a+=H.f(z.gF())
while(z.A())}else{a+=H.f(z.gF())
for(;z.A();)a=a+c+H.f(z.gF())}return a}}}}],["","",,W,{"^":"",
dv:function(a){var z=document.createElement("a")
return z},
dE:function(a,b){var z=document.createElement("canvas")
return z},
h7:function(a,b,c){var z,y
z=document.body
y=(z&&C.n).ae(z,a,b,c)
y.toString
z=W.A
z=new H.d8(new W.ai(y),H.k(new W.h8(),{func:1,ret:P.G,args:[z]}),[z])
return H.e(z.gay(z),"$isN")},
h9:function(a){H.e(a,"$isbZ")
return"wheel"},
bj:function(a){var z,y,x
z="element tag unavailable"
try{y=J.fJ(a)
if(typeof y==="string")z=a.tagName}catch(x){H.aa(x)}return z},
cf:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
f9:function(a,b,c,d){var z,y
z=W.cf(W.cf(W.cf(W.cf(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fq:function(a,b){var z
H.k(a,{func:1,ret:-1,args:[b]})
z=$.L
if(z===C.l)return a
return z.dq(a,b)},
a4:{"^":"N;","%":"HTMLAudioElement|HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
fM:{"^":"a4;",
i:function(a){return String(a)},
$isfM:1,
"%":"HTMLAnchorElement"},
le:{"^":"a4;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
dx:{"^":"a4;",$isdx:1,"%":"HTMLBaseElement"},
bS:{"^":"a4;",$isbS:1,"%":"HTMLBodyElement"},
cz:{"^":"a4;",
cJ:function(a,b,c){var z=this.fu(a,b,P.kE(c,null))
return z},
fu:function(a,b,c){return a.getContext(b,c)},
$iscz:1,
"%":"HTMLCanvasElement"},
lh:{"^":"A;0n:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
lj:{"^":"jJ;0n:length=",
eq:function(a,b){var z=this.fv(a,this.fc(a,b))
return z==null?"":z},
fc:function(a,b){var z,y
z=$.$get$dJ()
y=z[b]
if(typeof y==="string")return y
y=this.hC(a,b)
z[b]=y
return y},
hC:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.h1()+b
if(z in a)return z
return b},
fv:function(a,b){return a.getPropertyValue(b)},
gcc:function(a){return a.bottom},
gb0:function(a){return a.height},
gaO:function(a){return a.left},
gb6:function(a){return a.right},
gb8:function(a){return a.top},
gba:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fX:{"^":"a;",
gaO:function(a){return this.eq(a,"left")}},
aP:{"^":"a4;",$isaP:1,"%":"HTMLDivElement"},
h2:{"^":"A;",
ia:function(a,b){return a.adoptNode(b)},
eo:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
lk:{"^":"I;",
i:function(a){return String(a)},
"%":"DOMException"},
h3:{"^":"I;",
iv:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
h4:{"^":"I;",
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
u:function(a,b){var z
if(b==null)return!1
if(!H.bB(b,"$isaC",[P.a9],"$asaC"))return!1
z=J.a1(b)
return a.left===z.gaO(b)&&a.top===z.gb8(b)&&a.width===z.gba(b)&&a.height===z.gb0(b)},
gX:function(a){return W.f9(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gcc:function(a){return a.bottom},
gb0:function(a){return a.height},
gaO:function(a){return a.left},
gb6:function(a){return a.right},
gb8:function(a){return a.top},
gba:function(a){return a.width},
$isaC:1,
$asaC:function(){return[P.a9]},
"%":";DOMRectReadOnly"},
jI:{"^":"c5;d4:a<,b",
gn:function(a){return this.b.length},
l:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.h(z,b)
return H.e(z[b],"$isN")},
h:function(a,b){J.dt(this.a,b)
return b},
gN:function(a){var z=this.jn(this)
return new J.aq(z,z.length,0,[H.u(z,0)])},
$asR:function(){return[W.N]},
$asl:function(){return[W.N]},
$asb:function(){return[W.N]}},
N:{"^":"A;0jl:tagName=",
gie:function(a){return new W.jK(a)},
gds:function(a){return new W.jI(a,a.children)},
gdt:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.ah()
if(x<0)x=-x*0
if(typeof w!=="number")return w.ah()
if(w<0)w=-w*0
return new P.aC(z,y,x,w,[P.a9])},
i:function(a){return a.localName},
ae:["bK",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dT
if(z==null){z=H.c([],[W.ax])
y=new W.e9(z)
C.a.h(z,W.f7(null))
C.a.h(z,W.fg())
$.dT=y
d=y}else d=z
z=$.dS
if(z==null){z=new W.fk(d)
$.dS=z
c=z}else{z.a=d
c=z}}if($.aA==null){z=document
y=z.implementation
y=(y&&C.I).iv(y,"")
$.aA=y
$.cD=y.createRange()
y=$.aA
y.toString
y=y.createElement("base")
H.e(y,"$isdx")
y.href=z.baseURI
z=$.aA.head;(z&&C.K).B(z,y)}z=$.aA
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.e(y,"$isbS")}z=$.aA
if(!!this.$isbS)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.aA.body;(z&&C.n).B(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.V(C.V,a.tagName)){z=$.cD;(z&&C.D).ex(z,x)
z=$.cD
w=(z&&C.D).it(z,b)}else{x.innerHTML=b
w=$.aA.createDocumentFragment()
for(z=J.a1(w);y=x.firstChild,y!=null;)z.B(w,y)}z=$.aA.body
if(x==null?z!=null:x!==z)J.du(x)
c.cL(w)
C.y.ia(document,w)
return w},function(a,b,c){return this.ae(a,b,c,null)},"iu",null,null,"gk7",5,5,null],
ez:function(a,b,c,d){a.textContent=null
this.B(a,this.ae(a,b,c,d))},
ey:function(a,b){return this.ez(a,b,null,null)},
aT:function(a,b){return a.getAttribute(b)},
hd:function(a,b){return a.removeAttribute(b)},
$isN:1,
"%":";Element"},
h8:{"^":"t:23;",
$1:function(a){return!!J.Q(H.e(a,"$isA")).$isN}},
a3:{"^":"I;",$isa3:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
bZ:{"^":"I;",
f7:function(a,b,c,d){return a.addEventListener(b,H.ba(H.k(c,{func:1,args:[W.a3]}),1),!1)},
$isbZ:1,
"%":";EventTarget"},
ll:{"^":"a4;0n:length=","%":"HTMLFormElement"},
ho:{"^":"a4;","%":"HTMLHeadElement"},
hp:{"^":"k_;",
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.aY(b,a,null,null,null))
return a[b]},
a1:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isal:1,
$asal:function(){return[W.A]},
$asR:function(){return[W.A]},
$isl:1,
$asl:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]},
$ishp:1,
$asat:function(){return[W.A]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hq:{"^":"h2;","%":"HTMLDocument"},
bm:{"^":"cZ;",$isbm:1,"%":"KeyboardEvent"},
hL:{"^":"I;",
i:function(a){return String(a)},
$ishL:1,
"%":"Location"},
am:{"^":"cZ;",$isam:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ai:{"^":"c5;a",
gay:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.i(P.es("No elements"))
if(y>1)throw H.i(P.es("More than one element"))
return z.firstChild},
al:function(a,b){var z,y,x,w,v
H.j(b,"$isl",[W.A],"$asl")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.a1(y),v=0;v<x;++v)w.B(y,z.firstChild)
return},
gN:function(a){var z=this.a.childNodes
return new W.dU(z,z.length,-1,[H.cn(C.X,z,"at",0)])},
gn:function(a){return this.a.childNodes.length},
l:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.h(z,b)
return z[b]},
$asR:function(){return[W.A]},
$asl:function(){return[W.A]},
$asb:function(){return[W.A]}},
A:{"^":"bZ;0j8:previousSibling=",
ja:function(a){var z=a.parentNode
if(z!=null)J.bR(z,a)},
i:function(a){var z=a.nodeValue
return z==null?this.eD(a):z},
B:function(a,b){return a.appendChild(b)},
he:function(a,b){return a.removeChild(b)},
$isA:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
i2:{"^":"k5;",
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.aY(b,a,null,null,null))
return a[b]},
a1:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isal:1,
$asal:function(){return[W.A]},
$asR:function(){return[W.A]},
$isl:1,
$asl:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]},
$asat:function(){return[W.A]},
"%":"NodeList|RadioNodeList"},
im:{"^":"I;",
it:function(a,b){return a.createContextualFragment(b)},
ex:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
lu:{"^":"a4;0n:length=","%":"HTMLSelectElement"},
iS:{"^":"a4;","%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
iT:{"^":"a4;",
ae:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.bK(a,b,c,d)
z=W.h7("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.ai(y).al(0,new W.ai(z))
return y},
"%":"HTMLTableElement"},
iU:{"^":"a4;",
ae:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.bK(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.o.ae(z.createElement("table"),b,c,d)
z.toString
z=new W.ai(z)
x=z.gay(z)
x.toString
z=new W.ai(x)
w=z.gay(z)
y.toString
w.toString
new W.ai(y).al(0,new W.ai(w))
return y},
"%":"HTMLTableRowElement"},
lw:{"^":"a4;",
ae:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.bK(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.o.ae(z.createElement("table"),b,c,d)
z.toString
z=new W.ai(z)
x=z.gay(z)
y.toString
x.toString
new W.ai(y).al(0,new W.ai(x))
return y},
"%":"HTMLTableSectionElement"},
ew:{"^":"a4;",$isew:1,"%":"HTMLTemplateElement"},
br:{"^":"I;",$isbr:1,"%":"Touch"},
b4:{"^":"cZ;",$isb4:1,"%":"TouchEvent"},
ly:{"^":"kn;",
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.aY(b,a,null,null,null))
return a[b]},
a1:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isal:1,
$asal:function(){return[W.br]},
$asR:function(){return[W.br]},
$isl:1,
$asl:function(){return[W.br]},
$isb:1,
$asb:function(){return[W.br]},
$asat:function(){return[W.br]},
"%":"TouchList"},
cZ:{"^":"a3;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
bv:{"^":"am;",
giB:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.i(P.ag("deltaY is not supported"))},
giA:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.i(P.ag("deltaX is not supported"))},
$isbv:1,
"%":"WheelEvent"},
jB:{"^":"bZ;",
hk:function(a,b){return a.requestAnimationFrame(H.ba(H.k(b,{func:1,ret:-1,args:[P.a9]}),1))},
fm:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
f4:{"^":"A;",$isf4:1,"%":"Attr"},
lE:{"^":"h4;",
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
u:function(a,b){var z
if(b==null)return!1
if(!H.bB(b,"$isaC",[P.a9],"$asaC"))return!1
z=J.a1(b)
return a.left===z.gaO(b)&&a.top===z.gb8(b)&&a.width===z.gba(b)&&a.height===z.gb0(b)},
gX:function(a){return W.f9(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gb0:function(a){return a.height},
gba:function(a){return a.width},
"%":"ClientRect|DOMRect"},
lI:{"^":"ks;",
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.aY(b,a,null,null,null))
return a[b]},
a1:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isal:1,
$asal:function(){return[W.A]},
$asR:function(){return[W.A]},
$isl:1,
$asl:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]},
$asat:function(){return[W.A]},
"%":"MozNamedAttrMap|NamedNodeMap"},
jH:{"^":"e3;d4:a<",
a_:function(a,b){var z,y,x,w,v,u
H.k(b,{func:1,ret:-1,args:[P.m,P.m]})
for(z=this.gau(),y=z.length,x=this.a,w=J.a1(x),v=0;v<z.length;z.length===y||(0,H.y)(z),++v){u=z[v]
b.$2(u,w.aT(x,u))}},
gau:function(){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.m])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.h(z,w)
v=H.e(z[w],"$isf4")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asc7:function(){return[P.m,P.m]},
$asac:function(){return[P.m,P.m]}},
jK:{"^":"jH;a",
l:function(a,b){return J.cu(this.a,H.C(b))},
gn:function(a){return this.gau().length}},
jL:{"^":"iN;a,b,c,$ti"},
lF:{"^":"jL;a,b,c,$ti"},
jM:{"^":"cT;a,b,c,d,e,$ti",p:{
Y:function(a,b,c,d,e){var z,y
z=W.fq(new W.jN(c),W.a3)
y=z!=null
if(y&&!0){H.k(z,{func:1,args:[W.a3]})
if(y)J.fG(a,b,z,!1)}return new W.jM(0,a,b,z,!1,[e])}}},
jN:{"^":"t:25;a",
$1:function(a){return this.a.$1(H.e(a,"$isa3"))}},
bO:{"^":"a;a",
eT:function(a){var z,y
z=$.$get$da()
if(z.a===0){for(y=0;y<262;++y)z.W(0,C.U[y],W.kO())
for(y=0;y<12;++y)z.W(0,C.u[y],W.kP())}},
aH:function(a){return $.$get$f8().V(0,W.bj(a))},
as:function(a,b,c){var z,y,x
z=W.bj(a)
y=$.$get$da()
x=y.l(0,H.f(z)+"::"+b)
if(x==null)x=y.l(0,"*::"+b)
if(x==null)return!1
return H.dg(x.$4(a,b,c,this))},
$isax:1,
p:{
f7:function(a){var z,y
z=W.dv(null)
y=window.location
z=new W.bO(new W.kb(z,y))
z.eT(a)
return z},
lG:[function(a,b,c,d){H.e(a,"$isN")
H.C(b)
H.C(c)
H.e(d,"$isbO")
return!0},"$4","kO",16,0,24],
lH:[function(a,b,c,d){var z,y,x
H.e(a,"$isN")
H.C(b)
H.C(c)
z=H.e(d,"$isbO").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","kP",16,0,24]}},
at:{"^":"a;$ti",
gN:function(a){return new W.dU(a,this.gn(a),-1,[H.cn(this,a,"at",0)])}},
e9:{"^":"a;a",
aH:function(a){return C.a.dm(this.a,new W.i4(a))},
as:function(a,b,c){return C.a.dm(this.a,new W.i3(a,b,c))},
$isax:1},
i4:{"^":"t:12;a",
$1:function(a){return H.e(a,"$isax").aH(this.a)}},
i3:{"^":"t:12;a,b,c",
$1:function(a){return H.e(a,"$isax").as(this.a,this.b,this.c)}},
kc:{"^":"a;",
f2:function(a,b,c,d){var z,y,x
this.a.al(0,c)
z=b.cE(0,new W.kd())
y=b.cE(0,new W.ke())
this.b.al(0,z)
x=this.c
x.al(0,C.W)
x.al(0,y)},
aH:function(a){return this.a.V(0,W.bj(a))},
as:["eI",function(a,b,c){var z,y
z=W.bj(a)
y=this.c
if(y.V(0,H.f(z)+"::"+b))return this.d.ib(c)
else if(y.V(0,"*::"+b))return this.d.ib(c)
else{y=this.b
if(y.V(0,H.f(z)+"::"+b))return!0
else if(y.V(0,"*::"+b))return!0
else if(y.V(0,H.f(z)+"::*"))return!0
else if(y.V(0,"*::*"))return!0}return!1}],
$isax:1},
kd:{"^":"t:11;",
$1:function(a){return!C.a.V(C.u,H.C(a))}},
ke:{"^":"t:11;",
$1:function(a){return C.a.V(C.u,H.C(a))}},
kg:{"^":"kc;e,a,b,c,d",
as:function(a,b,c){if(this.eI(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cu(a,"template")==="")return this.e.V(0,b)
return!1},
p:{
fg:function(){var z,y,x,w,v
z=P.m
y=P.e1(C.t,z)
x=H.u(C.t,0)
w=H.k(new W.kh(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.kg(y,P.bJ(null,null,null,z),P.bJ(null,null,null,z),P.bJ(null,null,null,z),null)
y.f2(null,new H.hQ(C.t,w,[x,z]),v,null)
return y}}},
kh:{"^":"t:26;",
$1:function(a){return"TEMPLATE::"+H.f(H.C(a))}},
kf:{"^":"a;",
aH:function(a){var z=J.Q(a)
if(!!z.$isen)return!1
z=!!z.$iscV
if(z&&W.bj(a)==="foreignObject")return!1
if(z)return!0
return!1},
as:function(a,b,c){if(b==="is"||C.i.bJ(b,"on"))return!1
return this.aH(a)},
$isax:1},
dU:{"^":"a;a,b,c,0d,$ti",
sd6:function(a){this.d=H.x(a,H.u(this,0))},
A:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sd6(J.fF(this.a,z))
this.c=z
return!0}this.sd6(null)
this.c=y
return!1},
gF:function(){return this.d},
$isaQ:1},
ax:{"^":"a;"},
kb:{"^":"a;a,b",$islz:1},
fk:{"^":"a;a",
cL:function(a){new W.kp(this).$2(a,null)},
aZ:function(a,b){if(b==null)J.du(a)
else J.bR(b,a)},
hp:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fH(a)
x=J.cu(y.gd4(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.aa(t)}v="element unprintable"
try{v=J.ap(a)}catch(t){H.aa(t)}try{u=W.bj(a)
this.ho(H.e(a,"$isN"),b,z,v,u,H.e(y,"$isac"),H.C(x))}catch(t){if(H.aa(t) instanceof P.aM)throw t
else{this.aZ(a,b)
window
s="Removing corrupted element "+H.f(v)
if(typeof console!="undefined")window.console.warn(s)}}},
ho:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.aZ(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aH(a)){this.aZ(a,b)
window
z="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.as(a,"is",g)){this.aZ(a,b)
window
z="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gau()
y=H.c(z.slice(0),[H.u(z,0)])
for(x=f.gau().length-1,z=f.a,w=J.a1(z);x>=0;--x){if(x>=y.length)return H.h(y,x)
v=y[x]
if(!this.a.as(a,J.fL(v),w.aT(z,v))){window
u="Removing disallowed attribute <"+H.f(e)+" "+v+'="'+H.f(w.aT(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.aT(z,v)
w.hd(z,v)}}if(!!J.Q(a).$isew)this.cL(a.content)},
$isls:1},
kp:{"^":"t:27;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.hp(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.aZ(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fI(z)}catch(w){H.aa(w)
v=H.e(z,"$isA")
if(x){u=v.parentNode
if(u!=null)J.bR(u,v)}else J.bR(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.e(y,"$isA")}}},
jJ:{"^":"I+fX;"},
jZ:{"^":"I+R;"},
k_:{"^":"jZ+at;"},
k4:{"^":"I+R;"},
k5:{"^":"k4+at;"},
km:{"^":"I+R;"},
kn:{"^":"km+at;"},
kr:{"^":"I+R;"},
ks:{"^":"kr+at;"}}],["","",,P,{"^":"",
kE:function(a,b){var z={}
a.a_(0,new P.kF(z))
return z},
dP:function(){var z=$.dO
if(z==null){z=J.cs(window.navigator.userAgent,"Opera",0)
$.dO=z}return z},
h1:function(){var z,y
z=$.dL
if(z!=null)return z
y=$.dM
if(y==null){y=J.cs(window.navigator.userAgent,"Firefox",0)
$.dM=y}if(y)z="-moz-"
else{y=$.dN
if(y==null){y=!P.dP()&&J.cs(window.navigator.userAgent,"Trident/",0)
$.dN=y}if(y)z="-ms-"
else z=P.dP()?"-o-":"-webkit-"}$.dL=z
return z},
kF:{"^":"t:17;a",
$2:function(a,b){this.a[a]=b}},
hg:{"^":"c5;a,b",
gbU:function(){var z,y,x
z=this.b
y=H.Z(z,"R",0)
x=W.N
return new H.hO(new H.d8(z,H.k(new P.hh(),{func:1,ret:P.G,args:[y]}),[y]),H.k(new P.hi(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){J.dt(this.b.a,b)},
gn:function(a){return J.aX(this.gbU().a)},
l:function(a,b){var z=this.gbU()
return z.b.$1(J.ct(z.a,b))},
gN:function(a){var z=P.hK(this.gbU(),!1,W.N)
return new J.aq(z,z.length,0,[H.u(z,0)])},
$asR:function(){return[W.N]},
$asl:function(){return[W.N]},
$asb:function(){return[W.N]}},
hh:{"^":"t:23;",
$1:function(a){return!!J.Q(H.e(a,"$isA")).$isN}},
hi:{"^":"t:28;",
$1:function(a){return H.d(H.e(a,"$isA"),"$isN")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cg:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
k0:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
k6:{"^":"a;$ti",
gb6:function(a){var z=this.a
if(typeof z!=="number")return z.K()
return H.x(z+this.c,H.u(this,0))},
gcc:function(a){var z=this.b
if(typeof z!=="number")return z.K()
return H.x(z+this.d,H.u(this,0))},
i:function(a){return"Rectangle ("+H.f(this.a)+", "+H.f(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(!H.bB(b,"$isaC",[P.a9],"$asaC"))return!1
z=this.a
y=J.a1(b)
x=y.gaO(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb8(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.K()
w=H.u(this,0)
if(H.x(z+this.c,w)===y.gb6(b)){if(typeof x!=="number")return x.K()
z=H.x(x+this.d,w)===y.gcc(b)}else z=!1}else z=!1}else z=!1
return z},
gX:function(a){var z,y,x,w,v
z=this.a
y=J.aW(z)
x=this.b
w=J.aW(x)
if(typeof z!=="number")return z.K()
v=H.u(this,0)
z=H.x(z+this.c,v)
if(typeof x!=="number")return x.K()
v=H.x(x+this.d,v)
return P.k0(P.cg(P.cg(P.cg(P.cg(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
aC:{"^":"k6;aO:a>,b8:b>,ba:c>,b0:d>,$ti"}}],["","",,P,{"^":"",en:{"^":"cV;",$isen:1,"%":"SVGScriptElement"},cV:{"^":"N;",
gds:function(a){return new P.hg(a,new W.ai(a))},
ae:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.ax])
C.a.h(z,W.f7(null))
C.a.h(z,W.fg())
C.a.h(z,new W.kf())
c=new W.fk(new W.e9(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.n).iu(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.ai(w)
u=z.gay(z)
for(z=J.a1(v);x=u.firstChild,x!=null;)z.B(v,x)
return v},
$iscV:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"}}],["","",,P,{"^":""}],["","",,P,{"^":"",fO:{"^":"I;",$isfO:1,"%":"WebGLBuffer"},hk:{"^":"I;",$ishk:1,"%":"WebGLFramebuffer"},il:{"^":"I;",$isil:1,"%":"WebGLProgram"},cP:{"^":"I;",
dn:function(a,b,c){return a.attachShader(b,c)},
am:function(a,b,c){return a.bindBuffer(b,c)},
ih:function(a,b,c){return a.bindFramebuffer(b,c)},
ii:function(a,b,c){return a.blendFunc(b,c)},
dr:function(a,b,c,d){return a.bufferData(b,c,d)},
il:function(a,b){return a.clear(b)},
im:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
io:function(a,b){return a.clearDepth(b)},
ip:function(a,b){return a.compileShader(b)},
iw:function(a,b){return a.createShader(b)},
iy:function(a,b){return a.deleteProgram(b)},
iz:function(a,b){return a.deleteShader(b)},
iC:function(a,b){return a.depthFunc(b)},
iD:function(a,b){return a.disable(b)},
dz:function(a,b){return a.disableVertexAttribArray(b)},
iF:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
ck:function(a,b){return a.enable(b)},
dC:function(a,b){return a.enableVertexAttribArray(b)},
ek:function(a,b,c){return a.getActiveAttrib(b,c)},
el:function(a,b,c){return a.getActiveUniform(b,c)},
em:function(a,b,c){return a.getAttribLocation(b,c)},
cK:function(a,b){return a.getParameter(b)},
ep:function(a,b){return a.getProgramInfoLog(b)},
bI:function(a,b,c){return a.getProgramParameter(b,c)},
er:function(a,b){return a.getShaderInfoLog(b)},
es:function(a,b,c){return a.getShaderParameter(b,c)},
eu:function(a,b,c){return a.getUniformLocation(b,c)},
iS:function(a,b){return a.linkProgram(b)},
eA:function(a,b,c){return a.shaderSource(b,c)},
J:function(a,b,c){return a.uniform1f(b,c)},
S:function(a,b,c){return a.uniform1i(b,c)},
q:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ef:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eg:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
eh:function(a,b){return a.useProgram(b)},
jq:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
jr:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$iscP:1,
"%":"WebGLRenderingContext"},iC:{"^":"I;",$isiC:1,"%":"WebGLShader"},jb:{"^":"I;",$isjb:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",U:{"^":"a;0a,0b,0c,0d,$ti",
sfC:function(a){this.a=H.j(a,"$isb",[H.Z(this,"U",0)],"$asb")},
sda:function(a){this.b=H.k(a,{func:1,ret:P.G,args:[[P.l,H.Z(this,"U",0)]]})},
sd8:function(a){this.c=H.k(a,{func:1,ret:-1,args:[P.z,[P.l,H.Z(this,"U",0)]]})},
sdc:function(a){this.d=H.k(a,{func:1,ret:-1,args:[P.z,[P.l,H.Z(this,"U",0)]]})},
bM:function(a){this.sfC(H.c([],[a]))
this.sda(null)
this.sd8(null)
this.sdc(null)},
cM:function(a,b,c){var z=H.Z(this,"U",0)
H.k(b,{func:1,ret:P.G,args:[[P.l,z]]})
z={func:1,ret:-1,args:[P.z,[P.l,z]]}
H.k(a,z)
H.k(c,z)
this.sda(b)
this.sd8(a)
this.sdc(c)},
bc:function(a,b){return this.cM(a,null,b)},
h3:function(a){var z
H.j(a,"$isl",[H.Z(this,"U",0)],"$asl")
z=this.b
if(z!=null)return z.$1(a)
return!0},
eP:function(a,b){var z
H.j(b,"$isl",[H.Z(this,"U",0)],"$asl")
z=this.c
if(z!=null)z.$2(a,b)},
gn:function(a){return this.a.length},
gN:function(a){var z=this.a
return new J.aq(z,z.length,0,[H.u(z,0)])},
a1:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.h(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.Z(this,"U",0)
H.x(b,z)
z=[z]
if(this.h3(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.eP(x,H.c([b],z))}},
$isl:1,
p:{
cB:function(a){var z=new O.U([a])
z.bM(a)
return z}}},cL:{"^":"a;0a,0b",
sbW:function(a){this.a=H.j(a,"$isb",[V.ad],"$asb")},
gn:function(a){return this.a.length},
gv:function(){var z=this.b
if(z==null){z=D.H()
this.b=z}return z},
eQ:function(a){var z=this.b
if(!(z==null))z.E(a)},
az:function(){return this.eQ(null)},
gY:function(){var z=this.a
if(z.length>0)return C.a.gbE(z)
else return V.bK()},
e7:function(a){var z=this.a
if(a==null)C.a.h(z,V.bK())
else C.a.h(z,a)
this.az()},
cz:function(){var z=this.a
if(z.length>0){z.pop()
this.az()}}}}],["","",,E,{"^":"",cw:{"^":"a;"},as:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a9:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sff:function(a,b){this.y=H.j(b,"$isU",[E.as],"$asU")},
sa9:function(a){this.z=H.e(a,"$isbk")},
scN:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gv().R(0,this.ge4())
y=this.c
if(y!=null)y.gv().h(0,this.ge4())
x=new D.K("shape",z,this.c,this,[F.ep])
x.b=!0
this.aQ(x)}},
ao:function(a){var z
for(z=this.y.a,z=new J.aq(z,z.length,0,[H.u(z,0)]);z.A();)z.d.ao(a)},
aR:function(a){var z,y
z=a.dx
C.a.h(z.a,z.gY())
z.az()
a.e8(this.f)
z=a.dy
y=(z&&C.a).gbE(z)
if(y!=null&&this.d!=null)y.je(a,this)
for(z=this.y.a,z=new J.aq(z,z.length,0,[H.u(z,0)]);z.A();)z.d.aR(a)
a.e6()
a.dx.cz()},
gv:function(){var z=this.z
if(z==null){z=D.H()
this.z=z}return z},
aQ:function(a){var z=this.z
if(!(z==null))z.E(a)},
a4:function(){return this.aQ(null)},
j_:[function(a){H.e(a,"$isv")
this.e=null
this.aQ(a)},function(){return this.j_(null)},"kd","$1","$0","ge4",0,2,0],
iY:[function(a){this.aQ(H.e(a,"$isv"))},function(){return this.iY(null)},"kb","$1","$0","ge3",0,2,0],
ka:[function(a,b){var z,y,x,w,v,u,t
H.j(b,"$isl",[E.as],"$asl")
for(z=b.length,y=this.ge3(),x={func:1,ret:-1,args:[D.v]},w=[x],v=0;v<b.length;b.length===z||(0,H.y)(b),++v){u=b[v]
if(u!=null){if(u.ga9()==null){t=new D.bk()
t.saa(null)
t.saX(null)
t.c=null
t.d=0
u.sa9(t)}t=u.ga9()
t.toString
H.k(y,x)
if(t.a==null)t.saa(H.c([],w))
t=t.a;(t&&C.a).h(t,y)}}this.a4()},"$2","giX",8,0,6],
kc:[function(a,b){var z,y
H.j(b,"$isl",[E.as],"$asl")
for(z=b.gN(b),y=this.ge3();z.A();)z.gF().gv().R(0,y)
this.a4()},"$2","giZ",8,0,6],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaB:1},is:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
shD:function(a){this.dy=H.j(a,"$isb",[O.cb],"$asb")},
shy:function(a){this.fr=H.j(a,"$isac",[P.m,A.cQ],"$asac")},
eL:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.ak(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cL()
y=[V.ad]
z.sbW(H.c([],y))
z.b=null
z.gv().h(0,new E.iu(this))
this.cy=z
z=new O.cL()
z.sbW(H.c([],y))
z.b=null
z.gv().h(0,new E.iv(this))
this.db=z
z=new O.cL()
z.sbW(H.c([],y))
z.b=null
z.gv().h(0,new E.iw(this))
this.dx=z
this.shD(H.c([],[O.cb]))
z=this.dy;(z&&C.a).h(z,null)
this.shy(new H.b_(0,0,[P.m,A.cQ]))},
gj9:function(){var z=this.z
if(z==null){z=this.cy.gY().t(0,this.db.gY())
this.z=z}return z},
e8:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gbE(z):a;(z&&C.a).h(z,y)},
e6:function(){var z=this.dy
if(z.length>1)z.pop()},
p:{
it:function(a,b){var z=new E.is(a,b)
z.eL(a,b)
return z}}},iu:{"^":"t:7;a",
$1:function(a){var z
H.e(a,"$isv")
z=this.a
z.z=null
z.ch=null}},iv:{"^":"t:7;a",
$1:function(a){var z
H.e(a,"$isv")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},iw:{"^":"t:7;a",
$1:function(a){var z
H.e(a,"$isv")
z=this.a
z.ch=null
z.cx=null}},iW:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0a9:x<,0y,0z,0Q,0ch,0cx,0cy",
sa9:function(a){this.x=H.e(a,"$isbk")},
eS:[function(a){H.e(a,"$isv")
this.jg()},function(){return this.eS(null)},"eR","$1","$0","gcQ",0,2,0],
giM:function(){var z,y,x
z=Date.now()
y=C.h.Z(P.dQ(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.ak(z,!1)
return x/y},
de:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.t()
if(typeof z!=="number")return H.B(z)
x=C.k.dY(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.t()
w=C.k.dY(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.eC(C.q,this.gjf())}},
jg:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.k(new E.iY(this),{func:1,ret:-1,args:[P.a9]})
C.F.fm(z)
C.F.hk(z,W.fq(y,P.a9))}},"$0","gjf",0,0,3],
jd:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.de()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ak(w,!1)
x.y=P.dQ(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sn(w.a,0)
w.az()
w=x.db
C.a.sn(w.a,0)
w.az()
w=x.dx
C.a.sn(w.a,0)
w.az()
w=x.dy;(w&&C.a).sn(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aR(this.e)}x=this.z
if(!(x==null))x.E(null)}catch(v){z=H.aa(v)
y=H.bc(v)
P.dq("Error: "+H.f(z))
P.dq("Stack: "+H.f(y))
throw H.i(z)}},
p:{
iX:function(a,b,c,d,e){var z,y,x,w
z=J.Q(a)
if(!!z.$iscz)return E.eB(a,!0,!0,!0,!1)
y=W.dE(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gds(a).h(0,y)
w=E.eB(y,!0,!0,!0,!1)
w.a=a
return w},
eB:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.iW()
y=P.hI(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.m,null)
x=C.p.cJ(a,"webgl",y)
x=H.e(x==null?C.p.cJ(a,"experimental-webgl",y):x,"$iscP")
if(x==null)H.r(P.p("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.it(x,a)
w=new T.iV(x)
w.b=H.a2((x&&C.b).cK(x,3379))
w.c=H.a2(C.b.cK(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.jh(a)
v=new X.hC()
v.c=new X.aw(!1,!1,!1)
v.shb(P.bJ(null,null,null,P.z))
w.b=v
v=new X.i_(w)
v.f=0
v.r=V.aR()
v.x=V.aR()
v.Q=1
v.ch=1
w.c=v
v=new X.hM(w)
v.r=0
v.x=V.aR()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.j0(w)
v.e=0
v.f=V.aR()
v.r=V.aR()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.sfn(H.c([],[[P.cT,P.a]]))
v=w.z
u=document
t=W.am
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.Y(u,"contextmenu",H.k(w.gfR(),s),!1,t))
v=w.z
r=W.a3
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.Y(a,"focus",H.k(w.gfU(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.Y(a,"blur",H.k(w.gfN(),q),!1,r))
v=w.z
p=W.bm
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.Y(u,"keyup",H.k(w.gfW(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.Y(u,"keydown",H.k(w.gfV(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.Y(a,"mousedown",H.k(w.gfZ(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Y(a,"mouseup",H.k(w.gh0(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.Y(a,"mousemove",H.k(w.gh_(),s),!1,t))
p=w.z
o=W.bv;(p&&C.a).h(p,W.Y(a,H.C(W.h9(a)),H.k(w.gh1(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.Y(u,"mousemove",H.k(w.gfS(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.Y(u,"mouseup",H.k(w.gfT(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.Y(u,"pointerlockchange",H.k(w.gh2(),q),!1,r))
r=w.z
q=W.b4
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.Y(a,"touchstart",H.k(w.gh9(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Y(a,"touchend",H.k(w.gh7(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.Y(a,"touchmove",H.k(w.gh8(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.ak(Date.now(),!1)
z.cy=0
z.de()
return z}}},iY:{"^":"t:42;a",
$1:function(a){var z
H.l2(a)
z=this.a
if(z.ch){z.ch=!1
z.jd()}}}}],["","",,Z,{"^":"",f2:{"^":"a;a,b",$islf:1,p:{
jz:function(a,b,c){var z
H.j(c,"$isb",[P.z],"$asb")
z=a.createBuffer()
C.b.am(a,b,z)
C.b.dr(a,b,new Int16Array(H.bx(c)),35044)
C.b.am(a,b,null)
return new Z.f2(b,z)}}},dA:{"^":"cw;a,b,c,d,e",
bl:function(a){var z,y,x
try{y=a.a
C.b.dC(y,this.e)
C.b.jq(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.aa(x)
y=P.p('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.f(z))
throw H.i(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.f(this.e)+"]"}},jy:{"^":"a;a",$islg:1},dB:{"^":"a;a,0b,c,d",
sfw:function(a){this.b=H.j(a,"$isb",[Z.cE],"$asb")},
aN:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bl:function(a){var z,y
z=this.a
C.b.am(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bl(a)},
ee:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.b.dz(x,z[y].e)
C.b.am(x,this.a.a,null)},
aR:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.h(w,x)
v=w[x]
w=v.c
u=w.a
C.b.am(y,u,w.b)
C.b.iF(y,v.a,v.b,5123,0)
C.b.am(y,u,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.m]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ap(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(y,", ")+"\nAttrs:   "+C.a.k(u,", ")},
$islx:1},cE:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b2(this.c)+"'")+"]"}},b5:{"^":"a;a",
gcO:function(a){var z,y
z=this.a
y=(z&$.$get$aI().a)!==0?3:0
if((z&$.$get$aH().a)!==0)y+=3
if((z&$.$get$aG().a)!==0)y+=3
if((z&$.$get$aJ().a)!==0)y+=2
if((z&$.$get$aK().a)!==0)y+=3
if((z&$.$get$bt().a)!==0)y+=3
if((z&$.$get$bu().a)!==0)y+=4
if((z&$.$get$b6().a)!==0)++y
return(z&$.$get$aF().a)!==0?y+4:y},
ic:function(a){var z,y,x
z=$.$get$aI()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aH()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aG()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aJ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aK()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bt()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bu()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b6()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aF()
if((y&z.a)!==0)if(x===a)return z
return $.$get$f1()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b5))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.m])
y=this.a
if((y&$.$get$aI().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aH().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aG().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aJ().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aK().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bt().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bu().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b6().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aF().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.k(z,"|")},
p:{
ah:function(a){return new Z.b5(a)}}}}],["","",,D,{"^":"",dF:{"^":"a;"},bk:{"^":"a;0a,0b,0c,0d",
saa:function(a){this.a=H.j(a,"$isb",[{func:1,ret:-1,args:[D.v]}],"$asb")},
saX:function(a){this.b=H.j(a,"$isb",[{func:1,ret:-1,args:[D.v]}],"$asb")},
h:function(a,b){var z={func:1,ret:-1,args:[D.v]}
H.k(b,z)
if(this.a==null)this.saa(H.c([],[z]))
z=this.a;(z&&C.a).h(z,b)},
R:function(a,b){var z,y
H.k(b,{func:1,ret:-1,args:[D.v]})
z=this.a
z=z==null?null:C.a.V(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).R(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.V(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).R(z,b)||y}return y},
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
return!0}if(!x)C.a.a_(y,new D.hd(z))
y=this.b
if(!(y==null))C.a.a_(y,new D.he(z))
z=this.b
if(!(z==null))C.a.sn(z,0)
return!0},
jh:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.E(y)}}},
ax:function(){return this.jh(!0,!1)},
p:{
H:function(){var z=new D.bk()
z.saa(null)
z.saX(null)
z.c=null
z.d=0
return z}}},hd:{"^":"t:14;a",
$1:function(a){var z
H.k(a,{func:1,ret:-1,args:[D.v]})
z=this.a.a
z.b
a.$1(z)}},he:{"^":"t:14;a",
$1:function(a){var z
H.k(a,{func:1,ret:-1,args:[D.v]})
z=this.a.a
z.b
a.$1(z)}},v:{"^":"a;a,0b"},c1:{"^":"v;c,d,a,0b,$ti"},c2:{"^":"v;c,d,a,0b,$ti"},K:{"^":"v;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}}],["","",,X,{"^":"",dC:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dC))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}},dZ:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dZ))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}},hC:{"^":"a;0a,0b,0c,0d",
shb:function(a){this.d=H.j(a,"$iseo",[P.z],"$aseo")},
j5:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
j1:function(a){this.c=a.b
this.d.R(0,a.a)
return!1}},e2:{"^":"c9;x,y,c,d,e,a,0b"},hM:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aW:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ak(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.t()
v=b.b
u=this.ch
if(typeof v!=="number")return v.t()
t=new V.a6(y.a+x*w,y.b+v*u)
u=this.a.gaJ()
s=new X.bn(a,V.aR(),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cw:function(a,b){this.r=a.a
return!1},
b4:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.ew()
if(typeof z!=="number")return z.ei()
this.r=(z&~y)>>>0
return!1},
b3:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.aW(a,b))
return!0},
j6:function(a){var z,y,x,w,v,u,t,s
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
w=new X.cM(new V.O(v*u,t*s),y,x,new P.ak(w,!1),this)
w.b=!0
z.E(w)
return!0},
fY:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ak(Date.now(),!1)
y=this.f
x=new X.e2(c,a,this.a.gaJ(),b,z,this)
x.b=!0
y.E(x)
this.y=z
this.x=V.aR()}},aw:{"^":"a;a,b,c",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aw))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},bn:{"^":"c9;x,y,z,Q,ch,c,d,e,a,0b"},i_:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bS:function(a,b,c){var z,y,x
z=new P.ak(Date.now(),!1)
y=this.a.gaJ()
x=new X.bn(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cw:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.E(this.bS(a,b,!0))
return!0},
b4:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.ew()
if(typeof z!=="number")return z.ei()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.E(this.bS(a,b,!0))
return!0},
b3:function(a,b){var z=this.d
if(z==null)return!1
z.E(this.bS(a,b,!1))
return!0},
j7:function(a,b){var z,y,x,w,v,u,t
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
x=new X.cM(new V.O(w*v,u*t),y,b,new P.ak(x,!1),this)
x.b=!0
z.E(x)
return!0},
gdB:function(){var z=this.b
if(z==null){z=D.H()
this.b=z}return z},
gbH:function(){var z=this.c
if(z==null){z=D.H()
this.c=z}return z},
ge1:function(){var z=this.d
if(z==null){z=D.H()
this.d=z}return z}},cM:{"^":"c9;x,c,d,e,a,0b"},c9:{"^":"v;"},eF:{"^":"c9;x,y,z,Q,ch,c,d,e,a,0b"},j0:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
aW:function(a,b){var z,y,x,w
H.j(a,"$isb",[V.a6],"$asb")
z=new P.ak(Date.now(),!1)
y=a.length>0?a[0]:V.aR()
x=this.a.gaJ()
w=new X.eF(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
j4:function(a){var z
H.j(a,"$isb",[V.a6],"$asb")
z=this.b
if(z==null)return!1
z.E(this.aW(a,!0))
return!0},
j2:function(a){var z
H.j(a,"$isb",[V.a6],"$asb")
z=this.c
if(z==null)return!1
z.E(this.aW(a,!0))
return!0},
j3:function(a){var z
H.j(a,"$isb",[V.a6],"$asb")
z=this.d
if(z==null)return!1
z.E(this.aW(a,!1))
return!0}},jh:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
sfn:function(a){this.z=H.j(a,"$isb",[[P.cT,P.a]],"$asb")},
gaJ:function(){var z=this.a
return V.el(0,0,C.p.gdt(z).c,C.p.gdt(z).d)},
d1:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dZ(z,new X.aw(y,a.altKey,a.shiftKey))},
aG:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aw(y,a.altKey,a.shiftKey)},
c7:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aw(y,a.altKey,a.shiftKey)},
ar:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.G()
v=z.top
if(typeof x!=="number")return x.G()
return new V.a6(y-w,x-v)},
aY:function(a){return new V.O(a.movementX,a.movementY)},
c3:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.a6])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v){u=x[v]
t=C.k.ag(u.pageX)
C.k.ag(u.pageY)
s=z.left
C.k.ag(u.pageX)
C.a.h(y,new V.a6(t-s,C.k.ag(u.pageY)-z.top))}return y},
ap:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dC(z,new X.aw(y,a.altKey,a.shiftKey))},
bX:function(a){var z,y,x,w,v,u
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
jK:[function(a){this.f=!0},"$1","gfU",4,0,9],
jD:[function(a){this.f=!1},"$1","gfN",4,0,9],
jH:[function(a){H.e(a,"$isam")
if(this.f&&this.bX(a))a.preventDefault()},"$1","gfR",4,0,4],
jM:[function(a){var z
H.e(a,"$isbm")
if(!this.f)return
z=this.d1(a)
this.b.j5(z)},"$1","gfW",4,0,16],
jL:[function(a){var z
H.e(a,"$isbm")
if(!this.f)return
z=this.d1(a)
this.b.j1(z)},"$1","gfV",4,0,16],
jO:[function(a){var z,y,x,w
H.e(a,"$isam")
z=this.a
z.focus()
this.f=!0
this.aG(a)
if(this.x){y=this.ap(a)
x=this.aY(a)
if(this.d.cw(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ap(a)
w=this.ar(a)
if(this.c.cw(y,w))a.preventDefault()},"$1","gfZ",4,0,4],
jQ:[function(a){var z,y,x
H.e(a,"$isam")
this.aG(a)
z=this.ap(a)
if(this.x){y=this.aY(a)
if(this.d.b4(z,y))a.preventDefault()
return}if(this.r)return
x=this.ar(a)
if(this.c.b4(z,x))a.preventDefault()},"$1","gh0",4,0,4],
jJ:[function(a){var z,y,x
H.e(a,"$isam")
if(!this.bX(a)){this.aG(a)
z=this.ap(a)
if(this.x){y=this.aY(a)
if(this.d.b4(z,y))a.preventDefault()
return}if(this.r)return
x=this.ar(a)
if(this.c.b4(z,x))a.preventDefault()}},"$1","gfT",4,0,4],
jP:[function(a){var z,y,x
H.e(a,"$isam")
this.aG(a)
z=this.ap(a)
if(this.x){y=this.aY(a)
if(this.d.b3(z,y))a.preventDefault()
return}if(this.r)return
x=this.ar(a)
if(this.c.b3(z,x))a.preventDefault()},"$1","gh_",4,0,4],
jI:[function(a){var z,y,x
H.e(a,"$isam")
if(!this.bX(a)){this.aG(a)
z=this.ap(a)
if(this.x){y=this.aY(a)
if(this.d.b3(z,y))a.preventDefault()
return}if(this.r)return
x=this.ar(a)
if(this.c.b3(z,x))a.preventDefault()}},"$1","gfS",4,0,4],
jR:[function(a){var z,y
H.e(a,"$isbv")
this.aG(a)
z=new V.O((a&&C.E).giA(a),C.E.giB(a)).w(0,180)
if(this.x){if(this.d.j6(z))a.preventDefault()
return}if(this.r)return
y=this.ar(a)
if(this.c.j7(z,y))a.preventDefault()},"$1","gh1",4,0,34],
jS:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.ap(this.y)
x=this.ar(this.y)
this.d.fY(y,x,z)}},"$1","gh2",4,0,9],
jY:[function(a){var z
H.e(a,"$isb4")
this.a.focus()
this.f=!0
this.c7(a)
z=this.c3(a)
if(this.e.j4(z))a.preventDefault()},"$1","gh9",4,0,10],
jW:[function(a){var z
H.e(a,"$isb4")
this.c7(a)
z=this.c3(a)
if(this.e.j2(z))a.preventDefault()},"$1","gh7",4,0,10],
jX:[function(a){var z
H.e(a,"$isb4")
this.c7(a)
z=this.c3(a)
if(this.e.j3(z))a.preventDefault()},"$1","gh8",4,0,10]}}],["","",,D,{"^":"",bX:{"^":"a;0a,0b,0c,0d",
gv:function(){var z=this.d
if(z==null){z=D.H()
this.d=z}return z},
aA:[function(a){var z
H.e(a,"$isv")
z=this.d
if(!(z==null))z.E(a)},function(){return this.aA(null)},"jt","$1","$0","geV",0,2,0],
$isX:1,
$isaB:1},X:{"^":"a;",$isaB:1},hD:{"^":"U;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
sfl:function(a){this.e=H.j(a,"$isb",[D.bX],"$asb")},
sha:function(a){this.f=H.j(a,"$isb",[D.ee],"$asb")},
shA:function(a){this.r=H.j(a,"$isb",[D.eq],"$asb")},
shJ:function(a){this.x=H.j(a,"$isb",[D.ey],"$asb")},
shK:function(a){this.y=H.j(a,"$isb",[D.ez],"$asb")},
shL:function(a){this.z=H.j(a,"$isb",[D.eA],"$asb")},
gv:function(){var z=this.Q
if(z==null){z=D.H()
this.Q=z}return z},
aA:function(a){var z=this.Q
if(!(z==null))z.E(a)},
fX:[function(a){var z
H.e(a,"$isv")
z=this.ch
if(!(z==null))z.E(a)},function(){return this.fX(null)},"jN","$1","$0","gd9",0,2,0],
jT:[function(a){var z,y,x
H.j(a,"$isl",[D.X],"$asl")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.y)(a),++y){x=a[y]
if(x==null||this.eU(x))return!1}return!0},"$1","gh4",4,0,38],
jA:[function(a,b){var z,y,x,w,v,u,t,s
z=D.X
H.j(b,"$isl",[z],"$asl")
for(y=b.length,x=this.gd9(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=H.e(b[u],"$isX")
if(t instanceof D.bX)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bk()
s.saa(null)
s.saX(null)
s.c=null
s.d=0
t.d=s}H.k(x,w)
if(s.a==null)s.saa(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}z=new D.c1(a,b,this,[z])
z.b=!0
this.aA(z)},"$2","gfK",8,0,18],
jV:[function(a,b){var z,y,x,w
z=D.X
H.j(b,"$isl",[z],"$asl")
for(y=b.gN(b),x=this.gd9();y.A();){w=y.gF()
C.a.R(this.e,w)
w.gv().R(0,x)}z=new D.c2(a,b,this,[z])
z.b=!0
this.aA(z)},"$2","gh6",8,0,18],
eU:function(a){var z=C.a.V(this.e,a)
return z},
$asl:function(){return[D.X]},
$asU:function(){return[D.X]}},ee:{"^":"a;",$isX:1,$isaB:1},eq:{"^":"a;",$isX:1,$isaB:1},ey:{"^":"a;",$isX:1,$isaB:1},ez:{"^":"a;",$isX:1,$isaB:1},eA:{"^":"a;",$isX:1,$isaB:1}}],["","",,V,{"^":"",
li:[function(a,b){if(typeof b!=="number")return b.G()
if(typeof a!=="number")return H.B(a)
return Math.abs(b-a)<=1e-9},"$2","hZ",8,0,35],
ld:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.k.ev(a-b,z)
return(a<0?a+z:a)+b},
P:function(a,b,c){if(a==null)return C.i.av("null",c)
return C.i.av(C.k.ec($.n.$2(a,0)?0:a,b),c+b+1)},
bb:function(a,b,c){var z,y,x,w,v,u
H.j(a,"$isb",[P.w],"$asb")
z=H.c([],[P.m])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.y)(a),++w){v=V.P(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.h(z,u)
C.a.W(z,u,C.i.av(z[u],x))}return z},
V:{"^":"a;a,b,c",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}},
bU:{"^":"a;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bU))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"}},
e6:{"^":"a;a,b,c,d,e,f,r,x,y",
a7:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.w])
return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e6))return!1
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
z=[P.w]
y=V.bb(H.c([this.a,this.d,this.r],z),3,0)
x=V.bb(H.c([this.b,this.e,this.x],z),3,0)
w=V.bb(H.c([this.c,this.f,this.y],z),3,0)
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
ad:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a7:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.w])
return z},
e_:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.n.$2(a2,0))return V.bK()
a3=1/a2
a4=-w
a5=-i
return V.av((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
t:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.e(a7,"$isad")
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
return V.av(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
cD:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.S(this.a*z+this.b*y+this.c*x,this.e*z+this.f*y+this.r*x,this.y*z+this.z*y+this.Q*x)},
b9:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.a7(this.a*z+this.b*y+this.c*x+this.d,this.e*z+this.f*y+this.r*x+this.x,this.y*z+this.z*y+this.Q*x+this.ch)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ad))return!1
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
i:function(a){return this.P()},
dZ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.w]
y=V.bb(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bb(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bb(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bb(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
P:function(){return this.dZ("",3,0)},
C:function(a){return this.dZ(a,3,0)},
p:{
bK:function(){var z=$.e8
if(z==null){z=V.av(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.e8=z}return z},
av:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ad(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
e7:function(a,b,c){var z,y,x,w,v,u,t,s
z=c.w(0,Math.sqrt(c.D(c)))
y=b.at(z)
x=y.w(0,Math.sqrt(y.D(y)))
w=z.at(x)
v=new V.S(a.a,a.b,a.c)
u=x.M(0).D(v)
t=w.M(0).D(v)
s=z.M(0).D(v)
return V.av(x.a,w.a,z.a,u,x.b,w.b,z.b,t,x.c,w.c,z.c,s,0,0,0,1)}}},
a6:{"^":"a;a,b",
G:function(a,b){return new V.a6(this.a-b.a,this.b-b.b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"},
p:{
aR:function(){var z=$.ef
if(z==null){z=new V.a6(0,0)
$.ef=z}return z}}},
a7:{"^":"a;a,b,c",
K:function(a,b){return new V.a7(this.a+b.a,this.b+b.b,this.c+b.c)},
G:function(a,b){return new V.a7(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){return new V.a7(this.a*b,this.b*b,this.c*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"},
p:{
eg:function(){var z=$.bo
if(z==null){z=new V.a7(0,0,0)
$.bo=z}return z}}},
ek:{"^":"a;a,b,c,d",
ga3:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ek))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+", "+V.P(this.d,3,0)+"]"},
p:{
el:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ek(a,b,c,d)}}},
O:{"^":"a;a,b",
iR:[function(a){return Math.sqrt(this.D(this))},"$0","gn",1,0,19],
D:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.t()
if(typeof y!=="number")return H.B(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.t()
if(typeof w!=="number")return H.B(w)
return z*y+x*w},
t:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.t()
y=this.b
if(typeof y!=="number")return y.t()
return new V.O(z*b,y*b)},
w:function(a,b){var z,y
if($.n.$2(b,0)){z=$.eT
if(z==null){z=new V.O(0,0)
$.eT=z}return z}z=this.a
if(typeof z!=="number")return z.w()
y=this.b
if(typeof y!=="number")return y.w()
return new V.O(z/b,y/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}},
S:{"^":"a;a,b,c",
iR:[function(a){return Math.sqrt(this.D(this))},"$0","gn",1,0,19],
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
at:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.S(z*y-x*w,x*v-u*y,u*w-z*v)},
K:function(a,b){return new V.S(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a){return new V.S(-this.a,-this.b,-this.c)},
t:function(a,b){return new V.S(this.a*b,this.b*b,this.c*b)},
w:function(a,b){if($.n.$2(b,0))return V.bs()
return new V.S(this.a/b,this.b/b,this.c/b)},
e0:function(){if(!$.n.$2(0,this.a))return!1
if(!$.n.$2(0,this.b))return!1
if(!$.n.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"},
p:{
bs:function(){var z=$.eX
if(z==null){z=new V.S(0,0,0)
$.eX=z}return z},
eY:function(){var z=$.eW
if(z==null){z=new V.S(0,1,0)
$.eW=z}return z},
eZ:function(){var z=$.ce
if(z==null){z=new V.S(0,0,1)
$.ce=z}return z}}}}],["","",,U,{"^":"",fV:{"^":"dF;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bO:function(a){var z=V.ld(a,this.c,this.b)
return z},
gv:function(){var z=this.y
if(z==null){z=D.H()
this.y=z}return z},
O:function(a){var z=this.y
if(!(z==null))z.E(a)},
scF:function(a,b){},
sct:function(a){var z,y
z=this.b
if(!$.n.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bO(z)}z=new D.K("maximumLocation",y,this.b,this,[P.w])
z.b=!0
this.O(z)}},
scv:function(a){var z,y
z=this.c
if(!$.n.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bO(z)}z=new D.K("minimumLocation",y,this.c,this,[P.w])
z.b=!0
this.O(z)}},
sa2:function(a,b){var z,y
b=this.bO(b)
z=this.d
if(!$.n.$2(z,b)){y=this.d
this.d=b
z=new D.K("location",y,b,this,[P.w])
z.b=!0
this.O(z)}},
scu:function(a){var z,y,x
z=this.e
if(!$.n.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.K("maximumVelocity",y,a,this,[P.w])
z.b=!0
this.O(z)}},
sT:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.n.$2(z,a)){x=this.f
this.f=a
z=new D.K("velocity",x,a,this,[P.w])
z.b=!0
this.O(z)}},
sci:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.n.$2(z,a)){y=this.x
this.x=a
z=new D.K("dampening",y,a,this,[P.w])
z.b=!0
this.O(z)}},
ao:function(a){var z,y,x,w
z=this.f
if($.n.$2(z,0)){z=this.r
z=!$.n.$2(z,0)}else z=!0
if(z){y=this.f+this.r*a
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa2(0,this.d+y*a)
z=this.x
if(!$.n.$2(z,0)){w=y*Math.pow(1-this.x,a)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sT(y)}},
p:{
cC:function(){var z=new U.fV()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dH:{"^":"a5;0a,0b",
gv:function(){var z=this.b
if(z==null){z=D.H()
this.b=z}return z},
aS:function(a,b){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dH))return!1
return J.M(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")},
p:{
dI:function(a){var z=new U.dH()
z.a=a
return z}}},dV:{"^":"U;0e,0f,0r,0a,0b,0c,0d",
gv:function(){var z=this.e
if(z==null){z=D.H()
this.e=z}return z},
O:[function(a){var z
H.e(a,"$isv")
z=this.e
if(!(z==null))z.E(a)},function(){return this.O(null)},"a8","$1","$0","gaB",0,2,0],
jz:[function(a,b){var z,y,x,w,v,u,t,s
z=U.a5
H.j(b,"$isl",[z],"$asl")
for(y=b.length,x=this.gaB(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){s=t.gv()
s.toString
H.k(x,w)
if(s.a==null)s.saa(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.c1(a,b,this,[z])
z.b=!0
this.O(z)},"$2","gfJ",8,0,20],
jU:[function(a,b){var z,y,x
z=U.a5
H.j(b,"$isl",[z],"$asl")
for(y=b.gN(b),x=this.gaB();y.A();)y.gF().gv().R(0,x)
z=new D.c2(a,b,this,[z])
z.b=!0
this.O(z)},"$2","gh5",8,0,20],
aS:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(typeof z!=="number")return z.ah()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.aq(z,z.length,0,[H.u(z,0)]),x=null;z.A();){y=z.d
if(y!=null){w=y.aS(a,b)
if(w!=null)x=x==null?w:w.t(0,x)}}this.f=x==null?V.bK():x
z=this.e
if(!(z==null))z.ax()}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dV))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.h(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.h(w,y)
if(!J.M(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asl:function(){return[U.a5]},
$asU:function(){return[U.a5]},
$isa5:1},a5:{"^":"dF;"},ji:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gv:function(){var z=this.cy
if(z==null){z=D.H()
this.cy=z}return z},
O:[function(a){var z
H.e(a,"$isv")
z=this.cy
if(!(z==null))z.E(a)},function(){return this.O(null)},"a8","$1","$0","gaB",0,2,0],
b_:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdB().h(0,this.gbY())
this.a.c.ge1().h(0,this.gbZ())
this.a.c.gbH().h(0,this.gc_())
return!0},
fF:[function(a){H.e(a,"$isv")
if(!J.M(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbY",4,0,1],
fG:[function(a){var z,y,x,w,v,u,t
a=H.d(H.e(a,"$isv"),"$isbn")
if(!this.y)return
if(this.x){z=a.d.G(0,a.y)
z=new V.O(z.a,z.b)
z=z.D(z)
y=this.r
if(typeof y!=="number")return H.B(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.G(0,a.y)
z=new V.O(y.a,y.b).t(0,2).w(0,z.ga3())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.t()
x=this.e
if(typeof x!=="number")return H.B(x)
y.sT(z*10*x)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=new V.O(x.a,x.b).t(0,2).w(0,z.ga3())
x=this.b
v=w.a
if(typeof v!=="number")return v.M()
u=this.e
if(typeof u!=="number")return H.B(u)
t=this.z
if(typeof t!=="number")return H.B(t)
x.sa2(0,-v*u+t)
this.b.sT(0)
y=y.G(0,a.z)
this.Q=new V.O(y.a,y.b).t(0,2).w(0,z.ga3())}this.a8()},"$1","gbZ",4,0,1],
fH:[function(a){var z,y,x
H.e(a,"$isv")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.D(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.t()
x=this.e
if(typeof x!=="number")return H.B(x)
z.sT(y*10*x)
this.a8()}},"$1","gc_",4,0,1],
aS:function(a,b){var z,y,x,w,v
z=this.ch
y=a.e
if(typeof z!=="number")return z.ah()
if(z<y){this.ch=y
x=a.y
this.b.ao(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.av(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa5:1},jj:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gv:function(){var z=this.fx
if(z==null){z=D.H()
this.fx=z}return z},
O:[function(a){var z
H.e(a,"$isv")
z=this.fx
if(!(z==null))z.E(a)},function(){return this.O(null)},"a8","$1","$0","gaB",0,2,0],
b_:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gdB().h(0,this.gbY())
this.a.c.ge1().h(0,this.gbZ())
this.a.c.gbH().h(0,this.gc_())
z=this.a.d
y=z.f
if(y==null){y=D.H()
z.f=y
z=y}else z=y
z.h(0,this.gfD())
z=this.a.d
y=z.d
if(y==null){y=D.H()
z.d=y
z=y}else z=y
z.h(0,this.gfE())
z=this.a.e
y=z.b
if(y==null){y=D.H()
z.b=y
z=y}else z=y
z.h(0,this.ghH())
z=this.a.e
y=z.d
if(y==null){y=D.H()
z.d=y
z=y}else z=y
z.h(0,this.ghG())
z=this.a.e
y=z.c
if(y==null){y=D.H()
z.c=y
z=y}else z=y
z.h(0,this.ghF())
return!0},
ak:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.M()
z=-z}if(this.r){if(typeof y!=="number")return y.M()
y=-y}return new V.O(z,y)},
fF:[function(a){a=H.d(H.e(a,"$isv"),"$isbn")
if(!J.M(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbY",4,0,1],
fG:[function(a){var z,y,x,w,v,u,t
a=H.d(H.e(a,"$isv"),"$isbn")
if(!this.cx)return
if(this.ch){z=a.d.G(0,a.y)
z=new V.O(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.B(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.G(0,a.y)
z=this.ak(new V.O(y.a,y.b).t(0,2).w(0,z.ga3()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.M()
x=this.y
if(typeof x!=="number")return H.B(x)
y.sT(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.M()
y=this.x
if(typeof y!=="number")return H.B(y)
x.sT(-z*10*y)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=this.ak(new V.O(x.a,x.b).t(0,2).w(0,z.ga3()))
x=this.c
v=w.a
if(typeof v!=="number")return v.M()
u=this.y
if(typeof u!=="number")return H.B(u)
t=this.cy
if(typeof t!=="number")return H.B(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.M()
v=this.x
if(typeof v!=="number")return H.B(v)
x=this.db
if(typeof x!=="number")return H.B(x)
t.sa2(0,-u*v+x)
this.b.sT(0)
this.c.sT(0)
y=y.G(0,a.z)
this.dx=this.ak(new V.O(y.a,y.b).t(0,2).w(0,z.ga3()))}this.a8()},"$1","gbZ",4,0,1],
fH:[function(a){var z,y,x
H.e(a,"$isv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.M()
x=this.y
if(typeof x!=="number")return H.B(x)
z.sT(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.M()
z=this.x
if(typeof z!=="number")return H.B(z)
x.sT(-y*10*z)
this.a8()}},"$1","gc_",4,0,1],
jw:[function(a){if(H.d(H.e(a,"$isv"),"$ise2").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","gfD",4,0,1],
jx:[function(a){var z,y,x,w,v,u,t
a=H.d(H.e(a,"$isv"),"$isbn")
if(!J.M(this.d,a.x.b))return
z=a.c
y=a.d
x=y.G(0,a.y)
w=this.ak(new V.O(x.a,x.b).t(0,2).w(0,z.ga3()))
x=this.c
v=w.a
if(typeof v!=="number")return v.M()
u=this.y
if(typeof u!=="number")return H.B(u)
t=this.cy
if(typeof t!=="number")return H.B(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.M()
v=this.x
if(typeof v!=="number")return H.B(v)
x=this.db
if(typeof x!=="number")return H.B(x)
t.sa2(0,-u*v+x)
this.b.sT(0)
this.c.sT(0)
y=y.G(0,a.z)
this.dx=this.ak(new V.O(y.a,y.b).t(0,2).w(0,z.ga3()))
this.a8()},"$1","gfE",4,0,1],
k5:[function(a){H.e(a,"$isv")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghH",4,0,1],
k0:[function(a){var z,y,x,w,v,u,t
a=H.d(H.e(a,"$isv"),"$iseF")
if(!this.cx)return
if(this.ch){z=a.d.G(0,a.y)
z=new V.O(z.a,z.b)
z=z.D(z)
y=this.Q
if(typeof y!=="number")return H.B(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.G(0,a.y)
z=this.ak(new V.O(y.a,y.b).t(0,2).w(0,z.ga3()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.M()
x=this.y
if(typeof x!=="number")return H.B(x)
y.sT(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.M()
y=this.x
if(typeof y!=="number")return H.B(y)
x.sT(-z*10*y)}else{z=a.c
y=a.d
x=y.G(0,a.y)
w=this.ak(new V.O(x.a,x.b).t(0,2).w(0,z.ga3()))
x=this.c
v=w.a
if(typeof v!=="number")return v.M()
u=this.y
if(typeof u!=="number")return H.B(u)
t=this.cy
if(typeof t!=="number")return H.B(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.M()
v=this.x
if(typeof v!=="number")return H.B(v)
x=this.db
if(typeof x!=="number")return H.B(x)
t.sa2(0,-u*v+x)
this.b.sT(0)
this.c.sT(0)
y=y.G(0,a.z)
this.dx=this.ak(new V.O(y.a,y.b).t(0,2).w(0,z.ga3()))}this.a8()},"$1","ghG",4,0,1],
k_:[function(a){var z,y,x
H.e(a,"$isv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.D(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.M()
x=this.y
if(typeof x!=="number")return H.B(x)
z.sT(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.M()
z=this.x
if(typeof z!=="number")return H.B(z)
x.sT(-y*10*z)
this.a8()}},"$1","ghF",4,0,1],
aS:function(a,b){var z,y,x,w,v
z=this.dy
y=a.e
if(typeof z!=="number")return z.ah()
if(z<y){this.dy=y
x=a.y
this.c.ao(x)
this.b.ao(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.av(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.t(0,V.av(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isa5:1},jk:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gv:function(){var z=this.r
if(z==null){z=D.H()
this.r=z}return z},
O:function(a){var z=this.r
if(!(z==null))z.E(a)},
b_:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.H()
z.e=y
z=y}else z=y
y=this.gfI()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.H()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
jy:[function(a){var z,y,x,w
H.e(a,"$isv")
if(!J.M(this.b,this.a.b.c))return
H.d(a,"$iscM")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.t()
w=z+y*x
if(z!==w){this.d=w
z=new D.K("zoom",z,w,this,[P.w])
z.b=!0
this.O(z)}},"$1","gfI",4,0,1],
aS:function(a,b){var z,y,x
z=this.e
y=a.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.av(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa5:1}}],["","",,M,{"^":"",hb:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
seW:function(a,b){this.d=H.j(b,"$isU",[E.as],"$asU")},
aC:[function(a){var z
H.e(a,"$isv")
z=this.x
if(!(z==null))z.E(a)},function(){return this.aC(null)},"ju","$1","$0","gaj",0,2,0],
jF:[function(a,b){var z,y,x,w,v,u,t,s
z=E.as
H.j(b,"$isl",[z],"$asl")
for(y=b.length,x=this.gaj(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){if(t.ga9()==null){s=new D.bk()
s.saa(null)
s.saX(null)
s.c=null
s.d=0
t.sa9(s)}s=t.ga9()
s.toString
H.k(x,w)
if(s.a==null)s.saa(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.c1(a,b,this,[z])
z.b=!0
this.aC(z)},"$2","gfP",8,0,6],
jG:[function(a,b){var z,y,x
z=E.as
H.j(b,"$isl",[z],"$asl")
for(y=b.gN(b),x=this.gaj();y.A();)y.gF().gv().R(0,x)
z=new D.c2(a,b,this,[z])
z.b=!0
this.aC(z)},"$2","gfQ",8,0,6],
sea:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gv().R(0,this.gaj())
y=this.c
this.c=a
if(a!=null)a.gv().h(0,this.gaj())
z=new D.K("technique",y,this.c,this,[O.cb])
z.b=!0
this.aC(z)}},
gv:function(){var z=this.x
if(z==null){z=D.H()
this.x=z}return z},
aR:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.e8(this.c)
z=this.b
z.toString
y=a.a
C.b.ih(y,36160,null)
C.b.ck(y,2884)
C.b.ck(y,2929)
C.b.iC(y,513)
x=y.drawingBufferWidth
w=y.drawingBufferHeight
v=z.r
u=v.a
if(typeof x!=="number")return H.B(x)
t=C.k.ag(u*x)
u=v.b
if(typeof w!=="number")return H.B(w)
s=C.k.ag(u*w)
u=C.k.ag(v.c*x)
a.c=u
v=C.k.ag(v.d*w)
a.d=v
C.b.jr(y,t,s,u,v)
C.b.io(y,z.c)
z=z.a
C.b.im(y,z.a,z.b,z.c,z.d)
C.b.il(y,16640)
z=this.a
y=a.c
v=a.d
u=z.c
r=z.d
q=z.e
p=q-r
o=1/Math.tan(u*0.5)
n=V.av(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.e7(n)
y=$.ed
if(y==null){y=V.eg()
v=V.eY()
u=$.eU
if(u==null){u=new V.S(0,0,-1)
$.eU=u}u=V.e7(y,v,u)
$.ed=u
m=u}else m=y
y=z.b
if(y!=null){l=y.aS(a,z)
if(l!=null)m=l.t(0,m)}a.db.e7(m)
z=this.c
if(z!=null)z.ao(a)
for(z=this.d.a,z=new J.aq(z,z.length,0,[H.u(z,0)]);z.A();)z.d.ao(a)
for(z=this.d.a,z=new J.aq(z,z.length,0,[H.u(z,0)]);z.A();)z.d.aR(a)
this.a.toString
a.cy.cz()
a.db.cz()
this.b.toString
a.e6()},
$islt:1}}],["","",,A,{"^":"",dw:{"^":"a;a,b,c"},fN:{"^":"a;a",
l:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
iG:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
C.b.dC(w.a,w.c)}},
iE:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
C.b.dz(w.a,w.c)}}},hT:{"^":"cQ;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0an,0af,0bp,0dD,0bq,0br,0dE,0dF,0bs,0bt,0dG,0dH,0bu,0bv,0dI,0dJ,0bw,0dK,0dL,0bx,0dM,0dN,0by,0bz,0bA,0dO,0dP,0bB,0bC,0dQ,0dR,0bD,0dS,0cl,0dT,0cm,0dU,0cn,0dV,0co,0dW,0cp,0dX,0cq,a,b,0c,0d,0e,0f,0r,0x,0y",
sfa:function(a){this.r1=H.j(a,"$isb",[A.az],"$asb")},
seX:function(a){this.cl=H.j(a,"$isb",[A.d0],"$asb")},
seY:function(a){this.cm=H.j(a,"$isb",[A.d2],"$asb")},
seZ:function(a){this.cn=H.j(a,"$isb",[A.d3],"$asb")},
sf_:function(a){this.co=H.j(a,"$isb",[A.d4],"$asb")},
sf0:function(a){this.cp=H.j(a,"$isb",[A.d5],"$asb")},
sf1:function(a){this.cq=H.j(a,"$isb",[A.d6],"$asb")},
eK:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.z=a2
z=new P.bq("")
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
a2.hP(z)
a2.hW(z)
a2.hQ(z)
a2.i3(z)
a2.i4(z)
a2.hY(z)
a2.i8(z)
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
z=new P.bq("")
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
x.hT(z)
x.hO(z)
x.hR(z)
x.hU(z)
x.i1(z)
u=x.dy
if(u){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
x.i_(z)
x.i0(z)}x.hX(z)
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
p=H.c([],[P.m])
if(x.b!==C.c)C.a.h(p,"ambient()")
if(x.c!==C.c)C.a.h(p,"diffuse(norm, litVec)")
if(x.d!==C.c)C.a.h(p,"invDiffuse(norm, litVec)")
if(x.e!==C.c)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.k(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
x.hS(z)
x.hZ(z)
x.i2(z)
x.i5(z)
x.i6(z)
x.i7(z)
x.hV(z)}r=z.a+="// === Main ===\n"
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
o=H.c([],[P.m])
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
this.e=this.d2(s,35633)
this.f=this.d2(this.d,35632)
x=this.a
v=x.createProgram()
this.r=v
C.b.dn(x,v,this.e)
C.b.dn(x,this.r,this.f)
C.b.iS(x,this.r)
if(!H.dg(C.b.bI(x,this.r,35714))){m=C.b.ep(x,this.r)
C.b.iy(x,this.r)
H.r(P.p("Failed to link shader: "+H.f(m)))}this.hv()
this.hx()
this.Q=this.x.l(0,"posAttr")
this.cx=this.x.l(0,"normAttr")
this.ch=this.x.l(0,"binmAttr")
this.cy=this.x.l(0,"txt2DAttr")
this.db=this.x.l(0,"txtCubeAttr")
this.dx=this.x.l(0,"bendAttr")
if(a2.fr)this.id=H.d(this.y.m(0,"invViewMat"),"$isaz")
if(y)this.dy=H.d(this.y.m(0,"objMat"),"$isaz")
if(w)this.fr=H.d(this.y.m(0,"viewObjMat"),"$isaz")
this.fy=H.d(this.y.m(0,"projViewObjMat"),"$isaz")
if(a2.x2)this.k1=H.d(this.y.m(0,"txt2DMat"),"$isd1")
if(a2.y1)this.k2=H.d(this.y.m(0,"txtCubeMat"),"$isaz")
if(a2.y2)this.k3=H.d(this.y.m(0,"colorMat"),"$isaz")
this.sfa(H.c([],[A.az]))
y=a2.an
if(y>0){this.k4=H.e(this.y.m(0,"bendMatCount"),"$isE")
for(l=0;l<y;++l){x=this.r1
w=this.y
v="bendValues["+l+"].mat"
k=w.l(0,v)
if(k==null)H.r(P.p("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.d(k,"$isaz"))}}y=a2.a
if(y!==C.c){this.r2=H.d(this.y.m(0,"emissionClr"),"$isD")
switch(y){case C.c:break
case C.f:break
case C.d:this.rx=H.d(this.y.m(0,"emissionTxt"),"$isae")
this.x1=H.d(this.y.m(0,"nullEmissionTxt"),"$isE")
break
case C.e:this.ry=H.d(this.y.m(0,"emissionTxt"),"$isaf")
this.x1=H.d(this.y.m(0,"nullEmissionTxt"),"$isE")
break}}y=a2.b
if(y!==C.c){this.x2=H.d(this.y.m(0,"ambientClr"),"$isD")
switch(y){case C.c:break
case C.f:break
case C.d:this.y1=H.d(this.y.m(0,"ambientTxt"),"$isae")
this.an=H.d(this.y.m(0,"nullAmbientTxt"),"$isE")
break
case C.e:this.y2=H.d(this.y.m(0,"ambientTxt"),"$isaf")
this.an=H.d(this.y.m(0,"nullAmbientTxt"),"$isE")
break}}y=a2.c
if(y!==C.c){this.af=H.d(this.y.m(0,"diffuseClr"),"$isD")
switch(y){case C.c:break
case C.f:break
case C.d:this.bp=H.d(this.y.m(0,"diffuseTxt"),"$isae")
this.bq=H.d(this.y.m(0,"nullDiffuseTxt"),"$isE")
break
case C.e:this.dD=H.d(this.y.m(0,"diffuseTxt"),"$isaf")
this.bq=H.d(this.y.m(0,"nullDiffuseTxt"),"$isE")
break}}y=a2.d
if(y!==C.c){this.br=H.d(this.y.m(0,"invDiffuseClr"),"$isD")
switch(y){case C.c:break
case C.f:break
case C.d:this.dE=H.d(this.y.m(0,"invDiffuseTxt"),"$isae")
this.bs=H.d(this.y.m(0,"nullInvDiffuseTxt"),"$isE")
break
case C.e:this.dF=H.d(this.y.m(0,"invDiffuseTxt"),"$isaf")
this.bs=H.d(this.y.m(0,"nullInvDiffuseTxt"),"$isE")
break}}y=a2.e
if(y!==C.c){this.bv=H.d(this.y.m(0,"shininess"),"$isT")
this.bt=H.d(this.y.m(0,"specularClr"),"$isD")
switch(y){case C.c:break
case C.f:break
case C.d:this.dG=H.d(this.y.m(0,"specularTxt"),"$isae")
this.bu=H.d(this.y.m(0,"nullSpecularTxt"),"$isE")
break
case C.e:this.dH=H.d(this.y.m(0,"specularTxt"),"$isaf")
this.bu=H.d(this.y.m(0,"nullSpecularTxt"),"$isE")
break}}switch(a2.f){case C.c:break
case C.f:break
case C.d:this.dI=H.d(this.y.m(0,"bumpTxt"),"$isae")
this.bw=H.d(this.y.m(0,"nullBumpTxt"),"$isE")
break
case C.e:this.dJ=H.d(this.y.m(0,"bumpTxt"),"$isaf")
this.bw=H.d(this.y.m(0,"nullBumpTxt"),"$isE")
break}if(a2.dy){this.dK=H.d(this.y.m(0,"envSampler"),"$isaf")
this.dL=H.d(this.y.m(0,"nullEnvTxt"),"$isE")
y=a2.r
if(y!==C.c){this.bx=H.d(this.y.m(0,"reflectClr"),"$isD")
switch(y){case C.c:break
case C.f:break
case C.d:this.dM=H.d(this.y.m(0,"reflectTxt"),"$isae")
this.by=H.d(this.y.m(0,"nullReflectTxt"),"$isE")
break
case C.e:this.dN=H.d(this.y.m(0,"reflectTxt"),"$isaf")
this.by=H.d(this.y.m(0,"nullReflectTxt"),"$isE")
break}}y=a2.x
if(y!==C.c){this.bz=H.d(this.y.m(0,"refraction"),"$isT")
this.bA=H.d(this.y.m(0,"refractClr"),"$isD")
switch(y){case C.c:break
case C.f:break
case C.d:this.dO=H.d(this.y.m(0,"refractTxt"),"$isae")
this.bB=H.d(this.y.m(0,"nullRefractTxt"),"$isE")
break
case C.e:this.dP=H.d(this.y.m(0,"refractTxt"),"$isaf")
this.bB=H.d(this.y.m(0,"nullRefractTxt"),"$isE")
break}}}y=a2.y
if(y!==C.c){this.bC=H.d(this.y.m(0,"alpha"),"$isT")
switch(y){case C.c:break
case C.f:break
case C.d:this.dQ=H.d(this.y.m(0,"alphaTxt"),"$isae")
this.bD=H.d(this.y.m(0,"nullAlphaTxt"),"$isE")
break
case C.e:this.dR=H.d(this.y.m(0,"alphaTxt"),"$isaf")
this.bD=H.d(this.y.m(0,"nullAlphaTxt"),"$isE")
break}}this.seX(H.c([],[A.d0]))
this.seY(H.c([],[A.d2]))
this.seZ(H.c([],[A.d3]))
this.sf_(H.c([],[A.d4]))
this.sf0(H.c([],[A.d5]))
this.sf1(H.c([],[A.d6]))
if(a2.k2){y=a2.z
if(y>0){this.dS=H.e(this.y.m(0,"dirLightCount"),"$isE")
for(l=0;l<y;++l){x=this.y
w="dirLights["+l+"].viewDir"
k=x.l(0,w)
if(k==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isD")
x=this.y
w="dirLights["+l+"].color"
j=x.l(0,w)
if(j==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isD")
x=this.cl;(x&&C.a).h(x,new A.d0(l,k,j))}}y=a2.Q
if(y>0){this.dT=H.e(this.y.m(0,"pntLightCount"),"$isE")
for(l=0;l<y;++l){x=this.y
w="pntLights["+l+"].point"
k=x.l(0,w)
if(k==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isD")
x=this.y
w="pntLights["+l+"].viewPnt"
j=x.l(0,w)
if(j==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isD")
x=this.y
w="pntLights["+l+"].color"
i=x.l(0,w)
if(i==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isD")
x=this.y
w="pntLights["+l+"].att0"
h=x.l(0,w)
if(h==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isT")
x=this.y
w="pntLights["+l+"].att1"
g=x.l(0,w)
if(g==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isT")
x=this.y
w="pntLights["+l+"].att2"
f=x.l(0,w)
if(f==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isT")
x=this.cm;(x&&C.a).h(x,new A.d2(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.dU=H.e(this.y.m(0,"spotLightCount"),"$isE")
for(l=0;l<y;++l){x=this.y
w="spotLights["+l+"].objPnt"
k=x.l(0,w)
if(k==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isD")
x=this.y
w="spotLights["+l+"].objDir"
j=x.l(0,w)
if(j==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isD")
x=this.y
w="spotLights["+l+"].viewPnt"
i=x.l(0,w)
if(i==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isD")
x=this.y
w="spotLights["+l+"].color"
h=x.l(0,w)
if(h==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isD")
x=this.y
w="spotLights["+l+"].cutoff"
g=x.l(0,w)
if(g==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isT")
x=this.y
w="spotLights["+l+"].coneAngle"
f=x.l(0,w)
if(f==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isT")
x=this.y
w="spotLights["+l+"].att0"
e=x.l(0,w)
if(e==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isT")
x=this.y
w="spotLights["+l+"].att1"
d=x.l(0,w)
if(d==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isT")
x=this.y
w="spotLights["+l+"].att2"
c=x.l(0,w)
if(c==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(c,"$isT")
x=this.cn;(x&&C.a).h(x,new A.d3(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.dV=H.e(this.y.m(0,"txtDirLightCount"),"$isE")
for(l=0;l<y;++l){x=this.y
w="txtDirLights["+l+"].objUp"
k=x.l(0,w)
if(k==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isD")
x=this.y
w="txtDirLights["+l+"].objRight"
j=x.l(0,w)
if(j==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isD")
x=this.y
w="txtDirLights["+l+"].objDir"
i=x.l(0,w)
if(i==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isD")
x=this.y
w="txtDirLights["+l+"].viewDir"
h=x.l(0,w)
if(h==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isD")
x=this.y
w="txtDirLights["+l+"].color"
g=x.l(0,w)
if(g==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isD")
x=this.y
w="txtDirLights["+l+"].nullTxt"
f=x.l(0,w)
if(f==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isE")
x=this.y
w="txtDirLightsTxt2D"+l
e=x.l(0,w)
if(e==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isae")
x=this.co;(x&&C.a).h(x,new A.d4(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.dW=H.e(this.y.m(0,"txtPntLightCount"),"$isE")
for(l=0;l<y;++l){x=this.y
w="txtPntLights["+l+"].point"
k=x.l(0,w)
if(k==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isD")
x=this.y
w="txtPntLights["+l+"].viewPnt"
j=x.l(0,w)
if(j==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isD")
x=this.y
w="txtPntLights["+l+"].invViewRotMat"
i=x.l(0,w)
if(i==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isd1")
x=this.y
w="txtPntLights["+l+"].color"
h=x.l(0,w)
if(h==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isD")
x=this.y
w="txtPntLights["+l+"].nullTxt"
g=x.l(0,w)
if(g==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isE")
x=this.y
w="txtPntLights["+l+"].att0"
f=x.l(0,w)
if(f==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isT")
x=this.y
w="txtPntLights["+l+"].att1"
e=x.l(0,w)
if(e==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isT")
x=this.y
w="txtPntLights["+l+"].att2"
d=x.l(0,w)
if(d==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isT")
x=this.y
w="txtPntLightsTxtCube"+l
c=x.l(0,w)
if(c==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(c,"$isaf")
x=this.cp;(x&&C.a).h(x,new A.d5(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.dX=H.e(this.y.m(0,"txtSpotLightCount"),"$isE")
for(l=0;l<y;++l){x=this.y
w="txtSpotLights["+l+"].objPnt"
k=x.l(0,w)
if(k==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(k,"$isD")
x=this.y
w="txtSpotLights["+l+"].objDir"
j=x.l(0,w)
if(j==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(j,"$isD")
x=this.y
w="txtSpotLights["+l+"].objUp"
i=x.l(0,w)
if(i==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(i,"$isD")
x=this.y
w="txtSpotLights["+l+"].objRight"
h=x.l(0,w)
if(h==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(h,"$isD")
x=this.y
w="txtSpotLights["+l+"].viewPnt"
g=x.l(0,w)
if(g==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(g,"$isD")
x=this.y
w="txtSpotLights["+l+"].nullTxt"
f=x.l(0,w)
if(f==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(f,"$isE")
x=this.y
w="txtSpotLights["+l+"].color"
e=x.l(0,w)
if(e==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(e,"$isD")
x=this.y
w="txtSpotLights["+l+"].tuScalar"
d=x.l(0,w)
if(d==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(d,"$isT")
x=this.y
w="txtSpotLights["+l+"].tvScalar"
c=x.l(0,w)
if(c==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(c,"$isT")
x=this.y
w="txtSpotLights["+l+"].att0"
b=x.l(0,w)
if(b==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(b,"$isT")
x=this.y
w="txtSpotLights["+l+"].att1"
a=x.l(0,w)
if(a==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a,"$isT")
x=this.y
w="txtSpotLights["+l+"].att2"
a0=x.l(0,w)
if(a0==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a0,"$isT")
x=this.y
w="txtSpotLightsTxt2D"+l
a1=x.l(0,w)
if(a1==null)H.r(P.p("Required uniform value, "+w+", was not defined or used in shader."))
H.d(a1,"$isae")
x=this.cq;(x&&C.a).h(x,new A.d6(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
ac:function(a,b,c){C.b.S(b.a,b.d,1)},
a5:function(a,b,c){C.b.S(b.a,b.d,1)},
p:{
hS:function(a,b){var z,y
z=a.af
y=new A.hT(b,z)
y.eN(b,z)
y.eK(a,b)
return y}}},hW:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,an,af,bp",
hP:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.an+"];\n"
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
hW:function(a){var z
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
hQ:function(a){var z
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
i3:function(a){var z,y
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
i4:function(a){var z,y
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
hY:function(a){var z
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
i8:function(a){var z
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
if(0>=c.length)return H.h(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.i.bd(c,1))+"Txt;\n"
a.a=z
if(b===C.d)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
hT:function(a){var z,y
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
hO:function(a){var z,y
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
hR:function(a){var z,y
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
hU:function(a){var z,y
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
i1:function(a){var z,y
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
hX:function(a){var z,y
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
i_:function(a){var z,y
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
i0:function(a){var z,y
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
hS:function(a){var z,y
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
hZ:function(a){var z,y
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
i2:function(a){var z,y
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
i5:function(a){var z,y,x
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
i6:function(a){var z,y,x
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
i7:function(a){var z,y,x
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
hV:function(a){var z
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
i:function(a){return this.af}},d0:{"^":"a;a,b,c"},d4:{"^":"a;a,b,c,d,e,f,r,x"},d2:{"^":"a;a,b,c,d,e,f,r"},d5:{"^":"a;a,b,c,d,e,f,r,x,y,z"},d3:{"^":"a;a,b,c,d,e,f,r,x,y,z"},d6:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cQ:{"^":"cw;",
eN:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
d2:function(a,b){var z,y,x
z=this.a
y=C.b.iw(z,b)
C.b.eA(z,y,a)
C.b.ip(z,y)
if(!H.dg(C.b.es(z,y,35713))){x=C.b.er(z,y)
C.b.iz(z,y)
throw H.i(P.p("Error compiling shader '"+H.f(y)+"': "+H.f(x)))}return y},
hv:function(){var z,y,x,w,v,u
z=H.c([],[A.dw])
y=this.a
x=H.a2(C.b.bI(y,this.r,35721))
if(typeof x!=="number")return H.B(x)
w=0
for(;w<x;++w){v=C.b.ek(y,this.r,w)
u=C.b.em(y,this.r,v.name)
C.a.h(z,new A.dw(y,v.name,u))}this.x=new A.fN(z)},
hx:function(){var z,y,x,w,v,u
z=H.c([],[A.a0])
y=this.a
x=H.a2(C.b.bI(y,this.r,35718))
if(typeof x!=="number")return H.B(x)
w=0
for(;w<x;++w){v=C.b.el(y,this.r,w)
u=C.b.eu(y,this.r,v.name)
C.a.h(z,this.ix(v.type,v.size,v.name,u))}this.y=new A.ja(z)},
aF:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.E(z,y,b,c)
else return A.d_(z,y,b,a,c)},
fi:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ae(z,y,b,c)
else return A.d_(z,y,b,a,c)},
fj:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.af(z,y,b,c)
else return A.d_(z,y,b,a,c)},
bk:function(a,b){return new P.f5(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
ix:function(a,b,c,d){switch(a){case 5120:return this.aF(b,c,d)
case 5121:return this.aF(b,c,d)
case 5122:return this.aF(b,c,d)
case 5123:return this.aF(b,c,d)
case 5124:return this.aF(b,c,d)
case 5125:return this.aF(b,c,d)
case 5126:return new A.T(this.a,this.r,c,d)
case 35664:return new A.j5(this.a,this.r,c,d)
case 35665:return new A.D(this.a,this.r,c,d)
case 35666:return new A.j8(this.a,this.r,c,d)
case 35667:return new A.j6(this.a,this.r,c,d)
case 35668:return new A.j7(this.a,this.r,c,d)
case 35669:return new A.j9(this.a,this.r,c,d)
case 35674:return new A.jc(this.a,this.r,c,d)
case 35675:return new A.d1(this.a,this.r,c,d)
case 35676:return new A.az(this.a,this.r,c,d)
case 35678:return this.fi(b,c,d)
case 35680:return this.fj(b,c,d)
case 35670:throw H.i(this.bk("BOOL",c))
case 35671:throw H.i(this.bk("BOOL_VEC2",c))
case 35672:throw H.i(this.bk("BOOL_VEC3",c))
case 35673:throw H.i(this.bk("BOOL_VEC4",c))
default:throw H.i(P.p("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}},bV:{"^":"a;a,b",
i:function(a){return this.b}},a0:{"^":"a;"},ja:{"^":"a;a",
l:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.l(0,b)
if(z==null)throw H.i(P.p("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.P()},
iL:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.y)(z),++w)x+=z[w].i(0)+a
return x},
P:function(){return this.iL("\n")}},E:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform1i: "+H.f(this.c)}},j6:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform2i: "+H.f(this.c)}},j7:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform3i: "+H.f(this.c)}},j9:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform4i: "+H.f(this.c)}},j4:{"^":"a0;0e,0f,a,b,c,d",
shM:function(a){this.e=H.j(a,"$isb",[P.z],"$asb")},
i:function(a){return"Uniform1iv: "+H.f(this.c)},
p:{
d_:function(a,b,c,d,e){var z=new A.j4(a,b,c,e)
z.f=d
z.shM(P.hJ(d,0,!1,P.z))
return z}}},T:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform1f: "+H.f(this.c)}},j5:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform2f: "+H.f(this.c)}},D:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform3f: "+H.f(this.c)}},j8:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform4f: "+H.f(this.c)}},jc:{"^":"a0;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}},d1:{"^":"a0;a,b,c,d",
ai:function(a){var z=new Float32Array(H.bx(H.j(a,"$isb",[P.w],"$asb")))
C.b.ef(this.a,this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.f(this.c)}},az:{"^":"a0;a,b,c,d",
ai:function(a){var z=new Float32Array(H.bx(H.j(a,"$isb",[P.w],"$asb")))
C.b.eg(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.f(this.c)}},ae:{"^":"a0;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.f(this.c)}},af:{"^":"a0;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}}],["","",,F,{"^":"",
la:function(a,b,c,d){return F.kG(c,a,d,b,new F.lb())},
kG:function(a,b,c,d,e){var z=F.l8(a,b,new F.kH(H.k(e,{func:1,ret:V.a7,args:[P.w]}),d,b,c),null)
if(z==null)return
z.aI()
z.iW(new F.js(),new F.i5())
return z},
l8:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.k(c,{func:1,ret:-1,args:[F.aE,P.w,P.w]})
if(a<1)return
if(b<1)return
z=new F.ep()
y=new F.jn(z)
y.b=!1
x=[F.aE]
y.shN(H.c([],x))
z.a=y
y=new F.iF(z)
y.sc2(H.c([],[F.c8]))
z.b=y
y=new F.iE(z)
y.sfz(H.c([],[F.bI]))
z.c=y
y=new F.iD(z)
y.sfo(H.c([],[F.a_]))
z.d=y
z.e=null
w=H.c([],x)
for(v=0;v<=b;++v){u=v/b
y=z.a
if(u<0)x=0
else x=u>1?1:u
y.toString
t=F.d7(null,null,new V.bU(x,0,0,1),null,null,new V.a6(u,1),null,null,0)
y.h(0,t)
c.$3(t,u,0)
C.a.h(w,t.dw(d))}for(v=1;v<=a;++v){s=v/a
for(y=s>1,x=s<0,r=1-s,q=0;q<=b;++q){u=q/b
p=z.a
if(u<0)o=0
else o=u>1?1:u
if(x)n=0
else n=y?1:s
if(x)m=0
else m=y?1:s
p.toString
t=F.d7(null,null,new V.bU(o,n,m,1),null,null,new V.a6(u,r),null,null,0)
p.h(0,t)
c.$3(t,u,s)
C.a.h(w,t.dw(d))}}z.d.i9(a+1,b+1,w)
return z},
lb:{"^":"t:36;",
$1:function(a){return new V.a7(Math.cos(a),Math.sin(a),0)}},
kH:{"^":"t:37;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.ds(y.$1(z),x)
x=J.ds(y.$1(z+3.141592653589793/this.c),x).G(0,w)
x=new V.S(x.a,x.b,x.c)
v=x.w(0,Math.sqrt(x.D(x)))
y=$.eV
if(y==null){y=new V.S(1,0,0)
$.eV=y
u=y}else u=y
y=v.at(!J.M(v,u)?V.eZ():u)
t=y.w(0,Math.sqrt(y.D(y)))
y=t.at(v)
u=y.w(0,Math.sqrt(y.D(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.t(0,y*x)
x=t.t(0,r*x)
x=w.K(0,new V.a7(y.a-x.a,y.b-x.b,y.c-x.c))
if(!J.M(a.f,x)){a.f=x
y=a.a
if(y!=null)y.a4()}}},
a_:{"^":"a;0a,0b,0c,0d,0e",
bo:function(){if(!this.gdA()){C.a.R(this.a.a.d.b,this)
this.a.a.a4()}this.hg()
this.hh()
this.hi()},
hs:function(a){this.a=a
C.a.h(a.d.b,this)},
ht:function(a){this.b=a
C.a.h(a.d.c,this)},
hu:function(a){this.c=a
C.a.h(a.d.d,this)},
hg:function(){var z=this.a
if(z!=null){C.a.R(z.d.b,this)
this.a=null}},
hh:function(){var z=this.b
if(z!=null){C.a.R(z.d.c,this)
this.b=null}},
hi:function(){var z=this.c
if(z!=null){C.a.R(z.d.d,this)
this.c=null}},
gdA:function(){return this.a==null||this.b==null||this.c==null},
f9:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.bs()
if(y!=null)v=v.K(0,y)
if(x!=null)v=v.K(0,x)
if(w!=null)v=v.K(0,w)
if(v.e0())return
return v.w(0,Math.sqrt(v.D(v)))},
fe:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.G(0,y)
z=new V.S(z.a,z.b,z.c)
v=z.w(0,Math.sqrt(z.D(z)))
z=w.G(0,y)
z=new V.S(z.a,z.b,z.c)
z=v.at(z.w(0,Math.sqrt(z.D(z))))
return z.w(0,Math.sqrt(z.D(z)))},
cf:function(){if(this.d!=null)return!0
var z=this.f9()
if(z==null){z=this.fe()
if(z==null)return!1}this.d=z
this.a.a.a4()
return!0},
f8:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=V.bs()
if(y!=null)v=v.K(0,y)
if(x!=null)v=v.K(0,x)
if(w!=null)v=v.K(0,w)
if(v.e0())return
return v.w(0,Math.sqrt(v.D(v)))},
fd:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
z=new V.S(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.D(z)))
if(o.a-p.a<0)m=m.M(0)}else{l=(z-q.b)/n
z=r.G(0,u).t(0,l).K(0,u).G(0,x)
z=new V.S(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.D(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.M(0)}z=this.d
if(z!=null){k=z.w(0,Math.sqrt(z.D(z)))
z=k.at(m)
z=z.w(0,Math.sqrt(z.D(z))).at(k)
m=z.w(0,Math.sqrt(z.D(z)))}return m},
cd:function(){if(this.e!=null)return!0
var z=this.f8()
if(z==null){z=this.fd()
if(z==null)return!1}this.e=z
this.a.a.a4()
return!0},
gdu:function(a){if(J.M(this.a,this.b))return!0
if(J.M(this.b,this.c))return!0
if(J.M(this.c,this.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
C:function(a){var z,y
if(this.gdA())return a+"disposed"
z=a+C.i.av(J.ap(this.a.e),0)+", "+C.i.av(J.ap(this.b.e),0)+", "+C.i.av(J.ap(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
P:function(){return this.C("")},
p:{
c_:function(a,b,c){var z,y,x
z=new F.a_()
y=a.a
if(y==null)H.r(P.p("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.p("May not create a face with vertices attached to different shapes."))
z.hs(a)
z.ht(b)
z.hu(c)
C.a.h(z.a.a.d.b,z)
z.a.a.a4()
return z}}},
hf:{"^":"a;"},
iL:{"^":"hf;",
cs:function(a,b,c){var z,y
z=b.a
z.a.a.L()
z=z.e
y=c.a
y.a.a.L()
if(z==y.e){z=b.b
z.a.a.L()
z=z.e
y=c.b
y.a.a.L()
if(z==y.e){z=b.c
z.a.a.L()
z=z.e
y=c.c
y.a.a.L()
y=z==y.e
z=y}else z=!1
return z}else{z=b.a
z.a.a.L()
z=z.e
y=c.b
y.a.a.L()
if(z==y.e){z=b.b
z.a.a.L()
z=z.e
y=c.c
y.a.a.L()
if(z==y.e){z=b.c
z.a.a.L()
z=z.e
y=c.a
y.a.a.L()
y=z==y.e
z=y}else z=!1
return z}else{z=b.a
z.a.a.L()
z=z.e
y=c.c
y.a.a.L()
if(z==y.e){z=b.b
z.a.a.L()
z=z.e
y=c.a
y.a.a.L()
if(z==y.e){z=b.c
z.a.a.L()
z=z.e
y=c.b
y.a.a.L()
y=z==y.e
z=y}else z=!1
return z}else return!1}}}},
bI:{"^":"a;"},
hE:{"^":"a;"},
j3:{"^":"hE;"},
c8:{"^":"a;"},
ep:{"^":"a;0a,0b,0c,0d,0e",
gv:function(){var z=this.e
if(z==null){z=D.H()
this.e=z}return z},
aI:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aI()||!1
if(!this.a.aI())y=!1
z=this.e
if(!(z==null))z.ax()
return y},
iW:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.c(z.slice(0),[H.u(z,0)])
for(z=[F.aE];y.length!==0;){x=C.a.giI(y)
C.a.jb(y,0)
if(x!=null){w=H.c([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.y)(y),++u){t=y[u]
if(t!=null&&a.cs(0,x,t)){C.a.h(w,t)
C.a.R(y,t)}}if(w.length>1)b.iV(w)}}this.a.L()
this.c.cA()
this.d.cA()
this.b.jc()
this.c.cB(new F.j3())
this.d.cB(new F.iL())
z=this.e
if(!(z==null))z.ax()},
ij:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aI()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aH().a)!==0)++w
if((x&$.$get$aG().a)!==0)++w
if((x&$.$get$aJ().a)!==0)++w
if((x&$.$get$aK().a)!==0)++w
if((x&$.$get$bt().a)!==0)++w
if((x&$.$get$bu().a)!==0)++w
if((x&$.$get$b6().a)!==0)++w
if((x&$.$get$aF().a)!==0)++w
v=b.gcO(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.w
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.dA])
for(r=0,q=0;q<w;++q){p=b.ic(q)
o=p.gcO(p)
C.a.W(s,q,new Z.dA(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.h(y,n)
m=y[n].iT(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.W(t,l,m[k]);++l}}r+=o}H.j(t,"$isb",[x],"$asb")
y=a.a
j=y.createBuffer()
C.b.am(y,34962,j)
C.b.dr(y,34962,new Float32Array(H.bx(t)),35044)
C.b.am(y,34962,null)
i=new Z.dB(new Z.f2(34962,j),s,b)
i.sfw(H.c([],[Z.cE]))
this.b.b
this.c.b
if(this.d.b.length!==0){x=P.z
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.L()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].b
g.a.a.L()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.h(g,q)
g=g[q].c
g.a.a.L()
C.a.h(h,g.e)}f=Z.jz(y,34963,H.j(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.cE(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.m])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.C("   "))}this.b.b
this.c.b
if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.C("   "))}return C.a.k(z,"\n")},
aQ:function(a){var z=this.e
if(!(z==null))z.E(a)},
a4:function(){return this.aQ(null)},
$islv:1},
iD:{"^":"a;a,0b",
sfo:function(a){this.b=H.j(a,"$isb",[F.a_],"$asb")},
i9:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.j(c,"$isb",[F.aE],"$asb")
z=H.c([],[F.a_])
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
C.a.h(z,F.c_(q,p,n))
y.a.h(0,q)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.c_(q,n,m))}else{r.h(0,p)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.c_(p,n,m))
y.a.h(0,p)
y.a.h(0,m)
y.a.h(0,q)
C.a.h(z,F.c_(p,m,q))}t=!t}v=!v}return z},
gn:function(a){return this.b.length},
cB:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.h(x,y)
w=x[y]
for(x=w.d,v=x.b.length+x.c.length+x.d.length-1;v>=0;--v){u=w.d.l(0,v)
for(t=v-1;t>=0;--t){s=w.d.l(0,t)
if(a.cs(0,u,s)){u.bo()
break}}}}},
cA:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.h(y,z)
x=y[z]
y=x.gdu(x)
if(y)x.bo()}},
aI:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.y)(z),++w)if(!z[w].cf())x=!1
return x},
ce:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.y)(z),++w)if(!z[w].cd())x=!1
return x},
i:function(a){return this.P()},
C:function(a){var z,y,x,w
z=H.c([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].C(a))
return C.a.k(z,"\n")},
P:function(){return this.C("")}},
iE:{"^":"a;a,0b",
sfz:function(a){this.b=H.j(a,"$isb",[F.bI],"$asb")},
gn:function(a){return 0},
cB:function(a){var z,y,x,w,v
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.h(x,y)
w=x[y]
for(w.c.c,v=-1;!1;--v)w.c.l(0,v)}},
cA:function(){var z,y,x
for(z=-1;!1;--z){y=this.b
return H.h(y,z)
x=y[z]
y=x.gdu(x)
if(y)x.bo()}},
i:function(a){return this.P()},
C:function(a){var z,y,x
z=H.c([],[P.m])
for(y=0;!1;++y){x=this.b
if(y>=0)return H.h(x,y)
C.a.h(z,x[y].C(a+(""+y+". ")))}return C.a.k(z,"\n")},
P:function(){return this.C("")}},
iF:{"^":"a;a,0b",
sc2:function(a){this.b=H.j(a,"$isb",[F.c8],"$asb")},
gn:function(a){return 0},
jc:function(){var z,y
for(z=-1;!1;--z){y=this.b
return H.h(y,z)
y=y[z].gkh()
y=y.gke(y)
if(y.gn(y).js(0,1)){y=this.b
return H.h(y,z)
y[z].bo()}}},
i:function(a){return this.P()},
C:function(a){var z,y,x
z=H.c([],[P.m])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.h(y,x)
C.a.h(z,y[x].C(a))}return C.a.k(z,"\n")},
P:function(){return this.C("")}},
aE:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
dw:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.d7(this.cx,x,u,z,y,w,v,a,t)},
iT:function(a){var z,y
if(a.u(0,$.$get$aI())){z=this.f
y=[P.w]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$aH())){z=this.r
y=[P.w]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$aG())){z=this.x
y=[P.w]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$aJ())){z=this.y
y=[P.w]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(a.u(0,$.$get$aK())){z=this.z
y=[P.w]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$bt())){z=this.Q
y=[P.w]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$bu())){z=this.Q
y=[P.w]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(a.u(0,$.$get$b6()))return H.c([this.ch],[P.w])
else if(a.u(0,$.$get$aF())){z=H.c([-1,-1,-1,-1],[P.w])
return z}else return H.c([],[P.w])},
cf:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bs()
this.d.a_(0,new F.jx(z))
z=z.a
this.r=z.w(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.a4()
z=this.a.e
if(!(z==null))z.ax()}return!0},
cd:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bs()
this.d.a_(0,new F.jw(z))
z=z.a
this.x=z.w(0,Math.sqrt(z.D(z)))
z=this.a
if(z!=null){z.a4()
z=this.a.e
if(!(z==null))z.ax()}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
C:function(a){var z,y,x
z=H.c([],[P.m])
C.a.h(z,C.i.av(J.ap(this.e),0))
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
C.a.h(z,V.P(this.ch,3,0))
C.a.h(z,"-")
x=C.a.k(z,", ")
return a+"{"+x+"}"},
P:function(){return this.C("")},
p:{
d7:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aE()
y=new F.jv(z)
y.sc2(H.c([],[F.c8]))
z.b=y
y=new F.jr(z)
x=[F.bI]
y.sfA(H.c([],x))
y.sfB(H.c([],x))
z.c=y
y=new F.jo(z)
x=[F.a_]
y.sfp(H.c([],x))
y.sfq(H.c([],x))
y.sfs(H.c([],x))
z.d=y
h=$.$get$f_()
z.e=0
y=$.$get$aI()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aH().a)!==0?e:null
z.x=(x&$.$get$aG().a)!==0?b:null
z.y=(x&$.$get$aJ().a)!==0?f:null
z.z=(x&$.$get$aK().a)!==0?g:null
z.Q=(x&$.$get$f0().a)!==0?c:null
z.ch=(x&$.$get$b6().a)!==0?i:0
z.cx=(x&$.$get$aF().a)!==0?a:null
return z}}},
jx:{"^":"t:5;a",
$1:function(a){var z,y
H.e(a,"$isa_")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.K(0,z)}}},
jw:{"^":"t:5;a",
$1:function(a){var z,y
H.e(a,"$isa_")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.K(0,z)}}},
jn:{"^":"a;a,0b,0c",
shN:function(a){this.c=H.j(a,"$isb",[F.aE],"$asb")},
L:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.h(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z,y
z=b.a
if(z!=null){if(z===this.a)return!1
throw H.i(P.p("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
y=this.a
b.a=y
C.a.h(z,b)
y.a4()
return!0},
gn:function(a){return this.c.length},
aI:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)z[x].cf()
return!0},
ce:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)z[x].cd()
return!0},
ik:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.w(0,Math.sqrt(u*u+t*t+s*s))
if(!J.M(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.E(null)}}}}return!0},
i:function(a){return this.P()},
C:function(a){var z,y,x,w
this.L()
z=H.c([],[P.m])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].C(a))
return C.a.k(z,"\n")},
P:function(){return this.C("")}},
jo:{"^":"a;a,0b,0c,0d",
sfp:function(a){this.b=H.j(a,"$isb",[F.a_],"$asb")},
sfq:function(a){this.c=H.j(a,"$isb",[F.a_],"$asb")},
sfs:function(a){this.d=H.j(a,"$isb",[F.a_],"$asb")},
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
a_:function(a,b){H.k(b,{func:1,ret:-1,args:[F.a_]})
C.a.a_(this.b,b)
C.a.a_(this.c,new F.jp(this,b))
C.a.a_(this.d,new F.jq(this,b))},
i:function(a){return this.P()},
C:function(a){var z,y,x,w
z=H.c([],[P.m])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].C(a))
return C.a.k(z,"\n")},
P:function(){return this.C("")}},
jp:{"^":"t:5;a,b",
$1:function(a){H.e(a,"$isa_")
if(!J.M(a.a,this.a))this.b.$1(a)}},
jq:{"^":"t:5;a,b",
$1:function(a){var z
H.e(a,"$isa_")
z=this.a
if(!J.M(a.a,z)&&!J.M(a.b,z))this.b.$1(a)}},
jr:{"^":"a;a,0b,0c",
sfA:function(a){this.b=H.j(a,"$isb",[F.bI],"$asb")},
sfB:function(a){this.c=H.j(a,"$isb",[F.bI],"$asb")},
gn:function(a){return 0},
l:function(a,b){var z,y
if(b>=0){z=this.c
y=b-0
if(y>=0)return H.h(z,y)
return z[y]}else{z=this.b
return H.h(z,b)
return z[b]}},
i:function(a){return this.P()},
C:function(a){var z,y,x
z=H.c([],[P.m])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.h(y,x)
C.a.h(z,y[x].C(a))}for(y=this.c,x=0;!1;++x){if(x>=0)return H.h(y,x)
C.a.h(z,y[x].C(a))}return C.a.k(z,"\n")},
P:function(){return this.C("")}},
jt:{"^":"a;"},
js:{"^":"jt;",
cs:function(a,b,c){return J.M(b.f,c.f)}},
ju:{"^":"a;"},
i5:{"^":"ju;",
iV:function(a){var z,y,x,w,v,u,t,s,r
H.j(a,"$isb",[F.aE],"$asb")
z=V.bs()
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.S(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.w(0,Math.sqrt(z.D(z)))
for(y=a.length,w=z==null,x=0;x<a.length;a.length===y||(0,H.y)(a),++x){v=a[x]
if(w)u=null
else{t=z.a
s=z.b
r=z.c
u=z.w(0,Math.sqrt(t*t+s*s+r*r))}if(!J.M(v.r,u)){v.r=u
t=v.a
if(t!=null){t=t.e
if(!(t==null))t.E(null)}}}return}},
jv:{"^":"a;a,0b",
sc2:function(a){this.b=H.j(a,"$isb",[F.c8],"$asb")},
gn:function(a){return 0},
i:function(a){return this.P()},
C:function(a){var z,y,x
z=H.c([],[P.m])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.h(y,x)
C.a.h(z,y[x].C(a))}return C.a.k(z,"\n")},
P:function(){return this.C("")}}}],["","",,O,{"^":"",hR:{"^":"cb;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
sfb:function(a){this.e=H.j(a,"$isU",[V.ad],"$asU")},
gv:function(){var z=this.dy
if(z==null){z=D.H()
this.dy=z}return z},
ab:[function(a){var z
H.e(a,"$isv")
z=this.dy
if(!(z==null))z.E(a)},function(){return this.ab(null)},"jE","$1","$0","gfO",0,2,0],
hm:[function(a){H.e(a,"$isv")
this.a=null
this.ab(a)},function(){return this.hm(null)},"jZ","$1","$0","ghl",0,2,0],
jB:[function(a,b){var z=V.ad
z=new D.c1(a,H.j(b,"$isl",[z],"$asl"),this,[z])
z.b=!0
this.ab(z)},"$2","gfL",8,0,22],
jC:[function(a,b){var z=V.ad
z=new D.c2(a,H.j(b,"$isl",[z],"$asl"),this,[z])
z.b=!0
this.ab(z)},"$2","gfM",8,0,22],
d_:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
a2=$.$get$aI()
if(e){g=$.$get$aH()
a2=new Z.b5(a2.a|g.a)}if(d){g=$.$get$aG()
a2=new Z.b5(a2.a|g.a)}if(c){g=$.$get$aJ()
a2=new Z.b5(a2.a|g.a)}if(b){g=$.$get$aK()
a2=new Z.b5(a2.a|g.a)}if(a0){g=$.$get$aF()
a2=new Z.b5(a2.a|g.a)}return new A.hW(z,r,q,p,o,n,m,l,k,y,x,w,v,u,t,y+x+w+v+u+t,i,i,a,a1,!0,!1,!1,h,a,f,e,d,c,b,a0,!1,!1,!1,s,j.charCodeAt(0)==0?j:j,a2)},
U:function(a,b){H.j(a,"$isb",[T.ex],"$asb")},
ao:function(a){var z,y,x,w,v
for(z=this.dx.a,z=new J.aq(z,z.length,0,[H.u(z,0)]);z.A();){y=z.d
y.toString
x=$.ce
if(x==null){x=new V.S(0,0,1)
$.ce=x}y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.cD(x)}}},
je:function(a,a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=this.a
if(z==null){z=this.d_()
y=a.fr.l(0,z.af)
if(y==null){y=A.hS(z,a.a)
x=y.b
if(x.length===0)H.r(P.p("May not cache a shader with no name."))
if(a.fr.dv(x))H.r(P.p('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.W(0,x,y)}this.a=y
a0.e=null
z=y}w=z.z
v=w.bp
z=a0.e
if(!(z instanceof Z.dB)){a0.e=null
z=null}if(z==null||!z.d.u(0,v)){z=w.r1
if(z)a0.d.aI()
u=w.r2
if(u){t=a0.d
s=t.e
if(!(s==null))++s.d
t.d.ce()
t.a.ce()
t=t.e
if(!(t==null))t.ax()}t=w.ry
if(t){s=a0.d
r=s.e
if(!(r==null))++r.d
s.a.ik()
s=s.e
if(!(s==null))s.ax()}q=a0.d.ij(new Z.jy(a.a),v)
q.aN($.$get$aI()).e=this.a.Q.c
if(z)q.aN($.$get$aH()).e=this.a.cx.c
if(u)q.aN($.$get$aG()).e=this.a.ch.c
if(w.rx)q.aN($.$get$aJ()).e=this.a.cy.c
if(t)q.aN($.$get$aK()).e=this.a.db.c
if(w.x1)q.aN($.$get$aF()).e=this.a.dx.c
a0.e=q}z=T.ex
p=H.c([],[z])
u=this.a
t=a.a
C.b.eh(t,u.r)
u.x.iG()
if(w.fx){u=this.a
s=a.dx.gY()
u=u.dy
u.toString
u.ai(s.a7(0,!0))}if(w.fy){u=this.a
s=a.cx
if(s==null){s=a.db.gY().t(0,a.dx.gY())
a.cx=s}u=u.fr
u.toString
u.ai(s.a7(0,!0))}u=this.a
s=a.ch
if(s==null){s=a.gj9().t(0,a.dx.gY())
a.ch=s}u=u.fy
u.toString
u.ai(s.a7(0,!0))
if(w.x2){u=this.a
s=this.b
u=u.k1
u.toString
u.ai(C.r.a7(s,!0))}if(w.y1){u=this.a
s=this.c
u=u.k2
u.toString
u.ai(C.r.a7(s,!0))}if(w.y2){u=this.a
s=this.d
u=u.k3
u.toString
u.ai(C.r.a7(s,!0))}if(w.an>0){o=this.e.a.length
u=this.a.k4
C.b.S(u.a,u.d,o)
for(u=[P.w],n=0;n<o;++n){s=this.a
r=this.e.a
if(n>=r.length)return H.h(r,n)
r=r[n]
s.toString
H.e(r,"$isad")
s=s.r1
if(n>=s.length)return H.h(s,n)
s=s[n]
m=new Float32Array(H.bx(H.j(r.a7(0,!0),"$isb",u,"$asb")))
C.b.eg(s.a,s.d,!1,m)}}switch(w.a){case C.c:break
case C.f:u=this.a
s=this.f.f
u=u.r2
u.toString
r=s.a
l=s.b
s=s.c
C.b.q(u.a,u.d,r,l,s)
break
case C.d:this.U(p,this.f.d)
u=this.a
s=this.f.d
u.ac(u.rx,u.x1,s)
s=this.a
u=this.f.f
s=s.r2
s.toString
r=u.a
l=u.b
u=u.c
C.b.q(s.a,s.d,r,l,u)
break
case C.e:this.U(p,this.f.e)
u=this.a
s=this.f.e
u.a5(u.ry,u.x1,s)
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
case C.d:this.U(p,this.r.d)
u=this.a
s=this.r.d
u.ac(u.y1,u.an,s)
s=this.a
u=this.r.f
s=s.x2
s.toString
r=u.a
l=u.b
u=u.c
C.b.q(s.a,s.d,r,l,u)
break
case C.e:this.U(p,this.r.e)
u=this.a
s=this.r.e
u.a5(u.y2,u.an,s)
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
u=u.af
u.toString
r=s.a
l=s.b
s=s.c
C.b.q(u.a,u.d,r,l,s)
break
case C.d:this.U(p,this.x.d)
u=this.a
s=this.x.d
u.ac(u.bp,u.bq,s)
s=this.a
u=this.x.f
s=s.af
s.toString
r=u.a
l=u.b
u=u.c
C.b.q(s.a,s.d,r,l,u)
break
case C.e:this.U(p,this.x.e)
u=this.a
s=this.x.e
u.a5(u.dD,u.bq,s)
s=this.a
u=this.x.f
s=s.af
s.toString
r=u.a
l=u.b
u=u.c
C.b.q(s.a,s.d,r,l,u)
break}switch(w.d){case C.c:break
case C.f:u=this.a
s=this.y.f
u=u.br
u.toString
r=s.a
l=s.b
s=s.c
C.b.q(u.a,u.d,r,l,s)
break
case C.d:this.U(p,this.y.d)
u=this.a
s=this.y.d
u.ac(u.dE,u.bs,s)
s=this.a
u=this.y.f
s=s.br
s.toString
r=u.a
l=u.b
u=u.c
C.b.q(s.a,s.d,r,l,u)
break
case C.e:this.U(p,this.y.e)
u=this.a
s=this.y.e
u.a5(u.dF,u.bs,s)
s=this.a
u=this.y.f
s=s.br
s.toString
r=u.a
l=u.b
u=u.c
C.b.q(s.a,s.d,r,l,u)
break}switch(w.e){case C.c:break
case C.f:u=this.a
s=this.z.f
u=u.bt
u.toString
r=s.a
l=s.b
s=s.c
C.b.q(u.a,u.d,r,l,s)
s=this.a
l=this.z.ch
s=s.bv
C.b.J(s.a,s.d,l)
break
case C.d:this.U(p,this.z.d)
u=this.a
s=this.z.d
u.ac(u.dG,u.bu,s)
s=this.a
u=this.z.f
s=s.bt
s.toString
r=u.a
l=u.b
u=u.c
C.b.q(s.a,s.d,r,l,u)
u=this.a
l=this.z.ch
u=u.bv
C.b.J(u.a,u.d,l)
break
case C.e:this.U(p,this.z.e)
u=this.a
s=this.z.e
u.a5(u.dH,u.bu,s)
s=this.a
u=this.z.f
s=s.bt
s.toString
r=u.a
l=u.b
u=u.c
C.b.q(s.a,s.d,r,l,u)
u=this.a
l=this.z.ch
u=u.bv
C.b.J(u.a,u.d,l)
break}if(w.z>0){o=this.dx.e.length
u=this.a.dS
C.b.S(u.a,u.d,o)
k=a.db.gY()
for(u=this.dx.e,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.y)(u),++i){h=u[i]
r=this.a.cl
if(j>=r.length)return H.h(r,j)
g=r[j]
r=k.cD(h.a)
l=r.a
f=r.b
e=r.c
e=r.w(0,Math.sqrt(l*l+f*f+e*e))
f=g.b
l=e.a
r=e.b
e=e.c
C.b.q(f.a,f.d,l,r,e)
e=h.c
r=g.c
C.b.q(r.a,r.d,e.a,e.b,e.c);++j}}if(w.Q>0){o=this.dx.f.length
u=this.a.dT
C.b.S(u.a,u.d,o)
k=a.db.gY()
for(u=this.dx.f,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.y)(u),++i){h=u[i]
r=this.a.cm
if(j>=r.length)return H.h(r,j)
g=r[j]
r=h.gb5(h)
l=g.b
f=r.gcG(r)
e=r.gcH(r)
r=r.gcI(r)
C.b.q(l.a,l.d,f,e,r)
r=k.b9(h.gb5(h))
e=g.c
C.b.q(e.a,e.d,r.a,r.b,r.c)
r=h.gad(h)
e=g.d
f=r.gbG()
l=r.gbb()
r=r.gbm()
C.b.q(e.a,e.d,f,l,r)
r=h.gc8()
l=g.e
C.b.J(l.a,l.d,r)
r=h.gc9()
l=g.f
C.b.J(l.a,l.d,r)
r=h.gca()
l=g.r
C.b.J(l.a,l.d,r);++j}}if(w.ch>0){o=this.dx.r.length
u=this.a.dU
C.b.S(u.a,u.d,o)
k=a.db.gY()
for(u=this.dx.r,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.y)(u),++i){h=u[i]
r=this.a.cn
if(j>=r.length)return H.h(r,j)
g=r[j]
r=h.gb5(h)
l=g.b
f=r.gcG(r)
e=r.gcH(r)
r=r.gcI(r)
C.b.q(l.a,l.d,f,e,r)
r=h.gcj(h).k9()
e=g.c
f=r.gaK(r)
l=r.gaL(r)
r=r.gaM()
C.b.q(e.a,e.d,f,l,r)
r=k.b9(h.gb5(h))
l=g.d
C.b.q(l.a,l.d,r.a,r.b,r.c)
r=h.gad(h)
l=g.e
f=r.gbG()
e=r.gbb()
r=r.gbm()
C.b.q(l.a,l.d,f,e,r)
r=h.gk8()
e=g.f
C.b.J(e.a,e.d,r)
r=h.gk6()
e=g.r
C.b.J(e.a,e.d,r)
r=h.gc8()
e=g.x
C.b.J(e.a,e.d,r)
r=h.gc9()
e=g.y
C.b.J(e.a,e.d,r)
r=h.gca()
e=g.z
C.b.J(e.a,e.d,r);++j}}if(w.cx>0){o=this.dx.x.length
u=this.a.dV
C.b.S(u.a,u.d,o)
k=a.db.gY()
for(u=this.dx.x,s=u.length,r=[z],j=0,i=0;i<u.length;u.length===s||(0,H.y)(u),++i){h=u[i]
l=this.a.co
if(j>=l.length)return H.h(l,j)
g=l[j]
l=h.gb7()
H.j(p,"$isb",r,"$asb")
if(!C.a.V(p,l)){l.sb1(0,p.length)
C.a.h(p,l)}l=h.gcj(h)
f=g.d
e=l.gaK(l)
d=l.gaL(l)
l=l.gaM()
C.b.q(f.a,f.d,e,d,l)
l=h.gbH()
d=g.b
e=l.gaK(l)
f=l.gaL(l)
l=l.gaM()
C.b.q(d.a,d.d,e,f,l)
l=h.gb6(h)
f=g.c
e=l.gaK(l)
d=l.gaL(l)
l=l.gaM()
C.b.q(f.a,f.d,e,d,l)
l=k.cD(h.gcj(h))
d=l.a
e=l.b
f=l.c
f=l.w(0,Math.sqrt(d*d+e*e+f*f))
e=g.e
d=f.a
l=f.b
f=f.c
C.b.q(e.a,e.d,d,l,f)
f=h.gad(h)
l=g.f
d=f.gbG()
e=f.gbb()
f=f.gbm()
C.b.q(l.a,l.d,d,e,f)
f=h.gb7()
l=f.gb2(f)
if(!l){l=g.x
C.b.S(l.a,l.d,1)}else{l=g.r
e=f.gb2(f)
d=l.a
l=l.d
if(!e)C.b.S(d,l,0)
else C.b.S(d,l,f.gb1(f))
l=g.x
C.b.S(l.a,l.d,0)}++j}}if(w.cy>0){o=this.dx.y.length
u=this.a.dW
C.b.S(u.a,u.d,o)
k=a.db.gY()
for(u=this.dx.y,s=u.length,r=[P.w],l=[z],j=0,i=0;i<u.length;u.length===s||(0,H.y)(u),++i){h=u[i]
f=this.a.cp
if(j>=f.length)return H.h(f,j)
g=f[j]
f=h.gb7()
H.j(p,"$isb",l,"$asb")
if(!C.a.V(p,f)){f.sb1(0,p.length)
C.a.h(p,f)}c=k.t(0,h.gY())
f=h.gY()
e=$.bo
if(e==null){e=new V.a7(0,0,0)
$.bo=e}e=f.b9(e)
f=g.b
d=e.gcG(e)
b=e.gcH(e)
e=e.gcI(e)
C.b.q(f.a,f.d,d,b,e)
f=$.bo
if(f==null){f=new V.a7(0,0,0)
$.bo=f}f=c.b9(f)
e=g.c
C.b.q(e.a,e.d,f.a,f.b,f.c)
f=c.e_()
e=g.d
m=new Float32Array(H.bx(H.j(new V.e6(f.a,f.b,f.c,f.e,f.f,f.r,f.y,f.z,f.Q).a7(0,!0),"$isb",r,"$asb")))
C.b.ef(e.a,e.d,!1,m)
e=h.gad(h)
f=g.e
d=e.gbG()
b=e.gbb()
e=e.gbm()
C.b.q(f.a,f.d,d,b,e)
e=h.gb7()
f=e.gb2(e)
if(!f){f=g.r
C.b.S(f.a,f.d,1)}else{f=g.f
d=e.gb2(e)
b=f.a
f=f.d
if(!d)C.b.S(b,f,0)
else C.b.S(b,f,e.gb1(e))
f=g.r
C.b.S(f.a,f.d,0)}f=h.gc8()
e=g.x
C.b.J(e.a,e.d,f)
f=h.gc9()
e=g.y
C.b.J(e.a,e.d,f)
f=h.gca()
e=g.z
C.b.J(e.a,e.d,f);++j}}if(w.db>0){o=this.dx.z.length
u=this.a.dX
C.b.S(u.a,u.d,o)
k=a.db.gY()
for(u=this.dx.z,s=u.length,z=[z],j=0,i=0;i<u.length;u.length===s||(0,H.y)(u),++i){h=u[i]
r=this.a.cq
if(j>=r.length)return H.h(r,j)
g=r[j]
r=h.gb7()
H.j(p,"$isb",z,"$asb")
if(!C.a.V(p,r)){r.sb1(0,p.length)
C.a.h(p,r)}r=h.gb5(h)
l=g.b
f=r.gcG(r)
e=r.gcH(r)
r=r.gcI(r)
C.b.q(l.a,l.d,f,e,r)
r=h.gcj(h)
e=g.c
f=r.gaK(r)
l=r.gaL(r)
r=r.gaM()
C.b.q(e.a,e.d,f,l,r)
r=h.gbH()
l=g.d
f=r.gaK(r)
e=r.gaL(r)
r=r.gaM()
C.b.q(l.a,l.d,f,e,r)
r=h.gb6(h)
e=g.e
f=r.gaK(r)
l=r.gaL(r)
r=r.gaM()
C.b.q(e.a,e.d,f,l,r)
r=k.b9(h.gb5(h))
l=g.f
C.b.q(l.a,l.d,r.a,r.b,r.c)
r=h.gb7()
l=r.gb2(r)
if(!l){r=g.x
C.b.S(r.a,r.d,1)}else{l=g.r
f=r.gb2(r)
e=l.a
l=l.d
if(!f)C.b.S(e,l,0)
else C.b.S(e,l,r.gb1(r))
r=g.x
C.b.S(r.a,r.d,0)}r=h.gad(h)
l=g.y
f=r.gbG()
e=r.gbb()
r=r.gbm()
C.b.q(l.a,l.d,f,e,r)
r=h.gkf()
e=g.z
C.b.J(e.a,e.d,r)
r=h.gkg()
e=g.Q
C.b.J(e.a,e.d,r)
r=h.gc8()
e=g.ch
C.b.J(e.a,e.d,r)
r=h.gc9()
e=g.cx
C.b.J(e.a,e.d,r)
r=h.gca()
e=g.cy
C.b.J(e.a,e.d,r);++j}}}switch(w.f){case C.c:break
case C.f:break
case C.d:this.U(p,this.Q.d)
z=this.a
u=this.Q.d
z.ac(z.dI,z.bw,u)
break
case C.e:this.U(p,this.Q.e)
z=this.a
u=this.Q.e
z.a5(z.dJ,z.bw,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db.gY().e_()
a.Q=u}z=z.id
z.toString
z.ai(u.a7(0,!0))}if(w.dy){this.U(p,this.ch)
z=this.a
u=this.ch
z.a5(z.dK,z.dL,u)
switch(w.r){case C.c:break
case C.f:z=this.a
u=this.cx.f
z=z.bx
z.toString
s=u.a
r=u.b
u=u.c
C.b.q(z.a,z.d,s,r,u)
break
case C.d:this.U(p,this.cx.d)
z=this.a
u=this.cx.d
z.ac(z.dM,z.by,u)
u=this.a
z=this.cx.f
u=u.bx
u.toString
s=z.a
r=z.b
z=z.c
C.b.q(u.a,u.d,s,r,z)
break
case C.e:this.U(p,this.cx.e)
z=this.a
u=this.cx.e
z.a5(z.dN,z.by,u)
u=this.a
z=this.cx.f
u=u.bx
u.toString
s=z.a
r=z.b
z=z.c
C.b.q(u.a,u.d,s,r,z)
break}switch(w.x){case C.c:break
case C.f:z=this.a
u=this.cy.f
z=z.bA
z.toString
s=u.a
r=u.b
u=u.c
C.b.q(z.a,z.d,s,r,u)
u=this.a
r=this.cy.ch
u=u.bz
C.b.J(u.a,u.d,r)
break
case C.d:this.U(p,this.cy.d)
z=this.a
u=this.cy.d
z.ac(z.dO,z.bB,u)
u=this.a
z=this.cy.f
u=u.bA
u.toString
s=z.a
r=z.b
z=z.c
C.b.q(u.a,u.d,s,r,z)
z=this.a
r=this.cy.ch
z=z.bz
C.b.J(z.a,z.d,r)
break
case C.e:this.U(p,this.cy.e)
z=this.a
u=this.cy.e
z.a5(z.dP,z.bB,u)
u=this.a
z=this.cy.f
u=u.bA
u.toString
s=z.a
r=z.b
z=z.c
C.b.q(u.a,u.d,s,r,z)
z=this.a
r=this.cy.ch
z=z.bz
C.b.J(z.a,z.d,r)
break}}z=w.y
u=z!==C.c
if(u){switch(z){case C.c:break
case C.f:z=this.a
s=this.db.f
z=z.bC
C.b.J(z.a,z.d,s)
break
case C.d:this.U(p,this.db.d)
z=this.a
s=this.db.d
z.ac(z.dQ,z.bD,s)
s=this.a
z=this.db.f
s=s.bC
C.b.J(s.a,s.d,z)
break
case C.e:this.U(p,this.db.e)
z=this.a
s=this.db.e
z.a5(z.dR,z.bD,s)
s=this.a
z=this.db.f
s=s.bC
C.b.J(s.a,s.d,z)
break}C.b.ck(t,3042)
C.b.ii(t,770,771)}for(n=0;n<p.length;++n)p[n].bl(a)
z=a0.e
z.bl(a)
z.aR(a)
z.ee(a)
if(u)C.b.iD(t,3042)
for(n=0;n<p.length;++n)p[n].ee(a)
z=this.a
z.toString
C.b.eh(t,null)
z.x.iE()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.d_().af}},hU:{"^":"cK;0f,a,b,0c,0d,0e"},cK:{"^":"a;",
bh:["eH",function(){}]},hV:{"^":"cK;a,b,0c,0d,0e"},b0:{"^":"cK;0f,a,b,0c,0d,0e",
df:function(a){var z,y
if(!J.M(this.f,a)){z=this.f
this.f=a
y=new D.K(this.b+".color",z,a,this,[V.V])
y.b=!0
this.a.ab(y)}},
bh:["bL",function(){this.eH()
this.df(new V.V(1,1,1))}],
sad:function(a,b){var z
if(this.c===C.c){this.c=C.f
this.bh()
z=this.a
z.a=null
z.ab(null)}this.df(b)}},hX:{"^":"b0;0ch,0f,a,b,0c,0d,0e",
hr:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.K(this.b+".refraction",y,a,this,[P.w])
z.b=!0
this.a.ab(z)}},
bh:function(){this.bL()
this.hr(1)}},hY:{"^":"b0;0ch,0f,a,b,0c,0d,0e",
c5:function(a){var z,y
z=this.ch
if(!$.n.$2(z,a)){y=this.ch
this.ch=a
z=new D.K(this.b+".shininess",y,a,this,[P.w])
z.b=!0
this.a.ab(z)}},
bh:function(){this.bL()
this.c5(100)}},cb:{"^":"a;"}}],["","",,T,{"^":"",ex:{"^":"cw;"},iV:{"^":"a;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",bg:{"^":"a;",
aP:function(a){return!0},
i:function(a){return"all"},
$isau:1},au:{"^":"a;"},e5:{"^":"a;0a",
sa0:function(a){this.a=H.j(a,"$isb",[V.au],"$asb")},
aP:["eG",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)if(z[x].aP(a))return!0
return!1}],
i:["cP",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.y)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isau:1},an:{"^":"e5;0a",
aP:function(a){return!this.eG(a)},
i:function(a){return"!["+this.cP(0)+"]"}},io:{"^":"a;0a,0b",
aP:function(a){return this.a<=a&&this.b>=a},
i:function(a){var z,y
z=H.cO(this.a)
y=H.cO(this.b)
return z+".."+y},
$isau:1,
p:{
J:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.i(P.p("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.i.aD(a,0)
y=C.i.aD(b,0)
x=new V.io()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},iA:{"^":"a;0a",
shq:function(a){this.a=H.j(a,"$isac",[P.z,P.G],"$asac")},
eM:function(a){var z,y
if(a.a.length<=0)throw H.i(P.p("May not create a SetMatcher with zero characters."))
z=new H.b_(0,0,[P.z,P.G])
for(y=new H.cJ(a,a.gn(a),0,[H.Z(a,"R",0)]);y.A();)z.W(0,y.d,!0)
this.shq(z)},
aP:function(a){return this.a.dv(a)},
i:function(a){var z=this.a
return P.cU(new H.e0(z,[H.u(z,0)]),0,null)},
$isau:1,
p:{
q:function(a){var z=new V.iA()
z.eM(a)
return z}}},cR:{"^":"a;a,b,0c,0d",
shI:function(a){this.c=H.j(a,"$isb",[V.cY],"$asb")},
k:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.cY(this.a.j(0,b))
w.sa0(H.c([],[V.au]))
w.c=!1
C.a.h(this.c,w)
return w},
iH:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
if(w.aP(a))return w}return},
i:function(a){return this.b}},eE:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.dr(this.b,"\n","\\n")
y=H.dr(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},cX:{"^":"a;a,b,0c",
shj:function(a){var z=P.m
this.c=H.j(a,"$isac",[z,z],"$asac")},
aw:function(a,b,c){var z,y,x
H.j(c,"$isb",[P.m],"$asb")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.y)(c),++y){x=c[y]
this.c.W(0,x,b)}},
i:function(a){return this.b}},j_:{"^":"a;0a,0b,0c",
shB:function(a){this.a=H.j(a,"$isac",[P.m,V.cR],"$asac")},
shE:function(a){this.b=H.j(a,"$isac",[P.m,V.cX],"$asac")},
j:function(a,b){var z=this.a.l(0,b)
if(z==null){z=new V.cR(this,b)
z.shI(H.c([],[V.cY]))
z.d=null
this.a.W(0,b,z)}return z},
I:function(a){var z,y
z=this.b.l(0,a)
if(z==null){z=new V.cX(this,a)
y=P.m
z.shj(new H.b_(0,0,[y,y]))
this.b.W(0,a,z)}return z},
ed:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.eE])
y=this.c
x=[P.z]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.i.aD(a,t)
r=y.iH(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cU(w,0,null)
throw H.i(P.p("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cU(w,0,null)
p=y.d
o=p.c.l(0,q)
u=new V.eE(o==null?p.b:o,q,t)}++t}}},
p:{
cc:function(){var z,y
z=new V.j_()
y=P.m
z.shB(new H.b_(0,0,[y,V.cR]))
z.shE(new H.b_(0,0,[y,V.cX]))
z.c=null
return z}}},cY:{"^":"e5;b,0c,0a",
i:function(a){return this.b.b+": "+this.cP(0)}}}],["","",,X,{"^":"",dD:{"^":"a;",$isaB:1},hl:{"^":"eu;0a,0b,0c,0d,0e,0f,0r,0x",
gv:function(){var z=this.x
if(z==null){z=D.H()
this.x=z}return z}},i8:{"^":"a;0a,0b,0c,0d,0e,0f",
gv:function(){var z=this.f
if(z==null){z=D.H()
this.f=z}return z},
aU:[function(a){var z
H.e(a,"$isv")
z=this.f
if(!(z==null))z.E(a)},function(){return this.aU(null)},"jv","$1","$0","gcR",0,2,0],
se2:function(a){var z,y
if(!J.M(this.b,a)){z=this.b
if(z!=null)z.gv().R(0,this.gcR())
y=this.b
this.b=a
if(a!=null)a.gv().h(0,this.gcR())
z=new D.K("mover",y,this.b,this,[U.a5])
z.b=!0
this.aU(z)}},
$isaB:1,
$isdD:1},eu:{"^":"a;"}}],["","",,V,{"^":"",
l6:function(a){P.iZ(C.J,new V.l7(a))},
aN:{"^":"a;0d",
sbV:function(a){this.d=H.j(a,"$isb",[[P.b,W.aP]],"$asb")},
bf:function(a){this.b=new P.hr(C.L)
this.c=null
this.sbV(H.c([],[[P.b,W.aP]]))},
H:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.c([],[W.aP]))
y=a.split("\n")
for(z=y.length,x=[W.aP],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.c([],x))
t=document.createElement("div")
t.className="codePart"
H.C(u)
s=this.b.fh(u,0,u.length)
r=s==null?u:s
C.j.ey(t,H.dr(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gbE(this.d),t)}},
e5:function(a){var z,y,x,w
H.j(a,"$isb",[P.m],"$asb")
this.sbV(H.c([],[[P.b,W.aP]]))
z=C.a.k(a,"\n")
y=this.c
if(y==null){y=this.bn()
this.c=y}for(y=y.ed(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)this.bF(y[w])}},
l7:{"^":"t:39;a",
$1:function(a){H.e(a,"$isb3")
P.dq(C.k.ec(this.a.giM(),2)+" fps")}},
fZ:{"^":"aN;a,0b,0c,0d",
bF:function(a){switch(a.a){case"Class":this.H(a.b,"#551")
break
case"Comment":this.H(a.b,"#777")
break
case"Id":this.H(a.b,"#111")
break
case"Num":this.H(a.b,"#191")
break
case"Reserved":this.H(a.b,"#119")
break
case"String":this.H(a.b,"#171")
break
case"Symbol":this.H(a.b,"#616")
break
case"Type":this.H(a.b,"#B11")
break
case"Whitespace":this.H(a.b,"#111")
break}},
bn:function(){var z,y,x,w
z=V.cc()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.q(new H.o("_"))
C.a.h(y.a,x)
x=V.J("a","z")
C.a.h(y.a,x)
x=V.J("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.q(new H.o("_"))
C.a.h(x.a,y)
y=V.J("0","9")
C.a.h(x.a,y)
y=V.J("a","z")
C.a.h(x.a,y)
y=V.J("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Int")
x=V.J("0","9")
C.a.h(y.a,x)
x=z.j(0,"Int").k(0,"Int")
y=V.J("0","9")
C.a.h(x.a,y)
y=z.j(0,"Int").k(0,"FloatDot")
x=V.q(new H.o("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").k(0,"Float")
y=V.J("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").k(0,"Float")
x=V.J("0","9")
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
C.a.h(z.j(0,"OpenDoubleStr").k(0,"OpenDoubleStr").a,new V.bg())
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
C.a.h(z.j(0,"OpenSingleStr").k(0,"OpenSingleStr").a,new V.bg())
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
x=new V.an()
w=[V.au]
x.sa0(H.c([],w))
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
x=new V.an()
x.sa0(H.c([],w))
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
x.d=x.a.I("Num")
x=z.j(0,"Float")
x.d=x.a.I("Num")
x=z.j(0,"Sym")
x.d=x.a.I("Symbol")
x=z.j(0,"CloseDoubleStr")
x.d=x.a.I("String")
x=z.j(0,"CloseSingleStr")
x.d=x.a.I("String")
x=z.j(0,"EndComment")
x.d=x.a.I("Comment")
x=z.j(0,"Whitespace")
x.d=x.a.I("Whitespace")
x=z.j(0,"Id")
y=x.a.I("Id")
x.d=y
x=[P.m]
y.aw(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.aw(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.aw(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
hm:{"^":"aN;a,0b,0c,0d",
bF:function(a){switch(a.a){case"Builtin":this.H(a.b,"#411")
break
case"Comment":this.H(a.b,"#777")
break
case"Id":this.H(a.b,"#111")
break
case"Num":this.H(a.b,"#191")
break
case"Preprocess":this.H(a.b,"#737")
break
case"Reserved":this.H(a.b,"#119")
break
case"Symbol":this.H(a.b,"#611")
break
case"Type":this.H(a.b,"#171")
break
case"Whitespace":this.H(a.b,"#111")
break}},
bn:function(){var z,y,x,w
z=V.cc()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.q(new H.o("_"))
C.a.h(y.a,x)
x=V.J("a","z")
C.a.h(y.a,x)
x=V.J("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.q(new H.o("_"))
C.a.h(x.a,y)
y=V.J("0","9")
C.a.h(x.a,y)
y=V.J("a","z")
C.a.h(x.a,y)
y=V.J("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Int")
x=V.J("0","9")
C.a.h(y.a,x)
x=z.j(0,"Int").k(0,"Int")
y=V.J("0","9")
C.a.h(x.a,y)
y=z.j(0,"Int").k(0,"FloatDot")
x=V.q(new H.o("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").k(0,"Float")
y=V.J("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").k(0,"Float")
x=V.J("0","9")
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
C.a.h(z.j(0,"Slash").k(0,"Sym").a,new V.bg())
x=z.j(0,"Comment").k(0,"EndComment")
y=V.q(new H.o("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").k(0,"Comment")
x=new V.an()
w=[V.au]
x.sa0(H.c([],w))
C.a.h(y.a,x)
y=V.q(new H.o("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Preprocess")
x=V.q(new H.o("#"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").k(0,"Preprocess")
y=new V.an()
y.sa0(H.c([],w))
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
y.d=y.a.I("Num")
y=z.j(0,"Float")
y.d=y.a.I("Num")
y=z.j(0,"Sym")
y.d=y.a.I("Symbol")
y=z.j(0,"EndComment")
y.d=y.a.I("Comment")
y=z.j(0,"EndPreprocess")
y.d=y.a.I("Preprocess")
y=z.j(0,"Whitespace")
y.d=y.a.I("Whitespace")
y=z.j(0,"Id")
x=y.a.I("Id")
y.d=x
y=[P.m]
x.aw(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.aw(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.aw(0,"Builtin",H.c(["gl_FragColor","gl_Position"],y))
return z}},
hn:{"^":"aN;a,0b,0c,0d",
bF:function(a){switch(a.a){case"Attr":this.H(a.b,"#911")
this.H("=","#111")
break
case"Id":this.H(a.b,"#111")
break
case"Other":this.H(a.b,"#111")
break
case"Reserved":this.H(a.b,"#119")
break
case"String":this.H(a.b,"#171")
break
case"Symbol":this.H(a.b,"#616")
break}},
bn:function(){var z,y,x
z=V.cc()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.q(new H.o("_"))
C.a.h(y.a,x)
x=V.J("a","z")
C.a.h(y.a,x)
x=V.J("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.q(new H.o("_"))
C.a.h(x.a,y)
y=V.J("0","9")
C.a.h(x.a,y)
y=V.J("a","z")
C.a.h(x.a,y)
y=V.J("A","Z")
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
C.a.h(z.j(0,"OpenStr").k(0,"OpenStr").a,new V.bg())
C.a.h(z.j(0,"Start").k(0,"Other").a,new V.bg())
y=z.j(0,"Other").k(0,"Other")
x=new V.an()
x.sa0(H.c([],[V.au]))
C.a.h(y.a,x)
y=V.q(new H.o('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.J("a","z")
C.a.h(x.a,y)
y=V.J("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Sym")
y.d=y.a.I("Symbol")
y=z.j(0,"CloseStr")
y.d=y.a.I("String")
y=z.j(0,"Id")
x=y.a.I("Id")
y.d=x
x.aw(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.m]))
x=z.j(0,"Attr")
x.d=x.a.I("Attr")
x=z.j(0,"Other")
x.d=x.a.I("Other")
return z}},
ia:{"^":"aN;a,0b,0c,0d",
e5:function(a){H.j(a,"$isb",[P.m],"$asb")
this.sbV(H.c([],[[P.b,W.aP]]))
this.H(C.a.k(a,"\n"),"#111")},
bF:function(a){},
bn:function(){return}},
iG:{"^":"a;0a,0b",
eO:function(a,b){var z,y,x,w,v,u,t
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
t=W.a3
W.Y(z,"scroll",H.k(new V.iJ(x),{func:1,ret:-1,args:[t]}),!1,t)},
dl:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.j(a,"$isb",[P.m],"$asb")
this.hw()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.ed(C.a.iQ(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v){u=x[v]
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
if(H.fC(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.h(r,1)
q.href=H.C(r[1])
q.textContent=H.C(r[0])
C.j.B(y,q)}else{p=P.fj(C.B,s,C.x,!1)
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
en:function(a){var z,y,x,w
z=new V.fZ("dart")
z.bf("dart")
y=new V.hm("glsl")
y.bf("glsl")
x=new V.hn("html")
x.bf("html")
w=C.a.iJ(H.c([z,y,x],[V.aN]),new V.iK(a))
if(w!=null)return w
z=new V.ia("plain")
z.bf("plain")
return z},
dk:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.j(a2,"$isb",[P.m],"$asb")
z=H.c([],[P.z])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.dm(w).bJ(w,"+")){C.a.W(a2,x,C.i.bd(w,1))
C.a.h(z,1)
y=!0}else if(C.i.bJ(w,"-")){C.a.W(a2,x,C.i.bd(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.en(a0)
v.e5(a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
C.j.B(t,s)
C.j.B(this.a,t)
r=P.fj(C.B,a,C.x,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.dv(null)
n.href="#"+r
n.textContent=a
C.j.B(o,n)
C.v.B(p,o)
C.m.B(q,p)
C.o.B(s,q)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.y)(w),++e)C.v.B(f,w[e])
C.m.B(j,i)
C.m.B(j,h)
C.m.B(j,f)
C.o.B(s,j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.y)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gN(w);b.A();)C.v.B(h,b.gF())
C.m.B(j,i)
C.m.B(j,h)
C.o.B(s,j)}},
hw:function(){var z,y,x,w
if(this.b!=null)return
z=V.cc()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Bold")
x=V.q(new H.o("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Bold").k(0,"Bold")
x=new V.an()
w=[V.au]
x.sa0(H.c([],w))
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
x=new V.an()
x.sa0(H.c([],w))
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
x=new V.an()
x.sa0(H.c([],w))
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
y=new V.an()
y.sa0(H.c([],w))
C.a.h(x.a,y)
x=V.q(new H.o("|]"))
C.a.h(y.a,x)
x=z.j(0,"LinkTail").k(0,"LinkEnd")
y=V.q(new H.o("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkTail").k(0,"LinkTail")
y=new V.an()
y.sa0(H.c([],w))
C.a.h(x.a,y)
x=V.q(new H.o("|]"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Start").k(0,"Other").a,new V.bg())
x=z.j(0,"Other").k(0,"Other")
y=new V.an()
y.sa0(H.c([],w))
C.a.h(x.a,y)
x=V.q(new H.o("*_`["))
C.a.h(y.a,x)
x=z.j(0,"BoldEnd")
x.d=x.a.I("Bold")
x=z.j(0,"ItalicEnd")
x.d=x.a.I("Italic")
x=z.j(0,"CodeEnd")
x.d=x.a.I("Code")
x=z.j(0,"LinkEnd")
x.d=x.a.I("Link")
x=z.j(0,"Other")
x.d=x.a.I("Other")
this.b=z},
p:{
iH:function(a,b){var z=new V.iG()
z.eO(a,!0)
return z}}},
iJ:{"^":"t:40;a",
$1:function(a){P.eC(C.q,new V.iI(this.a))}},
iI:{"^":"t:2;a",
$0:function(){var z,y,x
z=C.k.ag(document.documentElement.scrollTop)
y=this.a.style
x=H.f(-0.01*z)+"px"
y.top=x}},
iK:{"^":"t:41;a",
$1:function(a){return H.e(a,"$isaN").a===this.a}}}],["","",,Q,{"^":"",
fy:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=V.iH("Test 009",!0)
y=W.dE(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
C.j.B(z.a,y)
x=[P.m]
z.dl(H.c(["Another test of the Material Lighting shader with solid color and ","a directional lighting. The light and object don't move but the camera can be ","moved around the object."],x))
z.dl(H.c(["\xab[Back to Tests|../]"],x))
w=C.y.eo(document,"testCanvas")
if(w==null)H.r(P.p("Failed to find an element with the identifier, testCanvas."))
v=E.iX(w,!0,!0,!0,!1)
u=new E.as()
u.a=""
u.b=!0
x=E.as
u.sff(0,O.cB(x))
u.y.bc(u.giX(),u.giZ())
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
u.scN(0,null)
u.scN(0,F.la(30,1,15,0.5))
t=new O.hR()
t.sfb(O.cB(V.ad))
t.e.bc(t.gfL(),t.gfM())
s=new O.b0(t,"emission")
s.c=C.c
s.f=new V.V(0,0,0)
t.f=s
s=new O.b0(t,"ambient")
s.c=C.c
s.f=new V.V(0,0,0)
t.r=s
s=new O.b0(t,"diffuse")
s.c=C.c
s.f=new V.V(0,0,0)
t.x=s
s=new O.b0(t,"invDiffuse")
s.c=C.c
s.f=new V.V(0,0,0)
t.y=s
s=new O.hY(t,"specular")
s.c=C.c
s.f=new V.V(0,0,0)
s.ch=100
t.z=s
s=new O.hV(t,"bump")
s.c=C.c
t.Q=s
t.ch=null
s=new O.b0(t,"reflect")
s.c=C.c
s.f=new V.V(0,0,0)
t.cx=s
s=new O.hX(t,"refract")
s.c=C.c
s.f=new V.V(0,0,0)
s.ch=1
t.cy=s
s=new O.hU(t,"alpha")
s.c=C.c
s.f=1
t.db=s
s=new D.hD()
s.bM(D.X)
s.sfl(H.c([],[D.bX]))
s.sha(H.c([],[D.ee]))
s.shA(H.c([],[D.eq]))
s.shJ(H.c([],[D.ey]))
s.shK(H.c([],[D.ez]))
s.shL(H.c([],[D.eA]))
s.Q=null
s.ch=null
s.cM(s.gfK(),s.gh4(),s.gh6())
t.dx=s
r=s.Q
if(r==null){r=D.H()
s.Q=r
s=r}else s=r
s.h(0,t.ghl())
s=t.dx
r=s.ch
if(r==null){r=D.H()
s.ch=r
s=r}else s=r
s.h(0,t.gfO())
t.dy=null
s=t.dx
q=V.eY()
r=U.dI(V.e7(V.eg(),q,new V.S(-1,-1,-1)))
p=new V.V(1,1,1)
o=new D.bX()
o.c=new V.V(1,1,1)
o.a=V.eZ()
n=o.b
o.b=r
r.gv().h(0,o.geV())
r=new D.K("mover",n,o.b,o,[U.a5])
r.b=!0
o.aA(r)
if(!o.c.u(0,p)){n=o.c
o.c=p
r=new D.K("color",n,p,o,[V.V])
r.b=!0
o.aA(r)}s.h(0,o)
t.f.sad(0,new V.V(0,0,0))
s=t.r
s.sad(0,new V.V(0,0,1))
s=t.x
s.sad(0,new V.V(0,1,0))
s=t.z
s.sad(0,new V.V(1,0,0))
s=t.z
if(s.c===C.c){s.c=C.f
s.bL()
s.c5(100)
r=s.a
r.a=null
r.ab(null)}s.c5(10)
m=new U.dV()
m.bM(U.a5)
m.bc(m.gfJ(),m.gh5())
m.e=null
m.f=V.bK()
m.r=0
s=v.r
r=new U.jj()
o=U.cC()
o.scF(0,!0)
o.sct(6.283185307179586)
o.scv(0)
o.sa2(0,0)
o.scu(100)
o.sT(0)
o.sci(0.5)
r.b=o
l=r.gaB()
o.gv().h(0,l)
o=U.cC()
o.scF(0,!0)
o.sct(6.283185307179586)
o.scv(0)
o.sa2(0,0)
o.scu(100)
o.sT(0)
o.sci(0.5)
r.c=o
o.gv().h(0,l)
r.d=null
r.e=!1
r.f=!1
r.r=!1
r.x=2.5
r.y=2.5
r.z=2
r.Q=4
r.cx=!1
r.ch=!1
r.cy=0
r.db=0
r.dx=null
r.dy=0
r.fr=null
r.fx=null
k=new X.aw(!1,!1,!1)
n=r.d
r.d=k
o=[X.aw]
l=new D.K("modifiers",n,k,r,o)
l.b=!0
r.O(l)
l=r.f
if(l!==!1){r.f=!1
l=new D.K("invertX",l,!1,r,[P.G])
l.b=!0
r.O(l)}l=r.r
if(l!==!0){r.r=!0
l=new D.K("invertY",l,!0,r,[P.G])
l.b=!0
r.O(l)}r.b_(s)
m.h(0,r)
s=v.r
r=new U.ji()
l=U.cC()
l.scF(0,!0)
l.sct(6.283185307179586)
l.scv(0)
l.sa2(0,0)
l.scu(100)
l.sT(0)
l.sci(0.2)
r.b=l
l.gv().h(0,r.gaB())
r.c=null
r.d=!1
r.e=2.5
r.f=2
r.r=4
r.y=!1
r.x=!1
r.z=0
r.Q=null
r.ch=0
r.cx=null
r.cy=null
k=new X.aw(!0,!1,!1)
n=r.c
r.c=k
l=new D.K("modifiers",n,k,r,o)
l.b=!0
r.O(l)
r.b_(s)
m.h(0,r)
s=v.r
r=new U.jk()
r.c=0.01
r.d=0
r.e=0
k=new X.aw(!1,!1,!1)
r.b=k
o=new D.K("modifiers",null,k,r,o)
o.b=!0
r.O(o)
r.b_(s)
m.h(0,r)
m.h(0,U.dI(V.av(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
s=new M.hb()
s.seW(0,O.cB(x))
s.d.bc(s.gfP(),s.gfQ())
s.e=null
s.f=null
s.r=null
s.x=null
j=new X.i8()
j.c=1.0471975511965976
j.d=0.1
j.e=2000
j.se2(null)
x=j.c
if(!$.n.$2(x,1.0471975511965976)){n=j.c
j.c=1.0471975511965976
x=new D.K("fov",n,1.0471975511965976,j,[P.w])
x.b=!0
j.aU(x)}x=j.d
if(!$.n.$2(x,0.1)){n=j.d
j.d=0.1
x=new D.K("near",n,0.1,j,[P.w])
x.b=!0
j.aU(x)}x=j.e
if(!$.n.$2(x,2000)){n=j.e
j.e=2000
x=new D.K("far",n,2000,j,[P.w])
x.b=!0
j.aU(x)}x=s.a
if(x!==j){if(x!=null)x.gv().R(0,s.gaj())
n=s.a
s.a=j
j.gv().h(0,s.gaj())
x=new D.K("camera",n,s.a,s,[X.dD])
x.b=!0
s.aC(x)}i=new X.hl()
x=new V.bU(0,0,0,1)
i.a=x
i.b=!0
i.c=2000
i.d=!0
i.e=0
i.f=!1
x=$.em
if(x==null){x=V.el(0,0,1,1)
$.em=x}i.r=x
x=s.b
if(x!==i){if(x!=null)x.gv().R(0,s.gaj())
n=s.b
s.b=i
i.gv().h(0,s.gaj())
x=new D.K("target",n,s.b,s,[X.eu])
x.b=!0
s.aC(x)}s.sea(null)
s.sea(t)
s.d.h(0,u)
s.a.se2(m)
x=v.d
if(x!==s){if(x!=null)x.gv().R(0,v.gcQ())
v.d=s
s.gv().h(0,v.gcQ())
v.eR()}x=v.z
if(x==null){x=D.H()
v.z=x}s={func:1,ret:-1,args:[D.v]}
r=H.k(new Q.l_(z,t),s)
if(x.b==null)x.saX(H.c([],[s]))
x=x.b;(x&&C.a).h(x,r)
V.l6(v)},
l_:{"^":"t:7;a,b",
$1:function(a){var z,y,x,w
H.e(a,"$isv")
z=this.a
y=this.b
x=y.a
w=[P.m]
z.dk("Vertex Shader","glsl",0,H.c((x==null?null:x.c).split("\n"),w))
y=y.a
z.dk("Fragment Shader","glsl",0,H.c((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.Q=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dX.prototype
return J.hy.prototype}if(typeof a=="string")return J.bG.prototype
if(a==null)return J.dY.prototype
if(typeof a=="boolean")return J.hx.prototype
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bH.prototype
return a}if(a instanceof P.a)return a
return J.cm(a)}
J.cl=function(a){if(typeof a=="string")return J.bG.prototype
if(a==null)return a
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bH.prototype
return a}if(a instanceof P.a)return a
return J.cm(a)}
J.dl=function(a){if(a==null)return a
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bH.prototype
return a}if(a instanceof P.a)return a
return J.cm(a)}
J.kL=function(a){if(typeof a=="number")return J.bF.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bN.prototype
return a}
J.kM=function(a){if(typeof a=="number")return J.bF.prototype
if(typeof a=="string")return J.bG.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bN.prototype
return a}
J.dm=function(a){if(typeof a=="string")return J.bG.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bN.prototype
return a}
J.a1=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bH.prototype
return a}if(a instanceof P.a)return a
return J.cm(a)}
J.M=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Q(a).u(a,b)}
J.fE=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kL(a).ah(a,b)}
J.ds=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kM(a).t(a,b)}
J.fF=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kX(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cl(a).l(a,b)}
J.fG=function(a,b,c,d){return J.a1(a).f7(a,b,c,d)}
J.bR=function(a,b){return J.a1(a).he(a,b)}
J.dt=function(a,b){return J.a1(a).B(a,b)}
J.cs=function(a,b,c){return J.cl(a).iq(a,b,c)}
J.ct=function(a,b){return J.dl(a).a1(a,b)}
J.fH=function(a){return J.a1(a).gie(a)}
J.aW=function(a){return J.Q(a).gX(a)}
J.bf=function(a){return J.dl(a).gN(a)}
J.aX=function(a){return J.cl(a).gn(a)}
J.fI=function(a){return J.a1(a).gj8(a)}
J.fJ=function(a){return J.a1(a).gjl(a)}
J.cu=function(a,b){return J.a1(a).aT(a,b)}
J.du=function(a){return J.dl(a).ja(a)}
J.fK=function(a,b,c){return J.dm(a).be(a,b,c)}
J.fL=function(a){return J.dm(a).jp(a)}
J.ap=function(a){return J.Q(a).i(a)}
I.aV=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.n=W.bS.prototype
C.p=W.cz.prototype
C.j=W.aP.prototype
C.I=W.h3.prototype
C.K=W.ho.prototype
C.y=W.hq.prototype
C.M=J.I.prototype
C.a=J.aZ.prototype
C.h=J.dX.prototype
C.r=J.dY.prototype
C.k=J.bF.prototype
C.i=J.bG.prototype
C.T=J.bH.prototype
C.X=W.i2.prototype
C.C=J.i9.prototype
C.D=W.im.prototype
C.b=P.cP.prototype
C.v=W.iS.prototype
C.o=W.iT.prototype
C.m=W.iU.prototype
C.w=J.bN.prototype
C.E=W.bv.prototype
C.F=W.jB.prototype
C.G=new P.i7()
C.H=new P.jm()
C.l=new P.k7()
C.c=new A.bV(0,"ColorSourceType.None")
C.f=new A.bV(1,"ColorSourceType.Solid")
C.d=new A.bV(2,"ColorSourceType.Texture2D")
C.e=new A.bV(3,"ColorSourceType.TextureCube")
C.q=new P.bi(0)
C.J=new P.bi(5e6)
C.L=new P.hs("element",!0,!1,!1,!1)
C.N=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.O=function(hooks) {
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

C.P=function(getTagFallback) {
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
C.Q=function() {
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
C.R=function(hooks) {
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
C.S=function(hooks) {
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
C.U=H.c(I.aV(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.m])
C.V=H.c(I.aV(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.m])
C.W=H.c(I.aV([]),[P.m])
C.B=H.c(I.aV([0,0,65498,45055,65535,34815,65534,18431]),[P.z])
C.t=H.c(I.aV(["bind","if","ref","repeat","syntax"]),[P.m])
C.u=H.c(I.aV(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.m])
C.x=new P.jl(!1)
$.ar=0
$.bh=null
$.dy=null
$.dc=!1
$.fw=null
$.fr=null
$.fB=null
$.ck=null
$.co=null
$.dn=null
$.b8=null
$.by=null
$.bz=null
$.dd=!1
$.L=C.l
$.aA=null
$.cD=null
$.dT=null
$.dS=null
$.dO=null
$.dN=null
$.dM=null
$.dL=null
$.n=V.hZ()
$.e8=null
$.ef=null
$.bo=null
$.em=null
$.eT=null
$.eX=null
$.eV=null
$.eW=null
$.ce=null
$.eU=null
$.ed=null
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
I.$lazy(y,x,w)}})(["dK","$get$dK",function(){return H.fv("_$dart_dartClosure")},"cG","$get$cG",function(){return H.fv("_$dart_js")},"eG","$get$eG",function(){return H.ay(H.cd({
toString:function(){return"$receiver$"}}))},"eH","$get$eH",function(){return H.ay(H.cd({$method$:null,
toString:function(){return"$receiver$"}}))},"eI","$get$eI",function(){return H.ay(H.cd(null))},"eJ","$get$eJ",function(){return H.ay(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eN","$get$eN",function(){return H.ay(H.cd(void 0))},"eO","$get$eO",function(){return H.ay(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eL","$get$eL",function(){return H.ay(H.eM(null))},"eK","$get$eK",function(){return H.ay(function(){try{null.$method$}catch(z){return z.message}}())},"eQ","$get$eQ",function(){return H.ay(H.eM(void 0))},"eP","$get$eP",function(){return H.ay(function(){try{(void 0).$method$}catch(z){return z.message}}())},"d9","$get$d9",function(){return P.jC()},"bA","$get$bA",function(){return[]},"fi","$get$fi",function(){return P.ir("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dJ","$get$dJ",function(){return{}},"f8","$get$f8",function(){return P.e1(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.m)},"da","$get$da",function(){return P.hH(P.m,P.bE)},"f1","$get$f1",function(){return Z.ah(0)},"f_","$get$f_",function(){return Z.ah(511)},"aI","$get$aI",function(){return Z.ah(1)},"aH","$get$aH",function(){return Z.ah(2)},"aG","$get$aG",function(){return Z.ah(4)},"aJ","$get$aJ",function(){return Z.ah(8)},"aK","$get$aK",function(){return Z.ah(16)},"bt","$get$bt",function(){return Z.ah(32)},"bu","$get$bu",function(){return Z.ah(64)},"f0","$get$f0",function(){return Z.ah(96)},"b6","$get$b6",function(){return Z.ah(128)},"aF","$get$aF",function(){return Z.ah(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.v]},{func:1,ret:-1,args:[D.v]},{func:1,ret:P.F},{func:1,ret:-1},{func:1,ret:-1,args:[W.am]},{func:1,ret:P.F,args:[F.a_]},{func:1,ret:-1,args:[P.z,[P.l,E.as]]},{func:1,ret:P.F,args:[D.v]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.a3]},{func:1,ret:-1,args:[W.b4]},{func:1,ret:P.G,args:[P.m]},{func:1,ret:P.G,args:[W.ax]},{func:1,args:[,]},{func:1,ret:P.F,args:[{func:1,ret:-1,args:[D.v]}]},{func:1,ret:P.F,args:[,]},{func:1,ret:-1,args:[W.bm]},{func:1,ret:P.F,args:[,,]},{func:1,ret:-1,args:[P.z,[P.l,D.X]]},{func:1,ret:P.w},{func:1,ret:-1,args:[P.z,[P.l,U.a5]]},{func:1,ret:P.m,args:[P.z]},{func:1,ret:-1,args:[P.z,[P.l,V.ad]]},{func:1,ret:P.G,args:[W.A]},{func:1,ret:P.G,args:[W.N,P.m,P.m,W.bO]},{func:1,args:[W.a3]},{func:1,ret:P.m,args:[P.m]},{func:1,ret:-1,args:[W.A,W.A]},{func:1,ret:W.N,args:[W.A]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,args:[,P.m]},{func:1,args:[P.m]},{func:1,ret:P.F,args:[,],opt:[,]},{func:1,ret:[P.aL,,],args:[,]},{func:1,ret:-1,args:[W.bv]},{func:1,ret:P.G,args:[P.w,P.w]},{func:1,ret:V.a7,args:[P.w]},{func:1,ret:P.F,args:[F.aE,P.w,P.w]},{func:1,ret:P.G,args:[[P.l,D.X]]},{func:1,ret:P.F,args:[P.b3]},{func:1,ret:P.F,args:[W.a3]},{func:1,ret:P.G,args:[V.aN]},{func:1,ret:P.F,args:[P.a9]}]
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
if(x==y)H.l9(d||a)
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
Isolate.aV=a.aV
Isolate.dj=a.dj
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
if(typeof dartMainRunner==="function")dartMainRunner(Q.fy,[])
else Q.fy([])})})()
//# sourceMappingURL=test.dart.js.map
