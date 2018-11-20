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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isF)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.dQ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dQ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.dQ(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dT=function(){}
var dart=[["","",,H,{"^":"",nL:{"^":"b;a"}}],["","",,J,{"^":"",
dX:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cM:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dW==null){H.n9()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.d(P.cA("Return interceptor for "+H.i(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$d5()]
if(v!=null)return v
v=H.nf(a)
if(v!=null)return v
if(typeof a=="function")return C.a6
y=Object.getPrototypeOf(a)
if(y==null)return C.M
if(y===Object.prototype)return C.M
if(typeof w=="function"){Object.defineProperty(w,$.$get$d5(),{value:C.C,enumerable:false,writable:true,configurable:true})
return C.C}return C.C},
F:{"^":"b;",
u:function(a,b){return a===b},
gX:function(a){return H.bC(a)},
i:["fm",function(a){return"Instance of '"+H.ba(a)+"'"}],
"%":"DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo|WebGLRenderbuffer"},
iK:{"^":"F;",
i:function(a){return String(a)},
gX:function(a){return a?519018:218159},
$isK:1},
eD:{"^":"F;",
u:function(a,b){return null==b},
i:function(a){return"null"},
gX:function(a){return 0},
$isE:1},
d6:{"^":"F;",
gX:function(a){return 0},
i:["fo",function(a){return String(a)}]},
jt:{"^":"d6;"},
c8:{"^":"d6;"},
c_:{"^":"d6;",
i:function(a){var z=a[$.$get$el()]
if(z==null)return this.fo(a)
return"JavaScript function for "+H.i(J.ae(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbV:1},
b6:{"^":"F;$ti",
h:function(a,b){H.x(b,H.t(a,0))
if(!!a.fixed$length)H.r(P.U("add"))
a.push(b)},
kk:function(a,b){var z
if(!!a.fixed$length)H.r(P.U("removeAt"))
z=a.length
if(b>=z)throw H.d(P.c5(b,null,null))
return a.splice(b,1)[0]},
K:function(a,b){var z
if(!!a.fixed$length)H.r(P.U("remove"))
for(z=0;z<a.length;++z)if(J.M(a[z],b)){a.splice(z,1)
return!0}return!1},
Z:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.d(P.aG(a))}},
k:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.q(z,y,H.i(a[y]))
return z.join(b)},
jQ:function(a){return this.k(a,"")},
jI:function(a,b,c,d){var z,y,x
H.x(b,d)
H.l(c,{func:1,ret:d,args:[d,H.t(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.d(P.aG(a))}return y},
jH:function(a,b,c){var z,y,x
H.l(b,{func:1,ret:P.K,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.d(P.aG(a))}throw H.d(H.cq())},
jG:function(a,b){return this.jH(a,b,null)},
a9:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
fl:function(a,b,c){if(b<0||b>a.length)throw H.d(P.a_(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.a_(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.t(a,0)])
return H.c(a.slice(b,c),[H.t(a,0)])},
gjF:function(a){if(a.length>0)return a[0]
throw H.d(H.cq())},
gaz:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.d(H.cq())},
dS:function(a,b){var z,y
H.l(b,{func:1,ret:P.K,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.d(P.aG(a))}return!1},
W:function(a,b){var z
for(z=0;z<a.length;++z)if(J.M(a[z],b))return!0
return!1},
i:function(a){return P.d4(a,"[","]")},
gS:function(a){return new J.as(a,a.length,0,[H.t(a,0)])},
gX:function(a){return H.bC(a)},
gp:function(a){return a.length},
sp:function(a,b){if(!!a.fixed$length)H.r(P.U("set length"))
if(b<0)throw H.d(P.a_(b,0,null,"newLength",null))
a.length=b},
l:function(a,b){if(b>=a.length||b<0)throw H.d(H.bm(a,b))
return a[b]},
q:function(a,b,c){H.x(c,H.t(a,0))
if(!!a.immutable$list)H.r(P.U("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bm(a,b))
a[b]=c},
$iso:1,
$isa:1,
n:{
iJ:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.cU(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.a_(a,0,4294967295,"length",null))
return J.eA(new Array(a),b)},
eA:function(a,b){return J.cr(H.c(a,[b]))},
cr:function(a){H.cf(a)
a.fixed$length=Array
return a}}},
nK:{"^":"b6;$ti"},
as:{"^":"b;a,b,c,0d,$ti",
sdn:function(a){this.d=H.x(a,H.t(this,0))},
gJ:function(){return this.d},
C:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.d(H.y(z))
x=this.c
if(x>=y){this.sdn(null)
return!1}this.sdn(z[x]);++this.c
return!0},
$isaX:1},
bY:{"^":"F;",
kz:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.d(P.U(""+a+".toInt()"))},
cK:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.d(P.U(""+a+".floor()"))},
ap:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.U(""+a+".round()"))},
eT:function(a,b){var z,y
if(b>20)throw H.d(P.a_(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
bg:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.d(P.a_(b,2,36,"radix",null))
z=a.toString(b)
if(C.c.a_(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.r(P.U("Unexpected toString result: "+z))
x=y.length
if(1>=x)return H.f(y,1)
z=y[1]
if(3>=x)return H.f(y,3)
w=+y[3]
x=y[2]
if(x!=null){z+=x
w-=x.length}return z+C.c.E("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gX:function(a){return a&0x1FFFFFFF},
E:function(a,b){if(typeof b!=="number")throw H.d(H.ag(b))
return a*b},
bl:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
ft:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dK(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.dK(a,b)},
dK:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.d(P.U("Result of truncating division is "+H.i(z)+": "+H.i(a)+" ~/ "+b))},
aP:function(a,b){var z
if(a>0)z=this.dI(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
il:function(a,b){if(b<0)throw H.d(H.ag(b))
return this.dI(a,b)},
dI:function(a,b){return b>31?0:a>>>b},
T:function(a,b){if(typeof b!=="number")throw H.d(H.ag(b))
return a<b},
$isq:1,
$isak:1},
eC:{"^":"bY;",$ism:1},
eB:{"^":"bY;"},
bZ:{"^":"F;",
a_:function(a,b){if(b<0)throw H.d(H.bm(a,b))
if(b>=a.length)H.r(H.bm(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.d(H.bm(a,b))
return a.charCodeAt(b)},
G:function(a,b){H.C(b)
if(typeof b!=="string")throw H.d(P.cU(b,null,null))
return a+b},
aX:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ag(b))
c=P.b1(b,c,a.length,null,null,null)
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
ac:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.ag(c))
if(typeof c!=="number")return c.T()
if(c<0||c>a.length)throw H.d(P.a_(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a5:function(a,b){return this.ac(a,b,0)},
t:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ag(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.T()
if(b<0)throw H.d(P.c5(b,null,null))
if(b>c)throw H.d(P.c5(b,null,null))
if(c>a.length)throw H.d(P.c5(c,null,null))
return a.substring(b,c)},
ar:function(a,b){return this.t(a,b,null)},
kC:function(a){return a.toLowerCase()},
E:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.S)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
k8:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.E(c,z)+a},
af:function(a,b){return this.k8(a,b," ")},
ey:function(a,b,c){var z
if(c<0||c>a.length)throw H.d(P.a_(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
ex:function(a,b){return this.ey(a,b,0)},
jj:function(a,b,c){if(c>a.length)throw H.d(P.a_(c,0,a.length,null,null))
return H.hz(a,b,c)},
i:function(a){return a},
gX:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gp:function(a){return a.length},
$iseV:1,
$ish:1}}],["","",,H,{"^":"",
cN:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
cq:function(){return new P.dj("No element")},
iI:function(){return new P.dj("Too many elements")},
v:{"^":"kG;a",
gp:function(a){return this.a.length},
l:function(a,b){return C.c.a_(this.a,b)},
$asdA:function(){return[P.m]},
$asT:function(){return[P.m]},
$aso:function(){return[P.m]},
$asa:function(){return[P.m]}},
et:{"^":"o;"},
ct:{"^":"et;$ti",
gS:function(a){return new H.d8(this,this.gp(this),0,[H.a6(this,"ct",0)])},
d_:function(a,b){return this.fn(0,H.l(b,{func:1,ret:P.K,args:[H.a6(this,"ct",0)]}))}},
d8:{"^":"b;a,b,c,0d,$ti",
sb1:function(a){this.d=H.x(a,H.t(this,0))},
gJ:function(){return this.d},
C:function(){var z,y,x,w
z=this.a
y=J.bo(z)
x=y.gp(z)
if(this.b!==x)throw H.d(P.aG(z))
w=this.c
if(w>=x){this.sb1(null)
return!1}this.sb1(y.a9(z,w));++this.c
return!0},
$isaX:1},
j6:{"^":"o;a,b,$ti",
gS:function(a){return new H.j7(J.b4(this.a),this.b,this.$ti)},
gp:function(a){return J.ar(this.a)},
a9:function(a,b){return this.b.$1(J.ch(this.a,b))},
$aso:function(a,b){return[b]}},
j7:{"^":"aX;0a,b,c,$ti",
sb1:function(a){this.a=H.x(a,H.t(this,1))},
C:function(){var z=this.b
if(z.C()){this.sb1(this.c.$1(z.gJ()))
return!0}this.sb1(null)
return!1},
gJ:function(){return this.a},
$asaX:function(a,b){return[b]}},
j8:{"^":"ct;a,b,$ti",
gp:function(a){return J.ar(this.a)},
a9:function(a,b){return this.b.$1(J.ch(this.a,b))},
$asct:function(a,b){return[b]},
$aso:function(a,b){return[b]}},
dE:{"^":"o;a,b,$ti",
gS:function(a){return new H.lb(J.b4(this.a),this.b,this.$ti)}},
lb:{"^":"aX;a,b,$ti",
C:function(){var z,y
for(z=this.a,y=this.b;z.C();)if(y.$1(z.gJ()))return!0
return!1},
gJ:function(){return this.a.gJ()}},
cn:{"^":"b;$ti"},
dA:{"^":"b;$ti",
q:function(a,b,c){H.x(c,H.a6(this,"dA",0))
throw H.d(P.U("Cannot modify an unmodifiable list"))}},
kG:{"^":"cs+dA;"}}],["","",,H,{"^":"",
i3:function(){throw H.d(P.U("Cannot modify unmodifiable Map"))},
br:function(a){var z,y
z=H.C(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
n2:function(a){return init.types[H.ab(a)]},
nc:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.L(a).$isau},
i:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ae(a)
if(typeof z!=="string")throw H.d(H.ag(a))
return z},
bC:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
jE:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.f(z,3)
y=H.C(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.a_(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.c.H(w,u)|32)>x)return}return parseInt(a,b)},
ba:function(a){return H.jv(a)+H.dN(H.b3(a),0,null)},
jv:function(a){var z,y,x,w,v,u,t,s,r
z=J.L(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.Z||!!z.$isc8){u=C.F(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.br(w.length>1&&C.c.H(w,0)===36?C.c.ar(w,1):w)},
jw:function(){if(!!self.location)return self.location.href
return},
f_:function(a){var z,y,x,w,v
H.cf(a)
z=J.ar(a)
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
jF:function(a){var z,y,x,w
z=H.c([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.y)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.d(H.ag(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.aP(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.d(H.ag(w))}return H.f_(z)},
f0:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.d(H.ag(x))
if(x<0)throw H.d(H.ag(x))
if(x>65535)return H.jF(a)}return H.f_(a)},
jG:function(a,b,c){var z,y,x,w
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
w=x<c?x:c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
bb:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.aP(z,10))>>>0,56320|z&1023)}}throw H.d(P.a_(a,0,1114111,null,null))},
b9:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jD:function(a){var z=H.b9(a).getFullYear()+0
return z},
jB:function(a){var z=H.b9(a).getMonth()+1
return z},
jx:function(a){var z=H.b9(a).getDate()+0
return z},
jy:function(a){var z=H.b9(a).getHours()+0
return z},
jA:function(a){var z=H.b9(a).getMinutes()+0
return z},
jC:function(a){var z=H.b9(a).getSeconds()+0
return z},
jz:function(a){var z=H.b9(a).getMilliseconds()+0
return z},
B:function(a){throw H.d(H.ag(a))},
f:function(a,b){if(a==null)J.ar(a)
throw H.d(H.bm(a,b))},
bm:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aF(!0,b,"index",null)
z=H.ab(J.ar(a))
if(!(b<0)){if(typeof z!=="number")return H.B(z)
y=b>=z}else y=!0
if(y)return P.b5(b,a,"index",null,z)
return P.c5(b,"index",null)},
mX:function(a,b,c){if(a>c)return new P.cv(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cv(a,c,!0,b,"end","Invalid value")
return new P.aF(!0,b,"end",null)},
ag:function(a){return new P.aF(!0,a,null,null)},
mM:function(a){if(typeof a!=="number")throw H.d(H.ag(a))
return a},
d:function(a){var z
if(a==null)a=new P.eU()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hA})
z.name=""}else z.toString=H.hA
return z},
hA:function(){return J.ae(this.dartException)},
r:function(a){throw H.d(a)},
y:function(a){throw H.d(P.aG(a))},
a8:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.nA(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.aP(x,16)&8191)===10)switch(w){case 438:return z.$1(H.d7(H.i(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eT(H.i(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fm()
u=$.$get$fn()
t=$.$get$fo()
s=$.$get$fp()
r=$.$get$ft()
q=$.$get$fu()
p=$.$get$fr()
$.$get$fq()
o=$.$get$fw()
n=$.$get$fv()
m=v.ae(y)
if(m!=null)return z.$1(H.d7(H.C(y),m))
else{m=u.ae(y)
if(m!=null){m.method="call"
return z.$1(H.d7(H.C(y),m))}else{m=t.ae(y)
if(m==null){m=s.ae(y)
if(m==null){m=r.ae(y)
if(m==null){m=q.ae(y)
if(m==null){m=p.ae(y)
if(m==null){m=s.ae(y)
if(m==null){m=o.ae(y)
if(m==null){m=n.ae(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eT(H.C(y),m))}}return z.$1(new H.kF(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.f8()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aF(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.f8()
return a},
bp:function(a){var z
if(a==null)return new H.h0(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.h0(a)},
n_:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.q(0,a[y],a[x])}return b},
nb:function(a,b,c,d,e,f){H.e(a,"$isbV")
switch(H.ab(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.u("Unsupported number of arguments for wrapped closure"))},
bl:function(a,b){var z
H.ab(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nb)
a.$identity=z
return z},
i_:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.L(d).$isa){z.$reflectionInfo=d
x=H.jN(z).r}else x=d
w=e?Object.create(new H.k9().constructor.prototype):Object.create(new H.cW(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.ay
if(typeof u!=="number")return u.G()
$.ay=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.eh(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.n2,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.ea:H.cX
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.d("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.eh(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w["call*"]=q
w.$R=z.$R
w.$D=z.$D
return v},
hX:function(a,b,c,d){var z=H.cX
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
eh:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hZ(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hX(y,!w,z,b)
if(y===0){w=$.ay
if(typeof w!=="number")return w.G()
$.ay=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bt
if(v==null){v=H.cj("self")
$.bt=v}return new Function(w+H.i(v)+";return "+u+"."+H.i(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ay
if(typeof w!=="number")return w.G()
$.ay=w+1
t+=w
w="return function("+t+"){return this."
v=$.bt
if(v==null){v=H.cj("self")
$.bt=v}return new Function(w+H.i(v)+"."+H.i(z)+"("+t+");}")()},
hY:function(a,b,c,d){var z,y
z=H.cX
y=H.ea
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
z=$.bt
if(z==null){z=H.cj("self")
$.bt=z}y=$.e9
if(y==null){y=H.cj("receiver")
$.e9=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hY(w,!u,x,b)
if(w===1){z="return function(){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+");"
y=$.ay
if(typeof y!=="number")return y.G()
$.ay=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+", "+s+");"
y=$.ay
if(typeof y!=="number")return y.G()
$.ay=y+1
return new Function(z+y+"}")()},
dQ:function(a,b,c,d,e,f,g){return H.i_(a,b,H.ab(c),d,!!e,!!f,g)},
C:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.ax(a,"String"))},
mY:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.ax(a,"double"))},
np:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.ax(a,"num"))},
dO:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.ax(a,"bool"))},
ab:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.ax(a,"int"))},
hx:function(a,b){throw H.d(H.ax(a,H.br(H.C(b).substring(3))))},
nr:function(a,b){throw H.d(H.hW(a,H.br(H.C(b).substring(3))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.L(a)[b])return a
H.hx(a,b)},
k:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.L(a)[b]
else z=!0
if(z)return a
H.nr(a,b)},
cf:function(a){if(a==null)return a
if(!!J.L(a).$isa)return a
throw H.d(H.ax(a,"List<dynamic>"))},
hu:function(a,b){var z
if(a==null)return a
z=J.L(a)
if(!!z.$isa)return a
if(z[b])return a
H.hx(a,b)},
hq:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.ab(z)]
else return a.$S()}return},
cc:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.hq(J.L(a))
if(z==null)return!1
return H.hd(z,null,b,null)},
l:function(a,b){var z,y
if(a==null)return a
if($.dK)return a
$.dK=!0
try{if(H.cc(a,b))return a
z=H.cQ(b)
y=H.ax(a,z)
throw H.d(y)}finally{$.dK=!1}},
dU:function(a,b){if(a!=null&&!H.dP(a,b))H.r(H.ax(a,H.cQ(b)))
return a},
hj:function(a){var z,y
z=J.L(a)
if(!!z.$isn){y=H.hq(z)
if(y!=null)return H.cQ(y)
return"Closure"}return H.ba(a)},
ny:function(a){throw H.d(new P.i6(H.C(a)))},
hr:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
b3:function(a){if(a==null)return
return a.$ti},
od:function(a,b,c){return H.bq(a["$as"+H.i(c)],H.b3(b))},
cd:function(a,b,c,d){var z
H.C(c)
H.ab(d)
z=H.bq(a["$as"+H.i(c)],H.b3(b))
return z==null?null:z[d]},
a6:function(a,b,c){var z
H.C(b)
H.ab(c)
z=H.bq(a["$as"+H.i(b)],H.b3(a))
return z==null?null:z[c]},
t:function(a,b){var z
H.ab(b)
z=H.b3(a)
return z==null?null:z[b]},
cQ:function(a){return H.b2(a,null)},
b2:function(a,b){var z,y
H.j(b,"$isa",[P.h],"$asa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.br(a[0].builtin$cls)+H.dN(a,1,b)
if(typeof a=="function")return H.br(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ab(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.i(b[y])}if('func' in a)return H.mC(a,b)
if('futureOr' in a)return"FutureOr<"+H.b2("type" in a?a.type:null,b)+">"
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
t=C.c.G(t,b[r])
q=y[u]
if(q!=null&&q!==P.b)t+=" extends "+H.b2(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b2(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b2(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b2(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.mZ(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.C(z[l])
n=n+m+H.b2(i[h],b)+(" "+H.i(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dN:function(a,b,c){var z,y,x,w,v,u
H.j(c,"$isa",[P.h],"$asa")
if(a==null)return""
z=new P.aj("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b2(u,c)}return"<"+z.i(0)+">"},
bq:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bO:function(a,b,c,d){var z,y
H.C(b)
H.cf(c)
H.C(d)
if(a==null)return!1
z=H.b3(a)
y=J.L(a)
if(y[b]==null)return!1
return H.hm(H.bq(y[d],z),null,c,null)},
j:function(a,b,c,d){H.C(b)
H.cf(c)
H.C(d)
if(a==null)return a
if(H.bO(a,b,c,d))return a
throw H.d(H.ax(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.br(b.substring(3))+H.dN(c,0,null),init.mangledGlobalNames)))},
hm:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.aq(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.aq(a[y],b,c[y],d))return!1
return!0},
ob:function(a,b,c){return a.apply(b,H.bq(J.L(b)["$as"+H.i(c)],H.b3(b)))},
ht:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="b"||a.builtin$cls==="E"||a===-1||a===-2||H.ht(z)}return!1},
dP:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="b"||b.builtin$cls==="E"||b===-1||b===-2||H.ht(b)
if(b==null||b===-1||b.builtin$cls==="b"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dP(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cc(a,b)}z=J.L(a).constructor
y=H.b3(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.aq(z,null,b,null)},
x:function(a,b){if(a!=null&&!H.dP(a,b))throw H.d(H.ax(a,H.cQ(b)))
return a},
aq:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="b"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="b"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aq(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="E")return!0
if('func' in c)return H.hd(a,b,c,d)
if('func' in a)return c.builtin$cls==="bV"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.aq("type" in a?a.type:null,b,x,d)
else if(H.aq(a,b,x,d))return!0
else{if(!('$is'+"bz" in y.prototype))return!1
w=y.prototype["$as"+"bz"]
v=H.bq(w,z?a.slice(1):null)
return H.aq(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.hm(H.bq(r,z),b,u,d)},
hd:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.no(m,b,l,d)},
no:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.aq(c[w],d,a[w],b))return!1}return!0},
oc:function(a,b,c){Object.defineProperty(a,H.C(b),{value:c,enumerable:false,writable:true,configurable:true})},
nf:function(a){var z,y,x,w,v,u
z=H.C($.hs.$1(a))
y=$.cL[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cO[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.C($.hl.$2(a,z))
if(z!=null){y=$.cL[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cO[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cP(x)
$.cL[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cO[z]=x
return x}if(v==="-"){u=H.cP(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.hw(a,x)
if(v==="*")throw H.d(P.cA(z))
if(init.leafTags[z]===true){u=H.cP(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.hw(a,x)},
hw:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dX(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cP:function(a){return J.dX(a,!1,null,!!a.$isau)},
nn:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cP(z)
else return J.dX(z,c,null,null)},
n9:function(){if(!0===$.dW)return
$.dW=!0
H.na()},
na:function(){var z,y,x,w,v,u,t,s
$.cL=Object.create(null)
$.cO=Object.create(null)
H.n5()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hy.$1(v)
if(u!=null){t=H.nn(v,z[v],u)
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
z=H.bk(C.a0,H.bk(C.a5,H.bk(C.E,H.bk(C.E,H.bk(C.a4,H.bk(C.a1,H.bk(C.a2(C.F),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.hs=new H.n6(v)
$.hl=new H.n7(u)
$.hy=new H.n8(t)},
bk:function(a,b){return a(b)||b},
hz:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
e_:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
i2:{"^":"b;$ti",
i:function(a){return P.d9(this)},
q:function(a,b,c){H.x(b,H.t(this,0))
H.x(c,H.t(this,1))
return H.i3()},
$isG:1},
i4:{"^":"i2;a,b,c,$ti",
gp:function(a){return this.a},
bw:function(a){if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
l:function(a,b){if(!this.bw(b))return
return this.dr(b)},
dr:function(a){return this.b[H.C(a)]},
Z:function(a,b){var z,y,x,w,v
z=H.t(this,1)
H.l(b,{func:1,ret:-1,args:[H.t(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.x(this.dr(v),z))}}},
jM:{"^":"b;a,b,c,d,e,f,r,0x",n:{
jN:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cr(z)
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
n:{
aD:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.h])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.kr(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cz:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fs:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
jq:{"^":"a3;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
n:{
eT:function(a,b){return new H.jq(a,b==null?null:b.method)}}},
iN:{"^":"a3;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.i(this.a)+")"},
n:{
d7:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.iN(a,y,z?null:b.receiver)}}},
kF:{"^":"a3;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
nA:{"^":"n:18;a",
$1:function(a){if(!!J.L(a).$isa3)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
h0:{"^":"b;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaL:1},
n:{"^":"b;",
i:function(a){return"Closure '"+H.ba(this).trim()+"'"},
gf3:function(){return this},
$isbV:1,
gf3:function(){return this}},
fc:{"^":"n;"},
k9:{"^":"fc;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.br(z)+"'"}},
cW:{"^":"fc;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cW))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gX:function(a){var z,y
z=this.c
if(z==null)y=H.bC(this.a)
else y=typeof z!=="object"?J.bQ(z):H.bC(z)
return(y^H.bC(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.ba(z)+"'")},
n:{
cX:function(a){return a.a},
ea:function(a){return a.c},
cj:function(a){var z,y,x,w,v
z=new H.cW("self","target","receiver","name")
y=J.cr(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ks:{"^":"a3;a",
i:function(a){return this.a},
n:{
ax:function(a,b){return new H.ks("TypeError: "+H.i(P.cl(a))+": type '"+H.hj(a)+"' is not a subtype of type '"+b+"'")}}},
hV:{"^":"a3;a",
i:function(a){return this.a},
n:{
hW:function(a,b){return new H.hV("CastError: "+H.i(P.cl(a))+": type '"+H.hj(a)+"' is not a subtype of type '"+b+"'")}}},
jV:{"^":"a3;a",
i:function(a){return"RuntimeError: "+H.i(this.a)},
n:{
jW:function(a){return new H.jV(a)}}},
aY:{"^":"eJ;a,0b,0c,0d,0e,0f,r,$ti",
gp:function(a){return this.a},
gjP:function(a){return this.a===0},
gay:function(){return new H.iU(this,[H.t(this,0)])},
bw:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.dk(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.dk(y,a)}else return this.jM(a)},
jM:function(a){var z=this.d
if(z==null)return!1
return this.cN(this.c4(z,this.cM(a)),a)>=0},
l:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bp(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bp(w,b)
x=y==null?null:y.b
return x}else return this.jN(b)},
jN:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.c4(z,this.cM(a))
x=this.cN(y,a)
if(x<0)return
return y[x].b},
q:function(a,b,c){var z,y
H.x(b,H.t(this,0))
H.x(c,H.t(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.c8()
this.b=z}this.d9(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c8()
this.c=y}this.d9(y,b,c)}else this.jO(b,c)},
jO:function(a,b){var z,y,x,w
H.x(a,H.t(this,0))
H.x(b,H.t(this,1))
z=this.d
if(z==null){z=this.c8()
this.d=z}y=this.cM(a)
x=this.c4(z,y)
if(x==null)this.ci(z,y,[this.bZ(a,b)])
else{w=this.cN(x,a)
if(w>=0)x[w].b=b
else x.push(this.bZ(a,b))}},
Z:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.d(P.aG(this))
z=z.c}},
d9:function(a,b,c){var z
H.x(b,H.t(this,0))
H.x(c,H.t(this,1))
z=this.bp(a,b)
if(z==null)this.ci(a,b,this.bZ(b,c))
else z.b=c},
fS:function(){this.r=this.r+1&67108863},
bZ:function(a,b){var z,y
z=new H.iT(H.x(a,H.t(this,0)),H.x(b,H.t(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fS()
return z},
cM:function(a){return J.bQ(a)&0x3ffffff},
cN:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.M(a[y].a,b))return y
return-1},
i:function(a){return P.d9(this)},
bp:function(a,b){return a[b]},
c4:function(a,b){return a[b]},
ci:function(a,b,c){a[b]=c},
h6:function(a,b){delete a[b]},
dk:function(a,b){return this.bp(a,b)!=null},
c8:function(){var z=Object.create(null)
this.ci(z,"<non-identifier-key>",z)
this.h6(z,"<non-identifier-key>")
return z},
$iseF:1},
iT:{"^":"b;a,b,0c,0d"},
iU:{"^":"et;a,$ti",
gp:function(a){return this.a.a},
gS:function(a){var z,y
z=this.a
y=new H.iV(z,z.r,this.$ti)
y.c=z.e
return y}},
iV:{"^":"b;a,b,0c,0d,$ti",
sda:function(a){this.d=H.x(a,H.t(this,0))},
gJ:function(){return this.d},
C:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aG(z))
else{z=this.c
if(z==null){this.sda(null)
return!1}else{this.sda(z.a)
this.c=this.c.c
return!0}}},
$isaX:1},
n6:{"^":"n:18;a",
$1:function(a){return this.a(a)}},
n7:{"^":"n:54;a",
$2:function(a,b){return this.a(a,b)}},
n8:{"^":"n:53;a",
$1:function(a){return this.a(H.C(a))}},
iL:{"^":"b;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseV:1,
$isjO:1,
n:{
iM:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.d(P.V("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mZ:function(a){return J.eA(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
nq:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bi:function(a){return a},
jk:function(a){return new Int8Array(a)},
aT:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bm(b,a))},
mw:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.d(H.mX(a,b,c))
return b},
dd:{"^":"F;",$isdd:1,$iskt:1,"%":";ArrayBufferView;dc|fX|fY|jl|fZ|h_|b8"},
dc:{"^":"dd;",
gp:function(a){return a.length},
$isau:1,
$asau:I.dT},
jl:{"^":"fY;",
l:function(a,b){H.aT(b,a,a.length)
return a[b]},
q:function(a,b,c){H.mY(c)
H.aT(b,a,a.length)
a[b]=c},
$ascn:function(){return[P.q]},
$asT:function(){return[P.q]},
$iso:1,
$aso:function(){return[P.q]},
$isa:1,
$asa:function(){return[P.q]},
"%":"Float32Array"},
b8:{"^":"h_;",
q:function(a,b,c){H.ab(c)
H.aT(b,a,a.length)
a[b]=c},
$ascn:function(){return[P.m]},
$asT:function(){return[P.m]},
$iso:1,
$aso:function(){return[P.m]},
$isa:1,
$asa:function(){return[P.m]}},
nM:{"^":"b8;",
l:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Int16Array"},
nN:{"^":"b8;",
l:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Int32Array"},
nO:{"^":"b8;",
l:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Int8Array"},
nP:{"^":"b8;",
l:function(a,b){H.aT(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
nQ:{"^":"b8;",
gp:function(a){return a.length},
l:function(a,b){H.aT(b,a,a.length)
return a[b]},
$isnZ:1,
"%":"CanvasPixelArray|Uint8ClampedArray"},
eR:{"^":"b8;",
gp:function(a){return a.length},
l:function(a,b){H.aT(b,a,a.length)
return a[b]},
$iseR:1,
$isN:1,
"%":";Uint8Array"},
fX:{"^":"dc+T;"},
fY:{"^":"fX+cn;"},
fZ:{"^":"dc+T;"},
h_:{"^":"fZ+cn;"}}],["","",,P,{"^":"",
ld:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mJ()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bl(new P.lf(z),1)).observe(y,{childList:true})
return new P.le(z,y,x)}else if(self.setImmediate!=null)return P.mK()
return P.mL()},
o2:[function(a){self.scheduleImmediate(H.bl(new P.lg(H.l(a,{func:1,ret:-1})),0))},"$1","mJ",4,0,10],
o3:[function(a){self.setImmediate(H.bl(new P.lh(H.l(a,{func:1,ret:-1})),0))},"$1","mK",4,0,10],
o4:[function(a){P.dn(C.y,H.l(a,{func:1,ret:-1}))},"$1","mL",4,0,10],
dn:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.h.a6(a.a,1000)
return P.lZ(z<0?0:z,b)},
fj:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.bc]})
z=C.h.a6(a.a,1000)
return P.m_(z<0?0:z,b)},
mF:function(a,b){if(H.cc(a,{func:1,args:[P.b,P.aL]}))return H.l(a,{func:1,ret:null,args:[P.b,P.aL]})
if(H.cc(a,{func:1,args:[P.b]}))return H.l(a,{func:1,ret:null,args:[P.b]})
throw H.d(P.cU(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mE:function(){var z,y
for(;z=$.bj,z!=null;){$.bM=null
y=z.b
$.bj=y
if(y==null)$.bL=null
z.a.$0()}},
oa:[function(){$.dL=!0
try{P.mE()}finally{$.bM=null
$.dL=!1
if($.bj!=null)$.$get$dF().$1(P.hn())}},"$0","hn",0,0,3],
hi:function(a){var z=new P.fO(H.l(a,{func:1,ret:-1}))
if($.bj==null){$.bL=z
$.bj=z
if(!$.dL)$.$get$dF().$1(P.hn())}else{$.bL.b=z
$.bL=z}},
mI:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.bj
if(z==null){P.hi(a)
$.bM=$.bL
return}y=new P.fO(a)
x=$.bM
if(x==null){y.b=z
$.bM=y
$.bj=y}else{y.b=x.b
x.b=y
$.bM=y
if(y.b==null)$.bL=y}},
ns:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.S
if(C.l===y){P.cK(null,null,C.l,a)
return}y.toString
P.cK(null,null,y,H.l(y.co(a),z))},
fi:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.S
if(y===C.l){y.toString
return P.dn(a,b)}return P.dn(a,H.l(y.co(b),z))},
ko:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bc]}
H.l(b,z)
y=$.S
if(y===C.l){y.toString
return P.fj(a,b)}x=y.dY(b,P.bc)
$.S.toString
return P.fj(a,H.l(x,z))},
cJ:function(a,b,c,d,e){var z={}
z.a=d
P.mI(new P.mG(z,e))},
he:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.S
if(y===c)return d.$0()
$.S=c
z=y
try{y=d.$0()
return y}finally{$.S=z}},
hf:function(a,b,c,d,e,f,g){var z,y
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
cK:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.l!==c
if(z)d=!(!z||!1)?c.co(d):c.j9(d,-1)
P.hi(d)},
lf:{"^":"n:29;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
le:{"^":"n:50;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
lg:{"^":"n:0;a",
$0:function(){this.a.$0()}},
lh:{"^":"n:0;a",
$0:function(){this.a.$0()}},
h2:{"^":"b;a,0b,c",
fQ:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bl(new P.m1(this,b),0),a)
else throw H.d(P.U("`setTimeout()` not found."))},
fR:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bl(new P.m0(this,a,Date.now(),b),0),a)
else throw H.d(P.U("Periodic timer."))},
$isbc:1,
n:{
lZ:function(a,b){var z=new P.h2(!0,0)
z.fQ(a,b)
return z},
m_:function(a,b){var z=new P.h2(!1,0)
z.fR(a,b)
return z}}},
m1:{"^":"n:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
m0:{"^":"n:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.ft(w,x)}z.c=y
this.d.$1(z)}},
bh:{"^":"b;0a,b,c,d,e,$ti",
jW:function(a){if(this.c!==6)return!0
return this.b.b.cX(H.l(this.d,{func:1,ret:P.K,args:[P.b]}),a.a,P.K,P.b)},
jL:function(a){var z,y,x,w
z=this.e
y=P.b
x={futureOr:1,type:H.t(this,1)}
w=this.b.b
if(H.cc(z,{func:1,args:[P.b,P.aL]}))return H.dU(w.ks(z,a.a,a.b,null,y,P.aL),x)
else return H.dU(w.cX(H.l(z,{func:1,args:[P.b]}),a.a,null,y),x)}},
aS:{"^":"b;dJ:a<,b,0i9:c<,$ti",
eS:function(a,b,c){var z,y,x,w
z=H.t(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.S
if(y!==C.l){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.mF(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aS(0,$.S,[c])
w=b==null?1:3
this.dd(new P.bh(x,w,a,b,[z,c]))
return x},
ky:function(a,b){return this.eS(a,null,b)},
dd:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isbh")
this.c=a}else{if(z===2){y=H.e(this.c,"$isaS")
z=y.a
if(z<4){y.dd(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cK(null,null,z,H.l(new P.lq(this,a),{func:1,ret:-1}))}},
dF:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isbh")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isaS")
y=u.a
if(y<4){u.dF(a)
return}this.a=y
this.c=u.c}z.a=this.bs(a)
y=this.b
y.toString
P.cK(null,null,y,H.l(new P.lv(z,this),{func:1,ret:-1}))}},
cd:function(){var z=H.e(this.c,"$isbh")
this.c=null
return this.bs(z)},
bs:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
dg:function(a){var z,y,x
z=H.t(this,0)
H.dU(a,{futureOr:1,type:z})
y=this.$ti
if(H.bO(a,"$isbz",y,"$asbz"))if(H.bO(a,"$isaS",y,null))P.fS(a,this)
else P.lr(a,this)
else{x=this.cd()
H.x(a,z)
this.a=4
this.c=a
P.bH(this,x)}},
dh:function(a,b){var z
H.e(b,"$isaL")
z=this.cd()
this.a=8
this.c=new P.al(a,b)
P.bH(this,z)},
$isbz:1,
n:{
lr:function(a,b){var z,y,x
b.a=1
try{a.eS(new P.ls(b),new P.lt(b),null)}catch(x){z=H.a8(x)
y=H.bp(x)
P.ns(new P.lu(b,z,y))}},
fS:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isaS")
if(z>=4){y=b.cd()
b.a=a.a
b.c=a.c
P.bH(b,y)}else{y=H.e(b.c,"$isbh")
b.a=2
b.c=a
a.dF(y)}},
bH:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isal")
y=y.b
u=v.a
t=v.b
y.toString
P.cJ(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
if(p){H.e(r,"$isal")
y=y.b
u=r.a
t=r.b
y.toString
P.cJ(null,null,y,u,t)
return}o=$.S
if(o==null?q!=null:o!==q)$.S=q
else o=null
y=b.c
if(y===8)new P.ly(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.lx(x,b,r).$0()}else if((y&2)!==0)new P.lw(z,x,b).$0()
if(o!=null)$.S=o
y=x.b
if(!!J.L(y).$isbz){if(y.a>=4){n=H.e(t.c,"$isbh")
t.c=null
b=t.bs(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fS(y,t)
return}}m=b.b
n=H.e(m.c,"$isbh")
m.c=null
b=m.bs(n)
y=x.a
u=x.b
if(!y){H.x(u,H.t(m,0))
m.a=4
m.c=u}else{H.e(u,"$isal")
m.a=8
m.c=u}z.a=m
y=m}}}},
lq:{"^":"n:0;a,b",
$0:function(){P.bH(this.a,this.b)}},
lv:{"^":"n:0;a,b",
$0:function(){P.bH(this.b,this.a.a)}},
ls:{"^":"n:29;a",
$1:function(a){var z=this.a
z.a=0
z.dg(a)}},
lt:{"^":"n:49;a",
$2:function(a,b){this.a.dh(a,H.e(b,"$isaL"))},
$1:function(a){return this.$2(a,null)}},
lu:{"^":"n:0;a,b,c",
$0:function(){this.a.dh(this.b,this.c)}},
ly:{"^":"n:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.eQ(H.l(w.d,{func:1}),null)}catch(v){y=H.a8(v)
x=H.bp(v)
if(this.d){w=H.e(this.a.a.c,"$isal").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isal")
else u.b=new P.al(y,x)
u.a=!0
return}if(!!J.L(z).$isbz){if(z instanceof P.aS&&z.gdJ()>=4){if(z.gdJ()===8){w=this.b
w.b=H.e(z.gi9(),"$isal")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ky(new P.lz(t),null)
w.a=!1}}},
lz:{"^":"n:48;a",
$1:function(a){return this.a}},
lx:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.t(x,0)
v=H.x(this.c,w)
u=H.t(x,1)
this.a.b=x.b.b.cX(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a8(t)
y=H.bp(t)
x=this.a
x.b=new P.al(z,y)
x.a=!0}}},
lw:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isal")
w=this.c
if(w.jW(z)&&w.e!=null){v=this.b
v.b=w.jL(z)
v.a=!1}}catch(u){y=H.a8(u)
x=H.bp(u)
w=H.e(this.a.a.c,"$isal")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.al(y,x)
s.a=!0}}},
fO:{"^":"b;a,0b"},
ka:{"^":"b;$ti",
gp:function(a){var z,y,x,w
z={}
y=new P.aS(0,$.S,[P.m])
z.a=0
x=H.t(this,0)
w=H.l(new P.kc(z,this),{func:1,ret:-1,args:[x]})
H.l(new P.kd(z,y),{func:1,ret:-1})
W.a0(this.a,this.b,w,!1,x)
return y}},
kc:{"^":"n;a,b",
$1:function(a){H.x(a,H.t(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.E,args:[H.t(this.b,0)]}}},
kd:{"^":"n:0;a,b",
$0:function(){this.b.dg(this.a.a)}},
dk:{"^":"b;$ti"},
kb:{"^":"b;"},
bc:{"^":"b;"},
al:{"^":"b;a,b",
i:function(a){return H.i(this.a)},
$isa3:1},
ms:{"^":"b;",$iso1:1},
mG:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eU()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.d(z)
x=H.d(z)
x.stack=y.i(0)
throw x}},
lK:{"^":"ms;",
kt:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.l===$.S){a.$0()
return}P.he(null,null,this,a,-1)}catch(x){z=H.a8(x)
y=H.bp(x)
P.cJ(null,null,this,z,H.e(y,"$isaL"))}},
ku:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.l===$.S){a.$1(b)
return}P.hf(null,null,this,a,b,-1,c)}catch(x){z=H.a8(x)
y=H.bp(x)
P.cJ(null,null,this,z,H.e(y,"$isaL"))}},
j9:function(a,b){return new P.lM(this,H.l(a,{func:1,ret:b}),b)},
co:function(a){return new P.lL(this,H.l(a,{func:1,ret:-1}))},
dY:function(a,b){return new P.lN(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
eQ:function(a,b){H.l(a,{func:1,ret:b})
if($.S===C.l)return a.$0()
return P.he(null,null,this,a,b)},
cX:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.S===C.l)return a.$1(b)
return P.hf(null,null,this,a,b,c,d)},
ks:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.S===C.l)return a.$2(b,c)
return P.mH(null,null,this,a,b,c,d,e,f)}},
lM:{"^":"n;a,b,c",
$0:function(){return this.a.eQ(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
lL:{"^":"n:3;a,b",
$0:function(){return this.a.kt(this.b)}},
lN:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.ku(this.b,H.x(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
iW:function(a,b,c,d,e){return new H.aY(0,0,[d,e])},
iX:function(a,b,c){H.cf(a)
return H.j(H.n_(a,new H.aY(0,0,[b,c])),"$iseF",[b,c],"$aseF")},
eG:function(a,b){return new H.aY(0,0,[a,b])},
c0:function(a,b,c,d){return new P.lE(0,0,[d])},
iH:function(a,b,c){var z,y
if(P.dM(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bN()
C.a.h(y,a)
try{P.mD(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.fa(b,H.hu(z,"$iso"),", ")+c
return y.charCodeAt(0)==0?y:y},
d4:function(a,b,c){var z,y,x
if(P.dM(a))return b+"..."+c
z=new P.aj(b)
y=$.$get$bN()
C.a.h(y,a)
try{x=z
x.a=P.fa(x.gaM(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gaM()+c
y=z.gaM()
return y.charCodeAt(0)==0?y:y},
dM:function(a){var z,y
for(z=0;y=$.$get$bN(),z<y.length;++z)if(a===y[z])return!0
return!1},
mD:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gS(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.C())return
w=H.i(z.gJ())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.C()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gJ();++x
if(!z.C()){if(x<=4){C.a.h(b,H.i(t))
return}v=H.i(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gJ();++x
for(;z.C();t=s,s=r){r=z.gJ();++x
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
a.Z(0,new P.iZ(z,b,c))
return z},
eH:function(a,b){var z,y,x
z=P.c0(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.y)(a),++x)z.h(0,H.x(a[x],b))
return z},
d9:function(a){var z,y,x
z={}
if(P.dM(a))return"{...}"
y=new P.aj("")
try{C.a.h($.$get$bN(),a)
x=y
x.a=x.gaM()+"{"
z.a=!0
a.Z(0,new P.j4(z,y))
z=y
z.a=z.gaM()+"}"}finally{z=$.$get$bN()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gaM()
return z.charCodeAt(0)==0?z:z},
lE:{"^":"lA;a,0b,0c,0d,0e,0f,r,$ti",
gS:function(a){var z=new P.fW(this,this.r,this.$ti)
z.c=this.e
return z},
gp:function(a){return this.a},
W:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.e(z[b],"$iscG")!=null}else{y=this.h2(b)
return y}},
h2:function(a){var z=this.d
if(z==null)return!1
return this.c2(this.ds(z,a),a)>=0},
h:function(a,b){var z,y
H.x(b,H.t(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dH()
this.b=z}return this.dc(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dH()
this.c=y}return this.dc(y,b)}else return this.fT(b)},
fT:function(a){var z,y,x
H.x(a,H.t(this,0))
z=this.d
if(z==null){z=P.dH()
this.d=z}y=this.di(a)
x=z[y]
if(x==null)z[y]=[this.c9(a)]
else{if(this.c2(x,a)>=0)return!1
x.push(this.c9(a))}return!0},
K:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.i0(this.c,b)
else return this.hY(b)},
hY:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.ds(z,a)
x=this.c2(y,a)
if(x<0)return!1
this.dL(y.splice(x,1)[0])
return!0},
dc:function(a,b){H.x(b,H.t(this,0))
if(H.e(a[b],"$iscG")!=null)return!1
a[b]=this.c9(b)
return!0},
i0:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$iscG")
if(z==null)return!1
this.dL(z)
delete a[b]
return!0},
dA:function(){this.r=this.r+1&67108863},
c9:function(a){var z,y
z=new P.cG(H.x(a,H.t(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dA()
return z},
dL:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dA()},
di:function(a){return J.bQ(a)&0x3ffffff},
ds:function(a,b){return a[this.di(b)]},
c2:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.M(a[y].a,b))return y
return-1},
n:{
dH:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cG:{"^":"b;a,0b,0c"},
fW:{"^":"b;a,b,0c,0d,$ti",
sdf:function(a){this.d=H.x(a,H.t(this,0))},
gJ:function(){return this.d},
C:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aG(z))
else{z=this.c
if(z==null){this.sdf(null)
return!1}else{this.sdf(H.x(z.a,H.t(this,0)))
this.c=this.c.b
return!0}}},
$isaX:1,
n:{
lF:function(a,b,c){var z=new P.fW(a,b,[c])
z.c=a.e
return z}}},
lA:{"^":"jX;"},
iZ:{"^":"n:6;a,b,c",
$2:function(a,b){this.a.q(0,H.x(a,this.b),H.x(b,this.c))}},
cs:{"^":"lG;",$iso:1,$isa:1},
T:{"^":"b;$ti",
gS:function(a){return new H.d8(a,this.gp(a),0,[H.cd(this,a,"T",0)])},
a9:function(a,b){return this.l(a,b)},
kB:function(a,b){var z,y
z=H.c([],[H.cd(this,a,"T",0)])
C.a.sp(z,this.gp(a))
for(y=0;y<this.gp(a);++y)C.a.q(z,y,this.l(a,y))
return z},
kA:function(a){return this.kB(a,!0)},
jD:function(a,b,c,d){var z
H.x(d,H.cd(this,a,"T",0))
P.b1(b,c,this.gp(a),null,null,null)
for(z=b;z<c;++z)this.q(a,z,d)},
i:function(a){return P.d4(a,"[","]")}},
eJ:{"^":"cu;"},
j4:{"^":"n:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.i(a)
z.a=y+": "
z.a+=H.i(b)}},
cu:{"^":"b;$ti",
Z:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.a6(this,"cu",0),H.a6(this,"cu",1)]})
for(z=J.b4(this.gay());z.C();){y=z.gJ()
b.$2(y,this.l(0,y))}},
gp:function(a){return J.ar(this.gay())},
i:function(a){return P.d9(this)},
$isG:1},
m4:{"^":"b;$ti",
q:function(a,b,c){H.x(b,H.t(this,0))
H.x(c,H.t(this,1))
throw H.d(P.U("Cannot modify unmodifiable map"))}},
j5:{"^":"b;$ti",
l:function(a,b){return this.a.l(0,b)},
q:function(a,b,c){this.a.q(0,H.x(b,H.t(this,0)),H.x(c,H.t(this,1)))},
Z:function(a,b){this.a.Z(0,H.l(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]}))},
gp:function(a){var z=this.a
return z.gp(z)},
i:function(a){return J.ae(this.a)},
$isG:1},
fx:{"^":"m5;a,$ti"},
jZ:{"^":"b;$ti",
au:function(a,b){var z
for(z=J.b4(H.j(b,"$iso",this.$ti,"$aso"));z.C();)this.h(0,z.gJ())},
i:function(a){return P.d4(this,"{","}")},
a9:function(a,b){var z,y,x
if(b<0)H.r(P.a_(b,0,null,"index",null))
for(z=P.lF(this,this.r,H.t(this,0)),y=0;z.C();){x=z.d
if(b===y)return x;++y}throw H.d(P.b5(b,this,"index",null,y))},
$iso:1,
$isf5:1},
jX:{"^":"jZ;"},
lG:{"^":"b+T;"},
m5:{"^":"j5+m4;$ti"}}],["","",,P,{"^":"",hS:{"^":"bS;a",
jY:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
c=P.b1(b,c,a.length,null,null,null)
z=$.$get$fQ()
for(y=b,x=y,w=null,v=-1,u=-1,t=0;y<c;y=s){s=y+1
r=C.c.H(a,y)
if(r===37){q=s+2
if(q<=c){p=H.cN(C.c.H(a,s))
o=H.cN(C.c.H(a,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.f(z,n)
m=z[n]
if(m>=0){n=C.c.a_("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.aj("")
l=w.a+=C.c.t(a,x,y)
w.a=l+H.bb(r)
x=s
continue}}throw H.d(P.V("Invalid base64 data",a,y))}if(w!=null){l=w.a+=C.c.t(a,x,c)
k=l.length
if(v>=0)P.e7(a,u,c,v,t,k)
else{j=C.h.bl(k-1,4)+1
if(j===1)throw H.d(P.V("Invalid base64 encoding length ",a,c))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.c.aX(a,b,c,l.charCodeAt(0)==0?l:l)}i=c-b
if(v>=0)P.e7(a,u,c,v,t,i)
else{j=C.h.bl(i,4)
if(j===1)throw H.d(P.V("Invalid base64 encoding length ",a,c))
if(j>1)a=C.c.aX(a,c,c,j===2?"==":"=")}return a},
$asbS:function(){return[[P.a,P.m],P.h]},
n:{
e7:function(a,b,c,d,e,f){if(C.h.bl(f,4)!==0)throw H.d(P.V("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.V("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.V("Invalid base64 padding, more than two '=' characters",a,b))}}},hT:{"^":"aV;a",
$asaV:function(){return[[P.a,P.m],P.h]}},bS:{"^":"b;$ti"},aV:{"^":"kb;$ti"},ik:{"^":"bS;",
$asbS:function(){return[P.h,[P.a,P.m]]}},iE:{"^":"b;a,b,c,d,e",
i:function(a){return this.a}},iD:{"^":"aV;a",
h3:function(a,b,c){var z,y,x,w,v,u
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
if(c>b)v.a+=J.hO(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asaV:function(){return[P.h,P.h]}},kR:{"^":"ik;a",
gjC:function(){return C.T}},kY:{"^":"aV;",
b7:function(a,b,c){var z,y,x,w
z=a.length
P.b1(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.mq(0,0,x)
if(w.he(a,b,z)!==z)w.dN(J.hG(a,z-1),0)
return new Uint8Array(x.subarray(0,H.mw(0,w.b,x.length)))},
cu:function(a){return this.b7(a,0,null)},
$asaV:function(){return[P.h,[P.a,P.m]]}},mq:{"^":"b;a,b,c",
dN:function(a,b){var z,y,x,w,v
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
he:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.c.a_(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.c.H(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dN(w,C.c.H(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},kS:{"^":"aV;a",
b7:function(a,b,c){var z,y,x,w,v
H.j(a,"$isa",[P.m],"$asa")
z=P.kT(!1,a,b,c)
if(z!=null)return z
y=J.ar(a)
P.b1(b,c,y,null,null,null)
x=new P.aj("")
w=new P.mn(!1,x,!0,0,0,0)
w.b7(a,b,y)
if(w.e>0){H.r(P.V("Unfinished UTF-8 octet sequence",a,y))
x.a+=H.bb(65533)
w.d=0
w.e=0
w.f=0}v=x.a
return v.charCodeAt(0)==0?v:v},
cu:function(a){return this.b7(a,0,null)},
$asaV:function(){return[[P.a,P.m],P.h]},
n:{
kT:function(a,b,c,d){H.j(b,"$isa",[P.m],"$asa")
if(b instanceof Uint8Array)return P.kU(!1,b,c,d)
return},
kU:function(a,b,c,d){var z,y,x
z=$.$get$fD()
if(z==null)return
y=0===c
if(y&&!0)return P.dC(z,b)
x=b.length
d=P.b1(c,d,x,null,null,null)
if(y&&d===x)return P.dC(z,b)
return P.dC(z,b.subarray(c,d))},
dC:function(a,b){if(P.kW(b))return
return P.kX(a,b)},
kX:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.a8(y)}return},
kW:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
kV:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.a8(y)}return}}},mn:{"^":"b;a,b,c,d,e,f",
b7:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.j(a,"$isa",[P.m],"$asa")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.mp(c)
v=new P.mo(this,b,c,a)
$label0$0:for(u=J.bo(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.l(a,s)
if(typeof r!=="number")return r.bS()
if((r&192)!==128){q=P.V("Bad UTF-8 encoding 0x"+C.h.bg(r,16),a,s)
throw H.d(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.f(C.H,q)
if(z<=C.H[q]){q=P.V("Overlong encoding of 0x"+C.h.bg(z,16),a,s-x-1)
throw H.d(q)}if(z>1114111){q=P.V("Character outside valid Unicode range: 0x"+C.h.bg(z,16),a,s-x-1)
throw H.d(q)}if(!this.c||z!==65279)t.a+=H.bb(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.d2()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.l(a,o)
if(typeof r!=="number")return r.T()
if(r<0){m=P.V("Negative UTF-8 code unit: -0x"+C.h.bg(-r,16),a,n-1)
throw H.d(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.V("Bad UTF-8 encoding 0x"+C.h.bg(r,16),a,n-1)
throw H.d(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},mp:{"^":"n:47;a",
$2:function(a,b){var z,y,x,w
H.j(a,"$isa",[P.m],"$asa")
z=this.a
for(y=J.bo(a),x=b;x<z;++x){w=y.l(a,x)
if(typeof w!=="number")return w.bS()
if((w&127)!==w)return x-b}return z-b}},mo:{"^":"n:45;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.c6(this.d,a,b)}}}],["","",,P,{"^":"",
ce:function(a,b,c){var z
H.l(b,{func:1,ret:P.m,args:[P.h]})
z=H.jE(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.d(P.V(a,null,null))},
im:function(a){if(a instanceof H.n)return a.i(0)
return"Instance of '"+H.ba(a)+"'"},
j_:function(a,b,c,d){var z,y
H.x(b,d)
z=J.iJ(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.q(z,y,b)
return H.j(z,"$isa",[d],"$asa")},
j0:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gS(a);x.C();)C.a.h(y,H.x(x.gJ(),c))
if(b)return y
return H.j(J.cr(y),"$isa",z,"$asa")},
c6:function(a,b,c){var z,y
z=P.m
H.j(a,"$iso",[z],"$aso")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.j(a,"$isb6",[z],"$asb6")
y=a.length
c=P.b1(b,c,y,null,null,null)
return H.f0(b>0||c<y?C.a.fl(a,b,c):a)}if(!!J.L(a).$iseR)return H.jG(a,b,P.b1(b,c,a.length,null,null,null))
return P.ke(a,b,c)},
ke:function(a,b,c){var z,y,x,w
H.j(a,"$iso",[P.m],"$aso")
if(b<0)throw H.d(P.a_(b,0,J.ar(a),null,null))
z=c==null
if(!z&&c<b)throw H.d(P.a_(c,b,J.ar(a),null,null))
y=J.b4(a)
for(x=0;x<b;++x)if(!y.C())throw H.d(P.a_(b,0,x,null,null))
w=[]
if(z)for(;y.C();)w.push(y.gJ())
else for(x=b;x<c;++x){if(!y.C())throw H.d(P.a_(c,b,x,null,null))
w.push(y.gJ())}return H.f0(w)},
jP:function(a,b,c){return new H.iL(a,H.iM(a,!1,!0,!1))},
fz:function(){var z=H.jw()
if(z!=null)return P.kL(z,0,null)
throw H.d(P.U("'Uri.base' is not supported"))},
cl:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ae(a)
if(typeof a==="string")return JSON.stringify(a)
return P.im(a)},
u:function(a){return new P.fR(a)},
j1:function(a,b,c,d){var z,y
H.l(b,{func:1,ret:d,args:[P.m]})
z=H.c([],[d])
C.a.sp(z,a)
for(y=0;y<a;++y)C.a.q(z,y,b.$1(y))
return z},
dZ:function(a){H.nq(a)},
kL:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.c.H(a,b+4)^58)*3|C.c.H(a,b)^100|C.c.H(a,b+1)^97|C.c.H(a,b+2)^116|C.c.H(a,b+3)^97)>>>0
if(y===0)return P.fy(b>0||c<c?C.c.t(a,b,c):a,5,null).geX()
else if(y===32)return P.fy(C.c.t(a,z,c),0,null).geX()}x=new Array(8)
x.fixed$length=Array
w=H.c(x,[P.m])
C.a.q(w,0,0)
x=b-1
C.a.q(w,1,x)
C.a.q(w,2,x)
C.a.q(w,7,x)
C.a.q(w,3,b)
C.a.q(w,4,b)
C.a.q(w,5,c)
C.a.q(w,6,c)
if(P.hg(a,b,c,0,w)>=14)C.a.q(w,7,c)
v=w[1]
if(typeof v!=="number")return v.kH()
if(v>=b)if(P.hg(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.G()
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
y=2}a=m+C.c.t(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.c.aX(a,s,r,"/");++r;++q;++c}else{a=C.c.t(a,b,s)+"/"+C.c.t(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.c.ac(a,"http",b)){if(x&&t+3===s&&C.c.ac(a,"80",t+1))if(b===0&&!0){a=C.c.aX(a,t,s,"")
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
else if(v===z&&C.c.ac(a,"https",b)){if(x&&t+4===s&&C.c.ac(a,"443",t+1))if(b===0&&!0){a=C.c.aX(a,t,s,"")
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
q-=b}return new P.lS(a,v,u,t,s,r,q,o)}return P.m6(a,b,c,v,u,t,s,r,q,o)},
fB:function(a,b){var z=P.h
return C.a.jI(H.c(a.split("&"),[z]),P.eG(z,z),new P.kO(b),[P.G,P.h,P.h])},
kJ:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.kK(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.c.a_(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.ce(C.c.t(a,v,w),null,null)
if(typeof s!=="number")return s.d2()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.f(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.ce(C.c.t(a,v,c),null,null)
if(typeof s!=="number")return s.d2()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.f(y,u)
y[u]=s
return y},
fA:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.kM(a)
y=new P.kN(z,a)
if(a.length<2)z.$1("address is too short")
x=H.c([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.c.a_(a,w)
if(s===58){if(w===b){++w
if(C.c.a_(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaz(x)
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
l+=2}else{i=C.h.aP(k,8)
if(l<0||l>=n)return H.f(o,l)
o[l]=i
i=l+1
if(i>=n)return H.f(o,i)
o[i]=k&255
l+=2}}return o},
mx:function(){var z,y,x,w,v
z=P.j1(22,new P.mz(),!0,P.N)
y=new P.my(z)
x=new P.mA()
w=new P.mB()
v=H.e(y.$2(0,225),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(14,225),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(15,225),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(1,225),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(2,235),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(3,235),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(4,229),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(5,229),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(6,231),"$isN")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(7,231),"$isN")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.e(y.$2(8,8),"$isN"),"]",5)
v=H.e(y.$2(9,235),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(16,235),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(17,235),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(10,235),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(18,235),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(19,235),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(11,235),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(12,236),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.e(y.$2(13,237),"$isN")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.e(y.$2(20,245),"$isN"),"az",21)
v=H.e(y.$2(21,245),"$isN")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
hg:function(a,b,c,d,e){var z,y,x,w,v
H.j(e,"$isa",[P.m],"$asa")
z=$.$get$hh()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.f(z,d)
x=z[d]
w=C.c.H(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.f(x,w)
v=x[w]
d=v&31
C.a.q(e,v>>>5,y)}return d},
K:{"^":"b;"},
"+bool":0,
az:{"^":"b;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.az))return!1
return this.a===b.a&&!0},
gX:function(a){var z=this.a
return(z^C.h.aP(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.i8(H.jD(this))
y=P.bU(H.jB(this))
x=P.bU(H.jx(this))
w=P.bU(H.jy(this))
v=P.bU(H.jA(this))
u=P.bU(H.jC(this))
t=P.i9(H.jz(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
n:{
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
bU:function(a){if(a>=10)return""+a
return"0"+a}}},
q:{"^":"ak;"},
"+double":0,
bv:{"^":"b;a",
T:function(a,b){return C.h.T(this.a,H.e(b,"$isbv").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.bv))return!1
return this.a===b.a},
gX:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.ig()
y=this.a
if(y<0)return"-"+new P.bv(0-y).i(0)
x=z.$1(C.h.a6(y,6e7)%60)
w=z.$1(C.h.a6(y,1e6)%60)
v=new P.ie().$1(y%1e6)
return""+C.h.a6(y,36e8)+":"+H.i(x)+":"+H.i(w)+"."+H.i(v)},
n:{
es:function(a,b,c,d,e,f){return new P.bv(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
ie:{"^":"n:24;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
ig:{"^":"n:24;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a3:{"^":"b;"},
eU:{"^":"a3;",
i:function(a){return"Throw of null."}},
aF:{"^":"a3;a,b,c,d",
gc1:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc0:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.i(z)
w=this.gc1()+y+x
if(!this.a)return w
v=this.gc0()
u=P.cl(this.b)
return w+v+": "+H.i(u)},
n:{
bR:function(a){return new P.aF(!1,null,null,a)},
cU:function(a,b,c){return new P.aF(!0,a,b,c)}}},
cv:{"^":"aF;e,f,a,b,c,d",
gc1:function(){return"RangeError"},
gc0:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.i(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.i(z)
else if(x>z)y=": Not in range "+H.i(z)+".."+H.i(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.i(z)}return y},
n:{
c5:function(a,b,c){return new P.cv(null,null,!0,a,b,"Value not in range")},
a_:function(a,b,c,d,e){return new P.cv(b,c,!0,a,d,"Invalid value")},
b1:function(a,b,c,d,e,f){if(typeof a!=="number")return H.B(a)
if(0>a||a>c)throw H.d(P.a_(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.d(P.a_(b,a,c,"end",f))
return b}return c}}},
iF:{"^":"aF;e,p:f>,a,b,c,d",
gc1:function(){return"RangeError"},
gc0:function(){if(J.hC(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.i(z)},
n:{
b5:function(a,b,c,d,e){var z=H.ab(e!=null?e:J.ar(b))
return new P.iF(b,z,!0,a,c,"Index out of range")}}},
kH:{"^":"a3;a",
i:function(a){return"Unsupported operation: "+this.a},
n:{
U:function(a){return new P.kH(a)}}},
kE:{"^":"a3;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
n:{
cA:function(a){return new P.kE(a)}}},
dj:{"^":"a3;a",
i:function(a){return"Bad state: "+this.a},
n:{
f9:function(a){return new P.dj(a)}}},
i1:{"^":"a3;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.i(P.cl(z))+"."},
n:{
aG:function(a){return new P.i1(a)}}},
jr:{"^":"b;",
i:function(a){return"Out of Memory"},
$isa3:1},
f8:{"^":"b;",
i:function(a){return"Stack Overflow"},
$isa3:1},
i6:{"^":"a3;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fR:{"^":"b;a",
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
if(x==null){if(w.length>78)w=C.c.t(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.c.H(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.c.a_(w,s)
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
return y+n+l+m+"\n"+C.c.E(" ",x-o+n.length)+"^\n"},
n:{
V:function(a,b,c){return new P.iu(a,b,c)}}},
bV:{"^":"b;"},
m:{"^":"ak;"},
"+int":0,
o:{"^":"b;$ti",
d_:["fn",function(a,b){var z=H.a6(this,"o",0)
return new H.dE(this,H.l(b,{func:1,ret:P.K,args:[z]}),[z])}],
gp:function(a){var z,y
z=this.gS(this)
for(y=0;z.C();)++y
return y},
gaI:function(a){var z,y
z=this.gS(this)
if(!z.C())throw H.d(H.cq())
y=z.gJ()
if(z.C())throw H.d(H.iI())
return y},
a9:function(a,b){var z,y,x
if(b<0)H.r(P.a_(b,0,null,"index",null))
for(z=this.gS(this),y=0;z.C();){x=z.gJ()
if(b===y)return x;++y}throw H.d(P.b5(b,this,"index",null,y))},
i:function(a){return P.iH(this,"(",")")}},
aX:{"^":"b;$ti"},
a:{"^":"b;$ti",$iso:1},
"+List":0,
G:{"^":"b;$ti"},
E:{"^":"b;",
gX:function(a){return P.b.prototype.gX.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
ak:{"^":"b;"},
"+num":0,
b:{"^":";",
u:function(a,b){return this===b},
gX:function(a){return H.bC(this)},
i:function(a){return"Instance of '"+H.ba(this)+"'"},
toString:function(){return this.i(this)}},
aL:{"^":"b;"},
h:{"^":"b;",$iseV:1},
"+String":0,
aj:{"^":"b;aM:a<",
gp:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isnV:1,
n:{
fa:function(a,b,c){var z=J.b4(b)
if(!z.C())return a
if(c.length===0){do a+=H.i(z.gJ())
while(z.C())}else{a+=H.i(z.gJ())
for(;z.C();)a=a+c+H.i(z.gJ())}return a}}},
kO:{"^":"n:44;a",
$2:function(a,b){var z,y,x,w
z=P.h
H.j(a,"$isG",[z,z],"$asG")
H.C(b)
y=J.bP(b).ex(b,"=")
if(y===-1){if(b!=="")a.q(0,P.dJ(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.c.t(b,0,y)
w=C.c.ar(b,y+1)
z=this.a
a.q(0,P.dJ(x,0,x.length,z,!0),P.dJ(w,0,w.length,z,!0))}return a}},
kK:{"^":"n:43;a",
$2:function(a,b){throw H.d(P.V("Illegal IPv4 address, "+a,this.a,b))}},
kM:{"^":"n:42;a",
$2:function(a,b){throw H.d(P.V("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
kN:{"^":"n:41;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.ce(C.c.t(this.b,a,b),null,16)
if(typeof z!=="number")return z.T()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cH:{"^":"b;bV:a<,b,c,d,eL:e>,f,r,0x,0y,0z,0Q,0ch",
shX:function(a){var z=P.h
this.Q=H.j(a,"$isG",[z,z],"$asG")},
geZ:function(){return this.b},
gcL:function(a){var z=this.c
if(z==null)return""
if(C.c.a5(z,"["))return C.c.t(z,1,z.length-1)
return z},
gbN:function(a){var z=this.d
if(z==null)return P.h4(this.a)
return z},
gcS:function(){var z=this.f
return z==null?"":z},
ger:function(){var z=this.r
return z==null?"":z},
cW:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.j(h,"$isG",[P.h,null],"$asG")
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
g=P.dI(g,0,0,h)
return new P.cH(i,j,c,f,d,g,this.r)},
eP:function(a,b){return this.cW(a,null,null,null,null,null,null,b,null,null)},
gcT:function(){var z,y
if(this.Q==null){z=this.f
y=P.h
this.shX(new P.fx(P.fB(z==null?"":z,C.m),[y,y]))}return this.Q},
ges:function(){return this.c!=null},
gew:function(){return this.f!=null},
geu:function(){return this.r!=null},
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
u:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!!J.L(b).$isdB){if(this.a==b.gbV())if(this.c!=null===b.ges())if(this.b==b.geZ())if(this.gcL(this)==b.gcL(b))if(this.gbN(this)==b.gbN(b))if(this.e===b.geL(b)){z=this.f
y=z==null
if(!y===b.gew()){if(y)z=""
if(z===b.gcS()){z=this.r
y=z==null
if(!y===b.geu()){if(y)z=""
z=z===b.ger()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
return z}return!1},
gX:function(a){var z=this.z
if(z==null){z=C.c.gX(this.i(0))
this.z=z}return z},
$isdB:1,
n:{
cb:function(a,b,c,d){var z,y,x,w,v,u
H.j(a,"$isa",[P.m],"$asa")
if(c===C.m){z=$.$get$h9().b
if(typeof b!=="string")H.r(H.ag(b))
z=z.test(b)}else z=!1
if(z)return b
H.x(b,H.a6(c,"bS",0))
y=c.gjC().cu(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.f(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.bb(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
m6:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.mh(a,b,d)
else{if(d===b)P.bI(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.mi(a,z,e-1):""
x=P.mb(a,e,f,!1)
if(typeof f!=="number")return f.G()
w=f+1
if(typeof g!=="number")return H.B(g)
v=w<g?P.me(P.ce(C.c.t(a,w,g),new P.m7(a,f),null),j):null}else{y=""
x=null
v=null}u=P.mc(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.T()
t=h<i?P.dI(a,h+1,i,null):null
return new P.cH(j,y,x,v,u,t,i<c?P.ma(a,i+1,c):null)},
h4:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bI:function(a,b,c){throw H.d(P.V(c,a,b))},
me:function(a,b){if(a!=null&&a===P.h4(b))return
return a},
mb:function(a,b,c,d){var z,y
if(b===c)return""
if(C.c.a_(a,b)===91){if(typeof c!=="number")return c.R()
z=c-1
if(C.c.a_(a,z)!==93)P.bI(a,b,"Missing end `]` to match `[` in host")
P.fA(a,b+1,z)
return C.c.t(a,b,c).toLowerCase()}if(typeof c!=="number")return H.B(c)
y=b
for(;y<c;++y)if(C.c.a_(a,y)===58){P.fA(a,b,c)
return"["+a+"]"}return P.mk(a,b,c)},
mk:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.B(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.c.a_(a,z)
if(v===37){u=P.hb(a,z,!0)
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
if(t>=8)return H.f(C.K,t)
t=(C.K[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.aj("")
if(y<z){x.a+=C.c.t(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.f(C.t,t)
t=(C.t[t]&1<<(v&15))!==0}else t=!1
if(t)P.bI(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.c.a_(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.aj("")
s=C.c.t(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.h5(v)
z+=q
y=z}}}}if(x==null)return C.c.t(a,b,c)
if(y<c){s=C.c.t(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
mh:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.h7(C.c.H(a,b)))P.bI(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.c.H(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.f(C.v,w)
w=(C.v[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bI(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.c.t(a,b,c)
return P.m8(y?a.toLowerCase():a)},
m8:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mi:function(a,b,c){return P.bJ(a,b,c,C.a9,!1)},
mc:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bJ(a,b,c,C.L,!0):C.r.lo(d,new P.md(),P.h).k(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.c.a5(w,"/"))w="/"+w
return P.mj(w,e,f)},
mj:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.c.a5(a,"/"))return P.ml(a,!z||c)
return P.mm(a)},
dI:function(a,b,c,d){var z,y
z={}
H.j(d,"$isG",[P.h,null],"$asG")
if(a!=null){if(d!=null)throw H.d(P.bR("Both query and queryParameters specified"))
return P.bJ(a,b,c,C.u,!0)}if(d==null)return
y=new P.aj("")
z.a=""
d.Z(0,new P.mf(new P.mg(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
ma:function(a,b,c){return P.bJ(a,b,c,C.u,!0)},
hb:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.c.a_(a,b+1)
x=C.c.a_(a,z)
w=H.cN(y)
v=H.cN(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.h.aP(u,4)
if(z>=8)return H.f(C.w,z)
z=(C.w[z]&1<<(u&15))!==0}else z=!1
if(z)return H.bb(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.c.t(a,b,b+3).toUpperCase()
return},
h5:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.c(z,[P.m])
C.a.q(y,0,37)
C.a.q(y,1,C.c.H("0123456789ABCDEF",a>>>4))
C.a.q(y,2,C.c.H("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.c(z,[P.m])
for(v=0;--w,w>=0;x=128){u=C.h.il(a,6*w)&63|x
C.a.q(y,v,37)
C.a.q(y,v+1,C.c.H("0123456789ABCDEF",u>>>4))
C.a.q(y,v+2,C.c.H("0123456789ABCDEF",u&15))
v+=3}}return P.c6(y,0,null)},
bJ:function(a,b,c,d,e){var z=P.ha(a,b,c,H.j(d,"$isa",[P.m],"$asa"),e)
return z==null?C.c.t(a,b,c):z},
ha:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.j(d,"$isa",[P.m],"$asa")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.T()
if(typeof c!=="number")return H.B(c)
if(!(y<c))break
c$0:{v=C.c.a_(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.f(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.hb(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.f(C.t,u)
u=(C.t[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bI(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.c.a_(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.h5(v)}}if(w==null)w=new P.aj("")
w.a+=C.c.t(a,x,y)
w.a+=H.i(t)
if(typeof s!=="number")return H.B(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.T()
if(x<c)w.a+=C.c.t(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
h8:function(a){if(C.c.a5(a,"."))return!0
return C.c.ex(a,"/.")!==-1},
mm:function(a){var z,y,x,w,v,u,t
if(!P.h8(a))return a
z=H.c([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.M(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.f(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.k(z,"/")},
ml:function(a,b){var z,y,x,w,v,u
if(!P.h8(a))return!b?P.h6(a):a
z=H.c([],[P.h])
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
C.a.q(z,0,P.h6(z[0]))}return C.a.k(z,"/")},
h6:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.h7(J.hF(a,0)))for(y=1;y<z;++y){x=C.c.H(a,y)
if(x===58)return C.c.t(a,0,y)+"%3A"+C.c.ar(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.f(C.v,w)
w=(C.v[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
m9:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.c.H(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.d(P.bR("Invalid URL encoding"))}}return z},
dJ:function(a,b,c,d,e){var z,y,x,w,v
y=b
while(!0){if(!(y<c)){z=!0
break}x=C.c.H(a,y)
if(x<=127)if(x!==37)w=x===43
else w=!0
else w=!0
if(w){z=!1
break}++y}if(z){if(C.m!==d)w=!1
else w=!0
if(w)return C.c.t(a,b,c)
else v=new H.v(C.c.t(a,b,c))}else{v=H.c([],[P.m])
for(w=a.length,y=b;y<c;++y){x=C.c.H(a,y)
if(x>127)throw H.d(P.bR("Illegal percent encoding in URI"))
if(x===37){if(y+3>w)throw H.d(P.bR("Truncated URI"))
C.a.h(v,P.m9(a,y+1))
y+=2}else if(x===43)C.a.h(v,32)
else C.a.h(v,x)}}H.j(v,"$isa",[P.m],"$asa")
return new P.kS(!1).cu(v)},
h7:function(a){var z=a|32
return 97<=z&&z<=122}}},
m7:{"^":"n:40;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.G()
throw H.d(P.V("Invalid port",this.a,z+1))}},
md:{"^":"n:14;",
$1:function(a){return P.cb(C.aa,a,C.m,!1)}},
mg:{"^":"n:38;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.i(P.cb(C.w,a,C.m,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.i(P.cb(C.w,b,C.m,!0))}}},
mf:{"^":"n:35;a",
$2:function(a,b){var z,y
H.C(a)
if(b==null||typeof b==="string")this.a.$2(a,H.C(b))
else for(z=J.b4(H.hu(b,"$iso")),y=this.a;z.C();)y.$2(a,H.C(z.gJ()))}},
kI:{"^":"b;a,b,c",
geX:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
z=z[0]+1
x=C.c.ey(y,"?",z)
w=y.length
if(x>=0){v=P.bJ(y,x+1,w,C.u,!1)
w=x}else v=null
z=new P.ll(this,"data",null,null,null,P.bJ(y,z,w,C.L,!1),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
n:{
fy:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.c([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.c.H(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.d(P.V("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.d(P.V("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.c.H(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaz(z)
if(v!==44||x!==t+7||!C.c.ac(a,"base64",t+1))throw H.d(P.V("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.Q.jY(a,s,y)
else{r=P.ha(a,s,y,C.u,!0)
if(r!=null)a=C.c.aX(a,s,y,r)}return new P.kI(a,z,c)}}},
mz:{"^":"n:34;",
$1:function(a){return new Uint8Array(96)}},
my:{"^":"n:33;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.f(z,a)
z=z[a]
J.hH(z,0,96,b)
return z}},
mA:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.c.H(b,y)^96
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
mB:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=C.c.H(b,0),y=C.c.H(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
lS:{"^":"b;a,b,c,d,e,f,r,x,0y",
ges:function(){return this.c>0},
gev:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.G()
y=this.e
if(typeof y!=="number")return H.B(y)
y=z+1<y
z=y}else z=!1
return z},
gew:function(){var z=this.f
if(typeof z!=="number")return z.T()
return z<this.r},
geu:function(){return this.r<this.a.length},
gdw:function(){return this.b===4&&C.c.a5(this.a,"http")},
gdz:function(){return this.b===5&&C.c.a5(this.a,"https")},
gbV:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdw()){this.x="http"
z="http"}else if(this.gdz()){this.x="https"
z="https"}else if(z===4&&C.c.a5(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.c.a5(this.a,"package")){this.x="package"
z="package"}else{z=C.c.t(this.a,0,z)
this.x=z}return z},
geZ:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.c.t(this.a,y,z-1):""},
gcL:function(a){var z=this.c
return z>0?C.c.t(this.a,z,this.d):""},
gbN:function(a){var z
if(this.gev()){z=this.d
if(typeof z!=="number")return z.G()
return P.ce(C.c.t(this.a,z+1,this.e),null,null)}if(this.gdw())return 80
if(this.gdz())return 443
return 0},
geL:function(a){return C.c.t(this.a,this.e,this.f)},
gcS:function(){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.T()
return z<y?C.c.t(this.a,z+1,y):""},
ger:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.c.ar(y,z+1):""},
gcT:function(){var z=this.f
if(typeof z!=="number")return z.T()
if(z>=this.r)return C.ab
z=P.h
return new P.fx(P.fB(this.gcS(),C.m),[z,z])},
cW:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.j(h,"$isG",[P.h,null],"$asG")
i=this.gbV()
z=i==="file"
y=this.c
j=y>0?C.c.t(this.a,this.b+3,y):""
f=this.gev()?this.gbN(this):null
y=this.c
if(y>0)c=C.c.t(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.c.t(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.c.a5(d,"/"))d="/"+d
g=P.dI(g,0,0,h)
x=this.r
if(x<y.length)b=C.c.ar(y,x+1)
return new P.cH(i,j,c,f,d,g,b)},
eP:function(a,b){return this.cW(a,null,null,null,null,null,null,b,null,null)},
gX:function(a){var z=this.y
if(z==null){z=C.c.gX(this.a)
this.y=z}return z},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!!J.L(b).$isdB)return this.a===b.i(0)
return!1},
i:function(a){return this.a},
$isdB:1},
ll:{"^":"cH;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
e5:function(a){var z=document.createElement("a")
return z},
cZ:function(a,b){var z=document.createElement("canvas")
return z},
ih:function(a,b,c){var z,y
z=document.body
y=(z&&C.p).am(z,a,b,c)
y.toString
z=W.A
z=new H.dE(new W.ap(y),H.l(new W.ii(),{func:1,ret:P.K,args:[z]}),[z])
return H.e(z.gaI(z),"$isP")},
ij:function(a){H.e(a,"$iscm")
return"wheel"},
bw:function(a){var z,y,x
z="element tag unavailable"
try{y=J.hK(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a8(x)}return z},
iG:function(a){var z,y,x
y=document.createElement("input")
z=H.e(y,"$isez")
try{J.hM(z,a)}catch(x){H.a8(x)}return z},
cE:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fV:function(a,b,c,d){var z,y
z=W.cE(W.cE(W.cE(W.cE(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
hk:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.S
if(z===C.l)return a
return z.dY(a,b)},
a1:{"^":"P;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
hQ:{"^":"a1;",
i:function(a){return String(a)},
$ishQ:1,
"%":"HTMLAnchorElement"},
nC:{"^":"a1;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
e8:{"^":"a1;",$ise8:1,"%":"HTMLBaseElement"},
ci:{"^":"a1;",$isci:1,"%":"HTMLBodyElement"},
cY:{"^":"a1;",
bT:function(a,b,c){if(c!=null)return this.hf(a,b,P.mN(c,null))
return this.hg(a,b)},
f9:function(a,b){return this.bT(a,b,null)},
hf:function(a,b,c){return a.getContext(b,c)},
hg:function(a,b){return a.getContext(b)},
$iscY:1,
$isef:1,
"%":"HTMLCanvasElement"},
d_:{"^":"F;",
hh:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
jz:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$isd_:1,
"%":"CanvasRenderingContext2D"},
nF:{"^":"A;0p:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
nH:{"^":"lk;0p:length=",
fb:function(a,b){var z=this.hi(a,this.fZ(a,b))
return z==null?"":z},
fZ:function(a,b){var z,y
z=$.$get$ek()
y=z[b]
if(typeof y==="string")return y
y=this.ip(a,b)
z[b]=y
return y},
ip:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.ia()+b
if(z in a)return z
return b},
hi:function(a,b){return a.getPropertyValue(b)},
gcp:function(a){return a.bottom},
gba:function(a){return a.height},
gaT:function(a){return a.left},
gbQ:function(a){return a.right},
gbh:function(a){return a.top},
gbj:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
i5:{"^":"b;",
gaT:function(a){return this.fb(a,"left")}},
aW:{"^":"a1;",$isaW:1,"%":"HTMLDivElement"},
ib:{"^":"A;",
j4:function(a,b){return a.adoptNode(b)},
d0:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
nI:{"^":"F;",
i:function(a){return String(a)},
"%":"DOMException"},
ic:{"^":"F;",
jo:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
id:{"^":"F;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
u:function(a,b){var z
if(b==null)return!1
if(!H.bO(b,"$isaK",[P.ak],"$asaK"))return!1
z=J.W(b)
return a.left===z.gaT(b)&&a.top===z.gbh(b)&&a.width===z.gbj(b)&&a.height===z.gba(b)},
gX:function(a){return W.fV(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gcp:function(a){return a.bottom},
gba:function(a){return a.height},
gaT:function(a){return a.left},
gbQ:function(a){return a.right},
gbh:function(a){return a.top},
gbj:function(a){return a.width},
$isaK:1,
$asaK:function(){return[P.ak]},
"%":";DOMRectReadOnly"},
lj:{"^":"cs;dq:a<,b",
gp:function(a){return this.b.length},
l:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.f(z,b)
return H.e(z[b],"$isP")},
q:function(a,b,c){var z
H.e(c,"$isP")
z=this.b
if(b<0||b>=z.length)return H.f(z,b)
J.cR(this.a,c,z[b])},
h:function(a,b){J.e2(this.a,b)
return b},
gS:function(a){var z=this.kA(this)
return new J.as(z,z.length,0,[H.t(z,0)])},
$asT:function(){return[W.P]},
$aso:function(){return[W.P]},
$asa:function(){return[W.P]}},
P:{"^":"A;0kv:tagName=",
gj8:function(a){return new W.lm(a)},
gct:function(a){return new W.lj(a,a.children)},
ge_:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.T()
if(x<0)x=-x*0
if(typeof w!=="number")return w.T()
if(w<0)w=-w*0
return new P.aK(z,y,x,w,[P.ak])},
i:function(a){return a.localName},
am:["bW",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.ev
if(z==null){z=H.c([],[W.aC])
y=new W.eS(z)
C.a.h(z,W.fT(null))
C.a.h(z,W.h1())
$.ev=y
d=y}else d=z
z=$.eu
if(z==null){z=new W.hc(d)
$.eu=z
c=z}else{z.a=d
c=z}}if($.aH==null){z=document
y=z.implementation
y=(y&&C.U).jo(y,"")
$.aH=y
$.d1=y.createRange()
y=$.aH
y.toString
y=y.createElement("base")
H.e(y,"$ise8")
y.href=z.baseURI
z=$.aH.head;(z&&C.W).D(z,y)}z=$.aH
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.e(y,"$isci")}z=$.aH
if(!!this.$isci)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.aH.body;(z&&C.p).D(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.W(C.a8,a.tagName)){z=$.d1;(z&&C.N).fg(z,x)
z=$.d1
w=(z&&C.N).jm(z,b)}else{x.innerHTML=b
w=$.aH.createDocumentFragment()
for(z=J.W(w);y=x.firstChild,y!=null;)z.D(w,y)}z=$.aH.body
if(x==null?z!=null:x!==z)J.e4(x)
c.d3(w)
C.z.j4(document,w)
return w},function(a,b,c){return this.am(a,b,c,null)},"jn",null,null,"gll",5,5,null],
fj:function(a,b,c,d){a.textContent=null
this.D(a,this.am(a,b,c,d))},
fi:function(a,b){return this.fj(a,b,null,null)},
b_:function(a,b){return a.getAttribute(b)},
hZ:function(a,b){return a.removeAttribute(b)},
fh:function(a,b,c){return a.setAttribute(b,c)},
$isP:1,
"%":";Element"},
ii:{"^":"n:23;",
$1:function(a){return!!J.L(H.e(a,"$isA")).$isP}},
a9:{"^":"F;",$isa9:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
cm:{"^":"F;",
fU:function(a,b,c,d){return a.addEventListener(b,H.bl(H.l(c,{func:1,args:[W.a9]}),1),!1)},
$iscm:1,
"%":";EventTarget"},
nJ:{"^":"a1;0p:length=","%":"HTMLFormElement"},
iz:{"^":"a1;","%":"HTMLHeadElement"},
iA:{"^":"F;0p:length=",
i4:function(a,b,c,d){return a.replaceState(b,c,d)},
"%":"History"},
iB:{"^":"lC;",
gp:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.b5(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.e(c,"$isA")
throw H.d(P.U("Cannot assign element of immutable List."))},
a9:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isau:1,
$asau:function(){return[W.A]},
$asT:function(){return[W.A]},
$iso:1,
$aso:function(){return[W.A]},
$isa:1,
$asa:function(){return[W.A]},
$isiB:1,
$asaA:function(){return[W.A]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
iC:{"^":"ib;","%":"HTMLDocument"},
bW:{"^":"F;0e1:data=",$isbW:1,"%":"ImageData"},
ey:{"^":"a1;",$isey:1,$isef:1,"%":"HTMLImageElement"},
ez:{"^":"a1;0type",
skD:function(a,b){a.type=H.C(b)},
$isez:1,
"%":"HTMLInputElement"},
bA:{"^":"dr;",$isbA:1,"%":"KeyboardEvent"},
iP:{"^":"a1;","%":"HTMLLabelElement"},
j2:{"^":"F;",
i:function(a){return String(a)},
$isj2:1,
"%":"Location"},
ji:{"^":"a1;","%":"HTMLAudioElement;HTMLMediaElement"},
av:{"^":"dr;",$isav:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ap:{"^":"cs;a",
gaI:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.d(P.f9("No elements"))
if(y>1)throw H.d(P.f9("More than one element"))
return z.firstChild},
au:function(a,b){var z,y,x,w,v
H.j(b,"$iso",[W.A],"$aso")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.W(y),v=0;v<x;++v)w.D(y,z.firstChild)
return},
q:function(a,b,c){var z,y
H.e(c,"$isA")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.f(y,b)
J.cR(z,c,y[b])},
gS:function(a){var z=this.a.childNodes
return new W.ew(z,z.length,-1,[H.cd(C.ac,z,"aA",0)])},
gp:function(a){return this.a.childNodes.length},
l:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
$asT:function(){return[W.A]},
$aso:function(){return[W.A]},
$asa:function(){return[W.A]}},
A:{"^":"cm;0kh:previousSibling=",
kj:function(a){var z=a.parentNode
if(z!=null)J.cg(z,a)},
ko:function(a,b){var z,y
try{z=a.parentNode
J.cR(z,b,a)}catch(y){H.a8(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.fm(a):z},
D:function(a,b){return a.appendChild(H.e(b,"$isA"))},
i_:function(a,b){return a.removeChild(b)},
i3:function(a,b,c){return a.replaceChild(b,c)},
$isA:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
jm:{"^":"lI;",
gp:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.b5(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.e(c,"$isA")
throw H.d(P.U("Cannot assign element of immutable List."))},
a9:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isau:1,
$asau:function(){return[W.A]},
$asT:function(){return[W.A]},
$iso:1,
$aso:function(){return[W.A]},
$isa:1,
$asa:function(){return[W.A]},
$asaA:function(){return[W.A]},
"%":"NodeList|RadioNodeList"},
jK:{"^":"F;",
jm:function(a,b){return a.createContextualFragment(b)},
fg:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
nT:{"^":"a1;0p:length=","%":"HTMLSelectElement"},
cw:{"^":"a1;",$iscw:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
kf:{"^":"a1;",
am:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.bW(a,b,c,d)
z=W.ih("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.ap(y).au(0,new W.ap(z))
return y},
hk:function(a,b){return a.insertRow(b)},
"%":"HTMLTableElement"},
kg:{"^":"a1;",
am:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.bW(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.o.am(z.createElement("table"),b,c,d)
z.toString
z=new W.ap(z)
x=z.gaI(z)
x.toString
z=new W.ap(x)
w=z.gaI(z)
y.toString
w.toString
new W.ap(y).au(0,new W.ap(w))
return y},
dv:function(a,b){return a.insertCell(b)},
"%":"HTMLTableRowElement"},
nW:{"^":"a1;",
am:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.bW(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.o.am(z.createElement("table"),b,c,d)
z.toString
z=new W.ap(z)
x=z.gaI(z)
y.toString
x.toString
new W.ap(y).au(0,new W.ap(x))
return y},
"%":"HTMLTableSectionElement"},
fd:{"^":"a1;",$isfd:1,"%":"HTMLTemplateElement"},
bd:{"^":"F;",$isbd:1,"%":"Touch"},
be:{"^":"dr;",$isbe:1,"%":"TouchEvent"},
nY:{"^":"m3;",
gp:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.b5(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.e(c,"$isbd")
throw H.d(P.U("Cannot assign element of immutable List."))},
a9:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isau:1,
$asau:function(){return[W.bd]},
$asT:function(){return[W.bd]},
$iso:1,
$aso:function(){return[W.bd]},
$isa:1,
$asa:function(){return[W.bd]},
$asaA:function(){return[W.bd]},
"%":"TouchList"},
dr:{"^":"a9;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
o0:{"^":"ji;",$isef:1,"%":"HTMLVideoElement"},
bG:{"^":"av;",
gju:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.U("deltaY is not supported"))},
gjt:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.U("deltaX is not supported"))},
$isbG:1,
"%":"WheelEvent"},
lc:{"^":"cm;",
i5:function(a,b){return a.requestAnimationFrame(H.bl(H.l(b,{func:1,ret:-1,args:[P.ak]}),1))},
h8:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fP:{"^":"A;",$isfP:1,"%":"Attr"},
o5:{"^":"id;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
u:function(a,b){var z
if(b==null)return!1
if(!H.bO(b,"$isaK",[P.ak],"$asaK"))return!1
z=J.W(b)
return a.left===z.gaT(b)&&a.top===z.gbh(b)&&a.width===z.gbj(b)&&a.height===z.gba(b)},
gX:function(a){return W.fV(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gba:function(a){return a.height},
gbj:function(a){return a.width},
"%":"ClientRect|DOMRect"},
o9:{"^":"mu;",
gp:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.b5(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.e(c,"$isA")
throw H.d(P.U("Cannot assign element of immutable List."))},
a9:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isau:1,
$asau:function(){return[W.A]},
$asT:function(){return[W.A]},
$iso:1,
$aso:function(){return[W.A]},
$isa:1,
$asa:function(){return[W.A]},
$asaA:function(){return[W.A]},
"%":"MozNamedAttrMap|NamedNodeMap"},
li:{"^":"eJ;dq:a<",
Z:function(a,b){var z,y,x,w,v,u
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(z=this.gay(),y=z.length,x=this.a,w=J.W(x),v=0;v<z.length;z.length===y||(0,H.y)(z),++v){u=z[v]
b.$2(u,w.b_(x,u))}},
gay:function(){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.h])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
v=H.e(z[w],"$isfP")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$ascu:function(){return[P.h,P.h]},
$asG:function(){return[P.h,P.h]}},
lm:{"^":"li;a",
l:function(a,b){return J.cT(this.a,H.C(b))},
q:function(a,b,c){J.hN(this.a,b,c)},
gp:function(a){return this.gay().length}},
ln:{"^":"ka;a,b,c,$ti"},
o6:{"^":"ln;a,b,c,$ti"},
lo:{"^":"dk;a,b,c,d,e,$ti",n:{
a0:function(a,b,c,d,e){var z,y
z=W.hk(new W.lp(c),W.a9)
y=z!=null
if(y&&!0){H.l(z,{func:1,args:[W.a9]})
if(y)J.hE(a,b,z,!1)}return new W.lo(0,a,b,z,!1,[e])}}},
lp:{"^":"n:31;a",
$1:function(a){return this.a.$1(H.e(a,"$isa9"))}},
ca:{"^":"b;a",
fF:function(a){var z,y
z=$.$get$dG()
if(z.gjP(z)){for(y=0;y<262;++y)z.q(0,C.a7[y],W.n3())
for(y=0;y<12;++y)z.q(0,C.B[y],W.n4())}},
aQ:function(a){return $.$get$fU().W(0,W.bw(a))},
aF:function(a,b,c){var z,y,x
z=W.bw(a)
y=$.$get$dG()
x=y.l(0,H.i(z)+"::"+b)
if(x==null)x=y.l(0,"*::"+b)
if(x==null)return!1
return H.dO(x.$4(a,b,c,this))},
$isaC:1,
n:{
fT:function(a){var z,y
z=W.e5(null)
y=window.location
z=new W.ca(new W.lO(z,y))
z.fF(a)
return z},
o7:[function(a,b,c,d){H.e(a,"$isP")
H.C(b)
H.C(c)
H.e(d,"$isca")
return!0},"$4","n3",16,0,19],
o8:[function(a,b,c,d){var z,y,x
H.e(a,"$isP")
H.C(b)
H.C(c)
z=H.e(d,"$isca").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","n4",16,0,19]}},
aA:{"^":"b;$ti",
gS:function(a){return new W.ew(a,this.gp(a),-1,[H.cd(this,a,"aA",0)])}},
eS:{"^":"b;a",
aQ:function(a){return C.a.dS(this.a,new W.jo(a))},
aF:function(a,b,c){return C.a.dS(this.a,new W.jn(a,b,c))},
$isaC:1},
jo:{"^":"n:25;a",
$1:function(a){return H.e(a,"$isaC").aQ(this.a)}},
jn:{"^":"n:25;a,b,c",
$1:function(a){return H.e(a,"$isaC").aF(this.a,this.b,this.c)}},
lP:{"^":"b;",
fO:function(a,b,c,d){var z,y,x
this.a.au(0,c)
z=b.d_(0,new W.lQ())
y=b.d_(0,new W.lR())
this.b.au(0,z)
x=this.c
x.au(0,C.I)
x.au(0,y)},
aQ:function(a){return this.a.W(0,W.bw(a))},
aF:["fs",function(a,b,c){var z,y
z=W.bw(a)
y=this.c
if(y.W(0,H.i(z)+"::"+b))return this.d.j5(c)
else if(y.W(0,"*::"+b))return this.d.j5(c)
else{y=this.b
if(y.W(0,H.i(z)+"::"+b))return!0
else if(y.W(0,"*::"+b))return!0
else if(y.W(0,H.i(z)+"::*"))return!0
else if(y.W(0,"*::*"))return!0}return!1}],
$isaC:1},
lQ:{"^":"n:26;",
$1:function(a){return!C.a.W(C.B,H.C(a))}},
lR:{"^":"n:26;",
$1:function(a){return C.a.W(C.B,H.C(a))}},
lX:{"^":"lP;e,a,b,c,d",
aF:function(a,b,c){if(this.fs(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cT(a,"template")==="")return this.e.W(0,b)
return!1},
n:{
h1:function(){var z,y,x,w,v
z=P.h
y=P.eH(C.A,z)
x=H.t(C.A,0)
w=H.l(new W.lY(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.lX(y,P.c0(null,null,null,z),P.c0(null,null,null,z),P.c0(null,null,null,z),null)
y.fO(null,new H.j8(C.A,w,[x,z]),v,null)
return y}}},
lY:{"^":"n:14;",
$1:function(a){return"TEMPLATE::"+H.i(H.C(a))}},
lW:{"^":"b;",
aQ:function(a){var z=J.L(a)
if(!!z.$isf4)return!1
z=!!z.$isdl
if(z&&W.bw(a)==="foreignObject")return!1
if(z)return!0
return!1},
aF:function(a,b,c){if(b==="is"||C.c.a5(b,"on"))return!1
return this.aQ(a)},
$isaC:1},
ew:{"^":"b;a,b,c,0d,$ti",
sdt:function(a){this.d=H.x(a,H.t(this,0))},
C:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sdt(J.hD(this.a,z))
this.c=z
return!0}this.sdt(null)
this.c=y
return!1},
gJ:function(){return this.d},
$isaX:1},
aC:{"^":"b;"},
lO:{"^":"b;a,b",$iso_:1},
hc:{"^":"b;a",
d3:function(a){new W.mr(this).$2(a,null)},
b5:function(a,b){if(b==null)J.e4(a)
else J.cg(b,a)},
ib:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.hI(a)
x=J.cT(y.gdq(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a8(t)}v="element unprintable"
try{v=J.ae(a)}catch(t){H.a8(t)}try{u=W.bw(a)
this.ia(H.e(a,"$isP"),b,z,v,u,H.e(y,"$isG"),H.C(x))}catch(t){if(H.a8(t) instanceof P.aF)throw t
else{this.b5(a,b)
window
s="Removing corrupted element "+H.i(v)
if(typeof console!="undefined")window.console.warn(s)}}},
ia:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.b5(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aQ(a)){this.b5(a,b)
window
z="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.aF(a,"is",g)){this.b5(a,b)
window
z="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gay()
y=H.c(z.slice(0),[H.t(z,0)])
for(x=f.gay().length-1,z=f.a,w=J.W(z);x>=0;--x){if(x>=y.length)return H.f(y,x)
v=y[x]
if(!this.a.aF(a,J.hP(v),w.b_(z,v))){window
u="Removing disallowed attribute <"+H.i(e)+" "+v+'="'+H.i(w.b_(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.b_(z,v)
w.hZ(z,v)}}if(!!J.L(a).$isfd)this.d3(a.content)},
$isnR:1},
mr:{"^":"n:46;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.ib(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.b5(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.hJ(z)}catch(w){H.a8(w)
v=H.e(z,"$isA")
if(x){u=v.parentNode
if(u!=null)J.cg(u,v)}else J.cg(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.e(y,"$isA")}}},
lk:{"^":"F+i5;"},
lB:{"^":"F+T;"},
lC:{"^":"lB+aA;"},
lH:{"^":"F+T;"},
lI:{"^":"lH+aA;"},
m2:{"^":"F+T;"},
m3:{"^":"m2+aA;"},
mt:{"^":"F+T;"},
mu:{"^":"mt+aA;"}}],["","",,P,{"^":"",
mQ:function(a){var z,y
z=J.L(a)
if(!!z.$isbW){y=z.ge1(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.h3(a.data,a.height,a.width)},
mP:function(a){if(a instanceof P.h3)return{data:a.a,height:a.b,width:a.c}
return a},
mN:function(a,b){var z={}
a.Z(0,new P.mO(z))
return z},
eq:function(){var z=$.ep
if(z==null){z=J.cS(window.navigator.userAgent,"Opera",0)
$.ep=z}return z},
ia:function(){var z,y
z=$.em
if(z!=null)return z
y=$.en
if(y==null){y=J.cS(window.navigator.userAgent,"Firefox",0)
$.en=y}if(y)z="-moz-"
else{y=$.eo
if(y==null){y=!P.eq()&&J.cS(window.navigator.userAgent,"Trident/",0)
$.eo=y}if(y)z="-ms-"
else z=P.eq()?"-o-":"-webkit-"}$.em=z
return z},
lT:{"^":"b;",
ep:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
cZ:function(a){var z,y,x,w
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.L(a)
if(!!y.$isaz)return new Date(a.a)
if(!!y.$isjO)throw H.d(P.cA("structured clone of RegExp"))
if(!!y.$isbW)return a
if(!!y.$isdd)return a
if(!!y.$isG){x=this.ep(a)
y=this.b
if(x>=y.length)return H.f(y,x)
w=y[x]
z.a=w
if(w!=null)return w
w={}
z.a=w
C.a.q(y,x,w)
a.Z(0,new P.lV(z,this))
return z.a}if(!!y.$isa){x=this.ep(a)
z=this.b
if(x>=z.length)return H.f(z,x)
w=z[x]
if(w!=null)return w
return this.jl(a,x)}throw H.d(P.cA("structured clone of other type"))},
jl:function(a,b){var z,y,x,w
z=J.bo(a)
y=z.gp(a)
x=new Array(y)
C.a.q(this.b,b,x)
for(w=0;w<y;++w)C.a.q(x,w,this.cZ(z.l(a,w)))
return x}},
lV:{"^":"n:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.cZ(b)}},
h3:{"^":"b;e1:a>,b,c",$isbW:1},
mO:{"^":"n:6;a",
$2:function(a,b){this.a[a]=b}},
lU:{"^":"lT;a,b"},
ir:{"^":"cs;a,b",
gbq:function(){var z,y,x
z=this.b
y=H.a6(z,"T",0)
x=W.P
return new H.j6(new H.dE(z,H.l(new P.is(),{func:1,ret:P.K,args:[y]}),[y]),H.l(new P.it(),{func:1,ret:x,args:[y]}),[y,x])},
q:function(a,b,c){var z
H.e(c,"$isP")
z=this.gbq()
J.hL(z.b.$1(J.ch(z.a,b)),c)},
h:function(a,b){J.e2(this.b.a,b)},
gp:function(a){return J.ar(this.gbq().a)},
l:function(a,b){var z=this.gbq()
return z.b.$1(J.ch(z.a,b))},
gS:function(a){var z=P.j0(this.gbq(),!1,W.P)
return new J.as(z,z.length,0,[H.t(z,0)])},
$asT:function(){return[W.P]},
$aso:function(){return[W.P]},
$asa:function(){return[W.P]}},
is:{"^":"n:23;",
$1:function(a){return!!J.L(H.e(a,"$isA")).$isP}},
it:{"^":"n:55;",
$1:function(a){return H.k(H.e(a,"$isA"),"$isP")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cF:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lD:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
lJ:{"^":"b;$ti",
gbQ:function(a){var z=this.a
if(typeof z!=="number")return z.G()
return H.x(z+this.c,H.t(this,0))},
gcp:function(a){var z=this.b
if(typeof z!=="number")return z.G()
return H.x(z+this.d,H.t(this,0))},
i:function(a){return"Rectangle ("+H.i(this.a)+", "+H.i(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(!H.bO(b,"$isaK",[P.ak],"$asaK"))return!1
z=this.a
y=J.W(b)
x=y.gaT(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbh(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.G()
w=H.t(this,0)
if(H.x(z+this.c,w)===y.gbQ(b)){if(typeof x!=="number")return x.G()
z=H.x(x+this.d,w)===y.gcp(b)}else z=!1}else z=!1}else z=!1
return z},
gX:function(a){var z,y,x,w,v
z=this.a
y=J.bQ(z)
x=this.b
w=J.bQ(x)
if(typeof z!=="number")return z.G()
v=H.t(this,0)
z=H.x(z+this.c,v)
if(typeof x!=="number")return x.G()
v=H.x(x+this.d,v)
return P.lD(P.cF(P.cF(P.cF(P.cF(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
aK:{"^":"lJ;aT:a>,bh:b>,bj:c>,ba:d>,$ti"}}],["","",,P,{"^":"",f4:{"^":"dl;",$isf4:1,"%":"SVGScriptElement"},dl:{"^":"P;",
gct:function(a){return new P.ir(a,new W.ap(a))},
am:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.aC])
C.a.h(z,W.fT(null))
C.a.h(z,W.h1())
C.a.h(z,new W.lW())
c=new W.hc(new W.eS(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).jn(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.ap(w)
u=z.gaI(z)
for(z=J.W(v);x=u.firstChild,x!=null;)z.D(v,x)
return v},
$isdl:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"}}],["","",,P,{"^":"",N:{"^":"b;",$iso:1,
$aso:function(){return[P.m]},
$isa:1,
$asa:function(){return[P.m]},
$iskt:1}}],["","",,P,{"^":""}],["","",,P,{"^":"",hU:{"^":"F;",$ishU:1,"%":"WebGLBuffer"},iv:{"^":"F;",$isiv:1,"%":"WebGLFramebuffer"},jH:{"^":"F;",$isjH:1,"%":"WebGLProgram"},df:{"^":"F;",
dO:function(a,b){return a.activeTexture(b)},
dT:function(a,b,c){return a.attachShader(b,c)},
av:function(a,b,c){return a.bindBuffer(b,c)},
ja:function(a,b,c){return a.bindFramebuffer(b,c)},
aR:function(a,b,c){return a.bindTexture(b,c)},
jb:function(a,b,c){return a.blendFunc(b,c)},
dZ:function(a,b,c,d){return a.bufferData(b,c,d)},
je:function(a,b){return a.clear(b)},
jf:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
jg:function(a,b){return a.clearDepth(b)},
ji:function(a,b){return a.compileShader(b)},
jp:function(a,b){return a.createShader(b)},
jr:function(a,b){return a.deleteProgram(b)},
js:function(a,b){return a.deleteShader(b)},
jv:function(a,b){return a.depthFunc(b)},
jw:function(a,b){return a.disable(b)},
e2:function(a,b){return a.disableVertexAttribArray(b)},
jy:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cC:function(a,b){return a.enable(b)},
e3:function(a,b){return a.enableVertexAttribArray(b)},
f4:function(a,b){return a.generateMipmap(b)},
f5:function(a,b,c){return a.getActiveAttrib(b,c)},
f6:function(a,b,c){return a.getActiveUniform(b,c)},
f7:function(a,b,c){return a.getAttribLocation(b,c)},
d1:function(a,b){return a.getParameter(b)},
fa:function(a,b){return a.getProgramInfoLog(b)},
bU:function(a,b,c){return a.getProgramParameter(b,c)},
fc:function(a,b){return a.getShaderInfoLog(b)},
fd:function(a,b,c){return a.getShaderParameter(b,c)},
fe:function(a,b,c){return a.getUniformLocation(b,c)},
jS:function(a,b){return a.linkProgram(b)},
kg:function(a,b,c){return a.pixelStorei(b,c)},
fk:function(a,b,c){return a.shaderSource(b,c)},
kx:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.L(g)
if(!!z.$isbW)y=!0
else y=!1
if(y){this.ir(a,b,c,d,e,f,P.mP(g))
return}if(!!z.$isey)z=!0
else z=!1
if(z){this.is(a,b,c,d,e,f,g)
return}throw H.d(P.bR("Incorrect number or type of arguments"))},
kw:function(a,b,c,d,e,f,g){return this.kx(a,b,c,d,e,f,g,null,null,null)},
ir:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
is:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bR:function(a,b,c,d){return a.texParameteri(b,c,d)},
P:function(a,b,c){return a.uniform1f(b,c)},
V:function(a,b,c){return a.uniform1i(b,c)},
v:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eV:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eW:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
eY:function(a,b){return a.useProgram(b)},
kF:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
kG:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isdf:1,
"%":"WebGLRenderingContext"},k_:{"^":"F;",$isk_:1,"%":"WebGLShader"},kh:{"^":"F;",$iskh:1,"%":"WebGLTexture"},kC:{"^":"F;",$iskC:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",Z:{"^":"b;0a,0b,0c,0d,$ti",
sho:function(a){this.a=H.j(a,"$isa",[H.a6(this,"Z",0)],"$asa")},
sdD:function(a){this.b=H.l(a,{func:1,ret:P.K,args:[[P.o,H.a6(this,"Z",0)]]})},
sdB:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.m,[P.o,H.a6(this,"Z",0)]]})},
sdE:function(a){this.d=H.l(a,{func:1,ret:-1,args:[P.m,[P.o,H.a6(this,"Z",0)]]})},
bY:function(a){this.sho(H.c([],[a]))
this.sdD(null)
this.sdB(null)
this.sdE(null)},
d4:function(a,b,c){var z=H.a6(this,"Z",0)
H.l(b,{func:1,ret:P.K,args:[[P.o,z]]})
z={func:1,ret:-1,args:[P.m,[P.o,z]]}
H.l(a,z)
H.l(c,z)
this.sdD(b)
this.sdB(a)
this.sdE(c)},
bm:function(a,b){return this.d4(a,null,b)},
hO:function(a){var z
H.j(a,"$iso",[H.a6(this,"Z",0)],"$aso")
z=this.b
if(z!=null)return z.$1(a)
return!0},
hu:function(a,b){var z
H.j(b,"$iso",[H.a6(this,"Z",0)],"$aso")
z=this.c
if(z!=null)z.$2(a,b)},
gp:function(a){return this.a.length},
gS:function(a){var z=this.a
return new J.as(z,z.length,0,[H.t(z,0)])},
a9:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.a6(this,"Z",0)
H.x(b,z)
z=[z]
if(this.hO(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.hu(x,H.c([b],z))}},
$iso:1,
n:{
d0:function(a){var z=new O.Z([a])
z.bY(a)
return z}}},db:{"^":"b;0a,0b",
sc6:function(a){this.a=H.j(a,"$isa",[V.ah],"$asa")},
gp:function(a){return this.a.length},
gB:function(){var z=this.b
if(z==null){z=D.Q()
this.b=z}return z},
fB:function(a){var z=this.b
if(!(z==null))z.L(a)},
aJ:function(){return this.fB(null)},
ga0:function(){var z=this.a
if(z.length>0)return C.a.gaz(z)
else return V.c1()},
eN:function(a){var z=this.a
if(a==null)C.a.h(z,V.c1())
else C.a.h(z,a)
this.aJ()},
cQ:function(){var z=this.a
if(z.length>0){z.pop()
this.aJ()}}}}],["","",,E,{"^":"",cV:{"^":"b;"},at:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0ai:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sfC:function(a,b){this.y=H.j(b,"$isZ",[E.at],"$asZ")},
sai:function(a){this.z=H.e(a,"$isbx")},
de:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.as(z,z.length,0,[H.t(z,0)]);z.C();){y=z.d
if(y.f==null)y.de()}},
sab:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gB().K(0,this.geI())
y=this.c
if(y!=null)y.gB().h(0,this.geI())
x=new D.I("shape",z,this.c,this,[F.f6])
x.b=!0
this.aa(x)}},
sbf:function(a){var z,y,x
z=this.f
if(z==null?a!=null:z!==a){if(z!=null)z.gB().K(0,this.geJ())
y=this.f
this.f=a
if(a!=null)a.gB().h(0,this.geJ())
this.de()
x=new D.I("technique",y,this.f,this,[O.c7])
x.b=!0
this.aa(x)}},
saV:function(a){var z,y
if(!J.M(this.r,a)){z=this.r
if(z!=null)z.gB().K(0,this.geH())
if(a!=null)a.gB().h(0,this.geH())
this.r=a
y=new D.I("mover",z,a,this,[U.ai])
y.b=!0
this.aa(y)}},
aB:function(a){var z,y,x,w
z=this.r
y=z!=null?z.aZ(a,this):null
if(!J.M(y,this.x)){x=this.x
this.x=y
w=new D.I("matrix",x,y,this,[V.ah])
w.b=!0
this.aa(w)}z=this.f
if(z!=null)z.aB(a)
for(z=this.y.a,z=new J.as(z,z.length,0,[H.t(z,0)]);z.C();)z.d.aB(a)},
aW:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.ga0())
else C.a.h(z.a,y.E(0,z.ga0()))
z.aJ()
a.eO(this.f)
z=a.dy
x=(z&&C.a).gaz(z)
if(x!=null&&this.d!=null)x.kn(a,this)
for(z=this.y.a,z=new J.as(z,z.length,0,[H.t(z,0)]);z.C();)z.d.aW(a)
a.eM()
a.dx.cQ()},
gB:function(){var z=this.z
if(z==null){z=D.Q()
this.z=z}return z},
aa:function(a){var z=this.z
if(!(z==null))z.L(a)},
a2:function(){return this.aa(null)},
k6:[function(a){H.e(a,"$isz")
this.e=null
this.aa(a)},function(){return this.k6(null)},"lu","$1","$0","geI",0,2,1],
k7:[function(a){this.aa(H.e(a,"$isz"))},function(){return this.k7(null)},"lv","$1","$0","geJ",0,2,1],
k5:[function(a){this.aa(H.e(a,"$isz"))},function(){return this.k5(null)},"lt","$1","$0","geH",0,2,1],
k_:[function(a){this.aa(H.e(a,"$isz"))},function(){return this.k_(null)},"lr","$1","$0","geG",0,2,1],
lq:[function(a,b){var z,y,x,w,v,u,t
H.j(b,"$iso",[E.at],"$aso")
for(z=b.length,y=this.geG(),x={func:1,ret:-1,args:[D.z]},w=[x],v=0;v<b.length;b.length===z||(0,H.y)(b),++v){u=b[v]
if(u!=null){if(u.gai()==null){t=new D.bx()
t.saj(null)
t.sb3(null)
t.c=null
t.d=0
u.sai(t)}t=u.gai()
t.toString
H.l(y,x)
if(t.a==null)t.saj(H.c([],w))
t=t.a;(t&&C.a).h(t,y)}}this.a2()},"$2","gjZ",8,0,9],
ls:[function(a,b){var z,y
H.j(b,"$iso",[E.at],"$aso")
for(z=b.gS(b),y=this.geG();z.C();)z.gJ().gB().K(0,y)
this.a2()},"$2","gk0",8,0,9],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaJ:1,
n:{
d2:function(a,b,c,d,e,f){var z=new E.at()
z.a=d
z.b=!0
z.sfC(0,O.d0(E.at))
z.y.bm(z.gjZ(),z.gk0())
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
z.sab(0,e)
z.sbf(f)
z.saV(c)
return z}}},jQ:{"^":"b;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
siq:function(a){this.dy=H.j(a,"$isa",[O.c7],"$asa")},
sik:function(a){this.fr=H.j(a,"$isG",[P.h,A.dg],"$asG")},
fv:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.az(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.db()
y=[V.ah]
z.sc6(H.c([],y))
z.b=null
z.gB().h(0,new E.jS(this))
this.cy=z
z=new O.db()
z.sc6(H.c([],y))
z.b=null
z.gB().h(0,new E.jT(this))
this.db=z
z=new O.db()
z.sc6(H.c([],y))
z.b=null
z.gB().h(0,new E.jU(this))
this.dx=z
this.siq(H.c([],[O.c7]))
z=this.dy;(z&&C.a).h(z,null)
this.sik(new H.aY(0,0,[P.h,A.dg]))},
gki:function(){var z=this.z
if(z==null){z=this.cy.ga0().E(0,this.db.ga0())
this.z=z}return z},
eO:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaz(z):a;(z&&C.a).h(z,y)},
eM:function(){var z=this.dy
if(z.length>1)z.pop()},
n:{
jR:function(a,b){var z=new E.jQ(a,b)
z.fv(a,b)
return z}}},jS:{"^":"n:8;a",
$1:function(a){var z
H.e(a,"$isz")
z=this.a
z.z=null
z.ch=null}},jT:{"^":"n:8;a",
$1:function(a){var z
H.e(a,"$isz")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jU:{"^":"n:8;a",
$1:function(a){var z
H.e(a,"$isz")
z=this.a
z.ch=null
z.cx=null}},kl:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0ai:x<,0y,0z,0Q,0ch,0cx,0cy",
sai:function(a){this.x=H.e(a,"$isbx")},
fE:[function(a){H.e(a,"$isz")
this.kq()},function(){return this.fE(null)},"fD","$1","$0","gd7",0,2,1],
gjK:function(){var z,y,x
z=Date.now()
y=C.h.a6(P.es(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.az(z,!1)
return x/y},
dG:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.E()
if(typeof z!=="number")return H.B(z)
x=C.k.cK(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.E()
w=C.k.cK(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.fi(C.y,this.gkp())}},
kq:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.kn(this),{func:1,ret:-1,args:[P.ak]})
C.P.h8(z)
C.P.i5(z,W.hk(y,P.ak))}},"$0","gkp",0,0,3],
km:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dG()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.az(w,!1)
x.y=P.es(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sp(w.a,0)
w.aJ()
w=x.db
C.a.sp(w.a,0)
w.aJ()
w=x.dx
C.a.sp(w.a,0)
w.aJ()
w=x.dy;(w&&C.a).sp(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aW(this.e)}x=this.z
if(!(x==null))x.L(null)}catch(v){z=H.a8(v)
y=H.bp(v)
P.dZ("Error: "+H.i(z))
P.dZ("Stack: "+H.i(y))
throw H.d(z)}},
n:{
km:function(a,b,c,d,e){var z,y,x,w
z=J.L(a)
if(!!z.$iscY)return E.fh(a,!0,!0,!0,!1)
y=W.cZ(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gct(a).h(0,y)
w=E.fh(y,!0,!0,!0,!1)
w.a=a
return w},
fh:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.kl()
y=P.iX(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.h,null)
x=C.q.bT(a,"webgl",y)
x=H.e(x==null?C.q.bT(a,"experimental-webgl",y):x,"$isdf")
if(x==null)H.r(P.u("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.jR(x,a)
w=new T.kj(x)
w.b=H.ab((x&&C.b).d1(x,3379))
w.c=H.ab(C.b.d1(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.kP(a)
v=new X.iO()
v.c=new X.aZ(!1,!1,!1)
v.shW(P.c0(null,null,null,P.m))
w.b=v
v=new X.jj(w)
v.f=0
v.r=V.b_()
v.x=V.b_()
v.Q=1
v.ch=1
w.c=v
v=new X.j3(w)
v.r=0
v.x=V.b_()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.kq(w)
v.e=0
v.f=V.b_()
v.r=V.b_()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.sh9(H.c([],[[P.dk,P.b]]))
v=w.z
u=document
t=W.av
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.a0(u,"contextmenu",H.l(w.ghB(),s),!1,t))
v=w.z
r=W.a9
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a0(a,"focus",H.l(w.ghE(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a0(a,"blur",H.l(w.ghy(),q),!1,r))
v=w.z
p=W.bA
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a0(u,"keyup",H.l(w.ghG(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a0(u,"keydown",H.l(w.ghF(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a0(a,"mousedown",H.l(w.ghJ(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a0(a,"mouseup",H.l(w.ghL(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a0(a,"mousemove",H.l(w.ghK(),s),!1,t))
p=w.z
o=W.bG;(p&&C.a).h(p,W.a0(a,H.C(W.ij(a)),H.l(w.ghM(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a0(u,"mousemove",H.l(w.ghC(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a0(u,"mouseup",H.l(w.ghD(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a0(u,"pointerlockchange",H.l(w.ghN(),q),!1,r))
r=w.z
q=W.be
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a0(a,"touchstart",H.l(w.ghU(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a0(a,"touchend",H.l(w.ghS(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a0(a,"touchmove",H.l(w.ghT(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.az(Date.now(),!1)
z.cy=0
z.dG()
return z}}},kn:{"^":"n:32;a",
$1:function(a){var z
H.np(a)
z=this.a
if(z.ch){z.ch=!1
z.km()}}}}],["","",,Z,{"^":"",fN:{"^":"b;a,b",$isnD:1,n:{
dD:function(a,b,c){var z
H.j(c,"$isa",[P.m],"$asa")
z=a.createBuffer()
C.b.av(a,b,z)
C.b.dZ(a,b,new Int16Array(H.bi(c)),35044)
C.b.av(a,b,null)
return new Z.fN(b,z)}}},eb:{"^":"cV;a,b,c,d,e",
cn:function(a){var z,y,x
try{y=a.a
C.b.e3(y,this.e)
C.b.kF(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.a8(x)
y=P.u('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.i(z))
throw H.d(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.i(this.e)+"]"}},la:{"^":"b;a",$isnE:1},ec:{"^":"b;a,0b,c,d",
shj:function(a){this.b=H.j(a,"$isa",[Z.bX],"$asa")},
aS:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
cn:function(a){var z,y
z=this.a
C.b.av(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].cn(a)},
kE:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.b.e2(x,z[y].e)
C.b.av(x,this.a.a,null)},
aW:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.f(w,x)
v=w[x]
w=v.c
u=w.a
C.b.av(y,u,w.b)
C.b.jy(y,v.a,v.b,5123,0)
C.b.av(y,u,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.h]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ae(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(y,", ")+"\nAttrs:   "+C.a.k(u,", ")},
$isnX:1},bX:{"^":"b;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.ba(this.c)+"'")+"]"}},bf:{"^":"b;a",
gd5:function(a){var z,y
z=this.a
y=(z&$.$get$aP().a)!==0?3:0
if((z&$.$get$aO().a)!==0)y+=3
if((z&$.$get$aN().a)!==0)y+=3
if((z&$.$get$aQ().a)!==0)y+=2
if((z&$.$get$aR().a)!==0)y+=3
if((z&$.$get$bE().a)!==0)y+=3
if((z&$.$get$bF().a)!==0)y+=4
if((z&$.$get$bg().a)!==0)++y
return(z&$.$get$aM().a)!==0?y+4:y},
j6:function(a){var z,y,x
z=$.$get$aP()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aO()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aN()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aQ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bE()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bF()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bg()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aM()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fM()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bf))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.h])
y=this.a
if((y&$.$get$aP().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aO().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aN().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aQ().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aR().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bE().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bF().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bg().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aM().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.k(z,"|")},
n:{
ao:function(a){return new Z.bf(a)}}}}],["","",,D,{"^":"",eg:{"^":"b;"},bx:{"^":"b;0a,0b,0c,0d",
saj:function(a){this.a=H.j(a,"$isa",[{func:1,ret:-1,args:[D.z]}],"$asa")},
sb3:function(a){this.b=H.j(a,"$isa",[{func:1,ret:-1,args:[D.z]}],"$asa")},
h:function(a,b){var z={func:1,ret:-1,args:[D.z]}
H.l(b,z)
if(this.a==null)this.saj(H.c([],[z]))
z=this.a;(z&&C.a).h(z,b)},
K:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.z]})
z=this.a
z=z==null?null:C.a.W(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).K(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.W(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).K(z,b)||y}return y},
L:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w){w=this.b
w=w==null?null:w.length===0
if(w==null)w=!0}else w=!1
if(w)return!1
if(a==null){a=new D.z(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.Z(y,new D.io(z))
y=this.b
if(!(y==null))C.a.Z(y,new D.ip(z))
z=this.b
if(!(z==null))C.a.sp(z,0)
return!0},
jA:function(){return this.L(null)},
kr:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.L(y)}}},
ao:function(){return this.kr(!0,!1)},
n:{
Q:function(){var z=new D.bx()
z.saj(null)
z.sb3(null)
z.c=null
z.d=0
return z}}},io:{"^":"n:22;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.z]})
z=this.a.a
z.b
a.$1(z)}},ip:{"^":"n:22;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.z]})
z=this.a.a
z.b
a.$1(z)}},z:{"^":"b;a,0b"},co:{"^":"z;c,d,a,0b,$ti"},cp:{"^":"z;c,d,a,0b,$ti"},I:{"^":"z;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}}],["","",,X,{"^":"",ed:{"^":"b;a,b",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ed))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}},eE:{"^":"b;a,b",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eE))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}},iO:{"^":"b;0a,0b,0c,0d",
shW:function(a){this.d=H.j(a,"$isf5",[P.m],"$asf5")},
kd:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
k9:function(a){this.c=a.b
this.d.K(0,a.a)
return!1}},eI:{"^":"de;x,y,c,d,e,a,0b"},j3:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
b2:function(a,b){var z,y,x,w,v,u,t,s
z=new P.az(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.E()
v=b.b
u=this.ch
if(typeof v!=="number")return v.E()
t=new V.ac(y.a+x*w,y.b+v*u)
u=this.a.gbv()
s=new X.c2(a,V.b_(),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cP:function(a,b){this.r=a.a
return!1},
be:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.ff()
if(typeof z!=="number")return z.bS()
this.r=(z&~y)>>>0
return!1},
bd:function(a,b){var z=this.d
if(z==null)return!1
z.L(this.b2(a,b))
return!0},
ke:function(a){return!1},
hI:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.az(Date.now(),!1)
y=this.f
x=new X.eI(c,a,this.a.gbv(),b,z,this)
x.b=!0
y.L(x)
this.y=z
this.x=V.b_()}},aZ:{"^":"b;a,b,c",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aZ))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},c2:{"^":"de;x,y,z,Q,ch,c,d,e,a,0b"},jj:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
c3:function(a,b,c){var z,y,x
z=new P.az(Date.now(),!1)
y=this.a.gbv()
x=new X.c2(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cP:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.L(this.c3(a,b,!0))
return!0},
be:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.ff()
if(typeof z!=="number")return z.bS()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.L(this.c3(a,b,!0))
return!0},
bd:function(a,b){var z=this.d
if(z==null)return!1
z.L(this.c3(a,b,!1))
return!0},
kf:function(a,b){return!1}},de:{"^":"z;"},fl:{"^":"de;x,y,z,Q,ch,c,d,e,a,0b"},kq:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y",
b2:function(a,b){var z,y,x,w
H.j(a,"$isa",[V.ac],"$asa")
z=new P.az(Date.now(),!1)
y=a.length>0?a[0]:V.b_()
x=this.a.gbv()
w=new X.fl(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
kc:function(a){var z
H.j(a,"$isa",[V.ac],"$asa")
z=this.b
if(z==null)return!1
z.L(this.b2(a,!0))
return!0},
ka:function(a){var z
H.j(a,"$isa",[V.ac],"$asa")
z=this.c
if(z==null)return!1
z.L(this.b2(a,!0))
return!0},
kb:function(a){var z
H.j(a,"$isa",[V.ac],"$asa")
z=this.d
if(z==null)return!1
z.L(this.b2(a,!1))
return!0}},kP:{"^":"b;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
sh9:function(a){this.z=H.j(a,"$isa",[[P.dk,P.b]],"$asa")},
gbv:function(){var z=this.a
return V.f2(0,0,C.q.ge_(z).c,C.q.ge_(z).d)},
dl:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eE(z,new X.aZ(y,a.altKey,a.shiftKey))},
aO:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aZ(y,a.altKey,a.shiftKey)},
cj:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aZ(y,a.altKey,a.shiftKey)},
aE:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.R()
v=z.top
if(typeof x!=="number")return x.R()
return new V.ac(y-w,x-v)},
b4:function(a){return new V.a5(a.movementX,a.movementY)},
cc:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.ac])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v){u=x[v]
t=C.k.ap(u.pageX)
C.k.ap(u.pageY)
s=z.left
C.k.ap(u.pageX)
C.a.h(y,new V.ac(t-s,C.k.ap(u.pageY)-z.top))}return y},
aC:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.ed(z,new X.aZ(y,a.altKey,a.shiftKey))},
c7:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.R()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.R()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
l1:[function(a){this.f=!0},"$1","ghE",4,0,13],
kV:[function(a){this.f=!1},"$1","ghy",4,0,13],
kZ:[function(a){H.e(a,"$isav")
if(this.f&&this.c7(a))a.preventDefault()},"$1","ghB",4,0,4],
l3:[function(a){var z
H.e(a,"$isbA")
if(!this.f)return
z=this.dl(a)
this.b.kd(z)},"$1","ghG",4,0,27],
l2:[function(a){var z
H.e(a,"$isbA")
if(!this.f)return
z=this.dl(a)
this.b.k9(z)},"$1","ghF",4,0,27],
l5:[function(a){var z,y,x,w
H.e(a,"$isav")
z=this.a
z.focus()
this.f=!0
this.aO(a)
if(this.x){y=this.aC(a)
x=this.b4(a)
if(this.d.cP(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aC(a)
w=this.aE(a)
if(this.c.cP(y,w))a.preventDefault()},"$1","ghJ",4,0,4],
l7:[function(a){var z,y,x
H.e(a,"$isav")
this.aO(a)
z=this.aC(a)
if(this.x){y=this.b4(a)
if(this.d.be(z,y))a.preventDefault()
return}if(this.r)return
x=this.aE(a)
if(this.c.be(z,x))a.preventDefault()},"$1","ghL",4,0,4],
l0:[function(a){var z,y,x
H.e(a,"$isav")
if(!this.c7(a)){this.aO(a)
z=this.aC(a)
if(this.x){y=this.b4(a)
if(this.d.be(z,y))a.preventDefault()
return}if(this.r)return
x=this.aE(a)
if(this.c.be(z,x))a.preventDefault()}},"$1","ghD",4,0,4],
l6:[function(a){var z,y,x
H.e(a,"$isav")
this.aO(a)
z=this.aC(a)
if(this.x){y=this.b4(a)
if(this.d.bd(z,y))a.preventDefault()
return}if(this.r)return
x=this.aE(a)
if(this.c.bd(z,x))a.preventDefault()},"$1","ghK",4,0,4],
l_:[function(a){var z,y,x
H.e(a,"$isav")
if(!this.c7(a)){this.aO(a)
z=this.aC(a)
if(this.x){y=this.b4(a)
if(this.d.bd(z,y))a.preventDefault()
return}if(this.r)return
x=this.aE(a)
if(this.c.bd(z,x))a.preventDefault()}},"$1","ghC",4,0,4],
l8:[function(a){var z,y
H.e(a,"$isbG")
this.aO(a)
z=new V.a5((a&&C.O).gjt(a),C.O.gju(a)).w(0,180)
if(this.x){if(this.d.ke(z))a.preventDefault()
return}if(this.r)return
y=this.aE(a)
if(this.c.kf(z,y))a.preventDefault()},"$1","ghM",4,0,37],
l9:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.aC(this.y)
x=this.aE(this.y)
this.d.hI(y,x,z)}},"$1","ghN",4,0,13],
lf:[function(a){var z
H.e(a,"$isbe")
this.a.focus()
this.f=!0
this.cj(a)
z=this.cc(a)
if(this.e.kc(z))a.preventDefault()},"$1","ghU",4,0,12],
ld:[function(a){var z
H.e(a,"$isbe")
this.cj(a)
z=this.cc(a)
if(this.e.ka(z))a.preventDefault()},"$1","ghS",4,0,12],
le:[function(a){var z
H.e(a,"$isbe")
this.cj(a)
z=this.cc(a)
if(this.e.kb(z))a.preventDefault()},"$1","ghT",4,0,12]}}],["","",,D,{"^":"",er:{"^":"b;",$isa4:1,$isaJ:1},a4:{"^":"b;",$isaJ:1},iQ:{"^":"Z;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
sfH:function(a){this.e=H.j(a,"$isa",[D.er],"$asa")},
sfI:function(a){this.f=H.j(a,"$isa",[D.eX],"$asa")},
sfJ:function(a){this.r=H.j(a,"$isa",[D.f7],"$asa")},
sfK:function(a){this.x=H.j(a,"$isa",[D.ff],"$asa")},
sfL:function(a){this.y=H.j(a,"$isa",[D.fg],"$asa")},
sfM:function(a){this.z=H.j(a,"$isa",[D.cx],"$asa")},
gB:function(){var z=this.Q
if(z==null){z=D.Q()
this.Q=z}return z},
a8:function(a){var z=this.Q
if(!(z==null))z.L(a)},
hH:[function(a){var z
H.e(a,"$isz")
z=this.ch
if(!(z==null))z.L(a)},function(){return this.hH(null)},"l4","$1","$0","gdC",0,2,1],
la:[function(a){var z,y,x
H.j(a,"$iso",[D.a4],"$aso")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.y)(a),++y){x=a[y]
if(x==null||this.fG(x))return!1}return!0},"$1","ghP",4,0,39],
kS:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a4
H.j(b,"$iso",[z],"$aso")
for(y=b.length,x=this.gdC(),w={func:1,ret:-1,args:[D.z]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=H.e(b[u],"$isa4")
if(t instanceof D.cx)C.a.h(this.z,t)
s=t.db
if(s==null){s=new D.bx()
s.saj(null)
s.sb3(null)
s.c=null
s.d=0
t.db=s}H.l(x,w)
if(s.a==null)s.saj(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}z=new D.co(a,b,this,[z])
z.b=!0
this.a8(z)},"$2","ghv",8,0,17],
lc:[function(a,b){var z,y,x,w
z=D.a4
H.j(b,"$iso",[z],"$aso")
for(y=b.gS(b),x=this.gdC();y.C();){w=y.gJ()
C.a.K(this.e,w)
w.gB().K(0,x)}z=new D.cp(a,b,this,[z])
z.b=!0
this.a8(z)},"$2","ghR",8,0,17],
fG:function(a){var z=C.a.W(this.z,a)
return z},
$aso:function(){return[D.a4]},
$asZ:function(){return[D.a4]}},eX:{"^":"b;",$isa4:1,$isaJ:1},f7:{"^":"b;",$isa4:1,$isaJ:1},ff:{"^":"b;",$isa4:1,$isaJ:1},fg:{"^":"b;",$isa4:1,$isaJ:1},cx:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db",
gB:function(){var z=this.db
if(z==null){z=D.Q()
this.db=z}return z},
a8:[function(a){var z
H.e(a,"$isz")
z=this.db
if(!(z==null))z.L(a)},function(){return this.a8(null)},"kW","$1","$0","gca",0,2,1],
$isa4:1,
$isaJ:1}}],["","",,V,{"^":"",
nG:[function(a,b){if(typeof b!=="number")return b.R()
if(typeof a!=="number")return H.B(a)
return Math.abs(b-a)<=1e-9},"$2","jh",8,0,36],
nB:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.k.bl(a-b,z)
return(a<0?a+z:a)+b},
O:function(a,b,c){if(a==null)return C.c.af("null",c)
return C.c.af(C.k.eT($.p.$2(a,0)?0:a,b),c+b+1)},
bn:function(a,b,c){var z,y,x,w,v,u
H.j(a,"$isa",[P.q],"$asa")
z=H.c([],[P.h])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.y)(a),++w){v=V.O(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.f(z,u)
C.a.q(z,u,C.c.af(z[u],x))}return z},
dY:function(a,b){return C.k.kz(Math.pow(b,C.a_.cK(Math.log(H.mM(a))/Math.log(b))))},
a2:{"^":"b;a,b,c",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}},
bu:{"^":"b;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bu))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"}},
eM:{"^":"b;a,b,c,d,e,f,r,x,y",
ag:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.q])
return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eM))return!1
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
z=[P.q]
y=V.bn(H.c([this.a,this.d,this.r],z),3,0)
x=V.bn(H.c([this.b,this.e,this.x],z),3,0)
w=V.bn(H.c([this.c,this.f,this.y],z),3,0)
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
ah:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ag:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.q])
return z},
ez:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.p.$2(a2,0))return V.c1()
a3=1/a2
a4=-w
a5=-i
return V.aI((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
E:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.e(a7,"$isah")
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
return V.aI(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
bi:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.D(this.a*z+this.b*y+this.c*x,this.e*z+this.f*y+this.r*x,this.y*z+this.z*y+this.Q*x)},
aY:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.X(this.a*z+this.b*y+this.c*x+this.d,this.e*z+this.f*y+this.r*x+this.x,this.y*z+this.z*y+this.Q*x+this.ch)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ah))return!1
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
i:function(a){return this.N()},
eq:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.q]
y=V.bn(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bn(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bn(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bn(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
N:function(){return this.eq("",3,0)},
F:function(a){return this.eq(a,3,0)},
n:{
c1:function(){var z=$.eQ
if(z==null){z=V.aI(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.eQ=z}return z},
aI:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ah(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
eP:function(a,b,c){return V.aI(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
eO:function(a,b,c,d){return V.aI(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
eN:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aI(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)}}},
ac:{"^":"b;a,b",
R:function(a,b){return new V.ac(this.a-b.a,this.b-b.b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ac))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+"]"},
n:{
b_:function(){var z=$.eY
if(z==null){z=new V.ac(0,0)
$.eY=z}return z}}},
X:{"^":"b;a,b,c",
G:function(a,b){return new V.X(this.a+b.a,this.b+b.b,this.c+b.c)},
R:function(a,b){return new V.X(this.a-b.a,this.b-b.b,this.c-b.c)},
E:function(a,b){return new V.X(this.a*b,this.b*b,this.c*b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"},
n:{
eZ:function(){var z=$.b0
if(z==null){z=new V.X(0,0,0)
$.b0=z}return z}}},
c4:{"^":"b;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c4))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"}},
f1:{"^":"b;a,b,c,d",
gaA:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.f1))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"},
n:{
f2:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.f1(a,b,c,d)}}},
a5:{"^":"b;a,b",
jR:[function(a){return Math.sqrt(this.I(this))},"$0","gp",1,0,16],
I:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.E()
if(typeof y!=="number")return H.B(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.E()
if(typeof w!=="number")return H.B(w)
return z*y+x*w},
E:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.E()
y=this.b
if(typeof y!=="number")return y.E()
return new V.a5(z*b,y*b)},
w:function(a,b){var z,y
if($.p.$2(b,0)){z=$.fE
if(z==null){z=new V.a5(0,0)
$.fE=z}return z}z=this.a
if(typeof z!=="number")return z.w()
y=this.b
if(typeof y!=="number")return y.w()
return new V.a5(z/b,y/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+"]"}},
D:{"^":"b;a,b,c",
jR:[function(a){return Math.sqrt(this.I(this))},"$0","gp",1,0,16],
I:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cO:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.D(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aG:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.D(z*y-x*w,x*v-u*y,u*w-z*v)},
G:function(a,b){return new V.D(this.a+b.a,this.b+b.b,this.c+b.c)},
U:function(a){return new V.D(-this.a,-this.b,-this.c)},
E:function(a,b){return new V.D(this.a*b,this.b*b,this.c*b)},
w:function(a,b){if($.p.$2(b,0))return V.bD()
return new V.D(this.a/b,this.b/b,this.c/b)},
eA:function(){if(!$.p.$2(0,this.a))return!1
if(!$.p.$2(0,this.b))return!1
if(!$.p.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.D))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"},
n:{
bD:function(){var z=$.fH
if(z==null){z=new V.D(0,0,0)
$.fH=z}return z},
kZ:function(){var z=$.cB
if(z==null){z=new V.D(-1,0,0)
$.cB=z}return z},
fI:function(){var z=$.cC
if(z==null){z=new V.D(0,1,0)
$.cC=z}return z},
fJ:function(){var z=$.cD
if(z==null){z=new V.D(0,0,1)
$.cD=z}return z}}}}],["","",,U,{"^":"",i0:{"^":"eg;0a,0b,0c,0d,0e,0f,0r,0x,0y",
c_:function(a){var z=V.nB(a,this.c,this.b)
return z},
gB:function(){var z=this.y
if(z==null){z=D.Q()
this.y=z}return z},
a3:function(a){var z=this.y
if(!(z==null))z.L(a)},
sf_:function(a,b){},
seC:function(a){var z,y
z=this.b
if(!$.p.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.c_(z)}z=new D.I("maximumLocation",y,this.b,this,[P.q])
z.b=!0
this.a3(z)}},
seE:function(a){var z,y
z=this.c
if(!$.p.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.c_(z)}z=new D.I("minimumLocation",y,this.c,this,[P.q])
z.b=!0
this.a3(z)}},
sa4:function(a,b){var z,y
b=this.c_(b)
z=this.d
if(!$.p.$2(z,b)){y=this.d
this.d=b
z=new D.I("location",y,b,this,[P.q])
z.b=!0
this.a3(z)}},
seD:function(a){var z,y,x
z=this.e
if(!$.p.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.I("maximumVelocity",y,a,this,[P.q])
z.b=!0
this.a3(z)}},
sa1:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.p.$2(z,a)){x=this.f
this.f=a
z=new D.I("velocity",x,a,this,[P.q])
z.b=!0
this.a3(z)}},
se0:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.p.$2(z,a)){y=this.x
this.x=a
z=new D.I("dampening",y,a,this,[P.q])
z.b=!0
this.a3(z)}},
aB:function(a){var z,y,x,w
z=this.f
if($.p.$2(z,0)){z=this.r
z=!$.p.$2(z,0)}else z=!0
if(z){y=this.f+this.r*a
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa4(0,this.d+y*a)
z=this.x
if(!$.p.$2(z,0)){w=y*Math.pow(1-this.x,a)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sa1(y)}},
n:{
ei:function(){var z=new U.i0()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},ej:{"^":"ai;0a,0b",
gB:function(){var z=this.b
if(z==null){z=D.Q()
this.b=z}return z},
aZ:function(a,b){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ej))return!1
return J.M(this.a,b.a)},
i:function(a){return"Constant: "+this.a.F("          ")},
n:{
bT:function(a){var z=new U.ej()
z.a=a
return z}}},ex:{"^":"Z;0e,0f,0r,0a,0b,0c,0d",
gB:function(){var z=this.e
if(z==null){z=D.Q()
this.e=z}return z},
a3:[function(a){var z
H.e(a,"$isz")
z=this.e
if(!(z==null))z.L(a)},function(){return this.a3(null)},"aK","$1","$0","gbo",0,2,1],
kI:[function(a,b){var z,y,x,w,v,u,t,s
z=U.ai
H.j(b,"$iso",[z],"$aso")
for(y=b.length,x=this.gbo(),w={func:1,ret:-1,args:[D.z]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){s=t.gB()
s.toString
H.l(x,w)
if(s.a==null)s.saj(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.co(a,b,this,[z])
z.b=!0
this.a3(z)},"$2","gfN",8,0,15],
lb:[function(a,b){var z,y,x
z=U.ai
H.j(b,"$iso",[z],"$aso")
for(y=b.gS(b),x=this.gbo();y.C();)y.gJ().gB().K(0,x)
z=new D.cp(a,b,this,[z])
z.b=!0
this.a3(z)},"$2","ghQ",8,0,15],
aZ:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(typeof z!=="number")return z.T()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.as(z,z.length,0,[H.t(z,0)]),x=null;z.C();){y=z.d
if(y!=null){w=y.aZ(a,b)
if(w!=null)x=x==null?w:w.E(0,x)}}this.f=x==null?V.c1():x
z=this.e
if(!(z==null))z.ao()}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ex))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.f(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.f(w,y)
if(!J.M(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$aso:function(){return[U.ai]},
$asZ:function(){return[U.ai]},
$isai:1,
n:{
d3:function(a){var z=new U.ex()
z.bY(U.ai)
z.bm(z.gfN(),z.ghQ())
z.e=null
z.f=V.c1()
z.r=0
return z}}},ai:{"^":"eg;"},kQ:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gB:function(){var z=this.fx
if(z==null){z=D.Q()
this.fx=z}return z},
a3:[function(a){var z
H.e(a,"$isz")
z=this.fx
if(!(z==null))z.L(a)},function(){return this.a3(null)},"aK","$1","$0","gbo",0,2,1],
j7:function(a){var z,y
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.b
if(y==null){y=D.Q()
z.b=y
z=y}else z=y
z.h(0,this.ghr())
z=this.a.c
y=z.d
if(y==null){y=D.Q()
z.d=y
z=y}else z=y
z.h(0,this.ghs())
z=this.a.c
y=z.c
if(y==null){y=D.Q()
z.c=y
z=y}else z=y
z.h(0,this.ght())
z=this.a.d
y=z.f
if(y==null){y=D.Q()
z.f=y
z=y}else z=y
z.h(0,this.ghp())
z=this.a.d
y=z.d
if(y==null){y=D.Q()
z.d=y
z=y}else z=y
z.h(0,this.ghq())
z=this.a.e
y=z.b
if(y==null){y=D.Q()
z.b=y
z=y}else z=y
z.h(0,this.giw())
z=this.a.e
y=z.d
if(y==null){y=D.Q()
z.d=y
z=y}else z=y
z.h(0,this.giv())
z=this.a.e
y=z.c
if(y==null){y=D.Q()
z.c=y
z=y}else z=y
z.h(0,this.giu())
return!0},
at:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.U()
z=-z}if(this.r){if(typeof y!=="number")return y.U()
y=-y}return new V.a5(z,y)},
kP:[function(a){a=H.k(H.e(a,"$isz"),"$isc2")
if(!J.M(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","ghr",4,0,2],
kQ:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isz"),"$isc2")
if(!this.cx)return
if(this.ch){z=a.d.R(0,a.y)
z=new V.a5(z.a,z.b)
z=z.I(z)
y=this.Q
if(typeof y!=="number")return H.B(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.R(0,a.y)
z=this.at(new V.a5(y.a,y.b).E(0,2).w(0,z.gaA()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.U()
x=this.y
if(typeof x!=="number")return H.B(x)
y.sa1(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.U()
y=this.x
if(typeof y!=="number")return H.B(y)
x.sa1(-z*10*y)}else{z=a.c
y=a.d
x=y.R(0,a.y)
w=this.at(new V.a5(x.a,x.b).E(0,2).w(0,z.gaA()))
x=this.c
v=w.a
if(typeof v!=="number")return v.U()
u=this.y
if(typeof u!=="number")return H.B(u)
t=this.cy
if(typeof t!=="number")return H.B(t)
x.sa4(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.U()
v=this.x
if(typeof v!=="number")return H.B(v)
x=this.db
if(typeof x!=="number")return H.B(x)
t.sa4(0,-u*v+x)
this.b.sa1(0)
this.c.sa1(0)
y=y.R(0,a.z)
this.dx=this.at(new V.a5(y.a,y.b).E(0,2).w(0,z.gaA()))}this.aK()},"$1","ghs",4,0,2],
kR:[function(a){var z,y,x
H.e(a,"$isz")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.I(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.U()
x=this.y
if(typeof x!=="number")return H.B(x)
z.sa1(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.U()
z=this.x
if(typeof z!=="number")return H.B(z)
x.sa1(-y*10*z)
this.aK()}},"$1","ght",4,0,2],
kN:[function(a){if(H.k(H.e(a,"$isz"),"$iseI").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","ghp",4,0,2],
kO:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isz"),"$isc2")
if(!J.M(this.d,a.x.b))return
z=a.c
y=a.d
x=y.R(0,a.y)
w=this.at(new V.a5(x.a,x.b).E(0,2).w(0,z.gaA()))
x=this.c
v=w.a
if(typeof v!=="number")return v.U()
u=this.y
if(typeof u!=="number")return H.B(u)
t=this.cy
if(typeof t!=="number")return H.B(t)
x.sa4(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.U()
v=this.x
if(typeof v!=="number")return H.B(v)
x=this.db
if(typeof x!=="number")return H.B(x)
t.sa4(0,-u*v+x)
this.b.sa1(0)
this.c.sa1(0)
y=y.R(0,a.z)
this.dx=this.at(new V.a5(y.a,y.b).E(0,2).w(0,z.gaA()))
this.aK()},"$1","ghq",4,0,2],
lj:[function(a){H.e(a,"$isz")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","giw",4,0,2],
li:[function(a){var z,y,x,w,v,u,t
a=H.k(H.e(a,"$isz"),"$isfl")
if(!this.cx)return
if(this.ch){z=a.d.R(0,a.y)
z=new V.a5(z.a,z.b)
z=z.I(z)
y=this.Q
if(typeof y!=="number")return H.B(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.R(0,a.y)
z=this.at(new V.a5(y.a,y.b).E(0,2).w(0,z.gaA()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.U()
x=this.y
if(typeof x!=="number")return H.B(x)
y.sa1(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.U()
y=this.x
if(typeof y!=="number")return H.B(y)
x.sa1(-z*10*y)}else{z=a.c
y=a.d
x=y.R(0,a.y)
w=this.at(new V.a5(x.a,x.b).E(0,2).w(0,z.gaA()))
x=this.c
v=w.a
if(typeof v!=="number")return v.U()
u=this.y
if(typeof u!=="number")return H.B(u)
t=this.cy
if(typeof t!=="number")return H.B(t)
x.sa4(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.U()
v=this.x
if(typeof v!=="number")return H.B(v)
x=this.db
if(typeof x!=="number")return H.B(x)
t.sa4(0,-u*v+x)
this.b.sa1(0)
this.c.sa1(0)
y=y.R(0,a.z)
this.dx=this.at(new V.a5(y.a,y.b).E(0,2).w(0,z.gaA()))}this.aK()},"$1","giv",4,0,2],
lh:[function(a){var z,y,x
H.e(a,"$isz")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.I(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.U()
x=this.y
if(typeof x!=="number")return H.B(x)
z.sa1(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.U()
z=this.x
if(typeof z!=="number")return H.B(z)
x.sa1(-y*10*z)
this.aK()}},"$1","giu",4,0,2],
aZ:function(a,b){var z,y,x,w,v
z=this.dy
y=a.e
if(typeof z!=="number")return z.T()
if(z<y){this.dy=y
x=a.y
this.c.aB(x)
this.b.aB(x)
z=V.eN(this.b.d)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.E(0,V.aI(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isai:1,
n:{
fC:function(a,b,c,d,e,f,g,h){var z,y,x,w,v
z=new U.kQ()
y=U.ei()
y.sf_(0,!0)
y.seC(6.283185307179586)
y.seE(0)
y.sa4(0,0)
y.seD(100)
y.sa1(0)
y.se0(0.5)
z.b=y
x=z.gbo()
y.gB().h(0,x)
y=U.ei()
y.sf_(0,!0)
y.seC(6.283185307179586)
y.seE(0)
y.sa4(0,0)
y.seD(100)
y.sa1(0)
y.se0(0.5)
z.c=y
y.gB().h(0,x)
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
w=new X.aZ(b,!1,!1)
v=z.d
z.d=w
y=new D.I("modifiers",v,w,z,[X.aZ])
y.b=!0
z.a3(y)
y=z.f
if(y!==!1){z.f=!1
y=new D.I("invertX",y,!1,z,[P.K])
y.b=!0
z.a3(y)}y=z.r
if(y!==!1){z.r=!1
y=new D.I("invertY",y,!1,z,[P.K])
y.b=!0
z.a3(y)}z.j7(c)
return z}}}}],["","",,M,{"^":"",il:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x",
sh1:function(a,b){this.d=H.j(b,"$isZ",[E.at],"$asZ")},
aL:[function(a){var z
H.e(a,"$isz")
z=this.x
if(!(z==null))z.L(a)},function(){return this.aL(null)},"kJ","$1","$0","gas",0,2,1],
kX:[function(a,b){var z,y,x,w,v,u,t,s
z=E.at
H.j(b,"$iso",[z],"$aso")
for(y=b.length,x=this.gas(),w={func:1,ret:-1,args:[D.z]},v=[w],u=0;u<b.length;b.length===y||(0,H.y)(b),++u){t=b[u]
if(t!=null){if(t.gai()==null){s=new D.bx()
s.saj(null)
s.sb3(null)
s.c=null
s.d=0
t.sai(s)}s=t.gai()
s.toString
H.l(x,w)
if(s.a==null)s.saj(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.co(a,b,this,[z])
z.b=!0
this.aL(z)},"$2","ghz",8,0,9],
kY:[function(a,b){var z,y,x
z=E.at
H.j(b,"$iso",[z],"$aso")
for(y=b.gS(b),x=this.gas();y.C();)y.gJ().gB().K(0,x)
z=new D.cp(a,b,this,[z])
z.b=!0
this.aL(z)},"$2","ghA",8,0,9],
sbf:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gB().K(0,this.gas())
y=this.c
this.c=a
if(a!=null)a.gB().h(0,this.gas())
z=new D.I("technique",y,this.c,this,[O.c7])
z.b=!0
this.aL(z)}},
gB:function(){var z=this.x
if(z==null){z=D.Q()
this.x=z}return z},
aW:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
a.eO(this.c)
z=this.b
z.toString
y=a.a
C.b.ja(y,36160,null)
C.b.cC(y,2884)
C.b.cC(y,2929)
C.b.jv(y,513)
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
C.b.kG(y,t,s,u,v)
C.b.jg(y,z.c)
z=z.a
C.b.jf(y,z.a,z.b,z.c,z.d)
C.b.je(y,16640)
z=this.a
y=a.c
v=a.d
u=z.c
r=z.d
q=z.e
p=q-r
o=1/Math.tan(u*0.5)
n=V.aI(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.eN(n)
y=$.eW
if(y==null){y=V.eZ()
v=V.fI()
u=$.fF
if(u==null){u=new V.D(0,0,-1)
$.fF=u}m=u.w(0,Math.sqrt(u.I(u)))
v=v.aG(m)
l=v.w(0,Math.sqrt(v.I(v)))
k=m.aG(l)
j=new V.D(y.a,y.b,y.c)
i=l.U(0).I(j)
h=k.U(0).I(j)
g=m.U(0).I(j)
y=V.aI(l.a,k.a,m.a,i,l.b,k.b,m.b,h,l.c,k.c,m.c,g,0,0,0,1)
$.eW=y
f=y}else f=y
y=z.b
if(y!=null){e=y.aZ(a,z)
if(e!=null)f=e.E(0,f)}a.db.eN(f)
z=this.c
if(z!=null)z.aB(a)
for(z=this.d.a,z=new J.as(z,z.length,0,[H.t(z,0)]);z.C();)z.d.aB(a)
for(z=this.d.a,z=new J.as(z,z.length,0,[H.t(z,0)]);z.C();)z.d.aW(a)
this.a.toString
a.cy.cQ()
a.db.cQ()
this.b.toString
a.eM()},
$isnS:1}}],["","",,A,{"^":"",e6:{"^":"b;a,b,c"},hR:{"^":"b;a",
l:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
jB:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
C.b.e3(w.a,w.c)}},
jx:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
C.b.e2(w.a,w.c)}}},j9:{"^":"dg;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0ax,0an,0by,0e4,0bz,0bA,0e5,0e6,0bB,0bC,0e7,0e8,0bD,0bE,0e9,0ea,0bF,0eb,0ec,0bG,0ed,0ee,0bH,0bI,0bJ,0ef,0eg,0bK,0bL,0eh,0ei,0bM,0ej,0cD,0ek,0cE,0el,0cF,0em,0cG,0en,0cH,0eo,0cI,a,b,0c,0d,0e,0f,0r,0x,0y",
sfX:function(a){this.r1=H.j(a,"$isa",[A.aE],"$asa")},
sh7:function(a){this.cD=H.j(a,"$isa",[A.dt],"$asa")},
shV:function(a){this.cE=H.j(a,"$isa",[A.dv],"$asa")},
sim:function(a){this.cF=H.j(a,"$isa",[A.dw],"$asa")},
siy:function(a){this.cG=H.j(a,"$isa",[A.dx],"$asa")},
siz:function(a){this.cH=H.j(a,"$isa",[A.dy],"$asa")},
siA:function(a){this.cI=H.j(a,"$isa",[A.dz],"$asa")},
fu:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.z=a2
z=new P.aj("")
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
a2.iE(z)
a2.iL(z)
a2.iF(z)
a2.iT(z)
a2.iU(z)
a2.iN(z)
a2.iY(z)
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
z=new P.aj("")
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
x.iI(z)
x.iD(z)
x.iG(z)
x.iJ(z)
x.iR(z)
u=x.dy
if(u){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
x.iP(z)
x.iQ(z)}x.iM(z)
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
r=z.a+="   return litClr*("+C.a.k(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
x.iH(z)
x.iO(z)
x.iS(z)
x.iV(z)
x.iW(z)
x.iX(z)
x.iK(z)}r=z.a+="// === Main ===\n"
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
n="vec4("+C.a.k(o," + ")+", alpha);"
x=z.a
if(t){x+="   gl_FragColor = colorMat*"+n+"\n"
z.a=x}else{x+="   gl_FragColor = "+n+"\n"
z.a=x}x+="}\n"
z.a=x
this.c=s
this.d=x.charCodeAt(0)==0?x:x
this.e=this.dm(s,35633)
this.f=this.dm(this.d,35632)
x=this.a
v=x.createProgram()
this.r=v
C.b.dT(x,v,this.e)
C.b.dT(x,this.r,this.f)
C.b.jS(x,this.r)
if(!H.dO(C.b.bU(x,this.r,35714))){m=C.b.fa(x,this.r)
C.b.jr(x,this.r)
H.r(P.u("Failed to link shader: "+H.i(m)))}this.ih()
this.ij()
this.Q=this.x.l(0,"posAttr")
this.cx=this.x.l(0,"normAttr")
this.ch=this.x.l(0,"binmAttr")
this.cy=this.x.l(0,"txt2DAttr")
this.db=this.x.l(0,"txtCubeAttr")
this.dx=this.x.l(0,"bendAttr")
if(a2.fr)this.id=H.k(this.y.m(0,"invViewMat"),"$isaE")
if(y)this.dy=H.k(this.y.m(0,"objMat"),"$isaE")
if(w)this.fr=H.k(this.y.m(0,"viewObjMat"),"$isaE")
this.fy=H.k(this.y.m(0,"projViewObjMat"),"$isaE")
if(a2.x2)this.k1=H.k(this.y.m(0,"txt2DMat"),"$isdu")
if(a2.y1)this.k2=H.k(this.y.m(0,"txtCubeMat"),"$isaE")
if(a2.y2)this.k3=H.k(this.y.m(0,"colorMat"),"$isaE")
this.sfX(H.c([],[A.aE]))
y=a2.ax
if(y>0){this.k4=H.e(this.y.m(0,"bendMatCount"),"$isJ")
for(l=0;l<y;++l){x=this.r1
w=this.y
v="bendValues["+l+"].mat"
k=w.l(0,v)
if(k==null)H.r(P.u("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.k(k,"$isaE"))}}y=a2.a
if(y!==C.d){this.r2=H.k(this.y.m(0,"emissionClr"),"$isH")
switch(y){case C.d:break
case C.i:break
case C.e:this.rx=H.k(this.y.m(0,"emissionTxt"),"$isam")
this.x1=H.k(this.y.m(0,"nullEmissionTxt"),"$isJ")
break
case C.f:this.ry=H.k(this.y.m(0,"emissionTxt"),"$isan")
this.x1=H.k(this.y.m(0,"nullEmissionTxt"),"$isJ")
break}}y=a2.b
if(y!==C.d){this.x2=H.k(this.y.m(0,"ambientClr"),"$isH")
switch(y){case C.d:break
case C.i:break
case C.e:this.y1=H.k(this.y.m(0,"ambientTxt"),"$isam")
this.ax=H.k(this.y.m(0,"nullAmbientTxt"),"$isJ")
break
case C.f:this.y2=H.k(this.y.m(0,"ambientTxt"),"$isan")
this.ax=H.k(this.y.m(0,"nullAmbientTxt"),"$isJ")
break}}y=a2.c
if(y!==C.d){this.an=H.k(this.y.m(0,"diffuseClr"),"$isH")
switch(y){case C.d:break
case C.i:break
case C.e:this.by=H.k(this.y.m(0,"diffuseTxt"),"$isam")
this.bz=H.k(this.y.m(0,"nullDiffuseTxt"),"$isJ")
break
case C.f:this.e4=H.k(this.y.m(0,"diffuseTxt"),"$isan")
this.bz=H.k(this.y.m(0,"nullDiffuseTxt"),"$isJ")
break}}y=a2.d
if(y!==C.d){this.bA=H.k(this.y.m(0,"invDiffuseClr"),"$isH")
switch(y){case C.d:break
case C.i:break
case C.e:this.e5=H.k(this.y.m(0,"invDiffuseTxt"),"$isam")
this.bB=H.k(this.y.m(0,"nullInvDiffuseTxt"),"$isJ")
break
case C.f:this.e6=H.k(this.y.m(0,"invDiffuseTxt"),"$isan")
this.bB=H.k(this.y.m(0,"nullInvDiffuseTxt"),"$isJ")
break}}y=a2.e
if(y!==C.d){this.bE=H.k(this.y.m(0,"shininess"),"$isY")
this.bC=H.k(this.y.m(0,"specularClr"),"$isH")
switch(y){case C.d:break
case C.i:break
case C.e:this.e7=H.k(this.y.m(0,"specularTxt"),"$isam")
this.bD=H.k(this.y.m(0,"nullSpecularTxt"),"$isJ")
break
case C.f:this.e8=H.k(this.y.m(0,"specularTxt"),"$isan")
this.bD=H.k(this.y.m(0,"nullSpecularTxt"),"$isJ")
break}}switch(a2.f){case C.d:break
case C.i:break
case C.e:this.e9=H.k(this.y.m(0,"bumpTxt"),"$isam")
this.bF=H.k(this.y.m(0,"nullBumpTxt"),"$isJ")
break
case C.f:this.ea=H.k(this.y.m(0,"bumpTxt"),"$isan")
this.bF=H.k(this.y.m(0,"nullBumpTxt"),"$isJ")
break}if(a2.dy){this.eb=H.k(this.y.m(0,"envSampler"),"$isan")
this.ec=H.k(this.y.m(0,"nullEnvTxt"),"$isJ")
y=a2.r
if(y!==C.d){this.bG=H.k(this.y.m(0,"reflectClr"),"$isH")
switch(y){case C.d:break
case C.i:break
case C.e:this.ed=H.k(this.y.m(0,"reflectTxt"),"$isam")
this.bH=H.k(this.y.m(0,"nullReflectTxt"),"$isJ")
break
case C.f:this.ee=H.k(this.y.m(0,"reflectTxt"),"$isan")
this.bH=H.k(this.y.m(0,"nullReflectTxt"),"$isJ")
break}}y=a2.x
if(y!==C.d){this.bI=H.k(this.y.m(0,"refraction"),"$isY")
this.bJ=H.k(this.y.m(0,"refractClr"),"$isH")
switch(y){case C.d:break
case C.i:break
case C.e:this.ef=H.k(this.y.m(0,"refractTxt"),"$isam")
this.bK=H.k(this.y.m(0,"nullRefractTxt"),"$isJ")
break
case C.f:this.eg=H.k(this.y.m(0,"refractTxt"),"$isan")
this.bK=H.k(this.y.m(0,"nullRefractTxt"),"$isJ")
break}}}y=a2.y
if(y!==C.d){this.bL=H.k(this.y.m(0,"alpha"),"$isY")
switch(y){case C.d:break
case C.i:break
case C.e:this.eh=H.k(this.y.m(0,"alphaTxt"),"$isam")
this.bM=H.k(this.y.m(0,"nullAlphaTxt"),"$isJ")
break
case C.f:this.ei=H.k(this.y.m(0,"alphaTxt"),"$isan")
this.bM=H.k(this.y.m(0,"nullAlphaTxt"),"$isJ")
break}}this.sh7(H.c([],[A.dt]))
this.shV(H.c([],[A.dv]))
this.sim(H.c([],[A.dw]))
this.siy(H.c([],[A.dx]))
this.siz(H.c([],[A.dy]))
this.siA(H.c([],[A.dz]))
if(a2.k2){y=a2.z
if(y>0){this.ej=H.e(this.y.m(0,"dirLightCount"),"$isJ")
for(l=0;l<y;++l){x=this.y
w="dirLights["+l+"].viewDir"
k=x.l(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isH")
x=this.y
w="dirLights["+l+"].color"
j=x.l(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isH")
x=this.cD;(x&&C.a).h(x,new A.dt(l,k,j))}}y=a2.Q
if(y>0){this.ek=H.e(this.y.m(0,"pntLightCount"),"$isJ")
for(l=0;l<y;++l){x=this.y
w="pntLights["+l+"].point"
k=x.l(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isH")
x=this.y
w="pntLights["+l+"].viewPnt"
j=x.l(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isH")
x=this.y
w="pntLights["+l+"].color"
i=x.l(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isH")
x=this.y
w="pntLights["+l+"].att0"
h=x.l(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isY")
x=this.y
w="pntLights["+l+"].att1"
g=x.l(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isY")
x=this.y
w="pntLights["+l+"].att2"
f=x.l(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isY")
x=this.cE;(x&&C.a).h(x,new A.dv(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.el=H.e(this.y.m(0,"spotLightCount"),"$isJ")
for(l=0;l<y;++l){x=this.y
w="spotLights["+l+"].objPnt"
k=x.l(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isH")
x=this.y
w="spotLights["+l+"].objDir"
j=x.l(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isH")
x=this.y
w="spotLights["+l+"].viewPnt"
i=x.l(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isH")
x=this.y
w="spotLights["+l+"].color"
h=x.l(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isH")
x=this.y
w="spotLights["+l+"].cutoff"
g=x.l(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isY")
x=this.y
w="spotLights["+l+"].coneAngle"
f=x.l(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isY")
x=this.y
w="spotLights["+l+"].att0"
e=x.l(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isY")
x=this.y
w="spotLights["+l+"].att1"
d=x.l(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isY")
x=this.y
w="spotLights["+l+"].att2"
c=x.l(0,w)
if(c==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isY")
x=this.cF;(x&&C.a).h(x,new A.dw(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.em=H.e(this.y.m(0,"txtDirLightCount"),"$isJ")
for(l=0;l<y;++l){x=this.y
w="txtDirLights["+l+"].objUp"
k=x.l(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isH")
x=this.y
w="txtDirLights["+l+"].objRight"
j=x.l(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isH")
x=this.y
w="txtDirLights["+l+"].objDir"
i=x.l(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isH")
x=this.y
w="txtDirLights["+l+"].viewDir"
h=x.l(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isH")
x=this.y
w="txtDirLights["+l+"].color"
g=x.l(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isH")
x=this.y
w="txtDirLights["+l+"].nullTxt"
f=x.l(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isJ")
x=this.y
w="txtDirLightsTxt2D"+l
e=x.l(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isam")
x=this.cG;(x&&C.a).h(x,new A.dx(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.en=H.e(this.y.m(0,"txtPntLightCount"),"$isJ")
for(l=0;l<y;++l){x=this.y
w="txtPntLights["+l+"].point"
k=x.l(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isH")
x=this.y
w="txtPntLights["+l+"].viewPnt"
j=x.l(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isH")
x=this.y
w="txtPntLights["+l+"].invViewRotMat"
i=x.l(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isdu")
x=this.y
w="txtPntLights["+l+"].color"
h=x.l(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isH")
x=this.y
w="txtPntLights["+l+"].nullTxt"
g=x.l(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isJ")
x=this.y
w="txtPntLights["+l+"].att0"
f=x.l(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isY")
x=this.y
w="txtPntLights["+l+"].att1"
e=x.l(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isY")
x=this.y
w="txtPntLights["+l+"].att2"
d=x.l(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isY")
x=this.y
w="txtPntLightsTxtCube"+l
c=x.l(0,w)
if(c==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isan")
x=this.cH;(x&&C.a).h(x,new A.dy(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.eo=H.e(this.y.m(0,"txtSpotLightCount"),"$isJ")
for(l=0;l<y;++l){x=this.y
w="txtSpotLights["+l+"].objPnt"
k=x.l(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(k,"$isH")
x=this.y
w="txtSpotLights["+l+"].objDir"
j=x.l(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(j,"$isH")
x=this.y
w="txtSpotLights["+l+"].objUp"
i=x.l(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(i,"$isH")
x=this.y
w="txtSpotLights["+l+"].objRight"
h=x.l(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(h,"$isH")
x=this.y
w="txtSpotLights["+l+"].viewPnt"
g=x.l(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(g,"$isH")
x=this.y
w="txtSpotLights["+l+"].nullTxt"
f=x.l(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(f,"$isJ")
x=this.y
w="txtSpotLights["+l+"].color"
e=x.l(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(e,"$isH")
x=this.y
w="txtSpotLights["+l+"].tuScalar"
d=x.l(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(d,"$isY")
x=this.y
w="txtSpotLights["+l+"].tvScalar"
c=x.l(0,w)
if(c==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(c,"$isY")
x=this.y
w="txtSpotLights["+l+"].att0"
b=x.l(0,w)
if(b==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(b,"$isY")
x=this.y
w="txtSpotLights["+l+"].att1"
a=x.l(0,w)
if(a==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a,"$isY")
x=this.y
w="txtSpotLights["+l+"].att2"
a0=x.l(0,w)
if(a0==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a0,"$isY")
x=this.y
w="txtSpotLightsTxt2D"+l
a1=x.l(0,w)
if(a1==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.k(a1,"$isam")
x=this.cI;(x&&C.a).h(x,new A.dz(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
ak:function(a,b,c){C.b.V(b.a,b.d,1)},
ad:function(a,b,c){C.b.V(b.a,b.d,1)},
n:{
ja:function(a,b){var z,y
z=a.an
y=new A.j9(b,z)
y.fz(b,z)
y.fu(a,b)
return y}}},je:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,ax,an,by",
iE:function(a){var z,y,x
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
iL:function(a){var z
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
iF:function(a){var z
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
iT:function(a){var z,y
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
iU:function(a){var z,y
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
iN:function(a){var z
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
iY:function(a){var z
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
aD:function(a,b,c){var z
if(b===C.d)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.f(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.c.ar(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
iI:function(a){var z,y
z=this.a
if(z===C.d)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aD(a,z,"emission")
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
iD:function(a){var z,y
z=this.b
if(z===C.d)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aD(a,z,"ambient")
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
iG:function(a){var z,y
z=this.c
if(z===C.d)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aD(a,z,"diffuse")
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
iJ:function(a){var z,y
z=this.d
if(z===C.d)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aD(a,z,"invDiffuse")
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
iR:function(a){var z,y
z=this.e
if(z===C.d)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aD(a,z,"specular")
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
iM:function(a){var z,y
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
iP:function(a){var z,y
z=this.r
if(z===C.d)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aD(a,z,"reflect")
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
iQ:function(a){var z,y
z=this.x
if(z===C.d)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aD(a,z,"refract")
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
iH:function(a){var z,y
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
iO:function(a){var z,y
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
iS:function(a){var z,y
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
iV:function(a){var z,y,x
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
iW:function(a){var z,y,x
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
iX:function(a){var z,y,x
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
iK:function(a){var z
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
i:function(a){return this.an}},dt:{"^":"b;a,b,c"},dx:{"^":"b;a,b,c,d,e,f,r,x"},dv:{"^":"b;a,b,c,d,e,f,r"},dy:{"^":"b;a,b,c,d,e,f,r,x,y,z"},dw:{"^":"b;a,b,c,d,e,f,r,x,y,z"},dz:{"^":"b;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},dg:{"^":"cV;",
fz:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dm:function(a,b){var z,y,x
z=this.a
y=C.b.jp(z,b)
C.b.fk(z,y,a)
C.b.ji(z,y)
if(!H.dO(C.b.fd(z,y,35713))){x=C.b.fc(z,y)
C.b.js(z,y)
throw H.d(P.u("Error compiling shader '"+H.i(y)+"': "+H.i(x)))}return y},
ih:function(){var z,y,x,w,v,u
z=H.c([],[A.e6])
y=this.a
x=H.ab(C.b.bU(y,this.r,35721))
if(typeof x!=="number")return H.B(x)
w=0
for(;w<x;++w){v=C.b.f5(y,this.r,w)
u=C.b.f7(y,this.r,v.name)
C.a.h(z,new A.e6(y,v.name,u))}this.x=new A.hR(z)},
ij:function(){var z,y,x,w,v,u
z=H.c([],[A.ad])
y=this.a
x=H.ab(C.b.bU(y,this.r,35718))
if(typeof x!=="number")return H.B(x)
w=0
for(;w<x;++w){v=C.b.f6(y,this.r,w)
u=C.b.fe(y,this.r,v.name)
C.a.h(z,this.jq(v.type,v.size,v.name,u))}this.y=new A.kB(z)},
aN:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.J(z,y,b,c)
else return A.ds(z,y,b,a,c)},
h4:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.am(z,y,b,c)
else return A.ds(z,y,b,a,c)},
h5:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.an(z,y,b,c)
else return A.ds(z,y,b,a,c)},
bt:function(a,b){return new P.fR(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
jq:function(a,b,c,d){switch(a){case 5120:return this.aN(b,c,d)
case 5121:return this.aN(b,c,d)
case 5122:return this.aN(b,c,d)
case 5123:return this.aN(b,c,d)
case 5124:return this.aN(b,c,d)
case 5125:return this.aN(b,c,d)
case 5126:return new A.Y(this.a,this.r,c,d)
case 35664:return new A.kw(this.a,this.r,c,d)
case 35665:return new A.H(this.a,this.r,c,d)
case 35666:return new A.kz(this.a,this.r,c,d)
case 35667:return new A.kx(this.a,this.r,c,d)
case 35668:return new A.ky(this.a,this.r,c,d)
case 35669:return new A.kA(this.a,this.r,c,d)
case 35674:return new A.kD(this.a,this.r,c,d)
case 35675:return new A.du(this.a,this.r,c,d)
case 35676:return new A.aE(this.a,this.r,c,d)
case 35678:return this.h4(b,c,d)
case 35680:return this.h5(b,c,d)
case 35670:throw H.d(this.bt("BOOL",c))
case 35671:throw H.d(this.bt("BOOL_VEC2",c))
case 35672:throw H.d(this.bt("BOOL_VEC3",c))
case 35673:throw H.d(this.bt("BOOL_VEC4",c))
default:throw H.d(P.u("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}},ck:{"^":"b;a,b",
i:function(a){return this.b}},ad:{"^":"b;"},kB:{"^":"b;a",
l:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.l(0,b)
if(z==null)throw H.d(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.N()},
jJ:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.y)(z),++w)x+=z[w].i(0)+a
return x},
N:function(){return this.jJ("\n")}},J:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform1i: "+H.i(this.c)}},kx:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform2i: "+H.i(this.c)}},ky:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform3i: "+H.i(this.c)}},kA:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform4i: "+H.i(this.c)}},kv:{"^":"ad;0e,0f,a,b,c,d",
siB:function(a){this.e=H.j(a,"$isa",[P.m],"$asa")},
i:function(a){return"Uniform1iv: "+H.i(this.c)},
n:{
ds:function(a,b,c,d,e){var z=new A.kv(a,b,c,e)
z.f=d
z.siB(P.j_(d,0,!1,P.m))
return z}}},Y:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform1f: "+H.i(this.c)}},kw:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform2f: "+H.i(this.c)}},H:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform3f: "+H.i(this.c)}},kz:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform4f: "+H.i(this.c)}},kD:{"^":"ad;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}},du:{"^":"ad;a,b,c,d",
aq:function(a){var z=new Float32Array(H.bi(H.j(a,"$isa",[P.q],"$asa")))
C.b.eV(this.a,this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.i(this.c)}},aE:{"^":"ad;a,b,c,d",
aq:function(a){var z=new Float32Array(H.bi(H.j(a,"$isa",[P.q],"$asa")))
C.b.eW(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.i(this.c)}},am:{"^":"ad;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.i(this.c)}},an:{"^":"ad;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}}],["","",,F,{"^":"",
dR:function(a,b,c,d){var z
H.l(c,{func:1,ret:-1,args:[F.af,P.q,P.q]})
z=F.dh()
F.bK(z,b,c,d,a,1,0,0,1)
F.bK(z,b,c,d,a,0,1,0,3)
F.bK(z,b,c,d,a,0,0,1,2)
F.bK(z,b,c,d,a,-1,0,0,0)
F.bK(z,b,c,d,a,0,-1,0,0)
F.bK(z,b,c,d,a,0,0,-1,3)
z.aw()
return z},
cI:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bK:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.l(c,{func:1,ret:-1,args:[F.af,P.q,P.q]})
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.D(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.D(t+h,s+f,r+g)
z.b=q
p=new V.D(t-h,s-f,r-g)
z.c=p
o=new V.D(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cI(y)
k=F.cI(z.b)
j=F.e0(d,e,new F.mv(z,F.cI(z.c),F.cI(z.d),k,l,c),b)
if(j!=null)a.bc(j)},
hp:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.l(e,{func:1,ret:P.q,args:[P.q]})
if(f<3)return
z=F.dh()
y=b?-1:1
x=-6.283185307179586/f
w=H.c([],[F.af])
v=z.a
u=new V.D(0,0,y)
u=u.w(0,Math.sqrt(u.I(u)))
C.a.h(w,v.j1(new V.c4(a,-1,-1,-1),new V.bu(1,1,1,1),new V.X(0,0,d),new V.D(0,0,y),new V.ac(0.5,0.5),u))
for(v=y*y,t=0;t<=f;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=e.$1(t/f)
u=z.a
if(typeof p!=="number")return H.B(p)
o=new V.D(r,q,y).w(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.c9(new V.c4(a,-1,-1,-1),null,new V.bu(n,l,m,1),new V.X(r*p,q*p,d),new V.D(0,0,y),new V.ac(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.j_(w)
return z},
dS:function(a,b,c,d,e,f){return F.mS(b,c,d,new F.mR(a,f),e)},
mS:function(a,b,c,d,e){var z
H.l(d,{func:1,ret:P.q,args:[P.q,P.q]})
if(e<3)return
if(c<1)return
z=F.e0(c,e,new F.mU(d),null)
if(z==null)return
z.aw()
z.cm()
if(b)z.bc(F.hp(3,!1,!1,1,new F.mV(d),e))
if(a)z.bc(F.hp(1,!0,!1,-1,new F.mW(d),e))
return z},
nv:function(a,b,c,d){var z,y
z={}
z.a=b
z.a=new F.nw()
y=F.dR(a,null,new F.nx(z,c),d)
y.cm()
return y},
hB:function(a,b,c,d){return F.ho(c,a,d,b,new F.nz())},
nd:function(a,b,c,d,e,f){return F.ho(d,a,e,b,new F.ne(f,c))},
ho:function(a,b,c,d,e){var z=F.e0(a,b,new F.mT(H.l(e,{func:1,ret:V.X,args:[P.q]}),d,b,c),null)
if(z==null)return
z.aw()
z.cm()
return z},
e0:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.af,P.q,P.q]})
if(a<1)return
if(b<1)return
z=F.dh()
y=H.c([],[F.af])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.c9(null,null,new V.bu(u,0,0,1),null,null,new V.ac(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cv(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.c9(null,null,new V.bu(o,n,m,1),null,null,new V.ac(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cv(d))}}z.d.j0(a+1,b+1,y)
return z},
mv:{"^":"n:7;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cO(z.b,b).cO(z.d.cO(z.c,b),c)
a.sa4(0,new V.X(y.a,y.b,y.c))
a.seR(y.w(0,Math.sqrt(y.I(y))))
z=1-b
x=1-c
a.sdX(new V.c4(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
mR:{"^":"n:21;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
mU:{"^":"n:7;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.B(v)
y=-y*v
u=x*v
a.sa4(0,new V.X(y,u,w))
u=new V.D(y,u,w)
a.seR(u.w(0,Math.sqrt(u.I(u))))
a.sdX(new V.c4(1-c,2+c,-1,-1))}},
mV:{"^":"n:30;a",
$1:function(a){return this.a.$2(a,1)}},
mW:{"^":"n:30;a",
$1:function(a){return this.a.$2(1-a,0)}},
nw:{"^":"n:21;",
$2:function(a,b){return 0}},
nx:{"^":"n:7;a,b",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.B(z)
y=a.f
x=new V.D(y.a,y.b,y.c)
z=x.w(0,Math.sqrt(x.I(x))).E(0,this.b+z)
a.sa4(0,new V.X(z.a,z.b,z.c))}},
nz:{"^":"n:20;",
$1:function(a){return new V.X(Math.cos(a),Math.sin(a),0)}},
ne:{"^":"n:20;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.X(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
mT:{"^":"n:7;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.e1(y.$1(z),x)
x=J.e1(y.$1(z+3.141592653589793/this.c),x).R(0,w)
x=new V.D(x.a,x.b,x.c)
v=x.w(0,Math.sqrt(x.I(x)))
y=$.fG
if(y==null){y=new V.D(1,0,0)
$.fG=y
u=y}else u=y
y=v.aG(!J.M(v,u)?V.fJ():u)
t=y.w(0,Math.sqrt(y.I(y)))
y=t.aG(v)
u=y.w(0,Math.sqrt(y.I(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.E(0,y*x)
x=t.E(0,r*x)
a.sa4(0,w.G(0,new V.X(y.a-x.a,y.b-x.b,y.c-x.c)))}},
aa:{"^":"b;0a,0b,0c,0d,0e",
b8:function(){if(!this.gb9()){C.a.K(this.a.a.d.b,this)
this.a.a.a2()}this.ce()
this.cf()
this.i1()},
ck:function(a){this.a=a
C.a.h(a.d.b,this)},
cl:function(a){this.b=a
C.a.h(a.d.c,this)},
ig:function(a){this.c=a
C.a.h(a.d.d,this)},
ce:function(){var z=this.a
if(z!=null){C.a.K(z.d.b,this)
this.a=null}},
cf:function(){var z=this.b
if(z!=null){C.a.K(z.d.c,this)
this.b=null}},
i1:function(){var z=this.c
if(z!=null){C.a.K(z.d.d,this)
this.c=null}},
gb9:function(){return this.a==null||this.b==null||this.c==null},
fW:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.bD()
if(y!=null)v=v.G(0,y)
if(x!=null)v=v.G(0,x)
if(w!=null)v=v.G(0,w)
if(v.eA())return
return v.w(0,Math.sqrt(v.I(v)))},
h0:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.R(0,y)
z=new V.D(z.a,z.b,z.c)
v=z.w(0,Math.sqrt(z.I(z)))
z=w.R(0,y)
z=new V.D(z.a,z.b,z.c)
z=v.aG(z.w(0,Math.sqrt(z.I(z))))
return z.w(0,Math.sqrt(z.I(z)))},
cs:function(){if(this.d!=null)return!0
var z=this.fW()
if(z==null){z=this.h0()
if(z==null)return!1}this.d=z
this.a.a.a2()
return!0},
fV:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=V.bD()
if(y!=null)v=v.G(0,y)
if(x!=null)v=v.G(0,x)
if(w!=null)v=v.G(0,w)
if(v.eA())return
return v.w(0,Math.sqrt(v.I(v)))},
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
if($.p.$2(n,0)){z=r.R(0,u)
z=new V.D(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.I(z)))
if(o.a-p.a<0)m=m.U(0)}else{l=(z-q.b)/n
z=r.R(0,u).E(0,l).G(0,u).R(0,x)
z=new V.D(z.a,z.b,z.c)
m=z.w(0,Math.sqrt(z.I(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.U(0)}z=this.d
if(z!=null){k=z.w(0,Math.sqrt(z.I(z)))
z=k.aG(m)
z=z.w(0,Math.sqrt(z.I(z))).aG(k)
m=z.w(0,Math.sqrt(z.I(z)))}return m},
cq:function(){if(this.e!=null)return!0
var z=this.fV()
if(z==null){z=this.h_()
if(z==null)return!1}this.e=z
this.a.a.a2()
return!0},
gjh:function(a){if(J.M(this.a,this.b))return!0
if(J.M(this.b,this.c))return!0
if(J.M(this.c,this.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
F:function(a){var z,y
if(this.gb9())return a+"disposed"
z=a+C.c.af(J.ae(this.a.e),0)+", "+C.c.af(J.ae(this.b.e),0)+", "+C.c.af(J.ae(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
N:function(){return this.F("")},
n:{
by:function(a,b,c){var z,y,x
z=new F.aa()
y=a.a
if(y==null)H.r(P.u("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.u("May not create a face with vertices attached to different shapes."))
z.ck(a)
z.cl(b)
z.ig(c)
C.a.h(z.a.a.d.b,z)
z.a.a.a2()
return z}}},
iq:{"^":"b;"},
k8:{"^":"iq;",
bb:function(a,b,c){var z,y
z=b.a
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
if(z==y.e){z=b.b
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
if(z==y.e){z=b.c
z.a.a.A()
z=z.e
y=c.c
y.a.a.A()
y=z==y.e
z=y}else z=!1
return z}else{z=b.a
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
if(z==y.e){z=b.b
z.a.a.A()
z=z.e
y=c.c
y.a.a.A()
if(z==y.e){z=b.c
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
y=z==y.e
z=y}else z=!1
return z}else{z=b.a
z.a.a.A()
z=z.e
y=c.c
y.a.a.A()
if(z==y.e){z=b.b
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
if(z==y.e){z=b.c
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
y=z==y.e
z=y}else z=!1
return z}else return!1}}}},
bB:{"^":"b;0a,0b",
b8:function(){if(!this.gb9()){C.a.K(this.a.a.c.b,this)
this.a.a.a2()}this.ce()
this.cf()},
ck:function(a){this.a=a
C.a.h(a.c.b,this)},
cl:function(a){this.b=a
C.a.h(a.c.c,this)},
ce:function(){var z=this.a
if(z!=null){C.a.K(z.c.b,this)
this.a=null}},
cf:function(){var z=this.b
if(z!=null){C.a.K(z.c.c,this)
this.b=null}},
gb9:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
F:function(a){if(this.gb9())return a+"disposed"
return a+C.c.af(J.ae(this.a.e),0)+", "+C.c.af(J.ae(this.b.e),0)},
N:function(){return this.F("")},
n:{
iR:function(a,b){var z,y,x
z=new F.bB()
y=a.a
if(y==null)H.r(P.u("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.r(P.u("May not create a line with vertices attached to different shapes."))
z.ck(a)
z.cl(b)
C.a.h(z.a.a.c.b,z)
z.a.a.a2()
return z}}},
iS:{"^":"b;"},
ku:{"^":"iS;",
bb:function(a,b,c){var z,y
z=b.a
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
if(z==y.e){z=b.b
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
return z==y.e}else{z=b.a
z.a.a.A()
z=z.e
y=c.b
y.a.a.A()
if(z==y.e){z=b.b
z.a.a.A()
z=z.e
y=c.a
y.a.a.A()
return z==y.e}else return!1}}},
c3:{"^":"b;0a",
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
F:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.c.af(J.ae(z.e),0)},
N:function(){return this.F("")}},
f6:{"^":"b;0a,0b,0c,0d,0e",
gB:function(){var z=this.e
if(z==null){z=D.Q()
this.e=z}return z},
bc:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.A()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){v=z[w]
this.a.h(0,v.jk())}this.a.A()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.G()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.c3()
if(r.a==null)H.r(P.u("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.L(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.G()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.A()
t=t.e
if(typeof t!=="number")return t.G()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.c.a
t.a.h(0,p)
t.a.h(0,o)
F.iR(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.y)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.G()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.A()
t=t.e
if(typeof t!=="number")return t.G()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.A()
s=s.e
if(typeof s!=="number")return s.G()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
m=t[s]
s=this.d.a
s.a.h(0,p)
s.a.h(0,o)
s.a.h(0,m)
F.by(p,o,m)}z=this.e
if(!(z==null))z.ao()},
aw:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aw()||!1
if(!this.a.aw())y=!1
z=this.e
if(!(z==null))z.ao()
return y},
jX:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.c(z.slice(0),[H.t(z,0)])
for(z=[F.af];y.length!==0;){x=C.a.gjF(y)
C.a.kk(y,0)
if(x!=null){w=H.c([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.y)(y),++u){t=y[u]
if(t!=null&&a.bb(0,x,t)){C.a.h(w,t)
C.a.K(y,t)}}if(w.length>1)b.bc(w)}}this.a.A()
this.c.cU()
this.d.cU()
this.b.kl()
this.c.cV(new F.ku())
this.d.cV(new F.k8())
z=this.e
if(!(z==null))z.ao()},
j3:function(a){this.jX(new F.l4(),new F.jp())},
cm:function(){return this.j3(null)},
cJ:function(){var z,y,x,w,v,u
z=this.e
if(!(z==null))++z.d
this.d.cJ()
for(y=this.a.c.length-1;y>=0;--y){z=this.a.c
if(y>=z.length)return H.f(z,y)
x=z[y]
z=x.r
if(z!=null)x.seF(new V.D(-z.a,-z.b,-z.c))
z=x.x
if(z!=null){w=-z.a
v=-z.b
z=-z.c
u=new V.D(w,v,z).w(0,Math.sqrt(w*w+v*v+z*z))
if(!J.M(x.x,u)){x.x=u
z=x.a
if(z!=null){z=z.e
if(!(z==null))z.L(null)}}}}z=this.e
if(!(z==null))z.ao()},
jc:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aP()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aO().a)!==0)++w
if((x&$.$get$aN().a)!==0)++w
if((x&$.$get$aQ().a)!==0)++w
if((x&$.$get$aR().a)!==0)++w
if((x&$.$get$bE().a)!==0)++w
if((x&$.$get$bF().a)!==0)++w
if((x&$.$get$bg().a)!==0)++w
if((x&$.$get$aM().a)!==0)++w
v=b.gd5(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.q
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.eb])
for(r=0,q=0;q<w;++q){p=b.j6(q)
o=p.gd5(p)
C.a.q(s,q,new Z.eb(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.f(y,n)
m=y[n].jT(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.q(t,l,m[k]);++l}}r+=o}H.j(t,"$isa",[x],"$asa")
y=a.a
j=y.createBuffer()
C.b.av(y,34962,j)
C.b.dZ(y,34962,new Float32Array(H.bi(t)),35044)
C.b.av(y,34962,null)
i=new Z.ec(new Z.fN(34962,j),s,b)
i.shj(H.c([],[Z.bX]))
if(this.b.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)}f=Z.dD(y,34963,H.j(h,"$isa",[x],"$asa"))
C.a.h(i.b,new Z.bX(0,h.length,f))}if(this.c.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.A()
C.a.h(h,g.e)}f=Z.dD(y,34963,H.j(h,"$isa",[x],"$asa"))
C.a.h(i.b,new Z.bX(1,h.length,f))}if(this.d.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.A()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.A()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].c
g.a.a.A()
C.a.h(h,g.e)}f=Z.dD(y,34963,H.j(h,"$isa",[x],"$asa"))
C.a.h(i.b,new Z.bX(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.h])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.F("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.F("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.F("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.F("   "))}return C.a.k(z,"\n")},
aa:function(a){var z=this.e
if(!(z==null))z.L(a)},
a2:function(){return this.aa(null)},
$isnU:1,
n:{
dh:function(){var z,y
z=new F.f6()
y=new F.l_(z)
y.b=!1
y.siC(H.c([],[F.af]))
z.a=y
y=new F.k2(z)
y.scb(H.c([],[F.c3]))
z.b=y
y=new F.k1(z)
y.shl(H.c([],[F.bB]))
z.c=y
y=new F.k0(z)
y.sha(H.c([],[F.aa]))
z.d=y
z.e=null
return z}}},
k0:{"^":"b;a,0b",
sha:function(a){this.b=H.j(a,"$isa",[F.aa],"$asa")},
j_:function(a){var z,y,x,w,v,u,t
H.j(a,"$isa",[F.af],"$asa")
z=H.c([],[F.aa])
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
C.a.h(z,F.by(x,u,t))}}return z},
j0:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.j(c,"$isa",[F.af],"$asa")
z=H.c([],[F.aa])
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
C.a.h(z,F.by(q,p,n))
y.a.h(0,q)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.by(q,n,m))}else{r.h(0,p)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.by(p,n,m))
y.a.h(0,p)
y.a.h(0,m)
y.a.h(0,q)
C.a.h(z,F.by(p,m,q))}t=!t}v=!v}return z},
gp:function(a){return this.b.length},
cV:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.f(x,y)
w=x[y]
for(x=w.d,v=x.b.length+x.c.length+x.d.length-1;v>=0;--v){u=w.d.l(0,v)
for(t=v-1;t>=0;--t){s=w.d.l(0,t)
if(a.bb(0,u,s)){u.b8()
break}}}}},
cU:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=x.gjh(x)
if(y)x.b8()}},
aw:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.y)(z),++w)if(!z[w].cs())x=!1
return x},
cr:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.y)(z),++w)if(!z[w].cq())x=!1
return x},
cJ:function(){var z,y,x,w,v,u
for(z=this.b,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
v=w.b
w.b=w.c
w.c=v
u=w.d
if(u!=null)w.d=new V.D(-u.a,-u.b,-u.c)
u=w.e
if(u!=null)w.e=new V.D(-u.a,-u.b,-u.c)
u=w.a.a.e
if(!(u==null))u.L(null)}},
i:function(a){return this.N()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
N:function(){return this.F("")}},
k1:{"^":"b;a,0b",
shl:function(a){this.b=H.j(a,"$isa",[F.bB],"$asa")},
gp:function(a){return this.b.length},
cV:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.f(x,y)
w=x[y]
for(x=w.c,v=x.b.length+x.c.length-1;v>=0;--v){u=w.c.l(0,v)
for(t=v-1;t>=0;--t){s=w.c.l(0,t)
if(a.bb(0,u,s)){u.b8()
break}}}}},
cU:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=J.M(x.a,x.b)
if(y)x.b8()}},
i:function(a){return this.N()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.f(w,x)
C.a.h(z,w[x].F(a+(""+x+". ")))}return C.a.k(z,"\n")},
N:function(){return this.F("")}},
k2:{"^":"b;a,0b",
scb:function(a){this.b=H.j(a,"$isa",[F.c3],"$asa")},
gp:function(a){return this.b.length},
kl:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
y=y[z]
x=y.a
if(x.b.b.length>1){if(x!=null){C.a.K(x.a.b.b,y)
x=y.a.a.e
if(!(x==null))x.L(null)}x=y.a
if(x!=null){C.a.K(x.b.b,y)
y.a=null}}}},
i:function(a){return this.N()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
N:function(){return this.F("")}},
af:{"^":"b;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cv:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.c9(this.cx,x,u,z,y,w,v,a,t)},
jk:function(){return this.cv(null)},
sa4:function(a,b){var z
if(!J.M(this.f,b)){this.f=b
z=this.a
if(z!=null)z.a2()}},
seF:function(a){var z
a=a==null?null:a.w(0,Math.sqrt(a.I(a)))
if(!J.M(this.r,a)){this.r=a
z=this.a
if(z!=null)z.a2()}},
seR:function(a){var z
if(!J.M(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a2()}},
sdX:function(a){var z
if(!J.M(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.a2()}},
jT:function(a){var z,y
if(a.u(0,$.$get$aP())){z=this.f
y=[P.q]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$aO())){z=this.r
y=[P.q]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$aN())){z=this.x
y=[P.q]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$aQ())){z=this.y
y=[P.q]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(a.u(0,$.$get$aR())){z=this.z
y=[P.q]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$bE())){z=this.Q
y=[P.q]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$bF())){z=this.Q
y=[P.q]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(a.u(0,$.$get$bg()))return H.c([this.ch],[P.q])
else if(a.u(0,$.$get$aM())){z=this.cx
y=[P.q]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.q])},
cs:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bD()
this.d.Z(0,new F.l9(z))
z=z.a
this.r=z.w(0,Math.sqrt(z.I(z)))
z=this.a
if(z!=null){z.a2()
z=this.a.e
if(!(z==null))z.ao()}return!0},
cq:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bD()
this.d.Z(0,new F.l8(z))
z=z.a
this.x=z.w(0,Math.sqrt(z.I(z)))
z=this.a
if(z!=null){z.a2()
z=this.a.e
if(!(z==null))z.ao()}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
F:function(a){var z,y,x
z=H.c([],[P.h])
C.a.h(z,C.c.af(J.ae(this.e),0))
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
x=C.a.k(z,", ")
return a+"{"+x+"}"},
N:function(){return this.F("")},
n:{
c9:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.af()
y=new F.l7(z)
y.scb(H.c([],[F.c3]))
z.b=y
y=new F.l3(z)
x=[F.bB]
y.shm(H.c([],x))
y.shn(H.c([],x))
z.c=y
y=new F.l0(z)
x=[F.aa]
y.shb(H.c([],x))
y.shc(H.c([],x))
y.shd(H.c([],x))
z.d=y
h=$.$get$fK()
z.e=0
y=$.$get$aP()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aO().a)!==0?e:null
z.x=(x&$.$get$aN().a)!==0?b:null
z.y=(x&$.$get$aQ().a)!==0?f:null
z.z=(x&$.$get$aR().a)!==0?g:null
z.Q=(x&$.$get$fL().a)!==0?c:null
z.ch=(x&$.$get$bg().a)!==0?i:0
z.cx=(x&$.$get$aM().a)!==0?a:null
return z}}},
l9:{"^":"n:5;a",
$1:function(a){var z,y
H.e(a,"$isaa")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.G(0,z)}}},
l8:{"^":"n:5;a",
$1:function(a){var z,y
H.e(a,"$isaa")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.G(0,z)}}},
l_:{"^":"b;a,0b,0c",
siC:function(a){this.c=H.j(a,"$isa",[F.af],"$asa")},
A:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.f(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z,y
z=b.a
if(z!=null){if(z===this.a)return!1
throw H.d(P.u("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
y=this.a
b.a=y
C.a.h(z,b)
y.a2()
return!0},
j2:function(a,b,c,d,e,f,g,h,i){var z=F.c9(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
j1:function(a,b,c,d,e,f){return this.j2(a,null,b,c,d,e,f,null,0)},
gp:function(a){return this.c.length},
aw:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)z[x].cs()
return!0},
cr:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)z[x].cq()
return!0},
jd:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.w(0,Math.sqrt(u*u+t*t+s*s))
if(!J.M(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.L(null)}}}}return!0},
i:function(a){return this.N()},
F:function(a){var z,y,x,w
this.A()
z=H.c([],[P.h])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
N:function(){return this.F("")}},
l0:{"^":"b;a,0b,0c,0d",
shb:function(a){this.b=H.j(a,"$isa",[F.aa],"$asa")},
shc:function(a){this.c=H.j(a,"$isa",[F.aa],"$asa")},
shd:function(a){this.d=H.j(a,"$isa",[F.aa],"$asa")},
gp:function(a){return this.b.length+this.c.length+this.d.length},
l:function(a,b){var z,y,x
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
Z:function(a,b){H.l(b,{func:1,ret:-1,args:[F.aa]})
C.a.Z(this.b,b)
C.a.Z(this.c,new F.l1(this,b))
C.a.Z(this.d,new F.l2(this,b))},
i:function(a){return this.N()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
N:function(){return this.F("")}},
l1:{"^":"n:5;a,b",
$1:function(a){H.e(a,"$isaa")
if(!J.M(a.a,this.a))this.b.$1(a)}},
l2:{"^":"n:5;a,b",
$1:function(a){var z
H.e(a,"$isaa")
z=this.a
if(!J.M(a.a,z)&&!J.M(a.b,z))this.b.$1(a)}},
l3:{"^":"b;a,0b,0c",
shm:function(a){this.b=H.j(a,"$isa",[F.bB],"$asa")},
shn:function(a){this.c=H.j(a,"$isa",[F.bB],"$asa")},
gp:function(a){return this.b.length+this.c.length},
l:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.f(z,x)
return z[x]}else{if(b<0)return H.f(z,b)
return z[b]}},
i:function(a){return this.N()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
N:function(){return this.F("")}},
l5:{"^":"b;"},
l4:{"^":"l5;",
bb:function(a,b,c){return J.M(b.f,c.f)}},
l6:{"^":"b;"},
jp:{"^":"l6;",
bc:function(a){var z,y,x,w
H.j(a,"$isa",[F.af],"$asa")
z=V.bD()
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.D(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.w(0,Math.sqrt(z.I(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.y)(a),++x)a[x].seF(z)
return}},
l7:{"^":"b;a,0b",
scb:function(a){this.b=H.j(a,"$isa",[F.c3],"$asa")},
gp:function(a){return this.b.length},
i:function(a){return this.N()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
N:function(){return this.F("")}}}],["","",,O,{"^":"",jb:{"^":"c7;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
sfY:function(a){this.e=H.j(a,"$isZ",[V.ah],"$asZ")},
gB:function(){var z=this.dy
if(z==null){z=D.Q()
this.dy=z}return z},
ah:[function(a){var z
H.e(a,"$isz")
z=this.dy
if(!(z==null))z.L(a)},function(){return this.ah(null)},"kK","$1","$0","gfP",0,2,1],
i7:[function(a){H.e(a,"$isz")
this.a=null
this.ah(a)},function(){return this.i7(null)},"lg","$1","$0","gi6",0,2,1],
kT:[function(a,b){var z=V.ah
z=new D.co(a,H.j(b,"$iso",[z],"$aso"),this,[z])
z.b=!0
this.ah(z)},"$2","ghw",8,0,28],
kU:[function(a,b){var z=V.ah
z=new D.cp(a,H.j(b,"$iso",[z],"$aso"),this,[z])
z.b=!0
this.ah(z)},"$2","ghx",8,0,28],
dj:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
a2=$.$get$aP()
if(e){g=$.$get$aO()
a2=new Z.bf(a2.a|g.a)}if(d){g=$.$get$aN()
a2=new Z.bf(a2.a|g.a)}if(c){g=$.$get$aQ()
a2=new Z.bf(a2.a|g.a)}if(b){g=$.$get$aR()
a2=new Z.bf(a2.a|g.a)}if(a0){g=$.$get$aM()
a2=new Z.bf(a2.a|g.a)}return new A.je(z,r,q,p,o,n,m,l,k,y,x,w,v,u,t,y+x+w+v+u+t,i,i,a,a1,!0,!1,!1,h,a,f,e,d,c,b,a0,!1,!1,!1,s,j.charCodeAt(0)==0?j:j,a2)},
Y:function(a,b){H.j(a,"$isa",[T.dm],"$asa")
if(b!=null)if(!C.a.W(a,b)){b.a=a.length
C.a.h(a,b)}},
aB:function(a){var z,y,x,w,v,u,t
for(z=this.dx.a,z=new J.as(z,z.length,0,[H.t(z,0)]);z.C();){y=z.d
y.toString
x=$.b0
if(x==null){x=new V.X(0,0,0)
$.b0=x}y.a=x
x=$.cD
if(x==null){x=new V.D(0,0,1)
$.cD=x}y.b=x
x=$.cC
if(x==null){x=new V.D(0,1,0)
$.cC=x}y.c=x
x=$.cB
if(x==null){x=new V.D(-1,0,0)
$.cB=x}y.d=x
x=y.e
if(x!=null){w=x.aZ(a,y)
if(w!=null){y.a=w.aY(y.a)
x=w.bi(y.b)
v=x.a
u=x.b
t=x.c
y.b=x.w(0,Math.sqrt(v*v+u*u+t*t))
t=w.bi(y.c)
u=t.a
v=t.b
x=t.c
y.c=t.w(0,Math.sqrt(u*u+v*v+x*x))
x=w.bi(y.d)
v=x.a
u=x.b
t=x.c
y.d=x.w(0,Math.sqrt(v*v+u*u+t*t))}}}},
kn:function(a,a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=this.a
if(z==null){z=this.dj()
y=a.fr.l(0,z.an)
if(y==null){y=A.ja(z,a.a)
x=y.b
if(x.length===0)H.r(P.u("May not cache a shader with no name."))
if(a.fr.bw(x))H.r(P.u('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.q(0,x,y)}this.a=y
a0.e=null
z=y}w=z.z
v=w.by
z=a0.e
if(!(z instanceof Z.ec)){a0.e=null
z=null}if(z==null||!z.d.u(0,v)){z=w.r1
if(z)a0.d.aw()
u=w.r2
if(u){t=a0.d
s=t.e
if(!(s==null))++s.d
t.d.cr()
t.a.cr()
t=t.e
if(!(t==null))t.ao()}t=w.ry
if(t){s=a0.d
r=s.e
if(!(r==null))++r.d
s.a.jd()
s=s.e
if(!(s==null))s.ao()}q=a0.d.jc(new Z.la(a.a),v)
q.aS($.$get$aP()).e=this.a.Q.c
if(z)q.aS($.$get$aO()).e=this.a.cx.c
if(u)q.aS($.$get$aN()).e=this.a.ch.c
if(w.rx)q.aS($.$get$aQ()).e=this.a.cy.c
if(t)q.aS($.$get$aR()).e=this.a.db.c
if(w.x1)q.aS($.$get$aM()).e=this.a.dx.c
a0.e=q}z=T.dm
p=H.c([],[z])
u=this.a
t=a.a
C.b.eY(t,u.r)
u.x.jB()
if(w.fx){u=this.a
s=a.dx.ga0()
u=u.dy
u.toString
u.aq(s.ag(0,!0))}if(w.fy){u=this.a
s=a.cx
if(s==null){s=a.db.ga0().E(0,a.dx.ga0())
a.cx=s}u=u.fr
u.toString
u.aq(s.ag(0,!0))}u=this.a
s=a.ch
if(s==null){s=a.gki().E(0,a.dx.ga0())
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
u.aq(C.r.ag(s,!0))}if(w.ax>0){o=this.e.a.length
u=this.a.k4
C.b.V(u.a,u.d,o)
for(u=[P.q],n=0;n<o;++n){s=this.a
r=this.e.a
if(n>=r.length)return H.f(r,n)
r=r[n]
s.toString
H.e(r,"$isah")
s=s.r1
if(n>=s.length)return H.f(s,n)
s=s[n]
m=new Float32Array(H.bi(H.j(r.ag(0,!0),"$isa",u,"$asa")))
C.b.eW(s.a,s.d,!1,m)}}switch(w.a){case C.d:break
case C.i:u=this.a
s=this.f.f
u=u.r2
u.toString
r=s.a
l=s.b
s=s.c
C.b.v(u.a,u.d,r,l,s)
break
case C.e:this.Y(p,this.f.d)
u=this.a
s=this.f.d
u.ak(u.rx,u.x1,s)
s=this.a
u=this.f.f
s=s.r2
s.toString
r=u.a
l=u.b
u=u.c
C.b.v(s.a,s.d,r,l,u)
break
case C.f:this.Y(p,this.f.e)
u=this.a
s=this.f.e
u.ad(u.ry,u.x1,s)
s=this.a
u=this.f.f
s=s.r2
s.toString
r=u.a
l=u.b
u=u.c
C.b.v(s.a,s.d,r,l,u)
break}if(w.k2){switch(w.b){case C.d:break
case C.i:u=this.a
s=this.r.f
u=u.x2
u.toString
r=s.a
l=s.b
s=s.c
C.b.v(u.a,u.d,r,l,s)
break
case C.e:this.Y(p,this.r.d)
u=this.a
s=this.r.d
u.ak(u.y1,u.ax,s)
s=this.a
u=this.r.f
s=s.x2
s.toString
r=u.a
l=u.b
u=u.c
C.b.v(s.a,s.d,r,l,u)
break
case C.f:this.Y(p,this.r.e)
u=this.a
s=this.r.e
u.ad(u.y2,u.ax,s)
s=this.a
u=this.r.f
s=s.x2
s.toString
r=u.a
l=u.b
u=u.c
C.b.v(s.a,s.d,r,l,u)
break}switch(w.c){case C.d:break
case C.i:u=this.a
s=this.x.f
u=u.an
u.toString
r=s.a
l=s.b
s=s.c
C.b.v(u.a,u.d,r,l,s)
break
case C.e:this.Y(p,this.x.d)
u=this.a
s=this.x.d
u.ak(u.by,u.bz,s)
s=this.a
u=this.x.f
s=s.an
s.toString
r=u.a
l=u.b
u=u.c
C.b.v(s.a,s.d,r,l,u)
break
case C.f:this.Y(p,this.x.e)
u=this.a
s=this.x.e
u.ad(u.e4,u.bz,s)
s=this.a
u=this.x.f
s=s.an
s.toString
r=u.a
l=u.b
u=u.c
C.b.v(s.a,s.d,r,l,u)
break}switch(w.d){case C.d:break
case C.i:u=this.a
s=this.y.f
u=u.bA
u.toString
r=s.a
l=s.b
s=s.c
C.b.v(u.a,u.d,r,l,s)
break
case C.e:this.Y(p,this.y.d)
u=this.a
s=this.y.d
u.ak(u.e5,u.bB,s)
s=this.a
u=this.y.f
s=s.bA
s.toString
r=u.a
l=u.b
u=u.c
C.b.v(s.a,s.d,r,l,u)
break
case C.f:this.Y(p,this.y.e)
u=this.a
s=this.y.e
u.ad(u.e6,u.bB,s)
s=this.a
u=this.y.f
s=s.bA
s.toString
r=u.a
l=u.b
u=u.c
C.b.v(s.a,s.d,r,l,u)
break}switch(w.e){case C.d:break
case C.i:u=this.a
s=this.z.f
u=u.bC
u.toString
r=s.a
l=s.b
s=s.c
C.b.v(u.a,u.d,r,l,s)
s=this.a
l=this.z.ch
s=s.bE
C.b.P(s.a,s.d,l)
break
case C.e:this.Y(p,this.z.d)
u=this.a
s=this.z.d
u.ak(u.e7,u.bD,s)
s=this.a
u=this.z.f
s=s.bC
s.toString
r=u.a
l=u.b
u=u.c
C.b.v(s.a,s.d,r,l,u)
u=this.a
l=this.z.ch
u=u.bE
C.b.P(u.a,u.d,l)
break
case C.f:this.Y(p,this.z.e)
u=this.a
s=this.z.e
u.ad(u.e8,u.bD,s)
s=this.a
u=this.z.f
s=s.bC
s.toString
r=u.a
l=u.b
u=u.c
C.b.v(s.a,s.d,r,l,u)
u=this.a
l=this.z.ch
u=u.bE
C.b.P(u.a,u.d,l)
break}if(w.z>0){o=this.dx.e.length
u=this.a.ej
C.b.V(u.a,u.d,o)
k=a.db.ga0()
for(u=this.dx.e,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.y)(u),++i){h=u[i]
r=this.a.cD
if(j>=r.length)return H.f(r,j)
g=r[j]
r=k.bi(h.gcw(h))
l=r.a
f=r.b
e=r.c
e=r.w(0,Math.sqrt(l*l+f*f+e*e))
f=g.b
l=e.a
r=e.b
e=e.c
C.b.v(f.a,f.d,l,r,e)
e=h.gal(h)
r=g.c
l=e.gbP()
f=e.gbk()
e=e.gbu()
C.b.v(r.a,r.d,l,f,e);++j}}if(w.Q>0){o=this.dx.f.length
u=this.a.ek
C.b.V(u.a,u.d,o)
k=a.db.ga0()
for(u=this.dx.f,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.y)(u),++i){h=u[i]
r=this.a.cE
if(j>=r.length)return H.f(r,j)
g=r[j]
r=h.gcR(h)
l=g.b
f=r.gf0(r)
e=r.gf1(r)
r=r.gf2(r)
C.b.v(l.a,l.d,f,e,r)
r=k.aY(h.gcR(h))
e=g.c
C.b.v(e.a,e.d,r.a,r.b,r.c)
r=h.gal(h)
e=g.d
f=r.gbP()
l=r.gbk()
r=r.gbu()
C.b.v(e.a,e.d,f,l,r)
r=h.gdU()
l=g.e
C.b.P(l.a,l.d,r)
r=h.gdV()
l=g.f
C.b.P(l.a,l.d,r)
r=h.gdW()
l=g.r
C.b.P(l.a,l.d,r);++j}}if(w.ch>0){o=this.dx.r.length
u=this.a.el
C.b.V(u.a,u.d,o)
k=a.db.ga0()
for(u=this.dx.r,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.y)(u),++i){h=u[i]
r=this.a.cF
if(j>=r.length)return H.f(r,j)
g=r[j]
r=h.gcR(h)
l=g.b
f=r.gf0(r)
e=r.gf1(r)
r=r.gf2(r)
C.b.v(l.a,l.d,f,e,r)
r=h.gcw(h).lp()
e=g.c
f=r.gcz(r)
l=r.gcA(r)
r=r.gcB()
C.b.v(e.a,e.d,f,l,r)
r=k.aY(h.gcR(h))
l=g.d
C.b.v(l.a,l.d,r.a,r.b,r.c)
r=h.gal(h)
l=g.e
f=r.gbP()
e=r.gbk()
r=r.gbu()
C.b.v(l.a,l.d,f,e,r)
r=h.glm()
e=g.f
C.b.P(e.a,e.d,r)
r=h.glk()
e=g.r
C.b.P(e.a,e.d,r)
r=h.gdU()
e=g.x
C.b.P(e.a,e.d,r)
r=h.gdV()
e=g.y
C.b.P(e.a,e.d,r)
r=h.gdW()
e=g.z
C.b.P(e.a,e.d,r);++j}}if(w.cx>0){o=this.dx.x.length
u=this.a.em
C.b.V(u.a,u.d,o)
k=a.db.ga0()
for(u=this.dx.x,s=u.length,r=[z],j=0,i=0;i<u.length;u.length===s||(0,H.y)(u),++i){h=u[i]
l=this.a.cG
if(j>=l.length)return H.f(l,j)
g=l[j]
l=h.gcY()
H.j(p,"$isa",r,"$asa")
if(!C.a.W(p,l)){l.sdu(p.length)
C.a.h(p,l)}l=h.gcw(h)
f=g.d
e=l.gcz(l)
d=l.gcA(l)
l=l.gcB()
C.b.v(f.a,f.d,e,d,l)
l=h.glw()
d=g.b
e=l.gcz(l)
f=l.gcA(l)
l=l.gcB()
C.b.v(d.a,d.d,e,f,l)
l=h.gbQ(h)
f=g.c
e=l.gcz(l)
d=l.gcA(l)
l=l.gcB()
C.b.v(f.a,f.d,e,d,l)
l=k.bi(h.gcw(h))
d=l.a
e=l.b
f=l.c
f=l.w(0,Math.sqrt(d*d+e*e+f*f))
e=g.e
d=f.a
l=f.b
f=f.c
C.b.v(e.a,e.d,d,l,f)
f=h.gal(h)
l=g.f
d=f.gbP()
e=f.gbk()
f=f.gbu()
C.b.v(l.a,l.d,d,e,f)
f=h.gcY()
l=f.geB(f)
if(!l){l=g.x
C.b.V(l.a,l.d,1)}else{l=g.r
e=f.gkM()
d=l.a
l=l.d
if(!e)C.b.V(d,l,0)
else C.b.V(d,l,f.gdu())
l=g.x
C.b.V(l.a,l.d,0)}++j}}if(w.cy>0){o=this.dx.y.length
u=this.a.en
C.b.V(u.a,u.d,o)
k=a.db.ga0()
for(u=this.dx.y,s=u.length,r=[P.q],l=[z],j=0,i=0;i<u.length;u.length===s||(0,H.y)(u),++i){h=u[i]
f=this.a.cH
if(j>=f.length)return H.f(f,j)
g=f[j]
f=h.gcY()
H.j(p,"$isa",l,"$asa")
if(!C.a.W(p,f)){f.sdu(p.length)
C.a.h(p,f)}c=k.E(0,h.ga0())
f=h.ga0()
e=$.b0
if(e==null){e=new V.X(0,0,0)
$.b0=e}e=f.aY(e)
f=g.b
d=e.gf0(e)
b=e.gf1(e)
e=e.gf2(e)
C.b.v(f.a,f.d,d,b,e)
f=$.b0
if(f==null){f=new V.X(0,0,0)
$.b0=f}f=c.aY(f)
e=g.c
C.b.v(e.a,e.d,f.a,f.b,f.c)
f=c.ez()
e=g.d
m=new Float32Array(H.bi(H.j(new V.eM(f.a,f.b,f.c,f.e,f.f,f.r,f.y,f.z,f.Q).ag(0,!0),"$isa",r,"$asa")))
C.b.eV(e.a,e.d,!1,m)
e=h.gal(h)
f=g.e
d=e.gbP()
b=e.gbk()
e=e.gbu()
C.b.v(f.a,f.d,d,b,e)
e=h.gcY()
f=e.geB(e)
if(!f){f=g.r
C.b.V(f.a,f.d,1)}else{f=g.f
d=e.geB(e)
b=f.a
f=f.d
if(!d)C.b.V(b,f,0)
else C.b.V(b,f,e.gln(e))
f=g.r
C.b.V(f.a,f.d,0)}f=h.gdU()
e=g.x
C.b.P(e.a,e.d,f)
f=h.gdV()
e=g.y
C.b.P(e.a,e.d,f)
f=h.gdW()
e=g.z
C.b.P(e.a,e.d,f);++j}}if(w.db>0){o=this.dx.z.length
u=this.a.eo
C.b.V(u.a,u.d,o)
k=a.db.ga0()
for(u=this.dx.z,s=u.length,z=[z],j=0,i=0;i<u.length;u.length===s||(0,H.y)(u),++i){h=u[i]
r=this.a.cI
if(j>=r.length)return H.f(r,j)
g=r[j]
r=h.r
H.j(p,"$isa",z,"$asa")
if(r!=null)if(!C.a.W(p,r)){r.a=p.length
C.a.h(p,r)}r=h.a
l=g.b
f=r.a
e=r.b
r=r.c
C.b.v(l.a,l.d,f,e,r)
r=h.b
e=g.c
f=r.a
l=r.b
r=r.c
C.b.v(e.a,e.d,f,l,r)
r=h.c
l=g.d
f=r.a
e=r.b
r=r.c
C.b.v(l.a,l.d,f,e,r)
r=h.d
e=g.e
f=r.a
l=r.b
r=r.c
C.b.v(e.a,e.d,f,l,r)
r=k.aY(h.a)
l=g.f
C.b.v(l.a,l.d,r.a,r.b,r.c)
r=h.r
l=r!=null
if(!l||!r.d){r=g.x
C.b.V(r.a,r.d,1)}else{f=g.r
l=!l||!r.d
e=f.a
f=f.d
if(l)C.b.V(e,f,0)
else C.b.V(e,f,r.a)
r=g.x
C.b.V(r.a,r.d,0)}r=h.f
l=g.y
C.b.v(l.a,l.d,r.a,r.b,r.c)
r=h.x
l=g.z
C.b.P(l.a,l.d,r)
r=h.y
l=g.Q
C.b.P(l.a,l.d,r)
r=h.ch
l=g.ch
C.b.P(l.a,l.d,r)
r=h.cx
l=g.cx
C.b.P(l.a,l.d,r)
r=h.cy
l=g.cy
C.b.P(l.a,l.d,r);++j}}}switch(w.f){case C.d:break
case C.i:break
case C.e:this.Y(p,this.Q.d)
z=this.a
u=this.Q.d
z.ak(z.e9,z.bF,u)
break
case C.f:this.Y(p,this.Q.e)
z=this.a
u=this.Q.e
z.ad(z.ea,z.bF,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db.ga0().ez()
a.Q=u}z=z.id
z.toString
z.aq(u.ag(0,!0))}if(w.dy){this.Y(p,this.ch)
z=this.a
u=this.ch
z.ad(z.eb,z.ec,u)
switch(w.r){case C.d:break
case C.i:z=this.a
u=this.cx.f
z=z.bG
z.toString
s=u.a
r=u.b
u=u.c
C.b.v(z.a,z.d,s,r,u)
break
case C.e:this.Y(p,this.cx.d)
z=this.a
u=this.cx.d
z.ak(z.ed,z.bH,u)
u=this.a
z=this.cx.f
u=u.bG
u.toString
s=z.a
r=z.b
z=z.c
C.b.v(u.a,u.d,s,r,z)
break
case C.f:this.Y(p,this.cx.e)
z=this.a
u=this.cx.e
z.ad(z.ee,z.bH,u)
u=this.a
z=this.cx.f
u=u.bG
u.toString
s=z.a
r=z.b
z=z.c
C.b.v(u.a,u.d,s,r,z)
break}switch(w.x){case C.d:break
case C.i:z=this.a
u=this.cy.f
z=z.bJ
z.toString
s=u.a
r=u.b
u=u.c
C.b.v(z.a,z.d,s,r,u)
u=this.a
r=this.cy.ch
u=u.bI
C.b.P(u.a,u.d,r)
break
case C.e:this.Y(p,this.cy.d)
z=this.a
u=this.cy.d
z.ak(z.ef,z.bK,u)
u=this.a
z=this.cy.f
u=u.bJ
u.toString
s=z.a
r=z.b
z=z.c
C.b.v(u.a,u.d,s,r,z)
z=this.a
r=this.cy.ch
z=z.bI
C.b.P(z.a,z.d,r)
break
case C.f:this.Y(p,this.cy.e)
z=this.a
u=this.cy.e
z.ad(z.eg,z.bK,u)
u=this.a
z=this.cy.f
u=u.bJ
u.toString
s=z.a
r=z.b
z=z.c
C.b.v(u.a,u.d,s,r,z)
z=this.a
r=this.cy.ch
z=z.bI
C.b.P(z.a,z.d,r)
break}}z=w.y
u=z!==C.d
if(u){switch(z){case C.d:break
case C.i:z=this.a
s=this.db.f
z=z.bL
C.b.P(z.a,z.d,s)
break
case C.e:this.Y(p,this.db.d)
z=this.a
s=this.db.d
z.ak(z.eh,z.bM,s)
s=this.a
z=this.db.f
s=s.bL
C.b.P(s.a,s.d,z)
break
case C.f:this.Y(p,this.db.e)
z=this.a
s=this.db.e
z.ad(z.ei,z.bM,s)
s=this.a
z=this.db.f
s=s.bL
C.b.P(s.a,s.d,z)
break}C.b.cC(t,3042)
C.b.jb(t,770,771)}for(n=0;n<p.length;++n){z=p[n]
if(!z.c&&z.d){z.c=!0
C.b.dO(t,33984+z.a)
C.b.aR(t,3553,z.b)}}z=a0.e
z.cn(a)
z.aW(a)
z.kE(a)
if(u)C.b.jw(t,3042)
for(n=0;n<p.length;++n){z=p[n]
if(z.c){z.c=!1
C.b.dO(t,33984+z.a)
C.b.aR(t,3553,null)}}z=this.a
z.toString
C.b.eY(t,null)
z.x.jx()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dj().an},
n:{
eL:function(){var z,y,x
z=new O.jb()
z.sfY(O.d0(V.ah))
z.e.bm(z.ghw(),z.ghx())
y=new O.b7(z,"emission")
y.c=C.d
y.f=new V.a2(0,0,0)
z.f=y
y=new O.b7(z,"ambient")
y.c=C.d
y.f=new V.a2(0,0,0)
z.r=y
y=new O.b7(z,"diffuse")
y.c=C.d
y.f=new V.a2(0,0,0)
z.x=y
y=new O.b7(z,"invDiffuse")
y.c=C.d
y.f=new V.a2(0,0,0)
z.y=y
y=new O.jg(z,"specular")
y.c=C.d
y.f=new V.a2(0,0,0)
y.ch=100
z.z=y
y=new O.jd(z,"bump")
y.c=C.d
z.Q=y
z.ch=null
y=new O.b7(z,"reflect")
y.c=C.d
y.f=new V.a2(0,0,0)
z.cx=y
y=new O.jf(z,"refract")
y.c=C.d
y.f=new V.a2(0,0,0)
y.ch=1
z.cy=y
y=new O.jc(z,"alpha")
y.c=C.d
y.f=1
z.db=y
y=new D.iQ()
y.bY(D.a4)
y.sfH(H.c([],[D.er]))
y.sfI(H.c([],[D.eX]))
y.sfJ(H.c([],[D.f7]))
y.sfK(H.c([],[D.ff]))
y.sfL(H.c([],[D.fg]))
y.sfM(H.c([],[D.cx]))
y.Q=null
y.ch=null
y.d4(y.ghv(),y.ghP(),y.ghR())
z.dx=y
x=y.Q
if(x==null){x=D.Q()
y.Q=x
y=x}else y=x
y.h(0,z.gi6())
y=z.dx
x=y.ch
if(x==null){x=D.Q()
y.ch=x
y=x}else y=x
y.h(0,z.gfP())
z.dy=null
return z}}},jc:{"^":"da;0f,a,b,0c,0d,0e"},da:{"^":"b;",
br:["fq",function(){}]},jd:{"^":"da;a,b,0c,0d,0e"},b7:{"^":"da;0f,a,b,0c,0d,0e",
dH:function(a){var z,y
if(!J.M(this.f,a)){z=this.f
this.f=a
y=new D.I(this.b+".color",z,a,this,[V.a2])
y.b=!0
this.a.ah(y)}},
br:["bX",function(){this.fq()
this.dH(new V.a2(1,1,1))}],
sal:function(a,b){var z
if(this.c===C.d){this.c=C.i
this.br()
z=this.a
z.a=null
z.ah(null)}this.dH(b)}},jf:{"^":"b7;0ch,0f,a,b,0c,0d,0e",
ie:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.I(this.b+".refraction",y,a,this,[P.q])
z.b=!0
this.a.ah(z)}},
br:function(){this.bX()
this.ie(1)}},jg:{"^":"b7;0ch,0f,a,b,0c,0d,0e",
cg:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.I(this.b+".shininess",y,a,this,[P.q])
z.b=!0
this.a.ah(z)}},
br:function(){this.bX()
this.cg(100)}},c7:{"^":"b;"}}],["","",,T,{"^":"",dm:{"^":"cV;"},fe:{"^":"dm;"},ki:{"^":"fe;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gB:function(){var z=this.y
if(z==null){z=D.Q()
this.y=z}return z}},kj:{"^":"b;a,0b,0c,0d,0e",
jV:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
C.b.aR(z,3553,y)
C.b.bR(z,3553,10242,33071)
C.b.bR(z,3553,10243,33071)
C.b.bR(z,3553,10241,9729)
C.b.bR(z,3553,10240,9729)
C.b.aR(z,3553,null);++this.d
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
z=W.a9
W.a0(x,"load",H.l(new T.kk(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
jU:function(a){return this.jV(a,!1,!1,!1,!1)},
i8:function(a,b,c){var z,y,x,w
b=V.dY(b,2)
z=V.dY(a.width,2)
y=V.dY(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cZ(null,null)
x.width=z
x.height=y
w=H.e(C.q.f9(x,"2d"),"$isd_")
w.imageSmoothingEnabled=!1;(w&&C.D).jz(w,a,0,0,x.width,x.height)
return P.mQ(C.D.hh(w,0,0,x.width,x.height))}}},kk:{"^":"n:11;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.i8(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
C.b.aR(y,3553,this.e)
C.b.kg(y,37440,this.f?1:0)
C.b.kw(y,3553,0,6408,6408,5121,w)
if(this.r)C.b.f4(y,3553)
C.b.aR(y,3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.jA()}++x.e}}}],["","",,V,{"^":"",bs:{"^":"b;",
aU:function(a){return!0},
i:function(a){return"all"},
$isaB:1},aB:{"^":"b;"},eK:{"^":"b;0a",
sa7:function(a){this.a=H.j(a,"$isa",[V.aB],"$asa")},
aU:["fp",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x)if(z[x].aU(a))return!0
return!1}],
i:["d6",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.y)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isaB:1},aw:{"^":"eK;0a",
aU:function(a){return!this.fp(a)},
i:function(a){return"!["+this.d6(0)+"]"}},jL:{"^":"b;0a,0b",
aU:function(a){return this.a<=a&&this.b>=a},
i:function(a){var z,y
z=H.bb(this.a)
y=H.bb(this.b)
return z+".."+y},
$isaB:1,
n:{
R:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.d(P.u("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.c.H(a,0)
y=C.c.H(b,0)
x=new V.jL()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},jY:{"^":"b;0a",
sic:function(a){this.a=H.j(a,"$isG",[P.m,P.K],"$asG")},
fw:function(a){var z,y
if(a.a.length<=0)throw H.d(P.u("May not create a SetMatcher with zero characters."))
z=new H.aY(0,0,[P.m,P.K])
for(y=new H.d8(a,a.gp(a),0,[H.a6(a,"T",0)]);y.C();)z.q(0,y.d,!0)
this.sic(z)},
aU:function(a){return this.a.bw(a)},
i:function(a){return P.c6(this.a.gay(),0,null)},
$isaB:1,
n:{
w:function(a){var z=new V.jY()
z.fw(a)
return z}}},di:{"^":"b;a,b,0c,0d",
six:function(a){this.c=H.j(a,"$isa",[V.dq],"$asa")},
k:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.dq(this.a.j(0,b))
w.sa7(H.c([],[V.aB]))
w.c=!1
C.a.h(this.c,w)
return w},
jE:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.y)(z),++x){w=z[x]
if(w.aU(a))return w}return},
i:function(a){return this.b}},fk:{"^":"b;a,b,c",
i:function(a){var z,y
z=H.e_(this.b,"\n","\\n")
y=H.e_(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},dp:{"^":"b;a,b,0c",
si2:function(a){var z=P.h
this.c=H.j(a,"$isG",[z,z],"$asG")},
aH:function(a,b,c){var z,y,x
H.j(c,"$isa",[P.h],"$asa")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.y)(c),++y){x=c[y]
this.c.q(0,x,b)}},
i:function(a){return this.b}},kp:{"^":"b;0a,0b,0c",
sio:function(a){this.a=H.j(a,"$isG",[P.h,V.di],"$asG")},
sit:function(a){this.b=H.j(a,"$isG",[P.h,V.dp],"$asG")},
j:function(a,b){var z=this.a.l(0,b)
if(z==null){z=new V.di(this,b)
z.six(H.c([],[V.dq]))
z.d=null
this.a.q(0,b,z)}return z},
O:function(a){var z,y
z=this.b.l(0,a)
if(z==null){z=new V.dp(this,a)
y=P.h
z.si2(new H.aY(0,0,[y,y]))
this.b.q(0,a,z)}return z},
eU:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.fk])
y=this.c
x=[P.m]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.c.H(a,t)
r=y.jE(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.c6(w,0,null)
throw H.d(P.u("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.c6(w,0,null)
p=y.d
o=p.c.l(0,q)
u=new V.fk(o==null?p.b:o,q,t)}++t}}},
n:{
cy:function(){var z,y
z=new V.kp()
y=P.h
z.sio(new H.aY(0,0,[y,V.di]))
z.sit(new H.aY(0,0,[y,V.dp]))
z.c=null
return z}}},dq:{"^":"eK;b,0c,0a",
i:function(a){return this.b.b+": "+this.d6(0)}}}],["","",,X,{"^":"",ee:{"^":"b;",$isaJ:1},iw:{"^":"fb;0a,0b,0c,0d,0e,0f,0r,0x",
gB:function(){var z=this.x
if(z==null){z=D.Q()
this.x=z}return z}},js:{"^":"b;0a,0b,0c,0d,0e,0f",
gB:function(){var z=this.f
if(z==null){z=D.Q()
this.f=z}return z},
b0:[function(a){var z
H.e(a,"$isz")
z=this.f
if(!(z==null))z.L(a)},function(){return this.b0(null)},"kL","$1","$0","gd8",0,2,1],
saV:function(a){var z,y
if(!J.M(this.b,a)){z=this.b
if(z!=null)z.gB().K(0,this.gd8())
y=this.b
this.b=a
if(a!=null)a.gB().h(0,this.gd8())
z=new D.I("mover",y,this.b,this,[U.ai])
z.b=!0
this.b0(z)}},
$isaJ:1,
$isee:1},fb:{"^":"b;"}}],["","",,V,{"^":"",
nt:function(a){P.ko(C.V,new V.nu(a))},
aU:{"^":"b;0d",
sc5:function(a){this.d=H.j(a,"$isa",[[P.a,W.aW]],"$asa")},
bn:function(a){this.b=new P.iD(C.Y)
this.c=null
this.sc5(H.c([],[[P.a,W.aW]]))},
M:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.c([],[W.aW]))
y=a.split("\n")
for(z=y.length,x=[W.aW],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.c([],x))
t=document.createElement("div")
t.className="codePart"
H.C(u)
s=this.b.h3(u,0,u.length)
r=s==null?u:s
C.j.fi(t,H.e_(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gaz(this.d),t)}},
eK:function(a){var z,y,x,w
H.j(a,"$isa",[P.h],"$asa")
this.sc5(H.c([],[[P.a,W.aW]]))
z=C.a.k(a,"\n")
y=this.c
if(y==null){y=this.bx()
this.c=y}for(y=y.eU(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.y)(y),++w)this.bO(y[w])}},
nu:{"^":"n:51;a",
$1:function(a){H.e(a,"$isbc")
P.dZ(C.k.eT(this.a.gjK(),2)+" fps")}},
i7:{"^":"aU;a,0b,0c,0d",
bO:function(a){switch(a.a){case"Class":this.M(a.b,"#551")
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
bx:function(){var z,y,x,w
z=V.cy()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.w(new H.v("_"))
C.a.h(y.a,x)
x=V.R("a","z")
C.a.h(y.a,x)
x=V.R("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.w(new H.v("_"))
C.a.h(x.a,y)
y=V.R("0","9")
C.a.h(x.a,y)
y=V.R("a","z")
C.a.h(x.a,y)
y=V.R("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Int")
x=V.R("0","9")
C.a.h(y.a,x)
x=z.j(0,"Int").k(0,"Int")
y=V.R("0","9")
C.a.h(x.a,y)
y=z.j(0,"Int").k(0,"FloatDot")
x=V.w(new H.v("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").k(0,"Float")
y=V.R("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").k(0,"Float")
x=V.R("0","9")
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"Sym")
y=V.w(new H.v("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.j(0,"Sym").k(0,"Sym")
x=V.w(new H.v("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"OpenDoubleStr")
y=V.w(new H.v('"'))
C.a.h(x.a,y)
y=z.j(0,"OpenDoubleStr").k(0,"CloseDoubleStr")
x=V.w(new H.v('"'))
C.a.h(y.a,x)
x=z.j(0,"OpenDoubleStr").k(0,"EscDoubleStr")
y=V.w(new H.v("\\"))
C.a.h(x.a,y)
y=z.j(0,"EscDoubleStr").k(0,"OpenDoubleStr")
x=V.w(new H.v('"'))
C.a.h(y.a,x)
C.a.h(z.j(0,"OpenDoubleStr").k(0,"OpenDoubleStr").a,new V.bs())
x=z.j(0,"Start").k(0,"OpenSingleStr")
y=V.w(new H.v("'"))
C.a.h(x.a,y)
y=z.j(0,"OpenSingleStr").k(0,"CloseSingleStr")
x=V.w(new H.v("'"))
C.a.h(y.a,x)
x=z.j(0,"OpenSingleStr").k(0,"EscSingleStr")
y=V.w(new H.v("\\"))
C.a.h(x.a,y)
y=z.j(0,"EscSingleStr").k(0,"OpenSingleStr")
x=V.w(new H.v("'"))
C.a.h(y.a,x)
C.a.h(z.j(0,"OpenSingleStr").k(0,"OpenSingleStr").a,new V.bs())
x=z.j(0,"Start").k(0,"Slash")
y=V.w(new H.v("/"))
C.a.h(x.a,y)
y=z.j(0,"Slash").k(0,"Comment")
x=V.w(new H.v("/"))
C.a.h(y.a,x)
x=z.j(0,"Comment").k(0,"EndComment")
y=V.w(new H.v("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").k(0,"Comment")
x=new V.aw()
w=[V.aB]
x.sa7(H.c([],w))
C.a.h(y.a,x)
y=V.w(new H.v("\n"))
C.a.h(x.a,y)
y=z.j(0,"Slash").k(0,"MLComment")
x=V.w(new H.v("*"))
C.a.h(y.a,x)
x=z.j(0,"MLComment").k(0,"MLCStar")
y=V.w(new H.v("*"))
C.a.h(x.a,y)
y=z.j(0,"MLCStar").k(0,"MLComment")
x=new V.aw()
x.sa7(H.c([],w))
C.a.h(y.a,x)
y=V.w(new H.v("*"))
C.a.h(x.a,y)
y=z.j(0,"MLCStar").k(0,"EndComment")
x=V.w(new H.v("/"))
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"Whitespace")
y=V.w(new H.v(" \n\t"))
C.a.h(x.a,y)
y=z.j(0,"Whitespace").k(0,"Whitespace")
x=V.w(new H.v(" \n\t"))
C.a.h(y.a,x)
x=z.j(0,"Int")
x.d=x.a.O("Num")
x=z.j(0,"Float")
x.d=x.a.O("Num")
x=z.j(0,"Sym")
x.d=x.a.O("Symbol")
x=z.j(0,"CloseDoubleStr")
x.d=x.a.O("String")
x=z.j(0,"CloseSingleStr")
x.d=x.a.O("String")
x=z.j(0,"EndComment")
x.d=x.a.O("Comment")
x=z.j(0,"Whitespace")
x.d=x.a.O("Whitespace")
x=z.j(0,"Id")
y=x.a.O("Id")
x.d=y
x=[P.h]
y.aH(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.aH(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.aH(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
ix:{"^":"aU;a,0b,0c,0d",
bO:function(a){switch(a.a){case"Builtin":this.M(a.b,"#411")
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
bx:function(){var z,y,x,w
z=V.cy()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.w(new H.v("_"))
C.a.h(y.a,x)
x=V.R("a","z")
C.a.h(y.a,x)
x=V.R("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.w(new H.v("_"))
C.a.h(x.a,y)
y=V.R("0","9")
C.a.h(x.a,y)
y=V.R("a","z")
C.a.h(x.a,y)
y=V.R("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Int")
x=V.R("0","9")
C.a.h(y.a,x)
x=z.j(0,"Int").k(0,"Int")
y=V.R("0","9")
C.a.h(x.a,y)
y=z.j(0,"Int").k(0,"FloatDot")
x=V.w(new H.v("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").k(0,"Float")
y=V.R("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").k(0,"Float")
x=V.R("0","9")
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"Sym")
y=V.w(new H.v("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(x.a,y)
y=z.j(0,"Sym").k(0,"Sym")
x=V.w(new H.v("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(y.a,x)
x=z.j(0,"Start").k(0,"Slash")
y=V.w(new H.v("/"))
C.a.h(x.a,y)
y=z.j(0,"Slash").k(0,"Comment")
x=V.w(new H.v("/"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Slash").k(0,"Sym").a,new V.bs())
x=z.j(0,"Comment").k(0,"EndComment")
y=V.w(new H.v("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").k(0,"Comment")
x=new V.aw()
w=[V.aB]
x.sa7(H.c([],w))
C.a.h(y.a,x)
y=V.w(new H.v("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Preprocess")
x=V.w(new H.v("#"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").k(0,"Preprocess")
y=new V.aw()
y.sa7(H.c([],w))
C.a.h(x.a,y)
x=V.w(new H.v("\n"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").k(0,"EndPreprocess")
y=V.w(new H.v("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Whitespace")
x=V.w(new H.v(" \n\t"))
C.a.h(y.a,x)
x=z.j(0,"Whitespace").k(0,"Whitespace")
y=V.w(new H.v(" \n\t"))
C.a.h(x.a,y)
y=z.j(0,"Int")
y.d=y.a.O("Num")
y=z.j(0,"Float")
y.d=y.a.O("Num")
y=z.j(0,"Sym")
y.d=y.a.O("Symbol")
y=z.j(0,"EndComment")
y.d=y.a.O("Comment")
y=z.j(0,"EndPreprocess")
y.d=y.a.O("Preprocess")
y=z.j(0,"Whitespace")
y.d=y.a.O("Whitespace")
y=z.j(0,"Id")
x=y.a.O("Id")
y.d=x
y=[P.h]
x.aH(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.aH(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.aH(0,"Builtin",H.c(["gl_FragColor","gl_Position"],y))
return z}},
iy:{"^":"aU;a,0b,0c,0d",
bO:function(a){switch(a.a){case"Attr":this.M(a.b,"#911")
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
bx:function(){var z,y,x
z=V.cy()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.w(new H.v("_"))
C.a.h(y.a,x)
x=V.R("a","z")
C.a.h(y.a,x)
x=V.R("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.w(new H.v("_"))
C.a.h(x.a,y)
y=V.R("0","9")
C.a.h(x.a,y)
y=V.R("a","z")
C.a.h(x.a,y)
y=V.R("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Id").k(0,"Attr")
x=V.w(new H.v("="))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").k(0,"Sym")
x=V.w(new H.v("</\\-!>="))
C.a.h(y.a,x)
x=z.j(0,"Sym").k(0,"Sym")
y=V.w(new H.v("</\\-!>="))
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"OpenStr")
x=V.w(new H.v('"'))
C.a.h(y.a,x)
x=z.j(0,"OpenStr").k(0,"CloseStr")
y=V.w(new H.v('"'))
C.a.h(x.a,y)
y=z.j(0,"OpenStr").k(0,"EscStr")
x=V.w(new H.v("\\"))
C.a.h(y.a,x)
x=z.j(0,"EscStr").k(0,"OpenStr")
y=V.w(new H.v('"'))
C.a.h(x.a,y)
C.a.h(z.j(0,"OpenStr").k(0,"OpenStr").a,new V.bs())
C.a.h(z.j(0,"Start").k(0,"Other").a,new V.bs())
y=z.j(0,"Other").k(0,"Other")
x=new V.aw()
x.sa7(H.c([],[V.aB]))
C.a.h(y.a,x)
y=V.w(new H.v('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.R("a","z")
C.a.h(x.a,y)
y=V.R("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Sym")
y.d=y.a.O("Symbol")
y=z.j(0,"CloseStr")
y.d=y.a.O("String")
y=z.j(0,"Id")
x=y.a.O("Id")
y.d=x
x.aH(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
x=z.j(0,"Attr")
x.d=x.a.O("Attr")
x=z.j(0,"Other")
x.d=x.a.O("Other")
return z}},
ju:{"^":"aU;a,0b,0c,0d",
eK:function(a){H.j(a,"$isa",[P.h],"$asa")
this.sc5(H.c([],[[P.a,W.aW]]))
this.M(C.a.k(a,"\n"),"#111")},
bO:function(a){},
bx:function(){return}},
jI:{"^":"b;a,b,0c",
dP:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.l(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.fz().gcT().l(0,H.i(z))
if(y==null)if(d){c.$0()
this.dM(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.e3(this.c).h(0,v)
t=W.iG("radio")
t.checked=x
t.name=z
z=W.a9
W.a0(t,"change",H.l(new V.jJ(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
C.G.D(v,t)
s=w.createElement("span")
s.textContent=b
C.G.D(v,s)
J.e3(this.c).h(0,w.createElement("br"))},
b6:function(a,b,c){return this.dP(a,b,c,!1)},
dM:function(a){var z,y,x,w,v
z=P.fz()
y=P.h
x=P.iY(z.gcT(),y,y)
x.q(0,this.a,a)
w=z.eP(0,x)
y=window.history
v=w.i(0)
y.toString;(y&&C.X).i4(y,new P.lU([],[]).cZ(""),"",v)}},
jJ:{"^":"n:11;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dM(this.d)}}},
k3:{"^":"b;0a,0b",
fA:function(a,b){var z,y,x,w,v,u,t
z=document
y=z.body
x=z.createElement("div")
x.className="scrollTop";(y&&C.p).D(y,x)
w=z.createElement("div")
w.className="scrollPage"
C.p.D(y,w)
v=z.createElement("div")
v.className="pageCenter"
C.j.D(w,v)
if(a.length!==0){z.title=a
u=z.createElement("div")
u.className="pageTitle"
u.textContent=a
C.j.D(v,u)}t=z.createElement("div")
this.a=t
C.j.D(v,t)
this.b=null
t=W.a9
W.a0(z,"scroll",H.l(new V.k6(x),{func:1,ret:-1,args:[t]}),!1,t)},
dR:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.j(a,"$isa",[P.h],"$asa")
this.ii()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.eU(C.a.jQ(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.y)(x),++v){u=x[v]
switch(u.a){case"Bold":t=z.createElement("div")
t.className="boldPar"
t.textContent=u.b
C.j.D(y,t)
break
case"Italic":t=z.createElement("div")
t.className="italicPar"
t.textContent=u.b
C.j.D(y,t)
break
case"Code":t=z.createElement("div")
t.className="codePar"
t.textContent=u.b
C.j.D(y,t)
break
case"Link":s=u.b
if(H.hz(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.f(r,1)
q.href=H.C(r[1])
q.textContent=H.C(r[0])
C.j.D(y,q)}else{p=P.cb(C.J,s,C.m,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.i(p)
q.textContent=s
C.j.D(y,q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
C.j.D(y,t)
break}}C.j.D(this.a,y)},
f8:function(a){var z,y,x,w
z=new V.i7("dart")
z.bn("dart")
y=new V.ix("glsl")
y.bn("glsl")
x=new V.iy("html")
x.bn("html")
w=C.a.jG(H.c([z,y,x],[V.aU]),new V.k7(a))
if(w!=null)return w
z=new V.ju("plain")
z.bn("plain")
return z},
dQ:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.j(a2,"$isa",[P.h],"$asa")
z=H.c([],[P.m])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.bP(w).a5(w,"+")){C.a.q(a2,x,C.c.ar(w,1))
C.a.h(z,1)
y=!0}else if(C.c.a5(w,"-")){C.a.q(a2,x,C.c.ar(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.f8(a0)
v.eK(a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
C.j.D(t,s)
C.j.D(this.a,t)
r=P.cb(C.J,a,C.m,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.e5(null)
n.href="#"+H.i(r)
n.textContent=a
C.j.D(o,n)
C.x.D(p,o)
C.n.D(q,p)
C.o.D(s,q)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.y)(w),++e)C.x.D(f,w[e])
C.n.D(j,i)
C.n.D(j,h)
C.n.D(j,f)
C.o.D(s,j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.y)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gS(w);b.C();)C.x.D(h,b.gJ())
C.n.D(j,i)
C.n.D(j,h)
C.o.D(s,j)}},
iZ:function(a){var z,y,x,w,v,u,t
H.j(a,"$isa",[P.h],"$asa")
z=document
y=z.createElement("table")
y.id="shellTable"
x=y.style
x.width="100%"
x.padding="0px"
x.marginLeft="auto"
x.marginRight="auto"
C.j.D(this.a,y)
w=C.o.hk(y,-1)
x=H.e((w&&C.n).dv(w,-1),"$iscw").style
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
t=H.e(C.n.dv(w,-1),"$iscw")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto";(t&&C.x).D(t,u)}},
ii:function(){var z,y,x,w
if(this.b!=null)return
z=V.cy()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Bold")
x=V.w(new H.v("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Bold").k(0,"Bold")
x=new V.aw()
w=[V.aB]
x.sa7(H.c([],w))
C.a.h(y.a,x)
y=V.w(new H.v("*"))
C.a.h(x.a,y)
y=z.j(0,"Bold").k(0,"BoldEnd")
x=V.w(new H.v("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").k(0,"Italic")
x=V.w(new H.v("_"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Italic").k(0,"Italic")
x=new V.aw()
x.sa7(H.c([],w))
C.a.h(y.a,x)
y=V.w(new H.v("_"))
C.a.h(x.a,y)
y=z.j(0,"Italic").k(0,"ItalicEnd")
x=V.w(new H.v("_"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").k(0,"Code")
x=V.w(new H.v("`"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Code").k(0,"Code")
x=new V.aw()
x.sa7(H.c([],w))
C.a.h(y.a,x)
y=V.w(new H.v("`"))
C.a.h(x.a,y)
y=z.j(0,"Code").k(0,"CodeEnd")
x=V.w(new H.v("`"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Start").k(0,"LinkHead")
x=V.w(new H.v("["))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"LinkHead").k(0,"LinkTail")
x=V.w(new H.v("|"))
C.a.h(y.a,x)
x=z.j(0,"LinkHead").k(0,"LinkEnd")
y=V.w(new H.v("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkHead").k(0,"LinkHead")
y=new V.aw()
y.sa7(H.c([],w))
C.a.h(x.a,y)
x=V.w(new H.v("|]"))
C.a.h(y.a,x)
x=z.j(0,"LinkTail").k(0,"LinkEnd")
y=V.w(new H.v("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkTail").k(0,"LinkTail")
y=new V.aw()
y.sa7(H.c([],w))
C.a.h(x.a,y)
x=V.w(new H.v("|]"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Start").k(0,"Other").a,new V.bs())
x=z.j(0,"Other").k(0,"Other")
y=new V.aw()
y.sa7(H.c([],w))
C.a.h(x.a,y)
x=V.w(new H.v("*_`["))
C.a.h(y.a,x)
x=z.j(0,"BoldEnd")
x.d=x.a.O("Bold")
x=z.j(0,"ItalicEnd")
x.d=x.a.O("Italic")
x=z.j(0,"CodeEnd")
x.d=x.a.O("Code")
x=z.j(0,"LinkEnd")
x.d=x.a.O("Link")
x=z.j(0,"Other")
x.d=x.a.O("Other")
this.b=z},
n:{
k4:function(a,b){var z=new V.k3()
z.fA(a,!0)
return z}}},
k6:{"^":"n:11;a",
$1:function(a){P.fi(C.y,new V.k5(this.a))}},
k5:{"^":"n:0;a",
$0:function(){var z,y,x
z=C.k.ap(document.documentElement.scrollTop)
y=this.a.style
x=H.i(-0.01*z)+"px"
y.top=x}},
k7:{"^":"n:52;a",
$1:function(a){return H.e(a,"$isaU").a===this.a}}}],["","",,L,{"^":"",
hv:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=V.k4("Test 025",!0)
y=W.cZ(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
C.j.D(z.a,y)
x=[P.h]
z.dR(H.c(["Test of the Material Lighting shader with a textured spot light. ","Use Ctrl plus the mouse to move the light."],x))
z.iZ(H.c(["shapes"],x))
z.dR(H.c(["\xab[Back to Tests|../]"],x))
x=document
w=C.z.d0(x,"testCanvas")
if(w==null)H.r(P.u("Failed to find an element with the identifier, testCanvas."))
v=E.km(w,!0,!0,!0,!1)
u=U.d3(null)
u.h(0,U.bT(V.eP(0,0,-2.5)))
u.h(0,U.fC(!1,!0,v.r,!1,!1,!1,null,!1))
t=new V.a2(1,1,1)
s=v.f.jU("../resources/Test.png")
r=new D.cx()
r.z=0.6
r.Q=1
r.f=new V.a2(1,1,1)
r.z=1.0471975511965976
r.ch=1
r.cx=0
r.cy=0
r.a=V.eZ()
r.b=V.fJ()
r.c=V.fI()
r.d=V.kZ()
q=r.e
r.e=u
u.gB().h(0,r.gca())
p=new D.I("mover",q,r.e,r,[U.ai])
p.b=!0
r.a8(p)
if(!r.f.u(0,t)){q=r.f
r.f=t
p=new D.I("color",q,t,r,[V.a2])
p.b=!0
r.a8(p)}p=r.r
if(p!==s){if(p!=null)p.gB().K(0,r.gca())
q=r.r
r.r=s
s.gB().h(0,r.gca())
s=new D.I("texture",q,r.r,r,[T.fe])
s.b=!0
r.a8(s)}s=r.z
if(!$.p.$2(s,0.5)){q=r.z
r.z=0.5
s=1/(Math.sqrt(2)*Math.tan(r.z))
r.x=s
r.y=s*r.Q
s=new D.I("fov",q,r.z,r,[P.q])
s.b=!0
r.a8(s)}s=r.Q
if(!$.p.$2(s,1)){q=r.Q
r.Q=1
s=r.x
if(typeof s!=="number")return s.E()
r.y=s
s=new D.I("ratio",q,1,r,[P.q])
s.b=!0
r.a8(s)}s=r.ch
if(!$.p.$2(s,0.5)){q=r.ch
r.ch=0.5
s=new D.I("attenuation0",q,0.5,r,[P.q])
s.b=!0
r.a8(s)}s=r.cx
if(!$.p.$2(s,0.05)){q=r.cx
r.cx=0.05
s=new D.I("attenuation1",q,0.05,r,[P.q])
s.b=!0
r.a8(s)}s=r.cy
if(!$.p.$2(s,0.05)){q=r.cy
r.cy=0.05
s=new D.I("attenuation2",q,0.05,r,[P.q])
s.b=!0
r.a8(s)}o=O.eL()
o.dx.h(0,r)
s=o.r
s.sal(0,new V.a2(0.05,0.05,0.05))
s=o.x
s.sal(0,new V.a2(0.7,0.7,0.7))
s=o.z
s.sal(0,new V.a2(0.3,0.3,0.3))
s=o.z
if(s.c===C.d){s.c=C.i
s.bX()
s.cg(100)
p=s.a
p.a=null
p.ah(null)}s.cg(100)
n=E.d2(null,!0,null,"",null,null)
n.sab(0,F.hB(30,1,15,0.5))
m=E.d2(null,!0,null,"",null,null)
m.saV(U.bT(V.eO(3,3,3,1)))
s=F.dR(1,null,null,1)
s.cJ()
m.sab(0,s)
l=U.d3(null)
l.h(0,U.fC(!1,!1,v.r,!1,!1,!1,null,!1))
l.h(0,U.bT(V.eN(3.141592653589793)))
l.h(0,U.bT(V.eP(0,0,5)))
k=E.d2(null,!0,null,"",null,null)
s=U.d3(null)
s.h(0,U.bT(V.eO(0.1,0.1,0.1,1)))
s.h(0,u)
k.saV(s)
k.sab(0,F.dS(0,!1,!0,1,40,1))
s=O.eL()
s.f.sal(0,new V.a2(1,1,1))
k.sbf(s)
s=new M.il()
s.sh1(0,O.d0(E.at))
s.d.bm(s.ghz(),s.ghA())
s.e=null
s.f=null
s.r=null
s.x=null
j=new X.js()
j.c=1.0471975511965976
j.d=0.1
j.e=2000
j.saV(null)
p=j.c
if(!$.p.$2(p,1.0471975511965976)){q=j.c
j.c=1.0471975511965976
p=new D.I("fov",q,1.0471975511965976,j,[P.q])
p.b=!0
j.b0(p)}p=j.d
if(!$.p.$2(p,0.1)){q=j.d
j.d=0.1
p=new D.I("near",q,0.1,j,[P.q])
p.b=!0
j.b0(p)}p=j.e
if(!$.p.$2(p,2000)){q=j.e
j.e=2000
p=new D.I("far",q,2000,j,[P.q])
p.b=!0
j.b0(p)}p=s.a
if(p!==j){if(p!=null)p.gB().K(0,s.gas())
q=s.a
s.a=j
j.gB().h(0,s.gas())
p=new D.I("camera",q,s.a,s,[X.ee])
p.b=!0
s.aL(p)}i=new X.iw()
p=new V.bu(0,0,0,1)
i.a=p
i.b=!0
i.c=2000
i.d=!0
i.e=0
i.f=!1
p=$.f3
if(p==null){p=V.f2(0,0,1,1)
$.f3=p}i.r=p
p=s.b
if(p!==i){if(p!=null)p.gB().K(0,s.gas())
q=s.b
s.b=i
i.gB().h(0,s.gas())
p=new D.I("target",q,s.b,s,[X.fb])
p.b=!0
s.aL(p)}s.sbf(null)
s.sbf(o)
s.d.h(0,n)
s.d.h(0,m)
s.d.h(0,k)
s.a.saV(l)
p=v.d
if(p!==s){if(p!=null)p.gB().K(0,v.gd7())
v.d=s
s.gB().h(0,v.gd7())
v.fD()}s=new V.jI("shapes",!0)
x=C.z.d0(x,"shapes")
s.c=x
if(x==null)H.r("Failed to find shapes for RadioGroup")
s.b6(0,"Cube",new L.ng(n))
s.b6(0,"Cylinder",new L.nh(n))
s.b6(0,"Cone",new L.ni(n))
s.b6(0,"Sphere",new L.nj(n))
s.dP(0,"Toroid",new L.nk(n),!0)
s.b6(0,"Knot",new L.nl(n))
x=v.z
if(x==null){x=D.Q()
v.z=x}s={func:1,ret:-1,args:[D.z]}
p=H.l(new L.nm(z,o),s)
if(x.b==null)x.sb3(H.c([],[s]))
x=x.b;(x&&C.a).h(x,p)
V.nt(v)},
ng:{"^":"n:0;a",
$0:function(){this.a.sab(0,F.dR(1,null,null,1))}},
nh:{"^":"n:0;a",
$0:function(){this.a.sab(0,F.dS(1,!0,!0,1,40,1))}},
ni:{"^":"n:0;a",
$0:function(){this.a.sab(0,F.dS(1,!0,!1,1,40,0))}},
nj:{"^":"n:0;a",
$0:function(){this.a.sab(0,F.nv(6,null,1,6))}},
nk:{"^":"n:0;a",
$0:function(){this.a.sab(0,F.hB(30,1,15,0.5))}},
nl:{"^":"n:0;a",
$0:function(){this.a.sab(0,F.nd(120,1,2,12,0.3,3))}},
nm:{"^":"n:8;a,b",
$1:function(a){var z,y,x,w
H.e(a,"$isz")
z=this.a
y=this.b
x=y.a
w=[P.h]
z.dQ("Vertex Shader","glsl",0,H.c((x==null?null:x.c).split("\n"),w))
y=y.a
z.dQ("Fragment Shader","glsl",0,H.c((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.L=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eC.prototype
return J.eB.prototype}if(typeof a=="string")return J.bZ.prototype
if(a==null)return J.eD.prototype
if(typeof a=="boolean")return J.iK.prototype
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c_.prototype
return a}if(a instanceof P.b)return a
return J.cM(a)}
J.bo=function(a){if(typeof a=="string")return J.bZ.prototype
if(a==null)return a
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c_.prototype
return a}if(a instanceof P.b)return a
return J.cM(a)}
J.dV=function(a){if(a==null)return a
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c_.prototype
return a}if(a instanceof P.b)return a
return J.cM(a)}
J.n0=function(a){if(typeof a=="number")return J.bY.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c8.prototype
return a}
J.n1=function(a){if(typeof a=="number")return J.bY.prototype
if(typeof a=="string")return J.bZ.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c8.prototype
return a}
J.bP=function(a){if(typeof a=="string")return J.bZ.prototype
if(a==null)return a
if(!(a instanceof P.b))return J.c8.prototype
return a}
J.W=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c_.prototype
return a}if(a instanceof P.b)return a
return J.cM(a)}
J.M=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.L(a).u(a,b)}
J.hC=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.n0(a).T(a,b)}
J.e1=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.n1(a).E(a,b)}
J.hD=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nc(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bo(a).l(a,b)}
J.hE=function(a,b,c,d){return J.W(a).fU(a,b,c,d)}
J.hF=function(a,b){return J.bP(a).H(a,b)}
J.cg=function(a,b){return J.W(a).i_(a,b)}
J.cR=function(a,b,c){return J.W(a).i3(a,b,c)}
J.e2=function(a,b){return J.W(a).D(a,b)}
J.hG=function(a,b){return J.bP(a).a_(a,b)}
J.cS=function(a,b,c){return J.bo(a).jj(a,b,c)}
J.ch=function(a,b){return J.dV(a).a9(a,b)}
J.hH=function(a,b,c,d){return J.W(a).jD(a,b,c,d)}
J.hI=function(a){return J.W(a).gj8(a)}
J.e3=function(a){return J.W(a).gct(a)}
J.bQ=function(a){return J.L(a).gX(a)}
J.b4=function(a){return J.dV(a).gS(a)}
J.ar=function(a){return J.bo(a).gp(a)}
J.hJ=function(a){return J.W(a).gkh(a)}
J.hK=function(a){return J.W(a).gkv(a)}
J.cT=function(a,b){return J.W(a).b_(a,b)}
J.e4=function(a){return J.dV(a).kj(a)}
J.hL=function(a,b){return J.W(a).ko(a,b)}
J.hM=function(a,b){return J.W(a).skD(a,b)}
J.hN=function(a,b,c){return J.W(a).fh(a,b,c)}
J.hO=function(a,b,c){return J.bP(a).t(a,b,c)}
J.hP=function(a){return J.bP(a).kC(a)}
J.ae=function(a){return J.L(a).i(a)}
I.a7=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.ci.prototype
C.q=W.cY.prototype
C.D=W.d_.prototype
C.j=W.aW.prototype
C.U=W.ic.prototype
C.W=W.iz.prototype
C.X=W.iA.prototype
C.z=W.iC.prototype
C.Z=J.F.prototype
C.a=J.b6.prototype
C.a_=J.eB.prototype
C.h=J.eC.prototype
C.r=J.eD.prototype
C.k=J.bY.prototype
C.c=J.bZ.prototype
C.a6=J.c_.prototype
C.G=W.iP.prototype
C.ac=W.jm.prototype
C.M=J.jt.prototype
C.N=W.jK.prototype
C.b=P.df.prototype
C.x=W.cw.prototype
C.o=W.kf.prototype
C.n=W.kg.prototype
C.C=J.c8.prototype
C.O=W.bG.prototype
C.P=W.lc.prototype
C.R=new P.hT(!1)
C.Q=new P.hS(C.R)
C.S=new P.jr()
C.T=new P.kY()
C.l=new P.lK()
C.d=new A.ck(0,"ColorSourceType.None")
C.i=new A.ck(1,"ColorSourceType.Solid")
C.e=new A.ck(2,"ColorSourceType.Texture2D")
C.f=new A.ck(3,"ColorSourceType.TextureCube")
C.y=new P.bv(0)
C.V=new P.bv(5e6)
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
C.H=H.c(I.a7([127,2047,65535,1114111]),[P.m])
C.t=H.c(I.a7([0,0,32776,33792,1,10240,0,0]),[P.m])
C.a7=H.c(I.a7(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.u=H.c(I.a7([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.v=H.c(I.a7([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.a8=H.c(I.a7(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.I=H.c(I.a7([]),[P.h])
C.a9=H.c(I.a7([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.J=H.c(I.a7([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.w=H.c(I.a7([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.K=H.c(I.a7([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.aa=H.c(I.a7([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.L=H.c(I.a7([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.A=H.c(I.a7(["bind","if","ref","repeat","syntax"]),[P.h])
C.B=H.c(I.a7(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.ab=new H.i4(0,{},C.I,[P.h,P.h])
C.m=new P.kR(!1)
$.ay=0
$.bt=null
$.e9=null
$.dK=!1
$.hs=null
$.hl=null
$.hy=null
$.cL=null
$.cO=null
$.dW=null
$.bj=null
$.bL=null
$.bM=null
$.dL=!1
$.S=C.l
$.aH=null
$.d1=null
$.ev=null
$.eu=null
$.ep=null
$.eo=null
$.en=null
$.em=null
$.p=V.jh()
$.eQ=null
$.eY=null
$.b0=null
$.f3=null
$.fE=null
$.fH=null
$.fG=null
$.cB=null
$.cC=null
$.cD=null
$.fF=null
$.eW=null
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
I.$lazy(y,x,w)}})(["el","$get$el",function(){return H.hr("_$dart_dartClosure")},"d5","$get$d5",function(){return H.hr("_$dart_js")},"fm","$get$fm",function(){return H.aD(H.cz({
toString:function(){return"$receiver$"}}))},"fn","$get$fn",function(){return H.aD(H.cz({$method$:null,
toString:function(){return"$receiver$"}}))},"fo","$get$fo",function(){return H.aD(H.cz(null))},"fp","$get$fp",function(){return H.aD(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"ft","$get$ft",function(){return H.aD(H.cz(void 0))},"fu","$get$fu",function(){return H.aD(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fr","$get$fr",function(){return H.aD(H.fs(null))},"fq","$get$fq",function(){return H.aD(function(){try{null.$method$}catch(z){return z.message}}())},"fw","$get$fw",function(){return H.aD(H.fs(void 0))},"fv","$get$fv",function(){return H.aD(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dF","$get$dF",function(){return P.ld()},"bN","$get$bN",function(){return[]},"fD","$get$fD",function(){return P.kV()},"fQ","$get$fQ",function(){return H.jk(H.bi(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"h9","$get$h9",function(){return P.jP("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"hh","$get$hh",function(){return P.mx()},"ek","$get$ek",function(){return{}},"fU","$get$fU",function(){return P.eH(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)},"dG","$get$dG",function(){return P.eG(P.h,P.bV)},"fM","$get$fM",function(){return Z.ao(0)},"fK","$get$fK",function(){return Z.ao(511)},"aP","$get$aP",function(){return Z.ao(1)},"aO","$get$aO",function(){return Z.ao(2)},"aN","$get$aN",function(){return Z.ao(4)},"aQ","$get$aQ",function(){return Z.ao(8)},"aR","$get$aR",function(){return Z.ao(16)},"bE","$get$bE",function(){return Z.ao(32)},"bF","$get$bF",function(){return Z.ao(64)},"fL","$get$fL",function(){return Z.ao(96)},"bg","$get$bg",function(){return Z.ao(128)},"aM","$get$aM",function(){return Z.ao(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.E},{func:1,ret:-1,opt:[D.z]},{func:1,ret:-1,args:[D.z]},{func:1,ret:-1},{func:1,ret:-1,args:[W.av]},{func:1,ret:P.E,args:[F.aa]},{func:1,ret:P.E,args:[,,]},{func:1,ret:P.E,args:[F.af,P.q,P.q]},{func:1,ret:P.E,args:[D.z]},{func:1,ret:-1,args:[P.m,[P.o,E.at]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.E,args:[W.a9]},{func:1,ret:-1,args:[W.be]},{func:1,ret:-1,args:[W.a9]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:-1,args:[P.m,[P.o,U.ai]]},{func:1,ret:P.q},{func:1,ret:-1,args:[P.m,[P.o,D.a4]]},{func:1,args:[,]},{func:1,ret:P.K,args:[W.P,P.h,P.h,W.ca]},{func:1,ret:V.X,args:[P.q]},{func:1,ret:P.q,args:[P.q,P.q]},{func:1,ret:P.E,args:[{func:1,ret:-1,args:[D.z]}]},{func:1,ret:P.K,args:[W.A]},{func:1,ret:P.h,args:[P.m]},{func:1,ret:P.K,args:[W.aC]},{func:1,ret:P.K,args:[P.h]},{func:1,ret:-1,args:[W.bA]},{func:1,ret:-1,args:[P.m,[P.o,V.ah]]},{func:1,ret:P.E,args:[,]},{func:1,ret:P.q,args:[P.q]},{func:1,args:[W.a9]},{func:1,ret:P.E,args:[P.ak]},{func:1,ret:P.N,args:[,,]},{func:1,ret:P.N,args:[P.m]},{func:1,ret:P.E,args:[P.h,,]},{func:1,ret:P.K,args:[P.q,P.q]},{func:1,ret:-1,args:[W.bG]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:P.K,args:[[P.o,D.a4]]},{func:1,ret:P.E,args:[P.h]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:-1,args:[P.h,P.m]},{func:1,ret:[P.G,P.h,P.h],args:[[P.G,P.h,P.h],P.h]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:-1,args:[W.A,W.A]},{func:1,ret:P.m,args:[[P.a,P.m],P.m]},{func:1,ret:[P.aS,,],args:[,]},{func:1,ret:P.E,args:[,],opt:[,]},{func:1,ret:P.E,args:[{func:1,ret:-1}]},{func:1,ret:P.E,args:[P.bc]},{func:1,ret:P.K,args:[V.aU]},{func:1,args:[P.h]},{func:1,args:[,P.h]},{func:1,ret:W.P,args:[W.A]}]
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
if(x==y)H.ny(d||a)
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
Isolate.dT=a.dT
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
if(typeof dartMainRunner==="function")dartMainRunner(L.hv,[])
else L.hv([])})})()
//# sourceMappingURL=test.dart.js.map
