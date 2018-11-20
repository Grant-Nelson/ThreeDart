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
if(a1==="q"){processStatics(init.statics[b2]=b3.q,b4)
delete b3.q}else if(a2===43){w[g]=a1.substring(1)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.dT"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dT"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.dT(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dV=function(){}
var dart=[["","",,H,{"^":"",nQ:{"^":"b;a"}}],["","",,J,{"^":"",
dZ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cO:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dY==null){H.n9()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.d(P.cE("Return interceptor for "+H.i(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$d7()]
if(v!=null)return v
v=H.nh(a)
if(v!=null)return v
if(typeof a=="function")return C.a6
y=Object.getPrototypeOf(a)
if(y==null)return C.M
if(y===Object.prototype)return C.M
if(typeof w=="function"){Object.defineProperty(w,$.$get$d7(),{value:C.C,enumerable:false,writable:true,configurable:true})
return C.C}return C.C},
G:{"^":"b;",
w:function(a,b){return a===b},
ga_:function(a){return H.bG(a)},
i:["fB",function(a){return"Instance of '"+H.bd(a)+"'"}],
"%":"DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo|WebGLRenderbuffer"},
iK:{"^":"G;",
i:function(a){return String(a)},
ga_:function(a){return a?519018:218159},
$isN:1},
eD:{"^":"G;",
w:function(a,b){return null==b},
i:function(a){return"null"},
ga_:function(a){return 0},
$isF:1},
d8:{"^":"G;",
ga_:function(a){return 0},
i:["fD",function(a){return String(a)}]},
jt:{"^":"d8;"},
c9:{"^":"d8;"},
c2:{"^":"d8;",
i:function(a){var z=a[$.$get$em()]
if(z==null)return this.fD(a)
return"JavaScript function for "+H.i(J.ag(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbY:1},
b9:{"^":"G;$ti",
h:function(a,b){H.x(b,H.u(a,0))
if(!!a.fixed$length)H.q(P.X("add"))
a.push(b)},
kv:function(a,b){var z
if(!!a.fixed$length)H.q(P.X("removeAt"))
z=a.length
if(b>=z)throw H.d(P.c7(b,null,null))
return a.splice(b,1)[0]},
I:function(a,b){var z
if(!!a.fixed$length)H.q(P.X("remove"))
for(z=0;z<a.length;++z)if(J.E(a[z],b)){a.splice(z,1)
return!0}return!1},
a1:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.u(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.d(P.aK(a))}},
l:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.p(z,y,H.i(a[y]))
return z.join(b)},
k8:function(a){return this.l(a,"")},
jX:function(a,b,c,d){var z,y,x
H.x(b,d)
H.l(c,{func:1,ret:d,args:[d,H.u(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.d(P.aK(a))}return y},
jW:function(a,b,c){var z,y,x
H.l(b,{func:1,ret:P.N,args:[H.u(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.d(P.aK(a))}throw H.d(H.cs())},
jV:function(a,b){return this.jW(a,b,null)},
a9:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
fA:function(a,b,c){if(b<0||b>a.length)throw H.d(P.a2(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.a2(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.u(a,0)])
return H.c(a.slice(b,c),[H.u(a,0)])},
gjU:function(a){if(a.length>0)return a[0]
throw H.d(H.cs())},
gaA:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.d(H.cs())},
e9:function(a,b){var z,y
H.l(b,{func:1,ret:P.N,args:[H.u(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.d(P.aK(a))}return!1},
Z:function(a,b){var z
for(z=0;z<a.length;++z)if(J.E(a[z],b))return!0
return!1},
i:function(a){return P.d6(a,"[","]")},
gV:function(a){return new J.az(a,a.length,0,[H.u(a,0)])},
ga_:function(a){return H.bG(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.q(P.X("set length"))
if(b<0)throw H.d(P.a2(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(b>=a.length||b<0)throw H.d(H.bq(a,b))
return a[b]},
p:function(a,b,c){H.x(c,H.u(a,0))
if(!!a.immutable$list)H.q(P.X("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bq(a,b))
a[b]=c},
$iso:1,
$isa:1,
q:{
iJ:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.cX(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.a2(a,0,4294967295,"length",null))
return J.eA(new Array(a),b)},
eA:function(a,b){return J.ct(H.c(a,[b]))},
ct:function(a){H.cg(a)
a.fixed$length=Array
return a}}},
nP:{"^":"b9;$ti"},
az:{"^":"b;a,b,c,0d,$ti",
sdM:function(a){this.d=H.x(a,H.u(this,0))},
gL:function(){return this.d},
G:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.d(H.z(z))
x=this.c
if(x>=y){this.sdM(null)
return!1}this.sdM(z[x]);++this.c
return!0},
$isb1:1},
c0:{"^":"G;",
kK:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.d(P.X(""+a+".toInt()"))},
cW:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.d(P.X(""+a+".floor()"))},
ap:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.X(""+a+".round()"))},
f6:function(a,b){var z,y
if(b>20)throw H.d(P.a2(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
bq:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.d(P.a2(b,2,36,"radix",null))
z=a.toString(b)
if(C.c.a3(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.q(P.X("Unexpected toString result: "+z))
x=y.length
if(1>=x)return H.f(y,1)
z=y[1]
if(3>=x)return H.f(y,3)
w=+y[3]
x=y[2]
if(x!=null){z+=x
w-=x.length}return z+C.c.u("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga_:function(a){return a&0x1FFFFFFF},
u:function(a,b){if(typeof b!=="number")throw H.d(H.ai(b))
return a*b},
bv:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
fG:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.e2(a,b)},
a7:function(a,b){return(a|0)===a?a/b|0:this.e2(a,b)},
e2:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.d(P.X("Result of truncating division is "+H.i(z)+": "+H.i(a)+" ~/ "+b))},
aS:function(a,b){var z
if(a>0)z=this.e0(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
iA:function(a,b){if(b<0)throw H.d(H.ai(b))
return this.e0(a,b)},
e0:function(a,b){return b>31?0:a>>>b},
T:function(a,b){if(typeof b!=="number")throw H.d(H.ai(b))
return a<b},
$ist:1,
$isam:1},
eC:{"^":"c0;",$isn:1},
eB:{"^":"c0;"},
c1:{"^":"G;",
a3:function(a,b){if(b<0)throw H.d(H.bq(a,b))
if(b>=a.length)H.q(H.bq(a,b))
return a.charCodeAt(b)},
J:function(a,b){if(b>=a.length)throw H.d(H.bq(a,b))
return a.charCodeAt(b)},
D:function(a,b){H.D(b)
if(typeof b!=="string")throw H.d(P.cX(b,null,null))
return a+b},
b4:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.ai(b))
c=P.b3(b,c,a.length,null,null,null)
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
ac:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.ai(c))
if(typeof c!=="number")return c.T()
if(c<0||c>a.length)throw H.d(P.a2(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a5:function(a,b){return this.ac(a,b,0)},
v:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.ai(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.T()
if(b<0)throw H.d(P.c7(b,null,null))
if(b>c)throw H.d(P.c7(b,null,null))
if(c>a.length)throw H.d(P.c7(c,null,null))
return a.substring(b,c)},
ar:function(a,b){return this.v(a,b,null)},
kM:function(a){return a.toLowerCase()},
u:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.S)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
kj:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.u(c,z)+a},
af:function(a,b){return this.kj(a,b," ")},
eO:function(a,b,c){var z
if(c<0||c>a.length)throw H.d(P.a2(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
eN:function(a,b){return this.eO(a,b,0)},
jw:function(a,b,c){if(c>a.length)throw H.d(P.a2(c,0,a.length,null,null))
return H.hA(a,b,c)},
i:function(a){return a},
ga_:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gn:function(a){return a.length},
$iseS:1,
$ish:1}}],["","",,H,{"^":"",
cP:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
cs:function(){return new P.dl("No element")},
iI:function(){return new P.dl("Too many elements")},
v:{"^":"kG;a",
gn:function(a){return this.a.length},
k:function(a,b){return C.c.a3(this.a,b)},
$asdC:function(){return[P.n]},
$asW:function(){return[P.n]},
$aso:function(){return[P.n]},
$asa:function(){return[P.n]}},
et:{"^":"o;"},
cv:{"^":"et;$ti",
gV:function(a){return new H.da(this,this.gn(this),0,[H.a7(this,"cv",0)])},
dg:function(a,b){return this.fC(0,H.l(b,{func:1,ret:P.N,args:[H.a7(this,"cv",0)]}))}},
da:{"^":"b;a,b,c,0d,$ti",
sb9:function(a){this.d=H.x(a,H.u(this,0))},
gL:function(){return this.d},
G:function(){var z,y,x,w
z=this.a
y=J.bs(z)
x=y.gn(z)
if(this.b!==x)throw H.d(P.aK(z))
w=this.c
if(w>=x){this.sb9(null)
return!1}this.sb9(y.a9(z,w));++this.c
return!0},
$isb1:1},
j6:{"^":"o;a,b,$ti",
gV:function(a){return new H.j7(J.b6(this.a),this.b,this.$ti)},
gn:function(a){return J.au(this.a)},
a9:function(a,b){return this.b.$1(J.ci(this.a,b))},
$aso:function(a,b){return[b]}},
j7:{"^":"b1;0a,b,c,$ti",
sb9:function(a){this.a=H.x(a,H.u(this,1))},
G:function(){var z=this.b
if(z.G()){this.sb9(this.c.$1(z.gL()))
return!0}this.sb9(null)
return!1},
gL:function(){return this.a},
$asb1:function(a,b){return[b]}},
j8:{"^":"cv;a,b,$ti",
gn:function(a){return J.au(this.a)},
a9:function(a,b){return this.b.$1(J.ci(this.a,b))},
$ascv:function(a,b){return[b]},
$aso:function(a,b){return[b]}},
dH:{"^":"o;a,b,$ti",
gV:function(a){return new H.lb(J.b6(this.a),this.b,this.$ti)}},
lb:{"^":"b1;a,b,$ti",
G:function(){var z,y
for(z=this.a,y=this.b;z.G();)if(y.$1(z.gL()))return!0
return!1},
gL:function(){return this.a.gL()}},
cp:{"^":"b;$ti"},
dC:{"^":"b;$ti",
p:function(a,b,c){H.x(c,H.a7(this,"dC",0))
throw H.d(P.X("Cannot modify an unmodifiable list"))}},
kG:{"^":"cu+dC;"}}],["","",,H,{"^":"",
i3:function(){throw H.d(P.X("Cannot modify unmodifiable Map"))},
bv:function(a){var z,y
z=H.D(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
n2:function(a){return init.types[H.ad(a)]},
nc:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.O(a).$isav},
i:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ag(a)
if(typeof z!=="string")throw H.d(H.ai(a))
return z},
bG:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
jE:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.f(z,3)
y=H.D(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.a2(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.c.J(w,u)|32)>x)return}return parseInt(a,b)},
bd:function(a){return H.jv(a)+H.dQ(H.b5(a),0,null)},
jv:function(a){var z,y,x,w,v,u,t,s,r
z=J.O(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.Z||!!z.$isc9){u=C.F(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.bv(w.length>1&&C.c.J(w,0)===36?C.c.ar(w,1):w)},
jw:function(){if(!!self.location)return self.location.href
return},
eW:function(a){var z,y,x,w,v
H.cg(a)
z=J.au(a)
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
jF:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.z)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.d(H.ai(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.aS(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.d(H.ai(w))}return H.eW(z)},
eX:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.d(H.ai(x))
if(x<0)throw H.d(H.ai(x))
if(x>65535)return H.jF(a)}return H.eW(a)},
jG:function(a,b,c){var z,y,x,w
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
w=x<c?x:c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
be:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.aS(z,10))>>>0,56320|z&1023)}}throw H.d(P.a2(a,0,1114111,null,null))},
bc:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jD:function(a){var z=H.bc(a).getFullYear()+0
return z},
jB:function(a){var z=H.bc(a).getMonth()+1
return z},
jx:function(a){var z=H.bc(a).getDate()+0
return z},
jy:function(a){var z=H.bc(a).getHours()+0
return z},
jA:function(a){var z=H.bc(a).getMinutes()+0
return z},
jC:function(a){var z=H.bc(a).getSeconds()+0
return z},
jz:function(a){var z=H.bc(a).getMilliseconds()+0
return z},
B:function(a){throw H.d(H.ai(a))},
f:function(a,b){if(a==null)J.au(a)
throw H.d(H.bq(a,b))},
bq:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aJ(!0,b,"index",null)
z=H.ad(J.au(a))
if(!(b<0)){if(typeof z!=="number")return H.B(z)
y=b>=z}else y=!0
if(y)return P.b8(b,a,"index",null,z)
return P.c7(b,"index",null)},
mX:function(a,b,c){if(a>c)return new P.cy(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cy(a,c,!0,b,"end","Invalid value")
return new P.aJ(!0,b,"end",null)},
ai:function(a){return new P.aJ(!0,a,null,null)},
mM:function(a){if(typeof a!=="number")throw H.d(H.ai(a))
return a},
d:function(a){var z
if(a==null)a=new P.eR()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hB})
z.name=""}else z.toString=H.hB
return z},
hB:function(){return J.ag(this.dartException)},
q:function(a){throw H.d(a)},
z:function(a){throw H.d(P.aK(a))},
a9:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.nF(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.aS(x,16)&8191)===10)switch(w){case 438:return z.$1(H.d9(H.i(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eQ(H.i(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fj()
u=$.$get$fk()
t=$.$get$fl()
s=$.$get$fm()
r=$.$get$fq()
q=$.$get$fr()
p=$.$get$fo()
$.$get$fn()
o=$.$get$ft()
n=$.$get$fs()
m=v.ae(y)
if(m!=null)return z.$1(H.d9(H.D(y),m))
else{m=u.ae(y)
if(m!=null){m.method="call"
return z.$1(H.d9(H.D(y),m))}else{m=t.ae(y)
if(m==null){m=s.ae(y)
if(m==null){m=r.ae(y)
if(m==null){m=q.ae(y)
if(m==null){m=p.ae(y)
if(m==null){m=s.ae(y)
if(m==null){m=o.ae(y)
if(m==null){m=n.ae(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eQ(H.D(y),m))}}return z.$1(new H.kF(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.f4()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aJ(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.f4()
return a},
bt:function(a){var z
if(a==null)return new H.h_(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.h_(a)},
n_:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.p(0,a[y],a[x])}return b},
nb:function(a,b,c,d,e,f){H.e(a,"$isbY")
switch(H.ad(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.r("Unsupported number of arguments for wrapped closure"))},
bp:function(a,b){var z
H.ad(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nb)
a.$identity=z
return z},
i_:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.O(d).$isa){z.$reflectionInfo=d
x=H.jN(z).r}else x=d
w=e?Object.create(new H.k9().constructor.prototype):Object.create(new H.cZ(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.aA
if(typeof u!=="number")return u.D()
$.aA=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.ei(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.n2,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.eb:H.d_
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.d("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.ei(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w["call*"]=q
w.$R=z.$R
w.$D=z.$D
return v},
hX:function(a,b,c,d){var z=H.d_
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
ei:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hZ(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hX(y,!w,z,b)
if(y===0){w=$.aA
if(typeof w!=="number")return w.D()
$.aA=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bx
if(v==null){v=H.ck("self")
$.bx=v}return new Function(w+H.i(v)+";return "+u+"."+H.i(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aA
if(typeof w!=="number")return w.D()
$.aA=w+1
t+=w
w="return function("+t+"){return this."
v=$.bx
if(v==null){v=H.ck("self")
$.bx=v}return new Function(w+H.i(v)+"."+H.i(z)+"("+t+");}")()},
hY:function(a,b,c,d){var z,y
z=H.d_
y=H.eb
switch(b?-1:a){case 0:throw H.d(H.jW("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hZ:function(a,b){var z,y,x,w,v,u,t,s
z=$.bx
if(z==null){z=H.ck("self")
$.bx=z}y=$.ea
if(y==null){y=H.ck("receiver")
$.ea=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hY(w,!u,x,b)
if(w===1){z="return function(){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+");"
y=$.aA
if(typeof y!=="number")return y.D()
$.aA=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+", "+s+");"
y=$.aA
if(typeof y!=="number")return y.D()
$.aA=y+1
return new Function(z+y+"}")()},
dT:function(a,b,c,d,e,f,g){return H.i_(a,b,H.ad(c),d,!!e,!!f,g)},
D:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.ay(a,"String"))},
mY:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.ay(a,"double"))},
nu:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.ay(a,"num"))},
dR:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.ay(a,"bool"))},
ad:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.ay(a,"int"))},
hx:function(a,b){throw H.d(H.ay(a,H.bv(H.D(b).substring(3))))},
nw:function(a,b){throw H.d(H.hW(a,H.bv(H.D(b).substring(3))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.O(a)[b])return a
H.hx(a,b)},
k:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.O(a)[b]
else z=!0
if(z)return a
H.nw(a,b)},
cg:function(a){if(a==null)return a
if(!!J.O(a).$isa)return a
throw H.d(H.ay(a,"List<dynamic>"))},
hu:function(a,b){var z
if(a==null)return a
z=J.O(a)
if(!!z.$isa)return a
if(z[b])return a
H.hx(a,b)},
hq:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.ad(z)]
else return a.$S()}return},
cd:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.hq(J.O(a))
if(z==null)return!1
return H.hc(z,null,b,null)},
l:function(a,b){var z,y
if(a==null)return a
if($.dN)return a
$.dN=!0
try{if(H.cd(a,b))return a
z=H.cS(b)
y=H.ay(a,z)
throw H.d(y)}finally{$.dN=!1}},
dW:function(a,b){if(a!=null&&!H.dS(a,b))H.q(H.ay(a,H.cS(b)))
return a},
hi:function(a){var z,y
z=J.O(a)
if(!!z.$ism){y=H.hq(z)
if(y!=null)return H.cS(y)
return"Closure"}return H.bd(a)},
nC:function(a){throw H.d(new P.i6(H.D(a)))},
hr:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
b5:function(a){if(a==null)return
return a.$ti},
oi:function(a,b,c){return H.bu(a["$as"+H.i(c)],H.b5(b))},
ce:function(a,b,c,d){var z
H.D(c)
H.ad(d)
z=H.bu(a["$as"+H.i(c)],H.b5(b))
return z==null?null:z[d]},
a7:function(a,b,c){var z
H.D(b)
H.ad(c)
z=H.bu(a["$as"+H.i(b)],H.b5(a))
return z==null?null:z[c]},
u:function(a,b){var z
H.ad(b)
z=H.b5(a)
return z==null?null:z[b]},
cS:function(a){return H.b4(a,null)},
b4:function(a,b){var z,y
H.j(b,"$isa",[P.h],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bv(a[0].builtin$cls)+H.dQ(a,1,b)
if(typeof a=="function")return H.bv(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ad(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.i(b[y])}if('func' in a)return H.mC(a,b)
if('futureOr' in a)return"FutureOr<"+H.b4("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mC:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.h]
H.j(b,"$isa",z,"$asa")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.f(b,r)
t=C.c.D(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.b4(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b4(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b4(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b4(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.mZ(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.D(z[l])
n=n+m+H.b4(i[h],b)+(" "+H.i(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dQ:function(a,b,c){var z,y,x,w,v,u
H.j(c,"$isa",[P.h],"$asa")
if(a==null)return""
z=new P.al("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b4(u,c)}return"<"+z.i(0)+">"},
bu:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bS:function(a,b,c,d){var z,y
H.D(b)
H.cg(c)
H.D(d)
if(a==null)return!1
z=H.b5(a)
y=J.O(a)
if(y[b]==null)return!1
return H.hl(H.bu(y[d],z),null,c,null)},
j:function(a,b,c,d){H.D(b)
H.cg(c)
H.D(d)
if(a==null)return a
if(H.bS(a,b,c,d))return a
throw H.d(H.ay(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bv(b.substring(3))+H.dQ(c,0,null),init.mangledGlobalNames)))},
hl:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.at(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.at(a[y],b,c[y],d))return!1
return!0},
og:function(a,b,c){return a.apply(b,H.bu(J.O(b)["$as"+H.i(c)],H.b5(b)))},
ht:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="F"||a===-1||a===-2||H.ht(z)}return!1},
dS:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="F"||b===-1||b===-2||H.ht(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dS(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cd(a,b)}z=J.O(a).constructor
y=H.b5(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.at(z,null,b,null)},
x:function(a,b){if(a!=null&&!H.dS(a,b))throw H.d(H.ay(a,H.cS(b)))
return a},
at:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.at(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="F")return!0
if('func' in c)return H.hc(a,b,c,d)
if('func' in a)return c.builtin$cls==="bY"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.at("type" in a?a.type:null,b,x,d)
else if(H.at(a,b,x,d))return!0
else{if(!('$is'+"bB" in y.prototype))return!1
w=y.prototype["$as"+"bB"]
v=H.bu(w,z?a.slice(1):null)
return H.at(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.hl(H.bu(r,z),b,u,d)},
hc:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.nt(m,b,l,d)},
nt:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.at(c[w],d,a[w],b))return!1}return!0},
oh:function(a,b,c){Object.defineProperty(a,H.D(b),{value:c,enumerable:false,writable:true,configurable:true})},
nh:function(a){var z,y,x,w,v,u
z=H.D($.hs.$1(a))
y=$.cN[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cQ[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.D($.hk.$2(a,z))
if(z!=null){y=$.cN[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cQ[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cR(x)
$.cN[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cQ[z]=x
return x}if(v==="-"){u=H.cR(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.hw(a,x)
if(v==="*")throw H.d(P.cE(z))
if(init.leafTags[z]===true){u=H.cR(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.hw(a,x)},
hw:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dZ(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cR:function(a){return J.dZ(a,!1,null,!!a.$isav)},
ns:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cR(z)
else return J.dZ(z,c,null,null)},
n9:function(){if(!0===$.dY)return
$.dY=!0
H.na()},
na:function(){var z,y,x,w,v,u,t,s
$.cN=Object.create(null)
$.cQ=Object.create(null)
H.n5()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hy.$1(v)
if(u!=null){t=H.ns(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
n5:function(){var z,y,x,w,v,u,t
z=C.a3()
z=H.bo(C.a0,H.bo(C.a5,H.bo(C.E,H.bo(C.E,H.bo(C.a4,H.bo(C.a1,H.bo(C.a2(C.F),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.hs=new H.n6(v)
$.hk=new H.n7(u)
$.hy=new H.n8(t)},
bo:function(a,b){return a(b)||b},
hA:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
e1:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
i2:{"^":"b;$ti",
i:function(a){return P.db(this)},
p:function(a,b,c){H.x(b,H.u(this,0))
H.x(c,H.u(this,1))
return H.i3()},
$isH:1},
i4:{"^":"i2;a,b,c,$ti",
gn:function(a){return this.a},
bH:function(a){if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
k:function(a,b){if(!this.bH(b))return
return this.dO(b)},
dO:function(a){return this.b[H.D(a)]},
a1:function(a,b){var z,y,x,w,v
z=H.u(this,1)
H.l(b,{func:1,ret:-1,args:[H.u(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.x(this.dO(v),z))}}},
jM:{"^":"b;a,b,c,d,e,f,r,0x",q:{
jN:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.ct(z)
y=z[0]
x=z[1]
return new H.jM(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
kr:{"^":"b;a,b,c,d,e,f",
ae:function(a){var z,y,x
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
q:{
aH:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.h])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.kr(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cD:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fp:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
jq:{"^":"a5;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
q:{
eQ:function(a,b){return new H.jq(a,b==null?null:b.method)}}},
iN:{"^":"a5;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.i(this.a)+")"},
q:{
d9:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.iN(a,y,z?null:b.receiver)}}},
kF:{"^":"a5;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
nF:{"^":"m:18;a",
$1:function(a){if(!!J.O(a).$isa5)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
h_:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaP:1},
m:{"^":"b;",
i:function(a){return"Closure '"+H.bd(this).trim()+"'"},
gfe:function(){return this},
$isbY:1,
gfe:function(){return this}},
f8:{"^":"m;"},
k9:{"^":"f8;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.bv(z)+"'"}},
cZ:{"^":"f8;a,b,c,d",
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cZ))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga_:function(a){var z,y
z=this.c
if(z==null)y=H.bG(this.a)
else y=typeof z!=="object"?J.bU(z):H.bG(z)
return(y^H.bG(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.bd(z)+"'")},
q:{
d_:function(a){return a.a},
eb:function(a){return a.c},
ck:function(a){var z,y,x,w,v
z=new H.cZ("self","target","receiver","name")
y=J.ct(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ks:{"^":"a5;a",
i:function(a){return this.a},
q:{
ay:function(a,b){return new H.ks("TypeError: "+H.i(P.cn(a))+": type '"+H.hi(a)+"' is not a subtype of type '"+b+"'")}}},
hV:{"^":"a5;a",
i:function(a){return this.a},
q:{
hW:function(a,b){return new H.hV("CastError: "+H.i(P.cn(a))+": type '"+H.hi(a)+"' is not a subtype of type '"+b+"'")}}},
jV:{"^":"a5;a",
i:function(a){return"RuntimeError: "+H.i(this.a)},
q:{
jW:function(a){return new H.jV(a)}}},
b2:{"^":"eJ;a,0b,0c,0d,0e,0f,r,$ti",
gn:function(a){return this.a},
gk7:function(a){return this.a===0},
gaz:function(){return new H.iU(this,[H.u(this,0)])},
bH:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.dJ(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.dJ(y,a)}else return this.k0(a)},
k0:function(a){var z=this.d
if(z==null)return!1
return this.cZ(this.cg(z,this.cY(a)),a)>=0},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bz(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bz(w,b)
x=y==null?null:y.b
return x}else return this.k5(b)},
k5:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cg(z,this.cY(a))
x=this.cZ(y,a)
if(x<0)return
return y[x].b},
p:function(a,b,c){var z,y
H.x(b,H.u(this,0))
H.x(c,H.u(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.co()
this.b=z}this.dA(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.co()
this.c=y}this.dA(y,b,c)}else this.k6(b,c)},
k6:function(a,b){var z,y,x,w
H.x(a,H.u(this,0))
H.x(b,H.u(this,1))
z=this.d
if(z==null){z=this.co()
this.d=z}y=this.cY(a)
x=this.cg(z,y)
if(x==null)this.cv(z,y,[this.ca(a,b)])
else{w=this.cZ(x,a)
if(w>=0)x[w].b=b
else x.push(this.ca(a,b))}},
a1:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.d(P.aK(this))
z=z.c}},
dA:function(a,b,c){var z
H.x(b,H.u(this,0))
H.x(c,H.u(this,1))
z=this.bz(a,b)
if(z==null)this.cv(a,b,this.ca(b,c))
else z.b=c},
h3:function(){this.r=this.r+1&67108863},
ca:function(a,b){var z,y
z=new H.iT(H.x(a,H.u(this,0)),H.x(b,H.u(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.h3()
return z},
cY:function(a){return J.bU(a)&0x3ffffff},
cZ:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.E(a[y].a,b))return y
return-1},
i:function(a){return P.db(this)},
bz:function(a,b){return a[b]},
cg:function(a,b){return a[b]},
cv:function(a,b,c){a[b]=c},
hi:function(a,b){delete a[b]},
dJ:function(a,b){return this.bz(a,b)!=null},
co:function(){var z=Object.create(null)
this.cv(z,"<non-identifier-key>",z)
this.hi(z,"<non-identifier-key>")
return z},
$iseF:1},
iT:{"^":"b;a,b,0c,0d"},
iU:{"^":"et;a,$ti",
gn:function(a){return this.a.a},
gV:function(a){var z,y
z=this.a
y=new H.iV(z,z.r,this.$ti)
y.c=z.e
return y}},
iV:{"^":"b;a,b,0c,0d,$ti",
sdB:function(a){this.d=H.x(a,H.u(this,0))},
gL:function(){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aK(z))
else{z=this.c
if(z==null){this.sdB(null)
return!1}else{this.sdB(z.a)
this.c=this.c.c
return!0}}},
$isb1:1},
n6:{"^":"m:18;a",
$1:function(a){return this.a(a)}},
n7:{"^":"m:54;a",
$2:function(a,b){return this.a(a,b)}},
n8:{"^":"m:53;a",
$1:function(a){return this.a(H.D(a))}},
iL:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseS:1,
$isjO:1,
q:{
iM:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.d(P.Y("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mZ:function(a){return J.eA(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
nv:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bm:function(a){return a},
jk:function(a){return new Int8Array(a)},
aX:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bq(b,a))},
mw:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.d(H.mX(a,b,c))
return b},
dg:{"^":"G;",$isdg:1,$iskt:1,"%":";ArrayBufferView;df|fW|fX|jl|fY|fZ|bb"},
df:{"^":"dg;",
gn:function(a){return a.length},
$isav:1,
$asav:I.dV},
jl:{"^":"fX;",
k:function(a,b){H.aX(b,a,a.length)
return a[b]},
p:function(a,b,c){H.mY(c)
H.aX(b,a,a.length)
a[b]=c},
$ascp:function(){return[P.t]},
$asW:function(){return[P.t]},
$iso:1,
$aso:function(){return[P.t]},
$isa:1,
$asa:function(){return[P.t]},
"%":"Float32Array"},
bb:{"^":"fZ;",
p:function(a,b,c){H.ad(c)
H.aX(b,a,a.length)
a[b]=c},
$ascp:function(){return[P.n]},
$asW:function(){return[P.n]},
$iso:1,
$aso:function(){return[P.n]},
$isa:1,
$asa:function(){return[P.n]}},
nR:{"^":"bb;",
k:function(a,b){H.aX(b,a,a.length)
return a[b]},
"%":"Int16Array"},
nS:{"^":"bb;",
k:function(a,b){H.aX(b,a,a.length)
return a[b]},
"%":"Int32Array"},
nT:{"^":"bb;",
k:function(a,b){H.aX(b,a,a.length)
return a[b]},
"%":"Int8Array"},
nU:{"^":"bb;",
k:function(a,b){H.aX(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
nV:{"^":"bb;",
gn:function(a){return a.length},
k:function(a,b){H.aX(b,a,a.length)
return a[b]},
$iso3:1,
"%":"CanvasPixelArray|Uint8ClampedArray"},
eO:{"^":"bb;",
gn:function(a){return a.length},
k:function(a,b){H.aX(b,a,a.length)
return a[b]},
$iseO:1,
$isP:1,
"%":";Uint8Array"},
fW:{"^":"df+W;"},
fX:{"^":"fW+cp;"},
fY:{"^":"df+W;"},
fZ:{"^":"fY+cp;"}}],["","",,P,{"^":"",
ld:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mJ()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bp(new P.lf(z),1)).observe(y,{childList:true})
return new P.le(z,y,x)}else if(self.setImmediate!=null)return P.mK()
return P.mL()},
o7:[function(a){self.scheduleImmediate(H.bp(new P.lg(H.l(a,{func:1,ret:-1})),0))},"$1","mJ",4,0,10],
o8:[function(a){self.setImmediate(H.bp(new P.lh(H.l(a,{func:1,ret:-1})),0))},"$1","mK",4,0,10],
o9:[function(a){P.dq(C.y,H.l(a,{func:1,ret:-1}))},"$1","mL",4,0,10],
dq:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.h.a7(a.a,1000)
return P.lZ(z<0?0:z,b)},
fg:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.bf]})
z=C.h.a7(a.a,1000)
return P.m_(z<0?0:z,b)},
mF:function(a,b){if(H.cd(a,{func:1,args:[P.b,P.aP]}))return H.l(a,{func:1,ret:null,args:[P.b,P.aP]})
if(H.cd(a,{func:1,args:[P.b]}))return H.l(a,{func:1,ret:null,args:[P.b]})
throw H.d(P.cX(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mE:function(){var z,y
for(;z=$.bn,z!=null;){$.bQ=null
y=z.b
$.bn=y
if(y==null)$.bP=null
z.a.$0()}},
of:[function(){$.dO=!0
try{P.mE()}finally{$.bQ=null
$.dO=!1
if($.bn!=null)$.$get$dI().$1(P.hm())}},"$0","hm",0,0,3],
hh:function(a){var z=new P.fN(H.l(a,{func:1,ret:-1}))
if($.bn==null){$.bP=z
$.bn=z
if(!$.dO)$.$get$dI().$1(P.hm())}else{$.bP.b=z
$.bP=z}},
mI:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.bn
if(z==null){P.hh(a)
$.bQ=$.bP
return}y=new P.fN(a)
x=$.bQ
if(x==null){y.b=z
$.bQ=y
$.bn=y}else{y.b=x.b
x.b=y
$.bQ=y
if(y.b==null)$.bP=y}},
nx:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.S
if(C.l===y){P.cM(null,null,C.l,a)
return}y.toString
P.cM(null,null,y,H.l(y.cF(a),z))},
ff:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.S
if(y===C.l){y.toString
return P.dq(a,b)}return P.dq(a,H.l(y.cF(b),z))},
ko:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bf]}
H.l(b,z)
y=$.S
if(y===C.l){y.toString
return P.fg(a,b)}x=y.ec(b,P.bf)
$.S.toString
return P.fg(a,H.l(x,z))},
cL:function(a,b,c,d,e){var z={}
z.a=d
P.mI(new P.mG(z,e))},
hd:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.S
if(y===c)return d.$0()
$.S=c
z=y
try{y=d.$0()
return y}finally{$.S=z}},
he:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.x(e,g)
y=$.S
if(y===c)return d.$1(e)
$.S=c
z=y
try{y=d.$1(e)
return y}finally{$.S=z}},
mH:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.x(e,h)
H.x(f,i)
y=$.S
if(y===c)return d.$2(e,f)
$.S=c
z=y
try{y=d.$2(e,f)
return y}finally{$.S=z}},
cM:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.l!==c
if(z)d=!(!z||!1)?c.cF(d):c.jm(d,-1)
P.hh(d)},
lf:{"^":"m:28;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
le:{"^":"m:50;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
lg:{"^":"m:0;a",
$0:function(){this.a.$0()}},
lh:{"^":"m:0;a",
$0:function(){this.a.$0()}},
h1:{"^":"b;a,0b,c",
h1:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bp(new P.m1(this,b),0),a)
else throw H.d(P.X("`setTimeout()` not found."))},
h2:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bp(new P.m0(this,a,Date.now(),b),0),a)
else throw H.d(P.X("Periodic timer."))},
$isbf:1,
q:{
lZ:function(a,b){var z=new P.h1(!0,0)
z.h1(a,b)
return z},
m_:function(a,b){var z=new P.h1(!1,0)
z.h2(a,b)
return z}}},
m1:{"^":"m:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
m0:{"^":"m:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.fG(w,x)}z.c=y
this.d.$1(z)}},
bl:{"^":"b;0a,b,c,d,e,$ti",
kc:function(a){if(this.c!==6)return!0
return this.b.b.dc(H.l(this.d,{func:1,ret:P.N,args:[P.b]}),a.a,P.N,P.b)},
k_:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.u(this,1)}
w=this.b.b
if(H.cd(z,{func:1,args:[P.b,P.aP]}))return H.dW(w.kD(z,a.a,a.b,null,y,P.aP),x)
else return H.dW(w.dc(H.l(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aW:{"^":"b;e1:a<,b,0ir:c<,$ti",
f5:function(a,b,c){var z,y,x,w
z=H.u(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.S
if(y!==C.l){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.mF(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aW(0,$.S,[c])
w=b==null?1:3
this.dD(new P.bl(x,w,a,b,[z,c]))
return x},
kJ:function(a,b){return this.f5(a,null,b)},
dD:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isbl")
this.c=a}else{if(z===2){y=H.e(this.c,"$isaW")
z=y.a
if(z<4){y.dD(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cM(null,null,z,H.l(new P.lq(this,a),{func:1,ret:-1}))}},
dZ:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isbl")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isaW")
y=u.a
if(y<4){u.dZ(a)
return}this.a=y
this.c=u.c}z.a=this.bC(a)
y=this.b
y.toString
P.cM(null,null,y,H.l(new P.lv(z,this),{func:1,ret:-1}))}},
cs:function(){var z=H.e(this.c,"$isbl")
this.c=null
return this.bC(z)},
bC:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
dF:function(a){var z,y,x
z=H.u(this,0)
H.dW(a,{futureOr:1,type:z})
y=this.$ti
if(H.bS(a,"$isbB",y,"$asbB"))if(H.bS(a,"$isaW",y,null))P.fR(a,this)
else P.lr(a,this)
else{x=this.cs()
H.x(a,z)
this.a=4
this.c=a
P.bL(this,x)}},
dG:function(a,b){var z
H.e(b,"$isaP")
z=this.cs()
this.a=8
this.c=new P.an(a,b)
P.bL(this,z)},
$isbB:1,
q:{
lr:function(a,b){var z,y,x
b.a=1
try{a.f5(new P.ls(b),new P.lt(b),null)}catch(x){z=H.a9(x)
y=H.bt(x)
P.nx(new P.lu(b,z,y))}},
fR:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isaW")
if(z>=4){y=b.cs()
b.a=a.a
b.c=a.c
P.bL(b,y)}else{y=H.e(b.c,"$isbl")
b.a=2
b.c=a
a.dZ(y)}},
bL:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isan")
y=y.b
u=v.a
t=v.b
y.toString
P.cL(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
if(p){H.e(r,"$isan")
y=y.b
u=r.a
t=r.b
y.toString
P.cL(null,null,y,u,t)
return}o=$.S
if(o==null?q!=null:o!==q)$.S=q
else o=null
y=b.c
if(y===8)new P.ly(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.lx(x,b,r).$0()}else if((y&2)!==0)new P.lw(z,x,b).$0()
if(o!=null)$.S=o
y=x.b
if(!!J.O(y).$isbB){if(y.a>=4){n=H.e(t.c,"$isbl")
t.c=null
b=t.bC(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fR(y,t)
return}}m=b.b
n=H.e(m.c,"$isbl")
m.c=null
b=m.bC(n)
y=x.a
u=x.b
if(!y){H.x(u,H.u(m,0))
m.a=4
m.c=u}else{H.e(u,"$isan")
m.a=8
m.c=u}z.a=m
y=m}}}},
lq:{"^":"m:0;a,b",
$0:function(){P.bL(this.a,this.b)}},
lv:{"^":"m:0;a,b",
$0:function(){P.bL(this.b,this.a.a)}},
ls:{"^":"m:28;a",
$1:function(a){var z=this.a
z.a=0
z.dF(a)}},
lt:{"^":"m:49;a",
$2:function(a,b){this.a.dG(a,H.e(b,"$isaP"))},
$1:function(a){return this.$2(a,null)}},
lu:{"^":"m:0;a,b,c",
$0:function(){this.a.dG(this.b,this.c)}},
ly:{"^":"m:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.f3(H.l(w.d,{func:1}),null)}catch(v){y=H.a9(v)
x=H.bt(v)
if(this.d){w=H.e(this.a.a.c,"$isan").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isan")
else u.b=new P.an(y,x)
u.a=!0
return}if(!!J.O(z).$isbB){if(z instanceof P.aW&&z.ge1()>=4){if(z.ge1()===8){w=this.b
w.b=H.e(z.gir(),"$isan")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.kJ(new P.lz(t),null)
w.a=!1}}},
lz:{"^":"m:48;a",
$1:function(a){return this.a}},
lx:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.u(x,0)
v=H.x(this.c,w)
u=H.u(x,1)
this.a.b=x.b.b.dc(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a9(t)
y=H.bt(t)
x=this.a
x.b=new P.an(z,y)
x.a=!0}}},
lw:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isan")
w=this.c
if(w.kc(z)&&w.e!=null){v=this.b
v.b=w.k_(z)
v.a=!1}}catch(u){y=H.a9(u)
x=H.bt(u)
w=H.e(this.a.a.c,"$isan")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.an(y,x)
s.a=!0}}},
fN:{"^":"b;a,0b"},
ka:{"^":"b;$ti",
gn:function(a){var z,y,x,w
z={}
y=new P.aW(0,$.S,[P.n])
z.a=0
x=H.u(this,0)
w=H.l(new P.kc(z,this),{func:1,ret:-1,args:[x]})
H.l(new P.kd(z,y),{func:1,ret:-1})
W.a3(this.a,this.b,w,!1,x)
return y}},
kc:{"^":"m;a,b",
$1:function(a){H.x(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.u(this.b,0)]}}},
kd:{"^":"m:0;a,b",
$0:function(){this.b.dF(this.a.a)}},
dm:{"^":"b;$ti"},
kb:{"^":"b;"},
bf:{"^":"b;"},
an:{"^":"b;a,b",
i:function(a){return H.i(this.a)},
$isa5:1},
ms:{"^":"b;",$iso6:1},
mG:{"^":"m:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eR()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.d(z)
x=H.d(z)
x.stack=y.i(0)
throw x}},
lK:{"^":"ms;",
kE:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.l===$.S){a.$0()
return}P.hd(null,null,this,a,-1)}catch(x){z=H.a9(x)
y=H.bt(x)
P.cL(null,null,this,z,H.e(y,"$isaP"))}},
kF:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.l===$.S){a.$1(b)
return}P.he(null,null,this,a,b,-1,c)}catch(x){z=H.a9(x)
y=H.bt(x)
P.cL(null,null,this,z,H.e(y,"$isaP"))}},
jm:function(a,b){return new P.lM(this,H.l(a,{func:1,ret:b}),b)},
cF:function(a){return new P.lL(this,H.l(a,{func:1,ret:-1}))},
ec:function(a,b){return new P.lN(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
f3:function(a,b){H.l(a,{func:1,ret:b})
if($.S===C.l)return a.$0()
return P.hd(null,null,this,a,b)},
dc:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.S===C.l)return a.$1(b)
return P.he(null,null,this,a,b,c,d)},
kD:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.S===C.l)return a.$2(b,c)
return P.mH(null,null,this,a,b,c,d,e,f)}},
lM:{"^":"m;a,b,c",
$0:function(){return this.a.f3(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
lL:{"^":"m:3;a,b",
$0:function(){return this.a.kE(this.b)}},
lN:{"^":"m;a,b,c",
$1:function(a){var z=this.c
return this.a.kF(this.b,H.x(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
iW:function(a,b,c,d,e){return new H.b2(0,0,[d,e])},
iX:function(a,b,c){H.cg(a)
return H.j(H.n_(a,new H.b2(0,0,[b,c])),"$iseF",[b,c],"$aseF")},
eG:function(a,b){return new H.b2(0,0,[a,b])},
c3:function(a,b,c,d){return new P.lE(0,0,[d])},
iH:function(a,b,c){var z,y
if(P.dP(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bR()
C.a.h(y,a)
try{P.mD(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.f6(b,H.hu(z,"$iso"),", ")+c
return y.charCodeAt(0)==0?y:y},
d6:function(a,b,c){var z,y,x
if(P.dP(a))return b+"..."+c
z=new P.al(b)
y=$.$get$bR()
C.a.h(y,a)
try{x=z
x.a=P.f6(x.gaO(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gaO()+c
y=z.gaO()
return y.charCodeAt(0)==0?y:y},
dP:function(a){var z,y
for(z=0;y=$.$get$bR(),z<y.length;++z)if(a===y[z])return!0
return!1},
mD:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gV(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.G())return
w=H.i(z.gL())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.G()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gL();++x
if(!z.G()){if(x<=4){C.a.h(b,H.i(t))
return}v=H.i(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gL();++x
for(;z.G();t=s,s=r){r=z.gL();++x
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
iY:function(a,b,c){var z=P.iW(null,null,null,b,c)
a.a1(0,new P.iZ(z,b,c))
return z},
eH:function(a,b){var z,y,x
z=P.c3(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.z)(a),++x)z.h(0,H.x(a[x],b))
return z},
db:function(a){var z,y,x
z={}
if(P.dP(a))return"{...}"
y=new P.al("")
try{C.a.h($.$get$bR(),a)
x=y
x.a=x.gaO()+"{"
z.a=!0
a.a1(0,new P.j4(z,y))
z=y
z.a=z.gaO()+"}"}finally{z=$.$get$bR()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gaO()
return z.charCodeAt(0)==0?z:z},
lE:{"^":"lA;a,0b,0c,0d,0e,0f,r,$ti",
gV:function(a){var z=new P.fV(this,this.r,this.$ti)
z.c=this.e
return z},
gn:function(a){return this.a},
Z:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.e(z[b],"$iscI")!=null}else{y=this.he(b)
return y}},
he:function(a){var z=this.d
if(z==null)return!1
return this.ce(this.dP(z,a),a)>=0},
h:function(a,b){var z,y
H.x(b,H.u(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dK()
this.b=z}return this.dC(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dK()
this.c=y}return this.dC(y,b)}else return this.h4(b)},
h4:function(a){var z,y,x
H.x(a,H.u(this,0))
z=this.d
if(z==null){z=P.dK()
this.d=z}y=this.dH(a)
x=z[y]
if(x==null)z[y]=[this.cp(a)]
else{if(this.ce(x,a)>=0)return!1
x.push(this.cp(a))}return!0},
I:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.ig(this.c,b)
else return this.ib(b)},
ib:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.dP(z,a)
x=this.ce(y,a)
if(x<0)return!1
this.e3(y.splice(x,1)[0])
return!0},
dC:function(a,b){H.x(b,H.u(this,0))
if(H.e(a[b],"$iscI")!=null)return!1
a[b]=this.cp(b)
return!0},
ig:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$iscI")
if(z==null)return!1
this.e3(z)
delete a[b]
return!0},
dU:function(){this.r=this.r+1&67108863},
cp:function(a){var z,y
z=new P.cI(H.x(a,H.u(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dU()
return z},
e3:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dU()},
dH:function(a){return J.bU(a)&0x3ffffff},
dP:function(a,b){return a[this.dH(b)]},
ce:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.E(a[y].a,b))return y
return-1},
q:{
dK:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cI:{"^":"b;a,0b,0c"},
fV:{"^":"b;a,b,0c,0d,$ti",
sdE:function(a){this.d=H.x(a,H.u(this,0))},
gL:function(){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aK(z))
else{z=this.c
if(z==null){this.sdE(null)
return!1}else{this.sdE(H.x(z.a,H.u(this,0)))
this.c=this.c.b
return!0}}},
$isb1:1,
q:{
lF:function(a,b,c){var z=new P.fV(a,b,[c])
z.c=a.e
return z}}},
lA:{"^":"jX;"},
iZ:{"^":"m:7;a,b,c",
$2:function(a,b){this.a.p(0,H.x(a,this.b),H.x(b,this.c))}},
cu:{"^":"lG;",$iso:1,$isa:1},
W:{"^":"b;$ti",
gV:function(a){return new H.da(a,this.gn(a),0,[H.ce(this,a,"W",0)])},
a9:function(a,b){return this.k(a,b)},
kL:function(a,b){var z,y
z=H.c([],[H.ce(this,a,"W",0)])
C.a.sn(z,this.gn(a))
for(y=0;y<this.gn(a);++y)C.a.p(z,y,this.k(a,y))
return z},
dd:function(a){return this.kL(a,!0)},
jQ:function(a,b,c,d){var z
H.x(d,H.ce(this,a,"W",0))
P.b3(b,c,this.gn(a),null,null,null)
for(z=b;z<c;++z)this.p(a,z,d)},
i:function(a){return P.d6(a,"[","]")}},
eJ:{"^":"cw;"},
j4:{"^":"m:7;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.i(a)
z.a=y+": "
z.a+=H.i(b)}},
cw:{"^":"b;$ti",
a1:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.a7(this,"cw",0),H.a7(this,"cw",1)]})
for(z=J.b6(this.gaz());z.G();){y=z.gL()
b.$2(y,this.k(0,y))}},
gn:function(a){return J.au(this.gaz())},
i:function(a){return P.db(this)},
$isH:1},
m4:{"^":"b;$ti",
p:function(a,b,c){H.x(b,H.u(this,0))
H.x(c,H.u(this,1))
throw H.d(P.X("Cannot modify unmodifiable map"))}},
j5:{"^":"b;$ti",
k:function(a,b){return this.a.k(0,b)},
p:function(a,b,c){this.a.p(0,H.x(b,H.u(this,0)),H.x(c,H.u(this,1)))},
a1:function(a,b){this.a.a1(0,H.l(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]}))},
gn:function(a){var z=this.a
return z.gn(z)},
i:function(a){return J.ag(this.a)},
$isH:1},
fu:{"^":"m5;a,$ti"},
jZ:{"^":"b;$ti",
av:function(a,b){var z
for(z=J.b6(H.j(b,"$iso",this.$ti,"$aso"));z.G();)this.h(0,z.gL())},
i:function(a){return P.d6(this,"{","}")},
a9:function(a,b){var z,y,x
if(b<0)H.q(P.a2(b,0,null,"index",null))
for(z=P.lF(this,this.r,H.u(this,0)),y=0;z.G();){x=z.d
if(b===y)return x;++y}throw H.d(P.b8(b,this,"index",null,y))},
$iso:1,
$isf1:1},
jX:{"^":"jZ;"},
lG:{"^":"b+W;"},
m5:{"^":"j5+m4;$ti"}}],["","",,P,{"^":"",hS:{"^":"bW;a",
kd:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
c=P.b3(b,c,a.length,null,null,null)
z=$.$get$fP()
for(y=b,x=y,w=null,v=-1,u=-1,t=0;y<c;y=s){s=y+1
r=C.c.J(a,y)
if(r===37){q=s+2
if(q<=c){p=H.cP(C.c.J(a,s))
o=H.cP(C.c.J(a,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.f(z,n)
m=z[n]
if(m>=0){n=C.c.a3("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.al("")
l=w.a+=C.c.v(a,x,y)
w.a=l+H.be(r)
x=s
continue}}throw H.d(P.Y("Invalid base64 data",a,y))}if(w!=null){l=w.a+=C.c.v(a,x,c)
k=l.length
if(v>=0)P.e8(a,u,c,v,t,k)
else{j=C.h.bv(k-1,4)+1
if(j===1)throw H.d(P.Y("Invalid base64 encoding length ",a,c))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.c.b4(a,b,c,l.charCodeAt(0)==0?l:l)}i=c-b
if(v>=0)P.e8(a,u,c,v,t,i)
else{j=C.h.bv(i,4)
if(j===1)throw H.d(P.Y("Invalid base64 encoding length ",a,c))
if(j>1)a=C.c.b4(a,c,c,j===2?"==":"=")}return a},
$asbW:function(){return[[P.a,P.n],P.h]},
q:{
e8:function(a,b,c,d,e,f){if(C.h.bv(f,4)!==0)throw H.d(P.Y("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.Y("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.Y("Invalid base64 padding, more than two '=' characters",a,b))}}},hT:{"^":"b_;a",
$asb_:function(){return[[P.a,P.n],P.h]}},bW:{"^":"b;$ti"},b_:{"^":"kb;$ti"},ik:{"^":"bW;",
$asbW:function(){return[P.h,[P.a,P.n]]}},iE:{"^":"b;a,b,c,d,e",
i:function(a){return this.a}},iD:{"^":"b_;a",
hf:function(a,b,c){var z,y,x,w,v,u
for(z=this.a,y=z.e,x=z.d,z=z.c,w=b,v=null;w<c;++w){if(w>=a.length)return H.f(a,w)
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
default:u=null}if(u!=null){if(v==null)v=new P.al("")
if(w>b)v.a+=C.c.v(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.hO(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asb_:function(){return[P.h,P.h]}},kT:{"^":"ik;a",
gjP:function(){return C.T}},l_:{"^":"b_;",
bg:function(a,b,c){var z,y,x,w
z=a.length
P.b3(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.mq(0,0,x)
if(w.hq(a,b,z)!==z)w.e5(J.hG(a,z-1),0)
return new Uint8Array(x.subarray(0,H.mw(0,w.b,x.length)))},
cL:function(a){return this.bg(a,0,null)},
$asb_:function(){return[P.h,[P.a,P.n]]}},mq:{"^":"b;a,b,c",
e5:function(a,b){var z,y,x,w,v
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
hq:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.c.a3(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.c.J(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.e5(w,C.c.J(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},kU:{"^":"b_;a",
bg:function(a,b,c){var z,y,x,w,v
H.j(a,"$isa",[P.n],"$asa")
z=P.kV(!1,a,b,c)
if(z!=null)return z
y=J.au(a)
P.b3(b,c,y,null,null,null)
x=new P.al("")
w=new P.mn(!1,x,!0,0,0,0)
w.bg(a,b,y)
if(w.e>0){H.q(P.Y("Unfinished UTF-8 octet sequence",a,y))
x.a+=H.be(65533)
w.d=0
w.e=0
w.f=0}v=x.a
return v.charCodeAt(0)==0?v:v},
cL:function(a){return this.bg(a,0,null)},
$asb_:function(){return[[P.a,P.n],P.h]},
q:{
kV:function(a,b,c,d){H.j(b,"$isa",[P.n],"$asa")
if(b instanceof Uint8Array)return P.kW(!1,b,c,d)
return},
kW:function(a,b,c,d){var z,y,x
z=$.$get$fz()
if(z==null)return
y=0===c
if(y&&!0)return P.dE(z,b)
x=b.length
d=P.b3(c,d,x,null,null,null)
if(y&&d===x)return P.dE(z,b)
return P.dE(z,b.subarray(c,d))},
dE:function(a,b){if(P.kY(b))return
return P.kZ(a,b)},
kZ:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.a9(y)}return},
kY:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
kX:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.a9(y)}return}}},mn:{"^":"b;a,b,c,d,e,f",
bg:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.j(a,"$isa",[P.n],"$asa")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.mp(c)
v=new P.mo(this,b,c,a)
$label0$0:for(u=J.bs(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.k(a,s)
if(typeof r!=="number")return r.c4()
if((r&192)!==128){q=P.Y("Bad UTF-8 encoding 0x"+C.h.bq(r,16),a,s)
throw H.d(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.f(C.H,q)
if(z<=C.H[q]){q=P.Y("Overlong encoding of 0x"+C.h.bq(z,16),a,s-x-1)
throw H.d(q)}if(z>1114111){q=P.Y("Character outside valid Unicode range: 0x"+C.h.bq(z,16),a,s-x-1)
throw H.d(q)}if(!this.c||z!==65279)t.a+=H.be(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.dn()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.k(a,o)
if(typeof r!=="number")return r.T()
if(r<0){m=P.Y("Negative UTF-8 code unit: -0x"+C.h.bq(-r,16),a,n-1)
throw H.d(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.Y("Bad UTF-8 encoding 0x"+C.h.bq(r,16),a,n-1)
throw H.d(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},mp:{"^":"m:47;a",
$2:function(a,b){var z,y,x,w
H.j(a,"$isa",[P.n],"$asa")
z=this.a
for(y=J.bs(a),x=b;x<z;++x){w=y.k(a,x)
if(typeof w!=="number")return w.c4()
if((w&127)!==w)return x-b}return z-b}},mo:{"^":"m:45;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.c8(this.d,a,b)}}}],["","",,P,{"^":"",
cf:function(a,b,c){var z
H.l(b,{func:1,ret:P.n,args:[P.h]})
z=H.jE(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.d(P.Y(a,null,null))},
im:function(a){if(a instanceof H.m)return a.i(0)
return"Instance of '"+H.bd(a)+"'"},
j_:function(a,b,c,d){var z,y
H.x(b,d)
z=J.iJ(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.p(z,y,b)
return H.j(z,"$isa",[d],"$asa")},
j0:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gV(a);x.G();)C.a.h(y,H.x(x.gL(),c))
if(b)return y
return H.j(J.ct(y),"$isa",z,"$asa")},
c8:function(a,b,c){var z,y
z=P.n
H.j(a,"$iso",[z],"$aso")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.j(a,"$isb9",[z],"$asb9")
y=a.length
c=P.b3(b,c,y,null,null,null)
return H.eX(b>0||c<y?C.a.fA(a,b,c):a)}if(!!J.O(a).$iseO)return H.jG(a,b,P.b3(b,c,a.length,null,null,null))
return P.ke(a,b,c)},
ke:function(a,b,c){var z,y,x,w
H.j(a,"$iso",[P.n],"$aso")
if(b<0)throw H.d(P.a2(b,0,J.au(a),null,null))
z=c==null
if(!z&&c<b)throw H.d(P.a2(c,b,J.au(a),null,null))
y=J.b6(a)
for(x=0;x<b;++x)if(!y.G())throw H.d(P.a2(b,0,x,null,null))
w=[]
if(z)for(;y.G();)w.push(y.gL())
else for(x=b;x<c;++x){if(!y.G())throw H.d(P.a2(c,b,x,null,null))
w.push(y.gL())}return H.eX(w)},
jP:function(a,b,c){return new H.iL(a,H.iM(a,!1,!0,!1))},
fw:function(){var z=H.jw()
if(z!=null)return P.kL(z,0,null)
throw H.d(P.X("'Uri.base' is not supported"))},
cn:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ag(a)
if(typeof a==="string")return JSON.stringify(a)
return P.im(a)},
r:function(a){return new P.fQ(a)},
j1:function(a,b,c,d){var z,y
H.l(b,{func:1,ret:d,args:[P.n]})
z=H.c([],[d])
C.a.sn(z,a)
for(y=0;y<a;++y)C.a.p(z,y,b.$1(y))
return z},
e0:function(a){H.nv(a)},
kL:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.c.J(a,b+4)^58)*3|C.c.J(a,b)^100|C.c.J(a,b+1)^97|C.c.J(a,b+2)^116|C.c.J(a,b+3)^97)>>>0
if(y===0)return P.fv(b>0||c<c?C.c.v(a,b,c):a,5,null).gfa()
else if(y===32)return P.fv(C.c.v(a,z,c),0,null).gfa()}x=new Array(8)
x.fixed$length=Array
w=H.c(x,[P.n])
C.a.p(w,0,0)
x=b-1
C.a.p(w,1,x)
C.a.p(w,2,x)
C.a.p(w,7,x)
C.a.p(w,3,b)
C.a.p(w,4,b)
C.a.p(w,5,c)
C.a.p(w,6,c)
if(P.hf(a,b,c,0,w)>=14)C.a.p(w,7,c)
v=w[1]
if(typeof v!=="number")return v.kR()
if(v>=b)if(P.hf(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.D()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.T()
if(typeof r!=="number")return H.B(r)
if(q<r)r=q
if(typeof s!=="number")return s.T()
if(s<u)s=r
else if(s<=v)s=v+1
if(typeof t!=="number")return t.T()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.T()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.c.ac(a,"..",s)))n=r>s+2&&C.c.ac(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.c.ac(a,"file",b)){if(u<=b){if(!C.c.ac(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.c.v(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.c.b4(a,s,r,"/");++r;++q;++c}else{a=C.c.v(a,b,s)+"/"+C.c.v(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.c.ac(a,"http",b)){if(x&&t+3===s&&C.c.ac(a,"80",t+1))if(b===0&&!0){a=C.c.b4(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.c.v(a,b,t)+C.c.v(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.c.ac(a,"https",b)){if(x&&t+4===s&&C.c.ac(a,"443",t+1))if(b===0&&!0){a=C.c.b4(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.c.v(a,b,t)+C.c.v(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.c.v(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.lS(a,v,u,t,s,r,q,o)}return P.m6(a,b,c,v,u,t,s,r,q,o)},
fy:function(a,b){var z=P.h
return C.a.jX(H.c(a.split("&"),[z]),P.eG(z,z),new P.kO(b),[P.H,P.h,P.h])},
kJ:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.kK(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.c.a3(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.cf(C.c.v(a,v,w),null,null)
if(typeof s!=="number")return s.dn()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.f(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.cf(C.c.v(a,v,c),null,null)
if(typeof s!=="number")return s.dn()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.f(y,u)
y[u]=s
return y},
fx:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.kM(a)
y=new P.kN(z,a)
if(a.length<2)z.$1("address is too short")
x=H.c([],[P.n])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.c.a3(a,w)
if(s===58){if(w===b){++w
if(C.c.a3(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaA(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.kJ(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.f(o,l)
o[l]=0
i=l+1
if(i>=n)return H.f(o,i)
o[i]=0
l+=2}else{i=C.h.aS(k,8)
if(l<0||l>=n)return H.f(o,l)
o[l]=i
i=l+1
if(i>=n)return H.f(o,i)
o[i]=k&255
l+=2}}return o},
mx:function(){var z,y,x,w,v
z=P.j1(22,new P.mz(),!0,P.P)
y=new P.my(z)
x=new P.mA()
w=new P.mB()
v=H.e(y.$2(0,225),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(14,225),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(15,225),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(1,225),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(2,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(3,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(4,229),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(5,229),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(6,231),"$isP")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(7,231),"$isP")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.e(y.$2(8,8),"$isP"),"]",5)
v=H.e(y.$2(9,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(16,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(17,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(10,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(18,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(19,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(11,235),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(12,236),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.e(y.$2(13,237),"$isP")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.e(y.$2(20,245),"$isP"),"az",21)
v=H.e(y.$2(21,245),"$isP")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
hf:function(a,b,c,d,e){var z,y,x,w,v
H.j(e,"$isa",[P.n],"$asa")
z=$.$get$hg()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.f(z,d)
x=z[d]
w=C.c.J(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.f(x,w)
v=x[w]
d=v&31
C.a.p(e,v>>>5,y)}return d},
N:{"^":"b;"},
"+bool":0,
ao:{"^":"b;a,b",
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.ao))return!1
return this.a===b.a&&!0},
ga_:function(a){var z=this.a
return(z^C.h.aS(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.i8(H.jD(this))
y=P.bX(H.jB(this))
x=P.bX(H.jx(this))
w=P.bX(H.jy(this))
v=P.bX(H.jA(this))
u=P.bX(H.jC(this))
t=P.i9(H.jz(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
q:{
i8:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
i9:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bX:function(a){if(a>=10)return""+a
return"0"+a}}},
t:{"^":"am;"},
"+double":0,
by:{"^":"b;a",
T:function(a,b){return C.h.T(this.a,H.e(b,"$isby").a)},
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.by))return!1
return this.a===b.a},
ga_:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.ig()
y=this.a
if(y<0)return"-"+new P.by(0-y).i(0)
x=z.$1(C.h.a7(y,6e7)%60)
w=z.$1(C.h.a7(y,1e6)%60)
v=new P.ie().$1(y%1e6)
return""+C.h.a7(y,36e8)+":"+H.i(x)+":"+H.i(w)+"."+H.i(v)},
q:{
es:function(a,b,c,d,e,f){return new P.by(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
ie:{"^":"m:21;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
ig:{"^":"m:21;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a5:{"^":"b;"},
eR:{"^":"a5;",
i:function(a){return"Throw of null."}},
aJ:{"^":"a5;a,b,c,d",
gcd:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gcc:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.i(z)
w=this.gcd()+y+x
if(!this.a)return w
v=this.gcc()
u=P.cn(this.b)
return w+v+": "+H.i(u)},
q:{
bV:function(a){return new P.aJ(!1,null,null,a)},
cX:function(a,b,c){return new P.aJ(!0,a,b,c)}}},
cy:{"^":"aJ;e,f,a,b,c,d",
gcd:function(){return"RangeError"},
gcc:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.i(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.i(z)
else if(x>z)y=": Not in range "+H.i(z)+".."+H.i(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.i(z)}return y},
q:{
c7:function(a,b,c){return new P.cy(null,null,!0,a,b,"Value not in range")},
a2:function(a,b,c,d,e){return new P.cy(b,c,!0,a,d,"Invalid value")},
b3:function(a,b,c,d,e,f){if(typeof a!=="number")return H.B(a)
if(0>a||a>c)throw H.d(P.a2(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.d(P.a2(b,a,c,"end",f))
return b}return c}}},
iF:{"^":"aJ;e,n:f>,a,b,c,d",
gcd:function(){return"RangeError"},
gcc:function(){if(J.hC(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.i(z)},
q:{
b8:function(a,b,c,d,e){var z=H.ad(e!=null?e:J.au(b))
return new P.iF(b,z,!0,a,c,"Index out of range")}}},
kH:{"^":"a5;a",
i:function(a){return"Unsupported operation: "+this.a},
q:{
X:function(a){return new P.kH(a)}}},
kE:{"^":"a5;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
cE:function(a){return new P.kE(a)}}},
dl:{"^":"a5;a",
i:function(a){return"Bad state: "+this.a},
q:{
f5:function(a){return new P.dl(a)}}},
i1:{"^":"a5;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.i(P.cn(z))+"."},
q:{
aK:function(a){return new P.i1(a)}}},
jr:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa5:1},
f4:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa5:1},
i6:{"^":"a5;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fQ:{"^":"b;a",
i:function(a){return"Exception: "+this.a}},
iu:{"^":"b;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.i(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.c.v(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.c.J(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.c.a3(w,s)
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
m=""}l=C.c.v(w,o,p)
return y+n+l+m+"\n"+C.c.u(" ",x-o+n.length)+"^\n"},
q:{
Y:function(a,b,c){return new P.iu(a,b,c)}}},
bY:{"^":"b;"},
n:{"^":"am;"},
"+int":0,
o:{"^":"b;$ti",
dg:["fC",function(a,b){var z=H.a7(this,"o",0)
return new H.dH(this,H.l(b,{func:1,ret:P.N,args:[z]}),[z])}],
gn:function(a){var z,y
z=this.gV(this)
for(y=0;z.G();)++y
return y},
gaJ:function(a){var z,y
z=this.gV(this)
if(!z.G())throw H.d(H.cs())
y=z.gL()
if(z.G())throw H.d(H.iI())
return y},
a9:function(a,b){var z,y,x
if(b<0)H.q(P.a2(b,0,null,"index",null))
for(z=this.gV(this),y=0;z.G();){x=z.gL()
if(b===y)return x;++y}throw H.d(P.b8(b,this,"index",null,y))},
i:function(a){return P.iH(this,"(",")")}},
b1:{"^":"b;$ti"},
a:{"^":"b;$ti",$iso:1},
"+List":0,
H:{"^":"b;$ti"},
F:{"^":"b;",
ga_:function(a){return P.b.prototype.ga_.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
am:{"^":"b;"},
"+num":0,
b:{"^":";",
w:function(a,b){return this===b},
ga_:function(a){return H.bG(this)},
i:function(a){return"Instance of '"+H.bd(this)+"'"},
toString:function(){return this.i(this)}},
aP:{"^":"b;"},
h:{"^":"b;",$iseS:1},
"+String":0,
al:{"^":"b;aO:a<",
gn:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$iso_:1,
q:{
f6:function(a,b,c){var z=J.b6(b)
if(!z.G())return a
if(c.length===0){do a+=H.i(z.gL())
while(z.G())}else{a+=H.i(z.gL())
for(;z.G();)a=a+c+H.i(z.gL())}return a}}},
kO:{"^":"m:44;a",
$2:function(a,b){var z,y,x,w
z=P.h
H.j(a,"$isH",[z,z],"$asH")
H.D(b)
y=J.bT(b).eN(b,"=")
if(y===-1){if(b!=="")a.p(0,P.dM(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.c.v(b,0,y)
w=C.c.ar(b,y+1)
z=this.a
a.p(0,P.dM(x,0,x.length,z,!0),P.dM(w,0,w.length,z,!0))}return a}},
kK:{"^":"m:43;a",
$2:function(a,b){throw H.d(P.Y("Illegal IPv4 address, "+a,this.a,b))}},
kM:{"^":"m:42;a",
$2:function(a,b){throw H.d(P.Y("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
kN:{"^":"m:41;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.cf(C.c.v(this.b,a,b),null,16)
if(typeof z!=="number")return z.T()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cJ:{"^":"b;c7:a<,b,c,d,eZ:e>,f,r,0x,0y,0z,0Q,0ch",
sia:function(a){var z=P.h
this.Q=H.j(a,"$isH",[z,z],"$asH")},
gfc:function(){return this.b},
gcX:function(a){var z=this.c
if(z==null)return""
if(C.c.a5(z,"["))return C.c.v(z,1,z.length-1)
return z},
gbY:function(a){var z=this.d
if(z==null)return P.h3(this.a)
return z},
gd7:function(){var z=this.f
return z==null?"":z},
geI:function(){var z=this.r
return z==null?"":z},
da:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.j(h,"$isH",[P.h,null],"$asH")
i=this.a
z=i==="file"
j=this.b
f=this.d
y=this.c
if(y!=null)c=y
else if(j.length!==0||f!=null||z)c=""
d=this.e
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.c.a5(d,"/"))d="/"+d
g=P.dL(g,0,0,h)
return new P.cJ(i,j,c,f,d,g,this.r)},
f2:function(a,b){return this.da(a,null,null,null,null,null,null,b,null,null)},
gd8:function(){var z,y
if(this.Q==null){z=this.f
y=P.h
this.sia(new P.fu(P.fy(z==null?"":z,C.m),[y,y]))}return this.Q},
geJ:function(){return this.c!=null},
geM:function(){return this.f!=null},
geK:function(){return this.r!=null},
i:function(a){var z,y,x,w
z=this.y
if(z==null){z=this.a
y=z.length!==0?H.i(z)+":":""
x=this.c
w=x==null
if(!w||z==="file"){z=y+"//"
y=this.b
if(y.length!==0)z=z+H.i(y)+"@"
if(!w)z+=x
y=this.d
if(y!=null)z=z+":"+H.i(y)}else z=y
z+=this.e
y=this.f
if(y!=null)z=z+"?"+y
y=this.r
if(y!=null)z=z+"#"+y
z=z.charCodeAt(0)==0?z:z
this.y=z}return z},
w:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!!J.O(b).$isdD){if(this.a==b.gc7())if(this.c!=null===b.geJ())if(this.b==b.gfc())if(this.gcX(this)==b.gcX(b))if(this.gbY(this)==b.gbY(b))if(this.e===b.geZ(b)){z=this.f
y=z==null
if(!y===b.geM()){if(y)z=""
if(z===b.gd7()){z=this.r
y=z==null
if(!y===b.geK()){if(y)z=""
z=z===b.geI()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
return z}return!1},
ga_:function(a){var z=this.z
if(z==null){z=C.c.ga_(this.i(0))
this.z=z}return z},
$isdD:1,
q:{
cc:function(a,b,c,d){var z,y,x,w,v,u
H.j(a,"$isa",[P.n],"$asa")
if(c===C.m){z=$.$get$h8().b
if(typeof b!=="string")H.q(H.ai(b))
z=z.test(b)}else z=!1
if(z)return b
H.x(b,H.a7(c,"bW",0))
y=c.gjP().cL(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.f(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.be(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
m6:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.mh(a,b,d)
else{if(d===b)P.bM(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.mi(a,z,e-1):""
x=P.mb(a,e,f,!1)
if(typeof f!=="number")return f.D()
w=f+1
if(typeof g!=="number")return H.B(g)
v=w<g?P.me(P.cf(C.c.v(a,w,g),new P.m7(a,f),null),j):null}else{y=""
x=null
v=null}u=P.mc(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.T()
t=h<i?P.dL(a,h+1,i,null):null
return new P.cJ(j,y,x,v,u,t,i<c?P.ma(a,i+1,c):null)},
h3:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bM:function(a,b,c){throw H.d(P.Y(c,a,b))},
me:function(a,b){if(a!=null&&a===P.h3(b))return
return a},
mb:function(a,b,c,d){var z,y
if(b===c)return""
if(C.c.a3(a,b)===91){if(typeof c!=="number")return c.M()
z=c-1
if(C.c.a3(a,z)!==93)P.bM(a,b,"Missing end `]` to match `[` in host")
P.fx(a,b+1,z)
return C.c.v(a,b,c).toLowerCase()}if(typeof c!=="number")return H.B(c)
y=b
for(;y<c;++y)if(C.c.a3(a,y)===58){P.fx(a,b,c)
return"["+a+"]"}return P.mk(a,b,c)},
mk:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.B(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.c.a3(a,z)
if(v===37){u=P.ha(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.al("")
s=C.c.v(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.c.v(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.f(C.K,t)
t=(C.K[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.al("")
if(y<z){x.a+=C.c.v(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.f(C.t,t)
t=(C.t[t]&1<<(v&15))!==0}else t=!1
if(t)P.bM(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.c.a3(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.al("")
s=C.c.v(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.h4(v)
z+=q
y=z}}}}if(x==null)return C.c.v(a,b,c)
if(y<c){s=C.c.v(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
mh:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.h6(C.c.J(a,b)))P.bM(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.c.J(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.f(C.v,w)
w=(C.v[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bM(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.c.v(a,b,c)
return P.m8(y?a.toLowerCase():a)},
m8:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mi:function(a,b,c){return P.bN(a,b,c,C.a9,!1)},
mc:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bN(a,b,c,C.L,!0):C.r.lu(d,new P.md(),P.h).l(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.c.a5(w,"/"))w="/"+w
return P.mj(w,e,f)},
mj:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.c.a5(a,"/"))return P.ml(a,!z||c)
return P.mm(a)},
dL:function(a,b,c,d){var z,y
z={}
H.j(d,"$isH",[P.h,null],"$asH")
if(a!=null){if(d!=null)throw H.d(P.bV("Both query and queryParameters specified"))
return P.bN(a,b,c,C.u,!0)}if(d==null)return
y=new P.al("")
z.a=""
d.a1(0,new P.mf(new P.mg(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
ma:function(a,b,c){return P.bN(a,b,c,C.u,!0)},
ha:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.c.a3(a,b+1)
x=C.c.a3(a,z)
w=H.cP(y)
v=H.cP(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.h.aS(u,4)
if(z>=8)return H.f(C.w,z)
z=(C.w[z]&1<<(u&15))!==0}else z=!1
if(z)return H.be(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.c.v(a,b,b+3).toUpperCase()
return},
h4:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.c(z,[P.n])
C.a.p(y,0,37)
C.a.p(y,1,C.c.J("0123456789ABCDEF",a>>>4))
C.a.p(y,2,C.c.J("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.c(z,[P.n])
for(v=0;--w,w>=0;x=128){u=C.h.iA(a,6*w)&63|x
C.a.p(y,v,37)
C.a.p(y,v+1,C.c.J("0123456789ABCDEF",u>>>4))
C.a.p(y,v+2,C.c.J("0123456789ABCDEF",u&15))
v+=3}}return P.c8(y,0,null)},
bN:function(a,b,c,d,e){var z=P.h9(a,b,c,H.j(d,"$isa",[P.n],"$asa"),e)
return z==null?C.c.v(a,b,c):z},
h9:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.j(d,"$isa",[P.n],"$asa")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.T()
if(typeof c!=="number")return H.B(c)
if(!(y<c))break
c$0:{v=C.c.a3(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.f(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.ha(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.f(C.t,u)
u=(C.t[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bM(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.c.a3(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.h4(v)}}if(w==null)w=new P.al("")
w.a+=C.c.v(a,x,y)
w.a+=H.i(t)
if(typeof s!=="number")return H.B(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.T()
if(x<c)w.a+=C.c.v(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
h7:function(a){if(C.c.a5(a,"."))return!0
return C.c.eN(a,"/.")!==-1},
mm:function(a){var z,y,x,w,v,u,t
if(!P.h7(a))return a
z=H.c([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.E(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.f(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.l(z,"/")},
ml:function(a,b){var z,y,x,w,v,u
if(!P.h7(a))return!b?P.h5(a):a
z=H.c([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaA(z)!==".."){if(0>=z.length)return H.f(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.f(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaA(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.f(z,0)
C.a.p(z,0,P.h5(z[0]))}return C.a.l(z,"/")},
h5:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.h6(J.hF(a,0)))for(y=1;y<z;++y){x=C.c.J(a,y)
if(x===58)return C.c.v(a,0,y)+"%3A"+C.c.ar(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.f(C.v,w)
w=(C.v[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
m9:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.c.J(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.d(P.bV("Invalid URL encoding"))}}return z},
dM:function(a,b,c,d,e){var z,y,x,w,v
y=b
while(!0){if(!(y<c)){z=!0
break}x=C.c.J(a,y)
if(x<=127)if(x!==37)w=x===43
else w=!0
else w=!0
if(w){z=!1
break}++y}if(z){if(C.m!==d)w=!1
else w=!0
if(w)return C.c.v(a,b,c)
else v=new H.v(C.c.v(a,b,c))}else{v=H.c([],[P.n])
for(w=a.length,y=b;y<c;++y){x=C.c.J(a,y)
if(x>127)throw H.d(P.bV("Illegal percent encoding in URI"))
if(x===37){if(y+3>w)throw H.d(P.bV("Truncated URI"))
C.a.h(v,P.m9(a,y+1))
y+=2}else if(x===43)C.a.h(v,32)
else C.a.h(v,x)}}H.j(v,"$isa",[P.n],"$asa")
return new P.kU(!1).cL(v)},
h6:function(a){var z=a|32
return 97<=z&&z<=122}}},
m7:{"^":"m:40;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.D()
throw H.d(P.Y("Invalid port",this.a,z+1))}},
md:{"^":"m:15;",
$1:function(a){return P.cc(C.aa,a,C.m,!1)}},
mg:{"^":"m:38;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.i(P.cc(C.w,a,C.m,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.i(P.cc(C.w,b,C.m,!0))}}},
mf:{"^":"m:35;a",
$2:function(a,b){var z,y
H.D(a)
if(b==null||typeof b==="string")this.a.$2(a,H.D(b))
else for(z=J.b6(H.hu(b,"$iso")),y=this.a;z.G();)y.$2(a,H.D(z.gL()))}},
kI:{"^":"b;a,b,c",
gfa:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
z=z[0]+1
x=C.c.eO(y,"?",z)
w=y.length
if(x>=0){v=P.bN(y,x+1,w,C.u,!1)
w=x}else v=null
z=new P.ll(this,"data",null,null,null,P.bN(y,z,w,C.L,!1),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
q:{
fv:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.c([b-1],[P.n])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.c.J(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.d(P.Y("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.d(P.Y("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.c.J(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaA(z)
if(v!==44||x!==t+7||!C.c.ac(a,"base64",t+1))throw H.d(P.Y("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.Q.kd(a,s,y)
else{r=P.h9(a,s,y,C.u,!0)
if(r!=null)a=C.c.b4(a,s,y,r)}return new P.kI(a,z,c)}}},
mz:{"^":"m:34;",
$1:function(a){return new Uint8Array(96)}},
my:{"^":"m:33;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.f(z,a)
z=z[a]
J.hH(z,0,96,b)
return z}},
mA:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.c.J(b,y)^96
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
mB:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=C.c.J(b,0),y=C.c.J(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
lS:{"^":"b;a,b,c,d,e,f,r,x,0y",
geJ:function(){return this.c>0},
geL:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.D()
y=this.e
if(typeof y!=="number")return H.B(y)
y=z+1<y
z=y}else z=!1
return z},
geM:function(){var z=this.f
if(typeof z!=="number")return z.T()
return z<this.r},
geK:function(){return this.r<this.a.length},
gdS:function(){return this.b===4&&C.c.a5(this.a,"http")},
gdT:function(){return this.b===5&&C.c.a5(this.a,"https")},
gc7:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdS()){this.x="http"
z="http"}else if(this.gdT()){this.x="https"
z="https"}else if(z===4&&C.c.a5(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.c.a5(this.a,"package")){this.x="package"
z="package"}else{z=C.c.v(this.a,0,z)
this.x=z}return z},
gfc:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.c.v(this.a,y,z-1):""},
gcX:function(a){var z=this.c
return z>0?C.c.v(this.a,z,this.d):""},
gbY:function(a){var z
if(this.geL()){z=this.d
if(typeof z!=="number")return z.D()
return P.cf(C.c.v(this.a,z+1,this.e),null,null)}if(this.gdS())return 80
if(this.gdT())return 443
return 0},
geZ:function(a){return C.c.v(this.a,this.e,this.f)},
gd7:function(){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.T()
return z<y?C.c.v(this.a,z+1,y):""},
geI:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.c.ar(y,z+1):""},
gd8:function(){var z=this.f
if(typeof z!=="number")return z.T()
if(z>=this.r)return C.ab
z=P.h
return new P.fu(P.fy(this.gd7(),C.m),[z,z])},
da:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.j(h,"$isH",[P.h,null],"$asH")
i=this.gc7()
z=i==="file"
y=this.c
j=y>0?C.c.v(this.a,this.b+3,y):""
f=this.geL()?this.gbY(this):null
y=this.c
if(y>0)c=C.c.v(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.c.v(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.c.a5(d,"/"))d="/"+d
g=P.dL(g,0,0,h)
x=this.r
if(x<y.length)b=C.c.ar(y,x+1)
return new P.cJ(i,j,c,f,d,g,b)},
f2:function(a,b){return this.da(a,null,null,null,null,null,null,b,null,null)},
ga_:function(a){var z=this.y
if(z==null){z=C.c.ga_(this.a)
this.y=z}return z},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!!J.O(b).$isdD)return this.a===b.i(0)
return!1},
i:function(a){return this.a},
$isdD:1},
ll:{"^":"cJ;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
e6:function(a){var z=document.createElement("a")
return z},
d1:function(a,b){var z=document.createElement("canvas")
return z},
ih:function(a,b,c){var z,y
z=document.body
y=(z&&C.p).am(z,a,b,c)
y.toString
z=W.C
z=new H.dH(new W.as(y),H.l(new W.ii(),{func:1,ret:P.N,args:[z]}),[z])
return H.e(z.gaJ(z),"$isQ")},
ij:function(a){H.e(a,"$isco")
return"wheel"},
bz:function(a){var z,y,x
z="element tag unavailable"
try{y=J.hK(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a9(x)}return z},
iG:function(a){var z,y,x
y=document.createElement("input")
z=H.e(y,"$isez")
try{J.hM(z,a)}catch(x){H.a9(x)}return z},
cG:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fU:function(a,b,c,d){var z,y
z=W.cG(W.cG(W.cG(W.cG(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
hj:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.S
if(z===C.l)return a
return z.ec(a,b)},
a4:{"^":"Q;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
hQ:{"^":"a4;",
i:function(a){return String(a)},
$ishQ:1,
"%":"HTMLAnchorElement"},
nH:{"^":"a4;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
e9:{"^":"a4;",$ise9:1,"%":"HTMLBaseElement"},
cj:{"^":"a4;",$iscj:1,"%":"HTMLBodyElement"},
d0:{"^":"a4;",
c5:function(a,b,c){if(c!=null)return this.hr(a,b,P.mN(c,null))
return this.hs(a,b)},
fk:function(a,b){return this.c5(a,b,null)},
hr:function(a,b,c){return a.getContext(b,c)},
hs:function(a,b){return a.getContext(b)},
$isd0:1,
$iseg:1,
"%":"HTMLCanvasElement"},
d2:{"^":"G;",
ht:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
jM:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$isd2:1,
"%":"CanvasRenderingContext2D"},
nK:{"^":"C;0n:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
nM:{"^":"lk;0n:length=",
fm:function(a,b){var z=this.hu(a,this.ha(a,b))
return z==null?"":z},
ha:function(a,b){var z,y
z=$.$get$el()
y=z[b]
if(typeof y==="string")return y
y=this.iD(a,b)
z[b]=y
return y},
iD:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.ia()+b
if(z in a)return z
return b},
hu:function(a,b){return a.getPropertyValue(b)},
gcG:function(a){return a.bottom},
gbj:function(a){return a.height},
gb_:function(a){return a.left},
gbo:function(a){return a.right},
gbr:function(a){return a.top},
gbt:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
i5:{"^":"b;",
gb_:function(a){return this.fm(a,"left")}},
b0:{"^":"a4;",$isb0:1,"%":"HTMLDivElement"},
ib:{"^":"C;",
ji:function(a,b){return a.adoptNode(b)},
dl:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
nN:{"^":"G;",
i:function(a){return String(a)},
"%":"DOMException"},
ic:{"^":"G;",
jB:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
id:{"^":"G;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
w:function(a,b){var z
if(b==null)return!1
if(!H.bS(b,"$isaO",[P.am],"$asaO"))return!1
z=J.Z(b)
return a.left===z.gb_(b)&&a.top===z.gbr(b)&&a.width===z.gbt(b)&&a.height===z.gbj(b)},
ga_:function(a){return W.fU(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gcG:function(a){return a.bottom},
gbj:function(a){return a.height},
gb_:function(a){return a.left},
gbo:function(a){return a.right},
gbr:function(a){return a.top},
gbt:function(a){return a.width},
$isaO:1,
$asaO:function(){return[P.am]},
"%":";DOMRectReadOnly"},
lj:{"^":"cu;dN:a<,b",
gn:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.f(z,b)
return H.e(z[b],"$isQ")},
p:function(a,b,c){var z
H.e(c,"$isQ")
z=this.b
if(b<0||b>=z.length)return H.f(z,b)
J.cU(this.a,c,z[b])},
h:function(a,b){J.e3(this.a,b)
return b},
gV:function(a){var z=this.dd(this)
return new J.az(z,z.length,0,[H.u(z,0)])},
$asW:function(){return[W.Q]},
$aso:function(){return[W.Q]},
$asa:function(){return[W.Q]}},
Q:{"^":"C;0kG:tagName=",
gjl:function(a){return new W.lm(a)},
gcK:function(a){return new W.lj(a,a.children)},
gef:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.T()
if(x<0)x=-x*0
if(typeof w!=="number")return w.T()
if(w<0)w=-w*0
return new P.aO(z,y,x,w,[P.am])},
i:function(a){return a.localName},
am:["c8",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.ev
if(z==null){z=H.c([],[W.aG])
y=new W.eP(z)
C.a.h(z,W.fS(null))
C.a.h(z,W.h0())
$.ev=y
d=y}else d=z
z=$.eu
if(z==null){z=new W.hb(d)
$.eu=z
c=z}else{z.a=d
c=z}}if($.aL==null){z=document
y=z.implementation
y=(y&&C.U).jB(y,"")
$.aL=y
$.d5=y.createRange()
y=$.aL
y.toString
y=y.createElement("base")
H.e(y,"$ise9")
y.href=z.baseURI
z=$.aL.head;(z&&C.W).F(z,y)}z=$.aL
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.e(y,"$iscj")}z=$.aL
if(!!this.$iscj)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.aL.body;(z&&C.p).F(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.Z(C.a8,a.tagName)){z=$.d5;(z&&C.N).fs(z,x)
z=$.d5
w=(z&&C.N).jz(z,b)}else{x.innerHTML=b
w=$.aL.createDocumentFragment()
for(z=J.Z(w);y=x.firstChild,y!=null;)z.F(w,y)}z=$.aL.body
if(x==null?z!=null:x!==z)J.e5(x)
c.dq(w)
C.z.ji(document,w)
return w},function(a,b,c){return this.am(a,b,c,null)},"jA",null,null,"glr",5,5,null],
fv:function(a,b,c,d){a.textContent=null
this.F(a,this.am(a,b,c,d))},
fu:function(a,b){return this.fv(a,b,null,null)},
b7:function(a,b){return a.getAttribute(b)},
ic:function(a,b){return a.removeAttribute(b)},
ft:function(a,b,c){return a.setAttribute(b,c)},
$isQ:1,
"%":";Element"},
ii:{"^":"m:23;",
$1:function(a){return!!J.O(H.e(a,"$isC")).$isQ}},
aa:{"^":"G;",$isaa:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
co:{"^":"G;",
h5:function(a,b,c,d){return a.addEventListener(b,H.bp(H.l(c,{func:1,args:[W.aa]}),1),!1)},
$isco:1,
"%":";EventTarget"},
nO:{"^":"a4;0n:length=","%":"HTMLFormElement"},
iz:{"^":"a4;","%":"HTMLHeadElement"},
iA:{"^":"G;0n:length=",
ik:function(a,b,c,d){return a.replaceState(b,c,d)},
"%":"History"},
iB:{"^":"lC;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.b8(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.e(c,"$isC")
throw H.d(P.X("Cannot assign element of immutable List."))},
a9:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isav:1,
$asav:function(){return[W.C]},
$asW:function(){return[W.C]},
$iso:1,
$aso:function(){return[W.C]},
$isa:1,
$asa:function(){return[W.C]},
$isiB:1,
$asaC:function(){return[W.C]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
iC:{"^":"ib;","%":"HTMLDocument"},
bZ:{"^":"G;0eg:data=",$isbZ:1,"%":"ImageData"},
ey:{"^":"a4;",$isey:1,$iseg:1,"%":"HTMLImageElement"},
ez:{"^":"a4;0type",
skN:function(a,b){a.type=H.D(b)},
$isez:1,
"%":"HTMLInputElement"},
bC:{"^":"dt;",$isbC:1,"%":"KeyboardEvent"},
iP:{"^":"a4;","%":"HTMLLabelElement"},
j2:{"^":"G;",
i:function(a){return String(a)},
$isj2:1,
"%":"Location"},
ji:{"^":"a4;","%":"HTMLAudioElement;HTMLMediaElement"},
aw:{"^":"dt;",$isaw:1,"%":"PointerEvent;DragEvent|MouseEvent"},
as:{"^":"cu;a",
gaJ:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.d(P.f5("No elements"))
if(y>1)throw H.d(P.f5("More than one element"))
return z.firstChild},
av:function(a,b){var z,y,x,w,v
H.j(b,"$iso",[W.C],"$aso")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.Z(y),v=0;v<x;++v)w.F(y,z.firstChild)
return},
p:function(a,b,c){var z,y
H.e(c,"$isC")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.f(y,b)
J.cU(z,c,y[b])},
gV:function(a){var z=this.a.childNodes
return new W.ew(z,z.length,-1,[H.ce(C.ac,z,"aC",0)])},
gn:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
$asW:function(){return[W.C]},
$aso:function(){return[W.C]},
$asa:function(){return[W.C]}},
C:{"^":"co;0ks:previousSibling=",
ku:function(a){var z=a.parentNode
if(z!=null)J.ch(z,a)},
kz:function(a,b){var z,y
try{z=a.parentNode
J.cU(z,b,a)}catch(y){H.a9(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.fB(a):z},
F:function(a,b){return a.appendChild(H.e(b,"$isC"))},
ie:function(a,b){return a.removeChild(b)},
ij:function(a,b,c){return a.replaceChild(b,c)},
$isC:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
jm:{"^":"lI;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.b8(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.e(c,"$isC")
throw H.d(P.X("Cannot assign element of immutable List."))},
a9:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isav:1,
$asav:function(){return[W.C]},
$asW:function(){return[W.C]},
$iso:1,
$aso:function(){return[W.C]},
$isa:1,
$asa:function(){return[W.C]},
$asaC:function(){return[W.C]},
"%":"NodeList|RadioNodeList"},
jK:{"^":"G;",
jz:function(a,b){return a.createContextualFragment(b)},
fs:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
nY:{"^":"a4;0n:length=","%":"HTMLSelectElement"},
cA:{"^":"a4;",$iscA:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
kf:{"^":"a4;",
am:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.c8(a,b,c,d)
z=W.ih("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.as(y).av(0,new W.as(z))
return y},
hw:function(a,b){return a.insertRow(b)},
"%":"HTMLTableElement"},
kg:{"^":"a4;",
am:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.c8(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.o.am(z.createElement("table"),b,c,d)
z.toString
z=new W.as(z)
x=z.gaJ(z)
x.toString
z=new W.as(x)
w=z.gaJ(z)
y.toString
w.toString
new W.as(y).av(0,new W.as(w))
return y},
dR:function(a,b){return a.insertCell(b)},
"%":"HTMLTableRowElement"},
o0:{"^":"a4;",
am:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.c8(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.o.am(z.createElement("table"),b,c,d)
z.toString
z=new W.as(z)
x=z.gaJ(z)
y.toString
x.toString
new W.as(y).av(0,new W.as(x))
return y},
"%":"HTMLTableSectionElement"},
f9:{"^":"a4;",$isf9:1,"%":"HTMLTemplateElement"},
bg:{"^":"G;",$isbg:1,"%":"Touch"},
bh:{"^":"dt;",$isbh:1,"%":"TouchEvent"},
o2:{"^":"m3;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.b8(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.e(c,"$isbg")
throw H.d(P.X("Cannot assign element of immutable List."))},
a9:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isav:1,
$asav:function(){return[W.bg]},
$asW:function(){return[W.bg]},
$iso:1,
$aso:function(){return[W.bg]},
$isa:1,
$asa:function(){return[W.bg]},
$asaC:function(){return[W.bg]},
"%":"TouchList"},
dt:{"^":"aa;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
o5:{"^":"ji;",$iseg:1,"%":"HTMLVideoElement"},
bK:{"^":"aw;",
gjH:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.X("deltaY is not supported"))},
gjG:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.X("deltaX is not supported"))},
$isbK:1,
"%":"WheelEvent"},
lc:{"^":"co;",
im:function(a,b){return a.requestAnimationFrame(H.bp(H.l(b,{func:1,ret:-1,args:[P.am]}),1))},
hk:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fO:{"^":"C;",$isfO:1,"%":"Attr"},
oa:{"^":"id;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
w:function(a,b){var z
if(b==null)return!1
if(!H.bS(b,"$isaO",[P.am],"$asaO"))return!1
z=J.Z(b)
return a.left===z.gb_(b)&&a.top===z.gbr(b)&&a.width===z.gbt(b)&&a.height===z.gbj(b)},
ga_:function(a){return W.fU(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gbj:function(a){return a.height},
gbt:function(a){return a.width},
"%":"ClientRect|DOMRect"},
oe:{"^":"mu;",
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.b8(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.e(c,"$isC")
throw H.d(P.X("Cannot assign element of immutable List."))},
a9:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isav:1,
$asav:function(){return[W.C]},
$asW:function(){return[W.C]},
$iso:1,
$aso:function(){return[W.C]},
$isa:1,
$asa:function(){return[W.C]},
$asaC:function(){return[W.C]},
"%":"MozNamedAttrMap|NamedNodeMap"},
li:{"^":"eJ;dN:a<",
a1:function(a,b){var z,y,x,w,v,u
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(z=this.gaz(),y=z.length,x=this.a,w=J.Z(x),v=0;v<z.length;z.length===y||(0,H.z)(z),++v){u=z[v]
b.$2(u,w.b7(x,u))}},
gaz:function(){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.h])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
v=H.e(z[w],"$isfO")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$ascw:function(){return[P.h,P.h]},
$asH:function(){return[P.h,P.h]}},
lm:{"^":"li;a",
k:function(a,b){return J.cW(this.a,H.D(b))},
p:function(a,b,c){J.hN(this.a,b,c)},
gn:function(a){return this.gaz().length}},
ln:{"^":"ka;a,b,c,$ti"},
ob:{"^":"ln;a,b,c,$ti"},
lo:{"^":"dm;a,b,c,d,e,$ti",q:{
a3:function(a,b,c,d,e){var z,y
z=W.hj(new W.lp(c),W.aa)
y=z!=null
if(y&&!0){H.l(z,{func:1,args:[W.aa]})
if(y)J.hE(a,b,z,!1)}return new W.lo(0,a,b,z,!1,[e])}}},
lp:{"^":"m:31;a",
$1:function(a){return this.a.$1(H.e(a,"$isaa"))}},
cb:{"^":"b;a",
fQ:function(a){var z,y
z=$.$get$dJ()
if(z.gk7(z)){for(y=0;y<262;++y)z.p(0,C.a7[y],W.n3())
for(y=0;y<12;++y)z.p(0,C.B[y],W.n4())}},
aT:function(a){return $.$get$fT().Z(0,W.bz(a))},
aG:function(a,b,c){var z,y,x
z=W.bz(a)
y=$.$get$dJ()
x=y.k(0,H.i(z)+"::"+b)
if(x==null)x=y.k(0,"*::"+b)
if(x==null)return!1
return H.dR(x.$4(a,b,c,this))},
$isaG:1,
q:{
fS:function(a){var z,y
z=W.e6(null)
y=window.location
z=new W.cb(new W.lO(z,y))
z.fQ(a)
return z},
oc:[function(a,b,c,d){H.e(a,"$isQ")
H.D(b)
H.D(c)
H.e(d,"$iscb")
return!0},"$4","n3",16,0,16],
od:[function(a,b,c,d){var z,y,x
H.e(a,"$isQ")
H.D(b)
H.D(c)
z=H.e(d,"$iscb").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","n4",16,0,16]}},
aC:{"^":"b;$ti",
gV:function(a){return new W.ew(a,this.gn(a),-1,[H.ce(this,a,"aC",0)])}},
eP:{"^":"b;a",
aT:function(a){return C.a.e9(this.a,new W.jo(a))},
aG:function(a,b,c){return C.a.e9(this.a,new W.jn(a,b,c))},
$isaG:1},
jo:{"^":"m:25;a",
$1:function(a){return H.e(a,"$isaG").aT(this.a)}},
jn:{"^":"m:25;a,b,c",
$1:function(a){return H.e(a,"$isaG").aG(this.a,this.b,this.c)}},
lP:{"^":"b;",
h_:function(a,b,c,d){var z,y,x
this.a.av(0,c)
z=b.dg(0,new W.lQ())
y=b.dg(0,new W.lR())
this.b.av(0,z)
x=this.c
x.av(0,C.I)
x.av(0,y)},
aT:function(a){return this.a.Z(0,W.bz(a))},
aG:["fF",function(a,b,c){var z,y
z=W.bz(a)
y=this.c
if(y.Z(0,H.i(z)+"::"+b))return this.d.jj(c)
else if(y.Z(0,"*::"+b))return this.d.jj(c)
else{y=this.b
if(y.Z(0,H.i(z)+"::"+b))return!0
else if(y.Z(0,"*::"+b))return!0
else if(y.Z(0,H.i(z)+"::*"))return!0
else if(y.Z(0,"*::*"))return!0}return!1}],
$isaG:1},
lQ:{"^":"m:26;",
$1:function(a){return!C.a.Z(C.B,H.D(a))}},
lR:{"^":"m:26;",
$1:function(a){return C.a.Z(C.B,H.D(a))}},
lX:{"^":"lP;e,a,b,c,d",
aG:function(a,b,c){if(this.fF(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cW(a,"template")==="")return this.e.Z(0,b)
return!1},
q:{
h0:function(){var z,y,x,w,v
z=P.h
y=P.eH(C.A,z)
x=H.u(C.A,0)
w=H.l(new W.lY(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.lX(y,P.c3(null,null,null,z),P.c3(null,null,null,z),P.c3(null,null,null,z),null)
y.h_(null,new H.j8(C.A,w,[x,z]),v,null)
return y}}},
lY:{"^":"m:15;",
$1:function(a){return"TEMPLATE::"+H.i(H.D(a))}},
lW:{"^":"b;",
aT:function(a){var z=J.O(a)
if(!!z.$isf0)return!1
z=!!z.$isdn
if(z&&W.bz(a)==="foreignObject")return!1
if(z)return!0
return!1},
aG:function(a,b,c){if(b==="is"||C.c.a5(b,"on"))return!1
return this.aT(a)},
$isaG:1},
ew:{"^":"b;a,b,c,0d,$ti",
sdQ:function(a){this.d=H.x(a,H.u(this,0))},
G:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sdQ(J.hD(this.a,z))
this.c=z
return!0}this.sdQ(null)
this.c=y
return!1},
gL:function(){return this.d},
$isb1:1},
aG:{"^":"b;"},
lO:{"^":"b;a,b",$iso4:1},
hb:{"^":"b;a",
dq:function(a){new W.mr(this).$2(a,null)},
be:function(a,b){if(b==null)J.e5(a)
else J.ch(b,a)},
it:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.hI(a)
x=J.cW(y.gdN(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a9(t)}v="element unprintable"
try{v=J.ag(a)}catch(t){H.a9(t)}try{u=W.bz(a)
this.is(H.e(a,"$isQ"),b,z,v,u,H.e(y,"$isH"),H.D(x))}catch(t){if(H.a9(t) instanceof P.aJ)throw t
else{this.be(a,b)
window
s="Removing corrupted element "+H.i(v)
if(typeof console!="undefined")window.console.warn(s)}}},
is:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.be(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aT(a)){this.be(a,b)
window
z="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.aG(a,"is",g)){this.be(a,b)
window
z="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gaz()
y=H.c(z.slice(0),[H.u(z,0)])
for(x=f.gaz().length-1,z=f.a,w=J.Z(z);x>=0;--x){if(x>=y.length)return H.f(y,x)
v=y[x]
if(!this.a.aG(a,J.hP(v),w.b7(z,v))){window
u="Removing disallowed attribute <"+H.i(e)+" "+v+'="'+H.i(w.b7(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.b7(z,v)
w.ic(z,v)}}if(!!J.O(a).$isf9)this.dq(a.content)},
$isnW:1},
mr:{"^":"m:46;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.it(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.be(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.hJ(z)}catch(w){H.a9(w)
v=H.e(z,"$isC")
if(x){u=v.parentNode
if(u!=null)J.ch(u,v)}else J.ch(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.e(y,"$isC")}}},
lk:{"^":"G+i5;"},
lB:{"^":"G+W;"},
lC:{"^":"lB+aC;"},
lH:{"^":"G+W;"},
lI:{"^":"lH+aC;"},
m2:{"^":"G+W;"},
m3:{"^":"m2+aC;"},
mt:{"^":"G+W;"},
mu:{"^":"mt+aC;"}}],["","",,P,{"^":"",
mQ:function(a){var z,y
z=J.O(a)
if(!!z.$isbZ){y=z.geg(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.h2(a.data,a.height,a.width)},
mP:function(a){if(a instanceof P.h2)return{data:a.a,height:a.b,width:a.c}
return a},
mN:function(a,b){var z={}
a.a1(0,new P.mO(z))
return z},
er:function(){var z=$.eq
if(z==null){z=J.cV(window.navigator.userAgent,"Opera",0)
$.eq=z}return z},
ia:function(){var z,y
z=$.en
if(z!=null)return z
y=$.eo
if(y==null){y=J.cV(window.navigator.userAgent,"Firefox",0)
$.eo=y}if(y)z="-moz-"
else{y=$.ep
if(y==null){y=!P.er()&&J.cV(window.navigator.userAgent,"Trident/",0)
$.ep=y}if(y)z="-ms-"
else z=P.er()?"-o-":"-webkit-"}$.en=z
return z},
lT:{"^":"b;",
eG:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
df:function(a){var z,y,x,w
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.O(a)
if(!!y.$isao)return new Date(a.a)
if(!!y.$isjO)throw H.d(P.cE("structured clone of RegExp"))
if(!!y.$isbZ)return a
if(!!y.$isdg)return a
if(!!y.$isH){x=this.eG(a)
y=this.b
if(x>=y.length)return H.f(y,x)
w=y[x]
z.a=w
if(w!=null)return w
w={}
z.a=w
C.a.p(y,x,w)
a.a1(0,new P.lV(z,this))
return z.a}if(!!y.$isa){x=this.eG(a)
z=this.b
if(x>=z.length)return H.f(z,x)
w=z[x]
if(w!=null)return w
return this.jy(a,x)}throw H.d(P.cE("structured clone of other type"))},
jy:function(a,b){var z,y,x,w
z=J.bs(a)
y=z.gn(a)
x=new Array(y)
C.a.p(this.b,b,x)
for(w=0;w<y;++w)C.a.p(x,w,this.df(z.k(a,w)))
return x}},
lV:{"^":"m:7;a,b",
$2:function(a,b){this.a.a[a]=this.b.df(b)}},
h2:{"^":"b;eg:a>,b,c",$isbZ:1},
mO:{"^":"m:7;a",
$2:function(a,b){this.a[a]=b}},
lU:{"^":"lT;a,b"},
ir:{"^":"cu;a,b",
gbB:function(){var z,y,x
z=this.b
y=H.a7(z,"W",0)
x=W.Q
return new H.j6(new H.dH(z,H.l(new P.is(),{func:1,ret:P.N,args:[y]}),[y]),H.l(new P.it(),{func:1,ret:x,args:[y]}),[y,x])},
p:function(a,b,c){var z
H.e(c,"$isQ")
z=this.gbB()
J.hL(z.b.$1(J.ci(z.a,b)),c)},
h:function(a,b){J.e3(this.b.a,b)},
gn:function(a){return J.au(this.gbB().a)},
k:function(a,b){var z=this.gbB()
return z.b.$1(J.ci(z.a,b))},
gV:function(a){var z=P.j0(this.gbB(),!1,W.Q)
return new J.az(z,z.length,0,[H.u(z,0)])},
$asW:function(){return[W.Q]},
$aso:function(){return[W.Q]},
$asa:function(){return[W.Q]}},
is:{"^":"m:23;",
$1:function(a){return!!J.O(H.e(a,"$isC")).$isQ}},
it:{"^":"m:55;",
$1:function(a){return H.k(H.e(a,"$isC"),"$isQ")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cH:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lD:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
lJ:{"^":"b;$ti",
gbo:function(a){var z=this.a
if(typeof z!=="number")return z.D()
return H.x(z+this.c,H.u(this,0))},
gcG:function(a){var z=this.b
if(typeof z!=="number")return z.D()
return H.x(z+this.d,H.u(this,0))},
i:function(a){return"Rectangle ("+H.i(this.a)+", "+H.i(this.b)+") "+this.c+" x "+this.d},
w:function(a,b){var z,y,x,w
if(b==null)return!1
if(!H.bS(b,"$isaO",[P.am],"$asaO"))return!1
z=this.a
y=J.Z(b)
x=y.gb_(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbr(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.D()
w=H.u(this,0)
if(H.x(z+this.c,w)===y.gbo(b)){if(typeof x!=="number")return x.D()
z=H.x(x+this.d,w)===y.gcG(b)}else z=!1}else z=!1}else z=!1
return z},
ga_:function(a){var z,y,x,w,v
z=this.a
y=J.bU(z)
x=this.b
w=J.bU(x)
if(typeof z!=="number")return z.D()
v=H.u(this,0)
z=H.x(z+this.c,v)
if(typeof x!=="number")return x.D()
v=H.x(x+this.d,v)
return P.lD(P.cH(P.cH(P.cH(P.cH(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
aO:{"^":"lJ;b_:a>,br:b>,bt:c>,bj:d>,$ti"}}],["","",,P,{"^":"",f0:{"^":"dn;",$isf0:1,"%":"SVGScriptElement"},dn:{"^":"Q;",
gcK:function(a){return new P.ir(a,new W.as(a))},
am:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.aG])
C.a.h(z,W.fS(null))
C.a.h(z,W.h0())
C.a.h(z,new W.lW())
c=new W.hb(new W.eP(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).jA(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.as(w)
u=z.gaJ(z)
for(z=J.Z(v);x=u.firstChild,x!=null;)z.F(v,x)
return v},
$isdn:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"}}],["","",,P,{"^":"",P:{"^":"b;",$iso:1,
$aso:function(){return[P.n]},
$isa:1,
$asa:function(){return[P.n]},
$iskt:1}}],["","",,P,{"^":""}],["","",,P,{"^":"",hU:{"^":"G;",$ishU:1,"%":"WebGLBuffer"},iv:{"^":"G;",$isiv:1,"%":"WebGLFramebuffer"},jH:{"^":"G;",$isjH:1,"%":"WebGLProgram"},di:{"^":"G;",
e6:function(a,b){return a.activeTexture(b)},
ea:function(a,b,c){return a.attachShader(b,c)},
aw:function(a,b,c){return a.bindBuffer(b,c)},
jn:function(a,b,c){return a.bindFramebuffer(b,c)},
aU:function(a,b,c){return a.bindTexture(b,c)},
jo:function(a,b,c){return a.blendFunc(b,c)},
ee:function(a,b,c,d){return a.bufferData(b,c,d)},
jr:function(a,b){return a.clear(b)},
js:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
jt:function(a,b){return a.clearDepth(b)},
jv:function(a,b){return a.compileShader(b)},
jC:function(a,b){return a.createShader(b)},
jE:function(a,b){return a.deleteProgram(b)},
jF:function(a,b){return a.deleteShader(b)},
jI:function(a,b){return a.depthFunc(b)},
jJ:function(a,b){return a.disable(b)},
eh:function(a,b){return a.disableVertexAttribArray(b)},
jL:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cP:function(a,b){return a.enable(b)},
ej:function(a,b){return a.enableVertexAttribArray(b)},
ff:function(a,b){return a.generateMipmap(b)},
fg:function(a,b,c){return a.getActiveAttrib(b,c)},
fh:function(a,b,c){return a.getActiveUniform(b,c)},
fi:function(a,b,c){return a.getAttribLocation(b,c)},
dm:function(a,b){return a.getParameter(b)},
fl:function(a,b){return a.getProgramInfoLog(b)},
c6:function(a,b,c){return a.getProgramParameter(b,c)},
fn:function(a,b){return a.getShaderInfoLog(b)},
fo:function(a,b,c){return a.getShaderParameter(b,c)},
fp:function(a,b,c){return a.getUniformLocation(b,c)},
k9:function(a,b){return a.linkProgram(b)},
kr:function(a,b,c){return a.pixelStorei(b,c)},
fz:function(a,b,c){return a.shaderSource(b,c)},
kI:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.O(g)
if(!!z.$isbZ)y=!0
else y=!1
if(y){this.iF(a,b,c,d,e,f,P.mP(g))
return}if(!!z.$isey)z=!0
else z=!1
if(z){this.iG(a,b,c,d,e,f,g)
return}throw H.d(P.bV("Incorrect number or type of arguments"))},
kH:function(a,b,c,d,e,f,g){return this.kI(a,b,c,d,e,f,g,null,null,null)},
iF:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
iG:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
c1:function(a,b,c,d){return a.texParameteri(b,c,d)},
R:function(a,b,c){return a.uniform1f(b,c)},
S:function(a,b,c){return a.uniform1i(b,c)},
A:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
f8:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
f9:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
fb:function(a,b){return a.useProgram(b)},
kP:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
kQ:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isdi:1,
"%":"WebGLRenderingContext"},k_:{"^":"G;",$isk_:1,"%":"WebGLShader"},kh:{"^":"G;",$iskh:1,"%":"WebGLTexture"},kC:{"^":"G;",$iskC:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",a0:{"^":"b;0a,0b,0c,0d,$ti",
shA:function(a){this.a=H.j(a,"$isa",[H.a7(this,"a0",0)],"$asa")},
sdX:function(a){this.b=H.l(a,{func:1,ret:P.N,args:[[P.o,H.a7(this,"a0",0)]]})},
sdV:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.n,[P.o,H.a7(this,"a0",0)]]})},
sdY:function(a){this.d=H.l(a,{func:1,ret:-1,args:[P.n,[P.o,H.a7(this,"a0",0)]]})},
c9:function(a){this.shA(H.c([],[a]))
this.sdX(null)
this.sdV(null)
this.sdY(null)},
dr:function(a,b,c){var z=H.a7(this,"a0",0)
H.l(b,{func:1,ret:P.N,args:[[P.o,z]]})
z={func:1,ret:-1,args:[P.n,[P.o,z]]}
H.l(a,z)
H.l(c,z)
this.sdX(b)
this.sdV(a)
this.sdY(c)},
bw:function(a,b){return this.dr(a,null,b)},
i1:function(a){var z
H.j(a,"$iso",[H.a7(this,"a0",0)],"$aso")
z=this.b
if(z!=null)return z.$1(a)
return!0},
fM:function(a,b){var z
H.j(b,"$iso",[H.a7(this,"a0",0)],"$aso")
z=this.c
if(z!=null)z.$2(a,b)},
gn:function(a){return this.a.length},
gV:function(a){var z=this.a
return new J.az(z,z.length,0,[H.u(z,0)])},
a9:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.a7(this,"a0",0)
H.x(b,z)
z=[z]
if(this.i1(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.fM(x,H.c([b],z))}},
$iso:1,
q:{
d3:function(a){var z=new O.a0([a])
z.c9(a)
return z}}},dd:{"^":"b;0a,0b",
scj:function(a){this.a=H.j(a,"$isa",[V.ak],"$asa")},
gn:function(a){return this.a.length},
gB:function(){var z=this.b
if(z==null){z=D.L()
this.b=z}return z},
fN:function(a){var z=this.b
if(!(z==null))z.K(a)},
aK:function(){return this.fN(null)},
ga4:function(){var z=this.a
if(z.length>0)return C.a.gaA(z)
else return V.c4()},
f0:function(a){var z=this.a
if(a==null)C.a.h(z,V.c4())
else C.a.h(z,a)
this.aK()},
d6:function(){var z=this.a
if(z.length>0){z.pop()
this.aK()}}}}],["","",,E,{"^":"",cY:{"^":"b;"},aB:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0ah:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
shd:function(a,b){this.y=H.j(b,"$isa0",[E.aB],"$asa0")},
sah:function(a){this.z=H.e(a,"$isbA")},
saa:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gB().I(0,this.geX())
y=this.c
if(y!=null)y.gB().h(0,this.geX())
x=new D.M("shape",z,this.c,this,[F.f2])
x.b=!0
this.ao(x)}},
sbk:function(a){var z,y
if(!J.E(this.r,a)){z=this.r
if(z!=null)z.gB().I(0,this.geW())
if(a!=null)a.gB().h(0,this.geW())
this.r=a
y=new D.M("mover",z,a,this,[U.ah])
y.b=!0
this.ao(y)}},
aC:function(a){var z,y,x,w
z=this.r
y=z!=null?z.b6(a,this):null
if(!J.E(y,this.x)){x=this.x
this.x=y
w=new D.M("matrix",x,y,this,[V.ak])
w.b=!0
this.ao(w)}for(z=this.y.a,z=new J.az(z,z.length,0,[H.u(z,0)]);z.G();)z.d.aC(a)},
b3:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.ga4())
else C.a.h(z.a,y.u(0,z.ga4()))
z.aK()
a.f1(this.f)
z=a.dy
x=(z&&C.a).gaA(z)
if(x!=null&&this.d!=null)x.ky(a,this)
for(z=this.y.a,z=new J.az(z,z.length,0,[H.u(z,0)]);z.G();)z.d.b3(a)
a.f_()
a.dx.d6()},
gB:function(){var z=this.z
if(z==null){z=D.L()
this.z=z}return z},
ao:function(a){var z=this.z
if(!(z==null))z.K(a)},
X:function(){return this.ao(null)},
ki:[function(a){H.e(a,"$isy")
this.e=null
this.ao(a)},function(){return this.ki(null)},"lA","$1","$0","geX",0,2,1],
kh:[function(a){this.ao(H.e(a,"$isy"))},function(){return this.kh(null)},"lz","$1","$0","geW",0,2,1],
kf:[function(a){this.ao(H.e(a,"$isy"))},function(){return this.kf(null)},"lx","$1","$0","geV",0,2,1],
lw:[function(a,b){var z,y,x,w,v,u,t
H.j(b,"$iso",[E.aB],"$aso")
for(z=b.length,y=this.geV(),x={func:1,ret:-1,args:[D.y]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.gah()==null){t=new D.bA()
t.sai(null)
t.sbc(null)
t.c=null
t.d=0
u.sah(t)}t=u.gah()
t.toString
H.l(y,x)
if(t.a==null)t.sai(H.c([],w))
t=t.a;(t&&C.a).h(t,y)}}this.X()},"$2","gke",8,0,9],
ly:[function(a,b){var z,y
H.j(b,"$iso",[E.aB],"$aso")
for(z=b.gV(b),y=this.geV();z.G();)z.gL().gB().I(0,y)
this.X()},"$2","gkg",8,0,9],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaM:1},jQ:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
siE:function(a){this.dy=H.j(a,"$isa",[O.cB],"$asa")},
siz:function(a){this.fr=H.j(a,"$isH",[P.h,A.dj],"$asH")},
fI:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.ao(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.dd()
y=[V.ak]
z.scj(H.c([],y))
z.b=null
z.gB().h(0,new E.jS(this))
this.cy=z
z=new O.dd()
z.scj(H.c([],y))
z.b=null
z.gB().h(0,new E.jT(this))
this.db=z
z=new O.dd()
z.scj(H.c([],y))
z.b=null
z.gB().h(0,new E.jU(this))
this.dx=z
this.siE(H.c([],[O.cB]))
z=this.dy;(z&&C.a).h(z,null)
this.siz(new H.b2(0,0,[P.h,A.dj]))},
gkt:function(){var z=this.z
if(z==null){z=this.cy.ga4().u(0,this.db.ga4())
this.z=z}return z},
f1:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaA(z):a;(z&&C.a).h(z,y)},
f_:function(){var z=this.dy
if(z.length>1)z.pop()},
q:{
jR:function(a,b){var z=new E.jQ(a,b)
z.fI(a,b)
return z}}},jS:{"^":"m:8;a",
$1:function(a){var z
H.e(a,"$isy")
z=this.a
z.z=null
z.ch=null}},jT:{"^":"m:8;a",
$1:function(a){var z
H.e(a,"$isy")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jU:{"^":"m:8;a",
$1:function(a){var z
H.e(a,"$isy")
z=this.a
z.ch=null
z.cx=null}},kl:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0ah:x<,0y,0z,0Q,0ch,0cx,0cy",
sah:function(a){this.x=H.e(a,"$isbA")},
fP:[function(a){H.e(a,"$isy")
this.kB()},function(){return this.fP(null)},"fO","$1","$0","gdw",0,2,1],
gjZ:function(){var z,y,x
z=Date.now()
y=C.h.a7(P.es(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.ao(z,!1)
return x/y},
e_:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.u()
if(typeof z!=="number")return H.B(z)
x=C.k.cW(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.u()
w=C.k.cW(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.ff(C.y,this.gkA())}},
kB:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.kn(this),{func:1,ret:-1,args:[P.am]})
C.P.hk(z)
C.P.im(z,W.hj(y,P.am))}},"$0","gkA",0,0,3],
kx:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.e_()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ao(w,!1)
x.y=P.es(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sn(w.a,0)
w.aK()
w=x.db
C.a.sn(w.a,0)
w.aK()
w=x.dx
C.a.sn(w.a,0)
w.aK()
w=x.dy;(w&&C.a).sn(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.b3(this.e)}x=this.z
if(!(x==null))x.K(null)}catch(v){z=H.a9(v)
y=H.bt(v)
P.e0("Error: "+H.i(z))
P.e0("Stack: "+H.i(y))
throw H.d(z)}},
q:{
km:function(a,b,c,d,e){var z,y,x,w
z=J.O(a)
if(!!z.$isd0)return E.fe(a,!0,!0,!0,!1)
y=W.d1(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcK(a).h(0,y)
w=E.fe(y,!0,!0,!0,!1)
w.a=a
return w},
fe:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.kl()
y=P.iX(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.h,null)
x=C.q.c5(a,"webgl",y)
x=H.e(x==null?C.q.c5(a,"experimental-webgl",y):x,"$isdi")
if(x==null)H.q(P.r("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.jR(x,a)
w=new T.kj(x)
w.b=H.ad((x&&C.b).dm(x,3379))
w.c=H.ad(C.b.dm(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.kP(a)
v=new X.iO()
v.c=new X.aF(!1,!1,!1)
v.si9(P.c3(null,null,null,P.n))
w.b=v
v=new X.jj(w)
v.f=0
v.r=V.aN()
v.x=V.aN()
v.Q=1
v.ch=1
w.c=v
v=new X.j3(w)
v.r=0
v.x=V.aN()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.kq(w)
v.e=0
v.f=V.aN()
v.r=V.aN()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.shl(H.c([],[[P.dm,P.b]]))
v=w.z
u=document
t=W.aw
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.a3(u,"contextmenu",H.l(w.ghP(),s),!1,t))
v=w.z
r=W.aa
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a3(a,"focus",H.l(w.ghS(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a3(a,"blur",H.l(w.ghM(),q),!1,r))
v=w.z
p=W.bC
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a3(u,"keyup",H.l(w.ghU(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a3(u,"keydown",H.l(w.ghT(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a3(a,"mousedown",H.l(w.ghX(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a3(a,"mouseup",H.l(w.ghZ(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a3(a,"mousemove",H.l(w.ghY(),s),!1,t))
p=w.z
o=W.bK;(p&&C.a).h(p,W.a3(a,H.D(W.ij(a)),H.l(w.gi_(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a3(u,"mousemove",H.l(w.ghQ(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a3(u,"mouseup",H.l(w.ghR(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a3(u,"pointerlockchange",H.l(w.gi0(),q),!1,r))
r=w.z
q=W.bh
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a3(a,"touchstart",H.l(w.gi7(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a3(a,"touchend",H.l(w.gi5(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a3(a,"touchmove",H.l(w.gi6(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.ao(Date.now(),!1)
z.cy=0
z.e_()
return z}}},kn:{"^":"m:32;a",
$1:function(a){var z
H.nu(a)
z=this.a
if(z.ch){z.ch=!1
z.kx()}}}}],["","",,Z,{"^":"",fM:{"^":"b;a,b",$isnI:1,q:{
dG:function(a,b,c){var z
H.j(c,"$isa",[P.n],"$asa")
z=a.createBuffer()
C.b.aw(a,b,z)
C.b.ee(a,b,new Int16Array(H.bm(c)),35044)
C.b.aw(a,b,null)
return new Z.fM(b,z)}}},ec:{"^":"cY;a,b,c,d,e",
cE:function(a){var z,y,x
try{y=a.a
C.b.ej(y,this.e)
C.b.kP(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.a9(x)
y=P.r('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.i(z))
throw H.d(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.i(this.e)+"]"}},la:{"^":"b;a",$isnJ:1},ed:{"^":"b;a,0b,c,d",
shv:function(a){this.b=H.j(a,"$isa",[Z.c_],"$asa")},
aZ:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
cE:function(a){var z,y
z=this.a
C.b.aw(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].cE(a)},
kO:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.b.eh(x,z[y].e)
C.b.aw(x,this.a.a,null)},
b3:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.f(w,x)
v=w[x]
w=v.c
u=w.a
C.b.aw(y,u,w.b)
C.b.jL(y,v.a,v.b,5123,0)
C.b.aw(y,u,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.h]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ag(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(y,", ")+"\nAttrs:   "+C.a.l(u,", ")},
$iso1:1},c_:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bd(this.c)+"'")+"]"}},bj:{"^":"b;a",
gds:function(a){var z,y
z=this.a
y=(z&$.$get$aT().a)!==0?3:0
if((z&$.$get$aS().a)!==0)y+=3
if((z&$.$get$aR().a)!==0)y+=3
if((z&$.$get$aU().a)!==0)y+=2
if((z&$.$get$aV().a)!==0)y+=3
if((z&$.$get$bI().a)!==0)y+=3
if((z&$.$get$bJ().a)!==0)y+=4
if((z&$.$get$bk().a)!==0)++y
return(z&$.$get$aQ().a)!==0?y+4:y},
jk:function(a){var z,y,x
z=$.$get$aT()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aU()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aV()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bI()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bJ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bk()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aQ()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fL()},
w:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bj))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.h])
y=this.a
if((y&$.$get$aT().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aS().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aR().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aU().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aV().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bI().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bJ().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bk().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aQ().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.l(z,"|")},
q:{
ar:function(a){return new Z.bj(a)}}}}],["","",,D,{"^":"",eh:{"^":"b;"},bA:{"^":"b;0a,0b,0c,0d",
sai:function(a){this.a=H.j(a,"$isa",[{func:1,ret:-1,args:[D.y]}],"$asa")},
sbc:function(a){this.b=H.j(a,"$isa",[{func:1,ret:-1,args:[D.y]}],"$asa")},
h:function(a,b){var z={func:1,ret:-1,args:[D.y]}
H.l(b,z)
if(this.a==null)this.sai(H.c([],[z]))
z=this.a;(z&&C.a).h(z,b)},
I:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.y]})
z=this.a
z=z==null?null:C.a.Z(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).I(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.Z(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).I(z,b)||y}return y},
K:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w){w=this.b
w=w==null?null:w.length===0
if(w==null)w=!0}else w=!1
if(w)return!1
if(a==null){a=new D.y(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.a1(y,new D.io(z))
y=this.b
if(!(y==null))C.a.a1(y,new D.ip(z))
z=this.b
if(!(z==null))C.a.sn(z,0)
return!0},
jN:function(){return this.K(null)},
kC:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.K(y)}}},
aB:function(){return this.kC(!0,!1)},
q:{
L:function(){var z=new D.bA()
z.sai(null)
z.sbc(null)
z.c=null
z.d=0
return z}}},io:{"^":"m:22;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.y]})
z=this.a.a
z.b
a.$1(z)}},ip:{"^":"m:22;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.y]})
z=this.a.a
z.b
a.$1(z)}},y:{"^":"b;a,0b"},cq:{"^":"y;c,d,a,0b,$ti"},cr:{"^":"y;c,d,a,0b,$ti"},M:{"^":"y;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}}],["","",,X,{"^":"",ee:{"^":"b;a,b",
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ee))return!1
if(this.a!=b.a)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}},eE:{"^":"b;a,b",
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eE))return!1
if(this.a!=b.a)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}},iO:{"^":"b;0a,0b,0c,0d",
si9:function(a){this.d=H.j(a,"$isf1",[P.n],"$asf1")},
ko:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
kk:function(a){this.c=a.b
this.d.I(0,a.a)
return!1}},eI:{"^":"cx;x,y,c,d,e,a,0b"},j3:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ba:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ao(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.u()
v=b.b
u=this.ch
if(typeof v!=="number")return v.u()
t=y.D(0,new V.a1(x*w,v*u))
u=this.a.gaV()
s=new X.bE(a,V.aN(),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
d5:function(a,b){this.r=a.a
return!1},
bm:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.fq()
if(typeof z!=="number")return z.c4()
this.r=(z&~y)>>>0
return!1},
bl:function(a,b){var z=this.d
if(z==null)return!1
z.K(this.ba(a,b))
return!0},
kp:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaV()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.u()
t=a.b
s=this.cy
if(typeof t!=="number")return t.u()
w=new X.de(new V.V(v*u,t*s),y,x,new P.ao(w,!1),this)
w.b=!0
z.K(w)
return!0},
hW:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ao(Date.now(),!1)
y=this.f
x=new X.eI(c,a,this.a.gaV(),b,z,this)
x.b=!0
y.K(x)
this.y=z
this.x=V.aN()}},aF:{"^":"b;a,b,c",
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aF))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},bE:{"^":"cx;x,y,z,Q,ch,c,d,e,a,0b"},jj:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
cf:function(a,b,c){var z,y,x
z=new P.ao(Date.now(),!1)
y=this.a.gaV()
x=new X.bE(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
d5:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.K(this.cf(a,b,!0))
return!0},
bm:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.fq()
if(typeof z!=="number")return z.c4()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.K(this.cf(a,b,!0))
return!0},
bl:function(a,b){var z=this.d
if(z==null)return!1
z.K(this.cf(a,b,!1))
return!0},
kq:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaV()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.u()
u=a.b
t=this.ch
if(typeof u!=="number")return u.u()
x=new X.de(new V.V(w*v,u*t),y,b,new P.ao(x,!1),this)
x.b=!0
z.K(x)
return!0},
gei:function(){var z=this.b
if(z==null){z=D.L()
this.b=z}return z},
gc3:function(){var z=this.c
if(z==null){z=D.L()
this.c=z}return z},
geU:function(){var z=this.d
if(z==null){z=D.L()
this.d=z}return z}},de:{"^":"cx;x,c,d,e,a,0b"},cx:{"^":"y;"},fi:{"^":"cx;x,y,z,Q,ch,c,d,e,a,0b"},kq:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
ba:function(a,b){var z,y,x,w
H.j(a,"$isa",[V.a1],"$asa")
z=new P.ao(Date.now(),!1)
y=a.length>0?a[0]:V.aN()
x=this.a.gaV()
w=new X.fi(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
kn:function(a){var z
H.j(a,"$isa",[V.a1],"$asa")
z=this.b
if(z==null)return!1
z.K(this.ba(a,!0))
return!0},
kl:function(a){var z
H.j(a,"$isa",[V.a1],"$asa")
z=this.c
if(z==null)return!1
z.K(this.ba(a,!0))
return!0},
km:function(a){var z
H.j(a,"$isa",[V.a1],"$asa")
z=this.d
if(z==null)return!1
z.K(this.ba(a,!1))
return!0}},kP:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
shl:function(a){this.z=H.j(a,"$isa",[[P.dm,P.b]],"$asa")},
gaV:function(){var z=this.a
return V.eZ(0,0,C.q.gef(z).c,C.q.gef(z).d)},
dK:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eE(z,new X.aF(y,a.altKey,a.shiftKey))},
aR:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aF(y,a.altKey,a.shiftKey)},
cw:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aF(y,a.altKey,a.shiftKey)},
aF:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.M()
v=z.top
if(typeof x!=="number")return x.M()
return new V.a1(y-w,x-v)},
bd:function(a){return new V.V(a.movementX,a.movementY)},
cr:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.a1])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
t=C.k.ap(u.pageX)
C.k.ap(u.pageY)
s=z.left
C.k.ap(u.pageX)
C.a.h(y,new V.a1(t-s,C.k.ap(u.pageY)-z.top))}return y},
aD:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.ee(z,new X.aF(y,a.altKey,a.shiftKey))},
ck:function(a){var z,y,x,w,v,u
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
l7:[function(a){this.f=!0},"$1","ghS",4,0,14],
l1:[function(a){this.f=!1},"$1","ghM",4,0,14],
l4:[function(a){H.e(a,"$isaw")
if(this.f&&this.ck(a))a.preventDefault()},"$1","ghP",4,0,4],
l9:[function(a){var z
H.e(a,"$isbC")
if(!this.f)return
z=this.dK(a)
this.b.ko(z)},"$1","ghU",4,0,27],
l8:[function(a){var z
H.e(a,"$isbC")
if(!this.f)return
z=this.dK(a)
this.b.kk(z)},"$1","ghT",4,0,27],
lb:[function(a){var z,y,x,w
H.e(a,"$isaw")
z=this.a
z.focus()
this.f=!0
this.aR(a)
if(this.x){y=this.aD(a)
x=this.bd(a)
if(this.d.d5(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aD(a)
w=this.aF(a)
if(this.c.d5(y,w))a.preventDefault()},"$1","ghX",4,0,4],
ld:[function(a){var z,y,x
H.e(a,"$isaw")
this.aR(a)
z=this.aD(a)
if(this.x){y=this.bd(a)
if(this.d.bm(z,y))a.preventDefault()
return}if(this.r)return
x=this.aF(a)
if(this.c.bm(z,x))a.preventDefault()},"$1","ghZ",4,0,4],
l6:[function(a){var z,y,x
H.e(a,"$isaw")
if(!this.ck(a)){this.aR(a)
z=this.aD(a)
if(this.x){y=this.bd(a)
if(this.d.bm(z,y))a.preventDefault()
return}if(this.r)return
x=this.aF(a)
if(this.c.bm(z,x))a.preventDefault()}},"$1","ghR",4,0,4],
lc:[function(a){var z,y,x
H.e(a,"$isaw")
this.aR(a)
z=this.aD(a)
if(this.x){y=this.bd(a)
if(this.d.bl(z,y))a.preventDefault()
return}if(this.r)return
x=this.aF(a)
if(this.c.bl(z,x))a.preventDefault()},"$1","ghY",4,0,4],
l5:[function(a){var z,y,x
H.e(a,"$isaw")
if(!this.ck(a)){this.aR(a)
z=this.aD(a)
if(this.x){y=this.bd(a)
if(this.d.bl(z,y))a.preventDefault()
return}if(this.r)return
x=this.aF(a)
if(this.c.bl(z,x))a.preventDefault()}},"$1","ghQ",4,0,4],
le:[function(a){var z,y
H.e(a,"$isbK")
this.aR(a)
z=new V.V((a&&C.O).gjG(a),C.O.gjH(a)).t(0,180)
if(this.x){if(this.d.kp(z))a.preventDefault()
return}if(this.r)return
y=this.aF(a)
if(this.c.kq(z,y))a.preventDefault()},"$1","gi_",4,0,37],
lf:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.aD(this.y)
x=this.aF(this.y)
this.d.hW(y,x,z)}},"$1","gi0",4,0,14],
ll:[function(a){var z
H.e(a,"$isbh")
this.a.focus()
this.f=!0
this.cw(a)
z=this.cr(a)
if(this.e.kn(z))a.preventDefault()},"$1","gi7",4,0,13],
lj:[function(a){var z
H.e(a,"$isbh")
this.cw(a)
z=this.cr(a)
if(this.e.kl(z))a.preventDefault()},"$1","gi5",4,0,13],
lk:[function(a){var z
H.e(a,"$isbh")
this.cw(a)
z=this.cr(a)
if(this.e.km(z))a.preventDefault()},"$1","gi6",4,0,13]}}],["","",,D,{"^":"",cm:{"^":"b;0a,0b,0c,0d",
gB:function(){var z=this.d
if(z==null){z=D.L()
this.d=z}return z},
aL:[function(a){var z
H.e(a,"$isy")
z=this.d
if(!(z==null))z.K(a)},function(){return this.aL(null)},"kS","$1","$0","gfS",0,2,1],
$isa6:1,
$isaM:1},a6:{"^":"b;",$isaM:1},iQ:{"^":"a0;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
shj:function(a){this.e=H.j(a,"$isa",[D.cm],"$asa")},
si8:function(a){this.f=H.j(a,"$isa",[D.eU],"$asa")},
siB:function(a){this.r=H.j(a,"$isa",[D.f3],"$asa")},
siM:function(a){this.x=H.j(a,"$isa",[D.fb],"$asa")},
siN:function(a){this.y=H.j(a,"$isa",[D.fc],"$asa")},
siO:function(a){this.z=H.j(a,"$isa",[D.fd],"$asa")},
gB:function(){var z=this.Q
if(z==null){z=D.L()
this.Q=z}return z},
aL:function(a){var z=this.Q
if(!(z==null))z.K(a)},
hV:[function(a){var z
H.e(a,"$isy")
z=this.ch
if(!(z==null))z.K(a)},function(){return this.hV(null)},"la","$1","$0","gdW",0,2,1],
lg:[function(a){var z,y,x
H.j(a,"$iso",[D.a6],"$aso")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.z)(a),++y){x=a[y]
if(x==null||this.fR(x))return!1}return!0},"$1","gi2",4,0,39],
kZ:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a6
H.j(b,"$iso",[z],"$aso")
for(y=b.length,x=this.gdW(),w={func:1,ret:-1,args:[D.y]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=H.e(b[u],"$isa6")
if(t instanceof D.cm)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bA()
s.sai(null)
s.sbc(null)
s.c=null
s.d=0
t.d=s}H.l(x,w)
if(s.a==null)s.sai(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}z=new D.cq(a,b,this,[z])
z.b=!0
this.aL(z)},"$2","ghJ",8,0,17],
li:[function(a,b){var z,y,x,w
z=D.a6
H.j(b,"$iso",[z],"$aso")
for(y=b.gV(b),x=this.gdW();y.G();){w=y.gL()
C.a.I(this.e,w)
w.gB().I(0,x)}z=new D.cr(a,b,this,[z])
z.b=!0
this.aL(z)},"$2","gi4",8,0,17],
fR:function(a){var z=C.a.Z(this.e,a)
return z},
$aso:function(){return[D.a6]},
$asa0:function(){return[D.a6]}},eU:{"^":"b;",$isa6:1,$isaM:1},f3:{"^":"b;",$isa6:1,$isaM:1},fb:{"^":"b;",$isa6:1,$isaM:1},fc:{"^":"b;",$isa6:1,$isaM:1},fd:{"^":"b;",$isa6:1,$isaM:1}}],["","",,V,{"^":"",
nL:[function(a,b){if(typeof b!=="number")return b.M()
if(typeof a!=="number")return H.B(a)
return Math.abs(b-a)<=1e-9},"$2","jh",8,0,36],
nG:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.k.bv(a-b,z)
return(a<0?a+z:a)+b},
J:function(a,b,c){if(a==null)return C.c.af("null",c)
return C.c.af(C.k.f6($.p.$2(a,0)?0:a,b),c+b+1)},
br:function(a,b,c){var z,y,x,w,v,u
H.j(a,"$isa",[P.t],"$asa")
z=H.c([],[P.h])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.z)(a),++w){v=V.J(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.f(z,u)
C.a.p(z,u,C.c.af(z[u],x))}return z},
e_:function(a,b){return C.k.kK(Math.pow(b,C.a_.cW(Math.log(H.mM(a))/Math.log(b))))},
aj:{"^":"b;a,b,c",
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aj))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+"]"}},
aZ:{"^":"b;a,b,c,d",
dd:function(a){return H.c([this.a,this.b,this.c,this.d],[P.t])},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aZ))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+", "+V.J(this.d,3,0)+"]"}},
eL:{"^":"b;a,b,c,d,e,f,r,x,y",
ag:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.t])
return z},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eL))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
z=b.e
if(!$.p.$2(z,this.e))return!1
z=b.f
if(!$.p.$2(z,this.f))return!1
z=b.r
if(!$.p.$2(z,this.r))return!1
z=b.x
if(!$.p.$2(z,this.x))return!1
z=b.y
if(!$.p.$2(z,this.y))return!1
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.t]
y=V.br(H.c([this.a,this.d,this.r],z),3,0)
x=V.br(H.c([this.b,this.e,this.x],z),3,0)
w=V.br(H.c([this.c,this.f,this.y],z),3,0)
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
ak:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ag:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.t])
return z},
eP:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.p.$2(a2,0))return V.c4()
a3=1/a2
a4=-w
a5=-i
return V.aE((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
u:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.e(a7,"$isak")
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
de:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.A(this.a*z+this.b*y+this.c*x,this.e*z+this.f*y+this.r*x,this.y*z+this.z*y+this.Q*x)},
bs:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.U(this.a*z+this.b*y+this.c*x+this.d,this.e*z+this.f*y+this.r*x+this.x,this.y*z+this.z*y+this.Q*x+this.ch)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ak))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
z=b.e
if(!$.p.$2(z,this.e))return!1
z=b.f
if(!$.p.$2(z,this.f))return!1
z=b.r
if(!$.p.$2(z,this.r))return!1
z=b.x
if(!$.p.$2(z,this.x))return!1
z=b.y
if(!$.p.$2(z,this.y))return!1
z=b.z
if(!$.p.$2(z,this.z))return!1
z=b.Q
if(!$.p.$2(z,this.Q))return!1
z=b.ch
if(!$.p.$2(z,this.ch))return!1
z=b.cx
if(!$.p.$2(z,this.cx))return!1
z=b.cy
if(!$.p.$2(z,this.cy))return!1
z=b.db
if(!$.p.$2(z,this.db))return!1
z=b.dx
if(!$.p.$2(z,this.dx))return!1
return!0},
i:function(a){return this.O()},
eH:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.t]
y=V.br(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.br(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.br(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.br(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
O:function(){return this.eH("",3,0)},
H:function(a){return this.eH(a,3,0)},
q:{
c4:function(){var z=$.eN
if(z==null){z=V.aE(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.eN=z}return z},
aE:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ak(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
eM:function(a,b,c){var z,y,x,w,v,u,t,s
z=c.t(0,Math.sqrt(c.E(c)))
y=b.aH(z)
x=y.t(0,Math.sqrt(y.E(y)))
w=z.aH(x)
v=new V.A(a.a,a.b,a.c)
u=x.U(0).E(v)
t=w.U(0).E(v)
s=z.U(0).E(v)
return V.aE(x.a,w.a,z.a,u,x.b,w.b,z.b,t,x.c,w.c,z.c,s,0,0,0,1)}}},
a1:{"^":"b;a,b",
D:function(a,b){return new V.a1(this.a+b.a,this.b+b.b)},
M:function(a,b){return new V.a1(this.a-b.a,this.b-b.b)},
t:function(a,b){if($.p.$2(b,0))return V.aN()
return new V.a1(this.a/b,this.b/b)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+"]"},
q:{
aN:function(){var z=$.eV
if(z==null){z=new V.a1(0,0)
$.eV=z}return z}}},
U:{"^":"b;a,b,c",
D:function(a,b){return new V.U(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a,b){return new V.U(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){return new V.U(this.a*b,this.b*b,this.c*b)},
t:function(a,b){if($.p.$2(b,0))return V.dh()
return new V.U(this.a/b,this.b/b,this.c/b)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+"]"},
q:{
dh:function(){var z=$.bF
if(z==null){z=new V.U(0,0,0)
$.bF=z}return z}}},
c6:{"^":"b;a,b,c,d",
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c6))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+", "+V.J(this.d,3,0)+"]"}},
eY:{"^":"b;a,b,c,d",
gab:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eY))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+", "+V.J(this.d,3,0)+"]"},
q:{
eZ:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eY(a,b,c,d)}}},
V:{"^":"b;a,b",
eR:[function(a){return Math.sqrt(this.E(this))},"$0","gn",1,0,12],
E:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.u()
if(typeof y!=="number")return H.B(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.u()
if(typeof w!=="number")return H.B(w)
return z*y+x*w},
u:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.u()
y=this.b
if(typeof y!=="number")return y.u()
return new V.V(z*b,y*b)},
t:function(a,b){var z,y
if($.p.$2(b,0)){z=$.fA
if(z==null){z=new V.V(0,0)
$.fA=z}return z}z=this.a
if(typeof z!=="number")return z.t()
y=this.b
if(typeof y!=="number")return y.t()
return new V.V(z/b,y/b)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+"]"}},
A:{"^":"b;a,b,c",
eR:[function(a){return Math.sqrt(this.E(this))},"$0","gn",1,0,12],
E:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
d_:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.A(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aH:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.A(z*y-x*w,x*v-u*y,u*w-z*v)},
D:function(a,b){return new V.A(this.a+b.a,this.b+b.b,this.c+b.c)},
U:function(a){return new V.A(-this.a,-this.b,-this.c)},
u:function(a,b){return new V.A(this.a*b,this.b*b,this.c*b)},
t:function(a,b){if($.p.$2(b,0))return V.bH()
return new V.A(this.a/b,this.b/b,this.c/b)},
eQ:function(){if(!$.p.$2(0,this.a))return!1
if(!$.p.$2(0,this.b))return!1
if(!$.p.$2(0,this.c))return!1
return!0},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.A))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+"]"},
q:{
bH:function(){var z=$.fE
if(z==null){z=new V.A(0,0,0)
$.fE=z}return z},
fF:function(){var z=$.fD
if(z==null){z=new V.A(0,1,0)
$.fD=z}return z},
fG:function(){var z=$.cF
if(z==null){z=new V.A(0,0,1)
$.cF=z}return z}}},
ca:{"^":"b;a,b,c,d",
eR:[function(a){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=this.d
return Math.sqrt(z*z+y*y+x*x+w*w)},"$0","gn",1,0,12],
t:function(a,b){var z
if($.p.$2(b,0)){z=$.fH
if(z==null){z=new V.ca(0,0,0,0)
$.fH=z}return z}return new V.ca(this.a/b,this.b/b,this.c/b,this.d/b)},
w:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ca))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+", "+V.J(this.d,3,0)+"]"}}}],["","",,U,{"^":"",i0:{"^":"eh;0a,0b,0c,0d,0e,0f,0r,0x,0y",
cb:function(a){var z=V.nG(a,this.c,this.b)
return z},
gB:function(){var z=this.y
if(z==null){z=D.L()
this.y=z}return z},
W:function(a){var z=this.y
if(!(z==null))z.K(a)},
sdh:function(a,b){},
sd1:function(a){var z,y
z=this.b
if(!$.p.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.cb(z)}z=new D.M("maximumLocation",y,this.b,this,[P.t])
z.b=!0
this.W(z)}},
sd3:function(a){var z,y
z=this.c
if(!$.p.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.cb(z)}z=new D.M("minimumLocation",y,this.c,this,[P.t])
z.b=!0
this.W(z)}},
sa2:function(a,b){var z,y
b=this.cb(b)
z=this.d
if(!$.p.$2(z,b)){y=this.d
this.d=b
z=new D.M("location",y,b,this,[P.t])
z.b=!0
this.W(z)}},
sd2:function(a){var z,y,x
z=this.e
if(!$.p.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.M("maximumVelocity",y,a,this,[P.t])
z.b=!0
this.W(z)}},
sY:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.p.$2(z,a)){x=this.f
this.f=a
z=new D.M("velocity",x,a,this,[P.t])
z.b=!0
this.W(z)}},
scN:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.p.$2(z,a)){y=this.x
this.x=a
z=new D.M("dampening",y,a,this,[P.t])
z.b=!0
this.W(z)}},
aC:function(a){var z,y,x,w
z=this.f
if($.p.$2(z,0)){z=this.r
z=!$.p.$2(z,0)}else z=!0
if(z){y=this.f+this.r*a
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa2(0,this.d+y*a)
z=this.x
if(!$.p.$2(z,0)){w=y*Math.pow(1-this.x,a)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sY(y)}},
q:{
d4:function(){var z=new U.i0()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},ej:{"^":"ah;0a,0b",
gB:function(){var z=this.b
if(z==null){z=D.L()
this.b=z}return z},
b6:function(a,b){return this.a},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ej))return!1
return J.E(this.a,b.a)},
i:function(a){return"Constant: "+this.a.H("          ")},
q:{
ek:function(a){var z=new U.ej()
z.a=a
return z}}},ex:{"^":"a0;0e,0f,0r,0a,0b,0c,0d",
gB:function(){var z=this.e
if(z==null){z=D.L()
this.e=z}return z},
W:[function(a){var z
H.e(a,"$isy")
z=this.e
if(!(z==null))z.K(a)},function(){return this.W(null)},"aj","$1","$0","gaQ",0,2,1],
kY:[function(a,b){var z,y,x,w,v,u,t,s
z=U.ah
H.j(b,"$iso",[z],"$aso")
for(y=b.length,x=this.gaQ(),w={func:1,ret:-1,args:[D.y]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){s=t.gB()
s.toString
H.l(x,w)
if(s.a==null)s.sai(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.cq(a,b,this,[z])
z.b=!0
this.W(z)},"$2","ghI",8,0,29],
lh:[function(a,b){var z,y,x
z=U.ah
H.j(b,"$iso",[z],"$aso")
for(y=b.gV(b),x=this.gaQ();y.G();)y.gL().gB().I(0,x)
z=new D.cr(a,b,this,[z])
z.b=!0
this.W(z)},"$2","gi3",8,0,29],
b6:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(typeof z!=="number")return z.T()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.az(z,z.length,0,[H.u(z,0)]),x=null;z.G();){y=z.d
if(y!=null){w=y.b6(a,b)
if(w!=null)x=x==null?w:w.u(0,x)}}this.f=x==null?V.c4():x
z=this.e
if(!(z==null))z.aB()}return this.f},
w:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ex))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.f(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.f(w,y)
if(!J.E(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$aso:function(){return[U.ah]},
$asa0:function(){return[U.ah]},
$isah:1},ah:{"^":"eh;"},kQ:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gB:function(){var z=this.cy
if(z==null){z=D.L()
this.cy=z}return z},
W:[function(a){var z
H.e(a,"$isy")
z=this.cy
if(!(z==null))z.K(a)},function(){return this.W(null)},"aj","$1","$0","gaQ",0,2,1],
bf:function(a){if(this.a!=null)return!1
this.a=a
a.c.gei().h(0,this.gcl())
this.a.c.geU().h(0,this.gcm())
this.a.c.gc3().h(0,this.gcn())
return!0},
hE:[function(a){H.e(a,"$isy")
if(!J.E(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gcl",4,0,2],
hF:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isy"),"$isbE")
if(!this.y)return
if(this.x){z=a.d.M(0,a.y)
z=new V.V(z.a,z.b)
z=z.E(z)
y=this.r
if(typeof y!=="number")return H.B(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.M(0,a.y)
z=new V.V(y.a,y.b).u(0,2).t(0,z.gab())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.u()
x=this.e
if(typeof x!=="number")return H.B(x)
y.sY(z*10*x)}else{z=a.c
y=a.d
x=y.M(0,a.y)
w=new V.V(x.a,x.b).u(0,2).t(0,z.gab())
x=this.b
v=w.a
if(typeof v!=="number")return v.U()
u=this.e
if(typeof u!=="number")return H.B(u)
t=this.z
if(typeof t!=="number")return H.B(t)
x.sa2(0,-v*u+t)
this.b.sY(0)
y=y.M(0,a.z)
this.Q=new V.V(y.a,y.b).u(0,2).t(0,z.gab())}this.aj()},"$1","gcm",4,0,2],
hG:[function(a){var z,y,x
H.e(a,"$isy")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.E(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.u()
x=this.e
if(typeof x!=="number")return H.B(x)
z.sY(y*10*x)
this.aj()}},"$1","gcn",4,0,2],
b6:function(a,b){var z,y,x,w,v
z=this.ch
y=a.e
if(typeof z!=="number")return z.T()
if(z<y){this.ch=y
x=a.y
this.b.aC(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aE(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isah:1},kR:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gB:function(){var z=this.fx
if(z==null){z=D.L()
this.fx=z}return z},
W:[function(a){var z
H.e(a,"$isy")
z=this.fx
if(!(z==null))z.K(a)},function(){return this.W(null)},"aj","$1","$0","gaQ",0,2,1],
bf:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gei().h(0,this.gcl())
this.a.c.geU().h(0,this.gcm())
this.a.c.gc3().h(0,this.gcn())
z=this.a.d
y=z.f
if(y==null){y=D.L()
z.f=y
z=y}else z=y
z.h(0,this.ghC())
z=this.a.d
y=z.d
if(y==null){y=D.L()
z.d=y
z=y}else z=y
z.h(0,this.ghD())
z=this.a.e
y=z.b
if(y==null){y=D.L()
z.b=y
z=y}else z=y
z.h(0,this.giK())
z=this.a.e
y=z.d
if(y==null){y=D.L()
z.d=y
z=y}else z=y
z.h(0,this.giJ())
z=this.a.e
y=z.c
if(y==null){y=D.L()
z.c=y
z=y}else z=y
z.h(0,this.giI())
return!0},
at:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.U()
z=-z}if(this.r){if(typeof y!=="number")return y.U()
y=-y}return new V.V(z,y)},
hE:[function(a){a=H.k(H.e(a,"$isy"),"$isbE")
if(!J.E(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gcl",4,0,2],
hF:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isy"),"$isbE")
if(!this.cx)return
if(this.ch){z=a.d.M(0,a.y)
z=new V.V(z.a,z.b)
z=z.E(z)
y=this.Q
if(typeof y!=="number")return H.B(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.M(0,a.y)
z=this.at(new V.V(y.a,y.b).u(0,2).t(0,z.gab()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.U()
x=this.y
if(typeof x!=="number")return H.B(x)
y.sY(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.U()
y=this.x
if(typeof y!=="number")return H.B(y)
x.sY(-z*10*y)}else{z=a.c
y=a.d
x=y.M(0,a.y)
w=this.at(new V.V(x.a,x.b).u(0,2).t(0,z.gab()))
x=this.c
v=w.a
if(typeof v!=="number")return v.U()
u=this.y
if(typeof u!=="number")return H.B(u)
t=this.cy
if(typeof t!=="number")return H.B(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.U()
v=this.x
if(typeof v!=="number")return H.B(v)
x=this.db
if(typeof x!=="number")return H.B(x)
t.sa2(0,-u*v+x)
this.b.sY(0)
this.c.sY(0)
y=y.M(0,a.z)
this.dx=this.at(new V.V(y.a,y.b).u(0,2).t(0,z.gab()))}this.aj()},"$1","gcm",4,0,2],
hG:[function(a){var z,y,x
H.e(a,"$isy")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.E(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.U()
x=this.y
if(typeof x!=="number")return H.B(x)
z.sY(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.U()
z=this.x
if(typeof z!=="number")return H.B(z)
x.sY(-y*10*z)
this.aj()}},"$1","gcn",4,0,2],
kV:[function(a){if(H.k(H.e(a,"$isy"),"$iseI").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","ghC",4,0,2],
kW:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isy"),"$isbE")
if(!J.E(this.d,a.x.b))return
z=a.c
y=a.d
x=y.M(0,a.y)
w=this.at(new V.V(x.a,x.b).u(0,2).t(0,z.gab()))
x=this.c
v=w.a
if(typeof v!=="number")return v.U()
u=this.y
if(typeof u!=="number")return H.B(u)
t=this.cy
if(typeof t!=="number")return H.B(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.U()
v=this.x
if(typeof v!=="number")return H.B(v)
x=this.db
if(typeof x!=="number")return H.B(x)
t.sa2(0,-u*v+x)
this.b.sY(0)
this.c.sY(0)
y=y.M(0,a.z)
this.dx=this.at(new V.V(y.a,y.b).u(0,2).t(0,z.gab()))
this.aj()},"$1","ghD",4,0,2],
lp:[function(a){H.e(a,"$isy")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","giK",4,0,2],
lo:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isy"),"$isfi")
if(!this.cx)return
if(this.ch){z=a.d.M(0,a.y)
z=new V.V(z.a,z.b)
z=z.E(z)
y=this.Q
if(typeof y!=="number")return H.B(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.M(0,a.y)
z=this.at(new V.V(y.a,y.b).u(0,2).t(0,z.gab()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.U()
x=this.y
if(typeof x!=="number")return H.B(x)
y.sY(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.U()
y=this.x
if(typeof y!=="number")return H.B(y)
x.sY(-z*10*y)}else{z=a.c
y=a.d
x=y.M(0,a.y)
w=this.at(new V.V(x.a,x.b).u(0,2).t(0,z.gab()))
x=this.c
v=w.a
if(typeof v!=="number")return v.U()
u=this.y
if(typeof u!=="number")return H.B(u)
t=this.cy
if(typeof t!=="number")return H.B(t)
x.sa2(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.U()
v=this.x
if(typeof v!=="number")return H.B(v)
x=this.db
if(typeof x!=="number")return H.B(x)
t.sa2(0,-u*v+x)
this.b.sY(0)
this.c.sY(0)
y=y.M(0,a.z)
this.dx=this.at(new V.V(y.a,y.b).u(0,2).t(0,z.gab()))}this.aj()},"$1","giJ",4,0,2],
ln:[function(a){var z,y,x
H.e(a,"$isy")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.E(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.U()
x=this.y
if(typeof x!=="number")return H.B(x)
z.sY(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.U()
z=this.x
if(typeof z!=="number")return H.B(z)
x.sY(-y*10*z)
this.aj()}},"$1","giI",4,0,2],
b6:function(a,b){var z,y,x,w,v
z=this.dy
y=a.e
if(typeof z!=="number")return z.T()
if(z<y){this.dy=y
x=a.y
this.c.aC(x)
this.b.aC(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aE(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.u(0,V.aE(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isah:1},kS:{"^":"b;0a,0b,0c,0d,0e,0f,0r",
gB:function(){var z=this.r
if(z==null){z=D.L()
this.r=z}return z},
W:function(a){var z=this.r
if(!(z==null))z.K(a)},
bf:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.L()
z.e=y
z=y}else z=y
y=this.ghH()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.L()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
kX:[function(a){var z,y,x,w
H.e(a,"$isy")
if(!J.E(this.b,this.a.b.c))return
H.k(a,"$isde")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.u()
w=z+y*x
if(z!==w){this.d=w
z=new D.M("zoom",z,w,this,[P.t])
z.b=!0
this.W(z)}},"$1","ghH",4,0,2],
b6:function(a,b){var z,y,x
z=this.e
y=a.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aE(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isah:1}}],["","",,M,{"^":"",il:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
sfT:function(a,b){this.d=H.j(b,"$isa0",[E.aB],"$asa0")},
aM:[function(a){var z
H.e(a,"$isy")
z=this.x
if(!(z==null))z.K(a)},function(){return this.aM(null)},"kT","$1","$0","gas",0,2,1],
l2:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aB
H.j(b,"$iso",[z],"$aso")
for(y=b.length,x=this.gas(),w={func:1,ret:-1,args:[D.y]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){if(t.gah()==null){s=new D.bA()
s.sai(null)
s.sbc(null)
s.c=null
s.d=0
t.sah(s)}s=t.gah()
s.toString
H.l(x,w)
if(s.a==null)s.sai(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.cq(a,b,this,[z])
z.b=!0
this.aM(z)},"$2","ghN",8,0,9],
l3:[function(a,b){var z,y,x
z=E.aB
H.j(b,"$iso",[z],"$aso")
for(y=b.gV(b),x=this.gas();y.G();)y.gL().gB().I(0,x)
z=new D.cr(a,b,this,[z])
z.b=!0
this.aM(z)},"$2","ghO",8,0,9],
sf4:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gB().I(0,this.gas())
y=this.c
this.c=a
if(a!=null)a.gB().h(0,this.gas())
z=new D.M("technique",y,this.c,this,[O.cB])
z.b=!0
this.aM(z)}},
gB:function(){var z=this.x
if(z==null){z=D.L()
this.x=z}return z},
b3:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.f1(this.c)
z=this.b
z.toString
y=a.a
C.b.jn(y,36160,null)
C.b.cP(y,2884)
C.b.cP(y,2929)
C.b.jI(y,513)
x=y.drawingBufferWidth
w=y.drawingBufferHeight
v=z.r
u=v.a
if(typeof x!=="number")return H.B(x)
t=C.k.ap(u*x)
u=v.b
if(typeof w!=="number")return H.B(w)
s=C.k.ap(u*w)
u=C.k.ap(v.c*x)
a.c=u
v=C.k.ap(v.d*w)
a.d=v
C.b.kQ(y,t,s,u,v)
C.b.jt(y,z.c)
z=z.a
C.b.js(y,z.a,z.b,z.c,z.d)
C.b.jr(y,16640)
z=this.a
y=a.c
v=a.d
u=z.c
r=z.d
q=z.e
p=q-r
o=1/Math.tan(u*0.5)
n=V.aE(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.f0(n)
y=$.eT
if(y==null){y=V.dh()
v=V.fF()
u=$.fB
if(u==null){u=new V.A(0,0,-1)
$.fB=u}u=V.eM(y,v,u)
$.eT=u
m=u}else m=y
z=z.b
if(z!=null){l=z.a
if(l!=null)m=l.u(0,m)}a.db.f0(m)
z=this.c
if(z!=null)z.aC(a)
for(z=this.d.a,z=new J.az(z,z.length,0,[H.u(z,0)]);z.G();)z.d.aC(a)
for(z=this.d.a,z=new J.az(z,z.length,0,[H.u(z,0)]);z.G();)z.d.b3(a)
this.a.toString
a.cy.d6()
a.db.d6()
this.b.toString
a.f_()},
$isnX:1}}],["","",,A,{"^":"",e7:{"^":"b;a,b,c"},hR:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
jO:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
C.b.ej(w.a,w.c)}},
jK:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
C.b.eh(w.a,w.c)}}},jb:{"^":"dj;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0ay,0an,0bJ,0ek,0bK,0bL,0el,0em,0bM,0bN,0en,0eo,0bO,0bP,0ep,0eq,0bQ,0er,0es,0bR,0eu,0ev,0bS,0bT,0bU,0ew,0ex,0bV,0bW,0ey,0ez,0bX,0eA,0cQ,0eB,0cR,0eC,0cS,0eD,0cT,0eE,0cU,0eF,0cV,a,b,0c,0d,0e,0f,0r,0x,0y",
sh8:function(a){this.r1=H.j(a,"$isa",[A.aI],"$asa")},
sfU:function(a){this.cQ=H.j(a,"$isa",[A.dv],"$asa")},
sfV:function(a){this.cR=H.j(a,"$isa",[A.dx],"$asa")},
sfW:function(a){this.cS=H.j(a,"$isa",[A.dy],"$asa")},
sfX:function(a){this.cT=H.j(a,"$isa",[A.dz],"$asa")},
sfY:function(a){this.cU=H.j(a,"$isa",[A.dA],"$asa")},
sfZ:function(a){this.cV=H.j(a,"$isa",[A.dB],"$asa")},
fH:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.z=a2
z=new P.al("")
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
a2.iS(z)
a2.iZ(z)
a2.iT(z)
a2.j6(z)
a2.j7(z)
a2.j0(z)
a2.jb(z)
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
z=new P.al("")
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
x.iW(z)
x.iR(z)
x.iU(z)
x.iX(z)
x.j4(z)
u=x.dy
if(u){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
x.j2(z)
x.j3(z)}x.j_(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=x.y
if(q!==C.d){r+="uniform float alpha;\n"
z.a=r
if(q!==C.i){r+="uniform int nullAlphaTxt;\n"
z.a=r
if(q===C.e){r+="uniform sampler2D alphaTxt;\n"
z.a=r}else if(q===C.f){r+="uniform samplerCube alphaTxt;\n"
z.a=r}}r+="\n"
z.a=r}r+="float alphaValue()\n"
z.a=r
r+="{\n"
z.a=r
switch(q){case C.d:r+="   return 1.0;\n"
z.a=r
break
case C.i:r+="   return alpha;\n"
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
case C.f:r+="   if(nullAlphaTxt > 0) return alpha;\n"
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
p=H.c([],[P.h])
if(x.b!==C.d)C.a.h(p,"ambient()")
if(x.c!==C.d)C.a.h(p,"diffuse(norm, litVec)")
if(x.d!==C.d)C.a.h(p,"invDiffuse(norm, litVec)")
if(x.e!==C.d)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.l(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
x.iV(z)
x.j1(z)
x.j5(z)
x.j8(z)
x.j9(z)
x.ja(z)
x.iY(z)}r=z.a+="// === Main ===\n"
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
o=H.c([],[P.h])
if(q){z.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(o,"lightAccum")
if(x.c!==C.d)z.a+="   setDiffuseColor();\n"
if(x.d!==C.d)z.a+="   setInvDiffuseColor();\n"
if(x.e!==C.d)z.a+="   setSpecularColor();\n"
if(x.z>0)z.a+="   lightAccum += allDirLightValues(norm);\n"
if(x.Q>0)z.a+="   lightAccum += allPointLightValues(norm);\n"
if(x.ch>0)z.a+="   lightAccum += allSpotLightValues(norm);\n"
if(x.cx>0)z.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(x.cy>0)z.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(x.db>0)z.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(x.dx<=0)z.a+="   lightAccum += nonLightValues(norm);\n"}if(x.a!==C.d)C.a.h(o,"emission()")
if(x.r!==C.d)C.a.h(o,"reflect(refl)")
if(x.x!==C.d)C.a.h(o,"refract(refl)")
if(o.length<=0)C.a.h(o,"vec3(0.0, 0.0, 0.0)")
n="vec4("+C.a.l(o," + ")+", alpha);"
x=z.a
if(t){x+="   gl_FragColor = colorMat*"+n+"\n"
z.a=x}else{x+="   gl_FragColor = "+n+"\n"
z.a=x}x+="}\n"
z.a=x
this.c=s
this.d=x.charCodeAt(0)==0?x:x
this.e=this.dL(s,35633)
this.f=this.dL(this.d,35632)
x=this.a
v=x.createProgram()
this.r=v
C.b.ea(x,v,this.e)
C.b.ea(x,this.r,this.f)
C.b.k9(x,this.r)
if(!H.dR(C.b.c6(x,this.r,35714))){m=C.b.fl(x,this.r)
C.b.jE(x,this.r)
H.q(P.r("Failed to link shader: "+H.i(m)))}this.iw()
this.iy()
this.Q=this.x.k(0,"posAttr")
this.cx=this.x.k(0,"normAttr")
this.ch=this.x.k(0,"binmAttr")
this.cy=this.x.k(0,"txt2DAttr")
this.db=this.x.k(0,"txtCubeAttr")
this.dx=this.x.k(0,"bendAttr")
if(a2.fr)this.id=H.k(this.y.m(0,"invViewMat"),"$isaI")
if(y)this.dy=H.k(this.y.m(0,"objMat"),"$isaI")
if(w)this.fr=H.k(this.y.m(0,"viewObjMat"),"$isaI")
this.fy=H.k(this.y.m(0,"projViewObjMat"),"$isaI")
if(a2.x2)this.k1=H.k(this.y.m(0,"txt2DMat"),"$isdw")
if(a2.y1)this.k2=H.k(this.y.m(0,"txtCubeMat"),"$isaI")
if(a2.y2)this.k3=H.k(this.y.m(0,"colorMat"),"$isaI")
this.sh8(H.c([],[A.aI]))
y=a2.ay
if(y>0){this.k4=H.e(this.y.m(0,"bendMatCount"),"$isK")
for(l=0;l<y;++l){x=this.r1
w=this.y
v="bendValues["+l+"].mat"
k=w.k(0,v)
if(k==null)H.q(P.r("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.k(k,"$isaI"))}}y=a2.a
if(y!==C.d){this.r2=H.k(this.y.m(0,"emissionClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.rx=H.k(this.y.m(0,"emissionTxt"),"$isap")
this.x1=H.k(this.y.m(0,"nullEmissionTxt"),"$isK")
break
case C.f:this.ry=H.k(this.y.m(0,"emissionTxt"),"$isaq")
this.x1=H.k(this.y.m(0,"nullEmissionTxt"),"$isK")
break}}y=a2.b
if(y!==C.d){this.x2=H.k(this.y.m(0,"ambientClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.y1=H.k(this.y.m(0,"ambientTxt"),"$isap")
this.ay=H.k(this.y.m(0,"nullAmbientTxt"),"$isK")
break
case C.f:this.y2=H.k(this.y.m(0,"ambientTxt"),"$isaq")
this.ay=H.k(this.y.m(0,"nullAmbientTxt"),"$isK")
break}}y=a2.c
if(y!==C.d){this.an=H.k(this.y.m(0,"diffuseClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.bJ=H.k(this.y.m(0,"diffuseTxt"),"$isap")
this.bK=H.k(this.y.m(0,"nullDiffuseTxt"),"$isK")
break
case C.f:this.ek=H.k(this.y.m(0,"diffuseTxt"),"$isaq")
this.bK=H.k(this.y.m(0,"nullDiffuseTxt"),"$isK")
break}}y=a2.d
if(y!==C.d){this.bL=H.k(this.y.m(0,"invDiffuseClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.el=H.k(this.y.m(0,"invDiffuseTxt"),"$isap")
this.bM=H.k(this.y.m(0,"nullInvDiffuseTxt"),"$isK")
break
case C.f:this.em=H.k(this.y.m(0,"invDiffuseTxt"),"$isaq")
this.bM=H.k(this.y.m(0,"nullInvDiffuseTxt"),"$isK")
break}}y=a2.e
if(y!==C.d){this.bP=H.k(this.y.m(0,"shininess"),"$isa_")
this.bN=H.k(this.y.m(0,"specularClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.en=H.k(this.y.m(0,"specularTxt"),"$isap")
this.bO=H.k(this.y.m(0,"nullSpecularTxt"),"$isK")
break
case C.f:this.eo=H.k(this.y.m(0,"specularTxt"),"$isaq")
this.bO=H.k(this.y.m(0,"nullSpecularTxt"),"$isK")
break}}switch(a2.f){case C.d:break
case C.i:break
case C.e:this.ep=H.k(this.y.m(0,"bumpTxt"),"$isap")
this.bQ=H.k(this.y.m(0,"nullBumpTxt"),"$isK")
break
case C.f:this.eq=H.k(this.y.m(0,"bumpTxt"),"$isaq")
this.bQ=H.k(this.y.m(0,"nullBumpTxt"),"$isK")
break}if(a2.dy){this.er=H.k(this.y.m(0,"envSampler"),"$isaq")
this.es=H.k(this.y.m(0,"nullEnvTxt"),"$isK")
y=a2.r
if(y!==C.d){this.bR=H.k(this.y.m(0,"reflectClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.eu=H.k(this.y.m(0,"reflectTxt"),"$isap")
this.bS=H.k(this.y.m(0,"nullReflectTxt"),"$isK")
break
case C.f:this.ev=H.k(this.y.m(0,"reflectTxt"),"$isaq")
this.bS=H.k(this.y.m(0,"nullReflectTxt"),"$isK")
break}}y=a2.x
if(y!==C.d){this.bT=H.k(this.y.m(0,"refraction"),"$isa_")
this.bU=H.k(this.y.m(0,"refractClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.ew=H.k(this.y.m(0,"refractTxt"),"$isap")
this.bV=H.k(this.y.m(0,"nullRefractTxt"),"$isK")
break
case C.f:this.ex=H.k(this.y.m(0,"refractTxt"),"$isaq")
this.bV=H.k(this.y.m(0,"nullRefractTxt"),"$isK")
break}}}y=a2.y
if(y!==C.d){this.bW=H.k(this.y.m(0,"alpha"),"$isa_")
switch(y){case C.d:break
case C.i:break
case C.e:this.ey=H.k(this.y.m(0,"alphaTxt"),"$isap")
this.bX=H.k(this.y.m(0,"nullAlphaTxt"),"$isK")
break
case C.f:this.ez=H.k(this.y.m(0,"alphaTxt"),"$isaq")
this.bX=H.k(this.y.m(0,"nullAlphaTxt"),"$isK")
break}}this.sfU(H.c([],[A.dv]))
this.sfV(H.c([],[A.dx]))
this.sfW(H.c([],[A.dy]))
this.sfX(H.c([],[A.dz]))
this.sfY(H.c([],[A.dA]))
this.sfZ(H.c([],[A.dB]))
if(a2.k2){y=a2.z
if(y>0){this.eA=H.e(this.y.m(0,"dirLightCount"),"$isK")
for(l=0;l<y;++l){x=this.y
w="dirLights["+l+"].viewDir"
k=x.k(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isI")
x=this.y
w="dirLights["+l+"].color"
j=x.k(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isI")
x=this.cQ;(x&&C.a).h(x,new A.dv(l,k,j))}}y=a2.Q
if(y>0){this.eB=H.e(this.y.m(0,"pntLightCount"),"$isK")
for(l=0;l<y;++l){x=this.y
w="pntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isI")
x=this.y
w="pntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isI")
x=this.y
w="pntLights["+l+"].color"
i=x.k(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isI")
x=this.y
w="pntLights["+l+"].att0"
h=x.k(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isa_")
x=this.y
w="pntLights["+l+"].att1"
g=x.k(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isa_")
x=this.y
w="pntLights["+l+"].att2"
f=x.k(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isa_")
x=this.cR;(x&&C.a).h(x,new A.dx(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.eC=H.e(this.y.m(0,"spotLightCount"),"$isK")
for(l=0;l<y;++l){x=this.y
w="spotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isI")
x=this.y
w="spotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isI")
x=this.y
w="spotLights["+l+"].viewPnt"
i=x.k(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isI")
x=this.y
w="spotLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isI")
x=this.y
w="spotLights["+l+"].cutoff"
g=x.k(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isa_")
x=this.y
w="spotLights["+l+"].coneAngle"
f=x.k(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isa_")
x=this.y
w="spotLights["+l+"].att0"
e=x.k(0,w)
if(e==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isa_")
x=this.y
w="spotLights["+l+"].att1"
d=x.k(0,w)
if(d==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isa_")
x=this.y
w="spotLights["+l+"].att2"
c=x.k(0,w)
if(c==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isa_")
x=this.cS;(x&&C.a).h(x,new A.dy(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.eD=H.e(this.y.m(0,"txtDirLightCount"),"$isK")
for(l=0;l<y;++l){x=this.y
w="txtDirLights["+l+"].objUp"
k=x.k(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isI")
x=this.y
w="txtDirLights["+l+"].objRight"
j=x.k(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isI")
x=this.y
w="txtDirLights["+l+"].objDir"
i=x.k(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isI")
x=this.y
w="txtDirLights["+l+"].viewDir"
h=x.k(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isI")
x=this.y
w="txtDirLights["+l+"].color"
g=x.k(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isI")
x=this.y
w="txtDirLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isK")
x=this.y
w="txtDirLightsTxt2D"+l
e=x.k(0,w)
if(e==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isap")
x=this.cT;(x&&C.a).h(x,new A.dz(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.eE=H.e(this.y.m(0,"txtPntLightCount"),"$isK")
for(l=0;l<y;++l){x=this.y
w="txtPntLights["+l+"].point"
k=x.k(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isI")
x=this.y
w="txtPntLights["+l+"].viewPnt"
j=x.k(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isI")
x=this.y
w="txtPntLights["+l+"].invViewRotMat"
i=x.k(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isdw")
x=this.y
w="txtPntLights["+l+"].color"
h=x.k(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isI")
x=this.y
w="txtPntLights["+l+"].nullTxt"
g=x.k(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isK")
x=this.y
w="txtPntLights["+l+"].att0"
f=x.k(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isa_")
x=this.y
w="txtPntLights["+l+"].att1"
e=x.k(0,w)
if(e==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isa_")
x=this.y
w="txtPntLights["+l+"].att2"
d=x.k(0,w)
if(d==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isa_")
x=this.y
w="txtPntLightsTxtCube"+l
c=x.k(0,w)
if(c==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isaq")
x=this.cU;(x&&C.a).h(x,new A.dA(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.eF=H.e(this.y.m(0,"txtSpotLightCount"),"$isK")
for(l=0;l<y;++l){x=this.y
w="txtSpotLights["+l+"].objPnt"
k=x.k(0,w)
if(k==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isI")
x=this.y
w="txtSpotLights["+l+"].objDir"
j=x.k(0,w)
if(j==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isI")
x=this.y
w="txtSpotLights["+l+"].objUp"
i=x.k(0,w)
if(i==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isI")
x=this.y
w="txtSpotLights["+l+"].objRight"
h=x.k(0,w)
if(h==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isI")
x=this.y
w="txtSpotLights["+l+"].viewPnt"
g=x.k(0,w)
if(g==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isI")
x=this.y
w="txtSpotLights["+l+"].nullTxt"
f=x.k(0,w)
if(f==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isK")
x=this.y
w="txtSpotLights["+l+"].color"
e=x.k(0,w)
if(e==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isI")
x=this.y
w="txtSpotLights["+l+"].tuScalar"
d=x.k(0,w)
if(d==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isa_")
x=this.y
w="txtSpotLights["+l+"].tvScalar"
c=x.k(0,w)
if(c==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isa_")
x=this.y
w="txtSpotLights["+l+"].att0"
b=x.k(0,w)
if(b==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(b,"$isa_")
x=this.y
w="txtSpotLights["+l+"].att1"
a=x.k(0,w)
if(a==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a,"$isa_")
x=this.y
w="txtSpotLights["+l+"].att2"
a0=x.k(0,w)
if(a0==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a0,"$isa_")
x=this.y
w="txtSpotLightsTxt2D"+l
a1=x.k(0,w)
if(a1==null)H.q(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a1,"$isap")
x=this.cV;(x&&C.a).h(x,new A.dB(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
ak:function(a,b,c){if(c==null||!c.d)C.b.S(b.a,b.d,1)
else{a.fw(c)
C.b.S(b.a,b.d,0)}},
ad:function(a,b,c){C.b.S(b.a,b.d,1)},
q:{
ja:function(a,b){var z,y
z=a.an
y=new A.jb(b,z)
y.fK(b,z)
y.fH(a,b)
return y}}},je:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,ay,an,bJ",
iS:function(a){var z,y,x
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
iZ:function(a){var z
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
iT:function(a){var z
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
j6:function(a){var z,y
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
j7:function(a){var z,y
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
j0:function(a){var z
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
jb:function(a){var z
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
aE:function(a,b,c){var z
if(b===C.d)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.f(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.c.ar(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
iW:function(a){var z,y
z=this.a
if(z===C.d)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aE(a,z,"emission")
y=a.a+="\n"
y+="vec3 emission()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.d:z=y
break
case C.i:z=y+"   return emissionClr;\n"
a.a=z
break
case C.e:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=z
break
case C.f:z=y+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=z
z+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
iR:function(a){var z,y
z=this.b
if(z===C.d)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aE(a,z,"ambient")
y=a.a+="\n"
y+="vec3 ambient()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.d:z=y
break
case C.i:z=y+"   return ambientClr;\n"
a.a=z
break
case C.e:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=z
break
case C.f:z=y+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=z
z+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=z
break
default:z=y}z+="}\n"
a.a=z
a.a=z+"\n"},
iU:function(a){var z,y
z=this.c
if(z===C.d)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aE(a,z,"diffuse")
y=a.a+="vec3 diffuseColor;\n"
y+="\n"
a.a=y
y+="void setDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.d:z=y
break
case C.i:z=y+"   diffuseColor = diffuseClr;\n"
a.a=z
break
case C.e:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=z
z+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.f:z=y+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
iX:function(a){var z,y
z=this.d
if(z===C.d)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aE(a,z,"invDiffuse")
y=a.a+="vec3 invDiffuseColor;\n"
y+="\n"
a.a=y
y+="void setInvDiffuseColor()\n"
a.a=y
y+="{\n"
a.a=y
switch(z){case C.d:z=y
break
case C.i:z=y+"   invDiffuseColor = invDiffuseClr;\n"
a.a=z
break
case C.e:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=z
z+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=z
break
case C.f:z=y+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
j4:function(a){var z,y
z=this.e
if(z===C.d)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aE(a,z,"specular")
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
case C.i:z=y+"   specularColor = specularClr;\n"
a.a=z
break
case C.e:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=z
z+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=z
break
case C.f:z=y+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
j_:function(a){var z,y
if(!this.r1)return
z=a.a+="// === Normal ===\n"
z+="\n"
a.a=z
y=this.f
switch(y){case C.d:break
case C.i:break
case C.e:z+="uniform sampler2D bumpTxt;\n"
a.a=z
z+="uniform int nullBumpTxt;\n"
a.a=z
z+="\n"
a.a=z
break
case C.f:z+="uniform samplerCube bumpTxt;\n"
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
case C.i:z+="   return normalize(normalVec);\n"
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
case C.f:z+="   if(nullBumpTxt > 0) return normalVec;\n"
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
j2:function(a){var z,y
z=this.r
if(z===C.d)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aE(a,z,"reflect")
y=a.a+="\n"
y+="vec3 reflect(vec3 refl)\n"
a.a=y
y+="{\n"
a.a=y
y+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=y
switch(z){case C.d:z=y
break
case C.i:z=y+"   vec3 scalar = reflectClr;\n"
a.a=z
break
case C.e:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=z
break
case C.f:z=y+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
j3:function(a){var z,y
z=this.x
if(z===C.d)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aE(a,z,"refract")
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
case C.i:z=y+"   vec3 scalar = refractClr;\n"
a.a=z
break
case C.e:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=z
z+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=z
break
case C.f:z=y+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
iV:function(a){var z,y
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
j1:function(a){var z,y
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
j5:function(a){var z,y
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
j8:function(a){var z,y,x
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
j9:function(a){var z,y,x
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
ja:function(a){var z,y,x
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
iY:function(a){var z
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
i:function(a){return this.an}},dv:{"^":"b;a,b,c"},dz:{"^":"b;a,b,c,d,e,f,r,x"},dx:{"^":"b;a,b,c,d,e,f,r"},dA:{"^":"b;a,b,c,d,e,f,r,x,y,z"},dy:{"^":"b;a,b,c,d,e,f,r,x,y,z"},dB:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},dj:{"^":"cY;",
fK:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dL:function(a,b){var z,y,x
z=this.a
y=C.b.jC(z,b)
C.b.fz(z,y,a)
C.b.jv(z,y)
if(!H.dR(C.b.fo(z,y,35713))){x=C.b.fn(z,y)
C.b.jF(z,y)
throw H.d(P.r("Error compiling shader '"+H.i(y)+"': "+H.i(x)))}return y},
iw:function(){var z,y,x,w,v,u
z=H.c([],[A.e7])
y=this.a
x=H.ad(C.b.c6(y,this.r,35721))
if(typeof x!=="number")return H.B(x)
w=0
for(;w<x;++w){v=C.b.fg(y,this.r,w)
u=C.b.fi(y,this.r,v.name)
C.a.h(z,new A.e7(y,v.name,u))}this.x=new A.hR(z)},
iy:function(){var z,y,x,w,v,u
z=H.c([],[A.ae])
y=this.a
x=H.ad(C.b.c6(y,this.r,35718))
if(typeof x!=="number")return H.B(x)
w=0
for(;w<x;++w){v=C.b.fh(y,this.r,w)
u=C.b.fp(y,this.r,v.name)
C.a.h(z,this.jD(v.type,v.size,v.name,u))}this.y=new A.kB(z)},
aP:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.K(z,y,b,c)
else return A.du(z,y,b,a,c)},
hg:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ap(z,y,b,c)
else return A.du(z,y,b,a,c)},
hh:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.aq(z,y,b,c)
else return A.du(z,y,b,a,c)},
bD:function(a,b){return new P.fQ(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
jD:function(a,b,c,d){switch(a){case 5120:return this.aP(b,c,d)
case 5121:return this.aP(b,c,d)
case 5122:return this.aP(b,c,d)
case 5123:return this.aP(b,c,d)
case 5124:return this.aP(b,c,d)
case 5125:return this.aP(b,c,d)
case 5126:return new A.a_(this.a,this.r,c,d)
case 35664:return new A.kw(this.a,this.r,c,d)
case 35665:return new A.I(this.a,this.r,c,d)
case 35666:return new A.kz(this.a,this.r,c,d)
case 35667:return new A.kx(this.a,this.r,c,d)
case 35668:return new A.ky(this.a,this.r,c,d)
case 35669:return new A.kA(this.a,this.r,c,d)
case 35674:return new A.kD(this.a,this.r,c,d)
case 35675:return new A.dw(this.a,this.r,c,d)
case 35676:return new A.aI(this.a,this.r,c,d)
case 35678:return this.hg(b,c,d)
case 35680:return this.hh(b,c,d)
case 35670:throw H.d(this.bD("BOOL",c))
case 35671:throw H.d(this.bD("BOOL_VEC2",c))
case 35672:throw H.d(this.bD("BOOL_VEC3",c))
case 35673:throw H.d(this.bD("BOOL_VEC4",c))
default:throw H.d(P.r("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}},cl:{"^":"b;a,b",
i:function(a){return this.b}},ae:{"^":"b;"},kB:{"^":"b;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.k(0,b)
if(z==null)throw H.d(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.O()},
jY:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w)x+=z[w].i(0)+a
return x},
O:function(){return this.jY("\n")}},K:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform1i: "+H.i(this.c)}},kx:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform2i: "+H.i(this.c)}},ky:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform3i: "+H.i(this.c)}},kA:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform4i: "+H.i(this.c)}},kv:{"^":"ae;0e,0f,a,b,c,d",
siP:function(a){this.e=H.j(a,"$isa",[P.n],"$asa")},
i:function(a){return"Uniform1iv: "+H.i(this.c)},
q:{
du:function(a,b,c,d,e){var z=new A.kv(a,b,c,e)
z.f=d
z.siP(P.j_(d,0,!1,P.n))
return z}}},a_:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform1f: "+H.i(this.c)}},kw:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform2f: "+H.i(this.c)}},I:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform3f: "+H.i(this.c)}},kz:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform4f: "+H.i(this.c)}},kD:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}},dw:{"^":"ae;a,b,c,d",
aq:function(a){var z=new Float32Array(H.bm(H.j(a,"$isa",[P.t],"$asa")))
C.b.f8(this.a,this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.i(this.c)}},aI:{"^":"ae;a,b,c,d",
aq:function(a){var z=new Float32Array(H.bm(H.j(a,"$isa",[P.t],"$asa")))
C.b.f9(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.i(this.c)}},ap:{"^":"ae;a,b,c,d",
fw:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)C.b.S(y,x,0)
else C.b.S(y,x,a.a)},
i:function(a){return"UniformSampler2D: "+H.i(this.c)}},aq:{"^":"ae;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}}],["","",,F,{"^":"",
dU:function(a,b,c,d){var z
H.l(c,{func:1,ret:-1,args:[F.ac,P.t,P.t]})
z=F.cz()
F.bO(z,b,c,d,a,1,0,0,1)
F.bO(z,b,c,d,a,0,1,0,3)
F.bO(z,b,c,d,a,0,0,1,2)
F.bO(z,b,c,d,a,-1,0,0,0)
F.bO(z,b,c,d,a,0,-1,0,0)
F.bO(z,b,c,d,a,0,0,-1,3)
z.al()
return z},
cK:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bO:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.l(c,{func:1,ret:-1,args:[F.ac,P.t,P.t]})
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.A(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.A(t+h,s+f,r+g)
z.b=q
p=new V.A(t-h,s-f,r-g)
z.c=p
o=new V.A(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cK(y)
k=F.cK(z.b)
j=F.cT(d,e,new F.mv(z,F.cK(z.c),F.cK(z.d),k,l,c),b)
if(j!=null)a.b2(j)},
hp:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.l(e,{func:1,ret:P.t,args:[P.t]})
if(f<3)return
z=F.cz()
y=b?-1:1
x=-6.283185307179586/f
w=H.c([],[F.ac])
v=z.a
u=new V.A(0,0,y)
u=u.t(0,Math.sqrt(u.E(u)))
C.a.h(w,v.jf(new V.c6(a,-1,-1,-1),new V.aZ(1,1,1,1),new V.U(0,0,d),new V.A(0,0,y),new V.a1(0.5,0.5),u))
for(v=y*y,t=0;t<=f;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=e.$1(t/f)
u=z.a
if(typeof p!=="number")return H.B(p)
o=new V.A(r,q,y).t(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.bi(new V.c6(a,-1,-1,-1),null,new V.aZ(n,l,m,1),new V.U(r*p,q*p,d),new V.A(0,0,y),new V.a1(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.jd(w)
return z},
hn:function(a,b,c,d,e,f){return F.mS(!0,c,d,new F.mR(a,f),e)},
mS:function(a,b,c,d,e){var z
H.l(d,{func:1,ret:P.t,args:[P.t,P.t]})
if(e<3)return
if(c<1)return
z=F.cT(c,e,new F.mU(d),null)
if(z==null)return
z.al()
z.bF()
if(b)z.b2(F.hp(3,!1,!1,1,new F.mV(d),e))
z.b2(F.hp(1,!0,!1,-1,new F.mW(d),e))
return z},
nf:function(a,b){var z=F.cT(a,b,new F.ng(),null)
z.d.c0()
z.al()
z.bF()
return z},
af:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
b=b.t(0,Math.sqrt(b.E(b)))
z=b.a
y=b.b
x=b.c
w=F.bi(null,null,null,new V.U(z,y,x),b,null,null,null,0)
v=a.jR(w,new F.dF())
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
w.sax(0,new V.aZ(u,t,s,1))
r=Math.sqrt(z*z+y*y)
q=Math.atan2(y,z)/1.5707963267948966
if(q<0)q=-q
p=Math.atan2(r,x)/3.141592653589793
w.sb5(new V.a1(q,p<0?-p:p))
a.a.h(0,w)
return w},
T:function(a,b,c,d,e){var z,y,x,w
if(e<=0)a.d.bE(0,b,d,c)
else{z=F.af(a,b.r.D(0,c.r).u(0,0.5))
y=F.af(a,c.r.D(0,d.r).u(0,0.5))
x=F.af(a,d.r.D(0,b.r).u(0,0.5))
w=e-1
F.T(a,b,z,x,w)
F.T(a,z,c,y,w)
F.T(a,y,x,z,w)
F.T(a,x,y,d,w)}},
hz:function(a,b,c,d){var z,y
z={}
z.a=b
z.a=new F.nA()
y=F.dU(a,null,new F.nB(z,c),d)
y.bF()
return y},
nD:function(a,b,c,d){return F.ho(c,a,d,b,new F.nE())},
nd:function(a,b,c,d,e,f){return F.ho(d,a,e,b,new F.ne(f,c))},
ho:function(a,b,c,d,e){var z=F.cT(a,b,new F.mT(H.l(e,{func:1,ret:V.U,args:[P.t]}),d,b,c),null)
if(z==null)return
z.al()
z.bF()
return z},
cT:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.ac,P.t,P.t]})
if(a<1)return
if(b<1)return
z=F.cz()
y=H.c([],[F.ac])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.bi(null,null,new V.aZ(u,0,0,1),null,null,new V.a1(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cM(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.bi(null,null,new V.aZ(o,n,m,1),null,null,new V.a1(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cM(d))}}z.d.je(a+1,b+1,y)
return z},
mv:{"^":"m:5;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.d_(z.b,b).d_(z.d.d_(z.c,b),c)
a.sa2(0,new V.U(y.a,y.b,y.c))
a.sc2(y.t(0,Math.sqrt(y.E(y))))
z=1-b
x=1-c
a.seb(new V.c6(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
mR:{"^":"m:20;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
mU:{"^":"m:5;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.B(v)
y=-y*v
u=x*v
a.sa2(0,new V.U(y,u,w))
u=new V.A(y,u,w)
a.sc2(u.t(0,Math.sqrt(u.E(u))))
a.seb(new V.c6(1-c,2+c,-1,-1))}},
mV:{"^":"m:30;a",
$1:function(a){return this.a.$2(a,1)}},
mW:{"^":"m:30;a",
$1:function(a){return this.a.$2(1-a,0)}},
ng:{"^":"m:5;",
$3:function(a,b,c){var z,y,x,w
z=c*3.141592653589793
y=Math.sin(z)
x=b*6.283185307179586
w=new V.A(Math.cos(x)*y,Math.cos(z),Math.sin(x)*y)
x=w.t(0,Math.sqrt(w.E(w)))
a.sa2(0,new V.U(x.a,x.b,x.c))}},
nA:{"^":"m:20;",
$2:function(a,b){return 0}},
nB:{"^":"m:5;a,b",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.B(z)
y=a.f
x=new V.A(y.a,y.b,y.c)
z=x.t(0,Math.sqrt(x.E(x))).u(0,this.b+z)
a.sa2(0,new V.U(z.a,z.b,z.c))}},
nE:{"^":"m:19;",
$1:function(a){return new V.U(Math.cos(a),Math.sin(a),0)}},
ne:{"^":"m:19;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.U(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
mT:{"^":"m:5;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.e2(y.$1(z),x)
x=J.e2(y.$1(z+3.141592653589793/this.c),x).M(0,w)
x=new V.A(x.a,x.b,x.c)
v=x.t(0,Math.sqrt(x.E(x)))
y=$.fC
if(y==null){y=new V.A(1,0,0)
$.fC=y
u=y}else u=y
y=v.aH(!J.E(v,u)?V.fG():u)
t=y.t(0,Math.sqrt(y.E(y)))
y=t.aH(v)
u=y.t(0,Math.sqrt(y.E(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.u(0,y*x)
x=t.u(0,r*x)
a.sa2(0,w.D(0,new V.U(y.a-x.a,y.b-x.b,y.c-x.c)))}},
ab:{"^":"b;0a,0b,0c,0d,0e",
bh:function(){if(!this.gbi()){C.a.I(this.a.a.d.b,this)
this.a.a.X()}this.ct()
this.cu()
this.ih()},
cz:function(a){this.a=a
C.a.h(a.d.b,this)},
cA:function(a){this.b=a
C.a.h(a.d.c,this)},
iv:function(a){this.c=a
C.a.h(a.d.d,this)},
ct:function(){var z=this.a
if(z!=null){C.a.I(z.d.b,this)
this.a=null}},
cu:function(){var z=this.b
if(z!=null){C.a.I(z.d.c,this)
this.b=null}},
ih:function(){var z=this.c
if(z!=null){C.a.I(z.d.d,this)
this.c=null}},
gbi:function(){return this.a==null||this.b==null||this.c==null},
h7:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.bH()
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.eQ())return
return v.t(0,Math.sqrt(v.E(v)))},
hc:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.M(0,y)
z=new V.A(z.a,z.b,z.c)
v=z.t(0,Math.sqrt(z.E(z)))
z=w.M(0,y)
z=new V.A(z.a,z.b,z.c)
z=v.aH(z.t(0,Math.sqrt(z.E(z))))
return z.t(0,Math.sqrt(z.E(z)))},
cJ:function(){if(this.d!=null)return!0
var z=this.h7()
if(z==null){z=this.hc()
if(z==null)return!1}this.d=z
this.a.a.X()
return!0},
h6:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=V.bH()
if(y!=null)v=v.D(0,y)
if(x!=null)v=v.D(0,x)
if(w!=null)v=v.D(0,w)
if(v.eQ())return
return v.t(0,Math.sqrt(v.E(v)))},
hb:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.p.$2(n,0)){z=r.M(0,u)
z=new V.A(z.a,z.b,z.c)
m=z.t(0,Math.sqrt(z.E(z)))
if(o.a-p.a<0)m=m.U(0)}else{l=(z-q.b)/n
z=r.M(0,u).u(0,l).D(0,u).M(0,x)
z=new V.A(z.a,z.b,z.c)
m=z.t(0,Math.sqrt(z.E(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.U(0)}z=this.d
if(z!=null){k=z.t(0,Math.sqrt(z.E(z)))
z=k.aH(m)
z=z.t(0,Math.sqrt(z.E(z))).aH(k)
m=z.t(0,Math.sqrt(z.E(z)))}return m},
cH:function(){if(this.e!=null)return!0
var z=this.h6()
if(z==null){z=this.hb()
if(z==null)return!1}this.e=z
this.a.a.X()
return!0},
aN:function(a,b){var z=b.a
if(z==null)throw H.d(P.r("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.d(P.r("May not replace a face's vertex with a vertex attached to a different shape."))},
gju:function(a){if(J.E(this.a,this.b))return!0
if(J.E(this.b,this.c))return!0
if(J.E(this.c,this.a))return!0
return!1},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
H:function(a){var z,y
if(this.gbi())return a+"disposed"
z=a+C.c.af(J.ag(this.a.e),0)+", "+C.c.af(J.ag(this.b.e),0)+", "+C.c.af(J.ag(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
O:function(){return this.H("")},
q:{
b7:function(a,b,c){var z,y,x
z=new F.ab()
y=a.a
if(y==null)H.q(P.r("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.q(P.r("May not create a face with vertices attached to different shapes."))
z.cz(a)
z.cA(b)
z.iv(c)
C.a.h(z.a.a.d.b,z)
z.a.a.X()
return z}}},
iq:{"^":"b;"},
k8:{"^":"iq;",
b1:function(a,b,c){var z,y
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
bD:{"^":"b;0a,0b",
bh:function(){if(!this.gbi()){C.a.I(this.a.a.c.b,this)
this.a.a.X()}this.ct()
this.cu()},
cz:function(a){this.a=a
C.a.h(a.c.b,this)},
cA:function(a){this.b=a
C.a.h(a.c.c,this)},
ct:function(){var z=this.a
if(z!=null){C.a.I(z.c.b,this)
this.a=null}},
cu:function(){var z=this.b
if(z!=null){C.a.I(z.c.c,this)
this.b=null}},
gbi:function(){return this.a==null||this.b==null},
aN:function(a,b){var z=b.a
if(z==null)throw H.d(P.r("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.d(P.r("May not replace a line's vertex with a vertex attached to a different shape."))},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
H:function(a){if(this.gbi())return a+"disposed"
return a+C.c.af(J.ag(this.a.e),0)+", "+C.c.af(J.ag(this.b.e),0)},
O:function(){return this.H("")},
q:{
iR:function(a,b){var z,y,x
z=new F.bD()
y=a.a
if(y==null)H.q(P.r("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.q(P.r("May not create a line with vertices attached to different shapes."))
z.cz(a)
z.cA(b)
C.a.h(z.a.a.c.b,z)
z.a.a.X()
return z}}},
iS:{"^":"b;"},
ku:{"^":"iS;",
b1:function(a,b,c){var z,y
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
return z==y.e}else{z=b.a
z.a.a.C()
z=z.e
y=c.b
y.a.a.C()
if(z==y.e){z=b.b
z.a.a.C()
z=z.e
y=c.a
y.a.a.C()
return z==y.e}else return!1}}},
c5:{"^":"b;0a",
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
H:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.c.af(J.ag(z.e),0)},
O:function(){return this.H("")}},
f2:{"^":"b;0a,0b,0c,0d,0e",
gB:function(){var z=this.e
if(z==null){z=D.L()
this.e=z}return z},
b2:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.C()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){v=z[w]
this.a.h(0,v.jx())}this.a.C()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.c5()
if(r.a==null)H.q(P.r("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.K(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.C()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.c.a
t.a.h(0,p)
t.a.h(0,o)
F.iR(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.D()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.C()
t=t.e
if(typeof t!=="number")return t.D()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.C()
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
F.b7(p,o,m)}z=this.e
if(!(z==null))z.aB()},
al:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.al()||!1
if(!this.a.al())y=!1
z=this.e
if(!(z==null))z.aB()
return y},
jS:function(a,b,c){var z,y,x,w
z=this.a.c.length
for(y=c;y<z;++y){x=this.a.c
if(y>=x.length)return H.f(x,y)
w=x[y]
if(b.b1(0,a,w))return w}return},
jR:function(a,b){return this.jS(a,b,0)},
il:function(a,b){var z,y,x,w,v,u
H.j(b,"$isa",[F.ac],"$asa")
this.a.h(0,a)
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.z)(b),++y){x=b[y]
for(;w=x.d,w.b.length+w.c.length+w.d.length>0;){w=w.k(0,0)
v=w.a
if(v==null||w.b==null||w.c==null)H.q(P.r("May not replace a face's vertex when the point has been disposed."))
if(J.E(v,x)){w.aN(x,a)
v=w.a
if(v!=null){C.a.I(v.d.b,w)
w.a=null}w.a=a
C.a.h(a.d.b,w)
u=1}else u=0
if(J.E(w.b,x)){w.aN(x,a)
v=w.b
if(v!=null){C.a.I(v.d.c,w)
w.b=null}w.b=a
C.a.h(a.d.c,w);++u}if(J.E(w.c,x)){w.aN(x,a)
v=w.c
if(v!=null){C.a.I(v.d.d,w)
w.c=null}w.c=a
C.a.h(a.d.d,w);++u}if(u>0){w=w.a.a.e
if(!(w==null))w.K(null)}}for(;w=x.c,w.b.length+w.c.length>0;){w=w.k(0,0)
v=w.a
if(v==null||w.b==null)H.q(P.r("May not replace a line's vertex when the point has been disposed."))
if(J.E(v,x)){w.aN(x,a)
v=w.a
if(v!=null){C.a.I(v.c.b,w)
w.a=null}w.a=a
C.a.h(a.c.b,w)
u=1}else u=0
if(J.E(w.b,x)){w.aN(x,a)
v=w.b
if(v!=null){C.a.I(v.c.c,w)
w.b=null}w.b=a
C.a.h(a.c.c,w);++u}if(u>0){w=w.a.a.e
if(!(w==null))w.K(null)}}for(;w=x.b.b,w.length>0;){w=w[0]
v=w.a
if(v==null)H.q(P.r("May not replace a point's vertex when the point has been disposed."))
if(J.E(v,x)){if(a.a==null)H.q(P.r("May not replace a point's vertex with a vertex which is not attached to a shape."))
v=w.a
if(v!=null){C.a.I(v.b.b,w)
w.a=null}w.a=a
C.a.h(a.b.b,w)
u=1}else u=0
if(u>0){w=w.a.a.e
if(!(w==null))w.K(null)}}this.a.I(0,x)}},
eT:function(a,b){var z,y,x,w,v,u,t,s
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.c(z.slice(0),[H.u(z,0)])
for(z=[F.ac];y.length!==0;){x=C.a.gjU(y)
C.a.kv(y,0)
if(x!=null){w=H.c([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.z)(y),++u){t=y[u]
if(t!=null&&a.b1(0,x,t)){C.a.h(w,t)
C.a.I(y,t)}}if(w.length>1){s=b.b2(w)
if(s!=null){this.il(s,w)
C.a.h(y,s)}}}}this.a.C()
this.c.c0()
this.d.c0()
this.b.kw()
this.c.d9(new F.ku())
this.d.d9(new F.k8())
z=this.e
if(!(z==null))z.aB()},
jh:function(a){this.eT(new F.dF(),new F.jp())},
bF:function(){return this.jh(null)},
jp:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aT()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aS().a)!==0)++w
if((x&$.$get$aR().a)!==0)++w
if((x&$.$get$aU().a)!==0)++w
if((x&$.$get$aV().a)!==0)++w
if((x&$.$get$bI().a)!==0)++w
if((x&$.$get$bJ().a)!==0)++w
if((x&$.$get$bk().a)!==0)++w
if((x&$.$get$aQ().a)!==0)++w
v=b.gds(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.t
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.ec])
for(r=0,q=0;q<w;++q){p=b.jk(q)
o=p.gds(p)
C.a.p(s,q,new Z.ec(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.f(y,n)
m=y[n].ka(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.p(t,l,m[k]);++l}}r+=o}H.j(t,"$isa",[x],"$asa")
y=a.a
j=y.createBuffer()
C.b.aw(y,34962,j)
C.b.ee(y,34962,new Float32Array(H.bm(t)),35044)
C.b.aw(y,34962,null)
i=new Z.ed(new Z.fM(34962,j),s,b)
i.shv(H.c([],[Z.c_]))
if(this.b.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.C()
C.a.h(h,g.e)}f=Z.dG(y,34963,H.j(h,"$isa",[x],"$asa"))
C.a.h(i.b,new Z.c_(0,h.length,f))}if(this.c.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.C()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.C()
C.a.h(h,g.e)}f=Z.dG(y,34963,H.j(h,"$isa",[x],"$asa"))
C.a.h(i.b,new Z.c_(1,h.length,f))}if(this.d.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.C()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.C()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].c
g.a.a.C()
C.a.h(h,g.e)}f=Z.dG(y,34963,H.j(h,"$isa",[x],"$asa"))
C.a.h(i.b,new Z.c_(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.h])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.H("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.H("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.H("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.H("   "))}return C.a.l(z,"\n")},
ao:function(a){var z=this.e
if(!(z==null))z.K(a)},
X:function(){return this.ao(null)},
$isnZ:1,
q:{
cz:function(){var z,y
z=new F.f2()
y=new F.l0(z)
y.b=!1
y.siQ(H.c([],[F.ac]))
z.a=y
y=new F.k2(z)
y.scq(H.c([],[F.c5]))
z.b=y
y=new F.k1(z)
y.shx(H.c([],[F.bD]))
z.c=y
y=new F.k0(z)
y.shm(H.c([],[F.ab]))
z.d=y
z.e=null
return z}}},
k0:{"^":"b;a,0b",
shm:function(a){this.b=H.j(a,"$isa",[F.ab],"$asa")},
bE:function(a,b,c,d){var z=this.a
z.a.h(0,b)
z.a.h(0,c)
z.a.h(0,d)
return F.b7(b,c,d)},
jd:function(a){var z,y,x,w,v,u,t
H.j(a,"$isa",[F.ac],"$asa")
z=H.c([],[F.ab])
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
C.a.h(z,F.b7(x,u,t))}}return z},
je:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.j(c,"$isa",[F.ac],"$asa")
z=H.c([],[F.ab])
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
C.a.h(z,F.b7(q,p,n))
y.a.h(0,q)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.b7(q,n,m))}else{r.h(0,p)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.b7(p,n,m))
y.a.h(0,p)
y.a.h(0,m)
y.a.h(0,q)
C.a.h(z,F.b7(p,m,q))}t=!t}v=!v}return z},
gn:function(a){return this.b.length},
d9:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.f(x,y)
w=x[y]
for(x=w.d,v=x.b.length+x.c.length+x.d.length-1;v>=0;--v){u=w.d.k(0,v)
for(t=v-1;t>=0;--t){s=w.d.k(0,t)
if(a.b1(0,u,s)){u.bh()
break}}}}},
c0:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=x.gju(x)
if(y)x.bh()}},
al:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].cJ())x=!1
return x},
cI:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].cH())x=!1
return x},
i:function(a){return this.O()},
H:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].H(a))
return C.a.l(z,"\n")},
O:function(){return this.H("")}},
k1:{"^":"b;a,0b",
shx:function(a){this.b=H.j(a,"$isa",[F.bD],"$asa")},
gn:function(a){return this.b.length},
d9:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.f(x,y)
w=x[y]
for(x=w.c,v=x.b.length+x.c.length-1;v>=0;--v){u=w.c.k(0,v)
for(t=v-1;t>=0;--t){s=w.c.k(0,t)
if(a.b1(0,u,s)){u.bh()
break}}}}},
c0:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=J.E(x.a,x.b)
if(y)x.bh()}},
i:function(a){return this.O()},
H:function(a){var z,y,x,w
z=H.c([],[P.h])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.f(w,x)
C.a.h(z,w[x].H(a+(""+x+". ")))}return C.a.l(z,"\n")},
O:function(){return this.H("")}},
k2:{"^":"b;a,0b",
scq:function(a){this.b=H.j(a,"$isa",[F.c5],"$asa")},
gn:function(a){return this.b.length},
kw:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
y=y[z]
x=y.a
if(x.b.b.length>1){if(x!=null){C.a.I(x.a.b.b,y)
x=y.a.a.e
if(!(x==null))x.K(null)}x=y.a
if(x!=null){C.a.I(x.b.b,y)
y.a=null}}}},
i:function(a){return this.O()},
H:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].H(a))
return C.a.l(z,"\n")},
O:function(){return this.H("")}},
ac:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cM:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.bi(this.cx,x,u,z,y,w,v,a,t)},
jx:function(){return this.cM(null)},
sa2:function(a,b){var z
if(!J.E(this.f,b)){this.f=b
z=this.a
if(z!=null)z.X()}},
sd4:function(a){var z
a=a==null?null:a.t(0,Math.sqrt(a.E(a)))
if(!J.E(this.r,a)){this.r=a
z=this.a
if(z!=null)z.X()}},
sed:function(a){var z
a=a==null?null:a.t(0,Math.sqrt(a.E(a)))
if(!J.E(this.x,a)){this.x=a
z=this.a
if(z!=null)z.X()}},
sb5:function(a){var z
if(!J.E(this.y,a)){this.y=a
z=this.a
if(z!=null)z.X()}},
sc2:function(a){var z
if(!J.E(this.z,a)){this.z=a
z=this.a
if(z!=null)z.X()}},
sax:function(a,b){var z
if(!J.E(this.Q,b)){this.Q=b
z=this.a
if(z!=null)z.X()}},
sfd:function(a){var z
if(this.ch!==a){this.ch=a
z=this.a
if(z!=null)z.X()}},
seb:function(a){var z
if(!J.E(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.X()}},
ka:function(a){var z,y
if(a.w(0,$.$get$aT())){z=this.f
y=[P.t]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.w(0,$.$get$aS())){z=this.r
y=[P.t]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.w(0,$.$get$aR())){z=this.x
y=[P.t]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.w(0,$.$get$aU())){z=this.y
y=[P.t]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(a.w(0,$.$get$aV())){z=this.z
y=[P.t]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.w(0,$.$get$bI())){z=this.Q
y=[P.t]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.w(0,$.$get$bJ())){z=this.Q
if(z==null)return H.c([1,1,1,1],[P.t])
else return z.dd(0)}else if(a.w(0,$.$get$bk()))return H.c([this.ch],[P.t])
else if(a.w(0,$.$get$aQ())){z=this.cx
y=[P.t]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.t])},
cJ:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bH()
this.d.a1(0,new F.l9(z))
z=z.a
this.r=z.t(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.X()
z=this.a.e
if(!(z==null))z.aB()}return!0},
cH:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bH()
this.d.a1(0,new F.l8(z))
z=z.a
this.x=z.t(0,Math.sqrt(z.E(z)))
z=this.a
if(z!=null){z.X()
z=this.a.e
if(!(z==null))z.aB()}return!0},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
H:function(a){var z,y,x
z=H.c([],[P.h])
C.a.h(z,C.c.af(J.ag(this.e),0))
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
C.a.h(z,V.J(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.l(z,", ")
return a+"{"+x+"}"},
O:function(){return this.H("")},
q:{
bi:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ac()
y=new F.l7(z)
y.scq(H.c([],[F.c5]))
z.b=y
y=new F.l5(z)
x=[F.bD]
y.shy(H.c([],x))
y.shz(H.c([],x))
z.c=y
y=new F.l1(z)
x=[F.ab]
y.shn(H.c([],x))
y.sho(H.c([],x))
y.shp(H.c([],x))
z.d=y
h=$.$get$fJ()
z.e=0
y=$.$get$aT()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aS().a)!==0?e:null
z.x=(x&$.$get$aR().a)!==0?b:null
z.y=(x&$.$get$aU().a)!==0?f:null
z.z=(x&$.$get$aV().a)!==0?g:null
z.Q=(x&$.$get$fK().a)!==0?c:null
z.ch=(x&$.$get$bk().a)!==0?i:0
z.cx=(x&$.$get$aQ().a)!==0?a:null
return z}}},
l9:{"^":"m:6;a",
$1:function(a){var z,y
H.e(a,"$isab")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
l8:{"^":"m:6;a",
$1:function(a){var z,y
H.e(a,"$isab")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.D(0,z)}}},
l0:{"^":"b;a,0b,0c",
siQ:function(a){this.c=H.j(a,"$isa",[F.ac],"$asa")},
C:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.f(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z,y
z=b.a
if(z!=null){if(z===this.a)return!1
throw H.d(P.r("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
y=this.a
b.a=y
C.a.h(z,b)
y.X()
return!0},
jg:function(a,b,c,d,e,f,g,h,i){var z=F.bi(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
jf:function(a,b,c,d,e,f){return this.jg(a,null,b,c,d,e,f,null,0)},
gn:function(a){return this.c.length},
I:function(a,b){var z,y
if(b==null)return!1
z=this.a
if(b.a!==z)return!1
if(b.b.b.length===0){y=b.c
if(y.b.length===0&&y.c.length===0){y=b.d
y=y.b.length===0&&y.c.length===0&&y.d.length===0}else y=!1}else y=!1
if(!y)throw H.d(P.r("May not remove a vertex without first making it empty."))
b.a=null
C.a.I(this.c,b)
z.X()
this.b=!0
return!0},
al:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].cJ()
return!0},
cI:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].cH()
return!0},
jq:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.t(0,Math.sqrt(u*u+t*t+s*s))
if(!J.E(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.K(null)}}}}return!0},
i:function(a){return this.O()},
H:function(a){var z,y,x,w
this.C()
z=H.c([],[P.h])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].H(a))
return C.a.l(z,"\n")},
O:function(){return this.H("")}},
l1:{"^":"b;a,0b,0c,0d",
shn:function(a){this.b=H.j(a,"$isa",[F.ab],"$asa")},
sho:function(a){this.c=H.j(a,"$isa",[F.ab],"$asa")},
shp:function(a){this.d=H.j(a,"$isa",[F.ab],"$asa")},
gn:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var z,y,x
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
a1:function(a,b){H.l(b,{func:1,ret:-1,args:[F.ab]})
C.a.a1(this.b,b)
C.a.a1(this.c,new F.l2(this,b))
C.a.a1(this.d,new F.l3(this,b))},
i:function(a){return this.O()},
H:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].H(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].H(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].H(a))
return C.a.l(z,"\n")},
O:function(){return this.H("")}},
l2:{"^":"m:6;a,b",
$1:function(a){H.e(a,"$isab")
if(!J.E(a.a,this.a))this.b.$1(a)}},
l3:{"^":"m:6;a,b",
$1:function(a){var z
H.e(a,"$isab")
z=this.a
if(!J.E(a.a,z)&&!J.E(a.b,z))this.b.$1(a)}},
l5:{"^":"b;a,0b,0c",
shy:function(a){this.b=H.j(a,"$isa",[F.bD],"$asa")},
shz:function(a){this.c=H.j(a,"$isa",[F.bD],"$asa")},
gn:function(a){return this.b.length+this.c.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.f(z,x)
return z[x]}else{if(b<0)return H.f(z,b)
return z[b]}},
i:function(a){return this.O()},
H:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].H(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].H(a))
return C.a.l(z,"\n")},
O:function(){return this.H("")}},
l6:{"^":"b;"},
dF:{"^":"l6;",
b1:function(a,b,c){return J.E(b.f,c.f)}},
fI:{"^":"b;"},
l4:{"^":"fI;",
b2:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.j(a,"$isa",[F.ac],"$asa")
for(z=a.length,y=0,x=null,w=null,v=null,u=0,t=null,s=0,r=null,q=0,p=null,o=0,n=0,m=0;m<z;++m){l=a[m]
k=l.f
if(k!=null){x=x==null?k:new V.U(x.a+k.a,x.b+k.b,x.c+k.c);++y}j=l.r
if(j!=null)w=w==null?j:new V.A(w.a+j.a,w.b+j.b,w.c+j.c)
i=l.x
if(i!=null)v=v==null?i:new V.A(v.a+i.a,v.b+i.b,v.c+i.c)
h=l.y
if(h!=null){r=r==null?h:new V.a1(r.a+h.a,r.b+h.b);++s}g=l.z
if(g!=null){p=p==null?g:new V.A(p.a+g.a,p.b+g.b,p.c+g.c);++q}f=l.Q
if(f!=null){e=f.a
d=f.b
c=f.c
f=f.d
if(t==null){f=[e,d,c,f]
t=new V.ca(f[0],f[1],f[2],f[3])}else{f=[e,d,c,f]
e=f[0]
d=f[1]
c=f[2]
f=f[3]
t=new V.ca(t.a+e,t.b+d,t.c+c,t.d+f)}++u}f=l.ch
if(typeof f!=="number")return H.B(f)
n+=f;++o}b=F.bi(null,null,null,null,null,null,null,null,0)
if(y<=0||x==null)b.sa2(0,null)
else b.sa2(0,x.t(0,y))
if(w==null)b.sd4(null)
else b.sd4(w.t(0,Math.sqrt(w.E(w))))
if(v==null)b.sed(null)
else b.sed(v.t(0,Math.sqrt(v.E(v))))
if(s<=0||r==null)b.sb5(null)
else b.sb5(r.t(0,s))
if(q<=0||p==null)b.sc2(null)
else b.sc2(p.t(0,q))
if(u<=0||t==null)b.sax(0,null)
else{z=t.t(0,u)
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
b.sax(0,new V.aZ(f,e,d,z))}if(o<=0)b.sfd(0)
else b.sfd(n/o)
return b}},
jp:{"^":"fI;",
b2:function(a){var z,y,x,w
H.j(a,"$isa",[F.ac],"$asa")
z=V.bH()
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.A(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.t(0,Math.sqrt(z.E(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.z)(a),++x)a[x].sd4(z)
return}},
l7:{"^":"b;a,0b",
scq:function(a){this.b=H.j(a,"$isa",[F.c5],"$asa")},
gn:function(a){return this.b.length},
i:function(a){return this.O()},
H:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].H(a))
return C.a.l(z,"\n")},
O:function(){return this.H("")}}}],["","",,O,{"^":"",j9:{"^":"cB;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
sh9:function(a){this.e=H.j(a,"$isa0",[V.ak],"$asa0")},
gB:function(){var z=this.dy
if(z==null){z=D.L()
this.dy=z}return z},
a6:[function(a){var z
H.e(a,"$isy")
z=this.dy
if(!(z==null))z.K(a)},function(){return this.a6(null)},"h0","$1","$0","gby",0,2,1],
ip:[function(a){H.e(a,"$isy")
this.a=null
this.a6(a)},function(){return this.ip(null)},"lm","$1","$0","gio",0,2,1],
l_:[function(a,b){var z=V.ak
z=new D.cq(a,H.j(b,"$iso",[z],"$aso"),this,[z])
z.b=!0
this.a6(z)},"$2","ghK",8,0,24],
l0:[function(a,b){var z=V.ak
z=new D.cr(a,H.j(b,"$iso",[z],"$aso"),this,[z])
z.b=!0
this.a6(z)},"$2","ghL",8,0,24],
dI:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
z=this.dx
y=C.h.a7(z.e.length+3,4)*4
x=C.h.a7(z.f.length+3,4)*4
w=C.h.a7(z.r.length+3,4)*4
v=C.h.a7(z.x.length+3,4)*4
u=C.h.a7(z.y.length+3,4)*4
t=C.h.a7(z.z.length+3,4)*4
s=C.h.a7(this.e.a.length+3,4)*4
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
i=m!==C.d||l!==C.d
h=r!==C.d||q!==C.d||p!==C.d||o!==C.d
g=o===C.d
f=!g||i
e=q!==C.d||p!==C.d||!g||n!==C.d||i
g=n===C.d
d=!g
c=z===C.e||r===C.e||q===C.e||p===C.e||o===C.e||n===C.e||m===C.e||l===C.e||k===C.e
b=z===C.f||r===C.f||q===C.f||p===C.f||o===C.f||n===C.f||m===C.f||l===C.f||k===C.f
a=x+u+v+w+t>0
a0=s>0
a1=e||!g||f
a2=$.$get$aT()
if(e){g=$.$get$aS()
a2=new Z.bj(a2.a|g.a)}if(d){g=$.$get$aR()
a2=new Z.bj(a2.a|g.a)}if(c){g=$.$get$aU()
a2=new Z.bj(a2.a|g.a)}if(b){g=$.$get$aV()
a2=new Z.bj(a2.a|g.a)}if(a0){g=$.$get$aQ()
a2=new Z.bj(a2.a|g.a)}return new A.je(z,r,q,p,o,n,m,l,k,y,x,w,v,u,t,y+x+w+v+u+t,i,i,a,a1,!0,!1,!1,h,a,f,e,d,c,b,a0,!1,!1,!1,s,j.charCodeAt(0)==0?j:j,a2)},
a0:function(a,b){H.j(a,"$isa",[T.dp],"$asa")
if(b!=null)if(!C.a.Z(a,b)){b.a=a.length
C.a.h(a,b)}},
aC:function(a){var z,y,x,w,v
for(z=this.dx.a,z=new J.az(z,z.length,0,[H.u(z,0)]);z.G();){y=z.d
y.toString
x=$.cF
if(x==null){x=new V.A(0,0,1)
$.cF=x}y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.de(x)}}},
ky:function(a,a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=this.a
if(z==null){z=this.dI()
y=a.fr.k(0,z.an)
if(y==null){y=A.ja(z,a.a)
x=y.b
if(x.length===0)H.q(P.r("May not cache a shader with no name."))
if(a.fr.bH(x))H.q(P.r('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.p(0,x,y)}this.a=y
a0.e=null
z=y}w=z.z
v=w.bJ
z=a0.e
if(!(z instanceof Z.ed)){a0.e=null
z=null}if(z==null||!z.d.w(0,v)){z=w.r1
if(z)a0.d.al()
u=w.r2
if(u){t=a0.d
s=t.e
if(!(s==null))++s.d
t.d.cI()
t.a.cI()
t=t.e
if(!(t==null))t.aB()}t=w.ry
if(t){s=a0.d
r=s.e
if(!(r==null))++r.d
s.a.jq()
s=s.e
if(!(s==null))s.aB()}q=a0.d.jp(new Z.la(a.a),v)
q.aZ($.$get$aT()).e=this.a.Q.c
if(z)q.aZ($.$get$aS()).e=this.a.cx.c
if(u)q.aZ($.$get$aR()).e=this.a.ch.c
if(w.rx)q.aZ($.$get$aU()).e=this.a.cy.c
if(t)q.aZ($.$get$aV()).e=this.a.db.c
if(w.x1)q.aZ($.$get$aQ()).e=this.a.dx.c
a0.e=q}z=T.dp
p=H.c([],[z])
u=this.a
t=a.a
C.b.fb(t,u.r)
u.x.jO()
if(w.fx){u=this.a
s=a.dx.ga4()
u=u.dy
u.toString
u.aq(s.ag(0,!0))}if(w.fy){u=this.a
s=a.cx
if(s==null){s=a.db.ga4().u(0,a.dx.ga4())
a.cx=s}u=u.fr
u.toString
u.aq(s.ag(0,!0))}u=this.a
s=a.ch
if(s==null){s=a.gkt().u(0,a.dx.ga4())
a.ch=s}u=u.fy
u.toString
u.aq(s.ag(0,!0))
if(w.x2){u=this.a
s=this.b
u=u.k1
u.toString
u.aq(C.r.ag(s,!0))}if(w.y1){u=this.a
s=this.c
u=u.k2
u.toString
u.aq(C.r.ag(s,!0))}if(w.y2){u=this.a
s=this.d
u=u.k3
u.toString
u.aq(C.r.ag(s,!0))}if(w.ay>0){o=this.e.a.length
u=this.a.k4
C.b.S(u.a,u.d,o)
for(u=[P.t],n=0;n<o;++n){s=this.a
r=this.e.a
if(n>=r.length)return H.f(r,n)
r=r[n]
s.toString
H.e(r,"$isak")
s=s.r1
if(n>=s.length)return H.f(s,n)
s=s[n]
m=new Float32Array(H.bm(H.j(r.ag(0,!0),"$isa",u,"$asa")))
C.b.f9(s.a,s.d,!1,m)}}switch(w.a){case C.d:break
case C.i:u=this.a
s=this.f.f
u=u.r2
C.b.A(u.a,u.d,s.a,s.b,s.c)
break
case C.e:this.a0(p,this.f.d)
u=this.a
s=this.f.d
u.ak(u.rx,u.x1,s)
s=this.a
u=this.f.f
s=s.r2
C.b.A(s.a,s.d,u.a,u.b,u.c)
break
case C.f:this.a0(p,this.f.e)
u=this.a
s=this.f.e
u.ad(u.ry,u.x1,s)
s=this.a
u=this.f.f
s=s.r2
C.b.A(s.a,s.d,u.a,u.b,u.c)
break}if(w.k2){switch(w.b){case C.d:break
case C.i:u=this.a
s=this.r.f
u=u.x2
C.b.A(u.a,u.d,s.a,s.b,s.c)
break
case C.e:this.a0(p,this.r.d)
u=this.a
s=this.r.d
u.ak(u.y1,u.ay,s)
s=this.a
u=this.r.f
s=s.x2
C.b.A(s.a,s.d,u.a,u.b,u.c)
break
case C.f:this.a0(p,this.r.e)
u=this.a
s=this.r.e
u.ad(u.y2,u.ay,s)
s=this.a
u=this.r.f
s=s.x2
C.b.A(s.a,s.d,u.a,u.b,u.c)
break}switch(w.c){case C.d:break
case C.i:u=this.a
s=this.x.f
u=u.an
C.b.A(u.a,u.d,s.a,s.b,s.c)
break
case C.e:this.a0(p,this.x.d)
u=this.a
s=this.x.d
u.ak(u.bJ,u.bK,s)
s=this.a
u=this.x.f
s=s.an
C.b.A(s.a,s.d,u.a,u.b,u.c)
break
case C.f:this.a0(p,this.x.e)
u=this.a
s=this.x.e
u.ad(u.ek,u.bK,s)
s=this.a
u=this.x.f
s=s.an
C.b.A(s.a,s.d,u.a,u.b,u.c)
break}switch(w.d){case C.d:break
case C.i:u=this.a
s=this.y.f
u=u.bL
C.b.A(u.a,u.d,s.a,s.b,s.c)
break
case C.e:this.a0(p,this.y.d)
u=this.a
s=this.y.d
u.ak(u.el,u.bM,s)
s=this.a
u=this.y.f
s=s.bL
C.b.A(s.a,s.d,u.a,u.b,u.c)
break
case C.f:this.a0(p,this.y.e)
u=this.a
s=this.y.e
u.ad(u.em,u.bM,s)
s=this.a
u=this.y.f
s=s.bL
C.b.A(s.a,s.d,u.a,u.b,u.c)
break}switch(w.e){case C.d:break
case C.i:u=this.a
s=this.z.f
u=u.bN
C.b.A(u.a,u.d,s.a,s.b,s.c)
s=this.a
u=this.z.ch
s=s.bP
C.b.R(s.a,s.d,u)
break
case C.e:this.a0(p,this.z.d)
u=this.a
s=this.z.d
u.ak(u.en,u.bO,s)
s=this.a
u=this.z.f
s=s.bN
C.b.A(s.a,s.d,u.a,u.b,u.c)
u=this.a
s=this.z.ch
u=u.bP
C.b.R(u.a,u.d,s)
break
case C.f:this.a0(p,this.z.e)
u=this.a
s=this.z.e
u.ad(u.eo,u.bO,s)
s=this.a
u=this.z.f
s=s.bN
C.b.A(s.a,s.d,u.a,u.b,u.c)
u=this.a
s=this.z.ch
u=u.bP
C.b.R(u.a,u.d,s)
break}if(w.z>0){o=this.dx.e.length
u=this.a.eA
C.b.S(u.a,u.d,o)
l=a.db.ga4()
for(u=this.dx.e,s=u.length,k=0,j=0;j<u.length;u.length===s||(0,H.z)(u),++j){i=u[j]
r=this.a.cQ
if(k>=r.length)return H.f(r,k)
h=r[k]
r=l.de(i.a)
g=r.a
f=r.b
e=r.c
e=r.t(0,Math.sqrt(g*g+f*f+e*e))
f=h.b
g=e.a
r=e.b
e=e.c
C.b.A(f.a,f.d,g,r,e)
e=i.c
r=h.c
C.b.A(r.a,r.d,e.a,e.b,e.c);++k}}if(w.Q>0){o=this.dx.f.length
u=this.a.eB
C.b.S(u.a,u.d,o)
l=a.db.ga4()
for(u=this.dx.f,s=u.length,k=0,j=0;j<u.length;u.length===s||(0,H.z)(u),++j){i=u[j]
r=this.a.cR
if(k>=r.length)return H.f(r,k)
h=r[k]
r=i.gbn(i)
g=h.b
f=r.gdi(r)
e=r.gdj(r)
r=r.gdk(r)
C.b.A(g.a,g.d,f,e,r)
r=l.bs(i.gbn(i))
e=h.c
C.b.A(e.a,e.d,r.a,r.b,r.c)
r=i.gax(i)
e=h.d
f=r.gc_()
g=r.gbu()
r=r.gbG()
C.b.A(e.a,e.d,f,g,r)
r=i.gcB()
g=h.e
C.b.R(g.a,g.d,r)
r=i.gcC()
g=h.f
C.b.R(g.a,g.d,r)
r=i.gcD()
g=h.r
C.b.R(g.a,g.d,r);++k}}if(w.ch>0){o=this.dx.r.length
u=this.a.eC
C.b.S(u.a,u.d,o)
l=a.db.ga4()
for(u=this.dx.r,s=u.length,k=0,j=0;j<u.length;u.length===s||(0,H.z)(u),++j){i=u[j]
r=this.a.cS
if(k>=r.length)return H.f(r,k)
h=r[k]
r=i.gbn(i)
g=h.b
f=r.gdi(r)
e=r.gdj(r)
r=r.gdk(r)
C.b.A(g.a,g.d,f,e,r)
r=i.gcO(i).lv()
e=h.c
f=r.gaW(r)
g=r.gaX(r)
r=r.gaY()
C.b.A(e.a,e.d,f,g,r)
r=l.bs(i.gbn(i))
g=h.d
C.b.A(g.a,g.d,r.a,r.b,r.c)
r=i.gax(i)
g=h.e
f=r.gc_()
e=r.gbu()
r=r.gbG()
C.b.A(g.a,g.d,f,e,r)
r=i.gls()
e=h.f
C.b.R(e.a,e.d,r)
r=i.glq()
e=h.r
C.b.R(e.a,e.d,r)
r=i.gcB()
e=h.x
C.b.R(e.a,e.d,r)
r=i.gcC()
e=h.y
C.b.R(e.a,e.d,r)
r=i.gcD()
e=h.z
C.b.R(e.a,e.d,r);++k}}if(w.cx>0){o=this.dx.x.length
u=this.a.eD
C.b.S(u.a,u.d,o)
l=a.db.ga4()
for(u=this.dx.x,s=u.length,r=[z],k=0,j=0;j<u.length;u.length===s||(0,H.z)(u),++j){i=u[j]
g=this.a.cT
if(k>=g.length)return H.f(g,k)
h=g[k]
g=i.gbp()
H.j(p,"$isa",r,"$asa")
if(!C.a.Z(p,g)){g.sbA(p.length)
C.a.h(p,g)}g=i.gcO(i)
f=h.d
e=g.gaW(g)
d=g.gaX(g)
g=g.gaY()
C.b.A(f.a,f.d,e,d,g)
g=i.gc3()
d=h.b
e=g.gaW(g)
f=g.gaX(g)
g=g.gaY()
C.b.A(d.a,d.d,e,f,g)
g=i.gbo(i)
f=h.c
e=g.gaW(g)
d=g.gaX(g)
g=g.gaY()
C.b.A(f.a,f.d,e,d,g)
g=l.de(i.gcO(i))
d=g.a
e=g.b
f=g.c
f=g.t(0,Math.sqrt(d*d+e*e+f*f))
e=h.e
d=f.a
g=f.b
f=f.c
C.b.A(e.a,e.d,d,g,f)
f=i.gax(i)
g=h.f
d=f.gc_()
e=f.gbu()
f=f.gbG()
C.b.A(g.a,g.d,d,e,f)
f=i.gbp()
g=f.gd0(f)
if(!g){g=h.x
C.b.S(g.a,g.d,1)}else{g=h.r
e=f.ghB()
d=g.a
g=g.d
if(!e)C.b.S(d,g,0)
else C.b.S(d,g,f.gbA())
g=h.x
C.b.S(g.a,g.d,0)}++k}}if(w.cy>0){o=this.dx.y.length
u=this.a.eE
C.b.S(u.a,u.d,o)
l=a.db.ga4()
for(u=this.dx.y,s=u.length,r=[P.t],g=[z],k=0,j=0;j<u.length;u.length===s||(0,H.z)(u),++j){i=u[j]
f=this.a.cU
if(k>=f.length)return H.f(f,k)
h=f[k]
f=i.gbp()
H.j(p,"$isa",g,"$asa")
if(!C.a.Z(p,f)){f.sbA(p.length)
C.a.h(p,f)}c=l.u(0,i.ga4())
f=i.ga4()
e=$.bF
if(e==null){e=new V.U(0,0,0)
$.bF=e}e=f.bs(e)
f=h.b
d=e.gdi(e)
b=e.gdj(e)
e=e.gdk(e)
C.b.A(f.a,f.d,d,b,e)
f=$.bF
if(f==null){f=new V.U(0,0,0)
$.bF=f}f=c.bs(f)
e=h.c
C.b.A(e.a,e.d,f.a,f.b,f.c)
f=c.eP()
e=h.d
m=new Float32Array(H.bm(H.j(new V.eL(f.a,f.b,f.c,f.e,f.f,f.r,f.y,f.z,f.Q).ag(0,!0),"$isa",r,"$asa")))
C.b.f8(e.a,e.d,!1,m)
e=i.gax(i)
f=h.e
d=e.gc_()
b=e.gbu()
e=e.gbG()
C.b.A(f.a,f.d,d,b,e)
e=i.gbp()
f=e.gd0(e)
if(!f){f=h.r
C.b.S(f.a,f.d,1)}else{f=h.f
d=e.gd0(e)
b=f.a
f=f.d
if(!d)C.b.S(b,f,0)
else C.b.S(b,f,e.glt(e))
f=h.r
C.b.S(f.a,f.d,0)}f=i.gcB()
e=h.x
C.b.R(e.a,e.d,f)
f=i.gcC()
e=h.y
C.b.R(e.a,e.d,f)
f=i.gcD()
e=h.z
C.b.R(e.a,e.d,f);++k}}if(w.db>0){o=this.dx.z.length
u=this.a.eF
C.b.S(u.a,u.d,o)
l=a.db.ga4()
for(u=this.dx.z,s=u.length,z=[z],k=0,j=0;j<u.length;u.length===s||(0,H.z)(u),++j){i=u[j]
r=this.a.cV
if(k>=r.length)return H.f(r,k)
h=r[k]
r=i.gbp()
H.j(p,"$isa",z,"$asa")
if(!C.a.Z(p,r)){r.sbA(p.length)
C.a.h(p,r)}r=i.gbn(i)
g=h.b
f=r.gdi(r)
e=r.gdj(r)
r=r.gdk(r)
C.b.A(g.a,g.d,f,e,r)
r=i.gcO(i)
e=h.c
f=r.gaW(r)
g=r.gaX(r)
r=r.gaY()
C.b.A(e.a,e.d,f,g,r)
r=i.gc3()
g=h.d
f=r.gaW(r)
e=r.gaX(r)
r=r.gaY()
C.b.A(g.a,g.d,f,e,r)
r=i.gbo(i)
e=h.e
f=r.gaW(r)
g=r.gaX(r)
r=r.gaY()
C.b.A(e.a,e.d,f,g,r)
r=l.bs(i.gbn(i))
g=h.f
C.b.A(g.a,g.d,r.a,r.b,r.c)
r=i.gbp()
g=r.gd0(r)
if(!g){r=h.x
C.b.S(r.a,r.d,1)}else{g=h.r
f=r.ghB()
e=g.a
g=g.d
if(!f)C.b.S(e,g,0)
else C.b.S(e,g,r.gbA())
r=h.x
C.b.S(r.a,r.d,0)}r=i.gax(i)
g=h.y
f=r.gc_()
e=r.gbu()
r=r.gbG()
C.b.A(g.a,g.d,f,e,r)
r=i.glB()
e=h.z
C.b.R(e.a,e.d,r)
r=i.glC()
e=h.Q
C.b.R(e.a,e.d,r)
r=i.gcB()
e=h.ch
C.b.R(e.a,e.d,r)
r=i.gcC()
e=h.cx
C.b.R(e.a,e.d,r)
r=i.gcD()
e=h.cy
C.b.R(e.a,e.d,r);++k}}}switch(w.f){case C.d:break
case C.i:break
case C.e:this.a0(p,this.Q.d)
z=this.a
u=this.Q.d
z.ak(z.ep,z.bQ,u)
break
case C.f:this.a0(p,this.Q.e)
z=this.a
u=this.Q.e
z.ad(z.eq,z.bQ,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db.ga4().eP()
a.Q=u}z=z.id
z.toString
z.aq(u.ag(0,!0))}if(w.dy){this.a0(p,this.ch)
z=this.a
u=this.ch
z.ad(z.er,z.es,u)
switch(w.r){case C.d:break
case C.i:z=this.a
u=this.cx.f
z=z.bR
C.b.A(z.a,z.d,u.a,u.b,u.c)
break
case C.e:this.a0(p,this.cx.d)
z=this.a
u=this.cx.d
z.ak(z.eu,z.bS,u)
u=this.a
z=this.cx.f
u=u.bR
C.b.A(u.a,u.d,z.a,z.b,z.c)
break
case C.f:this.a0(p,this.cx.e)
z=this.a
u=this.cx.e
z.ad(z.ev,z.bS,u)
u=this.a
z=this.cx.f
u=u.bR
C.b.A(u.a,u.d,z.a,z.b,z.c)
break}switch(w.x){case C.d:break
case C.i:z=this.a
u=this.cy.f
z=z.bU
C.b.A(z.a,z.d,u.a,u.b,u.c)
u=this.a
z=this.cy.ch
u=u.bT
C.b.R(u.a,u.d,z)
break
case C.e:this.a0(p,this.cy.d)
z=this.a
u=this.cy.d
z.ak(z.ew,z.bV,u)
u=this.a
z=this.cy.f
u=u.bU
C.b.A(u.a,u.d,z.a,z.b,z.c)
z=this.a
u=this.cy.ch
z=z.bT
C.b.R(z.a,z.d,u)
break
case C.f:this.a0(p,this.cy.e)
z=this.a
u=this.cy.e
z.ad(z.ex,z.bV,u)
u=this.a
z=this.cy.f
u=u.bU
C.b.A(u.a,u.d,z.a,z.b,z.c)
z=this.a
u=this.cy.ch
z=z.bT
C.b.R(z.a,z.d,u)
break}}z=w.y
u=z!==C.d
if(u){switch(z){case C.d:break
case C.i:z=this.a
s=this.db.f
z=z.bW
C.b.R(z.a,z.d,s)
break
case C.e:this.a0(p,this.db.d)
z=this.a
s=this.db.d
z.ak(z.ey,z.bX,s)
s=this.a
z=this.db.f
s=s.bW
C.b.R(s.a,s.d,z)
break
case C.f:this.a0(p,this.db.e)
z=this.a
s=this.db.e
z.ad(z.ez,z.bX,s)
s=this.a
z=this.db.f
s=s.bW
C.b.R(s.a,s.d,z)
break}C.b.cP(t,3042)
C.b.jo(t,770,771)}for(n=0;n<p.length;++n){z=p[n]
if(!z.c&&z.d){z.c=!0
C.b.e6(t,33984+z.a)
C.b.aU(t,3553,z.b)}}z=a0.e
z.cE(a)
z.b3(a)
z.kO(a)
if(u)C.b.jJ(t,3042)
for(n=0;n<p.length;++n){z=p[n]
if(z.c){z.c=!1
C.b.e6(t,33984+z.a)
C.b.aU(t,3553,null)}}z=this.a
z.toString
C.b.fb(t,null)
z.x.jK()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dI().an}},jc:{"^":"dc;0f,a,b,0c,0d,0e",
bb:function(){var z,y
this.du()
z=this.f
if(!$.p.$2(z,1)){y=this.f
this.f=1
z=new D.M(this.b,y,1,this,[P.t])
z.b=!0
this.a.a6(z)}}},dc:{"^":"b;",
a6:[function(a){this.a.a6(H.e(a,"$isy"))},function(){return this.a6(null)},"h0","$1","$0","gby",0,2,1],
bb:["du",function(){}],
sb5:function(a){var z,y
z=this.c
if(z!==C.e){if(z===C.d)this.bb()
this.c=C.e
z=this.a
z.a=null
z.a6(null)}z=this.d
if(z!==a){if(z!=null)z.gB().I(0,this.gby())
y=this.d
this.d=a
a.gB().h(0,this.gby())
z=new D.M(this.b+".texture2D",y,this.d,this,[T.fa])
z.b=!0
this.a.a6(z)}}},jd:{"^":"dc;a,b,0c,0d,0e"},ba:{"^":"dc;0f,a,b,0c,0d,0e",
bb:["dv",function(){var z,y
this.du()
z=new V.aj(1,1,1)
if(!this.f.w(0,z)){y=this.f
this.f=z
z=new D.M(this.b+".color",y,z,this,[V.aj])
z.b=!0
this.a.a6(z)}}]},jf:{"^":"ba;0ch,0f,a,b,0c,0d,0e",
bb:function(){var z,y
this.dv()
z=this.ch
if(!$.p.$2(z,1)){y=this.ch
this.ch=1
z=new D.M(this.b+".refraction",y,1,this,[P.t])
z.b=!0
this.a.a6(z)}}},jg:{"^":"ba;0ch,0f,a,b,0c,0d,0e",
bb:function(){var z,y
this.dv()
z=this.ch
if(!$.p.$2(z,100)){y=this.ch
this.ch=100
z=new D.M(this.b+".shininess",y,100,this,[P.t])
z.b=!0
this.a.a6(z)}}},cB:{"^":"b;"}}],["","",,T,{"^":"",dp:{"^":"cY;"},fa:{"^":"dp;"},ki:{"^":"fa;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gB:function(){var z=this.y
if(z==null){z=D.L()
this.y=z}return z}},kj:{"^":"b;a,0b,0c,0d,0e",
kb:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
C.b.aU(z,3553,y)
C.b.c1(z,3553,10242,33071)
C.b.c1(z,3553,10243,33071)
C.b.c1(z,3553,10241,9729)
C.b.c1(z,3553,10240,9729)
C.b.aU(z,3553,null);++this.d
x=document.createElement("img")
x.src=a
w=new T.ki()
w.a=0
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
z=W.aa
W.a3(x,"load",H.l(new T.kk(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
eS:function(a){return this.kb(a,!1,!1,!1,!1)},
iq:function(a,b,c){var z,y,x,w
b=V.e_(b,2)
z=V.e_(a.width,2)
y=V.e_(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.d1(null,null)
x.width=z
x.height=y
w=H.e(C.q.fk(x,"2d"),"$isd2")
w.imageSmoothingEnabled=!1;(w&&C.D).jM(w,a,0,0,x.width,x.height)
return P.mQ(C.D.ht(w,0,0,x.width,x.height))}}},kk:{"^":"m:11;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.iq(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
C.b.aU(y,3553,this.e)
C.b.kr(y,37440,this.f?1:0)
C.b.kH(y,3553,0,6408,6408,5121,w)
if(this.r)C.b.ff(y,3553)
C.b.aU(y,3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.jN()}++x.e}}}],["","",,V,{"^":"",bw:{"^":"b;",
b0:function(a){return!0},
i:function(a){return"all"},
$isaD:1},aD:{"^":"b;"},eK:{"^":"b;0a",
sa8:function(a){this.a=H.j(a,"$isa",[V.aD],"$asa")},
b0:["fE",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)if(z[x].b0(a))return!0
return!1}],
i:["dt",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isaD:1},ax:{"^":"eK;0a",
b0:function(a){return!this.fE(a)},
i:function(a){return"!["+this.dt(0)+"]"}},jL:{"^":"b;0a,0b",
b0:function(a){return this.a<=a&&this.b>=a},
i:function(a){var z,y
z=H.be(this.a)
y=H.be(this.b)
return z+".."+y},
$isaD:1,
q:{
R:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.d(P.r("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.c.J(a,0)
y=C.c.J(b,0)
x=new V.jL()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},jY:{"^":"b;0a",
siu:function(a){this.a=H.j(a,"$isH",[P.n,P.N],"$asH")},
fJ:function(a){var z,y
if(a.a.length<=0)throw H.d(P.r("May not create a SetMatcher with zero characters."))
z=new H.b2(0,0,[P.n,P.N])
for(y=new H.da(a,a.gn(a),0,[H.a7(a,"W",0)]);y.G();)z.p(0,y.d,!0)
this.siu(z)},
b0:function(a){return this.a.bH(a)},
i:function(a){return P.c8(this.a.gaz(),0,null)},
$isaD:1,
q:{
w:function(a){var z=new V.jY()
z.fJ(a)
return z}}},dk:{"^":"b;a,b,0c,0d",
siL:function(a){this.c=H.j(a,"$isa",[V.ds],"$asa")},
l:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.ds(this.a.j(0,b))
w.sa8(H.c([],[V.aD]))
w.c=!1
C.a.h(this.c,w)
return w},
jT:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.b0(a))return w}return},
i:function(a){return this.b}},fh:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.e1(this.b,"\n","\\n")
y=H.e1(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},dr:{"^":"b;a,b,0c",
sii:function(a){var z=P.h
this.c=H.j(a,"$isH",[z,z],"$asH")},
aI:function(a,b,c){var z,y,x
H.j(c,"$isa",[P.h],"$asa")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.z)(c),++y){x=c[y]
this.c.p(0,x,b)}},
i:function(a){return this.b}},kp:{"^":"b;0a,0b,0c",
siC:function(a){this.a=H.j(a,"$isH",[P.h,V.dk],"$asH")},
siH:function(a){this.b=H.j(a,"$isH",[P.h,V.dr],"$asH")},
j:function(a,b){var z=this.a.k(0,b)
if(z==null){z=new V.dk(this,b)
z.siL(H.c([],[V.ds]))
z.d=null
this.a.p(0,b,z)}return z},
P:function(a){var z,y
z=this.b.k(0,a)
if(z==null){z=new V.dr(this,a)
y=P.h
z.sii(new H.b2(0,0,[y,y]))
this.b.p(0,a,z)}return z},
f7:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.fh])
y=this.c
x=[P.n]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.c.J(a,t)
r=y.jT(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.c8(w,0,null)
throw H.d(P.r("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.c8(w,0,null)
p=y.d
o=p.c.k(0,q)
u=new V.fh(o==null?p.b:o,q,t)}++t}}},
q:{
cC:function(){var z,y
z=new V.kp()
y=P.h
z.siC(new H.b2(0,0,[y,V.dk]))
z.siH(new H.b2(0,0,[y,V.dr]))
z.c=null
return z}}},ds:{"^":"eK;b,0c,0a",
i:function(a){return this.b.b+": "+this.dt(0)}}}],["","",,X,{"^":"",ef:{"^":"b;",$isaM:1},iw:{"^":"f7;0a,0b,0c,0d,0e,0f,0r,0x",
gB:function(){var z=this.x
if(z==null){z=D.L()
this.x=z}return z}},js:{"^":"b;0a,0b,0c,0d,0e,0f",
gB:function(){var z=this.f
if(z==null){z=D.L()
this.f=z}return z},
b8:[function(a){var z
H.e(a,"$isy")
z=this.f
if(!(z==null))z.K(a)},function(){return this.b8(null)},"kU","$1","$0","gdz",0,2,1],
sbk:function(a){var z,y
if(!J.E(this.b,a)){z=this.b
if(z!=null)z.gB().I(0,this.gdz())
y=this.b
this.b=a
if(a!=null)a.gB().h(0,this.gdz())
z=new D.M("mover",y,this.b,this,[U.ah])
z.b=!0
this.b8(z)}},
$isaM:1,
$isef:1},f7:{"^":"b;"}}],["","",,V,{"^":"",
ny:function(a){P.ko(C.V,new V.nz(a))},
aY:{"^":"b;0d",
sci:function(a){this.d=H.j(a,"$isa",[[P.a,W.b0]],"$asa")},
bx:function(a){this.b=new P.iD(C.Y)
this.c=null
this.sci(H.c([],[[P.a,W.b0]]))},
N:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.c([],[W.b0]))
y=a.split("\n")
for(z=y.length,x=[W.b0],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.c([],x))
t=document.createElement("div")
t.className="codePart"
H.D(u)
s=this.b.hf(u,0,u.length)
r=s==null?u:s
C.j.fu(t,H.e1(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gaA(this.d),t)}},
eY:function(a){var z,y,x,w
H.j(a,"$isa",[P.h],"$asa")
this.sci(H.c([],[[P.a,W.b0]]))
z=C.a.l(a,"\n")
y=this.c
if(y==null){y=this.bI()
this.c=y}for(y=y.f7(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)this.bZ(y[w])}},
nz:{"^":"m:51;a",
$1:function(a){H.e(a,"$isbf")
P.e0(C.k.f6(this.a.gjZ(),2)+" fps")}},
i7:{"^":"aY;a,0b,0c,0d",
bZ:function(a){switch(a.a){case"Class":this.N(a.b,"#551")
break
case"Comment":this.N(a.b,"#777")
break
case"Id":this.N(a.b,"#111")
break
case"Num":this.N(a.b,"#191")
break
case"Reserved":this.N(a.b,"#119")
break
case"String":this.N(a.b,"#171")
break
case"Symbol":this.N(a.b,"#616")
break
case"Type":this.N(a.b,"#B11")
break
case"Whitespace":this.N(a.b,"#111")
break}},
bI:function(){var z,y,x,w
z=V.cC()
z.c=z.j(0,"Start")
y=z.j(0,"Start").l(0,"Id")
x=V.w(new H.v("_"))
C.a.h(y.a,x)
x=V.R("a","z")
C.a.h(y.a,x)
x=V.R("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").l(0,"Id")
y=V.w(new H.v("_"))
C.a.h(x.a,y)
y=V.R("0","9")
C.a.h(x.a,y)
y=V.R("a","z")
C.a.h(x.a,y)
y=V.R("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Start").l(0,"Int")
x=V.R("0","9")
C.a.h(y.a,x)
x=z.j(0,"Int").l(0,"Int")
y=V.R("0","9")
C.a.h(x.a,y)
y=z.j(0,"Int").l(0,"FloatDot")
x=V.w(new H.v("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").l(0,"Float")
y=V.R("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").l(0,"Float")
x=V.R("0","9")
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"Sym")
y=V.w(new H.v("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.j(0,"Sym").l(0,"Sym")
x=V.w(new H.v("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"OpenDoubleStr")
y=V.w(new H.v('"'))
C.a.h(x.a,y)
y=z.j(0,"OpenDoubleStr").l(0,"CloseDoubleStr")
x=V.w(new H.v('"'))
C.a.h(y.a,x)
x=z.j(0,"OpenDoubleStr").l(0,"EscDoubleStr")
y=V.w(new H.v("\\"))
C.a.h(x.a,y)
y=z.j(0,"EscDoubleStr").l(0,"OpenDoubleStr")
x=V.w(new H.v('"'))
C.a.h(y.a,x)
C.a.h(z.j(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.bw())
x=z.j(0,"Start").l(0,"OpenSingleStr")
y=V.w(new H.v("'"))
C.a.h(x.a,y)
y=z.j(0,"OpenSingleStr").l(0,"CloseSingleStr")
x=V.w(new H.v("'"))
C.a.h(y.a,x)
x=z.j(0,"OpenSingleStr").l(0,"EscSingleStr")
y=V.w(new H.v("\\"))
C.a.h(x.a,y)
y=z.j(0,"EscSingleStr").l(0,"OpenSingleStr")
x=V.w(new H.v("'"))
C.a.h(y.a,x)
C.a.h(z.j(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.bw())
x=z.j(0,"Start").l(0,"Slash")
y=V.w(new H.v("/"))
C.a.h(x.a,y)
y=z.j(0,"Slash").l(0,"Comment")
x=V.w(new H.v("/"))
C.a.h(y.a,x)
x=z.j(0,"Comment").l(0,"EndComment")
y=V.w(new H.v("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").l(0,"Comment")
x=new V.ax()
w=[V.aD]
x.sa8(H.c([],w))
C.a.h(y.a,x)
y=V.w(new H.v("\n"))
C.a.h(x.a,y)
y=z.j(0,"Slash").l(0,"MLComment")
x=V.w(new H.v("*"))
C.a.h(y.a,x)
x=z.j(0,"MLComment").l(0,"MLCStar")
y=V.w(new H.v("*"))
C.a.h(x.a,y)
y=z.j(0,"MLCStar").l(0,"MLComment")
x=new V.ax()
x.sa8(H.c([],w))
C.a.h(y.a,x)
y=V.w(new H.v("*"))
C.a.h(x.a,y)
y=z.j(0,"MLCStar").l(0,"EndComment")
x=V.w(new H.v("/"))
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"Whitespace")
y=V.w(new H.v(" \n\t"))
C.a.h(x.a,y)
y=z.j(0,"Whitespace").l(0,"Whitespace")
x=V.w(new H.v(" \n\t"))
C.a.h(y.a,x)
x=z.j(0,"Int")
x.d=x.a.P("Num")
x=z.j(0,"Float")
x.d=x.a.P("Num")
x=z.j(0,"Sym")
x.d=x.a.P("Symbol")
x=z.j(0,"CloseDoubleStr")
x.d=x.a.P("String")
x=z.j(0,"CloseSingleStr")
x.d=x.a.P("String")
x=z.j(0,"EndComment")
x.d=x.a.P("Comment")
x=z.j(0,"Whitespace")
x.d=x.a.P("Whitespace")
x=z.j(0,"Id")
y=x.a.P("Id")
x.d=y
x=[P.h]
y.aI(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.aI(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.aI(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
ix:{"^":"aY;a,0b,0c,0d",
bZ:function(a){switch(a.a){case"Builtin":this.N(a.b,"#411")
break
case"Comment":this.N(a.b,"#777")
break
case"Id":this.N(a.b,"#111")
break
case"Num":this.N(a.b,"#191")
break
case"Preprocess":this.N(a.b,"#737")
break
case"Reserved":this.N(a.b,"#119")
break
case"Symbol":this.N(a.b,"#611")
break
case"Type":this.N(a.b,"#171")
break
case"Whitespace":this.N(a.b,"#111")
break}},
bI:function(){var z,y,x,w
z=V.cC()
z.c=z.j(0,"Start")
y=z.j(0,"Start").l(0,"Id")
x=V.w(new H.v("_"))
C.a.h(y.a,x)
x=V.R("a","z")
C.a.h(y.a,x)
x=V.R("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").l(0,"Id")
y=V.w(new H.v("_"))
C.a.h(x.a,y)
y=V.R("0","9")
C.a.h(x.a,y)
y=V.R("a","z")
C.a.h(x.a,y)
y=V.R("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Start").l(0,"Int")
x=V.R("0","9")
C.a.h(y.a,x)
x=z.j(0,"Int").l(0,"Int")
y=V.R("0","9")
C.a.h(x.a,y)
y=z.j(0,"Int").l(0,"FloatDot")
x=V.w(new H.v("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").l(0,"Float")
y=V.R("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").l(0,"Float")
x=V.R("0","9")
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"Sym")
y=V.w(new H.v("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.j(0,"Sym").l(0,"Sym")
x=V.w(new H.v("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.j(0,"Start").l(0,"Slash")
y=V.w(new H.v("/"))
C.a.h(x.a,y)
y=z.j(0,"Slash").l(0,"Comment")
x=V.w(new H.v("/"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Slash").l(0,"Sym").a,new V.bw())
x=z.j(0,"Comment").l(0,"EndComment")
y=V.w(new H.v("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").l(0,"Comment")
x=new V.ax()
w=[V.aD]
x.sa8(H.c([],w))
C.a.h(y.a,x)
y=V.w(new H.v("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").l(0,"Preprocess")
x=V.w(new H.v("#"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").l(0,"Preprocess")
y=new V.ax()
y.sa8(H.c([],w))
C.a.h(x.a,y)
x=V.w(new H.v("\n"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").l(0,"EndPreprocess")
y=V.w(new H.v("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").l(0,"Whitespace")
x=V.w(new H.v(" \n\t"))
C.a.h(y.a,x)
x=z.j(0,"Whitespace").l(0,"Whitespace")
y=V.w(new H.v(" \n\t"))
C.a.h(x.a,y)
y=z.j(0,"Int")
y.d=y.a.P("Num")
y=z.j(0,"Float")
y.d=y.a.P("Num")
y=z.j(0,"Sym")
y.d=y.a.P("Symbol")
y=z.j(0,"EndComment")
y.d=y.a.P("Comment")
y=z.j(0,"EndPreprocess")
y.d=y.a.P("Preprocess")
y=z.j(0,"Whitespace")
y.d=y.a.P("Whitespace")
y=z.j(0,"Id")
x=y.a.P("Id")
y.d=x
y=[P.h]
x.aI(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.aI(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.aI(0,"Builtin",H.c(["gl_FragColor","gl_Position"],y))
return z}},
iy:{"^":"aY;a,0b,0c,0d",
bZ:function(a){switch(a.a){case"Attr":this.N(a.b,"#911")
this.N("=","#111")
break
case"Id":this.N(a.b,"#111")
break
case"Other":this.N(a.b,"#111")
break
case"Reserved":this.N(a.b,"#119")
break
case"String":this.N(a.b,"#171")
break
case"Symbol":this.N(a.b,"#616")
break}},
bI:function(){var z,y,x
z=V.cC()
z.c=z.j(0,"Start")
y=z.j(0,"Start").l(0,"Id")
x=V.w(new H.v("_"))
C.a.h(y.a,x)
x=V.R("a","z")
C.a.h(y.a,x)
x=V.R("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").l(0,"Id")
y=V.w(new H.v("_"))
C.a.h(x.a,y)
y=V.R("0","9")
C.a.h(x.a,y)
y=V.R("a","z")
C.a.h(x.a,y)
y=V.R("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Id").l(0,"Attr")
x=V.w(new H.v("="))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").l(0,"Sym")
x=V.w(new H.v("</\\-!>="))
C.a.h(y.a,x)
x=z.j(0,"Sym").l(0,"Sym")
y=V.w(new H.v("</\\-!>="))
C.a.h(x.a,y)
y=z.j(0,"Start").l(0,"OpenStr")
x=V.w(new H.v('"'))
C.a.h(y.a,x)
x=z.j(0,"OpenStr").l(0,"CloseStr")
y=V.w(new H.v('"'))
C.a.h(x.a,y)
y=z.j(0,"OpenStr").l(0,"EscStr")
x=V.w(new H.v("\\"))
C.a.h(y.a,x)
x=z.j(0,"EscStr").l(0,"OpenStr")
y=V.w(new H.v('"'))
C.a.h(x.a,y)
C.a.h(z.j(0,"OpenStr").l(0,"OpenStr").a,new V.bw())
C.a.h(z.j(0,"Start").l(0,"Other").a,new V.bw())
y=z.j(0,"Other").l(0,"Other")
x=new V.ax()
x.sa8(H.c([],[V.aD]))
C.a.h(y.a,x)
y=V.w(new H.v('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.R("a","z")
C.a.h(x.a,y)
y=V.R("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Sym")
y.d=y.a.P("Symbol")
y=z.j(0,"CloseStr")
y.d=y.a.P("String")
y=z.j(0,"Id")
x=y.a.P("Id")
y.d=x
x.aI(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
x=z.j(0,"Attr")
x.d=x.a.P("Attr")
x=z.j(0,"Other")
x.d=x.a.P("Other")
return z}},
ju:{"^":"aY;a,0b,0c,0d",
eY:function(a){H.j(a,"$isa",[P.h],"$asa")
this.sci(H.c([],[[P.a,W.b0]]))
this.N(C.a.l(a,"\n"),"#111")},
bZ:function(a){},
bI:function(){return}},
jI:{"^":"b;a,b,0c",
bE:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.l(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.fw().gd8().k(0,H.i(z))
if(y==null)if(d){c.$0()
this.e4(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.e4(this.c).h(0,v)
t=W.iG("radio")
t.checked=x
t.name=z
z=W.aa
W.a3(t,"change",H.l(new V.jJ(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
C.G.F(v,t)
s=w.createElement("span")
s.textContent=b
C.G.F(v,s)
J.e4(this.c).h(0,w.createElement("br"))},
au:function(a,b,c){return this.bE(a,b,c,!1)},
e4:function(a){var z,y,x,w,v
z=P.fw()
y=P.h
x=P.iY(z.gd8(),y,y)
x.p(0,this.a,a)
w=z.f2(0,x)
y=window.history
v=w.i(0)
y.toString;(y&&C.X).ik(y,new P.lU([],[]).df(""),"",v)}},
jJ:{"^":"m:11;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.e4(this.d)}}},
k3:{"^":"b;0a,0b",
fL:function(a,b){var z,y,x,w,v,u,t
z=document
y=z.body
x=z.createElement("div")
x.className="scrollTop";(y&&C.p).F(y,x)
w=z.createElement("div")
w.className="scrollPage"
C.p.F(y,w)
v=z.createElement("div")
v.className="pageCenter"
C.j.F(w,v)
if(a.length!==0){z.title=a
u=z.createElement("div")
u.className="pageTitle"
u.textContent=a
C.j.F(v,u)}t=z.createElement("div")
this.a=t
C.j.F(v,t)
this.b=null
t=W.aa
W.a3(z,"scroll",H.l(new V.k6(x),{func:1,ret:-1,args:[t]}),!1,t)},
e8:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.j(a,"$isa",[P.h],"$asa")
this.ix()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.f7(C.a.k8(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
switch(u.a){case"Bold":t=z.createElement("div")
t.className="boldPar"
t.textContent=u.b
C.j.F(y,t)
break
case"Italic":t=z.createElement("div")
t.className="italicPar"
t.textContent=u.b
C.j.F(y,t)
break
case"Code":t=z.createElement("div")
t.className="codePar"
t.textContent=u.b
C.j.F(y,t)
break
case"Link":s=u.b
if(H.hA(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.f(r,1)
q.href=H.D(r[1])
q.textContent=H.D(r[0])
C.j.F(y,q)}else{p=P.cc(C.J,s,C.m,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.i(p)
q.textContent=s
C.j.F(y,q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
C.j.F(y,t)
break}}C.j.F(this.a,y)},
fj:function(a){var z,y,x,w
z=new V.i7("dart")
z.bx("dart")
y=new V.ix("glsl")
y.bx("glsl")
x=new V.iy("html")
x.bx("html")
w=C.a.jV(H.c([z,y,x],[V.aY]),new V.k7(a))
if(w!=null)return w
z=new V.ju("plain")
z.bx("plain")
return z},
e7:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.j(a2,"$isa",[P.h],"$asa")
z=H.c([],[P.n])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.bT(w).a5(w,"+")){C.a.p(a2,x,C.c.ar(w,1))
C.a.h(z,1)
y=!0}else if(C.c.a5(w,"-")){C.a.p(a2,x,C.c.ar(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.fj(a0)
v.eY(a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
C.j.F(t,s)
C.j.F(this.a,t)
r=P.cc(C.J,a,C.m,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.e6(null)
n.href="#"+H.i(r)
n.textContent=a
C.j.F(o,n)
C.x.F(p,o)
C.n.F(q,p)
C.o.F(s,q)
if(y)for(m=a1,l=m,x=0;k=v.d,x<k.length;++x){w=k[x]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums codeLineLight"
h=u.createElement("td")
h.className="codeLineNums"
if(x>=z.length)return H.f(z,x)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.z)(w),++e)C.x.F(f,w[e])
C.n.F(j,i)
C.n.F(j,h)
C.n.F(j,f)
C.o.F(s,j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.z)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gV(w);b.G();)C.x.F(h,b.gL())
C.n.F(j,i)
C.n.F(j,h)
C.o.F(s,j)}},
jc:function(a){var z,y,x,w,v,u,t
H.j(a,"$isa",[P.h],"$asa")
z=document
y=z.createElement("table")
y.id="shellTable"
x=y.style
x.width="100%"
x.padding="0px"
x.marginLeft="auto"
x.marginRight="auto"
C.j.F(this.a,y)
w=C.o.hw(y,-1)
x=H.e((w&&C.n).dR(w,-1),"$iscA").style
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
t=H.e(C.n.dR(w,-1),"$iscA")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto";(t&&C.x).F(t,u)}},
ix:function(){var z,y,x,w
if(this.b!=null)return
z=V.cC()
z.c=z.j(0,"Start")
y=z.j(0,"Start").l(0,"Bold")
x=V.w(new H.v("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Bold").l(0,"Bold")
x=new V.ax()
w=[V.aD]
x.sa8(H.c([],w))
C.a.h(y.a,x)
y=V.w(new H.v("*"))
C.a.h(x.a,y)
y=z.j(0,"Bold").l(0,"BoldEnd")
x=V.w(new H.v("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").l(0,"Italic")
x=V.w(new H.v("_"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Italic").l(0,"Italic")
x=new V.ax()
x.sa8(H.c([],w))
C.a.h(y.a,x)
y=V.w(new H.v("_"))
C.a.h(x.a,y)
y=z.j(0,"Italic").l(0,"ItalicEnd")
x=V.w(new H.v("_"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").l(0,"Code")
x=V.w(new H.v("`"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Code").l(0,"Code")
x=new V.ax()
x.sa8(H.c([],w))
C.a.h(y.a,x)
y=V.w(new H.v("`"))
C.a.h(x.a,y)
y=z.j(0,"Code").l(0,"CodeEnd")
x=V.w(new H.v("`"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").l(0,"LinkHead")
x=V.w(new H.v("["))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"LinkHead").l(0,"LinkTail")
x=V.w(new H.v("|"))
C.a.h(y.a,x)
x=z.j(0,"LinkHead").l(0,"LinkEnd")
y=V.w(new H.v("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkHead").l(0,"LinkHead")
y=new V.ax()
y.sa8(H.c([],w))
C.a.h(x.a,y)
x=V.w(new H.v("|]"))
C.a.h(y.a,x)
x=z.j(0,"LinkTail").l(0,"LinkEnd")
y=V.w(new H.v("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkTail").l(0,"LinkTail")
y=new V.ax()
y.sa8(H.c([],w))
C.a.h(x.a,y)
x=V.w(new H.v("|]"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Start").l(0,"Other").a,new V.bw())
x=z.j(0,"Other").l(0,"Other")
y=new V.ax()
y.sa8(H.c([],w))
C.a.h(x.a,y)
x=V.w(new H.v("*_`["))
C.a.h(y.a,x)
x=z.j(0,"BoldEnd")
x.d=x.a.P("Bold")
x=z.j(0,"ItalicEnd")
x.d=x.a.P("Italic")
x=z.j(0,"CodeEnd")
x.d=x.a.P("Code")
x=z.j(0,"LinkEnd")
x.d=x.a.P("Link")
x=z.j(0,"Other")
x.d=x.a.P("Other")
this.b=z},
q:{
k4:function(a,b){var z=new V.k3()
z.fL(a,!0)
return z}}},
k6:{"^":"m:11;a",
$1:function(a){P.ff(C.y,new V.k5(this.a))}},
k5:{"^":"m:0;a",
$0:function(){var z,y,x
z=C.k.ap(document.documentElement.scrollTop)
y=this.a.style
x=H.i(-0.01*z)+"px"
y.top=x}},
k7:{"^":"m:52;a",
$1:function(a){return H.e(a,"$isaY").a===this.a}}}],["","",,M,{"^":"",
hv:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=V.k4("Test 018",!0)
y=W.d1(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
C.j.F(z.a,y)
x=[P.h]
z.e8(H.c(["A test of the Material Lighting shader where a diffuse textue and ","inverse diffuse texture are used. Grass is only shown in the dark. ","Dirt is shown where the directional light is shining."],x))
z.jc(H.c(["shapes"],x))
z.e8(H.c(["\xab[Back to Tests|../]"],x))
x=document
w=C.z.dl(x,"testCanvas")
if(w==null)H.q(P.r("Failed to find an element with the identifier, testCanvas."))
v=E.km(w,!0,!0,!0,!1)
u=new E.aB()
u.a=""
u.b=!0
t=E.aB
u.shd(0,O.d3(t))
u.y.bw(u.gke(),u.gkg())
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
u.saa(0,null)
u.sbk(null)
u.saa(0,F.hz(8,null,1,8))
s=new U.ex()
r=U.ah
s.c9(r)
s.bw(s.ghI(),s.gi3())
s.e=null
s.f=V.c4()
s.r=0
q=v.r
p=new U.kR()
o=U.d4()
o.sdh(0,!0)
o.sd1(6.283185307179586)
o.sd3(0)
o.sa2(0,0)
o.sd2(100)
o.sY(0)
o.scN(0.5)
p.b=o
n=p.gaQ()
o.gB().h(0,n)
o=U.d4()
o.sdh(0,!0)
o.sd1(6.283185307179586)
o.sd3(0)
o.sa2(0,0)
o.sd2(100)
o.sY(0)
o.scN(0.5)
p.c=o
o.gB().h(0,n)
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
m=new X.aF(!1,!1,!1)
l=p.d
p.d=m
o=[X.aF]
n=new D.M("modifiers",l,m,p,o)
n.b=!0
p.W(n)
n=p.f
if(n!==!1){p.f=!1
n=new D.M("invertX",n,!1,p,[P.N])
n.b=!0
p.W(n)}n=p.r
if(n!==!1){p.r=!1
n=new D.M("invertY",n,!1,p,[P.N])
n.b=!0
p.W(n)}p.bf(q)
s.h(0,p)
q=v.r
p=new U.kQ()
n=U.d4()
n.sdh(0,!0)
n.sd1(6.283185307179586)
n.sd3(0)
n.sa2(0,0)
n.sd2(100)
n.sY(0)
n.scN(0.2)
p.b=n
n.gB().h(0,p.gaQ())
p.c=null
p.d=!1
p.e=2.5
p.f=2
p.r=4
p.y=!1
p.x=!1
p.z=0
p.Q=null
p.ch=0
p.cx=null
p.cy=null
m=new X.aF(!0,!1,!1)
l=p.c
p.c=m
n=new D.M("modifiers",l,m,p,o)
n.b=!0
p.W(n)
p.bf(q)
s.h(0,p)
q=v.r
p=new U.kS()
p.c=0.01
p.d=0
p.e=0
m=new X.aF(!1,!1,!1)
p.b=m
o=new D.M("modifiers",null,m,p,o)
o.b=!0
p.W(o)
p.bf(q)
s.h(0,p)
u.sbk(s)
k=v.f.eS("../resources/Dirt.png")
j=v.f.eS("../resources/Grass.png")
i=new O.j9()
i.sh9(O.d3(V.ak))
i.e.bw(i.ghK(),i.ghL())
s=new O.ba(i,"emission")
s.c=C.d
s.f=new V.aj(0,0,0)
i.f=s
s=new O.ba(i,"ambient")
s.c=C.d
s.f=new V.aj(0,0,0)
i.r=s
s=new O.ba(i,"diffuse")
s.c=C.d
s.f=new V.aj(0,0,0)
i.x=s
s=new O.ba(i,"invDiffuse")
s.c=C.d
s.f=new V.aj(0,0,0)
i.y=s
s=new O.jg(i,"specular")
s.c=C.d
s.f=new V.aj(0,0,0)
s.ch=100
i.z=s
s=new O.jd(i,"bump")
s.c=C.d
i.Q=s
i.ch=null
s=new O.ba(i,"reflect")
s.c=C.d
s.f=new V.aj(0,0,0)
i.cx=s
s=new O.jf(i,"refract")
s.c=C.d
s.f=new V.aj(0,0,0)
s.ch=1
i.cy=s
s=new O.jc(i,"alpha")
s.c=C.d
s.f=1
i.db=s
s=new D.iQ()
s.c9(D.a6)
s.shj(H.c([],[D.cm]))
s.si8(H.c([],[D.eU]))
s.siB(H.c([],[D.f3]))
s.siM(H.c([],[D.fb]))
s.siN(H.c([],[D.fc]))
s.siO(H.c([],[D.fd]))
s.Q=null
s.ch=null
s.dr(s.ghJ(),s.gi2(),s.gi4())
i.dx=s
q=s.Q
if(q==null){q=D.L()
s.Q=q
s=q}else s=q
s.h(0,i.gio())
s=i.dx
q=s.ch
if(q==null){q=D.L()
s.ch=q
s=q}else s=q
s.h(0,i.gby())
i.dy=null
s=i.dx
h=V.fF()
q=U.ek(V.eM(V.dh(),h,new V.A(-1,-1,-1)))
g=new V.aj(1,1,1)
p=new D.cm()
p.c=new V.aj(1,1,1)
p.a=V.fG()
l=p.b
p.b=q
q.gB().h(0,p.gfS())
r=new D.M("mover",l,p.b,p,[r])
r.b=!0
p.aL(r)
if(!p.c.w(0,g)){l=p.c
p.c=g
r=new D.M("color",l,g,p,[V.aj])
r.b=!0
p.aL(r)}s.h(0,p)
i.x.sb5(k)
i.y.sb5(j)
s=new M.il()
s.sfT(0,O.d3(t))
s.d.bw(s.ghN(),s.ghO())
s.e=null
s.f=null
s.r=null
s.x=null
f=new X.js()
f.c=1.0471975511965976
f.d=0.1
f.e=2000
f.sbk(null)
t=f.c
if(!$.p.$2(t,1.0471975511965976)){l=f.c
f.c=1.0471975511965976
t=new D.M("fov",l,1.0471975511965976,f,[P.t])
t.b=!0
f.b8(t)}t=f.d
if(!$.p.$2(t,0.1)){l=f.d
f.d=0.1
t=new D.M("near",l,0.1,f,[P.t])
t.b=!0
f.b8(t)}t=f.e
if(!$.p.$2(t,2000)){l=f.e
f.e=2000
t=new D.M("far",l,2000,f,[P.t])
t.b=!0
f.b8(t)}t=s.a
if(t!==f){if(t!=null)t.gB().I(0,s.gas())
l=s.a
s.a=f
f.gB().h(0,s.gas())
t=new D.M("camera",l,s.a,s,[X.ef])
t.b=!0
s.aM(t)}e=new X.iw()
t=new V.aZ(0,0,0,1)
e.a=t
e.b=!0
e.c=2000
e.d=!0
e.e=0
e.f=!1
t=$.f_
if(t==null){t=V.eZ(0,0,1,1)
$.f_=t}e.r=t
t=s.b
if(t!==e){if(t!=null)t.gB().I(0,s.gas())
l=s.b
s.b=e
e.gB().h(0,s.gas())
t=new D.M("target",l,s.b,s,[X.f7])
t.b=!0
s.aM(t)}s.sf4(null)
s.sf4(i)
s.d.h(0,u)
s.a.sbk(U.ek(V.aE(1,0,0,0,0,1,0,0,0,0,1,3,0,0,0,1)))
t=v.d
if(t!==s){if(t!=null)t.gB().I(0,v.gdw())
v.d=s
s.gB().h(0,v.gdw())
v.fO()}t=new V.jI("shapes",!0)
x=C.z.dl(x,"shapes")
t.c=x
if(x==null)H.q("Failed to find shapes for RadioGroup")
t.au(0,"Cube",new M.ni(u))
t.au(0,"Cuboid",new M.nj(u))
t.au(0,"Cylinder",new M.nk(u))
t.au(0,"Cone",new M.nl(u))
t.au(0,"LatLonSphere",new M.nm(u))
t.au(0,"IsoSphere",new M.nn(u))
t.bE(0,"Sphere",new M.no(u),!0)
t.au(0,"Toroid",new M.np(u))
t.au(0,"Knot",new M.nq(u))
x=v.z
if(x==null){x=D.L()
v.z=x}t={func:1,ret:-1,args:[D.y]}
s=H.l(new M.nr(z,i),t)
if(x.b==null)x.sbc(H.c([],[t]))
x=x.b;(x&&C.a).h(x,s)
V.ny(v)},
ni:{"^":"m:0;a",
$0:function(){this.a.saa(0,F.dU(1,null,null,1))}},
nj:{"^":"m:0;a",
$0:function(){this.a.saa(0,F.dU(8,null,null,8))}},
nk:{"^":"m:0;a",
$0:function(){this.a.saa(0,F.hn(1,!0,!0,1,40,1))}},
nl:{"^":"m:0;a",
$0:function(){this.a.saa(0,F.hn(1,!0,!1,1,40,0))}},
nm:{"^":"m:0;a",
$0:function(){this.a.saa(0,F.nf(10,20))}},
nn:{"^":"m:0;a",
$0:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=F.cz()
y=Math.sqrt(5)/2+0.5
x=F.af(z,new V.A(-1,y,0))
w=F.af(z,new V.A(1,y,0))
v=-y
u=F.af(z,new V.A(-1,v,0))
t=F.af(z,new V.A(1,v,0))
s=F.af(z,new V.A(0,-1,v))
r=F.af(z,new V.A(0,1,v))
q=F.af(z,new V.A(0,-1,y))
p=F.af(z,new V.A(0,1,y))
o=F.af(z,new V.A(y,0,1))
n=F.af(z,new V.A(y,0,-1))
m=F.af(z,new V.A(v,0,1))
l=F.af(z,new V.A(v,0,-1))
F.T(z,x,l,r,2)
F.T(z,x,r,w,2)
F.T(z,x,w,p,2)
F.T(z,x,p,m,2)
F.T(z,x,m,l,2)
F.T(z,w,r,n,2)
F.T(z,r,l,s,2)
F.T(z,l,m,u,2)
F.T(z,m,p,q,2)
F.T(z,p,w,o,2)
F.T(z,t,n,s,2)
F.T(z,t,s,u,2)
F.T(z,t,u,q,2)
F.T(z,t,q,o,2)
F.T(z,t,o,n,2)
F.T(z,s,n,r,2)
F.T(z,u,s,l,2)
F.T(z,q,u,m,2)
F.T(z,o,q,p,2)
F.T(z,n,o,w,2)
z.eT(new F.dF(),new F.l4())
this.a.saa(0,z)}},
no:{"^":"m:0;a",
$0:function(){this.a.saa(0,F.hz(6,null,1,6))}},
np:{"^":"m:0;a",
$0:function(){this.a.saa(0,F.nD(30,1,15,0.5))}},
nq:{"^":"m:0;a",
$0:function(){this.a.saa(0,F.nd(120,1,2,12,0.3,3))}},
nr:{"^":"m:8;a,b",
$1:function(a){var z,y,x,w
H.e(a,"$isy")
z=this.a
y=this.b
x=y.a
w=[P.h]
z.e7("Vertex Shader","glsl",0,H.c((x==null?null:x.c).split("\n"),w))
y=y.a
z.e7("Fragment Shader","glsl",0,H.c((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.O=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eC.prototype
return J.eB.prototype}if(typeof a=="string")return J.c1.prototype
if(a==null)return J.eD.prototype
if(typeof a=="boolean")return J.iK.prototype
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c2.prototype
return a}if(a instanceof P.b)return a
return J.cO(a)}
J.bs=function(a){if(typeof a=="string")return J.c1.prototype
if(a==null)return a
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c2.prototype
return a}if(a instanceof P.b)return a
return J.cO(a)}
J.dX=function(a){if(a==null)return a
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c2.prototype
return a}if(a instanceof P.b)return a
return J.cO(a)}
J.n0=function(a){if(typeof a=="number")return J.c0.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c9.prototype
return a}
J.n1=function(a){if(typeof a=="number")return J.c0.prototype
if(typeof a=="string")return J.c1.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c9.prototype
return a}
J.bT=function(a){if(typeof a=="string")return J.c1.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c9.prototype
return a}
J.Z=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c2.prototype
return a}if(a instanceof P.b)return a
return J.cO(a)}
J.E=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.O(a).w(a,b)}
J.hC=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.n0(a).T(a,b)}
J.e2=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.n1(a).u(a,b)}
J.hD=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nc(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bs(a).k(a,b)}
J.hE=function(a,b,c,d){return J.Z(a).h5(a,b,c,d)}
J.hF=function(a,b){return J.bT(a).J(a,b)}
J.ch=function(a,b){return J.Z(a).ie(a,b)}
J.cU=function(a,b,c){return J.Z(a).ij(a,b,c)}
J.e3=function(a,b){return J.Z(a).F(a,b)}
J.hG=function(a,b){return J.bT(a).a3(a,b)}
J.cV=function(a,b,c){return J.bs(a).jw(a,b,c)}
J.ci=function(a,b){return J.dX(a).a9(a,b)}
J.hH=function(a,b,c,d){return J.Z(a).jQ(a,b,c,d)}
J.hI=function(a){return J.Z(a).gjl(a)}
J.e4=function(a){return J.Z(a).gcK(a)}
J.bU=function(a){return J.O(a).ga_(a)}
J.b6=function(a){return J.dX(a).gV(a)}
J.au=function(a){return J.bs(a).gn(a)}
J.hJ=function(a){return J.Z(a).gks(a)}
J.hK=function(a){return J.Z(a).gkG(a)}
J.cW=function(a,b){return J.Z(a).b7(a,b)}
J.e5=function(a){return J.dX(a).ku(a)}
J.hL=function(a,b){return J.Z(a).kz(a,b)}
J.hM=function(a,b){return J.Z(a).skN(a,b)}
J.hN=function(a,b,c){return J.Z(a).ft(a,b,c)}
J.hO=function(a,b,c){return J.bT(a).v(a,b,c)}
J.hP=function(a){return J.bT(a).kM(a)}
J.ag=function(a){return J.O(a).i(a)}
I.a8=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.cj.prototype
C.q=W.d0.prototype
C.D=W.d2.prototype
C.j=W.b0.prototype
C.U=W.ic.prototype
C.W=W.iz.prototype
C.X=W.iA.prototype
C.z=W.iC.prototype
C.Z=J.G.prototype
C.a=J.b9.prototype
C.a_=J.eB.prototype
C.h=J.eC.prototype
C.r=J.eD.prototype
C.k=J.c0.prototype
C.c=J.c1.prototype
C.a6=J.c2.prototype
C.G=W.iP.prototype
C.ac=W.jm.prototype
C.M=J.jt.prototype
C.N=W.jK.prototype
C.b=P.di.prototype
C.x=W.cA.prototype
C.o=W.kf.prototype
C.n=W.kg.prototype
C.C=J.c9.prototype
C.O=W.bK.prototype
C.P=W.lc.prototype
C.R=new P.hT(!1)
C.Q=new P.hS(C.R)
C.S=new P.jr()
C.T=new P.l_()
C.l=new P.lK()
C.d=new A.cl(0,"ColorSourceType.None")
C.i=new A.cl(1,"ColorSourceType.Solid")
C.e=new A.cl(2,"ColorSourceType.Texture2D")
C.f=new A.cl(3,"ColorSourceType.TextureCube")
C.y=new P.by(0)
C.V=new P.by(5e6)
C.Y=new P.iE("element",!0,!1,!1,!1)
C.a0=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.a1=function(hooks) {
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
C.E=function(hooks) { return hooks; }

C.a2=function(getTagFallback) {
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
C.a3=function() {
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
C.a4=function(hooks) {
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
C.a5=function(hooks) {
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
C.F=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.H=H.c(I.a8([127,2047,65535,1114111]),[P.n])
C.t=H.c(I.a8([0,0,32776,33792,1,10240,0,0]),[P.n])
C.a7=H.c(I.a8(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.u=H.c(I.a8([0,0,65490,45055,65535,34815,65534,18431]),[P.n])
C.v=H.c(I.a8([0,0,26624,1023,65534,2047,65534,2047]),[P.n])
C.a8=H.c(I.a8(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.I=H.c(I.a8([]),[P.h])
C.a9=H.c(I.a8([0,0,32722,12287,65534,34815,65534,18431]),[P.n])
C.J=H.c(I.a8([0,0,65498,45055,65535,34815,65534,18431]),[P.n])
C.w=H.c(I.a8([0,0,24576,1023,65534,34815,65534,18431]),[P.n])
C.K=H.c(I.a8([0,0,32754,11263,65534,34815,65534,18431]),[P.n])
C.aa=H.c(I.a8([0,0,32722,12287,65535,34815,65534,18431]),[P.n])
C.L=H.c(I.a8([0,0,65490,12287,65535,34815,65534,18431]),[P.n])
C.A=H.c(I.a8(["bind","if","ref","repeat","syntax"]),[P.h])
C.B=H.c(I.a8(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.ab=new H.i4(0,{},C.I,[P.h,P.h])
C.m=new P.kT(!1)
$.aA=0
$.bx=null
$.ea=null
$.dN=!1
$.hs=null
$.hk=null
$.hy=null
$.cN=null
$.cQ=null
$.dY=null
$.bn=null
$.bP=null
$.bQ=null
$.dO=!1
$.S=C.l
$.aL=null
$.d5=null
$.ev=null
$.eu=null
$.eq=null
$.ep=null
$.eo=null
$.en=null
$.p=V.jh()
$.eN=null
$.eV=null
$.bF=null
$.f_=null
$.fA=null
$.fE=null
$.fC=null
$.fD=null
$.cF=null
$.fB=null
$.fH=null
$.eT=null
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
I.$lazy(y,x,w)}})(["em","$get$em",function(){return H.hr("_$dart_dartClosure")},"d7","$get$d7",function(){return H.hr("_$dart_js")},"fj","$get$fj",function(){return H.aH(H.cD({
toString:function(){return"$receiver$"}}))},"fk","$get$fk",function(){return H.aH(H.cD({$method$:null,
toString:function(){return"$receiver$"}}))},"fl","$get$fl",function(){return H.aH(H.cD(null))},"fm","$get$fm",function(){return H.aH(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"fq","$get$fq",function(){return H.aH(H.cD(void 0))},"fr","$get$fr",function(){return H.aH(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fo","$get$fo",function(){return H.aH(H.fp(null))},"fn","$get$fn",function(){return H.aH(function(){try{null.$method$}catch(z){return z.message}}())},"ft","$get$ft",function(){return H.aH(H.fp(void 0))},"fs","$get$fs",function(){return H.aH(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dI","$get$dI",function(){return P.ld()},"bR","$get$bR",function(){return[]},"fz","$get$fz",function(){return P.kX()},"fP","$get$fP",function(){return H.jk(H.bm(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.n])))},"h8","$get$h8",function(){return P.jP("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"hg","$get$hg",function(){return P.mx()},"el","$get$el",function(){return{}},"fT","$get$fT",function(){return P.eH(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)},"dJ","$get$dJ",function(){return P.eG(P.h,P.bY)},"fL","$get$fL",function(){return Z.ar(0)},"fJ","$get$fJ",function(){return Z.ar(511)},"aT","$get$aT",function(){return Z.ar(1)},"aS","$get$aS",function(){return Z.ar(2)},"aR","$get$aR",function(){return Z.ar(4)},"aU","$get$aU",function(){return Z.ar(8)},"aV","$get$aV",function(){return Z.ar(16)},"bI","$get$bI",function(){return Z.ar(32)},"bJ","$get$bJ",function(){return Z.ar(64)},"fK","$get$fK",function(){return Z.ar(96)},"bk","$get$bk",function(){return Z.ar(128)},"aQ","$get$aQ",function(){return Z.ar(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.F},{func:1,ret:-1,opt:[D.y]},{func:1,ret:-1,args:[D.y]},{func:1,ret:-1},{func:1,ret:-1,args:[W.aw]},{func:1,ret:P.F,args:[F.ac,P.t,P.t]},{func:1,ret:P.F,args:[F.ab]},{func:1,ret:P.F,args:[,,]},{func:1,ret:P.F,args:[D.y]},{func:1,ret:-1,args:[P.n,[P.o,E.aB]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.F,args:[W.aa]},{func:1,ret:P.t},{func:1,ret:-1,args:[W.bh]},{func:1,ret:-1,args:[W.aa]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:P.N,args:[W.Q,P.h,P.h,W.cb]},{func:1,ret:-1,args:[P.n,[P.o,D.a6]]},{func:1,args:[,]},{func:1,ret:V.U,args:[P.t]},{func:1,ret:P.t,args:[P.t,P.t]},{func:1,ret:P.h,args:[P.n]},{func:1,ret:P.F,args:[{func:1,ret:-1,args:[D.y]}]},{func:1,ret:P.N,args:[W.C]},{func:1,ret:-1,args:[P.n,[P.o,V.ak]]},{func:1,ret:P.N,args:[W.aG]},{func:1,ret:P.N,args:[P.h]},{func:1,ret:-1,args:[W.bC]},{func:1,ret:P.F,args:[,]},{func:1,ret:-1,args:[P.n,[P.o,U.ah]]},{func:1,ret:P.t,args:[P.t]},{func:1,args:[W.aa]},{func:1,ret:P.F,args:[P.am]},{func:1,ret:P.P,args:[,,]},{func:1,ret:P.P,args:[P.n]},{func:1,ret:P.F,args:[P.h,,]},{func:1,ret:P.N,args:[P.t,P.t]},{func:1,ret:-1,args:[W.bK]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:P.N,args:[[P.o,D.a6]]},{func:1,ret:P.F,args:[P.h]},{func:1,ret:P.n,args:[P.n,P.n]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:-1,args:[P.h,P.n]},{func:1,ret:[P.H,P.h,P.h],args:[[P.H,P.h,P.h],P.h]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,ret:-1,args:[W.C,W.C]},{func:1,ret:P.n,args:[[P.a,P.n],P.n]},{func:1,ret:[P.aW,,],args:[,]},{func:1,ret:P.F,args:[,],opt:[,]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,ret:P.F,args:[P.bf]},{func:1,ret:P.N,args:[V.aY]},{func:1,args:[P.h]},{func:1,args:[,P.h]},{func:1,ret:W.Q,args:[W.C]}]
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
if(x==y)H.nC(d||a)
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
Isolate.a8=a.a8
Isolate.dV=a.dV
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
if(typeof dartMainRunner==="function")dartMainRunner(M.hv,[])
else M.hv([])})})()
//# sourceMappingURL=test.dart.js.map
