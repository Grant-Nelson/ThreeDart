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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.dM"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dM"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.dM(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dO=function(){}
var dart=[["","",,H,{"^":"",nx:{"^":"a;a"}}],["","",,J,{"^":"",
dS:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cJ:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dR==null){H.mX()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.e(P.cz("Return interceptor for "+H.i(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$d1()]
if(v!=null)return v
v=H.n2(a)
if(v!=null)return v
if(typeof a=="function")return C.a4
y=Object.getPrototypeOf(a)
if(y==null)return C.L
if(y===Object.prototype)return C.L
if(typeof w=="function"){Object.defineProperty(w,$.$get$d1(),{value:C.C,enumerable:false,writable:true,configurable:true})
return C.C}return C.C},
M:{"^":"a;",
v:function(a,b){return a===b},
gY:function(a){return H.bD(a)},
i:["fo",function(a){return"Instance of '"+H.b8(a)+"'"}],
"%":"CanvasRenderingContext2D|DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo|WebGLRenderbuffer|WebGLTexture"},
iC:{"^":"M;",
i:function(a){return String(a)},
gY:function(a){return a?519018:218159},
$isN:1},
ev:{"^":"M;",
v:function(a,b){return null==b},
i:function(a){return"null"},
gY:function(a){return 0},
$isE:1},
d2:{"^":"M;",
gY:function(a){return 0},
i:["fq",function(a){return String(a)}]},
jl:{"^":"d2;"},
c4:{"^":"d2;"},
bY:{"^":"d2;",
i:function(a){var z=a[$.$get$ef()]
if(z==null)return this.fq(a)
return"JavaScript function for "+H.i(J.af(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbU:1},
b5:{"^":"M;$ti",
h:function(a,b){H.x(b,H.t(a,0))
if(!!a.fixed$length)H.r(P.W("add"))
a.push(b)},
kc:function(a,b){var z
if(!!a.fixed$length)H.r(P.W("removeAt"))
z=a.length
if(b>=z)throw H.e(P.c2(b,null,null))
return a.splice(b,1)[0]},
N:function(a,b){var z
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
jM:function(a){return this.k(a,"")},
jE:function(a,b,c,d){var z,y,x
H.x(b,d)
H.l(c,{func:1,ret:d,args:[d,H.t(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.e(P.aI(a))}return y},
jD:function(a,b,c){var z,y,x
H.l(b,{func:1,ret:P.N,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.e(P.aI(a))}throw H.e(H.co())},
jC:function(a,b){return this.jD(a,b,null)},
a8:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
fn:function(a,b,c){if(b<0||b>a.length)throw H.e(P.a1(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.e(P.a1(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.t(a,0)])
return H.c(a.slice(b,c),[H.t(a,0)])},
gjB:function(a){if(a.length>0)return a[0]
throw H.e(H.co())},
gaA:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.e(H.co())},
e1:function(a,b){var z,y
H.l(b,{func:1,ret:P.N,args:[H.t(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.e(P.aI(a))}return!1},
a_:function(a,b){var z
for(z=0;z<a.length;++z)if(J.J(a[z],b))return!0
return!1},
i:function(a){return P.d0(a,"[","]")},
gV:function(a){return new J.ay(a,a.length,0,[H.t(a,0)])},
gY:function(a){return H.bD(a)},
gp:function(a){return a.length},
sp:function(a,b){if(!!a.fixed$length)H.r(P.W("set length"))
if(b<0)throw H.e(P.a1(b,0,null,"newLength",null))
a.length=b},
l:function(a,b){if(b>=a.length||b<0)throw H.e(H.bk(a,b))
return a[b]},
q:function(a,b,c){H.x(c,H.t(a,0))
if(!!a.immutable$list)H.r(P.W("indexed set"))
if(b>=a.length||b<0)throw H.e(H.bk(a,b))
a[b]=c},
$isp:1,
$isb:1,
n:{
iB:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.cS(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.a1(a,0,4294967295,"length",null))
return J.et(new Array(a),b)},
et:function(a,b){return J.cp(H.c(a,[b]))},
cp:function(a){H.cb(a)
a.fixed$length=Array
return a}}},
nw:{"^":"b5;$ti"},
ay:{"^":"a;a,b,c,0d,$ti",
sdD:function(a){this.d=H.x(a,H.t(this,0))},
gK:function(){return this.d},
E:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.e(H.z(z))
x=this.c
if(x>=y){this.sdD(null)
return!1}this.sdD(z[x]);++this.c
return!0},
$isaX:1},
bW:{"^":"M;",
ex:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.e(P.W(""+a+".floor()"))},
aq:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.W(""+a+".round()"))},
eZ:function(a,b){var z,y
if(b>20)throw H.e(P.a1(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
bo:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.e(P.a1(b,2,36,"radix",null))
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
fv:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dV(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.dV(a,b)},
dV:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.e(P.W("Result of truncating division is "+H.i(z)+": "+H.i(a)+" ~/ "+b))},
aR:function(a,b){var z
if(a>0)z=this.dT(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
im:function(a,b){if(b<0)throw H.e(H.aj(b))
return this.dT(a,b)},
dT:function(a,b){return b>31?0:a>>>b},
T:function(a,b){if(typeof b!=="number")throw H.e(H.aj(b))
return a<b},
$isq:1,
$isak:1},
eu:{"^":"bW;",$ism:1},
iD:{"^":"bW;"},
bX:{"^":"M;",
a1:function(a,b){if(b<0)throw H.e(H.bk(a,b))
if(b>=a.length)H.r(H.bk(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(b>=a.length)throw H.e(H.bk(a,b))
return a.charCodeAt(b)},
G:function(a,b){H.C(b)
if(typeof b!=="string")throw H.e(P.cS(b,null,null))
return a+b},
b0:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.aj(b))
c=P.b_(b,c,a.length,null,null,null)
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
aa:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.aj(c))
if(typeof c!=="number")return c.T()
if(c<0||c>a.length)throw H.e(P.a1(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a5:function(a,b){return this.aa(a,b,0)},
u:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.aj(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.T()
if(b<0)throw H.e(P.c2(b,null,null))
if(b>c)throw H.e(P.c2(b,null,null))
if(c>a.length)throw H.e(P.c2(c,null,null))
return a.substring(b,c)},
as:function(a,b){return this.u(a,b,null)},
kr:function(a){return a.toLowerCase()},
t:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.R)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
jY:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.t(c,z)+a},
ad:function(a,b){return this.jY(a,b," ")},
eF:function(a,b,c){var z
if(c<0||c>a.length)throw H.e(P.a1(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
eE:function(a,b){return this.eF(a,b,0)},
jh:function(a,b,c){if(c>a.length)throw H.e(P.a1(c,0,a.length,null,null))
return H.hr(a,b,c)},
i:function(a){return a},
gY:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gp:function(a){return a.length},
$iseN:1,
$ish:1}}],["","",,H,{"^":"",
cK:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
co:function(){return new P.dg("No element")},
iA:function(){return new P.dg("Too many elements")},
v:{"^":"kv;a",
gp:function(a){return this.a.length},
l:function(a,b){return C.b.a1(this.a,b)},
$asdw:function(){return[P.m]},
$asU:function(){return[P.m]},
$asp:function(){return[P.m]},
$asb:function(){return[P.m]}},
em:{"^":"p;"},
cr:{"^":"em;$ti",
gV:function(a){return new H.d4(this,this.gp(this),0,[H.a5(this,"cr",0)])},
d7:function(a,b){return this.fp(0,H.l(b,{func:1,ret:P.N,args:[H.a5(this,"cr",0)]}))}},
d4:{"^":"a;a,b,c,0d,$ti",
sb3:function(a){this.d=H.x(a,H.t(this,0))},
gK:function(){return this.d},
E:function(){var z,y,x,w
z=this.a
y=J.bm(z)
x=y.gp(z)
if(this.b!==x)throw H.e(P.aI(z))
w=this.c
if(w>=x){this.sb3(null)
return!1}this.sb3(y.a8(z,w));++this.c
return!0},
$isaX:1},
j_:{"^":"p;a,b,$ti",
gV:function(a){return new H.j0(J.b3(this.a),this.b,this.$ti)},
gp:function(a){return J.as(this.a)},
a8:function(a,b){return this.b.$1(J.cd(this.a,b))},
$asp:function(a,b){return[b]}},
j0:{"^":"aX;0a,b,c,$ti",
sb3:function(a){this.a=H.x(a,H.t(this,1))},
E:function(){var z=this.b
if(z.E()){this.sb3(this.c.$1(z.gK()))
return!0}this.sb3(null)
return!1},
gK:function(){return this.a},
$asaX:function(a,b){return[b]}},
j1:{"^":"cr;a,b,$ti",
gp:function(a){return J.as(this.a)},
a8:function(a,b){return this.b.$1(J.cd(this.a,b))},
$ascr:function(a,b){return[b]},
$asp:function(a,b){return[b]}},
dA:{"^":"p;a,b,$ti",
gV:function(a){return new H.l1(J.b3(this.a),this.b,this.$ti)}},
l1:{"^":"aX;a,b,$ti",
E:function(){var z,y
for(z=this.a,y=this.b;z.E();)if(y.$1(z.gK()))return!0
return!1},
gK:function(){return this.a.gK()}},
cl:{"^":"a;$ti"},
dw:{"^":"a;$ti",
q:function(a,b,c){H.x(c,H.a5(this,"dw",0))
throw H.e(P.W("Cannot modify an unmodifiable list"))}},
kv:{"^":"cq+dw;"}}],["","",,H,{"^":"",
hW:function(){throw H.e(P.W("Cannot modify unmodifiable Map"))},
bp:function(a){var z,y
z=H.C(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
mQ:function(a){return init.types[H.ab(a)]},
n_:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.P(a).$isau},
i:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.af(a)
if(typeof z!=="string")throw H.e(H.aj(a))
return z},
bD:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
jx:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.f(z,3)
y=H.C(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.e(P.a1(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.I(w,u)|32)>x)return}return parseInt(a,b)},
b8:function(a){return H.jo(a)+H.dJ(H.b2(a),0,null)},
jo:function(a){var z,y,x,w,v,u,t,s,r
z=J.P(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.Y||!!z.$isc4){u=C.E(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.bp(w.length>1&&C.b.I(w,0)===36?C.b.as(w,1):w)},
jp:function(){if(!!self.location)return self.location.href
return},
eR:function(a){var z,y,x,w,v
H.cb(a)
z=J.as(a)
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
jy:function(a){var z,y,x,w
z=H.c([],[P.m])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.z)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.e(H.aj(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.h.aR(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.e(H.aj(w))}return H.eR(z)},
eS:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.e(H.aj(x))
if(x<0)throw H.e(H.aj(x))
if(x>65535)return H.jy(a)}return H.eR(a)},
jz:function(a,b,c){var z,y,x,w
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
w=x<c?x:c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
b9:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.aR(z,10))>>>0,56320|z&1023)}}throw H.e(P.a1(a,0,1114111,null,null))},
b7:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jw:function(a){var z=H.b7(a).getFullYear()+0
return z},
ju:function(a){var z=H.b7(a).getMonth()+1
return z},
jq:function(a){var z=H.b7(a).getDate()+0
return z},
jr:function(a){var z=H.b7(a).getHours()+0
return z},
jt:function(a){var z=H.b7(a).getMinutes()+0
return z},
jv:function(a){var z=H.b7(a).getSeconds()+0
return z},
js:function(a){var z=H.b7(a).getMilliseconds()+0
return z},
A:function(a){throw H.e(H.aj(a))},
f:function(a,b){if(a==null)J.as(a)
throw H.e(H.bk(a,b))},
bk:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aH(!0,b,"index",null)
z=H.ab(J.as(a))
if(!(b<0)){if(typeof z!=="number")return H.A(z)
y=b>=z}else y=!0
if(y)return P.b4(b,a,"index",null,z)
return P.c2(b,"index",null)},
mK:function(a,b,c){if(a>c)return new P.cu(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.cu(a,c,!0,b,"end","Invalid value")
return new P.aH(!0,b,"end",null)},
aj:function(a){return new P.aH(!0,a,null,null)},
e:function(a){var z
if(a==null)a=new P.eM()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.hs})
z.name=""}else z.toString=H.hs
return z},
hs:function(){return J.af(this.dartException)},
r:function(a){throw H.e(a)},
z:function(a){throw H.e(P.aI(a))},
a7:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.nn(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.aR(x,16)&8191)===10)switch(w){case 438:return z.$1(H.d3(H.i(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.eL(H.i(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$ff()
u=$.$get$fg()
t=$.$get$fh()
s=$.$get$fi()
r=$.$get$fm()
q=$.$get$fn()
p=$.$get$fk()
$.$get$fj()
o=$.$get$fp()
n=$.$get$fo()
m=v.ac(y)
if(m!=null)return z.$1(H.d3(H.C(y),m))
else{m=u.ac(y)
if(m!=null){m.method="call"
return z.$1(H.d3(H.C(y),m))}else{m=t.ac(y)
if(m==null){m=s.ac(y)
if(m==null){m=r.ac(y)
if(m==null){m=q.ac(y)
if(m==null){m=p.ac(y)
if(m==null){m=s.ac(y)
if(m==null){m=o.ac(y)
if(m==null){m=n.ac(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.eL(H.C(y),m))}}return z.$1(new H.ku(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.f0()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aH(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.f0()
return a},
bn:function(a){var z
if(a==null)return new H.fT(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fT(a)},
mN:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.q(0,a[y],a[x])}return b},
mZ:function(a,b,c,d,e,f){H.d(a,"$isbU")
switch(H.ab(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.u("Unsupported number of arguments for wrapped closure"))},
bj:function(a,b){var z
H.ab(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mZ)
a.$identity=z
return z},
hS:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.P(d).$isb){z.$reflectionInfo=d
x=H.jG(z).r}else x=d
w=e?Object.create(new H.k2().constructor.prototype):Object.create(new H.cU(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.az
if(typeof u!=="number")return u.G()
$.az=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.eb(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.mQ,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.e4:H.cV
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.e("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.eb(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w["call*"]=q
w.$R=z.$R
w.$D=z.$D
return v},
hP:function(a,b,c,d){var z=H.cV
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
eb:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.hR(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hP(y,!w,z,b)
if(y===0){w=$.az
if(typeof w!=="number")return w.G()
$.az=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.br
if(v==null){v=H.cg("self")
$.br=v}return new Function(w+H.i(v)+";return "+u+"."+H.i(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.az
if(typeof w!=="number")return w.G()
$.az=w+1
t+=w
w="return function("+t+"){return this."
v=$.br
if(v==null){v=H.cg("self")
$.br=v}return new Function(w+H.i(v)+"."+H.i(z)+"("+t+");}")()},
hQ:function(a,b,c,d){var z,y
z=H.cV
y=H.e4
switch(b?-1:a){case 0:throw H.e(H.jP("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
hR:function(a,b){var z,y,x,w,v,u,t,s
z=$.br
if(z==null){z=H.cg("self")
$.br=z}y=$.e3
if(y==null){y=H.cg("receiver")
$.e3=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hQ(w,!u,x,b)
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
dM:function(a,b,c,d,e,f,g){return H.hS(a,b,H.ab(c),d,!!e,!!f,g)},
C:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.ax(a,"String"))},
mL:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ax(a,"double"))},
nc:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ax(a,"num"))},
dK:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.ax(a,"bool"))},
ab:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.ax(a,"int"))},
hp:function(a,b){throw H.e(H.ax(a,H.bp(H.C(b).substring(3))))},
ne:function(a,b){throw H.e(H.hO(a,H.bp(H.C(b).substring(3))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.P(a)[b])return a
H.hp(a,b)},
j:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.P(a)[b]
else z=!0
if(z)return a
H.ne(a,b)},
cb:function(a){if(a==null)return a
if(!!J.P(a).$isb)return a
throw H.e(H.ax(a,"List<dynamic>"))},
hm:function(a,b){var z
if(a==null)return a
z=J.P(a)
if(!!z.$isb)return a
if(z[b])return a
H.hp(a,b)},
hi:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.ab(z)]
else return a.$S()}return},
c8:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.hi(J.P(a))
if(z==null)return!1
return H.h4(z,null,b,null)},
l:function(a,b){var z,y
if(a==null)return a
if($.dG)return a
$.dG=!0
try{if(H.c8(a,b))return a
z=H.cN(b)
y=H.ax(a,z)
throw H.e(y)}finally{$.dG=!1}},
dP:function(a,b){if(a!=null&&!H.dL(a,b))H.r(H.ax(a,H.cN(b)))
return a},
ha:function(a){var z,y
z=J.P(a)
if(!!z.$isn){y=H.hi(z)
if(y!=null)return H.cN(y)
return"Closure"}return H.b8(a)},
nl:function(a){throw H.e(new P.hZ(H.C(a)))},
hj:function(a){return init.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
b2:function(a){if(a==null)return
return a.$ti},
nX:function(a,b,c){return H.bo(a["$as"+H.i(c)],H.b2(b))},
c9:function(a,b,c,d){var z
H.C(c)
H.ab(d)
z=H.bo(a["$as"+H.i(c)],H.b2(b))
return z==null?null:z[d]},
a5:function(a,b,c){var z
H.C(b)
H.ab(c)
z=H.bo(a["$as"+H.i(b)],H.b2(a))
return z==null?null:z[c]},
t:function(a,b){var z
H.ab(b)
z=H.b2(a)
return z==null?null:z[b]},
cN:function(a){return H.b1(a,null)},
b1:function(a,b){var z,y
H.k(b,"$isb",[P.h],"$asb")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bp(a[0].builtin$cls)+H.dJ(a,1,b)
if(typeof a=="function")return H.bp(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ab(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.f(b,y)
return H.i(b[y])}if('func' in a)return H.ms(a,b)
if('futureOr' in a)return"FutureOr<"+H.b1("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ms:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
if(q!=null&&q!==P.a)t+=" extends "+H.b1(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.b1(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.b1(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.b1(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.mM(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.C(z[l])
n=n+m+H.b1(i[h],b)+(" "+H.i(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
dJ:function(a,b,c){var z,y,x,w,v,u
H.k(c,"$isb",[P.h],"$asb")
if(a==null)return""
z=new P.ai("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.b1(u,c)}return"<"+z.i(0)+">"},
bo:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bP:function(a,b,c,d){var z,y
H.C(b)
H.cb(c)
H.C(d)
if(a==null)return!1
z=H.b2(a)
y=J.P(a)
if(y[b]==null)return!1
return H.hd(H.bo(y[d],z),null,c,null)},
k:function(a,b,c,d){H.C(b)
H.cb(c)
H.C(d)
if(a==null)return a
if(H.bP(a,b,c,d))return a
throw H.e(H.ax(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bp(b.substring(3))+H.dJ(c,0,null),init.mangledGlobalNames)))},
hd:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ar(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ar(a[y],b,c[y],d))return!1
return!0},
nV:function(a,b,c){return a.apply(b,H.bo(J.P(b)["$as"+H.i(c)],H.b2(b)))},
hl:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="E"||a===-1||a===-2||H.hl(z)}return!1},
dL:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="a"||b.builtin$cls==="E"||b===-1||b===-2||H.hl(b)
if(b==null||b===-1||b.builtin$cls==="a"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dL(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c8(a,b)}z=J.P(a).constructor
y=H.b2(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.ar(z,null,b,null)},
x:function(a,b){if(a!=null&&!H.dL(a,b))throw H.e(H.ax(a,H.cN(b)))
return a},
ar:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ar(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="E")return!0
if('func' in c)return H.h4(a,b,c,d)
if('func' in a)return c.builtin$cls==="bU"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ar("type" in a?a.type:null,b,x,d)
else if(H.ar(a,b,x,d))return!0
else{if(!('$is'+"bx" in y.prototype))return!1
w=y.prototype["$as"+"bx"]
v=H.bo(w,z?a.slice(1):null)
return H.ar(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.hd(H.bo(r,z),b,u,d)},
h4:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
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
return H.nb(m,b,l,d)},
nb:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ar(c[w],d,a[w],b))return!1}return!0},
nW:function(a,b,c){Object.defineProperty(a,H.C(b),{value:c,enumerable:false,writable:true,configurable:true})},
n2:function(a){var z,y,x,w,v,u
z=H.C($.hk.$1(a))
y=$.cI[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cL[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.C($.hc.$2(a,z))
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
return u.i}if(v==="+")return H.ho(a,x)
if(v==="*")throw H.e(P.cz(z))
if(init.leafTags[z]===true){u=H.cM(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.ho(a,x)},
ho:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dS(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cM:function(a){return J.dS(a,!1,null,!!a.$isau)},
na:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cM(z)
else return J.dS(z,c,null,null)},
mX:function(){if(!0===$.dR)return
$.dR=!0
H.mY()},
mY:function(){var z,y,x,w,v,u,t,s
$.cI=Object.create(null)
$.cL=Object.create(null)
H.mT()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.hq.$1(v)
if(u!=null){t=H.na(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
mT:function(){var z,y,x,w,v,u,t
z=C.a1()
z=H.bi(C.Z,H.bi(C.a3,H.bi(C.D,H.bi(C.D,H.bi(C.a2,H.bi(C.a_,H.bi(C.a0(C.E),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.hk=new H.mU(v)
$.hc=new H.mV(u)
$.hq=new H.mW(t)},
bi:function(a,b){return a(b)||b},
hr:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
dU:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hV:{"^":"a;$ti",
i:function(a){return P.d5(this)},
q:function(a,b,c){H.x(b,H.t(this,0))
H.x(c,H.t(this,1))
return H.hW()},
$isH:1},
hX:{"^":"hV;a,b,c,$ti",
gp:function(a){return this.a},
bD:function(a){if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
l:function(a,b){if(!this.bD(b))return
return this.dF(b)},
dF:function(a){return this.b[H.C(a)]},
a0:function(a,b){var z,y,x,w,v
z=H.t(this,1)
H.l(b,{func:1,ret:-1,args:[H.t(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.x(this.dF(v),z))}}},
jF:{"^":"a;a,b,c,d,e,f,r,0x",n:{
jG:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.cp(z)
y=z[0]
x=z[1]
return new H.jF(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
kh:{"^":"a;a,b,c,d,e,f",
ac:function(a){var z,y,x
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
return new H.kh(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cy:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
fl:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
ji:{"^":"a3;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
n:{
eL:function(a,b){return new H.ji(a,b==null?null:b.method)}}},
iG:{"^":"a3;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.i(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.i(this.a)+")"},
n:{
d3:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.iG(a,y,z?null:b.receiver)}}},
ku:{"^":"a3;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
nn:{"^":"n:18;a",
$1:function(a){if(!!J.P(a).$isa3)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fT:{"^":"a;a,0b",
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
i:function(a){return"Closure '"+H.b8(this).trim()+"'"},
gf7:function(){return this},
$isbU:1,
gf7:function(){return this}},
f4:{"^":"n;"},
k2:{"^":"f4;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.bp(z)+"'"}},
cU:{"^":"f4;a,b,c,d",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cU))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gY:function(a){var z,y
z=this.c
if(z==null)y=H.bD(this.a)
else y=typeof z!=="object"?J.bR(z):H.bD(z)
return(y^H.bD(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.b8(z)+"'")},
n:{
cV:function(a){return a.a},
e4:function(a){return a.c},
cg:function(a){var z,y,x,w,v
z=new H.cU("self","target","receiver","name")
y=J.cp(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ki:{"^":"a3;a",
i:function(a){return this.a},
n:{
ax:function(a,b){return new H.ki("TypeError: "+H.i(P.cj(a))+": type '"+H.ha(a)+"' is not a subtype of type '"+b+"'")}}},
hN:{"^":"a3;a",
i:function(a){return this.a},
n:{
hO:function(a,b){return new H.hN("CastError: "+H.i(P.cj(a))+": type '"+H.ha(a)+"' is not a subtype of type '"+b+"'")}}},
jO:{"^":"a3;a",
i:function(a){return"RuntimeError: "+H.i(this.a)},
n:{
jP:function(a){return new H.jO(a)}}},
aY:{"^":"eB;a,0b,0c,0d,0e,0f,r,$ti",
gp:function(a){return this.a},
gjL:function(a){return this.a===0},
gaz:function(){return new H.iN(this,[H.t(this,0)])},
bD:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.dA(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.dA(y,a)}else return this.jI(a)},
jI:function(a){var z=this.d
if(z==null)return!1
return this.cT(this.c9(z,this.cS(a)),a)>=0},
l:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.bw(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.bw(w,b)
x=y==null?null:y.b
return x}else return this.jJ(b)},
jJ:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.c9(z,this.cS(a))
x=this.cT(y,a)
if(x<0)return
return y[x].b},
q:function(a,b,c){var z,y
H.x(b,H.t(this,0))
H.x(c,H.t(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.cg()
this.b=z}this.dn(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.cg()
this.c=y}this.dn(y,b,c)}else this.jK(b,c)},
jK:function(a,b){var z,y,x,w
H.x(a,H.t(this,0))
H.x(b,H.t(this,1))
z=this.d
if(z==null){z=this.cg()
this.d=z}y=this.cS(a)
x=this.c9(z,y)
if(x==null)this.cp(z,y,[this.c3(a,b)])
else{w=this.cT(x,a)
if(w>=0)x[w].b=b
else x.push(this.c3(a,b))}},
a0:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.e(P.aI(this))
z=z.c}},
dn:function(a,b,c){var z
H.x(b,H.t(this,0))
H.x(c,H.t(this,1))
z=this.bw(a,b)
if(z==null)this.cp(a,b,this.c3(b,c))
else z.b=c},
fU:function(){this.r=this.r+1&67108863},
c3:function(a,b){var z,y
z=new H.iM(H.x(a,H.t(this,0)),H.x(b,H.t(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.fU()
return z},
cS:function(a){return J.bR(a)&0x3ffffff},
cT:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.J(a[y].a,b))return y
return-1},
i:function(a){return P.d5(this)},
bw:function(a,b){return a[b]},
c9:function(a,b){return a[b]},
cp:function(a,b,c){a[b]=c},
h8:function(a,b){delete a[b]},
dA:function(a,b){return this.bw(a,b)!=null},
cg:function(){var z=Object.create(null)
this.cp(z,"<non-identifier-key>",z)
this.h8(z,"<non-identifier-key>")
return z},
$isex:1},
iM:{"^":"a;a,b,0c,0d"},
iN:{"^":"em;a,$ti",
gp:function(a){return this.a.a},
gV:function(a){var z,y
z=this.a
y=new H.iO(z,z.r,this.$ti)
y.c=z.e
return y}},
iO:{"^":"a;a,b,0c,0d,$ti",
sdq:function(a){this.d=H.x(a,H.t(this,0))},
gK:function(){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aI(z))
else{z=this.c
if(z==null){this.sdq(null)
return!1}else{this.sdq(z.a)
this.c=this.c.c
return!0}}},
$isaX:1},
mU:{"^":"n:18;a",
$1:function(a){return this.a(a)}},
mV:{"^":"n:54;a",
$2:function(a,b){return this.a(a,b)}},
mW:{"^":"n:53;a",
$1:function(a){return this.a(H.C(a))}},
iE:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$iseN:1,
$isjH:1,
n:{
iF:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.e(P.V("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
mM:function(a){return J.et(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
nd:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
bg:function(a){return a},
jc:function(a){return new Int8Array(a)},
b0:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.bk(b,a))},
mm:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.e(H.mK(a,b,c))
return b},
da:{"^":"M;",$isda:1,"%":";ArrayBufferView;d9|fP|fQ|jd|fR|fS|bB"},
d9:{"^":"da;",
gp:function(a){return a.length},
$isau:1,
$asau:I.dO},
jd:{"^":"fQ;",
l:function(a,b){H.b0(b,a,a.length)
return a[b]},
q:function(a,b,c){H.mL(c)
H.b0(b,a,a.length)
a[b]=c},
$ascl:function(){return[P.q]},
$asU:function(){return[P.q]},
$isp:1,
$asp:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]},
"%":"Float32Array"},
bB:{"^":"fS;",
q:function(a,b,c){H.ab(c)
H.b0(b,a,a.length)
a[b]=c},
$ascl:function(){return[P.m]},
$asU:function(){return[P.m]},
$isp:1,
$asp:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}},
ny:{"^":"bB;",
l:function(a,b){H.b0(b,a,a.length)
return a[b]},
"%":"Int16Array"},
nz:{"^":"bB;",
l:function(a,b){H.b0(b,a,a.length)
return a[b]},
"%":"Int32Array"},
nA:{"^":"bB;",
l:function(a,b){H.b0(b,a,a.length)
return a[b]},
"%":"Int8Array"},
nB:{"^":"bB;",
l:function(a,b){H.b0(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
eJ:{"^":"bB;",
gp:function(a){return a.length},
l:function(a,b){H.b0(b,a,a.length)
return a[b]},
$iseJ:1,
$isO:1,
"%":";Uint8Array"},
fP:{"^":"d9+U;"},
fQ:{"^":"fP+cl;"},
fR:{"^":"d9+U;"},
fS:{"^":"fR+cl;"}}],["","",,P,{"^":"",
l3:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.mz()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.bj(new P.l5(z),1)).observe(y,{childList:true})
return new P.l4(z,y,x)}else if(self.setImmediate!=null)return P.mA()
return P.mB()},
nM:[function(a){self.scheduleImmediate(H.bj(new P.l6(H.l(a,{func:1,ret:-1})),0))},"$1","mz",4,0,10],
nN:[function(a){self.setImmediate(H.bj(new P.l7(H.l(a,{func:1,ret:-1})),0))},"$1","mA",4,0,10],
nO:[function(a){P.dj(C.y,H.l(a,{func:1,ret:-1}))},"$1","mB",4,0,10],
dj:function(a,b){var z
H.l(b,{func:1,ret:-1})
z=C.h.a6(a.a,1000)
return P.lP(z<0?0:z,b)},
fc:function(a,b){var z
H.l(b,{func:1,ret:-1,args:[P.ba]})
z=C.h.a6(a.a,1000)
return P.lQ(z<0?0:z,b)},
mv:function(a,b){if(H.c8(a,{func:1,args:[P.a,P.aM]}))return H.l(a,{func:1,ret:null,args:[P.a,P.aM]})
if(H.c8(a,{func:1,args:[P.a]}))return H.l(a,{func:1,ret:null,args:[P.a]})
throw H.e(P.cS(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mu:function(){var z,y
for(;z=$.bh,z!=null;){$.bN=null
y=z.b
$.bh=y
if(y==null)$.bM=null
z.a.$0()}},
nU:[function(){$.dH=!0
try{P.mu()}finally{$.bN=null
$.dH=!1
if($.bh!=null)$.$get$dB().$1(P.he())}},"$0","he",0,0,3],
h9:function(a){var z=new P.fG(H.l(a,{func:1,ret:-1}))
if($.bh==null){$.bM=z
$.bh=z
if(!$.dH)$.$get$dB().$1(P.he())}else{$.bM.b=z
$.bM=z}},
my:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
z=$.bh
if(z==null){P.h9(a)
$.bN=$.bM
return}y=new P.fG(a)
x=$.bN
if(x==null){y.b=z
$.bN=y
$.bh=y}else{y.b=x.b
x.b=y
$.bN=y
if(y.b==null)$.bM=y}},
nf:function(a){var z,y
z={func:1,ret:-1}
H.l(a,z)
y=$.S
if(C.l===y){P.cH(null,null,C.l,a)
return}y.toString
P.cH(null,null,y,H.l(y.cz(a),z))},
fb:function(a,b){var z,y
z={func:1,ret:-1}
H.l(b,z)
y=$.S
if(y===C.l){y.toString
return P.dj(a,b)}return P.dj(a,H.l(y.cz(b),z))},
ke:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.ba]}
H.l(b,z)
y=$.S
if(y===C.l){y.toString
return P.fc(a,b)}x=y.e4(b,P.ba)
$.S.toString
return P.fc(a,H.l(x,z))},
cG:function(a,b,c,d,e){var z={}
z.a=d
P.my(new P.mw(z,e))},
h5:function(a,b,c,d,e){var z,y
H.l(d,{func:1,ret:e})
y=$.S
if(y===c)return d.$0()
$.S=c
z=y
try{y=d.$0()
return y}finally{$.S=z}},
h6:function(a,b,c,d,e,f,g){var z,y
H.l(d,{func:1,ret:f,args:[g]})
H.x(e,g)
y=$.S
if(y===c)return d.$1(e)
$.S=c
z=y
try{y=d.$1(e)
return y}finally{$.S=z}},
mx:function(a,b,c,d,e,f,g,h,i){var z,y
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
if(z)d=!(!z||!1)?c.cz(d):c.j7(d,-1)
P.h9(d)},
l5:{"^":"n:29;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
l4:{"^":"n:51;a,b,c",
$1:function(a){var z,y
this.a.a=H.l(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
l6:{"^":"n:0;a",
$0:function(){this.a.$0()}},
l7:{"^":"n:0;a",
$0:function(){this.a.$0()}},
fV:{"^":"a;a,0b,c",
fS:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bj(new P.lS(this,b),0),a)
else throw H.e(P.W("`setTimeout()` not found."))},
fT:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bj(new P.lR(this,a,Date.now(),b),0),a)
else throw H.e(P.W("Periodic timer."))},
$isba:1,
n:{
lP:function(a,b){var z=new P.fV(!0,0)
z.fS(a,b)
return z},
lQ:function(a,b){var z=new P.fV(!1,0)
z.fT(a,b)
return z}}},
lS:{"^":"n:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
lR:{"^":"n:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.h.fv(w,x)}z.c=y
this.d.$1(z)}},
bf:{"^":"a;0a,b,c,d,e,$ti",
jQ:function(a){if(this.c!==6)return!0
return this.b.b.d4(H.l(this.d,{func:1,ret:P.N,args:[P.a]}),a.a,P.N,P.a)},
jH:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.t(this,1)}
w=this.b.b
if(H.c8(z,{func:1,args:[P.a,P.aM]}))return H.dP(w.kk(z,a.a,a.b,null,y,P.aM),x)
else return H.dP(w.d4(H.l(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aT:{"^":"a;dU:a<,b,0ia:c<,$ti",
eY:function(a,b,c){var z,y,x,w
z=H.t(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.S
if(y!==C.l){y.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.mv(b,y)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aT(0,$.S,[c])
w=b==null?1:3
this.ds(new P.bf(x,w,a,b,[z,c]))
return x},
ko:function(a,b){return this.eY(a,null,b)},
ds:function(a){var z,y
z=this.a
if(z<=1){a.a=H.d(this.c,"$isbf")
this.c=a}else{if(z===2){y=H.d(this.c,"$isaT")
z=y.a
if(z<4){y.ds(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cH(null,null,z,H.l(new P.lg(this,a),{func:1,ret:-1}))}},
dQ:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.d(this.c,"$isbf")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.d(this.c,"$isaT")
y=u.a
if(y<4){u.dQ(a)
return}this.a=y
this.c=u.c}z.a=this.bz(a)
y=this.b
y.toString
P.cH(null,null,y,H.l(new P.ll(z,this),{func:1,ret:-1}))}},
cl:function(){var z=H.d(this.c,"$isbf")
this.c=null
return this.bz(z)},
bz:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
du:function(a){var z,y,x
z=H.t(this,0)
H.dP(a,{futureOr:1,type:z})
y=this.$ti
if(H.bP(a,"$isbx",y,"$asbx"))if(H.bP(a,"$isaT",y,null))P.fK(a,this)
else P.lh(a,this)
else{x=this.cl()
H.x(a,z)
this.a=4
this.c=a
P.bI(this,x)}},
dv:function(a,b){var z
H.d(b,"$isaM")
z=this.cl()
this.a=8
this.c=new P.al(a,b)
P.bI(this,z)},
$isbx:1,
n:{
lh:function(a,b){var z,y,x
b.a=1
try{a.eY(new P.li(b),new P.lj(b),null)}catch(x){z=H.a7(x)
y=H.bn(x)
P.nf(new P.lk(b,z,y))}},
fK:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.d(a.c,"$isaT")
if(z>=4){y=b.cl()
b.a=a.a
b.c=a.c
P.bI(b,y)}else{y=H.d(b.c,"$isbf")
b.a=2
b.c=a
a.dQ(y)}},
bI:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
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
P.bI(z.a,b)}y=z.a
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
if(y===8)new P.lo(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.ln(x,b,r).$0()}else if((y&2)!==0)new P.lm(z,x,b).$0()
if(o!=null)$.S=o
y=x.b
if(!!J.P(y).$isbx){if(y.a>=4){n=H.d(t.c,"$isbf")
t.c=null
b=t.bz(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.fK(y,t)
return}}m=b.b
n=H.d(m.c,"$isbf")
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
lg:{"^":"n:0;a,b",
$0:function(){P.bI(this.a,this.b)}},
ll:{"^":"n:0;a,b",
$0:function(){P.bI(this.b,this.a.a)}},
li:{"^":"n:29;a",
$1:function(a){var z=this.a
z.a=0
z.du(a)}},
lj:{"^":"n:49;a",
$2:function(a,b){this.a.dv(a,H.d(b,"$isaM"))},
$1:function(a){return this.$2(a,null)}},
lk:{"^":"n:0;a,b,c",
$0:function(){this.a.dv(this.b,this.c)}},
lo:{"^":"n:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.eV(H.l(w.d,{func:1}),null)}catch(v){y=H.a7(v)
x=H.bn(v)
if(this.d){w=H.d(this.a.a.c,"$isal").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.d(this.a.a.c,"$isal")
else u.b=new P.al(y,x)
u.a=!0
return}if(!!J.P(z).$isbx){if(z instanceof P.aT&&z.gdU()>=4){if(z.gdU()===8){w=this.b
w.b=H.d(z.gia(),"$isal")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.ko(new P.lp(t),null)
w.a=!1}}},
lp:{"^":"n:48;a",
$1:function(a){return this.a}},
ln:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.t(x,0)
v=H.x(this.c,w)
u=H.t(x,1)
this.a.b=x.b.b.d4(H.l(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a7(t)
y=H.bn(t)
x=this.a
x.b=new P.al(z,y)
x.a=!0}}},
lm:{"^":"n:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.d(this.a.a.c,"$isal")
w=this.c
if(w.jQ(z)&&w.e!=null){v=this.b
v.b=w.jH(z)
v.a=!1}}catch(u){y=H.a7(u)
x=H.bn(u)
w=H.d(this.a.a.c,"$isal")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.al(y,x)
s.a=!0}}},
fG:{"^":"a;a,0b"},
k3:{"^":"a;$ti",
gp:function(a){var z,y,x,w
z={}
y=new P.aT(0,$.S,[P.m])
z.a=0
x=H.t(this,0)
w=H.l(new P.k5(z,this),{func:1,ret:-1,args:[x]})
H.l(new P.k6(z,y),{func:1,ret:-1})
W.a2(this.a,this.b,w,!1,x)
return y}},
k5:{"^":"n;a,b",
$1:function(a){H.x(a,H.t(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.E,args:[H.t(this.b,0)]}}},
k6:{"^":"n:0;a,b",
$0:function(){this.b.du(this.a.a)}},
dh:{"^":"a;$ti"},
k4:{"^":"a;"},
ba:{"^":"a;"},
al:{"^":"a;a,b",
i:function(a){return H.i(this.a)},
$isa3:1},
mi:{"^":"a;",$isnL:1},
mw:{"^":"n:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.eM()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.e(z)
x=H.e(z)
x.stack=y.i(0)
throw x}},
lA:{"^":"mi;",
kl:function(a){var z,y,x
H.l(a,{func:1,ret:-1})
try{if(C.l===$.S){a.$0()
return}P.h5(null,null,this,a,-1)}catch(x){z=H.a7(x)
y=H.bn(x)
P.cG(null,null,this,z,H.d(y,"$isaM"))}},
km:function(a,b,c){var z,y,x
H.l(a,{func:1,ret:-1,args:[c]})
H.x(b,c)
try{if(C.l===$.S){a.$1(b)
return}P.h6(null,null,this,a,b,-1,c)}catch(x){z=H.a7(x)
y=H.bn(x)
P.cG(null,null,this,z,H.d(y,"$isaM"))}},
j7:function(a,b){return new P.lC(this,H.l(a,{func:1,ret:b}),b)},
cz:function(a){return new P.lB(this,H.l(a,{func:1,ret:-1}))},
e4:function(a,b){return new P.lD(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
eV:function(a,b){H.l(a,{func:1,ret:b})
if($.S===C.l)return a.$0()
return P.h5(null,null,this,a,b)},
d4:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.x(b,d)
if($.S===C.l)return a.$1(b)
return P.h6(null,null,this,a,b,c,d)},
kk:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.x(b,e)
H.x(c,f)
if($.S===C.l)return a.$2(b,c)
return P.mx(null,null,this,a,b,c,d,e,f)}},
lC:{"^":"n;a,b,c",
$0:function(){return this.a.eV(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
lB:{"^":"n:3;a,b",
$0:function(){return this.a.kl(this.b)}},
lD:{"^":"n;a,b,c",
$1:function(a){var z=this.c
return this.a.km(this.b,H.x(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
iP:function(a,b,c,d,e){return new H.aY(0,0,[d,e])},
iQ:function(a,b,c){H.cb(a)
return H.k(H.mN(a,new H.aY(0,0,[b,c])),"$isex",[b,c],"$asex")},
ey:function(a,b){return new H.aY(0,0,[a,b])},
bZ:function(a,b,c,d){return new P.lu(0,0,[d])},
iz:function(a,b,c){var z,y
if(P.dI(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bO()
C.a.h(y,a)
try{P.mt(a,z)}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=P.f2(b,H.hm(z,"$isp"),", ")+c
return y.charCodeAt(0)==0?y:y},
d0:function(a,b,c){var z,y,x
if(P.dI(a))return b+"..."+c
z=new P.ai(b)
y=$.$get$bO()
C.a.h(y,a)
try{x=z
x.a=P.f2(x.gaO(),a,", ")}finally{if(0>=y.length)return H.f(y,-1)
y.pop()}y=z
y.a=y.gaO()+c
y=z.gaO()
return y.charCodeAt(0)==0?y:y},
dI:function(a){var z,y
for(z=0;y=$.$get$bO(),z<y.length;++z)if(a===y[z])return!0
return!1},
mt:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gV(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.E())return
w=H.i(z.gK())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.E()){if(x<=5)return
if(0>=b.length)return H.f(b,-1)
v=b.pop()
if(0>=b.length)return H.f(b,-1)
u=b.pop()}else{t=z.gK();++x
if(!z.E()){if(x<=4){C.a.h(b,H.i(t))
return}v=H.i(t)
if(0>=b.length)return H.f(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gK();++x
for(;z.E();t=s,s=r){r=z.gK();++x
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
iR:function(a,b,c){var z=P.iP(null,null,null,b,c)
a.a0(0,new P.iS(z,b,c))
return z},
ez:function(a,b){var z,y,x
z=P.bZ(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.z)(a),++x)z.h(0,H.x(a[x],b))
return z},
d5:function(a){var z,y,x
z={}
if(P.dI(a))return"{...}"
y=new P.ai("")
try{C.a.h($.$get$bO(),a)
x=y
x.a=x.gaO()+"{"
z.a=!0
a.a0(0,new P.iY(z,y))
z=y
z.a=z.gaO()+"}"}finally{z=$.$get$bO()
if(0>=z.length)return H.f(z,-1)
z.pop()}z=y.gaO()
return z.charCodeAt(0)==0?z:z},
lu:{"^":"lq;a,0b,0c,0d,0e,0f,r,$ti",
gV:function(a){var z=new P.fO(this,this.r,this.$ti)
z.c=this.e
return z},
gp:function(a){return this.a},
a_:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.d(z[b],"$iscD")!=null}else{y=this.h4(b)
return y}},
h4:function(a){var z=this.d
if(z==null)return!1
return this.c7(this.dG(z,a),a)>=0},
h:function(a,b){var z,y
H.x(b,H.t(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dD()
this.b=z}return this.dr(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dD()
this.c=y}return this.dr(y,b)}else return this.fV(b)},
fV:function(a){var z,y,x
H.x(a,H.t(this,0))
z=this.d
if(z==null){z=P.dD()
this.d=z}y=this.dw(a)
x=z[y]
if(x==null)z[y]=[this.ci(a)]
else{if(this.c7(x,a)>=0)return!1
x.push(this.ci(a))}return!0},
N:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.i2(this.c,b)
else return this.i_(b)},
i_:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.dG(z,a)
x=this.c7(y,a)
if(x<0)return!1
this.dW(y.splice(x,1)[0])
return!0},
dr:function(a,b){H.x(b,H.t(this,0))
if(H.d(a[b],"$iscD")!=null)return!1
a[b]=this.ci(b)
return!0},
i2:function(a,b){var z
if(a==null)return!1
z=H.d(a[b],"$iscD")
if(z==null)return!1
this.dW(z)
delete a[b]
return!0},
dL:function(){this.r=this.r+1&67108863},
ci:function(a){var z,y
z=new P.cD(H.x(a,H.t(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.dL()
return z},
dW:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.dL()},
dw:function(a){return J.bR(a)&0x3ffffff},
dG:function(a,b){return a[this.dw(b)]},
c7:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.J(a[y].a,b))return y
return-1},
n:{
dD:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cD:{"^":"a;a,0b,0c"},
fO:{"^":"a;a,b,0c,0d,$ti",
sdt:function(a){this.d=H.x(a,H.t(this,0))},
gK:function(){return this.d},
E:function(){var z=this.a
if(this.b!==z.r)throw H.e(P.aI(z))
else{z=this.c
if(z==null){this.sdt(null)
return!1}else{this.sdt(H.x(z.a,H.t(this,0)))
this.c=this.c.b
return!0}}},
$isaX:1,
n:{
lv:function(a,b,c){var z=new P.fO(a,b,[c])
z.c=a.e
return z}}},
lq:{"^":"jQ;"},
iS:{"^":"n:6;a,b,c",
$2:function(a,b){this.a.q(0,H.x(a,this.b),H.x(b,this.c))}},
cq:{"^":"lw;",$isp:1,$isb:1},
U:{"^":"a;$ti",
gV:function(a){return new H.d4(a,this.gp(a),0,[H.c9(this,a,"U",0)])},
a8:function(a,b){return this.l(a,b)},
kq:function(a,b){var z,y
z=H.c([],[H.c9(this,a,"U",0)])
C.a.sp(z,this.gp(a))
for(y=0;y<this.gp(a);++y)C.a.q(z,y,this.l(a,y))
return z},
kp:function(a){return this.kq(a,!0)},
jz:function(a,b,c,d){var z
H.x(d,H.c9(this,a,"U",0))
P.b_(b,c,this.gp(a),null,null,null)
for(z=b;z<c;++z)this.q(a,z,d)},
i:function(a){return P.d0(a,"[","]")}},
eB:{"^":"cs;"},
iY:{"^":"n:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.i(a)
z.a=y+": "
z.a+=H.i(b)}},
cs:{"^":"a;$ti",
a0:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[H.a5(this,"cs",0),H.a5(this,"cs",1)]})
for(z=J.b3(this.gaz());z.E();){y=z.gK()
b.$2(y,this.l(0,y))}},
gp:function(a){return J.as(this.gaz())},
i:function(a){return P.d5(this)},
$isH:1},
lV:{"^":"a;$ti",
q:function(a,b,c){H.x(b,H.t(this,0))
H.x(c,H.t(this,1))
throw H.e(P.W("Cannot modify unmodifiable map"))}},
iZ:{"^":"a;$ti",
l:function(a,b){return this.a.l(0,b)},
q:function(a,b,c){this.a.q(0,H.x(b,H.t(this,0)),H.x(c,H.t(this,1)))},
a0:function(a,b){this.a.a0(0,H.l(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]}))},
gp:function(a){var z=this.a
return z.gp(z)},
i:function(a){return J.af(this.a)},
$isH:1},
fq:{"^":"lW;a,$ti"},
jS:{"^":"a;$ti",
av:function(a,b){var z
for(z=J.b3(H.k(b,"$isp",this.$ti,"$asp"));z.E();)this.h(0,z.gK())},
i:function(a){return P.d0(this,"{","}")},
a8:function(a,b){var z,y,x
if(b<0)H.r(P.a1(b,0,null,"index",null))
for(z=P.lv(this,this.r,H.t(this,0)),y=0;z.E();){x=z.d
if(b===y)return x;++y}throw H.e(P.b4(b,this,"index",null,y))},
$isp:1,
$iseY:1},
jQ:{"^":"jS;"},
lw:{"^":"a+U;"},
lW:{"^":"iZ+lV;$ti"}}],["","",,P,{"^":"",hK:{"^":"bS;a",
jS:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
c=P.b_(b,c,a.length,null,null,null)
z=$.$get$fI()
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
w.a=l+H.b9(r)
x=s
continue}}throw H.e(P.V("Invalid base64 data",a,y))}if(w!=null){l=w.a+=C.b.u(a,x,c)
k=l.length
if(v>=0)P.e1(a,u,c,v,t,k)
else{j=C.h.bt(k-1,4)+1
if(j===1)throw H.e(P.V("Invalid base64 encoding length ",a,c))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.b0(a,b,c,l.charCodeAt(0)==0?l:l)}i=c-b
if(v>=0)P.e1(a,u,c,v,t,i)
else{j=C.h.bt(i,4)
if(j===1)throw H.e(P.V("Invalid base64 encoding length ",a,c))
if(j>1)a=C.b.b0(a,c,c,j===2?"==":"=")}return a},
$asbS:function(){return[[P.b,P.m],P.h]},
n:{
e1:function(a,b,c,d,e,f){if(C.h.bt(f,4)!==0)throw H.e(P.V("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.e(P.V("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.e(P.V("Invalid base64 padding, more than two '=' characters",a,b))}}},hL:{"^":"aV;a",
$asaV:function(){return[[P.b,P.m],P.h]}},bS:{"^":"a;$ti"},aV:{"^":"k4;$ti"},ib:{"^":"bS;",
$asbS:function(){return[P.h,[P.b,P.m]]}},iw:{"^":"a;a,b,c,d,e",
i:function(a){return this.a}},iv:{"^":"aV;a",
h5:function(a,b,c){var z,y,x,w,v,u
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
if(c>b)v.a+=J.hG(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asaV:function(){return[P.h,P.h]}},kI:{"^":"ib;a",
gjy:function(){return C.S}},kP:{"^":"aV;",
ba:function(a,b,c){var z,y,x,w
z=a.length
P.b_(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.mg(0,0,x)
if(w.hg(a,b,z)!==z)w.dY(J.hy(a,z-1),0)
return new Uint8Array(x.subarray(0,H.mm(0,w.b,x.length)))},
cF:function(a){return this.ba(a,0,null)},
$asaV:function(){return[P.h,[P.b,P.m]]}},mg:{"^":"a;a,b,c",
dY:function(a,b){var z,y,x,w,v
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
hg:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.a1(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.I(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.dY(w,C.b.I(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},kJ:{"^":"aV;a",
ba:function(a,b,c){var z,y,x,w,v
H.k(a,"$isb",[P.m],"$asb")
z=P.kK(!1,a,b,c)
if(z!=null)return z
y=J.as(a)
P.b_(b,c,y,null,null,null)
x=new P.ai("")
w=new P.md(!1,x,!0,0,0,0)
w.ba(a,b,y)
if(w.e>0){H.r(P.V("Unfinished UTF-8 octet sequence",a,y))
x.a+=H.b9(65533)
w.d=0
w.e=0
w.f=0}v=x.a
return v.charCodeAt(0)==0?v:v},
cF:function(a){return this.ba(a,0,null)},
$asaV:function(){return[[P.b,P.m],P.h]},
n:{
kK:function(a,b,c,d){H.k(b,"$isb",[P.m],"$asb")
if(b instanceof Uint8Array)return P.kL(!1,b,c,d)
return},
kL:function(a,b,c,d){var z,y,x
z=$.$get$fv()
if(z==null)return
y=0===c
if(y&&!0)return P.dy(z,b)
x=b.length
d=P.b_(c,d,x,null,null,null)
if(y&&d===x)return P.dy(z,b)
return P.dy(z,b.subarray(c,d))},
dy:function(a,b){if(P.kN(b))return
return P.kO(a,b)},
kO:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.a7(y)}return},
kN:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
kM:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.a7(y)}return}}},md:{"^":"a;a,b,c,d,e,f",
ba:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.k(a,"$isb",[P.m],"$asb")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.mf(c)
v=new P.me(this,b,c,a)
$label0$0:for(u=J.bm(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.l(a,s)
if(typeof r!=="number")return r.bY()
if((r&192)!==128){q=P.V("Bad UTF-8 encoding 0x"+C.h.bo(r,16),a,s)
throw H.e(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.f(C.G,q)
if(z<=C.G[q]){q=P.V("Overlong encoding of 0x"+C.h.bo(z,16),a,s-x-1)
throw H.e(q)}if(z>1114111){q=P.V("Character outside valid Unicode range: 0x"+C.h.bo(z,16),a,s-x-1)
throw H.e(q)}if(!this.c||z!==65279)t.a+=H.b9(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.dg()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.l(a,o)
if(typeof r!=="number")return r.T()
if(r<0){m=P.V("Negative UTF-8 code unit: -0x"+C.h.bo(-r,16),a,n-1)
throw H.e(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.V("Bad UTF-8 encoding 0x"+C.h.bo(r,16),a,n-1)
throw H.e(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},mf:{"^":"n:47;a",
$2:function(a,b){var z,y,x,w
H.k(a,"$isb",[P.m],"$asb")
z=this.a
for(y=J.bm(a),x=b;x<z;++x){w=y.l(a,x)
if(typeof w!=="number")return w.bY()
if((w&127)!==w)return x-b}return z-b}},me:{"^":"n:45;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.c3(this.d,a,b)}}}],["","",,P,{"^":"",
ca:function(a,b,c){var z
H.l(b,{func:1,ret:P.m,args:[P.h]})
z=H.jx(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.e(P.V(a,null,null))},
id:function(a){if(a instanceof H.n)return a.i(0)
return"Instance of '"+H.b8(a)+"'"},
iT:function(a,b,c,d){var z,y
H.x(b,d)
z=J.iB(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.q(z,y,b)
return H.k(z,"$isb",[d],"$asb")},
iU:function(a,b,c){var z,y,x
z=[c]
y=H.c([],z)
for(x=a.gV(a);x.E();)C.a.h(y,H.x(x.gK(),c))
if(b)return y
return H.k(J.cp(y),"$isb",z,"$asb")},
c3:function(a,b,c){var z,y
z=P.m
H.k(a,"$isp",[z],"$asp")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.k(a,"$isb5",[z],"$asb5")
y=a.length
c=P.b_(b,c,y,null,null,null)
return H.eS(b>0||c<y?C.a.fn(a,b,c):a)}if(!!J.P(a).$iseJ)return H.jz(a,b,P.b_(b,c,a.length,null,null,null))
return P.k7(a,b,c)},
k7:function(a,b,c){var z,y,x,w
H.k(a,"$isp",[P.m],"$asp")
if(b<0)throw H.e(P.a1(b,0,J.as(a),null,null))
z=c==null
if(!z&&c<b)throw H.e(P.a1(c,b,J.as(a),null,null))
y=J.b3(a)
for(x=0;x<b;++x)if(!y.E())throw H.e(P.a1(b,0,x,null,null))
w=[]
if(z)for(;y.E();)w.push(y.gK())
else for(x=b;x<c;++x){if(!y.E())throw H.e(P.a1(c,b,x,null,null))
w.push(y.gK())}return H.eS(w)},
jI:function(a,b,c){return new H.iE(a,H.iF(a,!1,!0,!1))},
fs:function(){var z=H.jp()
if(z!=null)return P.kA(z,0,null)
throw H.e(P.W("'Uri.base' is not supported"))},
cj:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.af(a)
if(typeof a==="string")return JSON.stringify(a)
return P.id(a)},
u:function(a){return new P.fJ(a)},
iV:function(a,b,c,d){var z,y
H.l(b,{func:1,ret:d,args:[P.m]})
z=H.c([],[d])
C.a.sp(z,a)
for(y=0;y<a;++y)C.a.q(z,y,b.$1(y))
return z},
dT:function(a){H.nd(a)},
kA:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.I(a,b+4)^58)*3|C.b.I(a,b)^100|C.b.I(a,b+1)^97|C.b.I(a,b+2)^116|C.b.I(a,b+3)^97)>>>0
if(y===0)return P.fr(b>0||c<c?C.b.u(a,b,c):a,5,null).gf3()
else if(y===32)return P.fr(C.b.u(a,z,c),0,null).gf3()}x=new Array(8)
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
if(P.h7(a,b,c,0,w)>=14)C.a.q(w,7,c)
v=w[1]
if(typeof v!=="number")return v.kv()
if(v>=b)if(P.h7(a,b,v,20,w)===20)w[7]=v
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
p=!1}else{if(!(r<c&&r===s+2&&C.b.aa(a,"..",s)))n=r>s+2&&C.b.aa(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.aa(a,"file",b)){if(u<=b){if(!C.b.aa(a,"/",s)){m="file:///"
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
s=7}else if(s===r)if(b===0&&!0){a=C.b.b0(a,s,r,"/");++r;++q;++c}else{a=C.b.u(a,b,s)+"/"+C.b.u(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.aa(a,"http",b)){if(x&&t+3===s&&C.b.aa(a,"80",t+1))if(b===0&&!0){a=C.b.b0(a,t,s,"")
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
else if(v===z&&C.b.aa(a,"https",b)){if(x&&t+4===s&&C.b.aa(a,"443",t+1))if(b===0&&!0){a=C.b.b0(a,t,s,"")
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
q-=b}return new P.lI(a,v,u,t,s,r,q,o)}return P.lX(a,b,c,v,u,t,s,r,q,o)},
fu:function(a,b){var z=P.h
return C.a.jE(H.c(a.split("&"),[z]),P.ey(z,z),new P.kD(b),[P.H,P.h,P.h])},
ky:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.kz(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.a1(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.ca(C.b.u(a,v,w),null,null)
if(typeof s!=="number")return s.dg()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.f(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.ca(C.b.u(a,v,c),null,null)
if(typeof s!=="number")return s.dg()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.f(y,u)
y[u]=s
return y},
ft:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.kB(a)
y=new P.kC(z,a)
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
q=C.a.gaA(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.ky(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.f(o,l)
o[l]=0
i=l+1
if(i>=n)return H.f(o,i)
o[i]=0
l+=2}else{i=C.h.aR(k,8)
if(l<0||l>=n)return H.f(o,l)
o[l]=i
i=l+1
if(i>=n)return H.f(o,i)
o[i]=k&255
l+=2}}return o},
mn:function(){var z,y,x,w,v
z=P.iV(22,new P.mp(),!0,P.O)
y=new P.mo(z)
x=new P.mq()
w=new P.mr()
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
h7:function(a,b,c,d,e){var z,y,x,w,v
H.k(e,"$isb",[P.m],"$asb")
z=$.$get$h8()
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
return(z^C.h.aR(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.i0(H.jw(this))
y=P.bT(H.ju(this))
x=P.bT(H.jq(this))
w=P.bT(H.jr(this))
v=P.bT(H.jt(this))
u=P.bT(H.jv(this))
t=P.i1(H.js(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
n:{
i0:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
i1:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bT:function(a){if(a>=10)return""+a
return"0"+a}}},
q:{"^":"ak;"},
"+double":0,
bt:{"^":"a;a",
T:function(a,b){return C.h.T(this.a,H.d(b,"$isbt").a)},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.bt))return!1
return this.a===b.a},
gY:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.i7()
y=this.a
if(y<0)return"-"+new P.bt(0-y).i(0)
x=z.$1(C.h.a6(y,6e7)%60)
w=z.$1(C.h.a6(y,1e6)%60)
v=new P.i6().$1(y%1e6)
return""+C.h.a6(y,36e8)+":"+H.i(x)+":"+H.i(w)+"."+H.i(v)},
n:{
el:function(a,b,c,d,e,f){return new P.bt(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
i6:{"^":"n:28;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
i7:{"^":"n:28;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a3:{"^":"a;"},
eM:{"^":"a3;",
i:function(a){return"Throw of null."}},
aH:{"^":"a3;a,b,c,d",
gc6:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc5:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.i(z)
w=this.gc6()+y+x
if(!this.a)return w
v=this.gc5()
u=P.cj(this.b)
return w+v+": "+H.i(u)},
n:{
ce:function(a){return new P.aH(!1,null,null,a)},
cS:function(a,b,c){return new P.aH(!0,a,b,c)}}},
cu:{"^":"aH;e,f,a,b,c,d",
gc6:function(){return"RangeError"},
gc5:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.i(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.i(z)
else if(x>z)y=": Not in range "+H.i(z)+".."+H.i(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.i(z)}return y},
n:{
c2:function(a,b,c){return new P.cu(null,null,!0,a,b,"Value not in range")},
a1:function(a,b,c,d,e){return new P.cu(b,c,!0,a,d,"Invalid value")},
b_:function(a,b,c,d,e,f){if(typeof a!=="number")return H.A(a)
if(0>a||a>c)throw H.e(P.a1(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.e(P.a1(b,a,c,"end",f))
return b}return c}}},
ix:{"^":"aH;e,p:f>,a,b,c,d",
gc6:function(){return"RangeError"},
gc5:function(){if(J.hu(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.i(z)},
n:{
b4:function(a,b,c,d,e){var z=H.ab(e!=null?e:J.as(b))
return new P.ix(b,z,!0,a,c,"Index out of range")}}},
kw:{"^":"a3;a",
i:function(a){return"Unsupported operation: "+this.a},
n:{
W:function(a){return new P.kw(a)}}},
kt:{"^":"a3;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
n:{
cz:function(a){return new P.kt(a)}}},
dg:{"^":"a3;a",
i:function(a){return"Bad state: "+this.a},
n:{
f1:function(a){return new P.dg(a)}}},
hU:{"^":"a3;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.i(P.cj(z))+"."},
n:{
aI:function(a){return new P.hU(a)}}},
jj:{"^":"a;",
i:function(a){return"Out of Memory"},
$isa3:1},
f0:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isa3:1},
hZ:{"^":"a3;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fJ:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
il:{"^":"a;a,b,c",
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
V:function(a,b,c){return new P.il(a,b,c)}}},
bU:{"^":"a;"},
m:{"^":"ak;"},
"+int":0,
p:{"^":"a;$ti",
d7:["fp",function(a,b){var z=H.a5(this,"p",0)
return new H.dA(this,H.l(b,{func:1,ret:P.N,args:[z]}),[z])}],
gp:function(a){var z,y
z=this.gV(this)
for(y=0;z.E();)++y
return y},
gaJ:function(a){var z,y
z=this.gV(this)
if(!z.E())throw H.e(H.co())
y=z.gK()
if(z.E())throw H.e(H.iA())
return y},
a8:function(a,b){var z,y,x
if(b<0)H.r(P.a1(b,0,null,"index",null))
for(z=this.gV(this),y=0;z.E();){x=z.gK()
if(b===y)return x;++y}throw H.e(P.b4(b,this,"index",null,y))},
i:function(a){return P.iz(this,"(",")")}},
aX:{"^":"a;$ti"},
b:{"^":"a;$ti",$isp:1},
"+List":0,
H:{"^":"a;$ti"},
E:{"^":"a;",
gY:function(a){return P.a.prototype.gY.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
ak:{"^":"a;"},
"+num":0,
a:{"^":";",
v:function(a,b){return this===b},
gY:function(a){return H.bD(this)},
i:function(a){return"Instance of '"+H.b8(this)+"'"},
toString:function(){return this.i(this)}},
aM:{"^":"a;"},
h:{"^":"a;",$iseN:1},
"+String":0,
ai:{"^":"a;aO:a<",
gp:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isnG:1,
n:{
f2:function(a,b,c){var z=J.b3(b)
if(!z.E())return a
if(c.length===0){do a+=H.i(z.gK())
while(z.E())}else{a+=H.i(z.gK())
for(;z.E();)a=a+c+H.i(z.gK())}return a}}},
kD:{"^":"n:44;a",
$2:function(a,b){var z,y,x,w
z=P.h
H.k(a,"$isH",[z,z],"$asH")
H.C(b)
y=J.bQ(b).eE(b,"=")
if(y===-1){if(b!=="")a.q(0,P.dF(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.u(b,0,y)
w=C.b.as(b,y+1)
z=this.a
a.q(0,P.dF(x,0,x.length,z,!0),P.dF(w,0,w.length,z,!0))}return a}},
kz:{"^":"n:43;a",
$2:function(a,b){throw H.e(P.V("Illegal IPv4 address, "+a,this.a,b))}},
kB:{"^":"n:42;a",
$2:function(a,b){throw H.e(P.V("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
kC:{"^":"n:41;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.ca(C.b.u(this.b,a,b),null,16)
if(typeof z!=="number")return z.T()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cE:{"^":"a;c_:a<,b,c,d,eO:e>,f,r,0x,0y,0z,0Q,0ch",
shZ:function(a){var z=P.h
this.Q=H.k(a,"$isH",[z,z],"$asH")},
gf5:function(){return this.b},
gcR:function(a){var z=this.c
if(z==null)return""
if(C.b.a5(z,"["))return C.b.u(z,1,z.length-1)
return z},
gbU:function(a){var z=this.d
if(z==null)return P.fW(this.a)
return z},
gd_:function(){var z=this.f
return z==null?"":z},
gez:function(){var z=this.r
return z==null?"":z},
d3:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
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
g=P.dE(g,0,0,h)
return new P.cE(i,j,c,f,d,g,this.r)},
eT:function(a,b){return this.d3(a,null,null,null,null,null,null,b,null,null)},
gd0:function(){var z,y
if(this.Q==null){z=this.f
y=P.h
this.shZ(new P.fq(P.fu(z==null?"":z,C.m),[y,y]))}return this.Q},
geA:function(){return this.c!=null},
geD:function(){return this.f!=null},
geB:function(){return this.r!=null},
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
if(!!J.P(b).$isdx){if(this.a==b.gc_())if(this.c!=null===b.geA())if(this.b==b.gf5())if(this.gcR(this)==b.gcR(b))if(this.gbU(this)==b.gbU(b))if(this.e===b.geO(b)){z=this.f
y=z==null
if(!y===b.geD()){if(y)z=""
if(z===b.gd_()){z=this.r
y=z==null
if(!y===b.geB()){if(y)z=""
z=z===b.gez()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
return z}return!1},
gY:function(a){var z=this.z
if(z==null){z=C.b.gY(this.i(0))
this.z=z}return z},
$isdx:1,
n:{
c7:function(a,b,c,d){var z,y,x,w,v,u
H.k(a,"$isb",[P.m],"$asb")
if(c===C.m){z=$.$get$h0().b
if(typeof b!=="string")H.r(H.aj(b))
z=z.test(b)}else z=!1
if(z)return b
H.x(b,H.a5(c,"bS",0))
y=c.gjy().cF(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.f(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.b9(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lX:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.m7(a,b,d)
else{if(d===b)P.bJ(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.m8(a,z,e-1):""
x=P.m1(a,e,f,!1)
if(typeof f!=="number")return f.G()
w=f+1
if(typeof g!=="number")return H.A(g)
v=w<g?P.m4(P.ca(C.b.u(a,w,g),new P.lY(a,f),null),j):null}else{y=""
x=null
v=null}u=P.m2(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.T()
t=h<i?P.dE(a,h+1,i,null):null
return new P.cE(j,y,x,v,u,t,i<c?P.m0(a,i+1,c):null)},
fW:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bJ:function(a,b,c){throw H.e(P.V(c,a,b))},
m4:function(a,b){if(a!=null&&a===P.fW(b))return
return a},
m1:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.a1(a,b)===91){if(typeof c!=="number")return c.M()
z=c-1
if(C.b.a1(a,z)!==93)P.bJ(a,b,"Missing end `]` to match `[` in host")
P.ft(a,b+1,z)
return C.b.u(a,b,c).toLowerCase()}if(typeof c!=="number")return H.A(c)
y=b
for(;y<c;++y)if(C.b.a1(a,y)===58){P.ft(a,b,c)
return"["+a+"]"}return P.ma(a,b,c)},
ma:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.A(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.a1(a,z)
if(v===37){u=P.h2(a,z,!0)
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
if(t)P.bJ(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.a1(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.ai("")
s=C.b.u(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fX(v)
z+=q
y=z}}}}if(x==null)return C.b.u(a,b,c)
if(y<c){s=C.b.u(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
m7:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fZ(C.b.I(a,b)))P.bJ(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.I(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.f(C.v,w)
w=(C.v[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bJ(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.u(a,b,c)
return P.lZ(y?a.toLowerCase():a)},
lZ:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
m8:function(a,b,c){return P.bK(a,b,c,C.a7,!1)},
m2:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bK(a,b,c,C.K,!0):C.r.l8(d,new P.m3(),P.h).k(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a5(w,"/"))w="/"+w
return P.m9(w,e,f)},
m9:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a5(a,"/"))return P.mb(a,!z||c)
return P.mc(a)},
dE:function(a,b,c,d){var z,y
z={}
H.k(d,"$isH",[P.h,null],"$asH")
if(a!=null){if(d!=null)throw H.e(P.ce("Both query and queryParameters specified"))
return P.bK(a,b,c,C.u,!0)}if(d==null)return
y=new P.ai("")
z.a=""
d.a0(0,new P.m5(new P.m6(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
m0:function(a,b,c){return P.bK(a,b,c,C.u,!0)},
h2:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.a1(a,b+1)
x=C.b.a1(a,z)
w=H.cK(y)
v=H.cK(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.h.aR(u,4)
if(z>=8)return H.f(C.w,z)
z=(C.w[z]&1<<(u&15))!==0}else z=!1
if(z)return H.b9(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.u(a,b,b+3).toUpperCase()
return},
fX:function(a){var z,y,x,w,v,u
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
for(v=0;--w,w>=0;x=128){u=C.h.im(a,6*w)&63|x
C.a.q(y,v,37)
C.a.q(y,v+1,C.b.I("0123456789ABCDEF",u>>>4))
C.a.q(y,v+2,C.b.I("0123456789ABCDEF",u&15))
v+=3}}return P.c3(y,0,null)},
bK:function(a,b,c,d,e){var z=P.h1(a,b,c,H.k(d,"$isb",[P.m],"$asb"),e)
return z==null?C.b.u(a,b,c):z},
h1:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
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
else{if(v===37){t=P.h2(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.f(C.t,u)
u=(C.t[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bJ(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.a1(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fX(v)}}if(w==null)w=new P.ai("")
w.a+=C.b.u(a,x,y)
w.a+=H.i(t)
if(typeof s!=="number")return H.A(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.T()
if(x<c)w.a+=C.b.u(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
h_:function(a){if(C.b.a5(a,"."))return!0
return C.b.eE(a,"/.")!==-1},
mc:function(a){var z,y,x,w,v,u,t
if(!P.h_(a))return a
z=H.c([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.J(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.f(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.k(z,"/")},
mb:function(a,b){var z,y,x,w,v,u
if(!P.h_(a))return!b?P.fY(a):a
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
C.a.q(z,0,P.fY(z[0]))}return C.a.k(z,"/")},
fY:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fZ(J.hx(a,0)))for(y=1;y<z;++y){x=C.b.I(a,y)
if(x===58)return C.b.u(a,0,y)+"%3A"+C.b.as(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.f(C.v,w)
w=(C.v[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
m_:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.I(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.e(P.ce("Invalid URL encoding"))}}return z},
dF:function(a,b,c,d,e){var z,y,x,w,v
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
if(x>127)throw H.e(P.ce("Illegal percent encoding in URI"))
if(x===37){if(y+3>w)throw H.e(P.ce("Truncated URI"))
C.a.h(v,P.m_(a,y+1))
y+=2}else if(x===43)C.a.h(v,32)
else C.a.h(v,x)}}H.k(v,"$isb",[P.m],"$asb")
return new P.kJ(!1).cF(v)},
fZ:function(a){var z=a|32
return 97<=z&&z<=122}}},
lY:{"^":"n:40;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.G()
throw H.e(P.V("Invalid port",this.a,z+1))}},
m3:{"^":"n:13;",
$1:function(a){return P.c7(C.a8,a,C.m,!1)}},
m6:{"^":"n:38;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.i(P.c7(C.w,a,C.m,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.i(P.c7(C.w,b,C.m,!0))}}},
m5:{"^":"n:35;a",
$2:function(a,b){var z,y
H.C(a)
if(b==null||typeof b==="string")this.a.$2(a,H.C(b))
else for(z=J.b3(H.hm(b,"$isp")),y=this.a;z.E();)y.$2(a,H.C(z.gK()))}},
kx:{"^":"a;a,b,c",
gf3:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
z=z[0]+1
x=C.b.eF(y,"?",z)
w=y.length
if(x>=0){v=P.bK(y,x+1,w,C.u,!1)
w=x}else v=null
z=new P.lb(this,"data",null,null,null,P.bK(y,z,w,C.K,!1),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.f(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
n:{
fr:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.c([b-1],[P.m])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.I(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.e(P.V("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.e(P.V("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.I(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaA(z)
if(v!==44||x!==t+7||!C.b.aa(a,"base64",t+1))throw H.e(P.V("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.P.jS(a,s,y)
else{r=P.h1(a,s,y,C.u,!0)
if(r!=null)a=C.b.b0(a,s,y,r)}return new P.kx(a,z,c)}}},
mp:{"^":"n:34;",
$1:function(a){return new Uint8Array(96)}},
mo:{"^":"n:33;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.f(z,a)
z=z[a]
J.hz(z,0,96,b)
return z}},
mq:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.I(b,y)^96
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
mr:{"^":"n;",
$3:function(a,b,c){var z,y,x
for(z=C.b.I(b,0),y=C.b.I(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.f(a,x)
a[x]=c}}},
lI:{"^":"a;a,b,c,d,e,f,r,x,0y",
geA:function(){return this.c>0},
geC:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.G()
y=this.e
if(typeof y!=="number")return H.A(y)
y=z+1<y
z=y}else z=!1
return z},
geD:function(){var z=this.f
if(typeof z!=="number")return z.T()
return z<this.r},
geB:function(){return this.r<this.a.length},
gdJ:function(){return this.b===4&&C.b.a5(this.a,"http")},
gdK:function(){return this.b===5&&C.b.a5(this.a,"https")},
gc_:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gdJ()){this.x="http"
z="http"}else if(this.gdK()){this.x="https"
z="https"}else if(z===4&&C.b.a5(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a5(this.a,"package")){this.x="package"
z="package"}else{z=C.b.u(this.a,0,z)
this.x=z}return z},
gf5:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.u(this.a,y,z-1):""},
gcR:function(a){var z=this.c
return z>0?C.b.u(this.a,z,this.d):""},
gbU:function(a){var z
if(this.geC()){z=this.d
if(typeof z!=="number")return z.G()
return P.ca(C.b.u(this.a,z+1,this.e),null,null)}if(this.gdJ())return 80
if(this.gdK())return 443
return 0},
geO:function(a){return C.b.u(this.a,this.e,this.f)},
gd_:function(){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.T()
return z<y?C.b.u(this.a,z+1,y):""},
gez:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.as(y,z+1):""},
gd0:function(){var z=this.f
if(typeof z!=="number")return z.T()
if(z>=this.r)return C.a9
z=P.h
return new P.fq(P.fu(this.gd_(),C.m),[z,z])},
d3:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.k(h,"$isH",[P.h,null],"$asH")
i=this.gc_()
z=i==="file"
y=this.c
j=y>0?C.b.u(this.a,this.b+3,y):""
f=this.geC()?this.gbU(this):null
y=this.c
if(y>0)c=C.b.u(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.u(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.a5(d,"/"))d="/"+d
g=P.dE(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.as(y,x+1)
return new P.cE(i,j,c,f,d,g,b)},
eT:function(a,b){return this.d3(a,null,null,null,null,null,null,b,null,null)},
gY:function(a){var z=this.y
if(z==null){z=C.b.gY(this.a)
this.y=z}return z},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!!J.P(b).$isdx)return this.a===b.i(0)
return!1},
i:function(a){return this.a},
$isdx:1},
lb:{"^":"cE;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
e_:function(a){var z=document.createElement("a")
return z},
e9:function(a,b){var z=document.createElement("canvas")
return z},
i8:function(a,b,c){var z,y
z=document.body
y=(z&&C.p).an(z,a,b,c)
y.toString
z=W.B
z=new H.dA(new W.aq(y),H.l(new W.i9(),{func:1,ret:P.N,args:[z]}),[z])
return H.d(z.gaJ(z),"$isQ")},
ia:function(a){H.d(a,"$isck")
return"wheel"},
bu:function(a){var z,y,x
z="element tag unavailable"
try{y=J.hC(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a7(x)}return z},
iy:function(a){var z,y,x
y=document.createElement("input")
z=H.d(y,"$ises")
try{J.hE(z,a)}catch(x){H.a7(x)}return z},
cB:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fN:function(a,b,c,d){var z,y
z=W.cB(W.cB(W.cB(W.cB(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
hb:function(a,b){var z
H.l(a,{func:1,ret:-1,args:[b]})
z=$.S
if(z===C.l)return a
return z.e4(a,b)},
a9:{"^":"Q;","%":"HTMLAudioElement|HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLLIElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
hI:{"^":"a9;",
i:function(a){return String(a)},
$ishI:1,
"%":"HTMLAnchorElement"},
no:{"^":"a9;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
e2:{"^":"a9;",$ise2:1,"%":"HTMLBaseElement"},
cf:{"^":"a9;",$iscf:1,"%":"HTMLBodyElement"},
cW:{"^":"a9;",
dd:function(a,b,c){var z=this.hh(a,b,P.mC(c,null))
return z},
hh:function(a,b,c){return a.getContext(b,c)},
$iscW:1,
"%":"HTMLCanvasElement"},
nr:{"^":"B;0p:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
nt:{"^":"la;0p:length=",
fd:function(a,b){var z=this.hi(a,this.h0(a,b))
return z==null?"":z},
h0:function(a,b){var z,y
z=$.$get$ee()
y=z[b]
if(typeof y==="string")return y
y=this.iq(a,b)
z[b]=y
return y},
iq:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.i2()+b
if(z in a)return z
return b},
hi:function(a,b){return a.getPropertyValue(b)},
gcA:function(a){return a.bottom},
gbd:function(a){return a.height},
gaY:function(a){return a.left},
gbm:function(a){return a.right},
gbp:function(a){return a.top},
gbr:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hY:{"^":"a;",
gaY:function(a){return this.fd(a,"left")}},
aW:{"^":"a9;",$isaW:1,"%":"HTMLDivElement"},
i3:{"^":"B;",
j3:function(a,b){return a.adoptNode(b)},
de:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
nu:{"^":"M;",
i:function(a){return String(a)},
"%":"DOMException"},
i4:{"^":"M;",
jm:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
i5:{"^":"M;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
v:function(a,b){var z
if(b==null)return!1
if(!H.bP(b,"$isaL",[P.ak],"$asaL"))return!1
z=J.X(b)
return a.left===z.gaY(b)&&a.top===z.gbp(b)&&a.width===z.gbr(b)&&a.height===z.gbd(b)},
gY:function(a){return W.fN(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gcA:function(a){return a.bottom},
gbd:function(a){return a.height},
gaY:function(a){return a.left},
gbm:function(a){return a.right},
gbp:function(a){return a.top},
gbr:function(a){return a.width},
$isaL:1,
$asaL:function(){return[P.ak]},
"%":";DOMRectReadOnly"},
l9:{"^":"cq;dE:a<,b",
gp:function(a){return this.b.length},
l:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.f(z,b)
return H.d(z[b],"$isQ")},
q:function(a,b,c){var z
H.d(c,"$isQ")
z=this.b
if(b<0||b>=z.length)return H.f(z,b)
J.cP(this.a,c,z[b])},
h:function(a,b){J.dX(this.a,b)
return b},
gV:function(a){var z=this.kp(this)
return new J.ay(z,z.length,0,[H.t(z,0)])},
$asU:function(){return[W.Q]},
$asp:function(){return[W.Q]},
$asb:function(){return[W.Q]}},
Q:{"^":"B;0kn:tagName=",
gj6:function(a){return new W.lc(a)},
gcE:function(a){return new W.l9(a,a.children)},
ge6:function(a){var z,y,x,w
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
an:["c0",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.eo
if(z==null){z=H.c([],[W.aE])
y=new W.eK(z)
C.a.h(z,W.fL(null))
C.a.h(z,W.fU())
$.eo=y
d=y}else d=z
z=$.en
if(z==null){z=new W.h3(d)
$.en=z
c=z}else{z.a=d
c=z}}if($.aJ==null){z=document
y=z.implementation
y=(y&&C.T).jm(y,"")
$.aJ=y
$.d_=y.createRange()
y=$.aJ
y.toString
y=y.createElement("base")
H.d(y,"$ise2")
y.href=z.baseURI
z=$.aJ.head;(z&&C.V).D(z,y)}z=$.aJ
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.d(y,"$iscf")}z=$.aJ
if(!!this.$iscf)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.aJ.body;(z&&C.p).D(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.a_(C.a6,a.tagName)){z=$.d_;(z&&C.M).fi(z,x)
z=$.d_
w=(z&&C.M).jk(z,b)}else{x.innerHTML=b
w=$.aJ.createDocumentFragment()
for(z=J.X(w);y=x.firstChild,y!=null;)z.D(w,y)}z=$.aJ.body
if(x==null?z!=null:x!==z)J.dZ(x)
c.dh(w)
C.z.j3(document,w)
return w},function(a,b,c){return this.an(a,b,c,null)},"jl",null,null,"gl6",5,5,null],
fl:function(a,b,c,d){a.textContent=null
this.D(a,this.an(a,b,c,d))},
fk:function(a,b){return this.fl(a,b,null,null)},
b1:function(a,b){return a.getAttribute(b)},
i0:function(a,b){return a.removeAttribute(b)},
fj:function(a,b,c){return a.setAttribute(b,c)},
$isQ:1,
"%":";Element"},
i9:{"^":"n:23;",
$1:function(a){return!!J.P(H.d(a,"$isB")).$isQ}},
ac:{"^":"M;",$isac:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
ck:{"^":"M;",
fW:function(a,b,c,d){return a.addEventListener(b,H.bj(H.l(c,{func:1,args:[W.ac]}),1),!1)},
$isck:1,
"%":";EventTarget"},
nv:{"^":"a9;0p:length=","%":"HTMLFormElement"},
ir:{"^":"a9;","%":"HTMLHeadElement"},
is:{"^":"M;0p:length=",
i6:function(a,b,c,d){return a.replaceState(b,c,d)},
"%":"History"},
it:{"^":"ls;",
gp:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.b4(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$isB")
throw H.e(P.W("Cannot assign element of immutable List."))},
a8:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isau:1,
$asau:function(){return[W.B]},
$asU:function(){return[W.B]},
$isp:1,
$asp:function(){return[W.B]},
$isb:1,
$asb:function(){return[W.B]},
$isit:1,
$asaA:function(){return[W.B]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
iu:{"^":"i3;","%":"HTMLDocument"},
es:{"^":"a9;0type",
sks:function(a,b){a.type=H.C(b)},
$ises:1,
"%":"HTMLInputElement"},
by:{"^":"dm;",$isby:1,"%":"KeyboardEvent"},
iI:{"^":"a9;","%":"HTMLLabelElement"},
iW:{"^":"M;",
i:function(a){return String(a)},
$isiW:1,
"%":"Location"},
av:{"^":"dm;",$isav:1,"%":"PointerEvent;DragEvent|MouseEvent"},
aq:{"^":"cq;a",
gaJ:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.e(P.f1("No elements"))
if(y>1)throw H.e(P.f1("More than one element"))
return z.firstChild},
av:function(a,b){var z,y,x,w,v
H.k(b,"$isp",[W.B],"$asp")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.X(y),v=0;v<x;++v)w.D(y,z.firstChild)
return},
q:function(a,b,c){var z,y
H.d(c,"$isB")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.f(y,b)
J.cP(z,c,y[b])},
gV:function(a){var z=this.a.childNodes
return new W.eq(z,z.length,-1,[H.c9(C.aa,z,"aA",0)])},
gp:function(a){return this.a.childNodes.length},
l:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
$asU:function(){return[W.B]},
$asp:function(){return[W.B]},
$asb:function(){return[W.B]}},
B:{"^":"ck;0k9:previousSibling=",
kb:function(a){var z=a.parentNode
if(z!=null)J.cc(z,a)},
kg:function(a,b){var z,y
try{z=a.parentNode
J.cP(z,b,a)}catch(y){H.a7(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.fo(a):z},
D:function(a,b){return a.appendChild(H.d(b,"$isB"))},
i1:function(a,b){return a.removeChild(b)},
i5:function(a,b,c){return a.replaceChild(b,c)},
$isB:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
je:{"^":"ly;",
gp:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.b4(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$isB")
throw H.e(P.W("Cannot assign element of immutable List."))},
a8:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isau:1,
$asau:function(){return[W.B]},
$asU:function(){return[W.B]},
$isp:1,
$asp:function(){return[W.B]},
$isb:1,
$asb:function(){return[W.B]},
$asaA:function(){return[W.B]},
"%":"NodeList|RadioNodeList"},
jD:{"^":"M;",
jk:function(a,b){return a.createContextualFragment(b)},
fi:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
nE:{"^":"a9;0p:length=","%":"HTMLSelectElement"},
cv:{"^":"a9;",$iscv:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
k8:{"^":"a9;",
an:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.c0(a,b,c,d)
z=W.i8("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.aq(y).av(0,new W.aq(z))
return y},
hk:function(a,b){return a.insertRow(b)},
"%":"HTMLTableElement"},
k9:{"^":"a9;",
an:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.c0(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.o.an(z.createElement("table"),b,c,d)
z.toString
z=new W.aq(z)
x=z.gaJ(z)
x.toString
z=new W.aq(x)
w=z.gaJ(z)
y.toString
w.toString
new W.aq(y).av(0,new W.aq(w))
return y},
dI:function(a,b){return a.insertCell(b)},
"%":"HTMLTableRowElement"},
nH:{"^":"a9;",
an:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.c0(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.o.an(z.createElement("table"),b,c,d)
z.toString
z=new W.aq(z)
x=z.gaJ(z)
y.toString
x.toString
new W.aq(y).av(0,new W.aq(x))
return y},
"%":"HTMLTableSectionElement"},
f5:{"^":"a9;",$isf5:1,"%":"HTMLTemplateElement"},
bb:{"^":"M;",$isbb:1,"%":"Touch"},
bc:{"^":"dm;",$isbc:1,"%":"TouchEvent"},
nJ:{"^":"lU;",
gp:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.b4(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$isbb")
throw H.e(P.W("Cannot assign element of immutable List."))},
a8:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isau:1,
$asau:function(){return[W.bb]},
$asU:function(){return[W.bb]},
$isp:1,
$asp:function(){return[W.bb]},
$isb:1,
$asb:function(){return[W.bb]},
$asaA:function(){return[W.bb]},
"%":"TouchList"},
dm:{"^":"ac;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
bH:{"^":"av;",
gjs:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.W("deltaY is not supported"))},
gjr:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.W("deltaX is not supported"))},
$isbH:1,
"%":"WheelEvent"},
l2:{"^":"ck;",
i7:function(a,b){return a.requestAnimationFrame(H.bj(H.l(b,{func:1,ret:-1,args:[P.ak]}),1))},
ha:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fH:{"^":"B;",$isfH:1,"%":"Attr"},
nP:{"^":"i5;",
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
v:function(a,b){var z
if(b==null)return!1
if(!H.bP(b,"$isaL",[P.ak],"$asaL"))return!1
z=J.X(b)
return a.left===z.gaY(b)&&a.top===z.gbp(b)&&a.width===z.gbr(b)&&a.height===z.gbd(b)},
gY:function(a){return W.fN(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gbd:function(a){return a.height},
gbr:function(a){return a.width},
"%":"ClientRect|DOMRect"},
nT:{"^":"mk;",
gp:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.b4(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$isB")
throw H.e(P.W("Cannot assign element of immutable List."))},
a8:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$isau:1,
$asau:function(){return[W.B]},
$asU:function(){return[W.B]},
$isp:1,
$asp:function(){return[W.B]},
$isb:1,
$asb:function(){return[W.B]},
$asaA:function(){return[W.B]},
"%":"MozNamedAttrMap|NamedNodeMap"},
l8:{"^":"eB;dE:a<",
a0:function(a,b){var z,y,x,w,v,u
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(z=this.gaz(),y=z.length,x=this.a,w=J.X(x),v=0;v<z.length;z.length===y||(0,H.z)(z),++v){u=z[v]
b.$2(u,w.b1(x,u))}},
gaz:function(){var z,y,x,w,v
z=this.a.attributes
y=H.c([],[P.h])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.f(z,w)
v=H.d(z[w],"$isfH")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$ascs:function(){return[P.h,P.h]},
$asH:function(){return[P.h,P.h]}},
lc:{"^":"l8;a",
l:function(a,b){return J.cR(this.a,H.C(b))},
q:function(a,b,c){J.hF(this.a,b,c)},
gp:function(a){return this.gaz().length}},
ld:{"^":"k3;a,b,c,$ti"},
nQ:{"^":"ld;a,b,c,$ti"},
le:{"^":"dh;a,b,c,d,e,$ti",n:{
a2:function(a,b,c,d,e){var z,y
z=W.hb(new W.lf(c),W.ac)
y=z!=null
if(y&&!0){H.l(z,{func:1,args:[W.ac]})
if(y)J.hw(a,b,z,!1)}return new W.le(0,a,b,z,!1,[e])}}},
lf:{"^":"n:31;a",
$1:function(a){return this.a.$1(H.d(a,"$isac"))}},
c6:{"^":"a;a",
fI:function(a){var z,y
z=$.$get$dC()
if(z.gjL(z)){for(y=0;y<262;++y)z.q(0,C.a5[y],W.mR())
for(y=0;y<12;++y)z.q(0,C.B[y],W.mS())}},
aS:function(a){return $.$get$fM().a_(0,W.bu(a))},
aG:function(a,b,c){var z,y,x
z=W.bu(a)
y=$.$get$dC()
x=y.l(0,H.i(z)+"::"+b)
if(x==null)x=y.l(0,"*::"+b)
if(x==null)return!1
return H.dK(x.$4(a,b,c,this))},
$isaE:1,
n:{
fL:function(a){var z,y
z=W.e_(null)
y=window.location
z=new W.c6(new W.lE(z,y))
z.fI(a)
return z},
nR:[function(a,b,c,d){H.d(a,"$isQ")
H.C(b)
H.C(c)
H.d(d,"$isc6")
return!0},"$4","mR",16,0,20],
nS:[function(a,b,c,d){var z,y,x
H.d(a,"$isQ")
H.C(b)
H.C(c)
z=H.d(d,"$isc6").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","mS",16,0,20]}},
aA:{"^":"a;$ti",
gV:function(a){return new W.eq(a,this.gp(a),-1,[H.c9(this,a,"aA",0)])}},
eK:{"^":"a;a",
aS:function(a){return C.a.e1(this.a,new W.jg(a))},
aG:function(a,b,c){return C.a.e1(this.a,new W.jf(a,b,c))},
$isaE:1},
jg:{"^":"n:25;a",
$1:function(a){return H.d(a,"$isaE").aS(this.a)}},
jf:{"^":"n:25;a,b,c",
$1:function(a){return H.d(a,"$isaE").aG(this.a,this.b,this.c)}},
lF:{"^":"a;",
fR:function(a,b,c,d){var z,y,x
this.a.av(0,c)
z=b.d7(0,new W.lG())
y=b.d7(0,new W.lH())
this.b.av(0,z)
x=this.c
x.av(0,C.H)
x.av(0,y)},
aS:function(a){return this.a.a_(0,W.bu(a))},
aG:["fu",function(a,b,c){var z,y
z=W.bu(a)
y=this.c
if(y.a_(0,H.i(z)+"::"+b))return this.d.j4(c)
else if(y.a_(0,"*::"+b))return this.d.j4(c)
else{y=this.b
if(y.a_(0,H.i(z)+"::"+b))return!0
else if(y.a_(0,"*::"+b))return!0
else if(y.a_(0,H.i(z)+"::*"))return!0
else if(y.a_(0,"*::*"))return!0}return!1}],
$isaE:1},
lG:{"^":"n:26;",
$1:function(a){return!C.a.a_(C.B,H.C(a))}},
lH:{"^":"n:26;",
$1:function(a){return C.a.a_(C.B,H.C(a))}},
lN:{"^":"lF;e,a,b,c,d",
aG:function(a,b,c){if(this.fu(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cR(a,"template")==="")return this.e.a_(0,b)
return!1},
n:{
fU:function(){var z,y,x,w,v
z=P.h
y=P.ez(C.A,z)
x=H.t(C.A,0)
w=H.l(new W.lO(),{func:1,ret:z,args:[x]})
v=H.c(["TEMPLATE"],[z])
y=new W.lN(y,P.bZ(null,null,null,z),P.bZ(null,null,null,z),P.bZ(null,null,null,z),null)
y.fR(null,new H.j1(C.A,w,[x,z]),v,null)
return y}}},
lO:{"^":"n:13;",
$1:function(a){return"TEMPLATE::"+H.i(H.C(a))}},
lM:{"^":"a;",
aS:function(a){var z=J.P(a)
if(!!z.$iseX)return!1
z=!!z.$isdi
if(z&&W.bu(a)==="foreignObject")return!1
if(z)return!0
return!1},
aG:function(a,b,c){if(b==="is"||C.b.a5(b,"on"))return!1
return this.aS(a)},
$isaE:1},
eq:{"^":"a;a,b,c,0d,$ti",
sdH:function(a){this.d=H.x(a,H.t(this,0))},
E:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sdH(J.hv(this.a,z))
this.c=z
return!0}this.sdH(null)
this.c=y
return!1},
gK:function(){return this.d},
$isaX:1},
aE:{"^":"a;"},
lE:{"^":"a;a,b",$isnK:1},
h3:{"^":"a;a",
dh:function(a){new W.mh(this).$2(a,null)},
b7:function(a,b){if(b==null)J.dZ(a)
else J.cc(b,a)},
ic:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.hA(a)
x=J.cR(y.gdE(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a7(t)}v="element unprintable"
try{v=J.af(a)}catch(t){H.a7(t)}try{u=W.bu(a)
this.ib(H.d(a,"$isQ"),b,z,v,u,H.d(y,"$isH"),H.C(x))}catch(t){if(H.a7(t) instanceof P.aH)throw t
else{this.b7(a,b)
window
s="Removing corrupted element "+H.i(v)
if(typeof console!="undefined")window.console.warn(s)}}},
ib:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.b7(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.aS(a)){this.b7(a,b)
window
z="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.aG(a,"is",g)){this.b7(a,b)
window
z="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gaz()
y=H.c(z.slice(0),[H.t(z,0)])
for(x=f.gaz().length-1,z=f.a,w=J.X(z);x>=0;--x){if(x>=y.length)return H.f(y,x)
v=y[x]
if(!this.a.aG(a,J.hH(v),w.b1(z,v))){window
u="Removing disallowed attribute <"+H.i(e)+" "+v+'="'+H.i(w.b1(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.b1(z,v)
w.i0(z,v)}}if(!!J.P(a).$isf5)this.dh(a.content)},
$isnC:1},
mh:{"^":"n:46;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.ic(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.b7(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.hB(z)}catch(w){H.a7(w)
v=H.d(z,"$isB")
if(x){u=v.parentNode
if(u!=null)J.cc(u,v)}else J.cc(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.d(y,"$isB")}}},
la:{"^":"M+hY;"},
lr:{"^":"M+U;"},
ls:{"^":"lr+aA;"},
lx:{"^":"M+U;"},
ly:{"^":"lx+aA;"},
lT:{"^":"M+U;"},
lU:{"^":"lT+aA;"},
mj:{"^":"M+U;"},
mk:{"^":"mj+aA;"}}],["","",,P,{"^":"",
mC:function(a,b){var z={}
a.a0(0,new P.mD(z))
return z},
ek:function(){var z=$.ej
if(z==null){z=J.cQ(window.navigator.userAgent,"Opera",0)
$.ej=z}return z},
i2:function(){var z,y
z=$.eg
if(z!=null)return z
y=$.eh
if(y==null){y=J.cQ(window.navigator.userAgent,"Firefox",0)
$.eh=y}if(y)z="-moz-"
else{y=$.ei
if(y==null){y=!P.ek()&&J.cQ(window.navigator.userAgent,"Trident/",0)
$.ei=y}if(y)z="-ms-"
else z=P.ek()?"-o-":"-webkit-"}$.eg=z
return z},
lJ:{"^":"a;",
ew:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
d6:function(a){var z,y,x,w
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.P(a)
if(!!y.$isam)return new Date(a.a)
if(!!y.$isjH)throw H.e(P.cz("structured clone of RegExp"))
if(!!y.$isda)return a
if(!!y.$isH){x=this.ew(a)
y=this.b
if(x>=y.length)return H.f(y,x)
w=y[x]
z.a=w
if(w!=null)return w
w={}
z.a=w
C.a.q(y,x,w)
a.a0(0,new P.lL(z,this))
return z.a}if(!!y.$isb){x=this.ew(a)
z=this.b
if(x>=z.length)return H.f(z,x)
w=z[x]
if(w!=null)return w
return this.jj(a,x)}throw H.e(P.cz("structured clone of other type"))},
jj:function(a,b){var z,y,x,w
z=J.bm(a)
y=z.gp(a)
x=new Array(y)
C.a.q(this.b,b,x)
for(w=0;w<y;++w)C.a.q(x,w,this.d6(z.l(a,w)))
return x}},
lL:{"^":"n:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.d6(b)}},
mD:{"^":"n:6;a",
$2:function(a,b){this.a[a]=b}},
lK:{"^":"lJ;a,b"},
ii:{"^":"cq;a,b",
gbx:function(){var z,y,x
z=this.b
y=H.a5(z,"U",0)
x=W.Q
return new H.j_(new H.dA(z,H.l(new P.ij(),{func:1,ret:P.N,args:[y]}),[y]),H.l(new P.ik(),{func:1,ret:x,args:[y]}),[y,x])},
q:function(a,b,c){var z
H.d(c,"$isQ")
z=this.gbx()
J.hD(z.b.$1(J.cd(z.a,b)),c)},
h:function(a,b){J.dX(this.b.a,b)},
gp:function(a){return J.as(this.gbx().a)},
l:function(a,b){var z=this.gbx()
return z.b.$1(J.cd(z.a,b))},
gV:function(a){var z=P.iU(this.gbx(),!1,W.Q)
return new J.ay(z,z.length,0,[H.t(z,0)])},
$asU:function(){return[W.Q]},
$asp:function(){return[W.Q]},
$asb:function(){return[W.Q]}},
ij:{"^":"n:23;",
$1:function(a){return!!J.P(H.d(a,"$isB")).$isQ}},
ik:{"^":"n:55;",
$1:function(a){return H.j(H.d(a,"$isB"),"$isQ")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cC:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lt:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
lz:{"^":"a;$ti",
gbm:function(a){var z=this.a
if(typeof z!=="number")return z.G()
return H.x(z+this.c,H.t(this,0))},
gcA:function(a){var z=this.b
if(typeof z!=="number")return z.G()
return H.x(z+this.d,H.t(this,0))},
i:function(a){return"Rectangle ("+H.i(this.a)+", "+H.i(this.b)+") "+this.c+" x "+this.d},
v:function(a,b){var z,y,x,w
if(b==null)return!1
if(!H.bP(b,"$isaL",[P.ak],"$asaL"))return!1
z=this.a
y=J.X(b)
x=y.gaY(b)
if(z==null?x==null:z===x){x=this.b
w=y.gbp(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.G()
w=H.t(this,0)
if(H.x(z+this.c,w)===y.gbm(b)){if(typeof x!=="number")return x.G()
z=H.x(x+this.d,w)===y.gcA(b)}else z=!1}else z=!1}else z=!1
return z},
gY:function(a){var z,y,x,w,v
z=this.a
y=J.bR(z)
x=this.b
w=J.bR(x)
if(typeof z!=="number")return z.G()
v=H.t(this,0)
z=H.x(z+this.c,v)
if(typeof x!=="number")return x.G()
v=H.x(x+this.d,v)
return P.lt(P.cC(P.cC(P.cC(P.cC(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
aL:{"^":"lz;aY:a>,bp:b>,br:c>,bd:d>,$ti"}}],["","",,P,{"^":"",eX:{"^":"di;",$iseX:1,"%":"SVGScriptElement"},di:{"^":"Q;",
gcE:function(a){return new P.ii(a,new W.aq(a))},
an:function(a,b,c,d){var z,y,x,w,v,u
z=H.c([],[W.aE])
C.a.h(z,W.fL(null))
C.a.h(z,W.fU())
C.a.h(z,new W.lM())
c=new W.h3(new W.eK(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.p).jl(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.aq(w)
u=z.gaJ(z)
for(z=J.X(v);x=u.firstChild,x!=null;)z.D(v,x)
return v},
$isdi:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"}}],["","",,P,{"^":"",O:{"^":"a;",$isp:1,
$asp:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}}}],["","",,P,{"^":""}],["","",,P,{"^":"",hM:{"^":"M;",$ishM:1,"%":"WebGLBuffer"},im:{"^":"M;",$isim:1,"%":"WebGLFramebuffer"},jA:{"^":"M;",$isjA:1,"%":"WebGLProgram"},db:{"^":"M;",
e2:function(a,b,c){return a.attachShader(b,c)},
aw:function(a,b,c){return a.bindBuffer(b,c)},
j8:function(a,b,c){return a.bindFramebuffer(b,c)},
j9:function(a,b,c){return a.blendFunc(b,c)},
e5:function(a,b,c,d){return a.bufferData(b,c,d)},
jc:function(a,b){return a.clear(b)},
jd:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
je:function(a,b){return a.clearDepth(b)},
jg:function(a,b){return a.compileShader(b)},
jn:function(a,b){return a.createShader(b)},
jp:function(a,b){return a.deleteProgram(b)},
jq:function(a,b){return a.deleteShader(b)},
jt:function(a,b){return a.depthFunc(b)},
ju:function(a,b){return a.disable(b)},
e7:function(a,b){return a.disableVertexAttribArray(b)},
jw:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cJ:function(a,b){return a.enable(b)},
e9:function(a,b){return a.enableVertexAttribArray(b)},
f8:function(a,b,c){return a.getActiveAttrib(b,c)},
f9:function(a,b,c){return a.getActiveUniform(b,c)},
fa:function(a,b,c){return a.getAttribLocation(b,c)},
df:function(a,b){return a.getParameter(b)},
fc:function(a,b){return a.getProgramInfoLog(b)},
bZ:function(a,b,c){return a.getProgramParameter(b,c)},
fe:function(a,b){return a.getShaderInfoLog(b)},
ff:function(a,b,c){return a.getShaderParameter(b,c)},
fg:function(a,b,c){return a.getUniformLocation(b,c)},
jO:function(a,b){return a.linkProgram(b)},
fm:function(a,b,c){return a.shaderSource(b,c)},
S:function(a,b,c){return a.uniform1f(b,c)},
W:function(a,b,c){return a.uniform1i(b,c)},
w:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
f1:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
f2:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
f4:function(a,b){return a.useProgram(b)},
kt:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
ku:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isdb:1,
"%":"WebGLRenderingContext"},jT:{"^":"M;",$isjT:1,"%":"WebGLShader"},kr:{"^":"M;",$iskr:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",Z:{"^":"a;0a,0b,0c,0d,$ti",
sho:function(a){this.a=H.k(a,"$isb",[H.a5(this,"Z",0)],"$asb")},
sdO:function(a){this.b=H.l(a,{func:1,ret:P.N,args:[[P.p,H.a5(this,"Z",0)]]})},
sdM:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.m,[P.p,H.a5(this,"Z",0)]]})},
sdP:function(a){this.d=H.l(a,{func:1,ret:-1,args:[P.m,[P.p,H.a5(this,"Z",0)]]})},
c2:function(a){this.sho(H.c([],[a]))
this.sdO(null)
this.sdM(null)
this.sdP(null)},
di:function(a,b,c){var z=H.a5(this,"Z",0)
H.l(b,{func:1,ret:P.N,args:[[P.p,z]]})
z={func:1,ret:-1,args:[P.m,[P.p,z]]}
H.l(a,z)
H.l(c,z)
this.sdO(b)
this.sdM(a)
this.sdP(c)},
bu:function(a,b){return this.di(a,null,b)},
hQ:function(a){var z
H.k(a,"$isp",[H.a5(this,"Z",0)],"$asp")
z=this.b
if(z!=null)return z.$1(a)
return!0},
fD:function(a,b){var z
H.k(b,"$isp",[H.a5(this,"Z",0)],"$asp")
z=this.c
if(z!=null)z.$2(a,b)},
gp:function(a){return this.a.length},
gV:function(a){var z=this.a
return new J.ay(z,z.length,0,[H.t(z,0)])},
a8:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.f(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.a5(this,"Z",0)
H.x(b,z)
z=[z]
if(this.hQ(H.c([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.fD(x,H.c([b],z))}},
$isp:1,
n:{
cX:function(a){var z=new O.Z([a])
z.c2(a)
return z}}},d7:{"^":"a;0a,0b",
scb:function(a){this.a=H.k(a,"$isb",[V.ah],"$asb")},
gp:function(a){return this.a.length},
gC:function(){var z=this.b
if(z==null){z=D.L()
this.b=z}return z},
fE:function(a){var z=this.b
if(!(z==null))z.J(a)},
aK:function(){return this.fE(null)},
ga2:function(){var z=this.a
if(z.length>0)return C.a.gaA(z)
else return V.c_()},
eR:function(a){var z=this.a
if(a==null)C.a.h(z,V.c_())
else C.a.h(z,a)
this.aK()},
cZ:function(){var z=this.a
if(z.length>0){z.pop()
this.aK()}}}}],["","",,E,{"^":"",cT:{"^":"a;"},at:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0ai:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
sfF:function(a,b){this.y=H.k(b,"$isZ",[E.at],"$asZ")},
sai:function(a){this.z=H.d(a,"$isbv")},
sag:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gC().N(0,this.geM())
y=this.c
if(y!=null)y.gC().h(0,this.geM())
x=new D.F("shape",z,this.c,this,[F.eZ])
x.b=!0
this.ap(x)}},
sbi:function(a){var z,y
if(!J.J(this.r,a)){z=this.r
if(z!=null)z.gC().N(0,this.geL())
if(a!=null)a.gC().h(0,this.geL())
this.r=a
y=new D.F("mover",z,a,this,[U.aa])
y.b=!0
this.ap(y)}},
aB:function(a){var z,y,x,w
z=this.r
y=z!=null?z.a:null
if(!J.J(y,this.x)){x=this.x
this.x=y
w=new D.F("matrix",x,y,this,[V.ah])
w.b=!0
this.ap(w)}for(z=this.y.a,z=new J.ay(z,z.length,0,[H.t(z,0)]);z.E();)z.d.aB(a)},
b_:function(a){var z,y,x
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.ga2())
else C.a.h(z.a,y.t(0,z.ga2()))
z.aK()
a.eS(this.f)
z=a.dy
x=(z&&C.a).gaA(z)
if(x!=null&&this.d!=null)x.kf(a,this)
for(z=this.y.a,z=new J.ay(z,z.length,0,[H.t(z,0)]);z.E();)z.d.b_(a)
a.eQ()
a.dx.cZ()},
gC:function(){var z=this.z
if(z==null){z=D.L()
this.z=z}return z},
ap:function(a){var z=this.z
if(!(z==null))z.J(a)},
a4:function(){return this.ap(null)},
jX:[function(a){H.d(a,"$isy")
this.e=null
this.ap(a)},function(){return this.jX(null)},"le","$1","$0","geM",0,2,1],
jW:[function(a){this.ap(H.d(a,"$isy"))},function(){return this.jW(null)},"ld","$1","$0","geL",0,2,1],
jU:[function(a){this.ap(H.d(a,"$isy"))},function(){return this.jU(null)},"lb","$1","$0","geK",0,2,1],
la:[function(a,b){var z,y,x,w,v,u,t
H.k(b,"$isp",[E.at],"$asp")
for(z=b.length,y=this.geK(),x={func:1,ret:-1,args:[D.y]},w=[x],v=0;v<b.length;b.length===z||(0,H.z)(b),++v){u=b[v]
if(u!=null){if(u.gai()==null){t=new D.bv()
t.saj(null)
t.sb5(null)
t.c=null
t.d=0
u.sai(t)}t=u.gai()
t.toString
H.l(y,x)
if(t.a==null)t.saj(H.c([],w))
t=t.a;(t&&C.a).h(t,y)}}this.a4()},"$2","gjT",8,0,9],
lc:[function(a,b){var z,y
H.k(b,"$isp",[E.at],"$asp")
for(z=b.gV(b),y=this.geK();z.E();)z.gK().gC().N(0,y)
this.a4()},"$2","gjV",8,0,9],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$isaK:1,
n:{
ep:function(a,b,c,d,e,f){var z=new E.at()
z.a=d
z.b=!0
z.sfF(0,O.cX(E.at))
z.y.bu(z.gjT(),z.gjV())
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
z.sag(0,e)
z.sbi(c)
return z}}},jJ:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
sir:function(a){this.dy=H.k(a,"$isb",[O.cw],"$asb")},
sil:function(a){this.fr=H.k(a,"$isH",[P.h,A.dd],"$asH")},
fz:function(a,b){var z,y
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
z=new O.d7()
y=[V.ah]
z.scb(H.c([],y))
z.b=null
z.gC().h(0,new E.jL(this))
this.cy=z
z=new O.d7()
z.scb(H.c([],y))
z.b=null
z.gC().h(0,new E.jM(this))
this.db=z
z=new O.d7()
z.scb(H.c([],y))
z.b=null
z.gC().h(0,new E.jN(this))
this.dx=z
this.sir(H.c([],[O.cw]))
z=this.dy;(z&&C.a).h(z,null)
this.sil(new H.aY(0,0,[P.h,A.dd]))},
gka:function(){var z=this.z
if(z==null){z=this.cy.ga2().t(0,this.db.ga2())
this.z=z}return z},
eS:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaA(z):a;(z&&C.a).h(z,y)},
eQ:function(){var z=this.dy
if(z.length>1)z.pop()},
n:{
jK:function(a,b){var z=new E.jJ(a,b)
z.fz(a,b)
return z}}},jL:{"^":"n:8;a",
$1:function(a){var z
H.d(a,"$isy")
z=this.a
z.z=null
z.ch=null}},jM:{"^":"n:8;a",
$1:function(a){var z
H.d(a,"$isy")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},jN:{"^":"n:8;a",
$1:function(a){var z
H.d(a,"$isy")
z=this.a
z.ch=null
z.cx=null}},kb:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0ai:x<,0y,0z,0Q,0ch,0cx,0cy",
sai:function(a){this.x=H.d(a,"$isbv")},
fH:[function(a){H.d(a,"$isy")
this.ki()},function(){return this.fH(null)},"fG","$1","$0","gdl",0,2,1],
gjG:function(){var z,y,x
z=Date.now()
y=C.h.a6(P.el(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.am(z,!1)
return x/y},
dR:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.t()
if(typeof z!=="number")return H.A(z)
x=C.k.ex(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.t()
w=C.k.ex(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.fb(C.y,this.gkh())}},
ki:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.l(new E.kd(this),{func:1,ret:-1,args:[P.ak]})
C.O.ha(z)
C.O.i7(z,W.hb(y,P.ak))}},"$0","gkh",0,0,3],
ke:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.dR()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.am(w,!1)
x.y=P.el(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sp(w.a,0)
w.aK()
w=x.db
C.a.sp(w.a,0)
w.aK()
w=x.dx
C.a.sp(w.a,0)
w.aK()
w=x.dy;(w&&C.a).sp(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.b_(this.e)}x=this.z
if(!(x==null))x.J(null)}catch(v){z=H.a7(v)
y=H.bn(v)
P.dT("Error: "+H.i(z))
P.dT("Stack: "+H.i(y))
throw H.e(z)}},
n:{
kc:function(a,b,c,d,e){var z,y,x,w
z=J.P(a)
if(!!z.$iscW)return E.fa(a,!0,!0,!0,!1)
y=W.e9(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gcE(a).h(0,y)
w=E.fa(y,!0,!0,!0,!1)
w.a=a
return w},
fa:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.kb()
y=P.iQ(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.h,null)
x=C.q.dd(a,"webgl",y)
x=H.d(x==null?C.q.dd(a,"experimental-webgl",y):x,"$isdb")
if(x==null)H.r(P.u("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.jK(x,a)
w=new T.ka(x)
w.b=H.ab((x&&C.c).df(x,3379))
w.c=H.ab(C.c.df(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.kE(a)
v=new X.iH()
v.c=new X.aD(!1,!1,!1)
v.shY(P.bZ(null,null,null,P.m))
w.b=v
v=new X.jb(w)
v.f=0
v.r=V.aZ()
v.x=V.aZ()
v.Q=1
v.ch=1
w.c=v
v=new X.iX(w)
v.r=0
v.x=V.aZ()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.kg(w)
v.e=0
v.f=V.aZ()
v.r=V.aZ()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.shb(H.c([],[[P.dh,P.a]]))
v=w.z
u=document
t=W.av
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.a2(u,"contextmenu",H.l(w.ghD(),s),!1,t))
v=w.z
r=W.ac
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a2(a,"focus",H.l(w.ghG(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a2(a,"blur",H.l(w.ghz(),q),!1,r))
v=w.z
p=W.by
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a2(u,"keyup",H.l(w.ghI(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a2(u,"keydown",H.l(w.ghH(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a2(a,"mousedown",H.l(w.ghL(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a2(a,"mouseup",H.l(w.ghN(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a2(a,"mousemove",H.l(w.ghM(),s),!1,t))
p=w.z
o=W.bH;(p&&C.a).h(p,W.a2(a,H.C(W.ia(a)),H.l(w.ghO(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a2(u,"mousemove",H.l(w.ghE(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a2(u,"mouseup",H.l(w.ghF(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a2(u,"pointerlockchange",H.l(w.ghP(),q),!1,r))
r=w.z
q=W.bc
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a2(a,"touchstart",H.l(w.ghW(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a2(a,"touchend",H.l(w.ghU(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a2(a,"touchmove",H.l(w.ghV(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.am(Date.now(),!1)
z.cy=0
z.dR()
return z}}},kd:{"^":"n:32;a",
$1:function(a){var z
H.nc(a)
z=this.a
if(z.ch){z.ch=!1
z.ke()}}}}],["","",,Z,{"^":"",fF:{"^":"a;a,b",$isnp:1,n:{
dz:function(a,b,c){var z
H.k(c,"$isb",[P.m],"$asb")
z=a.createBuffer()
C.c.aw(a,b,z)
C.c.e5(a,b,new Int16Array(H.bg(c)),35044)
C.c.aw(a,b,null)
return new Z.fF(b,z)}}},e5:{"^":"cT;a,b,c,d,e",
bB:function(a){var z,y,x
try{y=a.a
C.c.e9(y,this.e)
C.c.kt(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.a7(x)
y=P.u('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.i(z))
throw H.e(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.i(this.e)+"]"}},l0:{"^":"a;a",$isnq:1},e6:{"^":"a;a,0b,c,d",
shj:function(a){this.b=H.k(a,"$isb",[Z.bV],"$asb")},
aX:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bB:function(a){var z,y
z=this.a
C.c.aw(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bB(a)},
f0:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.c.e7(x,z[y].e)
C.c.aw(x,this.a.a,null)},
b_:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.f(w,x)
v=w[x]
w=v.c
u=w.a
C.c.aw(y,u,w.b)
C.c.jw(y,v.a,v.b,5123,0)
C.c.aw(y,u,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.h]
y=H.c([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v)C.a.h(y,x[v].i(0))
u=H.c([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.af(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(y,", ")+"\nAttrs:   "+C.a.k(u,", ")},
$isnI:1},bV:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.b8(this.c)+"'")+"]"}},bd:{"^":"a;a",
gdj:function(a){var z,y
z=this.a
y=(z&$.$get$aQ().a)!==0?3:0
if((z&$.$get$aP().a)!==0)y+=3
if((z&$.$get$aO().a)!==0)y+=3
if((z&$.$get$aR().a)!==0)y+=2
if((z&$.$get$aS().a)!==0)y+=3
if((z&$.$get$bF().a)!==0)y+=3
if((z&$.$get$bG().a)!==0)y+=4
if((z&$.$get$be().a)!==0)++y
return(z&$.$get$aN().a)!==0?y+4:y},
j5:function(a){var z,y,x
z=$.$get$aQ()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aP()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aO()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aR()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aS()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bF()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bG()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$be()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aN()
if((y&z.a)!==0)if(x===a)return z
return $.$get$fE()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bd))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.c([],[P.h])
y=this.a
if((y&$.$get$aQ().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aP().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aO().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aR().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$aS().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bF().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bG().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$be().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$aN().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.k(z,"|")},
n:{
ap:function(a){return new Z.bd(a)}}}}],["","",,D,{"^":"",ea:{"^":"a;"},bv:{"^":"a;0a,0b,0c,0d",
saj:function(a){this.a=H.k(a,"$isb",[{func:1,ret:-1,args:[D.y]}],"$asb")},
sb5:function(a){this.b=H.k(a,"$isb",[{func:1,ret:-1,args:[D.y]}],"$asb")},
h:function(a,b){var z={func:1,ret:-1,args:[D.y]}
H.l(b,z)
if(this.a==null)this.saj(H.c([],[z]))
z=this.a;(z&&C.a).h(z,b)},
N:function(a,b){var z,y
H.l(b,{func:1,ret:-1,args:[D.y]})
z=this.a
z=z==null?null:C.a.a_(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).N(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.a_(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).N(z,b)||y}return y},
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
return!0}if(!x)C.a.a0(y,new D.ie(z))
y=this.b
if(!(y==null))C.a.a0(y,new D.ig(z))
z=this.b
if(!(z==null))C.a.sp(z,0)
return!0},
kj:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.J(y)}}},
ae:function(){return this.kj(!0,!1)},
n:{
L:function(){var z=new D.bv()
z.saj(null)
z.sb5(null)
z.c=null
z.d=0
return z}}},ie:{"^":"n:22;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.y]})
z=this.a.a
z.b
a.$1(z)}},ig:{"^":"n:22;a",
$1:function(a){var z
H.l(a,{func:1,ret:-1,args:[D.y]})
z=this.a.a
z.b
a.$1(z)}},y:{"^":"a;a,0b"},cm:{"^":"y;c,d,a,0b,$ti"},cn:{"^":"y;c,d,a,0b,$ti"},F:{"^":"y;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}}],["","",,X,{"^":"",e7:{"^":"a;a,b",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.e7))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}},ew:{"^":"a;a,b",
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ew))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}},iH:{"^":"a;0a,0b,0c,0d",
shY:function(a){this.d=H.k(a,"$iseY",[P.m],"$aseY")},
k6:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jZ:function(a){this.c=a.b
this.d.N(0,a.a)
return!1}},eA:{"^":"ct;x,y,c,d,e,a,0b"},iX:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
b4:function(a,b){var z,y,x,w,v,u,t,s
z=new P.am(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.t()
v=b.b
u=this.ch
if(typeof v!=="number")return v.t()
t=new V.ad(y.a+x*w,y.b+v*u)
u=this.a.gaT()
s=new X.bA(a,V.aZ(),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
cY:function(a,b){this.r=a.a
return!1},
bk:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.fh()
if(typeof z!=="number")return z.bY()
this.r=(z&~y)>>>0
return!1},
bj:function(a,b){var z=this.d
if(z==null)return!1
z.J(this.b4(a,b))
return!0},
k7:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaT()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.t()
t=a.b
s=this.cy
if(typeof t!=="number")return t.t()
w=new X.d8(new V.T(v*u,t*s),y,x,new P.am(w,!1),this)
w.b=!0
z.J(w)
return!0},
hK:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.am(Date.now(),!1)
y=this.f
x=new X.eA(c,a,this.a.gaT(),b,z,this)
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
return z+(this.c?"Shift+":"")}},bA:{"^":"ct;x,y,z,Q,ch,c,d,e,a,0b"},jb:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
c8:function(a,b,c){var z,y,x
z=new P.am(Date.now(),!1)
y=this.a.gaT()
x=new X.bA(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
cY:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.J(this.c8(a,b,!0))
return!0},
bk:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.fh()
if(typeof z!=="number")return z.bY()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.J(this.c8(a,b,!0))
return!0},
bj:function(a,b){var z=this.d
if(z==null)return!1
z.J(this.c8(a,b,!1))
return!0},
k8:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaT()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.t()
u=a.b
t=this.ch
if(typeof u!=="number")return u.t()
x=new X.d8(new V.T(w*v,u*t),y,b,new P.am(x,!1),this)
x.b=!0
z.J(x)
return!0},
ge8:function(){var z=this.b
if(z==null){z=D.L()
this.b=z}return z},
gbX:function(){var z=this.c
if(z==null){z=D.L()
this.c=z}return z},
geI:function(){var z=this.d
if(z==null){z=D.L()
this.d=z}return z}},d8:{"^":"ct;x,c,d,e,a,0b"},ct:{"^":"y;"},fe:{"^":"ct;x,y,z,Q,ch,c,d,e,a,0b"},kg:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
b4:function(a,b){var z,y,x,w
H.k(a,"$isb",[V.ad],"$asb")
z=new P.am(Date.now(),!1)
y=a.length>0?a[0]:V.aZ()
x=this.a.gaT()
w=new X.fe(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
k5:function(a){var z
H.k(a,"$isb",[V.ad],"$asb")
z=this.b
if(z==null)return!1
z.J(this.b4(a,!0))
return!0},
k_:function(a){var z
H.k(a,"$isb",[V.ad],"$asb")
z=this.c
if(z==null)return!1
z.J(this.b4(a,!0))
return!0},
k0:function(a){var z
H.k(a,"$isb",[V.ad],"$asb")
z=this.d
if(z==null)return!1
z.J(this.b4(a,!1))
return!0}},kE:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
shb:function(a){this.z=H.k(a,"$isb",[[P.dh,P.a]],"$asb")},
gaT:function(){var z=this.a
return V.eU(0,0,C.q.ge6(z).c,C.q.ge6(z).d)},
dB:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.ew(z,new X.aD(y,a.altKey,a.shiftKey))},
aQ:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aD(y,a.altKey,a.shiftKey)},
cq:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.aD(y,a.altKey,a.shiftKey)},
aF:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.M()
v=z.top
if(typeof x!=="number")return x.M()
return new V.ad(y-w,x-v)},
b6:function(a){return new V.T(a.movementX,a.movementY)},
ck:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.c([],[V.ad])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
t=C.k.aq(u.pageX)
C.k.aq(u.pageY)
s=z.left
C.k.aq(u.pageX)
C.a.h(y,new V.ad(t-s,C.k.aq(u.pageY)-z.top))}return y},
aD:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.e7(z,new X.aD(y,a.altKey,a.shiftKey))},
cc:function(a){var z,y,x,w,v,u
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
kN:[function(a){this.f=!0},"$1","ghG",4,0,12],
kG:[function(a){this.f=!1},"$1","ghz",4,0,12],
kK:[function(a){H.d(a,"$isav")
if(this.f&&this.cc(a))a.preventDefault()},"$1","ghD",4,0,4],
kP:[function(a){var z
H.d(a,"$isby")
if(!this.f)return
z=this.dB(a)
this.b.k6(z)},"$1","ghI",4,0,27],
kO:[function(a){var z
H.d(a,"$isby")
if(!this.f)return
z=this.dB(a)
this.b.jZ(z)},"$1","ghH",4,0,27],
kR:[function(a){var z,y,x,w
H.d(a,"$isav")
z=this.a
z.focus()
this.f=!0
this.aQ(a)
if(this.x){y=this.aD(a)
x=this.b6(a)
if(this.d.cY(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.aD(a)
w=this.aF(a)
if(this.c.cY(y,w))a.preventDefault()},"$1","ghL",4,0,4],
kT:[function(a){var z,y,x
H.d(a,"$isav")
this.aQ(a)
z=this.aD(a)
if(this.x){y=this.b6(a)
if(this.d.bk(z,y))a.preventDefault()
return}if(this.r)return
x=this.aF(a)
if(this.c.bk(z,x))a.preventDefault()},"$1","ghN",4,0,4],
kM:[function(a){var z,y,x
H.d(a,"$isav")
if(!this.cc(a)){this.aQ(a)
z=this.aD(a)
if(this.x){y=this.b6(a)
if(this.d.bk(z,y))a.preventDefault()
return}if(this.r)return
x=this.aF(a)
if(this.c.bk(z,x))a.preventDefault()}},"$1","ghF",4,0,4],
kS:[function(a){var z,y,x
H.d(a,"$isav")
this.aQ(a)
z=this.aD(a)
if(this.x){y=this.b6(a)
if(this.d.bj(z,y))a.preventDefault()
return}if(this.r)return
x=this.aF(a)
if(this.c.bj(z,x))a.preventDefault()},"$1","ghM",4,0,4],
kL:[function(a){var z,y,x
H.d(a,"$isav")
if(!this.cc(a)){this.aQ(a)
z=this.aD(a)
if(this.x){y=this.b6(a)
if(this.d.bj(z,y))a.preventDefault()
return}if(this.r)return
x=this.aF(a)
if(this.c.bj(z,x))a.preventDefault()}},"$1","ghE",4,0,4],
kU:[function(a){var z,y
H.d(a,"$isbH")
this.aQ(a)
z=new V.T((a&&C.N).gjr(a),C.N.gjs(a)).A(0,180)
if(this.x){if(this.d.k7(z))a.preventDefault()
return}if(this.r)return
y=this.aF(a)
if(this.c.k8(z,y))a.preventDefault()},"$1","ghO",4,0,37],
kV:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.aD(this.y)
x=this.aF(this.y)
this.d.hK(y,x,z)}},"$1","ghP",4,0,12],
l0:[function(a){var z
H.d(a,"$isbc")
this.a.focus()
this.f=!0
this.cq(a)
z=this.ck(a)
if(this.e.k5(z))a.preventDefault()},"$1","ghW",4,0,11],
kZ:[function(a){var z
H.d(a,"$isbc")
this.cq(a)
z=this.ck(a)
if(this.e.k_(z))a.preventDefault()},"$1","ghU",4,0,11],
l_:[function(a){var z
H.d(a,"$isbc")
this.cq(a)
z=this.ck(a)
if(this.e.k0(z))a.preventDefault()},"$1","ghV",4,0,11]}}],["","",,D,{"^":"",ci:{"^":"a;0a,0b,0c,0d",
gC:function(){var z=this.d
if(z==null){z=D.L()
this.d=z}return z},
aL:[function(a){var z
H.d(a,"$isy")
z=this.d
if(!(z==null))z.J(a)},function(){return this.aL(null)},"kw","$1","$0","gfK",0,2,1],
$isa4:1,
$isaK:1,
n:{
cZ:function(a,b){var z,y,x
z=new D.ci()
z.c=new V.a_(1,1,1)
z.a=V.fB()
y=z.b
z.b=b
b.gC().h(0,z.gfK())
x=new D.F("mover",y,z.b,z,[U.aa])
x.b=!0
z.aL(x)
if(!z.c.v(0,a)){y=z.c
z.c=a
x=new D.F("color",y,a,z,[V.a_])
x.b=!0
z.aL(x)}return z}}},a4:{"^":"a;",$isaK:1},iJ:{"^":"Z;0e,0f,0r,0x,0y,0z,0Q,0ch,0a,0b,0c,0d",
sh9:function(a){this.e=H.k(a,"$isb",[D.ci],"$asb")},
shX:function(a){this.f=H.k(a,"$isb",[D.eP],"$asb")},
sio:function(a){this.r=H.k(a,"$isb",[D.f_],"$asb")},
six:function(a){this.x=H.k(a,"$isb",[D.f7],"$asb")},
siy:function(a){this.y=H.k(a,"$isb",[D.f8],"$asb")},
siz:function(a){this.z=H.k(a,"$isb",[D.f9],"$asb")},
gC:function(){var z=this.Q
if(z==null){z=D.L()
this.Q=z}return z},
aL:function(a){var z=this.Q
if(!(z==null))z.J(a)},
hJ:[function(a){var z
H.d(a,"$isy")
z=this.ch
if(!(z==null))z.J(a)},function(){return this.hJ(null)},"kQ","$1","$0","gdN",0,2,1],
kW:[function(a){var z,y,x
H.k(a,"$isp",[D.a4],"$asp")
for(z=a.length,y=0;y<a.length;a.length===z||(0,H.z)(a),++y){x=a[y]
if(x==null||this.fJ(x))return!1}return!0},"$1","ghR",4,0,39],
kD:[function(a,b){var z,y,x,w,v,u,t,s
z=D.a4
H.k(b,"$isp",[z],"$asp")
for(y=b.length,x=this.gdN(),w={func:1,ret:-1,args:[D.y]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=H.d(b[u],"$isa4")
if(t instanceof D.ci)C.a.h(this.e,t)
s=t.d
if(s==null){s=new D.bv()
s.saj(null)
s.sb5(null)
s.c=null
s.d=0
t.d=s}H.l(x,w)
if(s.a==null)s.saj(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}z=new D.cm(a,b,this,[z])
z.b=!0
this.aL(z)},"$2","ghw",8,0,17],
kY:[function(a,b){var z,y,x,w
z=D.a4
H.k(b,"$isp",[z],"$asp")
for(y=b.gV(b),x=this.gdN();y.E();){w=y.gK()
C.a.N(this.e,w)
w.gC().N(0,x)}z=new D.cn(a,b,this,[z])
z.b=!0
this.aL(z)},"$2","ghT",8,0,17],
fJ:function(a){var z=C.a.a_(this.e,a)
return z},
$asp:function(){return[D.a4]},
$asZ:function(){return[D.a4]}},eP:{"^":"a;",$isa4:1,$isaK:1},f_:{"^":"a;",$isa4:1,$isaK:1},f7:{"^":"a;",$isa4:1,$isaK:1},f8:{"^":"a;",$isa4:1,$isaK:1},f9:{"^":"a;",$isa4:1,$isaK:1}}],["","",,V,{"^":"",
ns:[function(a,b){if(typeof b!=="number")return b.M()
if(typeof a!=="number")return H.A(a)
return Math.abs(b-a)<=1e-9},"$2","ja",8,0,36],
cO:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.k.bt(a-b,z)
return(a<0?a+z:a)+b},
G:function(a,b,c){if(a==null)return C.b.ad("null",c)
return C.b.ad(C.k.eZ($.o.$2(a,0)?0:a,b),c+b+1)},
bl:function(a,b,c){var z,y,x,w,v,u
H.k(a,"$isb",[P.q],"$asb")
z=H.c([],[P.h])
for(y=a.length,x=0,w=0;w<a.length;a.length===y||(0,H.z)(a),++w){v=V.G(a[w],b,c)
x=Math.max(x,v.length)
C.a.h(z,v)}for(u=z.length-1;u>=0;--u){if(u>=z.length)return H.f(z,u)
C.a.q(z,u,C.b.ad(z[u],x))}return z},
a_:{"^":"a;a,b,c",
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}},
bs:{"^":"a;a,b,c,d",
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bs))return!1
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
eD:{"^":"a;a,b,c,d,e,f,r,x,y",
af:function(a,b){var z=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.q])
return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eD))return!1
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
y=V.bl(H.c([this.a,this.d,this.r],z),3,0)
x=V.bl(H.c([this.b,this.e,this.x],z),3,0)
w=V.bl(H.c([this.c,this.f,this.y],z),3,0)
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
af:function(a,b){var z=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.q])
return z},
eG:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
if($.o.$2(a2,0))return V.c_()
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
d5:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.D(this.a*z+this.b*y+this.c*x,this.e*z+this.f*y+this.r*x,this.y*z+this.z*y+this.Q*x)},
bq:function(a){var z,y,x
z=a.a
y=a.b
x=a.c
return new V.a0(this.a*z+this.b*y+this.c*x+this.d,this.e*z+this.f*y+this.r*x+this.x,this.y*z+this.z*y+this.Q*x+this.ch)},
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
ey:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.q]
y=V.bl(H.c([this.a,this.e,this.y,this.cx],z),b,c)
x=V.bl(H.c([this.b,this.f,this.z,this.cy],z),b,c)
w=V.bl(H.c([this.c,this.r,this.Q,this.db],z),b,c)
v=V.bl(H.c([this.d,this.x,this.ch,this.dx],z),b,c)
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
P:function(){return this.ey("",3,0)},
F:function(a){return this.ey(a,3,0)},
n:{
c_:function(){var z=$.eI
if(z==null){z=V.aC(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.eI=z}return z},
aC:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ah(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
eH:function(a,b,c,d){return V.aC(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
eE:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aC(1,0,0,0,0,z,-y,0,0,y,z,0,0,0,0,1)},
eF:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aC(z,0,-y,0,0,1,0,0,y,0,z,0,0,0,0,1)},
eG:function(a){var z,y
z=Math.cos(a)
y=Math.sin(a)
return V.aC(z,-y,0,0,y,z,0,0,0,0,1,0,0,0,0,1)}}},
ad:{"^":"a;a,b",
M:function(a,b){return new V.ad(this.a-b.a,this.b-b.b)},
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
aZ:function(){var z=$.eQ
if(z==null){z=new V.ad(0,0)
$.eQ=z}return z}}},
a0:{"^":"a;a,b,c",
G:function(a,b){return new V.a0(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a,b){return new V.a0(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){return new V.a0(this.a*b,this.b*b,this.c*b)},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a0))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"},
n:{
jn:function(){var z=$.bC
if(z==null){z=new V.a0(0,0,0)
$.bC=z}return z}}},
c1:{"^":"a;a,b,c,d",
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c1))return!1
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
eT:{"^":"a;a,b,c,d",
ga9:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eT))return!1
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
eU:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eT(a,b,c,d)}}},
T:{"^":"a;a,b",
jN:[function(a){return Math.sqrt(this.H(this))},"$0","gp",1,0,16],
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
if($.o.$2(b,0)){z=$.fw
if(z==null){z=new V.T(0,0)
$.fw=z}return z}z=this.a
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
D:{"^":"a;a,b,c",
jN:[function(a){return Math.sqrt(this.H(this))},"$0","gp",1,0,16],
H:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cU:function(a,b){var z,y,x
z=this.a
y=this.b
x=this.c
return new V.D(z+b*(a.a-z),y+b*(a.b-y),x+b*(a.c-x))},
aH:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
x=this.c
w=a.b
v=a.a
u=this.a
return new V.D(z*y-x*w,x*v-u*y,u*w-z*v)},
G:function(a,b){return new V.D(this.a+b.a,this.b+b.b,this.c+b.c)},
U:function(a){return new V.D(-this.a,-this.b,-this.c)},
t:function(a,b){return new V.D(this.a*b,this.b*b,this.c*b)},
A:function(a,b){if($.o.$2(b,0))return V.bE()
return new V.D(this.a/b,this.b/b,this.c/b)},
eH:function(){if(!$.o.$2(0,this.a))return!1
if(!$.o.$2(0,this.b))return!1
if(!$.o.$2(0,this.c))return!1
return!0},
v:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.D))return!1
z=b.a
if(!$.o.$2(z,this.a))return!1
z=b.b
if(!$.o.$2(z,this.b))return!1
z=b.c
if(!$.o.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"},
n:{
bE:function(){var z=$.fA
if(z==null){z=new V.D(0,0,0)
$.fA=z}return z},
fB:function(){var z=$.cA
if(z==null){z=new V.D(0,0,1)
$.cA=z}return z}}}}],["","",,U,{"^":"",hT:{"^":"ea;0a,0b,0c,0d,0e,0f,0r,0x,0y",
c4:function(a){var z=V.cO(a,this.c,this.b)
return z},
gC:function(){var z=this.y
if(z==null){z=D.L()
this.y=z}return z},
L:function(a){var z=this.y
if(!(z==null))z.J(a)},
sd8:function(a,b){},
scV:function(a){var z,y
z=this.b
if(!$.o.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.c4(z)}z=new D.F("maximumLocation",y,this.b,this,[P.q])
z.b=!0
this.L(z)}},
scX:function(a){var z,y
z=this.c
if(!$.o.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.c4(z)}z=new D.F("minimumLocation",y,this.c,this,[P.q])
z.b=!0
this.L(z)}},
sa3:function(a,b){var z,y
b=this.c4(b)
z=this.d
if(!$.o.$2(z,b)){y=this.d
this.d=b
z=new D.F("location",y,b,this,[P.q])
z.b=!0
this.L(z)}},
scW:function(a){var z,y,x
z=this.e
if(!$.o.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.F("maximumVelocity",y,a,this,[P.q])
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
z=new D.F("velocity",x,a,this,[P.q])
z.b=!0
this.L(z)}},
scH:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.o.$2(z,a)){y=this.x
this.x=a
z=new D.F("dampening",y,a,this,[P.q])
z.b=!0
this.L(z)}},
aB:function(a){var z,y,x,w
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
cY:function(){var z=new U.hT()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},ec:{"^":"aa;0a,0b",
gC:function(){var z=this.b
if(z==null){z=D.L()
this.b=z}return z},
aC:function(a,b){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ec))return!1
return J.J(this.a,b.a)},
i:function(a){return"Constant: "+this.a.F("          ")},
n:{
ed:function(a){var z=new U.ec()
z.a=a
return z}}},er:{"^":"Z;0e,0f,0r,0a,0b,0c,0d",
gC:function(){var z=this.e
if(z==null){z=D.L()
this.e=z}return z},
L:[function(a){var z
H.d(a,"$isy")
z=this.e
if(!(z==null))z.J(a)},function(){return this.L(null)},"ah","$1","$0","gaM",0,2,1],
kC:[function(a,b){var z,y,x,w,v,u,t,s
z=U.aa
H.k(b,"$isp",[z],"$asp")
for(y=b.length,x=this.gaM(),w={func:1,ret:-1,args:[D.y]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){s=t.gC()
s.toString
H.l(x,w)
if(s.a==null)s.saj(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.cm(a,b,this,[z])
z.b=!0
this.L(z)},"$2","ghv",8,0,15],
kX:[function(a,b){var z,y,x
z=U.aa
H.k(b,"$isp",[z],"$asp")
for(y=b.gV(b),x=this.gaM();y.E();)y.gK().gC().N(0,x)
z=new D.cn(a,b,this,[z])
z.b=!0
this.L(z)},"$2","ghS",8,0,15],
aC:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(typeof z!=="number")return z.T()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.ay(z,z.length,0,[H.t(z,0)]),x=null;z.E();){y=z.d
if(y!=null){w=y.aC(a,b)
if(w!=null)x=x==null?w:w.t(0,x)}}this.f=x==null?V.c_():x
z=this.e
if(!(z==null))z.ae()}return this.f},
v:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.er))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.f(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.f(w,y)
if(!J.J(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asp:function(){return[U.aa]},
$asZ:function(){return[U.aa]},
$isaa:1},aa:{"^":"ea;"},eW:{"^":"aa;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gC:function(){var z=this.y
if(z==null){z=D.L()
this.y=z}return z},
L:function(a){var z=this.y
if(!(z==null))z.J(a)},
sf6:function(a){var z,y
a=V.cO(a,0,6.283185307179586)
z=this.a
if(!$.o.$2(z,a)){y=this.a
this.a=a
z=new D.F("yaw",y,a,this,[P.q])
z.b=!0
this.L(z)}},
seP:function(a){var z,y
a=V.cO(a,0,6.283185307179586)
z=this.b
if(!$.o.$2(z,a)){y=this.b
this.b=a
z=new D.F("pitch",y,a,this,[P.q])
z.b=!0
this.L(z)}},
seU:function(a){var z,y
a=V.cO(a,0,6.283185307179586)
z=this.c
if(!$.o.$2(z,a)){y=this.c
this.c=a
z=new D.F("roll",y,a,this,[P.q])
z.b=!0
this.L(z)}},
aC:function(a,b){var z,y
z=this.r
y=a.e
if(z<y){this.r=y
z=this.y
if(!(z==null))++z.d
this.sf6(this.a+this.d*a.y)
this.seP(this.b+this.e*a.y)
this.seU(this.c+this.f*a.y)
this.x=V.eG(this.c).t(0,V.eF(this.b)).t(0,V.eE(this.a))
z=this.y
if(!(z==null))z.ae()}return this.x},
v:function(a,b){var z,y
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.eW))return!1
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
i:function(a){return"Rotater: ["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"], ["+V.G(this.d,3,0)+", "+V.G(this.e,3,0)+", "+V.G(this.f,3,0)+"]"},
n:{
dc:function(a,b,c,d,e,f){var z,y,x
z=new U.eW()
z.a=0
z.b=0
z.c=0
z.d=0
z.e=0
z.f=0
z.r=0
z.sf6(f)
z.seP(d)
z.seU(e)
y=z.d
if(!$.o.$2(y,c)){x=z.d
z.d=c
y=new D.F("deltaYaw",x,c,z,[P.q])
y.b=!0
z.L(y)}y=z.e
if(!$.o.$2(y,a)){x=z.e
z.e=a
y=new D.F("deltaPitch",x,a,z,[P.q])
y.b=!0
z.L(y)}y=z.f
if(!$.o.$2(y,b)){x=z.f
z.f=b
y=new D.F("deltaRoll",x,b,z,[P.q])
y.b=!0
z.L(y)}return z}}},kF:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gC:function(){var z=this.cy
if(z==null){z=D.L()
this.cy=z}return z},
L:[function(a){var z
H.d(a,"$isy")
z=this.cy
if(!(z==null))z.J(a)},function(){return this.L(null)},"ah","$1","$0","gaM",0,2,1],
b9:function(a){if(this.a!=null)return!1
this.a=a
a.c.ge8().h(0,this.gcd())
this.a.c.geI().h(0,this.gce())
this.a.c.gbX().h(0,this.gcf())
return!0},
hr:[function(a){H.d(a,"$isy")
if(!J.J(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gcd",4,0,2],
hs:[function(a){var z,y,x,w,v,u,t
a=H.j(H.d(a,"$isy"),"$isbA")
if(!this.y)return
if(this.x){z=a.d.M(0,a.y)
z=new V.T(z.a,z.b)
z=z.H(z)
y=this.r
if(typeof y!=="number")return H.A(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.M(0,a.y)
z=new V.T(y.a,y.b).t(0,2).A(0,z.ga9())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.t()
x=this.e
if(typeof x!=="number")return H.A(x)
y.sX(z*10*x)}else{z=a.c
y=a.d
x=y.M(0,a.y)
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
y=y.M(0,a.z)
this.Q=new V.T(y.a,y.b).t(0,2).A(0,z.ga9())}this.ah()},"$1","gce",4,0,2],
ht:[function(a){var z,y,x
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
this.ah()}},"$1","gcf",4,0,2],
aC:function(a,b){var z,y,x
z=this.ch
y=a.e
if(typeof z!=="number")return z.T()
if(z<y){this.ch=y
x=a.y
this.b.aB(x)
this.cx=V.eG(this.b.d)}return this.cx},
$isaa:1},kG:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gC:function(){var z=this.fx
if(z==null){z=D.L()
this.fx=z}return z},
L:[function(a){var z
H.d(a,"$isy")
z=this.fx
if(!(z==null))z.J(a)},function(){return this.L(null)},"ah","$1","$0","gaM",0,2,1],
b9:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.ge8().h(0,this.gcd())
this.a.c.geI().h(0,this.gce())
this.a.c.gbX().h(0,this.gcf())
z=this.a.d
y=z.f
if(y==null){y=D.L()
z.f=y
z=y}else z=y
z.h(0,this.ghp())
z=this.a.d
y=z.d
if(y==null){y=D.L()
z.d=y
z=y}else z=y
z.h(0,this.ghq())
z=this.a.e
y=z.b
if(y==null){y=D.L()
z.b=y
z=y}else z=y
z.h(0,this.giv())
z=this.a.e
y=z.d
if(y==null){y=D.L()
z.d=y
z=y}else z=y
z.h(0,this.giu())
z=this.a.e
y=z.c
if(y==null){y=D.L()
z.c=y
z=y}else z=y
z.h(0,this.git())
return!0},
au:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.U()
z=-z}if(this.r){if(typeof y!=="number")return y.U()
y=-y}return new V.T(z,y)},
hr:[function(a){a=H.j(H.d(a,"$isy"),"$isbA")
if(!J.J(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gcd",4,0,2],
hs:[function(a){var z,y,x,w,v,u,t
a=H.j(H.d(a,"$isy"),"$isbA")
if(!this.cx)return
if(this.ch){z=a.d.M(0,a.y)
z=new V.T(z.a,z.b)
z=z.H(z)
y=this.Q
if(typeof y!=="number")return H.A(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.M(0,a.y)
z=this.au(new V.T(y.a,y.b).t(0,2).A(0,z.ga9()))
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
x=y.M(0,a.y)
w=this.au(new V.T(x.a,x.b).t(0,2).A(0,z.ga9()))
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
y=y.M(0,a.z)
this.dx=this.au(new V.T(y.a,y.b).t(0,2).A(0,z.ga9()))}this.ah()},"$1","gce",4,0,2],
ht:[function(a){var z,y,x
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
this.ah()}},"$1","gcf",4,0,2],
kz:[function(a){if(H.j(H.d(a,"$isy"),"$iseA").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","ghp",4,0,2],
kA:[function(a){var z,y,x,w,v,u,t
a=H.j(H.d(a,"$isy"),"$isbA")
if(!J.J(this.d,a.x.b))return
z=a.c
y=a.d
x=y.M(0,a.y)
w=this.au(new V.T(x.a,x.b).t(0,2).A(0,z.ga9()))
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
y=y.M(0,a.z)
this.dx=this.au(new V.T(y.a,y.b).t(0,2).A(0,z.ga9()))
this.ah()},"$1","ghq",4,0,2],
l4:[function(a){H.d(a,"$isy")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","giv",4,0,2],
l3:[function(a){var z,y,x,w,v,u,t
a=H.j(H.d(a,"$isy"),"$isfe")
if(!this.cx)return
if(this.ch){z=a.d.M(0,a.y)
z=new V.T(z.a,z.b)
z=z.H(z)
y=this.Q
if(typeof y!=="number")return H.A(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.M(0,a.y)
z=this.au(new V.T(y.a,y.b).t(0,2).A(0,z.ga9()))
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
x=y.M(0,a.y)
w=this.au(new V.T(x.a,x.b).t(0,2).A(0,z.ga9()))
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
y=y.M(0,a.z)
this.dx=this.au(new V.T(y.a,y.b).t(0,2).A(0,z.ga9()))}this.ah()},"$1","giu",4,0,2],
l2:[function(a){var z,y,x
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
this.ah()}},"$1","git",4,0,2],
aC:function(a,b){var z,y,x
z=this.dy
y=a.e
if(typeof z!=="number")return z.T()
if(z<y){this.dy=y
x=a.y
this.c.aB(x)
this.b.aB(x)
this.fr=V.eE(this.b.d).t(0,V.eF(this.c.d))}return this.fr},
$isaa:1},kH:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gC:function(){var z=this.r
if(z==null){z=D.L()
this.r=z}return z},
L:function(a){var z=this.r
if(!(z==null))z.J(a)},
b9:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.L()
z.e=y
z=y}else z=y
y=this.ghu()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.L()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
kB:[function(a){var z,y,x,w
H.d(a,"$isy")
if(!J.J(this.b,this.a.b.c))return
H.j(a,"$isd8")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.t()
w=z+y*x
if(z!==w){this.d=w
z=new D.F("zoom",z,w,this,[P.q])
z.b=!0
this.L(z)}},"$1","ghu",4,0,2],
aC:function(a,b){var z,y,x
z=this.e
y=a.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.eH(x,x,x,1)}return this.f},
$isaa:1}}],["","",,M,{"^":"",ic:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
sh3:function(a,b){this.d=H.k(b,"$isZ",[E.at],"$asZ")},
aN:[function(a){var z
H.d(a,"$isy")
z=this.x
if(!(z==null))z.J(a)},function(){return this.aN(null)},"kx","$1","$0","gat",0,2,1],
kI:[function(a,b){var z,y,x,w,v,u,t,s
z=E.at
H.k(b,"$isp",[z],"$asp")
for(y=b.length,x=this.gat(),w={func:1,ret:-1,args:[D.y]},v=[w],u=0;u<b.length;b.length===y||(0,H.z)(b),++u){t=b[u]
if(t!=null){if(t.gai()==null){s=new D.bv()
s.saj(null)
s.sb5(null)
s.c=null
s.d=0
t.sai(s)}s=t.gai()
s.toString
H.l(x,w)
if(s.a==null)s.saj(H.c([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.cm(a,b,this,[z])
z.b=!0
this.aN(z)},"$2","ghB",8,0,9],
kJ:[function(a,b){var z,y,x
z=E.at
H.k(b,"$isp",[z],"$asp")
for(y=b.gV(b),x=this.gat();y.E();)y.gK().gC().N(0,x)
z=new D.cn(a,b,this,[z])
z.b=!0
this.aN(z)},"$2","ghC",8,0,9],
seW:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gC().N(0,this.gat())
y=this.c
this.c=a
if(a!=null)a.gC().h(0,this.gat())
z=new D.F("technique",y,this.c,this,[O.cw])
z.b=!0
this.aN(z)}},
gC:function(){var z=this.x
if(z==null){z=D.L()
this.x=z}return z},
b_:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
a.eS(this.c)
z=this.b
z.toString
y=a.a
C.c.j8(y,36160,null)
C.c.cJ(y,2884)
C.c.cJ(y,2929)
C.c.jt(y,513)
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
C.c.ku(y,t,s,u,v)
C.c.je(y,z.c)
z=z.a
C.c.jd(y,z.a,z.b,z.c,z.d)
C.c.jc(y,16640)
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
a.cy.eR(n)
y=$.eO
if(y==null){y=V.jn()
v=$.fz
if(v==null){v=new V.D(0,1,0)
$.fz=v}u=$.fx
if(u==null){u=new V.D(0,0,-1)
$.fx=u}m=u.A(0,Math.sqrt(u.H(u)))
v=v.aH(m)
l=v.A(0,Math.sqrt(v.H(v)))
k=m.aH(l)
j=new V.D(y.a,y.b,y.c)
i=l.U(0).H(j)
h=k.U(0).H(j)
g=m.U(0).H(j)
y=V.aC(l.a,k.a,m.a,i,l.b,k.b,m.b,h,l.c,k.c,m.c,g,0,0,0,1)
$.eO=y
f=y}else f=y
y=z.b
if(y!=null){e=y.aC(a,z)
if(e!=null)f=e.t(0,f)}a.db.eR(f)
z=this.c
if(z!=null)z.aB(a)
for(z=this.d.a,z=new J.ay(z,z.length,0,[H.t(z,0)]);z.E();)z.d.aB(a)
for(z=this.d.a,z=new J.ay(z,z.length,0,[H.t(z,0)]);z.E();)z.d.b_(a)
this.a.toString
a.cy.cZ()
a.db.cZ()
this.b.toString
a.eQ()},
$isnD:1}}],["","",,A,{"^":"",e0:{"^":"a;a,b,c"},hJ:{"^":"a;a",
l:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
jx:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
C.c.e9(w.a,w.c)}},
jv:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
C.c.e7(w.a,w.c)}}},j4:{"^":"dd;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx,0ry,0x1,0x2,0y1,0y2,0ay,0ao,0bF,0ea,0bG,0bH,0eb,0ec,0bI,0bJ,0ed,0ee,0bK,0bL,0ef,0eg,0bM,0eh,0ei,0bN,0ej,0ek,0bO,0bP,0bQ,0el,0em,0bR,0bS,0en,0eo,0bT,0ep,0cK,0eq,0cL,0er,0cM,0es,0cN,0eu,0cO,0ev,0cP,a,b,0c,0d,0e,0f,0r,0x,0y",
sfZ:function(a){this.r1=H.k(a,"$isb",[A.aG],"$asb")},
sfL:function(a){this.cK=H.k(a,"$isb",[A.dp],"$asb")},
sfM:function(a){this.cL=H.k(a,"$isb",[A.dr],"$asb")},
sfN:function(a){this.cM=H.k(a,"$isb",[A.ds],"$asb")},
sfO:function(a){this.cN=H.k(a,"$isb",[A.dt],"$asb")},
sfP:function(a){this.cO=H.k(a,"$isb",[A.du],"$asb")},
sfQ:function(a){this.cP=H.k(a,"$isb",[A.dv],"$asb")},
fw:function(a2,a3){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
a2.iD(z)
a2.iK(z)
a2.iE(z)
a2.iS(z)
a2.iT(z)
a2.iM(z)
a2.iX(z)
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
x.iH(z)
x.iC(z)
x.iF(z)
x.iI(z)
x.iQ(z)
u=x.dy
if(u){r=z.a+="// === Enviromental ===\n"
r+="\n"
z.a=r
r+="uniform samplerCube envSampler;\n"
z.a=r
r+="uniform int nullEnvTxt;\n"
z.a=r
z.a=r+"\n"
x.iO(z)
x.iP(z)}x.iL(z)
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
x.iG(z)
x.iN(z)
x.iR(z)
x.iU(z)
x.iV(z)
x.iW(z)
x.iJ(z)}r=z.a+="// === Main ===\n"
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
this.e=this.dC(s,35633)
this.f=this.dC(this.d,35632)
x=this.a
v=x.createProgram()
this.r=v
C.c.e2(x,v,this.e)
C.c.e2(x,this.r,this.f)
C.c.jO(x,this.r)
if(!H.dK(C.c.bZ(x,this.r,35714))){m=C.c.fc(x,this.r)
C.c.jp(x,this.r)
H.r(P.u("Failed to link shader: "+H.i(m)))}this.ii()
this.ik()
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
if(a2.x2)this.k1=H.j(this.y.m(0,"txt2DMat"),"$isdq")
if(a2.y1)this.k2=H.j(this.y.m(0,"txtCubeMat"),"$isaG")
if(a2.y2)this.k3=H.j(this.y.m(0,"colorMat"),"$isaG")
this.sfZ(H.c([],[A.aG]))
y=a2.ay
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
this.ay=H.j(this.y.m(0,"nullAmbientTxt"),"$isK")
break
case C.f:this.y2=H.j(this.y.m(0,"ambientTxt"),"$isao")
this.ay=H.j(this.y.m(0,"nullAmbientTxt"),"$isK")
break}}y=a2.c
if(y!==C.d){this.ao=H.j(this.y.m(0,"diffuseClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.bF=H.j(this.y.m(0,"diffuseTxt"),"$isan")
this.bG=H.j(this.y.m(0,"nullDiffuseTxt"),"$isK")
break
case C.f:this.ea=H.j(this.y.m(0,"diffuseTxt"),"$isao")
this.bG=H.j(this.y.m(0,"nullDiffuseTxt"),"$isK")
break}}y=a2.d
if(y!==C.d){this.bH=H.j(this.y.m(0,"invDiffuseClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.eb=H.j(this.y.m(0,"invDiffuseTxt"),"$isan")
this.bI=H.j(this.y.m(0,"nullInvDiffuseTxt"),"$isK")
break
case C.f:this.ec=H.j(this.y.m(0,"invDiffuseTxt"),"$isao")
this.bI=H.j(this.y.m(0,"nullInvDiffuseTxt"),"$isK")
break}}y=a2.e
if(y!==C.d){this.bL=H.j(this.y.m(0,"shininess"),"$isY")
this.bJ=H.j(this.y.m(0,"specularClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.ed=H.j(this.y.m(0,"specularTxt"),"$isan")
this.bK=H.j(this.y.m(0,"nullSpecularTxt"),"$isK")
break
case C.f:this.ee=H.j(this.y.m(0,"specularTxt"),"$isao")
this.bK=H.j(this.y.m(0,"nullSpecularTxt"),"$isK")
break}}switch(a2.f){case C.d:break
case C.i:break
case C.e:this.ef=H.j(this.y.m(0,"bumpTxt"),"$isan")
this.bM=H.j(this.y.m(0,"nullBumpTxt"),"$isK")
break
case C.f:this.eg=H.j(this.y.m(0,"bumpTxt"),"$isao")
this.bM=H.j(this.y.m(0,"nullBumpTxt"),"$isK")
break}if(a2.dy){this.eh=H.j(this.y.m(0,"envSampler"),"$isao")
this.ei=H.j(this.y.m(0,"nullEnvTxt"),"$isK")
y=a2.r
if(y!==C.d){this.bN=H.j(this.y.m(0,"reflectClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.ej=H.j(this.y.m(0,"reflectTxt"),"$isan")
this.bO=H.j(this.y.m(0,"nullReflectTxt"),"$isK")
break
case C.f:this.ek=H.j(this.y.m(0,"reflectTxt"),"$isao")
this.bO=H.j(this.y.m(0,"nullReflectTxt"),"$isK")
break}}y=a2.x
if(y!==C.d){this.bP=H.j(this.y.m(0,"refraction"),"$isY")
this.bQ=H.j(this.y.m(0,"refractClr"),"$isI")
switch(y){case C.d:break
case C.i:break
case C.e:this.el=H.j(this.y.m(0,"refractTxt"),"$isan")
this.bR=H.j(this.y.m(0,"nullRefractTxt"),"$isK")
break
case C.f:this.em=H.j(this.y.m(0,"refractTxt"),"$isao")
this.bR=H.j(this.y.m(0,"nullRefractTxt"),"$isK")
break}}}y=a2.y
if(y!==C.d){this.bS=H.j(this.y.m(0,"alpha"),"$isY")
switch(y){case C.d:break
case C.i:break
case C.e:this.en=H.j(this.y.m(0,"alphaTxt"),"$isan")
this.bT=H.j(this.y.m(0,"nullAlphaTxt"),"$isK")
break
case C.f:this.eo=H.j(this.y.m(0,"alphaTxt"),"$isao")
this.bT=H.j(this.y.m(0,"nullAlphaTxt"),"$isK")
break}}this.sfL(H.c([],[A.dp]))
this.sfM(H.c([],[A.dr]))
this.sfN(H.c([],[A.ds]))
this.sfO(H.c([],[A.dt]))
this.sfP(H.c([],[A.du]))
this.sfQ(H.c([],[A.dv]))
if(a2.k2){y=a2.z
if(y>0){this.ep=H.d(this.y.m(0,"dirLightCount"),"$isK")
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
x=this.cK;(x&&C.a).h(x,new A.dp(l,k,j))}}y=a2.Q
if(y>0){this.eq=H.d(this.y.m(0,"pntLightCount"),"$isK")
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
H.j(h,"$isY")
x=this.y
w="pntLights["+l+"].att1"
g=x.l(0,w)
if(g==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(g,"$isY")
x=this.y
w="pntLights["+l+"].att2"
f=x.l(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isY")
x=this.cL;(x&&C.a).h(x,new A.dr(l,k,j,i,h,g,f))}}y=a2.ch
if(y>0){this.er=H.d(this.y.m(0,"spotLightCount"),"$isK")
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
H.j(g,"$isY")
x=this.y
w="spotLights["+l+"].coneAngle"
f=x.l(0,w)
if(f==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(f,"$isY")
x=this.y
w="spotLights["+l+"].att0"
e=x.l(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isY")
x=this.y
w="spotLights["+l+"].att1"
d=x.l(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isY")
x=this.y
w="spotLights["+l+"].att2"
c=x.l(0,w)
if(c==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isY")
x=this.cM;(x&&C.a).h(x,new A.ds(l,k,j,i,h,g,f,e,d,c))}}y=a2.cx
if(y>0){this.es=H.d(this.y.m(0,"txtDirLightCount"),"$isK")
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
x=this.cN;(x&&C.a).h(x,new A.dt(l,k,j,i,h,g,e,f))}}y=a2.cy
if(y>0){this.eu=H.d(this.y.m(0,"txtPntLightCount"),"$isK")
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
H.j(i,"$isdq")
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
H.j(f,"$isY")
x=this.y
w="txtPntLights["+l+"].att1"
e=x.l(0,w)
if(e==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(e,"$isY")
x=this.y
w="txtPntLights["+l+"].att2"
d=x.l(0,w)
if(d==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(d,"$isY")
x=this.y
w="txtPntLightsTxtCube"+l
c=x.l(0,w)
if(c==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isao")
x=this.cO;(x&&C.a).h(x,new A.du(l,k,j,i,h,c,g,f,e,d))}}y=a2.db
if(y>0){this.ev=H.d(this.y.m(0,"txtSpotLightCount"),"$isK")
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
H.j(d,"$isY")
x=this.y
w="txtSpotLights["+l+"].tvScalar"
c=x.l(0,w)
if(c==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(c,"$isY")
x=this.y
w="txtSpotLights["+l+"].att0"
b=x.l(0,w)
if(b==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(b,"$isY")
x=this.y
w="txtSpotLights["+l+"].att1"
a=x.l(0,w)
if(a==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a,"$isY")
x=this.y
w="txtSpotLights["+l+"].att2"
a0=x.l(0,w)
if(a0==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a0,"$isY")
x=this.y
w="txtSpotLightsTxt2D"+l
a1=x.l(0,w)
if(a1==null)H.r(P.u("Required uniform value, "+w+", was not defined or used in shader."))
H.j(a1,"$isan")
x=this.cP;(x&&C.a).h(x,new A.dv(l,k,j,i,h,g,a1,f,e,d,c,b,a,a0))}}}},
al:function(a,b,c){C.c.W(b.a,b.d,1)},
ab:function(a,b,c){C.c.W(b.a,b.d,1)},
n:{
j3:function(a,b){var z,y
z=a.ao
y=new A.j4(b,z)
y.fB(b,z)
y.fw(a,b)
return y}}},j7:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,ay,ao,bF",
iD:function(a){var z,y,x
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
iK:function(a){var z
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
iE:function(a){var z
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
iS:function(a){var z,y
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
iT:function(a){var z,y
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
iM:function(a){var z
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
iX:function(a){var z
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
z+="uniform int null"+(c[0].toUpperCase()+C.b.as(c,1))+"Txt;\n"
a.a=z
if(b===C.e)a.a=z+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=z+("uniform samplerCube "+c+"Txt;\n")},
iH:function(a){var z,y
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
iC:function(a){var z,y
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
iF:function(a){var z,y
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
iI:function(a){var z,y
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
iQ:function(a){var z,y
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
iL:function(a){var z,y
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
iO:function(a){var z,y
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
iP:function(a){var z,y
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
iG:function(a){var z,y
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
iN:function(a){var z,y
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
iR:function(a){var z,y
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
iU:function(a){var z,y,x
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
iV:function(a){var z,y,x
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
iW:function(a){var z,y,x
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
iJ:function(a){var z
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
i:function(a){return this.ao}},dp:{"^":"a;a,b,c"},dt:{"^":"a;a,b,c,d,e,f,r,x"},dr:{"^":"a;a,b,c,d,e,f,r"},du:{"^":"a;a,b,c,d,e,f,r,x,y,z"},ds:{"^":"a;a,b,c,d,e,f,r,x,y,z"},dv:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy"},dd:{"^":"cT;",
fB:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dC:function(a,b){var z,y,x
z=this.a
y=C.c.jn(z,b)
C.c.fm(z,y,a)
C.c.jg(z,y)
if(!H.dK(C.c.ff(z,y,35713))){x=C.c.fe(z,y)
C.c.jq(z,y)
throw H.e(P.u("Error compiling shader '"+H.i(y)+"': "+H.i(x)))}return y},
ii:function(){var z,y,x,w,v,u
z=H.c([],[A.e0])
y=this.a
x=H.ab(C.c.bZ(y,this.r,35721))
if(typeof x!=="number")return H.A(x)
w=0
for(;w<x;++w){v=C.c.f8(y,this.r,w)
u=C.c.fa(y,this.r,v.name)
C.a.h(z,new A.e0(y,v.name,u))}this.x=new A.hJ(z)},
ik:function(){var z,y,x,w,v,u
z=H.c([],[A.ae])
y=this.a
x=H.ab(C.c.bZ(y,this.r,35718))
if(typeof x!=="number")return H.A(x)
w=0
for(;w<x;++w){v=C.c.f9(y,this.r,w)
u=C.c.fg(y,this.r,v.name)
C.a.h(z,this.jo(v.type,v.size,v.name,u))}this.y=new A.kq(z)},
aP:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.K(z,y,b,c)
else return A.dn(z,y,b,a,c)},
h6:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.an(z,y,b,c)
else return A.dn(z,y,b,a,c)},
h7:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.ao(z,y,b,c)
else return A.dn(z,y,b,a,c)},
bA:function(a,b){return new P.fJ(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
jo:function(a,b,c,d){switch(a){case 5120:return this.aP(b,c,d)
case 5121:return this.aP(b,c,d)
case 5122:return this.aP(b,c,d)
case 5123:return this.aP(b,c,d)
case 5124:return this.aP(b,c,d)
case 5125:return this.aP(b,c,d)
case 5126:return new A.Y(this.a,this.r,c,d)
case 35664:return new A.kl(this.a,this.r,c,d)
case 35665:return new A.I(this.a,this.r,c,d)
case 35666:return new A.ko(this.a,this.r,c,d)
case 35667:return new A.km(this.a,this.r,c,d)
case 35668:return new A.kn(this.a,this.r,c,d)
case 35669:return new A.kp(this.a,this.r,c,d)
case 35674:return new A.ks(this.a,this.r,c,d)
case 35675:return new A.dq(this.a,this.r,c,d)
case 35676:return new A.aG(this.a,this.r,c,d)
case 35678:return this.h6(b,c,d)
case 35680:return this.h7(b,c,d)
case 35670:throw H.e(this.bA("BOOL",c))
case 35671:throw H.e(this.bA("BOOL_VEC2",c))
case 35672:throw H.e(this.bA("BOOL_VEC3",c))
case 35673:throw H.e(this.bA("BOOL_VEC4",c))
default:throw H.e(P.u("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}},ch:{"^":"a;a,b",
i:function(a){return this.b}},ae:{"^":"a;"},kq:{"^":"a;a",
l:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
m:function(a,b){var z=this.l(0,b)
if(z==null)throw H.e(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return z},
i:function(a){return this.P()},
jF:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w)x+=z[w].i(0)+a
return x},
P:function(){return this.jF("\n")}},K:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform1i: "+H.i(this.c)}},km:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform2i: "+H.i(this.c)}},kn:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform3i: "+H.i(this.c)}},kp:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform4i: "+H.i(this.c)}},kk:{"^":"ae;0e,0f,a,b,c,d",
siA:function(a){this.e=H.k(a,"$isb",[P.m],"$asb")},
i:function(a){return"Uniform1iv: "+H.i(this.c)},
n:{
dn:function(a,b,c,d,e){var z=new A.kk(a,b,c,e)
z.f=d
z.siA(P.iT(d,0,!1,P.m))
return z}}},Y:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform1f: "+H.i(this.c)}},kl:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform2f: "+H.i(this.c)}},I:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform3f: "+H.i(this.c)}},ko:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform4f: "+H.i(this.c)}},ks:{"^":"ae;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}},dq:{"^":"ae;a,b,c,d",
ar:function(a){var z=new Float32Array(H.bg(H.k(a,"$isb",[P.q],"$asb")))
C.c.f1(this.a,this.d,!1,z)},
i:function(a){return"UniformMat3: "+H.i(this.c)}},aG:{"^":"ae;a,b,c,d",
ar:function(a){var z=new Float32Array(H.bg(H.k(a,"$isb",[P.q],"$asb")))
C.c.f2(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.i(this.c)}},an:{"^":"ae;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.i(this.c)}},ao:{"^":"ae;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}}],["","",,F,{"^":"",
dN:function(a,b,c,d){var z
H.l(c,{func:1,ret:-1,args:[F.ag,P.q,P.q]})
z=F.de()
F.bL(z,b,c,d,a,1,0,0,1)
F.bL(z,b,c,d,a,0,1,0,3)
F.bL(z,b,c,d,a,0,0,1,2)
F.bL(z,b,c,d,a,-1,0,0,0)
F.bL(z,b,c,d,a,0,-1,0,0)
F.bL(z,b,c,d,a,0,0,-1,3)
z.ax()
return z},
cF:function(a){var z=a.a>0?1:0
if(a.b>0)z+=2
return(a.c>0?z+4:z)*2},
bL:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.l(c,{func:1,ret:-1,args:[F.ag,P.q,P.q]})
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
z.d=y}l=F.cF(y)
k=F.cF(z.b)
j=F.dV(d,e,new F.ml(z,F.cF(z.c),F.cF(z.d),k,l,c),b)
if(j!=null)a.bh(j)},
hh:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.l(e,{func:1,ret:P.q,args:[P.q]})
if(f<3)return
z=F.de()
y=b?-1:1
x=-6.283185307179586/f
w=H.c([],[F.ag])
v=z.a
u=new V.D(0,0,y)
u=u.A(0,Math.sqrt(u.H(u)))
C.a.h(w,v.j0(new V.c1(a,-1,-1,-1),new V.bs(1,1,1,1),new V.a0(0,0,d),new V.D(0,0,y),new V.ad(0.5,0.5),u))
for(v=y*y,t=0;t<=f;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=e.$1(t/f)
u=z.a
if(typeof p!=="number")return H.A(p)
o=new V.D(r,q,y).A(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.c5(new V.c1(a,-1,-1,-1),null,new V.bs(n,l,m,1),new V.a0(r*p,q*p,d),new V.D(0,0,y),new V.ad(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.iZ(w)
return z},
hf:function(a,b,c,d,e,f){return F.mF(!0,c,d,new F.mE(a,f),e)},
mF:function(a,b,c,d,e){var z
H.l(d,{func:1,ret:P.q,args:[P.q,P.q]})
if(e<3)return
if(c<1)return
z=F.dV(c,e,new F.mH(d),null)
if(z==null)return
z.ax()
z.ct()
if(b)z.bh(F.hh(3,!1,!1,1,new F.mI(d),e))
z.bh(F.hh(1,!0,!1,-1,new F.mJ(d),e))
return z},
ni:function(a,b,c,d){var z,y
z={}
z.a=b
z.a=new F.nj()
y=F.dN(a,null,new F.nk(z,c),d)
y.ct()
return y},
ht:function(a,b,c,d){return F.hg(c,a,d,b,new F.nm())},
n0:function(a,b,c,d,e,f){return F.hg(d,a,e,b,new F.n1(f,c))},
hg:function(a,b,c,d,e){var z=F.dV(a,b,new F.mG(H.l(e,{func:1,ret:V.a0,args:[P.q]}),d,b,c),null)
if(z==null)return
z.ax()
z.ct()
return z},
dV:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.l(c,{func:1,ret:-1,args:[F.ag,P.q,P.q]})
if(a<1)return
if(b<1)return
z=F.de()
y=H.c([],[F.ag])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.c5(null,null,new V.bs(u,0,0,1),null,null,new V.ad(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.cG(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.c5(null,null,new V.bs(o,n,m,1),null,null,new V.ad(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.cG(d))}}z.d.j_(a+1,b+1,y)
return z},
ml:{"^":"n:7;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.cU(z.b,b).cU(z.d.cU(z.c,b),c)
a.sa3(0,new V.a0(y.a,y.b,y.c))
a.seX(y.A(0,Math.sqrt(y.H(y))))
z=1-b
x=1-c
a.se3(new V.c1(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
mE:{"^":"n:24;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
mH:{"^":"n:7;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.A(v)
y=-y*v
u=x*v
a.sa3(0,new V.a0(y,u,w))
u=new V.D(y,u,w)
a.seX(u.A(0,Math.sqrt(u.H(u))))
a.se3(new V.c1(1-c,2+c,-1,-1))}},
mI:{"^":"n:30;a",
$1:function(a){return this.a.$2(a,1)}},
mJ:{"^":"n:30;a",
$1:function(a){return this.a.$2(1-a,0)}},
nj:{"^":"n:24;",
$2:function(a,b){return 0}},
nk:{"^":"n:7;a,b",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.A(z)
y=a.f
x=new V.D(y.a,y.b,y.c)
z=x.A(0,Math.sqrt(x.H(x))).t(0,this.b+z)
a.sa3(0,new V.a0(z.a,z.b,z.c))}},
nm:{"^":"n:21;",
$1:function(a){return new V.a0(Math.cos(a),Math.sin(a),0)}},
n1:{"^":"n:21;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.a0(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
mG:{"^":"n:7;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dW(y.$1(z),x)
x=J.dW(y.$1(z+3.141592653589793/this.c),x).M(0,w)
x=new V.D(x.a,x.b,x.c)
v=x.A(0,Math.sqrt(x.H(x)))
y=$.fy
if(y==null){y=new V.D(1,0,0)
$.fy=y
u=y}else u=y
y=v.aH(!J.J(v,u)?V.fB():u)
t=y.A(0,Math.sqrt(y.H(y)))
y=t.aH(v)
u=y.A(0,Math.sqrt(y.H(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.t(0,y*x)
x=t.t(0,r*x)
a.sa3(0,w.G(0,new V.a0(y.a-x.a,y.b-x.b,y.c-x.c)))}},
a8:{"^":"a;0a,0b,0c,0d,0e",
bb:function(){if(!this.gbc()){C.a.N(this.a.a.d.b,this)
this.a.a.a4()}this.cm()
this.cn()
this.i3()},
cr:function(a){this.a=a
C.a.h(a.d.b,this)},
cs:function(a){this.b=a
C.a.h(a.d.c,this)},
ih:function(a){this.c=a
C.a.h(a.d.d,this)},
cm:function(){var z=this.a
if(z!=null){C.a.N(z.d.b,this)
this.a=null}},
cn:function(){var z=this.b
if(z!=null){C.a.N(z.d.c,this)
this.b=null}},
i3:function(){var z=this.c
if(z!=null){C.a.N(z.d.d,this)
this.c=null}},
gbc:function(){return this.a==null||this.b==null||this.c==null},
fY:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.bE()
if(y!=null)v=v.G(0,y)
if(x!=null)v=v.G(0,x)
if(w!=null)v=v.G(0,w)
if(v.eH())return
return v.A(0,Math.sqrt(v.H(v)))},
h2:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.M(0,y)
z=new V.D(z.a,z.b,z.c)
v=z.A(0,Math.sqrt(z.H(z)))
z=w.M(0,y)
z=new V.D(z.a,z.b,z.c)
z=v.aH(z.A(0,Math.sqrt(z.H(z))))
return z.A(0,Math.sqrt(z.H(z)))},
cD:function(){if(this.d!=null)return!0
var z=this.fY()
if(z==null){z=this.h2()
if(z==null)return!1}this.d=z
this.a.a.a4()
return!0},
fX:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=V.bE()
if(y!=null)v=v.G(0,y)
if(x!=null)v=v.G(0,x)
if(w!=null)v=v.G(0,w)
if(v.eH())return
return v.A(0,Math.sqrt(v.H(v)))},
h1:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.o.$2(n,0)){z=r.M(0,u)
z=new V.D(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.H(z)))
if(o.a-p.a<0)m=m.U(0)}else{l=(z-q.b)/n
z=r.M(0,u).t(0,l).G(0,u).M(0,x)
z=new V.D(z.a,z.b,z.c)
m=z.A(0,Math.sqrt(z.H(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.U(0)}z=this.d
if(z!=null){k=z.A(0,Math.sqrt(z.H(z)))
z=k.aH(m)
z=z.A(0,Math.sqrt(z.H(z))).aH(k)
m=z.A(0,Math.sqrt(z.H(z)))}return m},
cB:function(){if(this.e!=null)return!0
var z=this.fX()
if(z==null){z=this.h1()
if(z==null)return!1}this.e=z
this.a.a.a4()
return!0},
gjf:function(a){if(J.J(this.a,this.b))return!0
if(J.J(this.b,this.c))return!0
if(J.J(this.c,this.a))return!0
return!1},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
F:function(a){var z,y
if(this.gbc())return a+"disposed"
z=a+C.b.ad(J.af(this.a.e),0)+", "+C.b.ad(J.af(this.b.e),0)+", "+C.b.ad(J.af(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
P:function(){return this.F("")},
n:{
bw:function(a,b,c){var z,y,x
z=new F.a8()
y=a.a
if(y==null)H.r(P.u("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.r(P.u("May not create a face with vertices attached to different shapes."))
z.cr(a)
z.cs(b)
z.ih(c)
C.a.h(z.a.a.d.b,z)
z.a.a.a4()
return z}}},
ih:{"^":"a;"},
k1:{"^":"ih;",
bg:function(a,b,c){var z,y
z=b.a
z.a.a.B()
z=z.e
y=c.a
y.a.a.B()
if(z==y.e){z=b.b
z.a.a.B()
z=z.e
y=c.b
y.a.a.B()
if(z==y.e){z=b.c
z.a.a.B()
z=z.e
y=c.c
y.a.a.B()
y=z==y.e
z=y}else z=!1
return z}else{z=b.a
z.a.a.B()
z=z.e
y=c.b
y.a.a.B()
if(z==y.e){z=b.b
z.a.a.B()
z=z.e
y=c.c
y.a.a.B()
if(z==y.e){z=b.c
z.a.a.B()
z=z.e
y=c.a
y.a.a.B()
y=z==y.e
z=y}else z=!1
return z}else{z=b.a
z.a.a.B()
z=z.e
y=c.c
y.a.a.B()
if(z==y.e){z=b.b
z.a.a.B()
z=z.e
y=c.a
y.a.a.B()
if(z==y.e){z=b.c
z.a.a.B()
z=z.e
y=c.b
y.a.a.B()
y=z==y.e
z=y}else z=!1
return z}else return!1}}}},
bz:{"^":"a;0a,0b",
bb:function(){if(!this.gbc()){C.a.N(this.a.a.c.b,this)
this.a.a.a4()}this.cm()
this.cn()},
cr:function(a){this.a=a
C.a.h(a.c.b,this)},
cs:function(a){this.b=a
C.a.h(a.c.c,this)},
cm:function(){var z=this.a
if(z!=null){C.a.N(z.c.b,this)
this.a=null}},
cn:function(){var z=this.b
if(z!=null){C.a.N(z.c.c,this)
this.b=null}},
gbc:function(){return this.a==null||this.b==null},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
F:function(a){if(this.gbc())return a+"disposed"
return a+C.b.ad(J.af(this.a.e),0)+", "+C.b.ad(J.af(this.b.e),0)},
P:function(){return this.F("")},
n:{
iK:function(a,b){var z,y,x
z=new F.bz()
y=a.a
if(y==null)H.r(P.u("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.r(P.u("May not create a line with vertices attached to different shapes."))
z.cr(a)
z.cs(b)
C.a.h(z.a.a.c.b,z)
z.a.a.a4()
return z}}},
iL:{"^":"a;"},
kj:{"^":"iL;",
bg:function(a,b,c){var z,y
z=b.a
z.a.a.B()
z=z.e
y=c.a
y.a.a.B()
if(z==y.e){z=b.b
z.a.a.B()
z=z.e
y=c.b
y.a.a.B()
return z==y.e}else{z=b.a
z.a.a.B()
z=z.e
y=c.b
y.a.a.B()
if(z==y.e){z=b.b
z.a.a.B()
z=z.e
y=c.a
y.a.a.B()
return z==y.e}else return!1}}},
c0:{"^":"a;0a",
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
F:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.ad(J.af(z.e),0)},
P:function(){return this.F("")}},
eZ:{"^":"a;0a,0b,0c,0d,0e",
gC:function(){var z=this.e
if(z==null){z=D.L()
this.e=z}return z},
bh:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.B()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){v=z[w]
this.a.h(0,v.ji())}this.a.B()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.B()
s=s.e
if(typeof s!=="number")return s.G()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
r=t[s]
this.b.a.a.h(0,r)
s=new F.c0()
if(r.a==null)H.r(P.u("May not create a point with a vertex which is not attached to a shape."))
s.a=r
C.a.h(r.b.b,s)
C.a.h(s.a.a.b.b,s)
t=s.a.a.e
if(!(t==null))t.J(null)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.B()
s=s.e
if(typeof s!=="number")return s.G()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.B()
t=t.e
if(typeof t!=="number")return t.G()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.c.a
t.a.h(0,p)
t.a.h(0,o)
F.iK(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.z)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.B()
s=s.e
if(typeof s!=="number")return s.G()
s+=y
t=t.c
if(s>=t.length)return H.f(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.B()
t=t.e
if(typeof t!=="number")return t.G()
t+=y
s=s.c
if(t>=s.length)return H.f(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.B()
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
F.bw(p,o,m)}z=this.e
if(!(z==null))z.ae()},
ax:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.ax()||!1
if(!this.a.ax())y=!1
z=this.e
if(!(z==null))z.ae()
return y},
jR:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.c(z.slice(0),[H.t(z,0)])
for(z=[F.ag];y.length!==0;){x=C.a.gjB(y)
C.a.kc(y,0)
if(x!=null){w=H.c([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.z)(y),++u){t=y[u]
if(t!=null&&a.bg(0,x,t)){C.a.h(w,t)
C.a.N(y,t)}}if(w.length>1)b.bh(w)}}this.a.B()
this.c.d1()
this.d.d1()
this.b.kd()
this.c.d2(new F.kj())
this.d.d2(new F.k1())
z=this.e
if(!(z==null))z.ae()},
j2:function(a){this.jR(new F.kV(),new F.jh())},
ct:function(){return this.j2(null)},
cQ:function(){var z,y,x,w,v,u
z=this.e
if(!(z==null))++z.d
this.d.cQ()
for(y=this.a.c.length-1;y>=0;--y){z=this.a.c
if(y>=z.length)return H.f(z,y)
x=z[y]
z=x.r
if(z!=null)x.seJ(new V.D(-z.a,-z.b,-z.c))
z=x.x
if(z!=null){w=-z.a
v=-z.b
z=-z.c
u=new V.D(w,v,z).A(0,Math.sqrt(w*w+v*v+z*z))
if(!J.J(x.x,u)){x.x=u
z=x.a
if(z!=null){z=z.e
if(!(z==null))z.J(null)}}}}z=this.e
if(!(z==null))z.ae()},
ja:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
b.toString
y=$.$get$aQ()
x=b.a
w=(x&y.a)!==0?1:0
if((x&$.$get$aP().a)!==0)++w
if((x&$.$get$aO().a)!==0)++w
if((x&$.$get$aR().a)!==0)++w
if((x&$.$get$aS().a)!==0)++w
if((x&$.$get$bF().a)!==0)++w
if((x&$.$get$bG().a)!==0)++w
if((x&$.$get$be().a)!==0)++w
if((x&$.$get$aN().a)!==0)++w
v=b.gdj(b)
u=v*4
y=new Array(z*v)
y.fixed$length=Array
x=P.q
t=H.c(y,[x])
y=new Array(w)
y.fixed$length=Array
s=H.c(y,[Z.e5])
for(r=0,q=0;q<w;++q){p=b.j5(q)
o=p.gdj(p)
C.a.q(s,q,new Z.e5(p,o,r*4,u,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.f(y,n)
m=y[n].jP(p)
l=r+n*v
for(k=0;k<m.length;++k){C.a.q(t,l,m[k]);++l}}r+=o}H.k(t,"$isb",[x],"$asb")
y=a.a
j=y.createBuffer()
C.c.aw(y,34962,j)
C.c.e5(y,34962,new Float32Array(H.bg(t)),35044)
C.c.aw(y,34962,null)
i=new Z.e6(new Z.fF(34962,j),s,b)
i.shj(H.c([],[Z.bV]))
if(this.b.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.B()
C.a.h(h,g.e)}f=Z.dz(y,34963,H.k(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bV(0,h.length,f))}if(this.c.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.B()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.B()
C.a.h(h,g.e)}f=Z.dz(y,34963,H.k(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bV(1,h.length,f))}if(this.d.b.length!==0){x=P.m
h=H.c([],[x])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.B()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].b
g.a.a.B()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.f(g,q)
g=g[q].c
g.a.a.B()
C.a.h(h,g.e)}f=Z.dz(y,34963,H.k(h,"$isb",[x],"$asb"))
C.a.h(i.b,new Z.bV(4,h.length,f))}return i},
i:function(a){var z=H.c([],[P.h])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.F("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.F("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.F("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.F("   "))}return C.a.k(z,"\n")},
ap:function(a){var z=this.e
if(!(z==null))z.J(a)},
a4:function(){return this.ap(null)},
$isnF:1,
n:{
de:function(){var z,y
z=new F.eZ()
y=new F.kQ(z)
y.b=!1
y.siB(H.c([],[F.ag]))
z.a=y
y=new F.jW(z)
y.scj(H.c([],[F.c0]))
z.b=y
y=new F.jV(z)
y.shl(H.c([],[F.bz]))
z.c=y
y=new F.jU(z)
y.shc(H.c([],[F.a8]))
z.d=y
z.e=null
return z}}},
jU:{"^":"a;a,0b",
shc:function(a){this.b=H.k(a,"$isb",[F.a8],"$asb")},
iZ:function(a){var z,y,x,w,v,u,t
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
C.a.h(z,F.bw(x,u,t))}}return z},
j_:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
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
C.a.h(z,F.bw(q,p,n))
y.a.h(0,q)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bw(q,n,m))}else{r.h(0,p)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bw(p,n,m))
y.a.h(0,p)
y.a.h(0,m)
y.a.h(0,q)
C.a.h(z,F.bw(p,m,q))}t=!t}v=!v}return z},
gp:function(a){return this.b.length},
d2:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.f(x,y)
w=x[y]
for(x=w.d,v=x.b.length+x.c.length+x.d.length-1;v>=0;--v){u=w.d.l(0,v)
for(t=v-1;t>=0;--t){s=w.d.l(0,t)
if(a.bg(0,u,s)){u.bb()
break}}}}},
d1:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=x.gjf(x)
if(y)x.bb()}},
ax:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].cD())x=!1
return x},
cC:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.z)(z),++w)if(!z[w].cB())x=!1
return x},
cQ:function(){var z,y,x,w,v,u
for(z=this.b,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
v=w.b
w.b=w.c
w.c=v
u=w.d
if(u!=null)w.d=new V.D(-u.a,-u.b,-u.c)
u=w.e
if(u!=null)w.e=new V.D(-u.a,-u.b,-u.c)
u=w.a.a.e
if(!(u==null))u.J(null)}},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
P:function(){return this.F("")}},
jV:{"^":"a;a,0b",
shl:function(a){this.b=H.k(a,"$isb",[F.bz],"$asb")},
gp:function(a){return this.b.length},
d2:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.f(x,y)
w=x[y]
for(x=w.c,v=x.b.length+x.c.length-1;v>=0;--v){u=w.c.l(0,v)
for(t=v-1;t>=0;--t){s=w.c.l(0,t)
if(a.bg(0,u,s)){u.bb()
break}}}}},
d1:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
x=y[z]
y=J.J(x.a,x.b)
if(y)x.bb()}},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.f(w,x)
C.a.h(z,w[x].F(a+(""+x+". ")))}return C.a.k(z,"\n")},
P:function(){return this.F("")}},
jW:{"^":"a;a,0b",
scj:function(a){this.b=H.k(a,"$isb",[F.c0],"$asb")},
gp:function(a){return this.b.length},
kd:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.f(y,z)
y=y[z]
x=y.a
if(x.b.b.length>1){if(x!=null){C.a.N(x.a.b.b,y)
x=y.a.a.e
if(!(x==null))x.J(null)}x=y.a
if(x!=null){C.a.N(x.b.b,y)
y.a=null}}}},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
P:function(){return this.F("")}},
ag:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
cG:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.c5(this.cx,x,u,z,y,w,v,a,t)},
ji:function(){return this.cG(null)},
sa3:function(a,b){var z
if(!J.J(this.f,b)){this.f=b
z=this.a
if(z!=null)z.a4()}},
seJ:function(a){var z
a=a==null?null:a.A(0,Math.sqrt(a.H(a)))
if(!J.J(this.r,a)){this.r=a
z=this.a
if(z!=null)z.a4()}},
seX:function(a){var z
if(!J.J(this.z,a)){this.z=a
z=this.a
if(z!=null)z.a4()}},
se3:function(a){var z
if(!J.J(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.a4()}},
jP:function(a){var z,y
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
else return H.c([z.a,z.b,z.c],y)}else if(a.v(0,$.$get$bF())){z=this.Q
y=[P.q]
if(z==null)return H.c([1,1,1],y)
else return H.c([z.a,z.b,z.c],y)}else if(a.v(0,$.$get$bG())){z=this.Q
y=[P.q]
if(z==null)return H.c([1,1,1,1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else if(a.v(0,$.$get$be()))return H.c([this.ch],[P.q])
else if(a.v(0,$.$get$aN())){z=this.cx
y=[P.q]
if(z==null)return H.c([-1,-1,-1,-1],y)
else return H.c([z.a,z.b,z.c,z.d],y)}else return H.c([],[P.q])},
cD:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bE()
this.d.a0(0,new F.l_(z))
z=z.a
this.r=z.A(0,Math.sqrt(z.H(z)))
z=this.a
if(z!=null){z.a4()
z=this.a.e
if(!(z==null))z.ae()}return!0},
cB:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bE()
this.d.a0(0,new F.kZ(z))
z=z.a
this.x=z.A(0,Math.sqrt(z.H(z)))
z=this.a
if(z!=null){z.a4()
z=this.a.e
if(!(z==null))z.ae()}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
F:function(a){var z,y,x
z=H.c([],[P.h])
C.a.h(z,C.b.ad(J.af(this.e),0))
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
c5:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.ag()
y=new F.kY(z)
y.scj(H.c([],[F.c0]))
z.b=y
y=new F.kU(z)
x=[F.bz]
y.shm(H.c([],x))
y.shn(H.c([],x))
z.c=y
y=new F.kR(z)
x=[F.a8]
y.shd(H.c([],x))
y.she(H.c([],x))
y.shf(H.c([],x))
z.d=y
h=$.$get$fC()
z.e=0
y=$.$get$aQ()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aP().a)!==0?e:null
z.x=(x&$.$get$aO().a)!==0?b:null
z.y=(x&$.$get$aR().a)!==0?f:null
z.z=(x&$.$get$aS().a)!==0?g:null
z.Q=(x&$.$get$fD().a)!==0?c:null
z.ch=(x&$.$get$be().a)!==0?i:0
z.cx=(x&$.$get$aN().a)!==0?a:null
return z}}},
l_:{"^":"n:5;a",
$1:function(a){var z,y
H.d(a,"$isa8")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.G(0,z)}}},
kZ:{"^":"n:5;a",
$1:function(a){var z,y
H.d(a,"$isa8")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.G(0,z)}}},
kQ:{"^":"a;a,0b,0c",
siB:function(a){this.c=H.k(a,"$isb",[F.ag],"$asb")},
B:function(){var z,y,x,w
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
j1:function(a,b,c,d,e,f,g,h,i){var z=F.c5(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
j0:function(a,b,c,d,e,f){return this.j1(a,null,b,c,d,e,f,null,0)},
gp:function(a){return this.c.length},
ax:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].cD()
return!0},
cC:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)z[x].cB()
return!0},
jb:function(){var z,y,x,w,v,u,t,s
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
this.B()
z=H.c([],[P.h])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
P:function(){return this.F("")}},
kR:{"^":"a;a,0b,0c,0d",
shd:function(a){this.b=H.k(a,"$isb",[F.a8],"$asb")},
she:function(a){this.c=H.k(a,"$isb",[F.a8],"$asb")},
shf:function(a){this.d=H.k(a,"$isb",[F.a8],"$asb")},
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
C.a.a0(this.c,new F.kS(this,b))
C.a.a0(this.d,new F.kT(this,b))},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
P:function(){return this.F("")}},
kS:{"^":"n:5;a,b",
$1:function(a){H.d(a,"$isa8")
if(!J.J(a.a,this.a))this.b.$1(a)}},
kT:{"^":"n:5;a,b",
$1:function(a){var z
H.d(a,"$isa8")
z=this.a
if(!J.J(a.a,z)&&!J.J(a.b,z))this.b.$1(a)}},
kU:{"^":"a;a,0b,0c",
shm:function(a){this.b=H.k(a,"$isb",[F.bz],"$asb")},
shn:function(a){this.c=H.k(a,"$isb",[F.bz],"$asb")},
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
kW:{"^":"a;"},
kV:{"^":"kW;",
bg:function(a,b,c){return J.J(b.f,c.f)}},
kX:{"^":"a;"},
jh:{"^":"kX;",
bh:function(a){var z,y,x,w
H.k(a,"$isb",[F.ag],"$asb")
z=V.bE()
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null)z=new V.D(z.a+w.a,z.b+w.b,z.c+w.c)}z=z.A(0,Math.sqrt(z.H(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.z)(a),++x)a[x].seJ(z)
return}},
kY:{"^":"a;a,0b",
scj:function(a){this.b=H.k(a,"$isb",[F.c0],"$asb")},
gp:function(a){return this.b.length},
i:function(a){return this.P()},
F:function(a){var z,y,x,w
z=H.c([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)C.a.h(z,y[w].F(a))
return C.a.k(z,"\n")},
P:function(){return this.F("")}}}],["","",,O,{"^":"",j2:{"^":"cw;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy",
sh_:function(a){this.e=H.k(a,"$isZ",[V.ah],"$asZ")},
gC:function(){var z=this.dy
if(z==null){z=D.L()
this.dy=z}return z},
ak:[function(a){var z
H.d(a,"$isy")
z=this.dy
if(!(z==null))z.J(a)},function(){return this.ak(null)},"kH","$1","$0","ghA",0,2,1],
i9:[function(a){H.d(a,"$isy")
this.a=null
this.ak(a)},function(){return this.i9(null)},"l1","$1","$0","gi8",0,2,1],
kE:[function(a,b){var z=V.ah
z=new D.cm(a,H.k(b,"$isp",[z],"$asp"),this,[z])
z.b=!0
this.ak(z)},"$2","ghx",8,0,14],
kF:[function(a,b){var z=V.ah
z=new D.cn(a,H.k(b,"$isp",[z],"$asp"),this,[z])
z.b=!0
this.ak(z)},"$2","ghy",8,0,14],
dz:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
a2=new Z.bd(a2.a|g.a)}if(d){g=$.$get$aO()
a2=new Z.bd(a2.a|g.a)}if(c){g=$.$get$aR()
a2=new Z.bd(a2.a|g.a)}if(b){g=$.$get$aS()
a2=new Z.bd(a2.a|g.a)}if(a0){g=$.$get$aN()
a2=new Z.bd(a2.a|g.a)}return new A.j7(z,r,q,p,o,n,m,l,k,y,x,w,v,u,t,y+x+w+v+u+t,i,i,a,a1,!0,!1,!1,h,a,f,e,d,c,b,a0,!1,!1,!1,s,j.charCodeAt(0)==0?j:j,a2)},
Z:function(a,b){H.k(a,"$isb",[T.f6],"$asb")},
aB:function(a){var z,y,x,w
for(z=this.dx.a,z=new J.ay(z,z.length,0,[H.t(z,0)]);z.E();){y=z.d
y.toString
x=$.cA
if(x==null){x=new V.D(0,0,1)
$.cA=x}y.a=x
x=y.b
if(x!=null){w=x.aC(a,y)
if(w!=null)y.a=w.d5(y.a)}}},
kf:function(a,a0){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
z=this.a
if(z==null){z=this.dz()
y=a.fr.l(0,z.ao)
if(y==null){y=A.j3(z,a.a)
x=y.b
if(x.length===0)H.r(P.u("May not cache a shader with no name."))
if(a.fr.bD(x))H.r(P.u('Shader cache already contains a shader by the name "'+x+'".'))
a.fr.q(0,x,y)}this.a=y
a0.e=null
z=y}w=z.z
v=w.bF
z=a0.e
if(!(z instanceof Z.e6)){a0.e=null
z=null}if(z==null||!z.d.v(0,v)){z=w.r1
if(z)a0.d.ax()
u=w.r2
if(u){t=a0.d
s=t.e
if(!(s==null))++s.d
t.d.cC()
t.a.cC()
t=t.e
if(!(t==null))t.ae()}t=w.ry
if(t){s=a0.d
r=s.e
if(!(r==null))++r.d
s.a.jb()
s=s.e
if(!(s==null))s.ae()}q=a0.d.ja(new Z.l0(a.a),v)
q.aX($.$get$aQ()).e=this.a.Q.c
if(z)q.aX($.$get$aP()).e=this.a.cx.c
if(u)q.aX($.$get$aO()).e=this.a.ch.c
if(w.rx)q.aX($.$get$aR()).e=this.a.cy.c
if(t)q.aX($.$get$aS()).e=this.a.db.c
if(w.x1)q.aX($.$get$aN()).e=this.a.dx.c
a0.e=q}z=T.f6
p=H.c([],[z])
u=this.a
t=a.a
C.c.f4(t,u.r)
u.x.jx()
if(w.fx){u=this.a
s=a.dx.ga2()
u=u.dy
u.toString
u.ar(s.af(0,!0))}if(w.fy){u=this.a
s=a.cx
if(s==null){s=a.db.ga2().t(0,a.dx.ga2())
a.cx=s}u=u.fr
u.toString
u.ar(s.af(0,!0))}u=this.a
s=a.ch
if(s==null){s=a.gka().t(0,a.dx.ga2())
a.ch=s}u=u.fy
u.toString
u.ar(s.af(0,!0))
if(w.x2){u=this.a
s=this.b
u=u.k1
u.toString
u.ar(C.r.af(s,!0))}if(w.y1){u=this.a
s=this.c
u=u.k2
u.toString
u.ar(C.r.af(s,!0))}if(w.y2){u=this.a
s=this.d
u=u.k3
u.toString
u.ar(C.r.af(s,!0))}if(w.ay>0){o=this.e.a.length
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
m=new Float32Array(H.bg(H.k(r.af(0,!0),"$isb",u,"$asb")))
C.c.f2(s.a,s.d,!1,m)}}switch(w.a){case C.d:break
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
u.al(u.rx,u.x1,s)
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
u.ab(u.ry,u.x1,s)
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
u.al(u.y1,u.ay,s)
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
u.ab(u.y2,u.ay,s)
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
u=u.ao
u.toString
r=s.a
l=s.b
s=s.c
C.c.w(u.a,u.d,r,l,s)
break
case C.e:this.Z(p,this.x.d)
u=this.a
s=this.x.d
u.al(u.bF,u.bG,s)
s=this.a
u=this.x.f
s=s.ao
s.toString
r=u.a
l=u.b
u=u.c
C.c.w(s.a,s.d,r,l,u)
break
case C.f:this.Z(p,this.x.e)
u=this.a
s=this.x.e
u.ab(u.ea,u.bG,s)
s=this.a
u=this.x.f
s=s.ao
s.toString
r=u.a
l=u.b
u=u.c
C.c.w(s.a,s.d,r,l,u)
break}switch(w.d){case C.d:break
case C.i:u=this.a
s=this.y.f
u=u.bH
u.toString
r=s.a
l=s.b
s=s.c
C.c.w(u.a,u.d,r,l,s)
break
case C.e:this.Z(p,this.y.d)
u=this.a
s=this.y.d
u.al(u.eb,u.bI,s)
s=this.a
u=this.y.f
s=s.bH
s.toString
r=u.a
l=u.b
u=u.c
C.c.w(s.a,s.d,r,l,u)
break
case C.f:this.Z(p,this.y.e)
u=this.a
s=this.y.e
u.ab(u.ec,u.bI,s)
s=this.a
u=this.y.f
s=s.bH
s.toString
r=u.a
l=u.b
u=u.c
C.c.w(s.a,s.d,r,l,u)
break}switch(w.e){case C.d:break
case C.i:u=this.a
s=this.z.f
u=u.bJ
u.toString
r=s.a
l=s.b
s=s.c
C.c.w(u.a,u.d,r,l,s)
s=this.a
l=this.z.ch
s=s.bL
C.c.S(s.a,s.d,l)
break
case C.e:this.Z(p,this.z.d)
u=this.a
s=this.z.d
u.al(u.ed,u.bK,s)
s=this.a
u=this.z.f
s=s.bJ
s.toString
r=u.a
l=u.b
u=u.c
C.c.w(s.a,s.d,r,l,u)
u=this.a
l=this.z.ch
u=u.bL
C.c.S(u.a,u.d,l)
break
case C.f:this.Z(p,this.z.e)
u=this.a
s=this.z.e
u.ab(u.ee,u.bK,s)
s=this.a
u=this.z.f
s=s.bJ
s.toString
r=u.a
l=u.b
u=u.c
C.c.w(s.a,s.d,r,l,u)
u=this.a
l=this.z.ch
u=u.bL
C.c.S(u.a,u.d,l)
break}if(w.z>0){o=this.dx.e.length
u=this.a.ep
C.c.W(u.a,u.d,o)
k=a.db.ga2()
for(u=this.dx.e,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.z)(u),++i){h=u[i]
r=this.a.cK
if(j>=r.length)return H.f(r,j)
g=r[j]
r=k.d5(h.a)
l=r.a
f=r.b
e=r.c
e=r.A(0,Math.sqrt(l*l+f*f+e*e))
f=g.b
l=e.a
r=e.b
e=e.c
C.c.w(f.a,f.d,l,r,e)
e=h.c
r=g.c
C.c.w(r.a,r.d,e.a,e.b,e.c);++j}}if(w.Q>0){o=this.dx.f.length
u=this.a.eq
C.c.W(u.a,u.d,o)
k=a.db.ga2()
for(u=this.dx.f,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.z)(u),++i){h=u[i]
r=this.a.cL
if(j>=r.length)return H.f(r,j)
g=r[j]
r=h.gbl(h)
l=g.b
f=r.gd9(r)
e=r.gda(r)
r=r.gdc(r)
C.c.w(l.a,l.d,f,e,r)
r=k.bq(h.gbl(h))
e=g.c
C.c.w(e.a,e.d,r.a,r.b,r.c)
r=h.gam(h)
e=g.d
f=r.gbW()
l=r.gbs()
r=r.gbC()
C.c.w(e.a,e.d,f,l,r)
r=h.gcu()
l=g.e
C.c.S(l.a,l.d,r)
r=h.gcv()
l=g.f
C.c.S(l.a,l.d,r)
r=h.gcw()
l=g.r
C.c.S(l.a,l.d,r);++j}}if(w.ch>0){o=this.dx.r.length
u=this.a.er
C.c.W(u.a,u.d,o)
k=a.db.ga2()
for(u=this.dx.r,s=u.length,j=0,i=0;i<u.length;u.length===s||(0,H.z)(u),++i){h=u[i]
r=this.a.cM
if(j>=r.length)return H.f(r,j)
g=r[j]
r=h.gbl(h)
l=g.b
f=r.gd9(r)
e=r.gda(r)
r=r.gdc(r)
C.c.w(l.a,l.d,f,e,r)
r=h.gcI(h).l9()
e=g.c
f=r.gaU(r)
l=r.gaV(r)
r=r.gaW()
C.c.w(e.a,e.d,f,l,r)
r=k.bq(h.gbl(h))
l=g.d
C.c.w(l.a,l.d,r.a,r.b,r.c)
r=h.gam(h)
l=g.e
f=r.gbW()
e=r.gbs()
r=r.gbC()
C.c.w(l.a,l.d,f,e,r)
r=h.gl7()
e=g.f
C.c.S(e.a,e.d,r)
r=h.gl5()
e=g.r
C.c.S(e.a,e.d,r)
r=h.gcu()
e=g.x
C.c.S(e.a,e.d,r)
r=h.gcv()
e=g.y
C.c.S(e.a,e.d,r)
r=h.gcw()
e=g.z
C.c.S(e.a,e.d,r);++j}}if(w.cx>0){o=this.dx.x.length
u=this.a.es
C.c.W(u.a,u.d,o)
k=a.db.ga2()
for(u=this.dx.x,s=u.length,r=[z],j=0,i=0;i<u.length;u.length===s||(0,H.z)(u),++i){h=u[i]
l=this.a.cN
if(j>=l.length)return H.f(l,j)
g=l[j]
l=h.gbn()
H.k(p,"$isb",r,"$asb")
if(!C.a.a_(p,l)){l.sbe(0,p.length)
C.a.h(p,l)}l=h.gcI(h)
f=g.d
e=l.gaU(l)
d=l.gaV(l)
l=l.gaW()
C.c.w(f.a,f.d,e,d,l)
l=h.gbX()
d=g.b
e=l.gaU(l)
f=l.gaV(l)
l=l.gaW()
C.c.w(d.a,d.d,e,f,l)
l=h.gbm(h)
f=g.c
e=l.gaU(l)
d=l.gaV(l)
l=l.gaW()
C.c.w(f.a,f.d,e,d,l)
l=k.d5(h.gcI(h))
d=l.a
e=l.b
f=l.c
f=l.A(0,Math.sqrt(d*d+e*e+f*f))
e=g.e
d=f.a
l=f.b
f=f.c
C.c.w(e.a,e.d,d,l,f)
f=h.gam(h)
l=g.f
d=f.gbW()
e=f.gbs()
f=f.gbC()
C.c.w(l.a,l.d,d,e,f)
f=h.gbn()
l=f.gbf(f)
if(!l){l=g.x
C.c.W(l.a,l.d,1)}else{l=g.r
e=f.gbf(f)
d=l.a
l=l.d
if(!e)C.c.W(d,l,0)
else C.c.W(d,l,f.gbe(f))
l=g.x
C.c.W(l.a,l.d,0)}++j}}if(w.cy>0){o=this.dx.y.length
u=this.a.eu
C.c.W(u.a,u.d,o)
k=a.db.ga2()
for(u=this.dx.y,s=u.length,r=[P.q],l=[z],j=0,i=0;i<u.length;u.length===s||(0,H.z)(u),++i){h=u[i]
f=this.a.cO
if(j>=f.length)return H.f(f,j)
g=f[j]
f=h.gbn()
H.k(p,"$isb",l,"$asb")
if(!C.a.a_(p,f)){f.sbe(0,p.length)
C.a.h(p,f)}c=k.t(0,h.ga2())
f=h.ga2()
e=$.bC
if(e==null){e=new V.a0(0,0,0)
$.bC=e}e=f.bq(e)
f=g.b
d=e.gd9(e)
b=e.gda(e)
e=e.gdc(e)
C.c.w(f.a,f.d,d,b,e)
f=$.bC
if(f==null){f=new V.a0(0,0,0)
$.bC=f}f=c.bq(f)
e=g.c
C.c.w(e.a,e.d,f.a,f.b,f.c)
f=c.eG()
e=g.d
m=new Float32Array(H.bg(H.k(new V.eD(f.a,f.b,f.c,f.e,f.f,f.r,f.y,f.z,f.Q).af(0,!0),"$isb",r,"$asb")))
C.c.f1(e.a,e.d,!1,m)
e=h.gam(h)
f=g.e
d=e.gbW()
b=e.gbs()
e=e.gbC()
C.c.w(f.a,f.d,d,b,e)
e=h.gbn()
f=e.gbf(e)
if(!f){f=g.r
C.c.W(f.a,f.d,1)}else{f=g.f
d=e.gbf(e)
b=f.a
f=f.d
if(!d)C.c.W(b,f,0)
else C.c.W(b,f,e.gbe(e))
f=g.r
C.c.W(f.a,f.d,0)}f=h.gcu()
e=g.x
C.c.S(e.a,e.d,f)
f=h.gcv()
e=g.y
C.c.S(e.a,e.d,f)
f=h.gcw()
e=g.z
C.c.S(e.a,e.d,f);++j}}if(w.db>0){o=this.dx.z.length
u=this.a.ev
C.c.W(u.a,u.d,o)
k=a.db.ga2()
for(u=this.dx.z,s=u.length,z=[z],j=0,i=0;i<u.length;u.length===s||(0,H.z)(u),++i){h=u[i]
r=this.a.cP
if(j>=r.length)return H.f(r,j)
g=r[j]
r=h.gbn()
H.k(p,"$isb",z,"$asb")
if(!C.a.a_(p,r)){r.sbe(0,p.length)
C.a.h(p,r)}r=h.gbl(h)
l=g.b
f=r.gd9(r)
e=r.gda(r)
r=r.gdc(r)
C.c.w(l.a,l.d,f,e,r)
r=h.gcI(h)
e=g.c
f=r.gaU(r)
l=r.gaV(r)
r=r.gaW()
C.c.w(e.a,e.d,f,l,r)
r=h.gbX()
l=g.d
f=r.gaU(r)
e=r.gaV(r)
r=r.gaW()
C.c.w(l.a,l.d,f,e,r)
r=h.gbm(h)
e=g.e
f=r.gaU(r)
l=r.gaV(r)
r=r.gaW()
C.c.w(e.a,e.d,f,l,r)
r=k.bq(h.gbl(h))
l=g.f
C.c.w(l.a,l.d,r.a,r.b,r.c)
r=h.gbn()
l=r.gbf(r)
if(!l){r=g.x
C.c.W(r.a,r.d,1)}else{l=g.r
f=r.gbf(r)
e=l.a
l=l.d
if(!f)C.c.W(e,l,0)
else C.c.W(e,l,r.gbe(r))
r=g.x
C.c.W(r.a,r.d,0)}r=h.gam(h)
l=g.y
f=r.gbW()
e=r.gbs()
r=r.gbC()
C.c.w(l.a,l.d,f,e,r)
r=h.glf()
e=g.z
C.c.S(e.a,e.d,r)
r=h.glg()
e=g.Q
C.c.S(e.a,e.d,r)
r=h.gcu()
e=g.ch
C.c.S(e.a,e.d,r)
r=h.gcv()
e=g.cx
C.c.S(e.a,e.d,r)
r=h.gcw()
e=g.cy
C.c.S(e.a,e.d,r);++j}}}switch(w.f){case C.d:break
case C.i:break
case C.e:this.Z(p,this.Q.d)
z=this.a
u=this.Q.d
z.al(z.ef,z.bM,u)
break
case C.f:this.Z(p,this.Q.e)
z=this.a
u=this.Q.e
z.ab(z.eg,z.bM,u)
break}if(w.fr){z=this.a
u=a.Q
if(u==null){u=a.db.ga2().eG()
a.Q=u}z=z.id
z.toString
z.ar(u.af(0,!0))}if(w.dy){this.Z(p,this.ch)
z=this.a
u=this.ch
z.ab(z.eh,z.ei,u)
switch(w.r){case C.d:break
case C.i:z=this.a
u=this.cx.f
z=z.bN
z.toString
s=u.a
r=u.b
u=u.c
C.c.w(z.a,z.d,s,r,u)
break
case C.e:this.Z(p,this.cx.d)
z=this.a
u=this.cx.d
z.al(z.ej,z.bO,u)
u=this.a
z=this.cx.f
u=u.bN
u.toString
s=z.a
r=z.b
z=z.c
C.c.w(u.a,u.d,s,r,z)
break
case C.f:this.Z(p,this.cx.e)
z=this.a
u=this.cx.e
z.ab(z.ek,z.bO,u)
u=this.a
z=this.cx.f
u=u.bN
u.toString
s=z.a
r=z.b
z=z.c
C.c.w(u.a,u.d,s,r,z)
break}switch(w.x){case C.d:break
case C.i:z=this.a
u=this.cy.f
z=z.bQ
z.toString
s=u.a
r=u.b
u=u.c
C.c.w(z.a,z.d,s,r,u)
u=this.a
r=this.cy.ch
u=u.bP
C.c.S(u.a,u.d,r)
break
case C.e:this.Z(p,this.cy.d)
z=this.a
u=this.cy.d
z.al(z.el,z.bR,u)
u=this.a
z=this.cy.f
u=u.bQ
u.toString
s=z.a
r=z.b
z=z.c
C.c.w(u.a,u.d,s,r,z)
z=this.a
r=this.cy.ch
z=z.bP
C.c.S(z.a,z.d,r)
break
case C.f:this.Z(p,this.cy.e)
z=this.a
u=this.cy.e
z.ab(z.em,z.bR,u)
u=this.a
z=this.cy.f
u=u.bQ
u.toString
s=z.a
r=z.b
z=z.c
C.c.w(u.a,u.d,s,r,z)
z=this.a
r=this.cy.ch
z=z.bP
C.c.S(z.a,z.d,r)
break}}z=w.y
u=z!==C.d
if(u){switch(z){case C.d:break
case C.i:z=this.a
s=this.db.f
z=z.bS
C.c.S(z.a,z.d,s)
break
case C.e:this.Z(p,this.db.d)
z=this.a
s=this.db.d
z.al(z.en,z.bT,s)
s=this.a
z=this.db.f
s=s.bS
C.c.S(s.a,s.d,z)
break
case C.f:this.Z(p,this.db.e)
z=this.a
s=this.db.e
z.ab(z.eo,z.bT,s)
s=this.a
z=this.db.f
s=s.bS
C.c.S(s.a,s.d,z)
break}C.c.cJ(t,3042)
C.c.j9(t,770,771)}for(n=0;n<p.length;++n)p[n].bB(a)
z=a0.e
z.bB(a)
z.b_(a)
z.f0(a)
if(u)C.c.ju(t,3042)
for(n=0;n<p.length;++n)p[n].f0(a)
z=this.a
z.toString
C.c.f4(t,null)
z.x.jv()},
i:function(a){var z=this.a
if(z!=null)return z.b
else return this.dz().ao}},j5:{"^":"d6;0f,a,b,0c,0d,0e"},d6:{"^":"a;",
by:["ft",function(){}]},j6:{"^":"d6;a,b,0c,0d,0e"},b6:{"^":"d6;0f,a,b,0c,0d,0e",
dS:function(a){var z,y
if(!J.J(this.f,a)){z=this.f
this.f=a
y=new D.F(this.b+".color",z,a,this,[V.a_])
y.b=!0
this.a.ak(y)}},
by:["c1",function(){this.ft()
this.dS(new V.a_(1,1,1))}],
sam:function(a,b){var z
if(this.c===C.d){this.c=C.i
this.by()
z=this.a
z.a=null
z.ak(null)}this.dS(b)}},j8:{"^":"b6;0ch,0f,a,b,0c,0d,0e",
ig:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.F(this.b+".refraction",y,a,this,[P.q])
z.b=!0
this.a.ak(z)}},
by:function(){this.c1()
this.ig(1)}},j9:{"^":"b6;0ch,0f,a,b,0c,0d,0e",
co:function(a){var z,y
z=this.ch
if(!$.o.$2(z,a)){y=this.ch
this.ch=a
z=new D.F(this.b+".shininess",y,a,this,[P.q])
z.b=!0
this.a.ak(z)}},
by:function(){this.c1()
this.co(100)}},cw:{"^":"a;"}}],["","",,T,{"^":"",f6:{"^":"cT;"},ka:{"^":"a;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",bq:{"^":"a;",
aZ:function(a){return!0},
i:function(a){return"all"},
$isaB:1},aB:{"^":"a;"},eC:{"^":"a;0a",
sa7:function(a){this.a=H.k(a,"$isb",[V.aB],"$asb")},
aZ:["fs",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x)if(z[x].aZ(a))return!0
return!1}],
i:["dk",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.z)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isaB:1},aw:{"^":"eC;0a",
aZ:function(a){return!this.fs(a)},
i:function(a){return"!["+this.dk(0)+"]"}},jE:{"^":"a;0a,0b",
aZ:function(a){return this.a<=a&&this.b>=a},
i:function(a){var z,y
z=H.b9(this.a)
y=H.b9(this.b)
return z+".."+y},
$isaB:1,
n:{
R:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.e(P.u("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.b.I(a,0)
y=C.b.I(b,0)
x=new V.jE()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},jR:{"^":"a;0a",
sie:function(a){this.a=H.k(a,"$isH",[P.m,P.N],"$asH")},
fA:function(a){var z,y
if(a.a.length<=0)throw H.e(P.u("May not create a SetMatcher with zero characters."))
z=new H.aY(0,0,[P.m,P.N])
for(y=new H.d4(a,a.gp(a),0,[H.a5(a,"U",0)]);y.E();)z.q(0,y.d,!0)
this.sie(z)},
aZ:function(a){return this.a.bD(a)},
i:function(a){return P.c3(this.a.gaz(),0,null)},
$isaB:1,
n:{
w:function(a){var z=new V.jR()
z.fA(a)
return z}}},df:{"^":"a;a,b,0c,0d",
siw:function(a){this.c=H.k(a,"$isb",[V.dl],"$asb")},
k:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.dl(this.a.j(0,b))
w.sa7(H.c([],[V.aB]))
w.c=!1
C.a.h(this.c,w)
return w},
jA:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.z)(z),++x){w=z[x]
if(w.aZ(a))return w}return},
i:function(a){return this.b}},fd:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.dU(this.b,"\n","\\n")
y=H.dU(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},dk:{"^":"a;a,b,0c",
si4:function(a){var z=P.h
this.c=H.k(a,"$isH",[z,z],"$asH")},
aI:function(a,b,c){var z,y,x
H.k(c,"$isb",[P.h],"$asb")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.z)(c),++y){x=c[y]
this.c.q(0,x,b)}},
i:function(a){return this.b}},kf:{"^":"a;0a,0b,0c",
sip:function(a){this.a=H.k(a,"$isH",[P.h,V.df],"$asH")},
sis:function(a){this.b=H.k(a,"$isH",[P.h,V.dk],"$asH")},
j:function(a,b){var z=this.a.l(0,b)
if(z==null){z=new V.df(this,b)
z.siw(H.c([],[V.dl]))
z.d=null
this.a.q(0,b,z)}return z},
R:function(a){var z,y
z=this.b.l(0,a)
if(z==null){z=new V.dk(this,a)
y=P.h
z.si4(new H.aY(0,0,[y,y]))
this.b.q(0,a,z)}return z},
f_:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.c([],[V.fd])
y=this.c
x=[P.m]
w=H.c([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.I(a,t)
r=y.jA(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.c3(w,0,null)
throw H.e(P.u("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.c([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.c3(w,0,null)
p=y.d
o=p.c.l(0,q)
u=new V.fd(o==null?p.b:o,q,t)}++t}}},
n:{
cx:function(){var z,y
z=new V.kf()
y=P.h
z.sip(new H.aY(0,0,[y,V.df]))
z.sis(new H.aY(0,0,[y,V.dk]))
z.c=null
return z}}},dl:{"^":"eC;b,0c,0a",
i:function(a){return this.b.b+": "+this.dk(0)}}}],["","",,X,{"^":"",e8:{"^":"a;",$isaK:1},io:{"^":"f3;0a,0b,0c,0d,0e,0f,0r,0x",
gC:function(){var z=this.x
if(z==null){z=D.L()
this.x=z}return z}},jk:{"^":"a;0a,0b,0c,0d,0e,0f",
gC:function(){var z=this.f
if(z==null){z=D.L()
this.f=z}return z},
b2:[function(a){var z
H.d(a,"$isy")
z=this.f
if(!(z==null))z.J(a)},function(){return this.b2(null)},"ky","$1","$0","gdm",0,2,1],
sbi:function(a){var z,y
if(!J.J(this.b,a)){z=this.b
if(z!=null)z.gC().N(0,this.gdm())
y=this.b
this.b=a
if(a!=null)a.gC().h(0,this.gdm())
z=new D.F("mover",y,this.b,this,[U.aa])
z.b=!0
this.b2(z)}},
$isaK:1,
$ise8:1},f3:{"^":"a;"}}],["","",,V,{"^":"",
ng:function(a){P.ke(C.U,new V.nh(a))},
aU:{"^":"a;0d",
sca:function(a){this.d=H.k(a,"$isb",[[P.b,W.aW]],"$asb")},
bv:function(a){this.b=new P.iv(C.X)
this.c=null
this.sca(H.c([],[[P.b,W.aW]]))},
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
s=this.b.h5(u,0,u.length)
r=s==null?u:s
C.j.fk(t,H.dU(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gaA(this.d),t)}},
eN:function(a){var z,y,x,w
H.k(a,"$isb",[P.h],"$asb")
this.sca(H.c([],[[P.b,W.aW]]))
z=C.a.k(a,"\n")
y=this.c
if(y==null){y=this.bE()
this.c=y}for(y=y.f_(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.z)(y),++w)this.bV(y[w])}},
nh:{"^":"n:50;a",
$1:function(a){H.d(a,"$isba")
P.dT(C.k.eZ(this.a.gjG(),2)+" fps")}},
i_:{"^":"aU;a,0b,0c,0d",
bV:function(a){switch(a.a){case"Class":this.O(a.b,"#551")
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
z=V.cx()
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
C.a.h(z.j(0,"OpenDoubleStr").k(0,"OpenDoubleStr").a,new V.bq())
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
C.a.h(z.j(0,"OpenSingleStr").k(0,"OpenSingleStr").a,new V.bq())
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
y.aI(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.aI(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.aI(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
ip:{"^":"aU;a,0b,0c,0d",
bV:function(a){switch(a.a){case"Builtin":this.O(a.b,"#411")
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
z=V.cx()
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
C.a.h(z.j(0,"Slash").k(0,"Sym").a,new V.bq())
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
x.aI(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.aI(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.aI(0,"Builtin",H.c(["gl_FragColor","gl_Position"],y))
return z}},
iq:{"^":"aU;a,0b,0c,0d",
bV:function(a){switch(a.a){case"Attr":this.O(a.b,"#911")
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
z=V.cx()
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
C.a.h(z.j(0,"OpenStr").k(0,"OpenStr").a,new V.bq())
C.a.h(z.j(0,"Start").k(0,"Other").a,new V.bq())
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
y.d=y.a.R("Symbol")
y=z.j(0,"CloseStr")
y.d=y.a.R("String")
y=z.j(0,"Id")
x=y.a.R("Id")
y.d=x
x.aI(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
x=z.j(0,"Attr")
x.d=x.a.R("Attr")
x=z.j(0,"Other")
x.d=x.a.R("Other")
return z}},
jm:{"^":"aU;a,0b,0c,0d",
eN:function(a){H.k(a,"$isb",[P.h],"$asb")
this.sca(H.c([],[[P.b,W.aW]]))
this.O(C.a.k(a,"\n"),"#111")},
bV:function(a){},
bE:function(){return}},
jB:{"^":"a;a,b,0c",
dZ:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.l(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.fs().gd0().l(0,H.i(z))
if(y==null)if(d){c.$0()
this.dX(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.dY(this.c).h(0,v)
t=W.iy("radio")
t.checked=x
t.name=z
z=W.ac
W.a2(t,"change",H.l(new V.jC(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
C.F.D(v,t)
s=w.createElement("span")
s.textContent=b
C.F.D(v,s)
J.dY(this.c).h(0,w.createElement("br"))},
b8:function(a,b,c){return this.dZ(a,b,c,!1)},
dX:function(a){var z,y,x,w,v
z=P.fs()
y=P.h
x=P.iR(z.gd0(),y,y)
x.q(0,this.a,a)
w=z.eT(0,x)
y=window.history
v=w.i(0)
y.toString;(y&&C.W).i6(y,new P.lK([],[]).d6(""),"",v)}},
jC:{"^":"n:19;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dX(this.d)}}},
jX:{"^":"a;0a,0b",
fC:function(a,b){var z,y,x,w,v,u,t
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
t=W.ac
W.a2(z,"scroll",H.l(new V.k_(x),{func:1,ret:-1,args:[t]}),!1,t)},
e0:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.k(a,"$isb",[P.h],"$asb")
this.ij()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.f_(C.a.jM(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.z)(x),++v){u=x[v]
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
if(H.hr(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.f(r,1)
q.href=H.C(r[1])
q.textContent=H.C(r[0])
C.j.D(y,q)}else{p=P.c7(C.I,s,C.m,!1)
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
fb:function(a){var z,y,x,w
z=new V.i_("dart")
z.bv("dart")
y=new V.ip("glsl")
y.bv("glsl")
x=new V.iq("html")
x.bv("html")
w=C.a.jC(H.c([z,y,x],[V.aU]),new V.k0(a))
if(w!=null)return w
z=new V.jm("plain")
z.bv("plain")
return z},
e_:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.k(a2,"$isb",[P.h],"$asb")
z=H.c([],[P.m])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.bQ(w).a5(w,"+")){C.a.q(a2,x,C.b.as(w,1))
C.a.h(z,1)
y=!0}else if(C.b.a5(w,"-")){C.a.q(a2,x,C.b.as(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.fb(a0)
v.eN(a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
C.j.D(t,s)
C.j.D(this.a,t)
r=P.c7(C.I,a,C.m,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.e_(null)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.z)(w),++e)C.x.D(f,w[e])
C.n.D(j,i)
C.n.D(j,h)
C.n.D(j,f)
C.o.D(s,j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.z)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gV(w);b.E();)C.x.D(h,b.gK())
C.n.D(j,i)
C.n.D(j,h)
C.o.D(s,j)}},
iY:function(a){var z,y,x,w,v,u,t
H.k(a,"$isb",[P.h],"$asb")
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
x=H.d((w&&C.n).dI(w,-1),"$iscv").style
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
t=H.d(C.n.dI(w,-1),"$iscv")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto";(t&&C.x).D(t,u)}},
ij:function(){var z,y,x,w
if(this.b!=null)return
z=V.cx()
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
C.a.h(z.j(0,"Start").k(0,"Other").a,new V.bq())
x=z.j(0,"Other").k(0,"Other")
y=new V.aw()
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
jY:function(a,b){var z=new V.jX()
z.fC(a,!0)
return z}}},
k_:{"^":"n:19;a",
$1:function(a){P.fb(C.y,new V.jZ(this.a))}},
jZ:{"^":"n:0;a",
$0:function(){var z,y,x
z=C.k.aq(document.documentElement.scrollTop)
y=this.a.style
x=H.i(-0.01*z)+"px"
y.top=x}},
k0:{"^":"n:52;a",
$1:function(a){return H.d(a,"$isaU").a===this.a}}}],["","",,U,{"^":"",
hn:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
z=V.jY("Test 020",!0)
y=W.e9(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
C.j.D(z.a,y)
x=[P.h]
z.e0(H.c(["Test of the Matrial Lighting shader with multiple moving directional lights."],x))
z.iY(H.c(["shapes"],x))
z.e0(H.c(["\xab[Back to Tests|../]"],x))
x=document
w=C.z.de(x,"testCanvas")
if(w==null)H.r(P.u("Failed to find an element with the identifier, testCanvas."))
v=E.kc(w,!0,!0,!0,!1)
u=U.dc(0,0,0.3,0,0,0)
t=D.cZ(new V.a_(1,0,0),u)
u=U.dc(0.4,0,0,0,0,0)
s=D.cZ(new V.a_(0,1,0),u)
u=U.dc(0.5,0,0.5,0,0,0)
r=D.cZ(new V.a_(0,0,1),u)
q=new O.j2()
q.sh_(O.cX(V.ah))
q.e.bu(q.ghx(),q.ghy())
u=new O.b6(q,"emission")
u.c=C.d
u.f=new V.a_(0,0,0)
q.f=u
u=new O.b6(q,"ambient")
u.c=C.d
u.f=new V.a_(0,0,0)
q.r=u
u=new O.b6(q,"diffuse")
u.c=C.d
u.f=new V.a_(0,0,0)
q.x=u
u=new O.b6(q,"invDiffuse")
u.c=C.d
u.f=new V.a_(0,0,0)
q.y=u
u=new O.j9(q,"specular")
u.c=C.d
u.f=new V.a_(0,0,0)
u.ch=100
q.z=u
u=new O.j6(q,"bump")
u.c=C.d
q.Q=u
q.ch=null
u=new O.b6(q,"reflect")
u.c=C.d
u.f=new V.a_(0,0,0)
q.cx=u
u=new O.j8(q,"refract")
u.c=C.d
u.f=new V.a_(0,0,0)
u.ch=1
q.cy=u
u=new O.j5(q,"alpha")
u.c=C.d
u.f=1
q.db=u
u=new D.iJ()
u.c2(D.a4)
u.sh9(H.c([],[D.ci]))
u.shX(H.c([],[D.eP]))
u.sio(H.c([],[D.f_]))
u.six(H.c([],[D.f7]))
u.siy(H.c([],[D.f8]))
u.siz(H.c([],[D.f9]))
u.Q=null
u.ch=null
u.di(u.ghw(),u.ghR(),u.ghT())
q.dx=u
p=u.Q
if(p==null){p=D.L()
u.Q=p
u=p}else u=p
u.h(0,q.gi8())
u=q.dx
p=u.ch
if(p==null){p=D.L()
u.ch=p
u=p}else u=p
u.h(0,q.ghA())
q.dy=null
q.dx.h(0,t)
q.dx.h(0,s)
q.dx.h(0,r)
q.f.sam(0,new V.a_(0,0,0))
u=q.r
u.sam(0,new V.a_(0.1,0.1,0.1))
u=q.x
u.sam(0,new V.a_(0.7,0.7,0.7))
u=q.z
u.sam(0,new V.a_(0.3,0.3,0.3))
u=q.z
if(u.c===C.d){u.c=C.i
u.c1()
u.co(100)
p=u.a
p.a=null
p.ak(null)}u.co(100)
o=E.ep(null,!0,null,"",null,null)
o.sag(0,F.ht(30,1,15,0.5))
n=E.ep(null,!0,null,"",null,null)
n.sbi(U.ed(V.eH(3,3,3,1)))
u=F.dN(1,null,null,1)
u.cQ()
n.sag(0,u)
m=new U.er()
m.c2(U.aa)
m.bu(m.ghv(),m.ghS())
m.e=null
m.f=V.c_()
m.r=0
u=v.r
p=new U.kG()
l=U.cY()
l.sd8(0,!0)
l.scV(6.283185307179586)
l.scX(0)
l.sa3(0,0)
l.scW(100)
l.sX(0)
l.scH(0.5)
p.b=l
k=p.gaM()
l.gC().h(0,k)
l=U.cY()
l.sd8(0,!0)
l.scV(6.283185307179586)
l.scX(0)
l.sa3(0,0)
l.scW(100)
l.sX(0)
l.scH(0.5)
p.c=l
l.gC().h(0,k)
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
j=new X.aD(!1,!1,!1)
i=p.d
p.d=j
l=[X.aD]
k=new D.F("modifiers",i,j,p,l)
k.b=!0
p.L(k)
k=p.f
if(k!==!1){p.f=!1
k=new D.F("invertX",k,!1,p,[P.N])
k.b=!0
p.L(k)}k=p.r
if(k!==!1){p.r=!1
k=new D.F("invertY",k,!1,p,[P.N])
k.b=!0
p.L(k)}p.b9(u)
m.h(0,p)
u=v.r
p=new U.kF()
k=U.cY()
k.sd8(0,!0)
k.scV(6.283185307179586)
k.scX(0)
k.sa3(0,0)
k.scW(100)
k.sX(0)
k.scH(0.2)
p.b=k
k.gC().h(0,p.gaM())
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
j=new X.aD(!0,!1,!1)
i=p.c
p.c=j
k=new D.F("modifiers",i,j,p,l)
k.b=!0
p.L(k)
p.b9(u)
m.h(0,p)
u=v.r
p=new U.kH()
p.c=0.01
p.d=0
p.e=0
j=new X.aD(!1,!1,!1)
p.b=j
l=new D.F("modifiers",null,j,p,l)
l.b=!0
p.L(l)
p.b9(u)
m.h(0,p)
m.h(0,U.ed(V.aC(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
u=new M.ic()
u.sh3(0,O.cX(E.at))
u.d.bu(u.ghB(),u.ghC())
u.e=null
u.f=null
u.r=null
u.x=null
h=new X.jk()
h.c=1.0471975511965976
h.d=0.1
h.e=2000
h.sbi(null)
p=h.c
if(!$.o.$2(p,1.0471975511965976)){i=h.c
h.c=1.0471975511965976
p=new D.F("fov",i,1.0471975511965976,h,[P.q])
p.b=!0
h.b2(p)}p=h.d
if(!$.o.$2(p,0.1)){i=h.d
h.d=0.1
p=new D.F("near",i,0.1,h,[P.q])
p.b=!0
h.b2(p)}p=h.e
if(!$.o.$2(p,2000)){i=h.e
h.e=2000
p=new D.F("far",i,2000,h,[P.q])
p.b=!0
h.b2(p)}p=u.a
if(p!==h){if(p!=null)p.gC().N(0,u.gat())
i=u.a
u.a=h
h.gC().h(0,u.gat())
p=new D.F("camera",i,u.a,u,[X.e8])
p.b=!0
u.aN(p)}g=new X.io()
p=new V.bs(0,0,0,1)
g.a=p
g.b=!0
g.c=2000
g.d=!0
g.e=0
g.f=!1
p=$.eV
if(p==null){p=V.eU(0,0,1,1)
$.eV=p}g.r=p
p=u.b
if(p!==g){if(p!=null)p.gC().N(0,u.gat())
i=u.b
u.b=g
g.gC().h(0,u.gat())
p=new D.F("target",i,u.b,u,[X.f3])
p.b=!0
u.aN(p)}u.seW(null)
u.seW(q)
u.d.h(0,o)
u.d.h(0,n)
u.a.sbi(m)
p=v.d
if(p!==u){if(p!=null)p.gC().N(0,v.gdl())
v.d=u
u.gC().h(0,v.gdl())
v.fG()}u=new V.jB("shapes",!0)
x=C.z.de(x,"shapes")
u.c=x
if(x==null)H.r("Failed to find shapes for RadioGroup")
u.b8(0,"Cube",new U.n3(o))
u.b8(0,"Cylinder",new U.n4(o))
u.b8(0,"Cone",new U.n5(o))
u.b8(0,"Sphere",new U.n6(o))
u.dZ(0,"Toroid",new U.n7(o),!0)
u.b8(0,"Knot",new U.n8(o))
x=v.z
if(x==null){x=D.L()
v.z=x}u={func:1,ret:-1,args:[D.y]}
p=H.l(new U.n9(z,q),u)
if(x.b==null)x.sb5(H.c([],[u]))
x=x.b;(x&&C.a).h(x,p)
V.ng(v)},
n3:{"^":"n:0;a",
$0:function(){this.a.sag(0,F.dN(1,null,null,1))}},
n4:{"^":"n:0;a",
$0:function(){this.a.sag(0,F.hf(1,!0,!0,1,40,1))}},
n5:{"^":"n:0;a",
$0:function(){this.a.sag(0,F.hf(1,!0,!1,1,40,0))}},
n6:{"^":"n:0;a",
$0:function(){this.a.sag(0,F.ni(6,null,1,6))}},
n7:{"^":"n:0;a",
$0:function(){this.a.sag(0,F.ht(30,1,15,0.5))}},
n8:{"^":"n:0;a",
$0:function(){this.a.sag(0,F.n0(120,1,2,12,0.3,3))}},
n9:{"^":"n:8;a,b",
$1:function(a){var z,y,x,w
H.d(a,"$isy")
z=this.a
y=this.b
x=y.a
w=[P.h]
z.e_("Vertex Shader","glsl",0,H.c((x==null?null:x.c).split("\n"),w))
y=y.a
z.e_("Fragment Shader","glsl",0,H.c((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.P=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eu.prototype
return J.iD.prototype}if(typeof a=="string")return J.bX.prototype
if(a==null)return J.ev.prototype
if(typeof a=="boolean")return J.iC.prototype
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bY.prototype
return a}if(a instanceof P.a)return a
return J.cJ(a)}
J.bm=function(a){if(typeof a=="string")return J.bX.prototype
if(a==null)return a
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bY.prototype
return a}if(a instanceof P.a)return a
return J.cJ(a)}
J.dQ=function(a){if(a==null)return a
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bY.prototype
return a}if(a instanceof P.a)return a
return J.cJ(a)}
J.mO=function(a){if(typeof a=="number")return J.bW.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.c4.prototype
return a}
J.mP=function(a){if(typeof a=="number")return J.bW.prototype
if(typeof a=="string")return J.bX.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.c4.prototype
return a}
J.bQ=function(a){if(typeof a=="string")return J.bX.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.c4.prototype
return a}
J.X=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bY.prototype
return a}if(a instanceof P.a)return a
return J.cJ(a)}
J.J=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.P(a).v(a,b)}
J.hu=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mO(a).T(a,b)}
J.dW=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mP(a).t(a,b)}
J.hv=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.n_(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bm(a).l(a,b)}
J.hw=function(a,b,c,d){return J.X(a).fW(a,b,c,d)}
J.hx=function(a,b){return J.bQ(a).I(a,b)}
J.cc=function(a,b){return J.X(a).i1(a,b)}
J.cP=function(a,b,c){return J.X(a).i5(a,b,c)}
J.dX=function(a,b){return J.X(a).D(a,b)}
J.hy=function(a,b){return J.bQ(a).a1(a,b)}
J.cQ=function(a,b,c){return J.bm(a).jh(a,b,c)}
J.cd=function(a,b){return J.dQ(a).a8(a,b)}
J.hz=function(a,b,c,d){return J.X(a).jz(a,b,c,d)}
J.hA=function(a){return J.X(a).gj6(a)}
J.dY=function(a){return J.X(a).gcE(a)}
J.bR=function(a){return J.P(a).gY(a)}
J.b3=function(a){return J.dQ(a).gV(a)}
J.as=function(a){return J.bm(a).gp(a)}
J.hB=function(a){return J.X(a).gk9(a)}
J.hC=function(a){return J.X(a).gkn(a)}
J.cR=function(a,b){return J.X(a).b1(a,b)}
J.dZ=function(a){return J.dQ(a).kb(a)}
J.hD=function(a,b){return J.X(a).kg(a,b)}
J.hE=function(a,b){return J.X(a).sks(a,b)}
J.hF=function(a,b,c){return J.X(a).fj(a,b,c)}
J.hG=function(a,b,c){return J.bQ(a).u(a,b,c)}
J.hH=function(a){return J.bQ(a).kr(a)}
J.af=function(a){return J.P(a).i(a)}
I.a6=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.p=W.cf.prototype
C.q=W.cW.prototype
C.j=W.aW.prototype
C.T=W.i4.prototype
C.V=W.ir.prototype
C.W=W.is.prototype
C.z=W.iu.prototype
C.Y=J.M.prototype
C.a=J.b5.prototype
C.h=J.eu.prototype
C.r=J.ev.prototype
C.k=J.bW.prototype
C.b=J.bX.prototype
C.a4=J.bY.prototype
C.F=W.iI.prototype
C.aa=W.je.prototype
C.L=J.jl.prototype
C.M=W.jD.prototype
C.c=P.db.prototype
C.x=W.cv.prototype
C.o=W.k8.prototype
C.n=W.k9.prototype
C.C=J.c4.prototype
C.N=W.bH.prototype
C.O=W.l2.prototype
C.Q=new P.hL(!1)
C.P=new P.hK(C.Q)
C.R=new P.jj()
C.S=new P.kP()
C.l=new P.lA()
C.d=new A.ch(0,"ColorSourceType.None")
C.i=new A.ch(1,"ColorSourceType.Solid")
C.e=new A.ch(2,"ColorSourceType.Texture2D")
C.f=new A.ch(3,"ColorSourceType.TextureCube")
C.y=new P.bt(0)
C.U=new P.bt(5e6)
C.X=new P.iw("element",!0,!1,!1,!1)
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
C.G=H.c(I.a6([127,2047,65535,1114111]),[P.m])
C.t=H.c(I.a6([0,0,32776,33792,1,10240,0,0]),[P.m])
C.a5=H.c(I.a6(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.u=H.c(I.a6([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.v=H.c(I.a6([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.a6=H.c(I.a6(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.H=H.c(I.a6([]),[P.h])
C.a7=H.c(I.a6([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.I=H.c(I.a6([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.w=H.c(I.a6([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.J=H.c(I.a6([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.a8=H.c(I.a6([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.K=H.c(I.a6([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.A=H.c(I.a6(["bind","if","ref","repeat","syntax"]),[P.h])
C.B=H.c(I.a6(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.a9=new H.hX(0,{},C.H,[P.h,P.h])
C.m=new P.kI(!1)
$.az=0
$.br=null
$.e3=null
$.dG=!1
$.hk=null
$.hc=null
$.hq=null
$.cI=null
$.cL=null
$.dR=null
$.bh=null
$.bM=null
$.bN=null
$.dH=!1
$.S=C.l
$.aJ=null
$.d_=null
$.eo=null
$.en=null
$.ej=null
$.ei=null
$.eh=null
$.eg=null
$.o=V.ja()
$.eI=null
$.eQ=null
$.bC=null
$.eV=null
$.fw=null
$.fA=null
$.fy=null
$.fz=null
$.cA=null
$.fx=null
$.eO=null
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
I.$lazy(y,x,w)}})(["ef","$get$ef",function(){return H.hj("_$dart_dartClosure")},"d1","$get$d1",function(){return H.hj("_$dart_js")},"ff","$get$ff",function(){return H.aF(H.cy({
toString:function(){return"$receiver$"}}))},"fg","$get$fg",function(){return H.aF(H.cy({$method$:null,
toString:function(){return"$receiver$"}}))},"fh","$get$fh",function(){return H.aF(H.cy(null))},"fi","$get$fi",function(){return H.aF(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"fm","$get$fm",function(){return H.aF(H.cy(void 0))},"fn","$get$fn",function(){return H.aF(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"fk","$get$fk",function(){return H.aF(H.fl(null))},"fj","$get$fj",function(){return H.aF(function(){try{null.$method$}catch(z){return z.message}}())},"fp","$get$fp",function(){return H.aF(H.fl(void 0))},"fo","$get$fo",function(){return H.aF(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dB","$get$dB",function(){return P.l3()},"bO","$get$bO",function(){return[]},"fv","$get$fv",function(){return P.kM()},"fI","$get$fI",function(){return H.jc(H.bg(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))},"h0","$get$h0",function(){return P.jI("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"h8","$get$h8",function(){return P.mn()},"ee","$get$ee",function(){return{}},"fM","$get$fM",function(){return P.ez(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)},"dC","$get$dC",function(){return P.ey(P.h,P.bU)},"fE","$get$fE",function(){return Z.ap(0)},"fC","$get$fC",function(){return Z.ap(511)},"aQ","$get$aQ",function(){return Z.ap(1)},"aP","$get$aP",function(){return Z.ap(2)},"aO","$get$aO",function(){return Z.ap(4)},"aR","$get$aR",function(){return Z.ap(8)},"aS","$get$aS",function(){return Z.ap(16)},"bF","$get$bF",function(){return Z.ap(32)},"bG","$get$bG",function(){return Z.ap(64)},"fD","$get$fD",function(){return Z.ap(96)},"be","$get$be",function(){return Z.ap(128)},"aN","$get$aN",function(){return Z.ap(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.E},{func:1,ret:-1,opt:[D.y]},{func:1,ret:-1,args:[D.y]},{func:1,ret:-1},{func:1,ret:-1,args:[W.av]},{func:1,ret:P.E,args:[F.a8]},{func:1,ret:P.E,args:[,,]},{func:1,ret:P.E,args:[F.ag,P.q,P.q]},{func:1,ret:P.E,args:[D.y]},{func:1,ret:-1,args:[P.m,[P.p,E.at]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bc]},{func:1,ret:-1,args:[W.ac]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:-1,args:[P.m,[P.p,V.ah]]},{func:1,ret:-1,args:[P.m,[P.p,U.aa]]},{func:1,ret:P.q},{func:1,ret:-1,args:[P.m,[P.p,D.a4]]},{func:1,args:[,]},{func:1,ret:P.E,args:[W.ac]},{func:1,ret:P.N,args:[W.Q,P.h,P.h,W.c6]},{func:1,ret:V.a0,args:[P.q]},{func:1,ret:P.E,args:[{func:1,ret:-1,args:[D.y]}]},{func:1,ret:P.N,args:[W.B]},{func:1,ret:P.q,args:[P.q,P.q]},{func:1,ret:P.N,args:[W.aE]},{func:1,ret:P.N,args:[P.h]},{func:1,ret:-1,args:[W.by]},{func:1,ret:P.h,args:[P.m]},{func:1,ret:P.E,args:[,]},{func:1,ret:P.q,args:[P.q]},{func:1,args:[W.ac]},{func:1,ret:P.E,args:[P.ak]},{func:1,ret:P.O,args:[,,]},{func:1,ret:P.O,args:[P.m]},{func:1,ret:P.E,args:[P.h,,]},{func:1,ret:P.N,args:[P.q,P.q]},{func:1,ret:-1,args:[W.bH]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:P.N,args:[[P.p,D.a4]]},{func:1,ret:P.E,args:[P.h]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:-1,args:[P.h,P.m]},{func:1,ret:[P.H,P.h,P.h],args:[[P.H,P.h,P.h],P.h]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:-1,args:[W.B,W.B]},{func:1,ret:P.m,args:[[P.b,P.m],P.m]},{func:1,ret:[P.aT,,],args:[,]},{func:1,ret:P.E,args:[,],opt:[,]},{func:1,ret:P.E,args:[P.ba]},{func:1,ret:P.E,args:[{func:1,ret:-1}]},{func:1,ret:P.N,args:[V.aU]},{func:1,args:[P.h]},{func:1,args:[,P.h]},{func:1,ret:W.Q,args:[W.B]}]
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
if(x==y)H.nl(d||a)
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
Isolate.a6=a.a6
Isolate.dO=a.dO
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
if(typeof dartMainRunner==="function")dartMainRunner(U.hn,[])
else U.hn([])})})()
//# sourceMappingURL=test.dart.js.map
