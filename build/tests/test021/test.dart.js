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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isM)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.dO"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dO"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.dO(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dQ=function(){}
var dart=[["","",,H,{"^":"",ny:{"^":"a;a"}}],["","",,J,{"^":"",
dU:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cJ:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dT==null){H.mZ()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.e(P.cA("Return interceptor for "+H.i(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$d2()]
if(v!=null)return v
v=H.n4(a)
if(v!=null)return v
if(typeof a=="function")return C.a4
y=Object.getPrototypeOf(a)
if(y==null)return C.L
if(y===Object.prototype)return C.L
if(typeof w=="function"){Object.defineProperty(w,$.$get$d2(),{value:C.C,enumerable:false,writable:true,configurable:true})
return C.C}return C.C},
M:{"^":"a;",
v:function(a,b){return a===b},
gY:function(a){return H.bE(a)},
i:["fq",function(a){return"Instance of '"+H.ba(a)+"'"}],
"%":"CanvasRenderingContext2D|DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo|WebGLRenderbuffer|WebGLTexture"},
iF:{"^":"M;",
i:function(a){return String(a)},
gY:function(a){return a?519018:218159},
$isN:1},
ew:{"^":"M;",
v:function(a,b){return null==b},
i:function(a){return"null"},
gY:function(a){return 0},
$isF:1},
d3:{"^":"M;",
gY:function(a){return 0},
i:["ft",function(a){return String(a)}]},
jo:{"^":"d3;"},
c6:{"^":"d3;"},
c_:{"^":"d3;",
i:function(a){var z=a[$.$get$eg()]
if(z==null)return this.ft(a)
return"JavaScript function for "+H.i(J.af(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbW:1},
b6:{"^":"M;$ti",
h:function(a,b){H.x(b,H.t(a,0))
if(!!a.fixed$length)H.r(P.W("add"))
a.push(b)},
kf:function(a,b){var z
if(!!a.fixed$length)H.r(P.W("removeAt"))
z=a.length
if(b>=z)throw H.e(P.c3(b,null,null))
return a.splice(b,1)[0]},
M:function(a,b){var z
if(!!a.fixed$length)H.r(P.W("remove"))
for(z=0;z<a.length;++z)if(J.J(a[z],b)){a.splice(z,1)
return!0}return!1},
a0:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.e(P.aI(a))}},
k:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.q(z,y,H.i(a[y]))
return z.join(b)},
jO:function(a){return this.k(a,"")},
jG:function(a,b,c,d){var z,y,x
H.x(b,d)
H.l(c,{func:1,ret:d,args:[d,H.t(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.e(P.aI(a))}return y},
jF:function(a,b,c){var z,y,x
H.l(b,{func:1,ret:P.N,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.e(P.aI(a))}throw H.e(H.cp())},
jE:function(a,b){return this.jF(a,b,null)},
a8:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
fp:function(a,b,c){if(b<0||b>a.length)throw H.e(P.a0(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.e(P.a0(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.t(a,0)])
return H.c(a.slice(b,c),[H.t(a,0)])},
gjD:function(a){if(a.length>0)return a[0]
throw H.e(H.cp())},
gaG:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.e(H.cp())},
dX:function(a,b){var z,y
H.l(b,{func:1,ret:P.N,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.e(P.aI(a))}return!1},
a_:function(a,b){var z
for(z=0;z<a.length;++z)if(J.J(a[z],b))return!0
return!1},
i:function(a){return P.d1(a,"[","]")},
gV:function(a){return new J.at(a,a.length,0,[H.t(a,0)])},
gY:function(a){return H.bE(a)},
gp:function(a){return a.length},
sp:function(a,b){if(!!a.fixed$length)H.r(P.W("set length"))
if(b<0)throw H.e(P.a0(b,0,null,"newLength",null))
a.length=b},
l:function(a,b){if(b>=a.length||b<0)throw H.e(H.bm(a,b))
return a[b]},
q:function(a,b,c){H.x(c,H.t(a,0))
if(!!a.immutable$list)H.r(P.W("indexed set"))
if(b>=a.length||b<0)throw H.e(H.bm(a,b))
a[b]=c},
$isp:1,
$isb:1,
n:{
iE:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.cS(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.a0(a,0,4294967295,"length",null))
return J.eu(new Array(a),b)},
eu:function(a,b){return J.cq(H.c(a,[b]))},
cq:function(a){H.cd(a)
a.fixed$length=Array
return a}}},
nx:{"^":"b6;$ti"},
at:{"^":"a;a,b,c,0d,$ti",
sdw:function(a){this.d=H.x(a,H.t(this,0))},
gK:function(){return this.d},
D:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.e(H.z(z))
x=this.c
if(x>=y){this.sdw(null)
return!1}this.sdw(z[x]);++this.c
return!0},
$isaX:1},
bY:{"^":"M;",
ev:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.e(P.W(""+a+".floor()"))},
au:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.W(""+a+".round()"))},
eX:function(a,b){var z,y
if(b>20)throw H.e(P.a0(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
bp:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.e(P.a0(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.a1(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.r(P.W("Unexpected toString result: "+z))
x=y.length
if(1>=x)return H.f(y,1)
z=y[1]
if(3>=x)return H.f(y,3)
w=+y[3]
x=y[2]
if(x!=null){z+=x
w-=x.length}return z+C.b.t("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gY:function(a){return a&0x1FFFFFFF},
t:function(a,b){if(typeof b!=="number")throw H.e(H.aj(b))
return a*b},
bt:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
fz:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dQ(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.dQ(a,b)},
dQ:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.e(P.W("Result of truncating division is "+H.i(z)+": "+H.i(a)+" ~/ "+b))},
aV:function(a,b){var z
if(a>0)z=this.dO(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
ip:function(a,b){if(b<0)throw H.e(H.aj(b))
return this.dO(a,b)},
dO:function(a,b){return b>31?0:a>>>b},
T:function(a,b){if(typeof b!=="number")throw H.e(H.aj(b))
return a<b},
$isq:1,
$isak:1},
ev:{"^":"bY;",$ism:1},
iG:{"^":"bY;"},
bZ:{"^":"M;",
a1:function(a,b){if(b<0)throw H.e(H.bm(a,b))
if(b>=a.length)H.r(H.bm(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(b>=a.length)throw H.e(H.bm(a,b))
return a.charCodeAt(b)},
G:function(a,b){H.C(b)
if(typeof b!=="string")throw H.e(P.cS(b,null,null))
return a+b},
b1:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.aj(b))
c=P.b0(b,c,a.length,null,null,null)
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
ac:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.aj(c))
if(typeof c!=="number")return c.T()
if(c<0||c>a.length)throw H.e(P.a0(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a5:function(a,b){return this.ac(a,b,0)},
u:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.aj(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.T()
if(b<0)throw H.e(P.c3(b,null,null))
if(b>c)throw H.e(P.c3(b,null,null))
if(c>a.length)throw H.e(P.c3(c,null,null))
return a.substring(b,c)},
ay:function(a,b){return this.u(a,b,null)},
ku:function(a){return a.toLowerCase()},
t:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.R)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
k0:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.t(c,z)+a},
af:function(a,b){return this.k0(a,b," ")},
eD:function(a,b,c){var z
if(c<0||c>a.length)throw H.e(P.a0(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
eC:function(a,b){return this.eD(a,b,0)},
jj:function(a,b,c){if(c>a.length)throw H.e(P.a0(c,0,a.length,null,null))
return H.hu(a,b,c)},
i:function(a){return a},
gY:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gp:function(a){return a.length},
$iseP:1,
$ish:1}}],["","",,H,{"^":"",
cK:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
cp:function(){return new P.dh("No element")},
iD:function(){return new P.dh("Too many elements")},
v:{"^":"kx;a",
gp:function(a){return this.a.length},
l:function(a,b){return C.b.a1(this.a,b)},
$asdx:function(){return[P.m]},
$asU:function(){return[P.m]},
$asp:function(){return[P.m]},
$asb:function(){return[P.m]}},
eo:{"^":"p;"},
cs:{"^":"eo;$ti",
gV:function(a){return new H.d5(this,this.gp(this),0,[H.a4(this,"cs",0)])},
d4:function(a,b){return this.fs(0,H.l(b,{func:1,ret:P.N,args:[H.a4(this,"cs",0)]}))}},
d5:{"^":"a;a,b,c,0d,$ti",
sb5:function(a){this.d=H.x(a,H.t(this,0))},
gK:function(){return this.d},
D:function(){var z,y,x,w
z=this.a
y=J.bo(z)
x=y.gp(z)
if(this.b!==x)throw H.e(P.aI(z))
w=this.c
if(w>=x){this.sb5(null)
return!1}this.sb5(y.a8(z,w));++this.c
return!0},
$isaX:1},
j2:{"^":"p;a,b,$ti",
gV:function(a){return new H.j3(J.b4(this.a),this.b,this.$ti)},
gp:function(a){return J.as(this.a)},
a8:function(a,b){return this.b.$1(J.cf(this.a,b))},
$asp:function(a,b){return[b]}},
j3:{"^":"aX;0a,b,c,$ti",
sb5:function(a){this.a=H.x(a,H.t(this,1))},
D:function(){var z=this.b
if(z.D()){this.sb5(this.c.$1(z.gK()))
return!0}this.sb5(null)
return!1},
gK:function(){return this.a},
$asaX:function(a,b){return[b]}},
j4:{"^":"cs;a,b,$ti",
gp:function(a){return J.as(this.a)},
a8:function(a,b){return this.b.$1(J.cf(this.a,b))},
$ascs:function(a,b){return[b]},
$asp:function(a,b){return[b]}},
dB:{"^":"p;a,b,$ti",
gV:function(a){return new H.l3(J.b4(this.a),this.b,this.$ti)}},
l3:{"^":"aX;a,b,$ti",
D:function(){var z,y
for(z=this.a,y=this.b;z.D();)if(y.$1(z.gK()))return!0
return!1},
gK:function(){return this.a.gK()}},
cm:{"^":"a;$ti"},
dx:{"^":"a;$ti",
q:function(a,b,c){H.x(c,H.a4(this,"dx",0))
throw H.e(P.W("Cannot modify an unmodifiable list"))}},
kx:{"^":"cr+dx;"}}],["","",,H,{"^":"",
hZ:function(){throw H.e(P.W("Cannot modify unmodifiable Map"))},
br:function(a){var z,y
z=H.C(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
mS:function(a){return init.types[H.ab(a)]},
n1:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.P(a).$isav},
i:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.af(a)
if(typeof z!=="string")throw H.e(H.aj(a))
return z},
bE:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
jz:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.f(z,3)
y=H.C(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.e(P.a0(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.I(w,u)|32)>x)return}return parseInt(a,b)},
ba:function(a){return H.jq(a)+H.dK(H.b3(a),0,null)},
jq:function(a){var z,y,x,w,v,u,t,s,r
z=J.P(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.Y||!!z.$isc6){u=C.E(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.br(w.length>1&&C.b.I(w,0)===36?C.b.ay(w,1):w)},
jr:function(){if(!!self.location)return self.location.href
return},
eT:function(a){var z,y,x,w,v
H.cd(a)
z=J.as(a)
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
jA:function(a){var z,y,x,w
z=H.c([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.z)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.e(H.aj(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.aV(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.e(H.aj(w))}return H.eT(z)},
eU:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.e(H.aj(x))
if(x<0)throw H.e(H.aj(x))
if(x>65535)return H.jA(a)}return H.eT(a)},
jB:function(a,b,c){var z,y,x,w
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
w=x<c?x:c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
bb:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.aV(z,10))>>>0,56320|z&1023)}}throw H.e(P.a0(a,0,1114111,null,null))},
b9:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jy:function(a){var z=H.b9(a).getFullYear()+0
return z},
jw:function(a){var z=H.b9(a).getMonth()+1
return z},
js:function(a){var z=H.b9(a).getDate()+0
return z},
jt:function(a){var z=H.b9(a).getHours()+0
return z},
jv:function(a){var z=H.b9(a).getMinutes()+0
return z},
jx:function(a){var z=H.b9(a).getSeconds()+0
return z},
ju:function(a){var z=H.b9(a).getMilliseconds()+0
return z},
A:function(a){throw H.e(H.aj(a))},
f:function(a,b){if(a==null)J.as(a)
throw H.e(H.bm(a,b))},
bm:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aH(!0,b,"index",null)
z=H.ab(J.as(a))
if(!(b<0)){if(typeof z!=="number")return H.A(z)
y=b>=z}else y=!0
if(y)return P.b5(b,a,"index",null,z)
return P.c3(b,"index",null)},
mM:function(a,b,c){if(a>c)return new P.cw(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cw(a,c,!0,b,"end","Invalid value")
return new P.aH(!0,b,"end",null)},
aj:function(a){return new P.aH(!0,a,null,null)},
e:function(a){var z
if(a==null)a=new P.eO()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hv})
z.name=""}else z.toString=H.hv
return z},
hv:function(){return J.af(this.dartException)},
r:function(a){throw H.e(a)},
z:function(a){throw H.e(P.aI(a))},
a6:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.no(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.aV(x,16)&8191)===10)switch(w){case 438:return z.$1(H.d4(H.i(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eN(H.i(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$fh()
u=$.$get$fi()
t=$.$get$fj()
s=$.$get$fk()
r=$.$get$fo()
q=$.$get$fp()
p=$.$get$fm()
$.$get$fl()
o=$.$get$fr()
n=$.$get$fq()
m=v.ae(y)
if(m!=null)return z.$1(H.d4(H.C(y),m))
else{m=u.ae(y)
if(m!=null){m.method="call"
return z.$1(H.d4(H.C(y),m))}else{m=t.ae(y)
if(m==null){m=s.ae(y)
if(m==null){m=r.ae(y)
if(m==null){m=q.ae(y)
if(m==null){m=p.ae(y)
if(m==null){m=s.ae(y)
if(m==null){m=o.ae(y)
if(m==null){m=n.ae(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eN(H.C(y),m))}}return z.$1(new H.kw(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.f2()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aH(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.f2()
return a},
bp:function(a){var z
if(a==null)return new H.fV(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fV(a)},
mP:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.q(0,a[y],a[x])}return b},
n0:function(a,b,c,d,e,f){H.d(a,"$isbW")
switch(H.ab(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.u("Unsupported number of arguments for wrapped closure"))},
bl:function(a,b){var z
H.ab(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.n0)
a.$identity=z
return z},
hV:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.P(d).$isb){z.$reflectionInfo=d
x=H.jI(z).r}else x=d
w=e?Object.create(new H.k4().constructor.prototype):Object.create(new H.cU(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.az
if(typeof u!=="number")return u.G()
$.az=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.ed(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.mS,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.e6:H.cV
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.e("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.ed(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w["call*"]=q
w.$R=z.$R
w.$D=z.$D
return v},
hS:function(a,b,c,d){var z=H.cV
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
ed:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hU(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hS(y,!w,z,b)
if(y===0){w=$.az
if(typeof w!=="number")return w.G()
$.az=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bt
if(v==null){v=H.ci("self")
$.bt=v}return new Function(w+H.i(v)+";return "+u+"."+H.i(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.az
if(typeof w!=="number")return w.G()
$.az=w+1
t+=w
w="return function("+t+"){return this."
v=$.bt
if(v==null){v=H.ci("self")
$.bt=v}return new Function(w+H.i(v)+"."+H.i(z)+"("+t+");}")()},
hT:function(a,b,c,d){var z,y
z=H.cV
y=H.e6
switch(b?-1:a){case 0:throw H.e(H.jR("Intercepted function with no arguments."))
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
z=$.bt
if(z==null){z=H.ci("self")
$.bt=z}y=$.e5
if(y==null){y=H.ci("receiver")
$.e5=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hT(w,!u,x,b)
if(w===1){z="return function(){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+");"
y=$.az
if(typeof y!=="number")return y.G()
$.az=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.i(z)+"."+H.i(x)+"(this."+H.i(y)+", "+s+");"
y=$.az
if(typeof y!=="number")return y.G()
$.az=y+1
return new Function(z+y+"}")()},
dO:function(a,b,c,d,e,f,g){return H.hV(a,b,H.ab(c),d,!!e,!!f,g)},
C:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.ay(a,"String"))},
mN:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ay(a,"double"))},
ne:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ay(a,"num"))},
dM:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.ay(a,"bool"))},
ab:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.ay(a,"int"))},
hr:function(a,b){throw H.e(H.ay(a,H.br(H.C(b).substring(3))))},
ng:function(a,b){throw H.e(H.hR(a,H.br(H.C(b).substring(3))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.P(a)[b])return a
H.hr(a,b)},
j:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.P(a)[b]
else z=!0
if(z)return a
H.ng(a,b)},
cd:function(a){if(a==null)return a
if(!!J.P(a).$isb)return a
throw H.e(H.ay(a,"List<dynamic>"))},
ho:function(a,b){var z
if(a==null)return a
z=J.P(a)
if(!!z.$isb)return a
if(z[b])return a
H.hr(a,b)},
hk:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.ab(z)]
else return a.$S()}return},
ca:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.hk(J.P(a))
if(z==null)return!1
return H.h6(z,null,b,null)},
l:function(a,b){var z,y
if(a==null)return a
if($.dH)return a
$.dH=!0
try{if(H.ca(a,b))return a
z=H.cN(b)
y=H.ay(a,z)
throw H.e(y)}finally{$.dH=!1}},
dR:function(a,b){if(a!=null&&!H.dN(a,b))H.r(H.ay(a,H.cN(b)))
return a},
hc:function(a){var z,y
z=J.P(a)
if(!!z.$isn){y=H.hk(z)
if(y!=null)return H.cN(y)
return"Closure"}return H.ba(a)},
nm:function(a){throw H.e(new P.i1(H.C(a)))},
hl:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
b3:function(a){if(a==null)return
return a.$ti},
nY:function(a,b,c){return H.bq(a["$as"+H.i(c)],H.b3(b))},
cb:function(a,b,c,d){var z
H.C(c)
H.ab(d)
z=H.bq(a["$as"+H.i(c)],H.b3(b))
return z==null?null:z[d]},
a4:function(a,b,c){var z
H.C(b)
H.ab(c)
z=H.bq(a["$as"+H.i(b)],H.b3(a))
return z==null?null:z[c]},
t:function(a,b){var z
H.ab(b)
z=H.b3(a)
return z==null?null:z[b]},
cN:function(a){return H.b2(a,null)},
b2:function(a,b){var z,y
H.k(b,"$isb",[P.h],"$asb")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.br(a[0].builtin$cls)+H.dK(a,1,b)
if(typeof a=="function")return H.br(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ab(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.i(b[y])}if('func' in a)return H.mu(a,b)
if('futureOr' in a)return"FutureOr<"+H.b2("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mu:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
t=C.b.G(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.b2(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b2(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b2(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b2(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.mO(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.C(z[l])
n=n+m+H.b2(i[h],b)+(" "+H.i(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dK:function(a,b,c){var z,y,x,w,v,u
H.k(c,"$isb",[P.h],"$asb")
if(a==null)return""
z=new P.ai("")
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
bQ:function(a,b,c,d){var z,y
H.C(b)
H.cd(c)
H.C(d)
if(a==null)return!1
z=H.b3(a)
y=J.P(a)
if(y[b]==null)return!1
return H.hf(H.bq(y[d],z),null,c,null)},
k:function(a,b,c,d){H.C(b)
H.cd(c)
H.C(d)
if(a==null)return a
if(H.bQ(a,b,c,d))return a
throw H.e(H.ay(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.br(b.substring(3))+H.dK(c,0,null),init.mangledGlobalNames)))},
hf:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ar(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ar(a[y],b,c[y],d))return!1
return!0},
nW:function(a,b,c){return a.apply(b,H.bq(J.P(b)["$as"+H.i(c)],H.b3(b)))},
hn:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="F"||a===-1||a===-2||H.hn(z)}return!1},
dN:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="a"||b.builtin$cls==="F"||b===-1||b===-2||H.hn(b)
if(b==null||b===-1||b.builtin$cls==="a"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dN(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ca(a,b)}z=J.P(a).constructor
y=H.b3(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.ar(z,null,b,null)},
x:function(a,b){if(a!=null&&!H.dN(a,b))throw H.e(H.ay(a,H.cN(b)))
return a},
ar:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ar(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="F")return!0
if('func' in c)return H.h6(a,b,c,d)
if('func' in a)return c.builtin$cls==="bW"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ar("type" in a?a.type:null,b,x,d)
else if(H.ar(a,b,x,d))return!0
else{if(!('$is'+"bz" in y.prototype))return!1
w=y.prototype["$as"+"bz"]
v=H.bq(w,z?a.slice(1):null)
return H.ar(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.hf(H.bq(r,z),b,u,d)},
h6:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.nd(m,b,l,d)},
nd:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ar(c[w],d,a[w],b))return!1}return!0},
nX:function(a,b,c){Object.defineProperty(a,H.C(b),{value:c,enumerable:false,writable:true,configurable:true})},
n4:function(a){var z,y,x,w,v,u
z=H.C($.hm.$1(a))
y=$.cI[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cL[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.C($.he.$2(a,z))
if(z!=null){y=$.cI[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cL[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cM(x)
$.cI[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cL[z]=x
return x}if(v==="-"){u=H.cM(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.hq(a,x)
if(v==="*")throw H.e(P.cA(z))
if(init.leafTags[z]===true){u=H.cM(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.hq(a,x)},
hq:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dU(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cM:function(a){return J.dU(a,!1,null,!!a.$isav)},
nc:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cM(z)
else return J.dU(z,c,null,null)},
mZ:function(){if(!0===$.dT)return
$.dT=!0
H.n_()},
n_:function(){var z,y,x,w,v,u,t,s
$.cI=Object.create(null)
$.cL=Object.create(null)
H.mV()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hs.$1(v)
if(u!=null){t=H.nc(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mV:function(){var z,y,x,w,v,u,t
z=C.a1()
z=H.bk(C.Z,H.bk(C.a3,H.bk(C.D,H.bk(C.D,H.bk(C.a2,H.bk(C.a_,H.bk(C.a0(C.E),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.hm=new H.mW(v)
$.he=new H.mX(u)
$.hs=new H.mY(t)},
bk:function(a,b){return a(b)||b},
hu:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
dW:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hY:{"^":"a;$ti",
i:function(a){return P.d6(this)},
q:function(a,b,c){H.x(b,H.t(this,0))
H.x(c,H.t(this,1))
return H.hZ()},
$isH:1},
i_:{"^":"hY;a,b,c,$ti",
gp:function(a){return this.a},
bD:function(a){if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
l:function(a,b){if(!this.bD(b))return
return this.dA(b)},
dA:function(a){return this.b[H.C(a)]},
a0:function(a,b){var z,y,x,w,v
z=H.t(this,1)
H.l(b,{func:1,ret:-1,args:[H.t(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.x(this.dA(v),z))}}},
jH:{"^":"a;a,b,c,d,e,f,r,0x",n:{
jI:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cq(z)
y=z[0]
x=z[1]
return new H.jH(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
kj:{"^":"a;a,b,c,d,e,f",
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
aF:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.c([],[P.h])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.kj(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cz:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fn:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
jl:{"^":"a2;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
n:{
eN:function(a,b){return new H.jl(a,b==null?null:b.method)}}},
iJ:{"^":"a2;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.i(this.a)+")"},
n:{
d4:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.iJ(a,y,z?null:b.receiver)}}},
kw:{"^":"a2;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
no:{"^":"n:18;a",
$1:function(a){if(!!J.P(a).$isa2)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fV:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaM:1},
n:{"^":"a;",
i:function(a){return"Closure '"+H.ba(this).trim()+"'"},
gf9:function(){return this},
$isbW:1,
gf9:function(){return this}},
f6:{"^":"n;"},
k4:{"^":"f6;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.br(z)+"'"}},
cU:{"^":"f6;a,b,c,d",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cU))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gY:function(a){var z,y
z=this.c
if(z==null)y=H.bE(this.a)
else y=typeof z!=="object"?J.bS(z):H.bE(z)
return(y^H.bE(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.ba(z)+"'")},
n:{
cV:function(a){return a.a},
e6:function(a){return a.c},
ci:function(a){var z,y,x,w,v
z=new H.cU("self","target","receiver","name")
y=J.cq(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
kk:{"^":"a2;a",
i:function(a){return this.a},
n:{
ay:function(a,b){return new H.kk("TypeError: "+H.i(P.ck(a))+": type '"+H.hc(a)+"' is not a subtype of type '"+b+"'")}}},
hQ:{"^":"a2;a",
i:function(a){return this.a},
n:{
hR:function(a,b){return new H.hQ("CastError: "+H.i(P.ck(a))+": type '"+H.hc(a)+"' is not a subtype of type '"+b+"'")}}},
jQ:{"^":"a2;a",
i:function(a){return"RuntimeError: "+H.i(this.a)},
n:{
jR:function(a){return new H.jQ(a)}}},
aY:{"^":"eC;a,0b,0c,0d,0e,0f,r,$ti",
gp:function(a){return this.a},
gjN:function(a){return this.a===0},
gaF:function(){return new H.iQ(this,[H.t(this,0)])},
bD:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.dt(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.dt(y,a)}else return this.jK(a)},
jK:function(a){var z=this.d
if(z==null)return!1
return this.cQ(this.ca(z,this.cP(a)),a)>=0},
l:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bw(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bw(w,b)
x=y==null?null:y.b
return x}else return this.jL(b)},
jL:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.ca(z,this.cP(a))
x=this.cQ(y,a)
if(x<0)return
return y[x].b},
q:function(a,b,c){var z,y
H.x(b,H.t(this,0))
H.x(c,H.t(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.ci()
this.b=z}this.dh(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.ci()
this.c=y}this.dh(y,b,c)}else this.jM(b,c)},
jM:function(a,b){var z,y,x,w
H.x(a,H.t(this,0))
H.x(b,H.t(this,1))
z=this.d
if(z==null){z=this.ci()
this.d=z}y=this.cP(a)
x=this.ca(z,y)
if(x==null)this.cq(z,y,[this.c4(a,b)])
else{w=this.cQ(x,a)
if(w>=0)x[w].b=b
else x.push(this.c4(a,b))}},
a0:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.e(P.aI(this))
z=z.c}},
dh:function(a,b,c){var z
H.x(b,H.t(this,0))
H.x(c,H.t(this,1))
z=this.bw(a,b)
if(z==null)this.cq(a,b,this.c4(b,c))
else z.b=c},
fX:function(){this.r=this.r+1&67108863},
c4:function(a,b){var z,y
z=new H.iP(H.x(a,H.t(this,0)),H.x(b,H.t(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fX()
return z},
cP:function(a){return J.bS(a)&0x3ffffff},
cQ:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.J(a[y].a,b))return y
return-1},
i:function(a){return P.d6(this)},
bw:function(a,b){return a[b]},
ca:function(a,b){return a[b]},
cq:function(a,b,c){a[b]=c},
hb:function(a,b){delete a[b]},
dt:function(a,b){return this.bw(a,b)!=null},
ci:function(){var z=Object.create(null)
this.cq(z,"<non-identifier-key>",z)
this.hb(z,"<non-identifier-key>")
return z},
$isey:1},
iP:{"^":"a;a,b,0c,0d"},
iQ:{"^":"eo;a,$ti",
gp:function(a){return this.a.a},
gV:function(a){var z,y
z=this.a
y=new H.iR(z,z.r,this.$ti)
y.c=z.e
return y}},
iR:{"^":"a;a,b,0c,0d,$ti",
sdi:function(a){this.d=H.x(a,H.t(this,0))},
gK:function(){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aI(z))
else{z=this.c
if(z==null){this.sdi(null)
return!1}else{this.sdi(z.a)
this.c=this.c.c
return!0}}},
$isaX:1},
mW:{"^":"n:18;a",
$1:function(a){return this.a(a)}},
mX:{"^":"n:54;a",
$2:function(a,b){return this.a(a,b)}},
mY:{"^":"n:53;a",
$1:function(a){return this.a(H.C(a))}},
iH:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseP:1,
$isjJ:1,
n:{
iI:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.e(P.V("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mO:function(a){return J.eu(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
nf:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bi:function(a){return a},
jf:function(a){return new Int8Array(a)},
b1:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.bm(b,a))},
mo:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.e(H.mM(a,b,c))
return b},
dc:{"^":"M;",$isdc:1,"%":";ArrayBufferView;db|fR|fS|jg|fT|fU|bD"},
db:{"^":"dc;",
gp:function(a){return a.length},
$isav:1,
$asav:I.dQ},
jg:{"^":"fS;",
l:function(a,b){H.b1(b,a,a.length)
return a[b]},
q:function(a,b,c){H.mN(c)
H.b1(b,a,a.length)
a[b]=c},
$ascm:function(){return[P.q]},
$asU:function(){return[P.q]},
$isp:1,
$asp:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]},
"%":"Float32Array"},
bD:{"^":"fU;",
q:function(a,b,c){H.ab(c)
H.b1(b,a,a.length)
a[b]=c},
$ascm:function(){return[P.m]},
$asU:function(){return[P.m]},
$isp:1,
$asp:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}},
nz:{"^":"bD;",
l:function(a,b){H.b1(b,a,a.length)
return a[b]},
"%":"Int16Array"},
nA:{"^":"bD;",
l:function(a,b){H.b1(b,a,a.length)
return a[b]},
"%":"Int32Array"},
nB:{"^":"bD;",
l:function(a,b){H.b1(b,a,a.length)
return a[b]},
"%":"Int8Array"},
nC:{"^":"bD;",
l:function(a,b){H.b1(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
eL:{"^":"bD;",
gp:function(a){return a.length},
l:function(a,b){H.b1(b,a,a.length)
return a[b]},
$iseL:1,
$isO:1,
"%":";Uint8Array"},
fR:{"^":"db+U;"},
fS:{"^":"fR+cm;"},
fT:{"^":"db+U;"},
fU:{"^":"fT+cm;"}}],["","",,P,{"^":"",
l5:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mB()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bl(new P.l7(z),1)).observe(y,{childList:true})
return new P.l6(z,y,x)}else if(self.setImmediate!=null)return P.mC()
return P.mD()},
nN:[function(a){self.scheduleImmediate(H.bl(new P.l8(H.l(a,{func:1,ret:-1})),0))},"$1","mB",4,0,10],
nO:[function(a){self.setImmediate(H.bl(new P.l9(H.l(a,{func:1,ret:-1})),0))},"$1","mC",4,0,10],
nP:[function(a){P.dk(C.y,H.l(a,{func:1,ret:-1}))},"$1","mD",4,0,10],
dk:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.h.a6(a.a,1000)
return P.lR(z<0?0:z,b)},
fe:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.bc]})
z=C.h.a6(a.a,1000)
return P.lS(z<0?0:z,b)},
mx:function(a,b){if(H.ca(a,{func:1,args:[P.a,P.aM]}))return H.l(a,{func:1,ret:null,args:[P.a,P.aM]})
if(H.ca(a,{func:1,args:[P.a]}))return H.l(a,{func:1,ret:null,args:[P.a]})
throw H.e(P.cS(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mw:function(){var z,y
for(;z=$.bj,z!=null;){$.bO=null
y=z.b
$.bj=y
if(y==null)$.bN=null
z.a.$0()}},
nV:[function(){$.dI=!0
try{P.mw()}finally{$.bO=null
$.dI=!1
if($.bj!=null)$.$get$dC().$1(P.hg())}},"$0","hg",0,0,3],
hb:function(a){var z=new P.fI(H.l(a,{func:1,ret:-1}))
if($.bj==null){$.bN=z
$.bj=z
if(!$.dI)$.$get$dC().$1(P.hg())}else{$.bN.b=z
$.bN=z}},
mA:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.bj
if(z==null){P.hb(a)
$.bO=$.bN
return}y=new P.fI(a)
x=$.bO
if(x==null){y.b=z
$.bO=y
$.bj=y}else{y.b=x.b
x.b=y
$.bO=y
if(y.b==null)$.bN=y}},
nh:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.S
if(C.l===y){P.cH(null,null,C.l,a)
return}y.toString
P.cH(null,null,y,H.l(y.cv(a),z))},
fd:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.S
if(y===C.l){y.toString
return P.dk(a,b)}return P.dk(a,H.l(y.cv(b),z))},
kg:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.bc]}
H.l(b,z)
y=$.S
if(y===C.l){y.toString
return P.fe(a,b)}x=y.e2(b,P.bc)
$.S.toString
return P.fe(a,H.l(x,z))},
cG:function(a,b,c,d,e){var z={}
z.a=d
P.mA(new P.my(z,e))},
h7:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.S
if(y===c)return d.$0()
$.S=c
z=y
try{y=d.$0()
return y}finally{$.S=z}},
h8:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.x(e,g)
y=$.S
if(y===c)return d.$1(e)
$.S=c
z=y
try{y=d.$1(e)
return y}finally{$.S=z}},
mz:function(a,b,c,d,e,f,g,h,i){var z,y
H.l(d,{func:1,ret:g,args:[h,i]})
H.x(e,h)
H.x(f,i)
y=$.S
if(y===c)return d.$2(e,f)
$.S=c
z=y
try{y=d.$2(e,f)
return y}finally{$.S=z}},
cH:function(a,b,c,d){var z
H.l(d,{func:1,ret:-1})
z=C.l!==c
if(z)d=!(!z||!1)?c.cv(d):c.j9(d,-1)
P.hb(d)},
l7:{"^":"n:29;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
l6:{"^":"n:51;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
l8:{"^":"n:0;a",
$0:function(){this.a.$0()}},
l9:{"^":"n:0;a",
$0:function(){this.a.$0()}},
fX:{"^":"a;a,0b,c",
fV:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bl(new P.lU(this,b),0),a)
else throw H.e(P.W("`setTimeout()` not found."))},
fW:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bl(new P.lT(this,a,Date.now(),b),0),a)
else throw H.e(P.W("Periodic timer."))},
$isbc:1,
n:{
lR:function(a,b){var z=new P.fX(!0,0)
z.fV(a,b)
return z},
lS:function(a,b){var z=new P.fX(!1,0)
z.fW(a,b)
return z}}},
lU:{"^":"n:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lT:{"^":"n:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.fz(w,x)}z.c=y
this.d.$1(z)}},
bh:{"^":"a;0a,b,c,d,e,$ti",
jS:function(a){if(this.c!==6)return!0
return this.b.b.d2(H.l(this.d,{func:1,ret:P.N,args:[P.a]}),a.a,P.N,P.a)},
jJ:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.t(this,1)}
w=this.b.b
if(H.ca(z,{func:1,args:[P.a,P.aM]}))return H.dR(w.kn(z,a.a,a.b,null,y,P.aM),x)
else return H.dR(w.d2(H.l(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aT:{"^":"a;dP:a<,b,0ic:c<,$ti",
eW:function(a,b,c){var z,y,x,w
z=H.t(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.S
if(y!==C.l){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.mx(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aT(0,$.S,[c])
w=b==null?1:3
this.dk(new P.bh(x,w,a,b,[z,c]))
return x},
kr:function(a,b){return this.eW(a,null,b)},
dk:function(a){var z,y
z=this.a
if(z<=1){a.a=H.d(this.c,"$isbh")
this.c=a}else{if(z===2){y=H.d(this.c,"$isaT")
z=y.a
if(z<4){y.dk(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cH(null,null,z,H.l(new P.li(this,a),{func:1,ret:-1}))}},
dL:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.d(this.c,"$isbh")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.d(this.c,"$isaT")
y=u.a
if(y<4){u.dL(a)
return}this.a=y
this.c=u.c}z.a=this.bz(a)
y=this.b
y.toString
P.cH(null,null,y,H.l(new P.ln(z,this),{func:1,ret:-1}))}},
cm:function(){var z=H.d(this.c,"$isbh")
this.c=null
return this.bz(z)},
bz:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
dn:function(a){var z,y,x
z=H.t(this,0)
H.dR(a,{futureOr:1,type:z})
y=this.$ti
if(H.bQ(a,"$isbz",y,"$asbz"))if(H.bQ(a,"$isaT",y,null))P.fM(a,this)
else P.lj(a,this)
else{x=this.cm()
H.x(a,z)
this.a=4
this.c=a
P.bJ(this,x)}},
dq:function(a,b){var z
H.d(b,"$isaM")
z=this.cm()
this.a=8
this.c=new P.al(a,b)
P.bJ(this,z)},
$isbz:1,
n:{
lj:function(a,b){var z,y,x
b.a=1
try{a.eW(new P.lk(b),new P.ll(b),null)}catch(x){z=H.a6(x)
y=H.bp(x)
P.nh(new P.lm(b,z,y))}},
fM:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.d(a.c,"$isaT")
if(z>=4){y=b.cm()
b.a=a.a
b.c=a.c
P.bJ(b,y)}else{y=H.d(b.c,"$isbh")
b.a=2
b.c=a
a.dL(y)}},
bJ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.d(y.c,"$isal")
y=y.b
u=v.a
t=v.b
y.toString
P.cG(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
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
if(p){H.d(r,"$isal")
y=y.b
u=r.a
t=r.b
y.toString
P.cG(null,null,y,u,t)
return}o=$.S
if(o==null?q!=null:o!==q)$.S=q
else o=null
y=b.c
if(y===8)new P.lq(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.lp(x,b,r).$0()}else if((y&2)!==0)new P.lo(z,x,b).$0()
if(o!=null)$.S=o
y=x.b
if(!!J.P(y).$isbz){if(y.a>=4){n=H.d(t.c,"$isbh")
t.c=null
b=t.bz(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fM(y,t)
return}}m=b.b
n=H.d(m.c,"$isbh")
m.c=null
b=m.bz(n)
y=x.a
u=x.b
if(!y){H.x(u,H.t(m,0))
m.a=4
m.c=u}else{H.d(u,"$isal")
m.a=8
m.c=u}z.a=m
y=m}}}},
li:{"^":"n:0;a,b",
$0:function(){P.bJ(this.a,this.b)}},
ln:{"^":"n:0;a,b",
$0:function(){P.bJ(this.b,this.a.a)}},
lk:{"^":"n:29;a",
$1:function(a){var z=this.a
z.a=0
z.dn(a)}},
ll:{"^":"n:49;a",
$2:function(a,b){this.a.dq(a,H.d(b,"$isaM"))},
$1:function(a){return this.$2(a,null)}},
lm:{"^":"n:0;a,b,c",
$0:function(){this.a.dq(this.b,this.c)}},
lq:{"^":"n:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.eU(H.l(w.d,{func:1}),null)}catch(v){y=H.a6(v)
x=H.bp(v)
if(this.d){w=H.d(this.a.a.c,"$isal").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.d(this.a.a.c,"$isal")
else u.b=new P.al(y,x)
u.a=!0
return}if(!!J.P(z).$isbz){if(z instanceof P.aT&&z.gdP()>=4){if(z.gdP()===8){w=this.b
w.b=H.d(z.gic(),"$isal")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.kr(new P.lr(t),null)
w.a=!1}}},
lr:{"^":"n:48;a",
$1:function(a){return this.a}},
lp:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.t(x,0)
v=H.x(this.c,w)
u=H.t(x,1)
this.a.b=x.b.b.d2(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a6(t)
y=H.bp(t)
x=this.a
x.b=new P.al(z,y)
x.a=!0}}},
lo:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.d(this.a.a.c,"$isal")
w=this.c
if(w.jS(z)&&w.e!=null){v=this.b
v.b=w.jJ(z)
v.a=!1}}catch(u){y=H.a6(u)
x=H.bp(u)
w=H.d(this.a.a.c,"$isal")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.al(y,x)
s.a=!0}}},
fI:{"^":"a;a,0b"},
k5:{"^":"a;$ti",
gp:function(a){var z,y,x,w
z={}
y=new P.aT(0,$.S,[P.m])
z.a=0
x=H.t(this,0)
w=H.l(new P.k7(z,this),{func:1,ret:-1,args:[x]})
H.l(new P.k8(z,y),{func:1,ret:-1})
W.a1(this.a,this.b,w,!1,x)
return y}},
k7:{"^":"n;a,b",
$1:function(a){H.x(a,H.t(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.t(this.b,0)]}}},
k8:{"^":"n:0;a,b",
$0:function(){this.b.dn(this.a.a)}},
di:{"^":"a;$ti"},
k6:{"^":"a;"},
bc:{"^":"a;"},
al:{"^":"a;a,b",
i:function(a){return H.i(this.a)},
$isa2:1},
mk:{"^":"a;",$isnM:1},
my:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eO()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.e(z)
x=H.e(z)
x.stack=y.i(0)
throw x}},
lC:{"^":"mk;",
ko:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.l===$.S){a.$0()
return}P.h7(null,null,this,a,-1)}catch(x){z=H.a6(x)
y=H.bp(x)
P.cG(null,null,this,z,H.d(y,"$isaM"))}},
kp:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.l===$.S){a.$1(b)
return}P.h8(null,null,this,a,b,-1,c)}catch(x){z=H.a6(x)
y=H.bp(x)
P.cG(null,null,this,z,H.d(y,"$isaM"))}},
j9:function(a,b){return new P.lE(this,H.l(a,{func:1,ret:b}),b)},
cv:function(a){return new P.lD(this,H.l(a,{func:1,ret:-1}))},
e2:function(a,b){return new P.lF(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
eU:function(a,b){H.l(a,{func:1,ret:b})
if($.S===C.l)return a.$0()
return P.h7(null,null,this,a,b)},
d2:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.S===C.l)return a.$1(b)
return P.h8(null,null,this,a,b,c,d)},
kn:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.S===C.l)return a.$2(b,c)
return P.mz(null,null,this,a,b,c,d,e,f)}},
lE:{"^":"n;a,b,c",
$0:function(){return this.a.eU(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
lD:{"^":"n:3;a,b",
$0:function(){return this.a.ko(this.b)}},
lF:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.kp(this.b,H.x(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
iS:function(a,b,c,d,e){return new H.aY(0,0,[d,e])},
iT:function(a,b,c){H.cd(a)
return H.k(H.mP(a,new H.aY(0,0,[b,c])),"$isey",[b,c],"$asey")},
ez:function(a,b){return new H.aY(0,0,[a,b])},
c0:function(a,b,c,d){return new P.lw(0,0,[d])},
iC:function(a,b,c){var z,y
if(P.dJ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bP()
C.a.h(y,a)
try{P.mv(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.f4(b,H.ho(z,"$isp"),", ")+c
return y.charCodeAt(0)==0?y:y},
d1:function(a,b,c){var z,y,x
if(P.dJ(a))return b+"..."+c
z=new P.ai(b)
y=$.$get$bP()
C.a.h(y,a)
try{x=z
x.a=P.f4(x.gaR(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gaR()+c
y=z.gaR()
return y.charCodeAt(0)==0?y:y},
dJ:function(a){var z,y
for(z=0;y=$.$get$bP(),z<y.length;++z)if(a===y[z])return!0
return!1},
mv:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gV(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.D())return
w=H.i(z.gK())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.D()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gK();++x
if(!z.D()){if(x<=4){C.a.h(b,H.i(t))
return}v=H.i(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gK();++x
for(;z.D();t=s,s=r){r=z.gK();++x
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
iU:function(a,b,c){var z=P.iS(null,null,null,b,c)
a.a0(0,new P.iV(z,b,c))
return z},
eA:function(a,b){var z,y,x
z=P.c0(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.z)(a),++x)z.h(0,H.x(a[x],b))
return z},
d6:function(a){var z,y,x
z={}
if(P.dJ(a))return"{...}"
y=new P.ai("")
try{C.a.h($.$get$bP(),a)
x=y
x.a=x.gaR()+"{"
z.a=!0
a.a0(0,new P.j0(z,y))
z=y
z.a=z.gaR()+"}"}finally{z=$.$get$bP()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gaR()
return z.charCodeAt(0)==0?z:z},
lw:{"^":"ls;a,0b,0c,0d,0e,0f,r,$ti",
gV:function(a){var z=new P.fQ(this,this.r,this.$ti)
z.c=this.e
return z},
gp:function(a){return this.a},
a_:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.d(z[b],"$iscD")!=null}else{y=this.h7(b)
return y}},
h7:function(a){var z=this.d
if(z==null)return!1
return this.c8(this.dB(z,a),a)>=0},
h:function(a,b){var z,y
H.x(b,H.t(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dE()
this.b=z}return this.dj(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dE()
this.c=y}return this.dj(y,b)}else return this.fY(b)},
fY:function(a){var z,y,x
H.x(a,H.t(this,0))
z=this.d
if(z==null){z=P.dE()
this.d=z}y=this.dr(a)
x=z[y]
if(x==null)z[y]=[this.cj(a)]
else{if(this.c8(x,a)>=0)return!1
x.push(this.cj(a))}return!0},
M:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.i4(this.c,b)
else return this.i1(b)},
i1:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.dB(z,a)
x=this.c8(y,a)
if(x<0)return!1
this.dR(y.splice(x,1)[0])
return!0},
dj:function(a,b){H.x(b,H.t(this,0))
if(H.d(a[b],"$iscD")!=null)return!1
a[b]=this.cj(b)
return!0},
i4:function(a,b){var z
if(a==null)return!1
z=H.d(a[b],"$iscD")
if(z==null)return!1
this.dR(z)
delete a[b]
return!0},
dG:function(){this.r=this.r+1&67108863},
cj:function(a){var z,y
z=new P.cD(H.x(a,H.t(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dG()
return z},
dR:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dG()},
dr:function(a){return J.bS(a)&0x3ffffff},
dB:function(a,b){return a[this.dr(b)]},
c8:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.J(a[y].a,b))return y
return-1},
n:{
dE:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cD:{"^":"a;a,0b,0c"},
fQ:{"^":"a;a,b,0c,0d,$ti",
sdm:function(a){this.d=H.x(a,H.t(this,0))},
gK:function(){return this.d},
D:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aI(z))
else{z=this.c
if(z==null){this.sdm(null)
return!1}else{this.sdm(H.x(z.a,H.t(this,0)))
this.c=this.c.b
return!0}}},
$isaX:1,
n:{
lx:function(a,b,c){var z=new P.fQ(a,b,[c])
z.c=a.e
return z}}},
ls:{"^":"jS;"},
iV:{"^":"n:6;a,b,c",
$2:function(a,b){this.a.q(0,H.x(a,this.b),H.x(b,this.c))}},
cr:{"^":"ly;",$isp:1,$isb:1},
U:{"^":"a;$ti",
gV:function(a){return new H.d5(a,this.gp(a),0,[H.cb(this,a,"U",0)])},
a8:function(a,b){return this.l(a,b)},
kt:function(a,b){var z,y
z=H.c([],[H.cb(this,a,"U",0)])
C.a.sp(z,this.gp(a))
for(y=0;y<this.gp(a);++y)C.a.q(z,y,this.l(a,y))
return z},
ks:function(a){return this.kt(a,!0)},
jB:function(a,b,c,d){var z
H.x(d,H.cb(this,a,"U",0))
P.b0(b,c,this.gp(a),null,null,null)
for(z=b;z<c;++z)this.q(a,z,d)},
i:function(a){return P.d1(a,"[","]")}},
eC:{"^":"ct;"},
j0:{"^":"n:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.i(a)
z.a=y+": "
z.a+=H.i(b)}},
ct:{"^":"a;$ti",
a0:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.a4(this,"ct",0),H.a4(this,"ct",1)]})
for(z=J.b4(this.gaF());z.D();){y=z.gK()
b.$2(y,this.l(0,y))}},
gp:function(a){return J.as(this.gaF())},
i:function(a){return P.d6(this)},
$isH:1},
lX:{"^":"a;$ti",
q:function(a,b,c){H.x(b,H.t(this,0))
H.x(c,H.t(this,1))
throw H.e(P.W("Cannot modify unmodifiable map"))}},
j1:{"^":"a;$ti",
l:function(a,b){return this.a.l(0,b)},
q:function(a,b,c){this.a.q(0,H.x(b,H.t(this,0)),H.x(c,H.t(this,1)))},
a0:function(a,b){this.a.a0(0,H.l(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]}))},
gp:function(a){var z=this.a
return z.gp(z)},
i:function(a){return J.af(this.a)},
$isH:1},
fs:{"^":"lY;a,$ti"},
jU:{"^":"a;$ti",
aB:function(a,b){var z
for(z=J.b4(H.k(b,"$isp",this.$ti,"$asp"));z.D();)this.h(0,z.gK())},
i:function(a){return P.d1(this,"{","}")},
a8:function(a,b){var z,y,x
if(b<0)H.r(P.a0(b,0,null,"index",null))
for(z=P.lx(this,this.r,H.t(this,0)),y=0;z.D();){x=z.d
if(b===y)return x;++y}throw H.e(P.b5(b,this,"index",null,y))},
$isp:1,
$isf_:1},
jS:{"^":"jU;"},
ly:{"^":"a+U;"},
lY:{"^":"j1+lX;$ti"}}],["","",,P,{"^":"",hN:{"^":"bT;a",
jU:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
c=P.b0(b,c,a.length,null,null,null)
z=$.$get$fK()
for(y=b,x=y,w=null,v=-1,u=-1,t=0;y<c;y=s){s=y+1
r=C.b.I(a,y)
if(r===37){q=s+2
if(q<=c){p=H.cK(C.b.I(a,s))
o=H.cK(C.b.I(a,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.f(z,n)
m=z[n]
if(m>=0){n=C.b.a1("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.ai("")
l=w.a+=C.b.u(a,x,y)
w.a=l+H.bb(r)
x=s
continue}}throw H.e(P.V("Invalid base64 data",a,y))}if(w!=null){l=w.a+=C.b.u(a,x,c)
k=l.length
if(v>=0)P.e3(a,u,c,v,t,k)
else{j=C.h.bt(k-1,4)+1
if(j===1)throw H.e(P.V("Invalid base64 encoding length ",a,c))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.b1(a,b,c,l.charCodeAt(0)==0?l:l)}i=c-b
if(v>=0)P.e3(a,u,c,v,t,i)
else{j=C.h.bt(i,4)
if(j===1)throw H.e(P.V("Invalid base64 encoding length ",a,c))
if(j>1)a=C.b.b1(a,c,c,j===2?"==":"=")}return a},
$asbT:function(){return[[P.b,P.m],P.h]},
n:{
e3:function(a,b,c,d,e,f){if(C.h.bt(f,4)!==0)throw H.e(P.V("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.e(P.V("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.e(P.V("Invalid base64 padding, more than two '=' characters",a,b))}}},hO:{"^":"aV;a",
$asaV:function(){return[[P.b,P.m],P.h]}},bT:{"^":"a;$ti"},aV:{"^":"k6;$ti"},ie:{"^":"bT;",
$asbT:function(){return[P.h,[P.b,P.m]]}},iz:{"^":"a;a,b,c,d,e",
i:function(a){return this.a}},iy:{"^":"aV;a",
h8:function(a,b,c){var z,y,x,w,v,u
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
if(w>b)v.a+=C.b.u(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.hJ(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asaV:function(){return[P.h,P.h]}},kK:{"^":"ie;a",
gjA:function(){return C.S}},kR:{"^":"aV;",
bc:function(a,b,c){var z,y,x,w
z=a.length
P.b0(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.mi(0,0,x)
if(w.hj(a,b,z)!==z)w.dT(J.hB(a,z-1),0)
return new Uint8Array(x.subarray(0,H.mo(0,w.b,x.length)))},
cD:function(a){return this.bc(a,0,null)},
$asaV:function(){return[P.h,[P.b,P.m]]}},mi:{"^":"a;a,b,c",
dT:function(a,b){var z,y,x,w,v
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
hj:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.a1(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.I(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dT(w,C.b.I(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},kL:{"^":"aV;a",
bc:function(a,b,c){var z,y,x,w,v
H.k(a,"$isb",[P.m],"$asb")
z=P.kM(!1,a,b,c)
if(z!=null)return z
y=J.as(a)
P.b0(b,c,y,null,null,null)
x=new P.ai("")
w=new P.mf(!1,x,!0,0,0,0)
w.bc(a,b,y)
if(w.e>0){H.r(P.V("Unfinished UTF-8 octet sequence",a,y))
x.a+=H.bb(65533)
w.d=0
w.e=0
w.f=0}v=x.a
return v.charCodeAt(0)==0?v:v},
cD:function(a){return this.bc(a,0,null)},
$asaV:function(){return[[P.b,P.m],P.h]},
n:{
kM:function(a,b,c,d){H.k(b,"$isb",[P.m],"$asb")
if(b instanceof Uint8Array)return P.kN(!1,b,c,d)
return},
kN:function(a,b,c,d){var z,y,x
z=$.$get$fx()
if(z==null)return
y=0===c
if(y&&!0)return P.dz(z,b)
x=b.length
d=P.b0(c,d,x,null,null,null)
if(y&&d===x)return P.dz(z,b)
return P.dz(z,b.subarray(c,d))},
dz:function(a,b){if(P.kP(b))return
return P.kQ(a,b)},
kQ:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.a6(y)}return},
kP:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
kO:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.a6(y)}return}}},mf:{"^":"a;a,b,c,d,e,f",
bc:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.k(a,"$isb",[P.m],"$asb")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.mh(c)
v=new P.mg(this,b,c,a)
$label0$0:for(u=J.bo(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.l(a,s)
if(typeof r!=="number")return r.bZ()
if((r&192)!==128){q=P.V("Bad UTF-8 encoding 0x"+C.h.bp(r,16),a,s)
throw H.e(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.f(C.G,q)
if(z<=C.G[q]){q=P.V("Overlong encoding of 0x"+C.h.bp(z,16),a,s-x-1)
throw H.e(q)}if(z>1114111){q=P.V("Character outside valid Unicode range: 0x"+C.h.bp(z,16),a,s-x-1)
throw H.e(q)}if(!this.c||z!==65279)t.a+=H.bb(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.d9()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.l(a,o)
if(typeof r!=="number")return r.T()
if(r<0){m=P.V("Negative UTF-8 code unit: -0x"+C.h.bp(-r,16),a,n-1)
throw H.e(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.V("Bad UTF-8 encoding 0x"+C.h.bp(r,16),a,n-1)
throw H.e(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},mh:{"^":"n:47;a",
$2:function(a,b){var z,y,x,w
H.k(a,"$isb",[P.m],"$asb")
z=this.a
for(y=J.bo(a),x=b;x<z;++x){w=y.l(a,x)
if(typeof w!=="number")return w.bZ()
if((w&127)!==w)return x-b}return z-b}},mg:{"^":"n:45;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.c4(this.d,a,b)}}}],["","",,P,{"^":"",
cc:function(a,b,c){var z
H.l(b,{func:1,ret:P.m,args:[P.h]})
z=H.jz(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.e(P.V(a,null,null))},
ih:function(a){if(a instanceof H.n)return a.i(0)
return"Instance of '"+H.ba(a)+"'"},
iW:function(a,b,c,d){var z,y
H.x(b,d)
z=J.iE(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.q(z,y,b)
return H.k(z,"$isb",[d],"$asb")},
iX:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gV(a);x.D();)C.a.h(y,H.x(x.gK(),c))
if(b)return y
return H.k(J.cq(y),"$isb",z,"$asb")},
c4:function(a,b,c){var z,y
z=P.m
H.k(a,"$isp",[z],"$asp")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.k(a,"$isb6",[z],"$asb6")
y=a.length
c=P.b0(b,c,y,null,null,null)
return H.eU(b>0||c<y?C.a.fp(a,b,c):a)}if(!!J.P(a).$iseL)return H.jB(a,b,P.b0(b,c,a.length,null,null,null))
return P.k9(a,b,c)},
k9:function(a,b,c){var z,y,x,w
H.k(a,"$isp",[P.m],"$asp")
if(b<0)throw H.e(P.a0(b,0,J.as(a),null,null))
z=c==null
if(!z&&c<b)throw H.e(P.a0(c,b,J.as(a),null,null))
y=J.b4(a)
for(x=0;x<b;++x)if(!y.D())throw H.e(P.a0(b,0,x,null,null))
w=[]
if(z)for(;y.D();)w.push(y.gK())
else for(x=b;x<c;++x){if(!y.D())throw H.e(P.a0(c,b,x,null,null))
w.push(y.gK())}return H.eU(w)},
jK:function(a,b,c){return new H.iH(a,H.iI(a,!1,!0,!1))},
fu:function(){var z=H.jr()
if(z!=null)return P.kC(z,0,null)
throw H.e(P.W("'Uri.base' is not supported"))},
ck:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.af(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ih(a)},
u:function(a){return new P.fL(a)},
iY:function(a,b,c,d){var z,y
H.l(b,{func:1,ret:d,args:[P.m]})
z=H.c([],[d])
C.a.sp(z,a)
for(y=0;y<a;++y)C.a.q(z,y,b.$1(y))
return z},
dV:function(a){H.nf(a)},
kC:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.I(a,b+4)^58)*3|C.b.I(a,b)^100|C.b.I(a,b+1)^97|C.b.I(a,b+2)^116|C.b.I(a,b+3)^97)>>>0
if(y===0)return P.ft(b>0||c<c?C.b.u(a,b,c):a,5,null).gf2()
else if(y===32)return P.ft(C.b.u(a,z,c),0,null).gf2()}x=new Array(8)
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
if(P.h9(a,b,c,0,w)>=14)C.a.q(w,7,c)
v=w[1]
if(typeof v!=="number")return v.ky()
if(v>=b)if(P.h9(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.G()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.T()
if(typeof r!=="number")return H.A(r)
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
p=!1}else{if(!(r<c&&r===s+2&&C.b.ac(a,"..",s)))n=r>s+2&&C.b.ac(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.ac(a,"file",b)){if(u<=b){if(!C.b.ac(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.b.u(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.b.b1(a,s,r,"/");++r;++q;++c}else{a=C.b.u(a,b,s)+"/"+C.b.u(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.ac(a,"http",b)){if(x&&t+3===s&&C.b.ac(a,"80",t+1))if(b===0&&!0){a=C.b.b1(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.b.u(a,b,t)+C.b.u(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.b.ac(a,"https",b)){if(x&&t+4===s&&C.b.ac(a,"443",t+1))if(b===0&&!0){a=C.b.b1(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.b.u(a,b,t)+C.b.u(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.b.u(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.lK(a,v,u,t,s,r,q,o)}return P.lZ(a,b,c,v,u,t,s,r,q,o)},
fw:function(a,b){var z=P.h
return C.a.jG(H.c(a.split("&"),[z]),P.ez(z,z),new P.kF(b),[P.H,P.h,P.h])},
kA:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.kB(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.a1(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.cc(C.b.u(a,v,w),null,null)
if(typeof s!=="number")return s.d9()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.f(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.cc(C.b.u(a,v,c),null,null)
if(typeof s!=="number")return s.d9()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.f(y,u)
y[u]=s
return y},
fv:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.kD(a)
y=new P.kE(z,a)
if(a.length<2)z.$1("address is too short")
x=H.c([],[P.m])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.a1(a,w)
if(s===58){if(w===b){++w
if(C.b.a1(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaG(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.kA(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.f(o,l)
o[l]=0
i=l+1
if(i>=n)return H.f(o,i)
o[i]=0
l+=2}else{i=C.h.aV(k,8)
if(l<0||l>=n)return H.f(o,l)
o[l]=i
i=l+1
if(i>=n)return H.f(o,i)
o[i]=k&255
l+=2}}return o},
mp:function(){var z,y,x,w,v
z=P.iY(22,new P.mr(),!0,P.O)
y=new P.mq(z)
x=new P.ms()
w=new P.mt()
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
h9:function(a,b,c,d,e){var z,y,x,w,v
H.k(e,"$isb",[P.m],"$asb")
z=$.$get$ha()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.f(z,d)
x=z[d]
w=C.b.I(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.f(x,w)
v=x[w]
d=v&31
C.a.q(e,v>>>5,y)}return d},
N:{"^":"a;"},
"+bool":0,
am:{"^":"a;a,b",
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.am))return!1
return this.a===b.a&&!0},
gY:function(a){var z=this.a
return(z^C.h.aV(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.i3(H.jy(this))
y=P.bV(H.jw(this))
x=P.bV(H.js(this))
w=P.bV(H.jt(this))
v=P.bV(H.jv(this))
u=P.bV(H.jx(this))
t=P.i4(H.ju(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
n:{
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
bV:function(a){if(a>=10)return""+a
return"0"+a}}},
q:{"^":"ak;"},
"+double":0,
bv:{"^":"a;a",
T:function(a,b){return C.h.T(this.a,H.d(b,"$isbv").a)},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.bv))return!1
return this.a===b.a},
gY:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.ia()
y=this.a
if(y<0)return"-"+new P.bv(0-y).i(0)
x=z.$1(C.h.a6(y,6e7)%60)
w=z.$1(C.h.a6(y,1e6)%60)
v=new P.i9().$1(y%1e6)
return""+C.h.a6(y,36e8)+":"+H.i(x)+":"+H.i(w)+"."+H.i(v)},
n:{
en:function(a,b,c,d,e,f){return new P.bv(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
i9:{"^":"n:28;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
ia:{"^":"n:28;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a2:{"^":"a;"},
eO:{"^":"a2;",
i:function(a){return"Throw of null."}},
aH:{"^":"a2;a,b,c,d",
gc7:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc6:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.i(z)
w=this.gc7()+y+x
if(!this.a)return w
v=this.gc6()
u=P.ck(this.b)
return w+v+": "+H.i(u)},
n:{
cg:function(a){return new P.aH(!1,null,null,a)},
cS:function(a,b,c){return new P.aH(!0,a,b,c)}}},
cw:{"^":"aH;e,f,a,b,c,d",
gc7:function(){return"RangeError"},
gc6:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.i(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.i(z)
else if(x>z)y=": Not in range "+H.i(z)+".."+H.i(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.i(z)}return y},
n:{
c3:function(a,b,c){return new P.cw(null,null,!0,a,b,"Value not in range")},
a0:function(a,b,c,d,e){return new P.cw(b,c,!0,a,d,"Invalid value")},
b0:function(a,b,c,d,e,f){if(typeof a!=="number")return H.A(a)
if(0>a||a>c)throw H.e(P.a0(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.e(P.a0(b,a,c,"end",f))
return b}return c}}},
iA:{"^":"aH;e,p:f>,a,b,c,d",
gc7:function(){return"RangeError"},
gc6:function(){if(J.hx(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.i(z)},
n:{
b5:function(a,b,c,d,e){var z=H.ab(e!=null?e:J.as(b))
return new P.iA(b,z,!0,a,c,"Index out of range")}}},
ky:{"^":"a2;a",
i:function(a){return"Unsupported operation: "+this.a},
n:{
W:function(a){return new P.ky(a)}}},
kv:{"^":"a2;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
n:{
cA:function(a){return new P.kv(a)}}},
dh:{"^":"a2;a",
i:function(a){return"Bad state: "+this.a},
n:{
f3:function(a){return new P.dh(a)}}},
hX:{"^":"a2;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.i(P.ck(z))+"."},
n:{
aI:function(a){return new P.hX(a)}}},
jm:{"^":"a;",
i:function(a){return"Out of Memory"},
$isa2:1},
f2:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isa2:1},
i1:{"^":"a2;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fL:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
ip:{"^":"a;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.i(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.u(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.I(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.b.a1(w,s)
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
m=""}l=C.b.u(w,o,p)
return y+n+l+m+"\n"+C.b.t(" ",x-o+n.length)+"^\n"},
n:{
V:function(a,b,c){return new P.ip(a,b,c)}}},
bW:{"^":"a;"},
m:{"^":"ak;"},
"+int":0,
p:{"^":"a;$ti",
d4:["fs",function(a,b){var z=H.a4(this,"p",0)
return new H.dB(this,H.l(b,{func:1,ret:P.N,args:[z]}),[z])}],
gp:function(a){var z,y
z=this.gV(this)
for(y=0;z.D();)++y
return y},
gaO:function(a){var z,y
z=this.gV(this)
if(!z.D())throw H.e(H.cp())
y=z.gK()
if(z.D())throw H.e(H.iD())
return y},
a8:function(a,b){var z,y,x
if(b<0)H.r(P.a0(b,0,null,"index",null))
for(z=this.gV(this),y=0;z.D();){x=z.gK()
if(b===y)return x;++y}throw H.e(P.b5(b,this,"index",null,y))},
i:function(a){return P.iC(this,"(",")")}},
aX:{"^":"a;$ti"},
b:{"^":"a;$ti",$isp:1},
"+List":0,
H:{"^":"a;$ti"},
F:{"^":"a;",
gY:function(a){return P.a.prototype.gY.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
ak:{"^":"a;"},
"+num":0,
a:{"^":";",
v:function(a,b){return this===b},
gY:function(a){return H.bE(this)},
i:function(a){return"Instance of '"+H.ba(this)+"'"},
toString:function(){return this.i(this)}},
aM:{"^":"a;"},
h:{"^":"a;",$iseP:1},
"+String":0,
ai:{"^":"a;aR:a<",
gp:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isnH:1,
n:{
f4:function(a,b,c){var z=J.b4(b)
if(!z.D())return a
if(c.length===0){do a+=H.i(z.gK())
while(z.D())}else{a+=H.i(z.gK())
for(;z.D();)a=a+c+H.i(z.gK())}return a}}},
kF:{"^":"n:44;a",
$2:function(a,b){var z,y,x,w
z=P.h
H.k(a,"$isH",[z,z],"$asH")
H.C(b)
y=J.bR(b).eC(b,"=")
if(y===-1){if(b!=="")a.q(0,P.dG(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.u(b,0,y)
w=C.b.ay(b,y+1)
z=this.a
a.q(0,P.dG(x,0,x.length,z,!0),P.dG(w,0,w.length,z,!0))}return a}},
kB:{"^":"n:43;a",
$2:function(a,b){throw H.e(P.V("Illegal IPv4 address, "+a,this.a,b))}},
kD:{"^":"n:42;a",
$2:function(a,b){throw H.e(P.V("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
kE:{"^":"n:41;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.cc(C.b.u(this.b,a,b),null,16)
if(typeof z!=="number")return z.T()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cE:{"^":"a;c0:a<,b,c,d,eN:e>,f,r,0x,0y,0z,0Q,0ch",
si0:function(a){var z=P.h
this.Q=H.k(a,"$isH",[z,z],"$asH")},
gf4:function(){return this.b},
gcO:function(a){var z=this.c
if(z==null)return""
if(C.b.a5(z,"["))return C.b.u(z,1,z.length-1)
return z},
gbV:function(a){var z=this.d
if(z==null)return P.fY(this.a)
return z},
gcY:function(){var z=this.f
return z==null?"":z},
gex:function(){var z=this.r
return z==null?"":z},
d1:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.k(h,"$isH",[P.h,null],"$asH")
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
if(x&&!C.b.a5(d,"/"))d="/"+d
g=P.dF(g,0,0,h)
return new P.cE(i,j,c,f,d,g,this.r)},
eS:function(a,b){return this.d1(a,null,null,null,null,null,null,b,null,null)},
gcZ:function(){var z,y
if(this.Q==null){z=this.f
y=P.h
this.si0(new P.fs(P.fw(z==null?"":z,C.m),[y,y]))}return this.Q},
gey:function(){return this.c!=null},
geB:function(){return this.f!=null},
gez:function(){return this.r!=null},
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
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!!J.P(b).$isdy){if(this.a==b.gc0())if(this.c!=null===b.gey())if(this.b==b.gf4())if(this.gcO(this)==b.gcO(b))if(this.gbV(this)==b.gbV(b))if(this.e===b.geN(b)){z=this.f
y=z==null
if(!y===b.geB()){if(y)z=""
if(z===b.gcY()){z=this.r
y=z==null
if(!y===b.gez()){if(y)z=""
z=z===b.gex()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
return z}return!1},
gY:function(a){var z=this.z
if(z==null){z=C.b.gY(this.i(0))
this.z=z}return z},
$isdy:1,
n:{
c9:function(a,b,c,d){var z,y,x,w,v,u
H.k(a,"$isb",[P.m],"$asb")
if(c===C.m){z=$.$get$h2().b
if(typeof b!=="string")H.r(H.aj(b))
z=z.test(b)}else z=!1
if(z)return b
H.x(b,H.a4(c,"bT",0))
y=c.gjA().cD(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.f(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.bb(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lZ:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.m9(a,b,d)
else{if(d===b)P.bK(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.ma(a,z,e-1):""
x=P.m3(a,e,f,!1)
if(typeof f!=="number")return f.G()
w=f+1
if(typeof g!=="number")return H.A(g)
v=w<g?P.m6(P.cc(C.b.u(a,w,g),new P.m_(a,f),null),j):null}else{y=""
x=null
v=null}u=P.m4(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.T()
t=h<i?P.dF(a,h+1,i,null):null
return new P.cE(j,y,x,v,u,t,i<c?P.m2(a,i+1,c):null)},
fY:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bK:function(a,b,c){throw H.e(P.V(c,a,b))},
m6:function(a,b){if(a!=null&&a===P.fY(b))return
return a},
m3:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.a1(a,b)===91){if(typeof c!=="number")return c.N()
z=c-1
if(C.b.a1(a,z)!==93)P.bK(a,b,"Missing end `]` to match `[` in host")
P.fv(a,b+1,z)
return C.b.u(a,b,c).toLowerCase()}if(typeof c!=="number")return H.A(c)
y=b
for(;y<c;++y)if(C.b.a1(a,y)===58){P.fv(a,b,c)
return"["+a+"]"}return P.mc(a,b,c)},
mc:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.A(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.a1(a,z)
if(v===37){u=P.h4(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.ai("")
s=C.b.u(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.u(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.f(C.J,t)
t=(C.J[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.ai("")
if(y<z){x.a+=C.b.u(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.f(C.t,t)
t=(C.t[t]&1<<(v&15))!==0}else t=!1
if(t)P.bK(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.a1(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.ai("")
s=C.b.u(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fZ(v)
z+=q
y=z}}}}if(x==null)return C.b.u(a,b,c)
if(y<c){s=C.b.u(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
m9:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.h0(C.b.I(a,b)))P.bK(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.I(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.f(C.v,w)
w=(C.v[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bK(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.u(a,b,c)
return P.m0(y?a.toLowerCase():a)},
m0:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
ma:function(a,b,c){return P.bL(a,b,c,C.a7,!1)},
m4:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bL(a,b,c,C.K,!0):C.r.lb(d,new P.m5(),P.h).k(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a5(w,"/"))w="/"+w
return P.mb(w,e,f)},
mb:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a5(a,"/"))return P.md(a,!z||c)
return P.me(a)},
dF:function(a,b,c,d){var z,y
z={}
H.k(d,"$isH",[P.h,null],"$asH")
if(a!=null){if(d!=null)throw H.e(P.cg("Both query and queryParameters specified"))
return P.bL(a,b,c,C.u,!0)}if(d==null)return
y=new P.ai("")
z.a=""
d.a0(0,new P.m7(new P.m8(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
m2:function(a,b,c){return P.bL(a,b,c,C.u,!0)},
h4:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.a1(a,b+1)
x=C.b.a1(a,z)
w=H.cK(y)
v=H.cK(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.h.aV(u,4)
if(z>=8)return H.f(C.w,z)
z=(C.w[z]&1<<(u&15))!==0}else z=!1
if(z)return H.bb(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.u(a,b,b+3).toUpperCase()
return},
fZ:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.c(z,[P.m])
C.a.q(y,0,37)
C.a.q(y,1,C.b.I("0123456789ABCDEF",a>>>4))
C.a.q(y,2,C.b.I("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.c(z,[P.m])
for(v=0;--w,w>=0;x=128){u=C.h.ip(a,6*w)&63|x
C.a.q(y,v,37)
C.a.q(y,v+1,C.b.I("0123456789ABCDEF",u>>>4))
C.a.q(y,v+2,C.b.I("0123456789ABCDEF",u&15))
v+=3}}return P.c4(y,0,null)},
bL:function(a,b,c,d,e){var z=P.h3(a,b,c,H.k(d,"$isb",[P.m],"$asb"),e)
return z==null?C.b.u(a,b,c):z},
h3:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.k(d,"$isb",[P.m],"$asb")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.T()
if(typeof c!=="number")return H.A(c)
if(!(y<c))break
c$0:{v=C.b.a1(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.f(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.h4(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.f(C.t,u)
u=(C.t[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bK(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.a1(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fZ(v)}}if(w==null)w=new P.ai("")
w.a+=C.b.u(a,x,y)
w.a+=H.i(t)
if(typeof s!=="number")return H.A(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.T()
if(x<c)w.a+=C.b.u(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
h1:function(a){if(C.b.a5(a,"."))return!0
return C.b.eC(a,"/.")!==-1},
me:function(a){var z,y,x,w,v,u,t
if(!P.h1(a))return a
z=H.c([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.J(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.f(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.k(z,"/")},
md:function(a,b){var z,y,x,w,v,u
if(!P.h1(a))return!b?P.h_(a):a
z=H.c([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaG(z)!==".."){if(0>=z.length)return H.f(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.f(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaG(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.f(z,0)
C.a.q(z,0,P.h_(z[0]))}return C.a.k(z,"/")},
h_:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.h0(J.hA(a,0)))for(y=1;y<z;++y){x=C.b.I(a,y)
if(x===58)return C.b.u(a,0,y)+"%3A"+C.b.ay(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.f(C.v,w)
w=(C.v[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
m1:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.I(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.e(P.cg("Invalid URL encoding"))}}return z},
dG:function(a,b,c,d,e){var z,y,x,w,v
y=b
while(!0){if(!(y<c)){z=!0
break}x=C.b.I(a,y)
if(x<=127)if(x!==37)w=x===43
else w=!0
else w=!0
if(w){z=!1
break}++y}if(z){if(C.m!==d)w=!1
else w=!0
if(w)return C.b.u(a,b,c)
else v=new H.v(C.b.u(a,b,c))}else{v=H.c([],[P.m])
for(w=a.length,y=b;y<c;++y){x=C.b.I(a,y)
if(x>127)throw H.e(P.cg("Illegal percent encoding in URI"))
if(x===37){if(y+3>w)throw H.e(P.cg("Truncated URI"))
C.a.h(v,P.m1(a,y+1))
y+=2}else if(x===43)C.a.h(v,32)
else C.a.h(v,x)}}H.k(v,"$isb",[P.m],"$asb")
return new P.kL(!1).cD(v)},
h0:function(a){var z=a|32
return 97<=z&&z<=122}}},
m_:{"^":"n:40;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.G()
throw H.e(P.V("Invalid port",this.a,z+1))}},
m5:{"^":"n:13;",
$1:function(a){return P.c9(C.a8,a,C.m,!1)}},
m8:{"^":"n:38;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.i(P.c9(C.w,a,C.m,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.i(P.c9(C.w,b,C.m,!0))}}},
m7:{"^":"n:35;a",
$2:function(a,b){var z,y
H.C(a)
if(b==null||typeof b==="string")this.a.$2(a,H.C(b))
else for(z=J.b4(H.ho(b,"$isp")),y=this.a;z.D();)y.$2(a,H.C(z.gK()))}},
kz:{"^":"a;a,b,c",
gf2:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
z=z[0]+1
x=C.b.eD(y,"?",z)
w=y.length
if(x>=0){v=P.bL(y,x+1,w,C.u,!1)
w=x}else v=null
z=new P.ld(this,"data",null,null,null,P.bL(y,z,w,C.K,!1),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
n:{
ft:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.c([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.I(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.e(P.V("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.e(P.V("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.I(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaG(z)
if(v!==44||x!==t+7||!C.b.ac(a,"base64",t+1))throw H.e(P.V("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.P.jU(a,s,y)
else{r=P.h3(a,s,y,C.u,!0)
if(r!=null)a=C.b.b1(a,s,y,r)}return new P.kz(a,z,c)}}},
mr:{"^":"n:34;",
$1:function(a){return new Uint8Array(96)}},
mq:{"^":"n:33;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.f(z,a)
z=z[a]
J.hC(z,0,96,b)
return z}},
ms:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.I(b,y)^96
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
mt:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=C.b.I(b,0),y=C.b.I(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
lK:{"^":"a;a,b,c,d,e,f,r,x,0y",
gey:function(){return this.c>0},
geA:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.G()
y=this.e
if(typeof y!=="number")return H.A(y)
y=z+1<y
z=y}else z=!1
return z},
geB:function(){var z=this.f
if(typeof z!=="number")return z.T()
return z<this.r},
gez:function(){return this.r<this.a.length},
gdE:function(){return this.b===4&&C.b.a5(this.a,"http")},
gdF:function(){return this.b===5&&C.b.a5(this.a,"https")},
gc0:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdE()){this.x="http"
z="http"}else if(this.gdF()){this.x="https"
z="https"}else if(z===4&&C.b.a5(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a5(this.a,"package")){this.x="package"
z="package"}else{z=C.b.u(this.a,0,z)
this.x=z}return z},
gf4:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.u(this.a,y,z-1):""},
gcO:function(a){var z=this.c
return z>0?C.b.u(this.a,z,this.d):""},
gbV:function(a){var z
if(this.geA()){z=this.d
if(typeof z!=="number")return z.G()
return P.cc(C.b.u(this.a,z+1,this.e),null,null)}if(this.gdE())return 80
if(this.gdF())return 443
return 0},
geN:function(a){return C.b.u(this.a,this.e,this.f)},
gcY:function(){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.T()
return z<y?C.b.u(this.a,z+1,y):""},
gex:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.ay(y,z+1):""},
gcZ:function(){var z=this.f
if(typeof z!=="number")return z.T()
if(z>=this.r)return C.a9
z=P.h
return new P.fs(P.fw(this.gcY(),C.m),[z,z])},
d1:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.k(h,"$isH",[P.h,null],"$asH")
i=this.gc0()
z=i==="file"
y=this.c
j=y>0?C.b.u(this.a,this.b+3,y):""
f=this.geA()?this.gbV(this):null
y=this.c
if(y>0)c=C.b.u(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.u(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a5(d,"/"))d="/"+d
g=P.dF(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.ay(y,x+1)
return new P.cE(i,j,c,f,d,g,b)},
eS:function(a,b){return this.d1(a,null,null,null,null,null,null,b,null,null)},
gY:function(a){var z=this.y
if(z==null){z=C.b.gY(this.a)
this.y=z}return z},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!!J.P(b).$isdy)return this.a===b.i(0)
return!1},
i:function(a){return this.a},
$isdy:1},
ld:{"^":"cE;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
e1:function(a){var z=document.createElement("a")
return z},
eb:function(a,b){var z=document.createElement("canvas")
return z},
ib:function(a,b,c){var z,y
z=document.body
y=(z&&C.p).ap(z,a,b,c)
y.toString
z=W.B
z=new H.dB(new W.aq(y),H.l(new W.ic(),{func:1,ret:P.N,args:[z]}),[z])
return H.d(z.gaO(z),"$isQ")},
id:function(a){H.d(a,"$iscl")
return"wheel"},
bw:function(a){var z,y,x
z="element tag unavailable"
try{y=J.hF(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a6(x)}return z},
iB:function(a){var z,y,x
y=document.createElement("input")
z=H.d(y,"$iset")
try{J.hH(z,a)}catch(x){H.a6(x)}return z},
cB:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fP:function(a,b,c,d){var z,y
z=W.cB(W.cB(W.cB(W.cB(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
hd:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.S
if(z===C.l)return a
return z.e2(a,b)},
a9:{"^":"Q;","%":"HTMLAudioElement|HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLLIElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
hL:{"^":"a9;",
i:function(a){return String(a)},
$ishL:1,
"%":"HTMLAnchorElement"},
np:{"^":"a9;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
e4:{"^":"a9;",$ise4:1,"%":"HTMLBaseElement"},
ch:{"^":"a9;",$isch:1,"%":"HTMLBodyElement"},
cW:{"^":"a9;",
d6:function(a,b,c){var z=this.hk(a,b,P.mE(c,null))
return z},
hk:function(a,b,c){return a.getContext(b,c)},
$iscW:1,
"%":"HTMLCanvasElement"},
ns:{"^":"B;0p:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
nu:{"^":"lc;0p:length=",
ff:function(a,b){var z=this.hl(a,this.h3(a,b))
return z==null?"":z},
h3:function(a,b){var z,y
z=$.$get$ef()
y=z[b]
if(typeof y==="string")return y
y=this.is(a,b)
z[b]=y
return y},
is:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.i5()+b
if(z in a)return z
return b},
hl:function(a,b){return a.getPropertyValue(b)},
gcw:function(a){return a.bottom},
gbf:function(a){return a.height},
gaZ:function(a){return a.left},
gbm:function(a){return a.right},
gbq:function(a){return a.top},
gbr:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
i0:{"^":"a;",
gaZ:function(a){return this.ff(a,"left")}},
aW:{"^":"a9;",$isaW:1,"%":"HTMLDivElement"},
i6:{"^":"B;",
j5:function(a,b){return a.adoptNode(b)},
d7:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
nv:{"^":"M;",
i:function(a){return String(a)},
"%":"DOMException"},
i7:{"^":"M;",
jo:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
i8:{"^":"M;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
v:function(a,b){var z
if(b==null)return!1
if(!H.bQ(b,"$isaL",[P.ak],"$asaL"))return!1
z=J.X(b)
return a.left===z.gaZ(b)&&a.top===z.gbq(b)&&a.width===z.gbr(b)&&a.height===z.gbf(b)},
gY:function(a){return W.fP(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gcw:function(a){return a.bottom},
gbf:function(a){return a.height},
gaZ:function(a){return a.left},
gbm:function(a){return a.right},
gbq:function(a){return a.top},
gbr:function(a){return a.width},
$isaL:1,
$asaL:function(){return[P.ak]},
"%":";DOMRectReadOnly"},
lb:{"^":"cr;dz:a<,b",
gp:function(a){return this.b.length},
l:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.f(z,b)
return H.d(z[b],"$isQ")},
q:function(a,b,c){var z
H.d(c,"$isQ")
z=this.b
if(b<0||b>=z.length)return H.f(z,b)
J.cP(this.a,c,z[b])},
h:function(a,b){J.dZ(this.a,b)
return b},
gV:function(a){var z=this.ks(this)
return new J.at(z,z.length,0,[H.t(z,0)])},
$asU:function(){return[W.Q]},
$asp:function(){return[W.Q]},
$asb:function(){return[W.Q]}},
Q:{"^":"B;0kq:tagName=",
gj8:function(a){return new W.le(a)},
gcC:function(a){return new W.lb(a,a.children)},
ge4:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.T()
if(x<0)x=-x*0
if(typeof w!=="number")return w.T()
if(w<0)w=-w*0
return new P.aL(z,y,x,w,[P.ak])},
i:function(a){return a.localName},
ap:["c1",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.eq
if(z==null){z=H.c([],[W.aE])
y=new W.eM(z)
C.a.h(z,W.fN(null))
C.a.h(z,W.fW())
$.eq=y
d=y}else d=z
z=$.ep
if(z==null){z=new W.h5(d)
$.ep=z
c=z}else{z.a=d
c=z}}if($.aJ==null){z=document
y=z.implementation
y=(y&&C.T).jo(y,"")
$.aJ=y
$.cZ=y.createRange()
y=$.aJ
y.toString
y=y.createElement("base")
H.d(y,"$ise4")
y.href=z.baseURI
z=$.aJ.head;(z&&C.V).E(z,y)}z=$.aJ
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.d(y,"$isch")}z=$.aJ
if(!!this.$isch)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.aJ.body;(z&&C.p).E(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.a_(C.a6,a.tagName)){z=$.cZ;(z&&C.M).fk(z,x)
z=$.cZ
w=(z&&C.M).jm(z,b)}else{x.innerHTML=b
w=$.aJ.createDocumentFragment()
for(z=J.X(w);y=x.firstChild,y!=null;)z.E(w,y)}z=$.aJ.body
if(x==null?z!=null:x!==z)J.e0(x)
c.da(w)
C.z.j5(document,w)
return w},function(a,b,c){return this.ap(a,b,c,null)},"jn",null,null,"gl9",5,5,null],
fn:function(a,b,c,d){a.textContent=null
this.E(a,this.ap(a,b,c,d))},
fm:function(a,b){return this.fn(a,b,null,null)},
b3:function(a,b){return a.getAttribute(b)},
i2:function(a,b){return a.removeAttribute(b)},
fl:function(a,b,c){return a.setAttribute(b,c)},
$isQ:1,
"%":";Element"},
ic:{"^":"n:23;",
$1:function(a){return!!J.P(H.d(a,"$isB")).$isQ}},
ac:{"^":"M;",$isac:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
cl:{"^":"M;",
fZ:function(a,b,c,d){return a.addEventListener(b,H.bl(H.l(c,{func:1,args:[W.ac]}),1),!1)},
$iscl:1,
"%":";EventTarget"},
nw:{"^":"a9;0p:length=","%":"HTMLFormElement"},
iu:{"^":"a9;","%":"HTMLHeadElement"},
iv:{"^":"M;0p:length=",
i8:function(a,b,c,d){return a.replaceState(b,c,d)},
"%":"History"},
iw:{"^":"lu;",
gp:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.b5(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$isB")
throw H.e(P.W("Cannot assign element of immutable List."))},
a8:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isav:1,
$asav:function(){return[W.B]},
$asU:function(){return[W.B]},
$isp:1,
$asp:function(){return[W.B]},
$isb:1,
$asb:function(){return[W.B]},
$isiw:1,
$asaA:function(){return[W.B]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
ix:{"^":"i6;","%":"HTMLDocument"},
et:{"^":"a9;0type",
skv:function(a,b){a.type=H.C(b)},
$iset:1,
"%":"HTMLInputElement"},
bA:{"^":"dn;",$isbA:1,"%":"KeyboardEvent"},
iL:{"^":"a9;","%":"HTMLLabelElement"},
iZ:{"^":"M;",
i:function(a){return String(a)},
$isiZ:1,
"%":"Location"},
aw:{"^":"dn;",$isaw:1,"%":"PointerEvent;DragEvent|MouseEvent"},
aq:{"^":"cr;a",
gaO:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.e(P.f3("No elements"))
if(y>1)throw H.e(P.f3("More than one element"))
return z.firstChild},
aB:function(a,b){var z,y,x,w,v
H.k(b,"$isp",[W.B],"$asp")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.X(y),v=0;v<x;++v)w.E(y,z.firstChild)
return},
q:function(a,b,c){var z,y
H.d(c,"$isB")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.f(y,b)
J.cP(z,c,y[b])},
gV:function(a){var z=this.a.childNodes
return new W.er(z,z.length,-1,[H.cb(C.aa,z,"aA",0)])},
gp:function(a){return this.a.childNodes.length},
l:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
$asU:function(){return[W.B]},
$asp:function(){return[W.B]},
$asb:function(){return[W.B]}},
B:{"^":"cl;0kc:previousSibling=",
ke:function(a){var z=a.parentNode
if(z!=null)J.ce(z,a)},
kj:function(a,b){var z,y
try{z=a.parentNode
J.cP(z,b,a)}catch(y){H.a6(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.fq(a):z},
E:function(a,b){return a.appendChild(H.d(b,"$isB"))},
i3:function(a,b){return a.removeChild(b)},
i7:function(a,b,c){return a.replaceChild(b,c)},
$isB:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
jh:{"^":"lA;",
gp:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.b5(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$isB")
throw H.e(P.W("Cannot assign element of immutable List."))},
a8:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isav:1,
$asav:function(){return[W.B]},
$asU:function(){return[W.B]},
$isp:1,
$asp:function(){return[W.B]},
$isb:1,
$asb:function(){return[W.B]},
$asaA:function(){return[W.B]},
"%":"NodeList|RadioNodeList"},
jF:{"^":"M;",
jm:function(a,b){return a.createContextualFragment(b)},
fk:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
nF:{"^":"a9;0p:length=","%":"HTMLSelectElement"},
cx:{"^":"a9;",$iscx:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
ka:{"^":"a9;",
ap:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.c1(a,b,c,d)
z=W.ib("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.aq(y).aB(0,new W.aq(z))
return y},
hn:function(a,b){return a.insertRow(b)},
"%":"HTMLTableElement"},
kb:{"^":"a9;",
ap:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.c1(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.o.ap(z.createElement("table"),b,c,d)
z.toString
z=new W.aq(z)
x=z.gaO(z)
x.toString
z=new W.aq(x)
w=z.gaO(z)
y.toString
w.toString
new W.aq(y).aB(0,new W.aq(w))
return y},
dD:function(a,b){return a.insertCell(b)},
"%":"HTMLTableRowElement"},
nI:{"^":"a9;",
ap:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.c1(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.o.ap(z.createElement("table"),b,c,d)
z.toString
z=new W.aq(z)
x=z.gaO(z)
y.toString
x.toString
new W.aq(y).aB(0,new W.aq(x))
return y},
"%":"HTMLTableSectionElement"},
f7:{"^":"a9;",$isf7:1,"%":"HTMLTemplateElement"},
bd:{"^":"M;",$isbd:1,"%":"Touch"},
be:{"^":"dn;",$isbe:1,"%":"TouchEvent"},
nK:{"^":"lW;",
gp:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.b5(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$isbd")
throw H.e(P.W("Cannot assign element of immutable List."))},
a8:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isav:1,
$asav:function(){return[W.bd]},
$asU:function(){return[W.bd]},
$isp:1,
$asp:function(){return[W.bd]},
$isb:1,
$asb:function(){return[W.bd]},
$asaA:function(){return[W.bd]},
"%":"TouchList"},
dn:{"^":"ac;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
bI:{"^":"aw;",
gju:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.W("deltaY is not supported"))},
gjt:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.W("deltaX is not supported"))},
$isbI:1,
"%":"WheelEvent"},
l4:{"^":"cl;",
i9:function(a,b){return a.requestAnimationFrame(H.bl(H.l(b,{func:1,ret:-1,args:[P.ak]}),1))},
hd:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fJ:{"^":"B;",$isfJ:1,"%":"Attr"},
nQ:{"^":"i8;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
v:function(a,b){var z
if(b==null)return!1
if(!H.bQ(b,"$isaL",[P.ak],"$asaL"))return!1
z=J.X(b)
return a.left===z.gaZ(b)&&a.top===z.gbq(b)&&a.width===z.gbr(b)&&a.height===z.gbf(b)},
gY:function(a){return W.fP(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gbf:function(a){return a.height},
gbr:function(a){return a.width},
"%":"ClientRect|DOMRect"},
nU:{"^":"mm;",
gp:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.b5(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$isB")
throw H.e(P.W("Cannot assign element of immutable List."))},
a8:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isav:1,
$asav:function(){return[W.B]},
$asU:function(){return[W.B]},
$isp:1,
$asp:function(){return[W.B]},
$isb:1,
$asb:function(){return[W.B]},
$asaA:function(){return[W.B]},
"%":"MozNamedAttrMap|NamedNodeMap"},
la:{"^":"eC;dz:a<",
a0:function(a,b){var z,y,x,w,v,u
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(z=this.gaF(),y=z.length,x=this.a,w=J.X(x),v=0;v<z.length;z.length===y||(0,H.z)(z),++v){u=z[v]
b.$2(u,w.b3(x,u))}},
gaF:function(){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.h])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
v=H.d(z[w],"$isfJ")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asct:function(){return[P.h,P.h]},
$asH:function(){return[P.h,P.h]}},
le:{"^":"la;a",
l:function(a,b){return J.cR(this.a,H.C(b))},
q:function(a,b,c){J.hI(this.a,b,c)},
gp:function(a){return this.gaF().length}},
lf:{"^":"k5;a,b,c,$ti"},
nR:{"^":"lf;a,b,c,$ti"},
lg:{"^":"di;a,b,c,d,e,$ti",n:{
a1:function(a,b,c,d,e){var z,y
z=W.hd(new W.lh(c),W.ac)
y=z!=null
if(y&&!0){H.l(z,{func:1,args:[W.ac]})
if(y)J.hz(a,b,z,!1)}return new W.lg(0,a,b,z,!1,[e])}}},
lh:{"^":"n:31;a",
$1:function(a){return this.a.$1(H.d(a,"$isac"))}},
c8:{"^":"a;a",
fJ:function(a){var z,y
z=$.$get$dD()
if(z.gjN(z)){for(y=0;y<262;++y)z.q(0,C.a5[y],W.mT())
for(y=0;y<12;++y)z.q(0,C.B[y],W.mU())}},
aW:function(a){return $.$get$fO().a_(0,W.bw(a))},
aK:function(a,b,c){var z,y,x
z=W.bw(a)
y=$.$get$dD()
x=y.l(0,H.i(z)+"::"+b)
if(x==null)x=y.l(0,"*::"+b)
if(x==null)return!1
return H.dM(x.$4(a,b,c,this))},
$isaE:1,
n:{
fN:function(a){var z,y
z=W.e1(null)
y=window.location
z=new W.c8(new W.lG(z,y))
z.fJ(a)
return z},
nS:[function(a,b,c,d){H.d(a,"$isQ")
H.C(b)
H.C(c)
H.d(d,"$isc8")
return!0},"$4","mT",16,0,20],
nT:[function(a,b,c,d){var z,y,x
H.d(a,"$isQ")
H.C(b)
H.C(c)
z=H.d(d,"$isc8").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","mU",16,0,20]}},
aA:{"^":"a;$ti",
gV:function(a){return new W.er(a,this.gp(a),-1,[H.cb(this,a,"aA",0)])}},
eM:{"^":"a;a",
aW:function(a){return C.a.dX(this.a,new W.jj(a))},
aK:function(a,b,c){return C.a.dX(this.a,new W.ji(a,b,c))},
$isaE:1},
jj:{"^":"n:25;a",
$1:function(a){return H.d(a,"$isaE").aW(this.a)}},
ji:{"^":"n:25;a,b,c",
$1:function(a){return H.d(a,"$isaE").aK(this.a,this.b,this.c)}},
lH:{"^":"a;",
fT:function(a,b,c,d){var z,y,x
this.a.aB(0,c)
z=b.d4(0,new W.lI())
y=b.d4(0,new W.lJ())
this.b.aB(0,z)
x=this.c
x.aB(0,C.H)
x.aB(0,y)},
aW:function(a){return this.a.a_(0,W.bw(a))},
aK:["fw",function(a,b,c){var z,y
z=W.bw(a)
y=this.c
if(y.a_(0,H.i(z)+"::"+b))return this.d.j6(c)
else if(y.a_(0,"*::"+b))return this.d.j6(c)
else{y=this.b
if(y.a_(0,H.i(z)+"::"+b))return!0
else if(y.a_(0,"*::"+b))return!0
else if(y.a_(0,H.i(z)+"::*"))return!0
else if(y.a_(0,"*::*"))return!0}return!1}],
$isaE:1},
lI:{"^":"n:26;",
$1:function(a){return!C.a.a_(C.B,H.C(a))}},
lJ:{"^":"n:26;",
$1:function(a){return C.a.a_(C.B,H.C(a))}},
lP:{"^":"lH;e,a,b,c,d",
aK:function(a,b,c){if(this.fw(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cR(a,"template")==="")return this.e.a_(0,b)
return!1},
n:{
fW:function(){var z,y,x,w,v
z=P.h
y=P.eA(C.A,z)
x=H.t(C.A,0)
w=H.l(new W.lQ(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.lP(y,P.c0(null,null,null,z),P.c0(null,null,null,z),P.c0(null,null,null,z),null)
y.fT(null,new H.j4(C.A,w,[x,z]),v,null)
return y}}},
lQ:{"^":"n:13;",
$1:function(a){return"TEMPLATE::"+H.i(H.C(a))}},
lO:{"^":"a;",
aW:function(a){var z=J.P(a)
if(!!z.$iseZ)return!1
z=!!z.$isdj
if(z&&W.bw(a)==="foreignObject")return!1
if(z)return!0
return!1},
aK:function(a,b,c){if(b==="is"||C.b.a5(b,"on"))return!1
return this.aW(a)},
$isaE:1},
er:{"^":"a;a,b,c,0d,$ti",
sdC:function(a){this.d=H.x(a,H.t(this,0))},
D:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sdC(J.hy(this.a,z))
this.c=z
return!0}this.sdC(null)
this.c=y
return!1},
gK:function(){return this.d},
$isaX:1},
aE:{"^":"a;"},
lG:{"^":"a;a,b",$isnL:1},
h5:{"^":"a;a",
da:function(a){new W.mj(this).$2(a,null)},
b9:function(a,b){if(b==null)J.e0(a)
else J.ce(b,a)},
ig:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.hD(a)
x=J.cR(y.gdz(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a6(t)}v="element unprintable"
try{v=J.af(a)}catch(t){H.a6(t)}try{u=W.bw(a)
this.ie(H.d(a,"$isQ"),b,z,v,u,H.d(y,"$isH"),H.C(x))}catch(t){if(H.a6(t) instanceof P.aH)throw t
else{this.b9(a,b)
window
s="Removing corrupted element "+H.i(v)
if(typeof console!="undefined")window.console.warn(s)}}},
ie:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.b9(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aW(a)){this.b9(a,b)
window
z="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.aK(a,"is",g)){this.b9(a,b)
window
z="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gaF()
y=H.c(z.slice(0),[H.t(z,0)])
for(x=f.gaF().length-1,z=f.a,w=J.X(z);x>=0;--x){if(x>=y.length)return H.f(y,x)
v=y[x]
if(!this.a.aK(a,J.hK(v),w.b3(z,v))){window
u="Removing disallowed attribute <"+H.i(e)+" "+v+'="'+H.i(w.b3(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.b3(z,v)
w.i2(z,v)}}if(!!J.P(a).$isf7)this.da(a.content)},
$isnD:1},
mj:{"^":"n:46;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.ig(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.b9(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.hE(z)}catch(w){H.a6(w)
v=H.d(z,"$isB")
if(x){u=v.parentNode
if(u!=null)J.ce(u,v)}else J.ce(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.d(y,"$isB")}}},
lc:{"^":"M+i0;"},
lt:{"^":"M+U;"},
lu:{"^":"lt+aA;"},
lz:{"^":"M+U;"},
lA:{"^":"lz+aA;"},
lV:{"^":"M+U;"},
lW:{"^":"lV+aA;"},
ml:{"^":"M+U;"},
mm:{"^":"ml+aA;"}}],["","",,P,{"^":"",
mE:function(a,b){var z={}
a.a0(0,new P.mF(z))
return z},
el:function(){var z=$.ek
if(z==null){z=J.cQ(window.navigator.userAgent,"Opera",0)
$.ek=z}return z},
i5:function(){var z,y
z=$.eh
if(z!=null)return z
y=$.ei
if(y==null){y=J.cQ(window.navigator.userAgent,"Firefox",0)
$.ei=y}if(y)z="-moz-"
else{y=$.ej
if(y==null){y=!P.el()&&J.cQ(window.navigator.userAgent,"Trident/",0)
$.ej=y}if(y)z="-ms-"
else z=P.el()?"-o-":"-webkit-"}$.eh=z
return z},
lL:{"^":"a;",
eu:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
d3:function(a){var z,y,x,w
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.P(a)
if(!!y.$isam)return new Date(a.a)
if(!!y.$isjJ)throw H.e(P.cA("structured clone of RegExp"))
if(!!y.$isdc)return a
if(!!y.$isH){x=this.eu(a)
y=this.b
if(x>=y.length)return H.f(y,x)
w=y[x]
z.a=w
if(w!=null)return w
w={}
z.a=w
C.a.q(y,x,w)
a.a0(0,new P.lN(z,this))
return z.a}if(!!y.$isb){x=this.eu(a)
z=this.b
if(x>=z.length)return H.f(z,x)
w=z[x]
if(w!=null)return w
return this.jl(a,x)}throw H.e(P.cA("structured clone of other type"))},
jl:function(a,b){var z,y,x,w
z=J.bo(a)
y=z.gp(a)
x=new Array(y)
C.a.q(this.b,b,x)
for(w=0;w<y;++w)C.a.q(x,w,this.d3(z.l(a,w)))
return x}},
lN:{"^":"n:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.d3(b)}},
mF:{"^":"n:6;a",
$2:function(a,b){this.a[a]=b}},
lM:{"^":"lL;a,b"},
il:{"^":"cr;a,b",
gbx:function(){var z,y,x
z=this.b
y=H.a4(z,"U",0)
x=W.Q
return new H.j2(new H.dB(z,H.l(new P.im(),{func:1,ret:P.N,args:[y]}),[y]),H.l(new P.io(),{func:1,ret:x,args:[y]}),[y,x])},
q:function(a,b,c){var z
H.d(c,"$isQ")
z=this.gbx()
J.hG(z.b.$1(J.cf(z.a,b)),c)},
h:function(a,b){J.dZ(this.b.a,b)},
gp:function(a){return J.as(this.gbx().a)},
l:function(a,b){var z=this.gbx()
return z.b.$1(J.cf(z.a,b))},
gV:function(a){var z=P.iX(this.gbx(),!1,W.Q)
return new J.at(z,z.length,0,[H.t(z,0)])},
$asU:function(){return[W.Q]},
$asp:function(){return[W.Q]},
$asb:function(){return[W.Q]}},
im:{"^":"n:23;",
$1:function(a){return!!J.P(H.d(a,"$isB")).$isQ}},
io:{"^":"n:55;",
$1:function(a){return H.j(H.d(a,"$isB"),"$isQ")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cC:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lv:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
lB:{"^":"a;$ti",
gbm:function(a){var z=this.a
if(typeof z!=="number")return z.G()
return H.x(z+this.c,H.t(this,0))},
gcw:function(a){var z=this.b
if(typeof z!=="number")return z.G()
return H.x(z+this.d,H.t(this,0))},
i:function(a){return"Rectangle ("+H.i(this.a)+", "+H.i(this.b)+") "+this.c+" x "+this.d},
v:function(a,b){var z,y,x,w
if(b==null)return!1
if(!H.bQ(b,"$isaL",[P.ak],"$asaL"))return!1
z=this.a
y=J.X(b)
x=y.gaZ(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbq(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.G()
w=H.t(this,0)
if(H.x(z+this.c,w)===y.gbm(b)){if(typeof x!=="number")return x.G()
z=H.x(x+this.d,w)===y.gcw(b)}else z=!1}else z=!1}else z=!1
return z},
gY:function(a){var z,y,x,w,v
z=this.a
y=J.bS(z)
x=this.b
w=J.bS(x)
if(typeof z!=="number")return z.G()
v=H.t(this,0)
z=H.x(z+this.c,v)
if(typeof x!=="number")return x.G()
v=H.x(x+this.d,v)
return P.lv(P.cC(P.cC(P.cC(P.cC(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
aL:{"^":"lB;aZ:a>,bq:b>,br:c>,bf:d>,$ti"}}],["","",,P,{"^":"",eZ:{"^":"dj;",$iseZ:1,"%":"SVGScriptElement"},dj:{"^":"Q;",
gcC:function(a){return new P.il(a,new W.aq(a))},
ap:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.aE])
C.a.h(z,W.fN(null))
C.a.h(z,W.fW())
C.a.h(z,new W.lO())
c=new W.h5(new W.eM(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).jn(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.aq(w)
u=z.gaO(z)
for(z=J.X(v);x=u.firstChild,x!=null;)z.E(v,x)
return v},
$isdj:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"}}],["","",,P,{"^":"",O:{"^":"a;",$isp:1,
$asp:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}}}],["","",,P,{"^":""}],["","",,P,{"^":"",hP:{"^":"M;",$ishP:1,"%":"WebGLBuffer"},iq:{"^":"M;",$isiq:1,"%":"WebGLFramebuffer"},jC:{"^":"M;",$isjC:1,"%":"WebGLProgram"},dd:{"^":"M;",
dY:function(a,b,c){return a.attachShader(b,c)},
aC:function(a,b,c){return a.bindBuffer(b,c)},
ja:function(a,b,c){return a.bindFramebuffer(b,c)},
jb:function(a,b,c){return a.blendFunc(b,c)},
e3:function(a,b,c,d){return a.bufferData(b,c,d)},
je:function(a,b){return a.clear(b)},
jf:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
jg:function(a,b){return a.clearDepth(b)},
ji:function(a,b){return a.compileShader(b)},
jp:function(a,b){return a.createShader(b)},
jr:function(a,b){return a.deleteProgram(b)},
js:function(a,b){return a.deleteShader(b)},
jv:function(a,b){return a.depthFunc(b)},
jw:function(a,b){return a.disable(b)},
e5:function(a,b){return a.disableVertexAttribArray(b)},
jy:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cG:function(a,b){return a.enable(b)},
e7:function(a,b){return a.enableVertexAttribArray(b)},
fa:function(a,b,c){return a.getActiveAttrib(b,c)},
fb:function(a,b,c){return a.getActiveUniform(b,c)},
fc:function(a,b,c){return a.getAttribLocation(b,c)},
d8:function(a,b){return a.getParameter(b)},
fe:function(a,b){return a.getProgramInfoLog(b)},
c_:function(a,b,c){return a.getProgramParameter(b,c)},
fg:function(a,b){return a.getShaderInfoLog(b)},
fh:function(a,b,c){return a.getShaderParameter(b,c)},
fi:function(a,b,c){return a.getUniformLocation(b,c)},
jQ:function(a,b){return a.linkProgram(b)},
fo:function(a,b,c){return a.shaderSource(b,c)},
S:function(a,b,c){return a.uniform1f(b,c)},
W:function(a,b,c){return a.uniform1i(b,c)},
w:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
f0:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
f1:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
f3:function(a,b){return a.useProgram(b)},
kw:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
kx:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isdd:1,
"%":"WebGLRenderingContext"},jV:{"^":"M;",$isjV:1,"%":"WebGLShader"},kt:{"^":"M;",$iskt:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",a_:{"^":"a;0a,0b,0c,0d,$ti",
shr:function(a){this.a=H.k(a,"$isb",[H.a4(this,"a_",0)],"$asb")},
sdJ:function(a){this.b=H.l(a,{func:1,ret:P.N,args:[[P.p,H.a4(this,"a_",0)]]})},
sdH:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.m,[P.p,H.a4(this,"a_",0)]]})},
sdK:function(a){this.d=H.l(a,{func:1,ret:-1,args:[P.m,[P.p,H.a4(this,"a_",0)]]})},
c3:function(a){this.shr(H.c([],[a]))
this.sdJ(null)
this.sdH(null)
this.sdK(null)},
dc:function(a,b,c){var z=H.a4(this,"a_",0)
H.l(b,{func:1,ret:P.N,args:[[P.p,z]]})
z={func:1,ret:-1,args:[P.m,[P.p,z]]}
H.l(a,z)
H.l(c,z)
this.sdJ(b)
this.sdH(a)
this.sdK(c)},
bu:function(a,b){return this.dc(a,null,b)},
hS:function(a){var z
H.k(a,"$isp",[H.a4(this,"a_",0)],"$asp")
z=this.b
if(z!=null)return z.$1(a)
return!0},
hy:function(a,b){var z
H.k(b,"$isp",[H.a4(this,"a_",0)],"$asp")
z=this.c
if(z!=null)z.$2(a,b)},
gp:function(a){return this.a.length},
gV:function(a){var z=this.a
return new J.at(z,z.length,0,[H.t(z,0)])},
a8:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.a4(this,"a_",0)
H.x(b,z)
z=[z]
if(this.hS(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.hy(x,H.c([b],z))}},
$isp:1,
n:{
cX:function(a){var z=new O.a_([a])
z.c3(a)
return z}}},d8:{"^":"a;0a,0b",
scc:function(a){this.a=H.k(a,"$isb",[V.ah],"$asb")},
gp:function(a){return this.a.length},
gB:function(){var z=this.b
if(z==null){z=D.L()
this.b=z}return z},
fF:function(a){var z=this.b
if(!(z==null))z.J(a)},
aP:function(){return this.fF(null)},
ga2:function(){var z=this.a
if(z.length>0)return C.a.gaG(z)
else return V.b8()},
eQ:function(a){var z=this.a
if(a==null)C.a.h(z,V.b8())
else C.a.h(z,a)
this.aP()},
cW:function(){var z=this.a
if(z.length>0){z.pop()
this.aP()}}}}],["","",,E,{"^":"",cT:{"^":"a;"},au:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0ak:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sfG:function(a,b){this.y=H.k(b,"$isa_",[E.au],"$asa_")},
sak:function(a){this.z=H.d(a,"$isbx")},
dl:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.at(z,z.length,0,[H.t(z,0)]);z.D();){y=z.d
if(y.f==null)y.dl()}},
sab:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gB().M(0,this.geK())
y=this.c
if(y!=null)y.gB().h(0,this.geK())
x=new D.D("shape",z,this.c,this,[F.f0])
x.b=!0
this.aa(x)}},
sbn:function(a){var z,y,x
z=this.f
if(z==null?a!=null:z!==a){if(z!=null)z.gB().M(0,this.geL())
y=this.f
this.f=a
if(a!=null)a.gB().h(0,this.geL())
this.dl()
x=new D.D("technique",y,this.f,this,[O.c5])
x.b=!0
this.aa(x)}},
saM:function(a){var z,y
if(!J.J(this.r,a)){z=this.r
if(z!=null)z.gB().M(0,this.geJ())
if(a!=null)a.gB().h(0,this.geJ())
this.r=a
y=new D.D("mover",z,a,this,[U.aa])
y.b=!0
this.aa(y)}},
av:function(a){var z,y,x,w
z=this.r
y=z!=null?z.aw(a,this):null
if(!J.J(y,this.x)){x=this.x
this.x=y
w=new D.D("matrix",x,y,this,[V.ah])
w.b=!0
this.aa(w)}z=this.f
if(z!=null)z.av(a)
for(z=this.y.a,z=new J.at(z,z.length,0,[H.t(z,0)]);z.D();)z.d.av(a)},
b0:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.ga2())
else C.a.h(z.a,y.t(0,z.ga2()))
z.aP()
a.eR(this.f)
z=a.dy
x=(z&&C.a).gaG(z)
if(x!=null&&this.d!=null)x.ki(a,this)
for(z=this.y.a,z=new J.at(z,z.length,0,[H.t(z,0)]);z.D();)z.d.b0(a)
a.eP()
a.dx.cW()},
gB:function(){var z=this.z
if(z==null){z=D.L()
this.z=z}return z},
aa:function(a){var z=this.z
if(!(z==null))z.J(a)},
a4:function(){return this.aa(null)},
jZ:[function(a){H.d(a,"$isy")
this.e=null
this.aa(a)},function(){return this.jZ(null)},"lh","$1","$0","geK",0,2,1],
k_:[function(a){this.aa(H.d(a,"$isy"))},function(){return this.k_(null)},"li","$1","$0","geL",0,2,1],
jY:[function(a){this.aa(H.d(a,"$isy"))},function(){return this.jY(null)},"lg","$1","$0","geJ",0,2,1],
jW:[function(a){this.aa(H.d(a,"$isy"))},function(){return this.jW(null)},"le","$1","$0","geI",0,2,1],
ld:[function(a,b){var z,y,x,w,v,u,t
H.k(b,"$isp",[E.au],"$asp")
for(z=b.length,y=this.geI(),x={func:1,ret:-1,args:[D.y]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.gak()==null){t=new D.bx()
t.sal(null)
t.sb7(null)
t.c=null
t.d=0
u.sak(t)}t=u.gak()
t.toString
H.l(y,x)
if(t.a==null)t.sal(H.c([],w))
t=t.a;(t&&C.a).h(t,y)}}this.a4()},"$2","gjV",8,0,9],
lf:[function(a,b){var z,y
H.k(b,"$isp",[E.au],"$asp")
for(z=b.gV(b),y=this.geI();z.D();)z.gK().gB().M(0,y)
this.a4()},"$2","gjX",8,0,9],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaK:1,
n:{
d_:function(a,b,c,d,e,f){var z=new E.au()
z.a=d
z.b=!0
z.sfG(0,O.cX(E.au))
z.y.bu(z.gjV(),z.gjX())
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
z.sbn(f)
z.saM(c)
return z}}},jL:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
sit:function(a){this.dy=H.k(a,"$isb",[O.c5],"$asb")},
sio:function(a){this.fr=H.k(a,"$isH",[P.h,A.de],"$asH")},
fB:function(a,b){var z,y
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
z=new O.d8()
y=[V.ah]
z.scc(H.c([],y))
z.b=null
z.gB().h(0,new E.jN(this))
this.cy=z
z=new O.d8()
z.scc(H.c([],y))
z.b=null
z.gB().h(0,new E.jO(this))
this.db=z
z=new O.d8()
z.scc(H.c([],y))
z.b=null
z.gB().h(0,new E.jP(this))
this.dx=z
this.sit(H.c([],[O.c5]))
z=this.dy;(z&&C.a).h(z,null)
this.sio(new H.aY(0,0,[P.h,A.de]))},
gkd:function(){var z=this.z
if(z==null){z=this.cy.ga2().t(0,this.db.ga2())
this.z=z}return z},
eR:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaG(z):a;(z&&C.a).h(z,y)},
eP:function(){var z=this.dy
if(z.length>1)z.pop()},
n:{
jM:function(a,b){var z=new E.jL(a,b)
z.fB(a,b)
return z}}},jN:{"^":"n:8;a",
$1:function(a){var z
H.d(a,"$isy")
z=this.a
z.z=null
z.ch=null}},jO:{"^":"n:8;a",
$1:function(a){var z
H.d(a,"$isy")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jP:{"^":"n:8;a",
$1:function(a){var z
H.d(a,"$isy")
z=this.a
z.ch=null
z.cx=null}},kd:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0ak:x<,0y,0z,0Q,0ch,0cx,0cy",
sak:function(a){this.x=H.d(a,"$isbx")},
fI:[function(a){H.d(a,"$isy")
this.kl()},function(){return this.fI(null)},"fH","$1","$0","gdf",0,2,1],
gjI:function(){var z,y,x
z=Date.now()
y=C.h.a6(P.en(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.am(z,!1)
return x/y},
dM:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.t()
if(typeof z!=="number")return H.A(z)
x=C.j.ev(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.t()
w=C.j.ev(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.fd(C.y,this.gkk())}},
kl:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.kf(this),{func:1,ret:-1,args:[P.ak]})
C.O.hd(z)
C.O.i9(z,W.hd(y,P.ak))}},"$0","gkk",0,0,3],
kh:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dM()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.am(w,!1)
x.y=P.en(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sp(w.a,0)
w.aP()
w=x.db
C.a.sp(w.a,0)
w.aP()
w=x.dx
C.a.sp(w.a,0)
w.aP()
w=x.dy;(w&&C.a).sp(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.b0(this.e)}x=this.z
if(!(x==null))x.J(null)}catch(v){z=H.a6(v)
y=H.bp(v)
P.dV("Error: "+H.i(z))
P.dV("Stack: "+H.i(y))
throw H.e(z)}},
n:{
ke:function(a,b,c,d,e){var z,y,x,w
z=J.P(a)
if(!!z.$iscW)return E.fc(a,!0,!0,!0,!1)
y=W.eb(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcC(a).h(0,y)
w=E.fc(y,!0,!0,!0,!1)
w.a=a
return w},
fc:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.kd()
y=P.iT(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.h,null)
x=C.q.d6(a,"webgl",y)
x=H.d(x==null?C.q.d6(a,"experimental-webgl",y):x,"$isdd")
if(x==null)H.r(P.u("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.jM(x,a)
w=new T.kc(x)
w.b=H.ab((x&&C.c).d8(x,3379))
w.c=H.ab(C.c.d8(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.kG(a)
v=new X.iK()
v.c=new X.aD(!1,!1,!1)
v.si_(P.c0(null,null,null,P.m))
w.b=v
v=new X.je(w)
v.f=0
v.r=V.aZ()
v.x=V.aZ()
v.Q=1
v.ch=1
w.c=v
v=new X.j_(w)
v.r=0
v.x=V.aZ()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.ki(w)
v.e=0
v.f=V.aZ()
v.r=V.aZ()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.she(H.c([],[[P.di,P.a]]))
v=w.z
u=document
t=W.aw
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.a1(u,"contextmenu",H.l(w.ghF(),s),!1,t))
v=w.z
r=W.ac
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a1(a,"focus",H.l(w.ghI(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a1(a,"blur",H.l(w.ghC(),q),!1,r))
v=w.z
p=W.bA
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a1(u,"keyup",H.l(w.ghK(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a1(u,"keydown",H.l(w.ghJ(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a1(a,"mousedown",H.l(w.ghN(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a1(a,"mouseup",H.l(w.ghP(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a1(a,"mousemove",H.l(w.ghO(),s),!1,t))
p=w.z
o=W.bI;(p&&C.a).h(p,W.a1(a,H.C(W.id(a)),H.l(w.ghQ(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a1(u,"mousemove",H.l(w.ghG(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a1(u,"mouseup",H.l(w.ghH(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a1(u,"pointerlockchange",H.l(w.ghR(),q),!1,r))
r=w.z
q=W.be
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a1(a,"touchstart",H.l(w.ghY(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a1(a,"touchend",H.l(w.ghW(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a1(a,"touchmove",H.l(w.ghX(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.am(Date.now(),!1)
z.cy=0
z.dM()
return z}}},kf:{"^":"n:32;a",
$1:function(a){var z
H.ne(a)
z=this.a
if(z.ch){z.ch=!1
z.kh()}}}}],["","",,Z,{"^":"",fH:{"^":"a;a,b",$isnq:1,n:{
dA:function(a,b,c){var z
H.k(c,"$isb",[P.m],"$asb")
z=a.createBuffer()
C.c.aC(a,b,z)
C.c.e3(a,b,new Int16Array(H.bi(c)),35044)
C.c.aC(a,b,null)
return new Z.fH(b,z)}}},e7:{"^":"cT;a,b,c,d,e",
bB:function(a){var z,y,x
try{y=a.a
C.c.e7(y,this.e)
C.c.kw(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.a6(x)
y=P.u('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.i(z))
throw H.e(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.i(this.e)+"]"}},l2:{"^":"a;a",$isnr:1},e8:{"^":"a;a,0b,c,d",
shm:function(a){this.b=H.k(a,"$isb",[Z.bX],"$asb")},
aY:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bB:function(a){var z,y
z=this.a
C.c.aC(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bB(a)},
f_:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.c.e5(x,z[y].e)
C.c.aC(x,this.a.a,null)},
b0:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.f(w,x)
v=w[x]
w=v.c
u=w.a
C.c.aC(y,u,w.b)
C.c.jy(y,v.a,v.b,5123,0)
C.c.aC(y,u,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.h]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.af(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(y,", ")+"\nAttrs:   "+C.a.k(u,", ")},
$isnJ:1},bX:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.ba(this.c)+"'")+"]"}},bf:{"^":"a;a",
gdd:function(a){var z,y
z=this.a
y=(z&$.$get$aQ().a)!==0?3:0
if((z&$.$get$aP().a)!==0)y+=3
if((z&$.$get$aO().a)!==0)y+=3
if((z&$.$get$aR().a)!==0)y+=2
if((z&$.$get$aS().a)!==0)y+=3
if((z&$.$get$bG().a)!==0)y+=3
if((z&$.$get$bH().a)!==0)y+=4
if((z&$.$get$bg().a)!==0)++y
return(z&$.$get$aN().a)!==0?y+4:y},
j7:function(a){var z,y,x
z=$.$get$aQ()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aP()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aO()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bG()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bH()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bg()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aN()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fG()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bf))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.h])
y=this.a
if((y&$.$get$aQ().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aP().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aO().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aR().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aS().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bG().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bH().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$bg().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aN().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.k(z,"|")},
n:{
ap:function(a){return new Z.bf(a)}}}}],["","",,D,{"^":"",ec:{"^":"a;"},bx:{"^":"a;0a,0b,0c,0d",
sal:function(a){this.a=H.k(a,"$isb",[{func:1,ret:-1,args:[D.y]}],"$asb")},
sb7:function(a){this.b=H.k(a,"$isb",[{func:1,ret:-1,args:[D.y]}],"$asb")},
h:function(a,b){var z={func:1,ret:-1,args:[D.y]}
H.l(b,z)
if(this.a==null)this.sal(H.c([],[z]))
z=this.a;(z&&C.a).h(z,b)},
M:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.y]})
z=this.a
z=z==null?null:C.a.a_(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).M(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.a_(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).M(z,b)||y}return y},
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
if(a==null){a=new D.y(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.a0(y,new D.ii(z))
y=this.b
if(!(y==null))C.a.a0(y,new D.ij(z))
z=this.b
if(!(z==null))C.a.sp(z,0)
return!0},
km:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.J(y)}}},
ag:function(){return this.km(!0,!1)},
n:{
L:function(){var z=new D.bx()
z.sal(null)
z.sb7(null)
z.c=null
z.d=0
return z}}},ii:{"^":"n:22;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.y]})
z=this.a.a
z.b
a.$1(z)}},ij:{"^":"n:22;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.y]})
z=this.a.a
z.b
a.$1(z)}},y:{"^":"a;a,0b"},cn:{"^":"y;c,d,a,0b,$ti"},co:{"^":"y;c,d,a,0b,$ti"},D:{"^":"y;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}}],["","",,X,{"^":"",e9:{"^":"a;a,b",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.e9))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}},ex:{"^":"a;a,b",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ex))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}},iK:{"^":"a;0a,0b,0c,0d",
si_:function(a){this.d=H.k(a,"$isf_",[P.m],"$asf_")},
k9:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
k5:function(a){this.c=a.b
this.d.M(0,a.a)
return!1}},eB:{"^":"cv;x,y,c,d,e,a,0b"},j_:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
b6:function(a,b){var z,y,x,w,v,u,t,s
z=new P.am(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.t()
v=b.b
u=this.ch
if(typeof v!=="number")return v.t()
t=new V.ad(y.a+x*w,y.b+v*u)
u=this.a.gaX()
s=new X.bC(a,V.aZ(),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cV:function(a,b){this.r=a.a
return!1},
bl:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.fj()
if(typeof z!=="number")return z.bZ()
this.r=(z&~y)>>>0
return!1},
bk:function(a,b){var z=this.d
if(z==null)return!1
z.J(this.b6(a,b))
return!0},
ka:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaX()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.t()
t=a.b
s=this.cy
if(typeof t!=="number")return t.t()
w=new X.da(new V.T(v*u,t*s),y,x,new P.am(w,!1),this)
w.b=!0
z.J(w)
return!0},
hM:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.am(Date.now(),!1)
y=this.f
x=new X.eB(c,a,this.a.gaX(),b,z,this)
x.b=!0
y.J(x)
this.y=z
this.x=V.aZ()}},aD:{"^":"a;a,b,c",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aD))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},bC:{"^":"cv;x,y,z,Q,ch,c,d,e,a,0b"},je:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
c9:function(a,b,c){var z,y,x
z=new P.am(Date.now(),!1)
y=this.a.gaX()
x=new X.bC(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cV:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.J(this.c9(a,b,!0))
return!0},
bl:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.fj()
if(typeof z!=="number")return z.bZ()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.J(this.c9(a,b,!0))
return!0},
bk:function(a,b){var z=this.d
if(z==null)return!1
z.J(this.c9(a,b,!1))
return!0},
kb:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaX()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.t()
u=a.b
t=this.ch
if(typeof u!=="number")return u.t()
x=new X.da(new V.T(w*v,u*t),y,b,new P.am(x,!1),this)
x.b=!0
z.J(x)
return!0},
ge6:function(){var z=this.b
if(z==null){z=D.L()
this.b=z}return z},
gbY:function(){var z=this.c
if(z==null){z=D.L()
this.c=z}return z},
geG:function(){var z=this.d
if(z==null){z=D.L()
this.d=z}return z}},da:{"^":"cv;x,c,d,e,a,0b"},cv:{"^":"y;"},fg:{"^":"cv;x,y,z,Q,ch,c,d,e,a,0b"},ki:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
b6:function(a,b){var z,y,x,w
H.k(a,"$isb",[V.ad],"$asb")
z=new P.am(Date.now(),!1)
y=a.length>0?a[0]:V.aZ()
x=this.a.gaX()
w=new X.fg(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
k8:function(a){var z
H.k(a,"$isb",[V.ad],"$asb")
z=this.b
if(z==null)return!1
z.J(this.b6(a,!0))
return!0},
k6:function(a){var z
H.k(a,"$isb",[V.ad],"$asb")
z=this.c
if(z==null)return!1
z.J(this.b6(a,!0))
return!0},
k7:function(a){var z
H.k(a,"$isb",[V.ad],"$asb")
z=this.d
if(z==null)return!1
z.J(this.b6(a,!1))
return!0}},kG:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
she:function(a){this.z=H.k(a,"$isb",[[P.di,P.a]],"$asb")},
gaX:function(){var z=this.a
return V.eW(0,0,C.q.ge4(z).c,C.q.ge4(z).d)},
du:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.ex(z,new X.aD(y,a.altKey,a.shiftKey))},
aU:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aD(y,a.altKey,a.shiftKey)},
cr:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aD(y,a.altKey,a.shiftKey)},
aJ:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.N()
v=z.top
if(typeof x!=="number")return x.N()
return new V.ad(y-w,x-v)},
b8:function(a){return new V.T(a.movementX,a.movementY)},
cl:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.ad])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
t=C.j.au(u.pageX)
C.j.au(u.pageY)
s=z.left
C.j.au(u.pageX)
C.a.h(y,new V.ad(t-s,C.j.au(u.pageY)-z.top))}return y},
aH:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.e9(z,new X.aD(y,a.altKey,a.shiftKey))},
cd:function(a){var z,y,x,w,v,u
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
kQ:[function(a){this.f=!0},"$1","ghI",4,0,12],
kK:[function(a){this.f=!1},"$1","ghC",4,0,12],
kN:[function(a){H.d(a,"$isaw")
if(this.f&&this.cd(a))a.preventDefault()},"$1","ghF",4,0,4],
kS:[function(a){var z
H.d(a,"$isbA")
if(!this.f)return
z=this.du(a)
this.b.k9(z)},"$1","ghK",4,0,27],
kR:[function(a){var z
H.d(a,"$isbA")
if(!this.f)return
z=this.du(a)
this.b.k5(z)},"$1","ghJ",4,0,27],
kU:[function(a){var z,y,x,w
H.d(a,"$isaw")
z=this.a
z.focus()
this.f=!0
this.aU(a)
if(this.x){y=this.aH(a)
x=this.b8(a)
if(this.d.cV(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aH(a)
w=this.aJ(a)
if(this.c.cV(y,w))a.preventDefault()},"$1","ghN",4,0,4],
kW:[function(a){var z,y,x
H.d(a,"$isaw")
this.aU(a)
z=this.aH(a)
if(this.x){y=this.b8(a)
if(this.d.bl(z,y))a.preventDefault()
return}if(this.r)return
x=this.aJ(a)
if(this.c.bl(z,x))a.preventDefault()},"$1","ghP",4,0,4],
kP:[function(a){var z,y,x
H.d(a,"$isaw")
if(!this.cd(a)){this.aU(a)
z=this.aH(a)
if(this.x){y=this.b8(a)
if(this.d.bl(z,y))a.preventDefault()
return}if(this.r)return
x=this.aJ(a)
if(this.c.bl(z,x))a.preventDefault()}},"$1","ghH",4,0,4],
kV:[function(a){var z,y,x
H.d(a,"$isaw")
this.aU(a)
z=this.aH(a)
if(this.x){y=this.b8(a)
if(this.d.bk(z,y))a.preventDefault()
return}if(this.r)return
x=this.aJ(a)
if(this.c.bk(z,x))a.preventDefault()},"$1","ghO",4,0,4],
kO:[function(a){var z,y,x
H.d(a,"$isaw")
if(!this.cd(a)){this.aU(a)
z=this.aH(a)
if(this.x){y=this.b8(a)
if(this.d.bk(z,y))a.preventDefault()
return}if(this.r)return
x=this.aJ(a)
if(this.c.bk(z,x))a.preventDefault()}},"$1","ghG",4,0,4],
kX:[function(a){var z,y
H.d(a,"$isbI")
this.aU(a)
z=new V.T((a&&C.N).gjt(a),C.N.gju(a)).A(0,180)
if(this.x){if(this.d.ka(z))a.preventDefault()
return}if(this.r)return
y=this.aJ(a)
if(this.c.kb(z,y))a.preventDefault()},"$1","ghQ",4,0,37],
kY:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.aH(this.y)
x=this.aJ(this.y)
this.d.hM(y,x,z)}},"$1","ghR",4,0,12],
l3:[function(a){var z
H.d(a,"$isbe")
this.a.focus()
this.f=!0
this.cr(a)
z=this.cl(a)
if(this.e.k8(z))a.preventDefault()},"$1","ghY",4,0,11],
l1:[function(a){var z
H.d(a,"$isbe")
this.cr(a)
z=this.cl(a)
if(this.e.k6(z))a.preventDefault()},"$1","ghW",4,0,11],
l2:[function(a){var z
H.d(a,"$isbe")
this.cr(a)
z=this.cl(a)
if(this.e.k7(z))a.preventDefault()},"$1","ghX",4,0,11]}}],["","",,D,{"^":"",em:{"^":"a;",$isa3:1,$isaK:1},a3:{"^":"a;",$isaK:1},iM:{"^":"a_;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
sfL:function(a){this.e=H.k(a,"$isb",[D.em],"$asb")},
sfN:function(a){this.f=H.k(a,"$isb",[D.cu],"$asb")},
sfO:function(a){this.r=H.k(a,"$isb",[D.f1],"$asb")},
sfP:function(a){this.x=H.k(a,"$isb",[D.f9],"$asb")},
sfQ:function(a){this.y=H.k(a,"$isb",[D.fa],"$asb")},
sfR:function(a){this.z=H.k(a,"$isb",[D.fb],"$asb")},
gB:function(){var z=this.Q
if(z==null){z=D.L()
this.Q=z}return z},
ai:function(a){var z=this.Q
if(!(z==null))z.J(a)},
hL:[function(a){var z
H.d(a,"$isy")
z=this.ch
if(!(z==null))z.J(a)},function(){return this.hL(null)},"kT","$1","$0","gdI",0,2,1],
kZ:[function(a){var z,y,x
H.k(a,"$isp",[D.a3],"$asp")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.z)(a),++y){x=a[y]
if(x==null||this.fK(x))return!1}return!0},"$1","ghT",4,0,39],
kH:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a3
H.k(b,"$isp",[z],"$asp")
for(y=b.length,x=this.gdI(),w={func:1,ret:-1,args:[D.y]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=H.d(b[u],"$isa3")
if(t instanceof D.cu)C.a.h(this.f,t)
s=t.r
if(s==null){s=new D.bx()
s.sal(null)
s.sb7(null)
s.c=null
s.d=0
t.r=s}H.l(x,w)
if(s.a==null)s.sal(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}z=new D.cn(a,b,this,[z])
z.b=!0
this.ai(z)},"$2","ghz",8,0,17],
l0:[function(a,b){var z,y,x,w
z=D.a3
H.k(b,"$isp",[z],"$asp")
for(y=b.gV(b),x=this.gdI();y.D();){w=y.gK()
C.a.M(this.e,w)
w.gB().M(0,x)}z=new D.co(a,b,this,[z])
z.b=!0
this.ai(z)},"$2","ghV",8,0,17],
fK:function(a){var z=C.a.a_(this.f,a)
return z},
$asp:function(){return[D.a3]},
$asa_:function(){return[D.a3]}},cu:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gB:function(){var z=this.r
if(z==null){z=D.L()
this.r=z}return z},
ai:[function(a){var z
H.d(a,"$isy")
z=this.r
if(!(z==null))z.J(a)},function(){return this.ai(null)},"kz","$1","$0","gfM",0,2,1],
$isa3:1,
$isaK:1},f1:{"^":"a;",$isa3:1,$isaK:1},f9:{"^":"a;",$isa3:1,$isaK:1},fa:{"^":"a;",$isa3:1,$isaK:1},fb:{"^":"a;",$isa3:1,$isaK:1}}],["","",,V,{"^":"",
nt:[function(a,b){if(typeof b!=="number")return b.N()
if(typeof a!=="number")return H.A(a)
return Math.abs(b-a)<=1e-9},"$2","jd",8,0,36],
cO:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.j.bt(a-b,z)
return(a<0?a+z:a)+b},
G:function(a,b,c){if(a==null)return C.b.af("null",c)
return C.b.af(C.j.eX($.o.$2(a,0)?0:a,b),c+b+1)},
bn:function(a,b,c){var z,y,x,w,v,u
H.k(a,"$isb",[P.q],"$asb")
z=H.c([],[P.h])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.z)(a),++w){v=V.G(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.f(z,u)
C.a.q(z,u,C.b.af(z[u],x))}return z},
a7:{"^":"a;a,b,c",
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}},
bu:{"^":"a;a,b,c,d",
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bu))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+", "+V.G(this.d,3,0)+"]"}},
eF:{"^":"a;a,b,c,d,e,f,r,x,y",
ah:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.q])
return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eF))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
z=b.e
if(!$.o.$2(z,this.e))return!1
z=b.f
if(!$.o.$2(z,this.f))return!1
z=b.r
if(!$.o.$2(z,this.r))return!1
z=b.x
if(!$.o.$2(z,this.x))return!1
z=b.y
if(!$.o.$2(z,this.y))return!1
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
ah:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
ah:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.q])
return z},
eE:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.o.$2(a2,0))return V.b8()
a3=1/a2
a4=-w
a5=-i
return V.aC((y*a1-u*a0+r*a)*a3,(-x*a1+t*a0-q*a)*a3,(k*m-g*n+d*o)*a3,(-j*m+f*n-c*o)*a3,(a4*a1+u*b-r*e)*a3,(z*a1-t*b+q*e)*a3,(a5*m+g*p-d*s)*a3,(l*m-f*p+c*s)*a3,(w*a0-y*b+r*h)*a3,(-z*a0+x*b-q*h)*a3,(i*n-k*p+d*v)*a3,(-l*n+j*p-c*v)*a3,(a4*a+y*e-u*h)*a3,(z*a-x*e+t*h)*a3,(a5*o+k*s-g*v)*a3,(l*o-j*s+f*v)*a3)},
t:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.d(a7,"$isah")
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
return V.aC(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
eZ:function(a){return new V.E(C.j.t(this.a,a.gaq(a))+C.j.t(this.b,a.gar(a))+C.j.t(this.c,a.gas()),C.j.t(this.e,a.gaq(a))+C.j.t(this.f,a.gar(a))+C.j.t(this.r,a.gas()),C.j.t(this.y,a.gaq(a))+C.j.t(this.z,a.gar(a))+C.j.t(this.Q,a.gas()))},
b2:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.Y(this.a*z+this.b*y+this.c*x+this.d,this.e*z+this.f*y+this.r*x+this.x,this.y*z+this.z*y+this.Q*x+this.ch)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ah))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
z=b.e
if(!$.o.$2(z,this.e))return!1
z=b.f
if(!$.o.$2(z,this.f))return!1
z=b.r
if(!$.o.$2(z,this.r))return!1
z=b.x
if(!$.o.$2(z,this.x))return!1
z=b.y
if(!$.o.$2(z,this.y))return!1
z=b.z
if(!$.o.$2(z,this.z))return!1
z=b.Q
if(!$.o.$2(z,this.Q))return!1
z=b.ch
if(!$.o.$2(z,this.ch))return!1
z=b.cx
if(!$.o.$2(z,this.cx))return!1
z=b.cy
if(!$.o.$2(z,this.cy))return!1
z=b.db
if(!$.o.$2(z,this.db))return!1
z=b.dx
if(!$.o.$2(z,this.dx))return!1
return!0},
i:function(a){return this.P()},
ew:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
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
P:function(){return this.ew("",3,0)},
F:function(a){return this.ew(a,3,0)},
n:{
b8:function(){var z=$.eK
if(z==null){z=V.aC(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.eK=z}return z},
aC:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ah(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
eJ:function(a,b,c){return V.aC(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
d9:function(a,b,c,d){return V.aC(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
eG:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aC(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
eH:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aC(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
eI:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aC(z,-y,0,0,y,z,0,0,0,0,1,0,0,0,0,1)}}},
ad:{"^":"a;a,b",
N:function(a,b){return new V.ad(this.a-b.a,this.b-b.b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ad))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"},
n:{
aZ:function(){var z=$.eR
if(z==null){z=new V.ad(0,0)
$.eR=z}return z}}},
Y:{"^":"a;a,b,c",
G:function(a,b){return new V.Y(this.a+b.a,this.b+b.b,this.c+b.c)},
N:function(a,b){return new V.Y(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){return new V.Y(this.a*b,this.b*b,this.c*b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"},
n:{
eS:function(){var z=$.b_
if(z==null){z=new V.Y(0,0,0)
$.b_=z}return z}}},
c2:{"^":"a;a,b,c,d",
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c2))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+", "+V.G(this.d,3,0)+"]"}},
eV:{"^":"a;a,b,c,d",
ga9:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eV))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
z=b.d
if(!$.o.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+", "+V.G(this.d,3,0)+"]"},
n:{
eW:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eV(a,b,c,d)}}},
T:{"^":"a;a,b",
jP:[function(a){return Math.sqrt(this.H(this))},"$0","gp",1,0,16],
H:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.t()
if(typeof y!=="number")return H.A(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.t()
if(typeof w!=="number")return H.A(w)
return z*y+x*w},
t:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.t()
y=this.b
if(typeof y!=="number")return y.t()
return new V.T(z*b,y*b)},
A:function(a,b){var z,y
if($.o.$2(b,0)){z=$.fy
if(z==null){z=new V.T(0,0)
$.fy=z}return z}z=this.a
if(typeof z!=="number")return z.A()
y=this.b
if(typeof y!=="number")return y.A()
return new V.T(z/b,y/b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}},
E:{"^":"a;a,b,c",
jP:[function(a){return Math.sqrt(this.H(this))},"$0","gp",1,0,16],
H:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cR:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.E(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aL:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.E(z*y-x*w,x*v-u*y,u*w-z*v)},
G:function(a,b){return new V.E(this.a+b.a,this.b+b.b,this.c+b.c)},
U:function(a){return new V.E(-this.a,-this.b,-this.c)},
t:function(a,b){return new V.E(this.a*b,this.b*b,this.c*b)},
A:function(a,b){if($.o.$2(b,0))return V.bF()
return new V.E(this.a/b,this.b/b,this.c/b)},
eF:function(){if(!$.o.$2(0,this.a))return!1
if(!$.o.$2(0,this.b))return!1
if(!$.o.$2(0,this.c))return!1
return!0},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.E))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"},
n:{
bF:function(){var z=$.fD
if(z==null){z=new V.E(0,0,0)
$.fD=z}return z}}}}],["","",,U,{"^":"",hW:{"^":"ec;0a,0b,0c,0d,0e,0f,0r,0x,0y",
c5:function(a){var z=V.cO(a,this.c,this.b)
return z},
gB:function(){var z=this.y
if(z==null){z=D.L()
this.y=z}return z},
L:function(a){var z=this.y
if(!(z==null))z.J(a)},
sd5:function(a,b){},
scS:function(a){var z,y
z=this.b
if(!$.o.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.c5(z)}z=new D.D("maximumLocation",y,this.b,this,[P.q])
z.b=!0
this.L(z)}},
scU:function(a){var z,y
z=this.c
if(!$.o.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.c5(z)}z=new D.D("minimumLocation",y,this.c,this,[P.q])
z.b=!0
this.L(z)}},
sa3:function(a,b){var z,y
b=this.c5(b)
z=this.d
if(!$.o.$2(z,b)){y=this.d
this.d=b
z=new D.D("location",y,b,this,[P.q])
z.b=!0
this.L(z)}},
scT:function(a){var z,y,x
z=this.e
if(!$.o.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.D("maximumVelocity",y,a,this,[P.q])
z.b=!0
this.L(z)}},
sX:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.o.$2(z,a)){x=this.f
this.f=a
z=new D.D("velocity",x,a,this,[P.q])
z.b=!0
this.L(z)}},
scF:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.o.$2(z,a)){y=this.x
this.x=a
z=new D.D("dampening",y,a,this,[P.q])
z.b=!0
this.L(z)}},
av:function(a){var z,y,x,w
z=this.f
if($.o.$2(z,0)){z=this.r
z=!$.o.$2(z,0)}else z=!0
if(z){y=this.f+this.r*a
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa3(0,this.d+y*a)
z=this.x
if(!$.o.$2(z,0)){w=y*Math.pow(1-this.x,a)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sX(y)}},
n:{
cY:function(){var z=new U.hW()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},ee:{"^":"aa;0a,0b",
gB:function(){var z=this.b
if(z==null){z=D.L()
this.b=z}return z},
aw:function(a,b){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ee))return!1
return J.J(this.a,b.a)},
i:function(a){return"Constant: "+this.a.F("          ")},
n:{
bU:function(a){var z=new U.ee()
if(a==null)a=V.b8()
if(null!=a)z.a=a
return z}}},es:{"^":"a_;0e,0f,0r,0a,0b,0c,0d",
gB:function(){var z=this.e
if(z==null){z=D.L()
this.e=z}return z},
L:[function(a){var z
H.d(a,"$isy")
z=this.e
if(!(z==null))z.J(a)},function(){return this.L(null)},"am","$1","$0","gaT",0,2,1],
kA:[function(a,b){var z,y,x,w,v,u,t,s
z=U.aa
H.k(b,"$isp",[z],"$asp")
for(y=b.length,x=this.gaT(),w={func:1,ret:-1,args:[D.y]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){s=t.gB()
s.toString
H.l(x,w)
if(s.a==null)s.sal(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.cn(a,b,this,[z])
z.b=!0
this.L(z)},"$2","gfS",8,0,15],
l_:[function(a,b){var z,y,x
z=U.aa
H.k(b,"$isp",[z],"$asp")
for(y=b.gV(b),x=this.gaT();y.D();)y.gK().gB().M(0,x)
z=new D.co(a,b,this,[z])
z.b=!0
this.L(z)},"$2","ghU",8,0,15],
aw:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(typeof z!=="number")return z.T()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.at(z,z.length,0,[H.t(z,0)]),x=null;z.D();){y=z.d
if(y!=null){w=y.aw(a,b)
if(w!=null)x=x==null?w:w.t(0,x)}}this.f=x==null?V.b8():x
z=this.e
if(!(z==null))z.ag()}return this.f},
v:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.es))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.f(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.f(w,y)
if(!J.J(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asp:function(){return[U.aa]},
$asa_:function(){return[U.aa]},
$isaa:1,
n:{
d0:function(a){var z=new U.es()
z.c3(U.aa)
z.bu(z.gfS(),z.ghU())
z.e=null
z.f=V.b8()
z.r=0
return z}}},aa:{"^":"ec;"},eY:{"^":"aa;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gB:function(){var z=this.y
if(z==null){z=D.L()
this.y=z}return z},
L:function(a){var z=this.y
if(!(z==null))z.J(a)},
sf7:function(a){var z,y
a=V.cO(a,0,6.283185307179586)
z=this.a
if(!$.o.$2(z,a)){y=this.a
this.a=a
z=new D.D("yaw",y,a,this,[P.q])
z.b=!0
this.L(z)}},
seO:function(a){var z,y
a=V.cO(a,0,6.283185307179586)
z=this.b
if(!$.o.$2(z,a)){y=this.b
this.b=a
z=new D.D("pitch",y,a,this,[P.q])
z.b=!0
this.L(z)}},
seT:function(a){var z,y
a=V.cO(a,0,6.283185307179586)
z=this.c
if(!$.o.$2(z,a)){y=this.c
this.c=a
z=new D.D("roll",y,a,this,[P.q])
z.b=!0
this.L(z)}},
aw:function(a,b){var z,y
z=this.r
y=a.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.d
this.sf7(this.a+this.d*a.y)
this.seO(this.b+this.e*a.y)
this.seT(this.c+this.f*a.y)
this.x=V.eI(this.c).t(0,V.eH(this.b)).t(0,V.eG(this.a))
z=this.y
if(!(z==null))z.ag()}return this.x},
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eY))return!1
z=this.a
y=b.a
if(!$.o.$2(z,y))return!1
z=this.b
y=b.b
if(!$.o.$2(z,y))return!1
z=this.c
y=b.c
if(!$.o.$2(z,y))return!1
z=this.d
y=b.d
if(!$.o.$2(z,y))return!1
z=this.e
y=b.e
if(!$.o.$2(z,y))return!1
z=this.f
y=b.f
if(!$.o.$2(z,y))return!1
return!0},
i:function(a){return"Rotater: ["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"], ["+V.G(this.d,3,0)+", "+V.G(this.e,3,0)+", "+V.G(this.f,3,0)+"]"}},kH:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gB:function(){var z=this.cy
if(z==null){z=D.L()
this.cy=z}return z},
L:[function(a){var z
H.d(a,"$isy")
z=this.cy
if(!(z==null))z.J(a)},function(){return this.L(null)},"am","$1","$0","gaT",0,2,1],
bb:function(a){if(this.a!=null)return!1
this.a=a
a.c.ge6().h(0,this.gce())
this.a.c.geG().h(0,this.gcf())
this.a.c.gbY().h(0,this.gcg())
return!0},
hu:[function(a){H.d(a,"$isy")
if(!J.J(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gce",4,0,2],
hv:[function(a){var z,y,x,w,v,u,t
a=H.j(H.d(a,"$isy"),"$isbC")
if(!this.y)return
if(this.x){z=a.d.N(0,a.y)
z=new V.T(z.a,z.b)
z=z.H(z)
y=this.r
if(typeof y!=="number")return H.A(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.N(0,a.y)
z=new V.T(y.a,y.b).t(0,2).A(0,z.ga9())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.t()
x=this.e
if(typeof x!=="number")return H.A(x)
y.sX(z*10*x)}else{z=a.c
y=a.d
x=y.N(0,a.y)
w=new V.T(x.a,x.b).t(0,2).A(0,z.ga9())
x=this.b
v=w.a
if(typeof v!=="number")return v.U()
u=this.e
if(typeof u!=="number")return H.A(u)
t=this.z
if(typeof t!=="number")return H.A(t)
x.sa3(0,-v*u+t)
this.b.sX(0)
y=y.N(0,a.z)
this.Q=new V.T(y.a,y.b).t(0,2).A(0,z.ga9())}this.am()},"$1","gcf",4,0,2],
hw:[function(a){var z,y,x
H.d(a,"$isy")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.H(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.t()
x=this.e
if(typeof x!=="number")return H.A(x)
z.sX(y*10*x)
this.am()}},"$1","gcg",4,0,2],
aw:function(a,b){var z,y,x
z=this.ch
y=a.e
if(typeof z!=="number")return z.T()
if(z<y){this.ch=y
x=a.y
this.b.av(x)
this.cx=V.eI(this.b.d)}return this.cx},
$isaa:1},kI:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gB:function(){var z=this.fx
if(z==null){z=D.L()
this.fx=z}return z},
L:[function(a){var z
H.d(a,"$isy")
z=this.fx
if(!(z==null))z.J(a)},function(){return this.L(null)},"am","$1","$0","gaT",0,2,1],
bb:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.ge6().h(0,this.gce())
this.a.c.geG().h(0,this.gcf())
this.a.c.gbY().h(0,this.gcg())
z=this.a.d
y=z.f
if(y==null){y=D.L()
z.f=y
z=y}else z=y
z.h(0,this.ghs())
z=this.a.d
y=z.d
if(y==null){y=D.L()
z.d=y
z=y}else z=y
z.h(0,this.ght())
z=this.a.e
y=z.b
if(y==null){y=D.L()
z.b=y
z=y}else z=y
z.h(0,this.gix())
z=this.a.e
y=z.d
if(y==null){y=D.L()
z.d=y
z=y}else z=y
z.h(0,this.giw())
z=this.a.e
y=z.c
if(y==null){y=D.L()
z.c=y
z=y}else z=y
z.h(0,this.giv())
return!0},
aA:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.U()
z=-z}if(this.r){if(typeof y!=="number")return y.U()
y=-y}return new V.T(z,y)},
hu:[function(a){a=H.j(H.d(a,"$isy"),"$isbC")
if(!J.J(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gce",4,0,2],
hv:[function(a){var z,y,x,w,v,u,t
a=H.j(H.d(a,"$isy"),"$isbC")
if(!this.cx)return
if(this.ch){z=a.d.N(0,a.y)
z=new V.T(z.a,z.b)
z=z.H(z)
y=this.Q
if(typeof y!=="number")return H.A(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.N(0,a.y)
z=this.aA(new V.T(y.a,y.b).t(0,2).A(0,z.ga9()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.U()
x=this.y
if(typeof x!=="number")return H.A(x)
y.sX(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.U()
y=this.x
if(typeof y!=="number")return H.A(y)
x.sX(-z*10*y)}else{z=a.c
y=a.d
x=y.N(0,a.y)
w=this.aA(new V.T(x.a,x.b).t(0,2).A(0,z.ga9()))
x=this.c
v=w.a
if(typeof v!=="number")return v.U()
u=this.y
if(typeof u!=="number")return H.A(u)
t=this.cy
if(typeof t!=="number")return H.A(t)
x.sa3(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.U()
v=this.x
if(typeof v!=="number")return H.A(v)
x=this.db
if(typeof x!=="number")return H.A(x)
t.sa3(0,-u*v+x)
this.b.sX(0)
this.c.sX(0)
y=y.N(0,a.z)
this.dx=this.aA(new V.T(y.a,y.b).t(0,2).A(0,z.ga9()))}this.am()},"$1","gcf",4,0,2],
hw:[function(a){var z,y,x
H.d(a,"$isy")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.H(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.U()
x=this.y
if(typeof x!=="number")return H.A(x)
z.sX(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.U()
z=this.x
if(typeof z!=="number")return H.A(z)
x.sX(-y*10*z)
this.am()}},"$1","gcg",4,0,2],
kE:[function(a){if(H.j(H.d(a,"$isy"),"$iseB").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","ghs",4,0,2],
kF:[function(a){var z,y,x,w,v,u,t
a=H.j(H.d(a,"$isy"),"$isbC")
if(!J.J(this.d,a.x.b))return
z=a.c
y=a.d
x=y.N(0,a.y)
w=this.aA(new V.T(x.a,x.b).t(0,2).A(0,z.ga9()))
x=this.c
v=w.a
if(typeof v!=="number")return v.U()
u=this.y
if(typeof u!=="number")return H.A(u)
t=this.cy
if(typeof t!=="number")return H.A(t)
x.sa3(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.U()
v=this.x
if(typeof v!=="number")return H.A(v)
x=this.db
if(typeof x!=="number")return H.A(x)
t.sa3(0,-u*v+x)
this.b.sX(0)
this.c.sX(0)
y=y.N(0,a.z)
this.dx=this.aA(new V.T(y.a,y.b).t(0,2).A(0,z.ga9()))
this.am()},"$1","ght",4,0,2],
l7:[function(a){H.d(a,"$isy")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gix",4,0,2],
l6:[function(a){var z,y,x,w,v,u,t
a=H.j(H.d(a,"$isy"),"$isfg")
if(!this.cx)return
if(this.ch){z=a.d.N(0,a.y)
z=new V.T(z.a,z.b)
z=z.H(z)
y=this.Q
if(typeof y!=="number")return H.A(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.N(0,a.y)
z=this.aA(new V.T(y.a,y.b).t(0,2).A(0,z.ga9()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.U()
x=this.y
if(typeof x!=="number")return H.A(x)
y.sX(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.U()
y=this.x
if(typeof y!=="number")return H.A(y)
x.sX(-z*10*y)}else{z=a.c
y=a.d
x=y.N(0,a.y)
w=this.aA(new V.T(x.a,x.b).t(0,2).A(0,z.ga9()))
x=this.c
v=w.a
if(typeof v!=="number")return v.U()
u=this.y
if(typeof u!=="number")return H.A(u)
t=this.cy
if(typeof t!=="number")return H.A(t)
x.sa3(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.U()
v=this.x
if(typeof v!=="number")return H.A(v)
x=this.db
if(typeof x!=="number")return H.A(x)
t.sa3(0,-u*v+x)
this.b.sX(0)
this.c.sX(0)
y=y.N(0,a.z)
this.dx=this.aA(new V.T(y.a,y.b).t(0,2).A(0,z.ga9()))}this.am()},"$1","giw",4,0,2],
l5:[function(a){var z,y,x
H.d(a,"$isy")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.H(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.U()
x=this.y
if(typeof x!=="number")return H.A(x)
z.sX(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.U()
z=this.x
if(typeof z!=="number")return H.A(z)
x.sX(-y*10*z)
this.am()}},"$1","giv",4,0,2],
aw:function(a,b){var z,y,x
z=this.dy
y=a.e
if(typeof z!=="number")return z.T()
if(z<y){this.dy=y
x=a.y
this.c.av(x)
this.b.av(x)
this.fr=V.eG(this.b.d).t(0,V.eH(this.c.d))}return this.fr},
$isaa:1},kJ:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gB:function(){var z=this.r
if(z==null){z=D.L()
this.r=z}return z},
L:function(a){var z=this.r
if(!(z==null))z.J(a)},
bb:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.L()
z.e=y
z=y}else z=y
y=this.ghx()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.L()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
kG:[function(a){var z,y,x,w
H.d(a,"$isy")
if(!J.J(this.b,this.a.b.c))return
H.j(a,"$isda")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.t()
w=z+y*x
if(z!==w){this.d=w
z=new D.D("zoom",z,w,this,[P.q])
z.b=!0
this.L(z)}},"$1","ghx",4,0,2],
aw:function(a,b){var z,y,x
z=this.e
y=a.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.d9(x,x,x,1)}return this.f},
$isaa:1}}],["","",,M,{"^":"",ig:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
sh6:function(a,b){this.d=H.k(b,"$isa_",[E.au],"$asa_")},
aQ:[function(a){var z
H.d(a,"$isy")
z=this.x
if(!(z==null))z.J(a)},function(){return this.aQ(null)},"kB","$1","$0","gaz",0,2,1],
kL:[function(a,b){var z,y,x,w,v,u,t,s
z=E.au
H.k(b,"$isp",[z],"$asp")
for(y=b.length,x=this.gaz(),w={func:1,ret:-1,args:[D.y]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){if(t.gak()==null){s=new D.bx()
s.sal(null)
s.sb7(null)
s.c=null
s.d=0
t.sak(s)}s=t.gak()
s.toString
H.l(x,w)
if(s.a==null)s.sal(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.cn(a,b,this,[z])
z.b=!0
this.aQ(z)},"$2","ghD",8,0,9],
kM:[function(a,b){var z,y,x
z=E.au
H.k(b,"$isp",[z],"$asp")
for(y=b.gV(b),x=this.gaz();y.D();)y.gK().gB().M(0,x)
z=new D.co(a,b,this,[z])
z.b=!0
this.aQ(z)},"$2","ghE",8,0,9],
sbn:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gB().M(0,this.gaz())
y=this.c
this.c=a
if(a!=null)a.gB().h(0,this.gaz())
z=new D.D("technique",y,this.c,this,[O.c5])
z.b=!0
this.aQ(z)}},
gB:function(){var z=this.x
if(z==null){z=D.L()
this.x=z}return z},
b0:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
a.eR(this.c)
z=this.b
z.toString
y=a.a
C.c.ja(y,36160,null)
C.c.cG(y,2884)
C.c.cG(y,2929)
C.c.jv(y,513)
x=y.drawingBufferWidth
w=y.drawingBufferHeight
v=z.r
u=v.a
if(typeof x!=="number")return H.A(x)
t=C.j.au(u*x)
u=v.b
if(typeof w!=="number")return H.A(w)
s=C.j.au(u*w)
u=C.j.au(v.c*x)
a.c=u
v=C.j.au(v.d*w)
a.d=v
C.c.kx(y,t,s,u,v)
C.c.jg(y,z.c)
z=z.a
C.c.jf(y,z.a,z.b,z.c,z.d)
C.c.je(y,16640)
z=this.a
y=a.c
v=a.d
u=z.c
r=z.d
q=z.e
p=q-r
o=1/Math.tan(u*0.5)
n=V.aC(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.eQ(n)
y=$.eQ
if(y==null){y=V.eS()
v=$.fB
if(v==null){v=new V.E(0,1,0)
$.fB=v}u=$.fz
if(u==null){u=new V.E(0,0,-1)
$.fz=u}m=u.A(0,Math.sqrt(u.H(u)))
v=v.aL(m)
l=v.A(0,Math.sqrt(v.H(v)))
k=m.aL(l)
j=new V.E(y.a,y.b,y.c)
i=l.U(0).H(j)
h=k.U(0).H(j)
g=m.U(0).H(j)
y=V.aC(l.a,k.a,m.a,i,l.b,k.b,m.b,h,l.c,k.c,m.c,g,0,0,0,1)
$.eQ=y
f=y}else f=y
y=z.b
if(y!=null){e=y.aw(a,z)
if(e!=null)f=e.t(0,f)}a.db.eQ(f)
z=this.c
if(z!=null)z.av(a)
for(z=this.d.a,z=new J.at(z,z.length,0,[H.t(z,0)]);z.D();)z.d.av(a)
for(z=this.d.a,z=new J.at(z,z.length,0,[H.t(z,0)]);z.D();)z.d.b0(a)
this.a.toString
a.cy.cW()
a.db.cW()
this.b.toString
a.eP()},
$isnE:1}}],["","",,A,{"^":"",e2:{"^":"a;a,b,c"},hM:{"^":"a;a",
l:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
jz:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
C.c.e7(w.a,w.c)}},
jx:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
C.c.e5(w.a,w.c)}}},j5:{"^":"de;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0aE,0at,0bG,0e8,0bH,0bI,0e9,0ea,0bJ,0bK,0eb,0ec,0bL,0bM,0ed,0ee,0bN,0ef,0eg,0bO,0eh,0ei,0bP,0bQ,0bR,0ej,0ek,0bS,0bT,0el,0em,0bU,0en,0cH,0eo,0cI,0ep,0cJ,0eq,0cK,0er,0cL,0es,0cM,a,b,0c,0d,0e,0f,0r,0x,0y",
sh1:function(a){this.r1=H.k(a,"$isb",[A.aG],"$asb")},
shc:function(a){this.cH=H.k(a,"$isb",[A.dq],"$asb")},
shZ:function(a){this.cI=H.k(a,"$isb",[A.ds],"$asb")},
siq:function(a){this.cJ=H.k(a,"$isb",[A.dt],"$asb")},
siz:function(a){this.cK=H.k(a,"$isb",[A.du],"$asb")},
siA:function(a){this.cL=H.k(a,"$isb",[A.dv],"$asb")},
siB:function(a){this.cM=H.k(a,"$isb",[A.dw],"$asb")},
fA:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
this.z=a2
z=new P.ai("")
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
a2.iF(z)
a2.iM(z)
a2.iG(z)
a2.iU(z)
a2.iV(z)
a2.iO(z)
a2.iZ(z)
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
z=new P.ai("")
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
x.iJ(z)
x.iE(z)
x.iH(z)
x.iK(z)
x.iS(z)
u=x.dy
if(u){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
x.iQ(z)
x.iR(z)}x.iN(z)
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
x.iI(z)
x.iP(z)
x.iT(z)
x.iW(z)
x.iX(z)
x.iY(z)
x.iL(z)}r=z.a+="// === Main ===\n"
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
this.e=this.dv(s,35633)
this.f=this.dv(this.d,35632)
x=this.a
v=x.createProgram()
this.r=v
C.c.dY(x,v,this.e)
C.c.dY(x,this.r,this.f)
C.c.jQ(x,this.r)
if(!H.dM(C.c.c_(x,this.r,35714))){m=C.c.fe(x,this.r)
C.c.jr(x,this.r)
H.r(P.u("Failed to link shader: "+H.i(m)))}this.ik()
this.im()
this.Q=this.x.l(0,"posAttr")
this.cx=this.x.l(0,"normAttr")
this.ch=this.x.l(0,"binmAttr")
this.cy=this.x.l(0,"txt2DAttr")
this.db=this.x.l(0,"txtCubeAttr")
this.dx=this.x.l(0,"bendAttr")
if(a2.fr)this.id=H.j(this.y.m(0,"invViewMat"),"$isaG")
if(y)this.dy=H.j(this.y.m(0,"objMat"),"$isaG")
if(w)this.fr=H.j(this.y.m(0,"viewObjMat"),"$isaG")
this.fy=H.j(this.y.m(0,"projViewObjMat"),"$isaG")
if(a2.x2)this.k1=H.j(this.y.m(0,"txt2DMat"),"$isdr")
if(a2.y1)this.k2=H.j(this.y.m(0,"txtCubeMat"),"$isaG")
if(a2.y2)this.k3=H.j(this.y.m(0,"colorMat"),"$isaG")
this.sh1(H.c([],[A.aG]))
y=a2.aE
if(y>0){this.k4=H.d(this.y.m(0,"bendMatCount"),"$isK")
for(l=0;l<y;++l){x=this.r1
w=this.y
v="bendValues["+l+"].mat"
k=w.l(0,v)
if(k==null)H.r(P.u("Required uniform value, "+v+", was not defined or used in shader."));(x&&C.a).h(x,H.j(k,"$isaG"))}}y=a2.a
if(y!==C.d){this.r2=H.j(this.y.m(0,"emissionClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.rx=H.j(this.y.m(0,"emissionTxt"),"$isan")
this.x1=H.j(this.y.m(0,"nullEmissionTxt"),"$isK")
break
case C.f:this.ry=H.j(this.y.m(0,"emissionTxt"),"$isao")
this.x1=H.j(this.y.m(0,"nullEmissionTxt"),"$isK")
break}}y=a2.b
if(y!==C.d){this.x2=H.j(this.y.m(0,"ambientClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.y1=H.j(this.y.m(0,"ambientTxt"),"$isan")
this.aE=H.j(this.y.m(0,"nullAmbientTxt"),"$isK")
break
case C.f:this.y2=H.j(this.y.m(0,"ambientTxt"),"$isao")
this.aE=H.j(this.y.m(0,"nullAmbientTxt"),"$isK")
break}}y=a2.c
if(y!==C.d){this.at=H.j(this.y.m(0,"diffuseClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.bG=H.j(this.y.m(0,"diffuseTxt"),"$isan")
this.bH=H.j(this.y.m(0,"nullDiffuseTxt"),"$isK")
break
case C.f:this.e8=H.j(this.y.m(0,"diffuseTxt"),"$isao")
this.bH=H.j(this.y.m(0,"nullDiffuseTxt"),"$isK")
break}}y=a2.d
if(y!==C.d){this.bI=H.j(this.y.m(0,"invDiffuseClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.e9=H.j(this.y.m(0,"invDiffuseTxt"),"$isan")
this.bJ=H.j(this.y.m(0,"nullInvDiffuseTxt"),"$isK")
break
case C.f:this.ea=H.j(this.y.m(0,"invDiffuseTxt"),"$isao")
this.bJ=H.j(this.y.m(0,"nullInvDiffuseTxt"),"$isK")
break}}y=a2.e
if(y!==C.d){this.bM=H.j(this.y.m(0,"shininess"),"$isZ")
this.bK=H.j(this.y.m(0,"specularClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.eb=H.j(this.y.m(0,"specularTxt"),"$isan")
this.bL=H.j(this.y.m(0,"nullSpecularTxt"),"$isK")
break
case C.f:this.ec=H.j(this.y.m(0,"specularTxt"),"$isao")
this.bL=H.j(this.y.m(0,"nullSpecularTxt"),"$isK")
break}}switch(a2.f){case C.d:break
case C.i:break
case C.e:this.ed=H.j(this.y.m(0,"bumpTxt"),"$isan")
this.bN=H.j(this.y.m(0,"nullBumpTxt"),"$isK")
break
case C.f:this.ee=H.j(this.y.m(0,"bumpTxt"),"$isao")
this.bN=H.j(this.y.m(0,"nullBumpTxt"),"$isK")
break}if(a2.dy){this.ef=H.j(this.y.m(0,"envSampler"),"$isao")
this.eg=H.j(this.y.m(0,"nullEnvTxt"),"$isK")
y=a2.r
if(y!==C.d){this.bO=H.j(this.y.m(0,"reflectClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.eh=H.j(this.y.m(0,"reflectTxt"),"$isan")
this.bP=H.j(this.y.m(0,"nullReflectTxt"),"$isK")
break
case C.f:this.ei=H.j(this.y.m(0,"reflectTxt"),"$isao")
this.bP=H.j(this.y.m(0,"nullReflectTxt"),"$isK")
break}}y=a2.x
if(y!==C.d){this.bQ=H.j(this.y.m(0,"refraction"),"$isZ")
this.bR=H.j(this.y.m(0,"refractClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.ej=H.j(this.y.m(0,"refractTxt"),"$isan")
this.bS=H.j(this.y.m(0,"nullRefractTxt"),"$isK")
break
case C.f:this.ek=H.j(this.y.m(0,"refractTxt"),"$isao")
this.bS=H.j(this.y.m(0,"nullRefractTxt"),"$isK")
break}}}y=a2.y
if(y!==C.d){this.bT=H.j(this.y.m(0,"alpha"),"$isZ")
switch(y){case C.d:break
case C.i:break
case C.e:this.el=H.j(this.y.m(0,"alphaTxt"),"$isan")
this.bU=H.j(this.y.m(0,"nullAlphaTxt"),"$isK")
break
case C.f:this.em=H.j(this.y.m(0,"alphaTxt"),"$isao")
this.bU=H.j(this.y.m(0,"nullAlphaTxt"),"$isK")
break}}this.shc(H.c([],[A.dq]))
this.shZ(H.c([],[A.ds]))
this.siq(H.c([],[A.dt]))
this.siz(H.c([],[A.du]))
this.siA(H.c([],[A.dv]))
this.siB(H.c([],[A.dw]))
if(a2.k2){y=a2.z
if(y>0){this.en=H.d(this.y.m(0,"dirLightCount"),"$isK")
for(l=0;l<y;++l){x=this.y
w="dirLights["+l+"].viewDir"
k=x.l(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isI")
x=this.y
w="dirLights["+l+"].color"
j=x.l(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isI")
x=this.cH;(x&&C.a).h(x,new A.dq(l,k,j))}}y=a2.Q
if(y>0){this.eo=H.d(this.y.m(0,"pntLightCount"),"$isK")
for(l=0;l<y;++l){x=this.y
w="pntLights["+l+"].point"
k=x.l(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isI")
x=this.y
w="pntLights["+l+"].viewPnt"
j=x.l(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isI")
x=this.y
w="pntLights["+l+"].color"
i=x.l(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isI")
x=this.y
w="pntLights["+l+"].att0"
h=x.l(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isZ")
x=this.y
w="pntLights["+l+"].att1"
g=x.l(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isZ")
x=this.y
w="pntLights["+l+"].att2"
f=x.l(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isZ")
x=this.cI;(x&&C.a).h(x,new A.ds(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.ep=H.d(this.y.m(0,"spotLightCount"),"$isK")
for(l=0;l<y;++l){x=this.y
w="spotLights["+l+"].objPnt"
k=x.l(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isI")
x=this.y
w="spotLights["+l+"].objDir"
j=x.l(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isI")
x=this.y
w="spotLights["+l+"].viewPnt"
i=x.l(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isI")
x=this.y
w="spotLights["+l+"].color"
h=x.l(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isI")
x=this.y
w="spotLights["+l+"].cutoff"
g=x.l(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isZ")
x=this.y
w="spotLights["+l+"].coneAngle"
f=x.l(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isZ")
x=this.y
w="spotLights["+l+"].att0"
e=x.l(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isZ")
x=this.y
w="spotLights["+l+"].att1"
d=x.l(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isZ")
x=this.y
w="spotLights["+l+"].att2"
c=x.l(0,w)
if(c==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isZ")
x=this.cJ;(x&&C.a).h(x,new A.dt(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.eq=H.d(this.y.m(0,"txtDirLightCount"),"$isK")
for(l=0;l<y;++l){x=this.y
w="txtDirLights["+l+"].objUp"
k=x.l(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isI")
x=this.y
w="txtDirLights["+l+"].objRight"
j=x.l(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isI")
x=this.y
w="txtDirLights["+l+"].objDir"
i=x.l(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isI")
x=this.y
w="txtDirLights["+l+"].viewDir"
h=x.l(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isI")
x=this.y
w="txtDirLights["+l+"].color"
g=x.l(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isI")
x=this.y
w="txtDirLights["+l+"].nullTxt"
f=x.l(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isK")
x=this.y
w="txtDirLightsTxt2D"+l
e=x.l(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isan")
x=this.cK;(x&&C.a).h(x,new A.du(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.er=H.d(this.y.m(0,"txtPntLightCount"),"$isK")
for(l=0;l<y;++l){x=this.y
w="txtPntLights["+l+"].point"
k=x.l(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isI")
x=this.y
w="txtPntLights["+l+"].viewPnt"
j=x.l(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isI")
x=this.y
w="txtPntLights["+l+"].invViewRotMat"
i=x.l(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isdr")
x=this.y
w="txtPntLights["+l+"].color"
h=x.l(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isI")
x=this.y
w="txtPntLights["+l+"].nullTxt"
g=x.l(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isK")
x=this.y
w="txtPntLights["+l+"].att0"
f=x.l(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isZ")
x=this.y
w="txtPntLights["+l+"].att1"
e=x.l(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isZ")
x=this.y
w="txtPntLights["+l+"].att2"
d=x.l(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isZ")
x=this.y
w="txtPntLightsTxtCube"+l
c=x.l(0,w)
if(c==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isao")
x=this.cL;(x&&C.a).h(x,new A.dv(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.es=H.d(this.y.m(0,"txtSpotLightCount"),"$isK")
for(l=0;l<y;++l){x=this.y
w="txtSpotLights["+l+"].objPnt"
k=x.l(0,w)
if(k==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(k,"$isI")
x=this.y
w="txtSpotLights["+l+"].objDir"
j=x.l(0,w)
if(j==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(j,"$isI")
x=this.y
w="txtSpotLights["+l+"].objUp"
i=x.l(0,w)
if(i==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(i,"$isI")
x=this.y
w="txtSpotLights["+l+"].objRight"
h=x.l(0,w)
if(h==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(h,"$isI")
x=this.y
w="txtSpotLights["+l+"].viewPnt"
g=x.l(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isI")
x=this.y
w="txtSpotLights["+l+"].nullTxt"
f=x.l(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isK")
x=this.y
w="txtSpotLights["+l+"].color"
e=x.l(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isI")
x=this.y
w="txtSpotLights["+l+"].tuScalar"
d=x.l(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isZ")
x=this.y
w="txtSpotLights["+l+"].tvScalar"
c=x.l(0,w)
if(c==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isZ")
x=this.y
w="txtSpotLights["+l+"].att0"
b=x.l(0,w)
if(b==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(b,"$isZ")
x=this.y
w="txtSpotLights["+l+"].att1"
a=x.l(0,w)
if(a==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a,"$isZ")
x=this.y
w="txtSpotLights["+l+"].att2"
a0=x.l(0,w)
if(a0==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a0,"$isZ")
x=this.y
w="txtSpotLightsTxt2D"+l
a1=x.l(0,w)
if(a1==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a1,"$isan")
x=this.cM;(x&&C.a).h(x,new A.dw(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
an:function(a,b,c){C.c.W(b.a,b.d,1)},
ad:function(a,b,c){C.c.W(b.a,b.d,1)},
n:{
j6:function(a,b){var z,y
z=a.at
y=new A.j5(b,z)
y.fD(b,z)
y.fA(a,b)
return y}}},ja:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,aE,at,bG",
iF:function(a){var z,y,x
if(!this.x1)return
z=a.a+="struct BendingValue\n"
z+="{\n"
a.a=z
z+="   mat4 mat;\n"
a.a=z
z+="};\n"
a.a=z
a.a=z+"uniform int bendMatCount;\n"
z=a.a+="uniform BendingValue bendValues["+this.aE+"];\n"
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
iM:function(a){var z
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
iG:function(a){var z
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
iU:function(a){var z,y
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
iV:function(a){var z,y
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
iO:function(a){var z
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
iZ:function(a){var z
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
aI:function(a,b,c){var z
if(b===C.d)return
z=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.f(c,0)
z+="uniform int null"+(c[0].toUpperCase()+C.b.ay(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
iJ:function(a){var z,y
z=this.a
if(z===C.d)return
y=a.a+="// === Emission ===\n"
a.a=y+"\n"
this.aI(a,z,"emission")
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
iE:function(a){var z,y
z=this.b
if(z===C.d)return
y=a.a+="// === Ambient ===\n"
a.a=y+"\n"
this.aI(a,z,"ambient")
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
iH:function(a){var z,y
z=this.c
if(z===C.d)return
y=a.a+="// === Diffuse ===\n"
a.a=y+"\n"
this.aI(a,z,"diffuse")
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
iK:function(a){var z,y
z=this.d
if(z===C.d)return
y=a.a+="// === Inverse Diffuse ===\n"
a.a=y+"\n"
this.aI(a,z,"invDiffuse")
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
iS:function(a){var z,y
z=this.e
if(z===C.d)return
y=a.a+="// === Specular ===\n"
a.a=y+"\n"
this.aI(a,z,"specular")
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
iN:function(a){var z,y
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
iQ:function(a){var z,y
z=this.r
if(z===C.d)return
y=a.a+="// === Reflection ===\n"
a.a=y+"\n"
this.aI(a,z,"reflect")
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
iR:function(a){var z,y
z=this.x
if(z===C.d)return
y=a.a+="// === Refraction ===\n"
a.a=y+"\n"
this.aI(a,z,"refract")
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
iI:function(a){var z,y
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
iP:function(a){var z,y
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
iT:function(a){var z,y
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
iW:function(a){var z,y,x
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
iX:function(a){var z,y,x
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
iY:function(a){var z,y,x
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
iL:function(a){var z
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
i:function(a){return this.at}},dq:{"^":"a;a,b,c"},du:{"^":"a;a,b,c,d,e,f,r,x"},ds:{"^":"a;a,b,c,d,e,f,r"},dv:{"^":"a;a,b,c,d,e,f,r,x,y,z"},dt:{"^":"a;a,b,c,d,e,f,r,x,y,z"},dw:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},de:{"^":"cT;",
fD:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dv:function(a,b){var z,y,x
z=this.a
y=C.c.jp(z,b)
C.c.fo(z,y,a)
C.c.ji(z,y)
if(!H.dM(C.c.fh(z,y,35713))){x=C.c.fg(z,y)
C.c.js(z,y)
throw H.e(P.u("Error compiling shader '"+H.i(y)+"': "+H.i(x)))}return y},
ik:function(){var z,y,x,w,v,u
z=H.c([],[A.e2])
y=this.a
x=H.ab(C.c.c_(y,this.r,35721))
if(typeof x!=="number")return H.A(x)
w=0
for(;w<x;++w){v=C.c.fa(y,this.r,w)
u=C.c.fc(y,this.r,v.name)
C.a.h(z,new A.e2(y,v.name,u))}this.x=new A.hM(z)},
im:function(){var z,y,x,w,v,u
z=H.c([],[A.ae])
y=this.a
x=H.ab(C.c.c_(y,this.r,35718))
if(typeof x!=="number")return H.A(x)
w=0
for(;w<x;++w){v=C.c.fb(y,this.r,w)
u=C.c.fi(y,this.r,v.name)
C.a.h(z,this.jq(v.type,v.size,v.name,u))}this.y=new A.ks(z)},
aS:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.K(z,y,b,c)
else return A.dp(z,y,b,a,c)},
h9:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.an(z,y,b,c)
else return A.dp(z,y,b,a,c)},
ha:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ao(z,y,b,c)
else return A.dp(z,y,b,a,c)},
bA:function(a,b){return new P.fL(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
jq:function(a,b,c,d){switch(a){case 5120:return this.aS(b,c,d)
case 5121:return this.aS(b,c,d)
case 5122:return this.aS(b,c,d)
case 5123:return this.aS(b,c,d)
case 5124:return this.aS(b,c,d)
case 5125:return this.aS(b,c,d)
case 5126:return new A.Z(this.a,this.r,c,d)
case 35664:return new A.kn(this.a,this.r,c,d)
case 35665:return new A.I(this.a,this.r,c,d)
case 35666:return new A.kq(this.a,this.r,c,d)
case 35667:return new A.ko(this.a,this.r,c,d)
case 35668:return new A.kp(this.a,this.r,c,d)
case 35669:return new A.kr(this.a,this.r,c,d)
case 35674:return new A.ku(this.a,this.r,c,d)
case 35675:return new A.dr(this.a,this.r,c,d)
case 35676:return new A.aG(this.a,this.r,c,d)
case 35678:return this.h9(b,c,d)
case 35680:return this.ha(b,c,d)
case 35670:throw H.e(this.bA("BOOL",c))
case 35671:throw H.e(this.bA("BOOL_VEC2",c))
case 35672:throw H.e(this.bA("BOOL_VEC3",c))
case 35673:throw H.e(this.bA("BOOL_VEC4",c))
default:throw H.e(P.u("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}},cj:{"^":"a;a,b",
i:function(a){return this.b}},ae:{"^":"a;"},ks:{"^":"a;a",
l:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.l(0,b)
if(z==null)throw H.e(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.P()},
jH:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w)x+=z[w].i(0)+a
return x},
P:function(){return this.jH("\n")}},K:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform1i: "+H.i(this.c)}},ko:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform2i: "+H.i(this.c)}},kp:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform3i: "+H.i(this.c)}},kr:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform4i: "+H.i(this.c)}},km:{"^":"ae;0e,0f,a,b,c,d",
siC:function(a){this.e=H.k(a,"$isb",[P.m],"$asb")},
i:function(a){return"Uniform1iv: "+H.i(this.c)},
n:{
dp:function(a,b,c,d,e){var z=new A.km(a,b,c,e)
z.f=d
z.siC(P.iW(d,0,!1,P.m))
return z}}},Z:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform1f: "+H.i(this.c)}},kn:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform2f: "+H.i(this.c)}},I:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform3f: "+H.i(this.c)}},kq:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform4f: "+H.i(this.c)}},ku:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}},dr:{"^":"ae;a,b,c,d",
ax:function(a){var z=new Float32Array(H.bi(H.k(a,"$isb",[P.q],"$asb")))
C.c.f0(this.a,this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.i(this.c)}},aG:{"^":"ae;a,b,c,d",
ax:function(a){var z=new Float32Array(H.bi(H.k(a,"$isb",[P.q],"$asb")))
C.c.f1(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.i(this.c)}},an:{"^":"ae;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.i(this.c)}},ao:{"^":"ae;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}}],["","",,F,{"^":"",
dP:function(a,b,c,d){var z
H.l(c,{func:1,ret:-1,args:[F.ag,P.q,P.q]})
z=F.df()
F.bM(z,b,c,d,a,1,0,0,1)
F.bM(z,b,c,d,a,0,1,0,3)
F.bM(z,b,c,d,a,0,0,1,2)
F.bM(z,b,c,d,a,-1,0,0,0)
F.bM(z,b,c,d,a,0,-1,0,0)
F.bM(z,b,c,d,a,0,0,-1,3)
z.aD()
return z},
cF:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bM:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.l(c,{func:1,ret:-1,args:[F.ag,P.q,P.q]})
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
z.d=y}l=F.cF(y)
k=F.cF(z.b)
j=F.dX(d,e,new F.mn(z,F.cF(z.c),F.cF(z.d),k,l,c),b)
if(j!=null)a.bj(j)},
hj:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.l(e,{func:1,ret:P.q,args:[P.q]})
if(f<3)return
z=F.df()
y=b?-1:1
x=-6.283185307179586/f
w=H.c([],[F.ag])
v=z.a
u=new V.E(0,0,y)
u=u.A(0,Math.sqrt(u.H(u)))
C.a.h(w,v.j2(new V.c2(a,-1,-1,-1),new V.bu(1,1,1,1),new V.Y(0,0,d),new V.E(0,0,y),new V.ad(0.5,0.5),u))
for(v=y*y,t=0;t<=f;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=e.$1(t/f)
u=z.a
if(typeof p!=="number")return H.A(p)
o=new V.E(r,q,y).A(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.c7(new V.c2(a,-1,-1,-1),null,new V.bu(n,l,m,1),new V.Y(r*p,q*p,d),new V.E(0,0,y),new V.ad(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.j0(w)
return z},
hh:function(a,b,c,d,e,f){return F.mH(!0,c,d,new F.mG(a,f),e)},
mH:function(a,b,c,d,e){var z
H.l(d,{func:1,ret:P.q,args:[P.q,P.q]})
if(e<3)return
if(c<1)return
z=F.dX(c,e,new F.mJ(d),null)
if(z==null)return
z.aD()
z.cu()
if(b)z.bj(F.hj(3,!1,!1,1,new F.mK(d),e))
z.bj(F.hj(1,!0,!1,-1,new F.mL(d),e))
return z},
ht:function(a,b,c,d){var z,y
z={}
z.a=b
z.a=new F.nk()
y=F.dP(a,null,new F.nl(z,c),d)
y.cu()
return y},
hw:function(a,b,c,d){return F.hi(c,a,d,b,new F.nn())},
n2:function(a,b,c,d,e,f){return F.hi(d,a,e,b,new F.n3(f,c))},
hi:function(a,b,c,d,e){var z=F.dX(a,b,new F.mI(H.l(e,{func:1,ret:V.Y,args:[P.q]}),d,b,c),null)
if(z==null)return
z.aD()
z.cu()
return z},
dX:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.ag,P.q,P.q]})
if(a<1)return
if(b<1)return
z=F.df()
y=H.c([],[F.ag])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.c7(null,null,new V.bu(u,0,0,1),null,null,new V.ad(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cE(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.c7(null,null,new V.bu(o,n,m,1),null,null,new V.ad(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cE(d))}}z.d.j1(a+1,b+1,y)
return z},
mn:{"^":"n:7;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cR(z.b,b).cR(z.d.cR(z.c,b),c)
a.sa3(0,new V.Y(y.a,y.b,y.c))
a.seV(y.A(0,Math.sqrt(y.H(y))))
z=1-b
x=1-c
a.se1(new V.c2(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
mG:{"^":"n:24;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
mJ:{"^":"n:7;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.A(v)
y=-y*v
u=x*v
a.sa3(0,new V.Y(y,u,w))
u=new V.E(y,u,w)
a.seV(u.A(0,Math.sqrt(u.H(u))))
a.se1(new V.c2(1-c,2+c,-1,-1))}},
mK:{"^":"n:30;a",
$1:function(a){return this.a.$2(a,1)}},
mL:{"^":"n:30;a",
$1:function(a){return this.a.$2(1-a,0)}},
nk:{"^":"n:24;",
$2:function(a,b){return 0}},
nl:{"^":"n:7;a,b",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.A(z)
y=a.f
x=new V.E(y.a,y.b,y.c)
z=x.A(0,Math.sqrt(x.H(x))).t(0,this.b+z)
a.sa3(0,new V.Y(z.a,z.b,z.c))}},
nn:{"^":"n:21;",
$1:function(a){return new V.Y(Math.cos(a),Math.sin(a),0)}},
n3:{"^":"n:21;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.Y(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
mI:{"^":"n:7;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dY(y.$1(z),x)
x=J.dY(y.$1(z+3.141592653589793/this.c),x).N(0,w)
x=new V.E(x.a,x.b,x.c)
v=x.A(0,Math.sqrt(x.H(x)))
y=$.fA
if(y==null){y=new V.E(1,0,0)
$.fA=y
u=y}else u=y
if(!J.J(v,u)){y=$.fC
if(y==null){y=new V.E(0,0,1)
$.fC=y
u=y}else u=y}y=v.aL(u)
t=y.A(0,Math.sqrt(y.H(y)))
y=t.aL(v)
u=y.A(0,Math.sqrt(y.H(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.t(0,y*x)
x=t.t(0,r*x)
a.sa3(0,w.G(0,new V.Y(y.a-x.a,y.b-x.b,y.c-x.c)))}},
a8:{"^":"a;0a,0b,0c,0d,0e",
bd:function(){if(!this.gbe()){C.a.M(this.a.a.d.b,this)
this.a.a.a4()}this.cn()
this.co()
this.i5()},
cs:function(a){this.a=a
C.a.h(a.d.b,this)},
ct:function(a){this.b=a
C.a.h(a.d.c,this)},
ij:function(a){this.c=a
C.a.h(a.d.d,this)},
cn:function(){var z=this.a
if(z!=null){C.a.M(z.d.b,this)
this.a=null}},
co:function(){var z=this.b
if(z!=null){C.a.M(z.d.c,this)
this.b=null}},
i5:function(){var z=this.c
if(z!=null){C.a.M(z.d.d,this)
this.c=null}},
gbe:function(){return this.a==null||this.b==null||this.c==null},
h0:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.bF()
if(y!=null)v=v.G(0,y)
if(x!=null)v=v.G(0,x)
if(w!=null)v=v.G(0,w)
if(v.eF())return
return v.A(0,Math.sqrt(v.H(v)))},
h5:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.N(0,y)
z=new V.E(z.a,z.b,z.c)
v=z.A(0,Math.sqrt(z.H(z)))
z=w.N(0,y)
z=new V.E(z.a,z.b,z.c)
z=v.aL(z.A(0,Math.sqrt(z.H(z))))
return z.A(0,Math.sqrt(z.H(z)))},
cB:function(){if(this.d!=null)return!0
var z=this.h0()
if(z==null){z=this.h5()
if(z==null)return!1}this.d=z
this.a.a.a4()
return!0},
h_:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=V.bF()
if(y!=null)v=v.G(0,y)
if(x!=null)v=v.G(0,x)
if(w!=null)v=v.G(0,w)
if(v.eF())return
return v.A(0,Math.sqrt(v.H(v)))},
h4:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.o.$2(n,0)){z=r.N(0,u)
z=new V.E(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.H(z)))
if(o.a-p.a<0)m=m.U(0)}else{l=(z-q.b)/n
z=r.N(0,u).t(0,l).G(0,u).N(0,x)
z=new V.E(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.H(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.U(0)}z=this.d
if(z!=null){k=z.A(0,Math.sqrt(z.H(z)))
z=k.aL(m)
z=z.A(0,Math.sqrt(z.H(z))).aL(k)
m=z.A(0,Math.sqrt(z.H(z)))}return m},
cz:function(){if(this.e!=null)return!0
var z=this.h_()
if(z==null){z=this.h4()
if(z==null)return!1}this.e=z
this.a.a.a4()
return!0},
gjh:function(a){if(J.J(this.a,this.b))return!0
if(J.J(this.b,this.c))return!0
if(J.J(this.c,this.a))return!0
return!1},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
F:function(a){var z,y
if(this.gbe())return a+"disposed"
z=a+C.b.af(J.af(this.a.e),0)+", "+C.b.af(J.af(this.b.e),0)+", "+C.b.af(J.af(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
P:function(){return this.F("")},
n:{
by:function(a,b,c){var z,y,x
z=new F.a8()
y=a.a
if(y==null)H.r(P.u("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.u("May not create a face with vertices attached to different shapes."))
z.cs(a)
z.ct(b)
z.ij(c)
C.a.h(z.a.a.d.b,z)
z.a.a.a4()
return z}}},
ik:{"^":"a;"},
k3:{"^":"ik;",
bi:function(a,b,c){var z,y
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
bB:{"^":"a;0a,0b",
bd:function(){if(!this.gbe()){C.a.M(this.a.a.c.b,this)
this.a.a.a4()}this.cn()
this.co()},
cs:function(a){this.a=a
C.a.h(a.c.b,this)},
ct:function(a){this.b=a
C.a.h(a.c.c,this)},
cn:function(){var z=this.a
if(z!=null){C.a.M(z.c.b,this)
this.a=null}},
co:function(){var z=this.b
if(z!=null){C.a.M(z.c.c,this)
this.b=null}},
gbe:function(){return this.a==null||this.b==null},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
F:function(a){if(this.gbe())return a+"disposed"
return a+C.b.af(J.af(this.a.e),0)+", "+C.b.af(J.af(this.b.e),0)},
P:function(){return this.F("")},
n:{
iN:function(a,b){var z,y,x
z=new F.bB()
y=a.a
if(y==null)H.r(P.u("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.r(P.u("May not create a line with vertices attached to different shapes."))
z.cs(a)
z.ct(b)
C.a.h(z.a.a.c.b,z)
z.a.a.a4()
return z}}},
iO:{"^":"a;"},
kl:{"^":"iO;",
bi:function(a,b,c){var z,y
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
c1:{"^":"a;0a",
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
F:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.af(J.af(z.e),0)},
P:function(){return this.F("")}},
f0:{"^":"a;0a,0b,0c,0d,0e",
gB:function(){var z=this.e
if(z==null){z=D.L()
this.e=z}return z},
bj:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.C()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){v=z[w]
this.a.h(0,v.jk())}this.a.C()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.G()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.c1()
if(r.a==null)H.r(P.u("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.J(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.G()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.C()
t=t.e
if(typeof t!=="number")return t.G()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.c.a
t.a.h(0,p)
t.a.h(0,o)
F.iN(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.C()
s=s.e
if(typeof s!=="number")return s.G()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.C()
t=t.e
if(typeof t!=="number")return t.G()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.C()
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
if(!(z==null))z.ag()},
aD:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.aD()||!1
if(!this.a.aD())y=!1
z=this.e
if(!(z==null))z.ag()
return y},
jT:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.c(z.slice(0),[H.t(z,0)])
for(z=[F.ag];y.length!==0;){x=C.a.gjD(y)
C.a.kf(y,0)
if(x!=null){w=H.c([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.z)(y),++u){t=y[u]
if(t!=null&&a.bi(0,x,t)){C.a.h(w,t)
C.a.M(y,t)}}if(w.length>1)b.bj(w)}}this.a.C()
this.c.d_()
this.d.d_()
this.b.kg()
this.c.d0(new F.kl())
this.d.d0(new F.k3())
z=this.e
if(!(z==null))z.ag()},
j4:function(a){this.jT(new F.kX(),new F.jk())},
cu:function(){return this.j4(null)},
cN:function(){var z,y,x,w,v,u
z=this.e
if(!(z==null))++z.d
this.d.cN()
for(y=this.a.c.length-1;y>=0;--y){z=this.a.c
if(y>=z.length)return H.f(z,y)
x=z[y]
z=x.r
if(z!=null)x.seH(new V.E(-z.a,-z.b,-z.c))
z=x.x
if(z!=null){w=-z.a
v=-z.b
z=-z.c
u=new V.E(w,v,z).A(0,Math.sqrt(w*w+v*v+z*z))
if(!J.J(x.x,u)){x.x=u
z=x.a
if(z!=null){z=z.e
if(!(z==null))z.J(null)}}}}z=this.e
if(!(z==null))z.ag()},
jc:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aQ()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aP().a)!==0)++w
if((x&$.$get$aO().a)!==0)++w
if((x&$.$get$aR().a)!==0)++w
if((x&$.$get$aS().a)!==0)++w
if((x&$.$get$bG().a)!==0)++w
if((x&$.$get$bH().a)!==0)++w
if((x&$.$get$bg().a)!==0)++w
if((x&$.$get$aN().a)!==0)++w
v=b.gdd(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.q
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.e7])
for(r=0,q=0;q<w;++q){p=b.j7(q)
o=p.gdd(p)
C.a.q(s,q,new Z.e7(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.f(y,n)
m=y[n].jR(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.q(t,l,m[k]);++l}}r+=o}H.k(t,"$isb",[x],"$asb")
y=a.a
j=y.createBuffer()
C.c.aC(y,34962,j)
C.c.e3(y,34962,new Float32Array(H.bi(t)),35044)
C.c.aC(y,34962,null)
i=new Z.e8(new Z.fH(34962,j),s,b)
i.shm(H.c([],[Z.bX]))
if(this.b.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.C()
C.a.h(h,g.e)}f=Z.dA(y,34963,H.k(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bX(0,h.length,f))}if(this.c.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.C()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.C()
C.a.h(h,g.e)}f=Z.dA(y,34963,H.k(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bX(1,h.length,f))}if(this.d.b.length!==0){x=P.m
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
C.a.h(h,g.e)}f=Z.dA(y,34963,H.k(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bX(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.h])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.F("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.F("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.F("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.F("   "))}return C.a.k(z,"\n")},
aa:function(a){var z=this.e
if(!(z==null))z.J(a)},
a4:function(){return this.aa(null)},
$isnG:1,
n:{
df:function(){var z,y
z=new F.f0()
y=new F.kS(z)
y.b=!1
y.siD(H.c([],[F.ag]))
z.a=y
y=new F.jY(z)
y.sck(H.c([],[F.c1]))
z.b=y
y=new F.jX(z)
y.sho(H.c([],[F.bB]))
z.c=y
y=new F.jW(z)
y.shf(H.c([],[F.a8]))
z.d=y
z.e=null
return z}}},
jW:{"^":"a;a,0b",
shf:function(a){this.b=H.k(a,"$isb",[F.a8],"$asb")},
j0:function(a){var z,y,x,w,v,u,t
H.k(a,"$isb",[F.ag],"$asb")
z=H.c([],[F.a8])
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
j1:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.k(c,"$isb",[F.ag],"$asb")
z=H.c([],[F.a8])
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
d0:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.f(x,y)
w=x[y]
for(x=w.d,v=x.b.length+x.c.length+x.d.length-1;v>=0;--v){u=w.d.l(0,v)
for(t=v-1;t>=0;--t){s=w.d.l(0,t)
if(a.bi(0,u,s)){u.bd()
break}}}}},
d_:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=x.gjh(x)
if(y)x.bd()}},
aD:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].cB())x=!1
return x},
cA:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].cz())x=!1
return x},
cN:function(){var z,y,x,w,v,u
for(z=this.b,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
v=w.b
w.b=w.c
w.c=v
u=w.d
if(u!=null)w.d=new V.E(-u.a,-u.b,-u.c)
u=w.e
if(u!=null)w.e=new V.E(-u.a,-u.b,-u.c)
u=w.a.a.e
if(!(u==null))u.J(null)}},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
P:function(){return this.F("")}},
jX:{"^":"a;a,0b",
sho:function(a){this.b=H.k(a,"$isb",[F.bB],"$asb")},
gp:function(a){return this.b.length},
d0:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.f(x,y)
w=x[y]
for(x=w.c,v=x.b.length+x.c.length-1;v>=0;--v){u=w.c.l(0,v)
for(t=v-1;t>=0;--t){s=w.c.l(0,t)
if(a.bi(0,u,s)){u.bd()
break}}}}},
d_:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=J.J(x.a,x.b)
if(y)x.bd()}},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.f(w,x)
C.a.h(z,w[x].F(a+(""+x+". ")))}return C.a.k(z,"\n")},
P:function(){return this.F("")}},
jY:{"^":"a;a,0b",
sck:function(a){this.b=H.k(a,"$isb",[F.c1],"$asb")},
gp:function(a){return this.b.length},
kg:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
y=y[z]
x=y.a
if(x.b.b.length>1){if(x!=null){C.a.M(x.a.b.b,y)
x=y.a.a.e
if(!(x==null))x.J(null)}x=y.a
if(x!=null){C.a.M(x.b.b,y)
y.a=null}}}},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
P:function(){return this.F("")}},
ag:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cE:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.c7(this.cx,x,u,z,y,w,v,a,t)},
jk:function(){return this.cE(null)},
sa3:function(a,b){var z
if(!J.J(this.f,b)){this.f=b
z=this.a
if(z!=null)z.a4()}},
seH:function(a){var z
a=a==null?null:a.A(0,Math.sqrt(a.H(a)))
if(!J.J(this.r,a)){this.r=a
z=this.a
if(z!=null)z.a4()}},
seV:function(a){var z
if(!J.J(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a4()}},
se1:function(a){var z
if(!J.J(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.a4()}},
jR:function(a){var z,y
if(a.v(0,$.$get$aQ())){z=this.f
y=[P.q]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.v(0,$.$get$aP())){z=this.r
y=[P.q]
if(z==null)return H.c([0,1,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.v(0,$.$get$aO())){z=this.x
y=[P.q]
if(z==null)return H.c([0,0,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.v(0,$.$get$aR())){z=this.y
y=[P.q]
if(z==null)return H.c([0,0],y)
else return H.c([z.a,z.b],y)}else if(a.v(0,$.$get$aS())){z=this.z
y=[P.q]
if(z==null)return H.c([0,0,0],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.v(0,$.$get$bG())){z=this.Q
y=[P.q]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.v(0,$.$get$bH())){z=this.Q
y=[P.q]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(a.v(0,$.$get$bg()))return H.c([this.ch],[P.q])
else if(a.v(0,$.$get$aN())){z=this.cx
y=[P.q]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.q])},
cB:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bF()
this.d.a0(0,new F.l1(z))
z=z.a
this.r=z.A(0,Math.sqrt(z.H(z)))
z=this.a
if(z!=null){z.a4()
z=this.a.e
if(!(z==null))z.ag()}return!0},
cz:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bF()
this.d.a0(0,new F.l0(z))
z=z.a
this.x=z.A(0,Math.sqrt(z.H(z)))
z=this.a
if(z!=null){z.a4()
z=this.a.e
if(!(z==null))z.ag()}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
F:function(a){var z,y,x
z=H.c([],[P.h])
C.a.h(z,C.b.af(J.af(this.e),0))
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
C.a.h(z,V.G(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.k(z,", ")
return a+"{"+x+"}"},
P:function(){return this.F("")},
n:{
c7:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ag()
y=new F.l_(z)
y.sck(H.c([],[F.c1]))
z.b=y
y=new F.kW(z)
x=[F.bB]
y.shp(H.c([],x))
y.shq(H.c([],x))
z.c=y
y=new F.kT(z)
x=[F.a8]
y.shg(H.c([],x))
y.shh(H.c([],x))
y.shi(H.c([],x))
z.d=y
h=$.$get$fE()
z.e=0
y=$.$get$aQ()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aP().a)!==0?e:null
z.x=(x&$.$get$aO().a)!==0?b:null
z.y=(x&$.$get$aR().a)!==0?f:null
z.z=(x&$.$get$aS().a)!==0?g:null
z.Q=(x&$.$get$fF().a)!==0?c:null
z.ch=(x&$.$get$bg().a)!==0?i:0
z.cx=(x&$.$get$aN().a)!==0?a:null
return z}}},
l1:{"^":"n:5;a",
$1:function(a){var z,y
H.d(a,"$isa8")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.G(0,z)}}},
l0:{"^":"n:5;a",
$1:function(a){var z,y
H.d(a,"$isa8")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.G(0,z)}}},
kS:{"^":"a;a,0b,0c",
siD:function(a){this.c=H.k(a,"$isb",[F.ag],"$asb")},
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
y.a4()
return!0},
j3:function(a,b,c,d,e,f,g,h,i){var z=F.c7(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
j2:function(a,b,c,d,e,f){return this.j3(a,null,b,c,d,e,f,null,0)},
gp:function(a){return this.c.length},
aD:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].cB()
return!0},
cA:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].cz()
return!0},
jd:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
s=v.A(0,Math.sqrt(u*u+t*t+s*s))
if(!J.J(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.J(null)}}}}return!0},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
this.C()
z=H.c([],[P.h])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
P:function(){return this.F("")}},
kT:{"^":"a;a,0b,0c,0d",
shg:function(a){this.b=H.k(a,"$isb",[F.a8],"$asb")},
shh:function(a){this.c=H.k(a,"$isb",[F.a8],"$asb")},
shi:function(a){this.d=H.k(a,"$isb",[F.a8],"$asb")},
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
a0:function(a,b){H.l(b,{func:1,ret:-1,args:[F.a8]})
C.a.a0(this.b,b)
C.a.a0(this.c,new F.kU(this,b))
C.a.a0(this.d,new F.kV(this,b))},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
P:function(){return this.F("")}},
kU:{"^":"n:5;a,b",
$1:function(a){H.d(a,"$isa8")
if(!J.J(a.a,this.a))this.b.$1(a)}},
kV:{"^":"n:5;a,b",
$1:function(a){var z
H.d(a,"$isa8")
z=this.a
if(!J.J(a.a,z)&&!J.J(a.b,z))this.b.$1(a)}},
kW:{"^":"a;a,0b,0c",
shp:function(a){this.b=H.k(a,"$isb",[F.bB],"$asb")},
shq:function(a){this.c=H.k(a,"$isb",[F.bB],"$asb")},
gp:function(a){return this.b.length+this.c.length},
l:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.f(z,x)
return z[x]}else{if(b<0)return H.f(z,b)
return z[b]}},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
P:function(){return this.F("")}},
kY:{"^":"a;"},
kX:{"^":"kY;",
bi:function(a,b,c){return J.J(b.f,c.f)}},
kZ:{"^":"a;"},
jk:{"^":"kZ;",
bj:function(a){var z,y,x,w
H.k(a,"$isb",[F.ag],"$asb")
z=V.bF()
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.E(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.A(0,Math.sqrt(z.H(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.z)(a),++x)a[x].seH(z)
return}},
l_:{"^":"a;a,0b",
sck:function(a){this.b=H.k(a,"$isb",[F.c1],"$asb")},
gp:function(a){return this.b.length},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
P:function(){return this.F("")}}}],["","",,O,{"^":"",j7:{"^":"c5;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
sh2:function(a){this.e=H.k(a,"$isa_",[V.ah],"$asa_")},
gB:function(){var z=this.dy
if(z==null){z=D.L()
this.dy=z}return z},
aj:[function(a){var z
H.d(a,"$isy")
z=this.dy
if(!(z==null))z.J(a)},function(){return this.aj(null)},"kC","$1","$0","gfU",0,2,1],
ib:[function(a){H.d(a,"$isy")
this.a=null
this.aj(a)},function(){return this.ib(null)},"l4","$1","$0","gia",0,2,1],
kI:[function(a,b){var z=V.ah
z=new D.cn(a,H.k(b,"$isp",[z],"$asp"),this,[z])
z.b=!0
this.aj(z)},"$2","ghA",8,0,14],
kJ:[function(a,b){var z=V.ah
z=new D.co(a,H.k(b,"$isp",[z],"$asp"),this,[z])
z.b=!0
this.aj(z)},"$2","ghB",8,0,14],
ds:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
a2=$.$get$aQ()
if(e){g=$.$get$aP()
a2=new Z.bf(a2.a|g.a)}if(d){g=$.$get$aO()
a2=new Z.bf(a2.a|g.a)}if(c){g=$.$get$aR()
a2=new Z.bf(a2.a|g.a)}if(b){g=$.$get$aS()
a2=new Z.bf(a2.a|g.a)}if(a0){g=$.$get$aN()
a2=new Z.bf(a2.a|g.a)}return new A.ja(z,r,q,p,o,n,m,l,k,y,x,w,v,u,t,y+x+w+v+u+t,i,i,a,a1,!0,!1,!1,h,a,f,e,d,c,b,a0,!1,!1,!1,s,j.charCodeAt(0)==0?j:j,a2)},
Z:function(a,b){H.k(a,"$isb",[T.f8],"$asb")},
av:function(a){var z,y,x,w
for(z=this.dx.a,z=new J.at(z,z.length,0,[H.t(z,0)]);z.D();){y=z.d
y.toString
x=$.b_
if(x==null){x=new V.Y(0,0,0)
$.b_=x}y.a=x
x=y.b
if(x!=null){w=x.aw(a,y)
if(w!=null)y.a=w.b2(y.a)}}},
ki:function(a,a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=this.a
if(z==null){z=this.ds()
y=a.fr.l(0,z.at)
if(y==null){y=A.j6(z,a.a)
x=y.b
if(x.length===0)H.r(P.u("May not cache a shader with no name."))
if(a.fr.bD(x))H.r(P.u('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.q(0,x,y)}this.a=y
a0.e=null
z=y}w=z.z
v=w.bG
z=a0.e
if(!(z instanceof Z.e8)){a0.e=null
z=null}if(z==null||!z.d.v(0,v)){z=w.r1
if(z)a0.d.aD()
u=w.r2
if(u){t=a0.d
s=t.e
if(!(s==null))++s.d
t.d.cA()
t.a.cA()
t=t.e
if(!(t==null))t.ag()}t=w.ry
if(t){s=a0.d
r=s.e
if(!(r==null))++r.d
s.a.jd()
s=s.e
if(!(s==null))s.ag()}q=a0.d.jc(new Z.l2(a.a),v)
q.aY($.$get$aQ()).e=this.a.Q.c
if(z)q.aY($.$get$aP()).e=this.a.cx.c
if(u)q.aY($.$get$aO()).e=this.a.ch.c
if(w.rx)q.aY($.$get$aR()).e=this.a.cy.c
if(t)q.aY($.$get$aS()).e=this.a.db.c
if(w.x1)q.aY($.$get$aN()).e=this.a.dx.c
a0.e=q}z=T.f8
p=H.c([],[z])
u=this.a
t=a.a
C.c.f3(t,u.r)
u.x.jz()
if(w.fx){u=this.a
s=a.dx.ga2()
u=u.dy
u.toString
u.ax(s.ah(0,!0))}if(w.fy){u=this.a
s=a.cx
if(s==null){s=a.db.ga2().t(0,a.dx.ga2())
a.cx=s}u=u.fr
u.toString
u.ax(s.ah(0,!0))}u=this.a
s=a.ch
if(s==null){s=a.gkd().t(0,a.dx.ga2())
a.ch=s}u=u.fy
u.toString
u.ax(s.ah(0,!0))
if(w.x2){u=this.a
s=this.b
u=u.k1
u.toString
u.ax(C.r.ah(s,!0))}if(w.y1){u=this.a
s=this.c
u=u.k2
u.toString
u.ax(C.r.ah(s,!0))}if(w.y2){u=this.a
s=this.d
u=u.k3
u.toString
u.ax(C.r.ah(s,!0))}if(w.aE>0){o=this.e.a.length
u=this.a.k4
C.c.W(u.a,u.d,o)
for(u=[P.q],n=0;n<o;++n){s=this.a
r=this.e.a
if(n>=r.length)return H.f(r,n)
r=r[n]
s.toString
H.d(r,"$isah")
s=s.r1
if(n>=s.length)return H.f(s,n)
s=s[n]
m=new Float32Array(H.bi(H.k(r.ah(0,!0),"$isb",u,"$asb")))
C.c.f1(s.a,s.d,!1,m)}}switch(w.a){case C.d:break
case C.i:u=this.a
s=this.f.f
u=u.r2
u.toString
r=s.a
l=s.b
s=s.c
C.c.w(u.a,u.d,r,l,s)
break
case C.e:this.Z(p,this.f.d)
u=this.a
s=this.f.d
u.an(u.rx,u.x1,s)
s=this.a
u=this.f.f
s=s.r2
s.toString
r=u.a
l=u.b
u=u.c
C.c.w(s.a,s.d,r,l,u)
break
case C.f:this.Z(p,this.f.e)
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
C.c.w(s.a,s.d,r,l,u)
break}if(w.k2){switch(w.b){case C.d:break
case C.i:u=this.a
s=this.r.f
u=u.x2
u.toString
r=s.a
l=s.b
s=s.c
C.c.w(u.a,u.d,r,l,s)
break
case C.e:this.Z(p,this.r.d)
u=this.a
s=this.r.d
u.an(u.y1,u.aE,s)
s=this.a
u=this.r.f
s=s.x2
s.toString
r=u.a
l=u.b
u=u.c
C.c.w(s.a,s.d,r,l,u)
break
case C.f:this.Z(p,this.r.e)
u=this.a
s=this.r.e
u.ad(u.y2,u.aE,s)
s=this.a
u=this.r.f
s=s.x2
s.toString
r=u.a
l=u.b
u=u.c
C.c.w(s.a,s.d,r,l,u)
break}switch(w.c){case C.d:break
case C.i:u=this.a
s=this.x.f
u=u.at
u.toString
r=s.a
l=s.b
s=s.c
C.c.w(u.a,u.d,r,l,s)
break
case C.e:this.Z(p,this.x.d)
u=this.a
s=this.x.d
u.an(u.bG,u.bH,s)
s=this.a
u=this.x.f
s=s.at
s.toString
r=u.a
l=u.b
u=u.c
C.c.w(s.a,s.d,r,l,u)
break
case C.f:this.Z(p,this.x.e)
u=this.a
s=this.x.e
u.ad(u.e8,u.bH,s)
s=this.a
u=this.x.f
s=s.at
s.toString
r=u.a
l=u.b
u=u.c
C.c.w(s.a,s.d,r,l,u)
break}switch(w.d){case C.d:break
case C.i:u=this.a
s=this.y.f
u=u.bI
u.toString
r=s.a
l=s.b
s=s.c
C.c.w(u.a,u.d,r,l,s)
break
case C.e:this.Z(p,this.y.d)
u=this.a
s=this.y.d
u.an(u.e9,u.bJ,s)
s=this.a
u=this.y.f
s=s.bI
s.toString
r=u.a
l=u.b
u=u.c
C.c.w(s.a,s.d,r,l,u)
break
case C.f:this.Z(p,this.y.e)
u=this.a
s=this.y.e
u.ad(u.ea,u.bJ,s)
s=this.a
u=this.y.f
s=s.bI
s.toString
r=u.a
l=u.b
u=u.c
C.c.w(s.a,s.d,r,l,u)
break}switch(w.e){case C.d:break
case C.i:u=this.a
s=this.z.f
u=u.bK
u.toString
r=s.a
l=s.b
s=s.c
C.c.w(u.a,u.d,r,l,s)
s=this.a
l=this.z.ch
s=s.bM
C.c.S(s.a,s.d,l)
break
case C.e:this.Z(p,this.z.d)
u=this.a
s=this.z.d
u.an(u.eb,u.bL,s)
s=this.a
u=this.z.f
s=s.bK
s.toString
r=u.a
l=u.b
u=u.c
C.c.w(s.a,s.d,r,l,u)
u=this.a
l=this.z.ch
u=u.bM
C.c.S(u.a,u.d,l)
break
case C.f:this.Z(p,this.z.e)
u=this.a
s=this.z.e
u.ad(u.ec,u.bL,s)
s=this.a
u=this.z.f
s=s.bK
s.toString
r=u.a
l=u.b
u=u.c
C.c.w(s.a,s.d,r,l,u)
u=this.a
l=this.z.ch
u=u.bM
C.c.S(u.a,u.d,l)
break}if(w.z>0){o=this.dx.e.length
u=this.a.en
C.c.W(u.a,u.d,o)
k=a.db.ga2()
for(u=this.dx.e,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.z)(u),++i){h=u[i]
r=this.a.cH
if(j>=r.length)return H.f(r,j)
g=r[j]
r=k.eZ(h.gbF(h))
l=r.a
f=r.b
e=r.c
e=r.A(0,Math.sqrt(l*l+f*f+e*e))
f=g.b
l=e.a
r=e.b
e=e.c
C.c.w(f.a,f.d,l,r,e)
e=h.gao(h)
r=g.c
l=e.gbX()
f=e.gbs()
e=e.gbC()
C.c.w(r.a,r.d,l,f,e);++j}}if(w.Q>0){o=this.dx.f.length
u=this.a.eo
C.c.W(u.a,u.d,o)
k=a.db.ga2()
for(u=this.dx.f,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.z)(u),++i){h=u[i]
r=this.a.cI
if(j>=r.length)return H.f(r,j)
g=r[j]
r=h.a
l=g.b
f=r.a
e=r.b
r=r.c
C.c.w(l.a,l.d,f,e,r)
r=k.b2(h.a)
e=g.c
C.c.w(e.a,e.d,r.a,r.b,r.c)
r=h.c
e=g.d
C.c.w(e.a,e.d,r.a,r.b,r.c)
r=h.d
e=g.e
C.c.S(e.a,e.d,r)
r=h.e
e=g.f
C.c.S(e.a,e.d,r)
r=h.f
e=g.r
C.c.S(e.a,e.d,r);++j}}if(w.ch>0){o=this.dx.r.length
u=this.a.ep
C.c.W(u.a,u.d,o)
k=a.db.ga2()
for(u=this.dx.r,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.z)(u),++i){h=u[i]
r=this.a.cJ
if(j>=r.length)return H.f(r,j)
g=r[j]
r=h.gcX(h)
l=g.b
f=r.gf5(r)
e=r.gf6(r)
r=r.gf8(r)
C.c.w(l.a,l.d,f,e,r)
r=h.gbF(h).lc()
e=g.c
f=r.gaq(r)
l=r.gar(r)
r=r.gas()
C.c.w(e.a,e.d,f,l,r)
r=k.b2(h.gcX(h))
l=g.d
C.c.w(l.a,l.d,r.a,r.b,r.c)
r=h.gao(h)
l=g.e
f=r.gbX()
e=r.gbs()
r=r.gbC()
C.c.w(l.a,l.d,f,e,r)
r=h.gla()
e=g.f
C.c.S(e.a,e.d,r)
r=h.gl8()
e=g.r
C.c.S(e.a,e.d,r)
r=h.gdZ()
e=g.x
C.c.S(e.a,e.d,r)
r=h.ge_()
e=g.y
C.c.S(e.a,e.d,r)
r=h.ge0()
e=g.z
C.c.S(e.a,e.d,r);++j}}if(w.cx>0){o=this.dx.x.length
u=this.a.eq
C.c.W(u.a,u.d,o)
k=a.db.ga2()
for(u=this.dx.x,s=u.length,r=[z],j=0,i=0;i<u.length;u.length===s||(0,H.z)(u),++i){h=u[i]
l=this.a.cK
if(j>=l.length)return H.f(l,j)
g=l[j]
l=h.gbo()
H.k(p,"$isb",r,"$asb")
if(!C.a.a_(p,l)){l.sbg(0,p.length)
C.a.h(p,l)}l=h.gbF(h)
f=g.d
e=l.gaq(l)
d=l.gar(l)
l=l.gas()
C.c.w(f.a,f.d,e,d,l)
l=h.gbY()
d=g.b
e=l.gaq(l)
f=l.gar(l)
l=l.gas()
C.c.w(d.a,d.d,e,f,l)
l=h.gbm(h)
f=g.c
e=l.gaq(l)
d=l.gar(l)
l=l.gas()
C.c.w(f.a,f.d,e,d,l)
l=k.eZ(h.gbF(h))
d=l.a
e=l.b
f=l.c
f=l.A(0,Math.sqrt(d*d+e*e+f*f))
e=g.e
d=f.a
l=f.b
f=f.c
C.c.w(e.a,e.d,d,l,f)
f=h.gao(h)
l=g.f
d=f.gbX()
e=f.gbs()
f=f.gbC()
C.c.w(l.a,l.d,d,e,f)
f=h.gbo()
l=f.gbh(f)
if(!l){l=g.x
C.c.W(l.a,l.d,1)}else{l=g.r
e=f.gbh(f)
d=l.a
l=l.d
if(!e)C.c.W(d,l,0)
else C.c.W(d,l,f.gbg(f))
l=g.x
C.c.W(l.a,l.d,0)}++j}}if(w.cy>0){o=this.dx.y.length
u=this.a.er
C.c.W(u.a,u.d,o)
k=a.db.ga2()
for(u=this.dx.y,s=u.length,r=[P.q],l=[z],j=0,i=0;i<u.length;u.length===s||(0,H.z)(u),++i){h=u[i]
f=this.a.cL
if(j>=f.length)return H.f(f,j)
g=f[j]
f=h.gbo()
H.k(p,"$isb",l,"$asb")
if(!C.a.a_(p,f)){f.sbg(0,p.length)
C.a.h(p,f)}c=k.t(0,h.ga2())
f=h.ga2()
e=$.b_
if(e==null){e=new V.Y(0,0,0)
$.b_=e}e=f.b2(e)
f=g.b
d=e.gf5(e)
b=e.gf6(e)
e=e.gf8(e)
C.c.w(f.a,f.d,d,b,e)
f=$.b_
if(f==null){f=new V.Y(0,0,0)
$.b_=f}f=c.b2(f)
e=g.c
C.c.w(e.a,e.d,f.a,f.b,f.c)
f=c.eE()
e=g.d
m=new Float32Array(H.bi(H.k(new V.eF(f.a,f.b,f.c,f.e,f.f,f.r,f.y,f.z,f.Q).ah(0,!0),"$isb",r,"$asb")))
C.c.f0(e.a,e.d,!1,m)
e=h.gao(h)
f=g.e
d=e.gbX()
b=e.gbs()
e=e.gbC()
C.c.w(f.a,f.d,d,b,e)
e=h.gbo()
f=e.gbh(e)
if(!f){f=g.r
C.c.W(f.a,f.d,1)}else{f=g.f
d=e.gbh(e)
b=f.a
f=f.d
if(!d)C.c.W(b,f,0)
else C.c.W(b,f,e.gbg(e))
f=g.r
C.c.W(f.a,f.d,0)}f=h.gdZ()
e=g.x
C.c.S(e.a,e.d,f)
f=h.ge_()
e=g.y
C.c.S(e.a,e.d,f)
f=h.ge0()
e=g.z
C.c.S(e.a,e.d,f);++j}}if(w.db>0){o=this.dx.z.length
u=this.a.es
C.c.W(u.a,u.d,o)
k=a.db.ga2()
for(u=this.dx.z,s=u.length,z=[z],j=0,i=0;i<u.length;u.length===s||(0,H.z)(u),++i){h=u[i]
r=this.a.cM
if(j>=r.length)return H.f(r,j)
g=r[j]
r=h.gbo()
H.k(p,"$isb",z,"$asb")
if(!C.a.a_(p,r)){r.sbg(0,p.length)
C.a.h(p,r)}r=h.gcX(h)
l=g.b
f=r.gf5(r)
e=r.gf6(r)
r=r.gf8(r)
C.c.w(l.a,l.d,f,e,r)
r=h.gbF(h)
e=g.c
f=r.gaq(r)
l=r.gar(r)
r=r.gas()
C.c.w(e.a,e.d,f,l,r)
r=h.gbY()
l=g.d
f=r.gaq(r)
e=r.gar(r)
r=r.gas()
C.c.w(l.a,l.d,f,e,r)
r=h.gbm(h)
e=g.e
f=r.gaq(r)
l=r.gar(r)
r=r.gas()
C.c.w(e.a,e.d,f,l,r)
r=k.b2(h.gcX(h))
l=g.f
C.c.w(l.a,l.d,r.a,r.b,r.c)
r=h.gbo()
l=r.gbh(r)
if(!l){r=g.x
C.c.W(r.a,r.d,1)}else{l=g.r
f=r.gbh(r)
e=l.a
l=l.d
if(!f)C.c.W(e,l,0)
else C.c.W(e,l,r.gbg(r))
r=g.x
C.c.W(r.a,r.d,0)}r=h.gao(h)
l=g.y
f=r.gbX()
e=r.gbs()
r=r.gbC()
C.c.w(l.a,l.d,f,e,r)
r=h.glj()
e=g.z
C.c.S(e.a,e.d,r)
r=h.glk()
e=g.Q
C.c.S(e.a,e.d,r)
r=h.gdZ()
e=g.ch
C.c.S(e.a,e.d,r)
r=h.ge_()
e=g.cx
C.c.S(e.a,e.d,r)
r=h.ge0()
e=g.cy
C.c.S(e.a,e.d,r);++j}}}switch(w.f){case C.d:break
case C.i:break
case C.e:this.Z(p,this.Q.d)
z=this.a
u=this.Q.d
z.an(z.ed,z.bN,u)
break
case C.f:this.Z(p,this.Q.e)
z=this.a
u=this.Q.e
z.ad(z.ee,z.bN,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db.ga2().eE()
a.Q=u}z=z.id
z.toString
z.ax(u.ah(0,!0))}if(w.dy){this.Z(p,this.ch)
z=this.a
u=this.ch
z.ad(z.ef,z.eg,u)
switch(w.r){case C.d:break
case C.i:z=this.a
u=this.cx.f
z=z.bO
z.toString
s=u.a
r=u.b
u=u.c
C.c.w(z.a,z.d,s,r,u)
break
case C.e:this.Z(p,this.cx.d)
z=this.a
u=this.cx.d
z.an(z.eh,z.bP,u)
u=this.a
z=this.cx.f
u=u.bO
u.toString
s=z.a
r=z.b
z=z.c
C.c.w(u.a,u.d,s,r,z)
break
case C.f:this.Z(p,this.cx.e)
z=this.a
u=this.cx.e
z.ad(z.ei,z.bP,u)
u=this.a
z=this.cx.f
u=u.bO
u.toString
s=z.a
r=z.b
z=z.c
C.c.w(u.a,u.d,s,r,z)
break}switch(w.x){case C.d:break
case C.i:z=this.a
u=this.cy.f
z=z.bR
z.toString
s=u.a
r=u.b
u=u.c
C.c.w(z.a,z.d,s,r,u)
u=this.a
r=this.cy.ch
u=u.bQ
C.c.S(u.a,u.d,r)
break
case C.e:this.Z(p,this.cy.d)
z=this.a
u=this.cy.d
z.an(z.ej,z.bS,u)
u=this.a
z=this.cy.f
u=u.bR
u.toString
s=z.a
r=z.b
z=z.c
C.c.w(u.a,u.d,s,r,z)
z=this.a
r=this.cy.ch
z=z.bQ
C.c.S(z.a,z.d,r)
break
case C.f:this.Z(p,this.cy.e)
z=this.a
u=this.cy.e
z.ad(z.ek,z.bS,u)
u=this.a
z=this.cy.f
u=u.bR
u.toString
s=z.a
r=z.b
z=z.c
C.c.w(u.a,u.d,s,r,z)
z=this.a
r=this.cy.ch
z=z.bQ
C.c.S(z.a,z.d,r)
break}}z=w.y
u=z!==C.d
if(u){switch(z){case C.d:break
case C.i:z=this.a
s=this.db.f
z=z.bT
C.c.S(z.a,z.d,s)
break
case C.e:this.Z(p,this.db.d)
z=this.a
s=this.db.d
z.an(z.el,z.bU,s)
s=this.a
z=this.db.f
s=s.bT
C.c.S(s.a,s.d,z)
break
case C.f:this.Z(p,this.db.e)
z=this.a
s=this.db.e
z.ad(z.em,z.bU,s)
s=this.a
z=this.db.f
s=s.bT
C.c.S(s.a,s.d,z)
break}C.c.cG(t,3042)
C.c.jb(t,770,771)}for(n=0;n<p.length;++n)p[n].bB(a)
z=a0.e
z.bB(a)
z.b0(a)
z.f_(a)
if(u)C.c.jw(t,3042)
for(n=0;n<p.length;++n)p[n].f_(a)
z=this.a
z.toString
C.c.f3(t,null)
z.x.jx()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.ds().at},
n:{
eE:function(){var z,y,x
z=new O.j7()
z.sh2(O.cX(V.ah))
z.e.bu(z.ghA(),z.ghB())
y=new O.b7(z,"emission")
y.c=C.d
y.f=new V.a7(0,0,0)
z.f=y
y=new O.b7(z,"ambient")
y.c=C.d
y.f=new V.a7(0,0,0)
z.r=y
y=new O.b7(z,"diffuse")
y.c=C.d
y.f=new V.a7(0,0,0)
z.x=y
y=new O.b7(z,"invDiffuse")
y.c=C.d
y.f=new V.a7(0,0,0)
z.y=y
y=new O.jc(z,"specular")
y.c=C.d
y.f=new V.a7(0,0,0)
y.ch=100
z.z=y
y=new O.j9(z,"bump")
y.c=C.d
z.Q=y
z.ch=null
y=new O.b7(z,"reflect")
y.c=C.d
y.f=new V.a7(0,0,0)
z.cx=y
y=new O.jb(z,"refract")
y.c=C.d
y.f=new V.a7(0,0,0)
y.ch=1
z.cy=y
y=new O.j8(z,"alpha")
y.c=C.d
y.f=1
z.db=y
y=new D.iM()
y.c3(D.a3)
y.sfL(H.c([],[D.em]))
y.sfN(H.c([],[D.cu]))
y.sfO(H.c([],[D.f1]))
y.sfP(H.c([],[D.f9]))
y.sfQ(H.c([],[D.fa]))
y.sfR(H.c([],[D.fb]))
y.Q=null
y.ch=null
y.dc(y.ghz(),y.ghT(),y.ghV())
z.dx=y
x=y.Q
if(x==null){x=D.L()
y.Q=x
y=x}else y=x
y.h(0,z.gia())
y=z.dx
x=y.ch
if(x==null){x=D.L()
y.ch=x
y=x}else y=x
y.h(0,z.gfU())
z.dy=null
return z}}},j8:{"^":"d7;0f,a,b,0c,0d,0e"},d7:{"^":"a;",
by:["fv",function(){}]},j9:{"^":"d7;a,b,0c,0d,0e"},b7:{"^":"d7;0f,a,b,0c,0d,0e",
dN:function(a){var z,y
if(!J.J(this.f,a)){z=this.f
this.f=a
y=new D.D(this.b+".color",z,a,this,[V.a7])
y.b=!0
this.a.aj(y)}},
by:["c2",function(){this.fv()
this.dN(new V.a7(1,1,1))}],
sao:function(a,b){var z
if(this.c===C.d){this.c=C.i
this.by()
z=this.a
z.a=null
z.aj(null)}this.dN(b)}},jb:{"^":"b7;0ch,0f,a,b,0c,0d,0e",
ii:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.D(this.b+".refraction",y,a,this,[P.q])
z.b=!0
this.a.aj(z)}},
by:function(){this.c2()
this.ii(1)}},jc:{"^":"b7;0ch,0f,a,b,0c,0d,0e",
cp:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.D(this.b+".shininess",y,a,this,[P.q])
z.b=!0
this.a.aj(z)}},
by:function(){this.c2()
this.cp(100)}},c5:{"^":"a;"}}],["","",,T,{"^":"",f8:{"^":"cT;"},kc:{"^":"a;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",bs:{"^":"a;",
b_:function(a){return!0},
i:function(a){return"all"},
$isaB:1},aB:{"^":"a;"},eD:{"^":"a;0a",
sa7:function(a){this.a=H.k(a,"$isb",[V.aB],"$asb")},
b_:["fu",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)if(z[x].b_(a))return!0
return!1}],
i:["de",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isaB:1},ax:{"^":"eD;0a",
b_:function(a){return!this.fu(a)},
i:function(a){return"!["+this.de(0)+"]"}},jG:{"^":"a;0a,0b",
b_:function(a){return this.a<=a&&this.b>=a},
i:function(a){var z,y
z=H.bb(this.a)
y=H.bb(this.b)
return z+".."+y},
$isaB:1,
n:{
R:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.e(P.u("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.b.I(a,0)
y=C.b.I(b,0)
x=new V.jG()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},jT:{"^":"a;0a",
sih:function(a){this.a=H.k(a,"$isH",[P.m,P.N],"$asH")},
fC:function(a){var z,y
if(a.a.length<=0)throw H.e(P.u("May not create a SetMatcher with zero characters."))
z=new H.aY(0,0,[P.m,P.N])
for(y=new H.d5(a,a.gp(a),0,[H.a4(a,"U",0)]);y.D();)z.q(0,y.d,!0)
this.sih(z)},
b_:function(a){return this.a.bD(a)},
i:function(a){return P.c4(this.a.gaF(),0,null)},
$isaB:1,
n:{
w:function(a){var z=new V.jT()
z.fC(a)
return z}}},dg:{"^":"a;a,b,0c,0d",
siy:function(a){this.c=H.k(a,"$isb",[V.dm],"$asb")},
k:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.dm(this.a.j(0,b))
w.sa7(H.c([],[V.aB]))
w.c=!1
C.a.h(this.c,w)
return w},
jC:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.b_(a))return w}return},
i:function(a){return this.b}},ff:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.dW(this.b,"\n","\\n")
y=H.dW(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},dl:{"^":"a;a,b,0c",
si6:function(a){var z=P.h
this.c=H.k(a,"$isH",[z,z],"$asH")},
aN:function(a,b,c){var z,y,x
H.k(c,"$isb",[P.h],"$asb")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.z)(c),++y){x=c[y]
this.c.q(0,x,b)}},
i:function(a){return this.b}},kh:{"^":"a;0a,0b,0c",
sir:function(a){this.a=H.k(a,"$isH",[P.h,V.dg],"$asH")},
siu:function(a){this.b=H.k(a,"$isH",[P.h,V.dl],"$asH")},
j:function(a,b){var z=this.a.l(0,b)
if(z==null){z=new V.dg(this,b)
z.siy(H.c([],[V.dm]))
z.d=null
this.a.q(0,b,z)}return z},
R:function(a){var z,y
z=this.b.l(0,a)
if(z==null){z=new V.dl(this,a)
y=P.h
z.si6(new H.aY(0,0,[y,y]))
this.b.q(0,a,z)}return z},
eY:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.ff])
y=this.c
x=[P.m]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.I(a,t)
r=y.jC(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.c4(w,0,null)
throw H.e(P.u("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.c4(w,0,null)
p=y.d
o=p.c.l(0,q)
u=new V.ff(o==null?p.b:o,q,t)}++t}}},
n:{
cy:function(){var z,y
z=new V.kh()
y=P.h
z.sir(new H.aY(0,0,[y,V.dg]))
z.siu(new H.aY(0,0,[y,V.dl]))
z.c=null
return z}}},dm:{"^":"eD;b,0c,0a",
i:function(a){return this.b.b+": "+this.de(0)}}}],["","",,X,{"^":"",ea:{"^":"a;",$isaK:1},ir:{"^":"f5;0a,0b,0c,0d,0e,0f,0r,0x",
gB:function(){var z=this.x
if(z==null){z=D.L()
this.x=z}return z}},jn:{"^":"a;0a,0b,0c,0d,0e,0f",
gB:function(){var z=this.f
if(z==null){z=D.L()
this.f=z}return z},
b4:[function(a){var z
H.d(a,"$isy")
z=this.f
if(!(z==null))z.J(a)},function(){return this.b4(null)},"kD","$1","$0","gdg",0,2,1],
saM:function(a){var z,y
if(!J.J(this.b,a)){z=this.b
if(z!=null)z.gB().M(0,this.gdg())
y=this.b
this.b=a
if(a!=null)a.gB().h(0,this.gdg())
z=new D.D("mover",y,this.b,this,[U.aa])
z.b=!0
this.b4(z)}},
$isaK:1,
$isea:1},f5:{"^":"a;"}}],["","",,V,{"^":"",
ni:function(a){P.kg(C.U,new V.nj(a))},
aU:{"^":"a;0d",
scb:function(a){this.d=H.k(a,"$isb",[[P.b,W.aW]],"$asb")},
bv:function(a){this.b=new P.iy(C.X)
this.c=null
this.scb(H.c([],[[P.b,W.aW]]))},
O:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.c([],[W.aW]))
y=a.split("\n")
for(z=y.length,x=[W.aW],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.c([],x))
t=document.createElement("div")
t.className="codePart"
H.C(u)
s=this.b.h8(u,0,u.length)
r=s==null?u:s
C.k.fm(t,H.dW(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gaG(this.d),t)}},
eM:function(a){var z,y,x,w
H.k(a,"$isb",[P.h],"$asb")
this.scb(H.c([],[[P.b,W.aW]]))
z=C.a.k(a,"\n")
y=this.c
if(y==null){y=this.bE()
this.c=y}for(y=y.eY(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)this.bW(y[w])}},
nj:{"^":"n:50;a",
$1:function(a){H.d(a,"$isbc")
P.dV(C.j.eX(this.a.gjI(),2)+" fps")}},
i2:{"^":"aU;a,0b,0c,0d",
bW:function(a){switch(a.a){case"Class":this.O(a.b,"#551")
break
case"Comment":this.O(a.b,"#777")
break
case"Id":this.O(a.b,"#111")
break
case"Num":this.O(a.b,"#191")
break
case"Reserved":this.O(a.b,"#119")
break
case"String":this.O(a.b,"#171")
break
case"Symbol":this.O(a.b,"#616")
break
case"Type":this.O(a.b,"#B11")
break
case"Whitespace":this.O(a.b,"#111")
break}},
bE:function(){var z,y,x,w
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
x=new V.ax()
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
x=new V.ax()
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
x.d=x.a.R("Num")
x=z.j(0,"Float")
x.d=x.a.R("Num")
x=z.j(0,"Sym")
x.d=x.a.R("Symbol")
x=z.j(0,"CloseDoubleStr")
x.d=x.a.R("String")
x=z.j(0,"CloseSingleStr")
x.d=x.a.R("String")
x=z.j(0,"EndComment")
x.d=x.a.R("Comment")
x=z.j(0,"Whitespace")
x.d=x.a.R("Whitespace")
x=z.j(0,"Id")
y=x.a.R("Id")
x.d=y
x=[P.h]
y.aN(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.aN(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.aN(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
is:{"^":"aU;a,0b,0c,0d",
bW:function(a){switch(a.a){case"Builtin":this.O(a.b,"#411")
break
case"Comment":this.O(a.b,"#777")
break
case"Id":this.O(a.b,"#111")
break
case"Num":this.O(a.b,"#191")
break
case"Preprocess":this.O(a.b,"#737")
break
case"Reserved":this.O(a.b,"#119")
break
case"Symbol":this.O(a.b,"#611")
break
case"Type":this.O(a.b,"#171")
break
case"Whitespace":this.O(a.b,"#111")
break}},
bE:function(){var z,y,x,w
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
x=new V.ax()
w=[V.aB]
x.sa7(H.c([],w))
C.a.h(y.a,x)
y=V.w(new H.v("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Preprocess")
x=V.w(new H.v("#"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").k(0,"Preprocess")
y=new V.ax()
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
y.d=y.a.R("Num")
y=z.j(0,"Float")
y.d=y.a.R("Num")
y=z.j(0,"Sym")
y.d=y.a.R("Symbol")
y=z.j(0,"EndComment")
y.d=y.a.R("Comment")
y=z.j(0,"EndPreprocess")
y.d=y.a.R("Preprocess")
y=z.j(0,"Whitespace")
y.d=y.a.R("Whitespace")
y=z.j(0,"Id")
x=y.a.R("Id")
y.d=x
y=[P.h]
x.aN(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.aN(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.aN(0,"Builtin",H.c(["gl_FragColor","gl_Position"],y))
return z}},
it:{"^":"aU;a,0b,0c,0d",
bW:function(a){switch(a.a){case"Attr":this.O(a.b,"#911")
this.O("=","#111")
break
case"Id":this.O(a.b,"#111")
break
case"Other":this.O(a.b,"#111")
break
case"Reserved":this.O(a.b,"#119")
break
case"String":this.O(a.b,"#171")
break
case"Symbol":this.O(a.b,"#616")
break}},
bE:function(){var z,y,x
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
x=new V.ax()
x.sa7(H.c([],[V.aB]))
C.a.h(y.a,x)
y=V.w(new H.v('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.R("a","z")
C.a.h(x.a,y)
y=V.R("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Sym")
y.d=y.a.R("Symbol")
y=z.j(0,"CloseStr")
y.d=y.a.R("String")
y=z.j(0,"Id")
x=y.a.R("Id")
y.d=x
x.aN(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
x=z.j(0,"Attr")
x.d=x.a.R("Attr")
x=z.j(0,"Other")
x.d=x.a.R("Other")
return z}},
jp:{"^":"aU;a,0b,0c,0d",
eM:function(a){H.k(a,"$isb",[P.h],"$asb")
this.scb(H.c([],[[P.b,W.aW]]))
this.O(C.a.k(a,"\n"),"#111")},
bW:function(a){},
bE:function(){return}},
jD:{"^":"a;a,b,0c",
dU:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.l(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.fu().gcZ().l(0,H.i(z))
if(y==null)if(d){c.$0()
this.dS(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.e_(this.c).h(0,v)
t=W.iB("radio")
t.checked=x
t.name=z
z=W.ac
W.a1(t,"change",H.l(new V.jE(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
C.F.E(v,t)
s=w.createElement("span")
s.textContent=b
C.F.E(v,s)
J.e_(this.c).h(0,w.createElement("br"))},
ba:function(a,b,c){return this.dU(a,b,c,!1)},
dS:function(a){var z,y,x,w,v
z=P.fu()
y=P.h
x=P.iU(z.gcZ(),y,y)
x.q(0,this.a,a)
w=z.eS(0,x)
y=window.history
v=w.i(0)
y.toString;(y&&C.W).i8(y,new P.lM([],[]).d3(""),"",v)}},
jE:{"^":"n:19;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dS(this.d)}}},
jZ:{"^":"a;0a,0b",
fE:function(a,b){var z,y,x,w,v,u,t
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
t=W.ac
W.a1(z,"scroll",H.l(new V.k1(x),{func:1,ret:-1,args:[t]}),!1,t)},
dW:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.k(a,"$isb",[P.h],"$asb")
this.il()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.eY(C.a.jO(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
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
if(H.hu(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.f(r,1)
q.href=H.C(r[1])
q.textContent=H.C(r[0])
C.k.E(y,q)}else{p=P.c9(C.I,s,C.m,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.i(p)
q.textContent=s
C.k.E(y,q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
C.k.E(y,t)
break}}C.k.E(this.a,y)},
fd:function(a){var z,y,x,w
z=new V.i2("dart")
z.bv("dart")
y=new V.is("glsl")
y.bv("glsl")
x=new V.it("html")
x.bv("html")
w=C.a.jE(H.c([z,y,x],[V.aU]),new V.k2(a))
if(w!=null)return w
z=new V.jp("plain")
z.bv("plain")
return z},
dV:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.k(a2,"$isb",[P.h],"$asb")
z=H.c([],[P.m])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.bR(w).a5(w,"+")){C.a.q(a2,x,C.b.ay(w,1))
C.a.h(z,1)
y=!0}else if(C.b.a5(w,"-")){C.a.q(a2,x,C.b.ay(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.fd(a0)
v.eM(a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
C.k.E(t,s)
C.k.E(this.a,t)
r=P.c9(C.I,a,C.m,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.e1(null)
n.href="#"+H.i(r)
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
for(b=C.a.gV(w);b.D();)C.x.E(h,b.gK())
C.n.E(j,i)
C.n.E(j,h)
C.o.E(s,j)}},
j_:function(a){var z,y,x,w,v,u,t
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
w=C.o.hn(y,-1)
x=H.d((w&&C.n).dD(w,-1),"$iscx").style
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
t=H.d(C.n.dD(w,-1),"$iscx")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto";(t&&C.x).E(t,u)}},
il:function(){var z,y,x,w
if(this.b!=null)return
z=V.cy()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Bold")
x=V.w(new H.v("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Bold").k(0,"Bold")
x=new V.ax()
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
x=new V.ax()
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
x=new V.ax()
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
y=new V.ax()
y.sa7(H.c([],w))
C.a.h(x.a,y)
x=V.w(new H.v("|]"))
C.a.h(y.a,x)
x=z.j(0,"LinkTail").k(0,"LinkEnd")
y=V.w(new H.v("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkTail").k(0,"LinkTail")
y=new V.ax()
y.sa7(H.c([],w))
C.a.h(x.a,y)
x=V.w(new H.v("|]"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Start").k(0,"Other").a,new V.bs())
x=z.j(0,"Other").k(0,"Other")
y=new V.ax()
y.sa7(H.c([],w))
C.a.h(x.a,y)
x=V.w(new H.v("*_`["))
C.a.h(y.a,x)
x=z.j(0,"BoldEnd")
x.d=x.a.R("Bold")
x=z.j(0,"ItalicEnd")
x.d=x.a.R("Italic")
x=z.j(0,"CodeEnd")
x.d=x.a.R("Code")
x=z.j(0,"LinkEnd")
x.d=x.a.R("Link")
x=z.j(0,"Other")
x.d=x.a.R("Other")
this.b=z},
n:{
k_:function(a,b){var z=new V.jZ()
z.fE(a,!0)
return z}}},
k1:{"^":"n:19;a",
$1:function(a){P.fd(C.y,new V.k0(this.a))}},
k0:{"^":"n:0;a",
$0:function(){var z,y,x
z=C.j.au(document.documentElement.scrollTop)
y=this.a.style
x=H.i(-0.01*z)+"px"
y.top=x}},
k2:{"^":"n:52;a",
$1:function(a){return H.d(a,"$isaU").a===this.a}}}],["","",,U,{"^":"",
dL:function(a,b,c,d,e,f,g,h){var z,y,x,w,v,u,t,s
z=c>1?1:c
y=d>1?1:d
x=e>1?1:e
w=new V.a7(z,y,x)
v=U.d0(null)
v.h(0,U.bU(V.eJ(0,0,2)))
x=new U.eY()
x.a=0
x.b=0
x.c=0
x.d=0
x.e=0
x.f=0
x.r=0
x.sf7(0)
x.seO(0)
x.seT(0)
z=x.d
if(!$.o.$2(z,f)){u=x.d
x.d=f
z=new D.D("deltaYaw",u,f,x,[P.q])
z.b=!0
x.L(z)}z=x.e
if(!$.o.$2(z,g)){u=x.e
x.e=g
z=new D.D("deltaPitch",u,g,x,[P.q])
z.b=!0
x.L(z)}z=x.f
if(!$.o.$2(z,h)){u=x.f
x.f=h
z=new D.D("deltaRoll",u,h,x,[P.q])
z.b=!0
x.L(z)}v.h(0,x)
t=E.d_(null,!0,null,"",null,null)
z=U.d0(null)
z.h(0,U.bU(V.d9(0.1,0.1,0.1,1)))
z.h(0,v)
t.saM(z)
t.sab(0,F.ht(8,null,1,8))
z=O.eE()
z.f.sao(0,w)
t.sbn(z)
s=new D.cu()
s.c=new V.a7(1,1,1)
s.d=1
s.e=0
s.f=0
s.a=V.eS()
u=s.b
s.b=v
v.gB().h(0,s.gfM())
z=new D.D("mover",u,s.b,s,[U.aa])
z.b=!0
s.ai(z)
s.c=w
if(!w.v(0,w)){u=s.c
s.c=w
z=new D.D("color",u,w,s,[V.a7])
z.b=!0
s.ai(z)}z=s.d
if(!$.o.$2(z,1)){u=s.d
s.d=1
z=new D.D("attenuation0",u,1,s,[P.q])
z.b=!0
s.ai(z)}z=s.e
if(!$.o.$2(z,0.5)){u=s.e
s.e=0.5
z=new D.D("attenuation1",u,0.5,s,[P.q])
z.b=!0
s.ai(z)}z=s.f
if(!$.o.$2(z,0.15)){u=s.f
s.f=0.15
z=new D.D("attenuation2",u,0.15,s,[P.q])
z.b=!0
s.ai(z)}a.dx.h(0,s)
b.d.h(0,t)},
hp:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=V.k_("Test 021",!0)
y=W.eb(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
C.k.E(z.a,y)
x=[P.h]
z.dW(H.c(["Test of the Material Lighting shader with multiple moving point lights. ","Emissive spheres are added at the lights sources."],x))
z.j_(H.c(["shapes"],x))
z.dW(H.c(["\xab[Back to Tests|../]"],x))
x=document
w=C.z.d7(x,"testCanvas")
if(w==null)H.r(P.u("Failed to find an element with the identifier, testCanvas."))
v=E.ke(w,!0,!0,!0,!1)
u=E.d_(null,!0,null,"",null,null)
u.saM(U.bU(V.b8()))
u.sab(0,F.hw(30,1,15,0.5))
t=E.d_(null,!0,null,"",null,null)
t.saM(U.bU(V.d9(3,3,3,1)))
s=F.dP(1,null,null,1)
s.cN()
t.sab(0,s)
r=U.d0(null)
s=v.r
q=new U.kI()
p=U.cY()
p.sd5(0,!0)
p.scS(6.283185307179586)
p.scU(0)
p.sa3(0,0)
p.scT(100)
p.sX(0)
p.scF(0.5)
q.b=p
o=q.gaT()
p.gB().h(0,o)
p=U.cY()
p.sd5(0,!0)
p.scS(6.283185307179586)
p.scU(0)
p.sa3(0,0)
p.scT(100)
p.sX(0)
p.scF(0.5)
q.c=p
p.gB().h(0,o)
q.d=null
q.e=!1
q.f=!1
q.r=!1
q.x=2.5
q.y=2.5
q.z=2
q.Q=4
q.cx=!1
q.ch=!1
q.cy=0
q.db=0
q.dx=null
q.dy=0
q.fr=null
q.fx=null
n=new X.aD(!1,!1,!1)
m=q.d
q.d=n
p=[X.aD]
o=new D.D("modifiers",m,n,q,p)
o.b=!0
q.L(o)
o=q.f
if(o!==!1){q.f=!1
o=new D.D("invertX",o,!1,q,[P.N])
o.b=!0
q.L(o)}o=q.r
if(o!==!1){q.r=!1
o=new D.D("invertY",o,!1,q,[P.N])
o.b=!0
q.L(o)}q.bb(s)
r.h(0,q)
s=v.r
q=new U.kH()
o=U.cY()
o.sd5(0,!0)
o.scS(6.283185307179586)
o.scU(0)
o.sa3(0,0)
o.scT(100)
o.sX(0)
o.scF(0.2)
q.b=o
o.gB().h(0,q.gaT())
q.c=null
q.d=!1
q.e=2.5
q.f=2
q.r=4
q.y=!1
q.x=!1
q.z=0
q.Q=null
q.ch=0
q.cx=null
q.cy=null
n=new X.aD(!0,!1,!1)
m=q.c
q.c=n
o=new D.D("modifiers",m,n,q,p)
o.b=!0
q.L(o)
q.bb(s)
r.h(0,q)
s=v.r
q=new U.kJ()
q.c=0.01
q.d=0
q.e=0
n=new X.aD(!1,!1,!1)
q.b=n
p=new D.D("modifiers",null,n,q,p)
p.b=!0
q.L(p)
q.bb(s)
r.h(0,q)
r.h(0,U.bU(V.eJ(0,0,5)))
l=O.eE()
s=l.r
s.sao(0,new V.a7(0.4,0.4,0.4))
s=l.x
s.sao(0,new V.a7(0.4,0.4,0.4))
s=l.z
s.sao(0,new V.a7(0.3,0.3,0.3))
s=l.z
if(s.c===C.d){s.c=C.i
s.c2()
s.cp(100)
q=s.a
q.a=null
q.aj(null)}s.cp(100)
k=new M.ig()
k.sh6(0,O.cX(E.au))
k.d.bu(k.ghD(),k.ghE())
k.e=null
k.f=null
k.r=null
k.x=null
j=new X.jn()
j.c=1.0471975511965976
j.d=0.1
j.e=2000
j.saM(null)
s=j.c
if(!$.o.$2(s,1.0471975511965976)){m=j.c
j.c=1.0471975511965976
s=new D.D("fov",m,1.0471975511965976,j,[P.q])
s.b=!0
j.b4(s)}s=j.d
if(!$.o.$2(s,0.1)){m=j.d
j.d=0.1
s=new D.D("near",m,0.1,j,[P.q])
s.b=!0
j.b4(s)}s=j.e
if(!$.o.$2(s,2000)){m=j.e
j.e=2000
s=new D.D("far",m,2000,j,[P.q])
s.b=!0
j.b4(s)}s=k.a
if(s!==j){if(s!=null)s.gB().M(0,k.gaz())
m=k.a
k.a=j
j.gB().h(0,k.gaz())
s=new D.D("camera",m,k.a,k,[X.ea])
s.b=!0
k.aQ(s)}i=new X.ir()
s=new V.bu(0,0,0,1)
i.a=s
i.b=!0
i.c=2000
i.d=!0
i.e=0
i.f=!1
s=$.eX
if(s==null){s=V.eW(0,0,1,1)
$.eX=s}i.r=s
s=k.b
if(s!==i){if(s!=null)s.gB().M(0,k.gaz())
m=k.b
k.b=i
i.gB().h(0,k.gaz())
s=new D.D("target",m,k.b,k,[X.f5])
s.b=!0
k.aQ(s)}k.sbn(null)
k.sbn(l)
k.d.h(0,t)
k.d.h(0,u)
k.a.saM(r)
s=v.d
if(s!==k){if(s!=null)s.gB().M(0,v.gdf())
v.d=k
k.gB().h(0,v.gdf())
v.fH()}U.dL(l,k,1,0,0,0.3,0,0)
U.dL(l,k,0,1,0,0,0.4,0)
U.dL(l,k,0,0,1,0.5,0.5,0)
s=new V.jD("shapes",!0)
x=C.z.d7(x,"shapes")
s.c=x
if(x==null)H.r("Failed to find shapes for RadioGroup")
s.ba(0,"Cube",new U.n5(u))
s.ba(0,"Cylinder",new U.n6(u))
s.ba(0,"Cone",new U.n7(u))
s.ba(0,"Sphere",new U.n8(u))
s.dU(0,"Toroid",new U.n9(u),!0)
s.ba(0,"Knot",new U.na(u))
x=v.z
if(x==null){x=D.L()
v.z=x}s={func:1,ret:-1,args:[D.y]}
q=H.l(new U.nb(z,l),s)
if(x.b==null)x.sb7(H.c([],[s]))
x=x.b;(x&&C.a).h(x,q)
V.ni(v)},
n5:{"^":"n:0;a",
$0:function(){this.a.sab(0,F.dP(1,null,null,1))}},
n6:{"^":"n:0;a",
$0:function(){this.a.sab(0,F.hh(1,!0,!0,1,40,1))}},
n7:{"^":"n:0;a",
$0:function(){this.a.sab(0,F.hh(1,!0,!1,1,40,0))}},
n8:{"^":"n:0;a",
$0:function(){this.a.sab(0,F.ht(6,null,1,6))}},
n9:{"^":"n:0;a",
$0:function(){this.a.sab(0,F.hw(30,1,15,0.5))}},
na:{"^":"n:0;a",
$0:function(){this.a.sab(0,F.n2(120,1,2,12,0.3,3))}},
nb:{"^":"n:8;a,b",
$1:function(a){var z,y,x,w
H.d(a,"$isy")
z=this.a
y=this.b
x=y.a
w=[P.h]
z.dV("Vertex Shader","glsl",0,H.c((x==null?null:x.c).split("\n"),w))
y=y.a
z.dV("Fragment Shader","glsl",0,H.c((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.P=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ev.prototype
return J.iG.prototype}if(typeof a=="string")return J.bZ.prototype
if(a==null)return J.ew.prototype
if(typeof a=="boolean")return J.iF.prototype
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c_.prototype
return a}if(a instanceof P.a)return a
return J.cJ(a)}
J.bo=function(a){if(typeof a=="string")return J.bZ.prototype
if(a==null)return a
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c_.prototype
return a}if(a instanceof P.a)return a
return J.cJ(a)}
J.dS=function(a){if(a==null)return a
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.c_.prototype
return a}if(a instanceof P.a)return a
return J.cJ(a)}
J.mQ=function(a){if(typeof a=="number")return J.bY.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.c6.prototype
return a}
J.mR=function(a){if(typeof a=="number")return J.bY.prototype
if(typeof a=="string")return J.bZ.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.c6.prototype
return a}
J.bR=function(a){if(typeof a=="string")return J.bZ.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.c6.prototype
return a}
J.X=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.c_.prototype
return a}if(a instanceof P.a)return a
return J.cJ(a)}
J.J=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.P(a).v(a,b)}
J.hx=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mQ(a).T(a,b)}
J.dY=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mR(a).t(a,b)}
J.hy=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.n1(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bo(a).l(a,b)}
J.hz=function(a,b,c,d){return J.X(a).fZ(a,b,c,d)}
J.hA=function(a,b){return J.bR(a).I(a,b)}
J.ce=function(a,b){return J.X(a).i3(a,b)}
J.cP=function(a,b,c){return J.X(a).i7(a,b,c)}
J.dZ=function(a,b){return J.X(a).E(a,b)}
J.hB=function(a,b){return J.bR(a).a1(a,b)}
J.cQ=function(a,b,c){return J.bo(a).jj(a,b,c)}
J.cf=function(a,b){return J.dS(a).a8(a,b)}
J.hC=function(a,b,c,d){return J.X(a).jB(a,b,c,d)}
J.hD=function(a){return J.X(a).gj8(a)}
J.e_=function(a){return J.X(a).gcC(a)}
J.bS=function(a){return J.P(a).gY(a)}
J.b4=function(a){return J.dS(a).gV(a)}
J.as=function(a){return J.bo(a).gp(a)}
J.hE=function(a){return J.X(a).gkc(a)}
J.hF=function(a){return J.X(a).gkq(a)}
J.cR=function(a,b){return J.X(a).b3(a,b)}
J.e0=function(a){return J.dS(a).ke(a)}
J.hG=function(a,b){return J.X(a).kj(a,b)}
J.hH=function(a,b){return J.X(a).skv(a,b)}
J.hI=function(a,b,c){return J.X(a).fl(a,b,c)}
J.hJ=function(a,b,c){return J.bR(a).u(a,b,c)}
J.hK=function(a){return J.bR(a).ku(a)}
J.af=function(a){return J.P(a).i(a)}
I.a5=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.ch.prototype
C.q=W.cW.prototype
C.k=W.aW.prototype
C.T=W.i7.prototype
C.V=W.iu.prototype
C.W=W.iv.prototype
C.z=W.ix.prototype
C.Y=J.M.prototype
C.a=J.b6.prototype
C.h=J.ev.prototype
C.r=J.ew.prototype
C.j=J.bY.prototype
C.b=J.bZ.prototype
C.a4=J.c_.prototype
C.F=W.iL.prototype
C.aa=W.jh.prototype
C.L=J.jo.prototype
C.M=W.jF.prototype
C.c=P.dd.prototype
C.x=W.cx.prototype
C.o=W.ka.prototype
C.n=W.kb.prototype
C.C=J.c6.prototype
C.N=W.bI.prototype
C.O=W.l4.prototype
C.Q=new P.hO(!1)
C.P=new P.hN(C.Q)
C.R=new P.jm()
C.S=new P.kR()
C.l=new P.lC()
C.d=new A.cj(0,"ColorSourceType.None")
C.i=new A.cj(1,"ColorSourceType.Solid")
C.e=new A.cj(2,"ColorSourceType.Texture2D")
C.f=new A.cj(3,"ColorSourceType.TextureCube")
C.y=new P.bv(0)
C.U=new P.bv(5e6)
C.X=new P.iz("element",!0,!1,!1,!1)
C.Z=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.a_=function(hooks) {
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
C.D=function(hooks) { return hooks; }

C.a0=function(getTagFallback) {
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
C.a1=function() {
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
C.a2=function(hooks) {
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
C.a3=function(hooks) {
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
C.E=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.G=H.c(I.a5([127,2047,65535,1114111]),[P.m])
C.t=H.c(I.a5([0,0,32776,33792,1,10240,0,0]),[P.m])
C.a5=H.c(I.a5(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.u=H.c(I.a5([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.v=H.c(I.a5([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.a6=H.c(I.a5(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.H=H.c(I.a5([]),[P.h])
C.a7=H.c(I.a5([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.I=H.c(I.a5([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.w=H.c(I.a5([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.J=H.c(I.a5([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.a8=H.c(I.a5([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.K=H.c(I.a5([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.A=H.c(I.a5(["bind","if","ref","repeat","syntax"]),[P.h])
C.B=H.c(I.a5(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.a9=new H.i_(0,{},C.H,[P.h,P.h])
C.m=new P.kK(!1)
$.az=0
$.bt=null
$.e5=null
$.dH=!1
$.hm=null
$.he=null
$.hs=null
$.cI=null
$.cL=null
$.dT=null
$.bj=null
$.bN=null
$.bO=null
$.dI=!1
$.S=C.l
$.aJ=null
$.cZ=null
$.eq=null
$.ep=null
$.ek=null
$.ej=null
$.ei=null
$.eh=null
$.o=V.jd()
$.eK=null
$.eR=null
$.b_=null
$.eX=null
$.fy=null
$.fD=null
$.fA=null
$.fB=null
$.fC=null
$.fz=null
$.eQ=null
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
I.$lazy(y,x,w)}})(["eg","$get$eg",function(){return H.hl("_$dart_dartClosure")},"d2","$get$d2",function(){return H.hl("_$dart_js")},"fh","$get$fh",function(){return H.aF(H.cz({
toString:function(){return"$receiver$"}}))},"fi","$get$fi",function(){return H.aF(H.cz({$method$:null,
toString:function(){return"$receiver$"}}))},"fj","$get$fj",function(){return H.aF(H.cz(null))},"fk","$get$fk",function(){return H.aF(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"fo","$get$fo",function(){return H.aF(H.cz(void 0))},"fp","$get$fp",function(){return H.aF(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fm","$get$fm",function(){return H.aF(H.fn(null))},"fl","$get$fl",function(){return H.aF(function(){try{null.$method$}catch(z){return z.message}}())},"fr","$get$fr",function(){return H.aF(H.fn(void 0))},"fq","$get$fq",function(){return H.aF(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dC","$get$dC",function(){return P.l5()},"bP","$get$bP",function(){return[]},"fx","$get$fx",function(){return P.kO()},"fK","$get$fK",function(){return H.jf(H.bi(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"h2","$get$h2",function(){return P.jK("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"ha","$get$ha",function(){return P.mp()},"ef","$get$ef",function(){return{}},"fO","$get$fO",function(){return P.eA(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)},"dD","$get$dD",function(){return P.ez(P.h,P.bW)},"fG","$get$fG",function(){return Z.ap(0)},"fE","$get$fE",function(){return Z.ap(511)},"aQ","$get$aQ",function(){return Z.ap(1)},"aP","$get$aP",function(){return Z.ap(2)},"aO","$get$aO",function(){return Z.ap(4)},"aR","$get$aR",function(){return Z.ap(8)},"aS","$get$aS",function(){return Z.ap(16)},"bG","$get$bG",function(){return Z.ap(32)},"bH","$get$bH",function(){return Z.ap(64)},"fF","$get$fF",function(){return Z.ap(96)},"bg","$get$bg",function(){return Z.ap(128)},"aN","$get$aN",function(){return Z.ap(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.F},{func:1,ret:-1,opt:[D.y]},{func:1,ret:-1,args:[D.y]},{func:1,ret:-1},{func:1,ret:-1,args:[W.aw]},{func:1,ret:P.F,args:[F.a8]},{func:1,ret:P.F,args:[,,]},{func:1,ret:P.F,args:[F.ag,P.q,P.q]},{func:1,ret:P.F,args:[D.y]},{func:1,ret:-1,args:[P.m,[P.p,E.au]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.be]},{func:1,ret:-1,args:[W.ac]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:-1,args:[P.m,[P.p,V.ah]]},{func:1,ret:-1,args:[P.m,[P.p,U.aa]]},{func:1,ret:P.q},{func:1,ret:-1,args:[P.m,[P.p,D.a3]]},{func:1,args:[,]},{func:1,ret:P.F,args:[W.ac]},{func:1,ret:P.N,args:[W.Q,P.h,P.h,W.c8]},{func:1,ret:V.Y,args:[P.q]},{func:1,ret:P.F,args:[{func:1,ret:-1,args:[D.y]}]},{func:1,ret:P.N,args:[W.B]},{func:1,ret:P.q,args:[P.q,P.q]},{func:1,ret:P.N,args:[W.aE]},{func:1,ret:P.N,args:[P.h]},{func:1,ret:-1,args:[W.bA]},{func:1,ret:P.h,args:[P.m]},{func:1,ret:P.F,args:[,]},{func:1,ret:P.q,args:[P.q]},{func:1,args:[W.ac]},{func:1,ret:P.F,args:[P.ak]},{func:1,ret:P.O,args:[,,]},{func:1,ret:P.O,args:[P.m]},{func:1,ret:P.F,args:[P.h,,]},{func:1,ret:P.N,args:[P.q,P.q]},{func:1,ret:-1,args:[W.bI]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:P.N,args:[[P.p,D.a3]]},{func:1,ret:P.F,args:[P.h]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:-1,args:[P.h,P.m]},{func:1,ret:[P.H,P.h,P.h],args:[[P.H,P.h,P.h],P.h]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:-1,args:[W.B,W.B]},{func:1,ret:P.m,args:[[P.b,P.m],P.m]},{func:1,ret:[P.aT,,],args:[,]},{func:1,ret:P.F,args:[,],opt:[,]},{func:1,ret:P.F,args:[P.bc]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,ret:P.N,args:[V.aU]},{func:1,args:[P.h]},{func:1,args:[,P.h]},{func:1,ret:W.Q,args:[W.B]}]
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
if(x==y)H.nm(d||a)
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
Isolate.a5=a.a5
Isolate.dQ=a.dQ
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
if(typeof dartMainRunner==="function")dartMainRunner(U.hp,[])
else U.hp([])})})()
//# sourceMappingURL=test.dart.js.map
