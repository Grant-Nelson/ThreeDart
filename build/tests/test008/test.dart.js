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
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.dl"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.dl"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.dl(this,d,e,f,true,false,a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.dm=function(){}
var dart=[["","",,H,{"^":"",mU:{"^":"a;a"}}],["","",,J,{"^":"",
dr:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cr:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.dq==null){H.mi()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.d(P.cf("Return interceptor for "+H.f(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cL()]
if(v!=null)return v
v=H.mm(a)
if(v!=null)return v
if(typeof a=="function")return C.a2
y=Object.getPrototypeOf(a)
if(y==null)return C.I
if(y===Object.prototype)return C.I
if(typeof w=="function"){Object.defineProperty(w,$.$get$cL(),{value:C.x,enumerable:false,writable:true,configurable:true})
return C.x}return C.x},
A:{"^":"a;",
u:function(a,b){return a===b},
gT:function(a){return H.bl(a)},
i:["dY",function(a){return"Instance of '"+H.aW(a)+"'"}],
"%":"DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|WebGL2RenderingContext|WebGLActiveInfo|WebGLRenderbuffer"},
i6:{"^":"A;",
i:function(a){return String(a)},
gT:function(a){return a?519018:218159},
$isG:1},
e6:{"^":"A;",
u:function(a,b){return null==b},
i:function(a){return"null"},
gT:function(a){return 0},
$isz:1},
cM:{"^":"A;",
gT:function(a){return 0},
i:["e_",function(a){return String(a)}]},
iE:{"^":"cM;"},
cg:{"^":"cM;"},
bG:{"^":"cM;",
i:function(a){var z=a[$.$get$dN()]
if(z==null)return this.e_(a)
return"JavaScript function for "+H.f(J.a8(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isbE:1},
aT:{"^":"A;$ti",
h:function(a,b){H.t(b,H.n(a,0))
if(!!a.fixed$length)H.M(P.Q("add"))
a.push(b)},
U:function(a,b){var z
if(!!a.fixed$length)H.M(P.Q("remove"))
for(z=0;z<a.length;++z)if(J.S(a[z],b)){a.splice(z,1)
return!0}return!1},
M:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.n(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.d(P.aq(a))}},
k:function(a,b){var z,y
z=new Array(a.length)
z.fixed$length=Array
for(y=0;y<a.length;++y)this.m(z,y,H.f(a[y]))
return z.join(b)},
hs:function(a){return this.k(a,"")},
hk:function(a,b,c,d){var z,y,x
H.t(b,d)
H.j(c,{func:1,ret:d,args:[d,H.n(a,0)]})
z=a.length
for(y=b,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.d(P.aq(a))}return y},
hj:function(a,b,c){var z,y,x
H.j(b,{func:1,ret:P.G,args:[H.n(a,0)]})
z=a.length
for(y=0;y<z;++y){x=a[y]
if(b.$1(x))return x
if(a.length!==z)throw H.d(P.aq(a))}throw H.d(H.cK())},
hi:function(a,b){return this.hj(a,b,null)},
a_:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
dX:function(a,b,c){if(b<0||b>a.length)throw H.d(P.V(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.V(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.n(a,0)])
return H.b(a.slice(b,c),[H.n(a,0)])},
gag:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.d(H.cK())},
cW:function(a,b){var z,y
H.j(b,{func:1,ret:P.G,args:[H.n(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.d(P.aq(a))}return!1},
W:function(a,b){var z
for(z=0;z<a.length;++z)if(J.S(a[z],b))return!0
return!1},
i:function(a){return P.cJ(a,"[","]")},
gR:function(a){return new J.ao(a,a.length,0,[H.n(a,0)])},
gT:function(a){return H.bl(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.M(P.Q("set length"))
if(b<0)throw H.d(P.V(b,0,null,"newLength",null))
a.length=b},
p:function(a,b){if(b>=a.length||b<0)throw H.d(H.b7(a,b))
return a[b]},
m:function(a,b,c){H.t(c,H.n(a,0))
if(!!a.immutable$list)H.M(P.Q("indexed set"))
if(b>=a.length||b<0)throw H.d(H.b7(a,b))
a[b]=c},
$isp:1,
$isc:1,
n:{
i5:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.cz(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.V(a,0,4294967295,"length",null))
return J.e3(new Array(a),b)},
e3:function(a,b){return J.c_(H.b(a,[b]))},
c_:function(a){H.bP(a)
a.fixed$length=Array
return a}}},
mT:{"^":"aT;$ti"},
ao:{"^":"a;a,b,c,0d,$ti",
scj:function(a){this.d=H.t(a,H.n(this,0))},
gE:function(){return this.d},
A:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.d(H.C(z))
x=this.c
if(x>=y){this.scj(null)
return!1}this.scj(z[x]);++this.c
return!0},
$isaL:1},
c0:{"^":"A;",
i3:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.d(P.Q(""+a+".toInt()"))},
bT:function(a){var z,y
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){z=a|0
return a===z?z:z-1}y=Math.floor(a)
if(isFinite(y))return y
throw H.d(P.Q(""+a+".floor()"))},
ab:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.Q(""+a+".round()"))},
dv:function(a,b){var z,y
if(b>20)throw H.d(P.V(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0)y=1/a<0
else y=!1
if(y)return"-"+z
return z},
b0:function(a,b){var z,y,x,w
if(b<2||b>36)throw H.d(P.V(b,2,36,"radix",null))
z=a.toString(b)
if(C.b.V(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.M(P.Q("Unexpected toString result: "+z))
x=y.length
if(1>=x)return H.i(y,1)
z=y[1]
if(3>=x)return H.i(y,3)
w=+y[3]
x=y[2]
if(x!=null){z+=x
w-=x.length}return z+C.b.t("0",w)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gT:function(a){return a&0x1FFFFFFF},
b3:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
e2:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cO(a,b)},
av:function(a,b){return(a|0)===a?a/b|0:this.cO(a,b)},
cO:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.d(P.Q("Result of truncating division is "+H.f(z)+": "+H.f(a)+" ~/ "+b))},
au:function(a,b){var z
if(a>0)z=this.cM(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
fv:function(a,b){if(b<0)throw H.d(H.aa(b))
return this.cM(a,b)},
cM:function(a,b){return b>31?0:a>>>b},
O:function(a,b){if(typeof b!=="number")throw H.d(H.aa(b))
return a<b},
$isw:1,
$isac:1},
e5:{"^":"c0;",$isl:1},
e4:{"^":"c0;"},
c1:{"^":"A;",
V:function(a,b){if(b<0)throw H.d(H.b7(a,b))
if(b>=a.length)H.M(H.b7(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(b>=a.length)throw H.d(H.b7(a,b))
return a.charCodeAt(b)},
G:function(a,b){H.y(b)
if(typeof b!=="string")throw H.d(P.cz(b,null,null))
return a+b},
aD:function(a,b,c,d){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)H.M(H.aa(b))
c=P.aO(b,c,a.length,null,null,null)
z=a.substring(0,b)
y=a.substring(c)
return z+d+y},
a5:function(a,b,c){var z
if(typeof c!=="number"||Math.floor(c)!==c)H.M(H.aa(c))
if(typeof c!=="number")return c.O()
if(c<0||c>a.length)throw H.d(P.V(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
X:function(a,b){return this.a5(a,b,0)},
q:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.M(H.aa(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.O()
if(b<0)throw H.d(P.c9(b,null,null))
if(b>c)throw H.d(P.c9(b,null,null))
if(c>a.length)throw H.d(P.c9(c,null,null))
return a.substring(b,c)},
ah:function(a,b){return this.q(a,b,null)},
i6:function(a){return a.toLowerCase()},
t:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.O)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hG:function(a,b,c){var z=b-a.length
if(z<=0)return a
return this.t(c,z)+a},
aa:function(a,b){return this.hG(a,b," ")},
de:function(a,b,c){var z
if(c<0||c>a.length)throw H.d(P.V(c,0,a.length,null,null))
z=a.indexOf(b,c)
return z},
dd:function(a,b){return this.de(a,b,0)},
fX:function(a,b,c){if(c>a.length)throw H.d(P.V(c,0,a.length,null,null))
return H.fW(a,b,c)},
i:function(a){return a},
gT:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gl:function(a){return a.length},
$isem:1,
$ish:1}}],["","",,H,{"^":"",
cs:function(a){var z,y
z=a^48
if(z<=9)return z
y=a|32
if(97<=y&&y<=102)return y-87
return-1},
cK:function(){return new P.cX("No element")},
i4:function(){return new P.cX("Too many elements")},
o:{"^":"jX;a",
gl:function(a){return this.a.length},
p:function(a,b){return C.b.V(this.a,b)},
$asd4:function(){return[P.l]},
$asN:function(){return[P.l]},
$asp:function(){return[P.l]},
$asc:function(){return[P.l]}},
dU:{"^":"p;"},
c3:{"^":"dU;$ti",
gR:function(a){return new H.cO(this,this.gl(this),0,[H.Y(this,"c3",0)])},
c7:function(a,b){return this.dZ(0,H.j(b,{func:1,ret:P.G,args:[H.Y(this,"c3",0)]}))}},
cO:{"^":"a;a,b,c,0d,$ti",
saK:function(a){this.d=H.t(a,H.n(this,0))},
gE:function(){return this.d},
A:function(){var z,y,x,w
z=this.a
y=J.b8(z)
x=y.gl(z)
if(this.b!==x)throw H.d(P.aq(z))
w=this.c
if(w>=x){this.saK(null)
return!1}this.saK(y.a_(z,w));++this.c
return!0},
$isaL:1},
iq:{"^":"p;a,b,$ti",
gR:function(a){return new H.ir(J.aR(this.a),this.b,this.$ti)},
gl:function(a){return J.ai(this.a)},
a_:function(a,b){return this.b.$1(J.bR(this.a,b))},
$asp:function(a,b){return[b]}},
ir:{"^":"aL;0a,b,c,$ti",
saK:function(a){this.a=H.t(a,H.n(this,1))},
A:function(){var z=this.b
if(z.A()){this.saK(this.c.$1(z.gE()))
return!0}this.saK(null)
return!1},
gE:function(){return this.a},
$asaL:function(a,b){return[b]}},
is:{"^":"c3;a,b,$ti",
gl:function(a){return J.ai(this.a)},
a_:function(a,b){return this.b.$1(J.bR(this.a,b))},
$asc3:function(a,b){return[b]},
$asp:function(a,b){return[b]}},
d9:{"^":"p;a,b,$ti",
gR:function(a){return new H.kq(J.aR(this.a),this.b,this.$ti)}},
kq:{"^":"aL;a,b,$ti",
A:function(){var z,y
for(z=this.a,y=this.b;z.A();)if(y.$1(z.gE()))return!0
return!1},
gE:function(){return this.a.gE()}},
bY:{"^":"a;$ti"},
d4:{"^":"a;$ti",
m:function(a,b,c){H.t(c,H.Y(this,"d4",0))
throw H.d(P.Q("Cannot modify an unmodifiable list"))}},
jX:{"^":"c2+d4;"}}],["","",,H,{"^":"",
ht:function(){throw H.d(P.Q("Cannot modify unmodifiable Map"))},
bb:function(a){var z,y
z=H.y(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
m8:function(a){return init.types[H.U(a)]},
ml:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.E(a).$isak},
f:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a8(a)
if(typeof z!=="string")throw H.d(H.aa(a))
return z},
bl:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iP:function(a,b){var z,y,x,w,v,u
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.i(z,3)
y=H.y(z[3])
if(b==null){if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.V(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.b.C(w,u)|32)>x)return}return parseInt(a,b)},
aW:function(a){return H.iG(a)+H.di(H.aQ(a),0,null)},
iG:function(a){var z,y,x,w,v,u,t,s,r
z=J.E(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.U||!!z.$iscg){u=C.B(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.bb(w.length>1&&C.b.C(w,0)===36?C.b.ah(w,1):w)},
iH:function(){if(!!self.location)return self.location.href
return},
er:function(a){var z,y,x,w,v
H.bP(a)
z=J.ai(a)
if(z<=500)return String.fromCharCode.apply(null,a)
for(y="",x=0;x<z;x=w){w=x+500
v=w<z?w:z
y+=String.fromCharCode.apply(null,a.slice(x,v))}return y},
iQ:function(a){var z,y,x,w
z=H.b([],[P.l])
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.C)(a),++x){w=a[x]
if(typeof w!=="number"||Math.floor(w)!==w)throw H.d(H.aa(w))
if(w<=65535)C.a.h(z,w)
else if(w<=1114111){C.a.h(z,55296+(C.d.au(w-65536,10)&1023))
C.a.h(z,56320+(w&1023))}else throw H.d(H.aa(w))}return H.er(z)},
es:function(a){var z,y,x
for(z=a.length,y=0;y<z;++y){x=a[y]
if(typeof x!=="number"||Math.floor(x)!==x)throw H.d(H.aa(x))
if(x<0)throw H.d(H.aa(x))
if(x>65535)return H.iQ(a)}return H.er(a)},
iR:function(a,b,c){var z,y,x,w
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(z=b,y="";z<c;z=x){x=z+500
w=x<c?x:c
y+=String.fromCharCode.apply(null,a.subarray(z,w))}return y},
aX:function(a){var z
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.d.au(z,10))>>>0,56320|z&1023)}}throw H.d(P.V(a,0,1114111,null,null))},
aV:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iO:function(a){var z=H.aV(a).getFullYear()+0
return z},
iM:function(a){var z=H.aV(a).getMonth()+1
return z},
iI:function(a){var z=H.aV(a).getDate()+0
return z},
iJ:function(a){var z=H.aV(a).getHours()+0
return z},
iL:function(a){var z=H.aV(a).getMinutes()+0
return z},
iN:function(a){var z=H.aV(a).getSeconds()+0
return z},
iK:function(a){var z=H.aV(a).getMilliseconds()+0
return z},
u:function(a){throw H.d(H.aa(a))},
i:function(a,b){if(a==null)J.ai(a)
throw H.d(H.b7(a,b))},
b7:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aw(!0,b,"index",null)
z=H.U(J.ai(a))
if(!(b<0)){if(typeof z!=="number")return H.u(z)
y=b>=z}else y=!0
if(y)return P.aS(b,a,"index",null,z)
return P.c9(b,"index",null)},
m3:function(a,b,c){if(a>c)return new P.c8(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c8(a,c,!0,b,"end","Invalid value")
return new P.aw(!0,b,"end",null)},
aa:function(a){return new P.aw(!0,a,null,null)},
lZ:function(a){if(typeof a!=="number")throw H.d(H.aa(a))
return a},
d:function(a){var z
if(a==null)a=new P.el()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fX})
z.name=""}else z.toString=H.fX
return z},
fX:function(){return J.a8(this.dartException)},
M:function(a){throw H.d(a)},
C:function(a){throw H.d(P.aq(a))},
a_:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.mJ(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.au(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cN(H.f(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.ek(H.f(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$eL()
u=$.$get$eM()
t=$.$get$eN()
s=$.$get$eO()
r=$.$get$eS()
q=$.$get$eT()
p=$.$get$eQ()
$.$get$eP()
o=$.$get$eV()
n=$.$get$eU()
m=v.a6(y)
if(m!=null)return z.$1(H.cN(H.y(y),m))
else{m=u.a6(y)
if(m!=null){m.method="call"
return z.$1(H.cN(H.y(y),m))}else{m=t.a6(y)
if(m==null){m=s.a6(y)
if(m==null){m=r.a6(y)
if(m==null){m=q.a6(y)
if(m==null){m=p.a6(y)
if(m==null){m=s.a6(y)
if(m==null){m=o.a6(y)
if(m==null){m=n.a6(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.ek(H.y(y),m))}}return z.$1(new H.jW(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.ez()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aw(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.ez()
return a},
b9:function(a){var z
if(a==null)return new H.fo(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.fo(a)},
m6:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.m(0,a[y],a[x])}return b},
mk:function(a,b,c,d,e,f){H.e(a,"$isbE")
switch(H.U(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.a1("Unsupported number of arguments for wrapped closure"))},
b6:function(a,b){var z
H.U(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mk)
a.$identity=z
return z},
hp:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.E(d).$isc){z.$reflectionInfo=d
x=H.iY(z).r}else x=d
w=e?Object.create(new H.jj().constructor.prototype):Object.create(new H.cB(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.ap
if(typeof u!=="number")return u.G()
$.ap=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.dJ(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.m8,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.dC:H.cC
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.d("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.dJ(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w["call*"]=q
w.$R=z.$R
w.$D=z.$D
return v},
hm:function(a,b,c,d){var z=H.cC
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dJ:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.ho(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.hm(y,!w,z,b)
if(y===0){w=$.ap
if(typeof w!=="number")return w.G()
$.ap=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.be
if(v==null){v=H.bT("self")
$.be=v}return new Function(w+H.f(v)+";return "+u+"."+H.f(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ap
if(typeof w!=="number")return w.G()
$.ap=w+1
t+=w
w="return function("+t+"){return this."
v=$.be
if(v==null){v=H.bT("self")
$.be=v}return new Function(w+H.f(v)+"."+H.f(z)+"("+t+");}")()},
hn:function(a,b,c,d){var z,y
z=H.cC
y=H.dC
switch(b?-1:a){case 0:throw H.d(H.j6("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
ho:function(a,b){var z,y,x,w,v,u,t,s
z=$.be
if(z==null){z=H.bT("self")
$.be=z}y=$.dB
if(y==null){y=H.bT("receiver")
$.dB=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.hn(w,!u,x,b)
if(w===1){z="return function(){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+");"
y=$.ap
if(typeof y!=="number")return y.G()
$.ap=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+", "+s+");"
y=$.ap
if(typeof y!=="number")return y.G()
$.ap=y+1
return new Function(z+y+"}")()},
dl:function(a,b,c,d,e,f,g){return H.hp(a,b,H.U(c),d,!!e,!!f,g)},
y:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.an(a,"String"))},
m4:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.an(a,"double"))},
mB:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.an(a,"num"))},
dj:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.an(a,"bool"))},
U:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.an(a,"int"))},
fU:function(a,b){throw H.d(H.an(a,H.bb(H.y(b).substring(3))))},
mD:function(a,b){throw H.d(H.hl(a,H.bb(H.y(b).substring(3))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.E(a)[b])return a
H.fU(a,b)},
ab:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.E(a)[b]
else z=!0
if(z)return a
H.mD(a,b)},
bP:function(a){if(a==null)return a
if(!!J.E(a).$isc)return a
throw H.d(H.an(a,"List<dynamic>"))},
fR:function(a,b){var z
if(a==null)return a
z=J.E(a)
if(!!z.$isc)return a
if(z[b])return a
H.fU(a,b)},
fN:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.U(z)]
else return a.$S()}return},
bO:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fN(J.E(a))
if(z==null)return!1
return H.fC(z,null,b,null)},
j:function(a,b){var z,y
if(a==null)return a
if($.df)return a
$.df=!0
try{if(H.bO(a,b))return a
z=H.cv(b)
y=H.an(a,z)
throw H.d(y)}finally{$.df=!1}},
dn:function(a,b){if(a!=null&&!H.dk(a,b))H.M(H.an(a,H.cv(b)))
return a},
fI:function(a){var z,y
z=J.E(a)
if(!!z.$isk){y=H.fN(z)
if(y!=null)return H.cv(y)
return"Closure"}return H.aW(a)},
mI:function(a){throw H.d(new P.hw(H.y(a)))},
fO:function(a){return init.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
aQ:function(a){if(a==null)return
return a.$ti},
nm:function(a,b,c){return H.ba(a["$as"+H.f(c)],H.aQ(b))},
bx:function(a,b,c,d){var z
H.y(c)
H.U(d)
z=H.ba(a["$as"+H.f(c)],H.aQ(b))
return z==null?null:z[d]},
Y:function(a,b,c){var z
H.y(b)
H.U(c)
z=H.ba(a["$as"+H.f(b)],H.aQ(a))
return z==null?null:z[c]},
n:function(a,b){var z
H.U(b)
z=H.aQ(a)
return z==null?null:z[b]},
cv:function(a){return H.aP(a,null)},
aP:function(a,b){var z,y
H.m(b,"$isc",[P.h],"$asc")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bb(a[0].builtin$cls)+H.di(a,1,b)
if(typeof a=="function")return H.bb(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.U(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.i(b,y)
return H.f(b[y])}if('func' in a)return H.lP(a,b)
if('futureOr' in a)return"FutureOr<"+H.aP("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lP:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.h]
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
t=C.b.G(t,b[r])
q=y[u]
if(q!=null&&q!==P.a)t+=" extends "+H.aP(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aP(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aP(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aP(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.m5(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.y(z[l])
n=n+m+H.aP(i[h],b)+(" "+H.f(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
di:function(a,b,c){var z,y,x,w,v,u
H.m(c,"$isc",[P.h],"$asc")
if(a==null)return""
z=new P.am("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aP(u,c)}return"<"+z.i(0)+">"},
ba:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bv:function(a,b,c,d){var z,y
H.y(b)
H.bP(c)
H.y(d)
if(a==null)return!1
z=H.aQ(a)
y=J.E(a)
if(y[b]==null)return!1
return H.fL(H.ba(y[d],z),null,c,null)},
m:function(a,b,c,d){H.y(b)
H.bP(c)
H.y(d)
if(a==null)return a
if(H.bv(a,b,c,d))return a
throw H.d(H.an(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bb(b.substring(3))+H.di(c,0,null),init.mangledGlobalNames)))},
fL:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.ah(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.ah(a[y],b,c[y],d))return!1
return!0},
nk:function(a,b,c){return a.apply(b,H.ba(J.E(b)["$as"+H.f(c)],H.aQ(b)))},
fQ:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="a"||a.builtin$cls==="z"||a===-1||a===-2||H.fQ(z)}return!1},
dk:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="a"||b.builtin$cls==="z"||b===-1||b===-2||H.fQ(b)
if(b==null||b===-1||b.builtin$cls==="a"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dk(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bO(a,b)}z=J.E(a).constructor
y=H.aQ(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.ah(z,null,b,null)},
t:function(a,b){if(a!=null&&!H.dk(a,b))throw H.d(H.an(a,H.cv(b)))
return a},
ah:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="a"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="a"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ah(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="z")return!0
if('func' in c)return H.fC(a,b,c,d)
if('func' in a)return c.builtin$cls==="bE"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.ah("type" in a?a.type:null,b,x,d)
else if(H.ah(a,b,x,d))return!0
else{if(!('$is'+"bh" in y.prototype))return!1
w=y.prototype["$as"+"bh"]
v=H.ba(w,z?a.slice(1):null)
return H.ah(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.fL(H.ba(r,z),b,u,d)},
fC:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.ah(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.ah(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.ah(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.ah(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.mA(m,b,l,d)},
mA:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.ah(c[w],d,a[w],b))return!1}return!0},
nl:function(a,b,c){Object.defineProperty(a,H.y(b),{value:c,enumerable:false,writable:true,configurable:true})},
mm:function(a){var z,y,x,w,v,u
z=H.y($.fP.$1(a))
y=$.cp[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ct[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.y($.fK.$2(a,z))
if(z!=null){y=$.cp[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ct[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cu(x)
$.cp[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.ct[z]=x
return x}if(v==="-"){u=H.cu(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fT(a,x)
if(v==="*")throw H.d(P.cf(z))
if(init.leafTags[z]===true){u=H.cu(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fT(a,x)},
fT:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dr(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cu:function(a){return J.dr(a,!1,null,!!a.$isak)},
mz:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cu(z)
else return J.dr(z,c,null,null)},
mi:function(){if(!0===$.dq)return
$.dq=!0
H.mj()},
mj:function(){var z,y,x,w,v,u,t,s
$.cp=Object.create(null)
$.ct=Object.create(null)
H.me()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fV.$1(v)
if(u!=null){t=H.mz(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
me:function(){var z,y,x,w,v,u,t
z=C.a_()
z=H.b5(C.X,H.b5(C.a1,H.b5(C.A,H.b5(C.A,H.b5(C.a0,H.b5(C.Y,H.b5(C.Z(C.B),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fP=new H.mf(v)
$.fK=new H.mg(u)
$.fV=new H.mh(t)},
b5:function(a,b){return a(b)||b},
fW:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
du:function(a,b,c){var z,y,x
if(b==="")if(a==="")return c
else{z=a.length
for(y=c,x=0;x<z;++x)y=y+a[x]+c
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hs:{"^":"a;$ti",
i:function(a){return P.cP(this)},
m:function(a,b,c){H.t(b,H.n(this,0))
H.t(c,H.n(this,1))
return H.ht()},
$isB:1},
hu:{"^":"hs;a,b,c,$ti",
gl:function(a){return this.a},
b9:function(a){if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
p:function(a,b){if(!this.b9(b))return
return this.cz(b)},
cz:function(a){return this.b[H.y(a)]},
M:function(a,b){var z,y,x,w,v
z=H.n(this,1)
H.j(b,{func:1,ret:-1,args:[H.n(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.t(this.cz(v),z))}}},
iX:{"^":"a;a,b,c,d,e,f,r,0x",n:{
iY:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.c_(z)
y=z[0]
x=z[1]
return new H.iX(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
jF:{"^":"a;a,b,c,d,e,f",
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
n:{
av:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.b([],[P.h])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jF(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
cd:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eR:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
iB:{"^":"X;a,b",
i:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
n:{
ek:function(a,b){return new H.iB(a,b==null?null:b.method)}}},
i9:{"^":"X;a,b,c",
i:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.f(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.f(this.a)+")"},
n:{
cN:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.i9(a,y,z?null:b.receiver)}}},
jW:{"^":"X;a",
i:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
mJ:{"^":"k:19;a",
$1:function(a){if(!!J.E(a).$isX)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
fo:{"^":"a;a,0b",
i:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isaA:1},
k:{"^":"a;",
i:function(a){return"Closure '"+H.aW(this).trim()+"'"},
gdE:function(){return this},
$isbE:1,
gdE:function(){return this}},
eD:{"^":"k;"},
jj:{"^":"eD;",
i:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.bb(z)+"'"}},
cB:{"^":"eD;a,b,c,d",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cB))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gT:function(a){var z,y
z=this.c
if(z==null)y=H.bl(this.a)
else y=typeof z!=="object"?J.bz(z):H.bl(z)
return(y^H.bl(this.b))>>>0},
i:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.aW(z)+"'")},
n:{
cC:function(a){return a.a},
dC:function(a){return a.c},
bT:function(a){var z,y,x,w,v
z=new H.cB("self","target","receiver","name")
y=J.c_(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
jG:{"^":"X;a",
i:function(a){return this.a},
n:{
an:function(a,b){return new H.jG("TypeError: "+H.f(P.bV(a))+": type '"+H.fI(a)+"' is not a subtype of type '"+b+"'")}}},
hk:{"^":"X;a",
i:function(a){return this.a},
n:{
hl:function(a,b){return new H.hk("CastError: "+H.f(P.bV(a))+": type '"+H.fI(a)+"' is not a subtype of type '"+b+"'")}}},
j5:{"^":"X;a",
i:function(a){return"RuntimeError: "+H.f(this.a)},
n:{
j6:function(a){return new H.j5(a)}}},
aM:{"^":"ee;a,0b,0c,0d,0e,0f,r,$ti",
gl:function(a){return this.a},
ghr:function(a){return this.a===0},
gaf:function(){return new H.id(this,[H.n(this,0)])},
b9:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.ct(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.ct(y,a)}else return this.ho(a)},
ho:function(a){var z=this.d
if(z==null)return!1
return this.bW(this.bt(z,this.bV(a)),a)>=0},
p:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.b5(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.b5(w,b)
x=y==null?null:y.b
return x}else return this.hp(b)},
hp:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bt(z,this.bV(a))
x=this.bW(y,a)
if(x<0)return
return y[x].b},
m:function(a,b,c){var z,y
H.t(b,H.n(this,0))
H.t(c,H.n(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bA()
this.b=z}this.ck(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bA()
this.c=y}this.ck(y,b,c)}else this.hq(b,c)},
hq:function(a,b){var z,y,x,w
H.t(a,H.n(this,0))
H.t(b,H.n(this,1))
z=this.d
if(z==null){z=this.bA()
this.d=z}y=this.bV(a)
x=this.bt(z,y)
if(x==null)this.bF(z,y,[this.bn(a,b)])
else{w=this.bW(x,a)
if(w>=0)x[w].b=b
else x.push(this.bn(a,b))}},
M:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.n(this,0),H.n(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.d(P.aq(this))
z=z.c}},
ck:function(a,b,c){var z
H.t(b,H.n(this,0))
H.t(c,H.n(this,1))
z=this.b5(a,b)
if(z==null)this.bF(a,b,this.bn(b,c))
else z.b=c},
eg:function(){this.r=this.r+1&67108863},
bn:function(a,b){var z,y
z=new H.ic(H.t(a,H.n(this,0)),H.t(b,H.n(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.eg()
return z},
bV:function(a){return J.bz(a)&0x3ffffff},
bW:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.S(a[y].a,b))return y
return-1},
i:function(a){return P.cP(this)},
b5:function(a,b){return a[b]},
bt:function(a,b){return a[b]},
bF:function(a,b,c){a[b]=c},
eu:function(a,b){delete a[b]},
ct:function(a,b){return this.b5(a,b)!=null},
bA:function(){var z=Object.create(null)
this.bF(z,"<non-identifier-key>",z)
this.eu(z,"<non-identifier-key>")
return z},
$ise8:1},
ic:{"^":"a;a,b,0c,0d"},
id:{"^":"dU;a,$ti",
gl:function(a){return this.a.a},
gR:function(a){var z,y
z=this.a
y=new H.ie(z,z.r,this.$ti)
y.c=z.e
return y}},
ie:{"^":"a;a,b,0c,0d,$ti",
scl:function(a){this.d=H.t(a,H.n(this,0))},
gE:function(){return this.d},
A:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aq(z))
else{z=this.c
if(z==null){this.scl(null)
return!1}else{this.scl(z.a)
this.c=this.c.c
return!0}}},
$isaL:1},
mf:{"^":"k:19;a",
$1:function(a){return this.a(a)}},
mg:{"^":"k:51;a",
$2:function(a,b){return this.a(a,b)}},
mh:{"^":"k:50;a",
$1:function(a){return this.a(H.y(a))}},
i7:{"^":"a;a,b,0c,0d",
i:function(a){return"RegExp/"+this.a+"/"},
$isem:1,
$isiZ:1,
n:{
i8:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.d(P.P("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
m5:function(a){return J.e3(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
mC:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
cm:function(a){return a},
iw:function(a){return new Int8Array(a)},
aH:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.b7(b,a))},
lJ:function(a,b,c){var z
if(!(a>>>0!==a))z=b>>>0!==b||a>b||b>c
else z=!0
if(z)throw H.d(H.m3(a,b,c))
return b},
cT:{"^":"A;",$iscT:1,$isjH:1,"%":";ArrayBufferView;cS|fk|fl|ix|fm|fn|aU"},
cS:{"^":"cT;",
gl:function(a){return a.length},
$isak:1,
$asak:I.dm},
ix:{"^":"fl;",
p:function(a,b){H.aH(b,a,a.length)
return a[b]},
m:function(a,b,c){H.m4(c)
H.aH(b,a,a.length)
a[b]=c},
$asbY:function(){return[P.w]},
$asN:function(){return[P.w]},
$isp:1,
$asp:function(){return[P.w]},
$isc:1,
$asc:function(){return[P.w]},
"%":"Float32Array"},
aU:{"^":"fn;",
m:function(a,b,c){H.U(c)
H.aH(b,a,a.length)
a[b]=c},
$asbY:function(){return[P.l]},
$asN:function(){return[P.l]},
$isp:1,
$asp:function(){return[P.l]},
$isc:1,
$asc:function(){return[P.l]}},
mV:{"^":"aU;",
p:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Int16Array"},
mW:{"^":"aU;",
p:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Int32Array"},
mX:{"^":"aU;",
p:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Int8Array"},
mY:{"^":"aU;",
p:function(a,b){H.aH(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
mZ:{"^":"aU;",
gl:function(a){return a.length},
p:function(a,b){H.aH(b,a,a.length)
return a[b]},
$isn7:1,
"%":"CanvasPixelArray|Uint8ClampedArray"},
ei:{"^":"aU;",
gl:function(a){return a.length},
p:function(a,b){H.aH(b,a,a.length)
return a[b]},
$isei:1,
$isF:1,
"%":";Uint8Array"},
fk:{"^":"cS+N;"},
fl:{"^":"fk+bY;"},
fm:{"^":"cS+N;"},
fn:{"^":"fm+bY;"}}],["","",,P,{"^":"",
ks:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.lW()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b6(new P.ku(z),1)).observe(y,{childList:true})
return new P.kt(z,y,x)}else if(self.setImmediate!=null)return P.lX()
return P.lY()},
nb:[function(a){self.scheduleImmediate(H.b6(new P.kv(H.j(a,{func:1,ret:-1})),0))},"$1","lW",4,0,11],
nc:[function(a){self.setImmediate(H.b6(new P.kw(H.j(a,{func:1,ret:-1})),0))},"$1","lX",4,0,11],
nd:[function(a){P.d_(C.u,H.j(a,{func:1,ret:-1}))},"$1","lY",4,0,11],
d_:function(a,b){var z
H.j(b,{func:1,ret:-1})
z=C.d.av(a.a,1000)
return P.lc(z<0?0:z,b)},
eI:function(a,b){var z
H.j(b,{func:1,ret:-1,args:[P.aY]})
z=C.d.av(a.a,1000)
return P.ld(z<0?0:z,b)},
lS:function(a,b){if(H.bO(a,{func:1,args:[P.a,P.aA]}))return H.j(a,{func:1,ret:null,args:[P.a,P.aA]})
if(H.bO(a,{func:1,args:[P.a]}))return H.j(a,{func:1,ret:null,args:[P.a]})
throw H.d(P.cz(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lR:function(){var z,y
for(;z=$.b4,z!=null;){$.bt=null
y=z.b
$.b4=y
if(y==null)$.bs=null
z.a.$0()}},
nj:[function(){$.dg=!0
try{P.lR()}finally{$.bt=null
$.dg=!1
if($.b4!=null)$.$get$da().$1(P.fM())}},"$0","fM",0,0,3],
fH:function(a){var z=new P.fb(H.j(a,{func:1,ret:-1}))
if($.b4==null){$.bs=z
$.b4=z
if(!$.dg)$.$get$da().$1(P.fM())}else{$.bs.b=z
$.bs=z}},
lV:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
z=$.b4
if(z==null){P.fH(a)
$.bt=$.bs
return}y=new P.fb(a)
x=$.bt
if(x==null){y.b=z
$.bt=y
$.b4=y}else{y.b=x.b
x.b=y
$.bt=y
if(y.b==null)$.bs=y}},
mE:function(a){var z,y
z={func:1,ret:-1}
H.j(a,z)
y=$.J
if(C.h===y){P.co(null,null,C.h,a)
return}y.toString
P.co(null,null,y,H.j(y.bJ(a),z))},
eH:function(a,b){var z,y
z={func:1,ret:-1}
H.j(b,z)
y=$.J
if(y===C.h){y.toString
return P.d_(a,b)}return P.d_(a,H.j(y.bJ(b),z))},
jC:function(a,b){var z,y,x
z={func:1,ret:-1,args:[P.aY]}
H.j(b,z)
y=$.J
if(y===C.h){y.toString
return P.eI(a,b)}x=y.cY(b,P.aY)
$.J.toString
return P.eI(a,H.j(x,z))},
cn:function(a,b,c,d,e){var z={}
z.a=d
P.lV(new P.lT(z,e))},
fD:function(a,b,c,d,e){var z,y
H.j(d,{func:1,ret:e})
y=$.J
if(y===c)return d.$0()
$.J=c
z=y
try{y=d.$0()
return y}finally{$.J=z}},
fE:function(a,b,c,d,e,f,g){var z,y
H.j(d,{func:1,ret:f,args:[g]})
H.t(e,g)
y=$.J
if(y===c)return d.$1(e)
$.J=c
z=y
try{y=d.$1(e)
return y}finally{$.J=z}},
lU:function(a,b,c,d,e,f,g,h,i){var z,y
H.j(d,{func:1,ret:g,args:[h,i]})
H.t(e,h)
H.t(f,i)
y=$.J
if(y===c)return d.$2(e,f)
$.J=c
z=y
try{y=d.$2(e,f)
return y}finally{$.J=z}},
co:function(a,b,c,d){var z
H.j(d,{func:1,ret:-1})
z=C.h!==c
if(z)d=!(!z||!1)?c.bJ(d):c.fQ(d,-1)
P.fH(d)},
ku:{"^":"k:20;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
kt:{"^":"k:45;a,b,c",
$1:function(a){var z,y
this.a.a=H.j(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
kv:{"^":"k:0;a",
$0:function(){this.a.$0()}},
kw:{"^":"k:0;a",
$0:function(){this.a.$0()}},
fr:{"^":"a;a,0b,c",
ee:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b6(new P.lf(this,b),0),a)
else throw H.d(P.Q("`setTimeout()` not found."))},
ef:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.b6(new P.le(this,a,Date.now(),b),0),a)
else throw H.d(P.Q("Periodic timer."))},
$isaY:1,
n:{
lc:function(a,b){var z=new P.fr(!0,0)
z.ee(a,b)
return z},
ld:function(a,b){var z=new P.fr(!1,0)
z.ef(a,b)
return z}}},
lf:{"^":"k:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
le:{"^":"k:0;a,b,c,d",
$0:function(){var z,y,x,w
z=this.a
y=z.c+1
x=this.b
if(x>0){w=Date.now()-this.c
if(w>(y+1)*x)y=C.d.e2(w,x)}z.c=y
this.d.$1(z)}},
b3:{"^":"a;0a,b,c,d,e,$ti",
hy:function(a){if(this.c!==6)return!0
return this.b.b.c5(H.j(this.d,{func:1,ret:P.G,args:[P.a]}),a.a,P.G,P.a)},
hn:function(a){var z,y,x,w
z=this.e
y=P.a
x={futureOr:1,type:H.n(this,1)}
w=this.b.b
if(H.bO(z,{func:1,args:[P.a,P.aA]}))return H.dn(w.hX(z,a.a,a.b,null,y,P.aA),x)
else return H.dn(w.c5(H.j(z,{func:1,args:[P.a]}),a.a,null,y),x)}},
aG:{"^":"a;cN:a<,b,0fm:c<,$ti",
du:function(a,b,c){var z,y,x,w
z=H.n(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.J
if(y!==C.h){y.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.lS(b,y)}H.j(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.aG(0,$.J,[c])
w=b==null?1:3
this.cn(new P.b3(x,w,a,b,[z,c]))
return x},
i2:function(a,b){return this.du(a,null,b)},
cn:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isb3")
this.c=a}else{if(z===2){y=H.e(this.c,"$isaG")
z=y.a
if(z<4){y.cn(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.co(null,null,z,H.j(new P.kF(this,a),{func:1,ret:-1}))}},
cJ:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isb3")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isaG")
y=u.a
if(y<4){u.cJ(a)
return}this.a=y
this.c=u.c}z.a=this.b7(a)
y=this.b
y.toString
P.co(null,null,y,H.j(new P.kK(z,this),{func:1,ret:-1}))}},
bE:function(){var z=H.e(this.c,"$isb3")
this.c=null
return this.b7(z)},
b7:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
cq:function(a){var z,y,x
z=H.n(this,0)
H.dn(a,{futureOr:1,type:z})
y=this.$ti
if(H.bv(a,"$isbh",y,"$asbh"))if(H.bv(a,"$isaG",y,null))P.ff(a,this)
else P.kG(a,this)
else{x=this.bE()
H.t(a,z)
this.a=4
this.c=a
P.bp(this,x)}},
cr:function(a,b){var z
H.e(b,"$isaA")
z=this.bE()
this.a=8
this.c=new P.ad(a,b)
P.bp(this,z)},
$isbh:1,
n:{
kG:function(a,b){var z,y,x
b.a=1
try{a.du(new P.kH(b),new P.kI(b),null)}catch(x){z=H.a_(x)
y=H.b9(x)
P.mE(new P.kJ(b,z,y))}},
ff:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isaG")
if(z>=4){y=b.bE()
b.a=a.a
b.c=a.c
P.bp(b,y)}else{y=H.e(b.c,"$isb3")
b.a=2
b.c=a
a.cJ(y)}},
bp:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isad")
y=y.b
u=v.a
t=v.b
y.toString
P.cn(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.bp(z.a,b)}y=z.a
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
if(p){H.e(r,"$isad")
y=y.b
u=r.a
t=r.b
y.toString
P.cn(null,null,y,u,t)
return}o=$.J
if(o==null?q!=null:o!==q)$.J=q
else o=null
y=b.c
if(y===8)new P.kN(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.kM(x,b,r).$0()}else if((y&2)!==0)new P.kL(z,x,b).$0()
if(o!=null)$.J=o
y=x.b
if(!!J.E(y).$isbh){if(y.a>=4){n=H.e(t.c,"$isb3")
t.c=null
b=t.b7(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.ff(y,t)
return}}m=b.b
n=H.e(m.c,"$isb3")
m.c=null
b=m.b7(n)
y=x.a
u=x.b
if(!y){H.t(u,H.n(m,0))
m.a=4
m.c=u}else{H.e(u,"$isad")
m.a=8
m.c=u}z.a=m
y=m}}}},
kF:{"^":"k:0;a,b",
$0:function(){P.bp(this.a,this.b)}},
kK:{"^":"k:0;a,b",
$0:function(){P.bp(this.b,this.a.a)}},
kH:{"^":"k:20;a",
$1:function(a){var z=this.a
z.a=0
z.cq(a)}},
kI:{"^":"k:41;a",
$2:function(a,b){this.a.cr(a,H.e(b,"$isaA"))},
$1:function(a){return this.$2(a,null)}},
kJ:{"^":"k:0;a,b,c",
$0:function(){this.a.cr(this.b,this.c)}},
kN:{"^":"k:3;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.ds(H.j(w.d,{func:1}),null)}catch(v){y=H.a_(v)
x=H.b9(v)
if(this.d){w=H.e(this.a.a.c,"$isad").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isad")
else u.b=new P.ad(y,x)
u.a=!0
return}if(!!J.E(z).$isbh){if(z instanceof P.aG&&z.gcN()>=4){if(z.gcN()===8){w=this.b
w.b=H.e(z.gfm(),"$isad")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.i2(new P.kO(t),null)
w.a=!1}}},
kO:{"^":"k:44;a",
$1:function(a){return this.a}},
kM:{"^":"k:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
w=H.n(x,0)
v=H.t(this.c,w)
u=H.n(x,1)
this.a.b=x.b.b.c5(H.j(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.a_(t)
y=H.b9(t)
x=this.a
x.b=new P.ad(z,y)
x.a=!0}}},
kL:{"^":"k:3;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isad")
w=this.c
if(w.hy(z)&&w.e!=null){v=this.b
v.b=w.hn(z)
v.a=!1}}catch(u){y=H.a_(u)
x=H.b9(u)
w=H.e(this.a.a.c,"$isad")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ad(y,x)
s.a=!0}}},
fb:{"^":"a;a,0b"},
jk:{"^":"a;$ti",
gl:function(a){var z,y,x,w
z={}
y=new P.aG(0,$.J,[P.l])
z.a=0
x=H.n(this,0)
w=H.j(new P.jm(z,this),{func:1,ret:-1,args:[x]})
H.j(new P.jn(z,y),{func:1,ret:-1})
W.T(this.a,this.b,w,!1,x)
return y}},
jm:{"^":"k;a,b",
$1:function(a){H.t(a,H.n(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.z,args:[H.n(this.b,0)]}}},
jn:{"^":"k:0;a,b",
$0:function(){this.b.cq(this.a.a)}},
cY:{"^":"a;$ti"},
jl:{"^":"a;"},
aY:{"^":"a;"},
ad:{"^":"a;a,b",
i:function(a){return H.f(this.a)},
$isX:1},
lG:{"^":"a;",$isna:1},
lT:{"^":"k:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.el()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.d(z)
x=H.d(z)
x.stack=y.i(0)
throw x}},
kZ:{"^":"lG;",
hY:function(a){var z,y,x
H.j(a,{func:1,ret:-1})
try{if(C.h===$.J){a.$0()
return}P.fD(null,null,this,a,-1)}catch(x){z=H.a_(x)
y=H.b9(x)
P.cn(null,null,this,z,H.e(y,"$isaA"))}},
hZ:function(a,b,c){var z,y,x
H.j(a,{func:1,ret:-1,args:[c]})
H.t(b,c)
try{if(C.h===$.J){a.$1(b)
return}P.fE(null,null,this,a,b,-1,c)}catch(x){z=H.a_(x)
y=H.b9(x)
P.cn(null,null,this,z,H.e(y,"$isaA"))}},
fQ:function(a,b){return new P.l0(this,H.j(a,{func:1,ret:b}),b)},
bJ:function(a){return new P.l_(this,H.j(a,{func:1,ret:-1}))},
cY:function(a,b){return new P.l1(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
ds:function(a,b){H.j(a,{func:1,ret:b})
if($.J===C.h)return a.$0()
return P.fD(null,null,this,a,b)},
c5:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.t(b,d)
if($.J===C.h)return a.$1(b)
return P.fE(null,null,this,a,b,c,d)},
hX:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.t(b,e)
H.t(c,f)
if($.J===C.h)return a.$2(b,c)
return P.lU(null,null,this,a,b,c,d,e,f)}},
l0:{"^":"k;a,b,c",
$0:function(){return this.a.ds(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
l_:{"^":"k:3;a,b",
$0:function(){return this.a.hY(this.b)}},
l1:{"^":"k;a,b,c",
$1:function(a){var z=this.c
return this.a.hZ(this.b,H.t(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
ig:function(a,b,c,d,e){return new H.aM(0,0,[d,e])},
ih:function(a,b,c){H.bP(a)
return H.m(H.m6(a,new H.aM(0,0,[b,c])),"$ise8",[b,c],"$ase8")},
e9:function(a,b){return new H.aM(0,0,[a,b])},
bH:function(a,b,c,d){return new P.kT(0,0,[d])},
i3:function(a,b,c){var z,y
if(P.dh(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bu()
C.a.h(y,a)
try{P.lQ(a,z)}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=P.eB(b,H.fR(z,"$isp"),", ")+c
return y.charCodeAt(0)==0?y:y},
cJ:function(a,b,c){var z,y,x
if(P.dh(a))return b+"..."+c
z=new P.am(b)
y=$.$get$bu()
C.a.h(y,a)
try{x=z
x.a=P.eB(x.gaq(),a,", ")}finally{if(0>=y.length)return H.i(y,-1)
y.pop()}y=z
y.a=y.gaq()+c
y=z.gaq()
return y.charCodeAt(0)==0?y:y},
dh:function(a){var z,y
for(z=0;y=$.$get$bu(),z<y.length;++z)if(a===y[z])return!0
return!1},
lQ:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gR(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.A())return
w=H.f(z.gE())
C.a.h(b,w)
y+=w.length+2;++x}if(!z.A()){if(x<=5)return
if(0>=b.length)return H.i(b,-1)
v=b.pop()
if(0>=b.length)return H.i(b,-1)
u=b.pop()}else{t=z.gE();++x
if(!z.A()){if(x<=4){C.a.h(b,H.f(t))
return}v=H.f(t)
if(0>=b.length)return H.i(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gE();++x
for(;z.A();t=s,s=r){r=z.gE();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2;--x}C.a.h(b,"...")
return}}u=H.f(t)
v=H.f(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.h(b,q)
C.a.h(b,u)
C.a.h(b,v)},
ea:function(a,b,c){var z=P.ig(null,null,null,b,c)
a.M(0,new P.ii(z,b,c))
return z},
eb:function(a,b){var z,y,x
z=P.bH(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.C)(a),++x)z.h(0,H.t(a[x],b))
return z},
cP:function(a){var z,y,x
z={}
if(P.dh(a))return"{...}"
y=new P.am("")
try{C.a.h($.$get$bu(),a)
x=y
x.a=x.gaq()+"{"
z.a=!0
a.M(0,new P.io(z,y))
z=y
z.a=z.gaq()+"}"}finally{z=$.$get$bu()
if(0>=z.length)return H.i(z,-1)
z.pop()}z=y.gaq()
return z.charCodeAt(0)==0?z:z},
kT:{"^":"kP;a,0b,0c,0d,0e,0f,r,$ti",
gR:function(a){var z=new P.fj(this,this.r,this.$ti)
z.c=this.e
return z},
gl:function(a){return this.a},
W:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.e(z[b],"$isck")!=null}else{y=this.ep(b)
return y}},
ep:function(a){var z=this.d
if(z==null)return!1
return this.br(this.cA(z,a),a)>=0},
h:function(a,b){var z,y
H.t(b,H.n(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.dc()
this.b=z}return this.cm(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.dc()
this.c=y}return this.cm(y,b)}else return this.eh(b)},
eh:function(a){var z,y,x
H.t(a,H.n(this,0))
z=this.d
if(z==null){z=P.dc()
this.d=z}y=this.cs(a)
x=z[y]
if(x==null)z[y]=[this.bB(a)]
else{if(this.br(x,a)>=0)return!1
x.push(this.bB(a))}return!0},
U:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.fh(this.c,b)
else return this.fe(b)},
fe:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.cA(z,a)
x=this.br(y,a)
if(x<0)return!1
this.cQ(y.splice(x,1)[0])
return!0},
cm:function(a,b){H.t(b,H.n(this,0))
if(H.e(a[b],"$isck")!=null)return!1
a[b]=this.bB(b)
return!0},
fh:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$isck")
if(z==null)return!1
this.cQ(z)
delete a[b]
return!0},
cF:function(){this.r=this.r+1&67108863},
bB:function(a){var z,y
z=new P.ck(H.t(a,H.n(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.cF()
return z},
cQ:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.cF()},
cs:function(a){return J.bz(a)&0x3ffffff},
cA:function(a,b){return a[this.cs(b)]},
br:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.S(a[y].a,b))return y
return-1},
n:{
dc:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
ck:{"^":"a;a,0b,0c"},
fj:{"^":"a;a,b,0c,0d,$ti",
scp:function(a){this.d=H.t(a,H.n(this,0))},
gE:function(){return this.d},
A:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aq(z))
else{z=this.c
if(z==null){this.scp(null)
return!1}else{this.scp(H.t(z.a,H.n(this,0)))
this.c=this.c.b
return!0}}},
$isaL:1,
n:{
kU:function(a,b,c){var z=new P.fj(a,b,[c])
z.c=a.e
return z}}},
kP:{"^":"j7;"},
ii:{"^":"k:6;a,b,c",
$2:function(a,b){this.a.m(0,H.t(a,this.b),H.t(b,this.c))}},
c2:{"^":"kV;",$isp:1,$isc:1},
N:{"^":"a;$ti",
gR:function(a){return new H.cO(a,this.gl(a),0,[H.bx(this,a,"N",0)])},
a_:function(a,b){return this.p(a,b)},
M:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.bx(this,a,"N",0)]})
z=this.gl(a)
for(y=0;y<z;++y){b.$1(this.p(a,y))
if(z!==this.gl(a))throw H.d(P.aq(a))}},
i5:function(a,b){var z,y
z=H.b([],[H.bx(this,a,"N",0)])
C.a.sl(z,this.gl(a))
for(y=0;y<this.gl(a);++y)C.a.m(z,y,this.p(a,y))
return z},
i4:function(a){return this.i5(a,!0)},
hg:function(a,b,c,d){var z
H.t(d,H.bx(this,a,"N",0))
P.aO(b,c,this.gl(a),null,null,null)
for(z=b;z<c;++z)this.m(a,z,d)},
i:function(a){return P.cJ(a,"[","]")}},
ee:{"^":"c4;"},
io:{"^":"k:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.f(a)
z.a=y+": "
z.a+=H.f(b)}},
c4:{"^":"a;$ti",
M:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[H.Y(this,"c4",0),H.Y(this,"c4",1)]})
for(z=J.aR(this.gaf());z.A();){y=z.gE()
b.$2(y,this.p(0,y))}},
gl:function(a){return J.ai(this.gaf())},
i:function(a){return P.cP(this)},
$isB:1},
li:{"^":"a;$ti",
m:function(a,b,c){H.t(b,H.n(this,0))
H.t(c,H.n(this,1))
throw H.d(P.Q("Cannot modify unmodifiable map"))}},
ip:{"^":"a;$ti",
p:function(a,b){return this.a.p(0,b)},
m:function(a,b,c){this.a.m(0,H.t(b,H.n(this,0)),H.t(c,H.n(this,1)))},
M:function(a,b){this.a.M(0,H.j(b,{func:1,ret:-1,args:[H.n(this,0),H.n(this,1)]}))},
gl:function(a){var z=this.a
return z.gl(z)},
i:function(a){return J.a8(this.a)},
$isB:1},
eY:{"^":"lj;a,$ti"},
j9:{"^":"a;$ti",
ad:function(a,b){var z
for(z=J.aR(H.m(b,"$isp",this.$ti,"$asp"));z.A();)this.h(0,z.gE())},
i:function(a){return P.cJ(this,"{","}")},
a_:function(a,b){var z,y,x
if(b<0)H.M(P.V(b,0,null,"index",null))
for(z=P.kU(this,this.r,H.n(this,0)),y=0;z.A();){x=z.d
if(b===y)return x;++y}throw H.d(P.aS(b,this,"index",null,y))},
$isp:1,
$isex:1},
j7:{"^":"j9;"},
kV:{"^":"a+N;"},
lj:{"^":"ip+li;$ti"}}],["","",,P,{"^":"",hd:{"^":"bB;a",
hz:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
c=P.aO(b,c,a.length,null,null,null)
z=$.$get$fd()
for(y=b,x=y,w=null,v=-1,u=-1,t=0;y<c;y=s){s=y+1
r=C.b.C(a,y)
if(r===37){q=s+2
if(q<=c){p=H.cs(C.b.C(a,s))
o=H.cs(C.b.C(a,s+1))
n=p*16+o-(o&256)
if(n===37)n=-1
s=q}else n=-1}else n=r
if(0<=n&&n<=127){if(n<0||n>=z.length)return H.i(z,n)
m=z[n]
if(m>=0){n=C.b.V("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m)
if(n===r)continue
r=n}else{if(m===-1){if(v<0){l=w==null?null:w.a.length
if(l==null)l=0
v=l+(y-x)
u=y}++t
if(r===61)continue}r=n}if(m!==-2){if(w==null)w=new P.am("")
l=w.a+=C.b.q(a,x,y)
w.a=l+H.aX(r)
x=s
continue}}throw H.d(P.P("Invalid base64 data",a,y))}if(w!=null){l=w.a+=C.b.q(a,x,c)
k=l.length
if(v>=0)P.dz(a,u,c,v,t,k)
else{j=C.d.b3(k-1,4)+1
if(j===1)throw H.d(P.P("Invalid base64 encoding length ",a,c))
for(;j<4;){l+="="
w.a=l;++j}}l=w.a
return C.b.aD(a,b,c,l.charCodeAt(0)==0?l:l)}i=c-b
if(v>=0)P.dz(a,u,c,v,t,i)
else{j=C.d.b3(i,4)
if(j===1)throw H.d(P.P("Invalid base64 encoding length ",a,c))
if(j>1)a=C.b.aD(a,c,c,j===2?"==":"=")}return a},
$asbB:function(){return[[P.c,P.l],P.h]},
n:{
dz:function(a,b,c,d,e,f){if(C.d.b3(f,4)!==0)throw H.d(P.P("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.P("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.P("Invalid base64 padding, more than two '=' characters",a,b))}}},he:{"^":"aJ;a",
$asaJ:function(){return[[P.c,P.l],P.h]}},bB:{"^":"a;$ti"},aJ:{"^":"jl;$ti"},hJ:{"^":"bB;",
$asbB:function(){return[P.h,[P.c,P.l]]}},i0:{"^":"a;a,b,c,d,e",
i:function(a){return this.a}},i_:{"^":"aJ;a",
eq:function(a,b,c){var z,y,x,w,v,u
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
default:u=null}if(u!=null){if(v==null)v=new P.am("")
if(w>b)v.a+=C.b.q(a,b,w)
v.a+=u
b=w+1}}if(v==null)return
if(c>b)v.a+=J.h9(a,b,c)
z=v.a
return z.charCodeAt(0)==0?z:z},
$asaJ:function(){return[P.h,P.h]}},k9:{"^":"hJ;a",
ghf:function(){return C.P}},kg:{"^":"aJ;",
aR:function(a,b,c){var z,y,x,w
z=a.length
P.aO(b,c,z,null,null,null)
y=z-b
if(y===0)return new Uint8Array(0)
x=new Uint8Array(y*3)
w=new P.lE(0,0,x)
if(w.eB(a,b,z)!==z)w.cR(J.h1(a,z-1),0)
return new Uint8Array(x.subarray(0,H.lJ(0,w.b,x.length)))},
bQ:function(a){return this.aR(a,0,null)},
$asaJ:function(){return[P.h,[P.c,P.l]]}},lE:{"^":"a;a,b,c",
cR:function(a,b){var z,y,x,w,v
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
eB:function(a,b,c){var z,y,x,w,v,u,t
if(b!==c&&(C.b.V(a,c-1)&64512)===55296)--c
for(z=this.c,y=z.length,x=b;x<c;++x){w=C.b.C(a,x)
if(w<=127){v=this.b
if(v>=y)break
this.b=v+1
z[v]=w}else if((w&64512)===55296){if(this.b+3>=y)break
u=x+1
if(this.cR(w,C.b.C(a,u)))x=u}else if(w<=2047){v=this.b
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
z[v]=128|w&63}}return x}},ka:{"^":"aJ;a",
aR:function(a,b,c){var z,y,x,w,v
H.m(a,"$isc",[P.l],"$asc")
z=P.kb(!1,a,b,c)
if(z!=null)return z
y=J.ai(a)
P.aO(b,c,y,null,null,null)
x=new P.am("")
w=new P.lB(!1,x,!0,0,0,0)
w.aR(a,b,y)
if(w.e>0){H.M(P.P("Unfinished UTF-8 octet sequence",a,y))
x.a+=H.aX(65533)
w.d=0
w.e=0
w.f=0}v=x.a
return v.charCodeAt(0)==0?v:v},
bQ:function(a){return this.aR(a,0,null)},
$asaJ:function(){return[[P.c,P.l],P.h]},
n:{
kb:function(a,b,c,d){H.m(b,"$isc",[P.l],"$asc")
if(b instanceof Uint8Array)return P.kc(!1,b,c,d)
return},
kc:function(a,b,c,d){var z,y,x
z=$.$get$f1()
if(z==null)return
y=0===c
if(y&&!0)return P.d6(z,b)
x=b.length
d=P.aO(c,d,x,null,null,null)
if(y&&d===x)return P.d6(z,b)
return P.d6(z,b.subarray(c,d))},
d6:function(a,b){if(P.ke(b))return
return P.kf(a,b)},
kf:function(a,b){var z,y
try{z=a.decode(b)
return z}catch(y){H.a_(y)}return},
ke:function(a){var z,y
z=a.length-2
for(y=0;y<z;++y)if(a[y]===237)if((a[y+1]&224)===160)return!0
return!1},
kd:function(){var z,y
try{z=new TextDecoder("utf-8",{fatal:true})
return z}catch(y){H.a_(y)}return}}},lB:{"^":"a;a,b,c,d,e,f",
aR:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.m(a,"$isc",[P.l],"$asc")
z=this.d
y=this.e
x=this.f
this.d=0
this.e=0
this.f=0
w=new P.lD(c)
v=new P.lC(this,b,c,a)
$label0$0:for(u=J.b8(a),t=this.b,s=b;!0;s=n){$label1$1:if(y>0){do{if(s===c)break $label0$0
r=u.p(a,s)
if(typeof r!=="number")return r.bf()
if((r&192)!==128){q=P.P("Bad UTF-8 encoding 0x"+C.d.b0(r,16),a,s)
throw H.d(q)}else{z=(z<<6|r&63)>>>0;--y;++s}}while(y>0)
q=x-1
if(q<0||q>=4)return H.i(C.D,q)
if(z<=C.D[q]){q=P.P("Overlong encoding of 0x"+C.d.b0(z,16),a,s-x-1)
throw H.d(q)}if(z>1114111){q=P.P("Character outside valid Unicode range: 0x"+C.d.b0(z,16),a,s-x-1)
throw H.d(q)}if(!this.c||z!==65279)t.a+=H.aX(z)
this.c=!1}for(q=s<c;q;){p=w.$2(a,s)
if(typeof p!=="number")return p.ca()
if(p>0){this.c=!1
o=s+p
v.$2(s,o)
if(o===c)break}else o=s
n=o+1
r=u.p(a,o)
if(typeof r!=="number")return r.O()
if(r<0){m=P.P("Negative UTF-8 code unit: -0x"+C.d.b0(-r,16),a,n-1)
throw H.d(m)}else{if((r&224)===192){z=r&31
y=1
x=1
continue $label0$0}if((r&240)===224){z=r&15
y=2
x=2
continue $label0$0}if((r&248)===240&&r<245){z=r&7
y=3
x=3
continue $label0$0}m=P.P("Bad UTF-8 encoding 0x"+C.d.b0(r,16),a,n-1)
throw H.d(m)}}break $label0$0}if(y>0){this.d=z
this.e=y
this.f=x}}},lD:{"^":"k:40;a",
$2:function(a,b){var z,y,x,w
H.m(a,"$isc",[P.l],"$asc")
z=this.a
for(y=J.b8(a),x=b;x<z;++x){w=y.p(a,x)
if(typeof w!=="number")return w.bf()
if((w&127)!==w)return x-b}return z-b}},lC:{"^":"k:39;a,b,c,d",
$2:function(a,b){this.a.b.a+=P.bK(this.d,a,b)}}}],["","",,P,{"^":"",
by:function(a,b,c){var z
H.j(b,{func:1,ret:P.l,args:[P.h]})
z=H.iP(a,c)
if(z!=null)return z
if(b!=null)return b.$1(a)
throw H.d(P.P(a,null,null))},
hL:function(a){if(a instanceof H.k)return a.i(0)
return"Instance of '"+H.aW(a)+"'"},
ij:function(a,b,c,d){var z,y
H.t(b,d)
z=J.i5(a,d)
if(a!==0&&!0)for(y=0;y<z.length;++y)C.a.m(z,y,b)
return H.m(z,"$isc",[d],"$asc")},
ec:function(a,b,c){var z,y,x
z=[c]
y=H.b([],z)
for(x=a.gR(a);x.A();)C.a.h(y,H.t(x.gE(),c))
if(b)return y
return H.m(J.c_(y),"$isc",z,"$asc")},
bK:function(a,b,c){var z,y
z=P.l
H.m(a,"$isp",[z],"$asp")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.m(a,"$isaT",[z],"$asaT")
y=a.length
c=P.aO(b,c,y,null,null,null)
return H.es(b>0||c<y?C.a.dX(a,b,c):a)}if(!!J.E(a).$isei)return H.iR(a,b,P.aO(b,c,a.length,null,null,null))
return P.jo(a,b,c)},
jo:function(a,b,c){var z,y,x,w
H.m(a,"$isp",[P.l],"$asp")
if(b<0)throw H.d(P.V(b,0,J.ai(a),null,null))
z=c==null
if(!z&&c<b)throw H.d(P.V(c,b,J.ai(a),null,null))
y=J.aR(a)
for(x=0;x<b;++x)if(!y.A())throw H.d(P.V(b,0,x,null,null))
w=[]
if(z)for(;y.A();)w.push(y.gE())
else for(x=b;x<c;++x){if(!y.A())throw H.d(P.V(c,b,x,null,null))
w.push(y.gE())}return H.es(w)},
j_:function(a,b,c){return new H.i7(a,H.i8(a,!1,!0,!1))},
ch:function(){var z=H.iH()
if(z!=null)return P.k1(z,0,null)
throw H.d(P.Q("'Uri.base' is not supported"))},
bV:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a8(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hL(a)},
a1:function(a){return new P.fe(a)},
ik:function(a,b,c,d){var z,y
H.j(b,{func:1,ret:d,args:[P.l]})
z=H.b([],[d])
C.a.sl(z,a)
for(y=0;y<a;++y)C.a.m(z,y,b.$1(y))
return z},
dt:function(a){H.mC(a)},
k1:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
c=a.length
z=b+5
if(c>=z){y=((C.b.C(a,b+4)^58)*3|C.b.C(a,b)^100|C.b.C(a,b+1)^97|C.b.C(a,b+2)^116|C.b.C(a,b+3)^97)>>>0
if(y===0)return P.eZ(b>0||c<c?C.b.q(a,b,c):a,5,null).gdB()
else if(y===32)return P.eZ(C.b.q(a,z,c),0,null).gdB()}x=new Array(8)
x.fixed$length=Array
w=H.b(x,[P.l])
C.a.m(w,0,0)
x=b-1
C.a.m(w,1,x)
C.a.m(w,2,x)
C.a.m(w,7,x)
C.a.m(w,3,b)
C.a.m(w,4,b)
C.a.m(w,5,c)
C.a.m(w,6,c)
if(P.fF(a,b,c,0,w)>=14)C.a.m(w,7,c)
v=w[1]
if(typeof v!=="number")return v.ie()
if(v>=b)if(P.fF(a,b,v,20,w)===20)w[7]=v
x=w[2]
if(typeof x!=="number")return x.G()
u=x+1
t=w[3]
s=w[4]
r=w[5]
q=w[6]
if(typeof q!=="number")return q.O()
if(typeof r!=="number")return H.u(r)
if(q<r)r=q
if(typeof s!=="number")return s.O()
if(s<u)s=r
else if(s<=v)s=v+1
if(typeof t!=="number")return t.O()
if(t<u)t=s
x=w[7]
if(typeof x!=="number")return x.O()
p=x<b
if(p)if(u>v+3){o=null
p=!1}else{x=t>b
if(x&&t+1===s){o=null
p=!1}else{if(!(r<c&&r===s+2&&C.b.a5(a,"..",s)))n=r>s+2&&C.b.a5(a,"/..",r-3)
else n=!0
if(n){o=null
p=!1}else{if(v===b+4)if(C.b.a5(a,"file",b)){if(u<=b){if(!C.b.a5(a,"/",s)){m="file:///"
y=3}else{m="file://"
y=2}a=m+C.b.q(a,s,c)
v-=b
z=y-b
r+=z
q+=z
c=a.length
b=0
u=7
t=7
s=7}else if(s===r)if(b===0&&!0){a=C.b.aD(a,s,r,"/");++r;++q;++c}else{a=C.b.q(a,b,s)+"/"+C.b.q(a,r,c)
v-=b
u-=b
t-=b
s-=b
z=1-b
r+=z
q+=z
c=a.length
b=0}o="file"}else if(C.b.a5(a,"http",b)){if(x&&t+3===s&&C.b.a5(a,"80",t+1))if(b===0&&!0){a=C.b.aD(a,t,s,"")
s-=3
r-=3
q-=3
c-=3}else{a=C.b.q(a,b,t)+C.b.q(a,s,c)
v-=b
u-=b
t-=b
z=3+b
s-=z
r-=z
q-=z
c=a.length
b=0}o="http"}else o=null
else if(v===z&&C.b.a5(a,"https",b)){if(x&&t+4===s&&C.b.a5(a,"443",t+1))if(b===0&&!0){a=C.b.aD(a,t,s,"")
s-=4
r-=4
q-=4
c-=3}else{a=C.b.q(a,b,t)+C.b.q(a,s,c)
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
if(p){if(b>0||c<a.length){a=C.b.q(a,b,c)
v-=b
u-=b
t-=b
s-=b
r-=b
q-=b}return new P.l6(a,v,u,t,s,r,q,o)}return P.lk(a,b,c,v,u,t,s,r,q,o)},
f0:function(a,b){var z=P.h
return C.a.hk(H.b(a.split("&"),[z]),P.e9(z,z),new P.k4(b),[P.B,P.h,P.h])},
k_:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=new P.k0(a)
y=new Uint8Array(4)
for(x=y.length,w=b,v=w,u=0;w<c;++w){t=C.b.V(a,w)
if(t!==46){if((t^48)>9)z.$2("invalid character",w)}else{if(u===3)z.$2("IPv4 address should contain exactly 4 parts",w)
s=P.by(C.b.q(a,v,w),null,null)
if(typeof s!=="number")return s.ca()
if(s>255)z.$2("each part must be in the range 0..255",v)
r=u+1
if(u>=x)return H.i(y,u)
y[u]=s
v=w+1
u=r}}if(u!==3)z.$2("IPv4 address should contain exactly 4 parts",c)
s=P.by(C.b.q(a,v,c),null,null)
if(typeof s!=="number")return s.ca()
if(s>255)z.$2("each part must be in the range 0..255",v)
if(u>=x)return H.i(y,u)
y[u]=s
return y},
f_:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
if(c==null)c=a.length
z=new P.k2(a)
y=new P.k3(z,a)
if(a.length<2)z.$1("address is too short")
x=H.b([],[P.l])
for(w=b,v=w,u=!1,t=!1;w<c;++w){s=C.b.V(a,w)
if(s===58){if(w===b){++w
if(C.b.V(a,w)!==58)z.$2("invalid start colon.",w)
v=w}if(w===v){if(u)z.$2("only one wildcard `::` is allowed",w)
C.a.h(x,-1)
u=!0}else C.a.h(x,y.$2(v,w))
v=w+1}else if(s===46)t=!0}if(x.length===0)z.$1("too few parts")
r=v===c
q=C.a.gag(x)
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
l+=2}else{i=C.d.au(k,8)
if(l<0||l>=n)return H.i(o,l)
o[l]=i
i=l+1
if(i>=n)return H.i(o,i)
o[i]=k&255
l+=2}}return o},
lK:function(){var z,y,x,w,v
z=P.ik(22,new P.lM(),!0,P.F)
y=new P.lL(z)
x=new P.lN()
w=new P.lO()
v=H.e(y.$2(0,225),"$isF")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",14)
x.$3(v,":",34)
x.$3(v,"/",3)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(14,225),"$isF")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,".",15)
x.$3(v,":",34)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(15,225),"$isF")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,"%",225)
x.$3(v,":",34)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(1,225),"$isF")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
x.$3(v,":",34)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(2,235),"$isF")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
x.$3(v,"/",131)
x.$3(v,".",146)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(3,235),"$isF")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",68)
x.$3(v,".",18)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(4,229),"$isF")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"[",232)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(5,229),"$isF")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
w.$3(v,"AZ",229)
x.$3(v,":",102)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(6,231),"$isF")
w.$3(v,"19",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(7,231),"$isF")
w.$3(v,"09",7)
x.$3(v,"@",68)
x.$3(v,"/",138)
x.$3(v,"?",172)
x.$3(v,"#",205)
x.$3(H.e(y.$2(8,8),"$isF"),"]",5)
v=H.e(y.$2(9,235),"$isF")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",16)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(16,235),"$isF")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",17)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(17,235),"$isF")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",9)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(10,235),"$isF")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",18)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(18,235),"$isF")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,".",19)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(19,235),"$isF")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",234)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(11,235),"$isF")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
x.$3(v,"/",10)
x.$3(v,"?",172)
x.$3(v,"#",205)
v=H.e(y.$2(12,236),"$isF")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
x.$3(v,"?",12)
x.$3(v,"#",205)
v=H.e(y.$2(13,237),"$isF")
x.$3(v,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
x.$3(v,"?",13)
w.$3(H.e(y.$2(20,245),"$isF"),"az",21)
v=H.e(y.$2(21,245),"$isF")
w.$3(v,"az",21)
w.$3(v,"09",21)
x.$3(v,"+-.",21)
return z},
fF:function(a,b,c,d,e){var z,y,x,w,v
H.m(e,"$isc",[P.l],"$asc")
z=$.$get$fG()
for(y=b;y<c;++y){if(d<0||d>=z.length)return H.i(z,d)
x=z[d]
w=C.b.C(a,y)^96
if(w>95)w=31
if(w>=x.length)return H.i(x,w)
v=x[w]
d=v&31
C.a.m(e,v>>>5,y)}return d},
G:{"^":"a;"},
"+bool":0,
ae:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.ae))return!1
return this.a===b.a&&!0},
gT:function(a){var z=this.a
return(z^C.d.au(z,30))&1073741823},
i:function(a){var z,y,x,w,v,u,t,s
z=P.hy(H.iO(this))
y=P.bC(H.iM(this))
x=P.bC(H.iI(this))
w=P.bC(H.iJ(this))
v=P.bC(H.iL(this))
u=P.bC(H.iN(this))
t=P.hz(H.iK(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
n:{
hy:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
hz:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bC:function(a){if(a>=10)return""+a
return"0"+a}}},
w:{"^":"ac;"},
"+double":0,
bf:{"^":"a;a",
O:function(a,b){return C.d.O(this.a,H.e(b,"$isbf").a)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof P.bf))return!1
return this.a===b.a},
gT:function(a){return this.a&0x1FFFFFFF},
i:function(a){var z,y,x,w,v
z=new P.hF()
y=this.a
if(y<0)return"-"+new P.bf(0-y).i(0)
x=z.$1(C.d.av(y,6e7)%60)
w=z.$1(C.d.av(y,1e6)%60)
v=new P.hE().$1(y%1e6)
return""+C.d.av(y,36e8)+":"+H.f(x)+":"+H.f(w)+"."+H.f(v)},
n:{
dT:function(a,b,c,d,e,f){return new P.bf(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)}}},
hE:{"^":"k:15;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hF:{"^":"k:15;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
X:{"^":"a;"},
el:{"^":"X;",
i:function(a){return"Throw of null."}},
aw:{"^":"X;a,b,c,d",
gbq:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbp:function(){return""},
i:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.f(z)
w=this.gbq()+y+x
if(!this.a)return w
v=this.gbp()
u=P.bV(this.b)
return w+v+": "+H.f(u)},
n:{
bA:function(a){return new P.aw(!1,null,null,a)},
cz:function(a,b,c){return new P.aw(!0,a,b,c)}}},
c8:{"^":"aw;e,f,a,b,c,d",
gbq:function(){return"RangeError"},
gbp:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.f(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.f(z)
else if(x>z)y=": Not in range "+H.f(z)+".."+H.f(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.f(z)}return y},
n:{
c9:function(a,b,c){return new P.c8(null,null,!0,a,b,"Value not in range")},
V:function(a,b,c,d,e){return new P.c8(b,c,!0,a,d,"Invalid value")},
aO:function(a,b,c,d,e,f){if(typeof a!=="number")return H.u(a)
if(0>a||a>c)throw H.d(P.V(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.d(P.V(b,a,c,"end",f))
return b}return c}}},
i1:{"^":"aw;e,l:f>,a,b,c,d",
gbq:function(){return"RangeError"},
gbp:function(){if(J.fY(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.f(z)},
n:{
aS:function(a,b,c,d,e){var z=H.U(e!=null?e:J.ai(b))
return new P.i1(b,z,!0,a,c,"Index out of range")}}},
jY:{"^":"X;a",
i:function(a){return"Unsupported operation: "+this.a},
n:{
Q:function(a){return new P.jY(a)}}},
jV:{"^":"X;a",
i:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
n:{
cf:function(a){return new P.jV(a)}}},
cX:{"^":"X;a",
i:function(a){return"Bad state: "+this.a},
n:{
eA:function(a){return new P.cX(a)}}},
hr:{"^":"X;a",
i:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.bV(z))+"."},
n:{
aq:function(a){return new P.hr(a)}}},
iC:{"^":"a;",
i:function(a){return"Out of Memory"},
$isX:1},
ez:{"^":"a;",
i:function(a){return"Stack Overflow"},
$isX:1},
hw:{"^":"X;a",
i:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
fe:{"^":"a;a",
i:function(a){return"Exception: "+this.a}},
hR:{"^":"a;a,b,c",
i:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.c
w=this.b
if(typeof w!=="string")return x!=null?y+(" (at offset "+H.f(x)+")"):y
if(x!=null)z=x<0||x>w.length
else z=!1
if(z)x=null
if(x==null){if(w.length>78)w=C.b.q(w,0,75)+"..."
return y+"\n"+w}for(v=1,u=0,t=!1,s=0;s<x;++s){r=C.b.C(w,s)
if(r===10){if(u!==s||!t)++v
u=s+1
t=!1}else if(r===13){++v
u=s+1
t=!0}}y=v>1?y+(" (at line "+v+", character "+(x-u+1)+")\n"):y+(" (at character "+(x+1)+")\n")
q=w.length
for(s=x;s<w.length;++s){r=C.b.V(w,s)
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
m=""}l=C.b.q(w,o,p)
return y+n+l+m+"\n"+C.b.t(" ",x-o+n.length)+"^\n"},
n:{
P:function(a,b,c){return new P.hR(a,b,c)}}},
bE:{"^":"a;"},
l:{"^":"ac;"},
"+int":0,
p:{"^":"a;$ti",
c7:["dZ",function(a,b){var z=H.Y(this,"p",0)
return new H.d9(this,H.j(b,{func:1,ret:P.G,args:[z]}),[z])}],
gl:function(a){var z,y
z=this.gR(this)
for(y=0;z.A();)++y
return y},
gan:function(a){var z,y
z=this.gR(this)
if(!z.A())throw H.d(H.cK())
y=z.gE()
if(z.A())throw H.d(H.i4())
return y},
a_:function(a,b){var z,y,x
if(b<0)H.M(P.V(b,0,null,"index",null))
for(z=this.gR(this),y=0;z.A();){x=z.gE()
if(b===y)return x;++y}throw H.d(P.aS(b,this,"index",null,y))},
i:function(a){return P.i3(this,"(",")")}},
aL:{"^":"a;$ti"},
c:{"^":"a;$ti",$isp:1},
"+List":0,
B:{"^":"a;$ti"},
z:{"^":"a;",
gT:function(a){return P.a.prototype.gT.call(this,this)},
i:function(a){return"null"}},
"+Null":0,
ac:{"^":"a;"},
"+num":0,
a:{"^":";",
u:function(a,b){return this===b},
gT:function(a){return H.bl(this)},
i:function(a){return"Instance of '"+H.aW(this)+"'"},
toString:function(){return this.i(this)}},
aA:{"^":"a;"},
h:{"^":"a;",$isem:1},
"+String":0,
am:{"^":"a;aq:a<",
gl:function(a){return this.a.length},
i:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isn3:1,
n:{
eB:function(a,b,c){var z=J.aR(b)
if(!z.A())return a
if(c.length===0){do a+=H.f(z.gE())
while(z.A())}else{a+=H.f(z.gE())
for(;z.A();)a=a+c+H.f(z.gE())}return a}}},
k4:{"^":"k:38;a",
$2:function(a,b){var z,y,x,w
z=P.h
H.m(a,"$isB",[z,z],"$asB")
H.y(b)
y=J.bw(b).dd(b,"=")
if(y===-1){if(b!=="")a.m(0,P.de(b,0,b.length,this.a,!0),"")}else if(y!==0){x=C.b.q(b,0,y)
w=C.b.ah(b,y+1)
z=this.a
a.m(0,P.de(x,0,x.length,z,!0),P.de(w,0,w.length,z,!0))}return a}},
k0:{"^":"k:36;a",
$2:function(a,b){throw H.d(P.P("Illegal IPv4 address, "+a,this.a,b))}},
k2:{"^":"k:35;a",
$2:function(a,b){throw H.d(P.P("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}},
k3:{"^":"k:33;a,b",
$2:function(a,b){var z
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
z=P.by(C.b.q(this.b,a,b),null,16)
if(typeof z!=="number")return z.O()
if(z<0||z>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return z}},
cl:{"^":"a;bj:a<,b,c,d,dm:e>,f,r,0x,0y,0z,0Q,0ch",
sfd:function(a){var z=P.h
this.Q=H.m(a,"$isB",[z,z],"$asB")},
gdD:function(){return this.b},
gbU:function(a){var z=this.c
if(z==null)return""
if(C.b.X(z,"["))return C.b.q(z,1,z.length-1)
return z},
gbb:function(a){var z=this.d
if(z==null)return P.ft(this.a)
return z},
gc1:function(){var z=this.f
return z==null?"":z},
gd7:function(){var z=this.r
return z==null?"":z},
c3:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.m(h,"$isB",[P.h,null],"$asB")
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
if(x&&!C.b.X(d,"/"))d="/"+d
g=P.dd(g,0,0,h)
return new P.cl(i,j,c,f,d,g,this.r)},
c2:function(a,b){return this.c3(a,null,null,null,null,null,null,b,null,null)},
gaZ:function(){var z,y
if(this.Q==null){z=this.f
y=P.h
this.sfd(new P.eY(P.f0(z==null?"":z,C.i),[y,y]))}return this.Q},
gd8:function(){return this.c!=null},
gdc:function(){return this.f!=null},
gd9:function(){return this.r!=null},
i:function(a){var z,y,x,w
z=this.y
if(z==null){z=this.a
y=z.length!==0?H.f(z)+":":""
x=this.c
w=x==null
if(!w||z==="file"){z=y+"//"
y=this.b
if(y.length!==0)z=z+H.f(y)+"@"
if(!w)z+=x
y=this.d
if(y!=null)z=z+":"+H.f(y)}else z=y
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
if(!!J.E(b).$isd5){if(this.a==b.gbj())if(this.c!=null===b.gd8())if(this.b==b.gdD())if(this.gbU(this)==b.gbU(b))if(this.gbb(this)==b.gbb(b))if(this.e===b.gdm(b)){z=this.f
y=z==null
if(!y===b.gdc()){if(y)z=""
if(z===b.gc1()){z=this.r
y=z==null
if(!y===b.gd9()){if(y)z=""
z=z===b.gd7()}else z=!1}else z=!1}else z=!1}else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
else z=!1
return z}return!1},
gT:function(a){var z=this.z
if(z==null){z=C.b.gT(this.i(0))
this.z=z}return z},
$isd5:1,
n:{
bN:function(a,b,c,d){var z,y,x,w,v,u
H.m(a,"$isc",[P.l],"$asc")
if(c===C.i){z=$.$get$fy().b
if(typeof b!=="string")H.M(H.aa(b))
z=z.test(b)}else z=!1
if(z)return b
H.t(b,H.Y(c,"bB",0))
y=c.ghf().bQ(b)
for(z=y.length,x=0,w="";x<z;++x){v=y[x]
if(v<128){u=v>>>4
if(u>=8)return H.i(a,u)
u=(a[u]&1<<(v&15))!==0}else u=!1
if(u)w+=H.aX(v)
else w=d&&v===32?w+"+":w+"%"+"0123456789ABCDEF"[v>>>4&15]+"0123456789ABCDEF"[v&15]}return w.charCodeAt(0)==0?w:w},
lk:function(a,b,c,d,e,f,g,h,i,j){var z,y,x,w,v,u,t
if(j==null)if(d>b)j=P.lv(a,b,d)
else{if(d===b)P.bq(a,b,"Invalid empty scheme")
j=""}if(e>b){z=d+3
y=z<e?P.lw(a,z,e-1):""
x=P.lp(a,e,f,!1)
if(typeof f!=="number")return f.G()
w=f+1
if(typeof g!=="number")return H.u(g)
v=w<g?P.ls(P.by(C.b.q(a,w,g),new P.ll(a,f),null),j):null}else{y=""
x=null
v=null}u=P.lq(a,g,h,null,j,x!=null)
if(typeof h!=="number")return h.O()
t=h<i?P.dd(a,h+1,i,null):null
return new P.cl(j,y,x,v,u,t,i<c?P.lo(a,i+1,c):null)},
ft:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bq:function(a,b,c){throw H.d(P.P(c,a,b))},
ls:function(a,b){if(a!=null&&a===P.ft(b))return
return a},
lp:function(a,b,c,d){var z,y
if(b===c)return""
if(C.b.V(a,b)===91){if(typeof c!=="number")return c.H()
z=c-1
if(C.b.V(a,z)!==93)P.bq(a,b,"Missing end `]` to match `[` in host")
P.f_(a,b+1,z)
return C.b.q(a,b,c).toLowerCase()}if(typeof c!=="number")return H.u(c)
y=b
for(;y<c;++y)if(C.b.V(a,y)===58){P.f_(a,b,c)
return"["+a+"]"}return P.ly(a,b,c)},
ly:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
if(typeof c!=="number")return H.u(c)
z=b
y=z
x=null
w=!0
for(;z<c;){v=C.b.V(a,z)
if(v===37){u=P.fA(a,z,!0)
t=u==null
if(t&&w){z+=3
continue}if(x==null)x=new P.am("")
s=C.b.q(a,y,z)
r=x.a+=!w?s.toLowerCase():s
if(t){u=C.b.q(a,z,z+3)
q=3}else if(u==="%"){u="%25"
q=1}else q=3
x.a=r+u
z+=q
y=z
w=!0}else{if(v<127){t=v>>>4
if(t>=8)return H.i(C.G,t)
t=(C.G[t]&1<<(v&15))!==0}else t=!1
if(t){if(w&&65<=v&&90>=v){if(x==null)x=new P.am("")
if(y<z){x.a+=C.b.q(a,y,z)
y=z}w=!1}++z}else{if(v<=93){t=v>>>4
if(t>=8)return H.i(C.o,t)
t=(C.o[t]&1<<(v&15))!==0}else t=!1
if(t)P.bq(a,z,"Invalid character")
else{if((v&64512)===55296&&z+1<c){p=C.b.V(a,z+1)
if((p&64512)===56320){v=65536|(v&1023)<<10|p&1023
q=2}else q=1}else q=1
if(x==null)x=new P.am("")
s=C.b.q(a,y,z)
x.a+=!w?s.toLowerCase():s
x.a+=P.fu(v)
z+=q
y=z}}}}if(x==null)return C.b.q(a,b,c)
if(y<c){s=C.b.q(a,y,c)
x.a+=!w?s.toLowerCase():s}t=x.a
return t.charCodeAt(0)==0?t:t},
lv:function(a,b,c){var z,y,x,w
if(b===c)return""
if(!P.fw(C.b.C(a,b)))P.bq(a,b,"Scheme not starting with alphabetic character")
for(z=b,y=!1;z<c;++z){x=C.b.C(a,z)
if(x<128){w=x>>>4
if(w>=8)return H.i(C.q,w)
w=(C.q[w]&1<<(x&15))!==0}else w=!1
if(!w)P.bq(a,z,"Illegal scheme character")
if(65<=x&&x<=90)y=!0}a=C.b.q(a,b,c)
return P.lm(y?a.toLowerCase():a)},
lm:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lw:function(a,b,c){return P.br(a,b,c,C.a5,!1)},
lq:function(a,b,c,d,e,f){var z,y,x,w
z=e==="file"
y=z||f
x=a==null
if(x&&!0)return z?"/":""
w=!x?P.br(a,b,c,C.H,!0):C.W.iK(d,new P.lr(),P.h).k(0,"/")
if(w.length===0){if(z)return"/"}else if(y&&!C.b.X(w,"/"))w="/"+w
return P.lx(w,e,f)},
lx:function(a,b,c){var z=b.length===0
if(z&&!c&&!C.b.X(a,"/"))return P.lz(a,!z||c)
return P.lA(a)},
dd:function(a,b,c,d){var z,y
z={}
H.m(d,"$isB",[P.h,null],"$asB")
if(a!=null){if(d!=null)throw H.d(P.bA("Both query and queryParameters specified"))
return P.br(a,b,c,C.p,!0)}if(d==null)return
y=new P.am("")
z.a=""
d.M(0,new P.lt(new P.lu(z,y)))
z=y.a
return z.charCodeAt(0)==0?z:z},
lo:function(a,b,c){return P.br(a,b,c,C.p,!0)},
fA:function(a,b,c){var z,y,x,w,v,u
z=b+2
if(z>=a.length)return"%"
y=C.b.V(a,b+1)
x=C.b.V(a,z)
w=H.cs(y)
v=H.cs(x)
if(w<0||v<0)return"%"
u=w*16+v
if(u<127){z=C.d.au(u,4)
if(z>=8)return H.i(C.r,z)
z=(C.r[z]&1<<(u&15))!==0}else z=!1
if(z)return H.aX(c&&65<=u&&90>=u?(u|32)>>>0:u)
if(y>=97||x>=97)return C.b.q(a,b,b+3).toUpperCase()
return},
fu:function(a){var z,y,x,w,v,u
if(a<128){z=new Array(3)
z.fixed$length=Array
y=H.b(z,[P.l])
C.a.m(y,0,37)
C.a.m(y,1,C.b.C("0123456789ABCDEF",a>>>4))
C.a.m(y,2,C.b.C("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){x=240
w=4}else{x=224
w=3}else{x=192
w=2}z=new Array(3*w)
z.fixed$length=Array
y=H.b(z,[P.l])
for(v=0;--w,w>=0;x=128){u=C.d.fv(a,6*w)&63|x
C.a.m(y,v,37)
C.a.m(y,v+1,C.b.C("0123456789ABCDEF",u>>>4))
C.a.m(y,v+2,C.b.C("0123456789ABCDEF",u&15))
v+=3}}return P.bK(y,0,null)},
br:function(a,b,c,d,e){var z=P.fz(a,b,c,H.m(d,"$isc",[P.l],"$asc"),e)
return z==null?C.b.q(a,b,c):z},
fz:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r
H.m(d,"$isc",[P.l],"$asc")
z=!e
y=b
x=y
w=null
while(!0){if(typeof y!=="number")return y.O()
if(typeof c!=="number")return H.u(c)
if(!(y<c))break
c$0:{v=C.b.V(a,y)
if(v<127){u=v>>>4
if(u>=8)return H.i(d,u)
u=(d[u]&1<<(v&15))!==0}else u=!1
if(u)++y
else{if(v===37){t=P.fA(a,y,!1)
if(t==null){y+=3
break c$0}if("%"===t){t="%25"
s=1}else s=3}else{if(z)if(v<=93){u=v>>>4
if(u>=8)return H.i(C.o,u)
u=(C.o[u]&1<<(v&15))!==0}else u=!1
else u=!1
if(u){P.bq(a,y,"Invalid character")
t=null
s=null}else{if((v&64512)===55296){u=y+1
if(u<c){r=C.b.V(a,u)
if((r&64512)===56320){v=65536|(v&1023)<<10|r&1023
s=2}else s=1}else s=1}else s=1
t=P.fu(v)}}if(w==null)w=new P.am("")
w.a+=C.b.q(a,x,y)
w.a+=H.f(t)
if(typeof s!=="number")return H.u(s)
y+=s
x=y}}}if(w==null)return
if(typeof x!=="number")return x.O()
if(x<c)w.a+=C.b.q(a,x,c)
z=w.a
return z.charCodeAt(0)==0?z:z},
fx:function(a){if(C.b.X(a,"."))return!0
return C.b.dd(a,"/.")!==-1},
lA:function(a){var z,y,x,w,v,u,t
if(!P.fx(a))return a
z=H.b([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(J.S(u,"..")){t=z.length
if(t!==0){if(0>=t)return H.i(z,-1)
z.pop()
if(z.length===0)C.a.h(z,"")}w=!0}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}if(w)C.a.h(z,"")
return C.a.k(z,"/")},
lz:function(a,b){var z,y,x,w,v,u
if(!P.fx(a))return!b?P.fv(a):a
z=H.b([],[P.h])
for(y=a.split("/"),x=y.length,w=!1,v=0;v<x;++v){u=y[v]
if(".."===u)if(z.length!==0&&C.a.gag(z)!==".."){if(0>=z.length)return H.i(z,-1)
z.pop()
w=!0}else{C.a.h(z,"..")
w=!1}else if("."===u)w=!0
else{C.a.h(z,u)
w=!1}}y=z.length
if(y!==0)if(y===1){if(0>=y)return H.i(z,0)
y=z[0].length===0}else y=!1
else y=!0
if(y)return"./"
if(w||C.a.gag(z)==="..")C.a.h(z,"")
if(!b){if(0>=z.length)return H.i(z,0)
C.a.m(z,0,P.fv(z[0]))}return C.a.k(z,"/")},
fv:function(a){var z,y,x,w
z=a.length
if(z>=2&&P.fw(J.h0(a,0)))for(y=1;y<z;++y){x=C.b.C(a,y)
if(x===58)return C.b.q(a,0,y)+"%3A"+C.b.ah(a,y+1)
if(x<=127){w=x>>>4
if(w>=8)return H.i(C.q,w)
w=(C.q[w]&1<<(x&15))===0}else w=!0
if(w)break}return a},
ln:function(a,b){var z,y,x
for(z=0,y=0;y<2;++y){x=C.b.C(a,b+y)
if(48<=x&&x<=57)z=z*16+x-48
else{x|=32
if(97<=x&&x<=102)z=z*16+x-87
else throw H.d(P.bA("Invalid URL encoding"))}}return z},
de:function(a,b,c,d,e){var z,y,x,w,v
y=b
while(!0){if(!(y<c)){z=!0
break}x=C.b.C(a,y)
if(x<=127)if(x!==37)w=x===43
else w=!0
else w=!0
if(w){z=!1
break}++y}if(z){if(C.i!==d)w=!1
else w=!0
if(w)return C.b.q(a,b,c)
else v=new H.o(C.b.q(a,b,c))}else{v=H.b([],[P.l])
for(w=a.length,y=b;y<c;++y){x=C.b.C(a,y)
if(x>127)throw H.d(P.bA("Illegal percent encoding in URI"))
if(x===37){if(y+3>w)throw H.d(P.bA("Truncated URI"))
C.a.h(v,P.ln(a,y+1))
y+=2}else if(x===43)C.a.h(v,32)
else C.a.h(v,x)}}H.m(v,"$isc",[P.l],"$asc")
return new P.ka(!1).bQ(v)},
fw:function(a){var z=a|32
return 97<=z&&z<=122}}},
ll:{"^":"k:18;a,b",
$1:function(a){var z=this.b
if(typeof z!=="number")return z.G()
throw H.d(P.P("Invalid port",this.a,z+1))}},
lr:{"^":"k:22;",
$1:function(a){return P.bN(C.a6,a,C.i,!1)}},
lu:{"^":"k:31;a,b",
$2:function(a,b){var z,y
z=this.b
y=this.a
z.a+=y.a
y.a="&"
y=z.a+=H.f(P.bN(C.r,a,C.i,!0))
if(b!=null&&b.length!==0){z.a=y+"="
z.a+=H.f(P.bN(C.r,b,C.i,!0))}}},
lt:{"^":"k:30;a",
$2:function(a,b){var z,y
H.y(a)
if(b==null||typeof b==="string")this.a.$2(a,H.y(b))
else for(z=J.aR(H.fR(b,"$isp")),y=this.a;z.A();)y.$2(a,H.y(z.gE()))}},
jZ:{"^":"a;a,b,c",
gdB:function(){var z,y,x,w,v
z=this.c
if(z!=null)return z
z=this.b
if(0>=z.length)return H.i(z,0)
y=this.a
z=z[0]+1
x=C.b.de(y,"?",z)
w=y.length
if(x>=0){v=P.br(y,x+1,w,C.p,!1)
w=x}else v=null
z=new P.kA(this,"data",null,null,null,P.br(y,z,w,C.H,!1),v,null)
this.c=z
return z},
i:function(a){var z,y
z=this.b
if(0>=z.length)return H.i(z,0)
y=this.a
return z[0]===-1?"data:"+y:y},
n:{
eZ:function(a,b,c){var z,y,x,w,v,u,t,s,r
z=H.b([b-1],[P.l])
for(y=a.length,x=b,w=-1,v=null;x<y;++x){v=C.b.C(a,x)
if(v===44||v===59)break
if(v===47){if(w<0){w=x
continue}throw H.d(P.P("Invalid MIME type",a,x))}}if(w<0&&x>b)throw H.d(P.P("Invalid MIME type",a,x))
for(;v!==44;){C.a.h(z,x);++x
for(u=-1;x<y;++x){v=C.b.C(a,x)
if(v===61){if(u<0)u=x}else if(v===59||v===44)break}if(u>=0)C.a.h(z,u)
else{t=C.a.gag(z)
if(v!==44||x!==t+7||!C.b.a5(a,"base64",t+1))throw H.d(P.P("Expecting '='",a,x))
break}}C.a.h(z,x)
s=x+1
if((z.length&1)===1)a=C.M.hz(a,s,y)
else{r=P.fz(a,s,y,C.p,!0)
if(r!=null)a=C.b.aD(a,s,y,r)}return new P.jZ(a,z,c)}}},
lM:{"^":"k:29;",
$1:function(a){return new Uint8Array(96)}},
lL:{"^":"k:26;a",
$2:function(a,b){var z=this.a
if(a>=z.length)return H.i(z,a)
z=z[a]
J.h2(z,0,96,b)
return z}},
lN:{"^":"k;",
$3:function(a,b,c){var z,y,x
for(z=b.length,y=0;y<z;++y){x=C.b.C(b,y)^96
if(x>=a.length)return H.i(a,x)
a[x]=c}}},
lO:{"^":"k;",
$3:function(a,b,c){var z,y,x
for(z=C.b.C(b,0),y=C.b.C(b,1);z<=y;++z){x=(z^96)>>>0
if(x>=a.length)return H.i(a,x)
a[x]=c}}},
l6:{"^":"a;a,b,c,d,e,f,r,x,0y",
gd8:function(){return this.c>0},
gda:function(){var z,y
if(this.c>0){z=this.d
if(typeof z!=="number")return z.G()
y=this.e
if(typeof y!=="number")return H.u(y)
y=z+1<y
z=y}else z=!1
return z},
gdc:function(){var z=this.f
if(typeof z!=="number")return z.O()
return z<this.r},
gd9:function(){return this.r<this.a.length},
gcD:function(){return this.b===4&&C.b.X(this.a,"http")},
gcE:function(){return this.b===5&&C.b.X(this.a,"https")},
gbj:function(){var z,y
z=this.b
if(z<=0)return""
y=this.x
if(y!=null)return y
if(this.gcD()){this.x="http"
z="http"}else if(this.gcE()){this.x="https"
z="https"}else if(z===4&&C.b.X(this.a,"file")){this.x="file"
z="file"}else if(z===7&&C.b.X(this.a,"package")){this.x="package"
z="package"}else{z=C.b.q(this.a,0,z)
this.x=z}return z},
gdD:function(){var z,y
z=this.c
y=this.b+3
return z>y?C.b.q(this.a,y,z-1):""},
gbU:function(a){var z=this.c
return z>0?C.b.q(this.a,z,this.d):""},
gbb:function(a){var z
if(this.gda()){z=this.d
if(typeof z!=="number")return z.G()
return P.by(C.b.q(this.a,z+1,this.e),null,null)}if(this.gcD())return 80
if(this.gcE())return 443
return 0},
gdm:function(a){return C.b.q(this.a,this.e,this.f)},
gc1:function(){var z,y
z=this.f
y=this.r
if(typeof z!=="number")return z.O()
return z<y?C.b.q(this.a,z+1,y):""},
gd7:function(){var z,y
z=this.r
y=this.a
return z<y.length?C.b.ah(y,z+1):""},
gaZ:function(){var z=this.f
if(typeof z!=="number")return z.O()
if(z>=this.r)return C.a7
z=P.h
return new P.eY(P.f0(this.gc1(),C.i),[z,z])},
c3:function(a,b,c,d,e,f,g,h,i,j){var z,y,x
H.m(h,"$isB",[P.h,null],"$asB")
i=this.gbj()
z=i==="file"
y=this.c
j=y>0?C.b.q(this.a,this.b+3,y):""
f=this.gda()?this.gbb(this):null
y=this.c
if(y>0)c=C.b.q(this.a,y,this.d)
else if(j.length!==0||f!=null||z)c=""
y=this.a
d=C.b.q(y,this.e,this.f)
if(!z)x=c!=null&&d.length!==0
else x=!0
if(x&&!C.b.X(d,"/"))d="/"+d
g=P.dd(g,0,0,h)
x=this.r
if(x<y.length)b=C.b.ah(y,x+1)
return new P.cl(i,j,c,f,d,g,b)},
c2:function(a,b){return this.c3(a,null,null,null,null,null,null,b,null,null)},
gT:function(a){var z=this.y
if(z==null){z=C.b.gT(this.a)
this.y=z}return z},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!!J.E(b).$isd5)return this.a===b.i(0)
return!1},
i:function(a){return this.a},
$isd5:1},
kA:{"^":"cl;cx,a,b,c,d,e,f,r,0x,0y,0z,0Q,0ch"}}],["","",,W,{"^":"",
dx:function(a){var z=document.createElement("a")
return z},
cE:function(a,b){var z=document.createElement("canvas")
return z},
hG:function(a,b,c){var z,y
z=document.body
y=(z&&C.l).a9(z,a,b,c)
y.toString
z=W.x
z=new H.d9(new W.ag(y),H.j(new W.hH(),{func:1,ret:P.G,args:[z]}),[z])
return H.e(z.gan(z),"$isD")},
hI:function(a){H.e(a,"$isbW")
return"wheel"},
bg:function(a){var z,y,x
z="element tag unavailable"
try{y=J.h5(a)
if(typeof y==="string")z=a.tagName}catch(x){H.a_(x)}return z},
e_:function(a,b,c){var z=document.createElement("img")
if(b!=null)z.src=b
return z},
i2:function(a){var z,y,x
y=document.createElement("input")
z=H.e(y,"$ise0")
try{J.h7(z,a)}catch(x){H.a_(x)}return z},
ci:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fi:function(a,b,c,d){var z,y
z=W.ci(W.ci(W.ci(W.ci(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
fJ:function(a,b){var z
H.j(a,{func:1,ret:-1,args:[b]})
z=$.J
if(z===C.h)return a
return z.cY(a,b)},
W:{"^":"D;","%":"HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLLIElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
hb:{"^":"W;",
i:function(a){return String(a)},
$ishb:1,
"%":"HTMLAnchorElement"},
mL:{"^":"W;",
i:function(a){return String(a)},
"%":"HTMLAreaElement"},
dA:{"^":"W;",$isdA:1,"%":"HTMLBaseElement"},
bS:{"^":"W;",$isbS:1,"%":"HTMLBodyElement"},
cD:{"^":"W;",
bg:function(a,b,c){if(c!=null)return this.eC(a,b,P.m_(c,null))
return this.eD(a,b)},
dK:function(a,b){return this.bg(a,b,null)},
eC:function(a,b,c){return a.getContext(b,c)},
eD:function(a,b){return a.getContext(b)},
$iscD:1,
$isdH:1,
"%":"HTMLCanvasElement"},
cF:{"^":"A;",
eE:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
hc:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$iscF:1,
"%":"CanvasRenderingContext2D"},
mO:{"^":"x;0l:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
mQ:{"^":"kz;0l:length=",
dM:function(a,b){var z=this.eF(a,this.el(a,b))
return z==null?"":z},
el:function(a,b){var z,y
z=$.$get$dM()
y=z[b]
if(typeof y==="string")return y
y=this.fz(a,b)
z[b]=y
return y},
fz:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.hA()+b
if(z in a)return z
return b},
eF:function(a,b){return a.getPropertyValue(b)},
gbK:function(a){return a.bottom},
gaU:function(a){return a.height},
gaA:function(a){return a.left},
gc4:function(a){return a.right},
gb1:function(a){return a.top},
gb2:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hv:{"^":"a;",
gaA:function(a){return this.dM(a,"left")}},
aK:{"^":"W;",$isaK:1,"%":"HTMLDivElement"},
hB:{"^":"x;",
fM:function(a,b){return a.adoptNode(b)},
bh:function(a,b){return a.getElementById(b)},
"%":"XMLDocument;Document"},
mR:{"^":"A;",
i:function(a){return String(a)},
"%":"DOMException"},
hC:{"^":"A;",
h1:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
hD:{"^":"A;",
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
u:function(a,b){var z
if(b==null)return!1
if(!H.bv(b,"$isaz",[P.ac],"$asaz"))return!1
z=J.R(b)
return a.left===z.gaA(b)&&a.top===z.gb1(b)&&a.width===z.gb2(b)&&a.height===z.gaU(b)},
gT:function(a){return W.fi(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gbK:function(a){return a.bottom},
gaU:function(a){return a.height},
gaA:function(a){return a.left},
gc4:function(a){return a.right},
gb1:function(a){return a.top},
gb2:function(a){return a.width},
$isaz:1,
$asaz:function(){return[P.ac]},
"%":";DOMRectReadOnly"},
ky:{"^":"c2;cw:a<,b",
gl:function(a){return this.b.length},
p:function(a,b){var z=this.b
if(b<0||b>=z.length)return H.i(z,b)
return H.e(z[b],"$isD")},
m:function(a,b,c){var z
H.e(c,"$isD")
z=this.b
if(b<0||b>=z.length)return H.i(z,b)
J.cw(this.a,c,z[b])},
h:function(a,b){J.dv(this.a,b)
return b},
gR:function(a){var z=this.i4(this)
return new J.ao(z,z.length,0,[H.n(z,0)])},
$asN:function(){return[W.D]},
$asp:function(){return[W.D]},
$asc:function(){return[W.D]}},
D:{"^":"x;0i_:tagName=",
gfP:function(a){return new W.kB(a)},
gbP:function(a){return new W.ky(a,a.children)},
gd_:function(a){var z,y,x,w
z=a.clientLeft
y=a.clientTop
x=a.clientWidth
w=a.clientHeight
if(typeof x!=="number")return x.O()
if(x<0)x=-x*0
if(typeof w!=="number")return w.O()
if(w<0)w=-w*0
return new P.az(z,y,x,w,[P.ac])},
i:function(a){return a.localName},
a9:["bm",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dW
if(z==null){z=H.b([],[W.au])
y=new W.ej(z)
C.a.h(z,W.fg(null))
C.a.h(z,W.fq())
$.dW=y
d=y}else d=z
z=$.dV
if(z==null){z=new W.fB(d)
$.dV=z
c=z}else{z.a=d
c=z}}if($.ax==null){z=document
y=z.implementation
y=(y&&C.Q).h1(y,"")
$.ax=y
$.cH=y.createRange()
y=$.ax
y.toString
y=y.createElement("base")
H.e(y,"$isdA")
y.href=z.baseURI
z=$.ax.head;(z&&C.S).v(z,y)}z=$.ax
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.e(y,"$isbS")}z=$.ax
if(!!this.$isbS)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.ax.body;(z&&C.l).v(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.W(C.a4,a.tagName)){z=$.cH;(z&&C.J).dR(z,x)
z=$.cH
w=(z&&C.J).h_(z,b)}else{x.innerHTML=b
w=$.ax.createDocumentFragment()
for(z=J.R(w);y=x.firstChild,y!=null;)z.v(w,y)}z=$.ax.body
if(x==null?z!=null:x!==z)J.dw(x)
c.cb(w)
C.n.fM(document,w)
return w},function(a,b,c){return this.a9(a,b,c,null)},"h0",null,null,"giJ",5,5,null],
dV:function(a,b,c,d){a.textContent=null
this.v(a,this.a9(a,b,c,d))},
dU:function(a,b){return this.dV(a,b,null,null)},
aG:function(a,b){return a.getAttribute(b)},
ff:function(a,b){return a.removeAttribute(b)},
dS:function(a,b,c){return a.setAttribute(b,c)},
$isD:1,
"%":";Element"},
hH:{"^":"k:23;",
$1:function(a){return!!J.E(H.e(a,"$isx")).$isD}},
a0:{"^":"A;",$isa0:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
bW:{"^":"A;",
ei:function(a,b,c,d){return a.addEventListener(b,H.b6(H.j(c,{func:1,args:[W.a0]}),1),!1)},
$isbW:1,
"%":";EventTarget"},
mS:{"^":"W;0l:length=","%":"HTMLFormElement"},
hW:{"^":"W;","%":"HTMLHeadElement"},
hX:{"^":"A;0l:length=",
cK:function(a,b,c,d){return a.replaceState(b,c,d)},
"%":"History"},
hY:{"^":"kR;",
gl:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.aS(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.e(c,"$isx")
throw H.d(P.Q("Cannot assign element of immutable List."))},
a_:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isak:1,
$asak:function(){return[W.x]},
$asN:function(){return[W.x]},
$isp:1,
$asp:function(){return[W.x]},
$isc:1,
$asc:function(){return[W.x]},
$ishY:1,
$asar:function(){return[W.x]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hZ:{"^":"hB;","%":"HTMLDocument"},
bF:{"^":"A;0d0:data=",$isbF:1,"%":"ImageData"},
cI:{"^":"W;",$iscI:1,$isdH:1,"%":"HTMLImageElement"},
e0:{"^":"W;0type",
si7:function(a,b){a.type=H.y(b)},
$ise0:1,
"%":"HTMLInputElement"},
bi:{"^":"d2;",$isbi:1,"%":"KeyboardEvent"},
ib:{"^":"W;","%":"HTMLLabelElement"},
il:{"^":"A;",
i:function(a){return String(a)},
$isil:1,
"%":"Location"},
iu:{"^":"W;","%":"HTMLAudioElement;HTMLMediaElement"},
a4:{"^":"d2;",$isa4:1,"%":"PointerEvent;DragEvent|MouseEvent"},
ag:{"^":"c2;a",
gan:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.d(P.eA("No elements"))
if(y>1)throw H.d(P.eA("More than one element"))
return z.firstChild},
ad:function(a,b){var z,y,x,w,v
H.m(b,"$isp",[W.x],"$asp")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.R(y),v=0;v<x;++v)w.v(y,z.firstChild)
return},
m:function(a,b,c){var z,y
H.e(c,"$isx")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.i(y,b)
J.cw(z,c,y[b])},
gR:function(a){var z=this.a.childNodes
return new W.dY(z,z.length,-1,[H.bx(C.a8,z,"ar",0)])},
gl:function(a){return this.a.childNodes.length},
p:function(a,b){var z=this.a.childNodes
if(b<0||b>=z.length)return H.i(z,b)
return z[b]},
$asN:function(){return[W.x]},
$asp:function(){return[W.x]},
$asc:function(){return[W.x]}},
x:{"^":"bW;0hP:previousSibling=",
hQ:function(a){var z=a.parentNode
if(z!=null)J.bQ(z,a)},
hT:function(a,b){var z,y
try{z=a.parentNode
J.cw(z,b,a)}catch(y){H.a_(y)}return a},
i:function(a){var z=a.nodeValue
return z==null?this.dY(a):z},
v:function(a,b){return a.appendChild(H.e(b,"$isx"))},
fg:function(a,b){return a.removeChild(b)},
fj:function(a,b,c){return a.replaceChild(b,c)},
$isx:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
iy:{"^":"kX;",
gl:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.aS(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.e(c,"$isx")
throw H.d(P.Q("Cannot assign element of immutable List."))},
a_:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isak:1,
$asak:function(){return[W.x]},
$asN:function(){return[W.x]},
$isp:1,
$asp:function(){return[W.x]},
$isc:1,
$asc:function(){return[W.x]},
$asar:function(){return[W.x]},
"%":"NodeList|RadioNodeList"},
iV:{"^":"A;",
h_:function(a,b){return a.createContextualFragment(b)},
dR:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
n1:{"^":"W;0l:length=","%":"HTMLSelectElement"},
ca:{"^":"W;",$isca:1,"%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
jp:{"^":"W;",
a9:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.bm(a,b,c,d)
z=W.hG("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.ag(y).ad(0,new W.ag(z))
return y},
eH:function(a,b){return a.insertRow(b)},
"%":"HTMLTableElement"},
jq:{"^":"W;",
a9:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.bm(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.k.a9(z.createElement("table"),b,c,d)
z.toString
z=new W.ag(z)
x=z.gan(z)
x.toString
z=new W.ag(x)
w=z.gan(z)
y.toString
w.toString
new W.ag(y).ad(0,new W.ag(w))
return y},
cC:function(a,b){return a.insertCell(b)},
"%":"HTMLTableRowElement"},
n4:{"^":"W;",
a9:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.bm(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.k.a9(z.createElement("table"),b,c,d)
z.toString
z=new W.ag(z)
x=z.gan(z)
y.toString
x.toString
new W.ag(y).ad(0,new W.ag(x))
return y},
"%":"HTMLTableSectionElement"},
eE:{"^":"W;",$iseE:1,"%":"HTMLTemplateElement"},
aZ:{"^":"A;",$isaZ:1,"%":"Touch"},
b_:{"^":"d2;",$isb_:1,"%":"TouchEvent"},
n6:{"^":"lh;",
gl:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.aS(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.e(c,"$isaZ")
throw H.d(P.Q("Cannot assign element of immutable List."))},
a_:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isak:1,
$asak:function(){return[W.aZ]},
$asN:function(){return[W.aZ]},
$isp:1,
$asp:function(){return[W.aZ]},
$isc:1,
$asc:function(){return[W.aZ]},
$asar:function(){return[W.aZ]},
"%":"TouchList"},
d2:{"^":"a0;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
n9:{"^":"iu;",$isdH:1,"%":"HTMLVideoElement"},
bo:{"^":"a4;",
gh7:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.Q("deltaY is not supported"))},
gh6:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.Q("deltaX is not supported"))},
$isbo:1,
"%":"WheelEvent"},
kr:{"^":"bW;",
fk:function(a,b){return a.requestAnimationFrame(H.b6(H.j(b,{func:1,ret:-1,args:[P.ac]}),1))},
ev:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fc:{"^":"x;",$isfc:1,"%":"Attr"},
ne:{"^":"hD;",
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
u:function(a,b){var z
if(b==null)return!1
if(!H.bv(b,"$isaz",[P.ac],"$asaz"))return!1
z=J.R(b)
return a.left===z.gaA(b)&&a.top===z.gb1(b)&&a.width===z.gb2(b)&&a.height===z.gaU(b)},
gT:function(a){return W.fi(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gaU:function(a){return a.height},
gb2:function(a){return a.width},
"%":"ClientRect|DOMRect"},
ni:{"^":"lI;",
gl:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.aS(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.e(c,"$isx")
throw H.d(P.Q("Cannot assign element of immutable List."))},
a_:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$isak:1,
$asak:function(){return[W.x]},
$asN:function(){return[W.x]},
$isp:1,
$asp:function(){return[W.x]},
$isc:1,
$asc:function(){return[W.x]},
$asar:function(){return[W.x]},
"%":"MozNamedAttrMap|NamedNodeMap"},
kx:{"^":"ee;cw:a<",
M:function(a,b){var z,y,x,w,v,u
H.j(b,{func:1,ret:-1,args:[P.h,P.h]})
for(z=this.gaf(),y=z.length,x=this.a,w=J.R(x),v=0;v<z.length;z.length===y||(0,H.C)(z),++v){u=z[v]
b.$2(u,w.aG(x,u))}},
gaf:function(){var z,y,x,w,v
z=this.a.attributes
y=H.b([],[P.h])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.i(z,w)
v=H.e(z[w],"$isfc")
if(v.namespaceURI==null)C.a.h(y,v.name)}return y},
$asc4:function(){return[P.h,P.h]},
$asB:function(){return[P.h,P.h]}},
kB:{"^":"kx;a",
p:function(a,b){return J.cy(this.a,H.y(b))},
m:function(a,b,c){J.h8(this.a,b,c)},
gl:function(a){return this.gaf().length}},
kC:{"^":"jk;a,b,c,$ti"},
nf:{"^":"kC;a,b,c,$ti"},
kD:{"^":"cY;a,b,c,d,e,$ti",n:{
T:function(a,b,c,d,e){var z,y
z=W.fJ(new W.kE(c),W.a0)
y=z!=null
if(y&&!0){H.j(z,{func:1,args:[W.a0]})
if(y)J.h_(a,b,z,!1)}return new W.kD(0,a,b,z,!1,[e])}}},
kE:{"^":"k:52;a",
$1:function(a){return this.a.$1(H.e(a,"$isa0"))}},
bM:{"^":"a;a",
ec:function(a){var z,y
z=$.$get$db()
if(z.ghr(z)){for(y=0;y<262;++y)z.m(0,C.a3[y],W.mc())
for(y=0;y<12;++y)z.m(0,C.w[y],W.md())}},
ax:function(a){return $.$get$fh().W(0,W.bg(a))},
al:function(a,b,c){var z,y,x
z=W.bg(a)
y=$.$get$db()
x=y.p(0,H.f(z)+"::"+b)
if(x==null)x=y.p(0,"*::"+b)
if(x==null)return!1
return H.dj(x.$4(a,b,c,this))},
$isau:1,
n:{
fg:function(a){var z,y
z=W.dx(null)
y=window.location
z=new W.bM(new W.l2(z,y))
z.ec(a)
return z},
ng:[function(a,b,c,d){H.e(a,"$isD")
H.y(b)
H.y(c)
H.e(d,"$isbM")
return!0},"$4","mc",16,0,21],
nh:[function(a,b,c,d){var z,y,x
H.e(a,"$isD")
H.y(b)
H.y(c)
z=H.e(d,"$isbM").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","md",16,0,21]}},
ar:{"^":"a;$ti",
gR:function(a){return new W.dY(a,this.gl(a),-1,[H.bx(this,a,"ar",0)])}},
ej:{"^":"a;a",
ax:function(a){return C.a.cW(this.a,new W.iA(a))},
al:function(a,b,c){return C.a.cW(this.a,new W.iz(a,b,c))},
$isau:1},
iA:{"^":"k:24;a",
$1:function(a){return H.e(a,"$isau").ax(this.a)}},
iz:{"^":"k:24;a,b,c",
$1:function(a){return H.e(a,"$isau").al(this.a,this.b,this.c)}},
l3:{"^":"a;",
ed:function(a,b,c,d){var z,y,x
this.a.ad(0,c)
z=b.c7(0,new W.l4())
y=b.c7(0,new W.l5())
this.b.ad(0,z)
x=this.c
x.ad(0,C.E)
x.ad(0,y)},
ax:function(a){return this.a.W(0,W.bg(a))},
al:["e1",function(a,b,c){var z,y
z=W.bg(a)
y=this.c
if(y.W(0,H.f(z)+"::"+b))return this.d.fN(c)
else if(y.W(0,"*::"+b))return this.d.fN(c)
else{y=this.b
if(y.W(0,H.f(z)+"::"+b))return!0
else if(y.W(0,"*::"+b))return!0
else if(y.W(0,H.f(z)+"::*"))return!0
else if(y.W(0,"*::*"))return!0}return!1}],
$isau:1},
l4:{"^":"k:25;",
$1:function(a){return!C.a.W(C.w,H.y(a))}},
l5:{"^":"k:25;",
$1:function(a){return C.a.W(C.w,H.y(a))}},
la:{"^":"l3;e,a,b,c,d",
al:function(a,b,c){if(this.e1(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cy(a,"template")==="")return this.e.W(0,b)
return!1},
n:{
fq:function(){var z,y,x,w,v
z=P.h
y=P.eb(C.v,z)
x=H.n(C.v,0)
w=H.j(new W.lb(),{func:1,ret:z,args:[x]})
v=H.b(["TEMPLATE"],[z])
y=new W.la(y,P.bH(null,null,null,z),P.bH(null,null,null,z),P.bH(null,null,null,z),null)
y.ed(null,new H.is(C.v,w,[x,z]),v,null)
return y}}},
lb:{"^":"k:22;",
$1:function(a){return"TEMPLATE::"+H.f(H.y(a))}},
l9:{"^":"a;",
ax:function(a){var z=J.E(a)
if(!!z.$isew)return!1
z=!!z.$iscZ
if(z&&W.bg(a)==="foreignObject")return!1
if(z)return!0
return!1},
al:function(a,b,c){if(b==="is"||C.b.X(b,"on"))return!1
return this.ax(a)},
$isau:1},
dY:{"^":"a;a,b,c,0d,$ti",
scB:function(a){this.d=H.t(a,H.n(this,0))},
A:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.scB(J.fZ(this.a,z))
this.c=z
return!0}this.scB(null)
this.c=y
return!1},
gE:function(){return this.d},
$isaL:1},
au:{"^":"a;"},
l2:{"^":"a;a,b",$isn8:1},
fB:{"^":"a;a",
cb:function(a){new W.lF(this).$2(a,null)},
aO:function(a,b){if(b==null)J.dw(a)
else J.bQ(b,a)},
fo:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.h3(a)
x=J.cy(y.gcw(),"is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.a_(t)}v="element unprintable"
try{v=J.a8(a)}catch(t){H.a_(t)}try{u=W.bg(a)
this.fn(H.e(a,"$isD"),b,z,v,u,H.e(y,"$isB"),H.y(x))}catch(t){if(H.a_(t) instanceof P.aw)throw t
else{this.aO(a,b)
window
s="Removing corrupted element "+H.f(v)
if(typeof console!="undefined")window.console.warn(s)}}},
fn:function(a,b,c,d,e,f,g){var z,y,x,w,v,u
if(c){this.aO(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.ax(a)){this.aO(a,b)
window
z="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.al(a,"is",g)){this.aO(a,b)
window
z="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gaf()
y=H.b(z.slice(0),[H.n(z,0)])
for(x=f.gaf().length-1,z=f.a,w=J.R(z);x>=0;--x){if(x>=y.length)return H.i(y,x)
v=y[x]
if(!this.a.al(a,J.ha(v),w.aG(z,v))){window
u="Removing disallowed attribute <"+H.f(e)+" "+v+'="'+H.f(w.aG(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.aG(z,v)
w.ff(z,v)}}if(!!J.E(a).$iseE)this.cb(a.content)},
$isn_:1},
lF:{"^":"k:27;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.fo(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.aO(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.h4(z)}catch(w){H.a_(w)
v=H.e(z,"$isx")
if(x){u=v.parentNode
if(u!=null)J.bQ(u,v)}else J.bQ(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.e(y,"$isx")}}},
kz:{"^":"A+hv;"},
kQ:{"^":"A+N;"},
kR:{"^":"kQ+ar;"},
kW:{"^":"A+N;"},
kX:{"^":"kW+ar;"},
lg:{"^":"A+N;"},
lh:{"^":"lg+ar;"},
lH:{"^":"A+N;"},
lI:{"^":"lH+ar;"}}],["","",,P,{"^":"",
m2:function(a){var z,y
z=J.E(a)
if(!!z.$isbF){y=z.gd0(a)
if(y.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){y.constructor=CanvasPixelArray
y.BYTES_PER_ELEMENT=1}return a}return new P.fs(a.data,a.height,a.width)},
m1:function(a){if(a instanceof P.fs)return{data:a.a,height:a.b,width:a.c}
return a},
m_:function(a,b){var z={}
a.M(0,new P.m0(z))
return z},
dS:function(){var z=$.dR
if(z==null){z=J.cx(window.navigator.userAgent,"Opera",0)
$.dR=z}return z},
hA:function(){var z,y
z=$.dO
if(z!=null)return z
y=$.dP
if(y==null){y=J.cx(window.navigator.userAgent,"Firefox",0)
$.dP=y}if(y)z="-moz-"
else{y=$.dQ
if(y==null){y=!P.dS()&&J.cx(window.navigator.userAgent,"Trident/",0)
$.dQ=y}if(y)z="-ms-"
else z=P.dS()?"-o-":"-webkit-"}$.dO=z
return z},
l7:{"^":"a;",
d5:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
C.a.h(z,a)
C.a.h(this.b,null)
return y},
be:function(a){var z,y,x,w
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.E(a)
if(!!y.$isae)return new Date(a.a)
if(!!y.$isiZ)throw H.d(P.cf("structured clone of RegExp"))
if(!!y.$isbF)return a
if(!!y.$iscT)return a
if(!!y.$isB){x=this.d5(a)
y=this.b
if(x>=y.length)return H.i(y,x)
w=y[x]
z.a=w
if(w!=null)return w
w={}
z.a=w
C.a.m(y,x,w)
a.M(0,new P.l8(z,this))
return z.a}if(!!y.$isc){x=this.d5(a)
z=this.b
if(x>=z.length)return H.i(z,x)
w=z[x]
if(w!=null)return w
return this.fZ(a,x)}throw H.d(P.cf("structured clone of other type"))},
fZ:function(a,b){var z,y,x,w
z=J.b8(a)
y=z.gl(a)
x=new Array(y)
C.a.m(this.b,b,x)
for(w=0;w<y;++w)C.a.m(x,w,this.be(z.p(a,w)))
return x}},
l8:{"^":"k:6;a,b",
$2:function(a,b){this.a.a[a]=this.b.be(b)}},
fs:{"^":"a;d0:a>,b,c",$isbF:1},
m0:{"^":"k:6;a",
$2:function(a,b){this.a[a]=b}},
fp:{"^":"l7;a,b"},
hO:{"^":"c2;a,b",
gaM:function(){var z,y,x
z=this.b
y=H.Y(z,"N",0)
x=W.D
return new H.iq(new H.d9(z,H.j(new P.hP(),{func:1,ret:P.G,args:[y]}),[y]),H.j(new P.hQ(),{func:1,ret:x,args:[y]}),[y,x])},
M:function(a,b){H.j(b,{func:1,ret:-1,args:[W.D]})
C.a.M(P.ec(this.gaM(),!1,W.D),b)},
m:function(a,b,c){var z
H.e(c,"$isD")
z=this.gaM()
J.h6(z.b.$1(J.bR(z.a,b)),c)},
h:function(a,b){J.dv(this.b.a,b)},
gl:function(a){return J.ai(this.gaM().a)},
p:function(a,b){var z=this.gaM()
return z.b.$1(J.bR(z.a,b))},
gR:function(a){var z=P.ec(this.gaM(),!1,W.D)
return new J.ao(z,z.length,0,[H.n(z,0)])},
$asN:function(){return[W.D]},
$asp:function(){return[W.D]},
$asc:function(){return[W.D]}},
hP:{"^":"k:23;",
$1:function(a){return!!J.E(H.e(a,"$isx")).$isD}},
hQ:{"^":"k:28;",
$1:function(a){return H.ab(H.e(a,"$isx"),"$isD")}}}],["","",,P,{"^":""}],["","",,P,{"^":"",
cj:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kS:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
kY:{"^":"a;$ti",
gc4:function(a){var z=this.a
if(typeof z!=="number")return z.G()
return H.t(z+this.c,H.n(this,0))},
gbK:function(a){var z=this.b
if(typeof z!=="number")return z.G()
return H.t(z+this.d,H.n(this,0))},
i:function(a){return"Rectangle ("+H.f(this.a)+", "+H.f(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(!H.bv(b,"$isaz",[P.ac],"$asaz"))return!1
z=this.a
y=J.R(b)
x=y.gaA(b)
if(z==null?x==null:z===x){x=this.b
w=y.gb1(b)
if(x==null?w==null:x===w){if(typeof z!=="number")return z.G()
w=H.n(this,0)
if(H.t(z+this.c,w)===y.gc4(b)){if(typeof x!=="number")return x.G()
z=H.t(x+this.d,w)===y.gbK(b)}else z=!1}else z=!1}else z=!1
return z},
gT:function(a){var z,y,x,w,v
z=this.a
y=J.bz(z)
x=this.b
w=J.bz(x)
if(typeof z!=="number")return z.G()
v=H.n(this,0)
z=H.t(z+this.c,v)
if(typeof x!=="number")return x.G()
v=H.t(x+this.d,v)
return P.kS(P.cj(P.cj(P.cj(P.cj(0,y),w),z&0x1FFFFFFF),v&0x1FFFFFFF))}},
az:{"^":"kY;aA:a>,b1:b>,b2:c>,aU:d>,$ti"}}],["","",,P,{"^":"",ew:{"^":"cZ;",$isew:1,"%":"SVGScriptElement"},cZ:{"^":"D;",
gbP:function(a){return new P.hO(a,new W.ag(a))},
a9:function(a,b,c,d){var z,y,x,w,v,u
z=H.b([],[W.au])
C.a.h(z,W.fg(null))
C.a.h(z,W.fq())
C.a.h(z,new W.l9())
c=new W.fB(new W.ej(z))
y='<svg version="1.1">'+b+"</svg>"
z=document
x=z.body
w=(x&&C.l).h0(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.ag(w)
u=z.gan(z)
for(z=J.R(v);x=u.firstChild,x!=null;)z.v(v,x)
return v},
$iscZ:1,
"%":"SVGAElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGradientElement|SVGGraphicsElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGViewElement;SVGElement"}}],["","",,P,{"^":"",F:{"^":"a;",$isp:1,
$asp:function(){return[P.l]},
$isc:1,
$asc:function(){return[P.l]},
$isjH:1}}],["","",,P,{"^":""}],["","",,P,{"^":"",hf:{"^":"A;",$ishf:1,"%":"WebGLBuffer"},hS:{"^":"A;",$ishS:1,"%":"WebGLFramebuffer"},iS:{"^":"A;",$isiS:1,"%":"WebGLProgram"},cU:{"^":"A;",
cS:function(a,b){return a.activeTexture(b)},
cX:function(a,b,c){return a.attachShader(b,c)},
ae:function(a,b,c){return a.bindBuffer(b,c)},
fR:function(a,b,c){return a.bindFramebuffer(b,c)},
ay:function(a,b,c){return a.bindTexture(b,c)},
cZ:function(a,b,c,d){return a.bufferData(b,c,d)},
fT:function(a,b){return a.clear(b)},
fU:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
fV:function(a,b){return a.clearDepth(b)},
fW:function(a,b){return a.compileShader(b)},
h2:function(a,b){return a.createShader(b)},
h4:function(a,b){return a.deleteProgram(b)},
h5:function(a,b){return a.deleteShader(b)},
h8:function(a,b){return a.depthFunc(b)},
d1:function(a,b){return a.disableVertexAttribArray(b)},
hb:function(a,b,c,d,e){return a.drawElements(H.U(b),H.U(c),H.U(d),H.U(e))},
d3:function(a,b){return a.enable(b)},
d4:function(a,b){return a.enableVertexAttribArray(b)},
dF:function(a,b){return a.generateMipmap(b)},
dG:function(a,b,c){return a.getActiveAttrib(b,c)},
dH:function(a,b,c){return a.getActiveUniform(b,c)},
dI:function(a,b,c){return a.getAttribLocation(b,c)},
c9:function(a,b){return a.getParameter(b)},
dL:function(a,b){return a.getProgramInfoLog(b)},
bi:function(a,b,c){return a.getProgramParameter(b,c)},
dN:function(a,b){return a.getShaderInfoLog(b)},
dO:function(a,b,c){return a.getShaderParameter(b,c)},
dP:function(a,b,c){return a.getUniformLocation(b,c)},
hu:function(a,b){return a.linkProgram(b)},
hO:function(a,b,c){return a.pixelStorei(b,c)},
dW:function(a,b,c){return a.shaderSource(b,c)},
i1:function(a,b,c,d,e,f,g,h,i,j){var z,y
z=J.E(g)
if(!!z.$isbF)y=!0
else y=!1
if(y){this.fB(a,b,c,d,e,f,P.m1(g))
return}if(!!z.$iscI)z=!0
else z=!1
if(z){this.fC(a,b,c,d,e,f,g)
return}throw H.d(P.bA("Incorrect number or type of arguments"))},
i0:function(a,b,c,d,e,f,g){return this.i1(a,b,c,d,e,f,g,null,null,null)},
fB:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
fC:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bd:function(a,b,c,d){return a.texParameteri(b,c,d)},
i9:function(a,b,c){return a.uniform1f(b,c)},
dz:function(a,b,c){return a.uniform1i(b,c)},
ia:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
dC:function(a,b){return a.useProgram(b)},
ib:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
ic:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$iscU:1,
"%":"WebGLRenderingContext"},ja:{"^":"A;",$isja:1,"%":"WebGLShader"},jr:{"^":"A;",$isjr:1,"%":"WebGLTexture"},jR:{"^":"A;",$isjR:1,"%":"WebGLUniformLocation"}}],["","",,P,{"^":""}],["","",,O,{"^":"",a2:{"^":"a;0a,0b,0c,0d,$ti",
seL:function(a){this.a=H.m(a,"$isc",[H.Y(this,"a2",0)],"$asc")},
scH:function(a){this.b=H.j(a,{func:1,ret:P.G,args:[[P.p,H.Y(this,"a2",0)]]})},
scG:function(a){this.c=H.j(a,{func:1,ret:-1,args:[P.l,[P.p,H.Y(this,"a2",0)]]})},
scI:function(a){this.d=H.j(a,{func:1,ret:-1,args:[P.l,[P.p,H.Y(this,"a2",0)]]})},
cf:function(a){this.seL(H.b([],[a]))
this.scH(null)
this.scG(null)
this.scI(null)},
dT:function(a,b,c){var z={func:1,ret:-1,args:[P.l,[P.p,H.Y(this,"a2",0)]]}
H.j(a,z)
H.j(c,z)
this.scH(b)
this.scG(a)
this.scI(c)},
bk:function(a,b){return this.dT(a,null,b)},
f7:function(a){H.m(a,"$isp",[H.Y(this,"a2",0)],"$asp")
return!0},
e7:function(a,b){var z
H.m(b,"$isp",[H.Y(this,"a2",0)],"$asp")
z=this.c
if(z!=null)z.$2(a,b)},
gl:function(a){return this.a.length},
gR:function(a){var z=this.a
return new J.ao(z,z.length,0,[H.n(z,0)])},
a_:function(a,b){var z=this.a
if(b<0||b>=z.length)return H.i(z,b)
return z[b]},
h:function(a,b){var z,y,x
z=H.Y(this,"a2",0)
H.t(b,z)
z=[z]
if(this.f7(H.b([b],z))){y=this.a
x=y.length
C.a.h(y,b)
this.e7(x,H.b([b],z))}},
$isp:1,
n:{
dK:function(a){var z=new O.a2([a])
z.cf(a)
return z}}},cQ:{"^":"a;0a,0b",
sbv:function(a){this.a=H.m(a,"$isc",[V.bI],"$asc")},
gl:function(a){return this.a.length},
gw:function(){var z=this.b
if(z==null){z=D.H()
this.b=z}return z},
e8:function(a){var z=this.b
if(!(z==null))z.F(a)},
ao:function(){return this.e8(null)},
gaV:function(){var z=this.a
if(z.length>0)return C.a.gag(z)
else return V.c5()},
dq:function(a){var z=this.a
if(a==null)C.a.h(z,V.c5())
else C.a.h(z,a)
this.ao()},
c0:function(){var z=this.a
if(z.length>0){z.pop()
this.ao()}}}}],["","",,E,{"^":"",cA:{"^":"a;"},aj:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0a7:z<,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
se9:function(a,b){this.y=H.m(b,"$isa2",[E.aj],"$asa2")},
sa7:function(a){this.z=H.e(a,"$isbD")},
co:function(){var z,y
this.e=null
for(z=this.y.a,z=new J.ao(z,z.length,0,[H.n(z,0)]);z.A();){y=z.d
if(y.f==null)y.co()}},
scc:function(a,b){var z,y,x
z=this.c
if(z==null?b!=null:z!==b){this.c=b
this.d=b
this.e=null
if(z!=null)z.gw().U(0,this.gdj())
y=this.c
if(y!=null)y.gw().h(0,this.gdj())
x=new D.K("shape",z,this.c,this,[F.ey])
x.b=!0
this.a4(x)}},
sdt:function(a){var z,y,x
z=this.f
if(z==null?a!=null:z!==a){if(z!=null)z.gw().U(0,this.gdk())
y=this.f
this.f=a
if(a!=null)a.gw().h(0,this.gdk())
this.co()
x=new D.K("technique",y,this.f,this,[O.cb])
x.b=!0
this.a4(x)}},
saW:function(a){var z,y
if(!J.S(this.r,a)){z=this.r
if(z!=null)z.gw().U(0,this.gdi())
if(a!=null)a.gw().h(0,this.gdi())
this.r=a
y=new D.K("mover",z,a,this,[U.a6])
y.b=!0
this.a4(y)}},
aE:function(a){var z,y,x,w
z=this.r
y=z!=null?z.aF(a,this):null
if(!J.S(y,this.x)){x=this.x
this.x=y
w=new D.K("matrix",x,y,this,[V.bI])
w.b=!0
this.a4(w)}for(z=this.y.a,z=new J.ao(z,z.length,0,[H.n(z,0)]);z.A();)z.d.aE(a)},
aC:function(a){var z,y,x,w,v,u,t,s
z=a.dx
y=this.x
z.toString
if(y==null)C.a.h(z.a,z.gaV())
else C.a.h(z.a,y.t(0,z.gaV()))
z.ao()
a.dr(this.f)
z=a.dy
x=(z&&C.a).gag(z)
if(x!=null&&this.d!=null){z=x.a
if(z==null){w=a.fr.p(0,"Bumpy Debugging Shader")
if(w==null){z=a.a
w=new T.hg(z,"Bumpy Debugging Shader")
w.e5(z,"Bumpy Debugging Shader")
y=$.hi
v=$.hh
w.c=y
w.d=v
w.e=w.cv(y,35633)
w.f=w.cv(w.d,35632)
y=z.createProgram()
w.r=y
C.c.cX(z,y,w.e)
C.c.cX(z,w.r,w.f)
C.c.hu(z,w.r)
if(!H.dj(C.c.bi(z,w.r,35714))){u=C.c.dL(z,w.r)
C.c.h4(z,w.r)
H.M(P.a1("Failed to link shader: "+H.f(u)))}w.fq()
w.ft()
w.z=w.x.p(0,"posAttr")
w.Q=w.x.p(0,"normAttr")
w.ch=w.x.p(0,"binmAttr")
w.cx=w.x.p(0,"txtAttr")
w.cy=w.x.p(0,"weightAttr")
w.db=H.ab(w.y.p(0,"bumpTxt"),"$iseX")
w.dx=H.ab(w.y.p(0,"objMat"),"$isce")
w.dy=H.ab(w.y.p(0,"viewMat"),"$isce")
w.fr=H.ab(w.y.p(0,"projMat"),"$isce")
w.fx=H.ab(w.y.p(0,"offsetScalar"),"$iseW")
if(a.fr.b9("Bumpy Debugging Shader"))H.M(P.a1('Shader cache already contains a shader by the name "Bumpy Debugging Shader".'))
a.fr.m(0,"Bumpy Debugging Shader",w)}x.a=w
z=w}if(this.e==null){z=this.c
y=$.$get$aD()
v=$.$get$aC()
v=z.fS(new Z.kp(a.a),new Z.d8(y.a|v.a|$.$get$aB().a|$.$get$aE().a|$.$get$aF().a))
v.aT($.$get$aD()).e=x.a.z.c
v.aT($.$get$aC()).e=x.a.Q.c
v.aT($.$get$aB()).e=x.a.ch.c
v.aT($.$get$aE()).e=x.a.cx.c
y=v.aT($.$get$aF())
z=x.a
y.e=z.cy.c
this.e=v}y=x.b
if(y!=null){y.a=0
y=a.a
C.c.dC(y,z.r)
z.x.he()
v=x.b
if(v!=null){t=z.db
t.toString
s=v.d
if(!s)C.c.dz(t.a,t.d,0)
else{v=v.a
C.c.dz(t.a,t.d,v)}}v=a.cy.gaV()
t=z.fr
t.toString
t.bl(v.c6(0,!0))
v=a.db.gaV()
t=z.dy
t.toString
t.bl(v.c6(0,!0))
v=a.dx.gaV()
t=z.dx
t.toString
t.bl(v.c6(0,!0))
v=x.c
z=z.fx
C.c.i9(z.a,z.d,v)
v=x.b
if(!v.c&&v.d){v.c=!0
C.c.cS(y,33984+v.a)
C.c.ay(y,3553,v.b)}z=this.e
if(z instanceof Z.dE){z.bI(a)
z.aC(a)
z.i8(a)}else this.e=null
z=x.a
z.toString
C.c.dC(y,null)
z.x.h9()
z=x.b
if(z.c){z.c=!1
C.c.cS(y,33984+z.a)
C.c.ay(y,3553,null)}}}for(z=this.y.a,z=new J.ao(z,z.length,0,[H.n(z,0)]);z.A();)z.d.aC(a)
a.dn()
a.dx.c0()},
gw:function(){var z=this.z
if(z==null){z=D.H()
this.z=z}return z},
a4:function(a){var z=this.z
if(!(z==null))z.F(a)},
a0:function(){return this.a4(null)},
hE:[function(a){H.e(a,"$isv")
this.e=null
this.a4(a)},function(){return this.hE(null)},"iP","$1","$0","gdj",0,2,2],
hF:[function(a){this.a4(H.e(a,"$isv"))},function(){return this.hF(null)},"iQ","$1","$0","gdk",0,2,2],
hD:[function(a){this.a4(H.e(a,"$isv"))},function(){return this.hD(null)},"iO","$1","$0","gdi",0,2,2],
hB:[function(a){this.a4(H.e(a,"$isv"))},function(){return this.hB(null)},"iM","$1","$0","gdh",0,2,2],
iL:[function(a,b){var z,y,x,w,v,u,t
H.m(b,"$isp",[E.aj],"$asp")
for(z=b.length,y=this.gdh(),x={func:1,ret:-1,args:[D.v]},w=[x],v=0;v<b.length;b.length===z||(0,H.C)(b),++v){u=b[v]
if(u!=null){if(u.ga7()==null){t=new D.bD()
t.saj(null)
t.sb6(null)
t.c=null
t.d=0
u.sa7(t)}t=u.ga7()
t.toString
H.j(y,x)
if(t.a==null)t.saj(H.b([],w))
t=t.a;(t&&C.a).h(t,y)}}this.a0()},"$2","ghA",8,0,8],
iN:[function(a,b){var z,y
H.m(b,"$isp",[E.aj],"$asp")
for(z=b.gR(b),y=this.gdh();z.A();)z.gE().gw().U(0,y)
this.a0()},"$2","ghC",8,0,8],
i:function(a){var z,y
z=this.a
y=z.length
if(y<=0)return"Unnamed entity"
return z},
$iseh:1,
n:{
dX:function(a,b,c,d,e,f){var z=new E.aj()
z.a=d
z.b=!0
z.se9(0,O.dK(E.aj))
z.y.bk(z.ghA(),z.ghC())
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
z.scc(0,e)
z.sdt(f)
z.saW(c)
return z}}},j0:{"^":"a;a,b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr",
sfA:function(a){this.dy=H.m(a,"$isc",[O.cb],"$asc")},
sfu:function(a){this.fr=H.m(a,"$isB",[P.h,A.cV],"$asB")},
e3:function(a,b){var z,y
this.c=512
this.d=512
this.e=0
z=new P.ae(Date.now(),!1)
this.f=z
this.r=z
this.x=z
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
z=new O.cQ()
y=[V.bI]
z.sbv(H.b([],y))
z.b=null
z.gw().h(0,new E.j2(this))
this.cy=z
z=new O.cQ()
z.sbv(H.b([],y))
z.b=null
z.gw().h(0,new E.j3(this))
this.db=z
z=new O.cQ()
z.sbv(H.b([],y))
z.b=null
z.gw().h(0,new E.j4(this))
this.dx=z
this.sfA(H.b([],[O.cb]))
z=this.dy;(z&&C.a).h(z,null)
this.sfu(new H.aM(0,0,[P.h,A.cV]))},
gaH:function(){return this.a},
dr:function(a){var z,y
z=this.dy
y=a==null?(z&&C.a).gag(z):a;(z&&C.a).h(z,y)},
dn:function(){var z=this.dy
if(z.length>1)z.pop()},
n:{
j1:function(a,b){var z=new E.j0(a,b)
z.e3(a,b)
return z}}},j2:{"^":"k:7;a",
$1:function(a){var z
H.e(a,"$isv")
z=this.a
z.z=null
z.ch=null}},j3:{"^":"k:7;a",
$1:function(a){var z
H.e(a,"$isv")
z=this.a
z.z=null
z.Q=null
z.ch=null
z.cx=null}},j4:{"^":"k:7;a",
$1:function(a){var z
H.e(a,"$isv")
z=this.a
z.ch=null
z.cx=null}},jz:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0a7:x<,0y,0z,0Q,0ch,0cx,0cy",
sa7:function(a){this.x=H.e(a,"$isbD")},
eb:[function(a){H.e(a,"$isv")
this.hV()},function(){return this.eb(null)},"ea","$1","$0","gcg",0,2,2],
ghm:function(){var z,y,x
z=Date.now()
y=C.d.av(P.dT(0,0,0,z-this.cx.a,0,0).a,1000)/1000
if(y<=0)return 0
x=this.cy
this.cy=0
this.cx=new P.ae(z,!1)
return x/y},
cL:function(){var z,y,x,w
z=window.devicePixelRatio
y=this.b.clientWidth
if(typeof y!=="number")return y.t()
if(typeof z!=="number")return H.u(z)
x=C.f.bT(y*z)
y=this.b.clientHeight
if(typeof y!=="number")return y.t()
w=C.f.bT(y*z)
y=this.b
if(y.width!==x||y.height!==w){y.width=x
y.height=w
P.eH(C.u,this.ghU())}},
hV:[function(){var z,y
if(!this.ch){this.ch=!0
z=window
y=H.j(new E.jB(this),{func:1,ret:-1,args:[P.ac]})
C.L.ev(z)
C.L.fk(z,W.fJ(y,P.ac))}},"$0","ghU",0,0,3],
hS:function(){var z,y,x,w,v
try{++this.cy
this.ch=!1
this.cL()
if(this.d!=null){x=this.e;++x.e
x.r=x.x
w=Date.now()
x.x=new P.ae(w,!1)
x.y=P.dT(0,0,0,w-x.r.a,0,0).a*0.000001
w=x.cy
C.a.sl(w.a,0)
w.ao()
w=x.db
C.a.sl(w.a,0)
w.ao()
w=x.dx
C.a.sl(w.a,0)
w.ao()
w=x.dy;(w&&C.a).sl(w,0)
x=x.dy;(x&&C.a).h(x,null)
this.d.aC(this.e)}x=this.z
if(!(x==null))x.F(null)}catch(v){z=H.a_(v)
y=H.b9(v)
P.dt("Error: "+H.f(z))
P.dt("Stack: "+H.f(y))
throw H.d(z)}},
n:{
jA:function(a,b,c,d,e){var z,y,x,w
z=J.E(a)
if(!!z.$iscD)return E.eG(a,!0,!0,!0,!1)
y=W.cE(null,null)
x=y.style
x.width="100%"
x.height="100%"
z.gbP(a).h(0,y)
w=E.eG(y,!0,!0,!0,!1)
w.a=a
return w},
eG:function(a,b,c,d,e){var z,y,x,w,v,u,t,s,r,q,p,o
z=new E.jz()
y=P.ih(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.h,null)
x=C.m.bg(a,"webgl",y)
x=H.e(x==null?C.m.bg(a,"experimental-webgl",y):x,"$iscU")
if(x==null)H.M(P.a1("Failed to get the rendering context for WebGL."))
z.b=a
z.a=a
z.c=x
z.e=E.j1(x,a)
w=new T.jx(x)
w.b=H.U((x&&C.c).c9(x,3379))
w.c=H.U(C.c.c9(x,34076))
w.d=0
w.e=0
z.f=w
w=new X.k5(a)
v=new X.ia()
v.c=new X.at(!1,!1,!1)
v.sfc(P.bH(null,null,null,P.l))
w.b=v
v=new X.iv(w)
v.f=0
v.r=V.aN()
v.x=V.aN()
v.Q=1
v.ch=1
w.c=v
v=new X.im(w)
v.r=0
v.x=V.aN()
v.Q=1
v.ch=1
v.cx=1
v.cy=1
w.d=v
v=new X.jE(w)
v.e=0
v.f=V.aN()
v.r=V.aN()
w.e=v
w.f=!1
w.r=!1
w.x=!1
w.y=null
w.sew(H.b([],[[P.cY,P.a]]))
v=w.z
u=document
t=W.a4
s={func:1,ret:-1,args:[t]};(v&&C.a).h(v,W.T(u,"contextmenu",H.j(w.geW(),s),!1,t))
v=w.z
r=W.a0
q={func:1,ret:-1,args:[r]};(v&&C.a).h(v,W.T(a,"focus",H.j(w.geZ(),q),!1,r))
v=w.z;(v&&C.a).h(v,W.T(a,"blur",H.j(w.geT(),q),!1,r))
v=w.z
p=W.bi
o={func:1,ret:-1,args:[p]};(v&&C.a).h(v,W.T(u,"keyup",H.j(w.gf0(),o),!1,p))
v=w.z;(v&&C.a).h(v,W.T(u,"keydown",H.j(w.gf_(),o),!1,p))
p=w.z;(p&&C.a).h(p,W.T(a,"mousedown",H.j(w.gf2(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.T(a,"mouseup",H.j(w.gf4(),s),!1,t))
p=w.z;(p&&C.a).h(p,W.T(a,"mousemove",H.j(w.gf3(),s),!1,t))
p=w.z
o=W.bo;(p&&C.a).h(p,W.T(a,H.y(W.hI(a)),H.j(w.gf5(),{func:1,ret:-1,args:[o]}),!1,o))
o=w.z;(o&&C.a).h(o,W.T(u,"mousemove",H.j(w.geX(),s),!1,t))
o=w.z;(o&&C.a).h(o,W.T(u,"mouseup",H.j(w.geY(),s),!1,t))
t=w.z;(t&&C.a).h(t,W.T(u,"pointerlockchange",H.j(w.gf6(),q),!1,r))
r=w.z
q=W.b_
u={func:1,ret:-1,args:[q]};(r&&C.a).h(r,W.T(a,"touchstart",H.j(w.gfb(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.T(a,"touchend",H.j(w.gf9(),u),!1,q))
r=w.z;(r&&C.a).h(r,W.T(a,"touchmove",H.j(w.gfa(),u),!1,q))
z.r=w
z.Q=!0
z.ch=!1
z.cx=new P.ae(Date.now(),!1)
z.cy=0
z.cL()
return z}}},jB:{"^":"k:32;a",
$1:function(a){var z
H.mB(a)
z=this.a
if(z.ch){z.ch=!1
z.hS()}}}}],["","",,Z,{"^":"",f9:{"^":"a;a,b",$ismM:1,n:{
fa:function(a,b,c){var z
H.m(c,"$isc",[P.l],"$asc")
z=a.createBuffer()
C.c.ae(a,b,z)
C.c.cZ(a,b,new Int16Array(H.cm(c)),35044)
C.c.ae(a,b,null)
return new Z.f9(b,z)}}},dD:{"^":"cA;a,b,c,d,e",
bI:function(a){var z,y,x
try{y=a.a
C.c.d4(y,this.e)
C.c.ib(y,this.e,this.b,5126,!1,this.d,this.c)}catch(x){z=H.a_(x)
y=P.a1('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.f(z))
throw H.d(y)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.f(this.e)+"]"}},kp:{"^":"a;a",$ismN:1},dE:{"^":"a;a,0b,c,d",
seG:function(a){this.b=H.m(a,"$isc",[Z.bZ],"$asc")},
aT:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if((w.a.a&a.a)!==0)return w}return},
bI:function(a){var z,y
z=this.a
C.c.ae(a.gaH(),z.a,z.b)
for(z=this.c,y=z.length-1;y>=0;--y)z[y].bI(a)},
i8:function(a){var z,y,x
for(z=this.c,y=z.length-1,x=a.a;y>=0;--y)C.c.d1(x,z[y].e)
C.c.ae(a.gaH(),this.a.a,null)},
aC:function(a){var z,y,x,w,v
z=this.b.length
for(y=0;y<z;++y){x=this.b
if(y>=x.length)return H.i(x,y)
w=x[y]
x=w.c
v=x.a
C.c.ae(a.gaH(),v,x.b)
C.c.hb(a.gaH(),w.a,w.b,5123,0)
C.c.ae(a.gaH(),v,null)}},
i:function(a){var z,y,x,w,v,u
z=[P.h]
y=H.b([],z)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v)C.a.h(y,x[v].i(0))
u=H.b([],z)
for(z=this.c,x=z.length,v=0;v<x;++v)C.a.h(u,J.a8(z[v]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(y,", ")+"\nAttrs:   "+C.a.k(u,", ")},
$isn5:1},bZ:{"^":"a;a,b,c",
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.aW(this.c)+"'")+"]"}},d8:{"^":"a;a",
gcd:function(a){var z,y
z=this.a
y=(z&$.$get$aD().a)!==0?3:0
if((z&$.$get$aC().a)!==0)y+=3
if((z&$.$get$aB().a)!==0)y+=3
if((z&$.$get$aE().a)!==0)y+=2
if((z&$.$get$b2().a)!==0)y+=3
if((z&$.$get$bm().a)!==0)y+=3
if((z&$.$get$bn().a)!==0)y+=4
if((z&$.$get$aF().a)!==0)++y
return(z&$.$get$b1().a)!==0?y+4:y},
fO:function(a){var z,y,x
z=$.$get$aD()
y=this.a
if((y&z.a)!==0){if(0===a)return z
x=1}else x=0
z=$.$get$aC()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aB()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aE()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b2()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bm()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$bn()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$aF()
if((y&z.a)!==0){if(x===a)return z;++x}z=$.$get$b1()
if((y&z.a)!==0)if(x===a)return z
return $.$get$f8()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.d8))return!1
return this.a===b.a},
i:function(a){var z,y
z=H.b([],[P.h])
y=this.a
if((y&$.$get$aD().a)!==0)C.a.h(z,"Pos")
if((y&$.$get$aC().a)!==0)C.a.h(z,"Norm")
if((y&$.$get$aB().a)!==0)C.a.h(z,"Binm")
if((y&$.$get$aE().a)!==0)C.a.h(z,"Txt2D")
if((y&$.$get$b2().a)!==0)C.a.h(z,"TxtCube")
if((y&$.$get$bm().a)!==0)C.a.h(z,"Clr3")
if((y&$.$get$bn().a)!==0)C.a.h(z,"Clr4")
if((y&$.$get$aF().a)!==0)C.a.h(z,"Weight")
if((y&$.$get$b1().a)!==0)C.a.h(z,"Bending")
if(z.length<=0)return"None"
return C.a.k(z,"|")},
n:{
af:function(a){return new Z.d8(a)}}}}],["","",,D,{"^":"",dI:{"^":"a;"},bD:{"^":"a;0a,0b,0c,0d",
saj:function(a){this.a=H.m(a,"$isc",[{func:1,ret:-1,args:[D.v]}],"$asc")},
sb6:function(a){this.b=H.m(a,"$isc",[{func:1,ret:-1,args:[D.v]}],"$asc")},
h:function(a,b){var z={func:1,ret:-1,args:[D.v]}
H.j(b,z)
if(this.a==null)this.saj(H.b([],[z]))
z=this.a;(z&&C.a).h(z,b)},
U:function(a,b){var z,y
H.j(b,{func:1,ret:-1,args:[D.v]})
z=this.a
z=z==null?null:C.a.W(z,b)
if(z==null?!1:z){z=this.a
y=(z&&C.a).U(z,b)||!1}else y=!1
z=this.b
z=z==null?null:C.a.W(z,b)
if(z==null?!1:z){z=this.b
y=(z&&C.a).U(z,b)||y}return y},
F:function(a){var z,y,x,w
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
return!0}if(!x)C.a.M(y,new D.hM(z))
y=this.b
if(!(y==null))C.a.M(y,new D.hN(z))
z=this.b
if(!(z==null))C.a.sl(z,0)
return!0},
hd:function(){return this.F(null)},
hW:function(a,b){var z,y
z=this.d
if(z>0){--z
this.d=z
if(z<=0)z=this.c!=null
else z=!1
if(z){y=this.c
this.c=null
this.F(y)}}},
b_:function(){return this.hW(!0,!1)},
n:{
H:function(){var z=new D.bD()
z.saj(null)
z.sb6(null)
z.c=null
z.d=0
return z}}},hM:{"^":"k:17;a",
$1:function(a){var z
H.j(a,{func:1,ret:-1,args:[D.v]})
z=this.a.a
z.b
a.$1(z)}},hN:{"^":"k:17;a",
$1:function(a){var z
H.j(a,{func:1,ret:-1,args:[D.v]})
z=this.a.a
z.b
a.$1(z)}},v:{"^":"a;a,0b"},e1:{"^":"v;c,d,a,0b,$ti"},e2:{"^":"v;c,d,a,0b,$ti"},K:{"^":"v;c,d,e,a,0b,$ti",
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}}],["","",,X,{"^":"",dF:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dF))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}},e7:{"^":"a;a,b",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.e7))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}},ia:{"^":"a;0a,0b,0c,0d",
sfc:function(a){this.d=H.m(a,"$isex",[P.l],"$asex")},
hL:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
hH:function(a){this.c=a.b
this.d.U(0,a.a)
return!1}},ed:{"^":"c7;x,y,c,d,e,a,0b"},im:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
aL:function(a,b){var z,y,x,w,v,u,t,s
z=new P.ae(Date.now(),!1)
y=this.x
x=b.a
w=this.Q
if(typeof x!=="number")return x.t()
v=b.b
u=this.ch
if(typeof v!=="number")return v.t()
t=new V.a9(y.a+x*w,y.b+v*u)
u=this.a.gaz()
s=new X.bk(a,V.aN(),this.x,this.y,this.z,u,t,z,this)
s.b=!0
this.z=z
this.x=t
return s},
c_:function(a,b){this.r=a.a
return!1},
aY:function(a,b){var z,y
z=this.r
y=a.a
if(typeof y!=="number")return y.dQ()
if(typeof z!=="number")return z.bf()
this.r=(z&~y)>>>0
return!1},
aX:function(a,b){var z=this.d
if(z==null)return!1
z.F(this.aL(a,b))
return!0},
hM:function(a){var z,y,x,w,v,u,t,s
z=this.e
if(z==null)return!1
y=this.a.gaz()
x=this.x
w=Date.now()
v=a.a
u=this.cx
if(typeof v!=="number")return v.t()
t=a.b
s=this.cy
if(typeof t!=="number")return t.t()
w=new X.cR(new V.O(v*u,t*s),y,x,new P.ae(w,!1),this)
w.b=!0
z.F(w)
return!0},
f1:function(a,b,c){var z,y,x
if(this.f==null)return
z=new P.ae(Date.now(),!1)
y=this.f
x=new X.ed(c,a,this.a.gaz(),b,z,this)
x.b=!0
y.F(x)
this.y=z
this.x=V.aN()}},at:{"^":"a;a,b,c",
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.at))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var z=this.a?"Ctrl+":""
z+=this.b?"Alt+":""
return z+(this.c?"Shift+":"")}},bk:{"^":"c7;x,y,z,Q,ch,c,d,e,a,0b"},iv:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch",
bs:function(a,b,c){var z,y,x
z=new P.ae(Date.now(),!1)
y=this.a.gaz()
x=new X.bk(a,this.r,this.x,this.y,this.z,y,b,z,this)
x.b=!0
if(c){this.y=z
this.r=b}this.z=z
this.x=b
return x},
c_:function(a,b){var z
this.f=a.a
z=this.b
if(z==null)return!1
z.F(this.bs(a,b,!0))
return!0},
aY:function(a,b){var z,y
z=this.f
y=a.a
if(typeof y!=="number")return y.dQ()
if(typeof z!=="number")return z.bf()
this.f=(z&~y)>>>0
z=this.c
if(z==null)return!1
z.F(this.bs(a,b,!0))
return!0},
aX:function(a,b){var z=this.d
if(z==null)return!1
z.F(this.bs(a,b,!1))
return!0},
hN:function(a,b){var z,y,x,w,v,u,t
z=this.e
if(z==null)return!1
y=this.a.gaz()
x=Date.now()
w=a.a
v=this.Q
if(typeof w!=="number")return w.t()
u=a.b
t=this.ch
if(typeof u!=="number")return u.t()
x=new X.cR(new V.O(w*v,u*t),y,b,new P.ae(x,!1),this)
x.b=!0
z.F(x)
return!0},
gd2:function(){var z=this.b
if(z==null){z=D.H()
this.b=z}return z},
gdA:function(){var z=this.c
if(z==null){z=D.H()
this.c=z}return z},
gdg:function(){var z=this.d
if(z==null){z=D.H()
this.d=z}return z}},cR:{"^":"c7;x,c,d,e,a,0b"},c7:{"^":"v;"},eK:{"^":"c7;x,y,z,Q,ch,c,d,e,a,0b"},jE:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y",
aL:function(a,b){var z,y,x,w
H.m(a,"$isc",[V.a9],"$asc")
z=new P.ae(Date.now(),!1)
y=a.length>0?a[0]:V.aN()
x=this.a.gaz()
w=new X.eK(a,this.f,this.r,this.x,this.y,x,y,z,this)
w.b=!0
if(b){this.x=z
this.f=y}this.y=z
this.r=y
return w},
hK:function(a){var z
H.m(a,"$isc",[V.a9],"$asc")
z=this.b
if(z==null)return!1
z.F(this.aL(a,!0))
return!0},
hI:function(a){var z
H.m(a,"$isc",[V.a9],"$asc")
z=this.c
if(z==null)return!1
z.F(this.aL(a,!0))
return!0},
hJ:function(a){var z
H.m(a,"$isc",[V.a9],"$asc")
z=this.d
if(z==null)return!1
z.F(this.aL(a,!1))
return!0}},k5:{"^":"a;a,0b,0c,0d,0e,0f,0r,0x,0y,0z",
sew:function(a){this.z=H.m(a,"$isc",[[P.cY,P.a]],"$asc")},
gaz:function(){var z=this.a
return V.eu(0,0,C.m.gd_(z).c,C.m.gd_(z).d)},
cu:function(a){var z,y
z=a.keyCode
y=a.ctrlKey||a.metaKey
return new X.e7(z,new X.at(y,a.altKey,a.shiftKey))},
at:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.at(y,a.altKey,a.shiftKey)},
bG:function(a){var z,y
z=this.b
y=a.ctrlKey||a.metaKey
z.c=new X.at(y,a.altKey,a.shiftKey)},
ak:function(a){var z,y,x,w,v
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.H()
v=z.top
if(typeof x!=="number")return x.H()
return new V.a9(y-w,x-v)},
aN:function(a){return new V.O(a.movementX,a.movementY)},
bD:function(a){var z,y,x,w,v,u,t,s
z=this.a.getBoundingClientRect()
y=H.b([],[V.a9])
for(x=a.touches,w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v){u=x[v]
t=C.f.ab(u.pageX)
C.f.ab(u.pageY)
s=z.left
C.f.ab(u.pageX)
C.a.h(y,new V.a9(t-s,C.f.ab(u.pageY)-z.top))}return y},
ai:function(a){var z,y
z=a.buttons
y=a.ctrlKey||a.metaKey
return new X.dF(z,new X.at(y,a.altKey,a.shiftKey))},
bw:function(a){var z,y,x,w,v,u
z=this.a.getBoundingClientRect()
y=a.pageX
x=a.pageY
w=z.left
if(typeof y!=="number")return y.H()
v=y-w
if(v<0)return!1
y=z.top
if(typeof x!=="number")return x.H()
u=x-y
if(u<0)return!1
return v<z.width&&u<z.height},
it:[function(a){this.f=!0},"$1","geZ",4,0,9],
im:[function(a){this.f=!1},"$1","geT",4,0,9],
iq:[function(a){H.e(a,"$isa4")
if(this.f&&this.bw(a))a.preventDefault()},"$1","geW",4,0,4],
iv:[function(a){var z
H.e(a,"$isbi")
if(!this.f)return
z=this.cu(a)
this.b.hL(z)},"$1","gf0",4,0,16],
iu:[function(a){var z
H.e(a,"$isbi")
if(!this.f)return
z=this.cu(a)
this.b.hH(z)},"$1","gf_",4,0,16],
iw:[function(a){var z,y,x,w
H.e(a,"$isa4")
z=this.a
z.focus()
this.f=!0
this.at(a)
if(this.x){y=this.ai(a)
x=this.aN(a)
if(this.d.c_(y,x))a.preventDefault()
return}if(this.r){this.y=a
z.requestPointerLock()
return}y=this.ai(a)
w=this.ak(a)
if(this.c.c_(y,w))a.preventDefault()},"$1","gf2",4,0,4],
iy:[function(a){var z,y,x
H.e(a,"$isa4")
this.at(a)
z=this.ai(a)
if(this.x){y=this.aN(a)
if(this.d.aY(z,y))a.preventDefault()
return}if(this.r)return
x=this.ak(a)
if(this.c.aY(z,x))a.preventDefault()},"$1","gf4",4,0,4],
is:[function(a){var z,y,x
H.e(a,"$isa4")
if(!this.bw(a)){this.at(a)
z=this.ai(a)
if(this.x){y=this.aN(a)
if(this.d.aY(z,y))a.preventDefault()
return}if(this.r)return
x=this.ak(a)
if(this.c.aY(z,x))a.preventDefault()}},"$1","geY",4,0,4],
ix:[function(a){var z,y,x
H.e(a,"$isa4")
this.at(a)
z=this.ai(a)
if(this.x){y=this.aN(a)
if(this.d.aX(z,y))a.preventDefault()
return}if(this.r)return
x=this.ak(a)
if(this.c.aX(z,x))a.preventDefault()},"$1","gf3",4,0,4],
ir:[function(a){var z,y,x
H.e(a,"$isa4")
if(!this.bw(a)){this.at(a)
z=this.ai(a)
if(this.x){y=this.aN(a)
if(this.d.aX(z,y))a.preventDefault()
return}if(this.r)return
x=this.ak(a)
if(this.c.aX(z,x))a.preventDefault()}},"$1","geX",4,0,4],
iz:[function(a){var z,y
H.e(a,"$isbo")
this.at(a)
z=new V.O((a&&C.K).gh6(a),C.K.gh7(a)).D(0,180)
if(this.x){if(this.d.hM(z))a.preventDefault()
return}if(this.r)return
y=this.ak(a)
if(this.c.hN(z,y))a.preventDefault()},"$1","gf5",4,0,37],
iA:[function(a){var z,y,x
z=document.pointerLockElement===this.a
if(z!==this.x){this.x=z
y=this.ai(this.y)
x=this.ak(this.y)
this.d.f1(y,x,z)}},"$1","gf6",4,0,9],
iE:[function(a){var z
H.e(a,"$isb_")
this.a.focus()
this.f=!0
this.bG(a)
z=this.bD(a)
if(this.e.hK(z))a.preventDefault()},"$1","gfb",4,0,10],
iC:[function(a){var z
H.e(a,"$isb_")
this.bG(a)
z=this.bD(a)
if(this.e.hI(z))a.preventDefault()},"$1","gf9",4,0,10],
iD:[function(a){var z
H.e(a,"$isb_")
this.bG(a)
z=this.bD(a)
if(this.e.hJ(z))a.preventDefault()},"$1","gfa",4,0,10]}}],["","",,V,{"^":"",
mP:[function(a,b){if(typeof b!=="number")return b.H()
if(typeof a!=="number")return H.u(a)
return Math.abs(b-a)<=1e-9},"$2","it",8,0,34],
mK:function(a,b,c){var z
if(c<=b)return b
z=c-b
a=C.f.b3(a-b,z)
return(a<0?a+z:a)+b},
L:function(a,b,c){if(a==null)return C.b.aa("null",c)
return C.b.aa(C.f.dv($.r.$2(a,0)?0:a,b),c+b+1)},
cq:function(a,b,c){var z,y,x,w,v
H.m(a,"$isc",[P.w],"$asc")
z=H.b([],[P.h])
for(y=0,x=0;x<4;++x){w=V.L(a[x],b,c)
y=Math.max(y,w.length)
C.a.h(z,w)}for(v=z.length-1;v>=0;--v){if(v>=z.length)return H.i(z,v)
C.a.m(z,v,C.b.aa(z[v],y))}return z},
ds:function(a,b){return C.f.i3(Math.pow(b,C.V.bT(Math.log(H.lZ(a))/Math.log(b))))},
bU:{"^":"a;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bU))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+", "+V.L(this.d,3,0)+"]"}},
bI:{"^":"a;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
c6:function(a,b){var z=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.w])
return z},
t:function(a6,a7){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
z=this.a
y=a7.a
x=this.b
w=a7.e
v=this.c
u=a7.y
if(typeof u!=="number")return H.u(u)
t=this.d
s=a7.cx
r=a7.b
q=a7.f
p=a7.z
if(typeof p!=="number")return H.u(p)
o=a7.cy
n=a7.c
m=a7.r
l=a7.Q
if(typeof l!=="number")return H.u(l)
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
if(typeof b!=="number")return b.t()
a=this.z
if(typeof a!=="number")return a.t()
a0=this.Q
if(typeof a0!=="number")return a0.t()
a1=this.ch
a2=this.cx
a3=this.cy
a4=this.db
a5=this.dx
return V.ay(z*y+x*w+v*u+t*s,z*r+x*q+v*p+t*o,z*n+x*m+v*l+t*k,z*j+x*i+v*h+t*g,f*y+e*w+d*u+c*s,f*r+e*q+d*p+c*o,f*n+e*m+d*l+c*k,f*j+e*i+d*h+c*g,b*y+a*w+a0*u+a1*s,b*r+a*q+a0*p+a1*o,b*n+a*m+a0*l+a1*k,b*j+a*i+a0*h+a1*g,a2*y+a3*w+a4*u+a5*s,a2*r+a3*q+a4*p+a5*o,a2*n+a3*m+a4*l+a5*k,a2*j+a3*i+a4*h+a5*g)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bI))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
z=b.e
if(!$.r.$2(z,this.e))return!1
z=b.f
if(!$.r.$2(z,this.f))return!1
z=b.r
if(!$.r.$2(z,this.r))return!1
z=b.x
if(!$.r.$2(z,this.x))return!1
z=b.y
if(!$.r.$2(z,this.y))return!1
z=b.z
if(!$.r.$2(z,this.z))return!1
z=b.Q
if(!$.r.$2(z,this.Q))return!1
z=b.ch
if(!$.r.$2(z,this.ch))return!1
z=b.cx
if(!$.r.$2(z,this.cx))return!1
z=b.cy
if(!$.r.$2(z,this.cy))return!1
z=b.db
if(!$.r.$2(z,this.db))return!1
z=b.dx
if(!$.r.$2(z,this.dx))return!1
return!0},
i:function(a){return this.N()},
d6:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=[P.w]
y=V.cq(H.b([this.a,this.e,this.y,this.cx],z),b,c)
x=V.cq(H.b([this.b,this.f,this.z,this.cy],z),b,c)
w=V.cq(H.b([this.c,this.r,this.Q,this.db],z),b,c)
v=V.cq(H.b([this.d,this.x,this.ch,this.dx],z),b,c)
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
N:function(){return this.d6("",3,0)},
B:function(a){return this.d6(a,3,0)},
n:{
c5:function(){var z=$.eg
if(z==null){z=V.ay(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.eg=z}return z},
ay:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)}}},
a9:{"^":"a;a,b",
H:function(a,b){return new V.a9(this.a-b.a,this.b-b.b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a9))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"},
n:{
aN:function(){var z=$.eo
if(z==null){z=new V.a9(0,0)
$.eo=z}return z}}},
bJ:{"^":"a;a,b,c",
H:function(a,b){var z,y,x,w
z=b.a
y=b.b
x=this.c
w=b.c
if(typeof x!=="number")return x.H()
if(typeof w!=="number")return H.u(w)
return new V.bJ(this.a-z,this.b-y,x-w)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bJ))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}},
eq:{"^":"a;a,b,c,d",
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eq))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+", "+V.L(this.d,3,0)+"]"}},
et:{"^":"a;a,b,c,d",
ga2:function(){var z,y
z=this.c
y=this.d
if(z>y)return y
else return z},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.et))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
z=b.d
if(!$.r.$2(z,this.d))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+", "+V.L(this.d,3,0)+"]"},
n:{
eu:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.et(a,b,c,d)}}},
O:{"^":"a;a,b",
ht:[function(a){return Math.sqrt(this.I(this))},"$0","gl",1,0,14],
I:function(a){var z,y,x,w
z=this.a
y=a.a
if(typeof z!=="number")return z.t()
if(typeof y!=="number")return H.u(y)
x=this.b
w=a.b
if(typeof x!=="number")return x.t()
if(typeof w!=="number")return H.u(w)
return z*y+x*w},
t:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.t()
y=this.b
if(typeof y!=="number")return y.t()
return new V.O(z*b,y*b)},
D:function(a,b){var z,y
if($.r.$2(b,0)){z=$.f2
if(z==null){z=new V.O(0,0)
$.f2=z}return z}z=this.a
if(typeof z!=="number")return z.D()
y=this.b
if(typeof y!=="number")return y.D()
return new V.O(z/b,y/b)},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}},
a7:{"^":"a;a,b,c",
ht:[function(a){return Math.sqrt(this.I(this))},"$0","gl",1,0,14],
I:function(a){var z,y
z=this.c
y=a.c
if(typeof z!=="number")return z.t()
if(typeof y!=="number")return H.u(y)
return this.a*a.a+this.b*a.b+z*y},
aS:function(a){var z,y,x,w,v,u
z=this.b
y=a.c
if(typeof y!=="number")return H.u(y)
x=this.c
w=a.b
if(typeof x!=="number")return x.t()
v=a.a
u=this.a
return new V.a7(z*y-x*w,x*v-u*y,u*w-z*v)},
G:function(a,b){var z,y
z=this.c
y=b.c
if(typeof z!=="number")return z.G()
if(typeof y!=="number")return H.u(y)
return new V.a7(this.a+b.a,this.b+b.b,z+y)},
L:function(a){var z=this.c
if(typeof z!=="number")return z.L()
return new V.a7(-this.a,-this.b,-z)},
D:function(a,b){var z
if($.r.$2(b,0))return V.bL()
z=this.c
if(typeof z!=="number")return z.D()
return new V.a7(this.a/b,this.b/b,z/b)},
df:function(){if(!$.r.$2(0,this.a))return!1
if(!$.r.$2(0,this.b))return!1
if(!$.r.$2(0,this.c))return!1
return!0},
u:function(a,b){var z
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
z=b.a
if(!$.r.$2(z,this.a))return!1
z=b.b
if(!$.r.$2(z,this.b))return!1
z=b.c
if(!$.r.$2(z,this.c))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"},
n:{
bL:function(){var z=$.f5
if(z==null){z=new V.a7(0,0,0)
$.f5=z}return z}}}}],["","",,U,{"^":"",hq:{"^":"dI;0a,0b,0c,0d,0e,0f,0r,0x,0y",
bo:function(a){var z=V.mK(a,this.c,this.b)
return z},
gw:function(){var z=this.y
if(z==null){z=D.H()
this.y=z}return z},
P:function(a){var z=this.y
if(!(z==null))z.F(a)},
sc8:function(a,b){},
sbX:function(a){var z,y
z=this.b
if(!$.r.$2(z,a)){y=this.b
this.b=a
if(a<this.c){this.c=a
this.d=a}else{z=this.d
if(a<z)this.d=this.bo(z)}z=new D.K("maximumLocation",y,this.b,this,[P.w])
z.b=!0
this.P(z)}},
sbZ:function(a){var z,y
z=this.c
if(!$.r.$2(z,a)){y=this.c
this.c=a
if(this.b<a){this.b=a
this.d=a}else{z=this.d
if(a>z)this.d=this.bo(z)}z=new D.K("minimumLocation",y,this.c,this,[P.w])
z.b=!0
this.P(z)}},
sa1:function(a,b){var z,y
b=this.bo(b)
z=this.d
if(!$.r.$2(z,b)){y=this.d
this.d=b
z=new D.K("location",y,b,this,[P.w])
z.b=!0
this.P(z)}},
sbY:function(a){var z,y,x
z=this.e
if(!$.r.$2(z,a)){y=this.e
this.e=a
z=this.f
x=-a
if(z<x)z=x
else if(z>a)z=a
this.f=z
z=new D.K("maximumVelocity",y,a,this,[P.w])
z.b=!0
this.P(z)}},
sS:function(a){var z,y,x
z=this.e
y=-z
if(a<y)a=y
else if(a>z)a=z
z=this.f
if(!$.r.$2(z,a)){x=this.f
this.f=a
z=new D.K("velocity",x,a,this,[P.w])
z.b=!0
this.P(z)}},
sbS:function(a){var z,y
if(a<0)a=0
else if(a>1)a=1
z=this.x
if(!$.r.$2(z,a)){y=this.x
this.x=a
z=new D.K("dampening",y,a,this,[P.w])
z.b=!0
this.P(z)}},
aE:function(a){var z,y,x,w
z=this.f
if($.r.$2(z,0)){z=this.r
z=!$.r.$2(z,0)}else z=!0
if(z){y=this.f+this.r*a
z=this.e
x=-z
if(y<x)y=x
else if(y>z)y=z
this.sa1(0,this.d+y*a)
z=this.x
if(!$.r.$2(z,0)){w=y*Math.pow(1-this.x,a)
if(y<0){if(w<y)w=y
else if(w>0)w=0}else if(w<0)w=0
else if(w>y)w=y
y=w}this.sS(y)}},
n:{
cG:function(){var z=new U.hq()
z.a=!0
z.b=1e12
z.c=-1e12
z.d=0
z.e=100
z.f=0
z.x=0
z.r=0
return z}}},dL:{"^":"a6;0a,0b",
gw:function(){var z=this.b
if(z==null){z=D.H()
this.b=z}return z},
aF:function(a,b){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dL))return!1
return J.S(this.a,b.a)},
i:function(a){return"Constant: "+this.a.B("          ")}},dZ:{"^":"a2;0e,0f,0r,0a,0b,0c,0d",
gw:function(){var z=this.e
if(z==null){z=D.H()
this.e=z}return z},
P:[function(a){var z
H.e(a,"$isv")
z=this.e
if(!(z==null))z.F(a)},function(){return this.P(null)},"a8","$1","$0","gas",0,2,2],
il:[function(a,b){var z,y,x,w,v,u,t,s
z=U.a6
H.m(b,"$isp",[z],"$asp")
for(y=b.length,x=this.gas(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=b[u]
if(t!=null){s=t.gw()
s.toString
H.j(x,w)
if(s.a==null)s.saj(H.b([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.e1(a,b,this,[z])
z.b=!0
this.P(z)},"$2","geS",8,0,13],
iB:[function(a,b){var z,y,x
z=U.a6
H.m(b,"$isp",[z],"$asp")
for(y=b.gR(b),x=this.gas();y.A();)y.gE().gw().U(0,x)
z=new D.e2(a,b,this,[z])
z.b=!0
this.P(z)},"$2","gf8",8,0,13],
aF:function(a,b){var z,y,x,w
z=this.r
y=a.e
if(typeof z!=="number")return z.O()
if(z<y){this.r=y
z=this.e
if(!(z==null))++z.d
for(z=this.a,z=new J.ao(z,z.length,0,[H.n(z,0)]),x=null;z.A();){y=z.d
if(y!=null){w=y.aF(a,b)
if(w!=null)x=x==null?w:w.t(0,x)}}this.f=x==null?V.c5():x
z=this.e
if(!(z==null))z.b_()}return this.f},
u:function(a,b){var z,y,x,w
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dZ))return!1
z=this.a.length
for(y=0;y<z;++y){x=this.a
if(y>=x.length)return H.i(x,y)
x=x[y]
w=b.a
if(y>=w.length)return H.i(w,y)
if(!J.S(x,w[y]))return!1}return!0},
i:function(a){return"Group"},
$asp:function(){return[U.a6]},
$asa2:function(){return[U.a6]},
$isa6:1},a6:{"^":"dI;"},k6:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy",
gw:function(){var z=this.cy
if(z==null){z=D.H()
this.cy=z}return z},
P:[function(a){var z
H.e(a,"$isv")
z=this.cy
if(!(z==null))z.F(a)},function(){return this.P(null)},"a8","$1","$0","gas",0,2,2],
aQ:function(a){if(this.a!=null)return!1
this.a=a
a.c.gd2().h(0,this.gbx())
this.a.c.gdg().h(0,this.gby())
this.a.c.gdA().h(0,this.gbz())
return!0},
eO:[function(a){H.e(a,"$isv")
if(!J.S(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},"$1","gbx",4,0,1],
eP:[function(a){var z,y,x,w,v,u,t
a=H.ab(H.e(a,"$isv"),"$isbk")
if(!this.y)return
if(this.x){z=a.d.H(0,a.y)
z=new V.O(z.a,z.b)
z=z.I(z)
y=this.r
if(typeof y!=="number")return H.u(y)
if(z<y)return
this.x=!1}if(this.d){z=a.c
y=a.d.H(0,a.y)
z=new V.O(y.a,y.b).t(0,2).D(0,z.ga2())
this.Q=z
y=this.b
z=z.a
if(typeof z!=="number")return z.t()
x=this.e
if(typeof x!=="number")return H.u(x)
y.sS(z*10*x)}else{z=a.c
y=a.d
x=y.H(0,a.y)
w=new V.O(x.a,x.b).t(0,2).D(0,z.ga2())
x=this.b
v=w.a
if(typeof v!=="number")return v.L()
u=this.e
if(typeof u!=="number")return H.u(u)
t=this.z
if(typeof t!=="number")return H.u(t)
x.sa1(0,-v*u+t)
this.b.sS(0)
y=y.H(0,a.z)
this.Q=new V.O(y.a,y.b).t(0,2).D(0,z.ga2())}this.a8()},"$1","gby",4,0,1],
eQ:[function(a){var z,y,x
H.e(a,"$isv")
if(!this.y)return
this.y=!1
if(this.x)return
z=this.Q
if(z.I(z)>0.0001){z=this.b
y=this.Q.a
if(typeof y!=="number")return y.t()
x=this.e
if(typeof x!=="number")return H.u(x)
z.sS(y*10*x)
this.a8()}},"$1","gbz",4,0,1],
aF:function(a,b){var z,y,x,w,v
z=this.ch
y=a.e
if(typeof z!=="number")return z.O()
if(z<y){this.ch=y
x=a.y
this.b.aE(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
this.cx=V.ay(w,-v,0,0,v,w,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$isa6:1},k7:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx",
gw:function(){var z=this.fx
if(z==null){z=D.H()
this.fx=z}return z},
P:[function(a){var z
H.e(a,"$isv")
z=this.fx
if(!(z==null))z.F(a)},function(){return this.P(null)},"a8","$1","$0","gas",0,2,2],
aQ:function(a){var z,y
if(this.a!=null)return!1
this.a=a
a.c.gd2().h(0,this.gbx())
this.a.c.gdg().h(0,this.gby())
this.a.c.gdA().h(0,this.gbz())
z=this.a.d
y=z.f
if(y==null){y=D.H()
z.f=y
z=y}else z=y
z.h(0,this.geM())
z=this.a.d
y=z.d
if(y==null){y=D.H()
z.d=y
z=y}else z=y
z.h(0,this.geN())
z=this.a.e
y=z.b
if(y==null){y=D.H()
z.b=y
z=y}else z=y
z.h(0,this.gfG())
z=this.a.e
y=z.d
if(y==null){y=D.H()
z.d=y
z=y}else z=y
z.h(0,this.gfF())
z=this.a.e
y=z.c
if(y==null){y=D.H()
z.c=y
z=y}else z=y
z.h(0,this.gfE())
return!0},
ac:function(a){var z,y
z=a.a
y=a.b
if(this.f){if(typeof z!=="number")return z.L()
z=-z}if(this.r){if(typeof y!=="number")return y.L()
y=-y}return new V.O(z,y)},
eO:[function(a){a=H.ab(H.e(a,"$isv"),"$isbk")
if(!J.S(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gbx",4,0,1],
eP:[function(a){var z,y,x,w,v,u,t
a=H.ab(H.e(a,"$isv"),"$isbk")
if(!this.cx)return
if(this.ch){z=a.d.H(0,a.y)
z=new V.O(z.a,z.b)
z=z.I(z)
y=this.Q
if(typeof y!=="number")return H.u(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.H(0,a.y)
z=this.ac(new V.O(y.a,y.b).t(0,2).D(0,z.ga2()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.L()
x=this.y
if(typeof x!=="number")return H.u(x)
y.sS(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.L()
y=this.x
if(typeof y!=="number")return H.u(y)
x.sS(-z*10*y)}else{z=a.c
y=a.d
x=y.H(0,a.y)
w=this.ac(new V.O(x.a,x.b).t(0,2).D(0,z.ga2()))
x=this.c
v=w.a
if(typeof v!=="number")return v.L()
u=this.y
if(typeof u!=="number")return H.u(u)
t=this.cy
if(typeof t!=="number")return H.u(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.L()
v=this.x
if(typeof v!=="number")return H.u(v)
x=this.db
if(typeof x!=="number")return H.u(x)
t.sa1(0,-u*v+x)
this.b.sS(0)
this.c.sS(0)
y=y.H(0,a.z)
this.dx=this.ac(new V.O(y.a,y.b).t(0,2).D(0,z.ga2()))}this.a8()},"$1","gby",4,0,1],
eQ:[function(a){var z,y,x
H.e(a,"$isv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.I(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.L()
x=this.y
if(typeof x!=="number")return H.u(x)
z.sS(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.L()
z=this.x
if(typeof z!=="number")return H.u(z)
x.sS(-y*10*z)
this.a8()}},"$1","gbz",4,0,1],
ii:[function(a){if(H.ab(H.e(a,"$isv"),"$ised").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},"$1","geM",4,0,1],
ij:[function(a){var z,y,x,w,v,u,t
a=H.ab(H.e(a,"$isv"),"$isbk")
if(!J.S(this.d,a.x.b))return
z=a.c
y=a.d
x=y.H(0,a.y)
w=this.ac(new V.O(x.a,x.b).t(0,2).D(0,z.ga2()))
x=this.c
v=w.a
if(typeof v!=="number")return v.L()
u=this.y
if(typeof u!=="number")return H.u(u)
t=this.cy
if(typeof t!=="number")return H.u(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.L()
v=this.x
if(typeof v!=="number")return H.u(v)
x=this.db
if(typeof x!=="number")return H.u(x)
t.sa1(0,-u*v+x)
this.b.sS(0)
this.c.sS(0)
y=y.H(0,a.z)
this.dx=this.ac(new V.O(y.a,y.b).t(0,2).D(0,z.ga2()))
this.a8()},"$1","geN",4,0,1],
iI:[function(a){H.e(a,"$isv")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},"$1","gfG",4,0,1],
iH:[function(a){var z,y,x,w,v,u,t
a=H.ab(H.e(a,"$isv"),"$iseK")
if(!this.cx)return
if(this.ch){z=a.d.H(0,a.y)
z=new V.O(z.a,z.b)
z=z.I(z)
y=this.Q
if(typeof y!=="number")return H.u(y)
if(z<y)return
this.ch=!1}if(this.e){z=a.c
y=a.d.H(0,a.y)
z=this.ac(new V.O(y.a,y.b).t(0,2).D(0,z.ga2()))
this.dx=z
y=this.c
z=z.a
if(typeof z!=="number")return z.L()
x=this.y
if(typeof x!=="number")return H.u(x)
y.sS(-z*10*x)
x=this.b
z=this.dx.b
if(typeof z!=="number")return z.L()
y=this.x
if(typeof y!=="number")return H.u(y)
x.sS(-z*10*y)}else{z=a.c
y=a.d
x=y.H(0,a.y)
w=this.ac(new V.O(x.a,x.b).t(0,2).D(0,z.ga2()))
x=this.c
v=w.a
if(typeof v!=="number")return v.L()
u=this.y
if(typeof u!=="number")return H.u(u)
t=this.cy
if(typeof t!=="number")return H.u(t)
x.sa1(0,-v*u+t)
t=this.b
u=w.b
if(typeof u!=="number")return u.L()
v=this.x
if(typeof v!=="number")return H.u(v)
x=this.db
if(typeof x!=="number")return H.u(x)
t.sa1(0,-u*v+x)
this.b.sS(0)
this.c.sS(0)
y=y.H(0,a.z)
this.dx=this.ac(new V.O(y.a,y.b).t(0,2).D(0,z.ga2()))}this.a8()},"$1","gfF",4,0,1],
iG:[function(a){var z,y,x
H.e(a,"$isv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
z=this.dx
if(z.I(z)>0.0001){z=this.c
y=this.dx.a
if(typeof y!=="number")return y.L()
x=this.y
if(typeof x!=="number")return H.u(x)
z.sS(-y*10*x)
x=this.b
y=this.dx.b
if(typeof y!=="number")return y.L()
z=this.x
if(typeof z!=="number")return H.u(z)
x.sS(-y*10*z)
this.a8()}},"$1","gfE",4,0,1],
aF:function(a,b){var z,y,x,w,v
z=this.dy
y=a.e
if(typeof z!=="number")return z.O()
if(z<y){this.dy=y
x=a.y
this.c.aE(x)
this.b.aE(x)
z=this.b.d
w=Math.cos(z)
v=Math.sin(z)
z=V.ay(1,0,0,0,0,w,-v,0,0,v,w,0,0,0,0,1)
y=this.c.d
w=Math.cos(y)
v=Math.sin(y)
this.fr=z.t(0,V.ay(w,0,-v,0,0,1,0,0,v,0,w,0,0,0,0,1))}return this.fr},
$isa6:1},k8:{"^":"a;0a,0b,0c,0d,0e,0f,0r",
gw:function(){var z=this.r
if(z==null){z=D.H()
this.r=z}return z},
P:function(a){var z=this.r
if(!(z==null))z.F(a)},
aQ:function(a){var z,y,x
if(this.a!=null)return!1
this.a=a
z=a.c
y=z.e
if(y==null){y=D.H()
z.e=y
z=y}else z=y
y=this.geR()
z.h(0,y)
z=this.a.d
x=z.e
if(x==null){x=D.H()
z.e=x
z=x}else z=x
z.h(0,y)
return!0},
ik:[function(a){var z,y,x,w
H.e(a,"$isv")
if(!J.S(this.b,this.a.b.c))return
H.ab(a,"$iscR")
z=this.d
y=a.x.b
x=this.c
if(typeof y!=="number")return y.t()
w=z+y*x
if(z!==w){this.d=w
z=new D.K("zoom",z,w,this,[P.w])
z.b=!0
this.P(z)}},"$1","geR",4,0,1],
aF:function(a,b){var z,y,x
z=this.e
y=a.e
if(z<y){this.e=y
x=Math.pow(10,this.d)
this.f=V.ay(x,0,0,0,0,x,0,0,0,0,x,0,0,0,0,1)}return this.f},
$isa6:1}}],["","",,M,{"^":"",hK:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x",
seo:function(a,b){this.d=H.m(b,"$isa2",[E.aj],"$asa2")},
aI:[function(a){var z
H.e(a,"$isv")
z=this.x
if(!(z==null))z.F(a)},function(){return this.aI(null)},"ig","$1","$0","gap",0,2,2],
io:[function(a,b){var z,y,x,w,v,u,t,s
z=E.aj
H.m(b,"$isp",[z],"$asp")
for(y=b.length,x=this.gap(),w={func:1,ret:-1,args:[D.v]},v=[w],u=0;u<b.length;b.length===y||(0,H.C)(b),++u){t=b[u]
if(t!=null){if(t.ga7()==null){s=new D.bD()
s.saj(null)
s.sb6(null)
s.c=null
s.d=0
t.sa7(s)}s=t.ga7()
s.toString
H.j(x,w)
if(s.a==null)s.saj(H.b([],v))
s=s.a;(s&&C.a).h(s,x)}}z=new D.e1(a,b,this,[z])
z.b=!0
this.aI(z)},"$2","geU",8,0,8],
ip:[function(a,b){var z,y,x
z=E.aj
H.m(b,"$isp",[z],"$asp")
for(y=b.gR(b),x=this.gap();y.A();)y.gE().gw().U(0,x)
z=new D.e2(a,b,this,[z])
z.b=!0
this.aI(z)},"$2","geV",8,0,8],
gw:function(){var z=this.x
if(z==null){z=D.H()
this.x=z}return z},
aC:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
a.dr(this.c)
z=this.b
z.toString
y=a.a
C.c.fR(y,36160,null)
C.c.d3(y,2884)
C.c.d3(y,2929)
C.c.h8(y,513)
x=y.drawingBufferWidth
w=y.drawingBufferHeight
v=z.r
u=v.a
if(typeof x!=="number")return H.u(x)
t=C.f.ab(u*x)
u=v.b
if(typeof w!=="number")return H.u(w)
s=C.f.ab(u*w)
u=C.f.ab(v.c*x)
a.c=u
v=C.f.ab(v.d*w)
a.d=v
C.c.ic(y,t,s,u,v)
C.c.fV(y,z.c)
z=z.a
C.c.fU(y,z.a,z.b,z.c,z.d)
C.c.fT(y,16640)
z=this.a
y=a.c
v=a.d
u=z.c
r=z.d
q=z.e
p=q-r
o=1/Math.tan(u*0.5)
n=V.ay(-o/(y/v),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
z.a
a.cy.dq(n)
y=$.en
if(y==null){y=$.ep
if(y==null){y=new V.bJ(0,0,0)
$.ep=y}v=$.f4
if(v==null){v=new V.a7(0,1,0)
$.f4=v}u=$.f3
if(u==null){u=new V.a7(0,0,-1)
$.f3=u}m=u.D(0,Math.sqrt(u.I(u)))
v=v.aS(m)
l=v.D(0,Math.sqrt(v.I(v)))
k=m.aS(l)
j=new V.a7(y.a,y.b,y.c)
i=l.L(0).I(j)
h=k.L(0).I(j)
g=m.L(0).I(j)
y=V.ay(l.a,k.a,m.a,i,l.b,k.b,m.b,h,l.c,k.c,m.c,g,0,0,0,1)
$.en=y
f=y}else f=y
z=z.b
if(z!=null){e=z.a
if(e!=null)f=e.t(0,f)}a.db.dq(f)
for(z=this.d.a,z=new J.ao(z,z.length,0,[H.n(z,0)]);z.A();)z.d.aE(a)
for(z=this.d.a,z=new J.ao(z,z.length,0,[H.n(z,0)]);z.A();)z.d.aC(a)
this.a.toString
a.cy.c0()
a.db.c0()
this.b.toString
a.dn()},
$isn0:1}}],["","",,A,{"^":"",dy:{"^":"a;a,b,c"},hc:{"^":"a;a",
p:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b===b)return w}return},
he:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
C.c.d4(w.a,w.c)}},
h9:function(){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
C.c.d1(w.a,w.c)}}},cV:{"^":"cA;",
e5:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
cv:function(a,b){var z,y,x
z=this.a
y=C.c.h2(z,b)
C.c.dW(z,y,a)
C.c.fW(z,y)
if(!H.dj(C.c.dO(z,y,35713))){x=C.c.dN(z,y)
C.c.h5(z,y)
throw H.d(P.a1("Error compiling shader '"+H.f(y)+"': "+H.f(x)))}return y},
fq:function(){var z,y,x,w,v,u
z=H.b([],[A.dy])
y=this.a
x=H.U(C.c.bi(y,this.r,35721))
if(typeof x!=="number")return H.u(x)
w=0
for(;w<x;++w){v=C.c.dG(y,this.r,w)
u=C.c.dI(y,this.r,v.name)
C.a.h(z,new A.dy(y,v.name,u))}this.x=new A.hc(z)},
ft:function(){var z,y,x,w,v,u
z=H.b([],[A.a5])
y=this.a
x=H.U(C.c.bi(y,this.r,35718))
if(typeof x!=="number")return H.u(x)
w=0
for(;w<x;++w){v=C.c.dH(y,this.r,w)
u=C.c.dP(y,this.r,v.name)
C.a.h(z,this.h3(v.type,v.size,v.name,u))}this.y=new A.jQ(z)},
ar:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.jI(z,y,b,c)
else return A.d3(z,y,b,a,c)},
er:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.eX(z,y,b,c)
else return A.d3(z,y,b,a,c)},
es:function(a,b,c){var z,y
z=this.a
y=this.r
if(a===1)return new A.jU(z,y,b,c)
else return A.d3(z,y,b,a,c)},
b8:function(a,b){return new P.fe(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
h3:function(a,b,c,d){switch(a){case 5120:return this.ar(b,c,d)
case 5121:return this.ar(b,c,d)
case 5122:return this.ar(b,c,d)
case 5123:return this.ar(b,c,d)
case 5124:return this.ar(b,c,d)
case 5125:return this.ar(b,c,d)
case 5126:return new A.eW(this.a,this.r,c,d)
case 35664:return new A.jK(this.a,this.r,c,d)
case 35665:return new A.jM(this.a,this.r,c,d)
case 35666:return new A.jO(this.a,this.r,c,d)
case 35667:return new A.jL(this.a,this.r,c,d)
case 35668:return new A.jN(this.a,this.r,c,d)
case 35669:return new A.jP(this.a,this.r,c,d)
case 35674:return new A.jS(this.a,this.r,c,d)
case 35675:return new A.jT(this.a,this.r,c,d)
case 35676:return new A.ce(this.a,this.r,c,d)
case 35678:return this.er(b,c,d)
case 35680:return this.es(b,c,d)
case 35670:throw H.d(this.b8("BOOL",c))
case 35671:throw H.d(this.b8("BOOL_VEC2",c))
case 35672:throw H.d(this.b8("BOOL_VEC3",c))
case 35673:throw H.d(this.b8("BOOL_VEC4",c))
default:throw H.d(P.a1("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}},a5:{"^":"a;"},jQ:{"^":"a;a",
p:function(a,b){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(w.c===b)return w}return},
i:function(a){return this.N()},
hl:function(a){var z,y,x,w
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.C)(z),++w)x+=z[w].i(0)+a
return x},
N:function(){return this.hl("\n")}},jI:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform1i: "+H.f(this.c)}},jL:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform2i: "+H.f(this.c)}},jN:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform3i: "+H.f(this.c)}},jP:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform4i: "+H.f(this.c)}},jJ:{"^":"a5;0e,0f,a,b,c,d",
sfI:function(a){this.e=H.m(a,"$isc",[P.l],"$asc")},
i:function(a){return"Uniform1iv: "+H.f(this.c)},
n:{
d3:function(a,b,c,d,e){var z=new A.jJ(a,b,c,e)
z.f=d
z.sfI(P.ij(d,0,!1,P.l))
return z}}},eW:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform1f: "+H.f(this.c)}},jK:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform2f: "+H.f(this.c)}},jM:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform3f: "+H.f(this.c)}},jO:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform4f: "+H.f(this.c)}},jS:{"^":"a5;a,b,c,d",
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}},jT:{"^":"a5;a,b,c,d",
i:function(a){return"UniformMat3: "+H.f(this.c)}},ce:{"^":"a5;a,b,c,d",
bl:function(a){var z=new Float32Array(H.cm(H.m(a,"$isc",[P.w],"$asc")))
C.c.ia(this.a,this.d,!1,z)},
i:function(a){return"UniformMat4: "+H.f(this.c)}},eX:{"^":"a5;a,b,c,d",
i:function(a){return"UniformSampler2D: "+H.f(this.c)}},jU:{"^":"a5;a,b,c,d",
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}}],["","",,F,{"^":"",
m9:function(a,b,c){var z={}
z.a=b
z.a=new F.ma()
return F.mH(c,a,new F.mb(z),null)},
mH:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.j(c,{func:1,ret:-1,args:[F.b0,P.w,P.w]})
if(a<1)return
if(b<1)return
z=new F.ey()
y=new F.kh(z)
y.b=!1
x=[F.b0]
y.sfJ(H.b([],x))
z.a=y
y=new F.jd(z)
y.sbC(H.b([],[F.c6]))
z.b=y
y=new F.jc(z)
y.seI(H.b([],[F.bj]))
z.c=y
y=new F.jb(z)
y.sex(H.b([],[F.a3]))
z.d=y
z.e=null
w=H.b([],x)
for(v=0;v<=b;++v){u=v/b
y=z.a
if(u<0)x=0
else x=u>1?1:u
y.toString
t=F.d7(null,null,new V.bU(x,0,0,1),null,null,new V.a9(u,1),null,null,0)
y.h(0,t)
c.$3(t,u,0)
C.a.h(w,t.bR(d))}for(v=1;v<=a;++v){s=v/a
for(y=s>1,x=s<0,r=1-s,q=0;q<=b;++q){u=q/b
p=z.a
if(u<0)o=0
else o=u>1?1:u
if(x)n=0
else n=y?1:s
if(x)m=0
else m=y?1:s
p.toString
t=F.d7(null,null,new V.bU(o,n,m,1),null,null,new V.a9(u,r),null,null,0)
p.h(0,t)
c.$3(t,u,s)
C.a.h(w,t.bR(d))}}z.d.fL(a+1,b+1,w)
return z},
ma:{"^":"k:42;",
$2:function(a,b){return 0}},
mb:{"^":"k:43;a",
$3:function(a,b,c){var z,y,x,w
z=b*2-1
y=c*2-1
x=new V.bJ(z,y,this.a.a.$2(b,c))
if(!J.S(a.f,x)){a.f=x
x=a.a
if(x!=null)x.a0()}x=new V.a7(z,y,1)
x=x.D(0,Math.sqrt(x.I(x)))
if(!J.S(a.z,x)){a.z=x
x=a.a
if(x!=null)x.a0()}x=1-b
w=1-c
w=new V.eq(b*c,2+x*c,4+b*w,6+x*w)
if(!J.S(a.cx,w)){a.cx=w
x=a.a
if(x!=null)x.a0()}}},
a3:{"^":"a;0a,0b,0c,0d,0e",
gha:function(){return this.a==null||this.b==null||this.c==null},
ek:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.r
z=this.b
x=z==null?null:z.r
z=this.c
w=z==null?null:z.r
v=V.bL()
if(y!=null)v=v.G(0,y)
if(x!=null)v=v.G(0,x)
if(w!=null)v=v.G(0,w)
if(v.df())return
return v.D(0,Math.sqrt(v.I(v)))},
en:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.f
z=this.b
x=z==null?null:z.f
z=this.c
w=z==null?null:z.f
if(y==null||x==null||w==null)return
z=x.H(0,y)
z=new V.a7(z.a,z.b,z.c)
v=z.D(0,Math.sqrt(z.I(z)))
z=w.H(0,y)
z=new V.a7(z.a,z.b,z.c)
z=v.aS(z.D(0,Math.sqrt(z.I(z))))
return z.D(0,Math.sqrt(z.I(z)))},
bN:function(){if(this.d!=null)return!0
var z=this.ek()
if(z==null){z=this.en()
if(z==null)return!1}this.d=z
this.a.a.a0()
return!0},
ej:function(){var z,y,x,w,v
z=this.a
y=z==null?null:z.x
z=this.b
x=z==null?null:z.x
z=this.c
w=z==null?null:z.x
v=V.bL()
if(y!=null)v=v.G(0,y)
if(x!=null)v=v.G(0,x)
if(w!=null)v=v.G(0,w)
if(v.df())return
return v.D(0,Math.sqrt(v.I(v)))},
em:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k
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
if($.r.$2(n,0)){z=r.H(0,u)
z=new V.a7(z.a,z.b,z.c)
m=z.D(0,Math.sqrt(z.I(z)))
if(o.a-p.a<0)m=m.L(0)}else{l=(z-q.b)/n
z=r.H(0,u)
y=z.c
if(typeof y!=="number")return y.t()
w=u.a
v=u.b
t=u.c
if(typeof t!=="number")return H.u(t)
t=new V.bJ(z.a*l+w,z.b*l+v,y*l+t).H(0,x)
t=new V.a7(t.a,t.b,t.c)
m=t.D(0,Math.sqrt(t.I(t)))
o=o.a
p=p.a
if((o-p)*l+p-q.a<0)m=m.L(0)}z=this.d
if(z!=null){k=z.D(0,Math.sqrt(z.I(z)))
z=k.aS(m)
z=z.D(0,Math.sqrt(z.I(z))).aS(k)
m=z.D(0,Math.sqrt(z.I(z)))}return m},
bL:function(){if(this.e!=null)return!0
var z=this.ej()
if(z==null){z=this.em()
if(z==null)return!1}this.e=z
this.a.a.a0()
return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
B:function(a){var z,y
if(this.gha())return a+"disposed"
z=a+C.b.aa(J.a8(this.a.e),0)+", "+C.b.aa(J.a8(this.b.e),0)+", "+C.b.aa(J.a8(this.c.e),0)+" {"
y=this.d
z=y!=null?z+(y.i(0)+", "):z+"-, "
y=this.e
return y!=null?z+(y.i(0)+"}"):z+"-}"},
N:function(){return this.B("")},
n:{
bX:function(a,b,c){var z,y,x
z=new F.a3()
y=a.a
if(y==null)H.M(P.a1("May not create a face with a first vertex which is not attached to a shape."))
x=b.a
if(y==null?x==null:y===x){x=c.a
x=y==null?x!=null:y!==x
y=x}else y=!0
if(y)H.M(P.a1("May not create a face with vertices attached to different shapes."))
z.a=a
C.a.h(a.d.b,z)
z.b=b
C.a.h(b.d.c,z)
z.c=c
C.a.h(c.d.d,z)
C.a.h(z.a.a.d.b,z)
z.a.a.a0()
return z}}},
bj:{"^":"a;0a,0b",
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
B:function(a){var z=this.a
if(z==null||this.b==null)return a+"disposed"
return a+C.b.aa(J.a8(z.e),0)+", "+C.b.aa(J.a8(this.b.e),0)},
N:function(){return this.B("")}},
c6:{"^":"a;"},
ey:{"^":"a;0a,0b,0c,0d,0e",
gw:function(){var z=this.e
if(z==null){z=D.H()
this.e=z}return z},
fS:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=this.a.c.length
y=b.a
x=(y&$.$get$aD().a)!==0?1:0
if((y&$.$get$aC().a)!==0)++x
if((y&$.$get$aB().a)!==0)++x
if((y&$.$get$aE().a)!==0)++x
if((y&$.$get$b2().a)!==0)++x
if((y&$.$get$bm().a)!==0)++x
if((y&$.$get$bn().a)!==0)++x
if((y&$.$get$aF().a)!==0)++x
if((y&$.$get$b1().a)!==0)++x
w=b.gcd(b)
v=w*4
y=new Array(z*w)
y.fixed$length=Array
u=P.w
t=H.b(y,[u])
y=new Array(x)
y.fixed$length=Array
s=H.b(y,[Z.dD])
for(r=0,q=0;q<x;++q){p=b.fO(q)
o=p.gcd(p)
C.a.m(s,q,new Z.dD(p,o,r*4,v,0))
for(n=0;n<z;++n){y=this.a.c
if(n>=y.length)return H.i(y,n)
m=y[n].hv(p)
l=r+n*w
for(k=0;k<m.length;++k){C.a.m(t,l,m[k]);++l}}r+=o}H.m(t,"$isc",[u],"$asc")
y=a.a
j=y.createBuffer()
C.c.ae(y,34962,j)
C.c.cZ(y,34962,new Float32Array(H.cm(t)),35044)
C.c.ae(y,34962,null)
i=new Z.dE(new Z.f9(34962,j),s,b)
i.seG(H.b([],[Z.bZ]))
this.b.b
if(this.c.b.length!==0){u=P.l
h=H.b([],[u])
for(q=0;g=this.c.b,q<g.length;++q){g=g[q].a
g.a.a.aw()
C.a.h(h,g.e)
g=this.c.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.aw()
C.a.h(h,g.e)}f=Z.fa(y,34963,H.m(h,"$isc",[u],"$asc"))
C.a.h(i.b,new Z.bZ(1,h.length,f))}if(this.d.b.length!==0){u=P.l
h=H.b([],[u])
for(q=0;g=this.d.b,q<g.length;++q){g=g[q].a
g.a.a.aw()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].b
g.a.a.aw()
C.a.h(h,g.e)
g=this.d.b
if(q>=g.length)return H.i(g,q)
g=g[q].c
g.a.a.aw()
C.a.h(h,g.e)}f=Z.fa(y,34963,H.m(h,"$isc",[u],"$asc"))
C.a.h(i.b,new Z.bZ(4,h.length,f))}return i},
i:function(a){var z=H.b([],[P.h])
if(this.a.c.length!==0){C.a.h(z,"Vertices:")
C.a.h(z,this.a.B("   "))}this.b.b
if(this.c.b.length!==0){C.a.h(z,"Lines:")
C.a.h(z,this.c.B("   "))}if(this.d.b.length!==0){C.a.h(z,"Faces:")
C.a.h(z,this.d.B("   "))}return C.a.k(z,"\n")},
a4:function(a){var z=this.e
if(!(z==null))z.F(a)},
a0:function(){return this.a4(null)},
$isn2:1},
jb:{"^":"a;a,0b",
sex:function(a){this.b=H.m(a,"$isc",[F.a3],"$asc")},
fL:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
H.m(c,"$isc",[F.b0],"$asc")
z=H.b([],[F.a3])
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
C.a.h(z,F.bX(q,p,n))
y.a.h(0,q)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bX(q,n,m))}else{r.h(0,p)
y.a.h(0,n)
y.a.h(0,m)
C.a.h(z,F.bX(p,n,m))
y.a.h(0,p)
y.a.h(0,m)
y.a.h(0,q)
C.a.h(z,F.bX(p,m,q))}t=!t}v=!v}return z},
gl:function(a){return this.b.length},
hR:function(){var z,y,x
for(z=this.b.length-1;z>=0;--z){y=this.b
if(z>=y.length)return H.i(y,z)
x=y[z]
y=x.a
if(!(y==null||x.b==null||x.c==null)){C.a.U(y.a.d.b,x)
y=x.a.a.e
if(!(y==null))y.F(null)}y=x.a
if(y!=null){C.a.U(y.d.b,x)
x.a=null}y=x.b
if(y!=null){C.a.U(y.d.c,x)
x.b=null}y=x.c
if(y!=null){C.a.U(y.d.d,x)
x.c=null}}C.a.sl(this.b,0)},
bO:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.C)(z),++w)if(!z[w].bN())x=!1
return x},
bM:function(){var z,y,x,w
for(z=this.b,y=z.length,x=!0,w=0;w<z.length;z.length===y||(0,H.C)(z),++w)if(!z[w].bL())x=!1
return x},
i:function(a){return this.N()},
B:function(a){var z,y,x,w
z=H.b([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].B(a))
return C.a.k(z,"\n")},
N:function(){return this.B("")}},
jc:{"^":"a;a,0b",
seI:function(a){this.b=H.m(a,"$isc",[F.bj],"$asc")},
gl:function(a){return this.b.length},
i:function(a){return this.N()},
B:function(a){var z,y,x,w
z=H.b([],[P.h])
y=this.b.length
for(x=0;x<y;++x){w=this.b
if(x>=w.length)return H.i(w,x)
C.a.h(z,w[x].B(a+(""+x+". ")))}return C.a.k(z,"\n")},
N:function(){return this.B("")}},
jd:{"^":"a;a,0b",
sbC:function(a){this.b=H.m(a,"$isc",[F.c6],"$asc")},
gl:function(a){return 0},
i:function(a){return this.N()},
B:function(a){var z,y,x
z=H.b([],[P.h])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.i(y,x)
C.a.h(z,y[x].B(a))}return C.a.k(z,"\n")},
N:function(){return this.B("")}},
b0:{"^":"a;0a,0b,0c,0d,0e,0f,0r,0x,0y,0z,0Q,0ch,0cx",
bR:function(a){var z,y,x,w,v,u,t
z=this.f
y=this.r
x=this.x
w=this.y
v=this.z
u=this.Q
t=this.ch
return F.d7(this.cx,x,u,z,y,w,v,a,t)},
fY:function(){return this.bR(null)},
hv:function(a){var z,y
if(a.u(0,$.$get$aD())){z=this.f
y=[P.w]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$aC())){z=this.r
y=[P.w]
if(z==null)return H.b([0,1,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$aB())){z=this.x
y=[P.w]
if(z==null)return H.b([0,0,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$aE())){z=this.y
y=[P.w]
if(z==null)return H.b([0,0],y)
else return H.b([z.a,z.b],y)}else if(a.u(0,$.$get$b2())){z=this.z
y=[P.w]
if(z==null)return H.b([0,0,0],y)
else return H.b([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$bm())){z=this.Q
y=[P.w]
if(z==null)return H.b([1,1,1],y)
else return H.b([z.a,z.b,z.c],y)}else if(a.u(0,$.$get$bn())){z=this.Q
y=[P.w]
if(z==null)return H.b([1,1,1,1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else if(a.u(0,$.$get$aF()))return H.b([this.ch],[P.w])
else if(a.u(0,$.$get$b1())){z=this.cx
y=[P.w]
if(z==null)return H.b([-1,-1,-1,-1],y)
else return H.b([z.a,z.b,z.c,z.d],y)}else return H.b([],[P.w])},
bN:function(){var z,y
z={}
if(this.r!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bL()
this.d.M(0,new F.ko(z))
z=z.a
this.r=z.D(0,Math.sqrt(z.I(z)))
z=this.a
if(z!=null){z.a0()
z=this.a.e
if(!(z==null))z.b_()}return!0},
bL:function(){var z,y
z={}
if(this.x!=null)return!0
y=this.a
if(y!=null){y=y.e
if(!(y==null))++y.d}z.a=V.bL()
this.d.M(0,new F.kn(z))
z=z.a
this.x=z.D(0,Math.sqrt(z.I(z)))
z=this.a
if(z!=null){z.a0()
z=this.a.e
if(!(z==null))z.b_()}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
B:function(a){var z,y,x
z=H.b([],[P.h])
C.a.h(z,C.b.aa(J.a8(this.e),0))
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
C.a.h(z,V.L(this.ch,3,0))
y=this.cx
if(y!=null)C.a.h(z,y.i(0))
else C.a.h(z,"-")
x=C.a.k(z,", ")
return a+"{"+x+"}"},
N:function(){return this.B("")},
n:{
d7:function(a,b,c,d,e,f,g,h,i){var z,y,x
z=new F.b0()
y=new F.km(z)
y.sbC(H.b([],[F.c6]))
z.b=y
y=new F.kl(z)
x=[F.bj]
y.seJ(H.b([],x))
y.seK(H.b([],x))
z.c=y
y=new F.ki(z)
x=[F.a3]
y.sey(H.b([],x))
y.sez(H.b([],x))
y.seA(H.b([],x))
z.d=y
h=$.$get$f6()
z.e=0
y=$.$get$aD()
x=h.a
z.f=(x&y.a)!==0?d:null
z.r=(x&$.$get$aC().a)!==0?e:null
z.x=(x&$.$get$aB().a)!==0?b:null
z.y=(x&$.$get$aE().a)!==0?f:null
z.z=(x&$.$get$b2().a)!==0?g:null
z.Q=(x&$.$get$f7().a)!==0?c:null
z.ch=(x&$.$get$aF().a)!==0?i:0
z.cx=(x&$.$get$b1().a)!==0?a:null
return z}}},
ko:{"^":"k:5;a",
$1:function(a){var z,y
H.e(a,"$isa3")
z=a==null?null:a.d
if(z!=null){y=this.a
y.a=y.a.G(0,z)}}},
kn:{"^":"k:5;a",
$1:function(a){var z,y
H.e(a,"$isa3")
z=a==null?null:a.e
if(z!=null){y=this.a
y.a=y.a.G(0,z)}}},
kh:{"^":"a;a,0b,0c",
sfJ:function(a){this.c=H.m(a,"$isc",[F.b0],"$asc")},
aw:function(){},
h:function(a,b){var z,y
z=b.a
if(z!=null){if(z===this.a)return!1
throw H.d(P.a1("May not add a vertex already attached to another shape to this shape."))}z=this.c
b.e=z.length
y=this.a
b.a=y
C.a.h(z,b)
y.a0()
return!0},
gl:function(a){return this.c.length},
bO:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)z[x].bN()
return!0},
bM:function(){var z,y,x
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)z[x].bL()
return!0},
i:function(a){return this.N()},
B:function(a){var z,y,x,w
this.aw()
z=H.b([],[P.h])
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].B(a))
return C.a.k(z,"\n")},
N:function(){return this.B("")}},
ki:{"^":"a;a,0b,0c,0d",
sey:function(a){this.b=H.m(a,"$isc",[F.a3],"$asc")},
sez:function(a){this.c=H.m(a,"$isc",[F.a3],"$asc")},
seA:function(a){this.d=H.m(a,"$isc",[F.a3],"$asc")},
gl:function(a){return this.b.length+this.c.length+this.d.length},
M:function(a,b){H.j(b,{func:1,ret:-1,args:[F.a3]})
C.a.M(this.b,b)
C.a.M(this.c,new F.kj(this,b))
C.a.M(this.d,new F.kk(this,b))},
i:function(a){return this.N()},
B:function(a){var z,y,x,w
z=H.b([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.d,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].B(a))
return C.a.k(z,"\n")},
N:function(){return this.B("")}},
kj:{"^":"k:5;a,b",
$1:function(a){H.e(a,"$isa3")
if(!J.S(a.a,this.a))this.b.$1(a)}},
kk:{"^":"k:5;a,b",
$1:function(a){var z
H.e(a,"$isa3")
z=this.a
if(!J.S(a.a,z)&&!J.S(a.b,z))this.b.$1(a)}},
kl:{"^":"a;a,0b,0c",
seJ:function(a){this.b=H.m(a,"$isc",[F.bj],"$asc")},
seK:function(a){this.c=H.m(a,"$isc",[F.bj],"$asc")},
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.N()},
B:function(a){var z,y,x,w
z=H.b([],[P.h])
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].B(a))
for(y=this.c,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.h(z,y[w].B(a))
return C.a.k(z,"\n")},
N:function(){return this.B("")}},
km:{"^":"a;a,0b",
sbC:function(a){this.b=H.m(a,"$isc",[F.c6],"$asc")},
gl:function(a){return 0},
i:function(a){return this.N()},
B:function(a){var z,y,x
z=H.b([],[P.h])
for(y=this.b,x=0;!1;++x){if(x>=0)return H.i(y,x)
C.a.h(z,y[x].B(a))}return C.a.k(z,"\n")},
N:function(){return this.B("")}}}],["","",,O,{"^":"",cb:{"^":"a;"}}],["","",,T,{"^":"",js:{"^":"cA;"},eF:{"^":"js;"},jw:{"^":"eF;0a,0b,0c,0d,0e,0f,0r,0x,0y",
gw:function(){var z=this.y
if(z==null){z=D.H()
this.y=z}return z}},jx:{"^":"a;a,0b,0c,0d,0e",
hx:function(a,b,c,d,e){var z,y,x,w
z=this.a
y=z.createTexture()
C.c.ay(z,3553,y)
C.c.bd(z,3553,10242,33071)
C.c.bd(z,3553,10243,33071)
C.c.bd(z,3553,10241,9729)
C.c.bd(z,3553,10240,9729)
C.c.ay(z,3553,null);++this.d
x=W.e_(null,a,null)
w=new T.jw()
w.a=0
w.b=y
w.c=!1
w.d=!1
w.e=0
w.f=0
w.r=0
w.x=0
z=W.a0
W.T(x,"load",H.j(new T.jy(this,w,x,!1,y,!1,!1),{func:1,ret:-1,args:[z]}),!1,z)
return w},
hw:function(a){return this.hx(a,!1,!1,!1,!1)},
fl:function(a,b,c){var z,y,x,w
b=V.ds(b,2)
z=V.ds(a.width,2)
y=V.ds(a.height,2)
z=Math.min(z,b)
y=Math.min(y,b)
if(a.width===z&&a.height===y)return a
else{x=W.cE(null,null)
x.width=z
x.height=y
w=H.e(C.m.dK(x,"2d"),"$iscF")
w.imageSmoothingEnabled=!1;(w&&C.y).hc(w,a,0,0,x.width,x.height)
return P.m2(C.y.eE(w,0,0,x.width,x.height))}}},jy:{"^":"k:12;a,b,c,d,e,f,r",
$1:function(a){var z,y,x,w
z=this.b
y=this.c
z.e=y.width
z.f=y.height
x=this.a
w=x.fl(y,x.b,this.d)
z.r=y.width
z.x=y.height
y=x.a
C.c.ay(y,3553,this.e)
C.c.hO(y,37440,this.f?1:0)
C.c.i0(y,3553,0,6408,6408,5121,w)
if(this.r)C.c.dF(y,3553)
C.c.ay(y,3553,null)
if(!z.d){z.d=!0
z=z.y
if(!(z==null))z.hd()}++x.e}}}],["","",,V,{"^":"",bd:{"^":"a;",
aB:function(a){return!0},
i:function(a){return"all"},
$isas:1},as:{"^":"a;"},ef:{"^":"a;0a",
sY:function(a){this.a=H.m(a,"$isc",[V.as],"$asc")},
aB:["e0",function(a){var z,y,x
for(z=this.a,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)if(z[x].aB(a))return!0
return!1}],
i:["ce",function(a){var z,y,x,w,v
for(z=this.a,y=z.length,x="",w=0;w<z.length;z.length===y||(0,H.C)(z),++w){v=z[w]
if(x.length!==0)x+=", "
x+=v.i(0)}return x}],
$isas:1},al:{"^":"ef;0a",
aB:function(a){return!this.e0(a)},
i:function(a){return"!["+this.ce(0)+"]"}},iW:{"^":"a;0a,0b",
aB:function(a){return this.a<=a&&this.b>=a},
i:function(a){var z,y
z=H.aX(this.a)
y=H.aX(this.b)
return z+".."+y},
$isas:1,
n:{
I:function(a,b){var z,y,x,w
if(a.length!==1||b.length!==1)throw H.d(P.a1("The given low and high character strings for a RangeMatcher must have one and only one characters."))
z=C.b.C(a,0)
y=C.b.C(b,0)
x=new V.iW()
if(z>y){w=y
y=z
z=w}x.a=z
x.b=y
return x}}},j8:{"^":"a;0a",
sfp:function(a){this.a=H.m(a,"$isB",[P.l,P.G],"$asB")},
e4:function(a){var z,y
if(a.a.length<=0)throw H.d(P.a1("May not create a SetMatcher with zero characters."))
z=new H.aM(0,0,[P.l,P.G])
for(y=new H.cO(a,a.gl(a),0,[H.Y(a,"N",0)]);y.A();)z.m(0,y.d,!0)
this.sfp(z)},
aB:function(a){return this.a.b9(a)},
i:function(a){return P.bK(this.a.gaf(),0,null)},
$isas:1,
n:{
q:function(a){var z=new V.j8()
z.e4(a)
return z}}},cW:{"^":"a;a,b,0c,0d",
sfH:function(a){this.c=H.m(a,"$isc",[V.d1],"$asc")},
k:function(a,b){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<y;++x){w=z[x]
if(w.b.b===b)return w}w=new V.d1(this.a.j(0,b))
w.sY(H.b([],[V.as]))
w.c=!1
C.a.h(this.c,w)
return w},
hh:function(a){var z,y,x,w
for(z=this.c,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
if(w.aB(a))return w}return},
i:function(a){return this.b}},eJ:{"^":"a;a,b,c",
i:function(a){var z,y
z=H.du(this.b,"\n","\\n")
y=H.du(z,"\t","\\t")
return this.a+":"+this.c+':"'+y+'"'}},d0:{"^":"a;a,b,0c",
sfi:function(a){var z=P.h
this.c=H.m(a,"$isB",[z,z],"$asB")},
am:function(a,b,c){var z,y,x
H.m(c,"$isc",[P.h],"$asc")
for(z=c.length,y=0;y<c.length;c.length===z||(0,H.C)(c),++y){x=c[y]
this.c.m(0,x,b)}},
i:function(a){return this.b}},jD:{"^":"a;0a,0b,0c",
sfw:function(a){this.a=H.m(a,"$isB",[P.h,V.cW],"$asB")},
sfD:function(a){this.b=H.m(a,"$isB",[P.h,V.d0],"$asB")},
j:function(a,b){var z=this.a.p(0,b)
if(z==null){z=new V.cW(this,b)
z.sfH(H.b([],[V.d1]))
z.d=null
this.a.m(0,b,z)}return z},
K:function(a){var z,y
z=this.b.p(0,a)
if(z==null){z=new V.d0(this,a)
y=P.h
z.sfi(new H.aM(0,0,[y,y]))
this.b.m(0,a,z)}return z},
dw:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.b([],[V.eJ])
y=this.c
x=[P.l]
w=H.b([],x)
for(v=a.length,u=null,t=0;!0;){if(t>=v){if(u!=null)C.a.h(z,u)
return z}s=C.b.C(a,t)
r=y.hh(s)
if(r==null){if(u==null){C.a.h(w,s)
q=P.bK(w,0,null)
throw H.d(P.a1("Untokenizable string [state: "+y.b+", index "+t+']: "'+q+'"'))}C.a.h(z,u)
t=u.c+1
w=H.b([],x)
y=this.c
u=null}else{if(!r.c)C.a.h(w,s)
y=r.b
if(y.d!=null){q=P.bK(w,0,null)
p=y.d
o=p.c.p(0,q)
u=new V.eJ(o==null?p.b:o,q,t)}++t}}},
n:{
cc:function(){var z,y
z=new V.jD()
y=P.h
z.sfw(new H.aM(0,0,[y,V.cW]))
z.sfD(new H.aM(0,0,[y,V.d0]))
z.c=null
return z}}},d1:{"^":"ef;b,0c,0a",
i:function(a){return this.b.b+": "+this.ce(0)}}}],["","",,X,{"^":"",dG:{"^":"a;",$iseh:1},hT:{"^":"eC;0a,0b,0c,0d,0e,0f,0r,0x",
gw:function(){var z=this.x
if(z==null){z=D.H()
this.x=z}return z}},iD:{"^":"a;0a,0b,0c,0d,0e,0f",
gw:function(){var z=this.f
if(z==null){z=D.H()
this.f=z}return z},
aJ:[function(a){var z
H.e(a,"$isv")
z=this.f
if(!(z==null))z.F(a)},function(){return this.aJ(null)},"ih","$1","$0","gci",0,2,2],
saW:function(a){var z,y
if(!J.S(this.b,a)){z=this.b
if(z!=null)z.gw().U(0,this.gci())
y=this.b
this.b=a
if(a!=null)a.gw().h(0,this.gci())
z=new D.K("mover",y,this.b,this,[U.a6])
z.b=!0
this.aJ(z)}},
$iseh:1,
$isdG:1},eC:{"^":"a;"}}],["","",,V,{"^":"",
mF:function(a){P.jC(C.R,new V.mG(a))},
aI:{"^":"a;0d",
sbu:function(a){this.d=H.m(a,"$isc",[[P.c,W.aK]],"$asc")},
b4:function(a){this.b=new P.i_(C.T)
this.c=null
this.sbu(H.b([],[[P.c,W.aK]]))},
J:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.d
if(z.length===0)C.a.h(z,H.b([],[W.aK]))
y=a.split("\n")
for(z=y.length,x=[W.aK],w=!0,v=0;v<z;++v){u=y[v]
if(w)w=!1
else C.a.h(this.d,H.b([],x))
t=document.createElement("div")
t.className="codePart"
H.y(u)
s=this.b.eq(u,0,u.length)
r=s==null?u:s
C.e.dU(t,H.du(r," ","&nbsp;"))
r=t.style
r.color=b
C.a.h(C.a.gag(this.d),t)}},
dl:function(a){var z,y,x,w
H.m(a,"$isc",[P.h],"$asc")
this.sbu(H.b([],[[P.c,W.aK]]))
z=C.a.k(a,"\n")
y=this.c
if(y==null){y=this.ba()
this.c=y}for(y=y.dw(z),x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)this.bc(y[w])}},
mG:{"^":"k:46;a",
$1:function(a){H.e(a,"$isaY")
P.dt(C.f.dv(this.a.ghm(),2)+" fps")}},
hx:{"^":"aI;a,0b,0c,0d",
bc:function(a){switch(a.a){case"Class":this.J(a.b,"#551")
break
case"Comment":this.J(a.b,"#777")
break
case"Id":this.J(a.b,"#111")
break
case"Num":this.J(a.b,"#191")
break
case"Reserved":this.J(a.b,"#119")
break
case"String":this.J(a.b,"#171")
break
case"Symbol":this.J(a.b,"#616")
break
case"Type":this.J(a.b,"#B11")
break
case"Whitespace":this.J(a.b,"#111")
break}},
ba:function(){var z,y,x,w
z=V.cc()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.q(new H.o("_"))
C.a.h(y.a,x)
x=V.I("a","z")
C.a.h(y.a,x)
x=V.I("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.q(new H.o("_"))
C.a.h(x.a,y)
y=V.I("0","9")
C.a.h(x.a,y)
y=V.I("a","z")
C.a.h(x.a,y)
y=V.I("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Int")
x=V.I("0","9")
C.a.h(y.a,x)
x=z.j(0,"Int").k(0,"Int")
y=V.I("0","9")
C.a.h(x.a,y)
y=z.j(0,"Int").k(0,"FloatDot")
x=V.q(new H.o("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").k(0,"Float")
y=V.I("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").k(0,"Float")
x=V.I("0","9")
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
C.a.h(z.j(0,"OpenDoubleStr").k(0,"OpenDoubleStr").a,new V.bd())
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
C.a.h(z.j(0,"OpenSingleStr").k(0,"OpenSingleStr").a,new V.bd())
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
x=new V.al()
w=[V.as]
x.sY(H.b([],w))
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
x=new V.al()
x.sY(H.b([],w))
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
x.d=x.a.K("Num")
x=z.j(0,"Float")
x.d=x.a.K("Num")
x=z.j(0,"Sym")
x.d=x.a.K("Symbol")
x=z.j(0,"CloseDoubleStr")
x.d=x.a.K("String")
x=z.j(0,"CloseSingleStr")
x.d=x.a.K("String")
x=z.j(0,"EndComment")
x.d=x.a.K("Comment")
x=z.j(0,"Whitespace")
x.d=x.a.K("Whitespace")
x=z.j(0,"Id")
y=x.a.K("Id")
x.d=y
x=[P.h]
y.am(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],x))
y.am(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],x))
y.am(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],x))
return z}},
hU:{"^":"aI;a,0b,0c,0d",
bc:function(a){switch(a.a){case"Builtin":this.J(a.b,"#411")
break
case"Comment":this.J(a.b,"#777")
break
case"Id":this.J(a.b,"#111")
break
case"Num":this.J(a.b,"#191")
break
case"Preprocess":this.J(a.b,"#737")
break
case"Reserved":this.J(a.b,"#119")
break
case"Symbol":this.J(a.b,"#611")
break
case"Type":this.J(a.b,"#171")
break
case"Whitespace":this.J(a.b,"#111")
break}},
ba:function(){var z,y,x,w
z=V.cc()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.q(new H.o("_"))
C.a.h(y.a,x)
x=V.I("a","z")
C.a.h(y.a,x)
x=V.I("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.q(new H.o("_"))
C.a.h(x.a,y)
y=V.I("0","9")
C.a.h(x.a,y)
y=V.I("a","z")
C.a.h(x.a,y)
y=V.I("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Int")
x=V.I("0","9")
C.a.h(y.a,x)
x=z.j(0,"Int").k(0,"Int")
y=V.I("0","9")
C.a.h(x.a,y)
y=z.j(0,"Int").k(0,"FloatDot")
x=V.q(new H.o("."))
C.a.h(y.a,x)
x=z.j(0,"FloatDot").k(0,"Float")
y=V.I("0","9")
C.a.h(x.a,y)
y=z.j(0,"Float").k(0,"Float")
x=V.I("0","9")
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
C.a.h(z.j(0,"Slash").k(0,"Sym").a,new V.bd())
x=z.j(0,"Comment").k(0,"EndComment")
y=V.q(new H.o("\n"))
C.a.h(x.a,y)
y=z.j(0,"Comment").k(0,"Comment")
x=new V.al()
w=[V.as]
x.sY(H.b([],w))
C.a.h(y.a,x)
y=V.q(new H.o("\n"))
C.a.h(x.a,y)
y=z.j(0,"Start").k(0,"Preprocess")
x=V.q(new H.o("#"))
C.a.h(y.a,x)
x=z.j(0,"Preprocess").k(0,"Preprocess")
y=new V.al()
y.sY(H.b([],w))
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
y.d=y.a.K("Num")
y=z.j(0,"Float")
y.d=y.a.K("Num")
y=z.j(0,"Sym")
y.d=y.a.K("Symbol")
y=z.j(0,"EndComment")
y.d=y.a.K("Comment")
y=z.j(0,"EndPreprocess")
y.d=y.a.K("Preprocess")
y=z.j(0,"Whitespace")
y.d=y.a.K("Whitespace")
y=z.j(0,"Id")
x=y.a.K("Id")
y.d=x
y=[P.h]
x.am(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],y))
x.am(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],y))
x.am(0,"Builtin",H.b(["gl_FragColor","gl_Position"],y))
return z}},
hV:{"^":"aI;a,0b,0c,0d",
bc:function(a){switch(a.a){case"Attr":this.J(a.b,"#911")
this.J("=","#111")
break
case"Id":this.J(a.b,"#111")
break
case"Other":this.J(a.b,"#111")
break
case"Reserved":this.J(a.b,"#119")
break
case"String":this.J(a.b,"#171")
break
case"Symbol":this.J(a.b,"#616")
break}},
ba:function(){var z,y,x
z=V.cc()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Id")
x=V.q(new H.o("_"))
C.a.h(y.a,x)
x=V.I("a","z")
C.a.h(y.a,x)
x=V.I("A","Z")
C.a.h(y.a,x)
x=z.j(0,"Id").k(0,"Id")
y=V.q(new H.o("_"))
C.a.h(x.a,y)
y=V.I("0","9")
C.a.h(x.a,y)
y=V.I("a","z")
C.a.h(x.a,y)
y=V.I("A","Z")
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
C.a.h(z.j(0,"OpenStr").k(0,"OpenStr").a,new V.bd())
C.a.h(z.j(0,"Start").k(0,"Other").a,new V.bd())
y=z.j(0,"Other").k(0,"Other")
x=new V.al()
x.sY(H.b([],[V.as]))
C.a.h(y.a,x)
y=V.q(new H.o('</\\-!>=_"'))
C.a.h(x.a,y)
y=V.I("a","z")
C.a.h(x.a,y)
y=V.I("A","Z")
C.a.h(x.a,y)
y=z.j(0,"Sym")
y.d=y.a.K("Symbol")
y=z.j(0,"CloseStr")
y.d=y.a.K("String")
y=z.j(0,"Id")
x=y.a.K("Id")
y.d=x
x.am(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
x=z.j(0,"Attr")
x.d=x.a.K("Attr")
x=z.j(0,"Other")
x.d=x.a.K("Other")
return z}},
iF:{"^":"aI;a,0b,0c,0d",
dl:function(a){H.m(a,"$isc",[P.h],"$asc")
this.sbu(H.b([],[[P.c,W.aK]]))
this.J(C.a.k(a,"\n"),"#111")},
bc:function(a){},
ba:function(){return}},
iT:{"^":"a;a,b,0c",
cT:function(a,b,c,d){var z,y,x,w,v,u,t,s
H.j(c,{func:1,ret:-1})
if(this.c==null)return
z=this.a
y=P.ch().gaZ().p(0,H.f(z))
if(y==null)if(d){c.$0()
this.aP(b)
x=!0}else x=!1
else if(y===b){c.$0()
x=!0}else x=!1
w=document
v=w.createElement("label")
u=v.style
u.whiteSpace="nowrap"
J.bc(this.c).h(0,v)
t=W.i2("radio")
t.checked=x
t.name=z
z=W.a0
W.T(t,"change",H.j(new V.iU(this,t,c,b),{func:1,ret:-1,args:[z]}),!1,z)
C.C.v(v,t)
s=w.createElement("span")
s.textContent=b
C.C.v(v,s)
J.bc(this.c).h(0,w.createElement("br"))},
Z:function(a,b,c){return this.cT(a,b,c,!1)},
aP:function(a){var z,y,x,w,v
z=P.ch()
y=P.h
x=P.ea(z.gaZ(),y,y)
x.m(0,this.a,a)
w=z.c2(0,x)
y=window.history
v=w.i(0)
y.toString;(y&&C.z).cK(y,new P.fp([],[]).be(""),"",v)}},
iU:{"^":"k:12;a,b,c,d",
$1:function(a){if(this.b.checked){this.c.$0()
this.a.aP(this.d)}}},
je:{"^":"a;0a,0b",
e6:function(a,b){var z,y,x,w,v,u,t
z=document
y=z.body
x=z.createElement("div")
x.className="scrollTop";(y&&C.l).v(y,x)
w=z.createElement("div")
w.className="scrollPage"
C.l.v(y,w)
v=z.createElement("div")
v.className="pageCenter"
C.e.v(w,v)
if(a.length!==0){z.title=a
u=z.createElement("div")
u.className="pageTitle"
u.textContent=a
C.e.v(v,u)}t=z.createElement("div")
this.a=t
C.e.v(v,t)
this.b=null
t=W.a0
W.T(z,"scroll",H.j(new V.jh(x),{func:1,ret:-1,args:[t]}),!1,t)},
cV:function(a){var z,y,x,w,v,u,t,s,r,q,p
H.m(a,"$isc",[P.h],"$asc")
this.fs()
z=document
y=z.createElement("div")
y.className="textPar"
for(x=this.b.dw(C.a.hs(a)),w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v){u=x[v]
switch(u.a){case"Bold":t=z.createElement("div")
t.className="boldPar"
t.textContent=u.b
C.e.v(y,t)
break
case"Italic":t=z.createElement("div")
t.className="italicPar"
t.textContent=u.b
C.e.v(y,t)
break
case"Code":t=z.createElement("div")
t.className="codePar"
t.textContent=u.b
C.e.v(y,t)
break
case"Link":s=u.b
if(H.fW(s,"|",0)){r=s.split("|")
q=z.createElement("a")
q.className="linkPar"
if(1>=r.length)return H.i(r,1)
q.href=H.y(r[1])
q.textContent=H.y(r[0])
C.e.v(y,q)}else{p=P.bN(C.F,s,C.i,!1)
q=z.createElement("a")
q.className="linkPar"
q.href="#"+H.f(p)
q.textContent=s
C.e.v(y,q)}break
case"Other":t=z.createElement("div")
t.className="normalPar"
t.textContent=u.b
C.e.v(y,t)
break}}C.e.v(this.a,y)},
dJ:function(a){var z,y,x,w
z=new V.hx("dart")
z.b4("dart")
y=new V.hU("glsl")
y.b4("glsl")
x=new V.hV("html")
x.b4("html")
w=C.a.hi(H.b([z,y,x],[V.aI]),new V.ji(a))
if(w!=null)return w
z=new V.iF("plain")
z.b4("plain")
return z},
cU:function(a,a0,a1,a2){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.m(a2,"$isc",[P.h],"$asc")
z=H.b([],[P.l])
for(y=!1,x=0;x<a2.length;++x){w=a2[x]
if(J.bw(w).X(w,"+")){C.a.m(a2,x,C.b.ah(w,1))
C.a.h(z,1)
y=!0}else if(C.b.X(w,"-")){C.a.m(a2,x,C.b.ah(w,1))
C.a.h(z,-1)
y=!0}else C.a.h(z,0)}v=this.dJ(a0)
v.dl(a2)
u=document
t=u.createElement("div")
t.className="codeTableScroll"
s=u.createElement("table")
s.className="codeTable"
C.e.v(t,s)
C.e.v(this.a,t)
r=P.bN(C.F,a,C.i,!1)
q=u.createElement("tr")
q.className="headerRow"
p=u.createElement("td")
p.className="headerCell"
p.colSpan=y?3:2
o=u.createElement("div")
o.className="tableHeader"
o.id=r
n=W.dx(null)
n.href="#"+H.f(r)
n.textContent=a
C.e.v(o,n)
C.t.v(p,o)
C.j.v(q,p)
C.k.v(s,q)
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
for(k=w.length,e=0;e<w.length;w.length===k||(0,H.C)(w),++e)C.t.v(f,w[e])
C.j.v(j,i)
C.j.v(j,h)
C.j.v(j,f)
C.k.v(s,j)}else for(k=v.d,d=k.length,c=a1,e=0;e<k.length;k.length===d||(0,H.C)(k),++e){w=k[e]
j=u.createElement("tr")
j.className="codeTableRow"
i=u.createElement("td")
i.className="codeLineNums";++c
i.textContent=""+c
h=u.createElement("td")
h.className="codeLineText"
for(b=C.a.gR(w);b.A();)C.t.v(h,b.gE())
C.j.v(j,i)
C.j.v(j,h)
C.k.v(s,j)}},
fK:function(a){var z,y,x,w,v,u,t
H.m(a,"$isc",[P.h],"$asc")
z=document
y=z.createElement("table")
y.id="shellTable"
x=y.style
x.width="100%"
x.padding="0px"
x.marginLeft="auto"
x.marginRight="auto"
C.e.v(this.a,y)
w=C.k.eH(y,-1)
x=H.e((w&&C.j).cC(w,-1),"$isca").style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto"
for(v=0;v<2;++v){u=z.createElement("div")
u.id=a[v]
x=u.style
x.textAlign="left"
x=u.style
x.verticalAlign="top"
t=H.e(C.j.cC(w,-1),"$isca")
x=t.style
x.textAlign="center"
x.verticalAlign="top"
x.marginLeft="auto"
x.marginRight="auto";(t&&C.t).v(t,u)}},
fs:function(){var z,y,x,w
if(this.b!=null)return
z=V.cc()
z.c=z.j(0,"Start")
y=z.j(0,"Start").k(0,"Bold")
x=V.q(new H.o("*"))
C.a.h(y.a,x)
y.c=!0
y=z.j(0,"Bold").k(0,"Bold")
x=new V.al()
w=[V.as]
x.sY(H.b([],w))
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
x=new V.al()
x.sY(H.b([],w))
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
x=new V.al()
x.sY(H.b([],w))
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
y=new V.al()
y.sY(H.b([],w))
C.a.h(x.a,y)
x=V.q(new H.o("|]"))
C.a.h(y.a,x)
x=z.j(0,"LinkTail").k(0,"LinkEnd")
y=V.q(new H.o("]"))
C.a.h(x.a,y)
x.c=!0
x=z.j(0,"LinkTail").k(0,"LinkTail")
y=new V.al()
y.sY(H.b([],w))
C.a.h(x.a,y)
x=V.q(new H.o("|]"))
C.a.h(y.a,x)
C.a.h(z.j(0,"Start").k(0,"Other").a,new V.bd())
x=z.j(0,"Other").k(0,"Other")
y=new V.al()
y.sY(H.b([],w))
C.a.h(x.a,y)
x=V.q(new H.o("*_`["))
C.a.h(y.a,x)
x=z.j(0,"BoldEnd")
x.d=x.a.K("Bold")
x=z.j(0,"ItalicEnd")
x.d=x.a.K("Italic")
x=z.j(0,"CodeEnd")
x.d=x.a.K("Code")
x=z.j(0,"LinkEnd")
x.d=x.a.K("Link")
x=z.j(0,"Other")
x.d=x.a.K("Other")
this.b=z},
n:{
jf:function(a,b){var z=new V.je()
z.e6(a,!0)
return z}}},
jh:{"^":"k:12;a",
$1:function(a){P.eH(C.u,new V.jg(this.a))}},
jg:{"^":"k:0;a",
$0:function(){var z,y,x
z=C.f.ab(document.documentElement.scrollTop)
y=this.a.style
x=H.f(-0.01*z)+"px"
y.top=x}},
ji:{"^":"k:47;a",
$1:function(a){return H.e(a,"$isaI").a===this.a}},
jt:{"^":"a;a,b,0c,d",
Z:function(a,b,c){var z,y,x,w,v
z=W.e_(null,null,null)
z.src=b
z.width=64
z.height=64
y=z.style
y.border="solid 2px white"
y=J.bc(this.c)
x=y.gl(y)
y=W.a4
W.T(z,"click",H.j(new V.jv(this,z,b,x),{func:1,ret:-1,args:[y]}),!1,y)
J.bc(this.c).h(0,z)
J.bc(this.c).h(0,document.createElement("br"))
w=P.ch().gaZ().p(0,H.f(this.a))
if(w==null){this.aP(x)
v=c}else v=P.by(w,null,null)===x
if(v)z.click()},
h:function(a,b){return this.Z(a,b,!1)},
aP:function(a){var z,y,x,w,v
z=P.ch()
y=P.h
x=P.ea(z.gaZ(),y,y)
x.m(0,this.a,""+a)
w=z.c2(0,x)
y=window.history
v=w.i(0)
y.toString;(y&&C.z).cK(y,new P.fp([],[]).be(""),"",v)}},
jv:{"^":"k:48;a,b,c,d",
$1:function(a){var z,y
H.e(a,"$isa4")
z=this.a
y=J.bc(z.c)
y.M(y,new V.ju())
y=this.b.style
y.border="solid 2px black"
z.d.$1(this.c)
z.aP(this.d)}},
ju:{"^":"k:49;",
$1:function(a){var z
H.e(a,"$isD")
if(!!J.E(a).$iscI){z=a.style
z.border="solid 2px white"}}}}],["","",,T,{"^":"",
fS:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
z=V.jf("Test 008",!0)
y=W.cE(null,null)
y.className="pageLargeCanvas"
y.id="testCanvas"
C.e.v(z.a,y)
x=[P.h]
z.cV(H.b(["A custom shader for testing and fixing the normal distortion ","equation used for bump maps. This displays the normal vectors ","across a surface."],x))
z.fK(H.b(["bumpMaps","scalars"],x))
z.cV(H.b(["\xab[Back to Tests|../]"],x))
x=document
w=C.n.bh(x,"testCanvas")
if(w==null)H.M(P.a1("Failed to find an element with the identifier, testCanvas."))
v=E.jA(w,!0,!0,!0,!1)
u=F.m9(50,null,50)
t=u.e
if(!(t==null))++t.d
u.d.bO()
u.a.bO()
t=u.e
if(!(t==null))t.b_()
t=u.e
if(!(t==null))++t.d
u.d.bM()
u.a.bM()
t=u.e
if(!(t==null))t.b_()
u.d.hR()
for(s=u.a.c.length-1;s>=0;--s){t=u.a.c
if(s>=t.length)return H.i(t,s)
r=t[s]
if(r.ch!==0){r.ch=0
t=r.a
if(t!=null){t=t.e
if(!(t==null))t.F(null)}}q=r.fY()
if(q.ch!==1){q.ch=1
t=q.a
if(t!=null){t=t.e
if(!(t==null))t.F(null)}}u.a.h(0,q)
t=u.c.a
t.a.h(0,r)
t.a.h(0,q)
t=new F.bj()
p=r.a
if(p==null)H.M(P.a1("May not create a line with a start vertex which is not attached to a shape."))
o=q.a
if(p==null?o!=null:p!==o)H.M(P.a1("May not create a line with vertices attached to different shapes."))
t.a=r
C.a.h(r.c.b,t)
t.b=q
C.a.h(q.c.c,t)
C.a.h(t.a.a.c.b,t)
t=t.a.a.e
if(!(t==null))t.F(null)}n=new T.hj()
n.c=1
n.sa3(0.5)
m=E.dX(null,!0,null,"",null,null)
m.scc(0,u)
m.sdt(n)
l=E.dX(null,!0,null,"",null,null)
l.y.h(0,m)
t=new U.dZ()
t.cf(U.a6)
t.bk(t.geS(),t.gf8())
t.e=null
t.f=V.c5()
t.r=0
p=v.r
o=new U.k7()
k=U.cG()
k.sc8(0,!0)
k.sbX(6.283185307179586)
k.sbZ(0)
k.sa1(0,0)
k.sbY(100)
k.sS(0)
k.sbS(0.5)
o.b=k
j=o.gas()
k.gw().h(0,j)
k=U.cG()
k.sc8(0,!0)
k.sbX(6.283185307179586)
k.sbZ(0)
k.sa1(0,0)
k.sbY(100)
k.sS(0)
k.sbS(0.5)
o.c=k
k.gw().h(0,j)
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
i=new X.at(!1,!1,!1)
h=o.d
o.d=i
k=[X.at]
j=new D.K("modifiers",h,i,o,k)
j.b=!0
o.P(j)
j=o.f
if(j!==!1){o.f=!1
j=new D.K("invertX",j,!1,o,[P.G])
j.b=!0
o.P(j)}j=o.r
if(j!==!0){o.r=!0
j=new D.K("invertY",j,!0,o,[P.G])
j.b=!0
o.P(j)}o.aQ(p)
t.h(0,o)
p=v.r
o=new U.k6()
j=U.cG()
j.sc8(0,!0)
j.sbX(6.283185307179586)
j.sbZ(0)
j.sa1(0,0)
j.sbY(100)
j.sS(0)
j.sbS(0.2)
o.b=j
j.gw().h(0,o.gas())
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
i=new X.at(!0,!1,!1)
h=o.c
o.c=i
j=new D.K("modifiers",h,i,o,k)
j.b=!0
o.P(j)
o.aQ(p)
t.h(0,o)
p=v.r
o=new U.k8()
o.c=0.01
o.d=0
o.e=0
i=new X.at(!1,!1,!1)
o.b=i
k=new D.K("modifiers",null,i,o,k)
k.b=!0
o.P(k)
o.aQ(p)
t.h(0,o)
l.saW(t)
t=new M.hK()
t.seo(0,O.dK(E.aj))
t.d.bk(t.geU(),t.geV())
t.e=null
t.f=null
t.r=null
t.x=null
g=new X.iD()
g.c=1.0471975511965976
g.d=0.1
g.e=2000
g.saW(null)
p=g.c
if(!$.r.$2(p,1.0471975511965976)){h=g.c
g.c=1.0471975511965976
p=new D.K("fov",h,1.0471975511965976,g,[P.w])
p.b=!0
g.aJ(p)}p=g.d
if(!$.r.$2(p,0.1)){h=g.d
g.d=0.1
p=new D.K("near",h,0.1,g,[P.w])
p.b=!0
g.aJ(p)}p=g.e
if(!$.r.$2(p,2000)){h=g.e
g.e=2000
p=new D.K("far",h,2000,g,[P.w])
p.b=!0
g.aJ(p)}p=t.a
if(p!==g){if(p!=null)p.gw().U(0,t.gap())
h=t.a
t.a=g
g.gw().h(0,t.gap())
p=new D.K("camera",h,t.a,t,[X.dG])
p.b=!0
t.aI(p)}f=new X.hT()
p=new V.bU(0,0,0,1)
f.a=p
f.b=!0
f.c=2000
f.d=!0
f.e=0
f.f=!1
p=$.ev
if(p==null){p=V.eu(0,0,1,1)
$.ev=p}f.r=p
p=t.b
if(p!==f){if(p!=null)p.gw().U(0,t.gap())
h=t.b
t.b=f
f.gw().h(0,t.gap())
p=new D.K("target",h,t.b,t,[X.eC])
p.b=!0
t.aI(p)}t.d.h(0,l)
p=t.a
e=V.ay(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
o=new U.dL()
o.a=e
p.saW(o)
p=v.d
if(p!==t){if(p!=null)p.gw().U(0,v.gcg())
v.d=t
t.gw().h(0,v.gcg())
v.ea()}t=new V.jt("bumpMaps",!0,new T.mn(n,v))
p=C.n.bh(x,"bumpMaps")
t.c=p
if(p==null)H.M("Failed to find bumpMaps for Texture2DGroup")
t.Z(0,"../resources/BumpMap1.png",!0)
t.h(0,"../resources/BumpMap2.png")
t.h(0,"../resources/BumpMap3.png")
t.h(0,"../resources/BumpMap4.png")
t.h(0,"../resources/BumpMap5.png")
t.h(0,"../resources/ScrewBumpMap.png")
t.h(0,"../resources/CtrlPnlBumpMap.png")
t=new V.iT("scalars",!0)
x=C.n.bh(x,"scalars")
t.c=x
if(x==null)H.M("Failed to find scalars for RadioGroup")
t.Z(0,"0.1",new T.mo(n))
t.Z(0,"0.2",new T.mp(n))
t.Z(0,"0.3",new T.mr(n))
t.Z(0,"0.4",new T.ms(n))
t.cT(0,"0.5",new T.mt(n),!0)
t.Z(0,"0.6",new T.mu(n))
t.Z(0,"0.7",new T.mv(n))
t.Z(0,"0.8",new T.mw(n))
t.Z(0,"0.9",new T.mx(n))
t.Z(0,"1.0",new T.my(n))
x=v.z
if(x==null){x=D.H()
v.z=x}t={func:1,ret:-1,args:[D.v]}
p=H.j(new T.mq(z,n),t)
if(x.b==null)x.sb6(H.b([],[t]))
x=x.b;(x&&C.a).h(x,p)
V.mF(v)},
hg:{"^":"cV;0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,a,b,0c,0d,0e,0f,0r,0x,0y"},
hj:{"^":"cb;0a,0b,0c,0d",
gw:function(){var z=this.d
if(z==null){z=D.H()
this.d=z}return z},
bH:[function(a){var z
H.e(a,"$isv")
z=this.d
if(!(z==null))z.F(a)},function(){return this.bH(null)},"iF","$1","$0","gcP",0,2,2],
sa3:function(a){var z,y
z=this.c
if(!$.r.$2(z,a)){y=this.c
this.c=a
z=new D.K("offsetScalar",y,a,this,[P.w])
z.b=!0
this.bH(z)}}},
mn:{"^":"k:18;a,b",
$1:function(a){var z,y,x,w
z=this.a
y=this.b.f.hw(a)
x=z.b
if(x!==y){if(x!=null)x.gw().U(0,z.gcP())
w=z.b
z.b=y
y.gw().h(0,z.gcP())
y=new D.K("bumpyTexture",w,z.b,z,[T.eF])
y.b=!0
z.bH(y)}}},
mo:{"^":"k:0;a",
$0:function(){this.a.sa3(0.1)}},
mp:{"^":"k:0;a",
$0:function(){this.a.sa3(0.2)}},
mr:{"^":"k:0;a",
$0:function(){this.a.sa3(0.3)}},
ms:{"^":"k:0;a",
$0:function(){this.a.sa3(0.4)}},
mt:{"^":"k:0;a",
$0:function(){this.a.sa3(0.5)}},
mu:{"^":"k:0;a",
$0:function(){this.a.sa3(0.6)}},
mv:{"^":"k:0;a",
$0:function(){this.a.sa3(0.7)}},
mw:{"^":"k:0;a",
$0:function(){this.a.sa3(0.8)}},
mx:{"^":"k:0;a",
$0:function(){this.a.sa3(0.9)}},
my:{"^":"k:0;a",
$0:function(){this.a.sa3(1)}},
mq:{"^":"k:7;a,b",
$1:function(a){var z,y,x,w
H.e(a,"$isv")
z=this.a
y=this.b
x=y.a
w=[P.h]
z.cU("Vertex Shader","glsl",0,H.b((x==null?null:x.c).split("\n"),w))
y=y.a
z.cU("Fragment Shader","glsl",0,H.b((y==null?null:y.d).split("\n"),w))}}},1]]
setupProgram(dart,0,0)
J.E=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.e5.prototype
return J.e4.prototype}if(typeof a=="string")return J.c1.prototype
if(a==null)return J.e6.prototype
if(typeof a=="boolean")return J.i6.prototype
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof P.a)return a
return J.cr(a)}
J.b8=function(a){if(typeof a=="string")return J.c1.prototype
if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof P.a)return a
return J.cr(a)}
J.dp=function(a){if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof P.a)return a
return J.cr(a)}
J.m7=function(a){if(typeof a=="number")return J.c0.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cg.prototype
return a}
J.bw=function(a){if(typeof a=="string")return J.c1.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.cg.prototype
return a}
J.R=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof P.a)return a
return J.cr(a)}
J.S=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.E(a).u(a,b)}
J.fY=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.m7(a).O(a,b)}
J.fZ=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ml(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b8(a).p(a,b)}
J.h_=function(a,b,c,d){return J.R(a).ei(a,b,c,d)}
J.h0=function(a,b){return J.bw(a).C(a,b)}
J.bQ=function(a,b){return J.R(a).fg(a,b)}
J.cw=function(a,b,c){return J.R(a).fj(a,b,c)}
J.dv=function(a,b){return J.R(a).v(a,b)}
J.h1=function(a,b){return J.bw(a).V(a,b)}
J.cx=function(a,b,c){return J.b8(a).fX(a,b,c)}
J.bR=function(a,b){return J.dp(a).a_(a,b)}
J.h2=function(a,b,c,d){return J.R(a).hg(a,b,c,d)}
J.h3=function(a){return J.R(a).gfP(a)}
J.bc=function(a){return J.R(a).gbP(a)}
J.bz=function(a){return J.E(a).gT(a)}
J.aR=function(a){return J.dp(a).gR(a)}
J.ai=function(a){return J.b8(a).gl(a)}
J.h4=function(a){return J.R(a).ghP(a)}
J.h5=function(a){return J.R(a).gi_(a)}
J.cy=function(a,b){return J.R(a).aG(a,b)}
J.dw=function(a){return J.dp(a).hQ(a)}
J.h6=function(a,b){return J.R(a).hT(a,b)}
J.h7=function(a,b){return J.R(a).si7(a,b)}
J.h8=function(a,b,c){return J.R(a).dS(a,b,c)}
J.h9=function(a,b,c){return J.bw(a).q(a,b,c)}
J.ha=function(a){return J.bw(a).i6(a)}
J.a8=function(a){return J.E(a).i(a)}
I.Z=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.bS.prototype
C.m=W.cD.prototype
C.y=W.cF.prototype
C.e=W.aK.prototype
C.Q=W.hC.prototype
C.S=W.hW.prototype
C.z=W.hX.prototype
C.n=W.hZ.prototype
C.U=J.A.prototype
C.a=J.aT.prototype
C.V=J.e4.prototype
C.d=J.e5.prototype
C.W=J.e6.prototype
C.f=J.c0.prototype
C.b=J.c1.prototype
C.a2=J.bG.prototype
C.C=W.ib.prototype
C.a8=W.iy.prototype
C.I=J.iE.prototype
C.J=W.iV.prototype
C.c=P.cU.prototype
C.t=W.ca.prototype
C.k=W.jp.prototype
C.j=W.jq.prototype
C.x=J.cg.prototype
C.K=W.bo.prototype
C.L=W.kr.prototype
C.N=new P.he(!1)
C.M=new P.hd(C.N)
C.O=new P.iC()
C.P=new P.kg()
C.h=new P.kZ()
C.u=new P.bf(0)
C.R=new P.bf(5e6)
C.T=new P.i0("element",!0,!1,!1,!1)
C.X=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.Y=function(hooks) {
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
C.A=function(hooks) { return hooks; }

C.Z=function(getTagFallback) {
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
C.a_=function() {
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
C.a0=function(hooks) {
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
C.a1=function(hooks) {
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
C.B=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.D=H.b(I.Z([127,2047,65535,1114111]),[P.l])
C.o=H.b(I.Z([0,0,32776,33792,1,10240,0,0]),[P.l])
C.a3=H.b(I.Z(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.p=H.b(I.Z([0,0,65490,45055,65535,34815,65534,18431]),[P.l])
C.q=H.b(I.Z([0,0,26624,1023,65534,2047,65534,2047]),[P.l])
C.a4=H.b(I.Z(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.E=H.b(I.Z([]),[P.h])
C.a5=H.b(I.Z([0,0,32722,12287,65534,34815,65534,18431]),[P.l])
C.F=H.b(I.Z([0,0,65498,45055,65535,34815,65534,18431]),[P.l])
C.r=H.b(I.Z([0,0,24576,1023,65534,34815,65534,18431]),[P.l])
C.G=H.b(I.Z([0,0,32754,11263,65534,34815,65534,18431]),[P.l])
C.a6=H.b(I.Z([0,0,32722,12287,65535,34815,65534,18431]),[P.l])
C.H=H.b(I.Z([0,0,65490,12287,65535,34815,65534,18431]),[P.l])
C.v=H.b(I.Z(["bind","if","ref","repeat","syntax"]),[P.h])
C.w=H.b(I.Z(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.a7=new H.hu(0,{},C.E,[P.h,P.h])
C.i=new P.k9(!1)
$.ap=0
$.be=null
$.dB=null
$.df=!1
$.fP=null
$.fK=null
$.fV=null
$.cp=null
$.ct=null
$.dq=null
$.b4=null
$.bs=null
$.bt=null
$.dg=!1
$.J=C.h
$.ax=null
$.cH=null
$.dW=null
$.dV=null
$.dR=null
$.dQ=null
$.dP=null
$.dO=null
$.r=V.it()
$.eg=null
$.eo=null
$.ep=null
$.ev=null
$.f2=null
$.f5=null
$.f4=null
$.f3=null
$.en=null
$.hi="uniform mat4 objMat;                                     \nuniform mat4 viewMat;                                    \nuniform mat4 projMat;                                    \nuniform sampler2D bumpTxt;                               \nuniform float offsetScalar;                              \n                                                         \nattribute vec3 posAttr;                                  \nattribute vec3 normAttr;                                 \nattribute vec3 binmAttr;                                 \nattribute vec2 txtAttr;                                  \nattribute float weightAttr;                              \n                                                         \nvarying vec3 color;                                      \n                                                         \nvec3 bumpyNormal(vec3 color)                             \n{                                                        \n   vec3 n = normalize(objMat*vec4(normAttr, 0.0)).xyz;   \n   vec3 b = normalize(objMat*vec4(binmAttr, 0.0)).xyz;   \n   vec3 c = cross(b, n);                                 \n   b = cross(n, c);                                      \n   mat3 mat = mat3( b.x,  b.y,  b.z,                     \n                   -c.x, -c.y, -c.z,                     \n                    n.x,  n.y,  n.z);                    \n   return mat * normalize(2.0*color - 1.0);              \n}                                                        \n                                                         \nvoid main()                                              \n{                                                        \n   color = texture2D(bumpTxt, txtAttr).rgb;              \n   vec4 pnt = projMat*viewMat*objMat*vec4(posAttr, 1.0); \n   if (weightAttr > 0.5)                                 \n   {                                                     \n     pnt += vec4(bumpyNormal(color)*offsetScalar, 0.0);  \n   }                                                     \n   gl_Position = pnt;                                    \n}                                                        \n"
$.hh="precision mediump float;            \n                                    \nvarying vec3 color;                 \n                                    \nvoid main()                         \n{                                   \n   gl_FragColor = vec4(color, 1.0); \n}                                   \n"
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
I.$lazy(y,x,w)}})(["dN","$get$dN",function(){return H.fO("_$dart_dartClosure")},"cL","$get$cL",function(){return H.fO("_$dart_js")},"eL","$get$eL",function(){return H.av(H.cd({
toString:function(){return"$receiver$"}}))},"eM","$get$eM",function(){return H.av(H.cd({$method$:null,
toString:function(){return"$receiver$"}}))},"eN","$get$eN",function(){return H.av(H.cd(null))},"eO","$get$eO",function(){return H.av(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eS","$get$eS",function(){return H.av(H.cd(void 0))},"eT","$get$eT",function(){return H.av(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eQ","$get$eQ",function(){return H.av(H.eR(null))},"eP","$get$eP",function(){return H.av(function(){try{null.$method$}catch(z){return z.message}}())},"eV","$get$eV",function(){return H.av(H.eR(void 0))},"eU","$get$eU",function(){return H.av(function(){try{(void 0).$method$}catch(z){return z.message}}())},"da","$get$da",function(){return P.ks()},"bu","$get$bu",function(){return[]},"f1","$get$f1",function(){return P.kd()},"fd","$get$fd",function(){return H.iw(H.cm(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.l])))},"fy","$get$fy",function(){return P.j_("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)},"fG","$get$fG",function(){return P.lK()},"dM","$get$dM",function(){return{}},"fh","$get$fh",function(){return P.eb(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)},"db","$get$db",function(){return P.e9(P.h,P.bE)},"f8","$get$f8",function(){return Z.af(0)},"f6","$get$f6",function(){return Z.af(511)},"aD","$get$aD",function(){return Z.af(1)},"aC","$get$aC",function(){return Z.af(2)},"aB","$get$aB",function(){return Z.af(4)},"aE","$get$aE",function(){return Z.af(8)},"b2","$get$b2",function(){return Z.af(16)},"bm","$get$bm",function(){return Z.af(32)},"bn","$get$bn",function(){return Z.af(64)},"f7","$get$f7",function(){return Z.af(96)},"aF","$get$aF",function(){return Z.af(128)},"b1","$get$b1",function(){return Z.af(256)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.z},{func:1,ret:-1,args:[D.v]},{func:1,ret:-1,opt:[D.v]},{func:1,ret:-1},{func:1,ret:-1,args:[W.a4]},{func:1,ret:P.z,args:[F.a3]},{func:1,ret:P.z,args:[,,]},{func:1,ret:P.z,args:[D.v]},{func:1,ret:-1,args:[P.l,[P.p,E.aj]]},{func:1,ret:-1,args:[W.a0]},{func:1,ret:-1,args:[W.b_]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.z,args:[W.a0]},{func:1,ret:-1,args:[P.l,[P.p,U.a6]]},{func:1,ret:P.w},{func:1,ret:P.h,args:[P.l]},{func:1,ret:-1,args:[W.bi]},{func:1,ret:P.z,args:[{func:1,ret:-1,args:[D.v]}]},{func:1,ret:P.z,args:[P.h]},{func:1,args:[,]},{func:1,ret:P.z,args:[,]},{func:1,ret:P.G,args:[W.D,P.h,P.h,W.bM]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:P.G,args:[W.x]},{func:1,ret:P.G,args:[W.au]},{func:1,ret:P.G,args:[P.h]},{func:1,ret:P.F,args:[,,]},{func:1,ret:-1,args:[W.x,W.x]},{func:1,ret:W.D,args:[W.x]},{func:1,ret:P.F,args:[P.l]},{func:1,ret:P.z,args:[P.h,,]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:P.z,args:[P.ac]},{func:1,ret:P.l,args:[P.l,P.l]},{func:1,ret:P.G,args:[P.w,P.w]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:-1,args:[P.h,P.l]},{func:1,ret:-1,args:[W.bo]},{func:1,ret:[P.B,P.h,P.h],args:[[P.B,P.h,P.h],P.h]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:P.l,args:[[P.c,P.l],P.l]},{func:1,ret:P.z,args:[,],opt:[,]},{func:1,ret:P.w,args:[P.w,P.w]},{func:1,ret:P.z,args:[F.b0,P.w,P.w]},{func:1,ret:[P.aG,,],args:[,]},{func:1,ret:P.z,args:[{func:1,ret:-1}]},{func:1,ret:P.z,args:[P.aY]},{func:1,ret:P.G,args:[V.aI]},{func:1,ret:P.z,args:[W.a4]},{func:1,ret:P.z,args:[W.D]},{func:1,args:[P.h]},{func:1,args:[,P.h]},{func:1,args:[W.a0]}]
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
if(x==y)H.mI(d||a)
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
Isolate.Z=a.Z
Isolate.dm=a.dm
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
if(typeof dartMainRunner==="function")dartMainRunner(T.fS,[])
else T.fS([])})})()
//# sourceMappingURL=test.dart.js.map
