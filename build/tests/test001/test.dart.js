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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isA)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.cQ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.cQ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.cQ(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.cR=function(){}
var dart=[["","",,H,{"^":"",kI:{"^":"a;a"}}],["","",,J,{"^":"",
cW:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c1:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.cV==null){H.kf()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.e(P.ef("Return interceptor for "+H.d(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$ci()]
if(v!=null)return v
v=H.kk(a)
if(v!=null)return v
if(typeof a=="function")return C.O
y=Object.getPrototypeOf(a)
if(y==null)return C.x
if(y===Object.prototype)return C.x
if(typeof w=="function"){Object.defineProperty(w,$.$get$ci(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
A:{"^":"a;",
p:function(a,b){return a===b},
gL:function(a){return H.b3(a)},
i:["cP",function(a){return"Instance of '"+H.aD(a)+"'"}],
"%":"CanvasRenderingContext2D|DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo|WebGLRenderbuffer|WebGLTexture"},
h1:{"^":"A;",
i:function(a){return String(a)},
gL:function(a){return a?519018:218159},
$isE:1},
h3:{"^":"A;",
p:function(a,b){return null==b},
i:function(a){return"null"},
gL:function(a){return 0},
$isy:1},
cj:{"^":"A;",
gL:function(a){return 0},
i:["cR",function(a){return String(a)}]},
hw:{"^":"cj;"},
bs:{"^":"cj;"},
bl:{"^":"cj;",
i:function(a){var z=a[$.$get$dh()]
if(z==null)return this.cR(a)
return"JavaScript function for "+H.d(J.a7(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbi:1},
aA:{"^":"A;$ti",
h:function(a,b){H.u(b,H.q(a,0))
if(!!a.fixed$length)H.P(P.Z("add"))
a.push(b)},
fm:function(a,b){var z
if(!!a.fixed$length)H.P(P.Z("removeAt"))
z=a.length
if(b>=z)throw H.e(P.bq(b,null,null))
return a.splice(b,1)[0]},
F:function(a,b){var z
if(!!a.fixed$length)H.P(P.Z("remove"))
for(z=0;z<a.length;++z)if(J.J(a[z],b)){a.splice(z,1)
return!0}return!1},
O:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.q(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.e(P.ap(a))}},
k:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.G(z,y,H.d(a[y]))
return z.join(b)},
f0:function(a){return this.k(a,"")},
eU:function(a,b,c){var z,y,x
H.f(b,{func:1,ret:P.E,args:[H.q(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.e(P.ap(a))}throw H.e(H.bI())},
eT:function(a,b){return this.eU(a,b,null)},
N:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
cO:function(a,b,c){var z=a.length
if(b>z)throw H.e(P.V(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.e(P.V(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.q(a,0)])
return H.b(a.slice(b,c),[H.q(a,0)])},
geS:function(a){if(a.length>0)return a[0]
throw H.e(H.bI())},
gaF:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.e(H.bI())},
bU:function(a,b){var z,y
H.f(b,{func:1,ret:P.E,args:[H.q(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.e(P.ap(a))}return!1},
J:function(a,b){var z
for(z=0;z<a.length;++z)if(J.J(a[z],b))return!0
return!1},
i:function(a){return P.ch(a,"[","]")},
gE:function(a){return new J.an(a,a.length,0,[H.q(a,0)])},
gL:function(a){return H.b3(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.P(P.Z("set length"))
if(b<0)throw H.e(P.V(b,0,null,"newLength",null))
a.length=b},
G:function(a,b,c){H.u(c,H.q(a,0))
if(!!a.immutable$list)H.P(P.Z("indexed set"))
if(b>=a.length||b<0)throw H.e(H.bc(a,b))
a[b]=c},
$isp:1,
$isc:1,
m:{
h0:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.ca(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.V(a,0,4294967295,"length",null))
return J.dt(new Array(a),b)},
dt:function(a,b){return J.bJ(H.b(a,[b]))},
bJ:function(a){H.c4(a)
a.fixed$length=Array
return a}}},
kH:{"^":"aA;$ti"},
an:{"^":"a;a,b,c,0d,$ti",
sbt:function(a){this.d=H.u(a,H.q(this,0))},
gA:function(){return this.d},
t:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.e(H.B(z))
x=this.c
if(x>=y){this.sbt(null)
return!1}this.sbt(z[x]);++this.c
return!0},
$isar:1},
bj:{"^":"A;",
c5:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.e(P.Z(""+a+".floor()"))},
X:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.Z(""+a+".round()"))},
cl:function(a,b){var z,y
if(b>20)throw H.e(P.V(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gL:function(a){return a&0x1FFFFFFF},
H:function(a,b){if(typeof b!=="number")throw H.e(H.au(b))
return a*b},
cG:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
cU:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bP(a,b)},
ag:function(a,b){return(a|0)===a?a/b|0:this.bP(a,b)},
bP:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.e(P.Z("Result of truncating division is "+H.d(z)+": "+H.d(a)+" ~/ "+b))},
aA:function(a,b){var z
if(a>0)z=this.ef(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
ef:function(a,b){return b>31?0:a>>>b},
aL:function(a,b){if(typeof b!=="number")throw H.e(H.au(b))
return a<b},
$isr:1,
$isa6:1},
du:{"^":"bj;",$isv:1},
h2:{"^":"bj;"},
bk:{"^":"A;",
b9:function(a,b){if(b<0)throw H.e(H.bc(a,b))
if(b>=a.length)H.P(H.bc(a,b))
return a.charCodeAt(b)},
aa:function(a,b){if(b>=a.length)throw H.e(H.bc(a,b))
return a.charCodeAt(b)},
P:function(a,b){H.w(b)
if(typeof b!=="string")throw H.e(P.ca(b,null,null))
return a+b},
cN:function(a,b,c){var z
if(c>a.length)throw H.e(P.V(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
aN:function(a,b){return this.cN(a,b,0)},
au:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.bq(b,null,null))
if(b>c)throw H.e(P.bq(b,null,null))
if(c>a.length)throw H.e(P.bq(c,null,null))
return a.substring(b,c)},
aO:function(a,b){return this.au(a,b,null)},
fC:function(a){return a.toLowerCase()},
H:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.B)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
fc:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.H(c,z)+a},
a5:function(a,b){return this.fc(a,b," ")},
eA:function(a,b,c){if(c>a.length)throw H.e(P.V(c,0,a.length,null,null))
return H.f0(a,b,c)},
i:function(a){return a},
gL:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$isdI:1,
$isj:1}}],["","",,H,{"^":"",
bI:function(){return new P.cs("No element")},
h_:function(){return new P.cs("Too many elements")},
k:{"^":"iH;a",
gl:function(a){return this.a.length},
n:function(a,b){return C.c.b9(this.a,b)},
$aseg:function(){return[P.v]},
$asH:function(){return[P.v]},
$asp:function(){return[P.v]},
$asc:function(){return[P.v]}},
dp:{"^":"p;"},
bL:{"^":"dp;$ti",
gE:function(a){return new H.cl(this,this.gl(this),0,[H.av(this,"bL",0)])},
bi:function(a,b){return this.cQ(0,H.f(b,{func:1,ret:P.E,args:[H.av(this,"bL",0)]}))}},
cl:{"^":"a;a,b,c,0d,$ti",
sam:function(a){this.d=H.u(a,H.q(this,0))},
gA:function(){return this.d},
t:function(){var z,y,x,w
z=this.a
y=J.c0(z)
x=y.gl(z)
if(this.b!==x)throw H.e(P.ap(z))
w=this.c
if(w>=x){this.sam(null)
return!1}this.sam(y.N(z,w));++this.c
return!0},
$isar:1},
hi:{"^":"p;a,b,$ti",
gE:function(a){return new H.hj(J.aV(this.a),this.b,this.$ti)},
gl:function(a){return J.ay(this.a)},
N:function(a,b){return this.b.$1(J.c8(this.a,b))},
$asp:function(a,b){return[b]}},
hj:{"^":"ar;0a,b,c,$ti",
sam:function(a){this.a=H.u(a,H.q(this,1))},
t:function(){var z=this.b
if(z.t()){this.sam(this.c.$1(z.gA()))
return!0}this.sam(null)
return!1},
gA:function(){return this.a},
$asar:function(a,b){return[b]}},
hk:{"^":"bL;a,b,$ti",
gl:function(a){return J.ay(this.a)},
N:function(a,b){return this.b.$1(J.c8(this.a,b))},
$asbL:function(a,b){return[b]},
$asp:function(a,b){return[b]}},
cF:{"^":"p;a,b,$ti",
gE:function(a){return new H.iY(J.aV(this.a),this.b,this.$ti)}},
iY:{"^":"ar;a,b,$ti",
t:function(){var z,y
for(z=this.a,y=this.b;z.t();)if(y.$1(z.gA()))return!0
return!1},
gA:function(){return this.a.gA()}},
bH:{"^":"a;$ti"},
eg:{"^":"a;$ti"},
iH:{"^":"bK+eg;"}}],["","",,H,{"^":"",
aU:function(a){var z,y
z=H.w(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
k8:function(a){return init.types[H.O(a)]},
ki:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.G(a).$isa2},
d:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a7(a)
if(typeof z!=="string")throw H.e(H.au(a))
return z},
b3:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
aD:function(a){return H.hy(a)+H.cN(H.aw(a),0,null)},
hy:function(a){var z,y,x,w,v,u,t,s,r
z=J.G(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.H||!!z.$isbs){u=C.v(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.aU(w.length>1&&C.c.aa(w,0)===36?C.c.aO(w,1):w)},
dM:function(a){var z,y,x,w,v
z=a.length
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
hG:function(a){var z,y,x,w
z=H.b([],[P.v])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.B)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.e(H.au(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.aA(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.e(H.au(w))}return H.dM(z)},
dN:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.e(H.au(x))
if(x<0)throw H.e(H.au(x))
if(x>65535)return H.hG(a)}return H.dM(a)},
co:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.aA(z,10))>>>0,56320|z&1023)}throw H.e(P.V(a,0,1114111,null,null))},
aC:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hF:function(a){var z=H.aC(a).getFullYear()+0
return z},
hD:function(a){var z=H.aC(a).getMonth()+1
return z},
hz:function(a){var z=H.aC(a).getDate()+0
return z},
hA:function(a){var z=H.aC(a).getHours()+0
return z},
hC:function(a){var z=H.aC(a).getMinutes()+0
return z},
hE:function(a){var z=H.aC(a).getSeconds()+0
return z},
hB:function(a){var z=H.aC(a).getMilliseconds()+0
return z},
aR:function(a){throw H.e(H.au(a))},
i:function(a,b){if(a==null)J.ay(a)
throw H.e(H.bc(a,b))},
bc:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.am(!0,b,"index",null)
z=H.O(J.ay(a))
if(!(b<0)){if(typeof z!=="number")return H.aR(z)
y=b>=z}else y=!0
if(y)return P.az(b,a,"index",null,z)
return P.bq(b,"index",null)},
k3:function(a,b,c){if(a>c)return new P.bP(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bP(a,c,!0,b,"end","Invalid value")
return new P.am(!0,b,"end",null)},
au:function(a){return new P.am(!0,a,null,null)},
e:function(a){var z
if(a==null)a=new P.dH()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.f1})
z.name=""}else z.toString=H.f1
return z},
f1:function(){return J.a7(this.dartException)},
P:function(a){throw H.e(a)},
B:function(a){throw H.e(P.ap(a))},
W:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.ky(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.aA(x,16)&8191)===10)switch(w){case 438:return z.$1(H.ck(H.d(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dG(H.d(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$e4()
u=$.$get$e5()
t=$.$get$e6()
s=$.$get$e7()
r=$.$get$eb()
q=$.$get$ec()
p=$.$get$e9()
$.$get$e8()
o=$.$get$ee()
n=$.$get$ed()
m=v.S(y)
if(m!=null)return z.$1(H.ck(H.w(y),m))
else{m=u.S(y)
if(m!=null){m.method="call"
return z.$1(H.ck(H.w(y),m))}else{m=t.S(y)
if(m==null){m=s.S(y)
if(m==null){m=r.S(y)
if(m==null){m=q.S(y)
if(m==null){m=p.S(y)
if(m==null){m=s.S(y)
if(m==null){m=o.S(y)
if(m==null){m=n.S(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dG(H.w(y),m))}}return z.$1(new H.iG(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.dV()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.am(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.dV()
return a},
aQ:function(a){var z
if(a==null)return new H.eE(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eE(a)},
k5:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.G(0,a[y],a[x])}return b},
kh:function(a,b,c,d,e,f){H.h(a,"$isbi")
switch(H.O(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.R("Unsupported number of arguments for wrapped closure"))},
aP:function(a,b){var z
H.O(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kh)
a.$identity=z
return z},
fj:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.G(d).$isc){z.$reflectionInfo=d
x=H.hL(z).r}else x=d
w=e?Object.create(new H.i7().constructor.prototype):Object.create(new H.cb(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.a8
if(typeof u!=="number")return u.P()
$.a8=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.dd(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.k8,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.d7:H.cc
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
fg:function(a,b,c,d){var z=H.cc
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dd:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fi(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fg(y,!w,z,b)
if(y===0){w=$.a8
if(typeof w!=="number")return w.P()
$.a8=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.aX
if(v==null){v=H.bA("self")
$.aX=v}return new Function(w+H.d(v)+";return "+u+"."+H.d(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a8
if(typeof w!=="number")return w.P()
$.a8=w+1
t+=w
w="return function("+t+"){return this."
v=$.aX
if(v==null){v=H.bA("self")
$.aX=v}return new Function(w+H.d(v)+"."+H.d(z)+"("+t+");}")()},
fh:function(a,b,c,d){var z,y
z=H.cc
y=H.d7
switch(b?-1:a){case 0:throw H.e(H.hU("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fi:function(a,b){var z,y,x,w,v,u,t,s
z=$.aX
if(z==null){z=H.bA("self")
$.aX=z}y=$.d6
if(y==null){y=H.bA("receiver")
$.d6=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fh(w,!u,x,b)
if(w===1){z="return function(){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+");"
y=$.a8
if(typeof y!=="number")return y.P()
$.a8=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+", "+s+");"
y=$.a8
if(typeof y!=="number")return y.P()
$.a8=y+1
return new Function(z+y+"}")()},
cQ:function(a,b,c,d,e,f,g){return H.fj(a,b,H.O(c),d,!!e,!!f,g)},
w:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.a5(a,"String"))},
l6:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.a5(a,"double"))},
ko:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.a5(a,"num"))},
cO:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.a5(a,"bool"))},
O:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.a5(a,"int"))},
eZ:function(a,b){throw H.e(H.a5(a,H.aU(H.w(b).substring(3))))},
kq:function(a,b){throw H.e(H.fe(a,H.aU(H.w(b).substring(3))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.G(a)[b])return a
H.eZ(a,b)},
aS:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.G(a)[b]
else z=!0
if(z)return a
H.kq(a,b)},
c4:function(a){if(a==null)return a
if(!!J.G(a).$isc)return a
throw H.e(H.a5(a,"List<dynamic>"))},
kj:function(a,b){var z
if(a==null)return a
z=J.G(a)
if(!!z.$isc)return a
if(z[b])return a
H.eZ(a,b)},
eT:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.O(z)]
else return a.$S()}return},
bx:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.eT(J.G(a))
if(z==null)return!1
return H.eK(z,null,b,null)},
f:function(a,b){var z,y
if(a==null)return a
if($.cK)return a
$.cK=!0
try{if(H.bx(a,b))return a
z=H.c6(b)
y=H.a5(a,z)
throw H.e(y)}finally{$.cK=!1}},
cS:function(a,b){if(a!=null&&!H.cP(a,b))H.P(H.a5(a,H.c6(b)))
return a},
eO:function(a){var z,y
z=J.G(a)
if(!!z.$iso){y=H.eT(z)
if(y!=null)return H.c6(y)
return"Closure"}return H.aD(a)},
kv:function(a){throw H.e(new P.fm(H.w(a)))},
eU:function(a){return init.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
aw:function(a){if(a==null)return
return a.$ti},
l7:function(a,b,c){return H.aT(a["$as"+H.d(c)],H.aw(b))},
c2:function(a,b,c,d){var z
H.w(c)
H.O(d)
z=H.aT(a["$as"+H.d(c)],H.aw(b))
return z==null?null:z[d]},
av:function(a,b,c){var z
H.w(b)
H.O(c)
z=H.aT(a["$as"+H.d(b)],H.aw(a))
return z==null?null:z[c]},
q:function(a,b){var z
H.O(b)
z=H.aw(a)
return z==null?null:z[b]},
c6:function(a){return H.at(a,null)},
at:function(a,b){var z,y
H.m(b,"$isc",[P.j],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aU(a[0].builtin$cls)+H.cN(a,1,b)
if(typeof a=="function")return H.aU(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.O(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.d(b[y])}if('func' in a)return H.jQ(a,b)
if('futureOr' in a)return"FutureOr<"+H.at("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jQ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.j]
H.m(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.b([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.i(b,r)
t=C.c.P(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.at(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.at(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.at(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.at(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.k4(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.w(z[l])
n=n+m+H.at(i[h],b)+(" "+H.d(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
cN:function(a,b,c){var z,y,x,w,v,u
H.m(c,"$isc",[P.j],"$asc")
if(a==null)return""
z=new P.bQ("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.at(u,c)}return"<"+z.i(0)+">"},
aT:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bw:function(a,b,c,d){var z,y
H.w(b)
H.c4(c)
H.w(d)
if(a==null)return!1
z=H.aw(a)
y=J.G(a)
if(y[b]==null)return!1
return H.eR(H.aT(y[d],z),null,c,null)},
m:function(a,b,c,d){H.w(b)
H.c4(c)
H.w(d)
if(a==null)return a
if(H.bw(a,b,c,d))return a
throw H.e(H.a5(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aU(b.substring(3))+H.cN(c,0,null),init.mangledGlobalNames)))},
eR:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a1(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a1(a[y],b,c[y],d))return!1
return!0},
l4:function(a,b,c){return a.apply(b,H.aT(J.G(b)["$as"+H.d(c)],H.aw(b)))},
eW:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="y"||a===-1||a===-2||H.eW(z)}return!1},
cP:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="a"||b.builtin$cls==="y"||b===-1||b===-2||H.eW(b)
if(b==null||b===-1||b.builtin$cls==="a"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cP(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bx(a,b)}z=J.G(a).constructor
y=H.aw(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a1(z,null,b,null)},
u:function(a,b){if(a!=null&&!H.cP(a,b))throw H.e(H.a5(a,H.c6(b)))
return a},
a1:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a1(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="y")return!0
if('func' in c)return H.eK(a,b,c,d)
if('func' in a)return c.builtin$cls==="bi"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a1("type" in a?a.type:null,b,x,d)
else if(H.a1(a,b,x,d))return!0
else{if(!('$is'+"b_" in y.prototype))return!1
w=y.prototype["$as"+"b_"]
v=H.aT(w,z?a.slice(1):null)
return H.a1(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eR(H.aT(r,z),b,u,d)},
eK:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.kn(m,b,l,d)},
kn:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a1(c[w],d,a[w],b))return!1}return!0},
l5:function(a,b,c){Object.defineProperty(a,H.w(b),{value:c,enumerable:false,writable:true,configurable:true})},
kk:function(a){var z,y,x,w,v,u
z=H.w($.eV.$1(a))
y=$.bZ[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c3[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.w($.eQ.$2(a,z))
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
return u.i}if(v==="+")return H.eY(a,x)
if(v==="*")throw H.e(P.ef(z))
if(init.leafTags[z]===true){u=H.c5(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.eY(a,x)},
eY:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cW(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
c5:function(a){return J.cW(a,!1,null,!!a.$isa2)},
km:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.c5(z)
else return J.cW(z,c,null,null)},
kf:function(){if(!0===$.cV)return
$.cV=!0
H.kg()},
kg:function(){var z,y,x,w,v,u,t,s
$.bZ=Object.create(null)
$.c3=Object.create(null)
H.kb()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.f_.$1(v)
if(u!=null){t=H.km(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kb:function(){var z,y,x,w,v,u,t
z=C.L()
z=H.aO(C.I,H.aO(C.N,H.aO(C.u,H.aO(C.u,H.aO(C.M,H.aO(C.J,H.aO(C.K(C.v),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.eV=new H.kc(v)
$.eQ=new H.kd(u)
$.f_=new H.ke(t)},
aO:function(a,b){return a(b)||b},
f0:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
cY:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hK:{"^":"a;a,b,c,d,e,f,r,0x",m:{
hL:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bJ(z)
y=z[0]
x=z[1]
return new H.hK(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ip:{"^":"a;a,b,c,d,e,f",
S:function(a){var z,y,x
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
ae:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.b([],[P.j])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ip(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bT:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
ea:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
ht:{"^":"K;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
m:{
dG:function(a,b){return new H.ht(a,b==null?null:b.method)}}},
h6:{"^":"K;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.d(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.d(this.a)+")"},
m:{
ck:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.h6(a,y,z?null:b.receiver)}}},
iG:{"^":"K;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
ky:{"^":"o:12;a",
$1:function(a){if(!!J.G(a).$isK)if(a.$thrownJsError==null)a.$thrownJsError=this.a
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
$isai:1},
o:{"^":"a;",
i:function(a){return"Closure '"+H.aD(this).trim()+"'"},
gct:function(){return this},
$isbi:1,
gct:function(){return this}},
dZ:{"^":"o;"},
i7:{"^":"dZ;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.aU(z)+"'"}},
cb:{"^":"dZ;a,b,c,d",
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cb))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gL:function(a){var z,y
z=this.c
if(z==null)y=H.b3(this.a)
else y=typeof z!=="object"?J.bd(z):H.b3(z)
return(y^H.b3(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.aD(z)+"'")},
m:{
cc:function(a){return a.a},
d7:function(a){return a.c},
bA:function(a){var z,y,x,w,v
z=new H.cb("self","target","receiver","name")
y=J.bJ(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
iq:{"^":"K;a",
i:function(a){return this.a},
m:{
a5:function(a,b){return new H.iq("TypeError: "+H.d(P.bE(a))+": type '"+H.eO(a)+"' is not a subtype of type '"+b+"'")}}},
fd:{"^":"K;a",
i:function(a){return this.a},
m:{
fe:function(a,b){return new H.fd("CastError: "+H.d(P.bE(a))+": type '"+H.eO(a)+"' is not a subtype of type '"+b+"'")}}},
hT:{"^":"K;a",
i:function(a){return"RuntimeError: "+H.d(this.a)},
m:{
hU:function(a){return new H.hT(a)}}},
aB:{"^":"dz;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
ga4:function(){return new H.dx(this,[H.q(this,0)])},
c_:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.bC(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.bC(y,a)}else return this.eY(a)},
eY:function(a){var z=this.d
if(z==null)return!1
return this.ba(this.aU(z,J.bd(a)&0x3ffffff),a)>=0},
n:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.ax(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.ax(w,b)
x=y==null?null:y.b
return x}else return this.eZ(b)},
eZ:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aU(z,J.bd(a)&0x3ffffff)
x=this.ba(y,a)
if(x<0)return
return y[x].b},
G:function(a,b,c){var z,y,x,w,v,u
H.u(b,H.q(this,0))
H.u(c,H.q(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.aZ()
this.b=z}this.bu(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.aZ()
this.c=y}this.bu(y,b,c)}else{x=this.d
if(x==null){x=this.aZ()
this.d=x}w=J.bd(b)&0x3ffffff
v=this.aU(x,w)
if(v==null)this.b3(x,w,[this.aQ(b,c)])
else{u=this.ba(v,b)
if(u>=0)v[u].b=c
else v.push(this.aQ(b,c))}}},
O:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.e(P.ap(this))
z=z.c}},
bu:function(a,b,c){var z
H.u(b,H.q(this,0))
H.u(c,H.q(this,1))
z=this.ax(a,b)
if(z==null)this.b3(a,b,this.aQ(b,c))
else z.b=c},
d6:function(){this.r=this.r+1&67108863},
aQ:function(a,b){var z,y
z=new H.h9(H.u(a,H.q(this,0)),H.u(b,H.q(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.d6()
return z},
ba:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.J(a[y].a,b))return y
return-1},
i:function(a){return P.dA(this)},
ax:function(a,b){return a[b]},
aU:function(a,b){return a[b]},
b3:function(a,b,c){a[b]=c},
di:function(a,b){delete a[b]},
bC:function(a,b){return this.ax(a,b)!=null},
aZ:function(){var z=Object.create(null)
this.b3(z,"<non-identifier-key>",z)
this.di(z,"<non-identifier-key>")
return z},
$isdw:1},
h9:{"^":"a;a,b,0c,0d"},
dx:{"^":"dp;a,$ti",
gl:function(a){return this.a.a},
gE:function(a){var z,y
z=this.a
y=new H.ha(z,z.r,this.$ti)
y.c=z.e
return y}},
ha:{"^":"a;a,b,0c,0d,$ti",
sbv:function(a){this.d=H.u(a,H.q(this,0))},
gA:function(){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.ap(z))
else{z=this.c
if(z==null){this.sbv(null)
return!1}else{this.sbv(z.a)
this.c=this.c.c
return!0}}},
$isar:1},
kc:{"^":"o:12;a",
$1:function(a){return this.a(a)}},
kd:{"^":"o:37;a",
$2:function(a,b){return this.a(a,b)}},
ke:{"^":"o:30;a",
$1:function(a){return this.a(H.w(a))}},
h4:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isdI:1,
m:{
h5:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.e(new P.fM("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
k4:function(a){return J.dt(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kp:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
cJ:function(a){return a},
bv:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.bc(b,a))},
jP:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.e(H.k3(a,b,c))
return b},
ho:{"^":"A;","%":";ArrayBufferView;cn|eA|eB|hn|eC|eD|bo"},
cn:{"^":"ho;",
gl:function(a){return a.length},
$isa2:1,
$asa2:I.cR},
hn:{"^":"eB;",
n:function(a,b){H.bv(b,a,a.length)
return a[b]},
$asbH:function(){return[P.r]},
$asH:function(){return[P.r]},
$isp:1,
$asp:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]},
"%":"Float32Array"},
bo:{"^":"eD;",
$asbH:function(){return[P.v]},
$asH:function(){return[P.v]},
$isp:1,
$asp:function(){return[P.v]},
$isc:1,
$asc:function(){return[P.v]}},
kJ:{"^":"bo;",
n:function(a,b){H.bv(b,a,a.length)
return a[b]},
"%":"Int16Array"},
kK:{"^":"bo;",
n:function(a,b){H.bv(b,a,a.length)
return a[b]},
"%":"Int32Array"},
kL:{"^":"bo;",
n:function(a,b){H.bv(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
kM:{"^":"bo;",
gl:function(a){return a.length},
n:function(a,b){H.bv(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
eA:{"^":"cn+H;"},
eB:{"^":"eA+bH;"},
eC:{"^":"cn+H;"},
eD:{"^":"eC+bH;"}}],["","",,P,{"^":"",
j_:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jX()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aP(new P.j1(z),1)).observe(y,{childList:true})
return new P.j0(z,y,x)}else if(self.setImmediate!=null)return P.jY()
return P.jZ()},
kW:[function(a){self.scheduleImmediate(H.aP(new P.j2(H.f(a,{func:1,ret:-1})),0))},"$1","jX",4,0,7],
kX:[function(a){self.setImmediate(H.aP(new P.j3(H.f(a,{func:1,ret:-1})),0))},"$1","jY",4,0,7],
kY:[function(a){P.cw(C.l,H.f(a,{func:1,ret:-1}))},"$1","jZ",4,0,7],
cw:function(a,b){var z
H.f(b,{func:1,ret:-1})
z=C.h.ag(a.a,1000)
return P.jE(z<0?0:z,b)},
e2:function(a,b){var z
H.f(b,{func:1,ret:-1,args:[P.aE]})
z=C.h.ag(a.a,1000)
return P.jF(z<0?0:z,b)},
jT:function(a,b){if(H.bx(a,{func:1,args:[P.a,P.ai]}))return H.f(a,{func:1,ret:null,args:[P.a,P.ai]})
if(H.bx(a,{func:1,args:[P.a]}))return H.f(a,{func:1,ret:null,args:[P.a]})
throw H.e(P.ca(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jS:function(){var z,y
for(;z=$.aN,z!=null;){$.ba=null
y=z.b
$.aN=y
if(y==null)$.b9=null
z.a.$0()}},
l3:[function(){$.cL=!0
try{P.jS()}finally{$.ba=null
$.cL=!1
if($.aN!=null)$.$get$cG().$1(P.eS())}},"$0","eS",0,0,1],
eN:function(a){var z=new P.es(H.f(a,{func:1,ret:-1}))
if($.aN==null){$.b9=z
$.aN=z
if(!$.cL)$.$get$cG().$1(P.eS())}else{$.b9.b=z
$.b9=z}},
jW:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
z=$.aN
if(z==null){P.eN(a)
$.ba=$.b9
return}y=new P.es(a)
x=$.ba
if(x==null){y.b=z
$.ba=y
$.aN=y}else{y.b=x.b
x.b=y
$.ba=y
if(y.b==null)$.b9=y}},
kr:function(a){var z,y
z={func:1,ret:-1}
H.f(a,z)
y=$.D
if(C.f===y){P.bY(null,null,C.f,a)
return}y.toString
P.bY(null,null,y,H.f(y.b6(a),z))},
e1:function(a,b){var z,y
z={func:1,ret:-1}
H.f(b,z)
y=$.D
if(y===C.f){y.toString
return P.cw(a,b)}return P.cw(a,H.f(y.b6(b),z))},
il:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aE]}
H.f(b,z)
y=$.D
if(y===C.f){y.toString
return P.e2(a,b)}x=y.bW(b,P.aE)
$.D.toString
return P.e2(a,H.f(x,z))},
bX:function(a,b,c,d,e){var z={}
z.a=d
P.jW(new P.jU(z,e))},
eL:function(a,b,c,d,e){var z,y
H.f(d,{func:1,ret:e})
y=$.D
if(y===c)return d.$0()
$.D=c
z=y
try{y=d.$0()
return y}finally{$.D=z}},
eM:function(a,b,c,d,e,f,g){var z,y
H.f(d,{func:1,ret:f,args:[g]})
H.u(e,g)
y=$.D
if(y===c)return d.$1(e)
$.D=c
z=y
try{y=d.$1(e)
return y}finally{$.D=z}},
jV:function(a,b,c,d,e,f,g,h,i){var z,y
H.f(d,{func:1,ret:g,args:[h,i]})
H.u(e,h)
H.u(f,i)
y=$.D
if(y===c)return d.$2(e,f)
$.D=c
z=y
try{y=d.$2(e,f)
return y}finally{$.D=z}},
bY:function(a,b,c,d){var z
H.f(d,{func:1,ret:-1})
z=C.f!==c
if(z)d=!(!z||!1)?c.b6(d):c.es(d,-1)
P.eN(d)},
j1:{"^":"o:16;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
j0:{"^":"o:26;a,b,c",
$1:function(a){var z,y
this.a.a=H.f(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
j2:{"^":"o:0;a",
$0:function(){this.a.$0()}},
j3:{"^":"o:0;a",
$0:function(){this.a.$0()}},
eG:{"^":"a;a,0b,c",
d4:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.aP(new P.jH(this,b),0),a)
else throw H.e(P.Z("`setTimeout()` not found."))},
d5:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.aP(new P.jG(this,a,Date.now(),b),0),a)
else throw H.e(P.Z("Periodic timer."))},
$isaE:1,
m:{
jE:function(a,b){var z=new P.eG(!0,0)
z.d4(a,b)
return z},
jF:function(a,b){var z=new P.eG(!1,0)
z.d5(a,b)
return z}}},
jH:{"^":"o:1;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
jG:{"^":"o:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.cU(w,x)}z.c=y
this.d.$1(z)}},
aM:{"^":"a;0a,b,c,d,e,$ti",
f4:function(a){if(this.c!==6)return!0
return this.b.b.bg(H.f(this.d,{func:1,ret:P.E,args:[P.a]}),a.a,P.E,P.a)},
eX:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.q(this,1)}
w=this.b.b
if(H.bx(z,{func:1,args:[P.a,P.ai]}))return H.cS(w.ft(z,a.a,a.b,null,y,P.ai),x)
else return H.cS(w.bg(H.f(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
al:{"^":"a;bO:a<,b,0e4:c<,$ti",
cj:function(a,b,c){var z,y,x,w
z=H.q(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.D
if(y!==C.f){y.toString
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.jT(b,y)}H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.al(0,$.D,[c])
w=b==null?1:3
this.bx(new P.aM(x,w,a,b,[z,c]))
return x},
fz:function(a,b){return this.cj(a,null,b)},
bx:function(a){var z,y
z=this.a
if(z<=1){a.a=H.h(this.c,"$isaM")
this.c=a}else{if(z===2){y=H.h(this.c,"$isal")
z=y.a
if(z<4){y.bx(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.bY(null,null,z,H.f(new P.jb(this,a),{func:1,ret:-1}))}},
bM:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.h(this.c,"$isaM")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.h(this.c,"$isal")
y=u.a
if(y<4){u.bM(a)
return}this.a=y
this.c=u.c}z.a=this.az(a)
y=this.b
y.toString
P.bY(null,null,y,H.f(new P.jg(z,this),{func:1,ret:-1}))}},
b2:function(){var z=H.h(this.c,"$isaM")
this.c=null
return this.az(z)},
az:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
bz:function(a){var z,y,x
z=H.q(this,0)
H.cS(a,{futureOr:1,type:z})
y=this.$ti
if(H.bw(a,"$isb_",y,"$asb_"))if(H.bw(a,"$isal",y,null))P.ev(a,this)
else P.jc(a,this)
else{x=this.b2()
H.u(a,z)
this.a=4
this.c=a
P.b8(this,x)}},
bA:function(a,b){var z
H.h(b,"$isai")
z=this.b2()
this.a=8
this.c=new P.X(a,b)
P.b8(this,z)},
$isb_:1,
m:{
jc:function(a,b){var z,y,x
b.a=1
try{a.cj(new P.jd(b),new P.je(b),null)}catch(x){z=H.W(x)
y=H.aQ(x)
P.kr(new P.jf(b,z,y))}},
ev:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.h(a.c,"$isal")
if(z>=4){y=b.b2()
b.a=a.a
b.c=a.c
P.b8(b,y)}else{y=H.h(b.c,"$isaM")
b.a=2
b.c=a
a.bM(y)}},
b8:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.h(y.c,"$isX")
y=y.b
u=v.a
t=v.b
y.toString
P.bX(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.b8(z.a,b)}y=z.a
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
if(p){H.h(r,"$isX")
y=y.b
u=r.a
t=r.b
y.toString
P.bX(null,null,y,u,t)
return}o=$.D
if(o==null?q!=null:o!==q)$.D=q
else o=null
y=b.c
if(y===8)new P.jj(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.ji(x,b,r).$0()}else if((y&2)!==0)new P.jh(z,x,b).$0()
if(o!=null)$.D=o
y=x.b
if(!!J.G(y).$isb_){if(y.a>=4){n=H.h(t.c,"$isaM")
t.c=null
b=t.az(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.ev(y,t)
return}}m=b.b
n=H.h(m.c,"$isaM")
m.c=null
b=m.az(n)
y=x.a
u=x.b
if(!y){H.u(u,H.q(m,0))
m.a=4
m.c=u}else{H.h(u,"$isX")
m.a=8
m.c=u}z.a=m
y=m}}}},
jb:{"^":"o:0;a,b",
$0:function(){P.b8(this.a,this.b)}},
jg:{"^":"o:0;a,b",
$0:function(){P.b8(this.b,this.a.a)}},
jd:{"^":"o:16;a",
$1:function(a){var z=this.a
z.a=0
z.bz(a)}},
je:{"^":"o:25;a",
$2:function(a,b){this.a.bA(a,H.h(b,"$isai"))},
$1:function(a){return this.$2(a,null)}},
jf:{"^":"o:0;a,b,c",
$0:function(){this.a.bA(this.b,this.c)}},
jj:{"^":"o:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.cg(H.f(w.d,{func:1}),null)}catch(v){y=H.W(v)
x=H.aQ(v)
if(this.d){w=H.h(this.a.a.c,"$isX").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.h(this.a.a.c,"$isX")
else u.b=new P.X(y,x)
u.a=!0
return}if(!!J.G(z).$isb_){if(z instanceof P.al&&z.gbO()>=4){if(z.gbO()===8){w=this.b
w.b=H.h(z.ge4(),"$isX")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.fz(new P.jk(t),null)
w.a=!1}}},
jk:{"^":"o:24;a",
$1:function(a){return this.a}},
ji:{"^":"o:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.q(x,0)
v=H.u(this.c,w)
u=H.q(x,1)
this.a.b=x.b.b.bg(H.f(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.W(t)
y=H.aQ(t)
x=this.a
x.b=new P.X(z,y)
x.a=!0}}},
jh:{"^":"o:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.h(this.a.a.c,"$isX")
w=this.c
if(w.f4(z)&&w.e!=null){v=this.b
v.b=w.eX(z)
v.a=!1}}catch(u){y=H.W(u)
x=H.aQ(u)
w=H.h(this.a.a.c,"$isX")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.X(y,x)
s.a=!0}}},
es:{"^":"a;a,0b"},
i8:{"^":"a;$ti",
gl:function(a){var z,y,x,w
z={}
y=new P.al(0,$.D,[P.v])
z.a=0
x=H.q(this,0)
w=H.f(new P.ia(z,this),{func:1,ret:-1,args:[x]})
H.f(new P.ib(z,y),{func:1,ret:-1})
W.L(this.a,this.b,w,!1,x)
return y}},
ia:{"^":"o;a,b",
$1:function(a){H.u(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.y,args:[H.q(this.b,0)]}}},
ib:{"^":"o:0;a,b",
$0:function(){this.b.bz(this.a.a)}},
ct:{"^":"a;$ti"},
i9:{"^":"a;"},
aE:{"^":"a;"},
X:{"^":"a;a,b",
i:function(a){return H.d(this.a)},
$isK:1},
jM:{"^":"a;",$iskV:1},
jU:{"^":"o:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dH()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.e(z)
x=H.e(z)
x.stack=y.i(0)
throw x}},
jt:{"^":"jM;",
fu:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
try{if(C.f===$.D){a.$0()
return}P.eL(null,null,this,a,-1)}catch(x){z=H.W(x)
y=H.aQ(x)
P.bX(null,null,this,z,H.h(y,"$isai"))}},
fv:function(a,b,c){var z,y,x
H.f(a,{func:1,ret:-1,args:[c]})
H.u(b,c)
try{if(C.f===$.D){a.$1(b)
return}P.eM(null,null,this,a,b,-1,c)}catch(x){z=H.W(x)
y=H.aQ(x)
P.bX(null,null,this,z,H.h(y,"$isai"))}},
es:function(a,b){return new P.jv(this,H.f(a,{func:1,ret:b}),b)},
b6:function(a){return new P.ju(this,H.f(a,{func:1,ret:-1}))},
bW:function(a,b){return new P.jw(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
cg:function(a,b){H.f(a,{func:1,ret:b})
if($.D===C.f)return a.$0()
return P.eL(null,null,this,a,b)},
bg:function(a,b,c,d){H.f(a,{func:1,ret:c,args:[d]})
H.u(b,d)
if($.D===C.f)return a.$1(b)
return P.eM(null,null,this,a,b,c,d)},
ft:function(a,b,c,d,e,f){H.f(a,{func:1,ret:d,args:[e,f]})
H.u(b,e)
H.u(c,f)
if($.D===C.f)return a.$2(b,c)
return P.jV(null,null,this,a,b,c,d,e,f)}},
jv:{"^":"o;a,b,c",
$0:function(){return this.a.cg(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
ju:{"^":"o:1;a,b",
$0:function(){return this.a.fu(this.b)}},
jw:{"^":"o;a,b,c",
$1:function(a){var z=this.c
return this.a.fv(this.b,H.u(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
hc:function(a,b,c){H.c4(a)
return H.m(H.k5(a,new H.aB(0,0,[b,c])),"$isdw",[b,c],"$asdw")},
hb:function(a,b){return new H.aB(0,0,[a,b])},
bn:function(a,b,c,d){return new P.jo(0,0,[d])},
fZ:function(a,b,c){var z,y
if(P.cM(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bb()
C.a.h(y,a)
try{P.jR(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.dX(b,H.kj(z,"$isp"),", ")+c
return y.charCodeAt(0)==0?y:y},
ch:function(a,b,c){var z,y,x
if(P.cM(a))return b+"..."+c
z=new P.bQ(b)
y=$.$get$bb()
C.a.h(y,a)
try{x=z
x.a=P.dX(x.gab(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gab()+c
y=z.gab()
return y.charCodeAt(0)==0?y:y},
cM:function(a){var z,y
for(z=0;y=$.$get$bb(),z<y.length;++z)if(a===y[z])return!0
return!1},
jR:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gE(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.t())return
w=H.d(z.gA())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.t()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gA();++x
if(!z.t()){if(x<=4){C.a.h(b,H.d(t))
return}v=H.d(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gA();++x
for(;z.t();t=s,s=r){r=z.gA();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.d(t)
v=H.d(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dy:function(a,b){var z,y,x
z=P.bn(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.B)(a),++x)z.h(0,H.u(a[x],b))
return z},
dA:function(a){var z,y,x
z={}
if(P.cM(a))return"{...}"
y=new P.bQ("")
try{C.a.h($.$get$bb(),a)
x=y
x.a=x.gab()+"{"
z.a=!0
a.O(0,new P.hh(z,y))
z=y
z.a=z.gab()+"}"}finally{z=$.$get$bb()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.gab()
return z.charCodeAt(0)==0?z:z},
jo:{"^":"jl;a,0b,0c,0d,0e,0f,r,$ti",
gE:function(a){var z=new P.ez(this,this.r,this.$ti)
z.c=this.e
return z},
gl:function(a){return this.a},
J:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.h(z[b],"$isbW")!=null}else{y=this.de(b)
return y}},
de:function(a){var z=this.d
if(z==null)return!1
return this.aT(this.bG(z,a),a)>=0},
h:function(a,b){var z,y
H.u(b,H.q(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cI()
this.b=z}return this.bw(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cI()
this.c=y}return this.bw(y,b)}else return this.d7(b)},
d7:function(a){var z,y,x
H.u(a,H.q(this,0))
z=this.d
if(z==null){z=P.cI()
this.d=z}y=this.bB(a)
x=z[y]
if(x==null)z[y]=[this.b_(a)]
else{if(this.aT(x,a)>=0)return!1
x.push(this.b_(a))}return!0},
F:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dZ(this.c,b)
else return this.dW(b)},
dW:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.bG(z,a)
x=this.aT(y,a)
if(x<0)return!1
this.bQ(y.splice(x,1)[0])
return!0},
bw:function(a,b){H.u(b,H.q(this,0))
if(H.h(a[b],"$isbW")!=null)return!1
a[b]=this.b_(b)
return!0},
dZ:function(a,b){var z
if(a==null)return!1
z=H.h(a[b],"$isbW")
if(z==null)return!1
this.bQ(z)
delete a[b]
return!0},
bI:function(){this.r=this.r+1&67108863},
b_:function(a){var z,y
z=new P.bW(H.u(a,H.q(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.bI()
return z},
bQ:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.bI()},
bB:function(a){return J.bd(a)&0x3ffffff},
bG:function(a,b){return a[this.bB(b)]},
aT:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.J(a[y].a,b))return y
return-1},
m:{
cI:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
bW:{"^":"a;a,0b,0c"},
ez:{"^":"a;a,b,0c,0d,$ti",
sby:function(a){this.d=H.u(a,H.q(this,0))},
gA:function(){return this.d},
t:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.ap(z))
else{z=this.c
if(z==null){this.sby(null)
return!1}else{this.sby(H.u(z.a,H.q(this,0)))
this.c=this.c.b
return!0}}},
$isar:1,
m:{
jp:function(a,b,c){var z=new P.ez(a,b,[c])
z.c=a.e
return z}}},
jl:{"^":"hV;"},
bK:{"^":"jq;",$isp:1,$isc:1},
H:{"^":"a;$ti",
gE:function(a){return new H.cl(a,this.gl(a),0,[H.c2(this,a,"H",0)])},
N:function(a,b){return this.n(a,b)},
fB:function(a,b){var z,y
z=H.b([],[H.c2(this,a,"H",0)])
C.a.sl(z,this.gl(a))
for(y=0;y<this.gl(a);++y)C.a.G(z,y,this.n(a,y))
return z},
fA:function(a){return this.fB(a,!0)},
i:function(a){return P.ch(a,"[","]")}},
dz:{"^":"bM;"},
hh:{"^":"o:20;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.d(a)
z.a=y+": "
z.a+=H.d(b)}},
bM:{"^":"a;$ti",
O:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.av(this,"bM",0),H.av(this,"bM",1)]})
for(z=J.aV(this.ga4());z.t();){y=z.gA()
b.$2(y,this.n(0,y))}},
gl:function(a){return J.ay(this.ga4())},
i:function(a){return P.dA(this)},
$isY:1},
hX:{"^":"a;$ti",
a_:function(a,b){var z
for(z=J.aV(H.m(b,"$isp",this.$ti,"$asp"));z.t();)this.h(0,z.gA())},
i:function(a){return P.ch(this,"{","}")},
N:function(a,b){var z,y,x
if(b<0)H.P(P.V(b,0,null,"index",null))
for(z=P.jp(this,this.r,H.q(this,0)),y=0;z.t();){x=z.d
if(b===y)return x;++y}throw H.e(P.az(b,this,"index",null,y))},
$isp:1,
$isdT:1},
hV:{"^":"hX;"},
jq:{"^":"a+H;"}}],["","",,P,{"^":"",ce:{"^":"a;$ti"},bD:{"^":"i9;$ti"},fD:{"^":"ce;",
$asce:function(){return[P.j,[P.c,P.v]]}},fV:{"^":"a;a,b,c,d,e",
i:function(a){return this.a}},fU:{"^":"bD;a",
df:function(a,b,c){var z,y,x,w,v,u
for(z=this.a,y=z.e,x=z.d,z=z.c,w=b,v=null;w<c;++w){if(w>=a.length)return H.i(a,w)
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
default:u=null}if(u!=null){if(v==null)v=new P.bQ("")
if(w>b)v.a+=C.c.au(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.f8(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asbD:function(){return[P.j,P.j]}},iK:{"^":"fD;a"},iL:{"^":"bD;",
eC:function(a,b,c){var z,y,x,w
z=a.length
P.dO(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.jK(0,0,x)
if(w.dr(a,b,z)!==z)w.bR(C.c.b9(a,z-1),0)
return new Uint8Array(x.subarray(0,H.jP(0,w.b,x.length)))},
eB:function(a){return this.eC(a,0,null)},
$asbD:function(){return[P.j,[P.c,P.v]]}},jK:{"^":"a;a,b,c",
bR:function(a,b){var z,y,x,w,v
z=this.c
y=this.b
x=y+1
w=z.length
if((b&64512)===56320){v=65536+((a&1023)<<10)|b&1023
this.b=x
if(y>=w)return H.i(z,y)
z[y]=240|v>>>18
y=x+1
this.b=y
if(x>=w)return H.i(z,x)
z[x]=128|v>>>12&63
x=y+1
this.b=x
if(y>=w)return H.i(z,y)
z[y]=128|v>>>6&63
this.b=x+1
if(x>=w)return H.i(z,x)
z[x]=128|v&63
return!0}else{this.b=x
if(y>=w)return H.i(z,y)
z[y]=224|a>>>12
y=x+1
this.b=y
if(x>=w)return H.i(z,x)
z[x]=128|a>>>6&63
this.b=y+1
if(y>=w)return H.i(z,y)
z[y]=128|a&63
return!1}},
dr:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.c.b9(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.c.aa(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.bR(w,C.c.aa(a,u)))x=u}else if(w<=2047){v=this.b
t=v+1
if(t>=y)break
this.b=t
if(v>=y)return H.i(z,v)
z[v]=192|w>>>6
this.b=t+1
z[t]=128|w&63}else{v=this.b
if(v+2>=y)break
t=v+1
this.b=t
if(v>=y)return H.i(z,v)
z[v]=224|w>>>12
v=t+1
this.b=v
if(t>=y)return H.i(z,t)
z[t]=128|w>>>6&63
this.b=v+1
if(v>=y)return H.i(z,v)
z[v]=128|w&63}}return x}}}],["","",,P,{"^":"",
fF:function(a){if(a instanceof H.o)return a.i(0)
return"Instance of '"+H.aD(a)+"'"},
hd:function(a,b,c,d){var z,y
H.u(b,d)
z=J.h0(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.G(z,y,b)
return H.m(z,"$isc",[d],"$asc")},
he:function(a,b,c){var z,y,x
z=[c]
y=H.b([],z)
for(x=a.gE(a);x.t();)C.a.h(y,H.u(x.gA(),c))
if(b)return y
return H.m(J.bJ(y),"$isc",z,"$asc")},
cu:function(a,b,c){var z,y
z=P.v
H.m(a,"$isp",[z],"$asp")
if(a.constructor===Array){H.m(a,"$isaA",[z],"$asaA")
y=a.length
c=P.dO(b,c,y,null,null,null)
return H.dN(b>0||c<y?C.a.cO(a,b,c):a)}return P.ic(a,b,c)},
ic:function(a,b,c){var z,y,x
H.m(a,"$isp",[P.v],"$asp")
z=J.aV(a)
for(y=0;y<b;++y)if(!z.t())throw H.e(P.V(b,0,y,null,null))
x=[]
for(;z.t();)x.push(z.gA())
return H.dN(x)},
hM:function(a,b,c){return new H.h4(a,H.h5(a,!1,!0,!1))},
eI:function(a,b,c,d){var z,y,x,w,v,u
H.m(a,"$isc",[P.v],"$asc")
if(c===C.q){z=$.$get$eH().b
z=z.test(b)}else z=!1
if(z)return b
y=C.C.eB(H.u(b,H.av(c,"ce",0)))
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.i(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.co(v)
else w=w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
bE:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a7(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fF(a)},
R:function(a){return new P.eu(a)},
cX:function(a){H.kp(a)},
E:{"^":"a;"},
"+bool":0,
bf:{"^":"a;a,b",
p:function(a,b){if(b==null)return!1
if(!(b instanceof P.bf))return!1
return this.a===b.a&&!0},
gL:function(a){var z=this.a
return(z^C.h.aA(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.fo(H.hF(this))
y=P.bg(H.hD(this))
x=P.bg(H.hz(this))
w=P.bg(H.hA(this))
v=P.bg(H.hC(this))
u=P.bg(H.hE(this))
t=P.fp(H.hB(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
m:{
fo:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fp:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bg:function(a){if(a>=10)return""+a
return"0"+a}}},
r:{"^":"a6;"},
"+double":0,
aY:{"^":"a;a",
aL:function(a,b){return C.h.aL(this.a,H.h(b,"$isaY").a)},
p:function(a,b){if(b==null)return!1
if(!(b instanceof P.aY))return!1
return this.a===b.a},
gL:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.fz()
y=this.a
if(y<0)return"-"+new P.aY(0-y).i(0)
x=z.$1(C.h.ag(y,6e7)%60)
w=z.$1(C.h.ag(y,1e6)%60)
v=new P.fy().$1(y%1e6)
return""+C.h.ag(y,36e8)+":"+H.d(x)+":"+H.d(w)+"."+H.d(v)},
m:{
dn:function(a,b,c,d,e,f){return new P.aY(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
fy:{"^":"o:10;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fz:{"^":"o:10;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
K:{"^":"a;"},
dH:{"^":"K;",
i:function(a){return"Throw of null."}},
am:{"^":"K;a,b,c,d",
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
u=P.bE(this.b)
return w+v+": "+H.d(u)},
m:{
ca:function(a,b,c){return new P.am(!0,a,b,c)}}},
bP:{"^":"am;e,f,a,b,c,d",
gaS:function(){return"RangeError"},
gaR:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.d(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.d(z)
else if(x>z)y=": Not in range "+H.d(z)+".."+H.d(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.d(z)}return y},
m:{
bq:function(a,b,c){return new P.bP(null,null,!0,a,b,"Value not in range")},
V:function(a,b,c,d,e){return new P.bP(b,c,!0,a,d,"Invalid value")},
dO:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.V(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.e(P.V(b,a,c,"end",f))
return b}return c}}},
fW:{"^":"am;e,l:f>,a,b,c,d",
gaS:function(){return"RangeError"},
gaR:function(){if(J.f2(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.d(z)},
m:{
az:function(a,b,c,d,e){var z=H.O(e!=null?e:J.ay(b))
return new P.fW(b,z,!0,a,c,"Index out of range")}}},
iI:{"^":"K;a",
i:function(a){return"Unsupported operation: "+this.a},
m:{
Z:function(a){return new P.iI(a)}}},
iF:{"^":"K;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
m:{
ef:function(a){return new P.iF(a)}}},
cs:{"^":"K;a",
i:function(a){return"Bad state: "+this.a},
m:{
dW:function(a){return new P.cs(a)}}},
fk:{"^":"K;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.d(P.bE(z))+"."},
m:{
ap:function(a){return new P.fk(a)}}},
hu:{"^":"a;",
i:function(a){return"Out of Memory"},
$isK:1},
dV:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isK:1},
fm:{"^":"K;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
eu:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
fM:{"^":"a;a,b,c",
i:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(x.length>78)x=C.c.au(x,0,75)+"..."
return y+"\n"+x}},
bi:{"^":"a;"},
v:{"^":"a6;"},
"+int":0,
p:{"^":"a;$ti",
bi:["cQ",function(a,b){var z=H.av(this,"p",0)
return new H.cF(this,H.f(b,{func:1,ret:P.E,args:[z]}),[z])}],
gl:function(a){var z,y
z=this.gE(this)
for(y=0;z.t();)++y
return y},
ga7:function(a){var z,y
z=this.gE(this)
if(!z.t())throw H.e(H.bI())
y=z.gA()
if(z.t())throw H.e(H.h_())
return y},
N:function(a,b){var z,y,x
if(b<0)H.P(P.V(b,0,null,"index",null))
for(z=this.gE(this),y=0;z.t();){x=z.gA()
if(b===y)return x;++y}throw H.e(P.az(b,this,"index",null,y))},
i:function(a){return P.fZ(this,"(",")")}},
ar:{"^":"a;$ti"},
c:{"^":"a;$ti",$isp:1},
"+List":0,
y:{"^":"a;",
gL:function(a){return P.a.prototype.gL.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
a6:{"^":"a;"},
"+num":0,
a:{"^":";",
p:function(a,b){return this===b},
gL:function(a){return H.b3(this)},
i:function(a){return"Instance of '"+H.aD(this)+"'"},
toString:function(){return this.i(this)}},
ai:{"^":"a;"},
j:{"^":"a;",$isdI:1},
"+String":0,
bQ:{"^":"a;ab:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
m:{
dX:function(a,b,c){var z=J.aV(b)
if(!z.t())return a
if(c.length===0){do a+=H.d(z.gA())
while(z.t())}else{a+=H.d(z.gA())
for(;z.t();)a=a+c+H.d(z.gA())}return a}}}}],["","",,W,{"^":"",
d2:function(a){var z=document.createElement("a")
return z},
dc:function(a,b){var z=document.createElement("canvas")
return z},
fA:function(a,b,c){var z,y
z=document.body
y=(z&&C.j).U(z,a,b,c)
y.toString
z=W.t
z=new H.cF(new W.a0(y),H.f(new W.fB(),{func:1,ret:P.E,args:[z]}),[z])
return H.h(z.ga7(z),"$isF")},
fC:function(a){H.h(a,"$isbF")
return"wheel"},
aZ:function(a){var z,y,x
z="element tag unavailable"
try{y=J.f7(a)
if(typeof y==="string")z=a.tagName}catch(x){H.W(x)}return z},
bV:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ey:function(a,b,c,d){var z,y
z=W.bV(W.bV(W.bV(W.bV(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eP:function(a,b){var z
H.f(a,{func:1,ret:-1,args:[b]})
z=$.D
if(z===C.f)return a
return z.bW(a,b)},
T:{"^":"F;","%":"HTMLAudioElement|HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
fa:{"^":"T;",
i:function(a){return String(a)},
$isfa:1,
"%":"HTMLAnchorElement"},
kz:{"^":"T;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
d4:{"^":"T;",$isd4:1,"%":"HTMLBaseElement"},
bz:{"^":"T;",$isbz:1,"%":"HTMLBodyElement"},
cd:{"^":"T;",
bj:function(a,b,c){var z=this.ds(a,b,P.k_(c,null))
return z},
ds:function(a,b,c){return a.getContext(b,c)},
$iscd:1,
"%":"HTMLCanvasElement"},
kC:{"^":"t;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
kE:{"^":"j6;0l:length=",
cC:function(a,b){var z=this.dt(a,this.da(a,b))
return z==null?"":z},
da:function(a,b){var z,y
z=$.$get$dg()
y=z[b]
if(typeof y==="string")return y
y=this.eh(a,b)
z[b]=y
return y},
eh:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.fu()+b
if(z in a)return z
return b},
dt:function(a,b){return a.getPropertyValue(b)},
gaE:function(a){return a.height},
gaG:function(a){return a.left},
gbh:function(a){return a.top},
gaJ:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fl:{"^":"a;",
gaG:function(a){return this.cC(a,"left")}},
aq:{"^":"T;",$isaq:1,"%":"HTMLDivElement"},
fv:{"^":"t;",
eo:function(a,b){return a.adoptNode(b)},
cA:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
kF:{"^":"A;",
i:function(a){return String(a)},
"%":"DOMException"},
fw:{"^":"A;",
eF:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
fx:{"^":"A;",
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
p:function(a,b){var z
if(b==null)return!1
if(!H.bw(b,"$isbr",[P.a6],"$asbr"))return!1
z=J.U(b)
return a.left===z.gaG(b)&&a.top===z.gbh(b)&&a.width===z.gaJ(b)&&a.height===z.gaE(b)},
gL:function(a){return W.ey(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gaE:function(a){return a.height},
gaG:function(a){return a.left},
gbh:function(a){return a.top},
gaJ:function(a){return a.width},
$isbr:1,
$asbr:function(){return[P.a6]},
"%":";DOMRectReadOnly"},
j5:{"^":"bK;bF:a<,b",
gl:function(a){return this.b.length},
n:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.i(z,b)
return H.h(z[b],"$isF")},
h:function(a,b){J.d0(this.a,b)
return b},
gE:function(a){var z=this.fA(this)
return new J.an(z,z.length,0,[H.q(z,0)])},
$asH:function(){return[W.F]},
$asp:function(){return[W.F]},
$asc:function(){return[W.F]}},
F:{"^":"t;0fw:tagName=",
ger:function(a){return new W.j7(a)},
gbY:function(a){return new W.j5(a,a.children)},
i:function(a){return a.localName},
U:["aP",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dr
if(z==null){z=H.b([],[W.ac])
y=new W.dF(z)
C.a.h(z,W.ew(null))
C.a.h(z,W.eF())
$.dr=y
d=y}else d=z
z=$.dq
if(z==null){z=new W.eJ(d)
$.dq=z
c=z}else{z.a=d
c=z}}if($.af==null){z=document
y=z.implementation
y=(y&&C.D).eF(y,"")
$.af=y
$.cf=y.createRange()
y=$.af
y.toString
y=y.createElement("base")
H.h(y,"$isd4")
y.href=z.baseURI
z=$.af.head;(z&&C.F).q(z,y)}z=$.af
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.h(y,"$isbz")}z=$.af
if(!!this.$isbz)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.af.body;(z&&C.j).q(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.J(C.Q,a.tagName)){z=$.cf;(z&&C.y).cI(z,x)
z=$.cf
w=(z&&C.y).eD(z,b)}else{x.innerHTML=b
w=$.af.createDocumentFragment()
for(z=J.U(w);y=x.firstChild,y!=null;)z.q(w,y)}z=$.af.body
if(x==null?z!=null:x!==z)J.d1(x)
c.bl(w)
C.t.eo(document,w)
return w},function(a,b,c){return this.U(a,b,c,null)},"eE",null,null,"gh0",5,5,null],
cL:function(a,b,c,d){a.textContent=null
this.q(a,this.U(a,b,c,d))},
cK:function(a,b){return this.cL(a,b,null,null)},
ak:function(a,b){return a.getAttribute(b)},
dX:function(a,b){return a.removeAttribute(b)},
$isF:1,
"%":";Element"},
fB:{"^":"o:11;",
$1:function(a){return!!J.G(H.h(a,"$ist")).$isF}},
Q:{"^":"A;",$isQ:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
bF:{"^":"A;",
d8:function(a,b,c,d){return a.addEventListener(b,H.aP(H.f(c,{func:1,args:[W.Q]}),1),!1)},
$isbF:1,
"%":";EventTarget"},
kG:{"^":"T;0l:length=","%":"HTMLFormElement"},
fR:{"^":"T;","%":"HTMLHeadElement"},
fS:{"^":"jn;",
gl:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.az(b,a,null,null,null))
return a[b]},
N:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isa2:1,
$asa2:function(){return[W.t]},
$asH:function(){return[W.t]},
$isp:1,
$asp:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]},
$isfS:1,
$asaa:function(){return[W.t]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
fT:{"^":"fv;","%":"HTMLDocument"},
b0:{"^":"cz;",$isb0:1,"%":"KeyboardEvent"},
hf:{"^":"A;",
i:function(a){return String(a)},
$ishf:1,
"%":"Location"},
a3:{"^":"cz;",$isa3:1,"%":"PointerEvent;DragEvent|MouseEvent"},
a0:{"^":"bK;a",
ga7:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.e(P.dW("No elements"))
if(y>1)throw H.e(P.dW("More than one element"))
return z.firstChild},
a_:function(a,b){var z,y,x,w,v
H.m(b,"$isp",[W.t],"$asp")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.U(y),v=0;v<x;++v)w.q(y,z.firstChild)
return},
gE:function(a){var z=this.a.childNodes
return new W.ds(z,z.length,-1,[H.c2(C.S,z,"aa",0)])},
gl:function(a){return this.a.childNodes.length},
n:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.i(z,b)
return z[b]},
$asH:function(){return[W.t]},
$asp:function(){return[W.t]},
$asc:function(){return[W.t]}},
t:{"^":"bF;0fk:previousSibling=",
fl:function(a){var z=a.parentNode
if(z!=null)J.by(z,a)},
i:function(a){var z=a.nodeValue
return z==null?this.cP(a):z},
q:function(a,b){return a.appendChild(b)},
dY:function(a,b){return a.removeChild(b)},
$ist:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hp:{"^":"js;",
gl:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.az(b,a,null,null,null))
return a[b]},
N:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isa2:1,
$asa2:function(){return[W.t]},
$asH:function(){return[W.t]},
$isp:1,
$asp:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]},
$asaa:function(){return[W.t]},
"%":"NodeList|RadioNodeList"},
hI:{"^":"A;",
eD:function(a,b){return a.createContextualFragment(b)},
cI:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
kP:{"^":"T;0l:length=","%":"HTMLSelectElement"},
id:{"^":"T;","%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
ie:{"^":"T;",
U:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.aP(a,b,c,d)
z=W.fA("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a0(y).a_(0,new W.a0(z))
return y},
"%":"HTMLTableElement"},
ig:{"^":"T;",
U:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.aP(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.k.U(z.createElement("table"),b,c,d)
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
kR:{"^":"T;",
U:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.aP(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.k.U(z.createElement("table"),b,c,d)
z.toString
z=new W.a0(z)
x=z.ga7(z)
y.toString
x.toString
new W.a0(y).a_(0,new W.a0(x))
return y},
"%":"HTMLTableSectionElement"},
e_:{"^":"T;",$ise_:1,"%":"HTMLTemplateElement"},
b4:{"^":"A;",$isb4:1,"%":"Touch"},
aF:{"^":"cz;",$isaF:1,"%":"TouchEvent"},
kT:{"^":"jJ;",
gl:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.az(b,a,null,null,null))
return a[b]},
N:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isa2:1,
$asa2:function(){return[W.b4]},
$asH:function(){return[W.b4]},
$isp:1,
$asp:function(){return[W.b4]},
$isc:1,
$asc:function(){return[W.b4]},
$asaa:function(){return[W.b4]},
"%":"TouchList"},
cz:{"^":"Q;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
b7:{"^":"a3;",
geL:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.Z("deltaY is not supported"))},
geK:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.Z("deltaX is not supported"))},
$isb7:1,
"%":"WheelEvent"},
iZ:{"^":"bF;",
e3:function(a,b){return a.requestAnimationFrame(H.aP(H.f(b,{func:1,ret:-1,args:[P.a6]}),1))},
dj:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
et:{"^":"t;",$iset:1,"%":"Attr"},
kZ:{"^":"fx;",
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
p:function(a,b){var z
if(b==null)return!1
if(!H.bw(b,"$isbr",[P.a6],"$asbr"))return!1
z=J.U(b)
return a.left===z.gaG(b)&&a.top===z.gbh(b)&&a.width===z.gaJ(b)&&a.height===z.gaE(b)},
gL:function(a){return W.ey(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gaE:function(a){return a.height},
gaJ:function(a){return a.width},
"%":"ClientRect|DOMRect"},
l2:{"^":"jO;",
gl:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.az(b,a,null,null,null))
return a[b]},
N:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isa2:1,
$asa2:function(){return[W.t]},
$asH:function(){return[W.t]},
$isp:1,
$asp:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]},
$asaa:function(){return[W.t]},
"%":"MozNamedAttrMap|NamedNodeMap"},
j4:{"^":"dz;bF:a<",
O:function(a,b){var z,y,x,w,v,u
H.f(b,{func:1,ret:-1,args:[P.j,P.j]})
for(z=this.ga4(),y=z.length,x=this.a,w=J.U(x),v=0;v<z.length;z.length===y||(0,H.B)(z),++v){u=z[v]
b.$2(u,w.ak(x,u))}},
ga4:function(){var z,y,x,w,v
z=this.a.attributes
y=H.b([],[P.j])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.i(z,w)
v=H.h(z[w],"$iset")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asbM:function(){return[P.j,P.j]},
$asY:function(){return[P.j,P.j]}},
j7:{"^":"j4;a",
n:function(a,b){return J.c9(this.a,H.w(b))},
gl:function(a){return this.ga4().length}},
j8:{"^":"i8;a,b,c,$ti"},
l_:{"^":"j8;a,b,c,$ti"},
j9:{"^":"ct;a,b,c,d,e,$ti",m:{
L:function(a,b,c,d,e){var z,y
z=W.eP(new W.ja(c),W.Q)
y=z!=null
if(y&&!0){H.f(z,{func:1,args:[W.Q]})
if(y)J.f4(a,b,z,!1)}return new W.j9(0,a,b,z,!1,[e])}}},
ja:{"^":"o:33;a",
$1:function(a){return this.a.$1(H.h(a,"$isQ"))}},
bu:{"^":"a;a",
d1:function(a){var z,y
z=$.$get$cH()
if(z.a===0){for(y=0;y<262;++y)z.G(0,C.P[y],W.k9())
for(y=0;y<12;++y)z.G(0,C.n[y],W.ka())}},
ah:function(a){return $.$get$ex().J(0,W.aZ(a))},
a3:function(a,b,c){var z,y,x
z=W.aZ(a)
y=$.$get$cH()
x=y.n(0,H.d(z)+"::"+b)
if(x==null)x=y.n(0,"*::"+b)
if(x==null)return!1
return H.cO(x.$4(a,b,c,this))},
$isac:1,
m:{
ew:function(a){var z,y
z=W.d2(null)
y=window.location
z=new W.bu(new W.jx(z,y))
z.d1(a)
return z},
l0:[function(a,b,c,d){H.h(a,"$isF")
H.w(b)
H.w(c)
H.h(d,"$isbu")
return!0},"$4","k9",16,0,19],
l1:[function(a,b,c,d){var z,y,x
H.h(a,"$isF")
H.w(b)
H.w(c)
z=H.h(d,"$isbu").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","ka",16,0,19]}},
aa:{"^":"a;$ti",
gE:function(a){return new W.ds(a,this.gl(a),-1,[H.c2(this,a,"aa",0)])}},
dF:{"^":"a;a",
ah:function(a){return C.a.bU(this.a,new W.hr(a))},
a3:function(a,b,c){return C.a.bU(this.a,new W.hq(a,b,c))},
$isac:1},
hr:{"^":"o:13;a",
$1:function(a){return H.h(a,"$isac").ah(this.a)}},
hq:{"^":"o:13;a,b,c",
$1:function(a){return H.h(a,"$isac").a3(this.a,this.b,this.c)}},
jy:{"^":"a;",
d3:function(a,b,c,d){var z,y,x
this.a.a_(0,c)
z=b.bi(0,new W.jz())
y=b.bi(0,new W.jA())
this.b.a_(0,z)
x=this.c
x.a_(0,C.R)
x.a_(0,y)},
ah:function(a){return this.a.J(0,W.aZ(a))},
a3:["cT",function(a,b,c){var z,y
z=W.aZ(a)
y=this.c
if(y.J(0,H.d(z)+"::"+b))return this.d.ep(c)
else if(y.J(0,"*::"+b))return this.d.ep(c)
else{y=this.b
if(y.J(0,H.d(z)+"::"+b))return!0
else if(y.J(0,"*::"+b))return!0
else if(y.J(0,H.d(z)+"::*"))return!0
else if(y.J(0,"*::*"))return!0}return!1}],
$isac:1},
jz:{"^":"o:14;",
$1:function(a){return!C.a.J(C.n,H.w(a))}},
jA:{"^":"o:14;",
$1:function(a){return C.a.J(C.n,H.w(a))}},
jC:{"^":"jy;e,a,b,c,d",
a3:function(a,b,c){if(this.cT(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.c9(a,"template")==="")return this.e.J(0,b)
return!1},
m:{
eF:function(){var z,y,x,w,v
z=P.j
y=P.dy(C.m,z)
x=H.q(C.m,0)
w=H.f(new W.jD(),{func:1,ret:z,args:[x]})
v=H.b(["TEMPLATE"],[z])
y=new W.jC(y,P.bn(null,null,null,z),P.bn(null,null,null,z),P.bn(null,null,null,z),null)
y.d3(null,new H.hk(C.m,w,[x,z]),v,null)
return y}}},
jD:{"^":"o:21;",
$1:function(a){return"TEMPLATE::"+H.d(H.w(a))}},
jB:{"^":"a;",
ah:function(a){var z=J.G(a)
if(!!z.$isdS)return!1
z=!!z.$iscv
if(z&&W.aZ(a)==="foreignObject")return!1
if(z)return!0
return!1},
a3:function(a,b,c){if(b==="is"||C.c.aN(b,"on"))return!1
return this.ah(a)},
$isac:1},
ds:{"^":"a;a,b,c,0d,$ti",
sbH:function(a){this.d=H.u(a,H.q(this,0))},
t:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sbH(J.f3(this.a,z))
this.c=z
return!0}this.sbH(null)
this.c=y
return!1},
gA:function(){return this.d},
$isar:1},
ac:{"^":"a;"},
jx:{"^":"a;a,b",$iskU:1},
eJ:{"^":"a;a",
bl:function(a){new W.jL(this).$2(a,null)},
ao:function(a,b){if(b==null)J.d1(a)
else J.by(b,a)},
e6:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.f5(a)
x=J.c9(y.gbF(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.W(t)}v="element unprintable"
try{v=J.a7(a)}catch(t){H.W(t)}try{u=W.aZ(a)
this.e5(H.h(a,"$isF"),b,z,v,u,H.h(y,"$isY"),H.w(x))}catch(t){if(H.W(t) instanceof P.am)throw t
else{this.ao(a,b)
window
s="Removing corrupted element "+H.d(v)
if(typeof console!="undefined")window.console.warn(s)}}},
e5:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.ao(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.ah(a)){this.ao(a,b)
window
z="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.a3(a,"is",g)){this.ao(a,b)
window
z="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.ga4()
y=H.b(z.slice(0),[H.q(z,0)])
for(x=f.ga4().length-1,z=f.a,w=J.U(z);x>=0;--x){if(x>=y.length)return H.i(y,x)
v=y[x]
if(!this.a.a3(a,J.f9(v),w.ak(z,v))){window
u="Removing disallowed attribute <"+H.d(e)+" "+v+'="'+H.d(w.ak(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.ak(z,v)
w.dX(z,v)}}if(!!J.G(a).$ise_)this.bl(a.content)},
$iskN:1},
jL:{"^":"o:22;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.e6(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.ao(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.f6(z)}catch(w){H.W(w)
v=H.h(z,"$ist")
if(x){u=v.parentNode
if(u!=null)J.by(u,v)}else J.by(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.h(y,"$ist")}}},
j6:{"^":"A+fl;"},
jm:{"^":"A+H;"},
jn:{"^":"jm+aa;"},
jr:{"^":"A+H;"},
js:{"^":"jr+aa;"},
jI:{"^":"A+H;"},
jJ:{"^":"jI+aa;"},
jN:{"^":"A+H;"},
jO:{"^":"jN+aa;"}}],["","",,P,{"^":"",
k_:function(a,b){var z={}
a.O(0,new P.k0(z))
return z},
dm:function(){var z=$.dl
if(z==null){z=J.c7(window.navigator.userAgent,"Opera",0)
$.dl=z}return z},
fu:function(){var z,y
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
k0:{"^":"o:20;a",
$2:function(a,b){this.a[a]=b}},
fJ:{"^":"bK;a,b",
gaV:function(){var z,y,x
z=this.b
y=H.av(z,"H",0)
x=W.F
return new H.hi(new H.cF(z,H.f(new P.fK(),{func:1,ret:P.E,args:[y]}),[y]),H.f(new P.fL(),{func:1,ret:x,args:[y]}),[y,x])},
h:function(a,b){J.d0(this.b.a,b)},
gl:function(a){return J.ay(this.gaV().a)},
n:function(a,b){var z=this.gaV()
return z.b.$1(J.c8(z.a,b))},
gE:function(a){var z=P.he(this.gaV(),!1,W.F)
return new J.an(z,z.length,0,[H.q(z,0)])},
$asH:function(){return[W.F]},
$asp:function(){return[W.F]},
$asc:function(){return[W.F]}},
fK:{"^":"o:11;",
$1:function(a){return!!J.G(H.h(a,"$ist")).$isF}},
fL:{"^":"o:23;",
$1:function(a){return H.aS(H.h(a,"$ist"),"$isF")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",dS:{"^":"cv;",$isdS:1,"%":"SVGScriptElement"},cv:{"^":"F;",
gbY:function(a){return new P.fJ(a,new W.a0(a))},
U:function(a,b,c,d){var z,y,x,w,v,u
z=H.b([],[W.ac])
C.a.h(z,W.ew(null))
C.a.h(z,W.eF())
C.a.h(z,new W.jB())
c=new W.eJ(new W.dF(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.j).eE(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a0(w)
u=z.ga7(z)
for(z=J.U(v);x=u.firstChild,x!=null;)z.q(v,x)
return v},
$iscv:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"}}],["","",,P,{"^":""}],["","",,P,{"^":"",fc:{"^":"A;",$isfc:1,"%":"WebGLBuffer"},fN:{"^":"A;",$isfN:1,"%":"WebGLFramebuffer"},hH:{"^":"A;",$ishH:1,"%":"WebGLProgram"},cp:{"^":"A;",
bV:function(a,b,c){return a.attachShader(b,c)},
a0:function(a,b,c){return a.bindBuffer(b,c)},
eu:function(a,b,c){return a.bindFramebuffer(b,c)},
bX:function(a,b,c,d){return a.bufferData(b,c,d)},
ew:function(a,b){return a.clear(b)},
ex:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
ey:function(a,b){return a.clearDepth(b)},
ez:function(a,b){return a.compileShader(b)},
eG:function(a,b){return a.createShader(b)},
eI:function(a,b){return a.deleteProgram(b)},
eJ:function(a,b){return a.deleteShader(b)},
eM:function(a,b){return a.depthFunc(b)},
c1:function(a,b){return a.disableVertexAttribArray(b)},
eO:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c3:function(a,b){return a.enable(b)},
c4:function(a,b){return a.enableVertexAttribArray(b)},
cu:function(a,b,c){return a.getActiveAttrib(b,c)},
cv:function(a,b,c){return a.getActiveUniform(b,c)},
cw:function(a,b,c){return a.getAttribLocation(b,c)},
bk:function(a,b){return a.getParameter(b)},
cB:function(a,b){return a.getProgramInfoLog(b)},
aK:function(a,b,c){return a.getProgramParameter(b,c)},
cD:function(a,b){return a.getShaderInfoLog(b)},
cE:function(a,b,c){return a.getShaderParameter(b,c)},
cF:function(a,b,c){return a.getUniformLocation(b,c)},
f2:function(a,b){return a.linkProgram(b)},
cM:function(a,b,c){return a.shaderSource(b,c)},
cn:function(a,b,c){return a.uniform1f(b,c)},
co:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
fE:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cq:function(a,b){return a.useProgram(b)},
fF:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
fG:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$iscp:1,
"%":"WebGLRenderingContext"},hY:{"^":"A;",$ishY:1,"%":"WebGLShader"},iA:{"^":"A;",$isiA:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",be:{"^":"a;0a,0b,0c,0d,$ti",
sdA:function(a){this.a=H.m(a,"$isc",this.$ti,"$asc")},
sbK:function(a){this.b=H.f(a,{func:1,ret:P.E,args:[[P.p,H.q(this,0)]]})},
sbJ:function(a){this.c=H.f(a,{func:1,ret:-1,args:[P.v,[P.p,H.q(this,0)]]})},
sbL:function(a){this.d=H.f(a,{func:1,ret:-1,args:[P.v,[P.p,H.q(this,0)]]})},
cJ:function(a,b,c){var z={func:1,ret:-1,args:[P.v,[P.p,H.q(this,0)]]}
H.f(a,z)
H.f(c,z)
this.sbK(b)
this.sbJ(a)
this.sbL(c)},
bm:function(a,b){return this.cJ(a,null,b)},
dR:function(a){H.m(a,"$isp",this.$ti,"$asp")
return!0},
dB:function(a,b){var z
H.m(b,"$isp",this.$ti,"$asp")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gE:function(a){var z=this.a
return new J.an(z,z.length,0,[H.q(z,0)])},
N:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.i(z,b)
return z[b]},
$isp:1,
m:{
de:function(a){var z=new O.be([a])
z.sdA(H.b([],[a]))
z.sbK(null)
z.sbJ(null)
z.sbL(null)
return z}}},cm:{"^":"a;0a,0b",
saX:function(a){this.a=H.m(a,"$isc",[V.b1],"$asc")},
gl:function(a){return this.a.length},
gw:function(){var z=this.b
if(z==null){z=D.ag()
this.b=z}return z},
cZ:function(a){var z=this.b
if(!(z==null))z.R(a)},
a8:function(){return this.cZ(null)},
gaq:function(){var z=this.a
if(z.length>0)return C.a.gaF(z)
else return V.dD()},
cd:function(a){var z=this.a
if(a==null)C.a.h(z,V.dD())
else C.a.h(z,a)
this.a8()},
bd:function(){var z=this.a
if(z.length>0){z.pop()
this.a8()}}}}],["","",,E,{"^":"",d5:{"^":"a;"},a9:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0T:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sdd:function(a,b){this.y=H.m(b,"$isbe",[E.a9],"$asbe")},
sT:function(a){this.z=H.h(a,"$isbh")},
sbo:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gw().F(0,this.gc9())
y=this.c
if(y!=null)y.gw().h(0,this.gc9())
x=new D.I("shape",z,this.c,this,[F.dU])
x.b=!0
this.W(x)}},
sar:function(a){var z,y
if(!J.J(this.r,a)){z=this.r
if(z!=null)z.gw().F(0,this.gc8())
if(a!=null)a.gw().h(0,this.gc8())
this.r=a
y=new D.I("mover",z,a,this,[U.bN])
y.b=!0
this.W(y)}},
cp:function(a){var z,y,x,w,v,u,t,s
z=this.r
if(z!=null){y=z.r
x=a.e
if(y<x){z.r=x
y=z.y
if(!(y==null))++y.d
z.scr(z.a+z.d*a.y)
z.scb(z.b+z.e*a.y)
z.scf(z.c+z.f*a.y)
y=z.c
w=Math.cos(y)
v=Math.sin(y)
y=V.as(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)
x=z.b
w=Math.cos(x)
v=Math.sin(x)
y=y.H(0,V.as(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))
x=z.a
w=Math.cos(x)
v=Math.sin(x)
z.x=y.H(0,V.as(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1))
y=z.y
if(!(y==null))y.aI()}u=z.x}else u=null
if(!J.J(u,this.x)){t=this.x
this.x=u
s=new D.I("matrix",t,u,this,[V.b1])
s.b=!0
this.W(s)}for(z=this.y.a,z=new J.an(z,z.length,0,[H.q(z,0)]);z.t();)z.d.cp(a)},
aj:function(a){var z,y,x,w,v,u,t,s,r
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gaq())
else C.a.h(z.a,y.H(0,z.gaq()))
z.a8()
a.ce(this.f)
z=a.dy
x=(z&&C.a).gaF(z)
if(x!=null&&this.d!=null){z=x.a
if(z==null){w=a.fr.n(0,"Depth")
if(w==null){z=a.a
w=new A.fr(z,"Depth")
w.cX(z,"Depth")
y=$.ft
v=$.fs
w.c=y
w.d=v
w.e=w.bE(y,35633)
w.f=w.bE(w.d,35632)
y=z.createProgram()
w.r=y
C.b.bV(z,y,w.e)
C.b.bV(z,w.r,w.f)
C.b.f2(z,w.r)
if(!H.cO(C.b.aK(z,w.r,35714))){u=C.b.cB(z,w.r)
C.b.eI(z,w.r)
H.P(P.R("Failed to link shader: "+H.d(u)))}w.eb()
w.ed()
w.z=w.x.n(0,"posAttr")
w.Q=H.aS(w.y.n(0,"objClr"),"$iscC")
w.ch=H.aS(w.y.n(0,"fogClr"),"$iscC")
w.cx=H.aS(w.y.n(0,"fogStart"),"$iscA")
w.cy=H.aS(w.y.n(0,"fogStop"),"$iscA")
w.db=H.aS(w.y.n(0,"viewObjMat"),"$iscD")
w.dx=H.aS(w.y.n(0,"projMat"),"$iscD")
if(a.fr.c_("Depth"))H.P(P.R('Shader cache already contains a shader by the name "Depth".'))
a.fr.G(0,"Depth",w)}x.a=w
z=w}y=this.e
if(!(y instanceof Z.d9)){this.e=null
y=null}if(y==null){z=this.d.ev(new Z.iW(a.a),$.$get$ak())
y=z.eQ($.$get$ak())
v=x.a
y.e=v.z.c
this.e=z
z=v}y=a.a
C.b.cq(y,z.r)
z.x.eP()
v=x.b
t=z.Q
t.toString
s=v.a
r=v.b
v=v.c
C.b.co(t.a,t.d,s,r,v)
v=x.c
r=z.ch
r.toString
s=v.a
t=v.b
v=v.c
C.b.co(r.a,r.d,s,t,v)
v=x.d
t=z.cx
C.b.cn(t.a,t.d,v)
v=x.e
t=z.cy
C.b.cn(t.a,t.d,v)
v=a.cy.gaq()
t=z.dx
t.toString
t.bn(v.ck(0,!0))
v=a.cx
if(v==null){v=a.db.gaq().H(0,a.dx.gaq())
a.cx=v}z=z.db
z.toString
z.bn(v.ck(0,!0))
v=this.e
v.b5(a)
v.aj(a)
v.fD(a)
v=x.a
v.toString
C.b.cq(y,null)
v.x.eN()}for(z=this.y.a,z=new J.an(z,z.length,0,[H.q(z,0)]);z.t();)z.d.aj(a)
a.cc()
a.dx.bd()},
W:function(a){var z=this.z
if(!(z==null))z.R(a)},
V:function(){return this.W(null)},
fb:[function(a){H.h(a,"$isx")
this.e=null
this.W(a)},function(){return this.fb(null)},"h5","$1","$0","gc9",0,2,2],
fa:[function(a){this.W(H.h(a,"$isx"))},function(){return this.fa(null)},"h4","$1","$0","gc8",0,2,2],
f8:[function(a){this.W(H.h(a,"$isx"))},function(){return this.f8(null)},"h2","$1","$0","gc7",0,2,2],
h1:[function(a,b){var z,y,x,w,v,u,t
H.m(b,"$isp",[E.a9],"$asp")
for(z=b.length,y=this.gc7(),x={func:1,ret:-1,args:[D.x]},w=[x],v=0;v<b.length;b.length===z||(0,H.B)(b),++v){u=b[v]
if(u!=null){if(u.gT()==null){t=new D.bh()
t.sad(null)
t.say(null)
t.c=null
t.d=0
u.sT(t)}t=u.gT()
t.toString
H.f(y,x)
if(t.a==null)t.sad(H.b([],w))
t=t.a;(t&&C.a).h(t,y)}}this.V()},"$2","gf7",8,0,5],
h3:[function(a,b){var z,y
H.m(b,"$isp",[E.a9],"$asp")
for(z=b.gE(b),y=this.gc7();z.t();)z.gA().gw().F(0,y)
this.V()},"$2","gf9",8,0,5],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isdE:1},hO:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
sei:function(a){this.dy=H.m(a,"$isc",[O.bR],"$asc")},
see:function(a){this.fr=H.m(a,"$isY",[P.j,A.cq],"$asY")},
cV:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.bf(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cm()
y=[V.b1]
z.saX(H.b([],y))
z.b=null
z.gw().h(0,new E.hQ(this))
this.cy=z
z=new O.cm()
z.saX(H.b([],y))
z.b=null
z.gw().h(0,new E.hR(this))
this.db=z
z=new O.cm()
z.saX(H.b([],y))
z.b=null
z.gw().h(0,new E.hS(this))
this.dx=z
this.sei(H.b([],[O.bR]))
z=this.dy;(z&&C.a).h(z,null)
this.see(new H.aB(0,0,[P.j,A.cq]))},
ce:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaF(z):a;(z&&C.a).h(z,y)},
cc:function(){var z=this.dy
if(z.length>1)z.pop()},
m:{
hP:function(a,b){var z=new E.hO(a,b)
z.cV(a,b)
return z}}},hQ:{"^":"o:4;a",
$1:function(a){var z
H.h(a,"$isx")
z=this.a
z.z=null
z.ch=null}},hR:{"^":"o:4;a",
$1:function(a){var z
H.h(a,"$isx")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},hS:{"^":"o:4;a",
$1:function(a){var z
H.h(a,"$isx")
z=this.a
z.ch=null
z.cx=null}},ii:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0T:x<,0y,0z,0Q,0ch,0cx,0cy",
sT:function(a){this.x=H.h(a,"$isbh")},
d0:[function(a){H.h(a,"$isx")
this.fq()},function(){return this.d0(null)},"d_","$1","$0","gbr",0,2,2],
geW:function(){var z,y,x
z=Date.now()
y=C.h.ag(P.dn(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.bf(z,!1)
return x/y},
bN:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.H()
if(typeof z!=="number")return H.aR(z)
x=C.e.c5(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.H()
w=C.e.c5(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.e1(C.l,this.gfp())}},
fq:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.f(new E.ik(this),{func:1,ret:-1,args:[P.a6]})
C.A.dj(z)
C.A.e3(z,W.eP(y,P.a6))}},"$0","gfp",0,0,1],
fo:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.bN()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.bf(w,!1)
x.y=P.dn(0,0,0,w-x.r.a,0,0).a*0.000001
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
this.d.aj(this.e)}x=this.z
if(!(x==null))x.R(null)}catch(v){z=H.W(v)
y=H.aQ(v)
P.cX("Error: "+H.d(z))
P.cX("Stack: "+H.d(y))
throw H.e(z)}},
m:{
ij:function(a,b,c,d,e){var z,y,x,w
z=J.G(a)
if(!!z.$iscd)return E.e0(a,!0,!0,!0,!1)
y=W.dc(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gbY(a).h(0,y)
w=E.e0(y,!0,!0,!0,!1)
w.a=a
return w},
e0:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.ii()
y=P.hc(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.j,null)
x=C.r.bj(a,"webgl",y)
x=H.h(x==null?C.r.bj(a,"experimental-webgl",y):x,"$iscp")
if(x==null)H.P(P.R("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.hP(x,a)
w=new T.ih(x)
w.b=H.O((x&&C.b).bk(x,3379))
w.c=H.O(C.b.bk(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.iJ(a)
v=new X.h7()
v.c=new X.b2(!1,!1,!1)
v.sdV(P.bn(null,null,null,P.v))
w.b=v
v=new X.hm(w)
v.f=0
v.r=V.bp()
v.x=V.bp()
v.Q=1
v.ch=1
w.c=v
v=new X.hg(w)
v.r=0
v.x=V.bp()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.io(w)
v.e=0
v.f=V.bp()
v.r=V.bp()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.sdk(H.b([],[[P.ct,P.a]]))
v=w.z
u=document
t=W.a3
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.L(u,"contextmenu",H.f(w.gdF(),s),!1,t))
v=w.z
r=W.Q
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.L(a,"focus",H.f(w.gdI(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.L(a,"blur",H.f(w.gdC(),q),!1,r))
v=w.z
p=W.b0
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.L(u,"keyup",H.f(w.gdK(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.L(u,"keydown",H.f(w.gdJ(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.L(a,"mousedown",H.f(w.gdM(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.L(a,"mouseup",H.f(w.gdO(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.L(a,"mousemove",H.f(w.gdN(),s),!1,t))
p=w.z
o=W.b7;(p&&C.a).h(p,W.L(a,H.w(W.fC(a)),H.f(w.gdP(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.L(u,"mousemove",H.f(w.gdG(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.L(u,"mouseup",H.f(w.gdH(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.L(u,"pointerlockchange",H.f(w.gdQ(),q),!1,r))
r=w.z
q=W.aF
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.L(a,"touchstart",H.f(w.gdU(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.L(a,"touchend",H.f(w.gdS(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.L(a,"touchmove",H.f(w.gdT(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.bf(Date.now(),!1)
z.cy=0
z.bN()
return z}}},ik:{"^":"o:27;a",
$1:function(a){var z
H.ko(a)
z=this.a
if(z.ch){z.ch=!1
z.fo()}}}}],["","",,Z,{"^":"",er:{"^":"a;a,b",$iskA:1,m:{
iX:function(a,b,c){var z
H.m(c,"$isc",[P.v],"$asc")
z=a.createBuffer()
C.b.a0(a,b,z)
C.b.bX(a,b,new Int16Array(H.cJ(c)),35044)
C.b.a0(a,b,null)
return new Z.er(b,z)}}},d8:{"^":"d5;a,b,c,d,e",
b5:function(a){var z,y,x
try{y=a.a
C.b.c4(y,this.e)
C.b.fF(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.W(x)
y=P.R('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.d(z))
throw H.e(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.d(this.e)+"]"}},iW:{"^":"a;a",$iskB:1},d9:{"^":"a;a,0b,c,d",
sdu:function(a){this.b=H.m(a,"$isc",[Z.cg],"$asc")},
eQ:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
b5:function(a){var z,y
z=this.a
C.b.a0(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].b5(a)},
fD:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.b.c1(x,z[y].e)
C.b.a0(x,this.a.a,null)},
aj:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.i(w,x)
v=w[x]
w=v.c
u=w.a
C.b.a0(y,u,w.b)
C.b.eO(y,v.a,v.b,5123,0)
C.b.a0(y,u,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.j]
y=H.b([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v)C.a.h(y,x[v].i(0))
u=H.b([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a7(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(y,", ")+"\nAttrs:   "+C.a.k(u,", ")},
$iskS:1},cg:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aD(this.c)+"'")+"]"}},en:{"^":"a;a",
gbp:function(a){var z,y
z=this.a
y=(z&$.$get$ak().a)!==0?3:0
if((z&$.$get$aI().a)!==0)y+=3
if((z&$.$get$aH().a)!==0)y+=3
if((z&$.$get$aJ().a)!==0)y+=2
if((z&$.$get$aK().a)!==0)y+=3
if((z&$.$get$b5().a)!==0)y+=3
if((z&$.$get$b6().a)!==0)y+=4
if((z&$.$get$aL().a)!==0)++y
return(z&$.$get$aG().a)!==0?y+4:y},
eq:function(a){var z,y,x
z=$.$get$ak()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aI()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aH()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aJ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aK()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b5()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b6()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aL()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aG()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eq()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.en))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.b([],[P.j])
y=this.a
if((y&$.$get$ak().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aI().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aH().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aJ().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aK().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$b5().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$b6().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aL().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aG().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.k(z,"|")},
m:{
a_:function(a){return new Z.en(a)}}}}],["","",,D,{"^":"",ff:{"^":"a;"},bh:{"^":"a;0a,0b,0c,0d",
sad:function(a){this.a=H.m(a,"$isc",[{func:1,ret:-1,args:[D.x]}],"$asc")},
say:function(a){this.b=H.m(a,"$isc",[{func:1,ret:-1,args:[D.x]}],"$asc")},
h:function(a,b){var z={func:1,ret:-1,args:[D.x]}
H.f(b,z)
if(this.a==null)this.sad(H.b([],[z]))
z=this.a;(z&&C.a).h(z,b)},
F:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[D.x]})
z=this.a
z=z==null?null:C.a.J(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).F(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.J(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).F(z,b)||y}return y},
R:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w){w=this.b
w=w==null?null:w.length===0
if(w==null)w=!0}else w=!1
if(w)return!1
if(a==null){a=new D.x(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.O(y,new D.fG(z))
y=this.b
if(!(y==null))C.a.O(y,new D.fH(z))
z=this.b
if(!(z==null))C.a.sl(z,0)
return!0},
fs:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.R(y)}}},
aI:function(){return this.fs(!0,!1)},
m:{
ag:function(){var z=new D.bh()
z.sad(null)
z.say(null)
z.c=null
z.d=0
return z}}},fG:{"^":"o:15;a",
$1:function(a){var z
H.f(a,{func:1,ret:-1,args:[D.x]})
z=this.a.a
z.b
a.$1(z)}},fH:{"^":"o:15;a",
$1:function(a){var z
H.f(a,{func:1,ret:-1,args:[D.x]})
z=this.a.a
z.b
a.$1(z)}},x:{"^":"a;a,0b"},fX:{"^":"x;c,d,a,0b,$ti"},fY:{"^":"x;c,d,a,0b,$ti"},I:{"^":"x;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.d(this.d)+" => "+H.d(this.e)}}}],["","",,X,{"^":"",da:{"^":"a;a,b",
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.da))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}},dv:{"^":"a;a,b",
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dv))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}},h7:{"^":"a;0a,0b,0c,0d",
sdV:function(a){this.d=H.m(a,"$isdT",[P.v],"$asdT")},
fh:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
fd:function(a){this.c=a.b
this.d.F(0,a.a)
return!1}},hg:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
bc:function(a,b){this.r=a.a
return!1},
at:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.cH()
if(typeof z!=="number")return z.cs()
this.r=(z&~y)>>>0
return!1},
as:function(a,b){return!1},
fi:function(a){return!1},
dL:function(a,b,c){return}},b2:{"^":"a;a,b,c",
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.b2))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},hm:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bc:function(a,b){this.f=a.a
return!1},
at:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.cH()
if(typeof z!=="number")return z.cs()
this.f=(z&~y)>>>0
return!1},
as:function(a,b){return!1},
fj:function(a,b){return!1}},io:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
fg:function(a){H.m(a,"$isc",[V.ad],"$asc")
return!1},
fe:function(a){H.m(a,"$isc",[V.ad],"$asc")
return!1},
ff:function(a){H.m(a,"$isc",[V.ad],"$asc")
return!1}},iJ:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
sdk:function(a){this.z=H.m(a,"$isc",[[P.ct,P.a]],"$asc")},
bD:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dv(z,new X.b2(y,a.altKey,a.shiftKey))},
af:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.b2(y,a.altKey,a.shiftKey)},
b4:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.b2(y,a.altKey,a.shiftKey)},
a2:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.Y()
v=z.top
if(typeof x!=="number")return x.Y()
return new V.ad(y-w,x-v)},
an:function(a){return new V.bt(a.movementX,a.movementY)},
b1:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.b([],[V.ad])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
t=C.e.X(u.pageX)
C.e.X(u.pageY)
s=z.left
C.e.X(u.pageX)
C.a.h(y,new V.ad(t-s,C.e.X(u.pageY)-z.top))}return y},
a1:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.da(z,new X.b2(y,a.altKey,a.shiftKey))},
aY:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.Y()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.Y()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
fQ:[function(a){this.f=!0},"$1","gdI",4,0,6],
fK:[function(a){this.f=!1},"$1","gdC",4,0,6],
fN:[function(a){H.h(a,"$isa3")
if(this.f&&this.aY(a))a.preventDefault()},"$1","gdF",4,0,3],
fS:[function(a){var z
H.h(a,"$isb0")
if(!this.f)return
z=this.bD(a)
this.b.fh(z)},"$1","gdK",4,0,17],
fR:[function(a){var z
H.h(a,"$isb0")
if(!this.f)return
z=this.bD(a)
this.b.fd(z)},"$1","gdJ",4,0,17],
fT:[function(a){var z,y,x,w
H.h(a,"$isa3")
z=this.a
z.focus()
this.f=!0
this.af(a)
if(this.x){y=this.a1(a)
x=this.an(a)
if(this.d.bc(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.a1(a)
w=this.a2(a)
if(this.c.bc(y,w))a.preventDefault()},"$1","gdM",4,0,3],
fV:[function(a){var z,y,x
H.h(a,"$isa3")
this.af(a)
z=this.a1(a)
if(this.x){y=this.an(a)
if(this.d.at(z,y))a.preventDefault()
return}if(this.r)return
x=this.a2(a)
if(this.c.at(z,x))a.preventDefault()},"$1","gdO",4,0,3],
fP:[function(a){var z,y,x
H.h(a,"$isa3")
if(!this.aY(a)){this.af(a)
z=this.a1(a)
if(this.x){y=this.an(a)
if(this.d.at(z,y))a.preventDefault()
return}if(this.r)return
x=this.a2(a)
if(this.c.at(z,x))a.preventDefault()}},"$1","gdH",4,0,3],
fU:[function(a){var z,y,x
H.h(a,"$isa3")
this.af(a)
z=this.a1(a)
if(this.x){y=this.an(a)
if(this.d.as(z,y))a.preventDefault()
return}if(this.r)return
x=this.a2(a)
if(this.c.as(z,x))a.preventDefault()},"$1","gdN",4,0,3],
fO:[function(a){var z,y,x
H.h(a,"$isa3")
if(!this.aY(a)){this.af(a)
z=this.a1(a)
if(this.x){y=this.an(a)
if(this.d.as(z,y))a.preventDefault()
return}if(this.r)return
x=this.a2(a)
if(this.c.as(z,x))a.preventDefault()}},"$1","gdG",4,0,3],
fW:[function(a){var z,y
H.h(a,"$isb7")
this.af(a)
z=new V.bt((a&&C.z).geK(a),C.z.geL(a)).I(0,180)
if(this.x){if(this.d.fi(z))a.preventDefault()
return}if(this.r)return
y=this.a2(a)
if(this.c.fj(z,y))a.preventDefault()},"$1","gdP",4,0,29],
fX:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.a1(this.y)
x=this.a2(this.y)
this.d.dL(y,x,z)}},"$1","gdQ",4,0,6],
h_:[function(a){var z
H.h(a,"$isaF")
this.a.focus()
this.f=!0
this.b4(a)
z=this.b1(a)
if(this.e.fg(z))a.preventDefault()},"$1","gdU",4,0,8],
fY:[function(a){var z
H.h(a,"$isaF")
this.b4(a)
z=this.b1(a)
if(this.e.fe(z))a.preventDefault()},"$1","gdS",4,0,8],
fZ:[function(a){var z
H.h(a,"$isaF")
this.b4(a)
z=this.b1(a)
if(this.e.ff(z))a.preventDefault()},"$1","gdT",4,0,8]}}],["","",,V,{"^":"",
kD:[function(a,b){if(typeof b!=="number")return b.Y()
if(typeof a!=="number")return H.aR(a)
return Math.abs(b-a)<=1e-9},"$2","hl",8,0,28],
cZ:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.e.cG(a-b,z)
return(a<0?a+z:a)+b},
z:function(a,b,c){if(a==null)return C.c.a5("null",c)
return C.c.a5(C.e.cl($.n.$2(a,0)?0:a,b),c+b+1)},
c_:function(a,b,c){var z,y,x,w,v
H.m(a,"$isc",[P.r],"$asc")
z=H.b([],[P.j])
for(y=0,x=0;x<4;++x){w=V.z(a[x],b,c)
y=Math.max(y,w.length)
C.a.h(z,w)}for(v=z.length-1;v>=0;--v){if(v>=z.length)return H.i(z,v)
C.a.G(z,v,C.c.a5(z[v],y))}return z},
bB:{"^":"a;a,b,c",
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bB))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}},
bC:{"^":"a;a,b,c,d",
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bC))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+", "+V.z(this.d,3,0)+"]"}},
b1:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ck:function(a,b){var z=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.r])
return z},
H:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.h(a7,"$isb1")
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
return V.as(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b1))return!1
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
i:function(a){return this.D()},
c6:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.r]
y=V.c_(H.b([this.a,this.e,this.y,this.cx],z),b,c)
x=V.c_(H.b([this.b,this.f,this.z,this.cy],z),b,c)
w=V.c_(H.b([this.c,this.r,this.Q,this.db],z),b,c)
v=V.c_(H.b([this.d,this.x,this.ch,this.dx],z),b,c)
z=y.length
if(0>=z)return H.i(y,0)
u="["+y[0]+", "
t=x.length
if(0>=t)return H.i(x,0)
u=u+x[0]+", "
s=w.length
if(0>=s)return H.i(w,0)
u=u+w[0]+", "
r=v.length
if(0>=r)return H.i(v,0)
u=u+v[0]+",\n"
q=a+" "
if(1>=z)return H.i(y,1)
q=q+y[1]+", "
if(1>=t)return H.i(x,1)
q=q+x[1]+", "
if(1>=s)return H.i(w,1)
q=q+w[1]+", "
if(1>=r)return H.i(v,1)
q=u+(q+v[1]+",\n")
u=a+" "
if(2>=z)return H.i(y,2)
u=u+y[2]+", "
if(2>=t)return H.i(x,2)
u=u+x[2]+", "
if(2>=s)return H.i(w,2)
u=u+w[2]+", "
if(2>=r)return H.i(v,2)
u=q+(u+v[2]+",\n")
q=a+" "
if(3>=z)return H.i(y,3)
q=q+y[3]+", "
if(3>=t)return H.i(x,3)
q=q+x[3]+", "
if(3>=s)return H.i(w,3)
q=q+w[3]+", "
if(3>=r)return H.i(v,3)
return u+(q+v[3]+"]")},
D:function(){return this.c6("",3,0)},
u:function(a){return this.c6(a,3,0)},
m:{
dD:function(){var z=$.dC
if(z==null){z=V.as(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.dC=z}return z},
as:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.b1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)}}},
ad:{"^":"a;a,b",
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ad))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+"]"},
m:{
bp:function(){var z=$.dK
if(z==null){z=new V.ad(0,0)
$.dK=z}return z}}},
ah:{"^":"a;a,b,c",
Y:function(a,b){return new V.ah(this.a-b.a,this.b-b.b,this.c-b.c)},
H:function(a,b){return new V.ah(this.a*b,this.b*b,this.c*b)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ah))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}},
dP:{"^":"a;a,b,c,d",
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dP))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+", "+V.z(this.d,3,0)+"]"},
m:{
hN:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dP(a,b,c,d)}}},
bt:{"^":"a;a,b",
f1:[function(a){var z,y
z=this.a
if(typeof z!=="number")return z.H()
y=this.b
if(typeof y!=="number")return y.H()
return Math.sqrt(z*z+y*y)},"$0","gl",1,0,18],
I:function(a,b){var z,y
if($.n.$2(b,0)){z=$.eh
if(z==null){z=new V.bt(0,0)
$.eh=z}return z}z=this.a
if(typeof z!=="number")return z.I()
y=this.b
if(typeof y!=="number")return y.I()
return new V.bt(z/b,y/b)},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bt))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+"]"}},
M:{"^":"a;a,b,c",
f1:[function(a){return Math.sqrt(this.K(this))},"$0","gl",1,0,18],
K:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ap:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.M(z*y-x*w,x*v-u*y,u*w-z*v)},
P:function(a,b){return new V.M(this.a+b.a,this.b+b.b,this.c+b.c)},
aM:function(a){return new V.M(-this.a,-this.b,-this.c)},
H:function(a,b){return new V.M(this.a*b,this.b*b,this.c*b)},
I:function(a,b){if($.n.$2(b,0))return V.bU()
return new V.M(this.a/b,this.b/b,this.c/b)},
f_:function(){if(!$.n.$2(0,this.a))return!1
if(!$.n.$2(0,this.b))return!1
if(!$.n.$2(0,this.c))return!1
return!0},
p:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.M))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"},
m:{
bU:function(){var z=$.em
if(z==null){z=new V.M(0,0,0)
$.em=z}return z}}}}],["","",,U,{"^":"",df:{"^":"bN;0a,0b",
gw:function(){var z=this.b
if(z==null){z=D.ag()
this.b=z}return z},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.df))return!1
return J.J(this.a,b.a)},
i:function(a){return"Constant: "+this.a.u("          ")}},bN:{"^":"ff;"},dR:{"^":"bN;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gw:function(){var z=this.y
if(z==null){z=D.ag()
this.y=z}return z},
ae:function(a){var z=this.y
if(!(z==null))z.R(a)},
scr:function(a){var z,y
a=V.cZ(a,0,6.283185307179586)
z=this.a
if(!$.n.$2(z,a)){y=this.a
this.a=a
z=new D.I("yaw",y,a,this,[P.r])
z.b=!0
this.ae(z)}},
scb:function(a){var z,y
a=V.cZ(a,0,6.283185307179586)
z=this.b
if(!$.n.$2(z,a)){y=this.b
this.b=a
z=new D.I("pitch",y,a,this,[P.r])
z.b=!0
this.ae(z)}},
scf:function(a){var z,y
a=V.cZ(a,0,6.283185307179586)
z=this.c
if(!$.n.$2(z,a)){y=this.c
this.c=a
z=new D.I("roll",y,a,this,[P.r])
z.b=!0
this.ae(z)}},
p:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dR))return!1
z=this.a
y=b.a
if(!$.n.$2(z,y))return!1
z=this.b
y=b.b
if(!$.n.$2(z,y))return!1
z=this.c
y=b.c
if(!$.n.$2(z,y))return!1
z=this.d
y=b.d
if(!$.n.$2(z,y))return!1
z=this.e
y=b.e
if(!$.n.$2(z,y))return!1
z=this.f
y=b.f
if(!$.n.$2(z,y))return!1
return!0},
i:function(a){return"Rotater: ["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"], ["+V.z(this.d,3,0)+", "+V.z(this.e,3,0)+", "+V.z(this.f,3,0)+"]"}}}],["","",,M,{"^":"",fE:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
sd2:function(a,b){this.d=H.m(b,"$isbe",[E.a9],"$asbe")},
a9:[function(a){var z
H.h(a,"$isx")
z=this.x
if(!(z==null))z.R(a)},function(){return this.a9(null)},"fI","$1","$0","gZ",0,2,2],
fL:[function(a,b){var z,y,x,w,v,u,t,s
z=E.a9
H.m(b,"$isp",[z],"$asp")
for(y=b.length,x=this.gZ(),w={func:1,ret:-1,args:[D.x]},v=[w],u=0;u<b.length;b.length===y||(0,H.B)(b),++u){t=b[u]
if(t!=null){if(t.gT()==null){s=new D.bh()
s.sad(null)
s.say(null)
s.c=null
s.d=0
t.sT(s)}s=t.gT()
s.toString
H.f(x,w)
if(s.a==null)s.sad(H.b([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.fX(a,b,this,[z])
z.b=!0
this.a9(z)},"$2","gdD",8,0,5],
fM:[function(a,b){var z,y,x
z=E.a9
H.m(b,"$isp",[z],"$asp")
for(y=b.gE(b),x=this.gZ();y.t();)y.gA().gw().F(0,x)
z=new D.fY(a,b,this,[z])
z.b=!0
this.a9(z)},"$2","gdE",8,0,5],
sci:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gw().F(0,this.gZ())
y=this.c
this.c=a
if(a!=null)a.gw().h(0,this.gZ())
z=new D.I("technique",y,this.c,this,[O.bR])
z.b=!0
this.a9(z)}},
gw:function(){var z=this.x
if(z==null){z=D.ag()
this.x=z}return z},
aj:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
a.ce(this.c)
z=this.b
z.toString
y=a.a
C.b.eu(y,36160,null)
C.b.c3(y,2884)
C.b.c3(y,2929)
C.b.eM(y,513)
x=y.drawingBufferWidth
w=y.drawingBufferHeight
v=z.r
u=v.a
if(typeof x!=="number")return H.aR(x)
t=C.e.X(u*x)
u=v.b
if(typeof w!=="number")return H.aR(w)
s=C.e.X(u*w)
u=C.e.X(v.c*x)
a.c=u
v=C.e.X(v.d*w)
a.d=v
C.b.fG(y,t,s,u,v)
C.b.ey(y,z.c)
z=z.a
C.b.ex(y,z.a,z.b,z.c,z.d)
C.b.ew(y,16640)
z=this.a
y=a.c
v=a.d
u=z.c
r=z.d
q=z.e
p=q-r
o=1/Math.tan(u*0.5)
n=V.as(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.cd(n)
y=$.dJ
if(y==null){y=$.dL
if(y==null){y=new V.ah(0,0,0)
$.dL=y}v=$.ek
if(v==null){v=new V.M(0,1,0)
$.ek=v}u=$.ei
if(u==null){u=new V.M(0,0,-1)
$.ei=u}m=u.I(0,Math.sqrt(u.K(u)))
v=v.ap(m)
l=v.I(0,Math.sqrt(v.K(v)))
k=m.ap(l)
j=new V.M(y.a,y.b,y.c)
i=l.aM(0).K(j)
h=k.aM(0).K(j)
g=m.aM(0).K(j)
y=V.as(l.a,k.a,m.a,i,l.b,k.b,m.b,h,l.c,k.c,m.c,g,0,0,0,1)
$.dJ=y
f=y}else f=y
z=z.b
if(z!=null){e=z.a
if(e!=null)f=e.H(0,f)}a.db.cd(f)
for(z=this.d.a,z=new J.an(z,z.length,0,[H.q(z,0)]);z.t();)z.d.cp(a)
for(z=this.d.a,z=new J.an(z,z.length,0,[H.q(z,0)]);z.t();)z.d.aj(a)
this.a.toString
a.cy.bd()
a.db.bd()
this.b.toString
a.cc()},
$iskO:1}}],["","",,A,{"^":"",d3:{"^":"a;a,b,c"},fb:{"^":"a;a",
n:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
eP:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
C.b.c4(w.a,w.c)}},
eN:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
C.b.c1(w.a,w.c)}}},fr:{"^":"cq;0z,0Q,0ch,0cx,0cy,0db,0dx,a,b,0c,0d,0e,0f,0r,0x,0y"},cq:{"^":"d5;",
cX:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
bE:function(a,b){var z,y,x
z=this.a
y=C.b.eG(z,b)
C.b.cM(z,y,a)
C.b.ez(z,y)
if(!H.cO(C.b.cE(z,y,35713))){x=C.b.cD(z,y)
C.b.eJ(z,y)
throw H.e(P.R("Error compiling shader '"+H.d(y)+"': "+H.d(x)))}return y},
eb:function(){var z,y,x,w,v,u
z=H.b([],[A.d3])
y=this.a
x=H.O(C.b.aK(y,this.r,35721))
if(typeof x!=="number")return H.aR(x)
w=0
for(;w<x;++w){v=C.b.cu(y,this.r,w)
u=C.b.cw(y,this.r,v.name)
C.a.h(z,new A.d3(y,v.name,u))}this.x=new A.fb(z)},
ed:function(){var z,y,x,w,v,u
z=H.b([],[A.N])
y=this.a
x=H.O(C.b.aK(y,this.r,35718))
if(typeof x!=="number")return H.aR(x)
w=0
for(;w<x;++w){v=C.b.cv(y,this.r,w)
u=C.b.cF(y,this.r,v.name)
C.a.h(z,this.eH(v.type,v.size,v.name,u))}this.y=new A.iz(z)},
ac:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.is(z,y,b,c)
else return A.cB(z,y,b,a,c)},
dg:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.iD(z,y,b,c)
else return A.cB(z,y,b,a,c)},
dh:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.iE(z,y,b,c)
else return A.cB(z,y,b,a,c)},
aB:function(a,b){return new P.eu(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.d(b)+"."))},
eH:function(a,b,c,d){switch(a){case 5120:return this.ac(b,c,d)
case 5121:return this.ac(b,c,d)
case 5122:return this.ac(b,c,d)
case 5123:return this.ac(b,c,d)
case 5124:return this.ac(b,c,d)
case 5125:return this.ac(b,c,d)
case 5126:return new A.cA(this.a,this.r,c,d)
case 35664:return new A.iu(this.a,this.r,c,d)
case 35665:return new A.cC(this.a,this.r,c,d)
case 35666:return new A.ix(this.a,this.r,c,d)
case 35667:return new A.iv(this.a,this.r,c,d)
case 35668:return new A.iw(this.a,this.r,c,d)
case 35669:return new A.iy(this.a,this.r,c,d)
case 35674:return new A.iB(this.a,this.r,c,d)
case 35675:return new A.iC(this.a,this.r,c,d)
case 35676:return new A.cD(this.a,this.r,c,d)
case 35678:return this.dg(b,c,d)
case 35680:return this.dh(b,c,d)
case 35670:throw H.e(this.aB("BOOL",c))
case 35671:throw H.e(this.aB("BOOL_VEC2",c))
case 35672:throw H.e(this.aB("BOOL_VEC3",c))
case 35673:throw H.e(this.aB("BOOL_VEC4",c))
default:throw H.e(P.R("Unknown uniform variable type "+H.d(a)+" for "+H.d(c)+"."))}}},N:{"^":"a;"},iz:{"^":"a;a",
n:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
i:function(a){return this.D()},
eV:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w)x+=z[w].i(0)+a
return x},
D:function(){return this.eV("\n")}},is:{"^":"N;a,b,c,d",
i:function(a){return"Uniform1i: "+H.d(this.c)}},iv:{"^":"N;a,b,c,d",
i:function(a){return"Uniform2i: "+H.d(this.c)}},iw:{"^":"N;a,b,c,d",
i:function(a){return"Uniform3i: "+H.d(this.c)}},iy:{"^":"N;a,b,c,d",
i:function(a){return"Uniform4i: "+H.d(this.c)}},it:{"^":"N;0e,0f,a,b,c,d",
sel:function(a){this.e=H.m(a,"$isc",[P.v],"$asc")},
i:function(a){return"Uniform1iv: "+H.d(this.c)},
m:{
cB:function(a,b,c,d,e){var z=new A.it(a,b,c,e)
z.f=d
z.sel(P.hd(d,0,!1,P.v))
return z}}},cA:{"^":"N;a,b,c,d",
i:function(a){return"Uniform1f: "+H.d(this.c)}},iu:{"^":"N;a,b,c,d",
i:function(a){return"Uniform2f: "+H.d(this.c)}},cC:{"^":"N;a,b,c,d",
i:function(a){return"Uniform3f: "+H.d(this.c)}},ix:{"^":"N;a,b,c,d",
i:function(a){return"Uniform4f: "+H.d(this.c)}},iB:{"^":"N;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.d(this.c)}},iC:{"^":"N;a,b,c,d",
i:function(a){return"UniformMat3: "+H.d(this.c)}},cD:{"^":"N;a,b,c,d",
bn:function(a){var z=new Float32Array(H.cJ(H.m(a,"$isc",[P.r],"$asc")))
C.b.fE(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.d(this.c)}},iD:{"^":"N;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.d(this.c)}},iE:{"^":"N;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.d(this.c)}}}],["","",,F,{"^":"",
kw:function(a,b,c,d){return F.k1(c,a,d,b,new F.kx())},
k1:function(a,b,c,d,e){var z,y
z=F.ku(a,b,new F.k2(H.f(e,{func:1,ret:V.ah,args:[P.r]}),d,b,c),null)
if(z==null)return
y=z.e
if(!(y==null))++y.d
z.d.b8()
z.a.b8()
y=z.e
if(!(y==null))y.aI()
z.f6(new F.iR(),new F.hs())
return z},
ku:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.f(c,{func:1,ret:-1,args:[F.aj,P.r,P.r]})
if(a<1)return
if(b<1)return
z=new F.dU()
y=new F.iM(z)
y.b=!1
x=[F.aj]
y.sem(H.b([],x))
z.a=y
y=new F.i0(z)
y.sb0(H.b([],[F.bO]))
z.b=y
y=new F.i_(z)
y.sdv(H.b([],[F.bm]))
z.c=y
y=new F.hZ(z)
y.sdl(H.b([],[F.S]))
z.d=y
z.e=null
w=H.b([],x)
for(v=0;v<=b;++v){u=v/b
y=z.a
if(u<0)x=0
else x=u>1?1:u
y.toString
t=F.cE(null,null,new V.bC(x,0,0,1),null,null,new V.ad(u,1),null,null,0)
y.h(0,t)
c.$3(t,u,0)
C.a.h(w,t.c0(d))}for(v=1;v<=a;++v){s=v/a
for(y=s>1,x=s<0,r=1-s,q=0;q<=b;++q){u=q/b
p=z.a
if(u<0)o=0
else o=u>1?1:u
if(x)n=0
else n=y?1:s
if(x)m=0
else m=y?1:s
p.toString
t=F.cE(null,null,new V.bC(o,n,m,1),null,null,new V.ad(u,r),null,null,0)
p.h(0,t)
c.$3(t,u,s)
C.a.h(w,t.c0(d))}}z.d.en(a+1,b+1,w)
return z},
kx:{"^":"o:31;",
$1:function(a){return new V.ah(Math.cos(a),Math.sin(a),0)}},
k2:{"^":"o:32;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.d_(y.$1(z),x)
x=J.d_(y.$1(z+3.141592653589793/this.c),x).Y(0,w)
x=new V.M(x.a,x.b,x.c)
v=x.I(0,Math.sqrt(x.K(x)))
y=$.ej
if(y==null){y=new V.M(1,0,0)
$.ej=y
u=y}else u=y
if(!J.J(v,u)){y=$.el
if(y==null){y=new V.M(0,0,1)
$.el=y
u=y}else u=y}y=v.ap(u)
t=y.I(0,Math.sqrt(y.K(y)))
y=t.ap(v)
u=y.I(0,Math.sqrt(y.K(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.H(0,y*x)
x=t.H(0,r*x)
x=new V.ah(w.a+(y.a-x.a),w.b+(y.b-x.b),w.c+(y.c-x.c))
if(!J.J(a.f,x)){a.f=x
y=a.a
if(y!=null)y.V()}}},
S:{"^":"a;0a,0b,0c,0d,0e",
aD:function(){if(!this.gc2()){C.a.F(this.a.a.d.b,this)
this.a.a.V()}this.e_()
this.e0()
this.e1()},
e8:function(a){this.a=a
C.a.h(a.d.b,this)},
e9:function(a){this.b=a
C.a.h(a.d.c,this)},
ea:function(a){this.c=a
C.a.h(a.d.d,this)},
e_:function(){var z=this.a
if(z!=null){C.a.F(z.d.b,this)
this.a=null}},
e0:function(){var z=this.b
if(z!=null){C.a.F(z.d.c,this)
this.b=null}},
e1:function(){var z=this.c
if(z!=null){C.a.F(z.d.d,this)
this.c=null}},
gc2:function(){return this.a==null||this.b==null||this.c==null},
d9:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.bU()
if(y!=null)v=v.P(0,y)
if(x!=null)v=v.P(0,x)
if(w!=null)v=v.P(0,w)
if(v.f_())return
return v.I(0,Math.sqrt(v.K(v)))},
dc:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.Y(0,y)
z=new V.M(z.a,z.b,z.c)
v=z.I(0,Math.sqrt(z.K(z)))
z=w.Y(0,y)
z=new V.M(z.a,z.b,z.c)
z=v.ap(z.I(0,Math.sqrt(z.K(z))))
return z.I(0,Math.sqrt(z.K(z)))},
b7:function(){if(this.d!=null)return!0
var z=this.d9()
if(z==null){z=this.dc()
if(z==null)return!1}this.d=z
this.a.a.V()
return!0},
gbZ:function(a){if(J.J(this.a,this.b))return!0
if(J.J(this.b,this.c))return!0
if(J.J(this.c,this.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.D()},
u:function(a){var z,y
if(this.gc2())return a+"disposed"
z=a+C.c.a5(J.a7(this.a.e),0)+", "+C.c.a5(J.a7(this.b.e),0)+", "+C.c.a5(J.a7(this.c.e),0)+" {"
y=this.d
z=(y!=null?z+(y.i(0)+", "):z+"-, ")+"-}"
return z},
D:function(){return this.u("")},
m:{
bG:function(a,b,c){var z,y,x
z=new F.S()
y=a.a
if(y==null)H.P(P.R("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.P(P.R("May not create a face with vertices attached to different shapes."))
z.e8(a)
z.e9(b)
z.ea(c)
C.a.h(z.a.a.d.b,z)
z.a.a.V()
return z}}},
fI:{"^":"a;"},
i6:{"^":"fI;",
bb:function(a,b,c){var z,y
z=b.a
z.a.a.C()
z=z.e
y=c.a
y.a.a.C()
if(z==y.e){z=b.b
z.a.a.C()
z=z.e
y=c.b
y.a.a.C()
if(z==y.e){z=b.c
z.a.a.C()
z=z.e
y=c.c
y.a.a.C()
y=z==y.e
z=y}else z=!1
return z}else{z=b.a
z.a.a.C()
z=z.e
y=c.b
y.a.a.C()
if(z==y.e){z=b.b
z.a.a.C()
z=z.e
y=c.c
y.a.a.C()
if(z==y.e){z=b.c
z.a.a.C()
z=z.e
y=c.a
y.a.a.C()
y=z==y.e
z=y}else z=!1
return z}else{z=b.a
z.a.a.C()
z=z.e
y=c.c
y.a.a.C()
if(z==y.e){z=b.b
z.a.a.C()
z=z.e
y=c.a
y.a.a.C()
if(z==y.e){z=b.c
z.a.a.C()
z=z.e
y=c.b
y.a.a.C()
y=z==y.e
z=y}else z=!1
return z}else return!1}}}},
bm:{"^":"a;"},
h8:{"^":"a;"},
ir:{"^":"h8;"},
bO:{"^":"a;"},
dU:{"^":"a;0a,0b,0c,0d,0e",
gw:function(){var z=this.e
if(z==null){z=D.ag()
this.e=z}return z},
f6:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.b(z.slice(0),[H.q(z,0)])
for(z=[F.aj];y.length!==0;){x=C.a.geS(y)
C.a.fm(y,0)
if(x!=null){w=H.b([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.B)(y),++u){t=y[u]
if(t!=null&&a.bb(0,x,t)){C.a.h(w,t)
C.a.F(y,t)}}if(w.length>1)b.f5(w)}}this.a.C()
this.c.be()
this.d.be()
this.b.fn()
this.c.bf(new F.ir())
this.d.bf(new F.i6())
z=this.e
if(!(z==null))z.aI()},
ev:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$ak()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aI().a)!==0)++w
if((x&$.$get$aH().a)!==0)++w
if((x&$.$get$aJ().a)!==0)++w
if((x&$.$get$aK().a)!==0)++w
if((x&$.$get$b5().a)!==0)++w
if((x&$.$get$b6().a)!==0)++w
if((x&$.$get$aL().a)!==0)++w
if((x&$.$get$aG().a)!==0)++w
v=b.gbp(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.r
t=H.b(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.b(y,[Z.d8])
for(r=0,q=0;q<w;++q){p=b.eq(q)
o=p.gbp(p)
C.a.G(s,q,new Z.d8(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.i(y,n)
m=y[n].f3(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.G(t,l,m[k]);++l}}r+=o}H.m(t,"$isc",[x],"$asc")
y=a.a
j=y.createBuffer()
C.b.a0(y,34962,j)
C.b.bX(y,34962,new Float32Array(H.cJ(t)),35044)
C.b.a0(y,34962,null)
i=new Z.d9(new Z.er(34962,j),s,b)
i.sdu(H.b([],[Z.cg]))
this.b.b
this.c.b
if(this.d.b.length!==0){x=P.v
h=H.b([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.C()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.C()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].c
g.a.a.C()
C.a.h(h,g.e)}f=Z.iX(y,34963,H.m(h,"$isc",[x],"$asc"))
C.a.h(i.b,new Z.cg(4,h.length,f))}return i},
i:function(a){var z=H.b([],[P.j])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.u("   "))}this.b.b
this.c.b
if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.u("   "))}return C.a.k(z,"\n")},
W:function(a){var z=this.e
if(!(z==null))z.R(a)},
V:function(){return this.W(null)},
$iskQ:1},
hZ:{"^":"a;a,0b",
sdl:function(a){this.b=H.m(a,"$isc",[F.S],"$asc")},
en:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.m(c,"$isc",[F.aj],"$asc")
z=H.b([],[F.S])
for(y=this.a,x=b,w=0,v=!1,u=1;u<a;++u,++w,++x){for(t=v,s=1;s<b;++s,x=o){r=c.length
if(w<0||w>=r)return H.i(c,w)
q=c[w];++w
if(w>=r)return H.i(c,w)
p=c[w]
o=x+1
if(o<0||o>=r)return H.i(c,o)
n=c[o]
if(x<0||x>=r)return H.i(c,x)
m=c[x]
r=y.a
if(t){r.h(0,q)
y.a.h(0,p)
y.a.h(0,n)
C.a.h(z,F.bG(q,p,n))
y.a.h(0,q)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bG(q,n,m))}else{r.h(0,p)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bG(p,n,m))
y.a.h(0,p)
y.a.h(0,m)
y.a.h(0,q)
C.a.h(z,F.bG(p,m,q))}t=!t}v=!v}return z},
gl:function(a){return this.b.length},
bf:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.i(x,y)
w=x[y]
for(x=w.d,v=x.b.length+x.c.length+x.d.length-1;v>=0;--v){u=w.d.n(0,v)
for(t=v-1;t>=0;--t){s=w.d.n(0,t)
if(a.bb(0,u,s)){u.aD()
break}}}}},
be:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
x=y[z]
y=x.gbZ(x)
if(y)x.aD()}},
b8:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.B)(z),++w)if(!z[w].b7())x=!1
return x},
i:function(a){return this.D()},
u:function(a){var z,y,x,w
z=H.b([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].u(a))
return C.a.k(z,"\n")},
D:function(){return this.u("")}},
i_:{"^":"a;a,0b",
sdv:function(a){this.b=H.m(a,"$isc",[F.bm],"$asc")},
gl:function(a){return 0},
bf:function(a){var z,y,x,w,v
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.i(x,y)
w=x[y]
for(w.c.c,v=-1;!1;--v)w.c.n(0,v)}},
be:function(){var z,y,x
for(z=-1;!1;--z){y=this.b
return H.i(y,z)
x=y[z]
y=x.gbZ(x)
if(y)x.aD()}},
i:function(a){return this.D()},
u:function(a){var z,y,x
z=H.b([],[P.j])
for(y=0;!1;++y){x=this.b
if(y>=0)return H.i(x,y)
C.a.h(z,x[y].u(a+(""+y+". ")))}return C.a.k(z,"\n")},
D:function(){return this.u("")}},
i0:{"^":"a;a,0b",
sb0:function(a){this.b=H.m(a,"$isc",[F.bO],"$asc")},
gl:function(a){return 0},
fn:function(){var z,y
for(z=-1;!1;--z){y=this.b
return H.i(y,z)
y=y[z].gh7()
y=y.gh6(y)
if(y.gl(y).fH(0,1)){y=this.b
return H.i(y,z)
y[z].aD()}}},
i:function(a){return this.D()},
u:function(a){var z,y,x
z=H.b([],[P.j])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.i(y,x)
C.a.h(z,y[x].u(a))}return C.a.k(z,"\n")},
D:function(){return this.u("")}},
aj:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
c0:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cE(this.cx,x,u,z,y,w,v,a,t)},
f3:function(a){var z,y
if(a.p(0,$.$get$ak())){z=this.f
y=[P.r]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(a.p(0,$.$get$aI())){z=this.r
y=[P.r]
if(z==null)return H.b([0,1,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(a.p(0,$.$get$aH())){z=H.b([0,0,1],[P.r])
return z}else if(a.p(0,$.$get$aJ())){z=this.y
y=[P.r]
if(z==null)return H.b([0,0],y)
else return H.b([z.a,z.b],y)}else if(a.p(0,$.$get$aK())){z=H.b([0,0,0],[P.r])
return z}else if(a.p(0,$.$get$b5())){z=this.Q
y=[P.r]
if(z==null)return H.b([1,1,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(a.p(0,$.$get$b6())){z=this.Q
y=[P.r]
if(z==null)return H.b([1,1,1,1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else if(a.p(0,$.$get$aL()))return H.b([this.ch],[P.r])
else if(a.p(0,$.$get$aG())){z=H.b([-1,-1,-1,-1],[P.r])
return z}else return H.b([],[P.r])},
b7:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bU()
this.d.O(0,new F.iV(z))
z=z.a
this.r=z.I(0,Math.sqrt(z.K(z)))
z=this.a
if(z!=null){z.V()
z=this.a.e
if(!(z==null))z.aI()}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.D()},
u:function(a){var z,y,x
z=H.b([],[P.j])
C.a.h(z,C.c.a5(J.a7(this.e),0))
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
C.a.h(z,"-")
y=this.Q
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
C.a.h(z,V.z(this.ch,3,0))
C.a.h(z,"-")
x=C.a.k(z,", ")
return a+"{"+x+"}"},
D:function(){return this.u("")},
m:{
cE:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.aj()
y=new F.iU(z)
y.sb0(H.b([],[F.bO]))
z.b=y
y=new F.iQ(z)
x=[F.bm]
y.sdw(H.b([],x))
y.sdz(H.b([],x))
z.c=y
y=new F.iN(z)
x=[F.S]
y.sdm(H.b([],x))
y.sdn(H.b([],x))
y.sdq(H.b([],x))
z.d=y
h=$.$get$eo()
z.e=0
y=$.$get$ak()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aI().a)!==0?e:null
z.x=(x&$.$get$aH().a)!==0?b:null
z.y=(x&$.$get$aJ().a)!==0?f:null
z.z=(x&$.$get$aK().a)!==0?g:null
z.Q=(x&$.$get$ep().a)!==0?c:null
z.ch=(x&$.$get$aL().a)!==0?i:0
z.cx=(x&$.$get$aG().a)!==0?a:null
return z}}},
iV:{"^":"o:9;a",
$1:function(a){var z,y
H.h(a,"$isS")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.P(0,z)}}},
iM:{"^":"a;a,0b,0c",
sem:function(a){this.c=H.m(a,"$isc",[F.aj],"$asc")},
C:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.i(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z,y
z=b.a
if(z!=null){if(z===this.a)return!1
throw H.e(P.R("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
y=this.a
b.a=y
C.a.h(z,b)
y.V()
return!0},
gl:function(a){return this.c.length},
b8:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)z[x].b7()
return!0},
i:function(a){return this.D()},
u:function(a){var z,y,x,w
this.C()
z=H.b([],[P.j])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].u(a))
return C.a.k(z,"\n")},
D:function(){return this.u("")}},
iN:{"^":"a;a,0b,0c,0d",
sdm:function(a){this.b=H.m(a,"$isc",[F.S],"$asc")},
sdn:function(a){this.c=H.m(a,"$isc",[F.S],"$asc")},
sdq:function(a){this.d=H.m(a,"$isc",[F.S],"$asc")},
gl:function(a){return this.b.length+this.c.length+this.d.length},
n:function(a,b){var z,y,x
z=this.b
y=z.length
if(b<y){if(b<0)return H.i(z,b)
return z[b]}b-=y
z=this.c
x=z.length
if(b<x){if(b<0)return H.i(z,b)
return z[b]}b-=x
z=this.d
if(b<0||b>=z.length)return H.i(z,b)
return z[b]},
O:function(a,b){H.f(b,{func:1,ret:-1,args:[F.S]})
C.a.O(this.b,b)
C.a.O(this.c,new F.iO(this,b))
C.a.O(this.d,new F.iP(this,b))},
i:function(a){return this.D()},
u:function(a){var z,y,x,w
z=H.b([],[P.j])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].u(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].u(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)C.a.h(z,y[w].u(a))
return C.a.k(z,"\n")},
D:function(){return this.u("")}},
iO:{"^":"o:9;a,b",
$1:function(a){H.h(a,"$isS")
if(!J.J(a.a,this.a))this.b.$1(a)}},
iP:{"^":"o:9;a,b",
$1:function(a){var z
H.h(a,"$isS")
z=this.a
if(!J.J(a.a,z)&&!J.J(a.b,z))this.b.$1(a)}},
iQ:{"^":"a;a,0b,0c",
sdw:function(a){this.b=H.m(a,"$isc",[F.bm],"$asc")},
sdz:function(a){this.c=H.m(a,"$isc",[F.bm],"$asc")},
gl:function(a){return 0},
n:function(a,b){var z,y
if(b>=0){z=this.c
y=b-0
if(y>=0)return H.i(z,y)
return z[y]}else{z=this.b
return H.i(z,b)
return z[b]}},
i:function(a){return this.D()},
u:function(a){var z,y,x
z=H.b([],[P.j])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.i(y,x)
C.a.h(z,y[x].u(a))}for(y=this.c,x=0;!1;++x){if(x>=0)return H.i(y,x)
C.a.h(z,y[x].u(a))}return C.a.k(z,"\n")},
D:function(){return this.u("")}},
iS:{"^":"a;"},
iR:{"^":"iS;",
bb:function(a,b,c){return J.J(b.f,c.f)}},
iT:{"^":"a;"},
hs:{"^":"iT;",
f5:function(a){var z,y,x,w,v,u,t,s,r
H.m(a,"$isc",[F.aj],"$asc")
z=V.bU()
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.M(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.I(0,Math.sqrt(z.K(z)))
for(y=a.length,w=z==null,x=0;x<a.length;a.length===y||(0,H.B)(a),++x){v=a[x]
if(w)u=null
else{t=z.a
s=z.b
r=z.c
u=z.I(0,Math.sqrt(t*t+s*s+r*r))}if(!J.J(v.r,u)){v.r=u
t=v.a
if(t!=null){t=t.e
if(!(t==null))t.R(null)}}}return}},
iU:{"^":"a;a,0b",
sb0:function(a){this.b=H.m(a,"$isc",[F.bO],"$asc")},
gl:function(a){return 0},
i:function(a){return this.D()},
u:function(a){var z,y,x
z=H.b([],[P.j])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.i(y,x)
C.a.h(z,y[x].u(a))}return C.a.k(z,"\n")},
D:function(){return this.u("")}}}],["","",,O,{"^":"",fq:{"^":"bR;0a,0b,0c,0d,0e,0f",
gw:function(){var z=this.f
if(z==null){z=D.ag()
this.f=z}return z},
aw:function(a){var z=this.f
if(!(z==null))z.R(a)}},bR:{"^":"a;"}}],["","",,T,{"^":"",ih:{"^":"a;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",aW:{"^":"a;",
ai:function(a){return!0},
i:function(a){return"all"},
$isab:1},ab:{"^":"a;"},dB:{"^":"a;0a",
sM:function(a){this.a=H.m(a,"$isc",[V.ab],"$asc")},
ai:["cS",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x)if(z[x].ai(a))return!0
return!1}],
i:["bq",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.B)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isab:1},a4:{"^":"dB;0a",
ai:function(a){return!this.cS(a)},
i:function(a){return"!["+this.bq(0)+"]"}},hJ:{"^":"a;0a,0b",
ai:function(a){return this.a<=a&&this.b>=a},
i:function(a){var z,y
z=H.co(this.a)
y=H.co(this.b)
return z+".."+y},
$isab:1,
m:{
C:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.e(P.R("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.c.aa(a,0)
y=C.c.aa(b,0)
x=new V.hJ()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},hW:{"^":"a;0a",
se7:function(a){this.a=H.m(a,"$isY",[P.v,P.E],"$asY")},
cW:function(a){var z,y
if(a.a.length<=0)throw H.e(P.R("May not create a SetMatcher with zero characters."))
z=new H.aB(0,0,[P.v,P.E])
for(y=new H.cl(a,a.gl(a),0,[H.av(a,"H",0)]);y.t();)z.G(0,y.d,!0)
this.se7(z)},
ai:function(a){return this.a.c_(a)},
i:function(a){var z=this.a
return P.cu(new H.dx(z,[H.q(z,0)]),0,null)},
$isab:1,
m:{
l:function(a){var z=new V.hW()
z.cW(a)
return z}}},cr:{"^":"a;a,b,0c,0d",
sek:function(a){this.c=H.m(a,"$isc",[V.cy],"$asc")},
k:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.cy(this.a.j(0,b))
w.sM(H.b([],[V.ab]))
w.c=!1
C.a.h(this.c,w)
return w},
eR:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.B)(z),++x){w=z[x]
if(w.ai(a))return w}return},
i:function(a){return this.b}},e3:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.cY(this.b,"\n","\\n")
y=H.cY(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},cx:{"^":"a;a,b,0c",
se2:function(a){var z=P.j
this.c=H.m(a,"$isY",[z,z],"$asY")},
a6:function(a,b,c){var z,y,x
H.m(c,"$isc",[P.j],"$asc")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.B)(c),++y){x=c[y]
this.c.G(0,x,b)}},
i:function(a){return this.b}},im:{"^":"a;0a,0b,0c",
seg:function(a){this.a=H.m(a,"$isY",[P.j,V.cr],"$asY")},
sej:function(a){this.b=H.m(a,"$isY",[P.j,V.cx],"$asY")},
j:function(a,b){var z=this.a.n(0,b)
if(z==null){z=new V.cr(this,b)
z.sek(H.b([],[V.cy]))
z.d=null
this.a.G(0,b,z)}return z},
B:function(a){var z,y
z=this.b.n(0,a)
if(z==null){z=new V.cx(this,a)
y=P.j
z.se2(new H.aB(0,0,[y,y]))
this.b.G(0,a,z)}return z},
cm:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.b([],[V.e3])
y=this.c
x=[P.v]
w=H.b([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.c.aa(a,t)
r=y.eR(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.cu(w,0,null)
throw H.e(P.R("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.b([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.cu(w,0,null)
p=y.d
o=p.c.n(0,q)
u=new V.e3(o==null?p.b:o,q,t)}++t}}},
m:{
bS:function(){var z,y
z=new V.im()
y=P.j
z.seg(new H.aB(0,0,[y,V.cr]))
z.sej(new H.aB(0,0,[y,V.cx]))
z.c=null
return z}}},cy:{"^":"dB;b,0c,0a",
i:function(a){return this.b.b+": "+this.bq(0)}}}],["","",,X,{"^":"",db:{"^":"a;",$isdE:1},fO:{"^":"dY;0a,0b,0c,0d,0e,0f,0r,0x",
gw:function(){var z=this.x
if(z==null){z=D.ag()
this.x=z}return z}},hv:{"^":"a;0a,0b,0c,0d,0e,0f",
gw:function(){var z=this.f
if(z==null){z=D.ag()
this.f=z}return z},
al:[function(a){var z
H.h(a,"$isx")
z=this.f
if(!(z==null))z.R(a)},function(){return this.al(null)},"fJ","$1","$0","gbs",0,2,2],
sar:function(a){var z,y
if(!J.J(this.b,a)){z=this.b
if(z!=null)z.gw().F(0,this.gbs())
y=this.b
this.b=a
if(a!=null)a.gw().h(0,this.gbs())
z=new D.I("mover",y,this.b,this,[U.bN])
z.b=!0
this.al(z)}},
$isdE:1,
$isdb:1},dY:{"^":"a;"}}],["","",,V,{"^":"",
ks:function(a){P.il(C.E,new V.kt(a))},
ao:{"^":"a;0d",
saW:function(a){this.d=H.m(a,"$isc",[[P.c,W.aq]],"$asc")},
av:function(a){this.b=new P.fU(C.G)
this.c=null
this.saW(H.b([],[[P.c,W.aq]]))},
v:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.b([],[W.aq]))
y=a.split("\n")
for(z=y.length,x=[W.aq],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.b([],x))
t=document.createElement("div")
t.className="codePart"
H.w(u)
s=this.b.df(u,0,u.length)
r=s==null?u:s
C.d.cK(t,H.cY(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gaF(this.d),t)}},
ca:function(a){var z,y,x,w
H.m(a,"$isc",[P.j],"$asc")
this.saW(H.b([],[[P.c,W.aq]]))
z=C.a.k(a,"\n")
y=this.c
if(y==null){y=this.aC()
this.c=y}for(y=y.cm(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.B)(y),++w)this.aH(y[w])}},
kt:{"^":"o:34;a",
$1:function(a){H.h(a,"$isaE")
P.cX(C.e.cl(this.a.geW(),2)+" fps")}},
fn:{"^":"ao;a,0b,0c,0d",
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
z=V.bS()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.l(new H.k("_"))
C.a.h(y.a,x)
x=V.C("a","z")
C.a.h(y.a,x)
x=V.C("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.l(new H.k("_"))
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
x=V.l(new H.k("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").k(0,"Float")
y=V.C("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").k(0,"Float")
x=V.C("0","9")
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"Sym")
y=V.l(new H.k("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.j(0,"Sym").k(0,"Sym")
x=V.l(new H.k("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"OpenDoubleStr")
y=V.l(new H.k('"'))
C.a.h(x.a,y)
y=z.j(0,"OpenDoubleStr").k(0,"CloseDoubleStr")
x=V.l(new H.k('"'))
C.a.h(y.a,x)
x=z.j(0,"OpenDoubleStr").k(0,"EscDoubleStr")
y=V.l(new H.k("\\"))
C.a.h(x.a,y)
y=z.j(0,"EscDoubleStr").k(0,"OpenDoubleStr")
x=V.l(new H.k('"'))
C.a.h(y.a,x)
C.a.h(z.j(0,"OpenDoubleStr").k(0,"OpenDoubleStr").a,new V.aW())
x=z.j(0,"Start").k(0,"OpenSingleStr")
y=V.l(new H.k("'"))
C.a.h(x.a,y)
y=z.j(0,"OpenSingleStr").k(0,"CloseSingleStr")
x=V.l(new H.k("'"))
C.a.h(y.a,x)
x=z.j(0,"OpenSingleStr").k(0,"EscSingleStr")
y=V.l(new H.k("\\"))
C.a.h(x.a,y)
y=z.j(0,"EscSingleStr").k(0,"OpenSingleStr")
x=V.l(new H.k("'"))
C.a.h(y.a,x)
C.a.h(z.j(0,"OpenSingleStr").k(0,"OpenSingleStr").a,new V.aW())
x=z.j(0,"Start").k(0,"Slash")
y=V.l(new H.k("/"))
C.a.h(x.a,y)
y=z.j(0,"Slash").k(0,"Comment")
x=V.l(new H.k("/"))
C.a.h(y.a,x)
x=z.j(0,"Comment").k(0,"EndComment")
y=V.l(new H.k("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").k(0,"Comment")
x=new V.a4()
w=[V.ab]
x.sM(H.b([],w))
C.a.h(y.a,x)
y=V.l(new H.k("\n"))
C.a.h(x.a,y)
y=z.j(0,"Slash").k(0,"MLComment")
x=V.l(new H.k("*"))
C.a.h(y.a,x)
x=z.j(0,"MLComment").k(0,"MLCStar")
y=V.l(new H.k("*"))
C.a.h(x.a,y)
y=z.j(0,"MLCStar").k(0,"MLComment")
x=new V.a4()
x.sM(H.b([],w))
C.a.h(y.a,x)
y=V.l(new H.k("*"))
C.a.h(x.a,y)
y=z.j(0,"MLCStar").k(0,"EndComment")
x=V.l(new H.k("/"))
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"Whitespace")
y=V.l(new H.k(" \n\t"))
C.a.h(x.a,y)
y=z.j(0,"Whitespace").k(0,"Whitespace")
x=V.l(new H.k(" \n\t"))
C.a.h(y.a,x)
x=z.j(0,"Int")
x.d=x.a.B("Num")
x=z.j(0,"Float")
x.d=x.a.B("Num")
x=z.j(0,"Sym")
x.d=x.a.B("Symbol")
x=z.j(0,"CloseDoubleStr")
x.d=x.a.B("String")
x=z.j(0,"CloseSingleStr")
x.d=x.a.B("String")
x=z.j(0,"EndComment")
x.d=x.a.B("Comment")
x=z.j(0,"Whitespace")
x.d=x.a.B("Whitespace")
x=z.j(0,"Id")
y=x.a.B("Id")
x.d=y
x=[P.j]
y.a6(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.a6(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.a6(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
fP:{"^":"ao;a,0b,0c,0d",
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
z=V.bS()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.l(new H.k("_"))
C.a.h(y.a,x)
x=V.C("a","z")
C.a.h(y.a,x)
x=V.C("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.l(new H.k("_"))
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
x=V.l(new H.k("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").k(0,"Float")
y=V.C("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").k(0,"Float")
x=V.C("0","9")
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"Sym")
y=V.l(new H.k("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.j(0,"Sym").k(0,"Sym")
x=V.l(new H.k("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"Slash")
y=V.l(new H.k("/"))
C.a.h(x.a,y)
y=z.j(0,"Slash").k(0,"Comment")
x=V.l(new H.k("/"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Slash").k(0,"Sym").a,new V.aW())
x=z.j(0,"Comment").k(0,"EndComment")
y=V.l(new H.k("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").k(0,"Comment")
x=new V.a4()
w=[V.ab]
x.sM(H.b([],w))
C.a.h(y.a,x)
y=V.l(new H.k("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Preprocess")
x=V.l(new H.k("#"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").k(0,"Preprocess")
y=new V.a4()
y.sM(H.b([],w))
C.a.h(x.a,y)
x=V.l(new H.k("\n"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").k(0,"EndPreprocess")
y=V.l(new H.k("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Whitespace")
x=V.l(new H.k(" \n\t"))
C.a.h(y.a,x)
x=z.j(0,"Whitespace").k(0,"Whitespace")
y=V.l(new H.k(" \n\t"))
C.a.h(x.a,y)
y=z.j(0,"Int")
y.d=y.a.B("Num")
y=z.j(0,"Float")
y.d=y.a.B("Num")
y=z.j(0,"Sym")
y.d=y.a.B("Symbol")
y=z.j(0,"EndComment")
y.d=y.a.B("Comment")
y=z.j(0,"EndPreprocess")
y.d=y.a.B("Preprocess")
y=z.j(0,"Whitespace")
y.d=y.a.B("Whitespace")
y=z.j(0,"Id")
x=y.a.B("Id")
y.d=x
y=[P.j]
x.a6(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.a6(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.a6(0,"Builtin",H.b(["gl_FragColor","gl_Position"],y))
return z}},
fQ:{"^":"ao;a,0b,0c,0d",
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
z=V.bS()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.l(new H.k("_"))
C.a.h(y.a,x)
x=V.C("a","z")
C.a.h(y.a,x)
x=V.C("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.l(new H.k("_"))
C.a.h(x.a,y)
y=V.C("0","9")
C.a.h(x.a,y)
y=V.C("a","z")
C.a.h(x.a,y)
y=V.C("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Id").k(0,"Attr")
x=V.l(new H.k("="))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").k(0,"Sym")
x=V.l(new H.k("</\\-!>="))
C.a.h(y.a,x)
x=z.j(0,"Sym").k(0,"Sym")
y=V.l(new H.k("</\\-!>="))
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"OpenStr")
x=V.l(new H.k('"'))
C.a.h(y.a,x)
x=z.j(0,"OpenStr").k(0,"CloseStr")
y=V.l(new H.k('"'))
C.a.h(x.a,y)
y=z.j(0,"OpenStr").k(0,"EscStr")
x=V.l(new H.k("\\"))
C.a.h(y.a,x)
x=z.j(0,"EscStr").k(0,"OpenStr")
y=V.l(new H.k('"'))
C.a.h(x.a,y)
C.a.h(z.j(0,"OpenStr").k(0,"OpenStr").a,new V.aW())
C.a.h(z.j(0,"Start").k(0,"Other").a,new V.aW())
y=z.j(0,"Other").k(0,"Other")
x=new V.a4()
x.sM(H.b([],[V.ab]))
C.a.h(y.a,x)
y=V.l(new H.k('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.C("a","z")
C.a.h(x.a,y)
y=V.C("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Sym")
y.d=y.a.B("Symbol")
y=z.j(0,"CloseStr")
y.d=y.a.B("String")
y=z.j(0,"Id")
x=y.a.B("Id")
y.d=x
x.a6(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.j]))
x=z.j(0,"Attr")
x.d=x.a.B("Attr")
x=z.j(0,"Other")
x.d=x.a.B("Other")
return z}},
hx:{"^":"ao;a,0b,0c,0d",
ca:function(a){H.m(a,"$isc",[P.j],"$asc")
this.saW(H.b([],[[P.c,W.aq]]))
this.v(C.a.k(a,"\n"),"#111")},
aH:function(a){},
aC:function(){return}},
i1:{"^":"a;0a,0b",
cY:function(a,b){var z,y,x,w,v,u,t
z=document
y=z.body
x=z.createElement("div")
x.className="scrollTop";(y&&C.j).q(y,x)
w=z.createElement("div")
w.className="scrollPage"
C.j.q(y,w)
v=z.createElement("div")
v.className="pageCenter"
C.d.q(w,v)
if(a.length!==0){z.title=a
u=z.createElement("div")
u.className="pageTitle"
u.textContent=a
C.d.q(v,u)}t=z.createElement("div")
this.a=t
C.d.q(v,t)
this.b=null
t=W.Q
W.L(z,"scroll",H.f(new V.i4(x),{func:1,ret:-1,args:[t]}),!1,t)},
bT:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.m(a,"$isc",[P.j],"$asc")
this.ec()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.cm(C.a.f0(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.B)(x),++v){u=x[v]
switch(u.a){case"Bold":t=z.createElement("div")
t.className="boldPar"
t.textContent=u.b
C.d.q(y,t)
break
case"Italic":t=z.createElement("div")
t.className="italicPar"
t.textContent=u.b
C.d.q(y,t)
break
case"Code":t=z.createElement("div")
t.className="codePar"
t.textContent=u.b
C.d.q(y,t)
break
case"Link":s=u.b
if(H.f0(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.i(r,1)
q.href=H.w(r[1])
q.textContent=H.w(r[0])
C.d.q(y,q)}else{p=P.eI(C.w,s,C.q,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+p
q.textContent=s
C.d.q(y,q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
C.d.q(y,t)
break}}C.d.q(this.a,y)},
cz:function(a){var z,y,x,w
z=new V.fn("dart")
z.av("dart")
y=new V.fP("glsl")
y.av("glsl")
x=new V.fQ("html")
x.av("html")
w=C.a.eT(H.b([z,y,x],[V.ao]),new V.i5(a))
if(w!=null)return w
z=new V.hx("plain")
z.av("plain")
return z},
bS:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.m(a2,"$isc",[P.j],"$asc")
z=H.b([],[P.v])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.cU(w).aN(w,"+")){C.a.G(a2,x,C.c.aO(w,1))
C.a.h(z,1)
y=!0}else if(C.c.aN(w,"-")){C.a.G(a2,x,C.c.aO(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.cz(a0)
v.ca(a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
C.d.q(t,s)
C.d.q(this.a,t)
r=P.eI(C.w,a,C.q,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.d2(null)
n.href="#"+r
n.textContent=a
C.d.q(o,n)
C.o.q(p,o)
C.i.q(q,p)
C.k.q(s,q)
if(y)for(m=a1,l=m,x=0;k=v.d,x<k.length;++x){w=k[x]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums codeLineLight"
h=u.createElement("td")
h.className="codeLineNums"
if(x>=z.length)return H.i(z,x)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.B)(w),++e)C.o.q(f,w[e])
C.i.q(j,i)
C.i.q(j,h)
C.i.q(j,f)
C.k.q(s,j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.B)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gE(w);b.t();)C.o.q(h,b.gA())
C.i.q(j,i)
C.i.q(j,h)
C.k.q(s,j)}},
ec:function(){var z,y,x,w
if(this.b!=null)return
z=V.bS()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Bold")
x=V.l(new H.k("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Bold").k(0,"Bold")
x=new V.a4()
w=[V.ab]
x.sM(H.b([],w))
C.a.h(y.a,x)
y=V.l(new H.k("*"))
C.a.h(x.a,y)
y=z.j(0,"Bold").k(0,"BoldEnd")
x=V.l(new H.k("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").k(0,"Italic")
x=V.l(new H.k("_"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Italic").k(0,"Italic")
x=new V.a4()
x.sM(H.b([],w))
C.a.h(y.a,x)
y=V.l(new H.k("_"))
C.a.h(x.a,y)
y=z.j(0,"Italic").k(0,"ItalicEnd")
x=V.l(new H.k("_"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").k(0,"Code")
x=V.l(new H.k("`"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Code").k(0,"Code")
x=new V.a4()
x.sM(H.b([],w))
C.a.h(y.a,x)
y=V.l(new H.k("`"))
C.a.h(x.a,y)
y=z.j(0,"Code").k(0,"CodeEnd")
x=V.l(new H.k("`"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").k(0,"LinkHead")
x=V.l(new H.k("["))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"LinkHead").k(0,"LinkTail")
x=V.l(new H.k("|"))
C.a.h(y.a,x)
x=z.j(0,"LinkHead").k(0,"LinkEnd")
y=V.l(new H.k("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkHead").k(0,"LinkHead")
y=new V.a4()
y.sM(H.b([],w))
C.a.h(x.a,y)
x=V.l(new H.k("|]"))
C.a.h(y.a,x)
x=z.j(0,"LinkTail").k(0,"LinkEnd")
y=V.l(new H.k("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkTail").k(0,"LinkTail")
y=new V.a4()
y.sM(H.b([],w))
C.a.h(x.a,y)
x=V.l(new H.k("|]"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Start").k(0,"Other").a,new V.aW())
x=z.j(0,"Other").k(0,"Other")
y=new V.a4()
y.sM(H.b([],w))
C.a.h(x.a,y)
x=V.l(new H.k("*_`["))
C.a.h(y.a,x)
x=z.j(0,"BoldEnd")
x.d=x.a.B("Bold")
x=z.j(0,"ItalicEnd")
x.d=x.a.B("Italic")
x=z.j(0,"CodeEnd")
x.d=x.a.B("Code")
x=z.j(0,"LinkEnd")
x.d=x.a.B("Link")
x=z.j(0,"Other")
x.d=x.a.B("Other")
this.b=z},
m:{
i2:function(a,b){var z=new V.i1()
z.cY(a,!0)
return z}}},
i4:{"^":"o:35;a",
$1:function(a){P.e1(C.l,new V.i3(this.a))}},
i3:{"^":"o:0;a",
$0:function(){var z,y,x
z=C.e.X(document.documentElement.scrollTop)
y=this.a.style
x=H.d(-0.01*z)+"px"
y.top=x}},
i5:{"^":"o:36;a",
$1:function(a){return H.h(a,"$isao").a===this.a}}}],["","",,Y,{"^":"",
eX:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
z=V.i2("Test 001",!0)
y=W.dc(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
C.d.q(z.a,y)
x=[P.j]
z.bT(H.b(["Test of the Depth shader, a basic fog shader with a single auto-rotating shape."],x))
z.bT(H.b(["\xab[Back to Tests|../]"],x))
w=new E.a9()
w.a=""
w.b=!0
x=E.a9
w.sdd(0,O.de(x))
w.y.bm(w.gf7(),w.gf9())
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
w.sbo(0,null)
w.sar(null)
w.sbo(0,F.kw(30,1,15,0.5))
v=new U.dR()
v.a=0
v.b=0
v.c=0
v.d=0
v.e=0
v.f=0
v.r=0
v.scr(0)
v.scb(0)
v.scf(0)
u=v.d
if(!$.n.$2(u,0.1)){t=v.d
v.d=0.1
u=new D.I("deltaYaw",t,0.1,v,[P.r])
u.b=!0
v.ae(u)}u=v.e
if(!$.n.$2(u,0.21)){t=v.e
v.e=0.21
u=new D.I("deltaPitch",t,0.21,v,[P.r])
u.b=!0
v.ae(u)}u=v.f
if(!$.n.$2(u,0.32)){t=v.f
v.f=0.32
u=new D.I("deltaRoll",t,0.32,v,[P.r])
u.b=!0
v.ae(u)}w.sar(v)
s=new O.fq()
s.d=1
s.e=10
r=new V.bB(1,1,1)
s.b=r
v=[V.bB]
u=new D.I("objectColor",null,r,s,v)
u.b=!0
s.aw(u)
r=new V.bB(0,0,0)
if(!J.J(s.c,r)){t=s.c
s.c=r
v=new D.I("fogColor",t,r,s,v)
v.b=!0
s.aw(v)}v=s.d
if(!$.n.$2(v,3)){t=s.d
s.d=3
v=new D.I("fogStart",t,3,s,[P.r])
v.b=!0
s.aw(v)}v=s.e
if(!$.n.$2(v,6)){t=s.e
s.e=6
v=new D.I("fogStop",t,6,s,[P.r])
v.b=!0
s.aw(v)}q=new M.fE()
q.sd2(0,O.de(x))
q.d.bm(q.gdD(),q.gdE())
q.e=null
q.f=null
q.r=null
q.x=null
p=new X.hv()
p.c=1.0471975511965976
p.d=0.1
p.e=2000
p.sar(null)
x=p.c
if(!$.n.$2(x,1.0471975511965976)){t=p.c
p.c=1.0471975511965976
x=new D.I("fov",t,1.0471975511965976,p,[P.r])
x.b=!0
p.al(x)}x=p.d
if(!$.n.$2(x,0.1)){t=p.d
p.d=0.1
x=new D.I("near",t,0.1,p,[P.r])
x.b=!0
p.al(x)}x=p.e
if(!$.n.$2(x,2000)){t=p.e
p.e=2000
x=new D.I("far",t,2000,p,[P.r])
x.b=!0
p.al(x)}x=q.a
if(x!==p){if(x!=null)x.gw().F(0,q.gZ())
t=q.a
q.a=p
p.gw().h(0,q.gZ())
x=new D.I("camera",t,q.a,q,[X.db])
x.b=!0
q.a9(x)}o=new X.fO()
x=new V.bC(0,0,0,1)
o.a=x
o.b=!0
o.c=2000
o.d=!0
o.e=0
o.f=!1
x=$.dQ
if(x==null){x=V.hN(0,0,1,1)
$.dQ=x}o.r=x
x=q.b
if(x!==o){if(x!=null)x.gw().F(0,q.gZ())
t=q.b
q.b=o
o.gw().h(0,q.gZ())
x=new D.I("target",t,q.b,q,[X.dY])
x.b=!0
q.a9(x)}q.sci(null)
x=q.d
v=H.q(x,0)
H.u(w,v)
v=[v]
if(x.dR(H.b([w],v))){u=x.a
n=u.length
C.a.h(u,w)
x.dB(n,H.b([w],v))}q.sci(s)
x=q.a
m=V.as(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
v=new U.df()
v.a=m
x.sar(v)
l=C.t.cA(document,"testCanvas")
if(l==null)H.P(P.R("Failed to find an element with the identifier, testCanvas."))
k=E.ij(l,!0,!0,!0,!1)
x=k.d
if(x!==q){if(x!=null)x.gw().F(0,k.gbr())
k.d=q
q.gw().h(0,k.gbr())
k.d_()}x=k.z
if(x==null){x=D.ag()
k.z=x}v={func:1,ret:-1,args:[D.x]}
u=H.f(new Y.kl(z,s),v)
if(x.b==null)x.say(H.b([],[v]))
x=x.b;(x&&C.a).h(x,u)
V.ks(k)},
kl:{"^":"o:4;a,b",
$1:function(a){var z,y,x,w
H.h(a,"$isx")
z=this.a
y=this.b
x=y.a
w=[P.j]
z.bS("Vertex Shader","glsl",0,H.b((x==null?null:x.c).split("\n"),w))
y=y.a
z.bS("Fragment Shader","glsl",0,H.b((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.G=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.du.prototype
return J.h2.prototype}if(typeof a=="string")return J.bk.prototype
if(a==null)return J.h3.prototype
if(typeof a=="boolean")return J.h1.prototype
if(a.constructor==Array)return J.aA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.a)return a
return J.c1(a)}
J.c0=function(a){if(typeof a=="string")return J.bk.prototype
if(a==null)return a
if(a.constructor==Array)return J.aA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.a)return a
return J.c1(a)}
J.cT=function(a){if(a==null)return a
if(a.constructor==Array)return J.aA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.a)return a
return J.c1(a)}
J.k6=function(a){if(typeof a=="number")return J.bj.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bs.prototype
return a}
J.k7=function(a){if(typeof a=="number")return J.bj.prototype
if(typeof a=="string")return J.bk.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bs.prototype
return a}
J.cU=function(a){if(typeof a=="string")return J.bk.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bs.prototype
return a}
J.U=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bl.prototype
return a}if(a instanceof P.a)return a
return J.c1(a)}
J.J=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.G(a).p(a,b)}
J.f2=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.k6(a).aL(a,b)}
J.d_=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.k7(a).H(a,b)}
J.f3=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ki(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c0(a).n(a,b)}
J.f4=function(a,b,c,d){return J.U(a).d8(a,b,c,d)}
J.by=function(a,b){return J.U(a).dY(a,b)}
J.d0=function(a,b){return J.U(a).q(a,b)}
J.c7=function(a,b,c){return J.c0(a).eA(a,b,c)}
J.c8=function(a,b){return J.cT(a).N(a,b)}
J.f5=function(a){return J.U(a).ger(a)}
J.bd=function(a){return J.G(a).gL(a)}
J.aV=function(a){return J.cT(a).gE(a)}
J.ay=function(a){return J.c0(a).gl(a)}
J.f6=function(a){return J.U(a).gfk(a)}
J.f7=function(a){return J.U(a).gfw(a)}
J.c9=function(a,b){return J.U(a).ak(a,b)}
J.d1=function(a){return J.cT(a).fl(a)}
J.f8=function(a,b,c){return J.cU(a).au(a,b,c)}
J.f9=function(a){return J.cU(a).fC(a)}
J.a7=function(a){return J.G(a).i(a)}
I.ax=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.j=W.bz.prototype
C.r=W.cd.prototype
C.d=W.aq.prototype
C.D=W.fw.prototype
C.F=W.fR.prototype
C.t=W.fT.prototype
C.H=J.A.prototype
C.a=J.aA.prototype
C.h=J.du.prototype
C.e=J.bj.prototype
C.c=J.bk.prototype
C.O=J.bl.prototype
C.S=W.hp.prototype
C.x=J.hw.prototype
C.y=W.hI.prototype
C.b=P.cp.prototype
C.o=W.id.prototype
C.k=W.ie.prototype
C.i=W.ig.prototype
C.p=J.bs.prototype
C.z=W.b7.prototype
C.A=W.iZ.prototype
C.B=new P.hu()
C.C=new P.iL()
C.f=new P.jt()
C.l=new P.aY(0)
C.E=new P.aY(5e6)
C.G=new P.fV("element",!0,!1,!1,!1)
C.I=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.J=function(hooks) {
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
C.u=function(hooks) { return hooks; }

C.K=function(getTagFallback) {
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
C.L=function() {
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
C.M=function(hooks) {
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
C.N=function(hooks) {
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
C.v=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.P=H.b(I.ax(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.j])
C.Q=H.b(I.ax(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.j])
C.R=H.b(I.ax([]),[P.j])
C.w=H.b(I.ax([0,0,65498,45055,65535,34815,65534,18431]),[P.v])
C.m=H.b(I.ax(["bind","if","ref","repeat","syntax"]),[P.j])
C.n=H.b(I.ax(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.j])
C.q=new P.iK(!1)
$.a8=0
$.aX=null
$.d6=null
$.cK=!1
$.eV=null
$.eQ=null
$.f_=null
$.bZ=null
$.c3=null
$.cV=null
$.aN=null
$.b9=null
$.ba=null
$.cL=!1
$.D=C.f
$.af=null
$.cf=null
$.dr=null
$.dq=null
$.dl=null
$.dk=null
$.dj=null
$.di=null
$.n=V.hl()
$.dC=null
$.dK=null
$.dL=null
$.dQ=null
$.eh=null
$.em=null
$.ej=null
$.ek=null
$.el=null
$.ei=null
$.ft="uniform mat4 viewObjMat;                    \nuniform mat4 projMat;                       \n                                            \nattribute vec3 posAttr;                     \n                                            \nvarying float depth;                        \n                                            \nvoid main()                                 \n{                                           \n  vec4 pos = viewObjMat*vec4(posAttr, 1.0); \n  depth = pos.z;                            \n  gl_Position = projMat*pos;                \n}                                           \n"
$.fs="precision mediump float;                                  \n                                                          \nuniform vec3 objClr;                                      \nuniform vec3 fogClr;                                      \nuniform float fogStart;                                   \nuniform float fogStop;                                    \n                                                          \nvarying float depth;                                      \n                                                          \nvoid main()                                               \n{                                                         \n   float factor = (depth-fogStop)/(fogStart-fogStop);     \n   factor = clamp(factor, 0.0, 1.0);                      \n   gl_FragColor = vec4(mix(fogClr, objClr, factor), 1.0); \n}                                                         \n"
$.dJ=null
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
I.$lazy(y,x,w)}})(["dh","$get$dh",function(){return H.eU("_$dart_dartClosure")},"ci","$get$ci",function(){return H.eU("_$dart_js")},"e4","$get$e4",function(){return H.ae(H.bT({
toString:function(){return"$receiver$"}}))},"e5","$get$e5",function(){return H.ae(H.bT({$method$:null,
toString:function(){return"$receiver$"}}))},"e6","$get$e6",function(){return H.ae(H.bT(null))},"e7","$get$e7",function(){return H.ae(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eb","$get$eb",function(){return H.ae(H.bT(void 0))},"ec","$get$ec",function(){return H.ae(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"e9","$get$e9",function(){return H.ae(H.ea(null))},"e8","$get$e8",function(){return H.ae(function(){try{null.$method$}catch(z){return z.message}}())},"ee","$get$ee",function(){return H.ae(H.ea(void 0))},"ed","$get$ed",function(){return H.ae(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cG","$get$cG",function(){return P.j_()},"bb","$get$bb",function(){return[]},"eH","$get$eH",function(){return P.hM("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"dg","$get$dg",function(){return{}},"ex","$get$ex",function(){return P.dy(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.j)},"cH","$get$cH",function(){return P.hb(P.j,P.bi)},"eq","$get$eq",function(){return Z.a_(0)},"eo","$get$eo",function(){return Z.a_(511)},"ak","$get$ak",function(){return Z.a_(1)},"aI","$get$aI",function(){return Z.a_(2)},"aH","$get$aH",function(){return Z.a_(4)},"aJ","$get$aJ",function(){return Z.a_(8)},"aK","$get$aK",function(){return Z.a_(16)},"b5","$get$b5",function(){return Z.a_(32)},"b6","$get$b6",function(){return Z.a_(64)},"ep","$get$ep",function(){return Z.a_(96)},"aL","$get$aL",function(){return Z.a_(128)},"aG","$get$aG",function(){return Z.a_(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.y},{func:1,ret:-1},{func:1,ret:-1,opt:[D.x]},{func:1,ret:-1,args:[W.a3]},{func:1,ret:P.y,args:[D.x]},{func:1,ret:-1,args:[P.v,[P.p,E.a9]]},{func:1,ret:-1,args:[W.Q]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aF]},{func:1,ret:P.y,args:[F.S]},{func:1,ret:P.j,args:[P.v]},{func:1,ret:P.E,args:[W.t]},{func:1,args:[,]},{func:1,ret:P.E,args:[W.ac]},{func:1,ret:P.E,args:[P.j]},{func:1,ret:P.y,args:[{func:1,ret:-1,args:[D.x]}]},{func:1,ret:P.y,args:[,]},{func:1,ret:-1,args:[W.b0]},{func:1,ret:P.r},{func:1,ret:P.E,args:[W.F,P.j,P.j,W.bu]},{func:1,ret:P.y,args:[,,]},{func:1,ret:P.j,args:[P.j]},{func:1,ret:-1,args:[W.t,W.t]},{func:1,ret:W.F,args:[W.t]},{func:1,ret:[P.al,,],args:[,]},{func:1,ret:P.y,args:[,],opt:[,]},{func:1,ret:P.y,args:[{func:1,ret:-1}]},{func:1,ret:P.y,args:[P.a6]},{func:1,ret:P.E,args:[P.r,P.r]},{func:1,ret:-1,args:[W.b7]},{func:1,args:[P.j]},{func:1,ret:V.ah,args:[P.r]},{func:1,ret:P.y,args:[F.aj,P.r,P.r]},{func:1,args:[W.Q]},{func:1,ret:P.y,args:[P.aE]},{func:1,ret:P.y,args:[W.Q]},{func:1,ret:P.E,args:[V.ao]},{func:1,args:[,P.j]}]
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
if(x==y)H.kv(d||a)
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
Isolate.ax=a.ax
Isolate.cR=a.cR
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
if(typeof dartMainRunner==="function")dartMainRunner(Y.eX,[])
else Y.eX([])})})()
//# sourceMappingURL=test.dart.js.map
