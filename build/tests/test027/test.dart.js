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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.dX"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dX"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.dX(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dY=function(){}
var dart=[["","",,H,{"^":"",o9:{"^":"a;a"}}],["","",,J,{"^":"",
e1:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cS:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.e0==null){H.nu()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.e(P.cH("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$de()]
if(v!=null)return v
v=H.nA(a)
if(v!=null)return v
if(typeof a=="function")return C.a6
y=Object.getPrototypeOf(a)
if(y==null)return C.M
if(y===Object.prototype)return C.M
if(typeof w=="function"){Object.defineProperty(w,$.$get$de(),{value:C.C,enumerable:false,writable:true,configurable:true})
return C.C}return C.C},
G:{"^":"a;",
A:function(a,b){return a===b},
gZ:function(a){return H.bG(a)},
i:["fU",function(a){return"Instance of '"+H.bd(a)+"'"}],
"%":"DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo"},
j2:{"^":"G;",
i:function(a){return String(a)},
gZ:function(a){return a?519018:218159},
$isM:1},
eG:{"^":"G;",
A:function(a,b){return null==b},
i:function(a){return"null"},
gZ:function(a){return 0},
$isH:1},
df:{"^":"G;",
gZ:function(a){return 0},
i:["fW",function(a){return String(a)}]},
jL:{"^":"df;"},
cb:{"^":"df;"},
c6:{"^":"df;",
i:function(a){var z=a[$.$get$em()]
if(z==null)return this.fW(a)
return"JavaScript function for "+H.j(J.ag(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isc_:1},
b8:{"^":"G;$ti",
h:function(a,b){H.y(b,H.t(a,0))
if(!!a.fixed$length)H.r(P.U("add"))
a.push(b)},
kG:function(a,b){var z
if(!!a.fixed$length)H.r(P.U("removeAt"))
z=a.length
if(b>=z)throw H.e(P.c9(b,null,null))
return a.splice(b,1)[0]},
L:function(a,b){var z
if(!!a.fixed$length)H.r(P.U("remove"))
for(z=0;z<a.length;++z)if(J.P(a[z],b)){a.splice(z,1)
return!0}return!1},
ae:function(a,b){var z,y
H.k(b,"$iso",[H.t(a,0)],"$aso")
if(!!a.fixed$length)H.r(P.U("addAll"))
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.z)(b),++y)a.push(b[y])},
a0:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.e(P.aM(a))}},
l:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.q(z,y,H.j(a[y]))
return z.join(b)},
kj:function(a){return this.l(a,"")},
k9:function(a,b,c,d){var z,y,x
H.y(b,d)
H.l(c,{func:1,ret:d,args:[d,H.t(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.e(P.aM(a))}return y},
k8:function(a,b,c){var z,y,x
H.l(b,{func:1,ret:P.M,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.e(P.aM(a))}throw H.e(H.ct())},
k7:function(a,b){return this.k8(a,b,null)},
ag:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
fT:function(a,b,c){if(b<0||b>a.length)throw H.e(P.a0(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.e(P.a0(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.t(a,0)])
return H.c(a.slice(b,c),[H.t(a,0)])},
gk6:function(a){if(a.length>0)return a[0]
throw H.e(H.ct())},
gaH:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.e(H.ct())},
eo:function(a,b){var z,y
H.l(b,{func:1,ret:P.M,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.e(P.aM(a))}return!1},
Y:function(a,b){var z
for(z=0;z<a.length;++z)if(J.P(a[z],b))return!0
return!1},
i:function(a){return P.dd(a,"[","]")},
gU:function(a){return new J.at(a,a.length,0,[H.t(a,0)])},
gZ:function(a){return H.bG(a)},
gp:function(a){return a.length},
sp:function(a,b){if(!!a.fixed$length)H.r(P.U("set length"))
if(b<0)throw H.e(P.a0(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(b>=a.length||b<0)throw H.e(H.bp(a,b))
return a[b]},
q:function(a,b,c){H.y(c,H.t(a,0))
if(!!a.immutable$list)H.r(P.U("indexed set"))
if(b>=a.length||b<0)throw H.e(H.bp(a,b))
a[b]=c},
$iso:1,
$isb:1,
m:{
j1:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.d0(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.a0(a,0,4294967295,"length",null))
return J.eD(new Array(a),b)},
eD:function(a,b){return J.cu(H.c(a,[b]))},
cu:function(a){H.ci(a)
a.fixed$length=Array
return a}}},
o8:{"^":"b8;$ti"},
at:{"^":"a;a,b,c,0d,$ti",
sdU:function(a){this.d=H.y(a,H.t(this,0))},
gK:function(){return this.d},
D:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.e(H.z(z))
x=this.c
if(x>=y){this.sdU(null)
return!1}this.sdU(z[x]);++this.c
return!0},
$isb1:1},
c4:{"^":"G;",
kU:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.e(P.U(""+a+".toInt()"))},
d3:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.e(P.U(""+a+".floor()"))},
a9:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.U(""+a+".round()"))},
fp:function(a,b){var z,y
if(b>20)throw H.e(P.a0(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
bB:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.e(P.a0(b,2,36,"radix",null))
z=a.toString(b)
if(C.c.a2(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.r(P.U("Unexpected toString result: "+z))
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
gZ:function(a){return a&0x1FFFFFFF},
u:function(a,b){if(typeof b!=="number")throw H.e(H.ah(b))
return a*b},
bF:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
h_:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.ee(a,b)},
ac:function(a,b){return(a|0)===a?a/b|0:this.ee(a,b)},
ee:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.e(P.U("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
b2:function(a,b){var z
if(a>0)z=this.ec(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
iU:function(a,b){if(b<0)throw H.e(H.ah(b))
return this.ec(a,b)},
ec:function(a,b){return b>31?0:a>>>b},
V:function(a,b){if(typeof b!=="number")throw H.e(H.ah(b))
return a<b},
$isq:1,
$isak:1},
eF:{"^":"c4;",$isn:1},
eE:{"^":"c4;"},
c5:{"^":"G;",
a2:function(a,b){if(b<0)throw H.e(H.bp(a,b))
if(b>=a.length)H.r(H.bp(a,b))
return a.charCodeAt(b)},
J:function(a,b){if(b>=a.length)throw H.e(H.bp(a,b))
return a.charCodeAt(b)},
H:function(a,b){H.D(b)
if(typeof b!=="string")throw H.e(P.d0(b,null,null))
return a+b},
bc:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ah(b))
c=P.b3(b,c,a.length,null,null,null)
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
ak:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.ah(c))
if(typeof c!=="number")return c.V()
if(c<0||c>a.length)throw H.e(P.a0(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
ab:function(a,b){return this.ak(a,b,0)},
w:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ah(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.V()
if(b<0)throw H.e(P.c9(b,null,null))
if(b>c)throw H.e(P.c9(b,null,null))
if(c>a.length)throw H.e(P.c9(c,null,null))
return a.substring(b,c)},
aA:function(a,b){return this.w(a,b,null)},
kX:function(a){return a.toLowerCase()},
u:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.S)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
ku:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.u(c,z)+a},
ao:function(a,b){return this.ku(a,b," ")},
f8:function(a,b,c){var z
if(c<0||c>a.length)throw H.e(P.a0(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
f7:function(a,b){return this.f8(a,b,0)},
jK:function(a,b,c){if(c>a.length)throw H.e(P.a0(c,0,a.length,null,null))
return H.hO(a,b,c)},
i:function(a){return a},
gZ:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gp:function(a){return a.length},
$isf0:1,
$ish:1}}],["","",,H,{"^":"",
cT:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
ct:function(){return new P.ds("No element")},
j0:function(){return new P.ds("Too many elements")},
v:{"^":"l1;a",
gp:function(a){return this.a.length},
k:function(a,b){return C.c.a2(this.a,b)},
$asdH:function(){return[P.n]},
$asX:function(){return[P.n]},
$aso:function(){return[P.n]},
$asb:function(){return[P.n]}},
et:{"^":"o;"},
cw:{"^":"et;$ti",
gU:function(a){return new H.dh(this,this.gp(this),0,[H.a5(this,"cw",0)])},
dr:function(a,b){return this.fV(0,H.l(b,{func:1,ret:P.M,args:[H.a5(this,"cw",0)]}))}},
dh:{"^":"a;a,b,c,0d,$ti",
sbg:function(a){this.d=H.y(a,H.t(this,0))},
gK:function(){return this.d},
D:function(){var z,y,x,w
z=this.a
y=J.br(z)
x=y.gp(z)
if(this.b!==x)throw H.e(P.aM(z))
w=this.c
if(w>=x){this.sbg(null)
return!1}this.sbg(y.ag(z,w));++this.c
return!0},
$isb1:1},
jp:{"^":"o;a,b,$ti",
gU:function(a){return new H.jq(J.b6(this.a),this.b,this.$ti)},
gp:function(a){return J.as(this.a)},
ag:function(a,b){return this.b.$1(J.ck(this.a,b))},
$aso:function(a,b){return[b]}},
jq:{"^":"b1;0a,b,c,$ti",
sbg:function(a){this.a=H.y(a,H.t(this,1))},
D:function(){var z=this.b
if(z.D()){this.sbg(this.c.$1(z.gK()))
return!0}this.sbg(null)
return!1},
gK:function(){return this.a},
$asb1:function(a,b){return[b]}},
jr:{"^":"cw;a,b,$ti",
gp:function(a){return J.as(this.a)},
ag:function(a,b){return this.b.$1(J.ck(this.a,b))},
$ascw:function(a,b){return[b]},
$aso:function(a,b){return[b]}},
dL:{"^":"o;a,b,$ti",
gU:function(a){return new H.lx(J.b6(this.a),this.b,this.$ti)}},
lx:{"^":"b1;a,b,$ti",
D:function(){var z,y
for(z=this.a,y=this.b;z.D();)if(y.$1(z.gK()))return!0
return!1},
gK:function(){return this.a.gK()}},
cs:{"^":"a;$ti"},
dH:{"^":"a;$ti",
q:function(a,b,c){H.y(c,H.a5(this,"dH",0))
throw H.e(P.U("Cannot modify an unmodifiable list"))}},
l1:{"^":"cv+dH;"}}],["","",,H,{"^":"",
il:function(){throw H.e(P.U("Cannot modify unmodifiable Map"))},
bu:function(a){var z,y
z=H.D(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
nn:function(a){return init.types[H.a2(a)]},
nx:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.N(a).$isaw},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ag(a)
if(typeof z!=="string")throw H.e(H.ah(a))
return z},
bG:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
jW:function(a,b){var z,y,x,w,v,u
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
for(v=w.length,u=0;u<v;++u)if((C.c.J(w,u)|32)>x)return}return parseInt(a,b)},
bd:function(a){return H.jN(a)+H.dU(H.b5(a),0,null)},
jN:function(a){var z,y,x,w,v,u,t,s,r
z=J.N(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.Z||!!z.$iscb){u=C.F(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.bu(w.length>1&&C.c.J(w,0)===36?C.c.aA(w,1):w)},
jO:function(){if(!!self.location)return self.location.href
return},
f5:function(a){var z,y,x,w,v
H.ci(a)
z=J.as(a)
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
jX:function(a){var z,y,x,w
z=H.c([],[P.n])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.z)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.e(H.ah(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.b2(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.e(H.ah(w))}return H.f5(z)},
f6:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.e(H.ah(x))
if(x<0)throw H.e(H.ah(x))
if(x>65535)return H.jX(a)}return H.f5(a)},
jY:function(a,b,c){var z,y,x,w
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
w=x<c?x:c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
be:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.b2(z,10))>>>0,56320|z&1023)}}throw H.e(P.a0(a,0,1114111,null,null))},
bc:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jV:function(a){var z=H.bc(a).getFullYear()+0
return z},
jT:function(a){var z=H.bc(a).getMonth()+1
return z},
jP:function(a){var z=H.bc(a).getDate()+0
return z},
jQ:function(a){var z=H.bc(a).getHours()+0
return z},
jS:function(a){var z=H.bc(a).getMinutes()+0
return z},
jU:function(a){var z=H.bc(a).getSeconds()+0
return z},
jR:function(a){var z=H.bc(a).getMilliseconds()+0
return z},
A:function(a){throw H.e(H.ah(a))},
f:function(a,b){if(a==null)J.as(a)
throw H.e(H.bp(a,b))},
bp:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aL(!0,b,"index",null)
z=H.a2(J.as(a))
if(!(b<0)){if(typeof z!=="number")return H.A(z)
y=b>=z}else y=!0
if(y)return P.b7(b,a,"index",null,z)
return P.c9(b,"index",null)},
nh:function(a,b,c){if(a>c)return new P.cz(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cz(a,c,!0,b,"end","Invalid value")
return new P.aL(!0,b,"end",null)},
ah:function(a){return new P.aL(!0,a,null,null)},
n7:function(a){if(typeof a!=="number")throw H.e(H.ah(a))
return a},
e:function(a){var z
if(a==null)a=new P.f_()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hP})
z.name=""}else z.toString=H.hP
return z},
hP:function(){return J.ag(this.dartException)},
r:function(a){throw H.e(a)},
z:function(a){throw H.e(P.aM(a))},
aa:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.o_(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.b2(x,16)&8191)===10)switch(w){case 438:return z.$1(H.dg(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eZ(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fx()
u=$.$get$fy()
t=$.$get$fz()
s=$.$get$fA()
r=$.$get$fE()
q=$.$get$fF()
p=$.$get$fC()
$.$get$fB()
o=$.$get$fH()
n=$.$get$fG()
m=v.an(y)
if(m!=null)return z.$1(H.dg(H.D(y),m))
else{m=u.an(y)
if(m!=null){m.method="call"
return z.$1(H.dg(H.D(y),m))}else{m=t.an(y)
if(m==null){m=s.an(y)
if(m==null){m=r.an(y)
if(m==null){m=q.an(y)
if(m==null){m=p.an(y)
if(m==null){m=s.an(y)
if(m==null){m=o.an(y)
if(m==null){m=n.an(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eZ(H.D(y),m))}}return z.$1(new H.l0(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.fh()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aL(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.fh()
return a},
bs:function(a){var z
if(a==null)return new H.hc(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.hc(a)},
nk:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.q(0,a[y],a[x])}return b},
nw:function(a,b,c,d,e,f){H.d(a,"$isc_")
switch(H.a2(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.u("Unsupported number of arguments for wrapped closure"))},
bo:function(a,b){var z
H.a2(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nw)
a.$identity=z
return z},
ig:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.N(d).$isb){z.$reflectionInfo=d
x=H.k4(z).r}else x=d
w=e?Object.create(new H.kv().constructor.prototype):Object.create(new H.d2(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.aC
if(typeof u!=="number")return u.H()
$.aC=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.ej(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.nn,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.ee:H.d3
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.e("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.ej(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w["call*"]=q
w.$R=z.$R
w.$D=z.$D
return v},
ic:function(a,b,c,d){var z=H.d3
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
ej:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.ie(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.ic(y,!w,z,b)
if(y===0){w=$.aC
if(typeof w!=="number")return w.H()
$.aC=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bw
if(v==null){v=H.cm("self")
$.bw=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aC
if(typeof w!=="number")return w.H()
$.aC=w+1
t+=w
w="return function("+t+"){return this."
v=$.bw
if(v==null){v=H.cm("self")
$.bw=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
id:function(a,b,c,d){var z,y
z=H.d3
y=H.ee
switch(b?-1:a){case 0:throw H.e(H.ke("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
ie:function(a,b){var z,y,x,w,v,u,t,s
z=$.bw
if(z==null){z=H.cm("self")
$.bw=z}y=$.ed
if(y==null){y=H.cm("receiver")
$.ed=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.id(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.aC
if(typeof y!=="number")return y.H()
$.aC=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.aC
if(typeof y!=="number")return y.H()
$.aC=y+1
return new Function(z+y+"}")()},
dX:function(a,b,c,d,e,f,g){return H.ig(a,b,H.a2(c),d,!!e,!!f,g)},
D:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.az(a,"String"))},
ni:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.az(a,"double"))},
nQ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.az(a,"num"))},
dV:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.az(a,"bool"))},
a2:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.az(a,"int"))},
hL:function(a,b){throw H.e(H.az(a,H.bu(H.D(b).substring(3))))},
nS:function(a,b){throw H.e(H.ib(a,H.bu(H.D(b).substring(3))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.N(a)[b])return a
H.hL(a,b)},
i:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.N(a)[b]
else z=!0
if(z)return a
H.nS(a,b)},
ci:function(a){if(a==null)return a
if(!!J.N(a).$isb)return a
throw H.e(H.az(a,"List<dynamic>"))},
hI:function(a,b){var z
if(a==null)return a
z=J.N(a)
if(!!z.$isb)return a
if(z[b])return a
H.hL(a,b)},
hE:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.a2(z)]
else return a.$S()}return},
cf:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.hE(J.N(a))
if(z==null)return!1
return H.hp(z,null,b,null)},
l:function(a,b){var z,y
if(a==null)return a
if($.dR)return a
$.dR=!0
try{if(H.cf(a,b))return a
z=H.cW(b)
y=H.az(a,z)
throw H.e(y)}finally{$.dR=!1}},
dZ:function(a,b){if(a!=null&&!H.dW(a,b))H.r(H.az(a,H.cW(b)))
return a},
hv:function(a){var z,y
z=J.N(a)
if(!!z.$ism){y=H.hE(z)
if(y!=null)return H.cW(y)
return"Closure"}return H.bd(a)},
nY:function(a){throw H.e(new P.iq(H.D(a)))},
hF:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
b5:function(a){if(a==null)return
return a.$ti},
oB:function(a,b,c){return H.bt(a["$as"+H.j(c)],H.b5(b))},
cg:function(a,b,c,d){var z
H.D(c)
H.a2(d)
z=H.bt(a["$as"+H.j(c)],H.b5(b))
return z==null?null:z[d]},
a5:function(a,b,c){var z
H.D(b)
H.a2(c)
z=H.bt(a["$as"+H.j(b)],H.b5(a))
return z==null?null:z[c]},
t:function(a,b){var z
H.a2(b)
z=H.b5(a)
return z==null?null:z[b]},
cW:function(a){return H.b4(a,null)},
b4:function(a,b){var z,y
H.k(b,"$isb",[P.h],"$asb")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bu(a[0].builtin$cls)+H.dU(a,1,b)
if(typeof a=="function")return H.bu(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a2(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.j(b[y])}if('func' in a)return H.mY(a,b)
if('futureOr' in a)return"FutureOr<"+H.b4("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mY:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.h]
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
t=C.c.H(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.b4(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b4(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b4(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b4(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.nj(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.D(z[l])
n=n+m+H.b4(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dU:function(a,b,c){var z,y,x,w,v,u
H.k(c,"$isb",[P.h],"$asb")
if(a==null)return""
z=new P.ai("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b4(u,c)}return"<"+z.i(0)+">"},
bt:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bT:function(a,b,c,d){var z,y
H.D(b)
H.ci(c)
H.D(d)
if(a==null)return!1
z=H.b5(a)
y=J.N(a)
if(y[b]==null)return!1
return H.hy(H.bt(y[d],z),null,c,null)},
k:function(a,b,c,d){H.D(b)
H.ci(c)
H.D(d)
if(a==null)return a
if(H.bT(a,b,c,d))return a
throw H.e(H.az(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bu(b.substring(3))+H.dU(c,0,null),init.mangledGlobalNames)))},
hy:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ar(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ar(a[y],b,c[y],d))return!1
return!0},
oz:function(a,b,c){return a.apply(b,H.bt(J.N(b)["$as"+H.j(c)],H.b5(b)))},
hH:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="H"||a===-1||a===-2||H.hH(z)}return!1},
dW:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="a"||b.builtin$cls==="H"||b===-1||b===-2||H.hH(b)
if(b==null||b===-1||b.builtin$cls==="a"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dW(a,"type" in b?b.type:null))return!0
if('func' in b)return H.cf(a,b)}z=J.N(a).constructor
y=H.b5(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.ar(z,null,b,null)},
y:function(a,b){if(a!=null&&!H.dW(a,b))throw H.e(H.az(a,H.cW(b)))
return a},
ar:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ar(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="H")return!0
if('func' in c)return H.hp(a,b,c,d)
if('func' in a)return c.builtin$cls==="c_"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ar("type" in a?a.type:null,b,x,d)
else if(H.ar(a,b,x,d))return!0
else{if(!('$is'+"bB" in y.prototype))return!1
w=y.prototype["$as"+"bB"]
v=H.bt(w,z?a.slice(1):null)
return H.ar(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.hy(H.bt(r,z),b,u,d)},
hp:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ar(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ar(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ar(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ar(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.nP(m,b,l,d)},
nP:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ar(c[w],d,a[w],b))return!1}return!0},
oA:function(a,b,c){Object.defineProperty(a,H.D(b),{value:c,enumerable:false,writable:true,configurable:true})},
nA:function(a){var z,y,x,w,v,u
z=H.D($.hG.$1(a))
y=$.cR[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cU[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.D($.hx.$2(a,z))
if(z!=null){y=$.cR[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cU[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cV(x)
$.cR[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cU[z]=x
return x}if(v==="-"){u=H.cV(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.hK(a,x)
if(v==="*")throw H.e(P.cH(z))
if(init.leafTags[z]===true){u=H.cV(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.hK(a,x)},
hK:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.e1(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cV:function(a){return J.e1(a,!1,null,!!a.$isaw)},
nO:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cV(z)
else return J.e1(z,c,null,null)},
nu:function(){if(!0===$.e0)return
$.e0=!0
H.nv()},
nv:function(){var z,y,x,w,v,u,t,s
$.cR=Object.create(null)
$.cU=Object.create(null)
H.nq()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hM.$1(v)
if(u!=null){t=H.nO(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
nq:function(){var z,y,x,w,v,u,t
z=C.a3()
z=H.bn(C.a0,H.bn(C.a5,H.bn(C.E,H.bn(C.E,H.bn(C.a4,H.bn(C.a1,H.bn(C.a2(C.F),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.hG=new H.nr(v)
$.hx=new H.ns(u)
$.hM=new H.nt(t)},
bn:function(a,b){return a(b)||b},
hO:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
e3:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
ik:{"^":"a;$ti",
i:function(a){return P.di(this)},
q:function(a,b,c){H.y(b,H.t(this,0))
H.y(c,H.t(this,1))
return H.il()},
$isK:1},
im:{"^":"ik;a,b,c,$ti",
gp:function(a){return this.a},
bP:function(a){if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
k:function(a,b){if(!this.bP(b))return
return this.dW(b)},
dW:function(a){return this.b[H.D(a)]},
a0:function(a,b){var z,y,x,w,v
z=H.t(this,1)
H.l(b,{func:1,ret:-1,args:[H.t(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.y(this.dW(v),z))}}},
k3:{"^":"a;a,b,c,d,e,f,r,0x",m:{
k4:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cu(z)
y=z[0]
x=z[1]
return new H.k3(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
kN:{"^":"a;a,b,c,d,e,f",
an:function(a){var z,y,x
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
aK:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.h])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.kN(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cG:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fD:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
jI:{"^":"a7;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
m:{
eZ:function(a,b){return new H.jI(a,b==null?null:b.method)}}},
j5:{"^":"a7;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
m:{
dg:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.j5(a,y,z?null:b.receiver)}}},
l0:{"^":"a7;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
o_:{"^":"m:18;a",
$1:function(a){if(!!J.N(a).$isa7)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
hc:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaR:1},
m:{"^":"a;",
i:function(a){return"Closure '"+H.bd(this).trim()+"'"},
gfA:function(){return this},
$isc_:1,
gfA:function(){return this}},
fk:{"^":"m;"},
kv:{"^":"fk;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.bu(z)+"'"}},
d2:{"^":"fk;a,b,c,d",
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.d2))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gZ:function(a){var z,y
z=this.c
if(z==null)y=H.bG(this.a)
else y=typeof z!=="object"?J.bW(z):H.bG(z)
return(y^H.bG(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.bd(z)+"'")},
m:{
d3:function(a){return a.a},
ee:function(a){return a.c},
cm:function(a){var z,y,x,w,v
z=new H.d2("self","target","receiver","name")
y=J.cu(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
kO:{"^":"a7;a",
i:function(a){return this.a},
m:{
az:function(a,b){return new H.kO("TypeError: "+H.j(P.cq(a))+": type '"+H.hv(a)+"' is not a subtype of type '"+b+"'")}}},
ia:{"^":"a7;a",
i:function(a){return this.a},
m:{
ib:function(a,b){return new H.ia("CastError: "+H.j(P.cq(a))+": type '"+H.hv(a)+"' is not a subtype of type '"+b+"'")}}},
kd:{"^":"a7;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
m:{
ke:function(a){return new H.kd(a)}}},
b2:{"^":"eM;a,0b,0c,0d,0e,0f,r,$ti",
gp:function(a){return this.a},
gki:function(a){return this.a===0},
gaG:function(){return new H.jc(this,[H.t(this,0)])},
bP:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.dR(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.dR(y,a)}else return this.kf(a)},
kf:function(a){var z=this.d
if(z==null)return!1
return this.d6(this.co(z,this.d5(a)),a)>=0},
k:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bI(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bI(w,b)
x=y==null?null:y.b
return x}else return this.kg(b)},
kg:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.co(z,this.d5(a))
x=this.d6(y,a)
if(x<0)return
return y[x].b},
q:function(a,b,c){var z,y
H.y(b,H.t(this,0))
H.y(c,H.t(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.cv()
this.b=z}this.dI(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.cv()
this.c=y}this.dI(y,b,c)}else this.kh(b,c)},
kh:function(a,b){var z,y,x,w
H.y(a,H.t(this,0))
H.y(b,H.t(this,1))
z=this.d
if(z==null){z=this.cv()
this.d=z}y=this.d5(a)
x=this.co(z,y)
if(x==null)this.cF(z,y,[this.ci(a,b)])
else{w=this.d6(x,a)
if(w>=0)x[w].b=b
else x.push(this.ci(a,b))}},
a0:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.e(P.aM(this))
z=z.c}},
dI:function(a,b,c){var z
H.y(b,H.t(this,0))
H.y(c,H.t(this,1))
z=this.bI(a,b)
if(z==null)this.cF(a,b,this.ci(b,c))
else z.b=c},
hm:function(){this.r=this.r+1&67108863},
ci:function(a,b){var z,y
z=new H.jb(H.y(a,H.t(this,0)),H.y(b,H.t(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.hm()
return z},
d5:function(a){return J.bW(a)&0x3ffffff},
d6:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.P(a[y].a,b))return y
return-1},
i:function(a){return P.di(this)},
bI:function(a,b){return a[b]},
co:function(a,b){return a[b]},
cF:function(a,b,c){a[b]=c},
hB:function(a,b){delete a[b]},
dR:function(a,b){return this.bI(a,b)!=null},
cv:function(){var z=Object.create(null)
this.cF(z,"<non-identifier-key>",z)
this.hB(z,"<non-identifier-key>")
return z},
$iseI:1},
jb:{"^":"a;a,b,0c,0d"},
jc:{"^":"et;a,$ti",
gp:function(a){return this.a.a},
gU:function(a){var z,y
z=this.a
y=new H.jd(z,z.r,this.$ti)
y.c=z.e
return y}},
jd:{"^":"a;a,b,0c,0d,$ti",
sdJ:function(a){this.d=H.y(a,H.t(this,0))},
gK:function(){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aM(z))
else{z=this.c
if(z==null){this.sdJ(null)
return!1}else{this.sdJ(z.a)
this.c=this.c.c
return!0}}},
$isb1:1},
nr:{"^":"m:18;a",
$1:function(a){return this.a(a)}},
ns:{"^":"m:46;a",
$2:function(a,b){return this.a(a,b)}},
nt:{"^":"m:48;a",
$1:function(a){return this.a(H.D(a))}},
j3:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isf0:1,
$isk5:1,
m:{
j4:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.e(P.Z("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
nj:function(a){return J.eD(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
nR:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bl:function(a){return a},
jC:function(a){return new Int8Array(a)},
aY:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.bp(b,a))},
mS:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.e(H.nh(a,b,c))
return b},
dn:{"^":"G;",$isdn:1,$iskP:1,"%":";ArrayBufferView;dm|h8|h9|jD|ha|hb|bb"},
dm:{"^":"dn;",
gp:function(a){return a.length},
$isaw:1,
$asaw:I.dY},
jD:{"^":"h9;",
k:function(a,b){H.aY(b,a,a.length)
return a[b]},
q:function(a,b,c){H.ni(c)
H.aY(b,a,a.length)
a[b]=c},
$ascs:function(){return[P.q]},
$asX:function(){return[P.q]},
$iso:1,
$aso:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]},
"%":"Float32Array"},
bb:{"^":"hb;",
q:function(a,b,c){H.a2(c)
H.aY(b,a,a.length)
a[b]=c},
$ascs:function(){return[P.n]},
$asX:function(){return[P.n]},
$iso:1,
$aso:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}},
oa:{"^":"bb;",
k:function(a,b){H.aY(b,a,a.length)
return a[b]},
"%":"Int16Array"},
ob:{"^":"bb;",
k:function(a,b){H.aY(b,a,a.length)
return a[b]},
"%":"Int32Array"},
oc:{"^":"bb;",
k:function(a,b){H.aY(b,a,a.length)
return a[b]},
"%":"Int8Array"},
od:{"^":"bb;",
k:function(a,b){H.aY(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
oe:{"^":"bb;",
gp:function(a){return a.length},
k:function(a,b){H.aY(b,a,a.length)
return a[b]},
$isom:1,
"%":"CanvasPixelArray|Uint8ClampedArray"},
eX:{"^":"bb;",
gp:function(a){return a.length},
k:function(a,b){H.aY(b,a,a.length)
return a[b]},
$iseX:1,
$isO:1,
"%":";Uint8Array"},
h8:{"^":"dm+X;"},
h9:{"^":"h8+cs;"},
ha:{"^":"dm+X;"},
hb:{"^":"ha+cs;"}}],["","",,P,{"^":"",
lz:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.n4()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bo(new P.lB(z),1)).observe(y,{childList:true})
return new P.lA(z,y,x)}else if(self.setImmediate!=null)return P.n5()
return P.n6()},
oq:[function(a){self.scheduleImmediate(H.bo(new P.lC(H.l(a,{func:1,ret:-1})),0))},"$1","n4",4,0,11],
or:[function(a){self.setImmediate(H.bo(new P.lD(H.l(a,{func:1,ret:-1})),0))},"$1","n5",4,0,11],
os:[function(a){P.dv(C.y,H.l(a,{func:1,ret:-1}))},"$1","n6",4,0,11],
dv:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.h.ac(a.a,1000)
return P.mk(z<0?0:z,b)},
fu:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.bf]})
z=C.h.ac(a.a,1000)
return P.ml(z<0?0:z,b)},
n0:function(a,b){if(H.cf(a,{func:1,args:[P.a,P.aR]}))return H.l(a,{func:1,ret:null,args:[P.a,P.aR]})
if(H.cf(a,{func:1,args:[P.a]}))return H.l(a,{func:1,ret:null,args:[P.a]})
throw H.e(P.d0(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
n_:function(){var z,y
for(;z=$.bm,z!=null;){$.bR=null
y=z.b
$.bm=y
if(y==null)$.bQ=null
z.a.$0()}},
oy:[function(){$.dS=!0
try{P.n_()}finally{$.bR=null
$.dS=!1
if($.bm!=null)$.$get$dM().$1(P.hz())}},"$0","hz",0,0,3],
hu:function(a){var z=new P.h_(H.l(a,{func:1,ret:-1}))
if($.bm==null){$.bQ=z
$.bm=z
if(!$.dS)$.$get$dM().$1(P.hz())}else{$.bQ.b=z
$.bQ=z}},
n3:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.bm
if(z==null){P.hu(a)
$.bR=$.bQ
return}y=new P.h_(a)
x=$.bR
if(x==null){y.b=z
$.bR=y
$.bm=y}else{y.b=x.b
x.b=y
$.bR=y
if(y.b==null)$.bQ=y}},
nT:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.S
if(C.l===y){P.cP(null,null,C.l,a)
return}y.toString
P.cP(null,null,y,H.l(y.cN(a),z))},
ft:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.S
if(y===C.l){y.toString
return P.dv(a,b)}return P.dv(a,H.l(y.cN(b),z))},
kK:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bf]}
H.l(b,z)
y=$.S
if(y===C.l){y.toString
return P.fu(a,b)}x=y.es(b,P.bf)
$.S.toString
return P.fu(a,H.l(x,z))},
cO:function(a,b,c,d,e){var z={}
z.a=d
P.n3(new P.n1(z,e))},
hq:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.S
if(y===c)return d.$0()
$.S=c
z=y
try{y=d.$0()
return y}finally{$.S=z}},
hr:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.y(e,g)
y=$.S
if(y===c)return d.$1(e)
$.S=c
z=y
try{y=d.$1(e)
return y}finally{$.S=z}},
n2:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.y(e,h)
H.y(f,i)
y=$.S
if(y===c)return d.$2(e,f)
$.S=c
z=y
try{y=d.$2(e,f)
return y}finally{$.S=z}},
cP:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.l!==c
if(z)d=!(!z||!1)?c.cN(d):c.jF(d,-1)
P.hu(d)},
lB:{"^":"m:25;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
lA:{"^":"m:32;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
lC:{"^":"m:0;a",
$0:function(){this.a.$0()}},
lD:{"^":"m:0;a",
$0:function(){this.a.$0()}},
he:{"^":"a;a,0b,c",
hj:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bo(new P.mn(this,b),0),a)
else throw H.e(P.U("`setTimeout()` not found."))},
hk:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bo(new P.mm(this,a,Date.now(),b),0),a)
else throw H.e(P.U("Periodic timer."))},
$isbf:1,
m:{
mk:function(a,b){var z=new P.he(!0,0)
z.hj(a,b)
return z},
ml:function(a,b){var z=new P.he(!1,0)
z.hk(a,b)
return z}}},
mn:{"^":"m:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
mm:{"^":"m:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.h_(w,x)}z.c=y
this.d.$1(z)}},
bk:{"^":"a;0a,b,c,d,e,$ti",
kn:function(a){if(this.c!==6)return!0
return this.b.b.dl(H.l(this.d,{func:1,ret:P.M,args:[P.a]}),a.a,P.M,P.a)},
ke:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.t(this,1)}
w=this.b.b
if(H.cf(z,{func:1,args:[P.a,P.aR]}))return H.dZ(w.kO(z,a.a,a.b,null,y,P.aR),x)
else return H.dZ(w.dl(H.l(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aX:{"^":"a;ed:a<,b,0iI:c<,$ti",
fo:function(a,b,c){var z,y,x,w
z=H.t(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.S
if(y!==C.l){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.n0(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aX(0,$.S,[c])
w=b==null?1:3
this.dL(new P.bk(x,w,a,b,[z,c]))
return x},
kT:function(a,b){return this.fo(a,null,b)},
dL:function(a){var z,y
z=this.a
if(z<=1){a.a=H.d(this.c,"$isbk")
this.c=a}else{if(z===2){y=H.d(this.c,"$isaX")
z=y.a
if(z<4){y.dL(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cP(null,null,z,H.l(new P.lM(this,a),{func:1,ret:-1}))}},
e9:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.d(this.c,"$isbk")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.d(this.c,"$isaX")
y=u.a
if(y<4){u.e9(a)
return}this.a=y
this.c=u.c}z.a=this.bK(a)
y=this.b
y.toString
P.cP(null,null,y,H.l(new P.lR(z,this),{func:1,ret:-1}))}},
cB:function(){var z=H.d(this.c,"$isbk")
this.c=null
return this.bK(z)},
bK:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
dN:function(a){var z,y,x
z=H.t(this,0)
H.dZ(a,{futureOr:1,type:z})
y=this.$ti
if(H.bT(a,"$isbB",y,"$asbB"))if(H.bT(a,"$isaX",y,null))P.h3(a,this)
else P.lN(a,this)
else{x=this.cB()
H.y(a,z)
this.a=4
this.c=a
P.bM(this,x)}},
dO:function(a,b){var z
H.d(b,"$isaR")
z=this.cB()
this.a=8
this.c=new P.al(a,b)
P.bM(this,z)},
$isbB:1,
m:{
lN:function(a,b){var z,y,x
b.a=1
try{a.fo(new P.lO(b),new P.lP(b),null)}catch(x){z=H.aa(x)
y=H.bs(x)
P.nT(new P.lQ(b,z,y))}},
h3:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.d(a.c,"$isaX")
if(z>=4){y=b.cB()
b.a=a.a
b.c=a.c
P.bM(b,y)}else{y=H.d(b.c,"$isbk")
b.a=2
b.c=a
a.e9(y)}},
bM:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.d(y.c,"$isal")
y=y.b
u=v.a
t=v.b
y.toString
P.cO(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bM(z.a,b)}y=z.a
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
if(p){H.d(r,"$isal")
y=y.b
u=r.a
t=r.b
y.toString
P.cO(null,null,y,u,t)
return}o=$.S
if(o==null?q!=null:o!==q)$.S=q
else o=null
y=b.c
if(y===8)new P.lU(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.lT(x,b,r).$0()}else if((y&2)!==0)new P.lS(z,x,b).$0()
if(o!=null)$.S=o
y=x.b
if(!!J.N(y).$isbB){if(y.a>=4){n=H.d(t.c,"$isbk")
t.c=null
b=t.bK(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.h3(y,t)
return}}m=b.b
n=H.d(m.c,"$isbk")
m.c=null
b=m.bK(n)
y=x.a
u=x.b
if(!y){H.y(u,H.t(m,0))
m.a=4
m.c=u}else{H.d(u,"$isal")
m.a=8
m.c=u}z.a=m
y=m}}}},
lM:{"^":"m:0;a,b",
$0:function(){P.bM(this.a,this.b)}},
lR:{"^":"m:0;a,b",
$0:function(){P.bM(this.b,this.a.a)}},
lO:{"^":"m:25;a",
$1:function(a){var z=this.a
z.a=0
z.dN(a)}},
lP:{"^":"m:34;a",
$2:function(a,b){this.a.dO(a,H.d(b,"$isaR"))},
$1:function(a){return this.$2(a,null)}},
lQ:{"^":"m:0;a,b,c",
$0:function(){this.a.dO(this.b,this.c)}},
lU:{"^":"m:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.fl(H.l(w.d,{func:1}),null)}catch(v){y=H.aa(v)
x=H.bs(v)
if(this.d){w=H.d(this.a.a.c,"$isal").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.d(this.a.a.c,"$isal")
else u.b=new P.al(y,x)
u.a=!0
return}if(!!J.N(z).$isbB){if(z instanceof P.aX&&z.ged()>=4){if(z.ged()===8){w=this.b
w.b=H.d(z.giI(),"$isal")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.kT(new P.lV(t),null)
w.a=!1}}},
lV:{"^":"m:35;a",
$1:function(a){return this.a}},
lT:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.t(x,0)
v=H.y(this.c,w)
u=H.t(x,1)
this.a.b=x.b.b.dl(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.aa(t)
y=H.bs(t)
x=this.a
x.b=new P.al(z,y)
x.a=!0}}},
lS:{"^":"m:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.d(this.a.a.c,"$isal")
w=this.c
if(w.kn(z)&&w.e!=null){v=this.b
v.b=w.ke(z)
v.a=!1}}catch(u){y=H.aa(u)
x=H.bs(u)
w=H.d(this.a.a.c,"$isal")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.al(y,x)
s.a=!0}}},
h_:{"^":"a;a,0b"},
kw:{"^":"a;$ti",
gp:function(a){var z,y,x,w
z={}
y=new P.aX(0,$.S,[P.n])
z.a=0
x=H.t(this,0)
w=H.l(new P.ky(z,this),{func:1,ret:-1,args:[x]})
H.l(new P.kz(z,y),{func:1,ret:-1})
W.a1(this.a,this.b,w,!1,x)
return y}},
ky:{"^":"m;a,b",
$1:function(a){H.y(a,H.t(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.H,args:[H.t(this.b,0)]}}},
kz:{"^":"m:0;a,b",
$0:function(){this.b.dN(this.a.a)}},
dt:{"^":"a;$ti"},
kx:{"^":"a;"},
bf:{"^":"a;"},
al:{"^":"a;a,b",
i:function(a){return H.j(this.a)},
$isa7:1},
mO:{"^":"a;",$isop:1},
n1:{"^":"m:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.f_()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.e(z)
x=H.e(z)
x.stack=y.i(0)
throw x}},
m5:{"^":"mO;",
kP:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.l===$.S){a.$0()
return}P.hq(null,null,this,a,-1)}catch(x){z=H.aa(x)
y=H.bs(x)
P.cO(null,null,this,z,H.d(y,"$isaR"))}},
kQ:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.y(b,c)
try{if(C.l===$.S){a.$1(b)
return}P.hr(null,null,this,a,b,-1,c)}catch(x){z=H.aa(x)
y=H.bs(x)
P.cO(null,null,this,z,H.d(y,"$isaR"))}},
jF:function(a,b){return new P.m7(this,H.l(a,{func:1,ret:b}),b)},
cN:function(a){return new P.m6(this,H.l(a,{func:1,ret:-1}))},
es:function(a,b){return new P.m8(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
fl:function(a,b){H.l(a,{func:1,ret:b})
if($.S===C.l)return a.$0()
return P.hq(null,null,this,a,b)},
dl:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.y(b,d)
if($.S===C.l)return a.$1(b)
return P.hr(null,null,this,a,b,c,d)},
kO:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.y(b,e)
H.y(c,f)
if($.S===C.l)return a.$2(b,c)
return P.n2(null,null,this,a,b,c,d,e,f)}},
m7:{"^":"m;a,b,c",
$0:function(){return this.a.fl(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
m6:{"^":"m:3;a,b",
$0:function(){return this.a.kP(this.b)}},
m8:{"^":"m;a,b,c",
$1:function(a){var z=this.c
return this.a.kQ(this.b,H.y(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
je:function(a,b,c,d,e){return new H.b2(0,0,[d,e])},
jf:function(a,b,c){H.ci(a)
return H.k(H.nk(a,new H.b2(0,0,[b,c])),"$iseI",[b,c],"$aseI")},
eJ:function(a,b){return new H.b2(0,0,[a,b])},
c7:function(a,b,c,d){return new P.m_(0,0,[d])},
j_:function(a,b,c){var z,y
if(P.dT(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bS()
C.a.h(y,a)
try{P.mZ(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.fj(b,H.hI(z,"$iso"),", ")+c
return y.charCodeAt(0)==0?y:y},
dd:function(a,b,c){var z,y,x
if(P.dT(a))return b+"..."+c
z=new P.ai(b)
y=$.$get$bS()
C.a.h(y,a)
try{x=z
x.a=P.fj(x.gaY(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gaY()+c
y=z.gaY()
return y.charCodeAt(0)==0?y:y},
dT:function(a){var z,y
for(z=0;y=$.$get$bS(),z<y.length;++z)if(a===y[z])return!0
return!1},
mZ:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gU(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.D())return
w=H.j(z.gK())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.D()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gK();++x
if(!z.D()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gK();++x
for(;z.D();t=s,s=r){r=z.gK();++x
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
jg:function(a,b,c){var z=P.je(null,null,null,b,c)
a.a0(0,new P.jh(z,b,c))
return z},
eK:function(a,b){var z,y,x
z=P.c7(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.z)(a),++x)z.h(0,H.y(a[x],b))
return z},
di:function(a){var z,y,x
z={}
if(P.dT(a))return"{...}"
y=new P.ai("")
try{C.a.h($.$get$bS(),a)
x=y
x.a=x.gaY()+"{"
z.a=!0
a.a0(0,new P.jn(z,y))
z=y
z.a=z.gaY()+"}"}finally{z=$.$get$bS()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gaY()
return z.charCodeAt(0)==0?z:z},
m_:{"^":"lW;a,0b,0c,0d,0e,0f,r,$ti",
gU:function(a){var z=new P.h7(this,this.r,this.$ti)
z.c=this.e
return z},
gp:function(a){return this.a},
Y:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.d(z[b],"$iscL")!=null}else{y=this.hx(b)
return y}},
hx:function(a){var z=this.d
if(z==null)return!1
return this.cm(this.dX(z,a),a)>=0},
h:function(a,b){var z,y
H.y(b,H.t(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dO()
this.b=z}return this.dK(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dO()
this.c=y}return this.dK(y,b)}else return this.hn(b)},
hn:function(a){var z,y,x
H.y(a,H.t(this,0))
z=this.d
if(z==null){z=P.dO()
this.d=z}y=this.dP(a)
x=z[y]
if(x==null)z[y]=[this.cw(a)]
else{if(this.cm(x,a)>=0)return!1
x.push(this.cw(a))}return!0},
L:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.iz(this.c,b)
else return this.iw(b)},
iw:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.dX(z,a)
x=this.cm(y,a)
if(x<0)return!1
this.ef(y.splice(x,1)[0])
return!0},
dK:function(a,b){H.y(b,H.t(this,0))
if(H.d(a[b],"$iscL")!=null)return!1
a[b]=this.cw(b)
return!0},
iz:function(a,b){var z
if(a==null)return!1
z=H.d(a[b],"$iscL")
if(z==null)return!1
this.ef(z)
delete a[b]
return!0},
e2:function(){this.r=this.r+1&67108863},
cw:function(a){var z,y
z=new P.cL(H.y(a,H.t(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.e2()
return z},
ef:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.e2()},
dP:function(a){return J.bW(a)&0x3ffffff},
dX:function(a,b){return a[this.dP(b)]},
cm:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.P(a[y].a,b))return y
return-1},
m:{
dO:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cL:{"^":"a;a,0b,0c"},
h7:{"^":"a;a,b,0c,0d,$ti",
sdM:function(a){this.d=H.y(a,H.t(this,0))},
gK:function(){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aM(z))
else{z=this.c
if(z==null){this.sdM(null)
return!1}else{this.sdM(H.y(z.a,H.t(this,0)))
this.c=this.c.b
return!0}}},
$isb1:1,
m:{
m0:function(a,b,c){var z=new P.h7(a,b,[c])
z.c=a.e
return z}}},
lW:{"^":"kf;"},
jh:{"^":"m:6;a,b,c",
$2:function(a,b){this.a.q(0,H.y(a,this.b),H.y(b,this.c))}},
cv:{"^":"m1;",$iso:1,$isb:1},
X:{"^":"a;$ti",
gU:function(a){return new H.dh(a,this.gp(a),0,[H.cg(this,a,"X",0)])},
ag:function(a,b){return this.k(a,b)},
kW:function(a,b){var z,y
z=H.c([],[H.cg(this,a,"X",0)])
C.a.sp(z,this.gp(a))
for(y=0;y<this.gp(a);++y)C.a.q(z,y,this.k(a,y))
return z},
kV:function(a){return this.kW(a,!0)},
k0:function(a,b,c,d){var z
H.y(d,H.cg(this,a,"X",0))
P.b3(b,c,this.gp(a),null,null,null)
for(z=b;z<c;++z)this.q(a,z,d)},
i:function(a){return P.dd(a,"[","]")}},
eM:{"^":"cx;"},
jn:{"^":"m:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
cx:{"^":"a;$ti",
a0:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.a5(this,"cx",0),H.a5(this,"cx",1)]})
for(z=J.b6(this.gaG());z.D();){y=z.gK()
b.$2(y,this.k(0,y))}},
gp:function(a){return J.as(this.gaG())},
i:function(a){return P.di(this)},
$isK:1},
mq:{"^":"a;$ti",
q:function(a,b,c){H.y(b,H.t(this,0))
H.y(c,H.t(this,1))
throw H.e(P.U("Cannot modify unmodifiable map"))}},
jo:{"^":"a;$ti",
k:function(a,b){return this.a.k(0,b)},
q:function(a,b,c){this.a.q(0,H.y(b,H.t(this,0)),H.y(c,H.t(this,1)))},
a0:function(a,b){this.a.a0(0,H.l(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]}))},
gp:function(a){var z=this.a
return z.gp(z)},
i:function(a){return J.ag(this.a)},
$isK:1},
fI:{"^":"mr;a,$ti"},
kh:{"^":"a;$ti",
ae:function(a,b){var z
for(z=J.b6(H.k(b,"$iso",this.$ti,"$aso"));z.D();)this.h(0,z.gK())},
i:function(a){return P.dd(this,"{","}")},
ag:function(a,b){var z,y,x
if(b<0)H.r(P.a0(b,0,null,"index",null))
for(z=P.m0(this,this.r,H.t(this,0)),y=0;z.D();){x=z.d
if(b===y)return x;++y}throw H.e(P.b7(b,this,"index",null,y))},
$iso:1,
$isfd:1},
kf:{"^":"kh;"},
m1:{"^":"a+X;"},
mr:{"^":"jo+mq;$ti"}}],["","",,P,{"^":"",i7:{"^":"bY;a",
kp:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
c=P.b3(b,c,a.length,null,null,null)
z=$.$get$h1()
for(y=b,x=y,w=null,v=-1,u=-1,t=0;y<c;y=s){s=y+1
r=C.c.J(a,y)
if(r===37){q=s+2
if(q<=c){p=H.cT(C.c.J(a,s))
o=H.cT(C.c.J(a,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.f(z,n)
m=z[n]
if(m>=0){n=C.c.a2("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.ai("")
l=w.a+=C.c.w(a,x,y)
w.a=l+H.be(r)
x=s
continue}}throw H.e(P.Z("Invalid base64 data",a,y))}if(w!=null){l=w.a+=C.c.w(a,x,c)
k=l.length
if(v>=0)P.eb(a,u,c,v,t,k)
else{j=C.h.bF(k-1,4)+1
if(j===1)throw H.e(P.Z("Invalid base64 encoding length ",a,c))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.c.bc(a,b,c,l.charCodeAt(0)==0?l:l)}i=c-b
if(v>=0)P.eb(a,u,c,v,t,i)
else{j=C.h.bF(i,4)
if(j===1)throw H.e(P.Z("Invalid base64 encoding length ",a,c))
if(j>1)a=C.c.bc(a,c,c,j===2?"==":"=")}return a},
$asbY:function(){return[[P.b,P.n],P.h]},
m:{
eb:function(a,b,c,d,e,f){if(C.h.bF(f,4)!==0)throw H.e(P.Z("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.e(P.Z("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.e(P.Z("Invalid base64 padding, more than two '=' characters",a,b))}}},i8:{"^":"b_;a",
$asb_:function(){return[[P.b,P.n],P.h]}},bY:{"^":"a;$ti"},b_:{"^":"kx;$ti"},iD:{"^":"bY;",
$asbY:function(){return[P.h,[P.b,P.n]]}},iW:{"^":"a;a,b,c,d,e",
i:function(a){return this.a}},iV:{"^":"b_;a",
hy:function(a,b,c){var z,y,x,w,v,u
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
default:u=null}if(u!=null){if(v==null)v=new P.ai("")
if(w>b)v.a+=C.c.w(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.i2(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asb_:function(){return[P.h,P.h]}},le:{"^":"iD;a",
gk_:function(){return C.T}},ll:{"^":"b_;",
bp:function(a,b,c){var z,y,x,w
z=a.length
P.b3(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.mM(0,0,x)
if(w.hJ(a,b,z)!==z)w.eh(J.hV(a,z-1),0)
return new Uint8Array(x.subarray(0,H.mS(0,w.b,x.length)))},
cT:function(a){return this.bp(a,0,null)},
$asb_:function(){return[P.h,[P.b,P.n]]}},mM:{"^":"a;a,b,c",
eh:function(a,b){var z,y,x,w,v
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
hJ:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.c.a2(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.c.J(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.eh(w,C.c.J(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},lf:{"^":"b_;a",
bp:function(a,b,c){var z,y,x,w,v
H.k(a,"$isb",[P.n],"$asb")
z=P.lg(!1,a,b,c)
if(z!=null)return z
y=J.as(a)
P.b3(b,c,y,null,null,null)
x=new P.ai("")
w=new P.mJ(!1,x,!0,0,0,0)
w.bp(a,b,y)
if(w.e>0){H.r(P.Z("Unfinished UTF-8 octet sequence",a,y))
x.a+=H.be(65533)
w.d=0
w.e=0
w.f=0}v=x.a
return v.charCodeAt(0)==0?v:v},
cT:function(a){return this.bp(a,0,null)},
$asb_:function(){return[[P.b,P.n],P.h]},
m:{
lg:function(a,b,c,d){H.k(b,"$isb",[P.n],"$asb")
if(b instanceof Uint8Array)return P.lh(!1,b,c,d)
return},
lh:function(a,b,c,d){var z,y,x
z=$.$get$fN()
if(z==null)return
y=0===c
if(y&&!0)return P.dJ(z,b)
x=b.length
d=P.b3(c,d,x,null,null,null)
if(y&&d===x)return P.dJ(z,b)
return P.dJ(z,b.subarray(c,d))},
dJ:function(a,b){if(P.lj(b))return
return P.lk(a,b)},
lk:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.aa(y)}return},
lj:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
li:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.aa(y)}return}}},mJ:{"^":"a;a,b,c,d,e,f",
bp:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.k(a,"$isb",[P.n],"$asb")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.mL(c)
v=new P.mK(this,b,c,a)
$label0$0:for(u=J.br(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.k(a,s)
if(typeof r!=="number")return r.ca()
if((r&192)!==128){q=P.Z("Bad UTF-8 encoding 0x"+C.h.bB(r,16),a,s)
throw H.e(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.f(C.H,q)
if(z<=C.H[q]){q=P.Z("Overlong encoding of 0x"+C.h.bB(z,16),a,s-x-1)
throw H.e(q)}if(z>1114111){q=P.Z("Character outside valid Unicode range: 0x"+C.h.bB(z,16),a,s-x-1)
throw H.e(q)}if(!this.c||z!==65279)t.a+=H.be(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.dz()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.k(a,o)
if(typeof r!=="number")return r.V()
if(r<0){m=P.Z("Negative UTF-8 code unit: -0x"+C.h.bB(-r,16),a,n-1)
throw H.e(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.Z("Bad UTF-8 encoding 0x"+C.h.bB(r,16),a,n-1)
throw H.e(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},mL:{"^":"m:43;a",
$2:function(a,b){var z,y,x,w
H.k(a,"$isb",[P.n],"$asb")
z=this.a
for(y=J.br(a),x=b;x<z;++x){w=y.k(a,x)
if(typeof w!=="number")return w.ca()
if((w&127)!==w)return x-b}return z-b}},mK:{"^":"m:45;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.ca(this.d,a,b)}}}],["","",,P,{"^":"",
ch:function(a,b,c){var z
H.l(b,{func:1,ret:P.n,args:[P.h]})
z=H.jW(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.e(P.Z(a,null,null))},
iF:function(a){if(a instanceof H.m)return a.i(0)
return"Instance of '"+H.bd(a)+"'"},
ji:function(a,b,c,d){var z,y
H.y(b,d)
z=J.j1(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.q(z,y,b)
return H.k(z,"$isb",[d],"$asb")},
jj:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gU(a);x.D();)C.a.h(y,H.y(x.gK(),c))
if(b)return y
return H.k(J.cu(y),"$isb",z,"$asb")},
ca:function(a,b,c){var z,y
z=P.n
H.k(a,"$iso",[z],"$aso")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.k(a,"$isb8",[z],"$asb8")
y=a.length
c=P.b3(b,c,y,null,null,null)
return H.f6(b>0||c<y?C.a.fT(a,b,c):a)}if(!!J.N(a).$iseX)return H.jY(a,b,P.b3(b,c,a.length,null,null,null))
return P.kA(a,b,c)},
kA:function(a,b,c){var z,y,x,w
H.k(a,"$iso",[P.n],"$aso")
if(b<0)throw H.e(P.a0(b,0,J.as(a),null,null))
z=c==null
if(!z&&c<b)throw H.e(P.a0(c,b,J.as(a),null,null))
y=J.b6(a)
for(x=0;x<b;++x)if(!y.D())throw H.e(P.a0(b,0,x,null,null))
w=[]
if(z)for(;y.D();)w.push(y.gK())
else for(x=b;x<c;++x){if(!y.D())throw H.e(P.a0(c,b,x,null,null))
w.push(y.gK())}return H.f6(w)},
k6:function(a,b,c){return new H.j3(a,H.j4(a,!1,!0,!1))},
fK:function(){var z=H.jO()
if(z!=null)return P.l6(z,0,null)
throw H.e(P.U("'Uri.base' is not supported"))},
cq:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ag(a)
if(typeof a==="string")return JSON.stringify(a)
return P.iF(a)},
u:function(a){return new P.h2(a)},
jk:function(a,b,c,d){var z,y
H.l(b,{func:1,ret:d,args:[P.n]})
z=H.c([],[d])
C.a.sp(z,a)
for(y=0;y<a;++y)C.a.q(z,y,b.$1(y))
return z},
e2:function(a){H.nR(a)},
l6:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.c.J(a,b+4)^58)*3|C.c.J(a,b)^100|C.c.J(a,b+1)^97|C.c.J(a,b+2)^116|C.c.J(a,b+3)^97)>>>0
if(y===0)return P.fJ(b>0||c<c?C.c.w(a,b,c):a,5,null).gfu()
else if(y===32)return P.fJ(C.c.w(a,z,c),0,null).gfu()}x=new Array(8)
x.fixed$length=Array
w=H.c(x,[P.n])
C.a.q(w,0,0)
x=b-1
C.a.q(w,1,x)
C.a.q(w,2,x)
C.a.q(w,7,x)
C.a.q(w,3,b)
C.a.q(w,4,b)
C.a.q(w,5,c)
C.a.q(w,6,c)
if(P.hs(a,b,c,0,w)>=14)C.a.q(w,7,c)
v=w[1]
if(typeof v!=="number")return v.l_()
if(v>=b)if(P.hs(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.H()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.V()
if(typeof r!=="number")return H.A(r)
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
p=!1}else{if(!(r<c&&r===s+2&&C.c.ak(a,"..",s)))n=r>s+2&&C.c.ak(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.c.ak(a,"file",b)){if(u<=b){if(!C.c.ak(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.c.w(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.c.bc(a,s,r,"/");++r;++q;++c}else{a=C.c.w(a,b,s)+"/"+C.c.w(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.c.ak(a,"http",b)){if(x&&t+3===s&&C.c.ak(a,"80",t+1))if(b===0&&!0){a=C.c.bc(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.c.w(a,b,t)+C.c.w(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.c.ak(a,"https",b)){if(x&&t+4===s&&C.c.ak(a,"443",t+1))if(b===0&&!0){a=C.c.bc(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.c.w(a,b,t)+C.c.w(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.c.w(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.md(a,v,u,t,s,r,q,o)}return P.ms(a,b,c,v,u,t,s,r,q,o)},
fM:function(a,b){var z=P.h
return C.a.k9(H.c(a.split("&"),[z]),P.eJ(z,z),new P.l9(b),[P.K,P.h,P.h])},
l4:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.l5(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.c.a2(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.ch(C.c.w(a,v,w),null,null)
if(typeof s!=="number")return s.dz()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.f(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.ch(C.c.w(a,v,c),null,null)
if(typeof s!=="number")return s.dz()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.f(y,u)
y[u]=s
return y},
fL:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.l7(a)
y=new P.l8(z,a)
if(a.length<2)z.$1("address is too short")
x=H.c([],[P.n])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.c.a2(a,w)
if(s===58){if(w===b){++w
if(C.c.a2(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaH(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.l4(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.f(o,l)
o[l]=0
i=l+1
if(i>=n)return H.f(o,i)
o[i]=0
l+=2}else{i=C.h.b2(k,8)
if(l<0||l>=n)return H.f(o,l)
o[l]=i
i=l+1
if(i>=n)return H.f(o,i)
o[i]=k&255
l+=2}}return o},
mT:function(){var z,y,x,w,v
z=P.jk(22,new P.mV(),!0,P.O)
y=new P.mU(z)
x=new P.mW()
w=new P.mX()
v=H.d(y.$2(0,225),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(14,225),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(15,225),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(1,225),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(2,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(3,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(4,229),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(5,229),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(6,231),"$isO")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(7,231),"$isO")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.d(y.$2(8,8),"$isO"),"]",5)
v=H.d(y.$2(9,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(16,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(17,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(10,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(18,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(19,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(11,235),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.d(y.$2(12,236),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.d(y.$2(13,237),"$isO")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.d(y.$2(20,245),"$isO"),"az",21)
v=H.d(y.$2(21,245),"$isO")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
hs:function(a,b,c,d,e){var z,y,x,w,v
H.k(e,"$isb",[P.n],"$asb")
z=$.$get$ht()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.f(z,d)
x=z[d]
w=C.c.J(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.f(x,w)
v=x[w]
d=v&31
C.a.q(e,v>>>5,y)}return d},
M:{"^":"a;"},
"+bool":0,
am:{"^":"a;a,b",
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.am))return!1
return this.a===b.a&&!0},
gZ:function(a){var z=this.a
return(z^C.h.b2(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.is(H.jV(this))
y=P.bZ(H.jT(this))
x=P.bZ(H.jP(this))
w=P.bZ(H.jQ(this))
v=P.bZ(H.jS(this))
u=P.bZ(H.jU(this))
t=P.it(H.jR(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
m:{
is:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
it:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bZ:function(a){if(a>=10)return""+a
return"0"+a}}},
q:{"^":"ak;"},
"+double":0,
bx:{"^":"a;a",
V:function(a,b){return C.h.V(this.a,H.d(b,"$isbx").a)},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.bx))return!1
return this.a===b.a},
gZ:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.iz()
y=this.a
if(y<0)return"-"+new P.bx(0-y).i(0)
x=z.$1(C.h.ac(y,6e7)%60)
w=z.$1(C.h.ac(y,1e6)%60)
v=new P.iy().$1(y%1e6)
return""+C.h.ac(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
m:{
es:function(a,b,c,d,e,f){return new P.bx(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
iy:{"^":"m:30;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
iz:{"^":"m:30;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a7:{"^":"a;"},
f_:{"^":"a7;",
i:function(a){return"Throw of null."}},
aL:{"^":"a7;a,b,c,d",
gcl:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gck:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gcl()+y+x
if(!this.a)return w
v=this.gck()
u=P.cq(this.b)
return w+v+": "+H.j(u)},
m:{
bX:function(a){return new P.aL(!1,null,null,a)},
d0:function(a,b,c){return new P.aL(!0,a,b,c)}}},
cz:{"^":"aL;e,f,a,b,c,d",
gcl:function(){return"RangeError"},
gck:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
m:{
c9:function(a,b,c){return new P.cz(null,null,!0,a,b,"Value not in range")},
a0:function(a,b,c,d,e){return new P.cz(b,c,!0,a,d,"Invalid value")},
b3:function(a,b,c,d,e,f){if(typeof a!=="number")return H.A(a)
if(0>a||a>c)throw H.e(P.a0(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.e(P.a0(b,a,c,"end",f))
return b}return c}}},
iY:{"^":"aL;e,p:f>,a,b,c,d",
gcl:function(){return"RangeError"},
gck:function(){if(J.hR(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
m:{
b7:function(a,b,c,d,e){var z=H.a2(e!=null?e:J.as(b))
return new P.iY(b,z,!0,a,c,"Index out of range")}}},
l2:{"^":"a7;a",
i:function(a){return"Unsupported operation: "+this.a},
m:{
U:function(a){return new P.l2(a)}}},
l_:{"^":"a7;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
m:{
cH:function(a){return new P.l_(a)}}},
ds:{"^":"a7;a",
i:function(a){return"Bad state: "+this.a},
m:{
fi:function(a){return new P.ds(a)}}},
ij:{"^":"a7;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.cq(z))+"."},
m:{
aM:function(a){return new P.ij(a)}}},
jJ:{"^":"a;",
i:function(a){return"Out of Memory"},
$isa7:1},
fh:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isa7:1},
iq:{"^":"a7;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
h2:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
iM:{"^":"a;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.j(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.c.w(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.c.J(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.c.a2(w,s)
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
m=""}l=C.c.w(w,o,p)
return y+n+l+m+"\n"+C.c.u(" ",x-o+n.length)+"^\n"},
m:{
Z:function(a,b,c){return new P.iM(a,b,c)}}},
c_:{"^":"a;"},
n:{"^":"ak;"},
"+int":0,
o:{"^":"a;$ti",
dr:["fV",function(a,b){var z=H.a5(this,"o",0)
return new H.dL(this,H.l(b,{func:1,ret:P.M,args:[z]}),[z])}],
gp:function(a){var z,y
z=this.gU(this)
for(y=0;z.D();)++y
return y},
gaU:function(a){var z,y
z=this.gU(this)
if(!z.D())throw H.e(H.ct())
y=z.gK()
if(z.D())throw H.e(H.j0())
return y},
ag:function(a,b){var z,y,x
if(b<0)H.r(P.a0(b,0,null,"index",null))
for(z=this.gU(this),y=0;z.D();){x=z.gK()
if(b===y)return x;++y}throw H.e(P.b7(b,this,"index",null,y))},
i:function(a){return P.j_(this,"(",")")}},
b1:{"^":"a;$ti"},
b:{"^":"a;$ti",$iso:1},
"+List":0,
K:{"^":"a;$ti"},
H:{"^":"a;",
gZ:function(a){return P.a.prototype.gZ.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
ak:{"^":"a;"},
"+num":0,
a:{"^":";",
A:function(a,b){return this===b},
gZ:function(a){return H.bG(this)},
i:function(a){return"Instance of '"+H.bd(this)+"'"},
toString:function(){return this.i(this)}},
aR:{"^":"a;"},
h:{"^":"a;",$isf0:1},
"+String":0,
ai:{"^":"a;aY:a<",
gp:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isoi:1,
m:{
fj:function(a,b,c){var z=J.b6(b)
if(!z.D())return a
if(c.length===0){do a+=H.j(z.gK())
while(z.D())}else{a+=H.j(z.gK())
for(;z.D();)a=a+c+H.j(z.gK())}return a}}},
l9:{"^":"m:49;a",
$2:function(a,b){var z,y,x,w
z=P.h
H.k(a,"$isK",[z,z],"$asK")
H.D(b)
y=J.bU(b).f7(b,"=")
if(y===-1){if(b!=="")a.q(0,P.dQ(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.c.w(b,0,y)
w=C.c.aA(b,y+1)
z=this.a
a.q(0,P.dQ(x,0,x.length,z,!0),P.dQ(w,0,w.length,z,!0))}return a}},
l5:{"^":"m:51;a",
$2:function(a,b){throw H.e(P.Z("Illegal IPv4 address, "+a,this.a,b))}},
l7:{"^":"m:54;a",
$2:function(a,b){throw H.e(P.Z("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
l8:{"^":"m:44;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.ch(C.c.w(this.b,a,b),null,16)
if(typeof z!=="number")return z.V()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cM:{"^":"a;ce:a<,b,c,d,fg:e>,f,r,0x,0y,0z,0Q,0ch",
siv:function(a){var z=P.h
this.Q=H.k(a,"$isK",[z,z],"$asK")},
gfv:function(){return this.b},
gd4:function(a){var z=this.c
if(z==null)return""
if(C.c.ab(z,"["))return C.c.w(z,1,z.length-1)
return z},
gc5:function(a){var z=this.d
if(z==null)return P.hg(this.a)
return z},
gdg:function(){var z=this.f
return z==null?"":z},
gf2:function(){var z=this.r
return z==null?"":z},
dk:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.k(h,"$isK",[P.h,null],"$asK")
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
if(x&&!C.c.ab(d,"/"))d="/"+d
g=P.dP(g,0,0,h)
return new P.cM(i,j,c,f,d,g,this.r)},
fj:function(a,b){return this.dk(a,null,null,null,null,null,null,b,null,null)},
gdh:function(){var z,y
if(this.Q==null){z=this.f
y=P.h
this.siv(new P.fI(P.fM(z==null?"":z,C.m),[y,y]))}return this.Q},
gf3:function(){return this.c!=null},
gf6:function(){return this.f!=null},
gf4:function(){return this.r!=null},
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
A:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!!J.N(b).$isdI){if(this.a==b.gce())if(this.c!=null===b.gf3())if(this.b==b.gfv())if(this.gd4(this)==b.gd4(b))if(this.gc5(this)==b.gc5(b))if(this.e===b.gfg(b)){z=this.f
y=z==null
if(!y===b.gf6()){if(y)z=""
if(z===b.gdg()){z=this.r
y=z==null
if(!y===b.gf4()){if(y)z=""
z=z===b.gf2()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
return z}return!1},
gZ:function(a){var z=this.z
if(z==null){z=C.c.gZ(this.i(0))
this.z=z}return z},
$isdI:1,
m:{
ce:function(a,b,c,d){var z,y,x,w,v,u
H.k(a,"$isb",[P.n],"$asb")
if(c===C.m){z=$.$get$hl().b
if(typeof b!=="string")H.r(H.ah(b))
z=z.test(b)}else z=!1
if(z)return b
H.y(b,H.a5(c,"bY",0))
y=c.gk_().cT(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.f(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.be(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
ms:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.mD(a,b,d)
else{if(d===b)P.bN(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.mE(a,z,e-1):""
x=P.mx(a,e,f,!1)
if(typeof f!=="number")return f.H()
w=f+1
if(typeof g!=="number")return H.A(g)
v=w<g?P.mA(P.ch(C.c.w(a,w,g),new P.mt(a,f),null),j):null}else{y=""
x=null
v=null}u=P.my(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.V()
t=h<i?P.dP(a,h+1,i,null):null
return new P.cM(j,y,x,v,u,t,i<c?P.mw(a,i+1,c):null)},
hg:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bN:function(a,b,c){throw H.e(P.Z(c,a,b))},
mA:function(a,b){if(a!=null&&a===P.hg(b))return
return a},
mx:function(a,b,c,d){var z,y
if(b===c)return""
if(C.c.a2(a,b)===91){if(typeof c!=="number")return c.N()
z=c-1
if(C.c.a2(a,z)!==93)P.bN(a,b,"Missing end `]` to match `[` in host")
P.fL(a,b+1,z)
return C.c.w(a,b,c).toLowerCase()}if(typeof c!=="number")return H.A(c)
y=b
for(;y<c;++y)if(C.c.a2(a,y)===58){P.fL(a,b,c)
return"["+a+"]"}return P.mG(a,b,c)},
mG:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.A(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.c.a2(a,z)
if(v===37){u=P.hn(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.ai("")
s=C.c.w(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.c.w(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.f(C.K,t)
t=(C.K[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.ai("")
if(y<z){x.a+=C.c.w(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.f(C.t,t)
t=(C.t[t]&1<<(v&15))!==0}else t=!1
if(t)P.bN(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.c.a2(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.ai("")
s=C.c.w(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.hh(v)
z+=q
y=z}}}}if(x==null)return C.c.w(a,b,c)
if(y<c){s=C.c.w(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
mD:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.hj(C.c.J(a,b)))P.bN(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.c.J(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.f(C.v,w)
w=(C.v[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bN(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.c.w(a,b,c)
return P.mu(y?a.toLowerCase():a)},
mu:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mE:function(a,b,c){return P.bO(a,b,c,C.a9,!1)},
my:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bO(a,b,c,C.L,!0):C.r.lD(d,new P.mz(),P.h).l(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.c.ab(w,"/"))w="/"+w
return P.mF(w,e,f)},
mF:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.c.ab(a,"/"))return P.mH(a,!z||c)
return P.mI(a)},
dP:function(a,b,c,d){var z,y
z={}
H.k(d,"$isK",[P.h,null],"$asK")
if(a!=null){if(d!=null)throw H.e(P.bX("Both query and queryParameters specified"))
return P.bO(a,b,c,C.u,!0)}if(d==null)return
y=new P.ai("")
z.a=""
d.a0(0,new P.mB(new P.mC(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
mw:function(a,b,c){return P.bO(a,b,c,C.u,!0)},
hn:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.c.a2(a,b+1)
x=C.c.a2(a,z)
w=H.cT(y)
v=H.cT(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.h.b2(u,4)
if(z>=8)return H.f(C.w,z)
z=(C.w[z]&1<<(u&15))!==0}else z=!1
if(z)return H.be(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.c.w(a,b,b+3).toUpperCase()
return},
hh:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.c(z,[P.n])
C.a.q(y,0,37)
C.a.q(y,1,C.c.J("0123456789ABCDEF",a>>>4))
C.a.q(y,2,C.c.J("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.c(z,[P.n])
for(v=0;--w,w>=0;x=128){u=C.h.iU(a,6*w)&63|x
C.a.q(y,v,37)
C.a.q(y,v+1,C.c.J("0123456789ABCDEF",u>>>4))
C.a.q(y,v+2,C.c.J("0123456789ABCDEF",u&15))
v+=3}}return P.ca(y,0,null)},
bO:function(a,b,c,d,e){var z=P.hm(a,b,c,H.k(d,"$isb",[P.n],"$asb"),e)
return z==null?C.c.w(a,b,c):z},
hm:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.k(d,"$isb",[P.n],"$asb")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.V()
if(typeof c!=="number")return H.A(c)
if(!(y<c))break
c$0:{v=C.c.a2(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.f(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.hn(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.f(C.t,u)
u=(C.t[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bN(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.c.a2(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.hh(v)}}if(w==null)w=new P.ai("")
w.a+=C.c.w(a,x,y)
w.a+=H.j(t)
if(typeof s!=="number")return H.A(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.V()
if(x<c)w.a+=C.c.w(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
hk:function(a){if(C.c.ab(a,"."))return!0
return C.c.f7(a,"/.")!==-1},
mI:function(a){var z,y,x,w,v,u,t
if(!P.hk(a))return a
z=H.c([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.P(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.f(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.l(z,"/")},
mH:function(a,b){var z,y,x,w,v,u
if(!P.hk(a))return!b?P.hi(a):a
z=H.c([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaH(z)!==".."){if(0>=z.length)return H.f(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.f(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaH(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.f(z,0)
C.a.q(z,0,P.hi(z[0]))}return C.a.l(z,"/")},
hi:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.hj(J.hU(a,0)))for(y=1;y<z;++y){x=C.c.J(a,y)
if(x===58)return C.c.w(a,0,y)+"%3A"+C.c.aA(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.f(C.v,w)
w=(C.v[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
mv:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.c.J(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.e(P.bX("Invalid URL encoding"))}}return z},
dQ:function(a,b,c,d,e){var z,y,x,w,v
y=b
while(!0){if(!(y<c)){z=!0
break}x=C.c.J(a,y)
if(x<=127)if(x!==37)w=x===43
else w=!0
else w=!0
if(w){z=!1
break}++y}if(z){if(C.m!==d)w=!1
else w=!0
if(w)return C.c.w(a,b,c)
else v=new H.v(C.c.w(a,b,c))}else{v=H.c([],[P.n])
for(w=a.length,y=b;y<c;++y){x=C.c.J(a,y)
if(x>127)throw H.e(P.bX("Illegal percent encoding in URI"))
if(x===37){if(y+3>w)throw H.e(P.bX("Truncated URI"))
C.a.h(v,P.mv(a,y+1))
y+=2}else if(x===43)C.a.h(v,32)
else C.a.h(v,x)}}H.k(v,"$isb",[P.n],"$asb")
return new P.lf(!1).cT(v)},
hj:function(a){var z=a|32
return 97<=z&&z<=122}}},
mt:{"^":"m:40;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.H()
throw H.e(P.Z("Invalid port",this.a,z+1))}},
mz:{"^":"m:17;",
$1:function(a){return P.ce(C.aa,a,C.m,!1)}},
mC:{"^":"m:42;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.j(P.ce(C.w,a,C.m,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.j(P.ce(C.w,b,C.m,!0))}}},
mB:{"^":"m:33;a",
$2:function(a,b){var z,y
H.D(a)
if(b==null||typeof b==="string")this.a.$2(a,H.D(b))
else for(z=J.b6(H.hI(b,"$iso")),y=this.a;z.D();)y.$2(a,H.D(z.gK()))}},
l3:{"^":"a;a,b,c",
gfu:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
z=z[0]+1
x=C.c.f8(y,"?",z)
w=y.length
if(x>=0){v=P.bO(y,x+1,w,C.u,!1)
w=x}else v=null
z=new P.lH(this,"data",null,null,null,P.bO(y,z,w,C.L,!1),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
m:{
fJ:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.c([b-1],[P.n])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.c.J(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.e(P.Z("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.e(P.Z("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.c.J(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaH(z)
if(v!==44||x!==t+7||!C.c.ak(a,"base64",t+1))throw H.e(P.Z("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.Q.kp(a,s,y)
else{r=P.hm(a,s,y,C.u,!0)
if(r!=null)a=C.c.bc(a,s,y,r)}return new P.l3(a,z,c)}}},
mV:{"^":"m:38;",
$1:function(a){return new Uint8Array(96)}},
mU:{"^":"m:55;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.f(z,a)
z=z[a]
J.hW(z,0,96,b)
return z}},
mW:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.c.J(b,y)^96
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
mX:{"^":"m;",
$3:function(a,b,c){var z,y,x
for(z=C.c.J(b,0),y=C.c.J(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
md:{"^":"a;a,b,c,d,e,f,r,x,0y",
gf3:function(){return this.c>0},
gf5:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.H()
y=this.e
if(typeof y!=="number")return H.A(y)
y=z+1<y
z=y}else z=!1
return z},
gf6:function(){var z=this.f
if(typeof z!=="number")return z.V()
return z<this.r},
gf4:function(){return this.r<this.a.length},
ge_:function(){return this.b===4&&C.c.ab(this.a,"http")},
ge0:function(){return this.b===5&&C.c.ab(this.a,"https")},
gce:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.ge_()){this.x="http"
z="http"}else if(this.ge0()){this.x="https"
z="https"}else if(z===4&&C.c.ab(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.c.ab(this.a,"package")){this.x="package"
z="package"}else{z=C.c.w(this.a,0,z)
this.x=z}return z},
gfv:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.c.w(this.a,y,z-1):""},
gd4:function(a){var z=this.c
return z>0?C.c.w(this.a,z,this.d):""},
gc5:function(a){var z
if(this.gf5()){z=this.d
if(typeof z!=="number")return z.H()
return P.ch(C.c.w(this.a,z+1,this.e),null,null)}if(this.ge_())return 80
if(this.ge0())return 443
return 0},
gfg:function(a){return C.c.w(this.a,this.e,this.f)},
gdg:function(){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.V()
return z<y?C.c.w(this.a,z+1,y):""},
gf2:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.c.aA(y,z+1):""},
gdh:function(){var z=this.f
if(typeof z!=="number")return z.V()
if(z>=this.r)return C.ab
z=P.h
return new P.fI(P.fM(this.gdg(),C.m),[z,z])},
dk:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.k(h,"$isK",[P.h,null],"$asK")
i=this.gce()
z=i==="file"
y=this.c
j=y>0?C.c.w(this.a,this.b+3,y):""
f=this.gf5()?this.gc5(this):null
y=this.c
if(y>0)c=C.c.w(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.c.w(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.c.ab(d,"/"))d="/"+d
g=P.dP(g,0,0,h)
x=this.r
if(x<y.length)b=C.c.aA(y,x+1)
return new P.cM(i,j,c,f,d,g,b)},
fj:function(a,b){return this.dk(a,null,null,null,null,null,null,b,null,null)},
gZ:function(a){var z=this.y
if(z==null){z=C.c.gZ(this.a)
this.y=z}return z},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!!J.N(b).$isdI)return this.a===b.i(0)
return!1},
i:function(a){return this.a},
$isdI:1},
lH:{"^":"cM;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
e9:function(a){var z=document.createElement("a")
return z},
d6:function(a,b){var z=document.createElement("canvas")
return z},
iA:function(a,b,c){var z,y
z=document.body
y=(z&&C.p).av(z,a,b,c)
y.toString
z=W.B
z=new H.dL(new W.aq(y),H.l(new W.iB(),{func:1,ret:P.M,args:[z]}),[z])
return H.d(z.gaU(z),"$isQ")},
iC:function(a){H.d(a,"$iscr")
return"wheel"},
by:function(a){var z,y,x
z="element tag unavailable"
try{y=J.hZ(a)
if(typeof y==="string")z=a.tagName}catch(x){H.aa(x)}return z},
iZ:function(a){var z,y,x
y=document.createElement("input")
z=H.d(y,"$iseC")
try{J.i0(z,a)}catch(x){H.aa(x)}return z},
cJ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
h6:function(a,b,c,d){var z,y
z=W.cJ(W.cJ(W.cJ(W.cJ(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
hw:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.S
if(z===C.l)return a
return z.es(a,b)},
a3:{"^":"Q;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
i4:{"^":"a3;",
i:function(a){return String(a)},
$isi4:1,
"%":"HTMLAnchorElement"},
o0:{"^":"a3;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
ec:{"^":"a3;",$isec:1,"%":"HTMLBaseElement"},
cl:{"^":"a3;",$iscl:1,"%":"HTMLBodyElement"},
d5:{"^":"a3;",
cb:function(a,b,c){if(c!=null)return this.hK(a,b,P.n8(c,null))
return this.hL(a,b)},
fF:function(a,b){return this.cb(a,b,null)},
hK:function(a,b,c){return a.getContext(b,c)},
hL:function(a,b){return a.getContext(b)},
$isd5:1,
$iseh:1,
"%":"HTMLCanvasElement"},
d7:{"^":"G;",
hM:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
jY:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$isd7:1,
"%":"CanvasRenderingContext2D"},
o3:{"^":"B;0p:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
o5:{"^":"lG;0p:length=",
fH:function(a,b){var z=this.hN(a,this.ht(a,b))
return z==null?"":z},
ht:function(a,b){var z,y
z=$.$get$el()
y=z[b]
if(typeof y==="string")return y
y=this.iX(a,b)
z[b]=y
return y},
iX:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.iu()+b
if(z in a)return z
return b},
hN:function(a,b){return a.getPropertyValue(b)},
gcO:function(a){return a.bottom},
gaP:function(a){return a.height},
gb9:function(a){return a.left},
gby:function(a){return a.right},
gbC:function(a){return a.top},
gaT:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
ip:{"^":"a;",
gb9:function(a){return this.fH(a,"left")}},
b0:{"^":"a3;",$isb0:1,"%":"HTMLDivElement"},
iv:{"^":"B;",
jB:function(a,b){return a.adoptNode(b)},
dw:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
o6:{"^":"G;",
i:function(a){return String(a)},
"%":"DOMException"},
iw:{"^":"G;",
jP:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
ix:{"^":"G;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
A:function(a,b){var z
if(b==null)return!1
if(!H.bT(b,"$isaQ",[P.ak],"$asaQ"))return!1
z=J.a_(b)
return a.left===z.gb9(b)&&a.top===z.gbC(b)&&a.width===z.gaT(b)&&a.height===z.gaP(b)},
gZ:function(a){return W.h6(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gcO:function(a){return a.bottom},
gaP:function(a){return a.height},
gb9:function(a){return a.left},
gby:function(a){return a.right},
gbC:function(a){return a.top},
gaT:function(a){return a.width},
$isaQ:1,
$asaQ:function(){return[P.ak]},
"%":";DOMRectReadOnly"},
lF:{"^":"cv;dV:a<,b",
gp:function(a){return this.b.length},
k:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.f(z,b)
return H.d(z[b],"$isQ")},
q:function(a,b,c){var z
H.d(c,"$isQ")
z=this.b
if(b<0||b>=z.length)return H.f(z,b)
J.cY(this.a,c,z[b])},
h:function(a,b){J.e6(this.a,b)
return b},
gU:function(a){var z=this.kV(this)
return new J.at(z,z.length,0,[H.t(z,0)])},
$asX:function(){return[W.Q]},
$aso:function(){return[W.Q]},
$asb:function(){return[W.Q]}},
Q:{"^":"B;0kR:tagName=",
gjE:function(a){return new W.lI(a)},
gcS:function(a){return new W.lF(a,a.children)},
gez:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.V()
if(x<0)x=-x*0
if(typeof w!=="number")return w.V()
if(w<0)w=-w*0
return new P.aQ(z,y,x,w,[P.ak])},
i:function(a){return a.localName},
av:["cf",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.ev
if(z==null){z=H.c([],[W.aI])
y=new W.eY(z)
C.a.h(z,W.h4(null))
C.a.h(z,W.hd())
$.ev=y
d=y}else d=z
z=$.eu
if(z==null){z=new W.ho(d)
$.eu=z
c=z}else{z.a=d
c=z}}if($.aN==null){z=document
y=z.implementation
y=(y&&C.U).jP(y,"")
$.aN=y
$.db=y.createRange()
y=$.aN
y.toString
y=y.createElement("base")
H.d(y,"$isec")
y.href=z.baseURI
z=$.aN.head;(z&&C.W).E(z,y)}z=$.aN
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.d(y,"$iscl")}z=$.aN
if(!!this.$iscl)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.aN.body;(z&&C.p).E(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.Y(C.a8,a.tagName)){z=$.db;(z&&C.N).fM(z,x)
z=$.db
w=(z&&C.N).jN(z,b)}else{x.innerHTML=b
w=$.aN.createDocumentFragment()
for(z=J.a_(w);y=x.firstChild,y!=null;)z.E(w,y)}z=$.aN.body
if(x==null?z!=null:x!==z)J.e8(x)
c.dA(w)
C.z.jB(document,w)
return w},function(a,b,c){return this.av(a,b,c,null)},"jO",null,null,"glB",5,5,null],
fP:function(a,b,c,d){a.textContent=null
this.E(a,this.av(a,b,c,d))},
fO:function(a,b){return this.fP(a,b,null,null)},
be:function(a,b){return a.getAttribute(b)},
ix:function(a,b){return a.removeAttribute(b)},
fN:function(a,b,c){return a.setAttribute(b,c)},
$isQ:1,
"%":";Element"},
iB:{"^":"m:20;",
$1:function(a){return!!J.N(H.d(a,"$isB")).$isQ}},
ab:{"^":"G;",$isab:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
cr:{"^":"G;",
ho:function(a,b,c,d){return a.addEventListener(b,H.bo(H.l(c,{func:1,args:[W.ab]}),1),!1)},
$iscr:1,
"%":";EventTarget"},
o7:{"^":"a3;0p:length=","%":"HTMLFormElement"},
iR:{"^":"a3;","%":"HTMLHeadElement"},
iS:{"^":"G;0p:length=",
iD:function(a,b,c,d){return a.replaceState(b,c,d)},
"%":"History"},
iT:{"^":"lY;",
gp:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.b7(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$isB")
throw H.e(P.U("Cannot assign element of immutable List."))},
ag:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isaw:1,
$asaw:function(){return[W.B]},
$asX:function(){return[W.B]},
$iso:1,
$aso:function(){return[W.B]},
$isb:1,
$asb:function(){return[W.B]},
$isiT:1,
$asaD:function(){return[W.B]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
iU:{"^":"iv;","%":"HTMLDocument"},
c0:{"^":"G;0eA:data=",$isc0:1,"%":"ImageData"},
eB:{"^":"a3;",$iseB:1,$iseh:1,"%":"HTMLImageElement"},
eC:{"^":"a3;0type",
skY:function(a,b){a.type=H.D(b)},
$iseC:1,
"%":"HTMLInputElement"},
bC:{"^":"dy;",$isbC:1,"%":"KeyboardEvent"},
j7:{"^":"a3;","%":"HTMLLabelElement"},
jl:{"^":"G;",
i:function(a){return String(a)},
$isjl:1,
"%":"Location"},
jA:{"^":"a3;","%":"HTMLAudioElement;HTMLMediaElement"},
ax:{"^":"dy;",$isax:1,"%":"PointerEvent;DragEvent|MouseEvent"},
aq:{"^":"cv;a",
gaU:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.e(P.fi("No elements"))
if(y>1)throw H.e(P.fi("More than one element"))
return z.firstChild},
ae:function(a,b){var z,y,x,w,v
H.k(b,"$iso",[W.B],"$aso")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.a_(y),v=0;v<x;++v)w.E(y,z.firstChild)
return},
q:function(a,b,c){var z,y
H.d(c,"$isB")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.f(y,b)
J.cY(z,c,y[b])},
gU:function(a){var z=this.a.childNodes
return new W.ex(z,z.length,-1,[H.cg(C.ac,z,"aD",0)])},
gp:function(a){return this.a.childNodes.length},
k:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
$asX:function(){return[W.B]},
$aso:function(){return[W.B]},
$asb:function(){return[W.B]}},
B:{"^":"cr;0kD:previousSibling=",
kF:function(a){var z=a.parentNode
if(z!=null)J.cj(z,a)},
kK:function(a,b){var z,y
try{z=a.parentNode
J.cY(z,b,a)}catch(y){H.aa(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.fU(a):z},
E:function(a,b){return a.appendChild(H.d(b,"$isB"))},
iy:function(a,b){return a.removeChild(b)},
iC:function(a,b,c){return a.replaceChild(b,c)},
$isB:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
jE:{"^":"m3;",
gp:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.b7(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$isB")
throw H.e(P.U("Cannot assign element of immutable List."))},
ag:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isaw:1,
$asaw:function(){return[W.B]},
$asX:function(){return[W.B]},
$iso:1,
$aso:function(){return[W.B]},
$isb:1,
$asb:function(){return[W.B]},
$asaD:function(){return[W.B]},
"%":"NodeList|RadioNodeList"},
k1:{"^":"G;",
jN:function(a,b){return a.createContextualFragment(b)},
fM:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
og:{"^":"a3;0p:length=","%":"HTMLSelectElement"},
cC:{"^":"a3;",$iscC:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
kB:{"^":"a3;",
av:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.cf(a,b,c,d)
z=W.iA("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.aq(y).ae(0,new W.aq(z))
return y},
hP:function(a,b){return a.insertRow(b)},
"%":"HTMLTableElement"},
kC:{"^":"a3;",
av:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.cf(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.o.av(z.createElement("table"),b,c,d)
z.toString
z=new W.aq(z)
x=z.gaU(z)
x.toString
z=new W.aq(x)
w=z.gaU(z)
y.toString
w.toString
new W.aq(y).ae(0,new W.aq(w))
return y},
dZ:function(a,b){return a.insertCell(b)},
"%":"HTMLTableRowElement"},
oj:{"^":"a3;",
av:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.cf(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.o.av(z.createElement("table"),b,c,d)
z.toString
z=new W.aq(z)
x=z.gaU(z)
y.toString
x.toString
new W.aq(y).ae(0,new W.aq(x))
return y},
"%":"HTMLTableSectionElement"},
fl:{"^":"a3;",$isfl:1,"%":"HTMLTemplateElement"},
bg:{"^":"G;",$isbg:1,"%":"Touch"},
bh:{"^":"dy;",$isbh:1,"%":"TouchEvent"},
ol:{"^":"mp;",
gp:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.b7(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$isbg")
throw H.e(P.U("Cannot assign element of immutable List."))},
ag:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isaw:1,
$asaw:function(){return[W.bg]},
$asX:function(){return[W.bg]},
$iso:1,
$aso:function(){return[W.bg]},
$isb:1,
$asb:function(){return[W.bg]},
$asaD:function(){return[W.bg]},
"%":"TouchList"},
dy:{"^":"ab;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
oo:{"^":"jA;",$iseh:1,"%":"HTMLVideoElement"},
bL:{"^":"ax;",
gjV:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.U("deltaY is not supported"))},
gjU:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.U("deltaX is not supported"))},
$isbL:1,
"%":"WheelEvent"},
ly:{"^":"cr;",
iE:function(a,b){return a.requestAnimationFrame(H.bo(H.l(b,{func:1,ret:-1,args:[P.ak]}),1))},
hD:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
h0:{"^":"B;",$ish0:1,"%":"Attr"},
ot:{"^":"ix;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
A:function(a,b){var z
if(b==null)return!1
if(!H.bT(b,"$isaQ",[P.ak],"$asaQ"))return!1
z=J.a_(b)
return a.left===z.gb9(b)&&a.top===z.gbC(b)&&a.width===z.gaT(b)&&a.height===z.gaP(b)},
gZ:function(a){return W.h6(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gaP:function(a){return a.height},
gaT:function(a){return a.width},
"%":"ClientRect|DOMRect"},
ox:{"^":"mQ;",
gp:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.b7(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$isB")
throw H.e(P.U("Cannot assign element of immutable List."))},
ag:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isaw:1,
$asaw:function(){return[W.B]},
$asX:function(){return[W.B]},
$iso:1,
$aso:function(){return[W.B]},
$isb:1,
$asb:function(){return[W.B]},
$asaD:function(){return[W.B]},
"%":"MozNamedAttrMap|NamedNodeMap"},
lE:{"^":"eM;dV:a<",
a0:function(a,b){var z,y,x,w,v,u
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(z=this.gaG(),y=z.length,x=this.a,w=J.a_(x),v=0;v<z.length;z.length===y||(0,H.z)(z),++v){u=z[v]
b.$2(u,w.be(x,u))}},
gaG:function(){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.h])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
v=H.d(z[w],"$ish0")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$ascx:function(){return[P.h,P.h]},
$asK:function(){return[P.h,P.h]}},
lI:{"^":"lE;a",
k:function(a,b){return J.d_(this.a,H.D(b))},
q:function(a,b,c){J.i1(this.a,b,c)},
gp:function(a){return this.gaG().length}},
lJ:{"^":"kw;a,b,c,$ti"},
ou:{"^":"lJ;a,b,c,$ti"},
lK:{"^":"dt;a,b,c,d,e,$ti",m:{
a1:function(a,b,c,d,e){var z,y
z=W.hw(new W.lL(c),W.ab)
y=z!=null
if(y&&!0){H.l(z,{func:1,args:[W.ab]})
if(y)J.hT(a,b,z,!1)}return new W.lK(0,a,b,z,!1,[e])}}},
lL:{"^":"m:36;a",
$1:function(a){return this.a.$1(H.d(a,"$isab"))}},
cd:{"^":"a;a",
h8:function(a){var z,y
z=$.$get$dN()
if(z.gki(z)){for(y=0;y<262;++y)z.q(0,C.a7[y],W.no())
for(y=0;y<12;++y)z.q(0,C.B[y],W.np())}},
b3:function(a){return $.$get$h5().Y(0,W.by(a))},
aM:function(a,b,c){var z,y,x
z=W.by(a)
y=$.$get$dN()
x=y.k(0,H.j(z)+"::"+b)
if(x==null)x=y.k(0,"*::"+b)
if(x==null)return!1
return H.dV(x.$4(a,b,c,this))},
$isaI:1,
m:{
h4:function(a){var z,y
z=W.e9(null)
y=window.location
z=new W.cd(new W.m9(z,y))
z.h8(a)
return z},
ov:[function(a,b,c,d){H.d(a,"$isQ")
H.D(b)
H.D(c)
H.d(d,"$iscd")
return!0},"$4","no",16,0,27],
ow:[function(a,b,c,d){var z,y,x
H.d(a,"$isQ")
H.D(b)
H.D(c)
z=H.d(d,"$iscd").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","np",16,0,27]}},
aD:{"^":"a;$ti",
gU:function(a){return new W.ex(a,this.gp(a),-1,[H.cg(this,a,"aD",0)])}},
eY:{"^":"a;a",
b3:function(a){return C.a.eo(this.a,new W.jG(a))},
aM:function(a,b,c){return C.a.eo(this.a,new W.jF(a,b,c))},
$isaI:1},
jG:{"^":"m:21;a",
$1:function(a){return H.d(a,"$isaI").b3(this.a)}},
jF:{"^":"m:21;a,b,c",
$1:function(a){return H.d(a,"$isaI").aM(this.a,this.b,this.c)}},
ma:{"^":"a;",
hi:function(a,b,c,d){var z,y,x
this.a.ae(0,c)
z=b.dr(0,new W.mb())
y=b.dr(0,new W.mc())
this.b.ae(0,z)
x=this.c
x.ae(0,C.I)
x.ae(0,y)},
b3:function(a){return this.a.Y(0,W.by(a))},
aM:["fZ",function(a,b,c){var z,y
z=W.by(a)
y=this.c
if(y.Y(0,H.j(z)+"::"+b))return this.d.jC(c)
else if(y.Y(0,"*::"+b))return this.d.jC(c)
else{y=this.b
if(y.Y(0,H.j(z)+"::"+b))return!0
else if(y.Y(0,"*::"+b))return!0
else if(y.Y(0,H.j(z)+"::*"))return!0
else if(y.Y(0,"*::*"))return!0}return!1}],
$isaI:1},
mb:{"^":"m:22;",
$1:function(a){return!C.a.Y(C.B,H.D(a))}},
mc:{"^":"m:22;",
$1:function(a){return C.a.Y(C.B,H.D(a))}},
mi:{"^":"ma;e,a,b,c,d",
aM:function(a,b,c){if(this.fZ(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.d_(a,"template")==="")return this.e.Y(0,b)
return!1},
m:{
hd:function(){var z,y,x,w,v
z=P.h
y=P.eK(C.A,z)
x=H.t(C.A,0)
w=H.l(new W.mj(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.mi(y,P.c7(null,null,null,z),P.c7(null,null,null,z),P.c7(null,null,null,z),null)
y.hi(null,new H.jr(C.A,w,[x,z]),v,null)
return y}}},
mj:{"^":"m:17;",
$1:function(a){return"TEMPLATE::"+H.j(H.D(a))}},
mh:{"^":"a;",
b3:function(a){var z=J.N(a)
if(!!z.$isfc)return!1
z=!!z.$isdu
if(z&&W.by(a)==="foreignObject")return!1
if(z)return!0
return!1},
aM:function(a,b,c){if(b==="is"||C.c.ab(b,"on"))return!1
return this.b3(a)},
$isaI:1},
ex:{"^":"a;a,b,c,0d,$ti",
sdY:function(a){this.d=H.y(a,H.t(this,0))},
D:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sdY(J.hS(this.a,z))
this.c=z
return!0}this.sdY(null)
this.c=y
return!1},
gK:function(){return this.d},
$isb1:1},
aI:{"^":"a;"},
m9:{"^":"a;a,b",$ison:1},
ho:{"^":"a;a",
dA:function(a){new W.mN(this).$2(a,null)},
bm:function(a,b){if(b==null)J.e8(a)
else J.cj(b,a)},
iK:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.hX(a)
x=J.d_(y.gdV(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.aa(t)}v="element unprintable"
try{v=J.ag(a)}catch(t){H.aa(t)}try{u=W.by(a)
this.iJ(H.d(a,"$isQ"),b,z,v,u,H.d(y,"$isK"),H.D(x))}catch(t){if(H.aa(t) instanceof P.aL)throw t
else{this.bm(a,b)
window
s="Removing corrupted element "+H.j(v)
if(typeof console!="undefined")window.console.warn(s)}}},
iJ:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.bm(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.b3(a)){this.bm(a,b)
window
z="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.aM(a,"is",g)){this.bm(a,b)
window
z="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gaG()
y=H.c(z.slice(0),[H.t(z,0)])
for(x=f.gaG().length-1,z=f.a,w=J.a_(z);x>=0;--x){if(x>=y.length)return H.f(y,x)
v=y[x]
if(!this.a.aM(a,J.i3(v),w.be(z,v))){window
u="Removing disallowed attribute <"+H.j(e)+" "+v+'="'+H.j(w.be(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.be(z,v)
w.ix(z,v)}}if(!!J.N(a).$isfl)this.dA(a.content)},
$isof:1},
mN:{"^":"m:41;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.iK(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.bm(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.hY(z)}catch(w){H.aa(w)
v=H.d(z,"$isB")
if(x){u=v.parentNode
if(u!=null)J.cj(u,v)}else J.cj(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.d(y,"$isB")}}},
lG:{"^":"G+ip;"},
lX:{"^":"G+X;"},
lY:{"^":"lX+aD;"},
m2:{"^":"G+X;"},
m3:{"^":"m2+aD;"},
mo:{"^":"G+X;"},
mp:{"^":"mo+aD;"},
mP:{"^":"G+X;"},
mQ:{"^":"mP+aD;"}}],["","",,P,{"^":"",
nb:function(a){var z,y
z=J.N(a)
if(!!z.$isc0){y=z.geA(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.hf(a.data,a.height,a.width)},
na:function(a){if(a instanceof P.hf)return{data:a.a,height:a.b,width:a.c}
return a},
n8:function(a,b){var z={}
a.a0(0,new P.n9(z))
return z},
er:function(){var z=$.eq
if(z==null){z=J.cZ(window.navigator.userAgent,"Opera",0)
$.eq=z}return z},
iu:function(){var z,y
z=$.en
if(z!=null)return z
y=$.eo
if(y==null){y=J.cZ(window.navigator.userAgent,"Firefox",0)
$.eo=y}if(y)z="-moz-"
else{y=$.ep
if(y==null){y=!P.er()&&J.cZ(window.navigator.userAgent,"Trident/",0)
$.ep=y}if(y)z="-ms-"
else z=P.er()?"-o-":"-webkit-"}$.en=z
return z},
me:{"^":"a;",
f0:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
dq:function(a){var z,y,x,w
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.N(a)
if(!!y.$isam)return new Date(a.a)
if(!!y.$isk5)throw H.e(P.cH("structured clone of RegExp"))
if(!!y.$isc0)return a
if(!!y.$isdn)return a
if(!!y.$isK){x=this.f0(a)
y=this.b
if(x>=y.length)return H.f(y,x)
w=y[x]
z.a=w
if(w!=null)return w
w={}
z.a=w
C.a.q(y,x,w)
a.a0(0,new P.mg(z,this))
return z.a}if(!!y.$isb){x=this.f0(a)
z=this.b
if(x>=z.length)return H.f(z,x)
w=z[x]
if(w!=null)return w
return this.jM(a,x)}throw H.e(P.cH("structured clone of other type"))},
jM:function(a,b){var z,y,x,w
z=J.br(a)
y=z.gp(a)
x=new Array(y)
C.a.q(this.b,b,x)
for(w=0;w<y;++w)C.a.q(x,w,this.dq(z.k(a,w)))
return x}},
mg:{"^":"m:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.dq(b)}},
hf:{"^":"a;eA:a>,b,c",$isc0:1},
n9:{"^":"m:6;a",
$2:function(a,b){this.a[a]=b}},
mf:{"^":"me;a,b"},
iJ:{"^":"cv;a,b",
gbJ:function(){var z,y,x
z=this.b
y=H.a5(z,"X",0)
x=W.Q
return new H.jp(new H.dL(z,H.l(new P.iK(),{func:1,ret:P.M,args:[y]}),[y]),H.l(new P.iL(),{func:1,ret:x,args:[y]}),[y,x])},
q:function(a,b,c){var z
H.d(c,"$isQ")
z=this.gbJ()
J.i_(z.b.$1(J.ck(z.a,b)),c)},
h:function(a,b){J.e6(this.b.a,b)},
gp:function(a){return J.as(this.gbJ().a)},
k:function(a,b){var z=this.gbJ()
return z.b.$1(J.ck(z.a,b))},
gU:function(a){var z=P.jj(this.gbJ(),!1,W.Q)
return new J.at(z,z.length,0,[H.t(z,0)])},
$asX:function(){return[W.Q]},
$aso:function(){return[W.Q]},
$asb:function(){return[W.Q]}},
iK:{"^":"m:20;",
$1:function(a){return!!J.N(H.d(a,"$isB")).$isQ}},
iL:{"^":"m:56;",
$1:function(a){return H.i(H.d(a,"$isB"),"$isQ")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cK:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lZ:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
m4:{"^":"a;$ti",
gby:function(a){var z=this.a
if(typeof z!=="number")return z.H()
return H.y(z+this.c,H.t(this,0))},
gcO:function(a){var z=this.b
if(typeof z!=="number")return z.H()
return H.y(z+this.d,H.t(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
A:function(a,b){var z,y,x,w
if(b==null)return!1
if(!H.bT(b,"$isaQ",[P.ak],"$asaQ"))return!1
z=this.a
y=J.a_(b)
x=y.gb9(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbC(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.H()
w=H.t(this,0)
if(H.y(z+this.c,w)===y.gby(b)){if(typeof x!=="number")return x.H()
z=H.y(x+this.d,w)===y.gcO(b)}else z=!1}else z=!1}else z=!1
return z},
gZ:function(a){var z,y,x,w,v
z=this.a
y=J.bW(z)
x=this.b
w=J.bW(x)
if(typeof z!=="number")return z.H()
v=H.t(this,0)
z=H.y(z+this.c,v)
if(typeof x!=="number")return x.H()
v=H.y(x+this.d,v)
return P.lZ(P.cK(P.cK(P.cK(P.cK(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
aQ:{"^":"m4;b9:a>,bC:b>,aT:c>,aP:d>,$ti"}}],["","",,P,{"^":"",fc:{"^":"du;",$isfc:1,"%":"SVGScriptElement"},du:{"^":"Q;",
gcS:function(a){return new P.iJ(a,new W.aq(a))},
av:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.aI])
C.a.h(z,W.h4(null))
C.a.h(z,W.hd())
C.a.h(z,new W.mh())
c=new W.ho(new W.eY(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).jO(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.aq(w)
u=z.gaU(z)
for(z=J.a_(v);x=u.firstChild,x!=null;)z.E(v,x)
return v},
$isdu:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"}}],["","",,P,{"^":"",O:{"^":"a;",$iso:1,
$aso:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$iskP:1}}],["","",,P,{"^":""}],["","",,P,{"^":"",i9:{"^":"G;",$isi9:1,"%":"WebGLBuffer"},iN:{"^":"G;",$isiN:1,"%":"WebGLFramebuffer"},jZ:{"^":"G;",$isjZ:1,"%":"WebGLProgram"},kc:{"^":"G;",$iskc:1,"%":"WebGLRenderbuffer"},dq:{"^":"G;",
bM:function(a,b){return a.activeTexture(b)},
ep:function(a,b,c){return a.attachShader(b,c)},
aD:function(a,b,c){return a.bindBuffer(b,c)},
bo:function(a,b,c){return a.bindFramebuffer(b,c)},
er:function(a,b,c){return a.bindRenderbuffer(b,c)},
af:function(a,b,c){return a.bindTexture(b,c)},
jG:function(a,b,c){return a.blendFunc(b,c)},
eu:function(a,b,c,d){return a.bufferData(b,c,d)},
ew:function(a,b){return a.clear(b)},
ex:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
ey:function(a,b){return a.clearDepth(b)},
jJ:function(a,b){return a.compileShader(b)},
jQ:function(a,b){return a.createShader(b)},
jS:function(a,b){return a.deleteProgram(b)},
jT:function(a,b){return a.deleteShader(b)},
eB:function(a,b){return a.depthFunc(b)},
jW:function(a,b){return a.disable(b)},
eD:function(a,b){return a.disableVertexAttribArray(b)},
jX:function(a,b,c,d,e){return a.drawElements(b,c,H.a2(d),H.a2(e))},
bs:function(a,b){return a.enable(b)},
eF:function(a,b){return a.enableVertexAttribArray(b)},
kc:function(a,b,c,d,e){return a.framebufferRenderbuffer(b,c,d,e)},
kd:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
fB:function(a,b,c){return a.getActiveAttrib(b,c)},
fC:function(a,b,c){return a.getActiveUniform(b,c)},
fD:function(a,b,c){return a.getAttribLocation(b,c)},
cc:function(a,b){return a.getParameter(b)},
fG:function(a,b){return a.getProgramInfoLog(b)},
cd:function(a,b,c){return a.getProgramParameter(b,c)},
fI:function(a,b){return a.getShaderInfoLog(b)},
fJ:function(a,b,c){return a.getShaderParameter(b,c)},
fK:function(a,b,c){return a.getUniformLocation(b,c)},
kl:function(a,b){return a.linkProgram(b)},
kC:function(a,b,c){return a.pixelStorei(b,c)},
kJ:function(a,b,c,d,e){return a.renderbufferStorage(b,c,d,e)},
fS:function(a,b,c){return a.shaderSource(b,c)},
fm:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=i==null
if(!z&&h!=null&&typeof g==="number"&&Math.floor(g)===g){this.iZ(a,b,c,d,e,f,g,h,i,j)
return}y=J.N(g)
if(!!y.$isc0&&h==null&&z&&!0){this.j_(a,b,c,d,e,f,P.na(g))
return}if(!!y.$iseB&&h==null&&z&&!0){this.j0(a,b,c,d,e,f,g)
return}throw H.e(P.bX("Incorrect number or type of arguments"))},
kS:function(a,b,c,d,e,f,g){return this.fm(a,b,c,d,e,f,g,null,null,null)},
iZ:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
j_:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
j0:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aI:function(a,b,c,d){return a.texParameteri(b,c,d)},
O:function(a,b,c){return a.uniform1f(b,c)},
R:function(a,b,c){return a.uniform1i(b,c)},
B:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
fs:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ft:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
dn:function(a,b){return a.useProgram(b)},
kZ:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
fw:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isdq:1,
"%":"WebGLRenderingContext"},ki:{"^":"G;",$iski:1,"%":"WebGLShader"},kD:{"^":"G;",$iskD:1,"%":"WebGLTexture"},kY:{"^":"G;",$iskY:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",W:{"^":"a;0a,0b,0c,0d,$ti",
shT:function(a){this.a=H.k(a,"$isb",[H.a5(this,"W",0)],"$asb")},
se7:function(a){this.b=H.l(a,{func:1,ret:P.M,args:[[P.o,H.a5(this,"W",0)]]})},
se4:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.n,[P.o,H.a5(this,"W",0)]]})},
se8:function(a){this.d=H.l(a,{func:1,ret:-1,args:[P.n,[P.o,H.a5(this,"W",0)]]})},
bH:function(a){this.shT(H.c([],[a]))
this.se7(null)
this.se4(null)
this.se8(null)},
dB:function(a,b,c){var z=H.a5(this,"W",0)
H.l(b,{func:1,ret:P.M,args:[[P.o,z]]})
z={func:1,ret:-1,args:[P.n,[P.o,z]]}
H.l(a,z)
H.l(c,z)
this.se7(b)
this.se4(a)
this.se8(c)},
bf:function(a,b){return this.dB(a,null,b)},
e6:function(a){var z
H.k(a,"$iso",[H.a5(this,"W",0)],"$aso")
z=this.b
if(z!=null)return z.$1(a)
return!0},
e3:function(a,b){var z
H.k(b,"$iso",[H.a5(this,"W",0)],"$aso")
z=this.c
if(z!=null)z.$2(a,b)},
gp:function(a){return this.a.length},
gU:function(a){var z=this.a
return new J.at(z,z.length,0,[H.t(z,0)])},
ag:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.a5(this,"W",0)
H.y(b,z)
z=[z]
if(this.e6(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.e3(x,H.c([b],z))}},
ae:function(a,b){var z,y
H.k(b,"$iso",[H.a5(this,"W",0)],"$aso")
if(this.e6(b)){z=this.a
y=z.length
C.a.ae(z,b)
this.e3(y,b)}},
$iso:1,
m:{
d8:function(a){var z=new O.W([a])
z.bH(a)
return z}}},dk:{"^":"a;0a,0b",
scq:function(a){this.a=H.k(a,"$isb",[V.an],"$asb")},
gp:function(a){return this.a.length},
gt:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
h4:function(a){var z=this.b
if(!(z==null))z.I(a)},
aV:function(){return this.h4(null)},
ga5:function(){var z=this.a
if(z.length>0)return C.a.gaH(z)
else return V.ba()},
c7:function(a){var z=this.a
if(a==null)C.a.h(z,V.ba())
else C.a.h(z,a)
this.aV()},
aQ:function(){var z=this.a
if(z.length>0){z.pop()
this.aV()}}}}],["","",,E,{"^":"",d1:{"^":"a;"},av:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0ar:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sh5:function(a,b){this.y=H.k(b,"$isW",[E.av],"$asW")},
sar:function(a){this.z=H.d(a,"$isbz")},
saa:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gt().L(0,this.gfe())
y=this.c
if(y!=null)y.gt().h(0,this.gfe())
x=new D.C("shape",z,this.c,this,[F.fe])
x.b=!0
this.bb(x)}},
az:function(a){var z
for(z=this.y.a,z=new J.at(z,z.length,0,[H.t(z,0)]);z.D();)z.d.az(a)},
ai:function(a){var z,y
z=a.dx
C.a.h(z.a,z.ga5())
z.aV()
a.df(this.f)
z=a.dy
y=(z&&C.a).gaH(z)
if(y!=null&&this.d!=null)y.fi(a,this)
for(z=this.y.a,z=new J.at(z,z.length,0,[H.t(z,0)]);z.D();)z.d.ai(a)
a.de()
a.dx.aQ()},
gt:function(){var z=this.z
if(z==null){z=D.F()
this.z=z}return z},
bb:function(a){var z=this.z
if(!(z==null))z.I(a)},
a8:function(){return this.bb(null)},
kt:[function(a){H.d(a,"$isx")
this.e=null
this.bb(a)},function(){return this.kt(null)},"lI","$1","$0","gfe",0,2,1],
kr:[function(a){this.bb(H.d(a,"$isx"))},function(){return this.kr(null)},"lG","$1","$0","gfd",0,2,1],
lF:[function(a,b){var z,y,x,w,v,u,t
H.k(b,"$iso",[E.av],"$aso")
for(z=b.length,y=this.gfd(),x={func:1,ret:-1,args:[D.x]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.gar()==null){t=new D.bz()
t.sal(null)
t.sbk(null)
t.c=null
t.d=0
u.sar(t)}t=u.gar()
t.toString
H.l(y,x)
if(t.a==null)t.sal(H.c([],w))
t=t.a;(t&&C.a).h(t,y)}}this.a8()},"$2","gkq",8,0,7],
lH:[function(a,b){var z,y
H.k(b,"$iso",[E.av],"$aso")
for(z=b.gU(b),y=this.gfd();z.D();)z.gK().gt().L(0,y)
this.a8()},"$2","gks",8,0,7],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaH:1,
m:{
dc:function(a,b,c,d,e,f){var z=new E.av()
z.a=d
z.b=!0
z.sh5(0,O.d8(E.av))
z.y.bf(z.gkq(),z.gks())
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
z.saa(0,e)
return z}}},k7:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
siY:function(a){this.dy=H.k(a,"$isb",[O.bH],"$asb")},
siT:function(a){this.fr=H.k(a,"$isK",[P.h,A.cA],"$asK")},
h1:function(a,b){var z,y
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
z=new O.dk()
y=[V.an]
z.scq(H.c([],y))
z.b=null
z.gt().h(0,new E.k9(this))
this.cy=z
z=new O.dk()
z.scq(H.c([],y))
z.b=null
z.gt().h(0,new E.ka(this))
this.db=z
z=new O.dk()
z.scq(H.c([],y))
z.b=null
z.gt().h(0,new E.kb(this))
this.dx=z
this.siY(H.c([],[O.bH]))
z=this.dy;(z&&C.a).h(z,null)
this.siT(new H.b2(0,0,[P.h,A.cA]))},
gkE:function(){var z=this.z
if(z==null){z=this.cy.ga5().u(0,this.db.ga5())
this.z=z}return z},
df:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaH(z):a;(z&&C.a).h(z,y)},
de:function(){var z=this.dy
if(z.length>1)z.pop()},
en:function(a){var z=a.b
if(z.length===0)throw H.e(P.u("May not cache a shader with no name."))
if(this.fr.bP(z))throw H.e(P.u('Shader cache already contains a shader by the name "'+z+'".'))
this.fr.q(0,z,a)},
m:{
k8:function(a,b){var z=new E.k7(a,b)
z.h1(a,b)
return z}}},k9:{"^":"m:8;a",
$1:function(a){var z
H.d(a,"$isx")
z=this.a
z.z=null
z.ch=null}},ka:{"^":"m:8;a",
$1:function(a){var z
H.d(a,"$isx")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},kb:{"^":"m:8;a",
$1:function(a){var z
H.d(a,"$isx")
z=this.a
z.ch=null
z.cx=null}},kH:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0ar:x<,0y,0z,0Q,0ch,0cx,0cy",
sar:function(a){this.x=H.d(a,"$isbz")},
h7:[function(a){H.d(a,"$isx")
this.kM()},function(){return this.h7(null)},"h6","$1","$0","gdF",0,2,1],
gkb:function(){var z,y,x
z=Date.now()
y=C.h.ac(P.es(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.am(z,!1)
return x/y},
ea:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.u()
if(typeof z!=="number")return H.A(z)
x=C.j.d3(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.u()
w=C.j.d3(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.ft(C.y,this.gkL())}},
kM:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.kJ(this),{func:1,ret:-1,args:[P.ak]})
C.P.hD(z)
C.P.iE(z,W.hw(y,P.ak))}},"$0","gkL",0,0,3],
kI:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.ea()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.am(w,!1)
x.y=P.es(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sp(w.a,0)
w.aV()
w=x.db
C.a.sp(w.a,0)
w.aV()
w=x.dx
C.a.sp(w.a,0)
w.aV()
w=x.dy;(w&&C.a).sp(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.ai(this.e)}x=this.z
if(!(x==null))x.I(null)}catch(v){z=H.aa(v)
y=H.bs(v)
P.e2("Error: "+H.j(z))
P.e2("Stack: "+H.j(y))
throw H.e(z)}},
m:{
kI:function(a,b,c,d,e){var z,y,x,w
z=J.N(a)
if(!!z.$isd5)return E.fs(a,!0,!0,!0,!1)
y=W.d6(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcS(a).h(0,y)
w=E.fs(y,!0,!0,!0,!1)
w.a=a
return w},
fs:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.kH()
y=P.jf(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.h,null)
x=C.q.cb(a,"webgl",y)
x=H.d(x==null?C.q.cb(a,"experimental-webgl",y):x,"$isdq")
if(x==null)H.r(P.u("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.k8(x,a)
w=new T.kF(x)
w.b=H.a2((x&&C.b).cc(x,3379))
w.c=H.a2(C.b.cc(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.la(a)
v=new X.j6()
v.c=new X.aG(!1,!1,!1)
v.siu(P.c7(null,null,null,P.n))
w.b=v
v=new X.jB(w)
v.f=0
v.r=V.aO()
v.x=V.aO()
v.Q=1
v.ch=1
w.c=v
v=new X.jm(w)
v.r=0
v.x=V.aO()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.kM(w)
v.e=0
v.f=V.aO()
v.r=V.aO()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.shE(H.c([],[[P.dt,P.a]]))
v=w.z
u=document
t=W.ax
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.a1(u,"contextmenu",H.l(w.gi5(),s),!1,t))
v=w.z
r=W.ab
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a1(a,"focus",H.l(w.gi8(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a1(a,"blur",H.l(w.gi2(),q),!1,r))
v=w.z
p=W.bC
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a1(u,"keyup",H.l(w.gia(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a1(u,"keydown",H.l(w.gi9(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a1(a,"mousedown",H.l(w.gie(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a1(a,"mouseup",H.l(w.gih(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a1(a,"mousemove",H.l(w.gig(),s),!1,t))
p=w.z
o=W.bL;(p&&C.a).h(p,W.a1(a,H.D(W.iC(a)),H.l(w.gii(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a1(u,"mousemove",H.l(w.gi6(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a1(u,"mouseup",H.l(w.gi7(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a1(u,"pointerlockchange",H.l(w.gij(),q),!1,r))
r=w.z
q=W.bh
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a1(a,"touchstart",H.l(w.gis(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a1(a,"touchend",H.l(w.giq(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a1(a,"touchmove",H.l(w.gir(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.am(Date.now(),!1)
z.cy=0
z.ea()
return z}}},kJ:{"^":"m:50;a",
$1:function(a){var z
H.nQ(a)
z=this.a
if(z.ch){z.ch=!1
z.kI()}}}}],["","",,Z,{"^":"",fY:{"^":"a;a,b",$iso1:1,m:{
dK:function(a,b,c){var z
H.k(c,"$isb",[P.n],"$asb")
z=a.createBuffer()
C.b.aD(a,b,z)
C.b.eu(a,b,new Int16Array(H.bl(c)),35044)
C.b.aD(a,b,null)
return new Z.fY(b,z)}}},ef:{"^":"d1;a,b,c,d,e",
a7:function(a){var z,y,x
try{y=a.a
C.b.eF(y,this.e)
C.b.kZ(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.aa(x)
y=P.u('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.j(z))
throw H.e(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},fZ:{"^":"a;a",$iso2:1},d4:{"^":"a;a,0b,c,d",
shO:function(a){this.b=H.k(a,"$isb",[Z.c1],"$asb")},
aO:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
a7:function(a){var z,y
z=this.a
C.b.aD(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].a7(a)},
ay:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.b.eD(x,z[y].e)
C.b.aD(x,this.a.a,null)},
ai:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.f(w,x)
v=w[x]
w=v.c
u=w.a
C.b.aD(y,u,w.b)
C.b.jX(y,v.a,v.b,5123,0)
C.b.aD(y,u,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.h]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ag(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(y,", ")+"\nAttrs:   "+C.a.l(u,", ")},
$isok:1},c1:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bd(this.c)+"'")+"]"}},bi:{"^":"a;a",
gdC:function(a){var z,y
z=this.a
y=(z&$.$get$aB().a)!==0?3:0
if((z&$.$get$aU().a)!==0)y+=3
if((z&$.$get$aT().a)!==0)y+=3
if((z&$.$get$aV().a)!==0)y+=2
if((z&$.$get$aW().a)!==0)y+=3
if((z&$.$get$bJ().a)!==0)y+=3
if((z&$.$get$bK().a)!==0)y+=4
if((z&$.$get$bj().a)!==0)++y
return(z&$.$get$aS().a)!==0?y+4:y},
jD:function(a){var z,y,x
z=$.$get$aB()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aU()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aT()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aV()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aW()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bJ()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bK()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bj()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aS()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fX()},
A:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bi))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.h])
y=this.a
if((y&$.$get$aB().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aU().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aT().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aV().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aW().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bJ().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bK().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bj().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aS().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.l(z,"|")},
m:{
ap:function(a){return new Z.bi(a)}}}}],["","",,D,{"^":"",ei:{"^":"a;"},bz:{"^":"a;0a,0b,0c,0d",
sal:function(a){this.a=H.k(a,"$isb",[{func:1,ret:-1,args:[D.x]}],"$asb")},
sbk:function(a){this.b=H.k(a,"$isb",[{func:1,ret:-1,args:[D.x]}],"$asb")},
h:function(a,b){var z={func:1,ret:-1,args:[D.x]}
H.l(b,z)
if(this.a==null)this.sal(H.c([],[z]))
z=this.a;(z&&C.a).h(z,b)},
L:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.x]})
z=this.a
z=z==null?null:C.a.Y(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).L(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.Y(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).L(z,b)||y}return y},
I:function(a){var z,y,x,w
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
return!0}if(!x)C.a.a0(y,new D.iG(z))
y=this.b
if(!(y==null))C.a.a0(y,new D.iH(z))
z=this.b
if(!(z==null))C.a.sp(z,0)
return!0},
cX:function(){return this.I(null)},
kN:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.I(y)}}},
ax:function(){return this.kN(!0,!1)},
m:{
F:function(){var z=new D.bz()
z.sal(null)
z.sbk(null)
z.c=null
z.d=0
return z}}},iG:{"^":"m:23;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.x]})
z=this.a.a
z.b
a.$1(z)}},iH:{"^":"m:23;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.x]})
z=this.a.a
z.b
a.$1(z)}},x:{"^":"a;a,0b"},c2:{"^":"x;c,d,a,0b,$ti"},c3:{"^":"x;c,d,a,0b,$ti"},C:{"^":"x;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",eg:{"^":"a;a,b",
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eg))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},eH:{"^":"a;a,b",
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eH))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},j6:{"^":"a;0a,0b,0c,0d",
siu:function(a){this.d=H.k(a,"$isfd",[P.n],"$asfd")},
kz:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
kv:function(a){this.c=a.b
this.d.L(0,a.a)
return!1}},eL:{"^":"cy;x,y,c,d,e,a,0b"},jm:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
bh:function(a,b){var z,y,x,w,v,u,t,s
z=new P.am(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.u()
v=b.b
u=this.ch
if(typeof v!=="number")return v.u()
t=new V.a4(y.a+x*w,y.b+v*u)
u=this.a.gb5()
s=new X.bE(a,V.aO(),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
dd:function(a,b){this.r=a.a
return!1},
bw:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.fL()
if(typeof z!=="number")return z.ca()
this.r=(z&~y)>>>0
return!1},
bv:function(a,b){var z=this.d
if(z==null)return!1
z.I(this.bh(a,b))
return!0},
kA:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gb5()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.u()
t=a.b
s=this.cy
if(typeof t!=="number")return t.u()
w=new X.dl(new V.V(v*u,t*s),y,x,new P.am(w,!1),this)
w.b=!0
z.I(w)
return!0},
ic:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.am(Date.now(),!1)
y=this.f
x=new X.eL(c,a,this.a.gb5(),b,z,this)
x.b=!0
y.I(x)
this.y=z
this.x=V.aO()}},aG:{"^":"a;a,b,c",
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aG))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},bE:{"^":"cy;x,y,z,Q,ch,c,d,e,a,0b"},jB:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
cn:function(a,b,c){var z,y,x
z=new P.am(Date.now(),!1)
y=this.a.gb5()
x=new X.bE(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
dd:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.I(this.cn(a,b,!0))
return!0},
bw:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.fL()
if(typeof z!=="number")return z.ca()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.I(this.cn(a,b,!0))
return!0},
bv:function(a,b){var z=this.d
if(z==null)return!1
z.I(this.cn(a,b,!1))
return!0},
kB:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gb5()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.u()
u=a.b
t=this.ch
if(typeof u!=="number")return u.u()
x=new X.dl(new V.V(w*v,u*t),y,b,new P.am(x,!1),this)
x.b=!0
z.I(x)
return!0},
geE:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
gc9:function(){var z=this.c
if(z==null){z=D.F()
this.c=z}return z},
gfc:function(){var z=this.d
if(z==null){z=D.F()
this.d=z}return z}},dl:{"^":"cy;x,c,d,e,a,0b"},cy:{"^":"x;"},fw:{"^":"cy;x,y,z,Q,ch,c,d,e,a,0b"},kM:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
bh:function(a,b){var z,y,x,w
H.k(a,"$isb",[V.a4],"$asb")
z=new P.am(Date.now(),!1)
y=a.length>0?a[0]:V.aO()
x=this.a.gb5()
w=new X.fw(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
ky:function(a){var z
H.k(a,"$isb",[V.a4],"$asb")
z=this.b
if(z==null)return!1
z.I(this.bh(a,!0))
return!0},
kw:function(a){var z
H.k(a,"$isb",[V.a4],"$asb")
z=this.c
if(z==null)return!1
z.I(this.bh(a,!0))
return!0},
kx:function(a){var z
H.k(a,"$isb",[V.a4],"$asb")
z=this.d
if(z==null)return!1
z.I(this.bh(a,!1))
return!0}},la:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
shE:function(a){this.z=H.k(a,"$isb",[[P.dt,P.a]],"$asb")},
gb5:function(){var z=this.a
return V.f8(0,0,C.q.gez(z).c,C.q.gez(z).d)},
dS:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.eH(z,new X.aG(y,a.altKey,a.shiftKey))},
b1:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aG(y,a.altKey,a.shiftKey)},
cG:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aG(y,a.altKey,a.shiftKey)},
aL:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.N()
v=z.top
if(typeof x!=="number")return x.N()
return new V.a4(y-w,x-v)},
bl:function(a){return new V.V(a.movementX,a.movementY)},
cA:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.a4])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
t=C.j.a9(u.pageX)
C.j.a9(u.pageY)
s=z.left
C.j.a9(u.pageX)
C.a.h(y,new V.a4(t-s,C.j.a9(u.pageY)-z.top))}return y},
aJ:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.eg(z,new X.aG(y,a.altKey,a.shiftKey))},
cr:function(a){var z,y,x,w,v,u
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
lf:[function(a){this.f=!0},"$1","gi8",4,0,12],
l9:[function(a){this.f=!1},"$1","gi2",4,0,12],
lc:[function(a){H.d(a,"$isax")
if(this.f&&this.cr(a))a.preventDefault()},"$1","gi5",4,0,4],
lh:[function(a){var z
H.d(a,"$isbC")
if(!this.f)return
z=this.dS(a)
this.b.kz(z)},"$1","gia",4,0,24],
lg:[function(a){var z
H.d(a,"$isbC")
if(!this.f)return
z=this.dS(a)
this.b.kv(z)},"$1","gi9",4,0,24],
lj:[function(a){var z,y,x,w
H.d(a,"$isax")
z=this.a
z.focus()
this.f=!0
this.b1(a)
if(this.x){y=this.aJ(a)
x=this.bl(a)
if(this.d.dd(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aJ(a)
w=this.aL(a)
if(this.c.dd(y,w))a.preventDefault()},"$1","gie",4,0,4],
ll:[function(a){var z,y,x
H.d(a,"$isax")
this.b1(a)
z=this.aJ(a)
if(this.x){y=this.bl(a)
if(this.d.bw(z,y))a.preventDefault()
return}if(this.r)return
x=this.aL(a)
if(this.c.bw(z,x))a.preventDefault()},"$1","gih",4,0,4],
le:[function(a){var z,y,x
H.d(a,"$isax")
if(!this.cr(a)){this.b1(a)
z=this.aJ(a)
if(this.x){y=this.bl(a)
if(this.d.bw(z,y))a.preventDefault()
return}if(this.r)return
x=this.aL(a)
if(this.c.bw(z,x))a.preventDefault()}},"$1","gi7",4,0,4],
lk:[function(a){var z,y,x
H.d(a,"$isax")
this.b1(a)
z=this.aJ(a)
if(this.x){y=this.bl(a)
if(this.d.bv(z,y))a.preventDefault()
return}if(this.r)return
x=this.aL(a)
if(this.c.bv(z,x))a.preventDefault()},"$1","gig",4,0,4],
ld:[function(a){var z,y,x
H.d(a,"$isax")
if(!this.cr(a)){this.b1(a)
z=this.aJ(a)
if(this.x){y=this.bl(a)
if(this.d.bv(z,y))a.preventDefault()
return}if(this.r)return
x=this.aL(a)
if(this.c.bv(z,x))a.preventDefault()}},"$1","gi6",4,0,4],
lm:[function(a){var z,y
H.d(a,"$isbL")
this.b1(a)
z=new V.V((a&&C.O).gjU(a),C.O.gjV(a)).v(0,180)
if(this.x){if(this.d.kA(z))a.preventDefault()
return}if(this.r)return
y=this.aL(a)
if(this.c.kB(z,y))a.preventDefault()},"$1","gii",4,0,47],
ln:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.aJ(this.y)
x=this.aL(this.y)
this.d.ic(y,x,z)}},"$1","gij",4,0,12],
lv:[function(a){var z
H.d(a,"$isbh")
this.a.focus()
this.f=!0
this.cG(a)
z=this.cA(a)
if(this.e.ky(z))a.preventDefault()},"$1","gis",4,0,13],
lt:[function(a){var z
H.d(a,"$isbh")
this.cG(a)
z=this.cA(a)
if(this.e.kw(z))a.preventDefault()},"$1","giq",4,0,13],
lu:[function(a){var z
H.d(a,"$isbh")
this.cG(a)
z=this.cA(a)
if(this.e.kx(z))a.preventDefault()},"$1","gir",4,0,13]}}],["","",,D,{"^":"",cp:{"^":"a;0a,0b,0c,0d",
gt:function(){var z=this.d
if(z==null){z=D.F()
this.d=z}return z},
aW:[function(a){var z
H.d(a,"$isx")
z=this.d
if(!(z==null))z.I(a)},function(){return this.aW(null)},"l0","$1","$0","ghb",0,2,1],
$isa8:1,
$isaH:1},a8:{"^":"a;",$isaH:1},j8:{"^":"W;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
sha:function(a){this.e=H.k(a,"$isb",[D.cp],"$asb")},
shc:function(a){this.f=H.k(a,"$isb",[D.f2],"$asb")},
shd:function(a){this.r=H.k(a,"$isb",[D.fg],"$asb")},
she:function(a){this.x=H.k(a,"$isb",[D.fp],"$asb")},
shf:function(a){this.y=H.k(a,"$isb",[D.fq],"$asb")},
shg:function(a){this.z=H.k(a,"$isb",[D.fr],"$asb")},
gt:function(){var z=this.Q
if(z==null){z=D.F()
this.Q=z}return z},
aW:function(a){var z=this.Q
if(!(z==null))z.I(a)},
ib:[function(a){var z
H.d(a,"$isx")
z=this.ch
if(!(z==null))z.I(a)},function(){return this.ib(null)},"li","$1","$0","ge5",0,2,1],
lo:[function(a){var z,y,x
H.k(a,"$iso",[D.a8],"$aso")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.z)(a),++y){x=a[y]
if(x==null||this.h9(x))return!1}return!0},"$1","gik",4,0,39],
l6:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a8
H.k(b,"$iso",[z],"$aso")
for(y=b.length,x=this.ge5(),w={func:1,ret:-1,args:[D.x]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=H.d(b[u],"$isa8")
if(t instanceof D.cp)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bz()
s.sal(null)
s.sbk(null)
s.c=null
s.d=0
t.d=s}H.l(x,w)
if(s.a==null)s.sal(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}z=new D.c2(a,b,this,[z])
z.b=!0
this.aW(z)},"$2","gi_",8,0,26],
lq:[function(a,b){var z,y,x,w
z=D.a8
H.k(b,"$iso",[z],"$aso")
for(y=b.gU(b),x=this.ge5();y.D();){w=y.gK()
C.a.L(this.e,w)
w.gt().L(0,x)}z=new D.c3(a,b,this,[z])
z.b=!0
this.aW(z)},"$2","gim",8,0,26],
h9:function(a){var z=C.a.Y(this.e,a)
return z},
$aso:function(){return[D.a8]},
$asW:function(){return[D.a8]}},f2:{"^":"a;",$isa8:1,$isaH:1},fg:{"^":"a;",$isa8:1,$isaH:1},fp:{"^":"a;",$isa8:1,$isaH:1},fq:{"^":"a;",$isa8:1,$isaH:1},fr:{"^":"a;",$isa8:1,$isaH:1}}],["","",,V,{"^":"",
o4:[function(a,b){if(typeof b!=="number")return b.N()
if(typeof a!=="number")return H.A(a)
return Math.abs(b-a)<=1e-9},"$2","jz",8,0,37],
cX:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.j.bF(a-b,z)
return(a<0?a+z:a)+b},
I:function(a,b,c){if(a==null)return C.c.ao("null",c)
return C.c.ao(C.j.fp($.p.$2(a,0)?0:a,b),c+b+1)},
bq:function(a,b,c){var z,y,x,w,v,u
H.k(a,"$isb",[P.q],"$asb")
z=H.c([],[P.h])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.z)(a),++w){v=V.I(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.f(z,u)
C.a.q(z,u,C.c.ao(z[u],x))}return z},
bV:function(a,b){return C.j.kU(Math.pow(b,C.a_.d3(Math.log(H.n7(a))/Math.log(b))))},
a6:{"^":"a;a,b,c",
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}},
au:{"^":"a;a,b,c,d",
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.au))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+", "+V.I(this.d,3,0)+"]"}},
eQ:{"^":"a;a,b,c,d,e,f,r,x,y",
aj:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.q])
return z},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eQ))return!1
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
y=V.bq(H.c([this.a,this.d,this.r],z),3,0)
x=V.bq(H.c([this.b,this.e,this.x],z),3,0)
w=V.bq(H.c([this.c,this.f,this.y],z),3,0)
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
an:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
aj:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.q])
return z},
d7:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.p.$2(a2,0))return V.ba()
a3=1/a2
a4=-w
a5=-i
return V.aF((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
u:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.d(a7,"$isan")
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
return V.aF(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
dm:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.E(this.a*z+this.b*y+this.c*x,this.e*z+this.f*y+this.r*x,this.y*z+this.z*y+this.Q*x)},
bD:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.T(this.a*z+this.b*y+this.c*x+this.d,this.e*z+this.f*y+this.r*x+this.x,this.y*z+this.z*y+this.Q*x+this.ch)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.an))return!1
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
i:function(a){return this.S()},
f1:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.q]
y=V.bq(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bq(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bq(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bq(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
S:function(){return this.f1("",3,0)},
G:function(a){return this.f1(a,3,0)},
m:{
ba:function(){var z=$.eW
if(z==null){z=V.aF(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.eW=z}return z},
aF:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.an(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
eV:function(a,b,c){return V.aF(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
eS:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aF(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
eT:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aF(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
eU:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aF(z,-y,0,0,y,z,0,0,0,0,1,0,0,0,0,1)},
eR:function(a,b,c){var z,y,x,w,v,u,t,s
z=c.v(0,Math.sqrt(c.F(c)))
y=b.aN(z)
x=y.v(0,Math.sqrt(y.F(y)))
w=z.aN(x)
v=new V.E(a.a,a.b,a.c)
u=x.W(0).F(v)
t=w.W(0).F(v)
s=z.W(0).F(v)
return V.aF(x.a,w.a,z.a,u,x.b,w.b,z.b,t,x.c,w.c,z.c,s,0,0,0,1)}}},
a4:{"^":"a;a,b",
N:function(a,b){return new V.a4(this.a-b.a,this.b-b.b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"},
m:{
aO:function(){var z=$.f3
if(z==null){z=new V.a4(0,0)
$.f3=z}return z}}},
T:{"^":"a;a,b,c",
H:function(a,b){return new V.T(this.a+b.a,this.b+b.b,this.c+b.c)},
N:function(a,b){return new V.T(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){return new V.T(this.a*b,this.b*b,this.c*b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"},
m:{
f4:function(){var z=$.bF
if(z==null){z=new V.T(0,0,0)
$.bF=z}return z}}},
aP:{"^":"a;a,b,c,d",
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aP))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+", "+V.I(this.d,3,0)+"]"}},
f7:{"^":"a;a,b,c,d",
gah:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.f7))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
z=b.d
if(!$.p.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+", "+V.I(this.d,3,0)+"]"},
m:{
fa:function(){var z=$.f9
if(z==null){z=V.f8(0,0,1,1)
$.f9=z}return z},
f8:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.f7(a,b,c,d)}}},
V:{"^":"a;a,b",
kk:[function(a){return Math.sqrt(this.F(this))},"$0","gp",1,0,19],
F:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.u()
if(typeof y!=="number")return H.A(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.u()
if(typeof w!=="number")return H.A(w)
return z*y+x*w},
u:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.u()
y=this.b
if(typeof y!=="number")return y.u()
return new V.V(z*b,y*b)},
v:function(a,b){var z,y
if($.p.$2(b,0)){z=$.fO
if(z==null){z=new V.V(0,0)
$.fO=z}return z}z=this.a
if(typeof z!=="number")return z.v()
y=this.b
if(typeof y!=="number")return y.v()
return new V.V(z/b,y/b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"}},
E:{"^":"a;a,b,c",
kk:[function(a){return Math.sqrt(this.F(this))},"$0","gp",1,0,19],
F:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
d8:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.E(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aN:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.E(z*y-x*w,x*v-u*y,u*w-z*v)},
H:function(a,b){return new V.E(this.a+b.a,this.b+b.b,this.c+b.c)},
W:function(a){return new V.E(-this.a,-this.b,-this.c)},
u:function(a,b){return new V.E(this.a*b,this.b*b,this.c*b)},
v:function(a,b){if($.p.$2(b,0))return V.bI()
return new V.E(this.a/b,this.b/b,this.c/b)},
fa:function(){if(!$.p.$2(0,this.a))return!1
if(!$.p.$2(0,this.b))return!1
if(!$.p.$2(0,this.c))return!1
return!0},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.E))return!1
z=b.a
if(!$.p.$2(z,this.a))return!1
z=b.b
if(!$.p.$2(z,this.b))return!1
z=b.c
if(!$.p.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"},
m:{
bI:function(){var z=$.fS
if(z==null){z=new V.E(0,0,0)
$.fS=z}return z},
fT:function(){var z=$.fR
if(z==null){z=new V.E(0,1,0)
$.fR=z}return z},
fU:function(){var z=$.cI
if(z==null){z=new V.E(0,0,1)
$.cI=z}return z}}}}],["","",,U,{"^":"",ih:{"^":"ei;0a,0b,0c,0d,0e,0f,0r,0x,0y",
cj:function(a){var z=V.cX(a,this.c,this.b)
return z},
gt:function(){var z=this.y
if(z==null){z=D.F()
this.y=z}return z},
M:function(a){var z=this.y
if(!(z==null))z.I(a)},
sds:function(a,b){},
sd9:function(a){var z,y
z=this.b
if(!$.p.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.cj(z)}z=new D.C("maximumLocation",y,this.b,this,[P.q])
z.b=!0
this.M(z)}},
sdc:function(a){var z,y
z=this.c
if(!$.p.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.cj(z)}z=new D.C("minimumLocation",y,this.c,this,[P.q])
z.b=!0
this.M(z)}},
sa4:function(a,b){var z,y
b=this.cj(b)
z=this.d
if(!$.p.$2(z,b)){y=this.d
this.d=b
z=new D.C("location",y,b,this,[P.q])
z.b=!0
this.M(z)}},
sda:function(a){var z,y,x
z=this.e
if(!$.p.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.C("maximumVelocity",y,a,this,[P.q])
z.b=!0
this.M(z)}},
sX:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.p.$2(z,a)){x=this.f
this.f=a
z=new D.C("velocity",x,a,this,[P.q])
z.b=!0
this.M(z)}},
scV:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.p.$2(z,a)){y=this.x
this.x=a
z=new D.C("dampening",y,a,this,[P.q])
z.b=!0
this.M(z)}},
az:function(a){var z,y,x,w
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
y=w}this.sX(y)}},
m:{
d9:function(){var z=new U.ih()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},ek:{"^":"ad;0a,0b",
gt:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
aS:function(a,b){return this.a},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ek))return!1
return J.P(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")},
m:{
da:function(a){var z=new U.ek()
z.a=a
return z}}},ez:{"^":"W;0e,0f,0r,0a,0b,0c,0d",
gt:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z},
M:[function(a){var z
H.d(a,"$isx")
z=this.e
if(!(z==null))z.I(a)},function(){return this.M(null)},"as","$1","$0","gb0",0,2,1],
l1:[function(a,b){var z,y,x,w,v,u,t,s
z=U.ad
H.k(b,"$iso",[z],"$aso")
for(y=b.length,x=this.gb0(),w={func:1,ret:-1,args:[D.x]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){s=t.gt()
s.toString
H.l(x,w)
if(s.a==null)s.sal(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.c2(a,b,this,[z])
z.b=!0
this.M(z)},"$2","ghh",8,0,28],
lp:[function(a,b){var z,y,x
z=U.ad
H.k(b,"$iso",[z],"$aso")
for(y=b.gU(b),x=this.gb0();y.D();)y.gK().gt().L(0,x)
z=new D.c3(a,b,this,[z])
z.b=!0
this.M(z)},"$2","gil",8,0,28],
aS:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(typeof z!=="number")return z.V()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.at(z,z.length,0,[H.t(z,0)]),x=null;z.D();){y=z.d
if(y!=null){w=y.aS(a,b)
if(w!=null)x=x==null?w:w.u(0,x)}}this.f=x==null?V.ba():x
z=this.e
if(!(z==null))z.ax()}return this.f},
A:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ez))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.f(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.f(w,y)
if(!J.P(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$aso:function(){return[U.ad]},
$asW:function(){return[U.ad]},
$isad:1,
m:{
eA:function(a){var z=new U.ez()
z.bH(U.ad)
z.bf(z.ghh(),z.gil())
z.e=null
z.f=V.ba()
z.r=0
return z}}},ad:{"^":"ei;"},fb:{"^":"ad;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gt:function(){var z=this.y
if(z==null){z=D.F()
this.y=z}return z},
M:function(a){var z=this.y
if(!(z==null))z.I(a)},
sfz:function(a){var z,y
a=V.cX(a,0,6.283185307179586)
z=this.a
if(!$.p.$2(z,a)){y=this.a
this.a=a
z=new D.C("yaw",y,a,this,[P.q])
z.b=!0
this.M(z)}},
sfh:function(a){var z,y
a=V.cX(a,0,6.283185307179586)
z=this.b
if(!$.p.$2(z,a)){y=this.b
this.b=a
z=new D.C("pitch",y,a,this,[P.q])
z.b=!0
this.M(z)}},
sfk:function(a){var z,y
a=V.cX(a,0,6.283185307179586)
z=this.c
if(!$.p.$2(z,a)){y=this.c
this.c=a
z=new D.C("roll",y,a,this,[P.q])
z.b=!0
this.M(z)}},
aS:function(a,b){var z,y
z=this.r
y=a.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.d
this.sfz(this.a+this.d*a.y)
this.sfh(this.b+this.e*a.y)
this.sfk(this.c+this.f*a.y)
this.x=V.eU(this.c).u(0,V.eT(this.b)).u(0,V.eS(this.a))
z=this.y
if(!(z==null))z.ax()}return this.x},
A:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.fb))return!1
z=this.a
y=b.a
if(!$.p.$2(z,y))return!1
z=this.b
y=b.b
if(!$.p.$2(z,y))return!1
z=this.c
y=b.c
if(!$.p.$2(z,y))return!1
z=this.d
y=b.d
if(!$.p.$2(z,y))return!1
z=this.e
y=b.e
if(!$.p.$2(z,y))return!1
z=this.f
y=b.f
if(!$.p.$2(z,y))return!1
return!0},
i:function(a){return"Rotater: ["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"], ["+V.I(this.d,3,0)+", "+V.I(this.e,3,0)+", "+V.I(this.f,3,0)+"]"}},lb:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gt:function(){var z=this.cy
if(z==null){z=D.F()
this.cy=z}return z},
M:[function(a){var z
H.d(a,"$isx")
z=this.cy
if(!(z==null))z.I(a)},function(){return this.M(null)},"as","$1","$0","gb0",0,2,1],
bn:function(a){if(this.a!=null)return!1
this.a=a
a.c.geE().h(0,this.gcs())
this.a.c.gfc().h(0,this.gct())
this.a.c.gc9().h(0,this.gcu())
return!0},
hW:[function(a){H.d(a,"$isx")
if(!J.P(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gcs",4,0,2],
hX:[function(a){var z,y,x,w,v,u,t
a=H.i(H.d(a,"$isx"),"$isbE")
if(!this.y)return
if(this.x){z=a.d.N(0,a.y)
z=new V.V(z.a,z.b)
z=z.F(z)
y=this.r
if(typeof y!=="number")return H.A(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.N(0,a.y)
z=new V.V(y.a,y.b).u(0,2).v(0,z.gah())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.u()
x=this.e
if(typeof x!=="number")return H.A(x)
y.sX(z*10*x)}else{z=a.c
y=a.d
x=y.N(0,a.y)
w=new V.V(x.a,x.b).u(0,2).v(0,z.gah())
x=this.b
v=w.a
if(typeof v!=="number")return v.W()
u=this.e
if(typeof u!=="number")return H.A(u)
t=this.z
if(typeof t!=="number")return H.A(t)
x.sa4(0,-v*u+t)
this.b.sX(0)
y=y.N(0,a.z)
this.Q=new V.V(y.a,y.b).u(0,2).v(0,z.gah())}this.as()},"$1","gct",4,0,2],
hY:[function(a){var z,y,x
H.d(a,"$isx")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.F(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.u()
x=this.e
if(typeof x!=="number")return H.A(x)
z.sX(y*10*x)
this.as()}},"$1","gcu",4,0,2],
aS:function(a,b){var z,y,x
z=this.ch
y=a.e
if(typeof z!=="number")return z.V()
if(z<y){this.ch=y
x=a.y
this.b.az(x)
this.cx=V.eU(this.b.d)}return this.cx},
$isad:1},lc:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gt:function(){var z=this.fx
if(z==null){z=D.F()
this.fx=z}return z},
M:[function(a){var z
H.d(a,"$isx")
z=this.fx
if(!(z==null))z.I(a)},function(){return this.M(null)},"as","$1","$0","gb0",0,2,1],
bn:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.geE().h(0,this.gcs())
this.a.c.gfc().h(0,this.gct())
this.a.c.gc9().h(0,this.gcu())
z=this.a.d
y=z.f
if(y==null){y=D.F()
z.f=y
z=y}else z=y
z.h(0,this.ghU())
z=this.a.d
y=z.d
if(y==null){y=D.F()
z.d=y
z=y}else z=y
z.h(0,this.ghV())
z=this.a.e
y=z.b
if(y==null){y=D.F()
z.b=y
z=y}else z=y
z.h(0,this.gj4())
z=this.a.e
y=z.d
if(y==null){y=D.F()
z.d=y
z=y}else z=y
z.h(0,this.gj3())
z=this.a.e
y=z.c
if(y==null){y=D.F()
z.c=y
z=y}else z=y
z.h(0,this.gj2())
return!0},
aB:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.W()
z=-z}if(this.r){if(typeof y!=="number")return y.W()
y=-y}return new V.V(z,y)},
hW:[function(a){a=H.i(H.d(a,"$isx"),"$isbE")
if(!J.P(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gcs",4,0,2],
hX:[function(a){var z,y,x,w,v,u,t
a=H.i(H.d(a,"$isx"),"$isbE")
if(!this.cx)return
if(this.ch){z=a.d.N(0,a.y)
z=new V.V(z.a,z.b)
z=z.F(z)
y=this.Q
if(typeof y!=="number")return H.A(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.N(0,a.y)
z=this.aB(new V.V(y.a,y.b).u(0,2).v(0,z.gah()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.W()
x=this.y
if(typeof x!=="number")return H.A(x)
y.sX(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.W()
y=this.x
if(typeof y!=="number")return H.A(y)
x.sX(-z*10*y)}else{z=a.c
y=a.d
x=y.N(0,a.y)
w=this.aB(new V.V(x.a,x.b).u(0,2).v(0,z.gah()))
x=this.c
v=w.a
if(typeof v!=="number")return v.W()
u=this.y
if(typeof u!=="number")return H.A(u)
t=this.cy
if(typeof t!=="number")return H.A(t)
x.sa4(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.W()
v=this.x
if(typeof v!=="number")return H.A(v)
x=this.db
if(typeof x!=="number")return H.A(x)
t.sa4(0,-u*v+x)
this.b.sX(0)
this.c.sX(0)
y=y.N(0,a.z)
this.dx=this.aB(new V.V(y.a,y.b).u(0,2).v(0,z.gah()))}this.as()},"$1","gct",4,0,2],
hY:[function(a){var z,y,x
H.d(a,"$isx")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.F(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.W()
x=this.y
if(typeof x!=="number")return H.A(x)
z.sX(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.W()
z=this.x
if(typeof z!=="number")return H.A(z)
x.sX(-y*10*z)
this.as()}},"$1","gcu",4,0,2],
l3:[function(a){if(H.i(H.d(a,"$isx"),"$iseL").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","ghU",4,0,2],
l4:[function(a){var z,y,x,w,v,u,t
a=H.i(H.d(a,"$isx"),"$isbE")
if(!J.P(this.d,a.x.b))return
z=a.c
y=a.d
x=y.N(0,a.y)
w=this.aB(new V.V(x.a,x.b).u(0,2).v(0,z.gah()))
x=this.c
v=w.a
if(typeof v!=="number")return v.W()
u=this.y
if(typeof u!=="number")return H.A(u)
t=this.cy
if(typeof t!=="number")return H.A(t)
x.sa4(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.W()
v=this.x
if(typeof v!=="number")return H.A(v)
x=this.db
if(typeof x!=="number")return H.A(x)
t.sa4(0,-u*v+x)
this.b.sX(0)
this.c.sX(0)
y=y.N(0,a.z)
this.dx=this.aB(new V.V(y.a,y.b).u(0,2).v(0,z.gah()))
this.as()},"$1","ghV",4,0,2],
lz:[function(a){H.d(a,"$isx")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gj4",4,0,2],
ly:[function(a){var z,y,x,w,v,u,t
a=H.i(H.d(a,"$isx"),"$isfw")
if(!this.cx)return
if(this.ch){z=a.d.N(0,a.y)
z=new V.V(z.a,z.b)
z=z.F(z)
y=this.Q
if(typeof y!=="number")return H.A(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.N(0,a.y)
z=this.aB(new V.V(y.a,y.b).u(0,2).v(0,z.gah()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.W()
x=this.y
if(typeof x!=="number")return H.A(x)
y.sX(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.W()
y=this.x
if(typeof y!=="number")return H.A(y)
x.sX(-z*10*y)}else{z=a.c
y=a.d
x=y.N(0,a.y)
w=this.aB(new V.V(x.a,x.b).u(0,2).v(0,z.gah()))
x=this.c
v=w.a
if(typeof v!=="number")return v.W()
u=this.y
if(typeof u!=="number")return H.A(u)
t=this.cy
if(typeof t!=="number")return H.A(t)
x.sa4(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.W()
v=this.x
if(typeof v!=="number")return H.A(v)
x=this.db
if(typeof x!=="number")return H.A(x)
t.sa4(0,-u*v+x)
this.b.sX(0)
this.c.sX(0)
y=y.N(0,a.z)
this.dx=this.aB(new V.V(y.a,y.b).u(0,2).v(0,z.gah()))}this.as()},"$1","gj3",4,0,2],
lx:[function(a){var z,y,x
H.d(a,"$isx")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.F(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.W()
x=this.y
if(typeof x!=="number")return H.A(x)
z.sX(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.W()
z=this.x
if(typeof z!=="number")return H.A(z)
x.sX(-y*10*z)
this.as()}},"$1","gj2",4,0,2],
aS:function(a,b){var z,y,x
z=this.dy
y=a.e
if(typeof z!=="number")return z.V()
if(z<y){this.dy=y
x=a.y
this.c.az(x)
this.b.az(x)
this.fr=V.eS(this.b.d).u(0,V.eT(this.c.d))}return this.fr},
$isad:1},ld:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gt:function(){var z=this.r
if(z==null){z=D.F()
this.r=z}return z},
M:function(a){var z=this.r
if(!(z==null))z.I(a)},
bn:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.F()
z.e=y
z=y}else z=y
y=this.ghZ()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.F()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
l5:[function(a){var z,y,x,w
H.d(a,"$isx")
if(!J.P(this.b,this.a.b.c))return
H.i(a,"$isdl")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.u()
w=z+y*x
if(z!==w){this.d=w
z=new D.C("zoom",z,w,this,[P.q])
z.b=!0
this.M(z)}},"$1","ghZ",4,0,2],
aS:function(a,b){var z,y,x
z=this.e
y=a.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aF(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isad:1}}],["","",,M,{"^":"",ii:{"^":"W;0e,0f,0a,0b,0c,0d",
gt:function(){var z=this.f
if(z==null){z=D.F()
this.f=z}return z},
a6:[function(a){var z
H.d(a,"$isx")
z=this.f
if(!(z==null))z.I(a)},function(){return this.a6(null)},"dG","$1","$0","ga1",0,2,1],
lr:[function(a,b){var z,y,x,w,v,u,t,s
z=M.aJ
H.k(b,"$iso",[z],"$aso")
for(y=b.length,x=this.ga1(),w={func:1,ret:-1,args:[D.x]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){s=t.gt()
s.toString
H.l(x,w)
if(s.a==null)s.sal(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.c2(a,b,this,[z])
z.b=!0
this.a6(z)},"$2","gio",8,0,29],
ls:[function(a,b){var z,y,x
z=M.aJ
H.k(b,"$iso",[z],"$aso")
for(y=b.gU(b),x=this.ga1();y.D();)y.gK().gt().L(0,x)
z=new D.c3(a,b,this,[z])
z.b=!0
this.a6(z)},"$2","gip",8,0,29],
ai:function(a){var z,y
if(this.e)return
this.e=!0
for(z=this.a,z=new J.at(z,z.length,0,[H.t(z,0)]);z.D();){y=z.d
if(!(y==null))y.ai(a)}this.e=!1},
$aso:function(){return[M.aJ]},
$asW:function(){return[M.aJ]},
$isaJ:1},io:{"^":"a;0a,0b,0c,0d,0e,0f",
gt:function(){var z=this.f
if(z==null){z=D.F()
this.f=z}return z},
a6:[function(a){var z
H.d(a,"$isx")
z=this.f
if(!(z==null))z.I(a)},function(){return this.a6(null)},"dG","$1","$0","ga1",0,2,1],
sb4:function(a){var z,y
if(a==null)a=new X.iX()
z=this.a
if(z!==a){if(z!=null)z.gt().L(0,this.ga1())
y=this.a
this.a=a
a.gt().h(0,this.ga1())
z=new D.C("camera",y,this.a,this,[X.cn])
z.b=!0
this.a6(z)}},
sbz:function(a,b){var z,y
if(b==null)b=X.ey(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gt().L(0,this.ga1())
y=this.b
this.b=b
b.gt().h(0,this.ga1())
z=new D.C("target",y,this.b,this,[X.cD])
z.b=!0
this.a6(z)}},
sbd:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gt().L(0,this.ga1())
y=this.c
this.c=a
if(a!=null)a.gt().h(0,this.ga1())
z=new D.C("technique",y,this.c,this,[O.bH])
z.b=!0
this.a6(z)}},
ai:function(a){a.df(this.c)
this.b.a7(a)
this.a.a7(a)
this.d.az(a)
this.d.ai(a)
this.a.ay(a)
this.b.ay(a)
a.de()},
$isaJ:1},iE:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
shw:function(a,b){this.d=H.k(b,"$isW",[E.av],"$asW")},
a6:[function(a){var z
H.d(a,"$isx")
z=this.x
if(!(z==null))z.I(a)},function(){return this.a6(null)},"dG","$1","$0","ga1",0,2,1],
la:[function(a,b){var z,y,x,w,v,u,t,s
z=E.av
H.k(b,"$iso",[z],"$aso")
for(y=b.length,x=this.ga1(),w={func:1,ret:-1,args:[D.x]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){if(t.gar()==null){s=new D.bz()
s.sal(null)
s.sbk(null)
s.c=null
s.d=0
t.sar(s)}s=t.gar()
s.toString
H.l(x,w)
if(s.a==null)s.sal(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.c2(a,b,this,[z])
z.b=!0
this.a6(z)},"$2","gi3",8,0,7],
lb:[function(a,b){var z,y,x
z=E.av
H.k(b,"$iso",[z],"$aso")
for(y=b.gU(b),x=this.ga1();y.D();)y.gK().gt().L(0,x)
z=new D.c3(a,b,this,[z])
z.b=!0
this.a6(z)},"$2","gi4",8,0,7],
sb4:function(a){var z,y
if(a==null)a=X.dp(2000,1.0471975511965976,null,0.1,null)
z=this.a
if(z!==a){if(z!=null)z.gt().L(0,this.ga1())
y=this.a
this.a=a
a.gt().h(0,this.ga1())
z=new D.C("camera",y,this.a,this,[X.cn])
z.b=!0
this.a6(z)}},
sbz:function(a,b){var z,y
if(b==null)b=X.ey(!0,!0,!1,null,2000,null,0)
z=this.b
if(z!==b){if(z!=null)z.gt().L(0,this.ga1())
y=this.b
this.b=b
b.gt().h(0,this.ga1())
z=new D.C("target",y,this.b,this,[X.cD])
z.b=!0
this.a6(z)}},
sbd:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gt().L(0,this.ga1())
y=this.c
this.c=a
if(a!=null)a.gt().h(0,this.ga1())
z=new D.C("technique",y,this.c,this,[O.bH])
z.b=!0
this.a6(z)}},
gt:function(){var z=this.x
if(z==null){z=D.F()
this.x=z}return z},
ai:function(a){var z
a.df(this.c)
this.b.a7(a)
this.a.a7(a)
z=this.c
if(z!=null)z.az(a)
for(z=this.d.a,z=new J.at(z,z.length,0,[H.t(z,0)]);z.D();)z.d.az(a)
for(z=this.d.a,z=new J.at(z,z.length,0,[H.t(z,0)]);z.D();)z.d.ai(a)
this.a.toString
a.cy.aQ()
a.db.aQ()
this.b.ay(a)
a.de()},
$isaJ:1,
m:{
ew:function(a,b,c,d){var z=new M.iE()
z.shw(0,O.d8(E.av))
z.d.bf(z.gi3(),z.gi4())
z.e=null
z.f=null
z.r=null
z.x=null
z.sb4(a)
z.sbz(0,c)
z.sbd(d)
return z}}},aJ:{"^":"a;"}}],["","",,A,{"^":"",ea:{"^":"a;a,b,c"},i5:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
jZ:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
C.b.eF(w.a,w.c)}},
eC:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
C.b.eD(w.a,w.c)}}},eO:{"^":"cA;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aF,0aw,0bR,0eG,0bS,0bT,0eH,0eI,0bU,0bV,0eJ,0eK,0bW,0bX,0eL,0eM,0bY,0eN,0eO,0bZ,0eP,0eQ,0c_,0c0,0c1,0eR,0eS,0c2,0c3,0eT,0eU,0c4,0eV,0cY,0eW,0cZ,0eX,0d_,0eY,0d0,0eZ,0d1,0f_,0d2,a,b,0c,0d,0e,0f,0r,0x,0y",
shr:function(a){this.r1=H.k(a,"$isb",[A.aA],"$asb")},
shC:function(a){this.cY=H.k(a,"$isb",[A.dA],"$asb")},
sit:function(a){this.cZ=H.k(a,"$isb",[A.dC],"$asb")},
siV:function(a){this.d_=H.k(a,"$isb",[A.dD],"$asb")},
sj6:function(a){this.d0=H.k(a,"$isb",[A.dE],"$asb")},
sj7:function(a){this.d1=H.k(a,"$isb",[A.dF],"$asb")},
sj8:function(a){this.d2=H.k(a,"$isb",[A.dG],"$asb")},
h0:function(a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
this.z=a1
z=new P.ai("")
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
a1.jc(z)
a1.jj(z)
a1.jd(z)
a1.jr(z)
a1.js(z)
a1.jl(z)
a1.jw(z)
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
z=new P.ai("")
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
v.jg(z)
v.jb(z)
v.je(z)
v.jh(z)
v.jp(z)
t=v.dy
if(t){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
v.jn(z)
v.jo(z)}v.jk(z)
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
p=H.c([],[P.h])
if(v.b!==C.d)C.a.h(p,"ambient()")
if(v.c!==C.d)C.a.h(p,"diffuse(norm, litVec)")
if(v.d!==C.d)C.a.h(p,"invDiffuse(norm, litVec)")
if(v.e!==C.d)C.a.h(p,"specular(norm, litVec)")
r=z.a+="   return litClr*("+C.a.l(p," + ")+");\n"
r+="}\n"
z.a=r
z.a=r+"\n"
v.jf(z)
v.jm(z)
v.jq(z)
v.jt(z)
v.ju(z)
v.jv(z)
v.ji(z)}r=z.a+="// === Main ===\n"
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
o=H.c([],[P.h])
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
this.f9(x.charCodeAt(0)==0?x:x,v.charCodeAt(0)==0?v:v)
this.Q=this.x.k(0,"posAttr")
this.cx=this.x.k(0,"normAttr")
this.ch=this.x.k(0,"binmAttr")
this.cy=this.x.k(0,"txt2DAttr")
this.db=this.x.k(0,"txtCubeAttr")
this.dx=this.x.k(0,"bendAttr")
if(a1.fr)this.id=H.i(this.y.n(0,"invViewMat"),"$isaA")
if(y)this.dy=H.i(this.y.n(0,"objMat"),"$isaA")
if(w)this.fr=H.i(this.y.n(0,"viewObjMat"),"$isaA")
this.fy=H.i(this.y.n(0,"projViewObjMat"),"$isaA")
if(a1.x2)this.k1=H.i(this.y.n(0,"txt2DMat"),"$isdB")
if(a1.y1)this.k2=H.i(this.y.n(0,"txtCubeMat"),"$isaA")
if(a1.y2)this.k3=H.i(this.y.n(0,"colorMat"),"$isaA")
this.shr(H.c([],[A.aA]))
y=a1.aF
if(y>0){this.k4=H.d(this.y.n(0,"bendMatCount"),"$isL")
for(m=0;m<y;++m){x=this.r1
w=this.y
v="bendValues["+m+"].mat"
l=w.k(0,v)
if(l==null)H.r(P.u("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.i(l,"$isaA"))}}y=a1.a
if(y!==C.d){this.r2=H.i(this.y.n(0,"emissionClr"),"$isJ")
switch(y){case C.d:break
case C.i:break
case C.e:this.rx=H.i(this.y.n(0,"emissionTxt"),"$isao")
this.x1=H.i(this.y.n(0,"nullEmissionTxt"),"$isL")
break
case C.f:this.ry=H.i(this.y.n(0,"emissionTxt"),"$isaj")
this.x1=H.i(this.y.n(0,"nullEmissionTxt"),"$isL")
break}}y=a1.b
if(y!==C.d){this.x2=H.i(this.y.n(0,"ambientClr"),"$isJ")
switch(y){case C.d:break
case C.i:break
case C.e:this.y1=H.i(this.y.n(0,"ambientTxt"),"$isao")
this.aF=H.i(this.y.n(0,"nullAmbientTxt"),"$isL")
break
case C.f:this.y2=H.i(this.y.n(0,"ambientTxt"),"$isaj")
this.aF=H.i(this.y.n(0,"nullAmbientTxt"),"$isL")
break}}y=a1.c
if(y!==C.d){this.aw=H.i(this.y.n(0,"diffuseClr"),"$isJ")
switch(y){case C.d:break
case C.i:break
case C.e:this.bR=H.i(this.y.n(0,"diffuseTxt"),"$isao")
this.bS=H.i(this.y.n(0,"nullDiffuseTxt"),"$isL")
break
case C.f:this.eG=H.i(this.y.n(0,"diffuseTxt"),"$isaj")
this.bS=H.i(this.y.n(0,"nullDiffuseTxt"),"$isL")
break}}y=a1.d
if(y!==C.d){this.bT=H.i(this.y.n(0,"invDiffuseClr"),"$isJ")
switch(y){case C.d:break
case C.i:break
case C.e:this.eH=H.i(this.y.n(0,"invDiffuseTxt"),"$isao")
this.bU=H.i(this.y.n(0,"nullInvDiffuseTxt"),"$isL")
break
case C.f:this.eI=H.i(this.y.n(0,"invDiffuseTxt"),"$isaj")
this.bU=H.i(this.y.n(0,"nullInvDiffuseTxt"),"$isL")
break}}y=a1.e
if(y!==C.d){this.bX=H.i(this.y.n(0,"shininess"),"$isY")
this.bV=H.i(this.y.n(0,"specularClr"),"$isJ")
switch(y){case C.d:break
case C.i:break
case C.e:this.eJ=H.i(this.y.n(0,"specularTxt"),"$isao")
this.bW=H.i(this.y.n(0,"nullSpecularTxt"),"$isL")
break
case C.f:this.eK=H.i(this.y.n(0,"specularTxt"),"$isaj")
this.bW=H.i(this.y.n(0,"nullSpecularTxt"),"$isL")
break}}switch(a1.f){case C.d:break
case C.i:break
case C.e:this.eL=H.i(this.y.n(0,"bumpTxt"),"$isao")
this.bY=H.i(this.y.n(0,"nullBumpTxt"),"$isL")
break
case C.f:this.eM=H.i(this.y.n(0,"bumpTxt"),"$isaj")
this.bY=H.i(this.y.n(0,"nullBumpTxt"),"$isL")
break}if(a1.dy){this.eN=H.i(this.y.n(0,"envSampler"),"$isaj")
this.eO=H.i(this.y.n(0,"nullEnvTxt"),"$isL")
y=a1.r
if(y!==C.d){this.bZ=H.i(this.y.n(0,"reflectClr"),"$isJ")
switch(y){case C.d:break
case C.i:break
case C.e:this.eP=H.i(this.y.n(0,"reflectTxt"),"$isao")
this.c_=H.i(this.y.n(0,"nullReflectTxt"),"$isL")
break
case C.f:this.eQ=H.i(this.y.n(0,"reflectTxt"),"$isaj")
this.c_=H.i(this.y.n(0,"nullReflectTxt"),"$isL")
break}}y=a1.x
if(y!==C.d){this.c0=H.i(this.y.n(0,"refraction"),"$isY")
this.c1=H.i(this.y.n(0,"refractClr"),"$isJ")
switch(y){case C.d:break
case C.i:break
case C.e:this.eR=H.i(this.y.n(0,"refractTxt"),"$isao")
this.c2=H.i(this.y.n(0,"nullRefractTxt"),"$isL")
break
case C.f:this.eS=H.i(this.y.n(0,"refractTxt"),"$isaj")
this.c2=H.i(this.y.n(0,"nullRefractTxt"),"$isL")
break}}}y=a1.y
if(y!==C.d){this.c3=H.i(this.y.n(0,"alpha"),"$isY")
switch(y){case C.d:break
case C.i:break
case C.e:this.eT=H.i(this.y.n(0,"alphaTxt"),"$isao")
this.c4=H.i(this.y.n(0,"nullAlphaTxt"),"$isL")
break
case C.f:this.eU=H.i(this.y.n(0,"alphaTxt"),"$isaj")
this.c4=H.i(this.y.n(0,"nullAlphaTxt"),"$isL")
break}}this.shC(H.c([],[A.dA]))
this.sit(H.c([],[A.dC]))
this.siV(H.c([],[A.dD]))
this.sj6(H.c([],[A.dE]))
this.sj7(H.c([],[A.dF]))
this.sj8(H.c([],[A.dG]))
if(a1.k2){y=a1.z
if(y>0){this.eV=H.d(this.y.n(0,"dirLightCount"),"$isL")
for(m=0;m<y;++m){x=this.y
w="dirLights["+m+"].viewDir"
l=x.k(0,w)
if(l==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isJ")
x=this.y
w="dirLights["+m+"].color"
k=x.k(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isJ")
x=this.cY;(x&&C.a).h(x,new A.dA(m,l,k))}}y=a1.Q
if(y>0){this.eW=H.d(this.y.n(0,"pntLightCount"),"$isL")
for(m=0;m<y;++m){x=this.y
w="pntLights["+m+"].point"
l=x.k(0,w)
if(l==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isJ")
x=this.y
w="pntLights["+m+"].viewPnt"
k=x.k(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isJ")
x=this.y
w="pntLights["+m+"].color"
j=x.k(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$isJ")
x=this.y
w="pntLights["+m+"].att0"
i=x.k(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isY")
x=this.y
w="pntLights["+m+"].att1"
h=x.k(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isY")
x=this.y
w="pntLights["+m+"].att2"
g=x.k(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isY")
x=this.cZ;(x&&C.a).h(x,new A.dC(m,l,k,j,i,h,g))}}y=a1.ch
if(y>0){this.eX=H.d(this.y.n(0,"spotLightCount"),"$isL")
for(m=0;m<y;++m){x=this.y
w="spotLights["+m+"].objPnt"
l=x.k(0,w)
if(l==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isJ")
x=this.y
w="spotLights["+m+"].objDir"
k=x.k(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isJ")
x=this.y
w="spotLights["+m+"].viewPnt"
j=x.k(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$isJ")
x=this.y
w="spotLights["+m+"].color"
i=x.k(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isJ")
x=this.y
w="spotLights["+m+"].cutoff"
h=x.k(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isY")
x=this.y
w="spotLights["+m+"].coneAngle"
g=x.k(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isY")
x=this.y
w="spotLights["+m+"].att0"
f=x.k(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(f,"$isY")
x=this.y
w="spotLights["+m+"].att1"
e=x.k(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(e,"$isY")
x=this.y
w="spotLights["+m+"].att2"
d=x.k(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(d,"$isY")
x=this.d_;(x&&C.a).h(x,new A.dD(m,l,k,j,i,h,g,f,e,d))}}y=a1.cx
if(y>0){this.eY=H.d(this.y.n(0,"txtDirLightCount"),"$isL")
for(m=0;m<y;++m){x=this.y
w="txtDirLights["+m+"].objUp"
l=x.k(0,w)
if(l==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isJ")
x=this.y
w="txtDirLights["+m+"].objRight"
k=x.k(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isJ")
x=this.y
w="txtDirLights["+m+"].objDir"
j=x.k(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$isJ")
x=this.y
w="txtDirLights["+m+"].viewDir"
i=x.k(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isJ")
x=this.y
w="txtDirLights["+m+"].color"
h=x.k(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isJ")
x=this.y
w="txtDirLights["+m+"].nullTxt"
g=x.k(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isL")
x=this.y
w="txtDirLightsTxt2D"+m
f=x.k(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(f,"$isao")
x=this.d0;(x&&C.a).h(x,new A.dE(m,l,k,j,i,h,f,g))}}y=a1.cy
if(y>0){this.eZ=H.d(this.y.n(0,"txtPntLightCount"),"$isL")
for(m=0;m<y;++m){x=this.y
w="txtPntLights["+m+"].point"
l=x.k(0,w)
if(l==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isJ")
x=this.y
w="txtPntLights["+m+"].viewPnt"
k=x.k(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isJ")
x=this.y
w="txtPntLights["+m+"].invViewRotMat"
j=x.k(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$isdB")
x=this.y
w="txtPntLights["+m+"].color"
i=x.k(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isJ")
x=this.y
w="txtPntLights["+m+"].nullTxt"
h=x.k(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isL")
x=this.y
w="txtPntLights["+m+"].att0"
g=x.k(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isY")
x=this.y
w="txtPntLights["+m+"].att1"
f=x.k(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(f,"$isY")
x=this.y
w="txtPntLights["+m+"].att2"
e=x.k(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(e,"$isY")
x=this.y
w="txtPntLightsTxtCube"+m
d=x.k(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(d,"$isaj")
x=this.d1;(x&&C.a).h(x,new A.dF(m,l,k,j,i,d,h,g,f,e))}}y=a1.db
if(y>0){this.f_=H.d(this.y.n(0,"txtSpotLightCount"),"$isL")
for(m=0;m<y;++m){x=this.y
w="txtSpotLights["+m+"].objPnt"
l=x.k(0,w)
if(l==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(l,"$isJ")
x=this.y
w="txtSpotLights["+m+"].objDir"
k=x.k(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(k,"$isJ")
x=this.y
w="txtSpotLights["+m+"].objUp"
j=x.k(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(j,"$isJ")
x=this.y
w="txtSpotLights["+m+"].objRight"
i=x.k(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(i,"$isJ")
x=this.y
w="txtSpotLights["+m+"].viewPnt"
h=x.k(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(h,"$isJ")
x=this.y
w="txtSpotLights["+m+"].nullTxt"
g=x.k(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(g,"$isL")
x=this.y
w="txtSpotLights["+m+"].color"
f=x.k(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(f,"$isJ")
x=this.y
w="txtSpotLights["+m+"].tuScalar"
e=x.k(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(e,"$isY")
x=this.y
w="txtSpotLights["+m+"].tvScalar"
d=x.k(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(d,"$isY")
x=this.y
w="txtSpotLights["+m+"].att0"
c=x.k(0,w)
if(c==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(c,"$isY")
x=this.y
w="txtSpotLights["+m+"].att1"
b=x.k(0,w)
if(b==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(b,"$isY")
x=this.y
w="txtSpotLights["+m+"].att2"
a=x.k(0,w)
if(a==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(a,"$isY")
x=this.y
w="txtSpotLightsTxt2D"+m
a0=x.k(0,w)
if(a0==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.i(a0,"$isao")
x=this.d2;(x&&C.a).h(x,new A.dG(m,l,k,j,i,h,a0,g,f,e,d,c,b,a))}}}},
at:function(a,b,c){if(c==null||!c.d)C.b.R(b.a,b.d,1)
else{a.fQ(c)
C.b.R(b.a,b.d,0)}},
am:function(a,b,c){C.b.R(b.a,b.d,1)},
m:{
js:function(a,b){var z,y
z=a.aw
y=new A.eO(b,z)
y.dE(b,z)
y.h0(a,b)
return y}}},jw:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aF,aw,bR",
jc:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aF+"];\n"
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
jj:function(a){var z
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
jd:function(a){var z
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
jr:function(a){var z,y
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
js:function(a){var z,y
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
jl:function(a){var z
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
jw:function(a){var z
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
aK:function(a,b,c){var z
if(b===C.d)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.f(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.c.aA(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
jg:function(a){var z,y
z=this.a
if(z===C.d)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aK(a,z,"emission")
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
jb:function(a){var z,y
z=this.b
if(z===C.d)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aK(a,z,"ambient")
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
je:function(a){var z,y
z=this.c
if(z===C.d)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aK(a,z,"diffuse")
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
jh:function(a){var z,y
z=this.d
if(z===C.d)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aK(a,z,"invDiffuse")
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
jp:function(a){var z,y
z=this.e
if(z===C.d)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aK(a,z,"specular")
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
jk:function(a){var z,y
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
jn:function(a){var z,y
z=this.r
if(z===C.d)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aK(a,z,"reflect")
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
jo:function(a){var z,y
z=this.x
if(z===C.d)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aK(a,z,"refract")
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
jf:function(a){var z,y
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
jm:function(a){var z,y
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
jq:function(a){var z,y
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
jt:function(a){var z,y,x
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
ju:function(a){var z,y,x
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
jv:function(a){var z,y,x
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
ji:function(a){var z
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
i:function(a){return this.aw}},dA:{"^":"a;a,b,c"},dE:{"^":"a;a,b,c,d,e,f,r,x"},dC:{"^":"a;a,b,c,d,e,f,r"},dF:{"^":"a;a,b,c,d,e,f,r,x,y,z"},dD:{"^":"a;a,b,c,d,e,f,r,x,y,z"},dG:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},cA:{"^":"d1;",
dE:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
f9:function(a,b){var z,y,x
this.c=a
this.d=b
this.e=this.dT(a,35633)
this.f=this.dT(this.d,35632)
z=this.a
y=z.createProgram()
this.r=y
C.b.ep(z,y,this.e)
C.b.ep(z,this.r,this.f)
C.b.kl(z,this.r)
if(!H.dV(C.b.cd(z,this.r,35714))){x=C.b.fG(z,this.r)
C.b.jS(z,this.r)
H.r(P.u("Failed to link shader: "+H.j(x)))}this.iQ()
this.iS()},
a7:function(a){C.b.dn(a.a,this.r)
this.x.jZ()},
dT:function(a,b){var z,y,x
z=this.a
y=C.b.jQ(z,b)
C.b.fS(z,y,a)
C.b.jJ(z,y)
if(!H.dV(C.b.fJ(z,y,35713))){x=C.b.fI(z,y)
C.b.jT(z,y)
throw H.e(P.u("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
iQ:function(){var z,y,x,w,v,u
z=H.c([],[A.ea])
y=this.a
x=H.a2(C.b.cd(y,this.r,35721))
if(typeof x!=="number")return H.A(x)
w=0
for(;w<x;++w){v=C.b.fB(y,this.r,w)
u=C.b.fD(y,this.r,v.name)
C.a.h(z,new A.ea(y,v.name,u))}this.x=new A.i5(z)},
iS:function(){var z,y,x,w,v,u
z=H.c([],[A.ae])
y=this.a
x=H.a2(C.b.cd(y,this.r,35718))
if(typeof x!=="number")return H.A(x)
w=0
for(;w<x;++w){v=C.b.fC(y,this.r,w)
u=C.b.fK(y,this.r,v.name)
C.a.h(z,this.jR(v.type,v.size,v.name,u))}this.y=new A.kX(z)},
aZ:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.L(z,y,b,c)
else return A.dz(z,y,b,a,c)},
hz:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ao(z,y,b,c)
else return A.dz(z,y,b,a,c)},
hA:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.aj(z,y,b,c)
else return A.dz(z,y,b,a,c)},
bL:function(a,b){return new P.h2(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
jR:function(a,b,c,d){switch(a){case 5120:return this.aZ(b,c,d)
case 5121:return this.aZ(b,c,d)
case 5122:return this.aZ(b,c,d)
case 5123:return this.aZ(b,c,d)
case 5124:return this.aZ(b,c,d)
case 5125:return this.aZ(b,c,d)
case 5126:return new A.Y(this.a,this.r,c,d)
case 35664:return new A.kS(this.a,this.r,c,d)
case 35665:return new A.J(this.a,this.r,c,d)
case 35666:return new A.kV(this.a,this.r,c,d)
case 35667:return new A.kT(this.a,this.r,c,d)
case 35668:return new A.kU(this.a,this.r,c,d)
case 35669:return new A.kW(this.a,this.r,c,d)
case 35674:return new A.kZ(this.a,this.r,c,d)
case 35675:return new A.dB(this.a,this.r,c,d)
case 35676:return new A.aA(this.a,this.r,c,d)
case 35678:return this.hz(b,c,d)
case 35680:return this.hA(b,c,d)
case 35670:throw H.e(this.bL("BOOL",c))
case 35671:throw H.e(this.bL("BOOL_VEC2",c))
case 35672:throw H.e(this.bL("BOOL_VEC3",c))
case 35673:throw H.e(this.bL("BOOL_VEC4",c))
default:throw H.e(P.u("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},co:{"^":"a;a,b",
i:function(a){return this.b}},ff:{"^":"cA;0z,0Q,0ch,0cx,0cy,0db,a,b,0c,0d,0e,0f,0r,0x,0y"},ae:{"^":"a;"},kX:{"^":"a;a",
k:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
n:function(a,b){var z=this.k(0,b)
if(z==null)throw H.e(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.S()},
ka:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w)x+=z[w].i(0)+a
return x},
S:function(){return this.ka("\n")}},L:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},kT:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},kU:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},kW:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},kR:{"^":"ae;0e,0f,a,b,c,d",
sj9:function(a){this.e=H.k(a,"$isb",[P.n],"$asb")},
i:function(a){return"Uniform1iv: "+H.j(this.c)},
m:{
dz:function(a,b,c,d,e){var z=new A.kR(a,b,c,e)
z.f=d
z.sj9(P.ji(d,0,!1,P.n))
return z}}},Y:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},kS:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},J:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},kV:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform4f: "+H.j(this.c)}},kZ:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},dB:{"^":"ae;a,b,c,d",
ap:function(a){var z=new Float32Array(H.bl(H.k(a,"$isb",[P.q],"$asb")))
C.b.fs(this.a,this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.j(this.c)}},aA:{"^":"ae;a,b,c,d",
ap:function(a){var z=new Float32Array(H.bl(H.k(a,"$isb",[P.q],"$asb")))
C.b.ft(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},ao:{"^":"ae;a,b,c,d",
fQ:function(a){var z,y,x
z=a==null||!a.d
y=this.a
x=this.d
if(z)C.b.R(y,x,0)
else C.b.R(y,x,a.a)},
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},aj:{"^":"ae;a,b,c,d",
fR:function(a){var z,y,x
z=a==null||a.d<6
y=this.a
x=this.d
if(z)C.b.R(y,x,0)
else C.b.R(y,x,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
cQ:function(a,b,c,d){var z
H.l(c,{func:1,ret:-1,args:[F.af,P.q,P.q]})
z=F.cB()
F.bP(z,b,c,d,a,1,0,0,1)
F.bP(z,b,c,d,a,0,1,0,3)
F.bP(z,b,c,d,a,0,0,1,2)
F.bP(z,b,c,d,a,-1,0,0,0)
F.bP(z,b,c,d,a,0,-1,0,0)
F.bP(z,b,c,d,a,0,0,-1,3)
z.au()
return z},
cN:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bP:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.l(c,{func:1,ret:-1,args:[F.af,P.q,P.q]})
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
z.d=y}l=F.cN(y)
k=F.cN(z.b)
j=F.e4(d,e,new F.mR(z,F.cN(z.c),F.cN(z.d),k,l,c),b)
if(j!=null)a.bu(j)},
hD:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.l(e,{func:1,ret:P.q,args:[P.q]})
if(f<3)return
z=F.cB()
y=b?-1:1
x=-6.283185307179586/f
w=H.c([],[F.af])
v=z.a
u=new V.E(0,0,y)
u=u.v(0,Math.sqrt(u.F(u)))
C.a.h(w,v.jz(new V.aP(a,-1,-1,-1),new V.au(1,1,1,1),new V.T(0,0,d),new V.E(0,0,y),new V.a4(0.5,0.5),u))
for(v=y*y,t=0;t<=f;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=e.$1(t/f)
u=z.a
if(typeof p!=="number")return H.A(p)
o=new V.E(r,q,y).v(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.cc(new V.aP(a,-1,-1,-1),null,new V.au(n,l,m,1),new V.T(r*p,q*p,d),new V.E(0,0,y),new V.a4(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.ek(w)
return z},
hA:function(a,b,c,d,e,f){return F.hB(!0,c,d,new F.nc(a,f),e)},
hB:function(a,b,c,d,e){var z
H.l(d,{func:1,ret:P.q,args:[P.q,P.q]})
if(e<3)return
if(c<1)return
z=F.e4(c,e,new F.ne(d),null)
if(z==null)return
z.au()
z.cJ()
if(b)z.bu(F.hD(3,!1,!1,1,new F.nf(d),e))
z.bu(F.hD(1,!0,!1,-1,new F.ng(d),e))
return z},
hN:function(a,b,c,d){var z,y
z={}
z.a=b
if(H.l(b,{func:1,ret:P.q,args:[P.q,P.q]})==null)z.a=new F.nW()
y=F.cQ(a,null,new F.nX(z,c),d)
y.cJ()
return y},
hQ:function(a,b,c,d){return F.hC(c,a,d,b,new F.nZ())},
ny:function(a,b,c,d,e,f){return F.hC(d,a,e,b,new F.nz(f,c))},
hC:function(a,b,c,d,e){var z=F.e4(a,b,new F.nd(H.l(e,{func:1,ret:V.T,args:[P.q]}),d,b,c),null)
if(z==null)return
z.au()
z.cJ()
return z},
e4:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.af,P.q,P.q]})
if(a<1)return
if(b<1)return
z=F.cB()
y=H.c([],[F.af])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.cc(null,null,new V.au(u,0,0,1),null,null,new V.a4(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cU(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.cc(null,null,new V.au(o,n,m,1),null,null,new V.a4(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cU(d))}}z.d.jy(a+1,b+1,y)
return z},
mR:{"^":"m:5;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.d8(z.b,b).d8(z.d.d8(z.c,b),c)
a.sa4(0,new V.T(y.a,y.b,y.c))
a.sfn(y.v(0,Math.sqrt(y.F(y))))
z=1-b
x=1-c
a.seq(new V.aP(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
nc:{"^":"m:9;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
ne:{"^":"m:5;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.A(v)
y=-y*v
u=x*v
a.sa4(0,new V.T(y,u,w))
u=new V.E(y,u,w)
a.sfn(u.v(0,Math.sqrt(u.F(u))))
a.seq(new V.aP(1-c,2+c,-1,-1))}},
nf:{"^":"m:15;a",
$1:function(a){return this.a.$2(a,1)}},
ng:{"^":"m:15;a",
$1:function(a){return this.a.$2(1-a,0)}},
nW:{"^":"m:9;",
$2:function(a,b){return 0}},
nX:{"^":"m:5;a,b",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.A(z)
y=a.f
x=new V.E(y.a,y.b,y.c)
z=x.v(0,Math.sqrt(x.F(x))).u(0,this.b+z)
a.sa4(0,new V.T(z.a,z.b,z.c))}},
nZ:{"^":"m:31;",
$1:function(a){return new V.T(Math.cos(a),Math.sin(a),0)}},
nz:{"^":"m:31;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.T(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
nd:{"^":"m:5;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.e5(y.$1(z),x)
x=J.e5(y.$1(z+3.141592653589793/this.c),x).N(0,w)
x=new V.E(x.a,x.b,x.c)
v=x.v(0,Math.sqrt(x.F(x)))
y=$.fQ
if(y==null){y=new V.E(1,0,0)
$.fQ=y
u=y}else u=y
y=v.aN(!J.P(v,u)?V.fU():u)
t=y.v(0,Math.sqrt(y.F(y)))
y=t.aN(v)
u=y.v(0,Math.sqrt(y.F(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.u(0,y*x)
x=t.u(0,r*x)
a.sa4(0,w.H(0,new V.T(y.a-x.a,y.b-x.b,y.c-x.c)))}},
ac:{"^":"a;0a,0b,0c,0d,0e",
bq:function(){if(!this.gbr()){C.a.L(this.a.a.d.b,this)
this.a.a.a8()}this.cC()
this.cD()
this.iA()},
cH:function(a){this.a=a
C.a.h(a.d.b,this)},
cI:function(a){this.b=a
C.a.h(a.d.c,this)},
iP:function(a){this.c=a
C.a.h(a.d.d,this)},
cC:function(){var z=this.a
if(z!=null){C.a.L(z.d.b,this)
this.a=null}},
cD:function(){var z=this.b
if(z!=null){C.a.L(z.d.c,this)
this.b=null}},
iA:function(){var z=this.c
if(z!=null){C.a.L(z.d.d,this)
this.c=null}},
gbr:function(){return this.a==null||this.b==null||this.c==null},
hq:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.bI()
if(y!=null)v=v.H(0,y)
if(x!=null)v=v.H(0,x)
if(w!=null)v=v.H(0,w)
if(v.fa())return
return v.v(0,Math.sqrt(v.F(v)))},
hv:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.N(0,y)
z=new V.E(z.a,z.b,z.c)
v=z.v(0,Math.sqrt(z.F(z)))
z=w.N(0,y)
z=new V.E(z.a,z.b,z.c)
z=v.aN(z.v(0,Math.sqrt(z.F(z))))
return z.v(0,Math.sqrt(z.F(z)))},
cR:function(){if(this.d!=null)return!0
var z=this.hq()
if(z==null){z=this.hv()
if(z==null)return!1}this.d=z
this.a.a.a8()
return!0},
hp:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=V.bI()
if(y!=null)v=v.H(0,y)
if(x!=null)v=v.H(0,x)
if(w!=null)v=v.H(0,w)
if(v.fa())return
return v.v(0,Math.sqrt(v.F(v)))},
hu:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.p.$2(n,0)){z=r.N(0,u)
z=new V.E(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.F(z)))
if(o.a-p.a<0)m=m.W(0)}else{l=(z-q.b)/n
z=r.N(0,u).u(0,l).H(0,u).N(0,x)
z=new V.E(z.a,z.b,z.c)
m=z.v(0,Math.sqrt(z.F(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.W(0)}z=this.d
if(z!=null){k=z.v(0,Math.sqrt(z.F(z)))
z=k.aN(m)
z=z.v(0,Math.sqrt(z.F(z))).aN(k)
m=z.v(0,Math.sqrt(z.F(z)))}return m},
cP:function(){if(this.e!=null)return!0
var z=this.hp()
if(z==null){z=this.hu()
if(z==null)return!1}this.e=z
this.a.a.a8()
return!0},
gjI:function(a){if(J.P(this.a,this.b))return!0
if(J.P(this.b,this.c))return!0
if(J.P(this.c,this.a))return!0
return!1},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
G:function(a){var z,y
if(this.gbr())return a+"disposed"
z=a+C.c.ao(J.ag(this.a.e),0)+", "+C.c.ao(J.ag(this.b.e),0)+", "+C.c.ao(J.ag(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
S:function(){return this.G("")},
m:{
bA:function(a,b,c){var z,y,x
z=new F.ac()
y=a.a
if(y==null)H.r(P.u("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.u("May not create a face with vertices attached to different shapes."))
z.cH(a)
z.cI(b)
z.iP(c)
C.a.h(z.a.a.d.b,z)
z.a.a.a8()
return z}}},
iI:{"^":"a;"},
kr:{"^":"iI;",
bt:function(a,b,c){var z,y
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
bD:{"^":"a;0a,0b",
bq:function(){if(!this.gbr()){C.a.L(this.a.a.c.b,this)
this.a.a.a8()}this.cC()
this.cD()},
cH:function(a){this.a=a
C.a.h(a.c.b,this)},
cI:function(a){this.b=a
C.a.h(a.c.c,this)},
cC:function(){var z=this.a
if(z!=null){C.a.L(z.c.b,this)
this.a=null}},
cD:function(){var z=this.b
if(z!=null){C.a.L(z.c.c,this)
this.b=null}},
gbr:function(){return this.a==null||this.b==null},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
G:function(a){if(this.gbr())return a+"disposed"
return a+C.c.ao(J.ag(this.a.e),0)+", "+C.c.ao(J.ag(this.b.e),0)},
S:function(){return this.G("")},
m:{
j9:function(a,b){var z,y,x
z=new F.bD()
y=a.a
if(y==null)H.r(P.u("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.r(P.u("May not create a line with vertices attached to different shapes."))
z.cH(a)
z.cI(b)
C.a.h(z.a.a.c.b,z)
z.a.a.a8()
return z}}},
ja:{"^":"a;"},
kQ:{"^":"ja;",
bt:function(a,b,c){var z,y
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
c8:{"^":"a;0a",
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
G:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.c.ao(J.ag(z.e),0)},
S:function(){return this.G("")}},
fe:{"^":"a;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z},
bu:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.C()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){v=z[w]
this.a.h(0,v.jL())}this.a.C()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.H()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.c8()
if(r.a==null)H.r(P.u("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.I(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.H()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.C()
t=t.e
if(typeof t!=="number")return t.H()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.c.a
t.a.h(0,p)
t.a.h(0,o)
F.j9(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.H()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.C()
t=t.e
if(typeof t!=="number")return t.H()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.H()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
m=t[s]
s=this.d.a
s.a.h(0,p)
s.a.h(0,o)
s.a.h(0,m)
F.bA(p,o,m)}z=this.e
if(!(z==null))z.ax()},
au:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.au()||!1
if(!this.a.au())y=!1
z=this.e
if(!(z==null))z.ax()
return y},
ko:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.c(z.slice(0),[H.t(z,0)])
for(z=[F.af];y.length!==0;){x=C.a.gk6(y)
C.a.kG(y,0)
if(x!=null){w=H.c([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.z)(y),++u){t=y[u]
if(t!=null&&a.bt(0,x,t)){C.a.h(w,t)
C.a.L(y,t)}}if(w.length>1)b.bu(w)}}this.a.C()
this.c.di()
this.d.di()
this.b.kH()
this.c.dj(new F.kQ())
this.d.dj(new F.kr())
z=this.e
if(!(z==null))z.ax()},
jA:function(a){this.ko(new F.lr(),new F.jH())},
cJ:function(){return this.jA(null)},
ev:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aB()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aU().a)!==0)++w
if((x&$.$get$aT().a)!==0)++w
if((x&$.$get$aV().a)!==0)++w
if((x&$.$get$aW().a)!==0)++w
if((x&$.$get$bJ().a)!==0)++w
if((x&$.$get$bK().a)!==0)++w
if((x&$.$get$bj().a)!==0)++w
if((x&$.$get$aS().a)!==0)++w
v=b.gdC(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.q
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.ef])
for(r=0,q=0;q<w;++q){p=b.jD(q)
o=p.gdC(p)
C.a.q(s,q,new Z.ef(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.f(y,n)
m=y[n].km(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.q(t,l,m[k]);++l}}r+=o}H.k(t,"$isb",[x],"$asb")
y=a.a
j=y.createBuffer()
C.b.aD(y,34962,j)
C.b.eu(y,34962,new Float32Array(H.bl(t)),35044)
C.b.aD(y,34962,null)
i=new Z.d4(new Z.fY(34962,j),s,b)
i.shO(H.c([],[Z.c1]))
if(this.b.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.C()
C.a.h(h,g.e)}f=Z.dK(y,34963,H.k(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.c1(0,h.length,f))}if(this.c.b.length!==0){x=P.n
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.C()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.C()
C.a.h(h,g.e)}f=Z.dK(y,34963,H.k(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.c1(1,h.length,f))}if(this.d.b.length!==0){x=P.n
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
C.a.h(h,g.e)}f=Z.dK(y,34963,H.k(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.c1(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.h])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.G("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.G("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.G("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.G("   "))}return C.a.l(z,"\n")},
bb:function(a){var z=this.e
if(!(z==null))z.I(a)},
a8:function(){return this.bb(null)},
$isoh:1,
m:{
cB:function(){var z,y
z=new F.fe()
y=new F.lm(z)
y.b=!1
y.sja(H.c([],[F.af]))
z.a=y
y=new F.kl(z)
y.scz(H.c([],[F.c8]))
z.b=y
y=new F.kk(z)
y.shQ(H.c([],[F.bD]))
z.c=y
y=new F.kj(z)
y.shF(H.c([],[F.ac]))
z.d=y
z.e=null
return z}}},
kj:{"^":"a;a,0b",
shF:function(a){this.b=H.k(a,"$isb",[F.ac],"$asb")},
ek:function(a){var z,y,x,w,v,u,t
H.k(a,"$isb",[F.af],"$asb")
z=H.c([],[F.ac])
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
C.a.h(z,F.bA(x,u,t))}}return z},
jy:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.k(c,"$isb",[F.af],"$asb")
z=H.c([],[F.ac])
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
C.a.h(z,F.bA(q,p,n))
y.a.h(0,q)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bA(q,n,m))}else{r.h(0,p)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bA(p,n,m))
y.a.h(0,p)
y.a.h(0,m)
y.a.h(0,q)
C.a.h(z,F.bA(p,m,q))}t=!t}v=!v}return z},
gp:function(a){return this.b.length},
dj:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.f(x,y)
w=x[y]
for(x=w.d,v=x.b.length+x.c.length+x.d.length-1;v>=0;--v){u=w.d.k(0,v)
for(t=v-1;t>=0;--t){s=w.d.k(0,t)
if(a.bt(0,u,s)){u.bq()
break}}}}},
di:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=x.gjI(x)
if(y)x.bq()}},
au:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].cR())x=!1
return x},
cQ:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].cP())x=!1
return x},
i:function(a){return this.S()},
G:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].G(a))
return C.a.l(z,"\n")},
S:function(){return this.G("")}},
kk:{"^":"a;a,0b",
shQ:function(a){this.b=H.k(a,"$isb",[F.bD],"$asb")},
gp:function(a){return this.b.length},
dj:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.f(x,y)
w=x[y]
for(x=w.c,v=x.b.length+x.c.length-1;v>=0;--v){u=w.c.k(0,v)
for(t=v-1;t>=0;--t){s=w.c.k(0,t)
if(a.bt(0,u,s)){u.bq()
break}}}}},
di:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=J.P(x.a,x.b)
if(y)x.bq()}},
i:function(a){return this.S()},
G:function(a){var z,y,x,w
z=H.c([],[P.h])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.f(w,x)
C.a.h(z,w[x].G(a+(""+x+". ")))}return C.a.l(z,"\n")},
S:function(){return this.G("")}},
kl:{"^":"a;a,0b",
scz:function(a){this.b=H.k(a,"$isb",[F.c8],"$asb")},
gp:function(a){return this.b.length},
kH:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
y=y[z]
x=y.a
if(x.b.b.length>1){if(x!=null){C.a.L(x.a.b.b,y)
x=y.a.a.e
if(!(x==null))x.I(null)}x=y.a
if(x!=null){C.a.L(x.b.b,y)
y.a=null}}}},
i:function(a){return this.S()},
G:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].G(a))
return C.a.l(z,"\n")},
S:function(){return this.G("")}},
af:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cU:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.cc(this.cx,x,u,z,y,w,v,a,t)},
jL:function(){return this.cU(null)},
sa4:function(a,b){var z
if(!J.P(this.f,b)){this.f=b
z=this.a
if(z!=null)z.a8()}},
sfn:function(a){var z
if(!J.P(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a8()}},
seq:function(a){var z
if(!J.P(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.a8()}},
km:function(a){var z,y
if(a.A(0,$.$get$aB())){z=this.f
y=[P.q]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.A(0,$.$get$aU())){z=this.r
y=[P.q]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.A(0,$.$get$aT())){z=this.x
y=[P.q]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.A(0,$.$get$aV())){z=this.y
y=[P.q]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(a.A(0,$.$get$aW())){z=this.z
y=[P.q]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.A(0,$.$get$bJ())){z=this.Q
y=[P.q]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.A(0,$.$get$bK())){z=this.Q
y=[P.q]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(a.A(0,$.$get$bj()))return H.c([this.ch],[P.q])
else if(a.A(0,$.$get$aS())){z=this.cx
y=[P.q]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.q])},
cR:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bI()
this.d.a0(0,new F.lw(z))
z=z.a
this.r=z.v(0,Math.sqrt(z.F(z)))
z=this.a
if(z!=null){z.a8()
z=this.a.e
if(!(z==null))z.ax()}return!0},
cP:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bI()
this.d.a0(0,new F.lv(z))
z=z.a
this.x=z.v(0,Math.sqrt(z.F(z)))
z=this.a
if(z!=null){z.a8()
z=this.a.e
if(!(z==null))z.ax()}return!0},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
G:function(a){var z,y,x
z=H.c([],[P.h])
C.a.h(z,C.c.ao(J.ag(this.e),0))
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
C.a.h(z,V.I(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.l(z,", ")
return a+"{"+x+"}"},
S:function(){return this.G("")},
m:{
cc:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.af()
y=new F.lu(z)
y.scz(H.c([],[F.c8]))
z.b=y
y=new F.lq(z)
x=[F.bD]
y.shR(H.c([],x))
y.shS(H.c([],x))
z.c=y
y=new F.ln(z)
x=[F.ac]
y.shG(H.c([],x))
y.shH(H.c([],x))
y.shI(H.c([],x))
z.d=y
h=$.$get$fV()
z.e=0
y=$.$get$aB()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aU().a)!==0?e:null
z.x=(x&$.$get$aT().a)!==0?b:null
z.y=(x&$.$get$aV().a)!==0?f:null
z.z=(x&$.$get$aW().a)!==0?g:null
z.Q=(x&$.$get$fW().a)!==0?c:null
z.ch=(x&$.$get$bj().a)!==0?i:0
z.cx=(x&$.$get$aS().a)!==0?a:null
return z}}},
lw:{"^":"m:10;a",
$1:function(a){var z,y
H.d(a,"$isac")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.H(0,z)}}},
lv:{"^":"m:10;a",
$1:function(a){var z,y
H.d(a,"$isac")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.H(0,z)}}},
lm:{"^":"a;a,0b,0c",
sja:function(a){this.c=H.k(a,"$isb",[F.af],"$asb")},
C:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.f(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z,y
z=b.a
if(z!=null){if(z===this.a)return!1
throw H.e(P.u("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
y=this.a
b.a=y
C.a.h(z,b)
y.a8()
return!0},
el:function(a,b,c,d,e,f,g,h,i){var z=F.cc(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
bN:function(a,b,c,d,e,f){return this.el(a,null,b,c,null,d,e,f,0)},
jz:function(a,b,c,d,e,f){return this.el(a,null,b,c,d,e,f,null,0)},
gp:function(a){return this.c.length},
au:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].cR()
return!0},
cQ:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].cP()
return!0},
jH:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.v(0,Math.sqrt(u*u+t*t+s*s))
if(!J.P(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.I(null)}}}}return!0},
i:function(a){return this.S()},
G:function(a){var z,y,x,w
this.C()
z=H.c([],[P.h])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].G(a))
return C.a.l(z,"\n")},
S:function(){return this.G("")}},
ln:{"^":"a;a,0b,0c,0d",
shG:function(a){this.b=H.k(a,"$isb",[F.ac],"$asb")},
shH:function(a){this.c=H.k(a,"$isb",[F.ac],"$asb")},
shI:function(a){this.d=H.k(a,"$isb",[F.ac],"$asb")},
gp:function(a){return this.b.length+this.c.length+this.d.length},
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
a0:function(a,b){H.l(b,{func:1,ret:-1,args:[F.ac]})
C.a.a0(this.b,b)
C.a.a0(this.c,new F.lo(this,b))
C.a.a0(this.d,new F.lp(this,b))},
i:function(a){return this.S()},
G:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].G(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].G(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].G(a))
return C.a.l(z,"\n")},
S:function(){return this.G("")}},
lo:{"^":"m:10;a,b",
$1:function(a){H.d(a,"$isac")
if(!J.P(a.a,this.a))this.b.$1(a)}},
lp:{"^":"m:10;a,b",
$1:function(a){var z
H.d(a,"$isac")
z=this.a
if(!J.P(a.a,z)&&!J.P(a.b,z))this.b.$1(a)}},
lq:{"^":"a;a,0b,0c",
shR:function(a){this.b=H.k(a,"$isb",[F.bD],"$asb")},
shS:function(a){this.c=H.k(a,"$isb",[F.bD],"$asb")},
gp:function(a){return this.b.length+this.c.length},
k:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.f(z,x)
return z[x]}else{if(b<0)return H.f(z,b)
return z[b]}},
i:function(a){return this.S()},
G:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].G(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].G(a))
return C.a.l(z,"\n")},
S:function(){return this.G("")}},
ls:{"^":"a;"},
lr:{"^":"ls;",
bt:function(a,b,c){return J.P(b.f,c.f)}},
lt:{"^":"a;"},
jH:{"^":"lt;",
bu:function(a){var z,y,x,w,v,u,t,s,r
H.k(a,"$isb",[F.af],"$asb")
z=V.bI()
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.E(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.v(0,Math.sqrt(z.F(z)))
for(y=a.length,w=z==null,x=0;x<a.length;a.length===y||(0,H.z)(a),++x){v=a[x]
if(w)u=null
else{t=z.a
s=z.b
r=z.c
u=z.v(0,Math.sqrt(t*t+s*s+r*r))}if(!J.P(v.r,u)){v.r=u
t=v.a
if(t!=null){t=t.e
if(!(t==null))t.I(null)}}}return}},
lu:{"^":"a;a,0b",
scz:function(a){this.b=H.k(a,"$isb",[F.c8],"$asb")},
gp:function(a){return this.b.length},
i:function(a){return this.S()},
G:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].G(a))
return C.a.l(z,"\n")},
S:function(){return this.G("")}}}],["","",,O,{"^":"",jt:{"^":"bH;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
shs:function(a){this.e=H.k(a,"$isW",[V.an],"$asW")},
gt:function(){var z=this.dy
if(z==null){z=D.F()
this.dy=z}return z},
a3:[function(a){var z
H.d(a,"$isx")
z=this.dy
if(!(z==null))z.I(a)},function(){return this.a3(null)},"dH","$1","$0","gaX",0,2,1],
iG:[function(a){H.d(a,"$isx")
this.a=null
this.a3(a)},function(){return this.iG(null)},"lw","$1","$0","giF",0,2,1],
l7:[function(a,b){var z=V.an
z=new D.c2(a,H.k(b,"$iso",[z],"$aso"),this,[z])
z.b=!0
this.a3(z)},"$2","gi0",8,0,16],
l8:[function(a,b){var z=V.an
z=new D.c3(a,H.k(b,"$iso",[z],"$aso"),this,[z])
z.b=!0
this.a3(z)},"$2","gi1",8,0,16],
dQ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
z=this.dx
y=C.h.ac(z.e.length+3,4)*4
x=C.h.ac(z.f.length+3,4)*4
w=C.h.ac(z.r.length+3,4)*4
v=C.h.ac(z.x.length+3,4)*4
u=C.h.ac(z.y.length+3,4)*4
t=C.h.ac(z.z.length+3,4)*4
s=C.h.ac(this.e.a.length+3,4)*4
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
a2=$.$get$aB()
if(e){g=$.$get$aU()
a2=new Z.bi(a2.a|g.a)}if(d){g=$.$get$aT()
a2=new Z.bi(a2.a|g.a)}if(c){g=$.$get$aV()
a2=new Z.bi(a2.a|g.a)}if(b){g=$.$get$aW()
a2=new Z.bi(a2.a|g.a)}if(a0){g=$.$get$aS()
a2=new Z.bi(a2.a|g.a)}return new A.jw(z,r,q,p,o,n,m,l,k,y,x,w,v,u,t,y+x+w+v+u+t,i,i,a,a1,!0,!1,!1,h,a,f,e,d,c,b,a0,!1,!1,!1,s,j.charCodeAt(0)==0?j:j,a2)},
a_:function(a,b){H.k(a,"$isb",[T.cE],"$asb")
if(b!=null)if(!C.a.Y(a,b)){b.a=a.length
C.a.h(a,b)}},
az:function(a){var z,y,x,w,v
for(z=this.dx.a,z=new J.at(z,z.length,0,[H.t(z,0)]);z.D();){y=z.d
y.toString
x=$.cI
if(x==null){x=new V.E(0,0,1)
$.cI=x}y.a=x
w=y.b
if(w!=null){v=w.a
if(v!=null)y.a=v.dm(x)}}},
fi:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
z=this.a
if(z==null){z=this.dQ()
y=H.d(a.fr.k(0,z.aw),"$iseO")
if(y==null){y=A.js(z,a.a)
a.en(y)}this.a=y
b.e=null
z=y}x=z.z
w=x.bR
z=b.e
if(!(z instanceof Z.d4)){b.e=null
z=null}if(z==null||!z.d.A(0,w)){z=x.r1
if(z)b.d.au()
v=x.r2
if(v){u=b.d
t=u.e
if(!(t==null))++t.d
u.d.cQ()
u.a.cQ()
u=u.e
if(!(u==null))u.ax()}u=x.ry
if(u){t=b.d
s=t.e
if(!(s==null))++s.d
t.a.jH()
t=t.e
if(!(t==null))t.ax()}r=b.d.ev(new Z.fZ(a.a),w)
r.aO($.$get$aB()).e=this.a.Q.c
if(z)r.aO($.$get$aU()).e=this.a.cx.c
if(v)r.aO($.$get$aT()).e=this.a.ch.c
if(x.rx)r.aO($.$get$aV()).e=this.a.cy.c
if(u)r.aO($.$get$aW()).e=this.a.db.c
if(x.x1)r.aO($.$get$aS()).e=this.a.dx.c
b.e=r}z=T.cE
q=H.c([],[z])
this.a.a7(a)
if(x.fx){v=this.a
u=a.dx.ga5()
v=v.dy
v.toString
v.ap(u.aj(0,!0))}if(x.fy){v=this.a
u=a.cx
if(u==null){u=a.db.ga5().u(0,a.dx.ga5())
a.cx=u}v=v.fr
v.toString
v.ap(u.aj(0,!0))}v=this.a
u=a.ch
if(u==null){u=a.gkE().u(0,a.dx.ga5())
a.ch=u}v=v.fy
v.toString
v.ap(u.aj(0,!0))
if(x.x2){v=this.a
u=this.b
v=v.k1
v.toString
v.ap(C.r.aj(u,!0))}if(x.y1){v=this.a
u=this.c
v=v.k2
v.toString
v.ap(C.r.aj(u,!0))}if(x.y2){v=this.a
u=this.d
v=v.k3
v.toString
v.ap(C.r.aj(u,!0))}if(x.aF>0){p=this.e.a.length
v=this.a.k4
C.b.R(v.a,v.d,p)
for(v=[P.q],o=0;o<p;++o){u=this.a
t=this.e.a
if(o>=t.length)return H.f(t,o)
t=t[o]
u.toString
H.d(t,"$isan")
u=u.r1
if(o>=u.length)return H.f(u,o)
u=u[o]
n=new Float32Array(H.bl(H.k(t.aj(0,!0),"$isb",v,"$asb")))
C.b.ft(u.a,u.d,!1,n)}}switch(x.a){case C.d:break
case C.i:v=this.a
u=this.f.f
v=v.r2
v.toString
t=u.a
s=u.b
u=u.c
C.b.B(v.a,v.d,t,s,u)
break
case C.e:this.a_(q,this.f.d)
v=this.a
u=this.f.d
v.at(v.rx,v.x1,u)
u=this.a
v=this.f.f
u=u.r2
u.toString
t=v.a
s=v.b
v=v.c
C.b.B(u.a,u.d,t,s,v)
break
case C.f:this.a_(q,this.f.e)
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
C.b.B(u.a,u.d,t,s,v)
break}if(x.k2){switch(x.b){case C.d:break
case C.i:v=this.a
u=this.r.f
v=v.x2
v.toString
t=u.a
s=u.b
u=u.c
C.b.B(v.a,v.d,t,s,u)
break
case C.e:this.a_(q,this.r.d)
v=this.a
u=this.r.d
v.at(v.y1,v.aF,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
C.b.B(u.a,u.d,t,s,v)
break
case C.f:this.a_(q,this.r.e)
v=this.a
u=this.r.e
v.am(v.y2,v.aF,u)
u=this.a
v=this.r.f
u=u.x2
u.toString
t=v.a
s=v.b
v=v.c
C.b.B(u.a,u.d,t,s,v)
break}switch(x.c){case C.d:break
case C.i:v=this.a
u=this.x.f
v=v.aw
v.toString
t=u.a
s=u.b
u=u.c
C.b.B(v.a,v.d,t,s,u)
break
case C.e:this.a_(q,this.x.d)
v=this.a
u=this.x.d
v.at(v.bR,v.bS,u)
u=this.a
v=this.x.f
u=u.aw
u.toString
t=v.a
s=v.b
v=v.c
C.b.B(u.a,u.d,t,s,v)
break
case C.f:this.a_(q,this.x.e)
v=this.a
u=this.x.e
v.am(v.eG,v.bS,u)
u=this.a
v=this.x.f
u=u.aw
u.toString
t=v.a
s=v.b
v=v.c
C.b.B(u.a,u.d,t,s,v)
break}switch(x.d){case C.d:break
case C.i:v=this.a
u=this.y.f
v=v.bT
v.toString
t=u.a
s=u.b
u=u.c
C.b.B(v.a,v.d,t,s,u)
break
case C.e:this.a_(q,this.y.d)
v=this.a
u=this.y.d
v.at(v.eH,v.bU,u)
u=this.a
v=this.y.f
u=u.bT
u.toString
t=v.a
s=v.b
v=v.c
C.b.B(u.a,u.d,t,s,v)
break
case C.f:this.a_(q,this.y.e)
v=this.a
u=this.y.e
v.am(v.eI,v.bU,u)
u=this.a
v=this.y.f
u=u.bT
u.toString
t=v.a
s=v.b
v=v.c
C.b.B(u.a,u.d,t,s,v)
break}switch(x.e){case C.d:break
case C.i:v=this.a
u=this.z.f
v=v.bV
v.toString
t=u.a
s=u.b
u=u.c
C.b.B(v.a,v.d,t,s,u)
u=this.a
s=this.z.ch
u=u.bX
C.b.O(u.a,u.d,s)
break
case C.e:this.a_(q,this.z.d)
v=this.a
u=this.z.d
v.at(v.eJ,v.bW,u)
u=this.a
v=this.z.f
u=u.bV
u.toString
t=v.a
s=v.b
v=v.c
C.b.B(u.a,u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bX
C.b.O(v.a,v.d,s)
break
case C.f:this.a_(q,this.z.e)
v=this.a
u=this.z.e
v.am(v.eK,v.bW,u)
u=this.a
v=this.z.f
u=u.bV
u.toString
t=v.a
s=v.b
v=v.c
C.b.B(u.a,u.d,t,s,v)
v=this.a
s=this.z.ch
v=v.bX
C.b.O(v.a,v.d,s)
break}if(x.z>0){p=this.dx.e.length
v=this.a.eV
C.b.R(v.a,v.d,p)
m=a.db.ga5()
for(v=this.dx.e,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.cY
if(l>=t.length)return H.f(t,l)
i=t[l]
t=m.dm(j.a)
s=t.a
h=t.b
g=t.c
g=t.v(0,Math.sqrt(s*s+h*h+g*g))
h=i.b
s=g.a
t=g.b
g=g.c
C.b.B(h.a,h.d,s,t,g)
g=j.c
t=i.c
C.b.B(t.a,t.d,g.a,g.b,g.c);++l}}if(x.Q>0){p=this.dx.f.length
v=this.a.eW
C.b.R(v.a,v.d,p)
m=a.db.ga5()
for(v=this.dx.f,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.cZ
if(l>=t.length)return H.f(t,l)
i=t[l]
t=j.gbx(j)
s=i.b
h=t.gdt(t)
g=t.gdu(t)
t=t.gdv(t)
C.b.B(s.a,s.d,h,g,t)
t=m.bD(j.gbx(j))
g=i.c
C.b.B(g.a,g.d,t.a,t.b,t.c)
t=j.gaE(j)
g=i.d
h=t.gc8()
s=t.gbE()
t=t.gbO()
C.b.B(g.a,g.d,h,s,t)
t=j.gcK()
s=i.e
C.b.O(s.a,s.d,t)
t=j.gcL()
s=i.f
C.b.O(s.a,s.d,t)
t=j.gcM()
s=i.r
C.b.O(s.a,s.d,t);++l}}if(x.ch>0){p=this.dx.r.length
v=this.a.eX
C.b.R(v.a,v.d,p)
m=a.db.ga5()
for(v=this.dx.r,u=v.length,l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.d_
if(l>=t.length)return H.f(t,l)
i=t[l]
t=j.gbx(j)
s=i.b
h=t.gdt(t)
g=t.gdu(t)
t=t.gdv(t)
C.b.B(s.a,s.d,h,g,t)
t=j.gcW(j).lE()
g=i.c
h=t.gb6(t)
s=t.gb7(t)
t=t.gb8()
C.b.B(g.a,g.d,h,s,t)
t=m.bD(j.gbx(j))
s=i.d
C.b.B(s.a,s.d,t.a,t.b,t.c)
t=j.gaE(j)
s=i.e
h=t.gc8()
g=t.gbE()
t=t.gbO()
C.b.B(s.a,s.d,h,g,t)
t=j.glC()
g=i.f
C.b.O(g.a,g.d,t)
t=j.glA()
g=i.r
C.b.O(g.a,g.d,t)
t=j.gcK()
g=i.x
C.b.O(g.a,g.d,t)
t=j.gcL()
g=i.y
C.b.O(g.a,g.d,t)
t=j.gcM()
g=i.z
C.b.O(g.a,g.d,t);++l}}if(x.cx>0){p=this.dx.x.length
v=this.a.eY
C.b.R(v.a,v.d,p)
m=a.db.ga5()
for(v=this.dx.x,u=v.length,t=[z],l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
s=this.a.d0
if(l>=s.length)return H.f(s,l)
i=s[l]
s=j.gbA()
H.k(q,"$isb",t,"$asb")
if(!C.a.Y(q,s)){s.sbi(q.length)
C.a.h(q,s)}s=j.gcW(j)
h=i.d
g=s.gb6(s)
f=s.gb7(s)
s=s.gb8()
C.b.B(h.a,h.d,g,f,s)
s=j.gc9()
f=i.b
g=s.gb6(s)
h=s.gb7(s)
s=s.gb8()
C.b.B(f.a,f.d,g,h,s)
s=j.gby(j)
h=i.c
g=s.gb6(s)
f=s.gb7(s)
s=s.gb8()
C.b.B(h.a,h.d,g,f,s)
s=m.dm(j.gcW(j))
f=s.a
g=s.b
h=s.c
h=s.v(0,Math.sqrt(f*f+g*g+h*h))
g=i.e
f=h.a
s=h.b
h=h.c
C.b.B(g.a,g.d,f,s,h)
h=j.gaE(j)
s=i.f
f=h.gc8()
g=h.gbE()
h=h.gbO()
C.b.B(s.a,s.d,f,g,h)
h=j.gbA()
s=h.gfb(h)
if(!s){s=i.x
C.b.R(s.a,s.d,1)}else{s=i.r
g=h.ge1()
f=s.a
s=s.d
if(!g)C.b.R(f,s,0)
else C.b.R(f,s,h.gbi())
s=i.x
C.b.R(s.a,s.d,0)}++l}}if(x.cy>0){p=this.dx.y.length
v=this.a.eZ
C.b.R(v.a,v.d,p)
m=a.db.ga5()
for(v=this.dx.y,u=v.length,t=[P.q],s=[z],l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
h=this.a.d1
if(l>=h.length)return H.f(h,l)
i=h[l]
h=j.gbA()
H.k(q,"$isb",s,"$asb")
if(!C.a.Y(q,h)){h.sbi(q.length)
C.a.h(q,h)}e=m.u(0,j.ga5())
h=j.ga5()
g=$.bF
if(g==null){g=new V.T(0,0,0)
$.bF=g}g=h.bD(g)
h=i.b
f=g.gdt(g)
d=g.gdu(g)
g=g.gdv(g)
C.b.B(h.a,h.d,f,d,g)
h=$.bF
if(h==null){h=new V.T(0,0,0)
$.bF=h}h=e.bD(h)
g=i.c
C.b.B(g.a,g.d,h.a,h.b,h.c)
h=e.d7()
g=i.d
n=new Float32Array(H.bl(H.k(new V.eQ(h.a,h.b,h.c,h.e,h.f,h.r,h.y,h.z,h.Q).aj(0,!0),"$isb",t,"$asb")))
C.b.fs(g.a,g.d,!1,n)
g=j.gaE(j)
h=i.e
f=g.gc8()
d=g.gbE()
g=g.gbO()
C.b.B(h.a,h.d,f,d,g)
g=j.gbA()
h=g.gfb(g)
if(!h){h=i.r
C.b.R(h.a,h.d,1)}else{h=i.f
f=g.ge1()
d=h.a
h=h.d
if(!(f>=6))C.b.R(d,h,0)
else C.b.R(d,h,g.gbi())
h=i.r
C.b.R(h.a,h.d,0)}h=j.gcK()
g=i.x
C.b.O(g.a,g.d,h)
h=j.gcL()
g=i.y
C.b.O(g.a,g.d,h)
h=j.gcM()
g=i.z
C.b.O(g.a,g.d,h);++l}}if(x.db>0){p=this.dx.z.length
v=this.a.f_
C.b.R(v.a,v.d,p)
m=a.db.ga5()
for(v=this.dx.z,u=v.length,z=[z],l=0,k=0;k<v.length;v.length===u||(0,H.z)(v),++k){j=v[k]
t=this.a.d2
if(l>=t.length)return H.f(t,l)
i=t[l]
t=j.gbA()
H.k(q,"$isb",z,"$asb")
if(!C.a.Y(q,t)){t.sbi(q.length)
C.a.h(q,t)}t=j.gbx(j)
s=i.b
h=t.gdt(t)
g=t.gdu(t)
t=t.gdv(t)
C.b.B(s.a,s.d,h,g,t)
t=j.gcW(j)
g=i.c
h=t.gb6(t)
s=t.gb7(t)
t=t.gb8()
C.b.B(g.a,g.d,h,s,t)
t=j.gc9()
s=i.d
h=t.gb6(t)
g=t.gb7(t)
t=t.gb8()
C.b.B(s.a,s.d,h,g,t)
t=j.gby(j)
g=i.e
h=t.gb6(t)
s=t.gb7(t)
t=t.gb8()
C.b.B(g.a,g.d,h,s,t)
t=m.bD(j.gbx(j))
s=i.f
C.b.B(s.a,s.d,t.a,t.b,t.c)
t=j.gbA()
s=t.gfb(t)
if(!s){t=i.x
C.b.R(t.a,t.d,1)}else{s=i.r
h=t.ge1()
g=s.a
s=s.d
if(!h)C.b.R(g,s,0)
else C.b.R(g,s,t.gbi())
t=i.x
C.b.R(t.a,t.d,0)}t=j.gaE(j)
s=i.y
h=t.gc8()
g=t.gbE()
t=t.gbO()
C.b.B(s.a,s.d,h,g,t)
t=j.glJ()
g=i.z
C.b.O(g.a,g.d,t)
t=j.glK()
g=i.Q
C.b.O(g.a,g.d,t)
t=j.gcK()
g=i.ch
C.b.O(g.a,g.d,t)
t=j.gcL()
g=i.cx
C.b.O(g.a,g.d,t)
t=j.gcM()
g=i.cy
C.b.O(g.a,g.d,t);++l}}}switch(x.f){case C.d:break
case C.i:break
case C.e:this.a_(q,this.Q.d)
z=this.a
v=this.Q.d
z.at(z.eL,z.bY,v)
break
case C.f:this.a_(q,this.Q.e)
z=this.a
v=this.Q.e
z.am(z.eM,z.bY,v)
break}if(x.fr){z=this.a
v=a.Q
if(v==null){v=a.db.ga5().d7()
a.Q=v}z=z.id
z.toString
z.ap(v.aj(0,!0))}if(x.dy){this.a_(q,this.ch)
z=this.a
v=this.ch
z.am(z.eN,z.eO,v)
switch(x.r){case C.d:break
case C.i:z=this.a
v=this.cx.f
z=z.bZ
z.toString
u=v.a
t=v.b
v=v.c
C.b.B(z.a,z.d,u,t,v)
break
case C.e:this.a_(q,this.cx.d)
z=this.a
v=this.cx.d
z.at(z.eP,z.c_,v)
v=this.a
z=this.cx.f
v=v.bZ
v.toString
u=z.a
t=z.b
z=z.c
C.b.B(v.a,v.d,u,t,z)
break
case C.f:this.a_(q,this.cx.e)
z=this.a
v=this.cx.e
z.am(z.eQ,z.c_,v)
v=this.a
z=this.cx.f
v=v.bZ
v.toString
u=z.a
t=z.b
z=z.c
C.b.B(v.a,v.d,u,t,z)
break}switch(x.x){case C.d:break
case C.i:z=this.a
v=this.cy.f
z=z.c1
z.toString
u=v.a
t=v.b
v=v.c
C.b.B(z.a,z.d,u,t,v)
v=this.a
t=this.cy.ch
v=v.c0
C.b.O(v.a,v.d,t)
break
case C.e:this.a_(q,this.cy.d)
z=this.a
v=this.cy.d
z.at(z.eR,z.c2,v)
v=this.a
z=this.cy.f
v=v.c1
v.toString
u=z.a
t=z.b
z=z.c
C.b.B(v.a,v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.c0
C.b.O(z.a,z.d,t)
break
case C.f:this.a_(q,this.cy.e)
z=this.a
v=this.cy.e
z.am(z.eS,z.c2,v)
v=this.a
z=this.cy.f
v=v.c1
v.toString
u=z.a
t=z.b
z=z.c
C.b.B(v.a,v.d,u,t,z)
z=this.a
t=this.cy.ch
z=z.c0
C.b.O(z.a,z.d,t)
break}}z=x.y
v=z!==C.d
if(v){switch(z){case C.d:break
case C.i:z=this.a
u=this.db.f
z=z.c3
C.b.O(z.a,z.d,u)
break
case C.e:this.a_(q,this.db.d)
z=this.a
u=this.db.d
z.at(z.eT,z.c4,u)
u=this.a
z=this.db.f
u=u.c3
C.b.O(u.a,u.d,z)
break
case C.f:this.a_(q,this.db.e)
z=this.a
u=this.db.e
z.am(z.eU,z.c4,u)
u=this.a
z=this.db.f
u=u.c3
C.b.O(u.a,u.d,z)
break}z=a.a
C.b.bs(z,3042)
C.b.jG(z,770,771)}for(z=a.a,o=0;o<q.length;++o){u=q[o]
if(!u.c&&u.d){u.c=!0
C.b.bM(z,33984+u.a)
C.b.af(z,3553,u.b)}}u=b.e
u.a7(a)
u.ai(a)
u.ay(a)
if(v)C.b.jW(z,3042)
for(o=0;o<q.length;++o){v=q[o]
if(v.c){v.c=!1
C.b.bM(z,33984+v.a)
C.b.af(z,3553,null)}}v=this.a
v.toString
C.b.dn(z,null)
v.x.eC()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dQ().aw},
m:{
eP:function(){var z,y,x
z=new O.jt()
z.shs(O.d8(V.an))
z.e.bf(z.gi0(),z.gi1())
y=new O.b9(z,"emission")
y.c=C.d
y.f=new V.a6(0,0,0)
z.f=y
y=new O.b9(z,"ambient")
y.c=C.d
y.f=new V.a6(0,0,0)
z.r=y
y=new O.b9(z,"diffuse")
y.c=C.d
y.f=new V.a6(0,0,0)
z.x=y
y=new O.b9(z,"invDiffuse")
y.c=C.d
y.f=new V.a6(0,0,0)
z.y=y
y=new O.jy(z,"specular")
y.c=C.d
y.f=new V.a6(0,0,0)
y.ch=100
z.z=y
y=new O.jv(z,"bump")
y.c=C.d
z.Q=y
z.ch=null
y=new O.b9(z,"reflect")
y.c=C.d
y.f=new V.a6(0,0,0)
z.cx=y
y=new O.jx(z,"refract")
y.c=C.d
y.f=new V.a6(0,0,0)
y.ch=1
z.cy=y
y=new O.ju(z,"alpha")
y.c=C.d
y.f=1
z.db=y
y=new D.j8()
y.bH(D.a8)
y.sha(H.c([],[D.cp]))
y.shc(H.c([],[D.f2]))
y.shd(H.c([],[D.fg]))
y.she(H.c([],[D.fp]))
y.shf(H.c([],[D.fq]))
y.shg(H.c([],[D.fr]))
y.Q=null
y.ch=null
y.dB(y.gi_(),y.gik(),y.gim())
z.dx=y
x=y.Q
if(x==null){x=D.F()
y.Q=x
y=x}else y=x
y.h(0,z.giF())
y=z.dx
x=y.ch
if(x==null){x=D.F()
y.ch=x
y=x}else y=x
y.h(0,z.gaX())
z.dy=null
return z}}},ju:{"^":"dj;0f,a,b,0c,0d,0e"},dj:{"^":"a;",
a3:[function(a){this.a.a3(H.d(a,"$isx"))},function(){return this.a3(null)},"dH","$1","$0","gaX",0,2,1],
bj:["fY",function(){}],
iN:function(a){var z,y
z=this.d
if(z==null?a!=null:z!==a){if(z!=null)z.gt().L(0,this.gaX())
y=this.d
this.d=a
if(a!=null)a.gt().h(0,this.gaX())
z=new D.C(this.b+".texture2D",y,this.d,this,[T.fm])
z.b=!0
this.a.a3(z)}},
iO:function(a){}},jv:{"^":"dj;a,b,0c,0d,0e"},b9:{"^":"dj;0f,a,b,0c,0d,0e",
eb:function(a){var z,y
if(!J.P(this.f,a)){z=this.f
this.f=a
y=new D.C(this.b+".color",z,a,this,[V.a6])
y.b=!0
this.a.a3(y)}},
bj:["cg",function(){this.fY()
this.eb(new V.a6(1,1,1))}],
saE:function(a,b){var z
if(this.c===C.d){this.c=C.i
this.bj()
z=this.a
z.a=null
z.a3(null)}this.eb(b)}},jx:{"^":"b9;0ch,0f,a,b,0c,0d,0e",
iM:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.C(this.b+".refraction",y,a,this,[P.q])
z.b=!0
this.a.a3(z)}},
bj:function(){this.cg()
this.iM(1)}},jy:{"^":"b9;0ch,0f,a,b,0c,0d,0e",
cE:function(a){var z,y
z=this.ch
if(!$.p.$2(z,a)){y=this.ch
this.ch=a
z=new D.C(this.b+".shininess",y,a,this,[P.q])
z.b=!0
this.a.a3(z)}},
bj:function(){this.cg()
this.cE(100)}},ks:{"^":"bH;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z},
a3:[function(a){var z
H.d(a,"$isx")
z=this.e
if(!(z==null))z.I(a)},function(){return this.a3(null)},"dH","$1","$0","gaX",0,2,1],
fi:function(a,b){var z,y,x,w,v,u
if(this.a==null){z=H.d(a.fr.k(0,"Skybox"),"$isff")
if(z==null){y=a.a
z=new A.ff(y,"Skybox")
z.dE(y,"Skybox")
z.f9($.ku,$.kt)
z.z=z.x.k(0,"posAttr")
z.Q=H.i(z.y.k(0,"fov"),"$isY")
z.ch=H.i(z.y.k(0,"ratio"),"$isY")
z.cx=H.i(z.y.k(0,"boxClr"),"$isJ")
z.cy=H.i(z.y.k(0,"boxTxt"),"$isaj")
z.db=H.i(z.y.k(0,"viewMat"),"$isaA")
a.en(z)}this.a=z}if(b.e==null){y=b.d.ev(new Z.fZ(a.a),$.$get$aB())
y.aO($.$get$aB()).e=this.a.z.c
b.e=y}y=this.c
if(y!=null){y.a=1
if(!y.c&&y.d>=6){y.c=!0
x=a.a
C.b.bM(x,33985)
C.b.af(x,34067,y.b)}}y=a.d
x=a.c
w=this.a
w.a7(a)
v=this.b
u=w.Q
C.b.O(u.a,u.d,v)
v=w.ch
C.b.O(v.a,v.d,y/x)
x=this.c
w.cy.fR(x)
x=this.d
y=w.cx
C.b.B(y.a,y.d,x.a,x.b,x.c)
x=a.db.ga5().d7()
w=w.db
w.toString
w.ap(x.aj(0,!0))
y=b.e
if(y instanceof Z.d4){y.a7(a)
y.ai(a)
y.ay(a)}else b.e=null
y=this.a
y.toString
x=a.a
C.b.dn(x,null)
y.x.eC()
y=this.c
if(y!=null)if(y.c){y.c=!1
C.b.bM(x,33984+y.a)
C.b.af(x,34067,null)}}},bH:{"^":"a;"}}],["","",,T,{"^":"",cE:{"^":"d1;"},fm:{"^":"cE;"},kE:{"^":"fm;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gt:function(){var z=this.y
if(z==null){z=D.F()
this.y=z}return z},
m:{
fn:function(a,b){var z=new T.kE()
z.a=a
z.b=b
z.c=!1
z.d=!1
z.e=0
z.f=0
z.r=0
z.x=0
return z}}},fo:{"^":"cE;0a,0b,0c,0d,0e",
gt:function(){var z=this.e
if(z==null){z=D.F()
this.e=z}return z}},kF:{"^":"a;a,0b,0c,0d,0e",
b_:function(a,b,c,d,e,f){var z,y
z=document.createElement("img")
z.src=c;++this.d
y=W.ab
W.a1(z,"load",H.l(new T.kG(this,z,!1,b,!1,d,a),{func:1,ret:-1,args:[y]}),!1,y)},
iH:function(a,b,c){var z,y,x,w
b=V.bV(b,2)
z=V.bV(a.width,2)
y=V.bV(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.d6(null,null)
x.width=z
x.height=y
w=H.d(C.q.fF(x,"2d"),"$isd7")
w.imageSmoothingEnabled=!1;(w&&C.D).jY(w,a,0,0,x.width,x.height)
return P.nb(C.D.hM(w,0,0,x.width,x.height))}}},kG:{"^":"m:14;a,b,c,d,e,f,r",
$1:function(a){var z,y,x
z=this.a
y=z.iH(this.b,z.c,this.c)
x=z.a
C.b.af(x,34067,this.d)
C.b.kC(x,37440,this.e?1:0)
C.b.kS(x,this.f,0,6408,6408,5121,y)
C.b.af(x,34067,null)
x=this.r
if(++x.d>=6){x=x.e
if(!(x==null))x.cX()}++z.e}}}],["","",,V,{"^":"",bv:{"^":"a;",
ba:function(a){return!0},
i:function(a){return"all"},
$isaE:1},aE:{"^":"a;"},eN:{"^":"a;0a",
sad:function(a){this.a=H.k(a,"$isb",[V.aE],"$asb")},
ba:["fX",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)if(z[x].ba(a))return!0
return!1}],
i:["dD",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isaE:1},ay:{"^":"eN;0a",
ba:function(a){return!this.fX(a)},
i:function(a){return"!["+this.dD(0)+"]"}},k2:{"^":"a;0a,0b",
ba:function(a){return this.a<=a&&this.b>=a},
i:function(a){var z,y
z=H.be(this.a)
y=H.be(this.b)
return z+".."+y},
$isaE:1,
m:{
R:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.e(P.u("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.c.J(a,0)
y=C.c.J(b,0)
x=new V.k2()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},kg:{"^":"a;0a",
siL:function(a){this.a=H.k(a,"$isK",[P.n,P.M],"$asK")},
h2:function(a){var z,y
if(a.a.length<=0)throw H.e(P.u("May not create a SetMatcher with zero characters."))
z=new H.b2(0,0,[P.n,P.M])
for(y=new H.dh(a,a.gp(a),0,[H.a5(a,"X",0)]);y.D();)z.q(0,y.d,!0)
this.siL(z)},
ba:function(a){return this.a.bP(a)},
i:function(a){return P.ca(this.a.gaG(),0,null)},
$isaE:1,
m:{
w:function(a){var z=new V.kg()
z.h2(a)
return z}}},dr:{"^":"a;a,b,0c,0d",
sj5:function(a){this.c=H.k(a,"$isb",[V.dx],"$asb")},
l:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.dx(this.a.j(0,b))
w.sad(H.c([],[V.aE]))
w.c=!1
C.a.h(this.c,w)
return w},
k5:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.ba(a))return w}return},
i:function(a){return this.b}},fv:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.e3(this.b,"\n","\\n")
y=H.e3(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},dw:{"^":"a;a,b,0c",
siB:function(a){var z=P.h
this.c=H.k(a,"$isK",[z,z],"$asK")},
aR:function(a,b,c){var z,y,x
H.k(c,"$isb",[P.h],"$asb")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.z)(c),++y){x=c[y]
this.c.q(0,x,b)}},
i:function(a){return this.b}},kL:{"^":"a;0a,0b,0c",
siW:function(a){this.a=H.k(a,"$isK",[P.h,V.dr],"$asK")},
sj1:function(a){this.b=H.k(a,"$isK",[P.h,V.dw],"$asK")},
j:function(a,b){var z=this.a.k(0,b)
if(z==null){z=new V.dr(this,b)
z.sj5(H.c([],[V.dx]))
z.d=null
this.a.q(0,b,z)}return z},
T:function(a){var z,y
z=this.b.k(0,a)
if(z==null){z=new V.dw(this,a)
y=P.h
z.siB(new H.b2(0,0,[y,y]))
this.b.q(0,a,z)}return z},
fq:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.fv])
y=this.c
x=[P.n]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.c.J(a,t)
r=y.k5(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.ca(w,0,null)
throw H.e(P.u("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.ca(w,0,null)
p=y.d
o=p.c.k(0,q)
u=new V.fv(o==null?p.b:o,q,t)}++t}}},
m:{
cF:function(){var z,y
z=new V.kL()
y=P.h
z.siW(new H.b2(0,0,[y,V.dr]))
z.sj1(new H.b2(0,0,[y,V.dw]))
z.c=null
return z}}},dx:{"^":"eN;b,0c,0a",
i:function(a){return this.b.b+": "+this.dD(0)}}}],["","",,X,{"^":"",i6:{"^":"cD;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
gt:function(){var z=this.fr
if(z==null){z=D.F()
this.fr=z}return z},
aq:function(a){var z=this.fr
if(!(z==null))z.I(a)},
saT:function(a,b){var z
if(b<1)b=1
z=this.a
if(z!==b){this.y=null
this.a=b
this.c=b
z=new D.C("width",z,b,this,[P.n])
z.b=!0
this.aq(z)}},
saP:function(a,b){var z
if(b<1)b=1
z=this.b
if(z!==b){this.y=null
this.b=b
this.d=b
z=new D.C("height",z,b,this,[P.n])
z.b=!0
this.aq(z)}},
a7:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n
if(this.y==null){z=a.a
y=this.ch
x=this.a
w=this.b
v=H.a2(C.b.cc(z,3379))
u=V.bV(x,2)
t=V.bV(w,2)
v=V.bV(v,2)
u=Math.min(u,v)
t=Math.min(t,v)
s=z.createTexture()
C.b.af(z,3553,s)
C.b.aI(z,3553,10242,33071)
C.b.aI(z,3553,10243,33071)
C.b.aI(z,3553,10241,9729)
C.b.aI(z,3553,10240,9729)
C.b.fm(z,3553,0,6408,u,t,0,6408,5121,null)
C.b.af(z,3553,null)
r=T.fn(0,s)
r.e=x
r.f=w
r.r=u
r.x=t
if(!r.d){r.d=!0
x=r.y
if(!(x==null))x.cX()}y.b=r.b
y.c=r.c
y.d=r.d
y.e=r.e
y.f=r.f
y.r=r.r
y.x=r.x
y=y.y
if(!(y==null))y.cX()
y=this.ch
x=y.b
this.z=x
this.c=y.r
this.d=y.x
C.b.af(z,3553,x)
y=z.createRenderbuffer()
this.Q=y
C.b.er(z,36161,y)
C.b.kJ(z,36161,33189,this.c,this.d)
y=z.createFramebuffer()
this.y=y
C.b.bo(z,36160,y)
C.b.kd(z,36160,36064,3553,this.z,0)
C.b.kc(z,36160,36096,36161,this.Q)
C.b.af(z,3553,null)
C.b.er(z,36161,null)
C.b.bo(z,36160,null)}z=a.a
C.b.bo(z,36160,this.y)
C.b.bs(z,2884)
C.b.bs(z,2929)
C.b.eB(z,513)
y=this.dy
x=y.c
a.c=C.j.a9(x*this.a)
w=y.d
a.d=C.j.a9(w*this.b)
q=y.a
p=this.c
o=C.j.a9(q*p)
y=y.b
q=this.d
C.b.fw(z,o,C.j.a9(y*q),C.j.a9(x*p),C.j.a9(w*q))
C.b.ey(z,this.db)
if(this.cy){y=this.cx
C.b.ex(z,y.a,y.b,y.c,y.d)
n=16640}else n=256
if(n>0)C.b.ew(z,n)},
ay:function(a){C.b.bo(a.a,36160,null)}},cn:{"^":"a;",$isaH:1},iO:{"^":"cD;0a,0b,0c,0d,0e,0f,0r,0x",
gt:function(){var z=this.x
if(z==null){z=D.F()
this.x=z}return z},
a7:function(a){var z,y,x,w,v,u,t
z=a.a
C.b.bo(z,36160,null)
C.b.bs(z,2884)
C.b.bs(z,2929)
C.b.eB(z,513)
y=z.drawingBufferWidth
x=z.drawingBufferHeight
w=this.r
v=w.a
if(typeof y!=="number")return H.A(y)
u=C.j.a9(v*y)
v=w.b
if(typeof x!=="number")return H.A(x)
t=C.j.a9(v*x)
v=C.j.a9(w.c*y)
a.c=v
w=C.j.a9(w.d*x)
a.d=w
C.b.fw(z,u,t,v,w)
C.b.ey(z,this.c)
w=this.a
C.b.ex(z,w.a,w.b,w.c,w.d)
C.b.ew(z,16640)},
ay:function(a){},
m:{
ey:function(a,b,c,d,e,f,g){var z,y
z=new X.iO()
y=new V.au(0,0,0,1)
z.a=y
z.b=!0
z.c=e
z.d=!0
z.e=g
z.f=!1
y=V.fa()
z.r=y
return z}}},iX:{"^":"a;0a,0b",
gt:function(){var z=this.b
if(z==null){z=D.F()
this.b=z}return z},
a7:function(a){var z
a.cy.c7(V.ba())
z=V.ba()
a.db.c7(z)},
ay:function(a){a.cy.aQ()
a.db.aQ()},
$isaH:1,
$iscn:1},jK:{"^":"a;0a,0b,0c,0d,0e,0f",
gt:function(){var z=this.f
if(z==null){z=D.F()
this.f=z}return z},
aq:[function(a){var z
H.d(a,"$isx")
z=this.f
if(!(z==null))z.I(a)},function(){return this.aq(null)},"l2","$1","$0","ghl",0,2,1],
a7:function(a){var z,y,x,w,v,u,t,s,r,q
z=a.c
y=a.d
x=this.c
w=this.d
v=this.e
u=v-w
t=1/Math.tan(x*0.5)
s=V.aF(-t/(z/y),0,0,0,0,t,0,0,0,0,v/u,-v*w/u,0,0,1,0)
a.cy.c7(s)
z=$.f1
if(z==null){z=V.f4()
y=V.fT()
x=$.fP
if(x==null){x=new V.E(0,0,-1)
$.fP=x}x=V.eR(z,y,x)
$.f1=x
r=x}else r=z
z=this.b
if(z!=null){q=z.aS(a,this)
if(q!=null)r=q.u(0,r)}a.db.c7(r)},
ay:function(a){a.cy.aQ()
a.db.aQ()},
$isaH:1,
$iscn:1,
m:{
dp:function(a,b,c,d,e){var z,y,x
z=new X.jK()
z.c=1.0471975511965976
z.d=0.1
z.e=2000
if(null!=c){y=z.b
z.b=c
if(c!=null)c.gt().h(0,z.ghl())
x=new D.C("mover",y,z.b,z,[U.ad])
x.b=!0
z.aq(x)}x=z.c
if(!$.p.$2(x,b)){y=z.c
z.c=b
x=new D.C("fov",y,b,z,[P.q])
x.b=!0
z.aq(x)}x=z.d
if(!$.p.$2(x,d)){y=z.d
z.d=d
x=new D.C("near",y,d,z,[P.q])
x.b=!0
z.aq(x)}x=z.e
if(!$.p.$2(x,a)){y=z.e
z.e=a
x=new D.C("far",y,a,z,[P.q])
x.b=!0
z.aq(x)}return z}}},cD:{"^":"a;"}}],["","",,V,{"^":"",
nU:function(a){P.kK(C.V,new V.nV(a))},
aZ:{"^":"a;0d",
scp:function(a){this.d=H.k(a,"$isb",[[P.b,W.b0]],"$asb")},
bG:function(a){this.b=new P.iV(C.Y)
this.c=null
this.scp(H.c([],[[P.b,W.b0]]))},
P:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.c([],[W.b0]))
y=a.split("\n")
for(z=y.length,x=[W.b0],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.c([],x))
t=document.createElement("div")
t.className="codePart"
H.D(u)
s=this.b.hy(u,0,u.length)
r=s==null?u:s
C.k.fO(t,H.e3(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gaH(this.d),t)}},
ff:function(a){var z,y,x,w
H.k(a,"$isb",[P.h],"$asb")
this.scp(H.c([],[[P.b,W.b0]]))
z=C.a.l(a,"\n")
y=this.c
if(y==null){y=this.bQ()
this.c=y}for(y=y.fq(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)this.c6(y[w])}},
nV:{"^":"m:52;a",
$1:function(a){H.d(a,"$isbf")
P.e2(C.j.fp(this.a.gkb(),2)+" fps")}},
ir:{"^":"aZ;a,0b,0c,0d",
c6:function(a){switch(a.a){case"Class":this.P(a.b,"#551")
break
case"Comment":this.P(a.b,"#777")
break
case"Id":this.P(a.b,"#111")
break
case"Num":this.P(a.b,"#191")
break
case"Reserved":this.P(a.b,"#119")
break
case"String":this.P(a.b,"#171")
break
case"Symbol":this.P(a.b,"#616")
break
case"Type":this.P(a.b,"#B11")
break
case"Whitespace":this.P(a.b,"#111")
break}},
bQ:function(){var z,y,x,w
z=V.cF()
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
C.a.h(z.j(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.bv())
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
C.a.h(z.j(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.bv())
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
x=new V.ay()
w=[V.aE]
x.sad(H.c([],w))
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
x=new V.ay()
x.sad(H.c([],w))
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
x.d=x.a.T("Num")
x=z.j(0,"Float")
x.d=x.a.T("Num")
x=z.j(0,"Sym")
x.d=x.a.T("Symbol")
x=z.j(0,"CloseDoubleStr")
x.d=x.a.T("String")
x=z.j(0,"CloseSingleStr")
x.d=x.a.T("String")
x=z.j(0,"EndComment")
x.d=x.a.T("Comment")
x=z.j(0,"Whitespace")
x.d=x.a.T("Whitespace")
x=z.j(0,"Id")
y=x.a.T("Id")
x.d=y
x=[P.h]
y.aR(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.aR(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.aR(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
iP:{"^":"aZ;a,0b,0c,0d",
c6:function(a){switch(a.a){case"Builtin":this.P(a.b,"#411")
break
case"Comment":this.P(a.b,"#777")
break
case"Id":this.P(a.b,"#111")
break
case"Num":this.P(a.b,"#191")
break
case"Preprocess":this.P(a.b,"#737")
break
case"Reserved":this.P(a.b,"#119")
break
case"Symbol":this.P(a.b,"#611")
break
case"Type":this.P(a.b,"#171")
break
case"Whitespace":this.P(a.b,"#111")
break}},
bQ:function(){var z,y,x,w
z=V.cF()
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
C.a.h(z.j(0,"Slash").l(0,"Sym").a,new V.bv())
x=z.j(0,"Comment").l(0,"EndComment")
y=V.w(new H.v("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").l(0,"Comment")
x=new V.ay()
w=[V.aE]
x.sad(H.c([],w))
C.a.h(y.a,x)
y=V.w(new H.v("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").l(0,"Preprocess")
x=V.w(new H.v("#"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").l(0,"Preprocess")
y=new V.ay()
y.sad(H.c([],w))
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
y.d=y.a.T("Num")
y=z.j(0,"Float")
y.d=y.a.T("Num")
y=z.j(0,"Sym")
y.d=y.a.T("Symbol")
y=z.j(0,"EndComment")
y.d=y.a.T("Comment")
y=z.j(0,"EndPreprocess")
y.d=y.a.T("Preprocess")
y=z.j(0,"Whitespace")
y.d=y.a.T("Whitespace")
y=z.j(0,"Id")
x=y.a.T("Id")
y.d=x
y=[P.h]
x.aR(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.aR(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.aR(0,"Builtin",H.c(["gl_FragColor","gl_Position"],y))
return z}},
iQ:{"^":"aZ;a,0b,0c,0d",
c6:function(a){switch(a.a){case"Attr":this.P(a.b,"#911")
this.P("=","#111")
break
case"Id":this.P(a.b,"#111")
break
case"Other":this.P(a.b,"#111")
break
case"Reserved":this.P(a.b,"#119")
break
case"String":this.P(a.b,"#171")
break
case"Symbol":this.P(a.b,"#616")
break}},
bQ:function(){var z,y,x
z=V.cF()
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
C.a.h(z.j(0,"OpenStr").l(0,"OpenStr").a,new V.bv())
C.a.h(z.j(0,"Start").l(0,"Other").a,new V.bv())
y=z.j(0,"Other").l(0,"Other")
x=new V.ay()
x.sad(H.c([],[V.aE]))
C.a.h(y.a,x)
y=V.w(new H.v('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.R("a","z")
C.a.h(x.a,y)
y=V.R("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Sym")
y.d=y.a.T("Symbol")
y=z.j(0,"CloseStr")
y.d=y.a.T("String")
y=z.j(0,"Id")
x=y.a.T("Id")
y.d=x
x.aR(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
x=z.j(0,"Attr")
x.d=x.a.T("Attr")
x=z.j(0,"Other")
x.d=x.a.T("Other")
return z}},
jM:{"^":"aZ;a,0b,0c,0d",
ff:function(a){H.k(a,"$isb",[P.h],"$asb")
this.scp(H.c([],[[P.b,W.b0]]))
this.P(C.a.l(a,"\n"),"#111")},
c6:function(a){},
bQ:function(){return}},
k_:{"^":"a;a,b,0c",
ei:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.l(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.fK().gdh().k(0,H.j(z))
if(y==null)if(d){c.$0()
this.eg(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.e7(this.c).h(0,v)
t=W.iZ("radio")
t.checked=x
t.name=z
z=W.ab
W.a1(t,"change",H.l(new V.k0(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
C.G.E(v,t)
s=w.createElement("span")
s.textContent=b
C.G.E(v,s)
J.e7(this.c).h(0,w.createElement("br"))},
aC:function(a,b,c){return this.ei(a,b,c,!1)},
eg:function(a){var z,y,x,w,v
z=P.fK()
y=P.h
x=P.jg(z.gdh(),y,y)
x.q(0,this.a,a)
w=z.fj(0,x)
y=window.history
v=w.i(0)
y.toString;(y&&C.X).iD(y,new P.mf([],[]).dq(""),"",v)}},
k0:{"^":"m:14;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.eg(this.d)}}},
km:{"^":"a;0a,0b",
h3:function(a,b){var z,y,x,w,v,u,t
z=document
y=z.body
x=z.createElement("div")
x.className="scrollTop";(y&&C.p).E(y,x)
w=z.createElement("div")
w.className="scrollPage"
C.p.E(y,w)
v=z.createElement("div")
v.className="pageCenter"
C.k.E(w,v)
if(a.length!==0){z.title=a
u=z.createElement("div")
u.className="pageTitle"
u.textContent=a
C.k.E(v,u)}t=z.createElement("div")
this.a=t
C.k.E(v,t)
this.b=null
t=W.ab
W.a1(z,"scroll",H.l(new V.kp(x),{func:1,ret:-1,args:[t]}),!1,t)},
em:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.k(a,"$isb",[P.h],"$asb")
this.iR()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.fq(C.a.kj(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
switch(u.a){case"Bold":t=z.createElement("div")
t.className="boldPar"
t.textContent=u.b
C.k.E(y,t)
break
case"Italic":t=z.createElement("div")
t.className="italicPar"
t.textContent=u.b
C.k.E(y,t)
break
case"Code":t=z.createElement("div")
t.className="codePar"
t.textContent=u.b
C.k.E(y,t)
break
case"Link":s=u.b
if(H.hO(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.f(r,1)
q.href=H.D(r[1])
q.textContent=H.D(r[0])
C.k.E(y,q)}else{p=P.ce(C.J,s,C.m,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.j(p)
q.textContent=s
C.k.E(y,q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
C.k.E(y,t)
break}}C.k.E(this.a,y)},
fE:function(a){var z,y,x,w
z=new V.ir("dart")
z.bG("dart")
y=new V.iP("glsl")
y.bG("glsl")
x=new V.iQ("html")
x.bG("html")
w=C.a.k7(H.c([z,y,x],[V.aZ]),new V.kq(a))
if(w!=null)return w
z=new V.jM("plain")
z.bG("plain")
return z},
ej:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.k(a2,"$isb",[P.h],"$asb")
z=H.c([],[P.n])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.bU(w).ab(w,"+")){C.a.q(a2,x,C.c.aA(w,1))
C.a.h(z,1)
y=!0}else if(C.c.ab(w,"-")){C.a.q(a2,x,C.c.aA(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.fE(a0)
v.ff(a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
C.k.E(t,s)
C.k.E(this.a,t)
r=P.ce(C.J,a,C.m,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.e9(null)
n.href="#"+H.j(r)
n.textContent=a
C.k.E(o,n)
C.x.E(p,o)
C.n.E(q,p)
C.o.E(s,q)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.z)(w),++e)C.x.E(f,w[e])
C.n.E(j,i)
C.n.E(j,h)
C.n.E(j,f)
C.o.E(s,j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.z)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gU(w);b.D();)C.x.E(h,b.gK())
C.n.E(j,i)
C.n.E(j,h)
C.o.E(s,j)}},
jx:function(a){var z,y,x,w,v,u,t
H.k(a,"$isb",[P.h],"$asb")
z=document
y=z.createElement("table")
y.id="shellTable"
x=y.style
x.width="100%"
x.padding="0px"
x.marginLeft="auto"
x.marginRight="auto"
C.k.E(this.a,y)
w=C.o.hP(y,-1)
x=H.d((w&&C.n).dZ(w,-1),"$iscC").style
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
t=H.d(C.n.dZ(w,-1),"$iscC")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto";(t&&C.x).E(t,u)}},
iR:function(){var z,y,x,w
if(this.b!=null)return
z=V.cF()
z.c=z.j(0,"Start")
y=z.j(0,"Start").l(0,"Bold")
x=V.w(new H.v("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Bold").l(0,"Bold")
x=new V.ay()
w=[V.aE]
x.sad(H.c([],w))
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
x=new V.ay()
x.sad(H.c([],w))
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
x=new V.ay()
x.sad(H.c([],w))
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
y=new V.ay()
y.sad(H.c([],w))
C.a.h(x.a,y)
x=V.w(new H.v("|]"))
C.a.h(y.a,x)
x=z.j(0,"LinkTail").l(0,"LinkEnd")
y=V.w(new H.v("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkTail").l(0,"LinkTail")
y=new V.ay()
y.sad(H.c([],w))
C.a.h(x.a,y)
x=V.w(new H.v("|]"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Start").l(0,"Other").a,new V.bv())
x=z.j(0,"Other").l(0,"Other")
y=new V.ay()
y.sad(H.c([],w))
C.a.h(x.a,y)
x=V.w(new H.v("*_`["))
C.a.h(y.a,x)
x=z.j(0,"BoldEnd")
x.d=x.a.T("Bold")
x=z.j(0,"ItalicEnd")
x.d=x.a.T("Italic")
x=z.j(0,"CodeEnd")
x.d=x.a.T("Code")
x=z.j(0,"LinkEnd")
x.d=x.a.T("Link")
x=z.j(0,"Other")
x.d=x.a.T("Other")
this.b=z},
m:{
kn:function(a,b){var z=new V.km()
z.h3(a,!0)
return z}}},
kp:{"^":"m:14;a",
$1:function(a){P.ft(C.y,new V.ko(this.a))}},
ko:{"^":"m:0;a",
$0:function(){var z,y,x
z=C.j.a9(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}},
kq:{"^":"m:53;a",
$1:function(a){return H.d(a,"$isaZ").a===this.a}}}],["","",,V,{"^":"",
hJ:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=V.kn("Test 027",!0)
y=W.d6(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
C.k.E(z.a,y)
x=[P.h]
z.em(H.c(["Test of a back buffer target for rendering to a texture. ","That back buffer texture is applied to a box."],x))
z.jx(H.c(["shapes"],x))
z.em(H.c(["\xab[Back to Tests|../]"],x))
x=document
w=C.z.dw(x,"testCanvas")
if(w==null)H.r(P.u("Failed to find an element with the identifier, testCanvas."))
v=E.kI(w,!0,!0,!0,!1)
u=U.eA(null)
t=new U.fb()
t.a=0
t.b=0
t.c=0
t.d=0
t.e=0
t.f=0
t.r=0
t.sfz(0)
t.sfh(0)
t.sfk(0)
s=t.d
if(!$.p.$2(s,0.1)){r=t.d
t.d=0.1
s=new D.C("deltaYaw",r,0.1,t,[P.q])
s.b=!0
t.M(s)}s=t.e
if(!$.p.$2(s,0.21)){r=t.e
t.e=0.21
s=new D.C("deltaPitch",r,0.21,t,[P.q])
s.b=!0
t.M(s)}s=t.f
if(!$.p.$2(s,0.32)){r=t.f
t.f=0.32
s=new D.C("deltaRoll",r,0.32,t,[P.q])
s.b=!0
t.M(s)}u.h(0,t)
u.h(0,U.da(V.eV(0,0,5)))
q=X.dp(2000,1.0471975511965976,u,0.1,null)
p=new X.i6()
p.a=512
p.b=512
p.c=512
p.d=512
p.e=!0
p.f=!1
p.r=1
p.x=1
p.ch=T.fn(0,null)
p.cx=new V.au(0,0,0,1)
p.cy=!0
p.db=2000
p.dx=!0
p.dy=V.fa()
p.saT(0,512)
p.saP(0,512)
if(p.cy){p.cy=!1
t=new D.C("clearColor",!0,!1,p,[P.M])
t.b=!0
p.aq(t)}t=v.f
s=t.a
o=s.createTexture()
C.b.af(s,34067,o)
C.b.aI(s,34067,10242,10497)
C.b.aI(s,34067,10243,10497)
C.b.aI(s,34067,10241,9729)
C.b.aI(s,34067,10240,9729)
C.b.af(s,34067,null)
n=new T.fo()
n.a=0
n.b=o
n.c=!1
n.d=0
t.b_(n,o,"../resources/maskonaive/posx.jpg",34069,!1,!1)
t.b_(n,o,"../resources/maskonaive/negx.jpg",34070,!1,!1)
t.b_(n,o,"../resources/maskonaive/posy.jpg",34071,!1,!1)
t.b_(n,o,"../resources/maskonaive/negy.jpg",34072,!1,!1)
t.b_(n,o,"../resources/maskonaive/posz.jpg",34073,!1,!1)
t.b_(n,o,"../resources/maskonaive/negz.jpg",34074,!1,!1)
m=new M.io()
m.sb4(null)
m.sbz(0,null)
m.sbd(null)
t=E.dc(null,!0,null,"",null,null)
l=F.cB()
s=l.a
k=new V.E(-1,-1,1)
k=k.v(0,Math.sqrt(k.F(k)))
j=s.bN(new V.aP(1,2,4,6),new V.au(1,0,0,1),new V.T(-1,-1,0),new V.a4(0,1),k,null)
s=l.a
k=new V.E(1,-1,1)
k=k.v(0,Math.sqrt(k.F(k)))
i=s.bN(new V.aP(0,3,4,6),new V.au(0,0,1,1),new V.T(1,-1,0),new V.a4(1,1),k,null)
s=l.a
k=new V.E(1,1,1)
k=k.v(0,Math.sqrt(k.F(k)))
h=s.bN(new V.aP(0,2,5,6),new V.au(0,1,0,1),new V.T(1,1,0),new V.a4(1,0),k,null)
s=l.a
k=V.aO()
g=new V.E(-1,1,1)
g=g.v(0,Math.sqrt(g.F(g)))
f=s.bN(new V.aP(0,2,4,7),new V.au(1,1,0,1),new V.T(-1,1,0),k,g,null)
l.d.ek(H.c([j,i,h,f],[F.af]))
l.au()
t.saa(0,l)
m.d=t
m.e=null
t=new O.ks()
t.b=1.0471975511965976
t.d=new V.a6(1,1,1)
r=t.c
t.c=n
n.gt().h(0,t.gaX())
s=new D.C("boxTexture",r,t.c,t,[T.fo])
s.b=!0
t.a3(s)
m.sbd(t)
m.sbz(0,p)
m.sb4(q)
e=E.dc(null,!0,null,"",null,null)
e.saa(0,F.hQ(30,1,15,0.5))
d=O.eP()
t=d.dx
c=V.fT()
s=U.da(V.eR(V.f4(),c,new V.E(0,-1,-1)))
b=new V.a6(1,1,1)
k=new D.cp()
k.c=new V.a6(1,1,1)
k.a=V.fU()
r=k.b
k.b=s
s.gt().h(0,k.ghb())
s=new D.C("mover",r,k.b,k,[U.ad])
s.b=!0
k.aW(s)
if(!k.c.A(0,b)){r=k.c
k.c=b
s=new D.C("color",r,b,k,[V.a6])
s.b=!0
k.aW(s)}t.h(0,k)
t=d.r
t.saE(0,new V.a6(0,0,1))
t=d.x
t.saE(0,new V.a6(0,1,0))
t=d.z
t.saE(0,new V.a6(1,0,0))
t=d.z
if(t.c===C.d){t.c=C.i
t.cg()
t.cE(100)
s=t.a
s.a=null
s.a3(null)}t.cE(10)
a=M.ew(null,null,null,null)
a.sb4(q)
a.sbd(d)
a.sbz(0,p)
a.d.h(0,e)
a0=U.eA(null)
t=v.r
s=new U.lc()
k=U.d9()
k.sds(0,!0)
k.sd9(6.283185307179586)
k.sdc(0)
k.sa4(0,0)
k.sda(100)
k.sX(0)
k.scV(0.5)
s.b=k
g=s.gb0()
k.gt().h(0,g)
k=U.d9()
k.sds(0,!0)
k.sd9(6.283185307179586)
k.sdc(0)
k.sa4(0,0)
k.sda(100)
k.sX(0)
k.scV(0.5)
s.c=k
k.gt().h(0,g)
s.d=null
s.e=!1
s.f=!1
s.r=!1
s.x=2.5
s.y=2.5
s.z=2
s.Q=4
s.cx=!1
s.ch=!1
s.cy=0
s.db=0
s.dx=null
s.dy=0
s.fr=null
s.fx=null
a1=new X.aG(!1,!1,!1)
r=s.d
s.d=a1
k=[X.aG]
g=new D.C("modifiers",r,a1,s,k)
g.b=!0
s.M(g)
g=s.f
if(g!==!1){s.f=!1
g=new D.C("invertX",g,!1,s,[P.M])
g.b=!0
s.M(g)}g=s.r
if(g!==!1){s.r=!1
g=new D.C("invertY",g,!1,s,[P.M])
g.b=!0
s.M(g)}s.bn(t)
a0.h(0,s)
t=v.r
s=new U.lb()
g=U.d9()
g.sds(0,!0)
g.sd9(6.283185307179586)
g.sdc(0)
g.sa4(0,0)
g.sda(100)
g.sX(0)
g.scV(0.2)
s.b=g
g.gt().h(0,s.gb0())
s.c=null
s.d=!1
s.e=2.5
s.f=2
s.r=4
s.y=!1
s.x=!1
s.z=0
s.Q=null
s.ch=0
s.cx=null
s.cy=null
a1=new X.aG(!0,!1,!1)
r=s.c
s.c=a1
g=new D.C("modifiers",r,a1,s,k)
g.b=!0
s.M(g)
s.bn(t)
a0.h(0,s)
t=v.r
s=new U.ld()
s.c=0.01
s.d=0
s.e=0
a1=new X.aG(!1,!1,!1)
s.b=a1
k=new D.C("modifiers",null,a1,s,k)
k.b=!0
s.M(k)
s.bn(t)
a0.h(0,s)
a0.h(0,U.da(V.eV(0,0,5)))
a2=X.dp(2000,1.0471975511965976,a0,0.1,null)
a3=E.dc(null,!0,null,"",null,null)
a3.saa(0,F.cQ(1,null,null,1))
a4=O.eP()
t=a4.f
s=p.ch
k=t.c
if(k!==C.e){if(k===C.d)t.bj()
t.c=C.e
t.iO(null)
k=t.a
k.a=null
k.a3(null)}t.iN(s)
a5=M.ew(null,null,null,null)
a5.sb4(a2)
a5.sbd(a4)
a5.d.h(0,a3)
t=M.aJ
s=H.c([m,a,a5],[t])
k=new M.ii()
k.bH(t)
k.e=!1
k.f=null
k.bf(k.gio(),k.gip())
k.ae(0,s)
t=v.d
if(t!==k){if(t!=null)t.gt().L(0,v.gdF())
v.d=k
k.gt().h(0,v.gdF())
v.h6()}t=new V.k_("shapes",!0)
x=C.z.dw(x,"shapes")
t.c=x
if(x==null)H.r("Failed to find shapes for RadioGroup")
t.ei(0,"Cube",new V.nE(a3),!0)
t.aC(0,"Cuboid",new V.nF(a3))
t.aC(0,"Cylinder",new V.nG(a3))
t.aC(0,"Cone",new V.nH(a3))
t.aC(0,"Cylindrical",new V.nI(a3))
t.aC(0,"Sphere",new V.nJ(a3))
t.aC(0,"Spherical",new V.nK(a3))
t.aC(0,"Toroid",new V.nL(a3))
t.aC(0,"Knot",new V.nM(a3))
x=v.z
if(x==null){x=D.F()
v.z=x}t={func:1,ret:-1,args:[D.x]}
s=H.l(new V.nN(z,a4),t)
if(x.b==null)x.sbk(H.c([],[t]))
x=x.b;(x&&C.a).h(x,s)
V.nU(v)},
nE:{"^":"m:0;a",
$0:function(){this.a.saa(0,F.cQ(1,null,null,1))}},
nF:{"^":"m:0;a",
$0:function(){this.a.saa(0,F.cQ(15,null,new V.nD(),15))}},
nD:{"^":"m:5;",
$3:function(a,b,c){var z,y,x,w
z=Math.cos(c*4*3.141592653589793+3.141592653589793)
y=Math.cos(b*4*3.141592653589793+3.141592653589793)
x=a.f
x=new V.E(x.a,x.b,x.c)
w=x.v(0,Math.sqrt(x.F(x)))
x=a.f
y=w.u(0,z*0.1+y*0.1)
a.sa4(0,x.H(0,new V.T(y.a,y.b,y.c)))}},
nG:{"^":"m:0;a",
$0:function(){this.a.saa(0,F.hA(1,!0,!0,1,30,1))}},
nH:{"^":"m:0;a",
$0:function(){this.a.saa(0,F.hA(1,!0,!1,1,30,0))}},
nI:{"^":"m:0;a",
$0:function(){this.a.saa(0,F.hB(!0,!0,25,new V.nC(),50))}},
nC:{"^":"m:9;",
$2:function(a,b){return Math.cos(b*4*3.141592653589793+3.141592653589793)*0.2+Math.cos(a*6*3.141592653589793)*0.3+0.8}},
nJ:{"^":"m:0;a",
$0:function(){this.a.saa(0,F.hN(6,null,1,6))}},
nK:{"^":"m:0;a",
$0:function(){this.a.saa(0,F.hN(10,new V.nB(),1,10))}},
nB:{"^":"m:9;",
$2:function(a,b){var z,y
z=a-0.5
y=b-0.5
return Math.cos(Math.sqrt(z*z+y*y)*3.141592653589793)*0.3}},
nL:{"^":"m:0;a",
$0:function(){this.a.saa(0,F.hQ(30,1,15,0.5))}},
nM:{"^":"m:0;a",
$0:function(){this.a.saa(0,F.ny(120,1,2,12,0.3,3))}},
nN:{"^":"m:8;a,b",
$1:function(a){var z,y,x,w
H.d(a,"$isx")
z=this.a
y=this.b
x=y.a
w=[P.h]
z.ej("Vertex Shader","glsl",0,H.c((x==null?null:x.c).split("\n"),w))
y=y.a
z.ej("Fragment Shader","glsl",0,H.c((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.N=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eF.prototype
return J.eE.prototype}if(typeof a=="string")return J.c5.prototype
if(a==null)return J.eG.prototype
if(typeof a=="boolean")return J.j2.prototype
if(a.constructor==Array)return J.b8.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c6.prototype
return a}if(a instanceof P.a)return a
return J.cS(a)}
J.br=function(a){if(typeof a=="string")return J.c5.prototype
if(a==null)return a
if(a.constructor==Array)return J.b8.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c6.prototype
return a}if(a instanceof P.a)return a
return J.cS(a)}
J.e_=function(a){if(a==null)return a
if(a.constructor==Array)return J.b8.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c6.prototype
return a}if(a instanceof P.a)return a
return J.cS(a)}
J.nl=function(a){if(typeof a=="number")return J.c4.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cb.prototype
return a}
J.nm=function(a){if(typeof a=="number")return J.c4.prototype
if(typeof a=="string")return J.c5.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cb.prototype
return a}
J.bU=function(a){if(typeof a=="string")return J.c5.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cb.prototype
return a}
J.a_=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c6.prototype
return a}if(a instanceof P.a)return a
return J.cS(a)}
J.P=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.N(a).A(a,b)}
J.hR=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.nl(a).V(a,b)}
J.e5=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.nm(a).u(a,b)}
J.hS=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nx(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.br(a).k(a,b)}
J.hT=function(a,b,c,d){return J.a_(a).ho(a,b,c,d)}
J.hU=function(a,b){return J.bU(a).J(a,b)}
J.cj=function(a,b){return J.a_(a).iy(a,b)}
J.cY=function(a,b,c){return J.a_(a).iC(a,b,c)}
J.e6=function(a,b){return J.a_(a).E(a,b)}
J.hV=function(a,b){return J.bU(a).a2(a,b)}
J.cZ=function(a,b,c){return J.br(a).jK(a,b,c)}
J.ck=function(a,b){return J.e_(a).ag(a,b)}
J.hW=function(a,b,c,d){return J.a_(a).k0(a,b,c,d)}
J.hX=function(a){return J.a_(a).gjE(a)}
J.e7=function(a){return J.a_(a).gcS(a)}
J.bW=function(a){return J.N(a).gZ(a)}
J.b6=function(a){return J.e_(a).gU(a)}
J.as=function(a){return J.br(a).gp(a)}
J.hY=function(a){return J.a_(a).gkD(a)}
J.hZ=function(a){return J.a_(a).gkR(a)}
J.d_=function(a,b){return J.a_(a).be(a,b)}
J.e8=function(a){return J.e_(a).kF(a)}
J.i_=function(a,b){return J.a_(a).kK(a,b)}
J.i0=function(a,b){return J.a_(a).skY(a,b)}
J.i1=function(a,b,c){return J.a_(a).fN(a,b,c)}
J.i2=function(a,b,c){return J.bU(a).w(a,b,c)}
J.i3=function(a){return J.bU(a).kX(a)}
J.ag=function(a){return J.N(a).i(a)}
I.a9=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.cl.prototype
C.q=W.d5.prototype
C.D=W.d7.prototype
C.k=W.b0.prototype
C.U=W.iw.prototype
C.W=W.iR.prototype
C.X=W.iS.prototype
C.z=W.iU.prototype
C.Z=J.G.prototype
C.a=J.b8.prototype
C.a_=J.eE.prototype
C.h=J.eF.prototype
C.r=J.eG.prototype
C.j=J.c4.prototype
C.c=J.c5.prototype
C.a6=J.c6.prototype
C.G=W.j7.prototype
C.ac=W.jE.prototype
C.M=J.jL.prototype
C.N=W.k1.prototype
C.b=P.dq.prototype
C.x=W.cC.prototype
C.o=W.kB.prototype
C.n=W.kC.prototype
C.C=J.cb.prototype
C.O=W.bL.prototype
C.P=W.ly.prototype
C.R=new P.i8(!1)
C.Q=new P.i7(C.R)
C.S=new P.jJ()
C.T=new P.ll()
C.l=new P.m5()
C.d=new A.co(0,"ColorSourceType.None")
C.i=new A.co(1,"ColorSourceType.Solid")
C.e=new A.co(2,"ColorSourceType.Texture2D")
C.f=new A.co(3,"ColorSourceType.TextureCube")
C.y=new P.bx(0)
C.V=new P.bx(5e6)
C.Y=new P.iW("element",!0,!1,!1,!1)
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
C.H=H.c(I.a9([127,2047,65535,1114111]),[P.n])
C.t=H.c(I.a9([0,0,32776,33792,1,10240,0,0]),[P.n])
C.a7=H.c(I.a9(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.u=H.c(I.a9([0,0,65490,45055,65535,34815,65534,18431]),[P.n])
C.v=H.c(I.a9([0,0,26624,1023,65534,2047,65534,2047]),[P.n])
C.a8=H.c(I.a9(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.I=H.c(I.a9([]),[P.h])
C.a9=H.c(I.a9([0,0,32722,12287,65534,34815,65534,18431]),[P.n])
C.J=H.c(I.a9([0,0,65498,45055,65535,34815,65534,18431]),[P.n])
C.w=H.c(I.a9([0,0,24576,1023,65534,34815,65534,18431]),[P.n])
C.K=H.c(I.a9([0,0,32754,11263,65534,34815,65534,18431]),[P.n])
C.aa=H.c(I.a9([0,0,32722,12287,65535,34815,65534,18431]),[P.n])
C.L=H.c(I.a9([0,0,65490,12287,65535,34815,65534,18431]),[P.n])
C.A=H.c(I.a9(["bind","if","ref","repeat","syntax"]),[P.h])
C.B=H.c(I.a9(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.ab=new H.im(0,{},C.I,[P.h,P.h])
C.m=new P.le(!1)
$.aC=0
$.bw=null
$.ed=null
$.dR=!1
$.hG=null
$.hx=null
$.hM=null
$.cR=null
$.cU=null
$.e0=null
$.bm=null
$.bQ=null
$.bR=null
$.dS=!1
$.S=C.l
$.aN=null
$.db=null
$.ev=null
$.eu=null
$.eq=null
$.ep=null
$.eo=null
$.en=null
$.p=V.jz()
$.eW=null
$.f3=null
$.bF=null
$.f9=null
$.fO=null
$.fS=null
$.fQ=null
$.fR=null
$.cI=null
$.fP=null
$.ku="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.kt="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.f1=null
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
I.$lazy(y,x,w)}})(["em","$get$em",function(){return H.hF("_$dart_dartClosure")},"de","$get$de",function(){return H.hF("_$dart_js")},"fx","$get$fx",function(){return H.aK(H.cG({
toString:function(){return"$receiver$"}}))},"fy","$get$fy",function(){return H.aK(H.cG({$method$:null,
toString:function(){return"$receiver$"}}))},"fz","$get$fz",function(){return H.aK(H.cG(null))},"fA","$get$fA",function(){return H.aK(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"fE","$get$fE",function(){return H.aK(H.cG(void 0))},"fF","$get$fF",function(){return H.aK(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fC","$get$fC",function(){return H.aK(H.fD(null))},"fB","$get$fB",function(){return H.aK(function(){try{null.$method$}catch(z){return z.message}}())},"fH","$get$fH",function(){return H.aK(H.fD(void 0))},"fG","$get$fG",function(){return H.aK(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dM","$get$dM",function(){return P.lz()},"bS","$get$bS",function(){return[]},"fN","$get$fN",function(){return P.li()},"h1","$get$h1",function(){return H.jC(H.bl(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.n])))},"hl","$get$hl",function(){return P.k6("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"ht","$get$ht",function(){return P.mT()},"el","$get$el",function(){return{}},"h5","$get$h5",function(){return P.eK(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)},"dN","$get$dN",function(){return P.eJ(P.h,P.c_)},"fX","$get$fX",function(){return Z.ap(0)},"fV","$get$fV",function(){return Z.ap(511)},"aB","$get$aB",function(){return Z.ap(1)},"aU","$get$aU",function(){return Z.ap(2)},"aT","$get$aT",function(){return Z.ap(4)},"aV","$get$aV",function(){return Z.ap(8)},"aW","$get$aW",function(){return Z.ap(16)},"bJ","$get$bJ",function(){return Z.ap(32)},"bK","$get$bK",function(){return Z.ap(64)},"fW","$get$fW",function(){return Z.ap(96)},"bj","$get$bj",function(){return Z.ap(128)},"aS","$get$aS",function(){return Z.ap(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.H},{func:1,ret:-1,opt:[D.x]},{func:1,ret:-1,args:[D.x]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ax]},{func:1,ret:P.H,args:[F.af,P.q,P.q]},{func:1,ret:P.H,args:[,,]},{func:1,ret:-1,args:[P.n,[P.o,E.av]]},{func:1,ret:P.H,args:[D.x]},{func:1,ret:P.q,args:[P.q,P.q]},{func:1,ret:P.H,args:[F.ac]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.ab]},{func:1,ret:-1,args:[W.bh]},{func:1,ret:P.H,args:[W.ab]},{func:1,ret:P.q,args:[P.q]},{func:1,ret:-1,args:[P.n,[P.o,V.an]]},{func:1,ret:P.h,args:[P.h]},{func:1,args:[,]},{func:1,ret:P.q},{func:1,ret:P.M,args:[W.B]},{func:1,ret:P.M,args:[W.aI]},{func:1,ret:P.M,args:[P.h]},{func:1,ret:P.H,args:[{func:1,ret:-1,args:[D.x]}]},{func:1,ret:-1,args:[W.bC]},{func:1,ret:P.H,args:[,]},{func:1,ret:-1,args:[P.n,[P.o,D.a8]]},{func:1,ret:P.M,args:[W.Q,P.h,P.h,W.cd]},{func:1,ret:-1,args:[P.n,[P.o,U.ad]]},{func:1,ret:-1,args:[P.n,[P.o,M.aJ]]},{func:1,ret:P.h,args:[P.n]},{func:1,ret:V.T,args:[P.q]},{func:1,ret:P.H,args:[{func:1,ret:-1}]},{func:1,ret:P.H,args:[P.h,,]},{func:1,ret:P.H,args:[,],opt:[,]},{func:1,ret:[P.aX,,],args:[,]},{func:1,args:[W.ab]},{func:1,ret:P.M,args:[P.q,P.q]},{func:1,ret:P.O,args:[P.n]},{func:1,ret:P.M,args:[[P.o,D.a8]]},{func:1,ret:P.H,args:[P.h]},{func:1,ret:-1,args:[W.B,W.B]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:P.n,args:[[P.b,P.n],P.n]},{func:1,ret:P.n,args:[P.n,P.n]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,args:[,P.h]},{func:1,ret:-1,args:[W.bL]},{func:1,args:[P.h]},{func:1,ret:[P.K,P.h,P.h],args:[[P.K,P.h,P.h],P.h]},{func:1,ret:P.H,args:[P.ak]},{func:1,ret:-1,args:[P.h,P.n]},{func:1,ret:P.H,args:[P.bf]},{func:1,ret:P.M,args:[V.aZ]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:P.O,args:[,,]},{func:1,ret:W.Q,args:[W.B]}]
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
if(x==y)H.nY(d||a)
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
Isolate.a9=a.a9
Isolate.dY=a.dY
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
if(typeof dartMainRunner==="function")dartMainRunner(V.hJ,[])
else V.hJ([])})})()
//# sourceMappingURL=test.dart.js.map
