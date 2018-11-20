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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isz)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
var dart=[["","",,H,{"^":"",ko:{"^":"a;a"}}],["","",,J,{"^":"",
cZ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c1:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cY==null){H.k0()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.e(P.ef("Return interceptor for "+H.d(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cj()]
if(v!=null)return v
v=H.k5(a)
if(v!=null)return v
if(typeof a=="function")return C.N
y=Object.getPrototypeOf(a)
if(y==null)return C.x
if(y===Object.prototype)return C.x
if(typeof w=="function"){Object.defineProperty(w,$.$get$cj(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
z:{"^":"a;",
n:function(a,b){return a===b},
gH:function(a){return H.b_(a)},
i:["cM",function(a){return"Instance of '"+H.aC(a)+"'"}],
"%":"CanvasRenderingContext2D|DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo|WebGLRenderbuffer|WebGLTexture"},
fZ:{"^":"z;",
i:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$isD:1},
h0:{"^":"z;",
n:function(a,b){return null==b},
i:function(a){return"null"},
gH:function(a){return 0},
$isB:1},
ck:{"^":"z;",
gH:function(a){return 0},
i:["cO",function(a){return String(a)}]},
hr:{"^":"ck;"},
bT:{"^":"ck;"},
bj:{"^":"ck;",
i:function(a){var z=a[$.$get$dh()]
if(z==null)return this.cO(a)
return"JavaScript function for "+H.d(J.V(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbh:1},
az:{"^":"z;$ti",
h:function(a,b){H.u(b,H.o(a,0))
if(!!a.fixed$length)H.M(P.ae("add"))
a.push(b)},
J:function(a,b){var z
if(!!a.fixed$length)H.M(P.ae("remove"))
for(z=0;z<a.length;++z)if(J.P(a[z],b)){a.splice(z,1)
return!0}return!1},
R:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.o(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.e(P.am(a))}},
k:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.F(z,y,H.d(a[y]))
return z.join(b)},
eT:function(a){return this.k(a,"")},
eN:function(a,b,c){var z,y,x
H.f(b,{func:1,ret:P.D,args:[H.o(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.e(P.am(a))}throw H.e(H.ci())},
eM:function(a,b){return this.eN(a,b,null)},
O:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
cL:function(a,b,c){var z=a.length
if(b>z)throw H.e(P.W(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.e(P.W(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.o(a,0)])
return H.b(a.slice(b,c),[H.o(a,0)])},
gaF:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.e(H.ci())},
bV:function(a,b){var z,y
H.f(b,{func:1,ret:P.D,args:[H.o(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.e(P.am(a))}return!1},
I:function(a,b){var z
for(z=0;z<a.length;++z)if(J.P(a[z],b))return!0
return!1},
i:function(a){return P.ch(a,"[","]")},
gD:function(a){return new J.af(a,a.length,0,[H.o(a,0)])},
gH:function(a){return H.b_(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.M(P.ae("set length"))
if(b<0)throw H.e(P.W(b,0,null,"newLength",null))
a.length=b},
F:function(a,b,c){H.u(c,H.o(a,0))
if(!!a.immutable$list)H.M(P.ae("indexed set"))
if(b>=a.length||b<0)throw H.e(H.ba(a,b))
a[b]=c},
$isp:1,
$isc:1,
m:{
fY:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.cb(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.W(a,0,4294967295,"length",null))
return J.ds(new Array(a),b)},
ds:function(a,b){return J.bF(H.b(a,[b]))},
bF:function(a){H.c4(a)
a.fixed$length=Array
return a}}},
kn:{"^":"az;$ti"},
af:{"^":"a;a,b,c,0d,$ti",
sbv:function(a){this.d=H.u(a,H.o(this,0))},
gA:function(){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.e(H.w(z))
x=this.c
if(x>=y){this.sbv(null)
return!1}this.sbv(z[x]);++this.c
return!0},
$isap:1},
bG:{"^":"z;",
bb:function(a,b){var z
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){z=C.h.gaE(b)
if(this.gaE(a)===z)return 0
if(this.gaE(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaE:function(a){return a===0?1/a<0:a<0},
c2:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.e(P.ae(""+a+".floor()"))},
Z:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.ae(""+a+".round()"))},
en:function(a,b,c){if(C.h.bb(b,c)>0)throw H.e(H.at(b))
if(this.bb(a,b)<0)return b
if(this.bb(a,c)>0)return c
return a},
fq:function(a,b){var z
if(b>20)throw H.e(P.W(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gaE(a))return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){return a&0x1FFFFFFF},
cD:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
aA:function(a,b){return(a|0)===a?a/b|0:this.e7(a,b)},
e7:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.e(P.ae("Result of truncating division is "+H.d(z)+": "+H.d(a)+" ~/ "+b))},
az:function(a,b){var z
if(a>0)z=this.e4(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
e4:function(a,b){return b>31?0:a>>>b},
aL:function(a,b){if(typeof b!=="number")throw H.e(H.at(b))
return a<b},
$isr:1,
$isa6:1},
dt:{"^":"bG;",$isv:1},
h_:{"^":"bG;"},
bH:{"^":"z;",
ba:function(a,b){if(b<0)throw H.e(H.ba(a,b))
if(b>=a.length)H.M(H.ba(a,b))
return a.charCodeAt(b)},
aa:function(a,b){if(b>=a.length)throw H.e(H.ba(a,b))
return a.charCodeAt(b)},
E:function(a,b){H.y(b)
if(typeof b!=="string")throw H.e(P.cb(b,null,null))
return a+b},
cK:function(a,b,c){var z
if(c>a.length)throw H.e(P.W(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
aN:function(a,b){return this.cK(a,b,0)},
au:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.bO(b,null,null))
if(b>c)throw H.e(P.bO(b,null,null))
if(c>a.length)throw H.e(P.bO(c,null,null))
return a.substring(b,c)},
aO:function(a,b){return this.au(a,b,null)},
fp:function(a){return a.toLowerCase()},
P:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.B)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
f4:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.P(c,z)+a},
W:function(a,b){return this.f4(a,b," ")},
es:function(a,b,c){if(c>a.length)throw H.e(P.W(c,0,a.length,null,null))
return H.eZ(a,b,c)},
i:function(a){return a},
gH:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$isdH:1,
$isi:1}}],["","",,H,{"^":"",
ci:function(){return new P.ct("No element")},
fX:function(){return new P.ct("Too many elements")},
l:{"^":"iz;a",
gl:function(a){return this.a.length},
u:function(a,b){return C.c.ba(this.a,b)},
$aseg:function(){return[P.v]},
$asH:function(){return[P.v]},
$asp:function(){return[P.v]},
$asc:function(){return[P.v]}},
dn:{"^":"p;"},
bJ:{"^":"dn;$ti",
gD:function(a){return new H.cm(this,this.gl(this),0,[H.au(this,"bJ",0)])},
bk:function(a,b){return this.cN(0,H.f(b,{func:1,ret:P.D,args:[H.au(this,"bJ",0)]}))}},
cm:{"^":"a;a,b,c,0d,$ti",
sam:function(a){this.d=H.u(a,H.o(this,0))},
gA:function(){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.c0(z)
x=y.gl(z)
if(this.b!==x)throw H.e(P.am(z))
w=this.c
if(w>=x){this.sam(null)
return!1}this.sam(y.O(z,w));++this.c
return!0},
$isap:1},
he:{"^":"p;a,b,$ti",
gD:function(a){return new H.hf(J.aS(this.a),this.b,this.$ti)},
gl:function(a){return J.ax(this.a)},
O:function(a,b){return this.b.$1(J.c8(this.a,b))},
$asp:function(a,b){return[b]}},
hf:{"^":"ap;0a,b,c,$ti",
sam:function(a){this.a=H.u(a,H.o(this,1))},
t:function(){var z=this.b
if(z.t()){this.sam(this.c.$1(z.gA()))
return!0}this.sam(null)
return!1},
gA:function(){return this.a},
$asap:function(a,b){return[b]}},
hg:{"^":"bJ;a,b,$ti",
gl:function(a){return J.ax(this.a)},
O:function(a,b){return this.b.$1(J.c8(this.a,b))},
$asbJ:function(a,b){return[b]},
$asp:function(a,b){return[b]}},
cI:{"^":"p;a,b,$ti",
gD:function(a){return new H.iM(J.aS(this.a),this.b,this.$ti)}},
iM:{"^":"ap;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gA()))return!0
return!1},
gA:function(){return this.a.gA()}},
bE:{"^":"a;$ti"},
eg:{"^":"a;$ti"},
iz:{"^":"bI+eg;"}}],["","",,H,{"^":"",
aR:function(a){var z,y
z=H.y(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
jU:function(a){return init.types[H.O(a)]},
k3:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.G(a).$isa2},
d:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.V(a)
if(typeof z!=="string")throw H.e(H.at(a))
return z},
b_:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aC:function(a){return H.ht(a)+H.cR(H.av(a),0,null)},
ht:function(a){var z,y,x,w,v,u,t,s,r
z=J.G(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.G||!!z.$isbT){u=C.w(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aR(w.length>1&&C.c.aa(w,0)===36?C.c.aO(w,1):w)},
dM:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
hB:function(a){var z,y,x,w
z=H.b([],[P.v])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.w)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.e(H.at(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.az(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.e(H.at(w))}return H.dM(z)},
dN:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.e(H.at(x))
if(x<0)throw H.e(H.at(x))
if(x>65535)return H.hB(a)}return H.dM(a)},
cp:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.az(z,10))>>>0,56320|z&1023)}throw H.e(P.W(a,0,1114111,null,null))},
aB:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hA:function(a){var z=H.aB(a).getFullYear()+0
return z},
hy:function(a){var z=H.aB(a).getMonth()+1
return z},
hu:function(a){var z=H.aB(a).getDate()+0
return z},
hv:function(a){var z=H.aB(a).getHours()+0
return z},
hx:function(a){var z=H.aB(a).getMinutes()+0
return z},
hz:function(a){var z=H.aB(a).getSeconds()+0
return z},
hw:function(a){var z=H.aB(a).getMilliseconds()+0
return z},
aO:function(a){throw H.e(H.at(a))},
j:function(a,b){if(a==null)J.ax(a)
throw H.e(H.ba(a,b))},
ba:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ak(!0,b,"index",null)
z=H.O(J.ax(a))
if(!(b<0)){if(typeof z!=="number")return H.aO(z)
y=b>=z}else y=!0
if(y)return P.ay(b,a,"index",null,z)
return P.bO(b,"index",null)},
jQ:function(a,b,c){if(a>c)return new P.bN(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bN(a,c,!0,b,"end","Invalid value")
return new P.ak(!0,b,"end",null)},
at:function(a){return new P.ak(!0,a,null,null)},
e:function(a){var z
if(a==null)a=new P.dG()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.f_})
z.name=""}else z.toString=H.f_
return z},
f_:function(){return J.V(this.dartException)},
M:function(a){throw H.e(a)},
w:function(a){throw H.e(P.am(a))},
X:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.ke(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.az(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cl(H.d(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dF(H.d(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$e4()
u=$.$get$e5()
t=$.$get$e6()
s=$.$get$e7()
r=$.$get$eb()
q=$.$get$ec()
p=$.$get$e9()
$.$get$e8()
o=$.$get$ee()
n=$.$get$ed()
m=v.U(y)
if(m!=null)return z.$1(H.cl(H.y(y),m))
else{m=u.U(y)
if(m!=null){m.method="call"
return z.$1(H.cl(H.y(y),m))}else{m=t.U(y)
if(m==null){m=s.U(y)
if(m==null){m=r.U(y)
if(m==null){m=q.U(y)
if(m==null){m=p.U(y)
if(m==null){m=s.U(y)
if(m==null){m=o.U(y)
if(m==null){m=n.U(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dF(H.y(y),m))}}return z.$1(new H.iy(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dW()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ak(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dW()
return a},
aN:function(a){var z
if(a==null)return new H.eC(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eC(a)},
jS:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.F(0,a[y],a[x])}return b},
k2:function(a,b,c,d,e,f){H.h(a,"$isbh")
switch(H.O(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.K("Unsupported number of arguments for wrapped closure"))},
b9:function(a,b){var z
H.O(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.k2)
a.$identity=z
return z},
fh:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.G(d).$isc){z.$reflectionInfo=d
x=H.hG(z).r}else x=d
w=e?Object.create(new H.i1().constructor.prototype):Object.create(new H.cc(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.a7
if(typeof u!=="number")return u.E()
$.a7=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.dd(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.jU,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.d7:H.cd
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.e("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.dd(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w["call*"]=q
w.$R=z.$R
w.$D=z.$D
return v},
fe:function(a,b,c,d){var z=H.cd
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dd:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fg(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fe(y,!w,z,b)
if(y===0){w=$.a7
if(typeof w!=="number")return w.E()
$.a7=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aU
if(v==null){v=H.bx("self")
$.aU=v}return new Function(w+H.d(v)+";return "+u+"."+H.d(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a7
if(typeof w!=="number")return w.E()
$.a7=w+1
t+=w
w="return function("+t+"){return this."
v=$.aU
if(v==null){v=H.bx("self")
$.aU=v}return new Function(w+H.d(v)+"."+H.d(z)+"("+t+");}")()},
ff:function(a,b,c,d){var z,y
z=H.cd
y=H.d7
switch(b?-1:a){case 0:throw H.e(H.hP("Intercepted function with no arguments."))
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
z=$.aU
if(z==null){z=H.bx("self")
$.aU=z}y=$.d6
if(y==null){y=H.bx("receiver")
$.d6=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.ff(w,!u,x,b)
if(w===1){z="return function(){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+");"
y=$.a7
if(typeof y!=="number")return y.E()
$.a7=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+", "+s+");"
y=$.a7
if(typeof y!=="number")return y.E()
$.a7=y+1
return new Function(z+y+"}")()},
cU:function(a,b,c,d,e,f,g){return H.fh(a,b,H.O(c),d,!!e,!!f,g)},
y:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.a5(a,"String"))},
kN:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.a5(a,"double"))},
k8:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.a5(a,"num"))},
cS:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.a5(a,"bool"))},
O:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.a5(a,"int"))},
eX:function(a,b){throw H.e(H.a5(a,H.aR(H.y(b).substring(3))))},
ka:function(a,b){throw H.e(H.fc(a,H.aR(H.y(b).substring(3))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.G(a)[b])return a
H.eX(a,b)},
aP:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.G(a)[b]
else z=!0
if(z)return a
H.ka(a,b)},
c4:function(a){if(a==null)return a
if(!!J.G(a).$isc)return a
throw H.e(H.a5(a,"List<dynamic>"))},
k4:function(a,b){var z
if(a==null)return a
z=J.G(a)
if(!!z.$isc)return a
if(z[b])return a
H.eX(a,b)},
eP:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.O(z)]
else return a.$S()}return},
bu:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.eP(J.G(a))
if(z==null)return!1
return H.eG(z,null,b,null)},
f:function(a,b){var z,y
if(a==null)return a
if($.cO)return a
$.cO=!0
try{if(H.bu(a,b))return a
z=H.c6(b)
y=H.a5(a,z)
throw H.e(y)}finally{$.cO=!1}},
cW:function(a,b){if(a!=null&&!H.cT(a,b))H.M(H.a5(a,H.c6(b)))
return a},
eK:function(a){var z,y
z=J.G(a)
if(!!z.$isq){y=H.eP(z)
if(y!=null)return H.c6(y)
return"Closure"}return H.aC(a)},
kd:function(a){throw H.e(new P.fk(H.y(a)))},
eR:function(a){return init.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
av:function(a){if(a==null)return
return a.$ti},
kO:function(a,b,c){return H.aQ(a["$as"+H.d(c)],H.av(b))},
c2:function(a,b,c,d){var z
H.y(c)
H.O(d)
z=H.aQ(a["$as"+H.d(c)],H.av(b))
return z==null?null:z[d]},
au:function(a,b,c){var z
H.y(b)
H.O(c)
z=H.aQ(a["$as"+H.d(b)],H.av(a))
return z==null?null:z[c]},
o:function(a,b){var z
H.O(b)
z=H.av(a)
return z==null?null:z[b]},
c6:function(a){return H.as(a,null)},
as:function(a,b){var z,y
H.n(b,"$isc",[P.i],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aR(a[0].builtin$cls)+H.cR(a,1,b)
if(typeof a=="function")return H.aR(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.O(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.j(b,y)
return H.d(b[y])}if('func' in a)return H.jE(a,b)
if('futureOr' in a)return"FutureOr<"+H.as("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jE:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.i]
H.n(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.b([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.j(b,r)
t=C.c.E(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.as(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.as(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.as(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.as(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.jR(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.y(z[l])
n=n+m+H.as(i[h],b)+(" "+H.d(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
cR:function(a,b,c){var z,y,x,w,v,u
H.n(c,"$isc",[P.i],"$asc")
if(a==null)return""
z=new P.bP("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.as(u,c)}return"<"+z.i(0)+">"},
aQ:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bt:function(a,b,c,d){var z,y
H.y(b)
H.c4(c)
H.y(d)
if(a==null)return!1
z=H.av(a)
y=J.G(a)
if(y[b]==null)return!1
return H.eN(H.aQ(y[d],z),null,c,null)},
n:function(a,b,c,d){H.y(b)
H.c4(c)
H.y(d)
if(a==null)return a
if(H.bt(a,b,c,d))return a
throw H.e(H.a5(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aR(b.substring(3))+H.cR(c,0,null),init.mangledGlobalNames)))},
eN:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a1(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a1(a[y],b,c[y],d))return!1
return!0},
kL:function(a,b,c){return a.apply(b,H.aQ(J.G(b)["$as"+H.d(c)],H.av(b)))},
eT:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="B"||a===-1||a===-2||H.eT(z)}return!1},
cT:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="a"||b.builtin$cls==="B"||b===-1||b===-2||H.eT(b)
if(b==null||b===-1||b.builtin$cls==="a"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cT(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bu(a,b)}z=J.G(a).constructor
y=H.av(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a1(z,null,b,null)},
u:function(a,b){if(a!=null&&!H.cT(a,b))throw H.e(H.a5(a,H.c6(b)))
return a},
a1:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a1(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="B")return!0
if('func' in c)return H.eG(a,b,c,d)
if('func' in a)return c.builtin$cls==="bh"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a1("type" in a?a.type:null,b,x,d)
else if(H.a1(a,b,x,d))return!0
else{if(!('$is'+"aW" in y.prototype))return!1
w=y.prototype["$as"+"aW"]
v=H.aQ(w,z?a.slice(1):null)
return H.a1(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eN(H.aQ(r,z),b,u,d)},
eG:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.a1(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.a1(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.a1(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.a1(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.k7(m,b,l,d)},
k7:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a1(c[w],d,a[w],b))return!1}return!0},
kM:function(a,b,c){Object.defineProperty(a,H.y(b),{value:c,enumerable:false,writable:true,configurable:true})},
k5:function(a){var z,y,x,w,v,u
z=H.y($.eS.$1(a))
y=$.bZ[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c3[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.y($.eM.$2(a,z))
if(z!=null){y=$.bZ[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c3[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.c5(x)
$.bZ[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.c3[z]=x
return x}if(v==="-"){u=H.c5(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.eV(a,x)
if(v==="*")throw H.e(P.ef(z))
if(init.leafTags[z]===true){u=H.c5(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eV(a,x)},
eV:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cZ(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c5:function(a){return J.cZ(a,!1,null,!!a.$isa2)},
k6:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c5(z)
else return J.cZ(z,c,null,null)},
k0:function(){if(!0===$.cY)return
$.cY=!0
H.k1()},
k1:function(){var z,y,x,w,v,u,t,s
$.bZ=Object.create(null)
$.c3=Object.create(null)
H.jX()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.eY.$1(v)
if(u!=null){t=H.k6(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
jX:function(){var z,y,x,w,v,u,t
z=C.K()
z=H.aM(C.H,H.aM(C.M,H.aM(C.v,H.aM(C.v,H.aM(C.L,H.aM(C.I,H.aM(C.J(C.w),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eS=new H.jY(v)
$.eM=new H.jZ(u)
$.eY=new H.k_(t)},
aM:function(a,b){return a(b)||b},
eZ:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
d_:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hF:{"^":"a;a,b,c,d,e,f,r,0x",m:{
hG:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bF(z)
y=z[0]
x=z[1]
return new H.hF(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ih:{"^":"a;a,b,c,d,e,f",
U:function(a){var z,y,x
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
ad:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.b([],[P.i])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ih(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bS:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
ea:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
ho:{"^":"J;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
m:{
dF:function(a,b){return new H.ho(a,b==null?null:b.method)}}},
h3:{"^":"J;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.d(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.d(this.a)+")"},
m:{
cl:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.h3(a,y,z?null:b.receiver)}}},
iy:{"^":"J;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
ke:{"^":"q:12;a",
$1:function(a){if(!!J.G(a).$isJ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eC:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isah:1},
q:{"^":"a;",
i:function(a){return"Closure '"+H.aC(this).trim()+"'"},
gcq:function(){return this},
$isbh:1,
gcq:function(){return this}},
e_:{"^":"q;"},
i1:{"^":"e_;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aR(z)+"'"}},
cc:{"^":"e_;a,b,c,d",
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cc))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gH:function(a){var z,y
z=this.c
if(z==null)y=H.b_(this.a)
else y=typeof z!=="object"?J.bb(z):H.b_(z)
return(y^H.b_(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.aC(z)+"'")},
m:{
cd:function(a){return a.a},
d7:function(a){return a.c},
bx:function(a){var z,y,x,w,v
z=new H.cc("self","target","receiver","name")
y=J.bF(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ii:{"^":"J;a",
i:function(a){return this.a},
m:{
a5:function(a,b){return new H.ii("TypeError: "+H.d(P.bC(a))+": type '"+H.eK(a)+"' is not a subtype of type '"+b+"'")}}},
fb:{"^":"J;a",
i:function(a){return this.a},
m:{
fc:function(a,b){return new H.fb("CastError: "+H.d(P.bC(a))+": type '"+H.eK(a)+"' is not a subtype of type '"+b+"'")}}},
hO:{"^":"J;a",
i:function(a){return"RuntimeError: "+H.d(this.a)},
m:{
hP:function(a){return new H.hO(a)}}},
aA:{"^":"dy;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
ga5:function(){return new H.dw(this,[H.o(this,0)])},
bZ:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.bG(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.bG(y,a)}else return this.eQ(a)},
eQ:function(a){var z=this.d
if(z==null)return!1
return this.be(this.aU(z,J.bb(a)&0x3ffffff),a)>=0},
u:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ax(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ax(w,b)
x=y==null?null:y.b
return x}else return this.eR(b)},
eR:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aU(z,J.bb(a)&0x3ffffff)
x=this.be(y,a)
if(x<0)return
return y[x].b},
F:function(a,b,c){var z,y,x,w,v,u
H.u(b,H.o(this,0))
H.u(c,H.o(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.aZ()
this.b=z}this.bx(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aZ()
this.c=y}this.bx(y,b,c)}else{x=this.d
if(x==null){x=this.aZ()
this.d=x}w=J.bb(b)&0x3ffffff
v=this.aU(x,w)
if(v==null)this.b4(x,w,[this.b_(b,c)])
else{u=this.be(v,b)
if(u>=0)v[u].b=c
else v.push(this.b_(b,c))}}},
R:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.o(this,0),H.o(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.e(P.am(this))
z=z.c}},
bx:function(a,b,c){var z
H.u(b,H.o(this,0))
H.u(c,H.o(this,1))
z=this.ax(a,b)
if(z==null)this.b4(a,b,this.b_(b,c))
else z.b=c},
dt:function(){this.r=this.r+1&67108863},
b_:function(a,b){var z,y
z=new H.h5(H.u(a,H.o(this,0)),H.u(b,H.o(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.dt()
return z},
be:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.P(a[y].a,b))return y
return-1},
i:function(a){return P.dz(this)},
ax:function(a,b){return a[b]},
aU:function(a,b){return a[b]},
b4:function(a,b,c){a[b]=c},
dc:function(a,b){delete a[b]},
bG:function(a,b){return this.ax(a,b)!=null},
aZ:function(){var z=Object.create(null)
this.b4(z,"<non-identifier-key>",z)
this.dc(z,"<non-identifier-key>")
return z},
$isdv:1},
h5:{"^":"a;a,b,0c,0d"},
dw:{"^":"dn;a,$ti",
gl:function(a){return this.a.a},
gD:function(a){var z,y
z=this.a
y=new H.h6(z,z.r,this.$ti)
y.c=z.e
return y}},
h6:{"^":"a;a,b,0c,0d,$ti",
sbw:function(a){this.d=H.u(a,H.o(this,0))},
gA:function(){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.am(z))
else{z=this.c
if(z==null){this.sbw(null)
return!1}else{this.sbw(z.a)
this.c=this.c.c
return!0}}},
$isap:1},
jY:{"^":"q:12;a",
$1:function(a){return this.a(a)}},
jZ:{"^":"q:30;a",
$2:function(a,b){return this.a(a,b)}},
k_:{"^":"q:20;a",
$1:function(a){return this.a(H.y(a))}},
h1:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isdH:1,
m:{
h2:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.e(new P.fJ("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
jR:function(a){return J.ds(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
k9:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
cN:function(a){return a},
bs:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.ba(b,a))},
jD:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.e(H.jQ(a,b,c))
return b},
hk:{"^":"z;","%":";ArrayBufferView;co|ey|ez|hj|eA|eB|bm"},
co:{"^":"hk;",
gl:function(a){return a.length},
$isa2:1,
$asa2:I.cV},
hj:{"^":"ez;",
u:function(a,b){H.bs(b,a,a.length)
return a[b]},
$asbE:function(){return[P.r]},
$asH:function(){return[P.r]},
$isp:1,
$asp:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]},
"%":"Float32Array"},
bm:{"^":"eB;",
$asbE:function(){return[P.v]},
$asH:function(){return[P.v]},
$isp:1,
$asp:function(){return[P.v]},
$isc:1,
$asc:function(){return[P.v]}},
kp:{"^":"bm;",
u:function(a,b){H.bs(b,a,a.length)
return a[b]},
"%":"Int16Array"},
kq:{"^":"bm;",
u:function(a,b){H.bs(b,a,a.length)
return a[b]},
"%":"Int32Array"},
kr:{"^":"bm;",
u:function(a,b){H.bs(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
ks:{"^":"bm;",
gl:function(a){return a.length},
u:function(a,b){H.bs(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
ey:{"^":"co+H;"},
ez:{"^":"ey+bE;"},
eA:{"^":"co+H;"},
eB:{"^":"eA+bE;"}}],["","",,P,{"^":"",
iO:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jL()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b9(new P.iQ(z),1)).observe(y,{childList:true})
return new P.iP(z,y,x)}else if(self.setImmediate!=null)return P.jM()
return P.jN()},
kC:[function(a){self.scheduleImmediate(H.b9(new P.iR(H.f(a,{func:1,ret:-1})),0))},"$1","jL",4,0,9],
kD:[function(a){self.setImmediate(H.b9(new P.iS(H.f(a,{func:1,ret:-1})),0))},"$1","jM",4,0,9],
kE:[function(a){P.cx(C.m,H.f(a,{func:1,ret:-1}))},"$1","jN",4,0,9],
cx:function(a,b){var z
H.f(b,{func:1,ret:-1})
z=C.h.aA(a.a,1000)
return P.jt(z<0?0:z,b)},
jH:function(a,b){if(H.bu(a,{func:1,args:[P.a,P.ah]}))return H.f(a,{func:1,ret:null,args:[P.a,P.ah]})
if(H.bu(a,{func:1,args:[P.a]}))return H.f(a,{func:1,ret:null,args:[P.a]})
throw H.e(P.cb(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jG:function(){var z,y
for(;z=$.aL,z!=null;){$.b7=null
y=z.b
$.aL=y
if(y==null)$.b6=null
z.a.$0()}},
kK:[function(){$.cP=!0
try{P.jG()}finally{$.b7=null
$.cP=!1
if($.aL!=null)$.$get$cJ().$1(P.eO())}},"$0","eO",0,0,1],
eJ:function(a){var z=new P.eq(H.f(a,{func:1,ret:-1}))
if($.aL==null){$.b6=z
$.aL=z
if(!$.cP)$.$get$cJ().$1(P.eO())}else{$.b6.b=z
$.b6=z}},
jK:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
z=$.aL
if(z==null){P.eJ(a)
$.b7=$.b6
return}y=new P.eq(a)
x=$.b7
if(x==null){y.b=z
$.b7=y
$.aL=y}else{y.b=x.b
x.b=y
$.b7=y
if(y.b==null)$.b6=y}},
kb:function(a){var z,y
z={func:1,ret:-1}
H.f(a,z)
y=$.F
if(C.f===y){P.bY(null,null,C.f,a)
return}y.toString
P.bY(null,null,y,H.f(y.b7(a),z))},
e2:function(a,b){var z,y
z={func:1,ret:-1}
H.f(b,z)
y=$.F
if(y===C.f){y.toString
return P.cx(a,b)}return P.cx(a,H.f(y.b7(b),z))},
bX:function(a,b,c,d,e){var z={}
z.a=d
P.jK(new P.jI(z,e))},
eH:function(a,b,c,d,e){var z,y
H.f(d,{func:1,ret:e})
y=$.F
if(y===c)return d.$0()
$.F=c
z=y
try{y=d.$0()
return y}finally{$.F=z}},
eI:function(a,b,c,d,e,f,g){var z,y
H.f(d,{func:1,ret:f,args:[g]})
H.u(e,g)
y=$.F
if(y===c)return d.$1(e)
$.F=c
z=y
try{y=d.$1(e)
return y}finally{$.F=z}},
jJ:function(a,b,c,d,e,f,g,h,i){var z,y
H.f(d,{func:1,ret:g,args:[h,i]})
H.u(e,h)
H.u(f,i)
y=$.F
if(y===c)return d.$2(e,f)
$.F=c
z=y
try{y=d.$2(e,f)
return y}finally{$.F=z}},
bY:function(a,b,c,d){var z
H.f(d,{func:1,ret:-1})
z=C.f!==c
if(z)d=!(!z||!1)?c.b7(d):c.ej(d,-1)
P.eJ(d)},
iQ:{"^":"q:16;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
iP:{"^":"q:26;a,b,c",
$1:function(a){var z,y
this.a.a=H.f(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iR:{"^":"q:0;a",
$0:function(){this.a.$0()}},
iS:{"^":"q:0;a",
$0:function(){this.a.$0()}},
js:{"^":"a;a,0b,c",
d0:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b9(new P.ju(this,b),0),a)
else throw H.e(P.ae("`setTimeout()` not found."))},
m:{
jt:function(a,b){var z=new P.js(!0,0)
z.d0(a,b)
return z}}},
ju:{"^":"q:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
aK:{"^":"a;0a,b,c,d,e,$ti",
eX:function(a){if(this.c!==6)return!0
return this.b.b.bi(H.f(this.d,{func:1,ret:P.D,args:[P.a]}),a.a,P.D,P.a)},
eP:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.o(this,1)}
w=this.b.b
if(H.bu(z,{func:1,args:[P.a,P.ah]}))return H.cW(w.fi(z,a.a,a.b,null,y,P.ah),x)
else return H.cW(w.bi(H.f(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aj:{"^":"a;bR:a<,b,0dX:c<,$ti",
cg:function(a,b,c){var z,y,x,w
z=H.o(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.F
if(y!==C.f){y.toString
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.jH(b,y)}H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aj(0,$.F,[c])
w=b==null?1:3
this.by(new P.aK(x,w,a,b,[z,c]))
return x},
fm:function(a,b){return this.cg(a,null,b)},
by:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isaK")
this.c=a}else{if(z===2){y=H.h(this.c,"$isaj")
z=y.a
if(z<4){y.by(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bY(null,null,z,H.f(new P.j_(this,a),{func:1,ret:-1}))}},
bP:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isaK")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isaj")
y=u.a
if(y<4){u.bP(a)
return}this.a=y
this.c=u.c}z.a=this.ay(a)
y=this.b
y.toString
P.bY(null,null,y,H.f(new P.j4(z,this),{func:1,ret:-1}))}},
b3:function(){var z=H.h(this.c,"$isaK")
this.c=null
return this.ay(z)},
ay:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
bD:function(a){var z,y,x
z=H.o(this,0)
H.cW(a,{futureOr:1,type:z})
y=this.$ti
if(H.bt(a,"$isaW",y,"$asaW"))if(H.bt(a,"$isaj",y,null))P.et(a,this)
else P.j0(a,this)
else{x=this.b3()
H.u(a,z)
this.a=4
this.c=a
P.b4(this,x)}},
bE:function(a,b){var z
H.h(b,"$isah")
z=this.b3()
this.a=8
this.c=new P.Y(a,b)
P.b4(this,z)},
$isaW:1,
m:{
j0:function(a,b){var z,y,x
b.a=1
try{a.cg(new P.j1(b),new P.j2(b),null)}catch(x){z=H.X(x)
y=H.aN(x)
P.kb(new P.j3(b,z,y))}},
et:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isaj")
if(z>=4){y=b.b3()
b.a=a.a
b.c=a.c
P.b4(b,y)}else{y=H.h(b.c,"$isaK")
b.a=2
b.c=a
a.bP(y)}},
b4:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isY")
y=y.b
u=v.a
t=v.b
y.toString
P.bX(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.b4(z.a,b)}y=z.a
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
if(p){H.h(r,"$isY")
y=y.b
u=r.a
t=r.b
y.toString
P.bX(null,null,y,u,t)
return}o=$.F
if(o==null?q!=null:o!==q)$.F=q
else o=null
y=b.c
if(y===8)new P.j7(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.j6(x,b,r).$0()}else if((y&2)!==0)new P.j5(z,x,b).$0()
if(o!=null)$.F=o
y=x.b
if(!!J.G(y).$isaW){if(y.a>=4){n=H.h(t.c,"$isaK")
t.c=null
b=t.ay(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.et(y,t)
return}}m=b.b
n=H.h(m.c,"$isaK")
m.c=null
b=m.ay(n)
y=x.a
u=x.b
if(!y){H.u(u,H.o(m,0))
m.a=4
m.c=u}else{H.h(u,"$isY")
m.a=8
m.c=u}z.a=m
y=m}}}},
j_:{"^":"q:0;a,b",
$0:function(){P.b4(this.a,this.b)}},
j4:{"^":"q:0;a,b",
$0:function(){P.b4(this.b,this.a.a)}},
j1:{"^":"q:16;a",
$1:function(a){var z=this.a
z.a=0
z.bD(a)}},
j2:{"^":"q:21;a",
$2:function(a,b){this.a.bE(a,H.h(b,"$isah"))},
$1:function(a){return this.$2(a,null)}},
j3:{"^":"q:0;a,b,c",
$0:function(){this.a.bE(this.b,this.c)}},
j7:{"^":"q:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.ce(H.f(w.d,{func:1}),null)}catch(v){y=H.X(v)
x=H.aN(v)
if(this.d){w=H.h(this.a.a.c,"$isY").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isY")
else u.b=new P.Y(y,x)
u.a=!0
return}if(!!J.G(z).$isaW){if(z instanceof P.aj&&z.gbR()>=4){if(z.gbR()===8){w=this.b
w.b=H.h(z.gdX(),"$isY")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.fm(new P.j8(t),null)
w.a=!1}}},
j8:{"^":"q:22;a",
$1:function(a){return this.a}},
j6:{"^":"q:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.o(x,0)
v=H.u(this.c,w)
u=H.o(x,1)
this.a.b=x.b.b.bi(H.f(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.X(t)
y=H.aN(t)
x=this.a
x.b=new P.Y(z,y)
x.a=!0}}},
j5:{"^":"q:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isY")
w=this.c
if(w.eX(z)&&w.e!=null){v=this.b
v.b=w.eP(z)
v.a=!1}}catch(u){y=H.X(u)
x=H.aN(u)
w=H.h(this.a.a.c,"$isY")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.Y(y,x)
s.a=!0}}},
eq:{"^":"a;a,0b"},
i2:{"^":"a;$ti",
gl:function(a){var z,y,x,w
z={}
y=new P.aj(0,$.F,[P.v])
z.a=0
x=H.o(this,0)
w=H.f(new P.i4(z,this),{func:1,ret:-1,args:[x]})
H.f(new P.i5(z,y),{func:1,ret:-1})
W.L(this.a,this.b,w,!1,x)
return y}},
i4:{"^":"q;a,b",
$1:function(a){H.u(a,H.o(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.B,args:[H.o(this.b,0)]}}},
i5:{"^":"q:0;a,b",
$0:function(){this.b.bD(this.a.a)}},
cu:{"^":"a;$ti"},
i3:{"^":"a;"},
Y:{"^":"a;a,b",
i:function(a){return H.d(this.a)},
$isJ:1},
jz:{"^":"a;",$iskB:1},
jI:{"^":"q:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dG()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.e(z)
x=H.e(z)
x.stack=y.i(0)
throw x}},
jh:{"^":"jz;",
fj:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
try{if(C.f===$.F){a.$0()
return}P.eH(null,null,this,a,-1)}catch(x){z=H.X(x)
y=H.aN(x)
P.bX(null,null,this,z,H.h(y,"$isah"))}},
fk:function(a,b,c){var z,y,x
H.f(a,{func:1,ret:-1,args:[c]})
H.u(b,c)
try{if(C.f===$.F){a.$1(b)
return}P.eI(null,null,this,a,b,-1,c)}catch(x){z=H.X(x)
y=H.aN(x)
P.bX(null,null,this,z,H.h(y,"$isah"))}},
ej:function(a,b){return new P.jj(this,H.f(a,{func:1,ret:b}),b)},
b7:function(a){return new P.ji(this,H.f(a,{func:1,ret:-1}))},
el:function(a,b){return new P.jk(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
ce:function(a,b){H.f(a,{func:1,ret:b})
if($.F===C.f)return a.$0()
return P.eH(null,null,this,a,b)},
bi:function(a,b,c,d){H.f(a,{func:1,ret:c,args:[d]})
H.u(b,d)
if($.F===C.f)return a.$1(b)
return P.eI(null,null,this,a,b,c,d)},
fi:function(a,b,c,d,e,f){H.f(a,{func:1,ret:d,args:[e,f]})
H.u(b,e)
H.u(c,f)
if($.F===C.f)return a.$2(b,c)
return P.jJ(null,null,this,a,b,c,d,e,f)}},
jj:{"^":"q;a,b,c",
$0:function(){return this.a.ce(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
ji:{"^":"q:1;a,b",
$0:function(){return this.a.fj(this.b)}},
jk:{"^":"q;a,b,c",
$1:function(a){var z=this.c
return this.a.fk(this.b,H.u(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
h8:function(a,b,c){H.c4(a)
return H.n(H.jS(a,new H.aA(0,0,[b,c])),"$isdv",[b,c],"$asdv")},
h7:function(a,b){return new H.aA(0,0,[a,b])},
bk:function(a,b,c,d){return new P.jc(0,0,[d])},
fW:function(a,b,c){var z,y
if(P.cQ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$b8()
C.a.h(y,a)
try{P.jF(a,z)}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=P.dY(b,H.k4(z,"$isp"),", ")+c
return y.charCodeAt(0)==0?y:y},
ch:function(a,b,c){var z,y,x
if(P.cQ(a))return b+"..."+c
z=new P.bP(b)
y=$.$get$b8()
C.a.h(y,a)
try{x=z
x.a=P.dY(x.gab(),a,", ")}finally{if(0>=y.length)return H.j(y,-1)
y.pop()}y=z
y.a=y.gab()+c
y=z.gab()
return y.charCodeAt(0)==0?y:y},
cQ:function(a){var z,y
for(z=0;y=$.$get$b8(),z<y.length;++z)if(a===y[z])return!0
return!1},
jF:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gD(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.d(z.gA())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.j(b,-1)
v=b.pop()
if(0>=b.length)return H.j(b,-1)
u=b.pop()}else{t=z.gA();++x
if(!z.t()){if(x<=4){C.a.h(b,H.d(t))
return}v=H.d(t)
if(0>=b.length)return H.j(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gA();++x
for(;z.t();t=s,s=r){r=z.gA();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.j(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.d(t)
v=H.d(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.j(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dx:function(a,b){var z,y,x
z=P.bk(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.w)(a),++x)z.h(0,H.u(a[x],b))
return z},
dz:function(a){var z,y,x
z={}
if(P.cQ(a))return"{...}"
y=new P.bP("")
try{C.a.h($.$get$b8(),a)
x=y
x.a=x.gab()+"{"
z.a=!0
a.R(0,new P.hd(z,y))
z=y
z.a=z.gab()+"}"}finally{z=$.$get$b8()
if(0>=z.length)return H.j(z,-1)
z.pop()}z=y.gab()
return z.charCodeAt(0)==0?z:z},
jc:{"^":"j9;a,0b,0c,0d,0e,0f,r,$ti",
gD:function(a){return P.ex(this,this.r,H.o(this,0))},
gl:function(a){return this.a},
I:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.h(z[b],"$isbV")!=null}else{y=this.d7(b)
return y}},
d7:function(a){var z=this.d
if(z==null)return!1
return this.aT(this.bL(z,a),a)>=0},
h:function(a,b){var z,y
H.u(b,H.o(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cL()
this.b=z}return this.bA(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cL()
this.c=y}return this.bA(y,b)}else return this.d1(b)},
d1:function(a){var z,y,x
H.u(a,H.o(this,0))
z=this.d
if(z==null){z=P.cL()
this.d=z}y=this.bF(a)
x=z[y]
if(x==null)z[y]=[this.aQ(a)]
else{if(this.aT(x,a)>=0)return!1
x.push(this.aQ(a))}return!0},
J:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dU(this.c,b)
else return this.dR(b)},
dR:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.bL(z,a)
x=this.aT(y,a)
if(x<0)return!1
this.bS(y.splice(x,1)[0])
return!0},
bA:function(a,b){H.u(b,H.o(this,0))
if(H.h(a[b],"$isbV")!=null)return!1
a[b]=this.aQ(b)
return!0},
dU:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$isbV")
if(z==null)return!1
this.bS(z)
delete a[b]
return!0},
bC:function(){this.r=this.r+1&67108863},
aQ:function(a){var z,y
z=new P.bV(H.u(a,H.o(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.bC()
return z},
bS:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.bC()},
bF:function(a){return J.bb(a)&0x3ffffff},
bL:function(a,b){return a[this.bF(b)]},
aT:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.P(a[y].a,b))return y
return-1},
m:{
cL:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bV:{"^":"a;a,0b,0c"},
jd:{"^":"a;a,b,0c,0d,$ti",
sbB:function(a){this.d=H.u(a,H.o(this,0))},
gA:function(){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.am(z))
else{z=this.c
if(z==null){this.sbB(null)
return!1}else{this.sbB(H.u(z.a,H.o(this,0)))
this.c=this.c.b
return!0}}},
$isap:1,
m:{
ex:function(a,b,c){var z=new P.jd(a,b,[c])
z.c=a.e
return z}}},
j9:{"^":"hQ;"},
bI:{"^":"je;",$isp:1,$isc:1},
H:{"^":"a;$ti",
gD:function(a){return new H.cm(a,this.gl(a),0,[H.c2(this,a,"H",0)])},
O:function(a,b){return this.u(a,b)},
fo:function(a,b){var z,y
z=H.b([],[H.c2(this,a,"H",0)])
C.a.sl(z,this.gl(a))
for(y=0;y<this.gl(a);++y)C.a.F(z,y,this.u(a,y))
return z},
fn:function(a){return this.fo(a,!0)},
i:function(a){return P.ch(a,"[","]")}},
dy:{"^":"bK;"},
hd:{"^":"q:10;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.d(a)
z.a=y+": "
z.a+=H.d(b)}},
bK:{"^":"a;$ti",
R:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.au(this,"bK",0),H.au(this,"bK",1)]})
for(z=J.aS(this.ga5());z.t();){y=z.gA()
b.$2(y,this.u(0,y))}},
gl:function(a){return J.ax(this.ga5())},
i:function(a){return P.dz(this)},
$isZ:1},
hS:{"^":"a;$ti",
a_:function(a,b){var z
for(z=J.aS(H.n(b,"$isp",this.$ti,"$asp"));z.t();)this.h(0,z.gA())},
i:function(a){return P.ch(this,"{","}")},
O:function(a,b){var z,y,x
if(b<0)H.M(P.W(b,0,null,"index",null))
for(z=P.ex(this,this.r,H.o(this,0)),y=0;z.t();){x=z.d
if(b===y)return x;++y}throw H.e(P.ay(b,this,"index",null,y))},
$isp:1,
$isdT:1},
hQ:{"^":"hS;"},
je:{"^":"a+H;"}}],["","",,P,{"^":"",cf:{"^":"a;$ti"},bA:{"^":"i3;$ti"},fC:{"^":"cf;",
$ascf:function(){return[P.i,[P.c,P.v]]}},fS:{"^":"a;a,b,c,d,e",
i:function(a){return this.a}},fR:{"^":"bA;a",
d8:function(a,b,c){var z,y,x,w,v,u
for(z=this.a,y=z.e,x=z.d,z=z.c,w=b,v=null;w<c;++w){if(w>=a.length)return H.j(a,w)
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
default:u=null}if(u!=null){if(v==null)v=new P.bP("")
if(w>b)v.a+=C.c.au(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.f6(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asbA:function(){return[P.i,P.i]}},iC:{"^":"fC;a"},iD:{"^":"bA;",
ev:function(a,b,c){var z,y,x,w
z=a.length
P.dO(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.jx(0,0,x)
if(w.dj(a,b,z)!==z)w.bT(C.c.ba(a,z-1),0)
return new Uint8Array(x.subarray(0,H.jD(0,w.b,x.length)))},
eu:function(a){return this.ev(a,0,null)},
$asbA:function(){return[P.i,[P.c,P.v]]}},jx:{"^":"a;a,b,c",
bT:function(a,b){var z,y,x,w,v
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
dj:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.c.ba(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.c.aa(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.bT(w,C.c.aa(a,u)))x=u}else if(w<=2047){v=this.b
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
fE:function(a){if(a instanceof H.q)return a.i(0)
return"Instance of '"+H.aC(a)+"'"},
h9:function(a,b,c,d){var z,y
H.u(b,d)
z=J.fY(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.F(z,y,b)
return H.n(z,"$isc",[d],"$asc")},
ha:function(a,b,c){var z,y,x
z=[c]
y=H.b([],z)
for(x=a.gD(a);x.t();)C.a.h(y,H.u(x.gA(),c))
if(b)return y
return H.n(J.bF(y),"$isc",z,"$asc")},
cv:function(a,b,c){var z,y
z=P.v
H.n(a,"$isp",[z],"$asp")
if(a.constructor===Array){H.n(a,"$isaz",[z],"$asaz")
y=a.length
c=P.dO(b,c,y,null,null,null)
return H.dN(b>0||c<y?C.a.cL(a,b,c):a)}return P.i6(a,b,c)},
i6:function(a,b,c){var z,y,x
H.n(a,"$isp",[P.v],"$asp")
z=J.aS(a)
for(y=0;y<b;++y)if(!z.t())throw H.e(P.W(b,0,y,null,null))
x=[]
for(;z.t();)x.push(z.gA())
return H.dN(x)},
hH:function(a,b,c){return new H.h1(a,H.h2(a,!1,!0,!1))},
cM:function(a,b,c,d){var z,y,x,w,v,u
H.n(a,"$isc",[P.v],"$asc")
if(c===C.l){z=$.$get$eE().b
z=z.test(b)}else z=!1
if(z)return b
y=C.C.eu(H.u(b,H.au(c,"cf",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.j(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.cp(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
bC:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.V(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fE(a)},
K:function(a){return new P.es(a)},
eW:function(a){H.k9(a)},
D:{"^":"a;"},
"+bool":0,
bB:{"^":"a;a,b",
n:function(a,b){if(b==null)return!1
if(!(b instanceof P.bB))return!1
return this.a===b.a&&!0},
gH:function(a){var z=this.a
return(z^C.h.az(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.fm(H.hA(this))
y=P.bd(H.hy(this))
x=P.bd(H.hu(this))
w=P.bd(H.hv(this))
v=P.bd(H.hx(this))
u=P.bd(H.hz(this))
t=P.fn(H.hw(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
m:{
fm:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fn:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bd:function(a){if(a>=10)return""+a
return"0"+a}}},
r:{"^":"a6;"},
"+double":0,
be:{"^":"a;a",
aL:function(a,b){return C.h.aL(this.a,H.h(b,"$isbe").a)},
n:function(a,b){if(b==null)return!1
if(!(b instanceof P.be))return!1
return this.a===b.a},
gH:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fy()
y=this.a
if(y<0)return"-"+new P.be(0-y).i(0)
x=z.$1(C.h.aA(y,6e7)%60)
w=z.$1(C.h.aA(y,1e6)%60)
v=new P.fx().$1(y%1e6)
return""+C.h.aA(y,36e8)+":"+H.d(x)+":"+H.d(w)+"."+H.d(v)},
m:{
fw:function(a,b,c,d,e,f){return new P.be(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fx:{"^":"q:11;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fy:{"^":"q:11;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
J:{"^":"a;"},
dG:{"^":"J;",
i:function(a){return"Throw of null."}},
ak:{"^":"J;a,b,c,d",
gaS:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaR:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.d(z)
w=this.gaS()+y+x
if(!this.a)return w
v=this.gaR()
u=P.bC(this.b)
return w+v+": "+H.d(u)},
m:{
cb:function(a,b,c){return new P.ak(!0,a,b,c)}}},
bN:{"^":"ak;e,f,a,b,c,d",
gaS:function(){return"RangeError"},
gaR:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.d(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.d(z)
else if(x>z)y=": Not in range "+H.d(z)+".."+H.d(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.d(z)}return y},
m:{
bO:function(a,b,c){return new P.bN(null,null,!0,a,b,"Value not in range")},
W:function(a,b,c,d,e){return new P.bN(b,c,!0,a,d,"Invalid value")},
dO:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.W(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.e(P.W(b,a,c,"end",f))
return b}return c}}},
fT:{"^":"ak;e,l:f>,a,b,c,d",
gaS:function(){return"RangeError"},
gaR:function(){if(J.f0(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.d(z)},
m:{
ay:function(a,b,c,d,e){var z=H.O(e!=null?e:J.ax(b))
return new P.fT(b,z,!0,a,c,"Index out of range")}}},
iA:{"^":"J;a",
i:function(a){return"Unsupported operation: "+this.a},
m:{
ae:function(a){return new P.iA(a)}}},
ix:{"^":"J;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
m:{
ef:function(a){return new P.ix(a)}}},
ct:{"^":"J;a",
i:function(a){return"Bad state: "+this.a},
m:{
dX:function(a){return new P.ct(a)}}},
fi:{"^":"J;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.d(P.bC(z))+"."},
m:{
am:function(a){return new P.fi(a)}}},
hp:{"^":"a;",
i:function(a){return"Out of Memory"},
$isJ:1},
dW:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isJ:1},
fk:{"^":"J;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
es:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
fJ:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.c.au(x,0,75)+"..."
return y+"\n"+x}},
bh:{"^":"a;"},
v:{"^":"a6;"},
"+int":0,
p:{"^":"a;$ti",
bk:["cN",function(a,b){var z=H.au(this,"p",0)
return new H.cI(this,H.f(b,{func:1,ret:P.D,args:[z]}),[z])}],
gl:function(a){var z,y
z=this.gD(this)
for(y=0;z.t();)++y
return y},
ga7:function(a){var z,y
z=this.gD(this)
if(!z.t())throw H.e(H.ci())
y=z.gA()
if(z.t())throw H.e(H.fX())
return y},
O:function(a,b){var z,y,x
if(b<0)H.M(P.W(b,0,null,"index",null))
for(z=this.gD(this),y=0;z.t();){x=z.gA()
if(b===y)return x;++y}throw H.e(P.ay(b,this,"index",null,y))},
i:function(a){return P.fW(this,"(",")")}},
ap:{"^":"a;$ti"},
c:{"^":"a;$ti",$isp:1},
"+List":0,
B:{"^":"a;",
gH:function(a){return P.a.prototype.gH.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a6:{"^":"a;"},
"+num":0,
a:{"^":";",
n:function(a,b){return this===b},
gH:function(a){return H.b_(this)},
i:function(a){return"Instance of '"+H.aC(this)+"'"},
toString:function(){return this.i(this)}},
ah:{"^":"a;"},
i:{"^":"a;",$isdH:1},
"+String":0,
bP:{"^":"a;ab:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
m:{
dY:function(a,b,c){var z=J.aS(b)
if(!z.t())return a
if(c.length===0){do a+=H.d(z.gA())
while(z.t())}else{a+=H.d(z.gA())
for(;z.t();)a=a+c+H.d(z.gA())}return a}}}}],["","",,W,{"^":"",
ca:function(a){var z=document.createElement("a")
return z},
dc:function(a,b){var z=document.createElement("canvas")
return z},
fz:function(a,b,c){var z,y
z=document.body
y=(z&&C.j).Y(z,a,b,c)
y.toString
z=W.t
z=new H.cI(new W.a0(y),H.f(new W.fA(),{func:1,ret:P.D,args:[z]}),[z])
return H.h(z.ga7(z),"$isE")},
fB:function(a){H.h(a,"$isbD")
return"wheel"},
aV:function(a){var z,y,x
z="element tag unavailable"
try{y=J.f5(a)
if(typeof y==="string")z=a.tagName}catch(x){H.X(x)}return z},
bU:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ew:function(a,b,c,d){var z,y
z=W.bU(W.bU(W.bU(W.bU(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eL:function(a,b){var z
H.f(a,{func:1,ret:-1,args:[b]})
z=$.F
if(z===C.f)return a
return z.el(a,b)},
T:{"^":"E;","%":"HTMLAudioElement|HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
f8:{"^":"T;",
i:function(a){return String(a)},
$isf8:1,
"%":"HTMLAnchorElement"},
kf:{"^":"T;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
d4:{"^":"T;",$isd4:1,"%":"HTMLBaseElement"},
bw:{"^":"T;",$isbw:1,"%":"HTMLBodyElement"},
ce:{"^":"T;",
bl:function(a,b,c){var z=this.dk(a,b,P.jO(c,null))
return z},
dk:function(a,b,c){return a.getContext(b,c)},
$isce:1,
"%":"HTMLCanvasElement"},
ki:{"^":"t;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kk:{"^":"iV;0l:length=",
cz:function(a,b){var z=this.dl(a,this.d4(a,b))
return z==null?"":z},
d4:function(a,b){var z,y
z=$.$get$dg()
y=z[b]
if(typeof y==="string")return y
y=this.e6(a,b)
z[b]=y
return y},
e6:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fs()+b
if(z in a)return z
return b},
dl:function(a,b){return a.getPropertyValue(b)},
gaD:function(a){return a.height},
gaG:function(a){return a.left},
gbj:function(a){return a.top},
gaJ:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fj:{"^":"a;",
gaG:function(a){return this.cz(a,"left")}},
an:{"^":"T;",$isan:1,"%":"HTMLDivElement"},
ft:{"^":"t;",
ef:function(a,b){return a.adoptNode(b)},
cv:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
kl:{"^":"z;",
i:function(a){return String(a)},
"%":"DOMException"},
fu:{"^":"z;",
ez:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
fv:{"^":"z;",
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
n:function(a,b){var z
if(b==null)return!1
if(!H.bt(b,"$isbp",[P.a6],"$asbp"))return!1
z=J.U(b)
return a.left===z.gaG(b)&&a.top===z.gbj(b)&&a.width===z.gaJ(b)&&a.height===z.gaD(b)},
gH:function(a){return W.ew(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gaD:function(a){return a.height},
gaG:function(a){return a.left},
gbj:function(a){return a.top},
gaJ:function(a){return a.width},
$isbp:1,
$asbp:function(){return[P.a6]},
"%":";DOMRectReadOnly"},
iU:{"^":"bI;bK:a<,b",
gl:function(a){return this.b.length},
u:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.j(z,b)
return H.h(z[b],"$isE")},
h:function(a,b){J.d1(this.a,b)
return b},
gD:function(a){var z=this.fn(this)
return new J.af(z,z.length,0,[H.o(z,0)])},
$asH:function(){return[W.E]},
$asp:function(){return[W.E]},
$asc:function(){return[W.E]}},
E:{"^":"t;0fl:tagName=",
gei:function(a){return new W.iW(a)},
gbY:function(a){return new W.iU(a,a.children)},
i:function(a){return a.localName},
Y:["aP",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dq
if(z==null){z=H.b([],[W.ab])
y=new W.dE(z)
C.a.h(z,W.eu(null))
C.a.h(z,W.eD())
$.dq=y
d=y}else d=z
z=$.dp
if(z==null){z=new W.eF(d)
$.dp=z
c=z}else{z.a=d
c=z}}if($.ag==null){z=document
y=z.implementation
y=(y&&C.D).ez(y,"")
$.ag=y
$.cg=y.createRange()
y=$.ag
y.toString
y=y.createElement("base")
H.h(y,"$isd4")
y.href=z.baseURI
z=$.ag.head;(z&&C.E).p(z,y)}z=$.ag
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.h(y,"$isbw")}z=$.ag
if(!!this.$isbw)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.ag.body;(z&&C.j).p(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.I(C.P,a.tagName)){z=$.cg;(z&&C.y).cF(z,x)
z=$.cg
w=(z&&C.y).ex(z,b)}else{x.innerHTML=b
w=$.ag.createDocumentFragment()
for(z=J.U(w);y=x.firstChild,y!=null;)z.p(w,y)}z=$.ag.body
if(x==null?z!=null:x!==z)J.d2(x)
c.bn(w)
C.u.ef(document,w)
return w},function(a,b,c){return this.Y(a,b,c,null)},"ey",null,null,"gfR",5,5,null],
cI:function(a,b,c,d){a.textContent=null
this.p(a,this.Y(a,b,c,d))},
cH:function(a,b){return this.cI(a,b,null,null)},
aj:function(a,b){return a.getAttribute(b)},
dS:function(a,b){return a.removeAttribute(b)},
$isE:1,
"%":";Element"},
fA:{"^":"q:15;",
$1:function(a){return!!J.G(H.h(a,"$ist")).$isE}},
R:{"^":"z;",$isR:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
bD:{"^":"z;",
d2:function(a,b,c,d){return a.addEventListener(b,H.b9(H.f(c,{func:1,args:[W.R]}),1),!1)},
$isbD:1,
"%":";EventTarget"},
km:{"^":"T;0l:length=","%":"HTMLFormElement"},
fO:{"^":"T;","%":"HTMLHeadElement"},
fP:{"^":"jb;",
gl:function(a){return a.length},
u:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.ay(b,a,null,null,null))
return a[b]},
O:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isa2:1,
$asa2:function(){return[W.t]},
$asH:function(){return[W.t]},
$isp:1,
$asp:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]},
$isfP:1,
$asa9:function(){return[W.t]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
fQ:{"^":"ft;","%":"HTMLDocument"},
aX:{"^":"cA;",$isaX:1,"%":"KeyboardEvent"},
hb:{"^":"z;",
i:function(a){return String(a)},
$ishb:1,
"%":"Location"},
a3:{"^":"cA;",$isa3:1,"%":"PointerEvent;DragEvent|MouseEvent"},
a0:{"^":"bI;a",
ga7:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.e(P.dX("No elements"))
if(y>1)throw H.e(P.dX("More than one element"))
return z.firstChild},
a_:function(a,b){var z,y,x,w,v
H.n(b,"$isp",[W.t],"$asp")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.U(y),v=0;v<x;++v)w.p(y,z.firstChild)
return},
gD:function(a){var z=this.a.childNodes
return new W.dr(z,z.length,-1,[H.c2(C.R,z,"a9",0)])},
gl:function(a){return this.a.childNodes.length},
u:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.j(z,b)
return z[b]},
$asH:function(){return[W.t]},
$asp:function(){return[W.t]},
$asc:function(){return[W.t]}},
t:{"^":"bD;0fc:previousSibling=",
fd:function(a){var z=a.parentNode
if(z!=null)J.bv(z,a)},
i:function(a){var z=a.nodeValue
return z==null?this.cM(a):z},
p:function(a,b){return a.appendChild(b)},
dT:function(a,b){return a.removeChild(b)},
$ist:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hl:{"^":"jg;",
gl:function(a){return a.length},
u:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.ay(b,a,null,null,null))
return a[b]},
O:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isa2:1,
$asa2:function(){return[W.t]},
$asH:function(){return[W.t]},
$isp:1,
$asp:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]},
$asa9:function(){return[W.t]},
"%":"NodeList|RadioNodeList"},
hD:{"^":"z;",
ex:function(a,b){return a.createContextualFragment(b)},
cF:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
kv:{"^":"T;0l:length=","%":"HTMLSelectElement"},
i7:{"^":"T;","%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
i8:{"^":"T;",
Y:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.aP(a,b,c,d)
z=W.fz("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a0(y).a_(0,new W.a0(z))
return y},
"%":"HTMLTableElement"},
i9:{"^":"T;",
Y:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.aP(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.k.Y(z.createElement("table"),b,c,d)
z.toString
z=new W.a0(z)
x=z.ga7(z)
x.toString
z=new W.a0(x)
w=z.ga7(z)
y.toString
w.toString
new W.a0(y).a_(0,new W.a0(w))
return y},
"%":"HTMLTableRowElement"},
kx:{"^":"T;",
Y:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.aP(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.k.Y(z.createElement("table"),b,c,d)
z.toString
z=new W.a0(z)
x=z.ga7(z)
y.toString
x.toString
new W.a0(y).a_(0,new W.a0(x))
return y},
"%":"HTMLTableSectionElement"},
e0:{"^":"T;",$ise0:1,"%":"HTMLTemplateElement"},
b0:{"^":"z;",$isb0:1,"%":"Touch"},
aD:{"^":"cA;",$isaD:1,"%":"TouchEvent"},
kz:{"^":"jw;",
gl:function(a){return a.length},
u:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.ay(b,a,null,null,null))
return a[b]},
O:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isa2:1,
$asa2:function(){return[W.b0]},
$asH:function(){return[W.b0]},
$isp:1,
$asp:function(){return[W.b0]},
$isc:1,
$asc:function(){return[W.b0]},
$asa9:function(){return[W.b0]},
"%":"TouchList"},
cA:{"^":"R;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
b3:{"^":"a3;",
geF:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.ae("deltaY is not supported"))},
geE:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.ae("deltaX is not supported"))},
$isb3:1,
"%":"WheelEvent"},
iN:{"^":"bD;",
dW:function(a,b){return a.requestAnimationFrame(H.b9(H.f(b,{func:1,ret:-1,args:[P.a6]}),1))},
dd:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
er:{"^":"t;",$iser:1,"%":"Attr"},
kF:{"^":"fv;",
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
n:function(a,b){var z
if(b==null)return!1
if(!H.bt(b,"$isbp",[P.a6],"$asbp"))return!1
z=J.U(b)
return a.left===z.gaG(b)&&a.top===z.gbj(b)&&a.width===z.gaJ(b)&&a.height===z.gaD(b)},
gH:function(a){return W.ew(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gaD:function(a){return a.height},
gaJ:function(a){return a.width},
"%":"ClientRect|DOMRect"},
kJ:{"^":"jB;",
gl:function(a){return a.length},
u:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.ay(b,a,null,null,null))
return a[b]},
O:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$isa2:1,
$asa2:function(){return[W.t]},
$asH:function(){return[W.t]},
$isp:1,
$asp:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]},
$asa9:function(){return[W.t]},
"%":"MozNamedAttrMap|NamedNodeMap"},
iT:{"^":"dy;bK:a<",
R:function(a,b){var z,y,x,w,v,u
H.f(b,{func:1,ret:-1,args:[P.i,P.i]})
for(z=this.ga5(),y=z.length,x=this.a,w=J.U(x),v=0;v<z.length;z.length===y||(0,H.w)(z),++v){u=z[v]
b.$2(u,w.aj(x,u))}},
ga5:function(){var z,y,x,w,v
z=this.a.attributes
y=H.b([],[P.i])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.j(z,w)
v=H.h(z[w],"$iser")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asbK:function(){return[P.i,P.i]},
$asZ:function(){return[P.i,P.i]}},
iW:{"^":"iT;a",
u:function(a,b){return J.c9(this.a,H.y(b))},
gl:function(a){return this.ga5().length}},
iX:{"^":"i2;a,b,c,$ti"},
kG:{"^":"iX;a,b,c,$ti"},
iY:{"^":"cu;a,b,c,d,e,$ti",m:{
L:function(a,b,c,d,e){var z,y
z=W.eL(new W.iZ(c),W.R)
y=z!=null
if(y&&!0){H.f(z,{func:1,args:[W.R]})
if(y)J.f2(a,b,z,!1)}return new W.iY(0,a,b,z,!1,[e])}}},
iZ:{"^":"q:23;a",
$1:function(a){return this.a.$1(H.h(a,"$isR"))}},
br:{"^":"a;a",
cY:function(a){var z,y
z=$.$get$cK()
if(z.a===0){for(y=0;y<262;++y)z.F(0,C.O[y],W.jV())
for(y=0;y<12;++y)z.F(0,C.p[y],W.jW())}},
ag:function(a){return $.$get$ev().I(0,W.aV(a))},
a4:function(a,b,c){var z,y,x
z=W.aV(a)
y=$.$get$cK()
x=y.u(0,H.d(z)+"::"+b)
if(x==null)x=y.u(0,"*::"+b)
if(x==null)return!1
return H.cS(x.$4(a,b,c,this))},
$isab:1,
m:{
eu:function(a){var z,y
z=W.ca(null)
y=window.location
z=new W.br(new W.jl(z,y))
z.cY(a)
return z},
kH:[function(a,b,c,d){H.h(a,"$isE")
H.y(b)
H.y(c)
H.h(d,"$isbr")
return!0},"$4","jV",16,0,19],
kI:[function(a,b,c,d){var z,y,x
H.h(a,"$isE")
H.y(b)
H.y(c)
z=H.h(d,"$isbr").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","jW",16,0,19]}},
a9:{"^":"a;$ti",
gD:function(a){return new W.dr(a,this.gl(a),-1,[H.c2(this,a,"a9",0)])}},
dE:{"^":"a;a",
ag:function(a){return C.a.bV(this.a,new W.hn(a))},
a4:function(a,b,c){return C.a.bV(this.a,new W.hm(a,b,c))},
$isab:1},
hn:{"^":"q:13;a",
$1:function(a){return H.h(a,"$isab").ag(this.a)}},
hm:{"^":"q:13;a,b,c",
$1:function(a){return H.h(a,"$isab").a4(this.a,this.b,this.c)}},
jm:{"^":"a;",
d_:function(a,b,c,d){var z,y,x
this.a.a_(0,c)
z=b.bk(0,new W.jn())
y=b.bk(0,new W.jo())
this.b.a_(0,z)
x=this.c
x.a_(0,C.Q)
x.a_(0,y)},
ag:function(a){return this.a.I(0,W.aV(a))},
a4:["cQ",function(a,b,c){var z,y
z=W.aV(a)
y=this.c
if(y.I(0,H.d(z)+"::"+b))return this.d.eg(c)
else if(y.I(0,"*::"+b))return this.d.eg(c)
else{y=this.b
if(y.I(0,H.d(z)+"::"+b))return!0
else if(y.I(0,"*::"+b))return!0
else if(y.I(0,H.d(z)+"::*"))return!0
else if(y.I(0,"*::*"))return!0}return!1}],
$isab:1},
jn:{"^":"q:14;",
$1:function(a){return!C.a.I(C.p,H.y(a))}},
jo:{"^":"q:14;",
$1:function(a){return C.a.I(C.p,H.y(a))}},
jq:{"^":"jm;e,a,b,c,d",
a4:function(a,b,c){if(this.cQ(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.c9(a,"template")==="")return this.e.I(0,b)
return!1},
m:{
eD:function(){var z,y,x,w,v
z=P.i
y=P.dx(C.o,z)
x=H.o(C.o,0)
w=H.f(new W.jr(),{func:1,ret:z,args:[x]})
v=H.b(["TEMPLATE"],[z])
y=new W.jq(y,P.bk(null,null,null,z),P.bk(null,null,null,z),P.bk(null,null,null,z),null)
y.d_(null,new H.hg(C.o,w,[x,z]),v,null)
return y}}},
jr:{"^":"q:24;",
$1:function(a){return"TEMPLATE::"+H.d(H.y(a))}},
jp:{"^":"a;",
ag:function(a){var z=J.G(a)
if(!!z.$isdS)return!1
z=!!z.$iscw
if(z&&W.aV(a)==="foreignObject")return!1
if(z)return!0
return!1},
a4:function(a,b,c){if(b==="is"||C.c.aN(b,"on"))return!1
return this.ag(a)},
$isab:1},
dr:{"^":"a;a,b,c,0d,$ti",
sbJ:function(a){this.d=H.u(a,H.o(this,0))},
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sbJ(J.f1(this.a,z))
this.c=z
return!0}this.sbJ(null)
this.c=y
return!1},
gA:function(){return this.d},
$isap:1},
ab:{"^":"a;"},
jl:{"^":"a;a,b",$iskA:1},
eF:{"^":"a;a",
bn:function(a){new W.jy(this).$2(a,null)},
ao:function(a,b){if(b==null)J.d2(a)
else J.bv(b,a)},
dZ:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.f3(a)
x=J.c9(y.gbK(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.X(t)}v="element unprintable"
try{v=J.V(a)}catch(t){H.X(t)}try{u=W.aV(a)
this.dY(H.h(a,"$isE"),b,z,v,u,H.h(y,"$isZ"),H.y(x))}catch(t){if(H.X(t) instanceof P.ak)throw t
else{this.ao(a,b)
window
s="Removing corrupted element "+H.d(v)
if(typeof console!="undefined")window.console.warn(s)}}},
dY:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.ao(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.ag(a)){this.ao(a,b)
window
z="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.a4(a,"is",g)){this.ao(a,b)
window
z="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.ga5()
y=H.b(z.slice(0),[H.o(z,0)])
for(x=f.ga5().length-1,z=f.a,w=J.U(z);x>=0;--x){if(x>=y.length)return H.j(y,x)
v=y[x]
if(!this.a.a4(a,J.f7(v),w.aj(z,v))){window
u="Removing disallowed attribute <"+H.d(e)+" "+v+'="'+H.d(w.aj(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.aj(z,v)
w.dS(z,v)}}if(!!J.G(a).$ise0)this.bn(a.content)},
$iskt:1},
jy:{"^":"q:25;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.dZ(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.ao(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.f4(z)}catch(w){H.X(w)
v=H.h(z,"$ist")
if(x){u=v.parentNode
if(u!=null)J.bv(u,v)}else J.bv(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.h(y,"$ist")}}},
iV:{"^":"z+fj;"},
ja:{"^":"z+H;"},
jb:{"^":"ja+a9;"},
jf:{"^":"z+H;"},
jg:{"^":"jf+a9;"},
jv:{"^":"z+H;"},
jw:{"^":"jv+a9;"},
jA:{"^":"z+H;"},
jB:{"^":"jA+a9;"}}],["","",,P,{"^":"",
jO:function(a,b){var z={}
a.R(0,new P.jP(z))
return z},
dm:function(){var z=$.dl
if(z==null){z=J.c7(window.navigator.userAgent,"Opera",0)
$.dl=z}return z},
fs:function(){var z,y
z=$.di
if(z!=null)return z
y=$.dj
if(y==null){y=J.c7(window.navigator.userAgent,"Firefox",0)
$.dj=y}if(y)z="-moz-"
else{y=$.dk
if(y==null){y=!P.dm()&&J.c7(window.navigator.userAgent,"Trident/",0)
$.dk=y}if(y)z="-ms-"
else z=P.dm()?"-o-":"-webkit-"}$.di=z
return z},
jP:{"^":"q:10;a",
$2:function(a,b){this.a[a]=b}},
fG:{"^":"bI;a,b",
gaV:function(){var z,y,x
z=this.b
y=H.au(z,"H",0)
x=W.E
return new H.he(new H.cI(z,H.f(new P.fH(),{func:1,ret:P.D,args:[y]}),[y]),H.f(new P.fI(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){J.d1(this.b.a,b)},
gl:function(a){return J.ax(this.gaV().a)},
u:function(a,b){var z=this.gaV()
return z.b.$1(J.c8(z.a,b))},
gD:function(a){var z=P.ha(this.gaV(),!1,W.E)
return new J.af(z,z.length,0,[H.o(z,0)])},
$asH:function(){return[W.E]},
$asp:function(){return[W.E]},
$asc:function(){return[W.E]}},
fH:{"^":"q:15;",
$1:function(a){return!!J.G(H.h(a,"$ist")).$isE}},
fI:{"^":"q:35;",
$1:function(a){return H.aP(H.h(a,"$ist"),"$isE")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",dS:{"^":"cw;",$isdS:1,"%":"SVGScriptElement"},cw:{"^":"E;",
gbY:function(a){return new P.fG(a,new W.a0(a))},
Y:function(a,b,c,d){var z,y,x,w,v,u
z=H.b([],[W.ab])
C.a.h(z,W.eu(null))
C.a.h(z,W.eD())
C.a.h(z,new W.jp())
c=new W.eF(new W.dE(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.j).ey(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a0(w)
u=z.ga7(z)
for(z=J.U(v);x=u.firstChild,x!=null;)z.p(v,x)
return v},
$iscw:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"}}],["","",,P,{"^":""}],["","",,P,{"^":"",fa:{"^":"z;",$isfa:1,"%":"WebGLBuffer"},fK:{"^":"z;",$isfK:1,"%":"WebGLFramebuffer"},hC:{"^":"z;",$ishC:1,"%":"WebGLProgram"},cq:{"^":"z;",
bW:function(a,b,c){return a.attachShader(b,c)},
a0:function(a,b,c){return a.bindBuffer(b,c)},
ek:function(a,b,c){return a.bindFramebuffer(b,c)},
bX:function(a,b,c,d){return a.bufferData(b,c,d)},
eo:function(a,b){return a.clear(b)},
ep:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
eq:function(a,b){return a.clearDepth(b)},
er:function(a,b){return a.compileShader(b)},
eA:function(a,b){return a.createShader(b)},
eC:function(a,b){return a.deleteProgram(b)},
eD:function(a,b){return a.deleteShader(b)},
eG:function(a,b){return a.depthFunc(b)},
c_:function(a,b){return a.disableVertexAttribArray(b)},
eI:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c0:function(a,b){return a.enable(b)},
c1:function(a,b){return a.enableVertexAttribArray(b)},
cr:function(a,b,c){return a.getActiveAttrib(b,c)},
cs:function(a,b,c){return a.getActiveUniform(b,c)},
ct:function(a,b,c){return a.getAttribLocation(b,c)},
bm:function(a,b){return a.getParameter(b)},
cw:function(a,b){return a.getProgramInfoLog(b)},
aK:function(a,b,c){return a.getProgramParameter(b,c)},
cA:function(a,b){return a.getShaderInfoLog(b)},
cB:function(a,b,c){return a.getShaderParameter(b,c)},
cC:function(a,b,c){return a.getUniformLocation(b,c)},
eV:function(a,b){return a.linkProgram(b)},
cJ:function(a,b,c){return a.shaderSource(b,c)},
ck:function(a,b,c){return a.uniform1f(b,c)},
cl:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ft:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cn:function(a,b){return a.useProgram(b)},
fu:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
fv:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$iscq:1,
"%":"WebGLRenderingContext"},hT:{"^":"z;",$ishT:1,"%":"WebGLShader"},is:{"^":"z;",$isis:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",bc:{"^":"a;0a,0b,0c,0d,$ti",
sds:function(a){this.a=H.n(a,"$isc",this.$ti,"$asc")},
sbN:function(a){this.b=H.f(a,{func:1,ret:P.D,args:[[P.p,H.o(this,0)]]})},
sbM:function(a){this.c=H.f(a,{func:1,ret:-1,args:[P.v,[P.p,H.o(this,0)]]})},
sbO:function(a){this.d=H.f(a,{func:1,ret:-1,args:[P.v,[P.p,H.o(this,0)]]})},
cG:function(a,b,c){var z={func:1,ret:-1,args:[P.v,[P.p,H.o(this,0)]]}
H.f(a,z)
H.f(c,z)
this.sbN(b)
this.sbM(a)
this.sbO(c)},
bo:function(a,b){return this.cG(a,null,b)},
dM:function(a){H.n(a,"$isp",this.$ti,"$asp")
return!0},
du:function(a,b){var z
H.n(b,"$isp",this.$ti,"$asp")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gD:function(a){var z=this.a
return new J.af(z,z.length,0,[H.o(z,0)])},
O:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.j(z,b)
return z[b]},
$isp:1,
m:{
de:function(a){var z=new O.bc([a])
z.sds(H.b([],[a]))
z.sbN(null)
z.sbM(null)
z.sbO(null)
return z}}},cn:{"^":"a;0a,0b",
saX:function(a){this.a=H.n(a,"$isc",[V.bl],"$asc")},
gl:function(a){return this.a.length},
gw:function(){var z=this.b
if(z==null){z=D.ao()
this.b=z}return z},
cV:function(a){var z=this.b
if(!(z==null))z.T(a)},
a8:function(){return this.cV(null)},
gaq:function(){var z=this.a
if(z.length>0)return C.a.gaF(z)
else return V.dC()},
cb:function(a){var z=this.a
if(a==null)C.a.h(z,V.dC())
else C.a.h(z,a)
this.a8()},
bh:function(){var z=this.a
if(z.length>0){z.pop()
this.a8()}}}}],["","",,E,{"^":"",d5:{"^":"a;"},a8:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0X:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sd6:function(a,b){this.y=H.n(b,"$isbc",[E.a8],"$asbc")},
sX:function(a){this.z=H.h(a,"$isbf")},
bz:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.af(z,z.length,0,[H.o(z,0)]);z.t();){y=z.d
if(y.f==null)y.bz()}},
sbq:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gw().J(0,this.gc6())
y=this.c
if(y!=null)y.gw().h(0,this.gc6())
x=new D.I("shape",z,this.c,this,[F.dU])
x.b=!0
this.S(x)}},
scf:function(a){var z,y,x
z=this.f
if(z==null?a!=null:z!==a){if(z!=null)z.gw().J(0,this.gc7())
y=this.f
this.f=a
if(a!=null)a.gw().h(0,this.gc7())
this.bz()
x=new D.I("technique",y,this.f,this,[O.bQ])
x.b=!0
this.S(x)}},
sar:function(a){var z,y
if(!J.P(this.r,a)){z=this.r
if(z!=null)z.gw().J(0,this.gc5())
if(a!=null)a.gw().h(0,this.gc5())
this.r=a
y=new D.I("mover",z,a,this,[U.bL])
y.b=!0
this.S(y)}},
cm:function(a){var z,y,x,w,v,u,t,s
z=this.r
if(z!=null){y=z.r
x=a.e
if(y<x){z.r=x
y=z.y
if(!(y==null))++y.d
z.sco(z.a+z.d*a.y)
z.sc9(z.b+z.e*a.y)
z.scd(z.c+z.f*a.y)
y=z.c
w=Math.cos(y)
v=Math.sin(y)
y=V.aq(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)
x=z.b
w=Math.cos(x)
v=Math.sin(x)
y=y.P(0,V.aq(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))
x=z.a
w=Math.cos(x)
v=Math.sin(x)
z.x=y.P(0,V.aq(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1))
y=z.y
if(!(y==null))y.aI()}u=z.x}else u=null
if(!J.P(u,this.x)){t=this.x
this.x=u
s=new D.I("matrix",t,u,this,[V.bl])
s.b=!0
this.S(s)}for(z=this.y.a,z=new J.af(z,z.length,0,[H.o(z,0)]);z.t();)z.d.cm(a)},
ai:function(a){var z,y,x,w,v,u,t,s,r
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gaq())
else C.a.h(z.a,y.P(0,z.gaq()))
z.a8()
a.cc(this.f)
z=a.dy
x=(z&&C.a).gaF(z)
if(x!=null&&this.d!=null){z=x.a
if(z==null){w=a.fr.u(0,"Depth")
if(w==null){z=a.a
w=new A.fp(z,"Depth")
w.cT(z,"Depth")
y=$.fr
v=$.fq
w.c=y
w.d=v
w.e=w.bI(y,35633)
w.f=w.bI(w.d,35632)
y=z.createProgram()
w.r=y
C.b.bW(z,y,w.e)
C.b.bW(z,w.r,w.f)
C.b.eV(z,w.r)
if(!H.cS(C.b.aK(z,w.r,35714))){u=C.b.cw(z,w.r)
C.b.eC(z,w.r)
H.M(P.K("Failed to link shader: "+H.d(u)))}w.e0()
w.e2()
w.z=w.x.u(0,"posAttr")
w.Q=H.aP(w.y.u(0,"objClr"),"$iscD")
w.ch=H.aP(w.y.u(0,"fogClr"),"$iscD")
w.cx=H.aP(w.y.u(0,"fogStart"),"$iscB")
w.cy=H.aP(w.y.u(0,"fogStop"),"$iscB")
w.db=H.aP(w.y.u(0,"viewObjMat"),"$iscE")
w.dx=H.aP(w.y.u(0,"projMat"),"$iscE")
if(a.fr.bZ("Depth"))H.M(P.K('Shader cache already contains a shader by the name "Depth".'))
a.fr.F(0,"Depth",w)}x.a=w
z=w}y=this.e
if(!(y instanceof Z.d9)){this.e=null
y=null}if(y==null){z=this.d.em(new Z.iL(a.a),$.$get$ai())
y=z.eK($.$get$ai())
v=x.a
y.e=v.z.c
this.e=z
z=v}y=a.a
C.b.cn(y,z.r)
z.x.eJ()
v=x.b
t=z.Q
t.toString
s=v.a
r=v.b
v=v.c
C.b.cl(t.a,t.d,s,r,v)
v=x.c
r=z.ch
r.toString
s=v.a
t=v.b
v=v.c
C.b.cl(r.a,r.d,s,t,v)
v=x.d
t=z.cx
C.b.ck(t.a,t.d,v)
v=x.e
t=z.cy
C.b.ck(t.a,t.d,v)
v=a.cy.gaq()
t=z.dx
t.toString
t.bp(v.ci(0,!0))
v=a.cx
if(v==null){v=a.db.gaq().P(0,a.dx.gaq())
a.cx=v}z=z.db
z.toString
z.bp(v.ci(0,!0))
v=this.e
v.b6(a)
v.ai(a)
v.fs(a)
v=x.a
v.toString
C.b.cn(y,null)
v.x.eH()}for(z=this.y.a,z=new J.af(z,z.length,0,[H.o(z,0)]);z.t();)z.d.ai(a)
a.ca()
a.dx.bh()},
S:function(a){var z=this.z
if(!(z==null))z.T(a)},
V:function(){return this.S(null)},
f2:[function(a){H.h(a,"$isA")
this.e=null
this.S(a)},function(){return this.f2(null)},"fW","$1","$0","gc6",0,2,2],
f3:[function(a){this.S(H.h(a,"$isA"))},function(){return this.f3(null)},"fX","$1","$0","gc7",0,2,2],
f1:[function(a){this.S(H.h(a,"$isA"))},function(){return this.f1(null)},"fV","$1","$0","gc5",0,2,2],
f_:[function(a){this.S(H.h(a,"$isA"))},function(){return this.f_(null)},"fT","$1","$0","gc4",0,2,2],
fS:[function(a,b){var z,y,x,w,v,u,t
H.n(b,"$isp",[E.a8],"$asp")
for(z=b.length,y=this.gc4(),x={func:1,ret:-1,args:[D.A]},w=[x],v=0;v<b.length;b.length===z||(0,H.w)(b),++v){u=b[v]
if(u!=null){if(u.gX()==null){t=new D.bf()
t.sad(null)
t.sb0(null)
t.c=null
t.d=0
u.sX(t)}t=u.gX()
t.toString
H.f(y,x)
if(t.a==null)t.sad(H.b([],w))
t=t.a;(t&&C.a).h(t,y)}}this.V()},"$2","geZ",8,0,4],
fU:[function(a,b){var z,y
H.n(b,"$isp",[E.a8],"$asp")
for(z=b.gD(b),y=this.gc4();z.t();)z.gA().gw().J(0,y)
this.V()},"$2","gf0",8,0,4],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isdD:1},hJ:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
se8:function(a){this.dy=H.n(a,"$isc",[O.bQ],"$asc")},
se3:function(a){this.fr=H.n(a,"$isZ",[P.i,A.cr],"$asZ")},
cR:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.bB(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cn()
y=[V.bl]
z.saX(H.b([],y))
z.b=null
z.gw().h(0,new E.hL(this))
this.cy=z
z=new O.cn()
z.saX(H.b([],y))
z.b=null
z.gw().h(0,new E.hM(this))
this.db=z
z=new O.cn()
z.saX(H.b([],y))
z.b=null
z.gw().h(0,new E.hN(this))
this.dx=z
this.se8(H.b([],[O.bQ]))
z=this.dy;(z&&C.a).h(z,null)
this.se3(new H.aA(0,0,[P.i,A.cr]))},
cc:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaF(z):a;(z&&C.a).h(z,y)},
ca:function(){var z=this.dy
if(z.length>1)z.pop()},
m:{
hK:function(a,b){var z=new E.hJ(a,b)
z.cR(a,b)
return z}}},hL:{"^":"q:6;a",
$1:function(a){var z
H.h(a,"$isA")
z=this.a
z.z=null
z.ch=null}},hM:{"^":"q:6;a",
$1:function(a){var z
H.h(a,"$isA")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hN:{"^":"q:6;a",
$1:function(a){var z
H.h(a,"$isA")
z=this.a
z.ch=null
z.cx=null}},ib:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0X:x<,0y,0z,0Q,0ch,0cx,0cy",
sX:function(a){this.x=H.h(a,"$isbf")},
cX:[function(a){H.h(a,"$isA")
this.fg()},function(){return this.cX(null)},"cW","$1","$0","gbt",0,2,2],
bQ:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.P()
if(typeof z!=="number")return H.aO(z)
x=C.e.c2(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.P()
w=C.e.c2(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.e2(C.m,this.gff())}},
fg:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.f(new E.id(this),{func:1,ret:-1,args:[P.a6]})
C.A.dd(z)
C.A.dW(z,W.eL(y,P.a6))}},"$0","gff",0,0,1],
fe:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.bQ()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.bB(w,!1)
x.y=P.fw(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.a8()
w=x.db
C.a.sl(w.a,0)
w.a8()
w=x.dx
C.a.sl(w.a,0)
w.a8()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.ai(this.e)}}catch(v){z=H.X(v)
y=H.aN(v)
P.eW("Error: "+H.d(z))
P.eW("Stack: "+H.d(y))
throw H.e(z)}},
m:{
ic:function(a,b,c,d,e){var z,y,x,w
z=J.G(a)
if(!!z.$isce)return E.e1(a,!0,!0,!0,!1)
y=W.dc(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gbY(a).h(0,y)
w=E.e1(y,!0,!0,!0,!1)
w.a=a
return w},
e1:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.ib()
y=P.h8(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.i,null)
x=C.t.bl(a,"webgl",y)
x=H.h(x==null?C.t.bl(a,"experimental-webgl",y):x,"$iscq")
if(x==null)H.M(P.K("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hK(x,a)
w=new T.ia(x)
w.b=H.O((x&&C.b).bm(x,3379))
w.c=H.O(C.b.bm(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.iB(a)
v=new X.h4()
v.c=new X.aZ(!1,!1,!1)
v.sdQ(P.bk(null,null,null,P.v))
w.b=v
v=new X.hi(w)
v.f=0
v.r=V.bo()
v.x=V.bo()
v.Q=1
v.ch=1
w.c=v
v=new X.hc(w)
v.r=0
v.x=V.bo()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.ig(w)
v.e=0
v.f=V.bo()
v.r=V.bo()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.sde(H.b([],[[P.cu,P.a]]))
v=w.z
u=document
t=W.a3
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.L(u,"contextmenu",H.f(w.gdA(),s),!1,t))
v=w.z
r=W.R
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.L(a,"focus",H.f(w.gdD(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.L(a,"blur",H.f(w.gdv(),q),!1,r))
v=w.z
p=W.aX
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.L(u,"keyup",H.f(w.gdF(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.L(u,"keydown",H.f(w.gdE(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.L(a,"mousedown",H.f(w.gdH(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.L(a,"mouseup",H.f(w.gdJ(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.L(a,"mousemove",H.f(w.gdI(),s),!1,t))
p=w.z
o=W.b3;(p&&C.a).h(p,W.L(a,H.y(W.fB(a)),H.f(w.gdK(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.L(u,"mousemove",H.f(w.gdB(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.L(u,"mouseup",H.f(w.gdC(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.L(u,"pointerlockchange",H.f(w.gdL(),q),!1,r))
r=w.z
q=W.aD
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.L(a,"touchstart",H.f(w.gdP(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.L(a,"touchend",H.f(w.gdN(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.L(a,"touchmove",H.f(w.gdO(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.bB(Date.now(),!1)
z.cy=0
z.bQ()
return z}}},id:{"^":"q:27;a",
$1:function(a){var z
H.k8(a)
z=this.a
if(z.ch){z.ch=!1
z.fe()}}}}],["","",,Z,{"^":"",ep:{"^":"a;a,b",$iskg:1,m:{
cH:function(a,b,c){var z
H.n(c,"$isc",[P.v],"$asc")
z=a.createBuffer()
C.b.a0(a,b,z)
C.b.bX(a,b,new Int16Array(H.cN(c)),35044)
C.b.a0(a,b,null)
return new Z.ep(b,z)}}},d8:{"^":"d5;a,b,c,d,e",
b6:function(a){var z,y,x
try{y=a.a
C.b.c1(y,this.e)
C.b.fu(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.X(x)
y=P.K('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.d(z))
throw H.e(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.d(this.e)+"]"}},iL:{"^":"a;a",$iskh:1},d9:{"^":"a;a,0b,c,d",
sdm:function(a){this.b=H.n(a,"$isc",[Z.bi],"$asc")},
eK:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
b6:function(a){var z,y
z=this.a
C.b.a0(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].b6(a)},
fs:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.b.c_(x,z[y].e)
C.b.a0(x,this.a.a,null)},
ai:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.j(w,x)
v=w[x]
w=v.c
u=w.a
C.b.a0(y,u,w.b)
C.b.eI(y,v.a,v.b,5123,0)
C.b.a0(y,u,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.i]
y=H.b([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.w)(x),++v)C.a.h(y,x[v].i(0))
u=H.b([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.V(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(y,", ")+"\nAttrs:   "+C.a.k(u,", ")},
$isky:1},bi:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aC(this.c)+"'")+"]"}},el:{"^":"a;a",
gbr:function(a){var z,y
z=this.a
y=(z&$.$get$ai().a)!==0?3:0
if((z&$.$get$aG().a)!==0)y+=3
if((z&$.$get$aF().a)!==0)y+=3
if((z&$.$get$aH().a)!==0)y+=2
if((z&$.$get$aI().a)!==0)y+=3
if((z&$.$get$b1().a)!==0)y+=3
if((z&$.$get$b2().a)!==0)y+=4
if((z&$.$get$aJ().a)!==0)++y
return(z&$.$get$aE().a)!==0?y+4:y},
eh:function(a){var z,y,x
z=$.$get$ai()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aG()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aF()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aH()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aI()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b1()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b2()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aJ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aE()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eo()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.el))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.b([],[P.i])
y=this.a
if((y&$.$get$ai().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aG().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aF().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aH().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aI().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$b1().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$b2().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aJ().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aE().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.k(z,"|")},
m:{
a_:function(a){return new Z.el(a)}}}}],["","",,D,{"^":"",fd:{"^":"a;"},bf:{"^":"a;0a,0b,0c,0d",
sad:function(a){this.a=H.n(a,"$isc",[{func:1,ret:-1,args:[D.A]}],"$asc")},
sb0:function(a){this.b=H.n(a,"$isc",[{func:1,ret:-1,args:[D.A]}],"$asc")},
h:function(a,b){var z={func:1,ret:-1,args:[D.A]}
H.f(b,z)
if(this.a==null)this.sad(H.b([],[z]))
z=this.a;(z&&C.a).h(z,b)},
J:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[D.A]})
z=this.a
z=z==null?null:C.a.I(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).J(z,b)||!1}else y=!1
return y},
T:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w)w=!0
else w=!1
if(w)return!1
if(a==null){a=new D.A(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.R(y,new D.fF(z))
return!0},
fh:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.T(y)}}},
aI:function(){return this.fh(!0,!1)},
m:{
ao:function(){var z=new D.bf()
z.sad(null)
z.sb0(null)
z.c=null
z.d=0
return z}}},fF:{"^":"q:28;a",
$1:function(a){var z
H.f(a,{func:1,ret:-1,args:[D.A]})
z=this.a.a
z.b
a.$1(z)}},A:{"^":"a;a,0b"},fU:{"^":"A;c,d,a,0b,$ti"},fV:{"^":"A;c,d,a,0b,$ti"},I:{"^":"A;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.d(this.d)+" => "+H.d(this.e)}}}],["","",,X,{"^":"",da:{"^":"a;a,b",
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.da))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}},du:{"^":"a;a,b",
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.du))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}},h4:{"^":"a;0a,0b,0c,0d",
sdQ:function(a){this.d=H.n(a,"$isdT",[P.v],"$asdT")},
f9:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
f5:function(a){this.c=a.b
this.d.J(0,a.a)
return!1}},hc:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
bg:function(a,b){this.r=a.a
return!1},
at:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.cE()
if(typeof z!=="number")return z.cp()
this.r=(z&~y)>>>0
return!1},
as:function(a,b){return!1},
fa:function(a){return!1},
dG:function(a,b,c){return}},aZ:{"^":"a;a,b,c",
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aZ))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},hi:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bg:function(a,b){this.f=a.a
return!1},
at:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.cE()
if(typeof z!=="number")return z.cp()
this.f=(z&~y)>>>0
return!1},
as:function(a,b){return!1},
fb:function(a,b){return!1}},ig:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
f8:function(a){H.n(a,"$isc",[V.ac],"$asc")
return!1},
f6:function(a){H.n(a,"$isc",[V.ac],"$asc")
return!1},
f7:function(a){H.n(a,"$isc",[V.ac],"$asc")
return!1}},iB:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
sde:function(a){this.z=H.n(a,"$isc",[[P.cu,P.a]],"$asc")},
bH:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.du(z,new X.aZ(y,a.altKey,a.shiftKey))},
af:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aZ(y,a.altKey,a.shiftKey)},
b5:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aZ(y,a.altKey,a.shiftKey)},
a3:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.a1()
v=z.top
if(typeof x!=="number")return x.a1()
return new V.ac(y-w,x-v)},
an:function(a){return new V.bq(a.movementX,a.movementY)},
b2:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.b([],[V.ac])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.w)(x),++v){u=x[v]
t=C.e.Z(u.pageX)
C.e.Z(u.pageY)
s=z.left
C.e.Z(u.pageX)
C.a.h(y,new V.ac(t-s,C.e.Z(u.pageY)-z.top))}return y},
a2:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.da(z,new X.aZ(y,a.altKey,a.shiftKey))},
aY:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.a1()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.a1()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
fG:[function(a){this.f=!0},"$1","gdD",4,0,5],
fA:[function(a){this.f=!1},"$1","gdv",4,0,5],
fD:[function(a){H.h(a,"$isa3")
if(this.f&&this.aY(a))a.preventDefault()},"$1","gdA",4,0,3],
fI:[function(a){var z
H.h(a,"$isaX")
if(!this.f)return
z=this.bH(a)
this.b.f9(z)},"$1","gdF",4,0,17],
fH:[function(a){var z
H.h(a,"$isaX")
if(!this.f)return
z=this.bH(a)
this.b.f5(z)},"$1","gdE",4,0,17],
fJ:[function(a){var z,y,x,w
H.h(a,"$isa3")
z=this.a
z.focus()
this.f=!0
this.af(a)
if(this.x){y=this.a2(a)
x=this.an(a)
if(this.d.bg(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.a2(a)
w=this.a3(a)
if(this.c.bg(y,w))a.preventDefault()},"$1","gdH",4,0,3],
fL:[function(a){var z,y,x
H.h(a,"$isa3")
this.af(a)
z=this.a2(a)
if(this.x){y=this.an(a)
if(this.d.at(z,y))a.preventDefault()
return}if(this.r)return
x=this.a3(a)
if(this.c.at(z,x))a.preventDefault()},"$1","gdJ",4,0,3],
fF:[function(a){var z,y,x
H.h(a,"$isa3")
if(!this.aY(a)){this.af(a)
z=this.a2(a)
if(this.x){y=this.an(a)
if(this.d.at(z,y))a.preventDefault()
return}if(this.r)return
x=this.a3(a)
if(this.c.at(z,x))a.preventDefault()}},"$1","gdC",4,0,3],
fK:[function(a){var z,y,x
H.h(a,"$isa3")
this.af(a)
z=this.a2(a)
if(this.x){y=this.an(a)
if(this.d.as(z,y))a.preventDefault()
return}if(this.r)return
x=this.a3(a)
if(this.c.as(z,x))a.preventDefault()},"$1","gdI",4,0,3],
fE:[function(a){var z,y,x
H.h(a,"$isa3")
if(!this.aY(a)){this.af(a)
z=this.a2(a)
if(this.x){y=this.an(a)
if(this.d.as(z,y))a.preventDefault()
return}if(this.r)return
x=this.a3(a)
if(this.c.as(z,x))a.preventDefault()}},"$1","gdB",4,0,3],
fM:[function(a){var z,y
H.h(a,"$isb3")
this.af(a)
z=new V.bq((a&&C.z).geE(a),C.z.geF(a)).K(0,180)
if(this.x){if(this.d.fa(z))a.preventDefault()
return}if(this.r)return
y=this.a3(a)
if(this.c.fb(z,y))a.preventDefault()},"$1","gdK",4,0,31],
fN:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.a2(this.y)
x=this.a3(this.y)
this.d.dG(y,x,z)}},"$1","gdL",4,0,5],
fQ:[function(a){var z
H.h(a,"$isaD")
this.a.focus()
this.f=!0
this.b5(a)
z=this.b2(a)
if(this.e.f8(z))a.preventDefault()},"$1","gdP",4,0,7],
fO:[function(a){var z
H.h(a,"$isaD")
this.b5(a)
z=this.b2(a)
if(this.e.f6(z))a.preventDefault()},"$1","gdN",4,0,7],
fP:[function(a){var z
H.h(a,"$isaD")
this.b5(a)
z=this.b2(a)
if(this.e.f7(z))a.preventDefault()},"$1","gdO",4,0,7]}}],["","",,V,{"^":"",
kj:[function(a,b){if(typeof b!=="number")return b.a1()
if(typeof a!=="number")return H.aO(a)
return Math.abs(b-a)<=1e-9},"$2","hh",8,0,29],
d0:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.e.cD(a-b,z)
return(a<0?a+z:a)+b},
x:function(a,b,c){if(a==null)return C.c.W("null",c)
return C.c.W(C.e.fq($.k.$2(a,0)?0:a,b),c+b+1)},
c_:function(a,b,c){var z,y,x,w,v
H.n(a,"$isc",[P.r],"$asc")
z=H.b([],[P.i])
for(y=0,x=0;x<4;++x){w=V.x(a[x],b,c)
y=Math.max(y,w.length)
C.a.h(z,w)}for(v=z.length-1;v>=0;--v){if(v>=z.length)return H.j(z,v)
C.a.F(z,v,C.c.W(z[v],y))}return z},
by:{"^":"a;a,b,c",
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.by))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"}},
bz:{"^":"a;a,b,c,d",
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bz))return!1
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
bl:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ci:function(a,b){var z=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.r])
return z},
P:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bl))return!1
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
c3:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.r]
y=V.c_(H.b([this.a,this.e,this.y,this.cx],z),b,c)
x=V.c_(H.b([this.b,this.f,this.z,this.cy],z),b,c)
w=V.c_(H.b([this.c,this.r,this.Q,this.db],z),b,c)
v=V.c_(H.b([this.d,this.x,this.ch,this.dx],z),b,c)
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
B:function(){return this.c3("",3,0)},
q:function(a){return this.c3(a,3,0)},
m:{
dC:function(){var z=$.dB
if(z==null){z=V.aq(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.dB=z}return z},
aq:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bl(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)}}},
ac:{"^":"a;a,b",
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ac))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+"]"},
m:{
bo:function(){var z=$.dJ
if(z==null){z=new V.ac(0,0)
$.dJ=z}return z}}},
bM:{"^":"a;a,b,c",
a1:function(a,b){return new V.bM(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bM))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"}},
dL:{"^":"a;a,b,c,d",
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dL))return!1
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
dP:{"^":"a;a,b,c,d",
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dP))return!1
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
hI:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dP(a,b,c,d)}}},
bq:{"^":"a;a,b",
eU:[function(a){var z,y
z=this.a
if(typeof z!=="number")return z.P()
y=this.b
if(typeof y!=="number")return y.P()
return Math.sqrt(z*z+y*y)},"$0","gl",1,0,18],
K:function(a,b){var z,y
if($.k.$2(b,0)){z=$.eh
if(z==null){z=new V.bq(0,0)
$.eh=z}return z}z=this.a
if(typeof z!=="number")return z.K()
y=this.b
if(typeof y!=="number")return y.K()
return new V.bq(z/b,y/b)},
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bq))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+"]"}},
N:{"^":"a;a,b,c",
eU:[function(a){return Math.sqrt(this.N(this))},"$0","gl",1,0,18],
N:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bf:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.N(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
bd:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.N(z*y-x*w,x*v-u*y,u*w-z*v)},
E:function(a,b){return new V.N(this.a+b.a,this.b+b.b,this.c+b.c)},
aM:function(a){return new V.N(-this.a,-this.b,-this.c)},
K:function(a,b){if($.k.$2(b,0))return V.cF()
return new V.N(this.a/b,this.b/b,this.c/b)},
eS:function(){if(!$.k.$2(0,this.a))return!1
if(!$.k.$2(0,this.b))return!1
if(!$.k.$2(0,this.c))return!1
return!0},
n:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.N))return!1
z=b.a
if(!$.k.$2(z,this.a))return!1
z=b.b
if(!$.k.$2(z,this.b))return!1
z=b.c
if(!$.k.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"},
m:{
cF:function(){var z=$.ek
if(z==null){z=new V.N(0,0,0)
$.ek=z}return z}}}}],["","",,U,{"^":"",df:{"^":"bL;0a,0b",
gw:function(){var z=this.b
if(z==null){z=D.ao()
this.b=z}return z},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.df))return!1
return J.P(this.a,b.a)},
i:function(a){return"Constant: "+this.a.q("          ")}},bL:{"^":"fd;"},dR:{"^":"bL;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gw:function(){var z=this.y
if(z==null){z=D.ao()
this.y=z}return z},
ae:function(a){var z=this.y
if(!(z==null))z.T(a)},
sco:function(a){var z,y
a=V.d0(a,0,6.283185307179586)
z=this.a
if(!$.k.$2(z,a)){y=this.a
this.a=a
z=new D.I("yaw",y,a,this,[P.r])
z.b=!0
this.ae(z)}},
sc9:function(a){var z,y
a=V.d0(a,0,6.283185307179586)
z=this.b
if(!$.k.$2(z,a)){y=this.b
this.b=a
z=new D.I("pitch",y,a,this,[P.r])
z.b=!0
this.ae(z)}},
scd:function(a){var z,y
a=V.d0(a,0,6.283185307179586)
z=this.c
if(!$.k.$2(z,a)){y=this.c
this.c=a
z=new D.I("roll",y,a,this,[P.r])
z.b=!0
this.ae(z)}},
n:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dR))return!1
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
i:function(a){return"Rotater: ["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"], ["+V.x(this.d,3,0)+", "+V.x(this.e,3,0)+", "+V.x(this.f,3,0)+"]"}}}],["","",,M,{"^":"",fD:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
scZ:function(a,b){this.d=H.n(b,"$isbc",[E.a8],"$asbc")},
ak:[function(a){var z
H.h(a,"$isA")
z=this.x
if(!(z==null))z.T(a)},function(){return this.ak(null)},"fw","$1","$0","ga9",0,2,2],
fB:[function(a,b){var z,y,x,w,v,u,t,s
z=E.a8
H.n(b,"$isp",[z],"$asp")
for(y=b.length,x=this.ga9(),w={func:1,ret:-1,args:[D.A]},v=[w],u=0;u<b.length;b.length===y||(0,H.w)(b),++u){t=b[u]
if(t!=null){if(t.gX()==null){s=new D.bf()
s.sad(null)
s.sb0(null)
s.c=null
s.d=0
t.sX(s)}s=t.gX()
s.toString
H.f(x,w)
if(s.a==null)s.sad(H.b([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.fU(a,b,this,[z])
z.b=!0
this.ak(z)},"$2","gdw",8,0,4],
fC:[function(a,b){var z,y,x
z=E.a8
H.n(b,"$isp",[z],"$asp")
for(y=b.gD(b),x=this.ga9();y.t();)y.gA().gw().J(0,x)
z=new D.fV(a,b,this,[z])
z.b=!0
this.ak(z)},"$2","gdz",8,0,4],
gw:function(){var z=this.x
if(z==null){z=D.ao()
this.x=z}return z},
ai:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
a.cc(this.c)
z=this.b
z.toString
y=a.a
C.b.ek(y,36160,null)
C.b.c0(y,2884)
C.b.c0(y,2929)
C.b.eG(y,513)
x=y.drawingBufferWidth
w=y.drawingBufferHeight
v=z.r
u=v.a
if(typeof x!=="number")return H.aO(x)
t=C.e.Z(u*x)
u=v.b
if(typeof w!=="number")return H.aO(w)
s=C.e.Z(u*w)
u=C.e.Z(v.c*x)
a.c=u
v=C.e.Z(v.d*w)
a.d=v
C.b.fv(y,t,s,u,v)
C.b.eq(y,z.c)
z=z.a
C.b.ep(y,z.a,z.b,z.c,z.d)
C.b.eo(y,16640)
z=this.a
y=a.c
v=a.d
u=z.c
r=z.d
q=z.e
p=q-r
o=1/Math.tan(u*0.5)
n=V.aq(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.cb(n)
y=$.dI
if(y==null){y=$.dK
if(y==null){y=new V.bM(0,0,0)
$.dK=y}v=$.ej
if(v==null){v=new V.N(0,1,0)
$.ej=v}u=$.ei
if(u==null){u=new V.N(0,0,-1)
$.ei=u}m=u.K(0,Math.sqrt(u.N(u)))
v=v.bd(m)
l=v.K(0,Math.sqrt(v.N(v)))
k=m.bd(l)
j=new V.N(y.a,y.b,y.c)
i=l.aM(0).N(j)
h=k.aM(0).N(j)
g=m.aM(0).N(j)
y=V.aq(l.a,k.a,m.a,i,l.b,k.b,m.b,h,l.c,k.c,m.c,g,0,0,0,1)
$.dI=y
f=y}else f=y
z=z.b
if(z!=null){e=z.a
if(e!=null)f=e.P(0,f)}a.db.cb(f)
for(z=this.d.a,z=new J.af(z,z.length,0,[H.o(z,0)]);z.t();)z.d.cm(a)
for(z=this.d.a,z=new J.af(z,z.length,0,[H.o(z,0)]);z.t();)z.d.ai(a)
this.a.toString
a.cy.bh()
a.db.bh()
this.b.toString
a.ca()},
$isku:1}}],["","",,A,{"^":"",d3:{"^":"a;a,b,c"},f9:{"^":"a;a",
u:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
eJ:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x){w=z[x]
C.b.c1(w.a,w.c)}},
eH:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x){w=z[x]
C.b.c_(w.a,w.c)}}},fp:{"^":"cr;0z,0Q,0ch,0cx,0cy,0db,0dx,a,b,0c,0d,0e,0f,0r,0x,0y"},cr:{"^":"d5;",
cT:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
bI:function(a,b){var z,y,x
z=this.a
y=C.b.eA(z,b)
C.b.cJ(z,y,a)
C.b.er(z,y)
if(!H.cS(C.b.cB(z,y,35713))){x=C.b.cA(z,y)
C.b.eD(z,y)
throw H.e(P.K("Error compiling shader '"+H.d(y)+"': "+H.d(x)))}return y},
e0:function(){var z,y,x,w,v,u
z=H.b([],[A.d3])
y=this.a
x=H.O(C.b.aK(y,this.r,35721))
if(typeof x!=="number")return H.aO(x)
w=0
for(;w<x;++w){v=C.b.cr(y,this.r,w)
u=C.b.ct(y,this.r,v.name)
C.a.h(z,new A.d3(y,v.name,u))}this.x=new A.f9(z)},
e2:function(){var z,y,x,w,v,u
z=H.b([],[A.Q])
y=this.a
x=H.O(C.b.aK(y,this.r,35718))
if(typeof x!=="number")return H.aO(x)
w=0
for(;w<x;++w){v=C.b.cs(y,this.r,w)
u=C.b.cC(y,this.r,v.name)
C.a.h(z,this.eB(v.type,v.size,v.name,u))}this.y=new A.ir(z)},
ac:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ij(z,y,b,c)
else return A.cC(z,y,b,a,c)},
d9:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.iv(z,y,b,c)
else return A.cC(z,y,b,a,c)},
da:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.iw(z,y,b,c)
else return A.cC(z,y,b,a,c)},
aB:function(a,b){return new P.es(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.d(b)+"."))},
eB:function(a,b,c,d){switch(a){case 5120:return this.ac(b,c,d)
case 5121:return this.ac(b,c,d)
case 5122:return this.ac(b,c,d)
case 5123:return this.ac(b,c,d)
case 5124:return this.ac(b,c,d)
case 5125:return this.ac(b,c,d)
case 5126:return new A.cB(this.a,this.r,c,d)
case 35664:return new A.il(this.a,this.r,c,d)
case 35665:return new A.cD(this.a,this.r,c,d)
case 35666:return new A.ip(this.a,this.r,c,d)
case 35667:return new A.im(this.a,this.r,c,d)
case 35668:return new A.io(this.a,this.r,c,d)
case 35669:return new A.iq(this.a,this.r,c,d)
case 35674:return new A.it(this.a,this.r,c,d)
case 35675:return new A.iu(this.a,this.r,c,d)
case 35676:return new A.cE(this.a,this.r,c,d)
case 35678:return this.d9(b,c,d)
case 35680:return this.da(b,c,d)
case 35670:throw H.e(this.aB("BOOL",c))
case 35671:throw H.e(this.aB("BOOL_VEC2",c))
case 35672:throw H.e(this.aB("BOOL_VEC3",c))
case 35673:throw H.e(this.aB("BOOL_VEC4",c))
default:throw H.e(P.K("Unknown uniform variable type "+H.d(a)+" for "+H.d(c)+"."))}}},Q:{"^":"a;"},ir:{"^":"a;a",
u:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
i:function(a){return this.B()},
eO:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.w)(z),++w)x+=z[w].i(0)+a
return x},
B:function(){return this.eO("\n")}},ij:{"^":"Q;a,b,c,d",
i:function(a){return"Uniform1i: "+H.d(this.c)}},im:{"^":"Q;a,b,c,d",
i:function(a){return"Uniform2i: "+H.d(this.c)}},io:{"^":"Q;a,b,c,d",
i:function(a){return"Uniform3i: "+H.d(this.c)}},iq:{"^":"Q;a,b,c,d",
i:function(a){return"Uniform4i: "+H.d(this.c)}},ik:{"^":"Q;0e,0f,a,b,c,d",
seb:function(a){this.e=H.n(a,"$isc",[P.v],"$asc")},
i:function(a){return"Uniform1iv: "+H.d(this.c)},
m:{
cC:function(a,b,c,d,e){var z=new A.ik(a,b,c,e)
z.f=d
z.seb(P.h9(d,0,!1,P.v))
return z}}},cB:{"^":"Q;a,b,c,d",
i:function(a){return"Uniform1f: "+H.d(this.c)}},il:{"^":"Q;a,b,c,d",
i:function(a){return"Uniform2f: "+H.d(this.c)}},cD:{"^":"Q;a,b,c,d",
i:function(a){return"Uniform3f: "+H.d(this.c)}},ip:{"^":"Q;a,b,c,d",
i:function(a){return"Uniform4f: "+H.d(this.c)}},it:{"^":"Q;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.d(this.c)}},iu:{"^":"Q;a,b,c,d",
i:function(a){return"UniformMat3: "+H.d(this.c)}},cE:{"^":"Q;a,b,c,d",
bp:function(a){var z=new Float32Array(H.cN(H.n(a,"$isc",[P.r],"$asc")))
C.b.ft(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.d(this.c)}},iv:{"^":"Q;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.d(this.c)}},iw:{"^":"Q;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.d(this.c)}}}],["","",,F,{"^":"",
bW:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
b5:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
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
z.d=y}l=F.bW(y)
k=F.bW(z.b)
j=F.kc(d,e,new F.jC(z,F.bW(z.c),F.bW(z.d),k,l,c),b)
if(j!=null)a.eY(j)},
kc:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.f(c,{func:1,ret:-1,args:[F.ar,P.r,P.r]})
if(a<1)return
if(b<1)return
z=F.dV()
y=H.b([],[F.ar])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cG(null,null,new V.bz(u,0,0,1),null,null,new V.ac(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.bc(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cG(null,null,new V.bz(o,n,m,1),null,null,new V.ac(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.bc(d))}}z.d.ed(a+1,b+1,y)
return z},
jC:{"^":"q:32;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.bf(z.b,b).bf(z.d.bf(z.c,b),c)
z=new V.bM(y.a,y.b,y.c)
if(!J.P(a.f,z)){a.f=z
z=a.a
if(z!=null)z.V()}z=y.K(0,Math.sqrt(y.N(y)))
if(!J.P(a.z,z)){a.z=z
z=a.a
if(z!=null)z.V()}z=1-b
x=1-c
x=new V.dL(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.P(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.V()}}},
S:{"^":"a;0a,0b,0c,0d,0e",
d3:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.cF()
if(y!=null)v=v.E(0,y)
if(x!=null)v=v.E(0,x)
if(w!=null)v=v.E(0,w)
if(v.eS())return
return v.K(0,Math.sqrt(v.N(v)))},
d5:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.a1(0,y)
z=new V.N(z.a,z.b,z.c)
v=z.K(0,Math.sqrt(z.N(z)))
z=w.a1(0,y)
z=new V.N(z.a,z.b,z.c)
z=v.bd(z.K(0,Math.sqrt(z.N(z))))
return z.K(0,Math.sqrt(z.N(z)))},
b8:function(){if(this.d!=null)return!0
var z=this.d3()
if(z==null){z=this.d5()
if(z==null)return!1}this.d=z
this.a.a.V()
return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.B()},
q:function(a){var z,y
z=this.a
if(z==null||this.b==null||this.c==null)return a+"disposed"
y=a+C.c.W(J.V(z.e),0)+", "+C.c.W(J.V(this.b.e),0)+", "+C.c.W(J.V(this.c.e),0)+" {"
z=this.d
y=(z!=null?y+(z.i(0)+", "):y+"-, ")+"-}"
return y},
B:function(){return this.q("")},
m:{
bg:function(a,b,c){var z,y,x
z=new F.S()
y=a.a
if(y==null)H.M(P.K("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.M(P.K("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.V()
return z}}},
aY:{"^":"a;0a,0b",
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.B()},
q:function(a){var z=this.a
if(z==null||this.b==null)return a+"disposed"
return a+C.c.W(J.V(z.e),0)+", "+C.c.W(J.V(this.b.e),0)},
B:function(){return this.q("")}},
bn:{"^":"a;0a",
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.B()},
q:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.c.W(J.V(z.e),0)},
B:function(){return this.q("")}},
dU:{"^":"a;0a,0b,0c,0d,0e",
gw:function(){var z=this.e
if(z==null){z=D.ao()
this.e=z}return z},
eY:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.e
if(!(z==null))++z.d
a.a.G()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.w)(z),++w){v=z[w]
this.a.h(0,v.ew())}this.a.G()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.w)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.G()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.j(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.bn()
if(r.a==null)H.M(P.K("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.T(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.w)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.G()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.j(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.G()
t=t.e
if(typeof t!=="number")return t.E()
t+=y
s=s.c
if(t>=s.length)return H.j(s,t)
o=s[t]
t=this.c.a
t.a.h(0,p)
t.a.h(0,o)
t=new F.aY()
s=p.a
if(s==null)H.M(P.K("May not create a line with a start vertex which is not attached to a shape."))
n=o.a
if(s==null?n!=null:s!==n)H.M(P.K("May not create a line with vertices attached to different shapes."))
t.a=p
C.a.h(p.c.b,t)
t.b=o
C.a.h(o.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.T(null)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.w)(z),++w){m=z[w]
t=this.a
s=m.a
s.a.a.G()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.j(t,s)
p=t[s]
s=this.a
t=m.b
t.a.a.G()
t=t.e
if(typeof t!=="number")return t.E()
t+=y
s=s.c
if(t>=s.length)return H.j(s,t)
o=s[t]
t=this.a
s=m.c
s.a.a.G()
s=s.e
if(typeof s!=="number")return s.E()
s+=y
t=t.c
if(s>=t.length)return H.j(t,s)
l=t[s]
s=this.d.a
s.a.h(0,p)
s.a.h(0,o)
s.a.h(0,l)
F.bg(p,o,l)}z=this.e
if(!(z==null))z.aI()},
em:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$ai()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aG().a)!==0)++w
if((x&$.$get$aF().a)!==0)++w
if((x&$.$get$aH().a)!==0)++w
if((x&$.$get$aI().a)!==0)++w
if((x&$.$get$b1().a)!==0)++w
if((x&$.$get$b2().a)!==0)++w
if((x&$.$get$aJ().a)!==0)++w
if((x&$.$get$aE().a)!==0)++w
v=b.gbr(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.r
t=H.b(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.b(y,[Z.d8])
for(r=0,q=0;q<w;++q){p=b.eh(q)
o=p.gbr(p)
C.a.F(s,q,new Z.d8(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.j(y,n)
m=y[n].eW(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.F(t,l,m[k]);++l}}r+=o}H.n(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
C.b.a0(y,34962,j)
C.b.bX(y,34962,new Float32Array(H.cN(t)),35044)
C.b.a0(y,34962,null)
i=new Z.d9(new Z.ep(34962,j),s,b)
i.sdm(H.b([],[Z.bi]))
if(this.b.b.length!==0){x=P.v
h=H.b([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.G()
C.a.h(h,g.e)}f=Z.cH(y,34963,H.n(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.bi(0,h.length,f))}if(this.c.b.length!==0){x=P.v
h=H.b([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.G()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.j(g,q)
g=g[q].b
g.a.a.G()
C.a.h(h,g.e)}f=Z.cH(y,34963,H.n(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.bi(1,h.length,f))}if(this.d.b.length!==0){x=P.v
h=H.b([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.G()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.j(g,q)
g=g[q].b
g.a.a.G()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.j(g,q)
g=g[q].c
g.a.a.G()
C.a.h(h,g.e)}f=Z.cH(y,34963,H.n(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.bi(4,h.length,f))}return i},
i:function(a){var z=H.b([],[P.i])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.q("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.q("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.q("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.q("   "))}return C.a.k(z,"\n")},
S:function(a){var z=this.e
if(!(z==null))z.T(a)},
V:function(){return this.S(null)},
$iskw:1,
m:{
dV:function(){var z,y
z=new F.dU()
y=new F.iE(z)
y.b=!1
y.sec(H.b([],[F.ar]))
z.a=y
y=new F.hW(z)
y.sb1(H.b([],[F.bn]))
z.b=y
y=new F.hV(z)
y.sdn(H.b([],[F.aY]))
z.c=y
y=new F.hU(z)
y.sdf(H.b([],[F.S]))
z.d=y
z.e=null
return z}}},
hU:{"^":"a;a,0b",
sdf:function(a){this.b=H.n(a,"$isc",[F.S],"$asc")},
ed:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.n(c,"$isc",[F.ar],"$asc")
z=H.b([],[F.S])
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
C.a.h(z,F.bg(q,p,n))
y.a.h(0,q)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bg(q,n,m))}else{r.h(0,p)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bg(p,n,m))
y.a.h(0,p)
y.a.h(0,m)
y.a.h(0,q)
C.a.h(z,F.bg(p,m,q))}t=!t}v=!v}return z},
gl:function(a){return this.b.length},
b9:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.w)(z),++w)if(!z[w].b8())x=!1
return x},
i:function(a){return this.B()},
q:function(a){var z,y,x,w
z=H.b([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].q(a))
return C.a.k(z,"\n")},
B:function(){return this.q("")}},
hV:{"^":"a;a,0b",
sdn:function(a){this.b=H.n(a,"$isc",[F.aY],"$asc")},
gl:function(a){return this.b.length},
i:function(a){return this.B()},
q:function(a){var z,y,x,w
z=H.b([],[P.i])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.j(w,x)
C.a.h(z,w[x].q(a+(""+x+". ")))}return C.a.k(z,"\n")},
B:function(){return this.q("")}},
hW:{"^":"a;a,0b",
sb1:function(a){this.b=H.n(a,"$isc",[F.bn],"$asc")},
gl:function(a){return this.b.length},
i:function(a){return this.B()},
q:function(a){var z,y,x,w
z=H.b([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].q(a))
return C.a.k(z,"\n")},
B:function(){return this.q("")}},
ar:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bc:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cG(this.cx,x,u,z,y,w,v,a,t)},
ew:function(){return this.bc(null)},
eW:function(a){var z,y
if(a.n(0,$.$get$ai())){z=this.f
y=[P.r]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(a.n(0,$.$get$aG())){z=this.r
y=[P.r]
if(z==null)return H.b([0,1,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(a.n(0,$.$get$aF())){z=H.b([0,0,1],[P.r])
return z}else if(a.n(0,$.$get$aH())){z=this.y
y=[P.r]
if(z==null)return H.b([0,0],y)
else return H.b([z.a,z.b],y)}else if(a.n(0,$.$get$aI())){z=this.z
y=[P.r]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(a.n(0,$.$get$b1())){z=this.Q
y=[P.r]
if(z==null)return H.b([1,1,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(a.n(0,$.$get$b2())){z=this.Q
y=[P.r]
if(z==null)return H.b([1,1,1,1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else if(a.n(0,$.$get$aJ()))return H.b([this.ch],[P.r])
else if(a.n(0,$.$get$aE())){z=this.cx
y=[P.r]
if(z==null)return H.b([-1,-1,-1,-1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else return H.b([],[P.r])},
b8:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.cF()
this.d.R(0,new F.iK(z))
z=z.a
this.r=z.K(0,Math.sqrt(z.N(z)))
z=this.a
if(z!=null){z.V()
z=this.a.e
if(!(z==null))z.aI()}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.B()},
q:function(a){var z,y,x
z=H.b([],[P.i])
C.a.h(z,C.c.W(J.V(this.e),0))
y=this.f
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
y=this.r
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
C.a.h(z,"-")
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
x=C.a.k(z,", ")
return a+"{"+x+"}"},
B:function(){return this.q("")},
m:{
cG:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ar()
y=new F.iJ(z)
y.sb1(H.b([],[F.bn]))
z.b=y
y=new F.iI(z)
x=[F.aY]
y.sdq(H.b([],x))
y.sdr(H.b([],x))
z.c=y
y=new F.iF(z)
x=[F.S]
y.sdg(H.b([],x))
y.sdh(H.b([],x))
y.sdi(H.b([],x))
z.d=y
h=$.$get$em()
z.e=0
y=$.$get$ai()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aG().a)!==0?e:null
z.x=(x&$.$get$aF().a)!==0?b:null
z.y=(x&$.$get$aH().a)!==0?f:null
z.z=(x&$.$get$aI().a)!==0?g:null
z.Q=(x&$.$get$en().a)!==0?c:null
z.ch=(x&$.$get$aJ().a)!==0?i:0
z.cx=(x&$.$get$aE().a)!==0?a:null
return z}}},
iK:{"^":"q:8;a",
$1:function(a){var z,y
H.h(a,"$isS")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.E(0,z)}}},
iE:{"^":"a;a,0b,0c",
sec:function(a){this.c=H.n(a,"$isc",[F.ar],"$asc")},
G:function(){},
h:function(a,b){var z,y
z=b.a
if(z!=null){if(z===this.a)return!1
throw H.e(P.K("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
y=this.a
b.a=y
C.a.h(z,b)
y.V()
return!0},
gl:function(a){return this.c.length},
b9:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x)z[x].b8()
return!0},
i:function(a){return this.B()},
q:function(a){var z,y,x,w
this.G()
z=H.b([],[P.i])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].q(a))
return C.a.k(z,"\n")},
B:function(){return this.q("")}},
iF:{"^":"a;a,0b,0c,0d",
sdg:function(a){this.b=H.n(a,"$isc",[F.S],"$asc")},
sdh:function(a){this.c=H.n(a,"$isc",[F.S],"$asc")},
sdi:function(a){this.d=H.n(a,"$isc",[F.S],"$asc")},
gl:function(a){return this.b.length+this.c.length+this.d.length},
R:function(a,b){H.f(b,{func:1,ret:-1,args:[F.S]})
C.a.R(this.b,b)
C.a.R(this.c,new F.iG(this,b))
C.a.R(this.d,new F.iH(this,b))},
i:function(a){return this.B()},
q:function(a){var z,y,x,w
z=H.b([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].q(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].q(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].q(a))
return C.a.k(z,"\n")},
B:function(){return this.q("")}},
iG:{"^":"q:8;a,b",
$1:function(a){H.h(a,"$isS")
if(!J.P(a.a,this.a))this.b.$1(a)}},
iH:{"^":"q:8;a,b",
$1:function(a){var z
H.h(a,"$isS")
z=this.a
if(!J.P(a.a,z)&&!J.P(a.b,z))this.b.$1(a)}},
iI:{"^":"a;a,0b,0c",
sdq:function(a){this.b=H.n(a,"$isc",[F.aY],"$asc")},
sdr:function(a){this.c=H.n(a,"$isc",[F.aY],"$asc")},
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.B()},
q:function(a){var z,y,x,w
z=H.b([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].q(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].q(a))
return C.a.k(z,"\n")},
B:function(){return this.q("")}},
iJ:{"^":"a;a,0b",
sb1:function(a){this.b=H.n(a,"$isc",[F.bn],"$asc")},
gl:function(a){return this.b.length},
i:function(a){return this.B()},
q:function(a){var z,y,x,w
z=H.b([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)C.a.h(z,y[w].q(a))
return C.a.k(z,"\n")},
B:function(){return this.q("")}}}],["","",,O,{"^":"",fo:{"^":"bQ;0a,0b,0c,0d,0e,0f",
gw:function(){var z=this.f
if(z==null){z=D.ao()
this.f=z}return z},
aw:function(a){var z=this.f
if(!(z==null))z.T(a)}},bQ:{"^":"a;"}}],["","",,T,{"^":"",ia:{"^":"a;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",aT:{"^":"a;",
ah:function(a){return!0},
i:function(a){return"all"},
$isaa:1},aa:{"^":"a;"},dA:{"^":"a;0a",
sL:function(a){this.a=H.n(a,"$isc",[V.aa],"$asc")},
ah:["cP",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x)if(z[x].ah(a))return!0
return!1}],
i:["bs",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.w)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isaa:1},a4:{"^":"dA;0a",
ah:function(a){return!this.cP(a)},
i:function(a){return"!["+this.bs(0)+"]"}},hE:{"^":"a;0a,0b",
ah:function(a){return this.a<=a&&this.b>=a},
i:function(a){var z,y
z=H.cp(this.a)
y=H.cp(this.b)
return z+".."+y},
$isaa:1,
m:{
C:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.e(P.K("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.c.aa(a,0)
y=C.c.aa(b,0)
x=new V.hE()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},hR:{"^":"a;0a",
se_:function(a){this.a=H.n(a,"$isZ",[P.v,P.D],"$asZ")},
cS:function(a){var z,y
if(a.a.length<=0)throw H.e(P.K("May not create a SetMatcher with zero characters."))
z=new H.aA(0,0,[P.v,P.D])
for(y=new H.cm(a,a.gl(a),0,[H.au(a,"H",0)]);y.t();)z.F(0,y.d,!0)
this.se_(z)},
ah:function(a){return this.a.bZ(a)},
i:function(a){var z=this.a
return P.cv(new H.dw(z,[H.o(z,0)]),0,null)},
$isaa:1,
m:{
m:function(a){var z=new V.hR()
z.cS(a)
return z}}},cs:{"^":"a;a,b,0c,0d",
sea:function(a){this.c=H.n(a,"$isc",[V.cz],"$asc")},
k:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.cz(this.a.j(0,b))
w.sL(H.b([],[V.aa]))
w.c=!1
C.a.h(this.c,w)
return w},
eL:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.w)(z),++x){w=z[x]
if(w.ah(a))return w}return},
i:function(a){return this.b}},e3:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.d_(this.b,"\n","\\n")
y=H.d_(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},cy:{"^":"a;a,b,0c",
sdV:function(a){var z=P.i
this.c=H.n(a,"$isZ",[z,z],"$asZ")},
a6:function(a,b,c){var z,y,x
H.n(c,"$isc",[P.i],"$asc")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.w)(c),++y){x=c[y]
this.c.F(0,x,b)}},
i:function(a){return this.b}},ie:{"^":"a;0a,0b,0c",
se5:function(a){this.a=H.n(a,"$isZ",[P.i,V.cs],"$asZ")},
se9:function(a){this.b=H.n(a,"$isZ",[P.i,V.cy],"$asZ")},
j:function(a,b){var z=this.a.u(0,b)
if(z==null){z=new V.cs(this,b)
z.sea(H.b([],[V.cz]))
z.d=null
this.a.F(0,b,z)}return z},
C:function(a){var z,y
z=this.b.u(0,a)
if(z==null){z=new V.cy(this,a)
y=P.i
z.sdV(new H.aA(0,0,[y,y]))
this.b.F(0,a,z)}return z},
cj:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.b([],[V.e3])
y=this.c
x=[P.v]
w=H.b([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.c.aa(a,t)
r=y.eL(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cv(w,0,null)
throw H.e(P.K("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.b([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cv(w,0,null)
p=y.d
o=p.c.u(0,q)
u=new V.e3(o==null?p.b:o,q,t)}++t}}},
m:{
bR:function(){var z,y
z=new V.ie()
y=P.i
z.se5(new H.aA(0,0,[y,V.cs]))
z.se9(new H.aA(0,0,[y,V.cy]))
z.c=null
return z}}},cz:{"^":"dA;b,0c,0a",
i:function(a){return this.b.b+": "+this.bs(0)}}}],["","",,X,{"^":"",db:{"^":"a;",$isdD:1},fL:{"^":"dZ;0a,0b,0c,0d,0e,0f,0r,0x",
gw:function(){var z=this.x
if(z==null){z=D.ao()
this.x=z}return z}},hq:{"^":"a;0a,0b,0c,0d,0e,0f",
gw:function(){var z=this.f
if(z==null){z=D.ao()
this.f=z}return z},
al:[function(a){var z
H.h(a,"$isA")
z=this.f
if(!(z==null))z.T(a)},function(){return this.al(null)},"fz","$1","$0","gbu",0,2,2],
sar:function(a){var z,y
if(!J.P(this.b,a)){z=this.b
if(z!=null)z.gw().J(0,this.gbu())
y=this.b
this.b=a
if(a!=null)a.gw().h(0,this.gbu())
z=new D.I("mover",y,this.b,this,[U.bL])
z.b=!0
this.al(z)}},
$isdD:1,
$isdb:1},dZ:{"^":"a;"}}],["","",,V,{"^":"",al:{"^":"a;0d",
saW:function(a){this.d=H.n(a,"$isc",[[P.c,W.an]],"$asc")},
av:function(a){this.b=new P.fR(C.F)
this.c=null
this.saW(H.b([],[[P.c,W.an]]))},
v:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.b([],[W.an]))
y=a.split("\n")
for(z=y.length,x=[W.an],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.b([],x))
t=document.createElement("div")
t.className="codePart"
H.y(u)
s=this.b.d8(u,0,u.length)
r=s==null?u:s
C.d.cH(t,H.d_(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gaF(this.d),t)}},
c8:function(a){var z,y,x,w
H.n(a,"$isc",[P.i],"$asc")
this.saW(H.b([],[[P.c,W.an]]))
z=C.a.k(a,"\n")
y=this.c
if(y==null){y=this.aC()
this.c=y}for(y=y.cj(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.w)(y),++w)this.aH(y[w])}},fl:{"^":"al;a,0b,0c,0d",
aH:function(a){switch(a.a){case"Class":this.v(a.b,"#551")
break
case"Comment":this.v(a.b,"#777")
break
case"Id":this.v(a.b,"#111")
break
case"Num":this.v(a.b,"#191")
break
case"Reserved":this.v(a.b,"#119")
break
case"String":this.v(a.b,"#171")
break
case"Symbol":this.v(a.b,"#616")
break
case"Type":this.v(a.b,"#B11")
break
case"Whitespace":this.v(a.b,"#111")
break}},
aC:function(){var z,y,x,w
z=V.bR()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.m(new H.l("_"))
C.a.h(y.a,x)
x=V.C("a","z")
C.a.h(y.a,x)
x=V.C("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.m(new H.l("_"))
C.a.h(x.a,y)
y=V.C("0","9")
C.a.h(x.a,y)
y=V.C("a","z")
C.a.h(x.a,y)
y=V.C("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Int")
x=V.C("0","9")
C.a.h(y.a,x)
x=z.j(0,"Int").k(0,"Int")
y=V.C("0","9")
C.a.h(x.a,y)
y=z.j(0,"Int").k(0,"FloatDot")
x=V.m(new H.l("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").k(0,"Float")
y=V.C("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").k(0,"Float")
x=V.C("0","9")
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"Sym")
y=V.m(new H.l("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.j(0,"Sym").k(0,"Sym")
x=V.m(new H.l("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"OpenDoubleStr")
y=V.m(new H.l('"'))
C.a.h(x.a,y)
y=z.j(0,"OpenDoubleStr").k(0,"CloseDoubleStr")
x=V.m(new H.l('"'))
C.a.h(y.a,x)
x=z.j(0,"OpenDoubleStr").k(0,"EscDoubleStr")
y=V.m(new H.l("\\"))
C.a.h(x.a,y)
y=z.j(0,"EscDoubleStr").k(0,"OpenDoubleStr")
x=V.m(new H.l('"'))
C.a.h(y.a,x)
C.a.h(z.j(0,"OpenDoubleStr").k(0,"OpenDoubleStr").a,new V.aT())
x=z.j(0,"Start").k(0,"OpenSingleStr")
y=V.m(new H.l("'"))
C.a.h(x.a,y)
y=z.j(0,"OpenSingleStr").k(0,"CloseSingleStr")
x=V.m(new H.l("'"))
C.a.h(y.a,x)
x=z.j(0,"OpenSingleStr").k(0,"EscSingleStr")
y=V.m(new H.l("\\"))
C.a.h(x.a,y)
y=z.j(0,"EscSingleStr").k(0,"OpenSingleStr")
x=V.m(new H.l("'"))
C.a.h(y.a,x)
C.a.h(z.j(0,"OpenSingleStr").k(0,"OpenSingleStr").a,new V.aT())
x=z.j(0,"Start").k(0,"Slash")
y=V.m(new H.l("/"))
C.a.h(x.a,y)
y=z.j(0,"Slash").k(0,"Comment")
x=V.m(new H.l("/"))
C.a.h(y.a,x)
x=z.j(0,"Comment").k(0,"EndComment")
y=V.m(new H.l("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").k(0,"Comment")
x=new V.a4()
w=[V.aa]
x.sL(H.b([],w))
C.a.h(y.a,x)
y=V.m(new H.l("\n"))
C.a.h(x.a,y)
y=z.j(0,"Slash").k(0,"MLComment")
x=V.m(new H.l("*"))
C.a.h(y.a,x)
x=z.j(0,"MLComment").k(0,"MLCStar")
y=V.m(new H.l("*"))
C.a.h(x.a,y)
y=z.j(0,"MLCStar").k(0,"MLComment")
x=new V.a4()
x.sL(H.b([],w))
C.a.h(y.a,x)
y=V.m(new H.l("*"))
C.a.h(x.a,y)
y=z.j(0,"MLCStar").k(0,"EndComment")
x=V.m(new H.l("/"))
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"Whitespace")
y=V.m(new H.l(" \n\t"))
C.a.h(x.a,y)
y=z.j(0,"Whitespace").k(0,"Whitespace")
x=V.m(new H.l(" \n\t"))
C.a.h(y.a,x)
x=z.j(0,"Int")
x.d=x.a.C("Num")
x=z.j(0,"Float")
x.d=x.a.C("Num")
x=z.j(0,"Sym")
x.d=x.a.C("Symbol")
x=z.j(0,"CloseDoubleStr")
x.d=x.a.C("String")
x=z.j(0,"CloseSingleStr")
x.d=x.a.C("String")
x=z.j(0,"EndComment")
x.d=x.a.C("Comment")
x=z.j(0,"Whitespace")
x.d=x.a.C("Whitespace")
x=z.j(0,"Id")
y=x.a.C("Id")
x.d=y
x=[P.i]
y.a6(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.a6(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.a6(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},fM:{"^":"al;a,0b,0c,0d",
aH:function(a){switch(a.a){case"Builtin":this.v(a.b,"#411")
break
case"Comment":this.v(a.b,"#777")
break
case"Id":this.v(a.b,"#111")
break
case"Num":this.v(a.b,"#191")
break
case"Preprocess":this.v(a.b,"#737")
break
case"Reserved":this.v(a.b,"#119")
break
case"Symbol":this.v(a.b,"#611")
break
case"Type":this.v(a.b,"#171")
break
case"Whitespace":this.v(a.b,"#111")
break}},
aC:function(){var z,y,x,w
z=V.bR()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.m(new H.l("_"))
C.a.h(y.a,x)
x=V.C("a","z")
C.a.h(y.a,x)
x=V.C("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.m(new H.l("_"))
C.a.h(x.a,y)
y=V.C("0","9")
C.a.h(x.a,y)
y=V.C("a","z")
C.a.h(x.a,y)
y=V.C("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Int")
x=V.C("0","9")
C.a.h(y.a,x)
x=z.j(0,"Int").k(0,"Int")
y=V.C("0","9")
C.a.h(x.a,y)
y=z.j(0,"Int").k(0,"FloatDot")
x=V.m(new H.l("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").k(0,"Float")
y=V.C("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").k(0,"Float")
x=V.C("0","9")
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"Sym")
y=V.m(new H.l("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.j(0,"Sym").k(0,"Sym")
x=V.m(new H.l("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"Slash")
y=V.m(new H.l("/"))
C.a.h(x.a,y)
y=z.j(0,"Slash").k(0,"Comment")
x=V.m(new H.l("/"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Slash").k(0,"Sym").a,new V.aT())
x=z.j(0,"Comment").k(0,"EndComment")
y=V.m(new H.l("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").k(0,"Comment")
x=new V.a4()
w=[V.aa]
x.sL(H.b([],w))
C.a.h(y.a,x)
y=V.m(new H.l("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Preprocess")
x=V.m(new H.l("#"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").k(0,"Preprocess")
y=new V.a4()
y.sL(H.b([],w))
C.a.h(x.a,y)
x=V.m(new H.l("\n"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").k(0,"EndPreprocess")
y=V.m(new H.l("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Whitespace")
x=V.m(new H.l(" \n\t"))
C.a.h(y.a,x)
x=z.j(0,"Whitespace").k(0,"Whitespace")
y=V.m(new H.l(" \n\t"))
C.a.h(x.a,y)
y=z.j(0,"Int")
y.d=y.a.C("Num")
y=z.j(0,"Float")
y.d=y.a.C("Num")
y=z.j(0,"Sym")
y.d=y.a.C("Symbol")
y=z.j(0,"EndComment")
y.d=y.a.C("Comment")
y=z.j(0,"EndPreprocess")
y.d=y.a.C("Preprocess")
y=z.j(0,"Whitespace")
y.d=y.a.C("Whitespace")
y=z.j(0,"Id")
x=y.a.C("Id")
y.d=x
y=[P.i]
x.a6(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.a6(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.a6(0,"Builtin",H.b(["gl_FragColor","gl_Position"],y))
return z}},fN:{"^":"al;a,0b,0c,0d",
aH:function(a){switch(a.a){case"Attr":this.v(a.b,"#911")
this.v("=","#111")
break
case"Id":this.v(a.b,"#111")
break
case"Other":this.v(a.b,"#111")
break
case"Reserved":this.v(a.b,"#119")
break
case"String":this.v(a.b,"#171")
break
case"Symbol":this.v(a.b,"#616")
break}},
aC:function(){var z,y,x
z=V.bR()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.m(new H.l("_"))
C.a.h(y.a,x)
x=V.C("a","z")
C.a.h(y.a,x)
x=V.C("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.m(new H.l("_"))
C.a.h(x.a,y)
y=V.C("0","9")
C.a.h(x.a,y)
y=V.C("a","z")
C.a.h(x.a,y)
y=V.C("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Id").k(0,"Attr")
x=V.m(new H.l("="))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").k(0,"Sym")
x=V.m(new H.l("</\\-!>="))
C.a.h(y.a,x)
x=z.j(0,"Sym").k(0,"Sym")
y=V.m(new H.l("</\\-!>="))
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"OpenStr")
x=V.m(new H.l('"'))
C.a.h(y.a,x)
x=z.j(0,"OpenStr").k(0,"CloseStr")
y=V.m(new H.l('"'))
C.a.h(x.a,y)
y=z.j(0,"OpenStr").k(0,"EscStr")
x=V.m(new H.l("\\"))
C.a.h(y.a,x)
x=z.j(0,"EscStr").k(0,"OpenStr")
y=V.m(new H.l('"'))
C.a.h(x.a,y)
C.a.h(z.j(0,"OpenStr").k(0,"OpenStr").a,new V.aT())
C.a.h(z.j(0,"Start").k(0,"Other").a,new V.aT())
y=z.j(0,"Other").k(0,"Other")
x=new V.a4()
x.sL(H.b([],[V.aa]))
C.a.h(y.a,x)
y=V.m(new H.l('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.C("a","z")
C.a.h(x.a,y)
y=V.C("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Sym")
y.d=y.a.C("Symbol")
y=z.j(0,"CloseStr")
y.d=y.a.C("String")
y=z.j(0,"Id")
x=y.a.C("Id")
y.d=x
x.a6(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.i]))
x=z.j(0,"Attr")
x.d=x.a.C("Attr")
x=z.j(0,"Other")
x.d=x.a.C("Other")
return z}},hs:{"^":"al;a,0b,0c,0d",
c8:function(a){H.n(a,"$isc",[P.i],"$asc")
this.saW(H.b([],[[P.c,W.an]]))
this.v(C.a.k(a,"\n"),"#111")},
aH:function(a){},
aC:function(){return}},hX:{"^":"a;0a,0b",
cU:function(a,b){var z,y,x,w,v,u,t
z=document
y=z.body
x=z.createElement("div")
x.className="scrollTop";(y&&C.j).p(y,x)
w=z.createElement("div")
w.className="scrollPage"
C.j.p(y,w)
v=z.createElement("div")
v.className="pageCenter"
C.d.p(w,v)
if(a.length!==0){z.title=a
u=z.createElement("div")
u.className="pageTitle"
u.textContent=a
C.d.p(v,u)}t=z.createElement("div")
this.a=t
C.d.p(v,t)
this.b=null
t=W.R
W.L(z,"scroll",H.f(new V.i_(x),{func:1,ret:-1,args:[t]}),!1,t)},
ee:function(a,b,c){var z,y,x,w
a=H.O(C.h.en(a,0,4))
if(c.length===0)c=P.cM(C.n,b,C.l,!1)
z=document.createElement("div")
z.className="textHeader"
z.id=c
y=z.style
x=""+(28-a*3)+"px"
y.fontSize=x
w=W.ca(null)
w.href="#"+c
w.textContent=b
C.d.p(z,w)
C.d.p(this.a,z)},
ap:function(a,b){return this.ee(a,b,"")},
M:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.n(a,"$isc",[P.i],"$asc")
this.e1()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.cj(C.a.eT(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.w)(x),++v){u=x[v]
switch(u.a){case"Bold":t=z.createElement("div")
t.className="boldPar"
t.textContent=u.b
C.d.p(y,t)
break
case"Italic":t=z.createElement("div")
t.className="italicPar"
t.textContent=u.b
C.d.p(y,t)
break
case"Code":t=z.createElement("div")
t.className="codePar"
t.textContent=u.b
C.d.p(y,t)
break
case"Link":s=u.b
if(H.eZ(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.j(r,1)
q.href=H.y(r[1])
q.textContent=H.y(r[0])
C.d.p(y,q)}else{p=P.cM(C.n,s,C.l,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+p
q.textContent=s
C.d.p(y,q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
C.d.p(y,t)
break}}C.d.p(this.a,y)},
cu:function(a){var z,y,x,w
z=new V.fl("dart")
z.av("dart")
y=new V.fM("glsl")
y.av("glsl")
x=new V.fN("html")
x.av("html")
w=C.a.eM(H.b([z,y,x],[V.al]),new V.i0(a))
if(w!=null)return w
z=new V.hs("plain")
z.av("plain")
return z},
bU:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.n(a2,"$isc",[P.i],"$asc")
z=H.b([],[P.v])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(C.c.aN(w,"+")){C.a.F(a2,x,C.c.aO(w,1))
C.a.h(z,1)
y=!0}else if(C.c.aN(w,"-")){C.a.F(a2,x,C.c.aO(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.cu(a0)
v.c8(a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
C.d.p(t,s)
C.d.p(this.a,t)
r=P.cM(C.n,a,C.l,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.ca(null)
n.href="#"+r
n.textContent=a
C.d.p(o,n)
C.q.p(p,o)
C.i.p(q,p)
C.k.p(s,q)
if(y)for(m=a1,l=m,x=0;k=v.d,x<k.length;++x){w=k[x]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums codeLineLight"
h=u.createElement("td")
h.className="codeLineNums"
if(x>=z.length)return H.j(z,x)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.w)(w),++e)C.q.p(f,w[e])
C.i.p(j,i)
C.i.p(j,h)
C.i.p(j,f)
C.k.p(s,j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.w)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gD(w);b.t();)C.q.p(h,b.gA())
C.i.p(j,i)
C.i.p(j,h)
C.k.p(s,j)}},
e1:function(){var z,y,x,w
if(this.b!=null)return
z=V.bR()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Bold")
x=V.m(new H.l("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Bold").k(0,"Bold")
x=new V.a4()
w=[V.aa]
x.sL(H.b([],w))
C.a.h(y.a,x)
y=V.m(new H.l("*"))
C.a.h(x.a,y)
y=z.j(0,"Bold").k(0,"BoldEnd")
x=V.m(new H.l("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").k(0,"Italic")
x=V.m(new H.l("_"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Italic").k(0,"Italic")
x=new V.a4()
x.sL(H.b([],w))
C.a.h(y.a,x)
y=V.m(new H.l("_"))
C.a.h(x.a,y)
y=z.j(0,"Italic").k(0,"ItalicEnd")
x=V.m(new H.l("_"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").k(0,"Code")
x=V.m(new H.l("`"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Code").k(0,"Code")
x=new V.a4()
x.sL(H.b([],w))
C.a.h(y.a,x)
y=V.m(new H.l("`"))
C.a.h(x.a,y)
y=z.j(0,"Code").k(0,"CodeEnd")
x=V.m(new H.l("`"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").k(0,"LinkHead")
x=V.m(new H.l("["))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"LinkHead").k(0,"LinkTail")
x=V.m(new H.l("|"))
C.a.h(y.a,x)
x=z.j(0,"LinkHead").k(0,"LinkEnd")
y=V.m(new H.l("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkHead").k(0,"LinkHead")
y=new V.a4()
y.sL(H.b([],w))
C.a.h(x.a,y)
x=V.m(new H.l("|]"))
C.a.h(y.a,x)
x=z.j(0,"LinkTail").k(0,"LinkEnd")
y=V.m(new H.l("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkTail").k(0,"LinkTail")
y=new V.a4()
y.sL(H.b([],w))
C.a.h(x.a,y)
x=V.m(new H.l("|]"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Start").k(0,"Other").a,new V.aT())
x=z.j(0,"Other").k(0,"Other")
y=new V.a4()
y.sL(H.b([],w))
C.a.h(x.a,y)
x=V.m(new H.l("*_`["))
C.a.h(y.a,x)
x=z.j(0,"BoldEnd")
x.d=x.a.C("Bold")
x=z.j(0,"ItalicEnd")
x.d=x.a.C("Italic")
x=z.j(0,"CodeEnd")
x.d=x.a.C("Code")
x=z.j(0,"LinkEnd")
x.d=x.a.C("Link")
x=z.j(0,"Other")
x.d=x.a.C("Other")
this.b=z},
m:{
hY:function(a,b){var z=new V.hX()
z.cU(a,!0)
return z}}},i_:{"^":"q:33;a",
$1:function(a){P.e2(C.m,new V.hZ(this.a))}},hZ:{"^":"q:0;a",
$0:function(){var z,y,x
z=C.e.Z(document.documentElement.scrollTop)
y=this.a.style
x=H.d(-0.01*z)+"px"
y.top=x}},i0:{"^":"q:34;a",
$1:function(a){return H.h(a,"$isal").a===this.a}}}],["","",,F,{"^":"",
eU:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=V.hY("Tutorial 1",!0)
y=[P.i]
z.M(H.b(['This tutorial will walk you through creating the "Hello World" ',"of 3D graphics, a rotating cube. After this tutorial you should know how ","to create a [3Dart|https://github.com/Grant-Nelson/ThreeDart] project. ","However, it is recommended you have a basic understanding of [Dart|https://www.dartlang.org] ","and [3D Matrices|http://www.opengl-tutorial.org/beginners-tutorials/tutorial-3-matrices/] ","before starting. You will not need to know [WebGL|https://en.wikipedia.org/wiki/WebGL] ","nor [OpenGL|https://en.wikipedia.org/wiki/OpenGL] until the more advanced ","tutorials."],y))
x=W.dc(null,null)
x.className="pageCanvas"
x.id="tutorial1"
C.d.p(z.a,x)
z.ap(0,"Getting Started")
z.M(H.b(["The following is the [HTML|#index.html] and the [Dart|#main.dart] files ","that we will explore in this tutorial. For this first tutorial I will just ","provide the code and then we'll go over code describing how it works."],y))
z.bU("index.html","html",0,H.b(["<!DOCTYPE html>","<html>","  <head>",'  \t<meta charset="utf-8">','  \t<meta name="viewport" content="width=device-width, initial-scale=1.0">',"   <title>Tutorial 1</title>","  </head>","  <body>",'    <canvas id="tutorial1" width="800" height="600"></canvas>','    <script defer src="main.dart.js"></script>',"  </body>","</html>"],y))
z.bU("main.dart","dart",0,H.b(["library threeDartTutorial1;","","import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;","import 'package:ThreeDart/Shapes.dart' as Shapes;","import 'package:ThreeDart/Movers.dart' as Movers;","import 'package:ThreeDart/Techniques.dart' as Techniques;","import 'package:ThreeDart/Scenes.dart' as Scenes;","","void main() {","  ThreeDart.Entity obj = new ThreeDart.Entity()","    ..shape = Shapes.cube()","    ..mover = new Movers.Rotater()","    ..technique = new Techniques.Depth(fogStart: 3.0, fogStop: 6.0);","","  Scenes.EntityPass pass = new Scenes.EntityPass()","    ..children.add(obj)","    ..camera.mover = new Movers.Constant.translate(0.0, 0.0, 5.0);","",'  new ThreeDart.ThreeDart.fromId("tutorial1")',"    ..scene = pass;","}"],y))
z.ap(4,"ThreeDart")
z.M(H.b(["ThreeDart must have a ","[HTML canvas element|http://www.w3schools.com/graphics/canvas_intro.asp] to ","render graphics to. In this example the canvas is provided by [index.html|#index.html] ","and labelled `tutorial1`. On line 21 of [main.dart|#main.dart] the main ThreeDart class ","is created an attached to that canvas using its identifier."],y))
z.ap(4,"Scene")
z.M(H.b(["To make the image, the rendering has to have something to render. ","A scene is set to ThreeDart to provide the content to render. A scene ","can be a single rendering pass or a composite of several scenes. In this ","tutorial the scene is only a single pass for rendering entities, the `EntityPass`. "],y))
z.M(H.b(["The EntityPass has a default render target, a `Front Target`, which renders ","directly to the canvas. On render the target will first clear its depth buffer ","and color buffer which is why the background is black."],y))
z.M(H.b(["The EntityPass also has a default camera, a `Perspective Camera`. ","For this example we moved the camera, using a `Constant Mover`, back so that the ","camera is off the center of the scene and looking at the center of the scene."],y))
z.ap(4,"Entity")
z.M(H.b(["One or more Entities can be added to the EntityPass. An `Entity` can have ","one or more other Entities added to it too. An Entity describes a shape or group ","of shapes that should be rendered in the scene."],y))
z.M(H.b(["In this tutorial we only add one which is what draws the cube to the scene. ","To make it draw a cube we set the shape of the Entity to a cube. The shape ","can be set to many other built-in shapes, such as sphere, torois, and knot. ","The shape can be loaded from a file or created mathmatically or procedually."],y))
z.M(H.b(["To make the Entity rotate a `Mover` is attached to it. For this tutorial ","we used the default `Rotater` to cause it to rotate. Movers can be grouped ","to multiply matrices togrether thus compounding the movements."],y))
z.M(H.b(["The `Technique` attached to the Entity defines how the shape should be ","drawn. In this tutorial we used a very simple technique, `Depth`. Depth ","simply draws the shape with two different colors based on distance from the ","camera. If the background, front target clear color, it the same as the ","far color, it can give the appearence of fog or merky water."],y))
z.ap(4,"Summary")
z.M(H.b(["Play around with the Rotater, Shape, and Depth to get a feel for how the parts works. The main take away from this tutorial should be ","how to structure a basic render. A render is one or more pass which draws ","entities. The pass has a camera and target. Entities can contain several ","entities and can draw a shape. An entity can be moved with a Mover and ","rendered with a given technique."],y))
z.M(H.b(["In the next tutorial we will setup a material light technique ","and dive into creating more interesting scenes."],y))
w=new E.a8()
w.a=""
w.b=!0
y=E.a8
w.sd6(0,O.de(y))
w.y.bo(w.geZ(),w.gf0())
w.z=null
w.Q=null
w.ch=null
w.cx=null
w.cy=null
w.db=null
w.dx=null
w.dy=null
w.fr=null
w.fx=null
w.sbq(0,null)
w.scf(null)
w.sar(null)
v=F.dV()
F.b5(v,null,null,1,1,1,0,0,1)
F.b5(v,null,null,1,1,0,1,0,3)
F.b5(v,null,null,1,1,0,0,1,2)
F.b5(v,null,null,1,1,-1,0,0,0)
F.b5(v,null,null,1,1,0,-1,0,0)
F.b5(v,null,null,1,1,0,0,-1,3)
z=v.e
if(!(z==null))++z.d
v.d.b9()
v.a.b9()
z=v.e
if(!(z==null))z.aI()
w.sbq(0,v)
z=new U.dR()
z.a=0
z.b=0
z.c=0
z.d=0
z.e=0
z.f=0
z.r=0
z.sco(0)
z.sc9(0)
z.scd(0)
u=z.d
if(!$.k.$2(u,0.1)){t=z.d
z.d=0.1
u=new D.I("deltaYaw",t,0.1,z,[P.r])
u.b=!0
z.ae(u)}u=z.e
if(!$.k.$2(u,0.21)){t=z.e
z.e=0.21
u=new D.I("deltaPitch",t,0.21,z,[P.r])
u.b=!0
z.ae(u)}u=z.f
if(!$.k.$2(u,0.32)){t=z.f
z.f=0.32
u=new D.I("deltaRoll",t,0.32,z,[P.r])
u.b=!0
z.ae(u)}w.sar(z)
z=new O.fo()
z.d=1
z.e=10
s=new V.by(1,1,1)
z.b=s
u=[V.by]
r=new D.I("objectColor",null,s,z,u)
r.b=!0
z.aw(r)
s=new V.by(0,0,0)
if(!J.P(z.c,s)){t=z.c
z.c=s
u=new D.I("fogColor",t,s,z,u)
u.b=!0
z.aw(u)}u=z.d
if(!$.k.$2(u,3)){t=z.d
z.d=3
u=new D.I("fogStart",t,3,z,[P.r])
u.b=!0
z.aw(u)}u=z.e
if(!$.k.$2(u,6)){t=z.e
z.e=6
u=new D.I("fogStop",t,6,z,[P.r])
u.b=!0
z.aw(u)}w.scf(z)
q=new M.fD()
q.scZ(0,O.de(y))
q.d.bo(q.gdw(),q.gdz())
q.e=null
q.f=null
q.r=null
q.x=null
p=new X.hq()
p.c=1.0471975511965976
p.d=0.1
p.e=2000
p.sar(null)
z=p.c
if(!$.k.$2(z,1.0471975511965976)){t=p.c
p.c=1.0471975511965976
z=new D.I("fov",t,1.0471975511965976,p,[P.r])
z.b=!0
p.al(z)}z=p.d
if(!$.k.$2(z,0.1)){t=p.d
p.d=0.1
z=new D.I("near",t,0.1,p,[P.r])
z.b=!0
p.al(z)}z=p.e
if(!$.k.$2(z,2000)){t=p.e
p.e=2000
z=new D.I("far",t,2000,p,[P.r])
z.b=!0
p.al(z)}z=q.a
if(z!==p){if(z!=null)z.gw().J(0,q.ga9())
t=q.a
q.a=p
p.gw().h(0,q.ga9())
z=new D.I("camera",t,q.a,q,[X.db])
z.b=!0
q.ak(z)}o=new X.fL()
z=new V.bz(0,0,0,1)
o.a=z
o.b=!0
o.c=2000
o.d=!0
o.e=0
o.f=!1
z=$.dQ
if(z==null){z=V.hI(0,0,1,1)
$.dQ=z}o.r=z
z=q.b
if(z!==o){if(z!=null)z.gw().J(0,q.ga9())
t=q.b
q.b=o
o.gw().h(0,q.ga9())
z=new D.I("target",t,q.b,q,[X.dZ])
z.b=!0
q.ak(z)}z=q.d
y=H.o(z,0)
H.u(w,y)
y=[y]
if(z.dM(H.b([w],y))){u=z.a
n=u.length
C.a.h(u,w)
z.du(n,H.b([w],y))}z=q.a
m=V.aq(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
y=new U.df()
y.a=m
z.sar(y)
l=C.u.cv(document,"tutorial1")
if(l==null)H.M(P.K("Failed to find an element with the identifier, tutorial1."))
z=E.ic(l,!0,!0,!0,!1)
y=z.d
if(y!==q){if(y!=null)y.gw().J(0,z.gbt())
z.d=q
q.gw().h(0,z.gbt())
z.cW()}}},1]]
setupProgram(dart,0,0)
J.G=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dt.prototype
return J.h_.prototype}if(typeof a=="string")return J.bH.prototype
if(a==null)return J.h0.prototype
if(typeof a=="boolean")return J.fZ.prototype
if(a.constructor==Array)return J.az.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bj.prototype
return a}if(a instanceof P.a)return a
return J.c1(a)}
J.c0=function(a){if(typeof a=="string")return J.bH.prototype
if(a==null)return a
if(a.constructor==Array)return J.az.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bj.prototype
return a}if(a instanceof P.a)return a
return J.c1(a)}
J.cX=function(a){if(a==null)return a
if(a.constructor==Array)return J.az.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bj.prototype
return a}if(a instanceof P.a)return a
return J.c1(a)}
J.jT=function(a){if(typeof a=="number")return J.bG.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bT.prototype
return a}
J.eQ=function(a){if(typeof a=="string")return J.bH.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bT.prototype
return a}
J.U=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bj.prototype
return a}if(a instanceof P.a)return a
return J.c1(a)}
J.P=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.G(a).n(a,b)}
J.f0=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.jT(a).aL(a,b)}
J.f1=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.k3(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c0(a).u(a,b)}
J.f2=function(a,b,c,d){return J.U(a).d2(a,b,c,d)}
J.bv=function(a,b){return J.U(a).dT(a,b)}
J.d1=function(a,b){return J.U(a).p(a,b)}
J.c7=function(a,b,c){return J.c0(a).es(a,b,c)}
J.c8=function(a,b){return J.cX(a).O(a,b)}
J.f3=function(a){return J.U(a).gei(a)}
J.bb=function(a){return J.G(a).gH(a)}
J.aS=function(a){return J.cX(a).gD(a)}
J.ax=function(a){return J.c0(a).gl(a)}
J.f4=function(a){return J.U(a).gfc(a)}
J.f5=function(a){return J.U(a).gfl(a)}
J.c9=function(a,b){return J.U(a).aj(a,b)}
J.d2=function(a){return J.cX(a).fd(a)}
J.f6=function(a,b,c){return J.eQ(a).au(a,b,c)}
J.f7=function(a){return J.eQ(a).fp(a)}
J.V=function(a){return J.G(a).i(a)}
I.aw=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.j=W.bw.prototype
C.t=W.ce.prototype
C.d=W.an.prototype
C.D=W.fu.prototype
C.E=W.fO.prototype
C.u=W.fQ.prototype
C.G=J.z.prototype
C.a=J.az.prototype
C.h=J.dt.prototype
C.e=J.bG.prototype
C.c=J.bH.prototype
C.N=J.bj.prototype
C.R=W.hl.prototype
C.x=J.hr.prototype
C.y=W.hD.prototype
C.b=P.cq.prototype
C.q=W.i7.prototype
C.k=W.i8.prototype
C.i=W.i9.prototype
C.r=J.bT.prototype
C.z=W.b3.prototype
C.A=W.iN.prototype
C.B=new P.hp()
C.C=new P.iD()
C.f=new P.jh()
C.m=new P.be(0)
C.F=new P.fS("element",!0,!1,!1,!1)
C.H=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.I=function(hooks) {
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

C.J=function(getTagFallback) {
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
C.K=function() {
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
C.L=function(hooks) {
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
C.M=function(hooks) {
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
C.O=H.b(I.aw(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.i])
C.P=H.b(I.aw(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.i])
C.Q=H.b(I.aw([]),[P.i])
C.n=H.b(I.aw([0,0,65498,45055,65535,34815,65534,18431]),[P.v])
C.o=H.b(I.aw(["bind","if","ref","repeat","syntax"]),[P.i])
C.p=H.b(I.aw(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.i])
C.l=new P.iC(!1)
$.a7=0
$.aU=null
$.d6=null
$.cO=!1
$.eS=null
$.eM=null
$.eY=null
$.bZ=null
$.c3=null
$.cY=null
$.aL=null
$.b6=null
$.b7=null
$.cP=!1
$.F=C.f
$.ag=null
$.cg=null
$.dq=null
$.dp=null
$.dl=null
$.dk=null
$.dj=null
$.di=null
$.k=V.hh()
$.dB=null
$.dJ=null
$.dK=null
$.dQ=null
$.eh=null
$.ek=null
$.ej=null
$.ei=null
$.fr="uniform mat4 viewObjMat;                    \nuniform mat4 projMat;                       \n                                            \nattribute vec3 posAttr;                     \n                                            \nvarying float depth;                        \n                                            \nvoid main()                                 \n{                                           \n  vec4 pos = viewObjMat*vec4(posAttr, 1.0); \n  depth = pos.z;                            \n  gl_Position = projMat*pos;                \n}                                           \n"
$.fq="precision mediump float;                                  \n                                                          \nuniform vec3 objClr;                                      \nuniform vec3 fogClr;                                      \nuniform float fogStart;                                   \nuniform float fogStop;                                    \n                                                          \nvarying float depth;                                      \n                                                          \nvoid main()                                               \n{                                                         \n   float factor = (depth-fogStop)/(fogStart-fogStop);     \n   factor = clamp(factor, 0.0, 1.0);                      \n   gl_FragColor = vec4(mix(fogClr, objClr, factor), 1.0); \n}                                                         \n"
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
I.$lazy(y,x,w)}})(["dh","$get$dh",function(){return H.eR("_$dart_dartClosure")},"cj","$get$cj",function(){return H.eR("_$dart_js")},"e4","$get$e4",function(){return H.ad(H.bS({
toString:function(){return"$receiver$"}}))},"e5","$get$e5",function(){return H.ad(H.bS({$method$:null,
toString:function(){return"$receiver$"}}))},"e6","$get$e6",function(){return H.ad(H.bS(null))},"e7","$get$e7",function(){return H.ad(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eb","$get$eb",function(){return H.ad(H.bS(void 0))},"ec","$get$ec",function(){return H.ad(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"e9","$get$e9",function(){return H.ad(H.ea(null))},"e8","$get$e8",function(){return H.ad(function(){try{null.$method$}catch(z){return z.message}}())},"ee","$get$ee",function(){return H.ad(H.ea(void 0))},"ed","$get$ed",function(){return H.ad(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cJ","$get$cJ",function(){return P.iO()},"b8","$get$b8",function(){return[]},"eE","$get$eE",function(){return P.hH("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dg","$get$dg",function(){return{}},"ev","$get$ev",function(){return P.dx(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.i)},"cK","$get$cK",function(){return P.h7(P.i,P.bh)},"eo","$get$eo",function(){return Z.a_(0)},"em","$get$em",function(){return Z.a_(511)},"ai","$get$ai",function(){return Z.a_(1)},"aG","$get$aG",function(){return Z.a_(2)},"aF","$get$aF",function(){return Z.a_(4)},"aH","$get$aH",function(){return Z.a_(8)},"aI","$get$aI",function(){return Z.a_(16)},"b1","$get$b1",function(){return Z.a_(32)},"b2","$get$b2",function(){return Z.a_(64)},"en","$get$en",function(){return Z.a_(96)},"aJ","$get$aJ",function(){return Z.a_(128)},"aE","$get$aE",function(){return Z.a_(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.B},{func:1,ret:-1},{func:1,ret:-1,opt:[D.A]},{func:1,ret:-1,args:[W.a3]},{func:1,ret:-1,args:[P.v,[P.p,E.a8]]},{func:1,ret:-1,args:[W.R]},{func:1,ret:P.B,args:[D.A]},{func:1,ret:-1,args:[W.aD]},{func:1,ret:P.B,args:[F.S]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.B,args:[,,]},{func:1,ret:P.i,args:[P.v]},{func:1,args:[,]},{func:1,ret:P.D,args:[W.ab]},{func:1,ret:P.D,args:[P.i]},{func:1,ret:P.D,args:[W.t]},{func:1,ret:P.B,args:[,]},{func:1,ret:-1,args:[W.aX]},{func:1,ret:P.r},{func:1,ret:P.D,args:[W.E,P.i,P.i,W.br]},{func:1,args:[P.i]},{func:1,ret:P.B,args:[,],opt:[,]},{func:1,ret:[P.aj,,],args:[,]},{func:1,args:[W.R]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:-1,args:[W.t,W.t]},{func:1,ret:P.B,args:[{func:1,ret:-1}]},{func:1,ret:P.B,args:[P.a6]},{func:1,ret:P.B,args:[{func:1,ret:-1,args:[D.A]}]},{func:1,ret:P.D,args:[P.r,P.r]},{func:1,args:[,P.i]},{func:1,ret:-1,args:[W.b3]},{func:1,ret:P.B,args:[F.ar,P.r,P.r]},{func:1,ret:P.B,args:[W.R]},{func:1,ret:P.D,args:[V.al]},{func:1,ret:W.E,args:[W.t]}]
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
if(x==y)H.kd(d||a)
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
Isolate.aw=a.aw
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
if(typeof dartMainRunner==="function")dartMainRunner(F.eU,[])
else F.eU([])})})()
//# sourceMappingURL=main.dart.js.map
