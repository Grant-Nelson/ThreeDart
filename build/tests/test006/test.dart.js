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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isH)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.dU"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dU"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.dU(this,d,e,f,true,false,a1).prototype
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
var dart=[["","",,H,{"^":"",nq:{"^":"a;a"}}],["","",,J,{"^":"",
dZ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cN:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dY==null){H.mZ()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.e(P.cB("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$d9()]
if(v!=null)return v
v=H.n2(a)
if(v!=null)return v
if(typeof a=="function")return C.a5
y=Object.getPrototypeOf(a)
if(y==null)return C.L
if(y===Object.prototype)return C.L
if(typeof w=="function"){Object.defineProperty(w,$.$get$d9(),{value:C.C,enumerable:false,writable:true,configurable:true})
return C.C}return C.C},
H:{"^":"a;",
v:function(a,b){return a===b},
ga_:function(a){return H.bF(a)},
i:["fD",function(a){return"Instance of '"+H.bg(a)+"'"}],
"%":"DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo|WebGLRenderbuffer"},
iN:{"^":"H;",
i:function(a){return String(a)},
ga_:function(a){return a?519018:218159},
$isG:1},
eA:{"^":"H;",
v:function(a,b){return null==b},
i:function(a){return"null"},
ga_:function(a){return 0},
$isC:1},
da:{"^":"H;",
ga_:function(a){return 0},
i:["fF",function(a){return String(a)}]},
jr:{"^":"da;"},
cC:{"^":"da;"},
c2:{"^":"da;",
i:function(a){var z=a[$.$get$ej()]
if(z==null)return this.fF(a)
return"JavaScript function for "+H.j(J.ah(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isc_:1},
bc:{"^":"H;$ti",
h:function(a,b){H.w(b,H.t(a,0))
if(!!a.fixed$length)H.p(P.X("add"))
a.push(b)},
a4:function(a,b){var z
if(!!a.fixed$length)H.p(P.X("remove"))
for(z=0;z<a.length;++z)if(J.P(a[z],b)){a.splice(z,1)
return!0}return!1},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.e(P.aG(a))}},
l:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.p(z,y,H.j(a[y]))
return z.join(b)},
k0:function(a){return this.l(a,"")},
jT:function(a,b,c,d){var z,y,x
H.w(b,d)
H.l(c,{func:1,ret:d,args:[d,H.t(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.e(P.aG(a))}return y},
jS:function(a,b,c){var z,y,x
H.l(b,{func:1,ret:P.G,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.e(P.aG(a))}throw H.e(H.d8())},
jR:function(a,b){return this.jS(a,b,null)},
aa:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
fC:function(a,b,c){if(b<0||b>a.length)throw H.e(P.a0(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.e(P.a0(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.t(a,0)])
return H.c(a.slice(b,c),[H.t(a,0)])},
gaz:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.e(H.d8())},
e8:function(a,b){var z,y
H.l(b,{func:1,ret:P.G,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.e(P.aG(a))}return!1},
Z:function(a,b){var z
for(z=0;z<a.length;++z)if(J.P(a[z],b))return!0
return!1},
i:function(a){return P.d7(a,"[","]")},
gV:function(a){return new J.aw(a,a.length,0,[H.t(a,0)])},
ga_:function(a){return H.bF(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.p(P.X("set length"))
if(b<0)throw H.e(P.a0(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.b8(a,b))
if(b>=a.length||b<0)throw H.e(H.b8(a,b))
return a[b]},
p:function(a,b,c){H.w(c,H.t(a,0))
if(!!a.immutable$list)H.p(P.X("indexed set"))
if(b>=a.length||b<0)throw H.e(H.b8(a,b))
a[b]=c},
$iso:1,
$isb:1,
q:{
iM:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.cV(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.a0(a,0,4294967295,"length",null))
return J.ex(new Array(a),b)},
ex:function(a,b){return J.co(H.c(a,[b]))},
co:function(a){H.cb(a)
a.fixed$length=Array
return a}}},
np:{"^":"bc;$ti"},
aw:{"^":"a;a,b,c,0d,$ti",
sdI:function(a){this.d=H.w(a,H.t(this,0))},
gH:function(){return this.d},
A:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.e(H.z(z))
x=this.c
if(x>=y){this.sdI(null)
return!1}this.sdI(z[x]);++this.c
return!0},
$isb2:1},
cp:{"^":"H;",
kI:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.e(P.X(""+a+".toInt()"))},
cR:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.e(P.X(""+a+".floor()"))},
aq:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.X(""+a+".round()"))},
f8:function(a,b){var z,y
if(b>20)throw H.e(P.a0(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
bq:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.e(P.a0(b,2,36,"radix",null))
z=a.toString(b)
if(C.c.a1(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.p(P.X("Unexpected toString result: "+z))
x=y.length
if(1>=x)return H.f(y,1)
z=y[1]
if(3>=x)return H.f(y,3)
w=+y[3]
x=y[2]
if(x!=null){z+=x
w-=x.length}return z+C.c.B("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga_:function(a){return a&0x1FFFFFFF},
bv:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
fJ:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.e_(a,b)},
a7:function(a,b){return(a|0)===a?a/b|0:this.e_(a,b)},
e_:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.e(P.X("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
aU:function(a,b){var z
if(a>0)z=this.dY(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
iH:function(a,b){if(b<0)throw H.e(H.al(b))
return this.dY(a,b)},
dY:function(a,b){return b>31?0:a>>>b},
S:function(a,b){if(typeof b!=="number")throw H.e(H.al(b))
return a<b},
$isy:1,
$isam:1},
ez:{"^":"cp;",$ism:1},
ey:{"^":"cp;"},
cq:{"^":"H;",
a1:function(a,b){if(b<0)throw H.e(H.b8(a,b))
if(b>=a.length)H.p(H.b8(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(b>=a.length)throw H.e(H.b8(a,b))
return a.charCodeAt(b)},
F:function(a,b){H.D(b)
if(typeof b!=="string")throw H.e(P.cV(b,null,null))
return a+b},
b4:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.al(b))
c=P.b4(b,c,a.length,null,null,null)
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
af:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.p(H.al(c))
if(typeof c!=="number")return c.S()
if(c<0||c>a.length)throw H.e(P.a0(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a6:function(a,b){return this.af(a,b,0)},
t:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.al(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.S()
if(b<0)throw H.e(P.cw(b,null,null))
if(b>c)throw H.e(P.cw(b,null,null))
if(c>a.length)throw H.e(P.cw(c,null,null))
return a.substring(b,c)},
as:function(a,b){return this.t(a,b,null)},
kL:function(a){return a.toLowerCase()},
B:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.R)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
kj:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.B(c,z)+a},
aj:function(a,b){return this.kj(a,b," ")},
eO:function(a,b,c){var z
if(c<0||c>a.length)throw H.e(P.a0(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
eN:function(a,b){return this.eO(a,b,0)},
jx:function(a,b,c){if(c>a.length)throw H.e(P.a0(c,0,a.length,null,null))
return H.hw(a,b,c)},
i:function(a){return a},
ga_:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gm:function(a){return a.length},
$iseR:1,
$isi:1}}],["","",,H,{"^":"",
cO:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
d8:function(){return new P.dm("No element")},
iL:function(){return new P.dm("Too many elements")},
u:{"^":"kE;a",
gm:function(a){return this.a.length},
j:function(a,b){return C.c.a1(this.a,b)},
$asdE:function(){return[P.m]},
$asS:function(){return[P.m]},
$aso:function(){return[P.m]},
$asb:function(){return[P.m]}},
eq:{"^":"o;"},
cs:{"^":"eq;$ti",
gV:function(a){return new H.dc(this,this.gm(this),0,[H.a6(this,"cs",0)])},
d9:function(a,b){return this.fE(0,H.l(b,{func:1,ret:P.G,args:[H.a6(this,"cs",0)]}))}},
dc:{"^":"a;a,b,c,0d,$ti",
sb9:function(a){this.d=H.w(a,H.t(this,0))},
gH:function(){return this.d},
A:function(){var z,y,x,w
z=this.a
y=J.bs(z)
x=y.gm(z)
if(this.b!==x)throw H.e(P.aG(z))
w=this.c
if(w>=x){this.sb9(null)
return!1}this.sb9(y.aa(z,w));++this.c
return!0},
$isb2:1},
j6:{"^":"o;a,b,$ti",
gV:function(a){return new H.j7(J.ba(this.a),this.b,this.$ti)},
gm:function(a){return J.av(this.a)},
aa:function(a,b){return this.b.$1(J.cd(this.a,b))},
$aso:function(a,b){return[b]}},
j7:{"^":"b2;0a,b,c,$ti",
sb9:function(a){this.a=H.w(a,H.t(this,1))},
A:function(){var z=this.b
if(z.A()){this.sb9(this.c.$1(z.gH()))
return!0}this.sb9(null)
return!1},
gH:function(){return this.a},
$asb2:function(a,b){return[b]}},
j8:{"^":"cs;a,b,$ti",
gm:function(a){return J.av(this.a)},
aa:function(a,b){return this.b.$1(J.cd(this.a,b))},
$ascs:function(a,b){return[b]},
$aso:function(a,b){return[b]}},
dI:{"^":"o;a,b,$ti",
gV:function(a){return new H.l7(J.ba(this.a),this.b,this.$ti)}},
l7:{"^":"b2;a,b,$ti",
A:function(){var z,y
for(z=this.a,y=this.b;z.A();)if(y.$1(z.gH()))return!0
return!1},
gH:function(){return this.a.gH()}},
cl:{"^":"a;$ti"},
dE:{"^":"a;$ti",
p:function(a,b,c){H.w(c,H.a6(this,"dE",0))
throw H.e(P.X("Cannot modify an unmodifiable list"))}},
kE:{"^":"cr+dE;"}}],["","",,H,{"^":"",
hZ:function(){throw H.e(P.X("Cannot modify unmodifiable Map"))},
bv:function(a){var z,y
z=H.D(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
mS:function(a){return init.types[H.aa(a)]},
n1:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.M(a).$isay},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ah(a)
if(typeof z!=="string")throw H.e(H.al(a))
return z},
bF:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
jD:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.f(z,3)
y=H.D(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.e(P.a0(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.c.G(w,u)|32)>x)return}return parseInt(a,b)},
bg:function(a){return H.ju(a)+H.dR(H.b9(a),0,null)},
ju:function(a){var z,y,x,w,v,u,t,s,r
z=J.M(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.Y||!!z.$iscC){u=C.F(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.bv(w.length>1&&C.c.G(w,0)===36?C.c.as(w,1):w)},
jv:function(){if(!!self.location)return self.location.href
return},
eX:function(a){var z,y,x,w,v
H.cb(a)
z=J.av(a)
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
jE:function(a){var z,y,x,w
z=H.c([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.z)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.e(H.al(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.aU(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.e(H.al(w))}return H.eX(z)},
eY:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.e(H.al(x))
if(x<0)throw H.e(H.al(x))
if(x>65535)return H.jE(a)}return H.eX(a)},
jF:function(a,b,c){var z,y,x,w
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
w=x<c?x:c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
bh:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.aU(z,10))>>>0,56320|z&1023)}}throw H.e(P.a0(a,0,1114111,null,null))},
bf:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jC:function(a){var z=H.bf(a).getFullYear()+0
return z},
jA:function(a){var z=H.bf(a).getMonth()+1
return z},
jw:function(a){var z=H.bf(a).getDate()+0
return z},
jx:function(a){var z=H.bf(a).getHours()+0
return z},
jz:function(a){var z=H.bf(a).getMinutes()+0
return z},
jB:function(a){var z=H.bf(a).getSeconds()+0
return z},
jy:function(a){var z=H.bf(a).getMilliseconds()+0
return z},
A:function(a){throw H.e(H.al(a))},
f:function(a,b){if(a==null)J.av(a)
throw H.e(H.b8(a,b))},
b8:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aP(!0,b,"index",null)
z=H.aa(J.av(a))
if(!(b<0)){if(typeof z!=="number")return H.A(z)
y=b>=z}else y=!0
if(y)return P.bb(b,a,"index",null,z)
return P.cw(b,"index",null)},
mN:function(a,b,c){if(a>c)return new P.cv(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cv(a,c,!0,b,"end","Invalid value")
return new P.aP(!0,b,"end",null)},
al:function(a){return new P.aP(!0,a,null,null)},
mI:function(a){if(typeof a!=="number")throw H.e(H.al(a))
return a},
e:function(a){var z
if(a==null)a=new P.eQ()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hx})
z.name=""}else z.toString=H.hx
return z},
hx:function(){return J.ah(this.dartException)},
p:function(a){throw H.e(a)},
z:function(a){throw H.e(P.aG(a))},
ab:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.nf(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.aU(x,16)&8191)===10)switch(w){case 438:return z.$1(H.db(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eP(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fj()
u=$.$get$fk()
t=$.$get$fl()
s=$.$get$fm()
r=$.$get$fq()
q=$.$get$fr()
p=$.$get$fo()
$.$get$fn()
o=$.$get$ft()
n=$.$get$fs()
m=v.ai(y)
if(m!=null)return z.$1(H.db(H.D(y),m))
else{m=u.ai(y)
if(m!=null){m.method="call"
return z.$1(H.db(H.D(y),m))}else{m=t.ai(y)
if(m==null){m=s.ai(y)
if(m==null){m=r.ai(y)
if(m==null){m=q.ai(y)
if(m==null){m=p.ai(y)
if(m==null){m=s.ai(y)
if(m==null){m=o.ai(y)
if(m==null){m=n.ai(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eP(H.D(y),m))}}return z.$1(new H.kD(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.f4()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aP(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.f4()
return a},
bt:function(a){var z
if(a==null)return new H.h_(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.h_(a)},
mQ:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.p(0,a[y],a[x])}return b},
n0:function(a,b,c,d,e,f){H.d(a,"$isc_")
switch(H.aa(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.r("Unsupported number of arguments for wrapped closure"))},
bq:function(a,b){var z
H.aa(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.n0)
a.$identity=z
return z},
hV:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.M(d).$isb){z.$reflectionInfo=d
x=H.jK(z).r}else x=d
w=e?Object.create(new H.k5().constructor.prototype):Object.create(new H.cX(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.aF
if(typeof u!=="number")return u.F()
$.aF=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.ef(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.mS,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.e9:H.cY
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.e("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.ef(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w["call*"]=q
w.$R=z.$R
w.$D=z.$D
return v},
hS:function(a,b,c,d){var z=H.cY
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
ef:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hU(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hS(y,!w,z,b)
if(y===0){w=$.aF
if(typeof w!=="number")return w.F()
$.aF=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bx
if(v==null){v=H.cg("self")
$.bx=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aF
if(typeof w!=="number")return w.F()
$.aF=w+1
t+=w
w="return function("+t+"){return this."
v=$.bx
if(v==null){v=H.cg("self")
$.bx=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
hT:function(a,b,c,d){var z,y
z=H.cY
y=H.e9
switch(b?-1:a){case 0:throw H.e(H.jT("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hU:function(a,b){var z,y,x,w,v,u,t,s
z=$.bx
if(z==null){z=H.cg("self")
$.bx=z}y=$.e8
if(y==null){y=H.cg("receiver")
$.e8=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hT(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.aF
if(typeof y!=="number")return y.F()
$.aF=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.aF
if(typeof y!=="number")return y.F()
$.aF=y+1
return new Function(z+y+"}")()},
dU:function(a,b,c,d,e,f,g){return H.hV(a,b,H.aa(c),d,!!e,!!f,g)},
D:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aB(a,"String"))},
mO:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aB(a,"double"))},
n7:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aB(a,"num"))},
dS:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aB(a,"bool"))},
aa:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aB(a,"int"))},
hu:function(a,b){throw H.e(H.aB(a,H.bv(H.D(b).substring(3))))},
n9:function(a,b){throw H.e(H.hR(a,H.bv(H.D(b).substring(3))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.M(a)[b])return a
H.hu(a,b)},
h:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.M(a)[b]
else z=!0
if(z)return a
H.n9(a,b)},
cb:function(a){if(a==null)return a
if(!!J.M(a).$isb)return a
throw H.e(H.aB(a,"List<dynamic>"))},
hr:function(a,b){var z
if(a==null)return a
z=J.M(a)
if(!!z.$isb)return a
if(z[b])return a
H.hu(a,b)},
hn:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.aa(z)]
else return a.$S()}return},
ca:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.hn(J.M(a))
if(z==null)return!1
return H.hc(z,null,b,null)},
l:function(a,b){var z,y
if(a==null)return a
if($.dO)return a
$.dO=!0
try{if(H.ca(a,b))return a
z=H.cR(b)
y=H.aB(a,z)
throw H.e(y)}finally{$.dO=!1}},
dW:function(a,b){if(a!=null&&!H.dT(a,b))H.p(H.aB(a,H.cR(b)))
return a},
hi:function(a){var z,y
z=J.M(a)
if(!!z.$isn){y=H.hn(z)
if(y!=null)return H.cR(y)
return"Closure"}return H.bg(a)},
ne:function(a){throw H.e(new P.i1(H.D(a)))},
ho:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
b9:function(a){if(a==null)return
return a.$ti},
nR:function(a,b,c){return H.bu(a["$as"+H.j(c)],H.b9(b))},
bS:function(a,b,c,d){var z
H.D(c)
H.aa(d)
z=H.bu(a["$as"+H.j(c)],H.b9(b))
return z==null?null:z[d]},
a6:function(a,b,c){var z
H.D(b)
H.aa(c)
z=H.bu(a["$as"+H.j(b)],H.b9(a))
return z==null?null:z[c]},
t:function(a,b){var z
H.aa(b)
z=H.b9(a)
return z==null?null:z[b]},
cR:function(a){return H.b7(a,null)},
b7:function(a,b){var z,y
H.k(b,"$isb",[P.i],"$asb")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bv(a[0].builtin$cls)+H.dR(a,1,b)
if(typeof a=="function")return H.bv(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.aa(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.j(b[y])}if('func' in a)return H.my(a,b)
if('futureOr' in a)return"FutureOr<"+H.b7("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
my:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.i]
H.k(b,"$isb",z,"$asb")
if("bounds" in a){y=a.bounds
if(b==null){b=H.c([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.f(b,r)
t=C.c.F(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.b7(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b7(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b7(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b7(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.mP(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.D(z[l])
n=n+m+H.b7(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dR:function(a,b,c){var z,y,x,w,v,u
H.k(c,"$isb",[P.i],"$asb")
if(a==null)return""
z=new P.aj("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b7(u,c)}return"<"+z.i(0)+">"},
bu:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bQ:function(a,b,c,d){var z,y
H.D(b)
H.cb(c)
H.D(d)
if(a==null)return!1
z=H.b9(a)
y=J.M(a)
if(y[b]==null)return!1
return H.hl(H.bu(y[d],z),null,c,null)},
k:function(a,b,c,d){H.D(b)
H.cb(c)
H.D(d)
if(a==null)return a
if(H.bQ(a,b,c,d))return a
throw H.e(H.aB(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bv(b.substring(3))+H.dR(c,0,null),init.mangledGlobalNames)))},
hl:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.au(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.au(a[y],b,c[y],d))return!1
return!0},
nP:function(a,b,c){return a.apply(b,H.bu(J.M(b)["$as"+H.j(c)],H.b9(b)))},
hq:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="C"||a===-1||a===-2||H.hq(z)}return!1},
dT:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="a"||b.builtin$cls==="C"||b===-1||b===-2||H.hq(b)
if(b==null||b===-1||b.builtin$cls==="a"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dT(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ca(a,b)}z=J.M(a).constructor
y=H.b9(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.au(z,null,b,null)},
w:function(a,b){if(a!=null&&!H.dT(a,b))throw H.e(H.aB(a,H.cR(b)))
return a},
au:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.au(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="C")return!0
if('func' in c)return H.hc(a,b,c,d)
if('func' in a)return c.builtin$cls==="c_"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.au("type" in a?a.type:null,b,x,d)
else if(H.au(a,b,x,d))return!0
else{if(!('$is'+"bB" in y.prototype))return!1
w=y.prototype["$as"+"bB"]
v=H.bu(w,z?a.slice(1):null)
return H.au(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
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
if(!H.au(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.au(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.au(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.au(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.n6(m,b,l,d)},
n6:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.au(c[w],d,a[w],b))return!1}return!0},
nQ:function(a,b,c){Object.defineProperty(a,H.D(b),{value:c,enumerable:false,writable:true,configurable:true})},
n2:function(a){var z,y,x,w,v,u
z=H.D($.hp.$1(a))
y=$.cM[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cP[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.D($.hk.$2(a,z))
if(z!=null){y=$.cM[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cP[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cQ(x)
$.cM[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cP[z]=x
return x}if(v==="-"){u=H.cQ(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.ht(a,x)
if(v==="*")throw H.e(P.cB(z))
if(init.leafTags[z]===true){u=H.cQ(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.ht(a,x)},
ht:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dZ(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cQ:function(a){return J.dZ(a,!1,null,!!a.$isay)},
n5:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cQ(z)
else return J.dZ(z,c,null,null)},
mZ:function(){if(!0===$.dY)return
$.dY=!0
H.n_()},
n_:function(){var z,y,x,w,v,u,t,s
$.cM=Object.create(null)
$.cP=Object.create(null)
H.mV()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hv.$1(v)
if(u!=null){t=H.n5(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mV:function(){var z,y,x,w,v,u,t
z=C.a2()
z=H.bp(C.a_,H.bp(C.a4,H.bp(C.E,H.bp(C.E,H.bp(C.a3,H.bp(C.a0,H.bp(C.a1(C.F),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.hp=new H.mW(v)
$.hk=new H.mX(u)
$.hv=new H.mY(t)},
bp:function(a,b){return a(b)||b},
hw:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
e1:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hY:{"^":"a;$ti",
i:function(a){return P.dd(this)},
p:function(a,b,c){H.w(b,H.t(this,0))
H.w(c,H.t(this,1))
return H.hZ()},
$isE:1},
i_:{"^":"hY;a,b,c,$ti",
gm:function(a){return this.a},
bH:function(a){if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
j:function(a,b){if(!this.bH(b))return
return this.dK(b)},
dK:function(a){return this.b[H.D(a)]},
K:function(a,b){var z,y,x,w,v
z=H.t(this,1)
H.l(b,{func:1,ret:-1,args:[H.t(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.w(this.dK(v),z))}}},
jJ:{"^":"a;a,b,c,d,e,f,r,0x",q:{
jK:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.co(z)
y=z[0]
x=z[1]
return new H.jJ(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
kr:{"^":"a;a,b,c,d,e,f",
ai:function(a){var z,y,x
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
aN:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.i])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.kr(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cA:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fp:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
jo:{"^":"a3;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
q:{
eP:function(a,b){return new H.jo(a,b==null?null:b.method)}}},
iQ:{"^":"a3;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
q:{
db:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.iQ(a,y,z?null:b.receiver)}}},
kD:{"^":"a3;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
nf:{"^":"n:19;a",
$1:function(a){if(!!J.M(a).$isa3)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
h_:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaU:1},
n:{"^":"a;",
i:function(a){return"Closure '"+H.bg(this).trim()+"'"},
gfg:function(){return this},
$isc_:1,
gfg:function(){return this}},
f8:{"^":"n;"},
k5:{"^":"f8;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.bv(z)+"'"}},
cX:{"^":"f8;a,b,c,d",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cX))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga_:function(a){var z,y
z=this.c
if(z==null)y=H.bF(this.a)
else y=typeof z!=="object"?J.bU(z):H.bF(z)
return(y^H.bF(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.bg(z)+"'")},
q:{
cY:function(a){return a.a},
e9:function(a){return a.c},
cg:function(a){var z,y,x,w,v
z=new H.cX("self","target","receiver","name")
y=J.co(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ks:{"^":"a3;a",
i:function(a){return this.a},
q:{
aB:function(a,b){return new H.ks("TypeError: "+H.j(P.cj(a))+": type '"+H.hi(a)+"' is not a subtype of type '"+b+"'")}}},
hQ:{"^":"a3;a",
i:function(a){return this.a},
q:{
hR:function(a,b){return new H.hQ("CastError: "+H.j(P.cj(a))+": type '"+H.hi(a)+"' is not a subtype of type '"+b+"'")}}},
jS:{"^":"a3;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
q:{
jT:function(a){return new H.jS(a)}}},
aR:{"^":"eH;a,0b,0c,0d,0e,0f,r,$ti",
gm:function(a){return this.a},
gk_:function(a){return this.a===0},
gay:function(){return new H.iV(this,[H.t(this,0)])},
bH:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.dF(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.dF(y,a)}else return this.jX(a)},
jX:function(a){var z=this.d
if(z==null)return!1
return this.cU(this.cg(z,this.cT(a)),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bz(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bz(w,b)
x=y==null?null:y.b
return x}else return this.jY(b)},
jY:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.cg(z,this.cT(a))
x=this.cU(y,a)
if(x<0)return
return y[x].b},
p:function(a,b,c){var z,y
H.w(b,H.t(this,0))
H.w(c,H.t(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.co()
this.b=z}this.dr(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.co()
this.c=y}this.dr(y,b,c)}else this.jZ(b,c)},
jZ:function(a,b){var z,y,x,w
H.w(a,H.t(this,0))
H.w(b,H.t(this,1))
z=this.d
if(z==null){z=this.co()
this.d=z}y=this.cT(a)
x=this.cg(z,y)
if(x==null)this.cu(z,y,[this.ca(a,b)])
else{w=this.cU(x,a)
if(w>=0)x[w].b=b
else x.push(this.ca(a,b))}},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.e(P.aG(this))
z=z.c}},
dr:function(a,b,c){var z
H.w(b,H.t(this,0))
H.w(c,H.t(this,1))
z=this.bz(a,b)
if(z==null)this.cu(a,b,this.ca(b,c))
else z.b=c},
h4:function(){this.r=this.r+1&67108863},
ca:function(a,b){var z,y
z=new H.iU(H.w(a,H.t(this,0)),H.w(b,H.t(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.h4()
return z},
cT:function(a){return J.bU(a)&0x3ffffff},
cU:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.P(a[y].a,b))return y
return-1},
i:function(a){return P.dd(this)},
bz:function(a,b){return a[b]},
cg:function(a,b){return a[b]},
cu:function(a,b,c){a[b]=c},
hl:function(a,b){delete a[b]},
dF:function(a,b){return this.bz(a,b)!=null},
co:function(){var z=Object.create(null)
this.cu(z,"<non-identifier-key>",z)
this.hl(z,"<non-identifier-key>")
return z},
$iseC:1},
iU:{"^":"a;a,b,0c,0d"},
iV:{"^":"eq;a,$ti",
gm:function(a){return this.a.a},
gV:function(a){var z,y
z=this.a
y=new H.iW(z,z.r,this.$ti)
y.c=z.e
return y}},
iW:{"^":"a;a,b,0c,0d,$ti",
sds:function(a){this.d=H.w(a,H.t(this,0))},
gH:function(){return this.d},
A:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aG(z))
else{z=this.c
if(z==null){this.sds(null)
return!1}else{this.sds(z.a)
this.c=this.c.c
return!0}}},
$isb2:1},
mW:{"^":"n:19;a",
$1:function(a){return this.a(a)}},
mX:{"^":"n:48;a",
$2:function(a,b){return this.a(a,b)}},
mY:{"^":"n:43;a",
$1:function(a){return this.a(H.D(a))}},
iO:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseR:1,
$isjL:1,
q:{
iP:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.e(P.V("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mP:function(a){return J.ex(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
n8:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bn:function(a){return a},
jj:function(a){return new Int8Array(a)},
aZ:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.b8(b,a))},
ms:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.e(H.mN(a,b,c))
return b},
di:{"^":"H;",$isdi:1,$iskt:1,"%":";ArrayBufferView;dh|fW|fX|jk|fY|fZ|be"},
dh:{"^":"di;",
gm:function(a){return a.length},
$isay:1,
$asay:I.dV},
jk:{"^":"fX;",
j:function(a,b){H.aZ(b,a,a.length)
return a[b]},
p:function(a,b,c){H.mO(c)
H.aZ(b,a,a.length)
a[b]=c},
$ascl:function(){return[P.y]},
$asS:function(){return[P.y]},
$iso:1,
$aso:function(){return[P.y]},
$isb:1,
$asb:function(){return[P.y]},
"%":"Float32Array"},
be:{"^":"fZ;",
p:function(a,b,c){H.aa(c)
H.aZ(b,a,a.length)
a[b]=c},
$ascl:function(){return[P.m]},
$asS:function(){return[P.m]},
$iso:1,
$aso:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}},
nr:{"^":"be;",
j:function(a,b){H.aZ(b,a,a.length)
return a[b]},
"%":"Int16Array"},
ns:{"^":"be;",
j:function(a,b){H.aZ(b,a,a.length)
return a[b]},
"%":"Int32Array"},
nt:{"^":"be;",
j:function(a,b){H.aZ(b,a,a.length)
return a[b]},
"%":"Int8Array"},
nu:{"^":"be;",
j:function(a,b){H.aZ(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
nv:{"^":"be;",
gm:function(a){return a.length},
j:function(a,b){H.aZ(b,a,a.length)
return a[b]},
$isnC:1,
"%":"CanvasPixelArray|Uint8ClampedArray"},
eN:{"^":"be;",
gm:function(a){return a.length},
j:function(a,b){H.aZ(b,a,a.length)
return a[b]},
$iseN:1,
$isN:1,
"%":";Uint8Array"},
fW:{"^":"dh+S;"},
fX:{"^":"fW+cl;"},
fY:{"^":"dh+S;"},
fZ:{"^":"fY+cl;"}}],["","",,P,{"^":"",
l9:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mF()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bq(new P.lb(z),1)).observe(y,{childList:true})
return new P.la(z,y,x)}else if(self.setImmediate!=null)return P.mG()
return P.mH()},
nG:[function(a){self.scheduleImmediate(H.bq(new P.lc(H.l(a,{func:1,ret:-1})),0))},"$1","mF",4,0,13],
nH:[function(a){self.setImmediate(H.bq(new P.ld(H.l(a,{func:1,ret:-1})),0))},"$1","mG",4,0,13],
nI:[function(a){P.dr(C.y,H.l(a,{func:1,ret:-1}))},"$1","mH",4,0,13],
dr:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.h.a7(a.a,1000)
return P.lV(z<0?0:z,b)},
fg:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.bi]})
z=C.h.a7(a.a,1000)
return P.lW(z<0?0:z,b)},
mB:function(a,b){if(H.ca(a,{func:1,args:[P.a,P.aU]}))return H.l(a,{func:1,ret:null,args:[P.a,P.aU]})
if(H.ca(a,{func:1,args:[P.a]}))return H.l(a,{func:1,ret:null,args:[P.a]})
throw H.e(P.cV(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mA:function(){var z,y
for(;z=$.bo,z!=null;){$.bO=null
y=z.b
$.bo=y
if(y==null)$.bN=null
z.a.$0()}},
nO:[function(){$.dP=!0
try{P.mA()}finally{$.bO=null
$.dP=!1
if($.bo!=null)$.$get$dJ().$1(P.hm())}},"$0","hm",0,0,3],
hh:function(a){var z=new P.fN(H.l(a,{func:1,ret:-1}))
if($.bo==null){$.bN=z
$.bo=z
if(!$.dP)$.$get$dJ().$1(P.hm())}else{$.bN.b=z
$.bN=z}},
mE:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.bo
if(z==null){P.hh(a)
$.bO=$.bN
return}y=new P.fN(a)
x=$.bO
if(x==null){y.b=z
$.bO=y
$.bo=y}else{y.b=x.b
x.b=y
$.bO=y
if(y.b==null)$.bN=y}},
na:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.R
if(C.l===y){P.cL(null,null,C.l,a)
return}y.toString
P.cL(null,null,y,H.l(y.cB(a),z))},
ff:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.R
if(y===C.l){y.toString
return P.dr(a,b)}return P.dr(a,H.l(y.cB(b),z))},
ko:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bi]}
H.l(b,z)
y=$.R
if(y===C.l){y.toString
return P.fg(a,b)}x=y.ea(b,P.bi)
$.R.toString
return P.fg(a,H.l(x,z))},
cK:function(a,b,c,d,e){var z={}
z.a=d
P.mE(new P.mC(z,e))},
hd:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.R
if(y===c)return d.$0()
$.R=c
z=y
try{y=d.$0()
return y}finally{$.R=z}},
he:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.w(e,g)
y=$.R
if(y===c)return d.$1(e)
$.R=c
z=y
try{y=d.$1(e)
return y}finally{$.R=z}},
mD:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.w(e,h)
H.w(f,i)
y=$.R
if(y===c)return d.$2(e,f)
$.R=c
z=y
try{y=d.$2(e,f)
return y}finally{$.R=z}},
cL:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.l!==c
if(z)d=!(!z||!1)?c.cB(d):c.jr(d,-1)
P.hh(d)},
lb:{"^":"n:15;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
la:{"^":"n:38;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
lc:{"^":"n:2;a",
$0:function(){this.a.$0()}},
ld:{"^":"n:2;a",
$0:function(){this.a.$0()}},
h1:{"^":"a;a,0b,c",
h2:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bq(new P.lY(this,b),0),a)
else throw H.e(P.X("`setTimeout()` not found."))},
h3:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bq(new P.lX(this,a,Date.now(),b),0),a)
else throw H.e(P.X("Periodic timer."))},
$isbi:1,
q:{
lV:function(a,b){var z=new P.h1(!0,0)
z.h2(a,b)
return z},
lW:function(a,b){var z=new P.h1(!1,0)
z.h3(a,b)
return z}}},
lY:{"^":"n:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lX:{"^":"n:2;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.fJ(w,x)}z.c=y
this.d.$1(z)}},
bm:{"^":"a;0a,b,c,d,e,$ti",
ka:function(a){if(this.c!==6)return!0
return this.b.b.d4(H.l(this.d,{func:1,ret:P.G,args:[P.a]}),a.a,P.G,P.a)},
jW:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.t(this,1)}
w=this.b.b
if(H.ca(z,{func:1,args:[P.a,P.aU]}))return H.dW(w.kA(z,a.a,a.b,null,y,P.aU),x)
else return H.dW(w.d4(H.l(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aY:{"^":"a;dZ:a<,b,0iw:c<,$ti",
f7:function(a,b,c){var z,y,x,w
z=H.t(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.R
if(y!==C.l){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.mB(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aY(0,$.R,[c])
w=b==null?1:3
this.du(new P.bm(x,w,a,b,[z,c]))
return x},
kH:function(a,b){return this.f7(a,null,b)},
du:function(a){var z,y
z=this.a
if(z<=1){a.a=H.d(this.c,"$isbm")
this.c=a}else{if(z===2){y=H.d(this.c,"$isaY")
z=y.a
if(z<4){y.du(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cL(null,null,z,H.l(new P.lm(this,a),{func:1,ret:-1}))}},
dV:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.d(this.c,"$isbm")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.d(this.c,"$isaY")
y=u.a
if(y<4){u.dV(a)
return}this.a=y
this.c=u.c}z.a=this.bD(a)
y=this.b
y.toString
P.cL(null,null,y,H.l(new P.lr(z,this),{func:1,ret:-1}))}},
cs:function(){var z=H.d(this.c,"$isbm")
this.c=null
return this.bD(z)},
bD:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
dB:function(a){var z,y,x
z=H.t(this,0)
H.dW(a,{futureOr:1,type:z})
y=this.$ti
if(H.bQ(a,"$isbB",y,"$asbB"))if(H.bQ(a,"$isaY",y,null))P.fR(a,this)
else P.ln(a,this)
else{x=this.cs()
H.w(a,z)
this.a=4
this.c=a
P.bJ(this,x)}},
dC:function(a,b){var z
H.d(b,"$isaU")
z=this.cs()
this.a=8
this.c=new P.an(a,b)
P.bJ(this,z)},
$isbB:1,
q:{
ln:function(a,b){var z,y,x
b.a=1
try{a.f7(new P.lo(b),new P.lp(b),null)}catch(x){z=H.ab(x)
y=H.bt(x)
P.na(new P.lq(b,z,y))}},
fR:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.d(a.c,"$isaY")
if(z>=4){y=b.cs()
b.a=a.a
b.c=a.c
P.bJ(b,y)}else{y=H.d(b.c,"$isbm")
b.a=2
b.c=a
a.dV(y)}},
bJ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.d(y.c,"$isan")
y=y.b
u=v.a
t=v.b
y.toString
P.cK(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bJ(z.a,b)}y=z.a
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
if(p){H.d(r,"$isan")
y=y.b
u=r.a
t=r.b
y.toString
P.cK(null,null,y,u,t)
return}o=$.R
if(o==null?q!=null:o!==q)$.R=q
else o=null
y=b.c
if(y===8)new P.lu(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.lt(x,b,r).$0()}else if((y&2)!==0)new P.ls(z,x,b).$0()
if(o!=null)$.R=o
y=x.b
if(!!J.M(y).$isbB){if(y.a>=4){n=H.d(t.c,"$isbm")
t.c=null
b=t.bD(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fR(y,t)
return}}m=b.b
n=H.d(m.c,"$isbm")
m.c=null
b=m.bD(n)
y=x.a
u=x.b
if(!y){H.w(u,H.t(m,0))
m.a=4
m.c=u}else{H.d(u,"$isan")
m.a=8
m.c=u}z.a=m
y=m}}}},
lm:{"^":"n:2;a,b",
$0:function(){P.bJ(this.a,this.b)}},
lr:{"^":"n:2;a,b",
$0:function(){P.bJ(this.b,this.a.a)}},
lo:{"^":"n:15;a",
$1:function(a){var z=this.a
z.a=0
z.dB(a)}},
lp:{"^":"n:35;a",
$2:function(a,b){this.a.dC(a,H.d(b,"$isaU"))},
$1:function(a){return this.$2(a,null)}},
lq:{"^":"n:2;a,b,c",
$0:function(){this.a.dC(this.b,this.c)}},
lu:{"^":"n:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.f6(H.l(w.d,{func:1}),null)}catch(v){y=H.ab(v)
x=H.bt(v)
if(this.d){w=H.d(this.a.a.c,"$isan").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.d(this.a.a.c,"$isan")
else u.b=new P.an(y,x)
u.a=!0
return}if(!!J.M(z).$isbB){if(z instanceof P.aY&&z.gdZ()>=4){if(z.gdZ()===8){w=this.b
w.b=H.d(z.giw(),"$isan")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.kH(new P.lv(t),null)
w.a=!1}}},
lv:{"^":"n:36;a",
$1:function(a){return this.a}},
lt:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.t(x,0)
v=H.w(this.c,w)
u=H.t(x,1)
this.a.b=x.b.b.d4(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.ab(t)
y=H.bt(t)
x=this.a
x.b=new P.an(z,y)
x.a=!0}}},
ls:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.d(this.a.a.c,"$isan")
w=this.c
if(w.ka(z)&&w.e!=null){v=this.b
v.b=w.jW(z)
v.a=!1}}catch(u){y=H.ab(u)
x=H.bt(u)
w=H.d(this.a.a.c,"$isan")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.an(y,x)
s.a=!0}}},
fN:{"^":"a;a,0b"},
k6:{"^":"a;$ti",
gm:function(a){var z,y,x,w
z={}
y=new P.aY(0,$.R,[P.m])
z.a=0
x=H.t(this,0)
w=H.l(new P.k8(z,this),{func:1,ret:-1,args:[x]})
H.l(new P.k9(z,y),{func:1,ret:-1})
W.a1(this.a,this.b,w,!1,x)
return y}},
k8:{"^":"n;a,b",
$1:function(a){H.w(a,H.t(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.C,args:[H.t(this.b,0)]}}},
k9:{"^":"n:2;a,b",
$0:function(){this.b.dB(this.a.a)}},
dn:{"^":"a;$ti"},
k7:{"^":"a;"},
bi:{"^":"a;"},
an:{"^":"a;a,b",
i:function(a){return H.j(this.a)},
$isa3:1},
mo:{"^":"a;",$isnF:1},
mC:{"^":"n:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eQ()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.e(z)
x=H.e(z)
x.stack=y.i(0)
throw x}},
lG:{"^":"mo;",
kB:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.l===$.R){a.$0()
return}P.hd(null,null,this,a,-1)}catch(x){z=H.ab(x)
y=H.bt(x)
P.cK(null,null,this,z,H.d(y,"$isaU"))}},
kC:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.w(b,c)
try{if(C.l===$.R){a.$1(b)
return}P.he(null,null,this,a,b,-1,c)}catch(x){z=H.ab(x)
y=H.bt(x)
P.cK(null,null,this,z,H.d(y,"$isaU"))}},
jr:function(a,b){return new P.lI(this,H.l(a,{func:1,ret:b}),b)},
cB:function(a){return new P.lH(this,H.l(a,{func:1,ret:-1}))},
ea:function(a,b){return new P.lJ(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
f6:function(a,b){H.l(a,{func:1,ret:b})
if($.R===C.l)return a.$0()
return P.hd(null,null,this,a,b)},
d4:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.w(b,d)
if($.R===C.l)return a.$1(b)
return P.he(null,null,this,a,b,c,d)},
kA:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.w(b,e)
H.w(c,f)
if($.R===C.l)return a.$2(b,c)
return P.mD(null,null,this,a,b,c,d,e,f)}},
lI:{"^":"n;a,b,c",
$0:function(){return this.a.f6(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
lH:{"^":"n:3;a,b",
$0:function(){return this.a.kB(this.b)}},
lJ:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.kC(this.b,H.w(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
iX:function(a,b,c,d,e){return new H.aR(0,0,[d,e])},
iY:function(a,b,c){H.cb(a)
return H.k(H.mQ(a,new H.aR(0,0,[b,c])),"$iseC",[b,c],"$aseC")},
eD:function(a,b){return new H.aR(0,0,[a,b])},
c3:function(a,b,c,d){return new P.lA(0,0,[d])},
iK:function(a,b,c){var z,y
if(P.dQ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bP()
C.a.h(y,a)
try{P.mz(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.f6(b,H.hr(z,"$iso"),", ")+c
return y.charCodeAt(0)==0?y:y},
d7:function(a,b,c){var z,y,x
if(P.dQ(a))return b+"..."+c
z=new P.aj(b)
y=$.$get$bP()
C.a.h(y,a)
try{x=z
x.a=P.f6(x.gaR(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gaR()+c
y=z.gaR()
return y.charCodeAt(0)==0?y:y},
dQ:function(a){var z,y
for(z=0;y=$.$get$bP(),z<y.length;++z)if(a===y[z])return!0
return!1},
mz:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gV(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.A())return
w=H.j(z.gH())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.A()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gH();++x
if(!z.A()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gH();++x
for(;z.A();t=s,s=r){r=z.gH();++x
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
iZ:function(a,b,c){var z=P.iX(null,null,null,b,c)
a.K(0,new P.j_(z,b,c))
return z},
eE:function(a,b){var z,y,x
z=P.c3(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.z)(a),++x)z.h(0,H.w(a[x],b))
return z},
dd:function(a){var z,y,x
z={}
if(P.dQ(a))return"{...}"
y=new P.aj("")
try{C.a.h($.$get$bP(),a)
x=y
x.a=x.gaR()+"{"
z.a=!0
a.K(0,new P.j4(z,y))
z=y
z.a=z.gaR()+"}"}finally{z=$.$get$bP()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gaR()
return z.charCodeAt(0)==0?z:z},
lA:{"^":"lw;a,0b,0c,0d,0e,0f,r,$ti",
gV:function(a){var z=new P.fV(this,this.r,this.$ti)
z.c=this.e
return z},
gm:function(a){return this.a},
Z:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.d(z[b],"$iscH")!=null}else{y=this.hh(b)
return y}},
hh:function(a){var z=this.d
if(z==null)return!1
return this.ce(this.dL(z,a),a)>=0},
h:function(a,b){var z,y
H.w(b,H.t(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dL()
this.b=z}return this.dt(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dL()
this.c=y}return this.dt(y,b)}else return this.h5(b)},
h5:function(a){var z,y,x
H.w(a,H.t(this,0))
z=this.d
if(z==null){z=P.dL()
this.d=z}y=this.dD(a)
x=z[y]
if(x==null)z[y]=[this.cp(a)]
else{if(this.ce(x,a)>=0)return!1
x.push(this.cp(a))}return!0},
a4:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.im(this.c,b)
else return this.ij(b)},
ij:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.dL(z,a)
x=this.ce(y,a)
if(x<0)return!1
this.e0(y.splice(x,1)[0])
return!0},
dt:function(a,b){H.w(b,H.t(this,0))
if(H.d(a[b],"$iscH")!=null)return!1
a[b]=this.cp(b)
return!0},
im:function(a,b){var z
if(a==null)return!1
z=H.d(a[b],"$iscH")
if(z==null)return!1
this.e0(z)
delete a[b]
return!0},
dQ:function(){this.r=this.r+1&67108863},
cp:function(a){var z,y
z=new P.cH(H.w(a,H.t(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dQ()
return z},
e0:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dQ()},
dD:function(a){return J.bU(a)&0x3ffffff},
dL:function(a,b){return a[this.dD(b)]},
ce:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.P(a[y].a,b))return y
return-1},
q:{
dL:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cH:{"^":"a;a,0b,0c"},
fV:{"^":"a;a,b,0c,0d,$ti",
sdA:function(a){this.d=H.w(a,H.t(this,0))},
gH:function(){return this.d},
A:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aG(z))
else{z=this.c
if(z==null){this.sdA(null)
return!1}else{this.sdA(H.w(z.a,H.t(this,0)))
this.c=this.c.b
return!0}}},
$isb2:1,
q:{
lB:function(a,b,c){var z=new P.fV(a,b,[c])
z.c=a.e
return z}}},
lw:{"^":"jU;"},
j_:{"^":"n:6;a,b,c",
$2:function(a,b){this.a.p(0,H.w(a,this.b),H.w(b,this.c))}},
cr:{"^":"lC;",$iso:1,$isb:1},
S:{"^":"a;$ti",
gV:function(a){return new H.dc(a,this.gm(a),0,[H.bS(this,a,"S",0)])},
aa:function(a,b){return this.j(a,b)},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.bS(this,a,"S",0)]})
z=this.gm(a)
for(y=0;y<z;++y){b.$1(this.j(a,y))
if(z!==this.gm(a))throw H.e(P.aG(a))}},
kK:function(a,b){var z,y
z=H.c([],[H.bS(this,a,"S",0)])
C.a.sm(z,this.gm(a))
for(y=0;y<this.gm(a);++y)C.a.p(z,y,this.j(a,y))
return z},
kJ:function(a){return this.kK(a,!0)},
jO:function(a,b,c,d){var z
H.w(d,H.bS(this,a,"S",0))
P.b4(b,c,this.gm(a),null,null,null)
for(z=b;z<c;++z)this.p(a,z,d)},
i:function(a){return P.d7(a,"[","]")}},
eH:{"^":"ct;"},
j4:{"^":"n:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
ct:{"^":"a;$ti",
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.a6(this,"ct",0),H.a6(this,"ct",1)]})
for(z=J.ba(this.gay());z.A();){y=z.gH()
b.$2(y,this.j(0,y))}},
gm:function(a){return J.av(this.gay())},
i:function(a){return P.dd(this)},
$isE:1},
m0:{"^":"a;$ti",
p:function(a,b,c){H.w(b,H.t(this,0))
H.w(c,H.t(this,1))
throw H.e(P.X("Cannot modify unmodifiable map"))}},
j5:{"^":"a;$ti",
j:function(a,b){return this.a.j(0,b)},
p:function(a,b,c){this.a.p(0,H.w(b,H.t(this,0)),H.w(c,H.t(this,1)))},
K:function(a,b){this.a.K(0,H.l(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]}))},
gm:function(a){var z=this.a
return z.gm(z)},
i:function(a){return J.ah(this.a)},
$isE:1},
fu:{"^":"m1;a,$ti"},
jW:{"^":"a;$ti",
au:function(a,b){var z
for(z=J.ba(H.k(b,"$iso",this.$ti,"$aso"));z.A();)this.h(0,z.gH())},
i:function(a){return P.d7(this,"{","}")},
aa:function(a,b){var z,y,x
if(b<0)H.p(P.a0(b,0,null,"index",null))
for(z=P.lB(this,this.r,H.t(this,0)),y=0;z.A();){x=z.d
if(b===y)return x;++y}throw H.e(P.bb(b,this,"index",null,y))},
$iso:1,
$isf2:1},
jU:{"^":"jW;"},
lC:{"^":"a+S;"},
m1:{"^":"j5+m0;$ti"}}],["","",,P,{"^":"",hN:{"^":"bX;a",
kc:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
c=P.b4(b,c,a.length,null,null,null)
z=$.$get$fP()
for(y=b,x=y,w=null,v=-1,u=-1,t=0;y<c;y=s){s=y+1
r=C.c.G(a,y)
if(r===37){q=s+2
if(q<=c){p=H.cO(C.c.G(a,s))
o=H.cO(C.c.G(a,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.f(z,n)
m=z[n]
if(m>=0){n=C.c.a1("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.aj("")
l=w.a+=C.c.t(a,x,y)
w.a=l+H.bh(r)
x=s
continue}}throw H.e(P.V("Invalid base64 data",a,y))}if(w!=null){l=w.a+=C.c.t(a,x,c)
k=l.length
if(v>=0)P.e6(a,u,c,v,t,k)
else{j=C.h.bv(k-1,4)+1
if(j===1)throw H.e(P.V("Invalid base64 encoding length ",a,c))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.c.b4(a,b,c,l.charCodeAt(0)==0?l:l)}i=c-b
if(v>=0)P.e6(a,u,c,v,t,i)
else{j=C.h.bv(i,4)
if(j===1)throw H.e(P.V("Invalid base64 encoding length ",a,c))
if(j>1)a=C.c.b4(a,c,c,j===2?"==":"=")}return a},
$asbX:function(){return[[P.b,P.m],P.i]},
q:{
e6:function(a,b,c,d,e,f){if(C.h.bv(f,4)!==0)throw H.e(P.V("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.e(P.V("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.e(P.V("Invalid base64 padding, more than two '=' characters",a,b))}}},hO:{"^":"b0;a",
$asb0:function(){return[[P.b,P.m],P.i]}},bX:{"^":"a;$ti"},b0:{"^":"k7;$ti"},ie:{"^":"bX;",
$asbX:function(){return[P.i,[P.b,P.m]]}},iy:{"^":"a;a,b,c,d,e",
i:function(a){return this.a}},ix:{"^":"b0;a",
hi:function(a,b,c){var z,y,x,w,v,u
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
default:u=null}if(u!=null){if(v==null)v=new P.aj("")
if(w>b)v.a+=C.c.t(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.hJ(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asb0:function(){return[P.i,P.i]}},kR:{"^":"ie;a",
gjN:function(){return C.S}},kY:{"^":"b0;",
bh:function(a,b,c){var z,y,x,w
z=a.length
P.b4(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.mm(0,0,x)
if(w.ht(a,b,z)!==z)w.e2(J.hC(a,z-1),0)
return new Uint8Array(x.subarray(0,H.ms(0,w.b,x.length)))},
cG:function(a){return this.bh(a,0,null)},
$asb0:function(){return[P.i,[P.b,P.m]]}},mm:{"^":"a;a,b,c",
e2:function(a,b){var z,y,x,w,v
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
ht:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.c.a1(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.c.G(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.e2(w,C.c.G(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},kS:{"^":"b0;a",
bh:function(a,b,c){var z,y,x,w,v
H.k(a,"$isb",[P.m],"$asb")
z=P.kT(!1,a,b,c)
if(z!=null)return z
y=J.av(a)
P.b4(b,c,y,null,null,null)
x=new P.aj("")
w=new P.mj(!1,x,!0,0,0,0)
w.bh(a,b,y)
if(w.e>0){H.p(P.V("Unfinished UTF-8 octet sequence",a,y))
x.a+=H.bh(65533)
w.d=0
w.e=0
w.f=0}v=x.a
return v.charCodeAt(0)==0?v:v},
cG:function(a){return this.bh(a,0,null)},
$asb0:function(){return[[P.b,P.m],P.i]},
q:{
kT:function(a,b,c,d){H.k(b,"$isb",[P.m],"$asb")
if(b instanceof Uint8Array)return P.kU(!1,b,c,d)
return},
kU:function(a,b,c,d){var z,y,x
z=$.$get$fz()
if(z==null)return
y=0===c
if(y&&!0)return P.dG(z,b)
x=b.length
d=P.b4(c,d,x,null,null,null)
if(y&&d===x)return P.dG(z,b)
return P.dG(z,b.subarray(c,d))},
dG:function(a,b){if(P.kW(b))return
return P.kX(a,b)},
kX:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.ab(y)}return},
kW:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
kV:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.ab(y)}return}}},mj:{"^":"a;a,b,c,d,e,f",
bh:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.k(a,"$isb",[P.m],"$asb")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.ml(c)
v=new P.mk(this,b,c,a)
$label0$0:for(u=J.bs(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.c2()
if((r&192)!==128){q=P.V("Bad UTF-8 encoding 0x"+C.h.bq(r,16),a,s)
throw H.e(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.f(C.G,q)
if(z<=C.G[q]){q=P.V("Overlong encoding of 0x"+C.h.bq(z,16),a,s-x-1)
throw H.e(q)}if(z>1114111){q=P.V("Character outside valid Unicode range: 0x"+C.h.bq(z,16),a,s-x-1)
throw H.e(q)}if(!this.c||z!==65279)t.a+=H.bh(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.dh()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.S()
if(r<0){m=P.V("Negative UTF-8 code unit: -0x"+C.h.bq(-r,16),a,n-1)
throw H.e(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.V("Bad UTF-8 encoding 0x"+C.h.bq(r,16),a,n-1)
throw H.e(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},ml:{"^":"n:57;a",
$2:function(a,b){var z,y,x,w
H.k(a,"$isb",[P.m],"$asb")
z=this.a
for(y=J.bs(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.c2()
if((w&127)!==w)return x-b}return z-b}},mk:{"^":"n:47;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.c6(this.d,a,b)}}}],["","",,P,{"^":"",
bT:function(a,b,c){var z
H.l(b,{func:1,ret:P.m,args:[P.i]})
z=H.jD(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.e(P.V(a,null,null))},
ih:function(a){if(a instanceof H.n)return a.i(0)
return"Instance of '"+H.bg(a)+"'"},
j0:function(a,b,c,d){var z,y
H.w(b,d)
z=J.iM(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.p(z,y,b)
return H.k(z,"$isb",[d],"$asb")},
eF:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gV(a);x.A();)C.a.h(y,H.w(x.gH(),c))
if(b)return y
return H.k(J.co(y),"$isb",z,"$asb")},
c6:function(a,b,c){var z,y
z=P.m
H.k(a,"$iso",[z],"$aso")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.k(a,"$isbc",[z],"$asbc")
y=a.length
c=P.b4(b,c,y,null,null,null)
return H.eY(b>0||c<y?C.a.fC(a,b,c):a)}if(!!J.M(a).$iseN)return H.jF(a,b,P.b4(b,c,a.length,null,null,null))
return P.ka(a,b,c)},
ka:function(a,b,c){var z,y,x,w
H.k(a,"$iso",[P.m],"$aso")
if(b<0)throw H.e(P.a0(b,0,J.av(a),null,null))
z=c==null
if(!z&&c<b)throw H.e(P.a0(c,b,J.av(a),null,null))
y=J.ba(a)
for(x=0;x<b;++x)if(!y.A())throw H.e(P.a0(b,0,x,null,null))
w=[]
if(z)for(;y.A();)w.push(y.gH())
else for(x=b;x<c;++x){if(!y.A())throw H.e(P.a0(c,b,x,null,null))
w.push(y.gH())}return H.eY(w)},
jM:function(a,b,c){return new H.iO(a,H.iP(a,!1,!0,!1))},
fw:function(){var z=H.jv()
if(z!=null)return P.kJ(z,0,null)
throw H.e(P.X("'Uri.base' is not supported"))},
cj:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ah(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ih(a)},
r:function(a){return new P.fQ(a)},
j1:function(a,b,c,d){var z,y
H.l(b,{func:1,ret:d,args:[P.m]})
z=H.c([],[d])
C.a.sm(z,a)
for(y=0;y<a;++y)C.a.p(z,y,b.$1(y))
return z},
e0:function(a){H.n8(a)},
kJ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.c.G(a,b+4)^58)*3|C.c.G(a,b)^100|C.c.G(a,b+1)^97|C.c.G(a,b+2)^116|C.c.G(a,b+3)^97)>>>0
if(y===0)return P.fv(b>0||c<c?C.c.t(a,b,c):a,5,null).gfd()
else if(y===32)return P.fv(C.c.t(a,z,c),0,null).gfd()}x=new Array(8)
x.fixed$length=Array
w=H.c(x,[P.m])
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
if(typeof v!=="number")return v.kP()
if(v>=b)if(P.hf(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.F()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.S()
if(typeof r!=="number")return H.A(r)
if(q<r)r=q
if(typeof s!=="number")return s.S()
if(s<u)s=r
else if(s<=v)s=v+1
if(typeof t!=="number")return t.S()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.S()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.c.af(a,"..",s)))n=r>s+2&&C.c.af(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.c.af(a,"file",b)){if(u<=b){if(!C.c.af(a,"/",s)){m="file:///"
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
s=7}else if(s===r)if(b===0&&!0){a=C.c.b4(a,s,r,"/");++r;++q;++c}else{a=C.c.t(a,b,s)+"/"+C.c.t(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.c.af(a,"http",b)){if(x&&t+3===s&&C.c.af(a,"80",t+1))if(b===0&&!0){a=C.c.b4(a,t,s,"")
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
else if(v===z&&C.c.af(a,"https",b)){if(x&&t+4===s&&C.c.af(a,"443",t+1))if(b===0&&!0){a=C.c.b4(a,t,s,"")
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
q-=b}return new P.lO(a,v,u,t,s,r,q,o)}return P.m2(a,b,c,v,u,t,s,r,q,o)},
fy:function(a,b){var z=P.i
return C.a.jT(H.c(a.split("&"),[z]),P.eD(z,z),new P.kM(b),[P.E,P.i,P.i])},
kH:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.kI(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.c.a1(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.bT(C.c.t(a,v,w),null,null)
if(typeof s!=="number")return s.dh()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.f(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.bT(C.c.t(a,v,c),null,null)
if(typeof s!=="number")return s.dh()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.f(y,u)
y[u]=s
return y},
fx:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.kK(a)
y=new P.kL(z,a)
if(a.length<2)z.$1("address is too short")
x=H.c([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.c.a1(a,w)
if(s===58){if(w===b){++w
if(C.c.a1(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaz(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.kH(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.f(o,l)
o[l]=0
i=l+1
if(i>=n)return H.f(o,i)
o[i]=0
l+=2}else{i=C.h.aU(k,8)
if(l<0||l>=n)return H.f(o,l)
o[l]=i
i=l+1
if(i>=n)return H.f(o,i)
o[i]=k&255
l+=2}}return o},
mt:function(){var z,y,x,w,v
z=P.j1(22,new P.mv(),!0,P.N)
y=new P.mu(z)
x=new P.mw()
w=new P.mx()
v=H.d(y.$2(0,225),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(14,225),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(15,225),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(1,225),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(2,235),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(3,235),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(4,229),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(5,229),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(6,231),"$isN")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(7,231),"$isN")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.d(y.$2(8,8),"$isN"),"]",5)
v=H.d(y.$2(9,235),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(16,235),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(17,235),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(10,235),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(18,235),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(19,235),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(11,235),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(12,236),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.d(y.$2(13,237),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.d(y.$2(20,245),"$isN"),"az",21)
v=H.d(y.$2(21,245),"$isN")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
hf:function(a,b,c,d,e){var z,y,x,w,v
H.k(e,"$isb",[P.m],"$asb")
z=$.$get$hg()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.f(z,d)
x=z[d]
w=C.c.G(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.f(x,w)
v=x[w]
d=v&31
C.a.p(e,v>>>5,y)}return d},
G:{"^":"a;"},
"+bool":0,
ao:{"^":"a;a,b",
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.ao))return!1
return this.a===b.a&&!0},
ga_:function(a){var z=this.a
return(z^C.h.aU(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.i3(H.jC(this))
y=P.bY(H.jA(this))
x=P.bY(H.jw(this))
w=P.bY(H.jx(this))
v=P.bY(H.jz(this))
u=P.bY(H.jB(this))
t=P.i4(H.jy(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
q:{
i3:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
i4:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bY:function(a){if(a>=10)return""+a
return"0"+a}}},
y:{"^":"am;"},
"+double":0,
by:{"^":"a;a",
S:function(a,b){return C.h.S(this.a,H.d(b,"$isby").a)},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.by))return!1
return this.a===b.a},
ga_:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.ia()
y=this.a
if(y<0)return"-"+new P.by(0-y).i(0)
x=z.$1(C.h.a7(y,6e7)%60)
w=z.$1(C.h.a7(y,1e6)%60)
v=new P.i9().$1(y%1e6)
return""+C.h.a7(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
q:{
ep:function(a,b,c,d,e,f){return new P.by(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
i9:{"^":"n:16;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
ia:{"^":"n:16;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a3:{"^":"a;"},
eQ:{"^":"a3;",
i:function(a){return"Throw of null."}},
aP:{"^":"a3;a,b,c,d",
gcd:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gcc:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gcd()+y+x
if(!this.a)return w
v=this.gcc()
u=P.cj(this.b)
return w+v+": "+H.j(u)},
q:{
bV:function(a){return new P.aP(!1,null,null,a)},
cV:function(a,b,c){return new P.aP(!0,a,b,c)}}},
cv:{"^":"aP;e,f,a,b,c,d",
gcd:function(){return"RangeError"},
gcc:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
q:{
cw:function(a,b,c){return new P.cv(null,null,!0,a,b,"Value not in range")},
a0:function(a,b,c,d,e){return new P.cv(b,c,!0,a,d,"Invalid value")},
b4:function(a,b,c,d,e,f){if(typeof a!=="number")return H.A(a)
if(0>a||a>c)throw H.e(P.a0(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.e(P.a0(b,a,c,"end",f))
return b}return c}}},
iz:{"^":"aP;e,m:f>,a,b,c,d",
gcd:function(){return"RangeError"},
gcc:function(){if(J.hy(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
q:{
bb:function(a,b,c,d,e){var z=H.aa(e!=null?e:J.av(b))
return new P.iz(b,z,!0,a,c,"Index out of range")}}},
kF:{"^":"a3;a",
i:function(a){return"Unsupported operation: "+this.a},
q:{
X:function(a){return new P.kF(a)}}},
kC:{"^":"a3;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
cB:function(a){return new P.kC(a)}}},
dm:{"^":"a3;a",
i:function(a){return"Bad state: "+this.a},
q:{
f5:function(a){return new P.dm(a)}}},
hX:{"^":"a3;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.cj(z))+"."},
q:{
aG:function(a){return new P.hX(a)}}},
jp:{"^":"a;",
i:function(a){return"Out of Memory"},
$isa3:1},
f4:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isa3:1},
i1:{"^":"a3;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fQ:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
io:{"^":"a;a,b,c",
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
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.c.G(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.c.a1(w,s)
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
return y+n+l+m+"\n"+C.c.B(" ",x-o+n.length)+"^\n"},
q:{
V:function(a,b,c){return new P.io(a,b,c)}}},
c_:{"^":"a;"},
m:{"^":"am;"},
"+int":0,
o:{"^":"a;$ti",
d9:["fE",function(a,b){var z=H.a6(this,"o",0)
return new H.dI(this,H.l(b,{func:1,ret:P.G,args:[z]}),[z])}],
gm:function(a){var z,y
z=this.gV(this)
for(y=0;z.A();)++y
return y},
gaM:function(a){var z,y
z=this.gV(this)
if(!z.A())throw H.e(H.d8())
y=z.gH()
if(z.A())throw H.e(H.iL())
return y},
aa:function(a,b){var z,y,x
if(b<0)H.p(P.a0(b,0,null,"index",null))
for(z=this.gV(this),y=0;z.A();){x=z.gH()
if(b===y)return x;++y}throw H.e(P.bb(b,this,"index",null,y))},
i:function(a){return P.iK(this,"(",")")}},
b2:{"^":"a;$ti"},
b:{"^":"a;$ti",$iso:1},
"+List":0,
E:{"^":"a;$ti"},
C:{"^":"a;",
ga_:function(a){return P.a.prototype.ga_.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
am:{"^":"a;"},
"+num":0,
a:{"^":";",
v:function(a,b){return this===b},
ga_:function(a){return H.bF(this)},
i:function(a){return"Instance of '"+H.bg(this)+"'"},
toString:function(){return this.i(this)}},
aU:{"^":"a;"},
i:{"^":"a;",$iseR:1},
"+String":0,
aj:{"^":"a;aR:a<",
gm:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isnz:1,
q:{
f6:function(a,b,c){var z=J.ba(b)
if(!z.A())return a
if(c.length===0){do a+=H.j(z.gH())
while(z.A())}else{a+=H.j(z.gH())
for(;z.A();)a=a+c+H.j(z.gH())}return a}}},
kM:{"^":"n:58;a",
$2:function(a,b){var z,y,x,w
z=P.i
H.k(a,"$isE",[z,z],"$asE")
H.D(b)
y=J.bR(b).eN(b,"=")
if(y===-1){if(b!=="")a.p(0,P.dN(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.c.t(b,0,y)
w=C.c.as(b,y+1)
z=this.a
a.p(0,P.dN(x,0,x.length,z,!0),P.dN(w,0,w.length,z,!0))}return a}},
kI:{"^":"n:31;a",
$2:function(a,b){throw H.e(P.V("Illegal IPv4 address, "+a,this.a,b))}},
kK:{"^":"n:33;a",
$2:function(a,b){throw H.e(P.V("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
kL:{"^":"n:34;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.bT(C.c.t(this.b,a,b),null,16)
if(typeof z!=="number")return z.S()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cI:{"^":"a;c5:a<,b,c,d,f_:e>,f,r,0x,0y,0z,0Q,0ch",
sii:function(a){var z=P.i
this.Q=H.k(a,"$isE",[z,z],"$asE")},
gfe:function(){return this.b},
gcS:function(a){var z=this.c
if(z==null)return""
if(C.c.a6(z,"["))return C.c.t(z,1,z.length-1)
return z},
gbY:function(a){var z=this.d
if(z==null)return P.h3(this.a)
return z},
gd1:function(){var z=this.f
return z==null?"":z},
geI:function(){var z=this.r
return z==null?"":z},
d3:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.k(h,"$isE",[P.i,null],"$asE")
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
if(x&&!C.c.a6(d,"/"))d="/"+d
g=P.dM(g,0,0,h)
return new P.cI(i,j,c,f,d,g,this.r)},
f5:function(a,b){return this.d3(a,null,null,null,null,null,null,b,null,null)},
gd2:function(){var z,y
if(this.Q==null){z=this.f
y=P.i
this.sii(new P.fu(P.fy(z==null?"":z,C.m),[y,y]))}return this.Q},
geJ:function(){return this.c!=null},
geM:function(){return this.f!=null},
geK:function(){return this.r!=null},
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
if(!!J.M(b).$isdF){if(this.a==b.gc5())if(this.c!=null===b.geJ())if(this.b==b.gfe())if(this.gcS(this)==b.gcS(b))if(this.gbY(this)==b.gbY(b))if(this.e===b.gf_(b)){z=this.f
y=z==null
if(!y===b.geM()){if(y)z=""
if(z===b.gd1()){z=this.r
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
$isdF:1,
q:{
c9:function(a,b,c,d){var z,y,x,w,v,u
H.k(a,"$isb",[P.m],"$asb")
if(c===C.m){z=$.$get$h8().b
if(typeof b!=="string")H.p(H.al(b))
z=z.test(b)}else z=!1
if(z)return b
H.w(b,H.a6(c,"bX",0))
y=c.gjN().cG(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.f(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.bh(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
m2:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.md(a,b,d)
else{if(d===b)P.bK(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.me(a,z,e-1):""
x=P.m7(a,e,f,!1)
if(typeof f!=="number")return f.F()
w=f+1
if(typeof g!=="number")return H.A(g)
v=w<g?P.ma(P.bT(C.c.t(a,w,g),new P.m3(a,f),null),j):null}else{y=""
x=null
v=null}u=P.m8(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.S()
t=h<i?P.dM(a,h+1,i,null):null
return new P.cI(j,y,x,v,u,t,i<c?P.m6(a,i+1,c):null)},
h3:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bK:function(a,b,c){throw H.e(P.V(c,a,b))},
ma:function(a,b){if(a!=null&&a===P.h3(b))return
return a},
m7:function(a,b,c,d){var z,y
if(b===c)return""
if(C.c.a1(a,b)===91){if(typeof c!=="number")return c.L()
z=c-1
if(C.c.a1(a,z)!==93)P.bK(a,b,"Missing end `]` to match `[` in host")
P.fx(a,b+1,z)
return C.c.t(a,b,c).toLowerCase()}if(typeof c!=="number")return H.A(c)
y=b
for(;y<c;++y)if(C.c.a1(a,y)===58){P.fx(a,b,c)
return"["+a+"]"}return P.mg(a,b,c)},
mg:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.A(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.c.a1(a,z)
if(v===37){u=P.ha(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.aj("")
s=C.c.t(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.c.t(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.f(C.J,t)
t=(C.J[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.aj("")
if(y<z){x.a+=C.c.t(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.f(C.t,t)
t=(C.t[t]&1<<(v&15))!==0}else t=!1
if(t)P.bK(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.c.a1(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.aj("")
s=C.c.t(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.h4(v)
z+=q
y=z}}}}if(x==null)return C.c.t(a,b,c)
if(y<c){s=C.c.t(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
md:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.h6(C.c.G(a,b)))P.bK(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.c.G(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.f(C.v,w)
w=(C.v[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bK(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.c.t(a,b,c)
return P.m4(y?a.toLowerCase():a)},
m4:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
me:function(a,b,c){return P.bL(a,b,c,C.a8,!1)},
m8:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bL(a,b,c,C.K,!0):C.r.lw(d,new P.m9(),P.i).l(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.c.a6(w,"/"))w="/"+w
return P.mf(w,e,f)},
mf:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.c.a6(a,"/"))return P.mh(a,!z||c)
return P.mi(a)},
dM:function(a,b,c,d){var z,y
z={}
H.k(d,"$isE",[P.i,null],"$asE")
if(a!=null){if(d!=null)throw H.e(P.bV("Both query and queryParameters specified"))
return P.bL(a,b,c,C.u,!0)}if(d==null)return
y=new P.aj("")
z.a=""
d.K(0,new P.mb(new P.mc(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
m6:function(a,b,c){return P.bL(a,b,c,C.u,!0)},
ha:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.c.a1(a,b+1)
x=C.c.a1(a,z)
w=H.cO(y)
v=H.cO(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.h.aU(u,4)
if(z>=8)return H.f(C.w,z)
z=(C.w[z]&1<<(u&15))!==0}else z=!1
if(z)return H.bh(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.c.t(a,b,b+3).toUpperCase()
return},
h4:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.c(z,[P.m])
C.a.p(y,0,37)
C.a.p(y,1,C.c.G("0123456789ABCDEF",a>>>4))
C.a.p(y,2,C.c.G("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.c(z,[P.m])
for(v=0;--w,w>=0;x=128){u=C.h.iH(a,6*w)&63|x
C.a.p(y,v,37)
C.a.p(y,v+1,C.c.G("0123456789ABCDEF",u>>>4))
C.a.p(y,v+2,C.c.G("0123456789ABCDEF",u&15))
v+=3}}return P.c6(y,0,null)},
bL:function(a,b,c,d,e){var z=P.h9(a,b,c,H.k(d,"$isb",[P.m],"$asb"),e)
return z==null?C.c.t(a,b,c):z},
h9:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.k(d,"$isb",[P.m],"$asb")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.S()
if(typeof c!=="number")return H.A(c)
if(!(y<c))break
c$0:{v=C.c.a1(a,y)
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
if(u){P.bK(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.c.a1(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.h4(v)}}if(w==null)w=new P.aj("")
w.a+=C.c.t(a,x,y)
w.a+=H.j(t)
if(typeof s!=="number")return H.A(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.S()
if(x<c)w.a+=C.c.t(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
h7:function(a){if(C.c.a6(a,"."))return!0
return C.c.eN(a,"/.")!==-1},
mi:function(a){var z,y,x,w,v,u,t
if(!P.h7(a))return a
z=H.c([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.P(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.f(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.l(z,"/")},
mh:function(a,b){var z,y,x,w,v,u
if(!P.h7(a))return!b?P.h5(a):a
z=H.c([],[P.i])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaz(z)!==".."){if(0>=z.length)return H.f(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.f(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaz(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.f(z,0)
C.a.p(z,0,P.h5(z[0]))}return C.a.l(z,"/")},
h5:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.h6(J.hB(a,0)))for(y=1;y<z;++y){x=C.c.G(a,y)
if(x===58)return C.c.t(a,0,y)+"%3A"+C.c.as(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.f(C.v,w)
w=(C.v[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
m5:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.c.G(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.e(P.bV("Invalid URL encoding"))}}return z},
dN:function(a,b,c,d,e){var z,y,x,w,v
y=b
while(!0){if(!(y<c)){z=!0
break}x=C.c.G(a,y)
if(x<=127)if(x!==37)w=x===43
else w=!0
else w=!0
if(w){z=!1
break}++y}if(z){if(C.m!==d)w=!1
else w=!0
if(w)return C.c.t(a,b,c)
else v=new H.u(C.c.t(a,b,c))}else{v=H.c([],[P.m])
for(w=a.length,y=b;y<c;++y){x=C.c.G(a,y)
if(x>127)throw H.e(P.bV("Illegal percent encoding in URI"))
if(x===37){if(y+3>w)throw H.e(P.bV("Truncated URI"))
C.a.h(v,P.m5(a,y+1))
y+=2}else if(x===43)C.a.h(v,32)
else C.a.h(v,x)}}H.k(v,"$isb",[P.m],"$asb")
return new P.kS(!1).cG(v)},
h6:function(a){var z=a|32
return 97<=z&&z<=122}}},
m3:{"^":"n:17;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.F()
throw H.e(P.V("Invalid port",this.a,z+1))}},
m9:{"^":"n:18;",
$1:function(a){return P.c9(C.a9,a,C.m,!1)}},
mc:{"^":"n:30;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.j(P.c9(C.w,a,C.m,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.j(P.c9(C.w,b,C.m,!0))}}},
mb:{"^":"n:40;a",
$2:function(a,b){var z,y
H.D(a)
if(b==null||typeof b==="string")this.a.$2(a,H.D(b))
else for(z=J.ba(H.hr(b,"$iso")),y=this.a;z.A();)y.$2(a,H.D(z.gH()))}},
kG:{"^":"a;a,b,c",
gfd:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
z=z[0]+1
x=C.c.eO(y,"?",z)
w=y.length
if(x>=0){v=P.bL(y,x+1,w,C.u,!1)
w=x}else v=null
z=new P.lh(this,"data",null,null,null,P.bL(y,z,w,C.K,!1),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
q:{
fv:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.c([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.c.G(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.e(P.V("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.e(P.V("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.c.G(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaz(z)
if(v!==44||x!==t+7||!C.c.af(a,"base64",t+1))throw H.e(P.V("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.P.kc(a,s,y)
else{r=P.h9(a,s,y,C.u,!0)
if(r!=null)a=C.c.b4(a,s,y,r)}return new P.kG(a,z,c)}}},
mv:{"^":"n:41;",
$1:function(a){return new Uint8Array(96)}},
mu:{"^":"n:42;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.f(z,a)
z=z[a]
J.hD(z,0,96,b)
return z}},
mw:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.c.G(b,y)^96
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
mx:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=C.c.G(b,0),y=C.c.G(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
lO:{"^":"a;a,b,c,d,e,f,r,x,0y",
geJ:function(){return this.c>0},
geL:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.F()
y=this.e
if(typeof y!=="number")return H.A(y)
y=z+1<y
z=y}else z=!1
return z},
geM:function(){var z=this.f
if(typeof z!=="number")return z.S()
return z<this.r},
geK:function(){return this.r<this.a.length},
gdO:function(){return this.b===4&&C.c.a6(this.a,"http")},
gdP:function(){return this.b===5&&C.c.a6(this.a,"https")},
gc5:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdO()){this.x="http"
z="http"}else if(this.gdP()){this.x="https"
z="https"}else if(z===4&&C.c.a6(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.c.a6(this.a,"package")){this.x="package"
z="package"}else{z=C.c.t(this.a,0,z)
this.x=z}return z},
gfe:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.c.t(this.a,y,z-1):""},
gcS:function(a){var z=this.c
return z>0?C.c.t(this.a,z,this.d):""},
gbY:function(a){var z
if(this.geL()){z=this.d
if(typeof z!=="number")return z.F()
return P.bT(C.c.t(this.a,z+1,this.e),null,null)}if(this.gdO())return 80
if(this.gdP())return 443
return 0},
gf_:function(a){return C.c.t(this.a,this.e,this.f)},
gd1:function(){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.S()
return z<y?C.c.t(this.a,z+1,y):""},
geI:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.c.as(y,z+1):""},
gd2:function(){var z=this.f
if(typeof z!=="number")return z.S()
if(z>=this.r)return C.aa
z=P.i
return new P.fu(P.fy(this.gd1(),C.m),[z,z])},
d3:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.k(h,"$isE",[P.i,null],"$asE")
i=this.gc5()
z=i==="file"
y=this.c
j=y>0?C.c.t(this.a,this.b+3,y):""
f=this.geL()?this.gbY(this):null
y=this.c
if(y>0)c=C.c.t(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.c.t(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.c.a6(d,"/"))d="/"+d
g=P.dM(g,0,0,h)
x=this.r
if(x<y.length)b=C.c.as(y,x+1)
return new P.cI(i,j,c,f,d,g,b)},
f5:function(a,b){return this.d3(a,null,null,null,null,null,null,b,null,null)},
ga_:function(a){var z=this.y
if(z==null){z=C.c.ga_(this.a)
this.y=z}return z},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!!J.M(b).$isdF)return this.a===b.i(0)
return!1},
i:function(a){return this.a},
$isdF:1},
lh:{"^":"cI;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
e4:function(a){var z=document.createElement("a")
return z},
d_:function(a,b){var z=document.createElement("canvas")
return z},
ib:function(a,b,c){var z,y
z=document.body
y=(z&&C.p).ao(z,a,b,c)
y.toString
z=W.B
z=new H.dI(new W.at(y),H.l(new W.ic(),{func:1,ret:P.G,args:[z]}),[z])
return H.d(z.gaM(z),"$isJ")},
id:function(a){H.d(a,"$isck")
return"wheel"},
bz:function(a){var z,y,x
z="element tag unavailable"
try{y=J.hG(a)
if(typeof y==="string")z=a.tagName}catch(x){H.ab(x)}return z},
ev:function(a,b,c){var z=document.createElement("img")
if(b!=null)z.src=b
return z},
cF:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fU:function(a,b,c,d){var z,y
z=W.cF(W.cF(W.cF(W.cF(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
hj:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.R
if(z===C.l)return a
return z.ea(a,b)},
a9:{"^":"J;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLInputElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
hL:{"^":"a9;",
i:function(a){return String(a)},
$ishL:1,
"%":"HTMLAnchorElement"},
nh:{"^":"a9;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
e7:{"^":"a9;",$ise7:1,"%":"HTMLBaseElement"},
cf:{"^":"a9;",$iscf:1,"%":"HTMLBodyElement"},
cZ:{"^":"a9;",
c3:function(a,b,c){if(c!=null)return this.hu(a,b,P.mJ(c,null))
return this.hv(a,b)},
fm:function(a,b){return this.c3(a,b,null)},
hu:function(a,b,c){return a.getContext(b,c)},
hv:function(a,b){return a.getContext(b)},
$iscZ:1,
$isee:1,
"%":"HTMLCanvasElement"},
d0:{"^":"H;",
hw:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
jK:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$isd0:1,
"%":"CanvasRenderingContext2D"},
nk:{"^":"B;0m:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
nm:{"^":"lg;0m:length=",
fo:function(a,b){var z=this.hx(a,this.hd(a,b))
return z==null?"":z},
hd:function(a,b){var z,y
z=$.$get$ei()
y=z[b]
if(typeof y==="string")return y
y=this.iK(a,b)
z[b]=y
return y},
iK:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.i5()+b
if(z in a)return z
return b},
hx:function(a,b){return a.getPropertyValue(b)},
gcC:function(a){return a.bottom},
gbj:function(a){return a.height},
gb2:function(a){return a.left},
gbo:function(a){return a.right},
gbr:function(a){return a.top},
gbt:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
i0:{"^":"a;",
gb2:function(a){return this.fo(a,"left")}},
b1:{"^":"a9;",$isb1:1,"%":"HTMLDivElement"},
i6:{"^":"B;",
jn:function(a,b){return a.adoptNode(b)},
df:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
nn:{"^":"H;",
i:function(a){return String(a)},
"%":"DOMException"},
i7:{"^":"H;",
jB:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
i8:{"^":"H;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
v:function(a,b){var z
if(b==null)return!1
if(!H.bQ(b,"$isaT",[P.am],"$asaT"))return!1
z=J.Z(b)
return a.left===z.gb2(b)&&a.top===z.gbr(b)&&a.width===z.gbt(b)&&a.height===z.gbj(b)},
ga_:function(a){return W.fU(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gcC:function(a){return a.bottom},
gbj:function(a){return a.height},
gb2:function(a){return a.left},
gbo:function(a){return a.right},
gbr:function(a){return a.top},
gbt:function(a){return a.width},
$isaT:1,
$asaT:function(){return[P.am]},
"%":";DOMRectReadOnly"},
lf:{"^":"cr;dJ:a<,b",
gm:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.f(z,b)
return H.d(z[b],"$isJ")},
p:function(a,b,c){var z
H.d(c,"$isJ")
z=this.b
if(b<0||b>=z.length)return H.f(z,b)
J.cS(this.a,c,z[b])},
h:function(a,b){J.e2(this.a,b)
return b},
gV:function(a){var z=this.kJ(this)
return new J.aw(z,z.length,0,[H.t(z,0)])},
$asS:function(){return[W.J]},
$aso:function(){return[W.J]},
$asb:function(){return[W.J]}},
J:{"^":"B;0kD:tagName=",
gjq:function(a){return new W.li(a)},
gcF:function(a){return new W.lf(a,a.children)},
ged:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.S()
if(x<0)x=-x*0
if(typeof w!=="number")return w.S()
if(w<0)w=-w*0
return new P.aT(z,y,x,w,[P.am])},
i:function(a){return a.localName},
ao:["c7",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.es
if(z==null){z=H.c([],[W.aL])
y=new W.eO(z)
C.a.h(z,W.fS(null))
C.a.h(z,W.h0())
$.es=y
d=y}else d=z
z=$.er
if(z==null){z=new W.hb(d)
$.er=z
c=z}else{z.a=d
c=z}}if($.aQ==null){z=document
y=z.implementation
y=(y&&C.T).jB(y,"")
$.aQ=y
$.d4=y.createRange()
y=$.aQ
y.toString
y=y.createElement("base")
H.d(y,"$ise7")
y.href=z.baseURI
z=$.aQ.head;(z&&C.V).C(z,y)}z=$.aQ
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.d(y,"$iscf")}z=$.aQ
if(!!this.$iscf)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.aQ.body;(z&&C.p).C(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.Z(C.a7,a.tagName)){z=$.d4;(z&&C.M).fu(z,x)
z=$.d4
w=(z&&C.M).jz(z,b)}else{x.innerHTML=b
w=$.aQ.createDocumentFragment()
for(z=J.Z(w);y=x.firstChild,y!=null;)z.C(w,y)}z=$.aQ.body
if(x==null?z!=null:x!==z)J.e3(x)
c.di(w)
C.z.jn(document,w)
return w},function(a,b,c){return this.ao(a,b,c,null)},"jA",null,null,"glt",5,5,null],
fz:function(a,b,c,d){a.textContent=null
this.C(a,this.ao(a,b,c,d))},
fw:function(a,b){return this.fz(a,b,null,null)},
b6:function(a,b){return a.getAttribute(b)},
ik:function(a,b){return a.removeAttribute(b)},
fv:function(a,b,c){return a.setAttribute(b,c)},
$isJ:1,
"%":";Element"},
ic:{"^":"n:20;",
$1:function(a){return!!J.M(H.d(a,"$isB")).$isJ}},
ac:{"^":"H;",$isac:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
ck:{"^":"H;",
h6:function(a,b,c,d){return a.addEventListener(b,H.bq(H.l(c,{func:1,args:[W.ac]}),1),!1)},
$isck:1,
"%":";EventTarget"},
no:{"^":"a9;0m:length=","%":"HTMLFormElement"},
it:{"^":"a9;","%":"HTMLHeadElement"},
iu:{"^":"H;0m:length=",
ir:function(a,b,c,d){return a.replaceState(b,c,d)},
"%":"History"},
iv:{"^":"ly;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.bb(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.d(c,"$isB")
throw H.e(P.X("Cannot assign element of immutable List."))},
aa:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isay:1,
$asay:function(){return[W.B]},
$asS:function(){return[W.B]},
$iso:1,
$aso:function(){return[W.B]},
$isb:1,
$asb:function(){return[W.B]},
$isiv:1,
$asaH:function(){return[W.B]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
iw:{"^":"i6;","%":"HTMLDocument"},
c0:{"^":"H;0ee:data=",$isc0:1,"%":"ImageData"},
d6:{"^":"a9;",$isd6:1,$isee:1,"%":"HTMLImageElement"},
bC:{"^":"du;",$isbC:1,"%":"KeyboardEvent"},
j2:{"^":"H;",
i:function(a){return String(a)},
$isj2:1,
"%":"Location"},
jh:{"^":"a9;","%":"HTMLAudioElement;HTMLMediaElement"},
ad:{"^":"du;",$isad:1,"%":"PointerEvent;DragEvent|MouseEvent"},
at:{"^":"cr;a",
gaM:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.e(P.f5("No elements"))
if(y>1)throw H.e(P.f5("More than one element"))
return z.firstChild},
au:function(a,b){var z,y,x,w,v
H.k(b,"$iso",[W.B],"$aso")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.Z(y),v=0;v<x;++v)w.C(y,z.firstChild)
return},
p:function(a,b,c){var z,y
H.d(c,"$isB")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.f(y,b)
J.cS(z,c,y[b])},
gV:function(a){var z=this.a.childNodes
return new W.et(z,z.length,-1,[H.bS(C.ab,z,"aH",0)])},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
$asS:function(){return[W.B]},
$aso:function(){return[W.B]},
$asb:function(){return[W.B]}},
B:{"^":"ck;0ks:previousSibling=",
ku:function(a){var z=a.parentNode
if(z!=null)J.cc(z,a)},
kw:function(a,b){var z,y
try{z=a.parentNode
J.cS(z,b,a)}catch(y){H.ab(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.fD(a):z},
C:function(a,b){return a.appendChild(H.d(b,"$isB"))},
il:function(a,b){return a.removeChild(b)},
iq:function(a,b,c){return a.replaceChild(b,c)},
$isB:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
jl:{"^":"lE;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.bb(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.d(c,"$isB")
throw H.e(P.X("Cannot assign element of immutable List."))},
aa:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isay:1,
$asay:function(){return[W.B]},
$asS:function(){return[W.B]},
$iso:1,
$aso:function(){return[W.B]},
$isb:1,
$asb:function(){return[W.B]},
$asaH:function(){return[W.B]},
"%":"NodeList|RadioNodeList"},
jH:{"^":"H;",
jz:function(a,b){return a.createContextualFragment(b)},
fu:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
ny:{"^":"a9;0m:length=","%":"HTMLSelectElement"},
cy:{"^":"a9;",$iscy:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
kb:{"^":"a9;",
ao:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.c7(a,b,c,d)
z=W.ib("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.at(y).au(0,new W.at(z))
return y},
hz:function(a,b){return a.insertRow(b)},
"%":"HTMLTableElement"},
kc:{"^":"a9;",
ao:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.c7(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.o.ao(z.createElement("table"),b,c,d)
z.toString
z=new W.at(z)
x=z.gaM(z)
x.toString
z=new W.at(x)
w=z.gaM(z)
y.toString
w.toString
new W.at(y).au(0,new W.at(w))
return y},
dN:function(a,b){return a.insertCell(b)},
"%":"HTMLTableRowElement"},
nA:{"^":"a9;",
ao:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.c7(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.o.ao(z.createElement("table"),b,c,d)
z.toString
z=new W.at(z)
x=z.gaM(z)
y.toString
x.toString
new W.at(y).au(0,new W.at(x))
return y},
"%":"HTMLTableSectionElement"},
f9:{"^":"a9;",$isf9:1,"%":"HTMLTemplateElement"},
bj:{"^":"H;",$isbj:1,"%":"Touch"},
bk:{"^":"du;",$isbk:1,"%":"TouchEvent"},
nB:{"^":"m_;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.bb(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.d(c,"$isbj")
throw H.e(P.X("Cannot assign element of immutable List."))},
aa:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isay:1,
$asay:function(){return[W.bj]},
$asS:function(){return[W.bj]},
$iso:1,
$aso:function(){return[W.bj]},
$isb:1,
$asb:function(){return[W.bj]},
$asaH:function(){return[W.bj]},
"%":"TouchList"},
du:{"^":"ac;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
nE:{"^":"jh;",$isee:1,"%":"HTMLVideoElement"},
bI:{"^":"ad;",
gjH:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.X("deltaY is not supported"))},
gjG:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.X("deltaX is not supported"))},
$isbI:1,
"%":"WheelEvent"},
l8:{"^":"ck;",
is:function(a,b){return a.requestAnimationFrame(H.bq(H.l(b,{func:1,ret:-1,args:[P.am]}),1))},
hn:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fO:{"^":"B;",$isfO:1,"%":"Attr"},
nJ:{"^":"i8;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
v:function(a,b){var z
if(b==null)return!1
if(!H.bQ(b,"$isaT",[P.am],"$asaT"))return!1
z=J.Z(b)
return a.left===z.gb2(b)&&a.top===z.gbr(b)&&a.width===z.gbt(b)&&a.height===z.gbj(b)},
ga_:function(a){return W.fU(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gbj:function(a){return a.height},
gbt:function(a){return a.width},
"%":"ClientRect|DOMRect"},
nN:{"^":"mq;",
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.bb(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.d(c,"$isB")
throw H.e(P.X("Cannot assign element of immutable List."))},
aa:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isay:1,
$asay:function(){return[W.B]},
$asS:function(){return[W.B]},
$iso:1,
$aso:function(){return[W.B]},
$isb:1,
$asb:function(){return[W.B]},
$asaH:function(){return[W.B]},
"%":"MozNamedAttrMap|NamedNodeMap"},
le:{"^":"eH;dJ:a<",
K:function(a,b){var z,y,x,w,v,u
H.l(b,{func:1,ret:-1,args:[P.i,P.i]})
for(z=this.gay(),y=z.length,x=this.a,w=J.Z(x),v=0;v<z.length;z.length===y||(0,H.z)(z),++v){u=z[v]
b.$2(u,w.b6(x,u))}},
gay:function(){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.i])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
v=H.d(z[w],"$isfO")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asct:function(){return[P.i,P.i]},
$asE:function(){return[P.i,P.i]}},
li:{"^":"le;a",
j:function(a,b){return J.cU(this.a,H.D(b))},
p:function(a,b,c){J.hI(this.a,b,c)},
gm:function(a){return this.gay().length}},
lj:{"^":"k6;a,b,c,$ti"},
nK:{"^":"lj;a,b,c,$ti"},
lk:{"^":"dn;a,b,c,d,e,$ti",q:{
a1:function(a,b,c,d,e){var z,y
z=W.hj(new W.ll(c),W.ac)
y=z!=null
if(y&&!0){H.l(z,{func:1,args:[W.ac]})
if(y)J.hA(a,b,z,!1)}return new W.lk(0,a,b,z,!1,[e])}}},
ll:{"^":"n:45;a",
$1:function(a){return this.a.$1(H.d(a,"$isac"))}},
c8:{"^":"a;a",
fT:function(a){var z,y
z=$.$get$dK()
if(z.gk_(z)){for(y=0;y<262;++y)z.p(0,C.a6[y],W.mT())
for(y=0;y<12;++y)z.p(0,C.B[y],W.mU())}},
aV:function(a){return $.$get$fT().Z(0,W.bz(a))},
aE:function(a,b,c){var z,y,x
z=W.bz(a)
y=$.$get$dK()
x=y.j(0,H.j(z)+"::"+b)
if(x==null)x=y.j(0,"*::"+b)
if(x==null)return!1
return H.dS(x.$4(a,b,c,this))},
$isaL:1,
q:{
fS:function(a){var z,y
z=W.e4(null)
y=window.location
z=new W.c8(new W.lK(z,y))
z.fT(a)
return z},
nL:[function(a,b,c,d){H.d(a,"$isJ")
H.D(b)
H.D(c)
H.d(d,"$isc8")
return!0},"$4","mT",16,0,14],
nM:[function(a,b,c,d){var z,y,x
H.d(a,"$isJ")
H.D(b)
H.D(c)
z=H.d(d,"$isc8").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","mU",16,0,14]}},
aH:{"^":"a;$ti",
gV:function(a){return new W.et(a,this.gm(a),-1,[H.bS(this,a,"aH",0)])}},
eO:{"^":"a;a",
aV:function(a){return C.a.e8(this.a,new W.jn(a))},
aE:function(a,b,c){return C.a.e8(this.a,new W.jm(a,b,c))},
$isaL:1},
jn:{"^":"n:21;a",
$1:function(a){return H.d(a,"$isaL").aV(this.a)}},
jm:{"^":"n:21;a,b,c",
$1:function(a){return H.d(a,"$isaL").aE(this.a,this.b,this.c)}},
lL:{"^":"a;",
h1:function(a,b,c,d){var z,y,x
this.a.au(0,c)
z=b.d9(0,new W.lM())
y=b.d9(0,new W.lN())
this.b.au(0,z)
x=this.c
x.au(0,C.H)
x.au(0,y)},
aV:function(a){return this.a.Z(0,W.bz(a))},
aE:["fI",function(a,b,c){var z,y
z=W.bz(a)
y=this.c
if(y.Z(0,H.j(z)+"::"+b))return this.d.jo(c)
else if(y.Z(0,"*::"+b))return this.d.jo(c)
else{y=this.b
if(y.Z(0,H.j(z)+"::"+b))return!0
else if(y.Z(0,"*::"+b))return!0
else if(y.Z(0,H.j(z)+"::*"))return!0
else if(y.Z(0,"*::*"))return!0}return!1}],
$isaL:1},
lM:{"^":"n:22;",
$1:function(a){return!C.a.Z(C.B,H.D(a))}},
lN:{"^":"n:22;",
$1:function(a){return C.a.Z(C.B,H.D(a))}},
lT:{"^":"lL;e,a,b,c,d",
aE:function(a,b,c){if(this.fI(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cU(a,"template")==="")return this.e.Z(0,b)
return!1},
q:{
h0:function(){var z,y,x,w,v
z=P.i
y=P.eE(C.A,z)
x=H.t(C.A,0)
w=H.l(new W.lU(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.lT(y,P.c3(null,null,null,z),P.c3(null,null,null,z),P.c3(null,null,null,z),null)
y.h1(null,new H.j8(C.A,w,[x,z]),v,null)
return y}}},
lU:{"^":"n:18;",
$1:function(a){return"TEMPLATE::"+H.j(H.D(a))}},
lS:{"^":"a;",
aV:function(a){var z=J.M(a)
if(!!z.$isf1)return!1
z=!!z.$isdp
if(z&&W.bz(a)==="foreignObject")return!1
if(z)return!0
return!1},
aE:function(a,b,c){if(b==="is"||C.c.a6(b,"on"))return!1
return this.aV(a)},
$isaL:1},
et:{"^":"a;a,b,c,0d,$ti",
sdM:function(a){this.d=H.w(a,H.t(this,0))},
A:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sdM(J.hz(this.a,z))
this.c=z
return!0}this.sdM(null)
this.c=y
return!1},
gH:function(){return this.d},
$isb2:1},
aL:{"^":"a;"},
lK:{"^":"a;a,b",$isnD:1},
hb:{"^":"a;a",
di:function(a){new W.mn(this).$2(a,null)},
bf:function(a,b){if(b==null)J.e3(a)
else J.cc(b,a)},
iy:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.hE(a)
x=J.cU(y.gdJ(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.ab(t)}v="element unprintable"
try{v=J.ah(a)}catch(t){H.ab(t)}try{u=W.bz(a)
this.ix(H.d(a,"$isJ"),b,z,v,u,H.d(y,"$isE"),H.D(x))}catch(t){if(H.ab(t) instanceof P.aP)throw t
else{this.bf(a,b)
window
s="Removing corrupted element "+H.j(v)
if(typeof console!="undefined")window.console.warn(s)}}},
ix:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.bf(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aV(a)){this.bf(a,b)
window
z="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.aE(a,"is",g)){this.bf(a,b)
window
z="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gay()
y=H.c(z.slice(0),[H.t(z,0)])
for(x=f.gay().length-1,z=f.a,w=J.Z(z);x>=0;--x){if(x>=y.length)return H.f(y,x)
v=y[x]
if(!this.a.aE(a,J.hK(v),w.b6(z,v))){window
u="Removing disallowed attribute <"+H.j(e)+" "+v+'="'+H.j(w.b6(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.b6(z,v)
w.ik(z,v)}}if(!!J.M(a).$isf9)this.di(a.content)},
$isnw:1},
mn:{"^":"n:51;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.iy(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.bf(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.hF(z)}catch(w){H.ab(w)
v=H.d(z,"$isB")
if(x){u=v.parentNode
if(u!=null)J.cc(u,v)}else J.cc(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.d(y,"$isB")}}},
lg:{"^":"H+i0;"},
lx:{"^":"H+S;"},
ly:{"^":"lx+aH;"},
lD:{"^":"H+S;"},
lE:{"^":"lD+aH;"},
lZ:{"^":"H+S;"},
m_:{"^":"lZ+aH;"},
mp:{"^":"H+S;"},
mq:{"^":"mp+aH;"}}],["","",,P,{"^":"",
mM:function(a){var z,y
z=J.M(a)
if(!!z.$isc0){y=z.gee(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.h2(a.data,a.height,a.width)},
mL:function(a){if(a instanceof P.h2)return{data:a.a,height:a.b,width:a.c}
return a},
mJ:function(a,b){var z={}
a.K(0,new P.mK(z))
return z},
eo:function(){var z=$.en
if(z==null){z=J.cT(window.navigator.userAgent,"Opera",0)
$.en=z}return z},
i5:function(){var z,y
z=$.ek
if(z!=null)return z
y=$.el
if(y==null){y=J.cT(window.navigator.userAgent,"Firefox",0)
$.el=y}if(y)z="-moz-"
else{y=$.em
if(y==null){y=!P.eo()&&J.cT(window.navigator.userAgent,"Trident/",0)
$.em=y}if(y)z="-ms-"
else z=P.eo()?"-o-":"-webkit-"}$.ek=z
return z},
lP:{"^":"a;",
eF:function(a){var z,y,x
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
y=J.M(a)
if(!!y.$isao)return new Date(a.a)
if(!!y.$isjL)throw H.e(P.cB("structured clone of RegExp"))
if(!!y.$isc0)return a
if(!!y.$isdi)return a
if(!!y.$isE){x=this.eF(a)
y=this.b
if(x>=y.length)return H.f(y,x)
w=y[x]
z.a=w
if(w!=null)return w
w={}
z.a=w
C.a.p(y,x,w)
a.K(0,new P.lR(z,this))
return z.a}if(!!y.$isb){x=this.eF(a)
z=this.b
if(x>=z.length)return H.f(z,x)
w=z[x]
if(w!=null)return w
return this.jy(a,x)}throw H.e(P.cB("structured clone of other type"))},
jy:function(a,b){var z,y,x,w
z=J.bs(a)
y=z.gm(a)
x=new Array(y)
C.a.p(this.b,b,x)
for(w=0;w<y;++w)C.a.p(x,w,this.d8(z.j(a,w)))
return x}},
lR:{"^":"n:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.d8(b)}},
h2:{"^":"a;ee:a>,b,c",$isc0:1},
mK:{"^":"n:6;a",
$2:function(a,b){this.a[a]=b}},
lQ:{"^":"lP;a,b"},
ik:{"^":"cr;a,b",
gbb:function(){var z,y,x
z=this.b
y=H.a6(z,"S",0)
x=W.J
return new H.j6(new H.dI(z,H.l(new P.il(),{func:1,ret:P.G,args:[y]}),[y]),H.l(new P.im(),{func:1,ret:x,args:[y]}),[y,x])},
K:function(a,b){H.l(b,{func:1,ret:-1,args:[W.J]})
C.a.K(P.eF(this.gbb(),!1,W.J),b)},
p:function(a,b,c){var z
H.d(c,"$isJ")
z=this.gbb()
J.hH(z.b.$1(J.cd(z.a,b)),c)},
h:function(a,b){J.e2(this.b.a,b)},
gm:function(a){return J.av(this.gbb().a)},
j:function(a,b){var z=this.gbb()
return z.b.$1(J.cd(z.a,b))},
gV:function(a){var z=P.eF(this.gbb(),!1,W.J)
return new J.aw(z,z.length,0,[H.t(z,0)])},
$asS:function(){return[W.J]},
$aso:function(){return[W.J]},
$asb:function(){return[W.J]}},
il:{"^":"n:20;",
$1:function(a){return!!J.M(H.d(a,"$isB")).$isJ}},
im:{"^":"n:52;",
$1:function(a){return H.h(H.d(a,"$isB"),"$isJ")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cG:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lz:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
lF:{"^":"a;$ti",
gbo:function(a){var z=this.a
if(typeof z!=="number")return z.F()
return H.w(z+this.c,H.t(this,0))},
gcC:function(a){var z=this.b
if(typeof z!=="number")return z.F()
return H.w(z+this.d,H.t(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
v:function(a,b){var z,y,x,w
if(b==null)return!1
if(!H.bQ(b,"$isaT",[P.am],"$asaT"))return!1
z=this.a
y=J.Z(b)
x=y.gb2(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbr(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.F()
w=H.t(this,0)
if(H.w(z+this.c,w)===y.gbo(b)){if(typeof x!=="number")return x.F()
z=H.w(x+this.d,w)===y.gcC(b)}else z=!1}else z=!1}else z=!1
return z},
ga_:function(a){var z,y,x,w,v
z=this.a
y=J.bU(z)
x=this.b
w=J.bU(x)
if(typeof z!=="number")return z.F()
v=H.t(this,0)
z=H.w(z+this.c,v)
if(typeof x!=="number")return x.F()
v=H.w(x+this.d,v)
return P.lz(P.cG(P.cG(P.cG(P.cG(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
aT:{"^":"lF;b2:a>,br:b>,bt:c>,bj:d>,$ti"}}],["","",,P,{"^":"",f1:{"^":"dp;",$isf1:1,"%":"SVGScriptElement"},dp:{"^":"J;",
gcF:function(a){return new P.ik(a,new W.at(a))},
ao:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.aL])
C.a.h(z,W.fS(null))
C.a.h(z,W.h0())
C.a.h(z,new W.lS())
c=new W.hb(new W.eO(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).jA(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.at(w)
u=z.gaM(z)
for(z=J.Z(v);x=u.firstChild,x!=null;)z.C(v,x)
return v},
$isdp:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"}}],["","",,P,{"^":"",N:{"^":"a;",$iso:1,
$aso:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$iskt:1}}],["","",,P,{"^":""}],["","",,P,{"^":"",hP:{"^":"H;",$ishP:1,"%":"WebGLBuffer"},ip:{"^":"H;",$isip:1,"%":"WebGLFramebuffer"},jG:{"^":"H;",$isjG:1,"%":"WebGLProgram"},dj:{"^":"H;",
e3:function(a,b){return a.activeTexture(b)},
e9:function(a,b,c){return a.attachShader(b,c)},
av:function(a,b,c){return a.bindBuffer(b,c)},
js:function(a,b,c){return a.bindFramebuffer(b,c)},
aW:function(a,b,c){return a.bindTexture(b,c)},
aH:function(a,b,c){return a.blendFunc(b,c)},
eb:function(a,b,c,d){return a.bufferData(b,c,d)},
jt:function(a,b){return a.clear(b)},
ju:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
jv:function(a,b){return a.clearDepth(b)},
jw:function(a,b){return a.compileShader(b)},
jC:function(a,b){return a.createShader(b)},
jE:function(a,b){return a.deleteProgram(b)},
jF:function(a,b){return a.deleteShader(b)},
jI:function(a,b){return a.depthFunc(b)},
cK:function(a,b){return a.disable(b)},
eg:function(a,b){return a.disableVertexAttribArray(b)},
jJ:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
aw:function(a,b){return a.enable(b)},
ei:function(a,b){return a.enableVertexAttribArray(b)},
fh:function(a,b){return a.generateMipmap(b)},
fi:function(a,b,c){return a.getActiveAttrib(b,c)},
fj:function(a,b,c){return a.getActiveUniform(b,c)},
fk:function(a,b,c){return a.getAttribLocation(b,c)},
dg:function(a,b){return a.getParameter(b)},
fn:function(a,b){return a.getProgramInfoLog(b)},
c4:function(a,b,c){return a.getProgramParameter(b,c)},
fp:function(a,b){return a.getShaderInfoLog(b)},
fq:function(a,b,c){return a.getShaderParameter(b,c)},
fs:function(a,b,c){return a.getUniformLocation(b,c)},
k6:function(a,b){return a.linkProgram(b)},
kr:function(a,b,c){return a.pixelStorei(b,c)},
fB:function(a,b,c){return a.shaderSource(b,c)},
kF:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.M(g)
if(!!z.$isc0)y=!0
else y=!1
if(y){this.iM(a,b,c,d,e,f,P.mL(g))
return}if(!!z.$isd6)z=!0
else z=!1
if(z){this.iN(a,b,c,d,e,f,g)
return}throw H.e(P.bV("Incorrect number or type of arguments"))},
kE:function(a,b,c,d,e,f,g){return this.kF(a,b,c,d,e,f,g,null,null,null)},
iM:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
iN:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
c0:function(a,b,c,d){return a.texParameteri(b,c,d)},
N:function(a,b,c){return a.uniform1f(b,c)},
R:function(a,b,c){return a.uniform1i(b,c)},
u:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
kM:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
fb:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
fc:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
d7:function(a,b){return a.useProgram(b)},
kN:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
kO:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isdj:1,
"%":"WebGLRenderingContext"},jX:{"^":"H;",$isjX:1,"%":"WebGLShader"},ke:{"^":"H;",$iske:1,"%":"WebGLTexture"},kA:{"^":"H;",$iskA:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",a_:{"^":"a;0a,0b,0c,0d,$ti",
shD:function(a){this.a=H.k(a,"$isb",[H.a6(this,"a_",0)],"$asb")},
sdT:function(a){this.b=H.l(a,{func:1,ret:P.G,args:[[P.o,H.a6(this,"a_",0)]]})},
sdR:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.m,[P.o,H.a6(this,"a_",0)]]})},
sdU:function(a){this.d=H.l(a,{func:1,ret:-1,args:[P.m,[P.o,H.a6(this,"a_",0)]]})},
c9:function(a){this.shD(H.c([],[a]))
this.sdT(null)
this.sdR(null)
this.sdU(null)},
dj:function(a,b,c){var z=H.a6(this,"a_",0)
H.l(b,{func:1,ret:P.G,args:[[P.o,z]]})
z={func:1,ret:-1,args:[P.m,[P.o,z]]}
H.l(a,z)
H.l(c,z)
this.sdT(b)
this.sdR(a)
this.sdU(c)},
bx:function(a,b){return this.dj(a,null,b)},
i7:function(a){var z
H.k(a,"$iso",[H.a6(this,"a_",0)],"$aso")
z=this.b
if(z!=null)return z.$1(a)
return!0},
fO:function(a,b){var z
H.k(b,"$iso",[H.a6(this,"a_",0)],"$aso")
z=this.c
if(z!=null)z.$2(a,b)},
gm:function(a){return this.a.length},
gV:function(a){var z=this.a
return new J.aw(z,z.length,0,[H.t(z,0)])},
aa:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.a6(this,"a_",0)
H.w(b,z)
z=[z]
if(this.i7(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.fO(x,H.c([b],z))}},
$iso:1,
q:{
d2:function(a){var z=new O.a_([a])
z.c9(a)
return z}}},df:{"^":"a;0a,0b",
scj:function(a){this.a=H.k(a,"$isb",[V.ap],"$asb")},
gm:function(a){return this.a.length},
gw:function(){var z=this.b
if(z==null){z=D.K()
this.b=z}return z},
fP:function(a){var z=this.b
if(!(z==null))z.J(a)},
aN:function(){return this.fP(null)},
ga2:function(){var z=this.a
if(z.length>0)return C.a.gaz(z)
else return V.c4()},
f2:function(a){var z=this.a
if(a==null)C.a.h(z,V.c4())
else C.a.h(z,a)
this.aN()},
d0:function(){var z=this.a
if(z.length>0){z.pop()
this.aN()}}}}],["","",,E,{"^":"",cW:{"^":"a;"},ax:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0al:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sfQ:function(a,b){this.y=H.k(b,"$isa_",[E.ax],"$asa_")},
sal:function(a){this.z=H.d(a,"$isbA")},
dz:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.aw(z,z.length,0,[H.t(z,0)]);z.A();){y=z.d
if(y.f==null)y.dz()}},
sc6:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gw().a4(0,this.geW())
y=this.c
if(y!=null)y.gw().h(0,this.geW())
x=new D.F("shape",z,this.c,this,[F.af])
x.b=!0
this.ae(x)}},
sd5:function(a){var z,y,x
z=this.f
if(z==null?a!=null:z!==a){if(z!=null)z.gw().a4(0,this.geX())
y=this.f
this.f=a
if(a!=null)a.gw().h(0,this.geX())
this.dz()
x=new D.F("technique",y,this.f,this,[O.c7])
x.b=!0
this.ae(x)}},
sbk:function(a){var z,y
if(!J.P(this.r,a)){z=this.r
if(z!=null)z.gw().a4(0,this.geV())
if(a!=null)a.gw().h(0,this.geV())
this.r=a
y=new D.F("mover",z,a,this,[U.ae])
y.b=!0
this.ae(y)}},
ar:function(a){var z,y,x,w
z=this.r
y=z!=null?z.b5(a,this):null
if(!J.P(y,this.x)){x=this.x
this.x=y
w=new D.F("matrix",x,y,this,[V.ap])
w.b=!0
this.ae(w)}z=this.f
if(z!=null)z.ar(a)
for(z=this.y.a,z=new J.aw(z,z.length,0,[H.t(z,0)]);z.A();)z.d.ar(a)},
aJ:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.ga2())
else C.a.h(z.a,y.B(0,z.ga2()))
z.aN()
a.f3(this.f)
z=a.dy
x=(z&&C.a).gaz(z)
if(x!=null&&this.d!=null)x.f4(a,this)
for(z=this.y.a,z=new J.aw(z,z.length,0,[H.t(z,0)]);z.A();)z.d.aJ(a)
a.f0()
a.dx.d0()},
gw:function(){var z=this.z
if(z==null){z=D.K()
this.z=z}return z},
ae:function(a){var z=this.z
if(!(z==null))z.J(a)},
a3:function(){return this.ae(null)},
kh:[function(a){H.d(a,"$isx")
this.e=null
this.ae(a)},function(){return this.kh(null)},"lC","$1","$0","geW",0,2,0],
ki:[function(a){this.ae(H.d(a,"$isx"))},function(){return this.ki(null)},"lD","$1","$0","geX",0,2,0],
kg:[function(a){this.ae(H.d(a,"$isx"))},function(){return this.kg(null)},"lB","$1","$0","geV",0,2,0],
ke:[function(a){this.ae(H.d(a,"$isx"))},function(){return this.ke(null)},"lz","$1","$0","geU",0,2,0],
ly:[function(a,b){var z,y,x,w,v,u,t
H.k(b,"$iso",[E.ax],"$aso")
for(z=b.length,y=this.geU(),x={func:1,ret:-1,args:[D.x]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.gal()==null){t=new D.bA()
t.sam(null)
t.sbd(null)
t.c=null
t.d=0
u.sal(t)}t=u.gal()
t.toString
H.l(y,x)
if(t.a==null)t.sam(H.c([],w))
t=t.a;(t&&C.a).h(t,y)}}this.a3()},"$2","gkd",8,0,7],
lA:[function(a,b){var z,y
H.k(b,"$iso",[E.ax],"$aso")
for(z=b.gV(b),y=this.geU();z.A();)z.gH().gw().a4(0,y)
this.a3()},"$2","gkf",8,0,7],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaS:1,
q:{
d5:function(a,b,c,d,e,f){var z=new E.ax()
z.a=d
z.b=!0
z.sfQ(0,O.d2(E.ax))
z.y.bx(z.gkd(),z.gkf())
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
z.sc6(0,e)
z.sd5(f)
z.sbk(c)
return z}}},jN:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
siL:function(a){this.dy=H.k(a,"$isb",[O.c7],"$asb")},
siG:function(a){this.fr=H.k(a,"$isE",[P.i,A.cx],"$asE")},
fL:function(a,b){var z,y
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
z=new O.df()
y=[V.ap]
z.scj(H.c([],y))
z.b=null
z.gw().h(0,new E.jP(this))
this.cy=z
z=new O.df()
z.scj(H.c([],y))
z.b=null
z.gw().h(0,new E.jQ(this))
this.db=z
z=new O.df()
z.scj(H.c([],y))
z.b=null
z.gw().h(0,new E.jR(this))
this.dx=z
this.siL(H.c([],[O.c7]))
z=this.dy;(z&&C.a).h(z,null)
this.siG(new H.aR(0,0,[P.i,A.cx]))},
gkt:function(){var z=this.z
if(z==null){z=this.cy.ga2().B(0,this.db.ga2())
this.z=z}return z},
gf1:function(){var z=this.ch
if(z==null){z=this.gkt().B(0,this.dx.ga2())
this.ch=z}return z},
gff:function(){var z=this.cx
if(z==null){z=this.db.ga2().B(0,this.dx.ga2())
this.cx=z}return z},
f3:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaz(z):a;(z&&C.a).h(z,y)},
f0:function(){var z=this.dy
if(z.length>1)z.pop()},
e7:function(a){var z=a.b
if(z.length===0)throw H.e(P.r("May not cache a shader with no name."))
if(this.fr.bH(z))throw H.e(P.r('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.p(0,z,a)},
q:{
jO:function(a,b){var z=new E.jN(a,b)
z.fL(a,b)
return z}}},jP:{"^":"n:8;a",
$1:function(a){var z
H.d(a,"$isx")
z=this.a
z.z=null
z.ch=null}},jQ:{"^":"n:8;a",
$1:function(a){var z
H.d(a,"$isx")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jR:{"^":"n:8;a",
$1:function(a){var z
H.d(a,"$isx")
z=this.a
z.ch=null
z.cx=null}},kl:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0al:x<,0y,0z,0Q,0ch,0cx,0cy",
sal:function(a){this.x=H.d(a,"$isbA")},
fS:[function(a){H.d(a,"$isx")
this.ky()},function(){return this.fS(null)},"fR","$1","$0","gdn",0,2,0],
gjV:function(){var z,y,x
z=Date.now()
y=C.h.a7(P.ep(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.ao(z,!1)
return x/y},
dW:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.B()
if(typeof z!=="number")return H.A(z)
x=C.k.cR(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.B()
w=C.k.cR(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.ff(C.y,this.gkx())}},
ky:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.kn(this),{func:1,ret:-1,args:[P.am]})
C.O.hn(z)
C.O.is(z,W.hj(y,P.am))}},"$0","gkx",0,0,3],
kv:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dW()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ao(w,!1)
x.y=P.ep(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sm(w.a,0)
w.aN()
w=x.db
C.a.sm(w.a,0)
w.aN()
w=x.dx
C.a.sm(w.a,0)
w.aN()
w=x.dy;(w&&C.a).sm(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aJ(this.e)}x=this.z
if(!(x==null))x.J(null)}catch(v){z=H.ab(v)
y=H.bt(v)
P.e0("Error: "+H.j(z))
P.e0("Stack: "+H.j(y))
throw H.e(z)}},
q:{
km:function(a,b,c,d,e){var z,y,x,w
z=J.M(a)
if(!!z.$iscZ)return E.fe(a,!0,!0,!0,!1)
y=W.d_(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcF(a).h(0,y)
w=E.fe(y,!0,!0,!0,!1)
w.a=a
return w},
fe:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.kl()
y=P.iY(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.i,null)
x=C.q.c3(a,"webgl",y)
x=H.d(x==null?C.q.c3(a,"experimental-webgl",y):x,"$isdj")
if(x==null)H.p(P.r("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.jO(x,a)
w=new T.kj(x)
w.b=H.aa((x&&C.b).dg(x,3379))
w.c=H.aa(C.b.dg(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.kN(a)
v=new X.iR()
v.c=new X.aK(!1,!1,!1)
v.sih(P.c3(null,null,null,P.m))
w.b=v
v=new X.ji(w)
v.f=0
v.r=V.b3()
v.x=V.b3()
v.Q=1
v.ch=1
w.c=v
v=new X.j3(w)
v.r=0
v.x=V.b3()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.kq(w)
v.e=0
v.f=V.b3()
v.r=V.b3()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.sho(H.c([],[[P.dn,P.a]]))
v=w.z
u=document
t=W.ad
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.a1(u,"contextmenu",H.l(w.ghV(),s),!1,t))
v=w.z
r=W.ac
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a1(a,"focus",H.l(w.ghY(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a1(a,"blur",H.l(w.ghR(),q),!1,r))
v=w.z
p=W.bC
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a1(u,"keyup",H.l(w.gi_(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a1(u,"keydown",H.l(w.ghZ(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a1(a,"mousedown",H.l(w.gi2(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a1(a,"mouseup",H.l(w.gi4(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a1(a,"mousemove",H.l(w.gi3(),s),!1,t))
p=w.z
o=W.bI;(p&&C.a).h(p,W.a1(a,H.D(W.id(a)),H.l(w.gi5(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a1(u,"mousemove",H.l(w.ghW(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a1(u,"mouseup",H.l(w.ghX(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a1(u,"pointerlockchange",H.l(w.gi6(),q),!1,r))
r=w.z
q=W.bk
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a1(a,"touchstart",H.l(w.gie(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a1(a,"touchend",H.l(w.gib(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a1(a,"touchmove",H.l(w.gic(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.ao(Date.now(),!1)
z.cy=0
z.dW()
return z}}},kn:{"^":"n:32;a",
$1:function(a){var z
H.n7(a)
z=this.a
if(z.ch){z.ch=!1
z.kv()}}}}],["","",,Z,{"^":"",fL:{"^":"a;a,b",$isni:1,q:{
dH:function(a,b,c){var z
H.k(c,"$isb",[P.m],"$asb")
z=a.createBuffer()
C.b.av(a,b,z)
C.b.eb(a,b,new Int16Array(H.bn(c)),35044)
C.b.av(a,b,null)
return new Z.fL(b,z)}}},ea:{"^":"cW;a,b,c,d,e",
aF:function(a){var z,y,x
try{y=a.a
C.b.ei(y,this.e)
C.b.kN(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.ab(x)
y=P.r('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.j(z))
throw H.e(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},fM:{"^":"a;a",$isnj:1},bW:{"^":"a;a,0b,c,d",
shy:function(a){this.b=H.k(a,"$isb",[Z.c1],"$asb")},
ah:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
aF:function(a){var z,y
z=this.a
C.b.av(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].aF(a)},
fa:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.b.eg(x,z[y].e)
C.b.av(x,this.a.a,null)},
aJ:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.f(w,x)
v=w[x]
w=v.c
u=w.a
C.b.av(y,u,w.b)
C.b.jJ(y,v.a,v.b,5123,0)
C.b.av(y,u,null)}},
eY:function(a){this.aF(a)
this.aJ(a)
this.fa(a)},
i:function(a){var z,y,x,w,v,u
z=[P.i]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ah(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(y,", ")+"\nAttrs:   "+C.a.l(u,", ")},
$iskd:1},eb:{"^":"a;0a",
shH:function(a){this.a=H.k(a,"$isE",[P.i,Z.bW],"$asE")},
$iskd:1},c1:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bg(this.c)+"'")+"]"}},b5:{"^":"a;a",
gdk:function(a){var z,y
z=this.a
y=(z&$.$get$aE().a)!==0?3:0
if((z&$.$get$aD().a)!==0)y+=3
if((z&$.$get$aC().a)!==0)y+=3
if((z&$.$get$aW().a)!==0)y+=2
if((z&$.$get$aX().a)!==0)y+=3
if((z&$.$get$b6().a)!==0)y+=3
if((z&$.$get$bH().a)!==0)y+=4
if((z&$.$get$bl().a)!==0)++y
return(z&$.$get$aV().a)!==0?y+4:y},
jp:function(a){var z,y,x
z=$.$get$aE()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aD()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aC()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aW()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aX()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b6()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bH()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bl()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aV()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fK()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b5))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.i])
y=this.a
if((y&$.$get$aE().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aD().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aC().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aW().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aX().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$b6().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bH().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bl().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aV().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.l(z,"|")},
q:{
as:function(a){return new Z.b5(a)}}}}],["","",,D,{"^":"",d1:{"^":"a;"},bA:{"^":"a;0a,0b,0c,0d",
sam:function(a){this.a=H.k(a,"$isb",[{func:1,ret:-1,args:[D.x]}],"$asb")},
sbd:function(a){this.b=H.k(a,"$isb",[{func:1,ret:-1,args:[D.x]}],"$asb")},
h:function(a,b){var z={func:1,ret:-1,args:[D.x]}
H.l(b,z)
if(this.a==null)this.sam(H.c([],[z]))
z=this.a;(z&&C.a).h(z,b)},
a4:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.x]})
z=this.a
z=z==null?null:C.a.Z(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).a4(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.Z(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).a4(z,b)||y}return y},
J:function(a){var z,y,x,w
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
return!0}if(!x)C.a.K(y,new D.ii(z))
y=this.b
if(!(y==null))C.a.K(y,new D.ij(z))
z=this.b
if(!(z==null))C.a.sm(z,0)
return!0},
jL:function(){return this.J(null)},
kz:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.J(y)}}},
aL:function(){return this.kz(!0,!1)},
q:{
K:function(){var z=new D.bA()
z.sam(null)
z.sbd(null)
z.c=null
z.d=0
return z}}},ii:{"^":"n:23;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.x]})
z=this.a.a
z.b
a.$1(z)}},ij:{"^":"n:23;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.x]})
z=this.a.a
z.b
a.$1(z)}},x:{"^":"a;a,0b"},cm:{"^":"x;c,d,a,0b,$ti"},cn:{"^":"x;c,d,a,0b,$ti"},F:{"^":"x;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",ec:{"^":"a;a,b",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ec))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},eB:{"^":"a;a,b",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eB))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},iR:{"^":"a;0a,0b,0c,0d",
sih:function(a){this.d=H.k(a,"$isf2",[P.m],"$asf2")},
ko:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
kk:function(a){this.c=a.b
this.d.a4(0,a.a)
return!1}},eG:{"^":"cu;x,y,c,d,e,a,0b"},j3:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
ba:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ao(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.B()
v=b.b
u=this.ch
if(typeof v!=="number")return v.B()
t=new V.ai(y.a+x*w,y.b+v*u)
u=this.a.gaY()
s=new X.bD(a,V.b3(),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
d_:function(a,b){this.r=a.a
return!1},
bm:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.ft()
if(typeof z!=="number")return z.c2()
this.r=(z&~y)>>>0
return!1},
bl:function(a,b){var z=this.d
if(z==null)return!1
z.J(this.ba(a,b))
return!0},
kp:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaY()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.B()
t=a.b
s=this.cy
if(typeof t!=="number")return t.B()
w=new X.dg(new V.T(v*u,t*s),y,x,new P.ao(w,!1),this)
w.b=!0
z.J(w)
return!0},
i1:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ao(Date.now(),!1)
y=this.f
x=new X.eG(c,a,this.a.gaY(),b,z,this)
x.b=!0
y.J(x)
this.y=z
this.x=V.b3()}},aK:{"^":"a;a,b,c",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aK))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},bD:{"^":"cu;x,y,z,Q,ch,c,d,e,a,0b"},ji:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
cf:function(a,b,c){var z,y,x
z=new P.ao(Date.now(),!1)
y=this.a.gaY()
x=new X.bD(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
d_:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.J(this.cf(a,b,!0))
return!0},
bm:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.ft()
if(typeof z!=="number")return z.c2()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.J(this.cf(a,b,!0))
return!0},
bl:function(a,b){var z=this.d
if(z==null)return!1
z.J(this.cf(a,b,!1))
return!0},
kq:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaY()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.B()
u=a.b
t=this.ch
if(typeof u!=="number")return u.B()
x=new X.dg(new V.T(w*v,u*t),y,b,new P.ao(x,!1),this)
x.b=!0
z.J(x)
return!0},
geh:function(){var z=this.b
if(z==null){z=D.K()
this.b=z}return z},
gc1:function(){var z=this.c
if(z==null){z=D.K()
this.c=z}return z},
geS:function(){var z=this.d
if(z==null){z=D.K()
this.d=z}return z}},dg:{"^":"cu;x,c,d,e,a,0b"},cu:{"^":"x;"},fi:{"^":"cu;x,y,z,Q,ch,c,d,e,a,0b"},kq:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
ba:function(a,b){var z,y,x,w
H.k(a,"$isb",[V.ai],"$asb")
z=new P.ao(Date.now(),!1)
y=a.length>0?a[0]:V.b3()
x=this.a.gaY()
w=new X.fi(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
kn:function(a){var z
H.k(a,"$isb",[V.ai],"$asb")
z=this.b
if(z==null)return!1
z.J(this.ba(a,!0))
return!0},
kl:function(a){var z
H.k(a,"$isb",[V.ai],"$asb")
z=this.c
if(z==null)return!1
z.J(this.ba(a,!0))
return!0},
km:function(a){var z
H.k(a,"$isb",[V.ai],"$asb")
z=this.d
if(z==null)return!1
z.J(this.ba(a,!1))
return!0}},kN:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
sho:function(a){this.z=H.k(a,"$isb",[[P.dn,P.a]],"$asb")},
gaY:function(){var z=this.a
return V.f_(0,0,C.q.ged(z).c,C.q.ged(z).d)},
dG:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eB(z,new X.aK(y,a.altKey,a.shiftKey))},
aT:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aK(y,a.altKey,a.shiftKey)},
cv:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aK(y,a.altKey,a.shiftKey)},
aC:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.L()
v=z.top
if(typeof x!=="number")return x.L()
return new V.ai(y-w,x-v)},
be:function(a){return new V.T(a.movementX,a.movementY)},
cr:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.ai])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
t=C.k.aq(u.pageX)
C.k.aq(u.pageY)
s=z.left
C.k.aq(u.pageX)
C.a.h(y,new V.ai(t-s,C.k.aq(u.pageY)-z.top))}return y},
aA:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.ec(z,new X.aK(y,a.altKey,a.shiftKey))},
ck:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.L()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.L()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
l8:[function(a){this.f=!0},"$1","ghY",4,0,9],
l2:[function(a){this.f=!1},"$1","ghR",4,0,9],
l5:[function(a){H.d(a,"$isad")
if(this.f&&this.ck(a))a.preventDefault()},"$1","ghV",4,0,4],
la:[function(a){var z
H.d(a,"$isbC")
if(!this.f)return
z=this.dG(a)
this.b.ko(z)},"$1","gi_",4,0,24],
l9:[function(a){var z
H.d(a,"$isbC")
if(!this.f)return
z=this.dG(a)
this.b.kk(z)},"$1","ghZ",4,0,24],
lc:[function(a){var z,y,x,w
H.d(a,"$isad")
z=this.a
z.focus()
this.f=!0
this.aT(a)
if(this.x){y=this.aA(a)
x=this.be(a)
if(this.d.d_(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aA(a)
w=this.aC(a)
if(this.c.d_(y,w))a.preventDefault()},"$1","gi2",4,0,4],
le:[function(a){var z,y,x
H.d(a,"$isad")
this.aT(a)
z=this.aA(a)
if(this.x){y=this.be(a)
if(this.d.bm(z,y))a.preventDefault()
return}if(this.r)return
x=this.aC(a)
if(this.c.bm(z,x))a.preventDefault()},"$1","gi4",4,0,4],
l7:[function(a){var z,y,x
H.d(a,"$isad")
if(!this.ck(a)){this.aT(a)
z=this.aA(a)
if(this.x){y=this.be(a)
if(this.d.bm(z,y))a.preventDefault()
return}if(this.r)return
x=this.aC(a)
if(this.c.bm(z,x))a.preventDefault()}},"$1","ghX",4,0,4],
ld:[function(a){var z,y,x
H.d(a,"$isad")
this.aT(a)
z=this.aA(a)
if(this.x){y=this.be(a)
if(this.d.bl(z,y))a.preventDefault()
return}if(this.r)return
x=this.aC(a)
if(this.c.bl(z,x))a.preventDefault()},"$1","gi3",4,0,4],
l6:[function(a){var z,y,x
H.d(a,"$isad")
if(!this.ck(a)){this.aT(a)
z=this.aA(a)
if(this.x){y=this.be(a)
if(this.d.bl(z,y))a.preventDefault()
return}if(this.r)return
x=this.aC(a)
if(this.c.bl(z,x))a.preventDefault()}},"$1","ghW",4,0,4],
lf:[function(a){var z,y
H.d(a,"$isbI")
this.aT(a)
z=new V.T((a&&C.N).gjG(a),C.N.gjH(a)).E(0,180)
if(this.x){if(this.d.kp(z))a.preventDefault()
return}if(this.r)return
y=this.aC(a)
if(this.c.kq(z,y))a.preventDefault()},"$1","gi5",4,0,37],
lg:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.aA(this.y)
x=this.aC(this.y)
this.d.i1(y,x,z)}},"$1","gi6",4,0,9],
lm:[function(a){var z
H.d(a,"$isbk")
this.a.focus()
this.f=!0
this.cv(a)
z=this.cr(a)
if(this.e.kn(z))a.preventDefault()},"$1","gie",4,0,10],
lk:[function(a){var z
H.d(a,"$isbk")
this.cv(a)
z=this.cr(a)
if(this.e.kl(z))a.preventDefault()},"$1","gib",4,0,10],
ll:[function(a){var z
H.d(a,"$isbk")
this.cv(a)
z=this.cr(a)
if(this.e.km(z))a.preventDefault()},"$1","gic",4,0,10]}}],["","",,D,{"^":"",ci:{"^":"a;0a,0b,0c,0d",
gw:function(){var z=this.d
if(z==null){z=D.K()
this.d=z}return z},
aO:[function(a){var z
H.d(a,"$isx")
z=this.d
if(!(z==null))z.J(a)},function(){return this.aO(null)},"kQ","$1","$0","gfV",0,2,0],
$isa5:1,
$isaS:1},a5:{"^":"a;",$isaS:1},iS:{"^":"a_;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
shm:function(a){this.e=H.k(a,"$isb",[D.ci],"$asb")},
sig:function(a){this.f=H.k(a,"$isb",[D.eT],"$asb")},
siI:function(a){this.r=H.k(a,"$isb",[D.f3],"$asb")},
siT:function(a){this.x=H.k(a,"$isb",[D.fb],"$asb")},
siU:function(a){this.y=H.k(a,"$isb",[D.fc],"$asb")},
siV:function(a){this.z=H.k(a,"$isb",[D.fd],"$asb")},
gw:function(){var z=this.Q
if(z==null){z=D.K()
this.Q=z}return z},
aO:function(a){var z=this.Q
if(!(z==null))z.J(a)},
i0:[function(a){var z
H.d(a,"$isx")
z=this.ch
if(!(z==null))z.J(a)},function(){return this.i0(null)},"lb","$1","$0","gdS",0,2,0],
lh:[function(a){var z,y,x
H.k(a,"$iso",[D.a5],"$aso")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.z)(a),++y){x=a[y]
if(x==null||this.fU(x))return!1}return!0},"$1","gi8",4,0,59],
l_:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a5
H.k(b,"$iso",[z],"$aso")
for(y=b.length,x=this.gdS(),w={func:1,ret:-1,args:[D.x]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=H.d(b[u],"$isa5")
if(t instanceof D.ci)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bA()
s.sam(null)
s.sbd(null)
s.c=null
s.d=0
t.d=s}H.l(x,w)
if(s.a==null)s.sam(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}z=new D.cm(a,b,this,[z])
z.b=!0
this.aO(z)},"$2","ghO",8,0,25],
lj:[function(a,b){var z,y,x,w
z=D.a5
H.k(b,"$iso",[z],"$aso")
for(y=b.gV(b),x=this.gdS();y.A();){w=y.gH()
C.a.a4(this.e,w)
w.gw().a4(0,x)}z=new D.cn(a,b,this,[z])
z.b=!0
this.aO(z)},"$2","gia",8,0,25],
fU:function(a){var z=C.a.Z(this.e,a)
return z},
$aso:function(){return[D.a5]},
$asa_:function(){return[D.a5]}},eT:{"^":"a;",$isa5:1,$isaS:1},f3:{"^":"a;",$isa5:1,$isaS:1},fb:{"^":"a;",$isa5:1,$isaS:1},fc:{"^":"a;",$isa5:1,$isaS:1},fd:{"^":"a;",$isa5:1,$isaS:1}}],["","",,V,{"^":"",
nl:[function(a,b){if(typeof b!=="number")return b.L()
if(typeof a!=="number")return H.A(a)
return Math.abs(b-a)<=1e-9},"$2","jg",8,0,39],
ng:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.k.bv(a-b,z)
return(a<0?a+z:a)+b},
O:function(a,b,c){if(a==null)return C.c.aj("null",c)
return C.c.aj(C.k.f8($.q.$2(a,0)?0:a,b),c+b+1)},
br:function(a,b,c){var z,y,x,w,v,u
H.k(a,"$isb",[P.y],"$asb")
z=H.c([],[P.i])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.z)(a),++w){v=V.O(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.f(z,u)
C.a.p(z,u,C.c.aj(z[u],x))}return z},
e_:function(a,b){return C.k.kI(Math.pow(b,C.Z.cR(Math.log(H.mI(a))/Math.log(b))))},
a8:{"^":"a;a,b,c",
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a8))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}},
a2:{"^":"a;a,b,c,d",
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"}},
eK:{"^":"a;a,b,c,d,e,f,r,x,y",
a8:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.y])
return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eK))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
z=b.e
if(!$.q.$2(z,this.e))return!1
z=b.f
if(!$.q.$2(z,this.f))return!1
z=b.r
if(!$.q.$2(z,this.r))return!1
z=b.x
if(!$.q.$2(z,this.x))return!1
z=b.y
if(!$.q.$2(z,this.y))return!1
return!0},
i:function(a){var z,y,x,w,v,u,t,s
z=[P.y]
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
ap:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
a8:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.y])
return z},
eQ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.q.$2(a2,0))return V.c4()
a3=1/a2
a4=-w
a5=-i
return V.aJ((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
B:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
return V.aJ(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
d6:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.U(this.a*z+this.b*y+this.c*x,this.e*z+this.f*y+this.r*x,this.y*z+this.z*y+this.Q*x)},
bs:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.aM(this.a*z+this.b*y+this.c*x+this.d,this.e*z+this.f*y+this.r*x+this.x,this.y*z+this.z*y+this.Q*x+this.ch)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ap))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
z=b.e
if(!$.q.$2(z,this.e))return!1
z=b.f
if(!$.q.$2(z,this.f))return!1
z=b.r
if(!$.q.$2(z,this.r))return!1
z=b.x
if(!$.q.$2(z,this.x))return!1
z=b.y
if(!$.q.$2(z,this.y))return!1
z=b.z
if(!$.q.$2(z,this.z))return!1
z=b.Q
if(!$.q.$2(z,this.Q))return!1
z=b.ch
if(!$.q.$2(z,this.ch))return!1
z=b.cx
if(!$.q.$2(z,this.cx))return!1
z=b.cy
if(!$.q.$2(z,this.cy))return!1
z=b.db
if(!$.q.$2(z,this.db))return!1
z=b.dx
if(!$.q.$2(z,this.dx))return!1
return!0},
i:function(a){return this.O()},
eH:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.y]
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
D:function(a){return this.eH(a,3,0)},
q:{
c4:function(){var z=$.eM
if(z==null){z=V.aJ(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.eM=z}return z},
aJ:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ap(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
eL:function(a,b,c){var z,y,x,w,v,u,t,s
z=c.E(0,Math.sqrt(c.I(c)))
y=b.bi(z)
x=y.E(0,Math.sqrt(y.I(y)))
w=z.bi(x)
v=new V.U(a.a,a.b,a.c)
u=x.T(0).I(v)
t=w.T(0).I(v)
s=z.T(0).I(v)
return V.aJ(x.a,w.a,z.a,u,x.b,w.b,z.b,t,x.c,w.c,z.c,s,0,0,0,1)}}},
ai:{"^":"a;a,b",
L:function(a,b){return new V.ai(this.a-b.a,this.b-b.b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ai))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+"]"},
q:{
b3:function(){var z=$.eU
if(z==null){z=new V.ai(0,0)
$.eU=z}return z}}},
aM:{"^":"a;a,b,c",
F:function(a,b){return new V.aM(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a,b){return new V.aM(this.a-b.a,this.b-b.b,this.c-b.c)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aM))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"},
q:{
eV:function(){var z=$.bE
if(z==null){z=new V.aM(0,0,0)
$.bE=z}return z}}},
eW:{"^":"a;a,b,c,d",
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eW))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"}},
eZ:{"^":"a;a,b,c,d",
gad:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eZ))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
z=b.d
if(!$.q.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"},
q:{
f_:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eZ(a,b,c,d)}}},
T:{"^":"a;a,b",
k5:[function(a){return Math.sqrt(this.I(this))},"$0","gm",1,0,26],
I:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.B()
if(typeof y!=="number")return H.A(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.B()
if(typeof w!=="number")return H.A(w)
return z*y+x*w},
B:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.B()
y=this.b
if(typeof y!=="number")return y.B()
return new V.T(z*b,y*b)},
E:function(a,b){var z,y
if($.q.$2(b,0)){z=$.fA
if(z==null){z=new V.T(0,0)
$.fA=z}return z}z=this.a
if(typeof z!=="number")return z.E()
y=this.b
if(typeof y!=="number")return y.E()
return new V.T(z/b,y/b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+"]"}},
U:{"^":"a;a,b,c",
k5:[function(a){return Math.sqrt(this.I(this))},"$0","gm",1,0,26],
I:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cV:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.U(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
bi:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.U(z*y-x*w,x*v-u*y,u*w-z*v)},
F:function(a,b){return new V.U(this.a+b.a,this.b+b.b,this.c+b.c)},
T:function(a){return new V.U(-this.a,-this.b,-this.c)},
E:function(a,b){if($.q.$2(b,0))return V.aO()
return new V.U(this.a/b,this.b/b,this.c/b)},
eR:function(){if(!$.q.$2(0,this.a))return!1
if(!$.q.$2(0,this.b))return!1
if(!$.q.$2(0,this.c))return!1
return!0},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
z=b.a
if(!$.q.$2(z,this.a))return!1
z=b.b
if(!$.q.$2(z,this.b))return!1
z=b.c
if(!$.q.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"},
q:{
aO:function(){var z=$.fE
if(z==null){z=new V.U(0,0,0)
$.fE=z}return z},
fG:function(){var z=$.fC
if(z==null){z=new V.U(1,0,0)
$.fC=z}return z},
fH:function(){var z=$.fD
if(z==null){z=new V.U(0,1,0)
$.fD=z}return z},
kZ:function(){var z=$.cD
if(z==null){z=new V.U(0,0,1)
$.cD=z}return z},
fF:function(){var z=$.fB
if(z==null){z=new V.U(0,0,-1)
$.fB=z}return z}}}}],["","",,U,{"^":"",hW:{"^":"d1;0a,0b,0c,0d,0e,0f,0r,0x,0y",
cb:function(a){var z=V.ng(a,this.c,this.b)
return z},
gw:function(){var z=this.y
if(z==null){z=D.K()
this.y=z}return z},
W:function(a){var z=this.y
if(!(z==null))z.J(a)},
sda:function(a,b){},
scX:function(a){var z,y
z=this.b
if(!$.q.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.cb(z)}z=new D.F("maximumLocation",y,this.b,this,[P.y])
z.b=!0
this.W(z)}},
scZ:function(a){var z,y
z=this.c
if(!$.q.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.cb(z)}z=new D.F("minimumLocation",y,this.c,this,[P.y])
z.b=!0
this.W(z)}},
sac:function(a,b){var z,y
b=this.cb(b)
z=this.d
if(!$.q.$2(z,b)){y=this.d
this.d=b
z=new D.F("location",y,b,this,[P.y])
z.b=!0
this.W(z)}},
scY:function(a){var z,y,x
z=this.e
if(!$.q.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.F("maximumVelocity",y,a,this,[P.y])
z.b=!0
this.W(z)}},
sX:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.q.$2(z,a)){x=this.f
this.f=a
z=new D.F("velocity",x,a,this,[P.y])
z.b=!0
this.W(z)}},
scI:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.q.$2(z,a)){y=this.x
this.x=a
z=new D.F("dampening",y,a,this,[P.y])
z.b=!0
this.W(z)}},
ar:function(a){var z,y,x,w
z=this.f
if($.q.$2(z,0)){z=this.r
z=!$.q.$2(z,0)}else z=!0
if(z){y=this.f+this.r*a
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sac(0,this.d+y*a)
z=this.x
if(!$.q.$2(z,0)){w=y*Math.pow(1-this.x,a)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sX(y)}},
q:{
d3:function(){var z=new U.hW()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},eg:{"^":"ae;0a,0b",
gw:function(){var z=this.b
if(z==null){z=D.K()
this.b=z}return z},
b5:function(a,b){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eg))return!1
return J.P(this.a,b.a)},
i:function(a){return"Constant: "+this.a.D("          ")},
q:{
eh:function(a){var z=new U.eg()
z.a=a
return z}}},eu:{"^":"a_;0e,0f,0r,0a,0b,0c,0d",
gw:function(){var z=this.e
if(z==null){z=D.K()
this.e=z}return z},
W:[function(a){var z
H.d(a,"$isx")
z=this.e
if(!(z==null))z.J(a)},function(){return this.W(null)},"ak","$1","$0","gaP",0,2,0],
kZ:[function(a,b){var z,y,x,w,v,u,t,s
z=U.ae
H.k(b,"$iso",[z],"$aso")
for(y=b.length,x=this.gaP(),w={func:1,ret:-1,args:[D.x]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){s=t.gw()
s.toString
H.l(x,w)
if(s.a==null)s.sam(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.cm(a,b,this,[z])
z.b=!0
this.W(z)},"$2","ghN",8,0,27],
li:[function(a,b){var z,y,x
z=U.ae
H.k(b,"$iso",[z],"$aso")
for(y=b.gV(b),x=this.gaP();y.A();)y.gH().gw().a4(0,x)
z=new D.cn(a,b,this,[z])
z.b=!0
this.W(z)},"$2","gi9",8,0,27],
b5:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(typeof z!=="number")return z.S()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.aw(z,z.length,0,[H.t(z,0)]),x=null;z.A();){y=z.d
if(y!=null){w=y.b5(a,b)
if(w!=null)x=x==null?w:w.B(0,x)}}this.f=x==null?V.c4():x
z=this.e
if(!(z==null))z.aL()}return this.f},
v:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eu))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.f(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.f(w,y)
if(!J.P(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$aso:function(){return[U.ae]},
$asa_:function(){return[U.ae]},
$isae:1},ae:{"^":"d1;"},kO:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gw:function(){var z=this.cy
if(z==null){z=D.K()
this.cy=z}return z},
W:[function(a){var z
H.d(a,"$isx")
z=this.cy
if(!(z==null))z.J(a)},function(){return this.W(null)},"ak","$1","$0","gaP",0,2,0],
bg:function(a){if(this.a!=null)return!1
this.a=a
a.c.geh().h(0,this.gcl())
this.a.c.geS().h(0,this.gcm())
this.a.c.gc1().h(0,this.gcn())
return!0},
hI:[function(a){H.d(a,"$isx")
if(!J.P(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gcl",4,0,1],
hJ:[function(a){var z,y,x,w,v,u,t
a=H.h(H.d(a,"$isx"),"$isbD")
if(!this.y)return
if(this.x){z=a.d.L(0,a.y)
z=new V.T(z.a,z.b)
z=z.I(z)
y=this.r
if(typeof y!=="number")return H.A(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.L(0,a.y)
z=new V.T(y.a,y.b).B(0,2).E(0,z.gad())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.B()
x=this.e
if(typeof x!=="number")return H.A(x)
y.sX(z*10*x)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=new V.T(x.a,x.b).B(0,2).E(0,z.gad())
x=this.b
v=w.a
if(typeof v!=="number")return v.T()
u=this.e
if(typeof u!=="number")return H.A(u)
t=this.z
if(typeof t!=="number")return H.A(t)
x.sac(0,-v*u+t)
this.b.sX(0)
y=y.L(0,a.z)
this.Q=new V.T(y.a,y.b).B(0,2).E(0,z.gad())}this.ak()},"$1","gcm",4,0,1],
hK:[function(a){var z,y,x
H.d(a,"$isx")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.I(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.B()
x=this.e
if(typeof x!=="number")return H.A(x)
z.sX(y*10*x)
this.ak()}},"$1","gcn",4,0,1],
b5:function(a,b){var z,y,x,w,v
z=this.ch
y=a.e
if(typeof z!=="number")return z.S()
if(z<y){this.ch=y
x=a.y
this.b.ar(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aJ(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isae:1},kP:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gw:function(){var z=this.fx
if(z==null){z=D.K()
this.fx=z}return z},
W:[function(a){var z
H.d(a,"$isx")
z=this.fx
if(!(z==null))z.J(a)},function(){return this.W(null)},"ak","$1","$0","gaP",0,2,0],
bg:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.geh().h(0,this.gcl())
this.a.c.geS().h(0,this.gcm())
this.a.c.gc1().h(0,this.gcn())
z=this.a.d
y=z.f
if(y==null){y=D.K()
z.f=y
z=y}else z=y
z.h(0,this.ghF())
z=this.a.d
y=z.d
if(y==null){y=D.K()
z.d=y
z=y}else z=y
z.h(0,this.ghG())
z=this.a.e
y=z.b
if(y==null){y=D.K()
z.b=y
z=y}else z=y
z.h(0,this.giR())
z=this.a.e
y=z.d
if(y==null){y=D.K()
z.d=y
z=y}else z=y
z.h(0,this.giQ())
z=this.a.e
y=z.c
if(y==null){y=D.K()
z.c=y
z=y}else z=y
z.h(0,this.giP())
return!0},
at:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.T()
z=-z}if(this.r){if(typeof y!=="number")return y.T()
y=-y}return new V.T(z,y)},
hI:[function(a){a=H.h(H.d(a,"$isx"),"$isbD")
if(!J.P(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gcl",4,0,1],
hJ:[function(a){var z,y,x,w,v,u,t
a=H.h(H.d(a,"$isx"),"$isbD")
if(!this.cx)return
if(this.ch){z=a.d.L(0,a.y)
z=new V.T(z.a,z.b)
z=z.I(z)
y=this.Q
if(typeof y!=="number")return H.A(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.L(0,a.y)
z=this.at(new V.T(y.a,y.b).B(0,2).E(0,z.gad()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.T()
x=this.y
if(typeof x!=="number")return H.A(x)
y.sX(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.T()
y=this.x
if(typeof y!=="number")return H.A(y)
x.sX(-z*10*y)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=this.at(new V.T(x.a,x.b).B(0,2).E(0,z.gad()))
x=this.c
v=w.a
if(typeof v!=="number")return v.T()
u=this.y
if(typeof u!=="number")return H.A(u)
t=this.cy
if(typeof t!=="number")return H.A(t)
x.sac(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.T()
v=this.x
if(typeof v!=="number")return H.A(v)
x=this.db
if(typeof x!=="number")return H.A(x)
t.sac(0,-u*v+x)
this.b.sX(0)
this.c.sX(0)
y=y.L(0,a.z)
this.dx=this.at(new V.T(y.a,y.b).B(0,2).E(0,z.gad()))}this.ak()},"$1","gcm",4,0,1],
hK:[function(a){var z,y,x
H.d(a,"$isx")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.I(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.T()
x=this.y
if(typeof x!=="number")return H.A(x)
z.sX(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.T()
z=this.x
if(typeof z!=="number")return H.A(z)
x.sX(-y*10*z)
this.ak()}},"$1","gcn",4,0,1],
kV:[function(a){if(H.h(H.d(a,"$isx"),"$iseG").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","ghF",4,0,1],
kW:[function(a){var z,y,x,w,v,u,t
a=H.h(H.d(a,"$isx"),"$isbD")
if(!J.P(this.d,a.x.b))return
z=a.c
y=a.d
x=y.L(0,a.y)
w=this.at(new V.T(x.a,x.b).B(0,2).E(0,z.gad()))
x=this.c
v=w.a
if(typeof v!=="number")return v.T()
u=this.y
if(typeof u!=="number")return H.A(u)
t=this.cy
if(typeof t!=="number")return H.A(t)
x.sac(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.T()
v=this.x
if(typeof v!=="number")return H.A(v)
x=this.db
if(typeof x!=="number")return H.A(x)
t.sac(0,-u*v+x)
this.b.sX(0)
this.c.sX(0)
y=y.L(0,a.z)
this.dx=this.at(new V.T(y.a,y.b).B(0,2).E(0,z.gad()))
this.ak()},"$1","ghG",4,0,1],
lq:[function(a){H.d(a,"$isx")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","giR",4,0,1],
lp:[function(a){var z,y,x,w,v,u,t
a=H.h(H.d(a,"$isx"),"$isfi")
if(!this.cx)return
if(this.ch){z=a.d.L(0,a.y)
z=new V.T(z.a,z.b)
z=z.I(z)
y=this.Q
if(typeof y!=="number")return H.A(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.L(0,a.y)
z=this.at(new V.T(y.a,y.b).B(0,2).E(0,z.gad()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.T()
x=this.y
if(typeof x!=="number")return H.A(x)
y.sX(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.T()
y=this.x
if(typeof y!=="number")return H.A(y)
x.sX(-z*10*y)}else{z=a.c
y=a.d
x=y.L(0,a.y)
w=this.at(new V.T(x.a,x.b).B(0,2).E(0,z.gad()))
x=this.c
v=w.a
if(typeof v!=="number")return v.T()
u=this.y
if(typeof u!=="number")return H.A(u)
t=this.cy
if(typeof t!=="number")return H.A(t)
x.sac(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.T()
v=this.x
if(typeof v!=="number")return H.A(v)
x=this.db
if(typeof x!=="number")return H.A(x)
t.sac(0,-u*v+x)
this.b.sX(0)
this.c.sX(0)
y=y.L(0,a.z)
this.dx=this.at(new V.T(y.a,y.b).B(0,2).E(0,z.gad()))}this.ak()},"$1","giQ",4,0,1],
lo:[function(a){var z,y,x
H.d(a,"$isx")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.I(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.T()
x=this.y
if(typeof x!=="number")return H.A(x)
z.sX(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.T()
z=this.x
if(typeof z!=="number")return H.A(z)
x.sX(-y*10*z)
this.ak()}},"$1","giP",4,0,1],
b5:function(a,b){var z,y,x,w,v
z=this.dy
y=a.e
if(typeof z!=="number")return z.S()
if(z<y){this.dy=y
x=a.y
this.c.ar(x)
this.b.ar(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aJ(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.B(0,V.aJ(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isae:1},kQ:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gw:function(){var z=this.r
if(z==null){z=D.K()
this.r=z}return z},
W:function(a){var z=this.r
if(!(z==null))z.J(a)},
bg:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.K()
z.e=y
z=y}else z=y
y=this.ghL()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.K()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
kX:[function(a){var z,y,x,w
H.d(a,"$isx")
if(!J.P(this.b,this.a.b.c))return
H.h(a,"$isdg")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.B()
w=z+y*x
if(z!==w){this.d=w
z=new D.F("zoom",z,w,this,[P.y])
z.b=!0
this.W(z)}},"$1","ghL",4,0,1],
b5:function(a,b){var z,y,x
z=this.e
y=a.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aJ(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isae:1}}],["","",,M,{"^":"",ig:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
shg:function(a,b){this.d=H.k(b,"$isa_",[E.ax],"$asa_")},
b7:[function(a){var z
H.d(a,"$isx")
z=this.x
if(!(z==null))z.J(a)},function(){return this.b7(null)},"kR","$1","$0","gaQ",0,2,0],
l3:[function(a,b){var z,y,x,w,v,u,t,s
z=E.ax
H.k(b,"$iso",[z],"$aso")
for(y=b.length,x=this.gaQ(),w={func:1,ret:-1,args:[D.x]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){if(t.gal()==null){s=new D.bA()
s.sam(null)
s.sbd(null)
s.c=null
s.d=0
t.sal(s)}s=t.gal()
s.toString
H.l(x,w)
if(s.a==null)s.sam(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.cm(a,b,this,[z])
z.b=!0
this.b7(z)},"$2","ghT",8,0,7],
l4:[function(a,b){var z,y,x
z=E.ax
H.k(b,"$iso",[z],"$aso")
for(y=b.gV(b),x=this.gaQ();y.A();)y.gH().gw().a4(0,x)
z=new D.cn(a,b,this,[z])
z.b=!0
this.b7(z)},"$2","ghU",8,0,7],
gw:function(){var z=this.x
if(z==null){z=D.K()
this.x=z}return z},
aJ:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
a.f3(this.c)
z=this.b
z.toString
y=a.a
C.b.js(y,36160,null)
C.b.aw(y,2884)
C.b.aw(y,2929)
C.b.jI(y,513)
x=y.drawingBufferWidth
w=y.drawingBufferHeight
v=z.r
u=v.a
if(typeof x!=="number")return H.A(x)
t=C.k.aq(u*x)
u=v.b
if(typeof w!=="number")return H.A(w)
s=C.k.aq(u*w)
u=C.k.aq(v.c*x)
a.c=u
v=C.k.aq(v.d*w)
a.d=v
C.b.kO(y,t,s,u,v)
C.b.jv(y,z.c)
z=z.a
C.b.ju(y,z.a,z.b,z.c,z.d)
C.b.jt(y,16640)
z=this.a
y=a.c
v=a.d
u=z.c
r=z.d
q=z.e
p=q-r
o=1/Math.tan(u*0.5)
n=V.aJ(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.f2(n)
y=$.eS
if(y==null){y=V.eL(V.eV(),V.fH(),V.fF())
$.eS=y
m=y}else m=y
z=z.b
if(z!=null){l=z.a
if(l!=null)m=l.B(0,m)}a.db.f2(m)
for(z=this.d.a,z=new J.aw(z,z.length,0,[H.t(z,0)]);z.A();)z.d.ar(a)
for(z=this.d.a,z=new J.aw(z,z.length,0,[H.t(z,0)]);z.A();)z.d.aJ(a)
this.a.toString
a.cy.d0()
a.db.d0()
this.b.toString
a.f0()},
$isnx:1}}],["","",,A,{"^":"",e5:{"^":"a;a,b,c"},hM:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
jM:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
C.b.ei(w.a,w.c)}},
ef:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
C.b.eg(w.a,w.c)}}},ew:{"^":"cx;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,a,b,0c,0d,0e,0f,0r,0x,0y"},eJ:{"^":"cx;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0ax,0ap,0bJ,0ej,0bK,0bL,0ek,0el,0bM,0bN,0em,0en,0bO,0bP,0eo,0ep,0bQ,0eq,0er,0bR,0es,0eu,0bS,0bT,0bU,0ev,0ew,0bV,0bW,0ex,0ey,0bX,0ez,0cL,0eA,0cM,0eB,0cN,0eC,0cO,0eD,0cP,0eE,0cQ,a,b,0c,0d,0e,0f,0r,0x,0y",
sha:function(a){this.r1=H.k(a,"$isb",[A.ak],"$asb")},
sfW:function(a){this.cL=H.k(a,"$isb",[A.dx],"$asb")},
sfX:function(a){this.cM=H.k(a,"$isb",[A.dz],"$asb")},
sfY:function(a){this.cN=H.k(a,"$isb",[A.dA],"$asb")},
sfZ:function(a){this.cO=H.k(a,"$isb",[A.dB],"$asb")},
sh_:function(a){this.cP=H.k(a,"$isb",[A.dC],"$asb")},
sh0:function(a){this.cQ=H.k(a,"$isb",[A.dD],"$asb")},
fK:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.z=a1
z=new P.aj("")
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
a1.j0(z)
a1.j7(z)
a1.j1(z)
a1.jf(z)
a1.jg(z)
a1.j9(z)
a1.jk(z)
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
z=new P.aj("")
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
v.j4(z)
v.j_(z)
v.j2(z)
v.j5(z)
v.jd(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.jb(z)
v.jc(z)}v.j8(z)
r=z.a+="// === Alpha ===\n"
r+="\n"
z.a=r
q=v.y
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
p=H.c([],[P.i])
if(v.b!==C.d)C.a.h(p,"ambient()")
if(v.c!==C.d)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.d)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.d)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.l(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.j3(z)
v.ja(z)
v.je(z)
v.jh(z)
v.ji(z)
v.jj(z)
v.j6(z)}r=z.a+="// === Main ===\n"
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
o=H.c([],[P.i])
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
n="vec4("+C.a.l(o," + ")+", alpha);"
v=z.a
if(s){v+="   gl_FragColor = colorMat*"+n+"\n"
z.a=v}else{v+="   gl_FragColor = "+n+"\n"
z.a=v}v+="}\n"
z.a=v
this.eP(x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a1.fr)this.id=H.h(this.y.n(0,"invViewMat"),"$isak")
if(y)this.dy=H.h(this.y.n(0,"objMat"),"$isak")
if(w)this.fr=H.h(this.y.n(0,"viewObjMat"),"$isak")
this.fy=H.h(this.y.n(0,"projViewObjMat"),"$isak")
if(a1.x2)this.k1=H.h(this.y.n(0,"txt2DMat"),"$isdy")
if(a1.y1)this.k2=H.h(this.y.n(0,"txtCubeMat"),"$isak")
if(a1.y2)this.k3=H.h(this.y.n(0,"colorMat"),"$isak")
this.sha(H.c([],[A.ak]))
y=a1.ax
if(y>0){this.k4=H.d(this.y.n(0,"bendMatCount"),"$isL")
for(m=0;m<y;++m){x=this.r1
w=this.y
v="bendValues["+m+"].mat"
l=w.j(0,v)
if(l==null)H.p(P.r("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.h(l,"$isak"))}}y=a1.a
if(y!==C.d){this.r2=H.h(this.y.n(0,"emissionClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.rx=H.h(this.y.n(0,"emissionTxt"),"$isaq")
this.x1=H.h(this.y.n(0,"nullEmissionTxt"),"$isL")
break
case C.f:this.ry=H.h(this.y.n(0,"emissionTxt"),"$isar")
this.x1=H.h(this.y.n(0,"nullEmissionTxt"),"$isL")
break}}y=a1.b
if(y!==C.d){this.x2=H.h(this.y.n(0,"ambientClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.y1=H.h(this.y.n(0,"ambientTxt"),"$isaq")
this.ax=H.h(this.y.n(0,"nullAmbientTxt"),"$isL")
break
case C.f:this.y2=H.h(this.y.n(0,"ambientTxt"),"$isar")
this.ax=H.h(this.y.n(0,"nullAmbientTxt"),"$isL")
break}}y=a1.c
if(y!==C.d){this.ap=H.h(this.y.n(0,"diffuseClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.bJ=H.h(this.y.n(0,"diffuseTxt"),"$isaq")
this.bK=H.h(this.y.n(0,"nullDiffuseTxt"),"$isL")
break
case C.f:this.ej=H.h(this.y.n(0,"diffuseTxt"),"$isar")
this.bK=H.h(this.y.n(0,"nullDiffuseTxt"),"$isL")
break}}y=a1.d
if(y!==C.d){this.bL=H.h(this.y.n(0,"invDiffuseClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.ek=H.h(this.y.n(0,"invDiffuseTxt"),"$isaq")
this.bM=H.h(this.y.n(0,"nullInvDiffuseTxt"),"$isL")
break
case C.f:this.el=H.h(this.y.n(0,"invDiffuseTxt"),"$isar")
this.bM=H.h(this.y.n(0,"nullInvDiffuseTxt"),"$isL")
break}}y=a1.e
if(y!==C.d){this.bP=H.h(this.y.n(0,"shininess"),"$isW")
this.bN=H.h(this.y.n(0,"specularClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.em=H.h(this.y.n(0,"specularTxt"),"$isaq")
this.bO=H.h(this.y.n(0,"nullSpecularTxt"),"$isL")
break
case C.f:this.en=H.h(this.y.n(0,"specularTxt"),"$isar")
this.bO=H.h(this.y.n(0,"nullSpecularTxt"),"$isL")
break}}switch(a1.f){case C.d:break
case C.i:break
case C.e:this.eo=H.h(this.y.n(0,"bumpTxt"),"$isaq")
this.bQ=H.h(this.y.n(0,"nullBumpTxt"),"$isL")
break
case C.f:this.ep=H.h(this.y.n(0,"bumpTxt"),"$isar")
this.bQ=H.h(this.y.n(0,"nullBumpTxt"),"$isL")
break}if(a1.dy){this.eq=H.h(this.y.n(0,"envSampler"),"$isar")
this.er=H.h(this.y.n(0,"nullEnvTxt"),"$isL")
y=a1.r
if(y!==C.d){this.bR=H.h(this.y.n(0,"reflectClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.es=H.h(this.y.n(0,"reflectTxt"),"$isaq")
this.bS=H.h(this.y.n(0,"nullReflectTxt"),"$isL")
break
case C.f:this.eu=H.h(this.y.n(0,"reflectTxt"),"$isar")
this.bS=H.h(this.y.n(0,"nullReflectTxt"),"$isL")
break}}y=a1.x
if(y!==C.d){this.bT=H.h(this.y.n(0,"refraction"),"$isW")
this.bU=H.h(this.y.n(0,"refractClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.ev=H.h(this.y.n(0,"refractTxt"),"$isaq")
this.bV=H.h(this.y.n(0,"nullRefractTxt"),"$isL")
break
case C.f:this.ew=H.h(this.y.n(0,"refractTxt"),"$isar")
this.bV=H.h(this.y.n(0,"nullRefractTxt"),"$isL")
break}}}y=a1.y
if(y!==C.d){this.bW=H.h(this.y.n(0,"alpha"),"$isW")
switch(y){case C.d:break
case C.i:break
case C.e:this.ex=H.h(this.y.n(0,"alphaTxt"),"$isaq")
this.bX=H.h(this.y.n(0,"nullAlphaTxt"),"$isL")
break
case C.f:this.ey=H.h(this.y.n(0,"alphaTxt"),"$isar")
this.bX=H.h(this.y.n(0,"nullAlphaTxt"),"$isL")
break}}this.sfW(H.c([],[A.dx]))
this.sfX(H.c([],[A.dz]))
this.sfY(H.c([],[A.dA]))
this.sfZ(H.c([],[A.dB]))
this.sh_(H.c([],[A.dC]))
this.sh0(H.c([],[A.dD]))
if(a1.k2){y=a1.z
if(y>0){this.ez=H.d(this.y.n(0,"dirLightCount"),"$isL")
for(m=0;m<y;++m){x=this.y
w="dirLights["+m+"].viewDir"
l=x.j(0,w)
if(l==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(l,"$isI")
x=this.y
w="dirLights["+m+"].color"
k=x.j(0,w)
if(k==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isI")
x=this.cL;(x&&C.a).h(x,new A.dx(m,l,k))}}y=a1.Q
if(y>0){this.eA=H.d(this.y.n(0,"pntLightCount"),"$isL")
for(m=0;m<y;++m){x=this.y
w="pntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(l,"$isI")
x=this.y
w="pntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isI")
x=this.y
w="pntLights["+m+"].color"
j=x.j(0,w)
if(j==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isI")
x=this.y
w="pntLights["+m+"].att0"
i=x.j(0,w)
if(i==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isW")
x=this.y
w="pntLights["+m+"].att1"
h=x.j(0,w)
if(h==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isW")
x=this.y
w="pntLights["+m+"].att2"
g=x.j(0,w)
if(g==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isW")
x=this.cM;(x&&C.a).h(x,new A.dz(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.eB=H.d(this.y.n(0,"spotLightCount"),"$isL")
for(m=0;m<y;++m){x=this.y
w="spotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(l,"$isI")
x=this.y
w="spotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isI")
x=this.y
w="spotLights["+m+"].viewPnt"
j=x.j(0,w)
if(j==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isI")
x=this.y
w="spotLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isI")
x=this.y
w="spotLights["+m+"].cutoff"
h=x.j(0,w)
if(h==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isW")
x=this.y
w="spotLights["+m+"].coneAngle"
g=x.j(0,w)
if(g==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isW")
x=this.y
w="spotLights["+m+"].att0"
f=x.j(0,w)
if(f==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isW")
x=this.y
w="spotLights["+m+"].att1"
e=x.j(0,w)
if(e==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isW")
x=this.y
w="spotLights["+m+"].att2"
d=x.j(0,w)
if(d==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(d,"$isW")
x=this.cN;(x&&C.a).h(x,new A.dA(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.eC=H.d(this.y.n(0,"txtDirLightCount"),"$isL")
for(m=0;m<y;++m){x=this.y
w="txtDirLights["+m+"].objUp"
l=x.j(0,w)
if(l==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(l,"$isI")
x=this.y
w="txtDirLights["+m+"].objRight"
k=x.j(0,w)
if(k==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isI")
x=this.y
w="txtDirLights["+m+"].objDir"
j=x.j(0,w)
if(j==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isI")
x=this.y
w="txtDirLights["+m+"].viewDir"
i=x.j(0,w)
if(i==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isI")
x=this.y
w="txtDirLights["+m+"].color"
h=x.j(0,w)
if(h==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isI")
x=this.y
w="txtDirLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isL")
x=this.y
w="txtDirLightsTxt2D"+m
f=x.j(0,w)
if(f==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isaq")
x=this.cO;(x&&C.a).h(x,new A.dB(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.eD=H.d(this.y.n(0,"txtPntLightCount"),"$isL")
for(m=0;m<y;++m){x=this.y
w="txtPntLights["+m+"].point"
l=x.j(0,w)
if(l==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(l,"$isI")
x=this.y
w="txtPntLights["+m+"].viewPnt"
k=x.j(0,w)
if(k==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isI")
x=this.y
w="txtPntLights["+m+"].invViewRotMat"
j=x.j(0,w)
if(j==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isdy")
x=this.y
w="txtPntLights["+m+"].color"
i=x.j(0,w)
if(i==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isI")
x=this.y
w="txtPntLights["+m+"].nullTxt"
h=x.j(0,w)
if(h==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isL")
x=this.y
w="txtPntLights["+m+"].att0"
g=x.j(0,w)
if(g==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isW")
x=this.y
w="txtPntLights["+m+"].att1"
f=x.j(0,w)
if(f==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isW")
x=this.y
w="txtPntLights["+m+"].att2"
e=x.j(0,w)
if(e==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isW")
x=this.y
w="txtPntLightsTxtCube"+m
d=x.j(0,w)
if(d==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(d,"$isar")
x=this.cP;(x&&C.a).h(x,new A.dC(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.eE=H.d(this.y.n(0,"txtSpotLightCount"),"$isL")
for(m=0;m<y;++m){x=this.y
w="txtSpotLights["+m+"].objPnt"
l=x.j(0,w)
if(l==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(l,"$isI")
x=this.y
w="txtSpotLights["+m+"].objDir"
k=x.j(0,w)
if(k==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(k,"$isI")
x=this.y
w="txtSpotLights["+m+"].objUp"
j=x.j(0,w)
if(j==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(j,"$isI")
x=this.y
w="txtSpotLights["+m+"].objRight"
i=x.j(0,w)
if(i==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(i,"$isI")
x=this.y
w="txtSpotLights["+m+"].viewPnt"
h=x.j(0,w)
if(h==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(h,"$isI")
x=this.y
w="txtSpotLights["+m+"].nullTxt"
g=x.j(0,w)
if(g==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(g,"$isL")
x=this.y
w="txtSpotLights["+m+"].color"
f=x.j(0,w)
if(f==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(f,"$isI")
x=this.y
w="txtSpotLights["+m+"].tuScalar"
e=x.j(0,w)
if(e==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(e,"$isW")
x=this.y
w="txtSpotLights["+m+"].tvScalar"
d=x.j(0,w)
if(d==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(d,"$isW")
x=this.y
w="txtSpotLights["+m+"].att0"
c=x.j(0,w)
if(c==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(c,"$isW")
x=this.y
w="txtSpotLights["+m+"].att1"
b=x.j(0,w)
if(b==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(b,"$isW")
x=this.y
w="txtSpotLights["+m+"].att2"
a=x.j(0,w)
if(a==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(a,"$isW")
x=this.y
w="txtSpotLightsTxt2D"+m
a0=x.j(0,w)
if(a0==null)H.p(P.r("Required uniform value, "+w+", was not defined or used in shader."))
H.h(a0,"$isaq")
x=this.cQ;(x&&C.a).h(x,new A.dD(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
an:function(a,b,c){if(c==null||!c.d)C.b.R(b.a,b.d,1)
else{a.fA(c)
C.b.R(b.a,b.d,0)}},
ag:function(a,b,c){C.b.R(b.a,b.d,1)},
q:{
ja:function(a,b){var z,y
z=a.ap
y=new A.eJ(b,z)
y.dm(b,z)
y.fK(a,b)
return y}}},jd:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,ax,ap,bJ",
j0:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.ax+"];\n"
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
j7:function(a){var z
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
j1:function(a){var z
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
jf:function(a){var z,y
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
jg:function(a){var z,y
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
j9:function(a){var z
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
jk:function(a){var z
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
if(b===C.d)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.f(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.c.as(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
j4:function(a){var z,y
z=this.a
if(z===C.d)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aB(a,z,"emission")
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
j_:function(a){var z,y
z=this.b
if(z===C.d)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aB(a,z,"ambient")
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
j2:function(a){var z,y
z=this.c
if(z===C.d)return
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
j5:function(a){var z,y
z=this.d
if(z===C.d)return
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
jd:function(a){var z,y
z=this.e
if(z===C.d)return
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
j8:function(a){var z,y
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
jb:function(a){var z,y
z=this.r
if(z===C.d)return
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
jc:function(a){var z,y
z=this.x
if(z===C.d)return
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
j3:function(a){var z,y
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
ja:function(a){var z,y
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
je:function(a){var z,y
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
jh:function(a){var z,y,x
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
ji:function(a){var z,y,x
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
jj:function(a){var z,y,x
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
j6:function(a){var z
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
i:function(a){return this.ap}},dx:{"^":"a;a,b,c"},dB:{"^":"a;a,b,c,d,e,f,r,x"},dz:{"^":"a;a,b,c,d,e,f,r"},dC:{"^":"a;a,b,c,d,e,f,r,x,y,z"},dA:{"^":"a;a,b,c,d,e,f,r,x,y,z"},dD:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cx:{"^":"cW;",
dm:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
eP:function(a,b){var z,y,x
this.c=a
this.d=b
this.e=this.dH(a,35633)
this.f=this.dH(this.d,35632)
z=this.a
y=z.createProgram()
this.r=y
C.b.e9(z,y,this.e)
C.b.e9(z,this.r,this.f)
C.b.k6(z,this.r)
if(!H.dS(C.b.c4(z,this.r,35714))){x=C.b.fn(z,this.r)
C.b.jE(z,this.r)
H.p(P.r("Failed to link shader: "+H.j(x)))}this.iD()
this.iF()},
aF:function(a){C.b.d7(a.a,this.r)
this.x.jM()},
dH:function(a,b){var z,y,x
z=this.a
y=C.b.jC(z,b)
C.b.fB(z,y,a)
C.b.jw(z,y)
if(!H.dS(C.b.fq(z,y,35713))){x=C.b.fp(z,y)
C.b.jF(z,y)
throw H.e(P.r("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
iD:function(){var z,y,x,w,v,u
z=H.c([],[A.e5])
y=this.a
x=H.aa(C.b.c4(y,this.r,35721))
if(typeof x!=="number")return H.A(x)
w=0
for(;w<x;++w){v=C.b.fi(y,this.r,w)
u=C.b.fk(y,this.r,v.name)
C.a.h(z,new A.e5(y,v.name,u))}this.x=new A.hM(z)},
iF:function(){var z,y,x,w,v,u
z=H.c([],[A.ag])
y=this.a
x=H.aa(C.b.c4(y,this.r,35718))
if(typeof x!=="number")return H.A(x)
w=0
for(;w<x;++w){v=C.b.fj(y,this.r,w)
u=C.b.fs(y,this.r,v.name)
C.a.h(z,this.jD(v.type,v.size,v.name,u))}this.y=new A.kz(z)},
aS:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.L(z,y,b,c)
else return A.dv(z,y,b,a,c)},
hj:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.aq(z,y,b,c)
else return A.dv(z,y,b,a,c)},
hk:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ar(z,y,b,c)
else return A.dv(z,y,b,a,c)},
bE:function(a,b){return new P.fQ(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
jD:function(a,b,c,d){switch(a){case 5120:return this.aS(b,c,d)
case 5121:return this.aS(b,c,d)
case 5122:return this.aS(b,c,d)
case 5123:return this.aS(b,c,d)
case 5124:return this.aS(b,c,d)
case 5125:return this.aS(b,c,d)
case 5126:return new A.W(this.a,this.r,c,d)
case 35664:return new A.kv(this.a,this.r,c,d)
case 35665:return new A.I(this.a,this.r,c,d)
case 35666:return new A.dw(this.a,this.r,c,d)
case 35667:return new A.kw(this.a,this.r,c,d)
case 35668:return new A.kx(this.a,this.r,c,d)
case 35669:return new A.ky(this.a,this.r,c,d)
case 35674:return new A.kB(this.a,this.r,c,d)
case 35675:return new A.dy(this.a,this.r,c,d)
case 35676:return new A.ak(this.a,this.r,c,d)
case 35678:return this.hj(b,c,d)
case 35680:return this.hk(b,c,d)
case 35670:throw H.e(this.bE("BOOL",c))
case 35671:throw H.e(this.bE("BOOL_VEC2",c))
case 35672:throw H.e(this.bE("BOOL_VEC3",c))
case 35673:throw H.e(this.bE("BOOL_VEC4",c))
default:throw H.e(P.r("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},ch:{"^":"a;a,b",
i:function(a){return this.b}},ag:{"^":"a;"},kz:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.j(0,b)
if(z==null)throw H.e(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.O()},
jU:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w)x+=z[w].i(0)+a
return x},
O:function(){return this.jU("\n")}},L:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},kw:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},kx:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},ky:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},ku:{"^":"ag;0e,0f,a,b,c,d",
siW:function(a){this.e=H.k(a,"$isb",[P.m],"$asb")},
i:function(a){return"Uniform1iv: "+H.j(this.c)},
q:{
dv:function(a,b,c,d,e){var z=new A.ku(a,b,c,e)
z.f=d
z.siW(P.j0(d,0,!1,P.m))
return z}}},W:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},kv:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},I:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},dw:{"^":"ag;a,b,c,d",
bw:function(a){return C.b.kM(this.a,this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.j(this.c)}},kB:{"^":"ag;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},dy:{"^":"ag;a,b,c,d",
ab:function(a){var z=new Float32Array(H.bn(H.k(a,"$isb",[P.y],"$asb")))
C.b.fb(this.a,this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},ak:{"^":"ag;a,b,c,d",
ab:function(a){var z=new Float32Array(H.bn(H.k(a,"$isb",[P.y],"$asb")))
C.b.fc(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},aq:{"^":"ag;a,b,c,d",
fA:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)C.b.R(y,x,0)
else C.b.R(y,x,a.a)},
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},ar:{"^":"ag;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
cJ:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bM:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.U(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.U(t+h,s+f,r+g)
z.b=q
p=new V.U(t-h,s-f,r-g)
z.c=p
o=new V.U(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cJ(y)
k=F.cJ(z.b)
j=F.nd(d,e,new F.mr(z,F.cJ(z.c),F.cJ(z.d),k,l,c),b)
if(j!=null)a.kb(j)},
nd:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.Y,P.y,P.y]})
if(a<1)return
if(b<1)return
z=F.bG()
y=H.c([],[F.Y])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cE(null,null,new V.a2(u,0,0,1),null,null,new V.ai(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cH(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cE(null,null,new V.a2(o,n,m,1),null,null,new V.ai(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cH(d))}}z.d.jm(a+1,b+1,y)
return z},
mr:{"^":"n:44;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cV(z.b,b).cV(z.d.cV(z.c,b),c)
z=new V.aM(y.a,y.b,y.c)
if(!J.P(a.f,z)){a.f=z
z=a.a
if(z!=null)z.a3()}a.skG(y.E(0,Math.sqrt(y.I(y))))
z=1-b
x=1-c
x=new V.eW(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x)
if(!J.P(a.cx,x)){a.cx=x
z=a.a
if(z!=null)z.a3()}}},
a4:{"^":"a;0a,0b,0c,0d,0e",
h8:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.aO()
if(y!=null)v=v.F(0,y)
if(x!=null)v=v.F(0,x)
if(w!=null)v=v.F(0,w)
if(v.eR())return
return v.E(0,Math.sqrt(v.I(v)))},
hf:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.L(0,y)
z=new V.U(z.a,z.b,z.c)
v=z.E(0,Math.sqrt(z.I(z)))
z=w.L(0,y)
z=new V.U(z.a,z.b,z.c)
z=v.bi(z.E(0,Math.sqrt(z.I(z))))
return z.E(0,Math.sqrt(z.I(z)))},
cE:function(){if(this.d!=null)return!0
var z=this.h8()
if(z==null){z=this.hf()
if(z==null)return!1}this.d=z
this.a.a.a3()
return!0},
h7:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=V.aO()
if(y!=null)v=v.F(0,y)
if(x!=null)v=v.F(0,x)
if(w!=null)v=v.F(0,w)
if(v.eR())return
return v.E(0,Math.sqrt(v.I(v)))},
he:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.q.$2(n,0)){z=r.L(0,u)
z=new V.U(z.a,z.b,z.c)
m=z.E(0,Math.sqrt(z.I(z)))
if(o.a-p.a<0)m=m.T(0)}else{l=(z-q.b)/n
z=r.L(0,u)
z=new V.aM(z.a*l,z.b*l,z.c*l).F(0,u).L(0,x)
z=new V.U(z.a,z.b,z.c)
m=z.E(0,Math.sqrt(z.I(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.T(0)}z=this.d
if(z!=null){k=z.E(0,Math.sqrt(z.I(z)))
z=k.bi(m)
z=z.E(0,Math.sqrt(z.I(z))).bi(k)
m=z.E(0,Math.sqrt(z.I(z)))}return m},
cD:function(){if(this.e!=null)return!0
var z=this.h7()
if(z==null){z=this.he()
if(z==null)return!1}this.e=z
this.a.a.a3()
return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
D:function(a){var z,y
z=this.a
if(z==null||this.b==null||this.c==null)return a+"disposed"
y=a+C.c.aj(J.ah(z.e),0)+", "+C.c.aj(J.ah(this.b.e),0)+", "+C.c.aj(J.ah(this.c.e),0)+" {"
z=this.d
y=z!=null?y+(z.i(0)+", "):y+"-, "
z=this.e
return z!=null?y+(z.i(0)+"}"):y+"-}"},
O:function(){return this.D("")},
q:{
bZ:function(a,b,c){var z,y,x
z=new F.a4()
y=a.a
if(y==null)H.p(P.r("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.p(P.r("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.a3()
return z}}},
az:{"^":"a;0a,0b",
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
D:function(a){var z=this.a
if(z==null||this.b==null)return a+"disposed"
return a+C.c.aj(J.ah(z.e),0)+", "+C.c.aj(J.ah(this.b.e),0)},
O:function(){return this.D("")},
q:{
iT:function(a,b){var z,y,x
z=new F.az()
if(a==null)H.p(P.r("May not create a line with a null start vertex."))
if(b==null)H.p(P.r("May not create a line with a null end vertex."))
y=a.a
if(y==null)H.p(P.r("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.p(P.r("May not create a line with vertices attached to different shapes."))
z.a=a
C.a.h(a.c.b,z)
z.b=b
C.a.h(b.c.c,z)
C.a.h(z.a.a.c.b,z)
z.a.a.a3()
return z}}},
c5:{"^":"a;0a",
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
D:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.c.aj(J.ah(z.e),0)},
O:function(){return this.D("")},
q:{
jt:function(a){var z=new F.c5()
if(a.a==null)H.p(P.r("May not create a point with a vertex which is not attached to a shape."))
z.a=a
C.a.h(a.b.b,z)
C.a.h(z.a.a.b.b,z)
z.a.a.a3()
return z}}},
af:{"^":"a;0a,0b,0c,0d,0e",
gw:function(){var z=this.e
if(z==null){z=D.K()
this.e=z}return z},
kb:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.U()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){v=z[w]
this.a.h(0,v.aZ())}this.a.U()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.U()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
r=t[s]
this.b.a.a.h(0,r)
F.jt(r)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.U()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.U()
t=t.e
if(typeof t!=="number")return t.F()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.c.a
t.a.h(0,p)
t.a.h(0,o)
F.iT(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.U()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.U()
t=t.e
if(typeof t!=="number")return t.F()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.U()
s=s.e
if(typeof s!=="number")return s.F()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
m=t[s]
s=this.d.a
s.a.h(0,p)
s.a.h(0,o)
s.a.h(0,m)
F.bZ(p,o,m)}z=this.e
if(!(z==null))z.aL()},
aI:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aI()||!1
if(!this.a.aI())y=!1
z=this.e
if(!(z==null))z.aL()
return y},
aX:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aX()||!1
if(!this.a.aX())y=!1
z=this.e
if(!(z==null))z.aL()
return y},
bG:function(){var z=this.e
if(!(z==null))++z.d
this.a.bG()
z=this.e
if(!(z==null))z.aL()
return!0},
ec:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aE()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aD().a)!==0)++w
if((x&$.$get$aC().a)!==0)++w
if((x&$.$get$aW().a)!==0)++w
if((x&$.$get$aX().a)!==0)++w
if((x&$.$get$b6().a)!==0)++w
if((x&$.$get$bH().a)!==0)++w
if((x&$.$get$bl().a)!==0)++w
if((x&$.$get$aV().a)!==0)++w
v=b.gdk(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.y
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.ea])
for(r=0,q=0;q<w;++q){p=b.jp(q)
o=p.gdk(p)
C.a.p(s,q,new Z.ea(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.f(y,n)
m=y[n].k7(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.p(t,l,m[k]);++l}}r+=o}H.k(t,"$isb",[x],"$asb")
y=a.a
j=y.createBuffer()
C.b.av(y,34962,j)
C.b.eb(y,34962,new Float32Array(H.bn(t)),35044)
C.b.av(y,34962,null)
i=new Z.bW(new Z.fL(34962,j),s,b)
i.shy(H.c([],[Z.c1]))
if(this.b.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.U()
C.a.h(h,g.e)}f=Z.dH(y,34963,H.k(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.c1(0,h.length,f))}if(this.c.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.U()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.U()
C.a.h(h,g.e)}f=Z.dH(y,34963,H.k(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.c1(1,h.length,f))}if(this.d.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.U()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.U()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].c
g.a.a.U()
C.a.h(h,g.e)}f=Z.dH(y,34963,H.k(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.c1(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.i])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.D("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.D("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.D("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.D("   "))}return C.a.l(z,"\n")},
ae:function(a){var z=this.e
if(!(z==null))z.J(a)},
a3:function(){return this.ae(null)},
$isdk:1,
q:{
bG:function(){var z,y
z=new F.af()
y=new F.l_(z)
y.b=!1
y.siX(H.c([],[F.Y]))
z.a=y
y=new F.k_(z)
y.scq(H.c([],[F.c5]))
z.b=y
y=new F.jZ(z)
y.shA(H.c([],[F.az]))
z.c=y
y=new F.jY(z)
y.shp(H.c([],[F.a4]))
z.d=y
z.e=null
return z}}},
dk:{"^":"d1;"},
jY:{"^":"a;a,0b",
shp:function(a){this.b=H.k(a,"$isb",[F.a4],"$asb")},
jm:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.k(c,"$isb",[F.Y],"$asb")
z=H.c([],[F.a4])
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
C.a.h(z,F.bZ(q,p,n))
y.a.h(0,q)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bZ(q,n,m))}else{r.h(0,p)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bZ(p,n,m))
y.a.h(0,p)
y.a.h(0,m)
y.a.h(0,q)
C.a.h(z,F.bZ(p,m,q))}t=!t}v=!v}return z},
gm:function(a){return this.b.length},
aI:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].cE())x=!1
return x},
aX:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].cD())x=!1
return x},
i:function(a){return this.O()},
D:function(a){var z,y,x,w
z=H.c([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].D(a))
return C.a.l(z,"\n")},
O:function(){return this.D("")}},
jZ:{"^":"a;a,0b",
shA:function(a){this.b=H.k(a,"$isb",[F.az],"$asb")},
aD:function(a,b,c){var z,y,x
z=this.a
z.a.h(0,b)
z.a.h(0,c)
z=new F.az()
if(b==null)H.p(P.r("May not create a line with a null start vertex."))
if(c==null)H.p(P.r("May not create a line with a null end vertex."))
y=b.a
if(y==null)H.p(P.r("May not create a line with a start vertex which is not attached to a shape."))
x=c.a
if(y==null?x!=null:y!==x)H.p(P.r("May not create a line with vertices attached to different shapes."))
z.a=b
C.a.h(b.c.b,z)
z.b=c
C.a.h(c.c.c,z)
C.a.h(z.a.a.c.b,z)
z.a.a.a3()
return z},
gm:function(a){return this.b.length},
i:function(a){return this.O()},
D:function(a){var z,y,x,w
z=H.c([],[P.i])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.f(w,x)
C.a.h(z,w[x].D(a+(""+x+". ")))}return C.a.l(z,"\n")},
O:function(){return this.D("")}},
k_:{"^":"a;a,0b",
scq:function(a){this.b=H.k(a,"$isb",[F.c5],"$asb")},
gm:function(a){return this.b.length},
i:function(a){return this.O()},
D:function(a){var z,y,x,w
z=H.c([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].D(a))
return C.a.l(z,"\n")},
O:function(){return this.D("")}},
Y:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cH:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cE(this.cx,x,u,z,y,w,v,a,t)},
aZ:function(){return this.cH(null)},
seT:function(a){var z
a=a==null?null:a.E(0,Math.sqrt(a.I(a)))
if(!J.P(this.r,a)){this.r=a
z=this.a
if(z!=null)z.a3()}},
saG:function(a){var z
a=a==null?null:a.E(0,Math.sqrt(a.I(a)))
if(!J.P(this.x,a)){this.x=a
z=this.a
if(z!=null)z.a3()}},
skG:function(a){var z
if(!J.P(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a3()}},
sa5:function(a,b){var z
if(!J.P(this.Q,b)){this.Q=b
z=this.a
if(z!=null)z.a3()}},
k7:function(a){var z,y
if(a.v(0,$.$get$aE())){z=this.f
y=[P.y]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.v(0,$.$get$aD())){z=this.r
y=[P.y]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.v(0,$.$get$aC())){z=this.x
y=[P.y]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.v(0,$.$get$aW())){z=this.y
y=[P.y]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(a.v(0,$.$get$aX())){z=this.z
y=[P.y]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.v(0,$.$get$b6())){z=this.Q
y=[P.y]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.v(0,$.$get$bH())){z=this.Q
y=[P.y]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(a.v(0,$.$get$bl()))return H.c([this.ch],[P.y])
else if(a.v(0,$.$get$aV())){z=this.cx
y=[P.y]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.y])},
cE:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.aO()
this.d.K(0,new F.l6(z))
z=z.a
this.r=z.E(0,Math.sqrt(z.I(z)))
z=this.a
if(z!=null){z.a3()
z=this.a.e
if(!(z==null))z.aL()}return!0},
cD:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.aO()
this.d.K(0,new F.l5(z))
z=z.a
this.x=z.E(0,Math.sqrt(z.I(z)))
z=this.a
if(z!=null){z.a3()
z=this.a.e
if(!(z==null))z.aL()}return!0},
eG:function(a){var z,y,x,w
z=this.c.b.length
for(y=0;y<z;++y){x=this.c.b
if(y>=x.length)return H.f(x,y)
w=x[y]
x=w.b
x.a.a.U()
x=x.e
a.a.a.U()
if(x==a.e)return w}return},
jQ:function(a){var z=this.eG(a)
if(z!=null)return z
return a.eG(this)},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
D:function(a){var z,y,x
z=H.c([],[P.i])
C.a.h(z,C.c.aj(J.ah(this.e),0))
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
C.a.h(z,V.O(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.l(z,", ")
return a+"{"+x+"}"},
O:function(){return this.D("")},
q:{
cE:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.Y()
y=new F.l4(z)
y.scq(H.c([],[F.c5]))
z.b=y
y=new F.l3(z)
x=[F.az]
y.shB(H.c([],x))
y.shC(H.c([],x))
z.c=y
y=new F.l0(z)
x=[F.a4]
y.shq(H.c([],x))
y.shr(H.c([],x))
y.shs(H.c([],x))
z.d=y
h=$.$get$fI()
z.e=0
y=$.$get$aE()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aD().a)!==0?e:null
z.x=(x&$.$get$aC().a)!==0?b:null
z.y=(x&$.$get$aW().a)!==0?f:null
z.z=(x&$.$get$aX().a)!==0?g:null
z.Q=(x&$.$get$fJ().a)!==0?c:null
z.ch=(x&$.$get$bl().a)!==0?i:0
z.cx=(x&$.$get$aV().a)!==0?a:null
return z}}},
l6:{"^":"n:5;a",
$1:function(a){var z,y
H.d(a,"$isa4")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
l5:{"^":"n:5;a",
$1:function(a){var z,y
H.d(a,"$isa4")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.F(0,z)}}},
l_:{"^":"a;a,0b,0c",
siX:function(a){this.c=H.k(a,"$isb",[F.Y],"$asb")},
U:function(){},
h:function(a,b){var z,y
z=b.a
if(z!=null){if(z===this.a)return!1
throw H.e(P.r("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
y=this.a
b.a=y
C.a.h(z,b)
y.a3()
return!0},
e5:function(a,b,c){var z=F.cE(null,null,null,new V.aM(a,b,c),null,null,null,null,0)
this.h(0,z)
return z},
gm:function(a){return this.c.length},
aI:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].cE()
return!0},
aX:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].cD()
return!0},
bG:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.E(0,Math.sqrt(u*u+t*t+s*s))
if(!J.P(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.J(null)}}}}return!0},
i:function(a){return this.O()},
D:function(a){var z,y,x,w
this.U()
z=H.c([],[P.i])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].D(a))
return C.a.l(z,"\n")},
O:function(){return this.D("")}},
l0:{"^":"a;a,0b,0c,0d",
shq:function(a){this.b=H.k(a,"$isb",[F.a4],"$asb")},
shr:function(a){this.c=H.k(a,"$isb",[F.a4],"$asb")},
shs:function(a){this.d=H.k(a,"$isb",[F.a4],"$asb")},
gm:function(a){return this.b.length+this.c.length+this.d.length},
K:function(a,b){H.l(b,{func:1,ret:-1,args:[F.a4]})
C.a.K(this.b,b)
C.a.K(this.c,new F.l1(this,b))
C.a.K(this.d,new F.l2(this,b))},
i:function(a){return this.O()},
D:function(a){var z,y,x,w
z=H.c([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].D(a))
return C.a.l(z,"\n")},
O:function(){return this.D("")}},
l1:{"^":"n:5;a,b",
$1:function(a){H.d(a,"$isa4")
if(!J.P(a.a,this.a))this.b.$1(a)}},
l2:{"^":"n:5;a,b",
$1:function(a){var z
H.d(a,"$isa4")
z=this.a
if(!J.P(a.a,z)&&!J.P(a.b,z))this.b.$1(a)}},
l3:{"^":"a;a,0b,0c",
shB:function(a){this.b=H.k(a,"$isb",[F.az],"$asb")},
shC:function(a){this.c=H.k(a,"$isb",[F.az],"$asb")},
gm:function(a){return this.b.length+this.c.length},
i:function(a){return this.O()},
D:function(a){var z,y,x,w
z=H.c([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].D(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].D(a))
return C.a.l(z,"\n")},
O:function(){return this.D("")}},
l4:{"^":"a;a,0b",
scq:function(a){this.b=H.k(a,"$isb",[F.c5],"$asb")},
gm:function(a){return this.b.length},
i:function(a){return this.O()},
D:function(a){var z,y,x,w
z=H.c([],[P.i])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].D(a))
return C.a.l(z,"\n")},
O:function(){return this.D("")}}}],["","",,O,{"^":"",iA:{"^":"c7;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx",
gw:function(){var z=this.rx
if(z==null){z=D.K()
this.rx=z}return z},
Y:function(a){var z=this.rx
if(!(z==null))z.J(a)},
ar:function(a){},
f4:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.d(a.fr.j(0,"Inspection"),"$isew")
if(z==null){y=a.a
z=new A.ew(y,"Inspection")
z.dm(y,"Inspection")
z.eP($.iF,$.iD)
z.z=z.x.j(0,"posAttr")
z.Q=z.x.j(0,"normAttr")
z.ch=z.x.j(0,"clrAttr")
z.cx=z.x.j(0,"binmAttr")
z.cy=H.h(z.y.j(0,"lightVec"),"$isI")
z.db=H.h(z.y.j(0,"ambientClr"),"$isdw")
z.dx=H.h(z.y.j(0,"diffuseClr"),"$isdw")
z.dy=H.h(z.y.j(0,"weightScalar"),"$isW")
z.fr=H.h(z.y.j(0,"viewMat"),"$isak")
z.fx=H.h(z.y.j(0,"viewObjMatrix"),"$isak")
z.fy=H.h(z.y.j(0,"projViewObjMatrix"),"$isak")
a.e7(z)}this.a=z}if(b.e==null){b.d.aI()
b.d.aX()
b.d.bG()
y=new Z.eb()
y.shH(new H.aR(0,0,[P.i,Z.bW]))
b.e=y}y=this.a
y.aF(a)
x=this.r2
w=y.dy
C.b.N(w.a,w.d,x)
x=this.b
w=y.cy
w.toString
v=x.a
u=x.b
x=x.c
C.b.u(w.a,w.d,v,u,x)
x=a.db.ga2()
u=y.fr
u.toString
u.ab(x.a8(0,!0))
x=a.gff()
u=y.fx
u.toString
u.ab(x.a8(0,!0))
x=a.gf1()
y=y.fy
y.toString
y.ab(x.a8(0,!0))
y=b.e
if(y instanceof Z.eb){x=a.a
C.b.aH(x,1,1)
if(b.c==null){C.b.cK(x,2929)
C.b.aw(x,3042)
C.b.aH(x,1,1)
if(this.k3)this.io(a,y,b.d,"Axis",H.l(this.gdv(),{func:1,ret:F.af,args:[F.dk]}),this.z,this.y)
C.b.aw(x,2929)
C.b.aH(x,770,771)}else{C.b.aw(x,2929)
C.b.aw(x,3042)
C.b.aH(x,770,771)
C.b.cK(x,2929)
C.b.aH(x,1,1)
if(this.ch)this.bC(a,y,b.c,"wireFrame",this.giY(),this.f,this.e)
if(this.cy)this.bC(a,y,b.c,"normals",this.ghM(),this.f,this.e)
if(this.db)this.bC(a,y,b.c,"binormals",this.ghc(),this.f,this.e)
if(this.k3)this.bC(a,y,b.c,"Axis",this.gdv(),this.z,this.y)
C.b.aw(x,2929)
C.b.aH(x,770,771)}}else b.e=null
y=this.a
y.toString
C.b.d7(a.a,null)
y.x.ef()},
bC:function(a,b,c,d,e,f,g){var z,y
H.l(e,{func:1,ret:F.af,args:[F.af]})
z=b.a.j(0,d)
if(z==null){z=this.dw(a,e.$1(c))
b.a.p(0,d,z)}y=this.a
y.db.bw(f)
y.dx.bw(g)
z.eY(a)},
io:function(a,b,c,d,e,f,g){var z,y
H.l(e,{func:1,ret:F.af,args:[F.dk]})
z=b.a.j(0,d)
if(z==null){z=this.dw(a,e.$1(c))
b.a.p(0,d,z)}y=this.a
y.db.bw(f)
y.dx.bw(g)
z.eY(a)},
dw:function(a,b){var z,y,x
H.d(b,"$isaf")
z=$.$get$aE()
y=$.$get$aD()
x=b.ec(new Z.fM(a.a),new Z.b5(z.a|y.a|$.$get$aC().a|$.$get$b6().a))
x.ah($.$get$aE()).e=this.a.z.c
x.ah($.$get$aD()).e=this.a.Q.c
x.ah($.$get$b6()).e=this.a.ch.c
x.ah($.$get$aC()).e=this.a.cx.c
return x},
iZ:[function(a,b){var z,y,x,w
z={}
z.a=b
y=F.bG()
z.a=new V.a2(0,0.7,1,1)
x=a.a
x.toString
z=H.l(new O.iH(z,y),{func:1,ret:-1,args:[F.Y]})
C.a.K(x.c,z)
z=new O.iG(y)
x=a.c
x.toString
w=H.l(new O.iI(y,z),{func:1,ret:-1,args:[F.az]})
C.a.K(x.b,w)
w=a.d
w.toString
z=H.l(new O.iJ(y,z),{func:1,ret:-1,args:[F.a4]})
C.a.K(w.b,z)
return y},function(a){return this.iZ(a,null)},"lr","$2$color","$1","giY",4,3,46],
kY:[function(a){var z,y,x
z=F.bG()
y=a.a
y.toString
x=H.l(new O.iE(new V.a2(1,1,0.3,1),z),{func:1,ret:-1,args:[F.Y]})
C.a.K(y.c,x)
return z},"$1","ghM",4,0,11],
kU:[function(a){var z,y,x
z=F.bG()
y=a.a
y.toString
x=H.l(new O.iC(new V.a2(1,0.3,0.3,1),z),{func:1,ret:-1,args:[F.Y]})
C.a.K(y.c,x)
return z},"$1","ghc",4,0,11],
kT:[function(a){return this.h9(a)},"$1","gdv",4,0,11],
h9:function(a){var z,y
z=F.bG()
y=new O.iB(z)
y.$3(1,0,0)
y.$3(0,1,0)
y.$3(0,0,1)
return z}},iH:{"^":"n:12;a,b",
$1:function(a){var z,y
H.d(a,"$isY")
z=this.b.a
y=a.aZ()
y.sa5(0,this.a.a)
y.saG(V.aO())
z.h(0,y)}},iG:{"^":"n:49;a",
$2:function(a,b){if(a.jQ(b)==null)this.a.c.aD(0,a,b)}},iI:{"^":"n:50;a,b",
$1:function(a){var z,y,x,w
H.d(a,"$isaz")
z=this.a
y=z.a
x=a.a
x.a.a.U()
x=x.e
w=C.a.j(y.c,x)
z=z.a
x=a.b
x.a.a.U()
x=x.e
this.b.$2(w,C.a.j(z.c,x))}},iJ:{"^":"n:5;a,b",
$1:function(a){var z,y,x,w,v,u
H.d(a,"$isa4")
z=this.a
y=z.a
x=a.a
x.a.a.U()
x=x.e
w=C.a.j(y.c,x)
x=z.a
y=a.b
y.a.a.U()
y=y.e
v=C.a.j(x.c,y)
z=z.a
y=a.c
y.a.a.U()
y=y.e
u=C.a.j(z.c,y)
y=this.b
y.$2(w,v)
y.$2(v,u)
y.$2(u,w)}},iE:{"^":"n:12;a,b",
$1:function(a){var z,y,x
z=H.d(a,"$isY").aZ()
z.sa5(0,this.a)
z.saG(V.aO())
y=z.aZ()
y.saG(z.r)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.aD(0,z,y)}},iC:{"^":"n:12;a,b",
$1:function(a){var z,y,x
H.d(a,"$isY")
z=a.aZ()
z.sa5(0,this.a)
z.saG(V.aO())
y=z.aZ()
y.saG(a.x)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.aD(0,z,y)}},iB:{"^":"n;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=a>1?1:a
y=b>1?1:b
x=c>1?1:c
w=new V.a2(z,y,x,1)
z=this.a
v=z.a.e5(0,0,0)
v.saG(V.aO())
v.seT(V.fG())
v.sa5(0,w)
u=z.a.e5(a,b,c)
u.saG(V.aO())
u.seT(V.fG())
u.sa5(0,w)
z.c.aD(0,v,u)}},j9:{"^":"c7;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
shb:function(a){this.e=H.k(a,"$isa_",[V.ap],"$asa_")},
gw:function(){var z=this.dy
if(z==null){z=D.K()
this.dy=z}return z},
Y:[function(a){var z
H.d(a,"$isx")
z=this.dy
if(!(z==null))z.J(a)},function(){return this.Y(null)},"hS","$1","$0","gbB",0,2,0],
iu:[function(a){H.d(a,"$isx")
this.a=null
this.Y(a)},function(){return this.iu(null)},"ln","$1","$0","git",0,2,0],
l0:[function(a,b){var z=V.ap
z=new D.cm(a,H.k(b,"$iso",[z],"$aso"),this,[z])
z.b=!0
this.Y(z)},"$2","ghP",8,0,28],
l1:[function(a,b){var z=V.ap
z=new D.cn(a,H.k(b,"$iso",[z],"$aso"),this,[z])
z.b=!0
this.Y(z)},"$2","ghQ",8,0,28],
dE:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
a2=$.$get$aE()
if(e){g=$.$get$aD()
a2=new Z.b5(a2.a|g.a)}if(d){g=$.$get$aC()
a2=new Z.b5(a2.a|g.a)}if(c){g=$.$get$aW()
a2=new Z.b5(a2.a|g.a)}if(b){g=$.$get$aX()
a2=new Z.b5(a2.a|g.a)}if(a0){g=$.$get$aV()
a2=new Z.b5(a2.a|g.a)}return new A.jd(z,r,q,p,o,n,m,l,k,y,x,w,v,u,t,y+x+w+v+u+t,i,i,a,a1,!0,!1,!1,h,a,f,e,d,c,b,a0,!1,!1,!1,s,j.charCodeAt(0)==0?j:j,a2)},
a0:function(a,b){H.k(a,"$isb",[T.dq],"$asb")
if(b!=null)if(!C.a.Z(a,b)){b.a=a.length
C.a.h(a,b)}},
ar:function(a){var z,y,x,w,v
for(z=this.dx.a,z=new J.aw(z,z.length,0,[H.t(z,0)]);z.A();){y=z.d
y.toString
x=$.cD
if(x==null){x=new V.U(0,0,1)
$.cD=x}y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.d6(x)}}},
f4:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.dE()
y=H.d(a.fr.j(0,z.ap),"$iseJ")
if(y==null){y=A.ja(z,a.a)
a.e7(y)}this.a=y
b.e=null
z=y}x=z.z
w=x.bJ
z=b.e
if(!(z instanceof Z.bW)){b.e=null
z=null}if(z==null||!z.d.v(0,w)){z=x.r1
if(z)b.d.aI()
v=x.r2
if(v)b.d.aX()
u=x.ry
if(u)b.d.bG()
t=b.d.ec(new Z.fM(a.a),w)
t.ah($.$get$aE()).e=this.a.Q.c
if(z)t.ah($.$get$aD()).e=this.a.cx.c
if(v)t.ah($.$get$aC()).e=this.a.ch.c
if(x.rx)t.ah($.$get$aW()).e=this.a.cy.c
if(u)t.ah($.$get$aX()).e=this.a.db.c
if(x.x1)t.ah($.$get$aV()).e=this.a.dx.c
b.e=t}z=T.dq
s=H.c([],[z])
this.a.aF(a)
if(x.fx){v=this.a
u=a.dx.ga2()
v=v.dy
v.toString
v.ab(u.a8(0,!0))}if(x.fy){v=this.a
u=a.gff()
v=v.fr
v.toString
v.ab(u.a8(0,!0))}v=this.a
u=a.gf1()
v=v.fy
v.toString
v.ab(u.a8(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.k1
v.toString
v.ab(C.r.a8(u,!0))}if(x.y1){v=this.a
u=this.c
v=v.k2
v.toString
v.ab(C.r.a8(u,!0))}if(x.y2){v=this.a
u=this.d
v=v.k3
v.toString
v.ab(C.r.a8(u,!0))}if(x.ax>0){r=this.e.a.length
v=this.a.k4
C.b.R(v.a,v.d,r)
for(v=[P.y],q=0;q<r;++q){u=this.a
p=this.e.a
if(q>=p.length)return H.f(p,q)
p=p[q]
u.toString
H.d(p,"$isap")
u=u.r1
if(q>=u.length)return H.f(u,q)
u=u[q]
o=new Float32Array(H.bn(H.k(p.a8(0,!0),"$isb",v,"$asb")))
C.b.fc(u.a,u.d,!1,o)}}switch(x.a){case C.d:break
case C.i:v=this.a
u=this.f.f
v=v.r2
v.toString
p=u.a
n=u.b
u=u.c
C.b.u(v.a,v.d,p,n,u)
break
case C.e:this.a0(s,this.f.d)
v=this.a
u=this.f.d
v.an(v.rx,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
p=v.a
n=v.b
v=v.c
C.b.u(u.a,u.d,p,n,v)
break
case C.f:this.a0(s,this.f.e)
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
C.b.u(u.a,u.d,p,n,v)
break}if(x.k2){switch(x.b){case C.d:break
case C.i:v=this.a
u=this.r.f
v=v.x2
v.toString
p=u.a
n=u.b
u=u.c
C.b.u(v.a,v.d,p,n,u)
break
case C.e:this.a0(s,this.r.d)
v=this.a
u=this.r.d
v.an(v.y1,v.ax,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
p=v.a
n=v.b
v=v.c
C.b.u(u.a,u.d,p,n,v)
break
case C.f:this.a0(s,this.r.e)
v=this.a
u=this.r.e
v.ag(v.y2,v.ax,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
p=v.a
n=v.b
v=v.c
C.b.u(u.a,u.d,p,n,v)
break}switch(x.c){case C.d:break
case C.i:v=this.a
u=this.x.f
v=v.ap
v.toString
p=u.a
n=u.b
u=u.c
C.b.u(v.a,v.d,p,n,u)
break
case C.e:this.a0(s,this.x.d)
v=this.a
u=this.x.d
v.an(v.bJ,v.bK,u)
u=this.a
v=this.x.f
u=u.ap
u.toString
p=v.a
n=v.b
v=v.c
C.b.u(u.a,u.d,p,n,v)
break
case C.f:this.a0(s,this.x.e)
v=this.a
u=this.x.e
v.ag(v.ej,v.bK,u)
u=this.a
v=this.x.f
u=u.ap
u.toString
p=v.a
n=v.b
v=v.c
C.b.u(u.a,u.d,p,n,v)
break}switch(x.d){case C.d:break
case C.i:v=this.a
u=this.y.f
v=v.bL
v.toString
p=u.a
n=u.b
u=u.c
C.b.u(v.a,v.d,p,n,u)
break
case C.e:this.a0(s,this.y.d)
v=this.a
u=this.y.d
v.an(v.ek,v.bM,u)
u=this.a
v=this.y.f
u=u.bL
u.toString
p=v.a
n=v.b
v=v.c
C.b.u(u.a,u.d,p,n,v)
break
case C.f:this.a0(s,this.y.e)
v=this.a
u=this.y.e
v.ag(v.el,v.bM,u)
u=this.a
v=this.y.f
u=u.bL
u.toString
p=v.a
n=v.b
v=v.c
C.b.u(u.a,u.d,p,n,v)
break}switch(x.e){case C.d:break
case C.i:v=this.a
u=this.z.f
v=v.bN
v.toString
p=u.a
n=u.b
u=u.c
C.b.u(v.a,v.d,p,n,u)
u=this.a
n=this.z.ch
u=u.bP
C.b.N(u.a,u.d,n)
break
case C.e:this.a0(s,this.z.d)
v=this.a
u=this.z.d
v.an(v.em,v.bO,u)
u=this.a
v=this.z.f
u=u.bN
u.toString
p=v.a
n=v.b
v=v.c
C.b.u(u.a,u.d,p,n,v)
v=this.a
n=this.z.ch
v=v.bP
C.b.N(v.a,v.d,n)
break
case C.f:this.a0(s,this.z.e)
v=this.a
u=this.z.e
v.ag(v.en,v.bO,u)
u=this.a
v=this.z.f
u=u.bN
u.toString
p=v.a
n=v.b
v=v.c
C.b.u(u.a,u.d,p,n,v)
v=this.a
n=this.z.ch
v=v.bP
C.b.N(v.a,v.d,n)
break}if(x.z>0){r=this.dx.e.length
v=this.a.ez
C.b.R(v.a,v.d,r)
m=a.db.ga2()
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
p=this.a.cL
if(l>=p.length)return H.f(p,l)
i=p[l]
p=m.d6(j.a)
n=p.a
h=p.b
g=p.c
g=p.E(0,Math.sqrt(n*n+h*h+g*g))
h=i.b
n=g.a
p=g.b
g=g.c
C.b.u(h.a,h.d,n,p,g)
g=j.c
p=i.c
C.b.u(p.a,p.d,g.a,g.b,g.c);++l}}if(x.Q>0){r=this.dx.f.length
v=this.a.eA
C.b.R(v.a,v.d,r)
m=a.db.ga2()
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
p=this.a.cM
if(l>=p.length)return H.f(p,l)
i=p[l]
p=j.gbn(j)
n=i.b
h=p.gdc(p)
g=p.gdd(p)
p=p.gde(p)
C.b.u(n.a,n.d,h,g,p)
p=m.bs(j.gbn(j))
g=i.c
C.b.u(g.a,g.d,p.a,p.b,p.c)
p=j.ga5(j)
g=i.d
h=p.gc_()
n=p.gbu()
p=p.gbF()
C.b.u(g.a,g.d,h,n,p)
p=j.gcw()
n=i.e
C.b.N(n.a,n.d,p)
p=j.gcz()
n=i.f
C.b.N(n.a,n.d,p)
p=j.gcA()
n=i.r
C.b.N(n.a,n.d,p);++l}}if(x.ch>0){r=this.dx.r.length
v=this.a.eB
C.b.R(v.a,v.d,r)
m=a.db.ga2()
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
p=this.a.cN
if(l>=p.length)return H.f(p,l)
i=p[l]
p=j.gbn(j)
n=i.b
h=p.gdc(p)
g=p.gdd(p)
p=p.gde(p)
C.b.u(n.a,n.d,h,g,p)
p=j.gcJ(j).lx()
g=i.c
h=p.gb_(p)
n=p.gb0(p)
p=p.gb1()
C.b.u(g.a,g.d,h,n,p)
p=m.bs(j.gbn(j))
n=i.d
C.b.u(n.a,n.d,p.a,p.b,p.c)
p=j.ga5(j)
n=i.e
h=p.gc_()
g=p.gbu()
p=p.gbF()
C.b.u(n.a,n.d,h,g,p)
p=j.glu()
g=i.f
C.b.N(g.a,g.d,p)
p=j.gls()
g=i.r
C.b.N(g.a,g.d,p)
p=j.gcw()
g=i.x
C.b.N(g.a,g.d,p)
p=j.gcz()
g=i.y
C.b.N(g.a,g.d,p)
p=j.gcA()
g=i.z
C.b.N(g.a,g.d,p);++l}}if(x.cx>0){r=this.dx.x.length
v=this.a.eC
C.b.R(v.a,v.d,r)
m=a.db.ga2()
for(v=this.dx.x,u=v.length,p=[z],l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
n=this.a.cO
if(l>=n.length)return H.f(n,l)
i=n[l]
n=j.gbp()
H.k(s,"$isb",p,"$asb")
if(!C.a.Z(s,n)){n.sbA(s.length)
C.a.h(s,n)}n=j.gcJ(j)
h=i.d
g=n.gb_(n)
f=n.gb0(n)
n=n.gb1()
C.b.u(h.a,h.d,g,f,n)
n=j.gc1()
f=i.b
g=n.gb_(n)
h=n.gb0(n)
n=n.gb1()
C.b.u(f.a,f.d,g,h,n)
n=j.gbo(j)
h=i.c
g=n.gb_(n)
f=n.gb0(n)
n=n.gb1()
C.b.u(h.a,h.d,g,f,n)
n=m.d6(j.gcJ(j))
f=n.a
g=n.b
h=n.c
h=n.E(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
f=h.a
n=h.b
h=h.c
C.b.u(g.a,g.d,f,n,h)
h=j.ga5(j)
n=i.f
f=h.gc_()
g=h.gbu()
h=h.gbF()
C.b.u(n.a,n.d,f,g,h)
h=j.gbp()
n=h.gcW(h)
if(!n){n=i.x
C.b.R(n.a,n.d,1)}else{n=i.r
g=h.ghE()
f=n.a
n=n.d
if(!g)C.b.R(f,n,0)
else C.b.R(f,n,h.gbA())
n=i.x
C.b.R(n.a,n.d,0)}++l}}if(x.cy>0){r=this.dx.y.length
v=this.a.eD
C.b.R(v.a,v.d,r)
m=a.db.ga2()
for(v=this.dx.y,u=v.length,p=[P.y],n=[z],l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
h=this.a.cP
if(l>=h.length)return H.f(h,l)
i=h[l]
h=j.gbp()
H.k(s,"$isb",n,"$asb")
if(!C.a.Z(s,h)){h.sbA(s.length)
C.a.h(s,h)}e=m.B(0,j.ga2())
h=j.ga2()
g=$.bE
if(g==null){g=new V.aM(0,0,0)
$.bE=g}g=h.bs(g)
h=i.b
f=g.gdc(g)
d=g.gdd(g)
g=g.gde(g)
C.b.u(h.a,h.d,f,d,g)
h=$.bE
if(h==null){h=new V.aM(0,0,0)
$.bE=h}h=e.bs(h)
g=i.c
C.b.u(g.a,g.d,h.a,h.b,h.c)
h=e.eQ()
g=i.d
o=new Float32Array(H.bn(H.k(new V.eK(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).a8(0,!0),"$isb",p,"$asb")))
C.b.fb(g.a,g.d,!1,o)
g=j.ga5(j)
h=i.e
f=g.gc_()
d=g.gbu()
g=g.gbF()
C.b.u(h.a,h.d,f,d,g)
g=j.gbp()
h=g.gcW(g)
if(!h){h=i.r
C.b.R(h.a,h.d,1)}else{h=i.f
f=g.gcW(g)
d=h.a
h=h.d
if(!f)C.b.R(d,h,0)
else C.b.R(d,h,g.glv(g))
h=i.r
C.b.R(h.a,h.d,0)}h=j.gcw()
g=i.x
C.b.N(g.a,g.d,h)
h=j.gcz()
g=i.y
C.b.N(g.a,g.d,h)
h=j.gcA()
g=i.z
C.b.N(g.a,g.d,h);++l}}if(x.db>0){r=this.dx.z.length
v=this.a.eE
C.b.R(v.a,v.d,r)
m=a.db.ga2()
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
p=this.a.cQ
if(l>=p.length)return H.f(p,l)
i=p[l]
p=j.gbp()
H.k(s,"$isb",z,"$asb")
if(!C.a.Z(s,p)){p.sbA(s.length)
C.a.h(s,p)}p=j.gbn(j)
n=i.b
h=p.gdc(p)
g=p.gdd(p)
p=p.gde(p)
C.b.u(n.a,n.d,h,g,p)
p=j.gcJ(j)
g=i.c
h=p.gb_(p)
n=p.gb0(p)
p=p.gb1()
C.b.u(g.a,g.d,h,n,p)
p=j.gc1()
n=i.d
h=p.gb_(p)
g=p.gb0(p)
p=p.gb1()
C.b.u(n.a,n.d,h,g,p)
p=j.gbo(j)
g=i.e
h=p.gb_(p)
n=p.gb0(p)
p=p.gb1()
C.b.u(g.a,g.d,h,n,p)
p=m.bs(j.gbn(j))
n=i.f
C.b.u(n.a,n.d,p.a,p.b,p.c)
p=j.gbp()
n=p.gcW(p)
if(!n){p=i.x
C.b.R(p.a,p.d,1)}else{n=i.r
h=p.ghE()
g=n.a
n=n.d
if(!h)C.b.R(g,n,0)
else C.b.R(g,n,p.gbA())
p=i.x
C.b.R(p.a,p.d,0)}p=j.ga5(j)
n=i.y
h=p.gc_()
g=p.gbu()
p=p.gbF()
C.b.u(n.a,n.d,h,g,p)
p=j.glE()
g=i.z
C.b.N(g.a,g.d,p)
p=j.glF()
g=i.Q
C.b.N(g.a,g.d,p)
p=j.gcw()
g=i.ch
C.b.N(g.a,g.d,p)
p=j.gcz()
g=i.cx
C.b.N(g.a,g.d,p)
p=j.gcA()
g=i.cy
C.b.N(g.a,g.d,p);++l}}}switch(x.f){case C.d:break
case C.i:break
case C.e:this.a0(s,this.Q.d)
z=this.a
v=this.Q.d
z.an(z.eo,z.bQ,v)
break
case C.f:this.a0(s,this.Q.e)
z=this.a
v=this.Q.e
z.ag(z.ep,z.bQ,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db.ga2().eQ()
a.Q=v}z=z.id
z.toString
z.ab(v.a8(0,!0))}if(x.dy){this.a0(s,this.ch)
z=this.a
v=this.ch
z.ag(z.eq,z.er,v)
switch(x.r){case C.d:break
case C.i:z=this.a
v=this.cx.f
z=z.bR
z.toString
u=v.a
p=v.b
v=v.c
C.b.u(z.a,z.d,u,p,v)
break
case C.e:this.a0(s,this.cx.d)
z=this.a
v=this.cx.d
z.an(z.es,z.bS,v)
v=this.a
z=this.cx.f
v=v.bR
v.toString
u=z.a
p=z.b
z=z.c
C.b.u(v.a,v.d,u,p,z)
break
case C.f:this.a0(s,this.cx.e)
z=this.a
v=this.cx.e
z.ag(z.eu,z.bS,v)
v=this.a
z=this.cx.f
v=v.bR
v.toString
u=z.a
p=z.b
z=z.c
C.b.u(v.a,v.d,u,p,z)
break}switch(x.x){case C.d:break
case C.i:z=this.a
v=this.cy.f
z=z.bU
z.toString
u=v.a
p=v.b
v=v.c
C.b.u(z.a,z.d,u,p,v)
v=this.a
p=this.cy.ch
v=v.bT
C.b.N(v.a,v.d,p)
break
case C.e:this.a0(s,this.cy.d)
z=this.a
v=this.cy.d
z.an(z.ev,z.bV,v)
v=this.a
z=this.cy.f
v=v.bU
v.toString
u=z.a
p=z.b
z=z.c
C.b.u(v.a,v.d,u,p,z)
z=this.a
p=this.cy.ch
z=z.bT
C.b.N(z.a,z.d,p)
break
case C.f:this.a0(s,this.cy.e)
z=this.a
v=this.cy.e
z.ag(z.ew,z.bV,v)
v=this.a
z=this.cy.f
v=v.bU
v.toString
u=z.a
p=z.b
z=z.c
C.b.u(v.a,v.d,u,p,z)
z=this.a
p=this.cy.ch
z=z.bT
C.b.N(z.a,z.d,p)
break}}z=x.y
v=z!==C.d
if(v){switch(z){case C.d:break
case C.i:z=this.a
u=this.db.f
z=z.bW
C.b.N(z.a,z.d,u)
break
case C.e:this.a0(s,this.db.d)
z=this.a
u=this.db.d
z.an(z.ex,z.bX,u)
u=this.a
z=this.db.f
u=u.bW
C.b.N(u.a,u.d,z)
break
case C.f:this.a0(s,this.db.e)
z=this.a
u=this.db.e
z.ag(z.ey,z.bX,u)
u=this.a
z=this.db.f
u=u.bW
C.b.N(u.a,u.d,z)
break}z=a.a
C.b.aw(z,3042)
C.b.aH(z,770,771)}for(z=a.a,q=0;q<s.length;++q){u=s[q]
if(!u.c&&u.d){u.c=!0
C.b.e3(z,33984+u.a)
C.b.aW(z,3553,u.b)}}u=H.h(b.e,"$isbW")
u.aF(a)
u.aJ(a)
u.fa(a)
if(v)C.b.cK(z,3042)
for(q=0;q<s.length;++q){v=s[q]
if(v.c){v.c=!1
C.b.e3(z,33984+v.a)
C.b.aW(z,3553,null)}}v=this.a
v.toString
C.b.d7(z,null)
v.x.ef()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dE().ap}},jb:{"^":"de;0f,a,b,0c,0d,0e"},de:{"^":"a;",
Y:[function(a){this.a.Y(H.d(a,"$isx"))},function(){return this.Y(null)},"hS","$1","$0","gbB",0,2,0],
bc:["fH",function(){}],
iB:function(a){var z,y
z=this.d
if(z==null?a!=null:z!==a){if(z!=null)z.gw().a4(0,this.gbB())
y=this.d
this.d=a
if(a!=null)a.gw().h(0,this.gbB())
z=new D.F(this.b+".texture2D",y,this.d,this,[T.fa])
z.b=!0
this.a.Y(z)}},
iC:function(a){}},jc:{"^":"de;a,b,0c,0d,0e"},bd:{"^":"de;0f,a,b,0c,0d,0e",
dX:function(a){var z,y
if(!J.P(this.f,a)){z=this.f
this.f=a
y=new D.F(this.b+".color",z,a,this,[V.a8])
y.b=!0
this.a.Y(y)}},
bc:["c8",function(){this.fH()
this.dX(new V.a8(1,1,1))}],
sa5:function(a,b){var z
if(this.c===C.d){this.c=C.i
this.bc()
z=this.a
z.a=null
z.Y(null)}this.dX(b)}},je:{"^":"bd;0ch,0f,a,b,0c,0d,0e",
iA:function(a){var z,y
z=this.ch
if(!$.q.$2(z,a)){y=this.ch
this.ch=a
z=new D.F(this.b+".refraction",y,a,this,[P.y])
z.b=!0
this.a.Y(z)}},
bc:function(){this.c8()
this.iA(1)}},jf:{"^":"bd;0ch,0f,a,b,0c,0d,0e",
ct:function(a){var z,y
z=this.ch
if(!$.q.$2(z,a)){y=this.ch
this.ch=a
z=new D.F(this.b+".shininess",y,a,this,[P.y])
z.b=!0
this.a.Y(z)}},
bc:function(){this.c8()
this.ct(100)}},c7:{"^":"a;"}}],["","",,T,{"^":"",dq:{"^":"cW;"},fa:{"^":"dq;"},ki:{"^":"fa;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gw:function(){var z=this.y
if(z==null){z=D.K()
this.y=z}return z}},kj:{"^":"a;a,0b,0c,0d,0e",
k9:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
C.b.aW(z,3553,y)
C.b.c0(z,3553,10242,33071)
C.b.c0(z,3553,10243,33071)
C.b.c0(z,3553,10241,9729)
C.b.c0(z,3553,10240,9729)
C.b.aW(z,3553,null);++this.d
x=W.ev(null,a,null)
w=new T.ki()
w.a=0
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
z=W.ac
W.a1(x,"load",H.l(new T.kk(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
k8:function(a){return this.k9(a,!1,!1,!1,!1)},
iv:function(a,b,c){var z,y,x,w
b=V.e_(b,2)
z=V.e_(a.width,2)
y=V.e_(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.d_(null,null)
x.width=z
x.height=y
w=H.d(C.q.fm(x,"2d"),"$isd0")
w.imageSmoothingEnabled=!1;(w&&C.D).jK(w,a,0,0,x.width,x.height)
return P.mM(C.D.hw(w,0,0,x.width,x.height))}}},kk:{"^":"n:29;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.iv(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
C.b.aW(y,3553,this.e)
C.b.kr(y,37440,this.f?1:0)
C.b.kE(y,3553,0,6408,6408,5121,w)
if(this.r)C.b.fh(y,3553)
C.b.aW(y,3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.jL()}++x.e}}}],["","",,V,{"^":"",bw:{"^":"a;",
b3:function(a){return!0},
i:function(a){return"all"},
$isaI:1},aI:{"^":"a;"},eI:{"^":"a;0a",
sa9:function(a){this.a=H.k(a,"$isb",[V.aI],"$asb")},
b3:["fG",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)if(z[x].b3(a))return!0
return!1}],
i:["dl",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isaI:1},aA:{"^":"eI;0a",
b3:function(a){return!this.fG(a)},
i:function(a){return"!["+this.dl(0)+"]"}},jI:{"^":"a;0a,0b",
b3:function(a){return this.a<=a&&this.b>=a},
i:function(a){var z,y
z=H.bh(this.a)
y=H.bh(this.b)
return z+".."+y},
$isaI:1,
q:{
Q:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.e(P.r("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.c.G(a,0)
y=C.c.G(b,0)
x=new V.jI()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},jV:{"^":"a;0a",
siz:function(a){this.a=H.k(a,"$isE",[P.m,P.G],"$asE")},
fM:function(a){var z,y
if(a.a.length<=0)throw H.e(P.r("May not create a SetMatcher with zero characters."))
z=new H.aR(0,0,[P.m,P.G])
for(y=new H.dc(a,a.gm(a),0,[H.a6(a,"S",0)]);y.A();)z.p(0,y.d,!0)
this.siz(z)},
b3:function(a){return this.a.bH(a)},
i:function(a){return P.c6(this.a.gay(),0,null)},
$isaI:1,
q:{
v:function(a){var z=new V.jV()
z.fM(a)
return z}}},dl:{"^":"a;a,b,0c,0d",
siS:function(a){this.c=H.k(a,"$isb",[V.dt],"$asb")},
l:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.dt(this.a.k(0,b))
w.sa9(H.c([],[V.aI]))
w.c=!1
C.a.h(this.c,w)
return w},
jP:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.b3(a))return w}return},
i:function(a){return this.b}},fh:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.e1(this.b,"\n","\\n")
y=H.e1(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},ds:{"^":"a;a,b,0c",
sip:function(a){var z=P.i
this.c=H.k(a,"$isE",[z,z],"$asE")},
aK:function(a,b,c){var z,y,x
H.k(c,"$isb",[P.i],"$asb")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.z)(c),++y){x=c[y]
this.c.p(0,x,b)}},
i:function(a){return this.b}},kp:{"^":"a;0a,0b,0c",
siJ:function(a){this.a=H.k(a,"$isE",[P.i,V.dl],"$asE")},
siO:function(a){this.b=H.k(a,"$isE",[P.i,V.ds],"$asE")},
k:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.dl(this,b)
z.siS(H.c([],[V.dt]))
z.d=null
this.a.p(0,b,z)}return z},
P:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.ds(this,a)
y=P.i
z.sip(new H.aR(0,0,[y,y]))
this.b.p(0,a,z)}return z},
f9:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.fh])
y=this.c
x=[P.m]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.c.G(a,t)
r=y.jP(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.c6(w,0,null)
throw H.e(P.r("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.c6(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.fh(o==null?p.b:o,q,t)}++t}}},
q:{
cz:function(){var z,y
z=new V.kp()
y=P.i
z.siJ(new H.aR(0,0,[y,V.dl]))
z.siO(new H.aR(0,0,[y,V.ds]))
z.c=null
return z}}},dt:{"^":"eI;b,0c,0a",
i:function(a){return this.b.b+": "+this.dl(0)}}}],["","",,X,{"^":"",ed:{"^":"a;",$isaS:1},iq:{"^":"f7;0a,0b,0c,0d,0e,0f,0r,0x",
gw:function(){var z=this.x
if(z==null){z=D.K()
this.x=z}return z}},jq:{"^":"a;0a,0b,0c,0d,0e,0f",
gw:function(){var z=this.f
if(z==null){z=D.K()
this.f=z}return z},
b8:[function(a){var z
H.d(a,"$isx")
z=this.f
if(!(z==null))z.J(a)},function(){return this.b8(null)},"kS","$1","$0","gdq",0,2,0],
sbk:function(a){var z,y
if(!J.P(this.b,a)){z=this.b
if(z!=null)z.gw().a4(0,this.gdq())
y=this.b
this.b=a
if(a!=null)a.gw().h(0,this.gdq())
z=new D.F("mover",y,this.b,this,[U.ae])
z.b=!0
this.b8(z)}},
$isaS:1,
$ised:1},f7:{"^":"a;"}}],["","",,V,{"^":"",
nb:function(a){P.ko(C.U,new V.nc(a))},
b_:{"^":"a;0d",
sci:function(a){this.d=H.k(a,"$isb",[[P.b,W.b1]],"$asb")},
by:function(a){this.b=new P.ix(C.X)
this.c=null
this.sci(H.c([],[[P.b,W.b1]]))},
M:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.c([],[W.b1]))
y=a.split("\n")
for(z=y.length,x=[W.b1],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.c([],x))
t=document.createElement("div")
t.className="codePart"
H.D(u)
s=this.b.hi(u,0,u.length)
r=s==null?u:s
C.j.fw(t,H.e1(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gaz(this.d),t)}},
eZ:function(a){var z,y,x,w
H.k(a,"$isb",[P.i],"$asb")
this.sci(H.c([],[[P.b,W.b1]]))
z=C.a.l(a,"\n")
y=this.c
if(y==null){y=this.bI()
this.c=y}for(y=y.f9(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)this.bZ(y[w])}},
nc:{"^":"n:53;a",
$1:function(a){H.d(a,"$isbi")
P.e0(C.k.f8(this.a.gjV(),2)+" fps")}},
i2:{"^":"b_;a,0b,0c,0d",
bZ:function(a){switch(a.a){case"Class":this.M(a.b,"#551")
break
case"Comment":this.M(a.b,"#777")
break
case"Id":this.M(a.b,"#111")
break
case"Num":this.M(a.b,"#191")
break
case"Reserved":this.M(a.b,"#119")
break
case"String":this.M(a.b,"#171")
break
case"Symbol":this.M(a.b,"#616")
break
case"Type":this.M(a.b,"#B11")
break
case"Whitespace":this.M(a.b,"#111")
break}},
bI:function(){var z,y,x,w
z=V.cz()
z.c=z.k(0,"Start")
y=z.k(0,"Start").l(0,"Id")
x=V.v(new H.u("_"))
C.a.h(y.a,x)
x=V.Q("a","z")
C.a.h(y.a,x)
x=V.Q("A","Z")
C.a.h(y.a,x)
x=z.k(0,"Id").l(0,"Id")
y=V.v(new H.u("_"))
C.a.h(x.a,y)
y=V.Q("0","9")
C.a.h(x.a,y)
y=V.Q("a","z")
C.a.h(x.a,y)
y=V.Q("A","Z")
C.a.h(x.a,y)
y=z.k(0,"Start").l(0,"Int")
x=V.Q("0","9")
C.a.h(y.a,x)
x=z.k(0,"Int").l(0,"Int")
y=V.Q("0","9")
C.a.h(x.a,y)
y=z.k(0,"Int").l(0,"FloatDot")
x=V.v(new H.u("."))
C.a.h(y.a,x)
x=z.k(0,"FloatDot").l(0,"Float")
y=V.Q("0","9")
C.a.h(x.a,y)
y=z.k(0,"Float").l(0,"Float")
x=V.Q("0","9")
C.a.h(y.a,x)
x=z.k(0,"Start").l(0,"Sym")
y=V.v(new H.u("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.k(0,"Sym").l(0,"Sym")
x=V.v(new H.u("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.k(0,"Start").l(0,"OpenDoubleStr")
y=V.v(new H.u('"'))
C.a.h(x.a,y)
y=z.k(0,"OpenDoubleStr").l(0,"CloseDoubleStr")
x=V.v(new H.u('"'))
C.a.h(y.a,x)
x=z.k(0,"OpenDoubleStr").l(0,"EscDoubleStr")
y=V.v(new H.u("\\"))
C.a.h(x.a,y)
y=z.k(0,"EscDoubleStr").l(0,"OpenDoubleStr")
x=V.v(new H.u('"'))
C.a.h(y.a,x)
C.a.h(z.k(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.bw())
x=z.k(0,"Start").l(0,"OpenSingleStr")
y=V.v(new H.u("'"))
C.a.h(x.a,y)
y=z.k(0,"OpenSingleStr").l(0,"CloseSingleStr")
x=V.v(new H.u("'"))
C.a.h(y.a,x)
x=z.k(0,"OpenSingleStr").l(0,"EscSingleStr")
y=V.v(new H.u("\\"))
C.a.h(x.a,y)
y=z.k(0,"EscSingleStr").l(0,"OpenSingleStr")
x=V.v(new H.u("'"))
C.a.h(y.a,x)
C.a.h(z.k(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.bw())
x=z.k(0,"Start").l(0,"Slash")
y=V.v(new H.u("/"))
C.a.h(x.a,y)
y=z.k(0,"Slash").l(0,"Comment")
x=V.v(new H.u("/"))
C.a.h(y.a,x)
x=z.k(0,"Comment").l(0,"EndComment")
y=V.v(new H.u("\n"))
C.a.h(x.a,y)
y=z.k(0,"Comment").l(0,"Comment")
x=new V.aA()
w=[V.aI]
x.sa9(H.c([],w))
C.a.h(y.a,x)
y=V.v(new H.u("\n"))
C.a.h(x.a,y)
y=z.k(0,"Slash").l(0,"MLComment")
x=V.v(new H.u("*"))
C.a.h(y.a,x)
x=z.k(0,"MLComment").l(0,"MLCStar")
y=V.v(new H.u("*"))
C.a.h(x.a,y)
y=z.k(0,"MLCStar").l(0,"MLComment")
x=new V.aA()
x.sa9(H.c([],w))
C.a.h(y.a,x)
y=V.v(new H.u("*"))
C.a.h(x.a,y)
y=z.k(0,"MLCStar").l(0,"EndComment")
x=V.v(new H.u("/"))
C.a.h(y.a,x)
x=z.k(0,"Start").l(0,"Whitespace")
y=V.v(new H.u(" \n\t"))
C.a.h(x.a,y)
y=z.k(0,"Whitespace").l(0,"Whitespace")
x=V.v(new H.u(" \n\t"))
C.a.h(y.a,x)
x=z.k(0,"Int")
x.d=x.a.P("Num")
x=z.k(0,"Float")
x.d=x.a.P("Num")
x=z.k(0,"Sym")
x.d=x.a.P("Symbol")
x=z.k(0,"CloseDoubleStr")
x.d=x.a.P("String")
x=z.k(0,"CloseSingleStr")
x.d=x.a.P("String")
x=z.k(0,"EndComment")
x.d=x.a.P("Comment")
x=z.k(0,"Whitespace")
x.d=x.a.P("Whitespace")
x=z.k(0,"Id")
y=x.a.P("Id")
x.d=y
x=[P.i]
y.aK(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.aK(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.aK(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
ir:{"^":"b_;a,0b,0c,0d",
bZ:function(a){switch(a.a){case"Builtin":this.M(a.b,"#411")
break
case"Comment":this.M(a.b,"#777")
break
case"Id":this.M(a.b,"#111")
break
case"Num":this.M(a.b,"#191")
break
case"Preprocess":this.M(a.b,"#737")
break
case"Reserved":this.M(a.b,"#119")
break
case"Symbol":this.M(a.b,"#611")
break
case"Type":this.M(a.b,"#171")
break
case"Whitespace":this.M(a.b,"#111")
break}},
bI:function(){var z,y,x,w
z=V.cz()
z.c=z.k(0,"Start")
y=z.k(0,"Start").l(0,"Id")
x=V.v(new H.u("_"))
C.a.h(y.a,x)
x=V.Q("a","z")
C.a.h(y.a,x)
x=V.Q("A","Z")
C.a.h(y.a,x)
x=z.k(0,"Id").l(0,"Id")
y=V.v(new H.u("_"))
C.a.h(x.a,y)
y=V.Q("0","9")
C.a.h(x.a,y)
y=V.Q("a","z")
C.a.h(x.a,y)
y=V.Q("A","Z")
C.a.h(x.a,y)
y=z.k(0,"Start").l(0,"Int")
x=V.Q("0","9")
C.a.h(y.a,x)
x=z.k(0,"Int").l(0,"Int")
y=V.Q("0","9")
C.a.h(x.a,y)
y=z.k(0,"Int").l(0,"FloatDot")
x=V.v(new H.u("."))
C.a.h(y.a,x)
x=z.k(0,"FloatDot").l(0,"Float")
y=V.Q("0","9")
C.a.h(x.a,y)
y=z.k(0,"Float").l(0,"Float")
x=V.Q("0","9")
C.a.h(y.a,x)
x=z.k(0,"Start").l(0,"Sym")
y=V.v(new H.u("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.k(0,"Sym").l(0,"Sym")
x=V.v(new H.u("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.k(0,"Start").l(0,"Slash")
y=V.v(new H.u("/"))
C.a.h(x.a,y)
y=z.k(0,"Slash").l(0,"Comment")
x=V.v(new H.u("/"))
C.a.h(y.a,x)
C.a.h(z.k(0,"Slash").l(0,"Sym").a,new V.bw())
x=z.k(0,"Comment").l(0,"EndComment")
y=V.v(new H.u("\n"))
C.a.h(x.a,y)
y=z.k(0,"Comment").l(0,"Comment")
x=new V.aA()
w=[V.aI]
x.sa9(H.c([],w))
C.a.h(y.a,x)
y=V.v(new H.u("\n"))
C.a.h(x.a,y)
y=z.k(0,"Start").l(0,"Preprocess")
x=V.v(new H.u("#"))
C.a.h(y.a,x)
x=z.k(0,"Preprocess").l(0,"Preprocess")
y=new V.aA()
y.sa9(H.c([],w))
C.a.h(x.a,y)
x=V.v(new H.u("\n"))
C.a.h(y.a,x)
x=z.k(0,"Preprocess").l(0,"EndPreprocess")
y=V.v(new H.u("\n"))
C.a.h(x.a,y)
y=z.k(0,"Start").l(0,"Whitespace")
x=V.v(new H.u(" \n\t"))
C.a.h(y.a,x)
x=z.k(0,"Whitespace").l(0,"Whitespace")
y=V.v(new H.u(" \n\t"))
C.a.h(x.a,y)
y=z.k(0,"Int")
y.d=y.a.P("Num")
y=z.k(0,"Float")
y.d=y.a.P("Num")
y=z.k(0,"Sym")
y.d=y.a.P("Symbol")
y=z.k(0,"EndComment")
y.d=y.a.P("Comment")
y=z.k(0,"EndPreprocess")
y.d=y.a.P("Preprocess")
y=z.k(0,"Whitespace")
y.d=y.a.P("Whitespace")
y=z.k(0,"Id")
x=y.a.P("Id")
y.d=x
y=[P.i]
x.aK(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.aK(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.aK(0,"Builtin",H.c(["gl_FragColor","gl_Position"],y))
return z}},
is:{"^":"b_;a,0b,0c,0d",
bZ:function(a){switch(a.a){case"Attr":this.M(a.b,"#911")
this.M("=","#111")
break
case"Id":this.M(a.b,"#111")
break
case"Other":this.M(a.b,"#111")
break
case"Reserved":this.M(a.b,"#119")
break
case"String":this.M(a.b,"#171")
break
case"Symbol":this.M(a.b,"#616")
break}},
bI:function(){var z,y,x
z=V.cz()
z.c=z.k(0,"Start")
y=z.k(0,"Start").l(0,"Id")
x=V.v(new H.u("_"))
C.a.h(y.a,x)
x=V.Q("a","z")
C.a.h(y.a,x)
x=V.Q("A","Z")
C.a.h(y.a,x)
x=z.k(0,"Id").l(0,"Id")
y=V.v(new H.u("_"))
C.a.h(x.a,y)
y=V.Q("0","9")
C.a.h(x.a,y)
y=V.Q("a","z")
C.a.h(x.a,y)
y=V.Q("A","Z")
C.a.h(x.a,y)
y=z.k(0,"Id").l(0,"Attr")
x=V.v(new H.u("="))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Start").l(0,"Sym")
x=V.v(new H.u("</\\-!>="))
C.a.h(y.a,x)
x=z.k(0,"Sym").l(0,"Sym")
y=V.v(new H.u("</\\-!>="))
C.a.h(x.a,y)
y=z.k(0,"Start").l(0,"OpenStr")
x=V.v(new H.u('"'))
C.a.h(y.a,x)
x=z.k(0,"OpenStr").l(0,"CloseStr")
y=V.v(new H.u('"'))
C.a.h(x.a,y)
y=z.k(0,"OpenStr").l(0,"EscStr")
x=V.v(new H.u("\\"))
C.a.h(y.a,x)
x=z.k(0,"EscStr").l(0,"OpenStr")
y=V.v(new H.u('"'))
C.a.h(x.a,y)
C.a.h(z.k(0,"OpenStr").l(0,"OpenStr").a,new V.bw())
C.a.h(z.k(0,"Start").l(0,"Other").a,new V.bw())
y=z.k(0,"Other").l(0,"Other")
x=new V.aA()
x.sa9(H.c([],[V.aI]))
C.a.h(y.a,x)
y=V.v(new H.u('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.Q("a","z")
C.a.h(x.a,y)
y=V.Q("A","Z")
C.a.h(x.a,y)
y=z.k(0,"Sym")
y.d=y.a.P("Symbol")
y=z.k(0,"CloseStr")
y.d=y.a.P("String")
y=z.k(0,"Id")
x=y.a.P("Id")
y.d=x
x.aK(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.i]))
x=z.k(0,"Attr")
x.d=x.a.P("Attr")
x=z.k(0,"Other")
x.d=x.a.P("Other")
return z}},
js:{"^":"b_;a,0b,0c,0d",
eZ:function(a){H.k(a,"$isb",[P.i],"$asb")
this.sci(H.c([],[[P.b,W.b1]]))
this.M(C.a.l(a,"\n"),"#111")},
bZ:function(a){},
bI:function(){return}},
k0:{"^":"a;0a,0b",
fN:function(a,b){var z,y,x,w,v,u,t
z=document
y=z.body
x=z.createElement("div")
x.className="scrollTop";(y&&C.p).C(y,x)
w=z.createElement("div")
w.className="scrollPage"
C.p.C(y,w)
v=z.createElement("div")
v.className="pageCenter"
C.j.C(w,v)
if(a.length!==0){z.title=a
u=z.createElement("div")
u.className="pageTitle"
u.textContent=a
C.j.C(v,u)}t=z.createElement("div")
this.a=t
C.j.C(v,t)
this.b=null
t=W.ac
W.a1(z,"scroll",H.l(new V.k3(x),{func:1,ret:-1,args:[t]}),!1,t)},
e6:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.k(a,"$isb",[P.i],"$asb")
this.iE()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.f9(C.a.k0(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
switch(u.a){case"Bold":t=z.createElement("div")
t.className="boldPar"
t.textContent=u.b
C.j.C(y,t)
break
case"Italic":t=z.createElement("div")
t.className="italicPar"
t.textContent=u.b
C.j.C(y,t)
break
case"Code":t=z.createElement("div")
t.className="codePar"
t.textContent=u.b
C.j.C(y,t)
break
case"Link":s=u.b
if(H.hw(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.f(r,1)
q.href=H.D(r[1])
q.textContent=H.D(r[0])
C.j.C(y,q)}else{p=P.c9(C.I,s,C.m,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.j(p)
q.textContent=s
C.j.C(y,q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
C.j.C(y,t)
break}}C.j.C(this.a,y)},
fl:function(a){var z,y,x,w
z=new V.i2("dart")
z.by("dart")
y=new V.ir("glsl")
y.by("glsl")
x=new V.is("html")
x.by("html")
w=C.a.jR(H.c([z,y,x],[V.b_]),new V.k4(a))
if(w!=null)return w
z=new V.js("plain")
z.by("plain")
return z},
e4:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.k(a2,"$isb",[P.i],"$asb")
z=H.c([],[P.m])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.bR(w).a6(w,"+")){C.a.p(a2,x,C.c.as(w,1))
C.a.h(z,1)
y=!0}else if(C.c.a6(w,"-")){C.a.p(a2,x,C.c.as(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.fl(a0)
v.eZ(a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
C.j.C(t,s)
C.j.C(this.a,t)
r=P.c9(C.I,a,C.m,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.e4(null)
n.href="#"+H.j(r)
n.textContent=a
C.j.C(o,n)
C.x.C(p,o)
C.n.C(q,p)
C.o.C(s,q)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.z)(w),++e)C.x.C(f,w[e])
C.n.C(j,i)
C.n.C(j,h)
C.n.C(j,f)
C.o.C(s,j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.z)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gV(w);b.A();)C.x.C(h,b.gH())
C.n.C(j,i)
C.n.C(j,h)
C.o.C(s,j)}},
jl:function(a){var z,y,x,w,v,u,t
H.k(a,"$isb",[P.i],"$asb")
z=document
y=z.createElement("table")
y.id="shellTable"
x=y.style
x.width="100%"
x.padding="0px"
x.marginLeft="auto"
x.marginRight="auto"
C.j.C(this.a,y)
w=C.o.hz(y,-1)
x=H.d((w&&C.n).dN(w,-1),"$iscy").style
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
t=H.d(C.n.dN(w,-1),"$iscy")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto";(t&&C.x).C(t,u)}},
iE:function(){var z,y,x,w
if(this.b!=null)return
z=V.cz()
z.c=z.k(0,"Start")
y=z.k(0,"Start").l(0,"Bold")
x=V.v(new H.u("*"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Bold").l(0,"Bold")
x=new V.aA()
w=[V.aI]
x.sa9(H.c([],w))
C.a.h(y.a,x)
y=V.v(new H.u("*"))
C.a.h(x.a,y)
y=z.k(0,"Bold").l(0,"BoldEnd")
x=V.v(new H.u("*"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Start").l(0,"Italic")
x=V.v(new H.u("_"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Italic").l(0,"Italic")
x=new V.aA()
x.sa9(H.c([],w))
C.a.h(y.a,x)
y=V.v(new H.u("_"))
C.a.h(x.a,y)
y=z.k(0,"Italic").l(0,"ItalicEnd")
x=V.v(new H.u("_"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Start").l(0,"Code")
x=V.v(new H.u("`"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Code").l(0,"Code")
x=new V.aA()
x.sa9(H.c([],w))
C.a.h(y.a,x)
y=V.v(new H.u("`"))
C.a.h(x.a,y)
y=z.k(0,"Code").l(0,"CodeEnd")
x=V.v(new H.u("`"))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"Start").l(0,"LinkHead")
x=V.v(new H.u("["))
C.a.h(y.a,x)
y.c=!0
y=z.k(0,"LinkHead").l(0,"LinkTail")
x=V.v(new H.u("|"))
C.a.h(y.a,x)
x=z.k(0,"LinkHead").l(0,"LinkEnd")
y=V.v(new H.u("]"))
C.a.h(x.a,y)
x.c=!0
x=z.k(0,"LinkHead").l(0,"LinkHead")
y=new V.aA()
y.sa9(H.c([],w))
C.a.h(x.a,y)
x=V.v(new H.u("|]"))
C.a.h(y.a,x)
x=z.k(0,"LinkTail").l(0,"LinkEnd")
y=V.v(new H.u("]"))
C.a.h(x.a,y)
x.c=!0
x=z.k(0,"LinkTail").l(0,"LinkTail")
y=new V.aA()
y.sa9(H.c([],w))
C.a.h(x.a,y)
x=V.v(new H.u("|]"))
C.a.h(y.a,x)
C.a.h(z.k(0,"Start").l(0,"Other").a,new V.bw())
x=z.k(0,"Other").l(0,"Other")
y=new V.aA()
y.sa9(H.c([],w))
C.a.h(x.a,y)
x=V.v(new H.u("*_`["))
C.a.h(y.a,x)
x=z.k(0,"BoldEnd")
x.d=x.a.P("Bold")
x=z.k(0,"ItalicEnd")
x.d=x.a.P("Italic")
x=z.k(0,"CodeEnd")
x.d=x.a.P("Code")
x=z.k(0,"LinkEnd")
x.d=x.a.P("Link")
x=z.k(0,"Other")
x.d=x.a.P("Other")
this.b=z},
q:{
k1:function(a,b){var z=new V.k0()
z.fN(a,!0)
return z}}},
k3:{"^":"n:29;a",
$1:function(a){P.ff(C.y,new V.k2(this.a))}},
k2:{"^":"n:2;a",
$0:function(){var z,y,x
z=C.k.aq(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}},
k4:{"^":"n:54;a",
$1:function(a){return H.d(a,"$isb_").a===this.a}},
kf:{"^":"a;a,b,0c,d",
aD:function(a,b,c){var z,y,x,w,v
z=W.ev(null,null,null)
z.src=b
z.width=64
z.height=64
y=z.style
y.border="solid 2px white"
y=J.ce(this.c)
x=y.gm(y)
y=W.ad
W.a1(z,"click",H.l(new V.kh(this,z,b,x),{func:1,ret:-1,args:[y]}),!1,y)
J.ce(this.c).h(0,z)
J.ce(this.c).h(0,document.createElement("br"))
w=P.fw().gd2().j(0,H.j(this.a))
if(w==null){this.e1(x)
v=c}else v=P.bT(w,null,null)===x
if(v)z.click()},
h:function(a,b){return this.aD(a,b,!1)},
e1:function(a){var z,y,x,w,v
z=P.fw()
y=P.i
x=P.iZ(z.gd2(),y,y)
x.p(0,this.a,""+a)
w=z.f5(0,x)
y=window.history
v=w.i(0)
y.toString;(y&&C.W).ir(y,new P.lQ([],[]).d8(""),"",v)}},
kh:{"^":"n:55;a,b,c,d",
$1:function(a){var z,y
H.d(a,"$isad")
z=this.a
y=J.ce(z.c)
y.K(y,new V.kg())
y=this.b.style
y.border="solid 2px black"
z.d.$1(this.c)
z.e1(this.d)}},
kg:{"^":"n:56;",
$1:function(a){var z
H.d(a,"$isJ")
if(!!J.M(a).$isd6){z=a.style
z.border="solid 2px white"}}}}],["","",,N,{"^":"",
hs:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=V.k1("Test 006",!0)
y=W.d_(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
C.j.C(z.a,y)
x=[P.i]
z.e6(H.c(["A test of the Material Lighting shader with a bumpy 2D texture and ","a directional light. Select different bump maps for the test. ","The additional lines are part of shape inspection."],x))
z.jl(H.c(["bumpMaps"],x))
z.e6(H.c(["\xab[Back to Tests|../]"],x))
x=document
w=C.z.df(x,"testCanvas")
if(w==null)H.p(P.r("Failed to find an element with the identifier, testCanvas."))
v=E.km(w,!0,!0,!0,!1)
u=F.bG()
F.bM(u,null,null,1,1,1,0,0,1)
F.bM(u,null,null,1,1,0,1,0,3)
F.bM(u,null,null,1,1,0,0,1,2)
F.bM(u,null,null,1,1,-1,0,0,0)
F.bM(u,null,null,1,1,0,-1,0,0)
F.bM(u,null,null,1,1,0,0,-1,3)
u.aI()
t=new O.j9()
t.shb(O.d2(V.ap))
t.e.bx(t.ghP(),t.ghQ())
s=new O.bd(t,"emission")
s.c=C.d
s.f=new V.a8(0,0,0)
t.f=s
s=new O.bd(t,"ambient")
s.c=C.d
s.f=new V.a8(0,0,0)
t.r=s
s=new O.bd(t,"diffuse")
s.c=C.d
s.f=new V.a8(0,0,0)
t.x=s
s=new O.bd(t,"invDiffuse")
s.c=C.d
s.f=new V.a8(0,0,0)
t.y=s
s=new O.jf(t,"specular")
s.c=C.d
s.f=new V.a8(0,0,0)
s.ch=100
t.z=s
s=new O.jc(t,"bump")
s.c=C.d
t.Q=s
t.ch=null
s=new O.bd(t,"reflect")
s.c=C.d
s.f=new V.a8(0,0,0)
t.cx=s
s=new O.je(t,"refract")
s.c=C.d
s.f=new V.a8(0,0,0)
s.ch=1
t.cy=s
s=new O.jb(t,"alpha")
s.c=C.d
s.f=1
t.db=s
s=new D.iS()
s.c9(D.a5)
s.shm(H.c([],[D.ci]))
s.sig(H.c([],[D.eT]))
s.siI(H.c([],[D.f3]))
s.siT(H.c([],[D.fb]))
s.siU(H.c([],[D.fc]))
s.siV(H.c([],[D.fd]))
s.Q=null
s.ch=null
s.dj(s.ghO(),s.gi8(),s.gia())
t.dx=s
r=s.Q
if(r==null){r=D.K()
s.Q=r
s=r}else s=r
s.h(0,t.git())
s=t.dx
r=s.ch
if(r==null){r=D.K()
s.ch=r
s=r}else s=r
s.h(0,t.gbB())
t.dy=null
s=t.dx
q=V.fH()
r=U.eh(V.eL(V.eV(),q,new V.U(0,0,-1)))
p=new V.a8(1,1,1)
o=new D.ci()
o.c=new V.a8(1,1,1)
o.a=V.kZ()
n=o.b
o.b=r
r.gw().h(0,o.gfV())
r=new D.F("mover",n,o.b,o,[U.ae])
r.b=!0
o.aO(r)
if(!o.c.v(0,p)){n=o.c
o.c=p
r=new D.F("color",n,p,o,[V.a8])
r.b=!0
o.aO(r)}s.h(0,o)
s=t.r
s.sa5(0,new V.a8(0,0,1))
s=t.x
s.sa5(0,new V.a8(0,1,0))
s=t.z
s.sa5(0,new V.a8(1,0,0))
s=t.z
if(s.c===C.d){s.c=C.i
s.c8()
s.ct(100)
r=s.a
r.a=null
r.Y(null)}s.ct(10)
m=E.d5(null,!0,null,"",null,null)
m.sc6(0,u)
m.sd5(t)
l=E.d5(null,!0,null,"",null,null)
l.sc6(0,u)
s=new O.iA()
s.b=V.fF()
s.c=new V.a2(0.2,0.3,0.4,1)
s.d=new V.a2(0.1,0.2,0.3,1)
s.e=new V.a2(0.7,0.7,0.7,1)
s.f=new V.a2(0.3,0.3,0.3,1)
s.r=new V.a2(0.5,0.5,0.5,1)
s.x=new V.a2(0.5,0.5,0.5,1)
s.y=new V.a2(1,1,1,1)
s.z=new V.a2(0.8,0.8,0.8,1)
s.Q=!1
s.ch=!1
s.cx=!1
s.cy=!1
s.db=!1
s.dx=!1
s.dy=!1
s.fr=!1
s.fx=!1
s.fy=!1
s.go=!1
s.id=!1
s.k1=!1
s.k2=!1
s.k3=!1
s.k4=!1
s.r1=!1
s.r2=1
if(!$.q.$2(1,0.4)){s.r2=0.4
r=new D.F("vectorScale",1,0.4,s,[P.y])
r.b=!0
s.Y(r)}if(!s.ch){s.ch=!0
r=new D.F("showWireFrame",!1,!0,s,[P.G])
r.b=!0
s.Y(r)}if(!s.k3){s.k3=!0
r=new D.F("showAxis",!1,!0,s,[P.G])
r.b=!0
s.Y(r)}if(!s.cy){s.cy=!0
r=new D.F("showNormals",!1,!0,s,[P.G])
r.b=!0
s.Y(r)}if(!s.db){s.db=!0
r=new D.F("showBinormals",!1,!0,s,[P.G])
r.b=!0
s.Y(r)}l.sd5(s)
k=E.d5(null,!0,null,"",null,null)
k.y.h(0,l)
k.y.h(0,m)
s=new U.eu()
s.c9(U.ae)
s.bx(s.ghN(),s.gi9())
s.e=null
s.f=V.c4()
s.r=0
r=v.r
o=new U.kP()
j=U.d3()
j.sda(0,!0)
j.scX(6.283185307179586)
j.scZ(0)
j.sac(0,0)
j.scY(100)
j.sX(0)
j.scI(0.5)
o.b=j
i=o.gaP()
j.gw().h(0,i)
j=U.d3()
j.sda(0,!0)
j.scX(6.283185307179586)
j.scZ(0)
j.sac(0,0)
j.scY(100)
j.sX(0)
j.scI(0.5)
o.c=j
j.gw().h(0,i)
o.d=null
o.e=!1
o.f=!1
o.r=!1
o.x=2.5
o.y=2.5
o.z=2
o.Q=4
o.cx=!1
o.ch=!1
o.cy=0
o.db=0
o.dx=null
o.dy=0
o.fr=null
o.fx=null
h=new X.aK(!1,!1,!1)
n=o.d
o.d=h
j=[X.aK]
i=new D.F("modifiers",n,h,o,j)
i.b=!0
o.W(i)
i=o.f
if(i!==!1){o.f=!1
i=new D.F("invertX",i,!1,o,[P.G])
i.b=!0
o.W(i)}i=o.r
if(i!==!0){o.r=!0
i=new D.F("invertY",i,!0,o,[P.G])
i.b=!0
o.W(i)}o.bg(r)
s.h(0,o)
r=v.r
o=new U.kO()
i=U.d3()
i.sda(0,!0)
i.scX(6.283185307179586)
i.scZ(0)
i.sac(0,0)
i.scY(100)
i.sX(0)
i.scI(0.2)
o.b=i
i.gw().h(0,o.gaP())
o.c=null
o.d=!1
o.e=2.5
o.f=2
o.r=4
o.y=!1
o.x=!1
o.z=0
o.Q=null
o.ch=0
o.cx=null
o.cy=null
h=new X.aK(!0,!1,!1)
n=o.c
o.c=h
i=new D.F("modifiers",n,h,o,j)
i.b=!0
o.W(i)
o.bg(r)
s.h(0,o)
r=v.r
o=new U.kQ()
o.c=0.01
o.d=0
o.e=0
h=new X.aK(!1,!1,!1)
o.b=h
j=new D.F("modifiers",null,h,o,j)
j.b=!0
o.W(j)
o.bg(r)
s.h(0,o)
k.sbk(s)
s=new M.ig()
s.shg(0,O.d2(E.ax))
s.d.bx(s.ghT(),s.ghU())
s.e=null
s.f=null
s.r=null
s.x=null
g=new X.jq()
g.c=1.0471975511965976
g.d=0.1
g.e=2000
g.sbk(null)
r=g.c
if(!$.q.$2(r,1.0471975511965976)){n=g.c
g.c=1.0471975511965976
r=new D.F("fov",n,1.0471975511965976,g,[P.y])
r.b=!0
g.b8(r)}r=g.d
if(!$.q.$2(r,0.1)){n=g.d
g.d=0.1
r=new D.F("near",n,0.1,g,[P.y])
r.b=!0
g.b8(r)}r=g.e
if(!$.q.$2(r,2000)){n=g.e
g.e=2000
r=new D.F("far",n,2000,g,[P.y])
r.b=!0
g.b8(r)}r=s.a
if(r!==g){if(r!=null)r.gw().a4(0,s.gaQ())
n=s.a
s.a=g
g.gw().h(0,s.gaQ())
r=new D.F("camera",n,s.a,s,[X.ed])
r.b=!0
s.b7(r)}f=new X.iq()
r=new V.a2(0,0,0,1)
f.a=r
f.b=!0
f.c=2000
f.d=!0
f.e=0
f.f=!1
r=$.f0
if(r==null){r=V.f_(0,0,1,1)
$.f0=r}f.r=r
r=s.b
if(r!==f){if(r!=null)r.gw().a4(0,s.gaQ())
n=s.b
s.b=f
f.gw().h(0,s.gaQ())
r=new D.F("target",n,s.b,s,[X.f7])
r.b=!0
s.b7(r)}s.d.h(0,k)
s.a.sbk(U.eh(V.aJ(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
r=v.d
if(r!==s){if(r!=null)r.gw().a4(0,v.gdn())
v.d=s
s.gw().h(0,v.gdn())
v.fR()}s=new V.kf("bumpMaps",!0,new N.n3(t,v))
x=C.z.df(x,"bumpMaps")
s.c=x
if(x==null)H.p("Failed to find bumpMaps for Texture2DGroup")
s.aD(0,"../resources/BumpMap1.png",!0)
s.h(0,"../resources/BumpMap2.png")
s.h(0,"../resources/BumpMap3.png")
s.h(0,"../resources/BumpMap4.png")
s.h(0,"../resources/BumpMap5.png")
s.h(0,"../resources/ScrewBumpMap.png")
s.h(0,"../resources/CtrlPnlBumpMap.png")
x=v.z
if(x==null){x=D.K()
v.z=x}s={func:1,ret:-1,args:[D.x]}
r=H.l(new N.n4(z,t),s)
if(x.b==null)x.sbd(H.c([],[s]))
x=x.b;(x&&C.a).h(x,r)
V.nb(v)},
n3:{"^":"n:17;a,b",
$1:function(a){var z,y,x
z=this.a.Q
y=this.b.f.k8(a)
x=z.c
if(x!==C.e){if(x===C.d)z.bc()
z.c=C.e
z.iC(null)
x=z.a
x.a=null
x.Y(null)}z.iB(y)}},
n4:{"^":"n:8;a,b",
$1:function(a){var z,y,x,w
H.d(a,"$isx")
z=this.a
y=this.b
x=y.a
w=[P.i]
z.e4("Vertex Shader","glsl",0,H.c((x==null?null:x.c).split("\n"),w))
y=y.a
z.e4("Fragment Shader","glsl",0,H.c((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.M=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ez.prototype
return J.ey.prototype}if(typeof a=="string")return J.cq.prototype
if(a==null)return J.eA.prototype
if(typeof a=="boolean")return J.iN.prototype
if(a.constructor==Array)return J.bc.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c2.prototype
return a}if(a instanceof P.a)return a
return J.cN(a)}
J.bs=function(a){if(typeof a=="string")return J.cq.prototype
if(a==null)return a
if(a.constructor==Array)return J.bc.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c2.prototype
return a}if(a instanceof P.a)return a
return J.cN(a)}
J.dX=function(a){if(a==null)return a
if(a.constructor==Array)return J.bc.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c2.prototype
return a}if(a instanceof P.a)return a
return J.cN(a)}
J.mR=function(a){if(typeof a=="number")return J.cp.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cC.prototype
return a}
J.bR=function(a){if(typeof a=="string")return J.cq.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cC.prototype
return a}
J.Z=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c2.prototype
return a}if(a instanceof P.a)return a
return J.cN(a)}
J.P=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.M(a).v(a,b)}
J.hy=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mR(a).S(a,b)}
J.hz=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.n1(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bs(a).j(a,b)}
J.hA=function(a,b,c,d){return J.Z(a).h6(a,b,c,d)}
J.hB=function(a,b){return J.bR(a).G(a,b)}
J.cc=function(a,b){return J.Z(a).il(a,b)}
J.cS=function(a,b,c){return J.Z(a).iq(a,b,c)}
J.e2=function(a,b){return J.Z(a).C(a,b)}
J.hC=function(a,b){return J.bR(a).a1(a,b)}
J.cT=function(a,b,c){return J.bs(a).jx(a,b,c)}
J.cd=function(a,b){return J.dX(a).aa(a,b)}
J.hD=function(a,b,c,d){return J.Z(a).jO(a,b,c,d)}
J.hE=function(a){return J.Z(a).gjq(a)}
J.ce=function(a){return J.Z(a).gcF(a)}
J.bU=function(a){return J.M(a).ga_(a)}
J.ba=function(a){return J.dX(a).gV(a)}
J.av=function(a){return J.bs(a).gm(a)}
J.hF=function(a){return J.Z(a).gks(a)}
J.hG=function(a){return J.Z(a).gkD(a)}
J.cU=function(a,b){return J.Z(a).b6(a,b)}
J.e3=function(a){return J.dX(a).ku(a)}
J.hH=function(a,b){return J.Z(a).kw(a,b)}
J.hI=function(a,b,c){return J.Z(a).fv(a,b,c)}
J.hJ=function(a,b,c){return J.bR(a).t(a,b,c)}
J.hK=function(a){return J.bR(a).kL(a)}
J.ah=function(a){return J.M(a).i(a)}
I.a7=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.cf.prototype
C.q=W.cZ.prototype
C.D=W.d0.prototype
C.j=W.b1.prototype
C.T=W.i7.prototype
C.V=W.it.prototype
C.W=W.iu.prototype
C.z=W.iw.prototype
C.Y=J.H.prototype
C.a=J.bc.prototype
C.Z=J.ey.prototype
C.h=J.ez.prototype
C.r=J.eA.prototype
C.k=J.cp.prototype
C.c=J.cq.prototype
C.a5=J.c2.prototype
C.ab=W.jl.prototype
C.L=J.jr.prototype
C.M=W.jH.prototype
C.b=P.dj.prototype
C.x=W.cy.prototype
C.o=W.kb.prototype
C.n=W.kc.prototype
C.C=J.cC.prototype
C.N=W.bI.prototype
C.O=W.l8.prototype
C.Q=new P.hO(!1)
C.P=new P.hN(C.Q)
C.R=new P.jp()
C.S=new P.kY()
C.l=new P.lG()
C.d=new A.ch(0,"ColorSourceType.None")
C.i=new A.ch(1,"ColorSourceType.Solid")
C.e=new A.ch(2,"ColorSourceType.Texture2D")
C.f=new A.ch(3,"ColorSourceType.TextureCube")
C.y=new P.by(0)
C.U=new P.by(5e6)
C.X=new P.iy("element",!0,!1,!1,!1)
C.a_=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.a0=function(hooks) {
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

C.a1=function(getTagFallback) {
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
C.a2=function() {
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
C.a3=function(hooks) {
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
C.a4=function(hooks) {
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
C.G=H.c(I.a7([127,2047,65535,1114111]),[P.m])
C.t=H.c(I.a7([0,0,32776,33792,1,10240,0,0]),[P.m])
C.a6=H.c(I.a7(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.i])
C.u=H.c(I.a7([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.v=H.c(I.a7([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.a7=H.c(I.a7(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.i])
C.H=H.c(I.a7([]),[P.i])
C.a8=H.c(I.a7([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.I=H.c(I.a7([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.w=H.c(I.a7([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.J=H.c(I.a7([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.a9=H.c(I.a7([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.K=H.c(I.a7([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.A=H.c(I.a7(["bind","if","ref","repeat","syntax"]),[P.i])
C.B=H.c(I.a7(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.i])
C.aa=new H.i_(0,{},C.H,[P.i,P.i])
C.m=new P.kR(!1)
$.aF=0
$.bx=null
$.e8=null
$.dO=!1
$.hp=null
$.hk=null
$.hv=null
$.cM=null
$.cP=null
$.dY=null
$.bo=null
$.bN=null
$.bO=null
$.dP=!1
$.R=C.l
$.aQ=null
$.d4=null
$.es=null
$.er=null
$.en=null
$.em=null
$.el=null
$.ek=null
$.q=V.jg()
$.eM=null
$.eU=null
$.bE=null
$.f0=null
$.fA=null
$.fE=null
$.fC=null
$.fD=null
$.cD=null
$.fB=null
$.iF="uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n"
$.iD="precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n"
$.eS=null
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
I.$lazy(y,x,w)}})(["ej","$get$ej",function(){return H.ho("_$dart_dartClosure")},"d9","$get$d9",function(){return H.ho("_$dart_js")},"fj","$get$fj",function(){return H.aN(H.cA({
toString:function(){return"$receiver$"}}))},"fk","$get$fk",function(){return H.aN(H.cA({$method$:null,
toString:function(){return"$receiver$"}}))},"fl","$get$fl",function(){return H.aN(H.cA(null))},"fm","$get$fm",function(){return H.aN(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"fq","$get$fq",function(){return H.aN(H.cA(void 0))},"fr","$get$fr",function(){return H.aN(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fo","$get$fo",function(){return H.aN(H.fp(null))},"fn","$get$fn",function(){return H.aN(function(){try{null.$method$}catch(z){return z.message}}())},"ft","$get$ft",function(){return H.aN(H.fp(void 0))},"fs","$get$fs",function(){return H.aN(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dJ","$get$dJ",function(){return P.l9()},"bP","$get$bP",function(){return[]},"fz","$get$fz",function(){return P.kV()},"fP","$get$fP",function(){return H.jj(H.bn(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"h8","$get$h8",function(){return P.jM("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"hg","$get$hg",function(){return P.mt()},"ei","$get$ei",function(){return{}},"fT","$get$fT",function(){return P.eE(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.i)},"dK","$get$dK",function(){return P.eD(P.i,P.c_)},"fK","$get$fK",function(){return Z.as(0)},"fI","$get$fI",function(){return Z.as(511)},"aE","$get$aE",function(){return Z.as(1)},"aD","$get$aD",function(){return Z.as(2)},"aC","$get$aC",function(){return Z.as(4)},"aW","$get$aW",function(){return Z.as(8)},"aX","$get$aX",function(){return Z.as(16)},"b6","$get$b6",function(){return Z.as(32)},"bH","$get$bH",function(){return Z.as(64)},"fJ","$get$fJ",function(){return Z.as(96)},"bl","$get$bl",function(){return Z.as(128)},"aV","$get$aV",function(){return Z.as(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:-1,opt:[D.x]},{func:1,ret:-1,args:[D.x]},{func:1,ret:P.C},{func:1,ret:-1},{func:1,ret:-1,args:[W.ad]},{func:1,ret:P.C,args:[F.a4]},{func:1,ret:P.C,args:[,,]},{func:1,ret:-1,args:[P.m,[P.o,E.ax]]},{func:1,ret:P.C,args:[D.x]},{func:1,ret:-1,args:[W.ac]},{func:1,ret:-1,args:[W.bk]},{func:1,ret:F.af,args:[F.af]},{func:1,ret:P.C,args:[F.Y]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.G,args:[W.J,P.i,P.i,W.c8]},{func:1,ret:P.C,args:[,]},{func:1,ret:P.i,args:[P.m]},{func:1,ret:P.C,args:[P.i]},{func:1,ret:P.i,args:[P.i]},{func:1,args:[,]},{func:1,ret:P.G,args:[W.B]},{func:1,ret:P.G,args:[W.aL]},{func:1,ret:P.G,args:[P.i]},{func:1,ret:P.C,args:[{func:1,ret:-1,args:[D.x]}]},{func:1,ret:-1,args:[W.bC]},{func:1,ret:-1,args:[P.m,[P.o,D.a5]]},{func:1,ret:P.y},{func:1,ret:-1,args:[P.m,[P.o,U.ae]]},{func:1,ret:-1,args:[P.m,[P.o,V.ap]]},{func:1,ret:P.C,args:[W.ac]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:-1,args:[P.i,P.m]},{func:1,ret:P.C,args:[P.am]},{func:1,ret:-1,args:[P.i],opt:[,]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:P.C,args:[,],opt:[,]},{func:1,ret:[P.aY,,],args:[,]},{func:1,ret:-1,args:[W.bI]},{func:1,ret:P.C,args:[{func:1,ret:-1}]},{func:1,ret:P.G,args:[P.y,P.y]},{func:1,ret:P.C,args:[P.i,,]},{func:1,ret:P.N,args:[P.m]},{func:1,ret:P.N,args:[,,]},{func:1,args:[P.i]},{func:1,ret:P.C,args:[F.Y,P.y,P.y]},{func:1,args:[W.ac]},{func:1,ret:F.af,args:[F.af],named:{color:V.a2}},{func:1,ret:-1,args:[P.m,P.m]},{func:1,args:[,P.i]},{func:1,ret:-1,args:[F.Y,F.Y]},{func:1,ret:P.C,args:[F.az]},{func:1,ret:-1,args:[W.B,W.B]},{func:1,ret:W.J,args:[W.B]},{func:1,ret:P.C,args:[P.bi]},{func:1,ret:P.G,args:[V.b_]},{func:1,ret:P.C,args:[W.ad]},{func:1,ret:P.C,args:[W.J]},{func:1,ret:P.m,args:[[P.b,P.m],P.m]},{func:1,ret:[P.E,P.i,P.i],args:[[P.E,P.i,P.i],P.i]},{func:1,ret:P.G,args:[[P.o,D.a5]]}]
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
if(x==y)H.ne(d||a)
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
Isolate.a7=a.a7
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
if(typeof dartMainRunner==="function")dartMainRunner(N.hs,[])
else N.hs([])})})()
//# sourceMappingURL=test.dart.js.map
