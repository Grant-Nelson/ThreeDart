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
if(a1==="t"){processStatics(init.statics[b2]=b3.t,b4)
delete b3.t}else if(a2===43){w[g]=a1.substring(1)
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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.dc"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dc"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.dc(this,d,e,f,true,false,a1).prototype
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
var dart=[["","",,H,{"^":"",nB:{"^":"a;a"}}],["","",,J,{"^":"",
di:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cl:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dh==null){H.md()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.d(P.c8("Return interceptor for "+H.j(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cD()]
if(v!=null)return v
v=H.mk(a)
if(v!=null)return v
if(typeof a=="function")return C.R
y=Object.getPrototypeOf(a)
if(y==null)return C.A
if(y===Object.prototype)return C.A
if(typeof w=="function"){Object.defineProperty(w,$.$get$cD(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
M:{"^":"a;",
A:function(a,b){return a===b},
gW:function(a){return H.bn(a)},
i:["dZ",function(a){return"Instance of '"+H.aX(a)+"'"}],
"%":"CanvasRenderingContext2D|DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo|WebGLRenderbuffer|WebGLTexture"},
ib:{"^":"M;",
i:function(a){return String(a)},
gW:function(a){return a?519018:218159},
$isE:1},
dU:{"^":"M;",
A:function(a,b){return null==b},
i:function(a){return"null"},
gW:function(a){return 0},
$isy:1},
cE:{"^":"M;",
gW:function(a){return 0},
i:["e_",function(a){return String(a)}]},
iM:{"^":"cE;"},
bM:{"^":"cE;"},
bH:{"^":"cE;",
i:function(a){var z=a[$.$get$dD()]
if(z==null)return this.e_(a)
return"JavaScript function for "+H.j(J.ab(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iscB:1},
aV:{"^":"M;$ti",
h:function(a,b){H.t(b,H.q(a,0))
if(!!a.fixed$length)H.F(P.X("add"))
a.push(b)},
hV:function(a,b){var z
if(!!a.fixed$length)H.F(P.X("removeAt"))
z=a.length
if(b>=z)throw H.d(P.bK(b,null,null))
return a.splice(b,1)[0]},
H:function(a,b){var z
if(!!a.fixed$length)H.F(P.X("remove"))
for(z=0;z<a.length;++z)if(J.B(a[z],b)){a.splice(z,1)
return!0}return!1},
B:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.q(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.d(P.aT(a))}},
E:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.u(z,y,H.j(a[y]))
return z.join(b)},
hC:function(a){return this.E(a,"")},
hv:function(a,b,c,d){var z,y,x
H.t(b,d)
H.f(c,{func:1,ret:d,args:[d,H.q(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.d(P.aT(a))}return y},
a8:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
dY:function(a,b,c){if(b<0||b>a.length)throw H.d(P.Z(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.Z(c,b,a.length,"end",null))
if(b===c)return H.h([],[H.q(a,0)])
return H.h(a.slice(b,c),[H.q(a,0)])},
ght:function(a){if(a.length>0)return a[0]
throw H.d(H.dR())},
gaq:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.d(H.dR())},
hb:function(a,b){var z
for(z=0;z<a.length;++z)if(J.B(a[z],b))return!0
return!1},
i:function(a){return P.cC(a,"[","]")},
gY:function(a){return new J.aA(a,a.length,0,[H.q(a,0)])},
gW:function(a){return H.bn(a)},
gq:function(a){return a.length},
sq:function(a,b){if(!!a.fixed$length)H.F(P.X("set length"))
if(b<0)throw H.d(P.Z(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.aR(a,b))
if(b>=a.length||b<0)throw H.d(H.aR(a,b))
return a[b]},
u:function(a,b,c){H.t(c,H.q(a,0))
if(!!a.immutable$list)H.F(P.X("indexed set"))
if(b>=a.length||b<0)throw H.d(H.aR(a,b))
a[b]=c},
$isr:1,
$isc:1,
t:{
ia:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.ct(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.Z(a,0,4294967295,"length",null))
return J.dS(new Array(a),b)},
dS:function(a,b){return J.bZ(H.h(a,[b]))},
bZ:function(a){H.bS(a)
a.fixed$length=Array
return a}}},
nA:{"^":"aV;$ti"},
aA:{"^":"a;a,b,c,0d,$ti",
scF:function(a){this.d=H.t(a,H.q(this,0))},
gL:function(){return this.d},
G:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.d(H.D(z))
x=this.c
if(x>=y){this.scF(null)
return!1}this.scF(z[x]);++this.c
return!0},
$isaM:1},
bF:{"^":"M;",
bf:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.d(P.X(""+a+".floor()"))},
af:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.X(""+a+".round()"))},
dG:function(a,b){var z,y
if(b>20)throw H.d(P.Z(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
b_:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.d(P.Z(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.a_(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.F(P.X("Unexpected toString result: "+z))
x=y.length
if(1>=x)return H.i(y,1)
z=y[1]
if(3>=x)return H.i(y,3)
w=+y[3]
x=y[2]
if(x!=null){z+=x
w-=x.length}return z+C.b.p("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gW:function(a){return a&0x1FFFFFFF},
p:function(a,b){if(typeof b!=="number")throw H.d(H.ac(b))
return a*b},
b4:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
e1:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cW(a,b)},
aA:function(a,b){return(a|0)===a?a/b|0:this.cW(a,b)},
cW:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.d(P.X("Result of truncating division is "+H.j(z)+": "+H.j(a)+" ~/ "+b))},
az:function(a,b){var z
if(a>0)z=this.cU(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fF:function(a,b){if(b<0)throw H.d(H.ac(b))
return this.cU(a,b)},
cU:function(a,b){return b>31?0:a>>>b},
N:function(a,b){if(typeof b!=="number")throw H.d(H.ac(b))
return a<b},
$iso:1,
$isae:1},
dT:{"^":"bF;",$isk:1},
ic:{"^":"bF;"},
bG:{"^":"M;",
a_:function(a,b){if(b<0)throw H.d(H.aR(a,b))
if(b>=a.length)H.F(H.aR(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(b>=a.length)throw H.d(H.aR(a,b))
return a.charCodeAt(b)},
n:function(a,b){H.H(b)
if(typeof b!=="string")throw H.d(P.ct(b,null,null))
return a+b},
aJ:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.F(H.ac(b))
c=P.aN(b,c,a.length,null,null,null)
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
a6:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.F(H.ac(c))
if(typeof c!=="number")return c.N()
if(c<0||c>a.length)throw H.d(P.Z(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
a5:function(a,b){return this.a6(a,b,0)},
w:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.F(H.ac(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.N()
if(b<0)throw H.d(P.bK(b,null,null))
if(b>c)throw H.d(P.bK(b,null,null))
if(c>a.length)throw H.d(P.bK(c,null,null))
return a.substring(b,c)},
ar:function(a,b){return this.w(a,b,null)},
p:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.G)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hM:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.p(c,z)+a},
aa:function(a,b){return this.hM(a,b," ")},
hN:function(a,b,c){var z=b-a.length
if(z<=0)return a
return a+this.p(c,z)},
dm:function(a,b,c){var z
if(c<0||c>a.length)throw H.d(P.Z(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
dl:function(a,b){return this.dm(a,b,0)},
hc:function(a,b,c){if(c>a.length)throw H.d(P.Z(c,0,a.length,null,null))
return H.fM(a,b,c)},
i:function(a){return a},
gW:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gq:function(a){return a.length},
$ise6:1,
$isl:1}}],["","",,H,{"^":"",
cm:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
dR:function(){return new P.jp("No element")},
a1:{"^":"jX;a",
gq:function(a){return this.a.length},
j:function(a,b){return C.b.a_(this.a,b)},
$ascX:function(){return[P.k]},
$asW:function(){return[P.k]},
$asr:function(){return[P.k]},
$asc:function(){return[P.k]}},
ho:{"^":"r;"},
dZ:{"^":"a;a,b,c,0d,$ti",
saN:function(a){this.d=H.t(a,H.q(this,0))},
gL:function(){return this.d},
G:function(){var z,y,x,w
z=this.a
y=J.b8(z)
x=y.gq(z)
if(this.b!==x)throw H.d(P.aT(z))
w=this.c
if(w>=x){this.saN(null)
return!1}this.saN(y.a8(z,w));++this.c
return!0},
$isaM:1},
iB:{"^":"r;a,b,$ti",
gY:function(a){return new H.iC(J.bz(this.a),this.b,this.$ti)},
gq:function(a){return J.az(this.a)},
a8:function(a,b){return this.b.$1(J.cs(this.a,b))},
$asr:function(a,b){return[b]}},
iC:{"^":"aM;0a,b,c,$ti",
saN:function(a){this.a=H.t(a,H.q(this,1))},
G:function(){var z=this.b
if(z.G()){this.saN(this.c.$1(z.gL()))
return!0}this.saN(null)
return!1},
gL:function(){return this.a},
$asaM:function(a,b){return[b]}},
kt:{"^":"r;a,b,$ti",
gY:function(a){return new H.ku(J.bz(this.a),this.b,this.$ti)}},
ku:{"^":"aM;a,b,$ti",
G:function(){var z,y
for(z=this.a,y=this.b;z.G();)if(y.$1(z.gL()))return!0
return!1},
gL:function(){return this.a.gL()}},
bY:{"^":"a;$ti"},
cX:{"^":"a;$ti",
u:function(a,b,c){H.t(c,H.al(this,"cX",0))
throw H.d(P.X("Cannot modify an unmodifiable list"))}},
jX:{"^":"c_+cX;"}}],["","",,H,{"^":"",
hd:function(){throw H.d(P.X("Cannot modify unmodifiable Map"))},
bb:function(a){var z,y
z=H.H(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
m6:function(a){return init.types[H.a5(a)]},
mg:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.Q(a).$isaB},
j:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.ab(a)
if(typeof z!=="string")throw H.d(H.ac(a))
return z},
bn:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iW:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.i(z,3)
y=H.H(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.Z(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.I(w,u)|32)>x)return}return parseInt(a,b)},
aX:function(a){return H.iN(a)+H.da(H.aS(a),0,null)},
iN:function(a){var z,y,x,w,v,u,t,s,r
z=J.Q(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.J||!!z.$isbM){u=C.w(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.bb(w.length>1&&C.b.I(w,0)===36?C.b.ar(w,1):w)},
iO:function(){if(!!self.location)return self.location.href
return},
ed:function(a){var z,y,x,w,v
H.bS(a)
z=J.az(a)
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iX:function(a){var z,y,x,w
z=H.h([],[P.k])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.D)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.d(H.ac(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.d.az(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.d(H.ac(w))}return H.ed(z)},
ee:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.d(H.ac(x))
if(x<0)throw H.d(H.ac(x))
if(x>65535)return H.iX(a)}return H.ed(a)},
iY:function(a,b,c){var z,y,x,w
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
w=x<c?x:c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
bJ:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.d.az(z,10))>>>0,56320|z&1023)}}throw H.d(P.Z(a,0,1114111,null,null))},
aW:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iV:function(a){var z=H.aW(a).getFullYear()+0
return z},
iT:function(a){var z=H.aW(a).getMonth()+1
return z},
iP:function(a){var z=H.aW(a).getDate()+0
return z},
iQ:function(a){var z=H.aW(a).getHours()+0
return z},
iS:function(a){var z=H.aW(a).getMinutes()+0
return z},
iU:function(a){var z=H.aW(a).getSeconds()+0
return z},
iR:function(a){var z=H.aW(a).getMilliseconds()+0
return z},
p:function(a){throw H.d(H.ac(a))},
i:function(a,b){if(a==null)J.az(a)
throw H.d(H.aR(a,b))},
aR:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aK(!0,b,"index",null)
z=H.a5(J.az(a))
if(!(b<0)){if(typeof z!=="number")return H.p(z)
y=b>=z}else y=!0
if(y)return P.bg(b,a,"index",null,z)
return P.bK(b,"index",null)},
m_:function(a,b,c){if(a>c)return new P.c2(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c2(a,c,!0,b,"end","Invalid value")
return new P.aK(!0,b,"end",null)},
ac:function(a){return new P.aK(!0,a,null,null)},
d:function(a){var z
if(a==null)a=new P.e5()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fO})
z.name=""}else z.toString=H.fO
return z},
fO:function(){return J.ab(this.dartException)},
F:function(a){throw H.d(a)},
D:function(a){throw H.d(P.aT(a))},
am:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.np(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.az(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cF(H.j(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.e4(H.j(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$ev()
u=$.$get$ew()
t=$.$get$ex()
s=$.$get$ey()
r=$.$get$eC()
q=$.$get$eD()
p=$.$get$eA()
$.$get$ez()
o=$.$get$eF()
n=$.$get$eE()
m=v.a9(y)
if(m!=null)return z.$1(H.cF(H.H(y),m))
else{m=u.a9(y)
if(m!=null){m.method="call"
return z.$1(H.cF(H.H(y),m))}else{m=t.a9(y)
if(m==null){m=s.a9(y)
if(m==null){m=r.a9(y)
if(m==null){m=q.a9(y)
if(m==null){m=p.a9(y)
if(m==null){m=s.a9(y)
if(m==null){m=o.a9(y)
if(m==null){m=n.a9(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.e4(H.H(y),m))}}return z.$1(new H.jW(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.em()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aK(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.em()
return a},
b9:function(a){var z
if(a==null)return new H.fa(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fa(a)},
m3:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.u(0,a[y],a[x])}return b},
mf:function(a,b,c,d,e,f){H.e(a,"$iscB")
switch(H.a5(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.K("Unsupported number of arguments for wrapped closure"))},
b7:function(a,b){var z
H.a5(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mf)
a.$identity=z
return z},
h9:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.Q(d).$isc){z.$reflectionInfo=d
x=H.j3(z).r}else x=d
w=e?Object.create(new H.jq().constructor.prototype):Object.create(new H.cu(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.aq
if(typeof u!=="number")return u.n()
$.aq=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.dy(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.m6,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.ds:H.cv
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.d("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.dy(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w["call*"]=q
w.$R=z.$R
w.$D=z.$D
return v},
h6:function(a,b,c,d){var z=H.cv
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dy:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.h8(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.h6(y,!w,z,b)
if(y===0){w=$.aq
if(typeof w!=="number")return w.n()
$.aq=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bc
if(v==null){v=H.bW("self")
$.bc=v}return new Function(w+H.j(v)+";return "+u+"."+H.j(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.aq
if(typeof w!=="number")return w.n()
$.aq=w+1
t+=w
w="return function("+t+"){return this."
v=$.bc
if(v==null){v=H.bW("self")
$.bc=v}return new Function(w+H.j(v)+"."+H.j(z)+"("+t+");}")()},
h7:function(a,b,c,d){var z,y
z=H.cv
y=H.ds
switch(b?-1:a){case 0:throw H.d(H.jc("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
h8:function(a,b){var z,y,x,w,v,u,t,s
z=$.bc
if(z==null){z=H.bW("self")
$.bc=z}y=$.dr
if(y==null){y=H.bW("receiver")
$.dr=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.h7(w,!u,x,b)
if(w===1){z="return function(){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+");"
y=$.aq
if(typeof y!=="number")return y.n()
$.aq=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.j(z)+"."+H.j(x)+"(this."+H.j(y)+", "+s+");"
y=$.aq
if(typeof y!=="number")return y.n()
$.aq=y+1
return new Function(z+y+"}")()},
dc:function(a,b,c,d,e,f,g){return H.h9(a,b,H.a5(c),d,!!e,!!f,g)},
H:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.ap(a,"String"))},
m1:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.ap(a,"double"))},
ne:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.ap(a,"num"))},
fw:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.ap(a,"bool"))},
a5:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.ap(a,"int"))},
fK:function(a,b){throw H.d(H.ap(a,H.bb(H.H(b).substring(3))))},
ng:function(a,b){throw H.d(H.h3(a,H.bb(H.H(b).substring(3))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.Q(a)[b])return a
H.fK(a,b)},
a9:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.Q(a)[b]
else z=!0
if(z)return a
H.ng(a,b)},
bS:function(a){if(a==null)return a
if(!!J.Q(a).$isc)return a
throw H.d(H.ap(a,"List<dynamic>"))},
fH:function(a,b){var z
if(a==null)return a
z=J.Q(a)
if(!!z.$isc)return a
if(z[b])return a
H.fK(a,b)},
fz:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.a5(z)]
else return a.$S()}return},
bP:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fz(J.Q(a))
if(z==null)return!1
return H.fl(z,null,b,null)},
f:function(a,b){var z,y
if(a==null)return a
if($.d7)return a
$.d7=!0
try{if(H.bP(a,b))return a
z=H.cp(b)
y=H.ap(a,z)
throw H.d(y)}finally{$.d7=!1}},
df:function(a,b){if(a!=null&&!H.db(a,b))H.F(H.ap(a,H.cp(b)))
return a},
fr:function(a){var z,y
z=J.Q(a)
if(!!z.$isb){y=H.fz(z)
if(y!=null)return H.cp(y)
return"Closure"}return H.aX(a)},
nm:function(a){throw H.d(new P.hg(H.H(a)))},
fB:function(a){return init.getIsolateTag(a)},
h:function(a,b){a.$ti=b
return a},
aS:function(a){if(a==null)return
return a.$ti},
nU:function(a,b,c){return H.ba(a["$as"+H.j(c)],H.aS(b))},
bQ:function(a,b,c,d){var z
H.H(c)
H.a5(d)
z=H.ba(a["$as"+H.j(c)],H.aS(b))
return z==null?null:z[d]},
al:function(a,b,c){var z
H.H(b)
H.a5(c)
z=H.ba(a["$as"+H.j(b)],H.aS(a))
return z==null?null:z[c]},
q:function(a,b){var z
H.a5(b)
z=H.aS(a)
return z==null?null:z[b]},
cp:function(a){return H.aQ(a,null)},
aQ:function(a,b){var z,y
H.m(b,"$isc",[P.l],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bb(a[0].builtin$cls)+H.da(a,1,b)
if(typeof a=="function")return H.bb(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a5(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.j(b[y])}if('func' in a)return H.lJ(a,b)
if('futureOr' in a)return"FutureOr<"+H.aQ("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lJ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.l]
H.m(b,"$isc",z,"$asc")
if("bounds" in a){y=a.bounds
if(b==null){b=H.h([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.h(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.i(b,r)
t=C.b.n(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aQ(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aQ(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aQ(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aQ(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.m2(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.H(z[l])
n=n+m+H.aQ(i[h],b)+(" "+H.j(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
da:function(a,b,c){var z,y,x,w,v,u
H.m(c,"$isc",[P.l],"$asc")
if(a==null)return""
z=new P.aw("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aQ(u,c)}return"<"+z.i(0)+">"},
ba:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bx:function(a,b,c,d){var z,y
H.H(b)
H.bS(c)
H.H(d)
if(a==null)return!1
z=H.aS(a)
y=J.Q(a)
if(y[b]==null)return!1
return H.fu(H.ba(y[d],z),null,c,null)},
m:function(a,b,c,d){H.H(b)
H.bS(c)
H.H(d)
if(a==null)return a
if(H.bx(a,b,c,d))return a
throw H.d(H.ap(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bb(b.substring(3))+H.da(c,0,null),init.mangledGlobalNames)))},
fu:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ak(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ak(a[y],b,c[y],d))return!1
return!0},
nS:function(a,b,c){return a.apply(b,H.ba(J.Q(b)["$as"+H.j(c)],H.aS(b)))},
fE:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="y"||a===-1||a===-2||H.fE(z)}return!1},
db:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="a"||b.builtin$cls==="y"||b===-1||b===-2||H.fE(b)
if(b==null||b===-1||b.builtin$cls==="a"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.db(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bP(a,b)}z=J.Q(a).constructor
y=H.aS(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.ak(z,null,b,null)},
t:function(a,b){if(a!=null&&!H.db(a,b))throw H.d(H.ap(a,H.cp(b)))
return a},
ak:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ak(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="y")return!0
if('func' in c)return H.fl(a,b,c,d)
if('func' in a)return c.builtin$cls==="cB"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ak("type" in a?a.type:null,b,x,d)
else if(H.ak(a,b,x,d))return!0
else{if(!('$is'+"bf" in y.prototype))return!1
w=y.prototype["$as"+"bf"]
v=H.ba(w,z?a.slice(1):null)
return H.ak(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fu(H.ba(r,z),b,u,d)},
fl:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ak(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ak(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ak(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ak(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.nd(m,b,l,d)},
nd:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ak(c[w],d,a[w],b))return!1}return!0},
nT:function(a,b,c){Object.defineProperty(a,H.H(b),{value:c,enumerable:false,writable:true,configurable:true})},
mk:function(a){var z,y,x,w,v,u
z=H.H($.fC.$1(a))
y=$.cj[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cn[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.H($.ft.$2(a,z))
if(z!=null){y=$.cj[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cn[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.co(x)
$.cj[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cn[z]=x
return x}if(v==="-"){u=H.co(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fJ(a,x)
if(v==="*")throw H.d(P.c8(z))
if(init.leafTags[z]===true){u=H.co(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fJ(a,x)},
fJ:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.di(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
co:function(a){return J.di(a,!1,null,!!a.$isaB)},
nc:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.co(z)
else return J.di(z,c,null,null)},
md:function(){if(!0===$.dh)return
$.dh=!0
H.me()},
me:function(){var z,y,x,w,v,u,t,s
$.cj=Object.create(null)
$.cn=Object.create(null)
H.m9()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fL.$1(v)
if(u!=null){t=H.nc(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
m9:function(){var z,y,x,w,v,u,t
z=C.O()
z=H.b6(C.L,H.b6(C.Q,H.b6(C.v,H.b6(C.v,H.b6(C.P,H.b6(C.M,H.b6(C.N(C.w),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fC=new H.ma(v)
$.ft=new H.mb(u)
$.fL=new H.mc(t)},
b6:function(a,b){return a(b)||b},
fM:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fN:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hc:{"^":"a;$ti",
i:function(a){return P.cG(this)},
u:function(a,b,c){H.t(b,H.q(this,0))
H.t(c,H.q(this,1))
return H.hd()},
$isG:1},
he:{"^":"hc;a,b,c,$ti",
gq:function(a){return this.a},
bd:function(a){if(typeof a!=="string")return!1
if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
j:function(a,b){if(!this.bd(b))return
return this.cG(b)},
cG:function(a){return this.b[H.H(a)]},
B:function(a,b){var z,y,x,w,v
z=H.q(this,1)
H.f(b,{func:1,ret:-1,args:[H.q(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.t(this.cG(v),z))}}},
j2:{"^":"a;a,b,c,d,e,f,r,0x",t:{
j3:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bZ(z)
y=z[0]
x=z[1]
return new H.j2(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jG:{"^":"a;a,b,c,d,e,f",
a9:function(a){var z,y,x
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
t:{
ax:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.h([],[P.l])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jG(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c6:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eB:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iJ:{"^":"a2;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
t:{
e4:function(a,b){return new H.iJ(a,b==null?null:b.method)}}},
ig:{"^":"a2;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.j(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.j(this.a)+")"},
t:{
cF:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.ig(a,y,z?null:b.receiver)}}},
jW:{"^":"a2;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
np:{"^":"b:20;a",
$1:function(a){if(!!J.Q(a).$isa2)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fa:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaF:1},
b:{"^":"a;",
i:function(a){return"Closure '"+H.aX(this).trim()+"'"},
gdM:function(){return this},
$iscB:1,
gdM:function(){return this}},
ep:{"^":"b;"},
jq:{"^":"ep;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.bb(z)+"'"}},
cu:{"^":"ep;a,b,c,d",
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cu))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gW:function(a){var z,y
z=this.c
if(z==null)y=H.bn(this.a)
else y=typeof z!=="object"?J.by(z):H.bn(z)
return(y^H.bn(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.aX(z)+"'")},
t:{
cv:function(a){return a.a},
ds:function(a){return a.c},
bW:function(a){var z,y,x,w,v
z=new H.cu("self","target","receiver","name")
y=J.bZ(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jH:{"^":"a2;a",
i:function(a){return this.a},
t:{
ap:function(a,b){return new H.jH("TypeError: "+H.j(P.bX(a))+": type '"+H.fr(a)+"' is not a subtype of type '"+b+"'")}}},
h2:{"^":"a2;a",
i:function(a){return this.a},
t:{
h3:function(a,b){return new H.h2("CastError: "+H.j(P.bX(a))+": type '"+H.fr(a)+"' is not a subtype of type '"+b+"'")}}},
jb:{"^":"a2;a",
i:function(a){return"RuntimeError: "+H.j(this.a)},
t:{
jc:function(a){return new H.jb(a)}}},
aC:{"^":"ix;a,0b,0c,0d,0e,0f,r,$ti",
gq:function(a){return this.a},
gc0:function(){return new H.il(this,[H.q(this,0)])},
bd:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.cC(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.cC(y,a)}else return this.hz(a)},
hz:function(a){var z=this.d
if(z==null)return!1
return this.c_(this.bu(z,this.bZ(a)),a)>=0},
j:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.b7(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.b7(w,b)
x=y==null?null:y.b
return x}else return this.hA(b)},
hA:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bu(z,this.bZ(a))
x=this.c_(y,a)
if(x<0)return
return y[x].b},
u:function(a,b,c){var z,y
H.t(b,H.q(this,0))
H.t(c,H.q(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bA()
this.b=z}this.cs(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bA()
this.c=y}this.cs(y,b,c)}else this.hB(b,c)},
hB:function(a,b){var z,y,x,w
H.t(a,H.q(this,0))
H.t(b,H.q(this,1))
z=this.d
if(z==null){z=this.bA()
this.d=z}y=this.bZ(a)
x=this.bu(z,y)
if(x==null)this.bI(z,y,[this.bB(a,b)])
else{w=this.c_(x,a)
if(w>=0)x[w].b=b
else x.push(this.bB(a,b))}},
B:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.d(P.aT(this))
z=z.c}},
cs:function(a,b,c){var z
H.t(b,H.q(this,0))
H.t(c,H.q(this,1))
z=this.b7(a,b)
if(z==null)this.bI(a,b,this.bB(b,c))
else z.b=c},
bB:function(a,b){var z,y
z=new H.ik(H.t(a,H.q(this,0)),H.t(b,H.q(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.r=this.r+1&67108863
return z},
bZ:function(a){return J.by(a)&0x3ffffff},
c_:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.B(a[y].a,b))return y
return-1},
i:function(a){return P.cG(this)},
b7:function(a,b){return a[b]},
bu:function(a,b){return a[b]},
bI:function(a,b,c){a[b]=c},
ew:function(a,b){delete a[b]},
cC:function(a,b){return this.b7(a,b)!=null},
bA:function(){var z=Object.create(null)
this.bI(z,"<non-identifier-key>",z)
this.ew(z,"<non-identifier-key>")
return z},
$isdX:1},
ik:{"^":"a;a,b,0c,0d"},
il:{"^":"ho;a,$ti",
gq:function(a){return this.a.a},
gY:function(a){var z,y
z=this.a
y=new H.im(z,z.r,this.$ti)
y.c=z.e
return y}},
im:{"^":"a;a,b,0c,0d,$ti",
scq:function(a){this.d=H.t(a,H.q(this,0))},
gL:function(){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aT(z))
else{z=this.c
if(z==null){this.scq(null)
return!1}else{this.scq(z.a)
this.c=this.c.c
return!0}}},
$isaM:1},
ma:{"^":"b:20;a",
$1:function(a){return this.a(a)}},
mb:{"^":"b:38;a",
$2:function(a,b){return this.a(a,b)}},
mc:{"^":"b:53;a",
$1:function(a){return this.a(H.H(a))}},
id:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$ise6:1,
$isj4:1,
t:{
ie:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.d(P.V("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
m2:function(a){return J.dS(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
nf:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
ce:function(a){return a},
iF:function(a){return new Int8Array(a)},
aP:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.aR(b,a))},
lD:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.d(H.m_(a,b,c))
return b},
cK:{"^":"M;",$iscK:1,"%":";ArrayBufferView;cJ|f6|f7|iG|f8|f9|bl"},
cJ:{"^":"cK;",
gq:function(a){return a.length},
$isaB:1,
$asaB:I.de},
iG:{"^":"f7;",
j:function(a,b){H.aP(b,a,a.length)
return a[b]},
u:function(a,b,c){H.m1(c)
H.aP(b,a,a.length)
a[b]=c},
$asbY:function(){return[P.o]},
$asW:function(){return[P.o]},
$isr:1,
$asr:function(){return[P.o]},
$isc:1,
$asc:function(){return[P.o]},
"%":"Float32Array"},
bl:{"^":"f9;",
u:function(a,b,c){H.a5(c)
H.aP(b,a,a.length)
a[b]=c},
$asbY:function(){return[P.k]},
$asW:function(){return[P.k]},
$isr:1,
$asr:function(){return[P.k]},
$isc:1,
$asc:function(){return[P.k]}},
nC:{"^":"bl;",
j:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"Int16Array"},
nD:{"^":"bl;",
j:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"Int32Array"},
nE:{"^":"bl;",
j:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"Int8Array"},
nF:{"^":"bl;",
j:function(a,b){H.aP(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
e3:{"^":"bl;",
gq:function(a){return a.length},
j:function(a,b){H.aP(b,a,a.length)
return a[b]},
$ise3:1,
$isJ:1,
"%":";Uint8Array"},
f6:{"^":"cJ+W;"},
f7:{"^":"f6+bY;"},
f8:{"^":"cJ+W;"},
f9:{"^":"f8+bY;"}}],["","",,P,{"^":"",
kw:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.lQ()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b7(new P.ky(z),1)).observe(y,{childList:true})
return new P.kx(z,y,x)}else if(self.setImmediate!=null)return P.lR()
return P.lS()},
nM:[function(a){self.scheduleImmediate(H.b7(new P.kz(H.f(a,{func:1,ret:-1})),0))},"$1","lQ",4,0,18],
nN:[function(a){self.setImmediate(H.b7(new P.kA(H.f(a,{func:1,ret:-1})),0))},"$1","lR",4,0,18],
nO:[function(a){P.cR(C.p,H.f(a,{func:1,ret:-1}))},"$1","lS",4,0,18],
cR:function(a,b){var z
H.f(b,{func:1,ret:-1})
z=C.d.aA(a.a,1000)
return P.l8(z<0?0:z,b)},
es:function(a,b){var z
H.f(b,{func:1,ret:-1,args:[P.aY]})
z=C.d.aA(a.a,1000)
return P.l9(z<0?0:z,b)},
lM:function(a,b){if(H.bP(a,{func:1,args:[P.a,P.aF]}))return H.f(a,{func:1,ret:null,args:[P.a,P.aF]})
if(H.bP(a,{func:1,args:[P.a]}))return H.f(a,{func:1,ret:null,args:[P.a]})
throw H.d(P.ct(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lL:function(){var z,y
for(;z=$.b5,z!=null;){$.bv=null
y=z.b
$.b5=y
if(y==null)$.bu=null
z.a.$0()}},
nR:[function(){$.d8=!0
try{P.lL()}finally{$.bv=null
$.d8=!1
if($.b5!=null)$.$get$d3().$1(P.fv())}},"$0","fv",0,0,7],
fq:function(a){var z=new P.f_(H.f(a,{func:1,ret:-1}))
if($.b5==null){$.bu=z
$.b5=z
if(!$.d8)$.$get$d3().$1(P.fv())}else{$.bu.b=z
$.bu=z}},
lP:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
z=$.b5
if(z==null){P.fq(a)
$.bv=$.bu
return}y=new P.f_(a)
x=$.bv
if(x==null){y.b=z
$.bv=y
$.b5=y}else{y.b=x.b
x.b=y
$.bv=y
if(y.b==null)$.bu=y}},
nh:function(a){var z,y
z={func:1,ret:-1}
H.f(a,z)
y=$.N
if(C.f===y){P.cg(null,null,C.f,a)
return}y.toString
P.cg(null,null,y,H.f(y.bP(a),z))},
er:function(a,b){var z,y
z={func:1,ret:-1}
H.f(b,z)
y=$.N
if(y===C.f){y.toString
return P.cR(a,b)}return P.cR(a,H.f(y.bP(b),z))},
jD:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aY]}
H.f(b,z)
y=$.N
if(y===C.f){y.toString
return P.es(a,b)}x=y.d4(b,P.aY)
$.N.toString
return P.es(a,H.f(x,z))},
cf:function(a,b,c,d,e){var z={}
z.a=d
P.lP(new P.lN(z,e))},
fm:function(a,b,c,d,e){var z,y
H.f(d,{func:1,ret:e})
y=$.N
if(y===c)return d.$0()
$.N=c
z=y
try{y=d.$0()
return y}finally{$.N=z}},
fn:function(a,b,c,d,e,f,g){var z,y
H.f(d,{func:1,ret:f,args:[g]})
H.t(e,g)
y=$.N
if(y===c)return d.$1(e)
$.N=c
z=y
try{y=d.$1(e)
return y}finally{$.N=z}},
lO:function(a,b,c,d,e,f,g,h,i){var z,y
H.f(d,{func:1,ret:g,args:[h,i]})
H.t(e,h)
H.t(f,i)
y=$.N
if(y===c)return d.$2(e,f)
$.N=c
z=y
try{y=d.$2(e,f)
return y}finally{$.N=z}},
cg:function(a,b,c,d){var z
H.f(d,{func:1,ret:-1})
z=C.f!==c
if(z)d=!(!z||!1)?c.bP(d):c.h0(d,-1)
P.fq(d)},
ky:{"^":"b:22;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kx:{"^":"b:32;a,b,c",
$1:function(a){var z,y
this.a.a=H.f(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kz:{"^":"b:0;a",
$0:function(){this.a.$0()}},
kA:{"^":"b:0;a",
$0:function(){this.a.$0()}},
fc:{"^":"a;a,0b,c",
ec:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b7(new P.lb(this,b),0),a)
else throw H.d(P.X("`setTimeout()` not found."))},
ed:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b7(new P.la(this,a,Date.now(),b),0),a)
else throw H.d(P.X("Periodic timer."))},
$isaY:1,
t:{
l8:function(a,b){var z=new P.fc(!0,0)
z.ec(a,b)
return z},
l9:function(a,b){var z=new P.fc(!1,0)
z.ed(a,b)
return z}}},
lb:{"^":"b:7;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
la:{"^":"b:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.d.e1(w,x)}z.c=y
this.d.$1(z)}},
b4:{"^":"a;0a,b,c,d,e,$ti",
hF:function(a){if(this.c!==6)return!0
return this.b.b.cc(H.f(this.d,{func:1,ret:P.E,args:[P.a]}),a.a,P.E,P.a)},
hy:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.q(this,1)}
w=this.b.b
if(H.bP(z,{func:1,args:[P.a,P.aF]}))return H.df(w.i1(z,a.a,a.b,null,y,P.aF),x)
else return H.df(w.cc(H.f(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aJ:{"^":"a;cV:a<,b,0fu:c<,$ti",
dF:function(a,b,c){var z,y,x,w
z=H.q(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.N
if(y!==C.f){y.toString
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.lM(b,y)}H.f(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aJ(0,$.N,[c])
w=b==null?1:3
this.ct(new P.b4(x,w,a,b,[z,c]))
return x},
i4:function(a,b){return this.dF(a,null,b)},
ct:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isb4")
this.c=a}else{if(z===2){y=H.e(this.c,"$isaJ")
z=y.a
if(z<4){y.ct(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.cg(null,null,z,H.f(new P.kI(this,a),{func:1,ret:-1}))}},
cQ:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isb4")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isaJ")
y=u.a
if(y<4){u.cQ(a)
return}this.a=y
this.c=u.c}z.a=this.b9(a)
y=this.b
y.toString
P.cg(null,null,y,H.f(new P.kN(z,this),{func:1,ret:-1}))}},
bF:function(){var z=H.e(this.c,"$isb4")
this.c=null
return this.b9(z)},
b9:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cz:function(a){var z,y,x
z=H.q(this,0)
H.df(a,{futureOr:1,type:z})
y=this.$ti
if(H.bx(a,"$isbf",y,"$asbf"))if(H.bx(a,"$isaJ",y,null))P.f2(a,this)
else P.kJ(a,this)
else{x=this.bF()
H.t(a,z)
this.a=4
this.c=a
P.bq(this,x)}},
cA:function(a,b){var z
H.e(b,"$isaF")
z=this.bF()
this.a=8
this.c=new P.af(a,b)
P.bq(this,z)},
$isbf:1,
t:{
kJ:function(a,b){var z,y,x
b.a=1
try{a.dF(new P.kK(b),new P.kL(b),null)}catch(x){z=H.am(x)
y=H.b9(x)
P.nh(new P.kM(b,z,y))}},
f2:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isaJ")
if(z>=4){y=b.bF()
b.a=a.a
b.c=a.c
P.bq(b,y)}else{y=H.e(b.c,"$isb4")
b.a=2
b.c=a
a.cQ(y)}},
bq:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isaf")
y=y.b
u=v.a
t=v.b
y.toString
P.cf(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bq(z.a,b)}y=z.a
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
if(p){H.e(r,"$isaf")
y=y.b
u=r.a
t=r.b
y.toString
P.cf(null,null,y,u,t)
return}o=$.N
if(o==null?q!=null:o!==q)$.N=q
else o=null
y=b.c
if(y===8)new P.kQ(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kP(x,b,r).$0()}else if((y&2)!==0)new P.kO(z,x,b).$0()
if(o!=null)$.N=o
y=x.b
if(!!J.Q(y).$isbf){if(y.a>=4){n=H.e(t.c,"$isb4")
t.c=null
b=t.b9(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.f2(y,t)
return}}m=b.b
n=H.e(m.c,"$isb4")
m.c=null
b=m.b9(n)
y=x.a
u=x.b
if(!y){H.t(u,H.q(m,0))
m.a=4
m.c=u}else{H.e(u,"$isaf")
m.a=8
m.c=u}z.a=m
y=m}}}},
kI:{"^":"b:0;a,b",
$0:function(){P.bq(this.a,this.b)}},
kN:{"^":"b:0;a,b",
$0:function(){P.bq(this.b,this.a.a)}},
kK:{"^":"b:22;a",
$1:function(a){var z=this.a
z.a=0
z.cz(a)}},
kL:{"^":"b:41;a",
$2:function(a,b){this.a.cA(a,H.e(b,"$isaF"))},
$1:function(a){return this.$2(a,null)}},
kM:{"^":"b:0;a,b,c",
$0:function(){this.a.cA(this.b,this.c)}},
kQ:{"^":"b:7;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.dD(H.f(w.d,{func:1}),null)}catch(v){y=H.am(v)
x=H.b9(v)
if(this.d){w=H.e(this.a.a.c,"$isaf").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isaf")
else u.b=new P.af(y,x)
u.a=!0
return}if(!!J.Q(z).$isbf){if(z instanceof P.aJ&&z.gcV()>=4){if(z.gcV()===8){w=this.b
w.b=H.e(z.gfu(),"$isaf")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.i4(new P.kR(t),null)
w.a=!1}}},
kR:{"^":"b:43;a",
$1:function(a){return this.a}},
kP:{"^":"b:7;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.q(x,0)
v=H.t(this.c,w)
u=H.q(x,1)
this.a.b=x.b.b.cc(H.f(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.am(t)
y=H.b9(t)
x=this.a
x.b=new P.af(z,y)
x.a=!0}}},
kO:{"^":"b:7;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isaf")
w=this.c
if(w.hF(z)&&w.e!=null){v=this.b
v.b=w.hy(z)
v.a=!1}}catch(u){y=H.am(u)
x=H.b9(u)
w=H.e(this.a.a.c,"$isaf")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.af(y,x)
s.a=!0}}},
f_:{"^":"a;a,0b"},
jr:{"^":"a;$ti",
gq:function(a){var z,y,x,w
z={}
y=new P.aJ(0,$.N,[P.k])
z.a=0
x=H.q(this,0)
w=H.f(new P.jt(z,this),{func:1,ret:-1,args:[x]})
H.f(new P.ju(z,y),{func:1,ret:-1})
W.a_(this.a,this.b,w,!1,x)
return y}},
jt:{"^":"b;a,b",
$1:function(a){H.t(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.y,args:[H.q(this.b,0)]}}},
ju:{"^":"b:0;a,b",
$0:function(){this.b.cz(this.a.a)}},
cQ:{"^":"a;$ti"},
js:{"^":"a;"},
aY:{"^":"a;"},
af:{"^":"a;a,b",
i:function(a){return H.j(this.a)},
$isa2:1},
lB:{"^":"a;",$isnL:1},
lN:{"^":"b:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.e5()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.d(z)
x=H.d(z)
x.stack=y.i(0)
throw x}},
l1:{"^":"lB;",
i2:function(a){var z,y,x
H.f(a,{func:1,ret:-1})
try{if(C.f===$.N){a.$0()
return}P.fm(null,null,this,a,-1)}catch(x){z=H.am(x)
y=H.b9(x)
P.cf(null,null,this,z,H.e(y,"$isaF"))}},
i3:function(a,b,c){var z,y,x
H.f(a,{func:1,ret:-1,args:[c]})
H.t(b,c)
try{if(C.f===$.N){a.$1(b)
return}P.fn(null,null,this,a,b,-1,c)}catch(x){z=H.am(x)
y=H.b9(x)
P.cf(null,null,this,z,H.e(y,"$isaF"))}},
h0:function(a,b){return new P.l3(this,H.f(a,{func:1,ret:b}),b)},
bP:function(a){return new P.l2(this,H.f(a,{func:1,ret:-1}))},
d4:function(a,b){return new P.l4(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
dD:function(a,b){H.f(a,{func:1,ret:b})
if($.N===C.f)return a.$0()
return P.fm(null,null,this,a,b)},
cc:function(a,b,c,d){H.f(a,{func:1,ret:c,args:[d]})
H.t(b,d)
if($.N===C.f)return a.$1(b)
return P.fn(null,null,this,a,b,c,d)},
i1:function(a,b,c,d,e,f){H.f(a,{func:1,ret:d,args:[e,f]})
H.t(b,e)
H.t(c,f)
if($.N===C.f)return a.$2(b,c)
return P.lO(null,null,this,a,b,c,d,e,f)}},
l3:{"^":"b;a,b,c",
$0:function(){return this.a.dD(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
l2:{"^":"b:7;a,b",
$0:function(){return this.a.i2(this.b)}},
l4:{"^":"b;a,b,c",
$1:function(a){var z=this.c
return this.a.i3(this.b,H.t(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
io:function(a,b,c,d,e){return new H.aC(0,0,[d,e])},
iq:function(a,b,c){H.bS(a)
return H.m(H.m3(a,new H.aC(0,0,[b,c])),"$isdX",[b,c],"$asdX")},
ip:function(a,b){return new H.aC(0,0,[a,b])},
is:function(a,b,c,d){return new P.kW(0,0,[d])},
i9:function(a,b,c){var z,y
if(P.d9(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bw()
C.a.h(y,a)
try{P.lK(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.en(b,H.fH(z,"$isr"),", ")+c
return y.charCodeAt(0)==0?y:y},
cC:function(a,b,c){var z,y,x
if(P.d9(a))return b+"..."+c
z=new P.aw(b)
y=$.$get$bw()
C.a.h(y,a)
try{x=z
x.a=P.en(x.gav(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gav()+c
y=z.gav()
return y.charCodeAt(0)==0?y:y},
d9:function(a){var z,y
for(z=0;y=$.$get$bw(),z<y.length;++z)if(a===y[z])return!0
return!1},
lK:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gY(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.G())return
w=H.j(z.gL())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.G()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gL();++x
if(!z.G()){if(x<=4){C.a.h(b,H.j(t))
return}v=H.j(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gL();++x
for(;z.G();t=s,s=r){r=z.gL();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.j(t)
v=H.j(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
dY:function(a,b,c){var z=P.io(null,null,null,b,c)
a.B(0,new P.ir(z,b,c))
return z},
cG:function(a){var z,y,x
z={}
if(P.d9(a))return"{...}"
y=new P.aw("")
try{C.a.h($.$get$bw(),a)
x=y
x.a=x.gav()+"{"
z.a=!0
a.B(0,new P.iy(z,y))
z=y
z.a=z.gav()+"}"}finally{z=$.$get$bw()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.gav()
return z.charCodeAt(0)==0?z:z},
kW:{"^":"kS;a,0b,0c,0d,0e,0f,r,$ti",
gY:function(a){return P.f4(this,this.r,H.q(this,0))},
gq:function(a){return this.a},
h:function(a,b){var z
H.t(b,H.q(this,0))
if(typeof b==="number"&&(b&0x3ffffff)===b){z=this.c
if(z==null){z=P.f5()
this.c=z}return this.er(z,b)}else return this.ef(b)},
ef:function(a){var z,y,x
H.t(a,H.q(this,0))
z=this.d
if(z==null){z=P.f5()
this.d=z}y=this.cB(a)
x=z[y]
if(x==null)z[y]=[this.bq(a)]
else{if(this.cH(x,a)>=0)return!1
x.push(this.bq(a))}return!0},
H:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.fn(this.c,b)
else return this.fm(b)},
fm:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.eI(z,a)
x=this.cH(y,a)
if(x<0)return!1
this.cX(y.splice(x,1)[0])
return!0},
er:function(a,b){H.t(b,H.q(this,0))
if(H.e(a[b],"$isd4")!=null)return!1
a[b]=this.bq(b)
return!0},
fn:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$isd4")
if(z==null)return!1
this.cX(z)
delete a[b]
return!0},
cM:function(){this.r=this.r+1&67108863},
bq:function(a){var z,y
z=new P.d4(H.t(a,H.q(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cM()
return z},
cX:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cM()},
cB:function(a){return J.by(a)&0x3ffffff},
eI:function(a,b){return a[this.cB(b)]},
cH:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(a[y].a==b)return y
return-1},
t:{
f5:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
d4:{"^":"a;a,0b,0c"},
kX:{"^":"a;a,b,0c,0d,$ti",
scw:function(a){this.d=H.t(a,H.q(this,0))},
gL:function(){return this.d},
G:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aT(z))
else{z=this.c
if(z==null){this.scw(null)
return!1}else{this.scw(H.t(z.a,H.q(this,0)))
this.c=this.c.b
return!0}}},
$isaM:1,
t:{
f4:function(a,b,c){var z=new P.kX(a,b,[c])
z.c=a.e
return z}}},
kS:{"^":"jd;"},
ir:{"^":"b:12;a,b,c",
$2:function(a,b){this.a.u(0,H.t(a,this.b),H.t(b,this.c))}},
c_:{"^":"kY;",$isr:1,$isc:1},
W:{"^":"a;$ti",
gY:function(a){return new H.dZ(a,this.gq(a),0,[H.bQ(this,a,"W",0)])},
a8:function(a,b){return this.j(a,b)},
i5:function(a,b){var z,y
z=H.h([],[H.bQ(this,a,"W",0)])
C.a.sq(z,this.gq(a))
for(y=0;y<this.gq(a);++y)C.a.u(z,y,this.j(a,y))
return z},
ce:function(a){return this.i5(a,!0)},
hp:function(a,b,c,d){var z
H.t(d,H.bQ(this,a,"W",0))
P.aN(b,c,this.gq(a),null,null,null)
for(z=b;z<c;++z)this.u(a,z,d)},
i:function(a){return P.cC(a,"[","]")}},
ix:{"^":"iz;"},
iy:{"^":"b:12;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.j(a)
z.a=y+": "
z.a+=H.j(b)}},
iz:{"^":"a;$ti",
B:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]})
for(z=this.gc0(),z=z.gY(z);z.G();){y=z.gL()
b.$2(y,this.j(0,y))}},
gq:function(a){var z=this.gc0()
return z.gq(z)},
i:function(a){return P.cG(this)},
$isG:1},
le:{"^":"a;$ti",
u:function(a,b,c){H.t(b,H.q(this,0))
H.t(c,H.q(this,1))
throw H.d(P.X("Cannot modify unmodifiable map"))}},
iA:{"^":"a;$ti",
j:function(a,b){return this.a.j(0,b)},
u:function(a,b,c){this.a.u(0,H.t(b,H.q(this,0)),H.t(c,H.q(this,1)))},
B:function(a,b){this.a.B(0,H.f(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]}))},
gq:function(a){var z=this.a
return z.gq(z)},
i:function(a){return J.ab(this.a)},
$isG:1},
eI:{"^":"lf;a,$ti"},
jf:{"^":"a;$ti",
i:function(a){return P.cC(this,"{","}")},
a8:function(a,b){var z,y,x
if(b<0)H.F(P.Z(b,0,null,"index",null))
for(z=P.f4(this,this.r,H.q(this,0)),y=0;z.G();){x=z.d
if(b===y)return x;++y}throw H.d(P.bg(b,this,"index",null,y))},
$isr:1,
$isel:1},
jd:{"^":"jf;"},
kY:{"^":"a+W;"},
lf:{"^":"iA+le;$ti"}}],["","",,P,{"^":"",fZ:{"^":"bA;a",
hG:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
c=P.aN(b,c,a.length,null,null,null)
z=$.$get$f0()
for(y=b,x=y,w=null,v=-1,u=-1,t=0;y<c;y=s){s=y+1
r=C.b.I(a,y)
if(r===37){q=s+2
if(q<=c){p=H.cm(C.b.I(a,s))
o=H.cm(C.b.I(a,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.i(z,n)
m=z[n]
if(m>=0){n=C.b.a_("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.aw("")
l=w.a+=C.b.w(a,x,y)
w.a=l+H.bJ(r)
x=s
continue}}throw H.d(P.V("Invalid base64 data",a,y))}if(w!=null){l=w.a+=C.b.w(a,x,c)
k=l.length
if(v>=0)P.dp(a,u,c,v,t,k)
else{j=C.d.b4(k-1,4)+1
if(j===1)throw H.d(P.V("Invalid base64 encoding length ",a,c))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aJ(a,b,c,l.charCodeAt(0)==0?l:l)}i=c-b
if(v>=0)P.dp(a,u,c,v,t,i)
else{j=C.d.b4(i,4)
if(j===1)throw H.d(P.V("Invalid base64 encoding length ",a,c))
if(j>1)a=C.b.aJ(a,c,c,j===2?"==":"=")}return a},
$asbA:function(){return[[P.c,P.k],P.l]},
t:{
dp:function(a,b,c,d,e,f){if(C.d.b4(f,4)!==0)throw H.d(P.V("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.V("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.V("Invalid base64 padding, more than two '=' characters",a,b))}}},h_:{"^":"bd;a",
$asbd:function(){return[[P.c,P.k],P.l]}},bA:{"^":"a;$ti"},bd:{"^":"js;$ti"},hq:{"^":"bA;",
$asbA:function(){return[P.l,[P.c,P.k]]}},k9:{"^":"hq;a",
gho:function(){return C.H}},kg:{"^":"bd;",
aR:function(a,b,c){var z,y,x,w
z=a.length
P.aN(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.lA(0,0,x)
if(w.eH(a,b,z)!==z)w.d_(J.fT(a,z-1),0)
return new Uint8Array(x.subarray(0,H.lD(0,w.b,x.length)))},
bV:function(a){return this.aR(a,0,null)},
$asbd:function(){return[P.l,[P.c,P.k]]}},lA:{"^":"a;a,b,c",
d_:function(a,b){var z,y,x,w,v
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
eH:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.a_(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.I(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.d_(w,C.b.I(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},ka:{"^":"bd;a",
aR:function(a,b,c){var z,y,x,w,v
H.m(a,"$isc",[P.k],"$asc")
z=P.kb(!1,a,b,c)
if(z!=null)return z
y=J.az(a)
P.aN(b,c,y,null,null,null)
x=new P.aw("")
w=new P.lx(!1,x,!0,0,0,0)
w.aR(a,b,y)
if(w.e>0){H.F(P.V("Unfinished UTF-8 octet sequence",a,y))
x.a+=H.bJ(65533)
w.d=0
w.e=0
w.f=0}v=x.a
return v.charCodeAt(0)==0?v:v},
bV:function(a){return this.aR(a,0,null)},
$asbd:function(){return[[P.c,P.k],P.l]},
t:{
kb:function(a,b,c,d){H.m(b,"$isc",[P.k],"$asc")
if(b instanceof Uint8Array)return P.kc(!1,b,c,d)
return},
kc:function(a,b,c,d){var z,y,x
z=$.$get$eM()
if(z==null)return
y=0===c
if(y&&!0)return P.cZ(z,b)
x=b.length
d=P.aN(c,d,x,null,null,null)
if(y&&d===x)return P.cZ(z,b)
return P.cZ(z,b.subarray(c,d))},
cZ:function(a,b){if(P.ke(b))return
return P.kf(a,b)},
kf:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.am(y)}return},
ke:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
kd:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.am(y)}return}}},lx:{"^":"a;a,b,c,d,e,f",
aR:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.m(a,"$isc",[P.k],"$asc")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.lz(c)
v=new P.ly(this,b,c,a)
$label0$0:for(u=J.b8(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.j(a,s)
if(typeof r!=="number")return r.bj()
if((r&192)!==128){q=P.V("Bad UTF-8 encoding 0x"+C.d.b_(r,16),a,s)
throw H.d(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.i(C.x,q)
if(z<=C.x[q]){q=P.V("Overlong encoding of 0x"+C.d.b_(z,16),a,s-x-1)
throw H.d(q)}if(z>1114111){q=P.V("Character outside valid Unicode range: 0x"+C.d.b_(z,16),a,s-x-1)
throw H.d(q)}if(!this.c||z!==65279)t.a+=H.bJ(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.b3()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.j(a,o)
if(typeof r!=="number")return r.N()
if(r<0){m=P.V("Negative UTF-8 code unit: -0x"+C.d.b_(-r,16),a,n-1)
throw H.d(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.V("Bad UTF-8 encoding 0x"+C.d.b_(r,16),a,n-1)
throw H.d(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},lz:{"^":"b:46;a",
$2:function(a,b){var z,y,x,w
H.m(a,"$isc",[P.k],"$asc")
z=this.a
for(y=J.b8(a),x=b;x<z;++x){w=y.j(a,x)
if(typeof w!=="number")return w.bj()
if((w&127)!==w)return x-b}return z-b}},ly:{"^":"b:51;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.bL(this.d,a,b)}}}],["","",,P,{"^":"",
bR:function(a,b,c){var z
H.f(b,{func:1,ret:P.k,args:[P.l]})
z=H.iW(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.d(P.V(a,null,null))},
hs:function(a){if(a instanceof H.b)return a.i(0)
return"Instance of '"+H.aX(a)+"'"},
it:function(a,b,c,d){var z,y
H.t(b,d)
z=J.ia(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.u(z,y,b)
return H.m(z,"$isc",[d],"$asc")},
iu:function(a,b,c){var z,y,x
z=[c]
y=H.h([],z)
for(x=a.gY(a);x.G();)C.a.h(y,H.t(x.gL(),c))
if(b)return y
return H.m(J.bZ(y),"$isc",z,"$asc")},
bL:function(a,b,c){var z,y
z=P.k
H.m(a,"$isr",[z],"$asr")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.m(a,"$isaV",[z],"$asaV")
y=a.length
c=P.aN(b,c,y,null,null,null)
return H.ee(b>0||c<y?C.a.dY(a,b,c):a)}if(!!J.Q(a).$ise3)return H.iY(a,b,P.aN(b,c,a.length,null,null,null))
return P.jv(a,b,c)},
jv:function(a,b,c){var z,y,x,w
H.m(a,"$isr",[P.k],"$asr")
if(b<0)throw H.d(P.Z(b,0,J.az(a),null,null))
z=c==null
if(!z&&c<b)throw H.d(P.Z(c,b,J.az(a),null,null))
y=J.bz(a)
for(x=0;x<b;++x)if(!y.G())throw H.d(P.Z(b,0,x,null,null))
w=[]
if(z)for(;y.G();)w.push(y.gL())
else for(x=b;x<c;++x){if(!y.G())throw H.d(P.Z(c,b,x,null,null))
w.push(y.gL())}return H.ee(w)},
j5:function(a,b,c){return new H.id(a,H.ie(a,!1,!0,!1))},
bN:function(){var z=H.iO()
if(z!=null)return P.k1(z,0,null)
throw H.d(P.X("'Uri.base' is not supported"))},
bX:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ab(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hs(a)},
K:function(a){return new P.f1(a)},
iv:function(a,b,c,d){var z,y
H.f(b,{func:1,ret:d,args:[P.k]})
z=H.h([],[d])
C.a.sq(z,a)
for(y=0;y<a;++y)C.a.u(z,y,b.$1(y))
return z},
dj:function(a){H.nf(a)},
k1:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.I(a,b+4)^58)*3|C.b.I(a,b)^100|C.b.I(a,b+1)^97|C.b.I(a,b+2)^116|C.b.I(a,b+3)^97)>>>0
if(y===0)return P.eJ(b>0||c<c?C.b.w(a,b,c):a,5,null).gdI()
else if(y===32)return P.eJ(C.b.w(a,z,c),0,null).gdI()}x=new Array(8)
x.fixed$length=Array
w=H.h(x,[P.k])
C.a.u(w,0,0)
x=b-1
C.a.u(w,1,x)
C.a.u(w,2,x)
C.a.u(w,7,x)
C.a.u(w,3,b)
C.a.u(w,4,b)
C.a.u(w,5,c)
C.a.u(w,6,c)
if(P.fo(a,b,c,0,w)>=14)C.a.u(w,7,c)
v=w[1]
if(typeof v!=="number")return v.ih()
if(v>=b)if(P.fo(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.n()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.N()
if(typeof r!=="number")return H.p(r)
if(q<r)r=q
if(typeof s!=="number")return s.N()
if(s<u)s=r
else if(s<=v)s=v+1
if(typeof t!=="number")return t.N()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.N()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.a6(a,"..",s)))n=r>s+2&&C.b.a6(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.a6(a,"file",b)){if(u<=b){if(!C.b.a6(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.b.w(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.b.aJ(a,s,r,"/");++r;++q;++c}else{a=C.b.w(a,b,s)+"/"+C.b.w(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.a6(a,"http",b)){if(x&&t+3===s&&C.b.a6(a,"80",t+1))if(b===0&&!0){a=C.b.aJ(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.b.w(a,b,t)+C.b.w(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.b.a6(a,"https",b)){if(x&&t+4===s&&C.b.a6(a,"443",t+1))if(b===0&&!0){a=C.b.aJ(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.b.w(a,b,t)+C.b.w(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.b.w(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.l5(a,v,u,t,s,r,q,o)}return P.lg(a,b,c,v,u,t,s,r,q,o)},
eL:function(a,b){var z=P.l
return C.a.hv(H.h(a.split("&"),[z]),P.ip(z,z),new P.k4(b),[P.G,P.l,P.l])},
k_:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.k0(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.a_(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.bR(C.b.w(a,v,w),null,null)
if(typeof s!=="number")return s.b3()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.i(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.bR(C.b.w(a,v,c),null,null)
if(typeof s!=="number")return s.b3()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.i(y,u)
y[u]=s
return y},
eK:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.k2(a)
y=new P.k3(z,a)
if(a.length<2)z.$1("address is too short")
x=H.h([],[P.k])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.a_(a,w)
if(s===58){if(w===b){++w
if(C.b.a_(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gaq(x)
if(r&&q!==-1)z.$2("expected a part after last `:`",c)
if(!r)if(!t)C.a.h(x,y.$2(v,c))
else{p=P.k_(a,v,c)
C.a.h(x,(p[0]<<8|p[1])>>>0)
C.a.h(x,(p[2]<<8|p[3])>>>0)}if(u){if(x.length>7)z.$1("an address with a wildcard must have less than 7 parts")}else if(x.length!==8)z.$1("an address without a wildcard must contain exactly 8 parts")
o=new Uint8Array(16)
for(q=x.length,n=o.length,m=9-q,w=0,l=0;w<q;++w){k=x[w]
if(k===-1)for(j=0;j<m;++j){if(l<0||l>=n)return H.i(o,l)
o[l]=0
i=l+1
if(i>=n)return H.i(o,i)
o[i]=0
l+=2}else{i=C.d.az(k,8)
if(l<0||l>=n)return H.i(o,l)
o[l]=i
i=l+1
if(i>=n)return H.i(o,i)
o[i]=k&255
l+=2}}return o},
lE:function(){var z,y,x,w,v
z=P.iv(22,new P.lG(),!0,P.J)
y=new P.lF(z)
x=new P.lH()
w=new P.lI()
v=H.e(y.$2(0,225),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(14,225),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(15,225),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(1,225),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(2,235),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(3,235),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(4,229),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(5,229),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(6,231),"$isJ")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(7,231),"$isJ")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.e(y.$2(8,8),"$isJ"),"]",5)
v=H.e(y.$2(9,235),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(16,235),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(17,235),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(10,235),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(18,235),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(19,235),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(11,235),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(12,236),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.e(y.$2(13,237),"$isJ")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.e(y.$2(20,245),"$isJ"),"az",21)
v=H.e(y.$2(21,245),"$isJ")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fo:function(a,b,c,d,e){var z,y,x,w,v
H.m(e,"$isc",[P.k],"$asc")
z=$.$get$fp()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.i(z,d)
x=z[d]
w=C.b.I(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.i(x,w)
v=x[w]
d=v&31
C.a.u(e,v>>>5,y)}return d},
E:{"^":"a;"},
"+bool":0,
ag:{"^":"a;a,b",
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.ag))return!1
return this.a===b.a&&!0},
gW:function(a){var z=this.a
return(z^C.d.az(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.hh(H.iV(this))
y=P.bB(H.iT(this))
x=P.bB(H.iP(this))
w=P.bB(H.iQ(this))
v=P.bB(H.iS(this))
u=P.bB(H.iU(this))
t=P.hi(H.iR(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
t:{
hh:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hi:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bB:function(a){if(a>=10)return""+a
return"0"+a}}},
o:{"^":"ae;"},
"+double":0,
be:{"^":"a;a",
N:function(a,b){return C.d.N(this.a,H.e(b,"$isbe").a)},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.be))return!1
return this.a===b.a},
gW:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hn()
y=this.a
if(y<0)return"-"+new P.be(0-y).i(0)
x=z.$1(C.d.aA(y,6e7)%60)
w=z.$1(C.d.aA(y,1e6)%60)
v=new P.hm().$1(y%1e6)
return""+C.d.aA(y,36e8)+":"+H.j(x)+":"+H.j(w)+"."+H.j(v)},
t:{
dK:function(a,b,c,d,e,f){return new P.be(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hm:{"^":"b:21;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hn:{"^":"b:21;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
a2:{"^":"a;"},
e5:{"^":"a2;",
i:function(a){return"Throw of null."}},
aK:{"^":"a2;a,b,c,d",
gbs:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbr:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.j(z)
w=this.gbs()+y+x
if(!this.a)return w
v=this.gbr()
u=P.bX(this.b)
return w+v+": "+H.j(u)},
t:{
bV:function(a){return new P.aK(!1,null,null,a)},
ct:function(a,b,c){return new P.aK(!0,a,b,c)}}},
c2:{"^":"aK;e,f,a,b,c,d",
gbs:function(){return"RangeError"},
gbr:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.j(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.j(z)
else if(x>z)y=": Not in range "+H.j(z)+".."+H.j(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.j(z)}return y},
t:{
bK:function(a,b,c){return new P.c2(null,null,!0,a,b,"Value not in range")},
Z:function(a,b,c,d,e){return new P.c2(b,c,!0,a,d,"Invalid value")},
aN:function(a,b,c,d,e,f){if(typeof a!=="number")return H.p(a)
if(0>a||a>c)throw H.d(P.Z(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.d(P.Z(b,a,c,"end",f))
return b}return c}}},
hE:{"^":"aK;e,q:f>,a,b,c,d",
gbs:function(){return"RangeError"},
gbr:function(){if(J.fP(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.j(z)},
t:{
bg:function(a,b,c,d,e){var z=H.a5(e!=null?e:J.az(b))
return new P.hE(b,z,!0,a,c,"Index out of range")}}},
jY:{"^":"a2;a",
i:function(a){return"Unsupported operation: "+this.a},
t:{
X:function(a){return new P.jY(a)}}},
jV:{"^":"a2;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
t:{
c8:function(a){return new P.jV(a)}}},
jp:{"^":"a2;a",
i:function(a){return"Bad state: "+this.a}},
hb:{"^":"a2;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.j(P.bX(z))+"."},
t:{
aT:function(a){return new P.hb(a)}}},
iK:{"^":"a;",
i:function(a){return"Out of Memory"},
$isa2:1},
em:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isa2:1},
hg:{"^":"a2;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
f1:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
hy:{"^":"a;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.j(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.w(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.I(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.b.a_(w,s)
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
m=""}l=C.b.w(w,o,p)
return y+n+l+m+"\n"+C.b.p(" ",x-o+n.length)+"^\n"},
t:{
V:function(a,b,c){return new P.hy(a,b,c)}}},
k:{"^":"ae;"},
"+int":0,
r:{"^":"a;$ti",
gq:function(a){var z,y
z=this.gY(this)
for(y=0;z.G();)++y
return y},
a8:function(a,b){var z,y,x
if(b<0)H.F(P.Z(b,0,null,"index",null))
for(z=this.gY(this),y=0;z.G();){x=z.gL()
if(b===y)return x;++y}throw H.d(P.bg(b,this,"index",null,y))},
i:function(a){return P.i9(this,"(",")")}},
aM:{"^":"a;$ti"},
c:{"^":"a;$ti",$isr:1},
"+List":0,
G:{"^":"a;$ti"},
y:{"^":"a;",
gW:function(a){return P.a.prototype.gW.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
ae:{"^":"a;"},
"+num":0,
a:{"^":";",
A:function(a,b){return this===b},
gW:function(a){return H.bn(this)},
i:function(a){return"Instance of '"+H.aX(this)+"'"},
toString:function(){return this.i(this)}},
aF:{"^":"a;"},
l:{"^":"a;",$ise6:1},
"+String":0,
aw:{"^":"a;av:a<",
gq:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isnI:1,
t:{
en:function(a,b,c){var z=J.bz(b)
if(!z.G())return a
if(c.length===0){do a+=H.j(z.gL())
while(z.G())}else{a+=H.j(z.gL())
for(;z.G();)a=a+c+H.j(z.gL())}return a}}},
k4:{"^":"b:31;a",
$2:function(a,b){var z,y,x,w
z=P.l
H.m(a,"$isG",[z,z],"$asG")
H.H(b)
y=J.dg(b).dl(b,"=")
if(y===-1){if(b!=="")a.u(0,P.d6(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.w(b,0,y)
w=C.b.ar(b,y+1)
z=this.a
a.u(0,P.d6(x,0,x.length,z,!0),P.d6(w,0,w.length,z,!0))}return a}},
k0:{"^":"b:44;a",
$2:function(a,b){throw H.d(P.V("Illegal IPv4 address, "+a,this.a,b))}},
k2:{"^":"b:49;a",
$2:function(a,b){throw H.d(P.V("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
k3:{"^":"b:27;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.bR(C.b.w(this.b,a,b),null,16)
if(typeof z!=="number")return z.N()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cb:{"^":"a;bm:a<,b,c,d,dz:e>,f,r,0x,0y,0z,0Q,0ch",
sfl:function(a){var z=P.l
this.Q=H.m(a,"$isG",[z,z],"$asG")},
gdK:function(){return this.b},
gbY:function(a){var z=this.c
if(z==null)return""
if(C.b.a5(z,"["))return C.b.w(z,1,z.length-1)
return z},
gbg:function(a){var z=this.d
if(z==null)return P.fd(this.a)
return z},
gc7:function(){var z=this.f
return z==null?"":z},
gdg:function(){var z=this.r
return z==null?"":z},
ca:function(a,b,c,d,e,f,g,h,i){var z,y,x
H.m(g,"$isG",[P.l,null],"$asG")
h=this.a
z=h==="file"
i=this.b
e=this.d
y=this.c
if(y!=null)b=y
else if(i.length!==0||e!=null||z)b=""
c=this.e
if(!z)x=b!=null&&c.length!==0
else x=!0
if(x&&!C.b.a5(c,"/"))c="/"+c
f=P.d5(f,0,0,g)
return new P.cb(h,i,b,e,c,f,this.r)},
c9:function(a){return this.ca(null,null,null,null,null,null,a,null,null)},
gaH:function(){var z,y
if(this.Q==null){z=this.f
y=P.l
this.sfl(new P.eI(P.eL(z==null?"":z,C.i),[y,y]))}return this.Q},
gdh:function(){return this.c!=null},
gdk:function(){return this.f!=null},
gdi:function(){return this.r!=null},
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
if(!!J.Q(b).$iscY){if(this.a==b.gbm())if(this.c!=null===b.gdh())if(this.b==b.gdK())if(this.gbY(this)==b.gbY(b))if(this.gbg(this)==b.gbg(b))if(this.e===b.gdz(b)){z=this.f
y=z==null
if(!y===b.gdk()){if(y)z=""
if(z===b.gc7()){z=this.r
y=z==null
if(!y===b.gdi()){if(y)z=""
z=z===b.gdg()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
return z}return!1},
gW:function(a){var z=this.z
if(z==null){z=C.b.gW(this.i(0))
this.z=z}return z},
$iscY:1,
t:{
cc:function(a,b,c,d){var z,y,x,w,v,u
H.m(a,"$isc",[P.k],"$asc")
if(c===C.i){z=$.$get$fi().b
if(typeof b!=="string")H.F(H.ac(b))
z=z.test(b)}else z=!1
if(z)return b
H.t(b,H.al(c,"bA",0))
y=c.gho().bV(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.i(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.bJ(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lg:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.lr(a,b,d)
else{if(d===b)P.br(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.ls(a,z,e-1):""
x=P.ll(a,e,f,!1)
if(typeof f!=="number")return f.n()
w=f+1
if(typeof g!=="number")return H.p(g)
v=w<g?P.lo(P.bR(C.b.w(a,w,g),new P.lh(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lm(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.N()
t=h<i?P.d5(a,h+1,i,null):null
return new P.cb(j,y,x,v,u,t,i<c?P.lk(a,i+1,c):null)},
fd:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
br:function(a,b,c){throw H.d(P.V(c,a,b))},
lo:function(a,b){if(a!=null&&a===P.fd(b))return
return a},
ll:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.a_(a,b)===91){if(typeof c!=="number")return c.F()
z=c-1
if(C.b.a_(a,z)!==93)P.br(a,b,"Missing end `]` to match `[` in host")
P.eK(a,b+1,z)
return C.b.w(a,b,c).toLowerCase()}if(typeof c!=="number")return H.p(c)
y=b
for(;y<c;++y)if(C.b.a_(a,y)===58){P.eK(a,b,c)
return"["+a+"]"}return P.lu(a,b,c)},
lu:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.p(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.a_(a,z)
if(v===37){u=P.fk(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.aw("")
s=C.b.w(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.w(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.i(C.y,t)
t=(C.y[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.aw("")
if(y<z){x.a+=C.b.w(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.i(C.l,t)
t=(C.l[t]&1<<(v&15))!==0}else t=!1
if(t)P.br(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.a_(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.aw("")
s=C.b.w(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fe(v)
z+=q
y=z}}}}if(x==null)return C.b.w(a,b,c)
if(y<c){s=C.b.w(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
lr:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fg(C.b.I(a,b)))P.br(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.I(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.i(C.n,w)
w=(C.n[w]&1<<(x&15))!==0}else w=!1
if(!w)P.br(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.w(a,b,c)
return P.li(y?a.toLowerCase():a)},
li:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
ls:function(a,b,c){return P.bs(a,b,c,C.T,!1)},
lm:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.bs(a,b,c,C.z,!0):C.K.j0(d,new P.ln(),P.l).E(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.a5(w,"/"))w="/"+w
return P.lt(w,e,f)},
lt:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.a5(a,"/"))return P.lv(a,!z||c)
return P.lw(a)},
d5:function(a,b,c,d){var z,y
z={}
H.m(d,"$isG",[P.l,null],"$asG")
if(a!=null){if(d!=null)throw H.d(P.bV("Both query and queryParameters specified"))
return P.bs(a,b,c,C.m,!0)}if(d==null)return
y=new P.aw("")
z.a=""
d.B(0,new P.lp(new P.lq(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
lk:function(a,b,c){return P.bs(a,b,c,C.m,!0)},
fk:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.a_(a,b+1)
x=C.b.a_(a,z)
w=H.cm(y)
v=H.cm(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.d.az(u,4)
if(z>=8)return H.i(C.o,z)
z=(C.o[z]&1<<(u&15))!==0}else z=!1
if(z)return H.bJ(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.w(a,b,b+3).toUpperCase()
return},
fe:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.h(z,[P.k])
C.a.u(y,0,37)
C.a.u(y,1,C.b.I("0123456789ABCDEF",a>>>4))
C.a.u(y,2,C.b.I("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.h(z,[P.k])
for(v=0;--w,w>=0;x=128){u=C.d.fF(a,6*w)&63|x
C.a.u(y,v,37)
C.a.u(y,v+1,C.b.I("0123456789ABCDEF",u>>>4))
C.a.u(y,v+2,C.b.I("0123456789ABCDEF",u&15))
v+=3}}return P.bL(y,0,null)},
bs:function(a,b,c,d,e){var z=P.fj(a,b,c,H.m(d,"$isc",[P.k],"$asc"),e)
return z==null?C.b.w(a,b,c):z},
fj:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.m(d,"$isc",[P.k],"$asc")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.N()
if(typeof c!=="number")return H.p(c)
if(!(y<c))break
c$0:{v=C.b.a_(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.i(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fk(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.i(C.l,u)
u=(C.l[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.br(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.a_(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fe(v)}}if(w==null)w=new P.aw("")
w.a+=C.b.w(a,x,y)
w.a+=H.j(t)
if(typeof s!=="number")return H.p(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.N()
if(x<c)w.a+=C.b.w(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fh:function(a){if(C.b.a5(a,"."))return!0
return C.b.dl(a,"/.")!==-1},
lw:function(a){var z,y,x,w,v,u,t
if(!P.fh(a))return a
z=H.h([],[P.l])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.B(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.i(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.E(z,"/")},
lv:function(a,b){var z,y,x,w,v,u
if(!P.fh(a))return!b?P.ff(a):a
z=H.h([],[P.l])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gaq(z)!==".."){if(0>=z.length)return H.i(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.i(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gaq(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.i(z,0)
C.a.u(z,0,P.ff(z[0]))}return C.a.E(z,"/")},
ff:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fg(J.fS(a,0)))for(y=1;y<z;++y){x=C.b.I(a,y)
if(x===58)return C.b.w(a,0,y)+"%3A"+C.b.ar(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.i(C.n,w)
w=(C.n[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
lj:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.I(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.d(P.bV("Invalid URL encoding"))}}return z},
d6:function(a,b,c,d,e){var z,y,x,w,v
y=b
while(!0){if(!(y<c)){z=!0
break}x=C.b.I(a,y)
if(x<=127)if(x!==37)w=x===43
else w=!0
else w=!0
if(w){z=!1
break}++y}if(z){if(C.i!==d)w=!1
else w=!0
if(w)return C.b.w(a,b,c)
else v=new H.a1(C.b.w(a,b,c))}else{v=H.h([],[P.k])
for(w=a.length,y=b;y<c;++y){x=C.b.I(a,y)
if(x>127)throw H.d(P.bV("Illegal percent encoding in URI"))
if(x===37){if(y+3>w)throw H.d(P.bV("Truncated URI"))
C.a.h(v,P.lj(a,y+1))
y+=2}else if(x===43)C.a.h(v,32)
else C.a.h(v,x)}}H.m(v,"$isc",[P.k],"$asc")
return new P.ka(!1).bV(v)},
fg:function(a){var z=a|32
return 97<=z&&z<=122}}},
lh:{"^":"b:28;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.n()
throw H.d(P.V("Invalid port",this.a,z+1))}},
ln:{"^":"b:54;",
$1:function(a){return P.cc(C.V,a,C.i,!1)}},
lq:{"^":"b:33;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.j(P.cc(C.o,a,C.i,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.j(P.cc(C.o,b,C.i,!0))}}},
lp:{"^":"b:35;a",
$2:function(a,b){var z,y
H.H(a)
if(b==null||typeof b==="string")this.a.$2(a,H.H(b))
else for(z=J.bz(H.fH(b,"$isr")),y=this.a;z.G();)y.$2(a,H.H(z.gL()))}},
jZ:{"^":"a;a,b,c",
gdI:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.i(z,0)
y=this.a
z=z[0]+1
x=C.b.dm(y,"?",z)
w=y.length
if(x>=0){v=P.bs(y,x+1,w,C.m,!1)
w=x}else v=null
z=new P.kE(this,"data",null,null,null,P.bs(y,z,w,C.z,!1),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.i(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
t:{
eJ:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.h([b-1],[P.k])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.I(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.d(P.V("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.d(P.V("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.I(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gaq(z)
if(v!==44||x!==t+7||!C.b.a6(a,"base64",t+1))throw H.d(P.V("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.E.hG(a,s,y)
else{r=P.fj(a,s,y,C.m,!0)
if(r!=null)a=C.b.aJ(a,s,y,r)}return new P.jZ(a,z,c)}}},
lG:{"^":"b:37;",
$1:function(a){return new Uint8Array(96)}},
lF:{"^":"b:39;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.i(z,a)
z=z[a]
J.fU(z,0,96,b)
return z}},
lH:{"^":"b;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.I(b,y)^96
if(x>=a.length)return H.i(a,x)
a[x]=c}}},
lI:{"^":"b;",
$3:function(a,b,c){var z,y,x
for(z=C.b.I(b,0),y=C.b.I(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.i(a,x)
a[x]=c}}},
l5:{"^":"a;a,b,c,d,e,f,r,x,0y",
gdh:function(){return this.c>0},
gdj:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.n()
y=this.e
if(typeof y!=="number")return H.p(y)
y=z+1<y
z=y}else z=!1
return z},
gdk:function(){var z=this.f
if(typeof z!=="number")return z.N()
return z<this.r},
gdi:function(){return this.r<this.a.length},
gcK:function(){return this.b===4&&C.b.a5(this.a,"http")},
gcL:function(){return this.b===5&&C.b.a5(this.a,"https")},
gbm:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gcK()){this.x="http"
z="http"}else if(this.gcL()){this.x="https"
z="https"}else if(z===4&&C.b.a5(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.a5(this.a,"package")){this.x="package"
z="package"}else{z=C.b.w(this.a,0,z)
this.x=z}return z},
gdK:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.w(this.a,y,z-1):""},
gbY:function(a){var z=this.c
return z>0?C.b.w(this.a,z,this.d):""},
gbg:function(a){var z
if(this.gdj()){z=this.d
if(typeof z!=="number")return z.n()
return P.bR(C.b.w(this.a,z+1,this.e),null,null)}if(this.gcK())return 80
if(this.gcL())return 443
return 0},
gdz:function(a){return C.b.w(this.a,this.e,this.f)},
gc7:function(){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.N()
return z<y?C.b.w(this.a,z+1,y):""},
gdg:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.ar(y,z+1):""},
gaH:function(){var z=this.f
if(typeof z!=="number")return z.N()
if(z>=this.r)return C.W
z=P.l
return new P.eI(P.eL(this.gc7(),C.i),[z,z])},
ca:function(a,b,c,d,e,f,g,h,i){var z,y,x
H.m(g,"$isG",[P.l,null],"$asG")
h=this.gbm()
z=h==="file"
y=this.c
i=y>0?C.b.w(this.a,this.b+3,y):""
e=this.gdj()?this.gbg(this):null
y=this.c
if(y>0)b=C.b.w(this.a,y,this.d)
else if(i.length!==0||e!=null||z)b=""
y=this.a
c=C.b.w(y,this.e,this.f)
if(!z)x=b!=null&&c.length!==0
else x=!0
if(x&&!C.b.a5(c,"/"))c="/"+c
f=P.d5(f,0,0,g)
x=this.r
if(x<y.length)a=C.b.ar(y,x+1)
return new P.cb(h,i,b,e,c,f,a)},
c9:function(a){return this.ca(null,null,null,null,null,null,a,null,null)},
gW:function(a){var z=this.y
if(z==null){z=C.b.gW(this.a)
this.y=z}return z},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!!J.Q(b).$iscY)return this.a===b.i(0)
return!1},
i:function(a){return this.a},
$iscY:1},
kE:{"^":"cb;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
dx:function(a,b){var z=document.createElement("canvas")
return z},
hp:function(a){H.e(a,"$isbD")
return"wheel"},
dO:function(a){var z,y,x
y=document.createElement("input")
z=H.e(y,"$isdN")
try{J.fW(z,a)}catch(x){H.am(x)}return z},
c9:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
f3:function(a,b,c,d){var z,y
z=W.c9(W.c9(W.c9(W.c9(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fs:function(a,b){var z
H.f(a,{func:1,ret:-1,args:[b]})
z=$.N
if(z===C.f)return a
return z.d4(a,b)},
ah:{"^":"Y;","%":"HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLLIElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
nr:{"^":"ah;",
i:function(a){return String(a)},
"%":"HTMLAnchorElement"},
ns:{"^":"ah;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
h0:{"^":"ah;","%":"HTMLBodyElement"},
cx:{"^":"ah;",
ci:function(a,b,c){var z=this.eJ(a,b,P.lT(c,null))
return z},
eJ:function(a,b,c){return a.getContext(b,c)},
$iscx:1,
"%":"HTMLCanvasElement"},
nv:{"^":"L;0q:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
nx:{"^":"kD;0q:length=",
dR:function(a,b){var z=this.eK(a,this.em(a,b))
return z==null?"":z},
em:function(a,b){var z,y
z=$.$get$dC()
y=z[b]
if(typeof y==="string")return y
y=this.fH(a,b)
z[b]=y
return y},
fH:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hj()+b
if(z in a)return z
return b},
eK:function(a,b){return a.getPropertyValue(b)},
gbQ:function(a){return a.bottom},
gaU:function(a){return a.height},
gaD:function(a){return a.left},
gcb:function(a){return a.right},
gb1:function(a){return a.top},
gb2:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hf:{"^":"a;",
gaD:function(a){return this.dR(a,"left")}},
dJ:{"^":"ah;",$isdJ:1,"%":"HTMLDivElement"},
hk:{"^":"L;",
bk:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
ny:{"^":"M;",
i:function(a){return String(a)},
"%":"DOMException"},
hl:{"^":"M;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
A:function(a,b){var z
if(b==null)return!1
if(!H.bx(b,"$isaE",[P.ae],"$asaE"))return!1
z=J.ay(b)
return a.left===z.gaD(b)&&a.top===z.gb1(b)&&a.width===z.gb2(b)&&a.height===z.gaU(b)},
gW:function(a){return W.f3(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gbQ:function(a){return a.bottom},
gaU:function(a){return a.height},
gaD:function(a){return a.left},
gcb:function(a){return a.right},
gb1:function(a){return a.top},
gb2:function(a){return a.width},
$isaE:1,
$asaE:function(){return[P.ae]},
"%":";DOMRectReadOnly"},
kC:{"^":"c_;a,b",
gq:function(a){return this.b.length},
j:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.i(z,b)
return H.e(z[b],"$isY")},
u:function(a,b,c){var z
H.e(c,"$isY")
z=this.b
if(b<0||b>=z.length)return H.i(z,b)
J.cq(this.a,c,z[b])},
h:function(a,b){J.dm(this.a,b)
return b},
gY:function(a){var z=this.ce(this)
return new J.aA(z,z.length,0,[H.q(z,0)])},
$asW:function(){return[W.Y]},
$asr:function(){return[W.Y]},
$asc:function(){return[W.Y]}},
Y:{"^":"L;",
gbU:function(a){return new W.kC(a,a.children)},
gd7:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.N()
if(x<0)x=-x*0
if(typeof w!=="number")return w.N()
if(w<0)w=-w*0
return new P.aE(z,y,x,w,[P.ae])},
i:function(a){return a.localName},
$isY:1,
"%":";Element"},
a3:{"^":"M;",$isa3:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
bD:{"^":"M;",
eg:function(a,b,c,d){return a.addEventListener(b,H.b7(H.f(c,{func:1,args:[W.a3]}),1),!1)},
$isbD:1,
"%":";EventTarget"},
nz:{"^":"ah;0q:length=","%":"HTMLFormElement"},
hB:{"^":"M;0q:length=",
cS:function(a,b,c,d){return a.replaceState(b,c,d)},
"%":"History"},
hC:{"^":"kU;",
gq:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.bg(b,a,null,null,null))
return a[b]},
u:function(a,b,c){H.e(c,"$isL")
throw H.d(P.X("Cannot assign element of immutable List."))},
a8:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isaB:1,
$asaB:function(){return[W.L]},
$asW:function(){return[W.L]},
$isr:1,
$asr:function(){return[W.L]},
$isc:1,
$asc:function(){return[W.L]},
$ishC:1,
$asaL:function(){return[W.L]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hD:{"^":"hk;","%":"HTMLDocument"},
dN:{"^":"ah;0type",
si7:function(a,b){a.type=H.H(b)},
$isdN:1,
$iscz:1,
"%":"HTMLInputElement"},
cz:{"^":"a;",$isY:1,$isbD:1,$isL:1},
bh:{"^":"cU;",$isbh:1,"%":"KeyboardEvent"},
ii:{"^":"ah;","%":"HTMLLabelElement"},
an:{"^":"cU;",$isan:1,"%":"PointerEvent;DragEvent|MouseEvent"},
kB:{"^":"c_;a",
u:function(a,b,c){var z,y
H.e(c,"$isL")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.i(y,b)
J.cq(z,c,y[b])},
gY:function(a){var z=this.a.childNodes
return new W.dL(z,z.length,-1,[H.bQ(C.X,z,"aL",0)])},
gq:function(a){return this.a.childNodes.length},
j:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.i(z,b)
return z[b]},
$asW:function(){return[W.L]},
$asr:function(){return[W.L]},
$asc:function(){return[W.L]}},
L:{"^":"bD;",
hY:function(a,b){var z,y
try{z=a.parentNode
J.cq(z,b,a)}catch(y){H.am(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.dZ(a):z},
V:function(a,b){return a.appendChild(b)},
fq:function(a,b,c){return a.replaceChild(b,c)},
$isL:1,
"%":"Attr|DocumentFragment|DocumentType|ShadowRoot;Node"},
iH:{"^":"l_;",
gq:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.bg(b,a,null,null,null))
return a[b]},
u:function(a,b,c){H.e(c,"$isL")
throw H.d(P.X("Cannot assign element of immutable List."))},
a8:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isaB:1,
$asaB:function(){return[W.L]},
$asW:function(){return[W.L]},
$isr:1,
$asr:function(){return[W.L]},
$isc:1,
$asc:function(){return[W.L]},
$asaL:function(){return[W.L]},
"%":"NodeList|RadioNodeList"},
nH:{"^":"ah;0q:length=","%":"HTMLSelectElement"},
c4:{"^":"ah;",$isc4:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
jw:{"^":"ah;",
eM:function(a,b){return a.insertRow(b)},
"%":"HTMLTableElement"},
jx:{"^":"ah;",
cJ:function(a,b){return a.insertCell(b)},
"%":"HTMLTableRowElement"},
aZ:{"^":"M;",$isaZ:1,"%":"Touch"},
b_:{"^":"cU;",$isb_:1,"%":"TouchEvent"},
nK:{"^":"ld;",
gq:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.bg(b,a,null,null,null))
return a[b]},
u:function(a,b,c){H.e(c,"$isaZ")
throw H.d(P.X("Cannot assign element of immutable List."))},
a8:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isaB:1,
$asaB:function(){return[W.aZ]},
$asW:function(){return[W.aZ]},
$isr:1,
$asr:function(){return[W.aZ]},
$isc:1,
$asc:function(){return[W.aZ]},
$asaL:function(){return[W.aZ]},
"%":"TouchList"},
cU:{"^":"a3;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
bp:{"^":"an;",
ghj:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.X("deltaY is not supported"))},
ghi:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.X("deltaX is not supported"))},
$isbp:1,
"%":"WheelEvent"},
kv:{"^":"bD;",
ft:function(a,b){return a.requestAnimationFrame(H.b7(H.f(b,{func:1,ret:-1,args:[P.ae]}),1))},
ex:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
nP:{"^":"hl;",
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
A:function(a,b){var z
if(b==null)return!1
if(!H.bx(b,"$isaE",[P.ae],"$asaE"))return!1
z=J.ay(b)
return a.left===z.gaD(b)&&a.top===z.gb1(b)&&a.width===z.gb2(b)&&a.height===z.gaU(b)},
gW:function(a){return W.f3(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gaU:function(a){return a.height},
gb2:function(a){return a.width},
"%":"ClientRect|DOMRect"},
kF:{"^":"jr;a,b,c,$ti"},
nQ:{"^":"kF;a,b,c,$ti"},
kG:{"^":"cQ;a,b,c,d,e,$ti",t:{
a_:function(a,b,c,d,e){var z,y
z=W.fs(new W.kH(c),W.a3)
y=z!=null
if(y&&!0){H.f(z,{func:1,args:[W.a3]})
if(y)J.fR(a,b,z,!1)}return new W.kG(0,a,b,z,!1,[e])}}},
kH:{"^":"b:40;a",
$1:function(a){return this.a.$1(H.e(a,"$isa3"))}},
aL:{"^":"a;$ti",
gY:function(a){return new W.dL(a,this.gq(a),-1,[H.bQ(this,a,"aL",0)])}},
dL:{"^":"a;a,b,c,0d,$ti",
scI:function(a){this.d=H.t(a,H.q(this,0))},
G:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.scI(J.fQ(this.a,z))
this.c=z
return!0}this.scI(null)
this.c=y
return!1},
gL:function(){return this.d},
$isaM:1},
kD:{"^":"M+hf;"},
kT:{"^":"M+W;"},
kU:{"^":"kT+aL;"},
kZ:{"^":"M+W;"},
l_:{"^":"kZ+aL;"},
lc:{"^":"M+W;"},
ld:{"^":"lc+aL;"}}],["","",,P,{"^":"",
lT:function(a,b){var z={}
a.B(0,new P.lU(z))
return z},
dI:function(){var z=$.dH
if(z==null){z=J.cr(window.navigator.userAgent,"Opera",0)
$.dH=z}return z},
hj:function(){var z,y
z=$.dE
if(z!=null)return z
y=$.dF
if(y==null){y=J.cr(window.navigator.userAgent,"Firefox",0)
$.dF=y}if(y)z="-moz-"
else{y=$.dG
if(y==null){y=!P.dI()&&J.cr(window.navigator.userAgent,"Trident/",0)
$.dG=y}if(y)z="-ms-"
else z=P.dI()?"-o-":"-webkit-"}$.dE=z
return z},
l6:{"^":"a;",
dd:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
bi:function(a){var z,y,x,w
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.Q(a)
if(!!y.$isag)return new Date(a.a)
if(!!y.$isj4)throw H.d(P.c8("structured clone of RegExp"))
if(!!y.$iscK)return a
if(!!y.$isG){x=this.dd(a)
y=this.b
if(x>=y.length)return H.i(y,x)
w=y[x]
z.a=w
if(w!=null)return w
w={}
z.a=w
C.a.u(y,x,w)
a.B(0,new P.l7(z,this))
return z.a}if(!!y.$isc){x=this.dd(a)
z=this.b
if(x>=z.length)return H.i(z,x)
w=z[x]
if(w!=null)return w
return this.hd(a,x)}throw H.d(P.c8("structured clone of other type"))},
hd:function(a,b){var z,y,x,w
z=J.b8(a)
y=z.gq(a)
x=new Array(y)
C.a.u(this.b,b,x)
for(w=0;w<y;++w)C.a.u(x,w,this.bi(z.j(a,w)))
return x}},
l7:{"^":"b:12;a,b",
$2:function(a,b){this.a.a[a]=this.b.bi(b)}},
lU:{"^":"b:12;a",
$2:function(a,b){this.a[a]=b}},
fb:{"^":"l6;a,b"},
hv:{"^":"c_;a,b",
gb8:function(){var z,y,x
z=this.b
y=H.al(z,"W",0)
x=W.Y
return new H.iB(new H.kt(z,H.f(new P.hw(),{func:1,ret:P.E,args:[y]}),[y]),H.f(new P.hx(),{func:1,ret:x,args:[y]}),[y,x])},
u:function(a,b,c){var z
H.e(c,"$isY")
z=this.gb8()
J.fV(z.b.$1(J.cs(z.a,b)),c)},
h:function(a,b){J.dm(this.b.a,b)},
gq:function(a){return J.az(this.gb8().a)},
j:function(a,b){var z=this.gb8()
return z.b.$1(J.cs(z.a,b))},
gY:function(a){var z=P.iu(this.gb8(),!1,W.Y)
return new J.aA(z,z.length,0,[H.q(z,0)])},
$asW:function(){return[W.Y]},
$asr:function(){return[W.Y]},
$asc:function(){return[W.Y]}},
hw:{"^":"b:42;",
$1:function(a){return!!J.Q(H.e(a,"$isL")).$isY}},
hx:{"^":"b:26;",
$1:function(a){return H.a9(H.e(a,"$isL"),"$isY")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
ca:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kV:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
l0:{"^":"a;$ti",
gcb:function(a){var z=this.a
if(typeof z!=="number")return z.n()
return H.t(z+this.c,H.q(this,0))},
gbQ:function(a){var z=this.b
if(typeof z!=="number")return z.n()
return H.t(z+this.d,H.q(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
A:function(a,b){var z,y,x,w
if(b==null)return!1
if(!H.bx(b,"$isaE",[P.ae],"$asaE"))return!1
z=this.a
y=J.ay(b)
x=y.gaD(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb1(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.n()
w=H.q(this,0)
if(H.t(z+this.c,w)===y.gcb(b)){if(typeof x!=="number")return x.n()
z=H.t(x+this.d,w)===y.gbQ(b)}else z=!1}else z=!1}else z=!1
return z},
gW:function(a){var z,y,x,w,v
z=this.a
y=J.by(z)
x=this.b
w=J.by(x)
if(typeof z!=="number")return z.n()
v=H.q(this,0)
z=H.t(z+this.c,v)
if(typeof x!=="number")return x.n()
v=H.t(x+this.d,v)
return P.kV(P.ca(P.ca(P.ca(P.ca(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
aE:{"^":"l0;aD:a>,b1:b>,b2:c>,aU:d>,$ti"}}],["","",,P,{"^":"",nJ:{"^":"Y;",
gbU:function(a){return new P.hv(a,new W.kB(a))},
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement"}}],["","",,P,{"^":"",J:{"^":"a;",$isr:1,
$asr:function(){return[P.k]},
$isc:1,
$asc:function(){return[P.k]}}}],["","",,P,{"^":""}],["","",,P,{"^":"",h1:{"^":"M;",$ish1:1,"%":"WebGLBuffer"},hz:{"^":"M;",$ishz:1,"%":"WebGLFramebuffer"},iZ:{"^":"M;",$isiZ:1,"%":"WebGLProgram"},cN:{"^":"M;",
d3:function(a,b,c){return a.attachShader(b,c)},
ai:function(a,b,c){return a.bindBuffer(b,c)},
h1:function(a,b,c){return a.bindFramebuffer(b,c)},
aB:function(a,b,c){return a.blendFunc(b,c)},
d5:function(a,b,c,d){return a.bufferData(b,c,d)},
h6:function(a,b){return a.clear(b)},
h7:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
h8:function(a,b){return a.clearDepth(b)},
ha:function(a,b){return a.compileShader(b)},
he:function(a,b){return a.createShader(b)},
hg:function(a,b){return a.deleteProgram(b)},
hh:function(a,b){return a.deleteShader(b)},
hk:function(a,b){return a.depthFunc(b)},
d8:function(a,b){return a.disable(b)},
d9:function(a,b){return a.disableVertexAttribArray(b)},
hm:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
ap:function(a,b){return a.enable(b)},
dc:function(a,b){return a.enableVertexAttribArray(b)},
dN:function(a,b,c){return a.getActiveAttrib(b,c)},
dO:function(a,b,c){return a.getActiveUniform(b,c)},
dP:function(a,b,c){return a.getAttribLocation(b,c)},
cj:function(a,b){return a.getParameter(b)},
dQ:function(a,b){return a.getProgramInfoLog(b)},
bl:function(a,b,c){return a.getProgramParameter(b,c)},
dS:function(a,b){return a.getShaderInfoLog(b)},
dT:function(a,b,c){return a.getShaderParameter(b,c)},
dU:function(a,b,c){return a.getUniformLocation(b,c)},
hD:function(a,b){return a.linkProgram(b)},
dX:function(a,b,c){return a.shaderSource(b,c)},
i9:function(a,b,c){return a.uniform1f(b,c)},
ia:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ib:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
ic:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
dJ:function(a,b){return a.useProgram(b)},
ie:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
ig:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$iscN:1,
"%":"WebGLRenderingContext"},jg:{"^":"M;",$isjg:1,"%":"WebGLShader"},jQ:{"^":"M;",$isjQ:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",a6:{"^":"a;0a,0b,0c,0d,$ti",
seQ:function(a){this.a=H.m(a,"$isc",[H.al(this,"a6",0)],"$asc")},
scO:function(a){this.b=H.f(a,{func:1,ret:P.E,args:[[P.r,H.al(this,"a6",0)]]})},
scN:function(a){this.c=H.f(a,{func:1,ret:-1,args:[P.k,[P.r,H.al(this,"a6",0)]]})},
scP:function(a){this.d=H.f(a,{func:1,ret:-1,args:[P.k,[P.r,H.al(this,"a6",0)]]})},
cn:function(a){this.seQ(H.h([],[a]))
this.scO(null)
this.scN(null)
this.scP(null)},
dW:function(a,b,c){var z={func:1,ret:-1,args:[P.k,[P.r,H.al(this,"a6",0)]]}
H.f(a,z)
H.f(c,z)
this.scO(b)
this.scN(a)
this.scP(c)},
bn:function(a,b){return this.dW(a,null,b)},
ff:function(a){H.m(a,"$isr",[H.al(this,"a6",0)],"$asr")
return!0},
e6:function(a,b){var z
H.m(b,"$isr",[H.al(this,"a6",0)],"$asr")
z=this.c
if(z!=null)z.$2(a,b)},
gq:function(a){return this.a.length},
gY:function(a){var z=this.a
return new J.aA(z,z.length,0,[H.q(z,0)])},
a8:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.i(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.al(this,"a6",0)
H.t(b,z)
z=[z]
if(this.ff(H.h([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.e6(x,H.h([b],z))}},
$isr:1,
t:{
dz:function(a){var z=new O.a6([a])
z.cn(a)
return z}}},cH:{"^":"a;0a,0b",
sbv:function(a){this.a=H.m(a,"$isc",[V.bj],"$asc")},
gq:function(a){return this.a.length},
gD:function(){var z=this.b
if(z==null){z=D.R()
this.b=z}return z},
e7:function(a){var z=this.b
if(!(z==null))z.J(a)},
as:function(){return this.e7(null)},
gaj:function(){var z=this.a
if(z.length>0)return C.a.gaq(z)
else return V.c0()},
dB:function(a){var z=this.a
if(a==null)C.a.h(z,V.c0())
else C.a.h(z,a)
this.as()},
c6:function(){var z=this.a
if(z.length>0){z.pop()
this.as()}}}}],["","",,E,{"^":"",dq:{"^":"a;"},as:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0ab:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
seq:function(a,b){this.y=H.m(b,"$isa6",[E.as],"$asa6")},
sab:function(a){this.z=H.e(a,"$isbC")},
sck:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gD().H(0,this.gdv())
y=this.c
if(y!=null)y.gD().h(0,this.gdv())
x=new D.x("shape",z,this.c,this,[F.a0])
x.b=!0
this.ae(x)}},
saW:function(a){var z,y
if(!J.B(this.r,a)){z=this.r
if(z!=null)z.gD().H(0,this.gdu())
if(a!=null)a.gD().h(0,this.gdu())
this.r=a
y=new D.x("mover",z,a,this,[U.aa])
y.b=!0
this.ae(y)}},
aK:function(a){var z,y,x,w
z=this.r
y=z!=null?z.aL(a,this):null
if(!J.B(y,this.x)){x=this.x
this.x=y
w=new D.x("matrix",x,y,this,[V.bj])
w.b=!0
this.ae(w)}for(z=this.y.a,z=new J.aA(z,z.length,0,[H.q(z,0)]);z.G();)z.d.aK(a)},
aI:function(a){var z,y,x,w,v,u,t,s,r
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gaj())
else C.a.h(z.a,y.p(0,z.gaj()))
z.as()
a.dC(this.f)
z=a.dy
x=(z&&C.a).gaq(z)
if(x!=null&&this.d!=null){if(x.a==null){w=a.fr.j(0,"Inspection")
if(w==null){z=a.a
w=new A.hG(z,"Inspection")
w.e4(z,"Inspection")
y=$.i0
v=$.hS
w.c=y
w.d=v
w.e=w.cE(y,35633)
w.f=w.cE(w.d,35632)
y=z.createProgram()
w.r=y
C.c.d3(z,y,w.e)
C.c.d3(z,w.r,w.f)
C.c.hD(z,w.r)
if(!H.fw(C.c.bl(z,w.r,35714))){u=C.c.dQ(z,w.r)
C.c.hg(z,w.r)
H.F(P.K("Failed to link shader: "+H.j(u)))}w.fA()
w.fC()
w.z=w.x.j(0,"posAttr")
w.Q=w.x.j(0,"normAttr")
w.ch=w.x.j(0,"clrAttr")
w.cx=w.x.j(0,"binmAttr")
w.cy=H.a9(w.y.j(0,"lightVec"),"$iseH")
w.db=H.a9(w.y.j(0,"ambientClr"),"$iscW")
w.dx=H.a9(w.y.j(0,"diffuseClr"),"$iscW")
w.dy=H.a9(w.y.j(0,"weightScalar"),"$iseG")
w.fr=H.a9(w.y.j(0,"viewMat"),"$isc7")
w.fx=H.a9(w.y.j(0,"viewObjMatrix"),"$isc7")
w.fy=H.a9(w.y.j(0,"projViewObjMatrix"),"$isc7")
if(a.fr.bd("Inspection"))H.F(P.K('Shader cache already contains a shader by the name "Inspection".'))
a.fr.u(0,"Inspection",w)}x.a=w}if(this.e==null){this.d.a7()
z=this.d
y=z.e
if(!(y==null))++y.d
z.d.bS()
z.a.bS()
z=z.e
if(!(z==null))z.ak()
z=this.d
y=z.e
if(!(y==null))++y.d
z.a.h3()
z=z.e
if(!(z==null))z.ak()
z=new Z.du()
z.seT(new H.aC(0,0,[P.l,Z.cw]))
this.e=z}z=x.a
y=a.a
C.c.dJ(y,z.r)
z.x.hn()
v=x.r2
t=z.dy
C.c.i9(t.a,t.d,v)
v=x.b
t=z.cy
t.toString
s=v.a
r=v.b
v=v.c
C.c.ia(t.a,t.d,s,r,v)
v=a.db.gaj()
r=z.fr
r.toString
r.bo(v.cf(0,!0))
v=a.cx
if(v==null){v=a.db.gaj().p(0,a.dx.gaj())
a.cx=v}t=z.fx
t.toString
t.bo(v.cf(0,!0))
v=a.ch
if(v==null){v=a.z
if(v==null){v=a.cy.gaj().p(0,a.db.gaj())
a.z=v}v=v.p(0,a.dx.gaj())
a.ch=v}z=z.fy
z.toString
z.bo(v.cf(0,!0))
z=this.e
if(z instanceof Z.du){C.c.aB(y,1,1)
if(this.c==null){C.c.d8(y,2929)
C.c.ap(y,3042)
C.c.aB(y,1,1)
if(x.k3)x.cR(a,z,this.d,"Axis",H.f(x.gcu(),{func:1,ret:F.a0,args:[F.c3]}),x.z,x.y)
if(x.k4)x.cR(a,z,this.d,"AABB",H.f(x.gcr(),{func:1,ret:F.a0,args:[F.c3]}),x.z,x.y)
C.c.ap(y,2929)
C.c.aB(y,770,771)}else{C.c.ap(y,2929)
C.c.ap(y,3042)
C.c.aB(y,770,771)
if(x.cx)x.a0(a,z,this.c,"vertices",x.geb(),x.f,x.e)
if(x.fr)x.a0(a,z,this.c,"faceCenters",x.geA(),x.f,x.e)
if(x.Q)x.a0(a,z,this.c,"shapeFill",x.gfE(),x.d,x.c)
if(x.id)x.a0(a,z,this.c,"colorFill",x.ges(),x.x,x.r)
if(x.k1)x.a0(a,z,this.c,"txt2DColor",x.gfP(),x.x,x.r)
if(x.k2)x.a0(a,z,this.c,"weight",x.gfT(),x.x,x.r)
if(x.r1)x.a0(a,z,this.c,"bend1",x.gek(),x.x,x.r)
C.c.d8(y,2929)
C.c.aB(y,1,1)
if(x.ch)x.a0(a,z,this.c,"wireFrame",x.gfU(),x.f,x.e)
if(x.cy)x.a0(a,z,this.c,"normals",x.geZ(),x.f,x.e)
if(x.db)x.a0(a,z,this.c,"binormals",x.gel(),x.f,x.e)
if(x.dx)x.a0(a,z,this.c,"tangentals",x.gfI(),x.f,x.e)
if(x.dy)x.a0(a,z,this.c,"textureCube",x.gfQ(),x.f,x.e)
if(x.fx)x.a0(a,z,this.c,"faceNormals",x.geB(),x.f,x.e)
if(x.fy)x.a0(a,z,this.c,"faceBinormals",x.gez(),x.x,x.r)
if(x.go)x.a0(a,z,this.c,"faceTangentals",x.geC(),x.x,x.r)
if(x.k3)x.a0(a,z,this.c,"Axis",x.gcu(),x.z,x.y)
if(x.k4)x.a0(a,z,this.c,"AABB",x.gcr(),x.z,x.y)
C.c.ap(y,2929)
C.c.aB(y,770,771)}}else this.e=null
z=x.a
z.toString
C.c.dJ(y,null)
z.x.hl()}for(z=this.y.a,z=new J.aA(z,z.length,0,[H.q(z,0)]);z.G();)z.d.aI(a)
a.dA()
a.dx.c6()},
gD:function(){var z=this.z
if(z==null){z=D.R()
this.z=z}return z},
ae:function(a){var z=this.z
if(!(z==null))z.J(a)},
R:function(){return this.ae(null)},
hL:[function(a){H.e(a,"$isw")
this.e=null
this.ae(a)},function(){return this.hL(null)},"j5","$1","$0","gdv",0,2,6],
hK:[function(a){this.ae(H.e(a,"$isw"))},function(){return this.hK(null)},"j4","$1","$0","gdu",0,2,6],
hI:[function(a){this.ae(H.e(a,"$isw"))},function(){return this.hI(null)},"j2","$1","$0","gdt",0,2,6],
j1:[function(a,b){var z,y,x,w,v,u,t
H.m(b,"$isr",[E.as],"$asr")
for(z=b.length,y=this.gdt(),x={func:1,ret:-1,args:[D.w]},w=[x],v=0;v<b.length;b.length===z||(0,H.D)(b),++v){u=b[v]
if(u!=null){if(u.gab()==null){t=new D.bC()
t.sam(null)
t.sbC(null)
t.c=null
t.d=0
u.sab(t)}t=u.gab()
t.toString
H.f(y,x)
if(t.a==null)t.sam(H.h([],w))
t=t.a;(t&&C.a).h(t,y)}}this.R()},"$2","ghH",8,0,11],
j3:[function(a,b){var z,y
H.m(b,"$isr",[E.as],"$asr")
for(z=b.gY(b),y=this.gdt();z.G();)z.gL().gD().H(0,y)
this.R()},"$2","ghJ",8,0,11],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$ise2:1},j6:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
sfJ:function(a){this.dy=H.m(a,"$isc",[O.c5],"$asc")},
sfD:function(a){this.fr=H.m(a,"$isG",[P.l,A.cO],"$asG")},
e2:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.ag(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cH()
y=[V.bj]
z.sbv(H.h([],y))
z.b=null
z.gD().h(0,new E.j8(this))
this.cy=z
z=new O.cH()
z.sbv(H.h([],y))
z.b=null
z.gD().h(0,new E.j9(this))
this.db=z
z=new O.cH()
z.sbv(H.h([],y))
z.b=null
z.gD().h(0,new E.ja(this))
this.dx=z
this.sfJ(H.h([],[O.c5]))
z=this.dy;(z&&C.a).h(z,null)
this.sfD(new H.aC(0,0,[P.l,A.cO]))},
dC:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gaq(z):a;(z&&C.a).h(z,y)},
dA:function(){var z=this.dy
if(z.length>1)z.pop()},
t:{
j7:function(a,b){var z=new E.j6(a,b)
z.e2(a,b)
return z}}},j8:{"^":"b:15;a",
$1:function(a){var z
H.e(a,"$isw")
z=this.a
z.z=null
z.ch=null}},j9:{"^":"b:15;a",
$1:function(a){var z
H.e(a,"$isw")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},ja:{"^":"b:15;a",
$1:function(a){var z
H.e(a,"$isw")
z=this.a
z.ch=null
z.cx=null}},jA:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0ab:x<,0y,0z,0Q,0ch,0cx,0cy",
sab:function(a){this.x=H.e(a,"$isbC")},
e9:[function(a){H.e(a,"$isw")
this.i_()},function(){return this.e9(null)},"e8","$1","$0","gco",0,2,6],
ghx:function(){var z,y,x
z=Date.now()
y=C.d.aA(P.dK(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.ag(z,!1)
return x/y},
cT:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.p()
if(typeof z!=="number")return H.p(z)
x=C.e.bf(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.p()
w=C.e.bf(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.er(C.p,this.ghZ())}},
i_:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.f(new E.jC(this),{func:1,ret:-1,args:[P.ae]})
C.D.ex(z)
C.D.ft(z,W.fs(y,P.ae))}},"$0","ghZ",0,0,7],
hX:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.cT()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ag(w,!1)
x.y=P.dK(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sq(w.a,0)
w.as()
w=x.db
C.a.sq(w.a,0)
w.as()
w=x.dx
C.a.sq(w.a,0)
w.as()
w=x.dy;(w&&C.a).sq(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aI(this.e)}}catch(v){z=H.am(v)
y=H.b9(v)
P.dj("Error: "+H.j(z))
P.dj("Stack: "+H.j(y))
throw H.d(z)}},
t:{
jB:function(a,b,c,d,e){var z,y,x,w
z=J.Q(a)
if(!!z.$iscx)return E.eq(a,!0,!0,!0,!1)
y=W.dx(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gbU(a).h(0,y)
w=E.eq(y,!0,!0,!0,!1)
w.a=a
return w},
eq:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jA()
y=P.iq(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.l,null)
x=C.j.ci(a,"webgl",y)
x=H.e(x==null?C.j.ci(a,"experimental-webgl",y):x,"$iscN")
if(x==null)H.F(P.K("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.j7(x,a)
w=new T.jz(x)
w.b=H.a5((x&&C.c).cj(x,3379))
w.c=H.a5(C.c.cj(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.k5(a)
v=new X.ih()
v.c=new X.au(!1,!1,!1)
v.sfk(P.is(null,null,null,P.k))
w.b=v
v=new X.iE(w)
v.f=0
v.r=V.av()
v.x=V.av()
v.Q=1
v.ch=1
w.c=v
v=new X.iw(w)
v.r=0
v.x=V.av()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jF(w)
v.e=0
v.f=V.av()
v.r=V.av()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.sey(H.h([],[[P.cQ,P.a]]))
v=w.z
u=document
t=W.an
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.a_(u,"contextmenu",H.f(w.gf3(),s),!1,t))
v=w.z
r=W.a3
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.a_(a,"focus",H.f(w.gf6(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.a_(a,"blur",H.f(w.gf0(),q),!1,r))
v=w.z
p=W.bh
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.a_(u,"keyup",H.f(w.gf8(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.a_(u,"keydown",H.f(w.gf7(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.a_(a,"mousedown",H.f(w.gfa(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a_(a,"mouseup",H.f(w.gfc(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.a_(a,"mousemove",H.f(w.gfb(),s),!1,t))
p=w.z
o=W.bp;(p&&C.a).h(p,W.a_(a,H.H(W.hp(a)),H.f(w.gfd(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.a_(u,"mousemove",H.f(w.gf4(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.a_(u,"mouseup",H.f(w.gf5(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.a_(u,"pointerlockchange",H.f(w.gfe(),q),!1,r))
r=w.z
q=W.b_
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.a_(a,"touchstart",H.f(w.gfj(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a_(a,"touchend",H.f(w.gfh(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.a_(a,"touchmove",H.f(w.gfi(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.ag(Date.now(),!1)
z.cy=0
z.cT()
return z}}},jC:{"^":"b:29;a",
$1:function(a){var z
H.ne(a)
z=this.a
if(z.ch){z.ch=!1
z.hX()}}}}],["","",,Z,{"^":"",eZ:{"^":"a;a,b",$isnt:1,t:{
d2:function(a,b,c){var z
H.m(c,"$isc",[P.k],"$asc")
z=a.createBuffer()
C.c.ai(a,b,z)
C.c.d5(a,b,new Int16Array(H.ce(c)),35044)
C.c.ai(a,b,null)
return new Z.eZ(b,z)}}},dt:{"^":"dq;a,b,c,d,e",
bO:function(a){var z,y,x
try{y=a.a
C.c.dc(y,this.e)
C.c.ie(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.am(x)
y=P.K('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.j(z))
throw H.d(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}},ks:{"^":"a;a",$isnu:1},cw:{"^":"a;a,0b,c,d",
seL:function(a){this.b=H.m(a,"$isc",[Z.bE],"$asc")},
be:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bO:function(a){var z,y
z=this.a
C.c.ai(a.a,z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bO(a)},
i8:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.c.d9(x,z[y].e)
C.c.ai(x,this.a.a,null)},
aI:function(a){var z,y,x,w,v,u
z=this.b.length
for(y=a.a,x=0;x<z;++x){w=this.b
if(x>=w.length)return H.i(w,x)
v=w[x]
w=v.c
u=w.a
C.c.ai(y,u,w.b)
C.c.hm(y,v.a,v.b,5123,0)
C.c.ai(y,u,null)}},
dw:function(a){this.bO(a)
this.aI(a)
this.i8(a)},
i:function(a){var z,y,x,w,v,u
z=[P.l]
y=H.h([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v)C.a.h(y,x[v].i(0))
u=H.h([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.ab(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.E(y,", ")+"\nAttrs:   "+C.a.E(u,", ")},
$isjy:1},du:{"^":"a;0a",
seT:function(a){this.a=H.m(a,"$isG",[P.l,Z.cw],"$asG")},
$isjy:1},bE:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aX(this.c)+"'")+"]"}},d1:{"^":"a;a",
gcl:function(a){var z,y
z=this.a
y=(z&$.$get$aI().a)!==0?3:0
if((z&$.$get$aH().a)!==0)y+=3
if((z&$.$get$aG().a)!==0)y+=3
if((z&$.$get$b1().a)!==0)y+=2
if((z&$.$get$b2().a)!==0)y+=3
if((z&$.$get$aO().a)!==0)y+=3
if((z&$.$get$bo().a)!==0)y+=4
if((z&$.$get$b3().a)!==0)++y
return(z&$.$get$b0().a)!==0?y+4:y},
h_:function(a){var z,y,x
z=$.$get$aI()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aH()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aG()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b1()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b2()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aO()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bo()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b3()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b0()
if((y&z.a)!==0)if(x===a)return z
return $.$get$eY()},
A:function(a,b){if(b==null)return!1
if(!(b instanceof Z.d1))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.h([],[P.l])
y=this.a
if((y&$.$get$aI().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aH().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aG().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$b1().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$b2().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$aO().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bo().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$b3().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$b0().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.E(z,"|")},
t:{
aj:function(a){return new Z.d1(a)}}}}],["","",,D,{"^":"",cy:{"^":"a;"},bC:{"^":"a;0a,0b,0c,0d",
sam:function(a){this.a=H.m(a,"$isc",[{func:1,ret:-1,args:[D.w]}],"$asc")},
sbC:function(a){this.b=H.m(a,"$isc",[{func:1,ret:-1,args:[D.w]}],"$asc")},
h:function(a,b){var z={func:1,ret:-1,args:[D.w]}
H.f(b,z)
if(this.a==null)this.sam(H.h([],[z]))
z=this.a;(z&&C.a).h(z,b)},
H:function(a,b){var z,y
H.f(b,{func:1,ret:-1,args:[D.w]})
z=this.a
z=z==null?null:C.a.hb(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).H(z,b)||!1}else y=!1
return y},
J:function(a){var z,y,x,w
z={}
z.a=a
y=this.a
x=y==null
w=x?null:y.length===0
if(w==null?!0:w)w=!0
else w=!1
if(w)return!1
if(a==null){a=new D.w(null)
a.b=!0
z.a=a
w=a}else w=a
if(this.d>0){if(this.c==null)this.c=w
return!0}if(!x)C.a.B(y,new D.ht(z))
return!0},
i0:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.J(y)}}},
ak:function(){return this.i0(!0,!1)},
t:{
R:function(){var z=new D.bC()
z.sam(null)
z.sbC(null)
z.c=null
z.d=0
return z}}},ht:{"^":"b:30;a",
$1:function(a){var z
H.f(a,{func:1,ret:-1,args:[D.w]})
z=this.a.a
z.b
a.$1(z)}},w:{"^":"a;a,0b"},dP:{"^":"w;c,d,a,0b,$ti"},dQ:{"^":"w;c,d,a,0b,$ti"},x:{"^":"w;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}}],["","",,X,{"^":"",dv:{"^":"a;a,b",
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dv))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},dV:{"^":"a;a,b",
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dV))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}},ih:{"^":"a;0a,0b,0c,0d",
sfk:function(a){this.d=H.m(a,"$isel",[P.k],"$asel")},
hS:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
hO:function(a){this.c=a.b
this.d.H(0,a.a)
return!1}},e_:{"^":"c1;x,y,c,d,e,a,0b"},iw:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aO:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ag(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.p()
v=b.b
u=this.ch
if(typeof v!=="number")return v.p()
t=y.n(0,new V.T(x*w,v*u))
u=this.a.gaC()
s=new X.bk(a,V.av(),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
c5:function(a,b){this.r=a.a
return!1},
aY:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dV()
if(typeof z!=="number")return z.bj()
this.r=(z&~y)>>>0
return!1},
aX:function(a,b){var z=this.d
if(z==null)return!1
z.J(this.aO(a,b))
return!0},
hT:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaC()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.p()
t=a.b
s=this.cy
if(typeof t!=="number")return t.p()
w=new X.cI(new V.S(v*u,t*s),y,x,new P.ag(w,!1),this)
w.b=!0
z.J(w)
return!0},
f9:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ag(Date.now(),!1)
y=this.f
x=new X.e_(c,a,this.a.gaC(),b,z,this)
x.b=!0
y.J(x)
this.y=z
this.x=V.av()}},au:{"^":"a;a,b,c",
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.au))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},bk:{"^":"c1;x,y,z,Q,ch,c,d,e,a,0b"},iE:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bt:function(a,b,c){var z,y,x
z=new P.ag(Date.now(),!1)
y=this.a.gaC()
x=new X.bk(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
c5:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.J(this.bt(a,b,!0))
return!0},
aY:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dV()
if(typeof z!=="number")return z.bj()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.J(this.bt(a,b,!0))
return!0},
aX:function(a,b){var z=this.d
if(z==null)return!1
z.J(this.bt(a,b,!1))
return!0},
hU:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaC()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.p()
u=a.b
t=this.ch
if(typeof u!=="number")return u.p()
x=new X.cI(new V.S(w*v,u*t),y,b,new P.ag(x,!1),this)
x.b=!0
z.J(x)
return!0},
gda:function(){var z=this.b
if(z==null){z=D.R()
this.b=z}return z},
gdH:function(){var z=this.c
if(z==null){z=D.R()
this.c=z}return z},
gds:function(){var z=this.d
if(z==null){z=D.R()
this.d=z}return z}},cI:{"^":"c1;x,c,d,e,a,0b"},c1:{"^":"w;"},eu:{"^":"c1;x,y,z,Q,ch,c,d,e,a,0b"},jF:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
aO:function(a,b){var z,y,x,w
H.m(a,"$isc",[V.T],"$asc")
z=new P.ag(Date.now(),!1)
y=a.length>0?a[0]:V.av()
x=this.a.gaC()
w=new X.eu(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hR:function(a){var z
H.m(a,"$isc",[V.T],"$asc")
z=this.b
if(z==null)return!1
z.J(this.aO(a,!0))
return!0},
hP:function(a){var z
H.m(a,"$isc",[V.T],"$asc")
z=this.c
if(z==null)return!1
z.J(this.aO(a,!0))
return!0},
hQ:function(a){var z
H.m(a,"$isc",[V.T],"$asc")
z=this.d
if(z==null)return!1
z.J(this.aO(a,!1))
return!0}},k5:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
sey:function(a){this.z=H.m(a,"$isc",[[P.cQ,P.a]],"$asc")},
gaC:function(){var z=this.a
return V.eh(0,0,C.j.gd7(z).c,C.j.gd7(z).d)},
cD:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.dV(z,new X.au(y,a.altKey,a.shiftKey))},
ay:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.au(y,a.altKey,a.shiftKey)},
bJ:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.au(y,a.altKey,a.shiftKey)},
ao:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.F()
v=z.top
if(typeof x!=="number")return x.F()
return new V.T(y-w,x-v)},
aP:function(a){return new V.S(a.movementX,a.movementY)},
bE:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.h([],[V.T])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v){u=x[v]
t=C.e.af(u.pageX)
C.e.af(u.pageY)
s=z.left
C.e.af(u.pageX)
C.a.h(y,new V.T(t-s,C.e.af(u.pageY)-z.top))}return y},
al:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dv(z,new X.au(y,a.altKey,a.shiftKey))},
bw:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.F()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.F()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
iG:[function(a){this.f=!0},"$1","gf6",4,0,16],
iA:[function(a){this.f=!1},"$1","gf0",4,0,16],
iD:[function(a){H.e(a,"$isan")
if(this.f&&this.bw(a))a.preventDefault()},"$1","gf3",4,0,9],
iI:[function(a){var z
H.e(a,"$isbh")
if(!this.f)return
z=this.cD(a)
this.b.hS(z)},"$1","gf8",4,0,23],
iH:[function(a){var z
H.e(a,"$isbh")
if(!this.f)return
z=this.cD(a)
this.b.hO(z)},"$1","gf7",4,0,23],
iJ:[function(a){var z,y,x,w
H.e(a,"$isan")
z=this.a
z.focus()
this.f=!0
this.ay(a)
if(this.x){y=this.al(a)
x=this.aP(a)
if(this.d.c5(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.al(a)
w=this.ao(a)
if(this.c.c5(y,w))a.preventDefault()},"$1","gfa",4,0,9],
iL:[function(a){var z,y,x
H.e(a,"$isan")
this.ay(a)
z=this.al(a)
if(this.x){y=this.aP(a)
if(this.d.aY(z,y))a.preventDefault()
return}if(this.r)return
x=this.ao(a)
if(this.c.aY(z,x))a.preventDefault()},"$1","gfc",4,0,9],
iF:[function(a){var z,y,x
H.e(a,"$isan")
if(!this.bw(a)){this.ay(a)
z=this.al(a)
if(this.x){y=this.aP(a)
if(this.d.aY(z,y))a.preventDefault()
return}if(this.r)return
x=this.ao(a)
if(this.c.aY(z,x))a.preventDefault()}},"$1","gf5",4,0,9],
iK:[function(a){var z,y,x
H.e(a,"$isan")
this.ay(a)
z=this.al(a)
if(this.x){y=this.aP(a)
if(this.d.aX(z,y))a.preventDefault()
return}if(this.r)return
x=this.ao(a)
if(this.c.aX(z,x))a.preventDefault()},"$1","gfb",4,0,9],
iE:[function(a){var z,y,x
H.e(a,"$isan")
if(!this.bw(a)){this.ay(a)
z=this.al(a)
if(this.x){y=this.aP(a)
if(this.d.aX(z,y))a.preventDefault()
return}if(this.r)return
x=this.ao(a)
if(this.c.aX(z,x))a.preventDefault()}},"$1","gf4",4,0,9],
iM:[function(a){var z,y
H.e(a,"$isbp")
this.ay(a)
z=new V.S((a&&C.C).ghi(a),C.C.ghj(a)).l(0,180)
if(this.x){if(this.d.hT(z))a.preventDefault()
return}if(this.r)return
y=this.ao(a)
if(this.c.hU(z,y))a.preventDefault()},"$1","gfd",4,0,34],
iN:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.al(this.y)
x=this.ao(this.y)
this.d.f9(y,x,z)}},"$1","gfe",4,0,16],
iR:[function(a){var z
H.e(a,"$isb_")
this.a.focus()
this.f=!0
this.bJ(a)
z=this.bE(a)
if(this.e.hR(z))a.preventDefault()},"$1","gfj",4,0,17],
iP:[function(a){var z
H.e(a,"$isb_")
this.bJ(a)
z=this.bE(a)
if(this.e.hP(z))a.preventDefault()},"$1","gfh",4,0,17],
iQ:[function(a){var z
H.e(a,"$isb_")
this.bJ(a)
z=this.bE(a)
if(this.e.hQ(z))a.preventDefault()},"$1","gfi",4,0,17]}}],["","",,V,{"^":"",
nw:[function(a,b){if(typeof b!=="number")return b.F()
if(typeof a!=="number")return H.p(a)
return Math.abs(b-a)<=1e-9},"$2","iD",8,0,36],
nq:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.e.b4(a-b,z)
return(a<0?a+z:a)+b},
A:function(a,b,c){if(a==null)return C.b.aa("null",c)
return C.b.aa(C.e.dG($.n.$2(a,0)?0:a,b),c+b+1)},
ck:function(a,b,c){var z,y,x,w,v
H.m(a,"$isc",[P.o],"$asc")
z=H.h([],[P.l])
for(y=0,x=0;x<4;++x){w=V.A(a[x],b,c)
y=Math.max(y,w.length)
C.a.h(z,w)}for(v=z.length-1;v>=0;--v){if(v>=z.length)return H.i(z,v)
C.a.u(z,v,C.b.aa(z[v],y))}return z},
ar:{"^":"a;a,b,c",
n:function(a,b){var z,y,x
z=this.a+b.a
y=this.b+b.b
x=this.c+b.c
if(z<0)z=0
else if(z>1)z=1
if(y<0)y=0
else if(y>1)y=1
if(x<0)x=0
else if(x>1)x=1
return new V.ar(z,y,x)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ar))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"},
t:{
dA:function(a,b,c){var z,y,x,w,v,u,t,s
a*=6
z=C.e.bf(a)
y=a-z
x=b*(1-c)
w=b*(1-c*y)
v=b*(1-c*(1-y))
switch(z){case 0:if(b<0)u=0
else u=b>1?1:b
if(v<0)t=0
else t=v>1?1:v
if(x<0)s=0
else s=x>1?1:x
return new V.ar(u,t,s)
case 1:if(w<0)u=0
else u=w>1?1:w
if(b<0)t=0
else t=b>1?1:b
if(x<0)s=0
else s=x>1?1:x
return new V.ar(u,t,s)
case 2:if(x<0)u=0
else u=x>1?1:x
if(b<0)t=0
else t=b>1?1:b
if(v<0)s=0
else s=v>1?1:v
return new V.ar(u,t,s)
case 3:if(x<0)u=0
else u=x>1?1:x
if(w<0)t=0
else t=w>1?1:w
if(b<0)s=0
else s=b>1?1:b
return new V.ar(u,t,s)
case 4:if(v<0)u=0
else u=v>1?1:v
if(x<0)t=0
else t=x>1?1:x
if(b<0)s=0
else s=b>1?1:b
return new V.ar(u,t,s)
default:if(b<0)u=0
else u=b>1?1:b
if(x<0)t=0
else t=x>1?1:x
if(w<0)s=0
else s=w>1?1:w
return new V.ar(u,t,s)}}}},
z:{"^":"a;a,b,c,d",
ce:function(a){return H.h([this.a,this.b,this.c,this.d],[P.o])},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.z))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+", "+V.A(this.d,3,0)+"]"}},
bj:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
cf:function(a,b){var z=H.h([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.o])
return z},
p:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.e(a7,"$isbj")
z=this.a
y=a7.a
x=this.b
w=a7.e
v=this.c
u=a7.y
if(typeof u!=="number")return H.p(u)
t=this.d
s=a7.cx
r=a7.b
q=a7.f
p=a7.z
if(typeof p!=="number")return H.p(p)
o=a7.cy
n=a7.c
m=a7.r
l=a7.Q
if(typeof l!=="number")return H.p(l)
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
if(typeof b!=="number")return b.p()
a=this.z
if(typeof a!=="number")return a.p()
a0=this.Q
if(typeof a0!=="number")return a0.p()
a1=this.ch
a2=this.cx
a3=this.cy
a4=this.db
a5=this.dx
return V.aD(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bj))return!1
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
i:function(a){return this.M()},
df:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.o]
y=V.ck(H.h([this.a,this.e,this.y,this.cx],z),b,c)
x=V.ck(H.h([this.b,this.f,this.z,this.cy],z),b,c)
w=V.ck(H.h([this.c,this.r,this.Q,this.db],z),b,c)
v=V.ck(H.h([this.d,this.x,this.ch,this.dx],z),b,c)
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
M:function(){return this.df("",3,0)},
C:function(a){return this.df(a,3,0)},
t:{
c0:function(){var z=$.e1
if(z==null){z=V.aD(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.e1=z}return z},
aD:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bj(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)}}},
T:{"^":"a;a,b",
n:function(a,b){return new V.T(this.a+b.a,this.b+b.b)},
F:function(a,b){return new V.T(this.a-b.a,this.b-b.b)},
l:function(a,b){if($.n.$2(b,0))return V.av()
return new V.T(this.a/b,this.b/b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"},
t:{
av:function(){var z=$.e8
if(z==null){z=new V.T(0,0)
$.e8=z}return z}}},
I:{"^":"a;a,b,c",
n:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.n()
if(typeof w!=="number")return H.p(w)
return new V.I(this.a+z,this.b+y,x+w)},
F:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.F()
if(typeof w!=="number")return H.p(w)
return new V.I(this.a-z,this.b-y,x-w)},
p:function(a,b){var z=this.c
if(typeof z!=="number")return z.p()
return new V.I(this.a*b,this.b*b,z*b)},
l:function(a,b){var z
if($.n.$2(b,0))return V.ea()
z=this.c
if(typeof z!=="number")return z.l()
return new V.I(this.a/b,this.b/b,z/b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.I))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"},
t:{
ea:function(){var z=$.e9
if(z==null){z=new V.I(0,0,0)
$.e9=z}return z}}},
ao:{"^":"a;a,b,c,d",
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ao))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+", "+V.A(this.d,3,0)+"]"},
t:{
ec:function(){var z=$.eb
if(z==null){z=new V.ao(0,0,0,0)
$.eb=z}return z}}},
eg:{"^":"a;a,b,c,d",
ga4:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eg))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+", "+V.A(this.d,3,0)+"]"},
t:{
eh:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eg(a,b,c,d)}}},
cM:{"^":"a;a,b,c,d,e,f",
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cM))return!1
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
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+", "+V.A(this.d,3,0)+", "+V.A(this.e,3,0)+", "+V.A(this.f,3,0)+"]"},
t:{
ej:function(a,b,c,d,e,f){return new V.cM(a,b,c,d,e,f)}}},
S:{"^":"a;a,b",
dq:[function(a){return Math.sqrt(this.v(this))},"$0","gq",1,0,14],
v:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.p()
if(typeof y!=="number")return H.p(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.p()
if(typeof w!=="number")return H.p(w)
return z*y+x*w},
p:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.p()
y=this.b
if(typeof y!=="number")return y.p()
return new V.S(z*b,y*b)},
l:function(a,b){var z,y
if($.n.$2(b,0)){z=$.eN
if(z==null){z=new V.S(0,0)
$.eN=z}return z}z=this.a
if(typeof z!=="number")return z.l()
y=this.b
if(typeof y!=="number")return y.l()
return new V.S(z/b,y/b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}},
u:{"^":"a;a,b,c",
dq:[function(a){return Math.sqrt(this.v(this))},"$0","gq",1,0,14],
v:function(a){var z,y
z=this.c
y=a.c
if(typeof z!=="number")return z.p()
if(typeof y!=="number")return H.p(y)
return this.a*a.a+this.b*a.b+z*y},
c1:function(a,b){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=a.c
if(typeof w!=="number")return w.F()
if(typeof x!=="number")return H.p(x)
return new V.u(z+b*(a.a-z),y+b*(a.b-y),x+b*(w-x))},
ad:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
if(typeof y!=="number")return H.p(y)
x=this.c
w=a.b
if(typeof x!=="number")return x.p()
v=a.a
u=this.a
return new V.u(z*y-x*w,x*v-u*y,u*w-z*v)},
n:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.n()
if(typeof w!=="number")return H.p(w)
return new V.u(this.a+z,this.b+y,x+w)},
K:function(a){var z=this.c
if(typeof z!=="number")return z.K()
return new V.u(-this.a,-this.b,-z)},
p:function(a,b){var z=this.c
if(typeof z!=="number")return z.p()
return new V.u(this.a*b,this.b*b,z*b)},
l:function(a,b){var z
if($.n.$2(b,0))return V.O()
z=this.c
if(typeof z!=="number")return z.l()
return new V.u(this.a/b,this.b/b,z/b)},
dn:function(){if(!$.n.$2(0,this.a))return!1
if(!$.n.$2(0,this.b))return!1
if(!$.n.$2(0,this.c))return!1
return!0},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.u))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"},
t:{
O:function(){var z=$.eS
if(z==null){z=new V.u(0,0,0)
$.eS=z}return z},
d_:function(){var z=$.eP
if(z==null){z=new V.u(1,0,0)
$.eP=z}return z},
eT:function(){var z=$.eO
if(z==null){z=new V.u(0,0,-1)
$.eO=z}return z}}},
bO:{"^":"a;a,b,c,d",
dq:[function(a){var z,y,x,w
z=this.a
y=this.b
x=this.c
w=this.d
return Math.sqrt(z*z+y*y+x*x+w*w)},"$0","gq",1,0,14],
l:function(a,b){var z
if($.n.$2(b,0)){z=$.eU
if(z==null){z=new V.bO(0,0,0,0)
$.eU=z}return z}return new V.bO(this.a/b,this.b/b,this.c/b,this.d/b)},
A:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bO))return!1
z=b.a
if(!$.n.$2(z,this.a))return!1
z=b.b
if(!$.n.$2(z,this.b))return!1
z=b.c
if(!$.n.$2(z,this.c))return!1
z=b.d
if(!$.n.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+", "+V.A(this.d,3,0)+"]"}}}],["","",,U,{"^":"",ha:{"^":"cy;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bp:function(a){var z=V.nq(a,this.c,this.b)
return z},
gD:function(){var z=this.y
if(z==null){z=D.R()
this.y=z}return z},
S:function(a){var z=this.y
if(!(z==null))z.J(a)},
scg:function(a,b){},
sc2:function(a){var z,y
z=this.b
if(!$.n.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bp(z)}z=new D.x("maximumLocation",y,this.b,this,[P.o])
z.b=!0
this.S(z)}},
sc4:function(a){var z,y
z=this.c
if(!$.n.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bp(z)}z=new D.x("minimumLocation",y,this.c,this,[P.o])
z.b=!0
this.S(z)}},
sT:function(a,b){var z,y
b=this.bp(b)
z=this.d
if(!$.n.$2(z,b)){y=this.d
this.d=b
z=new D.x("location",y,b,this,[P.o])
z.b=!0
this.S(z)}},
sc3:function(a){var z,y,x
z=this.e
if(!$.n.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.x("maximumVelocity",y,a,this,[P.o])
z.b=!0
this.S(z)}},
sU:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.n.$2(z,a)){x=this.f
this.f=a
z=new D.x("velocity",x,a,this,[P.o])
z.b=!0
this.S(z)}},
sbX:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.n.$2(z,a)){y=this.x
this.x=a
z=new D.x("dampening",y,a,this,[P.o])
z.b=!0
this.S(z)}},
aK:function(a){var z,y,x,w
z=this.f
if($.n.$2(z,0)){z=this.r
z=!$.n.$2(z,0)}else z=!0
if(z){y=this.f+this.r*a
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sT(0,this.d+y*a)
z=this.x
if(!$.n.$2(z,0)){w=y*Math.pow(1-this.x,a)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sU(y)}},
t:{
cA:function(){var z=new U.ha()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dB:{"^":"aa;0a,0b",
gD:function(){var z=this.b
if(z==null){z=D.R()
this.b=z}return z},
aL:function(a,b){return this.a},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dB))return!1
return J.B(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")}},dM:{"^":"a6;0e,0f,0r,0a,0b,0c,0d",
gD:function(){var z=this.e
if(z==null){z=D.R()
this.e=z}return z},
S:[function(a){var z
H.e(a,"$isw")
z=this.e
if(!(z==null))z.J(a)},function(){return this.S(null)},"ac","$1","$0","gax",0,2,6],
iz:[function(a,b){var z,y,x,w,v,u,t,s
z=U.aa
H.m(b,"$isr",[z],"$asr")
for(y=b.length,x=this.gax(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=b[u]
if(t!=null){s=t.gD()
s.toString
H.f(x,w)
if(s.a==null)s.sam(H.h([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.dP(a,b,this,[z])
z.b=!0
this.S(z)},"$2","gf_",8,0,24],
iO:[function(a,b){var z,y,x
z=U.aa
H.m(b,"$isr",[z],"$asr")
for(y=b.gY(b),x=this.gax();y.G();)y.gL().gD().H(0,x)
z=new D.dQ(a,b,this,[z])
z.b=!0
this.S(z)},"$2","gfg",8,0,24],
aL:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(typeof z!=="number")return z.N()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.aA(z,z.length,0,[H.q(z,0)]),x=null;z.G();){y=z.d
if(y!=null){w=y.aL(a,b)
if(w!=null)x=x==null?w:w.p(0,x)}}this.f=x==null?V.c0():x
z=this.e
if(!(z==null))z.ak()}return this.f},
A:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dM))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.i(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.i(w,y)
if(!J.B(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asr:function(){return[U.aa]},
$asa6:function(){return[U.aa]},
$isaa:1},aa:{"^":"cy;"},k6:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gD:function(){var z=this.cy
if(z==null){z=D.R()
this.cy=z}return z},
S:[function(a){var z
H.e(a,"$isw")
z=this.cy
if(!(z==null))z.J(a)},function(){return this.S(null)},"ac","$1","$0","gax",0,2,6],
aQ:function(a){if(this.a!=null)return!1
this.a=a
a.c.gda().h(0,this.gbx())
this.a.c.gds().h(0,this.gby())
this.a.c.gdH().h(0,this.gbz())
return!0},
eV:[function(a){H.e(a,"$isw")
if(!J.B(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbx",4,0,5],
eW:[function(a){var z,y,x,w,v,u,t
a=H.a9(H.e(a,"$isw"),"$isbk")
if(!this.y)return
if(this.x){z=a.d.F(0,a.y)
z=new V.S(z.a,z.b)
z=z.v(z)
y=this.r
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.F(0,a.y)
z=new V.S(y.a,y.b).p(0,2).l(0,z.ga4())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.p()
x=this.e
if(typeof x!=="number")return H.p(x)
y.sU(z*10*x)}else{z=a.c
y=a.d
x=y.F(0,a.y)
w=new V.S(x.a,x.b).p(0,2).l(0,z.ga4())
x=this.b
v=w.a
if(typeof v!=="number")return v.K()
u=this.e
if(typeof u!=="number")return H.p(u)
t=this.z
if(typeof t!=="number")return H.p(t)
x.sT(0,-v*u+t)
this.b.sU(0)
y=y.F(0,a.z)
this.Q=new V.S(y.a,y.b).p(0,2).l(0,z.ga4())}this.ac()},"$1","gby",4,0,5],
eX:[function(a){var z,y,x
H.e(a,"$isw")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.v(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.p()
x=this.e
if(typeof x!=="number")return H.p(x)
z.sU(y*10*x)
this.ac()}},"$1","gbz",4,0,5],
aL:function(a,b){var z,y,x,w,v
z=this.ch
y=a.e
if(typeof z!=="number")return z.N()
if(z<y){this.ch=y
x=a.y
this.b.aK(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.aD(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isaa:1},k7:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gD:function(){var z=this.fx
if(z==null){z=D.R()
this.fx=z}return z},
S:[function(a){var z
H.e(a,"$isw")
z=this.fx
if(!(z==null))z.J(a)},function(){return this.S(null)},"ac","$1","$0","gax",0,2,6],
aQ:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gda().h(0,this.gbx())
this.a.c.gds().h(0,this.gby())
this.a.c.gdH().h(0,this.gbz())
z=this.a.d
y=z.f
if(y==null){y=D.R()
z.f=y
z=y}else z=y
z.h(0,this.geR())
z=this.a.d
y=z.d
if(y==null){y=D.R()
z.d=y
z=y}else z=y
z.h(0,this.geS())
z=this.a.e
y=z.b
if(y==null){y=D.R()
z.b=y
z=y}else z=y
z.h(0,this.gfN())
z=this.a.e
y=z.d
if(y==null){y=D.R()
z.d=y
z=y}else z=y
z.h(0,this.gfM())
z=this.a.e
y=z.c
if(y==null){y=D.R()
z.c=y
z=y}else z=y
z.h(0,this.gfL())
return!0},
ah:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.K()
z=-z}if(this.r){if(typeof y!=="number")return y.K()
y=-y}return new V.S(z,y)},
eV:[function(a){a=H.a9(H.e(a,"$isw"),"$isbk")
if(!J.B(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbx",4,0,5],
eW:[function(a){var z,y,x,w,v,u,t
a=H.a9(H.e(a,"$isw"),"$isbk")
if(!this.cx)return
if(this.ch){z=a.d.F(0,a.y)
z=new V.S(z.a,z.b)
z=z.v(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.F(0,a.y)
z=this.ah(new V.S(y.a,y.b).p(0,2).l(0,z.ga4()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.K()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sU(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.K()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sU(-z*10*y)}else{z=a.c
y=a.d
x=y.F(0,a.y)
w=this.ah(new V.S(x.a,x.b).p(0,2).l(0,z.ga4()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sT(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sT(0,-u*v+x)
this.b.sU(0)
this.c.sU(0)
y=y.F(0,a.z)
this.dx=this.ah(new V.S(y.a,y.b).p(0,2).l(0,z.ga4()))}this.ac()},"$1","gby",4,0,5],
eX:[function(a){var z,y,x
H.e(a,"$isw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.v(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.K()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sU(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.K()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sU(-y*10*z)
this.ac()}},"$1","gbz",4,0,5],
iv:[function(a){if(H.a9(H.e(a,"$isw"),"$ise_").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","geR",4,0,5],
iw:[function(a){var z,y,x,w,v,u,t
a=H.a9(H.e(a,"$isw"),"$isbk")
if(!J.B(this.d,a.x.b))return
z=a.c
y=a.d
x=y.F(0,a.y)
w=this.ah(new V.S(x.a,x.b).p(0,2).l(0,z.ga4()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sT(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sT(0,-u*v+x)
this.b.sU(0)
this.c.sU(0)
y=y.F(0,a.z)
this.dx=this.ah(new V.S(y.a,y.b).p(0,2).l(0,z.ga4()))
this.ac()},"$1","geS",4,0,5],
iW:[function(a){H.e(a,"$isw")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfN",4,0,5],
iV:[function(a){var z,y,x,w,v,u,t
a=H.a9(H.e(a,"$isw"),"$iseu")
if(!this.cx)return
if(this.ch){z=a.d.F(0,a.y)
z=new V.S(z.a,z.b)
z=z.v(z)
y=this.Q
if(typeof y!=="number")return H.p(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.F(0,a.y)
z=this.ah(new V.S(y.a,y.b).p(0,2).l(0,z.ga4()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.K()
x=this.y
if(typeof x!=="number")return H.p(x)
y.sU(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.K()
y=this.x
if(typeof y!=="number")return H.p(y)
x.sU(-z*10*y)}else{z=a.c
y=a.d
x=y.F(0,a.y)
w=this.ah(new V.S(x.a,x.b).p(0,2).l(0,z.ga4()))
x=this.c
v=w.a
if(typeof v!=="number")return v.K()
u=this.y
if(typeof u!=="number")return H.p(u)
t=this.cy
if(typeof t!=="number")return H.p(t)
x.sT(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.K()
v=this.x
if(typeof v!=="number")return H.p(v)
x=this.db
if(typeof x!=="number")return H.p(x)
t.sT(0,-u*v+x)
this.b.sU(0)
this.c.sU(0)
y=y.F(0,a.z)
this.dx=this.ah(new V.S(y.a,y.b).p(0,2).l(0,z.ga4()))}this.ac()},"$1","gfM",4,0,5],
iU:[function(a){var z,y,x
H.e(a,"$isw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.v(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.K()
x=this.y
if(typeof x!=="number")return H.p(x)
z.sU(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.K()
z=this.x
if(typeof z!=="number")return H.p(z)
x.sU(-y*10*z)
this.ac()}},"$1","gfL",4,0,5],
aL:function(a,b){var z,y,x,w,v
z=this.dy
y=a.e
if(typeof z!=="number")return z.N()
if(z<y){this.dy=y
x=a.y
this.c.aK(x)
this.b.aK(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.aD(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.p(0,V.aD(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isaa:1},k8:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gD:function(){var z=this.r
if(z==null){z=D.R()
this.r=z}return z},
S:function(a){var z=this.r
if(!(z==null))z.J(a)},
aQ:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.R()
z.e=y
z=y}else z=y
y=this.geY()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.R()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
ix:[function(a){var z,y,x,w
H.e(a,"$isw")
if(!J.B(this.b,this.a.b.c))return
H.a9(a,"$iscI")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.p()
w=z+y*x
if(z!==w){this.d=w
z=new D.x("zoom",z,w,this,[P.o])
z.b=!0
this.S(z)}},"$1","geY",4,0,5],
aL:function(a,b){var z,y,x
z=this.e
y=a.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.aD(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isaa:1}}],["","",,M,{"^":"",hr:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
sea:function(a,b){this.d=H.m(b,"$isa6",[E.as],"$asa6")},
at:[function(a){var z
H.e(a,"$isw")
z=this.x
if(!(z==null))z.J(a)},function(){return this.at(null)},"ii","$1","$0","gag",0,2,6],
iB:[function(a,b){var z,y,x,w,v,u,t,s
z=E.as
H.m(b,"$isr",[z],"$asr")
for(y=b.length,x=this.gag(),w={func:1,ret:-1,args:[D.w]},v=[w],u=0;u<b.length;b.length===y||(0,H.D)(b),++u){t=b[u]
if(t!=null){if(t.gab()==null){s=new D.bC()
s.sam(null)
s.sbC(null)
s.c=null
s.d=0
t.sab(s)}s=t.gab()
s.toString
H.f(x,w)
if(s.a==null)s.sam(H.h([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.dP(a,b,this,[z])
z.b=!0
this.at(z)},"$2","gf1",8,0,11],
iC:[function(a,b){var z,y,x
z=E.as
H.m(b,"$isr",[z],"$asr")
for(y=b.gY(b),x=this.gag();y.G();)y.gL().gD().H(0,x)
z=new D.dQ(a,b,this,[z])
z.b=!0
this.at(z)},"$2","gf2",8,0,11],
sdE:function(a){var z,y
z=this.c
if(z==null?a!=null:z!==a){if(z!=null)z.gD().H(0,this.gag())
y=this.c
this.c=a
if(a!=null)a.gD().h(0,this.gag())
z=new D.x("technique",y,this.c,this,[O.c5])
z.b=!0
this.at(z)}},
gD:function(){var z=this.x
if(z==null){z=D.R()
this.x=z}return z},
aI:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
a.dC(this.c)
z=this.b
z.toString
y=a.a
C.c.h1(y,36160,null)
C.c.ap(y,2884)
C.c.ap(y,2929)
C.c.hk(y,513)
x=y.drawingBufferWidth
w=y.drawingBufferHeight
v=z.r
u=v.a
if(typeof x!=="number")return H.p(x)
t=C.e.af(u*x)
u=v.b
if(typeof w!=="number")return H.p(w)
s=C.e.af(u*w)
u=C.e.af(v.c*x)
a.c=u
v=C.e.af(v.d*w)
a.d=v
C.c.ig(y,t,s,u,v)
C.c.h8(y,z.c)
z=z.a
C.c.h7(y,z.a,z.b,z.c,z.d)
C.c.h6(y,16640)
z=this.a
y=a.c
v=a.d
u=z.c
r=z.d
q=z.e
p=q-r
o=1/Math.tan(u*0.5)
n=V.aD(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.dB(n)
y=$.e7
if(y==null){y=V.ea()
v=$.eQ
if(v==null){v=new V.u(0,1,0)
$.eQ=v}u=V.eT()
m=u.l(0,Math.sqrt(u.v(u)))
v=v.ad(m)
l=v.l(0,Math.sqrt(v.v(v)))
k=m.ad(l)
j=new V.u(y.a,y.b,y.c)
i=l.K(0).v(j)
h=k.K(0).v(j)
g=m.K(0).v(j)
y=V.aD(l.a,k.a,m.a,i,l.b,k.b,m.b,h,l.c,k.c,m.c,g,0,0,0,1)
$.e7=y
f=y}else f=y
z=z.b
if(z!=null){e=z.a
if(e!=null)f=e.p(0,f)}a.db.dB(f)
for(z=this.d.a,z=new J.aA(z,z.length,0,[H.q(z,0)]);z.G();)z.d.aK(a)
for(z=this.d.a,z=new J.aA(z,z.length,0,[H.q(z,0)]);z.G();)z.d.aI(a)
this.a.toString
a.cy.c6()
a.db.c6()
this.b.toString
a.dA()},
$isnG:1}}],["","",,A,{"^":"",dn:{"^":"a;a,b,c"},fY:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
hn:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
C.c.dc(w.a,w.c)}},
hl:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
C.c.d9(w.a,w.c)}}},hG:{"^":"cO;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,a,b,0c,0d,0e,0f,0r,0x,0y"},cO:{"^":"dq;",
e4:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
cE:function(a,b){var z,y,x
z=this.a
y=C.c.he(z,b)
C.c.dX(z,y,a)
C.c.ha(z,y)
if(!H.fw(C.c.dT(z,y,35713))){x=C.c.dS(z,y)
C.c.hh(z,y)
throw H.d(P.K("Error compiling shader '"+H.j(y)+"': "+H.j(x)))}return y},
fA:function(){var z,y,x,w,v,u
z=H.h([],[A.dn])
y=this.a
x=H.a5(C.c.bl(y,this.r,35721))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=C.c.dN(y,this.r,w)
u=C.c.dP(y,this.r,v.name)
C.a.h(z,new A.dn(y,v.name,u))}this.x=new A.fY(z)},
fC:function(){var z,y,x,w,v,u
z=H.h([],[A.a7])
y=this.a
x=H.a5(C.c.bl(y,this.r,35718))
if(typeof x!=="number")return H.p(x)
w=0
for(;w<x;++w){v=C.c.dO(y,this.r,w)
u=C.c.dU(y,this.r,v.name)
C.a.h(z,this.hf(v.type,v.size,v.name,u))}this.y=new A.jP(z)},
aw:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.jJ(z,y,b,c)
else return A.cV(z,y,b,a,c)},
eu:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.jT(z,y,b,c)
else return A.cV(z,y,b,a,c)},
ev:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.jU(z,y,b,c)
else return A.cV(z,y,b,a,c)},
ba:function(a,b){return new P.f1(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
hf:function(a,b,c,d){switch(a){case 5120:return this.aw(b,c,d)
case 5121:return this.aw(b,c,d)
case 5122:return this.aw(b,c,d)
case 5123:return this.aw(b,c,d)
case 5124:return this.aw(b,c,d)
case 5125:return this.aw(b,c,d)
case 5126:return new A.eG(this.a,this.r,c,d)
case 35664:return new A.jL(this.a,this.r,c,d)
case 35665:return new A.eH(this.a,this.r,c,d)
case 35666:return new A.cW(this.a,this.r,c,d)
case 35667:return new A.jM(this.a,this.r,c,d)
case 35668:return new A.jN(this.a,this.r,c,d)
case 35669:return new A.jO(this.a,this.r,c,d)
case 35674:return new A.jR(this.a,this.r,c,d)
case 35675:return new A.jS(this.a,this.r,c,d)
case 35676:return new A.c7(this.a,this.r,c,d)
case 35678:return this.eu(b,c,d)
case 35680:return this.ev(b,c,d)
case 35670:throw H.d(this.ba("BOOL",c))
case 35671:throw H.d(this.ba("BOOL_VEC2",c))
case 35672:throw H.d(this.ba("BOOL_VEC3",c))
case 35673:throw H.d(this.ba("BOOL_VEC4",c))
default:throw H.d(P.K("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}},a7:{"^":"a;"},jP:{"^":"a;a",
j:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
i:function(a){return this.M()},
hw:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.D)(z),++w)x+=z[w].i(0)+a
return x},
M:function(){return this.hw("\n")}},jJ:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform1i: "+H.j(this.c)}},jM:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform2i: "+H.j(this.c)}},jN:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform3i: "+H.j(this.c)}},jO:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform4i: "+H.j(this.c)}},jK:{"^":"a7;0e,0f,a,b,c,d",
sfR:function(a){this.e=H.m(a,"$isc",[P.k],"$asc")},
i:function(a){return"Uniform1iv: "+H.j(this.c)},
t:{
cV:function(a,b,c,d,e){var z=new A.jK(a,b,c,e)
z.f=d
z.sfR(P.it(d,0,!1,P.k))
return z}}},eG:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform1f: "+H.j(this.c)}},jL:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform2f: "+H.j(this.c)}},eH:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform3f: "+H.j(this.c)}},cW:{"^":"a7;a,b,c,d",
b5:function(a){return C.c.ib(this.a,this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.j(this.c)}},jR:{"^":"a7;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}},jS:{"^":"a7;a,b,c,d",
i:function(a){return"UniformMat3: "+H.j(this.c)}},c7:{"^":"a7;a,b,c,d",
bo:function(a){var z=new Float32Array(H.ce(H.m(a,"$isc",[P.o],"$asc")))
C.c.ic(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.j(this.c)}},jT:{"^":"a7;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.j(this.c)}},jU:{"^":"a7;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}}],["","",,F,{"^":"",
ch:function(a,b,c,d){var z
H.f(c,{func:1,ret:-1,args:[F.v,P.o,P.o]})
z=F.U()
F.bt(z,b,c,d,a,1,0,0,1)
F.bt(z,b,c,d,a,0,1,0,3)
F.bt(z,b,c,d,a,0,0,1,2)
F.bt(z,b,c,d,a,-1,0,0,0)
F.bt(z,b,c,d,a,0,-1,0,0)
F.bt(z,b,c,d,a,0,0,-1,3)
z.a7()
return z},
cd:function(a){var z,y
z=a.a>0?1:0
if(a.b>0)z+=2
y=a.c
if(typeof y!=="number")return y.b3()
return(y>0?z+4:z)*2},
bt:function(a,b,c,d,e,f,g,h,i){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z={}
H.f(c,{func:1,ret:-1,args:[F.v,P.o,P.o]})
y=f+g
x=y+h
w=g+h
v=h+f
u=new V.u(x,w+f,v+g)
z.a=u
t=f-g
s=g-h
r=h-f
q=new V.u(t+h,s+f,r+g)
z.b=q
p=new V.u(t-h,s-f,r-g)
z.c=p
o=new V.u(y-h,w-f,v-g)
z.d=o
if(x>0){z.d=q
z.b=o
x=q
y=o}else{x=o
y=q}for(v=x,x=y,y=u,w=p,n=0;n<i;++n,m=v,v=y,y=x,x=w,w=m){z.a=x
z.b=w
z.c=v
z.d=y}l=F.cd(y)
k=F.cd(z.b)
j=F.bT(d,e,new F.lC(z,F.cd(z.c),F.cd(z.d),k,l,c),b)
if(j!=null)a.aF(j)},
ci:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
H.f(e,{func:1,ret:P.o,args:[P.o]})
if(e==null)e=new F.m0()
if(f<3)return
z=F.U()
y=b?-1:1
x=-6.283185307179586/f
w=H.h([],[F.v])
v=z.a
u=new V.u(0,0,y)
u=u.l(0,Math.sqrt(u.v(u)))
C.a.h(w,v.fY(new V.ao(a,-1,-1,-1),new V.z(1,1,1,1),new V.I(0,0,d),new V.u(0,0,y),new V.T(0.5,0.5),u))
for(v=y*y,t=0;t<=f;++t){s=x*t
r=y*Math.sin(s)
q=Math.cos(s)
p=e.$1(t/f)
u=z.a
if(typeof p!=="number")return H.p(p)
o=new V.u(r,q,y).l(0,Math.sqrt(r*r+q*q+v))
if(r<0)n=0
else n=r>1?1:r
m=q<0
if(m)l=0
else l=q>1?1:q
if(m)m=0
else m=q>1?1:q
u.toString
k=F.ai(new V.ao(a,-1,-1,-1),null,new V.z(n,l,m,1),new V.I(r*p,q*p,d),new V.u(0,0,y),new V.T(r*0.5+0.5,q*0.5+0.5),o,null,0)
u.h(0,k)
C.a.h(w,k)}z.d.d0(w)
return z},
dd:function(a,b,c,d,e,f){return F.fx(!0,c,d,new F.lV(a,f),e)},
fx:function(a,b,c,d,e){var z
H.f(d,{func:1,ret:P.o,args:[P.o,P.o]})
if(e<3)return
if(c<1)return
z=F.bT(c,e,new F.lX(d),null)
if(z==null)return
z.a7()
z.bc()
if(b)z.aF(F.ci(3,!1,!1,1,new F.lY(d),e))
z.aF(F.ci(1,!0,!1,-1,new F.lZ(d),e))
return z},
fG:function(a,b){var z=F.bT(a,b,new F.mj(),null)
z.d.bh()
z.a7()
z.bc()
return z},
fF:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=F.U()
y=Math.sqrt(5)/2+0.5
x=F.a8(z,new V.u(-1,y,0))
w=F.a8(z,new V.u(1,y,0))
v=-y
u=F.a8(z,new V.u(-1,v,0))
t=F.a8(z,new V.u(1,v,0))
s=F.a8(z,new V.u(0,-1,v))
r=F.a8(z,new V.u(0,1,v))
q=F.a8(z,new V.u(0,-1,y))
p=F.a8(z,new V.u(0,1,y))
o=F.a8(z,new V.u(y,0,1))
n=F.a8(z,new V.u(y,0,-1))
m=F.a8(z,new V.u(v,0,1))
l=F.a8(z,new V.u(v,0,-1))
F.P(z,x,l,r,a)
F.P(z,x,r,w,a)
F.P(z,x,w,p,a)
F.P(z,x,p,m,a)
F.P(z,x,m,l,a)
F.P(z,w,r,n,a)
F.P(z,r,l,s,a)
F.P(z,l,m,u,a)
F.P(z,m,p,q,a)
F.P(z,p,w,o,a)
F.P(z,t,n,s,a)
F.P(z,t,s,u,a)
F.P(z,t,u,q,a)
F.P(z,t,q,o,a)
F.P(z,t,o,n,a)
F.P(z,s,n,r,a)
F.P(z,u,s,l,a)
F.P(z,q,u,m,a)
F.P(z,o,q,p,a)
F.P(z,n,o,w,a)
z.dr(new F.d0(),new F.kl())
return z},
a8:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
b=b.l(0,Math.sqrt(b.v(b)))
z=b.a
y=b.b
x=b.c
w=F.ai(null,null,null,new V.I(z,y,x),b,null,null,null,0)
v=a.hq(w,new F.d0())
if(v!=null)return v
u=z*0.5+0.5
t=y*0.5+0.5
if(typeof x!=="number")return x.p()
s=x*0.5+0.5
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
w.sa2(0,new V.z(u,t,s,1))
r=Math.sqrt(z*z+y*y)
q=Math.atan2(y,z)/1.5707963267948966
if(q<0)q=-q
p=Math.atan2(r,x)/3.141592653589793
w.scd(new V.T(q,p<0?-p:p))
a.a.h(0,w)
return w},
P:function(a,b,c,d,e){var z,y,x,w
if(e<=0)a.d.a1(0,b,d,c)
else{z=F.a8(a,b.r.n(0,c.r).p(0,0.5))
y=F.a8(a,c.r.n(0,d.r).p(0,0.5))
x=F.a8(a,d.r.n(0,b.r).p(0,0.5))
w=e-1
F.P(a,b,z,x,w)
F.P(a,z,c,y,w)
F.P(a,y,x,z,w)
F.P(a,x,y,d,w)}},
dk:function(a,b,c,d){var z,y
z={}
z.a=b
if(H.f(b,{func:1,ret:P.o,args:[P.o,P.o]})==null)z.a=new F.nk()
y=F.ch(a,null,new F.nl(z,c),d)
y.bc()
return y},
nn:function(a,b,c,d){return F.fy(c,a,d,b,new F.no())},
mh:function(a,b,c,d,e,f){return F.fy(d,a,e,b,new F.mi(f,c))},
fy:function(a,b,c,d,e){var z=F.bT(a,b,new F.lW(H.f(e,{func:1,ret:V.I,args:[P.o]}),d,b,c),null)
if(z==null)return
z.a7()
z.bc()
return z},
fD:function(a,b,c){var z={}
z.a=b
if(H.f(b,{func:1,ret:P.o,args:[P.o,P.o]})==null)z.a=new F.m7()
return F.bT(c,a,new F.m8(z),null)},
bT:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.f(c,{func:1,ret:-1,args:[F.v,P.o,P.o]})
if(a<1)return
if(b<1)return
z=F.U()
y=H.h([],[F.v])
for(x=0;x<=b;++x){w=x/b
v=z.a
if(w<0)u=0
else u=w>1?1:w
v.toString
t=F.ai(null,null,new V.z(u,0,0,1),null,null,new V.T(w,1),null,null,0)
v.h(0,t)
c.$3(t,w,0)
C.a.h(y,t.bW(d))}for(x=1;x<=a;++x){s=x/a
for(v=s>1,u=s<0,r=1-s,q=0;q<=b;++q){w=q/b
p=z.a
if(w<0)o=0
else o=w>1?1:w
if(u)n=0
else n=v?1:s
if(u)m=0
else m=v?1:s
p.toString
t=F.ai(null,null,new V.z(o,n,m,1),null,null,new V.T(w,r),null,null,0)
p.h(0,t)
c.$3(t,w,s)
C.a.h(y,t.bW(d))}}z.d.fX(a+1,b+1,y)
return z},
lC:{"^":"b:8;a,b,c,d,e,f",
$3:function(a,b,c){var z,y,x
z=this.a
y=z.a.c1(z.b,b).c1(z.d.c1(z.c,b),c)
a.sT(0,new V.I(y.a,y.b,y.c))
a.saZ(y.l(0,Math.sqrt(y.v(y))))
z=1-b
x=1-c
a.sbN(new V.ao(this.b+b*c,this.c+z*c,this.d+b*x,this.e+z*x))
z=this.f
if(z!=null)z.$3(a,b,c)}},
m0:{"^":"b:19;",
$1:function(a){return 1}},
lV:{"^":"b:10;a,b",
$2:function(a,b){var z=this.a
return z+b*(this.b-z)}},
lX:{"^":"b:8;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=6.283185307179586*b
y=Math.sin(z)
x=Math.cos(z)
w=-1+c*2
v=this.a.$2(b,c)
if(typeof v!=="number")return H.p(v)
y=-y*v
u=x*v
a.sT(0,new V.I(y,u,w))
u=new V.u(y,u,w)
a.saZ(u.l(0,Math.sqrt(u.v(u))))
a.sbN(new V.ao(1-c,2+c,-1,-1))}},
lY:{"^":"b:19;a",
$1:function(a){return this.a.$2(a,1)}},
lZ:{"^":"b:19;a",
$1:function(a){return this.a.$2(1-a,0)}},
mj:{"^":"b:8;",
$3:function(a,b,c){var z,y,x,w
z=c*3.141592653589793
y=Math.sin(z)
x=b*6.283185307179586
w=new V.u(Math.cos(x)*y,Math.cos(z),Math.sin(x)*y)
x=w.l(0,Math.sqrt(w.v(w)))
a.sT(0,new V.I(x.a,x.b,x.c))}},
nk:{"^":"b:10;",
$2:function(a,b){return 0}},
nl:{"^":"b:8;a,b",
$3:function(a,b,c){var z,y,x
z=this.a.a.$2(b,c)
if(typeof z!=="number")return H.p(z)
y=a.f
x=new V.u(y.a,y.b,y.c)
z=x.l(0,Math.sqrt(x.v(x))).p(0,this.b+z)
a.sT(0,new V.I(z.a,z.b,z.c))}},
no:{"^":"b:25;",
$1:function(a){return new V.I(Math.cos(a),Math.sin(a),0)}},
mi:{"^":"b:25;a,b",
$1:function(a){var z,y,x
z=this.a*a
y=2+Math.cos(z)
x=this.b*a
return new V.I(y*Math.cos(x)/2,y*Math.sin(x)/2,Math.sin(z)/2)}},
lW:{"^":"b:8;a,b,c,d",
$3:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=b*6.283185307179586
y=this.a
x=this.b
w=J.dl(y.$1(z),x)
x=J.dl(y.$1(z+3.141592653589793/this.c),x).F(0,w)
x=new V.u(x.a,x.b,x.c)
v=x.l(0,Math.sqrt(x.v(x)))
u=V.d_()
if(!J.B(v,u)){y=$.eR
if(y==null){y=new V.u(0,0,1)
$.eR=y
u=y}else u=y}y=v.ad(u)
t=y.l(0,Math.sqrt(y.v(y)))
y=t.ad(v)
u=y.l(0,Math.sqrt(y.v(y)))
s=c*6.283185307179586
y=Math.cos(s)
x=this.d
r=Math.sin(s)
y=u.p(0,y*x)
x=t.p(0,r*x)
r=y.c
q=x.c
if(typeof r!=="number")return r.F()
if(typeof q!=="number")return H.p(q)
a.sT(0,w.n(0,new V.I(y.a-x.a,y.b-x.b,r-q)))}},
m7:{"^":"b:10;",
$2:function(a,b){return 0}},
m8:{"^":"b:8;a",
$3:function(a,b,c){var z,y,x,w
z=b*2-1
y=c*2-1
a.sT(0,new V.I(z,y,this.a.a.$2(b,c)))
x=new V.u(z,y,1)
a.saZ(x.l(0,Math.sqrt(x.v(x))))
x=1-b
w=1-c
a.sbN(new V.ao(b*c,2+x*c,4+b*w,6+x*w))}},
C:{"^":"a;0a,0b,0c,0d,0e",
aS:function(){if(!this.gaT()){C.a.H(this.a.a.d.b,this)
this.a.a.R()}this.bG()
this.bH()
this.fo()},
bK:function(a){this.a=a
C.a.h(a.d.b,this)},
bL:function(a){this.b=a
C.a.h(a.d.c,this)},
fz:function(a){this.c=a
C.a.h(a.d.d,this)},
bG:function(){var z=this.a
if(z!=null){C.a.H(z.d.b,this)
this.a=null}},
bH:function(){var z=this.b
if(z!=null){C.a.H(z.d.c,this)
this.b=null}},
fo:function(){var z=this.c
if(z!=null){C.a.H(z.d.d,this)
this.c=null}},
gaT:function(){return this.a==null||this.b==null||this.c==null},
ei:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.O()
if(y!=null)v=v.n(0,y)
if(x!=null)v=v.n(0,x)
if(w!=null)v=v.n(0,w)
if(v.dn())return
return v.l(0,Math.sqrt(v.v(v)))},
eo:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.F(0,y)
z=new V.u(z.a,z.b,z.c)
v=z.l(0,Math.sqrt(z.v(z)))
z=w.F(0,y)
z=new V.u(z.a,z.b,z.c)
z=v.ad(z.l(0,Math.sqrt(z.v(z))))
return z.l(0,Math.sqrt(z.v(z)))},
bT:function(){if(this.d!=null)return!0
var z=this.ei()
if(z==null){z=this.eo()
if(z==null)return!1}this.d=z
this.a.a.R()
return!0},
eh:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=V.O()
if(y!=null)v=v.n(0,y)
if(x!=null)v=v.n(0,x)
if(w!=null)v=v.n(0,w)
if(v.dn())return
return v.l(0,Math.sqrt(v.v(v)))},
en:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.n.$2(n,0)){z=r.F(0,u)
z=new V.u(z.a,z.b,z.c)
m=z.l(0,Math.sqrt(z.v(z)))
if(o.a-p.a<0)m=m.K(0)}else{l=(z-q.b)/n
z=r.F(0,u).p(0,l).n(0,u).F(0,x)
z=new V.u(z.a,z.b,z.c)
m=z.l(0,Math.sqrt(z.v(z)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.K(0)}z=this.d
if(z!=null){k=z.l(0,Math.sqrt(z.v(z)))
z=k.ad(m)
z=z.l(0,Math.sqrt(z.v(z))).ad(k)
m=z.l(0,Math.sqrt(z.v(z)))}return m},
bR:function(){if(this.e!=null)return!0
var z=this.eh()
if(z==null){z=this.en()
if(z==null)return!1}this.e=z
this.a.a.R()
return!0},
au:function(a,b){var z=b.a
if(z==null)throw H.d(P.K("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.d(P.K("May not replace a face's vertex with a vertex attached to a different shape."))},
gh9:function(){if(J.B(this.a,this.b))return!0
if(J.B(this.b,this.c))return!0
if(J.B(this.c,this.a))return!0
return!1},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
C:function(a){var z,y
if(this.gaT())return a+"disposed"
z=a+C.b.aa(J.ab(this.a.e),0)+", "+C.b.aa(J.ab(this.b.e),0)+", "+C.b.aa(J.ab(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
M:function(){return this.C("")},
t:{
aU:function(a,b,c){var z,y,x
z=new F.C()
y=a.a
if(y==null)H.F(P.K("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.F(P.K("May not create a face with vertices attached to different shapes."))
z.bK(a)
z.bL(b)
z.fz(c)
C.a.h(z.a.a.d.b,z)
z.a.a.R()
return z}}},
hu:{"^":"a;"},
jo:{"^":"hu;",
aE:function(a,b,c){var z,y
z=b.a
z.a.a.m()
z=z.e
y=c.a
y.a.a.m()
if(z==y.e){z=b.b
z.a.a.m()
z=z.e
y=c.b
y.a.a.m()
if(z==y.e){z=b.c
z.a.a.m()
z=z.e
y=c.c
y.a.a.m()
y=z==y.e
z=y}else z=!1
return z}else{z=b.a
z.a.a.m()
z=z.e
y=c.b
y.a.a.m()
if(z==y.e){z=b.b
z.a.a.m()
z=z.e
y=c.c
y.a.a.m()
if(z==y.e){z=b.c
z.a.a.m()
z=z.e
y=c.a
y.a.a.m()
y=z==y.e
z=y}else z=!1
return z}else{z=b.a
z.a.a.m()
z=z.e
y=c.c
y.a.a.m()
if(z==y.e){z=b.b
z.a.a.m()
z=z.e
y=c.a
y.a.a.m()
if(z==y.e){z=b.c
z.a.a.m()
z=z.e
y=c.b
y.a.a.m()
y=z==y.e
z=y}else z=!1
return z}else return!1}}}},
at:{"^":"a;0a,0b",
aS:function(){if(!this.gaT()){C.a.H(this.a.a.c.b,this)
this.a.a.R()}this.bG()
this.bH()},
bK:function(a){this.a=a
C.a.h(a.c.b,this)},
bL:function(a){this.b=a
C.a.h(a.c.c,this)},
bG:function(){var z=this.a
if(z!=null){C.a.H(z.c.b,this)
this.a=null}},
bH:function(){var z=this.b
if(z!=null){C.a.H(z.c.c,this)
this.b=null}},
gaT:function(){return this.a==null||this.b==null},
au:function(a,b){var z=b.a
if(z==null)throw H.d(P.K("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==z)throw H.d(P.K("May not replace a line's vertex with a vertex attached to a different shape."))},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
C:function(a){if(this.gaT())return a+"disposed"
return a+C.b.aa(J.ab(this.a.e),0)+", "+C.b.aa(J.ab(this.b.e),0)},
M:function(){return this.C("")},
t:{
dW:function(a,b){var z,y,x
z=new F.at()
if(a==null)H.F(P.K("May not create a line with a null start vertex."))
if(b==null)H.F(P.K("May not create a line with a null end vertex."))
y=a.a
if(y==null)H.F(P.K("May not create a line with a start vertex which is not attached to a shape."))
x=b.a
if(y==null?x!=null:y!==x)H.F(P.K("May not create a line with vertices attached to different shapes."))
z.bK(a)
z.bL(b)
C.a.h(z.a.a.c.b,z)
z.a.a.R()
return z}}},
ij:{"^":"a;"},
jI:{"^":"ij;",
aE:function(a,b,c){var z,y
z=b.a
z.a.a.m()
z=z.e
y=c.a
y.a.a.m()
if(z==y.e){z=b.b
z.a.a.m()
z=z.e
y=c.b
y.a.a.m()
return z==y.e}else{z=b.a
z.a.a.m()
z=z.e
y=c.b
y.a.a.m()
if(z==y.e){z=b.b
z.a.a.m()
z=z.e
y=c.a
y.a.a.m()
return z==y.e}else return!1}}},
bI:{"^":"a;0a",
fw:function(a){this.a=a
C.a.h(a.b.b,this)},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
C:function(a){var z=this.a
if(z==null)return a+"disposed"
return a+C.b.aa(J.ab(z.e),0)},
M:function(){return this.C("")},
t:{
cL:function(a){var z=new F.bI()
if(a.a==null)H.F(P.K("May not create a point with a vertex which is not attached to a shape."))
z.fw(a)
C.a.h(z.a.a.b.b,z)
z.a.a.R()
return z}}},
a0:{"^":"a;0a,0b,0c,0d,0e",
gD:function(){var z=this.e
if(z==null){z=D.R()
this.e=z}return z},
aF:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.e
if(!(z==null))++z.d
a.a.m()
y=this.a.c.length
for(z=a.a.c,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){v=z[w]
this.a.h(0,v.X())}this.a.m()
for(z=a.b.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){u=z[w]
t=this.a
s=u.a
s.a.a.m()
s=s.e
if(typeof s!=="number")return s.n()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
r=t[s]
this.b.a.a.h(0,r)
F.cL(r)}for(z=a.c.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){q=z[w]
t=this.a
s=q.a
s.a.a.m()
s=s.e
if(typeof s!=="number")return s.n()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
p=t[s]
s=this.a
t=q.b
t.a.a.m()
t=t.e
if(typeof t!=="number")return t.n()
t+=y
s=s.c
if(t>=s.length)return H.i(s,t)
o=s[t]
t=this.c.a
t.a.h(0,p)
t.a.h(0,o)
F.dW(p,o)}for(z=a.d.b,x=z.length,w=0;w<z.length;z.length===x||(0,H.D)(z),++w){n=z[w]
t=this.a
s=n.a
s.a.a.m()
s=s.e
if(typeof s!=="number")return s.n()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
p=t[s]
s=this.a
t=n.b
t.a.a.m()
t=t.e
if(typeof t!=="number")return t.n()
t+=y
s=s.c
if(t>=s.length)return H.i(s,t)
o=s[t]
t=this.a
s=n.c
s.a.a.m()
s=s.e
if(typeof s!=="number")return s.n()
s+=y
t=t.c
if(s>=t.length)return H.i(t,s)
m=t[s]
s=this.d.a
s.a.h(0,p)
s.a.h(0,o)
s.a.h(0,m)
F.aU(p,o,m)}z=this.e
if(!(z==null))z.ak()},
a7:function(){var z,y
z=this.e
if(!(z==null))++z.d
y=this.d.a7()||!1
if(!this.a.a7())y=!1
z=this.e
if(!(z==null))z.ak()
return y},
h5:function(a){var z,y,x,w,v,u,t,s,r,q
z=this.d6()
y=new V.u(z.d,z.e,z.f)
x=Math.sqrt(y.v(y))
if(x<=0)x=1
y=z.a
w=z.b
v=z.c
a=new F.j_()
a.a=1/x
a.b=new V.I(y,w,v)
for(u=this.a.c.length-1;u>=0;--u){y=this.a.c
if(u>=y.length)return H.i(y,u)
t=y[u]
y=a.b
w=t.f
s=y.a-w.a
r=y.b-w.b
y=y.c
w=w.c
if(typeof y!=="number")return y.F()
if(typeof w!=="number")return H.p(w)
q=y-w
w=Math.sqrt(s*s+r*r+q*q)*a.a
if(t.ch!==w){t.ch=w
y=t.a
if(y!=null){y=y.e
if(!(y==null))y.J(null)}}}},
h4:function(){return this.h5(null)},
d6:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.a.c
y=z.length
if(y<=0){z=$.ek
if(z==null){z=V.ej(0,0,0,0,0,0)
$.ek=z}return z}z=z[0].f
x=V.ej(z.a,z.b,z.c,0,0,0)
for(w=y-1,z=this.a;w>=1;--w){v=z.c
if(w>=v.length)return H.i(v,w)
v=v[w].f
u=v.a
t=v.b
v=v.c
s=x.d
r=x.a
if(u<r)s+=r-u
else{if(u>r+s)s=u-r
u=r}q=x.e
p=x.b
if(t<p)q+=p-t
else{if(t>p+q)q=t-p
t=p}o=x.f
n=x.c
if(typeof v!=="number")return v.N()
if(typeof n!=="number")return H.p(n)
if(v<n){o+=n-v
m=v}else{if(v>n+o)o=v-n
m=n}x=new V.cM(u,t,m,s,q,o)}return x},
hr:function(a,b,c){var z,y,x,w
z=this.a.c.length
for(y=c;y<z;++y){x=this.a.c
if(y>=x.length)return H.i(x,y)
w=x[y]
if(b.aE(0,a,w))return w}return},
hq:function(a,b){return this.hr(a,b,0)},
fs:function(a,b){var z,y,x,w,v,u
H.m(b,"$isc",[F.v],"$asc")
this.a.h(0,a)
for(z=b.length,y=0;y<b.length;b.length===z||(0,H.D)(b),++y){x=b[y]
for(;w=x.d,w.b.length+w.c.length+w.d.length>0;){w=w.j(0,0)
v=w.a
if(v==null||w.b==null||w.c==null)H.F(P.K("May not replace a face's vertex when the point has been disposed."))
if(J.B(v,x)){w.au(x,a)
v=w.a
if(v!=null){C.a.H(v.d.b,w)
w.a=null}w.a=a
C.a.h(a.d.b,w)
u=1}else u=0
if(J.B(w.b,x)){w.au(x,a)
v=w.b
if(v!=null){C.a.H(v.d.c,w)
w.b=null}w.b=a
C.a.h(a.d.c,w);++u}if(J.B(w.c,x)){w.au(x,a)
v=w.c
if(v!=null){C.a.H(v.d.d,w)
w.c=null}w.c=a
C.a.h(a.d.d,w);++u}if(u>0){w=w.a.a.e
if(!(w==null))w.J(null)}}for(;w=x.c,w.b.length+w.c.length>0;){w=w.j(0,0)
v=w.a
if(v==null||w.b==null)H.F(P.K("May not replace a line's vertex when the point has been disposed."))
if(J.B(v,x)){w.au(x,a)
v=w.a
if(v!=null){C.a.H(v.c.b,w)
w.a=null}w.a=a
C.a.h(a.c.b,w)
u=1}else u=0
if(J.B(w.b,x)){w.au(x,a)
v=w.b
if(v!=null){C.a.H(v.c.c,w)
w.b=null}w.b=a
C.a.h(a.c.c,w);++u}if(u>0){w=w.a.a.e
if(!(w==null))w.J(null)}}for(;w=x.b.b,w.length>0;){w=w[0]
v=w.a
if(v==null)H.F(P.K("May not replace a point's vertex when the point has been disposed."))
if(J.B(v,x)){if(a.a==null)H.F(P.K("May not replace a point's vertex with a vertex which is not attached to a shape."))
v=w.a
if(v!=null){C.a.H(v.b.b,w)
w.a=null}w.a=a
C.a.h(a.b.b,w)
u=1}else u=0
if(u>0){w=w.a.a.e
if(!(w==null))w.J(null)}}this.a.H(0,x)}},
dr:function(a,b){var z,y,x,w,v,u,t,s
z=this.e
if(!(z==null))++z.d
z=this.a.c
y=H.h(z.slice(0),[H.q(z,0)])
for(z=[F.v];y.length!==0;){x=C.a.ght(y)
C.a.hV(y,0)
if(x!=null){w=H.h([],z)
C.a.h(w,x)
for(v=y.length,u=0;u<y.length;y.length===v||(0,H.D)(y),++u){t=y[u]
if(t!=null&&a.aE(0,x,t)){C.a.h(w,t)
C.a.H(y,t)}}if(w.length>1){s=b.aF(w)
if(s!=null){this.fs(s,w)
C.a.h(y,s)}}}}this.a.m()
this.c.bh()
this.d.bh()
this.b.hW()
this.c.c8(new F.jI())
this.d.c8(new F.jo())
z=this.e
if(!(z==null))z.ak()},
fZ:function(a){this.dr(new F.d0(),new F.iI())},
bc:function(){return this.fZ(null)},
h2:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
y=b.a
x=(y&$.$get$aI().a)!==0?1:0
if((y&$.$get$aH().a)!==0)++x
if((y&$.$get$aG().a)!==0)++x
if((y&$.$get$b1().a)!==0)++x
if((y&$.$get$b2().a)!==0)++x
if((y&$.$get$aO().a)!==0)++x
if((y&$.$get$bo().a)!==0)++x
if((y&$.$get$b3().a)!==0)++x
if((y&$.$get$b0().a)!==0)++x
w=b.gcl(b)
v=w*4
y=new Array(z*w)
y.fixed$length=Array
u=P.o
t=H.h(y,[u])
y=new Array(x)
y.fixed$length=Array
s=H.h(y,[Z.dt])
for(r=0,q=0;q<x;++q){p=b.h_(q)
o=p.gcl(p)
C.a.u(s,q,new Z.dt(p,o,r*4,v,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.i(y,n)
m=y[n].hE(p)
l=r+n*w
for(k=0;k<m.length;++k){C.a.u(t,l,m[k]);++l}}r+=o}H.m(t,"$isc",[u],"$asc")
y=a.a
j=y.createBuffer()
C.c.ai(y,34962,j)
C.c.d5(y,34962,new Float32Array(H.ce(t)),35044)
C.c.ai(y,34962,null)
i=new Z.cw(new Z.eZ(34962,j),s,b)
i.seL(H.h([],[Z.bE]))
if(this.b.b.length!==0){u=P.k
h=H.h([],[u])
for(q=0;g=this.b.b,q<g.length;++q){g=g[q].a
g.a.a.m()
C.a.h(h,g.e)}f=Z.d2(y,34963,H.m(h,"$isc",[u],"$asc"))
C.a.h(i.b,new Z.bE(0,h.length,f))}if(this.c.b.length!==0){u=P.k
h=H.h([],[u])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.m()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.m()
C.a.h(h,g.e)}f=Z.d2(y,34963,H.m(h,"$isc",[u],"$asc"))
C.a.h(i.b,new Z.bE(1,h.length,f))}if(this.d.b.length!==0){u=P.k
h=H.h([],[u])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.m()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.m()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].c
g.a.a.m()
C.a.h(h,g.e)}f=Z.d2(y,34963,H.m(h,"$isc",[u],"$asc"))
C.a.h(i.b,new Z.bE(4,h.length,f))}return i},
i:function(a){var z=H.h([],[P.l])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.C("   "))}if(this.b.b.length!==0){C.a.h(z,"Points:")
C.a.h(z,this.b.C("   "))}if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.C("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.C("   "))}return C.a.E(z,"\n")},
ae:function(a){var z=this.e
if(!(z==null))z.J(a)},
R:function(){return this.ae(null)},
$isc3:1,
t:{
U:function(){var z,y
z=new F.a0()
y=new F.kh(z)
y.b=!1
y.sfS(H.h([],[F.v]))
z.a=y
y=new F.jj(z)
y.sbD(H.h([],[F.bI]))
z.b=y
y=new F.ji(z)
y.seN(H.h([],[F.at]))
z.c=y
y=new F.jh(z)
y.seD(H.h([],[F.C]))
z.d=y
z.e=null
return z}}},
c3:{"^":"cy;"},
jh:{"^":"a;a,0b",
seD:function(a){this.b=H.m(a,"$isc",[F.C],"$asc")},
a1:function(a,b,c,d){var z=this.a
z.a.h(0,b)
z.a.h(0,c)
z.a.h(0,d)
return F.aU(b,c,d)},
d0:function(a){var z,y,x,w,v,u,t
H.m(a,"$isc",[F.v],"$asc")
z=H.h([],[F.C])
y=a.length
if(y>0){x=a[0]
for(w=this.a,v=2;v<y;++v){u=v-1
t=a.length
if(u>=t)return H.i(a,u)
u=a[u]
if(v>=t)return H.i(a,v)
t=a[v]
w.a.h(0,x)
w.a.h(0,u)
w.a.h(0,t)
C.a.h(z,F.aU(x,u,t))}}return z},
fX:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.m(c,"$isc",[F.v],"$asc")
z=H.h([],[F.C])
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
C.a.h(z,F.aU(q,p,n))
y.a.h(0,q)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.aU(q,n,m))}else{r.h(0,p)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.aU(p,n,m))
y.a.h(0,p)
y.a.h(0,m)
y.a.h(0,q)
C.a.h(z,F.aU(p,m,q))}t=!t}v=!v}return z},
gq:function(a){return this.b.length},
c8:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.i(x,y)
w=x[y]
for(x=w.d,v=x.b.length+x.c.length+x.d.length-1;v>=0;--v){u=w.d.j(0,v)
for(t=v-1;t>=0;--t){s=w.d.j(0,t)
if(a.aE(0,u,s)){u.aS()
break}}}}},
bh:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
x=y[z]
y=x.gh9()
if(y)x.aS()}},
a7:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.D)(z),++w)if(!z[w].bT())x=!1
return x},
bS:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.D)(z),++w)if(!z[w].bR())x=!1
return x},
i:function(a){return this.M()},
C:function(a){var z,y,x,w
z=H.h([],[P.l])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
return C.a.E(z,"\n")},
M:function(){return this.C("")}},
ji:{"^":"a;a,0b",
seN:function(a){this.b=H.m(a,"$isc",[F.at],"$asc")},
k:function(a,b,c){var z=this.a
z.a.h(0,b)
z.a.h(0,c)
return F.dW(b,c)},
gq:function(a){return this.b.length},
c8:function(a){var z,y,x,w,v,u,t,s
for(z=this.a,y=z.a.c.length-1;y>=0;--y){x=z.a.c
if(y>=x.length)return H.i(x,y)
w=x[y]
for(x=w.c,v=x.b.length+x.c.length-1;v>=0;--v){u=w.c.j(0,v)
for(t=v-1;t>=0;--t){s=w.c.j(0,t)
if(a.aE(0,u,s)){u.aS()
break}}}}},
bh:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
x=y[z]
y=J.B(x.a,x.b)
if(y)x.aS()}},
i:function(a){return this.M()},
C:function(a){var z,y,x,w
z=H.h([],[P.l])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.i(w,x)
C.a.h(z,w[x].C(a+(""+x+". ")))}return C.a.E(z,"\n")},
M:function(){return this.C("")}},
jj:{"^":"a;a,0b",
sbD:function(a){this.b=H.m(a,"$isc",[F.bI],"$asc")},
gq:function(a){return this.b.length},
hW:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
y=y[z]
x=y.a
if(x.b.b.length>1){if(x!=null){C.a.H(x.a.b.b,y)
x=y.a.a.e
if(!(x==null))x.J(null)}x=y.a
if(x!=null){C.a.H(x.b.b,y)
y.a=null}}}},
i:function(a){return this.M()},
C:function(a){var z,y,x,w
z=H.h([],[P.l])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
return C.a.E(z,"\n")},
M:function(){return this.C("")}},
v:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bW:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.ai(this.cx,x,u,z,y,w,v,a,t)},
X:function(){return this.bW(null)},
sT:function(a,b){var z
if(!J.B(this.f,b)){this.f=b
z=this.a
if(z!=null)z.R()}},
saG:function(a){var z
a=a==null?null:a.l(0,Math.sqrt(a.v(a)))
if(!J.B(this.r,a)){this.r=a
z=this.a
if(z!=null)z.R()}},
sP:function(a){var z
a=a==null?null:a.l(0,Math.sqrt(a.v(a)))
if(!J.B(this.x,a)){this.x=a
z=this.a
if(z!=null)z.R()}},
scd:function(a){var z
if(!J.B(this.y,a)){this.y=a
z=this.a
if(z!=null)z.R()}},
saZ:function(a){var z
if(!J.B(this.z,a)){this.z=a
z=this.a
if(z!=null)z.R()}},
sa2:function(a,b){var z
if(!J.B(this.Q,b)){this.Q=b
z=this.a
if(z!=null)z.R()}},
sdL:function(a){var z
if(this.ch!==a){this.ch=a
z=this.a
if(z!=null)z.R()}},
sbN:function(a){var z
if(!J.B(this.cx,a)){this.cx=a
z=this.a
if(z!=null)z.R()}},
hE:function(a){var z,y
if(a.A(0,$.$get$aI())){z=this.f
y=[P.o]
if(z==null)return H.h([0,0,0],y)
else return H.h([z.a,z.b,z.c],y)}else if(a.A(0,$.$get$aH())){z=this.r
y=[P.o]
if(z==null)return H.h([0,1,0],y)
else return H.h([z.a,z.b,z.c],y)}else if(a.A(0,$.$get$aG())){z=this.x
y=[P.o]
if(z==null)return H.h([0,0,1],y)
else return H.h([z.a,z.b,z.c],y)}else if(a.A(0,$.$get$b1())){z=this.y
y=[P.o]
if(z==null)return H.h([0,0],y)
else return H.h([z.a,z.b],y)}else if(a.A(0,$.$get$b2())){z=this.z
y=[P.o]
if(z==null)return H.h([0,0,0],y)
else return H.h([z.a,z.b,z.c],y)}else if(a.A(0,$.$get$aO())){z=this.Q
y=[P.o]
if(z==null)return H.h([1,1,1],y)
else return H.h([z.a,z.b,z.c],y)}else if(a.A(0,$.$get$bo())){z=this.Q
if(z==null)return H.h([1,1,1,1],[P.o])
else return z.ce(0)}else if(a.A(0,$.$get$b3()))return H.h([this.ch],[P.o])
else if(a.A(0,$.$get$b0())){z=this.cx
y=[P.o]
if(z==null)return H.h([-1,-1,-1,-1],y)
else return H.h([z.a,z.b,z.c,z.d],y)}else return H.h([],[P.o])},
bT:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.O()
this.d.B(0,new F.kr(z))
z=z.a
this.r=z.l(0,Math.sqrt(z.v(z)))
z=this.a
if(z!=null){z.R()
z=this.a.e
if(!(z==null))z.ak()}return!0},
bR:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.O()
this.d.B(0,new F.kq(z))
z=z.a
this.x=z.l(0,Math.sqrt(z.v(z)))
z=this.a
if(z!=null){z.R()
z=this.a.e
if(!(z==null))z.ak()}return!0},
de:function(a){var z,y,x,w
z=this.c.b.length
for(y=0;y<z;++y){x=this.c.b
if(y>=x.length)return H.i(x,y)
w=x[y]
x=w.b
x.a.a.m()
x=x.e
a.a.a.m()
if(x==a.e)return w}return},
hu:function(a){var z=this.de(a)
if(z!=null)return z
return a.de(this)},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
C:function(a){var z,y,x
z=H.h([],[P.l])
C.a.h(z,C.b.aa(J.ab(this.e),0))
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
C.a.h(z,V.A(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.E(z,", ")
return a+"{"+x+"}"},
M:function(){return this.C("")},
t:{
ai:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.v()
y=new F.kp(z)
y.sbD(H.h([],[F.bI]))
z.b=y
y=new F.km(z)
x=[F.at]
y.seO(H.h([],x))
y.seP(H.h([],x))
z.c=y
y=new F.ki(z)
x=[F.C]
y.seE(H.h([],x))
y.seF(H.h([],x))
y.seG(H.h([],x))
z.d=y
h=$.$get$eW()
z.e=0
y=$.$get$aI()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aH().a)!==0?e:null
z.x=(x&$.$get$aG().a)!==0?b:null
z.y=(x&$.$get$b1().a)!==0?f:null
z.z=(x&$.$get$b2().a)!==0?g:null
z.Q=(x&$.$get$eX().a)!==0?c:null
z.ch=(x&$.$get$b3().a)!==0?i:0
z.cx=(x&$.$get$b0().a)!==0?a:null
return z}}},
kr:{"^":"b:3;a",
$1:function(a){var z,y
H.e(a,"$isC")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.n(0,z)}}},
kq:{"^":"b:3;a",
$1:function(a){var z,y
H.e(a,"$isC")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.n(0,z)}}},
kh:{"^":"a;a,0b,0c",
sfS:function(a){this.c=H.m(a,"$isc",[F.v],"$asc")},
m:function(){var z,y,x,w
if(this.b){z=this.c
y=z.length
for(x=0,w=0;w<y;++w){if(w>=z.length)return H.i(z,w)
z[w].e=x;++x}this.b=!1}},
h:function(a,b){var z,y
z=b.a
if(z!=null){if(z===this.a)return!1
throw H.d(P.K("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
y=this.a
b.a=y
C.a.h(z,b)
y.R()
return!0},
d1:function(a,b,c,d,e,f,g,h,i){var z=F.ai(a,b,c,d,e,f,g,h,i)
this.h(0,z)
return z},
fY:function(a,b,c,d,e,f){return this.d1(a,null,b,c,d,e,f,null,0)},
bb:function(a,b,c,d,e,f){return this.d1(a,null,b,c,null,d,e,f,0)},
bM:function(a,b,c){var z=F.ai(null,null,null,new V.I(a,b,c),null,null,null,null,0)
this.h(0,z)
return z},
gq:function(a){return this.c.length},
H:function(a,b){var z,y
if(b==null)return!1
z=this.a
if(b.a!==z)return!1
if(b.b.b.length===0){y=b.c
if(y.b.length===0&&y.c.length===0){y=b.d
y=y.b.length===0&&y.c.length===0&&y.d.length===0}else y=!1}else y=!1
if(!y)throw H.d(P.K("May not remove a vertex without first making it empty."))
b.a=null
C.a.H(this.c,b)
z.R()
this.b=!0
return!0},
a7:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)z[x].bT()
return!0},
bS:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)z[x].bR()
return!0},
h3:function(){var z,y,x,w,v,u,t,s
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
if(w.z==null){v=w.r
u=v.a
t=v.b
s=v.c
if(typeof s!=="number")return s.p()
s=v.l(0,Math.sqrt(u*u+t*t+s*s))
if(!J.B(w.z,s)){w.z=s
v=w.a
if(v!=null){v=v.e
if(!(v==null))v.J(null)}}}}return!0},
i:function(a){return this.M()},
C:function(a){var z,y,x,w
this.m()
z=H.h([],[P.l])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
return C.a.E(z,"\n")},
M:function(){return this.C("")}},
ki:{"^":"a;a,0b,0c,0d",
seE:function(a){this.b=H.m(a,"$isc",[F.C],"$asc")},
seF:function(a){this.c=H.m(a,"$isc",[F.C],"$asc")},
seG:function(a){this.d=H.m(a,"$isc",[F.C],"$asc")},
gq:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var z,y,x
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
B:function(a,b){H.f(b,{func:1,ret:-1,args:[F.C]})
C.a.B(this.b,b)
C.a.B(this.c,new F.kj(this,b))
C.a.B(this.d,new F.kk(this,b))},
i:function(a){return this.M()},
C:function(a){var z,y,x,w
z=H.h([],[P.l])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
return C.a.E(z,"\n")},
M:function(){return this.C("")}},
kj:{"^":"b:3;a,b",
$1:function(a){H.e(a,"$isC")
if(!J.B(a.a,this.a))this.b.$1(a)}},
kk:{"^":"b:3;a,b",
$1:function(a){var z
H.e(a,"$isC")
z=this.a
if(!J.B(a.a,z)&&!J.B(a.b,z))this.b.$1(a)}},
km:{"^":"a;a,0b,0c",
seO:function(a){this.b=H.m(a,"$isc",[F.at],"$asc")},
seP:function(a){this.c=H.m(a,"$isc",[F.at],"$asc")},
gq:function(a){return this.b.length+this.c.length},
j:function(a,b){var z,y,x
z=this.b
y=z.length
if(b>=y){z=this.c
x=b-y
if(x<0||x>=z.length)return H.i(z,x)
return z[x]}else{if(b<0)return H.i(z,b)
return z[b]}},
i:function(a){return this.M()},
C:function(a){var z,y,x,w
z=H.h([],[P.l])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
return C.a.E(z,"\n")},
M:function(){return this.C("")}},
kn:{"^":"a;"},
d0:{"^":"kn;",
aE:function(a,b,c){return J.B(b.f,c.f)}},
ko:{"^":"a;"},
j_:{"^":"ko;0a,0b"},
eV:{"^":"a;"},
kl:{"^":"eV;",
aF:function(a1){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
H.m(a1,"$isc",[F.v],"$asc")
for(z=a1.length,y=0,x=null,w=null,v=null,u=0,t=null,s=0,r=null,q=0,p=null,o=0,n=0,m=0;m<z;++m){l=a1[m]
k=l.f
if(k!=null){if(x==null)x=k
else{j=x.a
i=k.a
h=x.b
g=k.b
f=x.c
e=k.c
if(typeof f!=="number")return f.n()
if(typeof e!=="number")return H.p(e)
x=new V.I(j+i,h+g,f+e)}++y}d=l.r
if(d!=null)if(w==null)w=d
else{j=w.a
i=d.a
h=w.b
g=d.b
f=w.c
e=d.c
if(typeof f!=="number")return f.n()
if(typeof e!=="number")return H.p(e)
w=new V.u(j+i,h+g,f+e)}c=l.x
if(c!=null)if(v==null)v=c
else{j=v.a
i=c.a
h=v.b
g=c.b
f=v.c
e=c.c
if(typeof f!=="number")return f.n()
if(typeof e!=="number")return H.p(e)
v=new V.u(j+i,h+g,f+e)}b=l.y
if(b!=null){r=r==null?b:new V.T(r.a+b.a,r.b+b.b);++s}a=l.z
if(a!=null){if(p==null)p=a
else{j=p.a
i=a.a
h=p.b
g=a.b
f=p.c
e=a.c
if(typeof f!=="number")return f.n()
if(typeof e!=="number")return H.p(e)
p=new V.u(j+i,h+g,f+e)}++q}j=l.Q
if(j!=null){i=j.a
h=j.b
g=j.c
j=j.d
if(t==null){j=[i,h,g,j]
t=new V.bO(j[0],j[1],j[2],j[3])}else{j=[i,h,g,j]
i=j[0]
h=j[1]
g=j[2]
j=j[3]
t=new V.bO(t.a+i,t.b+h,t.c+g,t.d+j)}++u}j=l.ch
if(typeof j!=="number")return H.p(j)
n+=j;++o}a0=F.ai(null,null,null,null,null,null,null,null,0)
if(y<=0||x==null)a0.sT(0,null)
else a0.sT(0,x.l(0,y))
if(w==null)a0.saG(null)
else a0.saG(w.l(0,Math.sqrt(w.v(w))))
if(v==null)a0.sP(null)
else a0.sP(v.l(0,Math.sqrt(v.v(v))))
if(s<=0||r==null)a0.scd(null)
else a0.scd(r.l(0,s))
if(q<=0||p==null)a0.saZ(null)
else a0.saZ(p.l(0,q))
if(u<=0||t==null)a0.sa2(0,null)
else{z=t.l(0,u)
z=[z.a,z.b,z.c,z.d]
j=z[0]
i=z[1]
h=z[2]
z=z[3]
if(j<0)j=0
else if(j>1)j=1
if(i<0)i=0
else if(i>1)i=1
if(h<0)h=0
else if(h>1)h=1
if(z<0)z=0
else if(z>1)z=1
a0.sa2(0,new V.z(j,i,h,z))}if(o<=0)a0.sdL(0)
else a0.sdL(n/o)
return a0}},
iI:{"^":"eV;",
aF:function(a){var z,y,x,w,v,u,t,s,r
H.m(a,"$isc",[F.v],"$asc")
z=V.O()
for(y=a.length,x=0;x<y;++x){w=a[x].r
if(w!=null){v=z.a
u=w.a
t=z.b
s=w.b
r=z.c
w=w.c
if(typeof r!=="number")return r.n()
if(typeof w!=="number")return H.p(w)
z=new V.u(v+u,t+s,r+w)}}z=z.l(0,Math.sqrt(z.v(z)))
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.D)(a),++x)a[x].saG(z)
return}},
kp:{"^":"a;a,0b",
sbD:function(a){this.b=H.m(a,"$isc",[F.bI],"$asc")},
gq:function(a){return this.b.length},
i:function(a){return this.M()},
C:function(a){var z,y,x,w
z=H.h([],[P.l])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.D)(y),++w)C.a.h(z,y[w].C(a))
return C.a.E(z,"\n")},
M:function(){return this.C("")}}}],["","",,O,{"^":"",hF:{"^":"c5;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0id,0k1,0k2,0k3,0k4,0r1,0r2,0rx",
gD:function(){var z=this.rx
if(z==null){z=D.R()
this.rx=z}return z},
Z:function(a){var z=this.rx
if(!(z==null))z.J(a)},
sa3:function(a){var z,y
z=this.r2
if(!$.n.$2(z,a)){y=this.r2
this.r2=a
z=new D.x("vectorScale",y,a,this,[P.o])
z.b=!0
this.Z(z)}},
a0:function(a,b,c,d,e,f,g){var z,y
H.f(e,{func:1,ret:F.a0,args:[F.a0]})
z=b.a.j(0,d)
if(z==null){z=this.cv(a,e.$1(c))
b.a.u(0,d,z)}y=this.a
y.db.b5(f)
y.dx.b5(g)
z.dw(a)},
cR:function(a,b,c,d,e,f,g){var z,y
H.f(e,{func:1,ret:F.a0,args:[F.c3]})
z=b.a.j(0,d)
if(z==null){z=this.cv(a,e.$1(c))
b.a.u(0,d,z)}y=this.a
y.db.b5(f)
y.dx.b5(g)
z.dw(a)},
cv:function(a,b){var z,y,x
H.e(b,"$isa0")
z=$.$get$aI()
y=$.$get$aH()
x=b.h2(new Z.ks(a.a),new Z.d1(z.a|y.a|$.$get$aG().a|$.$get$aO().a))
x.be($.$get$aI()).e=this.a.z.c
x.be($.$get$aH()).e=this.a.Q.c
x.be($.$get$aO()).e=this.a.ch.c
x.be($.$get$aG()).e=this.a.cx.c
return x},
iS:[function(a){var z,y,x
z=F.U()
y=a.a
y.toString
x=H.f(new O.hV(z,new V.z(1,1,1,1)),{func:1,ret:-1,args:[F.v]})
C.a.B(y.c,x)
x=a.d
x.toString
y=H.f(new O.hW(z),{func:1,ret:-1,args:[F.C]})
C.a.B(x.b,y)
return z},"$1","gfE",4,0,2],
fV:[function(a,b){var z,y,x,w
z={}
z.a=b
y=F.U()
z.a=new V.z(0,0.7,1,1)
x=a.a
x.toString
z=H.f(new O.i6(z,y),{func:1,ret:-1,args:[F.v]})
C.a.B(x.c,z)
z=new O.i5(y)
x=a.c
x.toString
w=H.f(new O.i7(y,z),{func:1,ret:-1,args:[F.at]})
C.a.B(x.b,w)
w=a.d
w.toString
z=H.f(new O.i8(y,z),{func:1,ret:-1,args:[F.C]})
C.a.B(w.b,z)
return y},function(a){return this.fV(a,null)},"j_","$2$color","$1","gfU",4,3,45],
ij:[function(a){var z,y,x
z=F.U()
y=a.a
y.toString
x=H.f(new O.i1(new V.z(1,1,1,1),z),{func:1,ret:-1,args:[F.v]})
C.a.B(y.c,x)
return z},"$1","geb",4,0,2],
iy:[function(a){var z,y,x
z=F.U()
y=a.a
y.toString
x=H.f(new O.hU(new V.z(1,1,0.3,1),z),{func:1,ret:-1,args:[F.v]})
C.a.B(y.c,x)
return z},"$1","geZ",4,0,2],
ip:[function(a){var z,y,x
z=F.U()
y=a.a
y.toString
x=H.f(new O.hL(new V.z(1,0.3,0.3,1),z),{func:1,ret:-1,args:[F.v]})
C.a.B(y.c,x)
return z},"$1","gel",4,0,2],
iT:[function(a){var z,y,x
z=F.U()
y=a.a
y.toString
x=H.f(new O.hX(new V.z(1,0.3,1,1),z),{func:1,ret:-1,args:[F.v]})
C.a.B(y.c,x)
return z},"$1","gfI",4,0,2],
iY:[function(a){var z,y,x
z=F.U()
y=a.a
y.toString
x=H.f(new O.i_(new V.z(1,0.3,0.3,1),z),{func:1,ret:-1,args:[F.v]})
C.a.B(y.c,x)
return z},"$1","gfQ",4,0,2],
is:[function(a){var z,y,x
z=F.U()
y=a.d
y.toString
x=H.f(new O.hP(new V.z(1,1,0.3,1),z),{func:1,ret:-1,args:[F.C]})
C.a.B(y.b,x)
return z},"$1","geA",4,0,2],
it:[function(a){var z,y,x
z=F.U()
y=a.d
y.toString
x=H.f(new O.hQ(new V.z(1,1,0.3,1),z),{func:1,ret:-1,args:[F.C]})
C.a.B(y.b,x)
return z},"$1","geB",4,0,2],
ir:[function(a){var z,y,x
z=F.U()
y=a.d
y.toString
x=H.f(new O.hO(new V.z(1,0.3,0.3,1),z),{func:1,ret:-1,args:[F.C]})
C.a.B(y.b,x)
return z},"$1","gez",4,0,2],
iu:[function(a){var z,y,x
z=F.U()
y=a.d
y.toString
x=H.f(new O.hR(new V.z(1,0.3,1,1),z),{func:1,ret:-1,args:[F.C]})
C.a.B(y.b,x)
return z},"$1","geC",4,0,2],
iq:[function(a){var z,y,x
z=F.U()
y=a.a
y.toString
x=H.f(new O.hM(z),{func:1,ret:-1,args:[F.v]})
C.a.B(y.c,x)
x=a.d
x.toString
y=H.f(new O.hN(z),{func:1,ret:-1,args:[F.C]})
C.a.B(x.b,y)
return z},"$1","ges",4,0,2],
iX:[function(a){var z,y,x
z=F.U()
y=a.a
y.toString
x=H.f(new O.hY(z),{func:1,ret:-1,args:[F.v]})
C.a.B(y.c,x)
x=a.d
x.toString
y=H.f(new O.hZ(z),{func:1,ret:-1,args:[F.C]})
C.a.B(x.b,y)
return z},"$1","gfP",4,0,2],
iZ:[function(a){var z,y,x,w,v,u,t
z={}
y=F.U()
x=a.a
w=x.c
if(w.length<1)return y
v=w[0].ch
z.a=v
z.b=v
x.toString
x={func:1,ret:-1,args:[F.v]}
C.a.B(w,H.f(new O.i2(z),x))
w=z.b
u=z.a
if(typeof w!=="number")return w.F()
if(typeof u!=="number")return H.p(u)
t=w-u
z.c=t
if(t<=0)z.c=1
w=a.a
w.toString
x=H.f(new O.i3(z,y),x)
C.a.B(w.c,x)
x=a.d
x.toString
w=H.f(new O.i4(y),{func:1,ret:-1,args:[F.C]})
C.a.B(x.b,w)
return y},"$1","gfT",4,0,2],
eU:function(a){var z,y,x
z={}
z.a=0
y=a.a
y.toString
x=H.f(new O.hT(z),{func:1,ret:-1,args:[F.v]})
C.a.B(y.c,x)
return C.e.bf((z.a+1.5)*0.5)},
b6:function(a,b){var z
if(a<0)return new V.ar(0,0,0)
else{z=Math.floor((a+0.5)*0.5)
return V.dA(z/b,a-z*2,1)}},
io:[function(a){var z,y,x,w
z=this.eU(a)
y=F.U()
x=a.a
x.toString
w=H.f(new O.hJ(this,z,y),{func:1,ret:-1,args:[F.v]})
C.a.B(x.c,w)
w=a.d
w.toString
x=H.f(new O.hK(y),{func:1,ret:-1,args:[F.C]})
C.a.B(w.b,x)
return y},"$1","gek",4,0,2],
im:[function(a){return this.ej(a)},"$1","gcu",4,0,2],
ej:function(a){var z,y
z=F.U()
y=new O.hI(z)
y.$3(1,0,0)
y.$3(0,1,0)
y.$3(0,0,1)
return z},
il:[function(a){return this.ee(a)},"$1","gcr",4,0,2],
ee:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z=a.d6()
y=F.U()
x=new O.hH(y)
w=z.a
v=z.b
u=z.c
t=x.$3(w,v,u)
s=w+z.d
r=x.$3(s,v,u)
q=v+z.e
p=x.$3(s,q,u)
o=x.$3(w,q,u)
n=z.f
if(typeof u!=="number")return u.n()
n=u+n
m=x.$3(w,v,n)
l=x.$3(s,v,n)
k=x.$3(s,q,n)
j=x.$3(w,q,n)
y.c.k(0,t,r)
y.c.k(0,r,p)
y.c.k(0,p,o)
y.c.k(0,o,t)
y.c.k(0,m,l)
y.c.k(0,l,k)
y.c.k(0,k,j)
y.c.k(0,j,m)
y.c.k(0,t,m)
y.c.k(0,r,l)
y.c.k(0,p,k)
y.c.k(0,o,j)
return y}},hV:{"^":"b:4;a,b",
$1:function(a){var z,y
H.e(a,"$isv")
z=this.a.a
y=a.X()
y.sa2(0,this.b)
y.sP(V.O())
z.h(0,y)}},hW:{"^":"b:3;a",
$1:function(a){var z,y,x,w,v,u
H.e(a,"$isC")
z=this.a
y=z.a
x=a.a
x.a.a.m()
x=x.e
w=C.a.j(y.c,x)
x=z.a
y=a.b
y.a.a.m()
y=y.e
v=C.a.j(x.c,y)
y=z.a
x=a.c
x.a.a.m()
x=x.e
u=C.a.j(y.c,x)
z.d.a1(0,w,v,u)}},i6:{"^":"b:4;a,b",
$1:function(a){var z,y
H.e(a,"$isv")
z=this.b.a
y=a.X()
y.sa2(0,this.a.a)
y.sP(V.O())
z.h(0,y)}},i5:{"^":"b:47;a",
$2:function(a,b){if(a.hu(b)==null)this.a.c.k(0,a,b)}},i7:{"^":"b:48;a,b",
$1:function(a){var z,y,x,w
H.e(a,"$isat")
z=this.a
y=z.a
x=a.a
x.a.a.m()
x=x.e
w=C.a.j(y.c,x)
z=z.a
x=a.b
x.a.a.m()
x=x.e
this.b.$2(w,C.a.j(z.c,x))}},i8:{"^":"b:3;a,b",
$1:function(a){var z,y,x,w,v,u
H.e(a,"$isC")
z=this.a
y=z.a
x=a.a
x.a.a.m()
x=x.e
w=C.a.j(y.c,x)
x=z.a
y=a.b
y.a.a.m()
y=y.e
v=C.a.j(x.c,y)
z=z.a
y=a.c
y.a.a.m()
y=y.e
u=C.a.j(z.c,y)
y=this.b
y.$2(w,v)
y.$2(v,u)
y.$2(u,w)}},i1:{"^":"b:4;a,b",
$1:function(a){var z,y
z=H.e(a,"$isv").X()
z.sa2(0,this.a)
z.sP(V.O())
y=this.b
y.a.h(0,z)
y.b.a.a.h(0,z)
F.cL(z)}},hU:{"^":"b:4;a,b",
$1:function(a){var z,y,x
z=H.e(a,"$isv").X()
z.sa2(0,this.a)
z.sP(V.O())
y=z.X()
y.sP(z.r)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.k(0,z,y)}},hL:{"^":"b:4;a,b",
$1:function(a){var z,y,x
H.e(a,"$isv")
z=a.X()
z.sa2(0,this.a)
z.sP(V.O())
y=z.X()
y.sP(a.x)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.k(0,z,y)}},hX:{"^":"b:4;a,b",
$1:function(a){var z,y,x
H.e(a,"$isv")
z=a.X()
z.sa2(0,this.a)
z.sP(V.O())
y=z.X()
y.sP(a.x.ad(a.r).K(0))
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.k(0,z,y)}},i_:{"^":"b:4;a,b",
$1:function(a){var z,y,x
H.e(a,"$isv")
z=a.X()
z.sa2(0,this.a)
z.sP(V.O())
y=z.X()
y.sP(a.z)
x=this.b
x.a.h(0,z)
x.a.h(0,y)
x.c.k(0,z,y)}},hP:{"^":"b:3;a,b",
$1:function(a){var z,y,x
H.e(a,"$isC")
z=a.a.f.n(0,a.b.f).n(0,a.c.f).l(0,3)
y=a.d
x=F.ai(null,V.O(),this.a,z,y,null,null,null,0)
y=this.b
y.a.h(0,x)
y.b.a.a.h(0,x)
F.cL(x)}},hQ:{"^":"b:3;a,b",
$1:function(a){var z,y,x,w
H.e(a,"$isC")
z=a.a.f.n(0,a.b.f).n(0,a.c.f).l(0,3)
y=a.d
x=F.ai(null,V.O(),this.a,z,y,null,null,null,0)
w=x.X()
w.sP(a.d)
y=this.b
y.a.h(0,x)
y.a.h(0,w)
y.c.k(0,x,w)}},hO:{"^":"b:3;a,b",
$1:function(a){var z,y,x,w
H.e(a,"$isC")
z=a.a.f.n(0,a.b.f).n(0,a.c.f).l(0,3)
y=a.d
x=F.ai(null,V.O(),this.a,z,y,null,null,null,0)
w=x.X()
w.sP(a.e)
y=this.b
y.a.h(0,x)
y.a.h(0,w)
y.c.k(0,x,w)}},hR:{"^":"b:3;a,b",
$1:function(a){var z,y,x,w
H.e(a,"$isC")
z=a.a.f.n(0,a.b.f).n(0,a.c.f).l(0,3)
y=a.d
x=F.ai(null,V.O(),this.a,z,y,null,null,null,0)
w=x.X()
w.sP(a.e.ad(a.d).K(0))
y=this.b
y.a.h(0,x)
y.a.h(0,w)
y.c.k(0,x,w)}},hM:{"^":"b:4;a",
$1:function(a){var z,y
H.e(a,"$isv")
z=this.a.a
y=a.X()
y.sP(V.O())
z.h(0,y)}},hN:{"^":"b:3;a",
$1:function(a){var z,y,x,w,v,u
H.e(a,"$isC")
z=this.a
y=z.a
x=a.a
x.a.a.m()
x=x.e
w=C.a.j(y.c,x)
x=z.a
y=a.b
y.a.a.m()
y=y.e
v=C.a.j(x.c,y)
y=z.a
x=a.c
x.a.a.m()
x=x.e
u=C.a.j(y.c,x)
z.d.a1(0,w,v,u)}},hY:{"^":"b:4;a",
$1:function(a){var z,y,x,w,v,u,t
H.e(a,"$isv")
z=a.y
y=this.a.a
x=a.X()
w=z.a
v=z.b
if(w<0)w=0
else if(w>1)w=1
u=v<0
if(u)t=0
else t=v>1?1:v
if(u)v=0
else if(v>1)v=1
x.sa2(0,new V.z(w,t,v,1))
x.sP(V.O())
y.h(0,x)}},hZ:{"^":"b:3;a",
$1:function(a){var z,y,x,w,v,u
H.e(a,"$isC")
z=this.a
y=z.a
x=a.a
x.a.a.m()
x=x.e
w=C.a.j(y.c,x)
x=z.a
y=a.b
y.a.a.m()
y=y.e
v=C.a.j(x.c,y)
y=z.a
x=a.c
x.a.a.m()
x=x.e
u=C.a.j(y.c,x)
z.d.a1(0,w,v,u)}},i2:{"^":"b:4;a",
$1:function(a){var z,y,x
H.e(a,"$isv")
z=this.a
y=z.a
x=a.ch
if(typeof y!=="number")return y.b3()
if(typeof x!=="number")return H.p(x)
if(y>x)z.a=x
y=z.b
if(typeof y!=="number")return y.N()
if(y<x)z.b=x}},i3:{"^":"b:4;a,b",
$1:function(a){var z,y,x,w
H.e(a,"$isv")
z=a.ch
y=this.a
x=y.a
if(typeof z!=="number")return z.F()
if(typeof x!=="number")return H.p(x)
w=V.dA((z-x)/y.c*5/6,1,1)
y=this.b.a
x=a.X()
x.sP(V.O())
x.sa2(0,new V.z(w.a,w.b,w.c,1))
y.h(0,x)}},i4:{"^":"b:3;a",
$1:function(a){var z,y,x,w,v,u
H.e(a,"$isC")
z=this.a
y=z.a
x=a.a
x.a.a.m()
x=x.e
w=C.a.j(y.c,x)
x=z.a
y=a.b
y.a.a.m()
y=y.e
v=C.a.j(x.c,y)
y=z.a
x=a.c
x.a.a.m()
x=x.e
u=C.a.j(y.c,x)
z.d.a1(0,w,v,u)}},hT:{"^":"b:4;a",
$1:function(a){var z,y,x
z=H.e(a,"$isv").cx
if(z==null)z=V.ec()
y=this.a
x=Math.max(y.a,z.a)
y.a=x
x=Math.max(x,z.b)
y.a=x
x=Math.max(x,z.c)
y.a=x
y.a=Math.max(x,z.d)}},hJ:{"^":"b:4;a,b,c",
$1:function(a){var z,y,x,w
H.e(a,"$isv")
z=a.cx
if(z==null)z=V.ec()
y=this.a
x=this.b
w=new V.ar(0,0,0).n(0,y.b6(z.a,x)).n(0,y.b6(z.b,x)).n(0,y.b6(z.c,x)).n(0,y.b6(z.d,x))
x=this.c.a
y=a.X()
y.sP(V.O())
y.sa2(0,new V.z(w.a,w.b,w.c,1))
x.h(0,y)}},hK:{"^":"b:3;a",
$1:function(a){var z,y,x,w,v,u
H.e(a,"$isC")
z=this.a
y=z.a
x=a.a
x.a.a.m()
x=x.e
w=C.a.j(y.c,x)
x=z.a
y=a.b
y.a.a.m()
y=y.e
v=C.a.j(x.c,y)
y=z.a
x=a.c
x.a.a.m()
x=x.e
u=C.a.j(y.c,x)
z.d.a1(0,w,v,u)}},hI:{"^":"b;a",
$3:function(a,b,c){var z,y,x,w,v,u
z=a>1?1:a
y=b>1?1:b
x=c>1?1:c
w=new V.z(z,y,x,1)
z=this.a
v=z.a.bM(0,0,0)
v.sP(V.O())
v.saG(V.d_())
v.sa2(0,w)
u=z.a.bM(a,b,c)
u.sP(V.O())
u.saG(V.d_())
u.sa2(0,w)
z.c.k(0,v,u)}},hH:{"^":"b;a",
$3:function(a,b,c){var z=this.a.a.bM(a,b,c)
z.sP(V.O())
z.saG(new V.u(a,b,c))
return z}},c5:{"^":"a;"}}],["","",,T,{"^":"",jz:{"^":"a;a,0b,0c,0d,0e"}}],["","",,V,{"^":"",fX:{"^":"a;",
aV:function(a){return!0},
i:function(a){return"all"},
$isbi:1},bi:{"^":"a;"},e0:{"^":"a;0a",
san:function(a){this.a=H.m(a,"$isc",[V.bi],"$asc")},
aV:["e0",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x)if(z[x].aV(a))return!0
return!1}],
i:["cm",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.D)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isbi:1},bm:{"^":"e0;0a",
aV:function(a){return!this.e0(a)},
i:function(a){return"!["+this.cm(0)+"]"}},je:{"^":"a;0a",
sfv:function(a){this.a=H.m(a,"$isG",[P.k,P.E],"$asG")},
e3:function(a){var z,y
if(a.a.length<=0)throw H.d(P.K("May not create a SetMatcher with zero characters."))
z=new H.aC(0,0,[P.k,P.E])
for(y=new H.dZ(a,a.gq(a),0,[H.al(a,"W",0)]);y.G();)z.u(0,y.d,!0)
this.sfv(z)},
aV:function(a){return this.a.bd(a)},
i:function(a){return P.bL(this.a.gc0(),0,null)},
$isbi:1,
t:{
a4:function(a){var z=new V.je()
z.e3(a)
return z}}},cP:{"^":"a;a,b,0c,0d",
sfO:function(a){this.c=H.m(a,"$isc",[V.cT],"$asc")},
E:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.cT(this.a.O(0,b))
w.san(H.h([],[V.bi]))
w.c=!1
C.a.h(this.c,w)
return w},
hs:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.D)(z),++x){w=z[x]
if(w.aV(a))return w}return},
i:function(a){return this.b}},et:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.fN(this.b,"\n","\\n")
y=H.fN(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},cS:{"^":"a;a,b,0c",
sfp:function(a){var z=P.l
this.c=H.m(a,"$isG",[z,z],"$asG")},
i:function(a){return this.b}},jE:{"^":"a;0a,0b,0c",
sfG:function(a){this.a=H.m(a,"$isG",[P.l,V.cP],"$asG")},
sfK:function(a){this.b=H.m(a,"$isG",[P.l,V.cS],"$asG")},
O:function(a,b){var z=this.a.j(0,b)
if(z==null){z=new V.cP(this,b)
z.sfO(H.h([],[V.cT]))
z.d=null
this.a.u(0,b,z)}return z},
b0:function(a){var z,y
z=this.b.j(0,a)
if(z==null){z=new V.cS(this,a)
y=P.l
z.sfp(new H.aC(0,0,[y,y]))
this.b.u(0,a,z)}return z},
i6:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.h([],[V.et])
y=this.c
x=[P.k]
w=H.h([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.I(a,t)
r=y.hs(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.bL(w,0,null)
throw H.d(P.K("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.h([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.bL(w,0,null)
p=y.d
o=p.c.j(0,q)
u=new V.et(o==null?p.b:o,q,t)}++t}}}},cT:{"^":"e0;b,0c,0a",
i:function(a){return this.b.b+": "+this.cm(0)}}}],["","",,X,{"^":"",dw:{"^":"a;",$ise2:1},hA:{"^":"eo;0a,0b,0c,0d,0e,0f,0r,0x",
gD:function(){var z=this.x
if(z==null){z=D.R()
this.x=z}return z}},iL:{"^":"a;0a,0b,0c,0d,0e,0f",
gD:function(){var z=this.f
if(z==null){z=D.R()
this.f=z}return z},
aM:[function(a){var z
H.e(a,"$isw")
z=this.f
if(!(z==null))z.J(a)},function(){return this.aM(null)},"ik","$1","$0","gcp",0,2,6],
saW:function(a){var z,y
if(!J.B(this.b,a)){z=this.b
if(z!=null)z.gD().H(0,this.gcp())
y=this.b
this.b=a
if(a!=null)a.gD().h(0,this.gcp())
z=new D.x("mover",y,this.b,this,[U.aa])
z.b=!0
this.aM(z)}},
$ise2:1,
$isdw:1},eo:{"^":"a;"}}],["","",,V,{"^":"",
ni:function(a){P.jD(C.I,new V.nj(a))},
h4:{"^":"a;a,b,0c,0d",
sep:function(a){this.d=H.m(a,"$isc",[W.cz],"$asc")},
a1:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
H.f(c,{func:1,ret:-1,args:[P.E]})
if(this.c==null)return
z=this.d.length
y=P.bN().gaH().j(0,this.a)
if(y==null||y.length<=z){x=d
w=!0}else{if(z>=y.length)return H.i(y,z)
x=y[z]==="1"
w=!1}c.$1(x)
v=document
u=v.createElement("label")
t=u.style
t.whiteSpace="nowrap"
J.bU(this.c).h(0,u)
s=W.dO("checkbox")
s.checked=x
t=W.a3
W.a_(s,"change",H.f(new V.h5(this,c,s,z),{func:1,ret:-1,args:[t]}),!1,t)
C.k.V(u,s)
r=v.createElement("span")
r.textContent=b
C.k.V(u,r)
J.bU(this.c).h(0,v.createElement("br"))
C.a.h(this.d,s)
if(w)this.cZ(z,x)},
k:function(a,b,c){return this.a1(a,b,c,!1)},
cZ:function(a,b){var z,y,x,w,v,u,t
z=this.a
y=P.bN().gaH().j(0,z)
if(y==null)y=""
x=y.length
if(x<a)y=C.b.hN(y,a-x+1,"0")
w=a>0?C.b.w(y,0,a):""
w+=b?"1":"0"
x=a+1
if(x<y.length)w+=C.b.ar(y,x)
v=P.bN()
x=P.l
u=P.dY(v.gaH(),x,x)
u.u(0,z,w)
t=v.c9(u)
z=window.history
x=t.i(0)
z.toString;(z&&C.u).cS(z,new P.fb([],[]).bi(""),"",x)}},
h5:{"^":"b:13;a,b,c,d",
$1:function(a){var z=this.c
this.b.$1(z.checked)
this.a.cZ(this.d,z.checked)}},
nj:{"^":"b:50;a",
$1:function(a){H.e(a,"$isaY")
P.dj(C.e.dG(this.a.ghx(),2)+" fps")}},
j0:{"^":"a;a,b,0c",
a1:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.f(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.bN().gaH().j(0,H.j(z))
if(y==null)if(d){c.$0()
this.cY(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.bU(this.c).h(0,v)
t=W.dO("radio")
t.checked=x
t.name=z
z=W.a3
W.a_(t,"change",H.f(new V.j1(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
C.k.V(v,t)
s=w.createElement("span")
s.textContent=b
C.k.V(v,s)
J.bU(this.c).h(0,w.createElement("br"))},
k:function(a,b,c){return this.a1(a,b,c,!1)},
cY:function(a){var z,y,x,w,v
z=P.bN()
y=P.l
x=P.dY(z.gaH(),y,y)
x.u(0,this.a,a)
w=z.c9(x)
y=window.history
v=w.i(0)
y.toString;(y&&C.u).cS(y,new P.fb([],[]).bi(""),"",v)},
t:{
ef:function(a,b){var z,y
z=new V.j0(a,!0)
y=C.q.bk(document,a)
z.c=y
if(y==null)H.F("Failed to find "+a+" for RadioGroup")
return z}}},
j1:{"^":"b:13;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.cY(this.d)}}},
jk:{"^":"a;0a,0b",
e5:function(a,b){var z,y,x,w,v,u,t
z=document
y=z.body
x=z.createElement("div")
x.className="scrollTop";(y&&C.t).V(y,x)
w=z.createElement("div")
w.className="scrollPage"
C.t.V(y,w)
v=z.createElement("div")
v.className="pageCenter"
C.h.V(w,v)
if(a.length!==0){z.title=a
u=z.createElement("div")
u.className="pageTitle"
u.textContent=a
C.h.V(v,u)}t=z.createElement("div")
this.a=t
C.h.V(v,t)
this.b=null
t=W.a3
W.a_(z,"scroll",H.f(new V.jn(x),{func:1,ret:-1,args:[t]}),!1,t)},
d2:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.m(a,"$isc",[P.l],"$asc")
this.fB()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.i6(C.a.hC(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.D)(x),++v){u=x[v]
switch(u.a){case"Bold":t=z.createElement("div")
t.className="boldPar"
t.textContent=u.b
C.h.V(y,t)
break
case"Italic":t=z.createElement("div")
t.className="italicPar"
t.textContent=u.b
C.h.V(y,t)
break
case"Code":t=z.createElement("div")
t.className="codePar"
t.textContent=u.b
C.h.V(y,t)
break
case"Link":s=u.b
if(H.fM(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.i(r,1)
q.href=H.H(r[1])
q.textContent=H.H(r[0])
C.h.V(y,q)}else{p=P.cc(C.U,s,C.i,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.j(p)
q.textContent=s
C.h.V(y,q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
C.h.V(y,t)
break}}C.h.V(this.a,y)},
fW:function(a){var z,y,x,w,v,u,t
H.m(a,"$isc",[P.l],"$asc")
z=document
y=z.createElement("table")
y.id="shellTable"
x=y.style
x.width="100%"
x.padding="0px"
x.marginLeft="auto"
x.marginRight="auto"
C.h.V(this.a,y)
w=C.Z.eM(y,-1)
x=H.e((w&&C.B).cJ(w,-1),"$isc4").style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
for(v=0;v<3;++v){u=z.createElement("div")
u.id=a[v]
x=u.style
x.textAlign="left"
x=u.style
x.verticalAlign="top"
t=H.e(C.B.cJ(w,-1),"$isc4")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto";(t&&C.Y).V(t,u)}},
fB:function(){var z,y,x,w
if(this.b!=null)return
z=new V.jE()
y=P.l
z.sfG(new H.aC(0,0,[y,V.cP]))
z.sfK(new H.aC(0,0,[y,V.cS]))
z.c=null
z.c=z.O(0,"Start")
y=z.O(0,"Start").E(0,"Bold")
x=V.a4(new H.a1("*"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Bold").E(0,"Bold")
x=new V.bm()
w=[V.bi]
x.san(H.h([],w))
C.a.h(y.a,x)
y=V.a4(new H.a1("*"))
C.a.h(x.a,y)
y=z.O(0,"Bold").E(0,"BoldEnd")
x=V.a4(new H.a1("*"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Start").E(0,"Italic")
x=V.a4(new H.a1("_"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Italic").E(0,"Italic")
x=new V.bm()
x.san(H.h([],w))
C.a.h(y.a,x)
y=V.a4(new H.a1("_"))
C.a.h(x.a,y)
y=z.O(0,"Italic").E(0,"ItalicEnd")
x=V.a4(new H.a1("_"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Start").E(0,"Code")
x=V.a4(new H.a1("`"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Code").E(0,"Code")
x=new V.bm()
x.san(H.h([],w))
C.a.h(y.a,x)
y=V.a4(new H.a1("`"))
C.a.h(x.a,y)
y=z.O(0,"Code").E(0,"CodeEnd")
x=V.a4(new H.a1("`"))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"Start").E(0,"LinkHead")
x=V.a4(new H.a1("["))
C.a.h(y.a,x)
y.c=!0
y=z.O(0,"LinkHead").E(0,"LinkTail")
x=V.a4(new H.a1("|"))
C.a.h(y.a,x)
x=z.O(0,"LinkHead").E(0,"LinkEnd")
y=V.a4(new H.a1("]"))
C.a.h(x.a,y)
x.c=!0
x=z.O(0,"LinkHead").E(0,"LinkHead")
y=new V.bm()
y.san(H.h([],w))
C.a.h(x.a,y)
x=V.a4(new H.a1("|]"))
C.a.h(y.a,x)
x=z.O(0,"LinkTail").E(0,"LinkEnd")
y=V.a4(new H.a1("]"))
C.a.h(x.a,y)
x.c=!0
x=z.O(0,"LinkTail").E(0,"LinkTail")
y=new V.bm()
y.san(H.h([],w))
C.a.h(x.a,y)
x=V.a4(new H.a1("|]"))
C.a.h(y.a,x)
C.a.h(z.O(0,"Start").E(0,"Other").a,new V.fX())
x=z.O(0,"Other").E(0,"Other")
y=new V.bm()
y.san(H.h([],w))
C.a.h(x.a,y)
x=V.a4(new H.a1("*_`["))
C.a.h(y.a,x)
x=z.O(0,"BoldEnd")
x.d=x.a.b0("Bold")
x=z.O(0,"ItalicEnd")
x.d=x.a.b0("Italic")
x=z.O(0,"CodeEnd")
x.d=x.a.b0("Code")
x=z.O(0,"LinkEnd")
x.d=x.a.b0("Link")
x=z.O(0,"Other")
x.d=x.a.b0("Other")
this.b=z},
t:{
jl:function(a,b){var z=new V.jk()
z.e5(a,!0)
return z}}},
jn:{"^":"b:13;a",
$1:function(a){P.er(C.p,new V.jm(this.a))}},
jm:{"^":"b:0;a",
$0:function(){var z,y,x
z=C.e.af(document.documentElement.scrollTop)
y=this.a.style
x=H.j(-0.01*z)+"px"
y.top=x}}}],["","",,Z,{"^":"",
fI:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
z=V.jl("Test 002",!0)
y=W.dx(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
C.h.V(z.a,y)
x=[P.l]
z.d2(H.h(["The inspection test is used to check that shapes are built correctly ","and for checking the data privided by the shapes. ","Also it is useful for testing out new generated shape configurations. ","For loaded shape testing see test032."],x))
z.fW(H.h(["controls","shapes","scalars"],x))
z.d2(H.h(["\xab[Back to Tests|../]"],x))
x=document
w=C.q.bk(x,"testCanvas")
if(w==null)H.F(P.K("Failed to find an element with the identifier, testCanvas."))
v=E.jB(w,!0,!0,!0,!1)
u=new E.as()
u.a=""
u.b=!0
t=E.as
u.seq(0,O.dz(t))
u.y.bn(u.ghH(),u.ghJ())
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
u.sck(0,null)
u.saW(null)
s=new U.dM()
s.cn(U.aa)
s.bn(s.gf_(),s.gfg())
s.e=null
s.f=V.c0()
s.r=0
r=v.r
q=new U.k7()
p=U.cA()
p.scg(0,!0)
p.sc2(6.283185307179586)
p.sc4(0)
p.sT(0,0)
p.sc3(100)
p.sU(0)
p.sbX(0.5)
q.b=p
o=q.gax()
p.gD().h(0,o)
p=U.cA()
p.scg(0,!0)
p.sc2(6.283185307179586)
p.sc4(0)
p.sT(0,0)
p.sc3(100)
p.sU(0)
p.sbX(0.5)
q.c=p
p.gD().h(0,o)
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
n=new X.au(!1,!1,!1)
m=q.d
q.d=n
p=[X.au]
o=new D.x("modifiers",m,n,q,p)
o.b=!0
q.S(o)
o=q.f
if(o!==!1){q.f=!1
o=new D.x("invertX",o,!1,q,[P.E])
o.b=!0
q.S(o)}o=q.r
if(o!==!0){q.r=!0
o=new D.x("invertY",o,!0,q,[P.E])
o.b=!0
q.S(o)}q.aQ(r)
s.h(0,q)
r=v.r
q=new U.k6()
o=U.cA()
o.scg(0,!0)
o.sc2(6.283185307179586)
o.sc4(0)
o.sT(0,0)
o.sc3(100)
o.sU(0)
o.sbX(0.2)
q.b=o
o.gD().h(0,q.gax())
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
n=new X.au(!0,!1,!1)
m=q.c
q.c=n
o=new D.x("modifiers",m,n,q,p)
o.b=!0
q.S(o)
q.aQ(r)
s.h(0,q)
r=v.r
q=new U.k8()
q.c=0.01
q.d=0
q.e=0
n=new X.au(!1,!1,!1)
q.b=n
p=new D.x("modifiers",null,n,q,p)
p.b=!0
q.S(p)
q.aQ(r)
s.h(0,q)
u.saW(s)
l=new O.hF()
l.b=V.eT()
l.c=new V.z(0.2,0.3,0.4,1)
l.d=new V.z(0.1,0.2,0.3,1)
l.e=new V.z(0.7,0.7,0.7,1)
l.f=new V.z(0.3,0.3,0.3,1)
l.r=new V.z(0.5,0.5,0.5,1)
l.x=new V.z(0.5,0.5,0.5,1)
l.y=new V.z(1,1,1,1)
l.z=new V.z(0.8,0.8,0.8,1)
l.Q=!1
l.ch=!1
l.cx=!1
l.cy=!1
l.db=!1
l.dx=!1
l.dy=!1
l.fr=!1
l.fx=!1
l.fy=!1
l.go=!1
l.id=!1
l.k1=!1
l.k2=!1
l.k3=!1
l.k4=!1
l.r1=!1
l.r2=1
l.sa3(0.4)
s=new M.hr()
s.sea(0,O.dz(t))
s.d.bn(s.gf1(),s.gf2())
s.e=null
s.f=null
s.r=null
s.x=null
k=new X.iL()
k.c=1.0471975511965976
k.d=0.1
k.e=2000
k.saW(null)
t=k.c
if(!$.n.$2(t,1.0471975511965976)){m=k.c
k.c=1.0471975511965976
t=new D.x("fov",m,1.0471975511965976,k,[P.o])
t.b=!0
k.aM(t)}t=k.d
if(!$.n.$2(t,0.1)){m=k.d
k.d=0.1
t=new D.x("near",m,0.1,k,[P.o])
t.b=!0
k.aM(t)}t=k.e
if(!$.n.$2(t,2000)){m=k.e
k.e=2000
t=new D.x("far",m,2000,k,[P.o])
t.b=!0
k.aM(t)}t=s.a
if(t!==k){if(t!=null)t.gD().H(0,s.gag())
m=s.a
s.a=k
k.gD().h(0,s.gag())
t=new D.x("camera",m,s.a,s,[X.dw])
t.b=!0
s.at(t)}j=new X.hA()
t=new V.z(0,0,0,1)
j.a=t
j.b=!0
j.c=2000
j.d=!0
j.e=0
j.f=!1
t=$.ei
if(t==null){t=V.eh(0,0,1,1)
$.ei=t}j.r=t
t=s.b
if(t!==j){if(t!=null)t.gD().H(0,s.gag())
m=s.b
s.b=j
j.gD().h(0,s.gag())
t=new D.x("target",m,s.b,s,[X.eo])
t.b=!0
s.at(t)}s.sdE(null)
s.sdE(l)
s.d.h(0,u)
t=s.a
i=V.aD(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
r=new U.dB()
r.a=i
t.saW(r)
t=v.d
if(t!==s){if(t!=null)t.gD().H(0,v.gco())
v.d=s
s.gD().h(0,v.gco())
v.e8()}t=new V.h4("controls",!0)
x=C.q.bk(x,"controls")
t.c=x
if(x==null)H.F("Failed to find controls for CheckGroup")
t.sep(H.h([],[W.cz]))
t.a1(0,"Filled",new Z.mp(l),!0)
t.a1(0,"Wire Frame",new Z.mq(l),!0)
t.k(0,"Vertices",new Z.mr(l))
t.k(0,"Normals",new Z.mC(l))
t.k(0,"Binormals",new Z.mN(l))
t.k(0,"Tangentals",new Z.mY(l))
t.k(0,"Face Centers",new Z.n6(l))
t.k(0,"Face Normals",new Z.n7(l))
t.k(0,"Face Binormals",new Z.n8(l))
t.k(0,"Face Tangentals",new Z.n9(l))
t.k(0,"Colors",new Z.na(l))
t.k(0,"Textures2D",new Z.ms(l))
t.k(0,"TexturesCube",new Z.mt(l))
t.k(0,"Weight",new Z.mu(l))
t.k(0,"Bend",new Z.mv(l))
t.a1(0,"Axis",new Z.mw(l),!0)
t.k(0,"AABB",new Z.mx(l))
x=new Z.nb(u)
t=V.ef("shapes",!0)
t.a1(0,"Square",new Z.my(x),!0)
t.k(0,"Cube",new Z.mz(x))
t.k(0,"Cuboid",new Z.mA(x))
t.k(0,"Cuboid+",new Z.mB(x))
t.k(0,"Disk",new Z.mD(x))
t.k(0,"Disk+",new Z.mE(x))
t.k(0,"Cylinder",new Z.mF(x))
t.k(0,"Cylinder+",new Z.mG(x))
t.k(0,"Cone",new Z.mH(x))
t.k(0,"Cylindrical",new Z.mI(x))
t.k(0,"LatLonSphere",new Z.mJ(x))
t.k(0,"LatLonSphere+",new Z.mK(x))
t.k(0,"IsoSphere",new Z.mL(x))
t.k(0,"IsoSphere+",new Z.mM(x))
t.k(0,"Sphere",new Z.mO(x))
t.k(0,"Sphere+",new Z.mP(x))
t.k(0,"Spherical",new Z.mQ(x))
t.k(0,"Toroid",new Z.mR(x))
t.k(0,"Knot",new Z.mS(x))
t.k(0,"Grid",new Z.mT(x))
t.k(0,"Grid+",new Z.mU(x))
x=V.ef("scalars",!0)
x.k(0,"0.01",new Z.mV(l))
x.k(0,"0.02",new Z.mW(l))
x.k(0,"0.04",new Z.mX(l))
x.k(0,"0.06",new Z.mZ(l))
x.k(0,"0.08",new Z.n_(l))
x.k(0,"0.1",new Z.n0(l))
x.k(0,"0.2",new Z.n1(l))
x.a1(0,"0.4",new Z.n2(l),!0)
x.k(0,"0.6",new Z.n3(l))
x.k(0,"0.8",new Z.n4(l))
x.k(0,"1.0",new Z.n5(l))
V.ni(v)},
mp:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.Q!==a){z.Q=a
y=new D.x("showFilled",!a,a,z,[P.E])
y.b=!0
z.Z(y)}}},
mq:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.ch!==a){z.ch=a
y=new D.x("showWireFrame",!a,a,z,[P.E])
y.b=!0
z.Z(y)}}},
mr:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.cx!==a){z.cx=a
y=new D.x("showVertices",!a,a,z,[P.E])
y.b=!0
z.Z(y)}}},
mC:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.cy!==a){z.cy=a
y=new D.x("showNormals",!a,a,z,[P.E])
y.b=!0
z.Z(y)}}},
mN:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.db!==a){z.db=a
y=new D.x("showBinormals",!a,a,z,[P.E])
y.b=!0
z.Z(y)}}},
mY:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.dx!==a){z.dx=a
y=new D.x("showTangentals",!a,a,z,[P.E])
y.b=!0
z.Z(y)}}},
n6:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.fr!==a){z.fr=a
y=new D.x("showFaceCenters",!a,a,z,[P.E])
y.b=!0
z.Z(y)}}},
n7:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.fx!==a){z.fx=a
y=new D.x("showFaceNormals",!a,a,z,[P.E])
y.b=!0
z.Z(y)}}},
n8:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.fy!==a){z.fy=a
y=new D.x("showFaceBinormals",!a,a,z,[P.E])
y.b=!0
z.Z(y)}}},
n9:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.go!==a){z.go=a
y=new D.x("showFaceTangentals",!a,a,z,[P.E])
y.b=!0
z.Z(y)}}},
na:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.id!==a){z.id=a
y=new D.x("showColorFill",!a,a,z,[P.E])
y.b=!0
z.Z(y)}}},
ms:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.k1!==a){z.k1=a
y=new D.x("showTxt2DColor",!a,a,z,[P.E])
y.b=!0
z.Z(y)}}},
mt:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.dy!==a){z.dy=a
y=new D.x("showTxtCube",!a,a,z,[P.E])
y.b=!0
z.Z(y)}}},
mu:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.k2!==a){z.k2=a
y=new D.x("showWeight",!a,a,z,[P.E])
y.b=!0
z.Z(y)}}},
mv:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.r1!==a){z.r1=a
y=new D.x("showBend",!a,a,z,[P.E])
y.b=!0
z.Z(y)}}},
mw:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.k3!==a){z.k3=a
y=new D.x("showAxis",!a,a,z,[P.E])
y.b=!0
z.Z(y)}}},
mx:{"^":"b:1;a",
$1:function(a){var z,y
z=this.a
if(a==null)a=!1
if(z.k4!==a){z.k4=a
y=new D.x("showAABB",!a,a,z,[P.E])
y.b=!0
z.Z(y)}}},
nb:{"^":"b:52;a",
$1:function(a){a.h4()
this.a.sck(0,a)}},
my:{"^":"b:0;a",
$0:function(){var z,y,x,w,v,u,t,s
z=F.U()
y=z.a
x=new V.u(-1,-1,1)
x=x.l(0,Math.sqrt(x.v(x)))
w=y.bb(new V.ao(1,2,4,6),new V.z(1,0,0,1),new V.I(-1,-1,0),new V.T(0,1),x,null)
y=z.a
x=new V.u(1,-1,1)
x=x.l(0,Math.sqrt(x.v(x)))
v=y.bb(new V.ao(0,3,4,6),new V.z(0,0,1,1),new V.I(1,-1,0),new V.T(1,1),x,null)
y=z.a
x=new V.u(1,1,1)
x=x.l(0,Math.sqrt(x.v(x)))
u=y.bb(new V.ao(0,2,5,6),new V.z(0,1,0,1),new V.I(1,1,0),new V.T(1,0),x,null)
y=z.a
x=V.av()
t=new V.u(-1,1,1)
t=t.l(0,Math.sqrt(t.v(t)))
s=y.bb(new V.ao(0,2,4,7),new V.z(1,1,0,1),new V.I(-1,1,0),x,t,null)
z.d.d0(H.h([w,v,u,s],[F.v]))
z.a7()
this.a.$1(z)}},
mz:{"^":"b:0;a",
$0:function(){this.a.$1(F.ch(1,null,null,1))}},
mA:{"^":"b:0;a",
$0:function(){this.a.$1(F.ch(8,null,null,8))}},
mB:{"^":"b:0;a",
$0:function(){this.a.$1(F.ch(15,null,new Z.mo(),15))}},
mo:{"^":"b:8;",
$3:function(a,b,c){var z,y,x,w
z=Math.cos(c*4*3.141592653589793+3.141592653589793)
y=Math.cos(b*4*3.141592653589793+3.141592653589793)
x=a.f
x=new V.u(x.a,x.b,x.c)
w=x.l(0,Math.sqrt(x.v(x)))
x=a.f
y=w.p(0,z*0.1+y*0.1)
a.sT(0,x.n(0,new V.I(y.a,y.b,y.c)))}},
mD:{"^":"b:0;a",
$0:function(){this.a.$1(F.ci(-1,!1,!1,0,null,8))}},
mE:{"^":"b:0;a",
$0:function(){this.a.$1(F.ci(-1,!1,!1,0,null,30))}},
mF:{"^":"b:0;a",
$0:function(){this.a.$1(F.dd(1,!0,!0,1,8,1))}},
mG:{"^":"b:0;a",
$0:function(){this.a.$1(F.dd(1,!0,!0,8,16,1))}},
mH:{"^":"b:0;a",
$0:function(){this.a.$1(F.dd(1,!0,!1,1,12,0))}},
mI:{"^":"b:0;a",
$0:function(){this.a.$1(F.fx(!0,!0,25,new Z.mn(),50))}},
mn:{"^":"b:10;",
$2:function(a,b){return Math.cos(b*4*3.141592653589793+3.141592653589793)*0.2+Math.cos(a*6*3.141592653589793)*0.3+0.8}},
mJ:{"^":"b:0;a",
$0:function(){this.a.$1(F.fG(10,20))}},
mK:{"^":"b:0;a",
$0:function(){this.a.$1(F.fG(20,40))}},
mL:{"^":"b:0;a",
$0:function(){this.a.$1(F.fF(2))}},
mM:{"^":"b:0;a",
$0:function(){this.a.$1(F.fF(3))}},
mO:{"^":"b:0;a",
$0:function(){this.a.$1(F.dk(6,null,1,6))}},
mP:{"^":"b:0;a",
$0:function(){this.a.$1(F.dk(10,null,1,10))}},
mQ:{"^":"b:0;a",
$0:function(){this.a.$1(F.dk(10,new Z.mm(),1,10))}},
mm:{"^":"b:10;",
$2:function(a,b){var z,y
z=a-0.5
y=b-0.5
return Math.cos(Math.sqrt(z*z+y*y)*3.141592653589793)*0.3}},
mR:{"^":"b:0;a",
$0:function(){this.a.$1(F.nn(30,1,15,0.5))}},
mS:{"^":"b:0;a",
$0:function(){this.a.$1(F.mh(120,1,2,12,0.3,3))}},
mT:{"^":"b:0;a",
$0:function(){this.a.$1(F.fD(4,null,4))}},
mU:{"^":"b:0;a",
$0:function(){this.a.$1(F.fD(16,new Z.ml(),16))}},
ml:{"^":"b:10;",
$2:function(a,b){return Math.sin(a*8)*Math.cos(b*8)*0.3}},
mV:{"^":"b:0;a",
$0:function(){this.a.sa3(0.01)}},
mW:{"^":"b:0;a",
$0:function(){this.a.sa3(0.02)}},
mX:{"^":"b:0;a",
$0:function(){this.a.sa3(0.04)}},
mZ:{"^":"b:0;a",
$0:function(){this.a.sa3(0.06)}},
n_:{"^":"b:0;a",
$0:function(){this.a.sa3(0.08)}},
n0:{"^":"b:0;a",
$0:function(){this.a.sa3(0.1)}},
n1:{"^":"b:0;a",
$0:function(){this.a.sa3(0.2)}},
n2:{"^":"b:0;a",
$0:function(){this.a.sa3(0.4)}},
n3:{"^":"b:0;a",
$0:function(){this.a.sa3(0.6)}},
n4:{"^":"b:0;a",
$0:function(){this.a.sa3(0.8)}},
n5:{"^":"b:0;a",
$0:function(){this.a.sa3(1)}}},1]]
setupProgram(dart,0,0)
J.Q=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dT.prototype
return J.ic.prototype}if(typeof a=="string")return J.bG.prototype
if(a==null)return J.dU.prototype
if(typeof a=="boolean")return J.ib.prototype
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bH.prototype
return a}if(a instanceof P.a)return a
return J.cl(a)}
J.b8=function(a){if(typeof a=="string")return J.bG.prototype
if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bH.prototype
return a}if(a instanceof P.a)return a
return J.cl(a)}
J.fA=function(a){if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bH.prototype
return a}if(a instanceof P.a)return a
return J.cl(a)}
J.m4=function(a){if(typeof a=="number")return J.bF.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bM.prototype
return a}
J.m5=function(a){if(typeof a=="number")return J.bF.prototype
if(typeof a=="string")return J.bG.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bM.prototype
return a}
J.dg=function(a){if(typeof a=="string")return J.bG.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.bM.prototype
return a}
J.ay=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bH.prototype
return a}if(a instanceof P.a)return a
return J.cl(a)}
J.B=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Q(a).A(a,b)}
J.fP=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.m4(a).N(a,b)}
J.dl=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.m5(a).p(a,b)}
J.fQ=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mg(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b8(a).j(a,b)}
J.fR=function(a,b,c,d){return J.ay(a).eg(a,b,c,d)}
J.fS=function(a,b){return J.dg(a).I(a,b)}
J.cq=function(a,b,c){return J.ay(a).fq(a,b,c)}
J.dm=function(a,b){return J.ay(a).V(a,b)}
J.fT=function(a,b){return J.dg(a).a_(a,b)}
J.cr=function(a,b,c){return J.b8(a).hc(a,b,c)}
J.cs=function(a,b){return J.fA(a).a8(a,b)}
J.fU=function(a,b,c,d){return J.ay(a).hp(a,b,c,d)}
J.bU=function(a){return J.ay(a).gbU(a)}
J.by=function(a){return J.Q(a).gW(a)}
J.bz=function(a){return J.fA(a).gY(a)}
J.az=function(a){return J.b8(a).gq(a)}
J.fV=function(a,b){return J.ay(a).hY(a,b)}
J.fW=function(a,b){return J.ay(a).si7(a,b)}
J.ab=function(a){return J.Q(a).i(a)}
I.ad=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.t=W.h0.prototype
C.j=W.cx.prototype
C.h=W.dJ.prototype
C.u=W.hB.prototype
C.q=W.hD.prototype
C.J=J.M.prototype
C.a=J.aV.prototype
C.d=J.dT.prototype
C.K=J.dU.prototype
C.e=J.bF.prototype
C.b=J.bG.prototype
C.R=J.bH.prototype
C.k=W.ii.prototype
C.X=W.iH.prototype
C.A=J.iM.prototype
C.c=P.cN.prototype
C.Y=W.c4.prototype
C.Z=W.jw.prototype
C.B=W.jx.prototype
C.r=J.bM.prototype
C.C=W.bp.prototype
C.D=W.kv.prototype
C.F=new P.h_(!1)
C.E=new P.fZ(C.F)
C.G=new P.iK()
C.H=new P.kg()
C.f=new P.l1()
C.p=new P.be(0)
C.I=new P.be(5e6)
C.L=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.M=function(hooks) {
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

C.N=function(getTagFallback) {
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
C.O=function() {
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
C.P=function(hooks) {
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
C.Q=function(hooks) {
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
C.x=H.h(I.ad([127,2047,65535,1114111]),[P.k])
C.l=H.h(I.ad([0,0,32776,33792,1,10240,0,0]),[P.k])
C.m=H.h(I.ad([0,0,65490,45055,65535,34815,65534,18431]),[P.k])
C.n=H.h(I.ad([0,0,26624,1023,65534,2047,65534,2047]),[P.k])
C.T=H.h(I.ad([0,0,32722,12287,65534,34815,65534,18431]),[P.k])
C.U=H.h(I.ad([0,0,65498,45055,65535,34815,65534,18431]),[P.k])
C.o=H.h(I.ad([0,0,24576,1023,65534,34815,65534,18431]),[P.k])
C.y=H.h(I.ad([0,0,32754,11263,65534,34815,65534,18431]),[P.k])
C.V=H.h(I.ad([0,0,32722,12287,65535,34815,65534,18431]),[P.k])
C.z=H.h(I.ad([0,0,65490,12287,65535,34815,65534,18431]),[P.k])
C.S=H.h(I.ad([]),[P.l])
C.W=new H.he(0,{},C.S,[P.l,P.l])
C.i=new P.k9(!1)
$.aq=0
$.bc=null
$.dr=null
$.d7=!1
$.fC=null
$.ft=null
$.fL=null
$.cj=null
$.cn=null
$.dh=null
$.b5=null
$.bu=null
$.bv=null
$.d8=!1
$.N=C.f
$.dH=null
$.dG=null
$.dF=null
$.dE=null
$.n=V.iD()
$.e1=null
$.e8=null
$.e9=null
$.eb=null
$.ei=null
$.ek=null
$.eN=null
$.eS=null
$.eP=null
$.eQ=null
$.eR=null
$.eO=null
$.eU=null
$.i0="uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n"
$.hS="precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n"
$.e7=null
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
I.$lazy(y,x,w)}})(["dD","$get$dD",function(){return H.fB("_$dart_dartClosure")},"cD","$get$cD",function(){return H.fB("_$dart_js")},"ev","$get$ev",function(){return H.ax(H.c6({
toString:function(){return"$receiver$"}}))},"ew","$get$ew",function(){return H.ax(H.c6({$method$:null,
toString:function(){return"$receiver$"}}))},"ex","$get$ex",function(){return H.ax(H.c6(null))},"ey","$get$ey",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eC","$get$eC",function(){return H.ax(H.c6(void 0))},"eD","$get$eD",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eA","$get$eA",function(){return H.ax(H.eB(null))},"ez","$get$ez",function(){return H.ax(function(){try{null.$method$}catch(z){return z.message}}())},"eF","$get$eF",function(){return H.ax(H.eB(void 0))},"eE","$get$eE",function(){return H.ax(function(){try{(void 0).$method$}catch(z){return z.message}}())},"d3","$get$d3",function(){return P.kw()},"bw","$get$bw",function(){return[]},"eM","$get$eM",function(){return P.kd()},"f0","$get$f0",function(){return H.iF(H.ce(H.h([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.k])))},"fi","$get$fi",function(){return P.j5("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fp","$get$fp",function(){return P.lE()},"dC","$get$dC",function(){return{}},"eY","$get$eY",function(){return Z.aj(0)},"eW","$get$eW",function(){return Z.aj(511)},"aI","$get$aI",function(){return Z.aj(1)},"aH","$get$aH",function(){return Z.aj(2)},"aG","$get$aG",function(){return Z.aj(4)},"b1","$get$b1",function(){return Z.aj(8)},"b2","$get$b2",function(){return Z.aj(16)},"aO","$get$aO",function(){return Z.aj(32)},"bo","$get$bo",function(){return Z.aj(64)},"eX","$get$eX",function(){return Z.aj(96)},"b3","$get$b3",function(){return Z.aj(128)},"b0","$get$b0",function(){return Z.aj(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.y},{func:1,ret:P.y,args:[P.E]},{func:1,ret:F.a0,args:[F.a0]},{func:1,ret:P.y,args:[F.C]},{func:1,ret:P.y,args:[F.v]},{func:1,ret:-1,args:[D.w]},{func:1,ret:-1,opt:[D.w]},{func:1,ret:-1},{func:1,ret:P.y,args:[F.v,P.o,P.o]},{func:1,ret:-1,args:[W.an]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:-1,args:[P.k,[P.r,E.as]]},{func:1,ret:P.y,args:[,,]},{func:1,ret:P.y,args:[W.a3]},{func:1,ret:P.o},{func:1,ret:P.y,args:[D.w]},{func:1,ret:-1,args:[W.a3]},{func:1,ret:-1,args:[W.b_]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.o,args:[P.o]},{func:1,args:[,]},{func:1,ret:P.l,args:[P.k]},{func:1,ret:P.y,args:[,]},{func:1,ret:-1,args:[W.bh]},{func:1,ret:-1,args:[P.k,[P.r,U.aa]]},{func:1,ret:V.I,args:[P.o]},{func:1,ret:W.Y,args:[W.L]},{func:1,ret:P.k,args:[P.k,P.k]},{func:1,ret:P.y,args:[P.l]},{func:1,ret:P.y,args:[P.ae]},{func:1,ret:P.y,args:[{func:1,ret:-1,args:[D.w]}]},{func:1,ret:[P.G,P.l,P.l],args:[[P.G,P.l,P.l],P.l]},{func:1,ret:P.y,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:-1,args:[W.bp]},{func:1,ret:P.y,args:[P.l,,]},{func:1,ret:P.E,args:[P.o,P.o]},{func:1,ret:P.J,args:[P.k]},{func:1,args:[,P.l]},{func:1,ret:P.J,args:[,,]},{func:1,args:[W.a3]},{func:1,ret:P.y,args:[,],opt:[,]},{func:1,ret:P.E,args:[W.L]},{func:1,ret:[P.aJ,,],args:[,]},{func:1,ret:-1,args:[P.l,P.k]},{func:1,ret:F.a0,args:[F.a0],named:{color:V.z}},{func:1,ret:P.k,args:[[P.c,P.k],P.k]},{func:1,ret:-1,args:[F.v,F.v]},{func:1,ret:P.y,args:[F.at]},{func:1,ret:-1,args:[P.l],opt:[,]},{func:1,ret:P.y,args:[P.aY]},{func:1,ret:-1,args:[P.k,P.k]},{func:1,ret:-1,args:[F.a0]},{func:1,args:[P.l]},{func:1,ret:P.l,args:[P.l]}]
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
Isolate.ad=a.ad
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
if(typeof dartMainRunner==="function")dartMainRunner(Z.fI,[])
else Z.fI([])})})()
//# sourceMappingURL=test.dart.js.map
